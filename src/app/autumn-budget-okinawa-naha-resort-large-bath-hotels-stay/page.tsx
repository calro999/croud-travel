import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の沖縄・那覇×格安】快適オフシーズン旅！大浴場付き1泊2,000円〜5,000円台の高コスパリゾートホテル5選【2026最新】',
  description: '猛暑と台風が去り、最高気温25度前後の最も過ごしやすい秋の沖縄！オフシーズンで宿泊費が大幅ダウンする今こそチャンス。国際通り近くで大浴場やサウナ完備の格安ホテル5選。ワイズキャビン那覇、ダイワロイネット国際通り、ホテルリソルトリニティを徹底比較！',
  keywords: '那覇 格安 ホテル, 沖縄 大浴場 ホテル, 那覇 国際通り ホテル 安い, 秋の沖縄 旅行, ワイズキャビン那覇国際通り, ホテルリソルトリニティ那覇',
  openGraph: {
    title: '【秋の沖縄・那覇×格安】快適オフシーズン旅！大浴場付き1泊2,000円〜5,000円台の高コスパリゾートホテル5選【2026最新】',
    description: '秋の快適オフシーズン沖縄！大浴場付き1泊2,000円〜5,000円台の高コスパ那覇ホテル5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-budget-okinawa-naha-resort-large-bath-hotels-stay',
  }
};

export default function OkinawaBudgetAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/182884/182884.jpg"
          alt="秋の沖縄那覇・過ごしやすい快適気候と大浴場付き格安リゾートホテル"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">格安・沖縄特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">1泊目安: 2,000円台〜5,000円台</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の沖縄・那覇×格安】快適オフシーズン旅！大浴場付き1泊2,000円〜5,000円台の高コスパリゾートホテル5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            夏の厳しい暑さが和らぎ、からりとした秋晴れが続く10月・11月の沖縄。航空券も宿泊費も一気に値下がりするベストシーズンに、大浴場やサウナ付きで優雅に滞在できる那覇のコスパ最強ホテルをご案内します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">那覇格安大浴場ホテル5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-teal-600 pl-3">
            秋こそ沖縄旅行の「真のベストシーズン」な理由
          </h2>
          <p className="mb-4 text-stone-700">
            沖縄の秋（10月中旬〜11月）は、平均気温が23〜25℃前後と半袖で心地よく過ごせる快適な気候。海風が爽やかで、首里城公園や国際通り、やちむんの里の散策など街歩き観光に最も適した季節です。
          </p>
          <p className="text-stone-700">
            夏休み期間のハイシーズン価格から一転してホテルの宿泊費が下落するため、ハイスペックな大浴場付きホテルやデザイナーズホテルに1泊2,000円〜5,000円台で泊まれるのが最大の魅力。浮いたお金で沖縄あぐー豚しゃぶしゃぶやステーキ、泡盛を存分に堪能しましょう。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-teal-600 rounded-full inline-block"></span>
            楽天トラベル高評価！那覇の大浴場付き格安ホテル5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/166949/166949.jpg"
                  alt="ワイズキャビン＆ホテル那覇国際通り"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.3</span>
                    <span className="text-stone-400 text-xs">(793件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ワイズキャビン＆ホテル那覇国際通り
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: ゆいレール各駅 / ゆいレール県庁前駅徒歩３分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ゆったり寛げる男女別サウナ付大浴場併設！キャビン・洋室・和室と幅広いラインナップ！！
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥2,890〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F166949%2F166949.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/172254/172254.jpg"
                  alt="グリーンリッチホテル＆カプセル那覇　人工温泉・二股湯の華"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.02</span>
                    <span className="text-stone-400 text-xs">(732件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    グリーンリッチホテル＆カプセル那覇　人工温泉・二股湯の華
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 那覇空港 / 那覇空港より車で１０分、ゆいレール美栄橋駅より徒歩８分、ゆいレール県庁前駅より徒歩９分、コンビニ目の前、国際通り徒歩圏内
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    国際通り徒歩圏内■ホテル＆カプセル融合型■大浴場・最上階プライベートジャグジー完備(プラン販売中)
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥3,600〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172254%2F172254.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/128440/128440.jpg"
                  alt="ダイワロイネットホテル那覇国際通り"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.31</span>
                    <span className="text-stone-400 text-xs">(1755件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ダイワロイネットホテル那覇国際通り
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: ゆいレール各駅 / 那覇空港からゆいレールで約20分、「牧志」駅下車直結、徒歩約1分！！国際通りに面しています。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    【2025.2.1リニューアル♪】 ゆいレール牧志駅直結！観光拠点に！沖縄食材の朝食ビュッフェ♪
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,090〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128440%2F128440.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/182884/182884.jpg"
                  alt="ホテルリソルトリニティ那覇"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.53</span>
                    <span className="text-stone-400 text-xs">(1018件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテルリソルトリニティ那覇
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 那覇空港 / ゆいレール「旭橋駅」出入口2より徒歩3分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    2022年4月1日開業。国際通りまで徒歩圏の絶好の立地。大浴場を備え、上質なくつろぎをご提供。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,100〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182884%2F182884.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/56974/56974.jpg"
                  alt="ホテルルートイン那覇泊港"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.04</span>
                    <span className="text-stone-400 text-xs">(1653件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテルルートイン那覇泊港
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 那覇空港 / 那覇空港より車で約１０分（４．５ｋｍ）/モノレール美栄橋駅より徒歩５分。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    &amp;#9830;14階展望大浴場完備&amp;#9830;朝食無料サービス&amp;#9830;WOWOW無料視聴可能
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,200〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56974%2F56974.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">秋の那覇滞在のアドバイス</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>ゆいレールフリー乗車券:</strong> 24時間券（800円）や48時間券を活用すると、那覇空港から首里城まで自由に移動できます。</li>
            <li><strong>国際通りの屋台村:</strong> 地元の島唄ライブが聴ける居酒屋や沖縄おでん、ソーキそばなどローカルな夜市気分を味わえます。</li>
            <li><strong>持ち物:</strong> 日中は半袖で十分ですが、朝晩や冷房の効いた室内用に薄手のカーディガンがあると便利です。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
