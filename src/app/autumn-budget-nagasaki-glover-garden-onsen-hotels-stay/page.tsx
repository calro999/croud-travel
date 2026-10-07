import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の長崎×格安】グラバー園の秋バラと世界新三大夜景！大浴場付き1泊3,000円〜5,000円台のコスパ最強ホテル5選【2026最新】',
  description: '異国情緒あふれる南山手グラバー園の秋バラ・紅葉と、稲佐山から望む世界新三大夜景！長崎ちゃんぽんや卓袱料理を満喫。大浴場やサウナ完備で1泊3,000円〜5,000円台で泊まれる長崎駅周辺の格安ホテル5選。ホテルクオーレ長崎駅前、hotel H2などを徹底比較！',
  keywords: '長崎 格安 ホテル, 長崎 大浴場 ホテル 安い, グラバー園 秋バラ 紅葉, 稲佐山 夜景 宿, ホテルクオーレ長崎駅前, hotel H2 長崎',
  openGraph: {
    title: '【秋の長崎×格安】グラバー園の秋バラと世界新三大夜景！大浴場付き1泊3,000円〜5,000円台のコスパ最強ホテル5選【2026最新】',
    description: 'グラバー園の秋バラと稲佐山夜景！大浴場付き1泊3,000円〜5,000円台のコスパ最強長崎ホテル5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-budget-nagasaki-glover-garden-onsen-hotels-stay',
  }
};

export default function NagasakiBudgetAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/176612/176612.jpg"
          alt="秋の長崎・グラバー園からの港夜景と大浴場付き格安ホテル"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">格安・九州特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">1泊目安: 3,000円台〜5,000円台</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の長崎×格安】グラバー園の秋バラと世界新三大夜景！大浴場付き1泊3,000円〜5,000円台のコスパ最強ホテル5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            洋館のテラスから長崎港を見下ろすグラバー園の秋景色と、すり鉢状の夜景が輝く稲佐山パノラマ。本場の長崎ちゃんぽんや角煮まんじゅうを味わい、サウナや大浴場で疲れを癒やせる長崎の格安ホテルをご案内します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">長崎格安大浴場ホテル5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-teal-600 pl-3">
            秋の澄んだ空気にきらめく「世界新三大夜景」と異国情緒
          </h2>
          <p className="mb-4 text-stone-700">
            坂の街・長崎は、秋になると空気が一段と澄み渡り、稲佐山や鍋冠山からの夜景の輝きが一層眩しさを増します。旧グラバー住宅など石畳の洋館群を彩る秋バラや紅葉を眺め、大浦天主堂のステンドグラスに差し込む夕陽は息を呑む情緒です。
          </p>
          <p className="text-stone-700">
            長崎駅前や新地中華街周辺には、スタイリッシュなデザイナーズホテルや天然温泉付きホテルが揃い、1泊3,000円〜5,000円台から宿泊可能。坂道観光で歩き疲れた足腰を大浴場でしっかりほぐすことができます。
          </p>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">長崎・南山手洋館ガイド：長崎港を見下ろす南山手の丘・グラバー園</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Nagasaki_glover_16835805_886671322b_o_d.jpg"
                alt="長崎港を見下ろす南山手の丘・グラバー園"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">長崎港を見下ろす南山手の丘・グラバー園の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">グラバー園（グラバーえん）は、日本の長崎県長崎市南山手町8-1にある観光施設である。1859年（安政6年）の長崎開港後に長崎に来住したスコットランド人商人グラバー、リンガー、オルトの旧邸があった敷地に、長崎市内に残っていた歴史的建造物を移築しており、野外博物館の状態を呈している。 世界遺産「明治日本の産業革命遺産 製鉄・製鋼、造船、石炭産業」（全23資産）の構成資産である旧グラバー住宅などの洋風建築がある。2004年（平成16年）10月1日 - 2007年（平成19年）9月30日の間、長崎市民は無料で入場できていたが、2007年（平成19年）10月1日より市民も通常料金が必要になった。</p>
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
            楽天トラベル高評価！長崎の大浴場付き格安ホテル5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/180565/180565.jpg"
                  alt="Ｃｏｒｕｓｃａｎｔ　Ｈｏｔｅｌ　長崎駅２（コルサントホテル）"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.36</span>
                    <span className="text-stone-400 text-xs">(183件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    Ｃｏｒｕｓｃａｎｔ　Ｈｏｔｅｌ　長崎駅２（コルサントホテル）
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 長崎駅・路面電車電停 / 長崎駅より徒歩約 8 分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ◆◇長崎駅より徒歩約 8 分◇◆お仕事・観光に最適【全室Wi-Fi完備／全室トイレ風呂別】
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥3,600〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180565%2F180565.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/37511/37511.jpg"
                  alt="ホテル　クオーレ長崎駅前"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.25</span>
                    <span className="text-stone-400 text-xs">(4678件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテル　クオーレ長崎駅前
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 長崎（長崎） / ＪＲ長崎駅東口から徒歩約5分　高速バスターミナルより徒歩約１分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ＪＲ長崎駅正面に立地。全客室にＷｉ－Ｆｉ回線完備。女性専用フロアあり。
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥3,600〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37511%2F37511.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/176612/176612.jpg"
                  alt="ｈｏｔｅｌ　Ｈ２　ホテルエイチツー長崎"
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
                    <span className="text-stone-400 text-xs">(1465件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ｈｏｔｅｌ　Ｈ２　ホテルエイチツー長崎
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 長崎（長崎） / 空港バス「中央橋」下車徒歩約１分／長崎駅前より路面電車「西浜町」下車徒歩２分／長崎IC～出島道路出口から車で約3分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    最上階大浴場＆露天風呂／ 提携駐車場３ヶ所／空港バス停徒歩１分／電停徒歩２分／繁華街徒歩１分
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,700〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176612%2F176612.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/15312/15312.jpg"
                  alt="長崎スカイホテル"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.16</span>
                    <span className="text-stone-400 text-xs">(425件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    長崎スカイホテル
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 長崎（長崎） / JR長崎駅より車で10分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    長崎1,000万＄の夜景を一望できる料理自慢のお宿
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,265〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15312%2F15312.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/179673/179673.jpg"
                  alt="天然温泉　鶴港の湯　ドーミーインＰＲＥＭＩＵＭ長崎駅前（ドーミーイン・御宿野乃　ホテルズグループ）"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.53</span>
                    <span className="text-stone-400 text-xs">(1529件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    天然温泉　鶴港の湯　ドーミーインＰＲＥＭＩＵＭ長崎駅前（ドーミーイン・御宿野乃　ホテルズグループ）
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 長崎（長崎） / 長崎駅より徒歩にて約10分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    駅前周辺ホテルで唯一！男女別天然温泉大浴場完備！
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,650〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179673%2F179673.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">長崎観光のおすすめプラン</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>長崎電気軌道（路面電車）:</strong> 1乗車一律140円で市内主要観光地をほぼ網羅。600円の1日乗車券が便利です。</li>
            <li><strong>新地中華街グルメ:</strong> 本場の長崎ちゃんぽんや皿うどん、角煮まんじゅうやごま団子の食べ歩きが楽しめます。</li>
            <li><strong>稲佐山スロープカー:</strong> 中腹駅から山頂展望台までガラス張りのスロープカーで登ると、夜景が広がるパノラマに感動します。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
