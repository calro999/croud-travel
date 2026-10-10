import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "信楽焼の器美学と近江牛懐石：日本最古の銘柄牛！おごと温泉・信楽・琵琶湖畔の名湯宿5選",
  description: "日本六古窯の一つとして温かみある土の風合いが魅力の「信楽焼（しがらきやき）」！信楽焼の特注プレートで味わう日本最古のブランド牛「近江牛」と、琵琶湖を一望するおごと温泉の美肌湯に寛ぐ雅な休日。",
  keywords: "琵琶湖 温泉 露天風呂 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: "https://croud-travel.pages.dev/traditional-shiga-shigaraki-ware-art-stay/",
  },
  openGraph: {
    title: "信楽焼の器美学と近江牛懐石：日本最古の銘柄牛！おごと温泉・信楽・琵琶湖畔の名湯宿5選",
    description: "日本六古窯の一つとして温かみある土の風合いが魅力の「信楽焼（しがらきやき）」！信楽焼の特注プレートで味わう日本最古のブランド牛「近江牛」と、琵琶湖を一望するおごと温泉の美肌湯に寛ぐ雅な休日。",
    url: 'https://croud-travel.pages.dev/traditional-shiga-shigaraki-ware-art-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【信楽焼の器美学と近江牛懐石】日本最古の銘柄牛！おごと温泉・信楽・琵琶湖畔の名湯宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "信楽焼の器美学と近江牛懐石：日本最古の銘柄牛！おごと温泉・信楽・琵琶湖畔の名湯宿5選",
    description: "日本六古窯の一つとして温かみある土の風合いが魅力の「信楽焼（しがらきやき）」！信楽焼の特注プレートで味わう日本最古のブランド牛「近江牛」と、琵琶湖を一望するおごと温泉の美肌湯に寛ぐ雅な休日。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【信楽焼の器美学と近江牛懐石】日本最古の銘柄牛！おごと温泉・信楽・琵琶湖畔の名湯宿5選",
    "description": "日本六古窯の一つとして温かみある土の風合いが魅力の「信楽焼（しがらきやき）」！信楽焼の特注プレートで味わう日本最古のブランド牛「近江牛」と、琵琶湖を一望するおごと温泉の美肌湯に寛ぐ雅な休日。",
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "T00:00:00+09:00",
    "dateModified": "T00:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド 編集部",
      "url": "https://croud-travel.pages.dev"
    },
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.pages.dev/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.pages.dev/traditional-shiga-shigaraki-ware-art-stay"
    }
  };

  const hotelList = [
            {
              name: "旅館　紅鮎",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/74600/74600.jpg",
              rating: 4.5,
              reviews: 262,
              price: "¥8,800〜",
              access: "ＪＲ北陸本線「高月」駅よりお車で約１０分。送迎バスあり（要予約）。無料駐車場。",
              features: ["「いらっしゃいませ」と申し上げるより、「おかえりなさいませ」と迎えてさしあげたい。", "長浜市湖北町尾上312", "楽天アワード受賞歴"]
            },
            {
              name: "尾上　旅館　うをよし",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/137456/137456.jpg",
              rating: 4.8,
              reviews: 61,
              price: "¥16,000〜",
              access: "北陸道木の本インターより車で約10分、長浜インターより20分。",
              features: ["目の前に広がる北琵琶湖、竹生島、神秘的な景色は旅人の期待を決して裏切りません。", "長浜市湖北町尾上287-1", "楽天アワード受賞歴"]
            },
            {
              name: "おごと温泉　びわこ緑水亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/3165/3165.jpg",
              rating: 4.7,
              reviews: 2482,
              price: "¥20,140〜",
              access: "名神京都東Ｉ．Ｃから湖西道路経由で20分。ＪＲおごと温泉駅から送迎あり（要電話）",
              features: ["滋賀県おごと温泉、琵琶湖畔の旅館、露天風呂付客室や近江牛のプラン、家族・カップルに人気の旅館。", "大津市雄琴6-1-6", "楽天アワード受賞歴"]
            },
            {
              name: "京都大原の民宿～１００年続く希少味噌～大原温泉　大原の里",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14574/14574.jpg",
              rating: 4.2,
              reviews: 506,
              price: "¥10,900〜",
              access: "JR京都駅より京都バス 大原行きで「大原」下車 徒歩１２分★「四条河原町」～「大原」はバスで約５０分♪",
              features: ["大原温泉湯元。露天・五右衛門風呂がある大原名物「味噌鍋」本家の民宿。", "京都市左京区大原草生町41", "楽天アワード受賞歴"]
            },
            {
              name: "びわ湖畔　おいしい湯の宿　長浜太閤温泉　浜湖月",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13910/13910.jpg",
              rating: 4.8,
              reviews: 71,
              price: "¥16,500〜",
              access: "ＪＲ長浜駅より徒歩５分／北陸自動車道長浜ＩＣより約１０分 無料駐車場",
              features: ["琵琶湖を眺め、新鮮な湖国の幸を活かした料理自慢", "長浜市公園町4-25", "楽天アワード受賞歴"]
            }
  ];


  return (
    <article className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-50 text-stone-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative h-[480px] md:h-[580px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-stone-900/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-1000"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80')" }}
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/90 text-white text-sm font-semibold tracking-wider mb-6 shadow-lg backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>信楽焼の器＆近江牛名湯宿</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">「信楽焼の器美学と近江牛懐石」日本最古の銘柄牛！おごと温泉・信楽・琵琶湖畔の名湯宿5選</h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            日本六古窯の一つとして温かみある土の風合いが魅力の「信楽焼（しがらきやき）」！信楽焼の特注プレートで味わう日本最古のブランド牛「近江牛」と、琵琶湖を一望するおごと温泉の美肌湯に寛ぐ雅な休日。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【信楽焼の器美学と近江牛懐石】日本最古の銘柄牛！おごと温泉・信楽・琵琶湖畔の名湯宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「旅館 紅鮎」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「旅館 紅鮎」へは、ＪＲ北陸本線「高月」駅よりお車で約１０分。最寄りの高月駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「旅館 紅鮎」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「旅館 紅鮎」は『「いらっしゃいませ」と申し上げるより、「おかえりなさいませ」と迎えてさしあげたい。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「旅館 紅鮎」と「尾上 旅館 うをよし」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【信楽焼の器美学と近江牛懐石】日本最古の銘柄牛！おごと温泉・信楽・琵琶湖畔の名湯宿5選","item":"https://croud-travel.pages.dev/traditional-shiga-shigaraki-ware-art-stay"}]}) }}
      />
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              土の温もり宿る信楽焼ととろける近江牛。琵琶湖畔の名湯・おごと温泉で過ごす美食とアートの旅
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            奈良時代から受け継がれる素朴で力強い風合いの「信楽焼」。宿のダイニングでは、信楽焼の器や陶板に美しく盛られたA5ランク近江牛のステーキやすき焼き、琵琶湖特産のビワマスや鮎が目と舌を楽しませてくれます。比叡山の麓に広がるおごと温泉のアルカリ性単純温泉に浸かり、朝夕で表情を変える琵琶湖の雄大なレイクビューを眺めながら心豊かな休日をお過ごしください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">日本六古窯「信楽焼」の特注器で楽しむ創作懐石</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">温かみある土の質感と色彩。料理の美しさを際立たせる芸術的な演出。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">日本最古のブランド和牛「特選近江牛ステーキ＆すき焼き」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">独特の粘りと甘みのある脂。口の中でとろける極上の肉質を堪能。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">比叡山麓・おごと温泉の琵琶湖展望露天風呂</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">ph9.0の高アルカリ性美肌湯。広大な琵琶湖のパノラマを望む絶景温泉。</p>
            </div>
          </div>
        </section>

        {/* Hotel Cards List */}
        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <span className="text-amber-600 font-bold tracking-wider text-xs md:text-sm uppercase">Recommended Accommodations</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">厳選おすすめ宿 5選</h2>
            </div>
            <p className="text-xs md:text-sm text-stone-500">※宿泊料金・空室情報は季節により変動します</p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {hotelList.map((hotel, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200/80 flex flex-col md:flex-row group"
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[260px] overflow-hidden">
                  <Image 
                    src={hotel.img} 
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                    第{index + 1}位
                  </div>
                </div>

                <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 font-bold text-sm text-stone-900">{hotel.rating}</span>
                      </div>
                      <span className="text-xs text-stone-400">({hotel.reviews}件のクチコミ)</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors mb-3">
                      {hotel.name}
                    </h3>

                    <div className="flex items-start gap-1.5 text-xs md:text-sm text-stone-500 mb-4">
                      <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                      <span>{hotel.access}</span>
                    </div>

                    <div className="space-y-2 mb-4">
                      {hotel.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs md:text-sm text-stone-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-stone-500 block">参考料金 (2名1室利用時/1名あたり)</span>
                      <span className="text-xl md:text-2xl font-black text-amber-600">{hotel.price}</span>
                    </div>
                    <Link 
                      href={`/hotels/${encodeURIComponent(hotel.name)}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-sm hover:shadow transition-all duration-200"
                    >
                      <span>宿泊プラン・空室を見る</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feature summary tips */}
        <section className="bg-stone-900 text-stone-100 rounded-2xl p-8 md:p-10 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-7 h-7 text-amber-400" />
            <h2 className="text-xl md:text-2xl font-bold text-white">
              旅をより最高にするためのワンポイントアドバイス
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-300">
            <div className="space-y-2">
              <h3 className="font-bold text-amber-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                ベストシーズンの早期予約が鍵
              </h3>
              <p className="leading-relaxed text-xs md:text-sm">
                特に週末や連休は数ヶ月前から予約が埋まりやすいため、日程が決まり次第早めの確保がおすすめです。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-amber-400 flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                こだわりの食事プランを選択
              </h3>
              <p className="leading-relaxed text-xs md:text-sm">
                夕食の会席コースや特別な部屋食プランなど、宿自慢のグルメプランを事前に指定するとより満足度の高い滞在になります。
              </p>
            </div>
          </div>
        </section>

        {/* Related Callout */}
        <section className="text-center py-8 border-t border-stone-200">
          <h3 className="text-lg font-bold text-stone-800 mb-3">他の特集記事もチェック</h3>
          <p className="text-sm text-stone-500 mb-6">全国各地の魅力あふれるテーマ別おすすめ宿泊施設をご紹介しています</p>
          <Link
            href="/features"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-900 text-white font-bold text-sm shadow-sm transition-colors"
          >
            <span>特集一覧ページへ戻る</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </section>
      
        {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】旅館 紅鮎を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 高月駅よりアクセス。ＪＲ北陸本線「高月」駅よりお車で約１０分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「旅館 紅鮎」にチェックイン。「いらっしゃいませ」と申し上げるより、「おかえりなさいませ」と迎えてさしあげたい。などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「旅館 紅鮎」の湯処へ。「いらっしゃいませ」と申し上げるより、「おかえりなさいませ」と迎えてさとともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「旅館 紅鮎」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「旅館 紅鮎」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「旅館 紅鮎」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「尾上 旅館 うをよし」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と旅館 紅鮎の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「旅館 紅鮎」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「旅館 紅鮎」へは、ＪＲ北陸本線「高月」駅よりお車で約１０分。最寄りの高月駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「旅館 紅鮎」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「旅館 紅鮎」は『「いらっしゃいませ」と申し上げるより、「おかえりなさいませ」と迎えてさしあげたい。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「旅館 紅鮎」と「尾上 旅館 うをよし」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/mie"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                三重県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kumamoto"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                熊本県の宿・温泉
              </Link>
              <Link
                href="/prefectures/saitama"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                埼玉県の宿・温泉
              </Link>
              <Link
                href="/prefectures/tokushima"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                徳島県の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="traditional-shiga-shigaraki-ware-art-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
