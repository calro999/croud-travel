import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "【10月下旬〜11月中旬！甲府昇仙峡の紅葉】日本一の渓谷美と武田信玄の隠し湯・湯村温泉宿5選",
  description: "国の特別名勝・日本一の渓谷美を誇る「昇仙峡」の奇岩と紅葉！覚円峰の白銀の岸壁と仙娥滝を彩るモミジを愛で、開湯1200年・信玄の隠し湯「湯村温泉」に癒やされる厳選宿5選。",
  keywords: "昇仙峡 紅葉 見頃 10月 11月, 昇仙峡 覚円峰 仙娥滝, 甲府 湯村温泉 旅館 おすすめ, 弘法湯, 旅館明治, 甲州牛 ワイン 宿泊",
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-yamanashi-kofu-shosenkyo-yumura-onsen-hotels-stay/",
  },
  openGraph: {
    title: "【10月下旬〜11月中旬！甲府昇仙峡の紅葉】日本一の渓谷美と武田信玄の隠し湯・湯村温泉宿5選",
    description: "国の特別名勝・日本一の渓谷美を誇る「昇仙峡」の奇岩と紅葉！覚円峰の白銀の岸壁と仙娥滝を彩るモミジを愛で、開湯1200年・信玄の隠し湯「湯村温泉」に癒やされる厳選宿5選。",
    url: 'https://croud-travel.pages.dev/autumn-yamanashi-kofu-shosenkyo-yumura-onsen-hotels-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "甲府 昇仙峡 紅葉",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【10月下旬〜11月中旬！甲府昇仙峡の紅葉】日本一の渓谷美と武田信玄の隠し湯・湯村温泉宿5選",
    description: "国の特別名勝・日本一の渓谷美を誇る「昇仙峡」の奇岩と紅葉！覚円峰の白銀の岸壁と仙娥滝を彩るモミジを愛で、開湯1200年・信玄の隠し湯「湯村温泉」に癒やされる厳選宿5選。",
  }
};

