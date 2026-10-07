import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '【秋の名古屋×格安】東山動植物園の紅葉ライトアップと名古屋めし！大浴場付き1泊3,000円台〜のコスパ最強ホテル5選【2026最新】',
  description: '東海屈指の紅葉名所「東山動植物園」の奥池水鏡ライトアップと名城公園の秋散策！ひつまぶし・手羽先・味噌カツなど「名古屋めし」を食べ歩き。天然温泉や大浴場付きで1泊3,000円〜5,000円台で泊まれる名古屋のコスパ最強ホテル5選をご紹介。名古屋クラウンホテル、ホテル・アンドルームス栄を徹底比較！',
  keywords: '名古屋 格安 ホテル, 名古屋 大浴場 天然温泉 ホテル, 東山動植物園 紅葉 ライトアップ, 名古屋めし 宿, 名古屋クラウンホテル, ホテルアンドルームス名古屋栄',
  openGraph: {
    title: '【秋の名古屋×格安】東山動植物園の紅葉ライトアップと名古屋めし！大浴場付き1泊3,000円台〜のコスパ最強ホテル5選【2026最新】',
    description: '東山動植物園の紅葉ライトアップと名古屋めし！大浴場付き1泊3,000円台〜のコスパ最強名古屋ホテル5選。',
    type: 'article',
    url: 'https://croud-travel.com/autumn-budget-aichi-nagoya-momiji-large-bath-hotels-stay',
  }
};

