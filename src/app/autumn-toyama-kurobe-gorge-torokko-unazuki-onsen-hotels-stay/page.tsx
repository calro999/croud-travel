import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "【10月下旬〜11月！黒部峡谷トロッコ電車紅葉】日本一のV字峡谷と宇奈月温泉おすすめ宿5選",
  description: "窓なしオープン客車で風を切る黒部峡谷トロッコ電車の紅葉パノラマ！黒部川のエメラルドグリーンと紅葉のコントラストを愛で、美肌の湯・宇奈月温泉と富山湾の海の幸を味わう名宿5選。",
  keywords: "黒部峡谷 トロッコ電車 紅葉 見頃 10月 11月, 宇奈月温泉 旅館 おすすめ, やまのは, サン柳亭, ホテル黒部, 富山 紅葉 温泉",
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-toyama-kurobe-gorge-torokko-unazuki-onsen-hotels-stay/",
  },
  openGraph: {
    title: "【10月下旬〜11月！黒部峡谷トロッコ電車紅葉】日本一のV字峡谷と宇奈月温泉おすすめ宿5選",
    description: "窓なしオープン客車で風を切る黒部峡谷トロッコ電車の紅葉パノラマ！黒部川のエメラルドグリーンと紅葉のコントラストを愛で、美肌の湯・宇奈月温泉と富山湾の海の幸を味わう名宿5選。",
    url: 'https://croud-travel.pages.dev/autumn-toyama-kurobe-gorge-torokko-unazuki-onsen-hotels-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "黒部峡谷 トロッコ電車 紅葉",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【10月下旬〜11月！黒部峡谷トロッコ電車紅葉】日本一のV字峡谷と宇奈月温泉おすすめ宿5選",
    description: "窓なしオープン客車で風を切る黒部峡谷トロッコ電車の紅葉パノラマ！黒部川のエメラルドグリーンと紅葉のコントラストを愛で、美肌の湯・宇奈月温泉と富山湾の海の幸を味わう名宿5選。",
  }
};

