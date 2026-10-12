import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight, 
  Clock, ArrowRight, Utensils, Star, Compass, Train, ShieldCheck 
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【支笏湖ブルーの初冬静寂と全室温泉露天付きラグジュアリースイート】2026-2027年11-12月の北海道・支笏湖！最高峰「碧の座」＆レイクサイド名宿・北海道産白老牛と冬の極上毛ガニ名宿5選 | クラウドトラベル',
  description: '日本屈指の透明度を誇るカルデラ湖・支笏湖。11月〜12月の初冬は観光の混雑が去り、澄み渡る「支笏湖ブルー」の静寂と冠雪した恵庭岳の雄姿が湖面に映る最も美しい季節。鶴雅グループの最高峰ブランド「しこつ湖 鶴雅別荘 碧の座」をはじめ、全室に温泉露天風呂を備えた大人のプレミアムリゾート。とろける極上白老牛や噴火湾・オホーツクの冬の味覚を堪能する大人の記念日ステイ厳選5選。',
  keywords: '北海道, 支笏湖, 高級旅館, 客室露天風呂, 記念日旅行, 11月旅行, 12月旅行, 楽天トラベル, ふるさと納税',
  openGraph: {
    title: '【支笏湖ブルーの初冬静寂と全室温泉露天付きラグジュアリースイート】2026-2027年11-12月の北海道・支笏湖！最高峰「碧の座」＆レイクサイド名宿・北海道産白老牛と冬の極上毛ガニ名宿5選',
    description: '日本屈指の透明度を誇るカルデラ湖・支笏湖。11月〜12月の初冬は観光の混雑が去り、澄み渡る「支笏湖ブルー」の静寂と冠雪した恵庭岳の雄姿が湖面に映る最も美しい季節。鶴雅グループの最高峰ブランド「しこつ湖 鶴雅別荘 碧の座」をはじめ、全室に温泉露天風呂を備えた大人のプレミアムリゾート。とろける極上白老牛や噴火湾・オホーツクの冬の味覚を堪能する大人の記念日ステイ厳選5選。',
    url: 'https://croud-travel.pages.dev/winter-hokkaido-shikotsuko-luxury-aonoza-suizantei-shiraogyu-stay',
    type: 'article',
    siteName: 'クラウドトラベル',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-hokkaido-shikotsuko-luxury-aonoza-suizantei-shiraogyu-stay',
  },
};

