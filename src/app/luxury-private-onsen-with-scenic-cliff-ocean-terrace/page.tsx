import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【断崖絶壁オーシャンテラス】荒波と水平線を一望するプライベート温泉！伊豆・南紀の絶景隠れ宿5選",
  description: "海に突き出た断崖のプライベートウッドテラスに設えられた客室露天風呂！目の前に広がる青い太平洋のパノラマと、夕暮れに茜色に染まる水平線を独占できる、圧倒的絶景を誇る大人のラグジュアリー隠れ宿。",
  keywords: "絶壁 露天風呂 オーシャン 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/luxury-private-onsen-with-scenic-cliff-ocean-terrace',
  },
  openGraph: {
    title: "【断崖絶壁オーシャンテラス】荒波と水平線を一望するプライベート温泉！伊豆・南紀の絶景隠れ宿5選",
    description: "海に突き出た断崖のプライベートウッドテラスに設えられた客室露天風呂！目の前に広がる青い太平洋のパノラマと、夕暮れに茜色に染まる水平線を独占できる、圧倒的絶景を誇る大人のラグジュアリー隠れ宿。",
    url: 'https://croud-travel.com/luxury-private-onsen-with-scenic-cliff-ocean-terrace',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【断崖絶壁オーシャンテラス】荒波と水平線を一望するプライベート温泉！伊豆・南紀の絶景隠れ宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【断崖絶壁オーシャンテラス】荒波と水平線を一望するプライベート温泉！伊豆・南紀の絶景隠れ宿5選",
    description: "海に突き出た断崖のプライベートウッドテラスに設えられた客室露天風呂！目の前に広がる青い太平洋のパノラマと、夕暮れに茜色に染まる水平線を独占できる、圧倒的絶景を誇る大人のラグジュアリー隠れ宿。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【断崖絶壁オーシャンテラス】荒波と水平線を一望するプライベート温泉！伊豆・南紀の絶景隠れ宿5選",
    "description": "海に突き出た断崖のプライベートウッドテラスに設えられた客室露天風呂！目の前に広がる青い太平洋のパノラマと、夕暮れに茜色に染まる水平線を独占できる、圧倒的絶景を誇る大人のラグジュアリー隠れ宿。",
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
      "@id": "https://croud-travel.com/luxury-private-onsen-with-scenic-cliff-ocean-terrace"
    }
  };

  const hotelList = [
            {
              name: "絶景露天風呂と７つの貸切風呂の大人宿　旅館　山翠",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/136008/136008.jpg",
              rating: 4.5,
              reviews: 304,
              price: "¥13,062〜",
              access: "大分道九重ＩＣよりＲ３８７経由、小国方面へ３０分",
              features: ["都会の喧騒を忘れたい 絶景露天・漁師直送海鮮と山の幸を腹イッパイ御堪能。。山翠は大人限定の旅館です。", "阿蘇郡小国町西里はげの湯3044", "楽天アワード受賞歴"]
            },
            {
              name: "絶景掛け流しの宿　熱海月右衛門",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/149439/149439.jpg",
              rating: 4.3,
              reviews: 7948,
              price: "¥17,300〜",
              access: "来宮駅よりタクシーで約5分です。 熱海駅よりタクシーで約10分です",
              features: ["6年獲得！楽天ゴールドアワード＆日本の宿アワードW受賞★新鮮な海の幸懐石！クチコミNo.1！", "熱海市西熱海町1-5-16", "楽天アワード受賞歴"]
            },
            {
              name: "三河湾を一望■天下の絶景　西浦温泉　ホテル東海園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/31209/31209.jpg",
              rating: 3.7,
              reviews: 828,
              price: "¥8,000〜",
              access: "名鉄西浦駅より無料送迎バスで１０分（14：20～16：20）／音羽蒲郡ICより車で３０分／ラグーナまで車で３０分",
              features: ["【日本のホテル100選入選】三河湾を一望★全室オーシャンビューの絶景と季節の料理を楽しめる絶景宿", "蒲郡市西浦町大山17-1", "楽天アワード受賞歴"]
            },
            {
              name: "熱海温泉　古屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16668/16668.jpg",
              rating: 4.9,
              reviews: 571,
              price: "¥38,280〜",
              access: "ＪＲ熱海駅からタクシーで５分。徒歩１３分。熱海サンビーチまでは徒歩３分♪",
              features: ["【創業220周年】安心の全室部屋食！2026年7月新タイプの露天付き客室OPEN！源泉かけ流し温泉", "熱海市東海岸町5-24", "楽天アワード受賞歴"]
            },
            {
              name: "赤穂温泉　料理旅館　呑海楼",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/147688/147688.jpg",
              rating: 4.5,
              reviews: 752,
              price: "¥12,100〜",
              access: "ＪＲ　播州赤穂駅よりお車にて約１０分（無料送迎バス有り）。",
              features: ["美しい瀬戸内海を望む全室オーシャンビュー赤穂温泉の宿。趣向を凝らした料理と絶景露天風呂を是非。", "赤穂市御崎131", "楽天アワード受賞歴"]
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
            <span>断崖テラス＆絶景オーシャン露天</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【断崖絶壁オーシャンテラス】荒波と水平線を一望するプライベート温泉！伊豆・南紀の絶景隠れ宿5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            海に突き出た断崖のプライベートウッドテラスに設えられた客室露天風呂！目の前に広がる青い太平洋のパノラマと、夕暮れに茜色に染まる水平線を独占できる、圧倒的絶景を誇る大人のラグジュアリー隠れ宿。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【断崖絶壁オーシャンテラス】荒波と水平線を一望するプライベート温泉！伊豆・南紀の絶景隠れ宿5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              足元に打ち寄せる波の音と果てしない水平線。崖の上の特等席で過ごすプライベート温泉時間
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            ダイナミックな海岸線の断崖絶壁に建つ隠れ宿。テラスのインフィニティ露天風呂に浸かれば、海の上に浮かんでいるかのような圧倒的な開放感に包まれます。昼はどこまでも続く青い海と空、夕暮れは水平線に沈むドラマチックな夕日、夜は満天の星と漁火の灯り。伊豆や南紀の獲れたて活魚・伊勢海老の海鮮懐石とともに、非日常の絶景ステイをお楽しみください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">断崖テラスに備わるインフィニティ露天風呂</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">視界一面に広がる太平洋のパノラマビュー。誰にも邪魔されない完全プライベート空間。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">夕日百選のサンセット＆夜の満天の星</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">刻一刻と表情を変える海と空のグラデーション。波音だけが響くロマンチックな夜。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">産地直送！活伊勢海老・地魚の舟盛り会席</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">近海で獲れたての新鮮な魚介を贅沢なお造りや炭火焼きで味わう極上ディナー。</p>
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
