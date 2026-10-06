import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "【10月下旬〜11月上旬！鳥取大山の紅葉】鍵掛峠の絶景パノラマと皆生温泉オーシャンビュー宿5選",
  description: "西日本最大級のブナ林が黄金色に輝く霊峰・伯耆富士「大山」の紅葉！鍵掛峠の南壁パノラマから、日本海を一望する海中湧出の名湯・皆生温泉の極上宿まで厳選5選。",
  keywords: "鳥取 大山 紅葉 見頃 10月 11月, 鍵掛峠 紅葉, 皆生温泉 旅館 おすすめ, 皆生游月, 皆生松月, 華水亭, 鳥取 温泉旅行",
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-tottori-daisen-momiji-kaike-onsen-hotels-stay/",
  },
  openGraph: {
    title: "【10月下旬〜11月上旬！鳥取大山の紅葉】鍵掛峠の絶景パノラマと皆生温泉オーシャンビュー宿5選",
    description: "西日本最大級のブナ林が黄金色に輝く霊峰・伯耆富士「大山」の紅葉！鍵掛峠の南壁パノラマから、日本海を一望する海中湧出の名湯・皆生温泉の極上宿まで厳選5選。",
    url: 'https://croud-travel.pages.dev/autumn-tottori-daisen-momiji-kaike-onsen-hotels-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "鳥取大山 鍵掛峠 紅葉",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【10月下旬〜11月上旬！鳥取大山の紅葉】鍵掛峠の絶景パノラマと皆生温泉オーシャンビュー宿5選",
    description: "西日本最大級のブナ林が黄金色に輝く霊峰・伯耆富士「大山」の紅葉！鍵掛峠の南壁パノラマから、日本海を一望する海中湧出の名湯・皆生温泉の極上宿まで厳選5選。",
  }
};

