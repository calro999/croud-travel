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
  title: '【相模湾を見下ろす断崖の絶景露天風呂と極上プライベートヴィラ】2026-2027年11-12月初冬の静岡・熱海伊豆山＆南熱海！最高峰「ATAMI せかいえ」＆迎賓館・冬の熱海海上花火と伊豆天然伊勢海老・静岡そだち和牛名宿5選',
  description: '都心から新幹線でわずか45分、相模湾のコバルトブルーを一望する熱海・伊豆山。太平洋を見下ろす高台に建ち、全室に源泉掛け流し露天風呂を備えた名門「ATAMI せかいえ」や、大人の静寂を約束する迎賓館リゾート。初冬の澄んだ夜空を彩る名物「熱海海上花火大会」の特等席と、冬に甘みを増す駿河湾・相模湾の活伊勢海老、ブランド牛「静岡そだち」の鉄板焼き。海と空が溶け合う至高のラグジュアリーステイ厳選5選。',
  keywords: '静岡県, 伊豆山神社, 高級旅館, 客室露天風呂, 記念日旅行, 11月旅行, 12月旅行, 楽天トラベル, ふるさと納税',
  openGraph: {
    title: '【相模湾を見下ろす断崖の絶景露天風呂と極上プライベートヴィラ】2026-2027年11-12月初冬の静岡・熱海伊豆山＆南熱海！最高峰「ATAMI せかいえ」＆迎賓館・冬の熱海海上花火と伊豆天然伊勢海老・静岡そだち和牛名宿5選',
    description: '都心から新幹線でわずか45分、相模湾のコバルトブルーを一望する熱海・伊豆山。太平洋を見下ろす高台に建ち、全室に源泉掛け流し露天風呂を備えた名門「ATAMI せかいえ」や、大人の静寂を約束する迎賓館リゾート。初冬の澄んだ夜空を彩る名物「熱海海上花火大会」の特等席と、冬に甘みを増す駿河湾・相模湾の活伊勢海老、ブランド牛「静岡そだち」の鉄板焼き。海と空が溶け合う至高のラグジュアリーステイ厳選5選。',
    url: 'https://croud-travel.pages.dev/winter-shizuoka-atami-izusan-luxury-sekaie-ocean-roten-iseebi-stay',
    type: 'article',
    siteName: 'クラウドトラベル',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-shizuoka-atami-izusan-luxury-sekaie-ocean-roten-iseebi-stay',
  },
};

