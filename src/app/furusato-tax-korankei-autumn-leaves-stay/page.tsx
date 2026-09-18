import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '東海随一の紅葉名所「香嵐渓」4,000本のもみじライトアップ＆医者がすすめる天然ラドン猿投温泉の旅 | クラウドトラベルふるさと納税',
  description: '11月上旬〜11月下旬に見頃を迎える香嵐渓巴川沿いの圧巻もみじまつり。古い町並み足助散策と「奇跡の湯」猿投温泉の飲泉・ラドン療養泉でととのう秋の愛知・三河ふるさと納税宿泊特集。',
  keywords: ['豊田・香嵐渓・猿投 紅葉', '愛知県 紅葉 10月 11月', '香嵐渓もみじまつり＆猿投温泉', 'ふるさと納税 温泉宿泊券', 'しあわせ隠れ里 猿投温泉 癒しの宿 金泉閣', '柿野温泉 八勝園湯元館', '夏焼温泉 青柳亭', '楽天ふるさと納税 トラベル'],
  alternates: {
    canonical: 'https://croud-travel.com/furusato-tax-korankei-autumn-leaves-stay',
  },
  openGraph: {
    title: '東海随一の紅葉名所「香嵐渓」4,000本のもみじライトアップ＆医者がすすめる天然ラドン猿投温泉の旅',
    description: '11月上旬〜11月下旬に見頃を迎える香嵐渓巴川沿いの圧巻もみじまつり。古い町並み足助散策と「奇跡の湯」猿投温泉の飲泉・ラドン療養泉でととのう秋の愛知・三河ふるさと納税宿泊特集。',
    url: 'https://croud-travel.com/furusato-tax-korankei-autumn-leaves-stay',
    siteName: 'クラウドトラベル (croud-travel.com)',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "東海随一の紅葉名所「香嵐渓」4,000本のもみじライトアップ＆医者がすすめる天然ラドン猿投温泉の旅",
    "description": "11月上旬〜11月下旬に見頃を迎える香嵐渓巴川沿いの圧巻もみじまつり。古い町並み足助散策と「奇跡の湯」猿投温泉の飲泉・ラドン療養泉でととのう秋の愛知・三河ふるさと納税宿泊特集。",
    "author": {
      "@type": "Organization",
      "name": "クラウドトラベル編集部"
    },
    "publisher": {
      "@type": "Organization",
      "name": "クラウドトラベル",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.com/logo.png"
      }
    },
    "datePublished": "2026-09-19",
    "dateModified": "2026-09-19",
    "mainEntityOfPage": "https://croud-travel.com/furusato-tax-korankei-autumn-leaves-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "豊田・香嵐渓・猿投の紅葉の見頃時期はいつですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "例年11月の燃えるようなもみじライトアップと天然ラドン療養泉が見頃となります。標高差がある地域では高所から山麓へと約1ヶ月にわたり美しいグラデーションを楽しめます。"
        }
      },
      {
        "@type": "Question",
        "name": "ふるさと納税の楽天トラベルクーポンはどのように利用できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "寄付完了後、最短翌日〜数日以内に楽天トラベルの会員アカウントに宿泊クーポンが付与されます。予約時にクーポンを適用することで、最大30%相当の宿泊代金割引が受けられます。"
        }
      },
      {
        "@type": "Question",
        "name": "10月〜11月の豊田・香嵐渓・猿投旅行における服装や持ち物の注意点は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "秋の豊田・香嵐渓・猿投は日中と朝晩の寒暖差が非常に大きくなります。日中は長袖シャツや軽いジャケットで快適ですが、早朝・夜間や散策時は厚手のフリース、ダウンジャケット、手袋などの防寒着を必ずご用意ください。"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 leading-relaxed font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-amber-900 via-orange-900 to-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-amber-500/30 text-amber-200 border border-amber-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              愛知県 / 豊田・香嵐渓・猿投
            </span>
            <span className="bg-orange-600/40 text-orange-200 border border-orange-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              10月〜11月 秋限定特集
            </span>
            <span className="bg-emerald-600/40 text-emerald-200 border border-emerald-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              ふるさと納税 宿泊クーポン対象
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            東海随一の紅葉名所「香嵐渓」4,000本のもみじライトアップ＆医者がすすめる天然ラドン猿投温泉の旅
          </h1>
          <p className="text-base sm:text-lg text-amber-100 max-w-3xl leading-relaxed">
            巴川を紅く染める4,000本のもみじ絵巻。足助のレトロ散歩と奇跡のラドン名湯で心身を解き放つ秋旅。
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1">📅 ベストシーズン：11月の燃えるようなもみじライトアップと天然ラドン療養泉</span>
            <span className="flex items-center gap-1">♨️ 泉質自慢の名湯＆地産会席</span>
            <span className="flex items-center gap-1">🎁 実質自己負担2,000円で高級宿ステイ</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-950 border-b-2 border-amber-600 pb-3 mb-6">
            はじめに：秋の豊田・香嵐渓・猿投が魅せる極上の錦秋美と温泉旅
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            10月から11月にかけて、愛知県・豊田・香嵐渓・猿投エリアは一年で最も艶やかでドラマチックな季節を迎えます。澄み渡る秋空の下、木々が深紅や山吹色、黄金色へと染まりゆく圧巻のグラデーションは、訪れる旅人の心を奪ってやみません。
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            日中は爽やかな空気のなかで息をのむ絶景紅葉を満喫し、夕暮れには湯けむり立ち上る名湯に浸かって冷えた体を芯から温める――これぞ日本の秋旅の醍醐味です。さらに、実りの秋ならではのブランド牛や清流の恵み、旬の味覚を贅沢に味わう会席料理が、旅の満足度を最高潮へと高めてくれます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            本記事では、豊田・香嵐渓・猿投エリアの厳選された名宿3選を徹底解説します。楽天ふるさと納税の宿泊クーポンを活用すれば、実質自己負担わずか2,000円で憧れの高級旅館・温泉リゾートに宿泊可能。賢く贅沢に、心洗われる秋の休日を叶えましょう。
          </p>
        </section>

        {/* Highlight Map / Summary Points */}
        <section className="bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200 mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <span>🍁</span> 豊田・香嵐渓・猿投 秋旅の3大魅力ポイント
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">① 標高差が織りなす絶景パノラマ</div>
              <p className="text-xs sm:text-sm text-slate-600">
                山頂から山麓、渓谷へと色づきが移り変わり、10月中旬から11月下旬まで長期間にわたり感動的な紅葉美を鑑賞できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">② 個性豊かな名湯・美肌温泉</div>
              <p className="text-xs sm:text-sm text-slate-600">
                奥深い歴史と湯量を誇る天然温泉。秋風そよぐ露天風呂で紅葉を眺めながらの湯浴みは至福のひとときです。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">③ 実りの秋を味わい尽くす郷土美食</div>
              <p className="text-xs sm:text-sm text-slate-600">
                秋の味覚がぎっしり詰まった旬会席。厳選された地場ブランド牛や清流魚、採れたての山の幸をご堪能ください。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel 1 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4 mb-6">
            <div>
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">HOTEL SELECTION 01</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">しあわせ隠れ里 猿投温泉 癒しの宿 金泉閣</h3>
              <p className="text-xs text-slate-500">しあわせかくれざと さなげおんせん いやしのやど きんせんかく</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.59点 <span className="text-xs font-normal text-slate-600">(257件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/7144/7144.jpg"
                alt="しあわせ隠れ里 猿投温泉 癒しの宿 金泉閣の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  愛知・三河の奥座敷に佇む「医者がすすめる奇跡の湯」。日本屈指の天然ラドン温泉を贅沢に湛え、飲泉許可も得ている全国屈指の療養温泉リゾート。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  含弱放射能-ナトリウム-炭酸水素塩温泉（天然ラドン温泉・飲泉可） / 効能：通風、動脈硬化、高血圧、慢性皮膚病、疲労回復、自律神経調整
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：名鉄「浄水駅」または「愛知環状鉄道・保見駅」より無料送迎バスあり（要予約） / 猿投グリーンロード「加納IC」より車で約5分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                三河牛の溶岩焼き、三河湾直送の天然鮮魚、愛知名物の八丁味噌仕立て鍋、猿投温泉の源泉水で炊き上げた極上釜飯
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                静寂な山あいに包まれ、飲んで良し浸かって良しのラドン温泉で体の内側から細胞を活性化。香嵐渓の紅葉狩りとセットで訪れる極上リトリート。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D7144"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:from-amber-700 hover:to-orange-700 transition duration-150 transform hover:-translate-y-0.5 w-full sm:w-auto text-sm sm:text-base"
            >
              <span>🏨</span> 楽天トラベルで空室・プランを見る
            </a>
          </div>
        </section>

        {/* Hotel 2 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4 mb-6">
            <div>
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">HOTEL SELECTION 02</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">柿野温泉 八勝園湯元館</h3>
              <p className="text-xs text-slate-500">かきのおんせん はっしょうえんゆもとかん</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.13点 <span className="text-xs font-normal text-slate-600">(319件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/38582/38582.jpg"
                alt="柿野温泉 八勝園湯元館の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  香嵐渓からも好アクセスの隠れた名湯・柿野温泉の老舗宿。名物のジャングル大風呂と薬効高き天然ラジウム温泉、三河・美濃の山海旬会席を満喫。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  単純弱放射能温泉（天然ラジウム泉） / 効能：神経痛、リウマチ、胃腸病、冷え性、美肌効果
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：JR中央本線「多治見駅」よりタクシー約20分 / 東名高速・豊田藤岡ICより車で約20分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                飛騨牛・三河牛の食べ比べ陶板焼き、子持ち鮎の塩焼き、季節の山菜と松茸の釜飯会席、名物手作り豆腐
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                南国植物が生い茂る巨大なジャングル大風呂は圧巻の開放感。湯けむりの中でゆったりと旅の疲れを解きほぐせます。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D38582"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:from-amber-700 hover:to-orange-700 transition duration-150 transform hover:-translate-y-0.5 w-full sm:w-auto text-sm sm:text-base"
            >
              <span>🏨</span> 楽天トラベルで空室・プランを見る
            </a>
          </div>
        </section>

        {/* Hotel 3 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4 mb-6">
            <div>
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">HOTEL SELECTION 03</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">夏焼温泉 青柳亭</h3>
              <p className="text-xs text-slate-500">なつやけおんせん あおやぎてい</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.43点 <span className="text-xs font-normal text-slate-600">(35件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/153094/153094.jpg"
                alt="夏焼温泉 青柳亭の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  奥三河の山里、名倉川の清流沿いに佇む静かな一軒宿。香嵐渓から車で約30分の奥矢作エリアにあり、天然ラドン温泉と四季折々の山川の恵みを味わう。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  単純弱放射能冷鉱泉（加温循環） / 効能：関節痛、五十肩、冷え性、疲労回復、健康増進
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：猿投グリーンロード「力石IC」より国道153号線経由約45分 / 名鉄豊田市駅よりバス
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                奥三河のジビエ（猪・鹿肉）鍋、奥矢作名物の天然鮎・あまごの塩焼き、五平餅、山里の手打ちそば会席
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                川のせせらぎと満天の星に包まれる素朴な贅沢。観光地の喧騒を離れ、奥三河の自然の恵みと温かいもてなしに癒やされます。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D153094"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:from-amber-700 hover:to-orange-700 transition duration-150 transform hover:-translate-y-0.5 w-full sm:w-auto text-sm sm:text-base"
            >
              <span>🏨</span> 楽天トラベルで空室・プランを見る
            </a>
          </div>
        </section>

        {/* Furusato Tax Guide Section */}
        <section className="bg-gradient-to-br from-amber-900 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-amber-200">
            💡 楽天ふるさと納税で「宿泊クーポン」を賢く手に入れる3ステップ
          </h3>
          <p className="text-stone-200 text-sm sm:text-base leading-relaxed mb-6">
            楽天ふるさと納税を利用すれば、愛知県内の対象宿泊施設で使える楽天トラベルクーポンが寄付額に応じて返礼品として付与されます。実質負担2,000円で高級宿に泊まれるお得な活用法をチェックしましょう。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700">
              <div className="text-amber-400 font-bold text-sm mb-1">STEP 1. 控除上限額を確認</div>
              <p className="text-xs text-stone-300">
                ご自身の年収や家族構成から、自己負担2,000円で寄付できる年間控除上限額をシミュレーションします。
              </p>
            </div>
            <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700">
              <div className="text-amber-400 font-bold text-sm mb-1">STEP 2. 自治体へ寄付</div>
              <p className="text-xs text-stone-300">
                楽天ふるさと納税から対象自治体の「楽天トラベルクーポン返礼品」を選んで寄付を申し込みます。
              </p>
            </div>
            <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700">
              <div className="text-amber-400 font-bold text-sm mb-1">STEP 3. 予約時にクーポン適用</div>
              <p className="text-xs text-stone-300">
                付与されたクーポンを楽天トラベルの予約画面で選択するだけで、即座に宿泊代金が割引されます。
              </p>
            </div>
          </div>
          <div className="bg-amber-950/60 p-4 rounded-xl border border-amber-500/30 text-xs sm:text-sm text-amber-100 flex items-start gap-2">
            <span>ℹ️</span>
            <span>
              <strong>ポイント還元の二重取り：</strong>楽天カード決済や「お買い物マラソン」「0と5のつく日」を併用すると、寄付額に対して高還元率で楽天ポイントも獲得でき、さらにお得になります。
            </span>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3 mb-6">
            よくある質問（FAQ）
          </h3>
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h4 className="font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
                <span className="text-amber-600 font-bold">Q.</span> 豊田・香嵐渓・猿投の紅葉の見頃時期はいつですか？
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">
                例年11月の燃えるようなもみじライトアップと天然ラドン療養泉が見頃となります。標高の高い山頂付近から徐々に色づきが始まり、山麓の温泉街へと紅葉前線が降りてくるため、長期間にわたって楽しめます。
              </p>
            </div>
            <div className="border-b border-slate-100 pb-4">
              <h4 className="font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
                <span className="text-amber-600 font-bold">Q.</span> ふるさと納税クーポンと楽天トラベルの他セールクーポンは併用できますか？
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">
                楽天トラベルでは、原則として自治体発行のふるさと納税クーポンと一部の宿クーポン等を組み合わせて利用可能です。予約ステップで適用可能なクーポンが自動表示されます。
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
                <span className="text-amber-600 font-bold">Q.</span> 秋の旅行時に必要な服装や装備は？
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">
                10月〜11月の豊田・香嵐渓・猿投は朝晩の冷え込みが厳しくなります。脱ぎ着しやすいフリースや厚手のジャケット、歩きやすいスニーカーやトレッキングシューズの着用をおすすめします。
              </p>
            </div>
          </div>
        </section>

        {/* Navigation / Back to List */}
        <div className="text-center py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-600 font-bold text-sm sm:text-base transition"
          >
            ← トップページ・特集一覧に戻る
          </Link>
        </div>
      </main>
    </div>
  );
}
