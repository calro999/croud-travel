import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '本場黒マグロ・生マグロ尽くし会席＆絶景温泉宿×ふるさと納税完全ガイド【2026年最新】大間・那智勝浦・三崎港',
  description: '海のダイヤと称される極上マグロを本場の港町名宿で味わい尽くす！津軽海峡の一本釣り大間マグロと下風呂の白濁硫黄泉を誇る「下風呂観光ホテル 三浦屋」、日本一の生マグロ水揚げ港で専用船で渡る孤島の秘境露天風呂「碧き島の宿 熊野別邸 中の島」、三浦三崎港のまぐろ食べ放題と東京湾オーシャンビュー温泉「マホロバ・マインズ三浦」。大トロ、中トロ、赤身の握りから兜焼き、ねぎま鍋まで、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
  keywords: [
    '本場黒マグロ＆生マグロ食べ尽くし会席宿特集',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '温泉旅館 予約',
    '絶景露天風呂 クーポン',
    '旬の味覚 宿泊割引'
  ],
  alternates: { canonical: baseUrl + '/furusato-tax-brand-maguro-tuna-feast-luxury-inn-stay/' },
  openGraph: {
    title: '本場黒マグロ・生マグロ尽くし会席＆絶景温泉宿×ふるさと納税完全ガイド【2026年最新】大間・那智勝浦・三崎港',
    description: '海のダイヤと称される極上マグロを本場の港町名宿で味わい尽くす！津軽海峡の一本釣り大間マグロと下風呂の白濁硫黄泉を誇る「下風呂観光ホテル 三浦屋」、日本一の生マグロ水揚げ港で専用船で渡る孤島の秘境露天風呂「碧き島の宿 熊野別邸 中の島」、三浦三崎港のまぐろ食べ放題と東京湾オーシャンビュー温泉「マホロバ・マインズ三浦」。大トロ、中トロ、赤身の握りから兜焼き、ねぎま鍋まで、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    url: baseUrl + '/furusato-tax-brand-maguro-tuna-feast-luxury-inn-stay',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function FurusatoBrandMaguroTunaStayPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '本場黒マグロ＆生マグロ会席名宿特集', item: baseUrl + '/furusato-tax-brand-maguro-tuna-feast-luxury-inn-stay' },
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
          <span className="text-stone-800 font-medium">本場黒マグロ＆生マグロ会席名宿特集</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            本場黒マグロ＆生マグロ食べ尽くし会席宿特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            本場黒マグロ・生マグロ尽くし会席＆絶景温泉宿×ふるさと納税完全ガイド【2026年最新】大間・那智勝浦・三崎港
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            寿司ネタの王様にして、日本人が最も愛する海の至宝「マグロ（鮪）」。荒波逆巻く津軽海峡で一本釣りされ、極上の脂乗りと引き締まった身質で世界最高峰の評価を受ける「大間まぐろ」。延縄漁船で生きたまま水揚げされ、一度も冷凍されることなく届けられるモチモチ食感と濃厚な旨味の和歌山県「那智勝浦の生マグロ」。そして遠洋マグロ漁の基地として全国から上質なマグロが集まる神奈川県「三崎港の三崎まぐろ」。極上マグロの本場に佇む温泉旅館では、大トロ・中トロ・赤身の美しいグラデーションのお造りから、香ばしく焼き上げたカマ焼きや希少部位の珍味、旨味出汁で味わうねぎま鍋まで、まさにマグロのすべてを食べ尽くす至福のフルコースが振る舞われます。津軽海峡を望む白濁硫黄泉の老舗「下風呂観光ホテル 三浦屋」、勝浦港から専用船で渡り海中露天風呂と生マグロ解体を堪能できる孤島のリゾート「碧き島の宿 熊野別邸 中の島」、そして三崎まぐろ尽くしビュッフェと広々客室が評判の「マホロバ・マインズ三浦」。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を使って実質自己負担2,000円で賢く予約し、本物のマグロの旨さに酔いしれる贅沢旅へ出かけましょう。
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
                  冷凍とは次元が違う！一度も凍らせない「本場生マグロ」のモチモチとした舌触り
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                港町だからこそ味わえる未冷凍の生マグロは、ドリップが出ないため旨味成分が一切損なわれず、まるで吸い付くような弾力と深い赤身のコクが際立ちます。大トロのきめ細やかな霜降りは口に入れた瞬間に上質な脂の甘みへと昇華します。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  お造り・兜焼き・カマの塩焼き・ねぎま鍋！部位ごとの魅力を知り尽くした料理人の技
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                大トロや中トロの刺身だけでなく、コラーゲンたっぷりの目玉煮付け、濃厚なカマ焼き、希少部位の頬肉ステーキや脳天の握りなど、一頭買いや市場直結だからこそ提供できる多彩なマグロ料理を心ゆくまで堪能できます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  海を望む名湯露天風呂と潮風！旅の情緒を高める絶景ロケーション
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                津軽海峡越しに北海道の山並みを望む硫黄泉、専用船で渡る孤島の波打ち際露天風呂、三浦海岸を見下ろす高台温泉など、いずれの宿も唯一無二の絶景風呂を完備。温泉で心身を解きほぐした後に味わうマグロ会席は格別の幸福感をもたらします。
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/147822/147822.jpg"
                  alt="下風呂観光ホテル　三浦屋"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第1選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.42 (163件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    青森県風間浦村・津軽海峡大間まぐろ尽くしと下風呂温泉の名湯白濁硫黄泉
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    下風呂観光ホテル　三浦屋
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    本州最北端・下北半島の津軽海峡沿いに位置する歴史ある下風呂温泉郷に佇み、名物の津軽海峡本マグロ（大間マグロ）と濃厚な硫黄泉を心ゆくまで堪能できる温泉旅館。夕食には大間産本マグロの大トロ・中トロ・赤身を惜しみなく盛り込んだお造りや、旬の海峡魚介、地元名物のイカ刺しが並び、魚好きを唸らせる圧巻の料理が評判です。源泉かけ流しの乳白色の硫黄泉は大浴場に豊富に注がれ、湯治場として栄えた確かな湯力を実感。津軽海峡の漁火を眺めながら静かな本州最果ての旅情に浸れます。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「下北の味覚と温泉を堪能、最高の旅でした最北の宿目指して来ました温泉は女風呂の硫黄泉は隣りの日帰り温泉の熱湯より更に熱いので水で薄めて入りましたいい湯でした夕飯はウニ甘かった鮑も最高でした 沢山… 2026-09-05 06:55:13投稿 …」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 青森県下北郡風間浦村下風呂70</div>
                    <div><strong>アクセス:</strong> はまなすベイライン大湊線JR下北駅から車で約32km、50分、バスで70分。</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約25,670円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D147822"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5335/5335.jpg"
                  alt="碧き島の宿　熊野別邸　中の島"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第2選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.77 (1511件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    和歌山県那智勝浦町・専用船で渡る孤島の秘境温泉！生マグロ会席と海中絶景露天
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    碧き島の宿　熊野別邸　中の島
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    南紀勝浦港から専用送迎船でわずか数分、波静かな勝浦湾に浮かぶ周囲数キロの島全体がひとつのリゾートとなっている非日常の宿。日本有数の生マグロ水揚げ港・勝浦ならではの、獲れたて生マグロを中心とした贅沢会席が自慢で、冷凍では絶対に味わえない極上の食感と脂の甘みを満喫できます。最大のハイライトは、潮の満ち引きで表情を変える海中露天風呂「紀州潮聞之湯」。打ち寄せる波の音を間近に聴きながら源泉かけ流しの美肌湯に浸かる時間は、まさに夢のような至福のひとときです。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「露天風呂露天風呂は 広々とした方が午後3時から当日女性が入れます。何度もゆったりと海を眺めながら 湯浴み着で安心にのびのび温泉三昧できます。食事もお刺身はもっちりしていて 後のお肉もお楽し… 2026-08-31 20:49:24投稿 つづ…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 和歌山県東牟婁郡那智勝浦町勝浦1179-9</div>
                    <div><strong>アクセス:</strong> ＪＲ紀勢本線紀伊勝浦駅から徒歩７分。観光桟橋より専用船約5分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約32,910円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D5335"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/13569/13569.jpg"
                  alt="マホロバ・マインズ三浦"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  厳選名宿 第3選
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ 4.2 (2675件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    神奈川県三浦市・三崎港直送まぐろ食べ放題と東京湾オーシャンビュー温泉リゾート
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    マホロバ・マインズ三浦
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    都心から約1時間、三浦海岸駅より徒歩約6分の好立地に建ち、全室オーシャンビューの本館をはじめ広々とした客室を誇る人気温泉リゾート。夕食バイキングでは、三浦三崎港直送の上質なマグロを刺身やお寿司で心ゆくまで味わえる「まぐろ食べ放題」が大好評。自家源泉の天然温泉大浴場や露天風呂、屋内温水プールなど充実したウェルネス施設も魅力です。都心からのアクセスが抜群で、気軽に本場の三崎まぐろと温泉旅を両立させたいファミリーやカップルに圧倒的な支持を集めています。
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    「部屋が広く接客も丁寧で大満足部屋がとても広く大変満足しました。フロントの接客も丁寧で問題にも早急に対応していただけました。クチコミの詳細はこちらから 2026-09-05 18:14:11投稿 つづきはこちら…」
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> 神奈川県三浦市南下浦町上宮田3231</div>
                    <div><strong>アクセス:</strong> 京浜急行線「三浦海岸駅」より徒歩7分（無料送迎バスあり） / 横浜・横須賀道路 佐原ICより１５分</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約8,300円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F54d2a438.4bc4abc2.54d2a439.aa1be583%2F%3Fpc%3Dhttps%253A%252F%252Fimg.travel.rakuten.co.jp%252Fimage%252Ftr%252Fapi%252Fkw%252FJBe8h%252F%253Ff_no%253D13569"
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

              <li key="furusato-tax-fresh-oyster-feast-luxury-gourmet-stay">
                <Link href="/furusato-tax-fresh-oyster-feast-luxury-gourmet-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【名産地牡蠣尽くし会席×ふるさと納税】生牡蠣・焼き牡蠣と名湯の旅</span>
                </Link>
              </li>
  

              <li key="furusato-tax-winter-crab-gourmet-luxury-stay">
                <Link href="/furusato-tax-winter-crab-gourmet-luxury-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【冬の味覚・活蟹尽くし×ふるさと納税】越前蟹・松葉蟹・間人蟹の名宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-torafugu-kaiseki-luxury-gourmet-stay">
                <Link href="/furusato-tax-torafugu-kaiseki-luxury-gourmet-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【天然とらふぐ会席×ふるさと納税】てっさ・てっちり・ひれ酒の贅沢宿</span>
                </Link>
              </li>
  

              <li key="furusato-tax-fresh-sushi-kaiseki-gourmet-inn-stay">
                <Link href="/furusato-tax-fresh-sushi-kaiseki-gourmet-inn-stay" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">【極上寿司会席×ふるさと納税】港町直結の職人握りと名湯温泉宿</span>
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
