// 中药数据库（已删除别名和用法用量字段）
// 包含490个常用中药，涵盖解表药、清热药、泻下药、祛风湿药、化湿药、利水渗湿药、
// 温里药、理气药、消食药、驱虫药、止血药、活血化瘀药、化痰止咳平喘药、安神药、
// 平肝息风药、开窍药、补虚药、收涩药、涌吐药、攻毒杀虫止痒药等主要类别
const medicineDatabase = [
    { id: 1, name: '人参', nature: '甘、微苦，微温', channel: '归脾、肺、心、肾经', effect: '大补元气，复脉固脱，补脾益肺，生津养血，安神益智', indication: '体虚欲脱，肢冷脉微；脾虚食少，肺虚喘咳；津伤口渴，内热消渴；气血亏虚，久病虚羸；惊悸失眠' },
    { id: 2, name: '黄芪', nature: '甘，微温', channel: '归肺、脾经', effect: '补气升阳，固表止汗，利水消肿，生津养血，行滞通痹，托毒排脓，敛疮生肌', indication: '气虚乏力，食少便溏；中气下陷，久泻脱肛；表虚自汗；气虚水肿；内热消渴；血虚萎黄；半身不遂，痹痛麻木；痈疽难溃，久溃不敛' },
    { id: 3, name: '当归', nature: '甘、辛，温', channel: '归肝、心、脾经', effect: '补血活血，调经止痛，润燥滑肠', indication: '血虚萎黄，眩晕心悸；月经不调，经闭痛经；虚寒腹痛；风湿痹痛；跌扑损伤；痈疽疮疡；肠燥便秘' },
    { id: 4, name: '白术', nature: '苦、甘，温', channel: '归脾、胃经', effect: '健脾益气，燥湿利水，止汗，安胎', indication: '脾虚食少，腹胀泄泻；痰饮眩悸；水肿；自汗；胎动不安' },
    { id: 5, name: '甘草', nature: '甘，平', channel: '归心、肺、脾、胃经', effect: '补脾益气，清热解毒，祛痰止咳，缓急止痛，调和诸药', indication: '脾胃虚弱，倦怠乏力；心悸气短；咳嗽痰多；脘腹、四肢挛急疼痛；痈肿疮毒；缓解药物毒性、烈性' },
    { id: 6, name: '枸杞子', nature: '甘，平', channel: '归肝、肾经', effect: '滋补肝肾，益精明目', indication: '虚劳精亏，腰膝酸痛，眩晕耳鸣，内热消渴，血虚萎黄，目昏不明' },
    { id: 7, name: '熟地黄', nature: '甘，微温', channel: '归肝、肾经', effect: '滋阴补血，益精填髓', indication: '肝肾阴虚，腰膝酸软，骨蒸潮热，盗汗遗精；血虚萎黄，心悸怔忡；月经不调，崩漏下血；眩晕，耳鸣，须发早白' },
    { id: 8, name: '白芍', nature: '苦、酸，微寒', channel: '归肝、脾经', effect: '养血调经，敛阴止汗，柔肝止痛，平抑肝阳', indication: '血虚萎黄，月经不调，自汗，盗汗；胁痛，腹痛，四肢挛急疼痛；头痛眩晕' },
    { id: 9, name: '川芎', nature: '辛，温', channel: '归肝、胆、心包经', effect: '活血行气，祛风止痛', indication: '胸痹心痛，胸胁刺痛；跌扑肿痛；月经不调，经闭痛经；癥瘕腹痛；头痛；风湿痹痛' },
    { id: 10, name: '茯苓', nature: '甘、淡，平', channel: '归心、肺、脾、肾经', effect: '利水渗湿，健脾，宁心', indication: '水肿尿少，痰饮眩悸；脾虚食少，便溏泄泻；心神不安，惊悸失眠' },
    { id: 11, name: '陈皮', nature: '苦、辛，温', channel: '归肺、脾经', effect: '理气健脾，燥湿化痰', indication: '脘腹胀满，食少吐泻；咳嗽痰多' },
    { id: 12, name: '桂枝', nature: '辛、甘，温', channel: '归心、肺、膀胱经', effect: '发汗解肌，温通经脉，助阳化气，平冲降气', indication: '风寒感冒；脘腹冷痛，血寒经闭；关节痹痛；痰饮，水肿；心悸，奔豚' },
    { id: 13, name: '柴胡', nature: '苦，微寒', channel: '归肝、胆、肺经', effect: '疏散退热，疏肝解郁，升举阳气', indication: '感冒发热；寒热往来；胸胁胀痛；月经不调；子宫脱垂；脱肛' },
    { id: 14, name: '半夏', nature: '辛，温；有毒', channel: '归脾、胃、肺经', effect: '燥湿化痰，降逆止呕，消痞散结', indication: '湿痰寒痰，咳喘痰多，痰饮眩悸；风痰眩晕，痰厥头痛；呕吐反胃；胸脘痞闷；梅核气；瘿瘤，痰核，痈疽肿毒' },
    { id: 15, name: '生姜', nature: '辛，微温', channel: '归肺、脾、胃经', effect: '解表散寒，温中止呕，化痰止咳，解鱼蟹毒', indication: '风寒感冒；胃寒呕吐；寒痰咳嗽；鱼蟹中毒' },
    { id: 16, name: '大枣', nature: '甘，温', channel: '归脾、胃、心经', effect: '补中益气，养血安神', indication: '脾虚食少，乏力便溏；妇人脏躁，失眠' },
    { id: 17, name: '山药', nature: '甘，平', channel: '归脾、肺、肾经', effect: '补脾养胃，生津益肺，补肾涩精', indication: '脾虚食少，久泻不止；肺虚喘咳；肾虚遗精，带下，尿频；虚热消渴' },
    { id: 18, name: '麦冬', nature: '甘、微苦，微寒', channel: '归心、肺、胃经', effect: '养阴生津，润肺清心', indication: '肺燥干咳，阴虚痨嗽；喉痹咽痛；津伤口渴，内热消渴；心烦失眠；肠燥便秘' },
    { id: 19, name: '五味子', nature: '酸、甘，温', channel: '归肺、心、肾经', effect: '收敛固涩，益气生津，补肾宁心', indication: '久嗽虚喘；梦遗滑精；遗尿尿频；久泻不止；自汗，盗汗；津伤口渴，内热消渴；心悸失眠' },
    { id: 20, name: '党参', nature: '甘，平', channel: '归脾、肺经', effect: '健脾益肺，养血生津', indication: '脾肺气虚，食少倦怠，咳嗽虚喘；气血不足，面色萎黄，心悸气短；津伤口渴，内热消渴' },
    { id: 21, name: '丹参', nature: '苦，微寒', channel: '归心、肝经', effect: '活血祛瘀，通经止痛，清心除烦，凉血消痈', indication: '胸痹心痛，脘腹胁痛；癥瘕积聚，热痹疼痛；心烦不眠；月经不调，痛经经闭；疮疡肿痛' },
    { id: 22, name: '黄连', nature: '苦，寒', channel: '归心、脾、胃、肝、胆、大肠经', effect: '清热燥湿，泻火解毒', indication: '湿热痞满，呕吐吞酸；泻痢，黄疸；高热神昏，心火亢盛；心烦不寐；血热吐衄；目赤，牙痛；消渴；痈肿疔疮' },
    { id: 23, name: '黄芩', nature: '苦，寒', channel: '归肺、胆、脾、大肠、小肠经', effect: '清热燥湿，泻火解毒，止血，安胎', indication: '湿温、暑湿，胸闷呕恶；湿热痞满，泻痢，黄疸；肺热咳嗽，高热烦渴；血热吐衄；痈肿疮毒；胎动不安' },
    { id: 24, name: '金银花', nature: '甘，寒', channel: '归肺、心、胃经', effect: '清热解毒，疏散风热', indication: '痈肿疔疮；喉痹，丹毒；热毒血痢；风热感冒，温病发热' },
    { id: 25, name: '连翘', nature: '苦，微寒', channel: '归肺、心、小肠经', effect: '清热解毒，消肿散结，疏散风热', indication: '痈疽，瘰疬，乳痈，丹毒；风热感冒，温病初起；温热入营，高热烦渴；神昏发斑；热淋涩痛' },
    { id: 26, name: '板蓝根', nature: '苦，寒', channel: '归心、胃经', effect: '清热解毒，凉血利咽', indication: '温疫时毒，发热咽痛；温毒发斑，痄腮，烂喉丹痧；大头瘟疫，丹毒，痈肿' },
    { id: 27, name: '板栗', nature: '甘、咸，温', channel: '归脾、胃、肾经', effect: '养胃健脾，补肾强筋，活血止血', indication: '反胃，泄泻；腰脚软弱；吐、衄、便血；金疮、折伤肿痛，瘰疬' },
    { id: 28, name: '薄荷', nature: '辛，凉', channel: '归肺、肝经', effect: '疏散风热，清利头目，利咽，透疹，疏肝行气', indication: '风热感冒，风温初起；头痛，目赤，喉痹，口疮；风疹，麻疹；胸胁胀闷' },
    { id: 29, name: '牛蒡子', nature: '辛、苦，寒', channel: '归肺、胃经', effect: '疏散风热，宣肺透疹，解毒利咽', indication: '风热感冒，咳嗽痰多；麻疹，风疹；咽喉肿痛；痄腮，丹毒，痈肿疮毒' },
    { id: 30, name: '菊花', nature: '甘、苦，微寒', channel: '归肺、肝经', effect: '疏散风热，平抑肝阳，清肝明目，清热解毒', indication: '风热感冒，温病初起；肝阳眩晕，肝风实证；目赤昏花；疮痈肿毒' },
    // 解表药 - 发散风寒
    { id: 31, name: '麻黄', nature: '辛、微苦，温', channel: '归肺、膀胱经', effect: '发汗解表，宣肺平喘，利水消肿', indication: '风寒感冒；咳嗽气喘；风水水肿' },
    { id: 32, name: '紫苏', nature: '辛，温', channel: '归肺、脾经', effect: '解表散寒，行气和胃', indication: '风寒感冒；脾胃气滞，胸闷呕吐；胎动不安' },
    { id: 33, name: '香薷', nature: '辛，微温', channel: '归肺、脾、胃经', effect: '发汗解表，化湿和中，利水消肿', indication: '风寒感冒；水肿脚气' },
    { id: 34, name: '荆芥', nature: '辛，微温', channel: '归肺、肝经', effect: '解表散风，透疹，消疮', indication: '感冒，头痛；麻疹不透，风疹瘙痒；疮疡初起' },
    { id: 35, name: '防风', nature: '辛、甘，微温', channel: '归膀胱、肝、脾经', effect: '祛风解表，胜湿止痛，止痉', indication: '感冒头痛；风湿痹痛；风疹瘙痒；破伤风' },
    { id: 36, name: '羌活', nature: '辛、苦，温', channel: '归膀胱、肾经', effect: '解表散寒，祛风除湿，止痛', indication: '风寒感冒，头痛项强；风寒湿痹，肩背酸痛' },
    { id: 37, name: '白芷', nature: '辛，温', channel: '归胃、大肠、肺经', effect: '解表散寒，祛风止痛，宣通鼻窍，燥湿止带，消肿排脓', indication: '风寒感冒；头痛，牙痛；鼻鼽，鼻渊；带下；疮疡肿痛' },
    { id: 38, name: '细辛', nature: '辛，温', channel: '归心、肺、肾经', effect: '解表散寒，祛风止痛，通窍，温肺化饮', indication: '风寒感冒；头痛，牙痛；鼻鼽，鼻渊；寒痰停饮' },
    { id: 39, name: '藁本', nature: '辛，温', channel: '归膀胱经', effect: '祛风散寒，除湿止痛', indication: '风寒感冒，巅顶疼痛；风寒湿痹' },
    { id: 40, name: '苍耳子', nature: '辛、苦，温；有小毒', channel: '归肺经', effect: '散风寒，通鼻窍，祛风湿，止痛', indication: '鼻渊流涕；风寒头痛；风湿痹痛' },
    { id: 41, name: '辛夷', nature: '辛，温', channel: '归肺、胃经', effect: '散风寒，通鼻窍', indication: '鼻渊，鼻鼽，鼻塞流涕' },
    // 解表药 - 发散风热
    { id: 42, name: '蝉蜕', nature: '甘，寒', channel: '归肺、肝经', effect: '疏散风热，利咽开音，透疹，明目退翳，息风止痉', indication: '风热感冒，温病初起；麻疹不透，风疹瘙痒；目赤翳障；急慢惊风，破伤风' },
    { id: 43, name: '桑叶', nature: '甘、苦，寒', channel: '归肺、肝经', effect: '疏散风热，清肺润燥，平抑肝阳，清肝明目', indication: '风热感冒，温病初起；肺热咳嗽，燥热咳嗽；肝阳眩晕；目赤昏花' },
    { id: 44, name: '蔓荆子', nature: '辛、苦，微寒', channel: '归膀胱、肝、胃经', effect: '疏散风热，清利头目', indication: '风热感冒头痛；目赤多泪，目暗不明；齿龈肿痛' },
    { id: 45, name: '升麻', nature: '辛、微甘，微寒', channel: '归肺、脾、胃、大肠经', effect: '发表透疹，清热解毒，升举阳气', indication: '风热头痛，麻疹不透；齿痛口疮，咽喉肿痛；阳毒发斑；气虚下陷' },
    { id: 46, name: '葛根', nature: '甘、辛，凉', channel: '归脾、胃、肺经', effect: '解肌退热，透疹，生津止渴，升阳止泻', indication: '外感发热头痛；麻疹不透；热病口渴，消渴；热泄热痢，脾虚泄泻' },
    { id: 47, name: '淡豆豉', nature: '苦、辛，凉', channel: '归肺、胃经', effect: '解表，除烦，宣发郁热', indication: '感冒，寒热头痛；烦闷，虚烦不眠' },
    // 清热药 - 清热泻火
    { id: 48, name: '石膏', nature: '甘、辛，大寒', channel: '归肺、胃经', effect: '生用：清热泻火，除烦止渴；煅用：收湿，生肌，敛疮，止血', indication: '外感热病，高热烦渴；肺热喘咳；胃火亢盛，头痛牙痛；溃疡不敛，湿疹瘙痒，水火烫伤，外伤出血' },
    { id: 49, name: '知母', nature: '苦、甘，寒', channel: '归肺、胃、肾经', effect: '清热泻火，滋阴润燥', indication: '热病烦渴；肺热燥咳；骨蒸潮热；内热消渴；肠燥便秘' },
    { id: 50, name: '芦根', nature: '甘，寒', channel: '归肺、胃经', effect: '清热泻火，生津止渴，除烦，止呕，利尿', indication: '热病烦渴；肺热咳嗽，肺痈吐脓；胃热呕哕；热淋涩痛' },
    { id: 51, name: '天花粉', nature: '甘、微苦，微寒', channel: '归肺、胃经', effect: '清热泻火，生津止渴，消肿排脓', indication: '热病烦渴；肺热燥咳；内热消渴；疮疡肿毒' },
    { id: 52, name: '淡竹叶', nature: '甘、淡，寒', channel: '归心、胃、小肠经', effect: '清热泻火，除烦止渴，利尿通淋', indication: '热病烦渴；口疮尿赤，热淋涩痛' },
    { id: 53, name: '栀子', nature: '苦，寒', channel: '归心、肺、三焦经', effect: '泻火除烦，清热利湿，凉血解毒；外用消肿止痛', indication: '热病心烦；湿热黄疸；血淋涩痛；血热吐衄；目赤肿痛；火毒疮疡；扭挫伤痛' },
    { id: 54, name: '夏枯草', nature: '辛、苦，寒', channel: '归肝、胆经', effect: '清肝泻火，明目，散结消肿', indication: '目赤肿痛，目珠夜痛；头痛眩晕；瘰疬，瘿瘤；乳痈，乳癖' },
    { id: 55, name: '决明子', nature: '甘、苦、咸，微寒', channel: '归肝、大肠经', effect: '清热明目，润肠通便', indication: '目赤涩痛，羞明多泪，目暗不明；头痛眩晕；肠燥便秘' },
    // 清热药 - 清热燥湿
    { id: 56, name: '黄柏', nature: '苦，寒', channel: '归肾、膀胱经', effect: '清热燥湿，泻火解毒，除骨蒸', indication: '湿热泻痢，黄疸尿赤，带下阴痒，热淋涩痛，脚气痿躄；骨蒸劳热，盗汗，遗精；疮疡肿毒，湿疹湿疮' },
    { id: 57, name: '龙胆', nature: '苦，寒', channel: '归肝、胆经', effect: '清热燥湿，泻肝胆火', indication: '湿热黄疸，阴肿阴痒，带下，湿疹瘙痒；肝火目赤，耳鸣耳聋，胁痛口苦；惊风抽搐' },
    { id: 58, name: '秦皮', nature: '苦、涩，寒', channel: '归肝、胆、大肠经', effect: '清热燥湿，收涩止痢，止带，明目', indication: '湿热泻痢，赤白带下；目赤肿痛，目生翳膜' },
    { id: 59, name: '苦参', nature: '苦，寒', channel: '归心、肝、胃、大肠、膀胱经', effect: '清热燥湿，杀虫，利尿', indication: '湿热泻痢，便血，黄疸；湿热下注，带下，阴痒；湿疹湿疮，皮肤瘙痒，疥癣；湿热小便不利' },
    { id: 60, name: '白鲜皮', nature: '苦，寒', channel: '归脾、胃、膀胱经', effect: '清热燥湿，祛风解毒', indication: '湿热疮毒，黄水淋漓，湿疹，风疹，疥癣疮癞；湿热黄疸，风湿热痹' },
    // 清热药 - 清热解毒
    { id: 61, name: '蒲公英', nature: '苦、甘，寒', channel: '归肝、胃经', effect: '清热解毒，消肿散结，利尿通淋', indication: '痈肿疔毒，乳痈内痈；热淋涩痛，湿热黄疸' },
    { id: 62, name: '紫花地丁', nature: '苦、辛，寒', channel: '归心、肝经', effect: '清热解毒，凉血消肿', indication: '疔疮肿毒，痈疽发背，丹毒，毒蛇咬伤' },
    { id: 63, name: '鱼腥草', nature: '辛，微寒', channel: '归肺经', effect: '清热解毒，消痈排脓，利尿通淋', indication: '肺痈吐脓，痰热喘咳；热痢，热淋；痈肿疮毒' },
    { id: 64, name: '大青叶', nature: '苦，寒', channel: '归心、胃经', effect: '清热解毒，凉血消斑', indication: '热入营血，温毒发斑；喉痹口疮，痄腮丹毒' },
    { id: 65, name: '青黛', nature: '咸，寒', channel: '归肝经', effect: '清热解毒，凉血消斑，泻火定惊', indication: '温毒发斑，血热吐衄；咽痛口疮，火毒疮疡；咳嗽胸痛，痰中带血；暑热惊痫，惊风抽搐' },
    { id: 66, name: '贯众', nature: '苦，微寒；有小毒', channel: '归肝、胃经', effect: '清热解毒，止血，杀虫', indication: '风热感冒，温毒发斑；血热出血；虫积腹痛' },
    { id: 67, name: '土茯苓', nature: '甘、淡，平', channel: '归肝、胃经', effect: '解毒，除湿，通利关节', indication: '梅毒及汞中毒所致的肢体拘挛，筋骨疼痛；湿热淋浊，带下，痈肿，瘰疬，疥癣' },
    { id: 68, name: '射干', nature: '苦，寒', channel: '归肺经', effect: '清热解毒，消痰，利咽', indication: '热毒痰火郁结，咽喉肿痛；痰涎壅盛，咳嗽气喘' },
    { id: 69, name: '山豆根', nature: '苦，寒；有毒', channel: '归肺、胃经', effect: '清热解毒，消肿利咽', indication: '火毒蕴结，乳蛾喉痹，咽喉肿痛；齿龈肿痛，口舌生疮' },
    { id: 70, name: '马勃', nature: '辛，平', channel: '归肺经', effect: '清肺，解毒，利咽，止血', indication: '咽喉肿痛，咳嗽失音；吐血衄血，外伤出血' },
    { id: 71, name: '白头翁', nature: '苦，寒', channel: '归胃、大肠经', effect: '清热解毒，凉血止痢', indication: '热毒血痢；阴痒带下' },
    { id: 72, name: '马齿苋', nature: '酸，寒', channel: '归肝、大肠经', effect: '清热解毒，凉血止血，止痢', indication: '热毒血痢；痈肿疔疮，湿疹；崩漏，便血' },
    { id: 73, name: '鸦胆子', nature: '苦，寒；有小毒', channel: '归大肠、肝经', effect: '清热解毒，截疟，止痢；外用腐蚀赘疣', indication: '热毒血痢，冷积久痢；各型疟疾；外治赘疣，鸡眼' },
    { id: 74, name: '地锦草', nature: '辛，平', channel: '归肝、大肠经', effect: '清热解毒，凉血止血，利湿退黄', indication: '热毒泻痢；血热出血；湿热黄疸' },
    { id: 75, name: '半边莲', nature: '辛，平', channel: '归心、小肠、肺经', effect: '清热解毒，利尿消肿', indication: '痈肿疔疮，蛇虫咬伤；水肿，黄疸' },
    { id: 76, name: '白花蛇舌草', nature: '微苦、甘，寒', channel: '归胃、大肠、小肠经', effect: '清热解毒，利湿通淋', indication: '痈肿疮毒，咽喉肿痛，毒蛇咬伤；热淋涩痛；湿热黄疸' },
    { id: 77, name: '熊胆', nature: '苦，寒', channel: '归肝、胆、心经', effect: '清热解毒，息风止痉，清肝明目', indication: '热极生风，惊痫抽搐；热毒疮痈；目赤翳障；黄疸，小儿疳积，风虫牙痛' },
    // 清热药 - 清热凉血
    { id: 78, name: '生地黄', nature: '甘，寒', channel: '归心、肝、肾经', effect: '清热凉血，养阴生津', indication: '热入营血，温毒发斑；吐血衄血；热病伤阴，舌绛烦渴，内热消渴；阴虚发热，骨蒸劳热；津伤便秘' },
    { id: 79, name: '玄参', nature: '甘、苦、咸，微寒', channel: '归肺、胃、肾经', effect: '清热凉血，滋阴降火，解毒散结', indication: '热入营血，温毒发斑；热病伤阴，舌绛烦渴，津伤便秘；骨蒸劳嗽；目赤咽痛，瘰疬，白喉，痈肿疮毒' },
    { id: 80, name: '牡丹皮', nature: '苦、辛，微寒', channel: '归心、肝、肾经', effect: '清热凉血，活血化瘀', indication: '热入营血，温毒发斑，血热吐衄；温病伤阴，阴虚发热，夜热早凉，无汗骨蒸；血滞经闭痛经，跌扑伤痛；痈肿疮毒' },
    { id: 81, name: '赤芍', nature: '苦，微寒', channel: '归肝经', effect: '清热凉血，散瘀止痛', indication: '热入营血，温毒发斑，血热吐衄；目赤肿痛，痈肿疮疡；肝郁胁痛，经闭痛经，癥瘕腹痛，跌扑损伤' },
    { id: 82, name: '紫草', nature: '甘、咸，寒', channel: '归心、肝经', effect: '清热凉血，活血解毒，透疹消斑', indication: '血热毒盛，斑疹紫黑，麻疹不透；疮疡，湿疹，水火烫伤' },
    { id: 83, name: '水牛角', nature: '苦，寒', channel: '归心、肝经', effect: '清热凉血，解毒，定惊', indication: '温病高热，神昏谵语，发斑发疹；血热吐衄，惊风，癫狂' },
    // 清热药 - 清虚热
    { id: 84, name: '青蒿', nature: '苦、辛，寒', channel: '归肝、胆经', effect: '清虚热，除骨蒸，解暑热，截疟，退黄', indication: '温邪伤阴，夜热早凉；阴虚发热，骨蒸劳热；暑邪发热；疟疾寒热；湿热黄疸' },
    { id: 85, name: '白薇', nature: '苦、咸，寒', channel: '归胃、肝、肾经', effect: '清热凉血，利尿通淋，解毒疗疮', indication: '阴虚发热，骨蒸劳热；产后血虚发热；热淋，血淋；痈疽肿毒，毒蛇咬伤' },
    { id: 86, name: '地骨皮', nature: '甘，寒', channel: '归肺、肝、肾经', effect: '凉血除蒸，清肺降火', indication: '阴虚潮热，骨蒸盗汗；肺热咳嗽；血热出血' },
    { id: 87, name: '银柴胡', nature: '甘，微寒', channel: '归肝、胃经', effect: '清虚热，除疳热', indication: '阴虚发热，骨蒸劳热；小儿疳热' },
    { id: 88, name: '胡黄连', nature: '苦，寒', channel: '归肝、胃、大肠经', effect: '退虚热，除疳热，清湿热', indication: '骨蒸潮热；小儿疳热；湿热泻痢' },
    // 泻下药
    { id: 89, name: '大黄', nature: '苦，寒', channel: '归脾、胃、大肠、肝、心包经', effect: '泻下攻积，清热泻火，凉血解毒，逐瘀通经，利湿退黄', indication: '实热积滞便秘；血热吐衄，目赤咽肿；痈肿疔疮，肠痈腹痛；瘀血经闭，产后瘀阻，跌打损伤；湿热痢疾，黄疸尿赤，淋证；烧烫伤' },
    { id: 90, name: '芒硝', nature: '咸、苦，寒', channel: '归胃、大肠经', effect: '泻下通便，润燥软坚，清火消肿', indication: '实热积滞，腹满胀痛，大便燥结；肠痈腹痛；外治乳痈，痔疮肿痛' },
    { id: 91, name: '番泻叶', nature: '甘、苦，寒', channel: '归大肠经', effect: '泻下通便', indication: '热结积滞，便秘腹痛' },
    { id: 92, name: '芦荟', nature: '苦，寒', channel: '归肝、胃、大肠经', effect: '泻下通便，清肝泻火，杀虫疗疳', indication: '热结便秘；惊痫抽搐；小儿疳积；外治癣疮' },
    { id: 93, name: '火麻仁', nature: '甘，平', channel: '归脾、胃、大肠经', effect: '润肠通便', indication: '血虚津亏，肠燥便秘' },
    { id: 94, name: '郁李仁', nature: '辛、苦、甘，平', channel: '归脾、大肠、小肠经', effect: '润肠通便，下气利水', indication: '津枯肠燥，食积气滞，腹胀便秘；水肿，脚气，小便不利' },
    { id: 95, name: '松子仁', nature: '甘，温', channel: '归肺、肝、大肠经', effect: '润肠通便，润肺止咳', indication: '肠燥便秘；肺燥干咳' },
    { id: 96, name: '甘遂', nature: '苦，寒；有毒', channel: '归肺、肾、大肠经', effect: '泻水逐饮，消肿散结', indication: '水肿胀满，胸腹积水，痰饮积聚，气逆咳喘；风痰癫痫；痈肿疮毒' },
    { id: 97, name: '京大戟', nature: '苦，寒；有毒', channel: '归肺、脾、肾经', effect: '泻水逐饮，消肿散结', indication: '水肿胀满，胸腹积水，痰饮积聚；痈肿疮毒，瘰疬痰核' },
    { id: 98, name: '芫花', nature: '苦、辛，温；有毒', channel: '归肺、脾、肾经', effect: '泻水逐饮；外用杀虫疗疮', indication: '水肿胀满，胸腹积水，痰饮积聚；外治疥癣秃疮，痈肿，冻疮' },
    { id: 99, name: '商陆', nature: '苦，寒；有毒', channel: '归肺、脾、肾、大肠经', effect: '逐水消肿，通利二便；外用解毒散结', indication: '水肿胀满，二便不通；外治痈肿疮毒' },
    { id: 100, name: '牵牛子', nature: '苦，寒；有毒', channel: '归肺、肾、大肠经', effect: '泻水通便，消痰涤饮，杀虫攻积', indication: '水肿胀满，二便不通；痰饮积聚，气逆喘咳；虫积腹痛' },
    // 祛风湿药
    { id: 101, name: '独活', nature: '辛、苦，微温', channel: '归肾、膀胱经', effect: '祛风除湿，通痹止痛', indication: '风寒湿痹，腰膝疼痛；少阴伏风头痛；风寒挟湿头痛' },
    { id: 102, name: '威灵仙', nature: '辛、咸，温', channel: '归膀胱经', effect: '祛风湿，通经络', indication: '风湿痹痛，肢体麻木，筋脉拘挛，屈伸不利' },
    { id: 103, name: '川乌', nature: '辛、苦，热；有大毒', channel: '归心、肝、肾、脾经', effect: '祛风除湿，温经止痛', indication: '风寒湿痹，关节疼痛；心腹冷痛，寒疝作痛；跌打损伤，麻醉止痛' },
    { id: 104, name: '蕲蛇', nature: '甘、咸，温；有毒', channel: '归肝经', effect: '祛风，通络，止痉', indication: '风湿顽痹，麻木拘挛；中风口眼㖞斜，半身不遂；抽搐痉挛，破伤风；麻风，疥癣' },
    { id: 105, name: '乌梢蛇', nature: '甘，平', channel: '归肝经', effect: '祛风，通络，止痉', indication: '风湿顽痹，麻木拘挛；中风口眼㖞斜，半身不遂；抽搐痉挛，破伤风；麻风，疥癣' },
    { id: 106, name: '木瓜', nature: '酸，温', channel: '归肝、脾经', effect: '舒筋活络，和胃化湿', indication: '湿痹拘挛，腰膝关节酸重疼痛；脚气浮肿；暑湿吐泻，转筋挛痛' },
    { id: 107, name: '蚕沙', nature: '甘、辛，温', channel: '归肝、脾、胃经', effect: '祛风湿，和胃化湿', indication: '风湿痹痛；吐泻转筋；风疹，湿疹瘙痒' },
    { id: 108, name: '伸筋草', nature: '微苦、辛，温', channel: '归肝、脾、肾经', effect: '祛风除湿，舒筋活络', indication: '关节酸痛，屈伸不利' },
    { id: 109, name: '寻骨风', nature: '辛，苦，平', channel: '归肝经', effect: '祛风湿，通络止痛', indication: '风湿痹痛，肢体麻木，筋骨拘挛；跌打损伤' },
    { id: 110, name: '松节', nature: '苦、辛，温', channel: '归肝、肾经', effect: '祛风除湿，通络止痛', indication: '风寒湿痹，历节风痛；跌打损伤' },
    { id: 111, name: '海风藤', nature: '辛、苦，微温', channel: '归肝经', effect: '祛风湿，通经络', indication: '风寒湿痹，肢节疼痛，筋脉拘挛，屈伸不利' },
    { id: 112, name: '青风藤', nature: '苦、辛，平', channel: '归肝、脾经', effect: '祛风湿，通经络，利小便', indication: '风湿痹痛，关节肿胀，麻痹瘙痒；水肿，脚气' },
    { id: 113, name: '丁公藤', nature: '辛，温；有小毒', channel: '归肝、脾、胃经', effect: '祛风除湿，消肿止痛', indication: '风湿痹痛，半身不遂；跌打肿痛' },
    { id: 114, name: '昆明山海棠', nature: '苦、辛，温；有大毒', channel: '归肝、脾、肾经', effect: '祛风湿，祛瘀通络，续筋接骨', indication: '风湿痹痛；跌打损伤，骨折' },
    { id: 115, name: '路路通', nature: '苦，平', channel: '归肝、肾经', effect: '祛风活络，利水，通经', indication: '风湿痹痛，麻木拘挛；水肿胀满；乳少，经闭' },
    { id: 116, name: '秦艽', nature: '辛、苦，平', channel: '归胃、肝、胆经', effect: '祛风湿，通络止痛，退虚热，清湿热', indication: '风湿痹证，筋脉拘挛，骨节酸痛；中风半身不遂；骨蒸潮热，疳积发热；湿热黄疸' },
    { id: 117, name: '防己', nature: '苦，寒', channel: '归膀胱、肺经', effect: '祛风湿，止痛，利水消肿', indication: '风湿痹痛；水肿，小便不利，脚气；湿疹疮毒' },
    { id: 118, name: '桑枝', nature: '微苦，平', channel: '归肝经', effect: '祛风湿，利关节', indication: '风湿痹病，肩臂、关节酸痛麻木' },
    { id: 119, name: '豨莶草', nature: '辛、苦，寒', channel: '归肝、肾经', effect: '祛风湿，利关节，解毒', indication: '风湿痹痛，筋骨无力，腰膝酸软，四肢麻痹；风疹，湿疮；中风半身不遂' },
    { id: 120, name: '臭梧桐', nature: '辛、苦、甘，凉', channel: '归肝经', effect: '祛风湿，通经络，平肝', indication: '风湿痹痛；中风半身不遂；风疹，湿疮；肝阳上亢，头痛眩晕' },
    { id: 121, name: '海桐皮', nature: '苦、辛，平', channel: '归肝经', effect: '祛风湿，通络止痛，杀虫止痒', indication: '风湿痹痛；疥癣，湿疹瘙痒' },
    { id: 122, name: '络石藤', nature: '苦，微寒', channel: '归心、肝、肾经', effect: '祛风通络，凉血消肿', indication: '风湿热痹，筋脉拘挛，腰膝酸痛；喉痹，痈肿，跌扑损伤' },
    { id: 123, name: '雷公藤', nature: '苦、辛，寒；有大毒', channel: '归肝、肾经', effect: '祛风湿，活血通络，消肿止痛，杀虫解毒', indication: '风湿顽痹，麻风，顽癣，湿疹，疥疮，皮炎，皮疹' },
    { id: 124, name: '老鹳草', nature: '辛、苦，平', channel: '归肝、肾、脾经', effect: '祛风湿，通经络，止泻痢', indication: '风湿痹痛，麻木拘挛，筋骨酸痛；泄泻痢疾' },
    { id: 125, name: '穿山龙', nature: '苦，微寒', channel: '归肝、肺经', effect: '祛风除湿，舒筋活络，活血止痛，止咳平喘', indication: '风湿痹病，关节麻木，跌扑损伤；咳嗽气喘' },
    { id: 126, name: '丝瓜络', nature: '甘，平', channel: '归肺、胃、肝经', effect: '祛风，通络，活血，下乳', indication: '痹痛拘挛，胸胁胀痛；乳汁不通，乳痈；跌打损伤，胸痹' },
    { id: 127, name: '五加皮', nature: '辛、苦，温', channel: '归肝、肾经', effect: '祛风除湿，补益肝肾，强筋壮骨，利水消肿', indication: '风湿痹病；筋骨痿软，小儿行迟，体虚乏力；水肿，脚气' },
    { id: 128, name: '桑寄生', nature: '苦、甘，平', channel: '归肝、肾经', effect: '祛风湿，补肝肾，强筋骨，安胎', indication: '风湿痹痛，腰膝酸软，筋骨无力；崩漏经多，妊娠漏血，胎动不安；头晕目眩' },
    { id: 129, name: '狗脊', nature: '苦、甘，温', channel: '归肝、肾经', effect: '祛风湿，补肝肾，强腰膝', indication: '风湿痹痛，腰膝酸软，下肢无力；肾虚不固，遗尿尿频，带下清稀' },
    { id: 130, name: '千年健', nature: '苦、辛，温', channel: '归肝、肾经', effect: '祛风湿，强筋骨', indication: '风寒湿痹，腰膝冷痛，下肢拘挛麻木' },
    // 化湿药
    { id: 131, name: '苍术', nature: '辛、苦，温', channel: '归脾、胃、肝经', effect: '燥湿健脾，祛风散寒，明目', indication: '湿阻中焦，脘腹胀满，泄泻，水肿；风湿痹痛，脚气痿躄；风寒感冒；夜盲，眼目昏涩' },
    { id: 132, name: '厚朴', nature: '苦、辛，温', channel: '归脾、胃、肺、大肠经', effect: '燥湿消痰，下气除满', indication: '湿滞伤中，脘痞吐泻；食积气滞，腹胀便秘；痰饮喘咳，梅核气' },
    { id: 133, name: '广藿香', nature: '辛，微温', channel: '归脾、胃、肺经', effect: '芳香化浊，和中止呕，发表解暑', indication: '湿浊中阻，脘痞呕吐；暑湿表证，湿温初起，发热倦怠，胸闷不舒；寒湿闭暑，腹痛吐泻' },
    { id: 134, name: '佩兰', nature: '辛，平', channel: '归脾、胃、肺经', effect: '芳香化湿，醒脾开胃，发表解暑', indication: '湿浊中阻，脘痞呕恶；口中甜腻，口臭，多涎；暑湿表证，湿温初起，发热倦怠，胸闷不舒' },
    { id: 135, name: '砂仁', nature: '辛，温', channel: '归脾、胃、肾经', effect: '化湿开胃，温脾止泻，理气安胎', indication: '湿浊中阻，脘痞不饥；脾胃虚寒，呕吐泄泻；妊娠恶阻，胎动不安' },
    { id: 136, name: '豆蔻', nature: '辛，温', channel: '归肺、脾、胃经', effect: '化湿行气，温中止呕，开胃消食', indication: '湿浊中阻，不思饮食；湿温初起，胸闷不饥；寒湿呕逆；食积不消' },
    { id: 137, name: '草豆蔻', nature: '辛，温', channel: '归脾、胃经', effect: '燥湿行气，温中止呕', indication: '寒湿内阻，脘腹胀满冷痛；嗳气呕逆；不思饮食' },
    { id: 138, name: '草果', nature: '辛，温', channel: '归脾、胃经', effect: '燥湿温中，截疟除痰', indication: '寒湿内阻，脘腹胀痛，痞满呕吐；疟疾寒热，瘟疫发热' },
    // 利水渗湿药
    { id: 139, name: '猪苓', nature: '甘、淡，平', channel: '归肾、膀胱经', effect: '利水渗湿', indication: '水肿，小便不利，泄泻' },
    { id: 140, name: '泽泻', nature: '甘、淡，寒', channel: '归肾、膀胱经', effect: '利水渗湿，泄热，化浊降脂', indication: '小便不利，水肿胀满，泄泻尿少；痰饮眩晕；热淋涩痛；高脂血症' },
    { id: 141, name: '薏苡仁', nature: '甘、淡，凉', channel: '归脾、胃、肺经', effect: '利水渗湿，健脾止泻，除痹，排脓，解毒散结', indication: '水肿，脚气，小便不利；脾虚泄泻；湿痹拘挛；肺痈，肠痈；赘疣，癌肿' },
    { id: 142, name: '车前子', nature: '甘，寒', channel: '归肝、肾、肺、小肠经', effect: '利尿通淋，渗湿止泻，明目，祛痰', indication: '热淋涩痛，水肿胀满；暑湿泄泻；目赤肿痛，目暗昏花；痰热咳嗽' },
    { id: 143, name: '滑石', nature: '甘、淡，寒', channel: '归膀胱、肺、胃经', effect: '利尿通淋，清热解暑；外用祛湿敛疮', indication: '热淋，石淋，尿热涩痛；暑湿烦渴，湿温初起；外治湿疹，湿疮，痱子' },
    { id: 144, name: '木通', nature: '苦，寒', channel: '归心、小肠、膀胱经', effect: '利尿通淋，清心除烦，通经下乳', indication: '淋证，水肿；心烦尿赤，口舌生疮；经闭乳少，湿热痹痛' },
    { id: 145, name: '通草', nature: '甘、淡，微寒', channel: '归肺、胃经', effect: '利尿通淋，通气下乳', indication: '淋证涩痛，小便不利；水肿；产后乳汁不下' },
    { id: 146, name: '瞿麦', nature: '苦，寒', channel: '归心、小肠经', effect: '利尿通淋，活血通经', indication: '热淋，血淋，石淋；瘀阻经闭' },
    { id: 147, name: '萹蓄', nature: '苦，微寒', channel: '归膀胱经', effect: '利尿通淋，杀虫，止痒', indication: '热淋涩痛，小便短赤；虫积腹痛；皮肤湿疹，阴痒带下' },
    { id: 148, name: '地肤子', nature: '辛、苦，寒', channel: '归肾、膀胱经', effect: '利尿通淋，清热利湿，止痒', indication: '热淋涩痛；阴痒带下，风疹，湿疹' },
    { id: 149, name: '海金沙', nature: '甘、咸，寒', channel: '归膀胱、小肠经', effect: '利尿通淋，止痛', indication: '热淋，血淋，石淋，膏淋；尿道涩痛' },
    { id: 150, name: '石韦', nature: '甘、苦，微寒', channel: '归肺、膀胱经', effect: '利尿通淋，清肺止咳，凉血止血', indication: '热淋，血淋，石淋；肺热咳喘；血热出血' },
    { id: 151, name: '冬葵子', nature: '甘、涩，凉', channel: '归大肠、小肠、膀胱经', effect: '利尿通淋，下乳，润肠', indication: '淋证，水肿；乳汁不行，乳房胀痛；肠燥便秘' },
    { id: 152, name: '灯心草', nature: '甘、淡，微寒', channel: '归心、肺、小肠经', effect: '利尿通淋，清心降火', indication: '淋证；心烦失眠，口舌生疮' },
    { id: 153, name: '萆薢', nature: '苦，平', channel: '归肾、胃经', effect: '利湿去浊，祛风除痹', indication: '膏淋，白浊；白带过多；风湿痹痛，关节不利，腰膝疼痛' },
    { id: 154, name: '茵陈', nature: '苦、辛，微寒', channel: '归脾、胃、肝、胆经', effect: '清利湿热，利胆退黄', indication: '黄疸尿少；湿温暑湿；湿疮瘙痒' },
    { id: 155, name: '金钱草', nature: '甘、咸，微寒', channel: '归肝、胆、肾、膀胱经', effect: '利湿退黄，利尿通淋，解毒消肿', indication: '湿热黄疸，胆胀胁痛；石淋，热淋；痈肿疔疮，蛇虫咬伤' },
    { id: 156, name: '虎杖', nature: '微苦，微寒', channel: '归肝、胆、肺经', effect: '利湿退黄，清热解毒，散瘀止痛，止咳化痰', indication: '湿热黄疸，淋浊，带下；痈肿疮毒，水火烫伤，毒蛇咬伤；经闭，癥瘕，风湿痹痛，跌打损伤；肺热咳嗽' },
    { id: 157, name: '地耳草', nature: '苦、甘，凉', channel: '归肝、胆经', effect: '利湿退黄，清热解毒，活血消肿', indication: '湿热黄疸；肺痈，肠痈，痈肿疮毒；跌打损伤' },
    { id: 158, name: '垂盆草', nature: '甘、淡，凉', channel: '归肝、胆、小肠经', effect: '利湿退黄，清热解毒', indication: '湿热黄疸，小便不利；痈肿疮疡，喉痹，蛇虫咬伤' },
    { id: 159, name: '鸡骨草', nature: '甘、微苦，凉', channel: '归肝、胃经', effect: '利湿退黄，清热解毒，疏肝止痛', indication: '湿热黄疸；胁肋不舒，胃脘胀痛；乳痈肿痛' },
    { id: 160, name: '珍珠草', nature: '甘、苦，凉', channel: '归肝、肺经', effect: '利湿退黄，清热解毒，明目，消积', indication: '湿热黄疸，泄痢，淋证；疮疡肿毒，蛇犬咬伤；目赤肿痛；小儿疳积' },
    // 温里药
    { id: 161, name: '附子', nature: '辛、甘，大热；有毒', channel: '归心、肾、脾经', effect: '回阳救逆，补火助阳，散寒止痛', indication: '亡阳虚脱，肢冷脉微；肾阳虚衰，阳痿宫冷，虚寒吐泻，脘腹冷痛；阴寒水肿，心阳不足，胸痹冷痛；阳虚外感；寒湿痹痛' },
    { id: 162, name: '干姜', nature: '辛，热', channel: '归脾、胃、肾、心、肺经', effect: '温中散寒，回阳通脉，温肺化饮', indication: '脘腹冷痛，呕吐泄泻；肢冷脉微，亡阳证；寒饮喘咳' },
    { id: 163, name: '肉桂', nature: '辛、甘，大热', channel: '归肾、脾、心、肝经', effect: '补火助阳，引火归元，散寒止痛，温通经脉', indication: '肾阳不足，命门火衰，阳痿宫冷，腰膝冷痛；肾虚作喘，虚阳上浮，眩晕目赤；心腹冷痛，虚寒吐泻，寒疝腹痛；痛经经闭，寒湿痹痛，阴疽流注' },
    { id: 164, name: '吴茱萸', nature: '辛、苦，热；有小毒', channel: '归肝、脾、胃、肾经', effect: '散寒止痛，降逆止呕，助阳止泻', indication: '厥阴头痛，寒疝腹痛，寒湿脚气，经行腹痛；脘腹胀痛，呕吐吞酸；五更泄泻' },
    { id: 165, name: '小茴香', nature: '辛，温', channel: '归肝、肾、脾、胃经', effect: '散寒止痛，理气和胃', indication: '寒疝腹痛，睾丸偏坠胀痛，痛经，少腹冷痛；脘腹胀痛，食少吐泻' },
    { id: 166, name: '丁香', nature: '辛，温', channel: '归脾、胃、肾经', effect: '温中降逆，补肾助阳', indication: '脾胃虚寒，呃逆呕吐，食少吐泻；心腹冷痛；肾虚阳痿，宫冷' },
    { id: 167, name: '高良姜', nature: '辛，热', channel: '归脾、胃经', effect: '温胃止呕，散寒止痛', indication: '脘腹冷痛，胃寒呕吐，嗳气吞酸' },
    { id: 168, name: '胡椒', nature: '辛，热', channel: '归胃、大肠经', effect: '温中散寒，下气，消痰', indication: '胃寒呕吐，腹痛泄泻；食欲不振；癫痫痰多' },
    { id: 169, name: '花椒', nature: '辛，温', channel: '归脾、胃、肾经', effect: '温中止痛，杀虫止痒', indication: '脘腹冷痛，呕吐泄泻；虫积腹痛；外治湿疹，阴痒' },
    { id: 170, name: '荜茇', nature: '辛，热', channel: '归胃、大肠经', effect: '温中散寒，下气止痛', indication: '脘腹冷痛，呕吐，泄泻，寒凝气滞，胸痹心痛，头痛，牙痛' },
    { id: 171, name: '荜澄茄', nature: '辛，温', channel: '归脾、胃、肾、膀胱经', effect: '温中散寒，行气止痛', indication: '胃寒呕逆，脘腹冷痛；寒疝腹痛；寒湿小便不利' },
    // 理气药
    { id: 172, name: '木香', nature: '辛、苦，温', channel: '归脾、胃、大肠、三焦、胆经', effect: '行气止痛，健脾消食', indication: '胸胁、脘腹胀痛，泻痢后重；食积不消，不思饮食；脾虚气滞，脘腹胀满' },
    { id: 173, name: '香附', nature: '辛、微苦、微甘，平', channel: '归肝、脾、三焦经', effect: '疏肝解郁，理气宽中，调经止痛', indication: '肝郁气滞，胸胁胀痛，疝气疼痛；脾胃气滞，脘腹痞闷，胀满疼痛；月经不调，经闭痛经，乳房胀痛' },
    { id: 174, name: '乌药', nature: '辛，温', channel: '归肺、脾、肾、膀胱经', effect: '行气止痛，温肾散寒', indication: '寒凝气滞，胸腹胀痛，气逆喘急，疝气疼痛，经寒腹痛；肾阳不足，膀胱虚冷，遗尿尿频' },
    { id: 175, name: '青皮', nature: '苦、辛，温', channel: '归肝、胆、胃经', effect: '疏肝破气，消积化滞', indication: '肝郁气滞，胸胁胀痛，疝气疼痛；食积气滞，脘腹胀痛；癥瘕积聚，久疟痞块' },
    { id: 176, name: '枳实', nature: '苦、辛、酸，微寒', channel: '归脾、胃经', effect: '破气消积，化痰散痞', indication: '积滞内停，痞满胀痛，泻痢后重，大便不通；痰阻气滞，胸痹，结胸；脏器下垂' },
    { id: 177, name: '枳壳', nature: '苦、辛、酸，微寒', channel: '归脾、胃经', effect: '理气宽中，行滞消胀', indication: '胸胁气滞，胀满疼痛，食积不化，痰饮内停；脏器下垂' },
    { id: 178, name: '沉香', nature: '辛、苦，微温', channel: '归脾、胃、肾经', effect: '行气止痛，温中止呕，纳气平喘', indication: '寒凝气滞，胸腹胀闷疼痛；胃寒呕吐呃逆；肾虚气逆喘急' },
    { id: 179, name: '檀香', nature: '辛，温', channel: '归脾、胃、心、肺经', effect: '行气温中，开胃止痛', indication: '寒凝气滞，胸膈不舒，胸痹心痛，脘腹疼痛，呕吐食少' },
    { id: 180, name: '川楝子', nature: '苦，寒；有小毒', channel: '归肝、小肠、膀胱经', effect: '疏肝泄热，行气止痛，杀虫', indication: '肝郁化火，胸胁、脘腹胀痛，疝气疼痛；虫积腹痛' },
    { id: 181, name: '荔枝核', nature: '甘、微苦，温', channel: '归肝、肾经', effect: '行气散结，祛寒止痛', indication: '寒疝腹痛，睾丸肿痛；胃脘胀痛，痛经，产后腹痛' },
    { id: 182, name: '薤白', nature: '辛、苦，温', channel: '归心、肺、胃、大肠经', effect: '通阳散结，行气导滞', indication: '胸痹心痛，脘腹痞满胀痛，泻痢后重' },
    { id: 183, name: '大腹皮', nature: '辛，微温', channel: '归脾、胃、大肠、小肠经', effect: '行气宽中，行水消肿', indication: '湿阻气滞，脘腹胀闷，大便不爽；水肿胀满，脚气浮肿，小便不利' },
    { id: 184, name: '甘松', nature: '辛、甘，温', channel: '归脾、胃经', effect: '理气止痛，开郁醒脾；外用祛湿消肿', indication: '脘腹胀满，食欲不振；思虑伤脾，气机郁滞之胸闷，腹胀，不思饮食；脚气；牙痛' },
    { id: 185, name: '九香虫', nature: '咸，温', channel: '归肝、脾、肾经', effect: '理气止痛，温中助阳', indication: '肝胃不和或寒郁中焦所致的胸胁、脘腹胀痛；阳痿，腰膝冷痛' },
    { id: 186, name: '刀豆', nature: '甘，温', channel: '归胃、肾经', effect: '温中，下气止呃，温肾助阳', indication: '虚寒呃逆，呕吐；肾虚腰痛' },
    { id: 187, name: '柿蒂', nature: '苦、涩，平', channel: '归胃经', effect: '降气止呃', indication: '呃逆' },
    // 消食药
    { id: 188, name: '山楂', nature: '酸、甘，微温', channel: '归脾、胃、肝经', effect: '消食健胃，行气散瘀，化浊降脂', indication: '肉食积滞，胃脘胀满；泻痢腹痛，疝气疼痛；血瘀经闭，产后瘀阻，心腹刺痛；高脂血症' },
    { id: 189, name: '神曲', nature: '甘、辛，温', channel: '归脾、胃经', effect: '消食和胃', indication: '饮食积滞，脘腹胀满，食少纳呆' },
    { id: 190, name: '麦芽', nature: '甘，平', channel: '归脾、胃经', effect: '行气消食，健脾开胃，回乳消胀', indication: '食积不消，脘腹胀痛，脾虚食少；乳汁郁积，乳房胀痛，妇女断乳' },
    { id: 191, name: '稻芽', nature: '甘，温', channel: '归脾、胃经', effect: '消食和中，健脾开胃', indication: '食积不消，腹胀口臭，脾胃虚弱，不饥食少' },
    { id: 192, name: '莱菔子', nature: '辛、甘，平', channel: '归肺、脾、胃经', effect: '消食除胀，降气化痰', indication: '饮食停滞，脘腹胀痛，大便秘结，积滞泻痢；痰壅喘咳' },
    { id: 193, name: '鸡内金', nature: '甘，平', channel: '归脾、胃、小肠、膀胱经', effect: '健胃消食，涩精止遗，通淋化石', indication: '食积不消，呕吐泻痢，小儿疳积；遗精，遗尿；石淋涩痛，胆胀胁痛' },
    // 驱虫药
    { id: 194, name: '使君子', nature: '甘，温', channel: '归脾、胃经', effect: '杀虫消积', indication: '蛔虫病，蛲虫病，虫积腹痛；小儿疳积' },
    { id: 195, name: '苦楝皮', nature: '苦，寒；有毒', channel: '归肝、脾、胃经', effect: '杀虫，疗癣', indication: '蛔虫病，蛲虫病，钩虫病；疥癣，湿疮' },
    { id: 196, name: '槟榔', nature: '苦、辛，温', channel: '归胃、大肠经', effect: '杀虫，消积，行气，利水，截疟', indication: '肠道寄生虫病；食积气滞，泻痢后重；水肿，脚气肿痛；疟疾' },
    { id: 197, name: '南瓜子', nature: '甘，平', channel: '归胃、大肠经', effect: '杀虫', indication: '绦虫病，蛔虫病，血吸虫病' },
    { id: 198, name: '鹤草芽', nature: '苦、涩，凉', channel: '归肝、小肠、大肠经', effect: '杀虫', indication: '绦虫病' },
    { id: 199, name: '雷丸', nature: '微苦，寒', channel: '归胃、大肠经', effect: '杀虫消积', indication: '绦虫病，钩虫病，蛔虫病；小儿疳积' },
    { id: 200, name: '鹤虱', nature: '苦、辛，平；有小毒', channel: '归脾、胃经', effect: '杀虫消积', indication: '蛔虫病，蛲虫病，绦虫病，虫积腹痛；小儿疳积' },
    { id: 201, name: '榧子', nature: '甘，平', channel: '归肺、胃、大肠经', effect: '杀虫消积，润肠通便，润肺止咳', indication: '钩虫病，蛔虫病，绦虫病，虫积腹痛；肠燥便秘；肺燥咳嗽' },
    // 止血药
    { id: 202, name: '小蓟', nature: '甘、苦，凉', channel: '归心、肝经', effect: '凉血止血，散瘀解毒消痈', indication: '血热出血证；热毒痈肿' },
    { id: 203, name: '大蓟', nature: '甘、苦，凉', channel: '归心、肝经', effect: '凉血止血，散瘀解毒消痈', indication: '血热出血证；热毒痈肿' },
    { id: 204, name: '地榆', nature: '苦、酸、涩，微寒', channel: '归肝、大肠经', effect: '凉血止血，解毒敛疮', indication: '血热出血证；烫伤，湿疹，疮疡痈肿' },
    { id: 205, name: '槐花', nature: '苦，微寒', channel: '归肝、大肠经', effect: '凉血止血，清肝泻火', indication: '血热出血证；目赤，头痛' },
    { id: 206, name: '侧柏叶', nature: '苦、涩，寒', channel: '归肺、肝、脾经', effect: '凉血止血，化痰止咳，生发乌发', indication: '血热出血证；肺热咳嗽；血热脱发，须发早白' },
    { id: 207, name: '白茅根', nature: '甘，寒', channel: '归肺、胃、膀胱经', effect: '凉血止血，清热利尿', indication: '血热出血证；水肿，热淋，黄疸' },
    { id: 208, name: '苎麻根', nature: '甘，寒', channel: '归心、肝经', effect: '凉血止血，安胎，清热解毒', indication: '血热出血证；胎动不安，胎漏下血；热毒痈肿' },
    { id: 209, name: '三七', nature: '甘、微苦，温', channel: '归肝、胃经', effect: '散瘀止血，消肿定痛', indication: '出血证；跌打损伤，瘀血肿痛' },
    { id: 210, name: '茜草', nature: '苦，寒', channel: '归肝经', effect: '凉血，祛瘀，止血，通经', indication: '出血证；血瘀经闭，关节痹痛，跌打损伤' },
    { id: 211, name: '蒲黄', nature: '甘，平', channel: '归肝、心包经', effect: '止血，化瘀，通淋', indication: '出血证；瘀血痛证；血淋尿血' },
    { id: 212, name: '花蕊石', nature: '酸、涩，平', channel: '归肝经', effect: '化瘀止血', indication: '出血证；瘀血阻滞' },
    { id: 213, name: '白及', nature: '苦、甘、涩，微寒', channel: '归肺、胃、肝经', effect: '收敛止血，消肿生肌', indication: '出血证；痈肿疮疡，手足皲裂，水火烫伤' },
    { id: 214, name: '仙鹤草', nature: '苦、涩，平', channel: '归心、肝经', effect: '收敛止血，止痢，截疟，补虚', indication: '出血证；腹泻、痢疾；疟疾寒热；脱力劳伤' },
    { id: 215, name: '紫珠', nature: '苦、涩，凉', channel: '归肝、肺、胃经', effect: '凉血收敛止血，散瘀解毒消肿', indication: '出血证；热毒疮疡，水火烫伤' },
    { id: 216, name: '棕榈', nature: '苦、涩，平', channel: '归肝、肺、大肠经', effect: '收敛止血', indication: '出血证' },
    { id: 217, name: '血余炭', nature: '苦，平', channel: '归肝、胃经', effect: '收敛止血，化瘀，利尿', indication: '出血证；小便不利' },
    { id: 218, name: '藕节', nature: '甘、涩，平', channel: '归肝、肺、胃经', effect: '收敛止血', indication: '出血证' },
    { id: 219, name: '艾叶', nature: '辛、苦，温；有小毒', channel: '归肝、脾、肾经', effect: '温经止血，散寒止痛，调经，安胎；外用祛湿止痒', indication: '虚寒性出血证；月经不调，痛经；胎动不安；心腹冷痛；皮肤瘙痒' },
    { id: 220, name: '炮姜', nature: '辛，热', channel: '归脾、胃、肾经', effect: '温经止血，温中止痛', indication: '虚寒性出血证；腹痛，腹泻' },
    { id: 221, name: '灶心土', nature: '辛，温', channel: '归脾、胃经', effect: '温中止血，止呕，止泻', indication: '虚寒性出血证；胃寒呕吐；脾虚久泻' },
    // 活血化瘀药
    { id: 222, name: '桃仁', nature: '苦、甘，平', channel: '归心、肝、大肠经', effect: '活血祛瘀，润肠通便，止咳平喘', indication: '瘀血阻滞病证；肺痈，肠痈；肠燥便秘；咳嗽气喘' },
    { id: 223, name: '红花', nature: '辛，温', channel: '归心、肝经', effect: '活血通经，散瘀止痛', indication: '血滞经闭、痛经，产后瘀滞腹痛；癥瘕积聚；胸痹心痛，血瘀腹痛，胁痛；跌打损伤，瘀滞肿痛；瘀滞斑疹色暗' },
    { id: 224, name: '益母草', nature: '苦、辛，微寒', channel: '归肝、心包、膀胱经', effect: '活血调经，利尿消肿，清热解毒', indication: '血滞经闭、痛经，经行不畅，产后恶露不尽，瘀滞腹痛；水肿，小便不利；跌打损伤，疮痈肿毒，皮肤瘾疹' },
    { id: 225, name: '泽兰', nature: '苦、辛，微温', channel: '归肝、脾经', effect: '活血调经，祛瘀消痈，利水消肿', indication: '血瘀经闭，痛经，产后瘀滞腹痛；跌打损伤，瘀肿疼痛，疮痈肿毒；水肿，腹水' },
    { id: 226, name: '牛膝', nature: '苦、甘、酸，平', channel: '归肝、肾经', effect: '逐瘀通经，补肝肾，强筋骨，利尿通淋，引血下行', indication: '瘀血阻滞之经闭，痛经，胞衣不下；腰膝酸痛，筋骨无力；淋证，水肿，小便不利；火热上炎，阴虚火旺之头痛，眩晕，齿痛，口舌生疮，吐血，衄血' },
    { id: 227, name: '鸡血藤', nature: '苦、甘，温', channel: '归肝、肾经', effect: '活血补血，调经止痛，舒筋活络', indication: '月经不调，痛经，经闭；风湿痹痛，麻木瘫痪；血虚萎黄' },
    { id: 228, name: '王不留行', nature: '苦，平', channel: '归肝、胃经', effect: '活血通经，下乳消肿，利尿通淋', indication: '血瘀经闭，痛经，难产；产后乳汁不下，乳痈肿痛；热淋，血淋，石淋' },
    { id: 229, name: '月季花', nature: '甘、淡、微苦，平', channel: '归肝经', effect: '活血调经，疏肝解郁', indication: '气滞血瘀，月经不调，痛经，闭经；肝郁胸胁胀痛' },
    { id: 230, name: '凌霄花', nature: '辛，微寒', channel: '归肝、心包经', effect: '活血通经，凉血祛风', indication: '血瘀经闭，癥瘕，跌打损伤；风疹，皮癣，皮肤瘙痒，痤疮' },
    { id: 231, name: '土鳖虫', nature: '咸，寒；有小毒', channel: '归肝经', effect: '破血逐瘀，续筋接骨', indication: '跌打损伤，筋伤骨折，瘀肿疼痛；血瘀经闭，产后瘀阻腹痛，癥瘕痞块' },
    { id: 232, name: '马钱子', nature: '苦，寒；有大毒', channel: '归肝、脾经', effect: '通络止痛，散结消肿', indication: '跌打损伤，骨折肿痛；风湿顽痹，麻木瘫痪；痈疽疮毒，咽喉肿痛' },
    { id: 233, name: '自然铜', nature: '辛，平', channel: '归肝经', effect: '散瘀止痛，续筋接骨', indication: '跌打损伤，筋骨折伤，瘀肿疼痛' },
    { id: 234, name: '苏木', nature: '甘、咸、辛，平', channel: '归心、肝、脾经', effect: '活血祛瘀，消肿止痛', indication: '跌打损伤，骨折筋伤，瘀滞肿痛；血滞经闭，产后瘀阻腹痛，痛经，心腹疼痛，痈肿疮毒' },
    { id: 235, name: '骨碎补', nature: '苦，温', channel: '归肝、肾经', effect: '活血疗伤止痛，补肾强骨；外用消风祛斑', indication: '跌打损伤或创伤，筋骨损伤，瘀滞肿痛；肾虚腰痛，筋骨痿软，耳鸣耳聋，牙齿松动，久泻；外治斑秃，白癜风' },
    { id: 236, name: '血竭', nature: '甘、咸，平', channel: '归心、肝经', effect: '活血定痛，化瘀止血，生肌敛疮', indication: '跌打损伤，瘀滞心腹疼痛；外伤出血；疮疡不敛' },
    { id: 237, name: '儿茶', nature: '苦、涩，微寒', channel: '归心、肺经', effect: '活血止痛，止血生肌，收湿敛疮，清肺化痰', indication: '跌扑伤痛；外伤出血，吐血衄血；疮疡不敛，湿疹，湿疮，牙疳，口疮；肺热咳嗽' },
    { id: 238, name: '刘寄奴', nature: '苦，温', channel: '归心、肝、脾经', effect: '散瘀止痛，疗伤止血，破血通经，消食化积', indication: '跌打损伤，肿痛出血；血瘀经闭，产后瘀滞腹痛；食积腹痛，赤白痢疾' },
    { id: 239, name: '莪术', nature: '辛、苦，温', channel: '归肝、脾经', effect: '破血行气，消积止痛', indication: '癥瘕痞块，瘀血经闭，胸痹心痛；食积气滞，脘腹胀痛' },
    { id: 240, name: '三棱', nature: '辛、苦，平', channel: '归肝、脾经', effect: '破血行气，消积止痛', indication: '癥瘕痞块，痛经，瘀血经闭，胸痹心痛；食积气滞，脘腹胀痛' },
    { id: 241, name: '水蛭', nature: '咸、苦，平；有小毒', channel: '归肝经', effect: '破血通经，逐瘀消癥', indication: '血瘀经闭，癥瘕痞块，中风偏瘫，跌扑损伤' },
    { id: 242, name: '虻虫', nature: '苦，微寒；有小毒', channel: '归肝经', effect: '破血逐瘀，消癥散积', indication: '血瘀经闭，癥瘕积聚；跌打损伤，瘀滞肿痛' },
    { id: 243, name: '斑蝥', nature: '辛，热；有大毒', channel: '归肝、胃、肾经', effect: '破血逐瘀，散结消癥，攻毒蚀疮', indication: '癥瘕，经闭；痈疽恶疮，顽癣，瘰疬，赘疣' },
    { id: 244, name: '穿山甲', nature: '咸，微寒', channel: '归肝、胃经', effect: '活血消癥，通经下乳，消肿排脓，搜风通络', indication: '经闭癥瘕，乳汁不通；痈肿疮毒，瘰疬；风湿痹痛，中风瘫痪，麻木拘挛' },
    { id: 245, name: '延胡索', nature: '辛、苦，温', channel: '归肝、脾、心经', effect: '活血，行气，止痛', indication: '气血瘀滞之痛证' },
    // 化痰止咳平喘药
    { id: 246, name: '天南星', nature: '苦、辛，温；有毒', channel: '归肺、肝、脾经', effect: '燥湿化痰，祛风止痉，散结消肿', indication: '湿痰，寒痰证；风痰眩晕，中风，癫痫，破伤风；痈疽肿痛，蛇虫咬伤' },
    { id: 247, name: '白附子', nature: '辛，温；有毒', channel: '归胃、肝经', effect: '祛风痰，定惊搐，解毒散结，止痛', indication: '中风痰壅，口眼㖞斜，语言謇涩，惊风癫痫，破伤风；痰厥头痛，偏正头痛；瘰疬痰核，毒蛇咬伤' },
    { id: 248, name: '白芥子', nature: '辛，温', channel: '归肺经', effect: '温肺豁痰，利气散结，通络止痛', indication: '寒痰喘咳，悬饮；阴疽流注，肢体麻木，关节肿痛' },
    { id: 249, name: '旋覆花', nature: '苦、辛、咸，微温', channel: '归肺、脾、胃、大肠经', effect: '降气，消痰，行水，止呕', indication: '风寒咳嗽，痰饮蓄结，胸膈痞闷，喘咳痰多；呕吐噫气，心下痞硬' },
    { id: 250, name: '白前', nature: '辛、苦，微温', channel: '归肺经', effect: '降气，消痰，止咳', indication: '肺气壅实，咳嗽痰多，胸满喘急' },
    { id: 251, name: '前胡', nature: '苦、辛，微寒', channel: '归肺经', effect: '降气化痰，散风清热', indication: '痰热咳喘；风热咳嗽' },
    { id: 252, name: '桔梗', nature: '苦、辛，平', channel: '归肺经', effect: '宣肺，祛痰，利咽，排脓', indication: '咳嗽痰多，胸闷不畅；咽喉肿痛，失音；肺痈吐脓；癃闭，便秘' },
    { id: 253, name: '川贝母', nature: '苦、甘，微寒', channel: '归肺、心经', effect: '清热润肺，化痰止咳，散结消痈', indication: '虚劳咳嗽，肺热燥咳；瘰疬，乳痈，肺痈' },
    { id: 254, name: '浙贝母', nature: '苦，寒', channel: '归肺、心经', effect: '清热化痰止咳，解毒散结消痈', indication: '风热咳嗽，痰火咳嗽；瘰疬，瘿瘤，乳痈疮毒，肺痈' },
    { id: 255, name: '瓜蒌', nature: '甘、微苦，寒', channel: '归肺、胃、大肠经', effect: '清热涤痰，宽胸散结，润燥滑肠', indication: '肺热咳嗽，痰浊黄稠；胸痹心痛，结胸痞满；肺痈，肠痈，乳痈；肠燥便秘' },
    { id: 256, name: '竹茹', nature: '甘，微寒', channel: '归肺、胃、心、胆经', effect: '清热化痰，除烦，止呕', indication: '痰热咳嗽，胆火挟痰，惊悸不宁，心烦失眠；中风痰迷，舌强不语；胃热呕吐，妊娠恶阻，胎动不安' },
    { id: 257, name: '竹沥', nature: '甘，寒', channel: '归心、肺、肝经', effect: '清热豁痰，定惊利窍', indication: '痰热咳喘；中风痰迷，惊痫癫狂' },
    { id: 258, name: '天竺黄', nature: '甘，寒', channel: '归心、肝经', effect: '清热豁痰，清心定惊', indication: '热病神昏，中风痰迷；小儿痰热惊痫，抽搐，夜啼' },
    { id: 259, name: '海藻', nature: '苦、咸，寒', channel: '归肝、胃、肾经', effect: '消痰软坚散结，利水消肿', indication: '瘿瘤，瘰疬，睾丸肿痛；痰饮水肿' },
    { id: 260, name: '昆布', nature: '咸，寒', channel: '归肝、胃、肾经', effect: '消痰软坚散结，利水消肿', indication: '瘿瘤，瘰疬，睾丸肿痛；痰饮水肿' },
    { id: 261, name: '黄药子', nature: '苦，寒；有小毒', channel: '归肺、肝经', effect: '化痰散结消瘿，清热解毒', indication: '瘿瘤；疮疡肿毒，咽喉肿痛，毒蛇咬伤' },
    { id: 262, name: '海蛤壳', nature: '咸，寒', channel: '归肺、肾、胃经', effect: '清热化痰，软坚散结，制酸止痛；外用收湿敛疮', indication: '痰火咳嗽，胸胁疼痛；瘿瘤，痰核；胃痛泛酸；外治湿疹，烫伤' },
    { id: 263, name: '海浮石', nature: '咸，寒', channel: '归肺、肾经', effect: '清肺化痰，软坚散结，利尿通淋', indication: '痰热咳喘；瘿瘤，瘰疬；血淋，石淋' },
    { id: 264, name: '瓦楞子', nature: '咸，平', channel: '归肺、胃、肝经', effect: '消痰化瘀，软坚散结，制酸止痛', indication: '顽痰胶结，黏稠难咯；瘿瘤，瘰疬，癥瘕痞块；胃痛泛酸' },
    { id: 265, name: '礞石', nature: '甘、咸，平', channel: '归肺、心、肝经', effect: '坠痰下气，平肝镇惊', indication: '顽痰、老痰胶固之证；癫狂，惊痫' },
    { id: 266, name: '苦杏仁', nature: '苦，微温；有小毒', channel: '归肺、大肠经', effect: '降气止咳平喘，润肠通便', indication: '咳嗽气喘；肠燥便秘' },
    { id: 267, name: '紫苏子', nature: '辛，温', channel: '归肺经', effect: '降气化痰，止咳平喘，润肠通便', indication: '痰壅气逆，咳嗽气喘；肠燥便秘' },
    { id: 268, name: '百部', nature: '甘、苦，微温', channel: '归肺经', effect: '润肺下气止咳，杀虫灭虱', indication: '新久咳嗽，百日咳，肺痨咳嗽；蛲虫，阴道滴虫，头虱及疥癣' },
    { id: 269, name: '紫菀', nature: '辛、苦，温', channel: '归肺经', effect: '润肺下气，化痰止咳', indication: '咳嗽有痰' },
    { id: 270, name: '款冬花', nature: '辛、微苦，温', channel: '归肺经', effect: '润肺下气，止咳化痰', indication: '咳嗽气喘' },
    { id: 271, name: '马兜铃', nature: '苦，微寒', channel: '归肺、大肠经', effect: '清肺降气，止咳平喘，清肠消痔', indication: '肺热咳嗽，痰中带血；肠热痔血，痔疮肿痛' },
    { id: 272, name: '枇杷叶', nature: '苦，微寒', channel: '归肺、胃经', effect: '清肺止咳，降逆止呕', indication: '肺热咳嗽，气逆喘急；胃热呕吐，哕逆' },
    { id: 273, name: '桑白皮', nature: '甘，寒', channel: '归肺经', effect: '泻肺平喘，利水消肿', indication: '肺热喘咳；水肿胀满尿少，面目肌肤浮肿' },
    { id: 274, name: '葶苈子', nature: '苦、辛，大寒', channel: '归肺、膀胱经', effect: '泻肺平喘，行水消肿', indication: '痰涎壅盛，喘息不得平卧；水肿，悬饮，胸腹积水，小便不利' },
    { id: 275, name: '白果', nature: '甘、苦、涩，平；有毒', channel: '归肺、肾经', effect: '敛肺定喘，止带缩尿', indication: '喘咳气逆，痰多；带下，白浊，尿频，遗尿' },
    // 安神药
    { id: 276, name: '朱砂', nature: '甘，微寒；有毒', channel: '归心经', effect: '清心镇惊，安神，明目，解毒', indication: '心神不宁，心悸，失眠；惊风，癫痫；疮疡肿毒，咽喉肿痛，口舌生疮' },
    { id: 277, name: '磁石', nature: '咸，寒', channel: '归心、肝、肾经', effect: '镇惊安神，平肝潜阳，聪耳明目，纳气平喘', indication: '心神不宁，惊悸，失眠，癫痫；肝阳上亢，头晕目眩；耳鸣耳聋，视物昏花；肾虚气喘' },
    { id: 278, name: '龙骨', nature: '甘、涩，平', channel: '归心、肝、肾经', effect: '镇惊安神，平肝潜阳，收敛固涩', indication: '心神不宁，心悸失眠，惊痫癫狂；肝阳上亢，头晕目眩；滑脱诸证；湿疮痒疹，疮疡久溃不敛' },
    { id: 279, name: '琥珀', nature: '甘，平', channel: '归心、肝、膀胱经', effect: '镇惊安神，活血散瘀，利尿通淋', indication: '心神不宁，心悸失眠，惊风，癫痫；痛经经闭，心腹刺痛，癥瘕积聚；淋证，癃闭' },
    { id: 280, name: '酸枣仁', nature: '甘、酸，平', channel: '归肝、胆、心经', effect: '养心补肝，宁心安神，敛汗，生津', indication: '虚烦不眠，惊悸多梦；体虚多汗；津伤口渴' },
    { id: 281, name: '柏子仁', nature: '甘，平', channel: '归心、肾、大肠经', effect: '养心安神，润肠通便，止汗', indication: '阴血不足，虚烦失眠，心悸怔忡；肠燥便秘；阴虚盗汗' },
    { id: 282, name: '灵芝', nature: '甘，平', channel: '归心、肺、肝、肾经', effect: '补气安神，止咳平喘', indication: '心神不宁，失眠，惊悸；咳喘痰多；虚劳证' },
    { id: 283, name: '缬草', nature: '辛、甘，温', channel: '归心、肝经', effect: '安神，理气，活血止痛', indication: '心神不宁，失眠少寐；惊风，癫痫；血瘀经闭，痛经，腰腿痛，跌打损伤；脘腹疼痛' },
    { id: 284, name: '首乌藤', nature: '甘，平', channel: '归心、肝经', effect: '养血安神，祛风通络', indication: '失眠多梦；血虚身痛，风湿痹痛；皮肤瘙痒' },
    { id: 285, name: '合欢皮', nature: '甘，平', channel: '归心、肝、肺经', effect: '解郁安神，活血消肿', indication: '心神不宁，忿怒忧郁，烦躁失眠；跌打骨折，血瘀肿痛；肺痈，疮痈肿毒' },
    { id: 286, name: '远志', nature: '苦、辛，温', channel: '归心、肾、肺经', effect: '安神益智，交通心肾，祛痰，消肿', indication: '心肾不交引起的失眠多梦，健忘惊悸，神志恍惚；咳痰不爽；疮疡肿毒，乳房肿痛' },
    // 平肝息风药
    { id: 287, name: '石决明', nature: '咸，寒', channel: '归肝经', effect: '平肝潜阳，清肝明目', indication: '肝阳上亢，头晕目眩；目赤翳障，视物昏花' },
    { id: 288, name: '珍珠母', nature: '咸，寒', channel: '归肝、心经', effect: '平肝潜阳，安神定惊，明目退翳', indication: '肝阳上亢，头痛眩晕；惊悸失眠；目赤翳障，视物昏花' },
    { id: 289, name: '牡蛎', nature: '咸，微寒', channel: '归肝、胆、肾经', effect: '重镇安神，潜阳补阴，软坚散结', indication: '心神不安，惊悸失眠；肝阳上亢，头晕目眩；痰核，瘰疬，癥瘕积聚；滑脱诸证' },
    { id: 290, name: '赭石', nature: '苦，寒', channel: '归肝、心、肺、胃经', effect: '平肝潜阳，重镇降逆，凉血止血', indication: '肝阳上亢，头晕目眩；呕吐，呃逆，噫气；气逆喘息；血热吐衄，崩漏' },
    { id: 291, name: '蒺藜', nature: '辛、苦，微温；有小毒', channel: '归肝经', effect: '平肝解郁，活血祛风，明目，止痒', indication: '肝阳上亢，头痛眩晕；肝郁气滞，胸胁胀痛，乳闭胀痛；风热上攻，目赤翳障；风疹瘙痒，白癜风' },
    { id: 292, name: '罗布麻叶', nature: '甘、苦，凉', channel: '归肝经', effect: '平肝安神，清热利水', indication: '肝阳眩晕，心悸失眠；浮肿尿少' },
    { id: 293, name: '羚羊角', nature: '咸，寒', channel: '归肝、心经', effect: '平肝息风，清肝明目，散血解毒', indication: '肝风内动，惊痫抽搐，妊娠子痫，高热痉厥，癫痫发狂；肝阳上亢，头晕目眩；肝火上炎，目赤头痛；温热病壮热神昏，热毒发斑；痈肿疮毒' },
    { id: 294, name: '牛黄', nature: '甘，凉', channel: '归心、肝经', effect: '凉肝息风，清心豁痰，开窍醒神，清热解毒', indication: '热病神昏；中风痰迷；惊痫抽搐，癫痫发狂；咽喉肿痛，口舌生疮，痈肿疔疮' },
    { id: 295, name: '珍珠', nature: '甘、咸，寒', channel: '归心、肝经', effect: '安神定惊，明目消翳，解毒生肌，润肤祛斑', indication: '心神不宁，心悸失眠；惊风，癫痫；目赤翳障，视物不清；口内诸疮，疮疡肿毒，溃久不敛；皮肤色斑' },
    { id: 296, name: '钩藤', nature: '甘，凉', channel: '归肝、心包经', effect: '息风定惊，清热平肝', indication: '肝风内动，惊痫抽搐，高热惊厥，感冒夹惊，小儿惊啼；肝阳上亢，头痛眩晕' },
    { id: 297, name: '天麻', nature: '甘，平', channel: '归肝经', effect: '息风止痉，平抑肝阳，祛风通络', indication: '肝风内动，惊痫抽搐，小儿急惊风，破伤风；肝阳上亢，头痛眩晕；肢体麻木，手足不遂，风湿痹痛' },
    { id: 298, name: '地龙', nature: '咸，寒', channel: '归肝、脾、膀胱经', effect: '清热定惊，通络，平喘，利尿', indication: '高热惊痫，癫狂；气虚血滞，半身不遂；痹证；肺热喘咳；水肿尿少' },
    { id: 299, name: '全蝎', nature: '辛，平；有毒', channel: '归肝经', effect: '息风镇痉，通络止痛，攻毒散结', indication: '肝风内动，痉挛抽搐，小儿惊风，中风口㖞，半身不遂，破伤风，风湿顽痹；偏正头痛；疮疡，瘰疬' },
    { id: 300, name: '蜈蚣', nature: '辛，温；有毒', channel: '归肝经', effect: '息风镇痉，通络止痛，攻毒散结', indication: '肝风内动，痉挛抽搐，小儿惊风，中风口㖞，半身不遂，破伤风，风湿顽痹；偏正头痛；疮疡，瘰疬，蛇虫咬伤' },
    { id: 301, name: '僵蚕', nature: '咸、辛，平', channel: '归肝、肺、胃经', effect: '息风止痉，祛风止痛，化痰散结', indication: '肝风夹痰，惊痫抽搐，小儿急惊，破伤风；中风口眼㖞斜；风热头痛，目赤咽痛，风疹瘙痒；痰核，瘰疬' },
    // 开窍药
    { id: 302, name: '麝香', nature: '辛，温', channel: '归心、脾经', effect: '开窍醒神，活血通经，消肿止痛', indication: '热病神昏，中风痰厥，气郁暴厥，中恶昏迷；血瘀经闭，癥瘕，胸痹心痛，心腹暴痛，跌扑伤痛，痹痛麻木，痈肿瘰疬，咽喉肿痛；难产，死胎，胞衣不下' },
    { id: 303, name: '冰片', nature: '辛、苦，微寒', channel: '归心、脾、肺经', effect: '开窍醒神，清热止痛', indication: '热病神昏，惊厥，中风痰厥，气郁暴厥，中恶昏迷；胸痹心痛；目赤肿痛，口疮，咽喉肿痛，耳道流脓；疮疡肿痛，久溃不敛' },
    { id: 304, name: '苏合香', nature: '辛，温', channel: '归心、脾经', effect: '开窍，辟秽，止痛', indication: '中风痰厥，猝然昏倒，惊痫；胸痹心痛，胸腹冷痛' },
    { id: 305, name: '石菖蒲', nature: '辛、苦，温', channel: '归心、胃经', effect: '开窍豁痰，醒神益智，化湿开胃', indication: '痰蒙清窍，神昏癫痫；健忘失眠，耳鸣耳聋；噤口痢；脘痞不饥' },
    // 补虚药 - 补气
    { id: 306, name: '西洋参', nature: '甘、微苦，凉', channel: '归心、肺、肾经', effect: '补气养阴，清热生津', indication: '气阴两伤证；肺气虚及肺阴虚证；热病气虚津伤口渴及消渴' },
    { id: 307, name: '太子参', nature: '甘、微苦，平', channel: '归脾、肺经', effect: '益气健脾，生津润肺', indication: '脾虚体倦，食欲不振；病后虚弱，气阴不足，自汗口渴；肺燥干咳' },
    { id: 308, name: '刺五加', nature: '辛、微苦，温', channel: '归脾、肺、肾、心经', effect: '益气健脾，补肾安神', indication: '脾肺气虚，体虚乏力，食欲不振；肺肾两虚，久咳虚喘；肾虚腰膝酸痛；心脾不足，失眠多梦' },
    { id: 309, name: '大枣', nature: '甘，温', channel: '归脾、胃、心经', effect: '补中益气，养血安神', indication: '脾虚食少，乏力便溏；妇人脏躁，失眠' },
    { id: 310, name: '绞股蓝', nature: '甘、苦，寒', channel: '归脾、肺经', effect: '益气健脾，化痰止咳，清热解毒', indication: '脾胃气虚，体倦乏力，纳食不佳；肺虚燥咳，咽喉疼痛；高脂血症' },
    // 补虚药 - 补阳
    { id: 311, name: '鹿茸', nature: '甘、咸，温', channel: '归肾、肝经', effect: '补肾壮阳，益精血，强筋骨，调冲任，托疮毒', indication: '肾阳虚衰，精血不足证；肾虚骨弱，腰膝无力或小儿五迟；妇女冲任虚寒，崩漏带下；疮疡久溃不敛，阴疽疮肿内陷不起' },
    { id: 312, name: '紫河车', nature: '甘、咸，温', channel: '归肺、肝、肾经', effect: '补肾益精，养血益气', indication: '阳痿遗精，腰酸头晕耳鸣；气血不足诸证；肺肾两虚之咳喘' },
    { id: 313, name: '淫羊藿', nature: '辛、甘，温', channel: '归肝、肾经', effect: '补肾壮阳，祛风除湿', indication: '肾阳虚衰，阳痿尿频，腰膝无力；风寒湿痹，肢体麻木' },
    { id: 314, name: '巴戟天', nature: '甘、辛，微温', channel: '归肾、肝经', effect: '补肾阳，强筋骨，祛风湿', indication: '肾阳虚阳痿，宫冷不孕，小便频数；风湿腰膝疼痛及肾虚腰膝酸软无力' },
    { id: 315, name: '仙茅', nature: '辛，热；有毒', channel: '归肾、肝、脾经', effect: '补肾阳，强筋骨，祛寒湿', indication: '肾阳不足，命门火衰，阳痿精冷，小便频数；腰膝冷痛，筋骨痿软无力；阳虚冷泻' },
    { id: 316, name: '杜仲', nature: '甘，温', channel: '归肝、肾经', effect: '补肝肾，强筋骨，安胎', indication: '肾虚腰痛及各种腰痛；胎动不安，习惯性堕胎' },
    { id: 317, name: '续断', nature: '苦、辛，微温', channel: '归肝、肾经', effect: '补肝肾，强筋骨，续折伤，止崩漏', indication: '阳痿不举，遗精遗尿；腰膝酸痛，寒湿痹痛；崩漏，胎漏，跌扑损伤；筋伤骨折' },
    { id: 318, name: '肉苁蓉', nature: '甘、咸，温', channel: '归肾、大肠经', effect: '补肾阳，益精血，润肠通便', indication: '肾阳亏虚，精血不足，阳痿早泄，宫冷不孕，腰膝酸痛，痿软无力；肠燥津枯便秘' },
    { id: 319, name: '锁阳', nature: '甘，温', channel: '归肝、肾、大肠经', effect: '补肾阳，益精血，润肠通便', indication: '肾阳亏虚，精血不足，阳痿，不孕，下肢痿软，筋骨无力；血虚津亏肠燥便秘' },
    { id: 320, name: '补骨脂', nature: '苦、辛，温', channel: '归肾、脾经', effect: '补肾壮阳，固精缩尿，纳气平喘，温脾止泻；外用消风祛斑', indication: '肾虚阳痿，腰膝冷痛；肾虚遗精，遗尿，尿频；肾不纳气，虚寒喘咳；脾肾阳虚，五更泄泻；白癜风，斑秃' },
    { id: 321, name: '益智仁', nature: '辛，温', channel: '归脾、肾经', effect: '暖肾固精缩尿，温脾止泻摄唾', indication: '肾气虚寒，遗精滑精，遗尿尿频；脾寒泄泻，腹中冷痛，口多涎唾' },
    { id: 322, name: '菟丝子', nature: '辛、甘，平', channel: '归肝、肾、脾经', effect: '补益肝肾，固精缩尿，安胎，明目，止泻；外用消风祛斑', indication: '肾虚腰痛，阳痿遗精，遗尿尿频；肝肾不足，目暗不明；脾肾阳虚，便溏泄泻；肾虚胎动不安；白癜风' },
    { id: 323, name: '沙苑子', nature: '甘，温', channel: '归肝、肾经', effect: '补肾助阳，固精缩尿，养肝明目', indication: '肾虚腰痛，遗精早泄，遗尿尿频，白浊带下；肝肾不足，目暗不明，头昏眼花' },
    { id: 324, name: '蛤蚧', nature: '咸，平', channel: '归肺、肾经', effect: '补肺益肾，纳气定喘，助阳益精', indication: '肺虚咳嗽，肾虚作喘，虚劳喘咳；肾虚阳痿' },
    { id: 325, name: '冬虫夏草', nature: '甘，温', channel: '归肺、肾经', effect: '补肾益肺，止血化痰', indication: '肾虚精亏，阳痿遗精，腰膝酸痛；久咳虚喘，劳嗽痰血' },
    { id: 326, name: '核桃仁', nature: '甘，温', channel: '归肾、肺、大肠经', effect: '补肾，温肺，润肠', indication: '肾阳不足，腰膝酸软，阳痿遗精，小便频数；肺肾不足，虚寒喘嗽；肠燥便秘' },
    { id: 327, name: '海马', nature: '甘、咸，温', channel: '归肝、肾经', effect: '温肾壮阳，散结消肿', indication: '肾阳亏虚，阳痿不举，肾关不固，遗精遗尿，尿频；肾虚作喘；癥瘕积聚，跌打损伤；痈肿疔疮' },
    { id: 328, name: '韭菜子', nature: '辛、甘，温', channel: '归肝、肾经', effect: '温补肝肾，壮阳固精', indication: '肝肾亏虚，腰膝酸软；肾虚阳痿遗精，遗尿尿频，白带过多' },
    { id: 329, name: '阳起石', nature: '咸，温', channel: '归肾经', effect: '温肾壮阳', indication: '肾阳虚衰，阳痿不举，宫冷不孕' },
    { id: 330, name: '紫石英', nature: '甘，温', channel: '归肾、心、肺经', effect: '温肾暖宫，镇心安神，温肺平喘', indication: '肾阳亏虚，宫冷不孕，崩漏带下；心悸怔忡，虚烦不眠；肺寒气逆，痰多咳喘' },
    // 补虚药 - 补血
    { id: 331, name: '阿胶', nature: '甘，平', channel: '归肺、肝、肾经', effect: '补血，滋阴，润肺，止血', indication: '血虚诸证；出血证；肺阴虚燥咳；热病伤阴，心烦失眠，阴虚风动，手足瘈疭' },
    { id: 332, name: '何首乌', nature: '苦、甘、涩，微温', channel: '归肝、心、肾经', effect: '制用：补益精血；生用：解毒，截疟，润肠通便', indication: '精血亏虚，头晕眼花，须发早白，腰膝酸软；久疟，痈疽，瘰疬，肠燥便秘' },
    { id: 333, name: '龙眼肉', nature: '甘，温', channel: '归心、脾经', effect: '补益心脾，养血安神', indication: '思虑过度，劳伤心脾，而致惊悸怔忡，失眠健忘，食少体倦；脾气虚弱，统摄无权，崩漏便血' },
    // 补虚药 - 补阴
    { id: 334, name: '北沙参', nature: '甘、微苦，微寒', channel: '归肺、胃经', effect: '养阴清肺，益胃生津', indication: '肺阴虚证；胃阴虚证' },
    { id: 335, name: '南沙参', nature: '甘，微寒', channel: '归肺、胃经', effect: '养阴清肺，益胃生津，补气，化痰', indication: '肺阴虚证；胃阴虚证；气阴两伤证' },
    { id: 336, name: '百合', nature: '甘，微寒', channel: '归心、肺经', effect: '养阴润肺，清心安神', indication: '阴虚燥咳，劳嗽咳血；阴虚有热之失眠心悸及百合病心肺阴虚内热证' },
    { id: 337, name: '天冬', nature: '甘、苦，寒', channel: '归肺、肾经', effect: '养阴润燥，清肺生津', indication: '肺阴虚证；肾阴虚证；热病伤津之食欲不振、口渴及肠燥便秘' },
    { id: 338, name: '石斛', nature: '甘，微寒', channel: '归胃、肾经', effect: '益胃生津，滋阴清热', indication: '胃阴虚证，热病伤津证；肾阴虚证' },
    { id: 339, name: '玉竹', nature: '甘，微寒', channel: '归肺、胃经', effect: '养阴润燥，生津止渴', indication: '肺阴虚证；胃阴虚证' },
    { id: 340, name: '黄精', nature: '甘，平', channel: '归脾、肺、肾经', effect: '补气养阴，健脾，润肺，益肾', indication: '阴虚肺燥，干咳少痰及肺肾阴虚的劳嗽久咳；脾虚阴伤证；肾精亏虚' },
    { id: 341, name: '明党参', nature: '甘、微苦，微寒', channel: '归肺、脾、肝经', effect: '润肺化痰，养阴和胃，平肝', indication: '肺阴虚证；脾胃阴虚证；肝阴不足或肝热上攻' },
    { id: 342, name: '枸杞子', nature: '甘，平', channel: '归肝、肾经', effect: '滋补肝肾，益精明目', indication: '肝肾阴虚及早衰证' },
    { id: 343, name: '墨旱莲', nature: '甘、酸，寒', channel: '归肝、肾经', effect: '滋补肝肾，凉血止血', indication: '肝肾阴虚证；阴虚血热的失血证' },
    { id: 344, name: '女贞子', nature: '甘、苦，凉', channel: '归肝、肾经', effect: '滋补肝肾，乌须明目', indication: '肝肾阴虚证' },
    { id: 345, name: '桑椹', nature: '甘、酸，寒', channel: '归心、肝、肾经', effect: '滋阴补血，生津润燥', indication: '肝肾阴虚证；津伤口渴，消渴及肠燥便秘' },
    { id: 346, name: '黑芝麻', nature: '甘，平', channel: '归肝、肾、大肠经', effect: '补肝肾，益精血，润肠燥', indication: '精血亏虚，头晕眼花，须发早白；肠燥便秘' },
    { id: 347, name: '龟甲', nature: '甘，寒', channel: '归肾、肝、心经', effect: '滋阴潜阳，益肾强骨，养血补心，固经止崩', indication: '阴虚阳亢，阴虚内热，虚风内动；肾虚骨痿，囟门不合；阴血亏虚，惊悸，失眠，健忘；阴虚血热，冲任不固之崩漏，月经过多' },
    { id: 348, name: '鳖甲', nature: '咸，寒', channel: '归肝、肾经', effect: '滋阴潜阳，退热除蒸，软坚散结', indication: '肝肾阴虚证；癥瘕积聚' },
    // 收涩药
    { id: 349, name: '麻黄根', nature: '甘、涩，平', channel: '归心、肺经', effect: '固表止汗', indication: '自汗，盗汗' },
    { id: 350, name: '浮小麦', nature: '甘，凉', channel: '归心经', effect: '固表止汗，益气，除热', indication: '自汗，盗汗；骨蒸劳热' },
    { id: 351, name: '糯稻根须', nature: '甘，平', channel: '归心、肝经', effect: '固表止汗，益胃生津，退虚热', indication: '自汗，盗汗；虚热不退，骨蒸潮热' },
    { id: 352, name: '五味子', nature: '酸、甘，温', channel: '归肺、心、肾经', effect: '收敛固涩，益气生津，补肾宁心', indication: '久嗽虚喘；梦遗滑精，遗尿尿频；久泻不止；自汗，盗汗；津伤口渴，内热消渴；心悸失眠' },
    { id: 353, name: '乌梅', nature: '酸、涩，平', channel: '归肝、脾、肺、大肠经', effect: '敛肺，涩肠，生津，安蛔', indication: '肺虚久咳；久泻久痢；虚热消渴；蛔厥腹痛，呕吐' },
    { id: 354, name: '五倍子', nature: '酸、涩，寒', channel: '归肺、大肠、肾经', effect: '敛肺降火，涩肠止泻，敛汗，固精止遗，止血，收湿敛疮', indication: '咳嗽，咯血；久泻久痢；自汗，盗汗；遗精，滑精；崩漏，便血痔血，外伤出血；湿疮，肿毒' },
    { id: 355, name: '罂粟壳', nature: '酸、涩，平；有毒', channel: '归肺、大肠、肾经', effect: '敛肺，涩肠，止痛', indication: '肺虚久咳；久泻久痢；脘腹及筋骨疼痛' },
    { id: 356, name: '诃子', nature: '苦、酸、涩，平', channel: '归肺、大肠经', effect: '涩肠止泻，敛肺止咳，降火利咽', indication: '久泻久痢；久咳，失音' },
    { id: 357, name: '石榴皮', nature: '酸、涩，温', channel: '归大肠经', effect: '涩肠止泻，杀虫，收敛止血', indication: '久泻久痢；虫积腹痛；崩漏，便血' },
    { id: 358, name: '肉豆蔻', nature: '辛，温', channel: '归脾、胃、大肠经', effect: '温中行气，涩肠止泻', indication: '脾胃虚寒，久泻不止；胃寒气滞，脘腹胀痛，食少呕吐' },
    { id: 359, name: '赤石脂', nature: '甘、涩，温', channel: '归大肠、胃经', effect: '涩肠止泻，收敛止血，生肌敛疮', indication: '久泻久痢；崩漏，便血；疮疡久溃不敛，湿疮脓水浸淫' },
    { id: 360, name: '禹余粮', nature: '甘、涩，微寒', channel: '归胃、大肠经', effect: '涩肠止泻，收敛止血', indication: '久泻久痢；崩漏，便血' },
    { id: 361, name: '山茱萸', nature: '酸、涩，微温', channel: '归肝、肾经', effect: '补益肝肾，收涩固脱', indication: '腰膝酸软，头晕耳鸣，阳痿；遗精滑精，遗尿尿频；崩漏，月经过多；大汗不止，体虚欲脱' },
    { id: 362, name: '覆盆子', nature: '甘、酸，温', channel: '归肝、肾、膀胱经', effect: '益肾固精缩尿，养肝明目', indication: '遗精滑精，遗尿尿频；肝肾不足，目暗不明' },
    { id: 363, name: '桑螵蛸', nature: '甘、咸，平', channel: '归肝、肾经', effect: '固精缩尿，补肾助阳', indication: '遗精滑精，遗尿尿频，小便白浊；肾虚阳痿' },
    { id: 364, name: '金樱子', nature: '酸、甘、涩，平', channel: '归肾、膀胱、大肠经', effect: '固精缩尿，固崩止带，涩肠止泻', indication: '遗精滑精，遗尿尿频，带下；久泻久痢' },
    { id: 365, name: '海螵蛸', nature: '咸、涩，微温', channel: '归脾、肾经', effect: '收敛止血，涩精止带，制酸止痛，收湿敛疮', indication: '吐血衄血，崩漏便血，外伤出血；遗精，带下；胃痛吞酸；湿疹湿疮，溃疡不敛' },
    { id: 366, name: '莲子', nature: '甘、涩，平', channel: '归脾、肾、心经', effect: '补脾止泻，止带，益肾涩精，养心安神', indication: '脾虚泄泻；带下；肾虚遗精，滑精；心悸失眠' },
    { id: 367, name: '芡实', nature: '甘、涩，平', channel: '归脾、肾经', effect: '益肾固精，补脾止泻，除湿止带', indication: '遗精滑精；脾虚久泻；带下' },
    { id: 368, name: '刺猬皮', nature: '苦、涩，平', channel: '归肾、胃、大肠经', effect: '固精缩尿，收敛止血，化瘀止痛', indication: '遗精滑精，遗尿尿频；便血，痔血；胃痛，反胃' },
    { id: 369, name: '椿皮', nature: '苦、涩，寒', channel: '归大肠、胃、肝经', effect: '清热燥湿，收敛止带，止泻，止血', indication: '赤白带下；久泻久痢，湿热泻痢；崩漏经多，便血痔血' },
    { id: 370, name: '鸡冠花', nature: '甘、涩，凉', channel: '归肝、大肠经', effect: '收敛止带，止血，止痢', indication: '带下；崩漏，便血痔血；赤白下痢，久痢不止' },
    // 涌吐药
    { id: 371, name: '常山', nature: '苦、辛，寒；有毒', channel: '归肺、心、肝经', effect: '涌吐痰涎，截疟', indication: '胸中痰饮；疟疾' },
    { id: 372, name: '瓜蒂', nature: '苦，寒；有毒', channel: '归胃经', effect: '涌吐痰食，祛湿退黄', indication: '风痰、宿食停滞及食物中毒诸证；湿热黄疸' },
    { id: 373, name: '胆矾', nature: '酸、涩、辛，寒；有毒', channel: '归肝、胆经', effect: '涌吐痰涎，解毒收湿，祛腐蚀疮', indication: '风痰壅塞，喉痹，癫痫，误食毒物；风眼赤烂，口疮，牙疳；胬肉，疮疡不溃' },
    { id: 374, name: '藜芦', nature: '辛、苦，寒；有毒', channel: '归肺、胃、肝经', effect: '涌吐风痰，杀虫', indication: '中风、癫痫、喉痹证见痰涎壅盛；疥癣、秃疮' },
    // 攻毒杀虫止痒药
    { id: 375, name: '雄黄', nature: '辛，温；有毒', channel: '归肝、大肠经', effect: '解毒杀虫，燥湿祛痰，截疟', indication: '痈肿疔疮，湿疹疥癣，蛇虫咬伤；虫积腹痛；哮喘，疟疾，惊痫' },
    { id: 376, name: '硫黄', nature: '酸，温；有毒', channel: '归肾、大肠经', effect: '外用解毒杀虫疗疮；内服补火助阳通便', indication: '疥癣，秃疮，阴疽恶疮；阳痿足冷，虚喘冷哮，虚寒便秘' },
    { id: 377, name: '白矾', nature: '酸、涩，寒', channel: '归肺、脾、肝、大肠经', effect: '外用解毒杀虫，燥湿止痒；内服止血止泻，祛除风痰', indication: '湿疹，疥癣，脱肛，痔疮，疮疡；便血，衄血，崩漏；久泻久痢；癫痫发狂' },
    { id: 378, name: '蛇床子', nature: '辛、苦，温；有小毒', channel: '归肾经', effect: '燥湿祛风，杀虫止痒，温肾壮阳', indication: '阴痒，疥癣，湿疹瘙痒；寒湿带下，湿痹腰痛；肾虚阳痿，宫冷不孕' },
    { id: 379, name: '蟾酥', nature: '辛，温；有毒', channel: '归心经', effect: '解毒，止痛，开窍醒神', indication: '痈疽疔疮，瘰疬，咽喉肿痛，牙痛；痧胀腹痛，神昏吐泻' },
    { id: 380, name: '樟脑', nature: '辛，热；有毒', channel: '归心、脾经', effect: '除湿杀虫，温散止痛，开窍辟秽', indication: '疥癣瘙痒，湿疮溃烂；跌打伤痛，牙痛；痧胀腹痛，吐泻神昏' },
    { id: 381, name: '木鳖子', nature: '苦、微甘，凉；有毒', channel: '归肝、脾、胃经', effect: '散结消肿，攻毒疗疮', indication: '疮疡肿毒，乳痈，瘰疬，痔漏，干癣，秃疮' },
    { id: 382, name: '土荆皮', nature: '辛，温；有毒', channel: '归肺、脾经', effect: '杀虫，疗癣，止痒', indication: '体癣，手足癣，头癣；湿疹，皮炎，皮肤瘙痒；疥疮' },
    { id: 383, name: '蜂房', nature: '甘，平', channel: '归胃经', effect: '攻毒杀虫，祛风止痛', indication: '疮疡肿毒，乳痈，瘰疬，顽癣瘙痒，鹅掌风；风湿痹痛，牙痛，风疹瘙痒' },
    { id: 384, name: '大蒜', nature: '辛，温', channel: '归脾、胃、肺经', effect: '解毒杀虫，消肿，止痢', indication: '痈肿疔毒，疥癣；泄泻，痢疾，肺痨，百日咳；钩虫病，蛲虫病；顿咳' },
    { id: 385, name: '升药', nature: '辛，热；有大毒', channel: '归肺、脾经', effect: '拔毒，去腐', indication: '痈疽溃后，脓出不畅；腐肉不去，新肉难生' },
    { id: 386, name: '轻粉', nature: '辛，寒；有毒', channel: '归大肠、小肠经', effect: '外用杀虫，攻毒，敛疮；内服祛痰消积，逐水通便', indication: '疥疮，顽癣，梅毒，疮疡，湿疹；痰涎积滞，水肿鼓胀，二便不利' },
    { id: 387, name: '砒石', nature: '辛，大热；有大毒', channel: '归肺、肝经', effect: '外用攻毒杀虫，蚀疮去腐；内服劫痰平喘，攻毒抑癌', indication: '腐肉不脱之恶疮，瘰疬，顽癣，牙疳，痔疮；寒痰哮喘；癌肿' },
    { id: 388, name: '铅丹', nature: '辛，微寒；有毒', channel: '归心、肝经', effect: '外用拔毒生肌，杀虫止痒；内服坠痰镇惊', indication: '疮疡溃烂，湿疹瘙痒，疥癣，狐臭，酒齄鼻；惊痫癫狂' },
    { id: 389, name: '炉甘石', nature: '甘，平', channel: '归肝、胃经', effect: '解毒明目退翳，收湿止痒敛疮', indication: '目赤翳障，烂弦风眼；溃疡不敛，湿疮，湿疹，眼睑溃烂' },
    // 拔毒化腐生肌药
    { id: 390, name: '硼砂', nature: '甘、咸，凉', channel: '归肺、胃经', effect: '外用清热解毒，内服清肺化痰', indication: '咽喉肿痛，口舌生疮，目赤翳障；痰热咳嗽' },
    // 补充常用中药
    { id: 391, name: '白芷', nature: '辛，温', channel: '归胃、大肠、肺经', effect: '解表散寒，祛风止痛，宣通鼻窍，燥湿止带，消肿排脓', indication: '风寒感冒；头痛，牙痛；鼻鼽，鼻渊；带下；疮疡肿痛' },
    { id: 392, name: '防风', nature: '辛、甘，微温', channel: '归膀胱、肝、脾经', effect: '祛风解表，胜湿止痛，止痉', indication: '感冒头痛；风湿痹痛；风疹瘙痒；破伤风' },
    { id: 393, name: '荆芥', nature: '辛，微温', channel: '归肺、肝经', effect: '解表散风，透疹，消疮', indication: '感冒，头痛；麻疹不透，风疹瘙痒；疮疡初起' },
    { id: 394, name: '细辛', nature: '辛，温', channel: '归心、肺、肾经', effect: '解表散寒，祛风止痛，通窍，温肺化饮', indication: '风寒感冒；头痛，牙痛；鼻鼽，鼻渊；寒痰停饮' },
    { id: 395, name: '苍耳子', nature: '辛、苦，温；有小毒', channel: '归肺经', effect: '散风寒，通鼻窍，祛风湿，止痛', indication: '鼻渊流涕；风寒头痛；风湿痹痛' },
    { id: 396, name: '辛夷', nature: '辛，温', channel: '归肺、胃经', effect: '散风寒，通鼻窍', indication: '鼻渊，鼻鼽，鼻塞流涕' },
    { id: 397, name: '淡豆豉', nature: '苦、辛，凉', channel: '归肺、胃经', effect: '解表，除烦，宣发郁热', indication: '感冒，寒热头痛；烦闷，虚烦不眠' },
    { id: 398, name: '浮萍', nature: '辛，寒', channel: '归肺经', effect: '宣散风热，透疹，利尿', indication: '风热感冒；麻疹不透；风疹瘙痒；水肿尿少' },
    { id: 399, name: '木贼', nature: '甘、苦，平', channel: '归肺、肝经', effect: '疏散风热，明目退翳', indication: '风热目赤，迎风流泪，目生云翳；出血证' },
    { id: 400, name: '谷精草', nature: '辛、甘，平', channel: '归肝、肺经', effect: '疏散风热，明目退翳', indication: '风热目赤，肿痛羞明，眼生翳膜；风热头痛' },
    // 继续补充更多常用中药
    { id: 401, name: '密蒙花', nature: '甘，微寒', channel: '归肝经', effect: '清热泻火，养肝明目，退翳', indication: '目赤肿痛，羞明多泪，眼生翳膜；肝虚目暗，视物昏花' },
    { id: 402, name: '青葙子', nature: '苦，微寒', channel: '归肝经', effect: '清肝泻火，明目退翳', indication: '肝热目赤，眼生翳膜，视物昏花；肝火眩晕' },
    { id: 403, name: '熊胆粉', nature: '苦，寒', channel: '归肝、胆、心经', effect: '清热解毒，息风止痉，清肝明目', indication: '热极生风，惊痫抽搐；热毒疮痈；目赤翳障；黄疸，小儿疳积，风虫牙痛' },
    { id: 404, name: '千里光', nature: '苦，寒', channel: '归肺、肝经', effect: '清热解毒，明目，利湿', indication: '痈肿疮毒；目赤肿痛；湿热泻痢，黄疸尿赤' },
    { id: 405, name: '白蔹', nature: '苦，微寒', channel: '归心、胃经', effect: '清热解毒，消痈散结，敛疮生肌', indication: '疮痈肿毒，瘰疬痰核；水火烫伤，手足皲裂' },
    { id: 406, name: '四季青', nature: '苦、涩，凉', channel: '归肺、心经', effect: '清热解毒，消肿祛瘀', indication: '肺热咳嗽，咽喉肿痛，热淋；外治烧烫伤，皮肤溃疡' },
    { id: 407, name: '绿豆', nature: '甘，寒', channel: '归心、胃经', effect: '清热解毒，消暑，利水', indication: '痈肿疮毒；暑热烦渴；药食中毒；水肿，小便不利' },
    { id: 408, name: '漏芦', nature: '苦，寒', channel: '归胃经', effect: '清热解毒，消痈散结，通经下乳，舒筋通脉', indication: '乳痈肿痛，痈疽发背，瘰疬疮毒；乳汁不通；湿痹拘挛' },
    { id: 409, name: '山慈菇', nature: '甘、微辛，凉', channel: '归肝、脾经', effect: '清热解毒，化痰散结', indication: '痈疽疔毒，瘰疬痰核，蛇虫咬伤；癥瘕痞块；风痰癫痫' },
    { id: 410, name: '木蝴蝶', nature: '苦、甘，凉', channel: '归肺、肝、胃经', effect: '清肺利咽，疏肝和胃', indication: '肺热咳嗽，喉痹音哑；肝胃气痛' },
    { id: 411, name: '金果榄', nature: '苦，寒', channel: '归肺、大肠经', effect: '清热解毒，利咽，止痛', indication: '咽喉肿痛；痈疽疔毒，泄泻，痢疾，脘腹疼痛' },
    { id: 412, name: '大血藤', nature: '苦，平', channel: '归大肠、肝经', effect: '清热解毒，活血，祛风止痛', indication: '肠痈腹痛，热毒疮疡；跌打损伤，经闭痛经，风湿痹痛' },
    { id: 413, name: '败酱草', nature: '辛、苦，微寒', channel: '归胃、大肠、肝经', effect: '清热解毒，消痈排脓，祛瘀止痛', indication: '肠痈，肺痈，痈肿疮毒；产后瘀阻腹痛' },
    { id: 414, name: '重楼', nature: '苦，微寒；有小毒', channel: '归肝经', effect: '清热解毒，消肿止痛，凉肝定惊', indication: '痈肿疔疮，咽喉肿痛，毒蛇咬伤；惊风抽搐；跌打损伤' },
    { id: 415, name: '拳参', nature: '苦、涩，微寒', channel: '归肺、肝、大肠经', effect: '清热解毒，消肿，止血', indication: '痈肿瘰疬，毒蛇咬伤；热病神昏，惊痫抽搐；热泻热痢；血热出血；水肿，小便不利' },
    { id: 416, name: '马鞭草', nature: '苦，凉', channel: '归肝、脾经', effect: '活血散瘀，解毒，利水，退黄，截疟', indication: '癥瘕积聚，痛经经闭，喉痹，痈肿，水肿，黄疸，疟疾' },
    { id: 417, name: '白花蛇舌草', nature: '微苦、甘，寒', channel: '归胃、大肠、小肠经', effect: '清热解毒，利湿通淋', indication: '痈肿疮毒，咽喉肿痛，毒蛇咬伤；热淋涩痛；湿热黄疸' },
    { id: 418, name: '半枝莲', nature: '辛、苦，寒', channel: '归肺、肝、肾经', effect: '清热解毒，化瘀利尿', indication: '疔疮肿毒，咽喉肿痛，跌打伤痛；水肿，黄疸；蛇虫咬伤' },
    { id: 419, name: '金荞麦', nature: '微辛、涩，凉', channel: '归肺经', effect: '清热解毒，排脓祛瘀', indication: '肺痈，肺热咳嗽；瘰疬疮疖，咽喉肿痛' },
    { id: 420, name: '野菊花', nature: '苦、辛，微寒', channel: '归肝、心经', effect: '清热解毒，泻火平肝', indication: '疔疮痈肿，目赤肿痛，头痛眩晕' },
    { id: 421, name: '委陵菜', nature: '苦，寒', channel: '归肝、大肠经', effect: '清热解毒，凉血止痢', indication: '热毒泻痢，血热出血，痈肿疮毒' },
    { id: 422, name: '翻白草', nature: '苦，寒', channel: '归胃、大肠经', effect: '清热解毒，止血，止痢', indication: '湿热泻痢，痈肿疮毒，血热出血' },
    { id: 423, name: '白头翁', nature: '苦，寒', channel: '归胃、大肠经', effect: '清热解毒，凉血止痢', indication: '热毒血痢；阴痒带下' },
    { id: 424, name: '马齿苋', nature: '酸，寒', channel: '归肝、大肠经', effect: '清热解毒，凉血止血，止痢', indication: '热毒血痢；痈肿疔疮，湿疹；崩漏，便血' },
    { id: 425, name: '鸦胆子', nature: '苦，寒；有小毒', channel: '归大肠、肝经', effect: '清热解毒，截疟，止痢；外用腐蚀赘疣', indication: '热毒血痢，冷积久痢；各型疟疾；外治赘疣，鸡眼' },
    { id: 426, name: '地锦草', nature: '辛，平', channel: '归肝、大肠经', effect: '清热解毒，凉血止血，利湿退黄', indication: '热毒泻痢；血热出血；湿热黄疸' },
    { id: 427, name: '半边莲', nature: '辛，平', channel: '归心、小肠、肺经', effect: '清热解毒，利尿消肿', indication: '痈肿疔疮，蛇虫咬伤；水肿，黄疸' },
    { id: 428, name: '紫花地丁', nature: '苦、辛，寒', channel: '归心、肝经', effect: '清热解毒，凉血消肿', indication: '疔疮肿毒，痈疽发背，丹毒，毒蛇咬伤' },
    { id: 429, name: '蒲公英', nature: '苦、甘，寒', channel: '归肝、胃经', effect: '清热解毒，消肿散结，利尿通淋', indication: '痈肿疔毒，乳痈内痈；热淋涩痛，湿热黄疸' },
    { id: 430, name: '紫背天葵', nature: '甘、苦，寒', channel: '归肝经', effect: '清热解毒，消肿散结', indication: '痈肿疔疮，乳痈，瘰疬；毒蛇咬伤' },
    // 继续补充更多中药
    { id: 431, name: '野百合', nature: '甘、淡，凉', channel: '归肺、肝经', effect: '清热解毒，消积，利湿', indication: '小儿疳积，黄疸，痈肿' },
    { id: 432, name: '白毛藤', nature: '苦，微寒', channel: '归肝、胆经', effect: '清热解毒，利湿，祛风', indication: '湿热黄疸，水肿，淋浊，带下；风湿痹痛' },
    { id: 433, name: '鬼针草', nature: '苦，平', channel: '归肝、肺、大肠经', effect: '清热解毒，散瘀消肿', indication: '咽喉肿痛，泄泻，痢疾，黄疸，肠痈，疔疮肿毒，蛇虫咬伤，跌打损伤' },
    { id: 434, name: '金线莲', nature: '甘，平', channel: '归肺、肝、肾、膀胱经', effect: '清热凉血，除湿解毒', indication: '肺结核咯血，糖尿病，肾炎，膀胱炎，重症肌无力，风湿性及类风湿性关节炎，毒蛇咬伤' },
    { id: 435, name: '鱼腥草', nature: '辛，微寒', channel: '归肺经', effect: '清热解毒，消痈排脓，利尿通淋', indication: '肺痈吐脓，痰热喘咳；热痢；痈肿疮毒' },
    { id: 436, name: '红藤', nature: '苦，平', channel: '归大肠、肝经', effect: '清热解毒，活血，祛风止痛', indication: '肠痈腹痛，热毒疮疡；跌打损伤，经闭痛经，风湿痹痛' },
    { id: 437, name: '败酱草', nature: '辛、苦，微寒', channel: '归胃、大肠、肝经', effect: '清热解毒，消痈排脓，祛瘀止痛', indication: '肠痈，肺痈，痈肿疮毒；产后瘀阻腹痛' },
    { id: 438, name: '白鲜皮', nature: '苦，寒', channel: '归脾、胃、膀胱经', effect: '清热燥湿，祛风解毒', indication: '湿热疮毒，黄水淋漓，湿疹，风疹，疥癣疮癞；湿热黄疸，风湿热痹' },
    { id: 439, name: '苦参', nature: '苦，寒', channel: '归心、肝、胃、大肠、膀胱经', effect: '清热燥湿，杀虫，利尿', indication: '湿热泻痢，便血，黄疸；湿热下注，带下，阴痒；湿疹湿疮，皮肤瘙痒，疥癣；湿热小便不利' },
    { id: 440, name: '秦皮', nature: '苦、涩，寒', channel: '归肝、胆、大肠经', effect: '清热燥湿，收涩止痢，止带，明目', indication: '湿热泻痢，赤白带下；目赤肿痛，目生翳膜' },
    { id: 441, name: '白及', nature: '苦、甘、涩，微寒', channel: '归肺、胃、肝经', effect: '收敛止血，消肿生肌', indication: '出血证；痈肿疮疡，手足皲裂，水火烫伤' },
    { id: 442, name: '仙鹤草', nature: '苦、涩，平', channel: '归心、肝经', effect: '收敛止血，止痢，截疟，补虚', indication: '出血证；腹泻、痢疾；疟疾寒热；脱力劳伤' },
    { id: 443, name: '紫珠', nature: '苦、涩，凉', channel: '归肝、肺、胃经', effect: '凉血收敛止血，散瘀解毒消肿', indication: '出血证；热毒疮疡，水火烫伤' },
    { id: 444, name: '棕榈', nature: '苦、涩，平', channel: '归肝、肺、大肠经', effect: '收敛止血', indication: '出血证' },
    { id: 445, name: '血余炭', nature: '苦，平', channel: '归肝、胃经', effect: '收敛止血，化瘀，利尿', indication: '出血证；小便不利' },
    { id: 446, name: '藕节', nature: '甘、涩，平', channel: '归肝、肺、胃经', effect: '收敛止血', indication: '出血证' },
    { id: 447, name: '艾叶', nature: '辛、苦，温；有小毒', channel: '归肝、脾、肾经', effect: '温经止血，散寒止痛，调经，安胎；外用祛湿止痒', indication: '虚寒性出血证；月经不调，痛经；胎动不安；心腹冷痛；皮肤瘙痒' },
    { id: 448, name: '炮姜', nature: '辛，热', channel: '归脾、胃、肾经', effect: '温经止血，温中止痛', indication: '虚寒性出血证；腹痛，腹泻' },
    { id: 449, name: '灶心土', nature: '辛，温', channel: '归脾、胃经', effect: '温中止血，止呕，止泻', indication: '虚寒性出血证；胃寒呕吐；脾虚久泻' },
    { id: 450, name: '花蕊石', nature: '酸、涩，平', channel: '归肝经', effect: '化瘀止血', indication: '出血证；瘀血阻滞' },
    { id: 451, name: '降香', nature: '辛，温', channel: '归肝、脾经', effect: '化瘀止血，理气止痛', indication: '瘀血性出血证；血瘀气滞之胸胁心腹疼痛及跌损瘀肿疼痛；秽浊内阻脾胃之呕吐腹痛' },
    { id: 452, name: '血竭', nature: '甘、咸，平', channel: '归心、肝经', effect: '活血定痛，化瘀止血，生肌敛疮', indication: '跌打损伤，瘀滞心腹疼痛；外伤出血；疮疡不敛' },
    { id: 453, name: '儿茶', nature: '苦、涩，微寒', channel: '归心、肺经', effect: '活血止痛，止血生肌，收湿敛疮，清肺化痰', indication: '跌扑伤痛；外伤出血，吐血衄血；疮疡不敛，湿疹，湿疮，牙疳，口疮；肺热咳嗽' },
    { id: 454, name: '刘寄奴', nature: '苦，温', channel: '归心、肝、脾经', effect: '散瘀止痛，疗伤止血，破血通经，消食化积', indication: '跌打损伤，肿痛出血；血瘀经闭，产后瘀滞腹痛；食积腹痛，赤白痢疾' },
    { id: 455, name: '莪术', nature: '辛、苦，温', channel: '归肝、脾经', effect: '破血行气，消积止痛', indication: '癥瘕痞块，瘀血经闭，胸痹心痛；食积气滞，脘腹胀痛' },
    { id: 456, name: '三棱', nature: '辛、苦，平', channel: '归肝、脾经', effect: '破血行气，消积止痛', indication: '癥瘕痞块，痛经，瘀血经闭，胸痹心痛；食积气滞，脘腹胀痛' },
    { id: 457, name: '水蛭', nature: '咸、苦，平；有小毒', channel: '归肝经', effect: '破血通经，逐瘀消癥', indication: '血瘀经闭，癥瘕痞块，中风偏瘫，跌扑损伤' },
    { id: 458, name: '虻虫', nature: '苦，微寒；有小毒', channel: '归肝经', effect: '破血逐瘀，消癥散积', indication: '血瘀经闭，癥瘕积聚；跌打损伤，瘀滞肿痛' },
    { id: 459, name: '斑蝥', nature: '辛，热；有大毒', channel: '归肝、胃、肾经', effect: '破血逐瘀，散结消癥，攻毒蚀疮', indication: '癥瘕，经闭；痈疽恶疮，顽癣，瘰疬，赘疣' },
    { id: 460, name: '穿山甲', nature: '咸，微寒', channel: '归肝、胃经', effect: '活血消癥，通经下乳，消肿排脓，搜风通络', indication: '经闭癥瘕，乳汁不通；痈肿疮毒，瘰疬；风湿痹痛，中风瘫痪，麻木拘挛' },
    // 继续补充其他重要中药
    { id: 461, name: '王不留行', nature: '苦，平', channel: '归肝、胃经', effect: '活血通经，下乳消肿，利尿通淋', indication: '血瘀经闭，痛经，难产；产后乳汁不下，乳痈肿痛；热淋，血淋，石淋' },
    { id: 462, name: '月季花', nature: '甘、淡、微苦，平', channel: '归肝经', effect: '活血调经，疏肝解郁', indication: '气滞血瘀，月经不调，痛经，闭经；肝郁胸胁胀痛' },
    { id: 463, name: '凌霄花', nature: '辛，微寒', channel: '归肝、心包经', effect: '活血通经，凉血祛风', indication: '血瘀经闭，癥瘕，跌打损伤；风疹，皮癣，皮肤瘙痒，痤疮' },
    { id: 464, name: '土鳖虫', nature: '咸，寒；有小毒', channel: '归肝经', effect: '破血逐瘀，续筋接骨', indication: '跌打损伤，筋伤骨折，瘀肿疼痛；血瘀经闭，产后瘀阻腹痛，癥瘕痞块' },
    { id: 465, name: '马钱子', nature: '苦，寒；有大毒', channel: '归肝、脾经', effect: '通络止痛，散结消肿', indication: '跌打损伤，骨折肿痛；风湿顽痹，麻木瘫痪；痈疽疮毒，咽喉肿痛' },
    { id: 466, name: '自然铜', nature: '辛，平', channel: '归肝经', effect: '散瘀止痛，续筋接骨', indication: '跌打损伤，筋骨折伤，瘀肿疼痛' },
    { id: 467, name: '苏木', nature: '甘、咸、辛，平', channel: '归心、肝、脾经', effect: '活血祛瘀，消肿止痛', indication: '跌打损伤，骨折筋伤，瘀滞肿痛；血滞经闭，产后瘀阻腹痛，痛经，心腹疼痛，痈肿疮毒' },
    { id: 468, name: '骨碎补', nature: '苦，温', channel: '归肝、肾经', effect: '活血疗伤止痛，补肾强骨；外用消风祛斑', indication: '跌打损伤或创伤，筋骨损伤，瘀滞肿痛；肾虚腰痛，筋骨痿软，耳鸣耳聋，牙齿松动，久泻；外治斑秃，白癜风' },
    { id: 469, name: '血竭', nature: '甘、咸，平', channel: '归心、肝经', effect: '活血定痛，化瘀止血，生肌敛疮', indication: '跌打损伤，瘀滞心腹疼痛；外伤出血；疮疡不敛' },
    { id: 470, name: '儿茶', nature: '苦、涩，微寒', channel: '归心、肺经', effect: '活血止痛，止血生肌，收湿敛疮，清肺化痰', indication: '跌扑伤痛；外伤出血，吐血衄血；疮疡不敛，湿疹，湿疮，牙疳，口疮；肺热咳嗽' },
    { id: 471, name: '刘寄奴', nature: '苦，温', channel: '归心、肝、脾经', effect: '散瘀止痛，疗伤止血，破血通经，消食化积', indication: '跌打损伤，肿痛出血；血瘀经闭，产后瘀滞腹痛；食积腹痛，赤白痢疾' },
    { id: 472, name: '桃仁', nature: '苦、甘，平', channel: '归心、肝、大肠经', effect: '活血祛瘀，润肠通便，止咳平喘', indication: '瘀血阻滞病证；肺痈，肠痈；肠燥便秘；咳嗽气喘' },
    { id: 473, name: '红花', nature: '辛，温', channel: '归心、肝经', effect: '活血通经，散瘀止痛', indication: '血滞经闭、痛经，产后瘀滞腹痛；癥瘕积聚；胸痹心痛，血瘀腹痛，胁痛；跌打损伤，瘀滞肿痛；瘀滞斑疹色暗' },
    { id: 474, name: '益母草', nature: '苦、辛，微寒', channel: '归肝、心包、膀胱经', effect: '活血调经，利尿消肿，清热解毒', indication: '血滞经闭、痛经，经行不畅，产后恶露不尽，瘀滞腹痛；水肿，小便不利；跌打损伤，疮痈肿毒，皮肤瘾疹' },
    { id: 475, name: '泽兰', nature: '苦、辛，微温', channel: '归肝、脾经', effect: '活血调经，祛瘀消痈，利水消肿', indication: '血瘀经闭，痛经，产后瘀滞腹痛；跌打损伤，瘀肿疼痛，疮痈肿毒；水肿，腹水' },
    { id: 476, name: '牛膝', nature: '苦、甘、酸，平', channel: '归肝、肾经', effect: '逐瘀通经，补肝肾，强筋骨，利尿通淋，引血下行', indication: '瘀血阻滞之经闭，痛经，胞衣不下；腰膝酸痛，筋骨无力；淋证，水肿，小便不利；火热上炎，阴虚火旺之头痛，眩晕，齿痛，口舌生疮，吐血，衄血' },
    { id: 477, name: '鸡血藤', nature: '苦、甘，温', channel: '归肝、肾经', effect: '活血补血，调经止痛，舒筋活络', indication: '月经不调，痛经，经闭；风湿痹痛，麻木瘫痪；血虚萎黄' },
    { id: 478, name: '天南星', nature: '苦、辛，温；有毒', channel: '归肺、肝、脾经', effect: '燥湿化痰，祛风止痉，散结消肿', indication: '湿痰，寒痰证；风痰眩晕，中风，癫痫，破伤风；痈疽肿痛，蛇虫咬伤' },
    { id: 479, name: '白附子', nature: '辛，温；有毒', channel: '归胃、肝经', effect: '祛风痰，定惊搐，解毒散结，止痛', indication: '中风痰壅，口眼㖞斜，语言謇涩，惊风癫痫，破伤风；痰厥头痛，偏正头痛；瘰疬痰核，毒蛇咬伤' },
    { id: 480, name: '白芥子', nature: '辛，温', channel: '归肺经', effect: '温肺豁痰，利气散结，通络止痛', indication: '寒痰喘咳，悬饮；阴疽流注，肢体麻木，关节肿痛' },
    { id: 481, name: '旋覆花', nature: '苦、辛、咸，微温', channel: '归肺、脾、胃、大肠经', effect: '降气，消痰，行水，止呕', indication: '风寒咳嗽，痰饮蓄结，胸膈痞闷，喘咳痰多；呕吐噫气，心下痞硬' },
    { id: 482, name: '白前', nature: '辛、苦，微温', channel: '归肺经', effect: '降气，消痰，止咳', indication: '肺气壅实，咳嗽痰多，胸满喘急' },
    { id: 483, name: '前胡', nature: '苦、辛，微寒', channel: '归肺经', effect: '降气化痰，散风清热', indication: '痰热咳喘；风热咳嗽' },
    { id: 484, name: '桔梗', nature: '苦、辛，平', channel: '归肺经', effect: '宣肺，祛痰，利咽，排脓', indication: '咳嗽痰多，胸闷不畅；咽喉肿痛，失音；肺痈吐脓；癃闭，便秘' },
    { id: 485, name: '川贝母', nature: '苦、甘，微寒', channel: '归肺、心经', effect: '清热润肺，化痰止咳，散结消痈', indication: '虚劳咳嗽，肺热燥咳；瘰疬，乳痈，肺痈' },
    { id: 486, name: '浙贝母', nature: '苦，寒', channel: '归肺、心经', effect: '清热化痰止咳，解毒散结消痈', indication: '风热咳嗽，痰火咳嗽；瘰疬，瘿瘤，乳痈疮毒，肺痈' },
    { id: 487, name: '瓜蒌', nature: '甘、微苦，寒', channel: '归肺、胃、大肠经', effect: '清热涤痰，宽胸散结，润燥滑肠', indication: '肺热咳嗽，痰浊黄稠；胸痹心痛，结胸痞满；肺痈，肠痈，乳痈；肠燥便秘' },
    { id: 488, name: '竹茹', nature: '甘，微寒', channel: '归肺、胃、心、胆经', effect: '清热化痰，除烦，止呕', indication: '痰热咳嗽，胆火挟痰，惊悸不宁，心烦失眠；中风痰迷，舌强不语；胃热呕吐，妊娠恶阻，胎动不安' },
    { id: 489, name: '竹沥', nature: '甘，寒', channel: '归心、肺、肝经', effect: '清热豁痰，定惊利窍', indication: '痰热咳喘；中风痰迷，惊痫癫狂' },
    { id: 490, name: '天竺黄', nature: '甘，寒', channel: '归心、肝经', effect: '清热豁痰，清心定惊', indication: '热病神昏，中风痰迷；小儿痰热惊痫，抽搐，夜啼' },
    // 补充缺失的中药（根据分类文档）
    { id: 491, name: '寒水石', nature: '辛、咸，寒', channel: '归心、胃、肾经', effect: '清热泻火，利窍，消肿', indication: '热病烦渴，癫狂；口疮，热毒疮肿，丹毒烫伤' },
    { id: 492, name: '穿心莲', nature: '苦，寒', channel: '归心、肺、大肠、膀胱经', effect: '清热解毒，凉血，消肿，燥湿', indication: '外感风热，温病初起；肺热咳喘，肺痈吐脓，咽喉肿痛；湿热泻痢，热淋涩痛，湿疹瘙痒；痈肿疮毒，蛇虫咬伤' },
    { id: 493, name: '猫爪草', nature: '甘、辛，温', channel: '归肝、肺经', effect: '化痰散结，解毒消肿', indication: '瘰疬痰核；疔疮肿毒，蛇虫咬伤' },
    { id: 494, name: '胖大海', nature: '甘，寒', channel: '归肺、大肠经', effect: '清热润肺，利咽开音，润肠通便', indication: '肺热声哑，干咳无痰，咽喉干痛；热结便秘，头痛目赤' },
    { id: 495, name: '巴豆霜', nature: '辛，热；有大毒', channel: '归胃、大肠经', effect: '峻下冷积，逐水退肿，豁痰利咽；外用蚀疮', indication: '寒积便秘；腹水鼓胀；喉痹痰阻；痈肿未溃，疥癣恶疮' },
    { id: 496, name: '皂荚', nature: '辛、咸，温；有小毒', channel: '归肺、大肠经', effect: '祛痰开窍，散结消肿', indication: '顽痰阻肺，咳喘痰多；中风、痰厥、癫痫、喉痹痰盛；痈肿' },
    // 补充缺失的中药（补虚药部分）
    { id: 497, name: '白扁豆', nature: '甘，微温', channel: '归脾、胃经', effect: '健脾化湿，和中消暑', indication: '脾胃虚弱，食欲不振，大便溏泻；白带过多；暑湿吐泻，胸闷腹胀' },
    { id: 498, name: '蜂蜜', nature: '甘，平', channel: '归肺、脾、大肠经', effect: '补中，润燥，止痛，解毒；外用生肌敛疮', indication: '脾气虚弱，脘腹挛急疼痛；肺虚久咳，肺燥咳嗽；肠燥便秘；解乌头类药毒；外治疮疡不敛，水火烫伤' },
    { id: 499, name: '益智', nature: '辛，温', channel: '归脾、肾经', effect: '暖肾固精缩尿，温脾止泻摄唾', indication: '肾虚遗尿，小便频数，遗精白浊；脾寒泄泻，腹中冷痛，口多涎唾' }
];

