import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "【幻想の朝霧と紅葉！秋の由布院】金鱗湖徒歩圏＆由布岳ビューの極上離れ宿5選",
  description: "冷え込む秋の早朝、湖面から立ち上る幻想的な朝霧に包まれる金鱗湖と由布岳の絶景！金鱗湖徒歩2分の料亭宿から、全室客室露天風呂付きの離れ宿まで厳選5選。",
  keywords: "由布院 朝霧 金鱗湖 見頃, 由布院温泉 離れ 客室露天風呂, 草庵秋桜, 旅亭 田乃倉, ゆふいん花由, 由布院 高級旅館",
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-oita-yufuin-kinrinko-morning-mist-hotels-stay/",
  },
  openGraph: {
    title: "【幻想の朝霧と紅葉！秋の由布院】金鱗湖徒歩圏＆由布岳ビューの極上離れ宿5選",
    description: "冷え込む秋の早朝、湖面から立ち上る幻想的な朝霧に包まれる金鱗湖と由布岳の絶景！金鱗湖徒歩2分の料亭宿から、全室客室露天風呂付きの離れ宿まで厳選5選。",
    url: 'https://croud-travel.pages.dev/autumn-oita-yufuin-kinrinko-morning-mist-hotels-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "由布院 金鱗湖 朝霧",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【幻想の朝霧と紅葉！秋の由布院】金鱗湖徒歩圏＆由布岳ビューの極上離れ宿5選",
    description: "冷え込む秋の早朝、湖面から立ち上る幻想的な朝霧に包まれる金鱗湖と由布岳の絶景！金鱗湖徒歩2分の料亭宿から、全室客室露天風呂付きの離れ宿まで厳選5選。",
  }
};

