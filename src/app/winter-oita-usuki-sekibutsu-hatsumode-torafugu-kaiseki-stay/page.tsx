import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Calendar, ExternalLink, HelpCircle, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: '国宝臼杵石仏の新春初詣と本場臼杵ふぐ：2026-2027年冬の大分・臼杵！極上厚切りてっさと名湯宿5選 | クラウドトラベル',
  description: '平安・鎌倉の祈りが息づく国宝「臼杵磨崖仏（臼杵石仏）」での新春初詣と、全国の食通が絶賛する豊後水道の最高峰「臼杵とらふぐ」！本場ならではの厚切りてっさ、白子焼き、ひれ酒と名湯を味わう冬旅厳選5宿。',
  keywords: ['大分県冬旅行', '臼杵・豊後水道・津久見', '冬温泉', '2026', '2027', '雪景色', '冬の味覚', '楽天トラベル', 'ふるさと納税'],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-oita-usuki-sekibutsu-hatsumode-torafugu-kaiseki-stay',
  },
  openGraph: {
    title: '国宝臼杵石仏の新春初詣と本場臼杵ふぐ：2026-2027年冬の大分・臼杵！極上厚切りてっさと名湯宿5選',
    description: '平安・鎌倉の祈りが息づく国宝「臼杵磨崖仏（臼杵石仏）」での新春初詣と、全国の食通が絶賛する豊後水道の最高峰「臼杵とらふぐ」！本場ならではの厚切りてっさ、白子焼き、ひれ酒と名湯を味わう冬旅厳選5宿。',
    url: 'https://croud-travel.pages.dev/winter-oita-usuki-sekibutsu-hatsumode-torafugu-kaiseki-stay',
    siteName: 'クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/74722/74722.jpg',
        width: 1200,
        height: 630,
        alt: '【国宝臼杵石仏の新春初詣と本場臼杵ふぐ】2026-2027年冬の大分・臼杵！極上厚切りてっさと名湯宿5選',
      },
    ],
  },
};

