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
  title: "【小野小町ゆかりの美肌硫黄泉と初冬の米沢牛すき焼き】2026-2027年11-12月初冬の山形・小野川温泉",
  description: '平安の美女・小野小町が病を癒やしたと伝わる開湯1200年の名湯「小野川温泉」！毎分千リットルを超える豊富な源泉はラジウムと硫黄・塩分を含み、初冬の冷えた肌をしっとり潤す極上の美肌泉。温泉熱で冬に育てる冬の風物詩「小野川豆もやし」ラーメンや、日本屈指のブランド肉「米沢牛」の芳醇なすき焼き会席。湯煙たなびく温泉街で雪見風呂を心ゆくまで満喫する厳選名宿5選。',
  keywords: '山形県, 小野川温泉, 温泉, 11月旅行, 12月旅行, 冬休み旅行, 初冬旅行, 楽天トラベル, ふるさと納税',
  openGraph: {
    title: "【小野小町ゆかりの美肌硫黄泉と初冬の米沢牛すき焼き】2026-2027年11-12月初冬の山形・小野川温泉",
    description: '平安の美女・小野小町が病を癒やしたと伝わる開湯1200年の名湯「小野川温泉」！毎分千リットルを超える豊富な源泉はラジウムと硫黄・塩分を含み、初冬の冷えた肌をしっとり潤す極上の美肌泉。温泉熱で冬に育てる冬の風物詩「小野川豆もやし」ラーメンや、日本屈指のブランド肉「米沢牛」の芳醇なすき焼き会席。湯煙たなびく温泉街で雪見風呂を心ゆくまで満喫する厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-yamagata-onogawa-onsen-bihada-yonezawagyu-sukiyaki-mame-moyashi-stay/',
    type: 'article',
    siteName: 'クラウドトラベル',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-yamagata-onogawa-onsen-bihada-yonezawagyu-sukiyaki-mame-moyashi-stay/',
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
                  "name": "【小野小町ゆかりの美肌硫黄泉と初冬の米沢牛すき焼き】2026-2027年11-12月初冬の山形・小野川温泉！名物豆もやしラーメンと甲子大黒天参拝・情緒あふれる雪見露天風呂名宿5選",
                  "item": "https://croud-travel.pages.dev/winter-yamagata-onogawa-onsen-bihada-yonezawagyu-sukiyaki-mame-moyashi-stay/"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
        {
          "@type": "Question",
          "name": "「小野川豆もやし」はどこで食べられますか？お土産にも買えますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "小野川温泉街の食堂やラーメン店（「龍華食堂」や「佐藤豆腐店」など）で豆もやしラーメンや小鉢料理として味わえます。また温泉街の商店や朝市、宿泊旅館の売店でもパック詰めされた新鮮な豆もやしを購入できます。生産量が限られる貴重な伝統野菜のため、午前中の購入がおすすめです。"
          }
        },
        {
          "@type": "Question",
          "name": "小野川温泉の共同浴場には誰でも入れますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "温泉街には「滝の湯」と「尼湯（あまゆ）」というふたつの歴史ある共同浴場があり、どちらも宿泊客・日帰り客を問わず利用できます（入浴料数百円）。特に「尼湯」は小野小町が入浴したと伝わる風情ある湯小屋で、地元の方との温かいふれあいも楽しめます。"
          }
        },
        {
          "@type": "Question",
          "name": "11月・12月の米沢・小野川温泉周辺の雪道運転の注意点は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "米沢エリアは豪雪地帯として知られており、11月中旬以降は平地でも初雪が降ることがあります。12月に入ると完全な圧雪路面やアイスバーンになるため、お車の場合は必ず高性能なスタッドレスタイヤを装着してください。急発進・急ブレーキを避け、車間距離を十分にとって慎重に運転しましょう。"
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
          <span className="text-slate-800 font-medium truncate max-w-xs">【小野小町ゆかりの美肌硫黄泉と初冬の米沢牛すき焼き】2026-2027年11-12月初冬の山形・小野川温泉！名物豆もやしラーメンと甲子大黒天参拝・情緒あふれる雪見露天風呂名宿5選</span>
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
            【小野小町ゆかりの美肌硫黄泉と初冬の米沢牛すき焼き】2026-2027年11-12月初冬の山形・小野川温泉！名物豆もやしラーメンと甲子大黒天参拝・情緒あふれる雪見露天風呂名宿5選
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            平安の美女・小野小町が病を癒やしたと伝わる開湯1200年の名湯「小野川温泉」！毎分千リットルを超える豊富な源泉はラジウムと硫黄・塩分を含み、初冬の冷えた肌をしっとり潤す極上の美肌泉。温泉熱で冬に育てる冬の風物詩「小野川豆もやし」ラーメンや、日本屈指のブランド肉「米沢牛」の芳醇なすき焼き会席。湯煙たなびく温泉街で雪見風呂を心ゆくまで満喫する厳選名宿5選。
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
            山形県南部に位置する米沢盆地の奥座敷、大樽川の清流沿いに湯煙を上げる歴史ある温泉地が『小野川温泉（おのがわおんせん）』です。その開湯は平安時代初期の承和元年（834年）、絶世の美女と謳われた歌人・小野小町が父を探して京都から東北へ旅する途中、病に倒れた際に薬師如来のお告げによって霊泉を発見し、湯治によって病を癒やし美しさを取り戻したという伝説に始まります。小野川温泉の最大の特徴は、毎分1,000リットルを超える自噴泉を誇る類稀な泉質にあります。含硫黄-ナトリウム・カルシウム-塩化物温泉の泉質は、温泉街に足を踏み入れた瞬間にふわりと漂う硫黄の香りが旅情をそそり、美肌の天然保湿成分『メタケイ酸』を基準値の3倍近く含有。さらに国内有数の高濃度ラジウムを含んでいることから、肌をつるつるにしつつ血行を促して内側から免疫力を高める『温まりの湯』『美人の湯』として1200年にわたり愛され続けています。そして初冬の11月から12月にかけて、この温泉街でしか味わえない冬の奇跡の味覚が『小野川豆もやし』です。300年以上前の江戸時代から受け継がれるこのもやしは、真冬の雪の下、温泉の熱を利用した室（むろ）で清らかな温泉水と砂だけで一週間かけて手作業で栽培されます。一般的な大豆もやしの数倍にあたる約30cmもの長さを持ち、太い茎のシャキシャキとした驚異的な歯ごたえと独特の香ばしさは唯一無二。地元ラーメン店で供される『豆もやしラーメン』は、熱々の醤油スープにシャキシャキの豆もやしが山盛りに乗り、冬の寒さに冷え切った体を芯から温めてくれます。夜には、きめ細やかな霜降りと人肌でとろける脂の融点の低さを誇る日本三大和牛の最高峰『米沢牛』のすき焼き会席に舌鼓。白銀の初雪が温泉街の屋根をうっすらと白く染め始める中、湯気の立ち上る露天風呂で雪見酒を楽しむひとときは、みちのくの冬ならではの極上の贅沢です。
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
              <span>小野小町ゆかりの美肌ラジウム硫黄泉！メタケイ酸豊富な源泉掛け流し</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              平安の美女・小野小町が病を癒やした伝説が息づく名湯。高濃度のラジウムと硫黄、天然の保湿成分メタケイ酸がたっぷりと溶け込み、肌をしっとり潤して芯から温めます。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                2
              </span>
              <span>温泉熱が生み出す冬の奇跡「小野川豆もやし」と熱々のご当地ラーメン</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              江戸時代から温泉の熱と砂だけで育てる長さ30cmの伝統野菜。シャキシャキの強い歯ごたえと豊かな風味がたまらない『小野川豆もやしラーメン』は冬必食の郷土グルメです。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                3
              </span>
              <span>日本三大和牛の最高峰「米沢牛」すき焼きと風情あふれる初冬の雪見露天</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              とろけるような極上のサシが入った本場米沢牛の濃厚なすき焼き会席を堪能。湯煙漂う温泉街をそぞろ歩き、雪化粧を始めた山並みを望む露天風呂で至福のひとときを過ごせます。
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
              <span>近隣の必見名所：小野川温泉</span>
            </h2>
            <span className="text-[11px] text-slate-400">Wikipedia・公式解説連携</span>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative h-52 md:h-60 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Onogawa_onsen%2C_Amayu.jpg/1280px-Onogawa_onsen%2C_Amayu.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="小野小町ゆかりの美肌ラジウム泉・小野川温泉（開湯1200年の雪見名湯・名物小野川豆もやし）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="md:col-span-7 space-y-2.5">
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                小野小町ゆかりの美肌ラジウム泉・小野川温泉（開湯1200年の雪見名湯・名物小野川豆もやし）
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                小野川温泉（おのがわおんせん）は、山形県米沢市小野川町（旧国出羽国、明治以降は羽前国）に湧出する温泉である。米沢八湯の1つに数えられ、複数の温泉旅館が「温泉米沢八湯会」に加盟している。
温泉街は米沢の市街地から近く「米沢の奥座敷」と呼ばれている。地元以外には知名度の低い温泉地だったが、小野小町に由来すると言われる美人湯を核に、温泉街の活性化が試みられている。...
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
        {/* 宿カード 1: 小野川温泉　名湯の宿　吾妻荘　 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第1位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              創業四百年の歴史を誇る数寄屋造りの名宿！小町風呂と極上米沢牛
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.51</span>
              <span className="text-slate-400">（クチコミ 642件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/75394/75394.jpg"
                  alt="小野川温泉　名湯の宿　吾妻荘　"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  小野川温泉　名湯の宿　吾妻荘　
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>山形県米沢市小野川町2471</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>東北自動車道、福島JCTより東北中央道へ　米沢中央ＩＣより20分。</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>江戸時代から続く歴史と伝統を誇る小野川温泉屈指の老舗旅館。館内は手入れの行き届いた数寄屋造りの落ち着いた和の美しさに包まれています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>美肌成分たっぷりの自家源泉が注ぐ大浴場や開放的な露天風呂は、小野小町の伝説に想いを馳せながらゆったりと浸かれる極上の空間。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は米沢牛のすき焼きやしゃぶしゃぶ、ステーキを選べる贅沢な会席コース。山形の地酒とともに、伝統に裏打ちされた至高の美食を堪能できます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥16,000</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75394%2F75394.html"
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

        {/* 宿カード 2: 小野川温泉　亀屋万年閣 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第2位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              源泉100%掛け流しの名湯と大人の隠れ家！貸切風呂で過ごす贅沢な時間
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.79</span>
              <span className="text-slate-400">（クチコミ 116件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/27911/27911.jpg"
                  alt="小野川温泉　亀屋万年閣"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  小野川温泉　亀屋万年閣
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>山形県米沢市小野川町2481</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>【山形新幹線】「米沢駅」から路線バスまたはタクシー２５分　【東北中央自動車道】米沢中央ICより約２０分。</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>『美人の湯』として名高い小野川の源泉を一切加水・加温せず100%掛け流しで堪能できる湯自慢の宿。木の温もりあふれる貸切風呂も人気です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>モダンで居心地の良い客室はプライベート感にあふれ、静かに温泉と向き合いたいご夫婦やカップルの旅行に絶大な支持を得ています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食にはA5ランクの米沢牛をはじめ、地元の契約農家が育てる新鮮野菜や旬の山の幸をふんだんに使った手作り創作料理が並びます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥14,300</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27911%2F27911.html"
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

        {/* 宿カード 3: 小野川温泉　うめや旅館＜山形県＞ */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第3位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              自家源泉の新鮮な生きた温泉！家族的な温もりと旬の郷土料理
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.53</span>
              <span className="text-slate-400">（クチコミ 110件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/109154/109154.jpg"
                  alt="小野川温泉　うめや旅館＜山形県＞"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  小野川温泉　うめや旅館＜山形県＞
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>山形県米沢市小野川町2494</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>米沢駅よりお車にて２０分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>敷地内から滾々と湧き出る自家源泉を持ち、鮮度抜群の温泉を大浴場や露天風呂で心ゆくまで楽しめるアットホームな温泉旅館です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>お湯は硫黄の香る柔らかな肌触りで、入浴後はずっと体がポカポカ温かいと常連客からも絶賛されています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>女将さんの温かい笑顔と、米沢牛やすき焼き、名物豆もやし料理など心尽くしの手料理が並び、どこか懐かしい実家に帰ったような安心感に包まれます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥8,960</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109154%2F109154.html"
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

        {/* 宿カード 4: 小野川温泉　やな川屋旅館 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第4位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              展望露天風呂から温泉街の雪景色を一望！源泉掛け流しと米沢牛
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.00</span>
              <span className="text-slate-400">（クチコミ 86件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/27912/27912.jpg"
                  alt="小野川温泉　やな川屋旅館"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  小野川温泉　やな川屋旅館
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>山形県米沢市小野川町2486</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>ＪＲ米沢駅よりバスで30分／福島飯坂ＩＣ⇒Ｒ13号、Ｒ121号⇒小野川温泉／会津若松ＩＣ⇒Ｒ121号⇒小野川温泉へ</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>小野川温泉の高台に位置し、開放的な展望大浴場や露天風呂から湯煙たなびく温泉街と山並みの冬景色を一望できる宿です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>源泉掛け流しの湯は肌に優しく、雪見風呂を楽しみながら日頃の疲れを綺麗に洗い流してくれます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は米沢牛の濃厚なすき焼きをメインに、山形の郷土色豊かな旬の味覚をリーズナブルに味わえるプランが充実しています。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥6,600</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27912%2F27912.html"
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

        {/* 宿カード 5: 美湯美食の離れ宿　小野川温泉　河鹿荘 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第5位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              美湯と美食の極致！全室源泉掛け流し風呂付き離れも備える高級宿
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.42</span>
              <span className="text-slate-400">（クチコミ 578件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/27910/27910.jpg"
                  alt="美湯美食の離れ宿　小野川温泉　河鹿荘"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  美湯美食の離れ宿　小野川温泉　河鹿荘
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>山形県米沢市小野川町2070</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>東北中央道米沢中央ＩＣから20分・東京駅から山形新幹線で2時間9分！送迎バスの運行はございません</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>小野川温泉の自然豊かな敷地に佇み、広々とした大浴場や露天風呂、さらにプライベートな離れ客室を備えたハイクラス温泉宿です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>『美湯美食』の看板に違わず、料理長が厳選した米沢牛のサーロインやフィレ肉を炭火焼きや特製すき焼きで味わう夕食は圧巻のクオリティ。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>行き届いた上質なサービスとモダンな和の空間で、記念日や自分へのご褒美旅にふさわしい最高峰の滞在を提供してくれます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥8,220</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27910%2F27910.html"
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
・電車：山形新幹線「JR米沢駅」下車。米沢駅前より山交バス「白布温泉・小野川温泉行き」で約25分、「小野川温泉」下車すぐ。各旅館による米沢駅からの送迎サービスも多数あります。
・車：東北中央自動車道「米沢八幡原IC」または「米沢中央IC」より国道121号線経由で約20分。山形市内から約50分、福島市内（福島飯坂IC）から東北中央道経由で約45分。
・飛行機：山形空港よりレンタカーまたは空港シャトルでJR山形駅経由、約1時間15分。仙台空港からは新幹線利用で約1時間40分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月中旬〜12月（初雪が舞い始め、温泉の温もりが最も心地よく感じられる時期。冬の小野川豆もやしの収穫が本格化し、新酒の米沢地酒も出揃います）。
・気温の目安：盆地特有の内陸性気候のため初冬から冷え込みが厳しく、11月は日中8〜12℃、朝晩は1〜4℃。12月は日中でも3〜6℃、朝晩は氷点下に達します。
・服装のポイント：厚手のダウンジャケットやウールコート、マフラー、手袋、ニット帽の防寒具が必須です。11月下旬以降は路面凍結や積雪の可能性があるため、滑り止め付きのブーツや靴でお越しください。
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
              <span>「小野川豆もやし」はどこで食べられますか？お土産にも買えますか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              小野川温泉街の食堂やラーメン店（「龍華食堂」や「佐藤豆腐店」など）で豆もやしラーメンや小鉢料理として味わえます。また温泉街の商店や朝市、宿泊旅館の売店でもパック詰めされた新鮮な豆もやしを購入できます。生産量が限られる貴重な伝統野菜のため、午前中の購入がおすすめです。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>小野川温泉の共同浴場には誰でも入れますか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              温泉街には「滝の湯」と「尼湯（あまゆ）」というふたつの歴史ある共同浴場があり、どちらも宿泊客・日帰り客を問わず利用できます（入浴料数百円）。特に「尼湯」は小野小町が入浴したと伝わる風情ある湯小屋で、地元の方との温かいふれあいも楽しめます。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>11月・12月の米沢・小野川温泉周辺の雪道運転の注意点は？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              米沢エリアは豪雪地帯として知られており、11月中旬以降は平地でも初雪が降ることがあります。12月に入ると完全な圧雪路面やアイスバーンになるため、お車の場合は必ず高性能なスタッドレスタイヤを装着してください。急発進・急ブレーキを避け、車間距離を十分にとって慎重に運転しましょう。
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
