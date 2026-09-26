import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【清流せせらぎデッキ】川の音を間近に聴くプライベート露天風呂！癒やしの渓流隠れ宿5選",
  description: "客室の専用ウッドデッキから清流を間近に望み、せせらぎの音と澄んだ空気に包まれるプライベート露天風呂。誰にも邪魔されない離れの客室で、大自然のマイナスイオンに癒やされる贅沢な休日を。",
  keywords: "渓流 露天風呂 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/luxury-private-onsen-with-scenic-creek-deck',
  },
  openGraph: {
    title: "【清流せせらぎデッキ】川の音を間近に聴くプライベート露天風呂！癒やしの渓流隠れ宿5選",
    description: "客室の専用ウッドデッキから清流を間近に望み、せせらぎの音と澄んだ空気に包まれるプライベート露天風呂。誰にも邪魔されない離れの客室で、大自然のマイナスイオンに癒やされる贅沢な休日を。",
    url: 'https://croud-travel.com/luxury-private-onsen-with-scenic-creek-deck',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【清流せせらぎデッキ】川の音を間近に聴くプライベート露天風呂！癒やしの渓流隠れ宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【清流せせらぎデッキ】川の音を間近に聴くプライベート露天風呂！癒やしの渓流隠れ宿5選",
    description: "客室の専用ウッドデッキから清流を間近に望み、せせらぎの音と澄んだ空気に包まれるプライベート露天風呂。誰にも邪魔されない離れの客室で、大自然のマイナスイオンに癒やされる贅沢な休日を。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【清流せせらぎデッキ】川の音を間近に聴くプライベート露天風呂！癒やしの渓流隠れ宿5選",
    "description": "客室の専用ウッドデッキから清流を間近に望み、せせらぎの音と澄んだ空気に包まれるプライベート露天風呂。誰にも邪魔されない離れの客室で、大自然のマイナスイオンに癒やされる贅沢な休日を。",
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
      "@id": "https://croud-travel.com/luxury-private-onsen-with-scenic-creek-deck"
    }
  };

  const hotelList = [
            {
              name: "箱根湯本温泉　離れ山家荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/165731/165731.jpg",
              rating: 4.4,
              reviews: 53,
              price: "¥19,950〜",
              access: "箱根湯本駅より徒歩にて約１０分",
              features: ["全室離れお部屋食の宿", "足柄下郡箱根町湯本592", "楽天アワード受賞歴"]
            },
            {
              name: "十八楼離れ　宿いとう",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/187501/187501.jpg",
              rating: 5.0,
              reviews: 9,
              price: "¥18,700〜",
              access: "JR岐阜駅よりタクシーの場合 約15分、在来線バスの場合 約20分",
              features: ["岐阜の城下町、川原町本通りの裏手に佇む一棟貸しの宿。絶景長良川を望む、完全貸切「宿いとう」。", "岐阜市元浜町35-6", "楽天アワード受賞歴"]
            },
            {
              name: "京ごはんと露天風呂の宿　ゆのはな月や",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/182485/182485.jpg",
              rating: 4.5,
              reviews: 3333,
              price: "¥13,600〜",
              access: "【JR亀岡駅までの無料送迎あり（片道約20分）※事前予約制】お迎え：15時・16時・17時／お送り：9時・10時",
              features: ["【日本の宿アワードTOP47＆ブロンズアワード2024受賞】クチコミ件数No.１！華やかな京料理！", "亀岡市ひえ田野町柿花茶屋6", "楽天アワード受賞歴"]
            },
            {
              name: "１１種類の貸切露天風呂　水上高原／奥利根温泉　ホテルサンバード",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9340/9340.jpg",
              rating: 4.0,
              reviews: 797,
              price: "¥8,800〜",
              access: "車で関越自動車道・水上ＩＣから３０分・ＪＲで上越線　水上駅より　湯ノ小屋行きバスで藤原スキー場入口下車900M",
              features: ["１１種の貸切露天風呂や滝を望む高台の露天風呂など湯めぐりを満喫！高原ＢＢＱプランも大人気！", "利根郡みなかみ町藤原4957-1", "楽天アワード受賞歴"]
            },
            {
              name: "南阿蘇俵山温泉　旅館　みな和",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/73897/73897.jpg",
              rating: 4.7,
              reviews: 510,
              price: "¥26,000〜",
              access: "阿蘇くまもと空港より（俵山トンネルルート）車で約30分・JR立野駅から車で約15分",
              features: ["約3000坪の敷地にわずか10棟。南阿蘇の田園地帯に佇む全室離れ、内湯・露天付の湯宿。お食事は個室で", "阿蘇郡南阿蘇村河陰2510", "楽天アワード受賞歴"]
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
            <span>渓流露天＆せせらぎデッキ</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【清流せせらぎデッキ】川の音を間近に聴くプライベート露天風呂！癒やしの渓流隠れ宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            客室の専用ウッドデッキから清流を間近に望み、せせらぎの音と澄んだ空気に包まれるプライベート露天風呂。誰にも邪魔されない離れの客室で、大自然のマイナスイオンに癒やされる贅沢な休日を。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【清流せせらぎデッキ】川の音を間近に聴くプライベート露天風呂！癒やしの渓流隠れ宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              川のせせらぎと木々のざわめき。プライベートデッキ露天風呂で過ごす極上の隠れ家ステイ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            山あいの清らかな川沿いに佇む隠れ宿。客室専用の広々としたウッドデッキに設えられた露天風呂に身を沈めれば、目の前を流れる清流の音とマイナスイオンが日々の疲れを優しく解き放ってくれます。朝は澄み切った森の空気の中で湯浴みし、夜はライトアップされた渓谷美を鑑賞。旬の川魚や山菜、銘柄牛を味わう会席料理とともに至福の時間をお過ごしください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">客室専用デッキに備わる源泉かけ流し露天</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">清流を真下に望む特等席。好きな時間に何度でも楽しめるプライベート湯浴み。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">せせらぎと鳥のさえずりが奏でる天然BGM</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">デジタルデトックスに最適な静寂空間。自然の音に包まれて深い安らぎを実感。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">清流の恵み「岩魚・山女魚」の炭火塩焼き</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">囲炉裏やオープンキッチンで香ばしく焼き上げる川魚と、季節の京風会席。</p>
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
