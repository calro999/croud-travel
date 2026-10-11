import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `【世界屈指のパウダースノーと羊蹄山ビュー雪見スイート】2026-2027年12-1月冬の北海道・ニセコ！「雪ニセコ」＆「パーク ハイアット ニセコ HANAZONO」・北海道冬の極上食材名宿5選`,
  description: `世界中のスキーヤーや富裕層が絶賛する「奇跡の粉雪（JAPOW）」が降り積もる冬の北海道ニセコ。雪化粧の蝦夷富士・羊蹄山を真正面に望む「雪ニセコ（Setsu Niseko）」や、世界的ラグジュアリーホテル「パーク ハイアット ニセコ HANAZONO」、源泉掛け流し客室温泉を備えたモダンリゾート。北海道産黒毛和牛や蝦夷鹿、噴火湾のタラバガニ・雲丹に舌鼓を打つ最高峰ウィンターステイ厳選5選。`,
  openGraph: {
    title: `【世界屈指のパウダースノーと羊蹄山ビュー雪見スイート】2026-2027年12-1月冬の北海道・ニセコ！「雪ニセコ」＆「パーク ハイアット ニセコ HANAZONO」・北海道冬の極上食材名宿5選`,
    description: `世界中のスキーヤーや富裕層が絶賛する「奇跡の粉雪（JAPOW）」が降り積もる冬の北海道ニセコ。雪化粧の蝦夷富士・羊蹄山を真正面に望む「雪ニセコ（Setsu Niseko）」や、世界的ラグジュアリーホテル「パーク ハイアット ニセコ HANAZONO」、源泉掛け流し客室温泉を備えたモダンリゾート。北海道産黒毛和牛や蝦夷鹿、噴火湾のタラバガニ・雲丹に舌鼓を打つ最高峰ウィンターステイ厳選5選。`,
    url: `https://travel.navitime.jp.net/winter-hokkaido-niseko-luxury-resort-parkhyatt-setsuniseko-yotei-stay`,
    siteName: 'トラベルNAVI',
    locale: 'ja_JP',
    type: 'article',
  },
  alternates: {
    canonical: `https://travel.navitime.jp.net/winter-hokkaido-niseko-luxury-resort-parkhyatt-setsuniseko-yotei-stay`,
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
      "name": "ニセコが世界中から絶賛されるパウダースノーの理由は何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "シベリアからの極めて乾燥した寒気が日本海を渡る際に水蒸気を取り込み、標高1,000mを超えるニセコアンヌプリ連峰にぶつかって上昇気流を起こすためです。水分含有率がわずか8％前後という驚異的に軽くシルキーな粉雪が毎晩のように降り積もり、浮遊感あふれる滑走体験が叶います。"
      }
    },
    {
      "@type": "Question",
      "name": "スキーやスノーボードをしない人でもニセコ滞在を楽しめますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "もちろん大満足できます。各ラグジュアリーホテルには源泉掛け流しの大浴場や露天風呂、極上のウェルネススパ、羊蹄山を眺めるラウンジが完備されています。また、スノーシューによる雪の森散策や、世界レベルのレストランでの美食ディナー、冬の北海道ワインのテイスティングなど、リゾートステイそのものを心ゆくまで満喫できます。"
      }
    },
    {
      "@type": "Question",
      "name": "新千歳空港からのアクセスで一番おすすめの交通手段は何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "冬期は天候や路面凍結の影響を受けにくく、重い荷物やスキー用具を運ぶ手間が省ける「直行リゾートバス（ホワイトライナー等）」の利用が最もおすすめです。各ホテルのエントランスまたはヒラフウェルカムセンターまで乗り換えなしでアクセスできます。"
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
      "name": "北海道",
      "item": "https://travel.navitime.jp.net/prefecture/hokkaido"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "【世界屈指のパウダースノーと羊蹄山ビュー雪見スイート】2026-2027年12-1月冬の北海道・ニセコ！「雪ニセコ」＆「パーク ハイアット ニセコ HANAZONO」・北海道冬の極上食材名宿5選",
      "item": "https://travel.navitime.jp.net/winter-hokkaido-niseko-luxury-resort-parkhyatt-setsuniseko-yotei-stay"
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
            <Link href="/prefecture/hokkaido" className="hover:text-amber-600">北海道</Link>
            <span>&gt;</span>
            <span className="text-slate-800 font-medium truncate">【世界屈指のパウダースノーと羊蹄山ビュー雪見スイート】2026-2027年12-1月冬の北海道・ニセコ！「雪ニセコ」＆「パーク ハイアット ニセコ HANAZONO」・北海道冬の極上食材名宿5選</span>
          </div>
        </nav>

        {/* ヘッダー */}
        <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-block bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              2026-2027年冬 厳選特集
            </div>
            <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-tight md:leading-snug">
              【世界屈指のパウダースノーと羊蹄山ビュー雪見スイート】2026-2027年12-1月冬の北海道・ニセコ！「雪ニセコ」＆「パーク ハイアット ニセコ HANAZONO」・北海道冬の極上食材名宿5選
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-left md:text-center pt-2">
              世界中のスキーヤーや富裕層が「JAPOW（奇跡の粉雪）」を求めて熱狂する冬の北海道ニセコ。眼前に聳え立つ白銀の蝦夷富士・羊蹄山の神々しいパノラマと、極上のパウダースノーが広がるゲレンデ。国際的ラグジュアリーホテルや源泉掛け流しの高級和風別荘で過ごし、北海道産黒毛和牛や蝦夷鹿、噴火湾のタラバガニ・雲丹に舌鼓を打つ、世界最高峰のウィンターリゾートステイをご提案します。
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 mt-10 space-y-12">
          {/* 導入部 */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 leading-relaxed text-slate-700">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 border-b border-amber-200 pb-3 mb-4">
              冬のニセコ・倶知安・羊蹄山で過ごす至福のひととき
            </h2>
            <p className="text-base leading-loose">
              北海道西部に位置し、雄大な名峰『羊蹄山（蝦夷富士）』を望む日本屈指の国際的スノーリゾート『ニセコ（倶知安町・ニセコ町）』。シベリア大陸からの凍てつく寒気が日本海の湿気を吸い上げ、ニセコ連峰にぶつかることで生み出される雪は、水分含有率がわずか8％前後という世界最高峰の超極上ドライパウダースノー『JAPOW（ジャパウ）』として世界中のスキーヤー・スノーボーダーから憧れの的となっています。12月から1月にかけてのハイシーズンには、ゲレンデだけでなく街全体が白銀の世界に包まれ、夜には幻想的なイルミネーションと洗練された国際色豊かなナイトライフが広がります。近年ニセコには、世界的な五つ星ホテルブランドや世界的建築家が手掛けたモダンラグジュアリーリゾートが続々と誕生。全室スイート仕様の広大な客室とプライベート天然温泉、ウェルネススパを備えた『雪ニセコ（Setsu Niseko）』をはじめ、花園ゲレンデ直結のスキーイン・スキーアウトを誇る最高峰『パーク ハイアット ニセコ HANAZONO』、そして閑静な原生林に抱かれ和の贅を極めた『ニセコ昆布温泉 鶴雅別荘 杢の抄』など、世界水準のホスピタリティを提供する宿が揃います。ディナーには、北海道産黒毛和牛（白老牛）のステーキやジビエの蝦夷鹿、噴火湾や日本海から直送されるタラバガニ、雲丹、ホタテを贅沢に使ったフレンチや本格和食会席。パウダースノーで遊んだ後は、雪景色を望む自家源泉の露天風呂に浸かり、北海道の大地の恵みを五感で味わう――それは一生の記憶に残る、世界最高峰のウィンターリトリートです。
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
            <h3 className="text-lg font-bold text-slate-900 mb-2">世界屈指の超ドライパウダースノー「JAPOW」と羊蹄山の圧倒的パノラマ絶景</h3>
            <p className="text-sm text-slate-600 leading-relaxed">水分をほとんど含まない軽やかな粉雪に包まれる感動体験。白銀に輝く神々しい名峰・羊蹄山を真正面に望むパノラマビューは息を呑む迫力です。</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-4 text-lg">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">世界の五つ星基準！全室スイート仕様と源泉掛け流しプライベート温泉の贅沢</h3>
            <p className="text-sm text-slate-600 leading-relaxed">パークハイアットや雪ニセコなど世界最高峰のラグジュアリーホテルが集結。広々としたリビングやキッチン、雪見露天風呂を備えた極上のプライベート空間が広がります。</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-4 text-lg">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">北海道の冬の味覚の頂点！白老牛・噴火湾タラバガニ・蝦夷鹿・極上フレンチ＆和食</h3>
            <p className="text-sm text-slate-600 leading-relaxed">ミシュラン星付きシェフが腕を振るうフレンチや創作和食。白老牛ステーキや新鮮なカニ、雲丹など、北海道屈指のプレミアム食材を最高のペアリングで堪能できます。</p>
          </div>

            </div>
          </section>

          {/* 周辺観光スポット情報（Wikipedia連携実写） */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 border-b border-amber-200 pb-3">
              周辺観光スポット：冬の青空に聳え立つ白銀の蝦夷富士・羊蹄山（世界が羨望するJAPOWとニセコのパノラマ絶景）
            </h2>
            
            <div className="relative rounded-xl overflow-hidden aspect-video shadow-md bg-slate-100">
              <img
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Yotei-zan-from-hirafu.jpg/1280px-Yotei-zan-from-hirafu.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="羊蹄山"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
              <p>北海道後志地方南部に位置する標高1,898mの成層火山で、日本百名山の一つ。富士山に酷似した端正な円錐形の山容から『蝦夷富士（えぞふじ）』と称えられ、ニセコエリアのあらゆる場所からその神々しい姿を望むことができます。冬のニセコはシベリアからの寒気と日本海の湿気がぶつかり合い、水分含有率わずか8％前後という世界最高峰の超極上ドライパウダースノー『JAPOW（ジャパウ）』が降り積もる国際的スノーリゾート。白銀に輝く羊蹄山を眺めながら入る雪見露天風呂や、北海道産黒毛和牛、新鮮な海の幸を味わう極上の冬リゾートステイが世界中の富裕層を魅了しています。</p>
              <p className="bg-amber-50/60 p-4 rounded-xl border border-amber-100 text-amber-900 font-medium">
                蝦夷富士・羊蹄山の神々しい白銀の山容を眺め、世界最高峰のシルキーパウダースノーを満喫したあとは、洗練されたラグジュアリーリゾートへ。客室専用温泉や雪見露天風呂に身を沈めて冷えた身体を芯から解きほぐし、北海道の厳選素材を極めたディナーと銘酒に酔いしれる至福の時間が流れます。
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
                雪ニセコ
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                グラン・ヒラフを望むウェルネスリゾート！全室キッチン＆天然温泉大浴場・スパ
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/183609/183609.jpg"
                    alt="雪ニセコ"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">北海道虻田郡倶知安町ニセコひらふ1条2丁目6番9号</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥10,665〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.67 （55件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">四季を通じて楽しめる1ミシュランキーホテル。全室キッチン・洗濯機付。</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>2022年オープンの最新ラグジュアリーホテル。全室にフルキッチンと最新設備を備え、羊蹄山またはアンヌプリの絶景を望みます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>ニセコの豊かな天然温泉を引き入れた大浴場、露天風呂、貸切温泉サウナを完備。最高峰のウェルネススパで疲れた身体を癒やせます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>館内にはミシュラン星付きレストランを含む多彩なダイニングが集結。北海道の旬の食材を使った美食の饗宴を愉しめます。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「羊蹄山の絶景と美味しい食事に大満足!誕生日旅行で宿泊しました。羊蹄山が見えるお部屋を選びましたが、景色がとても素敵で大正解でした!晩ごはんも美味しく、トレジャーハントも楽しかったです。温泉」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183609%2F183609.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  雪ニセコ の宿泊プラン・空室を楽天トラベルで確認
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
                パークハイアットニセコＨＡＮＡＺＯＮＯ
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                スキーイン・スキーアウトの最高峰ラグジュアリー！羊蹄山ビューとミシュラン星付きダイニング
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/188207/188207.jpg"
                    alt="パークハイアットニセコＨＡＮＡＺＯＮＯ"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">北海道虻田郡倶知安町字岩尾別328-47</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥48,000〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.75 （58件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">【2024年10月販売開始予定】最高峰のラグジュアリーマウンテンリゾート</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>HANAZONOゲレンデに直結し、スキーを履いたまま出入りできる世界最高峰のラグジュアリーホテルです。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>広々とした客室には床から天井までの大窓が配され、白銀の羊蹄山や白樺の森をパノラマで一望できます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>ピエール・エルメ監修のラウンジやミシュラン三つ星シェフのフレンチなど多彩な食の体験。25mインドア温水プールや温泉大浴場も完備。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「落ち着いた心地よい空間の中、温かい温泉とおいしいお料理で日頃の疲れを癒やすことができました。」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188207%2F188207.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  パークハイアットニセコＨＡＮＡＺＯＮＯ の宿泊プラン・空室を楽天トラベルで確認
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
                ニセコ昆布温泉鶴雅別荘　杢の抄
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                閑静な森と渓流に佇む大人の和風隠れ宿！自家源泉掛け流しと北海道旬彩和食会席
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/142863/142863.jpg"
                    alt="ニセコ昆布温泉鶴雅別荘　杢の抄"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">北海道虻田郡ニセコ町ニセコ393</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥22,687〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.5 （151件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">鶴雅グループ10番目の宿がニセコに誕生！静かな森の中に佇む風情ある温泉旅館です。</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>ニセコ昆布温泉の静かな森と渓流沿いに建つ、鶴雅グループ最高峰の大人のための和風温泉リゾートです。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>暖炉の火が揺らめくラウンジや木の温もりあふれる客室。自家源泉の滑らかな美肌湯を露天風呂や客室温泉で満喫できます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>夕食は北海道各地から集めた極上の海の幸・山の幸を一皿ごとに美しく仕立てた創作和食会席。静寂の中で贅沢な時間を過ごせます。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「渓流の音と個室での食事に癒やされる贅沢な時間渓流の音を聞きながら 何もしない贅沢をあじわえるお宿です 食事は朝も夜も個室て北海道の美味しいものをたくさん食べさせていただきました またお邪魔します」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142863%2F142863.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  ニセコ昆布温泉鶴雅別荘　杢の抄 の宿泊プラン・空室を楽天トラベルで確認
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
                木ニセコ
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                ヒラフゴンドラ直結のブティックホテル！天然温泉と地元食材フレンチ
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/147788/147788.jpg"
                    alt="木ニセコ"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">北海道虻田郡倶知安町ニセコひらふ1条3丁目8-5</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥7,600〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.64 （373件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">洗練されたモダンテイストと木の温もりが交わる、お洒落なコンドミニアムホテル。無料貸切温泉あり。</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>グラン・ヒラフ高速ゴンドラまで徒歩わずか1分の好立地。スキーイン・スキーアウトが可能な洗練されたブティックホテルです。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>自家源泉の天然温泉大浴場や露天風呂、サウナ、家族風呂を完備。滑り終えた直後に温かい名湯に浸かる贅沢が味わえます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>メインダイニング「アンダイニング」では、北海道の厳選素材を独創的に昇華させたモダンフレンチと豊富なワインを楽しめます。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「食事が良かったです。朝食、夕食共に良かったです。夕食はコースでしたが、丁寧に作られてる感じがしてどれも美味しかったです。温泉も泉質は良かったと思います。」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147788%2F147788.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  木ニセコ の宿泊プラン・空室を楽天トラベルで確認
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
                綾ニセコ
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                グラン・ヒラフの麓に建つ洗練のコンドミニアム！天然温泉大浴場と羊蹄山パノラマ
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/151479/151479.jpg"
                    alt="綾ニセコ"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">北海道虻田郡倶知安町ニセコひらふ1条4丁目4番5号</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥8,450〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.73 （55件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">名峰羊蹄山を望む世界的スキーリゾート・グランヒラフの麓に佇む、高級感溢れるコンドミニアム型ホテルです</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>グラン・ヒラフファミリーコースの麓に位置し、スキーリフト直結の優れた利便性を誇るラグジュアリーコンドミニアムです。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>大きな窓から羊蹄山またはスキー場を一望する広々とした客室。天然温泉大浴場や露天風呂、貸切温泉風呂も充実しています。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>館内にはスキーバレーサービス、ジム、スパ、クラフトレストランを完備し、長期滞在でも快適なリゾートライフを提供します。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「落ち着いた心地よい空間の中、温かい温泉とおいしいお料理で日頃の疲れを癒やすことができました。」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F151479%2F151479.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  綾ニセコ の宿泊プラン・空室を楽天トラベルで確認
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
・飛行機・空港から：新千歳空港より「ホワイトライナー」や「北海道リゾートライナー」などの直行リゾートスキーバスでニセコ各ホテル・ヒラフまで直通約2時間30分〜3時間。またはJR快速エアポートで小樽駅へ出て函館本線に乗り換え「倶知安駅」まで約2時間。
・車・レンタカー：新千歳空港より国道276号線（美笛峠経由）または道央自動車道経由で約2時間〜2時間30分。冬期は完全な圧雪・アイスバーンとなるため4WDスタッドレス車が必須。
・ホテル送迎：倶知安駅またはニセコ駅より各ラグジュアリーホテルによる専用シャトルバス（無料・要予約）が運行。

【見頃・気候・おすすめの服装】
・ベストシーズン：12月上旬〜1月（雪質が最も極上となるパウダースノーのハイシーズン。羊蹄山の白銀の雪景色と本格的なスノーアクティビティが楽しめます）。
・気温の目安：北海道有数の豪雪高冷地で、12月・1月は日中でも-2〜-6℃、朝晩は-10〜-15℃以下まで冷え込みます。
・服装のポイント：高性能の防寒ダウンジャケット、裏起毛インナー、防寒手袋、ニット帽、ネックウォーマーが必須です。雪道や氷上を歩くため、防水・防滑仕様の本格スノーブーツを着用してください。
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
              <span>ニセコが世界中から絶賛されるパウダースノーの理由は何ですか？</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed pl-6">
              シベリアからの極めて乾燥した寒気が日本海を渡る際に水蒸気を取り込み、標高1,000mを超えるニセコアンヌプリ連峰にぶつかって上昇気流を起こすためです。水分含有率がわずか8％前後という驚異的に軽くシルキーな粉雪が毎晩のように降り積もり、浮遊感あふれる滑走体験が叶います。
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
              <span className="text-amber-600 font-extrabold">Q.</span>
              <span>スキーやスノーボードをしない人でもニセコ滞在を楽しめますか？</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed pl-6">
              もちろん大満足できます。各ラグジュアリーホテルには源泉掛け流しの大浴場や露天風呂、極上のウェルネススパ、羊蹄山を眺めるラウンジが完備されています。また、スノーシューによる雪の森散策や、世界レベルのレストランでの美食ディナー、冬の北海道ワインのテイスティングなど、リゾートステイそのものを心ゆくまで満喫できます。
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
              <span className="text-amber-600 font-extrabold">Q.</span>
              <span>新千歳空港からのアクセスで一番おすすめの交通手段は何ですか？</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed pl-6">
              冬期は天候や路面凍結の影響を受けにくく、重い荷物やスキー用具を運ぶ手間が省ける「直行リゾートバス（ホワイトライナー等）」の利用が最もおすすめです。各ホテルのエントランスまたはヒラフウェルカムセンターまで乗り換えなしでアクセスできます。
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
              北海道倶知安町やニセコ町への楽天ふるさと納税では、雪ニセコやパークハイアット、木ニセコなど世界的リゾートで使える宿泊クーポンが最大30%還元されます。世界最高峰のスノーステイをお得に楽しむ賢い活用法です。
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
            <p>※ニセコエリアの冬季宿泊料金やリフト券付きプラン、ディナー予約は世界的な需要集中により早くから満室となる傾向があります。ご旅行計画時は楽天トラベルにてお早めの空室確認をおすすめします。</p>
          </footer>
        </div>
      </article>
    </>
  );
}