export default function WinterFeaturePage() {
  const faqJsonLd = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "臼杵のふぐが他の地域のふぐと違う理由は何ですか？", "acceptedAnswer": {"@type": "Answer", "text": "最大の特長は「鮮度」と「厚さ」です。一般的な下関などのふぐ刺しは、身を1〜2日寝かせてアミノ酸を引き出し薄く引きますが、臼杵では豊後水道で揚がった活きの良いとらふぐを当日さばき、身のコリコリとした強い弾力を楽しむために通常の2〜3倍の厚みで引きます。さらに、ポン酢に小ネギではなく「カボス」と特産のネギをたっぷりと巻いて食べるのも臼杵独特の贅沢な食文化です。"}}, {"@type": "Question", "name": "臼杵石仏の拝観所要時間と冬の見どころは？", "acceptedAnswer": {"@type": "Answer", "text": "国宝臼杵石仏は4つの群（ホキ石仏第1群・第2群、山王石仏、古園石仏）に分かれており、遊歩道を一周する拝観所要時間は約40分〜1時間です。冬の早朝は観光客も少なく、朝霧や薄雪の中に佇む大日如来像の荘厳な姿を静かに拝観できます。段差や石段があるため歩きやすいスニーカーでの拝観がおすすめです。"}}, {"@type": "Question", "name": "臼杵観光の際に宿泊は臼杵市内と大分・別府のどちらが良いですか？", "acceptedAnswer": {"@type": "Answer", "text": "夜に本格的な臼杵ふぐ会席とひれ酒を心ゆくまで堪能したい方は、臼杵市内の料亭旅館や駅前ホテルへの宿泊が断然おすすめです。翌日に大型温泉リゾートや地獄めぐりも楽しみたい場合は、臼杵から特急で30〜45分の大分市内や別府温泉に宿を取り、夕方に臼杵へ足を伸ばすプランも人気があります。"}}]};
  const breadcrumbJsonLd = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev"}, {"@type": "ListItem", "position": 2, "name": "大分県の観光・温泉宿", "item": "https://croud-travel.pages.dev/prefectures/oita"}, {"@type": "ListItem", "position": 3, "name": "【国宝臼杵石仏の新春初詣と本場臼杵ふぐ】2026-2027年冬の大分・臼杵！極上厚切りてっさと名湯宿5選", "item": "https://croud-travel.pages.dev/winter-oita-usuki-sekibutsu-hatsumode-torafugu-kaiseki-stay"}]};

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
            <Link href="/prefectures/oita" className="hover:text-cyan-700 transition">大分県の観光宿</Link>
            <ChevronRight className="w-3 h-3 text-stone-400" />
            <span className="text-stone-800 font-semibold">臼杵・豊後水道・津久見冬特集</span>
          </div>
        </div>

        {/* ヒーローセクション */}
        <header className="bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-white py-12 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026-2027年 冬季限定・厳選名宿特集</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-balance">「国宝臼杵石仏の新春初詣と本場臼杵ふぐ」2026-2027年冬の大分・臼杵！極上厚切りてっさと名湯宿5選</h1>
            <p className="max-w-2xl mx-auto text-xs sm:text-sm text-stone-300 leading-relaxed text-pretty">
              大分県南部、豊後水道に面した歴史ある城下町・臼杵（うすき）。冬の11月から1月、全国から熱烈な食通がこぞってこの町を目指す最大の理由、それが「本場・臼杵ふぐ」です。豊後水道の荒波と早い潮流に揉まれて育った最高級のとらふぐを、熟練の職人が当日締めて豪快に引く厚切りのてっさ（ふぐ刺し）は、通常のふぐ刺しとは別次元の弾力と甘みを誇り、「噛むほどに旨みが爆発する」と称賛されます。さらに町外れの深山には、平安時代後期から鎌倉時代の祈りが岩肌に刻まれた日本彫刻の至宝・国宝「臼杵磨崖仏（臼杵石仏）」が鎮座。雪をまとった古仏群への新春初詣で心を洗われ、白子焼きやひれ酒に酔いしれ、別府や六ヶ迫の名湯で身体を温める至高の冬旅をお届けします。
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                大分県 臼杵・豊後水道・津久見
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
                2026-2027年冬の臼杵・豊後水道・津久見が格別な理由
              </h2>
              <p className="text-xs sm:text-sm text-stone-500">
                冬ならではの絶景・温泉・美食のハイライト
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  全国の食通が唸る豊後水道の最高峰「本場・臼杵とらふぐ」の厚切りてっさ
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  臼杵のふぐ刺しは、他地域のように寝かせて薄引きにするのではなく、水揚げ当日に締めた極めて鮮度の高いとらふぐを大胆に厚切りで提供します。跳ね返すような歯ごたえと噛むほどに溢れ出す芳醇な甘みは、本場臼杵でしか体験できない奇跡の味覚です。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  平安・鎌倉の祈りが息づく国宝「臼杵磨崖仏」の新春初詣と厳かな雪景色
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  岩肌に彫られた59体もの石仏群は、日本の磨崖仏として第1号の国宝に指定された至宝。特に古園石仏の大日如来像の気品ある微笑みは世界的な傑作と称されます。冬の凛とした冷気と薄雪に包まれた石仏群への新春参拝は、特別な清涼感をもたらします。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  江戸時代の面影を残す「二王座歴史の道」と名湯での癒やし
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  白壁の土蔵や石畳、武家屋敷が今も残る城下町・臼杵。冬の静かな小路をそぞろ歩き、味噌や醤油の蔵元を訪ねる風情ある散策が楽しめます。湯量豊富な別府温泉や近隣の秘湯・六ヶ迫温泉へも好アクセスで、極上の湯浴みが叶います。
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
・電車：JR大分駅よりJR日豊本線特急「にちりん」「ソニック」でJR臼杵駅まで約30分。小倉駅より特急で約1時間50分、博多駅より特急で約2時間30分（大分駅経由）。
・車：東九州自動車道「臼杵IC」より臼杵市街地・城下町まで約10分、臼杵石仏まで約5分。
・大分空港から：空港特急バス「エアライナー」で大分駅まで約1時間、JR日豊本線乗り換え。

