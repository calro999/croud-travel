import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "【10月下旬〜11月上旬！宮城鳴子峡の紅葉】大深沢橋列車ビューと名湯鳴子温泉郷の宿5選",
  description: "深さ100mの大峡谷を彩る紅葉のパノラマと大深沢橋を渡る列車絶景！日本にある11の泉質のうち9つが湧く東北屈指の名湯・鳴子温泉郷の厳選おすすめ宿5選。",
  keywords: "鳴子峡 紅葉 10月 11月 見頃, 鳴子温泉 旅館 おすすめ, 湯元 吉祥, 鳴子観光ホテル, 宮城 紅葉 温泉旅行",
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-miyagi-naruko-gorge-onsen-momiji-hotels-stay/",
  },
  openGraph: {
    title: "【10月下旬〜11月上旬！宮城鳴子峡の紅葉】大深沢橋列車ビューと名湯鳴子温泉郷の宿5選",
    description: "深さ100mの大峡谷を彩る紅葉のパノラマと大深沢橋を渡る列車絶景！日本にある11の泉質のうち9つが湧く東北屈指の名湯・鳴子温泉郷の厳選おすすめ宿5選。",
    url: 'https://croud-travel.pages.dev/autumn-miyagi-naruko-gorge-onsen-momiji-hotels-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "鳴子峡 紅葉",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【10月下旬〜11月上旬！宮城鳴子峡の紅葉】大深沢橋列車ビューと名湯鳴子温泉郷の宿5選",
    description: "深さ100mの大峡谷を彩る紅葉のパノラマと大深沢橋を渡る列車絶景！日本にある11の泉質のうち9つが湧く東北屈指の名湯・鳴子温泉郷の厳選おすすめ宿5選。",
  }
};

