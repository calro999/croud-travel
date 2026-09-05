const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const pagesConfig = [
  {
    slug: 'furusato-tax-fuji-view-onsen-resort-stay',
    title: '絶景富士山ビュー露天風呂宿×ふるさと納税完全ガイド【2026年最新】河口湖・山中湖・日本平の霊峰一望リゾート',
    desc: '客室露天風呂や大浴場から雄大な世界遺産・富士山を一望！河口湖の逆さ富士、山中湖の紅富士、日本平の夜景パノラマ宿を楽天ふるさと納税宿泊クーポンでお得に予約する絶景旅ガイド。',
    h1: '絶景富士山ビュー露天風呂宿×ふるさと納税ガイド',
    badge: '富士山ビュー・絶景露天宿特集',
    leadTitle: '湯けむりの向こうに聳える霊峰富士。圧倒的な絶景と名湯で至福の開運ステイ',
    leadDesc: '朝日に赤く染まる紅富士、湖面に映り込む優美な逆さ富士、そして夕暮れのグラデーションに浮かび上がる黒富士。部屋のバルコニーや湯船から望む富士山の雄姿は、日本人に生まれた喜びを再確認させてくれます。楽天ふるさと納税を活用すれば、プレミアムな富士山ビュールームや展望露天風呂付き客室も最大30%割引で贅沢に予約可能です。',
    merits: [
      {
        title: '客室露天風呂やテラスから遮るもののない富士山パノラマ',
        desc: '視界一面に広がる霊峰富士と湖の大パノラマ。プライベート空間で誰にも邪魔されず、刻一刻と表情を変える富士の絶景を独り占めできます。'
      },
      {
        title: '山梨・静岡の甲州牛や駿河湾鮮魚を味わう豪華ディナー',
        desc: '豊かな湧水で育まれた甲州牛のステーキ、富士桜ポーク、山中湖のワカサギ、駿河湾の由比桜えびなど、富士山麓の恵みを活かした極上料理に舌鼓。'
      },
      {
        title: 'ふるさと納税返礼クーポンで高額な富士山ビュースイートも大幅値引き',
        desc: '通年で人気の高い富士山絶景宿も、自治体への寄付枠を活用して自己負担実質2,000円で宿泊可能。記念日や長寿祝いにも最高の選択肢です。'
      }
    ],
    items: [
      {
        key: 'kawaguchiko_fuji',
        themeTitle: '山梨県富士河口湖町ふるさと納税：河口湖温泉・湖面に映る逆さ富士と天然温泉露天風呂',
        themeDesc: '河口湖畔に佇む名宿群。展望大浴場や露天風呂から真正面に富士山を望み、天気の良い朝には湖面に美しい逆さ富士が現れます。湯上がりにワインを傾けながら眺める夕景も格別です。'
      },
      {
        key: 'yamanakako_fuji',
        themeTitle: '山梨県山中湖村ふるさと納税：山中湖・標高1,000mの高原から仰ぐダイナミックな紅富士',
        themeDesc: '富士五湖の中で最も富士山に近い山中湖。冬の夕暮れに山頂が輝くダイヤモンド富士や、朝焼けに染まる紅富士を間近に体感できる高原リゾートステイが満喫できます。'
      },
      {
        key: 'nihondaira_fuji',
        themeTitle: '静岡県静岡市ふるさと納税：日本平ホテル・富士山と駿河湾・清水港夜景のパノラマ',
        themeDesc: '「日本観光地百選」第1位の景勝地・日本平山頂に建つ美術館のようなホテル。全面ガラス張りのロビーや客室から、富士山と三保松原、駿河湾、きらめく清水港夜景が一枚の絵画のように広がります。'
      }
    ],
    crossLinks: [
      { title: '絶景インフィニティ温泉×海空一体パノラマ露天宿', url: '/furusato-tax-infinity-onsen-sky-ocean-view-stay', desc: '海と空、そして湯面が一体化する開放感抜群のインフィニティ湯宿。' },
      { title: '憧れの最高峰宿・記念日スイート＆ヴィラ', url: '/furusato-tax-anniversary-luxury-suite-villa-stay', desc: '箱根・京都・沖縄の極上アニバーサリーステイ。' },
      { title: '全室離れの隠れ家おこもり宿×極上プライベートヴィラ', url: '/furusato-tax-private-villa-hanare-hideaway-stay', desc: '由布院・伊豆高原・定山渓の静寂と美食ステイ。' }
    ]
  },
  {
    slug: 'furusato-tax-highland-resort-french-auberge-stay',
    title: '高原リゾート＆美食フレンチオーベルジュ×ふるさと納税完全ガイド【2026年最新】那須・清里・裏磐梯の森の休日',
    desc: '澄んだ空気と木漏れ日の森で味わう極上フレンチコース！那須高原、八ヶ岳清里、裏磐梯など名門高原リゾート＆オーベルジュを楽天ふるさと納税宿泊クーポンでお得に予約する大人旅ガイド。',
    h1: '高原リゾート＆フレンチオーベルジュ×ふるさと納税ガイド',
    badge: '高原リゾート・森のフレンチ特集',
    leadTitle: '避暑地の澄み渡る森の静寂の中で、土地の滋味を凝縮した至高のフレンチを',
    leadDesc: '標高1,000mの高原に広がる白樺の林、小鳥のさえずりと涼やかなそよ風。日常を離れた高原リゾートやオーベルジュでは、地元農家が丹精込めた高原野菜やブランド黒毛和牛、清流のイワナなどを一流シェフが鮮やかなフレンチに昇華させます。楽天ふるさと納税クーポンを活用して、五感を潤す贅沢な高原バカンスへ出かけましょう。',
    merits: [
      {
        title: '宿泊者だけが味わえる地産地消のプレミアムフレンチフルコース',
        desc: '採れたてアスパラやハーブ、とろける那須牛や甲州ワインビーフなど、高原ならではの力強い食材を生かした芸術的なディナーをソムリエ厳選ワインとともに。'
      },
      {
        title: '森のマイナスイオンに抱かれる露天風呂と暖炉ラウンジ',
        desc: '樹々のざわめきを聴きながら入る天然温泉露天風呂や、夜に薪がパチパチとはぜる暖炉の前で過ごす読書タイム。心身の緊張が自然とほどけていきます。'
      },
      {
        title: 'カップル記念日や女子旅、大人のひとり旅にも最適な贅沢プラン',
        desc: '静けさを重視した隠れ家オーベルジュが多く、大切な記念日やご褒美ステイに最適。返礼クーポンでハイグレードな客室もお得に手配可能です。'
      }
    ],
    items: [
      {
        key: 'nasu_auberge',
        themeTitle: '栃木県那須町ふるさと納税：那須高原・ロイヤルリゾートの森に佇むフレンチオーベルジュ',
        themeDesc: '御用邸の地として知られる那須高原。澄んだ空気と豊かな土壌で育った有機野菜や那須黒毛和牛を主役に据えた本格フレンチと、那須の名湯・美肌温泉に包まれる上質な休日を約束します。'
      },
      {
        key: 'kiyosato_auberge',
        themeTitle: '山梨県北杜市ふるさと納税：八ヶ岳清里高原・自家菜園野菜と八ヶ岳ブルーを愛でる美食宿',
        themeDesc: '南アルプスと富士山を望む清里高原。シェフ自らが毎朝収穫する無農薬ハーブと高原野菜、ジビエや甲州地鶏を使った独創的なキュイジーヌを星空の下で堪能できます。'
      },
      {
        key: 'urabandai_auberge',
        themeTitle: '福島県北塩原村ふるさと納税：裏磐梯高原・桧原湖と五色沼の神秘の自然に寄り添うクラシックリゾート',
        themeDesc: '磐梯山の雄姿とエメラルドグリーンに輝く五色沼が広がる裏磐梯。湖畔の静寂に包まれたホテルで、クラシックなフレンチディナーと源泉かけ流しの露天風呂で心洗われるひとときを。'
      }
    ],
    crossLinks: [
      { title: 'ワイン＆地ビール×醸造オーベルジュ旅ガイド', url: '/furusato-tax-winery-craft-beer-auberge-stay', desc: '勝沼・富良野・余市のワイナリーホテル＆オーベルジュ。' },
      { title: 'クラフトビール＆ご当地ブルワリーホテル×ふるさと納税完全ガイド', url: '/furusato-tax-craft-beer-brewery-hotel-stay', desc: '軽井沢・修善寺・小樽の出来立て生ビールと美食ステイ。' },
      { title: '日本三大星空・天体観測リゾート×ふるさと納税完全ガイド', url: '/furusato-tax-starry-sky-astronomy-retreat-stay', desc: '阿智村・八ヶ岳清里・鳥取大山の満天星空リゾート。' }
    ]
  },
  {
    slug: 'furusato-tax-three-major-bihada-hotspring-stay',
    title: '日本三大美肌の湯×炭酸水素塩泉・とろとろ美肌温泉ふるさと納税完全ガイド【2026年最新】嬉野・喜連川・玉造の名湯治宿',
    desc: 'まるで天然の化粧水に浸かっているような感動！日本三大美肌の湯（佐賀嬉野、栃木喜連川、島根玉造/斐乃上）の名湯旅館をふるさと納税宿泊クーポンでお得に予約する極上ビューティー・湯治ステイ。',
    h1: '日本三大美肌の湯×とろとろ美肌温泉ふるさと納税ガイド',
    badge: '日本三大美肌の湯・薬湯治特集',
    leadTitle: '湯上がりの肌が驚くほどしっとり滑らか。全国屈指の「美肌の聖地」へ',
    leadDesc: 'ナトリウム-炭酸水素塩泉や硫酸塩泉など、角質をやわらげて余分な皮脂や汚れを洗い流す「クレンジング効果」と、肌に潤いを補給する「保湿効果」を併せ持つ美肌の名湯。入浴した瞬間に肌にまとわりつくようなとろみのある湯触りは、まさに天然の美容液そのものです。楽天ふるさと納税を活用して、身体の内外から美しくなるとっておきのご褒美温泉旅へ。',
    merits: [
      {
        title: '天然の美容液と呼ばれる高濃度・高泉質の自家源泉かけ流し',
        desc: '加水・加温なしのピュアな源泉を引いた湯舟で、肌が生まれ変わるような極上の浴感を体験。飲泉可能な宿では身体の内側からもデトックスを促進します。'
      },
      {
        title: '名物「温泉湯豆腐」やコラーゲンたっぷり美肌会席',
        desc: '嬉野温泉の弱アルカリ泉でコトコト煮込むことで豆腐が溶け出し、豆乳スープのようになる温泉湯豆腐など、美肌湯の恵みを食でも丸ごと堪能できます。'
      },
      {
        title: '女性の一人旅や母娘旅、女子旅グループで賢くふるさと納税枠消化',
        desc: 'エステ付きプランやオーガニックアメニティ完備の宿も多く、リフレッシュに最適。返礼クーポンで実質2,000円で最高峰のスパ体験が実現します。'
      }
    ],
    items: [
      {
        key: 'ureshino_bihada',
        themeTitle: '佐賀県嬉野市ふるさと納税：嬉野温泉・日本三大美肌の湯の筆頭・ぬめりのある重曹泉と名物湯豆腐',
        themeDesc: 'ナトリウムを多く含む重曹泉で、皮脂を乳化させて洗い流す効果が抜群。湯上がりのしっとり感は感動的で、老舗旅館ではとろける温泉湯豆腐と佐賀牛の絶品会席を味わえます。'
      },
      {
        key: 'kitsuregawa_bihada',
        themeTitle: '栃木県さくら市ふるさと納税：喜連川温泉・硫黄・塩分・鉄分が絶妙に調和した良質な美肌泉',
        themeDesc: '早乙女温泉と並び「日本三大美肌の湯」に選定された喜連川温泉。硫黄の香りと肌を滑らかにする塩化物泉が交わり、血行促進と保湿効果に優れた名湯を満喫できます。'
      },
      {
        key: 'tamatsukuri_bihada',
        themeTitle: '島根県松江市ふるさと納税：玉造温泉・出雲国風土記にも記された「神の湯」天然化粧水',
        themeDesc: '製薬会社のリサーチで水分補給力と肌バリア機能の高さが実証された玉造温泉。玉湯川沿いの桜並木と風情ある温泉街を歩き、出雲大社参拝とセットで巡る美肌祈願ステイが人気です。'
      }
    ],
    crossLinks: [
      { title: '奇跡の名湯×強炭酸泉・泥湯・美肌温泉リトリート', url: '/furusato-tax-bihada-medicinal-springs-retreat-stay', desc: '長湯・霧島・嬉野の本格薬湯治ステイ。' },
      { title: '秘湯・ランプの宿×デジタルデトックス温泉旅', url: '/furusato-tax-secret-hotspring-lamp-retreat-stay', desc: '法師・祖谷・酸ヶ湯の渓谷野天風呂。' },
      { title: 'お伊勢参り＆熊野古道×聖地巡礼・門前宿ガイド', url: '/furusato-tax-ise-kumano-sacred-power-spot-stay', desc: '伊勢神宮・熊野三山・出雲大社の祈願ステイ。' }
    ]
  },
  {
    slug: 'furusato-tax-historical-kaido-post-town-ryokan-stay',
    title: '歴史街道・宿場町めぐり名宿×ふるさと納税完全ガイド【2026年最新】中山道木曽路（妻籠・馬籠）・日光街道の江戸情緒旅',
    desc: '石畳の坂道や格子戸の町並み、江戸時代にタイムスリップしたかのような情緒！中山道・妻籠宿、馬籠宿、日光街道の由緒ある宿場町旅館を楽天ふるさと納税宿泊クーポンでお得に予約する歴史散策ガイド。',
    h1: '歴史街道・宿場町めぐり名宿×ふるさと納税ガイド',
    badge: '歴史街道・宿場町めぐり特集',
    leadTitle: '旅人が草鞋を脱いだ江戸の昔へ。街道の息吹と素朴な郷土の温もりに触れる',
    leadDesc: '木造の旅籠が連なる中山道木曽路の妻籠宿や馬籠宿、日光東照宮へと続く日光街道杉並木。かつて参勤交代の大名や旅人たちが行き交った街道沿いには、現代も当時の面影を色濃く残す宿場町と名宿が点在しています。楽天ふるさと納税を活用して、囲炉裏端でいただく岩魚の塩焼きや五平餅、信州蕎麦を味わうノスタルジックな街道歩き旅へ出かけましょう。',
    merits: [
      {
        title: '電線が地中化され江戸の佇まいがそのまま残る国の重伝建地区に宿泊',
        desc: '観光客で賑わう昼間とは一変し、夕暮れの行灯が灯る静寂の宿場町を歩けるのは宿泊者だけの特権。静まり返った石畳に響く下駄の音が旅情を誘います。'
      },
      {
        title: '囲炉裏端で焼き上げる川魚・山菜・名物五平餅の山里郷土料理',
        desc: '囲炉裏の炭火でじっくり香ばしく焼いた岩魚やアマゴ、香り高い信州蕎麦、地元米で作る香ばしい五平餅など、素朴でありながら滋味深い料理を堪能できます。'
      },
      {
        title: '歴史文化保全への寄付控除と宿泊割引を両立する賢いふるさと納税',
        desc: '町並み保存や文化遺産継承に尽力する自治体へ寄付しながら、最大30%オフのトラベルクーポンで趣ある古民家風宿や老舗旅館をお得に楽しめます。'
      }
    ],
    items: [
      {
        key: 'tsumago_kaido',
        themeTitle: '長野県南木曽町ふるさと納税：中山道妻籠宿・全国で初めて町並み保存に取り組んだ奇跡の宿場町',
        themeDesc: '日本初の重要伝統的建造物群保存地区。江戸時代の木造建築が連なる街道を散策し、木曽檜の香る木風呂や、山菜と信州牛を味わう心温まる宿場ステイが待っています。'
      },
      {
        key: 'magome_kaido',
        themeTitle: '岐阜県中津川市ふるさと納税：中山道馬籠宿・文豪島崎藤村の故郷・石畳の坂道宿場',
        themeDesc: '木曽山脈を望む急峻な坂道に開けた馬籠宿。藤村の名作『夜明け前』の舞台となった町並みを見下ろしながら、恵那山麓の清らかな水と栗きんとん、地酒を味わえます。'
      },
      {
        key: 'nikko_kaido',
        themeTitle: '栃木県日光市ふるさと納税：世界遺産日光東照宮参道・日光杉並木街道と由緒ある門前宿',
        themeDesc: '徳川家康公を祀る日光東照宮へと続く日光街道。ギネス世界記録に認定された世界一長い杉並木を抜け、名物の日光湯波や滋養あふれる会席料理に舌鼓を打つ開運の旅です。'
      }
    ],
    crossLinks: [
      { title: '古民家再生・歴史的町家オーベルジュ×文化財ホテル滞在記', url: '/furusato-tax-kominka-heritage-townhouse-auberge-stay', desc: '篠山・飛騨高山の歴史情緒と地産馳走を味わう極上滞在。' },
      { title: '登録有形文化財・宮大工名建築旅館×ふるさと納税完全ガイド', url: '/furusato-tax-tangible-cultural-property-architectural-ryokan-stay', desc: '修善寺新井旅館・渋温泉金具屋・箱根環翠楼の歴史宿。' },
      { title: '国宝名城めぐり×城下町老舗名宿ガイド', url: '/furusato-tax-castle-town-heritage-onsen-stay', desc: '姫路・松本・彦根の天守展望露天風呂宿。' }
    ]
  }
];

