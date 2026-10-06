import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の福岡・博多×格安】太宰府の紅葉と中洲屋台グルメ！天然温泉＆大浴場付き1泊6,000円台〜のコスパ最強ホテル5選【2026最新】',
  description: '太宰府天満宮や竈門神社の鮮やかな紅葉散策と、夜の中洲・天神屋台めぐり（もつ鍋・水炊き・豚骨ラーメン）！歩き疲れた身体を癒やす天然温泉や大浴場付きで1泊6,000円〜7,000円台の高評価ホテル5選。八百治博多、ホテル・トリフィートなど厳選宿を徹底比較！',
  keywords: '福岡 格安 ホテル, 博多 大浴場 ホテル, 太宰府天満宮 紅葉, 博多 屋台 宿, 八百治博多ホテル, ホテルトリフィート博多祇園',
  openGraph: {
    title: '【秋の福岡・博多×格安】太宰府の紅葉と中洲屋台グルメ！天然温泉＆大浴場付き1泊6,000円台〜のコスパ最強ホテル5選【2026最新】',
    description: '太宰府天満宮の紅葉と中洲屋台グルメ！大浴場・温泉付き1泊6,000円台〜のコスパ最強博多ホテル5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-budget-fukuoka-hakata-gourmet-onsen-hotels-stay',
  }
};

export default function FukuokaBudgetAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/180583/180583.jpg"
          alt="秋の福岡博多・太宰府の紅葉と天然温泉付き格安ホテル"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">格安・九州特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">1泊目安: 6,000円台〜7,000円台</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の福岡・博多×格安】太宰府の紅葉と中洲屋台グルメ！天然温泉＆大浴場付き1泊6,000円台〜のコスパ最強ホテル5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            太宰府天満宮や「鬼滅の刃」の聖地としても知られる竈門神社の紅葉ライトアップ。夜は中洲や天神の屋台街で博多グルメを食べ尽くし、大浴場や天然温泉で癒やされる博多の高コスパホテルをご紹介します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">博多格安大浴場ホテル5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-teal-600 pl-3">
            秋の博多は「昼は古都の紅葉、夜は屋台グルメ」が最高
          </h2>
          <p className="mb-4 text-stone-700">
            博多駅から西鉄電車や直行バスでアクセスできる太宰府エリアは、11月中旬から下旬にかけて鮮やかな紅葉が見頃を迎えます。特に太宰府天満宮の心字池にかかる太鼓橋と紅葉、竈門神社の紅葉のトンネルは九州を代表する名所です。
          </p>
          <p className="text-stone-700">
            夜の博多はもつ鍋、水炊き、一口餃子、長浜ラーメンなど食の宝庫。大浴場完備のホテルを拠点にすれば、夜遅くまで屋台巡りを楽しんだ後も足を伸ばしてゆっくりリフレッシュできます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-teal-600 rounded-full inline-block"></span>
            楽天トラベル高評価！博多の大浴場付き格安ホテル5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/180583/180583.jpg"
                  alt="ホテル・トリフィート博多祇園"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.15</span>
                    <span className="text-stone-400 text-xs">(814件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテル・トリフィート博多祇園
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 祇園（福岡）駅 / ■地下鉄「祇園駅」徒歩5分■西鉄バス停「奥の堂」徒歩3分■福岡空港 地下鉄利用で最短15分■マリンメッセまでバスで7分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ■大浴場完備■自慢の朝食■ 地下鉄「祇園駅」徒歩5分「櫛田神社前」徒歩6分■3名宿泊可■無料WIFI
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥6,050〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180583%2F180583.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/163065/163065.jpg"
                  alt="スーパーホテルＰｒｅｍｉｅｒ博多駅・筑紫口天然温泉"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.29</span>
                    <span className="text-stone-400 text-xs">(2248件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    スーパーホテルＰｒｅｍｉｅｒ博多駅・筑紫口天然温泉
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 博多駅 / JR博多駅・筑紫口徒歩約８分！福岡空港から車で約10分！地下鉄博多駅東5番出口！博多駅東３丁目交差点セブンイレブン前
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    博多駅から徒歩約８分☆福岡「原鶴温泉」直送の天然温泉＆ウェルカムバーでリフレッシュ☆
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥6,200〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F163065%2F163065.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/161262/161262.jpg"
                  alt="ＫＯＫＯ　ＨＯＴＥＬ　博多新幹線口"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4</span>
                    <span className="text-stone-400 text-xs">(344件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ＫＯＫＯ　ＨＯＴＥＬ　博多新幹線口
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 博多駅 / JR博多駅より徒歩4分。地下鉄空港線博多駅 東6出口より徒歩2分。都市高速博多駅東ICまで1分！
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    無料軽朝食は個包装パンで安心、大浴場完備で快適ステイ
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥6,435〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161262%2F161262.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/182017/182017.jpg"
                  alt="アパホテル＆リゾート〈博多駅東〉"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.11</span>
                    <span className="text-stone-400 text-xs">(992件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    アパホテル＆リゾート〈博多駅東〉
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 博多駅 / 福岡市営地下鉄空港線「博多駅」東7番出口から徒歩2分／JR各線「博多駅」筑紫口から徒歩4分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    博多駅至近、ビジネス・観光に便利！最上階に大浴殿・プール完備の全室禁煙新都市型ホテル！
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥6,840〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182017%2F182017.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5012/5012.jpg"
                  alt="天然温泉　八百治の湯　八百治博多ホテル"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.2</span>
                    <span className="text-stone-400 text-xs">(4598件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天然温泉　八百治の湯　八百治博多ホテル
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 博多駅 / 博多駅博多口より徒歩５分（福岡空港から博多駅まで地下鉄で５分。）
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    博多駅徒歩5分!!天然温泉大浴場完備!!Wi-Fi無料＆加湿機能付空気清浄機完備♪
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥7,450〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5012%2F5012.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">博多秋旅の観光アドバイス</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>太宰府へのアクセス:</strong> 博多駅バスターミナルから直行バス「旅人（たびと）」に乗ると乗り換えなし約40分で太宰府へ到着します。</li>
            <li><strong>名物梅ヶ枝餅:</strong> 太宰府参道で焼きたて熱々の梅ヶ枝餅の食べ歩きはマスト。毎月25日は限定の「よもぎ梅ヶ枝餅」も登場します。</li>
            <li><strong>屋台のルール:</strong> 混雑時は長居せず、1〜2品とドリンクを楽しんだら次の店へハシゴするのが博多屋台のマナーです。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
