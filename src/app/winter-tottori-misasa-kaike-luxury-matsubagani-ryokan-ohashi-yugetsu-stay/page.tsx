import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `【奇跡の自噴ラジウム温泉と日本海インフィニティ露天】2026-2027年11-1月冬の鳥取・三朝＆皆生温泉！国登録有形文化財「旅館 大橋」＆「皆生 游月」・鳥取松葉ガニと鳥取和牛名宿5選`,
  description: `世界屈指の高濃度ラドン含有量を誇る「三朝温泉」と、白砂青松の弓ヶ浜に面した海の温泉「皆生温泉」。三朝川の河床から自噴する巌窟の湯と国登録有形文化財の数寄屋建築を誇る「旅館 大橋」、全室オーシャンビュー露天風呂付きの最新リゾート「皆生 游月」。冬に水揚げされる最高級ブランド「鳥取松葉ガニ（五輝星）」やオレイン55鳥取和牛を堪能する、癒やしと美食の冬旅厳選5選。`,
  openGraph: {
    title: `【奇跡の自噴ラジウム温泉と日本海インフィニティ露天】2026-2027年11-1月冬の鳥取・三朝＆皆生温泉！国登録有形文化財「旅館 大橋」＆「皆生 游月」・鳥取松葉ガニと鳥取和牛名宿5選`,
    description: `世界屈指の高濃度ラドン含有量を誇る「三朝温泉」と、白砂青松の弓ヶ浜に面した海の温泉「皆生温泉」。三朝川の河床から自噴する巌窟の湯と国登録有形文化財の数寄屋建築を誇る「旅館 大橋」、全室オーシャンビュー露天風呂付きの最新リゾート「皆生 游月」。冬に水揚げされる最高級ブランド「鳥取松葉ガニ（五輝星）」やオレイン55鳥取和牛を堪能する、癒やしと美食の冬旅厳選5選。`,
    url: `https://croud-travel.pages.dev/winter-tottori-misasa-kaike-luxury-matsubagani-ryokan-ohashi-yugetsu-stay/`,
    siteName: 'トラベルNAVI',
    locale: 'ja_JP',
    type: 'article',
  },
  alternates: {
    canonical: `https://croud-travel.pages.dev/winter-tottori-misasa-kaike-luxury-matsubagani-ryokan-ohashi-yugetsu-stay/`,
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
      "name": "三朝温泉の「ラジウム温泉（放射能泉）」にはどんな健康効果があるのですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "三朝温泉は世界有数の高濃度ラドン（ラジウムが分解されて生じる気体）を含有しています。微量の放射線を浴びることで人体の自然治癒力や免疫力が活性化される「ホルミシス効果」があるとされ、新陳代謝の向上、冷え性改善、疲労回復、痛風や関節痛の緩和などに優れた効果を発揮します。温泉に浸かるだけでなく、湯気を吸い込む「吸入」や「飲泉」も効果的です。"
      }
    },
    {
      "@type": "Question",
      "name": "鳥取の松葉ガニのトップブランド「五輝星（いつきぼし）」とはどのような蟹ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "鳥取県で水揚げされる松葉ガニのうち、甲羅幅13.5cm以上、重量1.2kg以上、濁りのない鮮やかな体色、身詰まりの良さ、完全な脚揃いなど、極めて厳格な5つの基準をすべてクリアしたごく一部の最高峰だけに与えられるプレミアムブランドです。市場では高値で取引される幻の逸品です。"
      }
    },
    {
      "@type": "Question",
      "name": "三朝温泉と皆生温泉はどのくらい離れていますか？両方巡ることは可能ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "三朝温泉と皆生温泉は車で約50分（山陰自動車道・国道9号経由）の距離にあります。公共交通機関でもJR山陰本線（倉吉駅〜米子駅）を利用して約40分で移動できるため、三朝の山あいの歴史ある湯治場と、皆生の開放的な日本海のオーシャンビューリゾートを組み合わせた連泊や周遊旅行が大変人気です。"
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
      "item": "https://croud-travel.pages.dev"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "鳥取県",
      "item": "https://croud-travel.pages.dev/prefectures/tottori/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "【奇跡の自噴ラジウム温泉と日本海インフィニティ露天】2026-2027年11-1月冬の鳥取・三朝＆皆生温泉！国登録有形文化財「旅館 大橋」＆「皆生 游月」・鳥取松葉ガニと鳥取和牛名宿5選",
      "item": "https://croud-travel.pages.dev/winter-tottori-misasa-kaike-luxury-matsubagani-ryokan-ohashi-yugetsu-stay/"
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
            <Link href="/prefectures/tottori/" className="hover:text-amber-600">鳥取県</Link>
            <span>&gt;</span>
            <span className="text-slate-800 font-medium truncate">【奇跡の自噴ラジウム温泉と日本海インフィニティ露天】2026-2027年11-1月冬の鳥取・三朝＆皆生温泉！国登録有形文化財「旅館 大橋」＆「皆生 游月」・鳥取松葉ガニと鳥取和牛名宿5選</span>
          </div>
        </nav>

        {/* ヘッダー */}
        <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-block bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              2026-2027年冬 厳選特集
            </div>
            <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-tight md:leading-snug">
              【奇跡の自噴ラジウム温泉と日本海インフィニティ露天】2026-2027年11-1月冬の鳥取・三朝＆皆生温泉！国登録有形文化財「旅館 大橋」＆「皆生 游月」・鳥取松葉ガニと鳥取和牛名宿5選
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-left md:text-center pt-2">
              世界屈指の高濃度ラドン含有量を誇り、「三たび朝を迎えると元気になる」と伝えられる三朝温泉と、白砂青松の弓ヶ浜に面し日本海の絶景と塩化物泉が広がる皆生温泉。山陰の冬は、11月の鳥取松葉ガニ漁解禁により最高峰の美食シーズンへと突入します。川床から湧出する自噴の巌窟風呂や海と一体化するインフィニティ露天風呂に浸かり、最高級ブランド「五輝星」をはじめとする鳥取松葉ガニとオレイン55鳥取和牛を味わう極上の湯治旅をご案内します。
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 mt-10 space-y-12">
          {/* 導入部 */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 leading-relaxed text-slate-700">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 border-b border-amber-200 pb-3 mb-4">
              冬の三朝温泉・倉吉・皆生温泉・米子で過ごす至福のひととき
            </h2>
            <p className="text-base leading-loose">
              中国山地の北麓、清流・三朝川のほとりに開湯850年の歴史を刻む『三朝温泉（みささおんせん）』と、日本海に面した白砂青松の弓ヶ浜沿いに湧く『皆生温泉（かいけおんせん）』。山陰・鳥取県を代表する二大温泉地は、11月のズワイガニ漁解禁とともに年間最高の賑わいを迎えます。三朝温泉は世界有数の高濃度ラドンを含有する放射能泉として名高く、微量の放射線が身体の細胞を刺激し免疫力を高める「ホルミシス効果」により、古くから多くの湯治客を癒やしてきました。一方の皆生温泉は、日本海の海底から湧き出る豊富な塩化物泉で、美肌と保温効果に優れた「海の温泉」として親しまれています。そして冬の鳥取といえば、最高峰の冬の味覚『鳥取松葉ガニ』。甲羅幅や重量、身入りなど厳しい基準をクリアした最高峰トップブランド『五輝星（いつきぼし）』をはじめ、鮮度抜群の活蟹が市場に並びます。この地に佇むのが、川床から自噴する奇跡の「巌窟の湯」と国登録有形文化財の数寄屋建築を誇る名門『三朝温泉 旅館 大橋』や、全室オーシャンビュー客室露天風呂と海に溶け込むインフィニティ天空露天風呂を備えた最新ラグジュアリー『皆生游月（ゆうげつ）』。さらには広大な回遊式大庭園露天風呂を誇る『依山楼 岩崎』など、本物の癒やしと贅を極めた宿が揃います。夕食には、鳥取松葉ガニの花咲く蟹刺し、炭火で香ばしく焼き上げる焼きガニ、濃厚な蟹味噌、そしてオリーブオイルの主成分であるオレイン酸を豊富に含み口どけ抜群の『鳥取和牛オレイン55』のステーキ。奇跡の名湯と日本海の至高の味覚に酔いしれる、至福の山陰冬リトリートです。
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
            <h3 className="text-lg font-bold text-slate-900 mb-2">世界屈指のラドン含有量！三朝の奇跡の免疫力ラジウム温泉と皆生オーシャンビュー露天</h3>
            <p className="text-sm text-slate-600 leading-relaxed">細胞を活性化させるホルミシス効果で知られる三朝の自噴ラジウム温泉と、皆生温泉の雄大な日本海を望むインフィニティ露天風呂。心身の芯から活力が蘇る極上の湯浴みが叶います。</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-4 text-lg">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">鳥取が誇る最高峰ブランド「鳥取松葉ガニ（五輝星）」と鳥取和牛オレイン55の贅沢</h3>
            <p className="text-sm text-slate-600 leading-relaxed">厳格な基準をクリアした最高峰松葉ガニの甘みあふれる活蟹料理と、とろけるような口どけと芳醇な香りが自慢の鳥取和牛。山陰の冬の味覚を贅沢に食べ比べできます。</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-4 text-lg">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">国登録有形文化財「旅館 大橋」をはじめとする格調高い建築美と山陰の心温まるもてなし</h3>
            <p className="text-sm text-slate-600 leading-relaxed">宮大工の技が息づく登録文化財の木造建築や、日本庭園を眺める静寂の空間。現代の名工が手掛ける極上の会席料理と細やかなもてなしが旅情を深めます。</p>
          </div>

            </div>
          </section>

          {/* 周辺観光スポット情報（Wikipedia連携実写） */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 border-b border-amber-200 pb-3">
              周辺観光スポット：世界屈指の高濃度ラドンを含む奇跡の治癒泉・三朝温泉（三朝川沿いの湯治場と三徳山三仏寺）
            </h2>
            
            <div className="relative rounded-xl overflow-hidden aspect-video shadow-md bg-slate-100">
              <img
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Misasa_onsen_kawaranoyu_202106.jpg/1280px-Misasa_onsen_kawaranoyu_202106.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="三朝温泉"
                className="w-full h-full object-cover"
                loading="eager" fetchPriority="high"
              />
            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
              <p>鳥取県東伯郡三朝町、三朝川の河畔に広がる開湯850年以上の歴史を誇る名湯。平安時代末期、源義朝の家臣・大久保左馬之祐が白狼を助けたことで妙見菩薩から温泉の場所を教わったという白狼伝説が残ります。世界有数の高濃度ラドンを含有する放射能泉で、『三たび朝を迎えると元気になる』と称される奇跡の湯治場。川沿いの共同浴場『株湯』や河原風呂をはじめ、古き良き木造旅館が情緒を醸し出します。初冬には鳥取県が誇る最高峰ブランド『五輝星』を含む鳥取松葉ガニや鳥取和牛オレイン55など贅沢な山陰の冬の味覚が揃います。</p>
              <p className="bg-amber-50/60 p-4 rounded-xl border border-amber-100 text-amber-900 font-medium">
                三朝川のせせらぎや雄大な日本海の白波を眺め、国宝・三徳山投入堂の歴史や弓ヶ浜の絶景に触れたあとは、山陰屈指の名宿へ。奇跡の自噴ラジウム温泉や海一望のインフィニティ露天風呂で心身を解き放ち、冬の味覚の王様・鳥取松葉ガニと鳥取和牛に舌鼓を打つ極上の滞在が待っています。
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
                三朝温泉　旅館　大橋
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                国登録有形文化財の数寄屋建築！川底から湧く自噴「巌窟の湯」と現代の名工による極上会席
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/40046/40046.jpg"
                    alt="三朝温泉　旅館　大橋"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">鳥取県東伯郡三朝町三朝302-1</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥14,300〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.36 （281件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">舘は国登録有形文化財。自家源泉５ヶ所の内、自噴泉が３ヶ所ある「巌窟の湯」が名物風呂！</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>昭和7年創業、本館や離れのほぼすべてが国の登録有形文化財に指定された名門旅館。宮大工の精緻な木造建築美が息づきます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>名物「巌窟の湯」は三朝川の川床の岩間から温泉が自噴する奇跡の湯船。空気に触れずに湧き出る生まれたての名湯を満喫できます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>「現代の名工」に選ばれた料理長が手掛ける極上の会席料理。冬は活松葉ガニや鳥取和牛を素材の持ち味を極限まで引き出して提供します。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「重要文化財の佇まいと最高の泉質に感動重要文化財の宿の廊下を歩いてると、外を歩いてる人々がカメラにおさめてました。正面玄関カッちょいーです。なんといってもお風呂!洞窟みたいなお風呂もさること」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40046%2F40046.html"
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  三朝温泉　旅館　大橋 の宿泊プラン・空室を楽天トラベルで確認
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
                皆生游月
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                全室フロントオーシャンビュー露天風呂付き！海と空に溶け込むインフィニティ天空露天と松葉ガニ
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/168732/168732.jpg"
                    alt="皆生游月"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">鳥取県米子市皆生温泉3-11-1</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥17,600〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.73 （1659件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">絶景インフィニティ天空露天風呂が大人気！全室《温泉》露天風呂付</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>2019年開業、全室が日本海を一望する温泉露天風呂付きのラグジュアリーリゾートホテルです。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>最上階のインフィニティ露天風呂からは、水平線と湯船が一体化する息を呑む絶景。朝陽や夕暮れの海景に包まれます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>夕食は境港直送の活松葉ガニや鳥取和牛をふんだんに取り入れた和洋創作コース。洗練されたモダンな空間で贅沢な美食を堪能できます。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「丁寧な接客だがバリアフリールームに手すり希望スタッフさんは皆さん丁寧な接客をしてくれました。バリアフリールームに手すりが欲しいです」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168732%2F168732.html"
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  皆生游月 の宿泊プラン・空室を楽天トラベルで確認
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
                三朝温泉　依山楼　岩崎
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                回遊式大庭園露天風呂「山の湯」！文豪ゆかりの老舗旅館と鳥取松葉ガニ・鳥取牛
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/5840/5840.jpg"
                    alt="三朝温泉　依山楼　岩崎"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">鳥取県東伯郡三朝町三朝365-1</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥6,050〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.44 （2216件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">1920年(大正9年)創業★文人墨客に愛された三朝の老舗宿で回遊式大庭園風呂と山陰の旬味覚を満喫</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>創業明治元年の歴史を誇り、与謝野晶子や島崎藤村ら多くの文豪が愛逗留した三朝温泉を代表する名門旅館です。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>千数百坪の敷地に配された回遊式大庭園風呂「山の湯・里の湯」には多彩な湯船が点在。三朝随一のラジウム湯めぐりが楽しめます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>冬は鳥取松葉ガニを贅沢に使った焼き蟹、蟹刺し、蟹すき鍋会席。伝統のおもてなしと手入れの行き届いた日本庭園が迎えてくれます。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「寄り添った対応に心から感謝ホスピタリティに溢れた御宿だと感じました。とても楽しみにしていた温泉旅。ところが諸事情により、全員で満喫することができなくなり大慌て。そのような状況の時にも、寄り」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5840%2F5840.html"
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  三朝温泉　依山楼　岩崎 の宿泊プラン・空室を楽天トラベルで確認
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
                皆生温泉　華水亭
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                日本海のパノラマを一望する名門和風旅館！自家源泉の美肌湯と贅を尽くした海鮮会席
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/2038/2038.jpg"
                    alt="皆生温泉　華水亭"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">鳥取県米子市皆生温泉4-19-10</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥8,800〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.6 （957件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">2026年7月18日お食事処リニューアルオープン♪日本海の眺望と季節の会席が愉しめる自家源泉の宿</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>皆生海岸の波打ち際に佇み、客室や露天風呂から白砂青松の海岸美と日本海のパノラマを一望する高級和風旅館です。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>敷地内から湧き出る豊富な自家源泉「宝生の泉」を使用。肌を滑らかにする海のミネラル温泉をゆったりと満喫できます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>冬の味覚の王様・松葉ガニを中心に、日本海近海で獲れた新鮮な魚介と鳥取和牛を贅沢に盛り込んだ極上会席が自慢です。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「見事なオーシャンビューと落ち着いた空間に感動部屋に案内されると真っ先に目に飛び込む日本海に驚きと感動、見事なオーシャンビューです。朝食は、バイキングに慣れてしまったせいか、厳選されたメニューが」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2038%2F2038.html"
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  皆生温泉　華水亭 の宿泊プラン・空室を楽天トラベルで確認
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
                三朝温泉　三朝館
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                千坪の日本庭園に広がる自家源泉かけ流し庭園風呂！三朝随一の湯量と旬の味覚会席
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/1939/1939.jpg"
                    alt="三朝温泉　三朝館"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">鳥取県東伯郡三朝町山田174</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥12,705〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.47 （2306件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">多彩な湯処とあたたかなおもてなしの心が通う“にほんの宿”</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>広大な千坪の日本庭園に包まれ、三朝温泉屈指の湯量を誇る自家源泉を惜しみなく注ぎ込む人気の老舗温泉旅館です。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>庭園と調和した野趣あふれる大露天風呂や、バラを浮かべた女性限定風呂など多彩な湯浴みで心身を解きほぐせます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>夕食は山陰の冬の恵みである松葉ガニや鳥取県産黒毛和牛を使った贅沢な会席コース。心温まる細やかなおもてなしが評判です。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「カニと和牛、温泉に大満足の贅沢なひととき最近、リニューアルされた事が、新聞の広告欄に載っているのを、家族が気になっていたようで、現在、病気療養している気分転換、ご褒美に予約をしました。予約」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1939%2F1939.html"
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  三朝温泉　三朝館 の宿泊プラン・空室を楽天トラベルで確認
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
・飛行機・空港から：鳥取砂丘コナン空港より空港連絡バスで鳥取駅または倉吉駅経由三朝温泉まで約1時間15分。米子鬼太郎空港より空港連絡バスで米子駅または皆生温泉まで約25〜30分。羽田空港から約1時間15分で直行可能。
・電車・特急から：JR京都駅・大阪駅より特急「スーパーはくと」で倉吉駅まで約3時間〜3時間20分。倉吉駅より三朝温泉まで路線バスまたはタクシーで約15〜20分。米子駅へは岡山駅より特急「やくも」で約2時間10分、米子駅から皆生温泉までタクシー約15分。
・車：中国自動車道「院庄IC」より国道179号線経由で三朝温泉まで約1時間。米子自動車道「米子IC」より皆生温泉まで約10分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月上旬〜1月（11月の松葉ガニ漁解禁から真冬にかけてがカニの最盛期。ラジウム温泉の湯煙と冬の澄んだ大気が心地よい湯治シーズン）。
・気温の目安：山陰の冬は曇りがちで冷え込みます。11月は日中13〜17℃、朝晩は6〜10℃。12月・1月は日中6〜11℃、朝晩は1〜4℃前後となり、山間部の三朝では積雪が見られます。
・服装のポイント：厚手の防寒コートやダウンジャケット、手袋やマフラーをご用意ください。雪や雨が降りやすいため、防水加工のある滑りにくい靴がおすすめです。
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
              <span>三朝温泉の「ラジウム温泉（放射能泉）」にはどんな健康効果があるのですか？</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed pl-6">
              三朝温泉は世界有数の高濃度ラドン（ラジウムが分解されて生じる気体）を含有しています。微量の放射線を浴びることで人体の自然治癒力や免疫力が活性化される「ホルミシス効果」があるとされ、新陳代謝の向上、冷え性改善、疲労回復、痛風や関節痛の緩和などに優れた効果を発揮します。温泉に浸かるだけでなく、湯気を吸い込む「吸入」や「飲泉」も効果的です。
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
              <span className="text-amber-600 font-extrabold">Q.</span>
              <span>鳥取の松葉ガニのトップブランド「五輝星（いつきぼし）」とはどのような蟹ですか？</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed pl-6">
              鳥取県で水揚げされる松葉ガニのうち、甲羅幅13.5cm以上、重量1.2kg以上、濁りのない鮮やかな体色、身詰まりの良さ、完全な脚揃いなど、極めて厳格な5つの基準をすべてクリアしたごく一部の最高峰だけに与えられるプレミアムブランドです。市場では高値で取引される幻の逸品です。
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
              <span className="text-amber-600 font-extrabold">Q.</span>
              <span>三朝温泉と皆生温泉はどのくらい離れていますか？両方巡ることは可能ですか？</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed pl-6">
              三朝温泉と皆生温泉は車で約50分（山陰自動車道・国道9号経由）の距離にあります。公共交通機関でもJR山陰本線（倉吉駅〜米子駅）を利用して約40分で移動できるため、三朝の山あいの歴史ある湯治場と、皆生の開放的な日本海のオーシャンビューリゾートを組み合わせた連泊や周遊旅行が大変人気です。
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
              鳥取県三朝町や米子市への楽天ふるさと納税では、旅館大橋や皆生游月、依山楼岩崎など山陰屈指の名旅館で使える宿泊クーポンが最大30%還元されます。鳥取松葉ガニや鳥取和牛を堪能する冬のご褒美旅をお得に実現できます。
              寄附金額の最大30%相当が宿泊割引クーポンとして即時付与され、有効期間も3年間と長いため、年末の寄附枠を活かして記念日やご褒美旅行の宿泊費を大幅に抑えることができます。
            </p>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                target="_blank"
                rel="sponsored noopener noreferrer"
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
            <a href="/winter-shizuoka-izu-shuzenji-luxury-asaba-sora-onsen-stay/" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              静岡・伊豆修善寺温泉の最高峰離れ宿と天城軍鶏・伊豆伊勢海老名宿
            </a>
            <span className="text-amber-500 text-sm font-bold ml-2">→</span>
          </li>

          <li className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex items-center justify-between">
            <a href="/winter-hokkaido-niseko-luxury-resort-parkhyatt-setsuniseko-yotei-stay/" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              北海道・ニセコの最高峰ラグジュアリーと羊蹄山雪見スイート・極上食材名宿
            </a>
            <span className="text-amber-500 text-sm font-bold ml-2">→</span>
          </li>

          <li className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex items-center justify-between">
            <a href="/winter-hyogo-kinosaki-luxury-nishimuraya-mikiya-tsuiyamagani-stay/" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              兵庫・城崎温泉の創業160年西村屋本館と青タグ活津居山ガニ・外湯めぐり名宿
            </a>
            <span className="text-amber-500 text-sm font-bold ml-2">→</span>
          </li>

          <li className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex items-center justify-between">
            <a href="/winter-fukushima-aizu-ashinomaki-higashiyama-luxury-ookawaso-mukaitaki-snow-stay/" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              福島・会津芦ノ牧＆東山温泉の大川荘浮き舞台と向瀧雪見ろうそく・会津馬刺し名宿
            </a>
            <span className="text-amber-500 text-sm font-bold ml-2">→</span>
          </li>

          <li className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex items-center justify-between">
            <a href="/winter-mie-ago-bay-luxury-basara-shimanokaze-matsusaka-stay/" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              三重・志摩英虞湾の最高峰露天離れと伊勢海老・松阪牛名宿
            </a>
            <span className="text-amber-500 text-sm font-bold ml-2">→</span>
          </li>

          <li className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex items-center justify-between">
            <a href="/winter-yamanashi-kawaguchiko-luxury-fufu-konansou-fuji-stay/" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              山梨・富士河口湖の富士山ビュー露天スイートと甲州牛名宿
            </a>
            <span className="text-amber-500 text-sm font-bold ml-2">→</span>
          </li>

          <li className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex items-center justify-between">
            <a href="/winter-kumamoto-kurokawa-luxury-takefue-hoshinoya-akaushi-stay/" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              熊本・黒川温泉＆瀬の本の極上隠れ宿離れと阿蘇あか牛名宿
            </a>
            <span className="text-amber-500 text-sm font-bold ml-2">→</span>
          </li>

          <li className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex items-center justify-between">
            <a href="/winter-kyoto-tango-taizagani-luxury-sumihei-amadori-matsuba-stay/" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              京都・丹後間人の幻の間人ガニ創業明治名宿と極上松葉ガニ
            </a>
            <span className="text-amber-500 text-sm font-bold ml-2">→</span>
          </li>

          <li className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex items-center justify-between">
            <a href="/winter-kagoshima-kirishima-myoken-luxury-gajin-ishiharaso-kurobuta-stay/" className="font-bold text-slate-800 hover:text-amber-600 text-sm md:text-base">
              鹿児島・霧島妙見温泉の自噴炭酸泉石原荘と極上黒毛和牛名宿
            </a>
            <span className="text-amber-500 text-sm font-bold ml-2">→</span>
          </li>

            </ul>
          </section>

          {/* 免責事項フッター */}
          <footer className="text-center text-xs text-slate-400 pt-6 border-t border-slate-200">
            <p>※三朝温泉・皆生温泉の松葉ガニプランは冬期限定の提供です。天候や海上のシケにより活ガニの仕入れが制限される場合があるため、最新のプラン詳細は楽天トラベル各宿ページをご確認ください。</p>
          </footer>
        </div>
      </article>
    </>
  );
}
