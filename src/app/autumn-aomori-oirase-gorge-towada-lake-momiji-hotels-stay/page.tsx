import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "【10月中旬〜下旬！奥入瀬渓流＆十和田湖紅葉】錦秋の滝巡りと秘湯・リゾート宿5選",
  description: "約14kmにわたる清流と奇岩・名瀑を黄金色のブナ林が包む奥入瀬渓流と十和田湖の秋！足元湧出の自噴秘湯・蔦温泉から、渓流沿い唯一の星野リゾートまで厳選5選。",
  keywords: "奥入瀬渓流 紅葉 10月 見頃, 十和田湖 紅葉 ホテル, 星野リゾート 奥入瀬渓流ホテル, 蔦温泉旅館, 青森 紅葉 温泉",
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-aomori-oirase-gorge-towada-lake-momiji-hotels-stay/",
  },
  openGraph: {
    title: "【10月中旬〜下旬！奥入瀬渓流＆十和田湖紅葉】錦秋の滝巡りと秘湯・リゾート宿5選",
    description: "約14kmにわたる清流と奇岩・名瀑を黄金色のブナ林が包む奥入瀬渓流と十和田湖の秋！足元湧出の自噴秘湯・蔦温泉から、渓流沿い唯一の星野リゾートまで厳選5選。",
    url: 'https://croud-travel.pages.dev/autumn-aomori-oirase-gorge-towada-lake-momiji-hotels-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "奥入瀬渓流 紅葉",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【10月中旬〜下旬！奥入瀬渓流＆十和田湖紅葉】錦秋の滝巡りと秘湯・リゾート宿5選",
    description: "約14kmにわたる清流と奇岩・名瀑を黄金色のブナ林が包む奥入瀬渓流と十和田湖の秋！足元湧出の自噴秘湯・蔦温泉から、渓流沿い唯一の星野リゾートまで厳選5選。",
  }
};

