import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の宮島】紅葉谷公園の真紅のモミジと世界遺産・嚴島神社！秋の味覚と絶景を愛でるおすすめ名宿5選【2026最新】',
  description: '約700本のもみじが燃えるように色づく宮島「紅葉谷公園」と、海に浮かぶ嚴島神社大鳥居の秋絶景！早朝参拝に便利な島内名宿や宮浜温泉の絶景宿など厳選5選。有もと、岩惣、菊乃家の魅力を徹底比較！',
  keywords: '宮島 紅葉, 紅葉谷公園 見頃, 嚴島神社 秋, 宮島 旅館 おすすめ, 岩惣 宮島, 宮島グランドホテル 有もと',
  openGraph: {
    title: '【秋の宮島】紅葉谷公園の真紅のモミジと世界遺産・嚴島神社！秋の味覚と絶景を愛でるおすすめ名宿5選【2026最新】',
    description: '約700本のもみじが燃えるように色づく宮島「紅葉谷公園」と、海に浮かぶ嚴島神社大鳥居の秋絶景！厳選宿5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-hiroshima-miyajima-momijidani-itsukushima-hotels-stay',
  }
};

export default function MiyajimaMomijidaniAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/18848/18848.jpg"
          alt="秋の宮島・紅葉谷公園の真紅の紅葉と嚴島神社の海景色"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">秋の広島・世界遺産特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">見頃目安: 11月中旬〜11月下旬</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の宮島】紅葉谷公園の真紅のモミジと世界遺産・嚴島神社！秋の味覚と絶景を愛でるおすすめ名宿5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            弥山の麓に広がる名所「紅葉谷公園」を真紅に染め上げる約700本のもみじ。満潮時に海上に浮かぶ大鳥居の神々しい姿と、秋に旬を迎える焼き牡蠣や名物あなごめしを贅沢に味わう極上ステイをご提案します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">宮島紅葉谷公園と厳選名宿5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-amber-600 pl-3">
            神の島が錦秋に染まる「紅葉谷公園」と島内宿泊の醍醐味
          </h2>
          <p className="mb-4 text-stone-700">
            安芸の宮島を象徴する紅葉スポット「紅葉谷公園」。紅葉谷川沿いに整備された散策道には、イロハモミジやオオモミジなど約700本もの樹木が自生・植栽されており、朱塗りの「もみじ橋」周辺はまるで燃え盛るような紅の天蓋に覆われます。鹿たちが落ち葉を踏みしめながら佇む姿は宮島ならではの風情です。
          </p>
          <p className="text-stone-700">
            日帰りの観光客が多い宮島ですが、本当の魅力を味わうなら**「宮島島内での宿泊」**が断然おすすめ。最終フェリーが出た後の静まり返った夜のライトアップ大鳥居や、朝露に濡れる早朝の嚴島神社参拝は、宿泊者だけの特権です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-amber-600 rounded-full inline-block"></span>
            楽天トラベル高評価！宮島・対岸の厳選名宿5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/18848/18848.jpg"
                  alt="宮島グランドホテル　有もと"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.58</span>
                    <span className="text-stone-400 text-xs">(1298件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    宮島グランドホテル　有もと
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 宮島口駅 / 宮島口桟橋よりフェリーで１０分～宮島桟橋よりマイクロバスにて送迎
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    すべてはお客様の満足と笑顔のために。宮島の歴史とともに時を重ねる、世界遺産「厳島神社」に最も近い宿。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥28,500〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18848%2F18848.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/145390/145390.jpg"
                  alt="みやじまの宿　岩惣"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.5</span>
                    <span className="text-stone-400 text-xs">(158件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    みやじまの宿　岩惣
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 宮島桟橋駅 / 宮島桟橋より徒歩にて約１５分。無料送迎有り（要ご乗船時連絡）
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    創業以来160年もの歴史と伝統を誇る、多くの著名人に愛された老舗旅館。自慢の温泉とお料理を心ゆくまで
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥31,900〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145390%2F145390.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/129976/129976.jpg"
                  alt="宮島　ホテル菊乃家"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.39</span>
                    <span className="text-stone-400 text-xs">(627件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    宮島　ホテル菊乃家
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 宮島口駅 / 宮島桟橋より徒歩15分（ホテルより送迎あり。フェリー乗船前にお電話いただけましたらお迎えに参ります）
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ２０２５年８月菊乃家別邸オープン。宮島の自然に囲まれひっそりと佇む、大人の隠れ家宿。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥12,320〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129976%2F129976.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/13743/13743.jpg"
                  alt="宮浜温泉　湯の宿　宮浜グランドホテル"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.21</span>
                    <span className="text-stone-400 text-xs">(754件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    宮浜温泉　湯の宿　宮浜グランドホテル
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 大野浦駅 / ＪＲ大野浦駅より送迎有り／山陽自動車道大野ＩＣより約７～８分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    展望大浴場と旬の素材を使った料理が好評。宮島口から車で12分。無料駐車場有！
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥10,890〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13743%2F13743.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/18097/18097.jpg"
                  alt="宮島ホテルまこと"
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
                    <span className="text-stone-400 text-xs">(420件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    宮島ホテルまこと
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 宮島口駅 / ＪＲ山陽本線または広島電鉄「宮島口駅」下車、宮島口桟橋より船にて約１０分。【厳島神社まで徒歩約10分】
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    いにしえの歴史と自然にふれる宿
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥17,600〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18097%2F18097.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">宮島・秋旅のアドバイス</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>潮汐表の事前確認:</strong> 嚴島神社の大鳥居は、満潮時には海に浮かび、干潮時には歩いて根元まで近づけます。1日で両方の姿を楽しむスケジュールを組みましょう。</li>
            <li><strong>弥山ロープウエー:</strong> 紅葉谷公園の奥からロープウエーで弥山山頂へ登れば、瀬戸内海の多島美と山頂の奇岩パノラマを堪能できます。</li>
            <li><strong>名物グルメ:</strong> 揚げたてのもみじ饅頭（揚げもみじ）や、焼き立ての濃厚な広島牡蠣の食べ歩きが絶品です。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
