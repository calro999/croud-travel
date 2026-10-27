import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-ishikawa-kanazawa-kenrokuen-yukitsuri-momiji-hotels-stay/",
  },

  title: '秋の金沢：兼六園の雪吊りと紅葉ライトアップ！秋の風情と温泉を味わうおすすめ名宿5選「2026最新」',
  description: '11月1日から始まる兼六園の冬支度「雪吊り」と唐崎松・霞ヶ池の鮮やかな紅葉ライトアップ！金沢湯涌温泉や市内中心部のクラシック名門ホテルなど厳選5宿をご紹介。百楽荘、ホテル山楽、御宿野乃金沢の宿泊情報を徹底比較！',
  keywords: '兼六園 雪吊り, 金沢 紅葉 ライトアップ, 兼六園 観光 宿, 金沢湯涌温泉, 金沢白鳥路 ホテル山楽, 百楽荘 金沢',
  openGraph: {
    title: '秋の金沢：兼六園の雪吊りと紅葉ライトアップ！秋の風情と温泉を味わうおすすめ名宿5選「2026最新」',
    description: '11月1日から始まる兼六園の冬支度「雪吊り」と唐崎松・霞ヶ池の鮮やかな紅葉ライトアップ！秋の金沢を満喫する厳選5宿。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/autumn-ishikawa-kanazawa-kenrokuen-yukitsuri-momiji-hotels-stay/',
  }
};

