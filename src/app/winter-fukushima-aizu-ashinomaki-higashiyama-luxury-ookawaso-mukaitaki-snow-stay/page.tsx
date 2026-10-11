import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `【幻想の浮き舞台雪景色と文化財雪見ろうそく】2026-2027年12-1月真冬の福島・会津芦ノ牧＆東山温泉！「大川荘」＆登録有形文化財「向瀧」・渓谷雪見露天と極上会津馬刺し名宿5選`,
  description: `一面の銀世界に包まれる奥会津の冬。大川渓谷の断崖に立ち、吹き抜けのロビーに浮かぶ三味線の浮き舞台や段々の絶景露天風呂が名高い「会津芦ノ牧温泉 大川荘」。国の登録有形文化財第1号に指定され、冬の中庭に無数の竹筒ろうそくが灯る「会津東山温泉 向瀧」。湯川のせせらぎと深々と降る雪を眺める雪見風呂、極上の会津馬刺しや福島牛、厳冬の仕込み地酒に酔いしれる会津の名宿厳選5選。`,
  openGraph: {
    title: `【幻想の浮き舞台雪景色と文化財雪見ろうそく】2026-2027年12-1月真冬の福島・会津芦ノ牧＆東山温泉！「大川荘」＆登録有形文化財「向瀧」・渓谷雪見露天と極上会津馬刺し名宿5選`,
    description: `一面の銀世界に包まれる奥会津の冬。大川渓谷の断崖に立ち、吹き抜けのロビーに浮かぶ三味線の浮き舞台や段々の絶景露天風呂が名高い「会津芦ノ牧温泉 大川荘」。国の登録有形文化財第1号に指定され、冬の中庭に無数の竹筒ろうそくが灯る「会津東山温泉 向瀧」。湯川のせせらぎと深々と降る雪を眺める雪見風呂、極上の会津馬刺しや福島牛、厳冬の仕込み地酒に酔いしれる会津の名宿厳選5選。`,
    url: `https://travel.navitime.jp.net/winter-fukushima-aizu-ashinomaki-higashiyama-luxury-ookawaso-mukaitaki-snow-stay`,
    siteName: 'トラベルNAVI',
    locale: 'ja_JP',
    type: 'article',
  },
  alternates: {
    canonical: `https://travel.navitime.jp.net/winter-fukushima-aizu-ashinomaki-higashiyama-luxury-ookawaso-mukaitaki-snow-stay`,
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "東山温泉「向瀧」の冬の名物「雪見ろうそく」はいつ見られますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "例年12月中旬頃から翌年2月末頃まで、夕暮れの16:30〜18:00頃に中庭の雪景色の中で点灯されます。雪が降り積もった美しい中庭の斜面に約百本の竹筒ろうそくが一本一本手作業で灯され、客室の窓から眺めるその光景は水墨画に灯る幻想の明かりとして全国的に絶賛されています。"
      }
    },
    {
      "@type": "Question",
      "name": "芦ノ牧温泉「大川荘」の三味線浮き舞台の演奏時間はいつですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "毎日16:00〜18:00のチェックイン時間帯に合わせて、地下1階から吹き抜けるロビー中央の浮き舞台にて着物姿の演者による三味線の生演奏が行われています。まるでアニメや映画の世界に迷い込んだかのような幻想的な音色と空間美でお客様を出迎えてくれます。"
      }
    },
    {
      "@type": "Question",
      "name": "12月・1月の会津若松・東山・芦ノ牧温泉の道路状況や防寒対策はどうですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "12月中旬以降の会津エリアは日常的に積雪があり、朝晩は路面凍結が発生します。マイカーやレンタカーで訪れる際は必ずスタッドレスタイヤ（4WD推奨）を装着してください。運転に不安がある方は、新幹線と磐越西線・会津鉄道、各宿の無料送迎バスを利用するのが最も安全で快適です。"
      }
    }
  ]
}),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "ホーム",
      "item": "https://travel.navitime.jp.net"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "福島県",
      "item": "https://travel.navitime.jp.net/prefecture/fukushima"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "【幻想の浮き舞台雪景色と文化財雪見ろうそく】2026-2027年12-1月真冬の福島・会津芦ノ牧＆東山温泉！「大川荘」＆登録有形文化財「向瀧」・渓谷雪見露天と極上会津馬刺し名宿5選",
      "item": "https://travel.navitime.jp.net/winter-fukushima-aizu-ashinomaki-higashiyama-luxury-ookawaso-mukaitaki-snow-stay"
    }
  ]
}),
        }}
      />

      <article className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
        {/* パンくずリスト */}
        <nav className="bg-white border-b border-slate-200 text-xs py-3 px-4">
          <div className="max-w-5xl mx-auto flex items-center gap-2 text-slate-500 flex-wrap">
            <Link href="/" className="hover:text-amber-600">ホーム</Link>
            <span>&gt;</span>
            <Link href="/prefecture/fukushima" className="hover:text-amber-600">福島県</Link>
            <span>&gt;</span>
            <span className="text-slate-800 font-medium truncate">【幻想の浮き舞台雪景色と文化財雪見ろうそく】2026-2027年12-1月真冬の福島・会津芦ノ牧＆東山温泉！「大川荘」＆登録有形文化財「向瀧」・渓谷雪見露天と極上会津馬刺し名宿5選</span>
          </div>
        </nav>

        {/* ヘッダー */}
        <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-block bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              2026-2027年冬 厳選特集
            </div>
            <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-tight md:leading-snug">
              【幻想の浮き舞台雪景色と文化財雪見ろうそく】2026-2027年12-1月真冬の福島・会津芦ノ牧＆東山温泉！「大川荘」＆登録有形文化財「向瀧」・渓谷雪見露天と極上会津馬刺し名宿5選
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-left md:text-center pt-2">
              白銀の世界へと美しく染まる奥会津の冬。大川渓谷の断崖に立ち、吹き抜けのロビーに浮かぶ三味線の浮き舞台が話題を呼んだ芦ノ牧温泉「大川荘」と、国の登録有形文化財第1号に指定され、中庭の雪景色に無数の竹筒ろうそくが灯る東山温泉「向瀧」。渓流の瀬音と深々と降り積もる雪を眺めながら入る絶景の雪見風呂、極上の会津馬刺しや福島牛、伝統の郷土料理「こづゆ」、厳冬に仕込まれる会津の銘酒に酔いしれる、冬の会津の旅情あふれる名宿へご案内します。
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 mt-10 space-y-12">
          {/* 導入部 */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 leading-relaxed text-slate-700">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 border-b border-amber-200 pb-3 mb-4">
              冬の会津若松・東山温泉・芦ノ牧温泉で過ごす至福のひととき
            </h2>
            <p className="text-base leading-loose">
              福島県西部に位置し、白虎隊の歴史や名城・鶴ヶ城で知られる城下町『会津若松』。その奥座敷として湯川の渓流沿いに広がる『会津東山温泉（ひがしやまおんせん）』と、阿賀川（大川）の深い渓谷沿いに湧く『会津芦ノ牧温泉（あしのまきおんせん）』は、冬になると一面の白銀世界に包まれる東北屈指の雪見温泉郷です。東山温泉は天平時代に行基が開湯したと伝わる約1300年の名湯で、江戸時代には会津藩の湯治場として栄え、新選組の土方歳三や文豪・竹久夢二、与謝野晶子らが愛逗留しました。12月から1月にかけての厳冬期には、深い渓谷に深々と雪が降り積もり、水墨画のような息を呑む幽玄の景観が広がります。この冬の会津で全国の旅人を魅了してやまないのが、大川渓谷の断崖に佇み吹き抜けロビーの三味線浮き舞台や段々の絶景露天風呂が話題の『会津芦ノ牧温泉 大川荘』。そして、明治初期建築の木造建築が国の登録有形文化財第1号に指定され、冬の中庭の斜面に約百本の竹筒ろうそくが灯る奇跡の風物詩『雪見ろうそく』を誇る『会津東山温泉 向瀧（むかいたき）』。さらには会津若松の街並みと雪景色を一望するパノラマ展望露天風呂『宙の湯』を備えた『御宿 東鳳』など、歴史と自然が織りなす最高峰の名宿が揃います。夕食には、赤身の濃厚な旨味と特製辛子味噌が絶妙な本場『会津極上馬刺し』、きめ細やかな霜降りの『福島牛』陶板焼き、ホタテの干し貝柱の出汁が香る会津伝統の郷土料理『こづゆ』、そして雪国の清冽な仕込み水と米が醸す厳冬の『会津地酒』。湯煙立ちのぼる雪見露天風呂で身体の芯まで温まり、滋味あふれる郷土会席に舌鼓を打つ――それは冬の東北だからこそ出逢える、魂が震えるほどの旅情です。
            </p>
          </section>

          {/* 訪れるべき3つの理由 */}
          <section>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-amber-600">★</span>
              <span>2026-2027年冬に訪れるべき3つの理由</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-4 text-lg">
              01
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">大川渓谷の断崖絶景と三味線浮き舞台！『大川荘』の圧巻の空間美と棚田雪見露天</h3>
            <p className="text-sm text-slate-600 leading-relaxed">吹き抜けに浮かぶ幻想的な三味線の浮き舞台と、渓谷にせり出すように段々に配された絶景露天風呂『四季舞台たな田』。雪化粧の渓谷美と名湯の融合に息を呑みます。</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-4 text-lg">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">登録有形文化財第1号『向瀧』の幻想的な冬の風物詩「雪見ろうそく」と完全源泉掛け流し</h3>
            <p className="text-sm text-slate-600 leading-relaxed">国の文化財に指定された歴史的木造建築の中庭に灯る、無数の温かな竹筒ろうそく。自然湧出の完全源泉掛け流し温泉とともに、一生に一度は見たい冬の幽玄美を堪能できます。</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-4 text-lg">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">寒さ深まる季節に最も旨味を増す極上会津馬刺し・福島牛と厳冬の会津地酒</h3>
            <p className="text-sm text-slate-600 leading-relaxed">本場会津ならではの柔らかくジューシーな赤身馬刺しと辛子味噌、とろける福島牛ステーキ。全国新酒鑑評会で金賞受賞数日本一を誇る福島・会津の銘酒との極上ペアリングに酔いしれます。</p>
          </div>

            </div>
          </section>

          {/* 周辺観光スポット情報（Wikipedia連携実写） */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 border-b border-amber-200 pb-3">
              周辺観光スポット：湯川の渓流沿いに湧く会津藩の奥座敷・東山温泉（竹久夢二や与謝野晶子も愛した歴史の湯）
            </h2>
            
            <div className="relative rounded-xl overflow-hidden aspect-video shadow-md bg-slate-100">
              <img
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Higashiyama_Onsen_01.jpg/1280px-Higashiyama_Onsen_01.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="東山温泉"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
              <p>福島県会津若松市中心部から南東へ車でわずか10分、湯川の深い渓谷沿いに広がる開湯約1300年の名湯。天平年間に行基によって発見されたと伝えられ、江戸時代には会津藩の湯治場として歴代藩主や新選組副長・土方歳三、竹久夢二、与謝野晶子ら多くの歴史人が訪れました。冬には深い渓谷に深々と雪が降り積もり、中庭の雪景色に無数のろうそくが灯る幻想的な『雪見ろうそく』など冬ならではの幽玄な美が広がります。近隣の芦ノ牧温泉の大川渓谷絶景とともに、極上の会津馬刺しや福島牛、雪国仕込みの名酒が旅の夜を豊かに彩ります。</p>
              <p className="bg-amber-50/60 p-4 rounded-xl border border-amber-100 text-amber-900 font-medium">
                鶴ヶ城の雪景色や大内宿の茅葺き雪屋根を巡ったあとは、深い渓谷に佇む会津の奥座敷へ。三味線の音色が響く浮き舞台や幻想的な雪見ろうそくに迎えられ、湯煙立ちのぼる雪見露天風呂で温まりながら、極上の会津馬刺しと会津地酒に酔いしれる至高の夜をお過ごしいただけます。
              </p>
            </div>
          </section>

          {/* 厳選ホテル5選 */}
          <section className="space-y-8">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 flex items-center gap-3">
                <span className="text-amber-600">◆</span>
                <span>厳選の最高級宿5選</span>
              </h2>
              <p className="text-slate-500 text-xs md:text-sm mt-1">
                ※宿泊料金・クチコミ評価は楽天トラベル公式生データ連携
              </p>
            </div>

            
          <div className="bg-white rounded-2xl shadow-md border border-slate-200/80 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 md:p-8">
              <div className="inline-block bg-amber-100 text-amber-900 font-bold text-xs px-3 py-1 rounded-full mb-3">
                厳選最高級宿 第1位
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                会津芦ノ牧温泉　大川荘
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                吹き抜けに浮かぶ三味線の浮き舞台！大川渓谷を望む段々の絶景露天風呂「四季舞台たな田」
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/12682/12682.jpg"
                    alt="会津芦ノ牧温泉　大川荘"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">福島県会津若松市大戸町大字芦ノ牧字下夕平984</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥11,000〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.54 （2366件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">★渓流を望む源泉掛け流しの絶景露天風呂と会津ならではのお食事★</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>大川渓谷の断崖に建ち、吹き抜けロビーに浮かぶ三味線の浮き舞台が幻想的な大人気温泉旅館です。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>棚田のように段々に配された名物露天風呂「四季舞台たな田」や空中露天風呂から、雪化粧の大川渓谷を一望できます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>夕食は会津の郷土料理を取り入れた豪華な会席料理または和洋ビュッフェ。心に響く三味線の音色とおもてなしが魅力です。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「料理が美味しく、おもてなしと温泉に大満足料理がとても美味しく、おもてなしも良かったです。お風呂も良かった。」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12682%2F12682.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  会津芦ノ牧温泉　大川荘 の宿泊プラン・空室を楽天トラベルで確認
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-slate-200/80 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 md:p-8">
              <div className="inline-block bg-amber-100 text-amber-900 font-bold text-xs px-3 py-1 rounded-full mb-3">
                厳選最高級宿 第2位
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                会津東山温泉　向瀧
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                国の登録有形文化財第1号の格調高い木造建築！中庭を彩る「雪見ろうそく」と完全自然湧出かけ流し湯
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/67896/67896.jpg"
                    alt="会津東山温泉　向瀧"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">福島県会津若松市東山町湯本川向200</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥27,500〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.57 （162件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">会津藩から引き継いだ、源泉掛け流し認定。国の文化財の温泉宿。</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>明治初期の木造建築が国の登録有形文化財第1号に指定された、日本屈指の歴史と格式を誇る純和風旅館です。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>冬の夕暮れには中庭の雪の中に約百本の竹筒ろうそくが灯る「雪見ろうそく」が幻想的な美しさを放ちます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>敷地内から自然湧出する3本の自家源泉を完全掛け流し。会津藩の伝統を受け継ぐ手作りの郷土会席料理と地酒に酔いしれます。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「歴史ある建物と温泉に癒やされる素晴らしい環境歴史ある建物に感動しました。継続は力なり...ですね。お風呂の湯も良く素晴らしい環境の中ゆっくり出来ました。ただ、不便なところや変えた方が良いなと思うと」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67896%2F67896.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  会津東山温泉　向瀧 の宿泊プラン・空室を楽天トラベルで確認
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-slate-200/80 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 md:p-8">
              <div className="inline-block bg-amber-100 text-amber-900 font-bold text-xs px-3 py-1 rounded-full mb-3">
                厳選最高級宿 第3位
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                会津・東山温泉　御宿　東鳳（オリックスホテルズ＆リゾーツ）
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                会津若松の街並みと夜景を一望するパノラマ展望露天風呂「宙の湯」！多彩なビュッフェと温泉リゾート
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/16298/16298.jpg"
                    alt="会津・東山温泉　御宿　東鳳（オリックスホテルズ＆リゾーツ）"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">福島県会津若松市東山町大字石山字院内706</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥7,500〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.32 （6781件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">2024楽天アワード受賞☆会津郷土料理ほか多彩なバイキングと展望露天風呂が自慢です</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>東山温泉の高台に位置し、会津若松市街の夜景や雪景色をパノラマで見渡すタワー館を擁する大型温泉リゾートです。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>宙に浮かぶような開放感を味わえる展望露天風呂「宙の湯（そらのゆ）」で、良質な温泉と絶景のコラボレーションを満喫できます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>夕食は会津の郷土料理やできたてのオープンキッチン料理が並ぶ人気のビュッフェ。家族連れからカップルまで幅広く支持されています。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「バイキングは絶品、露天風呂にも感動バイキングは、食べた物全てが美味しかったです。お寿司、刺身、ネギそば、牛すじ煮込み、天ぷら等。ただ、通路が狭いのが残念...温泉は、気持ち良かったです。」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16298%2F16298.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  会津・東山温泉　御宿　東鳳（オリックスホテルズ＆リゾーツ） の宿泊プラン・空室を楽天トラベルで確認
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-slate-200/80 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 md:p-8">
              <div className="inline-block bg-amber-100 text-amber-900 font-bold text-xs px-3 py-1 rounded-full mb-3">
                厳選最高級宿 第4位
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                会津東山温泉　庄助の宿　瀧の湯
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                名所「伏見ヶ滝」を眼前に望む絶景雪見露天風呂！会津の郷土料理と風情ある川沿いの名宿
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/5738/5738.jpg"
                    alt="会津東山温泉　庄助の宿　瀧の湯"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">福島県会津若松市東山町湯本滝ノ湯108番地（庄助の宿 瀧の湯）</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥8,910〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.41 （4289件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">【楽天トラベル ゴールドアワード2025】【楽天トラベル 日本の宿アワードTOP47 2024】</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>湯川の名所「伏見ヶ滝」を目の前に望む絶好のロケーションに建ち、せせらぎと滝の音に包まれる老舗名旅館です。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>能舞台を模した風雅な露天風呂や大浴場から、雪をまとった渓流と滝の絶景を一望。夜のライトアップも幻想的です。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>夕食は会津の伝統料理「小汁（こづゆ）」や会津馬刺し、福島牛を盛り込んだ手作りの会席料理。心温まるもてなしが評判です。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「伝統と新しいサービスが融合した老舗の質ウエルカムドリンクの提供や抹茶の振る舞い、シャンプーバーや足湯等伝統と新しいサービスが両方ある良い宿でした。スタッフと料理は流石の老舗クオリティです。」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5738%2F5738.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  会津東山温泉　庄助の宿　瀧の湯 の宿泊プラン・空室を楽天トラベルで確認
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-slate-200/80 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 md:p-8">
              <div className="inline-block bg-amber-100 text-amber-900 font-bold text-xs px-3 py-1 rounded-full mb-3">
                厳選最高級宿 第5位
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                会津芦ノ牧温泉　丸峰観光ホテル
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                大川渓谷の美しい景観と自家源泉掛け流し！多彩な大浴場と渓流露天風呂・会津会席
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/20623/20623.jpg"
                    alt="会津芦ノ牧温泉　丸峰観光ホテル"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">福島県会津若松市大戸町芦ノ牧下夕平1128</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥7,000〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.31 （3388件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">2024年3月1日ビュッフェレストランオープン！山々に抱かれた渓谷美を望む【露天風呂付き客室】が人気</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>芦ノ牧温泉の清流・大川を見下ろす高台に建ち、渓谷の自然美を間近に感じる落ち着いた雰囲気の老舗温泉ホテルです。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>豊富な自家源泉を引き入れた総檜風呂や開放的な渓流露天風呂で、湯量豊かな名湯に身を委ねることができます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>夕食は会津の山の幸や川の幸、福島牛を贅沢に盛り込んだ季節の会席料理。広々とした客室で静かな冬のひとときを過ごせます。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「景色と食事は良いが天ぷらと土瓶蒸しが残念別館7階の部屋から川と山が見え綺麗でした。大浴場も大きく広い窓ガラスから山が見えます。ホテルも部屋も清潔で良いです。夕食は美味しく種類も豊富でした。ただ天ぷ」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20623%2F20623.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  会津芦ノ牧温泉　丸峰観光ホテル の宿泊プラン・空室を楽天トラベルで確認
                </a>
              </div>
            </div>
          </div>

          </section>

          {/* エリアへのアクセス＆冬の過ごし方 */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 border-b border-amber-200 pb-3 mb-4">
              エリアへのアクセス＆冬の快適な過ごし方
            </h2>
            <pre className="whitespace-pre-wrap font-sans text-xs md:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
              【エリアへのアクセス】
・電車・新幹線から：JR東北新幹線「郡山駅」よりJR磐越西線快速で「会津若松駅」まで約1時間15分。東山温泉へは会津若松駅より周遊バス「あかべぇ」「ハイカラさん」またはタクシーで約10〜15分。芦ノ牧温泉へは会津鉄道に乗り換え「芦ノ牧温泉駅」まで約25分（各旅館の無料送迎車あり・要予約）。
・車：磐越自動車道「会津若松IC」より東山温泉まで約20分。芦ノ牧温泉までは国道118号線経由で約30分。
・高速バス：新宿駅（バスタ新宿）より会津若松駅直行の高速バス「夢街道会津号」で約4時間20分。

【見頃・気候・おすすめの服装】
・ベストシーズン：12月上旬〜1月（12月中旬から本格的な降雪が始まり、一面の銀世界と雪見風呂、中庭の雪見ろうそくライトアップが楽しめる厳冬期のハイシーズン）。
・気温の目安：盆地気候の豪雪地帯で寒さが厳しく、12月は日中3〜7℃、朝晩は-3〜1℃。1月は日中でも0〜4℃、朝晩は-5〜-8℃以下まで下がります。
・服装のポイント：厚手のダウンコートや防寒インナー、手袋、マフラー、耳当てが必須です。雪道や凍結路面を歩くため、防水・防滑底のしっかりしたスノーブーツでお越しください。
            </pre>
          </section>

          {/* よくある質問 (FAQ) */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
              <span className="text-amber-600">？</span>
              <span>よくある質問（FAQ）</span>
            </h2>
            <div className="space-y-3">
              
          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
              <span className="text-amber-600 font-extrabold">Q.</span>
              <span>東山温泉「向瀧」の冬の名物「雪見ろうそく」はいつ見られますか？</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed pl-6">
              例年12月中旬頃から翌年2月末頃まで、夕暮れの16:30〜18:00頃に中庭の雪景色の中で点灯されます。雪が降り積もった美しい中庭の斜面に約百本の竹筒ろうそくが一本一本手作業で灯され、客室の窓から眺めるその光景は水墨画に灯る幻想の明かりとして全国的に絶賛されています。
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
              <span className="text-amber-600 font-extrabold">Q.</span>
              <span>芦ノ牧温泉「大川荘」の三味線浮き舞台の演奏時間はいつですか？</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed pl-6">
              毎日16:00〜18:00のチェックイン時間帯に合わせて、地下1階から吹き抜けるロビー中央の浮き舞台にて着物姿の演者による三味線の生演奏が行われています。まるでアニメや映画の世界に迷い込んだかのような幻想的な音色と空間美でお客様を出迎えてくれます。
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
              <span className="text-amber-600 font-extrabold">Q.</span>
              <span>12月・1月の会津若松・東山・芦ノ牧温泉の道路状況や防寒対策はどうですか？</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed pl-6">
              12月中旬以降の会津エリアは日常的に積雪があり、朝晩は路面凍結が発生します。マイカーやレンタカーで訪れる際は必ずスタッドレスタイヤ（4WD推奨）を装着してください。運転に不安がある方は、新幹線と磐越西線・会津鉄道、各宿の無料送迎バスを利用するのが最も安全で快適です。
            </p>
          </div>

            </div>
          </section>

          {/* ふるさと納税セクション */}
          <section className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 md:p-8 border border-amber-200/80 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-lg md:text-xl">
              <span>🎁</span>
              <span>楽天ふるさと納税で賢く泊まる！高級宿クーポン活用法</span>
            </div>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              憧れの最高級宿への宿泊には、**楽天ふるさと納税のトラベルクーポン**の活用が非常にお得です。
              福島県会津若松市への楽天ふるさと納税では、大川荘や向瀧、御宿東鳳など会津を代表する名旅館で使える宿泊クーポンが最大30%還元されます。奥会津の幻想的な雪景色と会津牛・馬刺しを味わう冬旅をお得にお楽しみいただけます。
              寄附金額の最大30%相当が宿泊割引クーポンとして即時付与され、有効期間も3年間と長いため、年末の寄附枠を活かして記念日やご褒美旅行の宿泊費を大幅に抑えることができます。
            </p>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm md:text-base px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition"
              >
                楽天ふるさと納税 トラベルクーポン特設ページを見る
              </a>
            </div>
          </section>

          {/* 内部リンク・関連特集 */}
          <section className="bg-slate-100 rounded-2xl p-6 md:p-8 space-y-4">
            <h2 className="text-lg md:text-xl font-bold text-slate-900">
              関連特集・あわせて読みたい冬の極上旅
            </h2>
            <ul className="space-y-2">
              
          <li className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex items-center justify-between">
            <a href="https://travel.navitime.jp.net/winter-shizuoka-izu-shuzenji-luxury-asaba-sora-onsen-stay" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              静岡・伊豆修善寺温泉の最高峰離れ宿と天城軍鶏・伊豆伊勢海老名宿
            </a>
            <span className="text-amber-500 text-sm font-bold ml-2">→</span>
          </li>

          <li className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex items-center justify-between">
            <a href="https://travel.navitime.jp.net/winter-hokkaido-niseko-luxury-resort-parkhyatt-setsuniseko-yotei-stay" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              北海道・ニセコの最高峰ラグジュアリーと羊蹄山雪見スイート・極上食材名宿
            </a>
            <span className="text-amber-500 text-sm font-bold ml-2">→</span>
          </li>

          <li className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex items-center justify-between">
            <a href="https://travel.navitime.jp.net/winter-hyogo-kinosaki-luxury-nishimuraya-mikiya-tsuiyamagani-stay" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              兵庫・城崎温泉の創業160年西村屋本館と青タグ活津居山ガニ・外湯めぐり名宿
            </a>
            <span className="text-amber-500 text-sm font-bold ml-2">→</span>
          </li>

          <li className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex items-center justify-between">
            <a href="https://travel.navitime.jp.net/winter-tottori-misasa-kaike-luxury-matsubagani-ryokan-ohashi-yugetsu-stay" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              鳥取・三朝＆皆生温泉の自噴ラジウム温泉と鳥取松葉ガニ五輝星・鳥取和牛名宿
            </a>
            <span className="text-amber-500 text-sm font-bold ml-2">→</span>
          </li>

          <li className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex items-center justify-between">
            <a href="https://travel.navitime.jp.net/winter-mie-ago-bay-luxury-basara-shimanokaze-matsusaka-stay" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              三重・志摩英虞湾の最高峰露天離れと伊勢海老・松阪牛名宿
            </a>
            <span className="text-amber-500 text-sm font-bold ml-2">→</span>
          </li>

          <li className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex items-center justify-between">
            <a href="https://travel.navitime.jp.net/winter-yamanashi-kawaguchiko-luxury-fufu-konansou-fuji-stay" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              山梨・富士河口湖の富士山ビュー露天スイートと甲州牛名宿
            </a>
            <span className="text-amber-500 text-sm font-bold ml-2">→</span>
          </li>

          <li className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex items-center justify-between">
            <a href="https://travel.navitime.jp.net/winter-kumamoto-kurokawa-luxury-takefue-hoshinoya-akaushi-stay" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              熊本・黒川温泉＆瀬の本の極上隠れ宿離れと阿蘇あか牛名宿
            </a>
            <span className="text-amber-500 text-sm font-bold ml-2">→</span>
          </li>

          <li className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex items-center justify-between">
            <a href="https://travel.navitime.jp.net/winter-kyoto-tango-taizagani-luxury-sumihei-amadori-matsuba-stay" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              京都・丹後間人の幻の間人ガニ創業明治名宿と極上松葉ガニ
            </a>
            <span className="text-amber-500 text-sm font-bold ml-2">→</span>
          </li>

          <li className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex items-center justify-between">
            <a href="https://travel.navitime.jp.net/winter-kagoshima-kirishima-myoken-luxury-gajin-ishiharaso-kurobuta-stay" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              鹿児島・霧島妙見温泉の自噴炭酸泉石原荘と極上黒毛和牛名宿
            </a>
            <span className="text-amber-500 text-sm font-bold ml-2">→</span>
          </li>

            </ul>
          </section>

          {/* 免責事項フッター */}
          <footer className="text-center text-xs text-slate-400 pt-6 border-t border-slate-200">
            <p>※会津芦ノ牧・東山温泉エリアの冬季宿泊プランや送迎バスの運行スケジュールは積雪状況により変更となる場合があります。冬期はスタッドレスタイヤ必須となりますので最新情報を楽天トラベル各宿ページにてご確認ください。</p>
          </footer>
        </div>
      </article>
    </>
  );
}
