import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Calendar, ExternalLink, HelpCircle, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: '【世界遺産五箇山合掌集落の雪景色と庄川峡】2026-2027年冬の南砺・五箇山！雪見露天と堅豆腐名宿5選 | クラウドトラベル',
  description: '白銀の山里に佇む世界遺産・五箇山合掌造り集落（相倉・菅沼）の冬景色と幻想的な雪あかり！名物・五箇山堅豆腐や岩魚塩焼き、庄川峡の雪見露天風呂と富山湾の旬味覚を堪能する極上隠れ宿5選。',
  keywords: ['富山県冬旅行', '五箇山・庄川温泉郷・南砺', '冬温泉', '2026', '2027', '雪景色', '冬の味覚', '楽天トラベル', 'ふるさと納税'],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-toyama-gokayama-gassho-snow-lightup-ainokura-suganuma-stay',
  },
  openGraph: {
    title: '【世界遺産五箇山合掌集落の雪景色と庄川峡】2026-2027年冬の南砺・五箇山！雪見露天と堅豆腐名宿5選',
    description: '白銀の山里に佇む世界遺産・五箇山合掌造り集落（相倉・菅沼）の冬景色と幻想的な雪あかり！名物・五箇山堅豆腐や岩魚塩焼き、庄川峡の雪見露天風呂と富山湾の旬味覚を堪能する極上隠れ宿5選。',
    url: 'https://croud-travel.pages.dev/winter-toyama-gokayama-gassho-snow-lightup-ainokura-suganuma-stay',
    siteName: 'クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/14958/14958.jpg',
        width: 1200,
        height: 630,
        alt: '【世界遺産五箇山合掌集落の雪景色と庄川峡】2026-2027年冬の南砺・五箇山！雪見露天と堅豆腐名宿5選',
      },
    ],
  },
};