function generateCode(config) {
  const currentCategoryData = allHotels[config.slug] || {};

  return `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${config.title}',
  description: '${config.desc}',
  keywords: ['ふるさと納税', '楽天トラベル', '宿泊クーポン', '${config.badge}', '温泉旅館', 'ホテル予約', '2026年最新'],
  openGraph: {
    title: '${config.title}',
    description: '${config.desc}',
    url: 'https://croud-travel.pages.dev/${config.slug}',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoTaxPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-white">
      {/* パンくずリスト */}
      <nav className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur px-4 py-3 text-xs text-slate-400">
        <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-amber-400 transition">ホーム</Link>
          <span>/</span>
          <Link href="/posts" className="hover:text-amber-400 transition">宿泊ガイド一覧</Link>
          <span>/</span>
          <span className="text-slate-200">${config.badge}</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-black bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 mb-5 shadow-lg shadow-amber-500/20">
            ${config.badge}
          </span>
          <h1 className="text-2xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            ${config.h1}
          </h1>
          <p className="text-sm md:text-lg text-slate-300 leading-relaxed font-medium">
            ${config.desc}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://event.travel.rakuten.co.jp/special/furusato/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-sm md:text-base border border-amber-400/30"
            >
              <span>🎟️ 楽天ふるさと納税 宿泊クーポンを獲得する</span>
              <span className="text-xs bg-black/20 px-2 py-0.5 rounded">公式</span>
            </a>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        {/* リード文ブロック */}
        <section className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -z-10" />
          <h2 className="text-xl md:text-2xl font-black text-amber-400 mb-4 flex items-center gap-2">
            <span>💡</span>
            <span>${config.leadTitle}</span>
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base font-normal">
            ${config.leadDesc}
          </p>
        </section>

        {/* メリット3選 */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-xl md:text-3xl font-black text-white">
              楽天ふるさと納税トラベルクーポンが圧倒的にお得な3つの理由
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-2">
              予約前の獲得はもちろん、予約後の「あとから適用」も可能な最高峰の使い勝手
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${config.merits.map((m, idx) => `
              <div key="${idx}" className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 transition rounded-2xl p-6 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-black text-lg mb-4">
                    0${idx + 1}
                  </div>
                  <h3 className="font-bold text-white text-base md:text-lg mb-3">
                    ${m.title}
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    ${m.desc}
                  </p>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        {/* 自治体＆厳選宿セクション */}
        <section className="space-y-12">
          <div className="border-l-4 border-amber-500 pl-4">
            <h2 className="text-2xl md:text-3xl font-black text-white">
              ふるさと納税対象・厳選おすすめ宿泊施設
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-1">
              楽天トラベルAPIより最新の料金・宿泊プラン・空室情報をリアルタイム反映中
            </p>
          </div>

          <div className="space-y-12">
            ${config.items.map(item => {
              const target = currentCategoryData[item.key] || { hotels: [] };
              const hotels = target.hotels || [];
              return `
                <div key="${item.key}" className="bg-slate-900/50 border border-slate-800/90 rounded-3xl p-6 md:p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-black text-amber-300 flex items-center gap-2">
                      <span>📍</span>
                      <span>${item.themeTitle}</span>
                    </h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      ${item.themeDesc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    ${hotels.map(h => `
                      <div key="${h.hotelNo}" className="bg-slate-950/80 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition group shadow-md">
                        <div>
                          <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                            ${h.hotelImageUrl ? `
                              <Image
                                src="${h.hotelImageUrl}"
                                alt="${h.hotelName}"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover group-hover:scale-105 transition duration-500"
                              />
                            ` : `
                              <div className="w-full h-full flex items-center justify-center text-slate-600 text-xs font-mono">
                                NO IMAGE
                              </div>
                            `}
                            ${h.reviewAverage > 0 ? `
                              <div className="absolute top-2 right-2 bg-slate-950/90 border border-amber-400/40 text-amber-300 px-2.5 py-1 rounded-lg text-xs font-black shadow-lg flex items-center gap-1">
                                <span>★</span>
                                <span>${h.reviewAverage.toFixed(1)}</span>
                              </div>
                            ` : ''}
                          </div>
                          <div className="p-4 space-y-2">
                            <h4 className="font-bold text-white text-sm line-clamp-2 group-hover:text-amber-300 transition">
                              ${h.hotelName}
                            </h4>
                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              ${(h.hotelSpecial || h.userReview || '').replace(/[\r\n\t]/g, ' ').slice(0, 100)}
                            </p>
                            <p className="text-xs text-slate-500 flex items-center gap-1">
                              <span>📍</span>
                              <span className="truncate">${h.address1}${h.address2}</span>
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 border-t border-slate-800/50 mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-400 block">参考最安料金</span>
                            <span className="text-xs md:text-sm font-black text-amber-400">
                              ${h.hotelMinCharge > 0 ? `¥${h.hotelMinCharge.toLocaleString()}〜` : 'プラン参照'}
                            </span>
                          </div>
                          <a
                            href="${h.affiliateUrl}"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl transition shadow-md flex items-center gap-1"
                          >
                            <span>詳細・予約</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </section>

        {/* 関連・相互リンク集 */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6">
          <div className="border-l-4 border-amber-500 pl-3">
            <h3 className="text-lg md:text-xl font-black text-white">あわせて読みたいふるさと納税トラベル特集</h3>
            <p className="text-slate-400 text-xs mt-1">目的や同伴者に合わせて最適な宿泊クーポンを活用しよう</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${config.crossLinks.map((cl, i) => `
              <Link
                key="${i}"
                href="${cl.url}"
                className="block p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/50 transition group"
              >
                <div className="font-bold text-amber-400 group-hover:text-amber-300 transition text-sm mb-1 line-clamp-1">
                  ${cl.title}
                </div>
                <div className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  ${cl.desc}
                </div>
              </Link>
            `).join('')}
          </div>
        </section>

        {/* クーポン獲得CTA */}
        <section className="bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-900 border border-amber-500/30 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <span className="text-3xl">🎫</span>
          <h2 className="text-xl md:text-3xl font-black text-white">
            楽天トラベルふるさと納税クーポンで、一生の思い出に残るプレミアムステイへ
          </h2>
          <p className="text-slate-300 text-xs md:text-base max-w-2xl mx-auto leading-relaxed">
            返礼品クーポンは寄付手続き完了後、数分で楽天トラベルのアカウントに即時付与されます。今年の寄付上限枠を賢く使って、家族みんなの最高の笑顔とくつろぎを手に入れましょう。
          </p>
          <div>
            <a
              href="https://event.travel.rakuten.co.jp/special/furusato/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-8 py-4 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-base border border-amber-400/40"
            >
              <span>🎟️ 楽天ふるさと納税 宿泊クーポンを獲得する</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
`;
}

for (const p of pagesConfig) {
  const dir = path.join(__dirname, 'src/app', p.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const filePath = path.join(dir, 'page.tsx');
  fs.writeFileSync(filePath, generateCode(p), 'utf8');
  console.log(`Generated page at: ${filePath}`);
}

console.log('All 4 Round 9 pages successfully created!');
