import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の高知×格安】高知城の紅葉とひろめ市場のカツオ藁焼き！大浴場付き1泊3,000円〜6,000円台のコスパ最強ホテル5選【2026最新】',
  description: '追手門と天守が一枚の写真に収まる名城・高知城の秋紅葉と、日曜市・ひろめ市場の戻りカツオ藁焼きタタキ！大浴場やサウナ完備で1泊3,000円〜6,000円台で泊まれる高知市内の格安ホテル5選。サウスブリーズホテル、ホテル高砂などを徹底比較！',
  keywords: '高知 格安 ホテル, 高知 大浴場 サウナ ホテル, 高知城 紅葉, ひろめ市場 カツオのタタキ, サウスブリーズホテル高知海月, ホテル高砂 高知',
  openGraph: {
    title: '【秋の高知×格安】高知城の紅葉とひろめ市場のカツオ藁焼き！大浴場付き1泊3,000円〜6,000円台のコスパ最強ホテル5選【2026最新】',
    description: '高知城の紅葉とひろめ市場の戻りカツオ！大浴場付き1泊3,000円〜6,000円台のコスパ最強高知ホテル5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-budget-kochi-castle-hirome-market-onsen-hotels-stay',
  }
};

export default function KochiBudgetAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/16087/16087.jpg"
          alt="秋の高知・高知城の紅葉とひろめ市場近くの大浴場付き格安ホテル"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">格安・四国特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">1泊目安: 3,000円台〜6,000円台</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の高知×格安】高知城の紅葉とひろめ市場のカツオ藁焼き！大浴場付き1泊3,000円〜6,000円台のコスパ最強ホテル5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            現存十二天守の一つ・高知城を包む鮮やかな紅葉と、秋に脂が乗り切った「戻りカツオ」。ひろめ市場で塩タタキと土佐の地酒を豪快に味わい、大浴場で手足を伸ばして寛げる高知の格安宿をご紹介します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">高知格安大浴場ホテル5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-teal-600 pl-3">
            秋は「戻りガツオ」の最旬期！ひろめ市場を遊び尽くすコスパ旅
          </h2>
          <p className="mb-4 text-stone-700">
            高知の秋はグルメの黄金期。三陸沖から南下してきた「戻りカツオ」は、初夏の初ガツオとは比べものにならないほど濃厚な脂が乗り、藁焼きの香ばしい煙で炙った熱々の「塩タタキ」にニンニクスライスを乗せて頬張る味は感動的です。
          </p>
          <p className="text-stone-700">
            夜のひろめ市場は連日大賑わい。徒歩圏内や市内中心部の大浴場付き格安ホテルを予約しておけば、時間を気にせず土佐酒を満喫し、夜は広い湯船でリフレッシュできます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-teal-600 rounded-full inline-block"></span>
            楽天トラベル高評価！高知の大浴場付き格安ホテル5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8682/8682.jpg"
                  alt="サウスブリーズホテル　高知海月"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.24</span>
                    <span className="text-stone-400 text-xs">(2972件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    サウスブリーズホテル　高知海月
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 高知駅 / 文化プラザかるぽーと徒歩1分・はりまや橋観光バスターミナル徒歩３分・はりまや橋徒歩7分・高知駅車で5分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    朝ごはんフェス四国１位！女性経営らしい細やかな気配りが嬉しいホテル／展望大浴場／全室Wifi無料
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥3,470〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8682%2F8682.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/182859/182859.jpg"
                  alt="ホテルベストプライス高知"
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
                    <span className="text-stone-400 text-xs">(690件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテルベストプライス高知
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 高知駅 / JR高知駅より車で約7分／高知空港よりバスで約20分、バス停「宝永町駅」より徒歩約4分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    全室16平米以上の広々客室！大浴場＆サウナ完備！ファミリーや女子会向けの特別室もご用意！
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,860〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182859%2F182859.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/16087/16087.jpg"
                  alt="ホテル高砂＜高知県＞"
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
                    <span className="text-stone-400 text-xs">(693件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテル高砂＜高知県＞
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 高知駅 / 高知駅より徒歩３分。繁華街まで５分圏内、高知IC車１０分。高知空港から車で３０分。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    高知駅徒歩３分繁華街まで徒歩５分圏内 とにかく立地が良い和モダンなホテルです。全室禁煙です。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,300〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16087%2F16087.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/44261/44261.jpg"
                  alt="亀の井ホテル　高知"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.15</span>
                    <span className="text-stone-400 text-xs">(1111件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    亀の井ホテル　高知
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 伊野駅 / ＪＲ土讃線　伊野駅より車で約５分（約２．５キロ）／高知自動車道　伊野ＩＣより国道３３号線を松山方面へ約１５分（約６ｋｍ）
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    清流仁淀川を見下ろす全室仁淀川ビューの温泉宿。絶景の露天風呂や高知の食材を使用した会席料理を堪能！
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥6,153〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44261%2F44261.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/40671/40671.jpg"
                  alt="スーパーホテル高知"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.15</span>
                    <span className="text-stone-400 text-xs">(2944件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    スーパーホテル高知
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 高知駅 / ＪＲ高知駅から徒歩約４分／高知ＩＣから車で約１０分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    無料朝食＆男女入替制天然温泉のあるビジネスホテル♪
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥6,870〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40671%2F40671.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">高知旅行のおすすめアクティビティ</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>日曜市の散策:</strong> 300年以上の歴史を誇る日本最大級の街路市。約1kmにわたって約300店が並び、揚げたての「いも天」や新鮮な柑橘が名物です。</li>
            <li><strong>桂浜の散策:</strong> 坂本龍馬像が太平洋を見下ろす景勝地。秋の波音を聞きながらの散策が心地よい定番コースです。</li>
            <li><strong>ひろめ市場の席取り:</strong> 夕方17時〜18時台は混雑するため、少し早めの入店か、相席で地元の人と交流するのがおすすめです。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
