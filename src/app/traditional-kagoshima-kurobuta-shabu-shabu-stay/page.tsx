import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【鹿児島黒豚＆黒毛和牛】極上しゃぶしゃぶ会席と指宿砂むし温泉！霧島・指宿の美食名湯宿5選",
  description: "甘みと旨味が凝縮した「かごしま黒豚」の極上出汁しゃぶしゃぶと、とろける鹿児島黒毛和牛！世界唯一の「指宿天然砂むし温泉」や神話息づく霧島温泉で、南九州最高峰の肉美食と名湯に癒やされる旅。",
  keywords: "鹿児島 黒豚 温泉 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/traditional-kagoshima-kurobuta-shabu-shabu-stay',
  },
  openGraph: {
    title: "【鹿児島黒豚＆黒毛和牛】極上しゃぶしゃぶ会席と指宿砂むし温泉！霧島・指宿の美食名湯宿5選",
    description: "甘みと旨味が凝縮した「かごしま黒豚」の極上出汁しゃぶしゃぶと、とろける鹿児島黒毛和牛！世界唯一の「指宿天然砂むし温泉」や神話息づく霧島温泉で、南九州最高峰の肉美食と名湯に癒やされる旅。",
    url: 'https://croud-travel.com/traditional-kagoshima-kurobuta-shabu-shabu-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【鹿児島黒豚＆黒毛和牛】極上しゃぶしゃぶ会席と指宿砂むし温泉！霧島・指宿の美食名湯宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【鹿児島黒豚＆黒毛和牛】極上しゃぶしゃぶ会席と指宿砂むし温泉！霧島・指宿の美食名湯宿5選",
    description: "甘みと旨味が凝縮した「かごしま黒豚」の極上出汁しゃぶしゃぶと、とろける鹿児島黒毛和牛！世界唯一の「指宿天然砂むし温泉」や神話息づく霧島温泉で、南九州最高峰の肉美食と名湯に癒やされる旅。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【鹿児島黒豚＆黒毛和牛】極上しゃぶしゃぶ会席と指宿砂むし温泉！霧島・指宿の美食名湯宿5選",
    "description": "甘みと旨味が凝縮した「かごしま黒豚」の極上出汁しゃぶしゃぶと、とろける鹿児島黒毛和牛！世界唯一の「指宿天然砂むし温泉」や神話息づく霧島温泉で、南九州最高峰の肉美食と名湯に癒やされる旅。",
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
      "@id": "https://croud-travel.com/traditional-kagoshima-kurobuta-shabu-shabu-stay"
    }
  };

  const hotelList = [
            {
              name: "天然温泉かけ流し　絹肌の湯　シルクイン鹿児島",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8940/8940.jpg",
              rating: 4.3,
              reviews: 2248,
              price: "¥6,250〜",
              access: "ＪＲ鹿児島中央駅より徒歩5分/鹿児島空港より空港連絡バスで約50分→鹿児島中央ターミナルビル下車→徒歩1分",
              features: ["平成２３年１１月１８日　リニューアルオープン！2階に掛け流しの天然温泉が自慢の癒しの宿", "鹿児島市上之園町19-30", "楽天アワード受賞歴"]
            },
            {
              name: "天然温泉　霧桜の湯　ドーミーイン鹿児島（ドーミーイン・御宿野乃　ホテルズグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/137044/137044.jpg",
              rating: 4.4,
              reviews: 2825,
              price: "¥5,650〜",
              access: "■鹿児島中央駅より市電乗車約4分⇒3つ目の電停「高見馬場」下車・徒歩約2分■鹿児島空港バス停「天文館」下車・徒歩約3分",
              features: ["温泉大浴場・サウナ完備 黒豚しゃぶしゃぶ等ご当地献立や『味めぐり小鉢横丁』 朝の彩り献立", "鹿児島市西千石町17-30", "楽天アワード受賞歴"]
            },
            {
              name: "シェラトン鹿児島",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/184895/184895.jpg",
              rating: 4.6,
              reviews: 490,
              price: "¥13,915〜",
              access: "市電武之橋駅から徒歩1分　シャトルバス有（鹿児島中央ターミナルビルからホテルまで約10分）※鹿児島空港までのバス直結",
              features: ["2023年5月16日開業！35平米以上の客室と5つのレストラン・バー、源泉かけ流しの天然温泉付き。", "鹿児島市高麗町43-15", "楽天アワード受賞歴"]
            },
            {
              name: "鹿児島サンロイヤルホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13585/13585.jpg",
              rating: 4.3,
              reviews: 2285,
              price: "¥7,800〜",
              access: "空港リムジンバス：JR鹿児島中央駅より車で約10分/無料シャトルバス運行中",
              features: ["最上階天然展望温泉からの桜島の雄大な姿をご堪能ください。　　　　　　　　　　　　　　　　　　　　　", "鹿児島市与次郎1-8-10", "楽天アワード受賞歴"]
            },
            {
              name: "鹿児島ワシントンホテルプラザ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/442/442.jpg",
              rating: 4.1,
              reviews: 1480,
              price: "¥4,000〜",
              access: "ＪＲ鹿児島中央駅より車で５分／空港リムジンバス天文館バス停下車徒歩4分",
              features: ["天文館のすぐそば、ビジネス・観光の拠点として便利", "鹿児島市山之口町12-1", "楽天アワード受賞歴"]
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
            <span>黒豚しゃぶしゃぶ＆指宿名湯</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【鹿児島黒豚＆黒毛和牛】極上しゃぶしゃぶ会席と指宿砂むし温泉！霧島・指宿の美食名湯宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            甘みと旨味が凝縮した「かごしま黒豚」の極上出汁しゃぶしゃぶと、とろける鹿児島黒毛和牛！世界唯一の「指宿天然砂むし温泉」や神話息づく霧島温泉で、南九州最高峰の肉美食と名湯に癒やされる旅。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【鹿児島黒豚＆黒毛和牛】極上しゃぶしゃぶ会席と指宿砂むし温泉！霧島・指宿の美食名湯宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              黄金出汁にくぐらせる極上かごしま黒豚と砂むし温泉。南国鹿児島の至福ステイ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            豊かな自然と火山灰土壌が育んだ「かごしま黒豚」は、きめ細やかな肉質と上品な脂の甘みが最大の魅力。特製の鰹出汁にサッとくぐらせて味わうしゃぶしゃぶや、A5鹿児島黒毛和牛ステーキはまさに絶品です。海岸で体験する名物・指宿の天然砂むし温泉や、湯煙立ち上る霧島の源泉掛け流し露天風呂でデトックス。南九州の温かいおもてなしを堪能してください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">極上「かごしま黒豚」の特製出汁しゃぶ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">枕崎産本枯節の黄金出汁とポン酢で食べ比べ。脂身の甘さと柔らかな肉質が感動的。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">名物「指宿砂むし温泉」＆霧島にごり湯</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">温かい砂の重みと地熱で全身ポカポカの砂むし風呂や、乳白色の硫黄泉露天風呂。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">鹿児島本格芋焼酎と郷土の味覚</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">プレミアム芋焼酎のペアリングや、さつま揚げ・きびなごのお造りなど鹿児島の味覚。</p>
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
