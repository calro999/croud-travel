import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "上旬〜中旬！札幌定山渓＆豊平峡の紅葉で過ごす冬の旅（10月）！渓谷美と名湯に寛ぐおすすめ温泉旅館5選",
  description: "北海道屈指の紅葉名所「定山渓温泉」と「豊平峡ダム」の錦秋絵巻！札幌中心部から約1時間。二見吊橋の渓谷美を愛で、名湯掛け流しと北海道の秋グルメを味わう名宿5選。",
  keywords: "定山渓 紅葉 10月 見頃, 豊平峡ダム 紅葉, 定山渓温泉 旅館 おすすめ, 翠山亭, ゆらく草庵, 札幌 紅葉 温泉",
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-hokkaido-sapporo-jozankei-hoheikyo-momiji-hotels-stay/",
  },
  openGraph: {
    title: "上旬〜中旬！札幌定山渓＆豊平峡の紅葉で過ごす冬の旅（10月）！渓谷美と名湯に寛ぐおすすめ温泉旅館5選",
    description: "北海道屈指の紅葉名所「定山渓温泉」と「豊平峡ダム」の錦秋絵巻！札幌中心部から約1時間。二見吊橋の渓谷美を愛で、名湯掛け流しと北海道の秋グルメを味わう名宿5選。",
    url: 'https://croud-travel.pages.dev/autumn-hokkaido-sapporo-jozankei-hoheikyo-momiji-hotels-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "札幌定山渓温泉の紅葉",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "上旬〜中旬！札幌定山渓＆豊平峡の紅葉で過ごす冬の旅（10月）！渓谷美と名湯に寛ぐおすすめ温泉旅館5選",
    description: "北海道屈指の紅葉名所「定山渓温泉」と「豊平峡ダム」の錦秋絵巻！札幌中心部から約1時間。二見吊橋の渓谷美を愛で、名湯掛け流しと北海道の秋グルメを味わう名宿5選。",
  }
};

