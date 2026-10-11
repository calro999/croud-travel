import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "今すぐ予約したい！秋の黒川温泉：入湯手形露天風呂巡りとあか牛会席の名旅館5選",
  description: "渓流のせせらぎと湯煙が立ち上る熊本の秘湯・黒川温泉！名物「入湯手形」で巡る紅葉露天風呂や、創業300年の老舗宿、あか牛会席を味わう極上宿を厳選5選。",
  keywords: "黒川温泉 露天風呂巡り 入湯手形, 黒川温泉 旅館 おすすめ, 黒川温泉 歴史の宿 御客屋, 山みず木, 熊本 秘湯 温泉旅行",
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-kumamoto-kurokawa-onsen-rotenburo-hopping-hotels-stay/",
  },
  openGraph: {
    title: "今すぐ予約したい！秋の黒川温泉：入湯手形露天風呂巡りとあか牛会席の名旅館5選",
    description: "渓流のせせらぎと湯煙が立ち上る熊本の秘湯・黒川温泉！名物「入湯手形」で巡る紅葉露天風呂や、創業300年の老舗宿、あか牛会席を味わう極上宿を厳選5選。",
    url: 'https://croud-travel.pages.dev/autumn-kumamoto-kurokawa-onsen-rotenburo-hopping-hotels-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "黒川温泉 露天風呂",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "今すぐ予約したい！秋の黒川温泉：入湯手形露天風呂巡りとあか牛会席の名旅館5選",
    description: "渓流のせせらぎと湯煙が立ち上る熊本の秘湯・黒川温泉！名物「入湯手形」で巡る紅葉露天風呂や、創業300年の老舗宿、あか牛会席を味わう極上宿を厳選5選。",
  }
};

