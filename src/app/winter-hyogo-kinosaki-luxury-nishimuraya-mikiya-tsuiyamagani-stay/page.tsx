import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `【雪の柳並木と最高峰・青タグ津居山ガニ解禁】2026-2027年11-1月冬の兵庫・城崎温泉！創業160年「西村屋本館」＆「三木屋」・活松葉ガニフルコースと外湯めぐり名宿5選`,
  description: `11月上旬に待望の松葉ガニ漁が解禁！城崎の目と鼻の先にある津居山港で日帰り水揚げされる最高級ブランド「青タグ津居山ガニ」の聖地・城崎温泉。創業160年の歴史と格調高い純日本建築を誇る名門「西村屋本館」や、文豪・志賀直哉ゆかりの国登録有形文化財「三木屋」、広大な森林庭園の「招月庭」。雪舞う柳並木と情緒あふれる外湯めぐり、極上の活蟹刺しや甲羅焼きを堪能する冬の決定版5選。`,
  openGraph: {
    title: `【雪の柳並木と最高峰・青タグ津居山ガニ解禁】2026-2027年11-1月冬の兵庫・城崎温泉！創業160年「西村屋本館」＆「三木屋」・活松葉ガニフルコースと外湯めぐり名宿5選`,
    description: `11月上旬に待望の松葉ガニ漁が解禁！城崎の目と鼻の先にある津居山港で日帰り水揚げされる最高級ブランド「青タグ津居山ガニ」の聖地・城崎温泉。創業160年の歴史と格調高い純日本建築を誇る名門「西村屋本館」や、文豪・志賀直哉ゆかりの国登録有形文化財「三木屋」、広大な森林庭園の「招月庭」。雪舞う柳並木と情緒あふれる外湯めぐり、極上の活蟹刺しや甲羅焼きを堪能する冬の決定版5選。`,
    url: `https://travel.navitime.jp.net/winter-hyogo-kinosaki-luxury-nishimuraya-mikiya-tsuiyamagani-stay`,
    siteName: 'トラベルNAVI',
    locale: 'ja_JP',
    type: 'article',
  },
  alternates: {
    canonical: `https://travel.navitime.jp.net/winter-hyogo-kinosaki-luxury-nishimuraya-mikiya-tsuiyamagani-stay`,
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
      "name": "城崎温泉の「津居山ガニ（ついやまがに）」とは他の松葉ガニと何が違うのですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "津居山ガニは、城崎温泉から車で約10分の津居山港に水揚げされるズワイガニです。小型漁船で操業するため、日帰り操業（その日の朝獲れたカニを夕方にセリにかける）が可能で、大型船が数日かけて獲るカニに比べて圧倒的な鮮度と甘みを誇ります。品質基準を満たした最高級品には青色のタグが装着されます。"
      }
    },
    {
      "@type": "Question",
      "name": "城崎温泉の「外湯めぐり」は宿泊するとどう利用できますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "城崎温泉の旅館に宿泊すると、チェックイン時に「外湯めぐりデジタルパス（ゆめぱ）」が渡されます。これがあれば、チェックインから翌日のチェックアウトまで、温泉街にある7つの外湯（さとの湯、一の湯、御所の湯、まんだら湯、地蔵湯、鴻の湯、柳湯）に何度でも無料で自由に入浴できます。"
      }
    },
    {
      "@type": "Question",
      "name": "12月・1月の城崎温泉の気候と雪の状況はどうですか？車で行く際の注意点は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "12月中旬以降は冬型の気圧配置になると降雪があり、積雪や道路の凍結が発生します。雪景色の柳並木は素晴らしい情緒がありますが、マイカーやレンタカーで訪れる際は必ずスタッドレスタイヤ装着車でお越しください。JR特急電車を利用すれば雪道の心配なく快適にアクセスできます。"
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
      "name": "兵庫県",
      "item": "https://travel.navitime.jp.net/prefectures/hyogo"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "【雪の柳並木と最高峰・青タグ津居山ガニ解禁】2026-2027年11-1月冬の兵庫・城崎温泉！創業160年「西村屋本館」＆「三木屋」・活松葉ガニフルコースと外湯めぐり名宿5選",
      "item": "https://travel.navitime.jp.net/winter-hyogo-kinosaki-luxury-nishimuraya-mikiya-tsuiyamagani-stay"
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
            <Link href="/prefectures/hyogo" className="hover:text-amber-600">兵庫県</Link>
            <span>&gt;</span>
            <span className="text-slate-800 font-medium truncate">【雪の柳並木と最高峰・青タグ津居山ガニ解禁】2026-2027年11-1月冬の兵庫・城崎温泉！創業160年「西村屋本館」＆「三木屋」・活松葉ガニフルコースと外湯めぐり名宿5選</span>
          </div>
        </nav>

        {/* ヘッダー */}
        <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-block bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              2026-2027年冬 厳選特集
            </div>
            <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-tight md:leading-snug">
              【雪の柳並木と最高峰・青タグ津居山ガニ解禁】2026-2027年11-1月冬の兵庫・城崎温泉！創業160年「西村屋本館」＆「三木屋」・活松葉ガニフルコースと外湯めぐり名宿5選
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-left md:text-center pt-2">
              11月上旬のズワイガニ漁解禁とともに、年間で最も華やかで贅沢な季節を迎える城崎温泉。目と鼻の先にある津居山港で日帰り水揚げされる最高級ブランド「青タグ津居山ガニ」は、鮮度と身の詰まりが別格の芸術品です。大谿川沿いの雪舞う柳並木と太鼓橋、カランコロンと響く下駄の音、そして創業160年の歴史を誇る名門「西村屋本館」や志賀直哉ゆかりの「三木屋」。本物の活蟹料理と七田の外湯めぐりを満喫する冬の決定版をお届けします。
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 mt-10 space-y-12">
          {/* 導入部 */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 leading-relaxed text-slate-700">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 border-b border-amber-200 pb-3 mb-4">
              冬の城崎・津居山・円山川で過ごす至福のひととき
            </h2>
            <p className="text-base leading-loose">
              兵庫県北部の日本海近く、大谿川（おおたにがわ）の川沿いに木造旅館が軒を連ねる『城崎温泉（きのさきおんせん）』。開湯は奈良時代の養老4年（720年）と伝わり、千三百年もの長きにわたり旅人を癒やしてきた名湯です。文豪・志賀直哉が負傷療養に訪れ名作短編『城の崎にて』を執筆したことでも知られ、情緒あふれる文学と湯治の文化が今なお息づいています。城崎温泉が最も輝きを放つのが、11月6日の松葉ガニ漁解禁から真冬の1月にかけての冬シーズン。城崎の目と鼻の先にある『津居山（ついやま）港』は、小型の底引き網漁船が操業するため、夜明けに出港して夕方には港に戻る『日帰り操業』が特徴。競り落とされた松葉ガニは一度も冷凍されることなく生きたまま旅館へ届けられ、青色のプラスチックタグが付けられた『青タグ津居山ガニ』として全国の食通から最高の評価を受けています。この風情豊かな温泉街を代表するのが、創業160余年の伝統を誇り登録有形文化財の数寄屋建築と名庭を擁する山陰屈指の最高峰旅館『西村屋本館』。さらには広大な五万坪の森林庭園に包まれる別邸『西村屋ホテル招月庭』や、志賀直哉が滞在した歴史を紡ぐ国登録有形文化財の宿『三木屋』など、日本の伝統美とおもてなしの粋を極めた名門が立ち並びます。雪舞う大谿川沿いを下駄の音を響かせながら巡る『7つの外湯めぐり』、そして夕食に供される極上の活津居山ガニの刺身、香ばしい炭火焼き蟹、濃厚な甲羅味噌焼き、但馬牛のフィレステーキ。城崎の冬は、五感のすべてを震わせる最高の美食と情緒に満ちています。
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
            <h3 className="text-lg font-bold text-slate-900 mb-2">日帰り船だからこその圧倒的鮮度！最高峰ブランド「青タグ津居山ガニ」の活蟹三昧</h3>
            <p className="text-sm text-slate-600 leading-relaxed">城崎港直結の津居山港から届く新鮮な活松葉ガニ。花咲く蟹刺しの甘み、香ばしい焼き蟹、濃厚な甲羅味噌の甲羅酒まで、本物の味覚を心ゆくまで堪能できます。</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-4 text-lg">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">創業160年「西村屋本館」に代表される純日本建築の粋と文豪ゆかりの歴史</h3>
            <p className="text-sm text-slate-600 leading-relaxed">数寄屋造りの格調高い建築美と手入れの行き届いた日本庭園。志賀直哉をはじめとする文豪たちが愛した静けさと格式あるおもてなしに心が洗われます。</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-4 text-lg">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">雪景色の大谿川と7つの外湯めぐり！浴衣と下駄で歩く日本一の風情ある温泉街</h3>
            <p className="text-sm text-slate-600 leading-relaxed">大谿川にかかる太鼓橋と雪をまとった柳並木。宿の浴衣に下駄を鳴らしながら個性豊かな7つの外湯を巡る、日本屈指の温泉街歩きが楽しめます。</p>
          </div>

            </div>
          </section>

          {/* 周辺観光スポット情報（Wikipedia連携実写） */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 border-b border-amber-200 pb-3">
              周辺観光スポット：大谿川の柳並木と太鼓橋が織りなす雪情緒・城崎温泉（志賀直哉ゆかりの文学と七田の外湯めぐり）
            </h2>
            
            <div className="relative rounded-xl overflow-hidden aspect-video shadow-md bg-slate-100">
              <img
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Kinosaki_onsen02_1920.jpg/1280px-Kinosaki_onsen02_1920.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="城崎温泉"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
              <p>兵庫県豊岡市城崎町、日本海に近い大谿川（おおたにがわ）沿いに開けた1300年の歴史を誇る名湯。奈良時代の養老4年（720年）に道智上人の祈祷によって湧出したと伝えられ、志賀直哉の名作短編『城の崎にて』の舞台としても名高い文学の街です。川沿いの柳並木と風情ある太鼓橋、浴衣姿に下駄の音が響く温泉街には『一の湯』『御所の湯』など個性豊かな7つの外湯が点在。11月上旬の冬のズワイガニ漁解禁とともに、隣接する津居山港で日帰り水揚げされる最高級ブランド『青タグ津居山ガニ』を求めて全国から食通が集まります。</p>
              <p className="bg-amber-50/60 p-4 rounded-xl border border-amber-100 text-amber-900 font-medium">
                雪舞う大谿川の柳並木を歩き、情緒あふれる外湯めぐりと風情ある温泉街の散策を楽しんだあとは、歴史ある純日本建築の老舗宿へ。温かなもてなしと良質な温泉に癒やされ、青いタグが輝く活津居山ガニの刺身・焼き・茹で・甲羅酒を堪能する最高の冬の一夜が始まります。
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
                城崎温泉　西村屋本館
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                創業160年の歴史を誇る城崎の最高峰！名庭を望む伝統の数寄屋建築と極上津居山ガニ会席
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/75399/75399.jpg"
                    alt="城崎温泉　西村屋本館"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">兵庫県豊岡市城崎町湯島469</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥49,500〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★5 （338件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">◆売切れの日は公式サイトもご確認下さい◆江戸安政期創業、山陰隋一の純日本旅館として皆様をお迎致します</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>江戸安政年間の創業以来、日本の伝統と美意識を守り続ける城崎温泉を象徴する最高峰の老舗名門旅館です。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>美しい平田雅哉設計の数寄屋建築と、四季折々に表情を変える日本庭園。お部屋に一歩足を踏み入れれば格別の静寂に包まれます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>冬の夕食は選りすぐりの活津居山ガニを贅沢に使ったフルコース。料理人が丹精込めて焼き上げる香ばしい蟹や甲羅酒は至福の極みです。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「落ち着いた心地よい空間の中、温かい温泉とおいしいお料理で日頃の疲れを癒やすことができました」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75399%2F75399.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  城崎温泉　西村屋本館 の宿泊プラン・空室を楽天トラベルで確認
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
                城崎温泉　西村屋ホテル招月庭
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                五万坪の森林庭園に佇む優雅なリゾート！多彩なお風呂と松葉ガニ＆但馬牛
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/14007/14007.jpg"
                    alt="城崎温泉　西村屋ホテル招月庭"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">兵庫県豊岡市城崎町湯島1016-2</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥35,200〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.72 （1190件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">かに・但馬牛など四季折々の味覚と充実したお風呂。五万坪の森林に囲まれ寛ぎのひとときを。無料駐車場有</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>西村屋の伝統を受け継ぎながら、現代の快適性を融合させた五万坪の広大な森林庭園に囲まれたリゾート旅館です。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>露天風呂付き大浴場やジャグジー、趣の異なる3つのプライベートスパ（有料貸切露天風呂）など充実の温泉施設を備えます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>冬は名物・松葉ガニ料理と世界に誇る但馬牛の炭火焼きを心ゆくまで堪能。上質でゆったりとした大人の休日が叶います。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「部屋は広くて綺麗、料理の量と質も大満足部屋も大きく綺麗でした。お料理も量、質ともに満足でした」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14007%2F14007.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  城崎温泉　西村屋ホテル招月庭 の宿泊プラン・空室を楽天トラベルで確認
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
                城崎温泉　登録有形文化財の宿　三木屋
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                志賀直哉「城の崎にて」が生まれた国登録有形文化財の宿！美しい日本庭園と現代の洗練
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/106245/106245.jpg"
                    alt="城崎温泉　登録有形文化財の宿　三木屋"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">兵庫県豊岡市城崎町湯島487</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥28,600〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.81 （249件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">小説「城の崎にて」の舞台になった創業300年の老舗宿。歴史情緒と四季を楽しむレトロな日本旅館です。</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>創業三百年の歴史を誇り、文豪・志賀直哉が滞在し名作『城の崎にて』を執筆したことで全国に名を知られる文化財の宿です。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>手入れの行き届いた約三百坪の日本庭園を臨む数寄屋造りの客室。ブックラウンジなど現代の洗練が心地よく調和しています。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>夕食は津居山ガニをはじめとする日本海の冬の海の幸や最高級但馬牛を贅沢に仕立てた季節会席。歴史の温もりに浸る滞在が楽しめます。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「大満足全てが最高級でした!また泊まりたいです!大満足」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106245%2F106245.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  城崎温泉　登録有形文化財の宿　三木屋 の宿泊プラン・空室を楽天トラベルで確認
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
                城崎温泉　ときわ別館
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                四百坪の優美な中庭を囲む数寄屋造り！全室部屋食で味わう津居山ガニと静寂のひととき
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/28079/28079.jpg"
                    alt="城崎温泉　ときわ別館"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">兵庫県豊岡市城崎町湯島1013番地</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥15,400〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.7 （210件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">夕朝お部屋食・露天風呂付き客室で、静かに籠る休日を。ラウンジでの無料ドリンクサービス有</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>温泉街の喧騒から少し離れた閑静な地に佇み、四百坪の美しい日本庭園を囲むように配された本格数寄屋造りの宿です。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>全室がお部屋食に対応しており、周りを気にせずプライベートな空間でゆったりと食事と会話を楽しむことができます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>冬はタグ付き津居山ガニや但馬牛を使った贅沢な会席料理。檜香る内湯や露天風呂で良質な城崎の名湯を満喫できます。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「食事は残念だが男性スタッフの対応は良かった食事は品数が多いだけで、お出汁が良くなかった第二キャリアの男性たち?はとても気が利いて良くしてくれた大した金額ではないものの、心付けを渡しても本人」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28079%2F28079.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  城崎温泉　ときわ別館 の宿泊プラン・空室を楽天トラベルで確認
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
                城崎温泉　泉翠（せんすい）
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                3つの無料貸切風呂と洗練された和モダン！陶芸作家の器でいただく津居山ガニと但馬牛
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/7597/7597.jpg"
                    alt="城崎温泉　泉翠（せんすい）"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">兵庫県豊岡市城崎町湯島753</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥13,200〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.72 （810件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">温泉街中心に位置する大人限定の宿。サウナ付貸切風呂もオープン 館内の貸切風呂も無料で利用可</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>大谿川のほとりに佇む、全室和モダンのスタイリッシュで落ち着きのある大人の隠れ家的な人気宿です。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>館内には趣の異なる3つの貸切風呂（木・岩・陶）があり、空いていれば予約不要で何度でも無料で利用できます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>レストランでいただく冬の蟹会席は、作家物の器に美しく盛り付けられた目にも鮮やかな逸品。但馬牛との組み合わせも絶品です。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「おもてなしが完璧で、また必ず来たい!おもてなしが行き届いており、文句をつけるところが見当たりませんでした!様々な温泉を1度は訪れたいという気持ちで宿泊してきましたが、ここの旅館はまた来たいと強く思」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7597%2F7597.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  城崎温泉　泉翠（せんすい） の宿泊プラン・空室を楽天トラベルで確認
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
・電車・特急から：JR新大阪駅・大阪駅より特急「こうのとり」で城崎温泉駅まで直通約2時間45分。JR京都駅からも特急「きのさき」で城崎温泉駅まで直通約2時間25分。JR城崎温泉駅前より各旅館行き無料乗り合い送迎バスが列車到着に合わせて運行。
・車：北近畿豊岡自動車道「但馬空港IC」または「豊岡出石IC」より国道312号線経由で約25〜30分。大阪・神戸方面からは約2時間30分〜3時間。
・飛行機：コウノトリ但馬空港（伊丹空港より直行便約35分）より空港連絡バスで城崎温泉駅まで約40分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月上旬〜1月（11月6日の松葉ガニ漁解禁から、冬の津居山ガニが最も脂が乗り美味しくなるハイシーズン。12月以降は美しい雪景色も楽しめます）。
・気温の目安：日本海側の気候で冬は冷え込みます。11月は日中12〜16℃、朝晩は5〜9℃。12月・1月は日中6〜10℃、朝晩は0〜3℃前後となり降雪・積雪があります。
・服装のポイント：厚手の防寒コートやダウンジャケット、マフラーが必須です。外湯めぐりで浴衣の上に羽織る丹前や半纏が宿に用意されていますが、足元は滑りにくい靴や防寒ブーツでお出かけください。
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
              <span>城崎温泉の「津居山ガニ（ついやまがに）」とは他の松葉ガニと何が違うのですか？</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed pl-6">
              津居山ガニは、城崎温泉から車で約10分の津居山港に水揚げされるズワイガニです。小型漁船で操業するため、日帰り操業（その日の朝獲れたカニを夕方にセリにかける）が可能で、大型船が数日かけて獲るカニに比べて圧倒的な鮮度と甘みを誇ります。品質基準を満たした最高級品には青色のタグが装着されます。
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
              <span className="text-amber-600 font-extrabold">Q.</span>
              <span>城崎温泉の「外湯めぐり」は宿泊するとどう利用できますか？</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed pl-6">
              城崎温泉の旅館に宿泊すると、チェックイン時に「外湯めぐりデジタルパス（ゆめぱ）」が渡されます。これがあれば、チェックインから翌日のチェックアウトまで、温泉街にある7つの外湯（さとの湯、一の湯、御所の湯、まんだら湯、地蔵湯、鴻の湯、柳湯）に何度でも無料で自由に入浴できます。
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
              <span className="text-amber-600 font-extrabold">Q.</span>
              <span>12月・1月の城崎温泉の気候と雪の状況はどうですか？車で行く際の注意点は？</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed pl-6">
              12月中旬以降は冬型の気圧配置になると降雪があり、積雪や道路の凍結が発生します。雪景色の柳並木は素晴らしい情緒がありますが、マイカーやレンタカーで訪れる際は必ずスタッドレスタイヤ装着車でお越しください。JR特急電車を利用すれば雪道の心配なく快適にアクセスできます。
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
              兵庫県豊岡市への楽天ふるさと納税では、西村屋本館や招月庭、三木屋など城崎温泉を代表する憧れの名旅館で使える宿泊クーポンが最大30%還元されます。冬の味覚・津居山ガニと但馬牛を堪能する最高峰の温泉旅行をお得にお楽しみいただけます。
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
            <a href="https://travel.navitime.jp.net/winter-tottori-misasa-kaike-luxury-matsubagani-ryokan-ohashi-yugetsu-stay" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              鳥取・三朝＆皆生温泉の自噴ラジウム温泉と鳥取松葉ガニ五輝星・鳥取和牛名宿
            </a>
            <span className="text-amber-500 text-sm font-bold ml-2">→</span>
          </li>

          <li className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex items-center justify-between">
            <a href="https://travel.navitime.jp.net/winter-fukushima-aizu-ashinomaki-higashiyama-luxury-ookawaso-mukaitaki-snow-stay" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              福島・会津芦ノ牧＆東山温泉の大川荘浮き舞台と向瀧雪見ろうそく・会津馬刺し名宿
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
            <p>※城崎温泉の松葉ガニ・津居山ガニ会席プランは漁の解禁（11月上旬〜3月末）に合わせた限定提供となります。人気宿の露天風呂付き客室や特選ガニプランは早期に満室となるため、楽天トラベルでの事前確認を推奨します。</p>
          </footer>
        </div>
      </article>
    </>
  );
}
