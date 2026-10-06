import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の京都】嵐山・嵯峨野の錦秋渡月橋と保津川下り！紅葉名所を満喫するおすすめ温泉・極上宿5選【2026最新】',
  description: '京都の秋を代表する嵐山・渡月橋の山粧う紅葉美と保津川下り。天龍寺の曹源池庭園や嵯峨野竹林の小径散策に最適な嵐山温泉の厳選宿5選。翠嵐、花伝抄など人気宿の宿泊料金・アクセス・魅力を徹底比較解説！',
  keywords: '嵐山 紅葉, 京都 嵯峨野 温泉, 渡月橋 紅葉 宿, 保津川下り 観光, 翠嵐 ラグジュアリーコレクション, 嵐山温泉 花伝抄',
  openGraph: {
    title: '【秋の京都】嵐山・嵯峨野の錦秋渡月橋と保津川下り！紅葉名所を満喫するおすすめ温泉・極上宿5選【2026最新】',
    description: '京都の秋を代表する嵐山・渡月橋の山粧う紅葉美と保津川下り。天龍寺の曹源池庭園や嵯峨野竹林の小径散策に最適な嵐山温泉の厳選宿5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-kyoto-arashiyama-sagano-momiji-onsen-hotels-stay',
  }
};

export default function KyotoArashiyamaAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/158466/158466.jpg"
          alt="秋の京都嵐山・渡月橋と保津川沿いの錦秋風景"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">秋の京都特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">見頃目安: 11月中旬〜12月上旬</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の京都】嵐山・嵯峨野の錦秋渡月橋と保津川下り！紅葉名所を満喫するおすすめ温泉・極上宿5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            五山を借景に朱や黄金色に染まる嵐山と大堰川を渡る秋風。早朝の静寂に包まれる天龍寺曹源池庭園や竹林の小径、保津川渓谷を船で下る紅葉美を心ゆくまで堪能できる名宿をご紹介します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">嵐山・嵯峨野紅葉と名宿5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-amber-600 pl-3">
            秋の嵐山が人々を魅了し続ける理由と混雑回避のポイント
          </h2>
          <p className="mb-4 text-stone-700">
            平安の昔から貴族の別荘地として愛されてきた嵐山。秋の深まりとともに小倉山や嵐山の山肌一面がパッチワークのように色づき、大堰川の水面に鮮やかな紅葉が映り込みます。特に世界遺産・天龍寺の曹源池庭園から望む嵐山の借景紅葉や、宝厳院の「獅子吼の庭」のライトアップ、嵯峨野トロッコ列車や保津川下りは圧巻です。
          </p>
          <p className="text-stone-700">
            例年11月中旬から12月上旬にかけてピークを迎える嵐山は国内外から大勢の観光客が訪れます。そこで最大の秘訣は**「嵐山エリアに前泊すること」**。早朝7時台の渡月橋や竹林の小径は日中の混雑が嘘のように静まり返り、息を呑むほど神聖な錦秋の景色を独り占めできます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-amber-600 rounded-full inline-block"></span>
            楽天トラベル高評価！嵐山・嵯峨野の厳選宿5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/158466/158466.jpg"
                  alt="翠嵐ラグジュアリーコレクションホテル京都"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-stone-900/90 text-amber-300 font-bold px-2.5 py-1 rounded text-xs shadow">
                  厳選第1選
                </span>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500 font-bold text-sm">★ 4.71</span>
                    <span className="text-stone-400 text-xs">(31件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    翠嵐ラグジュアリーコレクションホテル京都
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 嵐山（京福電気鉄道）駅 / 京福電鉄嵐山本線 嵐山駅 より徒歩約６分　阪急嵐山線 嵐山駅  、JR山陰本線 嵯峨野線  嵯峨嵐山駅 より徒歩約15分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    京都の歴史に育まれた伝統とモダンの美が融け合う空間で、この地ならではの格別な体験をご提供いたします。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥64,895〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158466%2F158466.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/130702/130702.jpg"
                  alt="京都　嵐山温泉　花伝抄（共立リゾート）（２０２６年５月１日リニューアルオープン）"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-stone-900/90 text-amber-300 font-bold px-2.5 py-1 rounded text-xs shadow">
                  厳選第2選
                </span>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500 font-bold text-sm">★ 4.46</span>
                    <span className="text-stone-400 text-xs">(1983件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    京都　嵐山温泉　花伝抄（共立リゾート）（２０２６年５月１日リニューアルオープン）
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 嵐山（阪急）駅 / 阪急嵐山線「嵐山駅」より徒歩１分。JR「京都駅」より約30分、阪急「梅田駅」より約50分。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    渡月橋まで徒歩約5分！目の前の阪急嵐山駅より京都の中心街まですぐ！天然温泉と5つの貸切風呂が無料！
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥21,200〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F130702%2F130702.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/18908/18908.jpg"
                  alt="京都嵐山　花のいえ"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-stone-900/90 text-amber-300 font-bold px-2.5 py-1 rounded text-xs shadow">
                  厳選第3選
                </span>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500 font-bold text-sm">★ 4.42</span>
                    <span className="text-stone-400 text-xs">(111件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    京都嵐山　花のいえ
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 嵯峨嵐山駅 / ＪＲ嵯峨野線（山陰線）「嵯峨嵐山」駅南口より徒歩７分／阪急電車嵐山線「嵐山」駅より徒歩１２分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    【渡月橋すぐ】全21室の純和風旅館。歴史情緒に包まれ味わう京会席。京の風情に浸る特別なひとときを。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥12,644〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18908%2F18908.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/73923/73923.jpg"
                  alt="嵐山温泉彩四季の宿　花筏"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-stone-900/90 text-amber-300 font-bold px-2.5 py-1 rounded text-xs shadow">
                  厳選第4選
                </span>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500 font-bold text-sm">★ 4.25</span>
                    <span className="text-stone-400 text-xs">(315件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    嵐山温泉彩四季の宿　花筏
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 嵯峨嵐山駅 / 阪急嵐山駅より徒歩５分（渡月橋渡らず）、ＪＲ嵯峨嵐山駅より徒歩約１５分(渡月橋渡る)。JR京都駅３０分、阪急梅田駅５０分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    嵐山散策に便利な渡月橋南詰に位置し、嵐山温泉と京懐石が自慢の癒しの宿。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥26,400〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73923%2F73923.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/144950/144950.jpg"
                  alt="ホテル　ビナリオ嵯峨嵐山"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-stone-900/90 text-amber-300 font-bold px-2.5 py-1 rounded text-xs shadow">
                  厳選第5選
                </span>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-500 font-bold text-sm">★ 4.23</span>
                    <span className="text-stone-400 text-xs">(922件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテル　ビナリオ嵯峨嵐山
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 嵯峨嵐山駅 / JR嵯峨嵐山駅・トロッコ嵯峨駅：徒歩約1分、嵐電・嵯峨駅：徒歩約3分、JR京都駅から快速約12分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    JR嵯峨嵐山駅前で便利！館内に大��場や創作和食レストラン完備で宿でゆっくり過ごしたい人におすすめです
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥5,280〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F144950%2F144950.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="bg-stone-100 p-6 md:p-8 rounded-2xl border border-stone-200 mb-10 leading-relaxed text-sm text-stone-700">
          <h3 className="text-base font-bold text-stone-900 mb-3">嵐山・嵯峨野の秋旅アドバイス</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>保津川下り＆トロッコ列車:</strong> 亀岡から保津川下りで嵐山へ舟下りするルートは紅葉の時期に大人気のため事前予約が必須です。</li>
            <li><strong>夜間特別拝観:</strong> 大覚寺の大沢池ライトアップや宝厳院の夜間ライトアップなど、夜の紅葉も見どころ満載です。</li>
            <li><strong>湯豆腐と京料理:</strong> 清涼な水で仕込まれた京都名物の湯豆腐会席で、冷え込んだ秋の身体を芯から温めましょう。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
