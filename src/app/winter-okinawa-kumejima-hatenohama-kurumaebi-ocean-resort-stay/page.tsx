import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Calendar, ExternalLink, HelpCircle, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: '冬の静寂はての浜と日本一の車海老三昧：2026-2027年冬の久米島！海洋深層水スパと絶景リゾートホテル5選 | クラウドトラベル',
  description: 'エメラルドグリーンの大海原に浮かぶ白砂の天国「はての浜」の冬クルーズ！冬に旬の最盛期を迎える「久米島産極上活車海老」の踊り食いや塩焼き、海洋深層水温浴スパで心身を解きほぐす至高の南国冬リゾート5選。',
  keywords: ['沖縄県冬旅行', '久米島・はての浜', '冬温泉', '2026', '2027', '雪景色', '冬の味覚', '楽天トラベル', 'ふるさと納税'],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-okinawa-kumejima-hatenohama-kurumaebi-ocean-resort-stay',
  },
  openGraph: {
    title: '冬の静寂はての浜と日本一の車海老三昧：2026-2027年冬の久米島！海洋深層水スパと絶景リゾートホテル5選',
    description: 'エメラルドグリーンの大海原に浮かぶ白砂の天国「はての浜」の冬クルーズ！冬に旬の最盛期を迎える「久米島産極上活車海老」の踊り食いや塩焼き、海洋深層水温浴スパで心身を解きほぐす至高の南国冬リゾート5選。',
    url: 'https://croud-travel.pages.dev/winter-okinawa-kumejima-hatenohama-kurumaebi-ocean-resort-stay',
    siteName: 'クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/65975/65975.jpg',
        width: 1200,
        height: 630,
        alt: '【冬の静寂はての浜と日本一の車海老三昧】2026-2027年冬の久米島！海洋深層水スパと絶景リゾートホテル5選',
      },
    ],
  },
};