export default function FeaturePage() {
  const hotelList = [
    {
      name: "蔦温泉旅館－足元から源泉湧出の自噴温泉－",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/142919/142919.jpg",
      hotelNo: 142919,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/142919/142919.html"),
      rating: 4.83,
      reviews: 350,
      price: "¥22,400〜",
      access: "東北新幹線 七戸十和田駅より車で約60分／JR青森駅より車で約80分",
      features: [
        "クチコミ4.83点。湯船の底板からぷくぷくと生の源泉が自噴する奇跡の「足元湧出温泉」",
        "蔦沼の朝焼け紅葉スポットに最も近い特等席の宿。大正浪漫香る本館と青森の郷土美食会席",
        "青森県十和田市奥瀬蔦野湯1（手つかずのブナ原生林に抱かれる千年の秘湯旅館）"
      ]
    },
    {
      name: "十和田ホテル",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/73909/73909.jpg",
      hotelNo: 73909,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/73909/73909.html"),
      rating: 4.46,
      reviews: 580,
      price: "¥26,400〜",
      access: "JR十和田湖バス停より無料送迎あり（約15分・予約制）／東北道 小坂ICより車約40分",
      features: [
        "昭和初期に宮大工が腕を競い合った登録有形文化財の木造建築ホテル。十和田湖を一望する高台の立地",
        "天然秋田杉の巨木を用いた壮麗なロビー吹き抜け。前沢牛や十和田湖ヒメマスを味わう極上ディナー",
        "秋田県鹿角郡小坂町十和田湖西湖畔（静謐な湖畔の自然に癒やされる歴史あるクラシックホテル）"
      ]
    },
    {
      name: "奥入瀬　森のホテル",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/135972/135972.jpg",
      hotelNo: 135972,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/135972/135972.html"),
      rating: 4.27,
      reviews: 640,
      price: "¥28,600〜",
      access: "八戸駅より無料シャトル便運行あり（定時・要予約）／奥入瀬渓流入口（焼山）近く",
      features: [
        "奥入瀬の森に佇む静かなオーベルジュ。八甲田山麓の伏流水で仕込むフレンチ会席「奥入瀬キュイジーヌ」",
        "八甲田から引く肌に優しい単純温泉の露天風呂。暖炉のあるラウンジで贅沢な寛ぎの時間",
        "青森県十和田市大字法量字焼山36-20（美食と温泉をプライベートに楽しみたい大人旅に最適）"
      ]
    },
    {
      name: "奥入瀬渓流ホテル　ｂｙ　星野リゾート",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/40434/40434.jpg",
      hotelNo: 40434,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/40434/40434.html"),
      rating: 4.26,
      reviews: 2150,
      price: "¥37,500〜",
      access: "八戸駅・青森駅より無料/有料送迎バス運行あり（要予約）／JRバス「奥入瀬渓流館」下車",
      features: [
        "奥入瀬渓流のほとりに建つ唯一のリゾートホテル。岡本太郎作の巨大暖炉「森の神話」が象徴",
        "渓流を望む絶景露天風呂「渓流露天風呂」や、秋の渓流を巡る無料シャトルバスツアーが充実",
        "青森県十和田市奥瀬栃久保231（渓流散策を五感で楽しむ日本屈指のネイチャーリゾート）"
      ]
    },
    {
      name: "十和田西湖畔温泉　十和田プリンスホテル",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/51757/51757.jpg",
      hotelNo: 51757,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/51757/51757.html"),
      rating: 4.2,
      reviews: 720,
      price: "¥14,482〜",
      access: "東北道 小坂ICより車約40分／八戸駅・休屋バス停から無料送迎あり（要予約）",
      features: [
        "十和田湖畔に直接面したプライベートガーデン。芝生の先には鏡のように静かな湖の絶景",
        "オープンテラスの露天風呂から望む湖面と紅葉のパノラマ。地元食材を活かしたフレンチディナー",
        "秋田県鹿角郡小坂町十和田湖西湖畔（湖の静寂と紅葉を心ゆくまで堪能できる湖畔宿）"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80" 
            alt="奥入瀬渓流 紅葉"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-600/90 text-white text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            10月中旬〜下旬！みちのく錦秋の渓流・湖畔特集
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【10月中旬〜下旬！奥入瀬渓流＆十和田湖紅葉】<br className="hidden sm:inline" />錦秋の滝巡りと秘湯・リゾート宿5選
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stone-200 leading-relaxed">
            千変万化の水の流れと黄金色に輝くブナの森！阿修羅の流れや銚子大滝の水しぶきを彩る紅葉のトンネル。蔦沼の朝焼け絶景と、足元湧出温泉や湖畔クラシックリゾートへ。
          </p>
        </div>
      </header>

      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-amber-600">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【10月中旬〜下旬！奥入瀬渓流＆十和田湖紅葉】錦秋の滝巡りと秘湯・リゾート宿5選</span>
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
                "name": "奥入瀬渓流・十和田湖の紅葉見頃時期はいつ頃ですか？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "例年10月中旬から色づき始め、10月下旬（10月20日前後〜10月末）が見頃のピークとなります。奥入瀬渓流はブナやカツラ、トチノキが多く、渓流全体が黄金色に包まれます。蔦沼の朝焼け紅葉も10月中旬〜下旬の早朝が見頃となります。"
                }
              },
              {
                "@type": "Question",
                "name": "奥入瀬渓流の散策ルートや交通規制（マイカー規制）について",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "紅葉の最盛期には「奥入瀬渓流エコロードフェスタ」等によりマイカー規制が実施される日があります。規制日はシャトルバスが運行されるため、焼山や休屋の駐車場に車を停めてバスやレンタサイクルを利用するのがスムーズです。見どころの多い「石ヶ戸〜銚子大滝」（約7km・徒歩約2時間半）が定番のハイキングコースです。"
                }
              },
              {
                "@type": "Question",
                "name": "10月の奥入瀬・十和田湖の気候と散策時の服装は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "10月の奥入瀬渓流は水辺を歩くため体感温度が低く、日中でも10〜14℃、朝晩は5℃前後まで冷え込みます。歩きやすく濡れても滑りにくいトレッキングシューズ、風や小雨を防ぐレインウェアやマウンテンパーカー、重ね着できるフリースや薄手のダウンジャケットを用意しましょう。"
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
              { "@type": "ListItem", "position": 3, "name": "【10月中旬〜下旬！奥入瀬渓流＆十和田湖紅葉】錦秋の滝巡りと秘湯・リゾート宿5選", "item": "https://croud-travel.pages.dev/autumn-aomori-oirase-gorge-towada-lake-momiji-hotels-stay" }
            ]
          }) }}
        />

        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              苔むす岩と白銀の瀑布を包む黄金の森。日本が誇る名勝・奥入瀬渓流の秋
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            十和田湖の「子ノ口」から「焼山」まで約14kmにわたって続く「奥入瀬渓流」。国の特別名勝・天然記念物に指定されたこの渓谷は、秋を迎えるとブナやトチノキ、モミジが黄金色のトンネルを形成します。激しく水しぶきを上げる「阿修羅の流れ」や、幅20mを誇る名瀑「銚子大滝」など、躍動する水流と鮮烈な黄葉のコントラストは圧巻。散策後は足元から温泉が湧き出す蔦温泉や、湖畔の静寂に抱かれるクラシックホテルで、至福のみちのくステイをお過ごしください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">阿修羅の流れ＆銚子大滝の迫力景観</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">激流と岩肌に張り付く苔、黄金色の落ち葉が織りなす絵画のような清流美。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">蔦沼の鏡面に映る奇跡の「朝焼け紅葉」</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">朝日を浴びて山全体が真っ赤に燃え上がる神秘の光景。蔦温泉宿泊なら早朝アクセス抜群。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">十和田湖ヒメマスと青森の山の幸会席</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">十和田湖名産のヒメマス料理や倉石牛、八戸港直送の海の幸を味わう秋の極上グルメ。</p>
            </div>
          </div>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">北東北・大自然絶景ガイド：特別名勝・奥入瀬渓流と十和田湖の紅葉</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Oirase-keiryu.jpg/1280px-Oirase-keiryu.jpg"
                alt="特別名勝・奥入瀬渓流と十和田湖の紅葉"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">特別名勝・奥入瀬渓流と十和田湖の紅葉の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">奥入瀬渓流（おいらせけいりゅう）は、青森県十和田市の十和田湖東岸の子ノ口（ねのくち）から北東に、焼山（十和田市法量（大字）焼山（字））までの約14 kmにわたる奥入瀬川の渓流。十和田八幡平国立公園に属する。国指定の特別名勝及び天然記念物（天然保護区域）。</p>
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
              <span className="text-amber-700 font-bold tracking-wider text-xs md:text-sm uppercase">奥入瀬・十和田湖散策に便利な厳選宿</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">おすすめ宿泊施設 5選</h2>
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
              【1泊2日】奥入瀬渓流＆十和田湖紅葉満喫モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">青森・八戸出発〜十和田湖遊覧船＆チェックイン</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">12:30〜</strong> 八戸駅または新青森駅を出発し、十和田湖畔・休屋へ。名物十和田バラ焼きランチ。</li>
                <li>・<strong className="text-stone-800">14:00〜</strong> 十和田湖遊覧船に乗船。中山半島や御倉半島の切り立った岩肌と紅葉のパノラマを湖上から鑑賞。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 湖畔のホテルまたは蔦温泉へチェックイン。木々の静寂に包まれる露天風呂で温まる。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 十和田湖ヒメマスの塩焼きや青森短角牛・倉石牛を味わう贅沢なディナー。</li>
              </ul>
            </div>
            <div className="border-l-2 border-emerald-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">早朝の蔦沼〜奥入瀬渓流ハイキングへ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">06:00〜</strong> 早起きして蔦沼へ。朝日に染まる燃えるようなブナ林の水鏡絶景を鑑賞。</li>
                <li>・<strong className="text-stone-800">08:30〜</strong> 宿で朝食後、奥入瀬渓流へ移動。石ヶ戸からスタートし阿修羅の流れ、雲井の滝を巡る。</li>
                <li>・<strong className="text-stone-800">11:30〜</strong> 銚子大滝に到着！豪快な水しぶきと黄金色に輝く森のベストショットを撮影。</li>
                <li>・<strong className="text-stone-800">14:00〜</strong> 奥入瀬渓流館で青森りんごソフトクリームを味わい、送迎バスや新幹線で帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と奥入瀬渓流旅行のポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 奥入瀬渓流・十和田湖の紅葉見頃時期はいつ頃ですか？</span>
                <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 例年10月中旬から色づき始め、10月下旬（10月20日前後〜10月末）が見頃のピークとなります。奥入瀬渓流はブナやカツラ、トチノキが多く、渓流全体が黄金色に包まれます。蔦沼の朝焼け紅葉も10月中旬〜下旬の早朝が見頃となります。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 奥入瀬渓流の散策ルートや交通規制（マイカー規制）について</span>
                <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 紅葉の最盛期には「奥入瀬渓流エコロードフェスタ」等によりマイカー規制が実施される日があります。規制日はシャトルバスが運行されるため、焼山や休屋の駐車場に車を停めてバスやレンタサイクルを利用するのがスムーズです。見どころの多い「石ヶ戸〜銚子大滝」（約7km・徒歩約2時間半）が定番のハイキングコースです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 10月の奥入瀬・十和田湖の気候と散策時の服装は？</span>
                <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 10月の奥入瀬渓流は水辺を歩くため体感温度が低く、日中でも10〜14℃、朝晩は5℃前後まで冷え込みます。歩きやすく濡れても滑りにくいトレッキングシューズ、風や小雨を防ぐレインウェアやマウンテンパーカー、重ね着できるフリースや薄手のダウンジャケットを用意しましょう。
              </p>
            </details>
          </div>
        </section>

        <HubRelatedPosts currentSlug="" />
      </main>
    </div>
  );
}
