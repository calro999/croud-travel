import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【客室専用お花見露天風呂】舞い散る桜を湯船から独占！春限定の極上プライベート温泉宿5選",
  description: "満開の桜並木や庭園のしだれ桜を客室露天風呂から独り占め！湯面に浮かぶ桜の花びらと心地よい春風に包まれながら、誰にも気兼ねなく花見酒と旬の春会席を楽しめる贅沢な隠れ宿。",
  keywords: "露天風呂 離れ 温泉 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/luxury-private-onsen-with-scenic-cherry-blossom-deck',
  },
  openGraph: {
    title: "【客室専用お花見露天風呂】舞い散る桜を湯船から独占！春限定の極上プライベート温泉宿5選",
    description: "満開の桜並木や庭園のしだれ桜を客室露天風呂から独り占め！湯面に浮かぶ桜の花びらと心地よい春風に包まれながら、誰にも気兼ねなく花見酒と旬の春会席を楽しめる贅沢な隠れ宿。",
    url: 'https://croud-travel.com/luxury-private-onsen-with-scenic-cherry-blossom-deck',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【客室専用お花見露天風呂】舞い散る桜を湯船から独占！春限定の極上プライベート温泉宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【客室専用お花見露天風呂】舞い散る桜を湯船から独占！春限定の極上プライベート温泉宿5選",
    description: "満開の桜並木や庭園のしだれ桜を客室露天風呂から独り占め！湯面に浮かぶ桜の花びらと心地よい春風に包まれながら、誰にも気兼ねなく花見酒と旬の春会席を楽しめる贅沢な隠れ宿。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【客室専用お花見露天風呂】舞い散る桜を湯船から独占！春限定の極上プライベート温泉宿5選",
    "description": "満開の桜並木や庭園のしだれ桜を客室露天風呂から独り占め！湯面に浮かぶ桜の花びらと心地よい春風に包まれながら、誰にも気兼ねなく花見酒と旬の春会席を楽しめる贅沢な隠れ宿。",
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
      "@id": "https://croud-travel.com/luxury-private-onsen-with-scenic-cherry-blossom-deck"
    }
  };

  const hotelList = [
            {
              name: "鳴子温泉郷　極上の貸切露天風呂　旅館大沼",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/106139/106139.jpg",
              rating: 4.6,
              reviews: 614,
              price: "¥13,530〜",
              access: "東北新幹線『古川駅』よりＪＲ陸羽東線に乗り換え、『鳴子御殿湯駅』下車、徒歩５分。鳴子温泉からはタクシーで約5分。",
              features: ["美肌湯が自慢の宮城・東鳴子温泉の秘湯宿。源泉かけ流しの天然温泉を使用した大浴場・家族風呂をご堪能。", "大崎市鳴子温泉赤湯34", "楽天アワード受賞歴"]
            },
            {
              name: "離れのある囲炉裏温泉旅館　早水荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/53420/53420.jpg",
              rating: 4.5,
              reviews: 95,
              price: "¥8,800〜",
              access: "肥薩線　栗野駅より南国交通バスで１２～１３分／鹿児島本線　水俣駅より南国交通バスで１時間",
              features: ["囲炉裏があり、、昔懐かしい雰囲気の静かな温泉宿です。離れはペットも一緒に泊まれます。", "伊佐市菱刈川北2280-14", "楽天アワード受賞歴"]
            },
            {
              name: "全室離れの温泉宿　久邸",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/187482/187482.jpg",
              rating: 3.2,
              reviews: 12,
              price: "¥30,000〜",
              access: "熊本空港よりお車にて約90分",
              features: ["自然豊かな山の隠れ家　全室離れの温泉宿　贅沢な食と自然に癒される至福のひととき「人と時を癒す宿」　", "阿蘇郡南小国町満願寺5853-1", "楽天アワード受賞歴"]
            },
            {
              name: "鷹ノ巣温泉　吊り橋と離れの宿　鷹の巣館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67077/67077.jpg",
              rating: 4.3,
              reviews: 211,
              price: "¥18,150〜",
              access: "JR越後下関駅より車で約7分（送迎有）。日本海東北自動車道・荒川胎内ICより国道113号利用で約30分",
              features: ["天然温泉と“新潟上越の旬”を盛り込んだお料理を。", "岩船郡関川村湯沢1072", "楽天アワード受賞歴"]
            },
            {
              name: "箱根湯本温泉　離れ山家荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/165731/165731.jpg",
              rating: 4.4,
              reviews: 53,
              price: "¥19,950〜",
              access: "箱根湯本駅より徒歩にて約１０分",
              features: ["全室離れお部屋食の宿", "足柄下郡箱根町湯本592", "楽天アワード受賞歴"]
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
            <span>お花見客室露天＆春の懐石</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【客室専用お花見露天風呂】舞い散る桜を湯船から独占！春限定の極上プライベート温泉宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            満開の桜並木や庭園のしだれ桜を客室露天風呂から独り占め！湯面に浮かぶ桜の花びらと心地よい春風に包まれながら、誰にも気兼ねなく花見酒と旬の春会席を楽しめる贅沢な隠れ宿。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【客室専用お花見露天風呂】舞い散る桜を湯船から独占！春限定の極上プライベート温泉宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              湯船に舞い落ちる桜の花びら。客室専用テラスから愛でる春爛漫のプライベート温泉
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            春の訪れとともに美しく咲き誇る桜。客室専用の露天風呂に浸かりながら、手の届きそうな距離に咲く満開の桜を眺める時間は、まさに究極の贅沢です。夜には幻想的にライトアップされた夜桜が湯面に映り込み、ドラマチックな春の夜を演出。桜鯛や筍、山菜など春の息吹を感じる華やかな懐石料理とともに、心華やぐ特別な休日をお過ごしください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">客室露天から望む満開のしだれ桜＆夜桜ライトアップ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">誰にも邪魔されない特等席。桜吹雪の中で楽しむ贅沢な花見風呂。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">春の恵みを味わう「桜鯛と朝掘り筍の会席料理」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">脂がのった桜鯛のお造りや筍の炭火焼き。目にも鮮やかな春の美味。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">肌を優しく潤す弱アルカリ性の美肌温泉</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">春の乾燥しがちな肌を滑らかに包み込む源泉かけ流しの名湯。</p>
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
