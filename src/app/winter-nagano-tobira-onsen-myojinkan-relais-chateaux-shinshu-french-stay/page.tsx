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
  title: "【世界基準ルレ・エ・シャトー加盟「明神館」と山峡の秘湯】2026-2027年11-12月初冬の長野・松本奥座敷",
  description: '国定公園の豊かな山峡、薄川の清流沿いに佇む長野・松本の奥座敷「扉温泉」。世界の一流ホテル・レストランのみが加盟を許される「ルレ・エ・シャトー」に名を連ねる名門「明神館」をはじめ、初冬の静寂と自然の調和を五感で味わう最高峰リゾート。渓流と一体化する名物「雪見立ち湯露天風呂」や、無農薬自家農園野菜と信州プレミアム牛を用いたモダンフレンチ・創作和食懐石。日常の喧騒から完全に解き放たれる極上リトリート名宿5選。',
  keywords: '長野県, 美ヶ原, 高級旅館, 客室露天風呂, 記念日旅行, 11月旅行, 12月旅行, 楽天トラベル, ふるさと納税',
  openGraph: {
    title: "【世界基準ルレ・エ・シャトー加盟「明神館」と山峡の秘湯】2026-2027年11-12月初冬の長野・松本奥座敷",
    description: '国定公園の豊かな山峡、薄川の清流沿いに佇む長野・松本の奥座敷「扉温泉」。世界の一流ホテル・レストランのみが加盟を許される「ルレ・エ・シャトー」に名を連ねる名門「明神館」をはじめ、初冬の静寂と自然の調和を五感で味わう最高峰リゾート。渓流と一体化する名物「雪見立ち湯露天風呂」や、無農薬自家農園野菜と信州プレミアム牛を用いたモダンフレンチ・創作和食懐石。日常の喧騒から完全に解き放たれる極上リトリート名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-nagano-tobira-onsen-myojinkan-relais-chateaux-shinshu-french-stay/',
    type: 'article',
    siteName: 'クラウドトラベル',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-nagano-tobira-onsen-myojinkan-relais-chateaux-shinshu-french-stay/',
  },
};