// 艾宾浩斯遗忘曲线复习间隔（天）
const EBBINGHAUS_INTERVALS = [1, 2, 4, 7, 15, 30];

// 中药分类映射（根据"中药分类.docx"重新组织，2024年更新）
// 注意：某些中药在数据库中不存在（如：冬瓜皮、玉米须、香加皮、佛手、郁金、姜黄、乳香、没药、五灵脂），已在分类中排除
const medicineCategories = {
    // 第一章 解表药
    '解表药-发散风寒': [31, 12, 32, 15, 33, 34, 35, 36, 37, 38, 39, 40, 41], // 麻黄、桂枝、紫苏、生姜、香薷、荆芥、防风、羌活、白芷、细辛、藁本、苍耳子、辛夷
    '解表药-发散风热': [28, 29, 43, 42, 30, 44, 45, 46, 13, 47], // 薄荷、牛蒡子、桑叶、蝉蜕、菊花、蔓荆子、柴胡、升麻、葛根、淡豆豉
    
    // 第二章 清热药
    '清热药-清热泻火': [48, 491, 49, 50, 51, 52, 53, 54, 55], // 石膏、寒水石、知母、芦根、天花粉、淡竹叶、栀子、夏枯草、决明子
    '清热药-清热燥湿': [23, 22, 56, 57, 59, 58, 60], // 黄芩、黄连、黄柏、龙胆、苦参、秦皮、白鲜皮
    '清热药-清热解毒': [24, 25, 492, 64, 26, 65, 66, 61, 62, 420, 414, 408, 67, 63, 419, 412, 413, 68, 69, 70, 71, 72, 73, 74, 75, 76, 409, 77], // 金银花、连翘、穿心莲、大青叶、板蓝根、青黛、贯众、蒲公英、紫花地丁、野菊花、重楼、漏芦、土茯苓、鱼腥草、金荞麦、大血藤、败酱草、射干、山豆根、马勃、白头翁、马齿苋、鸦胆子、地锦草、半边莲、白花蛇舌草、山慈菇、熊胆
    '清热药-清热凉血': [78, 79, 80, 81, 82, 83], // 生地黄、玄参、牡丹皮、赤芍、紫草、水牛角
    '清热药-清虚热': [84, 85, 86, 87, 88], // 青蒿、白薇、地骨皮、银柴胡、胡黄连
    
    // 第三章 泻下药
    '泻下药-攻下药': [89, 90, 91, 92], // 大黄、芒硝、番泻叶、芦荟
    '泻下药-润下药': [93, 94, 95], // 火麻仁、郁李仁、松子仁
    '泻下药-峻下逐水药': [96, 97, 98, 100, 495], // 甘遂、京大戟、芫花、牵牛子、巴豆霜
    
    // 第四章 祛风湿药
    '祛风湿药-祛风寒湿药': [101, 102, 103, 104, 105, 106, 108, 111, 112, 115], // 独活、威灵仙、川乌、蕲蛇、乌梢蛇、木瓜、伸筋草、海风藤、青风藤、路路通
    '祛风湿药-祛风湿热药': [116, 117, 118, 119, 120, 121, 122, 123], // 秦艽、防己、桑枝、豨莶草、臭梧桐、海桐皮、络石藤、雷公藤
    '祛风湿药-祛风湿强筋骨药': [127, 128, 129], // 五加皮、桑寄生、狗脊
    
    // 第五章 化湿药
    '化湿药': [133, 134, 131, 132, 135, 136, 137, 138], // 广藿香、佩兰、苍术、厚朴、砂仁、豆蔻、草豆蔻、草果
    
    // 第六章 利水渗湿药
    '利水渗湿药-利水消肿药': [10, 141, 139, 140], // 茯苓、薏苡仁、猪苓、泽泻（注：冬瓜皮、玉米须、香加皮在数据库中不存在）
    '利水渗湿药-利尿通淋药': [142, 143, 144, 145, 146, 147, 148, 149, 150, 153], // 车前子、滑石、木通、通草、瞿麦、萹蓄、地肤子、海金沙、石韦、萆薢
    '利水渗湿药-利湿退黄药': [154, 155, 156], // 茵陈、金钱草、虎杖
    
    // 第七章 温里药
    '温里药': [161, 162, 163, 164, 165, 166, 167, 169], // 附子、干姜、肉桂、吴茱萸、小茴香、丁香、高良姜、花椒
    
    // 第八章 理气药
    '理气药': [11, 175, 176, 172, 178, 179, 180, 174, 181, 173, 182, 183, 184, 186, 187], // 陈皮、青皮、枳实、木香、沉香、檀香、川楝子、乌药、荔枝核、香附、薤白、大腹皮、甘松、刀豆、柿蒂（注：佛手在数据库中不存在）
    
    // 第九章 消食药
    '消食药': [188, 189, 190, 191, 192, 193], // 山楂、神曲、麦芽、稻芽、莱菔子、鸡内金
    
    // 第十章 驱虫药
    '驱虫药': [194, 195, 196, 198, 199, 201], // 使君子、苦楝皮、槟榔、鹤草芽、雷丸、榧子
    
    // 第十一章 止血药
    '止血药-凉血止血药': [202, 203, 204, 205, 206, 207, 208], // 小蓟、大蓟、地榆、槐花、侧柏叶、白茅根、苎麻根
    '止血药-化瘀止血药': [209, 210, 211, 451], // 三七、茜草、蒲黄、降香
    '止血药-收敛止血药': [213, 214, 216, 217, 218], // 白及、仙鹤草、棕榈、血余炭、藕节
    '止血药-温经止血药': [219, 220], // 艾叶、炮姜
    
    // 第十二章 活血化瘀药
    '活血化瘀药-活血止痛药': [9, 245], // 川芎、延胡索（注：郁金、姜黄、乳香、没药、五灵脂在数据库中不存在）
    '活血化瘀药-活血调经药': [21, 222, 223, 224, 225, 226, 227, 228], // 丹参、红花、桃仁、益母草、泽兰、牛膝、鸡血藤、王不留行
    '活血化瘀药-活血疗伤药': [231, 232, 233, 234, 235, 236], // 土鳖虫、马钱子、自然铜、苏木、骨碎补、血竭
    '活血化瘀药-破血消癥药': [239, 240, 241, 244], // 莪术、三棱、水蛭、穿山甲
    
    // 第十三章 化痰药
    '化痰药-温化寒痰药': [14, 246, 247, 248, 496, 249, 250, 493], // 半夏、天南星、白附子、白芥子、皂荚、旋覆花、白前、猫爪草
    '化痰药-清化热痰药': [253, 254, 255, 256, 257, 258, 252, 494, 259, 260, 261, 262, 264], // 川贝母、浙贝母、瓜蒌、竹茹、竹沥、天竺黄、桔梗、胖大海、海藻、昆布、黄药子、海蛤壳、瓦楞子
    
    // 第十四章 止咳平喘药
    '止咳平喘药': [266, 267, 268, 269, 270, 272, 273, 274, 275], // 苦杏仁、紫苏子、百部、紫菀、款冬花、枇杷叶、桑白皮、葶苈子、白果
    
    // 第十五章 安神药
    '安神药-重镇安神药': [276, 277, 278, 279], // 朱砂、磁石、龙骨、琥珀
    '安神药-养心安神药': [280, 281, 306, 284, 285, 282], // 酸枣仁、柏子仁、远志、合欢皮、首乌藤、灵芝
    
    // 第十六章 平肝熄风药
    '平肝熄风药-平抑肝阳药': [287, 288, 289, 290, 291, 292], // 石决明、珍珠母、牡蛎、赭石、蒺藜、罗布麻叶
    '平肝熄风药-息风止痉药': [293, 294, 295, 296, 297, 298, 299, 300, 301], // 羚羊角、牛黄、珍珠、钩藤、天麻、地龙、全蝎、蜈蚣、僵蚕
    
    // 第十七章 开窍药
    '开窍药': [302, 303, 304, 305], // 麝香、冰片、苏合香、石菖蒲
    
    // 第十八章 补虚药
    '补虚药-补气': [1, 306, 307, 2, 20, 4, 497, 5, 16, 498], // 人参、西洋参、太子参、黄芪、党参、白术、白扁豆、甘草、大枣、蜂蜜
    '补虚药-补阳': [311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 499, 322, 323, 324, 325, 326], // 鹿茸、紫河车、淫羊藿、巴戟天、仙茅、杜仲、续断、肉苁蓉、锁阳、补骨脂、菟丝子、益智、沙苑子、蛤蚧、核桃仁、冬虫夏草
    '补虚药-补血': [3, 7, 8, 331, 332, 333], // 当归、熟地黄、白芍、阿胶、何首乌、龙眼肉
    '补虚药-补阴': [334, 335, 336, 18, 337, 338, 339, 340, 6, 343, 344, 347, 348], // 北沙参、南沙参、百合、麦冬、天冬、石斛、玉竹、黄精、枸杞子、墨旱莲、女贞子、龟甲、鳖甲（注：楮实子在数据库中不存在）
    
    // 第十九章 收涩药
    '收涩药-固表止汗药': [349, 350, 351], // 麻黄根、浮小麦、糯稻根须
    '收涩药-敛肺涩肠药': [19, 353, 354, 356, 357, 358, 359, 360], // 五味子、乌梅、五倍子、诃子、石榴皮、肉豆蔻、赤石脂、禹余粮
    '收涩药-固精缩尿止带药': [361, 363, 364, 365, 366, 367, 369], // 山茱萸、桑螵蛸、金樱子、海螵蛸、莲子、芡实、椿皮
    
    // 第二十章 涌吐药
    '涌吐药': [371, 374], // 常山、藜芦
    
    // 第二十一章 攻毒杀虫止痒药
    '攻毒杀虫止痒药': [376, 375, 377, 378, 382, 383, 379], // 硫黄、雄黄、白矾、蛇床子、土荆皮、蜂房、蟾酥
    
    // 第二十二章 拔毒去腐生肌药
    '拔毒去腐生肌药': [385, 386, 387, 389, 390] // 升药、轻粉、砒石、炉甘石、硼砂
};

