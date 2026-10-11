import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "2026年秋！サンリオピューロランド・ハロウィン：屋内型テーマパークと多摩・立川・府中人気ホテル5選",
  description: "天候を気にせず可愛いキャラクターたちのハロウィンを満喫！ピューロランドへのアクセス良好な京王線・多摩モノレール沿線（府中・立川・八王子）の厳選ホテル5選。",
  keywords: "サンリオピューロランド ハロウィン 2026, ピューロランド ホテル おすすめ, 多摩センター ホテル, 府中 立川 ホテル 子連れ, サンリオ 宿泊",
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-tokyo-tama-sanrio-puroland-halloween-hotels-stay/",
  },
  openGraph: {
    title: "2026年秋！サンリオピューロランド・ハロウィン：屋内型テーマパークと多摩・立川・府中人気ホテル5選",
    description: "天候を気にせず可愛いキャラクターたちのハロウィンを満喫！ピューロランドへのアクセス良好な京王線・多摩モノレール沿線（府中・立川・八王子）の厳選ホテル5選。",
    url: 'https://croud-travel.pages.dev/autumn-tokyo-tama-sanrio-puroland-halloween-hotels-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "サンリオピューロランド ハロウィン",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "2026年秋！サンリオピューロランド・ハロウィン：屋内型テーマパークと多摩・立川・府中人気ホテル5選",
    description: "天候を気にせず可愛いキャラクターたちのハロウィンを満喫！ピューロランドへのアクセス良好な京王線・多摩モノレール沿線（府中・立川・八王子）の厳選ホテル5選。",
  }
};

