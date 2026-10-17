import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-ishikawa-kanazawa-onsen-kenrokuen-hotels-stay/",
  },

  title: '秋の金沢×格安：兼六園の雪吊りと秋のカニ解禁！天然温泉付き1泊3,000円〜6,000円台の高コスパホテル5選「2026最新」',
  description: '11月1日から始まる兼六園の「雪吊り」と北陸のカニ解禁！宿泊費を賢く抑えつつ、天然温泉やサウナで極上の癒やしを満喫できる金沢のコスパ最強ホテル5選。the b金沢片町、スーパーホテルPremier、御宿野乃金沢など高評価宿を徹底比較！',
  keywords: '金沢 格安 ホテル, 金沢 天然温泉 ホテル 安い, 兼六園 雪吊り 宿, カニ解禁 金沢, スーパーホテルPremier金沢駅東口, 御宿野乃金沢',
  openGraph: {
    title: '秋の金沢×格安：兼六園の雪吊りと秋のカニ解禁！天然温泉付き1泊3,000円〜6,000円台の高コスパホテル5選「2026最新」',
    description: '兼六園の雪吊りと秋のカニ解禁！天然温泉付き1泊3,000円〜6,000円台の金沢コスパ最強ホテル5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-budget-ishikawa-kanazawa-onsen-kenrokuen-hotels-stay',
  }
};

