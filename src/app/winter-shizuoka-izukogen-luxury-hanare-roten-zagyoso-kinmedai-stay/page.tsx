import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight, 
  Clock, ArrowRight, Utensils, Star, Compass, Train, ShieldCheck 
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【全室離れ客室露天風呂と相模湾絶景オーシャンビュー】2026-2027年11-12月初冬の静岡・伊豆高原！最高峰ABBA RESORTS坐漁荘＆お宿うち山・極上地金目鯛と伊勢海老・しずおか和牛を味わう大人の記念日ラグジュアリー名宿5選 | クラウドトラベル',
  description: '都心から特急でわずか2時間、相模湾と伊豆大島を望む静岡屈指のリゾート地・伊豆高原。初冬の澄んだ大気のもと、全室に趣の異なる源泉掛け流し専用露天風呂を備えた極上の離れ宿で過ごす至福の時間。世界基準のおもてなしを誇る名門宿から、海を見晴らす高台のプライベートスイートまで。冬に脂が乗る極上地金目鯛の煮付けや活伊勢海老、しずおか和牛を堪能する大人の記念日名宿5選。',
  keywords: '静岡県, 城ヶ崎海岸, 高級旅館, 客室露天風呂, 記念日旅行, 11月旅行, 12月旅行, 楽天トラベル, ふるさと納税',
  openGraph: {
    title: '【全室離れ客室露天風呂と相模湾絶景オーシャンビュー】2026-2027年11-12月初冬の静岡・伊豆高原！最高峰ABBA RESORTS坐漁荘＆お宿うち山・極上地金目鯛と伊勢海老・しずおか和牛を味わう大人の記念日ラグジュアリー名宿5選',
    description: '都心から特急でわずか2時間、相模湾と伊豆大島を望む静岡屈指のリゾート地・伊豆高原。初冬の澄んだ大気のもと、全室に趣の異なる源泉掛け流し専用露天風呂を備えた極上の離れ宿で過ごす至福の時間。世界基準のおもてなしを誇る名門宿から、海を見晴らす高台のプライベートスイートまで。冬に脂が乗る極上地金目鯛の煮付けや活伊勢海老、しずおか和牛を堪能する大人の記念日名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-shizuoka-izukogen-luxury-hanare-roten-zagyoso-kinmedai-stay',
    type: 'article',
    siteName: 'クラウドトラベル',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-shizuoka-izukogen-luxury-hanare-roten-zagyoso-kinmedai-stay',
  },
};

