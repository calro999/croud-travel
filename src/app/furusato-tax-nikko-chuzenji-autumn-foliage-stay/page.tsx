import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '湖面に映える錦秋の男体山！日光中禅寺湖・いろは坂＆奥日光にごり湯温泉宿×ふるさと納税完全ガイド【2026年最新秋旅】 | 旅宿クラウド',
  description: '10月中旬〜11月上旬に見頃を迎える関東屈指の紅葉名所「日光・中禅寺湖・いろは坂・華厳の滝」。湖畔のクラシックリゾートや乳白色硫黄泉の湯元温泉宿「ホテル花庵」「中禅寺金谷ホテル」「湯元板屋」。とちぎ和牛と湯波会席を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    '日光中禅寺湖＆いろは坂 絶景紅葉・乳白色硫黄泉名宿特集',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-nikko-chuzenji-autumn-foliage-stay/'
  },
  openGraph: {
    title: '湖面に映える錦秋の男体山！日光中禅寺湖・いろは坂＆奥日光にごり湯温泉宿×ふるさと納税完全ガイド【2026年最新秋旅】',
    description: '10月中旬〜11月上旬に見頃を迎える関東屈指の紅葉名所「日光・中禅寺湖・いろは坂・華厳の滝」。湖畔のクラシックリゾートや乳白色硫黄泉の湯元温泉宿「ホテル花庵」「中禅寺金谷ホテル」「湯元板屋」。とちぎ和牛と湯波会席を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-nikko-chuzenji-autumn-foliage-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FurusatoNikkoChuzenjiAutumnFoliageStayPage() {
  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">日光中禅寺湖・いろは坂紅葉＆にごり湯宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              日光中禅寺湖＆いろは坂 絶景紅葉・乳白色硫黄泉名宿特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              湖面に映える錦秋の男体山！日光中禅寺湖・いろは坂＆奥日光にごり湯温泉宿×ふるさと納税完全ガイド【2026年最新秋旅】
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              10月中旬〜11月上旬に見頃を迎える関東屈指の紅葉名所「日光・中禅寺湖・いろは坂・華厳の滝」。湖畔のクラシックリゾートや乳白色硫黄泉の湯元温泉宿「ホテル花庵」「中禅寺金谷ホテル」「湯元板屋」。とちぎ和牛と湯波会席を、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-amber-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <span>🗓️</span> 2026年最新版（10-11月秋シーズン）
              </span>
              <span className="flex items-center gap-1.5">
                <span>🎫</span> 楽天ふるさと納税トラベルクーポン対象
              </span>
              <span className="flex items-center gap-1.5">
                <span>✨</span> 実質自己負担2,000円
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/80 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-800 mb-4 border-l-4 border-amber-600 pl-4">
            標高千二百メートルの湖畔を彩るカエデとブナの紅葉。エメラルドグリーンの湖面と名湯硫黄泉に癒やされる秋旅へ
          </h2>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            標高約1,269mに位置し、日本屈指の高所湖として知られる栃木県・日光「中禅寺湖」。10月中旬から11月上旬にかけて、名峰・男体山の山肌や湖畔の原生林が一斉に朱・黄・橙の鮮烈なグラデーションに染まり、中禅寺湖クルーズの遊覧船や「いろは坂」「華厳の滝」から眺めるパノラマは息を呑む美しさです。さらに奥日光へと進めば、日本で4番目に濃いとされる名湯「日光湯元温泉（含硫黄-ナトリウム・カルシウム-硫酸塩・炭酸水素塩温泉）」の乳白色のにごり湯が旅人を温かく迎えてくれます。全客室から中禅寺湖を一望し二種の異なる源泉温泉を楽しめる和モダン宿「ホテル花庵」、木立の中に佇み日本最古のリゾートホテルの伝統と本格フレンチを継承する名門「中禅寺金谷ホテル」、そして開湯千二百年の濃厚なにごり湯を源泉かけ流しで守り続ける老舗旅館「奥日光湯元温泉 湯元板屋」。秋の日光ドライブ旅行を楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）でお得に予約し、歴史と大自然が調和する至高の紅葉ステイを満喫しましょう。
          </p>
        </section>

        {/* 3つの魅力ポイント */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900 text-center">
            この特集で厳選した宿をおすすめする3つの理由
          </h2>
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  01
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  いろは坂・華厳の滝・中禅寺湖遊覧船！関東屈指の紅葉ゴールデンルート
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                曲がりくねるいろは坂の絶景ドライブから、落差97mの華厳の滝、そして中禅寺湖の紅葉クルーズまで、秋の日光ならではのハイライトを凝縮して楽しめます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  エメラルドグリーンから乳白色へ変化する奥日光のにごり湯（天然硫黄泉）
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                湯船に注がれると空気に触れて白濁する濃厚な硫黄泉。高い美肌効果と血行促進作用があり、秋の冷え込んだ身体の芯までポカポカと温めてくれます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  日光名物「生湯波（ゆば）」料理と極上ブランド黒毛和牛「とちぎ和牛」
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                伝統の技で作られる風味豊かな日光湯波の創作料理や、柔らかく甘みのあるとちぎ和牛のステーキなど、栃木の豊かな風土が育んだ秋の美食を堪能できます。
              </p>
            </div>
  
          </div>
        </section>

        {/* ホテル一覧 */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900">
              【2026年最新】ふるさと納税で行く極上おすすめ宿3選
            </h2>
            <p className="text-stone-600 text-sm">
              宿泊予約時にトラベルクーポンを適用することで、最大30％割引＆実質2,000円で泊まれます。
            </p>
          </div>

          <div className="space-y-8">

            <div key="nikko_hanaan" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>栃木県日光市・全客室から中禅寺湖を一望！にごり湯硫黄泉とアルカリ単純泉の二種の湯を楽しむ宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.64 <span className="text-stone-400 text-xs">(1,289件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    日光中禅寺湖温泉　ホテル花庵
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 栃木県日光市中宮祠2480 ｜ ＪＲ日光駅又は東武日光駅より中禅寺温泉方面行きバス「中禅寺温泉バス停」下車。バス停より徒歩5分。日光東照宮より車で25分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/54978/54978.jpg"
                        alt="日光中禅寺湖温泉　ホテル花庵"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      中禅寺湖の大鳥居のすぐそばに佇み、全22室すべての客室の窓から中禅寺湖のレイクビューが広がる上質な和モダン温泉旅館。宿の最大の魅力は、日光湯元から引湯した乳白色のにごり湯硫黄泉（露天風呂）と、肌に優しいアルカリ性単純泉（内湯）という2つの異なる源泉を一度に堪能できること。夕食には地元栃木の指定農家から仕入れる新鮮旬野菜やとちぎ和牛、日光湯波をふんだんに盛り込んだヘルシーな創作会席が並びます。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 全２０室の全ての客室から広大な中禅寺湖を眺める事が可能でございます。</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 屋外駐車場（無料）１８台内、プラゴ(EV充電スタンド)２台設置（ご希望の場合到着時にご案内します）</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 18,000円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54978%2F54978.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md text-center transition flex items-center justify-center gap-2 text-sm"
                  >
                    <span>🏨 楽天トラベルで空室・宿泊プランを見る</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://event.travel.rakuten.co.jp/furusato/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3.5 px-6 rounded-2xl border border-stone-300 text-center transition text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>🎫 自治体クーポン獲得</span>
                  </a>
                </div>
              </div>
            </div>
    

            <div key="nikko_kanaya" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>栃木県日光市・中禅寺湖畔の静寂な森に佇む名門クラシックリゾート！源泉露天風呂「空ぶろ」と伝統フレンチ</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.50 <span className="text-stone-400 text-xs">(887件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    日光中禅寺温泉　中禅寺金谷ホテル
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 栃木県日光市中宮祠2482 ｜ 日光宇都宮有料道路清滝IC～車で約25分（いろは坂経由）東武日光駅～無料送迎バス有（運行時間変動有）日光東照宮迄車40分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/28759/28759.jpg"
                        alt="日光中禅寺温泉　中禅寺金谷ホテル"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      中禅寺湖の北岸、豊かなミズナラの原生林に囲まれた歴史あるリゾートホテル。館内の温泉露天風呂「空ぶろ（そらぶろ）」では、昼は木漏れ日と色づく紅葉を、夜は満天の星空を仰ぎながら日光湯元の濃厚なにごり湯を満喫できます。ダイニングでは金谷ホテル伝統の本格フランス料理フルコースを提供。洗練されたおもてなしと暖炉の温もりが、優雅で格調高い大人のリゾート休日を演出します。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 日光国立公園内、中禅寺湖畔に建つログハウス風洋式ホテル。露天温泉「空ぶろ－ＳＯＲＡＢＵＲＯ－」有り。</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り（屋外）　５０台　無料　予約不要</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 14,781円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28759%2F28759.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md text-center transition flex items-center justify-center gap-2 text-sm"
                  >
                    <span>🏨 楽天トラベルで空室・宿泊プランを見る</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://event.travel.rakuten.co.jp/furusato/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3.5 px-6 rounded-2xl border border-stone-300 text-center transition text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>🎫 自治体クーポン獲得</span>
                  </a>
                </div>
              </div>
            </div>
    

            <div key="nikko_itaya" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>栃木県日光市・創業百五十余年！日光湯元温泉の自家源泉を贅沢に100％掛け流す老舗名湯宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.56 <span className="text-stone-400 text-xs">(177件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    奥日光湯元温泉　湯元板屋
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 栃木県日光市湯元2530 ｜ 東武日光駅／ＪＲ　日光駅より湯元行き東武バスに乗車８０分。終点湯元バス停で下車し徒歩３分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/108140/108140.jpg"
                        alt="奥日光湯元温泉　湯元板屋"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      奥日光の湯ノ湖畔に位置し、慶応元年の創業以来、本物の名湯を守り続ける老舗旅館。湯小屋から直接引き込む硫黄泉は加水・加温一切なしの源泉掛け流しで、湯の花がたっぷりと浮かぶ濃密なにごり湯を24時間楽しめます。客室は木の温もりあふれる純和風の落ち着いた空間。夕食には日光名物の生湯波や霜降り日光牛、岩魚の塩焼きなど山の恵みを丁寧に調理した手作り会席料理が心身を優しく満たします。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 温泉クチコミ★4.8！日本で4番目に濃いといわれてる源泉かけ流しの乳白色のにごり湯が自慢の温泉宿</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　２０台　無料　予約不要</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 20,600円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108140%2F108140.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md text-center transition flex items-center justify-center gap-2 text-sm"
                  >
                    <span>🏨 楽天トラベルで空室・宿泊プランを見る</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://event.travel.rakuten.co.jp/furusato/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3.5 px-6 rounded-2xl border border-stone-300 text-center transition text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>🎫 自治体クーポン獲得</span>
                  </a>
                </div>
              </div>
            </div>
    
          </div>
        </section>

        {/* ふるさと納税クーポン使い方ステップ */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/80 shadow-sm mb-16">
          <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-800 mb-6 text-center">
            ふるさと納税トラベルクーポンの簡単3ステップ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">1</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">旅行先自治体に寄付</h3>
              <p className="text-xs text-stone-600 leading-relaxed">楽天ふるさと納税で泊まりたい宿がある市町村のトラベルクーポンを選んで寄付します。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">2</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">クーポンが付与される</h3>
              <p className="text-xs text-stone-600 leading-relaxed">寄付完了後、楽天トラベルのマイクーポンに即時〜数日で付与（有効期間は3年間）。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">3</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">予約時に割引適用</h3>
              <p className="text-xs text-stone-600 leading-relaxed">宿泊予約画面でクーポンを選択。すでに予約済みの宿でも「あとから適用」が可能です。</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/furusato-tax-travel-beginners-complete-guide"
              className="text-amber-800 font-bold text-xs sm:text-sm hover:underline"
            >
              👉 詳しいお金の流れやワンストップ特例の手順はこちらの完全マニュアルへ
            </Link>
          </div>
        </section>

        {/* 関連特集クロスリンク */}
        <section className="bg-stone-50 rounded-3xl p-8 border border-stone-200/80 mb-16">
          <h2 className="text-lg md:text-xl font-bold font-serif text-stone-800 mb-4">
            あわせて読みたい関連特集
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2">

            <li key="furusato-tax-autumn-foliage-gorge-onsen-stay">
              <Link
                href="/furusato-tax-autumn-foliage-gorge-onsen-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【紅葉渓谷美＆清流露天風呂×ふるさと納税】鬼怒川・鳴子・祖谷渓の隠れ宿
              </Link>
            </li>
  

            <li key="furusato-tax-pure-kakenagashi-secret-hotspring-stay">
              <Link
                href="/furusato-tax-pure-kakenagashi-secret-hotspring-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【源泉かけ流し秘湯×ふるさと納税】加水・加温なしの本物の湯力を堪能する名宿
              </Link>
            </li>
  

            <li key="furusato-tax-three-medicinal-hotsprings-stay">
              <Link
                href="/furusato-tax-three-medicinal-hotsprings-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【日本三大薬湯×ふるさと納税】有馬・草津・松之山の万病を癒やす名湯宿
              </Link>
            </li>
  

            <li key="furusato-tax-lakeview-onsen-resort-hotel-stay">
              <Link
                href="/furusato-tax-lakeview-onsen-resort-hotel-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【絶景レイクビュー温泉リゾート×ふるさと納税】琵琶湖・洞爺湖・箱根芦ノ湖
              </Link>
            </li>
  
          </ul>
        </section>

        {/* ハブページへの誘導フッター */}
        <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-amber-900/40 text-center mb-12">
          <h2 className="text-xl sm:text-2xl font-bold font-serif mb-3 text-amber-50">
            もっとお得に旅を楽しむためのハブページへ
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
            全国のテーマ別宿特集や、旅行費を最大30％安くする裏ワザを網羅した総合ガイドを公開中。
          </p>
          <Link
            href="/travel-savings-guide"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition text-sm"
          >
            🏨 旅行節約総合ハブページを見る ➔
          </Link>
        </div>

        {/* フッター */}
        <footer className="text-center text-xs text-stone-400 pt-6 border-t border-stone-200">
          <p>※表示内容は2026年9月時点の情報です。最新の宿泊プラン・クーポン対象施設は楽天トラベルにてご確認ください。</p>
          <p className="mt-2">
            <Link href="/" className="text-stone-500 hover:text-stone-800 underline transition">旅宿クラウド トップページへ</Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
