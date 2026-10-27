import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `【竹林の小径の静寂と数寄屋露天離れ】2026-2027年11-1月冬の静岡・伊豆修善寺温泉！「柳生の庄」＆「宙 SORA 渡月荘金龍」・天城軍鶏と伊豆伊勢海老・名門美食宿5選`,
  description: `弘法大師開湯の歴史を紡ぐ伊豆最古の温泉地・修善寺。晩秋の紅葉から初冬・厳冬の澄み渡る竹林の小径、桂川のせせらぎに包まれる静寂のひととき。竹林に佇む本格料亭旅館「柳生の庄」や、広大な日本庭園と展望露天風呂を誇る「宙 SORA 渡月荘金龍」など名宿が集結。滋味あふれる天城軍鶏や極上の伊豆伊勢海老、駿河湾の金目鯛を味わう大人の贅沢ステイ厳選5選。`,
  openGraph: {
    title: `【竹林の小径の静寂と数寄屋露天離れ】2026-2027年11-1月冬の静岡・伊豆修善寺温泉！「柳生の庄」＆「宙 SORA 渡月荘金龍」・天城軍鶏と伊豆伊勢海老・名門美食宿5選`,
    description: `弘法大師開湯の歴史を紡ぐ伊豆最古の温泉地・修善寺。晩秋の紅葉から初冬・厳冬の澄み渡る竹林の小径、桂川のせせらぎに包まれる静寂のひととき。竹林に佇む本格料亭旅館「柳生の庄」や、広大な日本庭園と展望露天風呂を誇る「宙 SORA 渡月荘金龍」など名宿が集結。滋味あふれる天城軍鶏や極上の伊豆伊勢海老、駿河湾の金目鯛を味わう大人の贅沢ステイ厳選5選。`,
    url: `https://travel.navitime.jp.net/winter-shizuoka-izu-shuzenji-luxury-asaba-sora-onsen-stay`,
    siteName: 'トラベルNAVI',
    locale: 'ja_JP',
    type: 'article',
  },
  alternates: {
    canonical: `https://travel.navitime.jp.net/winter-shizuoka-izu-shuzenji-luxury-asaba-sora-onsen-stay`,
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
      "name": "修善寺温泉の歴史と特徴的な見どころは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "平安時代の大同2年（807年）に弘法大師空海が開湯したと伝わる伊豆最古の名湯です。温泉街の中心を流れる桂川沿いの「竹林の小径」や、朱塗りの桂橋・渡月橋、古刹「修禅寺」、弘法大師ゆかりの「独鈷の湯」などがあり、川沿いを歩くだけで伊豆の小京都と呼ばれる情緒を体感できます。"
      }
    },
    {
      "@type": "Question",
      "name": "「柳生の庄」と「新井旅館」のそれぞれの魅力は何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "『柳生の庄』は数千坪の竹林に囲まれた本格京風料亭旅館で、剣道の柳生新陰流にちなむ格式高い空間と、料理長が腕を振るう本格割烹懐石が絶賛されています。一方『新井旅館』は明治5年創業、全館の多くの建物が国の登録有形文化財に指定されており、芥川龍之介や横山大観が愛した歴史的建築美と登録文化財の「天平大浴堂」の湯浴みが唯一無二の魅力です。"
      }
    },
    {
      "@type": "Question",
      "name": "11月〜1月の気候と道路の積雪状況はどうですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "修善寺温泉街は標高が低いため、真冬でも平野部での積雪は極めて稀です。ただし天城峠方面へ足を延ばす場合や、強い寒波が到来した早朝・深夜には橋の上などが凍結する可能性があるため、車でお越しの際は最新の天気予報をご確認の上、安全運転を心がけてください。"
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
      "name": "静岡県",
      "item": "https://travel.navitime.jp.net/prefectures/shizuoka"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "【竹林の小径の静寂と数寄屋露天離れ】2026-2027年11-1月冬の静岡・伊豆修善寺温泉！「柳生の庄」＆「宙 SORA 渡月荘金龍」・天城軍鶏と伊豆伊勢海老・名門美食宿5選",
      "item": "https://travel.navitime.jp.net/winter-shizuoka-izu-shuzenji-luxury-asaba-sora-onsen-stay"
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
            <Link href="/prefectures/shizuoka/" className="hover:text-amber-600">静岡県</Link>
            <span>&gt;</span>
            <span className="text-slate-800 font-medium truncate">【竹林の小径の静寂と数寄屋露天離れ】2026-2027年11-1月冬の静岡・伊豆修善寺温泉！「柳生の庄」＆「宙 SORA 渡月荘金龍」・天城軍鶏と伊豆伊勢海老・名門美食宿5選</span>
          </div>
        </nav>

        {/* ヘッダー */}
        <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-block bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              2026-2027年冬 厳選特集
            </div>
            <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-tight md:leading-snug">
              【竹林の小径の静寂と数寄屋露天離れ】2026-2027年11-1月冬の静岡・伊豆修善寺温泉！「柳生の庄」＆「宙 SORA 渡月荘金龍」・天城軍鶏と伊豆伊勢海老・名門美食宿5選
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-left md:text-center pt-2">
              伊豆半島最古の温泉地として千二百余年の歴史を紡ぐ修善寺温泉。桂川のせせらぎが響く温泉街は、晩秋の紅葉から初冬・厳冬期にかけて澄み切った静寂に包まれ、青々とした竹林の小径や朱塗りの渡月橋が格調高い美を放ちます。文豪や芸術家に愛された登録文化財の建築美、本格京風数寄屋造りの離れ、そして天城軍鶏や駿河湾の金目鯛、伊豆伊勢海老を味わう大人の贅沢な冬旅をご案内します。
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 mt-10 space-y-12">
          {/* 導入部 */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 leading-relaxed text-slate-700">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 border-b border-amber-200 pb-3 mb-4">
              冬の中伊豆・修善寺・天城湯ヶ島で過ごす至福のひととき
            </h2>
            <p className="text-base leading-loose">
              伊豆半島の北部に位置し、平安初期の大同2年（807年）に弘法大師空海が独鈷杵で岩を打ち霊泉を湧出させたという開湯伝説を持つ『修善寺温泉（しゅぜんじおんせん）』。桂川（修善寺川）沿いに広がる風情ある温泉街は、夏目漱石が『修善寺の記』を執筆し、芥川龍之介や川端康成ら名だたる文豪・墨客が逗留した『伊豆の小京都』として名高い歴史の街です。11月中旬の晩秋から12月、1月の初冬にかけては、夏の喧騒が完全に去り、冷涼で澄み切った大気の中に静寂が広がる年間屈指のベストシーズン。温泉街の中心を流れる桂川沿いの『竹林の小径』では、天へと伸びる青竹が冬の陽光を浴びて幽玄なコントラストを描き、朱塗りの渡月橋や虎渓橋が鮮やかに映えます。この静謐な山あいに佇むのが、約数千坪の広大な竹林に抱かれた本格料亭旅館『修善寺温泉 柳生の庄』や、一万五千坪の大庭園を見渡す『宙 SORA 渡月荘金龍』、全館が国の登録有形文化財に指定された明治創業の名門『新井旅館』。さらには創業400年の歴史を誇る『湯回廊 菊屋』など、日本の伝統美と現代の快適性が調和した最高峰の宿が揃います。夕食には、天城山麓の清らかな水と澄んだ空気で育った風味豊かな地鶏『天城軍鶏（あまぎしゃも）』の鍋仕立てや、冬に旨味を増す伊豆近海の活伊勢海老、駿河湾の極上金目鯛の煮付け、伊豆名産の本わさび。弱アルカリ性単純温泉の柔らかな湯に浸かり、冬の静寂の中で滋味あふれる美味を味わう時間は、心身を解きほぐす至高の大人のリトリートです。
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
            <h3 className="text-lg font-bold text-slate-900 mb-2">竹林の静寂と数寄屋建築の美！文豪が愛した伊豆最古の名湯・修善寺の格式</h3>
            <p className="text-sm text-slate-600 leading-relaxed">弘法大師開湯の歴史と文豪ゆかりの街。竹林に佇む本格料亭旅館『柳生の庄』や登録文化財の『新井旅館』など、日本の伝統美の粋を集めた空間で静謐な大人の時間を堪能できます。</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-4 text-lg">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">天城軍鶏の滋味と駿河湾の金目鯛・伊豆伊勢海老を味わう本格京風懐石</h3>
            <p className="text-sm text-slate-600 leading-relaxed">天城山麓の滋味あふれる天城軍鶏や冬の猪鍋、脂の乗った駿河湾の金目鯛、伊豆近海で獲れる伊勢海老。地元の厳選素材を料理人が美しく仕立てた極上会席に舌鼓を打てます。</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center mb-4 text-lg">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">都心から特急踊り子号で直通！気軽に行ける極上の大人の隠れ家リゾート</h3>
            <p className="text-sm text-slate-600 leading-relaxed">東京駅から特急『踊り子』号で修善寺駅まで直通約2時間。駅からもタクシーで約5〜10分とアクセス良好で、移動の負担なく深い静寂と名湯の世界へエスケープできます。</p>
          </div>

            </div>
          </section>

          {/* 周辺観光スポット情報（Wikipedia連携実写） */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 border-b border-amber-200 pb-3">
              周辺観光スポット：桂川のせせらぎと幽玄な青竹が続く小径・修善寺温泉（伊豆の小京都・弘法大師開湯の古湯）
            </h2>
            
            <div className="relative rounded-xl overflow-hidden aspect-video shadow-md bg-slate-100">
              <img
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/181124_Shuzenji_Onsen_Izu_Shizuoka_pref_Japan01s3.jpg/1280px-181124_Shuzenji_Onsen_Izu_Shizuoka_pref_Japan01s3.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="修善寺温泉"
                className="w-full h-full object-cover"
                loading="eager" fetchPriority="high"
              />
            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
              <p>静岡県伊豆市北部、修善寺川（通称・桂川）沿いに広がる伊豆半島最古の温泉街。平安時代の大同2年（807年）に弘法大師空海が湧出させた『独鈷の湯（とっこのゆ）』が開湯伝説とされ、夏目漱石や芥川龍之介、川端康成ら名だたる文豪が愛逗留した『伊豆の小京都』です。川沿いには青々とした竹林が天へと伸びる『竹林の小径』や朱塗りの渡月橋・桂橋が架かり、初冬の澄んだ空気の中で風情ある散策が愉しめます。温泉は無色透明でさらりとした肌触りの弱アルカリ性単純温泉。冬には天城山麓の猪肉を使った牡丹鍋や天城軍鶏、伊豆近海で獲れる伊勢海老や金目鯛が旬を迎えます。</p>
              <p className="bg-amber-50/60 p-4 rounded-xl border border-amber-100 text-amber-900 font-medium">
                桂川沿いの竹林の小径を歩き、朱塗りの桂橋や修禅寺の古刹を巡ったあとは、竹林や広大な日本庭園に抱かれた名門宿へ。凛とした冬の空気に包まれながら自家源泉の露天風呂で温まり、天城軍鶏や金目鯛、伊豆伊勢海老の極上会席に舌鼓を打つ贅沢な一夜が始まります。
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
                修善寺温泉　柳生の庄
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                竹林の静寂に抱かれる本格料亭旅館！日本の美意識を結集した数寄屋造り離れと京風懐石
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/72797/72797.jpg"
                    alt="修善寺温泉　柳生の庄"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">静岡県伊豆市修善寺1116-6</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥44,000〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★5 （36件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">修善寺温泉の奥にある閑静な旅館。本格懐石料理と露天風呂が好評。露天風呂付客室や離れもおすすめ。</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>広大な竹林の中にひっそりと佇む数寄屋造りの名門料亭旅館。竹林を渡る風の音と鳥のさえずりだけが響く静寂の別天地です。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>客室ごとに趣が異なる数寄屋建築と専用露天風呂。職人の技が息づく木の温もりに包まれ、心洗われる休日を過ごせます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>東京・芝白金の料亭をルーツに持つ本格京風懐石。伊豆の旬の海の幸、天城軍鶏、旬野菜を一皿ひと皿芸術的に仕立てます。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「落ち着いた心地よい空間の中、温かい温泉とおいしいお料理で日頃の疲れを癒やすことができました」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72797%2F72797.html"
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  修善寺温泉　柳生の庄 の宿泊プラン・空室を楽天トラベルで確認
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
                修善寺温泉　宙ＳＯＲＡ　渡月荘金龍
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                一万五千坪の日本庭園を一望！幻想的な光の露天風呂とモダン和会席
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/27983/27983.jpg"
                    alt="修善寺温泉　宙ＳＯＲＡ　渡月荘金龍"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">静岡県伊豆市修善寺3455</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥13,200〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.73 （640件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">客室からは四季を感じられる自然が一望できます。月替りの会席は人気の絶品です。</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>一万五千坪もの広大な日本庭園の奥に佇む高級和モダン旅館。モダンなインテリアと庭園の自然美が見事に調和しています。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>夜には庭園が幻想的にライトアップされ、夜空に星が輝く露天風呂「光の露天風呂」や貸切風呂で極上の湯浴みが楽しめます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>夕食は駿河湾の新鮮な地魚や伊豆牛、旬の野菜を彩り豊かにあしらった月替わりの和会席。洗練されたおもてなしが心地よい滞在を約束します。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「庭園を眺めてのんびり、料理も絶品でしたエントランスからの庭園も素敵。部屋のテラスからも庭園が見れてのんびり過ごせました。夕食は1品ごとに料理長の手が凄くこんであり美味しく頂くことができまし」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27983%2F27983.html"
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  修善寺温泉　宙ＳＯＲＡ　渡月荘金龍 の宿泊プラン・空室を楽天トラベルで確認
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
                修善寺温泉　国の登録文化財の宿　新井旅館
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                全館が国の登録文化財！文豪・画人が愛した明治創業の名門旅館と天平大浴堂
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/31865/31865.jpg"
                    alt="修善寺温泉　国の登録文化財の宿　新井旅館"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">静岡県伊豆市修善寺970</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥24,420〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.56 （267件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">ミシュランで二つ星の竹林の小径まで徒歩2分、修善寺温泉の中心で観光に便利です</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>明治5年創業、芥川龍之介や横山大観、川端康成ら多くの文豪や日本画家が逗留し作品を生み出した国の登録有形文化財の宿です。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>国の文化財に登録された名物「天平大浴堂」は、総檜造りの高い天井と伊豆石の浴槽が圧巻。良質な源泉が惜しみなく掛け流されています。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>桂川の清流に面した客室から四季の移ろいを眺め、職人の伝統技が光る本格会席料理を味わう、歴史と文化に浸る贅沢な滞在が叶います。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「よくメンテされた登録文化財施設は漸次更新されており(文化財なので許認可大変だと思います)食事も美味しく仲居さんもフレッシュで素晴らしいと思います。ただし、寝具類がせんべい布団で朝が来るのが待ち」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31865%2F31865.html"
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  修善寺温泉　国の登録文化財の宿　新井旅館 の宿泊プラン・空室を楽天トラベルで確認
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
                湯回廊　菊屋（共立リゾート）
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                創業400年の歴史を誇る名門！回廊で結ばれた庭園と源泉掛け流し湯めぐり
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/7491/7491.jpg"
                    alt="湯回廊　菊屋（共立リゾート）"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">静岡県伊豆市修善寺874-1</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥21,230〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.48 （1719件）</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">文豪も愛した本館、源泉かけ流し風呂付の離れ、2021年～水の語り部(温泉風呂付）、風の語り部が誕生</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>夏目漱石が逗留したことでも知られる創業四百余年の歴史を誇る名宿。時代ごとの建築美が美しい回廊で結ばれています。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>敷地内に湧く豊富な自家源泉を活かした大浴場や露天風呂、無料で利用できる趣の異なる貸切風呂など、館内で湯めぐりを満喫できます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>夕食は月替わりの趣菜会席で、お好みの台の物や洋皿を選べるスタイル。名門の伝統を受け継ぐきめ細やかなサービスが光ります。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「3回目の宿泊も大満足、料理も温泉も最高大好きな旅館で今回3回めの宿泊です。今回も素晴らしかったです。・アクセス修善寺温泉駅バス停の目の前で大変便利です。温泉街にも徒歩で行けます」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7491%2F7491.html"
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  湯回廊　菊屋（共立リゾート） の宿泊プラン・空室を楽天トラベルで確認
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
                修善寺温泉　瑞の里　〇久（まるきゅう）旅館
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                桂川のせせらぎと多彩な湯処！伊豆の旬食材を堪能する温もりのおもてなし
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 items-center">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-inner bg-slate-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/29806/29806.jpg"
                    alt="修善寺温泉　瑞の里　〇久（まるきゅう）旅館"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">所在地</span>
                    <span className="font-semibold text-slate-800 text-right">静岡県伊豆市修善寺1146</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">参考最低宿泊料金</span>
                    <span className="font-bold text-rose-600 text-base">¥19,250〜</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-medium">クチコミ総合評価</span>
                    <span className="font-bold text-amber-600">★4.43 </span>
                  </div>
                  <div className="pt-1">
                    <span className="text-slate-500 font-medium block mb-1">宿の特徴</span>
                    <p className="text-xs text-slate-600 leading-relaxed">冷蔵庫飲物無料★2024「泳ぎ湯」「寝湯」新設★宴処新装★『お客様が選ぶ人気宿』常連宿</p>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  極上のおもてなし＆滞在ポイント
                </h4>
                <ul className="space-y-2 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  <li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>修善寺温泉街を流れる桂川のほとりに佇み、四季の風情を感じる落ち着いた和の空間が広がる老舗旅館です。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>大浴場をはじめ、野趣あふれる露天風呂や貸切風呂など多彩な湯処を完備。柔らかな修善寺の名湯に身を委ねてリフレッシュできます。</span></li><li className="flex items-start gap-2 text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">✔</span><span>夕食は駿河湾の海の幸や天城の恵みをふんだんに取り入れた季節の会席料理。温かなもてなしと行き届いた心配りが評判です。</span></li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-600 italic mb-6">
                <span className="font-bold text-slate-700 not-italic block mb-1">宿泊者のクチコミ体験談</span>
                「川のせせらぎを聞きながら入る露天風呂と、地元の旬食材をふんだんに使った会席料理が素晴らしい名宿」
              </div>

              <div className="pt-2">
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29806%2F29806.html"
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  修善寺温泉　瑞の里　〇久（まるきゅう）旅館 の宿泊プラン・空室を楽天トラベルで確認
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
・電車・特急から：JR東京駅より特急「踊り子号」で伊豆箱根鉄道直通「修善寺駅」まで約2時間。または東海道新幹線「三島駅」より伊豆箱根鉄道駿豆線に乗り換えて終点「修善寺駅」まで約35分。修善寺駅より各旅館までタクシーで約5〜10分（路線バスも運行）。
・車：東名高速道路「沼津IC」または新東名高速道路「長泉沼津IC」より伊豆縦貫自動車道・伊豆中央道・修善寺道路を経由して約30分。
・新幹線：東海道新幹線「三島駅」下車。三島駅南口からレンタカー利用の場合は約40分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月中旬〜1月（11月下旬の晩秋紅葉から、12月・1月の凛とした静寂に包まれる冬の竹林散策まで、観光客が落ち着き大人の滞在に最適な時期）。
・気温の目安：伊豆半島の中央部で比較的温暖ですが、山あいの温泉街のため朝晩は冷え込みます。11月は日中14〜18℃、朝晩は6〜10℃。12月・1月は日中10〜14℃、朝晩は1〜5℃前後まで下がります。
・服装のポイント：日中はセーターにジャケットで散策できますが、夕方以降の外湯散策や竹林のライトアップ見学にはウールコートやダウンジャケット、マフラーをご準備ください。
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
              <span>修善寺温泉の歴史と特徴的な見どころは何ですか？</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed pl-6">
              平安時代の大同2年（807年）に弘法大師空海が開湯したと伝わる伊豆最古の名湯です。温泉街の中心を流れる桂川沿いの「竹林の小径」や、朱塗りの桂橋・渡月橋、古刹「修禅寺」、弘法大師ゆかりの「独鈷の湯」などがあり、川沿いを歩くだけで伊豆の小京都と呼ばれる情緒を体感できます。
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
              <span className="text-amber-600 font-extrabold">Q.</span>
              <span>「柳生の庄」と「新井旅館」のそれぞれの魅力は何ですか？</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed pl-6">
              『柳生の庄』は数千坪の竹林に囲まれた本格京風料亭旅館で、剣道の柳生新陰流にちなむ格式高い空間と、料理長が腕を振るう本格割烹懐石が絶賛されています。一方『新井旅館』は明治5年創業、全館の多くの建物が国の登録有形文化財に指定されており、芥川龍之介や横山大観が愛した歴史的建築美と登録文化財の「天平大浴堂」の湯浴みが唯一無二の魅力です。
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
              <span className="text-amber-600 font-extrabold">Q.</span>
              <span>11月〜1月の気候と道路の積雪状況はどうですか？</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed pl-6">
              修善寺温泉街は標高が低いため、真冬でも平野部での積雪は極めて稀です。ただし天城峠方面へ足を延ばす場合や、強い寒波が到来した早朝・深夜には橋の上などが凍結する可能性があるため、車でお越しの際は最新の天気予報をご確認の上、安全運転を心がけてください。
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
              静岡県伊豆市への楽天ふるさと納税を活用すれば、柳生の庄や宙 SORA、新井旅館など修善寺温泉の憧れの高級旅館で使える宿泊クーポンが最大30%還元されます。年末の寄附枠を活かして、天城軍鶏や伊勢海老を味わう大人のご褒美旅行をお得に実現できます。
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
            <p>※伊豆・修善寺温泉エリアの宿泊料金、旬の天城軍鶏や伊勢海老会席プラン、客室露天風呂の空室状況は季節により変動します。最新の空室・プランは楽天トラベル各ホテル公式ページをご確認ください。</p>
          </footer>
        </div>
      </article>
    </>
  );
}