export default function FeaturePage() {
  const hotelList = [
    {
      name: "鳴子温泉　扇屋",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/11217/11217.jpg",
      hotelNo: 11217,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/11217/11217.html"),
      rating: 4.42,
      reviews: 380,
      price: "¥8,800〜",
      access: "JR陸羽東線 鳴子温泉駅より徒歩5分／東北自動車道 古川ICより車で約35分",
      features: [
        "最上階に展望露天風呂を完備。鳴子温泉街と秋の山並みを見下ろす源泉掛け流しの名湯",
        "仙台牛ステーキや三陸の海の幸を味わう本格会席。きめ細やかなおもてなしと家庭的な温もり",
        "宮城県大崎市鳴子温泉新屋敷38-1（駅近で鳴子峡へのシャトルバス利用にも便利な好立地）"
      ]
    },
    {
      name: "鳴子温泉　湯元　吉祥（共立リゾート）",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/158439/158439.jpg",
      hotelNo: 158439,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/158439/158439.html"),
      rating: 4.35,
      reviews: 1420,
      price: "¥10,500〜",
      access: "JR鳴子温泉駅より徒歩約7分（無料送迎あり）／東北道 古川ICより車で約40分",
      features: [
        "高台から鳴子温泉街を一望。源泉掛け流しの大浴場と4つの無料貸切風呂で湯巡り三昧",
        "季節の和食会席膳ディナーに、夜食の名物「夜鳴きそば」サービス。全館落ち着いた和モダン空間",
        "宮城県大崎市鳴子温泉湯元58-10（贅沢な滞在を叶える共立リゾートの最新人気宿）"
      ]
    },
    {
      name: "鳴子温泉　源蔵の湯　鳴子観光ホテル",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/9300/9300.jpg",
      hotelNo: 9300,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/9300/9300.html"),
      rating: 4.25,
      reviews: 2150,
      price: "¥9,350〜",
      access: "JR陸羽東線 鳴子温泉駅より徒歩約3分／東北道 古川ICより車で約40分",
      features: [
        "創業約400年の老舗ホテル。乳白色に濁る硫黄泉の名湯「源蔵の湯」を総檜造りの湯船で満喫",
        "宮城のブランド牛・仙台牛や地場産食材をふんだんに取り入れた郷土会席料理が大人気",
        "宮城県大崎市鳴子温泉湯元（温泉街の中心に位置し足湯や共同浴場巡りにも抜群の拠点）"
      ]
    },
    {
      name: "鬼首温泉　リゾートパーク　ホテル　オニコウベ",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/13890/13890.jpg",
      hotelNo: 13890,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/13890/13890.html"),
      rating: 4.13,
      reviews: 890,
      price: "¥3,850〜",
      access: "鳴子温泉駅より車で約20分（送迎バスあり・要予約）／古川ICより車約60分",
      features: [
        "栗駒国定公園の大自然に抱かれる高原リゾートホテル。雄大な山々と紅葉パノラマを一望",
        "開放的な大浴場と露天風呂。ファミリーやグループでもゆったり寛げる広々とした客室",
        "宮城県大崎市鳴子温泉鬼首大清水26-29（鳴子峡ドライブと鬼首間歇泉観光の拠点に最適）"
      ]
    },
    {
      name: "鳴子風雅",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/9469/9469.jpg",
      hotelNo: 9469,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/9469/9469.html"),
      rating: 3.87,
      reviews: 620,
      price: "¥8,800〜",
      access: "JR鳴子温泉駅より徒歩約5分／東北道 古川ICより車で約40分",
      features: [
        "大人のための隠れ家温泉宿。非日常を演出する落ち着いたラウンジやライブラリーを完備",
        "ライブキッチンで焼き上げる仙台牛ステーキ会席。源泉掛け流しの内湯と貸切露天風呂",
        "宮城県大崎市鳴子温泉湯元55（記念日や静かに過ごしたいカップル旅に選ばれる宿）"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80" 
            alt="鳴子峡 紅葉"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            10月下旬〜11月上旬！東北屈指の大峡谷紅葉特集
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【10月下旬〜11月上旬！宮城鳴子峡の紅葉】<br className="hidden sm:inline" />大深沢橋列車ビューと名湯鳴子温泉郷の宿5選
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stone-200 leading-relaxed">
            深さ約100mの断崖絶壁が燃えるような赤と黄金色に染まる東北屈指の紅葉名所「鳴子峡」！トンネルから現れる陸羽東線の列車絶景と、多彩な泉質を誇る名湯・鳴子温泉郷の厳選宿。
          </p>
        </div>
      </header>

      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-amber-600">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【10月下旬〜11月上旬！宮城鳴子峡の紅葉】大深沢橋列車ビューと名湯鳴子温泉郷の宿5選</span>
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
                "name": "鳴子峡の紅葉の見頃時期と列車通過の撮影ポイントは？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "鳴子峡の紅葉は例年10月下旬から11月上旬（10月25日前後〜11月5日前後）が見頃のピークです。「鳴子峡レストハウス」の展望台から望む「大深沢橋」と、その下を走るJR陸羽東線の列車がトンネルを出入りする瞬間が一番の名場面です。列車通過時刻表がレストハウスに掲示されているため、通過時刻の15〜20分前に展望台へ行くのがベストです。"
                }
              },
              {
                "@type": "Question",
                "name": "鳴子温泉郷の「多彩な泉質」とはどのようなものですか？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "日本に存在する全11種類の掲示用泉質のうち、鳴子温泉郷にはなんと9種類もの泉質が湧き出ています。乳白色の硫黄泉、重曹泉（炭酸水素塩泉）、食塩泉、芒硝泉など、宿や外湯ごとに全く異なるお湯を楽しめるため、湯巡りファンにはたまらない温泉天国です。"
                }
              },
              {
                "@type": "Question",
                "name": "紅葉期の鳴子峡周辺の混雑とアクセス方法は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "紅葉ピーク時の国道47号線および鳴子峡駐車場は午前9時頃から激しい渋滞が発生します。JR鳴子温泉駅から運行される臨時路線バス（紅葉号）を利用するか、早朝8時台までに駐車場へ到着するスケジュールが強く推奨されます。"
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
              { "@type": "ListItem", "position": 3, "name": "【10月下旬〜11月上旬！宮城鳴子峡の紅葉】大深沢橋列車ビューと名湯鳴子温泉郷の宿5選", "item": "https://croud-travel.pages.dev/autumn-miyagi-naruko-gorge-onsen-momiji-hotels-stay" }
            ]
          }) }}
        />

        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-red-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              深さ100mの大峡谷が錦秋に染まる！大深沢橋と鉄道が描く日本の秋景色
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            宮城県大崎市に位置する「鳴子峡（なるこきょう）」は、大谷川の浸食によって削り出された深さ約100mの切り立ったV字峡谷です。秋を迎えると奇岩怪石の岩肌にモミジやカエデ、ブナ、マツの常緑樹が混ざり合い、息をのむほど鮮やかな紅葉の錦織り成すパノラマが広がります。峡谷に架かる大深沢橋と、紅葉の谷を抜ける陸羽東線の観光列車が徐行する光景は日本の秋の象徴。散策後は開湯千年の歴史を誇る鳴子温泉郷へ戻り、名湯に身を委ねて仙台牛の極上会席を味わいましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">大深沢橋と陸羽東線の絶景コラボ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">トンネルから現れる列車と紅葉の大峡谷。カメラマンや旅行者が熱狂する一枚。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">日本有数の湯量を誇る鳴子温泉郷</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">9種類もの異なる泉質が湧く名湯。乳白色の硫黄泉や美肌のとろみ湯を贅沢に湯巡り。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">仙台牛と宮城の秋の味覚会席</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">最高ランクの仙台牛ステーキ、新米ひとめぼれ、秋サケやイクラの郷土料理に舌鼓。</p>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <span className="text-red-600 font-bold tracking-wider text-xs md:text-sm uppercase">鳴子峡散策と名湯巡りに便利な宿</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">厳選鳴子温泉宿 5選</h2>
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

                    <h3 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-red-600 transition-colors mb-3">
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
                      <span className="text-xl md:text-2xl font-black text-red-600">{hotel.price}</span>
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
            <div className="w-2.5 h-8 bg-red-600 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】鳴子峡紅葉＆鳴子温泉郷満喫モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-red-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">鳴子温泉到着〜下駄で街歩き＆チェックイン</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 東北新幹線・古川駅経由で鳴子温泉駅へ。駅前の足湯やこけし通りを散策。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> 温泉宿へチェックイン。乳白色の硫黄泉や総檜造りの大浴場で旅の疲れをほぐす。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> こけしの絵付け体験や、共同浴場「滝の湯」で昔ながらの打たせ湯を体験。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 宿自慢の夕食。仙台牛ステーキや三陸の鮮魚、宮城の地酒を味わう至福の時間。</li>
              </ul>
            </div>
            <div className="border-l-2 border-amber-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝一番の鳴子峡へ！大深沢橋と列車撮影</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">08:00〜</strong> 朝食後、混雑を避けて宿を出発し「鳴子峡レストハウス」へ。</li>
                <li>・<strong className="text-stone-800">08:45〜</strong> 見晴らし台へ。大深沢橋を渡るJR陸羽東線の列車の通過を待ち、紅葉の絶景ショットを撮影。</li>
                <li>・<strong className="text-stone-800">10:30〜</strong> 大深沢遊歩道を歩き、谷底から見上げる渓谷美と落ち葉の絨毯をトレッキング。</li>
                <li>・<strong className="text-stone-800">13:00〜</strong> 鳴子温泉名物の栗だんごを購入し、心温まる思い出とともに帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-red-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と鳴子温泉郷旅行のポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 鳴子峡の紅葉の見頃時期と列車通過の撮影ポイントは？</span>
                <span className="text-red-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 鳴子峡の紅葉は例年10月下旬から11月上旬（10月25日前後〜11月5日前後）が見頃のピークです。「鳴子峡レストハウス」の展望台から望む「大深沢橋」と、その下を走るJR陸羽東線の列車がトンネルを出入りする瞬間が一番の名場面です。列車通過時刻表がレストハウスに掲示されているため、通過時刻の15〜20分前に展望台へ行くのがベストです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 鳴子温泉郷の「多彩な泉質」とはどのようなものですか？</span>
                <span className="text-red-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 日本に存在する全11種類の掲示用泉質のうち、鳴子温泉郷にはなんと9種類もの泉質が湧き出ています。乳白色の硫黄泉、重曹泉（炭酸水素塩泉）、食塩泉、芒硝泉など、宿や外湯ごとに全く異なるお湯を楽しめるため、湯巡りファンにはたまらない温泉天国です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 紅葉期の鳴子峡周辺の混雑とアクセス方法は？</span>
                <span className="text-red-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 紅葉ピーク時の国道47号線および鳴子峡駐車場は午前9時頃から激しい渋滞が発生します。JR鳴子温泉駅から運行される臨時路線バス（紅葉号）を利用するか、早朝8時台までに駐車場へ到着するスケジュールが強く推奨されます。
              </p>
            </details>
          </div>
        </section>

        <HubRelatedPosts currentSlug="" />
      </main>
    </div>
  );
}
