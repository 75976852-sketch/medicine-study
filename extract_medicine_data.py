#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
中药数据提取脚本 - 改进版
从PDF文件中提取中药信息
"""

import sys
import json
import re

try:
    import pdfplumber
except ImportError:
    print("=" * 60)
    print("错误：未安装 pdfplumber 库")
    print("=" * 60)
    print("\n请先安装依赖：")
    print("  pip3 install pdfplumber")
    sys.exit(1)

def clean_text(text):
    """清理文本"""
    if not text:
        return ""
    text = text.replace('\n', ' ').replace('\r', ' ')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def extract_medicine_from_text(text):
    """从文本块中提取中药信息"""
    medicine = {
        'name': '',
        'nature': '',
        'channel': '',
        'effect': '',
        'indication': ''
    }
    
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    if not lines:
        return None
    
    # 方法1: 查找【】标记的中药名
    for line in lines[:10]:
        bracket_match = re.search(r'【([^】]+)】', line)
        if bracket_match:
            name = bracket_match.group(1).strip()
            if 1 < len(name) <= 15:
                medicine['name'] = name
                break
    
    # 方法2: 查找数字序号开头的中药名
    if not medicine['name']:
        for line in lines[:10]:
            # 匹配: 1. 人参 或 一、人参 等格式
            match = re.match(r'^[0-9一二三四五六七八九十百]+[\.、．]?\s*([^\s（(【]+)', line)
            if match:
                name = match.group(1).strip()
                if 1 < len(name) <= 15:
                    medicine['name'] = name
                    break
    
    # 方法3: 第一行前几个字
    if not medicine['name'] and lines:
        first_line = lines[0]
        first_line = re.sub(r'^[0-9一二三四五六七八九十百]+[\.、．章节目]?\s*', '', first_line)
        name_candidate = first_line.split()[0] if first_line.split() else first_line[:10]
        if name_candidate and 1 < len(name_candidate) <= 15:
            medicine['name'] = name_candidate.strip()
    
    if not medicine['name']:
        return None
    
    # 合并所有行用于提取字段
    full_text = ' '.join(lines)
    
    # 提取性味
    patterns = [
        r'性味[：:]\s*([^归功效主治用法用量注意禁忌]+?)(?:归经|功效|主治|用法|$)',
        r'【性味】[：:]?\s*([^【】]+?)(?:【|$)',
    ]
    for pattern in patterns:
        match = re.search(pattern, full_text)
        if match:
            medicine['nature'] = clean_text(match.group(1))[:100]
            break
    
    # 提取归经
    patterns = [
        r'归经[：:]\s*([^功效主治用法用量注意禁忌]+?)(?:功效|主治|用法|$)',
        r'【归经】[：:]?\s*([^【】]+?)(?:【|$)',
    ]
    for pattern in patterns:
        match = re.search(pattern, full_text)
        if match:
            medicine['channel'] = clean_text(match.group(1))[:200]
            break
    
    # 提取功效
    patterns = [
        r'功效[：:]\s*([^主治用法用量注意禁忌]+?)(?:主治|用法|用量|注意|禁忌|$)',
        r'【功效】[：:]?\s*([^【】]+?)(?:【|$)',
        r'功能[：:]\s*([^主治用法用量注意禁忌]+?)(?:主治|用法|$)',
    ]
    for pattern in patterns:
        match = re.search(pattern, full_text)
        if match:
            medicine['effect'] = clean_text(match.group(1))[:500]
            break
    
    # 提取主治
    patterns = [
        r'主治[：:]\s*([^用法用量注意禁忌附注]+?)(?:用法|用量|注意|禁忌|附注|$)',
        r'【主治】[：:]?\s*([^【】]+?)(?:【|$)',
        r'应用[：:]\s*([^用法用量注意禁忌附注]+?)(?:用法|用量|注意|$)',
    ]
    for pattern in patterns:
        match = re.search(pattern, full_text)
        if match:
            medicine['indication'] = clean_text(match.group(1))[:1000]
            break
    
    return medicine

def extract_medicine_data(pdf_path):
    """从PDF中提取中药数据"""
    print("=" * 70)
    print("中药数据提取工具 - 改进版")
    print("=" * 70)
    print(f"\n正在读取PDF: {pdf_path}")
    
    medicines = []
    
    try:
        with pdfplumber.open(pdf_path) as pdf:
            total_pages = len(pdf.pages)
            print(f"总页数: {total_pages}")
            
            # 第一步：分析PDF结构，查看前几页示例
            print("\n" + "=" * 70)
            print("步骤1: 分析PDF格式（显示前3页内容）")
            print("=" * 70)
            
            sample_pages = []
            for page_num in range(min(5, total_pages)):
                page = pdf.pages[page_num]
                text = page.extract_text()
                if text:
                    print(f"\n--- 第 {page_num + 1} 页 ---")
                    # 只显示前800字符
                    preview = text[:800].replace('\n', '\n  ')
                    print(f"  {preview}...")
                    sample_pages.append((page_num + 1, text))
            
            print("\n" + "=" * 70)
            print("步骤2: 开始提取数据")
            print("=" * 70)
            print("\n提示：如果提取结果不理想，请将上面显示的PDF内容格式告诉我，")
            print("我可以根据实际格式调整提取逻辑。\n")
            
            # 第二步：提取数据 - 按页面提取
            medicine_id = 1
            page_buffer = ""  # 累积页面内容
            buffer_pages = 0
            
            for page_num, page in enumerate(pdf.pages, 1):
                text = page.extract_text()
                if not text:
                    continue
                
                page_buffer += text + "\n\n"
                buffer_pages += 1
                
                # 每2-3页尝试提取一次（因为一个中药可能跨页）
                if buffer_pages >= 2:
                    medicine = extract_medicine_from_text(page_buffer)
                    if medicine and medicine['name']:
                        medicine['id'] = medicine_id
                        medicines.append(medicine)
                        print(f"  ✓ {medicine_id:3d}. {medicine['name']}")
                        medicine_id += 1
                        page_buffer = text + "\n\n"  # 保留当前页，可能包含下一个中药的开始
                        buffer_pages = 1
                
                if page_num % 100 == 0:
                    print(f"  处理进度: {page_num}/{total_pages} 页，已提取 {len(medicines)} 个中药")
            
            # 处理最后的缓冲
            if page_buffer.strip():
                medicine = extract_medicine_from_text(page_buffer)
                if medicine and medicine['name']:
                    medicine['id'] = medicine_id
                    medicines.append(medicine)
                    print(f"  ✓ {medicine_id:3d}. {medicine['name']}")
            
    except Exception as e:
        print(f"\n错误: {e}")
        import traceback
        traceback.print_exc()
        return []
    
    return medicines

def save_data(medicines):
    """保存数据"""
    # 保存为JSON
    with open('medicine_data.json', 'w', encoding='utf-8') as f:
        json.dump(medicines, f, ensure_ascii=False, indent=2)
    print(f"\n已保存JSON格式: medicine_data.json")
    
    # 保存为JavaScript格式
    with open('medicine_database.js', 'w', encoding='utf-8') as f:
        f.write('// 中药数据库（从PDF提取）\n')
        f.write('// 请检查数据准确性，可能需要手动调整\n\n')
        f.write('const medicineDatabase = [\n')
        for med in medicines:
            f.write('    {\n')
            f.write(f'        id: {med["id"]},\n')
            # 转义单引号
            f.write(f'        name: \'{med["name"].replace("\'", "\\\'")}\',\n')
            f.write(f'        nature: \'{med.get("nature", "").replace("\'", "\\\'")}\',\n')
            f.write(f'        channel: \'{med.get("channel", "").replace("\'", "\\\'")}\',\n')
            f.write(f'        effect: \'{med.get("effect", "").replace("\'", "\\\'")}\',\n')
            f.write(f'        indication: \'{med.get("indication", "").replace("\'", "\\\'")}\'\n')
            f.write('    },\n')
        f.write('];\n')
    print(f"已保存JavaScript格式: medicine_database.js")

if __name__ == "__main__":
    pdf_path = "中药学.pdf"
    
    medicines = extract_medicine_data(pdf_path)
    
    print("\n" + "=" * 70)
    if medicines:
        print(f"提取完成！共提取 {len(medicines)} 个中药")
        print("=" * 70)
        
        # 显示前5个示例
        print("\n前5个中药示例：")
        for med in medicines[:5]:
            print(f"\n{med['id']}. {med['name']}")
            if med.get('nature'):
                print(f"   性味: {med['nature'][:60]}")
            if med.get('channel'):
                print(f"   归经: {med['channel'][:60]}")
            if med.get('effect'):
                print(f"   功效: {med['effect'][:60]}")
        
        save_data(medicines)
        
        print("\n" + "=" * 70)
        print("下一步操作：")
        print("1. 检查 medicine_database.js 文件中的数据")
        print("2. 如果数据不准确，请将PDF前几页的文本内容发给我")
        print("3. 我会根据实际格式调整提取脚本")
        print("=" * 70)
    else:
        print("未能提取到数据")
        print("=" * 70)
        print("\n可能的原因：")
        print("1. PDF格式特殊，需要调整解析逻辑")
        print("2. PDF是扫描版（图片），无法直接提取文本")
        print("3. 需要根据实际PDF格式定制提取方法")
        print("\n建议：请将PDF前3-5页的文本内容发给我，我会根据实际格式调整脚本")
