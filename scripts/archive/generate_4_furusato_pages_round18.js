const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-gorges-canyon-onsen-stay',
    title: '日本三大峡谷＆巨岩奇勝パノラマ露天風呂宿×ふるさと納税完全ガイド【2026年最新】清津峡・黒部峡谷・大杉谷の絶景名湯',
    desc: '日本屈指のスケールを誇るV字渓谷美！新潟十日町「清津峡」の水鏡トンネルと奥清津温泉、富山黒部「黒部峡谷」のトロッコ電車と宇奈月温泉、三重奥伊勢「大杉谷」の原生林秘境温泉リゾート。大自然の造形美と渓谷露天風呂を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大峡谷＆巨岩奇勝パノラマ露天風呂宿×ふるさと納税ガイド',
    badge: '日本三大峡谷・絶景渓谷露天特集',
    leadTitle: '垂直に切り立つ柱状節理とエメラルドグリーンの激流。大地のダイナミズムを間近に感じる峡谷リトリート',
    leadDesc: '何万年もの歳月をかけて清流が岩を削り出した「日本三大峡谷」――新潟の清津峡、富山の黒部峡谷、三重の大杉谷。天を突く断崖絶壁、轟音とともに流れ落ちる名瀑、そしてエメラルドグリーンに輝く深い淵。圧倒的な大自然のパノラマを、客室のテラスやせり出す露天風呂から眺める贅沢は唯一無二です。マイナスイオンを全身に浴びながら美肌の湯に浸かり、山里の恵みを味わう感動の旅を楽天ふるさと納税のトラベルクーポンでお得に体験しましょう。',
    merits: [
      {
        title: '垂直の断崖を眼前に望む渓谷展望露天風呂で野趣あふれる湯浴み',
        desc: '川のせせらぎや岩肌を間近に感じながら湯船に身を沈める至福の時間。新緑や紅葉、雪景色と季節ごとの絶景が広がります。'
      },
      {
        title: '岩魚や鮎の塩焼き・山菜・ご当地銘柄牛など滋味あふれる渓谷会席',
        desc: '清流で育った川魚の炭火焼き、山深い里で採れる旬の山菜やキノコ、厳選されたブランド和牛を地酒とともに堪能できます。'
      },
      {
        title: 'トロッコ列車やハイキングと組み合わせたアクティブな自然旅',
        desc: '黒部峡谷鉄道や清津峡渓谷トンネルなど人気観光スポットへのアクセス抜群。ふるさと納税クーポンで交通費と宿泊をお得に両立できます。'
      }
    ],
    items: [
      {
        key: 'kiyotsu_gorge',
        themeTitle: '新潟県十日町市ふるさと納税：国の名勝天然記念物・清津峡の水鏡パノラマと奥清津の秘湯一軒宿',
        themeDesc: '巨大な柱状節理の岩肌がV字型に迫る清津峡。「大地の芸術祭」で世界的名所となった水鏡トンネルを鑑賞し、川沿いの秘湯・清津峡温泉で魚沼産コシヒカリと山里会席を満喫できます。'
      },
      {
        key: 'kurobe_gorge',
        themeTitle: '富山県黒部市ふるさと納税：日本一深いV字峡谷・黒部峡谷トロッコ電車と名湯宇奈月温泉',
        themeDesc: 'トロッコ電車で秘境の奥へと分け入る黒部峡谷の玄関口・宇奈月温泉。無色透明で日本屈指の透明度を誇る弱アルカリ性美肌温泉に浸かり、富山湾のキトキト鮮魚と名峰黒部の恵みを味わえます。'
      },
      {
        key: 'osugidani_gorge',
        themeTitle: '三重県大台町ふるさと納税：近畿の秘境・ユネスコエコパーク大杉谷と清流宮川の奥伊勢フォレストリゾート',
        themeDesc: '原生林と幾重もの名瀑が連なる秘境・大杉谷。国土交通省の水質調査で日本一に何度も輝いた清流宮川のせせらぎを聞きながら、天然温泉とフレンチ・会席に癒やされる隠れ家ステイです。'
      }
    ],
    crossLinks: [
      { title: '秘境・渓谷の一軒宿×ふるさと納税完全ガイド', url: '/furusato-tax-secluded-canyon-isolated-onsen-stay', desc: '黒部峡谷・祖谷・みちのく深山の完全遮断リトリート。' },
      { title: '清流渓谷＆名瀑ヒーリング温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-waterfall-river-gorge-healing-onsen-stay', desc: '奥入瀬渓流・天城湯ヶ島・作変温泉の滝見露天宿。' },
      { title: '紅葉渓谷＆錦秋の絶景露天風呂宿×ふるさと納税完全ガイド', url: '/furusato-tax-autumn-foliage-gorge-onsen-stay', desc: '定山渓・奥日光・嵐山の錦秋名湯ステイ。' }
    ]
  },
  {
    slug: 'furusato-tax-kuroge-wagyu-teppanyaki-luxury-stay',
    title: '最高級黒毛和牛ステーキ＆鉄板焼きカウンター宿×ふるさと納税完全ガイド【2026年最新】松阪牛・近江牛・米沢牛の美食ホテル',
    desc: 'シェフの華麗な手さばきと極上肉の香り！三重松阪牛のA5サーロイン鉄板焼き、滋賀おごと温泉の日本三大和牛近江牛ステーキ、山形米沢牛の極上フィレ肉ディナー。目の前で焼き上がる音と芳醇な肉汁を名湯とともに楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '最高級黒毛和牛ステーキ＆鉄板焼きカウンター宿×ふるさと納税ガイド',
    badge: '黒毛和牛鉄板焼き・美食カウンター特集',
    leadTitle: 'ジュワッと響く至高の音と立ち上る芳香。専属シェフが目の前で焼き上げる極上黒毛和牛ステイ',
    leadDesc: '日本三大和牛と称される「松阪牛」「近江牛」「米沢牛」。きめ細やかなサシ（霜降り）が美しく入り、低温で溶け出す上品な脂の甘みと赤身の深い旨味。客室付きのプライベートダイニングや、臨場感あふれる鉄板焼きカウンターで、シェフが絶妙な火入れで仕立てる最高級ステーキは記念日や特別な旅の主役にふさわしい贅沢です。名湯に浸かって日々の疲れを癒やし、極上の黒毛和牛コースに舌鼓を打つ夢のようなひとときを楽天ふるさと納税でお得に実現しましょう。',
    merits: [
      {
        title: '五感で味わう鉄板焼きカウンター！焼き立て熱々の瞬間を堪能',
        desc: 'フランベの炎、芳醇なガーリックと肉の香り、ナイフを入れた瞬間にあふれ出す肉汁を目の前で楽しむエンターテインメントディナー。'
      },
      {
        title: 'A5ランク厳選部位のサーロイン・シャトーブリアン食べ比べ',
        desc: '宿自慢の仕入れルートだからこそ味わえる希少部位や熟成肉。海鮮グリルや地元契約農家の旬野菜とともに贅を尽くせます。'
      },
      {
        title: 'ふるさと納税宿泊クーポンで憧れの高級鉄板焼きプランへ賢くアップグレード',
        desc: '寄附額の最大30%がクーポンとして還元されるため、通常プランから鉄板焼きカウンター指定コースへ無理なくグレードアップできます。'
      }
    ],
    items: [
      {
        key: 'matsusaka_wagyu',
        themeTitle: '三重県松阪市・湯の山温泉ふるさと納税：「肉の芸術品」松阪牛A5ランクサーロイン鉄板焼きと名湯の宿',
        themeDesc: '深みのある赤身と上質な脂肪が織りなす「松阪牛」。職人が鉄板で香ばしく焼き上げ、伊勢湾の鮑や伊勢海老とともに味わう至高の晩餐。御在所岳を望む湯の山温泉の美肌湯に癒やされます。'
      },
      {
        key: 'omi_wagyu',
        themeTitle: '滋賀県大津市・長浜太閤温泉ふるさと納税：日本最古のブランド牛「近江牛」の極上鉄板ステーキと琵琶湖畔リゾート',
        themeDesc: '約400年の歴史を誇る近江牛。融点が低く滑らかな肉質を、琵琶湖のレイクビューを望む鉄板焼きカウンターで満喫。太閤秀吉ゆかりの名湯とともに優雅な夜を過ごせます。'
      },
      {
        key: 'yonezawa_wagyu',
        themeTitle: '山形県米沢市・小野川温泉ふるさと納税：寒暖差が育む究極の霜降り「米沢牛」フィレステーキと美人の湯宿',
        themeDesc: '盆地特有の厳しい気候が極上の肉質を育てる米沢牛。箸で切れるほど柔らかい極上フィレステーキと、小野小町ゆかりの含硫黄ナトリウム塩化物泉で心身がとろける美食湯治ステイです。'
      }
    ],
    crossLinks: [
      { title: '銘柄豚・極上しゃぶしゃぶ料理の名湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-brand-pork-shabu-gourmet-stay', desc: '鹿児島黒豚・平田牧場金華豚・那須高原豚の美食旅。' },
      { title: 'ブランド地鶏・水炊き・軍鶏料理の名湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-brand-jidori-mizutaki-gourmet-stay', desc: '比内地鶏・土佐ジロー・黒さつま鶏の美食宿。' },
      { title: '日本酒ペアリング＆酒蔵直結名宿×ふるさと納税完全ガイド', url: '/furusato-tax-sake-brewery-pairing-onsen-stay', desc: '越後湯沢・諏訪・会津の名酒と温泉旅。' }
    ]
  },
  {
    slug: 'furusato-tax-japan-oldest-classic-hotel-heritage-stay',
    title: '日本最古のクラシックリゾートホテル×ふるさと納税完全ガイド【2026年最新】日光金谷・箱根富士屋・雲仙観光ホテルの洋館ステイ',
    desc: '明治・大正の薫り漂う登録有形文化財！現存日本最古のリゾート「日光金谷ホテル」、アインシュタインやチャップリンも愛した「箱根宮ノ下富士屋ホテル」、日本初国立公園の洋館「雲仙観光ホテル」。歴史的建築美と伝統フレンチを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本最古のクラシックリゾートホテル×ふるさと納税ガイド',
    badge: '名門クラシックホテル・登録有形文化財特集',
    leadTitle: '時を超えて受け継がれる美と品格。文人や世界のVIPを魅了したクラシックホテルの物語',
    leadDesc: '木の温もりを感じる重厚な回転扉、職人技が光る精緻な彫刻、そして歴史を刻んだ飴色の階段。明治から昭和初期にかけて、日本の迎賓館として誕生したクラシックリゾートホテルには、現代のモダンホテルでは決して味わえない気品と温もりが息づいています。代々の料理長が守り続けてきた伝統の西洋料理、アンティーク家具に囲まれたバーラウンジ、そして上質な温泉。知的好奇心を刺激する上質なタイムトラベルを、楽天ふるさと納税のトラベルクーポンでお得に叶えましょう。',
    merits: [
      {
        title: '登録有形文化財や近代化産業遺産に泊まる特別な文化体験',
        desc: '東洋と西洋の建築美が融合した唯一無二の空間。館内ツアーや歴史展示室で、ホテルの歩んできた豊かなストーリーに触れられます。'
      },
      {
        title: '歴代のVIPをもてなしてきた伝統のシグネチャー西洋料理',
        desc: '名物のコンソメスープ、虹鱒のソテー、代々受け継がれるビーフカレーなど、伝統と革新が融合したクラシックディナーを堪能できます。'
      },
      {
        title: 'ふるさと納税で歴史ある憧れの名門ホテルをお得にリザーブ',
        desc: '一度は泊まりたい名建築ホテル。有効期限3年間の楽天ふるさと納税クーポンを使えば、結婚記念日や節目のお祝い旅行にも最適です。'
      }
    ],
    items: [
      {
        key: 'nikko_kanaya',
        themeTitle: '栃木県日光市ふるさと納税：現存する日本最古のリゾートホテル「日光金谷ホテル」と世界遺産日光東照宮',
        themeDesc: '明治6年創業。ヘレン・ケラーやアインシュタインも宿泊した歴史の殿堂。日光東照宮の彫刻を模した社寺風の意匠と、名物「百年ライスカレー」や虹鱒料理を味わうクラシカルな休日です。'
      },
      {
        key: 'hakone_fujiya',
        themeTitle: '神奈川県箱根町ふるさと納税：明治11年創業・箱根宮ノ下のシンボル「富士屋ホテル」と宮ノ下温泉',
        themeDesc: '数寄屋風の屋根に洋風の内装が調和する箱根富士屋ホテル。広大な日本庭園の散策、源泉かけ流しの温泉、そしてメインダイニング「ザ・フジヤ」の格調高きフレンチに酔いしれる滞在です。'
      },
      {
        key: 'unzen_kanko',
        themeTitle: '長崎県雲仙市ふるさと納税：日本初の国立公園に誕生したスイス山小屋風「雲仙観光ホテル」と白濁硫黄泉',
        themeDesc: '昭和10年創業。手斧削りの梁やアールデコ調のステンドグラスが美しい洋館。硫黄の香る雲仙地獄の名湯に浸かり、長崎の豊かな海山の幸フレンチを味わう大人の隠れ家リゾートです。'
      }
    ],
    crossLinks: [
      { title: '登録有形文化財・宮大工名建築旅館×ふるさと納税完全ガイド', url: '/furusato-tax-tangible-cultural-property-architectural-ryokan-stay', desc: '修善寺新井旅館・渋温泉金具屋・箱根環翠楼の歴史宿。' },
      { title: '文豪の愛した名湯・文学ゆかりの老舗旅館×ふるさと納税完全ガイド', url: '/furusato-tax-literary-heritage-historic-onsen-stay', desc: '城崎・伊豆湯ヶ島・道後の文芸宿。' },
      { title: '古民家再生・歴史的町家オーベルジュ×文化財ホテル滞在記', url: '/furusato-tax-kominka-heritage-townhouse-auberge-stay', desc: '篠山・飛騨高山・竹田城下の歴史情緒と地産馳走ステイ。' }
    ]
  },
  {
    slug: 'furusato-tax-rias-coast-ise-ebi-abalone-ocean-stay',
    title: '夕映えリアス式海岸＆伊勢海老・鮑料理の海宿×ふるさと納税完全ガイド【2026年最新】志摩英虞湾・南三陸・伊根の舟屋の贅沢旅',
    desc: '日本屈指の入江美と海の幸！三重志摩「英虞湾」の夕映え多島美と本場伊勢海老・鮑づくし会席、宮城「南三陸」のリアス海岸インフィニティ露天風呂と鮑踊り焼き、京都「伊根の舟屋」の海に浮かぶ重要伝統建築ステイ。楽天ふるさと納税宿泊クーポンでお得に楽しむオーシャンガイド。',
    h1: '夕映えリアス式海岸＆伊勢海老・鮑料理の海宿×ふるさと納税ガイド',
    badge: 'リアス式海岸・伊勢海老鮑特集',
    leadTitle: '幾重にも入り組んだ青い入江と茜色の夕景。海の王者・伊勢海老と鮑を味わい尽くす海浜ステイ',
    leadDesc: '波穏やかな入江と複雑な岬が織りなすリアス海岸。真珠筏が浮かぶ三重の英虞湾、ダイナミックな断崖と太平洋が広がる三陸海岸、そして海の上に直接家が建ち並ぶ京都伊根の舟屋。リアス式海岸の豊かな海は、栄養豊富なプランクトンを育み、伊勢海老や肉厚の天然鮑など最高峰の海の幸をもたらします。夕暮れ時に海一面が黄金色に染まるマジックアワーを露天風呂から眺め、豪快な海鮮会席に舌鼓を打つ極上の旅を、楽天ふるさと納税でお得に実現しましょう。',
    merits: [
      {
        title: '伊勢海老のお造り・鬼殻焼きや天然鮑の踊り焼きなど豪華海鮮会席',
        desc: '水揚げ直後の活きた伊勢海老のプリプリとした甘み、肉厚な鮑のジューシーな旨味を余すところなく堪能できます。'
      },
      {
        title: '穏やかな入江に沈む夕日と多島美パノラマ露天風呂',
        desc: '外海の荒波が遮られたリアス海岸ならではの鏡のような水面。茜色に染まる夕暮れ時の絶景を湯船から心ゆくまで愛でられます。'
      },
      {
        title: 'クルージングや真珠取り出し体験など海と一体になるアクティビティ',
        desc: '英虞湾遊覧船や伊根湾の海上タクシーなど、海側からしか見られない壮大な景観を楽しむ特別な体験が揃っています。'
      }
    ],
    items: [
      {
        key: 'shima_rias',
        themeTitle: '三重県志摩市ふるさと納税：真珠の海・英虞湾の多島美パノラマと本場伊勢海老・志摩温泉リゾート',
        themeDesc: '約60の島々が浮かぶリアス海岸の代表格・英虞湾。夕暮れ時に黄金色に輝く海を望む展望露天風呂と、三重ブランドの伊勢海老・的矢かき・松阪牛会席を味わう洗練のリゾートステイです。'
      },
      {
        key: 'sanriku_rias',
        themeTitle: '宮城県南三陸町ふるさと納税：三陸リアス海岸インフィニティ露天風呂と南三陸名物「活鮑の踊り焼き」',
        themeDesc: '太平洋の大海原とリアス海岸の岬が眼前に迫る絶景宿。海と一体化するインフィニティ露天風呂で波音に包まれ、志津川名物の活アワビ踊り焼きやウニ、フカヒレを堪能できます。'
      },
      {
        key: 'ine_rias',
        themeTitle: '京都府伊根町・丹後ふるさと納税：日本で最も海に近い町「伊根の舟屋」と丹後名物海の幸会席',
        themeDesc: '1階が船のガレージ、2階が居住空間となった舟屋が約230軒連なる伊根湾。まるで海に浮かんでいるかのような非日常の空間で、朝獲れの伊根マグロや岩がき、地魚会席を満喫できます。'
      }
    ],
    crossLinks: [
      { title: '絶景オーシャンフロント×波音ヒーリングの海宿ふるさと納税完全ガイド', url: '/furusato-tax-oceanfront-wave-sound-healing-stay', desc: '稲取・南房総・読谷村の全室オーシャンビューと潮騒露天。' },
      { title: '日本三景の絶景オーシャンビュー宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-scenic-views-heritage-stay', desc: '松島・天橋立・宮島の名門旅館。' },
      { title: '海鮮浜焼き・港町朝市めぐり直結宿×ふるさと納税完全ガイド', url: '/furusato-tax-morning-market-hamayaki-seafood-inn-stay', desc: '八戸・沼津・高知の獲れたて市場グルメと浜焼き。' }
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

console.log('All 4 Round 18 pages successfully generated!');
