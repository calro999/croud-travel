import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `【幻のブランド蟹・間人ガニと日本海の荒波を望む名旅館】2026-2027年11-12月初冬の京都・丹後間人＆京丹後！創業明治「間人温泉 炭平」＆全室海一望露天スイート・極上活松葉ガニ名宿5選`,
  description: `11月上旬に待望の冬の味覚・ズワイガニ漁が解禁。その中でもわずか数隻の小型船が日帰り漁で水揚げする「幻の蟹」と呼ばれる間人（たいざ）ガニの聖地・京都丹後。創業明治元年、全室オーシャンビューと多彩な貸切露天風呂を誇る名門「間人温泉 炭平」をはじめ、極上の活蟹刺し・甲羅焼き・蟹すきを求めて全国から食通が集う冬の最高峰グルメ旅館厳選5選。`,
  openGraph: {
    title: `【幻のブランド蟹・間人ガニと日本海の荒波を望む名旅館】2026-2027年11-12月初冬の京都・丹後間人＆京丹後！創業明治「間人温泉 炭平」＆全室海一望露天スイート・極上活松葉ガニ名宿5選`,
    description: `11月上旬に待望の冬の味覚・ズワイガニ漁が解禁。その中でもわずか数隻の小型船が日帰り漁で水揚げする「幻の蟹」と呼ばれる間人（たいざ）ガニの聖地・京都丹後。創業明治元年、全室オーシャンビューと多彩な貸切露天風呂を誇る名門「間人温泉 炭平」をはじめ、極上の活蟹刺し・甲羅焼き・蟹すきを求めて全国から食通が集う冬の最高峰グルメ旅館厳選5選。`,
    url: `https://travel.navitime.jp.net/winter-kyoto-tango-taizagani-luxury-sumihei-amadori-matsuba-stay`,
    siteName: 'トラベルNAVI',
    locale: 'ja_JP',
    type: 'article',
  },
  alternates: {
    canonical: `https://travel.navitime.jp.net/winter-kyoto-tango-taizagani-luxury-sumihei-amadori-matsuba-stay`,
  },
};

