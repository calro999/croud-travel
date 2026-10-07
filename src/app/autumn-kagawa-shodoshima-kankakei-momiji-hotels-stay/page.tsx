import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "【11月見頃！日本三大渓谷美・小豆島寒霞渓の紅葉】奇岩ロープウェイと絶景オリーブ温泉宿5選",
  description: "瀬戸内海と奇岩怪石を彩る日本屈指の渓谷美「寒霞渓」の紅葉！ロープウェイの空中散歩からエンジェルロード、極上のオリーブ牛や醤油会席を味わう小豆島のおすすめ名宿5選。",
  keywords: "小豆島 寒霞渓 紅葉 見頃 11月, 寒霞渓 ロープウェイ, 小豆島 温泉 ホテル おすすめ, 島宿真里, 小豆島国際ホテル, オリーブ牛 宿泊",
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-kagawa-shodoshima-kankakei-momiji-hotels-stay/",
  },
  openGraph: {
    title: "【11月見頃！日本三大渓谷美・小豆島寒霞渓の紅葉】奇岩ロープウェイと絶景オリーブ温泉宿5選",
    description: "瀬戸内海と奇岩怪石を彩る日本屈指の渓谷美「寒霞渓」の紅葉！ロープウェイの空中散歩からエンジェルロード、極上のオリーブ牛や醤油会席を味わう小豆島のおすすめ名宿5選。",
    url: 'https://croud-travel.pages.dev/autumn-kagawa-shodoshima-kankakei-momiji-hotels-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "小豆島 寒霞渓 紅葉",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11月見頃！日本三大渓谷美・小豆島寒霞渓の紅葉】奇岩ロープウェイと絶景オリーブ温泉宿5選",
    description: "瀬戸内海と奇岩怪石を彩る日本屈指の渓谷美「寒霞渓」の紅葉！ロープウェイの空中散歩からエンジェルロード、極上のオリーブ牛や醤油会席を味わう小豆島のおすすめ名宿5選。",
  }
};

