const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-scenic-views-heritage-stay',
    title: '日本三景の絶景オーシャンビュー宿×ふるさと納税完全ガイド【2026年最新】松島・天橋立・安芸の宮島の名門旅館',
    desc: '日本三景（松島・天橋立・宮島）を望む特等席の老舗旅館＆絶景ホテル！松島湾の多島美露天風呂、天橋立の白砂青松パノラマ、嚴島神社大鳥居の潮満ちる夜景。楽天ふるさと納税宿泊クーポンを活用して贅沢にお得ステイする完全ガイド。',
    h1: '日本三景の絶景オーシャンビュー宿×ふるさと納税ガイド',
    badge: '日本三景・絶景オーシャンビュー特集',
    leadTitle: '古の旅人たちを魅了し続けた日本の原風景。神聖なる三名勝を客室や露天風呂から独占する至高の滞在',
    leadDesc: '江戸時代の儒学者・林春斎が『日本国事跡考』に記した「日本三景」――宮城の松島、京都の天橋立、広島の宮島。何百年もの間、日本人の美意識の象徴として愛され続けた絶景を、客室のテラスや源泉かけ流しの露天風呂から眺める贅沢は他では味わえません。楽天ふるさと納税を活用すれば、ハイシーズンでも最大30%オフのトラベルクーポン（返礼率上限適応）でお得に予約可能です。',
    merits: [
      {
        title: '世界遺産・国指定特別名勝の特等席ビューを客室から独占',
        desc: '松島湾に浮かぶ260余の島々、天橋立のダイナミックな砂嘴、宮島の大鳥居が海に浮かぶ荘厳な景観を、混雑を避けてプライベート空間からゆったり堪能できます。'
      },
      {
        title: '三陸の牡蠣・丹後の旬魚・広島名物牡蠣と穴子を味わう名門会席',
        desc: '日本三景の地はいずれも名だたる漁場に面した美食の宝庫。朝獲れの海の幸、銘柄牛、伝統の郷土料理を地酒とともに味わい尽くせます。'
      },
      {
        title: '3年間有効な楽天ふるさと納税宿泊クーポンで計画的に予約',
        desc: '寄附の翌日には付与され、有効期間3年で予約可能。桜の春、新緑の初夏、紅葉の秋、雪景色の冬など、好みのベストシーズンに合わせて自由に宿泊できます。'
      }
    ],
    items: [
      {
        key: 'matsushima_view',
        themeTitle: '宮城県松島町ふるさと納税：松島湾パノラマ露天風呂と三陸の極上海鮮を味わう海浜名宿',
        themeDesc: '芭蕉も言葉を失ったとされる松島の美景。朝日が昇る松島湾の多島美を展望露天風呂から愛で、夕食には三陸の鮑、カキ、仙台牛を堪能できる贅沢な滞在です。'
      },
      {
        key: 'amanohashidate_view',
        themeTitle: '京都府宮津市ふるさと納税：天橋立の白砂青松を眼下に望む老舗名湯旅館と丹後の海の恵み',
        themeDesc: '天に架かる橋の如く伸びる約3.6kmの砂嘴。神話の息づく宮津湾の絶景と、美肌効果抜群の天橋立温泉、松葉ガニや丹後とり貝など極上の海の幸が旅人を迎えます。'
      },
      {
        key: 'miyajima_view',
        themeTitle: '広島県廿日市市ふるさと納税：世界遺産嚴島神社・大鳥居を望む歴史の島・宮島のおもてなし宿',
        themeDesc: '島全体が神の宿る地として崇められてきた宮島。潮の干満で姿を変える大鳥居のライトアップや瀬戸内海を望み、名物の穴子飯や広島牛に舌鼓を打つ雅な時間です。'
      }
    ],
    crossLinks: [
      { title: '日本三名園＆大名庭園を望む老舗旅館×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gardens-heritage-stay', desc: '兼六園・後楽園・偕楽園の四季折々の庭園美を愛でる歴史宿。' },
      { title: '絶景オーシャンフロント×波音ヒーリングの海宿ふるさと納税完全ガイド', url: '/furusato-tax-oceanfront-wave-sound-healing-stay', desc: '稲取・南房総・読谷村の全室オーシャンビューと潮騒露天。' },
      { title: 'お伊勢参り＆熊野古道×聖地巡礼・門前宿ガイド', url: '/furusato-tax-ise-kumano-sacred-power-spot-stay', desc: '伊勢神宮・熊野三山・出雲大社の祈願ステイ。' }
    ]
  },
  {
    slug: 'furusato-tax-diving-ocean-resort-stay',
    title: '海中展望＆ダイビング・シュノーケリング直結リゾート×ふるさと納税完全ガイド【2026年最新】恩納村・串本・西伊豆のマリンホテル',
    desc: '透明度抜群の海へ直行！沖縄恩納村の青の洞窟、和歌山串本の本州最南端テーブルサンゴ礁、静岡西伊豆のダイビングポイントに隣接したオーシャンリゾート。機材洗い場や温水シャワー完備、オーシャンビュー客室と新鮮海の幸を楽天ふるさと納税でお得に予約するガイド。',
    h1: '海中展望＆ダイビング・シュノーケリング直結リゾート×ふるさと納税ガイド',
    badge: '海中展望・ダイビングマリン特集',
    leadTitle: 'エメラルドグリーンの水中世界へダイブ。マリンアクティビティと温泉海鮮を両立する究極の海辺リゾート',
    leadDesc: 'カラフルな熱帯魚が群れ泳ぐサンゴ礁、神秘的な青の洞窟、そしてダイナミックな海中地形。日本全国の屈指のマリンスポットには、ダイビングやシュノーケリングに最適化された快適なリゾートホテルが点在しています。専用機材洗い場やボート出航港へのアクセス抜群の拠点を楽天ふるさと納税の宿泊クーポンで予約すれば、アクティビティ後の疲れを天然温泉や絶品海鮮会席で極上にリフレッシュできます。',
    merits: [
      {
        title: 'ビーチ直結・マリーナ至近でスムーズなエントリーが可能',
        desc: '重い器材を運ぶストレスなく、ホテルから直行で海へアクセス。ダイビングショップ提携や専用器材ロッカー完備の施設も多く、ストレスフリーに海を楽しめます。'
      },
      {
        title: '潜った後の冷えた身体を温める天然温泉＆サウナ完備',
        desc: '海から上がった後は、潮風を感じる展望露天風呂やサウナで芯まで温まり、心地よい疲労感をディープなリラクゼーションへと昇華させます。'
      },
      {
        title: '獲れたて伊勢海老・地魚のお造りなど豪華なディナー',
        desc: '海辺の宿ならではの醍醐味である活きの良い海の幸会席。沖縄のアグー豚＆泡盛、南紀のクエ・ケンケン鰹、伊豆の金目鯛など地域ごとのご馳走が待っています。'
      }
    ],
    items: [
      {
        key: 'onna_diving',
        themeTitle: '沖縄県恩納村ふるさと納税：青の洞窟・真栄田岬至近！エメラルドビーチ直結のラグジュアリーリゾート',
        themeDesc: '沖縄本島屈指の透明度を誇る恩納村海岸。ボートダイビングやSUP、シュノーケリングの拠点として最高峰の立地を誇り、夕暮れ時には東シナ海に沈むサンセットを一望できます。'
      },
      {
        key: 'kushimoto_diving',
        themeTitle: '和歌山県串本町ふるさと納税：本州最南端のサンゴ群生地！串本海域公園の海中景観と太平洋一望の温泉宿',
        themeDesc: '黒潮が直接ぶつかる串本の海は、本州屈指の温かさと世界北限のテーブルサンゴ群落を誇るダイバーの聖地。ダイナミックな海中遊泳の後は海沿いの名湯で癒やされます。'
      },
      {
        key: 'nishiizu_diving',
        themeTitle: '静岡県西伊豆ふるさと納税：大瀬崎・黄金崎の澄んだ駿河湾ブルーと名峰富士を望む海辺の温泉名宿',
        themeDesc: '日本屈指のダイビングメッカ大瀬崎や黄金崎。波穏やかで透明度の高い海で潜った後は、駿河湾越しに望む夕日と獲れたて地魚料理を堪能する大人の贅沢ステイです。'
      }
    ],
    crossLinks: [
      { title: '絶景インフィニティ温泉×海空一体パノラマ露天宿', url: '/furusato-tax-infinity-onsen-sky-ocean-view-stay', desc: '熱海・南紀白浜・指宿の海と空に溶け込む湯守宿。' },
      { title: '絶景夕日・サンセット特等席の海宿×ふるさと納税完全ガイド', url: '/furusato-tax-sunset-ocean-magic-hour-stay', desc: '堂ヶ島・由良・白浜の茜色マジックアワー温泉。' },
      { title: '海鮮浜焼き・港町朝市めぐり直結宿×ふるさと納税完全ガイド', url: '/furusato-tax-morning-market-hamayaki-seafood-inn-stay', desc: '八戸・沼津・高知の獲れたて市場グルメと浜焼き。' }
    ]
  },
  {
    slug: 'furusato-tax-literary-heritage-historic-onsen-stay',
    title: '文豪の愛した名湯・文学ゆかりの老舗旅館×ふるさと納税完全ガイド【2026年最新】城崎・伊豆湯ヶ島・道後の文芸宿',
    desc: '志賀直哉『城の崎にて』の城崎温泉、川端康成『伊豆の踊子』執筆の天城湯ヶ島温泉、夏目漱石『坊っちゃん』の道後温泉。近代文学の巨匠たちが逗留し名作を紡いだ歴史的宿で、外湯めぐりと上質な会席料理を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '文豪の愛した名湯・文学ゆかりの老舗旅館×ふるさと納税ガイド',
    badge: '文豪ゆかりの名湯・文学宿特集',
    leadTitle: '物語が生まれた書斎と湯の香。歴史と美意識が交差するクラシックな和の真髄を旅する',
    leadDesc: '志賀直哉、川端康成、夏目漱石、泉鏡花、島崎藤村――明治から昭和にかけての名だたる文豪たちは、心身を癒やし執筆の筆を進めるため、全国の名湯宿に長期滞在しました。彼らが愛した客室、庭園のせせらぎ、そして変わらぬ良泉。ただ泊まるだけでなく、日本の文化史・文学史の息吹を五感で追体験できる特別な宿ステイを、楽天ふるさと納税のトラベルクーポンでお得に実現しましょう。',
    merits: [
      {
        title: '文豪直筆の書やゆかりの調度品が息づく歴史的空間で過ごす時間',
        desc: '文豪が執筆に使用した机や展示室、登録有形文化財に指定された意匠など、まるで博物館や文学館に泊まっているかのような知的好奇心を満たす滞在が叶います。'
      },
      {
        title: '浴衣姿で歩く風情ある温泉街と伝統の湯巡り体験',
        desc: '柳並木の太鼓橋が美しい城崎の外湯めぐりや、坊っちゃん湯で知られる道後本館の風情。昔ながらの日本の湯治情緒を味わえます。'
      },
      {
        title: '但馬牛・伊豆の山海の幸・伊予の鯛めしなど文豪も舌鼓を打った郷土会席',
        desc: 'その土地の旬の食材を最も美味しく仕立てる伝統の和会席。滋味深く上品な味わいが旅の夜を豊かに彩ります。'
      }
    ],
    items: [
      {
        key: 'kinosaki_literary',
        themeTitle: '兵庫県豊岡市ふるさと納税：志賀直哉『城の崎にて』の舞台・七つの外湯めぐりと但馬牛老舗旅館',
        themeDesc: '大正2年に志賀直哉が逗留し、不朽の名作『城の崎にて』を執筆した城崎温泉。大谿川沿いの柳並木をカランコロンと下駄を鳴らして歩く外湯めぐりと、冬の松葉ガニ・但馬牛が自慢です。'
      },
      {
        key: 'yugashima_literary',
        themeTitle: '静岡県伊豆市ふるさと納税：川端康成『伊豆の踊子』執筆の地・天城越えの狩野川渓谷温泉宿',
        themeDesc: 'ノーベル文学賞作家・川端康成が青春時代に逗留した湯ヶ島温泉。天城の豊かな原生林と狩野川の清流に包まれ、巨石や巨木を配した野趣あふれる秘湯で文芸の薫りに浸れます。'
      },
      {
        key: 'dogo_literary',
        themeTitle: '愛媛県松山市ふるさと納税：夏目漱石『坊っちゃん』の道後温泉・3000年の古湯と伊予の伝統美を紡ぐ名宿',
        themeDesc: '日本三古湯の一つ、道後温泉。夏目漱石や正岡子規が愛した道後温泉本館を中心に、伊予絣や砥部焼の器でいただく鯛めし・瀬戸内の幸など、洗練されたおもてなしを堪能できます。'
      }
    ],
    crossLinks: [
      { title: '登録有形文化財・宮大工名建築旅館×ふるさと納税完全ガイド', url: '/furusato-tax-tangible-cultural-property-architectural-ryokan-stay', desc: '修善寺新井旅館・渋温泉金具屋・箱根環翠楼の歴史宿。' },
      { title: '古民家再生・歴史的町家オーベルジュ×文化財ホテル滞在記', url: '/furusato-tax-kominka-heritage-townhouse-auberge-stay', desc: '篠山・飛騨高山・竹田城下の歴史情緒と地産馳走ステイ。' },
      { title: '歴史街道・宿場町めぐり名宿×ふるさと納税完全ガイド', url: '/furusato-tax-historical-kaido-post-town-ryokan-stay', desc: '中山道木曽路（妻籠・馬籠）・日光街道の江戸情緒旅。' }
    ]
  },
  {
    slug: 'furusato-tax-sky-open-air-glamping-resort-stay',
    title: '天空の露天風呂付きグランピング＆星空ドーム×ふるさと納税完全ガイド【2026年最新】富士山・阿蘇・那須の高級アウトドア宿',
    desc: '大自然に抱かれながらホテル並みの贅沢を！富士山パノラマビューの星空ドームテント、阿蘇外輪山の大自然カルデラ温泉グランピング、那須高原の森に佇むプライベート露天付きヴィラ。BBQと焚き火BARを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '天空の露天風呂付きグランピング＆星空ドーム×ふるさと納税ガイド',
    badge: '天空露天・高級グランピング特集',
    leadTitle: '満天の星と揺らめく焚き火。大自然の絶景をプライベート露天風呂から独占する究極のアウトドアステイ',
    leadDesc: '「自然の中で開放感を味わいたいけれど、温泉にもゆっくり浸かりたいし、清潔で快適なベッドで眠りたい」。そんな欲張りな願いを叶えるのが、客室専用の天然温泉露天風呂やジャグジーを備えた最新ラグジュアリーグランピングです。冷暖房完備のドームテント、地元銘柄肉の豪華グリルBBQ、そして夜空に輝く満天の星。楽天ふるさと納税を活用して、上質で非日常なアウトドアリゾートをお得に体験しましょう。',
    merits: [
      {
        title: '完全プライベートな客室露天風呂・天然温泉で至福の湯浴み',
        desc: '他の宿泊者を気にすることなく、好きな時に何度でも大自然の絶景を眺めながら露天風呂に浸かれます。サウナや水風呂が併設された施設も充実。'
      },
      {
        title: '手ぶらで楽しめる地元食材・高級銘柄肉の本格BBQディナー',
        desc: '甲州牛やあか牛、那須三元豚などの厳選肉や新鮮な高原野菜を、本格ガスグリルで焼き上げる贅沢な夕食。準備や片付けはすべてスタッフにお任せです。'
      },
      {
        title: '焚き火ラウンジ・星空天体観測など非日常のアクティビティ',
        desc: 'パチパチと薪がはぜる音を聞きながらのスモア作りやウイスキーBAR、天体望遠鏡での星空観察など、大人から子どもまで心躍るナイトタイムが過ごせます。'
      }
    ],
    items: [
      {
        key: 'fuji_glamping',
        themeTitle: '山梨県富士河口湖町ふるさと納税：雄大な富士山を正面に望む星空ドーム＆展望露天グランピング',
        themeDesc: '朝日に輝く赤富士や夕暮れの富士山シルエットを目の前に望む特等席。木々の香りに包まれたウッドデッキでのBBQと、富士の伏流水に癒やされる特別なアウトドア体験です。'
      },
      {
        key: 'aso_glamping',
        themeTitle: '熊本県阿蘇エリアふるさと納税：阿蘇五岳と満天の星空！天然温泉露天風呂付きカルデラグランピング',
        themeDesc: '世界最大級のカルデラが広がる阿蘇の大自然。見渡す限りの大草原と、夜には降るような星空が広がるドームテント。良質な阿蘇の天然温泉を独占できます。'
      },
      {
        key: 'nasu_glamping',
        themeTitle: '栃木県那須町ふるさと納税：那須高原の清流と深い森に包まれるプライベート温泉ドーム＆焚き火ステイ',
        themeDesc: '御用邸の地としても名高い那須高原の豊かな森。木漏れ日の中で鳥のさえずりを聞き、専用露天風呂で温まりながら那須黒毛和牛のプレミアムBBQを堪能できます。'
      }
    ],
    crossLinks: [
      { title: '蔵サウナ＆一棟貸しプライベートヴィラ×ふるさと納税完全ガイド', url: '/furusato-tax-kura-sauna-private-villa-charter-stay', desc: '信濃町・八ヶ岳・丹波篠山の完全貸切ととのい旅。' },
      { title: '日本三大星空・天体観測リゾート×ふるさと納税完全ガイド', url: '/furusato-tax-starry-sky-astronomy-retreat-stay', desc: '阿智村・八ヶ岳清里・鳥取大山の満天星空リゾート。' },
      { title: '全室離れの隠れ家おこもり宿×極上プライベートヴィラ', url: '/furusato-tax-private-villa-hanare-hideaway-stay', desc: '由布院・伊豆高原・定山渓の静寂と美食ステイ。' }
    ]
  }
];

function generatePageCode(config) {
  const pageData = allHotels[config.slug] || {};

  return `import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

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

console.log('All 4 Round 13 pages successfully generated!');