export default function FeaturePage() {
  const hotelList = [
    {
      name: "黒川温泉　歴史の宿　御客屋",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/80591/80591.jpg",
      hotelNo: 80591,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/80591/80591.html"),
      rating: 4.88,
      reviews: 430,
      price: "¥16,500〜",
      access: "大分道 日田ICより車で約60分／JR阿蘇駅よりバスで約50分（車で約40分）",
      features: [
        "創業享保七年（1722年）。黒川温泉で最も長い歴史を誇る肥後細川藩御用達の老舗宿",
        "趣異なる7つの湯処で自家源泉を満喫。肥後赤鶏や阿蘇あか牛など熊本の郷土美食会席",
        "熊本県阿蘇郡南小国町満願寺黒川温泉6546（田の原川の渓流沿いに佇む風情ある木造建築）"
      ]
    },
    {
      name: "黒川温泉　お宿のし湯",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/78187/78187.jpg",
      hotelNo: 78187,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/78187/78187.html"),
      rating: 4.76,
      reviews: 320,
      price: "¥18,000〜",
      access: "黒川温泉バス停より無料送迎あり／福岡空港より車で約2時間半、熊本空港より約1時間半",
      features: [
        "自然の雑木林に溶け込む隠れ家。館内はどこを切り取っても絵になる和の美意識空間",
        "木漏れ日が揺れる野趣あふれる露天風呂と、自家焙煎珈琲を楽しめるカフェサロンを併設",
        "熊本県阿蘇郡南小国町満願寺6591-1（自然との調和を五感で楽しむ大人のおこもり宿）"
      ]
    },
    {
      name: "黒川温泉　山あいの宿　山みず木",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/136864/136864.jpg",
      hotelNo: 136864,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/136864/136864.html"),
      rating: 4.64,
      reviews: 580,
      price: "¥23,100〜",
      access: "黒川温泉バス停より車で約10分（送迎要予約）／大分道 日田ICより車で約70分",
      features: [
        "渓流と一体化した名物露天風呂「森の湯」「幽谷の湯」。川のせせらぎと紅葉を間近に臨む極上体験",
        "山里の旬菜と熊本特選馬刺し・あか牛ステーキを味わう本格会席料理",
        "熊本県阿蘇郡南小国町黒川温泉（奥黒川の豊かな山林に包まれる静寂の一軒宿）"
      ]
    },
    {
      name: "黒川温泉　やまびこ旅館",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/67974/67974.jpg",
      hotelNo: 67974,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/67974/67974.html"),
      rating: 4.61,
      reviews: 1420,
      price: "¥22,000〜",
      access: "JR阿蘇駅より車で約40分／九州横断バス・福岡直行高速バス利用「黒川温泉」下車",
      features: [
        "黒川温泉最大級の広さを誇る名物大露天風呂「仙人の湯」。巨岩と秋の木々に囲まれる圧巻の開放感",
        "6つの個性豊かな家族風呂が24時間無料で利用可能。看板犬がお出迎えする温かなおもてなし",
        "熊本県阿蘇郡南小国町黒川6704（川のせせらぎを聞きながら渡る専用の太鼓橋が目印）"
      ]
    },
    {
      name: "黒川温泉　旅館湯本荘",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/80792/80792.jpg",
      hotelNo: 80792,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/80792/80792.html"),
      rating: 4.64,
      reviews: 860,
      price: "¥22,000〜",
      access: "大分道 日田ICより小国方面へ車で約50分／黒川温泉中心街に位置",
      features: [
        "温泉街の中心に位置し外湯巡りや散策に抜群の立地。川沿いの露天風呂と無料貸切風呂を完備",
        "全プランお部屋食または個室食。プライベートな空間で味わう熊本名物馬刺しと肥後牛会席",
        "熊本県阿蘇郡南小国町満願寺6700（どこか懐かしい日本の宿の温もりを味わえる老舗旅館）"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80" 
            alt="黒川温泉 露天風呂"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/90 text-white text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            極上温泉地特集・秘湯の露天風呂巡り
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">「今すぐ予約したい！秋の黒川温泉」<br className="hidden sm:inline" />入湯手形露天風呂巡りとあか牛会席の名旅館5選</h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stone-200 leading-relaxed">
            「街全体が一つの宿、通りは廊下、旅館は客室。」。名物の木製入湯手形を手に、色づく渓流沿いの露天風呂を浴衣姿で巡る贅沢な秋旅。今すぐ予約して訪れたい極上宿をご案内。
          </p>
        </div>
      </header>

      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-amber-600">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【今すぐ予約したい！秋の黒川温泉】入湯手形露天風呂巡りとあか牛会席の名旅館5選</span>
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
                "name": "黒川温泉名物「入湯手形」の仕組みや利用方法は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "地元小国杉で作られた入湯手形（1枚1,500円）を購入すると、参加旅館の中からお好きな3箇所の露天風呂に入浴できます（または2箇所の露天風呂＋1箇所の飲食・お土産利用）。有効期間は半年間あり、宿泊当日だけでなく翌日の湯巡りにも使えます。"
                }
              },
              {
                "@type": "Question",
                "name": "秋の黒川温泉の紅葉見頃時期や気候は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "例年10月下旬から11月中旬にかけて、温泉街を流れる田の原川沿いや周囲の山々が鮮やかな紅葉に包まれます。標高約700mに位置するため朝晩は5〜10℃前後まで冷え込みます。浴衣の上に着る羽織物や厚手の靴下、散策用のアウターを用意しておくと快適です。"
                }
              },
              {
                "@type": "Question",
                "name": "黒川温泉へのアクセス方法と注意点は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "福岡・博多駅や熊本駅・熊本空港から直行の高速バス（九州横断バス等）が運行しています。自家用車やレンタカーの場合は大分道日田ICまたは九州道熊本ICを利用します。秋の行楽シーズンは道路や駐車場が混雑するため、余裕をもった移動計画がおすすめです。"
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
              { "@type": "ListItem", "position": 3, "name": "【今すぐ予約したい！秋の黒川温泉】入湯手形露天風呂巡りとあか牛会席の名旅館5選", "item": "https://croud-travel.pages.dev/autumn-kumamoto-kurokawa-onsen-rotenburo-hopping-hotels-stay" }
            ]
          }) }}
        />

        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-emerald-700 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              湯煙とモミジが織りなす山里の風情。心まで温まる日本一の露天風呂ホッピング
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            阿蘇の外輪山に抱かれた静かな谷あいに、約30軒の旅館が軒を連ねる熊本県「黒川温泉」。統一された木造建築と里山の自然景観が守られており、ミシュラン・グリーンガイド・ジャポンでも2つ星を獲得しています。秋になると渓流沿いのカエデやモミジが赤く色づき、湯船から見上げる錦秋の絶景は格別。入湯手形を首から下げて下駄の音を響かせながら巡る温泉街の時間は、日々の忙しさを忘れさせてくれます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>魅力 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">入湯手形で多彩な泉質を湯巡り</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">硫黄泉、炭酸水素塩泉、硫酸塩泉など多種多様な泉質。渓流沿いや洞窟風呂など個性豊かな湯処。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>魅力 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">浴衣姿で歩く風情豊かな温泉街</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">石畳や木橋が続く情緒あふれる街並み。地酒の立ち飲みや焼きたてどら焼きの食べ歩きも楽しい。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>魅力 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">熊本ブランド「阿蘇あか牛」と馬刺し</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">赤身の旨味が凝縮したあか牛のステーキや極上霜降り馬刺し。地場産の旬野菜を取り入れた会席。</p>
            </div>
          </div>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">阿蘇・奥黒川温泉ガイド：渓谷に佇む秘湯・黒川温泉と入湯手形</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/Kurokawa_Onsen_-%E6%B8%A9%E6%B3%89%E8%A1%97.jpg"
                alt="渓谷に佇む秘湯・黒川温泉と入湯手形"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">渓谷に佇む秘湯・黒川温泉と入湯手形の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">黒川温泉（くろかわおんせん）は、熊本県阿蘇郡南小国町にある温泉である。 阿蘇山の北に位置し、南小国温泉郷の一つを構成する。広義の阿蘇温泉郷に含む場合もある。 全国屈指の人気温泉地として知られ、2009年版ミシュラン・グリーンガイド・ジャポンで、温泉地としては異例の二つ星で掲載された。なお「黒川温泉」の名称は2006年に地域団体商標として商標登録（地域ブランド）されている。</p>
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
              <span className="text-emerald-700 font-bold tracking-wider text-xs md:text-sm uppercase">黒川温泉の風情を味わうおすすめ名宿</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">厳選温泉旅館 5選</h2>
            </div>
            <p className="text-xs md:text-sm text-stone-500">※宿泊料金は楽天トラベル記載の目安料金です</p>
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

                    <h3 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-emerald-700 transition-colors mb-3">
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
                      <span className="text-xl md:text-2xl font-black text-emerald-700">{hotel.price}</span>
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
            <div className="w-2.5 h-8 bg-emerald-700 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】黒川温泉 露天風呂満喫モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-emerald-700 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-700 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜入湯手形購入＆外湯巡りスタート</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 黒川温泉に到着。旅館組合「風の舎」で入湯手形を購入し、温泉街マップをチェック。</li>
                <li>・<strong className="text-stone-800">14:30〜</strong> 浴衣に着替えて1軒目の外湯（山みず木や仙人の湯など）へ。色づく木々と清流に癒やされる。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 宿泊宿へチェックイン。客室でお茶菓子をいただきながら、窓外の紅葉を眺めて一息。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 宿自慢の夕食。名物の馬刺しや炭火で香ばしく焼いた阿蘇あか牛会席に舌鼓。</li>
                <li>・<strong className="text-stone-800">20:30〜</strong> 夜の温泉街を少し散策。竹灯籠が優しく灯る幻想的な川沿いの夜景を満喫。</li>
              </ul>
            </div>
            <div className="border-l-2 border-amber-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝風呂〜2軒目の外湯＆お土産探し</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:30〜</strong> 宿の内湯で朝湯。炊きたての小国米と郷土料理の朝食で一日をスタート。</li>
                <li>・<strong className="text-stone-800">09:30〜</strong> チェックアウト後、入湯手形を使って2軒目の外湯巡りへ。朝の澄んだ空気の中でリフレッシュ。</li>
                <li>・<strong className="text-stone-800">11:30〜</strong> 温泉街のカフェで地元ジャージー牛乳ソフトクリームやスイーツを堪能。</li>
                <li>・<strong className="text-stone-800">13:00〜</strong> 小国杉の工芸品や地酒を購入し、心身ともに潤った状態で帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-emerald-700 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と黒川温泉旅行のポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 黒川温泉名物「入湯手形」の仕組みや利用方法は？</span>
                <span className="text-emerald-700 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 地元小国杉で作られた入湯手形（1枚1,500円）を購入すると、参加旅館の中からお好きな3箇所の露天風呂に入浴できます（または2箇所の露天風呂＋1箇所の飲食・お土産利用）。有効期間は半年間あり、宿泊当日だけでなく翌日の湯巡りにも使えます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 秋の黒川温泉の紅葉見頃時期や気候は？</span>
                <span className="text-emerald-700 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 例年10月下旬から11月中旬にかけて、温泉街を流れる田の原川沿いや周囲の山々が鮮やかな紅葉に包まれます。標高約700mに位置するため朝晩は5〜10℃前後まで冷え込みます。浴衣の上に着る羽織物や厚手の靴下、散策用のアウターを用意しておくと快適です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 黒川温泉へのアクセス方法と注意点は？</span>
                <span className="text-emerald-700 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 福岡・博多駅や熊本駅・熊本空港から直行の高速バス（九州横断バス等）が運行しています。自家用車やレンタカーの場合は大分道日田ICまたは九州道熊本ICを利用します。秋の行楽シーズンは道路や駐車場が混雑するため、余裕をもった移動計画がおすすめです。
              </p>
            </details>
          </div>
        </section>

        <HubRelatedPosts currentSlug="" />
      </main>
    </div>
  );
}
