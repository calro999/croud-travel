import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '秋の倉敷美観地区×格安：白壁の町並み紅葉と大原美術館！大浴場付き1泊4,000円〜7,000円台のコスパ最強ホテル5選「2026最新」',
  description: '倉敷川沿いの柳並木と紅葉のコントラスト、レトロな白壁の町並み散策！名物ぶっかけうどんや岡山フルーツパフェを満喫。大浴場や天然温泉付きで1泊4,000円〜7,000円台で泊まれる倉敷のコスパ最強ホテル5選。ロイヤルパークホテル倉敷、ドーミーイン倉敷などを徹底比較！',
  keywords: '倉敷 格安 ホテル, 倉敷美観地区 宿泊 安い, 倉敷 大浴場 ホテル, 大原美術館 紅葉, ロイヤルパークホテル倉敷, ドーミーイン倉敷',
  openGraph: {
    title: '秋の倉敷美観地区×格安：白壁の町並み紅葉と大原美術館！大浴場付き1泊4,000円〜7,000円台のコスパ最強ホテル5選「2026最新」',
    description: '白壁の町並み紅葉と大原美術館！大浴場付き1泊4,000円〜7,000円台のコスパ最強倉敷ホテル5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-budget-okayama-kurashiki-bikan-large-bath-hotels-stay',
  }
};

