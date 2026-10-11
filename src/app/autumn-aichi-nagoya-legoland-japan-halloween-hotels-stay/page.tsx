import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "2026年秋！レゴランド名古屋ハロウィン：モンスター・パーティと子連れ人気ホテル5選",
  description: "秋限定のハロウィン・モンスター・パーティで大熱狂！レゴランド・ジャパン・ホテルをはじめ、あおなみ線沿線や名古屋駅直結のファミリー歓迎人気ホテルを厳選5選。",
  keywords: "レゴランド ハロウィン 2026, レゴランドホテル, 名古屋 子連れ ホテル, 金城ふ頭 あおなみ線 ホテル, レゴランド 名古屋 宿泊",
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-aichi-nagoya-legoland-japan-halloween-hotels-stay/",
  },
  openGraph: {
    title: "2026年秋！レゴランド名古屋ハロウィン：モンスター・パーティと子連れ人気ホテル5選",
    description: "秋限定のハロウィン・モンスター・パーティで大熱狂！レゴランド・ジャパン・ホテルをはじめ、あおなみ線沿線や名古屋駅直結のファミリー歓迎人気ホテルを厳選5選。",
    url: 'https://croud-travel.pages.dev/autumn-aichi-nagoya-legoland-japan-halloween-hotels-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【2026年秋！レゴランド名古屋ハロウィン】モンスター・パーティと子連れ人気ホテル5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "2026年秋！レゴランド名古屋ハロウィン：モンスター・パーティと子連れ人気ホテル5選",
    description: "秋限定のハロウィン・モンスター・パーティで大熱狂！レゴランド・ジャパン・ホテルをはじめ、あおなみ線沿線や名古屋駅直結のファミリー歓迎人気ホテルを厳選5選。",
  }
};

