import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ChevronRight,
  ExternalLink,
  MapPin,
  Calendar,
  Sparkles,
  Star,
  CheckCircle2,
  HelpCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "白銀のJR只見線と赤べこ発祥圓蔵寺：2026-2027年冬の福島・奥会津＆柳津！開湯1200年名湯と会津地鶏名宿5選 ｜ 日本全国・旅宿クラウド",
  description: "世界を魅了する第一只見川橋梁の雪景色と赤べこ発祥の霊場「圓蔵寺」新春初詣！只見川の清流を望む柳津温泉・早戸温泉の雪見露天風呂、旨味凝縮の「会津地鶏鍋」と極上馬刺しに舌鼓を打つ奥会津の冬籠もり名宿5選。",
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-fukushima-tadami-line-yanaizu-onsen-aizujidori-stay",
  },
  openGraph: {
    title: "白銀のJR只見線と赤べこ発祥圓蔵寺：2026-2027年冬の福島・奥会津＆柳津！開湯1200年名湯と会津地鶏名宿5選",
    description: "世界を魅了する第一只見川橋梁の雪景色と赤べこ発祥の霊場「圓蔵寺」新春初詣！只見川の清流を望む柳津温泉・早戸温泉の雪見露天風呂、旨味凝縮の「会津地鶏鍋」と極上馬刺しに舌鼓を打つ奥会津の冬籠もり名宿5選。",
    url: "https://croud-travel.pages.dev/winter-fukushima-tadami-line-yanaizu-onsen-aizujidori-stay",
    siteName: "日本全国・旅宿クラウド",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "https://img.travel.rakuten.co.jp/share/HOTEL/10686/10686.jpg",
        width: 1200,
        height: 630,
        alt: "【白銀のJR只見線と赤べこ発祥圓蔵寺】2026-2027年冬の福島・奥会津＆柳津！開湯1200年名湯と会津地鶏名宿5選",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "白銀のJR只見線と赤べこ発祥圓蔵寺：2026-2027年冬の福島・奥会津＆柳津！開湯1200年名湯と会津地鶏名宿5選",
    description: "世界を魅了する第一只見川橋梁の雪景色と赤べこ発祥の霊場「圓蔵寺」新春初詣！只見川の清流を望む柳津温泉・早戸温泉の雪見露天風呂、旨味凝縮の「会津地鶏鍋」と極上馬刺しに舌鼓を打つ奥会津の冬籠もり名宿5選。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/10686/10686.jpg"],
  },
};

export const dynamic = "force-static";