export default function KurashikiBudgetAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/181244/181244.jpg"
          alt="秋の倉敷美観地区・白壁の町並みと大浴場付き格安ホテル"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">格安・中国特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">1泊目安: 4,000円台〜7,000円台</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">「秋の倉敷美観地区×格安」白壁の町並み紅葉と大原美術館！大浴場付き1泊4,000円〜7,000円台のコスパ最強ホテル5選</h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            倉敷川の水面に映る白壁土蔵と鮮やかな紅葉の錦。大原美術館の名画鑑賞や本町通りの町屋カフェ巡りを楽しみ、足を伸ばせる大浴場で寛げる倉敷のコスパ最強ホテルをご紹介します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">倉敷格安大浴場ホテル5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-teal-600 pl-3">
            秋の美観地区は「早朝散策×大浴場ホテル」が最も快適
          </h2>
          <p className="mb-4 text-stone-700">
            江戸情緒を今に残す「倉敷美観地区」。秋になると柳並木の緑にイチョウやハゼの紅葉が加わり、白壁や格子窓との対比が一層際立ちます。日中は多くの観光客で賑わいますが、倉敷駅周辺のホテルに宿泊すれば、朝靄の残る静寂の美観地区を独り占めできるのが最大の魅力です。
          </p>
          <p className="text-stone-700">
            倉敷駅前には天然温泉大浴場やサウナを備えたハイクオリティなホテルが点在。1泊4,000円台から泊まれるプランも多く、浮いた予算で岡山名産のシャインマスカットパフェや瀬戸内の鰆（サワラ）料理を贅沢に味わえます。
          </p>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">備中・天領町並みガイド：白壁と柳並木の町並み保存地区・倉敷美観地区</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Kurasiki_morning01.JPG/1280px-Kurasiki_morning01.JPG"
                alt="白壁と柳並木の町並み保存地区・倉敷美観地区"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">白壁と柳並木の町並み保存地区・倉敷美観地区の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">倉敷美観地区（くらしきびかんちく、Kurashiki Bikan historical quarter）は、岡山県倉敷市にある町並保存地区・観光地区である。 当エリアは倉敷市の美観地区景観条例にもとづき定められたもので、同市本町全域、中央1丁目北部（前神町など）、東町・阿知2丁目・鶴形2丁目の各一部が含まれる。広義の美観地区の面積は21.0ヘクタールで、うち伝統的建造物群保存地区（第一種美観地区）が15.0ヘクタール、伝統美観保存地区（第二種美観地区）が6.0ヘクタールとなっている。伝統的建造物群保存地区（倉敷川周辺）は倉敷川畔伝統的建造物群保存地区（くらしきがわはん でんとうてきけんぞうぶつぐん ほぞんちく）の名称で国の重要伝統的建造物群保存地区として選定されている。 江戸時代初期の寛永19年（1642年）、江戸幕府の天領に定められた際に倉敷代官所が当地区に設けられ、以来備中国南部の物資の集散地として発展した歴史を持つ。倉敷川の畔から鶴形山南側の街道一帯に白壁なまこ壁の屋敷や蔵が並び、天領時代の町並みをよく残している。1969年に倉敷市の条例に基づき美観地区に定められ、1979年（昭和54年）に県内2件目の重要伝統的建造物群保存地区として選定された。 また、1930年（昭和5年）に建てられた日本最初の西洋美術館大原美術館や1888年（明治21年）に代官所跡地に建てられた旧倉敷紡績工場の建物を改修・再利用した観光施設倉敷アイビースクエア等も当地区を代表する建築物である。</p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-teal-700 font-semibold">現地観光・散策推奨スポット</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-teal-600 rounded-full inline-block"></span>
            楽天トラベル高評価！倉敷の大浴場付き格安ホテル5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/80773/80773.jpg"
                  alt="天然温泉　桃太郎の湯　スーパーホテルＩｎｎ倉敷水島"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-stone-900/90 text-teal-300 font-bold px-2.5 py-1 rounded text-xs shadow">
                  コスパ第1選
                </span>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500 font-bold text-sm">★ 4</span>
                    <span className="text-stone-400 text-xs">(1233件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天然温泉　桃太郎の湯　スーパーホテルＩｎｎ倉敷水島
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 栄（岡山）駅 / 水島臨海鉄道 栄駅より徒歩にて2分 / 瀬戸中央道 水島ICより10分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    駐車場、天然温泉、健康朝食バイキングがすべて無料！！※天然温泉は月～金は終日男性専用です※
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,210〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F80773%2F80773.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/178392/178392.jpg"
                  alt="たびのホテル倉敷水島"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-stone-900/90 text-teal-300 font-bold px-2.5 py-1 rounded text-xs shadow">
                  コスパ第2選
                </span>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500 font-bold text-sm">★ 4.33</span>
                    <span className="text-stone-400 text-xs">(851件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    たびのホテル倉敷水島
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 常盤（岡山）駅 / 水島臨海鉄道水島本線常盤駅より徒歩5分。瀬戸内中央自動車道水島ICより約14分。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    約30種類の手作り朝食が人気◎コンビニ隣接◆大浴場＆無料駐車場有り◆大型車両もOK（有料・要予約）
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,180〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178392%2F178392.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/181244/181244.jpg"
                  alt="ロイヤルパークホテル倉敷"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-stone-900/90 text-teal-300 font-bold px-2.5 py-1 rounded text-xs shadow">
                  コスパ第3選
                </span>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500 font-bold text-sm">★ 4.45</span>
                    <span className="text-stone-400 text-xs">(1210件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ロイヤルパークホテル倉敷
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 倉敷駅 / 【商店街アーケード直結】倉敷駅より徒歩にて約５分　
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    2020年11月Open★倉敷駅前・商店街アーケード直結の好立地。絶景ラウンジで優雅な朝食を
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥6,015〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181244%2F181244.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/182714/182714.jpg"
                  alt="ホテル　グラン・ココエ倉敷"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-stone-900/90 text-teal-300 font-bold px-2.5 py-1 rounded text-xs shadow">
                  コスパ第4選
                </span>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500 font-bold text-sm">★ 4.38</span>
                    <span className="text-stone-400 text-xs">(987件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテル　グラン・ココエ倉敷
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 倉敷駅 / 山陽本線ＪＲ倉敷駅から徒歩で３分。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    JR倉敷駅から徒歩3分、湯と癒しの上質なひとときを♪　ビジネス・観光に最適なホテルです。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥6,700〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182714%2F182714.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/72042/72042.jpg"
                  alt="天然温泉　阿智の湯　ドーミーイン倉敷"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-stone-900/90 text-teal-300 font-bold px-2.5 py-1 rounded text-xs shadow">
                  コスパ第5選
                </span>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500 font-bold text-sm">★ 4.36</span>
                    <span className="text-stone-400 text-xs">(4350件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天然温泉　阿智の湯　ドーミーイン倉敷
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 倉敷駅 / JR倉敷駅南口より徒歩7分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    2025年4月リニューアルオープン！サウナ付き天然温泉大浴場完備。美観地区まで徒歩１分。朝食も人気。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥7,345〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72042%2F72042.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="bg-stone-100 p-6 md:p-8 rounded-2xl border border-stone-200 mb-10 leading-relaxed text-sm text-stone-700">
          <h3 className="text-base font-bold text-stone-900 mb-3">倉敷秋旅の散策ポイント</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>くらしき川舟流し:</strong> 菅笠をかぶって川舟から眺める白壁の町並みは風情たっぷり。チケットは当日朝に観光案内所で販売されます。</li>
            <li><strong>倉敷アイビースクエア:</strong> 明治の紡績工場を改装した複合施設で、赤レンガの壁面を覆うツタが見事に紅葉します。</li>
            <li><strong>倉敷デニムストリート:</strong> 児島産デニム製品のショップが並び、名物「デニムまん」や「デニムソフト」の食べ歩きが人気です。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
