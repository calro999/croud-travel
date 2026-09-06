const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-carbonated-spring-effervescent-onsen-stay',
    title: '天然炭酸泉＆シュワシュワ美肌の湯宿×ふるさと納税完全ガイド【2026年最新】長湯・下呂・有馬の極上泡風呂',
    desc: '日本屈指の高濃度炭酸泉！大分長湯温泉のラムネ風呂、岐阜下呂奥座敷の炭酸源泉、兵庫有馬温泉の銀の湯炭酸泉。肌にびっしり気泡がつく血行促進・冷え性改善の名湯旅館を楽天ふるさと納税宿泊クーポンでお得に予約する完全ガイド。',
    h1: '天然炭酸泉＆シュワシュワ美肌の湯宿×ふるさと納税ガイド',
    badge: '天然炭酸泉・発泡美肌湯特集',
    leadTitle: '全身を包み込む炭酸ガスの微細な泡。芯から温まり血流を促す奇跡の天然スパ体験',
    leadDesc: 'お湯に浸かった瞬間、肌に無数の微細な銀の泡が付着する「天然炭酸泉（二酸化炭素泉）」。炭酸ガスが皮膚から吸収されることで血管を広げ、低温でも驚くほど身体の芯からポカポカと温まり、美肌や疲労回復に抜群の効果を発揮します。日本でもごく限られた地域でしか湧出しない貴重な高濃度炭酸泉の宿を、楽天ふるさと納税のトラベルクーポンでお得に賢く訪れてみませんか。',
    merits: [
      {
        title: '希少な天然自噴の炭酸泉で究極の血行促進＆美肌リセット',
        desc: '人工炭酸泉とは一線を画す天然ミネラル豊富な炭酸源泉。湯上がりの肌のなめらかさと持続する保温感は格別です。'
      },
      {
        title: '低温の炭酸泉と温かい温泉を交互に楽しむ温冷交互浴',
        desc: '30度台前半のぬる湯炭酸泉と高温の天然温泉を交互に浸かることで、自律神経が整い深いリラクゼーションが得られます。'
      },
      {
        title: '大分豊後牛・飛騨牛・神戸牛などご当地最高級ブランド牛会席',
        desc: '名湯の地が誇る日本最高峰のブランド和牛と、清らかな水で育まれた山里の幸・川魚会席を地酒と堪能できます。'
      }
    ],
    items: [
      {
        key: 'nagayu_carbonated',
        themeTitle: '大分県竹田市ふるさと納税：長湯温泉・日本一の炭酸泉「ラムネ温泉館」と芹川渓谷の名宿',
        themeDesc: '世界屈指の炭酸ガス含有量を誇る竹田市・長湯温泉。「飲んで効き 浸かって効く」と称えられる名湯で、シュワシュワと肌を包む気泡と大分の大自然を満喫できます。'
      },
      {
        key: 'gero_carbonated',
        themeTitle: '岐阜県下呂市ふるさと納税：下呂温泉奥座敷・湯屋温泉の自噴天然炭酸泉と飛騨牛づくし会席',
        themeDesc: '名湯下呂の奥に位置する湯屋温泉。飲泉所も備えるシュワシュワの炭酸泉で炊いた温泉粥や名物鉱泉鍋など、身体の内外から炭酸パワーを享受できる秘湯宿です。'
      },
      {
        key: 'yokawa_carbonated',
        themeTitle: '兵庫県神戸市ふるさと納税：有馬温泉・太閤秀吉ゆかりの銀の湯炭酸泉と極上神戸牛ステーキ',
        themeDesc: '日本三古湯・有馬温泉。鉄分と塩分を含む金泉とともに愛される無色透明の「銀の湯」炭酸泉に浸かり、洗練された有馬温泉街の散策と極上の神戸牛ディナーを味わえます。'
      }
    ],
    crossLinks: [
      { title: '日本三大美肌の湯×炭酸水素塩泉・美肌温泉ふるさと納税完全ガイド', url: '/furusato-tax-three-major-bihada-hotspring-stay', desc: '嬉野・喜連川・玉造の名湯治宿。' },
      { title: '清流渓谷＆名瀑ヒーリング温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-waterfall-river-gorge-healing-onsen-stay', desc: '奥入瀬渓流・天城湯ヶ島・作並温泉の滝見露天宿。' },
      { title: '秘境・渓谷の一軒宿×ふるさと納税完全ガイド', url: '/furusato-tax-secluded-canyon-isolated-onsen-stay', desc: '黒部峡谷・祖谷・みちのく深山の完全遮断リトリート。' }
    ]
  },
  {
    slug: 'furusato-tax-river-activity-canoe-fishing-resort-stay',
    title: '清流アクティビティ＆リバービュー温泉宿×ふるさと納税完全ガイド【2026年最新】長良川・四万十川・保津川の舟旅',
    desc: '日本が誇る清流で楽しむカヌー・ラフティング・伝統舟下り！岐阜長良川の鵜飼鑑賞、高知四万十川のSUP＆沈下橋めぐり、京都保津川のダイナミック渓谷下り。川魚の女王・天然鮎会席とリバーサイド名宿を楽天ふるさと納税でお得に予約する旅ガイド。',
    h1: '清流アクティビティ＆リバービュー温泉宿×ふるさと納税ガイド',
    badge: '清流アクティビティ・川床リバー宿特集',
    leadTitle: 'せせらぎを聞き、透き通る水面と戯れる。自然と調和する水辺のヒーリングリゾート',
    leadDesc: '滔々と流れる清流のきらめき、緑豊かな山峡を吹き抜ける心地よい川風。カヌーやSUP、ラフティングで水と一体となり、伝統の鵜飼舟や渓谷下りで悠久の歴史情緒に浸るリバーアクティビティは、日常のストレスを洗い流してくれます。川沿いに佇む風情ある温泉旅館やリゾートホテルを楽天ふるさと納税で予約すれば、旬の天然鮎や川魚料理とともに至福の休日を過ごせます。',
    merits: [
      {
        title: 'リバービュー客室や川風そよぐ露天風呂でせせらぎに癒やされる',
        desc: '窓一面に広がる穏やかな川の流れを眺めながら過ごす静寂の時間。夜には川面に映るかがり火や月明かりが幻想的な世界へ誘います。'
      },
      {
        title: '天然鮎の塩焼きやうるか・川エビなど清流ならではの郷土美食',
        desc: '澄んだ水で育った天然鮎の香ばしい炭火塩焼き、滋味あふれる川魚会席、山菜料理など、水清き里ならではの馳走を堪能できます。'
      },
      {
        title: '舟下り乗船券付きプランやカヌー体験とセットでふるさと納税活用',
        desc: '宿泊だけでなく周辺の伝統アクティビティや観光と組み合わせ、ふるさと納税宿泊クーポンでトータルの旅行費用を賢く節約できます。'
      }
    ],
    items: [
      {
        key: 'nagaragawa_river',
        themeTitle: '岐阜県岐阜市ふるさと納税：名水百選・長良川温泉・1300年の伝統「長良川鵜飼」と天然鮎会席',
        themeDesc: '金華山と岐阜城を仰ぐ長良川畔。赤褐色の鉄分豊かな長良川温泉に浸かり、夏の夕暮れにはかがり火揺れる鵜飼鑑賞舟へ。風情あふれる川湊の旅情を満喫できます。'
      },
      {
        key: 'shimanto_river',
        themeTitle: '高知県四万十市ふるさと納税：日本最後の清流・四万十川のカヌー体験と沈下橋を巡る南国ステイ',
        themeDesc: '大自然の原風景が残る四万十川。エメラルドグリーンの水面をカヌーや屋形船で進み、名物の天然鰻、四万十川の青のり、郷土皿鉢料理に舌鼓を打つ極上旅です。'
      },
      {
        key: 'hozugawa_river',
        themeTitle: '京都府亀岡市ふるさと納税：保津川下り渓谷舟下りの起点・湯の花温泉の静寂と丹波の馳走',
        themeDesc: '亀岡から嵐山まで約16kmの巨岩渓谷を船頭の巧みな竿さばきで下る保津川下り。爽快な舟旅の後は、山峡に湧く湯の花温泉で丹波牛や京野菜の会席を味わえます。'
      }
    ],
    crossLinks: [
      { title: '清流川床料理＆避暑せせらぎ名宿×ふるさと納税完全ガイド', url: '/furusato-tax-riverside-kawadoko-cooling-inn-stay', desc: '京都貴船・四万十川・越後岩室の涼風ステイ。' },
      { title: '絶景サイクリング＆海沿いサイクリスト温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-cycling-shimanami-lake-resort-stay', desc: 'しまなみ海道・尾道・琵琶湖ビワイチの絶景リゾート。' },
      { title: '紅葉渓谷＆錦秋の絶景露天風呂宿×ふるさと納税完全ガイド', url: '/furusato-tax-autumn-foliage-gorge-onsen-stay', desc: '定山渓・奥日光・嵐山の錦秋名湯ステイ。' }
    ]
  },
  {
    slug: 'furusato-tax-sweets-cafe-wagashi-retro-onsen-stay',
    title: '銘菓・和カフェ＆老舗スイーツめぐり温泉宿×ふるさと納税完全ガイド【2026年最新】金沢・小布施・伊勢の甘味旅',
    desc: '女子旅やご褒美旅行に大人気！金沢ひがし茶屋街の金箔ソフト＆抹茶和菓子、長野小布施の焼き栗・モンブラン名店めぐり、三重伊勢おはらい町の赤福・伊勢うどん食べ歩き。歴史ある街並みの名湯旅館を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '銘菓・和カフェ＆老舗スイーツめぐり温泉宿×ふるさと納税ガイド',
    badge: '銘菓・和カフェ・老舗甘味特集',
    leadTitle: '歴史ある小京都や門前町で味わう伝統の甘味。心を満たす極上スイーツ＆温泉ステイ',
    leadDesc: '城下町や宿場町、大社の門前町には、何百年もの歴史を誇る老舗和菓子店や、町家をリノベーションしたモダンな和カフェが軒を連ねています。絞りたての濃厚栗モンブラン、職人技が光る上生菓子とお抹茶、できたてのお餅スイーツ。散策で甘美な時間を楽しんだ後は、街歩きの拠点となる上質な温泉宿でゆったりと癒やされる――そんな心華やぐ休日を楽天ふるさと納税でお得に叶えましょう。',
    merits: [
      {
        title: '人気カフェや老舗甘味処まで徒歩圏内の便利な好立地宿を厳選',
        desc: '朝の開店直後や混雑を避けた夕暮れ時など、宿泊者ならではのゆとりあるスケジュールで話題のスイーツを堪能できます。'
      },
      {
        title: '宿のおもてなしにも地元の銘菓や本格抹茶サービスが充実',
        desc: 'チェックイン時のお茶請けから夕食後のデザートまで、地域の銘菓文化を感じられる特別なスイーツ体験が待っています。'
      },
      {
        title: 'ふるさと納税で宿泊費を抑えてお土産やカフェ巡りを贅沢に',
        desc: '宿泊クーポンで宿泊代を最大30%節約できるため、浮いた予算で老舗の高級和菓子やご当地スイーツのお土産をたっぷり購入できます。'
      }
    ],
    items: [
      {
        key: 'kanazawa_sweets',
        themeTitle: '石川県金沢市ふるさと納税：ひがし茶屋街・主計町茶屋街の金箔甘味と伝統加賀菓子の城下町宿',
        themeDesc: '京都と並び称される茶の湯と和菓子の都・金沢。出格子の町家カフェで味わう金箔アイスやお薄、老舗菓匠の上生菓子めぐりを楽しみ、加賀の美食と美肌湯に憩う旅です。'
      },
      {
        key: 'obuse_sweets',
        themeTitle: '長野県小布施町ふるさと納税：栗の小径と北斎の郷・名物「小布施栗モンブラン」と信州山里温泉',
        themeDesc: '江戸時代より将軍家への献上栗として知られる小布施栗。名店「小布施堂」の朱雀モンブランや栗鹿ノ子を味わい、栗の木レンガが敷かれた風情ある街並みを巡る贅沢ステイです。'
      },
      {
        key: 'ise_sweets',
        themeTitle: '三重県伊勢市ふるさと納税：伊勢神宮おはらい町・おかげ横丁の赤福本店名物餅と参拝温泉宿',
        themeDesc: '五十鈴川のほとりに広がるおはらい町。作りたての柔らかい赤福餅や抹茶ソフト、へんば餅などを食べ歩き、お伊勢参りの後は伊勢湾の海の幸と良泉で身を清める聖地旅です。'
      }
    ],
    items_fallback: [],
    crossLinks: [
      { title: '古民家再生・歴史的町家オーベルジュ×文化財ホテル滞在記', url: '/furusato-tax-kominka-heritage-townhouse-auberge-stay', desc: '篠山・飛騨高山・竹田城下の歴史情緒と地産馳走ステイ。' },
      { title: '歴史街道・宿場町めぐり名宿×ふるさと納税完全ガイド', url: '/furusato-tax-historical-kaido-post-town-ryokan-stay', desc: '中山道木曽路（妻籠・馬籠）・日光街道の江戸情緒旅。' },
      { title: 'お伊勢参り＆熊野古道×聖地巡礼・門前宿ガイド', url: '/furusato-tax-ise-kumano-sacred-power-spot-stay', desc: '伊勢神宮・熊野三山・出雲大社の祈願ステイ。' }
    ]
  },
  {
    slug: 'furusato-tax-national-treasure-castle-view-luxury-stay',
    title: '国宝天守・城下町キャッスルビュー名門宿×ふるさと納税完全ガイド【2026年最新】姫路城・松本城・彦根城の歴史旅',
    desc: '客室から国宝天守を一望する贅沢！世界遺産・姫路城（白鷺城）のライトアップパノラマ、北アルプスを背負う漆黒の松本城下町ホテル、琵琶湖畔に聳える彦根城直結名門リゾート。戦国ロマンと武家文化を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '国宝天守・城下町キャッスルビュー名門宿×ふるさと納税ガイド',
    badge: '国宝城郭・キャッスルビュー特集',
    leadTitle: '歴史の鼓動と荘厳な天守閣を客室から望む。日本人の美意識を刺激する城下町ラグジュアリー',
    leadDesc: '幾多の戦乱や震災を乗り越え、江戸時代以前の天守がそのまま現存する「国宝五城」。白鷺が羽を広げたような姫路城の白壁、北アルプスの山並みに映える松本城の黒漆、そして琵琶湖と彦根山にそびえる彦根城。昼の雄姿はもちろん、夜の幻想的な天守ライトアップを客室のバルコニーやバーラウンジから独占する時間は、歴史ファンならずとも息をのむ至高のひとときです。楽天ふるさと納税のトラベルクーポンでお得に優雅な歴史旅へ出かけましょう。',
    merits: [
      {
        title: 'ライトアップされた国宝天守を客室や展望ラウンジから独占鑑賞',
        desc: '観光客で賑わう昼間とは一変し、夜空に浮かび上がる神秘的な名城のシルエットを、ワインを傾けながら心ゆくまで眺められます。'
      },
      {
        title: '城下町ならではの武家文化・伝統工芸とおもてなしの心',
        desc: '江戸時代の町割りが残る城下町の路地散策、武家屋敷の意匠を取り入れた格式高いロビーなど、歴史ロマンに満ちた滞在が叶います。'
      },
      {
        title: '播州名物穴子・信州蕎麦や信州サーモン・近江牛の極上会席',
        desc: '城下町として栄えた地だからこそ発展した洗練された料理文化。各地域を代表する最高峰の食材を銘酒とともに堪能できます。'
      }
    ],
    items: [
      {
        key: 'himeji_castle',
        themeTitle: '兵庫県姫路市ふるさと納税：世界遺産・国宝姫路城を望む展望ビューホテルと播州旬鮮グルメ',
        themeDesc: '白漆喰総塗籠造の美しき白鷺城・姫路城。天守閣を正面に捉えるキャッスルビュー客室でのステイ、瀬戸内海の地魚や播州播磨の地酒を味わう特別な時間をお届けします。'
      },
      {
        key: 'matsumoto_castle',
        themeTitle: '長野県松本市ふるさと納税：五重六階の現存最古天守・国宝松本城下町と美ヶ原温泉の名門宿',
        themeDesc: '漆黒の天守とアルプスの残雪のコントラストが美しい松本城。中町通りの蔵造りの街並み散策や信州牛会席、美ヶ原温泉の湯守宿で城下町の情緒に浸れます。'
      },
      {
        key: 'hikone_castle',
        themeTitle: '滋賀県彦根市ふるさと納税：国宝彦根城と琵琶湖を望む名園リゾートホテル＆近江牛すき焼き会席',
        themeDesc: '井伊家三十五万石の居城・彦根城。名勝「玄宮園」の緑と天守閣を間近に望み、日本三大和牛・近江牛のすき焼きや湖魚料理を堪能する格式高いリゾート滞在です。'
      }
    ],
    crossLinks: [
      { title: '日本三名園＆大名庭園を望む老舗旅館×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gardens-heritage-stay', desc: '兼六園・後楽園・偕楽園の四季折々の庭園美を愛でる歴史宿。' },
      { title: '登録有形文化財・宮大工名建築旅館×ふるさと納税完全ガイド', url: '/furusato-tax-tangible-cultural-property-architectural-ryokan-stay', desc: '修善寺新井旅館・渋温泉金具屋・箱根環翠楼の歴史宿。' },
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

console.log('All 4 Round 14 pages successfully generated!');
