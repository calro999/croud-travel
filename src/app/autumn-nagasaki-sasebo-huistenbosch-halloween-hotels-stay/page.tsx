import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "2026年秋！ハウステンボス・ハロウィンナイト：イルミネーションと直営・周辺人気ホテル5選",
  description: "ヨーロッパの街並みが巨大カボチャと幻想的な光に包まれる長崎ハウステンボスのハロウィン！限定パレードやナイトショーを満喫できる直営ホテルから駅前人気宿まで厳選5選。",
  keywords: "ハウステンボス ハロウィン 2026, ハウステンボス ホテル 直営, ホテルヨーロッパ ハウステンボス, ハウステンボス ナイトショー 宿泊, 長崎 秋旅行",
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-nagasaki-sasebo-huistenbosch-halloween-hotels-stay/",
  },
  openGraph: {
    title: "2026年秋！ハウステンボス・ハロウィンナイト：イルミネーションと直営・周辺人気ホテル5選",
    description: "ヨーロッパの街並みが巨大カボチャと幻想的な光に包まれる長崎ハウステンボスのハロウィン！限定パレードやナイトショーを満喫できる直営ホテルから駅前人気宿まで厳選5選。",
    url: 'https://croud-travel.pages.dev/autumn-nagasaki-sasebo-huistenbosch-halloween-hotels-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "ハウステンボス ハロウィン",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "2026年秋！ハウステンボス・ハロウィンナイト：イルミネーションと直営・周辺人気ホテル5選",
    description: "ヨーロッパの街並みが巨大カボチャと幻想的な光に包まれる長崎ハウステンボスのハロウィン！限定パレードやナイトショーを満喫できる直営ホテルから駅前人気宿まで厳選5選。",
  }
};

