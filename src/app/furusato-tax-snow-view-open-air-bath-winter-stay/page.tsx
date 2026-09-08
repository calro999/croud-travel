import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '白銀の銀世界に浸る絶景雪見露天風呂＆冬の秘湯名旅館×ふるさと納税完全ガイド【2026年最新】万座・越後湯沢・定山渓',
  description: '降り積もる純白の雪と立ち上る湯煙！日本屈指の豪雪地帯でしか出会えない奇跡の雪見露天風呂ステイ。標高1,800mの白銀パノラマと乳白色の濃厚硫黄泉「万座プリンスホテル」、川端康成『雪国』の舞台で幻想的な雪見庭園風呂を満喫する「越後湯沢温泉 湯沢グランドホテル」、札幌の奥座敷で定山渓渓谷の冬景色を望む名旅館「章月グランドホテル」。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ冬の極上旅完全ガイド。',
  keywords: [
    '白銀の銀世界・絶景雪見露天風呂名宿特集',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '温泉旅館 予約',
    'ご当地グルメ 宿',
    '人気温泉地 クーポン'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-snow-view-open-air-bath-winter-stay' },
  openGraph: {
    title: '白銀の銀世界に浸る絶景雪見露天風呂＆冬の秘湯名旅館×ふるさと納税完全ガイド【2026年最新】万座・越後湯沢・定山渓',
    description: '降り積もる純白の雪と立ち上る湯煙！日本屈指の豪雪地帯でしか出会えない奇跡の雪見露天風呂ステイ。標高1,800mの白銀パノラマと乳白色の濃厚硫黄泉「万座プリンスホテル」、川端康成『雪国』の舞台で幻想的な雪見庭園風呂を満喫する「越後湯沢温泉 湯沢グランドホテル」、札幌の奥座敷で定山渓渓谷の冬景色を望む名旅館「章月グランドホテル」。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ冬の極上旅完全ガイド。',
    url: baseUrl + '/furusato-tax-snow-view-open-air-bath-winter-stay',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoSnowViewOpenAirBathStayPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '絶景雪見露天風呂＆冬の秘湯名宿特集', item: baseUrl + '/furusato-tax-snow-view-open-air-bath-winter-stay' },
    ],
  };

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <Link href="/travel-savings-guide" className="hover:text-stone-900 underline transition">旅行節約ハブ</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">絶景雪見露天風呂＆冬の秘湯名宿特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            白銀の銀世界・絶景雪見露天風呂名宿特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            白銀の銀世界に浸る絶景雪見露天風呂＆冬の秘湯名旅館×ふるさと納税完全ガイド【2026年最新】万座・越後湯沢・定山渓
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            日本の冬の旅における究極の風物詩、それが「雪見露天風呂」です。氷点下の凛と張り詰めた冷気の中、頭上から舞い落ちる粉雪を受け止めながら、肩まであたたかい天然温泉に浸かるひととき。顔に当たる冷たい風と身体を包むお湯の温もりのコントラストは、この上ない心地よさを生み出します。標高1,800メートルの高地に位置し「星に一番近い温泉」として白銀の山々を一望する群馬県・万座温泉の「万座プリンスホテル」、国境の長いトンネルを抜けた雪国の名湯で幻想的な雪見庭園露天風呂を誇る新潟県「越後湯沢温泉 湯沢グランドホテル」、そして豊平川の渓谷美と真っ白な雪化粧を眺めながらの名湯三昧が評判の北海道・札幌「定山渓温泉 章月グランドホテル」。雪見露天風呂が楽しめる冬のトップシーズンは人気が高く予約が集中しますが、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を使えば、実質自己負担2,000円で驚くほどお得に銀世界の特等席を予約可能です。静寂とぬくもりに包まれる、一生モノの雪見温泉旅へ出かけましょう。
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
                  「頭寒足熱」の極上バランス！長湯しても疲れにくい理想的な雪見入浴
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                雪見風呂の最大の魅力は、氷点下の外気で頭部がひんやりと冷やされるため、のぼせることなくじっくりと長湯ができること。雪景色を眺めながら静かに心拍を落ち着かせ、身体の芯から温まることで、日頃の自律神経の乱れや冷え性を劇的に改善してくれます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  夕暮れのマジックアワーとライトアップされた夜の白銀世界が息を呑む美しさ
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                雪景色が最も美しく輝くのは夕暮れから夜にかけて。茜色から深い藍色へと空が移り変わるトワイライトタイム、そしてライトアップされた雪や氷柱が青白く輝く幻想的な夜の露天風呂は、まるで別世界に迷い込んだかのような感動的な情景を見せてくれます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  冬限定の味覚！日本海や北の大地の海の幸、身体あたたまる名物鍋料理
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                雪見風呂で身体を清めた後は、熱々の鍋料理や冬の旬魚介を味わう至福のディナータイム。日本海寒鰤のしゃぶしゃぶや越後牛、北海道の毛ガニや海鮮鍋など、寒冷地ならではの濃厚な味わいと地酒の熱燗が身体の隅々まで染み渡ります。
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/30739/30739.jpg"
                  alt="万座温泉　万座プリンスホテル"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 3.79 (2131件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    群馬県嬬恋村・標高1800mの白銀パノラマと乳白色の絶景雪見露天風呂
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    万座温泉　万座プリンスホテル
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    上信越高原国立公園内の標高1,800mに位置し、日本屈指の硫黄含有量を誇る名湯・万座温泉のシンボルホテル。遮るものが何一つない大自然の中に設けられた名物露天風呂「こまくさの湯」からは、真っ白に雪化粧した山々のパノラマと満天の星空が一望できます。乳白色に濁る濃厚な硫黄泉は身体の芯まで温め、湯冷め知らずの心地よさ。ゲレンデ直結の立地のため、スキーやスノーボードを楽しんだ後のアフタースノー温泉ステイとしても絶大な人気を誇ります。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「温泉は最高だが混浴ルールとカニが残念家族で利用しました。妻と娘2人。温泉は凄く良かったですが、団体客なのか混浴ルールが守られておらず家族での混浴はやめました。万座高原ホテルではちゃんとルールが… 2026-09-02 19:47:53投稿 …」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 群馬県吾妻郡嬬恋村万座温泉</div>
                    <div><strong>アクセス:</strong> 北陸新幹線「軽井沢駅南口」より送迎バスあり（約９０分：要事前予約）／上信越自動車道「碓氷軽井沢IC」より約６４km</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約3,893円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D30739"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/38764/38764.jpg"
                  alt="越後湯沢温泉　湯沢グランドホテル＜新潟県＞"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.55 (2438件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    新潟県湯沢町・雪国の風情漂う広大な庭園露天風呂と越後の美味
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    越後湯沢温泉　湯沢グランドホテル＜新潟県＞
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    JR越後湯沢駅から徒歩約3分、川端康成の小説『雪国』の舞台となった歴史ある温泉街に建つ大型名門ホテル。宿の自慢は約500坪の広大な庭園露天風呂で、冬になると庭園の木々や岩が純白の雪で覆われ、湯煙立ち上る幻想的な雪見風呂を満喫できます。大型のサウナやジャグジーも完備。夕食には新潟が誇るコシヒカリや日本海の新鮮魚介、にいがた和牛をふんだんに使った贅沢バイキングや本格会席が振る舞われ、雪国の温かなもてなしに心癒やされます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「リニューアルされた部屋と食事に大満足今回は誕生日祝いもかねて宿泊させて頂きました。部屋はリニューアルされたとても広くてきれいな部屋で、ゆっくりくつろぐ事が出来ました。大浴場と露天風呂、朝夕バイキン… 2026-09-05 23:18:40投…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 新潟県南魚沼郡湯沢町大字湯沢2494</div>
                    <div><strong>アクセス:</strong> 駅から徒歩3分＆湯沢ＩＣから5分！入口はセブンイレブンが目印！※ホテル前の坂道は急なので遠慮なく送迎をご依頼ください。</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約9,680円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D38764"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/2911/2911.jpg"
                  alt="定山渓温泉　章月グランドホテル"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.4 (903件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    北海道札幌市・定山渓渓谷の冬景色と名物ラウンジサービスの老舗旅館
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    定山渓温泉　章月グランドホテル
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    札幌の奥座敷・定山渓温泉の豊平川渓谷沿いに佇み、創業90年の歴史を刻む名門温泉旅館。全客室が渓谷に面しており、窓の外には水墨画のように美しい白銀の雪渓が広がります。源泉かけ流しの露天風呂からは、川のせせらぎと雪が舞い散る風情ある景色を間近に楽しめます。蜂蜜バイキングや夕刻の湯上がりビール、夜のバータイムなど滞在を豊かに彩るラウンジサービスも充実。北海道の旬の味覚を散りばめた創作和食会席とともに贅沢な冬の休日をお過ごしいただけます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「料理が大変おいしかったです。クチコミの詳細はこちらから 2026-09-05 09:04:31投稿 つづきはこちら…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 北海道札幌市南区定山渓温泉東3-239</div>
                    <div><strong>アクセス:</strong> 札幌駅より片道1000円で送迎バス運行！要予約・運休日有／札幌中心部より車で約50分、駐車場有</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約23,650円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D2911"
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

        {/* ふるさと納税クーポン使い方ステップ */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/80 shadow-sm mb-16">
          <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-800 mb-6 text-center">
            ふるさと納税トラベルクーポンの簡単3ステップ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">1</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">旅行先自治体に寄付</h3>
              <p className="text-xs text-stone-600 leading-relaxed">楽天ふるさと納税で泊まりたい宿がある市町村のトラベルクーポンを選んで寄付します。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">2</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">クーポンが付与される</h3>
              <p className="text-xs text-stone-600 leading-relaxed">寄付完了後、楽天トラベルのマイクーポンに即時〜数日で付与（有効期間は3年間）。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">3</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">予約時に割引適用</h3>
              <p className="text-xs text-stone-600 leading-relaxed">宿泊予約画面でクーポンを選択。すでに予約済みの宿でも「あとから適用」が可能です。</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/furusato-tax-travel-beginners-complete-guide"
              className="text-amber-800 font-bold text-xs sm:text-sm hover:underline"
            >
              👉 詳しいお金の流れやワンストップ特例の手順はこちらの完全マニュアルへ
            </Link>
          </div>
        </section>

        {/* 関連特集クロスリンク */}
        <section className="bg-stone-50 rounded-3xl p-8 border border-stone-200/80 mb-16">
          <h2 className="text-lg md:text-xl font-bold font-serif text-stone-800 mb-4">
            あわせて読みたい関連特集
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2">

              <li key="furusato-tax-ski-snowboard-slope-resort-stay">
                <Link href="/furusato-tax-ski-snowboard-slope-resort-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【ゲレンデ直結×白銀リゾート】スキー・スノボ＆雪見露天風呂をふるさと納税で楽しむ旅</span>
                </Link>
              </li>
  

              <li key="furusato-tax-pure-kakenagashi-secret-hotspring-stay">
                <Link href="/furusato-tax-pure-kakenagashi-secret-hotspring-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【源泉かけ流し秘湯×ふるさと納税】加水・加温なしの本物の湯力を堪能する名宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-three-medicinal-hotsprings-stay">
                <Link href="/furusato-tax-three-medicinal-hotsprings-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【日本三薬湯×ふるさと納税】草津・有馬・松之山！圧倒的薬効を誇る治癒の名湯</span>
                </Link>
              </li>
  

              <li key="furusato-tax-winter-crab-gourmet-luxury-stay">
                <Link href="/furusato-tax-winter-crab-gourmet-luxury-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【冬の味覚・活蟹尽くし×ふるさと納税】越前蟹・松葉蟹・間人蟹を堪能する極上宿</span>
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
    </main>
  );
}
