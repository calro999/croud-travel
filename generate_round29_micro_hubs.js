const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
const allHotels = JSON.parse(fs.readFileSync(p, 'utf8'));

const hubs = [
  {
    slug: 'nagano-suwa-lake-onbashira-shrine-stay',
    tag: 'SUWA LAKE & TAISHA GUIDE',
    title: '【長野・諏訪湖＆諏訪大社・上諏訪】諏訪大社四社まいり・片倉館千人風呂＆五蔵酒蔵宿 完全ガイド',
    metaTitle: '【長野・諏訪湖＆諏訪大社】四社まいり・片倉館千人風呂＆地酒宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '日本最古の神社の一つ「信濃國一之宮 諏訪大社（上社・下社四社）」、映画のモデルとも言われる「諏訪湖」の絶景パノラマ、重要文化財「片倉館」の千人風呂、甲州街道沿いの「諏訪五蔵」酒蔵めぐりを徹底解説。湖畔温泉ホテルや老舗旅館を厳選。',
    lead: '諏訪湖を挟んで鎮座する日本屈指の古社「諏訪大社」四社（本宮・前宮・秋宮・春宮）。勇壮な御柱祭の熱気と七年に一度の神話が息づく地。湖畔に湧き出る豊富な湯量を誇る「上諏訪温泉」、大正ロマンあふれる千人風呂「片倉館」。そして街道沿いにわずか500mの間に名酒蔵が並ぶ「諏訪五蔵」。信州の大自然と歴史ロマンに酔いしれる諏訪ステイへご案内します。',
    guides: [
      {
        key: 'suwa_taisha_four_shrines_stay',
        badge: '全国一万有余の諏訪神社の総本社',
        title: '1. 諏訪大社「四社まいり」＆御柱（上社本宮・前宮、下社秋宮・春宮の神域巡礼）',
        timing: '通年（春の桜、夏の神楽、秋の紅葉、冬の御神渡り（おみわたり）神事）',
        desc: '日本最古の神社の一つに数えられる信濃國一之宮「諏訪大社」。諏訪湖の南側に上社（本宮・前宮）、北側に下社（秋宮・春宮）の二社四宮が鎮座します。本殿を持たず背後の山や神木をご神体とする古代信仰の姿を今に残し、四隅にそびえる巨大な「御柱（おんばしら）」の迫力は圧巻。四社すべてを巡拝すると記念品が授与される「四社まいり」が人気です。',
        spots: '諏訪大社上社本宮・前宮、諏訪大社下社秋宮・春宮、万治の石仏、御柱館、北澤美術館',
        access: '上社本宮へはJR茅野駅よりバス約15分。下社秋宮・春宮へはJR下諏訪駅より徒歩約10〜15分。中央道「諏訪IC」より約10分。',
        tip: '下社春宮のすぐ近くにある「万治の石仏」は、時計回りに3回まわりながら願い事を唱えると叶うと言われるユニークなパワースポットです。'
      },
      {
        key: 'suwa_lake_fireworks_geyser_stay',
        badge: '湖畔の絶景と国指定重要文化財の湯',
        title: '2. 諏訪湖畔＆片倉館「千人風呂」・諏訪湖間欠泉センター（大正ロマンの深風呂）',
        timing: '通年（8月15日の諏訪湖祭湖上花火大会、夏の毎夜サマーナイト花火、冬のワカサギ釣り）',
        desc: '周囲約16km、四季折々の表情を見せる諏訪湖。湖畔に建つ「片倉館」は、製糸王・片倉財閥が昭和3年に建設した国指定重要文化財の温泉保養施設。ステンドグラスや彫刻に囲まれた大浴場「千人風呂」は深さ1.1mあり、底に敷き詰められた玉砂利が足裏を心地よく刺激します。湖畔公園の間欠泉や足湯、遊覧船クルーズも楽しめます。',
        spots: '片倉館（重要文化財・千人風呂）、諏訪湖間欠泉センター、諏訪湖足湯、諏訪湖遊覧船（スワン号）、立石公園（君の名は聖地パノラマ）',
        access: 'JR中央本線「上諏訪駅」下車徒歩約5〜8分。中央道「諏訪IC」より約15分。',
        tip: '高台にある「立石公園」からは諏訪湖全体とアルプスの山並みが一望でき、夕暮れのグラデーションは映画のワンシーンそのものです。'
      },
      {
        key: 'suwa_five_sake_breweries_stay',
        badge: '甲州街道沿い500mに並ぶ銘醸蔵',
        title: '3. 諏訪五蔵「酒蔵めぐり」（真澄・本金・横笛・麗人・舞姫）＆信州サーモン・わかさぎ',
        timing: '通年（春〜冬の酒蔵飲み歩き、秋のひやおろし、冬の新酒しぼりたて）',
        desc: '霧ヶ峰高原からの清らかな伏流水と良質な酒米に恵まれた上諏訪の甲州街道沿い。わずか500mの間に「真澄」「本金」「横笛」「麗人」「舞姫」の5軒の名酒蔵が立ち並ぶ奇跡の酒蔵ストリート。「極楽セット」を購入すると特製グラスとお猪口バッグを手に各蔵の自慢の地酒を試飲して歩けます。夕食は諏訪湖名物のわかさぎ天ぷらや信州サーモンに舌鼓。',
        spots: '諏訪五蔵（宮坂醸造・酒ぬのや本金酒造・伊東酒造・麗人酒造・舞姫）、高島城（諏訪の浮城）、くらすわ（養命酒直営レストラン）',
        access: 'JR上諏訪駅より徒歩約5〜10分。徒歩で無理なく5蔵を巡回可能。',
        tip: '各蔵の営業時間は夕方17〜18時頃までのため、お昼過ぎから夕方にかけてゆっくり時間を取って巡るのがおすすめです。'
      }
    ]
  },
  {
    slug: 'kochi-katsurahama-castle-hirome-market-stay',
    tag: 'KOCHI & KATSURAHAMA GUIDE',
    title: '【高知・桂浜＆高知城・ひろめ市場】坂本龍馬銅像・カツオ藁焼き塩たたき＆日曜市宿 完全ガイド',
    metaTitle: '【高知・桂浜＆高知城】坂本龍馬・カツオ藁焼き＆ひろめ市場宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '幕末の英雄・坂本龍馬が愛した名勝「桂浜」、現存十二天守にして日本唯一本丸御殿が残る「高知城」、屋台村でカツオの塩たたきと地酒に酔いしれる「ひろめ市場」、三百年続く「土佐の日曜市」を徹底解説。高知市内温泉ホテルや太平洋ビュー宿を厳選。',
    lead: '黒潮躍る太平洋の荒波に向かって堂々と立つ坂本龍馬銅像の聖地「桂浜」。四層六階の美しい現存天守と本丸御殿が完全な形で残る天下の名城「高知城」。巨大な屋台村「ひろめ市場」で炎を上げて豪快に焼き上げる本場のカツオ藁焼き塩たたき。江戸時代から300年以上続く日本最大級の街路市「日曜市」。豪放磊落な土佐人気質と豊かな山海の美味を満喫する高知ステイへご案内します。',
    guides: [
      {
        key: 'katsurahama_ryoma_pacific_stay',
        badge: '坂本龍馬が愛した月の名所',
        title: '1. 桂浜〜坂本龍馬銅像・竜王岬＆桂浜水族館（弓状の砂浜と太平洋の怒涛）',
        timing: '通年（「月の名所は桂浜」と歌われる名月、春〜秋の青い太平洋、冬の澄んだ水平線）',
        desc: '高知市浦戸半島の先端に位置し、白砂青松の弓状の海岸線が美しい「桂浜」。太平洋を遥か見つめる高さ13m余りの「坂本龍馬像」がそびえ立ち、竜王岬の展望台からはどこまでも広がる大海原の絶景が一望。アットホームでユニークな展示が話題の「桂浜水族館」や、リニューアルした商業施設「桂浜 海のテラス」での買い物も楽しめます。',
        spots: '桂浜公園（坂本龍馬像・竜王岬・海津見神社）、桂浜水族館、高知県立坂本龍馬記念館、桂浜 海のテラス',
        access: 'JR高知駅よりとさでん交通バス「桂浜行き」で約35分。高知龍馬空港より車で約30分。高知ICより約30分。',
        tip: '春と秋には龍馬像の真横に特設展望台が設置され、龍馬と同じ目線で太平洋の大パノラマを眺めることができる貴重な体験ができます。'
      },
      {
        key: 'kochi_castle_sunday_market_stay',
        badge: '本丸御殿が現存する日本唯一の名城',
        title: '2. 高知城＆土佐の日曜市（山内一豊の城郭と三百年続く1kmの街路市）',
        timing: '通年（毎週日曜日開催の日曜市（雨天決行）、春の高知城桜まつり、秋の城下町紅葉）',
        desc: '初代土佐藩主・山内一豊が築城した「高知城」。江戸時代からの天守と本丸御殿の両方が現存する日本で唯一の城。追手門と天守を一枚の写真に収められる絶景ビューポイントが有名です。城へと続く追手筋では、元禄3年（1690年）から続く「土佐の日曜市」が開催。約1kmにわたり約300軒の露店が並び、田舎寿司、芋天、文旦、地酒がずらりと並びます。',
        spots: '高知城（天守・本丸御殿・追手門）、高知城歴史博物館、土佐の日曜市（追手筋）、大橋通り商店街',
        access: 'JR高知駅より路面電車（とさでん）で「高知城前」下車徒歩約3分。日曜市は「蓮池町通」〜「高知城前」間。',
        tip: '日曜市名物の「大平商店のいも天」は、揚げたてサクサクの甘い衣とホクホクのお芋が絶品で、常に行列ができる名物ソウルフードです。'
      },
      {
        key: 'hirome_market_katsuo_warayaki_stay',
        badge: '土佐の食のワンダーランド',
        title: '3. ひろめ市場「カツオの藁焼き塩たたき」＆屋台酒場（炎のパフォーマンスと乾杯文化）',
        timing: '通年（春の初ガツオ、秋の脂が乗った戻りガツオ、昼から飲める大人の社交場）',
        desc: '高知城のすぐ隣に位置する巨大な屋内屋台村「ひろめ市場」。約60店舗の飲食店や鮮魚店が集まり、名物「明神丸」や「やいろ亭」ではガラス越しに激しい炎で一気にカツオを焼き上げる藁焼き実演を間近に見学。焼き立てアツアツのカツオを厚切りにし、粗塩と生ニンニクスライスで食べる「塩たたき」は衝撃的な美味しさ。見知らぬ人とも盃を交わす土佐の「おきゃく」文化を満喫できます。',
        spots: 'ひろめ市場（明神丸・やいろ亭・軍鶏伝・安兵衛の餃子）、はりまや橋、帯屋町アーケード',
        access: '路面電車「大橋通」下車徒歩約2分。高知城前からも徒歩約3分。',
        tip: 'ひろめ市場は昼前から夜遅くまで混雑するため、席を先に確保してから各店で料理やお酒を買い集めるのがスムーズです。'
      }
    ]
  },
  {
    slug: 'gunma-minakami-tanigawadake-onsen-stay',
    tag: 'MINAKAMI & TANIGAWA GUIDE',
    title: '【群馬・水上温泉郷＆谷川岳】一ノ倉沢大岩壁・宝川温泉巨石大露天＆利根川宿 完全ガイド',
    metaTitle: '【群馬・みなかみ＆谷川岳】一ノ倉沢・宝川温泉大露天＆利根川宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '首都圏から近い大自然！魔の山にして世界一のロッククライミング聖地「谷川岳（一ノ倉沢・ロープウェイ）」、世界が認めた巨大露天風呂「宝川温泉」、みなかみ十八湯の源泉かけ流し、利根川源流のアクティビティを徹底解説。渓流露天風呂や高原ロッジを厳選。',
    lead: '標高1977m、日本百名山の一つにして急峻な岩壁が迫る「谷川岳」。ロープウェイで登る天神平からの雲上パノラマと、日本三大岩場「一ノ倉沢」の圧倒的な絶壁美。利根川の最上流部に点在する「みなかみ十八湯」の中でも、巨石を配した野趣あふれる大露天風呂で世界的に有名な「宝川温泉」。激流ラフティングから静寂の雪見露天まで、五感で自然を体感するみなかみステイへご案内します。',
    guides: [
      {
        key: 'tanigawadake_ropeway_ichinokura_stay',
        badge: '標高1500m雲上のマウンテンテラス',
        title: '1. 谷川岳ロープウェイ＆天神平・一ノ倉沢（大岩壁の迫力と高山植物の楽園）',
        timing: '通年（初夏〜夏の高山植物と避暑、10月の紅葉ロープウェイ、冬〜春のパウダースキー）',
        desc: '土合口駅から標高1319mの天神平までを約15分で結ぶ「谷川岳ロープウェイ」。全面ガラス張りのゴンドラからは、秋には山全体が燃えるような紅葉パノラマ、冬には銀世界の谷川連峰を一望。さらに電気バスやハイキングで行く「一ノ倉沢」は、垂直に切り立った標高差1000m近い大岩壁が眼前に迫る大迫力の景勝地です。',
        spots: '谷川岳ロープウェイ・天神平展望台、一ノ倉沢出合（電気ガイドバス）、JR土合駅（日本一のモグラ駅・地下階段462段）、谷川岳山岳資料館',
        access: '上越新幹線「上毛高原駅」より関越交通バスで約50分。関越道「水上IC」より国道291号経由で約25分。',
        tip: 'JR土合駅（モグラ駅）は地下ホームから改札口まで462段の階段を約10分かけて登る名物駅。ひんやりとした地底探検気分を味わえます。'
      },
      {
        key: 'minakami_eighteen_hotsprings_stay',
        badge: '世界に誇る巨石大露天風呂と名湯',
        title: '2. みなかみ十八湯＆宝川温泉「汪泉閣」（利根川源流渓谷の源泉かけ流し）',
        timing: '通年（冬の豪雪雪見露天風呂、新緑の初夏、秋の渓流紅葉風呂）',
        desc: '水上、谷川、宝川、法師、湯檜曽など18の個性豊かな温泉地が集まる「みなかみ十八湯」。中でも宝川渓流沿いに広がる「宝川温泉 汪泉閣」は、延べ470畳にも及ぶ4つの巨石大露天風呂（混浴・女性専用）を有し、映画『テルマエ・ロマエII』の舞台や海外メディアでも絶賛された世界遺産級の温泉ワンダーランドです。',
        spots: '宝川温泉 汪泉閣、水上温泉街（湯原温泉・水上館）、谷川温泉（別邸仙寿庵）、湯檜曽温泉、たくみの里（伝統工芸の里）',
        access: '水上駅より各温泉地へ路線バスまたは宿の送迎バスが運行。宝川温泉へは水上駅よりバス約35分。',
        tip: '宝川温泉の露天風呂は専用の湯浴み着（レンタル・購入）を着用して入浴するスタイルのため、混浴でも女性やカップルが安心して利用できます。'
      },
      {
        key: 'tone_river_rafting_canyon_stay',
        badge: '日本屈指のアウトドアの聖地',
        title: '3. 利根川源流ラフティング・キャニオニング＆上州牛ステーキ（大自然アクティビティ）',
        timing: '春〜秋（4〜6月の雪解け激流ラフティング、夏のキャニオニング・SUP・カヌー）',
        desc: '日本一の流域面積を誇る利根川の源流部・みなかみは、日本のアウトドア・アドベンチャーツーリズム発祥の地。春の雪解けシーズンには世界クラスの激流を下るラフティング、夏は天然のウォータースライダーを滑り降りるキャニオニングや奥利根湖でのレイクカヌーが大人気。運動した後は、群馬の最高級ブランド「上州牛」や上州麦豚、旬の山菜料理を堪能できます。',
        spots: '利根川ラフティング・キャニオニングベース群、奥利根湖（ならまた湖・洞元湖）、月夜野びーどろパーク、道の駅みなかみ水紀行館',
        access: '水上IC周辺、JR水上駅周辺各所。',
        tip: '奥利根湖や洞元湖での早朝カヌー・SUP体験は、風がなく鏡のような湖面に山々が映り込み、息をのむ静寂と感動を味わえます。'
      }
    ]
  },
  {
    slug: 'aomori-hirosaki-castle-cherry-apple-stay',
    tag: 'HIROSAKI & APPLE GUIDE',
    title: '【青森・弘前＆津軽りんご】弘前公園日本一の桜花筏・洋館建築＆津軽三味線宿 完全ガイド',
    metaTitle: '【青森・弘前】弘前城桜・津軽りんご＆三味線宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '死ぬまでに行きたい世界の絶景「弘前公園の花筏（はないかだ）」、現存十二天守「弘前城」、生産量日本一の津軽りんご＆アップルパイ巡り、明治大正のレトロ洋館群、生演奏を聴ける津軽三味線の宿を徹底解説。弘前市内ホテルや名湯温泉旅館を厳選。',
    lead: '春、お堀一面がピンクの花びらの絨毯で埋め尽くされる奇跡の絶景「弘前公園の花筏（はないかだ）」。重要文化財の現存天守を彩る約2600本の桜の古木。弘前アップルパイの香ばしい香り、明治期に外国人教師を迎えて建てられたモダンな洋館群、そして力強く魂を揺さぶる「津軽三味線」の生演奏。津軽富士・岩木山の麓で文化と美食に浸る弘前ステイへご案内します。',
    guides: [
      {
        key: 'hirosaki_castle_cherry_moat_stay',
        badge: '死ぬまでに行きたい世界の絶景',
        title: '1. 弘前公園（鷹揚公園）〜弘前城天守・桜のトンネル＆花筏（日本一の桜の名所）',
        timing: '4月下旬〜5月上旬（弘前さくらまつり）、秋の紅葉まつり、冬の弘前城雪燈籠まつり',
        desc: '約2600本もの桜が咲き誇る日本一の桜の名所「弘前公園」。りんごの剪定技術を応用した手入れにより、一枝に複数の花がボリューム満点に咲くのが特徴。満開を過ぎると外堀の水面が散った花びらで埋め尽くされる「花筏（はないかだ）」は世界中の旅人を魅了。石垣修理のため本丸内へ曳屋（ひきや）された現存天守と名峰岩木山のコラボレーションも必見です。',
        spots: '弘前城天守・本丸、弘前公園外堀（花筏スポット・春陽橋）、桜のトンネル、中濠観光舟、藤田記念庭園',
        access: 'JR奥羽本線「弘前駅」より弘南バスで約15分（市役所前下車徒歩すぐ）。青森空港より連絡バスで約55分。東北道「大鰐弘前IC」より約25分。',
        tip: '夜の弘前城ライトアップは幻想的。風のない夜には、お堀の水鏡に満開の夜桜が完璧に映り込み息をのむ美しさです。'
      },
      {
        key: 'tsugaru_apple_french_cider_stay',
        badge: '生産量日本一・りんごの街',
        title: '2. 津軽りんごスイーツ巡り＆アップルパイガイド・弘前フレンチ（地元シードルとの饗宴）',
        timing: '通年（秋〜冬の獲れたてりんごシーズン、通年のアップルパイ巡り）',
        desc: '日本全国のりんご生産量の約2割を占める日本一のりんごの街・弘前。市内には40軒以上の洋菓子店やカフェが独自のアップルパイを提供しており、「弘前アップルパイガイドマップ」を片手に食べ歩きが大人気。また弘前は人口比でフランス料理店が多い「フレンチの街」としても知られ、津軽の旬野菜や海鮮、地元のクラフトシードルとのマリアージュが楽しめます。',
        spots: '弘前市りんご公園、藤田記念庭園洋館「大正浪漫喫茶室」、ル・ブルジョン、レストラン山崎（奇跡のりんごフレンチ）',
        access: '弘前市街地各所。大正浪漫喫茶室は弘前公園に隣接。',
        tip: '「大正浪漫喫茶室」では市内の名店から集められた複数種類のアップルパイをテラス席で一度に注文・食べ比べできます。'
      },
      {
        key: 'hirosaki_western_architecture_stay',
        badge: 'モダンな洋館群と津軽三味線の魂',
        title: '3. 弘前レトロ洋館群＆迫力の津軽三味線生演奏（明治モダニズムと津軽富士のいで湯）',
        timing: '通年（夏の弘前ねぷたまつり（8月1〜7日）、冬の洋館雪景色ライトアップ）',
        desc: '明治時代、学都として発展した弘前には、名棟梁・堀江佐吉が手掛けた「旧弘前市立図書館」や「旧第五十九銀行本店本館（青森銀行記念館）」など、赤や緑のドーム屋根が美しいハイカラな洋館群が現存。夜は津軽三味線の力強い撥（ばち）さばきが響き渡るライブ居酒屋や温泉宿へ。岩木山麓の嶽温泉（白濁硫黄泉）や大鰐温泉のいで湯も至近です。',
        spots: '旧弘前市立図書館、旧東奥義塾外人教師館、カトリック弘前教会、津軽藩ねぷた村（三味線生演奏）、嶽温泉・岩木山神社',
        access: '洋館群は弘前公園追手門周辺に集中（徒歩圏内）。嶽温泉へは弘前駅よりバス約50分。',
        tip: '津軽藩ねぷた村では、実物大の巨大な扇ねぷたの見学とともに、日本一の腕前を持つ奏者による迫力満点の津軽三味線生演奏を間近で鑑賞できます。'
      }
    ]
  },
  {
    slug: 'nara-yoshino-cherry-mountain-temple-stay',
    tag: 'YOSHINO & SAKURA GUIDE',
    title: '【奈良・吉野山＆金峯山寺】一目千本桜・世界遺産蔵王堂青神仏＆吉野葛・柿の葉寿司宿 完全ガイド',
    metaTitle: '【奈良・吉野山＆金峯山寺】一目千本桜・蔵王堂＆柿の葉寿司宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '山全体が約3万本の桜で埋め尽くされる世界遺産「吉野山（下千本・中千本・上千本・奥千本）」、修験道の根本道場・金峯山寺の秘仏本尊「金剛蔵王権現（青の神仏）」、吉水神社、吉野本葛料理や柿の葉寿司を徹底解説。歴史ある宿坊やパノラマ旅館を厳選。',
    lead: '山肌を桜色のグラデーションで染め上げ「一目千本」と称えられる日本一の桜の聖地「吉野山」。役行者（えんのぎょうじゃ）が桜の木に彫ったとされる修験道の守護仏、金峯山寺蔵王堂の三尊の青い秘仏「金剛蔵王権現」。源義経と静御前の哀話や後醍醐天皇の南朝悲話が息づく歴史の尾根道。伝統の柿の葉寿司と吉野本葛の滑らかな舌触りを堪能する、世界遺産・吉野ステイへご案内します。',
    guides: [
      {
        key: 'yoshino_thousand_cherries_stay',
        badge: '三万本の桜が山を駆け上がる奇跡',
        title: '1. 吉野山「一目千本桜」（下千本・中千本・上千本・奥千本の桜グラデーション）',
        timing: '4月上旬〜4月下旬（標高差により下千本から奥千本へと約1ヶ月かけて開花が進む春、秋の全山紅葉）',
        desc: '約3万本もの白山桜が尾根から谷へと埋め尽くす吉野山。桜がご神木として献木されてきた歴史を持ち、麓から山頂へ向かって「下千本」「中千本」「上千本」「奥千本」と標高差約600mを駆け上がるように咲き進みます。吉水神社から望む「一目千本」の絶景や、花矢倉展望台から見下ろす上千本・中千本のパノラマは息をのむ美しさです。',
        spots: '吉水神社（一目千本テラス）、花矢倉展望台、下千本展望所、七曲り坂、西行庵（奥千本）',
        access: '近鉄吉野線「吉野駅」下車（大阪阿部野橋駅より特急で直通約1時間15分、京都駅より約1時間40分）。吉野山ロープウェイ利用。',
        tip: '吉野山内の宿に宿泊すれば、日帰り観光客の混雑が引いた夕暮れや早朝に、鳥のさえずりと共に静寂の桜景色を心ゆくまで堪能できます。'
      },
      {
        key: 'kinpusenji_zao_gongen_stay',
        badge: '世界遺産・修験道の根本道場',
        title: '2. 金峯山寺蔵王堂＆青い秘仏本尊（東大寺大仏殿に次ぐ日本屈指の大木造建築）',
        timing: '春・秋の特別ご開帳期間（秘仏・金剛蔵王権現三尊特別公開）、通年の境内拝観',
        desc: '白鳳時代に役行者が開いた修験道の総本山「金峯山寺（きんぷせんじ）」。堂々たる威容を誇る本堂「蔵王堂（国宝）」は木造古建築として世界遺産。特別公開される本尊「金剛蔵王権現三尊」は、高さ約7mにも達する青く憤怒の形相をした巨大な秘仏で、悪魔を降伏させ慈悲の心で人々を救う圧倒的な存在感と神気が漂います。',
        spots: '金峯山寺蔵王堂（国宝）、仁王門、吉野水分神社（世界遺産）、吉水神社（義経潜居の間・後醍醐天皇玉座）、脳天大神龍王院',
        access: '吉野山ロープウェイ「吉野山駅」下車徒歩約10分。',
        tip: '蔵王堂の朝の勤行（毎朝開催）への参加は、山伏の吹き鳴らす法螺貝の重低音と太鼓・読経が堂内に響き渡り、魂が震えるような体験ができます。'
      },
      {
        key: 'yoshino_kuzu_kaki_leaf_sushi_stay',
        badge: '吉野の二大伝統郷土グルメ',
        title: '3. 吉野本葛料理（葛きり・葛もち）＆伝統の「柿の葉寿司」（鯖と鮭の押し寿司）',
        timing: '通年（作りたて透明な温葛もち、柿の葉の香りが移った押し寿司）',
        desc: '清らかな水と冬の寒冷な気候で作られる最高級デンプン「吉野本葛」。注文を受けてから練り上げる出来立ての「葛きり」や「葛もち」は、賞味期限わずか10分の透き通る弾力と喉越しが極上。また、塩締めした鯖や鮭を酢飯に乗せ、抗菌作用のある柿の葉で包んで重石で押しを効かせた「柿の葉寿司」は、吉野の旅の定番名物です。',
        spots: '中井春風堂（賞味期限10分の本葛もち実演）、八十吉、やっこ（柿の葉寿司名店）、ひょうたろう',
        access: '吉野山中千本・下千本の門前商店街沿い各所。',
        tip: '「ひょうたろう」の柿の葉寿司は、製造2日目が味が馴染んで最も美味しいとされるこだわり。お土産にも喜ばれます。'
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

console.log('All 5 round 29 micro hubs successfully generated!');
