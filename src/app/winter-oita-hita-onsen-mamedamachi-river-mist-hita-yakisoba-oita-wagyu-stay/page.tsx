import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight, 
  Clock, ArrowRight, Utensils, Star, Compass, Train, ShieldCheck 
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【水郷日田の初冬川霧と天領小京都・豆田町の白壁通り散策】2026-2027年11-12月初冬の大分・日田温泉！三隈川の川霧を望む屋形船情緒と名物日田焼きそば・おおいた和牛と美肌の名湯5選 | クラウドトラベル',
  description: '水郷（すいきょう）と称される大分県日田市。11月〜12月の寒暖差が生み出す三隈川の幻想的な「川霧」と、江戸幕府直轄の天領として栄えた「豆田町」の白壁土蔵が連なる歴史情緒。パリッとした麺の食感がやみつきになる元祖「日田焼きそば」や老舗酒蔵の吟醸酒、とろける豊後牛（おおいた和牛）を堪能し、三隈川を一望する源泉掛け流し美肌温泉に浸る初冬の厳選名宿5選。',
  keywords: '大分県, 豆田町, 温泉, 11月旅行, 12月旅行, 冬休み旅行, 初冬旅行, 楽天トラベル, ふるさと納税',
  openGraph: {
    title: '【水郷日田の初冬川霧と天領小京都・豆田町の白壁通り散策】2026-2027年11-12月初冬の大分・日田温泉！三隈川の川霧を望む屋形船情緒と名物日田焼きそば・おおいた和牛と美肌の名湯5選',
    description: '水郷（すいきょう）と称される大分県日田市。11月〜12月の寒暖差が生み出す三隈川の幻想的な「川霧」と、江戸幕府直轄の天領として栄えた「豆田町」の白壁土蔵が連なる歴史情緒。パリッとした麺の食感がやみつきになる元祖「日田焼きそば」や老舗酒蔵の吟醸酒、とろける豊後牛（おおいた和牛）を堪能し、三隈川を一望する源泉掛け流し美肌温泉に浸る初冬の厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-oita-hita-onsen-mamedamachi-river-mist-hita-yakisoba-oita-wagyu-stay',
    type: 'article',
    siteName: 'クラウドトラベル',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-oita-hita-onsen-mamedamachi-river-mist-hita-yakisoba-oita-wagyu-stay',
  },
};

