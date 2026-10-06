import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の松山・道後温泉×格安】松山城の紅葉と最古の名湯外湯めぐり！1泊4,000円台〜のコスパ最強おすすめ宿5選【2026最新】',
  description: '改修を終え全館営業を再開した「道後温泉本館」と松山城の秋パノラマ！名物宇和島鯛めしやみかんスイーツを満喫。温泉大浴場やサウナ完備で1泊4,000円〜6,000円台で泊まれる道後・松山市内の格安宿5選。ダイワロイネットホテル松山、喜助の宿、にぎたつ会館を徹底比較！',
  keywords: '道後温泉 格安 宿, 松山 大浴場 ホテル 安い, 松山城 紅葉, 道後温泉本館 外湯めぐり, ダイワロイネットホテル松山, 喜助の宿 松山',
  openGraph: {
    title: '【秋の松山・道後温泉×格安】松山城の紅葉と最古の名湯外湯めぐり！1泊4,000円台〜のコスパ最強おすすめ宿5選【2026最新】',
    description: '道後温泉本館と松山城の秋紅葉！大浴場付き1泊4,000円台〜のコスパ最強おすすめ宿5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-budget-ehime-matsuyama-dogo-onsen-hotels-stay',
  }
};

export default function MatsuyamaBudgetAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/151213/151213.jpg"
          alt="秋の松山道後温泉・道後温泉本館のレトロな街並みと格安温泉ホテル"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">格安・四国特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">1泊目安: 4,000円台〜6,000円台</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の松山・道後温泉×格安】松山城の紅葉と最古の名湯外湯めぐり！1泊4,000円台〜のコスパ最強おすすめ宿5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            保存修理工事を終えて約5年半ぶりに全館営業を再開した「道後温泉本館」。城山全体が色づく松山城の絶景と、愛媛名物・鯛めしを堪能しながら、手頃な料金で名湯に浸かれる格安宿をご紹介します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">松山・道後温泉格安宿5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-teal-600 pl-3">
            道後温泉は「外湯めぐり」と「街中コスパホテル」の組み合わせがお得
          </h2>
          <p className="mb-4 text-stone-700">
            日本三古湯の一つ・道後温泉の最大の醍醐味は、重要文化財「道後温泉本館」、飛鳥時代の建築様式を取り入れた「飛鳥乃湯泉（あすかのゆ）」、地元民に愛される「椿の湯」の3大外湯めぐりです。
          </p>
          <p className="text-stone-700">
            高価格帯の旅館に泊まる代わりに、市内中心部や道後温泉街のリーズナブルなホテル（1泊4,000円〜6,000円台）を活用すれば、外湯の入浴料や個室休憩室代を惜しみなく楽しめます。路面電車（坊っちゃん列車）が走るノスタルジックな城下町散策を心ゆくまで満喫しましょう。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-teal-600 rounded-full inline-block"></span>
            楽天トラベル高評価！松山・道後温泉の格安・コスパ宿5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/151213/151213.jpg"
                  alt="ダイワロイネットホテル松山"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.43</span>
                    <span className="text-stone-400 text-xs">(2291件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ダイワロイネットホテル松山
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 松山市駅・道後温泉駅 / 市内路面電車「大街道駅」より徒歩約1分の駅ちかホテル。松山空港からリムジンバス（約30分）大街道下車、徒歩約1分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ★基本セミセパレートバス採用★路面電車「大街道駅」徒歩約1分「道後温泉駅」まで約15分♪観光拠点に◎
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,670〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F151213%2F151213.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/15880/15880.jpg"
                  alt="道後温泉　にぎたつ会館"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.03</span>
                    <span className="text-stone-400 text-xs">(1721件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    道後温泉　にぎたつ会館
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 道後温泉 / ＪＲ松山駅より路面電車２０分→道後温泉駅下車→徒歩５分 伊佐爾波神社の右手
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    道後温泉内に位置し、観光＆ビジネスに便利！　
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,800〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15880%2F15880.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/188927/188927.jpg"
                  alt="サウナ＆スパホテル　喜助の宿　松山駅前店"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.58</span>
                    <span className="text-stone-400 text-xs">(797件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    サウナ＆スパホテル　喜助の宿　松山駅前店
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 松山（愛媛） / ＪＲ　松山駅より徒歩約３分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    サウナランキング2023で日本１位を受賞した5つのサウナと地下1,700ｍから湧き出た天然温泉
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,400〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188927%2F188927.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/226/226.jpg"
                  alt="道後温泉　ホテルパティオ・ドウゴ"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.4</span>
                    <span className="text-stone-400 text-xs">(2017件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    道後温泉　ホテルパティオ・ドウゴ
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 松山空港 / 先ずは道後温泉本館を目指して下さい。ホテルは道後温泉本館の北側真向かい。温泉とホテルの間にある石畳の道へお入り下さい。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    道後温泉本館に一番近いヨーロピアンホテル　”HOTEL PATIO DOGO”
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥6,600〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F226%2F226.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/183045/183045.jpg"
                  alt="レフ松山市駅　ｂｙ　ベッセルホテルズ｜ＲＥＦ松山市駅｜サウナ付大浴場（松山市駅隣接）"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.49</span>
                    <span className="text-stone-400 text-xs">(1121件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    レフ松山市駅　ｂｙ　ベッセルホテルズ｜ＲＥＦ松山市駅｜サウナ付大浴場（松山市駅隣接）
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 松山市 / 伊予鉄「松山市駅」から徒歩1分■松山空港から約24分 ■松山自動車道松山ICから車で約15分■松山港から約26分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    サウナ付大浴場有！伊予鉄「松山市駅」横。道後温泉へ約20分、松山市内の観光やビジネス利用に便利。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥6,650〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183045%2F183045.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">松山・道後温泉秋旅のポイント</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>松山城ロープウェイ＆リフト:</strong> 城山のモミジを眺めながら登る一人乗りリフトが爽快。天守からは瀬戸内海と紅葉の大パノラマが広がります。</li>
            <li><strong>二大鯛めし食べ比べ:</strong> 炊き込みご飯の「松山鯛めし」と、新鮮な鯛の刺身を特製タレと生卵で和えてご飯に乗せる「宇和島鯛めし」の両方を味わってみましょう。</li>
            <li><strong>道後ハイカラ通り:</strong> 道後温泉駅前から本館まで続く商店街で、坊っちゃん団子や一六タルト、搾りたてみかんジュースの蛇口体験が楽しめます。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
