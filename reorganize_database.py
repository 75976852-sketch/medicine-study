#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
根据"中药分类.docx"重新组织数据库
"""

import re
import json

# 读取分类文件
with open('中药分类_完整内容.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 解析分类结构
categories = {}
current_chapter = ""
current_category = ""
current_subcategory = ""

for line in lines:
    line = line.strip()
    if not line or line == '​':
        continue
    
    # 匹配章节
    chapter_match = re.match(r'第(.+?)章\s+(.+?)\s*\((\d+)味\)', line)
    if chapter_match:
        current_chapter = chapter_match.group(2)
        categories[current_chapter] = {}
        continue
    
    # 匹配子分类
    subcat_match = re.match(r'(\d+)、(.+?)\s*\((\d+)味\)', line)
    if subcat_match:
        current_subcategory = subcat_match.group(2)
        if current_chapter:
            if current_chapter not in categories:
                categories[current_chapter] = {}
            categories[current_chapter][current_subcategory] = []
        continue
    
    # 如果是中药名称行（包含顿号或逗号）
    if '、' in line or '，' in line:
        # 提取中药名称
        medicines = re.split(r'[、，]', line)
        medicines = [m.strip() for m in medicines if m.strip()]
        if current_chapter and current_subcategory:
            if current_subcategory in categories[current_chapter]:
                categories[current_chapter][current_subcategory].extend(medicines)
        elif current_chapter:
            # 没有子分类，直接属于章节
            if current_chapter not in categories:
                categories[current_chapter] = {}
            if '默认' not in categories[current_chapter]:
                categories[current_chapter]['默认'] = []
            categories[current_chapter]['默认'].extend(medicines)

# 打印解析结果
print("解析的分类结构：")
for chapter, subcats in categories.items():
    print(f"\n{chapter}:")
    for subcat, medicines in subcats.items():
        print(f"  {subcat}: {len(medicines)}味")
        print(f"    {', '.join(medicines[:10])}...")

# 保存分类结构到JSON
with open('中药分类_解析.json', 'w', encoding='utf-8') as f:
    json.dump(categories, f, ensure_ascii=False, indent=2)

print(f"\n分类结构已保存到: 中药分类_解析.json")