export default function WinterFeaturePage() {
  const faqJsonLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "五箇山合掌造り集落の冬のライトアップ日程は？", "acceptedAnswer": {"@type": "Answer", "text": "相倉集落や菅沼集落では、例年冬期に期間限定で夜間ライトアップイベントが開催されます。日没とともに純白の雪を被った合掌造り家屋が柔らかな光に照らし出され、息を呑む幻想的な世界が広がります。開催日や見学ルールは年ごとに異なるため、五箇山総合案内所や南砺市観光協会の最新公式発表を事前にご確認ください。"}}, {"@type": "Question", "name": "冬の五箇山観光に車で行く場合の注意点は？", "acceptedAnswer": {"@type": "Answer", "text": "12月から2月の五箇山および国道156号線は完全な雪道となります。必ずスタッドレスタイヤ（4WD推奨）を装着し、急発進・急ブレーキ・急ハンドルを避けて慎重に運転してください。降雪時は道路除雪が迅速に行われますが、吹雪による視界不良にも注意が必要です。雪道運転に不慣れな方は、JR新高岡駅から運行されている「世界遺産バス」の利用が最も安全で確実です。"}}, {"@type": "Question", "name": "五箇山と白川郷の違いは何ですか？", "acceptedAnswer": {"@type": "Answer", "text": "白川郷（荻町集落）は約100棟の合掌造りが集まる大規模な観光地で大型バスも多く賑やかです。一方、五箇山（相倉・菅沼）は規模が20棟・9棟とコンパクトで、土産物店が立ち並ぶことなく、昔ながらの山里の静けさと住民の慎ましい生活感が色濃く残っています。素朴な日本の原風景と静かな雪景色をじっくり味わいたい方には五箇山が圧倒的におすすめです。"}}]};
  const breadcrumbJsonLd = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev"}, {"@type": "ListItem", "position": 2, "name": "富山県の観光・温泉宿", "item": "https://croud-travel.pages.dev/prefectures/toyama"}, {"@type": "ListItem", "position": 3, "name": "【世界遺産五箇山合掌集落の雪景色と庄川峡】2026-2027年冬の南砺・五箇山！雪見露天と堅豆腐名宿5選", "item": "https://croud-travel.pages.dev/winter-toyama-gokayama-gassho-snow-lightup-ainokura-suganuma-stay"}]};

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
            <Link href="/prefectures/toyama" className="hover:text-cyan-700 transition">富山県の観光宿</Link>
            <ChevronRight className="w-3 h-3 text-stone-400" />
            <span className="text-stone-800 font-semibold">五箇山・庄川温泉郷・南砺冬特集</span>
          </div>
        </div>

        {/* ヒーローセクション */}
        <header className="bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-white py-12 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026-2027年 冬季限定・厳選名宿特集</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-balance">
              【世界遺産五箇山合掌集落の雪景色と庄川峡】2026-2027年冬の南砺・五箇山！雪見露天と堅豆腐名宿5選
            </h1>
            <p className="max-w-2xl mx-auto text-xs sm:text-sm text-stone-300 leading-relaxed text-pretty">
              豪雪地帯として知られる富山県南砺市。山深い庄川の渓谷沿いに佇む「五箇山（ごかやま）」は、白川郷とともに1995年にユネスコ世界文化遺産に登録された歴史ある合掌造り集落です。観光化が進んだ白川郷と比べ、五箇山の「相倉（あいのくら）集落」や「菅沼（すがぬま）集落」には今も人々の素朴な日々の暮らしが息づいており、11月下旬から1月にかけては集落全体が深々とした純白の雪に覆われます。急勾配の茅葺き屋根に積もる綿帽子のような雪、夕暮れ時に雪あかりのライトアップが灯る光景は、まさに日本昔話の世界そのもの。縄で縛っても崩れない伝統の五箇山堅豆腐や清流岩魚の骨酒、庄川峡の雪見露天風呂に癒やされる冬の極上旅へご案内します。
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                富山県 五箇山・庄川温泉郷・南砺
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
                2026-2027年冬の五箇山・庄川温泉郷・南砺が格別な理由
              </h2>
              <p className="text-xs sm:text-sm text-stone-500">
                冬ならではの絶景・温泉・美食のハイライト
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  静寂と素朴な暮らしが息づく世界遺産・五箇山合掌集落の雪景色
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  相倉集落（20棟）や菅沼集落（9棟）は、三方を険しい山に囲まれた隠れ里。冬は観光客も少なく、雪を踏みしめる音だけが響く静寂の中で、雪化粧をまとった茅葺き屋根の美しい造形美を心ゆくまで堪能できます。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  大豆の旨みが濃縮された「五箇山堅豆腐」と香ばしい「岩魚骨酒」
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  縄で縛って持ち運べるほど硬く仕込まれた伝統の五箇山豆腐。大豆の甘みが極めて濃厚で、刺身やステーキで味わうと格別の美味しさです。囲炉裏端でじっくり炭火焼きにした岩魚に熱燗の地酒を注ぐ「骨酒」は冬の至福の味覚です。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  庄川峡の雪見遊覧船と、渓谷美を眼下に望む庄川温泉郷の名湯
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  庄川の深いエメラルドグリーンの水面を静かに進む雪見遊覧船。両岸にそびえる雪山が水鏡に映り込む絶景を眺めた後は、川沿いに湧く庄川温泉郷の露天風呂へ。湯煙の向こうに広がる白銀の渓谷パノラマに心身が芯から解きほぐされます。
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
・北陸新幹線＆バス：JR新高岡駅または高岡駅より世界遺産バス（加越能バス）で「相倉口」まで約1時間、「菅沼」まで約1時間15分。
・車・高速道路：東海北陸自動車道「五箇山IC」より菅沼集落まで約2分、相倉集落まで約15分。庄川温泉郷へは北陸自動車道「砺波IC」より国道156号線経由で約15分。
・富山空港から：車・レンタカーで五箇山まで約1時間10分。

