import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-ehime-matsuyama-dogo-onsen-hotels-stay/",
  },

  title: '秋の松山・道後温泉×格安：松山城の紅葉と最古の名湯外湯めぐり！1泊4,000円台〜のコスパ最強おすすめ宿5選「2026最新」',
  description: '改修を終え全館営業を再開した「道後温泉本館」と松山城の秋パノラマ！名物宇和島鯛めしやみかんスイーツを満喫。温泉大浴場やサウナ完備で1泊4,000円〜6,000円台で泊まれる道後・松山市内の格安宿5選。ダイワロイネットホテル松山、喜助の宿、にぎたつ会館を徹底比較！',
  keywords: '道後温泉 格安 宿, 松山 大浴場 ホテル 安い, 松山城 紅葉, 道後温泉本館 外湯めぐり, ダイワロイネットホテル松山, 喜助の宿 松山',
  openGraph: {
    title: '秋の松山・道後温泉×格安：松山城の紅葉と最古の名湯外湯めぐり！1泊4,000円台〜のコスパ最強おすすめ宿5選「2026最新」',
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
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">「秋の松山・道後温泉×格安」松山城の紅葉と最古の名湯外湯めぐり！1泊4,000円台〜のコスパ最強おすすめ宿5選</h1>
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

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">四国・歴史名湯ガイド：日本三古湯・道後温泉本館と城下町松山</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/D%C5%8Dgo_Onsen.jpg/1280px-D%C5%8Dgo_Onsen.jpg"
                alt="日本三古湯・道後温泉本館と城下町松山"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">日本三古湯・道後温泉本館と城下町松山の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">道後温泉（どうごおんせん）は、四国・愛媛県松山市（旧国伊予国）に湧出する温泉。有馬温泉や白浜温泉と並ぶ日本三古湯の一つである。その存在は古代から知られ、万葉集巻一にも見える。なおかつてはこの周辺が温泉郡（おんせんぐん）（湯郡）と呼ばれていたが、これはこの温泉にちなむ地名である。 夏目漱石の小説『坊つちやん』（1905年）にも描かれ、愛媛県の代表的な観光地となっている。2007年8月に地域団体商標（地域ブランド）として認定された（申請者は道後温泉旅館協同組合、登録商標第5071495号）。</p>
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
            楽天トラベル高評価！松山・道後温泉の格安・コスパ宿5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
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

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
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

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
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

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
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

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
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
    
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 秋の松山・道後温泉×格安：松山城の紅葉と最古の名湯外湯めぐり！1泊4,000円台〜のコスパ最強おすすめ宿5選「2026最新」：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「秋の松山・道後温泉×格安：松山城の紅葉と最古の名湯外湯めぐり！1泊4,000円台〜のコスパ最強おすすめ宿5選「2026最新」」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th>
                  <th className="p-3">所在地</th>
                  <th className="p-3">最寄り駅・交通</th>
                  <th className="p-3">駐車場情報</th>
                  <th className="p-3">楽天評価</th>
                  <th className="p-3">最安目安</th>
                  <th className="p-3">予約・詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. ダイワロイネットホテル松山</td>
                <td className="p-3 text-stone-600">愛媛県松山市一番町2-6-5</td>
                <td className="p-3 text-stone-600">市内路面電車「大街道駅」より徒歩約1分の駅ちかホテル。松山空港からリム</td>
                <td className="p-3 text-stone-600">立体 38台／先着順・予約不可／1泊（14:00〜翌11:00）1,200円（税込）／車高2.05m</td>
                <td className="p-3 font-bold text-amber-600">★4.43（2303件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,590〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F151213%2F151213.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 道後温泉　にぎたつ会館</td>
                <td className="p-3 text-stone-600">愛媛県松山市道後姫塚118-2</td>
                <td className="p-3 text-stone-600">道後温泉駅周辺</td>
                <td className="p-3 text-stone-600">有り　78台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.02（1724件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15880%2F15880.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. サウナ＆スパホテル　喜助の宿　松山駅前店</td>
                <td className="p-3 text-stone-600">愛媛県松山市宮田町4　キスケＢＯＸ2階</td>
                <td className="p-3 text-stone-600">松山（愛媛）駅周辺</td>
                <td className="p-3 text-stone-600">有り　1,109台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.57（803件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188927%2F188927.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 道後温泉　ホテルパティオ・ドウゴ</td>
                <td className="p-3 text-stone-600">愛媛県松山市道後湯之町20-12</td>
                <td className="p-3 text-stone-600">松山空港駅周辺</td>
                <td className="p-3 text-stone-600">■先着順（予約不可）隣接の立体と屋外平面（かなり急な坂の上）約50台。1泊1台に付き800円。</td>
                <td className="p-3 font-bold text-amber-600">★4.4（2020件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F226%2F226.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. レフ松山市駅　ｂｙ　ベッセルホテルズ｜ＲＥＦ松山市駅｜サウナ付大浴場（松山市駅隣接）</td>
                <td className="p-3 text-stone-600">愛媛県松山市湊町5-2-2</td>
                <td className="p-3 text-stone-600">松山市駅周辺</td>
                <td className="p-3 text-stone-600">伊予鉄市駅西駐車場（レフ松山市駅から徒歩2分）（自走式立体駐車場 / 先着順）1,000円/泊</td>
                <td className="p-3 font-bold text-amber-600">★4.49（1125件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,570〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183045%2F183045.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 各宿の宿泊者リアルクチコミ・客室イメージ・項目別評価データ
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ダイワロイネットホテル松山</h3>
                  <span className="text-xs text-stone-400 ml-2">（だいわろいねっとほてるまつやま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,590〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/151213/151213_kan1.jpg" alt="ダイワロイネットホテル松山 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>★基本セミセパレートバス採用★路面電車「大街道駅」徒歩約1分「道後温泉駅」まで約15分♪観光拠点に◎</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県松山市一番町2-6-5 ／ 最寄り駅：主要駅 ／ 交通案内：市内路面電車「大街道駅」より徒歩約1分の駅ちかホテル。松山空港からリムジンバス（約30分）大街道下車、徒歩約1分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>立体 38台／先着順・予約不可／1泊（14:00〜翌11:00）1,200円（税込）／車高2.05m</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.42 ／ 立地 ★4.42 ／ 部屋 ★4.49 ／ 設備 ★4.43 ／ 風呂 ★4.42 ／ 食事 ★4.3</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「立地も部屋もサービスも良く、また利用したい立地もよく、お部屋も綺麗で、サービスも心地良く、満足しています。ぜひまた利用したいです!!クチコミの詳細はこちらから　https://review.t…　2026-10-10 16:13:20投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">道後温泉　にぎたつ会館</h3>
                  <span className="text-xs text-stone-400 ml-2">（どうごおんせん　にぎたつかいかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/15880/15880_sgl.jpg" alt="道後温泉　にぎたつ会館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>道後温泉内に位置し、観光＆ビジネスに便利！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県松山市道後姫塚118-2 ／ 最寄り駅：道後温泉 ／ 交通案内：ＪＲ松山駅より路面電車２０分→道後温泉駅下車→徒歩５分 伊佐爾波神社の右手</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　78台　無料　先着順</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.07 ／ 立地 ★4.04 ／ 部屋 ★3.89 ／ 設備 ★3.81 ／ 風呂 ★4.14 ／ 食事 ★4.16</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「道後温泉本館に近く、観光に最高の立地10月2日に宿泊いたしました。道後温泉本館にも近く、今回の旅の行程には最高の立地でした。クチコミの詳細はこちらから　https://review.tra…　2026-10-03 22:51:55投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">サウナ＆スパホテル　喜助の宿　松山駅前店</h3>
                  <span className="text-xs text-stone-400 ml-2">（さうなあんどすぱほてる　きすけのやど　まつやまえきまえてん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/188927/188927.jpg" alt="サウナ＆スパホテル　喜助の宿　松山駅前店 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>サウナランキング2023で日本１位を受賞した5つのサウナと地下1,700ｍから湧き出た天然温泉</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県松山市宮田町4　キスケＢＯＸ2階 ／ 最寄り駅：松山（愛媛） ／ 交通案内：ＪＲ　松山駅より徒歩約３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　1,109台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.44 ／ 立地 ★4.51 ／ 部屋 ★4.53 ／ 設備 ★4.6 ／ 風呂 ★4.68</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「松山に来るたび利用、サウナでくつろぐ松山に訪問した際は、利用しています。いろんなサウナもあり、くつろげました。駐車場もあり、便利です。また、利用します。クチコミの詳細はこちらから　https:…　2026-10-07 08:24:33投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">道後温泉　ホテルパティオ・ドウゴ</h3>
                  <span className="text-xs text-stone-400 ml-2">（どうごおんせん　ほてるぱてぃお・どうご）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/226/226_sgl.jpg" alt="道後温泉　ホテルパティオ・ドウゴ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>道後温泉本館に一番近いヨーロピアンホテル　”HOTEL PATIO DOGO”</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県松山市道後湯之町20-12 ／ 最寄り駅：松山空港 ／ 交通案内：先ずは道後温泉本館を目指して下さい。ホテルは道後温泉本館の北側真向かい。温泉とホテルの間にある石畳の道へお入り下さい。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>■先着順（予約不可）隣接の立体と屋外平面（かなり急な坂の上）約50台。1泊1台に付き800円。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.4 ／ 立地 ★4.47 ／ 部屋 ★4.35 ／ 設備 ★4.26 ／ 風呂 ★4.28 ／ 食事 ★3.91</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「建物は古いが掃除が行き届きリラックスできたホテルは古いが、掃除が行き届いていて良かったリラックス出来たクチコミの詳細はこちらから　https://review.travel.rakuten…　2026-10-09 09:38:16投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">レフ松山市駅　ｂｙ　ベッセルホテルズ｜ＲＥＦ松山市駅｜サウナ付大浴場（松山市駅隣接）</h3>
                  <span className="text-xs text-stone-400 ml-2">（れふまつやましえき　ばい　べっせるほてるず）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,570〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/183045/183045.jpg" alt="レフ松山市駅　ｂｙ　ベッセルホテルズ｜ＲＥＦ松山市駅｜サウナ付大浴場（松山市駅隣接） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>サウナ付大浴場有！伊予鉄「松山市駅」横。道後温泉へ約20分、松山市内の観光やビジネス利用に便利。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県松山市湊町5-2-2 ／ 最寄り駅：松山市 ／ 交通案内：伊予鉄「松山市駅」から徒歩1分■松山空港から約24分 ■松山自動車道松山ICから車で約15分■松山港から約26分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>伊予鉄市駅西駐車場（レフ松山市駅から徒歩2分）（自走式立体駐車場 / 先着順）1,000円/泊</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.47 ／ 立地 ★4.57 ／ 部屋 ★4.5 ／ 設備 ★4.46 ／ 風呂 ★4.46 ／ 食事 ★4.7</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「みかんジュースとソフトクリームに大満足朝ごはんのみかんジュースのに比べが嬉しい。また『ウエルカムソフトクリーム』は初。普段食べないのにおかわりしちゃった。クチコミの詳細はこちらから　https…　2026-10-01 10:44:52投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！愛媛県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、愛媛県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/D%C5%8Dgo_Onsen.jpg/1280px-D%C5%8Dgo_Onsen.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="道後温泉本館" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">道後温泉本館</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本最古の温泉の一つとされる道後温泉のシンボル。木造三層楼の重厚な和風建築は国指定重要文化財であり、『千と千尋の神隠し』のモデルとも言われています。 道後温泉（どうごおんせん）は、四国・愛媛県松山市（旧国伊予国）に湧出する温泉。有馬温泉や白浜温泉と並ぶ日本三古湯の一つである。その存在は古代から知られ、万葉集巻一にも見える。なおかつてはこの周辺が温泉郡（おんせんぐん）（湯郡）と呼ばれていたが、これはこの温泉にちなむ地名である。 夏目漱石の小説『坊つちやん』（1905年）にも描かれ、愛媛県の代表的な観光地とな…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">松山城</h3>
                <p className="text-xs text-stone-600 leading-relaxed">松山市の中心・勝山山頂に建つ現存12天守の一つ。ロープウェイやリフトで登ることができ、天守からは瀬戸内海と松山平野の360度パノラマが見渡せます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">しまなみ海道（来島海峡大橋）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">愛媛県今治市と広島県尾道市を結ぶ海上架橋ルート。「サイクリストの聖地」として世界中から絶賛され、世界初の3連吊橋から瀬戸内海の多島美を一望できます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">佐田岬（さだみさき）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本一細長い佐田岬半島。風力発電の風車が並ぶドライブコースを抜け、岬の先端の白い灯台からは豊予海峡を挟んで九州・大分県を望むダイナミックな景色です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 愛媛県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 愛媛県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </article>
  );
}