export default function FeaturePage() {
  const hotelList = [
    {
      name: "湯村温泉　弘法湯",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/32390/32390.jpg",
      hotelNo: 32390,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/32390/32390.html"),
      rating: 4.59,
      reviews: 240,
      price: "¥14,080〜",
      access: "JR中央線 甲府駅よりバス約15分（車約10分）／中央道 甲府昭和ICより車約15分",
      features: [
        "弘法大師開湯と伝わる自家源泉を毎分150リットル掛け流し。飲泉も可能な奇跡の名湯",
        "甲州牛や富士桜ポーク、甲斐サーモンなど山梨の恵みを一品ずつ丁寧に仕立てた創作会席",
        "山梨県甲府市湯村3丁目16-16（静かな住宅地に佇むわずか数室の上質な湯治隠れ宿）"
      ]
    },
    {
      name: "信玄の湯　湯村温泉　旅館明治　太宰治ゆかりの宿",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/196489/196489.jpg",
      hotelNo: 196489,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/196489/196489.html"),
      rating: 4.43,
      reviews: 310,
      price: "¥9,900〜",
      access: "甲府駅より車で約10分／中央道 双葉スマートICまたは甲府昭和ICより車約10分",
      features: [
        "文豪・太宰治が約1ヶ月滞在し小説を執筆した歴史ある宿。信玄の隠し湯の自家源泉掛け流し",
        "全プランお部屋食または個室食。山梨の郷土料理「ほうとう」や甲州牛すき焼き会席",
        "山梨県甲府市湯村3-10-14（太宰治執筆の部屋がそのまま保存され文学ファンにも大人気）"
      ]
    },
    {
      name: "湯村温泉　甲府記念日ホテル",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/1633/1633.jpg",
      hotelNo: 1633,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/1633/1633.html"),
      rating: 4.15,
      reviews: 1850,
      price: "¥7,650〜",
      access: "中央道 甲府昭和ICより昇仙峡方面へ車約18分／JR甲府駅よりタクシー約12分",
      features: [
        "昇仙峡の玄関口に建つシティ＆リゾートホテル。広々とした大浴場と露天風呂を完備",
        "地上13階のスカイレストランから富士山や甲府盆地の夜景を一望。記念日を彩る本格フレンチ",
        "山梨県甲府市湯村3-2-30（昇仙峡へのドライブ拠点として抜群のアクセスと快適な客室）"
      ]
    },
    {
      name: "自家源泉かけ流しの天然温泉　湯村ホテル（ＢＢＨホテルグループ）",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/1554/1554.jpg",
      hotelNo: 1554,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/1554/1554.html"),
      rating: 4.06,
      reviews: 3200,
      price: "¥6,190〜",
      access: "甲府昭和ICより車約15分／JR甲府駅より車約8分（無料駐車場90台完備）",
      features: [
        "敷地内から自噴する自家源泉を24時間掛け流し。露天風呂やサウナ完備で温泉好きに高評価",
        "無料朝食バイキングやウェルカムドリンクサービスなどコスパ抜群の充実したサービス",
        "山梨県甲府市湯村3-3-11（ビジネスから昇仙峡観光まで気軽に利用できる天然温泉ホテル）"
      ]
    },
    {
      name: "甲州湯村温泉　柳屋",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/165690/165690.jpg",
      hotelNo: 165690,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/165690/165690.html"),
      rating: 4.0,
      reviews: 420,
      price: "¥9,900〜",
      access: "JR甲府駅より車・バスで約15分／中央自動車道 甲府昭和ICより約15分",
      features: [
        "数寄屋造りの純和風旅館。中庭の日本庭園を眺めながら入浴できる檜露天風呂と岩風呂",
        "甲州ワインビーフや旬のきのこ、甲州名物をふんだんに盛り込んだ彩り豊かな和食会席",
        "山梨県甲府市湯村3-16-2（落ち着いた大人の寛ぎ空間を提供する老舗温泉宿）"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80" 
            alt="甲府 昇仙峡 紅葉"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-600/90 text-white text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            10月下旬〜11月中旬！日本一の渓谷美と信玄隠し湯特集
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【10月下旬〜11月中旬！甲府昇仙峡の紅葉】<br className="hidden sm:inline" />日本一の渓谷美と武田信玄の隠し湯・湯村温泉宿5選
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stone-200 leading-relaxed">
            国の特別名勝に指定された日本一の渓谷美「御岳昇仙峡」！天を突く奇岩「覚円峰」と名瀑「仙娥滝」を彩る深紅のモミジ。散策後は開湯1200年の武田信玄ゆかりの名湯・甲府湯村温泉へ。
          </p>
        </div>
      </header>

      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-amber-600">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【10月下旬〜11月中旬！甲府昇仙峡の紅葉】日本一の渓谷美と武田信玄の隠し湯・湯村温泉宿5選</span>
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
                "name": "昇仙峡の紅葉の見頃時期とおすすめ散策コースは？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "昇仙峡の紅葉は例年10月下旬から11月中旬（11月上旬が最盛期）が見頃です。標高差があるため、上流の仙娥滝・覚円峰周辺から下流の長潭橋（ながとろばし）へと約1ヶ月かけて見頃が移り変わります。落差30mの「仙娥滝」から奇岩が連なる「覚円峰・夢の松島」を巡る遊歩道散策（約1時間〜1時間半）が定番です。"
                }
              },
              {
                "@type": "Question",
                "name": "甲府湯村温泉（ゆむらおんせん）の特徴と昇仙峡からの距離は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "弘法大師が開湯し、武田信玄公が陣中傷を癒やした「信玄の隠し湯」として知られる名湯です。弱アルカリ性のやわらかな泉質で肌を潤します。昇仙峡の入口まで車で約15〜20分と至近距離にあり、都心からの特急あずさ・かいじが停まる甲府駅からも車で10分とアクセス抜群です。"
                }
              },
              {
                "@type": "Question",
                "name": "秋の昇仙峡散策の服装や歩き方の注意点は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "渓谷沿いの遊歩道は舗装されていますが、石段や階段、濡れた落ち葉で滑りやすい箇所があるため、スニーカーやトレッキングシューズが必須です。11月の渓谷内は日陰が多く冷え込むため、脱ぎ着しやすいフリースやジャケット、ストールを持参しましょう。"
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
              { "@type": "ListItem", "position": 3, "name": "【10月下旬〜11月中旬！甲府昇仙峡の紅葉】日本一の渓谷美と武田信玄の隠し湯・湯村温泉宿5選", "item": "https://croud-travel.pages.dev/autumn-yamanashi-kofu-shosenkyo-yumura-onsen-hotels-stay" }
            ]
          }) }}
        />

        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              白銀の花崗岩と燃えるモミジのコントラスト。日本一の渓谷・昇仙峡の錦秋絵巻
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            山梨県甲府市の北部に位置する「御岳昇仙峡（みたけしょうせんきょう）」は、国の特別名勝に指定された日本屈指の景勝地です。花崗岩が削り出されてできた断崖絶壁「覚円峰（かくえんぼう）」の白銀の岩肌と、地獄谷や仙娥滝を包み込む赤や黄色のカエデ・モミジの共演は、まさに息をのむ美しさ。遊歩道で渓谷の清流美を満喫した後は、武田信玄公の隠し湯として栄えた湯村温泉へ。自家源泉の掛け流し湯に浸かり、甲州牛や甲州ワインを味わう優雅な秋旅をお楽しみください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">覚円峰＆仙娥滝の奇岩瀑布絶景</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">高さ約180mの白銀の巨岩と落差30mの名瀑。紅葉に縁取られた荘厳な景観。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">開湯1200年・信玄公の隠し湯「湯村温泉」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">武田信玄公や太宰治が愛した名湯。豊富な湯量を誇る弱アルカリ性の美肌温泉。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">甲州牛と勝沼ワインのマリアージュ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">上質な霜降りの甲州牛ステーキや甲州ワインビーフ、名物ほうとうを本場で堪能。</p>
            </div>
          </div>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">甲斐・渓谷名勝ガイド：日本一の渓谷美・甲府 昇仙峡と湯村温泉</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Kakuenpou_in_autumn.jpg"
                alt="日本一の渓谷美・甲府 昇仙峡と湯村温泉"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">日本一の渓谷美・甲府 昇仙峡と湯村温泉の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">昇仙峡（しょうせんきょう）は、山梨県甲府市、甲府盆地北側、荒川上流に位置する渓谷である。特別名勝に指定されており、国内有数の景勝地である。「日本五大名峡」の一つに数えられる。</p>
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
              <span className="text-amber-700 font-bold tracking-wider text-xs md:text-sm uppercase">昇仙峡観光と信玄の隠し湯を味わう宿</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">厳選湯村温泉宿 5選</h2>
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

                    <h3 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors mb-3">
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
                      <span className="text-xl md:text-2xl font-black text-amber-700">{hotel.price}</span>
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
            <div className="w-2.5 h-8 bg-amber-600 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】甲府昇仙峡紅葉＆湯村温泉満喫モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">甲府到着〜ワイナリー巡り＆湯村温泉チェックイン</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:00〜</strong> JR甲府駅に到着。甲州名物ほうとうや鳥もつ煮のランチを味わい武田神社を参拝。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> 湯村温泉の宿へチェックイン。信玄公の隠し湯に浸かり、手足を伸ばしてほっこり。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 温泉街を少し散策。太宰治ゆかりの文学散歩や足湯を楽しむ。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 甲州牛すき焼きや旬の松茸・きのこ料理と、甲州白ワイン・赤ワインのマリアージュ。</li>
              </ul>
            </div>
            <div className="border-l-2 border-red-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝湯〜昇仙峡の奇岩・瀑布紅葉ハイキング</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">08:30〜</strong> 宿を出発し昇仙峡へ（車で約15分）。市営無料駐車場へ車を停めてスタート。</li>
                <li>・<strong className="text-stone-800">09:15〜</strong> 仙娥滝から遊歩道を歩き覚円峰へ。白銀の巨石と燃えるモミジのパノラマを鑑賞。</li>
                <li>・<strong className="text-stone-800">11:30〜</strong> 昇仙峡ロープウェイに乗車してパノラマ台へ。南アルプスと富士山、紅葉の山並みを一望。</li>
                <li>・<strong className="text-stone-800">14:00〜</strong> 山梨銘菓の信玄餅やお土産を購入し、特急かいじ号で帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と昇仙峡・湯村温泉旅行のポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 昇仙峡の紅葉の見頃時期とおすすめ散策コースは？</span>
                <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 昇仙峡の紅葉は例年10月下旬から11月中旬（11月上旬が最盛期）が見頃です。標高差があるため、上流の仙娥滝・覚円峰周辺から下流の長潭橋（ながとろばし）へと約1ヶ月かけて見頃が移り変わります。落差30mの「仙娥滝」から奇岩が連なる「覚円峰・夢の松島」を巡る遊歩道散策（約1時間〜1時間半）が定番です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 甲府湯村温泉（ゆむらおんせん）の特徴と昇仙峡からの距離は？</span>
                <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 弘法大師が開湯し、武田信玄公が陣中傷を癒やした「信玄の隠し湯」として知られる名湯です。弱アルカリ性のやわらかな泉質で肌を潤します。昇仙峡の入口まで車で約15〜20分と至近距離にあり、都心からの特急あずさ・かいじが停まる甲府駅からも車で10分とアクセス抜群です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 秋の昇仙峡散策の服装や歩き方の注意点は？</span>
                <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 渓谷沿いの遊歩道は舗装されていますが、石段や階段、濡れた落ち葉で滑りやすい箇所があるため、スニーカーやトレッキングシューズが必須です。11月の渓谷内は日陰が多く冷え込むため、脱ぎ着しやすいフリースやジャケット、ストールを持参しましょう。
              </p>
            </details>
          </div>
        </section>

        <HubRelatedPosts currentSlug="" />
      </main>
    </div>
  );
}