export default function FeaturePage() {
  const hotelList = [
    {
      name: "レゴランド・ジャパン・ホテル",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/167248/167248.jpg",
      hotelNo: 167248,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/167248/167248.html"),
      rating: 4.55,
      reviews: 901,
      price: "¥26,000〜",
      access: "あおなみ線 金城ふ頭駅より徒歩約5分（レゴランド・ジャパン目の前）",
      features: [
        "客室からエレベーターまでレゴブロックの世界。海賊やアドベンチャーなど選べるテーマ客室",
        "客室内に子ども用二段ベッド＆専用トレジャーボックスの謎解きアクティビティ付き",
        "愛知県名古屋市港区金城ふ頭2-7-1（パーク直結でハロウィンナイトも遊び尽くせる）"
      ]
    },
    {
      name: "名古屋プリンスホテル　スカイタワー",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/163007/163007.jpg",
      hotelNo: 163007,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/163007/163007.html"),
      rating: 4.64,
      reviews: 1483,
      price: "¥11,450〜",
      access: "あおなみ線 ささしまライブ駅直結／名古屋駅から1駅3分（金城ふ頭駅まで直通約21分）",
      features: [
        "地上31階以上の高層階客室。眼下に名古屋の街並みと鉄道パノラマが広がる絶景ステイ",
        "あおなみ線直結でレゴランドへの移動が驚くほどスムーズ。子ども用アメニティも充実",
        "愛知県名古屋市中村区平池町グローバルゲート31階（商業施設直結で買い物や食事も便利）"
      ]
    },
    {
      name: "名古屋マリオットアソシアホテル",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/12543/12543.jpg",
      hotelNo: 12543,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/12543/12543.html"),
      rating: 4.64,
      reviews: 5004,
      price: "¥17,500〜",
      access: "JR名古屋駅直結（JRセントラルタワーズ・フロント15階）",
      features: [
        "新幹線・JR・あおなみ線すべて直結の最高立地。雨の日や荷物の多い子連れ旅行でも安心",
        "世界基準の上質なホスピタリティと豪華な朝食ブッフェ。特別な秋の記念日旅行に最適",
        "愛知県名古屋市中村区名駅1-1-4（駅直結で移動のストレスゼロ）"
      ]
    },
    {
      name: "三井ガーデンホテル名古屋プレミア",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/153118/153118.jpg",
      hotelNo: 153118,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/153118/153118.html"),
      rating: 4.49,
      reviews: 1219,
      price: "¥7,600〜",
      access: "JR名古屋駅より徒歩約5分（地下街直結）",
      features: [
        "全室19階以上の高層タワー。宿泊者専用の開放的な展望大浴場でパーク後の疲れをリフレッシュ",
        "地元愛知の郷土料理や旬の味覚を取り入れたこだわり朝食ビュッフェが大人気",
        "愛知県名古屋市中村区名駅4-11-27（シンフォニー豊田ビル内）"
      ]
    },
    {
      name: "ベッセルホテルカンパーナ名古屋　サウナ付大浴場（名古屋駅桜通口）",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/167499/167499.jpg",
      hotelNo: 167499,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/167499/167499.html"),
      rating: 4.45,
      reviews: 2284,
      price: "¥7,120〜",
      access: "JR名古屋駅桜通口より徒歩約9分",
      features: [
        "18歳以下の子どもの添い寝が無料。ファミリー層から圧倒的な支持を集めるコスパ抜群ホテル",
        "サウナ付き大浴場完備＆ひつまぶしやきしめんが味わえる名物名古屋めし朝食バイキング",
        "愛知県名古屋市中村区名駅2-30-7（子連れ設備やレンタル品が非常に豊富）"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1600&q=80" 
            alt="レゴランド名古屋ハロウィンパーティ"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-600/90 text-white text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            秋のファミリー・ハロウィンイベント特集
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">「2026年秋！レゴランド名古屋ハロウィン」<br className="hidden sm:inline" />モンスター・パーティと子連れ人気ホテル5選</h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stone-200 leading-relaxed">
            巨大カボチャのレゴブロックモニュメントやお菓子のつかみ取りが大人気！子どもと一緒に思いっきり仮装して楽しめるレゴランド・ジャパンのハロウィンと、あおなみ線沿線・名駅直結のファミリー向けホテルを徹底紹介。
          </p>
        </div>
      </header>

      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-amber-600">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【2026年秋！レゴランド名古屋ハロウィン】モンスター・パーティと子連れ人気ホテル5選</span>
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
                "name": "レゴランド・ジャパンのハロウィンイベントの見どころや開催期間は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "例年9月中旬から11月上旬にかけて「ブリック・オア・トリート（モンスター・パーティ）。」が開催されます。約6万個のレゴデュプロで作られた巨大ジャック・オー・ランタンや、子どもたちがお菓子をもらえるキャンディ・ステーション、ハロウィン限定ショーなどファミリー向けの楽しい催しが満載です。"
                }
              },
              {
                "@type": "Question",
                "name": "レゴランドへ遊びに行く際の子連れ宿泊エリアの選び方は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "パーク直結の「レゴランド・ジャパン・ホテル」は客室や館内がレゴの世界で子どもが大喜びするため最有力です。また、あおなみ線沿線のささしまライブ駅直結ホテルや、新幹線・あおなみ線が直結するJR名古屋駅直結ホテル（ベッセルホテルカンパーナ名古屋など添い寝無料のホテル）も移動が便利で人気です。"
                }
              },
              {
                "@type": "Question",
                "name": "パーク内での仮装や持ち物の注意点はありますか？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "子どもから大人まで仮装しての入場が歓迎されています。ただし過度な露出や他の来場者を驚かせるような過激な衣装・危険物の持ち込みは禁止されています。秋の名古屋臨海部（金城ふ頭）は夕方以降に海風で肌寒くなるため、仮装の上に羽織れるパーカーや上着を持参すると安心です。"
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
              { "@type": "ListItem", "position": 3, "name": "【2026年秋！レゴランド名古屋ハロウィン】モンスター・パーティと子連れ人気ホテル5選", "item": "https://croud-travel.pages.dev/autumn-aichi-nagoya-legoland-japan-halloween-hotels-stay" }
            ]
          }) }}
        />

        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-orange-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              子どもの笑顔が弾ける秋の冒険！レゴランド・ジャパンのハロウィンと快適ステイ
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            愛知県名古屋市の金城ふ頭に位置する「レゴランド・ジャパン・リゾート」は、2歳から12歳のお子様を持つファミリーに絶大な人気を誇るテーマパークです。秋のハロウィン期間中は、パーク全体がカラフルなハロウィン装飾に包まれ、お菓子をもらえるトリック・オア・トリート体験や、限定コスチュームのキャラクターグリーティングが連日開催されます。アクセス抜群のあおなみ線沿線ホテルや公式ホテルを拠点に、家族みんなで特別な秋の思い出を作りましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-orange-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>ポイント 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">巨大レゴカボチャ＆お菓子つかみ取り</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">巨大なジャック・オー・ランタン前での記念撮影や、子どもたちが笑顔になるお菓子スポットが多数登場。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-orange-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>ポイント 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">レゴランド公式ホテルで夢の続き</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">パーク目の前の公式ホテルなら、客室内の謎解き宝箱やウォーター・プレイ・エリアで朝から晩まで大興奮。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-orange-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>ポイント 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">あおなみ線直通で名古屋めしも満喫</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">名古屋駅からあおなみ線で直通約24分。ひつまぶしや味噌カツなど名物グルメも一緒に楽しめます。</p>
            </div>
          </div>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">名古屋・テーマパークガイド：レゴランド・ジャパン・リゾート</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/LEGOLAND_JAPAN_Entrance%2C_Kinjofuto_Minato_Ward_Nagoya_2022.jpg/1280px-LEGOLAND_JAPAN_Entrance%2C_Kinjofuto_Minato_Ward_Nagoya_2022.jpg"
                alt="レゴランド・ジャパン・リゾート"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">レゴランド・ジャパン・リゾートの歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">レゴランド・ジャパン（LEGOLAND Japan Resort）は、愛知県名古屋市港区金城ふ頭にあるレゴブロックのテーマパーク。世界で8番目に開業したレゴランドである。</p>
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
              <span className="text-orange-600 font-bold tracking-wider text-xs md:text-sm uppercase">レゴランド観光に便利なおすすめ宿</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">厳選子連れ宿泊施設 5選</h2>
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

                    <h3 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-orange-600 transition-colors mb-3">
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
                      <span className="text-xl md:text-2xl font-black text-orange-600">{hotel.price}</span>
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
            <div className="w-2.5 h-8 bg-orange-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】レゴランド・ハロウィン大満喫モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-orange-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-orange-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">名古屋到着〜チェックイン＆名物グルメ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:00〜</strong> 名古屋駅に到着。駅構内や地下街で名物きしめんや味噌煮込みうどんのランチ。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> ホテルへチェックイン（レゴランド・ジャパン・ホテルまたはあおなみ線沿線のホテル）。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> お部屋の設備をチェック。レゴランドホテルの場合は客室内の謎解き宝箱に家族でチャレンジ！</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 名古屋駅周辺または金城ふ頭「メイカーズピア」でひつまぶしや手羽先など名古屋めしディナー。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝からレゴランド・ハロウィンイベントへ！</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">08:30〜</strong> ホテルで朝食ブッフェを味わい、お気に入りの仮装コスチュームに着替えて準備万端。</li>
                <li>・<strong className="text-stone-800">09:30〜</strong> レゴランド・ジャパンへ入園！ハロウィン仕様のジャック・オー・ランタン前で家族写真を撮影。</li>
                <li>・<strong className="text-stone-800">11:00〜</strong> キャンディ・ステーションでお菓子を集めたり、秋限定の謎解きアクティビティやアトラクションを満喫。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> シーライフ名古屋で海の生き物たちを見学後、あおなみ線で名古屋駅へ戻り新幹線で帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-orange-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）とレゴランド滞在のポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. レゴランド・ジャパンのハロウィンイベントの見どころや開催期間は？</span>
                <span className="text-orange-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 例年9月中旬から11月上旬にかけて「ブリック・オア・トリート（モンスター・パーティ）。」が開催されます。約6万個のレゴデュプロで作られた巨大ジャック・オー・ランタンや、子どもたちがお菓子をもらえるキャンディ・ステーション、ハロウィン限定ショーなどファミリー向けの楽しい催しが満載です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. レゴランドへ遊びに行く際の子連れ宿泊エリアの選び方は？</span>
                <span className="text-orange-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. パーク直結の「レゴランド・ジャパン・ホテル」は客室や館内がレゴの世界で子どもが大喜びするため最有力です。また、あおなみ線沿線のささしまライブ駅直結ホテルや、新幹線・あおなみ線が直結するJR名古屋駅直結ホテル（ベッセルホテルカンパーナ名古屋など添い寝無料のホテル）も移動が便利で人気です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. パーク内での仮装や持ち物の注意点はありますか？</span>
                <span className="text-orange-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 子どもから大人まで仮装しての入場が歓迎されています。ただし過度な露出や他の来場者を驚かせるような過激な衣装・危険物の持ち込みは禁止されています。秋の名古屋臨海部（金城ふ頭）は夕方以降に海風で肌寒くなるため、仮装の上に羽織れるパーカーや上着を持参すると安心です。
              </p>
            </details>
          </div>
        </section>

        <HubRelatedPosts currentSlug="" />
      </main>
    </div>
  );
}
