import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '秋の竹田城跡：天空の城の幻想的な雲海と但馬牛グルメ！城下町を満喫するおすすめ宿5選「2026最新」',
  description: '10月〜11月が最も雲海発生率が高まる「天空の城」竹田城跡！早朝の立雲峡から望む雲海に浮かぶ石垣の城と情緒ある城下町散策。朱々、ホテルEN、有斐軒など但馬の味覚と名湯を楽しむ厳選宿5選をご紹介。',
  keywords: '竹田城跡 雲海 見頃, 天空の城 宿, 立雲峡 展望台, 竹田城下町 旅館, ホテルEN 竹田城, 朱々 竹田',
  openGraph: {
    title: '秋の竹田城跡：天空の城の幻想的な雲海と但馬牛グルメ！城下町を満喫するおすすめ宿5選「2026最新」',
    description: '10月〜11月が最も雲海発生率が高まる「天空の城」竹田城跡！但馬牛と雲海を満喫する厳選宿5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-hyogo-takedajo-unkai-castle-tajima-hotels-stay',
  }
};

export default function TakedaCastleAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
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
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-amber-600 pl-3">
            秋の晴れた早朝だけに出会える「奇跡の天空パノラマ」
          </h2>
          <p className="mb-4 text-stone-700">
            標高353mの古城山山頂に築かれた竹田城跡。寒暖差の大きくなる10月から11月にかけてのよく晴れた早朝、濃い朝霧が発生し、まるで白い雲の海に城が浮かんでいるような神秘的な姿を見せます。対岸の朝来山中腹にある「立雲峡（りつうんきょう）」展望台から見渡すその姿は、「日本のマチュピチュ」と称されるにふさわしい光景です。
          </p>
          <p className="text-stone-700">
            雲海アタックの成否を分けるのは宿の立地。竹田城下町や近隣の和田山・朝来エリアに宿泊することで、早朝5時台の出発でも無理なくベストポジションを確保できます。下山後は町屋をリノベーションした風情あふれる宿で温かい朝食と名産・但馬牛を心ゆくまで堪能しましょう。
          </p>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">但馬・天空遺産ガイド：天空の城・国史跡 竹田城跡と秋の雲海</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/2/26/%E7%AB%B9%E7%94%B0%E5%9F%8E.JPG"
                alt="天空の城・国史跡 竹田城跡と秋の雲海"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">天空の城・国史跡 竹田城跡と秋の雲海の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">竹田城（たけだじょう）は、現在の兵庫県朝来市和田山町竹田にあった日本の城（山城）。 縄張りが虎が臥せているように見えることから、別名虎臥城（とらふすじょう、こがじょう）。国の史跡に指定されている。また城下から遥か高く見上げる山の頂に位置し、しばしば円山川の川霧により霞むことから、「天空の城」や「日本のマチュピチュ」とも呼ばれる。雲海に浮かび上がる古城の累々たる石垣群の威容は、名物ともなっている。 東に立雲峡を望む標高353.7mの古城山（虎臥山）の山頂に築かれ、縄張りは南北約400m、東西約100m。天守台をほぼ中央に配置し、本丸、二の丸、三の丸、南二の丸が連郭式に配され、北千畳部と南千畳を双翼とし、天守台北西部に花屋敷と称する一郭がある。廃城から約400年を経ているが、石垣がほぼそのままの状態で残っており、現存する山城として日本屈指の規模となっている。 朝来市は2012年4月に竹田城の管理・宣伝をする「竹田城課」を新設した。（2017年4月に観光交流課と文化財課に業務を移管され、現在は竹田城課は存在しない。）</p>
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
            楽天トラベル高評価！竹田城跡周辺の厳選宿5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
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
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    竹田城下まち　朱々　‐ＳｈｕＳｈｕ‐
                  </h3>
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
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    竹田城　城下町　ホテルＥＮ（えん）
                  </h3>
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
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    有斐軒
                  </h3>
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
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    囲炉裏の宿　豊楽
                  </h3>
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
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    竹田町屋　寺子屋　はな亭
                  </h3>
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
          <h3 className="text-base font-bold text-stone-900 mb-3">雲海登山の必須心得</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>発生条件:</strong> 「前日の昼と当日の朝の気温差が大きい」「風が弱い」「よく晴れている」条件が揃うと雲海が出やすくなります。</li>
            <li><strong>持ち物:</strong> 夜明け前の山道（立雲峡駐車場から徒歩20〜40分）を登るため、懐中電灯（ヘッドライト）、防寒着、雨具、歩きやすい靴が必須です。</li>
            <li><strong>竹田城跡直接登山:</strong> 城跡自体に登るルートと、城を外から眺める立雲峡ルートの2通りがあります。初めての方は立雲峡からの鑑賞が最も人気です。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
