import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '秋の伊勢海老まつり解禁！日南・飫肥城下町の武家屋敷ステイ＆南国日南海岸の絶景オーシャンビュー温泉 | クラウドトラベルふるさと納税',
  description: '9月〜11月限定で旬を迎える日南海岸の天然伊勢海老。飫肥城下町のレトロな武家屋敷散策と、太平洋を一望する日南温泉リゾートでぷりっぷりの伊勢海老・宮崎牛をふるさと納税で堪能する秋の南九州旅。',
  keywords: ['日南・飫肥城下町・青島 紅葉 グルメ', '宮崎県 秋 10月 11月', '日南海岸伊勢海老まつり＆飫肥城下町宮崎牛', 'ふるさと納税 温泉宿泊券', '天然温泉ひなたの宿日南宮崎', 'ホテル日南北郷リゾート', '青島天然温泉ルートイングランティアあおしま太陽閣', '楽天ふるさと納税 温泉クーポン'],
  alternates: {
    canonical: 'https://croud-travel.com/furusato-tax-nichinan-obi-iseebi-autumn-stay',
  },
  openGraph: {
    title: '秋の伊勢海老まつり解禁！日南・飫肥城下町の武家屋敷ステイ＆南国日南海岸の絶景オーシャンビュー温泉',
    description: '9月〜11月限定で旬を迎える日南海岸の天然伊勢海老。飫肥城下町のレトロな武家屋敷散策と、太平洋を一望する日南温泉リゾートでぷりっぷりの伊勢海老・宮崎牛をふるさと納税で堪能する秋の南九州旅。',
    url: 'https://croud-travel.com/furusato-tax-nichinan-obi-iseebi-autumn-stay',
    siteName: 'クラウドトラベル (croud-travel.com)',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "秋の伊勢海老まつり解禁！日南・飫肥城下町の武家屋敷ステイ＆南国日南海岸の絶景オーシャンビュー温泉",
    "description": "9月〜11月限定で旬を迎える日南海岸の天然伊勢海老。飫肥城下町のレトロな武家屋敷散策と、太平洋を一望する日南温泉リゾートでぷりっぷりの伊勢海老・宮崎牛をふるさと納税で堪能する秋の南九州旅。",
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
    "mainEntityOfPage": "https://croud-travel.com/furusato-tax-nichinan-obi-iseebi-autumn-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "日南・飫肥城下町・青島の秋（10月〜11月）の見どころや旬の味覚は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "例年10月〜11月の秋獲れ天然伊勢海老解禁と温暖な日南海岸の秋リゾートが最高のシーズンです。息をのむ秋の絶景とともに、この時期にしか味わえない旬のブランド食材や名物鍋をご堪能いただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "楽天ふるさと納税の宿泊クーポンは予約時にすぐ使えますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "寄付完了後、最短即日〜数日以内に楽天トラベルのマイクーポンに付与されます。予約ステップで適用するだけで、寄付額に応じた割引が即座に反映されます。"
        }
      },
      {
        "@type": "Question",
        "name": "秋の日南・飫肥城下町・青島旅行のおすすめの過ごし方は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "日中は澄んだ秋空の下で景勝地散策や歴史ある街並み歩き、味覚狩りを楽しみ、夕暮れ以降は宿自慢の天然温泉に浸かって旬の贅沢会席を味わう滞在が格別です。"
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
      <header className="relative bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-amber-500/30 text-amber-200 border border-amber-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              宮崎県 / 日南・飫肥城下町・青島
            </span>
            <span className="bg-orange-600/40 text-orange-200 border border-orange-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              10月〜11月 秋限定特集
            </span>
            <span className="bg-emerald-600/40 text-emerald-200 border border-emerald-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              ふるさと納税 宿泊クーポン対象
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            秋の伊勢海老まつり解禁！日南・飫肥城下町の武家屋敷ステイ＆南国日南海岸の絶景オーシャンビュー温泉
          </h1>
          <p className="text-base sm:text-lg text-amber-100 max-w-3xl leading-relaxed">
            秋の黒潮が育む獲れたて天然伊勢海老と日本一の宮崎牛。飫肥の小京都散策とオーシャンビュー露天に癒やされる秋旅。
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1">📅 旬のシーズン：10月〜11月の秋獲れ天然伊勢海老解禁と温暖な日南海岸の秋リゾート</span>
            <span className="flex items-center gap-1">♨️ 自慢の泉質＆贅沢秋会席</span>
            <span className="flex items-center gap-1">🎁 実質自己負担2,000円で高級宿ステイ</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-950 border-b-2 border-amber-600 pb-3 mb-6">
            はじめに：10月・11月の日南・飫肥城下町・青島で叶える極上の秋旅
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            秋が深まる10月から11月、宮崎県・日南・飫肥城下町・青島エリアは一年の中で最も豊かで魅力的な表情を見せてくれます。澄み切った秋空に映える山々や渓谷のグラデーション、歴史ある町並みに漂う秋の情緒、そしてこの季節ならではの極上グルメが旅人を迎えます。
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            日中は心地よい秋風を感じながら散策やドライブを楽しみ、夕暮れには名湯に浸かって日頃の疲れを解きほぐす――。夜には地域の特産食材や旬の味覚をふんだんに盛り込んだ贅沢な会席料理に舌鼓を打つひとときは、何物にも代えがたい幸福感をもたらします。
          </p>
          <p className="text-slate-700 leading-relaxed">
            本記事では、日南・飫肥城下町・青島エリアで高い評価を獲得しているおすすめの名宿3選を詳しくご紹介します。楽天ふるさと納税を活用すれば、実質自己負担わずか2,000円でお得に宿泊クーポンを取得可能。賢く上質な大人の秋旅を計画しましょう。
          </p>
        </section>

        {/* Highlight Map / Summary Points */}
        <section className="bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200 mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <span>🍁</span> 日南・飫肥城下町・青島 秋旅の3大魅力ポイント
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">① 秋ならではの絶景パノラマ</div>
              <p className="text-xs sm:text-sm text-slate-600">
                10月〜11月限定の息をのむ大自然のグラデーションや、風情あふれる歴史的景観を心ゆくまで堪能できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">② 個性あふれる極上の名湯</div>
              <p className="text-xs sm:text-sm text-slate-600">
                歴史ある湯治場や源泉かけ流しの天然温泉。露天風呂で秋の爽快な外気を感じながらリラックスできます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">③ 実りの秋を味わう極上美食</div>
              <p className="text-xs sm:text-sm text-slate-600">
                秋に解禁される旬の海の幸、脂がのったブランド肉、採れたての新米や旬の野菜が織りなす絶品会席。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel 1 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4 mb-6">
            <div>
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">HOTEL SELECTION 01</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">天然温泉ひなたの宿日南宮崎</h3>
              <p className="text-xs text-slate-500">てんねんおんせん ひなたのやど にちなんみやざき</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.48点 <span className="text-xs font-normal text-slate-600">(423件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/187408/187408.jpg"
                alt="天然温泉ひなたの宿日南宮崎の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  日南・飫肥の自然林に抱かれたスタイリッシュな温泉リゾートホテル。美肌効果抜群の天然アルカリ温泉と、宮崎牛や秋の伊勢海老を盛り込んだ豪華会席が自慢。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ナトリウム-炭酸水素塩・塩化物温泉（pH8.8の美肌とろとろ泉） / 源泉かけ流し大浴場・露天風呂 / 効能：美肌、神経痛、筋肉痛、疲労回復、冷え性
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：JR日南線「飫肥駅」より車で約5分 / 宮崎空港より車で約50分（宮崎自動車道・田野IC経由）
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                秋の日南海岸伊勢海老のお造り＆鬼殻焼き、特選宮崎牛の溶岩プレート焼き、日南一本釣りカツオのタタキ、宮崎名物チキン南蛮
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                とろりとした化粧水のような極上美肌湯と、飫肥城下町の情緒。夕食には秋に解禁されたばかりのぷりぷり天然伊勢海老を贅沢に味わえます。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D187408"
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
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">ホテル日南北郷リゾート</h3>
              <p className="text-xs text-slate-500">ほてるにちなんきたごうりぞーと</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.13点 <span className="text-xs font-normal text-slate-600">(528件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/5370/5370.jpg"
                alt="ホテル日南北郷リゾートの外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  標高290mの丘の上に建ち、鰐塚山系の山並みと日南の自然を一望できる高原温泉リゾート。広大な露天風呂から望む秋の夕景や星空パノラマが圧巻。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ナトリウム-炭酸水素塩温泉（美肌の湯） / 展望大露天風呂・サウナ / 効能：美肌作用、切り傷、やけど、神経痛、疲労回復
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：JR日南線「北郷駅」より車で約7分（送迎あり） / 宮崎空港より車で約45分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                日南海岸獲れたて天然伊勢海老会席、宮崎牛すき焼き、日南鶏の炭火焼き、飫肥名物「厚焼き玉子」と郷土の小鉢
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                開放感抜群のパノラマ露天風呂に浸かりながら、秋風そよぐ日南の山並みを一望。秋の伊勢海老まつりプランでグルメ旅を極める滞在。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D5370"
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
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">青島天然温泉ルートイングランティアあおしま太陽閣</h3>
              <p className="text-xs text-slate-500">あおしまてんねんおんせん るーといんぐらんてぃあ あおしまたいようかく</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.3点 <span className="text-xs font-normal text-slate-600">(1365件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/68070/68070.jpg"
                alt="青島天然温泉ルートイングランティアあおしま太陽閣の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  日南海岸の玄関口「青島」に位置する天然温泉リゾートホテル。地下1,000mから湧き出る「美肌の湯」青島温泉と、新鮮な海の幸バイキング・会席が人気。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ナトリウム-塩化物・炭酸水素塩温泉（美肌温泉） / 露天風呂・大浴場・打たせ湯・サウナ / 効能：神経痛、筋肉痛、冷え性、美肌効果、疲労回復
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：JR日南線「子供の国駅」より徒歩約7分 / JR青島駅より車で約3分 / 宮崎空港より車で約15分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                宮崎牛の陶板焼き、日南獲れ伊勢海老鍋（秋季限定）、近海マグロ・カツオのお造り、宮崎郷土料理ビュッフェまたは御膳
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                青島神社や鬼の洗濯板への観光拠点に最適。温暖な秋の南国リゾート気分と、天然温泉でゆったり寛げるコストパフォーマンス抜群の宿。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D68070"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:from-amber-700 hover:to-orange-700 transition duration-150 transform hover:-translate-y-0.5 w-full sm:w-auto text-sm sm:text-base"
            >
              <span>🏨</span> 楽天トラベルで空室・プランを見る
            </a>
          </div>
        </section>

        {/* Furusato Tax Guide Section */}
        <section className="bg-gradient-to-br from-amber-950 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-amber-200">
            💡 楽天ふるさと納税で「宿泊クーポン」を賢く手に入れる3ステップ
          </h3>
          <p className="text-stone-200 text-sm sm:text-base leading-relaxed mb-6">
            楽天ふるさと納税を利用すれば、宮崎県内の対象宿泊施設で使える楽天トラベルクーポンが寄付額に応じて返礼品として付与されます。実質負担2,000円で高級宿に泊まれるお得な活用法をチェックしましょう。
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
                <span className="text-amber-600 font-bold">Q.</span> 日南・飫肥城下町・青島の秋のベストシーズンはいつですか？
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">
                例年10月〜11月の秋獲れ天然伊勢海老解禁と温暖な日南海岸の秋リゾートが最高の見頃となります。標高差や気候に合わせて色づきや食材の旬が移り変わり、10月から11月下旬まで長く楽しめます。
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
                10月〜11月の日南・飫肥城下町・青島は朝晩の冷え込みが予想されます。日中は薄手のアウターで快適ですが、早朝や夜間、山間部の散策には防風ジャケットやフリース、歩きやすい靴をご用意ください。
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
