import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【爽快アクティビティ】森と渓谷を空中滑走ジップライン！自然体験＆温泉が楽しめる大自然リゾート宿5選",
  description: "大自然の渓谷や森林の上空を一気に滑走するメガジップライン！爽快なアドベンチャー体験と、疲れた体を癒やす天然温泉・絶景露天風呂を兼ね備えた人気リゾートホテルを厳選紹介。カップルやファミリーにも最適！",
  keywords: "アドベンチャー リゾート ホテル, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/super-panoramic-canyon-zip-line-adventure-stay',
  },
  openGraph: {
    title: "【爽快アクティビティ】森と渓谷を空中滑走ジップライン！自然体験＆温泉が楽しめる大自然リゾート宿5選",
    description: "大自然の渓谷や森林の上空を一気に滑走するメガジップライン！爽快なアドベンチャー体験と、疲れた体を癒やす天然温泉・絶景露天風呂を兼ね備えた人気リゾートホテルを厳選紹介。カップルやファミリーにも最適！",
    url: 'https://croud-travel.com/super-panoramic-canyon-zip-line-adventure-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【爽快アクティビティ】森と渓谷を空中滑走ジップライン！自然体験＆温泉が楽しめる大自然リゾート宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【爽快アクティビティ】森と渓谷を空中滑走ジップライン！自然体験＆温泉が楽しめる大自然リゾート宿5選",
    description: "大自然の渓谷や森林の上空を一気に滑走するメガジップライン！爽快なアドベンチャー体験と、疲れた体を癒やす天然温泉・絶景露天風呂を兼ね備えた人気リゾートホテルを厳選紹介。カップルやファミリーにも最適！",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【爽快アクティビティ】森と渓谷を空中滑走ジップライン！自然体験＆温泉が楽しめる大自然リゾート宿5選",
    "description": "大自然の渓谷や森林の上空を一気に滑走するメガジップライン！爽快なアドベンチャー体験と、疲れた体を癒やす天然温泉・絶景露天風呂を兼ね備えた人気リゾートホテルを厳選紹介。カップルやファミリーにも最適！",
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
      "@id": "https://croud-travel.com/super-panoramic-canyon-zip-line-adventure-stay"
    }
  };

  const hotelList = [
            {
              name: "ロッテアライリゾート＜上越・妙高＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/164639/164639.jpg",
              rating: 4.3,
              reviews: 1594,
              price: "¥5,280〜",
              access: "お車で新井スマートICから１０分、東京駅から上越妙高駅まで北陸新幹線で２時間、予約制無料送迎バスはHPよりご予約ください",
              features: ["遊び・味覚・温泉を春夏秋冬楽しめる施設★非日常をLOTTEアライリゾートで", "妙高市両善寺1966", "楽天アワード受賞歴"]
            },
            {
              name: "シェラトン沖縄サンマリーナリゾート",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13554/13554.jpg",
              rating: 4.4,
              reviews: 797,
              price: "¥18,800〜",
              access: "那覇空港より沖縄自動車道利用で車で約60分",
              features: ["環境省おすみつきのビーチ前に建つ白亜のピラミッド型ホテル。豊富なアクティビティと屋内外の施設が充実！", "国頭郡恩納村冨着66-1", "楽天アワード受賞歴"]
            },
            {
              name: "グランドメルキュール別府湾リゾート＆スパ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8950/8950.jpg",
              rating: 4.2,
              reviews: 3372,
              price: "¥6,200〜",
              access: "東九州自動車道『速見IC』より車で10分 / 大分空港より車で30分 / JR日豊本線別府駅よ���車で約20分",
              features: ["ハーモニーランドオフィシャルホテル。ラウンジ＆ナイトラウンジ滞在中無料", "速見郡日出町平道入江1825", "楽天アワード受賞歴"]
            },
            {
              name: "ホテルラフォーレ修善寺",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67933/67933.jpg",
              rating: 4.0,
              reviews: 841,
              price: "¥5,630〜",
              access: "[車]東名から伊豆縦貫道　[電車]修善寺駅から専用無料シャトルバスでらくらくアクセス",
              features: ["５０万坪の広大な総合リゾートホテル。豊かな自然の中に温泉・ジップラインなど各種アクティビティが充実。", "伊豆市大平1529", "楽天アワード受賞歴"]
            },
            {
              name: "那須温泉　ホテルサンバレー那須",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/20574/20574.jpg",
              rating: 4.2,
              reviews: 8951,
              price: "¥11,000〜",
              access: "那須塩原駅西口よりホテルまで無料バスにて約40分【要予約】、東北自動車道那須ICより「那須街道」を湯本方面へ約20分",
              features: ["那須高原の中腹に9の宿泊施設がある北関東最大級の温泉リゾートホテル♪夏休みは温泉プールも営業！", "那須郡那須町湯本203", "楽天アワード受賞歴"]
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
            <span>空中ジップライン＆温泉</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【爽快アクティビティ】森と渓谷を空中滑走ジップライン！自然体験＆温泉が楽しめる大自然リゾート宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            大自然の渓谷や森林の上空を一気に滑走するメガジップライン！爽快なアドベンチャー体験と、疲れた体を癒やす天然温泉・絶景露天風呂を兼ね備えた人気リゾートホテルを厳選紹介。カップルやファミリーにも最適！
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【爽快アクティビティ】森と渓谷を空中滑走ジップライン！自然体験＆温泉が楽しめる大自然リゾート宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              鳥になったような空中大滑走！スリル満点のアクティビティと絶景温泉で大自然を満喫
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            山々の間を駆け抜ける全長数百メートルのジップラインやツリートレッキング。大自然の絶景をダイナミックに体感した後は、心地よい疲労感を天然温泉の大浴場や渓谷露天風呂でじんわりほぐす——そんな贅沢なアクティブバカンスが今大人気です。森に囲まれた充実の設備と地元食材のバイキング・BBQが楽しめるリゾートホテルをご紹介します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">スリル満点のメガジップライン体験</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">大自然の谷や樹上を滑空する爽快アクティビティ。ガイド付きで初心者や子供も安全・安心。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">運動後の体を癒やす大浴場＆サウナ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">思い切り体を動かした後は、広々とした天然温泉や露天風呂、サウナで極上のリフレッシュ。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">高原の澄んだ空気とごちそうブッフェ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">採れたて高原野菜やお肉のグリル料理など、アクティブ派に嬉しいボリューム満点の美食。</p>
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
