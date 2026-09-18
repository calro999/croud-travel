import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '丹波篠山の秋の味覚狩り（丹波黒枝豆・丹波栗）＆丹波篠山城下町の古民家宿・名物ぼたん鍋 | クラウドトラベルふるさと納税',
  description: '10月中旬〜11月下旬に旬のピークを迎える丹波黒枝豆・丹波栗・松茸・本場ぼたん鍋（猪肉）。重要伝統的建造物群保存地区の篠山城下町で、風情ある宿と丹波篠山温泉をふるさと納税でお得に満喫。',
  keywords: ['丹波篠山・篠山城下町・こんだ 紅葉 グルメ', '兵庫県 秋 10月 11月', '丹波篠山黒枝豆・丹波栗＆篠山城下町ぼたん鍋', 'ふるさと納税 温泉宿泊券', '旅館 浪花館 丹波・篠山 篭坊温泉', '丹波篠山 潯陽楼', '篠山城下町ホテルＮＩＰＰＯＮＩＡ', '楽天ふるさと納税 温泉クーポン'],
  alternates: {
    canonical: 'https://croud-travel.com/furusato-tax-tamba-sasayama-autumn-gourmet-stay',
  },
  openGraph: {
    title: '丹波篠山の秋の味覚狩り（丹波黒枝豆・丹波栗）＆丹波篠山城下町の古民家宿・名物ぼたん鍋',
    description: '10月中旬〜11月下旬に旬のピークを迎える丹波黒枝豆・丹波栗・松茸・本場ぼたん鍋（猪肉）。重要伝統的建造物群保存地区の篠山城下町で、風情ある宿と丹波篠山温泉をふるさと納税でお得に満喫。',
    url: 'https://croud-travel.com/furusato-tax-tamba-sasayama-autumn-gourmet-stay',
    siteName: 'クラウドトラベル (croud-travel.com)',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "丹波篠山の秋の味覚狩り（丹波黒枝豆・丹波栗）＆丹波篠山城下町の古民家宿・名物ぼたん鍋",
    "description": "10月中旬〜11月下旬に旬のピークを迎える丹波黒枝豆・丹波栗・松茸・本場ぼたん鍋（猪肉）。重要伝統的建造物群保存地区の篠山城下町で、風情ある宿と丹波篠山温泉をふるさと納税でお得に満喫。",
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
    "mainEntityOfPage": "https://croud-travel.com/furusato-tax-tamba-sasayama-autumn-gourmet-stay"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "丹波篠山・篠山城下町・こんだの秋（10月〜11月）の見どころや旬の味覚は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "例年10月中旬〜11月下旬の「味覚の宝庫」丹波篠山の黒枝豆解禁と城下町紅葉が最高のシーズンです。息をのむ秋の絶景とともに、この時期にしか味わえない旬のブランド食材や名物鍋をご堪能いただけます。"
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
        "name": "秋の丹波篠山・篠山城下町・こんだ旅行のおすすめの過ごし方は？",
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
              兵庫県 / 丹波篠山・篠山城下町・こんだ
            </span>
            <span className="bg-orange-600/40 text-orange-200 border border-orange-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              10月〜11月 秋限定特集
            </span>
            <span className="bg-emerald-600/40 text-emerald-200 border border-emerald-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              ふるさと納税 宿泊クーポン対象
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            丹波篠山の秋の味覚狩り（丹波黒枝豆・丹波栗）＆丹波篠山城下町の古民家宿・名物ぼたん鍋
          </h1>
          <p className="text-base sm:text-lg text-amber-100 max-w-3xl leading-relaxed">
            秋の味覚の王者「丹波黒枝豆」「丹波栗」「ぼたん鍋」が集結。歴史息づく城下町の隠れ宿で過ごす極上の美食旅。
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1">📅 旬のシーズン：10月中旬〜11月下旬の「味覚の宝庫」丹波篠山の黒枝豆解禁と城下町紅葉</span>
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
            はじめに：10月・11月の丹波篠山・篠山城下町・こんだで叶える極上の秋旅
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            秋が深まる10月から11月、兵庫県・丹波篠山・篠山城下町・こんだエリアは一年の中で最も豊かで魅力的な表情を見せてくれます。澄み切った秋空に映える山々や渓谷のグラデーション、歴史ある町並みに漂う秋の情緒、そしてこの季節ならではの極上グルメが旅人を迎えます。
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            日中は心地よい秋風を感じながら散策やドライブを楽しみ、夕暮れには名湯に浸かって日頃の疲れを解きほぐす――。夜には地域の特産食材や旬の味覚をふんだんに盛り込んだ贅沢な会席料理に舌鼓を打つひとときは、何物にも代えがたい幸福感をもたらします。
          </p>
          <p className="text-slate-700 leading-relaxed">
            本記事では、丹波篠山・篠山城下町・こんだエリアで高い評価を獲得しているおすすめの名宿3選を詳しくご紹介します。楽天ふるさと納税を活用すれば、実質自己負担わずか2,000円でお得に宿泊クーポンを取得可能。賢く上質な大人の秋旅を計画しましょう。
          </p>
        </section>

        {/* Highlight Map / Summary Points */}
        <section className="bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200 mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <span>🍁</span> 丹波篠山・篠山城下町・こんだ 秋旅の3大魅力ポイント
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
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">旅館 浪花館 丹波・篠山 篭坊温泉</h3>
              <p className="text-xs text-slate-500">りょかん なにわかん たんば ささやま かごぼうおんせん</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.2点 <span className="text-xs font-normal text-slate-600">(8件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/130472/130472.jpg"
                alt="旅館 浪花館 丹波・篠山 篭坊温泉の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  平家の落人伝説が残る奥篠山の秘湯「篭坊温泉」に佇む川沿いの老舗料理旅館。羽束川の清流を望み、天然温泉と秋の丹波篠山名物「ぼたん鍋」を堪能。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  含二酸化炭素・ナトリウム-塩化物・炭酸水素塩冷鉱泉（天然ラジウム・含鉄炭酸泉） / 効能：神経痛、リウマチ、冷え性、胃腸病、疲労回復
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：JR福知山線「篠山口駅」より車・タクシーで約30分 / 舞鶴若狭自動車道「丹南篠山口IC」より車で約25分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                本場丹波篠山の特選ぼたん鍋（極上猪肉×自家製秘伝味噌）、丹波黒枝豆の塩茹で、丹波栗の渋皮煮・栗ご飯、清流あまごの塩焼き
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                深山幽谷の静寂と川のせせらぎに包まれる秘湯の一軒宿。秋には山全体が紅葉に染まり、秘伝味噌で味わうぼたん鍋の深いコクが五臓六腑に染み渡ります。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D130472"
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
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">丹波篠山 潯陽楼</h3>
              <p className="text-xs text-slate-500">たんばささやま じんようろう</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.5点 <span className="text-xs font-normal text-slate-600">(50件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/18267/18267.jpg"
                alt="丹波篠山 潯陽楼の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  篠山城下町近くに位置し、明治・大正の文豪や著名人に愛されてきた伝統の料理旅館。創業100年を超える歴史が醸し出す格調高い空間と、丹波の至高の味覚を提供。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  貸切家族風呂（ミネラル豊富な温まりの湯） / 効能：疲労回復、リラクゼーション、冷え性改善
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：JR福知山線「篠山口駅」より神姫バス「篠山営業所行き」約15分、「二階町」下車徒歩約3分 / 丹南篠山口ICより車で約10分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                丹波篠山名物・極上猪肉のぼたん鍋会席、丹波牛ステーキ、秋獲れ丹波黒枝豆、丹波松茸の土瓶蒸し（秋季限定）、丹波栗ご飯
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                篠山城跡や武家屋敷通りの散策に最適なロケーション。歴史あるお屋敷で、秋の味覚の王者・ぼたん鍋と丹波栗を堪能する贅沢な時間。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D18267"
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
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">篠山城下町ホテルＮＩＰＰＯＮＩＡ</h3>
              <p className="text-xs text-slate-500">ささやまじょうかまちほてる にっぽにあ</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: 4.36点 <span className="text-xs font-normal text-slate-600">(213件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="https://img.travel.rakuten.co.jp/share/HOTEL/149449/149449.jpg"
                alt="篠山城下町ホテルＮＩＰＰＯＮＩＡの外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  城下町全体を一つのホテルに見立てた分散型古民家リゾート。国重要伝統的建造物群保存地区に点在する歴史的建造物をモダンにリノベーションした唯一無二の滞在体験。
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  檜風呂・モダン客室風呂（客室ごとに異なる上質なバスルーム）
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：JR篠山口駅より車・バスで約15分（送迎あり要事前予約） / 丹南篠山口ICより車で約12分
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                関西フレンチの重鎮が手掛ける丹波篠山テロワールフレンチ。但馬牛・丹波黒豆・丹波栗・地場有機野菜をフレンチ技法で昇華した極上コース
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                江戸・明治・大正の町家に泊まり、篠山の歴史と暮らすように滞在。地産地消の絶品フレンチと城下町の紅葉が心に深く刻まれます。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Fimg.travel.rakuten.co.jp%2Fimage%2Ftr%2Fapi%2Fkw%2FJBe8h%2F%3Ff_no%3D149449"
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
            楽天ふるさと納税を利用すれば、兵庫県内の対象宿泊施設で使える楽天トラベルクーポンが寄付額に応じて返礼品として付与されます。実質負担2,000円で高級宿に泊まれるお得な活用法をチェックしましょう。
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
                <span className="text-amber-600 font-bold">Q.</span> 丹波篠山・篠山城下町・こんだの秋のベストシーズンはいつですか？
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">
                例年10月中旬〜11月下旬の「味覚の宝庫」丹波篠山の黒枝豆解禁と城下町紅葉が最高の見頃となります。標高差や気候に合わせて色づきや食材の旬が移り変わり、10月から11月下旬まで長く楽しめます。
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
                10月〜11月の丹波篠山・篠山城下町・こんだは朝晩の冷え込みが予想されます。日中は薄手のアウターで快適ですが、早朝や夜間、山間部の散策には防風ジャケットやフリース、歩きやすい靴をご用意ください。
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
