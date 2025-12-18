#!/bin/bash
# 查找文档中需要但数据库中缺失的中药

cd "/Users/liyuange/tranditional chineses"

# 从分类文档提取所有中药名称
echo "提取分类文档中的中药名称..."
grep -o '<w:t[^>]*>[^<]*</w:t>' 中药分类.docx 2>/dev/null | \
  sed 's/<[^>]*>//g' | \
  grep -E '(、|，)' | \
  sed 's/[、，]/\n/g' | \
  sed 's/^[ \t]*//' | \
  sed 's/[ \t]*$//' | \
  grep -v '^$' | \
  grep -v '^[0-9]' | \
  grep -v '章' | \
  grep -v '味' | \
  sort -u > 分类文档中药名.txt

echo "分类文档中的中药总数："
wc -l 分类文档中药名.txt

echo -e "\n查找缺失的中药..."
while read name; do
    # 处理名称映射
    if [ "$name" = "紫苏叶" ]; then name="紫苏"; fi
    if [ "$name" = "棕榈炭" ]; then name="棕榈"; fi
    if [ "$name" = "木桶" ]; then name="木通"; fi
    if [ "$name" = "芥子" ]; then name="白芥子"; fi
    if [ "$name" = "硫磺" ]; then name="硫黄"; fi
    
    if ! grep -q "name: '$name'" script.js; then
        echo "缺失: $name"
    fi
done < 分类文档中药名.txt

