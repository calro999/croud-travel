import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【極上のととのい】森の薪サウナ＆天然冷鉱泉水風呂！大自然の中で深呼吸する森のリトリート宿5選",
  description: "パチパチと薪がはぜる音、白樺のアロマロウリュ、そして地下から湧き出るシングル〜15℃の極上天然水風呂！森の外気浴でディープリラックスできる、サウナー絶賛の全国リトリート温泉宿を厳選紹介。",
  keywords: "サウナ 水風呂 温泉, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/organic-forest-sauna-cold-spring-stay',
  },
  openGraph: {
    title: "【極上のととのい】森の薪サウナ＆天然冷鉱泉水風呂！大自然の中で深呼吸する森のリトリート宿5選",
    description: "パチパチと薪がはぜる音、白樺のアロマロウリュ、そして地下から湧き出るシングル〜15℃の極上天然水風呂！森の外気浴でディープリラックスできる、サウナー絶賛の全国リトリート温泉宿を厳選紹介。",
    url: 'https://croud-travel.com/organic-forest-sauna-cold-spring-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【極上のととのい】森の薪サウナ＆天然冷鉱泉水風呂！大自然の中で深呼吸する森のリトリート宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【極上のととのい】森の薪サウナ＆天然冷鉱泉水風呂！大自然の中で深呼吸する森のリトリート宿5選",
    description: "パチパチと薪がはぜる音、白樺のアロマロウリュ、そして地下から湧き出るシングル〜15℃の極上天然水風呂！森の外気浴でディープリラックスできる、サウナー絶賛の全国リトリート温泉宿を厳選紹介。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【極上のととのい】森の薪サウナ＆天然冷鉱泉水風呂！大自然の中で深呼吸する森のリトリート宿5選",
    "description": "パチパチと薪がはぜる音、白樺のアロマロウリュ、そして地下から湧き出るシングル〜15℃の極上天然水風呂！森の外気浴でディープリラックスできる、サウナー絶賛の全国リトリート温泉宿を厳選紹介。",
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
      "@id": "https://croud-travel.com/organic-forest-sauna-cold-spring-stay"
    }
  };

  const hotelList = [
            {
              name: "下田蓮台寺温泉　清流荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12548/12548.jpg",
              rating: 4.8,
              reviews: 307,
              price: "¥11,000〜",
              access: "伊豆急行「蓮台寺駅」より徒歩５分 /新東名高速長泉沼津IC＞伊豆縦貫道経由414号",
              features: ["【宿泊者専用温泉プール無料！】清流と樹林に包まれた名湯、名園100％源泉かけ流しの和風宿", "下田市蓮台寺河内2-2", "楽天アワード受賞歴"]
            },
            {
              name: "蔵王温泉　ＪＵＲＩＮ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14585/14585.jpg",
              rating: 4.3,
              reviews: 814,
              price: "¥12,100〜",
              access: "山形自動車道『山形蔵王IC』で下り、西蔵王高原ライン経由約30分／『山形駅』『上山駅』",
              features: ["～名湯一門　高見屋～「木々と暮らす、薪火リゾート」グリーンシーズンは「小学生半額」「幼児無料」", "山形市蔵王温泉814", "楽天アワード受賞歴"]
            },
            {
              name: "Ｅａｒｔｈｂｏａｔ　Ｎａｓｕ（那須）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/198001/198001.jpg",
              rating: 4.6,
              reviews: 13,
              price: "¥18,710〜",
              access: "東北自動車道 那須ICより車で約20分／那須塩原駅西口より路線バス（約50分）「湯本1丁目」下車、徒歩約10分",
              features: ["ペット同伴可・全室に専用薪サウナ完備の一棟貸しグランピング。硫黄泉の貸切温泉、食材持ち込みBBQ可", "那須郡那須町湯本213-989", "楽天アワード受賞歴"]
            },
            {
              name: "湯あみの宿　ぬまくら",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/179093/179093.jpg",
              rating: 4.5,
              reviews: 28,
              price: "¥20,350〜",
              access: "川渡温泉駅",
              features: ["名湯・鳴子の源泉１００％！にごり湯かけ流しの湯宿。四季の移ろい豊かな自然に包まれ季節の味覚をご堪能！", "大崎市鳴子温泉川渡38-1", "楽天アワード受賞歴"]
            },
            {
              name: "Ｌｕｘｕｒｙ　Ｔｒａｉｌｅｒｓ　離宮伊勢",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/198452/198452.jpg",
              rating: 4.5,
              reviews: 3,
              price: "¥17,765〜",
              access: "近鉄宇治山田駅　専用バス乗り場7番より無料送迎バス　14：30～18：00",
              features: ["愛犬同伴OKの棟もある、露天風呂付きトレーラーハウス型の和風グランピング。伊勢の美食BBQが魅力！", "伊勢市佐八町字池の上1165-1", "楽天アワード受賞歴"]
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
            <span>薪サウナ＆天然冷鉱泉</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【極上のととのい】森の薪サウナ＆天然冷鉱泉水風呂！大自然の中で深呼吸する森のリトリート宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            パチパチと薪がはぜる音、白樺のアロマロウリュ、そして地下から湧き出るシングル〜15℃の極上天然水風呂！森の外気浴でディープリラックスできる、サウナー絶賛の全国リトリート温泉宿を厳選紹介。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【極上のととのい】森の薪サウナ＆天然冷鉱泉水風呂！大自然の中で深呼吸する森のリトリート宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              薪の爆ぜる音と森のフィトンチッド。天然水風呂と外気浴で叶える最高峰のととのい体験
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            サウナ愛好家が最後に辿り着く「本物のサウナ体験」。フィンランド製薪ストーブが生み出す柔らかな熱気とセルフロウリュ、そして飲めるほどピュアな天然湧水や冷鉱泉をそのまま掛け流す極上水風呂。木々のざわめきと鳥のさえずりを聴きながらの外気浴は、まさに極上の瞑想時間です。サウナ飯と温泉も充実したリトリート宿で心身をリセットしてください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">本格フィンランド式薪サウナ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">柔らかな輻射熱と薪の香り。白樺ヴィヒタを使ったセルフロウリュで深い発汗を促進。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">天然湧水・冷鉱泉の贅沢かけ流し水風呂</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">肌あたりの柔らかい天然水が体を優しく包み込み、羽衣を纏うような異次元の爽快感。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">大自然のウッドデッキ外気浴スペース</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">インフィニティチェアで森林浴。森の澄んだ空気を胸いっぱいに吸い込む最高のととのい。</p>
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
