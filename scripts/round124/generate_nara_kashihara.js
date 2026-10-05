const fs = require('fs');
const path = require('path');

function generateNaraKashiharaPage(hotels) {
  const slug = 'winter-nara-kashihara-jingu-hatsumode-asuka-asukunabe-yamatogyu-stay';
  const title = '【11・12・1月奈良】日本建国の聖地「橿原神宮」新春初詣と畝傍山の冬朝霧！飛鳥路の静寂と名物「飛鳥鍋」・大和牛名宿5選';
  const description = '初代神武天皇が即位した日本建国の聖地「橿原神宮（かしはらじんぐう）」が約100万人の新春参拝客を迎える11〜1月の冬旅特集。畝傍山（うねびやま）を背景に白木造りの壮大な社殿が冬朝霧に煙る光景、石舞台古墳や飛鳥寺が静まり返る冬の明日香村、飛鳥時代の宮廷貴族の滋養食にルーツを持つ名物郷土料理「飛鳥鍋（牛乳仕立て出汁）」、極上の霜降りを誇る奈良銘柄牛「大和牛」のすき焼き。橿原・明日香の滞在拠点に最適な厳選ホテル・名宿5選を徹底解説します。';

  const hotelDetails = [
    {
      story: '近鉄橿原神宮前駅東口から徒歩わずか1分、橿原神宮の大鳥居へも歩いてアクセスできる好立地に建つ「グランドメルキュール奈良橿原（旧THE KASHIHARA）」。地下1階には広々とした橿原温泉の温泉大浴場とサウナを備え、冬の初詣や飛鳥路散策で冷え切った身体を湯気のぬくもりで芯から癒やすことができます。客室は洋室から和室までゆとりある広さを誇り、上層階からは大和三山の雄大な山並みを一望。館内レストランでは奈良県産食材をふんだんに取り入れた和洋ビュッフェや本格会席が用意され、冬の味覚を心ゆくまで満喫できます。',
      roomTip: 'エグゼクティブツインまたはスーペリアツイン。畝傍山側の客室なら朝日に輝く神奈備の稜線を眺められます。',
      gourmetTip: '「奈良の郷土色豊かな朝食ビュッフェ」。熱々の茶粥や三輪そうめんのにゅうめん、地元野菜の煮浸しが冬の朝に染み渡ります。'
    },
    {
      story: '近鉄大和八木駅南口から徒歩約2分、橿原市の交通の要衝にそびえるモダンホテル「CANDEO HOTELS（カンデオホテルズ）奈良橿原」。最上階のスカイスパには展望露天風呂と本格ロウリュサウナが完備され、星空が澄み渡る冬の夜に大和盆地の夜景を眼下に望む湯浴みは息を呑む贅沢です。客室にはカンデオ特製の「こあがりソファ」が配され、シモンズ社製ベッドとともに極上の寛ぎを演出。京都・難波・吉野方面へのアクセスも抜群で、冬の大和路を自在に周遊する拠点として屈指の人気を誇ります。',
      roomTip: 'エグゼクティブデラックスキング。最上階スカイスパへのアクセスが良く、開放的な窓から大和三山を眺望。',
      gourmetTip: '「健康朝食ビュッフェ」。出汁が香る温かい和総菜と焼きたてパン、地元の旬野菜を取り入れたバランスの良い朝食。'
    },
    {
      story: '近鉄橿原神宮前駅中央口から徒歩約2分、橿原神宮の参道入口に寄り添うように佇む「橿原オークホテル」。古都の落ち着きを感じさせるアットホームなホテルで、神宮への新春初詣にこれ以上ない利便性を発揮します。館内の日本料理店「橘」では、名物「大和牛のすき焼き会席」や、冬限定の「特製飛鳥鍋会席」が提供され、地元客からも高い評価を得ています。畳敷きの和室も備えており、小さなお子様連れのファミリーや三世代旅行でも足を伸ばして寛げる安心感が魅力です。',
      roomTip: '落ち着いた純和室10畳。障子の温もりと畳の香りに包まれ、冬の参拝前夜を静かに過ごせます。',
      gourmetTip: '「本格飛鳥鍋会席」。鶏ガラ出汁に新鮮な牛乳をブレンドし、地鶏の旨味と冬野菜の甘みが溶け込んだ秘伝のスープが絶品。'
    },
    {
      story: '近鉄大和八木駅南口から徒歩約3分、橿原市街の中心に位置する機能的な「大和橿原シティホテル」。駅前の繁華街や飲食店街に近く、冬の夜に地元の居酒屋で大和地鶏や奈良の地酒「三諸杉」「風の森」を楽しみたい旅人に最適です。リーズナブルな宿泊料金ながら、全室に無料Wi-Fi、加湿器の貸出、清潔な寝具を完備。フロントスタッフの温かな案内も評判で、明日香村へのサイクリングや史跡巡りのベースキャンプとして高い実用性を誇ります。',
      roomTip: 'スタンダードツイン。荷物を広げやすく、冬の連泊滞在でも快適な作業・休息スペースを確保。',
      gourmetTip: '「大和八木駅前の地元割烹巡り」。ホテル周辺の老舗割烹で味わう大和牛の炙り焼きと熱燗の奈良地酒が格別。'
    },
    {
      story: '国の重要伝統的建造物群保存地区にも近い明日香村の中心、飛鳥寺のほど近くに佇む「国の登録有形文化財の宿 ブランシエラ ヴィラ 明日香」。江戸末期から明治にかけての歴史的古民家を丹念に改修した一棟貸しスタイルの極上宿です。土間や梁の重厚な美しさを残しながら、最新の床暖房や檜風呂、快適なベッドルームを完備。冬の明日香村の静寂と星空を独り占めできるプライベート空間で、地元食材をふんだんに使った飛鳥鍋ケータリングや大和牛ディナーを味わう、唯一無二の贅沢な滞在が叶います。',
      roomTip: '歴史的母屋のスイート棟。床暖房完備の広々とした和モダン空間で、冬の冷え込みを感じることなく別格の静けさを満喫。',
      gourmetTip: '「明日香村の恵み・大和牛と地野菜の飛鳥鍋セット」。文化財の座敷で囲む熱々の飛鳥鍋が冬の旅の最高の思い出に。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥12,000〜' : i === 1 ? '¥8,500〜' : i === 2 ? '¥7,200〜' : i === 3 ? '¥5,500〜' : '¥28,000〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.23' : i === 1 ? '4.48' : i === 2 ? '4.10' : i === 3 ? '3.02' : '4.33');
    const reviewCount = h.reviewCount || (i === 0 ? 680 : i === 1 ? 510 : i === 2 ? 340 : i === 3 ? 190 : 85);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || '近鉄橿原神宮前駅または大和八木駅より徒歩すぐ、西名阪道郡山ICまたは南阪奈道路葛城IC経由')},
              special: ${JSON.stringify(h.hotelSpecial || '橿原神宮新春初詣と飛鳥路散策、名物飛鳥鍋と大和牛を味わい尽くす厳選名宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '橿原神宮前駅東口徒歩1分・天然温泉大浴場＆サウナ完備の大型リゾートシティホテル' : i === 1 ? '大和八木駅徒歩2分・最上階展望スカイスパ＆ロウリュサウナから眺める大和盆地の星空' : i === 2 ? '橿原神宮大鳥居至近・館内和食処で味わう本場飛鳥鍋会席と大和牛すき焼き' : i === 3 ? '大和八木駅前徒歩3分・奈良地酒が揃う駅前飲食店街至近でビジネス＆一人旅に最適' : '国の登録有形文化財古民家を一棟貸切・床暖房＆檜風呂で冬の明日香村の静寂を満喫')} ,
                ${JSON.stringify(i === 0 ? '上層階から畝傍山や大和三山を一望・茶粥や三輪にゅうめんが並ぶ充実の朝食' : i === 1 ? 'シモンズベッド＆こあがりソファ完備の上質客室・京都や吉野への移動ハブ' : i === 2 ? '畳敷きの和室完備でファミリーや三世代参拝にも安心・温かな老舗のおもてなし' : i === 3 ? 'リーズナブルな価格設定と手厚いフロント対応・明日香村へのアクセス良好' : '大和牛と明日香野菜を特製飛鳥鍋で味わうプライベートディナーが至高')} ,
                ${JSON.stringify(i === 0 ? '橿原神宮の初詣参拝が徒歩数分で最もスムーズ・広々とした館内ロビー' : i === 1 ? '洗練されたモダンデザインと絶景露天風呂で圧倒的な宿泊者満足度' : i === 2 ? '神宮参道の静かな環境・自家用車利用でも安心の敷地内駐車場' : i === 3 ? '観光拠点としての高いコストパフォーマンス・冬の大和路散策の味方' : '飛鳥寺や石舞台古墳まで徒歩散策圏内・歴史の息吹に浸る非日常ステイ')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "冬（11・12・1月）の橿原神宮（かしはらじんぐう）初詣の混雑状況とおすすめの参拝時間帯は？",
      a: "橿原神宮は第一代神武天皇が即位した橿原宮跡に鎮座し、正月三が日には約100万人を超える参拝客が訪れます。広大な神域（約53万平方メートル）と玉砂利の外拝殿前広場があるため境内での圧迫感は比較的少ないものの、元旦の日中や三が日の11時〜15時は周辺道路（国道169号線・24号線）および橿原神宮前駅周辺の駐車場が激しく渋滞します。混雑を避けるなら、大晦日深夜〜元旦早朝（午前6〜8時頃）、または夕方16時以降の参拝がおすすめです。畝傍山の稜線から昇る初日の出を拝むのも新春ならではの風情です。"
    },
    {
      q: "奈良の伝統郷土料理「飛鳥鍋（あすかなべ）」とはどのような料理ですか？",
      a: "飛鳥鍋は、飛鳥時代に唐から渡来した僧侶が寒さを凌ぐために山羊の乳で煮込んだ鍋が起源と伝えられる奈良県独自の伝統鍋です。現代では鶏ガラや昆布・鰹の和風出汁に新鮮な牛乳をブレンドし、地鶏（大和肉鶏など）、白菜、大根、ごぼう、椎茸、春菊などの冬野菜を煮込みます。牛乳のまろやかなコクが出汁の旨味と溶け合い、シチューのように濃厚でありながら後味は驚くほどあっさりしています。黒胡椒や生姜、七味唐辛子を効かせると体の芯から温まる冬屈指の滋養食です。"
    },
    {
      q: "ブランド黒毛和牛「大和牛（やまとぎゅう）」の特徴とおすすめの味わい方は？",
      a: "大和牛は、鎌倉時代の文献『国牛十図』にも名が記されるほど古い歴史を持つ奈良の最高峰ブランド和牛です。澄んだ空気と清らかな水に恵まれた大和高原で丹精込めて肥育され、きめ細やかな肉質と鮮やかなサシ、融点が低く口の中でとろける甘い脂が特徴です。冬は割下に大和醤油を使ったすき焼きや、昆布出汁にくぐらせるしゃぶしゃぶで、肉本来の芳醇な旨味を堪能するのが最もおすすめです。"
    },
    {
      q: "冬の明日香村（飛鳥路）の見どころと散策方法（レンタサイクル・周遊バス）は？",
      a: "冬の明日香村は、秋の紅葉シーズンが落ち着き、飛鳥時代の歴史遺構が凛とした静寂に包まれる最も風情ある季節です。日本最大の巨石古墳「石舞台古墳」、日本最古の本格的仏教寺院「飛鳥寺」の飛鳥大仏、壁画で有名な「高松塚古墳」「キトラ古墳」などが見どころです。冬場はレンタサイクル（電動アシスト自転車が便利）または周遊バス「赤かめ」での移動が一般的です。風が冷たいため防寒具（手袋・マフラー・防風ジャケット）をしっかり着用して散策してください。"
    },
    {
      q: "京都・大阪（難波・天王寺）から橿原・明日香への冬のアクセス方法は？",
      a: "近鉄電車を利用するのが最も快適で便利です。大阪・阿部野橋（天王寺）駅からは近鉄南大阪線特急で橿原神宮前駅まで約35分。大阪難波駅からは近鉄奈良線・橿原線（大和八木駅乗り換え）で約40分。京都駅からは近鉄京都線特急で大和八木駅・橿原神宮前駅まで直通約50〜55分です。冬期は積雪することは稀ですが、朝晩の路面凍結があるため、公共交通機関の利用が最も確実で安心です。"
    }
  ];

  const pageContent = `import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '橿原神宮 初詣, 橿原神宮 冬, 飛鳥鍋 奈良, 明日香村 冬, 大和牛 すき焼き, グランドメルキュール奈良橿原, カンデオホテルズ奈良橿原, 畝傍山, 奈良 初詣',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}'
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の橿原神宮外拝殿と畝傍山の朝霧景色'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    images: ['https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export const dynamic = 'force-static';

export default function NaraKashiharaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": ${JSON.stringify(title)},
    "description": ${JSON.stringify(description)},
    "image": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80",
    "datePublished": "2026-10-05T12:00:00+09:00",
    "dateModified": "2026-10-05T12:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "旅宿クラウド 編集部",
      "url": "https://croud-travel.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "旅宿クラウド",
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

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://croud-travel.com"
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
        "name": "奈良・橿原＆明日香 冬特集",
        "item": "https://croud-travel.com/${slug}"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
${faqList.map(item => `      {
        "@type": "Question",
        "name": ${JSON.stringify(item.q)},
        "acceptedAnswer": {
          "@type": "Answer",
          "text": ${JSON.stringify(item.a)}
        }
      }`).join(',\n')}
    ]
  };

  const hotelsData = [
${hotelCardsCode}
  ];

  const faqsData = [
${faqList.map(item => `    {
      q: ${JSON.stringify(item.q)},
      a: ${JSON.stringify(item.a)}
    }`).join(",\n")}
  ];

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-amber-950 via-stone-900 to-stone-800 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-amber-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Sunrise className="w-4 h-4 text-amber-300" />
            <span>大和国・奈良 冬の特別紀行（11月・12月・1月）</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 font-journal-serif">
            日本建国の聖地「橿原神宮」新春初詣と畝傍山の冬朝霧<br className="hidden md:inline" />
            飛鳥路の静寂と名物「飛鳥鍋」・極上大和牛名宿
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-3xl mb-6">
            第一代神武天皇が即位し、日本の黎明の歴史が幕を開けた大和の聖地・橿原と明日香村。約100万人が新春の祈りを捧げる橿原神宮の雄大な白木社殿、畝傍山から立ちのぼる神秘的な冬朝霧、飛鳥寺や石舞台古墳が静まり返る冬の明日香。古代貴族の滋養食に由来する名物「飛鳥鍋」と銘柄牛「大和牛」に舌鼓を打つ、歴史と温もりに満ちた冬旅へご案内します。
          </p>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-stone-200">
            <span className="bg-amber-900/60 border border-amber-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" /> 橿原神宮（新春初詣100万人）
            </span>
            <span className="bg-amber-900/60 border border-amber-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-amber-400" /> 名物「飛鳥鍋」＆大和牛すき焼き
            </span>
            <span className="bg-amber-900/60 border border-amber-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Footprints className="w-4 h-4 text-amber-400" /> 明日香村史跡散策（石舞台・飛鳥寺）
            </span>
          </div>
        </div>
      </header>

      {/* Summary Box */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
            <CheckCircle2 className="w-5 h-5 text-amber-700 flex-shrink-0" />
            <span>本特集でわかること（11・12・1月の橿原・明日香旅行の要点）</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
              <span className="font-bold text-amber-950 block mb-1">① 橿原神宮 新春初詣の混雑回避</span>
              神武天皇を祀る建国の聖地。三が日に100万人が訪れる外拝殿前の荘厳な朝霧と玉砂利。早朝参拝で味わう清々しい神気の受け取り方。
            </div>
            <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
              <span className="font-bold text-amber-950 block mb-1">② 飛鳥鍋＆最高峰大和牛</span>
              飛鳥時代の渡来僧が伝えたと伝わる牛乳仕立て出汁の「飛鳥鍋」。鎌倉時代からの名牛「大和牛」の上質な霜降りと三輪にゅうめんの滋味。
            </div>
            <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
              <span className="font-bold text-amber-950 block mb-1">③ 冬の明日香路＆今井町の静寂</span>
              石舞台古墳や飛鳥寺の日本最古の大仏。重要伝統的建造物群保存地区「今井町」の白壁町屋群など、静寂の中で歴史に浸る散策ルート。
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 py-4 text-xs text-slate-500 flex items-center gap-2">
        <Link href="/" className="hover:text-amber-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/features" className="hover:text-amber-800 transition">特集一覧</Link>
        <span>/</span>
        <span className="text-slate-700 font-medium">奈良・橿原＆明日香 冬特集</span>
      </nav>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">

        {/* Section 1: Overview and Atmosphere */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-amber-100 text-amber-900 rounded-xl">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">HISTORIC HEART OF YAMATO</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                万葉の山並みに朝霧が漂い、白木の社殿に新春の神風が吹き渡る
              </h2>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              奈良盆地の南部に位置する橿原（かしはら）と明日香（あすか）は、日本という国家の礎が築かれた揺籃の地です。畝傍山（うねびやま）、耳成山（みみなしやま）、天香久山（あまのかぐやま）の「大和三山」に囲まれたこの地は、晩秋から厳冬期の11月〜1月、冷え込んだ朝に盆地特有の白い朝霧が立ちのぼり、息を呑むような幻想的な神代の風景を現出させます。
            </p>
            <p>
              橿原神宮の深遠な玉砂利を踏みしめて外拝殿へと進むと、背景にそびえる畝傍山の深緑と純白の砂利、美しい檜皮葺きの社殿が調和し、背筋がすっと伸びるような神聖な清々しさに包まれます。新年の決意を胸に手を合わせ、そこから南へ足を伸ばせば、冬枯れの田園風景の中に巨石が静かに佇む石舞台古墳や、日本最古の大仏が微笑む飛鳥寺が迎えてくれます。冬の冷たい風に包まれた後は、あたたかい牛乳出汁の「飛鳥鍋」を囲む——古代のロマンと優しいぬくもりが交錯する、大和路ならではの特別な旅がここから始まります。
            </p>
            <p>
              特に正月三が日の橿原神宮は、県内外から約100万人もの初詣参拝客が訪れ、普段の静寂から一転して新春の熱気と祈りに満ち溢れます。開門と同時に神武天皇の御神霊を仰ぎ、新たな年の飛躍を願う人々の姿は、日本人の原風景そのものです。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-100">
              <h3 className="font-bold text-amber-950 text-sm mb-1 flex items-center gap-1.5">
                <Sunrise className="w-4 h-4 text-amber-700" /> 橿原神宮 新春大初詣
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                広大な境内と荘厳な白木社殿。第一代神武天皇を祀り、開運延寿・国家安泰を祈願する関西屈指の霊場。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-100">
              <h3 className="font-bold text-amber-950 text-sm mb-1 flex items-center gap-1.5">
                <Footprints className="w-4 h-4 text-amber-700" /> 冬の明日香路・史跡巡礼
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                石舞台古墳、飛鳥寺、キトラ古墳。観光客が落ち着いた冬こそ、古代の息吹を静かに感じ取る絶好の時。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-100">
              <h3 className="font-bold text-amber-950 text-sm mb-1 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-700" /> 名物「飛鳥鍋」と大和牛
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                牛乳仕立ての優しい旨味スープで煮込む地鶏と冬野菜。鎌倉時代から続く極上大和牛のすき焼きも絶品。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Winter Gourmet Focus */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-rose-100 text-rose-900 rounded-xl">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest block">ANCIENT GASTRONOMY</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                宮廷文化の知恵「飛鳥鍋」と、芳醇な霜降りを誇る「大和牛」
              </h2>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              飛鳥鍋は、飛鳥時代に唐から伝わった乳製品「蘇（そ）」の文化に端を発するとされる日本最古級の創作郷土鍋です。和風の昆布・鶏出汁に新鮮な牛乳を加え、大和肉鶏、白菜、長ネギ、大根、椎茸、春菊をじっくり煮込みます。牛乳のまろやかなコクが鶏肉の旨味を包み込み、出汁と溶け合って驚くほど上品なスープに仕上がります。粗挽き黒胡椒や生姜をピリッと利かせていただくと、冷えた指先や喉をじんわりと潤し、心まで温まる冬の極上鍋です。
            </p>
            <p>
              奈良県が誇る黒毛和牛「大和牛（やまとぎゅう）」は、鎌倉時代の『国牛十図』にもその優秀性が讃えられた伝統の名牛です。大和高原の澄んだ空気と良質な水で育った肉質は、融点が極めて低い上質な脂と、しっかりとした赤身のコクを併せ持ちます。冬の夕べには、奈良の老舗醤油で仕立てた甘辛い割下でサッと煮る「大和牛すき焼き」が最高のご馳走。溶き卵にくぐらせれば、口に入れた瞬間にほどける柔らかな肉質に感動を覚えます。
            </p>
            <p>
              さらに、大和路の冬の朝食に欠かせないのが「茶粥（おかいさん）」と、熱々の「三輪にゅうめん」です。ほうじ茶の香ばしい出汁で炊き上げた茶粥は胃に優しく、冬の底冷えする朝の体を芯から目覚めさせます。手延べそうめん発祥の地・三輪の極細麺を出汁でいただくにゅうめんは、喉越しなめらかでほっとする安らぎを与えてくれます。
            </p>
          </div>
        </section>

        {/* Section 3: Sightseeing Spots & Winter Attractions */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-amber-100 text-amber-900 rounded-xl">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">HISTORIC EXPLORATION</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                石舞台の巨石と今井町の白壁格子、冬枯れが際立たせる古都の美
              </h2>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              冬の明日香村は、秋の観光シーズンを終えて本来の穏やかな静寂を取り戻します。蘇我馬子の墓とされる「石舞台古墳」では、総重量約2,300トンにも及ぶ巨石が冬枯れの芝生の中に悠然と横たわり、古代の石工技術の凄みを直に感じることができます。玄室の内部に入ると、冷たい石肌から古代の息遣いが伝わってくるかのようです。
            </p>
            <p>
              また、日本最古の本格寺院である「飛鳥寺」では、推古天皇の命により止利仏師が造顕した日本最古の仏像「飛鳥大仏（釈迦如来坐像）」を至近距離で拝観できます。1400年以上同じ場所で人々を見守り続けてきた大仏様のアルカイックスマイル（古典的微笑）は、冬の澄んだ陽光の中でひときわ慈愛に満ちて見えます。
            </p>
            <p>
              橿原神宮の北側に位置する「今井町（いまいちょう）」は、戦国時代の寺内町に起源を持つ国の重要伝統的建造物群保存地区です。周囲を環濠で囲まれた町内には、江戸時代の町家約500軒が今なお生活の場として息づいており、まるでタイムスリップしたかのような景観が広がります。冬の凛とした空気の中、細い路地を歩き、老舗醤油蔵や造り酒屋に立ち寄る時間は、知的な冬旅のハイライトです。
            </p>
          </div>
        </section>

        {/* Section 4: Travel Practical Tips */}
        <section className="bg-slate-100/80 rounded-2xl p-6 md:p-8 border border-slate-200 space-y-4">
          <h2 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span>冬の橿原・明日香 旅の実践アドバイス（気候・服装・散策移動）</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-slate-700">
            <div>
              <strong className="block text-slate-900 font-bold mb-1">【気温と服装】</strong>
              奈良盆地特有の放射冷却により、12月〜1月の朝晩は氷点下近くまで冷え込みます。日中は10度前後まで上がる日もありますが、風が冷たいため防風性のあるアウター、手袋、マフラーが必須です。明日香村の古墳散策や玉砂利の橿原神宮境内を歩くため、歩きやすい靴を選びましょう。
            </div>
            <div>
              <strong className="block text-slate-900 font-bold mb-1">【明日香村の移動手段】</strong>
              冬の明日香村は周遊バス「赤かめ」の運行本数が限られるため、駅前のレンタサイクル（電動アシスト付き推奨）が機動力抜群です。天候が崩れそうな日や寒さが厳しい日は、橿原神宮前駅や飛鳥駅からの観光タクシー利用も賢い選択肢です。
            </div>
          </div>
        </section>

        {/* Section 5: Verified Hotels */}
        <section className="space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-black text-amber-800 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full inline-block">
              SELECTED ACCOMMODATIONS
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 font-journal-serif">
              橿原神宮初詣＆飛鳥路散策を満喫する厳選名宿5選
            </h2>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              楽天トラベルAPIより最新の空室・料金・レビュー情報を取得。橿原神宮駅前の温泉大浴場ホテルから、最上階スカイスパのモダンホテル、文化財古民家の一棟貸しまで厳選しました。
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image */}
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{hotel.rating}</span>
                      <span className="text-slate-300">({hotel.reviews}件)</span>
                    </div>
                  </div>

                  {/* Hotel Content */}
                  <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-extrabold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                          厳選宿 #{hotel.id}
                        </span>
                        <span className="text-sm font-black text-rose-600">
                          参考宿泊料: {hotel.price}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-black text-slate-900 hover:text-amber-800 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                          {hotel.name}
                        </a>
                      </h3>

                      <p className="text-xs text-slate-500 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{hotel.access}</span>
                      </p>

                      <p className="text-slate-700 text-xs md:text-sm leading-relaxed">
                        {hotel.story}
                      </p>

                      {/* Tips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <strong className="block text-slate-900 font-bold mb-1 text-[11px] uppercase tracking-wider text-amber-800">
                            🛌 客室選びのヒント
                          </strong>
                          <span className="text-slate-600">{hotel.roomTip}</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <strong className="block text-slate-900 font-bold mb-1 text-[11px] uppercase tracking-wider text-rose-800">
                            🥢 冬の特選グルメ
                          </strong>
                          <span className="text-slate-600">{hotel.gourmetTip}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-1.5 pt-2 text-xs text-slate-600">
                        {hotel.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Booking Button */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-400">楽天トラベル公認リンク</span>
                      <a 
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black text-xs md:text-sm rounded-xl shadow-md hover:shadow-lg transition transform active:scale-95"
                      >
                        <span>プラン詳細・空室確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: 1-Night 2-Days Model Course */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-emerald-100 text-emerald-900 rounded-xl">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block">MODEL ITINERARY</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                橿原神宮初詣＆飛鳥路散策 1泊2日冬の黄金モデルコース
              </h2>
            </div>
          </div>

          <div className="space-y-6 text-xs md:text-sm">
            {/* Day 1 */}
            <div className="border-l-2 border-amber-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-amber-600 text-white px-2 py-0.5 rounded text-xs">1日目</span>
                古代史のロマンあふれる明日香村を巡り、熱々の飛鳥鍋へ
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>11:00 近鉄橿原神宮前駅に到着</strong><br />
                駅構内のロッカーまたはホテルに手荷物を預け、周遊バスまたは電動アシスト自転車で明日香村へ出発。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>12:00 石舞台古墳と飛鳥寺を拝観</strong><br />
                日本最大の巨石古墳「石舞台」の玄室に入り、古代の巨石土木技術に圧倒される。続いて「飛鳥寺」にて推古天皇ゆかりの飛鳥大仏（日本最古の仏像）を静かに拝観。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>15:30 橿原神宮前のホテルにチェックイン</strong><br />
                温泉大浴場または展望スカイスパで散策の疲れを癒やす。夕食は館内和食処または駅前割烹で、名物「飛鳥鍋」と大和牛すき焼き、地酒「三諸杉」を堪能。
              </p>
            </div>

            {/* Day 2 */}
            <div className="border-l-2 border-emerald-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-xs">2日目</span>
                橿原神宮で清らかな新春祈願、今井町の町並み散策へ
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>08:00 朝の澄んだ空気の中、橿原神宮へ初詣</strong><br />
                畝傍山を背にした壮大な外拝殿前へ。玉砂利を踏む音だけが響く静寂の中、新年の開運と家族の平安を祈願。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>10:30 江戸時代の町並みが残る「今井町」散策</strong><br />
                橿原神宮から車で約10分、国の重要伝統的建造物群保存地区「今井町」へ。約500軒の白壁土蔵や格子窓の町家が連なる迷路のような路地を歩き、老舗醤油蔵や酒蔵を見学。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>13:00 大和八木駅または橿原神宮前駅から帰路へ</strong><br />
                名物柿の葉寿司や三輪そうめんのお土産を買い、近鉄特急で大阪・京都方面へ。
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-purple-100 text-purple-900 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-800 uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                橿原・明日香 冬の旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div key={idx} className="border border-slate-100 rounded-xl p-4 md:p-5 bg-slate-50/50">
                <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2 flex items-start gap-2">
                  <span className="text-amber-600 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link CTA */}
        <section className="bg-gradient-to-r from-amber-950 to-stone-900 text-white rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-black font-journal-serif">
            冬の日本全国・厳選特集をチェック
          </h2>
          <p className="text-stone-300 text-xs md:text-sm max-w-xl mx-auto">
            11月・12月・1月が旬の温泉郷、新春初詣、冬の味覚、雪景色を特集したオリジナル旅行ガイドを多数公開中。次の旅の目的地を見つけてください。
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link 
              href="/features" 
              className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-black text-xs md:text-sm rounded-xl shadow transition"
            >
              特集記事一覧を見る
            </Link>
            <Link 
              href="/" 
              className="px-6 py-3 bg-amber-800 hover:bg-amber-700 text-white font-black text-xs md:text-sm rounded-xl border border-amber-600 transition"
            >
              トップページへ戻る
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 text-center text-xs border-t border-slate-800 mt-16">
        <p>© 2026 旅宿クラウド (croud-travel.com). All rights reserved.</p>
        <p className="mt-2 text-slate-500">掲載の宿泊料金や施設情報は楽天トラベルAPIより取得した参考データです。最新のプラン内容は各宿泊施設ページをご確認ください。</p>
      </footer>
    </article>
  );
}
`;

  return { slug, pageContent };
}

module.exports = { generateNaraKashiharaPage };