export default function FeaturePage() {
  const hotelList = [
    {
      name: "ホテル　ケヤキゲート　東京府中",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/182739/182739.jpg",
      hotelNo: 182739,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/182739/182739.html"),
      rating: 4.53,
      reviews: 640,
      price: "¥6,660〜",
      access: "京王線 府中駅北口より屋根付きペデストリアンデッキ直結徒歩1分（多摩センター駅まで電車で約20分）",
      features: [
        "2021年開業の清潔で快適な最新ホテル。雨の日でも濡れずにアクセスできる駅前抜群の利便性",
        "シモンズ製ベッド完備で快適な睡眠をサポート。全室独立洗面台や機能的な客室レイアウト",
        "東京都府中市府中町1-1-1（駅直結の商業施設に隣接し買い物や飲食も極めて便利）"
      ]
    },
    {
      name: "京王プラザホテル八王子",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/1582/1582.jpg",
      hotelNo: 1582,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/1582/1582.html"),
      rating: 4.24,
      reviews: 3200,
      price: "¥10,832〜",
      access: "京王八王子駅・JR八王子駅北口より徒歩2分（京王線で多摩センター駅まで直通アクセス可能）",
      features: [
        "ハローキティやマイメロディ・クロミをテーマにした公式サンリオキャラクタールームが大人気",
        "キャラクターに囲まれて眠る夢のような宿泊体験。ピューロランドファンには外せない憧れのホテル",
        "東京都八王子市旭町14-1（駅前ロータリーに面し空港リムジンバスも発着）"
      ]
    },
    {
      name: "ホテルエミシア東京立川",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/262/262.jpg",
      hotelNo: 262,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/262/262.html"),
      rating: 4.36,
      reviews: 2950,
      price: "¥3,990〜",
      access: "JR立川駅北口より徒歩約2分／多摩都市モノレール 立川北駅より徒歩約3分（多摩センター駅までモノレール直通約23分）",
      features: [
        "多摩モノレール立川北駅から多摩センター駅まで乗り換えなし直通。ピューロランド観光に絶好の拠点",
        "スカイレストランでの和洋中バイキング朝食や、広々とした客室でファミリー・女子旅にも快適",
        "東京都立川市曙町2-14-16（周辺には商業施設や飲食店が充実する多摩エリアの中心都市）"
      ]
    },
    {
      name: "立川リージェントホテル",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/28338/28338.jpg",
      hotelNo: 28338,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/28338/28338.html"),
      rating: 4.18,
      reviews: 1120,
      price: "¥5,500〜",
      access: "JR中央線 立川駅北口より徒歩約3分／多摩都市モノレール 立川北駅より徒歩約2分",
      features: [
        "多摩モノレール駅至近で多摩センターへの移動がスムーズ。清潔感のある客室と親切な接客",
        "無料の軽朝食（焼きたてパン・コーヒー等）付きでリーズナブルに泊まれるコスパ優秀ホテル",
        "東京都立川市曙町2-11-7（ビジネスからテーマパーク旅行まで幅広く支持される駅近宿）"
      ]
    },
    {
      name: "ホテルコンチネンタル府中",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/5428/5428.jpg",
      hotelNo: 5428,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/5428/5428.html"),
      rating: 4.03,
      reviews: 2180,
      price: "¥5,462〜",
      access: "京王線 府中駅北口より徒歩約1分（多摩センター駅まで京王線利用で約20分）",
      features: [
        "京王線府中駅徒歩1分の好アクセス。直営農場「東北牧場」直送の無農薬野菜や卵を使った健康朝食",
        "ファミリー向け和室やコネクティングルームも完備。リーズナブルな宿泊料金が魅力",
        "東京都府中市府中町1-5-1（府中駅から多摩センター方面への移動が非常にスムーズ）"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80" 
            alt="サンリオピューロランド ハロウィン"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-600/90 text-white text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            秋の屋内型テーマパーク・ハロウィン特集
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">「2026年秋！サンリオピューロランド・ハロウィン」<br className="hidden sm:inline" />屋内型テーマパークと多摩・立川・府中人気ホテル5選</h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stone-200 leading-relaxed">
            雨の日でも秋の肌寒い日でも快適！全館屋内型のサンリオピューロランドで楽しむキュートでちょっぴりダークなハロウィンイベント。京王線・多摩モノレール沿線のアクセス抜群なホテルを厳選紹介。
          </p>
        </div>
      </header>

      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-amber-600">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【2026年秋！サンリオピューロランド・ハロウィン】屋内型テーマパークと多摩・立川・府中人気ホテル5選</span>
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
                "name": "サンリオピューロランドのハロウィンイベントの魅力や開催期間は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "例年9月上旬から11月上旬にかけて開催されます。ハローキティやクロミ、シナモロールなど人気キャラクターたちがハロウィン限定コスチュームで登場するパレードやイルミネーションショー、秋限定の可愛い黒＆紫を基調としたフード・スイーツが楽しめます。全館屋内型のため天候に左右されないのが最大のメリットです。"
                }
              },
              {
                "@type": "Question",
                "name": "ピューロランドへ遊びに行く際のおすすめ宿泊エリアはどこですか？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "多摩センター駅へ電車1本でアクセスできる「京王線沿線（府中駅周辺など）」や、「多摩都市モノレール沿線（立川駅周辺）」が非常に便利です。また、京王プラザホテル八王子には公式サンリオキャラクタールーム（ハローキティ・クロミ等）があり、ファンやお子様連れに絶大な人気を誇ります。"
                }
              },
              {
                "@type": "Question",
                "name": "来場前の注意点や入場予約（来場予約）は必要ですか？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "サンリオピューロランドへの入場にはパスポートチケットのほか、公式アプリやWEBでの「来場予約（入場整理券）」が事前に必要となる場合があります。土日祝日やハロウィン時期は予約枠が埋まりやすいため、ホテル予約と合わせてお早めの来場予約が推奨されます。"
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
              { "@type": "ListItem", "position": 3, "name": "【2026年秋！サンリオピューロランド・ハロウィン】屋内型テーマパークと多摩・立川・府中人気ホテル5選", "item": "https://croud-travel.pages.dev/autumn-tokyo-tama-sanrio-puroland-halloween-hotels-stay" }
            ]
          }) }}
        />

        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-pink-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              全館屋内だから雨でも安心！カワイイとダークが融合する秋のハロウィンパーティ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            東京都多摩市に位置する「サンリオピューロランド」は、完全屋内型のため秋の長雨や冷え込みを気にせず1日中快適に過ごせる大人気テーマパークです。ハロウィンシーズンには、パーク内が特別なデコレーションで彩られ、限定コスチュームに身を包んだキャラクターたちのグリーティングやスペシャルパレードが繰り広げられます。多摩モノレールや京王線で直通アクセスできる府中・立川・八王子のホテルを拠点に、思いきりカワイイ秋の休日を楽しみましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-pink-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>ポイント 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">天候・気温の心配ゼロの全天候型</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">空調完備の屋内施設。ハロウィンの仮装コスプレも着崩れや寒さを気にせず快適に楽しめる。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-pink-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>ポイント 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">限定パレード＆キャラクターフード</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">ハロウィン仕様のスイーツやカレー、限定グッズなどSNS映え抜群のメニューが勢揃い。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-pink-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>ポイント 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">京王線・多摩モノレールで直通アクセス</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">府中駅・立川駅・八王子駅から好アクセス。前泊や後泊で東京観光もあわせて満喫可能。</p>
            </div>
          </div>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">多摩・テーマパークガイド：屋内型テーマパーク・サンリオピューロランド</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/2024_Sanrio_Puroland_%281%29.jpg/1280px-2024_Sanrio_Puroland_%281%29.jpg"
                alt="屋内型テーマパーク・サンリオピューロランド"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">屋内型テーマパーク・サンリオピューロランドの歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">サンリオピューロランド（英語: Sanrio Puroland）は、日本の東京都多摩市にあるサンリオキャラクターをモチーフとした屋内型テーマパーク。株式会社サンリオの子会社である株式会社サンリオエンターテイメントが運営している。略称はSPL。</p>
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
              <span className="text-pink-600 font-bold tracking-wider text-xs md:text-sm uppercase">ピューロランド観光に便利な厳選宿</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">厳選おすすめホテル 5選</h2>
            </div>
            <p className="text-xs md:text-sm text-stone-500">※宿泊料金は楽天トラベル記載の目安料金です</p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {hotelList.map((hotel, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200/80 flex flex-col group"
              >
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2/1] overflow-hidden">
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

                <div className="p-6 md:p-8 w-full flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 font-bold text-sm text-stone-900">{hotel.rating}</span>
                      </div>
                      <span className="text-xs text-stone-400">({hotel.reviews}件のクチコミ)</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-pink-600 transition-colors mb-3">
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
                      <span className="text-xl md:text-2xl font-black text-pink-600">{hotel.price}</span>
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
            <div className="w-2.5 h-8 bg-pink-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】サンリオピューロランド・ハロウィン満喫モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-pink-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-pink-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">ホテルチェックイン〜前泊のゆったり準備</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">15:00〜</strong> 府中駅・立川駅・八王子駅のホテルへチェックイン。翌朝の移動ルートを確認。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> お部屋でお気に入りのカチューシャや仮装グッズを準備して記念撮影。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 駅直結のレストラン街でゆっくりディナー。翌日の朝一番入園に向けて早めに就寝。</li>
              </ul>
            </div>
            <div className="border-l-2 border-purple-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-purple-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝からサンリオピューロランド・ハロウィンへ！</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">08:30〜</strong> ホテルを出発し、電車（京王線または多摩モノレール）で多摩センター駅へ。</li>
                <li>・<strong className="text-stone-800">09:30〜</strong> サンリオピューロランドへ入園！ハロウィン装飾のレインボーホールで記念撮影。</li>
                <li>・<strong className="text-stone-800">11:30〜</strong> キャラクターフードコートでハロウィン限定のオムライスやデザートランチ。</li>
                <li>・<strong className="text-stone-800">13:30〜</strong> ハロウィンスペシャルパレードやアトラクションを満喫し、限定グッズを購入して帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-pink-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）とピューロランド旅行のポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. サンリオピューロランドのハロウィンイベントの魅力や開催期間は？</span>
                <span className="text-pink-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 例年9月上旬から11月上旬にかけて開催されます。ハローキティやクロミ、シナモロールなど人気キャラクターたちがハロウィン限定コスチュームで登場するパレードやイルミネーションショー、秋限定の可愛い黒＆紫を基調としたフード・スイーツが楽しめます。全館屋内型のため天候に左右されないのが最大のメリットです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. ピューロランドへ遊びに行く際のおすすめ宿泊エリアはどこですか？</span>
                <span className="text-pink-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多摩センター駅へ電車1本でアクセスできる「京王線沿線（府中駅周辺など）」や、「多摩都市モノレール沿線（立川駅周辺）」が非常に便利です。また、京王プラザホテル八王子には公式サンリオキャラクタールーム（ハローキティ・クロミ等）があり、ファンやお子様連れに絶大な人気を誇ります。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 来場前の注意点や入場予約（来場予約）は必要ですか？</span>
                <span className="text-pink-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. サンリオピューロランドへの入場にはパスポートチケットのほか、公式アプリやWEBでの「来場予約（入場整理券）」が事前に必要となる場合があります。土日祝日やハロウィン時期は予約枠が埋まりやすいため、ホテル予約と合わせてお早めの来場予約が推奨されます。
              </p>
            </details>
          </div>
        </section>

        <HubRelatedPosts currentSlug="" />
      </main>
    </div>
  );
}
