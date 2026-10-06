import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "【10月紅葉＆ハロウィン！秋の軽井沢】雲場池もみじと星野・旧軽井沢リゾートホテル5選",
  description: "水鏡に紅葉が映る雲場池や星野エリアの秋！爽やかな高原の紅葉散策とハロウィンの華やぎに包まれる軽井沢。美食フレンチや温泉露天風呂が魅力のリゾート宿5選。",
  keywords: "軽井沢 紅葉 見頃 10月, 軽井沢 ハロウィン, 雲場池 もみじ, ホテルインディゴ軽井沢, 旧軽井沢 ホテル音羽ノ森, 軽井沢 宿泊",
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-nagano-karuizawa-momiji-halloween-resort-hotels-stay/",
  },
  openGraph: {
    title: "【10月紅葉＆ハロウィン！秋の軽井沢】雲場池もみじと星野・旧軽井沢リゾートホテル5選",
    description: "水鏡に紅葉が映る雲場池や星野エリアの秋！爽やかな高原の紅葉散策とハロウィンの華やぎに包まれる軽井沢。美食フレンチや温泉露天風呂が魅力のリゾート宿5選。",
    url: 'https://croud-travel.pages.dev/autumn-nagano-karuizawa-momiji-halloween-resort-hotels-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【10月紅葉＆ハロウィン！秋の軽井沢】雲場池もみじと星野・旧軽井沢リゾートホテル5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【10月紅葉＆ハロウィン！秋の軽井沢】雲場池もみじと星野・旧軽井沢リゾートホテル5選",
    description: "水鏡に紅葉が映る雲場池や星野エリアの秋！爽やかな高原の紅葉散策とハロウィンの華やぎに包まれる軽井沢。美食フレンチや温泉露天風呂が魅力のリゾート宿5選。",
  }
};