export default function FeaturePage() {
  const hotelList = [
    {
      name: "皆生游月",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/168732/168732.jpg",
      hotelNo: 168732,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/168732/168732.html"),
      rating: 4.74,
      reviews: 580,
      price: "¥17,600〜",
      access: "米子ICより車で約10分／JR米子駅よりバス・タクシーで約15分／米子空港より車で約20分",
      features: [
        "クチコミ4.74点。全室に日本海を一望する温泉露天風呂テラスを完備した最高峰デザイナーズリゾート",
        "海と空が一体化するインフィニティ露天風呂。鳥取和牛や日本海の極上鮮魚を味わう創作和食ディナー",
        "鳥取県米子市皆生温泉3-11-1（波打ち際の特等席で過ごす大人のご褒美ステイ）"
      ]
    },
    {
      name: "皆生松月",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/5666/5666.jpg",
      hotelNo: 5666,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/5666/5666.html"),
      rating: 4.71,
      reviews: 1420,
      price: "¥8,030〜",
      access: "米子自動車道 米子ICより車約10分／JR米子駅より路線バス約15分",
      features: [
        "創業昭和2年。日本海フロントに佇む老舗名旅館。地上28mの貸切露天風呂からのパノラマ海絶景",
        "夕朝食ともにお部屋食または個室ダイニング対応。日本海の境港直送の旬魚や鳥取和牛会席",
        "鳥取県米子市皆生温泉3-4-25（細やかなおもてなしと海絶景に心解き放たれる極上宿）"
      ]
    },
    {
      name: "皆生温泉　華水亭",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/2038/2038.jpg",
      hotelNo: 2038,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/2038/2038.html"),
      rating: 4.6,
      reviews: 980,
      price: "¥8,800〜",
      access: "JR米子駅より車で約15分／米子ICより車で約10分／米子空港より車で約20分",
      features: [
        "日本海を一望する自家源泉「宝生の泉」を持つ純和風旅館。波の音を聴きながら入浴する露天風呂",
        "広々とした日本庭園と気品ある客室。紅ズワイガニやアワビ、鳥取和牛を贅沢に盛り込んだ会席料理",
        "鳥取県米子市皆生温泉4-19-10（海と大山の両方を満喫できる贅沢な温泉宿）"
      ]
    },
    {
      name: "皆生温泉　皆生つるや　四季を奏でるさらさの宿",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/12537/12537.jpg",
      hotelNo: 12537,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/12537/12537.html"),
      rating: 4.41,
      reviews: 1120,
      price: "¥7,260〜",
      access: "米子ICより車で約15分／米子駅よりバスで約25分／米子空港より車で約20分",
      features: [
        "日本伝統の雅な数寄屋造りの名旅館。手入れの行き届いた日本庭園と自家源泉の掛け流し風呂",
        "山陰の旬を味わう月替わりの本格会席。きめ細やかなおもてなしと落ち着きある和の空間",
        "鳥取県米子市皆生温泉2-5-1（大山ドライブの拠点として世代を超えて愛される老舗宿）"
      ]
    },
    {
      name: "皆生温泉　湯喜望　白扇",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/13895/13895.jpg",
      hotelNo: 13895,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/13895/13895.html"),
      rating: 4.26,
      reviews: 1650,
      price: "¥6,050〜",
      access: "米子ICより車約15分／JR米子駅より路線バス約15分",
      features: [
        "全館畳敷きの温もりあふれる宿。全客室がオーシャンビューで展望風呂付き客室も人気",
        "海に沈む夕日と海から昇る朝日の両方を望む絶景。境港直送の海の幸尽くし会席が高コスパ",
        "鳥取県米子市皆生温泉3-12-33（白砂青松の弓ヶ浜海岸沿いに位置する寛ぎの温泉旅館）"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80" 
            alt="鳥取大山 鍵掛峠 紅葉"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-700/90 text-white text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            秋の山陰絶景特集・伯耆富士大山と海辺の名湯
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【10月下旬〜11月上旬！鳥取大山の紅葉】<br className="hidden sm:inline" />鍵掛峠の絶景パノラマと皆生温泉オーシャンビュー宿5選
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stone-200 leading-relaxed">
            西日本最大級のブナ原生林が黄金色に染まる名峰「大山」！「鍵掛峠」から見上げる荒々しい南壁と紅葉のコントラストを堪能し、日本海を一望する塩化物泉・皆生温泉の極上宿へ。
          </p>
        </div>
      </header>

      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-amber-600">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【10月下旬〜11月上旬！鳥取大山の紅葉】鍵掛峠の絶景パノラマと皆生温泉オーシャンビュー宿5選</span>
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
                "name": "鳥取・大山（だいせん）の紅葉見頃時期やおすすめスポットは？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "大山の紅葉は例年10月下旬から11月上旬にかけてピークを迎えます。最も有名な絶景スポットは「鍵掛峠（かぎかけとうげ）」で、険しい南壁の大岩壁を黄金色と橙色のブナ林が埋め尽くす光景は西日本屈指のスケールです。また、大山寺や大神山神社奥宮へと続く日本一長い自然石の石畳参道も紅葉トンネルとして大人気です。"
                }
              },
              {
                "@type": "Question",
                "name": "皆生温泉（かいけおんせん）の特徴と大山からのアクセスは？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "皆生温泉は日本海・美保湾の海中から湧き出た塩化物泉で、「塩の湯」として保湿・美肌効果に優れています。大山山麓から車で約30〜40分という近距離にあり、昼は大山で紅葉トレッキングやドライブを楽しみ、夕方は日本海の夕日を眺めながら温泉に入る贅沢な旅の黄金ルートが楽しめます。"
                }
              },
              {
                "@type": "Question",
                "name": "秋の大山ドライブの注意点や混雑対策は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "大山環状道路（鍵掛峠周辺）は紅葉ピーク時の土日祝日、午前10時〜午後15時頃にかけて非常に混雑し駐車場待ちの渋滞が発生します。午前8時〜9時台の早朝ドライブを計画するか、平日を狙って訪れるのが快適に楽しむ秘訣です。山間部は冷え込むため防寒着もお忘れなく。"
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
              { "@type": "ListItem", "position": 3, "name": "【10月下旬〜11月上旬！鳥取大山の紅葉】鍵掛峠の絶景パノラマと皆生温泉オーシャンビュー宿5選", "item": "https://croud-travel.pages.dev/autumn-tottori-daisen-momiji-kaike-onsen-hotels-stay" }
            ]
          }) }}
        />

        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-700 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              西日本一のブナ林が黄金色に輝く霊峰。荒々しい岩肌と日本海の海風に癒やされる山陰旅
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            中国地方最高峰（標高1,729m）を誇り、「伯耆富士」の名で親しまれる名峰・大山。秋を迎えると西日本最大規模のブナの天然林が山肌を一斉に黄金色へと染め上げます。特に鍵掛峠から望む荒涼とした岩肌の南壁と、足元一面に広がるブナの絨毯のコントラストは圧巻の一言。山裾のブナ林散策や古刹・大山寺参拝を楽しんだ後は、車で約30分の皆生温泉へ。日本海の白波を望むインフィニティ露天風呂で温まり、境港直送の紅ズワイガニや鳥取和牛を堪能しましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">鍵掛峠から望む大山南壁の絶景</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">大山随一の紅葉撮影ポイント。険しい岩峰と黄金色に輝くブナ林の雄大なパノラマ。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">海中から湧き出す塩の美肌湯「皆生温泉」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">塩分を豊富に含み湯冷めしにくい名湯。客室や露天風呂から日本海と白砂青松の弓ヶ浜を一望。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">境港の紅ズワイガニと鳥取和牛</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">秋に水揚げの最盛期を迎える境港の香住ガニ・紅ズワイガニと、きめ細かな霜降りの鳥取和牛。</p>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <span className="text-amber-700 font-bold tracking-wider text-xs md:text-sm uppercase">大山紅葉と日本海オーシャンビューを満喫する宿</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">厳選皆生温泉宿 5選</h2>
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
            <div className="w-2.5 h-8 bg-amber-700 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】鳥取大山紅葉ドライブ＆皆生温泉満喫モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-700 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-700 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">米子到着〜大山寺参道散策＆皆生温泉チェックイン</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">12:30〜</strong> 米子駅または米子空港に到着。レンタカーで大山山麓へ向かい、大山そばランチ。</li>
                <li>・<strong className="text-stone-800">14:00〜</strong> 大山寺・大神山神社奥宮へ。自然石の石畳参道を彩るブナやモミジの紅葉トンネルを歩く。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 皆生温泉の宿へチェックイン。客室や露天風呂から夕暮れに染まる日本海を眺める。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 境港直送の紅ズワイガニ姿茹でや、鳥取和牛ステーキを贅沢に味わう会席料理。</li>
              </ul>
            </div>
            <div className="border-l-2 border-orange-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-orange-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝湯〜鍵掛峠の大パノラマ紅葉ドライブへ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:30〜</strong> 朝の海を眺めながら塩化物泉の温泉に浸かり、新鮮な魚介が並ぶ朝食を堪能。</li>
                <li>・<strong className="text-stone-800">09:00〜</strong> 早めの時間に宿を出発し大山環状道路へ。混雑前の「鍵掛峠」で大山南壁の紅葉を鑑賞。</li>
                <li>・<strong className="text-stone-800">11:30〜</strong> 大山まきばみるくの里で大山白バラ牛乳ソフトクリームを味わい、放牧牛と弓ヶ浜のパノラマを満喫。</li>
                <li>・<strong className="text-stone-800">14:00〜</strong> 米子駅・空港へ戻り、大満足の思い出とともに帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-700 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と鳥取大山・皆生温泉旅行のポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 鳥取・大山（だいせん）の紅葉見頃時期やおすすめスポットは？</span>
                <span className="text-amber-700 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 大山の紅葉は例年10月下旬から11月上旬にかけてピークを迎えます。最も有名な絶景スポットは「鍵掛峠（かぎかけとうげ）」で、険しい南壁の大岩壁を黄金色と橙色のブナ林が埋め尽くす光景は西日本屈指のスケールです。また、大山寺や大神山神社奥宮へと続く日本一長い自然石の石畳参道も紅葉トンネルとして大人気です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 皆生温泉（かいけおんせん）の特徴と大山からのアクセスは？</span>
                <span className="text-amber-700 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 皆生温泉は日本海・美保湾の海中から湧き出た塩化物泉で、「塩の湯」として保湿・美肌効果に優れています。大山山麓から車で約30〜40分という近距離にあり、昼は大山で紅葉トレッキングやドライブを楽しみ、夕方は日本海の夕日を眺めながら温泉に入る贅沢な旅の黄金ルートが楽しめます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 秋の大山ドライブの注意点や混雑対策は？</span>
                <span className="text-amber-700 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 大山環状道路（鍵掛峠周辺）は紅葉ピーク時の土日祝日、午前10時〜午後15時頃にかけて非常に混雑し駐車場待ちの渋滞が発生します。午前8時〜9時台の早朝ドライブを計画するか、平日を狙って訪れるのが快適に楽しむ秘訣です。山間部は冷え込むため防寒着もお忘れなく。
              </p>
            </details>
          </div>
        </section>

        <HubRelatedPosts currentSlug="" />
      </main>
    </div>
  );
}
