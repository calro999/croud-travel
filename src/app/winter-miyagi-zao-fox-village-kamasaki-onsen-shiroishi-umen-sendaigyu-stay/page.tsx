import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight, 
  Clock, ArrowRight, Utensils, Star, Compass, Train, ShieldCheck 
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【冬毛モフモフの蔵王キツネ村と開湯600年鎌先温泉の薬湯】2026-2027年11-12月初冬の宮城・白石！名物白石温麺と極上仙台牛会席・木造湯治宿の雪見風呂名宿5選',
  description: '11月〜12月に冬毛へと生え変わり最もモフモフで愛らしい姿を見せる世界的人気スポット「宮城蔵王キツネ村」！南蔵王の麓、開湯600年の歴史を誇る「奥羽の薬湯」鎌先温泉の風情ある木造旅館群で心身を癒やす旅。油を使わず胃腸に優しい伝統名物「白石温麺（うーめん）」と、きめ細やかなサシがとろける最高峰仙台牛を味わう初冬の厳選名宿5選。',
  keywords: '宮城県, 宮城蔵王キツネ村, 温泉, 11月旅行, 12月旅行, 冬休み旅行, 初冬旅行, 楽天トラベル, ふるさと納税',
  openGraph: {
    title: '【冬毛モフモフの蔵王キツネ村と開湯600年鎌先温泉の薬湯】2026-2027年11-12月初冬の宮城・白石！名物白石温麺と極上仙台牛会席・木造湯治宿の雪見風呂名宿5選',
    description: '11月〜12月に冬毛へと生え変わり最もモフモフで愛らしい姿を見せる世界的人気スポット「宮城蔵王キツネ村」！南蔵王の麓、開湯600年の歴史を誇る「奥羽の薬湯」鎌先温泉の風情ある木造旅館群で心身を癒やす旅。油を使わず胃腸に優しい伝統名物「白石温麺（うーめん）」と、きめ細やかなサシがとろける最高峰仙台牛を味わう初冬の厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-miyagi-zao-fox-village-kamasaki-onsen-shiroishi-umen-sendaigyu-stay/',
    type: 'article',
    siteName: 'クラウドトラベル',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-miyagi-zao-fox-village-kamasaki-onsen-shiroishi-umen-sendaigyu-stay/',
  },
};

