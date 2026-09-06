const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-terraced-rice-fields-satoyama-onsen-stay',
    title: '絶景棚田＆日本の原風景里山温泉宿×ふるさと納税完全ガイド【2026年最新】星峠・白米千枚田・大山千枚田の休日',
    desc: '日本人の心のふるさと！新潟十日町「星峠の棚田」の水鏡露天風呂、石川輪島「白米千枚田」の日本海夕日パノラマ、千葉鴨川「大山千枚田」の里山癒やしステイ。棚田米と旬の山菜・地魚会席を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '絶景棚田＆日本の原風景里山温泉宿×ふるさと納税ガイド',
    badge: '絶景棚田・里山おこもり特集',
    leadTitle: '幾重にも重なる美しい緑の波と水鏡。大地と人が織りなす日本の原風景に心洗われる滞在',
    leadDesc: '急峻な山の斜面に幾重にも連なる棚田（千枚田）。春の水鏡に映る茜色の空、初夏の爽快な青田波、秋の黄金色に輝く稲穂、そして冬の静寂なる雪化粧。四季折々に息をのむ美しさを見せる棚田の里には、どこか懐かしく温かい里山温泉宿が点在しています。清らかな水と澄んだ空気で育まれた極上の棚田米、摘みたての山菜や地魚料理を味わいながら、日常を離れた静かな時間を楽天ふるさと納税のトラベルクーポンでお得に堪能しましょう。',
    merits: [
      {
        title: '刻一刻と表情を変える棚田の朝霧や夕景をベストタイミングで鑑賞',
        desc: '日帰り観光では見られない、朝霧が立ち込める幻想的な棚田や、夕日に染まる水鏡の絶景を宿からゆったりと鑑賞できます。'
      },
      {
        title: '名水と寒暖差が生む極上の棚田米コシヒカリと里山ご馳走会席',
        desc: '米どころならではの炊きたて銀シャリ、清流のイワナやアユ、滋味あふれる山菜料理など、大地の恵みを五感で味わえます。'
      },
      {
        title: '静寂と鳥の声に包まれる里山リトリートでデジタルデトックス',
        desc: '都会の喧騒や喧騒から完全に遮断された環境で、源泉かけ流しの湯に浸かり、心身の深いととのいを得られます。'
      }
    ],
    items: [
      {
        key: 'matsudai_tanada',
        themeTitle: '新潟県十日町市ふるさと納税：星峠の棚田の水鏡と日本三大薬湯・越後松之山温泉の里山宿',
        themeDesc: 'まるで水墨画のような雲海と棚田が広がる十日町・星峠。太古の化石海水が湧き出る松之山温泉の濃厚な湯に癒やされ、魚沼産コシヒカリの最高峰を堪能する極上の里山ステイです。'
      },
      {
        key: 'noto_tanada',
        themeTitle: '石川県輪島市・能登ふるさと納税：世界農業遺産・白米千枚田の日本海絶景と能登里山名湯旅館',
        themeDesc: '日本海へと雪崩れ落ちるように広がる1004枚の棚田・白米千枚田。夕暮れ時に黄金色に輝く海と棚田のコントラスト、輪島塗の器でいただく能登牛や寒ブリ会席が旅情を誘います。'
      },
      {
        key: 'kamogawa_tanada',
        themeTitle: '千葉県鴨川市ふるさと納税：東京から一番近い棚田・大山千枚田と南房総太平洋オーシャン温泉宿',
        themeDesc: '日本で唯一、雨水のみで耕作される天水田として知られる大山千枚田。青々とした里山の階段風景を散策した後は、南房総の潮風を感じる温泉露天風呂と獲れたて地魚三昧を満喫できます。'
      }
    ],
    crossLinks: [
      { title: '古民家再生・歴史的町家オーベルジュ×文化財ホテル滞在記', url: '/furusato-tax-kominka-heritage-townhouse-auberge-stay', desc: '篠山・飛騨高山・竹田城下の歴史情緒と地産馳走ステイ。' },
      { title: '秘境・渓谷の一軒宿×ふるさと納税完全ガイド', url: '/furusato-tax-secluded-canyon-isolated-onsen-stay', desc: '黒部峡谷・祖谷・みちのく深山の完全遮断リトリート。' },
      { title: '歴史街道・宿場町めぐり名宿×ふるさと納税完全ガイド', url: '/furusato-tax-historical-kaido-post-town-ryokan-stay', desc: '中山道木曽路（妻籠・馬籠）・日光街道の江戸情緒旅。' }
    ]
  },
  {
    slug: 'furusato-tax-spring-water-soba-tofu-onsen-stay',
    title: '名水百選・湧水めぐり＆名水蕎麦豆腐料理の宿×ふるさと納税完全ガイド【2026年最新】忍野八海・安曇野・郡上八幡の名湯',
    desc: '国土の恵み、清冽なる名水の郷へ！世界遺産富士の湧水・山梨忍野八海の手打ち蕎麦宿、北アルプス雪解け湧水・長野安曇野のわさび街道温泉リゾート、名水百選宗祇水・岐阜郡上八幡の天然鮎と名水豆腐。楽天ふるさと納税宿泊クーポンでお得に楽しむ美食水巡りガイド。',
    h1: '名水百選・湧水めぐり＆名水蕎麦豆腐料理の宿×ふるさと納税ガイド',
    badge: '名水百選・手打ち蕎麦・名水豆腐特集',
    leadTitle: '雪解け水が幾重もの地層で磨かれた奇跡の一滴。清冽な名水が引き出す素材の真味と極上湯浴み',
    leadDesc: '澄み切った湧水がこんこんと湧き出る里には、日本の食文化の原点があります。富士の伏流水やアルプスの雪解け水で打つ喉越し抜群の手打ち十割蕎麦、甘み際立つ名水仕込みの自家製豆腐、清流で育つみずみずしい本わさびや天然鮎。素材本来の繊細な旨味を余すところなく引き出す名水の恵みを、水清き里の名湯とともに楽天ふるさと納税の宿泊クーポンでお得に味わい尽くしましょう。',
    merits: [
      {
        title: '名水だからこそ実現する究極の手打ち蕎麦や名水豆腐の朝夕食',
        desc: '水の違いがダイレクトに味へ影響する蕎麦や豆腐。透き通るような名水で仕込んだ繊細で香り高い料理を堪能できます。'
      },
      {
        title: '肌当たり柔らかな天然ミネラル豊富な天然水風呂＆温泉',
        desc: '飲泉も可能なほど清らかな湧水や名湯は、肌への刺激が少なく、湯上がりには驚くほどのしっとり感と爽快感をもたらします。'
      },
      {
        title: '湧水池の清涼な空気と緑豊かな水辺散策で心身を浄化',
        desc: '湧き水が織りなす清流沿いの遊歩道や水車小屋、わさび田を巡り、マイナスイオンに満ちた癒やしの時間を過ごせます。'
      }
    ],
    items: [
      {
        key: 'oshino_water',
        themeTitle: '山梨県忍野村・富士吉田市ふるさと納税：世界遺産富士の伏流水・忍野八海と名水手打ち蕎麦宿',
        themeDesc: '富士山の雪解け水が数十年の歳月をかけて湧き出る忍野八海。吸い込まれそうなコバルトブルーの水深池を巡り、清冽な富士の恵みで打つコシの強い蕎麦と富士山ビュー温泉を満喫できます。'
      },
      {
        key: 'azumino_water',
        themeTitle: '長野県安曇野市ふるさと納税：北アルプス安曇野わさび田湧水群と大王わさび農場・名湯リゾート',
        themeDesc: '一日数十万トンもの雪解け水が湧き出す安曇野。水車小屋と緑豊かなわさび田の風景の中、摺りたての本わさびを添えた名水信州蕎麦と、肌に優しい単純温泉でリフレッシュできます。'
      },
      {
        key: 'gujo_water',
        themeTitle: '岐阜県郡上市ふるさと納税：名水百選第一号「宗祇水」・水の城下町郡上八幡と長良川天然鮎会席',
        themeDesc: '町中に水路が張り巡らされ、せせらぎが響く水の都・郡上八幡。宗祇水のほとりや町家カフェを散策し、郡上の名水で仕込む地酒や郡上天然鮎の塩焼き、極上豆腐料理を味わう風情旅です。'
      }
    ],
    crossLinks: [
      { title: '清流アクティビティ＆リバービュー温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-river-activity-canoe-fishing-resort-stay', desc: '長良川・四万十川・保津川の舟旅。' },
      { title: '高原リゾート＆美食フレンチオーベルジュ×ふるさと納税完全ガイド', url: '/furusato-tax-highland-resort-french-auberge-stay', desc: '那須・清里・裏磐梯の森の休日。' },
      { title: '日本酒ペアリング＆酒蔵直結名宿×ふるさと納税完全ガイド', url: '/furusato-tax-sake-brewery-pairing-onsen-stay', desc: '越後湯沢・諏訪・会津の名酒と温泉旅。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-medicinal-baths-onsen-stay',
    title: '日本三大薬湯＆奇跡の濃厚湯治宿×ふるさと納税完全ガイド【2026年最新】有馬・草津・松之山の名湯治体験',
    desc: '温泉療養の最高峰！兵庫有馬温泉の含鉄強塩泉金泉、群馬草津温泉の強酸性天下の名湯、新潟十日町松之山温泉の太古の化石海水ジオ温泉。数多くの文人や湯治客を癒やし続けてきた「日本三大薬湯」を楽天ふるさと納税宿泊クーポンでお得に巡る完全ガイド。',
    h1: '日本三大薬湯＆奇跡の濃厚湯治宿×ふるさと納税ガイド',
    badge: '日本三大薬湯・本格濃厚湯治特集',
    leadTitle: '五臓六腑に染み渡る大地のエネルギー。古より奇跡の効能と称えられた日本最高峰の薬効ステイ',
    leadDesc: '日本全国に数千ある温泉地の中でも、群を抜く濃厚な有効成分と効能から「日本三大薬湯」と称される有馬温泉・草津温泉・松之山温泉。海水よりも塩分濃度が高く鉄分で赤褐色に染まる有馬の金泉、強力な殺菌力と毎分三万リットルの湧出量を誇る草津の酸性泉、そして太古の海水が地熱で温められた松之山の化石海水ジオ温泉。身体の芯までエネルギーが満ちる本格湯治の旅を、楽天ふるさと納税でお得に体験しましょう。',
    merits: [
      {
        title: '基準値の数十倍！圧倒的な成分含有量を誇るホンモノの名湯',
        desc: '一度浸かれば肌がピリリとする強酸性泉や、湯上がりのポカポカ感が翌朝まで持続する濃厚塩化物泉の圧倒的パワーを体感できます。'
      },
      {
        title: '歴史ある湯畑や外湯めぐり、湯もみ体験など温泉文化を満喫',
        desc: '温泉街の情緒豊かな街歩きや、古くから伝わる湯守の作法・湯治文化に触れることで、心まで洗われる知的好奇心に満ちた滞在が叶います。'
      },
      {
        title: '神戸牛・上州牛・越後魚沼ご当地グルメと地酒の滋味会席',
        desc: '身体を芯から癒やした後は、各名湯の地元が誇る高級ブランド牛や旬の山海の恵みを贅沢に使った会席ディナーに舌鼓を打てます。'
      }
    ],
    items: [
      {
        key: 'kusatsu_yakuto',
        themeTitle: '群馬県草津町ふるさと納税：日本三大名泉・草津温泉の強酸性硫黄泉と湯畑散策名宿',
        themeDesc: 'pH2.1前後の強酸性で驚異の殺菌力を誇る草津温泉。湯けむり立ち上る湯畑を中心に、西の河原露天風呂や老舗旅館の内湯で、昔ながらの時間湯文化と上州牛会席を堪能できます。'
      },
      {
        key: 'arima_yakuto',
        themeTitle: '兵庫県神戸市ふるさと納税：日本最古の名湯・有馬温泉の含鉄強塩泉「金泉」と極上神戸牛宿',
        themeDesc: '深さ約60kmの地殻深くから自噴する有馬の金泉。塩分が肌に皮膜を作って驚異の保温力を誇り、太閤秀吉も愛した歴史情緒と世界最高峰の神戸牛ステーキを心ゆくまで味わえます。'
      },
      {
        key: 'matsunoyama_yakuto',
        themeTitle: '新潟県十日町市ふるさと納税：太古の海水が閉じ込められた奇跡のジオ温泉・松之山温泉と雪国ご馳走宿',
        themeDesc: '約1,200万年前の化石海水が高温で湧き出る松之山温泉。ホウ酸含有量は日本一を誇り、切り傷や美肌に驚異的な効能を発揮。棚田米と越後の山菜・地酒に心満たされる隠れ湯治旅です。'
      }
    ],
    crossLinks: [
      { title: '天然炭酸泉＆シュワシュワ美肌の湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-carbonated-spring-effervescent-onsen-stay', desc: '長湯・下呂・有馬の極上泡風呂。' },
      { title: '日本三大美肌の湯×炭酸水素塩泉・美肌温泉ふるさと納税完全ガイド', url: '/furusato-tax-three-major-bihada-hotspring-stay', desc: '嬉野・喜連川・玉造の名湯治宿。' },
      { title: '秘境・渓谷の一軒宿×ふるさと納税完全ガイド', url: '/furusato-tax-secluded-canyon-isolated-onsen-stay', desc: '黒部峡谷・祖谷・みちのく深山の完全遮断リトリート。' }
    ]
  },
  {
    slug: 'furusato-tax-craft-cider-hop-brewery-stay',
    title: 'クラフトシードル＆ご当地ホップ醸造宿×ふるさと納税完全ガイド【2026年最新】弘前・遠野・南信州飯田の果実酒ステイ',
    desc: 'フレッシュな果実酒とビールの世界！青森弘前りんご王国のクラフトシードル工房、岩手遠野の日本一のホップ畑とクラフトビールビレッジ、長野飯田のリンゴ並木シードル＆天竜川温泉。醸造家こだわりの美酒と郷土フレンチを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: 'クラフトシードル＆ご当地ホップ醸造宿×ふるさと納税ガイド',
    badge: 'クラフトシードル・ホップ醸造所特集',
    leadTitle: 'もぎたて林檎の微発泡酒と香り高い毬花ホップ。大地の恵みを醸すクラフトビバレッジリゾート',
    leadDesc: '澄んだ空気と冷涼な気候が育む芳醇な果実とホップ。日本屈指のリンゴ産地・青森や南信州で造られるフレッシュな「クラフトシードル（林檎微発泡酒）」や、岩手・遠野の豊かなホップ畑から生まれるアロマ豊かなクラフトビール。グラスに注いだ瞬間に立ち上るフレッシュな果実香とホップの苦味、そして地元の旬食材を使ったペアリングディナー。醸造所の息吹を間近に感じる大人のハイセンスな休日を、楽天ふるさと納税でお得に叶えましょう。',
    merits: [
      {
        title: 'できたての生シードルや限定クラフトビールをタップから直接味わう',
        desc: '工房直営だからこそ味わえる、加熱処理をしていないフレッシュな樽生シードルや限定醸造のホップビールを心ゆくまで満喫できます。'
      },
      {
        title: 'リンゴ園やホップ畑を望むテラスでの爽快なペアリングディナー',
        desc: '広大な果樹園やホップ棚の緑を眺めながら、短角牛や信州サーモン、津軽の海の幸と美酒のマリアージュに舌鼓を打てます。'
      },
      {
        title: 'ふるさと納税クーポンで宿泊と工房見学・テイスティングをお得に体験',
        desc: '宿泊費をスマートに節約し、醸造所ツアーやシードルの飲み比べセットなど現地での体験をより贅沢にアップグレードできます。'
      }
    ],
    items: [
      {
        key: 'hirosaki_cider',
        themeTitle: '青森県弘前市・青森ふるさと納税：日本一のりんご王国・弘前シードル工房めぐりと津軽郷土美食ホテル',
        themeDesc: '弘前れんが倉庫美術館をはじめ、シードル醸造所が集まるリンゴの街。爽やかな酸味とキレが際立つできたてシードルを片手に、津軽三味線の音色と青森の海の幸を味わう旅です。'
      },
      {
        key: 'tono_hop',
        themeTitle: '岩手県遠野市・花巻温泉郷ふるさと納税：日本随一のホップの里・遠野ビアツーリズムと名湯宿',
        themeDesc: '国産ホップの約半数を生産する「ホップの里」遠野。夏から秋にかけて緑のカーテンが広がるホップ畑を巡り、遠野ジンギスカンと香り高いビール、花巻温泉郷の美肌湯に癒やされます。'
      },
      {
        key: 'iida_cider',
        themeTitle: '長野県飯田市・南信州ふるさと納税：りんご並木と南信州シードル・天竜川の渓谷美と天然温泉リゾート',
        themeDesc: '標高差が生む高品質なリンゴの産地・南信州。数多くのクラフトシードルワイナリーが点在し、天竜川のダイナミックな川下りや名湯とともに、フルーティーな微発泡酒を堪能できます。'
      }
    ],
    crossLinks: [
      { title: 'クラフトビール＆ご当地ブルワリーホテル×ふるさと納税完全ガイド', url: '/furusato-tax-craft-beer-brewery-hotel-stay', desc: '軽井沢・修善寺・小樽の出来立て生ビールと美食ステイ。' },
      { title: '銘酒ワイナリー＆葡萄畑オーベルジュ×ふるさと納税完全ガイド', url: '/furusato-tax-winery-vineyard-auberge-stay', desc: '勝沼・余市・十勝のワインペアリング旅。' },
      { title: '日本酒ペアリング＆酒蔵直結名宿×ふるさと納税完全ガイド', url: '/furusato-tax-sake-brewery-pairing-onsen-stay', desc: '越後湯沢・諏訪・会津の名酒と温泉旅。' }
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

console.log('All 4 Round 16 pages successfully generated!');