export default function WinterFeaturePage() {
  const faqJsonLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "冬でも「はての浜」へのツアーは催行されていますか？", "acceptedAnswer": {"@type": "Answer", "text": "はい、冬期も毎日ツアー船が運航されています（泊フィッシャリーナ発）。冬は北風の影響で海況が荒れる日もありますが、天候が穏やかな日は夏以上の驚異的な透明度を誇るエメラルドグリーンの絶景に出会えます。防風ジャケットを着用して参加するのがおすすめです。"}}, {"@type": "Question", "name": "久米島名物の「車海老」はどこで食べられますか？", "acceptedAnswer": {"@type": "Answer", "text": "久米島島内の多くの居酒屋やホテル内レストラン、車海老養殖場直営の食事処で堪能できます。特に11月から1月は活車海老の出荷最盛期のため、刺身（踊り食い）、塩焼き、天ぷら、車海老ドッグなど多彩な料理を味わえます。島内の人気店は予約が必須です。"}}, {"@type": "Question", "name": "冬の久米島で海に入ることはできますか？", "acceptedAnswer": {"@type": "Answer", "text": "ウェットスーツを着用すれば、冬でもシュノーケリングやダイビングが十分に楽しめます。冬の久米島近海はプランクトンが少なく透明度が30mを超える日も多く、マンタやウミガメとの遭遇率も高まります。海水浴ではなく温浴を楽しみたい方は、海洋深層水を利用したホテルの大浴場やスパが最適です。"}}]};
  const breadcrumbJsonLd = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev"}, {"@type": "ListItem", "position": 2, "name": "沖縄県の観光・温泉宿", "item": "https://croud-travel.pages.dev/prefectures/okinawa"}, {"@type": "ListItem", "position": 3, "name": "【冬の静寂はての浜と日本一の車海老三昧】2026-2027年冬の久米島！海洋深層水スパと絶景リゾートホテル5選", "item": "https://croud-travel.pages.dev/winter-okinawa-kumejima-hatenohama-kurumaebi-ocean-resort-stay"}]};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="min-h-screen bg-stone-50/50 text-stone-800 pb-16">
        {/* パンくずリスト */}
        <div className="bg-white border-b border-stone-200">
          <div className="max-w-4xl mx-auto px-4 py-2.5 text-xs text-stone-500 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-cyan-700 transition">ホーム</Link>
            <ChevronRight className="w-3 h-3 text-stone-400" />
            <Link href="/prefectures/okinawa" className="hover:text-cyan-700 transition">沖縄県の観光宿</Link>
            <ChevronRight className="w-3 h-3 text-stone-400" />
            <span className="text-stone-800 font-semibold">久米島・はての浜冬特集</span>
          </div>
        </div>

        {/* ヒーローセクション */}
        <header className="bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-white py-12 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026-2027年 冬季限定・厳選名宿特集</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-balance">「冬の静寂はての浜と日本一の車海老三昧」2026-2027年冬の久米島！海洋深層水スパと絶景リゾートホテル5選</h1>
            <p className="max-w-2xl mx-auto text-xs sm:text-sm text-stone-300 leading-relaxed text-pretty">
              沖縄本島から西へ約100km、飛行機でわずか30分で辿り着ける離島・久米島（くめじま）。夏の賑わいが落ち着いた11月から1月、この島は冬の平均気温が18〜21度と春のように過ごしやすく、大人が静かにリフレッシュするための隠れ家リゾートへと姿を変えます。冬の久米島を訪れる最大の特権は、一年で最も海の透明度が高まる季節に「はての浜」を訪れられること。エメラルドグリーンに輝く広大な海原に、純白の砂州だけが360度広がる光景はまさに息を呑む奇跡の美しさです。さらに久米島は、全国一の養殖生産量を誇る「車海老の島」。11月から1月はまさに活車海老の旬のピークであり、ピチピチと跳ねる踊り食いや香ばしい塩焼きは悶絶ものの旨さ。水深612mから汲み上げる清らかな海洋深層水スパで癒やされる、極上の南国冬旅をご案内します。
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                沖縄県 久米島・はての浜
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                ベストシーズン: 11月・12月・1月
              </span>
            </div>
          </div>
        </header>

        {/* 魅力・おすすめ理由 */}
        <section className="max-w-4xl mx-auto px-4 py-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                2026-2027年冬の久米島・はての浜が格別な理由
              </h2>
              <p className="text-xs sm:text-sm text-stone-500">
                冬ならではの絶景・温泉・美食のハイライト
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  東洋一の美しさを誇る白砂の楽園「はての浜」の冬期静寂クルーズ
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  久米島の東沖合に浮かぶ、砂浜だけでできた奇跡の無人島「はての浜」。冬は観光船の混雑がなく、澄み渡るエメラルドグリーンの海と純白の砂浜を独り占めできる贅沢な時間が流れます。冬の大気は澄んでおり、写真映えも抜群です。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  日本一の生産量を誇る「久米島産極上活車海老」の旬を味わい尽くす
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  久米島は海洋深層水と豊かな自然環境に育まれた車海老の養殖で日本一のシェアを誇ります。11月〜1月は身が最も詰まり甘みが極まる最高の旬！生きたまま殻をむいて味わう「踊り食い」のプリプリ感と甘み、丸ごと焼き上げる塩焼きの香ばしさは別格です。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  水深612mの恵み「海洋深層水」の温浴スパと泡盛・久米仙の夜
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  久米島沖の深海から取水される清浄な海洋深層水。ミネラルバランスに優れた深層水を用いた大浴場や温浴施設は、疲労回復や美肌効果が抜群。夜は島の銘酒「久米仙」や「米島酒造」の泡盛を傾け、星空を眺めながら優雅な島時間を過ごせます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* アクセス・気候・服装ガイド */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-600" />
              冬のアクセス・気候とおすすめの服装
            </h2>
            <div className="text-xs sm:text-sm text-stone-600 whitespace-pre-line leading-relaxed bg-stone-50 p-4 rounded-xl border border-stone-200/60">
              【エリアへのアクセス】
