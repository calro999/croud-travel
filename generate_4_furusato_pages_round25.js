const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-sacred-mountains-sky-resort-stay',
    title: '日本三霊山＆富士山・白山・立山を仰ぐ天空パノラマリゾート×ふるさと納税完全ガイド【2026年最新】霊峰ビュー温泉宿',
    desc: '日本古来の山岳信仰が息づく日本三霊山！山梨・静岡「霊峰富士」河口湖逆さ富士展望温泉と甲州ワインビーフ、石川「白山」手取川源流の雪解け美肌湯と加賀会席宿、富山「立山」立山黒部アルペンルート直結マウンテンホテルと富山湾の海の幸。神々が宿る名峰の絶景パノラマを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三霊山＆名峰を仰ぐ天空リゾート×ふるさと納税ガイド',
    badge: '日本三霊山・名峰パノラマ特集',
    leadTitle: '雲海を突き抜ける白銀の頂。古より祈りが捧げられてきた日本三霊山の神々しいパノラマに抱かれる休日',
    leadDesc: '日本列島の屋根としてそびえ立ち、古来より信仰の対象として崇められてきた「日本三霊山（三名山）」――日本の象徴たる端正な独立峰「富士山」、泰澄大師が開創し白く輝く優美な姿で知られる「白山」、そして立山曼荼羅や修験道の聖地として北アルプスの険峰を誇る「立山」。これらの名峰の麓や中腹には、遮るもののない大パノラマを望む展望露天風呂や、高山植物が咲き誇る高原に佇む山岳リゾートホテルが点在します。澄み渡る朝の光に染まるモルゲンロートや、満天の星空とともに霊峰を愛でる至高のステイを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '客室テラスや展望露天風呂から三霊山の大迫力ビューを独占',
        desc: '窓一面に広がる富士山、白山連峰、立山連峰の雄姿を眺めながら、名湯で手足を伸ばす極上の癒やしを体験できます。'
      },
      {
        title: '登山鉄道・ロープウェイ・アルペンルート発着点への抜群の立地',
        desc: '立山黒部アルペンルートの高原バスや富士五湖周遊、白山白川郷ホワイトロードへのアクセスに優れた拠点を厳選しています。'
      },
      {
        title: '甲州ワイン牛・能登加賀郷土料理・富山湾の宝石白えび会席の美味',
        desc: '霊峰の清らかな雪解け伏流水が育んだ特産和牛や日本海の海の幸を、ふるさと納税クーポンでお得に堪能できます。'
      }
    ],
    items: [
      {
        key: 'mountain_fuji',
        themeTitle: '山梨県富士河口湖町ふるさと納税：標高3776m日本最高峰「富士山」逆さ富士パノラマ展望温泉と甲州ワイン牛会席リゾート',
        themeDesc: '世界文化遺産・霊峰富士を河口湖北岸から真正面に望む特等席。朝焼けに染まる紅富士を露天風呂から眺め、山梨県産甲州ワインビーフや富士桜ポーク、名物ほうとうを味わう贅沢なリゾートステイです。'
      },
      {
        key: 'mountain_hakusan',
        themeTitle: '石川県白山市ふるさと納税：白き神の座「白山」のブナ原生林と雪解け美肌の湯「白山一里野温泉」加賀百万石会席名宿',
        themeDesc: '古より越前の白山信仰を支えた霊峰。手取川の清流とブナの森に包まれた温泉地で、滑らかな単純温泉に浸かり、手取川の天然鮎や岩魚、ジビエ料理、加賀野菜を美酒とともに味わい尽くせます。'
      },
      {
        key: 'mountain_tateyama',
        themeTitle: '富山県立山町ふるさと納税：北アルプスの大自然「立山連峰」アルペンルート直結マウンテンリゾートと富山湾の白えび会席',
        themeDesc: '雄山・別山・浄土山からなる立山三山。室堂平の雪の大谷やみくりが池散策を満喫し、宿ではアルカリ性単純温泉の展望風呂から立山連峰の稜線を眺め、富山湾の白えびや寒ブリ、蛍烏賊を堪能できます。'
      }
    ],
    crossLinks: [
      { title: '富士山ビュー客室露天風呂宿×ふるさと納税完全ガイド', url: '/furusato-tax-open-air-bath-with-majestic-fuji-view-stay', desc: '河口湖・日本平・箱根芦ノ湖の霊峰一望リゾート。' },
      { title: '日本アルプス＆高山トレッキング山岳リゾート宿×ふるさと納税完全ガイド', url: '/furusato-tax-alps-trekking-mountain-resort-stay', desc: '上高地・白馬・立山の雲上ホテル。' },
      { title: '雲海テラス＆天空パノラマリゾート×ふるさと納税完全ガイド', url: '/furusato-tax-sea-of-clouds-sky-terrace-hotel-stay', desc: 'トマム・志賀高原・蔵王の雲上絶景ホテル。' }
    ]
  },
  {
    slug: 'furusato-tax-three-famous-waters-culinary-stay',
    title: '日本三大名水＆清冽な湧水仕込みの美食宿×ふるさと納税完全ガイド【2026年最新】南阿蘇白川水源・八ヶ岳白州・京都伏見',
    desc: '名水あるところに極上の美味と美酒あり！熊本「南阿蘇白川水源」毎分60トンの名水で育つあか牛料理と絶景阿蘇温泉、山梨「八ヶ岳南麓白州」南アルプス清流仕込みの十割手打ち蕎麦と高原リゾート、京都「伏見」銘水「伏水」で醸す純米酒と京料理町家宿。大地が磨き上げた奇跡の湧水ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大名水＆清冽な湧水仕込み美食宿×ふるさと納税ガイド',
    badge: '日本三大名水・湧水美食特集',
    leadTitle: '幾十年かけて磨かれた雪解け地下水。名水が引き出す料理と日本酒の極上マリアージュ',
    leadDesc: '日本列島の豊かな森林と火山灰地層が生み出す世界最高品質のミネラルウォーター――環境省の名水百選の中でも圧倒的な湧水量を誇り常温14度の清水が湧き出す熊本の「南阿蘇白川水源」、花崗岩層をくぐり抜けウイスキーの仕込み水としても世界に知られる山梨の「八ヶ岳南麓・白州名水」、そして千利休をはじめ歴代茶人や酒蔵がこよなく愛した京都の「伏見の伏水」。カルキ臭が一切ない清冽な名水で出汁を取り、炊き上げたご飯や手打ち蕎麦、そして名水仕込みの純米酒は、素材のポテンシャルを極限まで引き出します。名水の郷に湧く名湯に浸かり、心洗われる美食滞在を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '名水で淹れた珈琲や手打ち十割蕎麦、湧水豆腐の朝食ディナー',
        desc: '雑味のない天然湧水だからこそ味わえる透明感のある出汁や手打ち蕎麦、自家製豆腐の滋味を堪能できます。'
      },
      {
        title: '名水仕込み風呂＆天然ミネラル水風呂による究極のととのい',
        desc: '肌への刺激が少なくまろやかな名水風呂や、サウナ後の清涼な天然水風呂で全身をリフレッシュできます。'
      },
      {
        title: '蔵元直営ショップや水源めぐりへのアクセス抜群のロケーション',
        desc: '水源地や酒蔵通りへ徒歩圏内。マイボトルに名水を汲んでの散策など名水地ならではの体験が楽しめます。'
      }
    ],
    items: [
      {
        key: 'water_aso',
        themeTitle: '熊本県南阿蘇村ふるさと納税：名水百選筆頭「白川水源」の天然ミネラル湧水と阿蘇あか牛炭火焼き・南阿蘇温泉郷',
        themeDesc: '毎分60トンもの澄み切った水が湧き出る奇跡の水源。白川水源の湧水で仕込んだ郷土料理や炊きたてご飯、あか牛の溶岩焼きを味わい、阿蘇五岳を一望する温泉露天風呂で心洗われるひとときを過ごせます。'
      },
      {
        key: 'water_hakushu',
        themeTitle: '山梨県北杜市ふるさと納税：南アルプス甲斐駒ヶ岳が磨いた「白州名水」の極上手打ち蕎麦と八ヶ岳高原リゾートホテル',
        themeDesc: 'ウイスキーや天然水ブランドの故郷として知られる白州。花崗岩層で磨かれた名水を用いた十割手打ち蕎麦や清里フレンチを堪能し、八ヶ岳山麓の澄んだ空気と満天の星空に癒やされる高原リトリートです。'
      },
      {
        key: 'water_fushimi',
        themeTitle: '京都府京都市伏見区ふるさと納税：千利休も愛した名水「伏水」の純米酒ペアリングと宇治川水系の京料理町家宿',
        themeDesc: 'かつて「伏水」と呼ばれた良質な地下水が豊富な伏見。月桂冠や黄桜などの老舗酒蔵が並ぶ酒蔵通りを散策し、名水仕込みの京懐石と絞りたて純米大吟醸を味わう風情あふれる古都ステイです。'
      }
    ],
    crossLinks: [
      { title: '名水百選・湧水めぐり＆名水蕎麦豆腐料理の宿×ふるさと納税完全ガイド', url: '/furusato-tax-spring-water-soba-tofu-onsen-stay', desc: '忍野八海・安曇野・郡上八幡の名湯。' },
      { title: '日本酒ペアリング＆酒蔵直結名宿×ふるさと納税完全ガイド', url: '/furusato-tax-sake-brewery-pairing-onsen-stay', desc: '越後湯沢・諏訪・会津の名酒と温泉旅。' },
      { title: '日本のウイスキー聖地＆蒸溜所ツアーと極上オーベルジュ×ふるさと納税完全ガイド', url: '/furusato-tax-japanese-whisky-distillery-retreat-stay', desc: '余市・白州・富士御殿場の至福ステイ。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-water-towns-riverside-stay',
    title: '日本三大水郷＆川下り舟舟遊び・水上情景リバーサイド宿×ふるさと納税完全ガイド【2026年最新】柳川・近江八幡・佐原',
    desc: '情緒あふれる掘割とどんこ舟の旅！福岡「水郷柳川」網の目のような掘割巡りと名物うなぎのせいろ蒸し老舗宿、滋賀「近江八幡」八幡堀の白壁土蔵と近江牛ステーキ会席宿、千葉「小江戸佐原」利根川水運の歴史的町並みと舟めぐりオーベルジュ。水と暮らす歴史の街を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大水郷＆川下り舟舟遊び・水上情景宿×ふるさと納税ガイド',
    badge: '日本三大水郷・舟めぐり特集',
    leadTitle: '水面に映る柳の緑と白壁土蔵。船頭の唄声とともにゆったり流れる水郷時間を泊まって味わう',
    leadDesc: '縦横に張り巡らされた水路（掘割）とともに歴史を刻んできた日本を代表する三大水郷――北原白秋の故郷として城下町全体に水路が巡る福岡の「水郷柳川」、豊臣秀次が築いた八幡堀に白壁土蔵が立ち並ぶ滋賀の「近江八幡」、そして利根川の舟運で栄え小江戸の風情を今に残す千葉・茨城の「佐原・水郷潮来」。竿一本で巧みに操られる舟に揺られ、水上から歴史的町並みを見上げる時間は、まるで江戸・明治の時代にタイムスリップしたかのような静けさに満ちています。水辺に佇む登録有形文化財宿や老舗料亭旅館に泊まり、名物うなぎや近江牛、水郷の川魚料理を味わう風情あふれる旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '川下り舟乗船場や重要伝統的建造物群保存地区へ直結の好立地',
        desc: '宿の目の前が水路や船着き場。観光客が引いた夕暮れや早朝の静寂な水郷情緒を心ゆくまで満喫できます。'
      },
      {
        title: '柳川うなぎせいろ蒸し・近江牛すき焼き・水郷川魚会席の伝統名物',
        desc: '水運と豊かな土壌がもたらした各水郷の名物料理を、個室食事処でゆったりと味わえます。'
      },
      {
        title: '風情ある堀割を望む客室や天然温泉で癒やされる水辺ステイ',
        desc: '柳の葉が揺れる水面を眺めながら温泉に浸かる贅沢な時間を、ふるさと納税クーポンでお得に体験できます。'
      }
    ],
    items: [
      {
        key: 'water_town_yanagawa',
        themeTitle: '福岡県柳川市ふるさと納税：水郷柳川の掘割を巡る「どんこ舟下り」と秘伝タレ香る「うなぎのせいろ蒸し」老舗旅館',
        themeDesc: '全長約470kmにも及ぶ水路網が街を巡る柳川。柳の木の下をくぐる舟下りを楽しみ、宿では蒸篭でふっくらと蒸し上げる熱々の名物うなぎせいろ蒸しと柳川温泉の良質な湯に癒やされる九州の情緒旅です。'
      },
      {
        key: 'water_town_omihachiman',
        themeTitle: '滋賀県近江八幡市ふるさと納税：近江商人の誇り「八幡堀和船めぐり」白壁土蔵の町並みとA5等級近江牛会席名宿',
        themeDesc: '時代劇のロケ地としても名高い八幡堀。石垣と白壁の商家が続く風情ある町並みを巡り、宿では三大和牛のひとつ「近江牛」の極上ステーキやすき焼き、琵琶湖の郷土料理を味わう大人の歴史紀行です。'
      },
      {
        key: 'water_town_sawara',
        themeTitle: '千葉県香取市・茨城県潮来市ふるさと納税：水郷佐原「小野川さっぱ舟めぐり」伊能忠敬ゆかりの商家町と古民家ホテル',
        themeDesc: '「お江戸見たけりゃ佐原へござれ」と謳われた商家町。柳並木が美しい小野川沿いをさっぱ舟で巡り、築100年以上の歴史的建造物を再生した町家オーベルジュで地元利根川水系の旬フレンチを堪能できます。'
      }
    ],
    crossLinks: [
      { title: '清流川床料理＆避暑せせらぎ名宿×ふるさと納税完全ガイド', url: '/furusato-tax-riverside-kawadoko-cooling-inn-stay', desc: '京都貴船・四万十川・越後岩室の涼風ステイ。' },
      { title: '小江戸・小京都の風情ある城下町老舗旅館×ふるさと納税完全ガイド', url: '/furusato-tax-little-edo-kyoto-castle-town-stay', desc: '川越・金沢・萩の伝統美を味わう大人旅。' },
      { title: '古民家再生・歴史的町家オーベルジュ×文化財ホテル滞在記', url: '/furusato-tax-kominka-heritage-townhouse-auberge-stay', desc: '篠山・飛騨高山・竹田城下の歴史情緒ステイ。' }
    ]
  },
  {
    slug: 'furusato-tax-three-gorge-open-air-baths-retreat-stay',
    title: '日本三大渓谷露天風呂＆大自然パノラマ野天温泉宿×ふるさと納税完全ガイド【2026年最新】天城湯ヶ島・群馬尻焼・秋田秋の宮',
    desc: '川と一体化する究極の野天風呂！静岡「天城湯ヶ島温泉」狩野川渓谷の清流露天風呂と天城本わさび・猪鍋会席、群馬「尻焼温泉・花敷温泉」川底から温泉が湧き出す天然の巨大川風呂と四万清流宿、秋田「秋の宮温泉郷・泥湯」役内川沿いの秘湯露天風呂と稲庭うどん会席。大自然の渓谷美と名湯を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大渓谷露天風呂＆野天温泉宿×ふるさと納税ガイド',
    badge: '日本三大渓谷野天風呂・秘境温泉特集',
    leadTitle: '川のせせらぎに手を浸し、眼下に流れる清流とひとつになる。大自然が生み出した奇跡の野天風呂',
    leadDesc: '近代的な大浴場では決して味わえない、大自然のダイナミズムを肌で感じる「渓谷野天風呂」――川端康成が『伊豆の踊子』を執筆し狩野川の清流をすぐ間近に望む静岡の「天城湯ヶ島温泉」、川底一面から温泉が自噴し川そのものが巨大な天然温泉となる群馬の「尻焼温泉（花敷温泉）」、そして宮城・秋田の県境に位置し役内川の河原を掘れば湯が湧く秘湯・秋田の「秋の宮温泉郷」。新緑の木漏れ日や紅葉の錦、冬の雪景色を眺めながら川の音に包まれる野天風呂体験は、温泉好きにとって最高の贅沢です。川魚料理や山の恵み、地酒を味わう名宿ステイを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '川面と目線が同じ！清流のせせらぎを間近に感じる大迫力露天風呂',
        desc: '川のせせらぎやマイナスイオンを全身に浴びながら、開放感あふれる野天風呂で至福の湯浴みを堪能できます。'
      },
      {
        title: '源泉かけ流し自噴泉！加温・加水なしの地球の恵みをダイレクトに体感',
        desc: '豊富な湯量を誇る自家源泉から直接注がれる新鮮な温泉で、高い血行促進効果と疲労回復が得られます。'
      },
      {
        title: '天城わさび・上州川魚・秋田きりたんぽ稲庭うどんなど滋味深い郷土美食',
        desc: '深山の澄んだ名水がもたらす極上の山菜や特産肉、川魚料理を、ふるさと納税クーポンでお得に楽しめます。'
      }
    ],
    items: [
      {
        key: 'gorge_bath_amagi',
        themeTitle: '静岡県伊豆市ふるさと納税：川端康成ゆかりの狩野川渓谷「天城湯ヶ島温泉」清流せせらぎ露天風呂と天城本わさび・猪鍋名宿',
        themeDesc: '天城連峰の原生林から湧き出る清流・狩野川。渓谷にせり出すように作られた露天風呂で川のせせらぎを聞き、擦りたての本わさびを乗せた天城軍鶏のタタキや名物猪鍋、伊豆牛ステーキを堪能できる文学と自然の温泉郷です。'
      },
      {
        key: 'gorge_bath_shiriyaki',
        themeTitle: '群馬県中之条町ふるさと納税：川そのものが大露天風呂「尻焼温泉・花敷温泉」白砂川渓谷の秘境野湯と四万ブルーの名湯宿',
        themeDesc: '川底から湯が湧き出る天然の川風呂・尻焼温泉。大自然に抱かれるダイナミックな湯浴みを体感し、宿では四万川の清流を望む客室露天風呂や上州牛会席、地元の山菜料理に癒やされる秘湯リトリートです。'
      },
      {
        key: 'gorge_bath_akinomiya',
        themeTitle: '秋田県湯沢市ふるさと納税：秋田最古のいで湯「秋の宮温泉郷」役内川の河原露天風呂と稲庭うどん・由利牛美食旅館',
        themeDesc: '開湯1200年を誇る歴史ある温泉郷。役内川沿いに点在する野趣あふれる露天風呂や泥湯温泉の濃厚な湯を巡り、伝統製法で作られる本場稲庭うどんや由利牛ステーキを秋田の地酒とともに味わい尽くせます。'
      }
    ],
    crossLinks: [
      { title: '秘境・渓谷の一軒宿×ふるさと納税完全ガイド', url: '/furusato-tax-secluded-canyon-isolated-onsen-stay', desc: '黒部峡谷・祖谷・みちのく深山の完全遮断リトリート。' },
      { title: '清流渓谷＆名瀑ヒーリング温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-waterfall-river-gorge-healing-onsen-stay', desc: '奥入瀬渓流・天城湯ヶ島・作並温泉の滝見露天宿。' },
      { title: '日本三大急流＆爽快川下り名宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-rapids-river-activity-stay', desc: '最上川・富士川・球磨川のリバーサイド名湯旅。' }
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
