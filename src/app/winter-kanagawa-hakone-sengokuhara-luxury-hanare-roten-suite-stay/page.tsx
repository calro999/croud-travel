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
  title: '【全室露天風呂付き極上離れと白濁硫黄泉】2026-2027年11-12月初冬の箱根・仙石原！大人の隠れ家高級宿で味わう極上相州牛＆冬懐石・大涌谷にごり湯スイート名宿5選',
  description: '初冬の静寂に包まれる箱根・仙石原！黄金色に輝くすすき草原のフィナーレと、大涌谷から引湯する濃厚な乳白色の硫黄泉。全室に専用露天風呂を備えた大人の極上離れやスイートルームで、人目を気にせず名湯を独り占め。きめ細やかなサシの相州牛や駿河湾・相模湾の冬の味覚を散りばめた本格懐石料理に舌鼓を打つ、憧れの記念日ラグジュアリーステイ厳選5選。',
  keywords: '神奈川県, 仙石原, 高級旅館, 客室露天風呂, 記念日旅行, 11月旅行, 12月旅行, 楽天トラベル, ふるさと納税',
  openGraph: {
    title: '【全室露天風呂付き極上離れと白濁硫黄泉】2026-2027年11-12月初冬の箱根・仙石原！大人の隠れ家高級宿で味わう極上相州牛＆冬懐石・大涌谷にごり湯スイート名宿5選',
    description: '初冬の静寂に包まれる箱根・仙石原！黄金色に輝くすすき草原のフィナーレと、大涌谷から引湯する濃厚な乳白色の硫黄泉。全室に専用露天風呂を備えた大人の極上離れやスイートルームで、人目を気にせず名湯を独り占め。きめ細やかなサシの相州牛や駿河湾・相模湾の冬の味覚を散りばめた本格懐石料理に舌鼓を打つ、憧れの記念日ラグジュアリーステイ厳選5選。',
    url: 'https://croud-travel.pages.dev/winter-kanagawa-hakone-sengokuhara-luxury-hanare-roten-suite-stay',
    type: 'article',
    siteName: 'クラウドトラベル',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-kanagawa-hakone-sengokuhara-luxury-hanare-roten-suite-stay',
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
                  "name": "【全室露天風呂付き極上離れと白濁硫黄泉】2026-2027年11-12月初冬の箱根・仙石原！大人の隠れ家高級宿で味わう極上相州牛＆冬懐石・大涌谷にごり湯スイート名宿5選",
                  "item": "https://croud-travel.pages.dev/winter-kanagawa-hakone-sengokuhara-luxury-hanare-roten-suite-stay"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
        {
          "@type": "Question",
          "name": "仙石原の温泉はすべて白濁した硫黄泉なのですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "仙石原エリアには、大涌谷から造成・引湯される乳白色の酸性硫酸塩泉と、自家源泉から湧出する無色透明で肌触りの柔らかな弱アルカリ性単純温泉の2つの系統があります。宿によって引湯している源泉が異なるため、にごり湯を希望される場合は大涌谷引湯のプランや大浴場を備えた宿（金乃竹やきたの風茶寮など）を選ぶのがおすすめです。"
          }
        },
        {
          "@type": "Question",
          "name": "客室露天風呂の温泉も源泉掛け流しですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "今回厳選したハイクラス宿の多くは、客室露天風呂にも贅沢に天然温泉を引湯・掛け流し（または温度管理のための適温循環）しています。24時間いつでも好きな温度で入浴できるよう配慮されており、湯守の徹底した温度管理のもとで極上の湯浴みが楽しめます。"
          }
        },
        {
          "@type": "Question",
          "name": "11月〜12月の箱根・仙石原へのドライブでスタッドレスタイヤは必要ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "11月中旬まではノーマルタイヤでも走行可能な日が多いですが、11月下旬以降や12月に入ると乙女峠や芦ノ湖周辺で突然の降雪や早朝の路面凍結が発生することがあります。お車で訪れる場合は、11月下旬以降はスタッドレスタイヤの装着、またはチェーンの携行を強く推奨します。"
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
          <span className="text-slate-800 font-medium truncate max-w-xs">【全室露天風呂付き極上離れと白濁硫黄泉】2026-2027年11-12月初冬の箱根・仙石原！大人の隠れ家高級宿で味わう極上相州牛＆冬懐石・大涌谷にごり湯スイート名宿5選</span>
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
            【全室露天風呂付き極上離れと白濁硫黄泉】2026-2027年11-12月初冬の箱根・仙石原！大人の隠れ家高級宿で味わう極上相州牛＆冬懐石・大涌谷にごり湯スイート名宿5選
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            初冬の静寂に包まれる箱根・仙石原！黄金色に輝くすすき草原のフィナーレと、大涌谷から引湯する濃厚な乳白色の硫黄泉。全室に専用露天風呂を備えた大人の極上離れやスイートルームで、人目を気にせず名湯を独り占め。きめ細やかなサシの相州牛や駿河湾・相模湾の冬の味覚を散りばめた本格懐石料理に舌鼓を打つ、憧れの記念日ラグジュアリーステイ厳選5選。
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
            都心からロマンスカーと箱根登山バスでわずか2時間あまり。箱根火山のカルデラ北部に広がる『仙石原（せんごくはら）』は、広大な自然の静寂と洗練されたアート、そして濃厚な温泉が共存する日本有数のプレミアムリゾートです。11月から12月にかけての仙石原は、秋の観光ピークの喧騒が嘘のように引き、凛とした冬の澄んだ大気が高原を包み込む『大人のための最も贅沢な滞在期』を迎えます。台ヶ岳の裾野を覆い尽くす有名なすすき草原は、柔らかな冬の斜光を浴びて黄金色から銀白色へと輝きを深め、散策路を歩けば風の渡る音だけが耳に届きます。この仙石原を象徴するのが、大涌谷の噴煙地から直接引湯される濃厚な乳白色の硫黄泉（酸性-カルシウム-硫酸塩・塩化物温泉）。ph2前後の強い酸性と豊富なメタケイ酸を含むこの白濁湯は、湯船に身を沈めた瞬間に硫黄の芳香が心地よく鼻腔をくすぐり、古い角質を洗い流して肌をつるつるに整える類稀な美肌効果を誇ります。今回厳選したのは、その名湯を客室専用の露天風呂や広々としたテラススイートで24時間いつでも好きな時に独り占めできる最高峰のラグジュアリー隠れ宿。竹取物語の世界観を現代建築で昇華させた『金乃竹 仙石原』や、北海道の美食と箱根の湯が融合した『きたの風茶寮』、三井財閥の旧別荘地に佇む全室スイート『箱根・翠松園』など、いずれも1泊1室10万〜20万円を超える憧れの名宿ばかりです。夕食には幻のブランド牛と呼ばれる『相州牛』のフィレ炭火焼きや、相模湾・駿河湾の冬の味覚を彩った極上の月替わり日本懐石。他人の視線を一切遮断された完全プライベート空間で、雪を冠した箱根外輪山を眺めながら過ごす初冬の仙石原は、大切な人との記念日や自分への最高のご褒美にふさわしい至高のひとときを約束します。
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
              <span>大涌谷直送の白濁硫黄泉！全室専用露天風呂付きスイートで過ごす完全プライベート</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              ph2前後の強い酸性と硫黄成分が溶け込む本格的な濁り湯。誰にも邪魔されない客室露天風呂で、湯けむりと冬の澄んだ星空を眺めながら極上のプライベート湯浴みが叶います。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                2
              </span>
              <span>黄金色に輝くすすき草原のフィナーレと世界基準のアートミュージアム巡り</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              初冬の柔らかな光に包まれる広大名すすき草原散策に加え、ポーラ美術館や箱根ガラスの森美術館など名門美術館が至近。感性を深く満たす大人のカルチャーツーリズムが楽しめます。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                3
              </span>
              <span>幻の銘柄「相州牛」と相模湾の冬魚介！一流料理人が腕を振るう至高の懐石ディナー</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              きめ細やかな霜降りと上品な脂の甘みが特徴の地元・相州牛ステーキや、旬を迎える真鯛・鮑・金目鯛。選び抜かれた器と卓越した技が織りなす感動の美食体験を個室食事処で堪能できます。
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
              <span>近隣の必見名所：仙石原</span>
            </h2>
            <span className="text-[11px] text-slate-400">Wikipedia・公式解説連携</span>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative h-52 md:h-60 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Mt.Kami_from_Mt.Kintoki_04.jpg/1280px-Mt.Kami_from_Mt.Kintoki_04.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="初冬の静寂と黄金色の名所・箱根仙石原（広大なすすき草原と大涌谷白濁硫黄泉の源泉地）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="md:col-span-7 space-y-2.5">
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                初冬の静寂と黄金色の名所・箱根仙石原（広大なすすき草原と大涌谷白濁硫黄泉の源泉地）
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                仙石原（せんごくはら、せんごくばら）は神奈川県足柄下郡箱根町の地名。ススキの草原や仙石原温泉で知られる。...
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
        {/* 宿カード 1: 金乃竹　仙石原 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第1位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              竹取物語の幻想美が息づく全室露天付きの最高峰！大人限定の隠れ宿
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
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/184577/184577.jpg"
                  alt="金乃竹　仙石原"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  金乃竹　仙石原
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>神奈川県足柄下郡箱根町仙石原817-342</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>箱根湯本駅より箱根登山バス「桃源台行き」で約30分「台ケ岳」下車　徒歩にて約3分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>敷地全体に水盤と竹林が配され、かぐや姫の物語を現代的なラグジュアリーデザインで具現化した大人のための隠れ家。全室に広々とした客室露天風呂を備え、クチコミ評価★5.0を誇る至高の宿です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>客室の露天風呂には大涌谷から届く良質な白濁硫黄泉が注がれ、竹林を吹き抜ける風を感じながら24時間プライベートな湯浴みを堪能できます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は季節の移ろいを繊細に表現した本格京懐石。厳選されたA5ランク相州牛や全国から集まる極上素材を一皿ごとに美しく供し、記念日を完璧に演出してくれます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥96,250</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184577%2F184577.html"
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

        {/* 宿カード 2: 金乃竹　茶寮 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第2位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              1棟貸切感覚のプライベート茶寮！厳選された料理と茶の湯の癒やし
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">高評価</span>
              <span className="text-slate-400">（クチコミ 3件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/184579/184579.jpg"
                  alt="金乃竹　茶寮"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  金乃竹　茶寮
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>神奈川県足柄下郡箱根町仙石原817－460</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>箱根湯本駅より箱根登山バス「桃源台行き」で約30分「台ケ岳」下車　徒歩にて約3分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>『金乃竹』が手掛けた、わずか数室の限定されたプライベート空間で過ごす特別な滞在。茶の湯の精神を取り入れた静寂と洗練された設えが旅人の心を解きほぐします。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>大人の隠れ家にふさわしい落ち着いた客室には良質な温泉が引かれ、誰にも邪魔されない静かな時間の中で読書や温泉三昧を楽しめます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>素材本来の味を極限まで引き出した滋味あふれる料理の数々と、名茶を用いたペアリングなど、五感を深く刺激する知的な滞在が叶います。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥18,733</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184579%2F184579.html"
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

        {/* 宿カード 3: 仙石原温泉　きたの風茶寮 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第3位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              北海道の至高の恵みと箱根の美肌湯が融合！全室温泉露天付き和のオーベルジュ
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.46</span>
              <span className="text-slate-400">（クチコミ 106件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/137410/137410.jpg"
                  alt="仙石原温泉　きたの風茶寮"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  仙石原温泉　きたの風茶寮
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>神奈川県足柄下郡箱根町仙石原934-29</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>箱根湯本駅より箱根登山バスで約40分、新宿駅より高速バスで約2時間、「仙郷楼前」徒歩1分。駐車場13台無料</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>北海道の高級リゾート『望楼NOGUCHI』の技と哲学を箱根に移植した全10室の高級和オーベルジュ。全室に専用の源泉掛け流し露天風呂または展望風呂を完備しています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は北海道から直送されるボタンエビ、ウニ、ズワイガニなどの北海の幸と、箱根近郊の厳選食材が競演する和フレンチ会席。ワインとのマリアージュも絶品です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>大浴場には大涌谷の白濁湯が並々と注がれ、湯上がりラウンジでの無料ドリンクサービスなど、贅を尽くしたホスピタリティが評判を呼んでいます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥49,400</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137410%2F137410.html"
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

        {/* 宿カード 4: 箱根・翠松園 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第4位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              三井財閥の別荘跡地に広がる三千坪の森！全室スイートの最高級リゾート
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.94</span>
              <span className="text-slate-400">（クチコミ 90件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/151465/151465.jpg"
                  alt="箱根・翠松園"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  箱根・翠松園
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>神奈川県足柄下郡箱根町小涌谷519-9</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>箱根登山鉄道「小涌谷駅」より送迎（要予約）</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>大正時代に三井財閥の別荘が築かれた3000坪の広大な敷地に、わずか16室のスイートルームのみを配した日本屈指のラグジュアリーホテルです。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>全室に自家源泉の露天風呂とハンモック付きテラスを備え、現代数寄屋造りの贅を尽くしたインテリアが日常を完全に忘れさせてくれます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>料理人が目の前で腕を振るう鉄板焼きや伝統的な日本料理を、登録有形文化財の風情漂う食事処で堪能。コンシェルジュによる細やかなサポートも最高峰です。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥45,650</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F151465%2F151465.html"
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

        {/* 宿カード 5: 全室露天風呂付客室　仙石原温泉　センチュリオン箱根別邸 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第5位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              全室離れ・露天風呂付きの洗練空間！仙石原の高台に佇むスタイリッシュホテル
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.67</span>
              <span className="text-slate-400">（クチコミ 175件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/176633/176633.jpg"
                  alt="全室露天風呂付客室　仙石原温泉　センチュリオン箱根別邸"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  全室露天風呂付客室　仙石原温泉　センチュリオン箱根別邸
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>神奈川県足柄下郡箱根町仙石原1285-389</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>箱根湯本駅よりお車にて約25分、東名高速道路御殿場ICからお車で約25分。</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>仙石原の高台に建ち、すべての客室に天然温泉の露天風呂を備えた上質なプライベートリゾート。モダンでスタイリッシュな客室空間が心地よい滞在を約束します。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>客室露天風呂からは仙石原の自然や星空を眺めることができ、プライベート感を重視するカップルやご夫婦の記念日旅行に最適です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>地元の新鮮な食材をふんだんに取り入れた会席料理や洋食ディナーを提供。上質な非日常をスマートに楽しみたいトラベラーに選ばれています。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥43,000</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176633%2F176633.html"
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
・電車・バス：小田急ロマンスカーで「箱根湯本駅」下車。箱根登山バス（桃源台行き）に乗り換え、「仙石案内所」または各宿最寄りのバス停まで約30分。新宿駅から直通の小田急箱根高速バスを利用すれば約2時間で仙石原へダイレクトにアクセス可能。
・車：東名高速道路「御殿場IC」より乙女峠・国道138号線を経由して約20分。東京方面からは「御殿場IC」ルートが最も渋滞を回避しやすく快適です。箱根口IC経由の場合は約40分。
・新幹線：東海道新幹線「小田原駅」よりタクシーで約40分、または箱根登山バスで約50分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月中旬〜12月（すすき草原の落ち着いた冬景色と、温泉のぬくもりが最もありがたく感じられる大人の狙い目シーズン。星空観察にも最適）。
・気温の目安：標高約700mの高原地帯のため箱根湯本より4〜5℃低く、11月は日中10〜14℃、朝晩は3〜6℃。12月に入ると日中でも5〜8℃、朝晩は氷点下に達します。
・服装のポイント：厚手のウールコートや上質なダウンコート、マフラー、手袋をご用意ください。朝晩のテラスや露天風呂上がりには急激に冷え込むため、羽織るものがあると快適です。
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
              <span>仙石原の温泉はすべて白濁した硫黄泉なのですか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              仙石原エリアには、大涌谷から造成・引湯される乳白色の酸性硫酸塩泉と、自家源泉から湧出する無色透明で肌触りの柔らかな弱アルカリ性単純温泉の2つの系統があります。宿によって引湯している源泉が異なるため、にごり湯を希望される場合は大涌谷引湯のプランや大浴場を備えた宿（金乃竹やきたの風茶寮など）を選ぶのがおすすめです。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>客室露天風呂の温泉も源泉掛け流しですか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              今回厳選したハイクラス宿の多くは、客室露天風呂にも贅沢に天然温泉を引湯・掛け流し（または温度管理のための適温循環）しています。24時間いつでも好きな温度で入浴できるよう配慮されており、湯守の徹底した温度管理のもとで極上の湯浴みが楽しめます。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>11月〜12月の箱根・仙石原へのドライブでスタッドレスタイヤは必要ですか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              11月中旬まではノーマルタイヤでも走行可能な日が多いですが、11月下旬以降や12月に入ると乙女峠や芦ノ湖周辺で突然の降雪や早朝の路面凍結が発生することがあります。お車で訪れる場合は、11月下旬以降はスタッドレスタイヤの装着、またはチェーンの携行を強く推奨します。
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
