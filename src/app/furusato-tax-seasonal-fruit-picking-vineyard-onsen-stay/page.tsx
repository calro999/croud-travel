import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '果樹園の旬フルーツ狩り＆名門ワイナリー・美肌温泉宿×ふるさと納税完全ガイド【2026年最新】石和・伊豆長岡・飯坂',
  description: '桃・ぶどう・完熟いちご・蜜入りりんご！日本屈指の果樹王国で採れたて旬フルーツの芳醇な甘みと名湯を堪能する大人の贅沢旅。甲州ワインと果樹園の聖地・笛吹市石和温泉の老舗「みなもと旅館」、紅ほっぺや章姫のいちご狩り農園に囲まれた伊豆の国市「招福の宿 ゑびすや」、福島フルーツラインの果樹園群と摺上川の渓谷美を誇る「飯坂温泉 摺上亭 大鳥」。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ果実美酒温泉ステイ。',
  keywords: [
    '旬のフルーツ狩り・果樹園＆ワイナリー温泉宿特集',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '客室露天風呂 予約',
    '温泉旅館 クーポン',
    '高級リゾート 割引'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-seasonal-fruit-picking-vineyard-onsen-stay/' },
  openGraph: {
    title: '果樹園の旬フルーツ狩り＆名門ワイナリー・美肌温泉宿×ふるさと納税完全ガイド【2026年最新】石和・伊豆長岡・飯坂',
    description: '桃・ぶどう・完熟いちご・蜜入りりんご！日本屈指の果樹王国で採れたて旬フルーツの芳醇な甘みと名湯を堪能する大人の贅沢旅。甲州ワインと果樹園の聖地・笛吹市石和温泉の老舗「みなもと旅館」、紅ほっぺや章姫のいちご狩り農園に囲まれた伊豆の国市「招福の宿 ゑびすや」、福島フルーツラインの果樹園群と摺上川の渓谷美を誇る「飯坂温泉 摺上亭 大鳥」。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ果実美酒温泉ステイ。',
    url: baseUrl + '/furusato-tax-seasonal-fruit-picking-vineyard-onsen-stay',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoSeasonalFruitPickingStayPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: 'フルーツ王国果樹園＆ワイナリー美肌温泉特集', item: baseUrl + '/furusato-tax-seasonal-fruit-picking-vineyard-onsen-stay' },
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
          <span className="text-stone-800 font-medium">フルーツ王国果樹園＆ワイナリー美肌温泉特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            旬のフルーツ狩り・果樹園＆ワイナリー温泉宿特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            果樹園の旬フルーツ狩り＆名門ワイナリー・美肌温泉宿×ふるさと納税完全ガイド【2026年最新】石和・伊豆長岡・飯坂
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            春の真っ赤な大粒いちご、初夏の甘美なサクランボ、夏のジューシーな白桃、秋の濃厚なシャインマスカットや巨峰、そして冬の蜜入りりんご――日本各地の果樹園地帯には、四季折々の恵みを五感いっぱいに味わえる素晴らしい旅の舞台が広がっています。日本有数のぶどう・桃の生産量を誇りワイナリー巡りも楽しい山梨県笛吹市・石和温泉の老舗「みなもと旅館」。ハウスいっぱいに甘い香りが漂ういちご狩り農園が点在し、歴史ある美肌の湯が湧く静岡県伊豆の国市・伊豆長岡温泉の「招福の宿 ゑびすや」。そして吾妻連峰の麓に約14kmにわたって果樹園が連なるフルーツラインの玄関口・福島市「飯坂温泉 摺上亭 大鳥」。朝摘みの新鮮なフルーツを心ゆくまで味わい、夕方には肌をしっとりと包み込む名湯露天風呂に浸かり、夕食には地場産ワインやフルーツ仕込みの創作会席を堪能する。楽天ふるさと納税のトラベルクーポン（寄付額の最大30％割引）を使えば、実質自己負担2,000円でこの上なく贅沢なフルーツ＆美肌温泉ステイが実現します。大地の実りに心ほどける、甘く豊かな休日へ出かけましょう。
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
                  スーパーでは絶対に出会えない！樹上で完熟を迎えた「朝採り果実」の圧倒的な濃縮感
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                一般の流通に乗るフルーツは日持ちを考慮して完熟前に収穫されますが、産地の果樹園で食べるフルーツは樹上で限界まで糖度を高めた「本物の完熟品」。指先で触れるだけで果汁があふれ出す桃や、パリッと皮が弾けて甘い果汁が広がる大粒シャインマスカット、果肉の芯まで真っ赤に染まった完熟いちごの芳醇な香りは、産地に足を運んだ人だけが味わえる至高の特権です。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  日本ワイン発祥の地を巡る！ワイナリー併設ショップや試飲ツアーと美肌温泉の共演
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                果樹園のすぐ隣には、その土地の葡萄だけで仕込むクラフトワイナリーが点在。山梨・勝沼や笛吹では、樽出し生ワインの試飲や歴史ある地下セラーの見学が楽しめます。宿に戻れば、アルカリ性単純温泉や塩化物泉などの美肌の湯でリフレッシュ。夕食時にはソムリエが厳選した地元産ワインと旬食材のマリアージュに酔いしれる、大人のための豊かな時間が流れます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  ファミリー・カップル・女子旅に大人気！もぎたて収穫体験とお土産直売所の楽しみ
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                果樹園での収穫体験は、大人から子どもまで誰もが笑顔になれる人気アクティビティ。自分でもぎ取った最高の1果をその場で味わう感動は格別です。農園直営のカフェでいただくフルーツパフェやジェラート、直売所で手に入れる限定ジャムやドライフルーツなど、旅の思い出とともに持ち帰るお土産選びも旅の大きな醍醐味となります。
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/111192/111192.jpg"
                  alt="石和温泉　みなもと旅館"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.15 (81件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    山梨県笛吹市・桃と葡萄の郷・石和温泉の純和風名湯旅館
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    石和温泉　みなもと旅館
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    山梨県屈指の果樹園地帯・笛吹市石和温泉に位置し、緑豊かな日本庭園と手作りの郷土懐石が評判の温もりある名旅館。石和温泉は日本有数のブドウ・桃の産地に囲まれており、シーズン中はいちご狩りや桃狩り、シャインマスカット狩りの観光農園へ車ですぐの好立地。アルカリ性単純温泉のやわらかな天然温泉を引く大浴場や露天風呂で旅の疲れを癒やした後は、山梨名物の甲州牛やほうとう鍋、地元ワイナリーの銘醸甲州ワインを心ゆくまでお楽しみいただけます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「昭和レトロな空間と温かい接客に大満足女将さんやスタッフさんもとても優しく、昭和を感じさせるお部屋ですごく落ちついて宿泊が出来ました!!タイムスリップした感じで色々と楽しませて頂きました!また、行き… 2026-09-02 18:10:06投…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 山梨県笛吹市石和町八田26-3</div>
                    <div><strong>アクセス:</strong> 石和温泉駅より車で5分◇徒歩15分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約6,000円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D111192"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/51448/51448.jpg"
                  alt="伊豆長岡温泉　招福の宿　ゑびすや（えびすや）"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.54 (654件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    静岡県伊豆の国市・完熟いちご狩り街道と古奈の名湯
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    伊豆長岡温泉　招福の宿　ゑびすや（えびすや）
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    静岡県屈指のいちごの産地として知られる伊豆の国市に佇み、平安時代から続く名湯「古奈温泉」の源泉かけ流しを誇る老舗料理旅館。周辺には章姫や紅ほっぺを時間無制限で楽しめる人気のいちご狩り施設が多数集結しています。館内にはヒノキの香り漂う貸切風呂や趣ある大浴場が揃い、肌当たり滑らかな美肌の湯を堪能。夕食には駿河湾から直送される鮮魚のお造りや季節の会席料理が美しく並び、心温まる伊豆の休日を満喫できます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「お風呂と食事は満足、部屋は綺麗だが落ち着かずお風呂も食事も満足です。お部屋は新しくされて綺麗ですが、少し落ち着かない感じでした。クチコミの詳細はこちらから 2026-09-03 19:47:57投稿 つづきはこちら…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 静岡県伊豆の国市古奈1186</div>
                    <div><strong>アクセス:</strong> 東名沼津ＩＣ・新東名長泉沼津ＩＣより車で25分。伊豆箱根鉄道伊豆長岡駅より徒歩２０分・車で５分（１５時～１８時送迎可）</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約6,600円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D51448"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/32116/32116.jpg"
                  alt="飯坂温泉　摺上亭　大鳥"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.35 (708件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    福島県福島市・フルーツラインの桃やりんごと摺上川の渓谷美
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    飯坂温泉　摺上亭　大鳥
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    吾妻連峰の麓に約14kmにわたって広がる果樹園ロード「フルーツライン」の拠点となる飯坂温泉の名旅館。摺上川の清流を望む広大な敷地に、自家源泉から引く開放感あふれる大露天風呂や多彩なサウナ・内湯を完備しています。初夏のさくらんぼ、夏の桃、秋の梨、冬のりんごと、一年を通じて果樹王国ふくしまの恵みを満喫可能。料理人が腕を振るう福島牛や旬の山海の幸を盛り込んだ会席料理は絶品で、極上の癒やしと美食の時間を届けてくれます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「JAグループの宿らしい、きれい清潔で食事が朝も旨い!リピートしたい宿 洋室ツイン「美味の膳」平日24800円/人×2人で利用しました。今年6件目の温泉宿です。 敷地の広さから高級感が感じられま… 2026-08-28 17:58:08投稿 …」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 福島県福島市飯坂町中ノ内24-3</div>
                    <div><strong>アクセス:</strong> 福島交通飯坂線　飯坂温泉駅よりタクシーで5分／東北自動車道　福島飯坂ICよりお車で5分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約11,000円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D32116"
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

              <li key="furusato-tax-winery-craft-beer-auberge-stay">
                <Link href="/furusato-tax-winery-craft-beer-auberge-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【ワイナリー＆クラフトビールオーベルジュ×ふるさと納税】美酒と美肌温泉の極上ペアリング宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-three-great-fruit-kingdoms-auberge-stay">
                <Link href="/furusato-tax-three-great-fruit-kingdoms-auberge-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【日本三大フルーツ王国×ふるさと納税】山梨・山形・長野の果樹園オーベルジュ</span>
                </Link>
              </li>
  

              <li key="furusato-tax-local-gourmet-inn-stay">
                <Link href="/furusato-tax-local-gourmet-inn-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【ご当地グルメ特化宿×ふるさと納税】その土地の旬の味覚を部屋食で味わう名宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-award-winning-breakfast-gourmet-hotel-stay">
                <Link href="/furusato-tax-award-winning-breakfast-gourmet-hotel-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【朝食受賞ホテル×ふるさと納税】地場産フルーツや焼きたてパンが自慢の贅沢モーニング</span>
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
