import ShareButtons from "@/app/components/ShareButtons";
import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【11月解禁！越前ガニ＆間人ガニ】黄色いタグ付き最高峰ブランド蟹を味わう名湯宿5選",
  description: "11月6日のカニ漁解禁とともに訪れる冬の至福！福井県が誇る黄色いタグ付き「越前がに」や、京都・丹後半島の幻の「間人（たいざ）ガニ」を、刺身・焼き・茹で・カニ味噌甲羅焼きのフルコースで堪能する冬の贅沢温泉旅。",
  keywords: "あわら温泉 越前ガニ 旅館, 11月旅行, 12月旅行, 冬休み, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-echizen-crab-taiza-luxury-stay/",
  },
  openGraph: {
    title: "【11月解禁！越前ガニ＆間人ガニ】黄色いタグ付き最高峰ブランド蟹を味わう名湯宿5選",
    description: "11月6日のカニ漁解禁とともに訪れる冬の至福！福井県が誇る黄色いタグ付き「越前がに」や、京都・丹後半島の幻の「間人（たいざ）ガニ」を、刺身・焼き・茹で・カニ味噌甲羅焼きのフルコースで堪能する冬の贅沢温泉旅。",
    url: 'https://croud-travel.pages.dev/winter-echizen-crab-taiza-luxury-stay/',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/160944/160944.jpg',
        width: 1200,
        height: 630,
        alt: "【11月解禁！越前ガニ＆間人ガニ】黄色いタグ付き最高峰ブランド蟹を味わう名湯宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11月解禁！越前ガニ＆間人ガニ】黄色いタグ付き最高峰ブランド蟹を味わう名湯宿5選",
    description: "11月6日のカニ漁解禁とともに訪れる冬の至福！福井県が誇る黄色いタグ付き「越前がに」や、京都・丹後半島の幻の「間人（たいざ）ガニ」を、刺身・焼き・茹で・カニ味噌甲羅焼きのフルコースで堪能する冬の贅沢温泉旅。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11月解禁！越前ガニ＆間人ガニ】黄色いタグ付き最高峰ブランド蟹を味わう名湯宿5選",
    "description": "11月6日のカニ漁解禁とともに訪れる冬の至福！福井県が誇る黄色いタグ付き「越前がに」や、京都・丹後半島の幻の「間人（たいざ）ガニ」を、刺身・焼き・茹で・カニ味噌甲羅焼きのフルコースで堪能する冬の贅沢温泉旅。",
    "image": "https://img.travel.rakuten.co.jp/share/HOTEL/160944/160944.jpg",
    "datePublished": "2026-10-18T00:00:00+09:00",
    "dateModified": "2026-10-18T00:00:00+09:00",
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
      "@id": "https://croud-travel.pages.dev/winter-echizen-crab-taiza-luxury-stay/"
    }
  };

  const hotelList = [
            {
              name: "愛犬と添い寝できる温泉旅館　あわら温泉　月香",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/160944/160944.jpg",
              rating: 4.4,
              reviews: 305,
              price: "¥16,000〜",
              access: "ＪＲ　あわら温泉駅よりお車にて約１５分",
              features: ["愛犬と温泉旅館で過ごすという贅沢。お食事のときも寛ぎのときもワンちゃんと一緒にお過ごしいただけます。", "あわら市舟津9-8", "楽天アワード受賞歴"]
            },
            {
              name: "あわら温泉　光風湯圃　べにや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28319/28319.jpg",
              rating: 4.8,
              reviews: 253,
              price: "¥47,300〜",
              access: "ＪＲ芦原温泉駅より車で15分。送迎有（前日21時までに要予約）／北陸自動車道・金津ＩＣ～１５分",
              features: ["◆25年度 1ミシュランキーに選出◆越前がに懐石◆全室半露天風呂付き◆朝・夕部屋食◆", "あわら市温泉4-510", "楽天アワード受賞歴"]
            },
            {
              name: "越前あわら温泉　長谷川",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/17657/17657.jpg",
              rating: 4.4,
              reviews: 603,
              price: "¥6,600〜",
              access: "北陸自動車道金津ＩＣより車15分 　ＪＲでお越しの場合　芦原温泉駅より送迎有（約10分）15時～18時",
              features: ["令和4年3月　和洋室　リニューアル！　全館Wi-Fi完備！　レトロでモダンな刻を過ごせる宿", "あわら市二面48-14", "楽天アワード受賞歴"]
            },
            {
              name: "三国温泉　展望自慢の料理旅館　はれや旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/142842/142842.jpg",
              rating: 4.3,
              reviews: 161,
              price: "¥6,600〜",
              access: "ＪＲ　芦原温泉駅よりお車にて１０分",
              features: ["美しいオーシャンビューを独り占め！温泉展望露天風呂と新鮮魚介の会席料理が自慢の全15室の料理宿", "坂井市三国町梶26-45-1", "楽天アワード受賞歴"]
            },
            {
              name: "北陸　福井　あわら温泉　清風荘（北陸最大級の庭園露天風呂の宿　清風荘）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/19549/19549.jpg",
              rating: 4.6,
              reviews: 3789,
              price: "¥19,541〜",
              access: "ＪＲ：芦原温泉駅より15分(迎えバス有り・要予約)/お車：北陸道金津ＩＣより20分",
              features: ["北陸最大級の庭園露天風呂をはじめ多彩な浴槽、旬の地元食材や海鮮を劇場型ビュッフェや会席料理で堪能！", "あわら市温泉3丁目803", "楽天アワード受賞歴"]
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
          style={{ backgroundImage: "url('https://img.travel.rakuten.co.jp/share/HOTEL/160944/160944.jpg')" }}
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/90 text-white text-sm font-semibold tracking-wider mb-6 shadow-lg backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>11月解禁！越前ガニ＆間人ガニ</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">【11月解禁！越前ガニ＆間人ガニ】黄色いタグ付き最高峰ブランド蟹を味わう名湯宿5選</h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            11月6日のカニ漁解禁とともに訪れる冬の至福！福井県が誇る黄色いタグ付き「越前がに」や、京都・丹後半島の幻の「間人（たいざ）ガニ」を、刺身・焼き・茹で・カニ味噌甲羅焼きのフルコースで堪能する冬の贅沢温泉旅。
          </p>
        </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 my-6">
        <ShareButtons title={"【11月解禁！越前ガニ＆間人ガニ】黄色いタグ付き最高峰ブランド蟹を味わう名湯宿5選"} url={"https://croud-travel.pages.dev/winter-echizen-crab-taiza-luxury-stay/"} />
      </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features/" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【11月解禁！越前ガニ＆間人ガニ】黄色いタグ付き最高峰ブランド蟹を味わう名湯宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「愛犬と添い寝できる温泉旅館 あわら温泉 月香」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「愛犬と添い寝できる温泉旅館 あわら温泉 月香」へは、ＪＲ あわら温泉駅よりお車にて約１５分。詳しい送迎情報や道順は楽天トラベルの最新宿情報をご確認ください。"}},{"@type":"Question","name":"「愛犬と添い寝できる温泉旅館 あわら温泉 月香」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「愛犬と添い寝できる温泉旅館 あわら温泉 月香」は『愛犬と温泉旅館で過ごすという贅沢。お食事のときも寛ぎのときもワンちゃんと一緒にお過ごしいた。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「愛犬と添い寝できる温泉旅館 あわら温泉 月香」と「あわら温泉 光風湯圃 べにや」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features/"},{"@type":"ListItem","position":3,"name":"【11月解禁！越前ガニ＆間人ガニ】黄色いタグ付き最高峰ブランド蟹を味わう名湯宿5選","item":"https://croud-travel.pages.dev/winter-echizen-crab-taiza-luxury-stay/"}]}) }}
      />
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">冬の日本海がもたらす最高の恵み。極上ブランド蟹の甘みと濃厚なカニ味噌に酔いしれる福井・丹後ステイ</h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            毎年11月6日に解禁される日本海の冬の王様「ズワイガニ」。皇室献上蟹として名高い越前がには、身の詰まりと繊細な甘み、そして濃厚でコク深いカニ味噌が格別です。熟練の料理人が目の前で捌く花咲くカニ刺し、香ばしい炭火焼きガニ、熱々の茹でガニ、そして甲羅酒。あわら温泉や夕日ヶ浦温泉の温もりあふれる美肌湯とともに、冬一番の贅沢をお届けします。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">黄色いタグ付き！本場「越前がに・間人ガニ」フルコース</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">カニ刺し、焼きガニ、茹でガニ、カニすき鍋、甲羅味噌焼きを余すところなく。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">関西・北陸の名湯「あわら温泉＆丹後温泉郷」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">74もの源泉を持つあわら温泉のまろやかな湯。庭園露天風呂で心身を癒やす。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">冬の日本海・東尋坊の絶景パノラマと地酒ペアリング</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">荒波が織りなす冬の絶景と、福井・京都の名蔵元が誇る辛口純米酒。</p>
            </div>
          </div>
        </section>

        {/* Hotel Cards List */}
        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <span className="text-amber-600 font-bold tracking-wider text-xs md:text-sm uppercase">11・12月おすすめ宿泊施設</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">厳選おすすめ宿 5選</h2>
            </div>
            <p className="text-xs md:text-sm text-stone-500">※宿泊料金・空室情報は季節により変動します</p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {hotelList.map((hotel, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200/80 flex flex-col group"
              >
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2/1] overflow-hidden">
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

                <div className="p-6 md:p-8 w-full flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 font-bold text-sm text-stone-900">{hotel.rating}</span>
                      </div>
                      <span className="text-xs text-stone-400">({hotel.reviews}件のクチコミ)</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors mb-3">{hotel.name}</h3>

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
                    <a
                      href={(() => { const id = hotel.img?.match(/HOTEL\/(\d+)/)?.[1]; return id ? `https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=${encodeURIComponent(`https://travel.rakuten.co.jp/HOTEL/${id}/${id}.html`)}` : `https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=${encodeURIComponent(`https://travel.rakuten.co.jp/`)}`; })()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-sm hover:shadow transition-all duration-200"
                    >
                      <span>宿泊プラン・空室を見る</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">【1泊2日】愛犬と添い寝できる温泉旅館 あわら温泉 月香を拠点にするおすすめ滞在モデルコース</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> ＪＲ あわら温泉駅よりお車にて約１５分で現地へ到着。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「愛犬と添い寝できる温泉旅館 あわら温泉 月香」にチェックイン。愛犬と温泉旅館で過ごすという贅沢。お食事のときも寛ぎのときもワンちゃんと一緒にお過ごしいただけます。 窓外に広がる景色を眺めながらチェックイン後の寛ぎ時間を。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「愛犬と添い寝できる温泉旅館 あわら温泉 月香」の大浴場・露天風呂へ。日暮れの静けさの中で湯に浸かり、旅の緊張をゆっくりと解きほぐす。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「愛犬と添い寝できる温泉旅館 あわら温泉 月香」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「愛犬と添い寝できる温泉旅館 あわら温泉 月香」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「愛犬と添い寝できる温泉旅館 あわら温泉 月香」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は宿周辺の散策とショッピングを満喫。地元の名産品やグルメを味わってから余裕をもって帰路につく。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">よくある質問（FAQ）と愛犬と添い寝できる温泉旅館 あわら温泉 月香の滞在ポイント</h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「愛犬と添い寝できる温泉旅館 あわら温泉 月香」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「愛犬と添い寝できる温泉旅館 あわら温泉 月香」へは、ＪＲ あわら温泉駅よりお車にて約１５分。詳しい送迎情報や道順は楽天トラベルの最新宿情報をご確認ください。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「愛犬と添い寝できる温泉旅館 あわら温泉 月香」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「愛犬と添い寝できる温泉旅館 あわら温泉 月香」は『愛犬と温泉旅館で過ごすという贅沢。お食事のときも寛ぎのときもワンちゃんと一緒にお過ごしいただけます。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「愛犬と添い寝できる温泉旅館 あわら温泉 月香」と「あわら温泉 光風湯圃 べにや」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">あわせて読みたい人気特集＆全国エリアガイド</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <a href="/winter-fukui-eiheiji-snow-zen-echizen-oroshi-soba-wakasa-beef-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">曹洞宗大本山永平寺の雪静寂＆新春開運参拝！ 名物越前おろしそばと極上若狭牛・越前がにを味わう名宿5選</span>
            </a>
            <a href="/winter-fukui-wakasa-fugu-tsuruga-echizen-crab-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">「11・12・1月福井」冬の若狭湾「若狭ふぐ」てっさ・てっちり＆敦賀港越前がに・三方五湖寒うなぎ・海絶景温泉を満喫する名宿5選</span>
            </a>
            <a href="/furusato-tax-nagasaki-unzen-obama-autumn-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">長崎・雲仙地獄の紅葉とクラシックリゾート！白濁硫黄泉の名湯＆長崎和牛・秋島原グルメ｜ふるさと納税で泊まれる名宿ガイド</span>
            </a>
            <a href="/japan-winter-crab-fugu-seafood-feast-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">「冬の四大味覚極上宿」松葉ガニ・越前ガニ・下関とらふぐ・寒ブリ 厳選ガイド</span>
            </a>
          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/fukui/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                福井県の宿・温泉
              </Link>
              <Link
                href="/prefectures/nagano/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                長野県の宿・温泉
              </Link>
              <Link
                href="/prefectures/yamanashi/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山梨県の宿・温泉
              </Link>
              <Link
                href="/prefectures/niigata/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                新潟県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

        {/* Related Callout */}
        <section className="text-center py-8 border-t border-stone-200">
          <h3 className="text-lg font-bold text-stone-800 mb-3">他の特集記事もチェック</h3>
          <p className="text-sm text-stone-500 mb-6">全国各地の魅力あふれるテーマ別おすすめ宿泊施設をご紹介しています</p>
          <Link
            href="/features/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-900 text-white font-bold text-sm shadow-sm transition-colors"
          >
            <span>特集一覧ページへ戻る</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </section>
      
        {/* Model Course Section */}
                {/* Model Course Section */}
                {/* FAQ Section */}
        

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">あわせて読みたい人気特集＆全国エリアガイド</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <a href="/winter-fukui-obama-myotsuji-temple-snow-wakasa-fugu-mackerel-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">「御食国の冬味覚・明通寺国宝本堂の静寂と若狭ふぐ」2026-2027年冬の福井・若狭小浜！名物若狭とらふぐフルコースと雪見温泉名宿5選</span>
            </a>
            <a href="/winter-fukui-wakasa-mikatagoko-onsen-fugu-echizen-crab-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">【11・12月福井・若狭三方五湖】初冬レイクビューと若狭ふぐ 越前蟹・名物焼き鯖＆敦賀港冬海鮮会席を愉しむ湖畔・海辺名宿5選</span>
            </a>
            <a href="/winter-kanagawa-yugawara-onsen-bungo-kaiseki-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">【11・12月湯河原温泉の名湯と奥湯河原晩秋紅葉】 文豪が愛した万葉の隠れ家・相模湾の伊勢海老＆地魚会席の宿5選</span>
            </a>
            <a href="/winter-shiga-yogo-lake-wakasagi-kamonabe-shizugatake-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">「神秘の余呉湖ワカサギと本場天然真鴨鍋」2026-2027年冬の滋賀・湖北！賤ヶ岳雪景色と近江牛名宿5選</span>
            </a>
          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/ishikawa/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                石川県の宿・温泉
              </Link>
              <Link
                href="/prefectures/aichi/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                愛知県の宿・温泉
              </Link>
              <Link
                href="/prefectures/shizuoka/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                静岡県の宿・温泉
              </Link>
              <Link
                href="/prefectures/nagano/"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                長野県の宿・温泉
              </Link>
            </div>
          
      <div className="max-w-5xl mx-auto px-4 sm:px-6 my-8">
        <ShareButtons title={"【11月解禁！越前ガニ＆間人ガニ】黄色いタグ付き最高峰ブランド蟹を味わう名湯宿5選"} url={"https://croud-travel.pages.dev/winter-echizen-crab-taiza-luxury-stay/"} />
      </div>
      <HubRelatedPosts currentSlug="winter-echizen-crab-taiza-luxury-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
