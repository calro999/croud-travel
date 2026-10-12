import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `【英虞湾の夕景リアス美と全室離れ露天風呂スイート】2026-2027年11-12月の三重・志摩賢島！「汀渚 ばさら邸」＆ベイスイート・冬の伊勢志摩天然伊勢海老・極上松阪牛名宿5選`,
  description: `リアス海岸の穏やかな英虞湾を眼下に望む三重県・志摩賢島。サミット開催舞台の「志摩観光ホテル ザ ベイスイート」や、広大な敷地にわずかな客室と海を望む貸切露天風呂が点在する「汀渚 ばさら邸」など、国内屈指の高級リゾート。冬に旬を迎える伊勢海老や鮑、とろけるA5松阪牛を味わう大人の記念日ステイ厳選5選。`,
  openGraph: {
    title: `【英虞湾の夕景リアス美と全室離れ露天風呂スイート】2026-2027年11-12月の三重・志摩賢島！「汀渚 ばさら邸」＆ベイスイート・冬の伊勢志摩天然伊勢海老・極上松阪牛名宿5選`,
    description: `リアス海岸の穏やかな英虞湾を眼下に望む三重県・志摩賢島。サミット開催舞台の「志摩観光ホテル ザ ベイスイート」や、広大な敷地にわずかな客室と海を望む貸切露天風呂が点在する「汀渚 ばさら邸」など、国内屈指の高級リゾート。冬に旬を迎える伊勢海老や鮑、とろけるA5松阪牛を味わう大人の記念日ステイ厳選5選。`,
    url: `https://travel.navitime.jp.net/winter-mie-ago-bay-luxury-basara-shimanokaze-matsusaka-stay`,
    siteName: 'トラベルNAVI',
    locale: 'ja_JP',
    type: 'article',
  },
  alternates: {
    canonical: `https://travel.navitime.jp.net/winter-mie-ago-bay-luxury-basara-shimanokaze-matsusaka-stay`,
  },
};

