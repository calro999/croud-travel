import { Metadata } from 'next';
import Link from 'next/link';
import { Star, MapPin, Calendar, Compass, ShieldCheck, Heart, Sparkles, ExternalLink, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '日州の小京都・飫肥城下町重伝建と鵜戸神宮新春初詣：2026-2027年冬の宮崎・日南！名物一本釣りカツオと宮崎牛会席名宿5選',
  description: '飫肥杉薫る九州の小京都「飫肥城下町」の武家屋敷冬情緒と、日南海岸の断崖洞窟「鵜戸神宮」新春開運運玉初詣！冬でも温暖な南国宮崎で味わう脂の乗った日南一本釣りカツオ・最高峰宮崎牛・近海伊勢海老。日南海岸を望む絶景天然温泉と上質なおもてなしを誇る厳選名宿5選。',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-miyazaki-nichinan-obi-castle-udo-jingu-hatsumode-miyazakigyu-stay/',
  },
  openGraph: {
    title: '日州の小京都・飫肥城下町重伝建と鵜戸神宮新春初詣：2026-2027年冬の宮崎・日南！名物一本釣りカツオと宮崎牛会席名宿5選',
    description: '飫肥杉薫る九州の小京都「飫肥城下町」の武家屋敷冬情緒と、日南海岸の断崖洞窟「鵜戸神宮」新春開運運玉初詣！冬でも温暖な南国宮崎で味わう脂の乗った日南一本釣りカツオ・最高峰宮崎牛・近海伊勢海老。日南海岸を望む絶景天然温泉と上質なおもてなしを誇る厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-miyazaki-nichinan-obi-castle-udo-jingu-hatsumode-miyazakigyu-stay/',
    siteName: '冬の日本厳選旅行ガイド',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/187408/187408.jpg',
        width: 1200,
        height: 630,
        alt: '【日州の小京都・飫肥城下町重伝建と鵜戸神宮新春初詣】2026-2027年冬の宮崎・日南！名物一本釣りカツオと宮崎牛会席名宿5選',
      },
    ],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '日州の小京都・飫肥城下町重伝建と鵜戸神宮新春初詣：2026-2027年冬の宮崎・日南！名物一本釣りカツオと宮崎牛会席名宿5選',
    description: '飫肥杉薫る九州の小京都「飫肥城下町」の武家屋敷冬情緒と、日南海岸の断崖洞窟「鵜戸神宮」新春開運運玉初詣！冬でも温暖な南国宮崎で味わう脂の乗った日南一本釣りカツオ・最高峰宮崎牛・近海伊勢海老。日南海岸を望む絶景天然温泉と上質なおもてなしを誇る厳選名宿5選。',
    images: ['https://img.travel.rakuten.co.jp/share/HOTEL/187408/187408.jpg'],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://croud-travel.pages.dev/winter-miyazaki-nichinan-obi-castle-udo-jingu-hatsumode-miyazakigyu-stay#article",
      "headline": "【日州の小京都・飫肥城下町重伝建と鵜戸神宮新春初詣】2026-2027年冬の宮崎・日南！名物一本釣りカツオと宮崎牛会席名宿5選",
      "description": "飫肥杉薫る九州の小京都「飫肥城下町」の武家屋敷冬情緒と、日南海岸の断崖洞窟「鵜戸神宮」新春開運運玉初詣！冬でも温暖な南国宮崎で味わう脂の乗った日南一本釣りカツオ・最高峰宮崎牛・近海伊勢海老。日南海岸を望む絶景天然温泉と上質なおもてなしを誇る厳選名宿5選。",
      "image": "https://img.travel.rakuten.co.jp/share/HOTEL/187408/187408.jpg",
      "datePublished": "T08:00:00+09:00",
      "dateModified": "T08:00:00+09:00",
      "author": {
        "@type": "Organization",
        "name": "旅宿クラウド 冬の日本厳選旅取材班",
        "url": "https://croud-travel.pages.dev"
      },
      "publisher": {
        "@type": "Organization",
        "name": "旅宿クラウド",
        "logo": {
          "@type": "ImageObject",
          "url": "https://croud-travel.pages.dev/ogp.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://croud-travel.pages.dev/winter-miyazaki-nichinan-obi-castle-udo-jingu-hatsumode-miyazakigyu-stay/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://croud-travel.pages.dev/winter-miyazaki-nichinan-obi-castle-udo-jingu-hatsumode-miyazakigyu-stay#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "ホーム",
          "item": "https://croud-travel.pages.dev/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "冬の厳選特集",
          "item": "https://croud-travel.pages.dev/features"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "宮崎県の宿・観光",
          "item": "https://croud-travel.pages.dev/prefectures/miyazaki"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "【日州の小京都・飫肥城下町重伝建と鵜戸神宮新春初詣】2026-2027年冬の宮崎・日南！名物一本釣りカツオと宮崎牛会席名宿5選",
          "item": "https://croud-travel.pages.dev/winter-miyazaki-nichinan-obi-castle-udo-jingu-hatsumode-miyazakigyu-stay/"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://croud-travel.pages.dev/winter-miyazaki-nichinan-obi-castle-udo-jingu-hatsumode-miyazakigyu-stay#itemlist",
      "name": "日南・飫肥・鵜戸海岸 冬の厳選名宿5選",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "天然温泉ひなたの宿日南宮崎",
          "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187408%2F187408.html"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "日南海岸　南郷プリンスホテル",
          "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F51210%2F51210.html"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "ホテル　青島サンクマール",
          "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18414%2F18414.html"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "ＡＮＡホリデイ・インリゾート宮崎　ｂｙ　ＩＨＧ",
          "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8782%2F8782.html"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "ホテルシーズン日南",
          "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30939%2F30939.html"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://croud-travel.pages.dev/winter-miyazaki-nichinan-obi-castle-udo-jingu-hatsumode-miyazakigyu-stay#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "鵜戸神宮の「運玉投げ」のルールとコツはありますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "運玉（5個200円）を受け取り、男性は左手、女性は右手で投げます。断崖下にある亀石の背中にある直径約60cmの窪み（枡形）に見事入れば願いが叶うとされます。放物線を描くように少し山なりに投げ入れるのがコツです。"
          }
        },
        {
          "@type": "Question",
          "name": "飫肥城下町の散策にはどのくらいの時間が必要ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "主要な見どころ（飫肥城大手門、松尾の丸、予章館、商人町通り）を巡り、食べ歩きを楽しむ場合の目安所要時間は約2〜3時間です。あゆみちゃんマップ（散策マップ＆引換券）を利用するとお得に名物スイーツや工芸品を楽しめます。"
          }
        },
        {
          "@type": "Question",
          "name": "冬の日南で味わうべきおすすめの魚介は何ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "日南は一本釣りカツオの水揚げ日本一を誇り、冬の寒ガツオは脂が乗り刺身やタタキ、カツオめしで絶品です。また、9月から春先にかけて解禁される近海伊勢海老の活造りや味噌汁も外せない冬の味覚です。"
          }
        }
      ]
    }
  ]
}),
        }}
      />

      <article className="min-h-screen bg-stone-50/50 pb-20">
        {/* ヒーローヘッダー */}
        <header className="relative bg-gradient-to-br from-cyan-950 via-sky-950 to-stone-900 text-white py-14 sm:py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
            <img
              src="https://img.travel.rakuten.co.jp/share/HOTEL/187408/187408.jpg"
              alt="背景画像"
              className="w-full h-full object-cover blur-sm"
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <Link href="/" className="text-cyan-200 hover:text-white transition-colors">
                TOP
              </Link>
              <ChevronRight className="w-3 h-3 text-cyan-400" />
              <Link href="/features" className="text-cyan-200 hover:text-white transition-colors">
                冬の厳選特集
              </Link>
              <ChevronRight className="w-3 h-3 text-cyan-400" />
              <Link href="/prefectures/miyazaki" className="text-cyan-200 hover:text-white transition-colors">
                宮崎県
              </Link>
              <ChevronRight className="w-3 h-3 text-cyan-400" />
              <span className="text-cyan-100">日南・飫肥・鵜戸海岸</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-cyan-900/80 border border-cyan-700/60 text-cyan-200 px-3 py-1 rounded-full text-xs font-semibold">
              <Calendar className="w-3.5 h-3.5 text-cyan-300" />
              <span>冬の旅（11月〜1月）厳選特集</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-sm">「日州の小京都・飫肥城下町重伝建と鵜戸神宮新春初詣」2026-2027年冬の宮崎・日南！名物一本釣りカツオと宮崎牛会席名宿5選</h1>

            <p className="text-sm sm:text-base text-cyan-100/90 leading-relaxed max-w-3xl pt-2">
              飫肥杉薫る九州の小京都「飫肥城下町」の武家屋敷冬情緒と、日南海岸の断崖洞窟「鵜戸神宮」新春開運運玉初詣！冬でも温暖な南国宮崎で味わう脂の乗った日南一本釣りカツオ・最高峰宮崎牛・近海伊勢海老。日南海岸を望む絶景天然温泉と上質なおもてなしを誇る厳選名宿5選。
            </p>
          </div>
        </header>

        {/* メインコンテンツエリア */}
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
          {/* イントロセクション */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                <Compass className="w-6 h-6 text-cyan-700" />
                <span>冬の日南・飫肥・鵜戸海岸探訪：静寂と温もりに包まれる旅の魅力</span>
              </h2>
            </div>
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base whitespace-pre-line">
              南国宮崎の冬は、どこまでも澄み渡る群青の空と、日南海岸を洗う白波が心地よい潮騒を奏でる穏やかな季節。寒風厳しい日本列島の中にあって、日中の気温が15度前後に達する温暖な気候は、冬の古都歩きと海岸ドライブにこの上ない快適さをもたらします。日南市の山裾に抱かれた「飫肥（おび）」は、江戸時代に伊東氏飫肥藩5万1千石の城下町として栄えた歴史の町。国の重要伝統的建造物群保存地区に選定されており、名産の飫肥杉で再建された壮麗な飫肥城大手門や、苔むした玉石垣、白壁の武家屋敷が立ち並ぶ風景は「九州の小京都」と称えられます。冬の柔らかな木漏れ日を浴びながら、甘い出汁が香る名物「厚焼卵」や、魚のすり身と豆腐を練り上げた揚げたての「飫肥天」を片手に散策すれば、往時の武士や商人の暮らしが鮮やかに蘇ります。城下町から太平洋側へと足を伸ばせば、日南海岸の荒波が穿った奇岩の洞窟内に朱塗りの社殿が鎮座する「鵜戸神宮（うどじんぐう）」が姿を現します。新春初詣には、断崖の注連縄が張られた「亀石」の枡形を目掛けて素焼きの玉を投げ込む「運玉投げ」に多くの参拝者が挑戦し、一年の大願成就を祈ります。冬の日南は、一本釣りで水揚げされる脂の乗った初ガツオや、ぷりぷりの身が甘い近海伊勢海老、全国和牛能力共進会で最高峰の栄誉を誇る極上宮崎牛など、舌を唸らせる冬の美食の宝庫。歴史情緒と南国の陽光に心が解ける冬の日南旅へご案内します。
            </p>

            <div className="space-y-4 pt-4 border-t border-stone-100">
              <h3 className="text-lg font-bold text-stone-900">
                この冬、日南・飫肥・鵜戸海岸を訪れるべき3つの理由
              </h3>
              <div className="grid grid-cols-1 gap-4">

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-800 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  1
                </span>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  飫肥杉と武家屋敷が織りなす「九州の小京都」飫肥城下町冬の静寂散歩
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                九州初の重伝建地区である飫肥の城下町。重厚な飫肥杉の大手門や松尾の丸、鯉が泳ぐ清らかな水路と石垣が冬の澄んだ光に美しく映えます。名物の厚焼卵や飫肥天を食べ歩く風情豊かな散策が楽しめます。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-800 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  2
                </span>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  日南海岸の断崖洞窟に鎮座！「鵜戸神宮」新春開運初詣と運玉投げ祈願
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                太平洋の怒涛が砕け散る奇岩洞窟の中に広がる朱塗りの神域。神話の山幸彦・海幸彦伝説ゆかりの古社で、男性は左手、女性は右手で亀石の窪みへ運玉を投げ入れる開運祈願は新春の風物詩です。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-800 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  3
                </span>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  日南一本釣りカツオ・最高峰宮崎牛・伊勢海老！温暖な気候と日南温泉郷の癒やし
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                冬でも穏やかな日南海岸沿いには美肌効果の高い天然温泉が点在。引き締まった身が絶品の一本釣りカツオや最高峰の宮崎牛ステーキ、伊勢海老会席を味わい、海を望む露天風呂で心身を解き放つ贅沢が待っています。
              </p>
            </div>
              </div>
            </div>

            {/* アクセス・気候・おすすめ服装 */}
            <div className="bg-cyan-50/60 border border-cyan-100 rounded-xl p-5 space-y-3 text-xs sm:text-sm text-stone-700">
              <h4 className="font-bold text-cyan-950 flex items-center gap-1.5 text-sm sm:text-base">
                <ShieldCheck className="w-4 h-4 text-cyan-700" />
                <span>アクセス・気候・おすすめの服装ガイド</span>
              </h4>
              <pre className="font-sans whitespace-pre-line leading-relaxed text-stone-600 text-xs sm:text-sm">
                【エリアへのアクセス】
・飛行機・宮崎空港から：宮崎空港よりJR宮崎空港線・日南線で飫肥駅まで約1時間15分。車・レンタカーの場合は国道220号線を経由して約50分。
・電車・特急：JR宮崎駅より観光特急「海幸山幸」（土休日運行）で飫肥駅まで約1時間、普通列車で約1時間20分。日南駅から鵜戸神宮へは路線バスで約25分。
・車・マイカー：東九州自動車道「日南東郷IC」より飫肥城下町まで約5分。宮崎自動車道・宮崎ICより国道220号経由で約45分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月下旬〜1月下旬（温暖な晴天率が高く、鵜戸神宮新春初詣や飫肥城下町散策、冬の伊勢海老・宮崎牛の旬）。
・気温の目安：太平洋黒潮の影響で温暖。最高気温は13〜16℃、朝晩は4〜7℃程度。冬でも日中はコートを脱いで歩けるほど穏やかな日が多くあります。
・服装のポイント：日中はセーターや軽めのジャケットで快適ですが、海沿いの鵜戸神宮は潮風が冷たく吹き抜けるため、防風性のアウターをご持参ください。飫肥の石畳や鵜戸神宮の石段参道には歩きやすいスニーカーが適しています。
              </pre>
            </div>
          </section>

          {/* Wikipedia 近隣観光名所セクション */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-bold text-cyan-700 tracking-wider uppercase">Wikipedia Spot Archive</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2 mt-1">
                <Heart className="w-6 h-6 text-rose-500" />
                <span>近隣名所アーカイブ：日州の小京都・飫肥城下町（重要伝統的建造物群保存地区・飫肥杉と武家屋敷）</span>
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9]">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Obi%2C_Nichinan%2C_%C5%8Ctemon_Street_01.jpg/1280px-Obi%2C_Nichinan%2C_%C5%8Ctemon_Street_01.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="日州の小京都・飫肥城下町（重要伝統的建造物群保存地区・飫肥杉と武家屋敷）"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="font-bold text-stone-900 text-base">
                  【日州の小京都・飫肥城下町（重要伝統的建造物群保存地区・飫肥杉と武家屋敷）の見どころと歴史】
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  飫肥（おび）は、宮崎県の南部、日南市中央部にある地区。もと那珂郡飫肥村で、飫肥城を中心とした伊東氏・飫肥藩の旧城下町である。「九州の小京都」とも称され、多くの観光客が訪れている。江戸時代初期からの地割や歴史的風致のある町並みが多く残され重要伝統的建造物群保存地区に選定されている。そのため日南飫肥伝統的建造物群保存地区についても、ここで記述する。
                </p>
                <div className="pt-2 text-xs text-stone-700">
                  <a
                    href="https://ja.wikipedia.org/wiki/%E9%A3%AB%E8%82%A5"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 text-cyan-700 hover:text-cyan-900 underline"
                  >
                    <span>出典：Wikipedia公式『飫肥』詳細情報を見る</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 厳選名宿5選 */}
          <section className="space-y-8">
            <div className="border-b border-stone-200 pb-4">
              <span className="text-xs font-bold text-cyan-700 tracking-wider uppercase">Rakuten Travel Selected</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
                日南・飫肥・鵜戸海岸 厳選の温泉＆名宿5選
              </h2>
              <p className="text-sm text-stone-600 mt-2">
                楽天トラベルの最新口コミ評価・立地・冬の特別会席プランを徹底精査したおすすめ宿です。
              </p>
            </div>

            <div className="space-y-8">

            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4">
                  <div className="space-y-1">
                    <span className="inline-block bg-cyan-100 text-cyan-900 text-xs px-2.5 py-1 rounded-full font-semibold">
                      第1位 厳選名宿
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                      天然温泉ひなたの宿日南宮崎
                    </h3>
                    <p className="text-xs text-cyan-800 font-medium">飫肥城下町に湧く美肌の天然温泉！全室和モダン客室と日南の美食を堪能する新名宿</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-amber-900">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-sm">4.47</span>
                    <span className="text-xs text-stone-700 font-medium">(451件)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/187408/187408.jpg"
                      alt="天然温泉ひなたの宿日南宮崎"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full space-y-4">
                    <ul className="space-y-2">
                    <li key="0" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">歴史ある飫肥の自然に囲まれた立地！pH値の高いとろとろの天然温泉大浴場＆サウナ</span></li>
                    <li key="1" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">木の温もりが漂う洗練された和モダン客室でプライベートな寛ぎの時間を約束</span></li>
                    <li key="2" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">宮崎牛や日南一本釣りカツオ、地元契約農家の冬野菜をふんだんに味わう特選創作会席</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      飫肥城下町からほど近い酒谷川のほとりに誕生した話題の天然温泉宿。館内に足を踏み入れると、飫肥杉の心地よい香りとモダンな和のデザインが出迎えてくれます。自慢の天然温泉は「美肌の湯」と称されるナトリウム炭酸水素塩温泉で、湯上がりの肌がしっとりすべすべに。夕食には最高ランクの宮崎牛鉄板焼きや日南獲れたての新鮮魚介が並び、飫肥観光の拠点として極上の滞在を提供します。
                    </p>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-4 text-xs text-amber-950/90 leading-relaxed italic">
                  「バイキング料理でお腹いっぱい、祝福のひと時今回もご利用させていただきました。バイキング料理をお腹いっぱい食べて、祝福のひと時を過ごせました。館内スタッフの皆様、ありがとうございます。これからも、お。」
                </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>宮崎県 日南市星倉2228-1</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">◆宮崎ICから車で約30分(日南東郷ICよりすぐ)◆飫肥駅から車で約5分</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥8,000〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187408%2F187408.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm shrink-0"
                  >
                    <span>空室確認・宿泊プランを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4">
                  <div className="space-y-1">
                    <span className="inline-block bg-cyan-100 text-cyan-900 text-xs px-2.5 py-1 rounded-full font-semibold">
                      第2位 厳選名宿
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                      日南海岸　南郷プリンスホテル
                    </h3>
                    <p className="text-xs text-cyan-800 font-medium">日南海岸の絶景を一望する全室オーシャンビュー！プライベートビーチと極上海鮮</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-amber-900">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-sm">4.47</span>
                    <span className="text-xs text-stone-700 font-medium">(618件)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/51210/51210.jpg"
                      alt="日南海岸　南郷プリンスホテル"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full space-y-4">
                    <ul className="space-y-2">
                    <li key="0" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">青い海と緑の島々が織りなす日南海岸国定公園の特等席！バルコニー付きの全室海側客室</span></li>
                    <li key="1" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">ホテル前から出航する水中観光船や島巡りなど、温暖な南国の自然を満喫できるアクティビティ</span></li>
                    <li key="2" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">宮崎県産黒毛和牛や近海の伊勢海老、日南の新鮮魚介を堪能する優雅な和洋ディナーコース</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      日南海岸南端の南郷町に位置し、目の前にエメラルドグリーンの内海と島々が広がる名門リゾート。全客室が海に面しており、冬の柔らかな朝日が室内に差し込む贅沢な朝を迎えられます。夕食には料理長が腕を振るう伊勢海老や旬の地魚、宮崎牛のコースが提供され、海を眺めながらのディナーは特別な旅の記憶に。鵜戸神宮や飫肥城下町へのドライブコースの中継点としても理想的です。
                    </p>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-4 text-xs text-amber-950/90 leading-relaxed italic">
                  「プライベートビーチが最高、また行きたいライオンズキャンプのホテルでプライベートビーチがあってとっても良かったです。宮崎いった際は宿泊したいです。」
                </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>宮崎県 日南市南郷町中村乙3800</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">◆宮崎自動車道　宮崎IC～日南東郷IC利用で当館まで車で約1時間◆JR日南線　南郷駅より車で約4分♪</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">プラン詳細参照</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F51210%2F51210.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm shrink-0"
                  >
                    <span>空室確認・宿泊プランを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4">
                  <div className="space-y-1">
                    <span className="inline-block bg-cyan-100 text-cyan-900 text-xs px-2.5 py-1 rounded-full font-semibold">
                      第3位 厳選名宿
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                      ホテル　青島サンクマール
                    </h3>
                    <p className="text-xs text-cyan-800 font-medium">青島鬼の洗濯板を眼下に望む海辺の温泉宿！展望露天風呂と伊勢海老会席</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-amber-900">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-sm">4.44</span>
                    <span className="text-xs text-stone-700 font-medium">(783件)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/18414/18414.jpg"
                      alt="ホテル　青島サンクマール"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full space-y-4">
                    <ul className="space-y-2">
                    <li key="0" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">国の天然記念物「鬼の洗濯板」が目の前！太平洋の水平線を180度見渡す絶景ロケーション</span></li>
                    <li key="1" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">とろみのある良質な自家源泉天然温泉！波の音を聴きながら湯船に浸かる展望大浴場</span></li>
                    <li key="2" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">名物・伊勢海老の姿造りや宮崎牛のすき焼き・陶板焼きなど豪華宮崎グルメプランが充実</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      青島海岸の南端、奇岩「鬼の洗濯板」が広がる海岸線に建つ絶景温泉旅館。大浴場や露天風呂からは太平洋の雄大なパノラマが広がり、朝には海から昇る感動の朝日を眺めながらの名湯入浴が楽しめます。泉質は植物起源の有機物を含んだ美肌の湯。冬の特別会席では、甘みたっぷりの伊勢海老活造りや宮崎牛が食卓を彩り、日南海岸観光と鵜戸神宮初詣の拠点として絶大な人気を誇ります。
                    </p>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-4 text-xs text-amber-950/90 leading-relaxed italic">
                  「」
                </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>宮崎県 宮崎市折生迫7408</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">[宮崎空港]から車20分／高速道路[宮崎IC]から車20分／JR日南線[青島駅]から車7分</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥13,000〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18414%2F18414.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm shrink-0"
                  >
                    <span>空室確認・宿泊プランを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4">
                  <div className="space-y-1">
                    <span className="inline-block bg-cyan-100 text-cyan-900 text-xs px-2.5 py-1 rounded-full font-semibold">
                      第4位 厳選名宿
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                      ＡＮＡホリデイ・インリゾート宮崎　ｂｙ　ＩＨＧ
                    </h3>
                    <p className="text-xs text-cyan-800 font-medium">青島ビーチ目前の世界的ブランドリゾート！天然温泉とパームツリーの南国風情</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-amber-900">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-sm">4.35</span>
                    <span className="text-xs text-stone-700 font-medium">(2180件)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/8782/8782.jpg"
                      alt="ＡＮＡホリデイ・インリゾート宮崎　ｂｙ　ＩＨＧ"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full space-y-4">
                    <ul className="space-y-2">
                    <li key="0" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">パームツリーが揺れる南国リゾート感満載の広大な敷地！青島神社へ徒歩圏内の好立地</span></li>
                    <li key="1" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">「青島温泉」を引き込んだ展望温泉大浴場と室内プール・フィットネスを完備</span></li>
                    <li key="2" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">和洋中の多彩な料理が並ぶ贅沢ビュッフェや宮崎郷土料理レストランで大満足の夕食</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      青島海岸の白砂青松とビーチに隣接する本格派リゾートホテル。開放感あふれるロビーからは南国のパームツリーと海が見渡せ、冬でも暖かなリゾート気分を満喫できます。館内の温泉大浴場は美肌効果の高いアルカリ性単純温泉で、冬の冷えた身体を心地よく温めてくれます。青島神社の新春初詣はもちろん、日南海岸を南下して鵜戸神宮や飫肥城下町を巡るドライブの起点に最適です。
                    </p>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-4 text-xs text-amber-950/90 leading-relaxed italic">
                  「海が目の前の好立地、窓の清掃に期待ロケーション最高でした。すぐ海でした。窓がもっと綺麗だったら、景色ももっと綺麗に見えただろうな、と思いました。たくさんの外国人も泊まってらっしゃって、サー。」
                </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>宮崎県 宮崎市青島1-16-1</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">宮崎自動車道宮崎ICから国道220号線で15分。宮崎ブーゲンビリア空港から車で15分。JRこどものくに駅から徒歩7分。</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥5,296〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8782%2F8782.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm shrink-0"
                  >
                    <span>空室確認・宿泊プランを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4">
                  <div className="space-y-1">
                    <span className="inline-block bg-cyan-100 text-cyan-900 text-xs px-2.5 py-1 rounded-full font-semibold">
                      第5位 厳選名宿
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                      ホテルシーズン日南
                    </h3>
                    <p className="text-xs text-cyan-800 font-medium">油津港の風情漂う広渡川河畔のホテル！日南の海鮮グルメと快適なビジネス＆観光ステイ</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-amber-900">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-sm">4.09</span>
                    <span className="text-xs text-stone-700 font-medium">(799件)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/30939/30939.jpg"
                      alt="ホテルシーズン日南"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full space-y-4">
                    <ul className="space-y-2">
                    <li key="0" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">プロ野球春季キャンプ地として名高い日南市油津！広渡川の河口近くに位置する快適ホテル</span></li>
                    <li key="1" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">全室ゆったりとした広さを確保し、上質なベッドと充実のアメニティで心地よい休息を提供</span></li>
                    <li key="2" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">ホテル内レストランで味わう日南一本釣りカツオや宮崎地頭鶏の炭火焼きが好評</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      日南市の中心部、歴史ある油津港や広渡川の景観を望むリバーサイドホテル。飫肥城下町まで車で約15分、鵜戸神宮まで車で約20分と、日南の二大観光スポットのちょうど中間に位置する利便性が大きな強みです。地元食材を熟知したシェフが手がける夕食プランでは、一本釣りカツオのタタキや宮崎の地鶏料理を堪能でき、リーズナブルで快適な日南旅行を叶えてくれます。
                    </p>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-4 text-xs text-amber-950/90 leading-relaxed italic">
                  「いつもと違う雰囲気で、また利用したい出張の時はいつも一般的なビジネスホテルでしたが今回はいつもと違った雰囲気のホテルで宿泊出来ました。また、機会があれば。」
                </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>宮崎県 日南市園田3-11-1</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">宮崎ICから車で約40分/宮崎空港より車で約50分・宮崎交通バス梅ヶ浜下車徒歩3分/日南線JR油津駅より車で約3分</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥5,400〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30939%2F30939.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm shrink-0"
                  >
                    <span>空室確認・宿泊プランを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            </div>
          </section>

          {/* 楽天ふるさと納税 案内 */}
          <section className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-300/60 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-amber-600" />
              <h3 className="text-lg sm:text-xl font-bold text-amber-950">
                楽天ふるさと納税で賢くお得に泊まる方法
              </h3>
            </div>
            <p className="text-sm text-amber-950/90 leading-relaxed">
              楽天ふるさと納税を活用すると、寄付金額に応じた宿泊クーポンが返礼品として付与され、実質自己負担2,000円で憧れの高級温泉旅館や特別会席プランに宿泊できます。
              すでに予約済みの宿泊であっても「あとから割引」が適用可能なため、旅行の計画に合わせて手軽に節税とお得なステイを両立できます。
            </p>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-2.5 rounded-xl shadow-sm text-sm transition-colors"
              >
                <span>楽天トラベル×ふるさと納税 対象宿一覧・クーポン取得はこちら</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* FAQ セクション */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-bold text-cyan-700 tracking-wider uppercase">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                冬の日南・飫肥・鵜戸海岸旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-4">

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>鵜戸神宮の「運玉投げ」のルールとコツはありますか？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>運玉（5個200円）を受け取り、男性は左手、女性は右手で投げます。断崖下にある亀石の背中にある直径約60cmの窪み（枡形）に見事入れば願いが叶うとされます。放物線を描くように少し山なりに投げ入れるのがコツです。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>飫肥城下町の散策にはどのくらいの時間が必要ですか？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>主要な見どころ（飫肥城大手門、松尾の丸、予章館、商人町通り）を巡り、食べ歩きを楽しむ場合の目安所要時間は約2〜3時間です。あゆみちゃんマップ（散策マップ＆引換券）を利用するとお得に名物スイーツや工芸品を楽しめます。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>冬の日南で味わうべきおすすめの魚介は何ですか？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>日南は一本釣りカツオの水揚げ日本一を誇り、冬の寒ガツオは脂が乗り刺身やタタキ、カツオめしで絶品です。また、9月から春先にかけて解禁される近海伊勢海老の活造りや味噌汁も外せない冬の味覚です。
              </p>
            </div>
            </div>
          </section>

          {/* 関連特集リンク */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-3">
              あわせて読みたい関連特集
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li>
                <Link href="/prefectures/miyazaki" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>宮崎県のおすすめ観光名所＆温泉宿一覧</span>
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>全国の季節・目的別旅行特集一覧</span>
                </Link>
              </li>

            <li>
              <Link href="/winter-miyazaki-nichinan-udo-shrine-hatsumode-iseebi-wagyu-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>【日南・鵜戸神宮初詣＆伊勢海老】冬の宮崎海岸リゾート名宿</span>
              </Link>
            </li>

            <li>
              <Link href="/winter-miyazaki-aoshima-onsen-miyazakigyu-iseebi-resort-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>【青島温泉・鬼の洗濯板と宮崎牛】冬の南国温泉リゾート名宿</span>
              </Link>
            </li>

            <li>
              <Link href="/winter-miyazaki-hyuga-umagase-sea-cross-iseebi-miyazakigyu-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>【日向・馬ヶ背＆クルスの海】冬の日向灘伊勢海老と宮崎牛名宿</span>
              </Link>
            </li>

            <li>
              <Link href="/winter-miyazaki-ebino-plateau-shiratori-onsen-miyazakigyu-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>【えびの高原・白鳥温泉と樹氷】冬の霧島連山と宮崎牛名宿</span>
              </Link>
            </li>
              <li>
                <Link href="/furusato-tax-luxury-hotspring-ryokan-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>実質2,000円で泊まる名湯・高級温泉旅館ガイド</span>
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-local-gourmet-inn-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>ご当地グルメを堪能する全国美食旅特集</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