export default function FeaturePage() {
  const hotelList = [
    {
      name: "島宿真里＜小豆島＞",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/188332/188332.jpg",
      hotelNo: 188332,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/188332/188332.html"),
      rating: 5.0,
      reviews: 180,
      price: "¥29,205〜",
      access: "草壁港・坂手港より車で約10分／土庄港より車約30分（フェリー利用）",
      features: [
        "クチコミ満点★5.0。小豆島の伝統「醤油蔵」の町並みに佇む登録有形文化財の極上隠れ家宿",
        "名物「醤油会席」で味わう瀬戸内の鮮魚とオリーブ牛。自家源泉の自家風呂と心温まるおもてなし",
        "香川県小豆郡小豆島町苗羽甲2011（全国の旅好きが憧れる小豆島最高峰の美食旅館）"
      ]
    },
    {
      name: "アクアホテル小豆島リゾート＜小豆島＞",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/192875/192875.jpg",
      hotelNo: 192875,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/192875/192875.html"),
      rating: 4.61,
      reviews: 120,
      price: "¥14,520〜",
      access: "小豆島福田港より車で約8分／土庄港より車で約40分",
      features: [
        "全室オーシャンフロントの贅沢なリゾート。瀬戸内海の波打ち際で静寂の秋を満喫",
        "展望風呂やテラスから望む穏やかな海絶景。新鮮な海の幸とオリーブ料理を味わう美食ステイ",
        "香川県小豆郡小豆島町吉田乙276-2（寒霞渓の東側ルートへのアクセスも便利な隠れ家リゾート）"
      ]
    },
    {
      name: "小豆島温泉　オリビアン小豆島　夕陽ヶ丘ホテル　＜小豆島＞",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/7592/7592.jpg",
      hotelNo: 7592,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/7592/7592.html"),
      rating: 4.48,
      reviews: 2850,
      price: "¥5,600〜",
      access: "土庄港より車で約15分（無料定期送迎バスあり・要予約）",
      features: [
        "「日本の夕陽百選」に選ばれた瀬戸内海を一望する高台のリゾート。美肌効果抜群の温泉露天風呂",
        "オリーブ牛ステーキや瀬戸内の新鮮なお造りが並ぶ豪華バイキングディナーが大人気",
        "香川県小豆郡土庄町屋形崎甲63-1（広大な敷地にテニスコートやドッグラン完備の大型リゾート）"
      ]
    },
    {
      name: "小豆島国際ホテル　＜小豆島＞",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/17990/17990.jpg",
      hotelNo: 17990,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/17990/17990.html"),
      rating: 4.4,
      reviews: 3120,
      price: "¥9,350〜",
      access: "土庄港より車で約7分（無料送迎あり）／エンジェルロード目の前（徒歩1分）",
      features: [
        "潮の満ち引きで現れる恋人の聖地「エンジェルロード」に最も近いホテル。全室オーシャンビュー",
        "波打ち際の露天風呂「浜辺の湯」から眺める瀬戸内海と島影。旬の島魚会席ディナー",
        "香川県小豆郡土庄町甲24-67（エンジェルロードの散策と寒霞渓観光を両立できる最高の立地）"
      ]
    },
    {
      name: "ベイリゾートホテル小豆島",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/44874/44874.jpg",
      hotelNo: 44874,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/44874/44874.html"),
      rating: 4.26,
      reviews: 2650,
      price: "¥5,500〜",
      access: "坂手港より車で約3分／草壁港より約10分（港より無料送迎あり・要予約）",
      features: [
        "全室オーシャンビューの温泉リゾート。最上階に海を見下ろす展望露天風呂と貸切風呂を完備",
        "オリーブバイキングや旬魚のお刺身。寒霞渓ロープウェイ山麓駅へのアクセスも良好",
        "香川県小豆郡小豆島町古江乙16-3（手頃な宿泊料金と充実の温泉設備で高い人気）"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80" 
            alt="小豆島 寒霞渓 紅葉"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-600/90 text-white text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            11月見頃！日本三大渓谷美・瀬戸内海パノラマ特集
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11月見頃！日本三大渓谷美・小豆島寒霞渓の紅葉】<br className="hidden sm:inline" />奇岩ロープウェイと絶景オリーブ温泉宿5選
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stone-200 leading-relaxed">
            瀬戸内海国立公園を代表する日本屈指の景勝地「寒霞渓」！奇岩怪石の岩肌を約50種もの紅葉植物が彩るロープウェイの絶景から、エンジェルロードやオリーブ牛会席を味わう贅沢な島旅。
          </p>
        </div>
      </header>

      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-amber-600">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【11月見頃！日本三大渓谷美・小豆島寒霞渓の紅葉】奇岩ロープウェイと絶景オリーブ温泉宿5選</span>
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
                "name": "小豆島・寒霞渓（かんかけい）の紅葉見頃時期はいつ頃ですか？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "寒霞渓の紅葉は例年11月上旬から色づき始め、11月中旬から11月下旬（11月10日〜25日頃）が見頃のピークとなります。山頂から麓へと約1ヶ月かけて紅葉前線が降りてくるため、11月いっぱいは鮮やかなグラデーションが楽しめます。"
                }
              },
              {
                "@type": "Question",
                "name": "寒霞渓ロープウェイの魅力や楽しみ方は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "こううん駅（山麓）と山頂駅を約5分で結ぶロープウェイで、車窓からは奇岩怪石の間をすり抜けるような大迫力の景色が楽しめます。山頂からは青い瀬戸内海と島々の多島美、そして燃えるような紅葉を一望できるパノラマ展望台があり、厄除け祈願の「かわらけ投げ」も名物です。"
                }
              },
              {
                "@type": "Question",
                "name": "小豆島へのアクセスと島内の移動手段は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "高松港、新岡山港、姫路港、日生港などからフェリーや高速船でアクセスします（所要時間約35〜70分）。島内はレンタカーの利用が最も効率的ですが、土庄港など主要港から路線バスや定期観光バスも運行されています。"
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
              { "@type": "ListItem", "position": 3, "name": "【11月見頃！日本三大渓谷美・小豆島寒霞渓の紅葉】奇岩ロープウェイと絶景オリーブ温泉宿5選", "item": "https://croud-travel.pages.dev/autumn-kagawa-shodoshima-kankakei-momiji-hotels-stay" }
            ]
          }) }}
        />

        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              天空を突く奇岩と瀬戸内ブルー。日本三大渓谷美を誇る小豆島・寒霞渓の秋
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            瀬戸内海に浮かぶオリーブの島・小豆島。その中央にそびえる「寒霞渓（かんかけい）」は、妙義山・耶馬渓と並び「日本三大渓谷美」の一つに数えられる国指定の名勝です。1300万年前の火山活動によって形成された奇岩怪石の断崖を、カエデやイワシデなど約50種類もの紅葉植物が鮮やかに染め上げます。ロープウェイのゴンドラから見下ろす紅葉の谷と、その向こうに広がる穏やかな瀬戸内海の青のコントラストは唯一無二。波打ち際の温泉や絶品オリーブ牛に舌鼓を打つ極上の秋旅へ出かけましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">寒霞渓ロープウェイの奇岩パノラマ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">切り立った岩壁の間をすり抜ける空中散歩。山頂展望台からの瀬戸内海絶景。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">エンジェルロードと潮騒の温泉</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">引き潮の時だけ現れる神秘の砂の道。海を間近に臨む露天風呂で夕日を眺める至福。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">讃岐オリーブ牛と伝統の木桶醤油会席</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">オリーブの搾り果実で育てられた極上黒毛和牛。400年の歴史を誇る醤油蔵の美食。</p>
            </div>
          </div>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">瀬戸内・小豆島名勝ガイド：日本三大渓谷美・小豆島 寒霞渓の紅葉</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/201211Kankakei_Shodoshima_Kagawa_pref_Japan08s3.jpg/1280px-201211Kankakei_Shodoshima_Kagawa_pref_Japan08s3.jpg"
                alt="日本三大渓谷美・小豆島 寒霞渓の紅葉"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">日本三大渓谷美・小豆島 寒霞渓の紅葉の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">寒霞渓（かんかけい）は、香川県の小豆島にある渓谷。国指定の名勝である。</p>
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
              <span className="text-amber-700 font-bold tracking-wider text-xs md:text-sm uppercase">寒霞渓観光と島リゾートを満喫する宿</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">厳選小豆島リゾート・温泉宿 5選</h2>
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
              【1泊2日】小豆島寒霞渓紅葉＆エンジェルロード満喫モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">高松からフェリーで小豆島へ〜オリーブ公園＆チェックイン</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">12:00〜</strong> 高松港よりフェリーで土庄港へ到着。レンタカーで道の駅小豆島オリーブ公園へ。</li>
                <li>・<strong className="text-stone-800">13:30〜</strong> 白いギリシャ風車とオリーブの丘で記念撮影。オリーブソフトクリームを堪能。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> ホテルへチェックイン。干潮時間に合わせてエンジェルロードの砂浜の道を散歩。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 夕食に讃岐オリーブ牛ステーキや瀬戸内の新鮮魚介、木桶仕込み醤油会席を味わう。</li>
              </ul>
            </div>
            <div className="border-l-2 border-orange-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-orange-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝湯〜寒霞渓ロープウェイ紅葉空中散歩へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">08:30〜</strong> 宿を出発し「寒霞渓ロープウェイ」紅雲亭駅へドライブ。</li>
                <li>・<strong className="text-stone-800">09:15〜</strong> ロープウェイに乗車！奇岩怪石の間を滑るように進み、紅葉と青い瀬戸内海を鑑賞。</li>
                <li>・<strong className="text-stone-800">10:30〜</strong> 山頂展望台からのかわらけ投げに挑戦。鷹取展望台からの絶景パノラマを堪能。</li>
                <li>・<strong className="text-stone-800">13:30〜</strong> 醤の郷で手延べそうめんランチとお土産のオリーブオイルを購入し、フェリーで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と小豆島旅行のポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 小豆島・寒霞渓（かんかけい）の紅葉見頃時期はいつ頃ですか？</span>
                <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 寒霞渓の紅葉は例年11月上旬から色づき始め、11月中旬から11月下旬（11月10日〜25日頃）が見頃のピークとなります。山頂から麓へと約1ヶ月かけて紅葉前線が降りてくるため、11月いっぱいは鮮やかなグラデーションが楽しめます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 寒霞渓ロープウェイの魅力や楽しみ方は？</span>
                <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. こううん駅（山麓）と山頂駅を約5分で結ぶロープウェイで、車窓からは奇岩怪石の間をすり抜けるような大迫力の景色が楽しめます。山頂からは青い瀬戸内海と島々の多島美、そして燃えるような紅葉を一望できるパノラマ展望台があり、厄除け祈願の「かわらけ投げ」も名物です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 小豆島へのアクセスと島内の移動手段は？</span>
                <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 高松港、新岡山港、姫路港、日生港などからフェリーや高速船でアクセスします（所要時間約35〜70分）。島内はレンタカーの利用が最も効率的ですが、土庄港など主要港から路線バスや定期観光バスも運行されています。
              </p>
            </details>
          </div>
        </section>

        <HubRelatedPosts currentSlug="" />
      </main>
    </div>
  );
}