export default function LuxuryStayPage() {
  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "志摩観光ホテル「ザ クラシック」と「ザ ベイスイート」の違いは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "『ザ クラシック』は昭和26年開業の伝統を受け継ぐ本館で、木の温もりとクラシックホテルの格式高い雰囲気が魅力です。一方『ザ ベイスイート』は2008年にオープンした全室100平米超のオールスイートルーム棟で、全室に展望風呂が備わり、屋上展望庭園やゲストラウンジなど大人のためのモダンラグジュアリーを極めた造りとなっています。"
      }
    },
    {
      "@type": "Question",
      "name": "「汀渚 ばさら邸」の貸切露天風呂は予約が必要ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ばさら邸には敷地内に趣の異なる3つの広大な貸切露天風呂（天の鏡、くぽくぽの湯、月の家）があり、チェックイン時のご予約にて無料で利用可能です（客室タイプにより優先枠あり）。いずれも英虞湾の自然に抱かれた圧倒的な開放感を味わえます。"
      }
    },
    {
      "@type": "Question",
      "name": "11月・12月の夕日を見るおすすめの時間は何時頃ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "11月中旬は16:45〜17:00頃、12月は16:40〜16:50頃が日の入り時刻となります。日没の約30分前から始まる、海と空が刻一刻と茜色から紫紺へと移ろうトワイライトタイム（マジックアワー）に合わせて客室テラスや展望ラウンジ、露天風呂にスタンバイするのが最もおすすめです。"
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
      "name": "三重県",
      "item": "https://travel.navitime.jp.net/prefectures/mie"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "【英虞湾の夕景リアス美と全室離れ露天風呂スイート】2026-2027年11-12月の三重・志摩賢島！「汀渚 ばさら邸」＆ベイスイート・冬の伊勢志摩天然伊勢海老・極上松阪牛名宿5選",
      "item": "https://travel.navitime.jp.net/winter-mie-ago-bay-luxury-basara-shimanokaze-matsusaka-stay"
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
            <Link href="/prefectures/mie" className="hover:text-amber-600 transition">三重県</Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold truncate">志摩・賢島・英虞湾 最高級宿特集</span>
          </div>
        </div>

        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white py-16 md:py-24 px-4 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs md:text-sm font-bold px-4 py-1.5 rounded-full mb-6">
              2026-2027年 11-12月 初冬特選 高CPA最高級宿コレクション
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight md:leading-snug mb-6 text-slate-50">
              【英虞湾の夕景リアス美と全室離れ露天風呂スイート】2026-2027年11-12月の三重・志摩賢島！「汀渚 ばさら邸」＆ベイスイート・冬の伊勢志摩天然伊勢海老・極上松阪牛名宿5選
            </h1>
            <p className="text-sm md:text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
              リアス海岸の穏やかな英虞湾を眼下に望む三重県・志摩賢島。サミット開催舞台の「志摩観光ホテル ザ ベイスイート」や、広大な敷地にわずかな客室と海を望む貸切露天風呂が点在する「汀渚 ばさら邸」など、国内屈指の高級リゾート。冬に旬を迎える伊勢海老や鮑、とろけるA5松阪牛を味わう大人の記念日ステイ厳選5選。
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 mt-12 space-y-16">
          <section className="bg-white p-6 md:p-10 rounded-2xl border border-slate-200/80 shadow-md">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 border-l-4 border-amber-500 pl-4">
              初冬の静寂が織りなす最高峰の贅沢リトリート
            </h2>
            <p className="text-slate-700 leading-relaxed md:leading-loose text-base md:text-lg">
              伊勢志摩国立公園の南端、真珠養殖の発祥地として世界に知られる『英虞湾（あごわん）』。大小60余りの島々と複雑に入り組んだ入江が幾重にも重なり合うリアス海岸は、日本屈指の風光明媚な景観を誇ります。11月から12月にかけての初冬は、夏の喧騒が完全に引き、凛と澄み渡る大気の中で穏やかな水面が茜色から黄金色へと美しく染まりゆく『年間で最も夕景が美しい季節』を迎えます。また、秋に解禁された伊勢志摩名物の天然伊勢海老や鮑、そして三重が誇る世界最高峰の肉牛『A5ランク松阪牛』が最も旨味を増す美食のハイシーズンでもあります。この静謐な英虞湾の自然に溶け込むように佇むのが、約4,000坪の広大な敷地にわずか数室の離れ露天風呂付き客室と絶景の貸切露天が点在する『汀渚 ばさら邸』。さらには伊勢志摩サミットで各国の首脳を迎え入れた名門クラシックリゾート『志摩観光ホテル ザ ベイスイート』など、日本のホスピタリティの粋を集めたラグジュアリーホテルが揃います。初冬の凛とした澄み切った風を感じながら、客室のテラスや露天風呂から沈みゆく夕日と星空を眺め、極上の伊勢海老と松阪牛の饗宴に舌鼓を打つ――それは大人の記念日や人生の節目を祝福するのにふさわしい、至高のプライベートリトリートです。
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
            <h3 className="text-lg font-bold text-slate-900 mb-2">英虞湾の夕景リアス美を一望！全室スイート＆客室露天風呂付きの極上プライベート空間</h3>
            <p className="text-sm text-slate-600 leading-relaxed">穏やかな英虞湾の入江を見下ろす特等席。広大な敷地にわずかな客室のみを配した『ばさら邸』や全室スイートの『志摩観光ホテル ザ ベイスイート』など、都会の喧騒と完全に隔絶された非日常を堪能できます。</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-4 text-lg">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">初冬に旨味の頂点を迎える天然伊勢海老・鮑と最高峰A5松阪牛の美食の饗宴</h3>
            <p className="text-sm text-slate-600 leading-relaxed">解禁されたばかりの活伊勢海老のお造りや炭火焼き、濃厚なビスク、芳醇な香りと甘みがとろける最高級松阪牛ステーキ。伊勢志摩の豊かな海と大地の恵みをフレンチや本格会席で存分に味わい尽くせます。</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-4 text-lg">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">伊勢神宮参拝との完璧な組み合わせ！大人の記念日・ご褒美を彩る世界基準のホスピタリティ</h3>
            <p className="text-sm text-slate-600 leading-relaxed">お伊勢参りで心身を清めたあと、近鉄特急しまかぜで賢島へ。真珠のように輝く絶景露天風呂で温まり、大切な人と生涯記憶に残るラグジュアリーな一夜を過ごせます。</p>
          </div>

            </div>
          </section>

          <section className="bg-gradient-to-br from-amber-50 to-orange-50/50 p-6 md:p-8 rounded-2xl border border-amber-200/60 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2 aspect-video relative rounded-xl overflow-hidden shadow-md">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Yokoyama_Viewpoint_001.jpg/1280px-Yokoyama_Viewpoint_001.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="横山展望台"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-3">
                <span className="inline-block bg-amber-600 text-white font-bold text-xs px-3 py-1 rounded-full">
                  宿と合わせて巡る周辺名所
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
                  英虞湾のパノラマを一望する天空テラス・横山展望台（リアス海岸の島々と真珠筏の美）
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  横山展望台（よこやまてんぼうだい）は志摩半島南部の三重県志摩市阿児町鵜方にある標高203 mの横山に設置されている展望台。横山の名は、沖合からこの山を眺めると横長に見えるからとされる。
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
                汀渚　ばさら邸
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                英虞湾の静寂に抱かれる4000坪の隠れ里！全室露天風呂付きの大人の極上離れ
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/108260/108260.jpg"
                    alt="汀渚　ばさら邸"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">三重県志摩市阿児町鵜方3618-74</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥51,700〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.62 （306件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">英虞湾を見渡す高台でゆらり気まま旅。旅のわがまま叶えてくれる、特別な一日。それが「汀渚　ばさら邸」。</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>敷地面積約4,000坪の広大な森と海に抱かれ、わずか全室離れスタイルの露天風呂付き客室が点在するプライベートリゾートです。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>英虞湾を見下ろす3つの絶景貸切露天風呂は圧巻のスケール。夜には満天の星が降り注ぎ、波の音と木々のさざめきだけが響き渡ります。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>夕食は志摩の海で獲れた天然伊勢海老や鮑、A5松阪牛を贅沢に盛り込んだ新和食懐石。専用個室ダイニングで心ゆくまで美食に浸れます。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「三度目の利用、お風呂も食事も最高レベル三回目の宿泊です。villaについているお風呂が最高でした。お食事もおもてなしも最高レベルです。」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108260%2F108260.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  汀渚　ばさら邸 の宿泊プラン・空室を楽天トラベルで確認
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
                志摩観光ホテル　ザ　ベイスイート
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                伊勢志摩サミットの舞台！全室100平米超のオールスイートと海のフレンチ
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/105964/105964.jpg"
                    alt="志摩観光ホテル　ザ　ベイスイート"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">三重県志摩市阿児町神明731</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥35,068〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.87 （298件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">伊勢志摩サミット開催ホテル。すべてのお部屋がスイートルーム。</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>2016年伊勢志摩サミットで各国首脳が集った歴史の舞台。全客室が100平米以上の優美なスイートルームで構成されています。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>客室のテラスや展望バスからは、英虞湾の穏やかな入江と真珠筏が織りなすパノラマを一望。夕暮れ時のグラデーションは息を呑む美しさです。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>ミシュラン掲載のレストラン「ラ・メール」で供される伝統の海の幸フランス料理。伊勢海老のクリームスープや鮑ステーキは至高の逸品です。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「スタッフの細やかな配慮と優雅なひとときスタッフの方の気持ちの良い接客が素晴らしかったです。ベイスィートの宿泊でしたが、12時のチェックアウト後も電車の時間までホテル内やエスパーニャクルーズの乗…　2026-09-17 08:31:02投稿 つづきはこちら」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F105964%2F105964.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  志摩観光ホテル　ザ　ベイスイート の宿泊プラン・空室を楽天トラベルで確認
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
                志摩観光ホテル　ザ　クラシック
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                昭和の文豪や皇室が愛した名門クラシック！格式あるおもてなしと英虞湾の絶景
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/1150/1150.jpg"
                    alt="志摩観光ホテル　ザ　クラシック"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">三重県志摩市阿児町神明731</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥16,005〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.73 （957件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">伊勢志摩サミット開催ホテル。落ち着いた空間で時を過ごせるリゾートホテル。</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>昭和26年創業、山崎豊子の小説『華麗なる一族』の舞台としても名高い日本を代表する名門リゾートホテルです。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>木の温もりあふれる客室やサミット円卓が展示された庭園、ライブラリーラウンジなど、知性と気品に満ちた大人の空間が広がります。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>伝統のフレンチコースと上質なワインのペアリング。窓外に広がる英虞湾のリアス美を眺めながら、時代を超えて愛される極上の味覚を堪能できます。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「食事も館内ツアーも最高、ゆったり流れる時間ディナーも朝食も完璧でした。いつもながらに「時間がゆったりと流れる」リゾートを味わいました。朝9時からの館内ツアーもとても楽しかったです。クチコミの詳…　2026-09-30 00:28:36投稿 つづきはこちら」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1150%2F1150.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  志摩観光ホテル　ザ　クラシック の宿泊プラン・空室を楽天トラベルで確認
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
                賢島宝生苑
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                庭園露天風呂から英虞湾を一望！天然温泉「伊勢志摩温泉」と伊勢海老三昧の湯宿
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/15716/15716.jpg"
                    alt="賢島宝生苑"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">三重県志摩市阿児町神明718-3</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥14,500〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.48 （2616件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">海を一望する絶景の天然温泉が好評＆全室オーシャンビュー！志摩スペイン村へはお車で約１５分</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>賢島の高台に位置し、英虞湾に面した雄大な庭園露天風呂「朝なぎの湯・夕なぎの湯」が自慢の大型高級温泉旅館です。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>良質な療養泉「伊勢志摩温泉・朝なぎの湯」の滑らかな湯ざわり。海を渡る爽やかな風を感じながらの朝夕の露天風呂浴は格別です。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>夕食には伊勢志摩の活伊勢海老のお造り、焼き伊勢海老、鮑の陶板焼きなど豪華絢爛な会席料理。上質な和室スイートで寛げます。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「窓から見える絶景が絵画のように美しい部屋の窓から見える絶景が額に入った絵画のように美しかった。」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15716%2F15716.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  賢島宝生苑 の宿泊プラン・空室を楽天トラベルで確認
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
                都リゾート　志摩　ベイサイドテラス
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                英虞湾を望む白亜の南欧リゾート！全室バルコニー付き＆本格フレンチ・和食会席
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/27737/27737.jpg"
                    alt="都リゾート　志摩　ベイサイドテラス"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">三重県志摩市阿児町鵜方3618-33</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥10,250〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.55 （1698件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">英虞湾を望む白亜の南欧風リゾートホテル。全室オーシャンビュー＆テラス付きの贅沢空間。</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>白壁とテラコッタ瓦が美しい南欧アンダルシア地方を思わせる優雅な佇まい。全室にオーシャンビューテラスを備えています。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>地中海リゾートの開放感と伊勢志摩の豊かな自然が融合。英虞湾の入り江を見下ろすプールサイドやスパで上質なリラクゼーションが叶います。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>三重の地元食材をふんだんに取り入れたフレンチまたは和会席のディナー。愛犬と泊まれるヴィラルームも備えた多彩なプレミアムステイです。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「南欧リゾートの優雅な佇まいと英虞湾の絶景、伊勢志摩の美食フレンチ＆和食が極上の滞在を演出。」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/4bf14a1a.2085cf55.4bf14a1b.469cb8e9/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27737%2F27737.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  都リゾート　志摩　ベイサイドテラス の宿泊プラン・空室を楽天トラベルで確認
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
・電車・特急から：近鉄名古屋駅より近鉄特急「しまかぜ」で賢島駅まで直通約2時間、大阪難波駅・京都駅からも特急「しまかぜ」で賢島駅まで直通約2時間10分〜2時間45分。賢島駅より各ホテルの専用送迎車（無料・要予約）にて約3〜10分。
・車：伊勢自動車道「伊勢西IC」より伊勢道路（県道32号）経由、または第二伊勢道路「白木IC」より国道167号線を経由して約40分。
・飛行機：中部国際空港（セントレア）より名鉄ミュースカイで名古屋駅へ出て近鉄特急へ乗り換え、または津なぎさまちへ高速船（約45分）で渡り津駅より近鉄特急利用。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月中旬〜12月（台風シーズンが終わり晴天率が非常に高く、空気が澄んで英虞湾の夕景や星空が最も美しく輝く狙い目時期。伊勢海老漁も本格化）。
・気温の目安：太平洋側の温暖な気候ですが、11月は日中14〜18℃、朝晩は8〜11℃。12月は日中10〜14℃、朝晩は3〜7℃まで下がります。海風が冷たいため体感温度は低くなります。
・服装のポイント：上質なウールコートやダウンジャケット、防風性のあるストールやマフラーをご用意ください。ディナー会場（フレンチ等）ではスマートカジュアルが推奨されます。
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
              <span>志摩観光ホテル「ザ クラシック」と「ザ ベイスイート」の違いは何ですか？</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed pl-6">
              『ザ クラシック』は昭和26年開業の伝統を受け継ぐ本館で、木の温もりとクラシックホテルの格式高い雰囲気が魅力です。一方『ザ ベイスイート』は2008年にオープンした全室100平米超のオールスイートルーム棟で、全室に展望風呂が備わり、屋上展望庭園やゲストラウンジなど大人のためのモダンラグジュアリーを極めた造りとなっています。
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
              <span className="text-amber-600 font-extrabold">Q.</span>
              <span>「汀渚 ばさら邸」の貸切露天風呂は予約が必要ですか？</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed pl-6">
              ばさら邸には敷地内に趣の異なる3つの広大な貸切露天風呂（天の鏡、くぽくぽの湯、月の家）があり、チェックイン時のご予約にて無料で利用可能です（客室タイプにより優先枠あり）。いずれも英虞湾の自然に抱かれた圧倒的な開放感を味わえます。
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
              <span className="text-amber-600 font-extrabold">Q.</span>
              <span>11月・12月の夕日を見るおすすめの時間は何時頃ですか？</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed pl-6">
              11月中旬は16:45〜17:00頃、12月は16:40〜16:50頃が日の入り時刻となります。日没の約30分前から始まる、海と空が刻一刻と茜色から紫紺へと移ろうトワイライトタイム（マジックアワー）に合わせて客室テラスや展望ラウンジ、露天風呂にスタンバイするのが最もおすすめです。
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