export default function WinterFeaturePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* 構造化データ: FAQ & Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
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
                  "name": "特集一覧",
                  "item": "https://croud-travel.pages.dev/features/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "【冬毛モフモフの蔵王キツネ村と開湯600年鎌先温泉の薬湯】2026-2027年11-12月初冬の宮城・白石！名物白石温麺と極上仙台牛会席・木造湯治宿の雪見風呂名宿5選",
                  "item": "https://croud-travel.pages.dev/winter-miyagi-zao-fox-village-kamasaki-onsen-shiroishi-umen-sendaigyu-stay/"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
        {
          "@type": "Question",
          "name": "蔵王キツネ村でキツネを触ったり抱っこすることはできますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "放し飼いエリア内ではキツネに直接触れることは噛まれる危険があるため禁止されています。ただし、専用の「抱っこ体験」（実施期間やキツネの体調により時間が指定されます）に参加すれば、スタッフのサポートのもとで専用の上着を着用してモフモフのキツネを優しく抱っこして記念撮影が楽しめます。"
          }
        },
        {
          "@type": "Question",
          "name": "白石温麺（うーめん）とは通常の素麺と何が違うのですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "一般的な素麺は麺を伸ばす際に表面に植物油を塗りますが、白石温麺は油を一切使わず小麦粉と塩水のみで練り上げて乾燥させます。そのため油が酸化せず、胃腸に極めて優しく消化が良いのが特徴です。長さも約9cmと短く、小さなお子様やお年寄りでも食べやすい白石の伝統健康食です。"
          }
        },
        {
          "@type": "Question",
          "name": "11月・12月に車でキツネ村や鎌先温泉へ行く場合、冬用タイヤは必要ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "キツネ村は標高約600mの山間に位置するため、11月中旬以降は雪が降ったり早朝・日陰で路面が凍結することがあります。11月中旬以降にお車でアクセスする場合は、必ずスタッドレスタイヤの装着をお願いします。ノーマルタイヤでの冬期の山道走行は大変危険です。"
          }
        }
              ]
            }
          ])
        }}
      />

      {/* パンくずリスト */}
      <div className="bg-slate-100 border-b border-slate-200 text-xs text-slate-500 py-2.5 px-4">
        <div className="max-w-5xl mx-auto flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-slate-800 transition">ホーム</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href="/features/" className="hover:text-slate-800 transition">特集一覧</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-medium truncate max-w-xs">【冬毛モフモフの蔵王キツネ村と開湯600年鎌先温泉の薬湯】2026-2027年11-12月初冬の宮城・白石！名物白石温麺と極上仙台牛会席・木造湯治宿の雪見風呂名宿5選</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white py-14 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026-2027年 11月〜12月初冬の厳選狙い目特集</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
            【冬毛モフモフの蔵王キツネ村と開湯600年鎌先温泉の薬湯】2026-2027年11-12月初冬の宮城・白石！名物白石温麺と極上仙台牛会席・木造湯治宿の雪見風呂名宿5選
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            11月〜12月に冬毛へと生え変わり最もモフモフで愛らしい姿を見せる世界的人気スポット「宮城蔵王キツネ村」！南蔵王の麓、開湯600年の歴史を誇る「奥羽の薬湯」鎌先温泉の風情ある木造旅館群で心身を癒やす旅。油を使わず胃腸に優しい伝統名物「白石温麺（うーめん）」と、きめ細やかなサシがとろける最高峰仙台牛を味わう初冬の厳選名宿5選。
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        
        {/* 導入解説 */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-600 shrink-0" />
            <span>初冬にこの地を訪れるべき理由と風土の魅力</span>
          </h2>
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
            南蔵王の雄大な山裾に抱かれた宮城県白石市。東北の厳しい冬の訪れとともに、世界中から熱い視線を集める唯一無二の動物の楽園が『宮城蔵王キツネ村』です。自然に近い広大な森の中にキタキツネ、銀ギツネ、青ギツネ、プラチナギツネ、ホッキョクギツネなど100頭を超えるキツネたちが自由に暮らしており、専用の散策路を歩けば、足元をすり抜けるキツネたちの愛らしい仕草を間近に観察できます。キツネの最大の魅力が花開くのが、まさに11月から12月にかけての初冬。寒冷地で冬を越すために毛が生え変わり、夏場のスリムな姿から一変して、全身がふんわりと丸みを帯びた極上の『冬毛（モフモフ毛）』へと仕上がります。雪が舞い始める静かな森の中で、丸くなって眠るキツネたちの姿や、冬毛を揺らしながらじゃれ合う姿は息を呑むほど愛らしく、写真愛好家や海外旅行者からも絶賛されています。キツネたちとの心温まる出会いを満喫した後は、白石の奥座敷として開湯600年の歴史を誇る『鎌先温泉（かまさきおんせん）』へ。戦国時代の武将が傷を癒やしたと伝わることから『奥羽の薬湯』『傷の鎌先』と称されるこの温泉街は、山あいの小川沿いに白壁や木造数寄屋造りの老舗旅館が寄り添うように立ち並び、まるで昔の湯治場に迷い込んだかのような風情が息づいています。塩化物泉と硫酸塩泉が混ざり合う茶褐色のにごり湯や清らかな源泉は、湯上がり後も芯からポカポカと温かさが持続。食事には、油を一切使わずに白石の清らかな水と小麦だけで製麺される伝統名物『白石温麺（うーめん）』の優しい喉越しと、全国肉用牛枝肉共励会で名誉賞を受賞する最高峰ブランド『仙台牛』の霜降りすき焼きを堪能。愛らしい動物たちと本格的な湯治文化が融合した、心洗われる初冬の白石・蔵王旅がここにあります。
          </p>
          
          <div className="pt-4 space-y-3">
            <h3 className="text-sm md:text-base font-bold text-slate-900">
              ▼ 本テーマが11〜12月の旅におすすめな3大ポイント
            </h3>
            <div className="space-y-3">
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                1
              </span>
              <span>世界が注目！11〜12月限定「冬毛モフモフ」の蔵王キツネ村で奇跡の癒やし体験</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              冬の寒さに備えて毛が密集し、一年で最も丸々と愛らしい冬毛姿になるベストシーズン。100頭以上のキツネが放し飼いされる自然林を歩き、冬ならではのモフモフな姿に間近で出会えます。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                2
              </span>
              <span>開湯600年「奥羽の薬湯」鎌先温泉！木造建築美と茶褐色のにごり湯治風呂</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              農民が鎌の先で掘り当てた伝説に由来する鎌先温泉。歴史ある木造数寄屋造りの旅館群が軒を連ね、鉄分や塩分を含む良質な源泉が冷えた体を芯から包み込みます。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                3
              </span>
              <span>胃腸に優しい伝統「白石温麺」ととろける最高峰ブランド「仙台牛」の饗宴</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              油を使わず9cmの短さで製麺される400年の伝統食・白石温麺の優しい味わいと、A5・B5ランクのみに許される最高峰黒毛和牛「仙台牛」の濃厚な霜降りを贅沢に味わえます。
            </p>
          </div>
            </div>
          </div>
        </section>

        {/* Wikipedia連携 観光地紹介 */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-rose-600 shrink-0" />
              <span>近隣の必見名所：宮城蔵王キツネ村</span>
            </h2>
            <span className="text-[11px] text-slate-400">Wikipedia・公式解説連携</span>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative h-52 md:h-60 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Kitsune_mura_H26Dec13.JPG/1280px-Kitsune_mura_H26Dec13.JPG?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="冬毛モフモフの奇跡の楽園・宮城蔵王キツネ村（100頭以上のキツネが放し飼い・南蔵王の大自然）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="md:col-span-7 space-y-2.5">
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                冬毛モフモフの奇跡の楽園・宮城蔵王キツネ村（100頭以上のキツネが放し飼い・南蔵王の大自然）
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                宮城蔵王キツネ村（みやぎざおうキツネむら）は、宮城県白石市北西部にある、キツネの展示を中心とした民間の動物園である。しばしば「蔵王キツネ村」や「キツネ村」と省略されて呼ばれる。テレビCM等では「みやぎ蔵王 きつね村」の表記も用いられた。...
              </p>
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-200/60 text-[11px] md:text-xs text-amber-900 leading-relaxed">
                <span className="font-bold block mb-0.5">💡 周辺観光のポイント</span>
                各宿泊施設からアクセス良好。早朝や夕暮れ時は観光客が落ち着き、初冬ならではの静寂と美しい景色を心ゆくまで堪能できます。
              </div>
            </div>
          </div>
        </section>

        {/* 楽天API厳選宿 5選 */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3 flex items-end justify-between">
            <div>
              <span className="text-xs font-bold text-rose-600 tracking-wider block">RAKUTEN TRAVEL RANKING</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                初冬を満喫する厳選名宿 5選
              </h2>
            </div>
            <span className="text-xs text-slate-500">リアルタイムAPI連携データ</span>
          </div>

          <div className="space-y-6">
        {/* 宿カード 1: 鎌先温泉　最上屋旅館＜宮城県＞ */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第1位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              開湯600年の歴史が宿る自炊湯治と本館！奥羽の薬湯をそのまま楽しむ
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.00</span>
              <span className="text-slate-400">（クチコミ 189件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5964/5964.jpg"
                  alt="鎌先温泉　最上屋旅館＜宮城県＞"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  鎌先温泉　最上屋旅館＜宮城県＞
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>宮城県白石市福岡蔵本字鎌先1-35</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>仙台宮城ICより白石IC経由にて車で45分。新幹線白石蔵王駅下車タクシーで15分。</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>鎌先温泉の入口に佇み、古き良き湯治文化の温もりを現代に受け継ぐ名宿。木造のどこか懐かしい空間で、日頃の喧騒を忘れて静かに心身を休めることができます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>お風呂には鉄分を含み茶褐色に輝く名湯が注がれ、神経痛や冷え性に効能豊かな『傷の鎌先』の薬効を肌でダイレクトに実感できます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は地元宮城の食材をふんだんに取り入れた手作りの田舎風会席。白石温麺の温かい椀や地場野菜の煮物など、素朴で温かいおもてなしが心に沁みます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥4,950</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5964%2F5964.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-95"
                  >
                    <span>空室・プランを確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿カード 2: パシフィックホテル白石 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第2位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              白石駅目の前の好立地！蔵王キツネ村観光の拠点に最適な快適ステイ
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">3.77</span>
              <span className="text-slate-400">（クチコミ 1204件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/9301/9301.jpg"
                  alt="パシフィックホテル白石"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  パシフィックホテル白石
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>宮城県白石市堂場前45-7</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>JR白石駅より徒歩１分／新幹線白石蔵王駅より車で５分／東北自動車道白石ICより車で１０分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>JR東北本線・白石駅西口から徒歩わずか1分という抜群のアクセスを誇るホテル。ビジネスから観光まで幅広く対応し、清潔感あふれる客室が旅の疲れを癒やします。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>白石市内での円盤状のグルメ散策や白石城址の観光、蔵王キツネ村行きのバス乗り場へも至近。周辺には地元で人気の飲食店も多数点在しています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>リーズナブルな価格設定ながら、充実したアメニティと親切なフロントサービスで、アクティブに観光を楽しみたい旅行者に選ばれています。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥4,800</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9301%2F9301.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-95"
                  >
                    <span>空室・プランを確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿カード 3: ベネシアンホテル白石蔵王 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第3位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              東北新幹線・白石蔵王駅直結の機能美！宮城蔵王の玄関口に佇む拠点
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.33</span>
              <span className="text-slate-400">（クチコミ 1839件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/20502/20502.jpg"
                  alt="ベネシアンホテル白石蔵王"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  ベネシアンホテル白石蔵王
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>宮城県白石市旭町1-2-1</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>白石蔵王駅徒歩0分・白石駅徒歩17分／新幹線利用仙台駅14分・福島駅12分／仙台空港へ電車53分／白石ICから車13分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>新幹線を降りてすぐチェックインできる抜群の利便性を備えたホテル。蔵王エコーラインやキツネ村へのドライブ拠点としても絶好のロケーションです。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>館内は落ち着いた色調で統一され、ゆったりとしたベッドと広めのデスクを完備。朝食には地元宮城の食材を活かしたバイキングが提供されます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>レンタカーの手配や観光案内もスムーズ。新幹線を利用して東京や仙台からスマートに白石・蔵王エリアを訪れたい方に最もおすすめのホテルです。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥4,450</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20502%2F20502.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-95"
                  >
                    <span>空室・プランを確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿カード 4: 白石温泉薬師の湯 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第4位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              白石川のほとりに湧く天然温泉！豊かな自然と効能豊かな薬師の湯
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">3.89</span>
              <span className="text-slate-400">（クチコミ 231件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/137801/137801.jpg"
                  alt="白石温泉薬師の湯"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  白石温泉薬師の湯
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>宮城県白石市福岡蔵本字薬師堂28-2</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>JR東北本線 白石駅より車で約7分／東北自動車道 白石ICより約10分（仙台から当館まで約60分）</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>白石の清らかな自然に囲まれた静寂の地に湧く天然温泉ホテル。古くから薬効豊かな湯として地元で愛されてきた自家源泉を広々とした大浴場で満喫できます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>お湯は肌に優しく浸透するアルカリ性泉質で、湯上がりは肌がスベスベになると評判。開放的な露天風呂からは南蔵王の澄んだ空気を感じられます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食には宮城の山海の幸を盛り込んだ会席膳が並び、白石温麺や季節の鍋料理など心温まる料理を落ち着いた和の個室で堪能できます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">プラン詳細参照</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137801%2F137801.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-95"
                  >
                    <span>空室・プランを確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 宿カード 5: 時音の宿　湯主一條 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第5位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              登録有形文化財の木造本館と極上スイート！時を忘れる最高峰ラグジュアリー
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.72</span>
              <span className="text-slate-400">（クチコミ 1194件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/27978/27978.jpg"
                  alt="時音の宿　湯主一條"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  時音の宿　湯主一條
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>宮城県白石市福岡蔵本鎌先1-48</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>ＪＲ東北本線・白石駅～タクシーで１５分／東北新幹線・白石蔵王駅～タクシーで２０分／東北自動車道・白石ＩＣ～お車で１５分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>創業約600年、大正時代に建てられた壮麗な木造一部4階建ての本館（登録有形文化財）が今も凛と佇む、東北屈指の高級温泉宿。現代建築の客室棟と歴史建築が見事に調和しています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>『森の晩餐』と名付けられた夕食は、登録有形文化財の個室料亭でいただく極上の創作和食会席。仙台牛の炭火焼きや厳選された三陸の海の幸が一皿ごとに芸術のように供されます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>洞窟風呂や薬湯大浴場など趣あふれる湯処で湯守が守り継ぐ源泉に浸かり、洗練されたおもてなしとともに極上の非日常を味わえます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥31,250</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27978%2F27978.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-95"
                  >
                    <span>空室・プランを確認</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
        </section>

        {/* アクセス＆見頃情報 */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-lg md:text-xl font-bold flex items-center gap-2 text-amber-300">
            <Train className="w-5 h-5 shrink-0" />
            <span>アクセスガイド・気候と服装のポイント</span>
          </h2>
          <div className="text-xs md:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
            【エリアへのアクセス】
・電車：東北新幹線「JR白石蔵王駅」またはJR東北本線「白石駅」下車。蔵王キツネ村へは白石駅・白石蔵王駅からタクシーで約20〜25分、または火曜・金曜運行の市民バス「きゃするくん」や観光路線バスを利用。鎌先温泉へは白石蔵王駅から車・タクシーで約15分（各旅館の送迎あり）。
・車：東北自動車道「白石IC」より国道4号線・県道経由で鎌先温泉まで約15分、蔵王キツネ村まで約20分。仙台市内から車で約50分。
・飛行機：仙台空港よりアクセス鉄道で名取駅経由、JR東北本線で白石駅まで約50分。空港からレンタカー利用なら約50分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月上旬〜12月（キツネの毛が生え変わって冬毛のモフモフ感がピークに達し、蔵王山麓の初雪景色と鎌先温泉の湯治情緒が際立つ時期）。
・気温の目安：南蔵王山麓に位置するため標高が高く、11月は日中8〜12℃、朝晩は1〜4℃。12月は日中でも3〜6℃、氷点下まで下がります。
・服装のポイント：防寒性に優れた厚手ダウンジャケット、手袋、ニット帽を必ずご用意ください。キツネ村内は自然の傾斜地を歩くため、滑りにくいスニーカーやスノーブーツの着用が必須です。ヒラヒラした服や長い紐はキツネがじゃれついて噛む恐れがあるため避けましょう。
          </div>
        </section>

        {/* よくある質問 (FAQ) */}
        <section className="bg-slate-100 rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>よくある質問（FAQ）</span>
          </h2>
          <div className="space-y-3">
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>蔵王キツネ村でキツネを触ったり抱っこすることはできますか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              放し飼いエリア内ではキツネに直接触れることは噛まれる危険があるため禁止されています。ただし、専用の「抱っこ体験」（実施期間やキツネの体調により時間が指定されます）に参加すれば、スタッフのサポートのもとで専用の上着を着用してモフモフのキツネを優しく抱っこして記念撮影が楽しめます。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>白石温麺（うーめん）とは通常の素麺と何が違うのですか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              一般的な素麺は麺を伸ばす際に表面に植物油を塗りますが、白石温麺は油を一切使わず小麦粉と塩水のみで練り上げて乾燥させます。そのため油が酸化せず、胃腸に極めて優しく消化が良いのが特徴です。長さも約9cmと短く、小さなお子様やお年寄りでも食べやすい白石の伝統健康食です。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>11月・12月に車でキツネ村や鎌先温泉へ行く場合、冬用タイヤは必要ですか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              キツネ村は標高約600mの山間に位置するため、11月中旬以降は雪が降ったり早朝・日陰で路面が凍結することがあります。11月中旬以降にお車でアクセスする場合は、必ずスタッドレスタイヤの装着をお願いします。ノーマルタイヤでの冬期の山道走行は大変危険です。
            </p>
          </div>
          </div>
        </section>

        {/* ふるさと納税・関連リンク */}
        <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 rounded-2xl p-6 md:p-8 space-y-3 text-center">
          <h2 className="text-xl md:text-2xl font-black">
            楽天トラベル ふるさと納税で最大30%お得に予約！
          </h2>
          <p className="text-xs md:text-sm max-w-xl mx-auto font-medium">
            寄附翌日から使える楽天トラベルクーポンで、今回の宿泊予約が実質2,000円の自己負担で楽しめます。年末の控除枠活用にも最適です。
          </p>
          <div className="pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-1.5 px-8 py-3.5 bg-slate-950 text-white font-black text-sm rounded-xl shadow-lg hover:bg-slate-900 transition transform active:scale-95"
            >
              <span>楽天トラベル ふるさと納税クーポンをチェック</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
