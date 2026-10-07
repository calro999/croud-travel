import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の金沢×格安】兼六園の雪吊りと秋のカニ解禁！天然温泉付き1泊3,000円〜6,000円台の高コスパホテル5選【2026最新】',
  description: '11月1日から始まる兼六園の「雪吊り」と北陸のカニ解禁！宿泊費を賢く抑えつつ、天然温泉やサウナで極上の癒やしを満喫できる金沢のコスパ最強ホテル5選。the b金沢片町、スーパーホテルPremier、御宿野乃金沢など高評価宿を徹底比較！',
  keywords: '金沢 格安 ホテル, 金沢 天然温泉 ホテル 安い, 兼六園 雪吊り 宿, カニ解禁 金沢, スーパーホテルPremier金沢駅東口, 御宿野乃金沢',
  openGraph: {
    title: '【秋の金沢×格安】兼六園の雪吊りと秋のカニ解禁！天然温泉付き1泊3,000円〜6,000円台の高コスパホテル5選【2026最新】',
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
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の金沢×格安】兼六園の雪吊りと秋のカニ解禁！天然温泉付き1泊3,000円〜6,000円台の高コスパホテル5選
          </h1>
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
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
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
            <div className="md:col-span-7 space-y-3">
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

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
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

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
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

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
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

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
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

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
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
    </article>
  );
}
