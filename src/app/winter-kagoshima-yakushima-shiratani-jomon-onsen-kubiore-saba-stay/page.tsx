import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Calendar, ExternalLink, HelpCircle, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: '静寂の原生林と白谷雲水峡・極上温泉：2026-2027年冬の屋久島！首折れサバと天然露天風呂宿5選 | クラウドトラベル',
  description: '冬だけの静寂に包まれる世界自然遺産・屋久島！朝露に光る白谷雲水峡の苔むす森トレッキング、旬を迎える極上の首折れサバ・屋久鹿料理と絶景オーシャンビュー温泉を堪能する大人の冬旅名宿5選。',
  keywords: ['鹿児島県冬旅行', '屋久島・宮之浦・安房', '冬温泉', '2026', '2027', '雪景色', '冬の味覚', '楽天トラベル', 'ふるさと納税'],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-kagoshima-yakushima-shiratani-jomon-onsen-kubiore-saba-stay',
  },
  openGraph: {
    title: '静寂の原生林と白谷雲水峡・極上温泉：2026-2027年冬の屋久島！首折れサバと天然露天風呂宿5選',
    description: '冬だけの静寂に包まれる世界自然遺産・屋久島！朝露に光る白谷雲水峡の苔むす森トレッキング、旬を迎える極上の首折れサバ・屋久鹿料理と絶景オーシャンビュー温泉を堪能する大人の冬旅名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-kagoshima-yakushima-shiratani-jomon-onsen-kubiore-saba-stay',
    siteName: 'クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/15874/15874.jpg',
        width: 1200,
        height: 630,
        alt: '【静寂の原生林と白谷雲水峡・極上温泉】2026-2027年冬の屋久島！首折れサバと天然露天風呂宿5選',
      },
    ],
  },
};

