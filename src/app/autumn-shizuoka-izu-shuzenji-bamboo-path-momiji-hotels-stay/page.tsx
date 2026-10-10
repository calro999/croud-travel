import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の伊豆・修善寺温泉】竹林の小径紅葉と桂川の清流散策！歴史薫る風雅なおすすめ名旅館5選【2026最新】',
  description: '「伊豆の小京都」修善寺温泉の竹林の小径と桂川に架かる朱塗りの橋を彩る鮮やかな紅葉。文化財の老舗宿や野趣あふれる離れ宿など厳選5宿をご紹介。柳生の庄、宙SORA、新井旅館の魅力を徹底比較！',
  keywords: '修善寺温泉 紅葉, 竹林の小径 見頃, 伊豆 修善寺 旅館, 柳生の庄, 新井旅館 文化財, 宙SORA 渡月荘金龍',
  openGraph: {
    title: '【秋の伊豆・修善寺温泉】竹林の小径紅葉と桂川の清流散策！歴史薫る風雅なおすすめ名旅館5選【2026最新】',
    description: '「伊豆の小京都」修善寺温泉の竹林の小径と桂川に架かる朱塗りの橋を彩る鮮やかな紅葉。歴史薫る名旅館5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-shizuoka-izu-shuzenji-bamboo-path-momiji-hotels-stay',
  }
};

export default function IzuShuzenjiAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/27983/27983.jpg"
          alt="秋の伊豆修善寺温泉・竹林の小径と桂川沿いの紅葉"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">秋の伊豆・温泉特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">見頃目安: 11月中旬〜12月上旬</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の伊豆・修善寺温泉】竹林の小径紅葉と桂川の清流散策！歴史薫る風雅なおすすめ名旅館5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            桂川のせせらぎに寄り添う石畳と竹林の青、そして頭上を覆う真紅のカエデ。文人墨客に愛された伊豆最古の湯の街で、贅沢な懐石料理と名湯に癒やされる珠玉の宿をご案内します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">修善寺温泉紅葉と名宿5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-amber-600 pl-3">
            伊豆の小京都・修善寺温泉で体験する風雅な紅葉小路
          </h2>
          <p className="mb-4 text-stone-700">
            開湯1200年以上の歴史を誇る修善寺温泉。秋が深まると、温泉街の中心を流れる桂川沿いの「竹林の小径」では、青々とした竹林と鮮やかに色づいた紅葉のコントラストが見事な絵巻物を生み出します。中央に置かれた円形ベンチに腰を下ろして見上げる紅葉の空は、日常の喧騒を忘れさせてくれる特別な空間です。
          </p>
          <p className="text-stone-700">
            恋愛成就のパワースポットとして知られる「恋の橋めぐり（渡月橋・虎渓橋など5つの橋）。」や、弘法大師ゆかりの修禅寺境内での散策、さらに約1万本のもみじが群生する「修善寺自然公園もみじ林」など見どころが凝縮されています。
          </p>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">中伊豆・歴史名湯ガイド：伊豆の小京都・修善寺温泉と竹林の小径</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/181124_Shuzenji_Onsen_Izu_Shizuoka_pref_Japan01s3.jpg/1280px-181124_Shuzenji_Onsen_Izu_Shizuoka_pref_Japan01s3.jpg"
                alt="伊豆の小京都・修善寺温泉と竹林の小径"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">伊豆の小京都・修善寺温泉と竹林の小径の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">修善寺温泉（しゅぜんじおんせん）は、静岡県伊豆市修善寺にあり、伊豆半島で最も歴史がある温泉。日本百名湯に選ばれている。</p>
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
            楽天トラベル高評価！修善寺温泉の厳選名旅館5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/72797/72797.jpg"
                  alt="修善寺温泉　柳生の庄"
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
                    <span className="text-amber-500 font-bold text-sm">★ 5</span>
                    <span className="text-stone-400 text-xs">(36件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    修善寺温泉　柳生の庄
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 修善寺駅 / 伊豆箱根鉄道　修善寺駅から車で約１０分 東名高速道路沼津ICまたは新東名高速道路長泉沼津ICから30分　
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    修善寺温泉の奥にある閑静な旅館。本格懐石料理と露天風呂が好評。露天風呂付客室や離れもおすすめ。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥54,450〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72797%2F72797.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/27983/27983.jpg"
                  alt="修善寺温泉　宙ＳＯＲＡ　渡月荘金龍"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.71</span>
                    <span className="text-stone-400 text-xs">(633件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    修善寺温泉　宙ＳＯＲＡ　渡月荘金龍
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 修善寺駅 / 伊豆箱根鉄道修善寺駅から路線バスまたはタクシー（送迎不可）/東名高速沼津ICから伊豆縦貫道・伊豆中央道経由約３５分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    客室からは四季を感じられる自然が一望できます。月替りの会席は人気の絶品です。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥13,200〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27983%2F27983.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/31865/31865.jpg"
                  alt="修善寺温泉　国の登録文化財の宿　新井旅館"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.56</span>
                    <span className="text-stone-400 text-xs">(267件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    修善寺温泉　国の登録文化財の宿　新井旅館
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 修善寺駅 / 伊豆箱根鉄道線 修善寺駅よりバスまたはタクシーで10分／東名・新東名高速 沼津ICより伊豆縦貫道経由45分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ミシュランで二つ星の竹林の小径まで徒歩2分、修善寺温泉の中心で観光に便利です
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥24,420〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31865%2F31865.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/130639/130639.jpg"
                  alt="修善寺温泉　五葉館"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.57</span>
                    <span className="text-stone-400 text-xs">(125件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    修善寺温泉　五葉館
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 修善寺駅 / 伊豆箱根鉄道　修善寺駅よりバスで８分／お車は、東名沼津ICより伊豆縦貫道・伊豆中央道・修善寺道路で約30分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    旅のご褒美は、口の中でとろける伊豆牛と3つの貸切風呂。美味と湯に癒される、特別な時間をお届けします。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥20,740〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F130639%2F130639.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/1645/1645.jpg"
                  alt="湯めぐりの宿　修善寺温泉　桂川（共立リゾート）"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.34</span>
                    <span className="text-stone-400 text-xs">(1988件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    湯めぐりの宿　修善寺温泉　桂川（共立リゾート）
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 修善寺駅 / 伊豆箱根鉄道修善寺駅よりタクシーで８分。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    2021年1月グランドオープン◇無料の7つの貸切風呂で楽しむ美肌の修善寺温泉
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥14,900〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1645%2F1645.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">修善寺温泉の秋の過ごし方</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>修善寺もみじまつり:</strong> 例年11月中旬から下旬にかけてもみじ林が公開され、富士山を遠望しながら散策を楽しめます。</li>
            <li><strong>竹林の小径の夜間ライトアップ:</strong> 日没後には切り絵の円形ライトアップが行われ、昼とは一変したロマンチックな雰囲気に包まれます。</li>
            <li><strong>ご当地グルメ:</strong> 伊豆名物の本わさびを使った「わさび丼」や、手打ち蕎麦のランチがおすすめです。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