// 根据ID获取中药分类（根据"中药分类.docx"重新组织）
function getMedicineCategory(medicineId) {
    // 优先从medicineCategories中查找
    for (const [category, ids] of Object.entries(medicineCategories)) {
        if (ids.includes(medicineId)) {
            return category;
        }
    }
    // 如果没有找到，返回空字符串或默认值
    // 注意：不在分类文档中的中药不会出现在分类中
    return '';
}

// 章节名称映射：将分类键转换为章节显示格式
const categoryChapterMapping = {
    // 第一章 解表药
    '解表药-发散风寒': { chapter: '第一章', chapterName: '解表药', section: '第一节', sectionName: '发散风寒药' },
    '解表药-发散风热': { chapter: '第一章', chapterName: '解表药', section: '第二节', sectionName: '发散风热药' },
    
    // 第二章 清热药
    '清热药-清热泻火': { chapter: '第二章', chapterName: '清热药', section: '第一节', sectionName: '清热泻火药' },
    '清热药-清热燥湿': { chapter: '第二章', chapterName: '清热药', section: '第二节', sectionName: '清热燥湿药' },
    '清热药-清热解毒': { chapter: '第二章', chapterName: '清热药', section: '第三节', sectionName: '清热解毒药' },
    '清热药-清热凉血': { chapter: '第二章', chapterName: '清热药', section: '第四节', sectionName: '清热凉血药' },
    '清热药-清虚热': { chapter: '第二章', chapterName: '清热药', section: '第五节', sectionName: '清虚热药' },
    
    // 第三章 泻下药
    '泻下药-攻下药': { chapter: '第三章', chapterName: '泻下药', section: '第一节', sectionName: '攻下药' },
    '泻下药-润下药': { chapter: '第三章', chapterName: '泻下药', section: '第二节', sectionName: '润下药' },
    '泻下药-峻下逐水药': { chapter: '第三章', chapterName: '泻下药', section: '第三节', sectionName: '峻下逐水药' },
    
    // 第四章 祛风湿药
    '祛风湿药-祛风寒湿药': { chapter: '第四章', chapterName: '祛风湿药', section: '第一节', sectionName: '祛风寒湿药' },
    '祛风湿药-祛风湿热药': { chapter: '第四章', chapterName: '祛风湿药', section: '第二节', sectionName: '祛风湿热药' },
    '祛风湿药-祛风湿强筋骨药': { chapter: '第四章', chapterName: '祛风湿药', section: '第三节', sectionName: '祛风湿强筋骨药' },
    
    // 第五章 化湿药
    '化湿药': { chapter: '第五章', chapterName: '化湿药', section: '', sectionName: '化湿药' },
    
    // 第六章 利水渗湿药
    '利水渗湿药-利水消肿药': { chapter: '第六章', chapterName: '利水渗湿药', section: '第一节', sectionName: '利水消肿药' },
    '利水渗湿药-利尿通淋药': { chapter: '第六章', chapterName: '利水渗湿药', section: '第二节', sectionName: '利尿通淋药' },
    '利水渗湿药-利湿退黄药': { chapter: '第六章', chapterName: '利水渗湿药', section: '第三节', sectionName: '利湿退黄药' },
    
    // 第七章 温里药
    '温里药': { chapter: '第七章', chapterName: '温里药', section: '', sectionName: '温里药' },
    
    // 第八章 理气药
    '理气药': { chapter: '第八章', chapterName: '理气药', section: '', sectionName: '理气药' },
    
    // 第九章 消食药
    '消食药': { chapter: '第九章', chapterName: '消食药', section: '', sectionName: '消食药' },
    
    // 第十章 驱虫药
    '驱虫药': { chapter: '第十章', chapterName: '驱虫药', section: '', sectionName: '驱虫药' },
    
    // 第十一章 止血药
    '止血药-凉血止血药': { chapter: '第十一章', chapterName: '止血药', section: '第一节', sectionName: '凉血止血药' },
    '止血药-化瘀止血药': { chapter: '第十一章', chapterName: '止血药', section: '第二节', sectionName: '化瘀止血药' },
    '止血药-收敛止血药': { chapter: '第十一章', chapterName: '止血药', section: '第三节', sectionName: '收敛止血药' },
    '止血药-温经止血药': { chapter: '第十一章', chapterName: '止血药', section: '第四节', sectionName: '温经止血药' },
    
    // 第十二章 活血化瘀药
    '活血化瘀药-活血止痛药': { chapter: '第十二章', chapterName: '活血化瘀药', section: '第一节', sectionName: '活血止痛药' },
    '活血化瘀药-活血调经药': { chapter: '第十二章', chapterName: '活血化瘀药', section: '第二节', sectionName: '活血调经药' },
    '活血化瘀药-活血疗伤药': { chapter: '第十二章', chapterName: '活血化瘀药', section: '第三节', sectionName: '活血疗伤药' },
    '活血化瘀药-破血消癥药': { chapter: '第十二章', chapterName: '活血化瘀药', section: '第四节', sectionName: '破血消癥药' },
    
    // 第十三章 化痰药
    '化痰药-温化寒痰药': { chapter: '第十三章', chapterName: '化痰药', section: '第一节', sectionName: '温化寒痰药' },
    '化痰药-清化热痰药': { chapter: '第十三章', chapterName: '化痰药', section: '第二节', sectionName: '清化热痰药' },
    
    // 第十四章 止咳平喘药
    '止咳平喘药': { chapter: '第十四章', chapterName: '止咳平喘药', section: '', sectionName: '止咳平喘药' },
    
    // 第十五章 安神药
    '安神药-重镇安神药': { chapter: '第十五章', chapterName: '安神药', section: '第一节', sectionName: '重镇安神药' },
    '安神药-养心安神药': { chapter: '第十五章', chapterName: '安神药', section: '第二节', sectionName: '养心安神药' },
    
    // 第十六章 平肝熄风药
    '平肝熄风药-平抑肝阳药': { chapter: '第十六章', chapterName: '平肝熄风药', section: '第一节', sectionName: '平抑肝阳药' },
    '平肝熄风药-息风止痉药': { chapter: '第十六章', chapterName: '平肝熄风药', section: '第二节', sectionName: '息风止痉药' },
    
    // 第十七章 开窍药
    '开窍药': { chapter: '第十七章', chapterName: '开窍药', section: '', sectionName: '开窍药' },
    
    // 第十八章 补虚药
    '补虚药-补气': { chapter: '第十八章', chapterName: '补虚药', section: '第一节', sectionName: '补气药' },
    '补虚药-补阳': { chapter: '第十八章', chapterName: '补虚药', section: '第二节', sectionName: '补阳药' },
    '补虚药-补血': { chapter: '第十八章', chapterName: '补虚药', section: '第三节', sectionName: '补血药' },
    '补虚药-补阴': { chapter: '第十八章', chapterName: '补虚药', section: '第四节', sectionName: '补阴药' },
    
    // 第十九章 收涩药
    '收涩药-固表止汗药': { chapter: '第十九章', chapterName: '收涩药', section: '第一节', sectionName: '固表止汗药' },
    '收涩药-敛肺涩肠药': { chapter: '第十九章', chapterName: '收涩药', section: '第二节', sectionName: '敛肺涩肠药' },
    '收涩药-固精缩尿止带药': { chapter: '第十九章', chapterName: '收涩药', section: '第三节', sectionName: '固精缩尿止带药' },
    
    // 第二十章 涌吐药
    '涌吐药': { chapter: '第二十章', chapterName: '涌吐药', section: '', sectionName: '涌吐药' },
    
    // 第二十一章 攻毒杀虫止痒药
    '攻毒杀虫止痒药': { chapter: '第二十一章', chapterName: '攻毒杀虫止痒药', section: '', sectionName: '攻毒杀虫止痒药' },
    
    // 第二十二章 拔毒去腐生肌药
    '拔毒去腐生肌药': { chapter: '第二十二章', chapterName: '拔毒去腐生肌药', section: '', sectionName: '拔毒去腐生肌药' }
};

