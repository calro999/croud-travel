import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月限定！光の祭典＆クリスマスイルミネーション】幻想的な夜景リゾート宿5選",
  description: "11月からスタートする日本最大級のクリスマスイルミネーション＆光の王国！ハウステンボスの世界最大1300万球の輝きや、なばなの里、東京ベイエリアの絶景夜景を客室やバルコニーから独占できるプレミアムリゾート。",
  keywords: "ハウステンボス ホテル, 11月旅行, 12月旅行, 冬休み, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/winter-scenic-illumination-luxury-resort',
  },
  openGraph: {
    title: "【11・12月限定！光の祭典＆クリスマスイルミネーション】幻想的な夜景リゾート宿5選",
    description: "11月からスタートする日本最大級のクリスマスイルミネーション＆光の王国！ハウステンボスの世界最大1300万球の輝きや、なばなの里、東京ベイエリアの絶景夜景を客室やバルコニーから独占できるプレミアムリゾート。",
    url: 'https://croud-travel.com/winter-scenic-illumination-luxury-resort',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月限定！光の祭典＆クリスマスイルミネーション】幻想的な夜景リゾート宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月限定！光の祭典＆クリスマスイルミネーション】幻想的な夜景リゾート宿5選",
    description: "11月からスタートする日本最大級のクリスマスイルミネーション＆光の王国！ハウステンボスの世界最大1300万球の輝きや、なばなの里、東京ベイエリアの絶景夜景を客室やバルコニーから独占できるプレミアムリゾート。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12月限定！光の祭典＆クリスマスイルミネーション】幻想的な夜景リゾート宿5選",
    "description": "11月からスタートする日本最大級のクリスマスイルミネーション＆光の王国！ハウステンボスの世界最大1300万球の輝きや、なばなの里、東京ベイエリアの絶景夜景を客室やバルコニーから独占できるプレミアムリゾート。",
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "2026-09-27T00:00:00+09:00",
    "dateModified": "2026-09-27T00:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド 編集部",
      "url": "https://croud-travel.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.com/winter-scenic-illumination-luxury-resort"
    }
  };

  const hotelList = [
            {
              name: "ホテルヨーロッパ　ハウステンボス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9159/9159.jpg",
              rating: 4.6,
              reviews: 2482,
              price: "¥16,000〜",
              access: "博多駅→特急約100分／長崎駅→快速約90分／長崎空港→高速船約45分・バス約60分",
              features: ["ハウステンボス直営／ハウステンボス最上位ホテル。クラシカルな世界観と専用クルーズで贅沢なひと時を。", "佐世保市ハウステンボス町7-7", "楽天アワード受賞歴"]
            },
            {
              name: "ホテルアムステルダム　ハウステンボス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9157/9157.jpg",
              rating: 4.6,
              reviews: 2519,
              price: "¥12,400〜",
              access: "博多駅→特急約100分／長崎駅→快速約90分／長崎空港→高速船約45分・バス約60分",
              features: ["ハウステンボス直営／ハウステンボステーマパーク内に位置する唯一のホテルで、抜群の立地と癒しの滞在を。", "佐世保市ハウステンボス町7-7", "楽天アワード受賞歴"]
            },
            {
              name: "ホテルデンハーグ　ハウステンボス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/130617/130617.jpg",
              rating: 4.3,
              reviews: 3060,
              price: "¥11,900〜",
              access: "博多駅→特急約100分／長崎駅→快速約90分／長崎��港→高速船約45分・バス約60分",
              features: ["ハウステンボス直営／静かな海辺に建つ、オールインクルーシブホテル。添い寝のお子様はお食事無料！", "佐世保市ハウステンボス町7-9", "楽天アワード受賞歴"]
            },
            {
              name: "ホテルロッテルダム　ハウステンボス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/149305/149305.jpg",
              rating: 4.3,
              reviews: 1719,
              price: "¥8,300〜",
              access: "博多駅→特急約100分／長崎駅→快速約90分／長崎空港→バス約60分",
              features: ["ハウステンボス直営／軽朝食無料！シンプルなサービスのカジュアルホテル。アーリーパークイン特典も。", "佐世保市ハウステンボス町6-5　", "楽天アワード受賞歴"]
            },
            {
              name: "フォレストヴィラ　ハウステンボス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9156/9156.jpg",
              rating: 4.4,
              reviews: 1102,
              price: "¥8,900〜",
              access: "博多駅→特急約100分／長崎駅→快速約90分／長崎空港→高速船約45分・バス約60分",
              features: ["ハウステンボス直営／別荘感覚のメゾネットコテージで、家族や仲間と自由に賑やかなハウステンボス滞在を。", "佐世保市ハウステンボス町7-7　", "楽天アワード受賞歴"]
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
            <span>光の祭典＆イルミネーションホテル</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【11・12月限定！光の祭典＆クリスマスイルミネーション】幻想的な夜景リゾート宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            11月からスタートする日本最大級のクリスマスイルミネーション＆光の王国！ハウステンボスの世界最大1300万球の輝きや、なばなの里、東京ベイエリアの絶景夜景を客室やバルコニーから独占できるプレミアムリゾート。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【11・12月限定！光の祭典＆クリスマスイルミネーション】幻想的な夜景リゾート宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              数百万の光が織りなす冬の魔法。客室バルコニーから眺める圧倒的な光の王国とクリスマスリゾート
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            空気が澄み渡る11月・12月は、全国のイルミネーションが最も美しく輝くシーズン。ハウステンボスのヨーロッパ調の街並みを彩る光の祭典や、なばなの里の壮大な光のトンネル、東京・横浜のベイサイド夜景など、息をのむほどロマンチックな世界が広がります。園内直営ホテルや高層階バルコニー付き客室から光の海を見下ろし、厳選ディナーとワインで心温まる冬の休日をお過ごしください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">客室専用バルコニーから望む圧巻のイルミネーション夜景</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">混雑を離れてプライベート空間から楽しむ光のショー。特等席のロマンチック体験。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">シェフ特製のクリスマス＆冬のプレミアムフレンチ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">旬の食材と地元牛を贅沢に使用したフルコース。厳選シャンパンとともに。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">イルミネーション直結！開園前・閉園後の散策特典</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">宿泊者専用ゲートや先行入場特典で、静かな朝夕の幻想的な街並みを満喫。</p>
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

        {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              【1泊2日】11・12月おすすめモデルコース＆旅程
            </h2>
          </div>
          <p className="text-stone-600 mb-8 text-sm md:text-base leading-relaxed">
            初冬の魅力を余すところなく味わい尽くす1泊2日の理想の旅程プラン。旬のグルメ、絶景鑑賞、温泉を効率よく巡るタイムスケジュールです。
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">出発〜観光・旬のディナーと名湯露天</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 現地到着後、周辺の観光名所や初冬の絶景スポットを散策。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> 宿へチェックイン。お茶菓子をいただきながら温かい客室でリラックス。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 夕暮れ時の露天風呂で冷えた体を芯から温める贅沢な湯浴み。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 旬の極上グルメ会席（ブランド蟹・とらふぐ・特選和牛）に舌鼓。</li>
                <li>・<strong className="text-stone-800">20:30〜</strong> 冬の澄んだ星空やライトアップ・夜景を眺める大人の夜。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝風呂〜朝食・冬の特産品ショッピング</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 清々しい初冬の空気を感じながら目覚めの朝風呂・サウナ。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 炊きたて地元産ごはんと郷土の温かい朝食膳を堪能。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の海鮮市場や道の駅でお土産選び。</li>
                <li>・<strong className="text-stone-800">12:30〜</strong> 地元名物ランチを楽しみ、心温まる思い出とともに帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と冬旅のワンポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 11月〜12月の予約はいつ頃取れば良いですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. カニ解禁時期や年末年始、クリスマス期間は非常に人気が高く、9月〜10月には満室になる宿も多くあります。日程が決まり次第、2〜3ヶ月前の早期予約が最も確実です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 冬場の車移動でスタッドレスタイヤやチェーンは必要ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 東北・北陸・甲信越や山間部エリアでは11月下旬以降に降雪・路面凍結の可能性があるため、冬用タイヤの装着が必須です。公共交通機関利用の場合は最寄り駅からの送迎バスを活用すると安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 食事の量やブランド食材の指定プランはありますか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。タグ付き活ガニの匹数指定プランや、とらふぐフルコースなど多彩なグルメプランが用意されています。プラン詳細をご確認の上、ご希望の料理プランをお選びください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              全国の人気エリア・温泉地から宿を探す
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/prefectures/miyagi"
              className="text-xs px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
            >
              宮城県のおすすめ宿・温泉一覧 →
            </Link>
            <Link
              href="/prefectures/shimane"
              className="text-xs px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
            >
              島根県のおすすめ宿・温泉一覧 →
            </Link>
            <Link
              href="/prefectures/saga"
              className="text-xs px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
            >
              佐賀県のおすすめ宿・温泉一覧 →
            </Link>
            <Link
              href="/prefectures/hokkaido"
              className="text-xs px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
            >
              北海道のおすすめ宿・温泉一覧 →
            </Link>
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
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              【1泊2日】おすすめモデルコース＆旅の過ごし方
            </h2>
          </div>
          <p className="text-stone-600 mb-8 text-sm md:text-base leading-relaxed">
            本特集の魅力を最大限に満喫するための理想的な1泊2日旅程モデルプランです。周辺の観光名所やグルメスポットとあわせて、無理のないスケジュールで最高の旅をお楽しみください。
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">出発〜チェックイン・夕食と名湯を満喫</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 現地到着後、周辺の散策や名物カフェ・観光スポットをのんびり観光。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> お宿へチェックイン。ウェルカムドリンクや特製スイーツを楽しみながら客室で一息。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 夕暮れ時の露天風呂・サウナで日頃の疲れを癒やす極上の湯浴み。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 地元厳選食材をふんだんに使用した旬の会席料理やディナーを堪能。</li>
                <li>・<strong className="text-stone-800">21:00〜</strong> 星空を仰ぐ夜の露天風呂やラウンジで贅沢な大人の時間を。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝風呂〜朝食・お土産選びと帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の清々しい空気の中で目覚めの朝風呂・サウナ。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 炊きたて地元産ごはんと郷土の味覚が並ぶこだわりの朝食。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の道の駅や特産品店でお土産選び。</li>
                <li>・<strong className="text-stone-800">12:00〜</strong> 地元で愛される名物ランチを堪能して、大満足の帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と旅のノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 予約に最適な時期やタイミングはいつ頃ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 露天風呂付き客室や特選料理プランは数ヶ月前から予約が埋まりやすいため、旅行日程が決まり次第2〜3ヶ月前の早期予約が最も確実です。楽天トラベルの限定クーポンや早期割引プランを活用するとお得に宿泊できます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 車でのアクセスと公共交通機関のどちらが便利ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの主要旅館・リゾートホテルは最寄り駅から無料送迎バスを運行しています。周辺の観光名所や景勝地を巡る場合は、最寄り駅前でレンタカーを借りると移動がスムーズでおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 食事のアレルギー対応や部屋食の指定は可能ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの宿泊施設で事前連絡によりアレルギー対応が可能です。部屋食や個室食事処プランはプラン予約時に指定するか、予約時の備考欄で宿へ相談することをおすすめします。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 一人旅や子連れファミリーでの宿泊にも向いていますか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。一人旅歓迎プランや、家族向けの広い和洋室・貸切風呂完備の宿を厳選しています。プラン詳細の受入条件をご確認の上、安心してお申し込みください。
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
            <Link
              href="/furusato-tax-secret-hotspring-lamp-retreat-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  【秘湯・ランプの宿×ふるさと納税】電波の届かぬ渓谷野天風呂で過ごすデジタルデトックス名湯旅 | クラウドトラベル
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-three-great-ports-waterfront-luxury-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  日本三大美港＆客船クルーズ・ウォーターフロント名門ホテル×ふるさと納税完全ガイド【2026年最新】神戸・横浜・長崎
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-three-great-spring-waters-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  日本三大名水・湧水水源地＆清流酒蔵グルメ・名水露天風呂宿×ふるさと納税完全ガイド【2026年最新】黒部湧水群・白州尾白川・南阿蘇白川水源
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-three-major-forest-therapy-retreat-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  日本三大美林＆巨樹・森林セラピー癒やしの宿×ふるさと納税完全ガイド【2026年最新】屋久島・木曽ヒノキ・青森ヒバの森
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/fukuoka"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                福岡県の宿・温泉
              </Link>
              <Link
                href="/prefectures/aichi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                愛知県の宿・温泉
              </Link>
              <Link
                href="/prefectures/osaka"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                大阪府の宿・温泉
              </Link>
              <Link
                href="/prefectures/okinawa"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                沖縄県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
    </article>
  );
}