export default function WinterFeaturePage() {
  const faqJsonLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "冬の屋久島トレッキングで雪や凍結はありますか？", "acceptedAnswer": {"@type": "Answer", "text": "標高600m〜1,000mの白谷雲水峡やヤクスギランドでは、強い寒波が来た際にうっすら積雪することがありますが、通常の防寒着と滑りにくいトレッキングシューズで歩行可能です。標高1,300mを超える縄文杉ルートでは12月〜1月に積雪・凍結することがあるため、事前にガイド情報や屋久島観光協会で路面状況を確認し、必要に応じて簡易軽アイゼンを用意してください。"}}, {"@type": "Question", "name": "名物「首折れサバ」は冬でも食べられますか？", "acceptedAnswer": {"@type": "Answer", "text": "はい、むしろ11月から1月は海水温が下がり、サバに上質な脂が乗る最高のシーズンです。水揚げされた当日の首折れサバは生臭さが一切なく、白身魚のような弾力と濃厚な甘みが楽しめます。天候による出漁状況に左右されるため、宿泊先や島内の名店へ事前に問い合わせ・予約しておくのが確実です。"}}, {"@type": "Question", "name": "冬の屋久島島内の移動はレンタカーが必要ですか？", "acceptedAnswer": {"@type": "Answer", "text": "島内を自由に巡るならレンタカーの利用を強くおすすめします。路線バス（種子島・屋久島交通、まつばんだ交通）も運行されていますが、冬期は本数が限られます。海岸沿いの主要道路（県道77号線・78号線）は凍結の心配がほとんどなく、冬のドライブを快適に楽しめます。白谷雲水峡へ向かう山道のみ積雪凍結時のチェーン規制にご注意ください。"}}]};
  const breadcrumbJsonLd = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev"}, {"@type": "ListItem", "position": 2, "name": "鹿児島県の観光・温泉宿", "item": "https://croud-travel.pages.dev/prefectures/kagoshima"}, {"@type": "ListItem", "position": 3, "name": "【静寂の原生林と白谷雲水峡・極上温泉】2026-2027年冬の屋久島！首折れサバと天然露天風呂宿5選", "item": "https://croud-travel.pages.dev/winter-kagoshima-yakushima-shiratani-jomon-onsen-kubiore-saba-stay"}]};

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
            <Link href="/prefectures/kagoshima" className="hover:text-cyan-700 transition">鹿児島県の観光宿</Link>
            <ChevronRight className="w-3 h-3 text-stone-400" />
            <span className="text-stone-800 font-semibold">屋久島・宮之浦・安房冬特集</span>
          </div>
        </div>

        {/* ヒーローセクション */}
        <header className="bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-white py-12 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026-2027年 冬季限定・厳選名宿特集</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-balance">「静寂の原生林と白谷雲水峡・極上温泉」2026-2027年冬の屋久島！首折れサバと天然露天風呂宿5選</h1>
            <p className="max-w-2xl mx-auto text-xs sm:text-sm text-stone-300 leading-relaxed text-pretty">
              世界自然遺産の島・屋久島。夏期の登山客で賑わうハイシーズンが一段落した11月から1月、島は本来の神聖な静寂を取り戻します。凛と澄み渡る冬の大気の中、白谷雲水峡の苔むす原生林は朝露を宿してエメラルドグリーンに深く輝き、登山道を歩いていても他の登山者と行き交うことなく太古の森の呼吸を肌で感じ取ることができます。冬の屋久島は標高差によって多様な表情を見せ、宮之浦岳の頂がうっすらと雪化粧する一方で、海岸沿いは平均気温12〜15度と過ごしやすい別世界。冷えた身体を海辺の名湯や展望露天風呂で温め、冬に脂乗りが最高潮に達する名物「首折れサバ」の刺身や屋久鹿のロースト、プレミアム芋焼酎「三岳」に酔いしれる、大人のための贅沢な冬旅をご案内します。
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                鹿児島県 屋久島・宮之浦・安房
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
                2026-2027年冬の屋久島・宮之浦・安房が格別な理由
              </h2>
              <p className="text-xs sm:text-sm text-stone-500">
                冬ならではの絶景・温泉・美食のハイライト
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  静寂の森を独り占めできる冬の「白谷雲水峡」と苔の雫
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  映画のモデルとして名高い白谷雲水峡。夏は多くの登山者で賑わいますが、11月から1月は静けさに包まれます。冬の澄んだ大気と朝露によって苔の瑞々しさが際立ち、神秘的な緑の回廊を心ゆくまで自分のペースでトレッキングできます。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  冬に脂乗りがピークに達する「首折れサバ」と島の美味
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  屋久島近海で一本釣りされ、鮮度を保つため首を折って血抜きされる「首折れサバ」。厳冬期は身が引き締まり脂の乗りが抜群で、コリコリとした歯ごたえと上質な脂の甘みはここでしか味わえません。トビウオの姿揚げや屋久鹿料理との相性も格別です。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  海と森に抱かれる絶景温泉と、湯けむりからの星空観賞
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  屋久島南部の尾之間温泉や平内海中温泉をはじめ、島内屈指のリゾートホテルには源泉掛け流しやオーシャンビューの露天風呂が点在。冬は空気が澄み渡るため、湯船に浸かりながら満天の天の川や東シナ海の水平線を一望できます。
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
・飛行機：鹿児島空港より屋久島空港まで約40分（JALグループ便）。大阪（伊丹）や福岡からも直行便が季節運航されています。屋久島空港より宮之浦・安房各地区へ車・路線バスで約15〜25分。
・高速船（トッピー・ロケット）：鹿児島港南埠頭より宮之浦港または安房港まで約1時間50分〜2時間30分。
・フェリー：鹿児島本港より「フェリー屋久島2」で約4時間。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月〜1月（台風リスクがほぼゼロとなり、天候が安定する冬のトレッキング好期）。
・気温の目安：海岸沿いの集落（宮之浦・安房など）は日中12〜16℃、朝晩8〜10℃。一方、白谷雲水峡（標高600〜1,000m）は日中5〜10℃、荒川登山口〜縄文杉（標高1,300m）付近は0〜5℃まで下がり、降雪や凍結の可能性があります。
・服装：海岸部散策はフリースやライトダウンで快適。白谷雲水峡や縄文杉トレッキングには、防水透湿レインウェア（ゴアテックス等）、保温インナー、トレッキングシューズ、手袋、ネックウォーマー、簡易アイゼン（積雪時用）を携行してください。
            </div>
          </div>
        </section>

        {/* 公式Wikipedia解説＆実写写真セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                近隣名所アーカイブ：白谷雲水峡（苔むす神秘の森と太鼓岩）
              </h2>
              <span className="text-[11px] text-stone-400">Wikipedia公式情報連携</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Shiratani_Unsui_Gorge_11.jpg/1280px-Shiratani_Unsui_Gorge_11.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="白谷雲水峡（苔むす神秘の森と太鼓岩）"
                  className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  白谷雲水峡（苔むす神秘の森と太鼓岩） の見どころと歴史
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  白谷雲水峡（しらたにうんすいきょう）は屋久島北部を流れる宮之浦川支流白谷川の渓谷。行政上は鹿児島県屋久島町に属する。一帯には豊富な雨量による花崗岩の浸食によって形成された太鼓岩などの巨岩が広がり、原生林に蔽われる。この原生林は一般に知られる屋久杉の密集地帯に移行する段階で、照葉樹林の仲間であるウラジロガシ、イスノキ、タブノキなどと共にツガ、モミなどの常緑樹林が混生する。弥生杉は樹齢3000年の杉の巨木で、同渓谷のシンボル。 屋久島自然休養林に含まれ、屋久島国立公園の特別地域に…
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
              屋久島・宮之浦・安房 厳選の温泉＆リゾート宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              楽天トラベルの最新空室・クチコミ・宿泊料金データをリアルタイム連携しています
            </p>
          </div>

          {/* Hotel Card 1 */}
          <article className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/15874/15874.jpg"
                  alt="ＴＨＥ　ＨＯＴＥＬ　ＹＡＫＵＳＨＩＭＡ　ＯＣＥＡＮ　＆　ＦＯＲＥＳＴ＜屋久島＞"
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
                    宮之浦港近く・東シナ海パノラマ展望大浴場と極上会席
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ＴＨＥ　ＨＯＴＥＬ　ＹＡＫＵＳＨＩＭＡ　ＯＣＥＡＮ　＆　ＦＯＲＥＳＴ＜屋久島＞
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.50
                    </span>
                    <span>クチコミ 382件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥15,400〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    宮之浦港の高台に位置し、東シナ海の雄大な青と屋久島の深い森を見晴らす上質なリゾートホテル。館内は屋久杉や天然木が贅沢に使われ、到着した瞬間から木の芳醇な香りに癒やされます。大浴場は海側に大きく開かれたガラス窓から水平線を望む開放的な造りで、サウナと水風呂も完備。白谷雲水峡トレッキングで疲れた筋肉を心地よい湯がじんわりとほぐしてくれます。夕食には屋久島近海で獲れた旬魚のお造り盛り合わせや屋久鹿の創作料理、トビウオの薩摩揚げなど、地元食材を洗練された技で仕立てた会席料理が並びます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>宮之浦港から徒歩5分の好立地！全室オーシャンビュー＆フォレストビュー</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>屋久島の大自然を望む広々としたサウナ付き展望大浴場</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>近海で水揚げされた地魚会席と屋久杉の温もりに包まれる上質空間</span></li>
                  </ul>


            <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700 leading-relaxed">
              <span className="font-bold text-amber-900 block mb-1">宿泊者のクチコミ抜粋:</span>
              「眺めは最高だが、部屋は古さを感じる写真ではキレイに映っていますが、部屋自体は古い旅館をリフォームされたものかと思います。眺めはとてもキレイでした。」
            </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 鹿児島県熊毛郡屋久島町宮之浦1208-9</p>
                    <p>🚆 宮之浦港より徒歩５分／屋久島空港よりお車にて１５分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15874%2F15874.html"
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
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/7499/7499.jpg"
                  alt="屋久島いわさきホテル　＜屋久島＞"
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
                    モッチョム岳直下・自家源泉の天然温泉とリゾートステイ
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    屋久島いわさきホテル　＜屋久島＞
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.36
                    </span>
                    <span>クチコミ 146件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥22,050〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    屋久島南部・尾之間地区に佇み、モッチョム岳の荒々しい花崗岩の岩峰を間近に仰ぐプレミアムリゾート。広大な敷地内にはヤシの木が揺れ、南国情緒と山岳景観が見事に融合しています。自慢の天然温泉大浴場は、とろみのある肌触りのアルカリ性単純温泉で、湯上がりの肌がしっとりすべすべになると評判。冬の澄んだ夜空の下、露天風呂から見上げる星空は息を呑む美しさです。食事は地元の旬素材をふんだんに取り入れた和洋ビュッフェまたは本格フレンチコースから選べ、屋久島銘酒の焼酎バーも併設されています。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>名峰モッチョム岳の岩壁を背負う広大な敷地の本格大型ネイチャーリゾート</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>自家源泉の天然温泉大浴場・露天風呂と屋内温水プール完備</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>地産地消の創作バイキング＆フランス料理と雄大な庭園散策</span></li>
                  </ul>



                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 鹿児島県熊毛郡屋久島町尾之間1306</p>
                    <p>🚆 宮之浦港または屋久島空港から路線バスまたはタクシー・レンタカー</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7499%2F7499.html"
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
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8416/8416.jpg"
                  alt="田代別館　＜屋久島＞"
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
                    宮之浦川の清流沿い・創業昭和レトロの老舗割烹旅館
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    田代別館　＜屋久島＞
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.18
                    </span>
                    <span>クチコミ 137件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥11,690〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    宮之浦川のせせらぎを聞きながら静かな時間を過ごせる、屋久島を代表する老舗名旅館。白谷雲水峡へのアクセス拠点としても最適で、長年多くの登山家や著名人に愛されてきました。木造建築の温もりが漂う館内には、貴重な屋久杉の一枚板や調度品が配され、古き良き日本の旅館文化の風情が色濃く残ります。大浴場には超音波風呂が備わり、トレッキング帰りの身体を芯まで温めます。夕食は料理長が腕を振るう本格割烹会席で、冬の脂の乗った首折れサバの造りやトビウオの丸揚げ、地場野菜の炊き合わせなど滋味深い逸品が堪能できます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>清流宮之浦川のほとりに佇む創業80余年の歴史ある老舗旅館</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>屋久杉を惜しみなく使った落ち着きある和室と温かいおもてなし</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>首折れサバやトビウオをはじめとする本格郷土会席料理</span></li>
                  </ul>


            <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700 leading-relaxed">
              <span className="font-bold text-amber-900 block mb-1">宿泊者のクチコミ抜粋:</span>
              「静かな環境と景色が良く、また訪れたい部屋からの景色がよかったです。周りに何もなく車通りも少ないので、とにかく静かでした。屋久杉や白谷雲水峡は今回はいけませんでしたが、またリベンジしたいと思います。」
            </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 鹿児島県熊毛郡屋久島町宮之浦2330-1</p>
                    <p>🚆 屋久島空港より車で15分　宮之浦港より車で4分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8416%2F8416.html"
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
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/62680/62680.jpg"
                  alt="ホテル　屋久島山荘　＜屋久島＞"
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
                    安房川の絶景渓谷を眼下に望むトレッカー御用達の老舗宿
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ホテル　屋久島山荘　＜屋久島＞
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 3.45
                    </span>
                    <span>クチコミ 159件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥5,800〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    屋久島第二の港町・安房の渓谷沿いに建ち、荒川登山口（縄文杉ルート）やヤクスギランドへのアクセスに最も便利な老舗宿。客室やレストランの窓からは、清らかな安房川のエメラルドグリーンの水面と対岸の照葉樹林が美しく広がり、朝夕の景観に心が洗われます。トレッカーの受け入れ態勢が長年培われており、早朝4時台の登山バスに合わせた朝食弁当や昼食用おにぎり弁当の手配、雨具やシューズの乾燥室など細やかな配慮が行き届いています。夕食はトビウオの香ばしい塩焼きや旬の魚介を中心とした素朴で温かい郷土膳が供されます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>縄文杉登山の起点・安房地区の安房川渓谷を見下ろす抜群のロケーション</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>早朝出発トレッキング向けの朝昼弁当手配や登山靴乾燥室の充実設備</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>屋久島近海のトビウオ料理や地魚のしゃぶしゃぶを味わう和食膳</span></li>
                  </ul>


            <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700 leading-relaxed">
              <span className="font-bold text-amber-900 block mb-1">宿泊者のクチコミ抜粋:</span>
              「また泊まりに来たいと思える場所ここに泊まれて良かったです。」
            </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 鹿児島県熊毛郡屋久町安房2364-35</p>
                    <p>🚆 屋久島安房港より徒歩約１０分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F62680%2F62680.html"
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
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
                <img
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/179015/179015.jpg"
                  alt="屋久島グリーンホテル＜屋久島＞"
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
                    安房港近くのオーシャンフロント・天然鉱石大浴場と島会席
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    屋久島グリーンホテル＜屋久島＞
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.45
                    </span>
                    <span>クチコミ 105件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥9,350〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    安房の海辺に位置し、全室から太平洋の爽快な水平線と昇る朝日を望む心地よいホテル。縄文杉登山や宮之浦岳トレッキングの拠点として高いリピート率を誇ります。大浴場には天然鉱石「光明石」を用いた人工温泉が引かれており、神経痛や疲労回復に優れたやわらかな湯が登山後の筋肉疲労を優しく解きほぐします。広々とした和室やツインルームは清潔感にあふれ、ゆったりと寛げる空間。夕食は鹿児島県産黒毛和牛の陶板焼きや新鮮な地魚の盛り合わせ、旬の小鉢が並ぶ会席仕立てで、屋久島ならではの豊かな食の恵みを実感できます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>安房港から車で3分！太平洋の水平線を一望する海辺の好立地</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>光明石温泉のミネラル豊富な大浴場と旅の疲れを癒やすリラックス空間</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>黒毛和牛陶板焼きや近海刺身を盛り込んだボリューム満点の夕食</span></li>
                  </ul>


            <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700 leading-relaxed">
              <span className="font-bold text-amber-900 block mb-1">宿泊者のクチコミ抜粋:</span>
              「施設は綺麗で麦茶のサービスが嬉しい施設は綺麗でサービスもいい。麦茶が部屋に用意されているのが嬉しかった。大浴場にもあるし。朝食だけバイキングが少し寂しかった。」
            </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 鹿児島県熊毛郡屋久島町安房788-110</p>
                    <p>🚆 屋久島空港よりお車にて約１０分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179015%2F179015.html"
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
                  鹿児島県の宿に実質2,000円で泊まる賢い方法
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
              冬の屋久島・宮之浦・安房旅行でよくある質問（FAQ）
            </h2>

            <div className="space-y-4">
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 冬の屋久島トレッキングで雪や凍結はありますか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  標高600m〜1,000mの白谷雲水峡やヤクスギランドでは、強い寒波が来た際にうっすら積雪することがありますが、通常の防寒着と滑りにくいトレッキングシューズで歩行可能です。標高1,300mを超える縄文杉ルートでは12月〜1月に積雪・凍結することがあるため、事前にガイド情報や屋久島観光協会で路面状況を確認し、必要に応じて簡易軽アイゼンを用意してください。
                </p>
              </details>
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 名物「首折れサバ」は冬でも食べられますか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  はい、むしろ11月から1月は海水温が下がり、サバに上質な脂が乗る最高のシーズンです。水揚げされた当日の首折れサバは生臭さが一切なく、白身魚のような弾力と濃厚な甘みが楽しめます。天候による出漁状況に左右されるため、宿泊先や島内の名店へ事前に問い合わせ・予約しておくのが確実です。
                </p>
              </details>
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 冬の屋久島島内の移動はレンタカーが必要ですか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  島内を自由に巡るならレンタカーの利用を強くおすすめします。路線バス（種子島・屋久島交通、まつばんだ交通）も運行されていますが、冬期は本数が限られます。海岸沿いの主要道路（県道77号線・78号線）は凍結の心配がほとんどなく、冬のドライブを快適に楽しめます。白谷雲水峡へ向かう山道のみ積雪凍結時のチェーン規制にご注意ください。
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連特集セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい鹿児島県＆冬の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/kagoshima" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>鹿児島県のおすすめ観光名所＆温泉宿一覧</span>
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