// 获取分类的章节显示名称（用于筛选下拉框和分类标题）
function getCategoryDisplayName(categoryKey) {
    const mapping = categoryChapterMapping[categoryKey];
    if (!mapping) return categoryKey;
    
    if (mapping.section) {
        // 有子章节的格式：去掉"第几章"，只显示"第一节、发散风寒药"
        return `${mapping.section}、${mapping.sectionName}`;
    } else {
        // 没有子章节的格式：第一章、解表药
        return `${mapping.chapter}、${mapping.chapterName}`;
    }
}

// 获取分类的完整显示名称（包含章节名和子章节名）
function getCategoryFullDisplayName(categoryKey) {
    const mapping = categoryChapterMapping[categoryKey];
    if (!mapping) return categoryKey;
    
    if (mapping.section) {
        // 有子章节的格式：第一章 解表药 - 第一节 发散风寒药
        return `${mapping.chapter} ${mapping.chapterName} - ${mapping.section} ${mapping.sectionName}`;
    } else {
        // 没有子章节的格式：第一章 解表药
        return `${mapping.chapter} ${mapping.chapterName}`;
    }
}

// 提取章节号用于排序（从"第一章"提取出1，从"第二十二章"提取出22）
function extractChapterNumber(chapterStr) {
    // 将中文数字转换为阿拉伯数字
    const chineseNumbers = {
        '一': 1, '二': 2, '三': 3, '四': 4, '五': 5,
        '六': 6, '七': 7, '八': 8, '九': 9, '十': 10,
        '十一': 11, '十二': 12, '十三': 13, '十四': 14, '十五': 15,
        '十六': 16, '十七': 17, '十八': 18, '十九': 19, '二十': 20,
        '二十一': 21, '二十二': 22
    };
    
    // 提取"第X章"中的X部分
    const match = chapterStr.match(/第(.*?)章/);
    if (match && match[1]) {
        const chineseNum = match[1];
        if (chineseNumbers[chineseNum] !== undefined) {
            return chineseNumbers[chineseNum];
        }
    }
    
    // 如果匹配失败，尝试提取数字
    const num = parseInt(chapterStr.replace(/[^0-9]/g, ''));
    return num || 999;
}