export default function LuxuryStayPage() {
  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "「間人ガニ」が他のズワイガニ・松葉ガニと比べて特別な理由は何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "間人港所属の船はわずか数隻の小型底引き網船で、他の大型船が数日間の航海を行うのに対し、深夜に出港して午後には帰港する「日帰り操業」を行います。生きたまま日帰りで水揚げされるためストレスや鮮度落ちが極めて少なく、抜群の身の締まりと甘み、濃厚な味噌を保ったまま調理されるため「幻の蟹」と称されます。"
      }
    },
    {
      "@type": "Question",
      "name": "「間人温泉 炭平」の貸切露天風呂の利用方法は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "炭平には敷地内に趣の異なる6つの貸切露天風呂（海の露天、桜の露天等）が備えられており、スマートフォン等から空き状況を確認して予約不要・無料で何度でも湯浴みを楽しめるシステムとなっています。日本海を一望する圧倒的な開放感が魅力です。"
      }
    },
    {
      "@type": "Question",
      "name": "間人ガニ以外の食材も楽しめますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい。丹後エリアは京都の食の宝庫であり、冬に脂が乗る「寒ブリ」のお造りやしゃぶしゃぶ、幻のブランド牛「丹後牛」、地元の有機冬野菜や丹後コシヒカリなど、海山の極上食材が会席を彩ります。"
      }
    }
  ]
};
  const breadcrumbSchema = {
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
      "name": "京都府",
      "item": "https://travel.navitime.jp.net/prefectures/kyoto"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "【幻のブランド蟹・間人ガニと日本海の荒波を望む名旅館】2026-2027年11-12月初冬の京都・丹後間人＆京丹後！創業明治「間人温泉 炭平」＆全室海一望露天スイート・極上活松葉ガニ名宿5選",
      "item": "https://travel.navitime.jp.net/winter-kyoto-tango-taizagani-luxury-sumihei-amadori-matsuba-stay"
    }
  ]
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-3 text-xs md:text-sm text-slate-500 flex items-center space-x-2">
            <Link href="/" className="hover:text-amber-600 transition">ホーム</Link>
            <span>/</span>
            <Link href="/prefectures/kyoto" className="hover:text-amber-600 transition">京都府</Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold truncate">丹後・京丹後・間人・夕日ヶ浦 最高級宿特集</span>
          </div>
        </div>

        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white py-16 md:py-24 px-4 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs md:text-sm font-bold px-4 py-1.5 rounded-full mb-6">
              2026-2027年 11-12月 初冬特選 高CPA最高級宿コレクション
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight md:leading-snug mb-6 text-slate-50">
              【幻のブランド蟹・間人ガニと日本海の荒波を望む名旅館】2026-2027年11-12月初冬の京都・丹後間人＆京丹後！創業明治「間人温泉 炭平」＆全室海一望露天スイート・極上活松葉ガニ名宿5選
            </h1>
            <p className="text-sm md:text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
              11月上旬に待望の冬の味覚・ズワイガニ漁が解禁。その中でもわずか数隻の小型船が日帰り漁で水揚げする「幻の蟹」と呼ばれる間人（たいざ）ガニの聖地・京都丹後。創業明治元年、全室オーシャンビューと多彩な貸切露天風呂を誇る名門「間人温泉 炭平」をはじめ、極上の活蟹刺し・甲羅焼き・蟹すきを求めて全国から食通が集う冬の最高峰グルメ旅館厳選5選。
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 mt-12 space-y-16">
          <section className="bg-white p-6 md:p-10 rounded-2xl border border-slate-200/80 shadow-md">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 border-l-4 border-amber-500 pl-4">
              初冬の静寂が織りなす最高峰の贅沢リトリート
            </h2>
            <p className="text-slate-700 leading-relaxed md:leading-loose text-base md:text-lg">
              日本海の荒波が打ち寄せる京都府北部、奇岩と断崖が織りなす絶景の地『丹後半島・間人（たいざ）』。毎年11月6日のズワイガニ漁解禁とともに、全国から本物の味を求める食通や美食家たちが集まる冬の最高峰グルメの聖地です。その頂点に君臨するのが、わずか数隻の小型船が波高し日本海へ出港し、その日のうちに水揚げする最高峰ブランド『間人ガニ（たいざがに）』。日帰り漁ゆえの圧倒的な鮮度と、極上の身入り・濃厚な蟹味噌の甘みは他の追随を許さず、その希少性の高さから『幻の蟹』と称賛されます。この間人の海岸沿いに佇むのが、創業明治元年、150余年の伝統を誇る名門料理旅館『間人温泉 炭平（すみへい）』。全室が日本海を一望するオーシャンビューで、洗練された露天風呂付き客室や趣の異なる6つの無料貸切露天風呂を備えています。また、久美浜の静かな入江に佇む全室離れ・源泉かけ流し露天付きの隠れ宿『蒲井温泉 いっぺん庵』など、贅を尽くした名宿が集まります。夕食には、職人が目の前で生きた間人ガニを捌き、花咲く活蟹刺し、香ばしい炭火焼き蟹、濃厚な甲羅味噌焼き、出汁が染み入る蟹すき鍋へと続く至高のフルコース。冬の日本海に沈む夕日と荒波を客室露天風呂から眺めながら過ごす初冬の丹後は、一生に一度は体験したい美食の極楽浄土です。
            </p>
          </section>

          <section>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                11月〜12月に訪れるべき3つの理由
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                初冬だからこそ出会える絶景と美食、極上のプライベート空間
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-4 text-lg">
              01
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">11月解禁！わずか数隻の小型船が水揚げする「幻の蟹・間人ガニ」の至高のフルコース</h3>
            <p className="text-sm text-slate-600 leading-relaxed">全国の美食家が憧れる最高峰ブランド蟹。水揚げ当日の抜群の鮮度だからこそ味わえる透明な活蟹刺しや炭火焼きの甘み、濃厚な甲羅味噌は別格の極みです。</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-4 text-lg">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">創業明治元年の名門「炭平」をはじめ全室オーシャンビュー＆露天風呂付き客室</h3>
            <p className="text-sm text-slate-600 leading-relaxed">日本海の荒波と夕日を一望する贅沢なロケーション。趣の異なる多彩な貸切露天風呂や客室露天で、潮騒を聞きながら名湯に浸かる贅沢が叶います。</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-4 text-lg">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">伊根の舟屋や天橋立の観光名所にも近接！冬の海の京都を満喫する極上ドライブ</h3>
            <p className="text-sm text-slate-600 leading-relaxed">重要伝統的建造物群保存地区「伊根の舟屋」や日本三景「天橋立」へも車で好アクセス。冬の澄んだ大気のもとで海の京都の情緒を心ゆくまで堪能できます。</p>
          </div>

            </div>
          </section>

          <section className="bg-gradient-to-br from-amber-50 to-orange-50/50 p-6 md:p-8 rounded-2xl border border-amber-200/60 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2 aspect-video relative rounded-xl overflow-hidden shadow-md">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Funaya_in_Ine_Town%2C_Yosa_District%2C_Kyoto_Prefecture_003.jpg/1280px-Funaya_in_Ine_Town%2C_Yosa_District%2C_Kyoto_Prefecture_003.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="伊根の舟屋"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-3">
                <span className="inline-block bg-amber-600 text-white font-bold text-xs px-3 py-1 rounded-full">
                  宿と合わせて巡る周辺名所
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
                  日本海の海に浮かぶ重要伝統的建造物群・伊根の舟屋（丹後半島の伝統美と幻の間人ガニの海）
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  伊根の舟屋（いねのふなや）は、京都府与謝郡伊根町の伊根湾（伊根浦）沿いの海面すれすれに立ち並ぶ船倉兼民家で、1階に船の収納庫、上階に住居を備えた、この地区独特の伝統的建造物である。この景観に人口2千人ほどの町に年間30万人超の観光客が訪れている。
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-10">
            <div className="text-center">
              <span className="text-amber-600 font-extrabold tracking-wider text-xs md:text-sm uppercase block mb-1">
                Luxury Stays Selection
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900">
                厳選の最高級名宿 5選
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                楽天トラベル最新API生データに基づく客室露天風呂・極上会席のプレミアム宿
              </p>
            </div>

            <div className="space-y-10">
              
          <div className="bg-white rounded-2xl shadow-md border border-slate-200/80 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6 md:p-8">
              <div className="inline-block bg-amber-100 text-amber-900 font-bold text-xs px-3 py-1 rounded-full mb-3">
                厳選最高級宿 第1位
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                窓に広がる夕日と海　美食を奏で１５０有余年　間人温泉　炭平
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                創業明治元年・美食の頂点を極める老舗名旅館！日本海一望の露天スイートと幻の間人ガニ
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/67435/67435.jpg"
                    alt="窓に広がる夕日と海　美食を奏で１５０有余年　間人温泉　炭平"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">京都府京丹後市丹後町間人3718</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥32,000〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.6 （486件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">ここは、いにしえの皇后が愛した桃源郷、悠久から変わらぬ情景の中で、美食を奏で百五十有余年</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>150年以上の歴史を誇る間人温泉の最高峰旅館。全客室が日本海の水平線を望むオーシャンビューで、洗練された露天風呂付きスイートが揃います。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>敷地内には趣の異なる6つの貸切露天風呂が点在。海に沈む夕日や満天の星、潮騒を間近に感じる極上の湯浴みが叶います。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>夕食は主人が厳選した本物の間人ガニフルコース。刺身、焼き、茹で、甲羅味噌、鍋と、余すところなく味わい尽くす感動の晩餐です。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「こだわり抜かれた空間と細やかなサービスに感動お部屋のつくりや建物もセンスがあり、とてもオシャレで快適で高級感がありました。スタッフの方たちのサービスもきめ細かく、気持ちよく過ごせました。すべてにお…　2026-09-19 10:06:31投稿 つづきはこちら」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67435%2F67435.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  窓に広がる夕日と海　美食を奏で１５０有余年　間人温泉　炭平 の宿泊プラン・空室を楽天トラベルで確認
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
                蒲井温泉　いっぺん庵
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                久美浜の入江に佇む全7室の離れ隠れ宿！全室源泉掛け流し露天風呂＆内湯付き
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/104615/104615.jpg"
                    alt="蒲井温泉　いっぺん庵"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">京都府京丹後市久美浜町蒲井522-1</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥42,350〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.52 （191件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">楽天ゴールドプレミアム認定。1日7組限定100％源泉掛け流し【にごり湯】贅沢を叶える大人の隠れ宿</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>久美浜のかまぼこ状の美しい海岸沿いに佇む大人のための隠れ宿。わずか7室すべての客室が独立した離れ仕様です。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>客室には敷地内から自噴する良質な蒲井温泉の内湯と露天風呂を完備。24時間いつでも好きな時に極上の湯浴みを楽しめます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>冬の夕食は水揚げされたばかりの極上松葉ガニや丹後牛、近海の地魚を盛り込んだ贅沢会席。プライベートな個室で至福のひとときを過ごせます。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「お部屋のお風呂と美しい食事に大満足とてもステキな贅沢お宿でした。お部屋のお風呂は何度も入り満喫しました食事もどれも美しい盛り付けだけでなく、お味も美味でした。満喫・満腹・大満足でした。…　2026-09-09 14:38:59投稿 つづきはこちら」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F104615%2F104615.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  蒲井温泉　いっぺん庵 の宿泊プラン・空室を楽天トラベルで確認
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
                夕日ヶ浦温泉　海花亭　花御前
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                数寄屋造りの贅沢な空間！庭園露天風呂と冬の活蟹づくしに心酔する名門宿
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/37429/37429.jpg"
                    alt="夕日ヶ浦温泉　海花亭　花御前"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">京都府京丹後市網野町木津193</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥25,900〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.46 （339件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">【露天風呂付客室×個室食】京風数奇屋の優美な佇まい、都会の謙遜を忘れ露天風呂付客室で過ごす大人の休日</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>夕日ヶ浦温泉の美しい自然に溶け込む数寄屋風の落ち着いた名門旅館。広々とした大浴場と庭園露天風呂で美肌の湯を堪能できます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>客室専用露天風呂付き客室も充実。ゆったりとした和の空間で、日常のストレスを解き放つ贅沢な滞在が叶います。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>夕食は熟練の料理人が腕を振るう活蟹会席。香ばしい焼き蟹の香りと上品な甘みの蟹刺しが冬の旅情を極限まで盛り上げます。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「豪華な食事と部屋、ソファの居心地も最高豪華な部屋と豪華な食事で、滞在を満喫しました。スタッフさんの対応も大変丁寧で良かったです。ソファが居心地良かったです!!」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37429%2F37429.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  夕日ヶ浦温泉　海花亭　花御前 の宿泊プラン・空室を楽天トラベルで確認
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
                夕日ヶ浦温泉　佳松苑　別邸ふうか
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                大人のためのスタイリッシュな隠れ宿！全室展望温泉風呂付き＆夕日と蟹の美食
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/72071/72071.jpg"
                    alt="夕日ヶ浦温泉　佳松苑　別邸ふうか"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">京都府京丹後市網野町木津247</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥15,840〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.67 （987件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">夕日百選に選ばれる夕日ヶ浦の海景。冬の活蟹会席と源泉美肌の湯をプライベートに堪能。</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>夕日百選に選ばれる夕日ヶ浦海岸にほど近い、大人の寛ぎを追求したプレミアム旅館です。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>全客室に海または庭を望む展望温泉風呂を完備。落ち着いたモダン和室で静かなプライベート時間を満喫できます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>冬は選べる蟹料理プランが充実。活蟹刺しや焼き蟹、甲羅酒など、冬の味覚を心ゆくまで堪能できる上質なコースが揃います。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「大人のための隠れ宿。全室展望温泉風呂付き、冬の松葉ガニフルコースと極上の寛ぎ」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/4bf14a1a.2085cf55.4bf14a1b.469cb8e9/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72071%2F72071.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  夕日ヶ浦温泉　佳松苑　別邸ふうか の宿泊プラン・空室を楽天トラベルで確認
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
                間人温泉郷　昭恋館　よ志のや
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                間人港の仲買人が営む料理旅館！昭和レトロな意匠と本物の間人ガニへのこだわり
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/8209/8209.jpg"
                    alt="間人温泉郷　昭恋館　よ志のや"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">京都府京丹後市丹後町間人1297-3</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥10,800〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.61 （312件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">間人港水揚げのブランド蟹にこだわり続ける料理旅館。冬の味覚を極めた至福の蟹尽くし会席。</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>間人港のすぐそばに佇み、蟹への確かな目利きで全国の食通に知られる創業昭和の老舗料理宿です。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>昭和の美意識を感じさせるレトロモダンな館内。心地よいジャズが流れるロビーや温もりある客室が迎えてくれます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>主人が間人港で自ら競り落とす極上の間人ガニを炭火で焼き上げる贅沢。蟹を知り尽くした宿ならではの感動の味わいを体験できます。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「幻の間人ガニを炭火焼きや刺しで味わい尽くす老舗宿。昭和レトロな風情と温かいもてなし」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/4bf14a1a.2085cf55.4bf14a1b.469cb8e9/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8209%2F8209.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  間人温泉郷　昭恋館　よ志のや の宿泊プラン・空室を楽天トラベルで確認
                </a>
              </div>
            </div>
          </div>

            </div>
          </section>

          <section className="bg-slate-900 text-slate-100 p-6 md:p-8 rounded-2xl shadow-md space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-amber-400 border-l-4 border-amber-400 pl-4">
              アクセス＆初冬の快適な過ごし方
            </h2>
            <pre className="whitespace-pre-wrap font-sans text-xs md:text-sm text-slate-300 leading-relaxed bg-slate-800/80 p-5 rounded-xl border border-slate-700">
              【エリアへのアクセス】