export default function FeaturePage() {
  const hotelList = [
    {
      name: "定山渓温泉　定山渓第一寶亭留　翠山亭",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/875/875.jpg",
      hotelNo: 875,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/875/875.html"),
      rating: 4.47,
      reviews: 2150,
      price: "¥16,286〜",
      access: "JR札幌駅より無料送迎バス運行（要予約・約60分）／新千歳空港より車で約2時間",
      features: [
        "自家源泉3本をブレンドした濃厚な名湯。温泉付き展望風呂客室や趣の異なる貸切風呂が充実",
        "板前が腕を振るう季節会席。北海道の秋鮭やブランド牛、旬の野菜をプライベート空間で味わう",
        "北海道札幌市南区定山渓温泉西3-105（定山渓温泉街の高台に位置する老舗名旅館）"
      ]
    },
    {
      name: "定山渓　ゆらく草庵（共立リゾート）",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/184395/184395.jpg",
      hotelNo: 184395,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/184395/184395.html"),
      rating: 4.52,
      reviews: 620,
      price: "¥23,430〜",
      access: "札幌駅より無料送迎バス運行（要事前予約制）／じょうてつバス定山渓行約60〜70分",
      features: [
        "全客室に天然温泉風呂を完備。館内すべて畳敷きで和のぬくもりに寛ぐ共立リゾートの極上宿",
        "渓谷を望む大浴場と4つの無料貸切風呂。名物の夜鳴きそばや贅沢な和食会席ディナーも大好評",
        "北海道札幌市南区定山渓温泉東3丁目228-1（豊平川の清流を望む贅沢なロケーション）"
      ]
    },
    {
      name: "定山渓　花もみじ",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/54584/54584.jpg",
      hotelNo: 54584,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/54584/54584.html"),
      rating: 4.54,
      reviews: 1890,
      price: "¥19,500〜",
      access: "地下鉄南北線 真駒内駅よりじょうてつバス定山渓行「湯の町」下車徒歩1分／札幌駅より無料送迎バスあり",
      features: [
        "日本の伝統と和の情緒を大切にした落ち着きある宿。3つの大浴場と趣豊かな貸切風呂で湯巡り",
        "渓谷の紅葉を望む展望ラウンジではフリードリンクを提供。北海道の山海の幸を味わう和食会席",
        "北海道札幌市南区定山渓温泉西3丁目32番地（紅葉の散策路・二見吊橋へのアクセスも良好）"
      ]
    },
    {
      name: "厨翠山",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/161193/161193.jpg",
      hotelNo: 161193,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/161193/161193.html"),
      rating: 4.44,
      reviews: 180,
      price: "¥18,480〜",
      access: "JR札幌駅より無料送迎バス運行（要予約・約60分）／札幌駅より車で約60分",
      features: [
        "「食」を旅の目的にする大人のための料理宿。カウンター席で料理人が目の前で仕上げる美食の数々",
        "滞在中のドリンクやラウンジスイーツがフリーのオールインクルーシブスタイルで贅沢な休日",
        "北海道札幌市南区定山渓温泉西3-4（定山渓の自然に溶け込む洗練された隠れ家）"
      ]
    },
    {
      name: "定山渓温泉　女性のための宿　翠蝶館",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/44948/44948.jpg",
      hotelNo: 44948,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/44948/44948.html"),
      rating: 4.59,
      reviews: 840,
      price: "¥12,590〜",
      access: "札幌駅より無料送迎バス運行（要予約）／JR札幌駅より車で約60分",
      features: [
        "女性限定の宿（中学生以上の女性のみ）。静寂と美と癒やしを追求したプライベートステイ",
        "薬膳の知恵を取り入れた身体に優しい中国料理会席と、3つの源泉を引く美肌の天然温泉",
        "北海道札幌市南区定山渓温泉西3-57（秋の紅葉を静かに楽しむひとり旅や女子旅に最適）"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1600&q=80" 
            alt="札幌定山渓温泉の紅葉"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-600/90 text-white text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            10月秋の北海道・紅葉温泉特集
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">上旬〜中旬！札幌定山渓＆豊平峡の紅葉で過ごす冬の旅（10月）！<br className="hidden sm:inline" />渓谷美と名湯に寛ぐおすすめ温泉旅館5選</h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stone-200 leading-relaxed">
            札幌の中心部から車で約1時間。豊平川の清流が刻む渓谷が黄金と朱色に輝く定山渓温泉と、迫力の放流と岩肌を彩る豊平峡ダムの紅葉美。歴史ある名湯と北海道の秋の味覚に浸る旅。
          </p>
        </div>
      </header>

      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-amber-600">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【10月上旬〜中旬！札幌定山渓＆豊平峡の紅葉】渓谷美と名湯に寛ぐおすすめ温泉旅館5選</span>
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
                "name": "定山渓温泉・豊平峡ダムの紅葉の見頃時期はいつですか？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "例年10月上旬から色づき始め、10月中旬（10月10日〜20日前後）が見頃のピークとなります。豊平峡ダム周辺は標高が高いため定山渓温泉街よりも数日早く見頃を迎え、10月下旬には晩秋の落ち着いた風情へと移り変わります。"
                }
              },
              {
                "@type": "Question",
                "name": "豊平峡ダムへのアクセスや電気バスの利用方法は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "豊平峡ダムの入口駐車場からダム堤体までは環境保護のため一般車両の進入が禁止されています。駐車場からハイブリッド電気バス（有料・約5分）を利用するか、徒歩（約25分・トンネル経由）でアクセスします。紅葉ピーク時の週末は電気バス待ちの列ができるため、午前早めの到着がおすすめです。"
                }
              },
              {
                "@type": "Question",
                "name": "10月の定山渓の気温と散策に適した服装は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "10月の定山渓は日中の最高気温が12〜16℃、朝晩は5℃前後まで冷え込み、降霜や初雪が観測される年もあります。散策には滑りにくいスニーカー、厚手のニット、風を通さないウィンドブレーカーやダウンコート、首元を温めるストールを用意しましょう。"
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
              { "@type": "ListItem", "position": 3, "name": "【10月上旬〜中旬！札幌定山渓＆豊平峡の紅葉】渓谷美と名湯に寛ぐおすすめ温泉旅館5選", "item": "https://croud-travel.pages.dev/autumn-hokkaido-sapporo-jozankei-hoheikyo-momiji-hotels-stay" }
            ]
          }) }}
        />

        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              札幌の奥座敷を染める錦秋のグラデーション。二見吊橋と豊平峡の壮大な大自然
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            支笏洞爺国立公園に位置する「定山渓温泉」は、慶応2年に美泉定山が拓いた150年以上の歴史を誇る名湯です。秋を迎えると、豊平川の渓谷に架かる真っ赤な「二見吊橋」の周囲をカエデやナナカマドが鮮やかに彩り、水面に映る紅葉の美しさは息をのむほどです。さらに奥へと進んだ「豊平峡ダム」では、切り立った岩壁と放水しぶきを黄金色の木々が包み込む圧倒的なスケールの秋景観に出会えます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">二見吊橋＆二見岩の渓谷遊歩道</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">川のせせらぎを聞きながら巡る約30分の散策路。赤と黄色のコントラストが最も美しい撮影名所。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">豊平峡ダムの迫力ある観光放流と紅葉</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">「水源の森百選」にも選ばれた絶景地。電気バスでトンネルを抜けた先に広がる大パノラマ。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">塩化物泉の温もり＆秋の北海道美食</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">塩分を含み保温効果抜群の名湯。夕食には秋鮭やイクラ、道産和牛を味わう至高の会席料理。</p>
            </div>
          </div>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">北海道・名湯紅葉ガイド：札幌の奥座敷・定山渓温泉と豊平峡ダム紅葉</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/TsukimiBashi2004-12.jpg/1280px-TsukimiBashi2004-12.jpg"
                alt="札幌の奥座敷・定山渓温泉と豊平峡ダム紅葉"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">札幌の奥座敷・定山渓温泉と豊平峡ダム紅葉の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">定山渓温泉（じょうざんけい おんせん）は、北海道札幌市南区にある温泉地。</p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-teal-700 font-semibold">現地観光・散策推奨スポット</span>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <span className="text-amber-700 font-bold tracking-wider text-xs md:text-sm uppercase">定山渓・豊平峡の紅葉鑑賞に便利な厳選宿</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">おすすめ温泉宿 5選</h2>
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
              【1泊2日】定山渓・豊平峡の紅葉と名湯満喫モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">札幌出発〜豊平峡ダム観光とチェックイン</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">11:30〜</strong> 札幌駅より送迎バスまたはレンタカーで出発。定山渓を抜けて豊平峡ダム入口へ。</li>
                <li>・<strong className="text-stone-800">13:00〜</strong> 電気バスに乗車して豊平峡ダムへ。千丈岩の岸壁を彩る紅葉と迫力の観光放流を鑑賞。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 定山渓温泉の旅館にチェックイン。ラウンジでウェルカムスイーツを味わいほっと一息。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 渓谷を望む露天風呂へ。夕暮れの紅葉グラデーションを眺めながら芯まで温まる至福の湯浴み。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 北海道産の秋の味覚満載の会席料理を堪能。</li>
              </ul>
            </div>
            <div className="border-l-2 border-stone-700 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-stone-800 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝湯〜二見吊橋散策と札幌へ帰路</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:30〜</strong> 朝の清々しい空気の中で露天風呂を満喫し、朝食ビュッフェで炊きたてご飯と焼き魚に舌鼓。</li>
                <li>・<strong className="text-stone-800">09:30〜</strong> 温泉街の遊歩道を歩き「二見吊橋」へ。朝の光が差し込む渓谷の鮮やかな紅葉を撮影。</li>
                <li>・<strong className="text-stone-800">11:00〜</strong> 定山源泉公園で足湯に浸かり、名物の温泉まんじゅうをお土産に購入。</li>
                <li>・<strong className="text-stone-800">12:30〜</strong> 送迎バスを利用して札幌駅へ戻り、心地よい旅の余韻とともに帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と定山渓温泉旅行のポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 定山渓温泉・豊平峡ダムの紅葉の見頃時期はいつですか？</span>
                <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 例年10月上旬から色づき始め、10月中旬（10月10日〜20日前後）が見頃のピークとなります。豊平峡ダム周辺は標高が高いため定山渓温泉街よりも数日早く見頃を迎え、10月下旬には晩秋の落ち着いた風情へと移り変わります。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 豊平峡ダムへのアクセスや電気バスの利用方法は？</span>
                <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 豊平峡ダムの入口駐車場からダム堤体までは環境保護のため一般車両の進入が禁止されています。駐車場からハイブリッド電気バス（有料・約5分）を利用するか、徒歩（約25分・トンネル経由）でアクセスします。紅葉ピーク時の週末は電気バス待ちの列ができるため、午前早めの到着がおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 10月の定山渓の気温と散策に適した服装は？</span>
                <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 10月の定山渓は日中の最高気温が12〜16℃、朝晩は5℃前後まで冷え込み、降霜や初雪が観測される年もあります。散策には滑りにくいスニーカー、厚手のニット、風を通さないウィンドブレーカーやダウンコート、首元を温めるストールを用意しましょう。
              </p>
            </details>
          </div>
        </section>

        <HubRelatedPosts currentSlug="" />
      </main>
    </div>
  );
}