// 获取所有分类列表（按章节顺序排序）
function getAllCategories() {
    const categories = Object.keys(medicineCategories);
    
    // 按章节号排序
    return categories.sort((a, b) => {
        const mappingA = categoryChapterMapping[a];
        const mappingB = categoryChapterMapping[b];
        
        if (!mappingA && !mappingB) return 0;
        if (!mappingA) return 1;
        if (!mappingB) return -1;
        
        // 按章节号排序
        const chapterNumA = extractChapterNumber(mappingA.chapter);
        const chapterNumB = extractChapterNumber(mappingB.chapter);
        
        if (chapterNumA !== chapterNumB) {
            return chapterNumA - chapterNumB;
        }
        
        // 如果同一章节，按节号排序
        if (mappingA.section && mappingB.section) {
            const sectionNumA = extractChapterNumber(mappingA.section);
            const sectionNumB = extractChapterNumber(mappingB.section);
            return sectionNumA - sectionNumB;
        }
        
        // 没有节的排在前面
        if (!mappingA.section && mappingB.section) return -1;
        if (mappingA.section && !mappingB.section) return 1;
        
        return 0;
    });
}

// 获取所有在分类文档中定义的药ID（用于过滤不在分类文档中的药）
function getAllCategorizedMedicineIds() {
    const ids = new Set();
    for (const idsArray of Object.values(medicineCategories)) {
        idsArray.forEach(id => ids.add(id));
    }
    return Array.from(ids);
}

