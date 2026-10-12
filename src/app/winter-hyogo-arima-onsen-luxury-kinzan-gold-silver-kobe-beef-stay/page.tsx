import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight, 
  Clock, ArrowRight, Utensils, Star, Compass, Train, ShieldCheck 
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【日本最古の名湯・金湯銀湯を客室露天で独り占め】2026-2027年11-12月初冬の兵庫・有馬温泉！名門・欽山＆中の坊瑞苑・極上神戸牛ステーキと伝統会席・ミシュラン掲載の大人の最高峰高級旅館5選 | クラウドトラベル',
  description: '日本三古湯・三名泉の筆頭に君臨する兵庫県・有馬温泉。鉄分と塩分を豊富に含み赤褐色に輝く「金泉」と、炭酸とラドンを含む無色透明の「銀泉」というふたつの奇跡の湯を擁する聖地。ミシュランガイドに掲載され、一流の料亭旅館として名高い「欽山」や、大人の静寂を約束する「中の坊 瑞苑」など、全室スイートや専用露天風呂付き客室で過ごす最高峰の滞在。世界最高峰ブランド「神戸牛」の炭火焼きステーキや伝統会席を堪能する極上名宿5選。',
  keywords: '兵庫県, 有馬温泉, 高級旅館, 客室露天風呂, 記念日旅行, 11月旅行, 12月旅行, 楽天トラベル, ふるさと納税',
  openGraph: {
    title: '【日本最古の名湯・金湯銀湯を客室露天で独り占め】2026-2027年11-12月初冬の兵庫・有馬温泉！名門・欽山＆中の坊瑞苑・極上神戸牛ステーキと伝統会席・ミシュラン掲載の大人の最高峰高級旅館5選',
    description: '日本三古湯・三名泉の筆頭に君臨する兵庫県・有馬温泉。鉄分と塩分を豊富に含み赤褐色に輝く「金泉」と、炭酸とラドンを含む無色透明の「銀泉」というふたつの奇跡の湯を擁する聖地。ミシュランガイドに掲載され、一流の料亭旅館として名高い「欽山」や、大人の静寂を約束する「中の坊 瑞苑」など、全室スイートや専用露天風呂付き客室で過ごす最高峰の滞在。世界最高峰ブランド「神戸牛」の炭火焼きステーキや伝統会席を堪能する極上名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-hyogo-arima-onsen-luxury-kinzan-gold-silver-kobe-beef-stay',
    type: 'article',
    siteName: 'クラウドトラベル',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-hyogo-arima-onsen-luxury-kinzan-gold-silver-kobe-beef-stay',
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
                  "item": "https://croud-travel.pages.dev/features"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "【日本最古の名湯・金湯銀湯を客室露天で独り占め】2026-2027年11-12月初冬の兵庫・有馬温泉！名門・欽山＆中の坊瑞苑・極上神戸牛ステーキと伝統会席・ミシュラン掲載の大人の最高峰高級旅館5選",
                  "item": "https://croud-travel.pages.dev/winter-hyogo-arima-onsen-luxury-kinzan-gold-silver-kobe-beef-stay"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
        {
          "@type": "Question",
          "name": "金泉のお湯に入るとタオルが茶色くなりますか？肌への刺激は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "金泉は鉄分を豊富に含んでいるため、無色透明の源泉が空気に触れて赤褐色になります。白いタオルをお湯につけると茶色く染まりますので、宿で提供される専用タオルを使用するのが安心です。また塩分濃度が非常に高いため保温効果抜群ですが、肌が敏感な方は入浴後に軽くシャワーで洗い流すと肌触りがさっぱりします。"
          }
        },
        {
          "@type": "Question",
          "name": "有馬温泉の高級旅館は子ども連れでも宿泊できますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "旅館によってポリシーが異なります。『欽山』や『中の坊 瑞苑』など一部の名門宿は大人の静寂な時間を守るため、小学生以下のお子様の宿泊を制限（または利用可能日を限定）しています。一方で『有馬グランドホテル』や『兵衛向陽閣』などはファミリー向けの上質な特別フロアやファミリールームを備えており、三世代旅行にも大変おすすめです。"
          }
        },
        {
          "@type": "Question",
          "name": "12月の有馬温泉は積雪や凍結の心配はありますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "有馬温泉は瀬戸内気候に属するため、豪雪地帯のように雪が積もることは稀です。ただし12月中旬以降の強い寒波の際や早朝・夜間には、山道や橋の上でうっすらと路面凍結が発生することがあります。高速道路（阪神高速北神戸線等）を利用する場合は、チェーン規制や冬用タイヤ規制の有無を事前に交通情報で確認しておくと安心です。"
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
          <span className="text-slate-800 font-medium truncate max-w-xs">【日本最古の名湯・金湯銀湯を客室露天で独り占め】2026-2027年11-12月初冬の兵庫・有馬温泉！名門・欽山＆中の坊瑞苑・極上神戸牛ステーキと伝統会席・ミシュラン掲載の大人の最高峰高級旅館5選</span>
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
            【日本最古の名湯・金湯銀湯を客室露天で独り占め】2026-2027年11-12月初冬の兵庫・有馬温泉！名門・欽山＆中の坊瑞苑・極上神戸牛ステーキと伝統会席・ミシュラン掲載の大人の最高峰高級旅館5選
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            日本三古湯・三名泉の筆頭に君臨する兵庫県・有馬温泉。鉄分と塩分を豊富に含み赤褐色に輝く「金泉」と、炭酸とラドンを含む無色透明の「銀泉」というふたつの奇跡の湯を擁する聖地。ミシュランガイドに掲載され、一流の料亭旅館として名高い「欽山」や、大人の静寂を約束する「中の坊 瑞苑」など、全室スイートや専用露天風呂付き客室で過ごす最高峰の滞在。世界最高峰ブランド「神戸牛」の炭火焼きステーキや伝統会席を堪能する極上名宿5選。
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
            六甲山の北麓、大都市・神戸や大阪から車や高速バスでわずか30〜50分という好立地にありながら、千数百年の歴史の重みと幽玄な温泉情緒を色濃く残す『有馬温泉』。『日本書紀』や『古事記』にもその名を刻み、舒明天皇や孝徳天皇が逗留した古代から、戦国時代の天下人・豊臣秀吉が傷を癒やすために幾度も湯治に訪れた『日本三古湯・日本三名泉』の最高峰です。有馬温泉が世界的に類を見ない奇跡の温泉地と呼ばれる最大の理由は、プレート境界の地下深くからマグマの熱とミネラルを蓄えて直接湧き出す大地の恵み『金泉（きんせん）』と『銀泉（ぎんせん）』の存在にあります。鉄分と塩分が海水以上に濃厚に含まれ、空気に触れると酸化して鮮やかな赤褐色へと変色する金泉は、入浴後も肌に塩のベールを作って抜群の保温・保湿効果を発揮する『熱の湯』。一方、無色透明で炭酸ガスや微量のラドンを含む銀泉は、肌の毛細血管を広げて新陳代謝を高める『美肌の湯』。この全く異なるふたつの奇跡の名湯を一度に味わえることこそ、有馬温泉の唯一無二の贅沢です。そして初冬の11月から12月、紅葉がフィナーレを迎え静寂を取り戻した有馬の夜を彩るのが、世界最高峰の肉牛ブランド『神戸牛（神戸ビーフ）』。厳しい基準をクリアした但馬牛の処女牛のみに許される神戸牛は、人肌の温度でサッと溶ける融点の低い上質な霜降りと芳醇な香りを誇り、炭火焼きステーキや伝統のすき焼きで味わえば至福のため息がこぼれます。宿泊には、ミシュランガイドにも掲載された本格料亭旅館『欽山』や、大人のための上質な静けさを追求する名宿『中の坊 瑞苑』、文豪たちに愛された最古の歴史宿『陶泉 御所坊』など、格式と洗練を極めた名旅館を厳選。客室露天風呂に金泉を引いた極上スイートで過ごす初冬の夜は、日本の最高峰の文化と贅沢に心奪われる時間となります。
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
              <span>世界に誇る奇跡の恵み！濃厚な赤褐色の「金泉」と清冽な「銀泉」の極上湯浴み</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              海水の約1.5〜2倍の塩分濃度を誇る金泉と、炭酸ガスやラドンを含む銀泉。大地の深部から湧き出る2つの異なる名湯を客室露天風呂や大浴場で贅沢に堪能できます。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                2
              </span>
              <span>世界の美食家を魅了する最高峰ブランド「神戸牛」の極上すき焼き＆ステーキ</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              人肌でとろける究極の霜降りと芳醇な甘み。厳選された神戸牛の炭火焼きステーキやすき焼きを、一流の料理人が仕立てる伝統の京風懐石とともに個室で味わえます。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                3
              </span>
              <span>名門「欽山」＆「中の坊瑞苑」！ミシュラン掲載の洗練されたおもてなしと静寂</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              小学生以下の宿泊をご遠慮いただく大人の宿など、喧騒を離れて静かに寛げる格式高い名旅館が集結。数寄屋造りの建築美と細やかなもてなしが特別な滞在を約束します。
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
              <span>近隣の必見名所：有馬温泉</span>
            </h2>
            <span className="text-[11px] text-slate-400">Wikipedia・公式解説連携</span>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative h-52 md:h-60 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/170811_Rokko-Arima_Ropeway_Kobe_Japan00n.jpg/1280px-170811_Rokko-Arima_Ropeway_Kobe_Japan00n.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="日本三古湯・太閤秀吉が愛した天下の名湯・有馬温泉（鉄分と塩分の金泉とラドン炭酸の銀泉）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="md:col-span-7 space-y-2.5">
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                日本三古湯・太閤秀吉が愛した天下の名湯・有馬温泉（鉄分と塩分の金泉とラドン炭酸の銀泉）
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                有馬温泉（ありまおんせん）は、兵庫県神戸市北区有馬町（摂津国）にある日本三古湯の温泉。枕草子の三名泉にも数えられた。また、室町時代には万里集九が草津温泉や下呂温泉とともに「三名泉」とし、江戸時代には林羅山もこれらの三温泉を「天下の三名泉」と記した（日本三名泉）。江戸時代の温泉番付では当時の最高位である西大関に格付けされた。瀬戸内海国立公園の区域に隣接する。...
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
        {/* 宿カード 1: 有馬温泉　欽山 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第1位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              ミシュラン掲載の東の料亭・西の欽山！数寄屋の美と大人の静寂を極める
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.63</span>
              <span className="text-slate-400">（クチコミ 502件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/53390/53390.jpg"
                  alt="有馬温泉　欽山"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  有馬温泉　欽山
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>兵庫県神戸市北区有馬町1302-4</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>神戸電鉄「有馬温泉駅」より徒歩５分・山陽新幹線「新神戸駅」よりバスにて約30分・大阪（梅田）より高速バスにて約55分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>創業以来『客室係の一客一亭』のおもてなしを貫く有馬温泉屈指の高級料亭旅館。静寂と品格を守るため小学生以下の入館を制限した、大人のための社交場です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>名門料亭の真髄を味わう夕食は、最高峰神戸牛のステーキやすき焼きと季節の厳選素材を組み合わせた本格会席。朝夕ともにお部屋食で優雅に楽しめます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>大浴場には有馬の名湯・金泉と銀泉の双方が引き込まれ、庭園を望む露天風呂で心静かに至福の湯浴みを満喫できます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥25,850</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53390%2F53390.html"
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

        {/* 宿カード 2: 有馬温泉　中の坊　瑞苑 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第2位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              13歳未満宿泊不可の完全なる大人のリトリート！金泉露天付き客室も完備
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.73</span>
              <span className="text-slate-400">（クチコミ 794件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/25288/25288.jpg"
                  alt="有馬温泉　中の坊　瑞苑"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  有馬温泉　中の坊　瑞苑
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>兵庫県神戸市北区有馬町808</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>神戸電鉄 有馬温泉駅より徒歩５分以内 ／ 大阪より１時間・神戸より３０分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>有馬温泉の中心街に佇みながら、一歩館内に足を踏み入れると静謐な別世界が広がるハイクラス旅館。13歳未満の入館を制限し、大人のプライベートな時間を約束します。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>客室専用露天風呂に有馬の金泉を引いた贅沢なスイートルームを備え、誰にも気兼ねなく濃厚な名湯を独り占めできます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は個室食事処または部屋食でいただく極上の創作会席。料理の質、器、提供のタイミングに至るまで完璧に計算された至高のホスピタリティが光ります。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥28,750</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F25288%2F25288.html"
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

        {/* 宿カード 3: 有馬温泉　有馬グランドホテル */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第3位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              有馬の高台から温泉街を一望！展望大浴場と極上の貴賓室スイート
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.65</span>
              <span className="text-slate-400">（クチコミ 1792件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/25128/25128.jpg"
                  alt="有馬温泉　有馬グランドホテル"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  有馬温泉　有馬グランドホテル
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>兵庫県神戸市北区有馬町1304-1</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>有馬温泉駅（電車、バス、ロープウェイ）より送迎サービス有（要電話）　神戸電鉄有馬温泉駅より徒歩10分　</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>有馬温泉の高台に位置し、広大な敷地と充実の館内施設を誇る名門ホテル。最上階の展望大浴場からは丹波の山並みと有馬温泉街の絶景を一望できます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>ハイクラスフロア『別邸 結有（ゆら）』にはプライベート露天風呂付き客室を備え、洗練されたラグジュアリーな滞在を提供してくれます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>熟練の料理人が腕を振るう神戸牛会席や鉄板焼き、広東料理など多彩な美食を選択可能。三世代旅行から記念日旅行まで幅広く愛されています。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥17,050</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F25128%2F25128.html"
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

        {/* 宿カード 4: 有馬温泉　兵衛向陽閣 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第4位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              創業七百年の伝統息づく名門！三つの大浴場巡りと伝統の会席料理
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.57</span>
              <span className="text-slate-400">（クチコミ 2631件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8636/8636.jpg"
                  alt="有馬温泉　兵衛向陽閣"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  有馬温泉　兵衛向陽閣
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>兵庫県神戸市北区有馬町1904</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>神戸より電車で約３０分／神戸電鉄有馬温泉駅・バス有馬温泉駅より徒歩約６分／阪神高速道路北神戸線有馬口出口より約５分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>室町時代から続く七百年の歴史を誇る有馬屈指の老舗温泉旅館。広大な敷地に趣の異なる3つの大浴場『一の湯』『二の湯』『三の湯』を有し、館内で湯巡りを満喫できます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>すべての湯処に有馬の名湯・金泉が注がれ、和風情緒あふれる露天風呂で心ゆくまで癒やされます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は厳選された神戸牛の会席料理。伝統を守りながらも現代的な工夫を取り入れた四季折々の美味を、落ち着いた個室食事処で堪能できます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥17,600</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8636%2F8636.html"
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

        {/* 宿カード 5: 有馬温泉　陶泉　御所坊 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第5位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              建久二年創業・有馬最古の湯宿！谷崎潤一郎ゆかりのサロンと源泉掛け流し金泉
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.37</span>
              <span className="text-slate-400">（クチコミ 313件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/80572/80572.jpg"
                  alt="有馬温泉　陶泉　御所坊"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  有馬温泉　陶泉　御所坊
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>兵庫県神戸市北区有馬町858</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>神戸電鉄有馬温泉駅から徒歩5分／中国自動車道西宮北ＩＣより５ｋｍ／神戸空港より電車乗り継ぎで約60分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>鎌倉時代初期の建久二年（1191年）創業、有馬温泉で最も古い歴史を誇る名門宿。谷崎潤一郎をはじめ多くの文豪が逗留した文化薫る空間です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>独自の半混浴スタイルの名物大浴場には、敷地内の源泉から一切空気に触れさせずに引湯する極めて濃厚な金泉が並々と掛け流されています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>フランスのサロン文化と和の伝統が融合したモダンレトロな館内と、但馬牛や旬の山海の幸を丁寧に仕立てた山家料理が唯一無二の旅情を誘います。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥20,200</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F80572%2F80572.html"
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
・電車：神戸電鉄有馬線「有馬温泉駅」下車。JR新神戸駅から北神急行・神戸電鉄経由で約30分、JR三ノ宮駅から約35分。大阪駅からはJR宝塚線・三田駅経由で約1時間。駅からは各宿の送迎車が随時運行。
・高速バス：大阪駅（JR高速バスターミナル）より直行バスで約55分。新大阪駅から約50分。三宮バスターミナル（ミント神戸）から約30分。京都駅八条口からも直行バス（約1時間15分）が運行しており極めて便利です。
・車：阪神高速7号北神戸線「有馬口IC」より約5分。中国自動車道「西宮北IC」より約15分。神戸市内から約30分、大阪市内から約50分。
・飛行機：大阪国際空港（伊丹空港）より直行リムジンバスで約30分。神戸空港からはポートライナー・地下鉄経由で約50分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月下旬〜12月（紅葉のピークが落ち着き、静寂の湯治情緒が深まる大人の狙い目シーズン。六甲山からの夜景も空気が澄んで最も美しく輝きます）。
・気温の目安：標高約350〜400mの六甲山北麓に位置するため神戸市街地より3〜4℃低く、11月は日中12〜16℃、朝晩は5〜8℃。12月は日中でも8〜11℃、朝晩は1〜4℃前後。
・服装のポイント：厚手のウールコートやダウンジャケット、マフラーをご用意ください。温泉街には石畳の坂道（湯本坂）が多いため、歩きやすいフラットシューズやローヒールが適しています。
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
              <span>金泉のお湯に入るとタオルが茶色くなりますか？肌への刺激は？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              金泉は鉄分を豊富に含んでいるため、無色透明の源泉が空気に触れて赤褐色になります。白いタオルをお湯につけると茶色く染まりますので、宿で提供される専用タオルを使用するのが安心です。また塩分濃度が非常に高いため保温効果抜群ですが、肌が敏感な方は入浴後に軽くシャワーで洗い流すと肌触りがさっぱりします。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>有馬温泉の高級旅館は子ども連れでも宿泊できますか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              旅館によってポリシーが異なります。『欽山』や『中の坊 瑞苑』など一部の名門宿は大人の静寂な時間を守るため、小学生以下のお子様の宿泊を制限（または利用可能日を限定）しています。一方で『有馬グランドホテル』や『兵衛向陽閣』などはファミリー向けの上質な特別フロアやファミリールームを備えており、三世代旅行にも大変おすすめです。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>12月の有馬温泉は積雪や凍結の心配はありますか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              有馬温泉は瀬戸内気候に属するため、豪雪地帯のように雪が積もることは稀です。ただし12月中旬以降の強い寒波の際や早朝・夜間には、山道や橋の上でうっすらと路面凍結が発生することがあります。高速道路（阪神高速北神戸線等）を利用する場合は、チェーン規制や冬用タイヤ規制の有無を事前に交通情報で確認しておくと安心です。
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
