import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "秋の浴衣散歩と七つの外湯！城崎温泉：極上但馬牛と老舗・有形文化財の名旅館5選",
  description: "柳並木と太鼓橋が続く風情あふれる城崎温泉！名物「七つの外湯巡り」を浴衣と下駄で楽しみ、世界の舌を魅了する但馬牛や旬の日本海グルメを味わうおすすめ名宿5選。",
  keywords: "城崎温泉 外湯巡り 旅館 おすすめ, 城崎温泉 但馬牛 宿泊, 西村屋本館, 三木屋 城崎, 城崎 浴衣 散策",
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-hyogo-kinosaki-onsen-sotoyu-tajimagyu-hotels-stay/",
  },
  openGraph: {
    title: "秋の浴衣散歩と七つの外湯！城崎温泉：極上但馬牛と老舗・有形文化財の名旅館5選",
    description: "柳並木と太鼓橋が続く風情あふれる城崎温泉！名物「七つの外湯巡り」を浴衣と下駄で楽しみ、世界の舌を魅了する但馬牛や旬の日本海グルメを味わうおすすめ名宿5選。",
    url: 'https://croud-travel.pages.dev/autumn-hyogo-kinosaki-onsen-sotoyu-tajimagyu-hotels-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "城崎温泉 柳並木",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "秋の浴衣散歩と七つの外湯！城崎温泉：極上但馬牛と老舗・有形文化財の名旅館5選",
    description: "柳並木と太鼓橋が続く風情あふれる城崎温泉！名物「七つの外湯巡り」を浴衣と下駄で楽しみ、世界の舌を魅了する但馬牛や旬の日本海グルメを味わうおすすめ名宿5選。",
  }
};

