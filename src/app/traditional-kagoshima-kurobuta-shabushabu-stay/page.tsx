import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【極上かごしま黒豚しゃぶしゃぶ＆砂むし温泉】指宿・霧島の美肌湯と鹿児島美食宿5選",
  description: "きめ細やかな肉質と上品な甘みを持つ最高峰「かごしま黒豚」のしゃぶしゃぶ！世界唯一の天然砂むし温泉で知られる指宿や、坂本龍馬ゆかりの霧島温泉郷で、鹿児島の滋味あふれる美味と名湯を満喫する旅。",
  keywords: "指宿 温泉 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/traditional-kagoshima-kurobuta-shabushabu-stay',
  },
  openGraph: {
    title: "【極上かごしま黒豚しゃぶしゃぶ＆砂むし温泉】指宿・霧島の美肌湯と鹿児島美食宿5選",
    description: "きめ細やかな肉質と上品な甘みを持つ最高峰「かごしま黒豚」のしゃぶしゃぶ！世界唯一の天然砂むし温泉で知られる指宿や、坂本龍馬ゆかりの霧島温泉郷で、鹿児島の滋味あふれる美味と名湯を満喫する旅。",
    url: 'https://croud-travel.com/traditional-kagoshima-kurobuta-shabushabu-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【極上かごしま黒豚しゃぶしゃぶ＆砂むし温泉】指宿・霧島の美肌湯と鹿児島美食宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【極上かごしま黒豚しゃぶしゃぶ＆砂むし温泉】指宿・霧島の美肌湯と鹿児島美食宿5選",
    description: "きめ細やかな肉質と上品な甘みを持つ最高峰「かごしま黒豚」のしゃぶしゃぶ！世界唯一の天然砂むし温泉で知られる指宿や、坂本龍馬ゆかりの霧島温泉郷で、鹿児島の滋味あふれる美味と名湯を満喫する旅。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【極上かごしま黒豚しゃぶしゃぶ＆砂むし温泉】指宿・霧島の美肌湯と鹿児島美食宿5選",
    "description": "きめ細やかな肉質と上品な甘みを持つ最高峰「かごしま黒豚」のしゃぶしゃぶ！世界唯一の天然砂むし温泉で知られる指宿や、坂本龍馬ゆかりの霧島温泉郷で、鹿児島の滋味あふれる美味と名湯を満喫する旅。",
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
      "@id": "https://croud-travel.com/traditional-kagoshima-kurobuta-shabushabu-stay"
    }
  };

  const hotelList = [
            {
              name: "指宿温泉　いぶすき秀水園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15962/15962.jpg",
              rating: 4.7,
              reviews: 537,
              price: "¥25,300〜",
              access: "ＪＲ指宿枕崎線指宿駅まで送迎あり／九州自動車道谷山インターより５０分",
              features: ["南薩摩の湯の里指宿にて心尽くしの料理とやすらぎのひとときを…", "指宿市湯の浜5-27-27", "楽天アワード受賞歴"]
            },
            {
              name: "指宿温泉　こらんの湯　錦江楼",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/76346/76346.jpg",
              rating: 4.3,
              reviews: 626,
              price: "¥12,650〜",
              access: "JR指宿枕崎線　宮ヶ浜駅より徒歩9分（宮ケ浜駅からの送迎サービス有※要連絡）九州道終点から国道226号線を走って50分",
              features: ["美肌の湯（美肌成分のメタケイ酸を豊富に含む泉質）と桜島を望める和モダン旅館。", "指宿市西方4507", "楽天アワード受賞歴"]
            },
            {
              name: "中島温泉旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/78120/78120.jpg",
              rating: 4.2,
              reviews: 55,
              price: "¥4,510〜",
              access: "ＪＲ　鹿児島中央駅から鹿児島交通バスで伊作バス停下車後、お車にて５分",
              features: ["西郷隆盛も訪れた名湯、歴史ある老舗純和風旅館。一日三組限定で一組に三部屋使用。天然かけ流しの硫黄泉。", "日置市吹上町湯之浦1106", "楽天アワード受賞歴"]
            },
            {
              name: "吹上温泉　新湯温泉旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/80836/80836.jpg",
              rating: 4.0,
              reviews: 79,
              price: "¥7,700〜",
              access: "ＪＲ　伊集院駅よりお車にて３０分",
              features: ["心温まるおもてなしと笑顔、そして自慢の温泉と手作りお野菜やお米のお料理に癒される宿♪", "日置市吹上町湯之浦1194", "楽天アワード受賞歴"]
            },
            {
              name: "旅館　月見荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/39530/39530.jpg",
              rating: 4.8,
              reviews: 142,
              price: "¥15,400〜",
              access: "ＪＲ　指宿駅より車で３分、徒歩で約２５分",
              features: ["天然砂むし会館「砂楽」の目の前に佇む宿。", "指宿市湯の浜5-24-8", "楽天アワード受賞歴"]
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
            <span>黒豚しゃぶしゃぶ＆砂むし温泉</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【極上かごしま黒豚しゃぶしゃぶ＆砂むし温泉】指宿・霧島の美肌湯と鹿児島美食宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            きめ細やかな肉質と上品な甘みを持つ最高峰「かごしま黒豚」のしゃぶしゃぶ！世界唯一の天然砂むし温泉で知られる指宿や、坂本龍馬ゆかりの霧島温泉郷で、鹿児島の滋味あふれる美味と名湯を満喫する旅。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【極上かごしま黒豚しゃぶしゃぶ＆砂むし温泉】指宿・霧島の美肌湯と鹿児島美食宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              とろける黒豚の甘みと天然砂むしの温もり。薩摩の美食と名湯に癒やされる鹿児島ステイ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            サツマイモを食べて育った「かごしま黒豚」は、脂身のさっぱりとした甘みと柔らかな食感が自慢のブランド肉。宿自慢の特製出汁にくぐらせるしゃぶしゃぶや、とろとろの角煮は一度食べたら忘れられない美味しさです。波打ち際で温かい砂に包まれる指宿の天然砂むし温泉や、湯けむり立ち上る霧島の硫黄泉でデトックス。きびなごや地鶏刺し、本格芋焼酎とともに贅沢な夜をお過ごしください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">極上の旨味と甘み「かごしま黒豚しゃぶしゃぶ」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">特製出汁とポン酢で味わう最高峰の豚肉。脂の甘みと柔らかな肉質が絶品。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">世界屈指のデトックス体験「天然砂むし温泉」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">波の音を聴きながら温砂に包まれる至福。全身の血行を促進し美肌へ。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">霧島連峰と錦江湾を望むパノラマ展望温泉</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">乳白色の硫黄泉や塩化物泉。大自然の絶景を眼下に望む開放的な湯浴み。</p>
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
