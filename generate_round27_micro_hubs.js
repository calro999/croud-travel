const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
const allHotels = JSON.parse(fs.readFileSync(p, 'utf8'));

const hubs = [
  {
    slug: 'hokkaido-hakodate-motomachi-goryokaku-nightview-stay',
    tag: 'HAKODATE & GORYOKAKU GUIDE',
    title: '【北海道・函館＆五稜郭・湯の川】世界三大夜景・星形城郭桜＆朝市活イカ宿 完全ガイド',
    metaTitle: '【北海道・函館＆五稜郭】世界三大夜景・星形城郭＆朝市海鮮宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '函館山からの100万ドルの世界三大夜景、星形稜堡を誇る特別史跡「五稜郭」、元町の洋館・赤レンガ倉庫群、名湯「湯の川温泉」、函館朝市の活イカ釣りと豪華朝食バイキングホテルを徹底解説。',
    lead: '津軽海峡と函館湾に挟まれた独特の扇状地形が織りなす「函館山からの100万ドルの夜景」。幕末の歴史が息づく星形要塞「五稜郭」の桜と新緑、元町坂道の洋館教会群、そして函館朝市でピチピチ跳ねる活イカやイクラ。名湯・湯の川温泉の海を望む露天風呂と日本屈指の朝食バイキングを満喫する極上の函館ステイへご案内します。',
    guides: [
      {
        key: 'hakodate_nightview_motomachi_stay',
        badge: '100万ドルの世界三大夜景',
        title: '1. 函館山夜景＆元町教会群・金森赤レンガ倉庫（ロマンチックな異国情緒散策）',
        timing: '通年（日没後30分のマジックアワー、冬の函館イルミネーション、秋の澄んだ夜空）',
        desc: '香港・ナポリと並び称される函館山からの夜景。ロープウェイで登れば、両側に海が迫るくびれた地形に街の灯りが宝石のように煌めきます。麓の元町エリアには八幡坂、ハリストス正教会、旧函館区公会堂など異国情緒漂う洋館が立ち並び、ベイエリアの金森赤レンガ倉庫ではお洒落なショッピングやクラフトビールを楽しめます。',
        spots: '函館山ロープウェイ・山頂展望台、八幡坂、旧函館区公会堂、函館ハリストス正教会、金森赤レンガ倉庫',
        access: 'JR函館駅より市電で「十字街」電停下車徒歩約10分（ロープウェイ山麓駅）。函館空港よりシャトルバスで約20分。',
        tip: '八幡坂の頂上から函館港を見下ろすアングルは数々のCMや映画に登場する絶景フォトスポットです。'
      },
      {
        key: 'goryokaku_star_fortress_stay',
        badge: '星形要塞と名湯湯の川温泉',
        title: '2. 特別史跡「五稜郭」＆湯の川温泉（幕末の星形城郭桜と津軽海峡を望むいで湯）',
        timing: '通年（4月下旬〜5月上旬の約1500本のソメイヨシノ、初夏の新緑、秋の紅葉、冬の五稜星の夢ライトアップ）',
        desc: '日本初のフランス式星形稜堡要塞「五稜郭」。隣接する高さ107mの五稜郭タワー展望台からは、綺麗な星形の城郭全景と函館山を一望。春には星形を縁取るように桜が咲き誇る絶景が広がります。観光後は車で約10分の名湯「湯の川温泉」へ。海沿いの展望露天風呂から津軽海峡の漁火を眺める癒しの時間が叶います。',
        spots: '五稜郭公園・箱館奉行所、五稜郭タワー、湯の川温泉街、湯倉神社、函館市熱帯植物園（温泉に入るサル）',
        access: '五稜郭へは市電「五稜郭公園前」徒歩約15分。湯の川温泉へは市電「湯の川温泉」下車、函館空港から車でわずか約5分。',
        tip: '湯の川温泉は函館空港に最も近い温泉地。到着日や帰着日の宿泊に抜群の利便性を誇ります。'
      },
      {
        key: 'hakodate_morning_market_squid_stay',
        badge: '活イカ釣り＆朝食の美味しいホテル',
        title: '3. 函館朝市「活イカ釣堀」＆日本一激戦区の朝食バイキング（イクラかけ放題の贅）',
        timing: '通年（真イカ（スルメイカ）は6月〜12月、ヤリイカは1月〜5月）',
        desc: 'JR函館駅すぐ横に約250店舗がひしめく「函館朝市」。名物の「駅二市場活いか釣堀」では、自分で釣り上げた透明なイカをその場で職人が刺身にさばいてくれ、コリコリとした感動の食感を体験できます。また函館市内のホテルは「朝食の美味しいホテル」日本一を競い合う激戦区で、いくら盛り放題の海鮮丼や北海道産ステーキが名物です。',
        spots: '函館朝市（どんぶり横丁市場・駅二市場活いか釣堀）、センチュリーマリーナ函館、ラビスタ函館ベイ、函館国際ホテル',
        access: 'JR函館駅より徒歩1分。朝市各店は朝6時頃から営業。',
        tip: '活イカは当日の漁模様によって入荷数が決まるため、イカ釣りを体験したい場合は朝一番（7〜8時頃）の訪問が確実です。'
      }
    ]
  },
  {
    slug: 'saitama-chichibu-nagatoro-line-kudari-stay',
    tag: 'CHICHIBU & NAGATORO GUIDE',
    title: '【埼玉・秩父＆長瀞】長瀞ライン下り岩畳・三峯神社雲海＆羊山公園芝桜宿 完全ガイド',
    metaTitle: '【埼玉・秩父＆長瀞】長瀞ライン下り・三峯神社＆芝桜宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '国の名勝・天然記念物「長瀞の岩畳」と荒川ライン下り、関東屈指の天空パワースポット「三峯神社」の雲海、羊山公園のピンクの絨毯「芝桜の丘」、秩父名物わらじカツ丼や豚みそ丼を徹底解説。美肌温泉旅館や清流リゾートを厳選。',
    lead: '都心から特急でわずか約80分、豊かな山々と清流に抱かれた埼玉のリゾート「秩父・長瀞」。荒川の渓谷美を船頭の巧みな竿さばきで下る「長瀞ライン下り」と国の天然記念物「岩畳」。標高1100mの神域に鎮座する関東屈指のパワースポット「三峯神社」の神秘的な雲海。滋味あふれる名物グルメと良質な天然温泉で心洗われる週末トリップへご案内します。',
    guides: [
      {
        key: 'nagatoro_line_rocky_pavement_stay',
        badge: '国の名勝・天然記念物の渓谷美',
        title: '1. 長瀞ライン下り＆岩畳・宝登山（荒川の急流と畳敷きのような一枚岩）',
        timing: '通年（春の桜並木、夏の新緑と納涼ライン下り、秋の岩畳紅葉ライトアップ、冬のぽかぽかコタツ舟）',
        desc: '地質学の発祥の地として知られる長瀞。荒川沿いに幅約50m、長さ約600mにわたって広がる結晶片岩の巨大な岩盤「岩畳（国の名勝・天然記念物）」。伝統の木造和船に乗って豪快な水しぶきを上げながら急流と瀞（とろ）を下る「ライン下り」は爽快そのもの。宝登山ロープウェイで山頂へ登ればロウバイや梅の香りが漂います。',
        spots: '長瀞ライン下り、長瀞岩畳、宝登山ロープウェイ・宝登山神社、阿左美冷蔵（天然氷かき氷）、月の石もみじ公園',
        access: '秩父鉄道「長瀞駅」下車徒歩約5分。関越道「花園IC」より国道140号経由で約30分。',
        tip: '長瀞名物の天然氷かき氷（阿左美冷蔵）は、宝登山の天然水が冬の寒さでじっくり凍った氷を使用しており、頭がキーンとしない極上の口溶けです。'
      },
      {
        key: 'chichibu_shrine_shibazakura_stay',
        badge: 'ピンクの絨毯とユネスコ無形遺産',
        title: '2. 羊山公園「芝桜の丘」＆秩父神社（武甲山を望む花園と名工左甚五郎の彫刻）',
        timing: '春（4月中旬〜5月上旬の芝桜まつり、新緑の初夏、12月2〜3日の秩父夜祭）',
        desc: '秩父のシンボル・武甲山を背景に、約1万7600平方メートルの広大な丘一面に9種類・40万株以上の芝桜が咲き乱れる羊山公園「芝桜の丘」。ピンクや白、淡い青紫のパッチワークのような光景は圧巻。秩父市街中心に鎮座する「秩父神社」では、日光東照宮でも有名な左甚五郎作「子宝子育ての虎」や「つなぎの龍」の見事な彫刻を鑑賞できます。',
        spots: '羊山公園芝桜の丘、秩父神社、秩父まつり会館、番場通り（昭和レトロ建築街）、西武秩父駅前温泉 祭の湯',
        access: '西武秩父線「西武秩父駅」より徒歩約15〜20分。池袋駅より西武特急ラビュー（Laview）で直通最速77分。',
        tip: '西武秩父駅直結の「祭の湯」では、露天風呂や岩盤浴、秩父名物のわらじカツ丼や豚みそ丼のフードコートが揃い、帰路の立ち寄りにも最高です。'
      },
      {
        key: 'mitsumine_shrine_cloud_sea_stay',
        badge: '標高1100m・狼信仰の天空霊峰',
        title: '3. 三峯神社〜雲海と気守り＆奥秩父秘湯温泉（関東最強の天空パワースポット）',
        timing: '通年（春〜秋の早朝雲海、秋の境内紅葉、冬の厳かな雪景色）',
        desc: '奥秩父の標高1100mの山頂に位置し、日本武尊（ヤマトタケル）が創祀したとされる古社「三峯神社」。神の使いである「狼（山犬）」が狛犬として祀られ、強い神気と生命力をもたらす「氣守り」や、拝殿前の石畳に突如現れた「龍神様」の敷石で全国から参拝者が絶えません。遥拝所から眼下に望む秩父盆地の雲海は息をのむ絶景です。',
        spots: '三峯神社（随身門・拝殿・遥拝所・ご神木）、奥宮、大滝温泉、新木鉱泉・柴原温泉（秩父七湯の秘湯）',
        access: '西武秩父駅より三峯神社行き急行バスで約75分。関越道花園ICより国道140号・皆野寄居有料道路経由で約100分。',
        tip: '雨上がりで湿度が高く、晴れて冷え込んだ早朝には、遥拝所から雲海が眼下に広がる確率が非常に高くなります。'
      }
    ]
  },
  {
    slug: 'shiga-biwako-hikone-castle-nagahama-kurokabe-stay',
    tag: 'BIWAKO & HIKONE NAGAHAMA GUIDE',
    title: '【滋賀・琵琶湖＆彦根・長浜・雄琴】国宝彦根城・黒壁スクエア＆びわ湖一望温泉宿 完全ガイド',
    metaTitle: '【滋賀・琵琶湖＆彦根・長浜】国宝彦根城・黒壁＆湖畔温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '現存十二天守・国宝「彦根城」と名園玄宮園、ガラスの街「長浜黒壁スクエア」、琵琶湖一望パノラマと美肌の「おごと温泉」、最高峰の近江牛懐石を徹底解説。湖畔の高級リゾートホテルや伝統温泉旅館を厳選。',
    lead: '日本最大の湖「琵琶湖」をめぐる歴史と自然の極上旅。井伊家三十五万石の居城にして日本屈指の美しさを誇る国宝「彦根城」。秀吉が初めて城持ちとなった城下町・長浜のレトロモダンな「黒壁スクエア」。対岸の比叡山麓に湧く1200年の名湯「おごと温泉」。夕暮れ時にびわ湖を茜色に染めるサンセットと、三大和牛・近江牛の豊かな美味に酔いしれる滋賀ステイへご案内します。',
    guides: [
      {
        key: 'hikone_national_treasure_castle_stay',
        badge: '国宝天守と大名庭園の美意識',
        title: '1. 国宝彦根城＆名勝玄宮園（三層白亜の現存天守と近江牛贅沢ディナー）',
        timing: '通年（春の城内桜まつり、新緑の玄武濠、秋の玄宮園紅葉ライトアップ、冬の雪化粧天守）',
        desc: '慶長9年（1604年）着工、四百年以上の時を経て当時の姿を完全にとどめる国宝五城の一つ「彦根城」。三重三階の美しい天守、太鼓門櫓、天秤櫓など重要文化財の宝庫。城の北東に広がる大名庭園「玄宮園」からは、池越しに天守を仰ぐ見事な借景庭園が広がり、秋のライトアップは幽玄の極みです。夜は近江牛のすき焼きやステーキに舌鼓。',
        spots: '国宝彦根城天守、名勝玄宮園・楽々園、夢京橋キャッスルロード（城下町散策）、ひこにゃん登場スポット',
        access: 'JR琵琶湖線「彦根駅」下車徒歩約15分（京都駅より新快速で約50分）。名神「彦根IC」より車で約10分。',
        tip: '「ひこにゃん」は毎日天守前や博物館に登場します（登場時間は公式HPで要確認）。夢京橋キャッスルロードでの食べ歩きも人気です。'
      },
      {
        key: 'nagahama_kurokabe_square_stay',
        badge: '秀吉出世の城下町とガラスアート',
        title: '2. 長浜黒壁スクエア＆長浜城歴史博物館（黒漆喰の洋館群と琵琶湖畔の夕陽）',
        timing: '通年（春の長浜曳山まつり・豊公園の桜、夏のびわ湖花火、秋の湖北紅葉巡り）',
        desc: '明治時代の旧第百三十銀行長浜支店（黒壁一号館）を中心に、江戸から明治の古建築がガラスショップやギャラリー、工房として再生した人気エリア「黒壁スクエア」。吹きガラス体験やステンドグラスの買い物を満喫できます。湖畔に建つ「長浜城」が佇む豊公園は日本の夕陽百選に選ばれ、雄大な湖面を黄金色に染めるサンセットは感動的です。',
        spots: '黒壁スクエア（黒壁ガラス館・黒壁体験教室）、長浜城歴史博物館・豊公園、海洋堂フィギュアミュージアム、翼果楼（鯖そうめん名店）',
        access: 'JR北陸本線「長浜駅」下車徒歩約5分。北陸道「長浜IC」より約10分。',
        tip: '長浜名物の郷土料理「焼鯖そうめん」は、じっくり甘辛く煮込んだ焼き鯖の煮汁でそうめんを茹で上げた絶品。ぜひ味わいたい名物です。'
      },
      {
        key: 'biwako_lake_view_hotspring_stay',
        badge: '最澄開湯・びわ湖一望の美肌湯',
        title: '3. おごと温泉〜びわ湖一望のパノラマ露天風呂（比叡山麓に湧く美肌のいで湯）',
        timing: '通年（朝焼けのびわ湖露天風呂、初夏の新緑、秋の比叡山延暦寺紅葉巡り）',
        desc: '伝教大師最澄が約1200年前に開湯したと伝えられる歴史ある温泉地「おごと温泉」。pH9.0前後の高いアルカリ性単純温泉は、入浴後にお肌が滑らかになる「美肌の湯」。琵琶湖畔の高台や湖岸に建つ温泉旅館の露天風呂からは、朝日に輝くびわ湖の雄大な水平線を一望しながら贅沢な湯浴みが楽しめます。',
        spots: 'おごと温泉各宿のレイクビュー露天風呂、おごと温泉観光公園（足湯・カフェ）、浮御堂（満月寺）、白鬚神社（琵琶湖の水中鳥居）',
        access: 'JR湖西線「おごと温泉駅」下車（京都駅より普通列車で約20分）。名神「京都東IC」より西大津バイパス経由で約20分。',
        tip: '京都駅からわずか20分という抜群の好アクセス。京都観光を楽しんだ後の宿泊先としても非常に人気があります。'
      }
    ]
  },
  {
    slug: 'kagawa-kotohira-konpira-shrine-sanuki-udon-stay',
    tag: 'KOTOHIRA & KONPIRA GUIDE',
    title: '【香川・琴平＆こんぴら温泉・讃岐うどん】金刀比羅宮785段階段・金丸座＆うどん宿 完全ガイド',
    metaTitle: '【香川・琴平＆こんぴら温泉】金刀比羅宮・讃岐うどん＆名湯宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '「さぬきのこんぴらさん」金刀比羅宮の本宮785段・奥社1368段参拝、日本最古の芝居小屋「旧金毘羅大芝居（金丸座）」、本場讃岐うどん手打ち体験＆名店巡り、名湯「こんぴら温泉郷」を徹底解説。石段街の老舗旅館や庭園露天宿を厳選。',
    lead: '古くから「一生に一度はこんぴら参り」と庶民の憧れを集めた海の神様「金刀比羅宮」。門前町から本宮まで785段、奥社まで1368段の石段を登り切った先に広がる讃岐平野と讃岐富士の絶景パノラマ。江戸時代の天保6年に建てられた日本最古の芝居小屋「金丸座」、本場の打ちたて讃岐うどん、そして石段登りの疲れを癒す「こんぴら温泉」のまろやかな名湯に浸かる香川・琴平ステイへご案内します。',
    guides: [
      {
        key: 'konpira_thousand_stairs_stay',
        badge: '一生に一度のこんぴら参り',
        title: '1. 金刀比羅宮〜785段の本宮・奥社1368段（石段街参道と讃岐平野の絶景）',
        timing: '通年（春の桜並木参道、新緑の初夏、秋の紅葉谷、初詣の賑わい）',
        desc: '象頭山の中腹に鎮座する全国の金刀比羅神社の総本宮。お土産屋が並ぶ石段街から、大門、国の重要文化財の旭社を経て、本宮（785段）へ。本宮の展望デッキからは丸亀城や讃岐富士（飯野山）、遠く瀬戸大橋まで見渡す大パノラマが広がります。さらに体力に自信のある方はパワースポット「奥社（厳魂神社・1368段）」を目指すのがおすすめです。',
        spots: '金刀比羅宮（大門・旭社・本宮・厳魂神社奥社）、表参道石段街、資生堂パーラー神椿（境内カフェ）、金刀比羅宮表書院（円山応挙障壁画）',
        access: 'JR土讃線「琴平駅」または琴電「琴電琴平駅」下車徒歩約15分（石段登り口）。高松空港より琴空バス（リムジン）で約50分。',
        tip: '参道の登り口各店や旅館では「参拝用杖」を無料レンタルしています。登り始める前に杖を借りておくと足腰の負担が大幅に軽減されます。'
      },
      {
        key: 'sanuki_udon_craft_gourmet_stay',
        badge: '本場讃岐うどん名店＆手打ち体験',
        title: '2. 本場讃岐うどん巡り＆中野うどん学校・香川名物「骨付鳥」（コシの極みとジューシーな地鶏）',
        timing: '通年（朝うどんから楽しむ名店巡り、夜の骨付鳥と地酒）',
        desc: 'うどん県・香川の中心地、琴平周辺は讃岐うどんの有名店がひしめく激戦区。いりこ出汁が香る透き通るつゆと、力強いコシの麺。「中野うどん学校」では音楽に合わせて麺を踏んで打つ大人気の手打ち体験が楽しめます。また夜には、スパイスを効かせて皮をパリッと焼き上げた香川のソウルフード「骨付鳥（おやどり・ひなどり）」をビールと共に堪能できます。',
        spots: '中野うどん学校 琴平校、こんぴらうどん（参道名店）、骨付鳥田中屋、しょうゆ豆本舗',
        access: '琴平町内各所。高松市内や三豊エリアのうどん名店へも車や電車で30分圏内。',
        tip: '骨付鳥は噛めば噛むほど濃厚な旨味が広がる「おや」と、柔らかくジューシーな「ひな」があり、好みに合わせて選ぶか食べ比べるのが通です。'
      },
      {
        key: 'kotohira_kabuki_theatre_stay',
        badge: '日本最古の芝居小屋と名湯',
        title: '3. 旧金毘羅大芝居「金丸座」＆こんぴら温泉郷（江戸の芝居町情緒と美肌露天風呂）',
        timing: '通年（毎年4月の四国こんぴら歌舞伎大芝居、通年の内部見学）',
        desc: '天保6年（1835年）に建築された現存する日本最古の芝居小屋「旧金毘羅大芝居（金丸座・国指定重要文化財）」。人力で動かす廻り舞台や奈落、ぶどう棚など江戸時代の劇場構造をそのまま見学できます。参拝と観光の後は、門前町に湧く「こんぴら温泉郷」へ。庭園露天風呂や讃岐平野を一望する展望風呂で至福のリラクゼーションを満喫できます。',
        spots: '旧金毘羅大芝居（金丸座）、ことひら温泉琴参閣、湯元八千代、桜の抄、敷島館（登録有形文化財復元宿）',
        access: '金丸座へは琴平駅より徒歩約20分。温泉街は琴平駅周辺から参道沿いに広がる。',
        tip: '金丸座は歌舞伎公演期間中を除き、内部や舞台裏・奈落を一般公開しており、江戸時代の歌舞伎役者や観客の熱気を肌で体感できます。'
      }
    ]
  },
  {
    slug: 'okinawa-ishigaki-yaeyama-kabira-bay-stay',
    tag: 'ISHIGAKI & YAEYAMA GUIDE',
    title: '【沖縄・石垣島＆八重山諸島・川平湾】ミシュラン三ツ星川平ブルー・離島巡り＆石垣牛宿 完全ガイド',
    metaTitle: '【沖縄・石垣島＆八重山】川平湾・離島ホッピング＆石垣牛宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: 'ミシュラン・グリーンガイド三ツ星の絶景「川平湾」のグラスボート、竹富島・西表島へのアイランドホッピング拠点、日本初の国際星空保護区、最高級A5石垣牛ステーキを徹底解説。プライベートプール付きヴィラやオーシャンフロントリゾートを厳選。',
    lead: '八重山諸島の玄関口にして、世界屈指の透明度を誇るエメラルドブルーの海に囲まれた南国パラダイス「石垣島」。太陽の光で刻一刻と海の色を変える「川平湾（かびらわん）」の奇跡の美しさ。赤瓦集落が残る竹富島や大自然の西表島へのアイランドホッピング。日本初の国際星空保護区に認定された満天の天の川と、石垣牛の芳醇な肉汁を味わう極上のアイランドリゾートステイへご案内します。',
    guides: [
      {
        key: 'kabira_bay_manta_coral_stay',
        badge: 'ミシュラン三ツ星の奇跡の海',
        title: '1. 川平湾〜エメラルドグラスボート＆マンタポイント（黒真珠が育つ世界屈指の景勝地）',
        timing: '通年（晴天の満潮時が最も美しいエメラルドグリーン。冬でも温暖な南国リゾート）',
        desc: 'ミシュラン・グリーンガイド・ジャポンで最高評価の「三ツ星」を獲得した石垣島屈指の絶景「川平湾」。潮流が速いため遊泳は禁止されていますが、グラスボートに乗れば、海底に広がる色鮮やかなサンゴ礁やカクレクマノミなど熱帯魚の楽園を間近に観察できます。近海は世界的な「マンタ（オニイトマキエイ）」の遭遇スポットとしても有名です。',
        spots: '川平湾展望台、川平湾グラスボート、川平公園、石垣島川平タヒチ黒真珠養殖場、底地ビーチ',
        access: '南ぬ島石垣空港より車で約35分。石垣港離島ターミナルより車で約30分（路線バスもあり）。',
        tip: '川平湾の展望台からは、白い砂浜とエメラルドグリーンから群青色へとグラデーションを描く海と小島の絶景パノラマ写真が撮影できます。'
      },
      {
        key: 'yaeyama_island_hopping_stay',
        badge: '八重山離島ホッピングの拠点',
        title: '2. 八重山諸島アイランドホッピング＆石垣港離島ターミナル（竹富島・西表島・波照間島）',
        timing: '通年（フェリーでわずか15分の竹富島、世界自然遺産の西表島カヤック探検）',
        desc: '石垣島市街地に位置する「石垣港離島ターミナル」は、八重山諸島各島を結ぶフェリーのハブ。水牛車が歩き白砂の道と赤瓦屋根が残る「竹富島」へは高速船でわずか約15分。世界自然遺産のマングローブ原生林が広がる「西表島」や日本最南端の「波照間島」へも日帰り観光が可能。ターミナル周辺のホテルを拠点にすれば多彩な離島旅が叶います。',
        spots: '石垣港離島ターミナル、ユーグレナモール（石垣島最大のアーケード商店街）、具志堅用高モニュメント、サザンゲートブリッジ',
        access: '新石垣空港より直行バスで約30〜40分。市街地中心部に位置し飲食街へのアクセスも抜群。',
        tip: '離島ターミナル内の売店「七人本舗」で販売されている名物「マリヤシェイク」は、石垣島マリヤ乳業の新鮮ミルクを使った濃厚絶品スイーツです。'
      },
      {
        key: 'ishigaki_beef_starry_sky_stay',
        badge: '国際星空保護区と最高峰石垣牛',
        title: '3. A5等級「石垣牛」炭火焼肉＆国際星空保護区（天の川と南十字星を望むヴィラ）',
        timing: '通年（南十字星観測は12月下旬〜6月中旬頃、夏の天の川は7月〜10月が最盛期）',
        desc: '八重山の温暖な気候と豊かな海風のミネラルを含んだ牧草で育つブランド黒毛和牛「石垣牛」。きめ細やかな肉質と、しつこさのない上質な脂の甘みは炭火焼肉やサーロインステーキで絶品。また西表石垣国立公園はアジアで2番目に「国際星空保護区」に認定された満天の星空の島。プライベートプール付きヴィラで星空を見上げながらの滞在は至福です。',
        spots: '炭火焼肉やまもと（石垣牛予約必須名店）、フサキビーチ、御神崎（サンセット）、プライベートヴィラリゾート群',
        access: '石垣島市街地・川平・フサキ・北部エリア各所。',
        tip: '「炭火焼肉やまもと」をはじめとする石垣牛の名店は数ヶ月前から予約が埋まるため、航空券や宿の手配と同時に予約するのが鉄則です。'
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

console.log('All 5 round 27 micro hubs successfully generated!');
