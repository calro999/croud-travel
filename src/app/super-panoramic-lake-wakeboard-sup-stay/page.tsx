import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【湖上アクティビティ】爽快ウェイクボード＆絶景SUPクルーズ！富士五湖・浜名湖のリゾート温泉宿5選",
  description: "富士山を背景に水上を滑走するウェイクボードや、穏やかな湖面を進むSUPクルージング！ウォーターアクティビティを満喫した後は、レイクビュー温泉とサウナで極上のととのいを叶える人気リゾートを厳選。",
  keywords: "湖 SUP リゾート ホテル, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/super-panoramic-lake-wakeboard-sup-stay',
  },
  openGraph: {
    title: "【湖上アクティビティ】爽快ウェイクボード＆絶景SUPクルーズ！富士五湖・浜名湖のリゾート温泉宿5選",
    description: "富士山を背景に水上を滑走するウェイクボードや、穏やかな湖面を進むSUPクルージング！ウォーターアクティビティを満喫した後は、レイクビュー温泉とサウナで極上のととのいを叶える人気リゾートを厳選。",
    url: 'https://croud-travel.com/super-panoramic-lake-wakeboard-sup-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【湖上アクティビティ】爽快ウェイクボード＆絶景SUPクルーズ！富士五湖・浜名湖のリゾート温泉宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【湖上アクティビティ】爽快ウェイクボード＆絶景SUPクルーズ！富士五湖・浜名湖のリゾート温泉宿5選",
    description: "富士山を背景に水上を滑走するウェイクボードや、穏やかな湖面を進むSUPクルージング！ウォーターアクティビティを満喫した後は、レイクビュー温泉とサウナで極上のととのいを叶える人気リゾートを厳選。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【湖上アクティビティ】爽快ウェイクボード＆絶景SUPクルーズ！富士五湖・浜名湖のリゾート温泉宿5選",
    "description": "富士山を背景に水上を滑走するウェイクボードや、穏やかな湖面を進むSUPクルージング！ウォーターアクティビティを満喫した後は、レイクビュー温泉とサウナで極上のととのいを叶える人気リゾートを厳選。",
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
      "@id": "https://croud-travel.com/super-panoramic-lake-wakeboard-sup-stay"
    }
  };

  const hotelList = [
            {
              name: "グランドメルキュール浜名湖リゾート＆スパ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7824/7824.jpg",
              rating: 4.1,
              reviews: 5943,
              price: "¥4,455〜",
              access: "東海道本線　JR舞阪駅よりお車にて約7分。東名高速道路浜松西ＩＣより 13km　所要約20分",
              features: ["絶景と温泉、食を堪能。最上階「エグゼクティブ ラウンジ」満喫", "浜松市中央区雄踏町山崎4396-1", "楽天アワード受賞歴"]
            },
            {
              name: "浜名湖弁天島リゾート　ＴＨＥ　ＯＣＥＡＮ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/134787/134787.jpg",
              rating: 3.9,
              reviews: 2154,
              price: "¥4,700〜",
              access: "JR弁天島駅より徒歩2分！浜松駅→弁天島駅間約12分。豊橋駅→弁天島駅間約20分。東名高速道路浜松西ICより約25分。",
              features: ["浜名湖の旬彩バイキング＆弁天島大鳥居を眺める天然温泉露天風呂を堪能☆JR弁天島駅より徒歩2分♪", "浜松市中央区舞阪町弁天島3285-88", "楽天アワード受賞歴"]
            },
            {
              name: "ホテル　ウェルシーズン浜名湖",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/3112/3112.jpg",
              rating: 4.5,
              reviews: 3550,
              price: "¥11,550〜",
              access: "■東名高速道路『舘山寺スマートIC』より約5分 ■JR浜松駅より路線バスで約45分",
              features: ["【ウェルカムベビーのお宿】お子様大歓迎のホテルです！／華咲の湯＆遊園地入場無料（休業日除く）", "浜松市中央区舘��寺町1891", "楽天アワード受賞歴"]
            },
            {
              name: "三ヶ日温泉　浜名湖レークサイドプラザ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9198/9198.jpg",
              rating: 3.8,
              reviews: 1109,
              price: "¥9,900〜",
              access: "★東名高速『三ヶ日IC』より10分★無料大駐車場完備！／JR東海道線「新所原駅」→天浜線「奥浜名湖駅」徒歩5分",
              features: ["浜名湖の絶景×レイクビュー★露天風呂・サウナ・プール完備で三世代で楽しめる総合リゾート", "浜松市浜名区三ヶ日町下尾奈200", "楽天アワード受賞歴"]
            },
            {
              name: "ホテルハーヴェスト浜名湖",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/70844/70844.jpg",
              rating: 4.3,
              reviews: 463,
              price: "¥13,176〜",
              access: "東名三ヶ日ICより車５分。天竜浜名湖線都筑駅・JR鷲津駅より無料送迎有。事前要予約",
              features: ["2022年7月より温泉へリニューアル！湖畔を一望できるホテル！ご当地メニュー鰻飯や浜松餃子が大好評♪", "浜松市浜名区三ヶ日町大崎372", "楽天アワード受賞歴"]
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
            <span>SUP＆レイクアクティビティ</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【湖上アクティビティ】爽快ウェイクボード＆絶景SUPクルーズ！富士五湖・浜名湖のリゾート温泉宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            富士山を背景に水上を滑走するウェイクボードや、穏やかな湖面を進むSUPクルージング！ウォーターアクティビティを満喫した後は、レイクビュー温泉とサウナで極上のととのいを叶える人気リゾートを厳選。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【湖上アクティビティ】爽快ウェイクボード＆絶景SUPクルーズ！富士五湖・浜名湖のリゾート温泉宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              青空の下、パドルを持って湖へ漕ぎ出す！水上アクティビティと絶景温泉の爽快ステイ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            山中湖・河口湖や浜名湖など、美しい景観を誇る湖畔リゾート。初心者でも楽しめるスタンドアップパドルボード（SUP）やボートに引っ張られて水面を滑走するウェイクボードなど、手ぶらで挑戦できる体験が充実しています。体を思い切り動かした後は、湖と富士山を一望するパノラマ露天風呂やサウナで心身をリセット。アクティブ派に最高の休日を。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">手ぶらで楽しむSUP＆ウェイクボード体験</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">ホテル専用桟橋や提携マリーナから出発。インストラクター付きで初心者も安心。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">富士山や湖を望むパノラマ展望温泉</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">夕日に染まる湖面と雄大な山並みを眺めながら浸かる、開放感抜群の天然温泉。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">開放的な湖畔テラスでのBBQ＆ビュッフェ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">地元食材をグリルで味わう贅沢BBQディナーや、焼きたて料理が並ぶリゾートブッフェ。</p>
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