・電車：京都駅よりJR山陰本線特急「きのさき」または「はしだて」で福知山・天橋立経由、京都丹後鉄道に乗り換えて「網野駅」または「峰山駅」まで約2時間30分〜3時間。各旅館による駅からの専用送迎（要予約・約15〜30分）あり。
・車：京都縦貫自動車道「京丹後大宮IC」より国道312号線・府道経由で約35〜45分。大阪・神戸方面からは舞鶴若狭自動車道・京都縦貫道経由で約2時間30分〜3時間。
・飛行機：コウノトリ但馬空港（羽田より伊丹乗り継ぎ）よりレンタカーまたはタクシーで約1時間。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月上旬〜12月（11月6日の松葉ガニ・間人ガニ漁解禁直後の最も活気あるシーズン。荒波の日本海と雪化粧前の澄んだ海景色が広がります）。
・気温の目安：日本海側の海洋性気候で11月は日中12〜16℃、朝晩は6〜10℃。12月は日中8〜12℃、朝晩は2〜5℃まで下がり、時折時雨（しぐれ）や初雪が舞います。
・服装のポイント：海風が強いため防風性のある厚手のダウンコートやウールコート、マフラー、手袋をご用意ください。海岸沿いの散策には滑りにくい歩きやすい靴が適しています。12月中旬以降の車移動は念のため冬用タイヤ装着が安心です。
            </pre>
          </section>

          <section className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                よくある質問（FAQ）
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                初冬の滞在や予約に関する疑問にお答えします
              </p>
            </div>
            <div className="space-y-4">
              
          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
              <span className="text-amber-600 font-extrabold">Q.</span>
              <span>「間人ガニ」が他のズワイガニ・松葉ガニと比べて特別な理由は何ですか？</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed pl-6">
              間人港所属の船はわずか数隻の小型底引き網船で、他の大型船が数日間の航海を行うのに対し、深夜に出港して午後には帰港する「日帰り操業」を行います。生きたまま日帰りで水揚げされるためストレスや鮮度落ちが極めて少なく、抜群の身の締まりと甘み、濃厚な味噌を保ったまま調理されるため「幻の蟹」と称されます。
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
              <span className="text-amber-600 font-extrabold">Q.</span>
              <span>「間人温泉 炭平」の貸切露天風呂の利用方法は？</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed pl-6">
              炭平には敷地内に趣の異なる6つの貸切露天風呂（海の露天、桜の露天等）が備えられており、スマートフォン等から空き状況を確認して予約不要・無料で何度でも湯浴みを楽しめるシステムとなっています。日本海を一望する圧倒的な開放感が魅力です。
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
              <span className="text-amber-600 font-extrabold">Q.</span>
              <span>間人ガニ以外の食材も楽しめますか？</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed pl-6">
              はい。丹後エリアは京都の食の宝庫であり、冬に脂が乗る「寒ブリ」のお造りやしゃぶしゃぶ、幻のブランド牛「丹後牛」、地元の有機冬野菜や丹後コシヒカリなど、海山の極上食材が会席を彩ります。
            </p>
          </div>

            </div>
          </section>

          <section className="bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 text-white p-8 rounded-2xl shadow-xl text-center space-y-4">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white font-bold text-xs px-3 py-1 rounded-full">
              賢く泊まる節税旅
            </span>
            <h2 className="text-2xl md:text-3xl font-black">
              楽天ふるさと納税で憧れの最高級宿に泊まる
            </h2>
            <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              寄附金額の最大30%相当が宿泊クーポンとして即時還元！3年間有効なので、初冬の記念日や憧れのラグジュアリーステイの予約に最適です。
            </p>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-rose-700 hover:bg-slate-100 font-extrabold text-base md:text-lg px-8 py-3.5 rounded-full shadow-lg transition duration-200"
              >
                楽天ふるさと納税 トラベルクーポンを探す →
              </a>
            </div>
          </section>

          <section className="space-y-4 pt-6">
            <h2 className="text-xl font-bold text-slate-900 border-l-4 border-amber-500 pl-3">
              あわせて読みたい初冬の極上宿特集
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
          <li className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex items-center justify-between">
            <a href="https://travel.navitime.jp.net/winter-mie-ago-bay-luxury-basara-shimanokaze-matsusaka-stay" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              三重・志摩英虞湾の最高級露天離れと伊勢海老・松阪牛名宿
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
            <a href="https://travel.navitime.jp.net/winter-kagoshima-kirishima-myoken-luxury-gajin-ishiharaso-kurobuta-stay" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              鹿児島・霧島妙見温泉の自噴炭酸泉離れと鹿児島黒牛・黒豚名宿
            </a>
            <span className="text-amber-500 text-sm font-bold ml-2">→</span>
          </li>

            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