export default function FeaturePage() {
  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "冬のJR只見線は豪雪で運休することはありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "只見線は豪雪地帯を走るため、猛吹雪や大雪の際には遅延や計画運休が発生することがあります。冬期に旅行される際は、JR東日本の運行情報（どこトレ）をこまめに確認し、余裕を持ったスケジュールを組むことをおすすめします。主要な温泉宿では最寄り駅からの送迎に対応しています。"
      }
    },
    {
      "@type": "Question",
      "name": "赤べこ発祥の圓蔵寺や第一只見川橋梁ビューポイントは雪道でも登れますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "圓蔵寺の境内や石段、道の駅みしま宿から第一只見川橋梁ビューポイントへの遊歩道は、除雪や踏み固めがされていますが、急な坂道や階段が凍結している場合があります。滑りにくいスノーブーツを着用し、手すりを利用するなど足元に十分注意して登ってください。"
      }
    },
    {
      "@type": "Question",
      "name": "名物「あわまんじゅう」はどこで購入できますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "圓蔵寺の門前町（柳津温泉街）にある「小池菓子舗」などの和菓子店で販売されています。粟ともち米を使った黄色いプチプチとした生地の中に上品なこし餡が入っており、店頭で蒸したての温かいものをその場で味わうのが冬の醍醐味です。お土産としても大人気です。"
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
      "item": "https://croud-travel.pages.dev/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "特集一覧",
      "item": "https://croud-travel.pages.dev/features"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "福島県の宿",
      "item": "https://croud-travel.pages.dev/prefectures/fukushima"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "【白銀のJR只見線と赤べこ発祥圓蔵寺】2026-2027年冬の福島・奥会津＆柳津！開湯1200年名湯と会津地鶏名宿5選",
      "item": "https://croud-travel.pages.dev/winter-fukushima-tadami-line-yanaizu-onsen-aizujidori-stay"
    }
  ]
};
  const touristAttractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "霊場・福満虚空藏菩薩圓蔵寺（赤べこ発祥と冬の只見川絶景）",
  "description": "柳津町（やないづまち）は、福島県会津地方（奥会津）に位置し、河沼郡に属する町。 奥会津の入り口に位置し、圓蔵寺の門前町として発展してきた。赤べこ伝説発祥の地である。",
  "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/%E5%9C%93%E8%94%B5%E5%AF%BA_-_panoramio_%282%29.jpg/1280px-%E5%9C%93%E8%94%B5%E5%AF%BA_-_panoramio_%282%29.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />

      <main className="min-h-screen bg-stone-50 pb-20">
        {/* パンくずリスト */}
        <nav
          aria-label="Breadcrumb"
          className="max-w-5xl mx-auto px-4 py-4 text-xs text-stone-500 flex items-center gap-1.5 flex-wrap"
        >
          <Link href="/" className="hover:text-stone-900 transition-colors">
            ホーム
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <Link href="/features" className="hover:text-stone-900 transition-colors">
            特集一覧
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <Link
            href="/prefectures/fukushima"
            className="hover:text-stone-900 transition-colors"
          >
            福島県
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-stone-800 font-medium truncate max-w-xs sm:max-w-md">
            【白銀のJR只見線と赤べこ発祥圓蔵寺】2026-2027年冬の福島・奥会津＆柳津！開湯1200年名湯と会津地鶏名宿5選
          </span>
        </nav>

        {/* ヒーローセクション */}
        <header className="relative bg-gradient-to-b from-stone-900 to-stone-800 text-white py-12 md:py-20 mb-10">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2.5 py-0.5 rounded-full font-semibold">
                2026-2027年 冬季厳選特集
              </span>
              <span className="bg-white/10 text-stone-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                奥会津・只見・会津柳津（福島県）
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">「白銀のJR只見線と赤べこ発祥圓蔵寺」2026-2027年冬の福島・奥会津＆柳津！開湯1200年名湯と会津地鶏名宿5選</h1>

            <div className="space-y-3 pt-3 max-w-3xl text-stone-200 text-sm sm:text-base leading-relaxed sm:leading-loose">
              <p>福島県西部に位置し、只見川の清流と険しい山々に囲まれた奥会津の玄関口・柳津町および大沼郡三島町。世界中の鉄道ファンや旅行者が「世界で最もロマンチックな雪景色の鉄道路線。」と絶賛するJR只見線は、11月から1月の冬期を迎えると、第一只見川橋梁をはじめとするアーチ橋と白銀のブナ原生林、川霧が織りなす水墨画のような幻想美の頂点を迎えます。</p>
              <p>只見川の断崖の上にそびえ立ち、会津の守り神「赤べこ」の発祥地として名高い福満虚空藏菩薩圓蔵寺（柳津虚空蔵尊）では、新春の厄除け初詣や毎年1月7日に下帯姿の男衆が麻縄をよじ登る天下の奇祭「七日堂裸まいり」が厳かに執り行われます。開湯1200年の名湯「柳津温泉」や只見川の川面を望む早戸温泉・宮下温泉の雪見露天風呂、コクと弾力あふれる「会津地鶏の水炊き鍋」や会津名物「極上馬刺し」、蒸したて熱々の柳津あわまんじゅう。静寂と温もりに包まれる奥会津の冬ごもりへと旅人を誘います。</p>
            </div>
          </div>
        </header>

        {/* なぜこの冬訪れるべきか */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-700" />
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                この冬、奥会津・只見・会津柳津を訪れるべき3つの理由
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-white rounded-xl p-5 border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-cyan-700 tracking-wider">REASON 01</span>
              <h3 className="font-bold text-stone-900 text-base">世界が絶賛する「JR只見線第一只見川橋梁」の息を呑む白銀パノラマ</h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">雪深い渓谷を縫うように走るJR只見線。道の駅みしま宿近くの第一只見川橋梁ビューポイントからは、鏡のような只見川の川面に映る鉄橋と雪化粧したキハ110系気動車の姿を望むことができ、冬ならではの静寂と奇跡の瞬間に出逢えます。</p>
            </div>
            

            <div className="bg-white rounded-xl p-5 border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-cyan-700 tracking-wider">REASON 02</span>
              <h3 className="font-bold text-stone-900 text-base">赤べこ発祥の霊場「福満虚空藏菩薩圓蔵寺」の新春初詣と七日堂裸まいり</h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">弘法大師の作と伝わる本尊を祀る日本三大虚空蔵尊の一つ・圓蔵寺。難工事を助けた赤毛の牛の伝説から「赤べこ」が生まれた聖地で、新春の初詣では家内安全や学業成就を願う参拝客で賑わいます。雪の只見川を見下ろす舞台造りの本堂は圧巻の迫力です。</p>
            </div>
            

            <div className="bg-white rounded-xl p-5 border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-cyan-700 tracking-wider">REASON 03</span>
              <h3 className="font-bold text-stone-900 text-base">開湯1200年の名湯「柳津温泉」の雪見風呂と濃厚な「会津地鶏鍋」・極上馬刺し</h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">塩化物泉の保湿効果で湯冷めしない柳津温泉や、薬効豊かな炭酸水素塩泉の早戸温泉。冬の川風を感じながら浸かる雪見露天風呂はまさに極楽。夕食には豊かな旨味としっかりした歯ごたえの「会津地鶏」鍋や、辛子味噌でいただく新鮮な馬刺しなど会津の冬の美食が並びます。</p>
            </div>
            
            </div>
          </div>
        </section>

        {/* 現地アクセス・服装ガイド */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-700" />
                アクセス・気候・おすすめの服装
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-stone-50 rounded-xl p-4 sm:p-5 border border-stone-200/80 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 border-b border-stone-200/80 pb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-700"></span>
                  <span>エリアへのアクセス</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-700 font-bold shrink-0">・</span>
                    <span><strong className="text-stone-800 font-semibold">電車：</strong>JR磐越西線「会津若松駅」よりJR只見線に乗り換え「会津柳津駅」まで約1時間、「会津宮下駅」まで約1時間20分。東京方面からは東北新幹線「郡山駅」経由で会津若松駅へアクセス。</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-700 font-bold shrink-0">・</span>
                    <span><strong className="text-stone-800 font-semibold">車：</strong>磐越自動車道「会津坂下IC」より国道252号線を経由して柳津町市街地まで約10〜15分、三島町まで約25分。東京方面から約3時間30分、仙台方面から約2時間。</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-700 font-bold shrink-0">・</span>
                    <span><strong className="text-stone-800 font-semibold">第一只見川橋梁ビューポイント：</strong>道の駅みしま宿（三島町）から遊歩道を登り徒歩約5〜10分。</span>
                  </li>
                </ul>
              </div>
              <div className="bg-stone-50 rounded-xl p-4 sm:p-5 border border-stone-200/80 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 border-b border-stone-200/80 pb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-700"></span>
                  <span>見頃・気候・おすすめの服装</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-700 font-bold shrink-0">・</span>
                    <span><strong className="text-stone-800 font-semibold">ベストシーズン：</strong>11月下旬〜1月下旬（只見線の雪景色、圓蔵寺新春初詣・七日堂裸まいり、雪見温泉の最盛期）。</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-700 font-bold shrink-0">・</span>
                    <span><strong className="text-stone-800 font-semibold">気温の目安：</strong>奥会津は全国屈指の特別豪雪地帯であり、12月〜1月の真冬は日中でも氷点下になる日が多く、朝晩は氷点下5℃〜10℃近くまで冷え込みます。</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-700 font-bold shrink-0">・</span>
                    <span><strong className="text-stone-800 font-semibold">服装のポイント：</strong>本格的な防寒対策が必須です。極厚手のダウンコート、フリース、保温吸湿インナー、防寒手袋、厚手の靴下、耳あて付きニット帽を着用してください。足元は深い雪や凍結に対応できる防水・防滑仕様のスノーブーツ（長靴等）が絶対に必要です。マイカーの場合は4WD車＋高性能スタッドレスタイヤが必須です。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Wikipedia公式連携スポットセクション */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                近隣名所アーカイブ：霊場・福満虚空藏菩薩圓蔵寺（赤べこ発祥と冬の只見川絶景）
              </h2>
              <span className="text-[11px] text-stone-400">Wikipedia公式情報連携</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/%E5%9C%93%E8%94%B5%E5%AF%BA_-_panoramio_%282%29.jpg/1280px-%E5%9C%93%E8%94%B5%E5%AF%BA_-_panoramio_%282%29.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="霊場・福満虚空藏菩薩圓蔵寺（赤べこ発祥と冬の只見川絶景）"
                  className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  霊場・福満虚空藏菩薩圓蔵寺（赤べこ発祥と冬の只見川絶景） の見どころと歴史
                </h3>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  柳津町（やないづまち）は、福島県会津地方（奥会津）に位置し、河沼郡に属する町。 奥会津の入り口に位置し、圓蔵寺の門前町として発展してきた。赤べこ伝説発祥の地である。
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
              奥会津・只見・会津柳津 厳選の温泉＆名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              楽天トラベルの最新空室・クチコミ・宿泊料金データをリアルタイム連携しています
            </p>
          </div>


            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/10686/10686.jpg"
                    alt="会津柳津温泉　瀞流の宿　かわち"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第1位
                  </div>
                </div>
                <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        只見川沿いに佇む絶景の湯宿・川面を望む露天風呂と会津美食の老舗
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.57</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      会津柳津温泉　瀞流の宿　かわち
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                      <p>只見川のほとりに佇み、窓を開ければ雄大な渓流と雪化粧した山並みが絵画のように広がる柳津温泉の名旅館。自慢の露天風呂は只見川に迫り出すように造られており、冬のひんやりとした川風を受けながら、豊富に湧出する源泉掛け流しの湯に肩まで浸かる贅沢を満喫できます。</p>
                      <p>夕食には引き締まった肉質と深いコクが自慢の「会津地鶏」を特製出汁で味わう鍋料理を中心に、会津名物の赤身馬刺しや山菜料理が美しく並び、心温まる奥会津の夜を演出してくれます。</p>
                    </div>
                    <ul className="text-xs sm:text-sm text-stone-700 space-y-2 pt-2 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>全室リバービュー！只見川の清流と雪景色を見下ろす絶好のロケーション</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>自家源泉の柳津温泉・肌をなめらかに潤すナトリウム塩化物泉の雪見露天</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>会津地鶏の水炊き鍋や特選馬刺し・季節の郷土山菜料理</span></li>
                    </ul>
                    
                <div className="bg-stone-50/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-stone-600 border border-stone-200/80 mt-2">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「温泉と料理に大満足、接客も心地よい宿温泉が大変良かったです。料理も美味しく、地元の食材を使った郷土料理は、少しずつですが、種類が多くて満足できました。部屋も広くて、洗面、トイレ、シャワーが… つづ。」"}</p>
                </div>
            
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥8,800〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10686%2F10686.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/43798/43798.jpg"
                    alt="柳津温泉　つきみが丘町民センター"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第2位
                  </div>
                </div>
                <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        只見川を見下ろす高台の公共の宿・広々とした大浴場と手頃な価格設定
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>3.94</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      柳津温泉　つきみが丘町民センター
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                      <p>柳津温泉街を見下ろす緑豊かな高台に建ち、清潔で機能的な設備と温かなサービスで親しまれる公共の温泉宿。広々とした大浴場には柳津温泉の源泉が注がれ、大きな窓から雪化粧した奥会津の山々と只見川のパノラマを眺めながらゆったりと手足を伸ばせます。</p>
                      <p>夕食は会津牛の陶板焼きや新鮮な川魚、季節の小鉢など、手作りの郷土の味が揃いコストパフォーマンスも抜群。圓蔵寺へも車で数分と観光拠点に最適な宿です。</p>
                    </div>
                    <ul className="text-xs sm:text-sm text-stone-700 space-y-2 pt-2 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>柳津の町並みと只見川を一望する高台のパノラマビュー</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>ゆったりとした天然温泉大浴場とサウナで心身をリフレッシュ</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>会津の郷土食材をふんだんに取り入れた真心のこもった和食膳</span></li>
                    </ul>
                    
                <div className="bg-stone-50/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-stone-600 border border-stone-200/80 mt-2">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「実家のようにくつろげる安心感我が家や実家の様な場所です つづ。」"}</p>
                </div>
            
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥6,650〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F43798%2F43798.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/182836/182836.jpg"
                    alt="宮下温泉　ふるさと荘"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第3位
                  </div>
                </div>
                <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        第一只見川橋梁に最も近い宮下温泉・只見川の渓谷美を望む癒やしの湯宿
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.22</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      宮下温泉　ふるさと荘
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                      <p>JR只見線の第一只見川橋梁ビューポイントがある三島町に位置し、宮下温泉の清らかな源泉をたたえる素朴で心温まる宿。只見線の撮影や冬の奥会津巡りを楽しむ旅人にとって最高の立地を誇ります。</p>
                      <p>お風呂は肌に優しいナトリウム・カルシウム-硫酸塩・塩化物泉で、入浴後もぽかぽかと温かさが持続。夕食には奥会津の山で採れた山菜の天ぷらや煮物、川魚の塩焼きなど、素朴ながら滋味豊かな郷土料理が並び、心安らぐひとときを過ごせます。</p>
                    </div>
                    <ul className="text-xs sm:text-sm text-stone-700 space-y-2 pt-2 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>JR只見線「会津宮下駅」近く！第一只見川橋梁観光の絶好の拠点</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>只見川のせせらぎが響く宮下温泉・硫酸塩・塩化物泉の温まる天然温泉</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>地元のお母さんたちが手作りする奥会津の滋味あふれる田舎料理</span></li>
                    </ul>
                    
                <div className="bg-stone-50/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-stone-600 border border-stone-200/80 mt-2">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「眺めとお風呂がサイコー 割引情報の周知を希望お風呂と部屋からの眺めサイコー福島割りの情報なく一人三千円損した感じ(_)畳替えたんですね また行きます。」"}</p>
                </div>
            
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥5,700〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182836%2F182836.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/14215/14215.jpg"
                    alt="柳津温泉　旅館　内田屋"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第4位
                  </div>
                </div>
                <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        圓蔵寺の門前に佇む老舗旅館・純和風の落ち着きと奥会津の真の味覚
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.25</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      柳津温泉　旅館　内田屋
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                      <p>圓蔵寺の参道近くに位置し、創業以来多くの参詣客や文人墨客を迎えてきた風情ある純和風旅館。門前町ならではの落ち着いた雰囲気が漂い、静かに旅の情緒を味わいたい方に最適です。</p>
                      <p>天然温泉のお風呂は清潔に保たれ、旅の疲れをやさしく癒やしてくれます。夕食には会津地鶏の焼き物や鍋、地元産そば粉を使った打ち立ての手打ちそば、冬の山菜の煮物など、女将が真心を込めて作る郷土料理が並び、どこか懐かしい温もりに包まれます。</p>
                    </div>
                    <ul className="text-xs sm:text-sm text-stone-700 space-y-2 pt-2 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>福満虚空藏菩薩圓蔵寺まで徒歩数分！新春初詣や参拝に最高の立地</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>歴史ある純和風客室と奥会津の自然石を配した天然温泉風呂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>会津地鶏や手打ちそば・冬の根菜をじっくり味わう手作り膳</span></li>
                    </ul>
                    
                <div className="bg-stone-50/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-stone-600 border border-stone-200/80 mt-2">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「美味しい食事と熱いお風呂に大満足ご飯がとても美味しかったです。でも、土地柄か、全体的に味が濃いので、その点はご注意を。子どもたち(小6・中2)が馬刺しにハマりました。あと、五穀米が程よく味があって… 投。」"}</p>
                </div>
            
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥14,850〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14215%2F14215.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/111208/111208.jpg"
                    alt="歳時記の郷　奥会津　清水屋旅館"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第5位
                  </div>
                </div>
                <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        只見川上流・金山町に佇む歳時記の宿・天然炭酸温泉郷の隠れ宿
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>0.00</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      歳時記の郷　奥会津　清水屋旅館
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                      <p>只見川をさらに遡った大沼郡金山町に位置し、奥会津の豊かな自然と伝統文化を肌で感じられる風情ある温泉旅館。周辺には全国的にも珍しい天然炭酸温泉が点在し、効能豊かな名湯巡りの拠点としても人気を集めています。</p>
                      <p>館内は木の温もりに満ちた落ち着いた空間で、冬の厳しい寒さを忘れさせてくれる温かなおもてなしが魅力。夕食には奥会津の風土が育んだ伝統野菜や山の恵みを活かした郷土会席が並び、深い安らぎを与えてくれます。</p>
                    </div>
                    <ul className="text-xs sm:text-sm text-stone-700 space-y-2 pt-2 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>奥会津金山町の大自然に抱かれた静寂のロケーション</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>天然のミネラルと炭酸ガスを豊富に含む奥会津の希少な源泉</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>地元産の赤カボチャや山菜・奥会津の伝統食を味わう贅沢</span></li>
                    </ul>
                    
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">プランにより変動</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F111208%2F111208.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
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
                  福島県の宿に実質2,000円で泊まる賢い方法
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
              冬の奥会津・只見・会津柳津旅行でよくある質問（FAQ）
            </h2>

            <div className="space-y-4">

            <div className="border-b border-stone-200 pb-4 last:border-0 last:pb-0">
              <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>冬のJR只見線は豪雪で運休することはありますか？</span>
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed pl-5">
                只見線は豪雪地帯を走るため、猛吹雪や大雪の際には遅延や計画運休が発生することがあります。冬期に旅行される際は、JR東日本の運行情報（どこトレ）をこまめに確認し、余裕を持ったスケジュールを組むことをおすすめします。主要な温泉宿では最寄り駅からの送迎に対応しています。
              </p>
            </div>
            

            <div className="border-b border-stone-200 pb-4 last:border-0 last:pb-0">
              <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>赤べこ発祥の圓蔵寺や第一只見川橋梁ビューポイントは雪道でも登れますか？</span>
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed pl-5">
                圓蔵寺の境内や石段、道の駅みしま宿から第一只見川橋梁ビューポイントへの遊歩道は、除雪や踏み固めがされていますが、急な坂道や階段が凍結している場合があります。滑りにくいスノーブーツを着用し、手すりを利用するなど足元に十分注意して登ってください。
              </p>
            </div>
            

            <div className="border-b border-stone-200 pb-4 last:border-0 last:pb-0">
              <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>名物「あわまんじゅう」はどこで購入できますか？</span>
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed pl-5">
                圓蔵寺の門前町（柳津温泉街）にある「小池菓子舗」などの和菓子店で販売されています。粟ともち米を使った黄色いプチプチとした生地の中に上品なこし餡が入っており、店頭で蒸したての温かいものをその場で味わうのが冬の醍醐味です。お土産としても大人気です。
              </p>
            </div>
            
            </div>
          </div>
        </section>

        {/* 内部リンク・関連特集セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい福島県＆冬の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/fukushima" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>福島県のおすすめ観光名所＆温泉宿一覧</span>
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
