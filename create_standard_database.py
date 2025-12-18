#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
创建标准中药数据库
基于中药学教材常用中药（约300-400个）
"""

import json

# 常用中药数据库（基于中药学教材）
# 由于篇幅限制，这里提供一个包含常用中药的完整数据库结构
# 实际应用中，这个数据库应该包含300-500个常用中药

medicines_data = [
    # 解表药
    {'name': '麻黄', 'nature': '辛、微苦，温', 'channel': '归肺、膀胱经', 'effect': '发汗解表，宣肺平喘，利水消肿', 'indication': '风寒感冒；咳嗽气喘；风水水肿'},
    {'name': '桂枝', 'nature': '辛、甘，温', 'channel': '归心、肺、膀胱经', 'effect': '发汗解肌，温通经脉，助阳化气，平冲降气', 'indication': '风寒感冒；脘腹冷痛，血寒经闭；关节痹痛；痰饮，水肿；心悸，奔豚'},
    {'name': '紫苏', 'nature': '辛，温', 'channel': '归肺、脾经', 'effect': '解表散寒，行气和胃', 'indication': '风寒感冒；脾胃气滞，胸闷呕吐'},
    {'name': '生姜', 'nature': '辛，微温', 'channel': '归肺、脾、胃经', 'effect': '解表散寒，温中止呕，化痰止咳，解鱼蟹毒', 'indication': '风寒感冒；胃寒呕吐；寒痰咳嗽；鱼蟹中毒'},
    {'name': '香薷', 'nature': '辛，微温', 'channel': '归肺、脾、胃经', 'effect': '发汗解表，化湿和中，利水消肿', 'indication': '风寒感冒；水肿脚气'},
    {'name': '荆芥', 'nature': '辛，微温', 'channel': '归肺、肝经', 'effect': '解表散风，透疹，消疮', 'indication': '感冒，头痛；麻疹不透，风疹瘙痒；疮疡初起'},
    {'name': '防风', 'nature': '辛、甘，微温', 'channel': '归膀胱、肝、脾经', 'effect': '祛风解表，胜湿止痛，止痉', 'indication': '感冒头痛；风湿痹痛；风疹瘙痒；破伤风'},
    {'name': '羌活', 'nature': '辛、苦，温', 'channel': '归膀胱、肾经', 'effect': '解表散寒，祛风除湿，止痛', 'indication': '风寒感冒，头痛项强；风寒湿痹，肩背酸痛'},
    {'name': '白芷', 'nature': '辛，温', 'channel': '归胃、大肠、肺经', 'effect': '解表散寒，祛风止痛，宣通鼻窍，燥湿止带，消肿排脓', 'indication': '风寒感冒；头痛，牙痛；鼻鼽，鼻渊；带下；疮疡肿痛'},
    {'name': '细辛', 'nature': '辛，温', 'channel': '归心、肺、肾经', 'effect': '解表散寒，祛风止痛，通窍，温肺化饮', 'indication': '风寒感冒；头痛，牙痛；鼻鼽，鼻渊；寒痰停饮'},
    {'name': '藁本', 'nature': '辛，温', 'channel': '归膀胱经', 'effect': '祛风散寒，除湿止痛', 'indication': '风寒感冒，巅顶疼痛；风寒湿痹'},
    {'name': '苍耳子', 'nature': '辛、苦，温；有小毒', 'channel': '归肺经', 'effect': '散风寒，通鼻窍，祛风湿，止痛', 'indication': '鼻渊流涕；风寒头痛；风湿痹痛'},
    {'name': '辛夷', 'nature': '辛，温', 'channel': '归肺、胃经', 'effect': '散风寒，通鼻窍', 'indication': '鼻渊，鼻鼽，鼻塞流涕'},
    
    # 发散风热药
    {'name': '薄荷', 'nature': '辛，凉', 'channel': '归肺、肝经', 'effect': '疏散风热，清利头目，利咽，透疹，疏肝行气', 'indication': '风热感冒，风温初起；头痛，目赤，喉痹，口疮；风疹，麻疹；胸胁胀闷'},
    {'name': '牛蒡子', 'nature': '辛、苦，寒', 'channel': '归肺、胃经', 'effect': '疏散风热，宣肺透疹，解毒利咽', 'indication': '风热感冒，咳嗽痰多；麻疹，风疹；咽喉肿痛；痄腮，丹毒，痈肿疮毒'},
    {'name': '蝉蜕', 'nature': '甘，寒', 'channel': '归肺、肝经', 'effect': '疏散风热，利咽开音，透疹，明目退翳，息风止痉', 'indication': '风热感冒，温病初起；麻疹不透，风疹瘙痒；目赤翳障；急慢惊风，破伤风'},
    {'name': '桑叶', 'nature': '甘、苦，寒', 'channel': '归肺、肝经', 'effect': '疏散风热，清肺润燥，平抑肝阳，清肝明目', 'indication': '风热感冒，温病初起；肺热咳嗽，燥热咳嗽；肝阳眩晕；目赤昏花'},
    {'name': '菊花', 'nature': '甘、苦，微寒', 'channel': '归肺、肝经', 'effect': '疏散风热，平抑肝阳，清肝明目，清热解毒', 'indication': '风热感冒，温病初起；肝阳眩晕，肝风实证；目赤昏花；疮痈肿毒'},
    {'name': '蔓荆子', 'nature': '辛、苦，微寒', 'channel': '归膀胱、肝、胃经', 'effect': '疏散风热，清利头目', 'indication': '风热感冒头痛；目赤多泪，目暗不明；齿龈肿痛'},
    {'name': '柴胡', 'nature': '苦，微寒', 'channel': '归肝、胆、肺经', 'effect': '疏散退热，疏肝解郁，升举阳气', 'indication': '感冒发热；寒热往来；胸胁胀痛；月经不调；子宫脱垂；脱肛'},
    {'name': '升麻', 'nature': '辛、微甘，微寒', 'channel': '归肺、脾、胃、大肠经', 'effect': '发表透疹，清热解毒，升举阳气', 'indication': '风热头痛，麻疹不透；齿痛口疮，咽喉肿痛；阳毒发斑；气虚下陷'},
    {'name': '葛根', 'nature': '甘、辛，凉', 'channel': '归脾、胃、肺经', 'effect': '解肌退热，透疹，生津止渴，升阳止泻', 'indication': '外感发热头痛；麻疹不透；热病口渴，消渴；热泄热痢，脾虚泄泻'},
    {'name': '淡豆豉', 'nature': '苦、辛，凉', 'channel': '归肺、胃经', 'effect': '解表，除烦，宣发郁热', 'indication': '感冒，寒热头痛；烦闷，虚烦不眠'},
    
    # 继续添加更多常用中药...
    # 由于篇幅限制，这里提供一个模板
]

def create_full_database():
    """创建完整的中药数据库（这里提供一个包含常用中药的版本）"""
    
    # 这是一个示例结构，实际应该包含更多中药
    # 建议：根据您的PDF或教材，手动补充完整列表
    
    medicines = []
    for idx, med in enumerate(medicines_data, 1):
        med['id'] = idx
        medicines.append(med)
    
    return medicines

if __name__ == "__main__":
    print("=" * 70)
    print("标准中药数据库创建工具")
    print("=" * 70)
    print("\n提示：此脚本提供了一个基础框架。")
    print("由于PDF提取困难，建议您：")
    print("1. 运行 view_pdf_format.py 查看PDF格式，将内容发给我")
    print("2. 或手动提供Excel/文本格式的中药列表")
    print("3. 我可以帮您整理成完整的数据库\n")
    
    medicines = create_full_database()
    
    if medicines:
        # 保存为JavaScript格式
        with open('medicine_database_template.js', 'w', encoding='utf-8') as f:
            f.write('// 中药数据库模板\n')
            f.write('// 注意：这是一个基础模板，请根据实际需求补充完整\n\n')
            f.write('const medicineDatabase = [\n')
            for med in medicines:
                f.write('    {\n')
                f.write(f'        id: {med["id"]},\n')
                f.write(f'        name: \'{med["name"]}\',\n')
                f.write(f'        nature: \'{med.get("nature", "")}\',\n')
                f.write(f'        channel: \'{med.get("channel", "")}\',\n')
                f.write(f'        effect: \'{med.get("effect", "")}\',\n')
                f.write(f'        indication: \'{med.get("indication", "")}\'\n')
                f.write('    },\n')
            f.write('];\n')
        
        print(f"已创建模板文件: medicine_database_template.js")
        print(f"包含 {len(medicines)} 个中药（示例）")
    else:
        print("数据库为空，请补充中药数据")

