#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
提取Word文档内容，尝试多种方法
"""
import sys
import os

doc_path = '中药分类.docx'

# 方法1: 尝试使用python-docx
try:
    from docx import Document
    print("使用python-docx库读取...")
    doc = Document(doc_path)
    content = []
    for para in doc.paragraphs:
        text = para.text.strip()
        if text:
            content.append(text)
    
    with open('中药分类_内容.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(content))
    
    print(f"成功提取 {len(content)} 行内容到 中药分类_内容.txt")
    for i, line in enumerate(content[:30], 1):
        print(f"{i}. {line[:100]}")
    if len(content) > 30:
        print(f"... (还有 {len(content)-30} 行)")
        
except ImportError:
    print("python-docx未安装，尝试其他方法...")
    
    # 方法2: 尝试使用zipfile直接读取（.docx是zip格式）
    try:
        import zipfile
        import xml.etree.ElementTree as ET
        
        print("使用zipfile方法读取...")
        with zipfile.ZipFile(doc_path, 'r') as zip_ref:
            # 读取主文档
            xml_content = zip_ref.read('word/document.xml')
            
        # 解析XML
        root = ET.fromstring(xml_content)
        
        # 定义命名空间
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        
        content = []
        for para in root.findall('.//w:p', ns):
            texts = []
            for text_elem in para.findall('.//w:t', ns):
                if text_elem.text:
                    texts.append(text_elem.text)
            para_text = ''.join(texts).strip()
            if para_text:
                content.append(para_text)
        
        with open('中药分类_内容.txt', 'w', encoding='utf-8') as f:
            f.write('\n'.join(content))
        
        print(f"成功提取 {len(content)} 行内容到 中药分类_内容.txt")
        for i, line in enumerate(content[:30], 1):
            print(f"{i}. {line[:100]}")
        if len(content) > 30:
            print(f"... (还有 {len(content)-30} 行)")
            
    except Exception as e:
        print(f"读取失败: {e}")
        print("\n请尝试以下方法之一:")
        print("1. 安装python-docx: pip3 install python-docx")
        print("2. 将Word文档另存为.txt格式")
        print("3. 手动复制Word内容到文本文件")

