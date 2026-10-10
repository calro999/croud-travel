import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "中旬〜11月上旬！苗場ドラゴンドラ紅葉で過ごす冬の旅（10月）！日本最長ゴンドラ空中散歩と越後湯沢名湯宿5選",
  description: "全長5,481m・日本最長を誇る苗場「ドラゴンドラ」で巡る大パノラマ紅葉クルージング！アップダウンを繰り返すスリルと絶景、そして新米魚沼産コシヒカリと越後湯沢温泉に癒やされる厳選宿5選。",
  keywords: "苗場 ドラゴンドラ 紅葉 見頃 10月, 越後湯沢温泉 旅館 おすすめ, 雪の花, 湯沢グランドホテル, 新潟 紅葉 ゴンドラ 宿泊",
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-niigata-echigo-yuzawa-dragondola-momiji-hotels-stay/",
  },
  openGraph: {
    title: "中旬〜11月上旬！苗場ドラゴンドラ紅葉で過ごす冬の旅（10月）！日本最長ゴンドラ空中散歩と越後湯沢名湯宿5選",
    description: "全長5,481m・日本最長を誇る苗場「ドラゴンドラ」で巡る大パノラマ紅葉クルージング！アップダウンを繰り返すスリルと絶景、そして新米魚沼産コシヒカリと越後湯沢温泉に癒やされる厳選宿5選。",
    url: 'https://croud-travel.pages.dev/autumn-niigata-echigo-yuzawa-dragondola-momiji-hotels-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "苗場ドラゴンドラ 紅葉",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "中旬〜11月上旬！苗場ドラゴンドラ紅葉で過ごす冬の旅（10月）！日本最長ゴンドラ空中散歩と越後湯沢名湯宿5選",
    description: "全長5,481m・日本最長を誇る苗場「ドラゴンドラ」で巡る大パノラマ紅葉クルージング！アップダウンを繰り返すスリルと絶景、そして新米魚沼産コシヒカリと越後湯沢温泉に癒やされる厳選宿5選。",
  }
};

