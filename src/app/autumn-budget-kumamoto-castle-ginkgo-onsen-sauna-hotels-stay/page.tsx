import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の熊本×格安】熊本城の巨大銀杏と阿蘇すすき草原！天然温泉＆サウナ付き1泊4,000円〜7,000円台のコスパ最強ホテル5選【2026最新】',
  description: '別名「銀杏城」と呼ばれる熊本城の黄金に輝く大イチョウと阿蘇大観峰のすすき草原！熊本ラーメンやあか牛グルメを満喫。サウナの聖地「湯らっくす」や天然温泉付きで1泊4,000円〜7,000円台で泊まれる熊本のコスパ最強ホテル5選をご紹介。レフ熊本、スーパーホテル熊本駅前などを徹底比較！',
  keywords: '熊本 格安 ホテル, 熊本 天然温泉 サウナ ホテル, 熊本城 銀杏 紅葉, 阿蘇 すすき 宿, 湯らっくす 熊本, レフ熊本 ベッセルホテルズ',
  openGraph: {
    title: '【秋の熊本×格安】熊本城の巨大銀杏と阿蘇すすき草原！天然温泉＆サウナ付き1泊4,000円〜7,000円台のコスパ最強ホテル5選【2026最新】',
    description: '熊本城の巨大銀杏と阿蘇すすき草原！天然温泉＆サウナ付き1泊4,000円〜7,000円台のコスパ最強熊本ホテル5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-budget-kumamoto-castle-ginkgo-onsen-sauna-hotels-stay',
  }
};

export default function KumamotoBudgetAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/183778/183778.jpg"
          alt="秋の熊本・熊本城の黄金イチョウと天然温泉サウナ付き格安ホテル"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">格安・九州特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">1泊目安: 4,000円台〜7,000円台</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の熊本×格安】熊本城の巨大銀杏と阿蘇すすき草原！天然温泉＆サウナ付き1泊4,000円〜7,000円台のコスパ最強ホテル5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            天守閣前で黄金に輝く大イチョウが圧巻の「銀杏城」熊本城。サウナの聖地と呼ばれる「湯らっくす」をはじめ、天然地下水や温泉大浴場を備えた熊本のコスパ最強ホテルをご案内します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">熊本格安温泉サウナホテル5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-teal-600 pl-3">
            名城を彩る黄金の巨木と「名水・サウナ天国」の魅力
          </h2>
          <p className="mb-4 text-stone-700">
            加藤清正公が築城時に飢城対策として植えたと伝えられる熊本城の大イチョウ。11月下旬になると天守閣の漆黒の壁面を背景に、黄金色の葉が一面に輝き息を呑む景観を生み出します。
          </p>
          <p className="text-stone-700">
            熊本は阿蘇の伏流水に恵まれた日本屈指の「名水の都」。全国のサウナーが巡礼に訪れる「湯らっくす」の阿蘇天然水水風呂や、天然温泉大浴場付きのホテルに宿泊すれば、旅の疲れが吹き飛びます。あか牛丼や馬刺し、濃厚な熊本ラーメンを味わう秋の満喫旅をお楽しみください。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-teal-600 rounded-full inline-block"></span>
            楽天トラベル高評価！熊本の温泉・サウナ付き格安ホテル5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/183778/183778.jpg"
                  alt="サウナと天然温泉　湯けむり天国　湯らっくす"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.55</span>
                    <span className="text-stone-400 text-xs">(456件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    サウナと天然温泉　湯けむり天国　湯らっくす
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 平成（熊本） / JR熊本駅より車で約5分、JR平成駅より徒歩約3分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ◆サウナの西の聖地◆3つのサウナと日本一深い水風呂でととのう。個室感覚のドミトリーは女性専用もあり◎
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,800〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183778%2F183778.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/178485/178485.jpg"
                  alt="ホテルニューガイア西熊本駅前"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.31</span>
                    <span className="text-stone-400 text-xs">(579件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテルニューガイア西熊本駅前
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 熊本駅・辛島町電停 / ＪＲ西熊本駅より徒歩にて約１分・熊本駅より車で約11分・益城熊本空港ICより車で約32分・御船ICより車で約29分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    【大浴場有】大好評！宿泊者専用ラウンジ！全客室エアウィーヴ採用&amp;トイレバス別のセパレートタイプ
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,750〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178485%2F178485.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/172922/172922.jpg"
                  alt="ＫＯＫＯ　ＨＯＴＥＬ　熊本上通"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.09</span>
                    <span className="text-stone-400 text-xs">(784件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ＫＯＫＯ　ＨＯＴＥＬ　熊本上通
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 熊本駅・辛島町電停 / 熊本市電　水道町駅より徒歩にて約３分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    熊本城を望む最上階で『浴場＆サウナ』を満喫！館内にコンビニ併設
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,752〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172922%2F172922.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/183439/183439.jpg"
                  alt="天然温泉　神水美肌の湯　スーパーホテル熊本駅前天然温泉"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.35</span>
                    <span className="text-stone-400 text-xs">(781件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天然温泉　神水美肌の湯　スーパーホテル熊本駅前天然温泉
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 熊本 / JR熊本駅白川口（東口）より徒歩２分/九州自動車道 『熊本IC』より車で約30分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ■JR熊本駅目の前■男女別天然温泉完備。無料のウェルカムバー・焼立てパン健康朝食をご用意！
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,470〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183439%2F183439.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/177757/177757.jpg"
                  alt="レフ熊本　ｂｙ　ベッセルホテルズ　｜ＲＥＦ熊本｜サウナ付大浴場　（桜町バスターミナル）"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.48</span>
                    <span className="text-stone-400 text-xs">(1072件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    レフ熊本　ｂｙ　ベッセルホテルズ　｜ＲＥＦ熊本｜サウナ付大浴場　（桜町バスターミナル）
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 熊本駅・辛島町電停 / 新市街アーケード沿い　熊本市電・辛島町駅より徒歩1分　熊本ICから約30分　益城熊本空港ICから約40分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    辛島町駅（熊本市電）から徒歩1分。アーケード沿いのため、お車を寄せるスペースはございません。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥7,000〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177757%2F177757.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">熊本秋旅の観光アドバイス</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>水前寺成趣園の紅葉:</strong> 東海道五十三次を模した美しい桃山式回遊庭園で、秋には湧水池の周りをモミジが彩ります。</li>
            <li><strong>阿蘇カルデラドライブ:</strong> 熊本市内からレンタカーで約1時間。大観峰や草千里ヶ浜の一面に広がる黄金色のすすき野原は圧巻です。</li>
            <li><strong>熊本市電の1日乗車券:</strong> 熊本駅、熊本城、上通・下通の繁華街を移動するなら市電1日乗車券（500円）が便利です。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
