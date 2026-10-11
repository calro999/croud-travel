import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '秋の伊東温泉×格安：伊豆高原の紅葉とオーシャンビュー！1泊4,000円台〜のコスパ最強おすすめ温泉宿5選「2026最新」',
  description: '東京から踊り子号で一本！相模湾を望む伊東温泉と大室山・一碧湖の紅葉散策。源泉かけ流しの美肌温泉や海の幸バイキング付きでも1泊4,000円〜7,000円台で泊まれる格安名宿5選。ホテルよしの、ラヴィエ川良、松川館などを徹底比較！',
  keywords: '伊東温泉 格安 宿, 伊豆 格安 温泉 ホテル, 一碧湖 紅葉, 大室山 秋, ホテルよしの 伊東, ホテルラヴィエ川良',
  openGraph: {
    title: '秋の伊東温泉×格安：伊豆高原の紅葉とオーシャンビュー！1泊4,000円台〜のコスパ最強おすすめ温泉宿5選「2026最新」',
    description: '東京から特急で一本！相模湾の海の幸と源泉かけ流し温泉付き1泊4,000円台〜のコスパ最強おすすめ宿5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-budget-shizuoka-ito-onsen-seaside-hotels-stay',
  }
};

export default function ItoBudgetAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/14377/14377.jpg"
          alt="秋の伊東温泉・相模湾を望む温泉宿と伊豆の秋風景"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">格安・伊豆特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">1泊目安: 4,000円台〜7,000円台</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">「秋の伊東温泉×格安」伊豆高原の紅葉とオーシャンビュー！1泊4,000円台〜のコスパ最強おすすめ温泉宿5選</h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            首都圏から好アクセスで毎分3万リットル以上の湧出量を誇る伊東温泉。「伊豆の瞳」一碧湖の鮮やかな紅葉や大室山のすすき草原を巡り、豊富な天然温泉をお財布に優しい価格で堪能できる厳選宿をご紹介します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">伊東温泉格安名宿5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-teal-600 pl-3">
            アクセス抜群！伊豆屈指の湯量を誇る伊東でお得にリフレッシュ
          </h2>
          <p className="mb-4 text-stone-700">
            静岡県・東伊豆に位置する伊東温泉は、東京駅から特急「踊り子」で約1時間40分。別府・由布院に次ぐ全国屈指の湧出量を誇り、肌に優しく刺激が少ない単純温泉や弱食塩泉が湧き出ています。
          </p>
          <p className="text-stone-700">
            近隣には湖畔を真っ赤なモミジが包み込む「一碧湖（いっぺきこ）」やすすきが一面に広がる「大室山」など秋の絶景が満載。伊東港直送の金目鯛やアジなどの海の幸も絶品で、1泊数千円台とは思えない大満足の秋旅が叶います。
          </p>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">東伊豆・海辺の名湯ガイド：湯量豊富な歴史名湯・伊東温泉</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Ito_hot_spring%2C_upstream_side_view_than_Okawa_Bridge.JPG/1280px-Ito_hot_spring%2C_upstream_side_view_than_Okawa_Bridge.JPG"
                alt="湯量豊富な歴史名湯・伊東温泉"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">湯量豊富な歴史名湯・伊東温泉の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">伊東温泉（いとうおんせん）は、静岡県伊東市（旧国伊豆国）にある温泉。かつて放映されていたハトヤホテルのCMによって全国的な知名度を得た。</p>
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
            楽天トラベル高評価！伊東温泉の格安名宿5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/145449/145449.jpg"
                  alt="ホテル　リーデント　伊東"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.21</span>
                    <span className="text-stone-400 text-xs">(425件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテル　リーデント　伊東
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 伊東駅 / ＪＲ　伊東駅より徒歩にて約6分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    伊東駅から徒歩6分のビジネスホテル。お仕事やご旅行のお客様、どなたでも気軽に泊まれます。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,284〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145449%2F145449.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/14377/14377.jpg"
                  alt="伊東温泉　ホテル　ラヴィエ川良"
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
                    <span className="text-amber-500 font-bold text-sm">★ 3.99</span>
                    <span className="text-stone-400 text-xs">(2006件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    伊東温泉　ホテル　ラヴィエ川良
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 伊東駅 / JR伊東線「伊東駅」下車 徒歩７分／車で東名高速沼津ICから1時間20分・厚木ICから1時間40分／送迎バスあり
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    湯舟から溢れる天然100％の温泉と、海の幸が網焼きできる60種類のバイキングを堪能！
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,000〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14377%2F14377.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/30912/30912.jpg"
                  alt="伊東温泉　ホテルよしの"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.24</span>
                    <span className="text-stone-400 text-xs">(1288件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    伊東温泉　ホテルよしの
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 伊東駅 / 厚木ＩＣより約90分・東名沼津ＩＣより約60分 ＪＲ伊東駅から車約2分・徒歩約5～7分　※細い急坂はのぼりません
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    【駅近好立地】源泉かけ流し畳風呂や金目鯛等海の幸が魅力の宿
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,000〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30912%2F30912.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/78235/78235.jpg"
                  alt="伊東温泉　伊東園ホテル松川館"
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
                    <span className="text-amber-500 font-bold text-sm">★ 3.82</span>
                    <span className="text-stone-400 text-xs">(780件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    伊東温泉　伊東園ホテル松川館
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 伊東駅 / 伊東駅より徒歩１０分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    全国第３位の湧出量を誇る伊東温泉。伊東園ホテル松川館で天然温泉かけ流しの湯をお楽しみ下さい。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥6,798〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F78235%2F78235.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/10798/10798.jpg"
                  alt="ホテルハーヴェスト伊東"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.35</span>
                    <span className="text-stone-400 text-xs">(669件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテルハーヴェスト伊東
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 伊東駅 / 電車：JR伊東線伊東駅より徒歩約12分／車：東名高速道路厚木IC→小田原・厚木道路→R１３５伊東
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    【東急グループ運営】海と山を望む絶景の湯宿。最上階の温泉とプールで癒しのひととき
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥7,400〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10798%2F10798.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">伊東温泉の秋旅アドバイス</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>東海館の見学:</strong> 松川沿いに建つ昭和初期の木造建築・元温泉旅館「東海館」。館内見学や日帰り入浴も楽しめます。</li>
            <li><strong>一碧湖の紅葉散策:</strong> 湖畔には周遊歩道（約4km・所要約1時間）が整備されており、真っ赤なモミジとボート遊びを満喫できます。</li>
            <li><strong>伊東マリンタウン:</strong> 国道135号沿いの道の駅で、海を見渡す足湯や海鮮丼ランチ、お土産の干物選びに最適です。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
