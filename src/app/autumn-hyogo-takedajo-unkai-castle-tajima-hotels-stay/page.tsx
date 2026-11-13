import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-hyogo-takedajo-unkai-castle-tajima-hotels-stay/",
  },

  title: '秋の竹田城跡：天空の城の幻想的な雲海と但馬牛グルメ！城下町を満喫するおすすめ宿5選「2026最新」',
  description: '10月〜11月が最も雲海発生率が高まる「天空の城」竹田城跡！早朝の立雲峡から望む雲海に浮かぶ石垣の城と情緒ある城下町散策。朱々、ホテルEN、有斐軒など但馬の味覚と名湯を楽しむ厳選宿5選をご紹介。',
  keywords: '竹田城跡 雲海 見頃, 天空の城 宿, 立雲峡 展望台, 竹田城下町 旅館, ホテルEN 竹田城, 朱々 竹田',
  openGraph: {
    title: '秋の竹田城跡：天空の城の幻想的な雲海と但馬牛グルメ！城下町を満喫するおすすめ宿5選「2026最新」',
    description: '10月〜11月が最も雲海発生率が高まる「天空の城」竹田城跡！但馬牛と雲海を満喫する厳選宿5選。',
    type: 'article',
    url: 'https://croud-travel.pages.dev/autumn-hyogo-takedajo-unkai-castle-tajima-hotels-stay/',
  }
};