// 用户管理系统
class UserManager {
    constructor() {
        this.currentUserId = null;
        this.initUsers();
    }

    initUsers() {
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([]));
        }
    }

    getUsers() {
        try {
            return JSON.parse(localStorage.getItem('users') || '[]');
        } catch (error) {
            console.error('getUsers error:', error);
            return [];
        }
    }

    createUser(name, avatar = '👤') {
        const users = this.getUsers();
        const userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        const newUser = {
            id: userId,
            name: name.trim() || '用户' + (users.length + 1),
            avatar: avatar,
            createdAt: new Date().toISOString()
        };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        return newUser;
    }

    deleteUser(userId) {
        const users = this.getUsers();
        const filtered = users.filter(u => u.id !== userId);
        localStorage.setItem('users', JSON.stringify(filtered));
        
        // 删除该用户的学习数据
        localStorage.removeItem(`medicineStudy_${userId}`);
        
        // 如果删除的是当前用户，切换到其他用户或显示登录界面
        if (this.currentUserId === userId) {
            if (filtered.length > 0) {
                this.login(filtered[0].id);
            } else {
                this.logout();
            }
        }
    }

    login(userId) {
        this.currentUserId = userId;
        localStorage.setItem('currentUserId', userId);
        return this.getUser(userId);
    }

    logout() {
        this.currentUserId = null;
        localStorage.removeItem('currentUserId');
    }

    getCurrentUser() {
        if (!this.currentUserId) {
            const saved = localStorage.getItem('currentUserId');
            if (saved) {
                this.currentUserId = saved;
            }
        }
        if (this.currentUserId) {
            return this.getUser(this.currentUserId);
        }
        return null;
    }

    getUser(userId) {
        const users = this.getUsers();
        return users.find(u => u.id === userId);
    }

    updateUser(userId, updates) {
        const users = this.getUsers();
        const index = users.findIndex(u => u.id === userId);
        if (index !== -1) {
            users[index] = { ...users[index], ...updates };
            localStorage.setItem('users', JSON.stringify(users));
            return users[index];
        }
        return null;
    }
}

// 全局用户管理器
const userManager = new UserManager();

// 数据管理（使用艾宾浩斯记忆法）
class MedicineStudyManager {
    constructor() {
        this.userManager = userManager;
        this.initStorage();
    }

    getStorageKey() {
        const userId = userManager.currentUserId || userManager.getCurrentUser()?.id;
        if (!userId) {
            throw new Error('No user logged in');
        }
        return `medicineStudy_${userId}`;
    }

    initStorage() {
        const storageKey = this.getStorageKey();
        if (!localStorage.getItem(storageKey)) {
            // 默认选择所有中药
            const allMedicineIds = getAllCategorizedMedicineIds();
            localStorage.setItem(storageKey, JSON.stringify({
                dailyGoal: 10,
                selectedMedicines: allMedicineIds, // 用户选择的中药ID数组
                learned: [], // 学习过的中药ID数组
                mastered: [], // 已掌握的中药ID数组
                studyHistory: [], // 学习历史记录 {date, medicineIds: []}
                // 艾宾浩斯记忆法数据结构
                medicineProgress: {} // {medicineId: {firstLearnedDate, reviewCount, lastReviewDate, nextReviewDate}}
            }));
        } else {
            // 确保已有数据包含所有必需的字段
            try {
                const data = JSON.parse(localStorage.getItem(storageKey));
                if (!data.medicineProgress) {
                    data.medicineProgress = {};
                }
                if (!data.learned) {
                    data.learned = [];
                }
                if (!data.mastered) {
                    data.mastered = [];
                }
                if (!data.studyHistory) {
                    data.studyHistory = [];
                }
                if (typeof data.dailyGoal !== 'number') {
                    data.dailyGoal = 10;
                }
                // 如果没有selectedMedicines，默认只选择在分类文档中定义的中药
                if (!data.selectedMedicines || !Array.isArray(data.selectedMedicines) || data.selectedMedicines.length === 0) {
                    data.selectedMedicines = getAllCategorizedMedicineIds();
                }
                localStorage.setItem('medicineStudy', JSON.stringify(data));
            } catch (e) {
                console.error('数据修复失败，重新初始化:', e);
                localStorage.removeItem('medicineStudy');
                this.initStorage();
            }
        }
    }

    getData() {
        try {
            const storageKey = this.getStorageKey();
            const data = localStorage.getItem(storageKey);
            if (!data) {
                this.initStorage();
                return JSON.parse(localStorage.getItem(storageKey));
            }
            return JSON.parse(data);
        } catch (error) {
            console.error('获取数据失败:', error);
            // 如果数据损坏，重新初始化
            const storageKey = this.getStorageKey();
            this.initStorage();
            return JSON.parse(localStorage.getItem(storageKey) || '{}');
        }
    }

    saveData(data) {
        const storageKey = this.getStorageKey();
        localStorage.setItem(storageKey, JSON.stringify(data));
    }

    getTodayDate() {
        return new Date().toISOString().split('T')[0];
    }

    // 在日期上添加天数，返回新的日期字符串
    addDaysToDate(dateStr, days) {
        const date = new Date(dateStr);
        date.setDate(date.getDate() + days);
        return date.toISOString().split('T')[0];
    }

    getDailyGoal() {
        return this.getData().dailyGoal;
    }

    setDailyGoal(goal) {
        const data = this.getData();
        data.dailyGoal = goal;
        this.saveData(data);
    }

    // 计算下次复习日期（基于艾宾浩斯遗忘曲线）
    calculateNextReviewDate(reviewCount) {
        if (!EBBINGHAUS_INTERVALS || !Array.isArray(EBBINGHAUS_INTERVALS) || EBBINGHAUS_INTERVALS.length === 0) {
            console.error('EBBINGHAUS_INTERVALS未定义或为空');
            return 1; // 默认返回1天
        }
        
        const count = Number(reviewCount) || 0;
        if (count >= EBBINGHAUS_INTERVALS.length) {
            // 如果超过最大间隔，使用最后一个间隔
            return EBBINGHAUS_INTERVALS[EBBINGHAUS_INTERVALS.length - 1];
        }
        if (count < 0) {
            return EBBINGHAUS_INTERVALS[0];
        }
        return EBBINGHAUS_INTERVALS[count];
    }

    // 获取今天应该学习的新中药（未学习过的）
    getTodayNewMedicines() {
        try {
            // 检查数据库是否已加载
            if (!medicineDatabase || !Array.isArray(medicineDatabase) || medicineDatabase.length === 0) {
                console.error('medicineDatabase未正确加载或为空');
                return [];
            }
            
            const data = this.getData();
            if (!data || !data.learned || !Array.isArray(data.learned)) {
                console.error('数据格式错误，重新初始化');
                this.initStorage();
                const newData = this.getData();
                return this._getMedicinesFromData(newData);
            }
            
            return this._getMedicinesFromData(data);
        } catch (error) {
            console.error('getTodayNewMedicines error:', error);
            return [];
        }
    }
    
    _getMedicinesFromData(data) {
        const learnedIds = new Set(data.learned || []);
        const dailyGoal = data.dailyGoal || 10;
        // 只从用户选择的中药中获取（且必须在分类文档中）
        const categorizedIds = new Set(getAllCategorizedMedicineIds());
        const selectedIds = new Set(data.selectedMedicines || getAllCategorizedMedicineIds());
        
        // 按照分类顺序获取所有可用中药
        const allAvailableMedicines = [];
        const categories = getAllCategories(); // 获取按章节顺序排序的分类列表
        
        // 按照分类顺序遍历，收集所有未学习的中药
        categories.forEach(category => {
            const categoryIds = medicineCategories[category] || [];
            categoryIds.forEach(medicineId => {
                if (selectedIds.has(medicineId) && categorizedIds.has(medicineId) && !learnedIds.has(medicineId)) {
                    const medicine = medicineDatabase.find(m => m.id === medicineId);
                    if (medicine && !allAvailableMedicines.find(m => m.id === medicineId)) {
                        allAvailableMedicines.push(medicine);
                    }
                }
            });
        });
        
        // 取前dailyGoal个
        const medicines = allAvailableMedicines.slice(0, dailyGoal);
        return medicines;
    }
    
