import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の仙台×格安】定禅寺通りのケヤキ紅葉と牛たんグルメ！天然温泉付き1泊4,000円台〜のコスパ最強おすすめホテル5選【2026最新】',
  description: '杜の都・仙台の定禅寺通りの黄金色ケヤキ並木と秋保大滝の紅葉！名物炭火焼き牛たんや秋の「はらこ飯」を堪能。天然温泉大浴場＆サウナ付きでも1泊4,000円〜7,000円台で泊まれる仙台の格安ホテル5選をご紹介。スーパーホテル、ドーミーイン仙台駅前を徹底比較！',
  keywords: '仙台 格安 ホテル, 仙台 天然温泉 ホテル, 定禅寺通り 紅葉, 牛たん 仙台 宿, ドーミーイン仙台駅前, スーパーホテルPremier仙台国分町',
  openGraph: {
    title: '【秋の仙台×格安】定禅寺通りのケヤキ紅葉と牛たんグルメ！天然温泉付き1泊4,000円台〜のコスパ最強おすすめホテル5選【2026最新】',
    description: '定禅寺通りのケヤキ紅葉と牛たん！天然温泉付き1泊4,000円台〜のコスパ最強仙台ホテル5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-budget-miyagi-sendai-onsen-gyutan-hotels-stay',
  }
};

export default function SendaiBudgetAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/191668/191668.jpg"
          alt="秋の仙台・定禅寺通りの黄金ケヤキ並木と天然温泉付き格安ホテル"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">格安・東北特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">1泊目安: 4,000円台〜7,000円台</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の仙台×格安】定禅寺通りのケヤキ紅葉と牛たんグルメ！天然温泉付き1泊4,000円台〜のコスパ最強おすすめホテル5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            杜の都を象徴する定禅寺通りを黄金色に染め上げるケヤキ並木。名物の極厚炭火焼き牛たんや宮城の秋の味覚「はらこ飯」を味わい、自家源泉やサウナで旅の疲れをほぐす高コスパホテルをご案内します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">仙台格安天然温泉ホテル5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-teal-600 pl-3">
            天然温泉とサウナでととのい、杜の都の秋グルメを満喫
          </h2>
          <p className="mb-4 text-stone-700">
            新幹線で東京から約1時間半の仙台。秋を迎えると定禅寺通りや青葉通りのケヤキが一斉に色づき、ケヤキ並木の中央の遊歩道を歩くだけで心地よい秋の散策が楽しめます。郊外へ足を伸ばせば、国指定名勝「秋保大滝」のダイナミックな滝と紅葉の絶景も待っています。
          </p>
          <p className="text-stone-700">
            仙台駅周辺や国分町には天然温泉を引いた快適なホテルが点在。分厚い牛たん焼きやテールスープ、秋限定の鮭とイクラの「はらこ飯」、仙台セリ鍋など、東北随一のグルメタウンをお得に楽しむ拠点として最適です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-teal-600 rounded-full inline-block"></span>
            楽天トラベル高評価！仙台の天然温泉付き格安ホテル5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/69306/69306.jpg"
                  alt="天然温泉　弦月の湯　スーパーホテル仙台・広瀬通り"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.22</span>
                    <span className="text-stone-400 text-xs">(4042件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天然温泉　弦月の湯　スーパーホテル仙台・広瀬通り
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 仙台駅 / 地下鉄　広瀬通り駅より徒歩で約3分／ＪＲ　仙台駅より徒歩で15分　繁華街国分町徒歩10分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    仙台駅徒歩約8分、広瀬通駅徒歩1分、国分町5分。天然温泉付で朝食無料。全室WiFi完備
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,140〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F69306%2F69306.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/187247/187247.jpg"
                  alt="スーパーホテルＰｒｅｍｉｅｒ仙台国分町天然温泉"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.41</span>
                    <span className="text-stone-400 text-xs">(1617件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    スーパーホテルＰｒｅｍｉｅｒ仙台国分町天然温泉
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 勾当台公園駅 / 地下鉄南北線「勾当台公園駅」南出口3より徒歩6分/地下鉄東西線「青葉通一番町」より徒歩10分/「仙台宮城IC」より車6分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    美人の湯と呼ばれる天然温泉とサステナブルな朝食を堪能できる上質なホテルで国分町の夜をお楽しみください
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,350〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187247%2F187247.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/191668/191668.jpg"
                  alt="スーパーホテル仙台駅東口天然温泉"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.49</span>
                    <span className="text-stone-400 text-xs">(1123件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    スーパーホテル仙台駅東口天然温泉
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 仙台駅 / 仙台駅東口より徒歩で約５分/北部名掛丁自由通路」を通り出口を出てから徒歩2分/高速バス「仙台駅前」のりばから徒歩5分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    【仙台駅徒歩5分の好立地】天然温泉◆無料健康朝食とウェルカムバー◆ぐっすり眠れるホテル◆全館禁煙
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,560〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F191668%2F191668.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/57055/57055.jpg"
                  alt="天然温泉　萩の湯　ドーミーイン仙台駅前（ドーミーイン・御宿野乃　ホテルズグループ）"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.19</span>
                    <span className="text-stone-400 text-xs">(5803件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天然温泉　萩の湯　ドーミーイン仙台駅前（ドーミーイン・御宿野乃　ホテルズグループ）
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 仙台駅 / JR仙台駅西口より徒歩約5分。東北道宮城ＩＣより１５分。仙台空港線で約３０分。高速バス停留所より徒歩２分。駅前通沿い。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    天然温泉大浴場と高温サウナ完備。アイス乳酸菌飲料無料サービスと朝食 は海鮮丼と和洋食バイキング！
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥6,780〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F57055%2F57055.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/151427/151427.jpg"
                  alt="名取岩沼天然温泉「旅人の湯」ホテルルートイン名取岩沼インター　－仙台空港－"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.24</span>
                    <span className="text-stone-400 text-xs">(605件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    名取岩沼天然温泉「旅人の湯」ホテルルートイン名取岩沼インター　－仙台空港－
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 岩沼駅 / JR岩沼駅より車で約8分 仙台東部道路【仙台空港IC】より車で約8分　仙台空港より車で約13分　
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    仙台空港ＩＣより車で８分、ＪＲ岩沼駅より車で８分のアクセス。仙台空港からも車で１３分。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥7,450〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F151427%2F151427.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">仙台秋旅のワンポイント</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>秋保大滝の紅葉散策:</strong> 日本三大名瀑の一つ。展望台からの眺めはもちろん、滝壺まで降りて水しぶきを浴びる紅葉狩りが迫力満点です。</li>
            <li><strong>はらこ飯の旬:</strong> 9月〜11月限定の宮城の郷土料理。鮭の煮汁で炊き込んだご飯に脂の乗った鮭の身とプチプチのいくらを敷き詰めた秋の味覚です。</li>
            <li><strong>るーぷる仙台:</strong> 仙台駅発の観光シティループバスで、仙台城跡や瑞鳳殿などの史跡を手軽に巡ることができます。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