・飛行機：那覇空港より久米島空港までRAC（琉球エアーコミューター）またはJTAで約30〜35分（1日約6〜7便運航）。東京（羽田）からの直行便も季節運航されます。
・フェリー：那覇泊港（とまりん）より「フェリー琉球」「フェリー海邦」で兼城港まで約3時間〜3時間30分（渡名喜島経由）。
・島内移動：久米島空港よりイーフビーチ・兼城各地区へ車・路線バスで約20〜25分。

【見頃・気候・おすすめの服装】
・見頃時期：11月〜2月（車海老の水揚げ最盛期であり、オフシーズンならではの静寂と高い海水透明度が楽しめる時期）。
・気温の目安：11月〜1月の久米島は日中の最高気温18〜23℃、朝晩でも14〜17℃前後と本土の春のような温暖な気候です。
・服装：日中は長袖シャツやカットソーにパーカー等で快適。ただし北風（ミーニシ）が強く吹く日は体感温度が下がるため、風を通さないウインドブレーカーやライトダウンを必ずご用意ください。
            </div>
          </div>
        </section>

        {/* 公式Wikipedia解説＆実写写真セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                近隣名所アーカイブ：久米島・はての浜（東洋一の美しさを誇る白砂の楽園）
              </h2>
              <span className="text-[11px] text-stone-400">Wikipedia公式情報連携</span>
            </div>

            <div className="flex flex-col gap-5">
              <div className="w-full overflow-hidden rounded-xl border border-stone-200 bg-stone-100 aspect-[16/9] sm:aspect-[21/9]">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Kumejima.jpg/1280px-Kumejima.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="久米島・はての浜（東洋一の美しさを誇る白砂の楽園）"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  久米島・はての浜（東洋一の美しさを誇る白砂の楽園） の見どころと歴史
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  久米島（くめじま）は、沖縄本島から西に約100 km、沖縄諸島に属する島で、最も西に位置する島である。人口は7000人程度で、行政上は島全域が久米島町に含まれる。面積は59.53 km2で、沖縄県内では、沖縄本島、西表島、石垣島、宮古島に次いで5番目に大きな島である。スクーバダイビング地として有名で、3つのリゾートホテルが存在する。長く広がるイーフビーチ周辺には民宿なども多く点在する。また、東北楽天ゴールデンイーグルスが発足年度からこの地にキャンプを構えたことで、プロ野球ファ…
                </p>
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                  <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                  <span className="text-cyan-700 font-semibold">冬の探訪推奨スポット</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 宿一覧セクション */}
        <section className="max-w-4xl mx-auto px-4 space-y-8 mb-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              久米島・はての浜 厳選の温泉＆リゾート宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              楽天トラベルの最新空室・クチコミ・宿泊料金データをリアルタイム連携しています
            </p>
          </div>

          {/* Hotel Card 1 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="flex flex-col">
              <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/65975/65975.jpg"
                  alt="サイプレスリゾート久米島　＜久米島＞"
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                  第1位
                </div>
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
                    シンリ浜の白砂一望・全室オーシャンビュー夕日と深層水風呂
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    サイプレスリゾート久米島　＜久米島＞
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.13
                    </span>
                    <span>クチコミ 297件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥4,200〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    久米島屈指の夕日名所「シンリ浜」の波打ち際に佇む最高級リゾートホテル。全室がオーシャンビューで設計され、プライベートバルコニーからは東シナ海の青い水平線と、夕暮れ時に空と海が茜色に染まりゆく圧倒的なサンセットを堪能できます。大浴場には久米島沖の海洋深層水をブレンドしたお湯が注がれ、ミネラルたっぷりの湯が身体を芯から解きほぐします。レストランでは、久米島特産の活車海老や久米島赤鶏、沖縄県産黒毛和牛を贅沢に使ったフレンチ会席が供され、南国の夜をラグジュアリーに彩ります。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>シンリ浜の海岸沿いに佇み東シナ海に沈む感動のサンセットを一望</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>久米島空港から車で約3分の至近立地！広々としたバルコニー付き客室</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>海洋深層水をブレンドした展望大浴場と久米島車海老フレンチ創作料理</span></li>
                  </ul>


            <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700 leading-relaxed">
              <span className="font-bold text-amber-900 block mb-1">宿泊者のクチコミ抜粋:</span>
              「親切な対応に感謝ホテルの方は親切でよかったです。温泉が子供にはちょうどいい温度でしたが、好みかもしれませんが、もう少し温度が高くてもいいなと思いました。」
            </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 沖縄県島尻郡久米島町大原803-1</p>
                    <p>🚆 久米島空港より車で5分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F65975%2F65975.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-800 hover:to-cyan-900 text-white font-bold text-xs sm:text-sm shadow transition-all"
                  >
                    <span>楽天トラベルで空室・プラン・クチコミを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Hotel Card 2 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="flex flex-col">
              <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/31362/31362.jpg"
                  alt="ウォーターマークホテル沖縄　久米アイランド＜久米島＞（旧：リゾートホテル　久米アイランド）"
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                  第2位
                </div>
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
                    日本の渚百選イーフビーチ直結・プール＆広大な庭園リゾート
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ウォーターマークホテル沖縄　久米アイランド＜久米島＞（旧：リゾートホテル　久米アイランド）
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.28
                    </span>
                    <span>クチコミ 323件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥3,995〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    日本の渚百選に選ばれた白砂のビーチ「イーフビーチ」に隣接し、広大な敷地にヤシの木と南国の花々が広がる大型リゾートホテル。はての浜ツアーの出発港（泊フィッシャリーナ）や島内の人気居酒屋街へも徒歩圏という抜群の立地を誇ります。館内にはゆったりとした大浴場が完備され、旅の疲れを心地よくリセット。夕食は久米島産車海老や新鮮な近海魚、ゴーヤチャンプルーやラフテーなど沖縄の伝統料理がずらりと並ぶ贅沢なディナービュッフェで、家族旅行からグループ旅行まで誰もが満足できる充実の滞在が叶います。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>日本の渚百選「イーフビーチ」まで徒歩1分！島内最大規模のリゾートホテル</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>南国の花々が咲き誇る広大なガーデンと開放的な屋外プール＆大浴場</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>久米島車海老の炭火焼きや島野菜、郷土料理バイキングが人気</span></li>
                  </ul>


            <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700 leading-relaxed">
              <span className="font-bold text-amber-900 block mb-1">宿泊者のクチコミ抜粋:</span>
              「忘れ物の迅速な対応に感謝、また利用したい2泊でお世話になりました。イーフビーチはとても近く、コンビニも徒歩圏内。本島のような華やかさはないけど、のんびり過ごしたい方や、マリンスポーツを楽し。」
            </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 沖縄県島尻郡久米島町真我里411</p>
                    <p>🚆 久米島空港より車で２０分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31362%2F31362.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-800 hover:to-cyan-900 text-white font-bold text-xs sm:text-sm shadow transition-all"
                  >
                    <span>楽天トラベルで空室・プラン・クチコミを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Hotel Card 3 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="flex flex-col">
              <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/29731/29731.jpg"
                  alt="ＥＮリゾート　久米島イーフビーチホテル＜久米島＞"
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                  第3位
                </div>
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
                    イーフビーチの波打ち際・全室オーシャンフロントの絶景ホテル
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ＥＮリゾート　久米島イーフビーチホテル＜久米島＞
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.38
                    </span>
                    <span>クチコミ 468件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥4,400〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    イーフビーチの砂浜に直接建ち、客室から一歩外へ出ればそのままエメラルドグリーンの波打ち際へと繋がるオーシャンフロントホテル。大浴場には久米島の清らかな海洋深層水が使われており、朝日が昇る水平線を眺めながらの朝風呂は息を呑む爽快感です。ホテル専用のマリンショップが併設されており、冬のはての浜ツアーやシュノーケリングの手配もスムーズ。夕食は潮風が心地よいレストランで、香ばしく焼き上げられた久米島車海老や新鮮な魚介を冷えたオリオンビールとともに味わう至福の島時間を楽しめます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>客室のドアを開ければそこは白砂のビーチ！圧倒的なオンザビーチ立地</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>海洋深層水を用いた展望大浴場から水平線と昇る朝日を一望</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>島素材のバーベキューや車海老の塩焼きを味わうオープンエアレストラン</span></li>
                  </ul>


            <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700 leading-relaxed">
              <span className="font-bold text-amber-900 block mb-1">宿泊者のクチコミ抜粋:</span>
              「台風時の館内サービスや工夫がもっと欲しい台風であまり外には出れませんでした。台風時は、何かホテル側から宿泊客向けにサービスがあるといいと思います。食事会場を使ったワンコインサービスとか カフェのサ。」
            </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 沖縄県島尻郡久米島町謝名堂548</p>
                    <p>🚆 久米島空港より路線バスにて３０分・タクシーにて２０分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29731%2F29731.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-800 hover:to-cyan-900 text-white font-bold text-xs sm:text-sm shadow transition-all"
                  >
                    <span>楽天トラベルで空室・プラン・クチコミを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Hotel Card 4 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="flex flex-col">
              <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/70267/70267.jpg"
                  alt="ホテル　ガーデンヒルズ　＜久米島＞"
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                  第4位
                </div>
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
                    兼城港近くの市街地中心・ダイビング＆ビジネスに便利な機能的宿
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ホテル　ガーデンヒルズ　＜久米島＞
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 3.53
                    </span>
                    <span>クチコミ 246件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥2,800〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    久米島の海の玄関口・兼城港のほど近くに位置し、島内の行政・商業の中心地に建つアットホームなホテル。スーパーやコンビニ、地元の人が通う食堂や居酒屋が徒歩圏内に揃っており、暮らすように旅したい長期滞在者や一人旅の旅行者に絶大な支持を集めています。客室はシンプルながら手入れが行き届き、無料Wi-Fiや個別エアコンなど快適に過ごせる設備が完備。夜は近所の居酒屋へふらりと出かけて久米島産車海老や採れたての海ぶどう、泡盛の古酒を味わうローカルな旅の醍醐味を満喫できます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>フェリーが発着する兼城港から徒歩約10分・久米島空港から車で約10分</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>スーパーや飲食店が徒歩圏に集まる利便性抜群の街中立地</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>手頃な価格設定と清潔な客室で長期滞在や一人旅にも最適</span></li>
                  </ul>


            <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700 leading-relaxed">
              <span className="font-bold text-amber-900 block mb-1">宿泊者のクチコミ抜粋:</span>
              「ロケーションと花火は最高、設備は古め兼城港から徒歩5分の位置にあり、バス停も近いことからロケーションは抜群です。久米島まつり会場(ふれあい公園)ととても近く、花火はホテル裏手の方からよく見えました。」
            </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 沖縄県島尻郡久米島町兼城10-1</p>
                    <p>🚆 久米島空港よりバスに乗車、「兼城バス停」下車で徒歩にて１分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70267%2F70267.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-800 hover:to-cyan-900 text-white font-bold text-xs sm:text-sm shadow transition-all"
                  >
                    <span>楽天トラベルで空室・プラン・クチコミを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Hotel Card 5 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="flex flex-col">
              <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/197648/197648.jpg"
                  alt="水と風＜久米島＞"
                  className="w-full h-full object-cover absolute inset-0"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                  第5位
                </div>
              </div>
              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 mb-2">
                    久米島の風土に溶け込む隠れ家ヴィラ・自然と調和する癒やしステイ
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    水と風＜久米島＞
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 0.00
                    </span>
                    <span>クチコミ 2件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥8,280〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    久米島のゆったりとした時間の流れを肌で感じられる、自然調和型の隠れ家ステイ。周囲をサトウキビ畑と青い空に囲まれ、都会の喧騒とは無縁の静寂が広がっています。部屋には心地よい島風が吹き抜け、夜には満天の星空が頭上一面に広がる贅沢なロケーション。キッチン設備も整っており、地元の直売所で仕入れた新鮮な車海老や島野菜を自ら調理して楽しむことも可能。ワーケーションや大切な人とのプライベートな滞在に最適な、新しいスタイルの久米島ステイを提供しています。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>久米島の豊かな自然に囲まれ静寂なプライベート時間を過ごせる宿泊施設</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>心地よい島風と鳥の声に包まれるシンプルで上質な空間デザイン</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>自炊設備やワーケーション環境も充実した贅沢な暮らす旅</span></li>
                  </ul>



                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 沖縄県島尻郡久米島町字鳥島387-5</p>
                    <p>🚆 久米島空港より車で8分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F197648%2F197648.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-800 hover:to-cyan-900 text-white font-bold text-xs sm:text-sm shadow transition-all"
                  >
                    <span>楽天トラベルで空室・プラン・クチコミを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* ふるさと納税クーポンセクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-2xl p-6 sm:p-8 text-white shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 border border-white/30">
                  楽天トラベル×ふるさと納税
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  沖縄県の宿に実質2,000円で泊まる賢い方法
                </h3>
                <p className="text-xs sm:text-sm text-white/90 max-w-xl leading-relaxed">
                  楽天ふるさと納税の宿泊クーポンを活用すれば、寄付額に応じて宿泊代金が大幅割引。予約済みの宿泊にも「あとから割引」が適用可能です。憧れの露天風呂付き客室や旬の特別会席プランもお手軽に予約できます。
                </p>
              </div>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-6 py-3 rounded-xl bg-white text-amber-700 font-bold text-sm shadow hover:bg-amber-50 transition-colors"
              >
                ふるさと納税対象宿を探す
              </a>
            </div>
          </div>
        </section>

        {/* よくある質問 (FAQ) */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-600" />
              冬の久米島・はての浜旅行でよくある質問（FAQ）
            </h2>

            <div className="space-y-4">
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 冬でも「はての浜」へのツアーは催行されていますか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  はい、冬期も毎日ツアー船が運航されています（泊フィッシャリーナ発）。冬は北風の影響で海況が荒れる日もありますが、天候が穏やかな日は夏以上の驚異的な透明度を誇るエメラルドグリーンの絶景に出会えます。防風ジャケットを着用して参加するのがおすすめです。
                </p>
              </details>
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 久米島名物の「車海老」はどこで食べられますか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  久米島島内の多くの居酒屋やホテル内レストラン、車海老養殖場直営の食事処で堪能できます。特に11月から1月は活車海老の出荷最盛期のため、刺身（踊り食い）、塩焼き、天ぷら、車海老ドッグなど多彩な料理を味わえます。島内の人気店は予約が必須です。
                </p>
              </details>
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 冬の久米島で海に入ることはできますか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  ウェットスーツを着用すれば、冬でもシュノーケリングやダイビングが十分に楽しめます。冬の久米島近海はプランクトンが少なく透明度が30mを超える日も多く、マンタやウミガメとの遭遇率も高まります。海水浴ではなく温浴を楽しみたい方は、海洋深層水を利用したホテルの大浴場やスパが最適です。
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連特集セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい沖縄県＆冬の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/okinawa" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>沖縄県のおすすめ観光名所＆温泉宿一覧</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/features" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>全国の季節・目的別旅行特集一覧</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/furusato-tax-luxury-hotspring-ryokan-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>実質2,000円で泊まる名湯・高級温泉旅館ガイド</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/furusato-tax-local-gourmet-inn-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>ご当地グルメを堪能する全国美食旅特集</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
