const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-alps-trekking-mountain-resort-stay',
    title: '日本アルプス＆高山トレッキング山岳リゾート宿×ふるさと納税完全ガイド【2026年最新】上高地・白馬・立山の雲上ホテル',
    desc: '日本屈指の山岳美！北アルプスの神降ちる地・上高地、白馬山麓の絶景テラス温泉リゾート、立山黒部アルペンルートの雲上ホテル。高山植物と満天の星空に抱かれる爽快マウンテンステイを楽天ふるさと納税宿泊クーポンでお得に予約する完全ガイド。',
    h1: '日本アルプス＆高山トレッキング山岳リゾート宿×ふるさと納税ガイド',
    badge: '日本アルプス・山岳リゾート特集',
    leadTitle: '神々が宿る峰々と澄み渡る蒼空。標高1,500m〜2,400mの雲上で味わう至高のクラシックリゾート',
    leadDesc: '穂高連峰の険しい岩稜、梓川の清らかなエメラルドグリーン、そして初夏から秋にかけて咲き誇る可憐な高山植物。日本アルプスには、明治以来の伝統を誇る格式高いクラシックホテルや、絶景露天風呂を備えた温泉山岳リゾートが点在しています。トレッキングで心地よい汗を流した後は、澄んだ空気の中で天然温泉に浸かり、信州や富山の山海の幸フレンチ・会席に舌鼓を打つ――そんな極上の山岳休日を楽天ふるさと納税のトラベルクーポンでお得に実現しましょう。',
    merits: [
      {
        title: 'トレッキング拠点直結！早朝の静寂と朝焼けモルゲンロートを独占',
        desc: '日帰り観光客が訪れる前の澄み切った早朝、朝日に赤く染まる山肌「モルゲンロート」を客室のバルコニーやテラスから眺められます。'
      },
      {
        title: '信州牛・安曇野サーモン・富山湾の白えびなど山麓と海の美食会席',
        desc: '清らかな雪解け水で育った地元野菜や高級ブランド和牛、近隣の港から届く新鮮な海の幸を贅沢に味わえます。'
      },
      {
        title: '高地特有の満天の天の川と澄み切った空気でディープリフレッシュ',
        desc: '下界の光が届かない山岳リゾートだからこそ出会える降るような星空。都会の喧騒を離れ、心身のエネルギーを満たすリトリートが叶います。'
      }
    ],
    items: [
      {
        key: 'kamikochi_alps',
        themeTitle: '長野県松本市ふるさと納税：上高地・大正池と河童橋を結ぶ神聖な大自然と格式高き山岳リゾート',
        themeDesc: '特別名勝・特別天然記念物に指定された上高地。穂高連峰の雄姿を仰ぎ、清流梓川のせせらぎを聞きながら過ごす歴史あるリゾートステイ。信州の美食と洗練されたホスピタリティが迎えます。'
      },
      {
        key: 'hakuba_alps',
        themeTitle: '長野県白馬村ふるさと納税：白馬三山パノラマ・絶景マウンテンテラスと良質温泉リゾート',
        themeDesc: '国際的なマウンテンリゾートとして名高い白馬。北アルプスの迫力ある絶景を一望する温泉露天風呂と、地産地消のフレンチや地元食材グリルを堪能できる大人向け隠れ家リゾートです。'
      },
      {
        key: 'tateyama_alps',
        themeTitle: '富山県立山町ふるさと納税：立山黒部アルペンルート・標高2,000m超の雲上ホテル＆みくりが池温泉',
        themeDesc: '残雪の雪の大谷、夏の高山植物、秋の三段紅葉と四季のダイナミズムを体感できる立山。日本最高所の温泉宿や高原ホテルで、雲海の彼方に沈む夕日と星空を心ゆくまで愛でられます。'
      }
    ],
    crossLinks: [
      { title: '高原リゾート＆美食フレンチオーベルジュ×ふるさと納税完全ガイド', url: '/furusato-tax-highland-resort-french-auberge-stay', desc: '那須・清里・裏磐梯の森の休日。' },
      { title: '雲海テラス＆天空パノラマリゾート×ふるさと納税完全ガイド', url: '/furusato-tax-sea-of-clouds-sky-terrace-hotel-stay', desc: 'トマム・志賀高原・蔵王の雲上絶景ホテル。' },
      { title: '秘境・渓谷の一軒宿×ふるさと納税完全ガイド', url: '/furusato-tax-secluded-canyon-isolated-onsen-stay', desc: '黒部峡谷・祖谷・みちのく深山の完全遮断リトリート。' }
    ]
  },
  {
    slug: 'furusato-tax-winery-vineyard-auberge-stay',
    title: '銘酒ワイナリー＆葡萄畑オーベルジュ×ふるさと納税完全ガイド【2026年最新】勝沼・余市・十勝のワインペアリング旅',
    desc: '日本ワインの銘醸地へ！山梨甲州勝沼のぶどう畑ビュー温泉、北海道余市の世界的ワイナリー＆海の幸オーベルジュ、十勝ワイン城とモール温泉リゾート。醸造家こだわりのワインと旬の美食マリアージュを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '銘酒ワイナリー＆葡萄畑オーベルジュ×ふるさと納税ガイド',
    badge: 'ワイナリー・葡萄畑オーベルジュ特集',
    leadTitle: 'テロワールを味わい尽くす贅沢。一面の葡萄畑と極上ワインペアリングに酔いしれる大人の旅',
    leadDesc: '澄んだ青空の下にどこまでも広がる葡萄畑、ひんやりと静まるワインセラーの樽の香り。今、世界的な評価を高めている「日本ワイン」の産地には、畑に隣接したスタイリッシュなオーベルジュや、源泉かけ流し温泉を備えたワイナリーリゾートが注目を集めています。その土地で育ったブドウから生まれたワインと、地元の旬食材を使った料理との完璧なマリアージュを、楽天ふるさと納税の宿泊クーポンでお得に堪能しましょう。',
    merits: [
      {
        title: '希少な限定醸造ワインやヴィンテージワインの専属ソムリエペアリング',
        desc: '市場には出回らないワイナリー直営ならではの特別な一本や樽出し生ワインなど、宿泊者だけが味わえる至高のグラスをディナーとともに楽しめます。'
      },
      {
        title: '葡萄畑の散策やプライベートセラー見学など特別な体験',
        desc: '夕暮れ時に葡萄畑の畝の間を散歩したり、醸造家のこだわりを聞くテイスティングツアーなど、ワイン好きの知的好奇心を刺激するプログラムが豊富です。'
      },
      {
        title: 'ワイン風呂や植物性モール温泉など美容・美肌効果抜群のスパ',
        desc: 'ポリフェノール豊富なワイン粕風呂や、美肌の湯として名高い天然モール温泉など、スパ体験も極上のリラクゼーションを提供します。'
      }
    ],
    items: [
      {
        key: 'katsunuma_wine',
        themeTitle: '山梨県甲州市ふるさと納税：勝沼ぶどう郷・甲州ワイン発祥の丘陵地と石和の名湯リゾート',
        themeDesc: '約30ものワイナリーが集まる日本随一のワイン郷・勝沼。甲龍山や富士山を望む葡萄畑の景観、甲州牛と日本ワインの極上マリアージュ、そして柔らかな美肌温泉に癒やされます。'
      },
      {
        key: 'yoichi_wine',
        themeTitle: '北海道余市町ふるさと納税：世界が称賛する余市ワイン・日本海シーフードと小樽クラシックホテル',
        themeDesc: 'ピノ・ノワールやケルナーなど冷涼な気候が育む極上ワインの聖地・余市。日本海のウニや蝦夷アワビ、後志の恵みをシェフが仕立てる美食ディナーとワインの饗宴です。'
      },
      {
        key: 'tokachi_wine',
        themeTitle: '北海道池田町ふるさと納税：十勝ワイン城の歴史と十勝平野の雄大美・植物性モール温泉の森宿',
        themeDesc: '町営ワイナリーとして半世紀以上の歴史を誇る十勝ワイン。十勝牛のローストビーフとともに重厚な赤ワインを味わい、世界でも珍しい琥珀色のモール温泉でととのう至福の休日です。'
      }
    ],
    crossLinks: [
      { title: '日本酒ペアリング＆酒蔵直結名宿×ふるさと納税完全ガイド', url: '/furusato-tax-sake-brewery-pairing-onsen-stay', desc: '越後湯沢・諏訪・会津の名酒と温泉旅。' },
      { title: 'クラフトビール＆ご当地ブルワリーホテル×ふるさと納税完全ガイド', url: '/furusato-tax-craft-beer-brewery-hotel-stay', desc: '軽井沢・修善寺・小樽の出来立て生ビールと美食ステイ。' },
      { title: '高原リゾート＆美食フレンチオーベルジュ×ふるさと納税完全ガイド', url: '/furusato-tax-highland-resort-french-auberge-stay', desc: '那須・清里・裏磐梯の森の休日。' }
    ]
  },
  {
    slug: 'furusato-tax-scenic-train-torokko-railway-onsen-stay',
    title: '絶景ローカル線＆トロッコ列車めぐり温泉宿×ふるさと納税完全ガイド【2026年最新】わたらせ・大井川SL・只見線の鉄道旅',
    desc: '車窓を流れる日本の原風景！群馬わたらせ渓谷鐵道のオープンデッキトロッコ、静岡大井川鐵道の煙吐くSL蒸気機関車と寸又峡温泉、福島只見線のエメラルド峡谷第一橋梁と奥会津秘湯。鉄道旅情と名湯旅館を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '絶景ローカル線＆トロッコ列車めぐり温泉宿×ふるさと納税ガイド',
    badge: 'ローカル線・SLトロッコ鉄道旅特集',
    leadTitle: 'カタコトと揺れるノスタルジー。渓谷美と鉄道の旅情に浸る大人のレイルウェイ温泉ステイ',
    leadDesc: '渓谷沿いをゆっくりと走るトロッコ列車、窓から吹き込む爽快な風、汽笛を鳴らして茶畑を駆け抜ける蒸気機関車。日本全国のローカル線には、四季折々の絶景と古き良き昭和の風情が色濃く残っています。駅近の便利な名宿や、列車が望める展望露天風呂を備えた温泉旅館を楽天ふるさと納税で予約すれば、乗って・撮って・浸かって癒やされる最高の鉄道旅が実現します。',
    merits: [
      {
        title: '列車の運行時間に合わせてゆったり滞在できるアクセス抜群の宿',
        desc: '始発駅や主要駅の至近、または宿の送迎付きで、時間に追われることなくローカル線の旅を満喫できます。'
      },
      {
        title: 'トレインビュー客室や露天風呂から列車を眺められる特等席',
        desc: 'お部屋でお茶を飲みながら、または湯船に浸かりながら鉄橋を渡る列車の姿を眺める贅沢な瞬間を楽しめます。'
      },
      {
        title: 'ご当地の特急・観光列車チケットとセットで計画的にお得旅行',
        desc: '人気列車の予約に合わせて宿泊日を設定し、3年間有効な楽天ふるさと納税クーポンで宿泊費用を賢くセーブできます。'
      }
    ],
    items: [
      {
        key: 'watarase_train',
        themeTitle: '群馬県みどり市ふるさと納税：わたらせ渓谷鐵道・渡良瀬川の巨岩美を渡るトロッコ列車と梨木温泉',
        themeDesc: '桐生から足尾まで渡良瀬川沿いを走る人気ローカル線。窓ガラスのないオープンタイプのトロッコ列車で風を感じ、山峡の静かな一軒宿で名湯とキジ鍋や上州牛を味わえます。'
      },
      {
        key: 'oigawa_train',
        themeTitle: '静岡県川根本町ふるさと納税：大井川鐵道SL蒸気機関車・アプト式列車と寸又峡美女づくりの湯',
        themeDesc: '日本唯一のアプト式鉄道や毎日走る現役SLで有名な大井川鐵道。エメラルドグリーンの湖に架かる「夢の吊橋」と、とろとろの美容液のような良泉で心身を解きほぐします。'
      },
      {
        key: 'tadamisen_train',
        themeTitle: '福島県三島町ふるさと納税：世界が称賛する秘境路線・JR只見線と奥会津柳津温泉の風情宿',
        themeDesc: '只見川の渓谷美と鉄橋を渡る列車が織りなす絵画のような風景。赤べこ発祥の地・柳津温泉で川魚や山菜、手打ち蕎麦をいただき、静寂に包まれた秘湯を堪能できます。'
      }
    ],
    crossLinks: [
      { title: '秘境・渓谷の一軒宿×ふるさと納税完全ガイド', url: '/furusato-tax-secluded-canyon-isolated-onsen-stay', desc: '黒部峡谷・祖谷・みちのく深山の完全遮断リトリート。' },
      { title: '歴史街道・宿場町めぐり名宿×ふるさと納税完全ガイド', url: '/furusato-tax-historical-kaido-post-town-ryokan-stay', desc: '中山道木曽路（妻籠・馬籠）・日光街道の江戸情緒旅。' },
      { title: '清流アクティビティ＆リバービュー温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-river-activity-canoe-fishing-resort-stay', desc: '長良川・四万十川・保津川の舟旅。' }
    ]
  },
  {
    slug: 'furusato-tax-lighthouse-cliff-ocean-panorama-stay',
    title: '白亜の灯台＆断崖絶景オーシャンビュー宿×ふるさと納税完全ガイド【2026年最新】日御碕・犬吠埼・室戸岬の岬リゾート',
    desc: '大海原と白亜の灯台を望むダイナミックな特等席！島根出雲の日御碕灯台と日本海サンセット露天、千葉銚子の本州一早い日の出を望む犬吠埼温泉、高知室戸岬の太平洋怒濤パノラマ＆海洋深層水スパ。地球の丸さを実感する絶景宿を楽天ふるさと納税でお得に予約するガイド。',
    h1: '白亜の灯台＆断崖絶景オーシャンビュー宿×ふるさと納税ガイド',
    badge: '白亜灯台・断崖絶景パノラマ特集',
    leadTitle: '果てしなく広がる水平線と荒波のシンフォニー。地球の鼓動を五感で感じる岬のオーシャンフロント',
    leadDesc: '青空に凛とそびえ立つ白亜の灯台、足元に打ち寄せる白波、そして視界270度を埋め尽くすどこまでも続く水平線。本州の突端や離島の岬には、自然の壮大さを肌で感じられる特別な宿が存在します。水平線から昇る朝日や、夕暮れ時に海を黄金色に染め上げるマジックアワーを露天風呂から眺める感動は、一生の思い出になります。楽天ふるさと納税のトラベルクーポンでお得に優雅な岬の休日を過ごしましょう。',
    merits: [
      {
        title: '視界を遮るもののない大パノラマ！感動の日の出＆夕日オーシャンビュー',
        desc: '全室オーシャンフロントの客室や断崖の上に張り出した展望露天風呂から、刻一刻と表情を変える海と空のドラマを独占できます。'
      },
      {
        title: '黒潮と親潮が育む獲れたて地魚・伊勢海老・金目鯛の豪快海鮮会席',
        desc: '岬の突端だからこそ味わえる鮮度抜群の海の恵み。銚子の金目鯛、出雲のノドグロ、土佐の一本釣り鰹など、港町直結の味覚を堪能できます。'
      },
      {
        title: '灯台の光が海を照らす幻想的な夜景と潮騒のヒーリングサウンド',
        desc: '夜には灯台のサーチライトが暗闇の海を照らし出すロマンチックな光景。心地よい波音に包まれてぐっすりと眠りにつけます。'
      }
    ],
    items: [
      {
        key: 'hinomisaki_cliff',
        themeTitle: '島根県出雲市ふるさと納税：東洋一の高さを誇る出雲日御碕灯台・日本海の夕日と出雲大社参拝温泉宿',
        themeDesc: '白亜の石造り灯台として東洋一の高さを誇る出雲日御碕灯台。柱状節理の奇岩断崖と茜色に染まる日本海の絶景を眺め、名物のノドグロや出雲そばに舌鼓を打つ神話の岬ステイです。'
      },
      {
        key: 'inubosaki_cliff',
        themeTitle: '千葉県銚子市ふるさと納税：本州一早い初日の出の地・犬吠埼灯台オーシャンビューと銚子つりきんめ会席',
        themeDesc: '三方を海に囲まれた銚子半島の突端・犬吠埼。白亜の灯台を間近に仰ぎ、荒波が砕け散るダイナミックな太平洋を眺めながら、名物「銚子つりきんめ」と天然温泉を満喫できます。'
      },
      {
        key: 'muroto_cliff',
        themeTitle: '高知県室戸市ふるさと納税：世界ジオパーク室戸岬・白亜の灯台と太平洋の怒濤＆海洋深層水リゾート',
        themeDesc: '弘法大師空海が悟りを開いた地として知られる室戸岬。ダイナミックな隆起海岸と白亜の灯台、太平洋を180度見渡すオーシャンフロント温泉で、土佐のカツオや金目鯛を味わうリフレッシュ旅です。'
      }
    ],
    crossLinks: [
      { title: '絶景オーシャンフロント×波音ヒーリングの海宿ふるさと納税完全ガイド', url: '/furusato-tax-oceanfront-wave-sound-healing-stay', desc: '稲取・南房総・読谷村の全室オーシャンビューと潮騒露天。' },
      { title: '絶景夕日・サンセット特等席の海宿×ふるさと納税完全ガイド', url: '/furusato-tax-sunset-ocean-magic-hour-stay', desc: '堂ヶ島・由良・白浜の茜色マジックアワー温泉。' },
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

console.log('All 4 Round 15 pages successfully generated!');