export default function KanazawaBudgetAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/180588/180588.jpg"
          alt="秋の金沢・兼六園の雪吊り風景と天然温泉付き格安ホテル"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">格安・北陸特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">1泊目安: 3,000円台〜6,000円台</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">「秋の金沢×格安」兼六園の雪吊りと秋のカニ解禁！天然温泉付き1泊3,000円〜6,000円台の高コスパホテル5選</h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            情緒あふれるひがし茶屋街と兼六園の雪吊りライトアップ。11月上旬に解禁される香箱ガニやのどぐろを近江町市場で満喫し、自家源泉やサウナで寛げる金沢の格安温泉ホテルをご紹介します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">金沢格安天然温泉ホテル5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-teal-600 pl-3">
            「天然温泉付きビジホ」で賢く泊まり、金沢グルメを満喫
          </h2>
          <p className="mb-4 text-stone-700">
            秋の金沢は、紅葉と伝統の「雪吊り」が重なる最も風情ある季節。さらに11月6日にはズワイガニ漁が解禁され、メスの「香箱ガニ（こうばこがに）」の内子・外子を味わえる絶品の季節です。
          </p>
          <p className="text-stone-700">
            高級老舗旅館も魅力的ですが、金沢市内には駅前や繁華街（片町・香林坊）を中心に「天然温泉大浴場」を備えた高コスパホテルが充実しています。宿泊費を3,000円〜6,000円台に抑え、浮いた予算で近江町市場の海鮮丼や割烹料理を贅沢に味わうのが最も満足度の高い旅スタイルです。
          </p>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">加賀・名城歴史ガイド：加賀百万石の栄華・金沢城公園と菱櫓</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Kanazawa-M-5932.jpg/1280px-Kanazawa-M-5932.jpg"
                alt="加賀百万石の栄華・金沢城公園と菱櫓"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">加賀百万石の栄華・金沢城公園と菱櫓の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">金沢城（かなざわじょう。旧字体: 金澤城）は、加賀国石川郡尾山（現・石川県金沢市丸の内）にある日本の城。江戸時代には加賀藩主前田氏の居城だった。城址は国の史跡に指定されており、城址を含む一帯は金沢城公園（かなざわじょうこうえん）として整備されている。</p>
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
            楽天トラベル高評価！金沢の天然温泉付き格安ホテル5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/4806/4806.jpg"
                  alt="ｔｈｅ　ｂ　金沢片町"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.32</span>
                    <span className="text-stone-400 text-xs">(1264件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ｔｈｅ　ｂ　金沢片町
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 金沢駅 / 金沢駅からバスで10分(金沢駅東口⑨⑩⑪のりばから乗車）片町バス停から徒歩2分/金沢西I.Cより車で10分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    【北陸エリア初進出】ｔｈｅ　ｂ　金沢片町が８月１日グランドオープン！全室32㎡以上｜バス・トイレ別
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥3,094〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4806%2F4806.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/18391/18391.jpg"
                  alt="アパホテル〈金沢中央〉"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.17</span>
                    <span className="text-stone-400 text-xs">(7294件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    アパホテル〈金沢中央〉
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 金沢駅 / ■片町スクランブル交差点30秒 ■金沢駅東口⑨⑩⑪乗り場から「片町」バス停下車徒歩1分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    最上階天然温泉・サウナ・岩盤浴完備、客室Wi-Fi無料。兼六園や21世紀美術館も徒歩圏内で観光便利。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥3,960〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18391%2F18391.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/180588/180588.jpg"
                  alt="天然温泉　鼓門の湯　スーパーホテルＰｒｅｍｉｅｒ金沢駅東口"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.42</span>
                    <span className="text-stone-400 text-xs">(1799件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天然温泉　鼓門の湯　スーパーホテルＰｒｅｍｉｅｒ金沢駅東口
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 金沢駅 / 金沢駅東口より徒歩7分。金沢東ICより約15分。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    金沢駅東口より徒歩７分！主要駅からのアクセスが良くビジネスや観光に便利♪
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,470〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180588%2F180588.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/147855/147855.jpg"
                  alt="天然温泉・健康ランド　金沢ゆめのゆ"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.08</span>
                    <span className="text-stone-400 text-xs">(609件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天然温泉・健康ランド　金沢ゆめのゆ
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 金沢駅 / 金沢駅発無料バス　10：45～18：45　の間、毎時間「４５分」に金沢駅西口団体バス乗降所を出発
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    天然温泉大浴場など各種施設も充実。ホテル満室時でも簡易宿泊施設がございます。お気軽にお問合せ下さい。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,500〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147855%2F147855.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/182423/182423.jpg"
                  alt="天然温泉　加賀の宝泉　御宿　野乃金沢（ドーミーイン・御宿野乃　ホテルズグループ）"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.55</span>
                    <span className="text-stone-400 text-xs">(2091件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天然温泉　加賀の宝泉　御宿　野乃金沢（ドーミーイン・御宿野乃　ホテルズグループ）
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 金沢駅 / JR金沢駅より徒歩15分または北鉄バス6～10番乗り場からバスで4分「武蔵が辻・近江町市場」バス停下車後徒歩1分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    「近江町市場」「兼六園」まで徒歩圏内！天然温泉大浴場＆サウナ完備！朝食は「お好み海鮮丼」
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥6,490〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182423%2F182423.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">金沢格安旅行の知恵袋</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>金沢市内1日フリー乗車券:</strong> 北鉄バスの1日券（800円）を使えば、兼六園、金沢21世紀美術館、ひがし茶屋街を効率よく巡ることができます。</li>
            <li><strong>金沢おでんの夕食:</strong> 車麩やバイ貝、カニ面（香箱ガニのおでん）など、安くて温まる金沢おでんの名店巡りが秋の醍醐味です。</li>
            <li><strong>兼六園ライトアップ無料開放:</strong> 秋のライトアップ期間は入園料が無料になるため、夜の鑑賞がとてもお得です。</li>
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
              📊 秋の金沢×格安：兼六園の雪吊りと秋のカニ解禁！天然温泉付き1泊3,000円〜6,000円台の高コスパホテル5選「2026最新」：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「秋の金沢×格安：兼六園の雪吊りと秋のカニ解禁！天然温泉付き1泊3,000円〜6,000円台の高コスパホテル5選「2026最新」」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 天然温泉　鼓門の湯　スーパーホテルＰｒｅｍｉｅｒ金沢駅東口</td>
                <td className="p-3 text-stone-600">石川県金沢市本町2-5-15</td>
                <td className="p-3 text-stone-600">金沢駅周辺</td>
                <td className="p-3 text-stone-600">ホテル専用駐車場、駐輪場はございません。近隣駐車場のご案内となります</td>
                <td className="p-3 font-bold text-amber-600">★4.43（1660件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,450〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180588%2F180588.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ｔｈｅ　ｂ　金沢片町</td>
                <td className="p-3 text-stone-600">石川県金沢市片町2-2-13</td>
                <td className="p-3 text-stone-600">金沢駅周辺</td>
                <td className="p-3 text-stone-600">提携①270台(16時間1,200円 24時間1,700円)②139台(15時〜11時1,200円)</td>
                <td className="p-3 font-bold text-amber-600">★4.32（1270件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,850〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4806%2F4806.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. アパホテル〈金沢中央〉</td>
                <td className="p-3 text-stone-600">石川県金沢市片町1-5-24</td>
                <td className="p-3 text-stone-600">金沢駅周辺</td>
                <td className="p-3 text-stone-600">ホテル駐車場1泊1650円(入庫から24時間まで)高さ制限あり。</td>
                <td className="p-3 font-bold text-amber-600">★4.17（7316件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,960〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18391%2F18391.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 天然温泉・健康ランド　金沢ゆめのゆ</td>
                <td className="p-3 text-stone-600">石川県金沢市藤江南3-26</td>
                <td className="p-3 text-stone-600">金沢駅周辺</td>
                <td className="p-3 text-stone-600">１４００台　無料駐車場は予約不要でご利用できます。　大型車も駐車OK!（有料）</td>
                <td className="p-3 font-bold text-amber-600">★4.06（576件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147855%2F147855.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 天然温泉　加賀の宝泉　御宿　野乃金沢（ドーミーイン・御宿野乃　ホテルズグループ）</td>
                <td className="p-3 text-stone-600">石川県金沢市下堤町1-1</td>
                <td className="p-3 text-stone-600">金沢駅周辺</td>
                <td className="p-3 text-stone-600">有り　先着順(76台)　1泊1,500円　長さ:5300㎜　全幅:1940㎜　高さ:2000㎜</td>
                <td className="p-3 font-bold text-amber-600">★4.54（1955件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,030〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182423%2F182423.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天然温泉　鼓門の湯　スーパーホテルＰｒｅｍｉｅｒ金沢駅東口</h3>
                  <span className="text-xs text-stone-400 ml-2">（すーぱーほてる　ぷれみあ　かなざわえきひがしぐち　てんねんおんせん　つづみもんのゆ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,450〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/180588/180588.jpg" alt="天然温泉　鼓門の湯　スーパーホテルＰｒｅｍｉｅｒ金沢駅東口 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>金沢駅東口より徒歩７分！主要駅からのアクセスが良くビジネスや観光に便利♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市本町2-5-15 ／ 最寄り駅：金沢 ／ 交通案内：金沢駅東口より徒歩7分。金沢東ICより約15分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>ホテル専用駐車場、駐輪場はございません。近隣駐車場のご案内となります</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「大浴場は小さめだが混雑状況を確認できて便利温泉(大浴場)は想像していたより小さめでした。部屋から浴場の混雑状況が確認できるため、空いている時間に入れば問題ないと思います。クチコミの詳細はこちら…　2026-08-22 11:51:34投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ｔｈｅ　ｂ　金沢片町</h3>
                  <span className="text-xs text-stone-400 ml-2">（ざ　びー　かなざわかたまち）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,850〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/4806/4806_room.jpg" alt="ｔｈｅ　ｂ　金沢片町 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【北陸エリア初進出】ｔｈｅ　ｂ　金沢片町が８月１日グランドオープン！全室32㎡以上｜バス・トイレ別</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市片町2-2-13 ／ 最寄り駅：金沢 ／ 交通案内：金沢駅からバスで10分(金沢駅東口⑨⑩⑪のりばから乗車）片町バス停から徒歩2分/金沢西I.Cより車で10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>提携①270台(16時間1,200円 24時間1,700円)②139台(15時〜11時1,200円)</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.27 ／ 立地 ★4.22 ／ 部屋 ★4.31 ／ 設備 ★4.17 ／ 風呂 ★4.21 ／ 食事 ★4.6</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「街の中心で立地抜群、次回は朝食も楽しみたい街の中心に立地していてコンビニも近く、夕食の場所も選び放題でした今回はホテルの朝食を利用できなかったので次回は利用したいと思いますクチコミの詳細は…　2026-10-10 07:23:11投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">アパホテル〈金沢中央〉</h3>
                  <span className="text-xs text-stone-400 ml-2">（あぱほてる＜かなざわちゅうおう＞）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,960〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/18391/18391_s.jpg" alt="アパホテル〈金沢中央〉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>最上階天然温泉・サウナ・岩盤浴完備、客室Wi-Fi無料。兼六園や21世紀美術館も徒歩圏内で観光便利。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市片町1-5-24 ／ 最寄り駅：金沢 ／ 交通案内：■片町スクランブル交差点30秒 ■金沢駅東口⑨⑩⑪乗り場から「片町」バス停下車徒歩1分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>ホテル駐車場1泊1650円(入庫から24時間まで)高さ制限あり。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.14 ／ 立地 ★4.22 ／ 部屋 ★4.15 ／ 設備 ★4.13 ／ 風呂 ★4.25 ／ 食事 ★4.21</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スパと接客は満足だが朝食会場の対応が残念リピーターです。以前はスパがありませんでしたが、今回利用して満足です。フロントスタッフの対応も良く全体的に満足ですが、朝食会場のお魚とキノコそば担当して…　2026-10-09 04:58:18投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天然温泉・健康ランド　金沢ゆめのゆ</h3>
                  <span className="text-xs text-stone-400 ml-2">（てんねんおんせん・けんこうらんど　かなざわゆめのゆ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/147855/147855_kan1.jpg" alt="天然温泉・健康ランド　金沢ゆめのゆ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>天然温泉大浴場など各種施設も充実。ホテル満室時でも簡易宿泊施設がございます。お気軽にお問合せ下さい。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市藤江南3-26 ／ 最寄り駅：金沢 ／ 交通案内：金沢駅発無料バス　10：45～18：45　の間、毎時間「４５分」に金沢駅西口団体バス乗降所を出発</p>
                  <p><strong>【駐車場・マイカー利用】</strong>１４００台　無料駐車場は予約不要でご利用できます。　大型車も駐車OK!（有料）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スーパー銭湯が充実、寝るだけならコスパ良しスーパー銭湯は充実していて文句なし!宿泊は間仕切りで簡易的なもので寝るだけを想定すればコスパはいいです。金沢駅から少し遠いですが、自家用移動前提なら問…　2026-08-24 07:23:38投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天然温泉　加賀の宝泉　御宿　野乃金沢（ドーミーイン・御宿野乃　ホテルズグループ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（てんねんおんせん　かがのほうせん　おんやど　ののかなざわ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,030〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/182423/182423.jpg" alt="天然温泉　加賀の宝泉　御宿　野乃金沢（ドーミーイン・御宿野乃　ホテルズグループ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>「近江町市場」「兼六園」まで徒歩圏内！天然温泉大浴場＆サウナ完備！朝食は「お好み海鮮丼」</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市下堤町1-1 ／ 最寄り駅：金沢 ／ 交通案内：JR金沢駅より徒歩15分または北鉄バス6～10番乗り場からバスで4分「武蔵が辻・近江町市場」バス停下車後徒歩1分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　先着順(76台)　1泊1,500円　長さ:5300㎜　全幅:1940㎜　高さ:2000㎜</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「お風呂とサウナは最高、部屋の湿気が残念お風呂、サウナとっても良かったです!ただ、安いプランだったからかも知れませんが、部屋の湿気がすごくてベタついた感じがあり少しカビ臭く感じてしまいました。立地や…　2026-08-28 09:45:54投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=182423&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！石川県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、石川県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">兼六園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">水戸偕楽園・岡山後楽園と並ぶ日本三名園の一つ。四季折々の庭園美が見事で、冬には雪の重みから枝を守る「雪吊り」が金沢の冬の風物詩として知られています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">金沢21世紀美術館</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「まちに開かれた公園のような美術館」をコンセプトとした現代アートの殿堂。レアンドロ・エルリッヒの「スイミング・プール」など体感型アートが世界的人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">ひがし茶屋街</h3>
                <p className="text-xs text-stone-600 leading-relaxed">キムスコ（細い格子）と呼ばれる出格子がある美しい木造茶屋建築が並ぶ重要伝統的建造物群保存地区。金箔体験やカフェ巡りを着物姿で楽しめます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">白米千枚田（しろよねせんまいだ）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本海に面した急斜面に1,004枚の小さな田んぼが重なり合う棚田の絶景。黄金色に輝く稲穂やイルミネーションイベント「あぜのきらめき」が幻想的です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 石川県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 石川県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </article>
  );
}
