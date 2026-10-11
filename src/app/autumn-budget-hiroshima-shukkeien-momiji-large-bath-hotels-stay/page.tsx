import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '秋の広島×格安：縮景園の紅葉ライトアップと旬の牡蠣・お好み焼き！大浴場付き1泊3,000円〜6,000円台のコスパ最強ホテル5選「2026最新」',
  description: '名勝「縮景園」の幻想的なもみじライトアップと平和記念公園の紅葉！広島名物のお好み焼きや秋に旬を迎える焼き牡蠣を満喫。大浴場やサウナ完備で1泊3,000円〜6,000円台で泊まれる広島のコスパ最強ホテル5選。アパホテル広島駅前大橋、トラストホテルなどを徹底比較！',
  keywords: '広島 格安 ホテル, 広島 大浴場 ホテル 安い, 縮景園 もみじまつり ライトアップ, 広島 お好み焼き 宿, アパホテル広島駅前大橋, トラストホテル 広島',
  openGraph: {
    title: '秋の広島×格安：縮景園の紅葉ライトアップと旬の牡蠣・お好み焼き！大浴場付き1泊3,000円〜6,000円台のコスパ最強ホテル5選「2026最新」',
    description: '縮景園もみじライトアップと牡蠣・お好み焼き！大浴場付き1泊3,000円〜6,000円台のコスパ最強広島ホテル5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-budget-hiroshima-shukkeien-momiji-large-bath-hotels-stay',
  }
};

export default function HiroshimaBudgetAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/153290/153290.jpg"
          alt="秋の広島・名勝縮景園の紅葉ライトアップと大浴場付き格安ホテル"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">格安・中国特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">1泊目安: 3,000円台〜6,000円台</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">「秋の広島×格安」縮景園の紅葉ライトアップと旬の牡蠣・お好み焼き！大浴場付き1泊3,000円〜6,000円台のコスパ最強ホテル5選</h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            池の水面に映り込む縮景園の鮮やかな紅葉と夜間ライトアップ。宮島観光の拠点としても便利な広島駅・八丁堀周辺で、大浴場やサウナ付きながら驚きのリーズナブル料金で泊まれる名宿をご案内します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">広島格安大浴場ホテル5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-teal-600 pl-3">
            歴史庭園「縮景園」の紅葉絵巻と広島秋の美食トリップ
          </h2>
          <p className="mb-4 text-stone-700">
            浅野藩主の別邸として築造された名勝「縮景園」。秋を迎えると濯纓池（たくえいち）の周りを囲むモミジやハゼの木が一斉に深紅に染まり、「もみじまつり」期間中の夜間ライトアップでは幽玄な別世界が広がります。
          </p>
          <p className="text-stone-700">
            秋は広島湾の牡蠣が旬を迎える季節。熱々のお好み焼きに大粒の牡蠣をトッピングした名物グルメを堪能し、大浴場で手足を伸ばして寛ぐのが賢い広島ステイの醍醐味です。
          </p>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">広島・名勝回遊庭園ガイド：名勝庭園・縮景園のもみじ茶会と紅葉</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Takueichi_Pond_in_Shukkei_Garden_19.jpg/1280px-Takueichi_Pond_in_Shukkei_Garden_19.jpg"
                alt="名勝庭園・縮景園のもみじ茶会と紅葉"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">名勝庭園・縮景園のもみじ茶会と紅葉の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">縮景園（しゅっけいえん）は、広島県広島市中区上幟町にある庭園。</p>
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
            楽天トラベル高評価！広島の大浴場付き格安ホテル5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/183824/183824.jpg"
                  alt="トラストホテル"
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
                    <span className="text-stone-400 text-xs">(743件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    トラストホテル
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 広島駅 / 広島駅より徒歩6分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    個室とカプセルが充実のビジネスホテル、朝食無料、大浴場、広島駅より徒歩6分
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥3,700〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183824%2F183824.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/3145/3145.jpg"
                  alt="広島パシフィックホテル"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.13</span>
                    <span className="text-stone-400 text-xs">(2844件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    広島パシフィックホテル
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 広島駅 / JR広島駅からタクシー約5分。路面電車なら「女学院前」徒歩1分。迷わず着ける好立地。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    【男性専用サウナ亀の家】100℃の熱気×オートロウリュで整う。宿泊者無料。心身をリセットし再起動！
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥3,800〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F3145%2F3145.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/153290/153290.jpg"
                  alt="アパホテル〈広島駅前大橋〉"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.25</span>
                    <span className="text-stone-400 text-xs">(5230件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    アパホテル〈広島駅前大橋〉
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 広島駅 / ［山陽新幹線＋JR各線］広島駅南口8番出口から徒歩4分［市内電車］広島電停から徒歩6分　［空港］広島駅から直通バス50分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ご宿泊者様専用露天風呂付大浴殿完備！おいしい朝食ビュッフェ付きプランあり！
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,500〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153290%2F153290.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/191892/191892.jpg"
                  alt="アパホテル〈広島駅前新幹線口〉"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.16</span>
                    <span className="text-stone-400 text-xs">(705件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    アパホテル〈広島駅前新幹線口〉
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 広島駅 / 山陽新幹線・JR各線「広島駅」新幹線口（北口）徒歩4分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    大浴殿・露天風呂完備！観光・ビジネスの拠点ホテルにおすすめです。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,040〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F191892%2F191892.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/183389/183389.jpg"
                  alt="天然温泉　芸州の湯　ドーミーイン広島ＡＮＮＥＸ（ドーミーイン・御宿野乃　ホテルズグループ）"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.41</span>
                    <span className="text-stone-400 text-xs">(956件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天然温泉　芸州の湯　ドーミーイン広島ＡＮＮＥＸ（ドーミーイン・御宿野乃　ホテルズグループ）
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 広島駅 / バス：広島電鉄　エキまちループ線「田中町」下車1分、路面電車：広島電鉄「銀山町(かなやまちょう）」電停より徒歩約10分。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    広島県に2店舗目OPEN！最上階には天然温泉と男女共に高温サウナを完備。水風呂も完備
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥6,384〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183389%2F183389.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">広島秋旅のワンポイント</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>宮島観光との組み合わせ:</strong> 広島駅からJR山陽本線で宮島口まで約25分。島内ホテルよりも市内ホテルの方が価格が大幅にリーズナブルです。</li>
            <li><strong>お好み村・駅ビルグルメ:</strong> 広島駅ビル「ekie」や八丁堀のお好み村には名店が集結しており、気軽に食べ比べが楽しめます。</li>
            <li><strong>路面電車（広電）の活用:</strong> 広島市内観光には広電の1日乗車券（700円）が便利です。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
