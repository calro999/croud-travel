import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: '！丸で過ごす冬の旅（11・12月）！大手町！名宿5選',
  description: '11月中旬から有楽町〜大手町を結ぶ丸の内仲通りが約120万球のシャンパンゴールドに輝く「丸の内イルミネーション」！東京駅の歴史的赤レンガ駅舎や皇居の緑を望むラグジュアリーホテルで過ごす特別なクリスマスステイ。',
  keywords: "東京駅 高級 ホテル, 11月旅行, 12月旅行, 冬休み, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-tokyo-marunouchi-illumination-luxury-stay/",
  },
  openGraph: {
    title: '！丸で過ごす冬の旅（11・12月）！大手町！名宿5選',
    description: '11月中旬から有楽町〜大手町を結ぶ丸の内仲通りが約120万球のシャンパンゴールドに輝く「丸の内イルミネーション」！東京駅の歴史的赤レンガ駅舎や皇居の緑を望むラグジュアリーホテルで過ごす特別なクリスマスステイ。',
    url: 'https://croud-travel.pages.dev/winter-tokyo-marunouchi-illumination-luxury-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月！丸の内シャンパンゴールド夜景】大手町・銀座の煌めきと極上クラブラウンジ宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "！丸の内シャンパンゴールド夜景で過ごす冬の旅（11・12月）！大手町・銀座の煌めきと極上クラブラウンジ宿5選",
    description: "11月中旬から有楽町〜大手町を結ぶ丸の内仲通りが約120万球のシャンパンゴールドに輝く「丸の内イルミネーション」！東京駅の歴史的赤レンガ駅舎や皇居の緑を望むラグジュアリーホテルで過ごす特別なクリスマスステイ。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12月！丸の内シャンパンゴールド夜景】大手町・銀座の煌めきと極上クラブラウンジ宿5選",
    "description": "11月中旬から有楽町〜大手町を結ぶ丸の内仲通りが約120万球のシャンパンゴールドに輝く「丸の内イルミネーション」！東京駅の歴史的赤レンガ駅舎や皇居の緑を望むラグジュアリーホテルで過ごす特別なクリスマスステイ。",
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "T00:00:00+09:00",
    "dateModified": "T00:00:00+09:00",
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
      "@id": "https://croud-travel.pages.dev/winter-tokyo-marunouchi-illumination-luxury-stay"
    }
  };

  const hotelList = [
            {
              name: "鹿島ポートホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/37946/37946.jpg",
              rating: 4.0,
              reviews: 501,
              price: "¥5,400〜",
              access: "■高速バス波崎線『東京駅【八重洲南口】⇔東部コンビナート【当ホテル前】停留所。』下車■電車【JR鹿島神宮・潮来・小見川駅】",
              features: ["■鹿島臨海工業地帯・東部コンビナートに１番近い■大浴場＆朝食バイキング無料■高速Wi-Fi完備", "神栖市知手中央1-9-1", "楽天アワード受賞歴"]
            },
            {
              name: "アパホテル〈茨城古河駅前〉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/172372/172372.jpg",
              rating: 4.3,
              reviews: 789,
              price: "¥4,200〜",
              access: "JR宇都宮線古河駅東口徒歩5分 境町アーバンスポーツパークまで車30分・足利フラワーパーク筑波サーキットまで車50分",
              features: ["Wi-Fi環境抜群！JR宇都宮線「古河駅」東口徒歩5分コンビニ徒歩2分♪50型液晶テレビ全室設置", "古河市東本町1-21-12", "楽天アワード受賞歴"]
            },
            {
              name: "アパホテル〈埼玉谷塚駅前〉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/184625/184625.jpg",
              rating: 3.9,
              reviews: 258,
              price: "¥5,000〜",
              access: "■東武スカイツリーライン「谷塚駅」東口から徒歩2分　■「八潮南I.C」から車で15分 / 「草加I.C」から車で15分",
              features: ["谷塚駅⇔徒歩2分 ■レストラン開業 ■和 or 洋プレートと健康ハーフビュッフェ", "草加市瀬崎1-7-20", "楽天アワード受賞歴"]
            },
            {
              name: "アパホテル〈三田駅前〉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/138037/138037.jpg",
              rating: 4.2,
              reviews: 1051,
              price: "¥6,754〜",
              access: "都営三田線・浅草線「三田駅」徒歩1分、JR山手線・京浜東北線「田町駅」徒歩5分。",
              features: ["都営三田線・浅草線「三田駅」徒歩1分、JR山手線・京浜東北線「田町駅」徒歩5分！", "港区芝4丁目4-8", "楽天アワード受賞歴"]
            },
            {
              name: "アパホテル〈秋田千秋公園〉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/141906/141906.jpg",
              rating: 4.1,
              reviews: 673,
              price: "¥4,275〜",
              access: "ＪＲ「秋田駅」西口から車で約5分（徒歩で約15分）。秋田空港からリムジンバスで「木内」バス停下車後徒歩約3分",
              features: ["秋田でのビジネス・観光の拠点に最適！秋田駅からタクシーで約5分。川反まで徒歩約6分の閑静な立地。", "秋田市千秋矢留町1-1", "楽天アワード受賞歴"]
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
            <span>丸の内シャンパンゴールド＆東京夜景ホテル</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">！丸の内シャンパンゴールド夜景で過ごす冬の旅（11・12月）！大手町・銀座の煌めきと極上クラブラウンジ宿5選</h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            11月中旬から有楽町〜大手町を結ぶ丸の内仲通りが約120万球のシャンパンゴールドに輝く「丸の内イルミネーション」！東京駅の歴史的赤レンガ駅舎や皇居の緑を望むラグジュアリーホテルで過ごす特別なクリスマスステイ。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【11・12月！丸の内シャンパンゴールド夜景】大手町・銀座の煌めきと極上クラブラウンジ宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「鹿島ポートホテル」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「鹿島ポートホテル」へは、■高速バス波崎線『東京駅 八重洲南口 ⇔東部コンビナート 当ホテル前 停留所。』下車■電車 JR鹿島神宮・潮来・小見川駅。最寄りの鹿島神宮駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「鹿島ポートホテル」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「鹿島ポートホテル」は『■鹿島臨海工業地帯・東部コンビナートに１番近い■大浴場＆朝食バイキング無料■高速Wi-Fi。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「鹿島ポートホテル」では季節ごとに異なる宿泊プランや料理プランが用意されています。ご旅行の人数や滞在スタイルに合わせて最適なプランをお選びいただけます。"}}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月！丸】大手町！名宿5選","item":"https://croud-travel.pages.dev/winter-tokyo-marunouchi-illumination-luxury-stay"}]}) }}
      />
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              約1.2kmを彩るシャンパンゴールドの並木道。丸の内イルミネーションと最高峰ラグジュアリーステイ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            日本のビジネスと文化の中心・丸の内が、最も華やかにドレスアップする11月・12月の冬シーズン。街路樹が上品なシャンパンゴールドの光で埋め尽くされ、ブランドショップのクリスマスディスプレイが街を彩ります。皇居や東京駅を一望するラグジュアリーホテルにチェックインし、専用クラブラウンジでのアフタヌーンティーやカクテルタイム、最上階フレンチでのクリスマスディナーで極上のアーバンリゾートを。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">丸の内仲通りの「シャンパンゴールドイルミネーション」散策</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">約120万球のLEDが灯る洗練された大人の並木道。クリスマス限定演出。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">客室高層階から見渡す東京駅赤レンガ駅舎＆皇居パノラマ夜景</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">東京随一のダイナミックな都市夜景。専用クラブラウンジアクセス付き。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">ミシュラン星付きシェフ監修のクリスマスプレミアムディナー</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">キャビア、トリュフ、特選黒毛和牛フィレ肉。最高峰ワインペアリング。</p>
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
                {/* Model Course Section */}
                {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】鹿島ポートホテルを拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 鹿島神宮駅よりアクセス。■高速バス波崎線『東京駅 八重洲南口 ⇔東部コンビナート 当ホテル前 停留所。』下車■電車 JR鹿島神宮・潮来・小見川駅。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「鹿島ポートホテル」にチェックイン。■鹿島臨海工業地帯・東部コンビナートに１番近い■大浴場＆朝食バイキング無料■高速Wi-Fi完備などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「鹿島ポートホテル」の湯処へ。■鹿島臨海工業地帯・東部コンビナートに１番近い■大浴場＆朝食バイキングとともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「鹿島ポートホテル」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「鹿島ポートホテル」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「鹿島ポートホテル」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は茨城県神栖市知手中央1-9-1の観光名所や特産品店へ立ち寄り。旅の思い出を胸に大満足で帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と鹿島ポートホテルの滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「鹿島ポートホテル」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「鹿島ポートホテル」へは、■高速バス波崎線『東京駅 八重洲南口 ⇔東部コンビナート 当ホテル前 停留所。』下車■電車 JR鹿島神宮・潮来・小見川駅。最寄りの鹿島神宮駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「鹿島ポートホテル」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「鹿島ポートホテル」は『■鹿島臨海工業地帯・東部コンビナートに１番近い■大浴場＆朝食バイキング無料■高速Wi-Fi。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「鹿島ポートホテル」では季節ごとに異なる宿泊プランや料理プランが用意されています。ご旅行の人数や滞在スタイルに合わせて最適なプランをお選びいただけます。
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
              href="/prefectures/ishikawa"
              className="text-xs px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
            >
              石川県のおすすめ宿・温泉一覧 →
            </Link>
            <Link
              href="/prefectures/oita"
              className="text-xs px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
            >
              大分県のおすすめ宿・温泉一覧 →
            </Link>
            <Link
              href="/prefectures/kochi"
              className="text-xs px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
            >
              高知県のおすすめ宿・温泉一覧 →
            </Link>
            <Link
              href="/prefectures/shiga"
              className="text-xs px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
            >
              滋賀県のおすすめ宿・温泉一覧 →
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
                {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】鹿島ポートホテルを拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 鹿島神宮駅へ到着。■高速バス波崎線『東京駅【八重洲南口】⇔東部コンビナート【当ホテル前】停留所。』下車■電車【JR鹿島神宮・潮来・小見川駅】でスムーズに移動。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「鹿島ポートホテル」にチェックイン。■鹿島臨海工業地帯・東部コンビナートに１番近い■大浴場＆朝食バイキング無料■高速Wi-Fiを満喫。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 本格サウナと天然温泉のととのい体験で夕暮れの贅沢な湯浴み時間をゆったり過ごす。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 特選ブランド牛と地場産品を味わう夕食。地元の恵みを五感で味わう至福のディナー。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の澄み渡る空気のなか目覚めの朝風呂。清々しい風を感じる至福のひととき。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 宿自慢の朝食でエネルギーチャージ。地元食材の優しい味わいを堪能。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の名所や「アパホテル〈三田駅前〉」周辺の景勝地へ立ち寄り。</li>
                <li>・<strong className="text-stone-800">12:30〜</strong> ご当地グルメのランチとお土産選びを楽しみ、大満足で家路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        

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
              href="/hokkaido-furano-biei-lavender-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  【北海道・富良野＆美瑛】青い池・ファーム富田ラベンダー＆白金温泉・富良野牛宿 完全ガイド ｜ 日本全国・旅宿クラウド
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-waterfall-view-sound-stream-onsen-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  滝の轟きとマイナスイオンに包まれる！名瀑・清流を望む絶景露天風呂旅館×ふるさと納税完全ガイド【2026年最新】伊豆天城・那須板室・熊本黒川
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-ibusuki-onsen-sand-bath-ocean-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  【指宿温泉×ふるさと納税】名物天然砂むし温泉＆錦江湾オーシャンビュー！絶景リゾート宿特集｜白水館・指宿ロイヤル・シーサイドホテル
                </h3>
              </div>
              <span className="text-[11px] text-amber-600 font-semibold mt-3 flex items-center gap-1">
                特集を見る →
              </span>
            </Link>
            <Link
              href="/furusato-tax-gero-gassho-autumn-leaves-stay"
              className="p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200/70 hover:border-amber-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                  厳選おすすめ特集
                </span>
                <h3 className="font-bold text-stone-900 group-hover:text-amber-700 text-xs md:text-sm line-clamp-2 leading-snug">
                  下呂温泉合掌村のもみじライトアップ＆美肌の日本三名泉！飛騨牛づくし宿×ふるさと納税完全ガイド【2026年最新秋旅】岐阜
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
                href="/prefectures/yamaguchi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山口県の宿・温泉
              </Link>
              <Link
                href="/prefectures/oita"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                大分県の宿・温泉
              </Link>
              <Link
                href="/prefectures/okinawa"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                沖縄県の宿・温泉
              </Link>
              <Link
                href="/prefectures/mie"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                三重県の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="winter-tokyo-marunouchi-illumination-luxury-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