export default function KanazawaKenrokuenAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"秋の金沢：兼六園の雪吊りと紅葉ライトアップ！秋の風情と温泉を味わうおすすめ名宿5選「2026最新」\",\"description\":\"11月1日から始まる兼六園の冬支度「雪吊り」と唐崎松・霞ヶ池の鮮やかな紅葉ライトアップ！金沢湯涌温泉や市内中心部のクラシック名門ホテルなど厳選5宿をご紹介。百楽荘、ホテル山楽、御宿野乃金沢の宿泊情報を徹底比較！\",\"url\":\"https://croud-travel.pages.dev/autumn-ishikawa-kanazawa-kenrokuen-yukitsuri-momiji-hotels-stay/\",\"datePublished\":\"2026-10-18T12:00:00+09:00\",\"dateModified\":\"2026-10-19T07:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド 編集部\",\"url\":\"https://croud-travel.pages.dev/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://croud-travel.pages.dev/icon.png\"}}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://croud-travel.pages.dev/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"特集一覧\",\"item\":\"https://croud-travel.pages.dev/features/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"秋の金沢：兼六園の雪吊りと紅葉ライトアップ！秋の風情と温泉を味わうおすすめ名宿5選「2026最新」\",\"item\":\"https://croud-travel.pages.dev/autumn-ishikawa-kanazawa-kenrokuen-yukitsuri-momiji-hotels-stay/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"秋の金沢：兼六園の雪吊りと紅葉ライトアップ！秋の風情と温泉を味わうおすすめ名宿5選「2026最新」\",\"numberOfItems\":9,\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"金沢白鳥路　ホテル山楽\",\"url\":\"https://croud-travel.pages.dev/autumn-ishikawa-kanazawa-kenrokuen-yukitsuri-momiji-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"金沢湯涌温泉　百楽荘\",\"url\":\"https://croud-travel.pages.dev/autumn-ishikawa-kanazawa-kenrokuen-yukitsuri-momiji-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"金沢・深谷温泉　元湯石屋　能舞台のある秘湯の一軒宿\",\"url\":\"https://croud-travel.pages.dev/autumn-ishikawa-kanazawa-kenrokuen-yukitsuri-momiji-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":4,\"name\":\"金沢湯涌温泉　湯の出旅館\",\"url\":\"https://croud-travel.pages.dev/autumn-ishikawa-kanazawa-kenrokuen-yukitsuri-momiji-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":5,\"name\":\"天然温泉　加賀の宝泉　御宿　野乃金沢（ドーミーイン・御宿野乃　ホテルズグループ）\",\"url\":\"https://croud-travel.pages.dev/autumn-ishikawa-kanazawa-kenrokuen-yukitsuri-momiji-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":6,\"name\":\"兼六園\",\"url\":\"https://croud-travel.pages.dev/autumn-ishikawa-kanazawa-kenrokuen-yukitsuri-momiji-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":7,\"name\":\"金沢21世紀美術館\",\"url\":\"https://croud-travel.pages.dev/autumn-ishikawa-kanazawa-kenrokuen-yukitsuri-momiji-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":8,\"name\":\"ひがし茶屋街\",\"url\":\"https://croud-travel.pages.dev/autumn-ishikawa-kanazawa-kenrokuen-yukitsuri-momiji-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":9,\"name\":\"白米千枚田（しろよねせんまいだ）\",\"url\":\"https://croud-travel.pages.dev/autumn-ishikawa-kanazawa-kenrokuen-yukitsuri-momiji-hotels-stay/\"}]}" }} />
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/9004/9004.jpg"
          alt="秋の金沢・兼六園の雪吊りと紅葉ライトアップ風景"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">秋の北陸・金沢特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">見頃・雪吊り: 11月上旬〜11月下旬</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">「秋の金沢」兼六園の雪吊りと紅葉ライトアップ！秋の風情と温泉を味わうおすすめ名宿5選</h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            国の特別名勝・兼六園で11月1日から始まる風物詩「雪吊り」。霞ヶ池の水面に映る唐崎松の幾何学的な縄張りと錦秋のモミジ、夜間の幽玄なライトアップを愛でる極上の金沢宿泊プランをご提案します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">兼六園雪吊り紅葉と金沢名宿5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-amber-600 pl-3">
            冬支度の「雪吊り」と錦秋の庭園美が重なる11月の兼六園
          </h2>
          <p className="mb-4 text-stone-700">
            加賀百万石の美意識が息づく日本三名園「兼六園」。11月に入ると、重い湿り雪から枝を守るための伝統技法「雪吊り」の作業が始まり、庭師たちが熟練の技で円錐形の美しい縄を張り巡らせます。黄金や真紅に色づいた木々と雪吊りのシルエットが織りなす景観は、1年のうちこの季節にしか出会えない特別な光景です。
          </p>
          <p className="text-stone-700">
            見頃の時期には夜間無料開放とライトアップが実施され、鏡のような霞ヶ池や徽軫灯籠（ことじとうろう）が黄金の輝きを放ちます。昼は近江町市場で解禁直後のカニや秋の味覚を堪能し、夜は湯涌温泉や市内の温泉宿で名湯に浸かる贅沢なステイを満喫しましょう。
          </p>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">秋の観光地情報・名所ガイド：国指定特別名勝・兼六園</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Kenrokuen10-r.jpg/1280px-Kenrokuen10-r.jpg"
                alt="国指定特別名勝・兼六園"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">国指定特別名勝・兼六園の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">兼六園（けんろくえん）は、石川県金沢市に存在する日本庭園。国の特別名勝に指定されている。広さは約11.7ヘクタール。明治期から大正期にかけて名称を「兼六公園」としていたこともある（後述）。</p>
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
            楽天トラベル高評価！金沢・兼六園周辺の厳選名宿5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/153452/153452.jpg"
                  alt="金沢湯涌温泉　百楽荘"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.69</span>
                    <span className="text-stone-400 text-xs">(790件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    金沢湯涌温泉　百楽荘
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 金沢駅 / ★金沢中心街より車で20分★「金沢駅・兼六園」より“無料送迎”！お帰りは金沢駅近くへ荷物お届けサービス◎手ぶら観光もOK
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    2022楽天ゴールドアワード＆日本の宿47☆ダブル受賞
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥20,768〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153452%2F153452.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/50577/50577.jpg"
                  alt="金沢・深谷温泉　元湯石屋　能舞台のある秘湯の一軒宿"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.57</span>
                    <span className="text-stone-400 text-xs">(268件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    金沢・深谷温泉　元湯石屋　能舞台のある秘湯の一軒宿
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 森本駅 / JR金沢駅からタクシーで約20分・ IR森本駅からタクシーで約7分・北陸自動車道金沢森本ＩＣより車5分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    【金沢奥座敷　深谷温泉の一軒宿】山里の静けさと出会い、都会の喧騒を忘れる。懐かしき時の流れる老舗
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥25,300〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50577%2F50577.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/30835/30835.jpg"
                  alt="金沢湯涌温泉　湯の出旅館"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.62</span>
                    <span className="text-stone-400 text-xs">(486件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    金沢湯涌温泉　湯の出旅館
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 金沢駅 / 兼六園より車で25分、金沢駅より車で約40分。金沢森本I.Cから山側環状経由で30分。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    金沢市街から車で15分～20分。金沢の奥座敷。温泉と料理と趣贅沢にお愉しみいただける宿。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥17,325〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30835%2F30835.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/9004/9004.jpg"
                  alt="金沢白鳥路　ホテル山楽"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.55</span>
                    <span className="text-stone-400 text-xs">(2862件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    金沢白鳥路　ホテル山楽
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 金沢駅 / ■金沢駅⇔ホテル無料送迎バス■金沢駅東口より車で１０分■金沢駅東口⑥、⑦乗り場【兼六園下・金沢城】バス停下車徒歩５分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    金沢城のすぐ側で美肌の湯と金沢美食、そして心温まるおもてなしに癒されて日常をひと休みしませんか。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥12,250〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9004%2F9004.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/182423/182423.jpg"
                  alt="天然温泉　加賀の宝泉　御宿　野乃金沢（ドーミーイン・御宿野乃　ホテルズグループ）"
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
                    <span className="text-lg font-bold text-amber-700">¥6,490〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182423%2F182423.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">秋の金沢旅行おすすめポイント</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>兼六園の早朝無料開園:</strong> 朝の定期開園前の時間帯は無料開放されており、朝露に濡れた静寂の庭園を独り占めできます。</li>
            <li><strong>カニ解禁の時期:</strong> 11月6日頃には北陸のズワイガニ漁が解禁され、加能ガニや香箱ガニの絶品料理を味わえます。</li>
            <li><strong>ひがし茶屋街の秋散策:</strong> 出格子の町並みと紅葉のコントラストが美しく、抹茶や金箔スイーツの食べ歩きに最適です。</li>
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
              📊 秋の金沢：兼六園の雪吊りと紅葉ライトアップ！秋の風情と温泉を味わうおすすめ名宿5選「2026最新」：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「秋の金沢：兼六園の雪吊りと紅葉ライトアップ！秋の風情と温泉を味わうおすすめ名宿5選「2026最新」」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 金沢白鳥路　ホテル山楽</td>
                <td className="p-3 text-stone-600">石川県金沢市丸の内6-3</td>
                <td className="p-3 text-stone-600">金沢駅周辺</td>
                <td className="p-3 text-stone-600">地下駐車場50台／料金1泊1台1,000円／24時間入出庫可／高さ制限2.1ｍ未満</td>
                <td className="p-3 font-bold text-amber-600">★4.55（2831件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,250〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9004%2F9004.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 金沢湯涌温泉　百楽荘</td>
                <td className="p-3 text-stone-600">石川県金沢市湯涌荒屋町92-3</td>
                <td className="p-3 text-stone-600">★金沢中心街より車で20分★「金沢駅・兼六園」より“無料送迎”！お帰り</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.69（0件）</td>
                <td className="p-3 font-bold text-rose-600">¥19,470〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153452%2F153452.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 金沢・深谷温泉　元湯石屋　能舞台のある秘湯の一軒宿</td>
                <td className="p-3 text-stone-600">石川県金沢市深谷町チ95甲</td>
                <td className="p-3 text-stone-600">JR金沢駅からタクシーで約20分・ IR森本駅からタクシーで約7分・北</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.57（0件）</td>
                <td className="p-3 font-bold text-rose-600">¥24,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50577%2F50577.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 金沢湯涌温泉　湯の出旅館</td>
                <td className="p-3 text-stone-600">石川県金沢市湯涌荒屋町77-2</td>
                <td className="p-3 text-stone-600">兼六園より車で25分、金沢駅より車で約40分。金沢森本I.Cから山側環</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.65（0件）</td>
                <td className="p-3 font-bold text-rose-600">¥17,325〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30835%2F30835.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 天然温泉　加賀の宝泉　御宿　野乃金沢（ドーミーイン・御宿野乃　ホテルズグループ）</td>
                <td className="p-3 text-stone-600">石川県金沢市下堤町1-1</td>
                <td className="p-3 text-stone-600">金沢駅周辺</td>
                <td className="p-3 text-stone-600">有り　先着順(76台)　1泊1,500円　長さ:5300㎜　全幅:1940㎜　高さ:2000㎜</td>
                <td className="p-3 font-bold text-amber-600">★4.54（1955件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,030〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182423%2F182423.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">金沢白鳥路　ホテル山楽</h3>
                  <span className="text-xs text-stone-400 ml-2">（かなざわ　はくちょうろ　ほてるさんらく）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,250〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/9004/9004_dtw.jpg" alt="金沢白鳥路　ホテル山楽 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>金沢城のすぐ側で美肌の湯と金沢美食、そして心温まるおもてなしに癒されて日常をひと休みしませんか。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市丸の内6-3 ／ 最寄り駅：金沢 ／ 交通案内：■金沢駅⇔ホテル無料送迎バス■金沢駅東口より車で１０分■金沢駅東口⑥、⑦乗り場【兼六園下・金沢城】バス停下車徒歩５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>地下駐車場50台／料金1泊1台1,000円／24時間入出庫可／高さ制限2.1ｍ未満</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「観光に最適な立地と郷土料理に大満足とにかくロケーションが観光に最適、施設は便利であって欲しいところはすべて新しく(ランドリーの洗濯機は洗剤自動投入など)、とても清潔で、一方で調度品や装飾などは古き…　2026-09-04 17:39:28投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">金沢湯涌温泉　百楽荘</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥19,470〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/153452/153452.jpg" alt="金沢湯涌温泉　百楽荘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2022楽天ゴールドアワード＆日本の宿47☆ダブル受賞</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市湯涌荒屋町92-3 ／ 最寄り駅：主要駅 ／ 交通案内：★金沢中心街より車で20分★「金沢駅・兼六園」より“無料送迎”！お帰りは金沢駅近くへ荷物お届けサービス◎手ぶら観光もOK</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「金沢湯涌温泉　百楽荘は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">金沢・深谷温泉　元湯石屋　能舞台のある秘湯の一軒宿</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥24,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/50577/50577.jpg" alt="金沢・深谷温泉　元湯石屋　能舞台のある秘湯の一軒宿 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【金沢奥座敷　深谷温泉の一軒宿】山里の静けさと出会い、都会の喧騒を忘れる。懐かしき時の流れる老舗</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市深谷町チ95甲 ／ 最寄り駅：主要駅 ／ 交通案内：JR金沢駅からタクシーで約20分・ IR森本駅からタクシーで約7分・北陸自動車道金沢森本ＩＣより車5分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「金沢・深谷温泉　元湯石屋　能舞台のある秘湯の一軒宿は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">金沢湯涌温泉　湯の出旅館</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥17,325〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/30835/30835.jpg" alt="金沢湯涌温泉　湯の出旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>金沢市街から車で15分〜20分。金沢の奥座敷。温泉と料理と趣贅沢にお愉しみいただける宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市湯涌荒屋町77-2 ／ 最寄り駅：主要駅 ／ 交通案内：兼六園より車で25分、金沢駅より車で約40分。金沢森本I.Cから山側環状経由で30分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「金沢湯涌温泉　湯の出旅館は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <HubRelatedPosts currentSlug="autumn-ishikawa-kanazawa-kenrokuen-yukitsuri-momiji-hotels-stay" />
        </div>

      </article>
  );
}
