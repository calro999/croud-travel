import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '白馬八方尾根・北アルプス冠雪と山麓紅葉の「三段紅葉」＆日本屈指の強アルカリ美肌温泉ステイ | クラウドトラベルふるさと納税',
  description: '10月〜11月限定の奇跡の絶景「白馬の三段紅葉（北アルプスの初雪・山腹の紅葉・山麓の深緑）」。pH11超の高アルカリ白馬八方温泉と信州サーモン・信州牛をふるさと納税で堪能する秋旅特集。',
  keywords: ['白馬・八方尾根・栂池高原 紅葉', '長野県 紅葉 10月 11月', '白馬八方尾根・三段紅葉＆白馬八方温泉', 'ふるさと納税 温泉宿泊券', '白馬八方温泉 白馬 丸金旅館', '白馬八方温泉 白馬ピエモン ヤマジュウ', '白馬八方温泉 白馬ホテル花乃郷', '楽天ふるさと納税 トラベル'],
  alternates: {
    canonical: 'https://croud-travel.com/furusato-tax-hakuba-three-stage-autumn-leaves-stay',
  },
  openGraph: {
    title: '白馬八方尾根・北アルプス冠雪と山麓紅葉の「三段紅葉」＆日本屈指の強アルカリ美肌温泉ステイ',
    description: '10月〜11月限定の奇跡の絶景「白馬の三段紅葉（北アルプスの初雪・山腹の紅葉・山麓の深緑）」。pH11超の高アルカリ白馬八方温泉と信州サーモン・信州牛をふるさと納税で堪能する秋旅特集。',
    url: 'https://croud-travel.com/furusato-tax-hakuba-three-stage-autumn-leaves-stay',
    siteName: 'クラウドトラベル (croud-travel.com)',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "白馬八方尾根・北アルプス冠雪と山麓紅葉の「三段紅葉」＆日本屈指の強アルカリ美肌温泉ステイ",
    "description": "10月〜11月限定の奇跡の絶景「白馬の三段紅葉（北アルプスの初雪・山腹の紅葉・山麓の深緑）」。pH11超の高アルカリ白馬八方温泉と信州サーモン・信州牛をふるさと納税で堪能する秋旅特集。",
    "author": {
      "@type": "Organization",
      "name": "クラウドトラベル編集部"
    },
    "publisher": {
      "@type": "Organization",
      "name": "クラウドトラベル",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.com/logo.png"
      }
    },
    "datePublished": "2026-09-19",
    "dateModified": "2026-09-19",
    "mainEntityOfPage": "https://croud-travel.com/furusato-tax-hakuba-three-stage-autumn-leaves-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "白馬・八方尾根・栂池高原の紅葉の見頃時期はいつですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "例年10月中旬〜11月上旬の初雪冠雪×山麓紅葉のコントラストと極上美肌泉が見頃となります。標高差がある地域では高所から山麓へと約1ヶ月にわたり美しいグラデーションを楽しめます。"
        }
      },
      {
        "@type": "Question",
        "name": "ふるさと納税の楽天トラベルクーポンはどのように利用できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "寄付完了後、最短翌日〜数日以内に楽天トラベルの会員アカウントに宿泊クーポンが付与されます。予約時にクーポンを適用することで、最大30%相当の宿泊代金割引が受けられます。"
        }
      },
      {
        "@type": "Question",
        "name": "10月〜11月の白馬・八方尾根・栂池高原旅行における服装や持ち物の注意点は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "秋の白馬・八方尾根・栂池高原は日中と朝晩の寒暖差が非常に大きくなります。日中は長袖シャツや軽いジャケットで快適ですが、早朝・夜間や散策時は厚手のフリース、ダウンジャケット、手袋などの防寒着を必ずご用意ください。"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 leading-relaxed font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-amber-900 via-orange-900 to-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-amber-500/30 text-amber-200 border border-amber-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              長野県 / 白馬・八方尾根・栂池高原
            </span>
            <span className="bg-orange-600/40 text-orange-200 border border-orange-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              10月〜11月 秋限定特集
            </span>
            <span className="bg-emerald-600/40 text-emerald-200 border border-emerald-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              ふるさと納税 宿泊クーポン対象
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            白馬八方尾根・北アルプス冠雪と山麓紅葉の「三段紅葉」＆日本屈指の強アルカリ美肌温泉ステイ
          </h1>
          <p className="text-base sm:text-lg text-amber-100 max-w-3xl leading-relaxed">
            白銀の北アルプスと黄金の森が織りなす「三段紅葉」。強アルカリ美肌湯と信州秋の味覚に癒やされる贅沢時間。
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1">📅 ベストシーズン：10月中旬〜11月上旬の初雪冠雪×山麓紅葉のコントラストと極上美肌泉</span>
            <span className="flex items-center gap-1">♨️ 泉質自慢の名湯＆地産会席</span>
            <span className="flex items-center gap-1">🎁 実質自己負担2,000円で高級宿ステイ</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-950 border-b-2 border-amber-600 pb-3 mb-6">
            はじめに：秋の白馬・八方尾根・栂池高原が魅せる極上の錦秋美と温泉旅
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            10月から11月にかけて、長野県・白馬・八方尾根・栂池高原エリアは一年で最も艶やかでドラマチックな季節を迎えます。澄み渡る秋空の下、木々が深紅や山吹色、黄金色へと染まりゆく圧巻のグラデーションは、訪れる旅人の心を奪ってやみません。
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            日中は爽やかな空気のなかで息をのむ絶景紅葉を満喫し、夕暮れには湯けむり立ち上る名湯に浸かって冷えた体を芯から温める――これぞ日本の秋旅の醍醐味です。さらに、実りの秋ならではのブランド牛や清流の恵み、旬の味覚を贅沢に味わう会席料理が、旅の満足度を最高潮へと高めてくれます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            本記事では、白馬・八方尾根・栂池高原エリアの厳選された名宿3選を徹底解説します。楽天ふるさと納税の宿泊クーポンを活用すれば、実質自己負担わずか2,000円で憧れの高級旅館・温泉リゾートに宿泊可能。賢く贅沢に、心洗われる秋の休日を叶えましょう。
          </p>
        </section>

        {/* Highlight Map / Summary Points */}
        <section className="bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200 mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <span>🍁</span> 白馬・八方尾根・栂池高原 秋旅の3大魅力ポイント
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">① 標高差が織りなす絶景パノラマ</div>
              <p className="text-xs sm:text-sm text-slate-600">
                山頂から山麓、渓谷へと色づきが移り変わり、10月中旬から11月下旬まで長期間にわたり感動的な紅葉美を鑑賞できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">② 個性豊かな名湯・美肌温泉</div>
              <p className="text-xs sm:text-sm text-slate-600">
                奥深い歴史と湯量を誇る天然温泉。秋風そよぐ露天風呂で紅葉を眺めながらの湯浴みは至福のひとときです。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">③ 実りの秋を味わい尽くす郷土美食</div>
              <p className="text-xs sm:text-sm text-slate-600">
                秋の味覚がぎっしり詰まった旬会席。厳選された地場ブランド牛や清流魚、採れたての山の幸をご堪能ください。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel 1 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4 mb-6">
            <div>
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">HOTEL SELECTION 01</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">白馬八方温泉 白馬 丸金旅館</h3>
              <p className="text-xs text-slate-500">はくばはっぽうおんせん はくば まるきんりょかん</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.56点 <span className="text-xs font-normal text-slate-600">(155件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/5940/5940.jpg"
                alt="白馬八方温泉 白馬 丸金旅館の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  八方尾根スキー場の麓に佇む、昭和の温もりと信州の素朴な真心が息づく温泉旅館。pH11を超える日本最高峰の強アルカリ美肌泉と、自家製米・手作り田舎料理が旅人を温かく迎える。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  アルカリ性単純温泉（pH11.2の日本屈指の高アルカリ泉） / 源泉かけ流し / 効能：美肌作用（角質軟化）、筋肉痛、神経痛、疲労回復、冷え性
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：JR大糸線「白馬駅」より車・バスで約8分（送迎あり要予約） / 長野ICまたは安曇野ICより車で約60分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                信州牛の朴葉味噌焼き、自家菜園の採れたて野菜の天ぷら、信州サーモンのお造り、八方名物の手打ち新そば、自家製はぜかけ米
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                とろりとした化粧水のような美肌湯は、一度入れば肌がツルツルになると大評判。八方尾根ゴンドラ乗り場にも近く、紅葉ハイクの拠点に最適。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5940"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:from-amber-700 hover:to-orange-700 transition duration-150 transform hover:-translate-y-0.5 w-full sm:w-auto text-sm sm:text-base"
            >
              <span>🏨</span> 楽天トラベルで空室・プランを見る
            </a>
          </div>
        </section>

        {/* Hotel 2 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4 mb-6">
            <div>
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">HOTEL SELECTION 02</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">白馬八方温泉 白馬ピエモン ヤマジュウ</h3>
              <p className="text-xs text-slate-500">はくばはっぽうおんせん はくばぴえもん やまじゅう</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4点 <span className="text-xs font-normal text-slate-600">(26件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/17514/17514.jpg"
                alt="白馬八方温泉 白馬ピエモン ヤマジュウの外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  欧風ロッジの開放感と日本の家庭的な温かさが融合したペンションスタイルの宿。八方の名湯と信州の自然が育んだ旬食材の創作ディナーが楽しめる。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  アルカリ性単純温泉（白馬八方源泉） / 効能：美肌、関節痛、疲労回復、健康増進
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：JR白馬駅より車で約7分 / 八方バスターミナルより徒歩約8分 / 上信越道「長野IC」より約60分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                信州産ポークの低温ロースト、採れたて信州キノコのポタージュ、信州サーモンのカルパッチョ、手作りデザート
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                北アルプスの山麓を一望できる明るいダイニングと、アットホームなもてなし。秋の三段紅葉ハイキングの後に心地よい安らぎを提供。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D17514"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:from-amber-700 hover:to-orange-700 transition duration-150 transform hover:-translate-y-0.5 w-full sm:w-auto text-sm sm:text-base"
            >
              <span>🏨</span> 楽天トラベルで空室・プランを見る
            </a>
          </div>
        </section>

        {/* Hotel 3 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4 mb-6">
            <div>
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">HOTEL SELECTION 03</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">白馬八方温泉 白馬ホテル花乃郷</h3>
              <p className="text-xs text-slate-500">はくばはっぽうおんせん はくばほてるはなのさと</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.33点 <span className="text-xs font-normal text-slate-600">(40件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/17516/17516.jpg"
                alt="白馬八方温泉 白馬ホテル花乃郷の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  八方温泉街の中心に位置し、白馬三山を望む絶好のロケーション。天然の高アルカリ美肌湯と、信州の旬味を凝縮した贅沢会席が自慢のリゾートホテル。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  アルカリ性単純温泉（pH11.4） / 効能：美肌、美白、神経痛、運動麻痺、冷え性、疲労回復
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：JR白馬駅よりタクシーで約5分（八方バスターミナル徒歩5分） / 長野IC・安曇野ICより車で約60分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                信州プレミアム牛と信州サーモンの特製会席、松茸と信州キノコの土瓶蒸し（秋季限定）、地場産安曇野わさびで味わう旬魚旬菜
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                大浴場から望む秋の北アルプスは息をのむ美しさ。美肌の湯に浸かった後は、信州の地酒とともに秋の夜長をゆったりと過ごせます。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D17516"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:from-amber-700 hover:to-orange-700 transition duration-150 transform hover:-translate-y-0.5 w-full sm:w-auto text-sm sm:text-base"
            >
              <span>🏨</span> 楽天トラベルで空室・プランを見る
            </a>
          </div>
        </section>

        {/* Furusato Tax Guide Section */}
        <section className="bg-gradient-to-br from-amber-900 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-amber-200">
            💡 楽天ふるさと納税で「宿泊クーポン」を賢く手に入れる3ステップ
          </h3>
          <p className="text-stone-200 text-sm sm:text-base leading-relaxed mb-6">
            楽天ふるさと納税を利用すれば、長野県内の対象宿泊施設で使える楽天トラベルクーポンが寄付額に応じて返礼品として付与されます。実質負担2,000円で高級宿に泊まれるお得な活用法をチェックしましょう。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700">
              <div className="text-amber-400 font-bold text-sm mb-1">STEP 1. 控除上限額を確認</div>
              <p className="text-xs text-stone-300">
                ご自身の年収や家族構成から、自己負担2,000円で寄付できる年間控除上限額をシミュレーションします。
              </p>
            </div>
            <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700">
              <div className="text-amber-400 font-bold text-sm mb-1">STEP 2. 自治体へ寄付</div>
              <p className="text-xs text-stone-300">
                楽天ふるさと納税から対象自治体の「楽天トラベルクーポン返礼品」を選んで寄付を申し込みます。
              </p>
            </div>
            <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700">
              <div className="text-amber-400 font-bold text-sm mb-1">STEP 3. 予約時にクーポン適用</div>
              <p className="text-xs text-stone-300">
                付与されたクーポンを楽天トラベルの予約画面で選択するだけで、即座に宿泊代金が割引されます。
              </p>
            </div>
          </div>
          <div className="bg-amber-950/60 p-4 rounded-xl border border-amber-500/30 text-xs sm:text-sm text-amber-100 flex items-start gap-2">
            <span>ℹ️</span>
            <span>
              <strong>ポイント還元の二重取り：</strong>楽天カード決済や「お買い物マラソン」「0と5のつく日」を併用すると、寄付額に対して高還元率で楽天ポイントも獲得でき、さらにお得になります。
            </span>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3 mb-6">
            よくある質問（FAQ）
          </h3>
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h4 className="font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
                <span className="text-amber-600 font-bold">Q.</span> 白馬・八方尾根・栂池高原の紅葉の見頃時期はいつですか？
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">
                例年10月中旬〜11月上旬の初雪冠雪×山麓紅葉のコントラストと極上美肌泉が見頃となります。標高の高い山頂付近から徐々に色づきが始まり、山麓の温泉街へと紅葉前線が降りてくるため、長期間にわたって楽しめます。
              </p>
            </div>
            <div className="border-b border-slate-100 pb-4">
              <h4 className="font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
                <span className="text-amber-600 font-bold">Q.</span> ふるさと納税クーポンと楽天トラベルの他セールクーポンは併用できますか？
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">
                楽天トラベルでは、原則として自治体発行のふるさと納税クーポンと一部の宿クーポン等を組み合わせて利用可能です。予約ステップで適用可能なクーポンが自動表示されます。
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
                <span className="text-amber-600 font-bold">Q.</span> 秋の旅行時に必要な服装や装備は？
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">
                10月〜11月の白馬・八方尾根・栂池高原は朝晩の冷え込みが厳しくなります。脱ぎ着しやすいフリースや厚手のジャケット、歩きやすいスニーカーやトレッキングシューズの着用をおすすめします。
              </p>
            </div>
          </div>
        </section>

        {/* Navigation / Back to List */}
        <div className="text-center py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-600 font-bold text-sm sm:text-base transition"
          >
            ← トップページ・特集一覧に戻る
          </Link>
        </div>
      </main>
    </div>
  );
}
