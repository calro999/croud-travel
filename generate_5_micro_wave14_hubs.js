const fs = require('fs');
const path = require('path');

const microWave14Configs = [
  {
    slug: 'iwate-hanamaki-tono-ihatov-stay',
    badge: 'HANAMAKI & TONO GUIDE',
    title: '【岩手・花巻温泉郷＆遠野】宮沢賢治イーハトーブ・カッパ淵＆大沢・台温泉宿 完全ガイド',
    metaDesc: '宮沢賢治の故郷と民話の里・岩手花巻＆遠野エリア完全特化！花巻温泉郷（大沢温泉・鉛温泉・台温泉）の名湯、宮沢賢治童話村、遠野カッパ淵、伝承園のオシラサマ、前沢牛・白金豚・手打ちわんこそば宿を徹底解説。',
    heroDesc: '宮沢賢治が愛した理想郷「イーハトーブ花巻」と、柳田國男『遠野物語』の世界が息づく民話の里「遠野」。渓流沿いの湯治場風情残る大沢温泉や鉛温泉の日本一深い自噴立ち湯。カッパ淵の静寂と極上の白金豚に癒やされる旅。',
    categoryKey: 'iwate-hanamaki-tono-ihatov-stay',
    areaGuides: [
      {
        key: 'hanamaki_osawa_namari_onsen',
        title: '1. 花巻温泉郷〜大沢温泉・鉛温泉（宮沢賢治ゆかりの湯治宿と自噴立ち湯）',
        timing: '通年（新緑の春・秋の豊沢川紅葉・冬の雪見露天風呂）',
        desc: '花巻南温泉峡に点在する名湯群。豊沢川のせせらぎを聞く「大沢温泉」の混浴露天「大沢の湯」や木造水車小屋。立って入る日本一深い天然温泉（深さ1.25m）として知られる「鉛温泉・藤三旅館」の白猿の湯。',
        spots: '大沢温泉（菊水館・山水閣・自炊部）、鉛温泉（白猿の湯・桂の湯）、台温泉、花巻温泉バラ園',
        access: '東北新幹線「新花巻駅」またはJR東北本線「花巻駅」より無料送迎バス・路線バス運行。',
        tip: '「鉛温泉・白猿の湯」は足元からポコポコと自噴する源泉100%完全かけ流しで、立ったまま湯船に浸かる独特の浮遊感を味わえます。'
      },
      {
        key: 'tono_folklore_nature_stay',
        title: '2. 遠野〜カッパ淵・伝承園（柳田國男『遠野物語』と日本の原風景）',
        timing: '通年（日本の原風景が広がる里山と茅葺き曲り家）',
        desc: 'カッパが住んでいたという伝説が残る「カッパ淵（常堅寺裏）」。千体のオシラサマが祀られる「伝承園」や、馬と人間が一つ屋根の下で暮らした南部曲り家が並ぶ「遠野ふるさと村」。「宮沢賢治童話村」の幻想空間。',
        spots: 'カッパ淵（キュウリの釣り竿・カッパ捕獲許可証）、伝承園（オシラ堂）、遠野ふるさと村、宮沢賢治童話村',
        access: 'JR釜石線「遠野駅」下車。花巻温泉郷より車で約50分。',
        tip: 'カッパ淵では「カッパ捕獲許可証」を道の駅等で購入して記念撮影するのが定番の楽しみ方です。'
      },
      {
        key: 'hanamaki_platina_pork_gourmet',
        title: '3. 花巻名物「白金豚」＆前沢牛（キメ細やかなプラチナポークと極上牛肉）',
        timing: '通年（ジューシーな甘みのある脂身と極上出汁）',
        desc: '奥羽山脈の澄んだ地下水とトウモロコシで育てられる花巻の極上銘柄豚「白金豚（プラチナポーク）」。肉汁あふれるしゃぶしゃぶやステーキ。岩手県が誇る最高峰黒毛和牛「前沢牛」、花巻名物「わんこそば」。',
        spots: 'やぶ屋総本店（宮沢賢治が通ったそば店）、白金豚料理指定店、花巻農産物直売所',
        access: '花巻市街地・花巻温泉郷。',
        tip: '「白金豚のしゃぶしゃぶ」は、アクがほとんど出ず、脂身が驚くほど甘くサラッとしているのが最大の特徴です。'
      }
    ]
  },
  {
    slug: 'miyagi-akiu-sakunami-sendai-stay',
    badge: 'AKIU & SAKUNAMI GUIDE',
    title: '【宮城・秋保温泉＆作並温泉】仙台奥座敷・磊々峡＆ニッカウヰスキー・仙台牛宿 完全ガイド',
    metaDesc: '仙台から車30分の名湯・秋保温泉＆作並温泉エリア完全特化！名勝「磊々峡」のハートの奇岩、落差55m「秋保大滝」、ニッカウヰスキー宮城峡蒸溜所、伊達政宗ゆかりの温泉と極上仙台牛ステーキ会席宿を徹底解説。',
    heroDesc: '杜の都・仙台の奥座敷として歴代藩主や文人に愛された「秋保温泉」と「作並温泉」。名取川が削り出した奇岩の渓谷「磊々峡」と大迫力の秋保大滝。清流の水で仕込まれる宮城峡ウイスキーと、A5仙台牛に舌鼓を打つ大人の休日。',
    categoryKey: 'miyagi-akiu-sakunami-sendai-stay',
    areaGuides: [
      {
        key: 'akiu_rairaikyo_luxury_onsen',
        title: '1. 秋保温泉〜磊々峡・秋保大滝（日本三御湯に数えられる名湯と渓谷美）',
        timing: '通年（仙台駅から車・直行バスでわずか約30分の好アクセス）',
        desc: '古墳時代開湯、伊達政宗公も愛湯した日本三御湯「秋保温泉」。名取川の浸食によってできた奇岩巨岩が続く「磊々峡（らいらいきょう）」の遊歩道散策。国の名勝・日本三大名瀑の一つに数えられる大迫力の「秋保大滝」。',
        spots: '磊々峡（覗橋ハートのくぼみ・遊歩道ライトアップ）、秋保大滝（滝壺展望台）、秋保ワイナリー、秋保ヴィレッジ',
        access: 'JR仙台駅西口より秋保温泉行き路線バス・直行バスで約30〜50分。',
        tip: '磊々峡の「覗橋（のぞきばし）」から下を見下ろすと、岩肌に自然にできたハート型のくぼみがあり、恋人の聖地として大人気です。'
      },
      {
        key: 'sakunami_nikka_whisky_stay',
        title: '2. 作並温泉〜ニッカウヰスキー宮城峡蒸溜所（「美女づくりの湯」と琥珀色のウイスキー）',
        timing: '通年（緑豊かな渓流露天と無料蒸溜所見学）',
        desc: 'やさしい肌触りで「美女づくりの湯」と称される「作並温泉」。広瀬川の渓流沿いに作られた天然岩風呂。日本のウイスキーの父・竹鶴政孝が選んだ新川（にっかがわ）の清流に佇む「ニッカウヰスキー宮城峡蒸溜所」。',
        spots: 'ニッカウヰスキー宮城峡蒸溜所（ガイドツアー・試飲ラウンジ）、広瀬川渓流露天風呂、鳳鳴四十八滝',
        access: 'JR仙山線「作並駅」下車。仙台駅よりJRで約40分。',
        tip: '宮城峡蒸溜所では、赤レンガの美しい蒸溜棟を見学した後に、限定ウイスキーやアップルワインのテイスティングが楽しめます。'
      },
      {
        key: 'sendai_beef_sasakamaboko_stay',
        title: '3. 最高級「A5仙台牛」＆極上牛たん（全国で唯一肉質等級5のみ許される最高峰）',
        timing: '通年（とろけるサシの旨味と香ばしい炭火焼き）',
        desc: '厳しい基準をクリアした肉質等級「5」のみに呼称が許される日本最高峰の黒毛和牛「仙台牛」。芳醇なサーロインステーキや握り寿司。熟成させた厚切り牛たんの炭火焼き、笹かまぼこ、三陸直送の海の幸。',
        spots: '主婦の店さいち（名物おはぎ）、秋保ワイナリー（宮城ワイン）、仙台牛炭火焼き処',
        access: '秋保・作並温泉街。',
        tip: '秋保温泉街のスーパー「主婦の店 さいち」の無添加手作り「秋保おはぎ」は、全国から買い求めるファンが殺到する伝説の名物です。'
      }
    ]
  },
  {
    slug: 'yamagata-tendo-yamadera-cherry-stay',
    badge: 'TENDO & YAMADERA GUIDE',
    title: '【山形・天童温泉＆山寺立石寺】将棋の街・千段の石段絶景＆山形牛・さくらんぼ宿 完全ガイド',
    metaDesc: '将棋駒の生産日本一と松尾芭蕉の名刹・山形天童＆山寺立石寺エリア完全特化！1015段の石段を登る「山寺（宝珠山立石寺）」五大堂絶景、天童温泉の美肌湯、最高級山形牛ステーキ、本場さくらんぼ狩り宿を徹底解説。',
    heroDesc: '松尾芭蕉が「閑さや岩にしみ入る蝉の声」と詠んだ奇岩の名刹「山寺（宝珠山立石寺）」。全国の将棋駒の9割以上を生産する「将棋の街・天童」。舞鶴山の桜と人間将棋、美肌の天童温泉、とろける山形牛を味わう山形王道旅。',
    categoryKey: 'yamagata-tendo-yamadera-cherry-stay',
    areaGuides: [
      {
        key: 'tendo_onsen_yamadera_stay',
        title: '1. 天童温泉〜舞鶴山（将棋駒の伝統が息づく温泉街と人間将棋）',
        timing: '通年（春の人間将棋・桜まつり・初夏のさくらんぼ狩り）',
        desc: '田園風景の中に近代的なホテルや数寄屋造りの名旅館が並ぶ「天童温泉」。ナトリウム・カルシウム-硫酸塩泉の美肌の湯。舞鶴山山頂でプロ棋士が甲冑姿の人間を駒に見立てて対局する春の風物詩「人間将棋」。',
        spots: '舞鶴山山頂広場、天童市将棋資料館、道の駅天童温泉（わくわくランド・足湯）、水車生そば（鳥中華発祥店）',
        access: '山形新幹線「天童駅」下車。山形空港より車で約15分。',
        tip: '天童温泉の老舗そば処「水車生そば」発祥の「鳥中華（純和風そば出汁に中華麺・鶏肉・天かすを入れたB級グルメ）」は必食の美味しさです。'
      },
      {
        key: 'yamadera_risshakuji_view_stay',
        title: '2. 山寺・宝珠山立石寺〜五大堂（奇岩怪石に建つ絶壁の名刹と1015段の石段）',
        timing: '通年（新緑の夏・全山紅葉の秋・墨絵のような雪景色）',
        desc: '貞観2年（860年）慈覚大師が開山した名刹「山寺（宝珠山立石寺）」。根本中堂から奥の院まで続く1015段の杉木立の石段。断崖絶壁にせり出す舞台造りの「五大堂」から見下ろす山寺駅周辺のパノラマ絶景。',
        spots: '山寺根本中堂（不滅の法灯）、せみ塚、仁王門、開山堂・納経堂、五大堂展望台',
        access: 'JR仙山線「山寺駅」下車徒歩約5分。天童温泉より車・電車で約15分。',
        tip: '山寺の石段は「一段登るごとに煩悩が消える」と言われており、登りきった後の五大堂からの風と絶景は格別です。'
      },
      {
        key: 'yamagata_beef_cherry_gourmet',
        title: '3. 極上「山形牛」＆本場さくらんぼ（四季の寒暖差が育む山形の極上美食）',
        timing: '通年（6月中旬〜7月上旬は佐藤錦・紅秀峰の旬）',
        desc: '夏と冬の激しい寒暖差の中でじっくり育てられたブランド黒毛和牛「山形牛」。きめ細やかな肉質ととろけるような脂。山形名物「芋煮（里芋・牛肉・こんにゃく・醤油ベース）」、日本一の生産量を誇る「佐藤錦」やフルーツ王国山形の旬。',
        spots: '天童観光果樹園（さくらんぼ狩り・桃狩り・ぶどう狩り・ラフランス）、山形牛専門店',
        access: '天童・山形市街。',
        tip: '6月中旬〜7月上旬の天童温泉では、朝摘みのもぎたてさくらんぼが旅館の朝食やデザートに並びます。'
      }
    ]
  },
  {
    slug: 'wakayama-nachikatsuura-kumano-kodo-stay',
    badge: 'KACHIKATSUURA & KUMANO KODO GUIDE',
    title: '【和歌山・那智勝浦＆熊野古道】熊野那智大社・那智の滝＆生マグロ・洞窟風呂宿 完全ガイド',
    metaDesc: '世界遺産・熊野古道と日本一の生マグロ・和歌山那智勝浦エリア完全特化！落差日本一「那智の滝」、熊野那智大社・青岸渡寺、大門坂の石畳、勝浦港水揚げ生マグロ食べ尽くし、海に浮かぶ絶景洞窟風呂温泉宿を徹底解説。',
    heroDesc: '神々が宿る世界遺産「熊野古道」の聖地「熊野那智大社」と、落差133m日本一の名瀑「那智の滝」。延々と続く大門坂の苔むす杉木立の石畳。勝浦漁港直送の新鮮な「生マグロ」と、太平洋の荒波が打ち寄せる大洞窟温泉へ。',
    categoryKey: 'wakayama-nachikatsuura-kumano-kodo-stay',
    areaGuides: [
      {
        key: 'katsuura_cave_onsen_luxury',
        title: '1. 南紀勝浦温泉〜忘帰洞・紀の松島（太平洋の荒波が迫る巨大海食洞窟風呂）',
        timing: '通年（専用船で渡る海に浮かぶ温泉リゾートと水平線パノラマ）',
        desc: '勝浦港から専用客船で渡る「ホテル浦島」の名物大洞窟温泉「忘帰洞（帰るのを忘れるほどの絶景湯）」や「碧き島の宿 熊野別邸 中の島」の海中露天風呂。波しぶきが届くほどの臨場感と、紺碧の太平洋・朝日の絶景。',
        spots: '忘帰洞・玄武洞（巨大洞窟露天）、紀の松島めぐり遊覧船、勝浦足湯巡り',
        access: 'JR紀勢本線（きのくに線）「紀伊勝浦駅」下車。勝浦港観光桟橋より専用船数分。',
        tip: '「忘帰洞」は早朝の日の出時間帯に入浴すると、洞窟の向こう側の水平線から真っ赤な太陽が昇る息を呑む光景に出会えます。'
      },
      {
        key: 'kumano_kodo_daimonzaka_stay',
        title: '2. 熊野那智大社〜那智の滝・大門坂（世界遺産・熊野古道のハイライト）',
        timing: '通年（苔むす石畳と平安衣装の記念撮影体験）',
        desc: '樹齢数百年の夫婦杉がそびえる「大門坂」の石畳古道。熊野三山の一つ「熊野那智大社」と西国第一番札所「青岸渡寺（三重塔）」。三重塔越しに望む落差133m・銚子口の幅10mの神聖な御神体「那智の滝（飛瀧神社）」。',
        spots: '大門坂（大門坂茶屋・平安衣装レンタル）、熊野那智大社、那智山青岸渡寺、那智の滝（飛瀧神社）',
        access: '紀伊勝浦駅より熊野御坊南海バス「那智山行き」で約25分。',
        tip: '大門坂茶屋で「平安衣装」をレンタルして大門坂や那智山を歩くと、まるで千年前の巡礼者にタイムスリップしたような写真が撮れます。'
      },
      {
        key: 'katsuura_fresh_tuna_gourmet',
        title: '3. 勝浦名物「生まぐろ」＆幻の高級魚クエ（一度も冷凍されない極上のモッチリ食感）',
        timing: '通年（一度も凍結しない生マグロの水揚げ日本一の港）',
        desc: 'はえ縄漁船が水揚げする「勝浦の生まぐろ」。一度も冷凍されていないため、ドリップが出ず、モチッとした吸い付くような食感と濃厚な旨味。大トロ、中トロ、赤身の食べ比べや、冬の南紀名物「天然クエ鍋」、霜降り「熊野牛」。',
        spots: '勝浦地方卸売市場（マグロ競り見学・にぎわい市場）、勝浦まぐろ専門店',
        access: '勝浦港・温泉街周辺。',
        tip: '勝浦漁港の「にぎわい市場」では、朝獲れ生マグロの解体ショーや、出来立てのマグロ握り寿司・海鮮丼をその場で味わえます。'
      }
    ]
  },
  {
    slug: 'tokushima-naruto-otsuka-museum-stay',
    badge: 'NARUTO & OTSUKA MUSEUM GUIDE',
    title: '【徳島・鳴門＆大塚国際美術館】世界三大潮流・鳴門の渦潮＆陶板名画・鳴門鯛宿 完全ガイド',
    metaDesc: '世界三大潮流の渦潮と世界最大級の陶板美術館・徳島鳴門エリア完全特化！大塚国際美術館のシスティーナ礼拝堂、鳴門海峡の渦潮クルーズ、渦の道、鳴門温泉、ブランド魚「鳴門鯛・鳴門わかめ」＆阿波牛宿を徹底解説。',
    heroDesc: '世界の名画1,000余点を陶板で原寸大再現した「大塚国際美術館」と、世界三大潮流が巻き起こす大迫力の「鳴門の渦潮」。鳴門海峡の激流に揉まれて身が引き締まった極上の「鳴門鯛」。青い海を望む絶景オーシャンリゾートへ。',
    categoryKey: 'tokushima-naruto-otsuka-museum-stay',
    areaGuides: [
      {
        key: 'naruto_otsuka_museum_resort',
        title: '1. 大塚国際美術館（システィーナ礼拝堂・モネの大睡蓮を原寸大再現した世界的ミュージアム）',
        timing: '通年（鑑賞ルート約4km・1日かけてじっくり楽しむ西洋名画の世界）',
        desc: '大塚製薬グループが設立した世界最大級の陶板名画美術館「大塚国際美術館」。バチカンの「システィーナ礼拝堂」天井画の完全立体再現や、自然光の中で鑑賞するモネの「大睡蓮」、レオナルド・ダ・ヴィンチの「最後の晩餐」修復前後比較。',
        spots: 'システィーナ・ホール、スクロヴェーニ礼拝堂、モネの池（大睡蓮）、カフェ・ド・ジヴェルニー',
        access: 'JR鳴門駅より路線バス約15分。徳島阿波おどり空港より車・バスで約30分。',
        tip: '館内は非常に広大（展示点数1,000点以上）なため、歩きやすい靴で訪れ、途中カフェで名物スイーツを挟みながら鑑賞するのがおすすめです。'
      },
      {
        key: 'naruto_whirlpool_uzunomichi_stay',
        title: '2. 鳴門の渦潮〜うずしおクルーズ・渦の道（最大直径20m！世界最大級の潮流）',
        timing: '春・秋の大潮時（特に3月〜5月の大潮は年間で最もダイナミックな渦潮が発生）',
        desc: '瀬戸内海と紀伊水道の潮位差によって発生する「鳴門の渦潮」。大鳴門橋の橋桁内に作られた遊歩道「渦の道」のガラス床から45m直下を見下ろすスリル。「うずしお観潮船（わんだーなると・アクアエディ）」で渦の真横へ接近。',
        spots: '大鳴門橋遊歩道 渦の道、うずしお観潮船、鳴門公園（千畳敷展望台・エスカヒル鳴門）',
        access: '鳴門北ICすぐ。鳴門公園バス停下車。',
        tip: '渦潮は潮の満ち引きによって時間が決まっているため、訪れる前に必ず「潮見表」でその日のベストタイム（大潮・満潮・干潮）を確認しましょう。'
      },
      {
        key: 'naruto_tai_awaodori_gourmet',
        title: '3. 激流の美味「鳴門鯛」＆阿波牛（骨にコブができるほどの激流で育つ引き締まった白身）',
        timing: '春（「桜鯛」と呼ばれる産卵前の春が最も脂が乗る）',
        desc: '鳴門海峡の激しい潮流を泳ぎ抜くことで「骨にコブ」ができるほど身が引き締まった「鳴門鯛」。コリコリした歯ごたえの鯛そうめんや鯛釜飯。特産「鳴門わかめ」のしゃぶしゃぶ、ホクホク甘い「鳴門金時」、ブランド黒毛和牛「阿波牛」。',
        spots: '鳴門鯛料理店、道の駅くるくるなると（鳴門金時スイーツ）、鳴門わかめ直売所',
        access: '鳴門市街・鳴門海峡周辺。',
        tip: '鳴門鯛は「鯛めし」にすると、ふっくらした身と香ばしく焼いた皮の脂がご飯全体に染み渡り最高の郷土の味となります。'
      }
    ]
  }
];

function generatePageTsx(config) {
  return `import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "${config.title} ｜ 日本全国・旅宿クラウド",
  description: "${config.metaDesc}",
  keywords: ["${config.slug}", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["${config.categoryKey}"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for ${config.categoryKey}", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = ${JSON.stringify(config.areaGuides, null, 2)};

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ${config.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            ${config.title}
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            ${config.heroDesc}
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-emerald-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium">
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
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}周辺のおすすめ厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-950/5">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs font-bold">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-emerald-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-emerald-950/70 line-clamp-2 font-medium">
                              {hotel.hotelSpecial}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="p-4 pt-0">
                        <a
                          href={hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで宿泊プラン・空室を見る
                        </a>
                      </div>
                    </article>
                  ))}
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
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
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
}

for (const cfg of microWave14Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated micro tourist hub page: /${cfg.slug}`);
}
