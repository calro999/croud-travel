const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-waterfalls-onsen-stay',
    title: '日本三名瀑＆ダイナミック滝見露天風呂宿×ふるさと納税完全ガイド【2026年最新】那智の滝・華厳の滝・袋田の滝の豪快名湯',
    desc: '日本屈指の落差と水量を誇る名瀑へ！世界遺産和歌山「那智の滝」と南紀勝浦温泉、栃木日光中禅寺湖「華厳の滝」と乳白色硫黄泉、茨城奥久慈「袋田の滝」の四段名瀑と美肌の湯。轟音とマイナスイオンに包まれる滝見露天風呂ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三名瀑＆ダイナミック滝見露天風呂宿×ふるさと納税ガイド',
    badge: '日本三名瀑・滝見露天風呂特集',
    leadTitle: '轟音とともに落ちる清冽な飛瀑と立ち込める水煙。大自然の神気とマイナスイオンに満たされる湯浴み',
    leadDesc: '日本古来の自然崇拝の象徴であり、圧倒的な落差と荘厳さを誇る「日本三名瀑」――和歌山の那智の滝、栃木日光の華厳の滝、茨城の袋田の滝。天空から真っ直ぐに突き刺さる白糸のような直瀑、断崖を四段にわたって滑り落ちる氷瀑など、季節ごとに表情を変える名瀑の迫力は息をのむ美しさです。滝見の散策で心地よい疲労を覚えた後は、周辺の歴史ある名湯宿で湯船に浸かり、地域の滋味を味わう――そんな心洗われるリフレッシュ旅を楽天ふるさと納税でお得に実現しましょう。',
    merits: [
      {
        title: '滝の轟音と水しぶきを肌で感じる絶景露天風呂＆展望テラス',
        desc: 'マイナスイオンが充満する渓流沿いの露天風呂や、客室の展望窓から滝を望む特別なロケーションで、日常の疲れを完全に浄化できます。'
      },
      {
        title: '生マグロ・奥久慈しゃも・湯波料理など名瀑の郷が育む郷土会席',
        desc: '勝浦の獲れたて生マグロ尽くし、大子の肉質引き締まる奥久慈軍鶏鍋、日光の伝統ある湯波会席など、水清き里の馳走を堪能できます。'
      },
      {
        title: 'ふるさと納税宿泊クーポンで名瀑周辺の老舗料理旅館をお得に予約',
        desc: '寄附額の最大30%がクーポンとして還元されるため、ハイシーズンの紅葉期や新緑期でも賢く贅沢に宿泊できます。'
      }
    ],
    items: [
      {
        key: 'nachi_waterfall',
        themeTitle: '和歌山県那智勝浦町ふるさと納税：落差日本一133m・世界遺産「那智の滝」と南紀勝浦温泉の生マグロ会席',
        themeDesc: '熊野那智大社の別宮・飛瀧神社の御神体として尊崇される那智の滝。世界遺産熊野古道の祈りの道を歩き、勝浦港で水揚げされた新鮮な生まぐろ料理と硫黄香る名湯に癒やされる聖地リトリートです。'
      },
      {
        key: 'kegon_waterfall',
        themeTitle: '栃木県日光市ふるさと納税：中禅寺湖の湖水が一気に落下する大瀑布「華厳の滝」と日光温泉郷名宿',
        themeDesc: '高さ97mの岸壁を一気に落下する豪快な華厳の滝。エレベーターで行く観瀑台からの迫力ある景観を堪能し、日光東照宮ゆかりの格式高い宿で湯波料理やとちぎ和牛会席を味わえます。'
      },
      {
        key: 'fukuroda_waterfall',
        themeTitle: '茨城県大子町ふるさと納税：西行法師も絶賛した「四度の滝」袋田の滝と奥久慈しゃも・袋田温泉',
        themeDesc: '長さ120m・幅73mの巨岩を四段に落下する袋田の滝。冬の完全氷結「氷瀑」でも名高く、アルカリ性単純温泉の柔らかな湯に浸かりながら、名物奥久慈しゃもや鮎の塩焼きに舌鼓を打てます。'
      }
    ],
    crossLinks: [
      { title: '清流渓谷＆名瀑ヒーリング温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-waterfall-river-gorge-healing-onsen-stay', desc: '奥入瀬渓流・天城湯ヶ島・作並温泉の滝見露天宿。' },
      { title: '日本三大峡谷＆巨岩奇勝パノラマ露天風呂宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gorges-canyon-onsen-stay', desc: '清津峡・黒部峡谷・大杉谷の絶景名湯。' },
      { title: 'お伊勢参り＆熊野古道×聖地巡礼・門前宿ガイド', url: '/furusato-tax-ise-kumano-sacred-power-spot-stay', desc: '伊勢神宮・熊野三山・出雲大社の祈願ステイ。' }
    ]
  },
  {
    slug: 'furusato-tax-sake-bar-unlimited-tasting-stay',
    title: '地酒BAR＆日本酒利き酒し放題の名湯宿×ふるさと納税完全ガイド【2026年最新】越後湯沢・山形赤湯・京都伏見の酒蔵ステイ',
    desc: '日本酒好きの桃源郷！新潟越後湯沢「ぽんしゅ館」越後全酒蔵コイン利き酒と美肌温泉、山形南陽「赤湯温泉」の蔵元直送地酒BARと米沢牛会席、京都「伏見」の名水仕込み銘酒と酒蔵通り町家ホテル。酒蔵見学と極上ペアリングを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '地酒BAR＆日本酒利き酒し放題の名湯宿×ふるさと納税ガイド',
    badge: '地酒BAR・日本酒利き酒ステイ特集',
    leadTitle: '蔵元の情熱が宿る芳醇な一滴。美酒と名湯に身を委ねる大人のための酒浸りステイ',
    leadDesc: '米どころ・名水の郷が誇る無数の地酒蔵。全国屈指の酒処・新潟の淡麗辛口から、山形のフルーティーな吟醸酒、京都伏見のまろやかな女酒まで。宿のラウンジに備えられた専用サーバーから注ぐ利き酒し放題プランや、専属利酒師が旬の会席料理一品ごとに最高の銘柄を合わせるペアリングコース。温泉で身体を温めた後、浴衣姿でじっくりと美酒を味わう幸福を、楽天ふるさと納税の宿泊クーポンでお得に堪能しましょう。',
    merits: [
      {
        title: '宿内ラウンジや専用BARで数十種類のプレミアム地酒を自由に試飲',
        desc: '純米大吟醸から季節限定の生原酒、にごり酒まで、地域の名だたる銘柄を自分のペースで少しずつ飲み比べできる贅沢な時間。'
      },
      {
        title: '利酒師（ソムリエ）が提案する一皿一酒の完璧なペアリングディナー',
        desc: '前菜からお造り、メインの肉料理まで、料理の旨味を引き立てる温度や酒器にこだわったプロのペアリングを満喫できます。'
      },
      {
        title: '酒蔵見学ツアーや限定ボトルの購入など酒処ならではの特典',
        desc: '仕込み蔵の見学や蔵元限定の非売品生酒のお土産付きプランなど、日本酒ファン垂涎のプログラムが充実しています。'
      }
    ],
    items: [
      {
        key: 'echigo_sake',
        themeTitle: '新潟県湯沢町ふるさと納税：越後湯沢駅「ぽんしゅ館」と新潟90蔵の利き酒・越後湯沢温泉の酒風呂名宿',
        themeDesc: '新潟県内すべての酒蔵の銘柄が試飲できる「ぽんしゅ館」。日本酒を注いだ天然温泉「酒風呂」を楽しめる宿もあり、魚沼産コシヒカリと日本海の幸、極上地酒のペアリングを心ゆくまで堪能できます。'
      },
      {
        key: 'akayu_sake',
        themeTitle: '山形県南陽市ふるさと納税：山形の銘酒揃い踏み「地酒BAR」と開湯900年赤湯温泉・山形牛ディナー',
        themeDesc: '「十四代」をはじめ全国的銘酒の宝庫・山形。赤湯温泉の風情ある旅館で、囲炉裏端や専用BARカウンターで厳選地酒を飲み比べ。名物米沢牛やすき焼きとともに至福の酔い心地に浸れます。'
      },
      {
        key: 'fushimi_sake',
        themeTitle: '京都府京都市ふるさと納税：名水「伏水」が醸す日本屈指の酒処・伏見酒蔵通りと風情ある町家ステイ',
        themeDesc: '白壁土蔵の酒蔵が連なる京都伏見。月桂冠や黄桜などの歴史ある蔵元を巡り、伏見の名水で仕込んだ繊細でまろやかな京の地酒と、伝統的な京料理の粋を味わう大人の小京都旅です。'
      }
    ],
    crossLinks: [
      { title: '日本酒ペアリング＆酒蔵直結名宿×ふるさと納税完全ガイド', url: '/furusato-tax-sake-brewery-pairing-onsen-stay', desc: '越後湯沢・諏訪・会津の名酒と温泉旅。' },
      { title: '銘酒ワイナリー＆葡萄畑オーベルジュ×ふるさと納税完全ガイド', url: '/furusato-tax-winery-vineyard-auberge-stay', desc: '勝沼・余市・十勝のワインペアリング旅。' },
      { title: '国産ウイスキー蒸溜所＆銘酒ペアリング宿×ふるさと納税完全ガイド', url: '/furusato-tax-distillery-whisky-pairing-stay', desc: '余市・白州・秩父のモルト旅。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-sand-dunes-resort-stay',
    title: '日本三大砂丘＆雄大パノラマ・砂の絶景リゾート宿×ふるさと納税完全ガイド【2026年最新】鳥取砂丘・中田島砂丘・吹上浜の海宿',
    desc: '地平線に続く風紋と黄金の丘！鳥取「鳥取砂丘」の夕日パノラマと皆生温泉・カニ会席、静岡浜松「中田島砂丘」の遠州灘ウミガメの浜と浜名湖うなぎ宿、鹿児島「吹上浜」の47km白砂青松と天然砂むし温泉。風と砂が織りなす異国情緒リゾートを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大砂丘＆雄大パノラマ・砂の絶景リゾート宿×ふるさと納税ガイド',
    badge: '日本三大砂丘・オーシャン砂景特集',
    leadTitle: '風が描く風紋のアートと見渡す限りの砂丘美。異国情緒漂うダイナミックな海岸リゾート',
    leadDesc: '日本海や太平洋の強風と波が気の遠くなるような時間をかけて創り出した「日本三大砂丘」――鳥取砂丘（鳥取）、中田島砂丘（静岡）、吹上浜（鹿児島）。風が吹くたびに砂の表面に現れる美しい幾何学模様「風紋」、砂丘の稜線の向こうに広がる青い海、そして夕暮れ時にすべてが茜色に染まるマジックアワー。まるで海外の砂漠リゾートを訪れたかのような非日常感を味わいながら、周辺の名湯や豪華な海鮮会席を楽しむ旅を楽天ふるさと納税でお得に叶えましょう。',
    merits: [
      {
        title: '砂丘越しに望む水平線！息をのむサンセット＆星空観賞',
        desc: '夕方には黄金色に輝く砂の丘、夜には人工の灯りが遮られた砂丘から見上げる満天の星空。幻想的な自然のドラマを体感できます。'
      },
      {
        title: '松葉ガニ・浜名湖うなぎ・黒毛和牛など各地域を代表する最高峰美食',
        desc: '鳥取の冬の味覚・松葉ガニや岩牡蠣、浜松名物の香ばしい鰻重、鹿児島の黒豚・さつま揚げなど、豪華なご当地ディナーを満喫できます。'
      },
      {
        title: 'ラクダ乗り・サンドボード・パラグライダーなど砂丘アクティビティ',
        desc: '広大な砂のフィールドを活かした爽快なアクティビティが充実。子どもから大人まで心躍る特別な休日を過ごせます。'
      }
    ],
    items: [
      {
        key: 'tottori_dune',
        themeTitle: '鳥取県鳥取市・米子ふるさと納税：東西16kmの雄大な砂の芸術「鳥取砂丘」と皆生温泉オーシャンリゾート',
        themeDesc: '国の天然記念物・鳥取砂丘。「馬の背」から見下ろす日本海の青と砂のコントラストは圧巻。海から湧く皆生温泉の塩化物泉で温まり、冬の松葉ガニや鳥取和牛を堪能できる贅沢な滞在です。'
      },
      {
        key: 'nakatajima_dune',
        themeTitle: '静岡県浜松市ふるさと納税：遠州のからっ風が描く風紋美「中田島砂丘」と浜名湖天然温泉・うなぎ宿',
        themeDesc: 'アカウミガメの産卵地としても知られる遠州灘の中田島砂丘。広大な砂浜を渡る潮風を感じ、浜名湖畔の天然温泉で癒やされながら、本場浜松のふっくら香ばしい鰻蒲焼きを味わえます。'
      },
      {
        key: 'fukiage_dune',
        themeTitle: '鹿児島県南さつま市・日置・指宿ふるさと納税：日本最長47kmの白砂青松「吹上浜」と指宿名物天然砂むし温泉',
        themeDesc: '東シナ海に面してどこまでも続く日本最長の砂丘・吹上浜。「砂の祭典」でも有名で、夕日の名所としても名高い海岸美を巡り、指宿の温かい砂に包まれる砂むし温泉と黒豚しゃぶしゃぶを満喫できます。'
      }
    ],
    crossLinks: [
      { title: '白亜の灯台＆断崖絶景オーシャンビュー宿×ふるさと納税完全ガイド', url: '/furusato-tax-lighthouse-cliff-ocean-panorama-stay', desc: '日御碕・犬吠埼・室戸岬の岬リゾート。' },
      { title: '絶景夕日・サンセット特等席の海宿×ふるさと納税完全ガイド', url: '/furusato-tax-sunset-ocean-magic-hour-stay', desc: '堂ヶ島・由良・白浜の茜色マジックアワー温泉。' },
      { title: '絶景オーシャンフロント×波音ヒーリングの海宿ふるさと納税完全ガイド', url: '/furusato-tax-oceanfront-wave-sound-healing-stay', desc: '稲取・南房総・読谷村の全室オーシャンビューと潮騒露天。' }
    ]
  },
  {
    slug: 'furusato-tax-traditional-kamado-rice-irori-stay',
    title: '古民家かまど炊きご飯＆囲炉裏郷土料理の宿×ふるさと納税完全ガイド【2026年最新】白川郷・遠野・丹波篠山のおばあちゃん家ステイ',
    desc: '日本人の原風景と素朴なぬくもり！世界遺産岐阜「白川郷」の合掌造り囲炉裏宿、岩手「遠野」の南部曲り家とかまど炊き銀シャリ、兵庫「丹波篠山」の黒豆ご飯と絶品ぼたん鍋古民家宿。薪のはぜる音とふっくらお米の甘みを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '古民家かまど炊きご飯＆囲炉裏郷土料理の宿×ふるさと納税ガイド',
    badge: 'かまど炊きご飯・囲炉裏古民家特集',
    leadTitle: 'パチパチとはぜる薪の火と湯気立ち上る羽釜。心まで温まる田舎の原風景と郷土ご馳走ステイ',
    leadDesc: '薪をくべて羽釜で炊き上げる、ふっくらツヤツヤの銀シャリ。囲炉裏の炭火でじっくり焼いた川魚や香ばしい味噌田楽。世界遺産の合掌造り集落や、茅葺き屋根の古民家には、何世代にもわたって受け継がれてきた日本の温かい暮らしが息づいています。土間のかまどから立ち上る湯気、おばあちゃんの手料理のような滋味あふれる郷土会席、そして木の香る温泉。どこか懐かしく、心がじんわりとほどける特別な時間を、楽天ふるさと納税でお得に体験しましょう。',
    merits: [
      {
        title: '直火羽釜炊きだからこそ味わえる究極のお米の甘みとお焦げ',
        desc: '強い火力で一気に炊き上げた地元産新米コシヒカリ。ふっくらとした粒立ちと香ばしいお焦げの美味しさは、電気炊飯器では決して出せない感動の味です。'
      },
      {
        title: '囲炉裏を囲んで味わう炭火焼き・ジビエ・郷土鍋ディナー',
        desc: '赤々と燃える炭火を囲み、串刺しの岩魚の塩焼きや飛騨牛の朴葉味噌焼き、丹波篠山名物ぼたん鍋などをゆっくりとお酒とともに楽しめます。'
      },
      {
        title: '1棟貸し切りや昔ながらの木造古民家で過ごす静かな時間',
        desc: '太い梁や柱、畳の香りに包まれた空間で、時間を忘れて読書をしたり縁側でお茶を飲んだり、贅沢なスローライフを堪能できます。'
      }
    ],
    items: [
      {
        key: 'shirakawago_kamado',
        themeTitle: '岐阜県白川村・飛騨高山ふるさと納税：世界遺産「白川郷」合掌造り集落とかまど炊き飛騨牛囲炉裏宿',
        themeDesc: '急勾配の茅葺き屋根が並ぶ白川郷。合掌造りの宿で囲炉裏の炭火を囲み、香ばしい岩魚の塩焼きや飛騨牛の朴葉味噌焼き、かまどで炊いた熱々ご飯を満喫する昔話のような滞在です。'
      },
      {
        key: 'tono_kamado',
        themeTitle: '岩手県遠野市・花巻温泉郷ふるさと納税：カッパ伝説の民話の里・南部曲り家と郷土ひっつみ鍋・名湯秘湯宿',
        themeDesc: '人と馬が同じ屋根の下で暮らした「南部曲り家」が残る遠野。地元のお米で作る手作りどぶろくや郷土料理ひっつみ汁をいただき、花巻温泉郷の奥座敷で源泉かけ流しの名湯に浸かれます。'
      },
      {
        key: 'sasayama_kamado',
        themeTitle: '兵庫県丹波篠山市ふるさと納税：丹波篠山城下町の町家古民家と丹波黒豆羽釜ご飯・冬の名物ぼたん鍋',
        themeDesc: '丹波篠山コシヒカリをふっくら炊き上げた黒豆ご飯、丹波栗、そして天然猪肉を使った伝統のぼたん鍋。江戸情緒残る商家町の古民家ホテルで、丹波焼の器とともに極上の里山ディナーを味わえます。'
      }
    ],
    crossLinks: [
      { title: '古民家再生・歴史的町家オーベルジュ×文化財ホテル滞在記', url: '/furusato-tax-kominka-heritage-townhouse-auberge-stay', desc: '篠山・飛騨高山・竹田城下の歴史情緒と地産馳走ステイ。' },
      { title: '絶景棚田＆日本の原風景里山温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-terraced-rice-fields-satoyama-onsen-stay', desc: '星峠・白米千枚田・大山千枚田の休日。' },
      { title: '歴史街道・宿場町めぐり名宿×ふるさと納税完全ガイド', url: '/furusato-tax-historical-kaido-post-town-ryokan-stay', desc: '中山道木曽路（妻籠・馬籠）・日光街道の江戸情緒旅。' }
    ]
  }
];

function generatePageCode(config) {
  const pageData = allHotels[config.slug] || {};

  return `import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${config.title}',
  description: '${config.desc}',
  keywords: [
    '楽天ふるさと納税',
    'ふるさと納税 宿泊クーポン',
    '楽天トラベル ふるさと納税',
    '高級温泉旅館',
    '露天風呂付き客室',
    '2026年旅行'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/${config.slug}'
  },
  openGraph: {
    title: '${config.title}',
    description: '${config.desc}',
    url: 'https://croud-travel.pages.dev/${config.slug}',
    type: 'article',
    siteName: '旅宿クラウド'
  }
};

export default function FurusatoFeaturePage() {
  const officialFurusatoAffUrl = '${officialFurusatoAffUrl}';

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      {/* ヒーローヘッダー */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-900 border-b border-stone-800">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-6">
            <span>✨</span>
            <span>${config.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-100 tracking-tight leading-tight sm:leading-snug mb-6">
            ${config.h1}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed mb-8">
            ${config.leadDesc}
          </p>

          {/* 公式キャンペーンCTA */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-transparent border border-amber-500/30 backdrop-blur max-w-2xl mx-auto">
            <h2 className="text-lg sm:text-xl font-bold text-amber-200 mb-2">
              楽天ふるさと納税なら寄附額の最大30%が宿泊クーポンに！
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mb-4 leading-relaxed">
              寄附翌日には楽天トラベルで使えるクーポンが付与。有効期限はたっぷり3年間あるため、次の大型連休や記念日旅行にも安心して活用いただけます。
            </p>
            <a
              href={officialFurusatoAffUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-base shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>楽天ふるさと納税 宿泊クーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* メリット3選 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-stone-800">
        <h2 className="text-2xl sm:text-3xl font-black text-amber-100 text-center mb-10">
          ${config.leadTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${config.merits.map((m, idx) => `
          <div key="${idx}" className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              0${idx + 1}
            </div>
            <h3 className="text-lg font-bold text-stone-200 mb-2">
              ${m.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              ${m.desc}
            </p>
          </div>
          `).join('')}
        </div>
      </section>

      {/* エリア別 厳選ホテルリスト */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-16">
          ${config.items.map((item) => {
            const data = pageData[item.key] || { hotels: [] };
            return `
          <div key="${item.key}" className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl sm:text-3xl font-black text-amber-200 mb-2">
                ${item.themeTitle}
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                ${item.themeDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              ${(data.hotels || []).map((hotel, hIdx) => `
              <div
                key="${hotel.hotelNo || hIdx}"
                className="group flex flex-col rounded-2xl bg-stone-950/80 border border-stone-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                  <img
                    src="${hotel.hotelImageUrl || 'https://placehold.co/600x450/222/aaa?text=Rakuten+Hotel'}"
                    alt="${hotel.hotelName}"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur border border-stone-700 text-amber-400 text-xs font-bold">
                    ★ ${hotel.reviewAverage || '4.0'} (${hotel.reviewCount || 0}件)
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] text-amber-400 font-semibold mb-1">
                    ${hotel.address1 || ''}${hotel.address2 || ''}
                  </span>
                  <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors line-clamp-2 mb-2">
                    ${hotel.hotelName}
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2 mb-4">
                    ${hotel.hotelSpecial || hotel.access || '名湯と極上の美食を満喫できる人気宿泊施設です。'}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考最安料金</span>
                      <span className="text-sm font-black text-amber-400">
                        ${hotel.hotelMinCharge ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : 'プラン参照'}
                      </span>
                    </div>
                    <a
                      href="${hotel.affiliateUrl || hotel.hotelInformationUrl}"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all"
                    >
                      詳細・予約 →
                    </a>
                  </div>
                </div>
              </div>
              `).join('')}
            </div>
          </div>
            `;
          }).join('')}
        </div>
      </section>

      {/* 下部CTAバナー */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-600/30 via-orange-600/20 to-stone-900 border border-amber-500/40 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-black text-amber-100 mb-4">
              ふるさと納税の宿泊クーポンでお得に極上の旅へ
            </h2>
            <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto mb-6 leading-relaxed">
              寄附上限額の範囲内なら、実質自己負担2,000円で憧れの特等席宿やリゾートに宿泊可能。楽天ポイント還元も併用して、賢く贅沢なひとときをお過ごしください。
            </p>
            <a
              href={officialFurusatoAffUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-base shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>楽天ふるさと納税 宿泊クーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 関連記事 内部リンク */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-stone-800">
        <h2 className="text-xl sm:text-2xl font-bold text-amber-200 mb-6">
          あわせて読みたい！テーマ別ふるさと納税トラベルガイド
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${config.crossLinks.map((link, idx) => `
          <Link
            key="${idx}"
            href="${link.url}"
            className="p-5 rounded-2xl bg-stone-950/60 border border-stone-800 hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-stone-200 group-hover:text-amber-300 transition-colors mb-2">
                ${link.title}
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                ${link.desc}
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-400 mt-4 block">記事を読む →</span>
          </Link>
          `).join('')}
        </div>
      </section>
    </div>
  );
}
`;
}

for (const p of pagesConfig) {
  const dirPath = path.join(__dirname, 'src/app', p.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  const code = generatePageCode(p);
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), code, 'utf8');
  console.log(`Generated page: ${dirPath}/page.tsx`);
}

console.log('All 4 Round 19 pages successfully generated!');
