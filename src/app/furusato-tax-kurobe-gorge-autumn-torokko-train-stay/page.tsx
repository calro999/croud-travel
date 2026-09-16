import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '日本一のV字峡谷を染める大紅葉！黒部峡谷トロッコ電車＆宇奈月つべつべ温泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】富山 | 旅宿クラウド',
  description: '10月中旬〜11月中旬が見頃！日本一深いV字峡谷をオープン客車のトロッコ電車で駆け抜ける「黒部峡谷鉄道」と、日本屈指の透明度を誇る「宇奈月温泉（つべつべ美肌の湯）」。黒部川の清流を望む「延楽」「やまのは」「ホテル黒部」。富山湾の紅ズワイガニ・寒ブリ・白えびを、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    '黒部峡谷トロッコ電車紅葉＆宇奈月温泉名旅館特集',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/furusato-tax-kurobe-gorge-autumn-torokko-train-stay/'
  },
  openGraph: {
    title: '日本一のV字峡谷を染める大紅葉！黒部峡谷トロッコ電車＆宇奈月つべつべ温泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】富山',
    description: '10月中旬〜11月中旬が見頃！日本一深いV字峡谷をオープン客車のトロッコ電車で駆け抜ける「黒部峡谷鉄道」と、日本屈指の透明度を誇る「宇奈月温泉（つべつべ美肌の湯）」。黒部川の清流を望む「延楽」「やまのは」「ホテル黒部」。富山湾の紅ズワイガニ・寒ブリ・白えびを、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。',
    url: 'https://croud-travel.pages.dev/furusato-tax-kurobe-gorge-autumn-torokko-train-stay',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FurusatoKurobeGorgeAutumnTorokkoStayPage() {
  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">黒部峡谷トロッコ電車紅葉＆宇奈月温泉名宿特集</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              黒部峡谷トロッコ電車紅葉＆宇奈月温泉名旅館特集
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              日本一のV字峡谷を染める大紅葉！黒部峡谷トロッコ電車＆宇奈月つべつべ温泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】富山
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              10月中旬〜11月中旬が見頃！日本一深いV字峡谷をオープン客車のトロッコ電車で駆け抜ける「黒部峡谷鉄道」と、日本屈指の透明度を誇る「宇奈月温泉（つべつべ美肌の湯）」。黒部川の清流を望む「延楽」「やまのは」「ホテル黒部」。富山湾の紅ズワイガニ・寒ブリ・白えびを、楽天ふるさと納税トラベルクーポンで実質2,000円で楽しむ完全ガイド。
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
            爽快な風とともに駆け抜ける錦秋のV字峡谷。清流黒部川のせせらぎと弱アルカリ性美肌湯に癒やされる秘境ステイへ
          </h2>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            北アルプスの険しい山々を黒部川が削り出して形成された、日本一深いV字谷「富山県・黒部峡谷」。10月中旬から11月中旬にかけての紅葉シーズンには、エメラルドグリーンの清流を挟んで両岸の絶壁が一斉に赤や黄色に染まり、息を呑むダイナミックな大自然の絵巻物が広がります。その絶景を間近で体感できるのが「黒部峡谷鉄道トロッコ電車」。窓のないオープン客車に揺られながら、赤い新山彦橋や後曳橋、猿飛峡などの名所を駆け抜ける体験は唯一無二の感動をもたらします。そしてトロッコ観光の拠点となるのが、黒部峡谷の玄関口に広がる名湯「宇奈月温泉」です。無色透明で弱アルカリ性の単純温泉は「日本一の透明度」と称され、肌をつるつるにする「つべつべ美肌の湯」として大人気。全客室・露天風呂から黒部峡谷の絶景を望む老舗高級旅館「延楽」、棚田状に広がる大パノラマ展望露天風呂を誇る「やまのは」、そしてトロッコ電車の走る姿をロビーや客室から眺められる「ホテル黒部」。富山湾の秋の味覚（紅ズワイガニ・白えび・寒ブリ・氷見牛）とともに、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して実質自己負担2,000円で予約し、大迫力の秘境紅葉旅へ出かけましょう。
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
                  爽快なオープン客車！黒部峡谷トロッコ電車で巡る日本一のV字峡紅葉
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                窓のない開放的なトロッコ電車から見上げる紅葉の断崖絶壁。澄んだ秋風を受けながらエメラルドグリーンの黒部川と紅葉のコントラストを間近に体感できます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  日本屈指の透明度！肌がつるつるになる宇奈月温泉「つべつべ美肌の湯」
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                黒部川上流の黒薙温泉から引湯する無色透明の弱アルカリ性単純温泉。刺激が少なく肌触りが滑らかで、峡谷美を眺めながら心身ともにリフレッシュできます。
              </p>
            </div>
  

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  富山湾の宝石「白えび」＆秋解禁「紅ズワイガニ」・寒ブリの極上日本海海鮮
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                「天然の生簀」と称される富山湾から直送される新鮮魚介。甘み濃厚な紅ズワイガニや香ばしい白えびのかき揚げ、脂が乗った寒ブリを会席料理で満喫できます。
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

            <div key="unazuki_enraku" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>富山県黒部市・創業八十余年！全客室＆露天風呂から黒部峡谷の絶景を望む屈指の純和風高級旅館</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第1選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.55 <span className="text-stone-400 text-xs">(544件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    宇奈月温泉　延楽
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 富山県黒部市宇奈月温泉347-1 ｜ 富山地方鉄道「宇奈月温泉駅」より徒歩3分 / 北陸自動車道 黒部ICより約２０分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/10719/10719.jpg"
                        alt="宇奈月温泉　延楽"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      黒部峡谷の清流沿いに佇み、宮大工の手による伝統の木造美と現代の快適性が調和した宇奈月温泉最高峰の老舗名門旅館。すべての客室および露天風呂「華の湯」「琴の湯」から黒部峡谷の壮大な紅葉パノラマを一望できます。料理は富山湾の朝獲れ鮮魚（紅ズワイガニ・白えび・のどぐろ・寒ブリ）や名水ポークを、料理人が一品一品手作りにこだわって仕立てる至高の越中会席。洗練されたおもてなしと静寂が極上の休日を約束します。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 季節のお料理と樹齢四百年の総檜露天風呂。露天風呂付き客室でゆったり自分時間。</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り・4０台・無料・先着順</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 31,900円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10719%2F10719.html"
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
    

            <div key="unazuki_yamanoha" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>富山県黒部市・黒部川を望む棚田状の展望大露天風呂「棚湯」！富山湾の幸を満喫するバイキング＆会席</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第2選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.31 <span className="text-stone-400 text-xs">(4,215件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    黒部・宇奈月温泉　やまのは（オリックスホテルズ＆リゾーツ）
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 富山県黒部市宇奈月温泉352番地7 ｜ 富山地方鉄道「宇奈月温泉駅」下車徒歩３分　無料送迎バス有※要確認／北陸自動車道黒部IC下車約２０分
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/9591/9591.jpg"
                        alt="黒部・宇奈月温泉　やまのは（オリックスホテルズ＆リゾーツ）"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      宇奈月温泉駅から徒歩3分、黒部川に架かる新山彦橋を望む絶好のロケーションに建つ大型リゾートホテル。最大の自慢は、棚田のように段違いに広がる展望大露天風呂「棚湯」で、開放感あふれる湯船から黒部峡谷の紅葉と山彦橋を渡るトロッコ電車を眺めることができます。夕食は富山の旬の食材を使ったオープンキッチンの豪華バイキングや落ち着いた会席料理が好評で、ファミリーからシニアまで大人気です。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> おかげさまで連続受賞！「楽天トラベル 日本の宿アワード2025 TOP47」♪</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 140台の無料駐車スペースがございます。</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 11,300円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9591%2F9591.html"
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
    

            <div key="unazuki_kurobe" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>富山県黒部市・黒部峡谷に一番近い絶景宿！トロッコ電車が目の前を走る宇奈月の隠れ宿</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第3選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ 4.45 <span className="text-stone-400 text-xs">(1,244件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    黒部峡谷・宇奈月温泉　ホテル黒部
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 富山県黒部市宇奈月温泉７番地 ｜ 北陸新幹線黒部宇奈月温泉駅から富山地鉄乗り換え25分。 宇奈月温泉駅から歩10分／北陸道 黒部ＩＣから約20分。
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/40625/40625.jpg"
                        alt="黒部峡谷・宇奈月温泉　ホテル黒部"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      宇奈月温泉街の最奥、黒部峡谷に最もせり出した高台に位置し、ロビーや大浴場、客室の窓から黒部峡谷鉄道のトロッコ電車が走る姿を間近に眺められる絶景温泉宿。宇奈月の名湯を湛えた大浴場・露天風呂からも対岸の紅葉の山肌を一望できます。夕食には富山名産の紅ズワイガニや白えび、富山湾の旬魚の刺身盛り合わせなど地元の滋味を取り入れた手作り会席を提供。温かなおもてなしが魅力の宿です。
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 温泉・特徴：</strong> 『宇奈月温泉随一の眺望』四季折々の地元食材と透明な美肌湯を堪能</div>
                      <div><strong className="text-stone-800">🚗 駐車場：</strong> 有り　40台　無料 （トロッコ観光中もお預かりいたします）</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり 6,600円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40625%2F40625.html"
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
  

            <li key="furusato-tax-matsuba-echizen-crab-season-opening-onsen-stay">
              <Link
                href="/furusato-tax-matsuba-echizen-crab-season-opening-onsen-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【松葉ガニ・越前ガニ解禁名宿×ふるさと納税】本場の初物カニ尽くし旅
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
  

            <li key="furusato-tax-luxury-hotspring-ryokan-stay">
              <Link
                href="/furusato-tax-luxury-hotspring-ryokan-stay"
                className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm transition text-stone-800 text-sm font-bold group"
              >
                <span className="text-amber-700 group-hover:text-amber-900 mr-1.5">👉</span>
                【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド
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
