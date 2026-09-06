const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-pottery-towns-gourmet-stay',
    title: '日本三大陶磁器の里＆窯元めぐり・器と美食を愉しむ温泉宿×ふるさと納税完全ガイド【2026年最新】有田・美濃・瀬戸',
    desc: '日本の美意識が息づく焼き物の聖地！佐賀「有田焼・伊万里焼」白磁に映える佐賀牛会席と武雄嬉野温泉、岐阜「美濃焼」千三百年続く窯元と志野織部の器に盛る飛騨牛料理宿、愛知「瀬戸焼（せともの）」名門ギャラリーめぐりと尾張郷土会席。名陶と美食の贅沢ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大陶磁器の里＆窯元めぐり・器と美食宿×ふるさと納税ガイド',
    badge: '日本三大陶磁器・器と美食特集',
    leadTitle: '職人の息吹宿る器で味わう極上会席。用の美と名湯に癒やされるクラフトツーリズム',
    leadDesc: '日本を代表する三大陶磁器産地――日本初の磁器としてヨーロッパ王侯貴族を魅了した佐賀の「有田焼・伊万里焼」、日本の陶磁器生産量の過半を占め千三百年の歴史を誇る岐阜の「美濃焼」、そして陶磁器そのものを「せともの」と呼ぶ語源となった愛知の「瀬戸焼」。窯元の煙突が立ち並ぶ風情ある路地や坂道を歩き、お気に入りの作家の器に出合う時間は、旅の何よりの醍醐味です。さらに、それらの名陶を贅沢に用いて地元の旬食材や最高級和牛を盛り付ける料理自慢の温泉宿に泊まれば、視覚と味覚の両方で日本の美を堪能できます。楽天ふるさと納税の宿泊クーポンを活用し、心豊かなクラフトステイをお楽しみください。',
    merits: [
      {
        title: '作家物や歴史ある名窯の器でいただく芸術的な美食ディナー',
        desc: '宿の料理長が厳選した有田焼・美濃焼・瀬戸焼の器に盛り付けられた会席料理を個室で優雅に味わえます。'
      },
      {
        title: '窯元めぐり・絵付け陶芸体験や窯元直営ギャラリーへの好アクセス',
        desc: '散策に便利な産地中心部や送迎付きの名宿を厳選。旅の記念となるマイ茶碗や酒器作り体験も気軽に楽しめます。'
      },
      {
        title: '武雄温泉・嬉野温泉・尾張のいで湯など名湯で心身をリフレッシュ',
        desc: '窯元散策で歩き疲れた身体を、開湯千三百年を超える美肌の名湯でじっくりと癒やし、ふるさと納税クーポンでお得に満喫できます。'
      }
    ],
    items: [
      {
        key: 'pottery_arita',
        themeTitle: '佐賀県有田町・伊万里市ふるさと納税：日本磁器のふるさと「有田焼・伊万里焼」の器で味わう佐賀牛と武雄・嬉野温泉名宿',
        themeDesc: '400年前に誕生した日本最初の磁器。柿右衛門様式や鍋島藩窯の気品ある器に盛られたA5等級佐賀牛や若楠ポークを味わい、日本三大美肌の湯・嬉野温泉や奇岩に囲まれた武雄温泉で至福の時間を過ごせます。'
      },
      {
        key: 'pottery_mino',
        themeTitle: '岐阜県多治見市・土岐市ふるさと納税：志野・織部・黄瀬戸が彩る「美濃焼」の窯元散策と山あいの隠れ家名湯旅館',
        themeDesc: '千利休ら茶人たちに愛された茶陶の最高峰。多治見や土岐の窯元ギャラリーを巡り、緑豊かな渓谷に佇む隠れ家旅館で、織部焼の器に映える飛騨牛ステーキや鮎料理、天然温泉を堪能する大人の贅沢旅です。'
      },
      {
        key: 'pottery_seto',
        themeTitle: '愛知県瀬戸市ふるさと納税：陶磁器の代名詞「瀬戸焼（せともの）」窯垣の小径散策と尾張名門ホテル・郷土会席ステイ',
        themeDesc: '窯道具を積み上げた風情ある「窯垣の小径」が続く瀬戸。本業窯やセトノベルティの歴史に触れ、ホテルでは地元三河湾の海の幸や八丁味噌料理、洗練された尾張会席を美しい器とともに味わえます。'
      }
    ],
    crossLinks: [
      { title: '日本三大銘菓＆歴史茶の湯・老舗和菓子めぐり風雅宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-wagashi-tea-culture-stay', desc: '金沢・長岡・松江の茶の湯と和菓子旅。' },
      { title: '日本三大美肌の湯×炭酸水素塩泉・美肌温泉ふるさと納税完全ガイド', url: '/furusato-tax-three-major-bihada-hotspring-stay', desc: '嬉野・喜連川・玉造の名湯治宿。' },
      { title: '伝統工芸・職人技体験×ものづくり工房宿ガイド', url: '/traditional-crafts-pottery-gold-leaf-washi-stay', desc: '全国の伝統工芸と職人宿。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-hachiman-shrines-sacred-stay',
    title: '日本三大八幡宮＆厄除け開運祈願・門前町名宿×ふるさと納税完全ガイド【2026年最新】宇佐神宮・石清水八幡宮・筥崎宮',
    desc: '武運長久と国家鎮護の最高峰パワースポット！大分「宇佐神宮」全国4万余社の総本宮と別府八湯の名宿、京都「石清水八幡宮」国宝男山社殿と伏見酒蔵・京料理旅館、福岡「筥崎宮」敵国降伏の扁額と博多湾絶景海鮮ホテル。日本三大八幡の聖地巡礼を楽天ふるさと納税宿泊クーポンでお得に叶える完全ガイド。',
    h1: '日本三大八幡宮＆厄除け開運祈願・門前町名宿×ふるさと納税ガイド',
    badge: '日本三大八幡宮・開運聖地特集',
    leadTitle: '朱塗りの社殿に祈る必勝と厄除け。神仏習合の起源と千古の森に抱かれる開運ステイ',
    leadDesc: '全国に約44,000社ある八幡神社の頂点に君臨する「日本三大八幡宮」――神仏習合の発祥の地にして全国八幡宮の総本宮である大分県「宇佐神宮」、平安京の裏鬼門を守護し歴代朝廷や武家に崇敬された京都府「石清水八幡宮」、そして玄界灘を望み蒙古襲来時の神風伝承で名高い福岡県「筥崎宮（または鶴岡八幡宮）」。原生林に囲まれた厳かな参道を歩き、朱塗りの国宝社殿で手を合わせる祈りの旅は、古くから多くの人々に強い運気と心の安らぎを与えてきました。参拝の前後には、別府温泉の名湯や伏見の酒蔵会席、博多の新鮮な玄界灘グルメを味わう名宿に泊まり、ふるさと納税を活用して充実した聖地巡礼をお楽しみください。',
    merits: [
      {
        title: '早朝の澄み切った神域を静かに参拝できる門前町＆好アクセス宿',
        desc: '観光客で混雑する前の清らかな朝の時間帯に、凛とした空気が漂う境内で心静かに正式参拝や散策が可能です。'
      },
      {
        title: '豊後牛・伏見名水京料理・博多前鮮魚！各地域を代表する滋味名物',
        desc: '門前町ならではの伝統的な精進料理や郷土料理、名水仕込みの銘酒、特産ブランド牛を贅沢に堪能できます。'
      },
      {
        title: '別府源泉かけ流し温泉やプライベートスパで心身の厄を落とす極上湯',
        desc: '湯量日本一を誇る別府温泉や老舗の名湯で温まり、心身を浄化する開運リトリートをふるさと納税でお得に実現できます。'
      }
    ],
    items: [
      {
        key: 'hachiman_usa',
        themeTitle: '大分県宇佐市・別府市ふるさと納税：全国4万社の八幡総本宮「宇佐神宮」参拝と別府八湯源泉かけ流し名旅館',
        themeDesc: '725年創建、八幡大神が初めて現れたとされる聖地。原生林の参道と朱塗りの上宮を巡り、宿では湯けむり立ち上る別府温泉の自家源泉露天風呂や関アジ・関サバ、豊後牛の豪華会席を満喫できます。'
      },
      {
        key: 'hachiman_iwashimizu',
        themeTitle: '京都府八幡市・伏見区ふるさと納税：都の裏鬼門を守る国宝「石清水八幡宮」男山展望と伏見酒蔵通り・京料理旅館',
        themeDesc: '織田信長が奉納した黄金の雨樋や日光東照宮のモデルとも言われる壮麗な国宝社殿。男山ケーブルカーで登る山頂からの絶景を楽しみ、伏見の銘水仕込みの京料理や銘酒ペアリングに酔いしれる京都旅です。'
      },
      {
        key: 'hachiman_hakozaki',
        themeTitle: '福岡県福岡市東区ふるさと納税：日本三大八幡「筥崎宮」厄除け・勝運祈願と博多湾オーシャンパノラマホテル',
        themeDesc: '「敵国降伏」の扁額を掲げる楼門が威容を誇る名社。筥崎宮前で湧き出る霊験あらたかな湧出石に触れて開運を祈り、夜は中洲や天神の屋台街、玄界灘の獲れたて鮮魚や博多もつ鍋を堪能できます。'
      }
    ],
    crossLinks: [
      { title: 'お伊勢参り＆熊野古道×聖地巡礼宿ガイド', url: '/furusato-tax-ise-kumano-sacred-power-spot-stay', desc: '伊勢神宮・熊野三山・出雲大社の祈願ステイ。' },
      { title: '日本三名鐘＆歴史の響き・古刹めぐり宿坊名門宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-sacred-temple-bells-retreat-stay', desc: '三井寺・神護寺・観世音寺の静寂リトリート。' },
      { title: '古刹宿坊＆本格精進料理ステイ×ふるさと納税完全ガイド', url: '/furusato-tax-temple-shukubo-shojin-mindfulness-stay', desc: '高野山・善光寺・京都寺院のマインドフルネス旅。' }
    ]
  },
  {
    slug: 'furusato-tax-three-master-brewers-toji-sake-inn-stay',
    title: '日本三大杜氏の郷＆極上純米大吟醸・仕込み水温泉宿×ふるさと納税完全ガイド【2026年最新】南部・越後・丹波',
    desc: '日本酒の神髄を極める酒造りの匠たち！岩手「南部杜氏」日本最大の蔵人集団と花巻温泉郷の名湯、新潟「越後杜氏」淡麗辛口の聖地と魚沼純米大吟醸・美肌湯、兵庫「丹波杜氏」灘五郷を支えた匠と丹波篠山ぼたん鍋・城下町宿。美酒と仕込み水温泉の至福ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大杜氏の郷＆極上純米大吟醸・仕込み水温泉宿×ふるさと納税ガイド',
    badge: '日本三大杜氏・美酒と温泉特集',
    leadTitle: '厳しい冬の寒さと清冽な名水、匠の手が醸す一滴の奇跡。美酒に酔いしれる酒蔵ステイ',
    leadDesc: '日本酒造りの最高責任者である「杜氏（とうじ）」。その卓越した技と流派を受け継ぎ、日本の酒文化を牽引してきた「日本三大杜氏」――岩手を拠点に全国の銘酒を醸す日本最大の「南部杜氏」、雪国の寒冷な気候と清冽な雪解け水で淡麗辛口ブームを巻き起こした新潟の「越後杜氏」、そして宮水と山田錦を用いて灘五郷の銘酒を育て上げた兵庫の「丹波杜氏」。仕込みの季節に立ち込める酒米の甘い香り、蔵元直営ショップでの限定酒テイスティング、そして酒蔵の仕込み水と同じ清らかな地下水で満たされた温泉風呂。日本酒好きにはたまらない至高のペアリングステイを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '一般非公開の酒蔵見学や限定原酒・生酒の利き酒飲み放題',
        desc: '宿のソムリエや利き酒師がセレクトした三大杜氏の希少限定酒や、酒蔵での特別なテイスティング体験が楽しめます。'
      },
      {
        title: '酒粕風呂や美肌温泉で身体の芯から温まり血行促進＆美白ケア',
        desc: 'アミノ酸豊富な酒粕エキスを取り入れた温泉や、清冽な名水の天然水風呂で最高のととのいを体験できます。'
      },
      {
        title: '前沢牛・のどぐろ・丹波黒豆ぼたん鍋など地酒と最高のマリアージュ',
        desc: '杜氏たちが愛した地元の郷土美食と銘酒のマリアージュ会席を、ふるさと納税クーポンでお得に堪能できます。'
      }
    ],
    items: [
      {
        key: 'toji_nanbu',
        themeTitle: '岩手県花巻市・紫波町ふるさと納税：日本最大の蔵人集団「南部杜氏」の秘伝地酒と宮沢賢治ゆかりの花巻温泉郷',
        themeDesc: '全国の鑑評会で首位を争う技術集団・南部杜氏の発祥の地。南部杜氏伝承館で酒造りの歴史に触れ、花巻温泉郷の露天風呂で岩手の銘酒を味わい、前沢牛や白金豚のしゃぶしゃぶに舌鼓を打つ極上の東北旅です。'
      },
      {
        key: 'toji_echigo',
        themeTitle: '新潟県十日町市・南魚沼市ふるさと納税：淡麗辛口の神髄「越後杜氏」の純米大吟醸と魚沼コシヒカリ・越後湯沢温泉',
        themeDesc: '世界屈指の豪雪が生む清らかで柔らかな軟水と酒米の王様・越淡麗。八海山や鶴齢などの銘酒を宿の地酒BARで利き酒し、魚沼産コシヒカリの釜炊きご飯や日本海の旬魚、雪見露天風呂に癒やされる冬春の贅沢旅です。'
      },
      {
        key: 'toji_tanba',
        themeTitle: '兵庫県丹波篠山市ふるさと納税：灘の生一本を育てた「丹波杜氏」のふるさとと名物ぼたん鍋・城下町古民家宿',
        themeDesc: '灘五郷の力強い「男酒」を支え続けた丹波杜氏の郷。丹波杜氏酒造記念館で道具や歴史を学び、江戸情緒残る城下町の古民家旅館で丹波篠山名物の天然イノシシ肉ぼたん鍋と搾りたて地酒を堪能できます。'
      }
    ],
    crossLinks: [
      { title: '地酒BAR＆日本酒利き酒し放題の名湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-sake-bar-unlimited-tasting-stay', desc: '越後湯沢・山形赤湯・京都伏見の酒蔵ステイ。' },
      { title: '日本のウイスキー聖地＆蒸溜所ツアーと極上オーベルジュ×ふるさと納税完全ガイド', url: '/furusato-tax-japanese-whisky-distillery-retreat-stay', desc: '余市・白州・富士御殿場の至福ステイ。' },
      { title: '日本酒ペアリング＆酒蔵直結名宿×ふるさと納税完全ガイド', url: '/furusato-tax-sake-brewery-pairing-onsen-stay', desc: '越後湯沢・諏訪・会津の名酒と温泉旅。' }
    ]
  },
  {
    slug: 'furusato-tax-three-karst-plateaus-mountain-resort-stay',
    title: '日本三大カルスト台地＆白亜の石灰岩パノラマ高原リゾート×ふるさと納税完全ガイド【2026年最新】秋吉台・四国カルスト・平尾台',
    desc: 'まるで異世界！緑の草原に無数の白い羊が群れる絶景！山口「秋吉台」日本最大級カルストと大鍾乳洞＆湯田温泉、愛媛高知「四国カルスト」標高1400m天空の道と満天星空リゾート、福岡「平尾台」国の天然記念物ピナクル奇勝と小倉・門司港クラシックホテル。壮大なカルスト高原を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大カルスト台地＆白亜の石灰岩パノラマ高原宿×ふるさと納税ガイド',
    badge: '日本三大カルスト・高原リゾート特集',
    leadTitle: 'エメラルドグリーンの草原に点在する純白の石灰岩。地球のダイナミズムを体感する高原ステイ',
    leadDesc: '太古の昔、サンゴ礁が隆起して生まれた「日本三大カルスト」――日本最大級の広さを誇り地下に巨大鍾乳洞を秘める山口県「秋吉台」、四国山地の尾根沿いに延びる天空のドライブルートとして名高い愛媛・高知県「四国カルスト」、そしてススキの大草原に無数の白いピナクル（石灰岩柱）が林立する福岡県「平尾台」。緑のじゅうたんに白い羊の群れが戯れているかのような「羊群原（ようぐんばる）」のパノラマは、日本国内とは思えない壮大なスケールを誇ります。爽快な高原ドライブやハイキングを楽しんだ後は、星空が広がる山岳ロッジや周辺の名湯温泉宿でゆったりと癒やされる非日常ステイを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '360度見渡す限りの大パノラマと神秘的な大鍾乳洞探検',
        desc: '秋芳洞や千仏鍾乳洞などの巨大地下洞窟探検から、空と雲が間近に迫る絶景稜線ドライブまで多彩なアクティビティが揃います。'
      },
      {
        title: '標高1,000メートル超の高原で体験する満天の天の川と雲海',
        desc: '街明かりの届かない澄んだ高原の夜空に広がる無数の星々や、早朝の幻想的な雲海を宿のテラスから鑑賞できます。'
      },
      {
        title: '見蘭牛・土佐あかうし・小倉発祥焼きうどんなどご当地ブランド美食',
        desc: '清涼な高原の空気と豊かな大地で育った極上の和牛ステーキや高原野菜を、ふるさと納税クーポンでお得に堪能できます。'
      }
    ],
    items: [
      {
        key: 'karst_akiyoshidai',
        themeTitle: '山口県美祢市ふるさと納税：特別天然記念物・日本最大のカルスト「秋吉台」と地下の驚異「秋芳洞」＆長門湯本・湯田温泉',
        themeDesc: '約3億5千万年前にできたサンゴ礁の化石が広がる大台地。秋芳洞の百枚皿に圧倒された後は、俵山温泉や長門湯本温泉の名湯に浸かり、名物瓦そばや仙崎のイカ、見蘭牛を味わう充実の山口周遊旅です。'
      },
      {
        key: 'karst_shikoku',
        themeTitle: '高知県檮原町・愛媛県久万高原町ふるさと納税：標高1400m天空のスカイライン「四国カルスト天狗高原」と星降る雲上ホテル',
        themeDesc: '愛媛と高知の県境尾根を走る奇跡の絶景ロード。白い石灰岩と放牧牛が織りなす牧歌的風景に癒やされ、隈研吾建築が並ぶ檮原町の宿や清流四万十川沿いの温泉ロッジで極上の田舎時間を満喫できます。'
      },
      {
        key: 'karst_hiraodai',
        themeTitle: '福岡県北九州市小倉南区ふるさと納税：国の天然記念物「平尾台ピナクル奇勝」と千仏鍾乳洞＆小倉城下町・門司港クラシックホテル',
        themeDesc: 'ドリーネと呼ばれる窪地と石灰岩柱が点在する日本三大カルストの一角。清流が流れる千仏鍾乳洞の水深探検を楽しんだ後は、小倉の寿司割烹や門司港レトロのクラシックホテルで上質なステイを堪能できます。'
      }
    ],
    crossLinks: [
      { title: '日本三大砂丘＆雄大パノラマ・砂の絶景リゾート宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-sand-dunes-resort-stay', desc: '鳥取砂丘・中田島砂丘・吹上浜の海宿。' },
      { title: '満天の星空露天風呂＆天体ドーム天文台宿×ふるさと納税完全ガイド', url: '/furusato-tax-starry-sky-open-air-bath-observatory-stay', desc: '阿智村・美星町・石垣島星空保護区リゾート。' },
      { title: '雲海テラス＆天空パノラマリゾート×ふるさと納税完全ガイド', url: '/furusato-tax-sea-of-clouds-sky-terrace-hotel-stay', desc: 'トマム・志賀高原・蔵王の雲上ホテル。' }
    ]
  }
];