【見頃・気候・おすすめの服装】
・見頃時期：12月中旬〜2月下旬（例年12月上旬から積雪が始まり、1月〜2月は1〜2mを超える豪雪期となります）。
・気温の目安：12月〜1月の五箇山・南砺エリアは日中でも0〜4℃前後、朝晩は氷点下3〜氷点下6℃まで冷え込みます。
・服装：厚手のダウンコートや防風・防水アウター、裏起毛パンツ、厚手の手袋、ニット帽、ネックウォーマーが必須。足元は滑り止め付きの防水スノーブーツまたは長靴を必ず着用してください（路面は圧雪・凍結します）。車の場合はスタッドレスタイヤ必須です。
            </div>
          </div>
        </section>

        {/* 公式Wikipedia解説＆実写写真セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                近隣名所アーカイブ：世界遺産・五箇山合掌造り集落（相倉・菅沼）
              </h2>
              <span className="text-[11px] text-stone-400">Wikipedia公式情報連携</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/%E4%B8%96%E7%95%8C%E9%81%BA%E7%94%A3%E8%8F%85%E6%B2%BC%E5%90%88%E6%8E%8C%E9%9B%86%E8%90%BD.jpg/1280px-%E4%B8%96%E7%95%8C%E9%81%BA%E7%94%A3%E8%8F%85%E6%B2%BC%E5%90%88%E6%8E%8C%E9%9B%86%E8%90%BD.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="世界遺産・五箇山合掌造り集落（相倉・菅沼）"
                  className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  世界遺産・五箇山合掌造り集落（相倉・菅沼） の見どころと歴史
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  五箇山（ごかやま）は、富山県の南西端にある南砺市の旧平村、旧上平村、旧利賀村を合わせた地域を指す。地域内の「越中五箇山相倉集落」と「越中五箇山菅沼集落」は重要伝統的建造物群保存地区であり、世界遺産「白川郷・五箇山の合掌造り集落」を構成している。
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
              五箇山・庄川温泉郷・南砺 厳選の温泉＆リゾート宿5選
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/14958/14958.jpg"
                  alt="五箇山温泉　赤尾館"
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
                    世界遺産菅沼集落近く・囲炉裏炭火料理と五箇山温泉の老舗
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    五箇山温泉　赤尾館
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.07
                    </span>
                    <span>クチコミ 189件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥11,000〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    世界遺産・菅沼集落から車で約5分、合掌造り家屋の中でも最大級を誇る重要文化財「岩瀬家」のすぐ隣に位置する老舗温泉宿。創業当時から山里の旅人を温かく迎えてきた館内には、五箇山の民具や歴史資料が飾られ、素朴な温もりに満ちています。自慢の料理は、食事処の囲炉裏でじっくりと炭火で焼き上げる岩魚の塩焼きや、特製の五箇山堅豆腐の田楽、山菜鍋、そして岩魚を一尾丸ごと熱燗に沈めた香ばしい「骨酒」。大浴場にはナトリウム・カルシウム-硫酸塩・塩化物泉の良質な五箇山温泉が注がれ、雪見観光で冷え切った身体の芯までぽかぽかと温まります。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>国指定重要文化財「岩瀬家」の隣に佇む五箇山随一の歴史ある名旅館</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>囲炉裏端で焼き上げる清流岩魚の塩焼きと香ばしい骨酒、五箇山堅豆腐</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>やわらかな肌触りの天然五箇山温泉で冷えた身体を芯から温める湯浴み</span></li>
                  </ul>



                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 富山県南砺市西赤尾396-1</p>
                    <p>🚆 新高岡駅より世界遺産バス　白川郷五箇山行きで１時間２０分　西赤尾バス停前／五箇山ＩＣより車で５分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14958%2F14958.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/10937/10937.jpg"
                  alt="人肌の宿　川金"
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
                    庄川の清流沿い・名物鮎焼きと四季の会席料理が輝く隠れ宿
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    人肌の宿　川金
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.78
                    </span>
                    <span>クチコミ 70件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥14,300〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    五箇山へと続く庄川の下流、清流のせせらぎが心地よい河畔に佇む老舗の料理旅館。川金といえば全国にその名を知られる川魚料理の名手であり、冬期には脂が乗った寒鮎や富山湾直送の寒ブリ、氷見牛を盛り込んだ贅沢な会席料理が並びます。職人が炭火の遠火でじっくりと水分を飛ばしながら焼き上げる焼き魚は、頭から骨まで香ばしく味わえる絶品。館内の客室や大浴場からは、雪化粧した端正な日本庭園や庄川の冬景色を望むことができ、日常の喧騒から完全に解き放たれた極上の静寂と美食を堪能できます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>庄川河畔に佇む創業160年余の歴史を誇る名門料理旅館</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>生簀から揚げたてを炭火で香ばしく焼き上げる名物鮎料理と寒ブリ会席</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>雪景色を映す美しい日本庭園と庄川清流のせせらぎに包まれる上質ステイ</span></li>
                  </ul>


            <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700 leading-relaxed">
              <span className="font-bold text-amber-900 block mb-1">宿泊者のクチコミ抜粋:</span>
              「「アユ食べ放題ツアー」と私たちは呼んでいます。実際は「食べ放題」ではありませんのでご注意ください。ただ、それくらいの気持ちで10本単位でお願いして、美味しすぎて結局80本以上頂いてしまいました!呑んだ… 2026-07-26 13:47:05投稿 つづきはこち…」
            </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 富山県砺波市上中野70</p>
                    <p>🚆 北陸自動車道 砺波ＩＣより約１０分　ＪＲ城端線：砺波駅より送迎サービスあり(事前予約制)</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10937%2F10937.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/50131/50131.jpg"
                  alt="白川郷にほど近い　五箇山温泉　五箇山荘"
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
                    赤尾谷の高台・露天風呂から白銀の山並みを望む公営温泉宿
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    白川郷にほど近い　五箇山温泉　五箇山荘
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.42
                    </span>
                    <span>クチコミ 252件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥13,470〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    五箇山の豊かな自然に抱かれた高台に建ち、清潔感あふれる近代的な設備と温泉旅館の温かさを兼ね備えた人気の宿。相倉集落へも菅沼集落へもアクセスしやすく、冬の五箇山探訪の拠点として絶大な信頼を集めています。大浴場には木肌の優しい檜風呂と岩造りの露天風呂が備わり、雪がしんしんと降り積もるブナの木立を眺めながらの雪見風呂は格別の贅沢。夕食には五箇山豆腐の冷奴やお造り、合掌みそを使った陶板焼き、地元の山菜やきのこを活かした温かい鍋料理が供され、南砺の地酒とともに心温まる夜を過ごせます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>相倉・菅沼両集落の中間に位置し五箇山観光の拠点に最適なロケーション</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>檜の香る内湯と白銀のブナ林を見渡す開放的な雪見露天風呂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>五箇山豆腐や合掌みそ、富山県産ポークを味わう手作り郷土料理</span></li>
                  </ul>


            <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700 leading-relaxed">
              <span className="font-bold text-amber-900 block mb-1">宿泊者のクチコミ抜粋:</span>
              「立地、料理、部屋、温泉、すべて満足です。世界遺産から近い立地にあることで宿泊を決めました。料理も美味しく館内も綺麗で温泉も満喫でき良かったです。皇族の方もいらしたことがあるみたいでした。ひとつだけ… 2026-09-26 03:50:28投稿 つづきはこちら」
            </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 富山県南砺市田向333-1</p>
                    <p>🚆 ＪＲ　城瑞駅より車で３０分／福光ＩＣより車で３０分、又は五箇山ＩＣより車で１０分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50131%2F50131.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/187181/187181.jpg"
                  alt="庄川温泉郷　美肌の湯　となみ野庄川荘一萬亭（ＢＢＨホテルグループ）"
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
                    庄川温泉郷・美肌の湯と無料ラウンジサービスが充実のコスパ宿
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    庄川温泉郷　美肌の湯　となみ野庄川荘一萬亭（ＢＢＨホテルグループ）
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.08
                    </span>
                    <span>クチコミ 154件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥7,700〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    五箇山への玄関口・庄川温泉郷に位置し、美しい渓谷の情景と豊富な湯量を誇るリゾートホテル。庄川の清流を見下ろす露天風呂は、冬になると白い雪帽子を被った奇岩や対岸の山並みを一望できる絶景のロケーション。館内ではウェルカムドリンクや生ビールの無料サービス、湯上がりのアイスやマッサージチェアの利用など、宿泊者が快適に寛げるサービスが満載です。夕食は富山湾の海の幸や揚げたて天ぷら、季節の郷土料理が食べ放題のバイキングスタイルで、気兼ねなく温泉旅を満喫したい旅行者に愛されています。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>庄川の峡谷美を望む開放的な展望露天風呂と肌に優しい弱アルカリ性美肌泉</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>生ビールや湯上がりアイス、夜鳴きそばが楽しめる充実の無料サービス</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>リーズナブルな価格で富山湾の旬魚バイキングと温泉を満喫</span></li>
                  </ul>


            <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700 leading-relaxed">
              <span className="font-bold text-amber-900 block mb-1">宿泊者のクチコミ抜粋:</span>
              「6回目の利用、サウナ後のビールと食事が最高今回6回目の利用です、相変わらず居心地が良くてスタッフも親切 風呂の脱衣所のロッカーも新しいのが納入されていて良かった(前回は鍵の無いロッカーが多くて難儀… 2026-09-18 16:26:37投稿 つづきはこちら」
            </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 富山県砺波市庄川町庄4984-1</p>
                    <p>🚆 JR城端線砺波駅南口より車で15分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187181%2F187181.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/31820/31820.jpg"
                  alt="五箇山　旅館　よしのや＜富山県＞"
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
                    上平の山里・合掌造り集落の歴史を今に伝えるアットホーム旅館
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    五箇山　旅館　よしのや＜富山県＞
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.50
                    </span>
                    <span>クチコミ 78件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥9,500〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    五箇山の上平地区に位置し、気さくな館主家族の温かい笑顔とおもてなしに心和む山里の温泉旅館。世界遺産の菅沼集落まで車で数分という抜群の立地にあり、冬の撮影旅行や歴史散策の定宿として全国からリピーターが訪れます。夕食は女将が丹精込めて手作りする素朴な郷土膳で、裏山で採れた山菜の煮物や胡麻和え、しっかりとした歯ごたえの五箇山堅豆腐、清流で育った川魚の塩焼きなど、一口ごとに大地の生命力が染み渡ります。清潔な客室と家庭的な雰囲気の中で、五箇山の飾らない暮らしのぬくもりに浸ることができます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>五箇山・上平地区に佇みアットホームな真心のおもてなしが評判の宿</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>自家製の山菜料理や五箇山堅豆腐、山女魚の塩焼きなど手作りの滋味</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>相倉集落・菅沼集落へ好アクセスで一人旅から家族連れまで安心ステイ</span></li>
                  </ul>



                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 富山県南砺市五箇山皆葎366</p>
                    <p>🚆 JR城端駅から車にて２５分・JR高岡駅からバスで130分／東海北陸自動車道　五箇山ICから10分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31820%2F31820.html"
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
                  富山県の宿に実質2,000円で泊まる賢い方法
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
              冬の五箇山・庄川温泉郷・南砺旅行でよくある質問（FAQ）
            </h2>

            <div className="space-y-4">
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 五箇山合掌造り集落の冬のライトアップ日程は？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  相倉集落や菅沼集落では、例年冬期に期間限定で夜間ライトアップイベントが開催されます。日没とともに純白の雪を被った合掌造り家屋が柔らかな光に照らし出され、息を呑む幻想的な世界が広がります。開催日や見学ルールは年ごとに異なるため、五箇山総合案内所や南砺市観光協会の最新公式発表を事前にご確認ください。
                </p>
              </details>
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 冬の五箇山観光に車で行く場合の注意点は？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  12月から2月の五箇山および国道156号線は完全な雪道となります。必ずスタッドレスタイヤ（4WD推奨）を装着し、急発進・急ブレーキ・急ハンドルを避けて慎重に運転してください。降雪時は道路除雪が迅速に行われますが、吹雪による視界不良にも注意が必要です。雪道運転に不慣れな方は、JR新高岡駅から運行されている「世界遺産バス」の利用が最も安全で確実です。
                </p>
              </details>
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 五箇山と白川郷の違いは何ですか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  白川郷（荻町集落）は約100棟の合掌造りが集まる大規模な観光地で大型バスも多く賑やかです。一方、五箇山（相倉・菅沼）は規模が20棟・9棟とコンパクトで、土産物店が立ち並ぶことなく、昔ながらの山里の静けさと住民の慎ましい生活感が色濃く残っています。素朴な日本の原風景と静かな雪景色をじっくり味わいたい方には五箇山が圧倒的におすすめです。
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連特集セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい富山県＆冬の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/toyama" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>富山県のおすすめ観光名所＆温泉宿一覧</span>
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