export default function WinterFeaturePage() {

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【水郷日田の初冬川霧と天領小京都・豆田町の白壁通り散策】2026-2027年11-12月初冬の大分・日田温泉！三隈川の川霧を望む屋形船情緒と名物日田焼きそば・おおいた和牛と美肌の名湯5選 | クラウドトラベル",
    "description": "水郷（すいきょう）と称される大分県日田市。11月〜12月の寒暖差が生み出す三隈川の幻想的な「川霧」と、江戸幕府直轄の天領として栄えた「豆田町」の白壁土蔵が連なる歴史情緒。パリッとした麺の食感がやみつきになる元祖「日田焼きそば」や老舗酒蔵の吟醸酒、とろける豊後牛（おおいた和牛）を堪能し、三隈川を一望する源泉掛け流し美肌温泉に浸る初冬の厳選名宿5選。",
    "image": ["https://croud-travel.pages.dev/winter-oita-hita-onsen-mamedamachi-river-mist-hita-yakisoba-oita-wagyu-stay"],
    "author": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "url": "https://croud-travel.pages.dev/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.pages.dev/favicon.ico"
      }
    },
    "datePublished": "2026-09-01T09:00:00+09:00",
    "dateModified": "2026-10-12T11:00:00+09:00",
    "mainEntityOfPage": "https://croud-travel.pages.dev/winter-oita-hita-onsen-mamedamachi-river-mist-hita-yakisoba-oita-wagyu-stay/"
  };

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
                  "item": "https://croud-travel.pages.dev/features"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "【水郷日田の初冬川霧と天領小京都・豆田町の白壁通り散策】2026-2027年11-12月初冬の大分・日田温泉！三隈川の川霧を望む屋形船情緒と名物日田焼きそば・おおいた和牛と美肌の名湯5選",
                  "item": "https://croud-travel.pages.dev/winter-oita-hita-onsen-mamedamachi-river-mist-hita-yakisoba-oita-wagyu-stay"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
        {
          "@type": "Question",
          "name": "三隈川の「川霧」はいつ、どこで見ることができますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "川霧は11月から12月の晴れた日の早朝（日の出直後から午前8時頃まで）に最もよく発生します。三隈川沿いの宿の露天風呂や客室からはもちろん、三隈川にかかる日ノ出橋や島内水辺公園周辺が絶好のビューポイントです。冷え込みが強く風が穏やかな朝ほど濃い霧が立ち込めます。"
          }
        },
        {
          "@type": "Question",
          "name": "日田焼きそばの特徴とおすすめの食べ方は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "一般的な焼きそばと異なり、鉄板で麺の両面をじっくりと焼き、所々がパリパリ・ポリポリと香ばしく焦げ目がつくのが特徴です。そこに生モヤシと豚肉、ネギを加えて一気に炒め合わせます。卓上の紅生姜や胡椒、生卵をトッピングして味の変化を楽しむのが地元通の食べ方です。"
          }
        },
        {
          "@type": "Question",
          "name": "冬でも日田温泉の「屋形船」は運航していますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "屋形船といえば夏の鵜飼いが有名ですが、冬期間（11月〜4月）も「冬の屋形船」として障子を閉め、船内にストーブやこたつを備えた暖かな空間で川面を進みながら会席料理を楽しむプランを通年運行している旅館があります（要事前予約）。静寂の冬の川下りは大変風流でおすすめです。"
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
          <Link href="/features" className="hover:text-slate-800 transition">特集一覧</Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-slate-800 font-medium truncate max-w-xs">【水郷日田の初冬川霧と天領小京都・豆田町の白壁通り散策】2026-2027年11-12月初冬の大分・日田温泉！三隈川の川霧を望む屋形船情緒と名物日田焼きそば・おおいた和牛と美肌の名湯5選</span>
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
            【水郷日田の初冬川霧と天領小京都・豆田町の白壁通り散策】2026-2027年11-12月初冬の大分・日田温泉！三隈川の川霧を望む屋形船情緒と名物日田焼きそば・おおいた和牛と美肌の名湯5選
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            水郷（すいきょう）と称される大分県日田市。11月〜12月の寒暖差が生み出す三隈川の幻想的な「川霧」と、江戸幕府直轄の天領として栄えた「豆田町」の白壁土蔵が連なる歴史情緒。パリッとした麺の食感がやみつきになる元祖「日田焼きそば」や老舗酒蔵の吟醸酒、とろける豊後牛（おおいた和牛）を堪能し、三隈川を一望する源泉掛け流し美肌温泉に浸る初冬の厳選名宿5選。
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        
        {/* 導入解説 */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-600 shrink-0" />
            <span>初冬にこの地を訪れるべき理由と風土の魅力</span>
          </h2>
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
            九州北部の山々に囲まれた盆地に位置し、阿蘇山系から湧き出る清らかな伏流水が町を潤す大分県日田市。古くから『水郷（すいきょう）』と称えられたこの地は、江戸時代には幕府の直轄地『天領』として九州を統括する西国筋郡代が置かれ、商人文化と学問が花開いた歴史を持ちます。日田の冬の訪れを告げる風物詩が、11月から12月にかけて三隈川（みくまがわ）一帯に発生する幻想的な『川霧（あさぎり）』です。盆地特有の夜間の冷え込みと温泉の温もり、そして豊かな水量が織りなすこの現象は、川面から立ち上る白い霧が町全体を包み込み、水墨画の世界のような幽玄な風景を描き出します。三隈川沿いに湧く『日田温泉』は弱アルカリ性の美肌温泉として知られ、川を望む宿の露天風呂に浸かりながら朝霧が晴れてゆく様子を眺める時間は格別の贅沢です。そして温泉街から北へ歩みを進めると広がるのが、国の重要伝統的建造物群保存地区に選定されている『豆田町（まめだまち）』。御幸通りと上町通りを中心に、江戸期から明治・大正期に建てられた白壁土蔵や町家が連なり、まるで江戸時代にタイムスリップしたかのような情緒が色濃く残ります。老舗の醤油蔵や造り酒屋からは芳醇な香りが漂い、日田杉を用いた伝統の下駄工房や杉桶の職人技に触れる散策は知的好奇心を刺激します。散策途中のランチには、日田が誇るソウルフード『日田焼きそば』を。鉄板で麺の一部をキツネ色に焦げるまでカリカリに焼き、シャキシャキの国産モヤシと豚肉、甘辛い特製ソースを絡めた独特の食感は、一度食べたら忘れられない中毒性があります。夕食には三隈川の川魚料理や、大分の誇る極上黒毛和牛『おおいた和牛』のステーキを味わい、夜には川面に提灯の灯りが揺れる風情ある屋形船を眺める。水と歴史の豊かさに抱かれる初冬の日田は、大人の知的好奇心と五感を満たす極上の隠れ里です。
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
              <span>三隈川を包む幻想的な「初冬の川霧」と美肌の湯・日田温泉のパノラマ露天</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              11〜12月の寒暖差が生み出す川霧が水面を白く染め上げる幽玄な絶景。三隈川を見下ろす源泉掛け流しの露天風呂から、刻一刻と表情を変える幻想的な朝景色を心ゆくまで堪能できます。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                2
              </span>
              <span>天領の栄華が息づく小京都「豆田町」！白壁土蔵と老舗酒蔵の冬情緒散策</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              国の重伝建地区に選ばれた豆田町には、江戸時代の町家や白壁の蔵が美しく残存。名水が醸す地酒の試飲や伝統の日田杉下駄、老舗味噌醤油蔵を巡る贅沢な歴史歩きが楽しめます。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                3
              </span>
              <span>麺のカリカリ食感がやみつき！元祖「日田焼きそば」と極上おおいた和牛の美食</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              鉄板で香ばしく焼き固めた麺とたっぷりモヤシが絶妙なご当地グルメ「日田焼きそば」や、とろける旨味の「おおいた和牛」会席など、美食の宝庫・大分の旬の味覚を心ゆくまで味わえます。
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
              <span>近隣の必見名所：豆田町</span>
            </h2>
            <span className="text-[11px] text-slate-400">Wikipedia・公式解説連携</span>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative h-52 md:h-60 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Hita-city_Mameda01.jpg/1280px-Hita-city_Mameda01.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="天領の栄華を今に伝える小京都・豆田町（国の重要伝統的建造物群保存地区・白壁土蔵と初冬の川霧）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="md:col-span-7 space-y-2.5">
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                天領の栄華を今に伝える小京都・豆田町（国の重要伝統的建造物群保存地区・白壁土蔵と初冬の川霧）
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                豆田町（まめだまち）は、大分県日田市市街地北部の花月川沿いにある地区。江戸時代以降に建てられた建築群が現存し、国の重要伝統的建造物群保存地区（以下「重伝建地区」という）に、2015年4月24日には、「近世日本の教育遺産群－学ぶ心・礼節の本源－」の構成文化財として日本遺産に認定されている。本項ではかつて同地域に所在した同名の自治体についても述べる。...
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
        {/* 宿カード 1: 日田温泉　亀山亭ホテル */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第1位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              三隈川を眼下に望む創業百年の老舗！絶景展望大浴場と極上会席
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.07</span>
              <span className="text-slate-400">（クチコミ 581件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/67038/67038.jpg"
                  alt="日田温泉　亀山亭ホテル"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  日田温泉　亀山亭ホテル
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>大分県日田市隈1-3-10</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>ＪＲ日田駅から徒歩１０分・車で２～３分（日田駅・日田バスからは、お電話を頂ければ送迎致します※19時まで）</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>明治初期の創業以来、三隈川のほとりで旅人を迎え続ける歴史ある温泉ホテル。最上階の展望大浴場からは、ゆったりと流れる三隈川と朝の川霧のパノラマを一望できます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>美肌効果が高い弱アルカリ性単純温泉が豊富に注がれ、広々とした露天風呂で心地よい川風を感じながら至福の湯浴みを満喫できます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は豊後牛のステーキや旬の鮎料理、地元日田の採れたて野菜をふんだんに取り入れた郷土会席。伝統のおもてなしと行き届いたサービスが安心の滞在を約束します。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥10,550</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67038%2F67038.html"
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

        {/* 宿カード 2: 奥日田温泉　うめひびき */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第2位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              奥日田の渓谷に抱かれた究極のリラクゼーション！ミシュラン掲載の高級宿
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.74</span>
              <span className="text-slate-400">（クチコミ 644件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/40907/40907.jpg"
                  alt="奥日田温泉　うめひびき"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  奥日田温泉　うめひびき
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>大分県日田市大山町西大山4587</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>福岡空港→日田IC（九州自動車道→大分自動車道）約60分→奥日田温泉うめひびき（国道212号）約25分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>日田市街から山あいの大山町へ入った渓谷に佇む、大人のためのプレミアム温泉リゾート。『梅響（うめひびき）』の名にふさわしく、梅の里の美しい大自然と現代和風の美が調和しています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>響渓谷の切り立つ岸壁を望むインフィニティ露天風呂や、活盤浴、サウナなど充実のスパ施設を完備。日常のすべてを忘れて深いリラクゼーションに浸れます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>料理長が技を尽くす夕食は、おおいた和牛や近隣の高級食材を贅沢に使った創作懐石。お部屋の設えから調度品に至るまで極上の贅沢を極めた大人の隠れ家です。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥23,745</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40907%2F40907.html"
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

        {/* 宿カード 3: 日田温泉　小京都の湯　みくまホテル */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第3位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              地上50mの屋上パノラマ露天風呂！三隈川の絶景を一人占めする贅沢
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.04</span>
              <span className="text-slate-400">（クチコミ 477件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/40499/40499.jpg"
                  alt="日田温泉　小京都の湯　みくまホテル"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  日田温泉　小京都の湯　みくまホテル
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>大分県日田市隈1丁目3-19</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>高速で博多から日田まで約１時間。日田ＩＣより５分。日田駅/日田バスセンターよりお迎え有り（要予約１９時頃迄）</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>三隈川沿いにそびえ立ち、ホテル最上階に備えられた展望露天風呂からの眺望が圧巻の宿。視界を遮るもののない川のパノラマと、朝夕で表情を変える大空の絶景が広がります。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>全室リバービューの客室からは、静かに流れる三隈川と対岸の緑豊かな風景を眺めることができ、ゆったりとした時間の流れを感じられます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食には豊後水道の新鮮な魚介と豊後牛を中心とした和食会席膳。屋形船の手配プランも用意されており、水郷ならではの旅情を存分に堪能できます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥8,800</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40499%2F40499.html"
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

        {/* 宿カード 4: 日田　琴平温泉　旅籠かやうさぎ */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第4位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              大正ロマンの風情漂う離れの隠れ宿！古民家移築の贅沢空間と自家源泉
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.80</span>
              <span className="text-slate-400">（クチコミ 194件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/108589/108589.jpg"
                  alt="日田　琴平温泉　旅籠かやうさぎ"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  日田　琴平温泉　旅籠かやうさぎ
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>大分県日田市琴平1529-1</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>JR日田駅、日田バスセンターから車で１０分（送迎可） 日田ICから車で15分、湯布院温泉、別府温泉、黒川温泉迄1時間圏内</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>日田の奥座敷・琴平温泉に位置し、大正時代の古民家を移築した母屋と趣の異なる離れ客室が点在するプライベート感抜群の温泉旅館です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>敷地内には竹林や雑木林が広がり、客室露天風呂や貸切露天風呂にはアルカリ性の滑らかな自家源泉が掛け流されています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は契約農家から届く有機野菜や極上のおおいた和牛を用いた本格的な創作会席。静寂の中で大切な人と特別な時間を過ごしたい記念日旅行に最高の宿です。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥10,000</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108589%2F108589.html"
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

        {/* 宿カード 5: 日田温泉　はなの樹　ＲＩＶＥＲ　ＴＥＲＲＡＣＥ */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第5位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              川辺のテラスで過ごすモダンな休日！三隈川のせせらぎと源泉掛け流し
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.31</span>
              <span className="text-slate-400">（クチコミ 898件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/44901/44901.jpg"
                  alt="日田温泉　はなの樹　ＲＩＶＥＲ　ＴＥＲＲＡＣＥ"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  日田温泉　はなの樹　ＲＩＶＥＲ　ＴＥＲＲＡＣＥ
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>大分県日田市中ノ島町685-6</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>日田IC、JR日田駅より車で約8分／JR日田駅まで送迎あり。便数・定員に限りがございます。事前のご予約が必要です。</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>三隈川のほとりに位置し、リバーサイドのウッドテラスや開放的なラウンジを備えたスタイリッシュで居心地の良い温泉旅館です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>大浴場や露天風呂には日田温泉の良質な湯が並々と注がれ、川のせせらぎをBGMに心ゆくまでリフレッシュできます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>地産地消にこだわった夕食は、彩り豊かな創作会席料理。女子旅やカップル、ファミリーまで幅広い層に快適な滞在を提供してくれる人気宿です。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥10,350</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44901%2F44901.html"
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
・電車：JR久大本線「日田駅」下車。博多駅より特急「ゆふいんの森」または特急「ゆふ」で約1時間15分。日田駅から豆田町へは徒歩約15分（レンタサイクルやタクシーで5分）、日田温泉へは徒歩約12分。
・高速バス：西鉄天神高速バスターミナルまたは博多バスターミナルより高速バス「ひた号」で「日田バスターミナル」まで約1時間30分（1時間に2〜3本運行で非常に便利）。
・車：大分自動車道「日田IC」より市街地・日田温泉まで約10分。福岡市内（太宰府IC）から約50分、大分市内から約1時間10分。
・飛行機：福岡空港より高速バス「ひた号」直行便で約1時間20分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月〜12月（寒暖差がピークを迎え、早朝の三隈川に発生する川霧の出現率が最も高くなる時期。新酒の仕込みが始まる酒蔵巡りにも最適）。
・気温の目安：盆地気候のため朝晩の冷え込みが強く、11月は日中13〜17℃、朝晩は4〜8℃。12月は日中でも8〜11℃、朝晩は0〜3℃前後まで冷え込みます。
・服装のポイント：日中はウールセーターやジャケットで過ごせますが、早朝の川霧散策や夜間には厚手のダウンコート、手袋、マフラーが必須です。豆田町の町家散策には脱ぎ履きしやすく歩きやすいスニーカーが適しています。
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
              <span>三隈川の「川霧」はいつ、どこで見ることができますか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              川霧は11月から12月の晴れた日の早朝（日の出直後から午前8時頃まで）に最もよく発生します。三隈川沿いの宿の露天風呂や客室からはもちろん、三隈川にかかる日ノ出橋や島内水辺公園周辺が絶好のビューポイントです。冷え込みが強く風が穏やかな朝ほど濃い霧が立ち込めます。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>日田焼きそばの特徴とおすすめの食べ方は？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              一般的な焼きそばと異なり、鉄板で麺の両面をじっくりと焼き、所々がパリパリ・ポリポリと香ばしく焦げ目がつくのが特徴です。そこに生モヤシと豚肉、ネギを加えて一気に炒め合わせます。卓上の紅生姜や胡椒、生卵をトッピングして味の変化を楽しむのが地元通の食べ方です。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>冬でも日田温泉の「屋形船」は運航していますか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              屋形船といえば夏の鵜飼いが有名ですが、冬期間（11月〜4月）も「冬の屋形船」として障子を閉め、船内にストーブやこたつを備えた暖かな空間で川面を進みながら会席料理を楽しむプランを通年運行している旅館があります（要事前予約）。静寂の冬の川下りは大変風流でおすすめです。
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