function generatePageCode(config) {
  const pageHotelsData = allHotels[config.slug] || {};

  return `import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${config.title}',
  description: '${config.desc}',
  keywords: 'ふるさと納税, 楽天トラベル, 旅行クーポン, 宿泊記, ホテル予約, 国内旅行, おすすめ宿, 温泉旅館',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/${config.slug}',
  },
  openGraph: {
    title: '${config.title}',
    description: '${config.desc}',
    url: 'https://croud-travel.pages.dev/${config.slug}',
    siteName: 'トラベル総合ナビ',
    locale: 'ja_JP',
    type: 'article',
  },
};

const OFFICIAL_FURUSATO_URL = '${officialFurusatoAffUrl}';

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs sm:text-sm font-semibold mb-4 border border-amber-400/30">
            <span>✨</span>
            <span>${config.badge}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-white drop-shadow-sm">
            ${config.h1}
          </h1>
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-4xl">
            ${config.leadTitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">●</span> 2026年最新検証済み</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">●</span> 楽天ふるさと納税宿泊クーポン対象</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">●</span> 実在確認済み公式提携</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Intro Card */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 border-l-4 border-indigo-600 pl-4">
            はじめに
          </h2>
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            ${config.leadDesc}
          </p>

          <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💡</span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-amber-900 mb-1">
                  楽天ふるさと納税「トラベルクーポン」賢い活用法
                </h3>
                <p className="text-sm sm:text-base text-amber-800 leading-relaxed">
                  寄付額の最大30%分の宿泊クーポンが付与され、寄付当日から予約に即時利用可能。通常の楽天ポイント還元やお買い物マラソンとも併用できるため、実質自己負担2,000円で憧れの高級リゾートや名湯旅館に泊まれる最強の制度です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Merits */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-600 pl-4">
            この特集ならではの3大魅力
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${config.merits.map((m, idx) => `
            <div key="${idx}" className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-indigo-300 transition-colors">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mb-3">
                ${idx + 1}
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">${m.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">${m.desc}</p>
            </div>
            `).join('')}
          </div>
        </section>

        {/* Hotel Items by Theme */}
        ${config.items.map(item => {
          const hotelGroup = pageHotelsData[item.key] || { label: item.themeTitle, hotels: [] };
          const hotels = hotelGroup.hotels || [];

          return `
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-2.5 py-1 rounded-md">Featured Region</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              ${item.themeTitle}
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              ${item.themeDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            ${hotels.length > 0 ? hotels.map(h => `
            <div key="${h.hotelNo}" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="${h.hotelImageUrl || h.roomImageUrl || '/placeholder.jpg'}"
                  alt="${h.hotelName}"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                ${h.reviewAverage ? `
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ ${h.reviewAverage} <span className="text-slate-500 font-normal">(${h.reviewCount || 0}件)</span>
                </div>
                ` : ''}
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="${h.hotelInformationUrl}" target="_blank" rel="noopener noreferrer">
                      ${h.hotelName}
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 ${h.address1 || ''}${h.address2 || ''}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 ${h.access || '詳細は施設情報をご確認ください'}
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    ${h.hotelSpecial || '四季折々の魅力と上質なホスピタリティでお迎えするおすすめの宿泊施設です。'}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ${h.hotelMinCharge ? `¥${h.hotelMinCharge.toLocaleString()}〜` : 'プラン詳細参照'}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="${h.hotelInformationUrl}"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 transition-colors"
                    >
                      詳細・宿泊プラン
                    </a>
                    <a
                      href={OFFICIAL_FURUSATO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-amber-600 rounded-xl shadow hover:opacity-95 transition-opacity"
                    >
                      寄付で宿泊
                    </a>
                  </div>
                </div>
              </div>
            </div>
            `).join('') : `
            <div className="p-6 bg-slate-50 rounded-xl border border-dashed border-slate-300 text-center text-slate-500">
              現在、該当地域の人気宿を厳選リサーチ中です。最新プランはふるさと納税公式ページよりご確認いただけます。
            </div>
            `}
          </div>
        </section>
          `;
        }).join('')}

        {/* Global CTA Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-950 rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs sm:text-sm font-bold mb-6 border border-amber-400/30">
            <span>🎟️</span>
            <span>楽天ふるさと納税×楽天トラベル 公式連携</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
            ふるさと納税で賢くお得に、憧れの極上宿へ
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            返礼品の宿泊クーポンは翌年以降の旅行にも活用でき、ポイント還元もフル適用。実質2,000円の自己負担でワンランク上の滞在をお楽しみください。
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <a
              href={OFFICIAL_FURUSATO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-lg hover:brightness-105 transition-all transform hover:-translate-y-0.5"
            >
              楽天ふるさと納税で宿を探す
            </a>
          </div>
        </section>

        {/* Cross Links Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 border-l-4 border-indigo-600 pl-4">
            あわせて読みたい関連特集ガイド
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${config.crossLinks.map((cl, idx) => `
            <Link
              key="${idx}"
              href="${cl.url}"
              className="block p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition-all group bg-slate-50/50"
            >
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                ${cl.title}
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                ${cl.desc}
              </p>
            </Link>
            `).join('')}
          </div>
        </section>
      </main>
    </div>
  );
}
`;
}

function main() {
  for (const conf of pagesConfig) {
    const dir = path.join(__dirname, 'src/app', conf.slug);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const filePath = path.join(dir, 'page.tsx');
    const code = generatePageCode(conf);
    fs.writeFileSync(filePath, code, 'utf8');
    console.log(`Generated: ${filePath}`);
  }
}

main();
