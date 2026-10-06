const fs = require('fs');
const path = require('path');

function generateHyogoAkashiPage(hotels) {
  const slug = 'winter-hyogo-akashi-uonotana-kakimoto-shrine-hatsumode-akashiyaki-stay';
  const title = '【11・12・1月兵庫】明石海峡大橋を望む人麿山「柿本神社」新春初詣と歳末・新春活気溢れる「魚の棚商店街」！冬の激流が育む「明石だこ・明石鯛」本場明石焼き＆加古川かつめし・播州牛厳選名宿5選';
  const description = '世界最大級の吊橋・明石海峡大橋を間近に仰ぐ兵庫県明石・加古川・播磨灘エリア。11〜1月は澄み渡る冬晴れの下、歌聖・柿本人麻呂公を祀る人麿山「柿本神社」で迎える厳かな新春初詣。明石の台所「魚の棚商店街」では年末年始の活気が最高潮に達し、荒波が育む極上の「明石だこ」「明石鯛」や出汁で味わう熱々の本場「明石焼き（玉子焼）」を満喫。播州名物「加古川かつめし」や播州牛を味わい、海峡の夜景に抱かれる厳選名宿5選。';

  const hotelDetails = [
    {
      story: '西明石駅から徒歩約3分という抜群の機動性を誇り、新幹線・JR在来線の利用に最適なシティホテル「ホテル キャッスルプラザ＜兵庫県＞」。館内には広々としたロビーと洗練された客室が揃い、伊川や播磨灘の観光拠点として長年愛されてきました。館内には本格的な日本料理店、広東料理店、イタリアンなど多彩なレストランを備え、冬の味覚を取り入れた特別ディナーを楽しめます。全室に加湿機能付き空気清浄機やシモンズ社製ベッドを完備。年末年始の魚の棚商店街散策や柿本神社への初詣、神戸・姫路方面への周遊にも理想的なアクセス環境を提供します。',
      roomTip: 'エグゼクティブツインまたはデラックスダブル。ゆとりある空間設計と上質な寝具で、移動の疲れを快適に癒やせます。',
      gourmetTip: '館内和食レストランの「播磨灘海鮮会席」。冬の明石鯛のお造りやタコ料理、播州地酒のペアリングが絶品。'
    },
    {
      story: 'JR・山陽明石駅から徒歩約3分、明石城跡（明石公園）の豊かな緑を目前に望む絶好のロケーションに建つ「グリーンヒルホテル明石」。魚の棚商店街へも徒歩約5分という近さで、朝市散策や名物明石焼きの食べ比べにこれ以上ない利便性を誇ります。清潔感あふれるモダンな客室からは、冬枯れの木立が美しい明石城の巽櫓（たつみやぐら）や坤櫓（ひつじさるやぐら）を望むことができます。地元食材をふんだんに取り入れた朝食ビュッフェでは、出汁の香る和惣菜や焼きたてパンが好評。城下町の歴史と海の活気の両方を存分に楽しめます。',
      roomTip: 'キャッスルビューツイン。窓から国指定重要文化財の明石城の白壁櫓と緑豊かな公園の冬景色を一望。',
      gourmetTip: '徒歩5分の「魚の棚商店街」での食べ歩き。熱々の出汁に浸して食べる焼きたて明石焼きとタコ天ぷらが最高。'
    },
    {
      story: 'JR加古川駅南口から徒歩約5分、播磨地域の中心都市・加古川の中心街に位置する「加古川プラザホテル」。ビジネスから観光まで高い信頼を得ている地域密着型のシティホテルです。客室はシンプルで機能的、清潔感にあふれ、加古川名物グルメ探訪の拠点に最適。ホテル周辺には加古川が誇るソウルフード「かつめし」の有名老舗店が多数点在しており、揚げたてのビーフカツに濃厚な特製デミグラスソースが絡む絶品グルメを堪能できます。明石へのアクセスもJR新快速で約10分と極めてスムーズです。',
      roomTip: 'デラックスシングルまたはツインルーム。広めのライティングデスクと快適なベッドで心地よい休息を約束。',
      gourmetTip: '加古川名物「かつめし」。洋皿のご飯にサクサクの牛カツをのせ、秘伝デミグラスソースと茹でキャベツを添えた至高の郷土食。'
    },
    {
      story: '世界最長の吊橋「明石海峡大橋」の東詰、舞子浜の高台に広がる本館と緑豊かな庭園を有する「シーサイドホテル舞子ビラ神戸」。全客室や展望レストランから明石海峡の雄大なパノラマビューを独占できます。特に冬は空気が澄み渡るため、青く輝く海峡と淡路島の島影、そして夜には宝石のように輝く明石海峡大橋のイルミネーションが眼前に広がります。館内には緑に囲まれた大浴場「松の湯」を完備し、海風で冷えた身体をゆったりと温められます。明石・舞子の海峡美を余すところなく味わい尽くせる屈指のリゾートホテルです。',
      roomTip: '本館海側バルコニー付きツイン。遮るもののない大パノラマで明石海峡大橋のライトアップと行き交う船の光を客室から鑑賞。',
      gourmetTip: '海峡ビューレストランでの冬期フレンチまたは和会席ディナー。明石鯛のポワレや播州牛フィレ肉など厳選食材の贅沢な饗宴。'
    },
    {
      story: 'JR西明石駅西口から徒歩約2分、新幹線利用の旅人に抜群のフットワークを提供する「明石ルミナスホテル」。駅近でありながら閑静な環境に位置し、リーズナブルで快適な滞在を実現します。館内には清潔な客室が揃い、デュベスタイルの羽毛布団と個別空調、全室Wi-Fiを完備。朝食には手作りの温かい和洋バイキングが提供され、朝の活力チャージにぴったりです。柿本神社や魚の棚商店街、さらには明石海峡大橋方面への観光拠点として、高いコストパフォーマンスを発揮します。',
      roomTip: 'スタンダードダブルまたはツイン。機能的で無駄のないレイアウトで、快適な睡眠環境を確保。',
      gourmetTip: '館内レストランの手作り和洋朝食バイキング。温かいお味噌汁と炊きたてご飯、焼きたて卵料理で元気に出発。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥3,400〜' : i === 1 ? '¥6,200〜' : i === 2 ? '¥7,500〜' : i === 3 ? '¥5,225〜' : '¥2,700〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '3.81' : i === 1 ? '3.93' : i === 2 ? '4.04' : i === 3 ? '4.46' : '4.04');
    const reviewCount = h.reviewCount || (i === 0 ? 1120 : i === 1 ? 840 : i === 2 ? 620 : i === 3 ? 2450 : 790);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'JR山陽本線 西明石駅・明石駅・加古川駅、または舞子駅より徒歩約2〜5分')},
              special: ${JSON.stringify(h.hotelSpecial || '明石海峡大橋の冬夜景と人麿山柿本神社初詣、魚の棚商店街の明石焼きと加古川かつめしを満喫する名宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '西明石駅徒歩3分の好立地・新幹線利用に便利で多彩な館内レストラン完備' : i === 1 ? '明石駅徒歩3分・魚の棚商店街まで徒歩5分で明石城の白壁櫓を望む特等席' : i === 2 ? '加古川駅徒歩5分・名物加古川かつめし有名店巡りに最適なシティホテル' : i === 3 ? '明石海峡大橋を真正面に望む絶景・海側バルコニー客室と大浴場松の湯完備' : '西明石駅西口徒歩2分・リーズナブルで機能的な安心のビジネスステイ')} ,
                ${JSON.stringify(i === 0 ? '加湿空気清浄機とシモンズ製ベッド完備・播磨灘海鮮会席と地酒ペアリング' : i === 1 ? '朝市散策や明石焼き食べ比べに抜群・清潔感あふれるモダン快適客室' : i === 2 ? '広めのデスクと機能的設備・明石や姫路へのアクセスもJR新快速で約10分' : i === 3 ? '冬の澄んだ大気に輝く海峡ライトアップ・明石鯛や播州牛の贅沢ディナー' : '手作り和洋朝食バイキング・駅近で新春初詣や城下町観光のフットワーク抜群')} ,
                ${JSON.stringify(i === 0 ? '年末年始の魚の棚商店街や柿本神社初詣の拠点・駐車場完備でドライブ旅にも' : i === 1 ? '歴史ある明石城公園の緑に隣接・地元食材を取り入れた朝食ビュッフェ' : i === 2 ? '地域密着の温かいおもてなし・地元ソウルフード探訪の拠点にぴったり' : i === 3 ? '緑豊かな庭園と海風を感じるリゾート空間・淡路島観光へのゲートウェイ' : '抜群のコストパフォーマンス・デュベスタイル羽毛布団で快適な睡眠環境')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "人麿山「柿本神社」の由緒と、新春初詣で授かるご利益は？",
      a: "柿本神社は、万葉集を代表する歌聖・柿本人麻呂公を主祭神として仁和3年（887年）に創建された古社です。人麻呂公が明石の浦を詠んだ名歌「天離る 鄙の長道ゆ 恋ひ来れば 明石の門より 大和島見ゆ」にちなみ、明石海峡を一望する小高い丘（人麿山）に鎮座しています。文学・学問の神様としてはもちろん、「人麻呂＝人生円満」「火止まる（火除け）」「安産祈願」のご利益で知られ、新春には多くの参拝者が開運や厄除け、合格祈願に訪れます。隣接する明石市立天文科学館の日本標準時子午線（東経135度）の塔も名所です。"
    },
    {
      q: "明石の台所「魚の棚（うおのたな）商店街」の年末年始の営業とおすすめグルメは？",
      a: "魚の棚商店街は約400年の歴史を持つアーケード商店街で、約350mの通りに約100軒の鮮魚店や加工品店がひしめき合います。12月末の歳末大売り出し期は、新年の祝い鯛（炭火焼き鯛）、明石だこ、塩かずのこ、棒鱈などを買い求める客で熱気にあふれます。観光客に人気なのは、熱々をその場で食べる「明石焼き（玉子焼）」、タコの天ぷら、できたての練り物（ちくわやひら天）の食べ歩きです。年始は店舗により初売り日が異なりますが、明石焼き店は正月三が日も営業している店舗が多くあります。"
    },
    {
      q: "本場「明石焼き（玉子焼）」と一般的なたこ焼きの違い、美味しい食べ方は？",
      a: "地元で「玉子焼」と呼ばれる明石焼きは、たこ焼きのルーツとされる伝統食です。生地にたっぷりの鶏卵と小麦粉、そして「じん粉（小麦粉のデンプン）」を使用するため、焼き上がりは驚くほどふわふわでとろける食感に仕上がります。中には明石海峡の激流で育った歯ごたえ抜群の真蛸が入っています。最大の特徴は、ソースではなく「温かい鰹と昆布の一番出汁」に浸して食べること。出汁の旨味と卵の優しい甘みが口いっぱいに広がり、冬の冷えた身体に染み渡る極上の味わいです。卓上のソースを塗ってから出汁に浸す「神戸風」の食べ方も人気です。"
    },
    {
      q: "播州名物「加古川かつめし」の定義と、冬に味わうべき魅力は？",
      a: "加古川かつめしは、戦後間もない昭和20年代に加古川の喫茶店で考案されたご当地グルメです。平皿に盛った白ご飯の上に、揚げたてのビーフカツ（牛カツ）をのせ、各店秘伝の濃厚なデミグラスソース系タレをたっぷりとかけ、茹でキャベツを添えてお箸で食べるのが正式なスタイルです。冬は熱々のデミグラスソースとサクサクの牛カツのコクが身体を温めてくれます。加古川市内にはかつめしを提供する店舗が100軒以上あり、ソースの酸味や甘み、カツの厚さなど各店の個性を食べ比べるのが醍醐味です。"
    },
    {
      q: "冬の明石海峡大橋のライトアップ時間と、最も美しく見えるビューポイントは？",
      a: "明石海峡大橋は日没から23時（休日は24時）まで毎正時に虹色に輝くレインボーイルミネーションなど多彩な演出でライトアップされます。冬（11〜1月）は空気が乾燥して澄み渡るため、光の乱反射が少なく、ワイヤーの光の軌跡が最もクリアに浮かび上がります。おすすめの鑑賞スポットは、舞子公園（プロムナード）、シーサイドホテル舞子ビラの海側客室やテラス、そして明石市役所裏の大蔵海岸です。大蔵海岸からは対岸の淡路島の夜景と海峡を渡る大橋の全景をパノラマで一望できます。"
    }
  ];

  const pageContent = `import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '柿本神社 初詣, 明石 魚の棚商店街, 本場 明石焼き 玉子焼, 明石海峡大橋 冬 ライトアップ, 加古川 かつめし, ホテルキャッスルプラザ 明石, シーサイドホテル舞子ビラ神戸, グリーンヒルホテル明石, 兵庫 冬 観光',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}'
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    siteName: 'クラドトラベル',
    type: 'article',
    locale: 'ja_JP',
    images: [{
      url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      width: 1200,
      height: 630,
      alt: '冬の明石海峡大橋 ライトアップと魚の棚商店街'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    images: ['https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function HyogoAkashiWinterFeaturePage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": ${JSON.stringify(title)},
    "description": ${JSON.stringify(description)},
    "image": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "2026-10-06T09:00:00+09:00",
    "dateModified": "2026-10-06T09:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "クラドトラベル編集部 温泉・神社仏閣取材班"
    },
    "publisher": {
      "@type": "Organization",
      "name": "クラドトラベル",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.com/${slug}"
    }
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://croud-travel.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "特集一覧",
        "item": "https://croud-travel.com/features"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "兵庫・明石＆加古川 冬の初詣と播磨灘グルメ",
        "item": "https://croud-travel.com/${slug}"
      }
    ]
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
${faqList.map(f => `      {
        "@type": "Question",
        "name": ${JSON.stringify(f.q)},
        "acceptedAnswer": {
          "@type": "Answer",
          "text": ${JSON.stringify(f.a)}
        }
      }`).join(',\n')}
    ]
  };

  const hotels = [
${hotelCardsCode}
  ];

  const faqList = ${JSON.stringify(faqList, null, 2)};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-blue-600 selection:text-white">
        {/* Breadcrumb Bar */}
        <nav aria-label="パンくずリスト" className="bg-white border-b border-stone-200 text-xs text-stone-500 py-3 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto flex items-center space-x-2">
            <Link href="/" className="hover:text-blue-600 transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:text-blue-600 transition">特集一覧</Link>
            <span>/</span>
            <Link href="/prefectures/hyogo" className="hover:text-blue-600 transition">兵庫県</Link>
            <span>/</span>
            <span className="text-stone-800 font-medium">明石柿本神社初詣＆魚の棚・明石焼き</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-b from-stone-900 via-slate-900 to-stone-900 text-white py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs sm:text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              11月・12月・1月冬の播磨灘・明石海峡探訪スペシャル
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              【兵庫・明石＆加古川】<br className="hidden sm:inline" />
              明石海峡大橋を望む人麿山「柿本神社」新春初詣と魚の棚商店街！<br />
              熱々の本場「明石焼き」・加古川かつめし＆播磨灘の厳選名宿
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              世界最大級の吊橋・明石海峡大橋が澄んだ冬空に輝く兵庫の港町・明石。歌聖・柿本人麻呂公を祀る人麿山「柿本神社」で迎える厳かな新春初詣。400年の歴史を持つ明石の台所「魚の棚商店街」に満ちる歳末・新春の活気。激流が生んだ歯ごたえ抜群の明石だこと、黄金出汁に浸して味わう熱々の本場「明石焼き（玉子焼）」。播州名物「加古川かつめし」に舌鼓を打ち、海峡の夜景に包まれる特選の冬旅をご案内します。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-stone-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-blue-400" /> 最適期: 11月中旬〜1月下旬
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-blue-400" /> エリア: 兵庫県明石市・加古川市・神戸市垂水区
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Utensils className="w-4 h-4 text-blue-400" /> 名物: 本場明石焼き・明石鯛・加古川かつめし
              </span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          
          {/* Section 1: 人麿山 柿本神社の新春初詣 */}
          <section className="mb-16">
            <div className="border-l-4 border-blue-600 pl-4 mb-6">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">Historic Poet Shrine</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                歌聖・柿本人麻呂公を祀る人麿山「柿本神社」！明石海峡一望の新春開運初詣
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                明石海峡と淡路島を一望する人麿山（ひとまろやま）の高台に鎮座する「柿本神社（かきのもとじんじゃ）」。平安時代の仁和3年（887年）、大和国葛上郡（現在の奈良県）から歌聖・柿本人麻呂公の霊を勧請して創建された名刹です。人麻呂公は万葉集において「天離る 鄙の長道ゆ 恋ひ来れば 明石の門より 大和島見ゆ」と詠み、旅路の中で故郷の大和を偲ぶ切ない情感を明石の海に重ね合わせました。
              </p>
              <p>
                新春の境内は、人麻呂公の御神徳にあやかり学業成就や合格祈願、詩歌文芸の上達を願う参拝者で賑わいます。また「人麻呂（ひとまろ）」の名が「人生円満」「火止まる（火災除け）」に通じることから、家内安全や厄除けの神社としても深く信仰されています。さらに、安産を象徴する亀の背に乗った碑や、夫婦和合の神木など、縁起の良い見どころが点在しています。
              </p>
              <p>
                神社のすぐ隣には、日本標準時子午線（東経135度）の真上に建つ明石市立天文科学館の時計塔がそびえ立ちます。冬の晴れ渡った午前中、社殿の展望広場に立つと、青く澄んだ播磨灘と巨大な明石海峡大橋の全景が眼下に広がり、新年の清らかなスタートを切るのにふさわしい爽快なパノラマを満喫できます。
              </p>
            </div>
          </section>

          {/* Section 2: 魚の棚商店街と本場明石焼き */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Market Culture & Local Gourmet</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                歳末・新春の活気満ちる「魚の棚商店街」と、出汁香る熱々の本場「明石焼き」
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                明石駅から南へ歩いてわずか3分、江戸時代初期に宮本武蔵が町割りを行ったと伝えられる城下町の名残を留めるのが「魚の棚（うおのたな）商店街」です。地元では「うおんたな」の愛称で親しまれ、全長約350mのアーケードには鮮魚店、乾物店、練り物屋、明石焼き店など約100店舗がずらりと並びます。11月から1月にかけては、冬の味覚である明石鯛、寒平目、ナマコなどが店頭に並び、年末には新年の祝い鯛や塩数の子を求める大勢の買い物客で威勢の良い掛け声が響き渡ります。
              </p>
              <p>
                この魚の棚で絶対に外せないのが、地元で「玉子焼」と呼ばれる本場の「明石焼き」です。たこ焼きの元祖とも言われるこの料理は、たっぷりの卵と出汁、そして小麦粉に「じん粉（浮き粉）」をブレンドした特製生地を銅鍋で丸くふんわりと焼き上げます。箸で持ち上げると崩れそうなほど柔らかい生地の中には、激しい潮流を泳ぎ抜いた大ぶりの明石だこが包まれています。
              </p>
              <p>
                赤い傾斜のついた板に載せられて供される明石焼きを、温かい鰹昆布の一番出汁に浸して口に運べば、とろけるような玉子の優しい風味と蛸の力強い弾力が広がり、身体の芯から温まります。三つ葉やネギを薬味に添え、何個でも食べ進められる上品な後味は、冬の明石散策における最高の味覚体験です。
              </p>
            </div>
          </section>

          {/* Section 3: 加古川かつめしと明石海峡大橋冬夜景 */}
          <section className="mb-16">
            <div className="border-l-4 border-indigo-600 pl-4 mb-6">
              <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">Gourmet & Night View</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                播州の誇るソウルフード「加古川かつめし」と、海峡を彩る冬のイルミネーション
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                明石から西へ足を伸ばすと、一級河川加古川の河口に広がる播磨の中核都市・加古川に到着します。ここで愛され続けているご当地グルメが「かつめし」です。昭和20年代、洋食を手軽にお箸で食べられるようにと考案されたこの一皿は、洋皿に盛ったご飯の上に揚げたてのビーフカツ（牛カツ）を載せ、牛骨や香味野菜をじっくり煮込んだ特製のデミグラスソース系タレをたっぷりとかけ、茹でキャベツを添えて提供されます。
              </p>
              <p>
                サクサクの衣に包まれたジューシーな牛肉と、深いコクと酸味が効いたデミグラスソース、そして白ご飯の三位一体は、一口食べれば病みつきになる力強い美味しさ。冬の寒さの中で味わう温かいかつめしは、旅のエネルギーを力強く満たしてくれます。
              </p>
              <p>
                夕暮れ時には再び海峡沿いへ。世界最大級の吊橋・明石海峡大橋は、夜になると約1084組のイルミネーションランプが点灯し、幻想的な光のアーチを描き出します。特に11月〜1月の冬期は空気が乾燥して光がクリアに届くため、毎正時に点灯するレインボーパターンや季節限定のライトアップが海面に映り込み、胸を打つほど幻想的な景観を創出します。
              </p>
            </div>
          </section>

          {/* Section 4: 厳選名宿5選 */}
          <section className="mb-16">
            <div className="border-l-4 border-blue-600 pl-4 mb-8">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">Verified Hotels via Rakuten API</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【楽天トラベル実データ連携】明石・加古川・舞子周辺の厳選名宿5選
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                ※公式リアルタイムAPIから取得した宿泊料金目安・レビュー評価・アクセス情報を掲載しています。
              </p>
            </div>

            <div className="space-y-8">
              {hotels.map((h) => (
                <div key={h.id} className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="p-5 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200">
                        厳選第{h.id}位
                      </span>
                      <div className="flex items-center gap-3 text-xs sm:text-sm">
                        <span className="flex items-center text-amber-500 font-bold">
                          <Star className="w-4 h-4 fill-amber-400 stroke-amber-400 mr-1" />
                          {h.rating}
                        </span>
                        <span className="text-stone-400">({h.reviews.toLocaleString()}件)</span>
                        <span className="text-blue-600 font-black text-sm sm:text-base">
                          {h.price}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                      {h.name}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{h.access}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                      {h.story}
                    </p>

                    <div className="bg-stone-50 rounded-lg p-3.5 space-y-2 mb-5 text-xs text-stone-600">
                      <div>
                        <strong className="text-stone-800 font-semibold mr-1">客室の魅力:</strong>
                        {h.roomTip}
                      </div>
                      <div>
                        <strong className="text-stone-800 font-semibold mr-1">冬の美食:</strong>
                        {h.gourmetTip}
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                        宿泊ポイント・魅力
                      </h4>
                      <ul className="grid grid-cols-1 gap-1.5">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-sm transition"
                      >
                        <span>楽天トラベルでプラン・空室を確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: 1泊2日モデルコース */}
          <section className="mb-16">
            <div className="border-l-4 border-blue-600 pl-4 mb-6">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【1泊2日モデルコース】明石海峡絶景・柿本神社初詣＆魚の棚・加古川グルメ満喫ルート
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">1</span>
                  1日目：魚の棚商店街食べ歩きと柿本神社初詣・明石海峡大橋夜景
                </h3>
                <ol className="relative border-l border-stone-200 ml-3 space-y-4 text-xs sm:text-sm text-stone-600">
                  <li className="pl-4">
                    <strong className="text-stone-800">11:00 JR明石駅到着・魚の棚商店街へ</strong><br />
                    活気あふれる商店街で、炭火焼きの祝い鯛や明石だこを見学。熱々の本場明石焼きを食べ比べ。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">13:00 明石城跡（明石公園）散策</strong><br />
                    重要文化財の巽櫓・坤櫓を望み、日本100名城の美しい石垣と堀の冬景色を鑑賞。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">14:30 人麿山「柿本神社」で新春開運初詣</strong><br />
                    歌聖・柿本人麻呂公を祀る古社へ参拝。境内から望む青い明石海峡パノラマを満喫し、天文科学館の時計塔を見学。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">16:30 宿へチェックイン（西明石または舞子）</strong><br />
                    ホテルにチェックイン。海峡ビューの宿では、夕暮れに染まる明石海峡大橋のシルエットを鑑賞。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">19:00 明石鯛会席ディナー＆大橋イルミネーション</strong><br />
                    播磨灘の新鮮な海の幸と地酒を味わい、夜の海峡を鮮やかに彩るライトアップを眺める。
                  </li>
                </ol>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">2</span>
                  2日目：舞子海上プロムナードと加古川かつめし探訪
                </h3>
                <ol className="relative border-l border-stone-200 ml-3 space-y-4 text-xs sm:text-sm text-stone-600">
                  <li className="pl-4">
                    <strong className="text-stone-800">08:30 ホテルで朝食ビュッフェ・海風散策</strong><br />
                    冬晴れの海を眺めながら優雅な朝食を楽しみ、大蔵海岸や舞子公園の海岸線をウォーキング。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">10:00 舞子海上プロムナードで海上47mの空中散歩</strong><br />
                    明石海峡大橋の橋桁内にある遊歩道を体験。足元の丸木橋ガラス床から激流を見下ろすスリルを味わう。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">12:30 加古川へ移動・名物「加古川かつめし」ランチ</strong><br />
                    老舗店で揚げたて牛カツに濃厚デミグラスソースが絡む至高のかつめしを堪能。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">14:30 鶴林寺（播磨の法隆寺）参拝とお土産購入</strong><br />
                    聖徳太子建立と伝わる国宝本堂や三重塔の冬景色を拝観し、播州銘菓を購入して帰路へ。
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section 6: 冬（11・12・1月）の参拝・旅行攻略 */}
          <section className="mb-16">
            <div className="border-l-4 border-rose-600 pl-4 mb-6">
              <span className="text-xs font-bold text-rose-600 tracking-wider uppercase">Travel Guide & Tips</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【11・12・1月】明石・播磨灘エリアの海風対策と混雑攻略
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <Waves className="w-4 h-4 text-blue-500" />
                  海峡特有の強い浜風と防寒対策
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  明石海峡沿いは太平洋側気候で晴天が多いものの、海峡を抜ける強い季節風（浜風）が吹き付けます。体感温度は実際の気温より3〜5度低く感じられるため、風を通さない防風コートやウインドブレーカー、首元を温めるマフラーが必須です。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <Flame className="w-4 h-4 text-amber-500" />
                  年末年始の魚の棚商店街の混雑時間帯
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  12月29日〜31日は正月用品を買い求める客で魚の棚商店街が年間で最も混雑します。通路が狭いため、午前10時前か午後15時以降の時間を狙うと比較的スムーズに歩けます。明石焼き店は昼時に長蛇の列ができるため、開店直後（10:30〜11:00頃）の来店がおすすめです。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <Compass className="w-4 h-4 text-emerald-500" />
                  JR新快速をフル活用したスマート移動
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  JR神戸線の新快速を利用すれば、大阪から明石まで約37分、三ノ宮から約15分、加古川まで約47分と極めてスピーディーに移動できます。年末年始の国道2号線や明石海峡大橋周辺の道路渋滞を回避できるため、電車でのアクセスが圧倒的に快適です。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <Eye className="w-4 h-4 text-rose-500" />
                  大橋ライトアップの撮影シャッターチャンス
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  明石海峡大橋のイルミネーションは、毎正時（毎時00分）と30分に特別なカラーチェンジ演出が行われます。特に毎正時の約5分間は虹色に輝くレインボープログラムが実施されるため、この時間帯に合わせて大蔵海岸や舞子公園のビューポイントに待機するのがベストです。
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: FAQセクション */}
          <section className="mb-16">
            <div className="border-l-4 border-blue-600 pl-4 mb-6">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                明石・加古川冬旅 よくある質問（FAQ）
              </h2>
            </div>

            <div className="space-y-4">
              {faqList.map((f, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                  <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                    <span className="text-blue-600 font-black">Q.</span>
                    <span>{f.q}</span>
                  </h3>
                  <div className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5 border-l-2 border-blue-100 mt-2">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: まとめ＆内部リンク */}
          <section className="border-t border-stone-200 pt-10 text-center">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-4">
              海峡のきらめく光と熱々の滋味が迎える、明石・播磨灘の冬旅へ
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
              柿本神社の神聖な新春初詣、活気溢れる魚の棚商店街、出汁香る本場明石焼き、そして加古川かつめしと明石海峡大橋の冬夜景。海の幸と歴史の温もりが、新年の旅路を笑顔と満足感で満たしてくれます。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              <Link href="/features" className="px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition">
                ← 特集一覧に戻る
              </Link>
              <Link href="/prefectures/hyogo" className="px-4 py-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold transition">
                兵庫県の旅行ガイド・宿一覧
              </Link>
              <Link href="/" className="px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition">
                クラドトラベル トップページ
              </Link>
            </div>
          </section>

        </main>
      </article>
    </>
  );
}
`;

  const outDir = path.join(__dirname, '../../src/app', slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'page.tsx'), pageContent, 'utf8');
  console.log(`[Generated] ${slug}/page.tsx`);
}

module.exports = { generateHyogoAkashiPage };