export default function FeaturePage() {
  const hotelList = [
    {
      name: "由布院温泉　山荘　わらび野",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/138081/138081.jpg",
      hotelNo: 138081,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/138081/138081.html"),
      rating: 4.85,
      reviews: 140,
      price: "¥36,000〜",
      access: "JR由布院駅より車で約5分／湯布院ICより車で約3分／大分空港より高速バス約55分",
      features: [
        "楽天トラベルクチコミ4.85点。約3,500坪の広大な敷地にわずか数室の贅沢なオールスイート離れ",
        "全室に源泉掛け流しの客室温泉風呂を完備。由布岳を望む静寂の空間と極上の創作懐石",
        "大分県由布市湯布院町川北952-1（大人の隠れ家として圧倒的な支持を誇る名宿）"
      ]
    },
    {
      name: "由布院温泉　旅亭　田乃倉",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/38277/38277.jpg",
      hotelNo: 38277,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/38277/38277.html"),
      rating: 4.74,
      reviews: 260,
      price: "¥42,900〜",
      access: "JR由布院駅よりタクシー約5分／金鱗湖まで徒歩2分の最高立地",
      features: [
        "金鱗湖まで徒歩2分。早朝の幻想的な朝霧を誰よりも早く静寂の中で見に行ける特等席の宿",
        "純和風の数寄屋造りの佇まい。豊後牛や瀬戸内・豊後水道の海の幸を味わう本格京風懐石",
        "大分県由布市湯布院町川上1556-2（庭園露天風呂と心温まるおもてなしが評判）"
      ]
    },
    {
      name: "由布院温泉　草庵秋桜",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/139452/139452.jpg",
      hotelNo: 139452,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/139452/139452.html"),
      rating: 4.73,
      reviews: 580,
      price: "¥20,322〜",
      access: "由布院駅より徒歩約15分（車約5分）／金鱗湖・湯の坪街道へ徒歩圏内",
      features: [
        "観光列車「ななつ星in九州」を手掛けた水戸岡鋭治氏デザインの温もりある上質な空間",
        "自家農園の無農薬野菜や豊後牛をふんだんに取り入れた創作会席。女性やカップルに大人気",
        "大分県由布市湯布院町川上1500（金鱗湖の朝散歩にも絶好のロケーション）"
      ]
    },
    {
      name: "由布院温泉　朝霧のみえる宿　ゆふいん花由",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/76377/76377.jpg",
      hotelNo: 76377,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/76377/76377.html"),
      rating: 4.69,
      reviews: 1350,
      price: "¥23,760〜",
      access: "湯布院ICより車で約1分／由布院駅より車で約7分（無料送迎あり・要予約）",
      features: [
        "高台から由布院盆地と由布岳を一望。秋の早朝には一面に広がる「雲海・朝霧」を客室から鑑賞",
        "客室露天風呂付き離れが充実。刻一刻と表情を変える朝霧の絶景を湯船から独り占め",
        "大分県由布市湯布院町川北913-11（絶景ロケーションと美味しい料理でリピーター多数）"
      ]
    },
    {
      name: "由布院温泉　ゆふいん月燈庵",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/54519/54519.jpg",
      hotelNo: 54519,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/54519/54519.html"),
      rating: 4.0,
      reviews: 790,
      price: "¥22,000〜",
      access: "湯布院ICより車で約15分／由布院駅より車で約7分",
      features: [
        "約1万坪の広大な椚（くぬぎ）の原生林に佇む、全室露天風呂付きの離れ客室",
        "専用の吊り橋を渡って客室へ向かう非日常の演出。由布岳の四季の彩りと旬の会席料理",
        "大分県由布市湯布院町川上295-2（木立の静寂に包まれる大人の隠れ家リゾート）"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80" 
            alt="由布院 金鱗湖 朝霧"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-800/90 text-white text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            秋の由布院特集・金鱗湖の朝霧と離れ宿
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【幻想の朝霧と紅葉！秋の由布院】<br className="hidden sm:inline" />金鱗湖徒歩圏＆由布岳ビューの極上離れ宿5選
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stone-200 leading-relaxed">
            湖底から温泉と清水が湧き出る金鱗湖。秋から冬の冷え込んだ朝、水面から立ち上る真っ白な朝霧が周囲の紅葉を包み込む奇跡の絶景。歩いて朝霧を見に行ける名宿を厳選。
          </p>
        </div>
      </header>

      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-amber-600">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【幻想の朝霧と紅葉！秋の由布院】金鱗湖徒歩圏＆由布岳ビューの極上離れ宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "金鱗湖の「朝霧（あさぎり）」が見られる時期や時間帯は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "秋から冬（10月中旬〜2月頃）の早朝、前夜と朝の寒暖差が大きい晴れた日によく発生します。時間は日の出直後から午前8時前後が最も幻想的です。湖底から温泉が湧いているため、冷たい外気と触れ合って水面から立ち上る湯気が湖全体を霧で覆います。"
                }
              },
              {
                "@type": "Question",
                "name": "由布院温泉での宿泊エリアや宿の選び方のコツは？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "早朝の金鱗湖散策を最優先するなら、金鱗湖まで徒歩2〜5分圏内の宿（旅亭田乃倉や草庵秋桜など）が便利です。一方、由布院盆地全体の朝霧や雲海、雄大な由布岳のパノラマを望むなら、高台に位置する宿（ゆふいん花由など）の客室露天風呂付き離れが絶大な人気を誇ります。"
                }
              },
              {
                "@type": "Question",
                "name": "10月・11月の由布院の気候と朝の散策の服装は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "盆地気候のため昼夜の寒暖差が激しく、10月下旬〜11月の早朝は5℃前後まで冷え込みます。朝霧鑑賞にはダウンジャケットや厚手のコート、マフラー、手袋などの防寒着が必須です。"
                }
              }
            ]
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev/" },
              { "@type": "ListItem", "position": 2, "name": "特集一覧", "item": "https://croud-travel.pages.dev/features" },
              { "@type": "ListItem", "position": 3, "name": "【幻想の朝霧と紅葉！秋の由布院】金鱗湖徒歩圏＆由布岳ビューの極上離れ宿5選", "item": "https://croud-travel.pages.dev/autumn-oita-yufuin-kinrinko-morning-mist-hotels-stay" }
            ]
          }) }}
        />

        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-teal-700 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              水面に立ち上る白いベール。紅葉の金鱗湖と由布岳が魅せる秋の奇跡
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            大分県の象徴・豊後富士とも称される名峰「由布岳」の麓に広がる由布院温泉。秋深まる季節、周囲のモミジやイチョウが鮮やかに色づき、由布院のシンボル「金鱗湖」では湖底から湧く温泉によって幻想的な朝霧が発生します。昼間は湯の坪街道で食べ歩きやクラフトギャラリー巡りを楽しみ、夜は離れの客室露天風呂で美肌の湯に浸かる。翌朝、澄んだ冷気の中で出会う神秘の朝霧は、一生忘れられない旅のハイライトになります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-teal-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">金鱗湖の幻想的な朝霧と水上鳥居</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">天祖神社の水上鳥居と立ち上る朝霧、そして湖畔の紅葉が織りなす東洋の神秘的な絶景。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-teal-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">全室離れ＆客室温泉風呂のプライベート感</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">他の宿泊客と顔を合わせることなく過ごせる贅沢な離れ。好きな時にいつでも名湯を堪能。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-teal-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">大分が誇る極上「おおいた和牛・豊後牛」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">きめ細やかな霜降りと上品な脂の甘み。地元契約農家の旬野菜とともに味わう創作懐石。</p>
            </div>
          </div>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">豊後・由布院散策ガイド：朝霧立ち込める幻想の湖・由布院 金鱗湖</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Lake_Kinrin.JPG/1280px-Lake_Kinrin.JPG"
                alt="朝霧立ち込める幻想の湖・由布院 金鱗湖"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">朝霧立ち込める幻想の湖・由布院 金鱗湖の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">金鱗湖（きんりんこ）は、大分県由布市（旧湯布院町）の由布院温泉にある池である。大分川の源流のひとつであり、この池に朝霧がかかる風景は由布院温泉を代表する景観となっている。</p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-teal-700 font-semibold">現地観光・散策推奨スポット</span>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <span className="text-teal-700 font-bold tracking-wider text-xs md:text-sm uppercase">金鱗湖散策と由布岳を望むおすすめ宿</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">厳選離れ・高級旅館 5選</h2>
            </div>
            <p className="text-xs md:text-sm text-stone-500">※宿泊料金は楽天トラベル記載の目安料金です</p>
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

                    <h3 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-teal-700 transition-colors mb-3">
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
                      <span className="text-xs text-stone-500 block">参考料金 (1名あたり)</span>
                      <span className="text-xl md:text-2xl font-black text-teal-700">{hotel.price}</span>
                    </div>
                    <a 
                      href={hotel.affiliateUrl || "https://travel.rakuten.co.jp/"} 
                      target="_blank" 
                      rel="noopener noreferrer nofollow" 
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-sm hover:shadow transition-all duration-200"
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
            <div className="w-2.5 h-8 bg-teal-700 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】金鱗湖の朝霧と湯の坪街道を満喫するモデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-teal-700 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-700 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">湯の坪街道散策〜極上離れ宿へチェックイン</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">12:30〜</strong> 由布院駅に到着。駅前のカフェで名物とり天ランチを味わい、湯の坪街道へ。</li>
                <li>・<strong className="text-stone-800">14:00〜</strong> 雑貨店やスイーツショップを巡りながら金鱗湖へ。昼の穏やかな湖畔風景を鑑賞。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 離れ宿へチェックイン。客室専用の露天風呂に浸かり、由布岳を眺めながら極上の寛ぎ。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> お部屋食または個室で豊後牛や旬の京風懐石ディナーを贅沢に味わう。</li>
              </ul>
            </div>
            <div className="border-l-2 border-amber-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">早朝の金鱗湖朝霧鑑賞〜朝湯＆帰路</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">06:45〜</strong> 暖かい防寒着を羽織って金鱗湖へ。湖面から湯気のように立ち上る神秘的な朝霧を鑑賞。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 宿に戻り、朝の露天風呂で冷えた身体を温めた後、こだわりの和朝食を堪能。</li>
                <li>・<strong className="text-stone-800">10:30〜</strong> チェックアウト後、ゆふいんロールケーキや柚子胡椒のお土産を購入し帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-teal-700 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と由布院旅行のポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 金鱗湖の「朝霧（あさぎり）」が見られる時期や時間帯は？</span>
                <span className="text-teal-700 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 秋から冬（10月中旬〜2月頃）の早朝、前夜と朝の寒暖差が大きい晴れた日によく発生します。時間は日の出直後から午前8時前後が最も幻想的です。湖底から温泉が湧いているため、冷たい外気と触れ合って水面から立ち上る湯気が湖全体を霧で覆います。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 由布院温泉での宿泊エリアや宿の選び方のコツは？</span>
                <span className="text-teal-700 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 早朝の金鱗湖散策を最優先するなら、金鱗湖まで徒歩2〜5分圏内の宿（旅亭田乃倉や草庵秋桜など）が便利です。一方、由布院盆地全体の朝霧や雲海、雄大な由布岳のパノラマを望むなら、高台に位置する宿（ゆふいん花由など）の客室露天風呂付き離れが絶大な人気を誇ります。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 10月・11月の由布院の気候と朝の散策の服装は？</span>
                <span className="text-teal-700 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 盆地気候のため昼夜の寒暖差が激しく、10月下旬〜11月の早朝は5℃前後まで冷え込みます。朝霧鑑賞にはダウンジャケットや厚手のコート、マフラー、手袋などの防寒着が必須です。
              </p>
            </details>
          </div>
        </section>

        <HubRelatedPosts currentSlug="" />
      </main>
    </div>
  );
}