export default function FeaturePage() {
  const hotelList = [
    {
      name: "ホテルインディゴ軽井沢　ｂｙ　ＩＨＧ",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/183829/183829.jpg",
      hotelNo: 183829,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/183829/183829.html"),
      rating: 4.45,
      reviews: 352,
      price: "¥18,467〜",
      access: "JR北陸新幹線・しなの鉄道 軽井沢駅南口よりタクシーまたは無料シャトルバスで約5分",
      features: [
        "浅間山麓の自然と別荘文化に着想を得た上質なデザイナーズ空間。炭酸泉露天風呂とサウナ完備",
        "薪火イタリアンレストラン「KAGARIBI」で信州牛や地元野菜を味わう五感で楽しむ秋の美食",
        "長野県北佐久郡軽井沢町大字長倉字屋敷添18-39（静寂の森に佇むラグジュアリー隠れ家）"
      ]
    },
    {
      name: "旧軽井沢　ホテル音羽ノ森",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/50619/50619.jpg",
      hotelNo: 50619,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/50619/50619.html"),
      rating: 4.59,
      reviews: 398,
      price: "¥10,681〜",
      access: "JR軽井沢駅北口よりタクシー約3分（徒歩約12分）／上信越道 碓氷軽井沢ICより車で約20分",
      features: [
        "旧軽井沢銀座や雲場池まで徒歩圏内。クラシックな西洋館の佇まいと静かな木立に包まれる名門宿",
        "伝統のフレンチと心温まるおもてなし。秋の軽井沢散策を贅沢に彩る大人のクラシックリゾート",
        "長野県北佐久郡軽井沢町軽井沢1323-980（旧軽井沢の歴史と気品を今に伝える佇まい）"
      ]
    },
    {
      name: "軽井沢マリオットホテル",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/153419/153419.jpg",
      hotelNo: 153419,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/153419/153419.html"),
      rating: 4.45,
      reviews: 190,
      price: "¥19,142〜",
      access: "JR軽井沢駅よりタクシー約15分／しなの鉄道 中軽井沢駅よりタクシー約5分",
      features: [
        "温泉露天風呂付き客室で名湯・小瀬温泉を独り占め。愛犬と泊まれるドッグコテージも完備",
        "世界基準の洗練されたマリオットのおもてなしと、信州の恵みを味わうグリルダイニング",
        "長野県北佐久郡軽井沢町長倉4339（中軽井沢・星野エリア観光の拠点に最適な閑静な立地）"
      ]
    },
    {
      name: "ルシアン旧軽井沢（共立リゾート）",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/164648/164648.jpg",
      hotelNo: 164648,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/164648/164648.html"),
      rating: 4.68,
      reviews: 810,
      price: "¥19,140〜",
      access: "JR軽井沢駅より徒歩15分／上信越道 碓氷軽井沢ICより車で約20分",
      features: [
        "楽天トラベルクチコミ4.68点。旧軽井沢の閑静な別荘地に佇む南仏フレンチスタイルの上質ホテル",
        "天然温泉大浴場や貸切風呂完備。夜食の「夜鳴きそば」や愛犬とくつろげる設備も充実",
        "長野県北佐久郡軽井沢町軽井沢1323-111（旧軽井沢の紅葉をゆったり愛でる旅に最適）"
      ]
    },
    {
      name: "ホテル　サイプレス軽井沢",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/31166/31166.jpg",
      hotelNo: 31166,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/31166/31166.html"),
      rating: 4.19,
      reviews: 1976,
      price: "¥8,450〜",
      access: "JR北陸新幹線 軽井沢駅より徒歩約12分／上信越道 碓氷軽井沢ICより車で約20分",
      features: [
        "楽天トラベルゴールドアワード受賞歴。全室広々としたスイート仕様で露天風呂付き客室も人気",
        "ラウンジでは毎夜ピアノの生演奏を実施。鉱石らぢうむ温泉の大浴場で秋の冷えを芯から温める",
        "長野県北佐久郡軽井沢町軽井沢東287-1（軽井沢プリンスショッピングプラザも徒歩圏内）"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80" 
            alt="秋の軽井沢雲場池の紅葉"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-600/90 text-white text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            10月高原リゾート・紅葉＆ハロウィン特集
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【10月紅葉＆ハロウィン！秋の軽井沢】<br className="hidden sm:inline" />雲場池もみじと星野・旧軽井沢リゾートホテル5選
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stone-200 leading-relaxed">
            澄んだ空気に赤や黄色のモミジが映える秋の軽井沢。水鏡が息をのむ美しさの「雲場池」や星野エリアの紅葉散策、ハロウィンの華やぎに包まれる高原リゾート宿を厳選してご案内します。
          </p>
        </div>
      </header>

      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-amber-600">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【10月紅葉＆ハロウィン！秋の軽井沢】雲場池もみじと星野・旧軽井沢リゾートホテル5選</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "軽井沢の紅葉の見頃時期とおすすめ紅葉スポットは？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "例年10月中旬から11月上旬が紅葉のピークです。「スワンレイク」の愛称を持つ雲場池（くもばいけ）の水鏡に映るモミジや、星野エリアのハルニレテラス沿いの湯川渓谷、旧三笠ホテル周辺のカラマツ並木が特に人気の名所です。"
                }
              },
              {
                "@type": "Question",
                "name": "10月の軽井沢の気候と適した服装は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "標高約1,000mに位置する軽井沢は、10月に入ると日中でも12〜17℃前後、朝晩は5℃以下まで冷え込む日があります。脱ぎ着しやすいウールコート、ダウンベスト、ストールや手袋など、東京の初冬に相当する防寒着を準備しておくと安心です。"
                }
              },
              {
                "@type": "Question",
                "name": "軽井沢のハロウィンイベントや秋の楽しみ方は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ハルニレテラスや軽井沢プリンスショッピングプラザ、旧軽井沢銀座通りなどでカボチャの装飾や秋の収穫祭・ハロウィンマルシェが開催されます。澄んだ秋空の下でのサイクリングや、カフェテラスでの焼き栗・信州りんごスイーツ巡りもおすすめです。"
                }
              }
            ]
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev/" },
              { "@type": "ListItem", "position": 2, "name": "特集一覧", "item": "https://croud-travel.pages.dev/features" },
              { "@type": "ListItem", "position": 3, "name": "【10月紅葉＆ハロウィン！秋の軽井沢】雲場池もみじと星野・旧軽井沢リゾートホテル5選", "item": "https://croud-travel.pages.dev/autumn-nagano-karuizawa-momiji-halloween-resort-hotels-stay" }
            ]
          }) }}
        />

        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              水面に映る深紅のモミジと高原の静寂。心解き放つ秋の軽井沢プレミアムステイ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            都心から新幹線で約1時間。高原の風が冷涼さを増す10月、軽井沢の森は鮮やかな黄金色と真紅のグラデーションに染まります。「御膳水」を水源とする雲場池の湖畔散策や、ウッドデッキが心地よいハルニレテラス、歴史ある旧軽井沢の洋館群など、秋ならではの風情があふれています。夕暮れには焚き火や薪火料理に癒やされ、温泉露天風呂で冷えた身体をじっくり温める至福のひとときをお過ごしください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">雲場池の水鏡が描く錦秋の美</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">池の周囲を巡る遊歩道は約20分の散策コース。湖面に反転して映る紅葉は息をのむ美しさ。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">星野ハルニレテラス＆ハロウィン</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">100本を超えるハルニレの木立が黄金色に輝き、秋の限定スイーツやハロウィン装飾を満喫。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">信州牛＆薪火料理の極上ディナー</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">香り高い信州産キノコや旬のリンゴ、信州プレミアム牛を薪火や本格フレンチで贅沢に堪能。</p>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <span className="text-amber-700 font-bold tracking-wider text-xs md:text-sm uppercase">秋の軽井沢散策に最適なリゾート宿</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">厳選おすすめ宿 5選</h2>
            </div>
            <p className="text-xs md:text-sm text-stone-500">※宿泊料金は楽天トラベル記載の目安料金です</p>
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

                    <h3 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors mb-3">
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
                      <span className="text-xs text-stone-500 block">参考料金 (1名あたり)</span>
                      <span className="text-xl md:text-2xl font-black text-amber-700">{hotel.price}</span>
                    </div>
                    <a 
                      href={hotel.affiliateUrl || "https://travel.rakuten.co.jp/"} 
                      target="_blank" 
                      rel="noopener noreferrer nofollow" 
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-sm hover:shadow transition-all duration-200"
                    >
                      <span>宿泊プラン・空室を見る</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-600 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】雲場池の紅葉とリゾートステイを満喫するモデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-700 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">旧軽井沢散策＆雲場池の紅葉鑑賞</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">11:30〜</strong> 北陸新幹線で軽井沢駅に到着。旧軽井沢銀座通りで信州そばや老舗ベーカリーのランチ。</li>
                <li>・<strong className="text-stone-800">13:30〜</strong> 「雲場池」へ散策。湖面を鮮やかに染め上げる真っ赤なモミジと水草のコントラストをゆっくり鑑賞。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> ホテルへチェックイン。木立を望む客室やラウンジの暖炉で挽きたてコーヒーを味わう。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 信州プレミアム牛や秋の味覚を取り入れた薪火イタリアンまたは伝統フレンチの優雅なディナー。</li>
              </ul>
            </div>
            <div className="border-l-2 border-stone-700 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-stone-800 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜中軽井沢ハルニレテラスへ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:30〜</strong> 澄んだ空気の露天風呂で朝湯。木々の隙間から差し込む秋の木漏れ日を浴びながらリフレッシュ。</li>
                <li>・<strong className="text-stone-800">08:30〜</strong> 信州野菜や焼きたてガレットを味わう贅沢なブレックファースト。</li>
                <li>・<strong className="text-stone-800">10:30〜</strong> 星野エリア「ハルニレテラス」へ移動。清流沿いのウッドデッキで紅葉を愛でながら限定ジェラートやお土産探し。</li>
                <li>・<strong className="text-stone-800">14:00〜</strong> 軽井沢プリンスショッピングプラザでお買い物を楽しんだ後、新幹線で心地よい余韻とともに帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と軽井沢旅行のポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 軽井沢の紅葉の見頃時期とおすすめ紅葉スポットは？</span>
                <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 例年10月中旬から11月上旬が紅葉のピークです。「スワンレイク」の愛称を持つ雲場池（くもばいけ）の水鏡に映るモミジや、星野エリアのハルニレテラス沿いの湯川渓谷、旧三笠ホテル周辺のカラマツ並木が特に人気の名所です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 10月の軽井沢の気候と適した服装は？</span>
                <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 標高約1,000mに位置する軽井沢は、10月に入ると日中でも12〜17℃前後、朝晩は5℃以下まで冷え込む日があります。脱ぎ着しやすいウールコート、ダウンベスト、ストールや手袋など、東京の初冬に相当する防寒着を準備しておくと安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 軽井沢のハロウィンイベントや秋の楽しみ方は？</span>
                <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. ハルニレテラスや軽井沢プリンスショッピングプラザ、旧軽井沢銀座通りなどでカボチャの装飾や秋の収穫祭・ハロウィンマルシェが開催されます。澄んだ秋空の下でのサイクリングや、カフェテラスでの焼き栗・信州りんごスイーツ巡りもおすすめです。
              </p>
            </details>
          </div>
        </section>

        <HubRelatedPosts currentSlug="" />
      </main>
    </div>
  );
}
