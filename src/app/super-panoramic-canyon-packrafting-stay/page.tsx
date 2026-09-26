import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【超軽量パックラフト冒険】清流の静水と急流を漕ぎ抜ける！奥多摩・みなかみ渓谷温泉宿5選",
  description: "折りたたんで持ち運べる超軽量ボート「パックラフト」で楽しむ新感覚リバーアクティビティ！エメラルドグリーンの清流を自分のパドルで下った後は、渓谷美を一望する露天風呂とサウナで極上のととのいを。",
  keywords: "水上温泉 露天風呂 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/super-panoramic-canyon-packrafting-stay',
  },
  openGraph: {
    title: "【超軽量パックラフト冒険】清流の静水と急流を漕ぎ抜ける！奥多摩・みなかみ渓谷温泉宿5選",
    description: "折りたたんで持ち運べる超軽量ボート「パックラフト」で楽しむ新感覚リバーアクティビティ！エメラルドグリーンの清流を自分のパドルで下った後は、渓谷美を一望する露天風呂とサウナで極上のととのいを。",
    url: 'https://croud-travel.com/super-panoramic-canyon-packrafting-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【超軽量パックラフト冒険】清流の静水と急流を漕ぎ抜ける！奥多摩・みなかみ渓谷温泉宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【超軽量パックラフト冒険】清流の静水と急流を漕ぎ抜ける！奥多摩・みなかみ渓谷温泉宿5選",
    description: "折りたたんで持ち運べる超軽量ボート「パックラフト」で楽しむ新感覚リバーアクティビティ！エメラルドグリーンの清流を自分のパドルで下った後は、渓谷美を一望する露天風呂とサウナで極上のととのいを。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【超軽量パックラフト冒険】清流の静水と急流を漕ぎ抜ける！奥多摩・みなかみ渓谷温泉宿5選",
    "description": "折りたたんで持ち運べる超軽量ボート「パックラフト」で楽しむ新感覚リバーアクティビティ！エメラルドグリーンの清流を自分のパドルで下った後は、渓谷美を一望する露天風呂とサウナで極上のととのいを。",
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
      "@id": "https://croud-travel.com/super-panoramic-canyon-packrafting-stay"
    }
  };

  const hotelList = [
            {
              name: "水上温泉郷　谷川温泉　旅館たにがわ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/6999/6999.jpg",
              rating: 4.5,
              reviews: 646,
              price: "¥15,550〜",
              access: "ＪＲ水上駅より車で７分（送迎あり）、関越自動車道水上ＩＣより１５分",
              features: ["太宰治ゆかりの宿【スタッフの笑顔と創作料理・おもてなしの心】・貸切露天風呂・足湯も大好評", "利根郡みなかみ町谷川524-1", "楽天アワード受賞歴"]
            },
            {
              name: "水上温泉郷　湯檜曽温泉　天空の湯　なかや旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2370/2370.jpg",
              rating: 4.7,
              reviews: 528,
              price: "¥7,700〜",
              access: "車：水上ICから約15分　車以外：上越線ゆびそ駅より徒歩5分、又は水上駅よりバス・タクシーで約10分　",
              features: ["4万組以上のママパパに選ばれた赤ちゃんファーストの温泉宿★安心の設備でママもほっと一息できる癒し時間", "利根郡みなかみ町湯桧曽93", "楽天アワード受賞歴"]
            },
            {
              name: "岸権旅館　石段街隣接　希少源泉「黄金の湯」の宿",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/6267/6267.jpg",
              rating: 4.5,
              reviews: 1682,
              price: "¥9,900〜",
              access: "関越自動車道　渋川伊香保ＩＣから車で２０分　上越線渋川駅下車バスで３０分、タクシー１５分",
              features: ["露天・大浴場・貸切など全てが「黄金の湯」地産地消にこだわった創作会席と絶景が自慢の老舗旅館", "渋川市伊香保町伊香保甲48", "楽天アワード受賞歴"]
            },
            {
              name: "水上温泉郷　やすらぎの宿　旅館「みやま」",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40552/40552.jpg",
              rating: 4.5,
              reviews: 5,
              price: "¥18,000〜",
              access: "水上駅から車で５分、徒歩２０分／上毛高原駅から車で２０分",
              features: ["小さな宿で、ゆっくりとした時間をお過ごし下さい！", "利根郡みなかみ町大穴737", "楽天アワード受賞歴"]
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
            <span>パックラフト＆渓流露天風呂</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【超軽量パックラフト冒険】清流の静水と急流を漕ぎ抜ける！奥多摩・みなかみ渓谷温泉宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            折りたたんで持ち運べる超軽量ボート「パックラフト」で楽しむ新感覚リバーアクティビティ！エメラルドグリーンの清流を自分のパドルで下った後は、渓谷美を一望する露天風呂とサウナで極上のととのいを。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【超軽量パックラフト冒険】清流の静水と急流を漕ぎ抜ける！奥多摩・みなかみ渓谷温泉宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              自分の力で清流を漕ぎ進む爽快感！パックラフト冒険と絶景温泉で大自然を遊び尽くす
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            カヤックよりも安定性が高く、初心者でも簡単に操作できる最新アクティビティ「パックラフト」。穏やかな瀞場（とろば）では水鳥の目線でプカプカ浮かび、瀬ではスリル満点の波越えを体感できます。川下りの後は宿の温泉へ直行し、渓流を望むパノラマ露天風呂やサウナで冷えた体をポカポカに。地元のお肉や採れたて野菜を使ったBBQや郷土料理で大満足の休日を。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">初心者向けパックラフト体験ツアー</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">公認ガイド付きで安心・安全。装備レンタル完備で手ぶら参加可能。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">渓谷のマイナスイオンに包まれる露天風呂</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">川のせせらぎを眼下に望む天然温泉。疲れた筋肉を優しくほぐす名湯。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">大自然のウッドデッキ外気浴＆サウナ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">川風を感じながらのインフィニティチェア外気浴。極上のディープリラックス。</p>
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
