import FurusatoStepSection from "@/app/components/FurusatoStepSection";
import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '身体の内側から美しく整う！本格薬膳会席＆地熱ハーブ温泉宿×ふるさと納税厳選ガイド金沢湯涌・箱根仙石原・別府鉄輪',
  description: '陰陽五行の知恵と旬の素材で胃腸からリセット！百万石の奥座敷で金沢伝統の薬膳会席と美肌温泉を味わう「金沢湯涌温泉 湯の出旅館」、富士山を望む絶景露天風呂と健康薬膳ビュッフェ「ホテルグリーンプラザ箱根」、鉄輪温泉の地熱蒸気と薬草・客室露天風呂付き離れ宿「癒しの宿 彩葉」。身体を芯から温める薬膳鍋やハーブ風呂を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
  keywords: ["地熱ハーブ温泉宿×ふるさと納税", "2026年最新", "金沢湯涌", "箱根仙石原", "別府鉄輪", "温泉宿", "宿泊予約"],
  alternates: { canonical: baseUrl + '/furusato-tax-yakuzen-herbal-cuisine-detox-onsen-stay/' },
  openGraph: {
    title: '身体の内側から美しく整う！本格薬膳会席＆地熱ハーブ温泉宿×ふるさと納税厳選ガイド金沢湯涌・箱根仙石原・別府鉄輪',
    description: '陰陽五行の知恵と旬の素材で胃腸からリセット！百万石の奥座敷で金沢伝統の薬膳会席と美肌温泉を味わう「金沢湯涌温泉 湯の出旅館」、富士山を望む絶景露天風呂と健康薬膳ビュッフェ「ホテルグリーンプラザ箱根」、鉄輪温泉の地熱蒸気と薬草・客室露天風呂付き離れ宿「癒しの宿 彩葉」。身体を芯から温める薬膳鍋やハーブ風呂を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    url: baseUrl + '/furusato-tax-yakuzen-herbal-cuisine-detox-onsen-stay',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoYakuzenHerbalCuisineStayPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '本格薬膳会席＆ハーブデトックス温泉宿特集', item: baseUrl + '/furusato-tax-yakuzen-herbal-cuisine-detox-onsen-stay' },
    ],
  };


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "身体の内側から美しく整う！本格薬膳会席＆地熱ハーブ温泉宿×ふるさと納税完全ガイド【2026年最新】金沢湯涌・箱根仙石原・別府鉄輪",
    "description": "陰陽五行の知恵と旬の素材で胃腸からリセット！百万石の奥座敷で金沢伝統の薬膳会席と美肌温泉を味わう「金沢湯涌温泉 湯の出旅館」、富士山を望む絶景露天風呂と健康薬膳ビュッフェ「ホテルグリーンプラザ箱根」、鉄輪温泉の地熱蒸気と薬草・客室露天風呂付き離れ宿「癒しの宿 彩葉」。身体を芯から温める薬膳鍋やハーブ風呂を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。",
    "url": "https://croud-travel.pages.dev/furusato-tax-yakuzen-herbal-cuisine-detox-onsen-stay/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「金沢湯涌温泉 湯の出旅館」へのアクセスや移動方法について","acceptedAnswer":{"@type":"Answer","text":"「金沢湯涌温泉 湯の出旅館」へは、兼六園より車で25分、金沢駅より車で約40分。最寄りの金沢駅からの経路案内も充実しています。"}},{"@type":"Question","name":"「金沢湯涌温泉 湯の出旅館」の魅力や予約時のポイントは？","acceptedAnswer":{"@type":"Answer","text":"「金沢湯涌温泉 湯の出旅館」は『金沢市街から車で15分～20分。金沢の奥座敷。温泉と料理と趣贅沢にお愉しみいただける宿。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。"}},{"@type":"Question","name":"プラン選びや宿の比較で意識すべき点は？","acceptedAnswer":{"@type":"Answer","text":"「金沢湯涌温泉 湯の出旅館」と「富士山を一望できる宿 ホテルグリーンプラザ箱根。」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。"}}]}) }}
      />
      <div className="max-w-5xl mx-auto">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <Link href="/travel-savings-guide" className="hover:text-stone-900 underline transition">旅行節約ハブ</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">本格薬膳会席＆ハーブデトックス温泉宿特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            本格薬膳料理＆ハーブデトックス温泉宿特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">身体の内側から美しく整う！本格薬膳会席＆地熱ハーブ温泉宿×ふるさと納税厳選ガイド金沢湯涌・箱根仙石原・別府鉄輪</h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            日々の忙しさや不規則な食生活で疲れた胃腸と心身を、東洋医学の「医食同源」の知恵によって内側から優しくリセットする「薬膳料理＆ハーブ温泉宿」。クコの実、高麗人参、生姜、ハトムギ、地元で採れた滋養豊かな季節の薬草や根菜を、熟練の料理人が出汁の旨味と絶妙に調和させた薬膳会席は、苦みやクセがなく、身体が自然と求める深い美味しさに満ちています。金沢百万石の奥座敷・湯涌温泉で国際薬膳調理師が監修する本格的な加賀薬膳会席と美肌の名湯を誇る「湯の出旅館」、箱根仙石原の高原に位置し富士山を望む露天風呂と健康志向の薬膳旬菜プレミアムビュッフェが人気の「ホテルグリーンプラザ箱根」、そして別府鉄輪の豊かな地熱蒸気と薬草スチーム、全室源泉掛け流しの客室露天風呂を備える大人の隠れ離れ宿「癒しの宿 彩葉」。温泉の温熱効果と薬膳の相乗効果で、滞在するだけで肌の透明感が増し、身体が羽のように軽くなる至福のウェルネス旅を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を使って実質2,000円で賢く予約し、極上のインナービューティー体験へ出かけましょう。
          </p>
          <div className="flex flex-wrap gap-4 pt-4 border-t border-amber-900/50 text-xs text-amber-200/90 font-medium">
            <span>✓ 寄付額の最大30％相当が宿泊クーポンに</span>
            <span>✓ クーポン有効期限は発行からゆとりの3年間</span>
            <span>✓ すでに予約済みの宿泊にも「あとから割引」可能</span>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-sm md:text-base border border-amber-400/30"
            >
              楽天ふるさと納税トラベルクーポンを獲得する →
            </a>
            <Link
              href="/furusato-tax-travel-beginners-complete-guide"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-amber-200 font-bold px-5 py-3 rounded-2xl border border-amber-300/20 text-xs sm:text-sm transition"
            >
              📖 初めての方向け完全マニュアル
            </Link>
          </div>
        </header>

        {/* 3つの醍醐味セクション */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-6 flex items-center gap-3">
            <span className="text-amber-600 text-xl md:text-2xl">◆</span>
            この旅で体感したい3つの醍醐味
          </h2>
          <div className="grid gap-6">

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  01
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  「医食同源」の知恵で身体を芯から温める！滋味豊かな薬膳スープと旬の漢方会席
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                和漢素材と旬の野菜・魚介を組み合わせた特製薬膳鍋やスープ。血行を促進し冷えやむくみを改善しながら、素材本来の澄んだ旨味が身体の隅々まで染み渡ります。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  温泉のミネラルと薬草の相乗効果！美肌と代謝を高めるハーブスチーム＆露天風呂
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                温泉に浸かることで毛穴が開き、薬膳素材の栄養吸収がアップ。地熱蒸気を利用した薬草スチームサウナやハーブ湯との組み合わせで、全身の老廃物がすっきりと排出されます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  身体が重くならない！消化に優しく翌朝の目覚めが劇的に軽くなるヘルシーディナー
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                油分や塩分を控えめにし、出汁と生薬の風味で仕上げた贅沢な料理。夜遅くに食べても胃もたれせず、翌朝すっきりと心地よい空腹感と軽快な目覚めを実感できます。
              </p>
            </div>
  
          </div>
        </section>

        {/* 厳選名宿セクション */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-3 flex items-center gap-3">
              <span className="text-amber-600 text-xl md:text-2xl">◆</span>
              ふるさと納税で泊まる厳選名宿
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              楽天トラベルAPIから最新の実在宿データを取得。対象自治体のふるさと納税クーポンを利用して実質2,000円で泊まれる名宿です。
            </p>
          </div>

          <div className="space-y-8">

            {/* ホテルカード 1 */}
            <article className="bg-white rounded-3xl shadow-lg border border-stone-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/30835/30835.jpg"
                  alt="金沢湯涌温泉　湯の出旅館"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.64 (478件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    石川県金沢市・金沢百万石の奥座敷！国際薬膳調理師監修の金沢薬膳会席と閑静な名旅館
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    金沢湯涌温泉　湯の出旅館
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    金沢駅から車で約20分、歴代加賀藩主も湯治に訪れた名湯・湯涌温泉の清流沿いに佇む老舗温泉旅館。宿の最大の目玉は、国際薬膳調理師の資格を持つ料理長が手掛ける本格的な「金沢薬膳会席」。加賀野菜や日本海の新鮮魚介に、和漢生薬や季節の薬草を絶妙に融合させ、美味と健康を極限まで両立させています。無色透明でまろやかな弱アルカリ性の湯涌温泉に浸かり、落ち着きある数寄屋造りの客室でゆったりと過ごす、心身の浄化にふさわしい大人の美食宿です。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「新鮮なネタのお寿司と海に沈む夕日が最高バイキングのお寿司が地元の新鮮な魚で、お寿司屋さんよりおいしかったです。」「部屋の窓から海が一望でき、さらに夕日が最高でした!」など、現地で体験したからこそわか…投…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 石川県金沢市湯涌荒屋町77-2</div>
                    <div><strong>アクセス:</strong> 兼六園より車で25分、金沢駅より車で約40分。金沢森本I.Cから山側環状経由で30分。</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約17,325円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30835%2F30835.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition shadow-sm"
                  >
                    楽天トラベルで空室・プランを見る ➔
                  </a>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm transition"
                  >
                    ふるさと納税クーポンを使う
                  </a>
                </div>
              </div>
            </article>
    

            {/* ホテルカード 2 */}
            <article className="bg-white rounded-3xl shadow-lg border border-stone-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/11011/11011.jpg"
                  alt="富士山を一望できる宿　ホテルグリーンプラザ箱根"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.12 (2634件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    神奈川県箱根町・富士山を望む絶景露天風呂！健康薬膳と旬菜プレミアムディナービュッフェ
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    富士山を一望できる宿　ホテルグリーンプラザ箱根
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    箱根仙石原の雄大な高原に建ち、露天風呂から真正面に霊峰・富士山を一望できる絶景リゾートホテル。夕食ビュッフェでは、季節の健康薬膳スープや彩り豊かな温野菜、スーパーフードを取り入れた前菜など、ウェルネスにこだわったメニューが豊富に並びます。目の前で焼き上げるローストビーフや握り寿司など豪華な料理も充実。仙石原温泉の自家源泉を湛えた露天風呂で富士山を眺めながら温まり、身体に優しい美食でエネルギーをチャージできます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「初めて1泊2日で宿泊させていただきました!箱根旅行自体は何十回としており、いつもとは違うお宿を選んでみた感想です。いつもは湯本駅近くのホテルが多いです。良かった点コスパの良い、料理と宿泊。… つづ。」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 神奈川県足柄下郡箱根町仙石原1244-2</div>
                    <div><strong>アクセス:</strong> 箱根湯本駅より伊豆箱根バス約35分姥子バス停下車徒歩約5分★御殿場ICよりお車で約25分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約12,995円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F11011%2F11011.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition shadow-sm"
                  >
                    楽天トラベルで空室・プランを見る ➔
                  </a>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm transition"
                  >
                    ふるさと納税クーポンを使う
                  </a>
                </div>
              </div>
            </article>
    

            {/* ホテルカード 3 */}
            <article className="bg-white rounded-3xl shadow-lg border border-stone-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/136161/136161.jpg"
                  alt="癒しの宿　彩葉"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.62 (302件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    大分県別府市・鉄輪の地熱と薬草の恵み！全室源泉掛け流し客室露天風呂付きの大人の隠れ離れ宿
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    癒しの宿　彩葉
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    湯煙たなびく別府・鉄輪温泉の静かな小高い丘に位置し、雑木林の庭園に全客室が離れ形式で点在する極上の隠れ宿。全室に源泉かけ流しの専用内湯または露天風呂を備え、鉄輪名物の薬草茶やハーブティーが用意されたデトックス空間が魅力です。食事処では地熱蒸気を利用したヘルシーな地獄蒸し料理や豊後牛、旬の野菜をたっぷり使った身体に優しい会席を提供。時間を気にせずプライベート温泉に何度も浸かり、内側から美しく整う休日をお過ごしいただけます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「部屋付き温泉とビール飲み放題で最高な休日部屋に温泉があり、温度調節もやりやすかったです。景色も最高、部屋もとても綺麗で、清潔感もばっちりでした。大浴場は露天風呂で、自然豊かな場所と夏なので虫も少し… 投。」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 大分県別府市鉄輪上6組</div>
                    <div><strong>アクセス:</strong> 別府駅よりお車で１５分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約11,750円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F136161%2F136161.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition shadow-sm"
                  >
                    楽天トラベルで空室・プランを見る ➔
                  </a>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm transition"
                  >
                    ふるさと納税クーポンを使う
                  </a>
                </div>
              </div>
            </article>
    
          </div>
        </section>

        <FurusatoStepSection />

        {/* 関連特集クロスリンク */}
        <section className="bg-stone-50 rounded-3xl p-8 border border-stone-200/80 mb-16">
          <h2 className="text-lg md:text-xl font-bold font-serif text-stone-800 mb-4">
            あわせて読みたい関連特集
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2">

              <li key="furusato-tax-natural-mud-bath-mineral-detox-onsen-stay">
                <Link href="/furusato-tax-natural-mud-bath-mineral-detox-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【天然泥パック＆泥湯温泉×ふるさと納税】八幡平・霧島・別府の美肌宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-sand-bath-sunamushi-detox-onsen-stay">
                <Link href="/furusato-tax-sand-bath-sunamushi-detox-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【天然砂むし温泉＆名湯デトックス×ふるさと納税】指宿・別府の再生宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-three-medicinal-hotsprings-stay">
                <Link href="/furusato-tax-three-medicinal-hotsprings-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【日本三大薬湯×ふるさと納税】有馬・草津・松之山の万病を癒やす名湯宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-spring-water-soba-tofu-onsen-stay">
                <Link href="/furusato-tax-spring-water-soba-tofu-onsen-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【湧水手打ち蕎麦＆名水とうふ温泉宿×ふるさと納税】清らかな水の恵み旅</span>
                </Link>
              </li>
  
          </ul>
        </section>

        {/* ハブページへの誘導フッター */}
        <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-amber-900/40 text-center mb-12">
          <h2 className="text-xl sm:text-2xl font-bold font-serif mb-3 text-amber-50">
            もっとお得に旅を楽しむためのハブページへ
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
            全国のテーマ別宿特集や、旅行費を最大30％安くする裏ワザを網羅した総合ガイドを公開中。
          </p>
          <Link
            href="/travel-savings-guide"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition text-sm"
          >
            🏨 旅行節約総合ハブページを見る ➔
          </Link>
        </div>

        {/* フッター */}
        <footer className="text-center text-xs text-stone-400 pt-6 border-t border-stone-200">
          <p>※表示内容は2026年9月時点の情報です。最新の宿泊プラン・クーポン対象施設は楽天トラベルにてご確認ください。</p>
          <p className="mt-2">
            <Link href="/" className="text-stone-500 hover:text-stone-800 underline transition">旅宿クラウド トップページへ</Link>
          </p>
        </footer>
      </div>
    
        {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
                {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              【1泊2日】金沢湯涌温泉 湯の出旅館を拠点にするおすすめ滞在モデルコース
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">到着〜チェックインと名湯巡り</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">14:00〜</strong> 金沢駅よりアクセス。兼六園より車で25分、金沢駅より車で約40分。</li>
                <li>・<strong className="text-stone-800">15:30〜</strong> 「金沢湯涌温泉 湯の出旅館」にチェックイン。金沢市街から車で15分～20分。金沢の奥座敷。温泉と料理と趣贅沢にお愉しみいただける宿。などの宿の特徴に期待を高めつつ客室へ。</li>
                <li>・<strong className="text-stone-800">17:00〜</strong> 「金沢湯涌温泉 湯の出旅館」の湯処へ。金沢市街から車で15分～20分。金沢の奥座敷。温泉と料理と趣贅沢にお愉とともに、夕暮れの特別な寛ぎを満喫。</li>
                <li>・<strong className="text-stone-800">19:00〜</strong> 「金沢湯涌温泉 湯の出旅館」でいただく旬の夕食。地場産の味覚を取り入れたおもてなし料理を五感でじっくり味わう贅沢なひととき。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">爽快な朝湯〜周辺散策と帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の光が差し込む「金沢湯涌温泉 湯の出旅館」の湯船へ。清々しい空気の中で手足を伸ばし、心地よい目覚めを迎える。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 「金沢湯涌温泉 湯の出旅館」こだわりの朝食を堪能。炊きたてのごはんや身体に優しい料理で、一日のエネルギーをチャージ。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後は近隣エリアを観光。本記事でご紹介した「富士山を一望できる宿 ホテルグリーンプラザ箱根。」の周辺スポットや名産店に立ち寄り、お土産を選んで帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と金沢湯涌温泉 湯の出旅館の滞在ポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「金沢湯涌温泉 湯の出旅館」へのアクセスや移動方法について</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「金沢湯涌温泉 湯の出旅館」へは、兼六園より車で25分、金沢駅より車で約40分。最寄りの金沢駅からの経路案内も充実しています。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「金沢湯涌温泉 湯の出旅館」の魅力や予約時のポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「金沢湯涌温泉 湯の出旅館」は『金沢市街から車で15分～20分。金沢の奥座敷。温泉と料理と趣贅沢にお愉しみいただける宿。』という点が旅行者から高く支持されています。連休や人気シーズンは予約が集中しやすいため、空室状況はお早めのチェックが安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. プラン選びや宿の比較で意識すべき点は？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 「金沢湯涌温泉 湯の出旅館」と「富士山を一望できる宿 ホテルグリーンプラザ箱根。」はそれぞれ立地や施設設備に独自の魅力があります。湯巡り重視か、料理やお部屋の寛ぎ重視かなど、今回の旅の目的に合わせてお選びください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/miyagi"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                宮城県の宿・温泉
              </Link>
              <Link
                href="/prefectures/toyama"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                富山県の宿・温泉
              </Link>
              <Link
                href="/prefectures/niigata"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                新潟県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kanagawa"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                神奈川県の宿・温泉
              </Link>
            </div>
          
      <HubRelatedPosts currentSlug="furusato-tax-yakuzen-herbal-cuisine-detox-onsen-stay" />
</div>
        </section>

      </main>
  );
}