export default function UltraLuxuryWinterFeaturePage() {

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【支笏湖ブルーの初冬静寂と全室温泉露天付きラグジュアリースイート】2026-2027年11-12月の北海道・支笏湖！最高峰「碧の座」＆レイクサイド名宿・北海道産白老牛と冬の極上毛ガニ名宿5選 | クラウドトラベル",
    "description": "日本屈指の透明度を誇るカルデラ湖・支笏湖。11月〜12月の初冬は観光の混雑が去り、澄み渡る「支笏湖ブルー」の静寂と冠雪した恵庭岳の雄姿が湖面に映る最も美しい季節。鶴雅グループの最高峰ブランド「しこつ湖 鶴雅別荘 碧の座」をはじめ、全室に温泉露天風呂を備えた大人のプレミアムリゾート。とろける極上白老牛や噴火湾・オホーツクの冬の味覚を堪能する大人の記念日ステイ厳選5選。",
    "image": ["https://croud-travel.pages.dev/winter-hokkaido-shikotsuko-luxury-aonoza-suizantei-shiraogyu-stay"],
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/winter-hokkaido-shikotsuko-luxury-aonoza-suizantei-shiraogyu-stay/"
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
                  "name": "【支笏湖ブルーの初冬静寂と全室温泉露天付きラグジュアリースイート】2026-2027年11-12月の北海道・支笏湖！最高峰「碧の座」＆レイクサイド名宿・北海道産白老牛と冬の極上毛ガニ名宿5選",
                  "item": "https://croud-travel.pages.dev/winter-hokkaido-shikotsuko-luxury-aonoza-suizantei-shiraogyu-stay"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
        {
          "@type": "Question",
          "name": "支笏湖の「碧の座」はオールインクルーシブですか？何が含まれますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "『しこつ湖 鶴雅別荘 碧の座』はオールインクルーシブスタイルを採用しており、ご夕食時やバーラウンジでの厳選された銘酒（シャンパン、ワイン、北海道の地酒、ウイスキー等）、客室内の冷蔵庫のドリンク、スイーツ、ラウンジでの軽食サービスがすべて宿泊代金に含まれています（一部の特別ヴィンテージボトルを除く）。チェックインからアウトまで追加料金を気にせず贅沢に寛げます。"
          }
        },
        {
          "@type": "Question",
          "name": "真冬でも支笏湖が凍らないのはなぜですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "支笏湖は最大水深が363mと非常に深く、膨大な水量を蓄えています。秋から冬にかけて冷却された表面の水が沈み、温かい深層水と循環し続けるため、水温が湖全体で下がりにくく、極寒の北海道にあっても湖面全体が凍結しない「日本最北の不凍湖」となっています。"
          }
        },
        {
          "@type": "Question",
          "name": "11月・12月に新千歳空港から車で向かう場合の道路状況は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "道道16号線（支笏湖公園線）は整備された幹線道路ですが、11月中旬以降は峠付近や日陰で路面凍結や積雪が発生します。レンタカーを利用する場合は必ず4WD・スタッドレスタイヤ装着車を指定し、急ブレーキや急ハンドルを避けた安全運転を心掛けてください。"
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
          <span className="text-slate-800 font-medium truncate max-w-xs">【支笏湖ブルーの初冬静寂と全室温泉露天付きラグジュアリースイート】2026-2027年11-12月の北海道・支笏湖！最高峰「碧の座」＆レイクサイド名宿・北海道産白老牛と冬の極上毛ガニ名宿5選</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white py-14 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto space-y-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026-2027年 憧れの高級宿・ラグジュアリー特選</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
            【支笏湖ブルーの初冬静寂と全室温泉露天付きラグジュアリースイート】2026-2027年11-12月の北海道・支笏湖！最高峰「碧の座」＆レイクサイド名宿・北海道産白老牛と冬の極上毛ガニ名宿5選
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            日本屈指の透明度を誇るカルデラ湖・支笏湖。11月〜12月の初冬は観光の混雑が去り、澄み渡る「支笏湖ブルー」の静寂と冠雪した恵庭岳の雄姿が湖面に映る最も美しい季節。鶴雅グループの最高峰ブランド「しこつ湖 鶴雅別荘 碧の座」をはじめ、全室に温泉露天風呂を備えた大人のプレミアムリゾート。とろける極上白老牛や噴火湾・オホーツクの冬の味覚を堪能する大人の記念日ステイ厳選5選。
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
            新千歳空港から車でわずか40分、原生林を抜けた先に突如として広がる紺碧のカルデラ湖『支笏湖（しこつこ）』。環境省の水質測定調査で幾度も全国1位に輝く驚異的な透明度を誇り、水深が360mを超えるため真冬でも湖水が凍結しない『日本最北の不凍湖』として知られます。11月から12月にかけての初冬は、夏のカヌー客や紅葉観光の賑わいが去り、ピンと張り詰めた清冽な大気の中に『支笏湖ブルー』と冠雪した恵庭岳（標高1320m）の静寂が広がる年間で最も神聖なシーズン。湖畔に湧き出る支笏湖温泉は、重曹と食塩を豊富に含み『美肌の湯』として名高く、とろみのある湯が冬の冷えた肌をしっとりと包み込みます。この静寂の湖畔に誕生した北海道のラグジュアリーの頂点が、鶴雅グループのフラッグシップ『しこつ湖 鶴雅別荘 碧の座（あおのざ）』。全室が100平米を超えるレイクビューの温泉露天風呂付きスイートで構成され、縄文文化やアイヌ文様の美意識を取り入れた調度品に囲まれながら、オールインクルーシブで極上の美酒と美食に浸ることができます。夕食には、厳しい寒さの中で脂の乗りが最高潮に達する噴火湾・オホーツク海の活毛ガニやウニ、そして洞爺湖サミットの晩餐会でも称賛された最高級ブランド『白老牛（しらおいぎゅう）』の炭火焼きステーキ。湖のさざ波と木々のざわめきだけが響く完全プライベート空間で過ごす初冬の支笏湖は、日常のすべてをリセットし魂を満たす至高の隠れ里です。
          </p>
          
          <div className="pt-4 space-y-3">
            <h3 className="text-sm md:text-base font-bold text-slate-900">
              ▼ 本テーマが初冬の記念日・贅沢旅に絶対おすすめな3大ポイント
            </h3>
            <div className="space-y-3">
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                1
              </span>
              <span>日本屈指の透明度「支笏湖ブルー」と全室温泉露天付きラグジュアリースイート</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              環境省調査で水質日本一に幾度も輝く奇跡のカルデラ湖。鶴雅最高峰『碧の座』をはじめ全室に専用温泉露天風呂を備えた極上の空間で、静まり返る湖面を眺める至福の湯浴みが叶います。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                2
              </span>
              <span>極上ブランド「白老牛」ステーキと冬の北海道が誇る活毛ガニ・海鮮の饗宴</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              近隣の白老町で育つ最高峰黒毛和牛・白老牛の上質な肉の旨味と、身がぎっしり詰まった初冬の毛ガニ。北海道の豊かな海山の恵みを贅を尽くした懐石や創作コースで堪能できます。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                3
              </span>
              <span>新千歳空港からわずか40分！都会の喧騒から隔絶された大人の極上リトリート</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              飛行機を降りてわずか40分のドライブで辿り着ける圧倒的な非日常。恵庭岳の初雪景色と手つかずの原生林に抱かれ、オールインクルーシブの贅沢な滞在を満喫できます。
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
              <span>近隣の必見名所：支笏湖</span>
            </h2>
            <span className="text-[11px] text-slate-400">Wikipedia・公式解説連携</span>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative h-52 md:h-60 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Lake_Shikotsu_Mt_Eniwa-dake03n4272.jpg/1280px-Lake_Shikotsu_Mt_Eniwa-dake03n4272.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="日本屈指の透明度を誇るカルデラ湖・支笏湖（日本最北の不凍湖・支笏湖ブルーと恵庭岳の冬景色）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="md:col-span-7 space-y-2.5">
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                日本屈指の透明度を誇るカルデラ湖・支笏湖（日本最北の不凍湖・支笏湖ブルーと恵庭岳の冬景色）
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                支笏湖（しこつこ）は、北海道千歳市にある淡水湖。支笏洞爺国立公園に属し、日本最北の不凍湖となっている。...
              </p>
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-200/60 text-[11px] md:text-xs text-amber-900 leading-relaxed">
                <span className="font-bold block mb-0.5">💡 周辺観光のポイント</span>
                各高級旅館からスムーズにアクセス可能。初冬の澄んだ大気のもとで、静寂と壮大な自然美を心ゆくまで堪能できます。
              </div>
            </div>
          </div>
        </section>

        {/* 楽天API厳選宿 5選 */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3 flex items-end justify-between">
            <div>
              <span className="text-xs font-bold text-rose-600 tracking-wider block">RAKUTEN TRAVEL LUXURY RANKING</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                一生に一度は泊まりたい最高峰名宿 5選
              </h2>
            </div>
            <span className="text-xs text-slate-500">リアルタイムAPI連携データ</span>
          </div>

          <div className="space-y-6">
        {/* 宿カード 1: しこつ湖　鶴雅別荘　碧の座 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第1位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              鶴雅グループの最高峰フラッグシップ！全室温泉露天付きラグジュアリー別荘
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.54</span>
              <span className="text-slate-400">（クチコミ 38件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/172249/172249.jpg"
                  alt="しこつ湖　鶴雅別荘　碧の座"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  しこつ湖　鶴雅別荘　碧の座
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>北海道千歳市支笏湖温泉</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>新千歳空港～車で約４０分。　【送迎バス運行・完全予約制】千歳方面（通年・無料）詳細は公式サイトのaccessへ</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>日本最北の不凍湖・支笏湖を望むわずか数室のみの最高級リゾート。すべての客室が100平米を超える広大なスイートで、専用の温泉露天風呂とジェットバスを完備しています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>オールインクルーシブを採用し、バーラウンジや夕食時の上質なシャンパン、ワイン、プレミアムウイスキーが気兼ねなく楽しめる極上の空間です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は北海道の最高峰食材を結集した料理長特選の懐石料理。極上の白老牛や旬の毛ガニ、ウニなど北の美味を一皿ごとに芸術のように味わえます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥80,223</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172249%2F172249.html"
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

        {/* 宿カード 2: しこつ湖　鶴雅別荘　湖白の抄 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第2位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              湖を望むプライベートヴィラ！洗練されたデザインと上質な静寂の空間
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">高評価</span>
              <span className="text-slate-400">（クチコミ 0件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/201760/201760.jpg"
                  alt="しこつ湖　鶴雅別荘　湖白の抄"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  しこつ湖　鶴雅別荘　湖白の抄
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>北海道千歳市支笏湖温泉</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>新千歳空港～車で約４０分。　【送迎バス運行・完全予約制】千歳方面（通年・無料）詳細は公式サイトのアクセスへ</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>支笏湖の自然景観に溶け込むように設計された大人のためのプレミアム宿。現代的な快適性と北国の温もりが調和した客室が心を満たします。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>客室に備えられた温泉風呂からは移り変わる支笏湖の初冬景色を一望。静寂の中で手つかずの自然と対話する贅沢な時間を過ごせます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>北海道産の厳選素材を用いた目にも美しい創作ディナーが自慢。専任スタッフによる行き届いたおもてなしが特別な滞在を演出してくれます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥46,464</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F201760%2F201760.html"
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

        {/* 宿カード 3: 支笏湖第一寶亭留　翠山亭 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第3位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              支笏湖畔に佇む老舗名門の宿！趣異なる湯処と北海道の美食会席
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.49</span>
              <span className="text-slate-400">（クチコミ 746件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/16750/16750.jpg"
                  alt="支笏湖第一寶亭留　翠山亭"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  支笏湖第一寶亭留　翠山亭
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>北海道千歳市支笏湖温泉</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>新千歳空港からお車で50分。JR千歳駅,14時無料送迎有。（完全予約制）</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>支笏湖温泉の歴史とともに歩んできた第一寶亭留グループの名旅館。落ち着いた和モダンの館内には木の温もりが満ちあふれています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>美肌効果に優れた自家源泉の湯を大浴場や客室露天風呂で心ゆくまで堪能。しっとりとした肌触りの湯が冬の冷えた体を芯から温めます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は白老牛や近郊の契約農家から届く冬野菜を盛り込んだ本格和食会席。丁寧に出汁をとった滋味あふれる料理が旅人の舌を唸らせます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥16,748</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16750%2F16750.html"
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

        {/* 宿カード 4: 雨ノ日と夕やけ */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第4位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              ぬくもりのデザインと自家製スイーツ！心地よい大人のプライベートステイ
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.75</span>
              <span className="text-slate-400">（クチコミ 164件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/73940/73940.jpg"
                  alt="雨ノ日と夕やけ"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  雨ノ日と夕やけ
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>北海道千歳市支笏湖温泉</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>ＪＲ千歳駅から中央バス支笏湖行き乗車、支笏湖で下車徒歩6分。JR千歳駅より無料送迎バス運行（完全予約制）</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>支笏湖の森に寄り添うように佇むアットホームで上質な温泉ホテル。洗練されたインテリアと心地よい音楽が非日常へと誘います。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>クチコミ評価★4.75を誇り、手作りの焼き菓子やスイーツ、心温まる接客が女性やカップルから絶大な支持を集めています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食には道産牛のローストや新鮮な海の幸を彩り豊かに配した創作ディナー。静かに過ごしたい大人の休日にぴったりの名宿です。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥15,593</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73940%2F73940.html"
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

        {/* 宿カード 5: 北海道の全室温泉付きホテル　レイクサイドヴィラ翠明閣 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第5位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              全室レイクビュー＆天然温泉付き！湖の波打ち際に建つスモールラグジュアリー
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.50</span>
              <span className="text-slate-400">（クチコミ 132件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/73964/73964.jpg"
                  alt="北海道の全室温泉付きホテル　レイクサイドヴィラ翠明閣"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  北海道の全室温泉付きホテル　レイクサイドヴィラ翠明閣
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>北海道千歳市支笏湖温泉</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>新千歳空港より車で４０分　札幌中心部から車で７５分　新千歳空港・千歳駅～中央バス約５０分～支笏湖バス停　下車徒歩５分　　</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>支笏湖の波打ち際に建ち、わずか8室すべての客室から雄大な支笏湖ブルーを一望できる全室温泉付きの隠れ家ホテルです。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>客室の窓いっぱいに広がる湖と恵庭岳のパノラマは絵画のよう。24時間いつでも好きな時にプライベートな温泉浴を楽しめます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は本格的なイタリアンまたはフレンチコース。湖畔に佇むレストランで、静かに波音を聞きながらワイングラスを傾ける時間は格別です。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥28,204</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73964%2F73964.html"
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
・飛行機・空港から：新千歳空港より車・レンタカーまたはタクシーで国道36号線・道道16号線（支笏湖公園線）を経由して約40分。空港発の北海道中央バス（支笏湖行き）で約55分。
・電車・札幌方面から：JR札幌駅より千歳線快速エアポートで千歳駅まで約30分、千歳駅より中央バスで約45分。各高級旅館による千歳駅や新千歳空港からの完全プライベート送迎（要事前予約）も充実しています。
・車：道央自動車道「千歳IC」より約30分。札幌市内中心部からは国道453号線経由で約1時間15分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月中旬〜12月（紅葉後の静寂が訪れ、初雪をまとった恵庭岳の美しいコントラストと澄み切った支笏湖ブルーを静かに堪能できる狙い目時期）。
・気温の目安：北海道の内陸湖畔のため寒さが本格化し、11月は日中5〜9℃、朝晩は氷点下前後。12月は日中でも0〜3℃、朝晩は氷点下5〜10℃近くまで冷え込みます。
・服装のポイント：厚手のロングダウンコート、防風仕様のアウター、マフラー、手袋、ニット帽が必須です。靴は底に滑り止めが付いた防水スノーブーツや防寒靴をご着用ください。
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
              <span>支笏湖の「碧の座」はオールインクルーシブですか？何が含まれますか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              『しこつ湖 鶴雅別荘 碧の座』はオールインクルーシブスタイルを採用しており、ご夕食時やバーラウンジでの厳選された銘酒（シャンパン、ワイン、北海道の地酒、ウイスキー等）、客室内の冷蔵庫のドリンク、スイーツ、ラウンジでの軽食サービスがすべて宿泊代金に含まれています（一部の特別ヴィンテージボトルを除く）。チェックインからアウトまで追加料金を気にせず贅沢に寛げます。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>真冬でも支笏湖が凍らないのはなぜですか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              支笏湖は最大水深が363mと非常に深く、膨大な水量を蓄えています。秋から冬にかけて冷却された表面の水が沈み、温かい深層水と循環し続けるため、水温が湖全体で下がりにくく、極寒の北海道にあっても湖面全体が凍結しない「日本最北の不凍湖」となっています。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>11月・12月に新千歳空港から車で向かう場合の道路状況は？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              道道16号線（支笏湖公園線）は整備された幹線道路ですが、11月中旬以降は峠付近や日陰で路面凍結や積雪が発生します。レンタカーを利用する場合は必ず4WD・スタッドレスタイヤ装着車を指定し、急ブレーキや急ハンドルを避けた安全運転を心掛けてください。
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
            高価格帯の高級宿だからこそ、楽天トラベルふるさと納税クーポンの割引効果は絶大。実質2,000円の自己負担で憧れのスイートルームに宿泊できます。
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