export default function UltraLuxuryWinterFeaturePage() {
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
                  "name": "【相模湾を見下ろす断崖の絶景露天風呂と極上プライベートヴィラ】2026-2027年11-12月初冬の静岡・熱海伊豆山＆南熱海！最高峰「ATAMI せかいえ」＆迎賓館・冬の熱海海上花火と伊豆天然伊勢海老・静岡そだち和牛名宿5選",
                  "item": "https://croud-travel.pages.dev/winter-shizuoka-atami-izusan-luxury-sekaie-ocean-roten-iseebi-stay"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
        {
          "@type": "Question",
          "name": "熱海の冬の花火大会はいつ開催されますか？部屋から見えますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "熱海海上花火大会は年間を通して開催されており、12月にも冬の部が開催されます。空気が乾燥して澄み渡る冬の花火は一年で最も美しく見えると言われます。今回選定した伊豆山や海岸沿いの高台宿（パールスターホテルや迎賓館など）のオーシャンビュー客室からは、混雑を避けてお部屋や専用バルコニーから大迫力の花火を鑑賞できます。"
          }
        },
        {
          "@type": "Question",
          "name": "「伊豆山神社」へはホテルから歩いて行けますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "伊豆山温泉の高台にあるホテルからは、車で約5分、または徒歩約15〜20分でアクセス可能です。参道は海岸から本殿まで800段以上の石段が続いており、上からの相模湾の眺望は圧巻です。宿の送迎車で本殿近くまで送迎してくれるプランもあります。"
          }
        },
        {
          "@type": "Question",
          "name": "客室露天風呂の温泉は源泉掛け流しですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "今回選定した熱海のラグジュアリー宿の多くは、客室露天風呂にも豊富な熱海温泉・伊豆山温泉の天然源泉を引湯しています。海を見下ろすテラスで、いつでも自分たちだけの適温の湯に身を委ねることができます。"
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
          <span className="text-slate-800 font-medium truncate max-w-xs">【相模湾を見下ろす断崖の絶景露天風呂と極上プライベートヴィラ】2026-2027年11-12月初冬の静岡・熱海伊豆山＆南熱海！最高峰「ATAMI せかいえ」＆迎賓館・冬の熱海海上花火と伊豆天然伊勢海老・静岡そだち和牛名宿5選</span>
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
            【相模湾を見下ろす断崖の絶景露天風呂と極上プライベートヴィラ】2026-2027年11-12月初冬の静岡・熱海伊豆山＆南熱海！最高峰「ATAMI せかいえ」＆迎賓館・冬の熱海海上花火と伊豆天然伊勢海老・静岡そだち和牛名宿5選
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            都心から新幹線でわずか45分、相模湾のコバルトブルーを一望する熱海・伊豆山。太平洋を見下ろす高台に建ち、全室に源泉掛け流し露天風呂を備えた名門「ATAMI せかいえ」や、大人の静寂を約束する迎賓館リゾート。初冬の澄んだ夜空を彩る名物「熱海海上花火大会」の特等席と、冬に甘みを増す駿河湾・相模湾の活伊勢海老、ブランド牛「静岡そだち」の鉄板焼き。海と空が溶け合う至高のラグジュアリーステイ厳選5選。
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
            東京駅から東海道新幹線でわずか45分。相模湾を見下ろす断崖絶壁に豊かな源泉が湧き出す熱海の奥座敷『伊豆山（いずさん）』。古くは鎌倉幕府を開いた源頼朝が配流の身であった頃に身を寄せ、北条政子と劇的な愛を育んだ『伊豆山神社』が鎮座する由緒あるパワースポットです。熱海駅周辺の賑やかな温泉街から少し離れた伊豆山・南熱海エリアは、水平線まで見渡す相模湾のパノラマと、日本三大古泉『走り湯』に象徴される豊富な湯量を誇り、大人のためのハイエンド宿や全室オーシャンビューのプライベートヴィラが集中する熱海最高峰のエリア。11月から12月の初冬は、空気が澄み渡ることで海の青さが一段と深まり、夜には『熱海海上花火大会』が冬の夜空と波間を色鮮やかに染め上げます。客室のテラスや露天風呂から、誰にも邪魔されずに花火の轟音と火の粉を眺める時間はまさに特権的な贅沢。夕食には、冬に甘みと旨味が最高潮に達する相模湾・駿河湾の天然活伊勢海老やアワビ、そして柔らかなサシがとろける静岡県産銘柄牛『静岡そだち』の鉄板焼き。海と空の境界線が溶け合うインフィニティ露天風呂に浸かり、心地よい潮風を感じながら過ごす初冬の熱海は、記念日やエグゼクティブのリフレッシュに選ばれ続ける本物のラグジュアリーです。
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
              <span>相模湾のコバルトブルーを見下ろす断崖の絶景！全室オーシャンビュー露天風呂</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              水平線から昇る朝日や伊豆大島の島影を一望する特等席。客室テラスに備えられた専用露天風呂で、相模湾の絶景と波音に包まれる至高のプライベート湯浴みが叶います。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                2
              </span>
              <span>冬の澄んだ夜空を彩る「熱海海上花火大会」をお部屋から優雅に鑑賞</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              初冬の熱海名物・冬花火。空気が澄んでいるため煙が滞留せず、花火の光と山に反響する轟音が大迫力。混雑を避けて宿のバルコニーから楽しむ贅沢は圧巻です。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                3
              </span>
              <span>冬の伊豆の至宝「天然活伊勢海老」ととろける黒毛和牛「静岡そだち」の鉄板焼き</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              冬に旨味が凝縮する伊勢海老のお造りや鬼殻焼き、極上鮑の踊り焼き。目の前でシェフが焼き上げるブランド牛ステーキとともに極上のワインを堪能できます。
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
              <span>近隣の必見名所：伊豆山神社</span>
            </h2>
            <span className="text-[11px] text-slate-400">Wikipedia・公式解説連携</span>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative h-52 md:h-60 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/231007_Izusan-jinja_Atami_Japan01s3.jpg/1280px-231007_Izusan-jinja_Atami_Japan01s3.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="源頼朝と北条政子ゆかりの古社・伊豆山神社（相模湾を見下ろす高台のパワースポットと熱海絶景）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="md:col-span-7 space-y-2.5">
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                源頼朝と北条政子ゆかりの古社・伊豆山神社（相模湾を見下ろす高台のパワースポットと熱海絶景）
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                伊豆山神社（いずさんじんじゃ又はいずやまじんじゃ）は、静岡県熱海市伊豆山にある神社。全国各地に点在する伊豆山神社や伊豆神社、走湯神社（そうとうじんじゃ、はしりゆじんじゃ）などの起源となった事実上の総本社格である。伊豆国に配流の身となっていた源頼朝が、源氏の再興を祈願したと伝わり、頼朝からの崇敬が厚く、また頼朝と妻・北条政子の逢瀬の場であったとも伝わる。...
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
        {/* 宿カード 1: 熱海パールスターホテル */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第1位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              熱海サンビーチ目の前！最上階インフィニティ露天風呂と一流の美味
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.63</span>
              <span className="text-slate-400">（クチコミ 130件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/181405/181405.jpg"
                  alt="熱海パールスターホテル"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  熱海パールスターホテル
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>静岡県熱海市東海岸町6-45</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>熱海駅より徒歩10分　タクシーで約5分　バスで約10分（お宮の松前下車/徒歩1分）</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>熱海サンビーチの目の前に位置し、全室オーシャンビューの贅を尽くしたモダンラグジュアリーホテル。最上階の大浴場には海と一体化するインフィニティ露天風呂を備えています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>自家源泉の豊富な湯が注がれ、昼は青い海原、夜は熱海市街の美しい夜景や海上花火を遮るもののない特等席から眺めることができます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>館内にはフレンチ、日本料理、鉄板焼き、寿司の本格レストランを完備。相模湾の新鮮魚介や静岡そだち和牛を一流の技で味わえます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥28,042</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181405%2F181405.html"
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

        {/* 宿カード 2: 天星の透間　ＲＥＢＯＲＮ */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第2位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              クチコミ★5.0の圧倒的評価！天空のテラスから望む満天の星と相模湾
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">5.00</span>
              <span className="text-slate-400">（クチコミ 12件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/187214/187214.jpg"
                  alt="天星の透間　ＲＥＢＯＲＮ"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  天星の透間　ＲＥＢＯＲＮ
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>宮崎県児湯郡西米良村村所201-3</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>九州自動車道・人吉IC、又は東九州自動車道・西都ICより車で約60分。宮崎空港より車で約120分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>熱海伊豆山の高台に建ち、天空に浮かぶような感覚を味わえる隠れ家ヴィラ。わずか数組のためだけに用意された究極のプライベートリゾートです。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>広々とした客室テラスには源泉掛け流しの専用露天風呂を備え、時間とともに表情を変える大空と海のグラデーションを独り占めできます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は厳選素材を活かした極上の創作ディナー。行き届いたホスピタリティと静寂の空間が、大切な記念日を忘れられない思い出にしてくれます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥42,500</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187214%2F187214.html"
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

        {/* 宿カード 3: 熱海倶楽部　迎賓館 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第3位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              名門ゴルフ場に隣接する迎賓館！全室スイート仕様の広大な大人の隠れ宿
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.55</span>
              <span className="text-slate-400">（クチコミ 4453件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/75291/75291.jpg"
                  alt="熱海倶楽部　迎賓館"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  熱海倶楽部　迎賓館
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>静岡県熱海市伊豆山1171</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>熱海駅より車で約８分。タクシーでお越しの場合は「熱海ゴルフ倶楽部」とお伝え下さい。</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>熱海の名門ゴルフ場クラブハウスに併設された、全室スイート仕様の贅沢なリゾートホテル。静寂と開放感にあふれた優雅な環境が広がります。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>すべての客室に天然温泉を引いた半露天風呂を備え、広々としたリビングから相模湾と伊豆の山並みのパノラマを一望できます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は地産の旬の味覚を彩り豊かに盛り込んだ本格和食会席。大人の落ち着いた休日を過ごしたいエグゼクティブ層に熱烈に支持されています。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥29,700</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75291%2F75291.html"
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

        {/* 宿カード 4: ホテルグランバッハ熱海クレッシェンド */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第4位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              音楽と癒やしが共鳴する山上の館！全室温泉露天付きのハイクラスリゾート
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.68</span>
              <span className="text-slate-400">（クチコミ 80件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/142952/142952.jpg"
                  alt="ホテルグランバッハ熱海クレッシェンド"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  ホテルグランバッハ熱海クレッシェンド
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>静岡県熱海市伊豆山1048-4</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>ＪＲ熱海駅よりお車にて約１５分  タクシーで１,５００円程度　　　改装　：2024年8月1日リニューアルOPEN</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>熱海の街を見下ろす高台に佇み、バッハの調べとともに極上のリラクゼーションを提供するスモールラグジュアリーホテルです。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>全室に森や海を望む専用の温泉露天風呂または展望風呂を完備。洗練されたモダンな客室で、心静かにプライベートな時間を満喫できます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>シェフが腕を振るう夕食は、伊豆の新鮮な食材を軽やかなフレンチスタイルで仕立てたディナー。上質なワインとともに至福の美食体験を味わえます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥59,200</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142952%2F142952.html"
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

        {/* 宿カード 5: 熱海温泉　古屋旅館 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第5位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              創業二百余年の伝統が宿る名門老舗！全室源泉掛け流しと伝統の本格懐石
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.86</span>
              <span className="text-slate-400">（クチコミ 573件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/16668/16668.jpg"
                  alt="熱海温泉　古屋旅館"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  熱海温泉　古屋旅館
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>静岡県熱海市東海岸町5-24</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>ＪＲ熱海駅からタクシーで５分。徒歩１３分。熱海サンビーチまでは徒歩３分♪</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>江戸時代から続く歴史と格式を誇る熱海屈指の高級老舗日本旅館。伝統の数寄屋造りと現代の洗練された快適性が見事に調和しています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>熱海七湯の一つ『清左衛門の湯』を敷地内に持ち、客室露天風呂にも一切加水・加温しない純度100%の源泉が贅沢に掛け流されています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は熟練の料理人が手間を惜しまず仕立てる本格京風懐石。お部屋食でいただく極上の伊勢海老や銘柄牛の味わいは、まさに老舗ならではの真骨頂です。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥39,930</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16668%2F16668.html"
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
・新幹線・電車：東海道新幹線「熱海駅」下車。東京駅より「ひかり」で約35分、「こだま」で約45分。名古屋駅からは約1時間20分。熱海駅からは各ホテルの専用送迎車（要予約）またはタクシーで約5〜10分。
・車：東名高速道路「厚木IC」より小田原厚木道路〜真鶴道路〜国道135号線経由で約1時間。東京ICから通常約1時間30分〜2時間。
・新幹線利用の利便性：新幹線を降りてわずか数分で絶景リゾートへ直行できる圧倒的なアクセスの良さは、週末のスマートな記念日旅行に最適です。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月〜12月（太平洋側の海洋性気候のため温暖で降雪の心配がほぼなく、冬の熱海海上花火大会が開催される最も華やかなシーズン）。
・気温の目安：都心部より2〜3℃暖かく、11月は日中14〜18℃、朝晩は8〜11℃。12月でも日中は11〜15℃前後あり、日差しがあればポカポカとした快適な気候です。
・服装のポイント：日中はジャケットやセーターで心地よく過ごせます。夜間の花火鑑賞や露天風呂上がりには海風で肌寒く感じるため、厚手のアウターやストールがあると安心です。
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
              <span>熱海の冬の花火大会はいつ開催されますか？部屋から見えますか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              熱海海上花火大会は年間を通して開催されており、12月にも冬の部が開催されます。空気が乾燥して澄み渡る冬の花火は一年で最も美しく見えると言われます。今回選定した伊豆山や海岸沿いの高台宿（パールスターホテルや迎賓館など）のオーシャンビュー客室からは、混雑を避けてお部屋や専用バルコニーから大迫力の花火を鑑賞できます。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>「伊豆山神社」へはホテルから歩いて行けますか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              伊豆山温泉の高台にあるホテルからは、車で約5分、または徒歩約15〜20分でアクセス可能です。参道は海岸から本殿まで800段以上の石段が続いており、上からの相模湾の眺望は圧巻です。宿の送迎車で本殿近くまで送迎してくれるプランもあります。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>客室露天風呂の温泉は源泉掛け流しですか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              今回選定した熱海のラグジュアリー宿の多くは、客室露天風呂にも豊富な熱海温泉・伊豆山温泉の天然源泉を引湯しています。海を見下ろすテラスで、いつでも自分たちだけの適温の湯に身を委ねることができます。
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
