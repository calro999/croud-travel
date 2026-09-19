import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本の滝100選「養老の滝」約3,000本のもみじ絵巻＆養老温泉・本場飛騨牛街道の極上肉会席 | クラウドトラベルふるさと納税',
  description: '11月中旬〜12月上旬に巨木のもみじがトンネルを作る養老公園・養老の滝。養老山麓に湧く天然温泉と、飛騨牛の名産地・養老町ならではの極上飛騨牛すき焼き・焼肉をふるさと納税でお得に味わう完全ガイド。',
  keywords: ['養老・養老の滝・大垣 紅葉 観光', '岐阜県 10月 11月 旅行', '養老の滝もみじ紅葉＆養老温泉飛騨牛', 'ふるさと納税 温泉宿泊券', '養老温泉 滝元館 遊季の里', '養老温泉 ゆせんの里 ホテルなでしこ', 'ホテルルートイン大垣インター', '楽天ふるさと納税 宿泊クーポン'],
  alternates: {
    canonical: 'https://croud-travel.com/furusato-tax-yoro-park-autumn-leaves-stay',
  },
  openGraph: {
    title: '日本の滝100選「養老の滝」約3,000本のもみじ絵巻＆養老温泉・本場飛騨牛街道の極上肉会席',
    description: '11月中旬〜12月上旬に巨木のもみじがトンネルを作る養老公園・養老の滝。養老山麓に湧く天然温泉と、飛騨牛の名産地・養老町ならではの極上飛騨牛すき焼き・焼肉をふるさと納税でお得に味わう完全ガイド。',
    url: 'https://croud-travel.com/furusato-tax-yoro-park-autumn-leaves-stay',
    siteName: 'クラウドトラベル (croud-travel.com)',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "日本の滝100選「養老の滝」約3,000本のもみじ絵巻＆養老温泉・本場飛騨牛街道の極上肉会席",
    "description": "11月中旬〜12月上旬に巨木のもみじがトンネルを作る養老公園・養老の滝。養老山麓に湧く天然温泉と、飛騨牛の名産地・養老町ならではの極上飛騨牛すき焼き・焼肉をふるさと納税でお得に味わう完全ガイド。",
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
    "datePublished": "2026-09-20",
    "dateModified": "2026-09-20",
    "mainEntityOfPage": "https://croud-travel.com/furusato-tax-yoro-park-autumn-leaves-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "養老・養老の滝・大垣の秋（10月〜11月）のベストシーズン・見どころはいつですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "例年11月中旬〜12月上旬の養老公園一帯を包むもみじトンネルと名瀑が見頃のピークとなります。山々や渓谷の美しいグラデーションとともに、旬を迎える地場食材を存分にお楽しみいただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "楽天ふるさと納税のトラベルクーポンは予約時にすぐ使えますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、寄付完了後最短即日〜数日以内に楽天トラベルのマイクーポンに付与されます。予約時にクーポンを適用することで、最大30%相当の宿泊補助が受けられます。"
        }
      },
      {
        "@type": "Question",
        "name": "秋の養老・養老の滝・大垣旅行における服装や持ち物のポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "10月〜11月の養老・養老の滝・大垣は朝夕の冷え込みが強まります。日中は快適な服装で問題ありませんが、朝夕の散策や露天風呂への移動時には防寒着（フリースやジャケット等）を必ずご用意ください。"
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
      <header className="relative bg-gradient-to-br from-stone-900 via-amber-950 to-orange-950 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-amber-500/30 text-amber-200 border border-amber-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              岐阜県 / 養老・養老の滝・大垣
            </span>
            <span className="bg-orange-600/40 text-orange-200 border border-orange-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              10月〜11月 秋限定特集
            </span>
            <span className="bg-emerald-600/40 text-emerald-200 border border-emerald-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              ふるさと納税 宿泊クーポン対象
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            日本の滝100選「養老の滝」約3,000本のもみじ絵巻＆養老温泉・本場飛騨牛街道の極上肉会席
          </h1>
          <p className="text-base sm:text-lg text-amber-100 max-w-3xl leading-relaxed">
            名瀑・養老の滝を赤く染め上げる圧巻のもみじのトンネル。名湯と肉の聖地・養老でとろける飛騨牛を堪能する秋。
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1">📅 旬のシーズン：11月中旬〜12月上旬の養老公園一帯を包むもみじトンネルと名瀑</span>
            <span className="flex items-center gap-1">♨️ 自慢の泉質＆旬の味覚会席</span>
            <span className="flex items-center gap-1">🎁 実質自己負担2,000円で高級宿ステイ</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-950 border-b-2 border-amber-600 pb-3 mb-6">
            はじめに：秋の養老・養老の滝・大垣で味わう絶景と至高の温泉時間
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            10月から11月にかけての岐阜県・養老・養老の滝・大垣は、豊かな自然美と歴史情緒が鮮やかに交差する特別なシーズンを迎えます。澄んだ秋空の下、山肌や渓谷が織りなす錦秋のパノラマは息をのむ美しさで、訪れる人々を魅了してやみません。
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            心地よい秋風を感じながら名所を巡ったあとは、名湯に身を浸して日々の喧騒を忘れ、夜には秋の実りを凝縮した贅沢な郷土会席に舌鼓を打つ――これこそが大人の旅にふさわしい至高の贅沢です。
          </p>
          <p className="text-slate-700 leading-relaxed">
            本記事では、養老・養老の滝・大垣エリアで高い評価を誇るおすすめの名宿3選を徹底解説します。楽天ふるさと納税の宿泊クーポンを活用すれば、実質自己負担わずか2,000円で憧れの高級旅館や温泉宿にお得に宿泊可能です。秋の特別な旅行プランをぜひご検討ください。
          </p>
        </section>

        {/* Highlight Points */}
        <section className="bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200 mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <span>🍁</span> 養老・養老の滝・大垣 秋旅の3大魅力ポイント
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">① 圧巻の秋色パノラマ絶景</div>
              <p className="text-xs sm:text-sm text-slate-600">
                10月〜11月限定の美しいグラデーション。清流や奇岩、雄大な山並みと調和した絶景を満喫できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">② 歴史と効能を誇る名湯</div>
              <p className="text-xs sm:text-sm text-slate-600">
                湯量豊富な天然温泉や情緒ある露天風呂。秋の爽やかな外気を感じながら心身を優しく解きほぐせます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">③ 実りの秋を味わう郷土美食</div>
              <p className="text-xs sm:text-sm text-slate-600">
                厳選されたブランド和牛や旬の海の幸・山の幸、採れたての新米を味わう贅沢な秋会席。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel 1 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4 mb-6">
            <div>
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">HOTEL SELECTION 01</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">養老温泉 滝元館 遊季の里</h3>
              <p className="text-xs text-slate-500">ようろうおんせん たきもとかん ゆきのさと</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.15点 <span className="text-xs font-normal text-slate-600">(188件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/71966/71966.jpg"
                alt="養老温泉 滝元館 遊季の里の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  養老公園の最奥、養老の滝のすぐそばに佇む全11室の大人の隠れ宿。濃尾平野を見晴らす絶景テラスと、名湯養老温泉、本場飛騨牛会席。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ナトリウム・カルシウム-塩化物泉 / 展望露天風呂・客室露天風呂 / 効能：神経痛、筋肉痛、冷え性、関節痛、疲労回復
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：養老鉄道「養老駅」より車で約5分（無料送迎あり） / 名神高速「大垣IC」または東海環状道「養老IC」より車で約15分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                最上級A5飛騨牛のすき焼きまたはしゃぶしゃぶ鍋会席、美濃けんとん豚の角煮、清流長良川の若鮎、地場産旬野菜の炊き合わせ
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                濃尾平野の雄大なパノラマと煌めく夜景を一望。養老の滝のもみじライトアップ散策へも徒歩すぐの絶好のロケーション。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D71966"
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
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">養老温泉 ゆせんの里 ホテルなでしこ</h3>
              <p className="text-xs text-slate-500">ようろうおんせん ゆせんのさと ほてるなでしこ</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.14点 <span className="text-xs font-normal text-slate-600">(570件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/40515/40515.jpg"
                alt="養老温泉 ゆせんの里 ホテルなでしこの外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  地下約1,200mから湧き出る自家源泉の天然温泉と、多彩な温浴施設・汗蒸幕（ハンジュンマク）を備えた温泉リゾート。養老の飛騨牛焼肉・会席を堪能。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ナトリウム-塩化物泉（源泉かけ流し濁り湯） / 本館「みのり乃湯」・さらさの湯・汗蒸幕 / 効能：神経痛、関節痛、冷え性、五十肩、美肌
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：養老駅より車で約10分（無料シャトルバスあり） / 東海環状道「養老IC」より車で約5分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                飛騨牛の炭火焼肉コースまたは飛騨牛すき焼き御膳、養老山麓の旬食材を使った健康創作和食、岐阜県産ハツシモご飯
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                良質な源泉かけ流しの天然温泉と本格的な韓国式サウナ汗蒸幕でデトックス。飛騨牛街道の名店が集まる養老町グルメを満喫。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D40515"
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
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">ホテルルートイン大垣インター</h3>
              <p className="text-xs text-slate-500">ほてるるーといんおおがきいんたー</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 3.8点 <span className="text-xs font-normal text-slate-600">(533件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/19544/19544.jpg"
                alt="ホテルルートイン大垣インターの外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  名神高速・大垣ICから車で約1分、養老公園や関ケ原へのアクセス至便なビジネス＆観光ホテル。ラジウム人工温泉大浴場と無料朝食バイキングを完備。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ラジウム人工温泉大浴場「旅人の湯」 / 効能：リウマチ、神経痛、冷え性、腰痛、疲労回復
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：養老鉄道「友江駅」より徒歩約15分 / 名神高速道路「大垣IC」より車で約1分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                和洋30種以上の無料朝食バイキング、焼き立てクロワッサン、岐阜県産米のご飯
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                養老公園や養老の滝まで車で約15分。広々とした大浴場でドライブの疲れを癒やし、コスパ良く秋の西美濃観光を楽しめます。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D19544"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:from-amber-700 hover:to-orange-700 transition duration-150 transform hover:-translate-y-0.5 w-full sm:w-auto text-sm sm:text-base"
            >
              <span>🏨</span> 楽天トラベルで空室・プランを見る
            </a>
          </div>
        </section>

        {/* Furusato Tax Guide Section */}
        <section className="bg-gradient-to-br from-stone-900 to-amber-950 text-white rounded-2xl p-6 sm:p-8 shadow-lg mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-amber-200">
            💡 楽天ふるさと納税で「宿泊クーポン」を賢く手に入れる3ステップ
          </h3>
          <p className="text-stone-200 text-sm sm:text-base leading-relaxed mb-6">
            楽天ふるさと納税を利用すれば、岐阜県内の対象宿泊施設で使える楽天トラベルクーポンが寄付額に応じて返礼品として付与されます。実質負担2,000円で高級宿に泊まれるお得な活用法をチェックしましょう。
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
                <span className="text-amber-600 font-bold">Q.</span> 養老・養老の滝・大垣の秋の見頃時期はいつですか？
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">
                例年11月中旬〜12月上旬の養老公園一帯を包むもみじトンネルと名瀑が見頃となります。標高差や気候に合わせて色づきが移り変わり、長期間にわたって楽しめます。
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
                10月〜11月の養老・養老の滝・大垣は朝夕の冷え込みが予想されます。日中は薄手のアウターで快適ですが、早朝や夜間、散策時には厚手のフリースやジャケット、歩きやすい靴をご用意ください。
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
