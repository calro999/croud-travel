import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '秋の香嵐渓：4000本のもみじ狩りと巴川ライトアップ！三河の名湯と美食を味わうおすすめ宿5選「2026最新」',
  description: '東海随一の紅葉名所・足助「香嵐渓」の約4,000本のもみじと巴川に架かる待月橋！黄金色に輝く夜間ライトアップと名物五平餅。天然ラドン温泉の猿投温泉や足助の隠れ家宿など厳選5選。木もれ日、金泉閣、川澄屋を徹底比較！',
  keywords: '香嵐渓 紅葉, 香嵐渓 もみじまつり, 待月橋 ライトアップ, 猿投温泉 金泉閣, 足助 旅館, 豊田市 宿',
  openGraph: {
    title: '秋の香嵐渓：4000本のもみじ狩りと巴川ライトアップ！三河の名湯と美食を味わうおすすめ宿5選「2026最新」',
    description: '東海随一の紅葉名所・足助「香嵐渓」の約4,000本のもみじと待月橋ライトアップ！三河の名湯宿5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-aichi-toyota-korankei-momiji-lightup-hotels-stay',
  }
};

export default function KorankeiAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/7144/7144.jpg"
          alt="秋の香嵐渓・巴川と待月橋を彩る約4000本の紅葉ライトアップ"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">秋の愛知・東海特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">見頃・まつり: 11月上旬〜11月下旬</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">「秋の香嵐渓」4000本のもみじ狩りと巴川ライトアップ！三河の名湯と美食を味わうおすすめ宿5選</h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            寛永年間に香積寺の三栄和尚が一筋の祈りを込めて植えたのが始まりとされる香嵐渓の紅葉。清流・巴川を黄金と真紅に染める4,000本のもみじトンネルと、三河の名湯・天然ラドン温泉に癒やされる秋の贅沢ステイをご紹介します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">香嵐渓紅葉と三河名宿5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-amber-600 pl-3">
            東海随一の紅葉美「香嵐渓もみじまつり」と夜の黄金絵巻
          </h2>
          <p className="mb-4 text-stone-700">
            愛知県豊田市足助町に位置する香嵐渓は、毎年約50万人が訪れる日本屈指の紅葉名所です。11月1日から30日にかけて開催される「香嵐渓もみじまつり」では、赤く塗られた「待月橋（たいげつきょう）」周辺をはじめ、山全体が燃えるような紅葉に包まれます。夕暮れ時から始まるライトアップでは、飯盛山が黄金色に浮かび上がり、巴川の水面に揺らめく光景は圧巻です。
          </p>
          <p className="text-stone-700">
            香嵐渓周辺には、重伝建（重要伝統的建造物群保存地区）に選ばれた「足助の町並み」が広がり、白壁の土蔵や格子戸が残るレトロな散策も楽しめます。近隣の「猿投温泉」は医学的にも注目される天然ラドン泉が自生しており、紅葉狩りの疲れを極上の温泉で癒やすことができます。
          </p>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">秋の観光地情報・名所ガイド：足助・香嵐渓の渓谷美</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/K%C5%8Drankei.jpg/1280px-K%C5%8Drankei.jpg"
                alt="足助・香嵐渓の渓谷美"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">足助・香嵐渓の渓谷美の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">香嵐渓（こうらんけい）は、愛知県豊田市足助町にある、矢作川支流の巴川がつくる渓谷。紅葉やカタクリの花などで知られ、秋は観光地として賑わう。</p>
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
            楽天トラベル高評価！足助・猿投・豊田の厳選宿5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/182757/182757.jpg"
                  alt="せせらぎの宿　木もれ日"
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
                    <span className="text-stone-400 text-xs">(7件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    せせらぎの宿　木もれ日
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 豊田市駅 / お車で新東名高速道路　新城I.Cより約１時間。岡崎東I.Cより約４５分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    山間の四季折々の風景と心地良い音を奏でる。自家栽培の素材を生かした女将の手作り料理でおもてなし♪
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥9,350〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182757%2F182757.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/39400/39400.jpg"
                  alt="川澄屋　茶房宿"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.63</span>
                    <span className="text-stone-400 text-xs">(302件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    川澄屋　茶房宿
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 猿投駅 / 豊田市駅より（おいでんバス）小渡（おど）行き乗車（加茂橋下駅）下車徒歩1分(東海環状自動車道、豊田藤岡インターから15分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    低料金で家庭的な宿。紅葉の名所足助香嵐渓まで20分,西広瀬工業団地まで15分。行楽,ビジネスにどうぞ
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥4,450〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39400%2F39400.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/7144/7144.jpg"
                  alt="しあわせ隠れ里　猿投温泉　癒しの宿　金泉閣"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.59</span>
                    <span className="text-stone-400 text-xs">(261件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    しあわせ隠れ里　猿投温泉　癒しの宿　金泉閣
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 保見駅 / 東名高速、名古屋ICから車で30分。猿投グリーンロード加納IC下車。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    名古屋ICから30分　/　駐車場無料　/　天然ラドン温泉　/　　藤ヶ丘駅より巡回バス有　
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥14,960〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7144%2F7144.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/67976/67976.jpg"
                  alt="名鉄トヨタホテル"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.28</span>
                    <span className="text-stone-400 text-xs">(769件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    名鉄トヨタホテル
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 豊田市駅 / 名鉄　豊田市駅から徒歩１分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    名鉄豊田市駅から徒歩約1分！VOD無料(※8階は除く）リファシャワーヘッド（※8階RN客室のみ）
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥4,924〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67976%2F67976.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow transition"
                  >
                    楽天トラベルで空室確認
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/104590/104590.jpg"
                  alt="ホテルルートイン豊田陣中"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.2</span>
                    <span className="text-stone-400 text-xs">(679件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテルルートイン豊田陣中
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 豊田市駅 / 名鉄三河線　梅平駅より徒歩約１０分／名鉄三河線　豊田市駅より徒歩約２０分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ＷＯＷＯＷ全室で無料視聴可■VODルームシアター無料視聴可能（一般映画のみ：コンフォート特典）
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥6,800〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F104590%2F104590.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">香嵐渓散策のポイント＆グルメ</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>名物グルメ:</strong> 香ばしい味噌ダレがたまらない焼きたての「五平餅」や「鮎の塩焼き」、もみじの葉を塩漬けにして揚げた伝統銘菓「もみじの天ぷら」が名物です。</li>
            <li><strong>渋滞回避:</strong> 国道153号線は日中激しい渋滞が発生します。早朝8時前後の到着、あるいは夜間ライトアップを楽しんだ後近隣宿に宿泊するスケジュールが最も快適です。</li>
            <li><strong>香積寺（こうじゃくじ）参拝:</strong> 紅葉の開祖である香積寺境内は静寂に包まれ、風情ある山門とモミジの調和が素晴らしい穴場です。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