    // 获取额外的中药（用于加练，按分类顺序）
    getExtraMedicines(alreadyLearnedCount, extraCount) {
        const data = this.getData();
        const learnedIds = new Set(data.learned || []);
        // 只从用户选择的中药中获取（且必须在分类文档中）
        const categorizedIds = new Set(getAllCategorizedMedicineIds());
        const selectedIds = new Set(data.selectedMedicines || getAllCategorizedMedicineIds());
        
        // 按照分类顺序获取所有可用中药
        const allAvailableMedicines = [];
        const categories = getAllCategories(); // 获取按章节顺序排序的分类列表
        
        // 按照分类顺序遍历，收集所有未学习的中药
        categories.forEach(category => {
            const categoryIds = medicineCategories[category] || [];
            categoryIds.forEach(medicineId => {
                if (selectedIds.has(medicineId) && categorizedIds.has(medicineId) && !learnedIds.has(medicineId)) {
                    const medicine = medicineDatabase.find(m => m.id === medicineId);
                    if (medicine && !allAvailableMedicines.find(m => m.id === medicineId)) {
                        allAvailableMedicines.push(medicine);
                    }
                }
            });
        });
        
        // 获取超出已学习数量的中药（根据用户选择的数量）
        const medicines = allAvailableMedicines.slice(alreadyLearnedCount, alreadyLearnedCount + extraCount);
        return medicines;
    }
    
    // 设置选中的中药
    setSelectedMedicines(medicineIds) {
        const data = this.getData();
        data.selectedMedicines = medicineIds;
        this.saveData(data);
    }
    
    // 获取选中的中药（只返回在分类文档中定义的药）
    getSelectedMedicines() {
        const data = this.getData();
        const categorizedIds = getAllCategorizedMedicineIds();
        const selectedIds = data.selectedMedicines || categorizedIds;
        // 过滤掉不在分类文档中的药
        return selectedIds.filter(id => categorizedIds.includes(id));
    }

    // 获取今天需要复习的中药（基于艾宾浩斯遗忘曲线）
    getTodayReviewMedicines() {
        try {
            const data = this.getData();
            if (!data || !data.learned || !Array.isArray(data.learned)) {
                return [];
            }
            
            const today = this.getTodayDate();
            const masteredIds = new Set(data.mastered || []);
            
            // 确保 medicineProgress 存在
            if (!data.medicineProgress) {
                data.medicineProgress = {};
            }
            
            const reviewList = [];
            
            // 只处理在分类文档中定义的中药
            const categorizedIds = new Set(getAllCategorizedMedicineIds());
            const selectedIds = new Set(data.selectedMedicines || getAllCategorizedMedicineIds());
            
            // 遍历所有已学习但未掌握的中药
            for (const medicineId of data.learned) {
                // 必须在分类文档中且被选中
                if (!categorizedIds.has(medicineId) || !selectedIds.has(medicineId)) continue;
                if (masteredIds.has(medicineId)) continue;
                
                const progress = data.medicineProgress[medicineId];
                if (!progress) continue;
                
                // 检查是否需要复习
                if (progress.nextReviewDate && progress.nextReviewDate <= today) {
                    const medicine = medicineDatabase.find(m => m.id === medicineId);
                    if (medicine) {
                        reviewList.push(medicine);
                    }
                }
            }
            
            return reviewList;
        } catch (error) {
            console.error('getTodayReviewMedicines error:', error);
            return [];
        }
    }

    // 标记为已学习
    markAsLearned(medicineId) {
        try {
            const data = this.getData();
            if (!data) {
                console.error('无法获取数据');
                return;
            }
            
            // 确保 medicineProgress 存在
            if (!data.medicineProgress) {
                data.medicineProgress = {};
            }
            
            const today = this.getTodayDate();

            if (!data.learned.includes(medicineId)) {
                data.learned.push(medicineId);
            }

            // 初始化或更新艾宾浩斯记忆法数据
            if (!data.medicineProgress[medicineId]) {
                const nextReviewDays = this.calculateNextReviewDate(0);
                const nextReviewDate = this.addDaysToDate(today, nextReviewDays);
                data.medicineProgress[medicineId] = {
                    firstLearnedDate: today,
                    reviewCount: 0,
                    lastReviewDate: null,
                    nextReviewDate: nextReviewDate
                };
            }

            // 更新今日学习历史
            if (!data.studyHistory) {
                data.studyHistory = [];
            }
            let todayStudy = data.studyHistory.find(h => h.date === today);
            if (!todayStudy) {
                todayStudy = { date: today, medicineIds: [] };
                data.studyHistory.push(todayStudy);
            }
            if (!todayStudy.medicineIds.includes(medicineId)) {
                todayStudy.medicineIds.push(medicineId);
            }

            this.saveData(data);
        } catch (error) {
            console.error('markAsLearned error:', error);
        }
    }

    // 标记为已掌握
    markAsMastered(medicineId) {
        const data = this.getData();
        if (!data.mastered.includes(medicineId)) {
            data.mastered.push(medicineId);
            this.saveData(data);
        }
    }

    // 标记为未记住（复习时）
    markAsForgotten(medicineId) {
        const data = this.getData();
        // 从已掌握中移除
        data.mastered = data.mastered.filter(id => id !== medicineId);
        // 重置复习次数，重新开始
        if (data.medicineProgress[medicineId]) {
            const today = this.getTodayDate();
            const nextReviewDays = this.calculateNextReviewDate(0);
            const nextReviewDate = this.addDaysToDate(today, nextReviewDays);
            data.medicineProgress[medicineId].reviewCount = 0;
            data.medicineProgress[medicineId].nextReviewDate = nextReviewDate;
        }
        this.saveData(data);
    }

    // 复习时标记为已记住（更新艾宾浩斯记忆法数据）
    markReviewAsKnown(medicineId) {
        const data = this.getData();
        const today = this.getTodayDate();
        
        if (!data.medicineProgress[medicineId]) {
            // 如果没有进度数据，初始化
            const nextReviewDays = this.calculateNextReviewDate(0);
            const nextReviewDate = this.addDaysToDate(today, nextReviewDays);
            data.medicineProgress[medicineId] = {
                firstLearnedDate: today,
                reviewCount: 0,
                lastReviewDate: today,
                nextReviewDate: nextReviewDate
            };
        } else {
            // 更新复习次数和下次复习日期
            const progress = data.medicineProgress[medicineId];
            progress.reviewCount += 1;
            progress.lastReviewDate = today;
            const nextReviewDays = this.calculateNextReviewDate(progress.reviewCount);
            progress.nextReviewDate = this.addDaysToDate(today, nextReviewDays);
        }
        
        this.saveData(data);
    }

    // 获取统计数据
    getStatistics() {
        const data = this.getData();
        const today = this.getTodayDate();
        const todayStudy = data.studyHistory.find(h => h.date === today);
        
        // 只统计选中的中药（且必须在分类文档中）
        const categorizedIds = new Set(getAllCategorizedMedicineIds());
        const selectedIds = new Set(data.selectedMedicines || getAllCategorizedMedicineIds());
        // 过滤掉不在分类文档中的药
        const filteredSelectedIds = new Set([...selectedIds].filter(id => categorizedIds.has(id)));
        const selectedCount = filteredSelectedIds.size;
        const learnedInSelected = data.learned.filter(id => filteredSelectedIds.has(id));
        const masteredInSelected = data.mastered.filter(id => filteredSelectedIds.has(id));
        
        // 计算预计完成时间
        const completionEstimate = this.calculateCompletionEstimate(filteredSelectedIds, data);

        return {
            totalMedicines: selectedCount,
            learnedCount: learnedInSelected.length,
            masteredCount: masteredInSelected.length,
            todayNewCount: todayStudy ? todayStudy.medicineIds.filter(id => filteredSelectedIds.has(id)).length : 0,
            todayReviewCount: this.getTodayReviewMedicines().length,
            learningCount: learnedInSelected.length - masteredInSelected.length,
            progress: selectedCount > 0 ? ((learnedInSelected.length / selectedCount) * 100).toFixed(1) : '0.0',
            completionEstimate: completionEstimate
        };
    }
    