export default function FeaturePage() {
  const hotelList = [
    {
      name: "人気の露天風呂客室と富山の旬菜美味　宇奈月温泉サン柳亭",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/39383/39383.jpg",
      hotelNo: 39383,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/39383/39383.html"),
      rating: 4.68,
      reviews: 420,
      price: "¥22,300〜",
      access: "富山地方鉄道 宇奈月温泉駅より無料送迎あり（徒歩約5分）／北陸道 黒部ICより車約20分",
      features: [
        "黒部川の清流を望む全室リバービューの風情。人気の客室露天風呂で贅沢なプライベート湯浴み",
        "富山湾の宝石「白えび」や寒ブリ、名水の里で育まれた地場野菜を味わう創作美食会席",
        "富山県黒部市宇奈月温泉1397-2（心温まるおもてなしと静かな渓谷美が魅力の料理宿）"
      ]
    },
    {
      name: "黒部・宇奈月温泉　やまのは（オリックスホテルズ＆リゾーツ）",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/9591/9591.jpg",
      hotelNo: 9591,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/9591/9591.html"),
      rating: 4.32,
      reviews: 2150,
      price: "¥17,450〜",
      access: "富山地方鉄道 宇奈月温泉駅より徒歩約3分／北陸新幹線 黒部宇奈月温泉駅より地鉄乗換約25分",
      features: [
        "黒部峡谷に架かる新山彦橋とトロッコ電車を一望できる展望露天風呂「棚湯」が圧倒的人気",
        "富山湾の新鮮な海の幸や揚げたて天ぷらが並ぶ豪華バイキングレストラン「Seeds」が大好評",
        "富山県黒部市宇奈月温泉352番地7（ファミリーから三世代まで幅広く支持される大型温泉リゾート）"
      ]
    },
    {
      name: "黒部峡谷・宇奈月温泉　ホテル黒部",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/40625/40625.jpg",
      hotelNo: 40625,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/40625/40625.html"),
      rating: 4.37,
      reviews: 860,
      price: "¥8,800〜",
      access: "宇奈月温泉駅より徒歩約10分（無料送迎あり）／黒部ICより車約20分",
      features: [
        "宇奈月温泉で最も上流に位置し、全客室および露天風呂からトロッコ電車が渡る鉄橋を間近に鑑賞",
        "弱アルカリ性単純温泉の無色透明な美肌湯。富山の旬魚や名物氷見うどんなどを味わう和食会席",
        "富山県黒部市宇奈月温泉7番地（鉄道ファンや紅葉のベストビューを求める旅行者に絶大な支持）"
      ]
    },
    {
      name: "宇奈月温泉の老舗旅館　延対寺荘",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/4804/4804.jpg",
      hotelNo: 4804,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/4804/4804.html"),
      rating: 4.3,
      reviews: 1320,
      price: "¥16,500〜",
      access: "富山地方鉄道 宇奈月温泉駅より徒歩約5分／黒部ICより車約20分",
      features: [
        "明治33年創業。与謝野晶子や川端康成など多くの文人墨客が投宿した歴史ある老舗宿",
        "黒部川の断崖にせり出すような露天風呂からの渓谷美。旬のズワイガニや富山湾の鮮魚会席",
        "富山県黒部市宇奈月温泉53（伝統の格式と渓谷の絶景を心ゆくまで味わえる老舗旅館）"
      ]
    },
    {
      name: "大江戸温泉物語　宇奈月グランドホテル",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/162778/162778.jpg",
      hotelNo: 162778,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/162778/162778.html"),
      rating: 3.78,
      reviews: 950,
      price: "¥17,500〜",
      access: "宇奈月温泉駅より徒歩約5分／北陸道 黒部ICより車約20分",
      features: [
        "キッズパークやマンガコーナーなど館内アミューズメントが充実。子連れ旅行にも大人気",
        "季節の創作バイキングと広々とした大浴場。トロッコ電車の駅にも近くリーズナブルに泊まれる",
        "富山県黒部市宇奈月温泉267（グループ旅行や三世代家族旅行に最適な温泉ホテル）"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1600&q=80" 
            alt="黒部峡谷 トロッコ電車 紅葉"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            秋の絶景鉄道特集・黒部峡谷トロッコ列車
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【10月下旬〜11月！黒部峡谷トロッコ電車紅葉】<br className="hidden sm:inline" />日本一のV字峡谷と宇奈月温泉おすすめ宿5選
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stone-200 leading-relaxed">
            日本一深いV字峡谷をトロッコ電車で駆け抜ける大迫力の秋アドベンチャー！断崖絶壁を彩る紅葉グラデーションと、黒部川を望む名湯・宇奈月温泉の極上宿を徹底紹介。
          </p>
        </div>
      </header>

      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-amber-600">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【10月下旬〜11月！黒部峡谷トロッコ電車紅葉】日本一のV字峡谷と宇奈月温泉おすすめ宿5選</span>
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
                "name": "黒部峡谷トロッコ電車の紅葉見頃時期と運行期間は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "黒部峡谷の紅葉は例年10月下旬から11月中旬にかけて見頃を迎えます。山頂付近から徐々に峡谷の底へと紅葉が降りてくるため、長期間にわたって鮮やかな色彩が楽しめます。トロッコ電車の秋の運転期間は例年11月30日までとなっており、紅葉シーズンの普通客車（窓なし）は事前予約が推奨されます。"
                }
              },
              {
                "@type": "Question",
                "name": "トロッコ電車の普通客車（窓なし）とリラックス客車（窓付き）の違いは？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "普通客車（オープン型）は窓がなく、渓谷の澄んだ空気や風、迫力ある断崖の紅葉をダイレクトに肌で感じられる一番人気の客車です。一方、10月下旬〜11月は気温が下がるため、寒さが心配な方や小さな子ども連れ、ご年配の方には追加料金（1人600円程度）で利用できる窓付きのリラックス客車がおすすめです。"
                }
              },
              {
                "@type": "Question",
                "name": "宇奈月温泉の泉質や特徴は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "黒部川の上流・黒薙温泉から引湯する無色透明の弱アルカリ性単純温泉です。「日本一の透明度」と称され、肌に優しく刺激が少ないため美肌の湯として古くから親しまれています。湯上がり後も身体がポカポカと温まるのが特徴です。"
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
              { "@type": "ListItem", "position": 3, "name": "【10月下旬〜11月！黒部峡谷トロッコ電車紅葉】日本一のV字峡谷と宇奈月温泉おすすめ宿5選", "item": "https://croud-travel.pages.dev/autumn-toyama-kurobe-gorge-torokko-unazuki-onsen-hotels-stay" }
            ]
          }) }}
        />

        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-red-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              断崖絶壁を駆け抜ける爽快感！エメラルドグリーンの清流と燃える峡谷美
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            富山県黒部市に位置する「黒部峡谷」は、国の特別天然記念物および特別名勝に指定された日本屈指の大峡谷です。宇奈月駅から欅平駅まで全長約20.1kmを片道約1時間20分かけて走るトロッコ電車は、日本有数の絶景鉄道。車窓から見上げる山肌はブナ、カエデ、ナナカマドによって黄色や朱色のグラデーションに染まり、エメラルドグリーンの黒部川と見事なコントラストを描きます。冒険気分を満喫した後は、黒部川沿いの宇奈月温泉で極上の美肌湯と富山湾の海の幸に酔いしれましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">新山彦橋と後曳橋のスリル絶景</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">高さ60mの谷底を見下ろす後曳橋など、スリル満点の鉄橋を渡る瞬間は息をのむ美しさ。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">日本一の透明度を誇る宇奈月温泉</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">肌あたりが優しくすべすべになる弱アルカリ性単純泉。峡谷を望む絶景露天風呂が充実。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-red-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">富山湾の白えび・紅ズワイガニ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">秋に美味しさを増す富山湾のキトキト（新鮮）な海の幸と、名水で醸された富山の銘酒。</p>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <span className="text-red-600 font-bold tracking-wider text-xs md:text-sm uppercase">トロッコ電車散策と黒部川ビューの宿</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">厳選宇奈月温泉宿 5選</h2>
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

                    <h3 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-red-600 transition-colors mb-3">
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
                      <span className="text-xl md:text-2xl font-black text-red-600">{hotel.price}</span>
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
            <div className="w-2.5 h-8 bg-red-600 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】黒部峡谷トロッコ電車＆宇奈月温泉満喫モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-red-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">宇奈月温泉到着〜温泉街散策とチェックイン</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 北陸新幹線「黒部宇奈月温泉駅」から富山地鉄に乗車し宇奈月温泉駅へ。</li>
                <li>・<strong className="text-stone-800">14:30〜</strong> やまびこ遊歩道を歩き、山彦橋からトロッコ電車が渡る赤い新山彦橋の撮影スポットへ。</li>
                <li>・<strong className="text-stone-800">16:00〜</strong> 温泉宿へチェックイン。黒部川のせせらぎを聞きながら展望露天風呂でリフレッシュ。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 富山湾直送の白えびや紅ズワイガニ、寒ブリを味わう豪華な会席ディナーに舌鼓。</li>
              </ul>
            </div>
            <div className="border-l-2 border-amber-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝のトロッコ電車乗車〜鐘釣・欅平の紅葉散策</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">08:30〜</strong> 宇奈月駅よりトロッコ電車に乗車！窓なしオープン客車から紅葉の渓谷美を体感。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> 終点「欅平駅」に到着。猿飛峡や奥鐘橋、人喰岩など圧倒的な自然の造形美を散策。</li>
                <li>・<strong className="text-stone-800">13:30〜</strong> トロッコ電車で宇奈月駅へ戻り、名物の黒部名水ポークランチとお土産を購入して帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-red-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と黒部峡谷旅行のポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 黒部峡谷トロッコ電車の紅葉見頃時期と運行期間は？</span>
                <span className="text-red-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 黒部峡谷の紅葉は例年10月下旬から11月中旬にかけて見頃を迎えます。山頂付近から徐々に峡谷の底へと紅葉が降りてくるため、長期間にわたって鮮やかな色彩が楽しめます。トロッコ電車の秋の運転期間は例年11月30日までとなっており、紅葉シーズンの普通客車（窓なし）は事前予約が推奨されます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. トロッコ電車の普通客車（窓なし）とリラックス客車（窓付き）の違いは？</span>
                <span className="text-red-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 普通客車（オープン型）は窓がなく、渓谷の澄んだ空気や風、迫力ある断崖の紅葉をダイレクトに肌で感じられる一番人気の客車です。一方、10月下旬〜11月は気温が下がるため、寒さが心配な方や小さな子ども連れ、ご年配の方には追加料金（1人600円程度）で利用できる窓付きのリラックス客車がおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 宇奈月温泉の泉質や特徴は？</span>
                <span className="text-red-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 黒部川の上流・黒薙温泉から引湯する無色透明の弱アルカリ性単純温泉です。「日本一の透明度」と称され、肌に優しく刺激が少ないため美肌の湯として古くから親しまれています。湯上がり後も身体がポカポカと温まるのが特徴です。
              </p>
            </details>
          </div>
        </section>

        <HubRelatedPosts currentSlug="" />
      </main>
    </div>
  );
}
