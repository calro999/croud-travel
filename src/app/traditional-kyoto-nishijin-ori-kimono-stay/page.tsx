import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: "【西陣織と伝統美】着物レンタル＆町家数寄屋造りの雅な滞在！京都・嵐山の風情溢れる温泉旅館5選",
  description: "京都の伝統工芸「西陣織」の帯や着物を身にまとい、歴史ある数寄屋造りや京町家で過ごす優雅な休日。嵐山温泉や湯の花温泉の名湯と、彩り鮮やかな本格京懐石を心ゆくまで堪能できる名宿を厳選紹介。",
  keywords: "京都 数寄屋造り 旅館, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館",
  alternates: {
    canonical: 'https://croud-travel.com/traditional-kyoto-nishijin-ori-kimono-stay',
  },
  openGraph: {
    title: "【西陣織と伝統美】着物レンタル＆町家数寄屋造りの雅な滞在！京都・嵐山の風情溢れる温泉旅館5選",
    description: "京都の伝統工芸「西陣織」の帯や着物を身にまとい、歴史ある数寄屋造りや京町家で過ごす優雅な休日。嵐山温泉や湯の花温泉の名湯と、彩り鮮やかな本格京懐石を心ゆくまで堪能できる名宿を厳選紹介。",
    url: 'https://croud-travel.com/traditional-kyoto-nishijin-ori-kimono-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【西陣織と伝統美】着物レンタル＆町家数寄屋造りの雅な滞在！京都・嵐山の風情溢れる温泉旅館5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【西陣織と伝統美】着物レンタル＆町家数寄屋造りの雅な滞在！京都・嵐山の風情溢れる温泉旅館5選",
    description: "京都の伝統工芸「西陣織」の帯や着物を身にまとい、歴史ある数寄屋造りや京町家で過ごす優雅な休日。嵐山温泉や湯の花温泉の名湯と、彩り鮮やかな本格京懐石を心ゆくまで堪能できる名宿を厳選紹介。",
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【西陣織と伝統美】着物レンタル＆町家数寄屋造りの雅な滞在！京都・嵐山の風情溢れる温泉旅館5選",
    "description": "京都の伝統工芸「西陣織」の帯や着物を身にまとい、歴史ある数寄屋造りや京町家で過ごす優雅な休日。嵐山温泉や湯の花温泉の名湯と、彩り鮮やかな本格京懐石を心ゆくまで堪能できる名宿を厳選紹介。",
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
      "@id": "https://croud-travel.com/traditional-kyoto-nishijin-ori-kimono-stay"
    }
  };

  const hotelList = [
            {
              name: "京都　嵐山温泉　渡月亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8838/8838.jpg",
              rating: 3.8,
              reviews: 253,
              price: "¥23,400〜",
              access: "京都駅よりＪＲ嵯峨野線嵯峨嵐山駅下車徒歩１５分。阪急京都線桂駅より嵐山線嵐山駅下車徒歩５分。名神京都南ＩＣより約４０分",
              features: ["【料亭旅館】嵐山・嵯峨野散策に最適な京都・嵐山温泉の宿。", "京都市西京区嵐山中尾下町54-4（渡月橋南詰め）", "楽天アワード受賞歴"]
            },
            {
              name: "京都　嵐山温泉　花伝抄（共立リゾート）（２０２６年５月１日リニューアルオープン）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/130702/130702.jpg",
              rating: 4.4,
              reviews: 1970,
              price: "¥16,800〜",
              access: "阪急嵐山線「嵐山駅」より徒歩１分。JR「京都駅」より約30分、阪急「梅田駅」より約50分。",
              features: ["渡月橋まで徒歩約5分！目の前の阪急嵐山駅より京都の中心街まですぐ！天然温泉と5つの貸切風呂が無料！", "京都市西京区嵐山西一川町5-4", "楽天アワード受賞歴"]
            },
            {
              name: "京都嵐山　花のいえ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/18908/18908.jpg",
              rating: 4.5,
              reviews: 111,
              price: "¥12,644〜",
              access: "ＪＲ嵯峨野線（山陰線）「嵯峨嵐山」駅南口より徒歩７分／阪急電車嵐山線「嵐山」駅より徒歩１２分",
              features: ["【渡月橋すぐ】全21室の純和風旅館。歴史情緒に包まれ味わう京会席。京の風情に浸る特別なひとときを。", "京都市右京区嵯峨天龍寺角倉町9", "楽天アワード受賞歴"]
            },
            {
              name: "嵐山温泉彩四季の宿　花筏",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/73923/73923.jpg",
              rating: 4.2,
              reviews: 311,
              price: "¥24,035〜",
              access: "阪急嵐山駅より徒歩５分（渡月橋渡らず）、ＪＲ嵯峨嵐山駅より徒歩約１５分(渡月橋渡る)。JR京都駅３０分、阪急梅田駅５０分",
              features: ["嵐山散策に便利な渡月橋南詰に位置し、嵐山温泉と京懐石が自慢の癒しの宿。", "京都市西京区嵐山中尾下町57", "楽天アワード受賞歴"]
            },
            {
              name: "旅館あづまや　＜京都府＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/151223/151223.jpg",
              rating: 4.2,
              reviews: 410,
              price: "¥1,980〜",
              access: "ＪＲ　京都駅より徒歩にて約12分",
              features: ["西本願寺からすぐ！アクセス抜群の素泊まり旅館です。", "京都市下京区堀川通り七条上ル（西本願寺前）", "楽天アワード受賞歴"]
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
            <span>西陣織＆京町家名湯</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            【西陣織と伝統美】着物レンタル＆町家数寄屋造りの雅な滞在！京都・嵐山の風情溢れる温泉旅館5選
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            京都の伝統工芸「西陣織」の帯や着物を身にまとい、歴史ある数寄屋造りや京町家で過ごす優雅な休日。嵐山温泉や湯の花温泉の名湯と、彩り鮮やかな本格京懐石を心ゆくまで堪能できる名宿を厳選紹介。
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【西陣織と伝統美】着物レンタル＆町家数寄屋造りの雅な滞在！京都・嵐山の風情溢れる温泉旅館5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              艶やかな西陣織の着物に身を包み、古都の風情と京料理、名湯に浸る贅沢な京都時間
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            千年の都・京都が誇る最高峰の織物「西陣織」。館内でプロによる本格着付けや着物レンタルを楽しめるプランや、西陣織の美術品・装飾に彩られた数寄屋造りの宿で、非日常の優雅な時間を過ごしませんか。竹林の小径や渡月橋の散策の後は、肌に優しい天然温泉と、職人が一品一品丁寧に仕上げる季節の京懐石に舌鼓。日本の伝統美に浸る旅へご案内します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">選べる上質着物＆プロ着付けサービス</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">西陣織の帯や正絹の着物を取り揃え。手ぶらで雅な着物姿に変身して古都の街歩きへ。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">歴史息づく数寄屋造りと庭園美</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">名工が手がけた伝統建築と手入れの行き届いた日本庭園が醸し出す静謐で優雅な空間。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">五感で味わう季節の本格京懐石料理</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">京野菜や旬の瀬戸内の海の幸を繊細な出汁で仕立てた、目にも美しい京料理の粋。</p>
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
