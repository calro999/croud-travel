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
  title: '【播磨灘の初冬の味覚・室津牡蠣解禁と小京都たつの白壁散策】2026-2027年11-12月の兵庫・西播磨！加熱しても縮まない極上室津かき尽くしと新舞子海岸の絶景夕日・播磨灘オーシャンビュー温泉名宿5選',
  description: '11月中旬に待望の漁解禁を迎える播磨灘の極上ブランド「室津牡蠣（むろつがき）」！加熱しても身が縮まず、濃厚な甘みと弾力を誇る焼き牡蠣・牡蠣鍋を本場で味わう至福の初冬旅。「播磨の小京都」龍野の風情ある武家屋敷・白壁の町並み散策と、干潟が茜色に染まる新舞子海岸のサンセット。瀬戸内海を一望するパノラマ露天風呂に癒やされる厳選名宿5選。',
  keywords: '兵庫県, 龍野, 温泉, 11月旅行, 12月旅行, 冬休み旅行, 初冬旅行, 楽天トラベル, ふるさと納税',
  openGraph: {
    title: '【播磨灘の初冬の味覚・室津牡蠣解禁と小京都たつの白壁散策】2026-2027年11-12月の兵庫・西播磨！加熱しても縮まない極上室津かき尽くしと新舞子海岸の絶景夕日・播磨灘オーシャンビュー温泉名宿5選',
    description: '11月中旬に待望の漁解禁を迎える播磨灘の極上ブランド「室津牡蠣（むろつがき）」！加熱しても身が縮まず、濃厚な甘みと弾力を誇る焼き牡蠣・牡蠣鍋を本場で味わう至福の初冬旅。「播磨の小京都」龍野の風情ある武家屋敷・白壁の町並み散策と、干潟が茜色に染まる新舞子海岸のサンセット。瀬戸内海を一望するパノラマ露天風呂に癒やされる厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-hyogo-tatsuno-murotsu-oyster-shinmaiko-sunset-aioi-onsen-stay/',
    type: 'article',
    siteName: 'クラウドトラベル',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-hyogo-tatsuno-murotsu-oyster-shinmaiko-sunset-aioi-onsen-stay/',
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
                  "name": "【播磨灘の初冬の味覚・室津牡蠣解禁と小京都たつの白壁散策】2026-2027年11-12月の兵庫・西播磨！加熱しても縮まない極上室津かき尽くしと新舞子海岸の絶景夕日・播磨灘オーシャンビュー温泉名宿5選",
                  "item": "https://croud-travel.pages.dev/winter-hyogo-tatsuno-murotsu-oyster-shinmaiko-sunset-aioi-onsen-stay/"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
        {
          "@type": "Question",
          "name": "室津の牡蠣はなぜ「加熱しても縮まない」のですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "室津湾は揖保川と千種川からミネラル豊富な栄養塩が絶え間なく供給され、プランクトンが日本屈指の豊富さを誇ります。この豊かな環境で育つため、一般的な産地では2〜3年かかるサイズにわずか1年（半年〜10ヶ月）の猛スピードで育ちます。細胞壁が若く水分をしっかり抱え込んでいるため、加熱しても縮まずプリプリの弾力が保たれるのです。"
          }
        },
        {
          "@type": "Question",
          "name": "新舞子海岸の「干潟の夕日」はいつ見られますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "干潟の美しい砂紋と夕陽のコラボレーションは、「大潮前後の干潮時間」と「日没時間（16:30〜17:15頃）」が重なる日に現れます。冬場は空気が乾燥して澄み渡るため、水平線まで茜色から紫色のグラデーションが美しく広がり、全国の写真愛好家が訪れる絶景スポットとなります。"
          }
        },
        {
          "@type": "Question",
          "name": "龍野城下町でおすすめのグルメやお土産はありますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "播磨名物の「揖保乃糸（手延素麺）」の本場であり、冬には温かい「にゅうめん」が人気です。また淡口醤油発祥の地であるため「醤油スイーツ（醤油ソフトクリームやもなか）」、さらに伝統の和菓子「揖保川の鮎」や地酒「奥播磨」なども素晴らしいお土産になります。"
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
          <span className="text-slate-800 font-medium truncate max-w-xs">【播磨灘の初冬の味覚・室津牡蠣解禁と小京都たつの白壁散策】2026-2027年11-12月の兵庫・西播磨！加熱しても縮まない極上室津かき尽くしと新舞子海岸の絶景夕日・播磨灘オーシャンビュー温泉名宿5選</span>
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
            【播磨灘の初冬の味覚・室津牡蠣解禁と小京都たつの白壁散策】2026-2027年11-12月の兵庫・西播磨！加熱しても縮まない極上室津かき尽くしと新舞子海岸の絶景夕日・播磨灘オーシャンビュー温泉名宿5選
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            11月中旬に待望の漁解禁を迎える播磨灘の極上ブランド「室津牡蠣（むろつがき）」！加熱しても身が縮まず、濃厚な甘みと弾力を誇る焼き牡蠣・牡蠣鍋を本場で味わう至福の初冬旅。「播磨の小京都」龍野の風情ある武家屋敷・白壁の町並み散策と、干潟が茜色に染まる新舞子海岸のサンセット。瀬戸内海を一望するパノラマ露天風呂に癒やされる厳選名宿5選。
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
            穏やかな光が降り注ぐ瀬戸内海・播磨灘（はりまなだ）。兵庫県南西部に位置する西播磨エリアは、豊かな歴史と海の幸が濃密に交差する隠れた大人の狙い目リゾートです。播磨の初冬を告げる最大の呼び物が、毎年11月中旬に解禁される極上の海のミルク『室津牡蠣（むろつがき）』です。揖保川（いぼがわ）と千種川（ちくさがわ）というふたつの清流から豊富な森の栄養分が注ぎ込む室津湾は、プランクトンが極めて豊富なため、通常2〜3年かかる牡蠣の育成がわずか1年（一年牡蠣）で大粒に仕上がります。その最大の特徴は、火を通しても『身が縮まない』こと。炭火で殻ごと焼けば、プリップリに膨らんだ乳白色の身からミルキーで濃厚な甘みと磯の香りが溢れ出し、一度味わうと他の牡蠣には戻れなくなると称されるほどです。牡蠣直売所や焼き牡蠣小屋が並ぶ室津港から少し北へ向かうと、そこは『播磨の小京都』と称えられる城下町『龍野（たつの）』。脇坂家五万三千石の歴史を今に伝える龍野城跡の白亜の城壁や本丸御殿、白壁の土蔵や武家屋敷が立ち並ぶ町並みは国の重要伝統的建造物群保存地区に選定されており、初冬の澄んだ大気のもとで凛とした歴史の香りを漂わせます。童謡『赤とんぼ』の作詞者・三木露風の生誕地としても知られ、江戸時代から続く淡口醤油発祥の地ならではの古い蔵巡りも旅情を深めます。さらに沿岸部へ戻れば、瀬戸内海国立公園に指定された『新舞子海岸（しんまいこかいがん）』。関西随一の遠浅海岸として知られ、初冬の夕暮れ時には干潟に現れる美しい潮紋（波の砂紋）が夕陽を浴びて黄金色に輝く奇跡の絶景が広がります。宿泊は播磨灘を一望するオーシャンビューの温泉ホテルへ。海と空が一体化するインフィニティ露天風呂に身を沈め、茜色に染まる瀬戸の島々を眺めながら極上の室津牡蠣フルコースを味わう時間は、心身を深い充足感で満たしてくれます。
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
              <span>11月中旬解禁！加熱しても身が縮まない極上ブランド「室津牡蠣」を本場で堪能</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              揖保川・千種川の森の恵みで育つ室津の牡蠣は、大粒でぷりっぷり、火を通しても縮まない奇跡の弾力とミルキーな甘みが特徴。焼き牡蠣、牡蠣鍋、カキフライと本場のフルコースは圧巻です。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                2
              </span>
              <span>播磨の小京都「龍野城下町」！白壁土蔵と武家屋敷が織りなす冬の情緒散策</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              国の重伝建地区に選ばれた龍野の町並み。龍野城跡の白壁や古い醤油蔵、武家屋敷通りが初冬の澄んだ青空に映え、赤とんぼの叙情あふれる静かな歴史歩きが楽しめます。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                3
              </span>
              <span>新舞子海岸の「黄金色の干潟夕日」と播磨灘パノラマ露天風呂の絶景ステイ</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              干潮と夕暮れが重なる時に現れる新舞子海岸の神秘的な潮紋絶景。瀬戸内海を見下ろす高台や波打ち際の露天風呂から、夕陽と満天の星を眺める極上のリゾート滞在が叶います。
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
              <span>近隣の必見名所：龍野</span>
            </h2>
            <span className="text-[11px] text-slate-400">Wikipedia・公式解説連携</span>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative h-52 md:h-60 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Tatsuno_castle01s2040.jpg/1280px-Tatsuno_castle01s2040.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="播磨の小京都・龍野城下町（白壁土蔵と武家屋敷の町並み・室津港の極上牡蠣と新舞子海岸の夕日）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="md:col-span-7 space-y-2.5">
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                播磨の小京都・龍野城下町（白壁土蔵と武家屋敷の町並み・室津港の極上牡蠣と新舞子海岸の夕日）
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                たつの市（たつのし）は、兵庫県の南西部（西播磨県民局）にある市。姫路市から西に約13kmの地点に位置する。...
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
        {/* 宿カード 1: 新舞子ガーデンホテル */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第1位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              新舞子海岸の高台から瀬戸内海を一望！絶景インフィニティ風呂と室津牡蠣
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.41</span>
              <span className="text-slate-400">（クチコミ 134件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/158525/158525.jpg"
                  alt="新舞子ガーデンホテル"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  新舞子ガーデンホテル
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>兵庫県たつの市御津町黒崎1710</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>山陽電車網干駅よりお車にて約１０分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>新舞子海岸を見下ろす高台に建ち、全室オーシャンビューを誇るリゾートホテル。広々としたバルコニーからは播磨灘の多島美と行き交う船を絵画のように望めます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>展望大浴場や露天風呂からは、時間とともに移り変わる瀬戸内海の夕景パノラマを堪能。湯船に浸かりながら水平線に沈む夕陽を眺める時間は格別です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>冬の夕食には、地元室津港直送の極上牡蠣を惜しみなく使った「牡蠣づくし会席」が登場。生牡蠣、焼き牡蠣、牡蠣鍋、牡蠣釜飯まで本場の味を堪能できます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥7,500</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158525%2F158525.html"
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

        {/* 宿カード 2: ＨＯＴＥＬ万葉岬 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第2位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              万葉の岬の頂に佇む絶景の隠れ家！270度パノラマの播磨灘ブルー
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.35</span>
              <span className="text-slate-400">（クチコミ 542件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/56745/56745.jpg"
                  alt="ＨＯＴＥＬ万葉岬"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  ＨＯＴＥＬ万葉岬
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>兵庫県相生市相生金ケ崎5321</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>ＪＲ　相生駅より送迎有り（予約制）</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>金ヶ崎の先端、万葉岬の高台に位置し、播磨灘を270度の大パノラマで見渡せる絶景宿。どこまでも続く水平線と小豆島、家島諸島の島影が一望できます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>展望風呂からも雄大な海景色が広がり、朝には海から昇る朝日、夕暮れには茜色の夕景を贅沢に独り占めできます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>料理長が腕を振るう冬の会席は、室津の牡蠣をはじめ前浜で獲れる新鮮な海の幸と播州の旬の野菜を美しく盛り込んだ創作和会席。静かな岬で贅沢な休日を過ごせます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥7,550</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56745%2F56745.html"
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

        {/* 宿カード 3: 相生ステーションホテル　アネックス */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第3位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              相生駅前の好アクセス！ビジネスから室津牡蠣グルメ旅まで幅広く対応
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">3.84</span>
              <span className="text-slate-400">（クチコミ 827件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/53413/53413.jpg"
                  alt="相生ステーションホテル　アネックス"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  相生ステーションホテル　アネックス
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>兵庫県相生市本郷町5-3</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>ＪＲ相生駅より徒歩約１分／車、山陽自動車道『龍野西』ＩＣより国道２号線を西へ約１０分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>新幹線が停車するJR相生駅から徒歩約1分という抜群の利便性を誇るホテル。観光やビジネスの拠点としてスマートに利用できます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>清潔感のある快適な客室にはシモンズ製ベッドを導入し、心地よい眠りをサポート。無料朝食サービスも好評です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>室津港や相生港の牡蠣小屋、龍野城下町へのアクセスも至便。リーズナブルに西播磨の冬旅を楽しみたいアクティブ派に最適です。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥4,300</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53413%2F53413.html"
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

        {/* 宿カード 4: 赤穂温泉　潮彩きらら　祥吉 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第4位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              瀬戸内海の絶景と一体化するインフィニティ露天！赤穂の銘宿で味わう極上牡蠣
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.41</span>
              <span className="text-slate-400">（クチコミ 1367件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/19404/19404.jpg"
                  alt="赤穂温泉　潮彩きらら　祥吉"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  赤穂温泉　潮彩きらら　祥吉
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>兵庫県赤穂市御崎2-8</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>ＪＲ赤穂線播州赤穂駅～『亀の井ホテル』行きバスで「御崎」バス停、下車１分／山陽道赤穂ＩＣ（ＥＴＣ専用）より約１０分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>播磨灘の波打ち際に佇み、海と空に溶け込むような絶景露天風呂で名高い赤穂温泉の上質旅館。西播磨エリアの海の恵みを存分に味わえます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>ミネラル豊富な赤穂温泉の湯に浸かりながら、潮騒の音と夕暮れの瀬戸内海を眺める湯浴みはまさに至福のひととき。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>冬の名物料理は、坂越・室津の清浄牡蠣を用いた贅沢な牡蠣会席。料理人の卓越した感性が光る一皿一皿が旅の夜を華やかに彩ります。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥9,000</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19404%2F19404.html"
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

        {/* 宿カード 5: 赤穂温泉　絶景露天風呂の宿　銀波荘 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第5位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              海に浮かぶような絶景露天風呂の最高峰！ミシュラン掲載の老舗名旅館
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.44</span>
              <span className="text-slate-400">（クチコミ 1388件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/19403/19403.jpg"
                  alt="赤穂温泉　絶景露天風呂の宿　銀波荘"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  赤穂温泉　絶景露天風呂の宿　銀波荘
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>兵庫県赤穂市御崎2-8</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>JR山陽本線・播州赤穂駅より路線バス約20分「御崎バス停」より徒歩1分・無料送迎あり／山陽自動車道・赤穂ＩＣより約10分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>日本屈指の絶景露天風呂『天海の湯』で全国的に知られる名旅館。湯船に浸かると湯面と瀬戸内海がひとつに繋がり、まるで海に浮かんでいるかのような感覚を味わえます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は冬の味覚の王様・播磨灘の牡蠣をはじめ、新鮮な瀬戸内の地魚や厳選された特選牛を取り入れた極上の会席料理。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>細やかなおもてなしと洗練された館内空間、波音を聴きながら眠りにつく客室など、大切な人との特別な記念日旅行にふさわしい至高の宿です。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥14,300</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19403%2F19403.html"
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
・電車：JR山陽本線または山陽新幹線「相生駅」または「播州赤穂駅」下車。JR姫新線「本竜野駅」からは龍野城下町へ徒歩約15分。新舞子海岸や室津港へは網干駅または相生駅より神姫バスまたはタクシーで約15〜20分（主要ホテルによる無料送迎あり）。
・車：山陽自動車道「龍野IC」または「龍野西IC」より龍野城下町まで約10分、新舞子海岸まで約20分。神戸・大阪方面（阪神高速〜第二神明〜姫路バイパス中地ランプ経由）から約1時間30分とアクセス抜群。
・新幹線：JR新大阪駅より山陽新幹線「相生駅」まで約50分（ひかり号・こだま号）。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月中旬〜12月（室津牡蠣の水揚げが本格解禁され、新舞子海岸の干潟夕日が最も美しく澄み渡る時期。直売所の直売や焼き牡蠣小屋もオープン）。
・気温の目安：瀬戸内海式気候のため比較的温暖ですが、海沿いは冬の浜風が吹き込みます。11月は日中13〜17℃、朝晩は6〜9℃。12月は日中でも9〜12℃、朝晩は2〜5℃。
・服装のポイント：海沿いの散策や夕日鑑賞、龍野城跡の散策には、風を通さない防風ジャケットやコート、ストールがあると快適です。干潟や城下町の石段を歩くため歩きやすい靴が推奨されます。
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
              <span>室津の牡蠣はなぜ「加熱しても縮まない」のですか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              室津湾は揖保川と千種川からミネラル豊富な栄養塩が絶え間なく供給され、プランクトンが日本屈指の豊富さを誇ります。この豊かな環境で育つため、一般的な産地では2〜3年かかるサイズにわずか1年（半年〜10ヶ月）の猛スピードで育ちます。細胞壁が若く水分をしっかり抱え込んでいるため、加熱しても縮まずプリプリの弾力が保たれるのです。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>新舞子海岸の「干潟の夕日」はいつ見られますか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              干潟の美しい砂紋と夕陽のコラボレーションは、「大潮前後の干潮時間」と「日没時間（16:30〜17:15頃）」が重なる日に現れます。冬場は空気が乾燥して澄み渡るため、水平線まで茜色から紫色のグラデーションが美しく広がり、全国の写真愛好家が訪れる絶景スポットとなります。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>龍野城下町でおすすめのグルメやお土産はありますか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              播磨名物の「揖保乃糸（手延素麺）」の本場であり、冬には温かい「にゅうめん」が人気です。また淡口醤油発祥の地であるため「醤油スイーツ（醤油ソフトクリームやもなか）」、さらに伝統の和菓子「揖保川の鮎」や地酒「奥播磨」なども素晴らしいお土産になります。
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
