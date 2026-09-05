const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
const allHotels = JSON.parse(fs.readFileSync(p, 'utf8'));

const hubs = [
  {
    slug: 'hokkaido-otaru-yoichi-canal-distillery-stay',
    tag: 'OTARU & YOICHI GUIDE',
    title: '【北海道・小樽＆余市】小樽運河石造り倉庫街・ニッカウヰスキー蒸溜所＆寿司海鮮丼宿 完全ガイド',
    metaTitle: '【北海道・小樽＆余市】小樽運河・ニッカウヰスキー蒸溜所＆寿司海鮮丼宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: 'ノスタルジックな石造り倉庫とガス灯が輝く小樽運河、日本のウイスキーの聖地・余市蒸溜所、三角市場の豪華海鮮丼やおたる寿司通りを満喫する小樽・余市特化ガイド。運河沿いホテルや温泉リゾートを厳選。',
    lead: 'ガス灯が水面に揺らめくレトロな小樽運河と、冷涼な気候と清流が育むウイスキーの故郷・余市。明治・大正期に北のウォール街として栄えた重厚な石造り建築やガラス工房、そして日本海で揚がるウニ・イクラ・ニシンなど極上海の幸を味わう特別な北海道ステイへご案内します。',
    guides: [
      {
        key: 'otaru_canal_retro_stay',
        title: '1. 小樽運河〜ガス灯・石造り倉庫群＆北一硝子（夕暮れのノスタルジー散策）',
        timing: '通年（冬の小樽雪あかりの路・秋のガス灯イルミネーション・新緑の運河クルーズ）',
        desc: '大正12年に完成した日本屈指の運河景観。夕暮れ時には63基のガス灯が石造り倉庫群を優しく照らし、幻想的な情景が広がります。運河沿いの散策路や運河クルーズ、歴史的建造物を再生した北一硝子の石油ランプ喫茶など、ロマンチックな街歩きが楽しめます。',
        spots: '小樽運河散策路、小樽運河クルーズ、北一硝子三号館、小樽オルゴール堂、旧日本銀行小樽支店（金融資料館）',
        access: 'JR函館本線「小樽駅」より徒歩約10分。新千歳空港より快速エアポートで約75分、札幌駅より約35分。札樽道「小樽IC」より約5分。',
        tip: '夕暮れから日没後30分ほどの「マジックアワー」に訪れると、空の藍色とガス灯の黄金色のコントラストが最も美しく輝きます。'
      },
      {
        key: 'yoichi_nikka_whisky_stay',
        title: '2. 余市ニッカウヰスキー蒸溜所＆ワインの郷（竹鶴政孝が築いた本場スコットランドの美）',
        timing: '通年（秋のぶどう収穫祭・冬の雪景色と赤い三角屋根蒸溜棟）',
        desc: '「日本のウイスキーの父」竹鶴政孝がスコットランドに似た冷涼な気候と清流を求めて拓いたニッカウヰスキー余市蒸溜所。伝統の石炭直火蒸溜を今なお続け、重厚なモルトを生み出しています。近年は日本有数のワイン産地としても世界的評価を受ける美食リゾートエリアです。',
        spots: 'ニッカウヰスキー余市蒸溜所（見学・有料テイスティング）、余市ワイナリー、道の駅スペース・アップル余市、ローソク岩',
        access: 'JR余市駅より徒歩約3分（小樽駅よりJRで約25分、または路線バスで約35分）。後志自動車道「余市IC」より約5分。',
        tip: '蒸溜所の見学ツアーは事前完全予約制（公式HP）となっているため、旅行日程が決まり次第早めの予約が必須です。'
      },
      {
        key: 'otaru_sankaku_market_sushi_stay',
        title: '3. 小樽三角市場＆寿司屋通り（朝獲れウニ・カニ・イクラ＆職人の極上握り）',
        timing: '通年（春〜夏の積丹ウニ、秋のサケ・イクラ、冬のタラバガニ・八角）',
        desc: '小樽駅の真横に位置し、急勾配の階段沿いに鮮魚店がひしめく名物「三角市場」。活ガニや自家製イクラがどっさり乗った海鮮丼を朝から満喫できます。さらに市内屈指の寿司激戦区「おたる寿司屋通り」では、近海ものの新鮮なネタを名職人の技で堪能できます。',
        spots: '三角市場（滝波食堂・味処たけだなど海鮮丼名店）、おたる寿司屋通り、南樽市場、かま栄工場直売店',
        access: '三角市場はJR小樽駅出入口を出て左手の階段を上がって徒歩1分。寿司屋通りは小樽駅から徒歩約10分。',
        tip: '三角市場の食堂は朝7〜8時から営業しており、お昼前後は大変混雑するため、朝食時間帯の早めの訪問がおすすめです。'
      }
    ]
  },
  {
    slug: 'miyagi-matsushima-shiogama-bay-seafood-stay',
    tag: 'MATSUSHIMA & SHIOGAMA GUIDE',
    title: '【宮城・松島＆塩竈】日本三景松島湾の島々・塩竈極上生マグロ＆焼き牡蠣温泉宿 完全ガイド',
    metaTitle: '【宮城・松島＆塩竈】日本三景松島・塩竈生マグロ＆焼き牡蠣温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '芭蕉が愛した日本三景「松島」の島々パノラマと、日本屈指の生マグロ水揚げ港「塩竈」の美食を巡る特化ガイド。国宝瑞巌寺、五大堂、塩竈神社、焼き牡蠣小屋、美肌の松島温泉宿を徹底解説。',
    lead: '松尾芭蕉も言葉を失ったといわれる日本三景・松島湾の260余の島々。伊達政宗が再建した国宝・瑞巌寺の威厳と、塩竈港に揚がる極上の生マグロや冬の松島名物・焼き牡蠣。海風香る絶景温泉露天風呂から茜色に染まる朝日と湾を眺める、至福の宮城ステイへご案内します。',
    guides: [
      {
        key: 'matsushima_bay_view_stay',
        title: '1. 日本三景松島〜五大堂・福浦橋・瑞巌寺（海に浮かぶ小島パノラマと伊達文化）',
        timing: '通年（春の桜、初夏の松島湾クルーズ、秋の瑞巌寺紅葉ライトアップ、冬の朝焼け）',
        desc: '松島湾に浮かぶ260余の島々が織りなす絶景。すかし橋で海を渡る「五大堂」、252mの朱塗りの橋が架かる「福浦島」、伊達政宗の美意識が凝縮された国宝「瑞巌寺」や「円通院」の枯山水庭園。湾内を巡る遊覧船からは仁王島など奇岩を間近に望めます。',
        spots: '五大堂、福浦橋（出会い橋）、国宝瑞巌寺、円通院、松島湾観光遊覧船、西行戻しの松公園',
        access: 'JR仙石線「松島海岸駅」下車徒歩すぐ（仙台駅より約40分）。三陸沿岸道路「松島海岸IC」より約10分。',
        tip: '西行戻しの松公園の高台にあるカフェからは、松島湾全体と桜・新緑・紅葉が一望できる隠れた絶景展望ポイントです。'
      },
      {
        key: 'shiogama_seafood_sushi_stay',
        title: '2. 塩竈港仲卸市場＆塩竈神社（生マグロ日本一の港町と千二百年の古社）',
        timing: '通年（秋〜冬の「三陸塩竈ひがしもの」ブランドメバチマグロ、春の塩竈桜）',
        desc: '近海東沖で獲れる最高級メバチマグロ「三陸塩竈ひがしもの」で全国に名を知られる塩竈。一般人も買い物できる「塩竈市仲卸市場」では、購入した新鮮な刺身をその場でご飯に乗せて作る「マイ海鮮丼」が大人気。塩竈神社の荘厳な202段の石段と歴史も圧巻です。',
        spots: '塩竈市仲卸市場（マイ海鮮丼）、志波彦神社・鹽竈神社、本塩釜すし激戦区、浦霞（佐浦）・一ノ蔵酒蔵処',
        access: 'JR仙石線「本塩釜駅」または「東塩釜駅」下車。松島海岸駅から電車でわずか約10分。仙台駅からも約30分。',
        tip: '塩竈は人口あたりの寿司屋密度が日本一とも言われ、どの店でも格別の鮮度と職人技のマグロ握りを味わえます。'
      },
      {
        key: 'matsushima_oyster_hotspring_stay',
        title: '3. 松島名物「焼き牡蠣小屋」＆美肌の松島温泉（太古の地層から湧くトロトロ湯）',
        timing: '秋〜春（10月〜3月の牡蠣シーズン最盛期、焼き牡蠣食べ放題）',
        desc: '松島湾の豊かなプランクトンで育った松島牡蠣は、小ぶりながら身が引き締まり濃厚な旨味が凝縮。鉄板の上に山盛りの牡蠣を豪快に蒸し焼きにして食べる「かき小屋」は冬の名物詩。さらに太古の地層から湧出する「松島温泉」の琥珀色の美肌湯が旅の疲れを癒します。',
        spots: '松島さかな市場（焼き牡蠣ハウス）、松島かき小屋、松島温泉各宿の展望露天風呂',
        access: '松島海岸駅周辺各所。各温泉旅館へは無料送迎バスも多数運行。',
        tip: '松島温泉はメタケイ酸を豊富に含むアルカリ性単純温泉で、入浴後にお肌がツルツルになると女性客からも絶賛されています。'
      }
    ]
  },
  {
    slug: 'tochigi-shiobara-eleven-hotsprings-valley-stay',
    title: '【栃木・那須塩原】塩原十一湯名湯めぐり・もみじ谷大吊橋＆箒川渓谷露天宿 完全ガイド',
    metaTitle: '【栃木・那須塩原】塩原十一湯・もみじ谷大吊橋＆箒川渓谷露天宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '1200年の歴史を誇る開湯伝説と七色の名湯「塩原十一湯」、箒川渓谷美と「もみじ谷大吊橋」、名物スープ入り焼きそばを巡る那須塩原特化ガイド。渓流沿い露天風呂や源泉かけ流し宿を厳選。',
    lead: '平安時代から続く1200年の歴史を誇る「塩原温泉郷」。箒川（ほうきがわ）の美しい渓谷沿いに広がる11の温泉地（塩原十一湯）は、乳白色・緑色・黒色・透明など泉質も効能も多彩。吊橋から眺める紅葉や新緑のパノラマ、そして名湯が注ぐ渓流露天風呂で心身を解きほぐす大自然ステイへご案内します。',
    guides: [
      {
        key: 'shiobara_valley_bridge_stay',
        title: '1. 塩原渓谷〜もみじ谷大吊橋・回顧の吊橋（箒川の清流と断崖パノラマ）',
        timing: '通年（春の新緑・夏のエメラルド渓谷・秋の紅葉（10月中旬〜11月中旬）・冬の雪渓谷）',
        desc: '塩原ダム湖に架かる長さ320mの無補剛桁歩道吊橋「もみじ谷大吊橋」。空中散歩を楽しみながら、360度の大パノラマと鏡のような湖面に映る四季折々の山並みを堪能できます。遊歩道沿いの「回顧（みかえり）の吊橋」や「竜化の滝」など名瀑巡りも人気です。',
        spots: 'もみじ谷大吊橋、回顧の吊橋・回顧の滝、竜化の滝、七ツ岩吊橋、塩原もの語り館',
        access: '東北新幹線「那須塩原駅」よりJRバス「塩原温泉行き」で約40〜50分。東北道「西那須野塩原IC」より国道400号経由で約15〜25分。',
        tip: 'もみじ谷大吊橋は「恋人の聖地」にも認定されており、橋のたもとには愛を誓うモニュメントが設置されています。'
      },
      {
        key: 'shiobara_eleven_springs_stay',
        title: '2. 塩原十一湯めぐり〜七色の天然温泉（乳白・エメラルド・黒湯の秘湯体験）',
        timing: '通年（冬の雪見露天、秋の紅葉風呂、初夏の新緑湯浴み）',
        desc: '大網・福渡・塩釜・塩の湯・畑下・門前・古町・中塩原・上塩原・新湯・元湯の11エリアからなる塩原十一湯。硫黄泉の乳白色濁り湯（新湯・元湯）、重曹泉の美肌湯、塩化物泉の温まりの湯など、約150箇所の源泉から湧き出る多彩な湯巡りが叶います。',
        spots: '塩原新湯温泉（湯荘白樺・寺の湯）、元湯温泉（ゑびすや）、古町温泉、不動の湯・岩の湯',
        access: '塩原温泉バスターミナル周辺を中心に各温泉地が点在。車や路線バス、宿の送迎が便利。',
        tip: '塩原温泉観光協会で販売している「湯めぐり手形」を購入すると、参画旅館の立ち寄り湯をお得に湯巡りできます。'
      },
      {
        key: 'shiobara_yuta_soup_yakisoba_stay',
        title: '3. 塩原ご当地グルメ「スープ入り焼きそば」＆那須高原和牛（醤油スープとソースの奇跡）',
        timing: '通年（塩原高原大根キャンペーンは秋9月下旬〜11月）',
        desc: '炒めた香ばしいソース焼きそばに、鶏ガラと醤油ベースのラーメンスープを注いだ塩原温泉発祥のソウルフード「スープ入り焼きそば」。不思議とクセになる絶妙なハーモニーは全国のファンを魅了。秋には瑞々しく甘い特産「塩原高原大根」や那須牛ステーキも絶品です。',
        spots: '釜彦、こばや食堂（スープ入り焼きそば二大名店）、道の駅湯の香しおばら（アグリパル塩原）',
        access: '塩原温泉街（古町・中塩原周辺）。',
        tip: '釜彦（スパイシーなスープ）とこばや食堂（マイルドな出汁スープ）で風味が異なるため、食べ比べも人気です。'
      }
    ]
  },
  {
    slug: 'shizuoka-izu-kogen-jogasaki-coast-villa-stay',
    title: '【静岡・伊豆高原＆城ヶ崎】城ヶ崎門脇吊橋・大室山リフト＆露天風呂ヴィラ宿 完全ガイド',
    metaTitle: '【静岡・伊豆高原＆城ヶ崎】城ヶ崎門脇吊橋・大室山＆露天風呂ヴィラ宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '約4000年前の溶岩が創り出した城ヶ崎海岸の断崖絶壁と門脇吊橋、緑のすり鉢状火山・大室山、お洒落な別荘地・伊豆高原の隠れ家リゾートを巡る特化ガイド。客室露天風呂ヴィラや金目鯛美食宿を厳選。',
    lead: '相模湾の紺碧の海と、大室山の噴火が生んだダイナミックな溶岩海岸「城ヶ崎」。高さ23mのスリルあふれる門脇吊橋、リフトで登る大室山山頂のお鉢巡り、高原の別荘地に点在する隠れ家オーベルジュやプライベート露天風呂ヴィラ。洗練された大人の休日を叶える伊豆高原ステイへご案内します。',
    guides: [
      {
        key: 'jogasaki_suspension_bridge_stay',
        title: '1. 城ヶ崎海岸〜門脇吊橋・門脇埼灯台（断崖絶壁と太平洋の怒涛パノラマ）',
        timing: '通年（晴天時の青い海と白波、初夏のアジサイ、冬のツワブキと澄んだ空気）',
        desc: '大室山が約4000年前に噴火した溶岩が海に流れ込み、波の浸食によって形成された城ヶ崎海岸。高さ23m、長さ48mの「門脇吊橋」からは、真下に激しく打ち寄せる波が望めスリル満点。門脇埼灯台の展望台からは伊豆諸島を一望できます。',
        spots: '門脇吊橋、門脇埼灯台、城ヶ崎ピクニカルコース（海岸遊歩道）、ニューヨークランプミュージアム＆フラワーガーデン',
        access: '伊豆急行線「城ヶ崎海岸駅」より徒歩約25分、または「伊豆高原駅」よりバス約10分。東名「厚木IC」より小田原厚木道路経由で約90分。',
        tip: 'ニューヨークランプミュージアムのテラスカフェからは城ヶ崎海岸の絶景を眺めながらティータイムを楽しめます。'
      },
      {
        key: 'omuro_mountain_cherry_stay',
        title: '2. 大室山リフト〜お鉢巡り＆さくらの里（伊豆高原のシンボル・緑のすり鉢火山）',
        timing: '通年（2月の山焼き・春のさくらの里桜まつり・初夏〜秋の緑の山肌）',
        desc: '標高580m、国の天然記念物に指定されているすり鉢状のスコリア丘「大室山」。爽快なペアリフトで山頂に登ると、直径300mの火口を一周する「お鉢巡り（約1km）」ができ、富士山や南アルプス、伊豆諸島の360度大パノラマが広がります。麓の「さくらの里」は約40種の名所です。',
        spots: '大室山山頂遊歩道（お鉢巡り）、大室山登山リフト、さくらの里、伊豆シャボテン動物公園（カピバラ露天風呂）',
        access: '伊豆急行線「伊豆高原駅」よりバスで約15〜20分。',
        tip: '毎年2月第2日曜日に行われる「大室山の山焼き」は、山全体が炎に包まれる早春の伊豆の大迫力風物詩です。'
      },
      {
        key: 'izu_kogen_private_cottage_stay',
        title: '3. 伊豆高原隠れ家ヴィラ＆地金目鯛の極上ディナー（森のプライベート別荘ステイ）',
        timing: '通年（冬〜春の脂の乗った地金目鯛、温泉露天風呂付客室）',
        desc: '広大な別荘地として発展した伊豆高原は、客室わずか数室のラグジュアリーな隠れ家オーベルジュや、離れ・コテージ形式のプライベート温泉ヴィラが充実。伊豆近海で水揚げされた極上の「地金目鯛の煮付け」や伊勢海老、あしたか牛の創作フレンチや会席料理が旅の夜を彩ります。',
        spots: '伊豆高原アートギャラリー群、カフェテラス通り、赤沢日帰り温泉館、大室高原別荘地',
        access: '伊豆急行線「伊豆高原駅」各宿より無料送迎あり（要予約）。',
        tip: '露天風呂付き客室を選べば、小鳥のさえずりや満天の星空を眺めながら誰にも邪魔されない至福の湯浴みを満喫できます。'
      }
    ]
  },
  {
    slug: 'hyogo-kinosaki-onsen-seven-baths-crab-stay',
    title: '【兵庫・城崎温泉＆円山川】七つの外湯めぐり・浴衣柳並木＆津居山港松葉ガニ宿 完全ガイド',
    metaTitle: '【兵庫・城崎温泉＆円山川】七つの外湯めぐり・浴衣柳並木＆松葉ガニ宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '1300年の名湯「城崎温泉」の七つの外湯めぐりと大谿川の柳並木、津居山港・柴山港直送の本松葉ガニ懐石、円山川のコウノトリ湿地を巡る兵庫・但馬特化ガイド。伝統木造旅館や川沿いリゾートを厳選。',
    lead: '開湯1300年、志賀直哉の『城の崎にて』でも名高い名湯「城崎温泉」。大谿川（おおたにがわ）にかかる太鼓橋と柳並木、色浴衣と下駄を鳴らして巡る個性豊かな「七つの外湯」。そして冬の日本海がもたらす最高峰の味覚・津居山港直送の「本松葉ガニ」。情緒と美食が極まる関西屈指の名湯ステイへご案内します。',
    guides: [
      {
        key: 'kinosaki_seven_bath_pass_stay',
        title: '1. 城崎温泉「七つの外湯めぐり」＆大谿川の柳並木（浴衣と下駄で歩く情緒湯街）',
        timing: '通年（冬の雪景色と湯けむり、夏の城崎夢花火、春の桜並木と柳の芽吹き）',
        desc: '「まち全体が一つの大きな温泉宿」という理念を持つ城崎温泉。宿にチェックインしたら色浴衣に着替え、下駄を鳴らして「さとの湯」「一の湯」「御所の湯」「曼陀羅湯」「鴻の湯」「柳湯」「地蔵湯」の七つの外湯へ。それぞれ異なる建築様式とご利益を楽しめます。',
        spots: '御所の湯（滝の露天風呂）、一の湯（洞窟風呂）、さとの湯（駅前展望露天風呂）、鴻の湯（庭園露天風呂）、木屋町小路',
        access: 'JR山陰本線「城崎温泉駅」下車徒歩すぐ。特急こうのとり（新大阪より約2時間40分）、特急きのさき（京都より約2時間20分）。北近畿豊岡道「但馬空港IC」より約25分。',
        tip: '旅館に宿泊すると無料の「外湯めぐりデジタルパス（ゆめぱ）」が発行され、滞在中は七つの外湯に何度でも入り放題になります。'
      },
      {
        key: 'kinosaki_matsuba_crab_feast_stay',
        title: '2. 津居山港直送「本松葉ガニ」フルコース（焼き・刺し・甲羅味噌の極み）',
        timing: '冬季限定（11月6日のカニ漁解禁〜翌年3月下旬）',
        desc: '城崎温泉のすぐ隣、津居山港や柴山港で水揚げされる青いタグ付きのズワイガニのオス「本松葉ガニ」。透明感あふれる甘いカニ刺し、香ばしい炭火焼きガニ、熱々のカニすき鍋、濃厚な甲羅味噌焼きなど、冬の日本海最高峰の贅を尽くしたカニ料理を堪能できます。',
        spots: '城崎温泉おみやげ街道（鮮魚店・カニ直売店）、但馬牛・城崎スイーツ店群',
        access: '城崎温泉街の各料亭旅館・飲食店。',
        tip: '冷凍ではない「活け松葉ガニ」を使用したプランを選ぶと、繊細な身の甘みとジューシーさの格別の違いを体験できます。'
      },
      {
        key: 'maruyama_river_stork_stay',
        title: '3. 円山川下流湿地・コウノトリの郷＆玄武洞（奇跡の自然再生と六角柱状節理）',
        timing: '通年（秋の円山川朝霧、冬の渡り鳥飛来、新緑の玄武洞）',
        desc: '特別天然記念物・コウノトリが悠然と空を舞う円山川流域。ラムサール条約湿地にも登録された豊かな生態系が広がる「コウノトリの郷公園」や、約160万年前の火山活動が生み出した神秘的な六角形石柱群「玄武洞公園」。城崎の奥深い自然と地球の歴史を体感できます。',
        spots: '玄武洞公園（玄武洞ミュージアム）、兵庫県立コウノトリの郷公園、円山川公苑（カヌー・スケート）',
        access: '玄武洞公園へは城崎温泉駅より車・タクシーで約10分（対岸のJR玄武洞駅より渡し船もあり）。コウノトリの郷公園へは車で約20分。',
        tip: 'リニューアルされた玄武洞公園のライトアップやガイドツアーに参加すると、世界で初めて「地磁気の逆転」が発見された歴史を学べます。'
      }
    ]
  }
];

