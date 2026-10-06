import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の函館×格安】五稜郭の紅葉と海鮮グルメ！1泊2,000円〜5,000円台の高コスパおすすめホテル5選【2026最新】',
  description: '星形の城郭が秋色に染まる特別史跡・五稜郭跡と函館山の秋夜景！朝食いくら食べ放題や源泉かけ流し温泉付きでも1泊2,000円〜5,000円台で泊まれる函館のコスパ最強ホテル5選。ホテルエノエ、オールインステイ、イマジンホテルの魅力を徹底比較！',
  keywords: '函館 格安 ホテル, 函館 朝食 美味しい ホテル, 五稜郭 紅葉, 函館山 夜景 宿, ホテルエノエ函館, ホテルオールインステイ函館',
  openGraph: {
    title: '【秋の函館×格安】五稜郭の紅葉と海鮮グルメ！1泊2,000円〜5,000円台の高コスパおすすめホテル5選【2026最新】',
    description: '五稜郭の紅葉と函館山夜景！朝食いくら食べ放題や温泉付き1泊2,000円〜5,000円台の高コスパ宿5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-budget-hokkaido-hakodate-gourmet-onsen-hotels-stay',
  }
};

export default function HakodateBudgetAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/192816/192816.jpg"
          alt="秋の函館・五稜郭の紅葉とレトロな街並みを楽しむ格安ホテル"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">格安・北海道特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">1泊目安: 2,000円台〜5,000円台</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の函館×格安】五稜郭の紅葉と海鮮グルメ！1泊2,000円〜5,000円台の高コスパおすすめホテル5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            五稜郭タワーから見下ろす星形の紅葉パノラマと、空気が澄み渡り輝きを増す函館山からの「100万ドルの夜景」。海鮮市場での食べ歩きや名湯・湯の川温泉を驚きの低価格で満喫できる格安宿をご紹介します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">函館格安高コスパホテル5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-teal-600 pl-3">
            秋の函館は日本屈指の「ホテルコスパ天国」
          </h2>
          <p className="mb-4 text-stone-700">
            函館は全国でも有数のホテル朝食激戦区として知られ、ハイレベルな設備と温泉大浴場を備えたホテルが信じられないほどのリーズナブルな価格で宿泊できます。秋は秋鮭やイクラの醤油漬け、真イカ、ホタテなど海の幸が最も美味しい旬の季節。
          </p>
          <p className="text-stone-700">
            さらに10月下旬から11月上旬にかけては、特別史跡「五稜郭跡」の桜の木が一斉に紅葉し、堀の水面に映る赤と黄色のコントラストが絶景を描きます。お得に泊まって函館グルメを食べ尽くす秋旅がイチオシです。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-teal-600 rounded-full inline-block"></span>
            楽天トラベル高評価！函館の格安・高コスパホテル5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/165825/165825.jpg"
                  alt="ホテルオールインステイ函館"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.41</span>
                    <span className="text-stone-400 text-xs">(218件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテルオールインステイ函館
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 函館 / ＪＲ　函館駅から0.7K徒歩にて約７分。函館空港より車15分、空港より函館駅までシャトルバス有り
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ＪＲ函館駅から徒歩にて７分の好立地、観光やビジネス、小グループの拠点として最適です。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥2,600〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165825%2F165825.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/179797/179797.jpg"
                  alt="スマイルホテルプレミアム函館五稜郭"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.38</span>
                    <span className="text-stone-400 text-xs">(839件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    スマイルホテルプレミアム函館五稜郭
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 函館駅・市電電停 / 市電「五稜郭公園前」より徒歩約3分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    【全館全室禁煙】すべてのお部屋に空気清浄機完備★五稜郭公園まで徒歩約5分♪
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥3,150〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179797%2F179797.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/9561/9561.jpg"
                  alt="函館大沼プリンスホテル"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.15</span>
                    <span className="text-stone-400 text-xs">(1142件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    函館大沼プリンスホテル
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 函館空港 / 函館空港から車で約31分／新函館北斗駅から車で約17分／大沼公園駅から定期無料送迎バス運行/屋外無料駐車場完備
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    大沼公園の自然を感じるホテル。無料駐車場完備・和洋ブッフェ・温泉を満喫。ゴルフ場も隣接しています♪。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥3,354〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9561%2F9561.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/192816/192816.jpg"
                  alt="ホテルエノエ函館"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.45</span>
                    <span className="text-stone-400 text-xs">(648件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテルエノエ函館
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 宝来町 / 函館市電『宝来町』徒歩約3分・『十字街』徒歩約5分、JR函館駅より車で約5分、函館空港よりバスにて約40分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    24年10月OPEN♪宿泊者限定ラウンジで地酒を愉しみ＆海鮮含む70種の朝食ブッフェで舌鼓
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,410〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F192816%2F192816.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/137023/137023.jpg"
                  alt="イマジンホテル＆リゾート函館"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.42</span>
                    <span className="text-stone-400 text-xs">(2454件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    イマジンホテル＆リゾート函館
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 函館 / 『函館空港』からお車にて約6分/『函館駅』よりお車にて約12分/バス停『熱帯植物園前』から徒歩約3分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    【楽天トラベルゴールドアワード2025受賞！】海と星空が広がる【絶景露天風呂】
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,259〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137023%2F137023.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">函館秋旅のおすすめスポット</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>香雪園（見晴公園）のMOMI-Gフェスタ:</strong> 北海道唯一の国指定文化財庭園で、約100種のカエデが紅葉し夜間ライトアップも開催されます。</li>
            <li><strong>ご当地B級グルメ:</strong> ラッキーピエロのチャイニーズチキンバーガーやハセガワストアのやきとり弁当など、安くて絶品のご当地食が豊富です。</li>
            <li><strong>函館山ロープウェイ:</strong> 日没30分前（マジックアワー）に展望台に登ると、夕暮れから夜景へと変わる感動的な瞬間に立ち会えます。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
