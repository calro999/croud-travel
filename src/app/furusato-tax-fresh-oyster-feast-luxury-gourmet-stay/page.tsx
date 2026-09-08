import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '本場名産地で味わう極上牡蠣尽くし会席＆生牡蠣・焼き牡蠣の贅沢温泉宿×ふるさと納税完全ガイド【2026年最新】宮島・伊勢志摩・三陸気仙沼',
  description: '海のミルクと称される濃厚な旬牡蠣を本場の名宿で堪能！世界遺産・厳島神社の参道に佇み広島牡蠣と伝統の数寄屋建築を誇る「宮島グランドホテル 有もと」、的矢かき・本浦かきの本場として知られる鳥羽の自家源泉美肌宿「サン浦島 悠季の里」、世界三大漁場・三陸の栄養豊かな大粒牡蠣を味わう気仙沼大島「旅館 椿荘花月」。ぷりぷりの生牡蠣、香ばしい焼き牡蠣、サクサクのカキフライに熱々牡蠣鍋。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
  keywords: [
    '名産地・生牡蠣＆焼き牡蠣尽くし会席宿特集',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '温泉旅館 予約',
    '絶景露天風呂 クーポン',
    '旬の味覚 宿泊割引'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-fresh-oyster-feast-luxury-gourmet-stay' },
  openGraph: {
    title: '本場名産地で味わう極上牡蠣尽くし会席＆生牡蠣・焼き牡蠣の贅沢温泉宿×ふるさと納税完全ガイド【2026年最新】宮島・伊勢志摩・三陸気仙沼',
    description: '海のミルクと称される濃厚な旬牡蠣を本場の名宿で堪能！世界遺産・厳島神社の参道に佇み広島牡蠣と伝統の数寄屋建築を誇る「宮島グランドホテル 有もと」、的矢かき・本浦かきの本場として知られる鳥羽の自家源泉美肌宿「サン浦島 悠季の里」、世界三大漁場・三陸の栄養豊かな大粒牡蠣を味わう気仙沼大島「旅館 椿荘花月」。ぷりぷりの生牡蠣、香ばしい焼き牡蠣、サクサクのカキフライに熱々牡蠣鍋。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    url: baseUrl + '/furusato-tax-fresh-oyster-feast-luxury-gourmet-stay',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoFreshOysterFeastStayPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '名産地牡蠣尽くし会席＆温泉宿特集', item: baseUrl + '/furusato-tax-fresh-oyster-feast-luxury-gourmet-stay' },
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
          <span className="text-stone-800 font-medium">名産地牡蠣尽くし会席＆温泉宿特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            名産地・生牡蠣＆焼き牡蠣尽くし会席宿特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            本場名産地で味わう極上牡蠣尽くし会席＆生牡蠣・焼き牡蠣の贅沢温泉宿×ふるさと納税完全ガイド【2026年最新】宮島・伊勢志摩・三陸気仙沼
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            冬から春先にかけて最も旨味が凝縮される「海のミルク」こと牡蠣（カキ）。レモンを絞ってちゅるんといただく朝獲れの新鮮な生牡蠣、炭火の上でパチパチと音を立てながら香ばしい潮の香りを放つ焼き牡蠣、サクッとした衣の中から熱々の濃厚ミルクが溢れ出すカキフライ、そして旨味が溶け出した出汁で炊き上げる絶品の牡蠣ご飯――その贅沢極まりない味わいは、牡蠣好きならずとも心奪われる至福の冬の味覚です。世界遺産・厳島神社へ徒歩すぐの宮島で創業三百年の歴史を紡ぐ「宮島グランドホテル 有もと」、伊勢志摩の豊かな自然が育むブランド牡蠣「本浦牡蠣・的矢牡蠣」を自家源泉の美肌湯とともに味わう三重県鳥羽の「サン浦島 悠季の里」、そして森と海の栄養が溶け込む三陸リアス海岸で大粒の濃厚牡蠣を振る舞う宮城県気仙沼大島の「旅館 椿荘花月」。産地だからこそ体験できる別格の鮮度と圧倒的なボリュームの牡蠣フルコースを、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期間3年）を使って実質自己負担2,000円で賢く満喫しましょう。
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
                  生・焼き・揚げ・蒸し・鍋！一晩で牡蠣をあらゆる調理法で食べ尽くす贅沢
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                本場の牡蠣会席宿の真骨頂は、素材の良さを知り尽くした料理人による多彩なバリエーション。濃厚な甘みの生牡蠣、香ばしい殻付き焼き牡蠣、自家製タルタルでいただく大粒カキフライ、味噌仕立ての土手鍋や澄まし鍋、そして牡蠣の釜飯まで、牡蠣の魅力を五感で味わい尽くせます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  リアス式海岸と豊かな森が育む「安心・安全な極上ブランド牡蠣」
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                広島湾、伊勢志摩的矢湾、三陸気仙沼湾はいずれも背後に広大な照葉樹林や山々を抱え、植物プランクトンが極めて豊富な日本屈指の清浄海域。紫外線殺菌など徹底した衛生管理のもとで出荷されるブランド牡蠣は、エグみが一切なく、澄んだ甘みとクリーミーなコクが際立ちます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  世界遺産の絶景や穏やかな海景に抱かれながら浸かる名湯露天風呂
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                宮島の厳島神社大鳥居、伊勢志摩の波静かな入り江、三陸の美しい海岸線。昼は絶景観光を満喫し、夕暮れには美肌の天然温泉に身を浸してリフレッシュ。地元の銘酒とともにいただく熱々の牡蠣料理は、旅の幸福感を最高潮に高めてくれます。
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/18848/18848.jpg"
                  alt="宮島グランドホテル　有もと"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.58 (1281件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    広島県廿日市市・宮島厳島神社に最も近い創業三百年の老舗名門旅館
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    宮島グランドホテル　有もと
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    日本三景・宮島の嚴島神社まで徒歩約3分という絶好のロケーションに建つ、江戸時代初期創業の歴史ある数寄屋造り旅館。宮島名物の大粒で濃厚な広島牡蠣をふんだんに盛り込んだ贅沢な会席料理が自慢で、香ばしい焼き牡蠣やジューシーなカキフライ、出汁の効いた牡蠣鍋など本場の味を心ゆくまで堪能できます。雅な和の風情漂う客室露天風呂や広々とした大浴場で旅の疲れを癒やし、夜にはライトアップされた大鳥居の幻想的な姿を散策できる至高の宮島ステイが叶います。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「ケトルの沸騰が遅く電源も切れない部屋のケトル湧くのが遅い湧いて居るけど、電源が切れてなくずっと湧いたままになってます。よろしくお願い致しますクチコミの詳細はこちらから 2026-09-05 06:18:15投稿 つづきはこちら…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 広島県廿日市市宮島町南町364</div>
                    <div><strong>アクセス:</strong> 宮島口桟橋よりフェリーで１０分～宮島桟橋よりマイクロバスにて送迎</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約14,200円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D18848"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8647/8647.jpg"
                  alt="鳥羽本浦温泉　サン浦島　悠季の里"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.65 (1020件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    三重県鳥羽市・的矢かき＆本浦かきの本場・二つの自家源泉を持つ美肌名宿
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    鳥羽本浦温泉　サン浦島　悠季の里
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    伊勢志摩・鳥羽の本浦湾を望む静かな岬に佇む、二つの異なる自家源泉「珠光の湯」「新珠光の湯」を誇る高級温泉旅館。冬の風物詩であるブランド牡蠣「本浦牡蠣」「的矢牡蠣」を贅沢に使った特別料理は絶品で、ぷりぷりの生牡蠣や焼き牡蠣、伊勢海老や鮑の造りとともに豪華絢爛なディナーを堪能できます。アルカリ性のトロトロとした美肌温泉に浸かりながら穏やかな海の情景を眺める時間は格別の贅沢。伊勢神宮参拝とあわせた大人の美食旅に最適です。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「海を眺めながらの食事とゆったり温泉を満喫館内全体的にきれいでした。部屋から海を観ながら食事をいただきました。どれも美味しかったです。温泉も混雑せずゆったり浸かれました。クチコミの詳細はこちらか… 2026-09-02 20:16:25投稿 …」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 三重県鳥羽市本浦温泉</div>
                    <div><strong>アクセス:</strong> 伊勢自動車道→伊勢二見鳥羽ライン→直進約２５分/近鉄鳥羽駅1番出口より無料送迎バス約20分（要予約）15時16時17時</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約19,662円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8647"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8017/8017.jpg"
                  alt="気仙沼大島　旅館　椿荘花月"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.2 (65件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    宮城県気仙沼市・三陸リアス海岸の栄養豊かな大粒牡蠣と獲れたて海の幸
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    気仙沼大島　旅館　椿荘花月
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    気仙沼大島の美しい自然に包まれた、獲れたての三陸魚介と心温まるおもてなしが評判の料理旅館。気仙沼湾の豊かな森から流れ込むミネラルで育った大粒牡蠣は、クリーミーで濃厚な甘みが特徴。殻付き焼き牡蠣やカキフライ、フカヒレ料理など三陸が誇る世界最高峰の海の恵みをテーブルいっぱいに味わえます。気仙沼大島大橋の開通によりアクセスも快適になり、雄大な太平洋のパノラマを望みながら素朴で贅沢な海辺の休日をお過ごしいただけます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    訪れるすべてのお客様に心安らぐ贅沢な寛ぎの時間を提供し、高い評価を獲得している極上宿です。
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 宮城県気仙沼市大島長崎81-1</div>
                    <div><strong>アクセス:</strong> 東北自動車道一関ＩＣ～Ｒ２８４～気仙沼～気仙沼大島大橋～気仙沼大島</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約9,900円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D8017"
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

              <li key="furusato-tax-torafugu-kaiseki-luxury-gourmet-stay">
                <Link href="/furusato-tax-torafugu-kaiseki-luxury-gourmet-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【本場天然とらふぐ尽くし×ふるさと納税】大皿てっさ＆ひれ酒名宿ガイド</span>
                </Link>
              </li>
  

              <li key="furusato-tax-winter-crab-gourmet-luxury-stay">
                <Link href="/furusato-tax-winter-crab-gourmet-luxury-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【冬の味覚・活蟹尽くし×ふるさと納税】越前蟹・松葉蟹・間人蟹を堪能する極上宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-fresh-sushi-kaiseki-gourmet-inn-stay">
                <Link href="/furusato-tax-fresh-sushi-kaiseki-gourmet-inn-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【漁港直送・極上寿司会席×ふるさと納税】職人握りと名湯温泉宿完全ガイド</span>
                </Link>
              </li>
  

              <li key="furusato-tax-three-scenic-views-heritage-stay">
                <Link href="/furusato-tax-three-scenic-views-heritage-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【日本三景の名宿×ふるさと納税】松島・天橋立・宮島を巡る歴史と美景の旅</span>
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