export default function FeaturePage() {
  const hotelList = [
    {
      name: "城崎温泉　西村屋本館",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/75399/75399.jpg",
      hotelNo: 75399,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/75399/75399.html"),
      rating: 5.0,
      reviews: 310,
      price: "¥45,000〜",
      access: "JR城崎温泉駅より徒歩15分（旅館組合無料バスあり）／北近畿豊岡道 豊岡出石ICより車約18分",
      features: [
        "楽天トラベルクチコミ満点★5.0。創業百六十余年、山陰屈指の格式と伝統を誇る純日本旅館",
        "名園を囲む数寄屋造りの棟と静寂の平田館。但馬牛や香住ガニなど日本海の恵みを極めた懐石",
        "兵庫県豊岡市城崎町湯島469（文豪・志賀直哉ゆかりの風情を今に伝える最高峰の宿）"
      ]
    },
    {
      name: "城崎温泉　登録有形文化財の宿　三木屋",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/106245/106245.jpg",
      hotelNo: 106245,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/106245/106245.html"),
      rating: 4.81,
      reviews: 420,
      price: "¥28,600〜",
      access: "JR城崎温泉駅より徒歩約13分（無料送迎バスあり）",
      features: [
        "文豪・志賀直哉が名作『城の崎にて』を執筆した創業300年の登録有形文化財の宿",
        "約300坪の美しい日本庭園を望む木造建築。厳選但馬牛ステーキや八鹿豚会席を堪能",
        "兵庫県豊岡市城崎町湯島487（歴史ある書斎や庭園散策で文学の薫りに浸る上質な滞在）"
      ]
    },
    {
      name: "城崎温泉　西村屋ホテル招月庭",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/14007/14007.jpg",
      hotelNo: 14007,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/14007/14007.html"),
      rating: 4.7,
      reviews: 1680,
      price: "¥35,200〜",
      access: "JR城崎温泉駅より旅館組合無料乗合バスで約5〜15分",
      features: [
        "5万坪の森林庭園に抱かれる西村屋の別邸リゾート。ジャグジーやサウナを備えた4つの貸切露天風呂",
        "大浴場「月下の湯」と森林露天風呂。但馬牛や旬の魚介会席、洗練されたおもてなし",
        "兵庫県豊岡市城崎町湯島1016-2（ファミリーや三世代旅行にも選ばれる充実の設備）"
      ]
    },
    {
      name: "城崎温泉　かがり火の宿　大西屋水翔苑",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/18412/18412.jpg",
      hotelNo: 18412,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/18412/18412.html"),
      rating: 4.58,
      reviews: 1450,
      price: "¥9,230〜",
      access: "JR城崎温泉駅より組合無料バスで約5分／北近畿豊岡道 但馬空港ICより車約25分",
      features: [
        "全館畳敷きで素足が心地よい和風宿。夕暮れには中庭にかがり火が灯る幻想的な演出",
        "女性に嬉しい選べる色浴衣の無料貸出サービス。但馬牛陶板焼きや海鮮料理を味わう美食プラン",
        "兵庫県豊岡市城崎町桃島1256番地（温泉街への送迎バスも頻繁に運行し外湯巡りも快適）"
      ]
    },
    {
      name: "城崎温泉　川口屋城崎リバーサイドホテル",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/5307/5307.jpg",
      hotelNo: 5307,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/5307/5307.html"),
      rating: 4.47,
      reviews: 1120,
      price: "¥13,200〜",
      access: "JR城崎温泉駅より徒歩約6分／北近畿豊岡道 但馬空港ICより車約25分",
      features: [
        "大谿川沿いに位置し、外湯「地蔵湯」まで徒歩1分。展望露天風呂や貸切露天風呂も完備",
        "但馬牛すき焼きや日本海の旬魚姿造り会席。コスパ抜群で学生旅行やカップルにも大人気",
        "兵庫県豊岡市城崎町湯島880-1（駅からも近く温泉街の散策拠点に最高のロケーション）"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80" 
            alt="城崎温泉 柳並木"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-800/90 text-white text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            名湯街歩き特集・外湯巡りと但馬牛
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">「秋の浴衣散歩と七つの外湯！城崎温泉」<br className="hidden sm:inline" />極上但馬牛と老舗・有形文化財の名旅館5選</h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stone-200 leading-relaxed">
            大谿川沿いの柳並木と太鼓橋。カランコロンと下駄の音を響かせながら巡る「七つの外湯」。秋風が心地よい温泉街で、世界に誇る黒毛和牛の最高峰「但馬牛」に舌鼓を打つ至福の休日。
          </p>
        </div>
      </header>

      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-amber-600">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【秋の浴衣散歩と七つの外湯！城崎温泉】極上但馬牛と老舗・有形文化財の名旅館5選</span>
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
                "name": "城崎温泉「七つの外湯巡り」の入浴方法やパス（ゆめぱ）とは？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "城崎温泉の旅館に宿泊すると、チェックインから翌日15:30まで七つの外湯（一の湯、御所の湯、鴻の湯、さとの湯、まんだら湯、柳湯、地蔵湯）に何度でも無料で入れるデジタル外湯券「ゆめぱ（外湯めぐりパス）」が発行されます。浴衣と下駄を履いて手ぶらで湯巡りを楽しめます。"
                }
              },
              {
                "@type": "Question",
                "name": "秋（10月・11月）の城崎温泉でのおすすめグルメは？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "神戸牛や松阪牛など日本全国のブランド牛の素牛（もとうし）である「但馬牛（たじまぎゅう）」のステーキやすき焼きが絶品です。また、9月から水揚げが解禁される「香住ガニ（紅ズワイガニ）」や、11月6日のズワイガニ（松葉ガニ）漁解禁以降は本場の活カニ料理も楽しめます。"
                }
              },
              {
                "@type": "Question",
                "name": "浴衣での温泉街散策のポイントや注意点は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "秋の城崎温泉は川沿いの風が涼しく快適ですが、夜間は冷え込むため旅館で貸し出される羽織やストールを着用するのがおすすめです。外湯にはタオル類が備え付けられていないため、宿泊宿の部屋から外湯用タオルセットを持参しましょう。"
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
              { "@type": "ListItem", "position": 3, "name": "【秋の浴衣散歩と七つの外湯！城崎温泉】極上但馬牛と老舗・有形文化財の名旅館5選", "item": "https://croud-travel.pages.dev/autumn-hyogo-kinosaki-onsen-sotoyu-tajimagyu-hotels-stay" }
            ]
          }) }}
        />

        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-800 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              開湯1300年の歴史が息づく温泉街。浴衣姿で巡る七つの外湯と至高の但馬牛
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            兵庫県日本海側に位置する「城崎温泉」は、平安時代から続く名湯として志賀直哉をはじめ多くの文豪・墨客に愛されてきました。温泉街の中央を流れる大谿川沿いには柳の木と太鼓橋が連なり、夜になるとガス灯が灯って日本屈指の風情を醸し出します。宿泊者に渡されるパスで七つの個性的な外湯を自由に巡り、夕食には世界農業遺産にも認定された但馬牛の極上肉や日本海の旬魚を味わう、心満たされる秋旅へ出かけましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-800 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">七つの外湯を巡る「ゆめぱ」パス</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">合格祈願の一の湯や美人の湯・御所の湯など、それぞれ異なるご利益と建築美を持つ外湯巡り。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-800 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">世界のブランド牛の頂点「但馬牛」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">とろけるようなサシと芳醇な香り。ステーキ、しゃぶしゃぶ、すき焼きで味わう贅沢な夕餐。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-800 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">浴衣姿で歩くガス灯の温泉街</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">温泉たまご作り体験や地ビールバー、柳並木のライトアップなど散策の楽しみが満載。</p>
            </div>
          </div>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">但馬・名湯ガイド：柳並木の温泉情緒・城崎温泉と外湯めぐり</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Kinosaki_onsen02_1920.jpg/1280px-Kinosaki_onsen02_1920.jpg"
                alt="柳並木の温泉情緒・城崎温泉と外湯めぐり"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">柳並木の温泉情緒・城崎温泉と外湯めぐりの歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">城崎温泉（きのさきおんせん）は、兵庫県豊岡市城崎町にある温泉。平安時代以前から知られる長い歴史を持つ。江戸時代には「海内第一泉（かいだいだいいちせん）」と呼ばれ、今もその碑が残る。有馬温泉、湯村温泉とともに兵庫県を代表する温泉でもある。</p>
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
              <span className="text-amber-800 font-bold tracking-wider text-xs md:text-sm uppercase">外湯巡りと但馬牛を堪能する名宿</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">厳選温泉宿 5選</h2>
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

                    <h3 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors mb-3">
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
                      <span className="text-xl md:text-2xl font-black text-amber-800">{hotel.price}</span>
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
            <div className="w-2.5 h-8 bg-amber-800 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】城崎温泉 外湯巡り＆美食満喫モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-800 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-800 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">城崎到着〜色浴衣で1・2軒目の外湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> JR城崎温泉駅に到着。宿泊宿へチェックインし、好きな色浴衣と下駄を選ぶ。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> 外湯パス「ゆめぱ」を持って「御所の湯」へ。滝の流れる開放的な露天風呂を堪能。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 柳並木沿いのカフェで城崎ジェラートを味わい、足湯に浸かって一休み。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 宿でいただく但馬牛ステーキと香住ガニの極上夕食会席。地酒とともに贅沢な時間を過ごす。</li>
                <li>・<strong className="text-stone-800">20:30〜</strong> 夜のライトアップされた街並みを歩き、洞窟風呂が名物の「一の湯」へ。</li>
              </ul>
            </div>
            <div className="border-l-2 border-amber-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝の外湯〜温泉街ショッピング＆帰路</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:30〜</strong> 朝一番に開く「鴻の湯」で庭園露天風呂を満喫し、宿で美味しい和朝食をいただく。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、城崎ロープウェイで大師山山頂へ。日本海と温泉街を一望。</li>
                <li>・<strong className="text-stone-800">12:00〜</strong> 但馬牛バーガーやお土産用の麦わら細工を購入し、特急こうのとり号で帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-800 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と城崎温泉旅行のポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 城崎温泉「七つの外湯巡り」の入浴方法やパス（ゆめぱ）とは？</span>
                <span className="text-amber-800 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 城崎温泉の旅館に宿泊すると、チェックインから翌日15:30まで七つの外湯（一の湯、御所の湯、鴻の湯、さとの湯、まんだら湯、柳湯、地蔵湯）に何度でも無料で入れるデジタル外湯券「ゆめぱ（外湯めぐりパス）」が発行されます。浴衣と下駄を履いて手ぶらで湯巡りを楽しめます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 秋（10月・11月）の城崎温泉でのおすすめグルメは？</span>
                <span className="text-amber-800 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 神戸牛や松阪牛など日本全国のブランド牛の素牛（もとうし）である「但馬牛（たじまぎゅう）」のステーキやすき焼きが絶品です。また、9月から水揚げが解禁される「香住ガニ（紅ズワイガニ）」や、11月6日のズワイガニ（松葉ガニ）漁解禁以降は本場の活カニ料理も楽しめます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 浴衣での温泉街散策のポイントや注意点は？</span>
                <span className="text-amber-800 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 秋の城崎温泉は川沿いの風が涼しく快適ですが、夜間は冷え込むため旅館で貸し出される羽織やストールを着用するのがおすすめです。外湯にはタオル類が備え付けられていないため、宿泊宿の部屋から外湯用タオルセットを持参しましょう。
              </p>
            </details>
          </div>
        </section>

        <HubRelatedPosts currentSlug="" />
      </main>
    </div>
  );
}
