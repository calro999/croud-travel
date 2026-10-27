import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-hiroshima-miyajima-momijidani-itsukushima-hotels-stay/",
  },

  title: '秋の宮島：紅葉谷公園の真紅のモミジと世界遺産・嚴島神社！秋の味覚と絶景を愛でるおすすめ名宿5選「2026最新」',
  description: '約700本のもみじが燃えるように色づく宮島「紅葉谷公園」と、海に浮かぶ嚴島神社大鳥居の秋絶景！早朝参拝に便利な島内名宿や宮浜温泉の絶景宿など厳選5選。有もと、岩惣、菊乃家の魅力を徹底比較！',
  keywords: '宮島 紅葉, 紅葉谷公園 見頃, 嚴島神社 秋, 宮島 旅館 おすすめ, 岩惣 宮島, 宮島グランドホテル 有もと',
  openGraph: {
    title: '秋の宮島：紅葉谷公園の真紅のモミジと世界遺産・嚴島神社！秋の味覚と絶景を愛でるおすすめ名宿5選「2026最新」',
    description: '約700本のもみじが燃えるように色づく宮島「紅葉谷公園」と、海に浮かぶ嚴島神社大鳥居の秋絶景！厳選宿5選。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/autumn-hiroshima-miyajima-momijidani-itsukushima-hotels-stay/',
  }
};

export default function MiyajimaMomijidaniAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"秋の宮島：紅葉谷公園の真紅のモミジと世界遺産・嚴島神社！秋の味覚と絶景を愛でるおすすめ名宿5選「2026最新」\",\"description\":\"約700本のもみじが燃えるように色づく宮島「紅葉谷公園」と、海に浮かぶ嚴島神社大鳥居の秋絶景！早朝参拝に便利な島内名宿や宮浜温泉の絶景宿など厳選5選。有もと、岩惣、菊乃家の魅力を徹底比較！\",\"url\":\"https://croud-travel.pages.dev/autumn-hiroshima-miyajima-momijidani-itsukushima-hotels-stay/\",\"datePublished\":\"2026-10-18T12:00:00+09:00\",\"dateModified\":\"2026-10-19T07:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド 編集部\",\"url\":\"https://croud-travel.pages.dev/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://croud-travel.pages.dev/icon.png\"}}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://croud-travel.pages.dev/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"特集一覧\",\"item\":\"https://croud-travel.pages.dev/features/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"秋の宮島：紅葉谷公園の真紅のモミジと世界遺産・嚴島神社！秋の味覚と絶景を愛でるおすすめ名宿5選「2026最新」\",\"item\":\"https://croud-travel.pages.dev/autumn-hiroshima-miyajima-momijidani-itsukushima-hotels-stay/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"秋の宮島：紅葉谷公園の真紅のモミジと世界遺産・嚴島神社！秋の味覚と絶景を愛でるおすすめ名宿5選「2026最新」\",\"numberOfItems\":10,\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"宮島・秋旅のアドバイス\",\"url\":\"https://croud-travel.pages.dev/autumn-hiroshima-miyajima-momijidani-itsukushima-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"宮島グランドホテル　有もと\",\"url\":\"https://croud-travel.pages.dev/autumn-hiroshima-miyajima-momijidani-itsukushima-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"みやじまの宿　岩惣\",\"url\":\"https://croud-travel.pages.dev/autumn-hiroshima-miyajima-momijidani-itsukushima-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":4,\"name\":\"宮島　ホテル菊乃家\",\"url\":\"https://croud-travel.pages.dev/autumn-hiroshima-miyajima-momijidani-itsukushima-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":5,\"name\":\"宮浜温泉　湯の宿　宮浜グランドホテル\",\"url\":\"https://croud-travel.pages.dev/autumn-hiroshima-miyajima-momijidani-itsukushima-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":6,\"name\":\"宮島ホテルまこと\",\"url\":\"https://croud-travel.pages.dev/autumn-hiroshima-miyajima-momijidani-itsukushima-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":7,\"name\":\"厳島神社（宮島）\",\"url\":\"https://croud-travel.pages.dev/autumn-hiroshima-miyajima-momijidani-itsukushima-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":8,\"name\":\"原爆ドーム・平和記念公園\",\"url\":\"https://croud-travel.pages.dev/autumn-hiroshima-miyajima-momijidani-itsukushima-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":9,\"name\":\"尾道（千光寺公園）\",\"url\":\"https://croud-travel.pages.dev/autumn-hiroshima-miyajima-momijidani-itsukushima-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":10,\"name\":\"呉・大和ミュージアム\",\"url\":\"https://croud-travel.pages.dev/autumn-hiroshima-miyajima-momijidani-itsukushima-hotels-stay/\"}]}" }} />
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
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">「秋の宮島」紅葉谷公園の真紅のモミジと世界遺産・嚴島神社！秋の味覚と絶景を愛でるおすすめ名宿5選</h1>
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

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">秋の観光地情報・名所ガイド：世界遺産・安芸の宮島 厳島神社</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Itsukushima_Shrine_Torii_Gate_%2813890465459%29.jpg/1280px-Itsukushima_Shrine_Torii_Gate_%2813890465459%29.jpg"
                alt="世界遺産・安芸の宮島 厳島神社"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">世界遺産・安芸の宮島 厳島神社の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">厳島神社（いつくしまじんじゃ、公式表記:嚴島神社）は、広島県廿日市市の厳島（宮島）にある神社。式内社（名神大社）、安芸国一宮。旧社格は官幣中社で、現在は神社本庁の別表神社。神紋は「三つ盛り二重亀甲に剣花菱」。古くは「伊都岐島神社」とも記された。全国に約500社ある厳島神社の総本社である。 佐伯直の直系が代々世襲して来たとされているが、一時期藤原氏に横取りされた時期があったものの政略結婚により取り戻し、古代から現在も続いていると記載されている。 広島湾に浮かぶ厳島（宮島）の北東部、弥山（標高535メートル）北麓に鎮座する。厳島は一般に「安芸の宮島」とも呼ばれ日本三景のひとつに数えられている。平家から信仰され、平清盛により現在の海上に立つ大規模な社殿が整えられた。社殿は現在、本殿・拝殿・回廊など6棟が国宝に、14棟が重要文化財に指定されている。そのほか、平家の納めた平家納経をはじめとした国宝・重要文化財の工芸品を多数納めている。 厳島神社の平舞台（国宝：附指定）は日本三舞台の1つに数えられるほか、海上に立つ高さ16メートルの大鳥居（重要文化財）は日本三大鳥居のひとつである。また、夏に行われる例祭は「管絃祭」と呼ばれている。1996年（平成8年）12月にユネスコの世界文化遺産に「厳島神社」として登録されている。</p>
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
            楽天トラベル高評価！宮島・対岸の厳選名宿5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
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
                    rel="sponsored noopener noreferrer"
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
                    rel="sponsored noopener noreferrer"
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
                    rel="sponsored noopener noreferrer"
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
                    rel="sponsored noopener noreferrer"
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
                    rel="sponsored noopener noreferrer"
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
    
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 秋の宮島：紅葉谷公園の真紅のモミジと世界遺産・嚴島神社！秋の味覚と絶景を愛でるおすすめ名宿5選「2026最新」：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「秋の宮島：紅葉谷公園の真紅のモミジと世界遺産・嚴島神社！秋の味覚と絶景を愛でるおすすめ名宿5選「2026最新」」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 宮島グランドホテル　有もと</td>
                <td className="p-3 text-stone-600">広島県廿日市市宮島町南町364</td>
                <td className="p-3 text-stone-600">宮島口駅周辺</td>
                <td className="p-3 text-stone-600">有り　５台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.58（1299件）</td>
                <td className="p-3 font-bold text-rose-600">¥29,050〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18848%2F18848.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. みやじまの宿　岩惣</td>
                <td className="p-3 text-stone-600">広島県廿日市市宮島町もみじ谷</td>
                <td className="p-3 text-stone-600">宮島桟橋より徒歩にて約１５分。無料送迎有り（要ご乗船時連絡）</td>
                <td className="p-3 text-stone-600">有り　５台　無料　要予約</td>
                <td className="p-3 font-bold text-amber-600">★4.48（158件）</td>
                <td className="p-3 font-bold text-rose-600">¥31,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145390%2F145390.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 宮島　ホテル菊乃家</td>
                <td className="p-3 text-stone-600">広島県廿日市市宮島町335</td>
                <td className="p-3 text-stone-600">宮島口駅周辺</td>
                <td className="p-3 text-stone-600">駐車場なし（フェリーご乗船前の一般の駐車場にお止めください）</td>
                <td className="p-3 font-bold text-amber-600">★4.41（630件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,320〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129976%2F129976.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 宮浜温泉　湯の宿　宮浜グランドホテル</td>
                <td className="p-3 text-stone-600">広島県廿日市市宮浜温泉2-5-4</td>
                <td className="p-3 text-stone-600">大野浦駅周辺</td>
                <td className="p-3 text-stone-600">有り　３０台　先着順　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.2（756件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,890〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13743%2F13743.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 宮島ホテルまこと</td>
                <td className="p-3 text-stone-600">広島県廿日市市宮島町755</td>
                <td className="p-3 text-stone-600">宮島口駅周辺</td>
                <td className="p-3 text-stone-600">有り(１０台無料)島内は交通規制がございますので宮島口の有料駐車場にお止め置き下さい。</td>
                <td className="p-3 font-bold text-amber-600">★4.27（421件）</td>
                <td className="p-3 font-bold text-rose-600">¥18,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18097%2F18097.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">宮島グランドホテル　有もと</h3>
                  <span className="text-xs text-stone-400 ml-2">（みやじま　ぐらんどほてる　ありもと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥29,050〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/18848/18848_rm.jpg" alt="宮島グランドホテル　有もと 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>すべてはお客様の満足と笑顔のために。宮島の歴史とともに時を重ねる、世界遺産「厳島神社」に最も近い宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県廿日市市宮島町南町364 ／ 最寄り駅：宮島口 ／ 交通案内：宮島口桟橋よりフェリーで１０分～宮島桟橋よりマイクロバスにて送迎</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５台　無料　先着順</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.72 ／ 立地 ★4.6 ／ 部屋 ★4.57 ／ 設備 ★4.45 ／ 風呂 ★4.43 ／ 食事 ★4.66</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「厳島神社にすぐたどり着けるロケーションで、宮島観光にはオススメです。夕食朝食付きにしてよかったです。夜の散歩企画なども開催されていてサービス面でもオススメです。クチコミの詳細はこちらから　…　2026-10-01 16:46:37投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">みやじまの宿　岩惣</h3>
                  <span className="text-xs text-stone-400 ml-2">（いわそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥31,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/145390/145390_kan.jpg" alt="みやじまの宿　岩惣 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>創業以来160年もの歴史と伝統を誇る、多くの著名人に愛された老舗旅館。自慢の温泉とお料理を心ゆくまで</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県廿日市市宮島町もみじ谷 ／ 最寄り駅：主要駅 ／ 交通案内：宮島桟橋より徒歩にて約１５分。無料送迎有り（要ご乗船時連絡）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５台　無料　要予約</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.78 ／ 立地 ★4.65 ／ 部屋 ★4.57 ／ 設備 ★4.43 ／ 風呂 ★4.7 ／ 食事 ★4.82</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「他の画像やクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/145390?reviewId=33123479563978　2026-09-29 16:08:12投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">宮島　ホテル菊乃家</h3>
                  <span className="text-xs text-stone-400 ml-2">（みやじま　ほてるきくのや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,320〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/129976/129976_kya.jpg" alt="宮島　ホテル菊乃家 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>２０２５年８月菊乃家別邸オープン。宮島の自然に囲まれひっそりと佇む、大人の隠れ家宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県廿日市市宮島町335 ／ 最寄り駅：宮島口 ／ 交通案内：宮島桟橋より徒歩15分（ホテルより送迎あり。フェリー乗船前にお電話いただけましたらお迎えに参ります）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>駐車場なし（フェリーご乗船前の一般の駐車場にお止めください）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.56 ／ 立地 ★4.32 ／ 部屋 ★4.47 ／ 設備 ★4.3 ／ 風呂 ★4.2 ／ 食事 ★4.36</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「シーフードの朴葉味噌焼きが絶品!夕食のシーフードの朴葉味噌焼きが絶品でした。河豚の唐揚げは骨が多かったので、事前に説明していただけたら、食べやすかったと思いました。クチコミの詳細はこちらか…　2026-10-09 22:25:37投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">宮浜温泉　湯の宿　宮浜グランドホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（みやはまおんせん　ゆのやど　みやはまぐらんどほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,890〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/13743/13743_war.jpg" alt="宮浜温泉　湯の宿　宮浜グランドホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>展望大浴場と旬の素材を使った料理が好評。宮島口から車で12分。無料駐車場有！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県廿日市市宮浜温泉2-5-4 ／ 最寄り駅：大野浦 ／ 交通案内：ＪＲ大野浦駅より送迎有り／山陽自動車道大野ＩＣより約７～８分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　３０台　先着順　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.28 ／ 立地 ★4.19 ／ 部屋 ★4.11 ／ 設備 ★4.07 ／ 風呂 ★4.27 ／ 食事 ★4.38</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事のお給仕の方が大変親切でした食事のお給仕の方が大変親切でしたクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/13…　2026-10-08 10:36:32投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">宮島ホテルまこと</h3>
                  <span className="text-xs text-stone-400 ml-2">（みやじまほてる　まこと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥18,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/18097/18097_rm.jpg" alt="宮島ホテルまこと 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>いにしえの歴史と自然にふれる宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県廿日市市宮島町755 ／ 最寄り駅：宮島口 ／ 交通案内：ＪＲ山陽本線または広島電鉄「宮島口駅」下車、宮島口桟橋より船にて約１０分。【厳島神社まで徒歩約10分】</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り(１０台無料)島内は交通規制がございますので宮島口の有料駐車場にお止め置き下さい。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.38 ／ 立地 ★4.25 ／ 部屋 ★4.18 ／ 設備 ★4.04 ／ 風呂 ★4 ／ 食事 ★4.33</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ロビー、受付、食事会場など、どこのスタッフの方々も雰囲気がよく、安心できるホテルでした。ただ1つ残念だったのがドライヤーです。髪の毛が乾く気がしませんでした。...それだけが残念でしたが、それでもよい…　2026-09-26 11:19:52投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=18097&quot; class=&quot;3click」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！広島県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、広島県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Miyajima_From_The_Ferry_%2830093845%29.jpeg/1280px-Miyajima_From_The_Ferry_%2830093845%29.jpeg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="厳島神社（宮島）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">厳島神社（宮島）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界文化遺産に登録された安芸の宮島。海上に浮かぶ鮮やかな朱塗りの大鳥居と社殿は潮の満ち引きで表情を変え、日本三景に相応しい神秘の美しさです。 厳島（いつくしま）は、広島県廿日市市宮島町にある島。瀬戸内海西部、広島湾の北西部に位置する。通称は安芸の宮島（あきのみやじま）、または宮島。かつて島全体が佐伯郡宮島町と一致していたが、2005年（平成17年）に廿日市市と合併した。 古代より、島そのものが自然崇拝の対象であったと考えられる。平安時代末期以降は、厳島神社の影響力の強さや海上交通の拠点としての重要…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">原爆ドーム・平和記念公園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界へ恒久平和を訴え続ける負の遺産・世界文化遺産。元産業奨励館の被爆した姿が今も残され、平和記念資料館には世界中から多くの人が訪れます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">尾道（千光寺公園）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">坂と猫と映画の街として愛される港町。千光寺山の山頂からロープウェイで登れば、尾道水道と造船所、瀬戸内海の島々を一望するノスタルジックな風景が広がります。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">呉・大和ミュージアム</h3>
                <p className="text-xs text-stone-600 leading-relaxed">かつて東洋一の軍港・造船の街として栄えた呉の歴史を伝える博物館。館内中央に鎮座する10分の1スケールの戦艦「大和」の精巧な復元モデルは圧巻です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 広島県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 広島県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <HubRelatedPosts currentSlug="autumn-hiroshima-miyajima-momijidani-itsukushima-hotels-stay" />
        </div>

      </article>
  );
}