export default function FeaturePage() {
  const hotelList = [
    {
      name: "ホテルヨーロッパ　ハウステンボス",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/9159/9159.jpg",
      hotelNo: 9159,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/9159/9159.html"),
      rating: 4.62,
      reviews: 2480,
      price: "¥17,500〜",
      access: "JRハウステンボス駅より無料シャトルバス／博多駅より特急ハウステンボス号で約100分",
      features: [
        "専用クルーザーでチェックイン。運河沿いに佇むハウステンボス最高峰のクラシカルホテル",
        "毎夜ラウンジで開催されるクラシック生演奏と、秋の旬素材を極めた贅沢なフレンチディナー",
        "長崎県佐世保市ハウステンボス町7-7（パーク内に位置し夜間イベント後も優雅に帰室可能）"
      ]
    },
    {
      name: "ホテルアムステルダム　ハウステンボス",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/9157/9157.jpg",
      hotelNo: 9157,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/9157/9157.html"),
      rating: 4.59,
      reviews: 3120,
      price: "¥16,200〜",
      access: "JRハウステンボス駅より徒歩・場内バス連絡／長崎空港より高速船で約45分",
      features: [
        "パークの中心部・アムステルダム広場に直結。ハロウィンイベントやパレード鑑賞に抜群の立地",
        "朝の開園前や夜間の静かなヨーロッパの街並みを独り占めできる唯一無二のパーク内ステイ",
        "長崎県佐世保市ハウステンボス町7-7（広々とした客室でファミリーや女子旅に大人気）"
      ]
    },
    {
      name: "ホテルオークラＪＲハウステンボス",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/9057/9057.jpg",
      hotelNo: 9057,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/9057/9057.html"),
      rating: 4.59,
      reviews: 4350,
      price: "¥5,750〜",
      access: "JRハウステンボス駅より徒歩約3分／西九州道 佐世保大塔ICより車で約15分",
      features: [
        "オランダのアムステルダム中央駅を模した壮麗な外観。駅徒歩3分でアクセス抜群の公式ホテル",
        "100%源泉掛け流しの天然温泉「琴乃湯」を完備。パークで歩き疲れた身体を癒やす極上湯",
        "長崎県佐世保市ハウステンボス町10（ホテル専用カナルクルーザーでパークへ直接入国可能）"
      ]
    },
    {
      name: "ホテル日航ハウステンボス",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/1793/1793.jpg",
      hotelNo: 1793,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/1793/1793.html"),
      rating: 4.45,
      reviews: 3890,
      price: "¥8,000〜",
      access: "JRハウステンボス駅より徒歩約10分／入国ゲートすぐ横に位置",
      features: [
        "ハウステンボス入国ゲートまで徒歩約3分の好立地。宿泊者専用の再入場ゲートも利用可能",
        "大浴場完備でゆったりリフレッシュ。日航ブランドならではの洗練されたホスピタリティと朝食ブッフェ",
        "長崎県佐世保市ハウステンボス町6番地（ファミリー向け客室やアメニティも充実）"
      ]
    },
    {
      name: "フォレストヴィラ　ハウステンボス",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/9156/9156.jpg",
      hotelNo: 9156,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/9156/9156.html"),
      rating: 4.42,
      reviews: 1650,
      price: "¥8,900〜",
      access: "JRハウステンボス駅より場内バス連絡／博多駅より特急約100分",
      features: [
        "湖畔の森に佇む2階建てコテージヴィラ。1階がリビング、2階に独立したベッドルームを2室完備",
        "家族やグループ、愛犬連れでの滞在に最適。プライベートな別荘感覚で秋の夜長を満喫",
        "長崎県佐世保市ハウステンボス町7-7（白鳥が泳ぐ静かな湖畔のロケーション）"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1600&q=80" 
            alt="ハウステンボス ハロウィン"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-700/90 text-white text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            秋のテーマパーク・ハロウィン特集
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">「2026年秋！ハウステンボス・ハロウィンナイト」<br className="hidden sm:inline" />イルミネーションと直営・周辺人気ホテル5選</h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stone-200 leading-relaxed">
            本場ヨーロッパの街並みが幻想的なハロウィンの光と巨大カボチャで彩られるハウステンボスの秋！昼の華やかなパレードから夜のドラマティックなナイトショーまで、時間を気にせず遊び尽くせる人気宿を厳選。
          </p>
        </div>
      </header>

      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-amber-600">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【2026年秋！ハウステンボス・ハロウィンナイト】イルミネーションと直営・周辺人気ホテル5選</span>
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
                "name": "ハウステンボスのハロウィンイベントの期間や見どころは？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "例年9月上旬から11月上旬にかけて開催されます。巨大なジャック・オー・ランタンやカボチャのピラミッドが並ぶフォトスポット、ハロウィン限定の仮装パレード、そして夜には世界最大級のイルミネーションと融合したプロジェクションマッピングやナイト花火ショーが最大の見どころです。"
                }
              },
              {
                "@type": "Question",
                "name": "直営ホテル（ホテルヨーロッパ・アムステルダム等）に泊まるメリットは？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "パーク直営ホテル宿泊者は、開園前や夜間のイルミネーション終了後もヨーロッパの街並みをゆったり散策できます。また、手荷物の無料配送サービスや専用クルーザーでの移動、翌日のパスポート優待など特典が豊富です。"
                }
              },
              {
                "@type": "Question",
                "name": "秋の長崎・佐世保の気候とハロウィン散策の服装は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "10月のハウステンボスは日中20℃前後と過ごしやすいですが、大村湾からの海風が吹く夜間は10〜14℃前後まで冷え込みます。広大な敷地を歩くため履き慣れたスニーカーを選び、夜のショー鑑賞用にトレンチコートや厚手のストールを持参するのがおすすめです。"
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
              { "@type": "ListItem", "position": 3, "name": "【2026年秋！ハウステンボス・ハロウィンナイト】イルミネーションと直営・周辺人気ホテル5選", "item": "https://croud-travel.pages.dev/autumn-nagasaki-sasebo-huistenbosch-halloween-hotels-stay" }
            ]
          }) }}
        />

        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-purple-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              ヨーロッパの街並みがカボチャの光で幻想的に輝く。大人のためのハロウィンナイト
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            単一テーマパークとして日本最大の敷地面積を誇る長崎「ハウステンボス」。秋の訪れとともに、赤レンガの街並みや運河沿いが数千個のカボチャランタンと秋の花々で華やかに彩られます。昼はヨーロッパ風のカフェテラスで秋のスイーツやワインを楽しみ、夕暮れからは世界最大1,300万球のイルミネーションと融合した幻想的なハロウィンショーを鑑賞。直営ホテルや駅前ホテルに宿泊すれば、時間を気にせずロマンティックな夜を過ごせます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-purple-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>ハイライト 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">巨大カボチャのランタンタワー</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">本場ヨーロッパの広場を埋め尽くす圧巻のカボチャオブジェ。昼と夜で表情が変わる人気スポット。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-purple-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>ハイライト 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">ハロウィン限定の光のショー＆パレード</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">プロジェクションマッピングと音楽が織りなすナイトエンターテインメント。迫力の演出に心奪われる。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-purple-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>ハイライト 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">オランダ風情と長崎海の幸グルメ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">長崎和牛のステーキや新鮮な魚介、本場直輸入のチーズやワインを味わう贅沢な美食ディナー。</p>
            </div>
          </div>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">長崎・リゾートタウンガイド：ヨーロッパの街並み・ハウステンボスの秋</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Huis_Ten_Bosch_-_01.jpg"
                alt="ヨーロッパの街並み・ハウステンボスの秋"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">ヨーロッパの街並み・ハウステンボスの秋の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">ハウステンボス（蘭: Huis Ten Bosch）は、長崎県佐世保市にあるテーマパーク。略称は「HTB」、テンボス。オランダの街並みを再現し、ヨーロッパ全体をテーマとしている。東京ディズニーリゾートの1.5倍の敷地面積で、単独テーマパークとしては日本最大。ドラマ・映画・CMなどのロケ地としても使われている。佐世保市の町にもなっており、所在地の住所は「佐世保市ハウステンボス町（まち）1-1」。</p>
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
              <span className="text-purple-600 font-bold tracking-wider text-xs md:text-sm uppercase">ハウステンボス観光に便利な厳選宿</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">厳選宿泊施設 5選</h2>
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

                    <h3 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-purple-600 transition-colors mb-3">
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
                      <span className="text-xl md:text-2xl font-black text-purple-600">{hotel.price}</span>
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
            <div className="w-2.5 h-8 bg-purple-600 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】ハウステンボス・ハロウィンナイト満喫モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-purple-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-purple-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">午後入国〜ハロウィンパレード＆イルミナイト</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:00〜</strong> ハウステンボスへ入国。荷物をホテルフロントまたは場内配送サービスに預けて身軽にスタート。</li>
                <li>・<strong className="text-stone-800">14:30〜</strong> アムステルダム広場のカボチャタワー前で記念撮影＆秋限定スイーツのティータイム。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> ハロウィン仮装パレードに参加。キャストやキャラクターと一緒に賑やかに楽しむ。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 運河沿いのレストランで長崎和牛や魚介のディナー。</li>
                <li>・<strong className="text-stone-800">20:00〜</strong> 幻想的なプロジェクションマッピングと1,300万球のイルミネーションを鑑賞し、ホテルへ。</li>
              </ul>
            </div>
            <div className="border-l-2 border-amber-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">静かな朝の街並み散策〜お買い物＆帰路</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">08:00〜</strong> ホテルの豪華朝食ブッフェを味わった後、一般開園前の静寂に包まれた街並みを朝散歩。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> アトラクションタウンでVRや体験型施設を満喫。</li>
                <li>・<strong className="text-stone-800">12:00〜</strong> 佐世保名物レモンステーキのランチを味わい、カステラやオランダ直輸入チョコレートのお土産を購入。</li>
                <li>・<strong className="text-stone-800">14:30〜</strong> 特急ハウステンボス号や高速船に乗車し、充実した余韻とともに帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-purple-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）とハウステンボス滞在のポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. ハウステンボスのハロウィンイベントの期間や見どころは？</span>
                <span className="text-purple-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 例年9月上旬から11月上旬にかけて開催されます。巨大なジャック・オー・ランタンやカボチャのピラミッドが並ぶフォトスポット、ハロウィン限定の仮装パレード、そして夜には世界最大級のイルミネーションと融合したプロジェクションマッピングやナイト花火ショーが最大の見どころです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 直営ホテル（ホテルヨーロッパ・アムステルダム等）に泊まるメリットは？</span>
                <span className="text-purple-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. パーク直営ホテル宿泊者は、開園前や夜間のイルミネーション終了後もヨーロッパの街並みをゆったり散策できます。また、手荷物の無料配送サービスや専用クルーザーでの移動、翌日のパスポート優待など特典が豊富です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 秋の長崎・佐世保の気候とハロウィン散策の服装は？</span>
                <span className="text-purple-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 10月のハウステンボスは日中20℃前後と過ごしやすいですが、大村湾からの海風が吹く夜間は10〜14℃前後まで冷え込みます。広大な敷地を歩くため履き慣れたスニーカーを選び、夜のショー鑑賞用にトレンチコートや厚手のストールを持参するのがおすすめです。
              </p>
            </details>
          </div>
        </section>

        <HubRelatedPosts currentSlug="" />
      </main>
    </div>
  );
}
