const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-illuminations-resort-stay',
    title: '日本三大イルミネーション直結リゾートホテル×ふるさと納税完全ガイド【2026年最新】あしかが・ハウステンボス・さっぽろ光のステイ',
    desc: '日本屈指の光の祭典！栃木「あしかがフラワーパーク」光の花の庭、長崎「ハウステンボス」世界最大1,300万球のイルミネーション直営リゾート、北海道「さっぽろホワイトイルミネーション」大通公園ビューホテル。冬の夜空を彩る幻想的な光の世界を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大イルミネーション直結リゾートホテル×ふるさと納税ガイド',
    badge: '日本三大イルミネーション・光のリゾート特集',
    leadTitle: '数百万から一千万球を超える光の海。寒さを忘れるほど幻想的なナイトエンターテインメントステイ',
    leadDesc: '夜の闇を鮮やかに染め上げる幾千万もの光の粒。夜景鑑賞士が選ぶ「日本三大イルミネーション」――栃木のあしかがフラワーパーク、長崎のハウステンボス、北海道のさっぽろホワイトイルミネーション。藤棚を再現した奇跡の光のトンネル、中世ヨーロッパの街並み全体が光り輝く王国、そして白雪とオブジェが織りなす北国のファンタジー。会場直結や無料送迎付きの快適ホテルを楽天ふるさと納税で予約すれば、冷えた身体を天然温泉で温めながら最高峰の光の芸術を心ゆくまで堪能できます。',
    merits: [
      {
        title: '会場直結・徒歩圏内！閉園ギリギリまで光の世界をゆっくり鑑賞',
        desc: '混雑する帰りの交通機関を気にせず、点灯の瞬間から消灯まで幻想的なイルミネーションをゆったりと満喫できます。'
      },
      {
        title: '冷え切った身体を芯から温める天然温泉＆展望サウナ完備',
        desc: '冬の夜風で冷えた身体を、宿自慢の天然温泉露天風呂やサウナでじっくりと温め、極上のととのいとリラクゼーションを得られます。'
      },
      {
        title: 'パスポート付きプランや優先入場特典などふるさと納税でお得に活用',
        desc: '宿泊代を最大30%オフのふるさと納税クーポンでセーブし、園内アトラクションやディナークルーズを豪華にアップグレードできます。'
      }
    ],
    items: [
      {
        key: 'ashikaga_illumi',
        themeTitle: '栃木県足利市ふるさと納税：500万球の奇跡「あしかがフラワーパーク 光の花の庭」と美肌温泉ステイ',
        themeDesc: '名木「奇跡の大藤」をはじめ園内全体が百花繚乱の光で埋め尽くされる足利。幻想的な藤棚イルミネーションに息をのんだ後は、天然温泉ホテルで足利シュウマイや佐野ラーメンなどご当地の味覚を楽しめます。'
      },
      {
        key: 'huistenbosch_illumi',
        themeTitle: '長崎県佐世保市ふるさと納税：世界最大1300万球「ハウステンボス光の王国」とオフィシャルホテル＆天然温泉',
        themeDesc: 'ヨーロッパの街並みがそのまま光のキャンバスとなるハウステンボス。運河を流れる光の噴水ショーや巨大観覧車からの絶景パノラマを堪能し、パーク直営ホテルの極上フレンチと天然温泉に憩う至福の休日です。'
      },
      {
        key: 'sapporo_illumi',
        themeTitle: '北海道札幌市ふるさと納税：雪と光が織りなす「さっぽろホワイトイルミネーション」と大通公園展望ホテル',
        themeDesc: '日本最初のイルミネーションとして昭和56年に始まった歴史ある祭典。大通公園の銀世界に輝く光のオブジェを眺め、北の味覚・毛ガニやジンギスカン、札幌味噌ラーメンに舌鼓を打つ極上の冬旅です。'
      }
    ],
    crossLinks: [
      { title: '日本三大夜景＆天空スカイラウンジホテル×ふるさと納税完全ガイド', url: '/furusato-tax-three-major-night-view-luxury-hotel-stay', desc: '長崎・神戸・函館の1000万ドル夜景ステイ。' },
      { title: '冬の南国ぽかぽか避寒旅×ふるさと納税完全ガイド', url: '/winter-warm-island-escape', desc: '沖縄・奄美・南紀白浜の常夏リゾート。' },
      { title: '日本三大星空・天体観測リゾート×ふるさと納税完全ガイド', url: '/furusato-tax-starry-sky-astronomy-retreat-stay', desc: '阿智村・八ヶ岳清里・鳥取大山の満天星空リゾート。' }
    ]
  },
  {
    slug: 'furusato-tax-kue-gourmet-luxury-fish-stay',
    title: '天然クエ鍋＆幻の高級魚グルメ宿×ふるさと納税完全ガイド【2026年最新】南紀白浜・長崎五島・高知室戸の本クエ会席',
    desc: '冬の味覚の王様・海のダイヤ！和歌山南紀白浜の「天然本クエ鍋」と白良浜オーシャン温泉、長崎五島列島の荒波で育った極上クエ薄造りリゾート、高知室戸の黒潮クエ会席＆海洋深層水スパ。ゼラチン質たっぷりの濃厚な旨味を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '天然クエ鍋＆幻の高級魚グルメ宿×ふるさと納税ガイド',
    badge: '天然クエ鍋・幻の高級魚特集',
    leadTitle: '「クエを食ったら他の魚は食えん」。透き通る白身と濃厚な脂が織りなす究極の冬の味覚',
    leadDesc: '深海の岩礁に潜み、一本釣りでしか獲れないことから「幻の高級魚」と呼ばれるクエ。上品で淡白な白身でありながら、皮と身の間のゼラチン質にはコラーゲンと濃厚な旨味が凝縮されています。フグよりも美味と称されるクエの薄造り、骨から出汁を取った黄金色のクエ鍋、香ばしいカブト焼き。本場・紀州や長崎五島、土佐の老舗名湯宿で味わう本物の味覚を、楽天ふるさと納税のトラベルクーポンでお得に堪能しましょう。',
    merits: [
      {
        title: '天然本クエならではの極上の脂のりとゼラチン質の深いコク',
        desc: '養殖とは一線を画す天然モノの引き締まった身質。コラーゲンたっぷりで翌朝の肌のハリにも嬉しい至高の海の恵み。'
      },
      {
        title: '薄造り・鍋・唐揚げ・雑炊まで余すところなく味わい尽くすフルコース',
        desc: '職人が熟練の技で薄造りに仕立てたプリプリの食感と、濃厚な出汁が米の一粒一粒に染み渡る〆のクエ雑炊はまさに絶品。'
      },
      {
        title: 'ふるさと納税クーポンで高価格なクエ特選プランを実質自己負担2,000円で予約',
        desc: '1人前数万円にもなる最高級天然クエ会席を、寄附上限額の範囲内で賢くお得に味わえるのがふるさと納税最大の醍醐味です。'
      }
    ],
    items: [
      {
        key: 'shirahama_kue',
        themeTitle: '和歌山県白浜町ふるさと納税：紀州本場「天然本クエづくし会席」と日本三古湯・南紀白浜温泉オーシャン宿',
        themeDesc: '本州屈指のクエの水揚げを誇る南紀白浜。太平洋の黒潮が育んだ丸々と太った天然クエを特製ポン酢で味わい、万葉の昔から湧き出る白浜温泉の塩化物泉で温まる冬の最高峰グルメ旅です。'
      },
      {
        key: 'goto_kue',
        themeTitle: '長崎県五島市・新上五島ふるさと納税：東シナ海の荒波が鍛えた絶品「五島産天然アラ（クエ）」と離島リゾート',
        themeDesc: '九州で「アラ」と呼ばれる幻の魚・クエの宝庫である五島列島。透明度の高い海を望むリゾートホテルで、五島うどんとともにいただく本クエ鍋や椿油を使った創作料理に舌鼓を打てます。'
      },
      {
        key: 'muroto_kue',
        themeTitle: '高知県室戸市・高知ふるさと納税：太平洋の一本釣り天然クエと土佐の銘酒・老舗割烹旅館',
        themeDesc: '室戸沖の急峻な深海から一本釣りされる天然クエ。豪快な土佐の皿鉢料理とともに味わうクエの薄造りや塩焼き、辛口の土佐地酒とのマリアージュに心奪われる美食ステイです。'
      }
    ],
    crossLinks: [
      { title: '海鮮浜焼き・港町朝市めぐり直結宿×ふるさと納税完全ガイド', url: '/furusato-tax-morning-market-hamayaki-seafood-inn-stay', desc: '八戸・沼津・高知の獲れたて市場グルメと浜焼き。' },
      { title: '夕映えリアス式海岸＆伊勢海老・鮑料理の海宿×ふるさと納税完全ガイド', url: '/furusato-tax-rias-coast-ise-ebi-abalone-ocean-stay', desc: '志摩英虞湾・南三陸・伊根の舟屋の贅沢旅。' },
      { title: '絶景オーシャンフロント×波音ヒーリングの海宿ふるさと納税完全ガイド', url: '/furusato-tax-oceanfront-wave-sound-healing-stay', desc: '稲取・南房総・読谷村の全室オーシャンビューと潮騒露天。' }
    ]
  },
  {
    slug: 'furusato-tax-three-famous-bridges-heritage-stay',
    title: '日本三名橋＆歴史遺産を望むリバーサイド名宿×ふるさと納税完全ガイド【2026年最新】岩国錦帯橋・長崎眼鏡橋・東京日本橋の風情旅',
    desc: '日本の土木建築美の最高峰！山口岩国「錦帯橋」の五連木造アーチと錦川清流温泉宿、長崎「眼鏡橋」の中島川散策と南蛮情緒クラシックホテル、東京「日本橋」の五街道起点と江戸情緒ラグジュアリーステイ。名橋の景観と伝統の美食を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三名橋＆歴史遺産を望むリバーサイド名宿×ふるさと納税ガイド',
    badge: '日本三名橋・歴史リバーサイド特集',
    leadTitle: '悠久の歴史を繋ぐ美しいアーチと水面のきらめき。日本の土木美と伝統美を愛でる大人の旅',
    leadDesc: '江戸時代以来の高度な匠の技術が息づく「日本三名橋」――山口岩国の錦帯橋、長崎の眼鏡橋、東京の日本橋。釘を使わずに組み上げられた木造五連アーチ、水面に映る円が美しい日本最古の石造二連アーチ、そして日本の道路網の起点となる荘厳な石造二連アーチ。水辺に佇む名橋を客室やテラスから眺め、城下町や宿場町として栄えた歴史情緒に浸る贅沢。周辺の老舗旅館や上質なシティホテルを楽天ふるさと納税の宿泊クーポンでお得に訪れてみませんか。',
    merits: [
      {
        title: '客室の窓やリバーサイドテラスから名橋のライトアップを独占',
        desc: '夕暮れから夜にかけて光で浮かび上がる名橋のシルエット。水面に反射する光のアートをお部屋からゆっくりと鑑賞できます。'
      },
      {
        title: '岩国寿司・長崎卓袱料理・江戸前寿司など名橋の街が誇る伝統美食',
        desc: '歴史ある橋の袂で発展した名物料理。見た目も華やかな押し寿司や異国情緒あふれる郷土会席を地酒とともに味わえます。'
      },
      {
        title: '城下町やレトロな石畳散策など風情ある街歩きに最適な好立地',
        desc: '宿を一歩出れば名橋と情緒ある川沿いの並木道。早朝や夕暮れの清々しい時間帯に人混みを避けて散策できます。'
      }
    ],
    items: [
      {
        key: 'kintaikyo_bridge',
        themeTitle: '山口県岩国市ふるさと納税：五連の木造アーチ橋「錦帯橋」と清流錦川を望む名門料理旅館',
        themeDesc: '延宝元年に創建された世界的木造橋・錦帯橋。春の桜、夏の鵜飼、秋の紅葉、冬の雪景色と四季折々の美しさを誇り、名物の郷土料理「岩国寿司」や鮎料理、良質な天然温泉を堪能できます。'
      },
      {
        key: 'meganebashi_bridge',
        themeTitle: '長崎県長崎市ふるさと納税：日本最古のアーチ式石橋「長崎眼鏡橋」と中島川沿いの南蛮クラシックホテル',
        themeDesc: '寛永11年に架設された国指定重要文化財・眼鏡橋。ハートストーン探しを楽しみながら、南蛮貿易の歴史が息づく長崎の街を巡り、新鮮な地魚会席や卓袱料理、夜景を満喫する歴史旅です。'
      },
      {
        key: 'nihonbashi_bridge',
        themeTitle: '東京都中央区ふるさと納税：五街道の起点・石造二連アーチ「日本橋」と老舗名店が軒を連ねる江戸ラグジュアリー',
        themeDesc: '慶長8年に架けられた日本橋。橋詰の青銅麒麟像や格調高き石造りの景観を間近に感じ、日本橋三越や老舗鰻・蕎麦・江戸前寿司の名店めぐりを楽しむ洗練された都心ステイです。'
      }
    ],
    crossLinks: [
      { title: '国宝天守・城下町キャッスルビュー名門宿×ふるさと納税完全ガイド', url: '/furusato-tax-national-treasure-castle-view-luxury-stay', desc: '姫路城・松本城・彦根城の歴史旅。' },
      { title: '日本三名園＆大名庭園を望む老舗旅館×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gardens-heritage-stay', desc: '兼六園・後楽園・偕楽園の庭園美ステイ。' },
      { title: '登録有形文化財・宮大工名建築旅館×ふるさと納税完全ガイド', url: '/furusato-tax-tangible-cultural-property-architectural-ryokan-stay', desc: '修善寺新井旅館・渋温泉金具屋・箱根環翠楼の歴史宿。' }
    ]
  },
  {
    slug: 'furusato-tax-open-air-bath-with-majestic-fuji-view-stay',
    title: '富士山ビュー客室露天風呂宿×ふるさと納税完全ガイド【2026年最新】河口湖・日本平・箱根芦ノ湖の霊峰一望リゾート',
    desc: '日本人の心のシンボル・富士山を独占！山梨富士河口湖の「逆さ富士」客室露天風呂宿、静岡日本平山頂から富士山と駿河湾を見晴らすパノラマリゾート、神奈川箱根芦ノ湖の海賊船と霊峰一望温泉。四季折々の富士の雄姿を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '富士山ビュー客室露天風呂宿×ふるさと納税ガイド',
    badge: '富士山ビュー客室露天・パノラマ特集',
    leadTitle: '湯船から仰ぎ見る霊峰の神々しいシルエット。生涯忘れられない感動の富士絶景ステイ',
    leadDesc: '世界文化遺産に登録され、古来より人々を魅了し続ける日本の最高峰・富士山。朝日に照らされて赤く輝く「赤富士」、穏やかな湖面に映り込む「逆さ富士」、そして夕暮れのシルエット。客室の専用露天風呂に身を沈め、さえぎるもののない大パノラマで富士山を独占する時間は、まさに極上の贅沢です。甲州ワイン牛や駿河湾の海の幸を味わいながら、特別な記念日やご褒美旅行を楽天ふるさと納税でお得に実現しましょう。',
    merits: [
      {
        title: '誰にも邪魔されず好きな時に富士山を眺めながら入浴できる客室露天',
        desc: '湯気越しに広がる雄大な富士の裾野。朝・昼・夕・夜と刻一刻と表情を変える霊峰をプライベート空間からゆったりと愛でられます。'
      },
      {
        title: '甲州牛・駿河湾の桜えびや金目鯛・相模湾の地魚など豪華な美食会席',
        desc: '富士山麓の清らかな水と気候が育む最高級のブランド和牛や新鮮な海の幸を、シェフこだわりのコースで堪能できます。'
      },
      {
        title: 'ふるさと納税宿泊クーポンで予約困難な富士山ビュー客室を優先リザーブ',
        desc: '1年中人気が集中する富士山フロント客室。3年間有効な楽天ふるさと納税クーポンを活用して、ベストシーズンを賢く確保できます。'
      }
    ],
    items: [
      {
        key: 'kawaguchiko_fuji',
        themeTitle: '山梨県富士河口湖町ふるさと納税：湖越しに望む「逆さ富士」・河口湖温泉の客室露天風呂と甲州牛ステーキ宿',
        themeDesc: '富士五湖の中でも随一の富士山ビュースポット・河口湖。波穏やかな湖面に映る逆さ富士を望む客室露天風呂に浸かり、甲州ワインとともに柔らかくジューシーな甲州牛会席を味わえます。'
      },
      {
        key: 'nihondaira_fuji',
        themeTitle: '静岡県静岡市ふるさと納税：名勝日本平山頂・富士山と駿河湾を見下ろすパノラマビューリゾート',
        themeDesc: '標高307mの丘陵地・日本平。富士山を正面に捉え、眼下に駿河湾と三保松原を見下ろす圧倒的な視界。駿河湾の由比産桜えびや近海マグロを味わい、洗練されたホテルステイを楽しめます。'
      },
      {
        key: 'hakone_fuji',
        themeTitle: '神奈川県箱根町ふるさと納税：芦ノ湖の鳥居と富士山の絶景コントラスト・箱根名湯露天宿',
        themeDesc: '箱根神社の平和の鳥居と芦ノ湖の向こうにそびえる富士山。箱根十七湯の良質な自家源泉に浸かり、四季の移ろいを感じる本格懐石料理に舌鼓を打つ伝統のリゾートステイです。'
      }
    ],
    crossLinks: [
      { title: '絶景富士山ビュー露天風呂宿×ふるさと納税完全ガイド', url: '/furusato-tax-fuji-view-onsen-resort-stay', desc: '河口湖・山中湖・日本平の霊峰一望リゾート。' },
      { title: '日本アルプス＆高山トレッキング山岳リゾート宿×ふるさと納税完全ガイド', url: '/furusato-tax-alps-trekking-mountain-resort-stay', desc: '上高地・白馬・立山の雲上ホテル。' },
      { title: '天空の露天風呂付きグランピング＆星空ドーム×ふるさと納税完全ガイド', url: '/furusato-tax-sky-open-air-glamping-resort-stay', desc: '富士山・阿蘇・那須の高級アウトドア宿。' }
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

console.log('All 4 Round 20 pages successfully generated!');
