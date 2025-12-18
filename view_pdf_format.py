#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
查看PDF格式脚本
用于了解PDF的实际结构，便于调整提取逻辑
"""

import sys

try:
    import pdfplumber
except ImportError:
    print("请先安装: pip3 install pdfplumber")
    sys.exit(1)

def view_pdf_format(pdf_path, num_pages=10):
    """查看PDF前几页的内容格式"""
    print("=" * 80)
    print("PDF格式查看工具")
    print("=" * 80)
    print(f"\n查看文件: {pdf_path}")
    print(f"查看前 {num_pages} 页的内容\n")
    
    try:
        with pdfplumber.open(pdf_path) as pdf:
            total_pages = len(pdf.pages)
            print(f"总页数: {total_pages}")
            print("\n" + "=" * 80)
            
            for page_num in range(min(num_pages, total_pages)):
                page = pdf.pages[page_num]
                text = page.extract_text()
                
                if text:
                    print(f"\n{'=' * 80}")
                    print(f"第 {page_num + 1} 页 (共 {total_pages} 页)")
                    print(f"{'=' * 80}")
                    print(text)
                    print(f"\n--- 第 {page_num + 1} 页结束 ---\n")
                else:
                    print(f"\n第 {page_num + 1} 页: 无文本内容（可能是图片）\n")
            
            print("=" * 80)
            print("\n提示：")
            print("请将上面显示的内容发给我，我会根据实际格式调整提取脚本。")
            print("特别注意：")
            print("1. 中药名称的标记方式（如：1. 人参、一、人参、【人参】等）")
            print("2. 各字段的标记方式（如：性味：、【性味】、性味归经：等）")
            print("3. 每个中药占据多少行或多少页")
            
    except Exception as e:
        print(f"错误: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    view_pdf_format("中药学.pdf", num_pages=5)

