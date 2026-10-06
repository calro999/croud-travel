import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の高野山】壇上伽藍の蛇腹道紅葉トンネルと奥の院！心洗われるおすすめ歴史宿坊5選【2026最新】',
  description: '標高800mの聖地・高野山は10月下旬から鮮やかな紅葉のピークへ！壇上伽藍と金剛峯寺を結ぶ「蛇腹道（じゃばらみち）」の真紅のトンネル。伝統の精進料理と朝のお勤めを体験できる極上宿坊5選をご紹介。明王院、不動院、西禅院を徹底比較！',
  keywords: '高野山 紅葉, 蛇腹道 ライトアップ, 高野山 宿坊 おすすめ, 金剛峯寺 秋, 明王院 高野山, 不動院 宿坊',
  openGraph: {
    title: '【秋の高野山】壇上伽藍の蛇腹道紅葉トンネルと奥の院！心洗われるおすすめ歴史宿坊5選【2026最新】',
    description: '標高800mの聖地・高野山は10月下旬から鮮やかな紅葉のピークへ！心洗われるおすすめ歴史宿坊5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-wakayama-koyasan-danjo-garan-shukubo-momiji-hotels-stay',
  }
};

export default function KoyasanShukuboAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/107848/107848.jpg"
          alt="秋の高野山・蛇腹道の紅葉トンネルと歴史ある宿坊庭園"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">秋の和歌山・世界遺産特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">見頃目安: 10月下旬〜11月上旬</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の高野山】壇上伽藍の蛇腹道紅葉トンネルと奥の院！心洗われるおすすめ歴史宿坊5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            弘法大師空海が開いた天空の宗教都市・高野山。平地より一足早く山全体が鮮やかな錦秋に染まり、壇上伽藍へ続く「蛇腹道」は紅葉のアーチで包まれます。名刹の宿坊でいただく旬の精進料理と朝の勤行で、心澄みわたる特別な時間をお過ごしください。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">高野山紅葉とおすすめ宿坊5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-amber-600 pl-3">
            天空の聖地を彩る錦秋の輝きと宿坊ステイの魅力
          </h2>
          <p className="mb-4 text-stone-700">
            標高約800mの盆地に位置する高野山は、近畿地方でも最も早く紅葉が訪れる名所の一つです。10月下旬を迎えると、金剛峯寺の正門周辺や壇上伽藍へと続く「蛇腹道（じゃばらみち）」が一面真紅と黄金色の紅葉トンネルへと姿を変えます。朱塗りの根本大塔と紅葉が青空に映える景観は神々しいまでの美しさです。
          </p>
          <p className="text-stone-700">
            高野山を満喫するなら、一般の旅館ではなく「宿坊（しゅくぼう）」への宿泊が断然おすすめ。国の名勝に指定された日本庭園を眺めながらいただく伝統の精進料理、早朝の本堂で行われる厳かな読経（勤行）や護摩焚き祈祷の体験は、一生の思い出に残る深い安らぎを与えてくれます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-amber-600 rounded-full inline-block"></span>
            楽天トラベル高評価！高野山の厳選歴史宿坊5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/84804/84804.jpg"
                  alt="高野山　別格本山　明王院"
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
                    <span className="text-stone-400 text-xs">(213件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    高野山　別格本山　明王院
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 極楽橋・高野山駅 / 高野山駅より大門行バス乗車、金剛峯寺前又は大塔口下車徒歩３分～７分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    高野山の原風景を残す地区、本中院谷に位置し、日本三不動のひとつ赤不動の寺としても御参詣頂いています。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥14,000〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F84804%2F84804.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/107848/107848.jpg"
                  alt="宿坊　不動院"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.67</span>
                    <span className="text-stone-400 text-xs">(163件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    宿坊　不動院
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 極楽橋・高野山駅 / 南海電鉄高野山駅下車、南海りんかんバスで１５分（蓮花谷下車徒歩３分）
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    出来たての精進料理が自慢の心安らぐ静寂の宿坊。皆様のご来山をお待ち申し上げております。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥28,000〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F107848%2F107848.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/53353/53353.jpg"
                  alt="西禅院"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.67</span>
                    <span className="text-stone-400 text-xs">(411件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    西禅院
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 極楽橋駅 / 南海電鉄　高野山駅より車で５分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    「静寂の中にやすらぎあり・・」　落ち着いた客室でゆったりとした時間をお過ごし頂けます。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥25,000〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53353%2F53353.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/13751/13751.jpg"
                  alt="恵光院"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.56</span>
                    <span className="text-stone-400 text-xs">(594件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    恵光院
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 極楽橋駅 / 南海『難波駅』より南海電鉄高野線で『高野山駅』より南海バス10分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    霊峰高野山。静かな宿坊でのひとときが心を癒します。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥35,000〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13751%2F13751.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/14119/14119.jpg"
                  alt="高野山　持明院"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.48</span>
                    <span className="text-stone-400 text-xs">(375件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    高野山　持明院
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 極楽橋駅 / 南海電車林間高野線『極楽橋駅』
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ９００年の歴史があり武田家、京極家等とゆかりの深いお寺です。庭園に囲まれた落ち着ける宿坊です。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥13,200〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14119%2F14119.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">高野山宿坊体験の心得・ポイント</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>朝のお勤め（勤行）:</strong> 朝6時〜6時半頃から本堂で行われます。宿泊者は自由に参加でき、厳かな読経やお坊さんの法話を聞くことができます。</li>
            <li><strong>寒さ対策:</strong> 10月下旬の高野山は平地より5〜8度ほど気温が低く、冬の装い（厚手コートやマフラー）が必要です。</li>
            <li><strong>奥の院ナイトツアー:</strong> 夕食後に奥の院を専門ガイドと巡るツアーも人気で、昼間とは異なる神秘的な静寂を味わえます。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