    // 计算预计完成时间（根据艾宾浩斯记忆曲线）
    // 艾宾浩斯间隔：[1, 2, 4, 7, 15, 30] 天
    // 累计天数：[1, 3, 7, 14, 29, 59] 天（从学习日开始）
    calculateCompletionEstimate(selectedIds, data) {
        const dailyGoal = data.dailyGoal || 10; // 获取每日新学数量
        
        const today = this.getTodayDate();
        const todayDate = new Date(today);
        const masteredIds = new Set(data.mastered || []);
        const learnedIds = new Set(data.learned || []);
        
        // 计算还需要学习的中药数量
        const remainingToLearn = Array.from(selectedIds).filter(id => !learnedIds.has(id)).length;
        
        // 计算还需要学习的天数（基于每日新学数量）
        const daysToLearnAll = remainingToLearn > 0 && dailyGoal > 0 
            ? Math.ceil(remainingToLearn / dailyGoal) 
            : 0;
        
        // 计算所有复习间隔的累计天数（从学习日开始）
        const cumulativeDays = [];
        let sum = 0;
        for (let i = 0; i < EBBINGHAUS_INTERVALS.length; i++) {
            sum += EBBINGHAUS_INTERVALS[i];
            cumulativeDays.push(sum);
        }
        // 完成所有复习的总天数（学习后第59天完成最后一次复习）
        const totalReviewDays = cumulativeDays[cumulativeDays.length - 1]; // 59天
        
        // 计算每个已学习中药完成所有复习的日期
        let maxCompletionDate = todayDate;
        
        for (const medicineId of data.learned || []) {
            if (!selectedIds.has(medicineId)) continue;
            if (masteredIds.has(medicineId)) continue; // 已掌握的不需要复习
            
            const progress = data.medicineProgress[medicineId];
            if (!progress || !progress.firstLearnedDate) continue;
            
            // 该中药第一次学习的日期
            const firstLearnedDate = new Date(progress.firstLearnedDate);
            
            // 计算该中药完成所有复习的日期（从学习日开始 + 59天）
            const finalReviewDate = new Date(firstLearnedDate);
            finalReviewDate.setDate(finalReviewDate.getDate() + totalReviewDays);
            
            if (finalReviewDate > maxCompletionDate) {
                maxCompletionDate = finalReviewDate;
            }
        }
        
        // 如果还有未学习的中药，需要考虑学习时间和复习时间
        let estimatedCompletionDate = maxCompletionDate;
        if (remainingToLearn > 0 && dailyGoal > 0) {
            // 最后一个中药的学习日期
            const lastLearnDate = new Date(todayDate);
            lastLearnDate.setDate(lastLearnDate.getDate() + daysToLearnAll - 1);
            
            // 最后一个中药完成所有复习的日期（从学习日期开始 + 59天）
            const lastMedicineFinalReviewDate = new Date(lastLearnDate);
            lastMedicineFinalReviewDate.setDate(lastMedicineFinalReviewDate.getDate() + totalReviewDays);
            
            if (lastMedicineFinalReviewDate > estimatedCompletionDate) {
                estimatedCompletionDate = lastMedicineFinalReviewDate;
            }
        }
        
        // 计算天数差
        const daysDiff = Math.ceil((estimatedCompletionDate - todayDate) / (1000 * 60 * 60 * 24));
        
        if (daysDiff <= 0) {
            return { days: 0, message: '学习已完成' };
        }
        
        // 格式化日期
        const formattedDate = estimatedCompletionDate.toLocaleDateString('zh-CN', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        return {
            days: daysDiff,
            date: formattedDate,
            message: `预计还需 ${daysDiff} 天完成所有学习（${formattedDate}）`
        };
    }

    // 获取今日新学列表（只包括选中的，且必须在分类文档中）
    getTodayNewList() {
        const data = this.getData();
        const today = this.getTodayDate();
        const todayStudy = data.studyHistory.find(h => h.date === today);
        if (!todayStudy) return [];
        const categorizedIds = new Set(getAllCategorizedMedicineIds());
        const selectedIds = new Set(data.selectedMedicines || getAllCategorizedMedicineIds());
        return todayStudy.medicineIds
            .filter(id => selectedIds.has(id) && categorizedIds.has(id)) // 确保在分类文档中
            .map(id => medicineDatabase.find(m => m.id === id))
            .filter(m => m !== undefined);
    }

    // 获取今日复习列表
    getTodayReviewList() {
        return this.getTodayReviewMedicines();
    }
    
    // 获取指定日期的复习数量
    getDayReviewCount(date) {
        try {
            const data = this.getData();
            if (!data.medicineProgress) return 0;
            
            let count = 0;
            for (const medicineId in data.medicineProgress) {
                const progress = data.medicineProgress[medicineId];
                if (progress.lastReviewDate === date) {
                    count++;
                }
            }
            return count;
        } catch (error) {
            console.error('getDayReviewCount error:', error);
            return 0;
        }
    }

    // 获取已掌握列表（只包括选中的，且必须在分类文档中）
    getMasteredList() {
        const data = this.getData();
        const categorizedIds = new Set(getAllCategorizedMedicineIds());
        const selectedIds = new Set(data.selectedMedicines || getAllCategorizedMedicineIds());
        return data.mastered
            .filter(id => selectedIds.has(id) && categorizedIds.has(id)) // 确保在分类文档中
            .map(id => medicineDatabase.find(m => m.id === id))
            .filter(m => m !== undefined);
    }

    // 获取总进度列表（所有已学习的，且必须在分类文档中）
    getTotalProgressList() {
        const data = this.getData();
        const categorizedIds = new Set(getAllCategorizedMedicineIds());
        const selectedIds = new Set(data.selectedMedicines || getAllCategorizedMedicineIds());
        return data.learned
            .filter(id => selectedIds.has(id) && categorizedIds.has(id)) // 确保在分类文档中
            .map(id => medicineDatabase.find(m => m.id === id))
            .filter(m => m !== undefined);
    }

    // 重置所有数据
    resetData() {
        if (confirm('确定要重置所有学习数据吗？此操作不可恢复！')) {
            const storageKey = this.getStorageKey();
            localStorage.removeItem(storageKey);
            this.initStorage();
            location.reload();
        }
    }
}

// 全局实例 - 在checkLogin中初始化
let studyManager = null;

// 学习模式
let currentStudyList = [];
let currentStudyIndex = 0;
let currentReviewList = [];
let currentReviewIndex = 0;
let dailyGoal = 10; // 每日目标数量
let isExtraPractice = false; // 是否处于加练模式

// 检查用户登录状态
function checkLogin() {
    const currentUser = userManager.getCurrentUser();
    if (currentUser) {
        // 已登录，初始化学习管理器
        studyManager = new MedicineStudyManager();
        showMainInterface();
        updateUserDisplay();
        updateStatistics();
    } else {
        // 未登录，显示登录界面
        showLoginInterface();
    }
}

// 显示登录界面
function showLoginInterface() {
    document.getElementById('login-panel').style.display = 'block';
    document.getElementById('menu-panel').style.display = 'none';
    document.getElementById('settings-panel').style.display = 'none';
    document.getElementById('study-panel').style.display = 'none';
    document.getElementById('review-panel').style.display = 'none';
    document.getElementById('statistics-panel').style.display = 'none';
    document.getElementById('category-selection-panel').style.display = 'none';
    document.getElementById('medicine-browse-panel').style.display = 'none';
    document.getElementById('user-info').style.display = 'none';
    document.getElementById('user-menu').style.display = 'none';
    renderUserList();
}

// 显示主界面
function showMainInterface() {
    document.getElementById('login-panel').style.display = 'none';
    document.getElementById('menu-panel').style.display = 'block';
    document.getElementById('user-menu').style.display = 'none';
    document.getElementById('medicine-browse-panel').style.display = 'block';
    document.getElementById('user-info').style.display = 'flex';
    updateStatistics();
    updateDailyGoalDisplay();
    if (typeof loadAllMedicines === 'function') {
        loadAllMedicines();
    }
}

// 渲染用户列表
function renderUserList() {
    const container = document.getElementById('user-list-container');
    const users = userManager.getUsers();
    const currentUserId = userManager.getCurrentUser()?.id;

    if (users.length === 0) {
        container.innerHTML = '<p style="color: #999; padding: 20px; text-align: center;">暂无用户，请创建新用户</p>';
        return;
    }

    let html = '';
    users.forEach(user => {
        const userData = getUserStudyData(user.id);
        const learnedCount = (userData.learned || []).length;
        const masteredCount = (userData.mastered || []).length;
        const isActive = user.id === currentUserId;

        html += `
            <div class="user-list-item ${isActive ? 'active' : ''}" onclick="loginUser('${user.id}')">
                <div class="user-list-item-info">
                    <div class="user-list-item-avatar">${user.avatar}</div>
                    <div>
                        <div class="user-list-item-name">${user.name}</div>
                        <div class="user-list-item-stats">已学 ${learnedCount} | 已掌握 ${masteredCount}</div>
                    </div>
                </div>
                <div class="user-list-item-actions" onclick="event.stopPropagation();">
                    ${!isActive ? `<button class="btn btn-secondary" onclick="deleteUser('${user.id}', event)">删除</button>` : ''}
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// 获取用户学习数据（用于显示统计）
function getUserStudyData(userId) {
    try {
        const data = JSON.parse(localStorage.getItem(`medicineStudy_${userId}`) || '{}');
        return data;
    } catch (error) {
        return {};
    }
}

// 创建新用户
function createNewUser() {
    const nameInput = document.getElementById('new-user-name');
    const avatarSelect = document.getElementById('new-user-avatar');
    const name = nameInput.value.trim();

    if (!name || name.length < 2) {
        alert('请输入用户名（至少2个字符）');
        return;
    }

    const users = userManager.getUsers();
    if (users.some(u => u.name === name)) {
        alert('用户名已存在，请使用其他名称');
        return;
    }

    const newUser = userManager.createUser(name, avatarSelect.value);
    userManager.login(newUser.id);
    studyManager = new MedicineStudyManager();
    showMainInterface();
    updateUserDisplay();
    updateStatistics();

    // 清空输入
    nameInput.value = '';
    avatarSelect.value = '👤';
}

// 登录用户
function loginUser(userId) {
    userManager.login(userId);
    studyManager = new MedicineStudyManager();
    showMainInterface();
    updateUserDisplay();
    updateStatistics();
}

// 切换用户
function switchUser() {
    closeUserMenu();
    showLoginInterface();
}

// 删除用户
function deleteUser(userId, event) {
    if (event) {
        event.stopPropagation();
    }
    if (confirm('确定要删除此用户吗？此操作将删除该用户的所有学习数据，且不可恢复！')) {
        userManager.deleteUser(userId);
        renderUserList();
        if (userManager.getCurrentUser()) {
            studyManager = new MedicineStudyManager();
            updateUserDisplay();
            updateStatistics();
        } else {
            showLoginInterface();
        }
    }
}

// 删除当前用户
function deleteCurrentUser() {
    const currentUser = userManager.getCurrentUser();
    if (currentUser) {
        if (confirm('确定要删除当前账户吗？此操作将删除所有学习数据，且不可恢复！')) {
            userManager.deleteUser(currentUser.id);
            showLoginInterface();
        }
    }
    closeUserMenu();
}

// 更新用户显示
function updateUserDisplay() {
    const currentUser = userManager.getCurrentUser();
    if (currentUser) {
        const avatarIcon = document.getElementById('avatar-icon');
        const userName = document.getElementById('current-user-name');
        if (avatarIcon) {
            avatarIcon.textContent = currentUser.avatar;
        }
        if (userName) {
            userName.textContent = currentUser.name;
        }
    }
}

// 显示用户菜单
function showUserMenu() {
    const menu = document.getElementById('user-menu');
    if (menu.style.display === 'none' || !menu.style.display) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

// 关闭用户菜单
function closeUserMenu() {
    document.getElementById('user-menu').style.display = 'none';
}

// 显示用户档案
function showUserProfile() {
    const currentUser = userManager.getCurrentUser();
    if (!currentUser) return;

    const modal = document.getElementById('user-profile-modal');
    document.getElementById('profile-avatar-display').textContent = currentUser.avatar;
    document.getElementById('profile-avatar-select').value = currentUser.avatar;
    document.getElementById('profile-user-name').value = currentUser.name;

    // 更新统计数据
    const data = studyManager.getData();
    const history = data.studyHistory || [];
    document.getElementById('profile-total-days').textContent = history.length;
    document.getElementById('profile-learned-count').textContent = (data.learned || []).length;
    document.getElementById('profile-mastered-count').textContent = (data.mastered || []).length;

    modal.style.display = 'block';
    closeUserMenu();
}

// 关闭用户档案模态框
function closeUserProfileModal() {
    document.getElementById('user-profile-modal').style.display = 'none';
}

// 更新档案头像
function updateProfileAvatar() {
    const currentUser = userManager.getCurrentUser();
    if (!currentUser) return;

    const avatar = document.getElementById('profile-avatar-select').value;
    userManager.updateUser(currentUser.id, { avatar: avatar });
    updateUserDisplay();
    document.getElementById('profile-avatar-display').textContent = avatar;
}

// 更新档案名称
function updateProfileName() {
    const currentUser = userManager.getCurrentUser();
    if (!currentUser) return;

    const name = document.getElementById('profile-user-name').value.trim();
    if (name && name !== currentUser.name) {
        const users = userManager.getUsers();
        if (users.some(u => u.name === name && u.id !== currentUser.id)) {
            alert('用户名已存在，请使用其他名称');
            document.getElementById('profile-user-name').value = currentUser.name;
            return;
        }
        userManager.updateUser(currentUser.id, { name: name });
        updateUserDisplay();
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    checkLogin();
    setupCardFlip();
    
    // 点击页面其他地方关闭用户菜单
    document.addEventListener('click', function(event) {
        const userMenu = document.getElementById('user-menu');
        const userAvatar = document.querySelector('.user-avatar');
        if (userMenu && userAvatar && !userAvatar.contains(event.target) && !userMenu.contains(event.target)) {
            closeUserMenu();
        }
    });
});

function setupCardFlip() {
    // 学习卡片翻转
    const studyCard = document.getElementById('medicine-card');
    if (studyCard) {
        studyCard.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    }

    // 复习卡片翻转
    const reviewCard = document.getElementById('review-card');
    if (reviewCard) {
        reviewCard.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    }
}

function updateStatistics() {
    if (!studyManager) {
        // 如果studyManager未初始化，尝试初始化
        const currentUser = userManager.getCurrentUser();
        if (currentUser) {
            studyManager = new MedicineStudyManager();
        } else {
            return;
        }
    }
    const stats = studyManager.getStatistics();
    
    document.getElementById('today-new').textContent = stats.todayNewCount;
    document.getElementById('today-review').textContent = stats.todayReviewCount;
    document.getElementById('mastered-count').textContent = stats.masteredCount;
    document.getElementById('total-progress').textContent = `${stats.learnedCount}/${stats.totalMedicines}`;
    
    // 更新预计完成时间
    if (stats.completionEstimate) {
        updateCompletionEstimate(stats.completionEstimate);
    }
}

function updateCompletionEstimate(estimate) {
    // 更新设置面板中的预计完成时间
    const displayElement = document.getElementById('estimate-message');
    if (displayElement) {
        updateEstimateDisplay(displayElement, estimate);
    }
}

function updateEstimateDisplay(element, estimate) {
    if (!element) return;
    
    if (!estimate || !estimate.message) {
        element.textContent = '暂无数据';
        element.className = 'estimate-text';
        return;
    }
    
    element.textContent = estimate.message;
    element.className = 'estimate-text';
    
    // 根据剩余天数设置不同的样式
    if (estimate.days === 0) {
        element.classList.add('estimate-complete');
    } else if (estimate.days <= 7) {
        element.classList.add('estimate-soon');
    } else if (estimate.days <= 30) {
        element.classList.add('estimate-medium');
    } else {
        element.classList.add('estimate-long');
    }
}

function updateDailyGoalDisplay() {
    const goal = studyManager.getDailyGoal();
    document.getElementById('current-goal').textContent = goal;
    const goalInput = document.getElementById('daily-goal');
    if (goalInput) {
        goalInput.value = goal;
    }
}

function updateDailyGoal() {
    const goal = parseInt(document.getElementById('daily-goal').value);
    if (goal > 0 && goal <= 50) {
        studyManager.setDailyGoal(goal);
        updateStatistics(); // 更新统计信息（包括预计完成时间）
        updateDailyGoalDisplay();
        alert('每日目标已更新为 ' + goal + ' 个中药');
    } else {
        alert('请输入1-50之间的数字');
    }
}

function setDailyGoal(goal) {
    document.getElementById('daily-goal').value = goal;
    updateDailyGoal();
}

function startStudy() {
    try {
        // 检查数据库是否加载
        if (typeof medicineDatabase === 'undefined' || !Array.isArray(medicineDatabase)) {
            alert('中药数据库未加载，请刷新页面重试');
            console.error('medicineDatabase未定义或不是数组');
            return;
        }
        
        if (medicineDatabase.length === 0) {
            alert('中药数据库为空，请检查数据');
            console.error('medicineDatabase为空数组');
            return;
        }
        
        dailyGoal = studyManager.getDailyGoal();
        currentStudyList = studyManager.getTodayNewMedicines();
        isExtraPractice = false;
        
        console.log('获取到的学习列表:', currentStudyList);
        console.log('列表长度:', currentStudyList.length);
        console.log('数据库总数:', medicineDatabase.length);
        
        if (!currentStudyList || currentStudyList.length === 0) {
            alert('今天的新中药已经学完了！或者所有中药都已学习。\n如果这是您第一次使用，请检查浏览器控制台是否有错误信息。');
            return;
        }

        currentStudyIndex = 0;
        
        // 显示学习面板
        const menuPanel = document.getElementById('menu-panel');
        const settingsPanel = document.getElementById('settings-panel');
        const browsePanel = document.getElementById('medicine-browse-panel');
        const statsPanel = document.getElementById('stats-panel');
        const reviewPanel = document.getElementById('review-panel');
        const studyPanel = document.getElementById('study-panel');
        
        if (!studyPanel) {
            alert('找不到学习面板元素，页面结构可能有问题');
            return;
        }
        
        if (menuPanel) menuPanel.style.display = 'none';
        if (settingsPanel) settingsPanel.style.display = 'none';
        if (browsePanel) browsePanel.style.display = 'none';
        if (statsPanel) statsPanel.style.display = 'none';
        if (reviewPanel) reviewPanel.style.display = 'none';
        studyPanel.style.display = 'block';

        showCurrentMedicine();
    } catch (error) {
        console.error('startStudy error:', error);
        console.error('Error stack:', error.stack);
        alert('启动学习时出错: ' + (error.message || error.toString()) + '\n请查看浏览器控制台获取详细错误信息');
    }
}

function showCurrentMedicine() {
    if (currentStudyIndex < 0 || currentStudyIndex >= currentStudyList.length) {
        if (currentStudyIndex >= currentStudyList.length) {
            const message = isExtraPractice 
                ? `今天的任务完成！共学习了 ${currentStudyList.length} 个中药（目标 ${dailyGoal} 个 + 加练 ${currentStudyList.length - dailyGoal} 个）`
                : '今天的任务完成！';
            alert(message);
            backToMenu();
            updateStatistics();
        }
        return;
    }

    const medicine = currentStudyList[currentStudyIndex];
    
    // 检查medicine是否存在
    if (!medicine) {
        console.error('Medicine not found at index:', currentStudyIndex);
        console.error('Current study list:', currentStudyList);
        alert('加载中药数据出错，请刷新页面重试');
        backToMenu();
        return;
    }
    
    // 标记为已学习
    studyManager.markAsLearned(medicine.id);

    // 更新卡片内容（删除别名和用法用量）
    document.getElementById('medicine-name').textContent = medicine.name || '未知';
    document.getElementById('medicine-nature').textContent = medicine.nature || '-';
    document.getElementById('medicine-channel').textContent = medicine.channel || '-';
    document.getElementById('medicine-effect').textContent = medicine.effect || '-';
    document.getElementById('medicine-indication').textContent = medicine.indication || '-';

    // 重置卡片状态
    const card = document.getElementById('medicine-card');
    card.classList.remove('flipped');

    // 更新进度
    const progress = ((currentStudyIndex + 1) / currentStudyList.length) * 100;
    document.getElementById('study-progress').style.width = progress + '%';
    
    // 显示进度信息，如果是加练模式则显示加练信息
    let progressText = `${currentStudyIndex + 1} / ${currentStudyList.length}`;
    if (isExtraPractice && currentStudyIndex >= dailyGoal) {
        progressText += ` (目标: ${dailyGoal} | 加练: ${currentStudyIndex + 1 - dailyGoal})`;
    }
    document.getElementById('study-progress-text').textContent = progressText;

    // 显示/隐藏向前翻页按钮
    const prevBtn = document.getElementById('prev-btn');
    if (prevBtn) {
        prevBtn.style.display = currentStudyIndex > 0 ? 'inline-block' : 'none';
    }

    updateStatistics();
}

function previousMedicine() {
    if (currentStudyIndex > 0) {
        currentStudyIndex--;
        showCurrentMedicine();
    }
}

function markAsMastered() {
    if (currentStudyIndex >= currentStudyList.length) return;
    
    const medicine = currentStudyList[currentStudyIndex];
    studyManager.markAsMastered(medicine.id);
    nextMedicine();
}

function nextMedicine() {
    currentStudyIndex++;
    
    // 检查是否刚完成每日目标（完成第dailyGoal个后，currentStudyIndex会变成dailyGoal）
    if (!isExtraPractice && currentStudyIndex === dailyGoal) {
        // 完成目标，显示加练选择模态框
        showExtraPracticeModal();
        return; // 等待用户选择
    } else {
        showCurrentMedicine();
    }
}

function startReview() {
    currentReviewList = studyManager.getTodayReviewMedicines();
    
    if (currentReviewList.length === 0) {
        alert('今天没有需要复习的中药！');
        return;
    }

    currentReviewIndex = 0;

    // 显示复习面板
    document.getElementById('menu-panel').style.display = 'none';
    document.getElementById('settings-panel').style.display = 'none';
    document.getElementById('medicine-browse-panel').style.display = 'none';
    document.getElementById('stats-panel').style.display = 'none';
    document.getElementById('study-panel').style.display = 'none';
    document.getElementById('review-panel').style.display = 'block';

    showCurrentReview();
}

function showCurrentReview() {
    if (currentReviewIndex >= currentReviewList.length) {
        alert('今天的复习任务完成！');
        backToMenu();
        updateStatistics();
        return;
    }

    const medicine = currentReviewList[currentReviewIndex];

    // 更新卡片内容（删除别名和用法用量）
    document.getElementById('review-name').textContent = medicine.name;
    document.getElementById('review-nature').textContent = medicine.nature || '-';
    document.getElementById('review-channel').textContent = medicine.channel || '-';
    document.getElementById('review-effect').textContent = medicine.effect || '-';
    document.getElementById('review-indication').textContent = medicine.indication || '-';

    // 重置卡片状态
    const card = document.getElementById('review-card');
    card.classList.remove('flipped');

    // 更新进度
    const progress = ((currentReviewIndex + 1) / currentReviewList.length) * 100;
    document.getElementById('review-progress').style.width = progress + '%';
    document.getElementById('review-progress-text').textContent = `${currentReviewIndex + 1} / ${currentReviewList.length}`;
}

function markReviewAsKnown() {
    if (currentReviewIndex >= currentReviewList.length) return;
    
    const medicine = currentReviewList[currentReviewIndex];
    // 只更新艾宾浩斯记忆法进度，不自动标记为已掌握
    // 用户需要明确点击"已掌握"按钮才会标记为已掌握
    studyManager.markReviewAsKnown(medicine.id);
    nextReview();
}

function markAsForgotten() {
    if (currentReviewIndex >= currentReviewList.length) return;
    
    const medicine = currentReviewList[currentReviewIndex];
    studyManager.markAsForgotten(medicine.id);
    nextReview();
}

function markReviewAsMastered() {
    if (currentReviewIndex >= currentReviewList.length) return;
    
    const medicine = currentReviewList[currentReviewIndex];
    // 标记为已掌握，不再复习
    studyManager.markAsMastered(medicine.id);
    nextReview();
}

function nextReview() {
    currentReviewIndex++;
    showCurrentReview();
}

function viewStatistics() {
    const stats = studyManager.getStatistics();

    document.getElementById('stat-total-progress').textContent = stats.progress + '%';
    document.getElementById('stat-mastered').textContent = stats.masteredCount;
    document.getElementById('stat-learning').textContent = stats.learningCount;
    document.getElementById('stat-pending-review').textContent = stats.todayReviewCount;

    document.getElementById('menu-panel').style.display = 'none';
    document.getElementById('settings-panel').style.display = 'none';
    document.getElementById('medicine-browse-panel').style.display = 'none';
    document.getElementById('study-panel').style.display = 'none';
    document.getElementById('review-panel').style.display = 'none';
    document.getElementById('stats-panel').style.display = 'block';
}

function backToMenu() {
    document.getElementById('menu-panel').style.display = 'block';
    document.getElementById('settings-panel').style.display = 'block';
    document.getElementById('study-panel').style.display = 'none';
    document.getElementById('review-panel').style.display = 'none';
    document.getElementById('stats-panel').style.display = 'none';
    document.getElementById('selection-panel').style.display = 'none';
    updateStatistics();
}

function resetData() {
    studyManager.resetData();
}

// 显示中药选择界面
function viewMedicineSelection() {
    // 隐藏其他面板
    document.getElementById('menu-panel').style.display = 'none';
    document.getElementById('settings-panel').style.display = 'none';
    document.getElementById('medicine-browse-panel').style.display = 'none';
    document.getElementById('study-panel').style.display = 'none';
    document.getElementById('review-panel').style.display = 'none';
    document.getElementById('stats-panel').style.display = 'none';
    document.getElementById('selection-panel').style.display = 'block';
    
    renderMedicineSelection();
}

// 渲染中药选择界面
function renderMedicineSelection() {
    const container = document.getElementById('categories-container');
    const filterSelect = document.getElementById('category-filter-select');
    const selectedIds = new Set(studyManager.getSelectedMedicines());
    const categories = getAllCategories();
    
    // 更新总数（只统计分类文档中的中药）
    const categorizedIds = getAllCategorizedMedicineIds();
    document.getElementById('total-count').textContent = categorizedIds.length;
    document.getElementById('selected-count').textContent = selectedIds.size;
    
    // 填充分类筛选下拉框（使用章节格式显示）
    filterSelect.innerHTML = '<option value="">所有分类</option>';
    
    // 按章节分组显示
    const chapterGroups = {};
    categories.forEach(cat => {
        const mapping = categoryChapterMapping[cat];
        if (!mapping) {
            chapterGroups[cat] = { chapter: '', chapterNum: 999, items: [cat] };
            return;
        }
        
        // 提取章节号用于排序
        const chapterNum = extractChapterNumber(mapping.chapter);
        const chapterKey = `${mapping.chapter} ${mapping.chapterName}`;
        if (!chapterGroups[chapterKey]) {
            chapterGroups[chapterKey] = { chapter: mapping.chapter, chapterNum: chapterNum, items: [] };
        }
        chapterGroups[chapterKey].items.push(cat);
    });
    
    // 按章节顺序排序（从第一章到第二十二章）
    const sortedChapters = Object.keys(chapterGroups).sort((a, b) => {
        return chapterGroups[a].chapterNum - chapterGroups[b].chapterNum;
    });
    
    // 显示每个章节及其子分类
    sortedChapters.forEach(chapterKey => {
        const group = chapterGroups[chapterKey];
        
        // 所有章都显示为分组标题（粗体，不可选）
        const chapterOption = document.createElement('option');
        chapterOption.value = `chapter:${group.chapter}`;
        chapterOption.textContent = chapterKey; // 显示"第一章 解表药"
        chapterOption.disabled = true;
        chapterOption.style.fontWeight = 'bold';
        filterSelect.appendChild(chapterOption);
        
        // 显示每个子分类（按节顺序排序）
        group.items.sort((a, b) => {
            const mappingA = categoryChapterMapping[a];
            const mappingB = categoryChapterMapping[b];
            if (!mappingA || !mappingB) return 0;
            
            // 如果都有节，按节号排序（第一节、第二节、第三节...）
            if (mappingA.section && mappingB.section) {
                const sectionNumA = extractChapterNumber(mappingA.section);
                const sectionNumB = extractChapterNumber(mappingB.section);
                return sectionNumA - sectionNumB;
            }
            // 没有节的排在前面
            if (!mappingA.section && mappingB.section) return -1;
            if (mappingA.section && !mappingB.section) return 1;
            return 0;
        }).forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = getCategoryDisplayName(cat);
            filterSelect.appendChild(option);
        });
    });
    
    // 按分类组织中药（只包括在分类文档中的）
    const categorizedIdsSet = new Set(categorizedIds);
    const medicinesByCategory = {};
    medicineDatabase.forEach(med => {
        // 只处理在分类文档中的中药
        if (!categorizedIdsSet.has(med.id)) return;
        const category = getMedicineCategory(med.id);
        if (!category) return; // 如果没有分类，跳过
        if (!medicinesByCategory[category]) {
            medicinesByCategory[category] = [];
        }
        medicinesByCategory[category].push(med);
    });
    
    // 渲染分类列表（按章节分组显示，从第一章到第二十二章）
    container.innerHTML = '';
    
    // 使用之前创建的章节分组数据
    // 按章节顺序遍历（从第一章到第二十二章）
    sortedChapters.forEach(chapterKey => {
        const group = chapterGroups[chapterKey];
        
        // 对每个章节下的分类按节顺序排序
        const sortedItems = group.items.sort((a, b) => {
            const mappingA = categoryChapterMapping[a];
            const mappingB = categoryChapterMapping[b];
            if (!mappingA || !mappingB) return 0;
            
            // 如果都有节，按节号排序（第一节、第二节、第三节...）
            if (mappingA.section && mappingB.section) {
                const sectionNumA = extractChapterNumber(mappingA.section);
                const sectionNumB = extractChapterNumber(mappingB.section);
                return sectionNumA - sectionNumB;
            }
            // 没有节的排在前面
            if (!mappingA.section && mappingB.section) return -1;
            if (mappingA.section && !mappingB.section) return 1;
            return 0;
        });
        
        // 渲染每个分类
        sortedItems.forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category-section';
            categoryDiv.dataset.category = category;
            
            const medicines = medicinesByCategory[category] || [];
            const selectedCount = medicines.filter(m => selectedIds.has(m.id)).length;
            
            const displayName = getCategoryFullDisplayName(category);
            categoryDiv.innerHTML = `
                <div class="category-header">
                    <label class="category-checkbox">
                        <input type="checkbox" class="category-select-all" 
                               data-category="${category}" 
                               ${selectedCount === medicines.length ? 'checked' : ''}
                               onchange="toggleCategory('${category}', this.checked)">
                        <strong>${displayName}</strong>
                        <span class="category-count">(${selectedCount}/${medicines.length})</span>
                    </label>
                </div>
                <div class="medicines-grid">
                    ${medicines.map(med => `
                        <label class="medicine-checkbox-item">
                            <input type="checkbox" 
                                   value="${med.id}" 
                                   data-category="${category}"
                                   ${selectedIds.has(med.id) ? 'checked' : ''}
                                   onchange="updateSelectionCount()">
                            <span>${med.name}</span>
                        </label>
                    `).join('')}
                </div>
            `;
            
            container.appendChild(categoryDiv);
        });
    });
    
    updateSelectionCount();
}

// 切换整个分类的选择状态
function toggleCategory(category, checked) {
    const categorySection = document.querySelector(`.category-section[data-category="${category}"]`);
    if (!categorySection) return;
    
    const checkboxes = categorySection.querySelectorAll('input[type="checkbox"]:not(.category-select-all)');
    checkboxes.forEach(cb => {
        cb.checked = checked;
    });
    
    updateSelectionCount();
}

// 更新选择计数
function updateSelectionCount() {
    const allCheckboxes = document.querySelectorAll('#categories-container input[type="checkbox"]:not(.category-select-all)');
    const selectedCount = Array.from(allCheckboxes).filter(cb => cb.checked).length;
    document.getElementById('selected-count').textContent = selectedCount;
    
    // 更新分类的选中状态
    const categories = getAllCategories();
    categories.forEach(category => {
        const categorySection = document.querySelector(`.category-section[data-category="${category}"]`);
        if (!categorySection) return;
        
        const checkboxes = categorySection.querySelectorAll('input[type="checkbox"]:not(.category-select-all)');
        const categorySelectAll = categorySection.querySelector('.category-select-all');
        const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
        
        if (categorySelectAll) {
            categorySelectAll.checked = checkedCount === checkboxes.length;
            const countSpan = categorySection.querySelector('.category-count');
            if (countSpan) {
                countSpan.textContent = `(${checkedCount}/${checkboxes.length})`;
            }
        }
    });
}

// 全选所有分类
function selectAllCategories() {
    const allCheckboxes = document.querySelectorAll('#categories-container input[type="checkbox"]');
    allCheckboxes.forEach(cb => {
        cb.checked = true;
    });
    updateSelectionCount();
}

// 全不选所有分类
function deselectAllCategories() {
    const allCheckboxes = document.querySelectorAll('#categories-container input[type="checkbox"]');
    allCheckboxes.forEach(cb => {
        cb.checked = false;
    });
    updateSelectionCount();
}

// 确认选择
function confirmSelection() {
    const selectedCheckboxes = document.querySelectorAll('#categories-container input[type="checkbox"]:not(.category-select-all):checked');
    const selectedIds = Array.from(selectedCheckboxes).map(cb => parseInt(cb.value));
    
    // 过滤掉不在分类文档中的药（双重保险）
    const categorizedIds = new Set(getAllCategorizedMedicineIds());
    const filteredIds = selectedIds.filter(id => categorizedIds.has(id));
    
    if (filteredIds.length === 0) {
        if (!confirm('您没有选择任何中药，将无法学习。确定要继续吗？')) {
            return;
        }
    }
    
    studyManager.setSelectedMedicines(filteredIds);
    alert(`已选择 ${filteredIds.length} 个中药，现在可以开始学习了！`);
    backToMenu();
    updateStatistics();
}

// 按分类筛选
function filterByCategory() {
    const filterValue = document.getElementById('category-filter-select').value;
    const categorySections = document.querySelectorAll('.category-section');
    
    categorySections.forEach(section => {
        if (!filterValue) {
            section.style.display = 'block';
        } else if (filterValue.startsWith('chapter:')) {
            // 如果选择了章节，显示该章节下的所有子分类
            const chapterNum = filterValue.replace('chapter:', '');
            const category = section.dataset.category;
            const mapping = categoryChapterMapping[category];
            if (mapping && mapping.chapter === chapterNum) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        } else {
            // 精确匹配分类
            section.style.display = section.dataset.category === filterValue ? 'block' : 'none';
        }
    });
}

// 查看详情功能
function viewTodayNewList() {
    const list = studyManager.getTodayNewList();
    showDetailModal('今日新学', list);
}

function viewTodayReviewList() {
    const list = studyManager.getTodayReviewList();
    showDetailModal('今日复习', list);
}

function viewMasteredList() {
    const list = studyManager.getMasteredList();
    showDetailModal('已掌握', list);
}

function viewTotalProgressList() {
    const list = studyManager.getTotalProgressList();
    showDetailModal('总进度', list);
}

function showDetailModal(title, medicineList) {
    const modal = document.getElementById('detail-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = title + ` (${medicineList.length}个)`;
    
    if (medicineList.length === 0) {
        modalBody.innerHTML = '<p>暂无数据</p>';
    } else {
        let html = '<ul class="medicine-list">';
        medicineList.forEach(medicine => {
            html += `
                <li class="medicine-list-item">
                    <strong>${medicine.name}</strong>
                    <div style="margin-top: 8px;">
                        <div><strong>性味：</strong>${medicine.nature || '-'}</div>
                        <div><strong>归经：</strong>${medicine.channel || '-'}</div>
                        <div><strong>功效：</strong>${medicine.effect || '-'}</div>
                        <div><strong>主治：</strong>${medicine.indication || '-'}</div>
                    </div>
                </li>
            `;
        });
        html += '</ul>';
        modalBody.innerHTML = html;
    }
    
    modal.style.display = 'block';
}

function closeDetailModal() {
    document.getElementById('detail-modal').style.display = 'none';
}

// 显示加练选择模态框
function showExtraPracticeModal() {
    document.getElementById('extra-practice-modal').style.display = 'block';
}

// 关闭加练选择模态框
function closeExtraPracticeModal() {
    document.getElementById('extra-practice-modal').style.display = 'none';
    // 用户选择结束学习
    backToMenu();
    updateStatistics();
}

// 开始加练
function startExtraPractice(extraCount) {
    // 关闭模态框
    closeExtraPracticeModal();
    
    // 获取额外的中药
    const extraMedicines = studyManager.getExtraMedicines(currentStudyList.length, extraCount);
    if (extraMedicines.length > 0) {
        currentStudyList = currentStudyList.concat(extraMedicines);
        isExtraPractice = true;
        // 继续显示下一个
        showCurrentMedicine();
    } else {
        // 没有更多中药可学习
        alert('所有中药都已学习完毕！');
        backToMenu();
        updateStatistics();
    }
}

// 查看学习记录
function viewStudyHistory() {
    const modal = document.getElementById('study-history-modal');
    const content = document.getElementById('study-history-content');
    
    const data = studyManager.getData();
    const history = data.studyHistory || [];
    
    if (history.length === 0) {
        content.innerHTML = '<div class="empty-history">暂无学习记录</div>';
    } else {
        // 按日期倒序排列（最新的在前）
        const sortedHistory = [...history].sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        
        let html = '<div class="study-history-list">';
        
        sortedHistory.forEach(day => {
            const date = new Date(day.date);
            const dateStr = date.toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long'
            });
            
            const medicineIds = day.medicineIds || [];
            const medicines = medicineIds.map(id => {
                const med = medicineDatabase.find(m => m.id === id);
                return med;
            }).filter(m => m !== undefined);
            
            // 计算当天的复习数量
            const reviewCount = studyManager.getDayReviewCount(day.date);
            
            html += `
                <div class="history-day-item">
                    <div class="history-day-header">
                        <div class="history-date">${dateStr}</div>
                        <div class="history-stats">
                            <div class="history-stat-item">
                                <span>新学：</span>
                                <span class="history-stat-value">${medicines.length}</span>
                            </div>
                            <div class="history-stat-item">
                                <span>复习：</span>
                                <span class="history-stat-value">${reviewCount}</span>
                            </div>
                        </div>
                    </div>
                    <div class="history-medicines">
                        ${medicines.map(med => `
                            <span class="history-medicine-tag" onclick="showMedicineDetailFromHistory(${med.id})">
                                ${med.name}
                            </span>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        content.innerHTML = html;
    }
    
    modal.style.display = 'block';
}

// 关闭学习记录模态框
function closeStudyHistoryModal() {
    document.getElementById('study-history-modal').style.display = 'none';
}

// 从学习记录中显示中药详情
function showMedicineDetailFromHistory(medicineId) {
    const medicine = medicineDatabase.find(m => m.id === medicineId);
    if (medicine) {
        showMedicineDetail(medicine);
    }
}

// 夜间模式切换
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // 更新图标
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    }
}

// 初始化主题
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const html = document.documentElement;
    html.setAttribute('data-theme', savedTheme);
    
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }
}

// 第三方登录（Google）- 占位函数
function loginWithGoogle() {
    alert('Google 账号登录功能即将推出！\n\n目前请使用"创建账户"功能。');
    // TODO: 集成 Google OAuth
    // 需要后端支持，可以后续添加
}

// 中药查询功能
let allMedicinesLoaded = false;

// 加载所有中药列表
function loadAllMedicines() {
    if (allMedicinesLoaded) return;
    
    const container = document.getElementById('all-medicines-container');
    if (!container) return;
    
    // 按分类组织中药
    const categories = getAllCategories();
    const categorizedMedicines = {};
    
    categories.forEach(category => {
        const ids = medicineCategories[category] || [];
        categorizedMedicines[category] = ids.map(id => {
            return medicineDatabase.find(m => m.id === id);
        }).filter(m => m !== undefined);
    });
    
    let html = '';
    categories.forEach(category => {
        const medicines = categorizedMedicines[category];
        if (medicines.length === 0) return;
        
        const displayName = getCategoryFullDisplayName(category);
        html += `
            <div class="medicine-category-group" data-category="${category}">
                <div class="category-title">${displayName}</div>
                <div class="medicines-grid-view">
                    ${medicines.map(med => `
                        <div class="medicine-item-card" onclick="showMedicineDetail(${med.id})">
                            <div class="medicine-item-name">${med.name}</div>
                            <div class="medicine-item-info">${med.effect || '-'}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    allMedicinesLoaded = true;
}

// 搜索中药
function searchMedicines() {
    const searchInput = document.getElementById('medicine-search');
    const searchResults = document.getElementById('search-results');
    const searchResultsList = document.getElementById('search-results-list');
    const searchCount = document.getElementById('search-count');
    const allMedicinesSection = document.getElementById('all-medicines-section');
    const searchTabBtn = document.getElementById('search-tab-btn');
    
    if (!searchInput || !searchResults) return;
    
    const query = searchInput.value.trim().toLowerCase();
    
    if (!query) {
        searchResults.style.display = 'none';
        allMedicinesSection.style.display = 'block';
        searchTabBtn.style.display = 'none';
        // 激活"查看所有中药"标签
        const tabs = document.querySelectorAll('.tab-btn');
        tabs.forEach(tab => {
            if (tab.textContent.includes('查看所有中药')) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
        return;
    }
    
    // 搜索所有中药
    const results = medicineDatabase.filter(med => {
        const name = (med.name || '').toLowerCase();
        const nature = (med.nature || '').toLowerCase();
        const channel = (med.channel || '').toLowerCase();
        const effect = (med.effect || '').toLowerCase();
        const indication = (med.indication || '').toLowerCase();
        
        return name.includes(query) || 
               nature.includes(query) || 
               channel.includes(query) || 
               effect.includes(query) || 
               indication.includes(query);
    });
    
    // 显示搜索结果
    searchCount.textContent = results.length;
    
    if (results.length === 0) {
        searchResultsList.innerHTML = '<p style="padding: 20px; text-align: center; color: #999;">未找到匹配的中药</p>';
    } else {
        searchResultsList.innerHTML = results.map(med => `
            <div class="search-result-item" onclick="showMedicineDetail(${med.id})">
                <div class="result-name">${med.name}</div>
                <div class="result-details">
                    <div class="result-effect"><strong>功效：</strong>${med.effect || '-'}</div>
                    ${med.nature ? `<div><strong>性味：</strong>${med.nature}</div>` : ''}
                    ${med.channel ? `<div><strong>归经：</strong>${med.channel}</div>` : ''}
                </div>
            </div>
        `).join('');
    }
    
    searchResults.style.display = 'block';
    allMedicinesSection.style.display = 'none';
    searchTabBtn.style.display = 'inline-block';
    
    // 激活"搜索结果"标签
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        if (tab.textContent.includes('搜索结果')) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

// 显示所有中药
function showAllMedicines() {
    const searchResults = document.getElementById('search-results');
    const allMedicinesSection = document.getElementById('all-medicines-section');
    const searchTabBtn = document.getElementById('search-tab-btn');
    const searchInput = document.getElementById('medicine-search');
    
    if (searchResults) searchResults.style.display = 'none';
    if (allMedicinesSection) allMedicinesSection.style.display = 'block';
    if (searchTabBtn) searchTabBtn.style.display = 'none';
    if (searchInput) searchInput.value = '';
    
    // 激活"查看所有中药"标签
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        if (tab.textContent.includes('查看所有中药')) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    loadAllMedicines();
}

// 显示搜索结果
function showSearchResults() {
    const searchResults = document.getElementById('search-results');
    const allMedicinesSection = document.getElementById('all-medicines-section');
    
    if (searchResults) searchResults.style.display = 'block';
    if (allMedicinesSection) allMedicinesSection.style.display = 'none';
    
    // 激活"搜索结果"标签
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        if (tab.textContent.includes('搜索结果')) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

// 切换中药浏览面板
let browsePanelExpanded = true;
function toggleMedicineBrowse() {
    const panel = document.getElementById('medicine-browse-panel');
    const content = document.getElementById('browse-content');
    const btn = document.getElementById('toggle-browse-btn');
    
    if (!panel || !content || !btn) return;
    
    browsePanelExpanded = !browsePanelExpanded;
    
    if (browsePanelExpanded) {
        content.style.display = 'block';
        btn.textContent = '收起';
        loadAllMedicines();
    } else {
        content.style.display = 'none';
        btn.textContent = '展开';
    }
}

// 显示中药详情
function showMedicineDetail(medicineId) {
    const medicine = typeof medicineId === 'number' 
        ? medicineDatabase.find(m => m.id === medicineId)
        : medicineId;
    
    if (!medicine) return;
    
    // 使用现有的详情显示功能
    const modal = document.getElementById('detail-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = medicine.name;
    
    modalBody.innerHTML = `
        <div class="medicine-detail-view">
            <div class="detail-name">${medicine.name}</div>
            <div class="detail-category">${getCategoryFullDisplayName(getMedicineCategory(medicine.id)) || '未分类'}</div>
            <div class="detail-info-grid">
                <div class="detail-info-item">
                    <strong>性味：</strong>${medicine.nature || '-'}
                </div>
                <div class="detail-info-item">
                    <strong>归经：</strong>${medicine.channel || '-'}
                </div>
                <div class="detail-info-item full-width">
                    <strong>功效：</strong>${medicine.effect || '-'}
                </div>
                <div class="detail-info-item full-width">
                    <strong>主治：</strong>${medicine.indication || '-'}
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const detailModal = document.getElementById('detail-modal');
    const extraModal = document.getElementById('extra-practice-modal');
    const historyModal = document.getElementById('study-history-modal');
    if (event.target === detailModal) {
        closeDetailModal();
    }
    if (event.target === extraModal) {
        closeExtraPracticeModal();
    }
    if (event.target === historyModal) {
        closeStudyHistoryModal();
    }
    const userProfileModal = document.getElementById('user-profile-modal');
    if (event.target === userProfileModal) {
        closeUserProfileModal();
    }
}
