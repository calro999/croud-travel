import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の寸又峡】夢の吊橋のエメラルド湖水と鮮烈な紅葉！美女づくりの湯を満喫するおすすめ秘境宿5選【2026最新】',
  description: 'チンダル現象で輝くエメラルドグリーンの湖水に架かる寸又峡「夢の吊橋」と山肌を彩る紅葉の絶景！トロトロの硫黄泉「美女づくりの湯」を満喫する秘境宿5選。川根温泉ホテル、翠紅苑、ふれあいコテージの魅力を徹底比較！',
  keywords: '寸又峡 夢の吊橋, 寸又峡 紅葉 見頃, 寸又峡温泉 宿, 美女づくりの湯, 川根温泉ホテル, 翠紅苑',
  openGraph: {
    title: '【秋の寸又峡】夢の吊橋のエメラルド湖水と鮮烈な紅葉！美女づくりの湯を満喫するおすすめ秘境宿5選【2026最新】',
    description: 'チンダル現象で輝くエメラルドグリーンの湖水に架かる寸又峡「夢の吊橋」と紅葉！秘境名宿5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-shizuoka-sumatakyo-yume-no-tsuribashi-hotels-stay',
  }
};

export default function SumatakyoAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/172896/172896.jpg"
          alt="秋の寸又峡・夢の吊橋のエメラルドグリーン湖水と紅葉絶景"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">秋の静岡・秘境特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">見頃目安: 11月上旬〜11月下旬</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の寸又峡】夢の吊橋のエメラルド湖水と鮮烈な紅葉！美女づくりの湯を満喫するおすすめ秘境宿5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            「死ぬまでに渡りたい世界の徒歩吊り橋10選。」にも選出された寸又峡の「夢の吊橋」。乳青色に輝く湖面を包み込む紅葉美と、南アルプスの麓に湧き出る美肌の湯「美女づくりの湯」で贅沢な秘境トリップをご案内します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">寸又峡夢の吊橋と川根名宿5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-amber-600 pl-3">
            息を呑むエメラルドブルーの湖水とつり橋の中央で願う秋の奇跡
          </h2>
          <p className="mb-4 text-stone-700">
            南アルプスの渓谷深く位置する寸又峡。長さ90m、高さ8mの「夢の吊橋」は、微粒子が光を乱反射するチンダル現象によって驚くほど神秘的なエメラルドグリーンに染まります。秋になると渓谷全体が赤や黄色に染まり、湖水の青との対比は息を呑むほどの美しさ。「橋の真ん中で恋の願い事をすると叶う」というロマンチックな言い伝えでも有名です。
          </p>
          <p className="text-stone-700">
            散策後は、寸又峡温泉や大井川流域の川根温泉へ。肌にまとわりつくようなとろみのある硫黄泉は「美女づくりの湯」として親しまれ、湯上がり後の肌がしっとりすべすべになると評判です。川根本町の特産である川根茶や山菜・川魚料理とともに、秘境の安らぎを満喫してください。
          </p>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">奥大井・秘境絶景ガイド：エメラルドグリーンの湖面・寸又峡 夢の吊橋</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Shizuoka_Prefecture_3D_2012.jpg/1280px-Shizuoka_Prefecture_3D_2012.jpg"
                alt="エメラルドグリーンの湖面・寸又峡 夢の吊橋"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">エメラルドグリーンの湖面・寸又峡 夢の吊橋の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">寸又峡（すまたきょう）は静岡県中部、川根本町にある大井川支流、寸又川の峡谷。全長16kmで、比高は100mに達する。</p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-teal-700 font-semibold">現地観光・散策推奨スポット</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-amber-600 rounded-full inline-block"></span>
            楽天トラベル高評価！寸又峡・川根温泉の厳選宿5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/44267/44267.jpg"
                  alt="川根温泉ふれあいコテージ"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.73</span>
                    <span className="text-stone-400 text-xs">(37件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    川根温泉ふれあいコテージ
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 笹間渡駅 / 大井川鐵道 大井川本線 川根温泉笹間渡駅から徒歩２分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    全棟源泉かけ流し温泉付きの一棟貸しコテージで、日常の喧騒から離れた心休まるひと時を…
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥32,100〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44267%2F44267.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/172896/172896.jpg"
                  alt="大井川鐵道　川根温泉ホテル"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.65</span>
                    <span className="text-stone-400 text-xs">(690件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    大井川鐵道　川根温泉ホテル
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 千頭・家山駅 / 新東名島田金谷ＩＣよりお車にて約３５分／大井川鉄道　川根温泉笹間渡駅より徒歩にて約１０分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    温泉宿・ホテル総選挙ファミリー部門5年連続全国1位受賞！壮大な自然に囲まれた癒しと寛ぎの温泉宿
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥15,200〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172896%2F172896.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/188812/188812.jpg"
                  alt="もりのくに"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.29</span>
                    <span className="text-stone-400 text-xs">(11件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    もりのくに
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 千頭駅 / 千頭駅よりバスに乗車、 白沢温泉入り口で下車、徒歩10分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    アウトドアと癒しの融合。 「もりのコテージ」に泊まってBBQや川遊びに大満喫！
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥6,000〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188812%2F188812.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/10709/10709.jpg"
                  alt="翠紅苑"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.22</span>
                    <span className="text-stone-400 text-xs">(999件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    翠紅苑
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 千頭駅 / JR金谷駅より大井川鉄道乗換え千頭駅より寸又峡温泉行きバス40分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    大正浪漫を感じる建物で、「美女づくりの湯」と「奥大井の食材をつかった料理」を堪能する
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥10,450〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10709%2F10709.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/20466/20466.jpg"
                  alt="民宿　奥大井"
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
                    <span className="text-amber-500 font-bold text-sm">★ 3.86</span>
                    <span className="text-stone-400 text-xs">(178件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    民宿　奥大井
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 奥泉駅 / 大井川鉄道千頭駅乗り換え井川線奥泉駅より徒歩5分／千頭駅より車で約１０分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    静かな山あいののんびりとした民宿です。田舎料理、猪鍋料理が自慢です。故郷を味わいませんか。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥5,500〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20466%2F20466.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">夢の吊橋トレッキングの注意点</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>混雑と一方通行規制:</strong> 紅葉ピーク時の週末は吊り橋の定員（10名）により数時間の待ち時間が発生することがあります。早朝の訪問が一番のおすすめです。また渡橋後は一方通行のため急な山道を戻るルートとなります。</li>
            <li><strong>歩きやすい靴:</strong> 遊歩道全体で約90分のウォーキングコースです。トレッキングシューズや歩きやすいスニーカーで訪れましょう。</li>
            <li><strong>奥大井湖上駅の立ち寄り:</strong> 近くにある大井川鐵道井川線の「奥大井湖上駅」も湖に浮かぶ秘境駅として絶景スポットです。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