export default function NagoyaBudgetAutumnPage() {
  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 pb-20 font-sans">
      <div className="relative h-[480px] w-full overflow-hidden bg-stone-900">
        <Image
          src="https://img.travel.rakuten.co.jp/share/HOTEL/622/622.jpg"
          alt="秋の名古屋・東山動植物園の紅葉ライトアップと天然温泉付き格安ホテル"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full">格安・愛知特集</span>
            <span className="px-3 py-1 bg-stone-800 text-amber-300 text-xs font-medium rounded-full border border-amber-400/30">1泊目安: 3,000円台〜5,000円台</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-md">
            【秋の名古屋×格安】東山動植物園の紅葉ライトアップと名古屋めし！大浴場付き1泊3,000円台〜のコスパ最強ホテル5選
          </h1>
          <p className="text-stone-200 text-sm md:text-base max-w-3xl line-clamp-2 md:line-clamp-none">
            池の水面に映し出される東山動植物園の幻想的な紅葉ライトアップ。栄や伏見の中心街で名物ひつまぶしや手羽先を堪能し、天然温泉大浴場やサウナで寛げる名古屋の格安宿をご紹介します。
          </p>
        </div>
      </div>

      <nav className="max-w-4xl mx-auto px-4 py-4 text-xs text-stone-500">
        <Link href="/" className="hover:underline text-amber-700">ホーム</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-700 font-medium">名古屋格安大浴場ホテル5選</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-6">
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200/80 mb-10 leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-4 border-l-4 border-teal-600 pl-3">
            市内中心部の紅葉美と「名古屋めし」をコスパ良く楽しむ
          </h2>
          <p className="mb-4 text-stone-700">
            名古屋の秋の風物詩といえば「東山動植物園の紅葉ライトアップ」。約500本以上のモミジが色づく植物園エリアの奥池や日本庭園では、水鏡に映る夜の紅葉が息を呑む幻想的な世界を作り出します。
          </p>
          <p className="text-stone-700">
            名古屋駅や栄周辺には、自家源泉の天然温泉を持つ「名古屋クラウンホテル」をはじめ、3,000円〜5,000円台で大浴場やサウナを利用できる高コスパ宿が揃っています。宿泊費を抑えて浮いたお金で、老舗のひつまぶしや味噌煮込みうどんを贅沢に味わいましょう。
          </p>
        </section>

        
        {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">尾張・城下町散策ガイド：名城・名古屋城と名勝本丸御殿</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Nagoya_Castle_7.jpg/1280px-Nagoya_Castle_7.jpg"
                alt="名城・名古屋城と名勝本丸御殿"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">名城・名古屋城と名勝本丸御殿の歴史と見どころ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">名古屋城（なごやじょう）は、尾張国愛知郡名古屋（現愛知県名古屋市中区本丸・北区名城）にある日本の城。「名城（めいじょう）」「金鯱城（きんこじょう、きんしゃちじょう）」「金城（きんじょう）」の異名を持つ。日本100名城に選定されており、国の特別史跡に指定されている。</p>
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
            楽天トラベル高評価！名古屋の大浴場付き格安ホテル5選
          </h2>

          <div className="space-y-8">

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition">
              <div className="md:w-5/12 relative h-56 md:h-auto min-h-[220px]">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/622/622.jpg"
                  alt="─都心の天然温泉─　名古屋クラウンホテル"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.15</span>
                    <span className="text-stone-400 text-xs">(9933件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ─都心の天然温泉─　名古屋クラウンホテル
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 名古屋駅 / 地下鉄（東山線・鶴舞線）「伏見駅」６番出口より徒歩約５分。ＪＲ「名古屋駅」より車で約５分・徒歩約２０分。
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    【楽天トラベル シルバーアワード2025受賞】伏見駅徒歩約5分！天然温泉×名古屋めしバイキング
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥3,000〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F622%2F622.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/142606/142606.jpg"
                  alt="ＡＢホテル名古屋栄"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.09</span>
                    <span className="text-stone-400 text-xs">(3763件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ＡＢホテル名古屋栄
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 栄（愛知）駅 / 地下鉄東山線・名城線　栄駅１３番出口より徒歩６分、地下鉄名城線　矢場町駅１番出口より徒歩５分　　繁華街まで徒歩圏内
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    繁華街まで徒歩4分の好立地に和洋バイキング無料朝食・男女別浴場完備・ネット接続無料
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥3,400〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142606%2F142606.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/180672/180672.jpg"
                  alt="グリーンリッチホテル名古屋錦　人工温泉・二股湯の華"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.07</span>
                    <span className="text-stone-400 text-xs">(731件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    グリーンリッチホテル名古屋錦　人工温泉・二股湯の華
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 名古屋駅 / 名古屋駅より車で１０分■丸の内駅から徒歩１分・地下鉄伏見駅から徒歩４分■丸の内ＩＣより車で５分■
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    ■ＪＲ名古屋駅から車で１０分■繁華街錦町・栄町も徒歩圏内■ 男女別大浴場完備■
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥4,400〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180672%2F180672.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/166452/166452.jpg"
                  alt="ホテル・アンドルームス名古屋栄"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.19</span>
                    <span className="text-stone-400 text-xs">(505件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテル・アンドルームス名古屋栄
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 久屋大通駅 / 名古屋市営地下鉄名城線・桜通線「久屋大通駅」２A出口より徒歩５分
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    【男女露天風呂付大浴場あり＆ベーカリーカフェ併設】久屋大通駅より徒歩５分！男性にはサウナも☆
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,240〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F166452%2F166452.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/70971/70971.jpg"
                  alt="ホテルルートイン名古屋栄"
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
                    <span className="text-amber-500 font-bold text-sm">★ 4.14</span>
                    <span className="text-stone-400 text-xs">(2676件のクチコミ)</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">
                    ホテルルートイン名古屋栄
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">
                    アクセス: 栄（愛知）駅 / 地下鉄東山線　栄駅１２番出口より徒歩約10分／名古屋高速　東新町インターより車で約２分 　新栄・鶴舞からも至近！
                  </p>
                  <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                    VODルームシアター視聴可能(一般映画のみ：コンフォートルームのみ無料特典）
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">最安宿泊料金目安</span>
                    <span className="text-lg font-bold text-teal-700">¥5,400〜</span>
                    <span className="text-xs text-stone-500">/名</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70971%2F70971.html"
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
          <h3 className="text-base font-bold text-stone-900 mb-3">名古屋観光の注目スポット</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>徳川園の紅葉祭:</strong> 大曽根の池泉回遊式大名庭園で、池の周囲に色づくモミジと夜間ライトアップが風雅です。</li>
            <li><strong>喫茶店モーニング:</strong> 名古屋の朝はドリンク代だけで小倉トーストやゆで卵が付くモーニングサービスでスタートしましょう。</li>
            <li><strong>地下鉄ドニチエコきっぷ:</strong> 土日祝日は市営地下鉄・バスが620円で1日乗り放題になり大変お得です。</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