export default function LuxuryWinterFeaturePage() {
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
                  "name": "【世界基準ルレ・エ・シャトー加盟「明神館」と山峡の秘湯】2026-2027年11-12月初冬の長野・松本奥座敷！渓流立ち湯雪見露天風呂と信州オーガニックフレンチ・自然に抱かれる最高峰ウェルネスリトリート名宿5選",
                  "item": "https://croud-travel.pages.dev/winter-nagano-tobira-onsen-myojinkan-relais-chateaux-shinshu-french-stay/"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
        {
          "@type": "Question",
          "name": "扉温泉「明神館」の立ち湯露天風呂は混浴ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "立ち湯露天風呂『雪月花』は大浴場エリアに併設されており、時間帯による男女完全入れ替え制、または男女別に分かれておりますので、どなたでも安心してご利用いただけます。水着の着用は不要で、自然の息吹を肌でダイレクトに感じながらご入浴いただけます。"
          }
        },
        {
          "@type": "Question",
          "name": "夕食の「ナチュレフレンチ」と「創作和食」はどのように選べますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "宿泊予約時にフレンチコースまたは和食コースを選択できます。連泊される場合は、1泊目をフレンチ、2泊目を和食と組み合わせて両方の味を楽しむスタイルが大変人気です。アレルギーや苦手な食材についても事前相談に応じて細やかに対応してくれます。"
          }
        },
        {
          "@type": "Question",
          "name": "11月〜12月に車で扉温泉へ行く場合、冬用タイヤは必須ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "標高1000mを超える山峡に位置するため、11月中旬以降は平野部で雨でも現地では雪になることが珍しくありません。また渓谷沿いの道路は日陰が多く凍結しやすいため、11月中旬以降にお車でアクセスする場合はスタッドレスタイヤの装着が絶対に必須です。運転に不安のある方は松本駅からの無料送迎バスのご利用を強くおすすめします。"
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
          <span className="text-slate-800 font-medium truncate max-w-xs">【世界基準ルレ・エ・シャトー加盟「明神館」と山峡の秘湯】2026-2027年11-12月初冬の長野・松本奥座敷！渓流立ち湯雪見露天風呂と信州オーガニックフレンチ・自然に抱かれる最高峰ウェルネスリトリート名宿5選</span>
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
            【世界基準ルレ・エ・シャトー加盟「明神館」と山峡の秘湯】2026-2027年11-12月初冬の長野・松本奥座敷！渓流立ち湯雪見露天風呂と信州オーガニックフレンチ・自然に抱かれる最高峰ウェルネスリトリート名宿5選
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            国定公園の豊かな山峡、薄川の清流沿いに佇む長野・松本の奥座敷「扉温泉」。世界の一流ホテル・レストランのみが加盟を許される「ルレ・エ・シャトー」に名を連ねる名門「明神館」をはじめ、初冬の静寂と自然の調和を五感で味わう最高峰リゾート。渓流と一体化する名物「雪見立ち湯露天風呂」や、無農薬自家農園野菜と信州プレミアム牛を用いたモダンフレンチ・創作和食懐石。日常の喧騒から完全に解き放たれる極上リトリート名宿5選。
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
            国宝松本城が鎮座する城下町・松本市街地から、車で薄川（すすきがわ）の渓谷沿いを遡ること約30分。八ヶ岳中信高原国定公園の原生林が迫る山峡の最奥部、手つかずの大自然に抱かれてひっそりと湯煙を立ち上らせる秘湯が『扉温泉（とびらおんせん）』です。その昔、天手力雄命（あめのたぢからおのみこと）が天の岩戸を開いた際、その岩の扉を運ぶ途中にこの地に落としたという神話から名付けられた神聖な地。この山峡に凛として佇むのが、世界の一流ホテルや名門レストランのみが加盟を許される世界的権威『ルレ・エ・シャトー』に日本国内でいち早く加盟した最高峰の名宿『扉温泉 明神館（みょうじんかん）』です。明神館の代名詞とも言えるのが、渓流のせせらぎを眼下に望む名物露天風呂『雪見立ち湯・雪月花』。深さ約120cmの湯船に立ったまま肩まで浸かると、手すりの向こうに広がる原生林と清流、そして初冬の白雪が視界いっぱいに広がり、まるで自然のキャンバスの中に溶け込んだかのような神秘的な感覚を味わえます。無色透明で胃腸病や疲労回復に効能豊かな弱アルカリ性単純温泉は、入るたびに心身の凝りを解きほぐしてくれます。そして明神館が世界中の美食家を惹きつけてやまないもうひとつの理由が、自社農園で無農薬栽培された朝採れ野菜と信州の恵みを主役にした至高のディナー。現代フランス料理の技法で仕立てるオーガニックフレンチ『ナチュレフレンチ』または伝統の『信州創作和食会席』を選べ、信州プレミアム牛のローストや清らかな湧水で育った信州サーモンが芸術的な一皿となって供されます。携帯電話の電波が届きにくいほどの静寂の中、渓流の音と暖炉の薪がはぜる音だけを聞きながら過ごす初冬の扉温泉は、五感を完全にリセットする本物のウェルネスリトリート体験となります。
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
              <span>世界基準「ルレ・エ・シャトー」加盟の誇り！原生林に抱かれた最高峰リトリート</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              厳格な審査基準をクリアした宿のみが認められる世界基準のホスピタリティ。山峡の静寂の中で、日常のストレスから完全に解放される至高の休日を過ごせます。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                2
              </span>
              <span>渓流と一体化する深さ120cmの「雪見立ち湯」！神秘的な大自然のパノラマ露天</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              立ったまま肩まで浸かる名物露天風呂『雪月花』や、寝湯、三輪の湯など多彩な湯処。目の前を流れる清流と初雪の渓谷美を間近に感じる湯浴みは圧巻です。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                3
              </span>
              <span>自家農園の無農薬野菜と信州プレミアム牛！心身が喜ぶモダンオーガニックフレンチ</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              直営農園で手塩にかけて育てられた新鮮野菜が主役のナチュレフレンチディナー。信州ワインとの完璧なマリアージュとともに、身体の内側から浄化される美食を堪能できます。
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
              <span>近隣の必見名所：美ヶ原</span>
            </h2>
            <span className="text-[11px] text-slate-400">Wikipedia・公式解説連携</span>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative h-52 md:h-60 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/8/84/Ushibuseyama_observatory.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
                alt="標高2000mの大パノラマ・美ヶ原高原（北アルプス・富士山を一望する天空の台地と山峡の秘湯）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="md:col-span-7 space-y-2.5">
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                標高2000mの大パノラマ・美ヶ原高原（北アルプス・富士山を一望する天空の台地と山峡の秘湯）
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                美ヶ原（うつくしがはら）は、八ヶ岳中信高原国定公園北西部にある長野県松本市、上田市、小県郡長和町にまたがる高原。日本百名山の一つ。...
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
        {/* 宿カード 1: 扉温泉　明神館 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第1位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              ルレ・エ・シャトー加盟の世界基準の宿！名物「立ち湯」とナチュレフレンチ
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.50</span>
              <span className="text-slate-400">（クチコミ 268件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/7112/7112.jpg"
                  alt="扉温泉　明神館"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  扉温泉　明神館
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>長野県松本市入山辺8967</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>松本ＩＣから約４０分美ヶ原高原方面へ。松本駅より無料シャトルバスもございます。</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>標高1050mの山峡に佇み、世界の一流ホテルのみが加盟する『ルレ・エ・シャトー』に認められた最高峰温泉リゾート。静寂と清流の音に包まれた極上の環境を誇ります。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>深さ120cmの立ったまま浸かる名物露天風呂『雪月花』からは、雪化粧した原生林と渓谷美を一望。自然と一体化する湯浴みは一生の思い出になります。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>自家農園の採れたて無農薬野菜を主役にしたオーガニックフレンチディナーは、身体の内側から美しくなる奇跡の美食体験を提供してくれます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥65,120</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7112%2F7112.html"
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

        {/* 宿カード 2: 美ヶ原温泉　追分屋旅館 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第2位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              美ヶ原温泉の静寂に佇む和モダン小宿！旬の味覚を彩る本格創作会席
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.43</span>
              <span className="text-slate-400">（クチコミ 369件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/32486/32486.jpg"
                  alt="美ヶ原温泉　追分屋旅館"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  美ヶ原温泉　追分屋旅館
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>長野県松本市里山辺1145</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>ＪＲ松本駅よりバスで２０分／松本ＩＣより車で２５分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>松本の奥座敷・美ヶ原温泉に位置し、落ち着いた和の美しさと温かなおもてなしでリピーターを魅了する大人の温泉旅館です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>館内にはアルカリ性単純温泉が引かれた大浴場と庭園露天風呂があり、柔らかな湯が旅の疲れを優しく解きほぐしてくれます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>料理長が工夫を凝らした夕食は、信州プレミアム牛や地元の旬魚、山の恵みをふんだんに使った創作和会席。地酒とのペアリングも充実しています。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥17,500</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32486%2F32486.html"
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

        {/* 宿カード 3: 松本ホテル花月 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第3位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              松本城下町の歴史を今に伝える名門！松本民芸家具に囲まれたクラシックホテル
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.53</span>
              <span className="text-slate-400">（クチコミ 3734件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/15154/15154.jpg"
                  alt="松本ホテル花月"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  松本ホテル花月
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>長野県松本市大手4-8-9</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>松本駅送迎あり◆要予約／松本ＢＴより「信州大学行バス」で約８分上土下車／ＪＲ松本駅より徒歩１５分／松本ＩＣより車で１０分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>明治20年創業、国宝松本城から徒歩圏内に建つ歴史あるクラシックホテル。館内には重厚な松本民芸家具が配され、ノスタルジックな美しさに満ちています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>ホテル敷地内には湧水『平成の名水百選・深志の水』が湧き出ており、大浴場やレストランの料理にも清冽な湧水が贅沢に使用されています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は信州の食材をフレンチ技法で昇華させたビストロ料理。松本市内観光と扉温泉への立ち寄り滞在の拠点として最高のロケーションです。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥11,880</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15154%2F15154.html"
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

        {/* 宿カード 4: 浅間温泉　菊之湯 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第4位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              本棟造りの豪壮な木造建築美！文化財の風情と自家源泉掛け流し
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.65</span>
              <span className="text-slate-400">（クチコミ 201件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/50116/50116.jpg"
                  alt="浅間温泉　菊之湯"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  浅間温泉　菊之湯
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>長野県松本市浅間温泉1-29-7</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>長野自動車道　松本ＩＣよりお車で約20分。JR松本駅より浅間温泉行きバス約25分「下浅間」下車、徒歩約1分。</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>信州独自の伝統建築『本棟造り』の風格ある佇まいが今に残る、浅間温泉屈指の老舗純和風旅館。手入れの行き届いた梁や柱が重厚な歴史を物語ります。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>館内のお風呂には良質な自家源泉が100%掛け流されており、肌触りの滑らかな美肌湯を心ゆくまで堪能できます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は地元長野の特産品を丹精込めて調理した伝統の会席膳。信州牛の陶板焼きなど、滋味あふれる郷土の美味を個室でゆっくり味わえます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥23,000</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50116%2F50116.html"
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

        {/* 宿カード 5: 浅間温泉　和泉荘 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第5位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              浅間温泉の清らかな源泉と旬の味覚！家族的な温もりあふれる温泉宿
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.38</span>
              <span className="text-slate-400">（クチコミ 587件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/2907/2907.jpg"
                  alt="浅間温泉　和泉荘"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  浅間温泉　和泉荘
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>長野県松本市浅間温泉1-29-9</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>松本駅よりバスで30分。浅間線「下浅間広場」徒歩1分。「中浅間」徒歩3分。信大横田循環線「浅間温泉入口」徒歩7分。</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>浅間温泉の閑静な一角に位置し、気兼ねなく寛げるアットホームなサービスと手頃な価格設定が魅力の温泉ホテルです。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>広々とした大浴場と露天風呂には浅間温泉の名湯が注がれ、ビジネスや観光の疲れをゆったりと癒やすことができます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>信州そばや旬の鍋料理など、季節の味覚を取り入れた夕食プランが好評。松本観光と温泉を気軽に楽しみたい旅行者に選ばれています。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥7,260</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2907%2F2907.html"
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
・電車：JR篠ノ井線・中央本線「松本駅」下車。JR新宿駅より特急「あずさ」で約2時間30分、名古屋駅より特急「しなの」で約2時間。松本駅アルプス口（西口）より明神館の無料送迎シャトルバス（予約制）で約35分。
・車：長野自動車道「松本IC」より国道158号線・県道経由で約40分。都心部（八王子IC）から中央道経由で約3時間。松本市街地を抜けてからは山あいの渓谷沿いの一本道となります。
・飛行機：信州まつもと空港よりタクシーで約50分。空港レンタカーの利用も便利です。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月中旬〜12月（山峡の木々が葉を落とし、初雪が舞い始める静寂の季節。暖炉の火が温かく灯り、立ち湯露天風呂からの雪見風呂が最高潮を迎えます）。
・気温の目安：標高約1050mの山あいに位置するため冷え込みが非常に厳しく、11月は日中8〜12℃、朝晩は0〜3℃。12月に入ると日中でも2〜5℃、朝晩は氷点下5℃近くまで下がります。
・服装のポイント：厚手のダウンコート、機能性インナー、マフラー、手袋、ニット帽の完全防寒仕様でお越しください。館内は全館暖房で快適ですが、露天風呂への移動時などには暖かい羽織りものが必要です。
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
              <span>扉温泉「明神館」の立ち湯露天風呂は混浴ですか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              立ち湯露天風呂『雪月花』は大浴場エリアに併設されており、時間帯による男女完全入れ替え制、または男女別に分かれておりますので、どなたでも安心してご利用いただけます。水着の着用は不要で、自然の息吹を肌でダイレクトに感じながらご入浴いただけます。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>夕食の「ナチュレフレンチ」と「創作和食」はどのように選べますか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              宿泊予約時にフレンチコースまたは和食コースを選択できます。連泊される場合は、1泊目をフレンチ、2泊目を和食と組み合わせて両方の味を楽しむスタイルが大変人気です。アレルギーや苦手な食材についても事前相談に応じて細やかに対応してくれます。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>11月〜12月に車で扉温泉へ行く場合、冬用タイヤは必須ですか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              標高1000mを超える山峡に位置するため、11月中旬以降は平野部で雨でも現地では雪になることが珍しくありません。また渓谷沿いの道路は日陰が多く凍結しやすいため、11月中旬以降にお車でアクセスする場合はスタッドレスタイヤの装着が絶対に必須です。運転に不安のある方は松本駅からの無料送迎バスのご利用を強くおすすめします。
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