【見頃・気候・おすすめの服装】
・見頃時期：11月〜2月（とらふぐに脂が乗り、白子が大きく肥大化する冬期が年間最盛期です）。
・気温の目安：臼杵市は豊後水道に面し比較的温暖ですが、12月〜1月の平均気温は日中8〜12℃、朝晩は1〜4℃前後まで下がります。
・服装：日中の城下町散策はコートやウールジャケットで快適に過ごせますが、朝晩の臼杵石仏拝観や海沿いは冷え込むため、マフラーや手袋、保温性のあるインナーをご用意ください。
            </div>
          </div>
        </section>

        {/* 公式Wikipedia解説＆実写写真セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                近隣名所アーカイブ：国宝・臼杵磨崖仏（平安・鎌倉の奇跡の石仏群）
              </h2>
              <span className="text-[11px] text-stone-400">Wikipedia公式情報連携</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Usuki_Stone_Buddhas.jpg/1280px-Usuki_Stone_Buddhas.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="国宝・臼杵磨崖仏（平安・鎌倉の奇跡の石仏群）"
                  className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  国宝・臼杵磨崖仏（平安・鎌倉の奇跡の石仏群） の見どころと歴史
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  臼杵磨崖仏（うすきまがいぶつ）は、大分県臼杵市にある磨崖仏。一般には臼杵石仏（うすきせきぶつ）の名で知られている。臼杵八ヶ所霊場第一番札所。 1952年（昭和27年）に国の特別史跡に指定され、1995年（平成7年）には、磨崖仏として日本初、彫刻として九州初の国宝に指定された。臼杵磨崖仏は全4群61躯で構成され、そのうち59躯が1995年に、残りの2躯が2017年に追加で国宝に指定されている。
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
              臼杵・豊後水道・津久見 厳選の温泉＆リゾート宿5選
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/74722/74722.jpg"
                  alt="御宿・料亭　春光園"
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
                    創業明治・臼杵を代表する元祖ふぐ料理の老舗料亭旅館
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    御宿・料亭　春光園
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 5.00
                    </span>
                    <span>クチコミ 21件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥36,400〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    臼杵の城下町の一角に佇み、皇族や政財界の要人、文人墨客を迎え入れてきた名門料亭旅館。門をくぐると手入れの行き届いた日本庭園が出迎え、静謐で品格ある空間が広がります。春光園の真骨頂は、本場臼杵のふぐ料理の真髄を極めた会席コース。大皿に菊花のように美しく並べられた厚切りのてっさは、噛みしめるごとに弾けるような歯ごたえと甘みが口いっぱいに広がり、炭火で香ばしく焼き上げた濃厚な白子焼きや熱々のひれ酒が冬の幸福感を極限まで高めてくれます。歴史ある和室で庭を眺めながら味わう美食は、一生の思い出に残る贅沢です。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>臼杵の歴史とともに歩む明治創業の格式ある料亭旅館</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>豊後水道の最高級天然・養殖とらふぐを贅沢に使った本場ふぐフルコース</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>数寄屋造りの風情ある客室と丹精込めた坪庭を眺める至福のひととき</span></li>
                  </ul>



                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 大分県臼杵市祇園西区３組</p>
                    <p>🚆 ＪＲ　臼杵駅よりお車にて５分／徒歩にて１５分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F74722%2F74722.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/84957/84957.jpg"
                  alt="クレドホテル臼杵"
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
                    JR臼杵駅徒歩1分・天然鉱石大浴場と城下町散策のベスト拠点
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    クレドホテル臼杵
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 3.75
                    </span>
                    <span>クチコミ 309件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥6,300〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    JR臼杵駅のロータリーに面し、鉄道利用の旅行者にとってこれ以上ない利便性を誇るハイクオリティホテル。館内は清潔で洗練されたモダンデザインで統一され、大浴場には天然鉱石「光明石」を採用した人工温泉が備わっており、臼杵石仏巡りや城下町歩きで冷えた身体を心地よく温めてくれます。市内の老舗ふぐ料亭との連携プランも用意されており、夜は名店でふぐ会席を堪能し、宿ではゆったりと大浴場と快適なベッドで寛ぐスマートな滞在が可能。朝食には大分名物のとり天や地場野菜が並びます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>JR臼杵駅の改札を出てすぐの抜群のアクセスと快適な最新設備</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>光明石温泉のミネラル豊富な大浴場と清潔感あふれるモダン客室</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>市内名門ふぐ料亭の提携プランや大分名物とり天の朝食バイキング</span></li>
                  </ul>


            <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700 leading-relaxed">
              <span className="font-bold text-amber-900 block mb-1">宿泊者のクチコミ抜粋:</span>
              「駅近で清潔な部屋と大浴場、食事も大満足駅前で立地良しで、清潔なお部屋で、大浴場もありました。夕飯と朝食も美味しく、良いホテルでした。他の画像や。」
            </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 大分県臼杵市海添2573-10</p>
                    <p>🚆 ＪＲ臼杵駅より徒歩1分/臼杵港（フェリー乗り場）より、車で3分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F84957%2F84957.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/75266/75266.jpg"
                  alt="ホテルニューうすき"
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
                    臼杵市街地中心・ビジネスから観光まで安心の老舗シティホテル
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ホテルニューうすき
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 3.90
                    </span>
                    <span>クチコミ 240件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥6,900〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    臼杵の市街地中心部に位置し、白壁の町並みが美しい「二王座歴史の道」や臼杵城跡へも気軽に歩いて散策できる便利なホテル。大型無料駐車場を完備しているため、レンタカーやマイカーで九州を巡るドライブ旅の拠点としても重宝されています。客室はゆったりとした広さが確保され、旅の荷物を広げても快適。館内の食事処では、手頃な価格で本場臼杵のふぐ料理や豊後水道の新鮮な関アジ・関サバを取り入れた御膳料理が楽しめ、一人旅からビジネス、家族旅行まで幅広いニーズに応えてくれます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>二王座歴史の道や臼杵城跡まで徒歩圏の観光に便利なロケーション</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>広々とした客室と落ち着いた館内、充実した無料駐車場完備</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>館内レストランでのふぐ御膳や地場海鮮料理の手頃なプラン</span></li>
                  </ul>


            <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700 leading-relaxed">
              <span className="font-bold text-amber-900 block mb-1">宿泊者のクチコミ抜粋:</span>
              「夕食の海の幸会席が豪華で大満足ホテルは決して新しくは無いので、設備的には普通だと思う。でもお値段もリーズナブルなので私としては全く問題なし。今回は朝夕食付きにしたので、大満足だったのは夕食(海の幸。」
            </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 大分県臼杵市千代田区1組</p>
                    <p>🚆 上臼杵駅よりお車で２分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75266%2F75266.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/149129/149129.jpg"
                  alt="ホテルルートイン佐伯駅前"
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
                    豊後水道の海の玄関口・佐伯駅前で人工温泉大浴場完備
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ホテルルートイン佐伯駅前
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.32
                    </span>
                    <span>クチコミ 686件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥6,300〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    臼杵の南隣、豊後水道の新鮮な魚介が集まる佐伯（さいき）駅の真正面に位置する安心のブランドホテル。臼杵駅へは特急列車でわずか15分、車でも約25分とアクセス良好で、臼杵のふぐと佐伯の寿司・海鮮を合わせて楽しむ贅沢な旅の拠点として人気を集めています。館内には旅人の疲れを芯から癒やすラジウム人工温泉の大浴場を完備。清潔な客室には快適なベッドとWi-Fiが整い、翌朝にはヨーロッパ直輸入の焼きたてパンや具だくさんの和洋バイキングが無料で提供されます。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>JR佐伯駅の目の前！臼杵まで特急で約15分の好立地</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>ラジウム人工温泉大浴場「旅人の湯」で旅の疲れをしっかりリフレッシュ</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>焼きたてパンやご当地惣菜が並ぶ大好評の無料朝食バイキング</span></li>
                  </ul>


            <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700 leading-relaxed">
              <span className="font-bold text-amber-900 block mb-1">宿泊者のクチコミ抜粋:</span>
              「清潔で使いやすく、温泉も満喫できた清潔で使いやすかったです。温泉もあってよかったです。」
            </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 大分県佐伯市駅前2-6-40</p>
                    <p>🚆 日豊本線　佐伯駅より徒歩にて約１分</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149129%2F149129.html"
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/44985/44985.jpg"
                  alt="ホテル　金水苑"
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
                    佐伯駅徒歩3分・豊後水道の新鮮魚介レストランと上質ステイ
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ホテル　金水苑
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-stone-600">
                    <span className="flex items-center text-amber-500 font-bold text-sm">
                      ★ 4.05
                    </span>
                    <span>クチコミ 932件</span>
                    <span className="text-stone-400">|</span>
                    <span className="font-semibold text-cyan-900">¥5,500〜</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    佐伯駅から徒歩3分の好立地に建ち、地元でも慶事や会食に利用される格式あるシティ＆リゾートホテル。臼杵の石仏やふぐ料理探訪の拠点としても多くの観光客に選ばれています。自慢の和食レストラン「番匠亭」では、豊後水道で水揚げされた活きの良い旬魚の姿造りや握り寿司、大分県産豊後牛の鉄板焼きなど、海の幸と山の幸を贅沢に取り入れた本格料理が堪能できます。ゆったりとした広さの客室は落ち着きのある色調で整えられ、細やかなホスピタリティが快適な冬の滞在を約束します。
                  </p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    <li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>JR佐伯駅から徒歩3分！豊後水道の海の幸を味わい尽くす老舗ホテル</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>館内和食処「番匠亭」で味わう旬の地魚会席と豊後牛ステーキ</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-600 font-bold">✓</span><span>落ち着いたインテリアの上質客室と丁寧なフロントサービス</span></li>
                  </ul>


            <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700 leading-relaxed">
              <span className="font-bold text-amber-900 block mb-1">宿泊者のクチコミ抜粋:</span>
              「スタッフの対応が良く、佐伯を満喫できたホテルでの食事はしてないですが、スタッフの対応が良く気持良かったです。佐伯は食事も美味しく満喫しました。」
            </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-0.5">
                    <p>📍 大分県佐伯市駅前2-4-13</p>
                    <p>🚆 ＪＲ日豊本線　佐伯駅より徒歩約３分。佐伯ICより車で約15分。</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44985%2F44985.html"
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
                  大分県の宿に実質2,000円で泊まる賢い方法
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
              冬の臼杵・豊後水道・津久見旅行でよくある質問（FAQ）
            </h2>

            <div className="space-y-4">
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 臼杵のふぐが他の地域のふぐと違う理由は何ですか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  最大の特長は「鮮度」と「厚さ」です。一般的な下関などのふぐ刺しは、身を1〜2日寝かせてアミノ酸を引き出し薄く引きますが、臼杵では豊後水道で揚がった活きの良いとらふぐを当日さばき、身のコリコリとした強い弾力を楽しむために通常の2〜3倍の厚みで引きます。さらに、ポン酢に小ネギではなく「カボス」と特産のネギをたっぷりと巻いて食べるのも臼杵独特の贅沢な食文化です。
                </p>
              </details>
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 臼杵石仏の拝観所要時間と冬の見どころは？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  国宝臼杵石仏は4つの群（ホキ石仏第1群・第2群、山王石仏、古園石仏）に分かれており、遊歩道を一周する拝観所要時間は約40分〜1時間です。冬の早朝は観光客も少なく、朝霧や薄雪の中に佇む大日如来像の荘厳な姿を静かに拝観できます。段差や石段があるため歩きやすいスニーカーでの拝観がおすすめです。
                </p>
              </details>
              <details className="group border border-stone-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden bg-stone-50/50">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-stone-900 text-xs sm:text-sm">
                  <span>Q. 臼杵観光の際に宿泊は臼杵市内と大分・別府のどちらが良いですか？</span>
                  <span className="transition group-open:-rotate-180 text-stone-400">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-3">
                  夜に本格的な臼杵ふぐ会席とひれ酒を心ゆくまで堪能したい方は、臼杵市内の料亭旅館や駅前ホテルへの宿泊が断然おすすめです。翌日に大型温泉リゾートや地獄めぐりも楽しみたい場合は、臼杵から特急で30〜45分の大分市内や別府温泉に宿を取り、夕方に臼杵へ足を伸ばすプランも人気があります。
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連特集セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい大分県＆冬の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/oita" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>大分県のおすすめ観光名所＆温泉宿一覧</span>
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