export default function TakedaCastleAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"秋の竹田城跡：天空の城の幻想的な雲海と但馬牛グルメ！城下町を満喫するおすすめ宿5選「2026最新」\",\"description\":\"10月〜11月が最も雲海発生率が高まる「天空の城」竹田城跡！早朝の立雲峡から望む雲海に浮かぶ石垣の城と情緒ある城下町散策。朱々、ホテルEN、有斐軒など但馬の味覚と名湯を楽しむ厳選宿5選をご紹介。\",\"url\":\"https://croud-travel.pages.dev/autumn-hyogo-takedajo-unkai-castle-tajima-hotels-stay/\",\"datePublished\":\"2026-10-18T12:00:00+09:00\",\"dateModified\":\"2026-10-19T07:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド 編集部\",\"url\":\"https://croud-travel.pages.dev/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://croud-travel.pages.dev/icon.png\"}}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://croud-travel.pages.dev/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"特集一覧\",\"item\":\"https://croud-travel.pages.dev/features/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"秋の竹田城跡：天空の城の幻想的な雲海と但馬牛グルメ！城下町を満喫するおすすめ宿5選「2026最新」\",\"item\":\"https://croud-travel.pages.dev/autumn-hyogo-takedajo-unkai-castle-tajima-hotels-stay/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"秋の竹田城跡：天空の城の幻想的な雲海と但馬牛グルメ！城下町を満喫するおすすめ宿5選「2026最新」\",\"numberOfItems\":10,\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"雲海登山の必須心得\",\"url\":\"https://croud-travel.pages.dev/autumn-hyogo-takedajo-unkai-castle-tajima-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"竹田城　城下町　ホテルＥＮ（えん）\",\"url\":\"https://croud-travel.pages.dev/autumn-hyogo-takedajo-unkai-castle-tajima-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"竹田城下まち　朱々　‐ＳｈｕＳｈｕ‐\",\"url\":\"https://croud-travel.pages.dev/autumn-hyogo-takedajo-unkai-castle-tajima-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":4,\"name\":\"有斐軒\",\"url\":\"https://croud-travel.pages.dev/autumn-hyogo-takedajo-unkai-castle-tajima-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":5,\"name\":\"囲炉裏の宿　豊楽\",\"url\":\"https://croud-travel.pages.dev/autumn-hyogo-takedajo-unkai-castle-tajima-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":6,\"name\":\"竹田町屋　寺子屋　はな亭\",\"url\":\"https://croud-travel.pages.dev/autumn-hyogo-takedajo-unkai-castle-tajima-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":7,\"name\":\"国宝 姫路城（白鷺城）\",\"url\":\"https://croud-travel.pages.dev/autumn-hyogo-takedajo-unkai-castle-tajima-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":8,\"name\":\"神戸ポートタワー・ハーバーランド\",\"url\":\"https://croud-travel.pages.dev/autumn-hyogo-takedajo-unkai-castle-tajima-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":9,\"name\":\"城崎温泉（外湯めぐり）\",\"url\":\"https://croud-travel.pages.dev/autumn-hyogo-takedajo-unkai-castle-tajima-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":10,\"name\":\"竹田城跡（天空の城）\",\"url\":\"https://croud-travel.pages.dev/autumn-hyogo-takedajo-unkai-castle-tajima-hotels-stay/\"}]}" }} />
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/145001/145001.jpg"
          alt="秋の竹田城跡・早朝の雲海に浮かぶ天空の城と但馬の城下町"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">秋の兵庫・絶景特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">雲海ピーク: 10月上旬〜11月下旬</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">「秋の竹田城跡」天空の城の幻想的な雲海と但馬牛グルメ！城下町を満喫するおすすめ宿5選</h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            夜明けとともに円山川から湧き上がる真っ白な霧が谷を埋め尽くし、山頂の石垣群だけが浮かび上がる「天空の城」。立雲峡からの奇跡の眺望と、風情ある城下町の町屋宿で味わう極上但馬牛会席をご案内します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">竹田城跡雲海と城下町名宿5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-amber-600 pl-3">秋の晴れた早朝だけに出会える「奇跡の天空パノラマ」</h2>
          <p className="mb-4 text-stone-700">
            標高353mの古城山山頂に築かれた竹田城跡。寒暖差の大きくなる10月から11月にかけてのよく晴れた早朝、濃い朝霧が発生し、まるで白い雲の海に城が浮かんでいるような神秘的な姿を見せます。対岸の朝来山中腹にある「立雲峡（りつうんきょう）」展望台から見渡すその姿は、「日本のマチュピチュ」と称されるにふさわしい光景です。
          </p>
          <p className="text-stone-700">
            雲海アタックの成否を分けるのは宿の立地。竹田城下町や近隣の和田山・朝来エリアに宿泊することで、早朝5時台の出発でも無理なくベストポジションを確保できます。下山後は町屋をリノベーションした風情あふれる宿で温かい朝食と名産・但馬牛を心ゆくまで堪能しましょう。
          </p>
        </section>

        
        
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2"><span className="w-2.5 h-6 bg-amber-600 rounded-full inline-block"></span>
            楽天トラベル高評価！竹田城跡周辺の厳選宿5選</h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/153666/153666.jpg"
                  alt="竹田城下まち　朱々　‐ＳｈｕＳｈｕ‐"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.73</span>
                    <span className="text-stone-400 text-xs">(69件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">竹田城下まち　朱々　‐ＳｈｕＳｈｕ‐</h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 竹田（兵庫）駅 / ＪＲ播但線　竹田駅より徒歩１分（約100ｍ）／北近畿自動車道和田山IC～竹田方面へお車５分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    それぞれ独立した3棟メゾネット貸切で気兼ねなく＋夕・朝食お部屋食だからお子様連れでも安心！
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥11,000〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153666%2F153666.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/145001/145001.jpg"
                  alt="竹田城　城下町　ホテルＥＮ（えん）"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.67</span>
                    <span className="text-stone-400 text-xs">(222件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">竹田城　城下町　ホテルＥＮ（えん）</h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 竹田（兵庫）駅 / JR播但線　竹田駅より徒歩にて3分（駅より250ｍ）
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    【大阪から車で約100分】竹田城跡の麓で約400年の歴史を持つ旧酒造場に泊まる。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥23,186〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145001%2F145001.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/40571/40571.jpg"
                  alt="有斐軒"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.65</span>
                    <span className="text-stone-400 text-xs">(248件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">有斐軒</h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 和田山駅 / ＪＲ山陰本線　和田山駅より徒歩５分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    季節の花と心にひびくおもてなしをモットーにしています。素朴な味と心づくしの手料理が自慢です。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥12,450〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40571%2F40571.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8537/8537.jpg"
                  alt="囲炉裏の宿　豊楽"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.27</span>
                    <span className="text-stone-400 text-xs">(99件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">囲炉裏の宿　豊楽</h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 寺前駅 / ＪＲ播但線寺前駅より無料送迎15分。神崎南ICより峰山高原方向へ車で約15分。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    味、素材にこだわり、自然を味わう料理自慢の宿【最寄駅JR播但線寺前駅より無料送迎有】
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥14,000〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8537%2F8537.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/139826/139826.jpg"
                  alt="竹田町屋　寺子屋　はな亭"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.26</span>
                    <span className="text-stone-400 text-xs">(222件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">竹田町屋　寺子屋　はな亭</h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 竹田（兵庫）駅 / 北近畿自動車道・播但有料道路和田山ＩＣから車で10分。ＪＲ和田山駅乗り換え7分のＪＲ竹田駅より徒歩にて１分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    天空の城「竹田城」の麓の温泉付き貸切町屋宿2棟、30坪1戸建貸切1棟。パン工房も新設。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-amber-700">¥9,900〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139826%2F139826.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">雲海登山の必須心得</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>発生条件:</strong> 「前日の昼と当日の朝の気温差が大きい」「風が弱い」「よく晴れている」条件が揃うと雲海が出やすくなります。</li>
            <li><strong>持ち物:</strong> 夜明け前の山道（立雲峡駐車場から徒歩20〜40分）を登るため、懐中電灯（ヘッドライト）、防寒着、雨具、歩きやすい靴が必須です。</li>
            <li><strong>竹田城跡直接登山:</strong> 城跡自体に登るルートと、城を外から眺める立雲峡ルートの2通りがあります。初めての方は立雲峡からの鑑賞が最も人気です。</li>
          </ul>
        </section>
      </div>
    
        {/* Enriched Rakuten Travel Hotel Specs */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">秋の竹田城跡：天空の城の幻想的な雲海と但馬牛グルメ！城下町を満喫するおすすめ宿5選「2026最新」：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析</h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「秋の竹田城跡：天空の城の幻想的な雲海と但馬牛グルメ！城下町を満喫するおすすめ宿5選「2026最新」」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 竹田城　城下町　ホテルＥＮ（えん）</td>
                <td className="p-3 text-stone-600">兵庫県朝来市和田山町竹田上町西側363</td>
                <td className="p-3 text-stone-600">竹田（兵庫）駅周辺</td>
                <td className="p-3 text-stone-600">竹田まちなか観光駐車場にお停めください。無料でご利用いただけます。</td>
                <td className="p-3 font-bold text-amber-600">★4.67（219件）</td>
                <td className="p-3 font-bold text-rose-600">¥22,594〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145001%2F145001.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 竹田城下まち　朱々　‐ＳｈｕＳｈｕ‐</td>
                <td className="p-3 text-stone-600">兵庫県朝来市和田山町竹田中町西側264-1</td>
                <td className="p-3 text-stone-600">竹田（兵庫）駅周辺</td>
                <td className="p-3 text-stone-600">竹田まちなか観光駐車場 60台（無料）当宿より徒歩3分</td>
                <td className="p-3 font-bold text-amber-600">★4.73（69件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153666%2F153666.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 有斐軒</td>
                <td className="p-3 text-stone-600">兵庫県朝来市和田山町和田山31</td>
                <td className="p-3 text-stone-600">和田山駅周辺</td>
                <td className="p-3 text-stone-600">有り　20台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.63（248件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,450〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40571%2F40571.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 囲炉裏の宿　豊楽</td>
                <td className="p-3 text-stone-600">兵庫県神崎郡神河町上小田332</td>
                <td className="p-3 text-stone-600">寺前駅周辺</td>
                <td className="p-3 text-stone-600">50台有　無料　予約不要　大型バス、トラックも無料利用可能　電気自動車充電可（テスラも）</td>
                <td className="p-3 font-bold text-amber-600">★4.25（100件）</td>
                <td className="p-3 font-bold text-rose-600">¥14,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8537%2F8537.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 竹田町屋　寺子屋　はな亭</td>
                <td className="p-3 text-stone-600">兵庫県朝来市和田山町竹田中町西側250-1</td>
                <td className="p-3 text-stone-600">竹田（兵庫）駅周辺</td>
                <td className="p-3 text-stone-600">有り　6台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.18（217件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139826%2F139826.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">旅の目的に合わせて選ぶ「秋の竹田城跡」各宿の強みと基本情報</h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">竹田城　城下町　ホテルＥＮ（えん）</h3>
                  <span className="text-xs text-stone-400 ml-2">（たけだじょうかまち　ほてるえん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥22,594〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/145001/145001_room.jpg" alt="竹田城　城下町　ホテルＥＮ（えん） 客室・施設イメージ" className="w-full h-full object-cover" loading="eager" fetchPriority="high" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>「秋の竹田城跡（天空の城の幻想的な雲海と但馬牛グルメ）」の旅の拠点として、落ち着いた客室環境と丁寧なおもてなしを備えた人気の宿泊施設です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県朝来市和田山町竹田上町西側363 ／ 最寄り駅：竹田（兵庫） ／ 交通案内：JR播但線　竹田駅より徒歩にて3分（駅より250ｍ）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>竹田まちなか観光駐車場にお停めください。無料でご利用いただけます。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💡 <strong>竹田城　城下町　ホテルＥＮ（えん）の滞在ポイント：</strong>「秋の竹田城跡エリアの散策拠点に適した立地。客室タイプや食事の有無・駐車場条件を旅程に合わせて比較するのがおすすめです。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">竹田城下まち　朱々　‐ＳｈｕＳｈｕ‐</h3>
                  <span className="text-xs text-stone-400 ml-2">（たけだじょうかまち　しゅしゅ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/153666/153666_kan1.jpg" alt="竹田城下まち　朱々　‐ＳｈｕＳｈｕ‐ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>それぞれ独立した3棟メゾネット貸切で気兼ねなく＋夕・朝食お部屋食だからお子様連れでも安心！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県朝来市和田山町竹田中町西側264-1 ／ 最寄り駅：竹田（兵庫） ／ 交通案内：ＪＲ播但線　竹田駅より徒歩１分（約100ｍ）／北近畿自動車道和田山IC～竹田方面へお車５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>竹田まちなか観光駐車場 60台（無料）当宿より徒歩3分</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💡 <strong>竹田城下まち　朱々　‐ＳｈｕＳｈｕ‐の滞在ポイント：</strong>「秋の竹田城跡エリアの散策拠点に適した立地。客室タイプや食事の有無・駐車場条件を旅程に合わせて比較するのがおすすめです。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">有斐軒</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆうひけん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,450〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/40571/40571_he.jpg" alt="有斐軒 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>季節の花と心にひびくおもてなしをモットーにしています。素朴な味と心づくしの手料理が自慢です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県朝来市和田山町和田山31 ／ 最寄り駅：和田山 ／ 交通案内：ＪＲ山陰本線　和田山駅より徒歩５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　20台　無料　先着順</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.67 ／ 立地 ★4 ／ 部屋 ★4.56 ／ 設備 ★4.47 ／ 風呂 ★4.2 ／ 食事 ★4.53</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「家庭的で明るい対応に癒やされ、快適な時間家庭的で明るい対応で、快適に過ごせました。また利用したいと思います」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">囲炉裏の宿　豊楽</h3>
                  <span className="text-xs text-stone-400 ml-2">（いろりのやど　ほうらく）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥14,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8537/8537_nbe.jpg" alt="囲炉裏の宿　豊楽 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>味、素材にこだわり、自然を味わう料理自慢の宿【最寄駅JR播但線寺前駅より無料送迎有】</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県神崎郡神河町上小田332 ／ 最寄り駅：寺前 ／ 交通案内：ＪＲ播但線寺前駅より無料送迎15分。神崎南ICより峰山高原方向へ車で約15分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>50台有　無料　予約不要　大型バス、トラックも無料利用可能　電気自動車充電可（テスラも）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💡 <strong>囲炉裏の宿　豊楽の滞在ポイント：</strong>「秋の竹田城跡エリアの散策拠点に適した立地。客室タイプや食事の有無・駐車場条件を旅程に合わせて比較するのがおすすめです。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">竹田町屋　寺子屋　はな亭</h3>
                  <span className="text-xs text-stone-400 ml-2">（たけだまちや　てらこや　はなてい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/139826/139826_kan.jpg" alt="竹田町屋　寺子屋　はな亭 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>天空の城「竹田城」の麓の温泉付き貸切町屋宿2棟、30坪1戸建貸切1棟。パン工房も新設。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県朝来市和田山町竹田中町西側250-1 ／ 最寄り駅：竹田（兵庫） ／ 交通案内：北近畿自動車道・播但有料道路和田山ＩＣから車で10分。ＪＲ和田山駅乗り換え7分のＪＲ竹田駅より徒歩にて１分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　6台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「竹田城観光に便利、食事も温泉も大満足竹田駅が近く、バスで竹田城へ行くのに便利だった。寺町通りも風情があり、散歩がてら楽しんだ。お宿は広々として清潔感もあり、のんびりくつろげました。お風呂は…」
                  </blockquote>
                </div>
              </div>
            </div>
          </div></section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <HubRelatedPosts currentSlug="autumn-hyogo-takedajo-unkai-castle-tajima-hotels-stay" />
        </div>

      </article>
  );
}