export default function LuxuryWinterFeaturePage() {

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【全室離れ客室露天風呂と相模湾絶景オーシャンビュー】2026-2027年11-12月初冬の静岡・伊豆高原！最高峰ABBA RESORTS坐漁荘＆お宿うち山・極上地金目鯛と伊勢海老・しずおか和牛を味わう大人の記念日ラグジュアリー名宿5選 | クラウドトラベル",
    "description": "都心から特急でわずか2時間、相模湾と伊豆大島を望む静岡屈指のリゾート地・伊豆高原。初冬の澄んだ大気のもと、全室に趣の異なる源泉掛け流し専用露天風呂を備えた極上の離れ宿で過ごす至福の時間。世界基準のおもてなしを誇る名門宿から、海を見晴らす高台のプライベートスイートまで。冬に脂が乗る極上地金目鯛の煮付けや活伊勢海老、しずおか和牛を堪能する大人の記念日名宿5選。",
    "image": ["https://croud-travel.pages.dev/winter-shizuoka-izukogen-luxury-hanare-roten-zagyoso-kinmedai-stay"],
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/winter-shizuoka-izukogen-luxury-hanare-roten-zagyoso-kinmedai-stay/"
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
                  "name": "【全室離れ客室露天風呂と相模湾絶景オーシャンビュー】2026-2027年11-12月初冬の静岡・伊豆高原！最高峰ABBA RESORTS坐漁荘＆お宿うち山・極上地金目鯛と伊勢海老・しずおか和牛を味わう大人の記念日ラグジュアリー名宿5選",
                  "item": "https://croud-travel.pages.dev/winter-shizuoka-izukogen-luxury-hanare-roten-zagyoso-kinmedai-stay"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
        {
          "@type": "Question",
          "name": "「地金目鯛」と通常の金目鯛の違いは何ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "一般的な金目鯛は遠洋で獲られ冷凍されるものも多いですが、「地金目鯛（日戻り金目鯛）」は伊豆諸島周辺の近海で早朝に一本釣りされ、その日のうちに港へ水揚げされる完全無冷凍の最高級ブランドです。身の締まりと脂の乗りが格段に異なり、初冬から真冬にかけて一番の旬を迎えます。"
          }
        },
        {
          "@type": "Question",
          "name": "記念日やプロポーズなどの特別な宿泊に向いていますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "今回選定した宿はすべて、記念日やハネムーン、誕生日のお祝いに特化したプレミアム宿です。ケーキや花束の手配、スパトリートメント、記念写真サービスなど細やかなアニバーサリー対応が充実しており、大切な日のサプライズに最適です。"
          }
        },
        {
          "@type": "Question",
          "name": "冬の伊豆高原は雪が降りますか？車で行く際の注意点は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "伊豆半島の海岸沿い（東伊豆）は非常に温暖なため、11月・12月に雪が降ることは極めて稀です。基本的にはノーマルタイヤで快適にアクセスできます。ただし、箱根・伊豆スカイラインや天城峠などの標高の高い山越えルートを通る場合は、12月以降に凍結の可能性があるため、海沿いの国道135号線ルートの利用が安心です。"
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
          <span className="text-slate-800 font-medium truncate max-w-xs">【全室離れ客室露天風呂と相模湾絶景オーシャンビュー】2026-2027年11-12月初冬の静岡・伊豆高原！最高峰ABBA RESORTS坐漁荘＆お宿うち山・極上地金目鯛と伊勢海老・しずおか和牛を味わう大人の記念日ラグジュアリー名宿5選</span>
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
            【全室離れ客室露天風呂と相模湾絶景オーシャンビュー】2026-2027年11-12月初冬の静岡・伊豆高原！最高峰ABBA RESORTS坐漁荘＆お宿うち山・極上地金目鯛と伊勢海老・しずおか和牛を味わう大人の記念日ラグジュアリー名宿5選
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            都心から特急でわずか2時間、相模湾と伊豆大島を望む静岡屈指のリゾート地・伊豆高原。初冬の澄んだ大気のもと、全室に趣の異なる源泉掛け流し専用露天風呂を備えた極上の離れ宿で過ごす至福の時間。世界基準のおもてなしを誇る名門宿から、海を見晴らす高台のプライベートスイートまで。冬に脂が乗る極上地金目鯛の煮付けや活伊勢海老、しずおか和牛を堪能する大人の記念日名宿5選。
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
            相模湾を見下ろす緑豊かな台地に広がり、大室山の麓から城ヶ崎海岸へと美しい自然が続く静岡県・伊豆高原。東京から特急踊り子号や新幹線を利用して2時間足らずというアクセスの良さにありながら、温暖な気候と豊かな海山の幸に恵まれたこの地は、日本でも有数の『全室離れ・客室露天風呂付き高級旅館』が集結する屈指のハイエンド激戦区です。初冬の11月から12月にかけての伊豆高原は、夏や紅葉の混雑が落ち着き、太平洋の水平線が最も青く澄み渡る絶好の旅行シーズン。日中は冬とは思えないほど柔らかな日差しが降り注ぎ、夜には冷えた大気の中に満天の星が瞬きます。伊豆の冬の食の主役といえば、この時期に最も脂の乗りが良くなる『地金目鯛（じきんめだい）』。稲取港や下田港に水揚げされる日帰り一本釣りの地金目鯛は、鮮やかな紅色と純白の身に上質な脂を蓄え、伝統の甘辛い秘伝タレでふっくらと煮付けた姿煮は言葉を失うほどの美味です。さらに冬に甘みを増す伊勢海老のお造りや鬼殻焼き、きめ細やかなサシが入った『しずおか和牛』の炭火焼きなど、美食の贅を極めた料理の数々が特別な夜を華やかに彩ります。宿泊には、日本の伝統美と現代の快適性が融合した『ABBA RESORTS IZU 坐漁荘』をはじめ、大室山を望む高台に佇みクチコミ★4.98を誇る全室メゾネット離れ『お宿 うち山』、地中海リゾートの趣漂う『コルテラルゴ伊豆高原』など、プライベートを極めた名宿を厳選。全室に備えられた客室専用の露天風呂に浸かりながら、遠く相模湾を行き交う船の灯りを眺める時間は、日常のストレスを完全に洗い流し、二人の絆を深める極上のひとときとなります。
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
              <span>全室が独立した離れ＆絶景露天風呂！誰にも邪魔されない至高のプライベート</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              客室専用の露天風呂や広大なテラスを備えた離れ宿が集結。相模湾の大海原や緑豊かな日本庭園を眺めながら、好きな時に何度でも源泉の湯浴みを満喫できます。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                2
              </span>
              <span>冬に極まる海の至宝「極上地金目鯛の姿煮」と「伊勢海老・しずおか和牛」の饗宴</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              初冬に脂が最高潮に達する日帰り一本釣りの地金目鯛。濃厚な甘辛タレで煮上げた姿煮や、プリプリの伊勢海老、上質なしずおか和牛を贅沢に味わい尽くせます。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                3
              </span>
              <span>城ヶ崎海岸の門脇吊橋絶景と初冬の澄んだ相模湾・伊豆大島パノラマ</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              大室山の溶岩が造り出した荒々しい断崖絶壁と門脇吊橋のスリルあふれる景観。空気が澄み渡る初冬は水平線上に伊豆大島や利島がくっきりと見渡せます。
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
              <span>近隣の必見名所：城ヶ崎海岸</span>
            </h2>
            <span className="text-[11px] text-slate-400">Wikipedia・公式解説連携</span>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative h-52 md:h-60 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/J%C5%8Dgasaki_Coast_01.jpg/1280px-J%C5%8Dgasaki_Coast_01.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="相模湾の断崖絶壁と門脇吊橋・城ヶ崎海岸（大室山の溶岩が造り出した雄大な海岸美と太平洋パノラマ）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="md:col-span-7 space-y-2.5">
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                相模湾の断崖絶壁と門脇吊橋・城ヶ崎海岸（大室山の溶岩が造り出した雄大な海岸美と太平洋パノラマ）
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                城ヶ崎海岸（じょうがさきかいがん）は、静岡県伊東市の南東に位置する海岸である。富士箱根伊豆国立公園の指定を受けている。...
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
        {/* 宿カード 1: ＡＢＢＡ　ＲＥＳＯＲＴＳ　ＩＺＵ　―　坐漁荘 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第1位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              浮山温泉郷の森に佇む日本の美の極致！世界基準のラグジュアリー名門宿
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">高評価</span>
              <span className="text-slate-400">（クチコミ 26件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/7554/7554.jpg"
                  alt="ＡＢＢＡ　ＲＥＳＯＲＴＳ　ＩＺＵ　―　坐漁荘"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  ＡＢＢＡ　ＲＥＳＯＲＴＳ　ＩＺＵ　―　坐漁荘
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>静岡県伊東市八幡野1741-42</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>車：東京→浮山温泉郷（厚木I.C経由）2時間25分/電車：熱海→伊豆高原50分→坐漁荘5分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>創業半世紀を超え、数々のVIPを迎えてきた伊豆を代表する高級日本旅館。約5000坪の広大な敷地に数寄屋造りの本館と露天風呂付きヴィラが点在し、優雅な滞在が叶います。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>館内にはフレンチ・日本料理・鉄板焼きの3つの名門レストランを備え、極上の地金目鯛や伊勢海老、静岡そだち牛など最高峰の美食を堪能できます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>緑豊かな庭園露天風呂やフレンチジャグジー、本格的なアロマスパなど充実した施設を誇り、何もしない贅沢を極めたい大人に選ばれ続けています。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥84,234</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7554%2F7554.html"
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

        {/* 宿カード 2: お宿うち山　伊豆高原　全室露天風呂付き隠れ宿 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第2位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              全室メゾネット離れ＆客室露天風呂！クチコミ★4.98の奇跡の美食宿
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.98</span>
              <span className="text-slate-400">（クチコミ 462件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/42000/42000.jpg"
                  alt="お宿うち山　伊豆高原　全室露天風呂付き隠れ宿"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  お宿うち山　伊豆高原　全室露天風呂付き隠れ宿
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>静岡県静岡県伊東市池628-68</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>伊豆急行　伊豆高原駅より車で約８分／東名厚木ＩＣ、沼津ＩＣより約９０分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>大室山の裾野に佇み、わずか6室すべての客室が2階建てメゾネット構造の離れ宿。2階の展望露天風呂からは広大な太平洋と遠く伊豆大島まで見渡せます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は料理長が渾身の技で仕立てる新感覚の日本料理。朝食名物の『鮑の餡掛けご飯』は全国の朝食ランキングで常に上位に輝く絶品です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>細やかで行き届いたバトラーサービスと、他のゲストと顔を合わせない完全プライベートな空間設計で、カップルやご夫婦の記念日に圧倒的人気を誇ります。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥51,600</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F42000%2F42000.html"
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

        {/* 宿カード 3: 伊豆高原温泉　客室露天風呂付リゾートホテル　コルテラルゴ伊豆高原 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第3位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              地中海リゾートの優雅な風情！全室露天風呂付き隠れ家オーベルジュ
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.88</span>
              <span className="text-slate-400">（クチコミ 402件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/38761/38761.jpg"
                  alt="伊豆高原温泉　客室露天風呂付リゾートホテル　コルテラルゴ伊豆高原"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  伊豆高原温泉　客室露天風呂付リゾートホテル　コルテラルゴ伊豆高原
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>静岡県伊東市富戸1038-73</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>伊豆急行線　伊豆高原駅より車にて１０分／東名　厚木ＩＣより小田原厚木道路経由、Ｒ１３５を下田方面へ１２０分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>サンタフェ、地中海、バリなど世界の極上リゾートをテーマにした個性豊かなスイートルームが揃う、大人限定のリゾートホテルです。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>全室に備えられた専用露天風呂には天然温泉が注がれ、海外旅行に訪れたかのような非日常感の中でゆったりと寛げます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食はシェフ自慢の本格イタリアンフルコース。伊豆の新鮮な魚介と厳選肉を用いた華やかなディナーが記念日の夜をドラマチックに演出します。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥21,360</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38761%2F38761.html"
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

        {/* 宿カード 4: 伊豆高原　記念日を祝う宿　自然家．Ｈａｃｏ（しぜんや．ハコ） */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第4位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              全5室すべて海を望む露天風呂付き！記念日のおもてなしに特化した名宿
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.73</span>
              <span className="text-slate-400">（クチコミ 340件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/128493/128493.jpg"
                  alt="伊豆高原　記念日を祝う宿　自然家．Ｈａｃｏ（しぜんや．ハコ）"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  伊豆高原　記念日を祝う宿　自然家．Ｈａｃｏ（しぜんや．ハコ）
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>静岡県伊東市富戸1160-11</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>富戸駅より送迎可能（要予約）徒歩２０分／東名厚木ＩＣ、沼津ＩＣより約９０分 電気自動車でお越しの方 充電可能！</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>わずか5室のみ、大人の休日を贅沢に過ごすために設計されたデザイナーズ宿。客室テラスの専用露天風呂からは相模湾のパノラマ絶景が広がります。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は地元伊豆の新鮮な食材をふんだんに取り入れた創作ディナー。記念日のホールケーキやデザートプレートの演出も素晴らしく、感動の思い出を作れます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>オーナー夫妻の温かなホスピタリティと清潔感あふれるモダンな空間が心地よく、リピーターの絶えない隠れた名宿です。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥18,800</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128493%2F128493.html"
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

        {/* 宿カード 5: 伊豆高原　記念日を祝う宿　別邸ＫＵＲＯ */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第5位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              1日2組限定の完全プライベート別邸！クチコミ★5.0の究極の贅沢
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">5.00</span>
              <span className="text-slate-400">（クチコミ 60件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/147899/147899.jpg"
                  alt="伊豆高原　記念日を祝う宿　別邸ＫＵＲＯ"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  伊豆高原　記念日を祝う宿　別邸ＫＵＲＯ
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>静岡県伊東市富戸1160-16</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>富戸駅より送迎可能（要予約）徒歩２０分／東名厚木ＩＣ、沼津ＩＣより約９０分 電気自動車でお越しの方 充電可能！</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>わずか2組のゲストのためだけに用意された極上の別邸。広々としたテラスには源泉掛け流しの専用露天風呂と信楽焼の内湯を完備しています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>海を見下ろす高台から望む朝日は息を呑む美しさ。夜には満天の星空を眺めながら、極上のプライベートバスタイムを心ゆくまで堪能できます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は部屋食でいただく極上の創作懐石。誰にも邪魔されず、大切な人と一生の記憶に残る贅沢な時間を過ごしたい方に最適な最高峰の宿です。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥39,500</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147899%2F147899.html"
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
・電車：JR東海道新幹線「熱海駅」にてJR伊東線・伊豆急行線に乗り換え、「伊豆高原駅」まで約45分。東京駅からは特急「踊り子号」または「サフィール踊り子号」で伊豆高原駅まで直通約2時間。伊豆高原駅からは各宿の無料送迎車で約5〜10分。
・車：東名高速道路「厚木IC」より小田原厚木道路〜国道135号線経由で約1時間40分。または新東名高速道路「長泉沼津IC」より伊豆縦貫道〜修善寺経由で約1時間15分。
・新幹線：東海道新幹線「熱海駅」よりレンタカーを利用すれば海岸沿いの絶景ドライブ（約50分）を楽しみながらアクセス可能。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月〜12月（太平洋側の海洋性気候のため冬でも温暖で雪の心配がほぼなく、空気が澄んで相模湾や星空の眺望が最も美しいシーズン）。
・気温の目安：都心部より2〜3℃暖かく、11月は日中14〜18℃、朝晩は8〜11℃。12月でも日中は11〜14℃前後あり、日差しがあればポカポカとした陽気です。
・服装のポイント：日中は薄手のコートやジャケットで快適に散策できますが、城ヶ崎海岸など海沿いの断崖では海風が吹くため防風性のあるアウターがあると安心です。
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
              <span>「地金目鯛」と通常の金目鯛の違いは何ですか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              一般的な金目鯛は遠洋で獲られ冷凍されるものも多いですが、「地金目鯛（日戻り金目鯛）」は伊豆諸島周辺の近海で早朝に一本釣りされ、その日のうちに港へ水揚げされる完全無冷凍の最高級ブランドです。身の締まりと脂の乗りが格段に異なり、初冬から真冬にかけて一番の旬を迎えます。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>記念日やプロポーズなどの特別な宿泊に向いていますか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              今回選定した宿はすべて、記念日やハネムーン、誕生日のお祝いに特化したプレミアム宿です。ケーキや花束の手配、スパトリートメント、記念写真サービスなど細やかなアニバーサリー対応が充実しており、大切な日のサプライズに最適です。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>冬の伊豆高原は雪が降りますか？車で行く際の注意点は？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              伊豆半島の海岸沿い（東伊豆）は非常に温暖なため、11月・12月に雪が降ることは極めて稀です。基本的にはノーマルタイヤで快適にアクセスできます。ただし、箱根・伊豆スカイラインや天城峠などの標高の高い山越えルートを通る場合は、12月以降に凍結の可能性があるため、海沿いの国道135号線ルートの利用が安心です。
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
