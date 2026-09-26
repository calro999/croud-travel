import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【阿波藍と鳴門鯛】藍染め体験＆鳴門の渦潮オーシャンビュー！徳島・鳴門の絶景温泉リゾート5選",
  description: "世界三大潮流・鳴門の渦潮を間近に望むオーシャンビュー温泉と、引き締まった身が絶品の「鳴門鯛」会席！日本の伝統文化「阿波藍染め」体験や、大塚国際美術館への観光にも便利な人気リゾート宿を厳選。",
  keywords: "鳴門 温泉 鯛 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/traditional-tokushima-awa-odori-indigo-stay',
  },
  openGraph: {
    title: "【阿波藍と鳴門鯛】藍染め体験＆鳴門の渦潮オーシャンビュー！徳島・鳴門の絶景温泉リゾート5選",
    description: "世界三大潮流・鳴門の渦潮を間近に望むオーシャンビュー温泉と、引き締まった身が絶品の「鳴門鯛」会席！日本の伝統文化「阿波藍染め」体験や、大塚国際美術館への観光にも便利な人気リゾート宿を厳選。",
    url: 'https://croud-travel.com/traditional-tokushima-awa-odori-indigo-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【阿波藍と鳴門鯛】藍染め体験＆鳴門の渦潮オーシャンビュー！徳島・鳴門の絶景温泉リゾート5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【阿波藍と鳴門鯛】藍染め体験＆鳴門の渦潮オーシャンビュー！徳島・鳴門の絶景温泉リゾート5選",
    description: "世界三大潮流・鳴門の渦潮を間近に望むオーシャンビュー温泉と、引き締まった身が絶品の「鳴門鯛」会席！日本の伝統文化「阿波藍染め」体験や、大塚国際美術館への観光にも便利な人気リゾート宿を厳選。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【阿波藍と鳴門鯛】藍染め体験＆鳴門の渦潮オーシャンビュー！徳島・鳴門の絶景温泉リゾート5選",
    "description": "世界三大潮流・鳴門の渦潮を間近に望むオーシャンビュー温泉と、引き締まった身が絶品の「鳴門鯛」会席！日本の伝統文化「阿波藍染め」体験や、大塚国際美術館への観光にも便利な人気リゾート宿を厳選。",
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "2026-03-27T00:00:00+09:00",
    "dateModified": "2026-03-27T00:00:00+09:00",
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
      "@id": "https://croud-travel.com/traditional-tokushima-awa-odori-indigo-stay"
    }
  };

  const hotelList = [
            {
              name: "ベイリゾートホテル　鳴門海月",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/17766/17766.jpg",
              rating: 4.5,
              reviews: 3132,
              price: "¥6,000〜",
              access: "高速道路　鳴門北ICより車で６分。高速バス鳴門公園口より徒歩10分。大塚美術館バス停などからシャトルバス送迎有。要予約",
              features: ["部屋食で鳴門の会席を♪鳴門うず潮に一番近い景色に感動の旅館", "鳴門市鳴門町土佐泊浦福池65-7", "楽天アワード受賞歴"]
            },
            {
              name: "南あわじ温泉郷　潮崎の湯　やぶ萬旅館　＜淡路島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8498/8498.jpg",
              rating: 4.5,
              reviews: 593,
              price: "¥11,000〜",
              access: "ＪＲ三宮駅またはＪＲ舞子駅より福良行きバス　終点より徒歩5分",
              features: ["創業160年の老舗料理旅館！当館名物料理「鯛めん」＆美肌の湯【潮崎温泉】を堪能あれ◎", "南あわじ市福良乙4", "楽天アワード受賞歴"]
            },
            {
              name: "南あわじ温泉郷　うずしお温泉　淡路島海上ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/52574/52574.jpg",
              rating: 4.2,
              reviews: 900,
              price: "¥7,700〜",
              access: "明石海峡大橋海峡　垂水ＪＣＴより車で約１時間（６７ｋｍ）",
              features: ["淡路島・福良湾が目の前！全室で夕日と海が見え、旬食材を取り入れた会席料理と温泉と当館専用釣り桟橋！", "南あわじ市福良甲21-1", "楽天アワード受賞歴"]
            },
            {
              name: "日和山温泉　ホテル金波楼",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7020/7020.jpg",
              rating: 4.4,
              reviews: 569,
              price: "¥16,600〜",
              access: "城崎マリンワールド隣接（ホテル宿泊者は入場半額券付）城崎温泉駅車約10分（送迎予約制）（城崎温泉街散策バス運行）",
              features: ["城崎マリンワールド徒歩１分！日本海の迫力ある大パノラマ絶景に露天風呂★城崎温泉車10分（送迎あり）", "豊岡市瀬戸1090", "楽天アワード受賞歴"]
            },
            {
              name: "淡路島うずしお温泉　うめ丸",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8038/8038.jpg",
              rating: 4.5,
              reviews: 1092,
              price: "¥11,880〜",
              access: "電車：ＪＲ三ノ宮駅乗換、福良行高速バス『陸の港西淡（70分）』下車（無料送迎10分※要予約）、車：淡路島南IC（車5分）",
              features: ["高台から見渡す鳴門海峡の大絶景を見ながら、飛び跳ねる程の新鮮な【鯛の活造り料理】が味わえる宿。", "南あわじ市阿那賀1137-9", "楽天アワード受賞歴"]
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
            <span>阿波藍染め＆鳴門鯛美食</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【阿波藍と鳴門鯛】藍染め体験＆鳴門の渦潮オーシャンビュー！徳島・鳴門の絶景温泉リゾート5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            世界三大潮流・鳴門の渦潮を間近に望むオーシャンビュー温泉と、引き締まった身が絶品の「鳴門鯛」会席！日本の伝統文化「阿波藍染め」体験や、大塚国際美術館への観光にも便利な人気リゾート宿を厳選。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【阿波藍と鳴門鯛】藍染め体験＆鳴門の渦潮オーシャンビュー！徳島・鳴門の絶景温泉リゾート5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              激流が育む絶品「鳴門鯛」と藍色の美学。渦潮の海と美肌温泉に癒やされる徳島ステイ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            鳴門海峡のダイナミックな渦潮と、爽快な大鳴門橋のパノラマビュー。潮流にもまれて育ったブランド魚「鳴門鯛」は、歯ごたえ抜群の刺身や鯛めし、宝楽焼きでいただくのが格別です。徳島が世界に誇る伝統文化「阿波藍」の染め体験ができる工房や、館内に藍染アートが配された洗練された空間。展望露天風呂から海を眺め、優雅な瀬戸内リゾートを満喫してください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">引き締まった極上の味覚「鳴門鯛会席」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">お造り、鯛しゃぶ、名物鯛めしまで。脂の乗りとコリコリした食感がたまらない逸品。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">鳴門海峡と大鳴門橋を一望する展望温泉</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">海と空が溶け合うインフィニティ露天風呂。朝日の昇る水平線を眺める贅沢な湯浴み。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">阿波藍染め体験＆大塚国際美術館アクセス</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">自分だけの藍染ハンカチ作りや、世界の名画を陶板で鑑賞するアート旅の拠点に最適。</p>
            </div>
          </div>
        </section>

        {/* Hotel Cards List */}
        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <span className="text-amber-600 font-bold tracking-wider text-xs md:text-sm uppercase">Recommended Accommodations</span>
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

        {/* Feature summary tips */}
        <section className="bg-stone-900 text-stone-100 rounded-2xl p-8 md:p-10 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-7 h-7 text-amber-400" />
            <h2 className="text-xl md:text-2xl font-bold text-white">
              旅をより最高にするためのワンポイントアドバイス
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-300">
            <div className="space-y-2">
              <h3 className="font-bold text-amber-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                ベストシーズンの早期予約が鍵
              </h3>
              <p className="leading-relaxed text-xs md:text-sm">
                特に週末や連休は数ヶ月前から予約が埋まりやすいため、日程が決まり次第早めの確保がおすすめです。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-amber-400 flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                こだわりの食事プランを選択
              </h3>
              <p className="leading-relaxed text-xs md:text-sm">
                夕食の会席コースや特別な部屋食プランなど、宿自慢のグルメプランを事前に指定するとより満足度の高い滞在になります。
              </p>
            </div>
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
      </main>
    </article>
  );
}