function generateHubPage(hub) {
  const dir = path.join(__dirname, 'src/app', hub.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const guidesJson = JSON.stringify(hub.guides, null, 2);

  const content = `import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "${hub.metaTitle}",
  description: "${hub.description}",
  keywords: ["${hub.slug}", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["${hub.slug}"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for ${hub.slug}", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = ${guidesJson};

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ${hub.tag}
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            ${hub.title}
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            ${hub.lead}
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide: any) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-teal-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-teal-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-teal-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-teal-950/80 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 観光・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめ見どころ・スポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 満足度を高める滞在のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-teal-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-teal-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}周辺のおすすめ厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.length > 0 ? (
                    hotels.map((hotel: any) => (
                      <article
                        key={hotel.hotelNo}
                        className="flex flex-col justify-between border border-teal-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                      >
                        <div>
                          <div className="aspect-video relative overflow-hidden bg-teal-50 border-b border-teal-950/5">
                            {hotel.hotelImageUrl ? (
                              <img
                                src={hotel.hotelImageUrl}
                                alt={hotel.hotelName}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-teal-950/30 text-xs font-bold">
                                {hotel.hotelName}
                              </div>
                            )}
                            {hotel.hotelMinCharge > 0 && (
                              <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">
                                ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                              </span>
                            )}
                          </div>

                          <div className="p-4 space-y-2">
                            {hotel.reviewAverage > 0 && (
                              <div className="flex items-center justify-between text-[9px] font-bold text-amber-600">
                                <span>⭐ {hotel.reviewAverage}点（{hotel.reviewCount}件）</span>
                              </div>
                            )}
                            <h4 className="text-xs md:text-sm font-black font-journal-serif text-teal-950 line-clamp-2">
                              {hotel.hotelName}
                            </h4>
                            {hotel.hotelSpecial && (
                              <p className="text-[11px] text-teal-950/70 line-clamp-2 font-medium">
                                {hotel.hotelSpecial}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="p-4 pt-0">
                          <a
                            href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 rounded-xl shadow transition"
                          >
                            ✈️ 楽天トラベルで宿泊プラン・空室を見る
                          </a>
                        </div>
                      </article>
                    ))
                  ) : (
                    <div className="col-span-3 p-6 bg-stone-50 rounded-2xl text-center text-xs text-stone-500">
                      現在おすすめの宿泊施設情報を更新中です。
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 47都道府県トップへのリンク */}
      <div className="text-center pt-8">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-teal-950 bg-white hover:bg-teal-50 border border-teal-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), content, 'utf8');
  console.log('Created page for:', hub.slug);
}

for (const hub of hubs) {
  generateHubPage(hub);
}

console.log('All 5 micro hubs successfully generated!');