export default function FeaturePage() {
  const hotelList = [
    {
      name: "湯けむりの宿　雪の花（共立リゾート）",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/172442/172442.jpg",
      hotelNo: 172442,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/172442/172442.html"),
      rating: 4.44,
      reviews: 980,
      price: "¥16,005〜",
      access: "JR越後湯沢駅西口より徒歩約3分／関越道 湯沢ICより車で約5分",
      features: [
        "最上階に越後湯沢の山並みを見渡す展望大浴場と3つの無料貸切風呂を完備",
        "全館畳敷きの和の温もり。新米魚沼産コシヒカリと日本海の海の幸を味わう和食会席＆夜鳴きそば",
        "新潟県南魚沼郡湯沢町湯沢317-1（駅近でドラゴンドラ連絡バスやシャトルへの乗車もスムーズ）"
      ]
    },
    {
      name: "越後湯沢温泉　松泉閣花月",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/40019/40019.jpg",
      hotelNo: 40019,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/40019/40019.html"),
      rating: 4.56,
      reviews: 1420,
      price: "¥14,300〜",
      access: "越後湯沢駅西口より徒歩約5分（無料送迎あり）／湯沢ICより車で約10分",
      features: [
        "四季折々の表情を見せる日本庭園と、4つの風情ある湯船で自家源泉を満喫できる温泉旅館",
        "魚沼産コシヒカリ釜炊きご飯やにいがた和牛など、越後の旬を五感で味わうおもてなし料理",
        "新潟県南魚沼郡湯沢町湯沢318-5（心温まる接客と静かな佇まいが高評価の宿）"
      ]
    },
    {
      name: "越後湯沢温泉　湯沢グランドホテル＜新潟県＞",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/38764/38764.jpg",
      hotelNo: 38764,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/38764/38764.html"),
      rating: 4.52,
      reviews: 2680,
      price: "¥9,680〜",
      access: "JR越後湯沢駅西口より徒歩約3分（無料送迎あり）／湯沢ICより車で約5分",
      features: [
        "庭園露天風呂「季里の湯」やジャグジー、岩風呂など多彩な湯巡りを楽しめる大型温泉ホテル",
        "約50種類の出来立て料理が並ぶ豪華和洋中バイキング。新米コシヒカリと地酒の飲み比べも人気",
        "新潟県南魚沼郡湯沢町大字湯沢2494（駅前至近で観光の拠点に抜群の立地とコスパ）"
      ]
    },
    {
      name: "越後湯沢温泉　水が織りなす越後の宿　双葉",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/8401/8401.jpg",
      hotelNo: 8401,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/8401/8401.html"),
      rating: 4.36,
      reviews: 1890,
      price: "¥14,300〜",
      access: "上越新幹線 越後湯沢駅より徒歩約7分（送迎あり）／湯沢ICより車で約5分",
      features: [
        "二十八の湯処を誇る「お風呂自慢の宿」。最上階の展望露天風呂から越後三山の秋景色を一望",
        "個室食事処でいただく魚沼の恵み豊かな山海会席料理。露天風呂付き客室も充実",
        "新潟県南魚沼郡湯沢町湯沢419（高台に位置し眺望抜群の老舗宿）"
      ]
    },
    {
      name: "越後湯沢　ＨＡＴＡＧＯ井仙",
      img: "https://img.travel.rakuten.co.jp/share/HOTEL/1460/1460.jpg",
      hotelNo: 1460,
      affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/1460/1460.html"),
      rating: 4.29,
      reviews: 620,
      price: "¥12,837〜",
      access: "JR越後湯沢駅西口正面 徒歩1分／湯沢ICより車で約5分",
      features: [
        "「雪国の知恵と食」をテーマにした大人のデザイナーズ旅籠。駅西口の目の前という最高立地",
        "魚沼の伝統食を現代風に昇華させたレストラン「むらんごっつぉ」の絶品コース料理",
        "新潟県南魚沼郡湯沢町大字湯沢2455（足湯カフェや地酒ラウンジなどモダンな魅力満載）"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="relative bg-stone-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80" 
            alt="苗場ドラゴンドラ 紅葉"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-600/90 text-white text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            秋のパノラマ絶景特集・日本最長ドラゴンドラ
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">中旬〜11月上旬！苗場ドラゴンドラ紅葉で過ごす冬の旅（10月）！<br className="hidden sm:inline" />日本最長ゴンドラ空中散歩と越後湯沢名湯宿5選</h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-stone-200 leading-relaxed">
            全長5,481m、約25分間の空中散歩！二居湖のエメラルドグリーンと燃えるような錦秋の山並みを眼下に見下ろす絶景ゴンドラ。新米コシヒカリと越後湯沢温泉の極上ステイ。
          </p>
        </div>
      </header>

      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-amber-600">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">【10月中旬〜11月上旬！苗場ドラゴンドラ紅葉】日本最長ゴンドラ空中散歩と越後湯沢名湯宿5選</span>
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
                "name": "苗場ドラゴンドラの紅葉見頃時期や営業期間は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "例年10月上旬から11月上旬にかけて運行されます。紅葉の見頃ピークは10月中旬〜下旬頃です。標高差約425mを約25分かけて移動するため、山頂側の田代高原から山麓の苗場高原へと紅葉前線が移り変わり、期間中いつでも鮮やかなグラデーションが楽しめます。"
                }
              },
              {
                "@type": "Question",
                "name": "ドラゴンドラへのアクセスや越後湯沢駅からの移動方法は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "上越新幹線の越後湯沢駅東口から、紅葉運行期間中に苗場プリンスホテル・ドラゴンドラ行きの路線バスやシャトルバス（約40〜50分）が運行されます。車の場合は関越自動車道月夜野ICまたは湯沢ICから約35分です。"
                }
              },
              {
                "@type": "Question",
                "name": "秋のドラゴンドラ乗車時の服装や防寒対策は？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "山頂の田代高原は標高約1,346mに達するため、10月は気温が10℃以下まで下がり強い風が吹く日もあります。ゴンドラ内や山頂散策には風を通さないウインドブレーカーやダウンジャケット、手袋、歩きやすいスニーカーの着用が必須です。"
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
              { "@type": "ListItem", "position": 3, "name": "【10月中旬〜11月上旬！苗場ドラゴンドラ紅葉】日本最長ゴンドラ空中散歩と越後湯沢名湯宿5選", "item": "https://croud-travel.pages.dev/autumn-niigata-echigo-yuzawa-dragondola-momiji-hotels-stay" }
            ]
          }) }}
        />

        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              アップダウンを繰り返す大迫力の空中散歩。眼下に広がる錦秋の絨毯と二居湖の碧
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            新潟県苗場高原と田代高原を結ぶ「ドラゴンドラ（苗場・田代ゴンドラ）」は、単一ロープウェイとして日本最長5,481mを誇る秋の超人気アトラクションです。まるで龍の背に乗って飛んでいるかのように谷を越え山を登り、窓の外には360度の紅葉パノラマが展開します。特に神秘的なエメラルドグリーンに輝く「二居湖（ふたいこ）」を見下ろす瞬間は圧巻。大自然を満喫した後は、東京から新幹線で約70分の越後湯沢温泉へ。秋収穫の新米魚沼産コシヒカリと名湯に癒やされる贅沢な旅へ出かけましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">日本最長5.4km！約25分間の空中クルーズ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">急勾配を急降下するスリルと、眼下一面に広がる黄金色・深紅のモミジのパノラマ。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">神秘の湖「二居湖」の絶景コントラスト</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">コバルトブルーの水面と鮮烈な山肌の紅葉。ゴンドラからしか見られない奇跡の景観。</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>見どころ 3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">秋の新米「魚沼産コシヒカリ」と名湯</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">10月に解禁される炊きたての新米。弱アルカリ性のやわらかな温泉で芯まで温まる癒やし。</p>
            </div>
          </div>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">越後・紅葉空中散歩ガイド：日本最長ゴンドラ・苗場ドラゴンドラと越後湯沢温泉</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Naeba_Ski_Resort_%286788805622%29.jpg/1280px-Naeba_Ski_Resort_%286788805622%29.jpg"
                alt="日本最長ゴンドラ・苗場ドラゴンドラと越後湯沢温泉"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">日本最長ゴンドラ・苗場ドラゴンドラと越後湯沢温泉の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">苗場スキー場（なえばスキーじょう）は、日本の新潟県南魚沼郡湯沢町大字三国にあるスキー場。旧コクドの経営を引き継いだ西武グループの株式会社西武・プリンスホテルズワールドワイドが運営している。西武グループの総帥だった堤義明がスキー場を中心とした一大リゾート地を建設する構想を立て、グループ系列の国土計画が三国山脈の筍山（たけのこやま、標高1789.7 m、後述）一帯の土地を購入、1961年（昭和36年）12月23日に苗場国際スキー場という名称でオープンした。その後、1973年（昭和48年）5月に現在の「苗場スキー場」に改称している。またスキー場内には日本のリゾートホテルの代表格と評される苗場プリンスホテルが立地しており、同ホテルも客室1800、収容人数4200人という規模から「世界一の規模」といわれた。ゲレンデの標高差は約900 mにおよび、積雪の深さは2 - 4 m、雪質は粉雪である。 新潟県はスキー場が多い県であるが、その中でも苗場スキー場は東京から2時間圏内の本格的スキー場であること、また標高が高く雪質が良いことから、スキー客に人気があると評され、日本を代表するスキー場、日本屈指の集客力を誇るスキー場とも評されている。1991年（平成3年）時点では単一スキー場としては日本一の収容数を誇り、スキーブームにあった1992年（平成4年）には利用客302万人を記録、スキーをしない者でもその名を知る場所と言われた。1998年（平成10年）の正月三が日には東京ディズニーランドの21万人に次ぎ、苗場スキー場には日本の行楽地で2番目となる15万人の行楽客が訪れており、また警察庁が2003年（平成15年）末に発表した2004年（平成16年）正月三が日の人出予想でも、苗場スキー場は東京ディズニーリゾート (TDL) 、ユニバーサル・スタジオ・ジャパン (USJ) とともに、10万人以上の人出が見込まれる行楽地3箇所の一つとして挙げられている。</p>
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
              <span className="text-amber-700 font-bold tracking-wider text-xs md:text-sm uppercase">ドラゴンドラ観光と新米美食を愉しむ宿</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">厳選越後湯沢温泉宿 5選</h2>
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
              【1泊2日】苗場ドラゴンドラ紅葉＆越後湯沢温泉満喫モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">新幹線で越後湯沢到着〜温泉街散策とチェックイン</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:00〜</strong> 上越新幹線で越後湯沢駅に到着。駅構内の「ぽんしゅ館」で利き酒とおにぎりランチ。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> 徒歩または送迎でホテルへチェックイン。畳敷きの客室で旅の荷物を下ろして一服。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 展望大浴場や露天風呂へ。越後三山を望みながら無色透明の名湯に浸かる。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 炊きたての新米魚沼産コシヒカリや、にいがた和牛・日本海の鮮魚会席を贅沢に堪能。</li>
              </ul>
            </div>
            <div className="border-l-2 border-orange-600 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-orange-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝から苗場ドラゴンドラへ！紅葉クルージング</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">08:30〜</strong> ホテルを出発し、越後湯沢駅東口からのシャトルバスで苗場プリンスホテルへ。</li>
                <li>・<strong className="text-stone-800">09:30〜</strong> ドラゴンドラに乗車！全長5.4kmの空中散歩でエメラルドグリーンの二居湖と紅葉を鑑賞。</li>
                <li>・<strong className="text-stone-800">11:00〜</strong> 山頂の田代高原でパノラマ散策を楽しんだ後、田代ロープウェー経由で下山。</li>
                <li>・<strong className="text-stone-800">14:00〜</strong> 越後湯沢駅に戻り、笹団子や地酒のお土産を購入して新幹線で快適に帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と越後湯沢旅行のポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 苗場ドラゴンドラの紅葉見頃時期や営業期間は？</span>
                <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 例年10月上旬から11月上旬にかけて運行されます。紅葉の見頃ピークは10月中旬〜下旬頃です。標高差約425mを約25分かけて移動するため、山頂側の田代高原から山麓の苗場高原へと紅葉前線が移り変わり、期間中いつでも鮮やかなグラデーションが楽しめます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. ドラゴンドラへのアクセスや越後湯沢駅からの移動方法は？</span>
                <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 上越新幹線の越後湯沢駅東口から、紅葉運行期間中に苗場プリンスホテル・ドラゴンドラ行きの路線バスやシャトルバス（約40〜50分）が運行されます。車の場合は関越自動車道月夜野ICまたは湯沢ICから約35分です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 秋のドラゴンドラ乗車時の服装や防寒対策は？</span>
                <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 山頂の田代高原は標高約1,346mに達するため、10月は気温が10℃以下まで下がり強い風が吹く日もあります。ゴンドラ内や山頂散策には風を通さないウインドブレーカーやダウンジャケット、手袋、歩きやすいスニーカーの着用が必須です。
              </p>
            </details>
          </div>
        </section>

        <HubRelatedPosts currentSlug="" />
      </main>
    </div>
  );
}
