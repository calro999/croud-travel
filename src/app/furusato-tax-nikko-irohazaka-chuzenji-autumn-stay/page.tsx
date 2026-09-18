import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日光・いろは坂の絶景紅葉と中禅寺湖・奥日光湯元温泉の白濁硫黄泉を満喫する秋の贅沢旅 | クラウドトラベルふるさと納税',
  description: '10月中旬〜11月上旬に見頃を迎える日光・いろは坂と中禅寺湖の紅葉。奥日光の乳白色硫黄泉「日光湯元温泉」の名宿で極上の湯浴みととちぎ和牛・湯波料理をふるさと納税でお得に楽しむ完全ガイド。',
  keywords: ['日光・中禅寺湖・奥日光 紅葉', '栃木県 紅葉 10月 11月', '日光いろは坂・中禅寺湖紅葉＆日光湯元温泉', 'ふるさと納税 温泉宿泊券', '日光湯元温泉 日光グランドホテル ほのかな宿樹林', '日光湯元温泉 奥日光パークロッジ深山', '日光湯元温泉 ゆ宿 美や川', '楽天ふるさと納税 トラベル'],
  alternates: {
    canonical: 'https://croud-travel.com/furusato-tax-nikko-irohazaka-chuzenji-autumn-stay',
  },
  openGraph: {
    title: '日光・いろは坂の絶景紅葉と中禅寺湖・奥日光湯元温泉の白濁硫黄泉を満喫する秋の贅沢旅',
    description: '10月中旬〜11月上旬に見頃を迎える日光・いろは坂と中禅寺湖の紅葉。奥日光の乳白色硫黄泉「日光湯元温泉」の名宿で極上の湯浴みととちぎ和牛・湯波料理をふるさと納税でお得に楽しむ完全ガイド。',
    url: 'https://croud-travel.com/furusato-tax-nikko-irohazaka-chuzenji-autumn-stay',
    siteName: 'クラウドトラベル (croud-travel.com)',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "日光・いろは坂の絶景紅葉と中禅寺湖・奥日光湯元温泉の白濁硫黄泉を満喫する秋の贅沢旅",
    "description": "10月中旬〜11月上旬に見頃を迎える日光・いろは坂と中禅寺湖の紅葉。奥日光の乳白色硫黄泉「日光湯元温泉」の名宿で極上の湯浴みととちぎ和牛・湯波料理をふるさと納税でお得に楽しむ完全ガイド。",
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
    "mainEntityOfPage": "https://croud-travel.com/furusato-tax-nikko-irohazaka-chuzenji-autumn-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "日光・中禅寺湖・奥日光の紅葉の見頃時期はいつですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "例年10月中旬〜11月上旬の錦秋グラデーションと奥日光の白濁名湯が見頃となります。標高差がある地域では高所から山麓へと約1ヶ月にわたり美しいグラデーションを楽しめます。"
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
        "name": "10月〜11月の日光・中禅寺湖・奥日光旅行における服装や持ち物の注意点は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "秋の日光・中禅寺湖・奥日光は日中と朝晩の寒暖差が非常に大きくなります。日中は長袖シャツや軽いジャケットで快適ですが、早朝・夜間や散策時は厚手のフリース、ダウンジャケット、手袋などの防寒着を必ずご用意ください。"
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
              栃木県 / 日光・中禅寺湖・奥日光
            </span>
            <span className="bg-orange-600/40 text-orange-200 border border-orange-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              10月〜11月 秋限定特集
            </span>
            <span className="bg-emerald-600/40 text-emerald-200 border border-emerald-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              ふるさと納税 宿泊クーポン対象
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            日光・いろは坂の絶景紅葉と中禅寺湖・奥日光湯元温泉の白濁硫黄泉を満喫する秋の贅沢旅
          </h1>
          <p className="text-base sm:text-lg text-amber-100 max-w-3xl leading-relaxed">
            いろは坂の圧巻パノラマ紅葉から奥日光のエメラルド白濁泉へ。世界遺産と自然美に酔いしれる秋の至高旅。
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1">📅 ベストシーズン：10月中旬〜11月上旬の錦秋グラデーションと奥日光の白濁名湯</span>
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
            はじめに：秋の日光・中禅寺湖・奥日光が魅せる極上の錦秋美と温泉旅
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            10月から11月にかけて、栃木県・日光・中禅寺湖・奥日光エリアは一年で最も艶やかでドラマチックな季節を迎えます。澄み渡る秋空の下、木々が深紅や山吹色、黄金色へと染まりゆく圧巻のグラデーションは、訪れる旅人の心を奪ってやみません。
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            日中は爽やかな空気のなかで息をのむ絶景紅葉を満喫し、夕暮れには湯けむり立ち上る名湯に浸かって冷えた体を芯から温める――これぞ日本の秋旅の醍醐味です。さらに、実りの秋ならではのブランド牛や清流の恵み、旬の味覚を贅沢に味わう会席料理が、旅の満足度を最高潮へと高めてくれます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            本記事では、日光・中禅寺湖・奥日光エリアの厳選された名宿3選を徹底解説します。楽天ふるさと納税の宿泊クーポンを活用すれば、実質自己負担わずか2,000円で憧れの高級旅館・温泉リゾートに宿泊可能。賢く贅沢に、心洗われる秋の休日を叶えましょう。
          </p>
        </section>

        {/* Highlight Map / Summary Points */}
        <section className="bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200 mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <span>🍁</span> 日光・中禅寺湖・奥日光 秋旅の3大魅力ポイント
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
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">日光湯元温泉 日光グランドホテル ほのかな宿樹林</h3>
              <p className="text-xs text-slate-500">にっこうゆもとおんせん にっこうぐらんどほてる ほのかなやどじゅりん</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.13点 <span className="text-xs font-normal text-slate-600">(1153件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/135482/135482.jpg"
                alt="日光湯元温泉 日光グランドホテル ほのかな宿樹林の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  日光国立公園の原生林に抱かれた静寂の温泉リゾート。奥日光湯元ならではの濃厚なエメラルドグリーンから乳白色へと変化する源泉かけ流し硫黄泉と、森を望む露天風呂、地元栃木の恵みを味わう会席が自慢。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  含硫黄-カルシウム・ナトリウム-硫酸塩・炭酸水素塩温泉（硫化水素型） / 源泉かけ流し（白濁・エメラルドグリーン） / 効能：神経痛、筋肉痛、冷え性、美肌効果、疲労回復
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：JR・東武「日光駅」より東武バス「湯元温泉」行きで約80分、終点下車徒歩約3分 / 日光宇都宮道路「清滝IC」よりいろは坂経由で約45分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                とちぎ和牛の陶板焼き、日光名物の引き上げ湯波・揚巻湯波、奥日光の清流で育った岩魚の塩焼き、旬の山の幸と契約農家直送の高原野菜会席
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                白樺やカラマツの森に囲まれた露天風呂「樹林の湯」では、湯花が舞う白濁の湯に浸かりながら、黄金色に染まる奥日光の紅葉パノラマを堪能できます。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D135482"
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
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">日光湯元温泉 奥日光パークロッジ深山</h3>
              <p className="text-xs text-slate-500">にっこうゆもとおんせん おくにっこうぱーくろっじみやま</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.47点 <span className="text-xs font-normal text-slate-600">(207件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/40862/40862.jpg"
                alt="日光湯元温泉 奥日光パークロッジ深山の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  木の温もりに包まれた山岳リゾートの趣を残すアットホームな温泉宿。湯元名物の濃厚な源泉かけ流し硫黄泉を24時間満喫でき、ハイキングや紅葉撮影の拠点としても絶大な人気を誇る。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  酸性・含硫黄-硫酸塩・塩化物温泉 / 完全源泉かけ流し（日によって白〜緑色に変化） / 効能：慢性皮膚病、冷え性、動脈硬化、関節痛、疲労回復
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：JR・東武「日光駅」より東武バス「湯元温泉」行き約80分、終点下車徒歩約5分 / 清滝ICより約40分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                郷土料理をモダンにアレンジした山里和食膳。日光湯波の炊き合わせ、栃木県産ハーブ豚のしゃぶしゃぶ鍋、地場産根菜の滋味豊かな小鉢
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                奥日光の澄んだ空気と静けさのなか、硫黄の香りに包まれて心身を芯からリセット。リーズナブルながら温かなもてなしと絶品温泉が評判です。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D40862"
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
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">日光湯元温泉 ゆ宿 美や川</h3>
              <p className="text-xs text-slate-500">にっこうゆもとおんせん ゆやど みやかわ</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 5点 <span className="text-xs font-normal text-slate-600">(60件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/8819/8819.jpg"
                alt="日光湯元温泉 ゆ宿 美や川の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  全5室のみの贅沢な大人の隠れ家。すべての客室や館内に落ち着いた和の美意識が宿り、貸切風呂で源泉100%かけ流しの乳白色硫黄泉を心ゆくまで堪能できる。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  単純硫黄温泉（硫化水素型） / 源泉100%完全かけ流し（加水・加温なし） / 効能：きりきず、やけど、慢性皮膚病、虚弱児童、慢性婦人病、美肌効果
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：JR・東武日光駅より湯元温泉行き東武バスで約75分「日光湯元」下車徒歩約2分 / 清滝ICよりいろは坂経由約40分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                板長が腕を振るう季節の本格懐石。厳選とちぎ和牛のフィレステーキ、極上生湯波のお造り、日光岩魚の姿造り、手打ち十割そば
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                全室わずか5室だからこそ叶うプライベート感と、一切薄めない極上の源泉。湯上がりに楽しむ地酒と、静寂に包まれた奥日光の夜が格別です。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D8819"
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
            楽天ふるさと納税を利用すれば、栃木県内の対象宿泊施設で使える楽天トラベルクーポンが寄付額に応じて返礼品として付与されます。実質負担2,000円で高級宿に泊まれるお得な活用法をチェックしましょう。
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
                <span className="text-amber-600 font-bold">Q.</span> 日光・中禅寺湖・奥日光の紅葉の見頃時期はいつですか？
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">
                例年10月中旬〜11月上旬の錦秋グラデーションと奥日光の白濁名湯が見頃となります。標高の高い山頂付近から徐々に色づきが始まり、山麓の温泉街へと紅葉前線が降りてくるため、長期間にわたって楽しめます。
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
                10月〜11月の日光・中禅寺湖・奥日光は朝晩の冷え込みが厳しくなります。脱ぎ着しやすいフリースや厚手のジャケット、歩きやすいスニーカーやトレッキングシューズの着用をおすすめします。
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
