import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight, 
  Clock, ArrowRight, Utensils, Star, Compass, Train, ShieldCheck 
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【魯山人の美意識が宿る数寄屋造りの名門と加能ガニ極上フルコース】2026-2027年11-12月初冬の石川・加賀温泉郷！名門「あらや滔々庵」＆「山中温泉 花紫」・源泉掛け流し客室露天風呂と初冬解禁のズワイガニ・能登牛名宿5選 | クラウドトラベル',
  description: '開湯1300年の歴史を誇る加賀温泉郷（山代温泉・山中温泉）。美食家・北大路魯山人が逗留し美意識を磨いた名門中の名門「あらや滔々庵」や、渓谷美を望む全室露天付き「花紫」など。11月6日の冬漁解禁とともに始まる最高峰ブランド「加能ガニ（青タグ）」の焼きガニ・カニ刺し・甲羅味噌焼きと、とろける能登牛会席。加賀百万石の伝統工芸と極上の名湯が織りなす最高峰の冬旅厳選5選。',
  keywords: '石川県, 山代温泉, 高級旅館, 客室露天風呂, 記念日旅行, 11月旅行, 12月旅行, 楽天トラベル, ふるさと納税',
  openGraph: {
    title: '【魯山人の美意識が宿る数寄屋造りの名門と加能ガニ極上フルコース】2026-2027年11-12月初冬の石川・加賀温泉郷！名門「あらや滔々庵」＆「山中温泉 花紫」・源泉掛け流し客室露天風呂と初冬解禁のズワイガニ・能登牛名宿5選',
    description: '開湯1300年の歴史を誇る加賀温泉郷（山代温泉・山中温泉）。美食家・北大路魯山人が逗留し美意識を磨いた名門中の名門「あらや滔々庵」や、渓谷美を望む全室露天付き「花紫」など。11月6日の冬漁解禁とともに始まる最高峰ブランド「加能ガニ（青タグ）」の焼きガニ・カニ刺し・甲羅味噌焼きと、とろける能登牛会席。加賀百万石の伝統工芸と極上の名湯が織りなす最高峰の冬旅厳選5選。',
    url: 'https://croud-travel.pages.dev/winter-ishikawa-kaga-yamashiro-luxury-araya-totoan-kanogani-stay',
    type: 'article',
    siteName: 'クラウドトラベル',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-ishikawa-kaga-yamashiro-luxury-araya-totoan-kanogani-stay',
  },
};

export default function UltraLuxuryWinterFeaturePage() {

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【魯山人の美意識が宿る数寄屋造りの名門と加能ガニ極上フルコース】2026-2027年11-12月初冬の石川・加賀温泉郷！名門「あらや滔々庵」＆「山中温泉 花紫」・源泉掛け流し客室露天風呂と初冬解禁のズワイガニ・能登牛名宿5選 | クラウドトラベル",
    "description": "開湯1300年の歴史を誇る加賀温泉郷（山代温泉・山中温泉）。美食家・北大路魯山人が逗留し美意識を磨いた名門中の名門「あらや滔々庵」や、渓谷美を望む全室露天付き「花紫」など。11月6日の冬漁解禁とともに始まる最高峰ブランド「加能ガニ（青タグ）」の焼きガニ・カニ刺し・甲羅味噌焼きと、とろける能登牛会席。加賀百万石の伝統工芸と極上の名湯が織りなす最高峰の冬旅厳選5選。",
    "image": ["https://croud-travel.pages.dev/winter-ishikawa-kaga-yamashiro-luxury-araya-totoan-kanogani-stay"],
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
    "mainEntityOfPage": "https://croud-travel.pages.dev/winter-ishikawa-kaga-yamashiro-luxury-araya-totoan-kanogani-stay/"
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
                  "name": "【魯山人の美意識が宿る数寄屋造りの名門と加能ガニ極上フルコース】2026-2027年11-12月初冬の石川・加賀温泉郷！名門「あらや滔々庵」＆「山中温泉 花紫」・源泉掛け流し客室露天風呂と初冬解禁のズワイガニ・能登牛名宿5選",
                  "item": "https://croud-travel.pages.dev/winter-ishikawa-kaga-yamashiro-luxury-araya-totoan-kanogani-stay"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
        {
          "@type": "Question",
          "name": "「加能ガニ」とはどのような蟹ですか？越前ガニとの違いは？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "「加能ガニ（かのうがに）」は、石川県の港（橋立港、金沢港など）で水揚げされるオスのズワイガニの最高級ブランド名です。青色のブランドタグが取り付けられます。福井県の「越前ガニ（黄色タグ）」と同じズワイガニですが、漁場が近く日帰り漁で水揚げされるため鮮度が極めて高いのが特徴です。またメスのズワイガニは「香箱ガニ（こうばこがに）」と呼ばれ、濃厚な内子と外子が絶品です。"
          }
        },
        {
          "@type": "Question",
          "name": "北大路魯山人と山代温泉「あらや滔々庵」の縁とは？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "大正4年（1915年）、当時まだ無名だった福田房次郎（後の北大路魯山人）が山代温泉を訪れ、あらや滔々庵の先代主人や初代須田菁華と出会いました。あらやの離れに逗留して多くの看板や額を彫り、九谷焼の作陶に開眼したことが、魯山人の芸術家・美食家としての原点となりました。館内には現在も魯山人の貴重な作品が展示されています。"
          }
        },
        {
          "@type": "Question",
          "name": "12月の加賀温泉郷へ車で行く場合、スタッドレスタイヤは必要ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "北陸自動車道や加賀温泉郷周辺は、12月に入ると強い寒波によって雪が積もったり路面が凍結することがあります。冬季にお車で訪れる場合は、必ずスタッドレスタイヤを装着してください。北陸新幹線の利用が最も安全でスムーズです。"
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
          <span className="text-slate-800 font-medium truncate max-w-xs">【魯山人の美意識が宿る数寄屋造りの名門と加能ガニ極上フルコース】2026-2027年11-12月初冬の石川・加賀温泉郷！名門「あらや滔々庵」＆「山中温泉 花紫」・源泉掛け流し客室露天風呂と初冬解禁のズワイガニ・能登牛名宿5選</span>
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
            【魯山人の美意識が宿る数寄屋造りの名門と加能ガニ極上フルコース】2026-2027年11-12月初冬の石川・加賀温泉郷！名門「あらや滔々庵」＆「山中温泉 花紫」・源泉掛け流し客室露天風呂と初冬解禁のズワイガニ・能登牛名宿5選
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            開湯1300年の歴史を誇る加賀温泉郷（山代温泉・山中温泉）。美食家・北大路魯山人が逗留し美意識を磨いた名門中の名門「あらや滔々庵」や、渓谷美を望む全室露天付き「花紫」など。11月6日の冬漁解禁とともに始まる最高峰ブランド「加能ガニ（青タグ）」の焼きガニ・カニ刺し・甲羅味噌焼きと、とろける能登牛会席。加賀百万石の伝統工芸と極上の名湯が織りなす最高峰の冬旅厳選5選。
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
            北陸新幹線の延伸通結により東京からのアクセスが飛躍的に向上した石川県・加賀温泉郷。その中心に位置する『山代温泉（やましろおんせん）』と『山中温泉（やまなかおんせん）』は、開湯1300年の歴史を誇り、加賀百万石の前田侯をはじめ多くの文人墨客が逗留した北陸屈指の温泉地です。特に大正期、稀代の美食家・芸術家として名高い北大路魯山人が逗留し、初代須田菁華から九谷焼の作陶を学び、美意識を覚醒させた地として知られます。11月から12月にかけての加賀温泉郷は、11月6日の『日本海ズワイガニ漁解禁』とともに一年で最も熱気に包まれる最高のハイシーズン。石川県で水揚げされる最高級ブランド『加能ガニ（かのうがに）』は、青いタグが目印の一番蟹。荒海で身が引き締まり、甲羅いっぱいに詰まった甘いカニ味噌、透き通るようなカニ刺し、香ばしい炭火焼きガニ、そして極上のカニすき鍋と、本場でしか味わえない至極のカニ尽くし会席が旅人を迎えます。宿泊には、魯山人ゆかりの老舗料亭旅館の最高峰『あらや滔々庵』をはじめ、鶴仙渓の絶景を望む全室露天付きの隠れ宿『山中温泉 花紫』、自然と調和するモダン建築が美しい名宿など、格式高い名門を厳選。客室露天風呂に掛け流される名湯に浸かり、九谷焼や山中塗の器に盛られた加能ガニととろける能登牛を味わう時間は、日本の冬の美食旅の頂点を極める贅沢な体験となります。
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
              <span>11月6日解禁！青タグの最高峰ブランド「加能ガニ」極上フルコースを本場で味わう</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              初冬の日本海がもたらす冬の味覚の王様・加能ガニ。炭火焼きガニの香ばしい薫り、とろけるカニ刺し、濃厚な甲羅味噌焼きなど、本場宿ならではの贅を尽くした蟹会席を堪能できます。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                2
              </span>
              <span>美食家・北大路魯山人ゆかりの最高峰名門旅館「あらや滔々庵」の美意識と格式</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              山代温泉の元湯を守り継ぐ名門旅館。魯山人の書画や九谷焼の器、数寄屋造りの建築美、源泉掛け流しの名湯が一体となった至高の文化体験を味わえます。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-black">
                3
              </span>
              <span>北陸新幹線延伸でアクセス抜群！鶴仙渓の初冬景色と開湯1300年の名湯巡り</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-8">
              東京から乗り換えなしで加賀温泉駅まで一直線。冬の鶴仙渓の渓谷美散策や、ステンドグラスが美しい古総湯での外湯巡りなど、優雅な冬の温泉街散策が楽しめます。
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
              <span>近隣の必見名所：山代温泉</span>
            </h2>
            <span className="text-[11px] text-slate-400">Wikipedia・公式解説連携</span>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative h-52 md:h-60 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Ko-Soyu_ac_%281%29.jpg/1280px-Ko-Soyu_ac_%281%29.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="開湯1300年の歴史を誇る名湯・山代温泉（薬王院温泉寺・古総湯の瓦屋根と北大路魯山人の美意識）"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="md:col-span-7 space-y-2.5">
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                開湯1300年の歴史を誇る名湯・山代温泉（薬王院温泉寺・古総湯の瓦屋根と北大路魯山人の美意識）
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                山代温泉（やましろおんせん）は、石川県加賀市（旧国加賀国）にある温泉地。
加賀温泉郷の一つであり、同じくして粟津温泉、山中温泉、片山津温泉を含めた北陸最大級の石川県有数の温泉街である。
所在地である加賀市には山代温泉という町名がある。...
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
        {/* 宿カード 1: あらや滔々庵 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第1位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              魯山人の美意識が息づく名門中の名門！元湯の源泉掛け流しと最高峰加能ガニ
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.91</span>
              <span className="text-slate-400">（クチコミ 20件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/187584/187584.jpg"
                  alt="あらや滔々庵"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  あらや滔々庵
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>石川県加賀市山代温泉18-119</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>JR加賀温泉駅よりお車にて約10分</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>山代温泉の中心・湯の曲輪に面し、八代にわたり元湯を守り続ける北陸屈指の高級老舗旅館。館内には北大路魯山人の扁額や美術品がさりげなく配されています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>毎分10万リットルを誇る山代温泉の元湯が贅沢に掛け流され、庭園を望む露天風呂や数寄屋造りの湯処で至高の湯浴みを満喫できます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>冬の夕食は本場加能ガニの極上フルコース。選び抜かれた器と一流の料理人が仕立てる蟹料理の数々は、食通を唸らせる芸術の極みです。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥54,200</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187584%2F187584.html"
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

        {/* 宿カード 2: 山中温泉　吉祥やまなか */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第2位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              鶴仙渓を眼下に望む全室リバービュー！名物加賀能登の旬を味わう極上宿
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.74</span>
              <span className="text-slate-400">（クチコミ 1673件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/67124/67124.jpg"
                  alt="山中温泉　吉祥やまなか"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  山中温泉　吉祥やまなか
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>石川県加賀市山中温泉東町1-ホ14-3</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>加賀温泉駅・小松空港から無料送迎あり（要予約/定時便）【車】加賀ICより14分。金沢・福井へは車で1時間</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>山中温泉の名勝・鶴仙渓の清流沿いに佇むハイクラス旅館。客室からは四季折々の渓谷美を一望でき、ゆったりとした時間が流れます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>大浴場や露天風呂には山中の名湯が溢れ、心地よいせせらぎを聞きながら優雅なリフレッシュが叶います。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は加賀懐石をベースに、厳選された加能ガニや能登牛、日本海の新鮮な海の幸を贅沢に取り入れた華やかなディナーを楽しめます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥19,500</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67124%2F67124.html"
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

        {/* 宿カード 3: 山中温泉　かがり吉祥亭 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第3位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              こおろぎ橋のすぐそば！渓谷の自然とモダンな和の設えが心地よい名旅館
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.63</span>
              <span className="text-slate-400">（クチコミ 1916件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/68251/68251.jpg"
                  alt="山中温泉　かがり吉祥亭"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  山中温泉　かがり吉祥亭
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>石川県加賀市山中温泉こおろぎ町ニ1-1</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>加賀温泉駅・小松空港から無料送迎あり（要予約/定時便）【車】加賀ICより16分。金沢・福井へは車で1時間</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>山中温泉のシンボル『こおろぎ橋』にほど近い清流沿いに位置し、自然豊かな景観と洗練されたサービスが人気の温泉旅館です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>広々とした大浴場や露天風呂からは渓谷の冬景色を望み、肌触りの滑らかな名湯が日頃の疲れを綺麗に洗い流してくれます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>地産地消にこだわった夕食は、日本海の旬の魚介や加賀野菜を美しく盛り込んだ会席料理。上質な時間を過ごせます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥16,000</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68251%2F68251.html"
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

        {/* 宿カード 4: 山代温泉　ゆのくに天祥 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第4位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              自家源泉と三つの大浴場巡り！露天風呂付き客室で過ごす至福の休日
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.52</span>
              <span className="text-slate-400">（クチコミ 3773件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/1616/1616.jpg"
                  alt="山代温泉　ゆのくに天祥"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  山代温泉　ゆのくに天祥
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>石川県加賀市山代温泉19-49-1</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>【車】北陸自動車道加賀IC、片山津ICより約15分【電車】JR・IRいしかわ鉄道加賀温泉駅より無料送迎 予約制</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>自家源泉を有し、趣の異なる3つの大浴場『九谷の湯処』『滝の湯処』『瑠璃の湯処』で多彩な湯巡りが楽しめる名門旅館です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>ハイクラスフロアにはプライベート露天風呂付き客室を備え、人目を気にせず名湯を心ゆくまで堪能できます。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>夕食は冬の味覚の王様・ズワイガニの会席プランや能登牛会席など多彩なプランを用意。家族旅行から記念日旅行まで幅広く愛されています。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥11,880</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1616%2F1616.html"
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

        {/* 宿カード 5: 山中温泉　お花見久兵衛 */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition duration-300">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 md:p-5 flex flex-wrap items-center justify-between gap-2">
            <span className="bg-amber-500 text-slate-900 font-black text-xs px-2.5 py-1 rounded-md">
              厳選第5位
            </span>
            <span className="text-xs md:text-sm font-medium text-amber-200">
              鶴仙渓を望む貸切露天風呂が人気！情緒あふれる大人の隠れ家名宿
            </span>
            <div className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-amber-300">4.21</span>
              <span className="text-slate-400">（クチコミ 3433件）</span>
            </div>
          </div>
          
          <div className="p-5 md:p-6 space-y-4">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/4853/4853.jpg"
                  alt="山中温泉　お花見久兵衛"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                  山中温泉　お花見久兵衛
                </h3>
                <div className="space-y-1 text-xs text-slate-500">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>石川県加賀市山中温泉下谷町ニ-138の1</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Train className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>【車】北陸道加賀ICから約20分。【電車】JR北陸本線加賀温泉駅より無料送迎有(約20分)</span>
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  <li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>山中温泉の渓谷沿いに佇み、あたたかなおもてなしと風情ある空間でリピーターの多い老舗温泉旅館です。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>清流を望む貸切露天風呂や大浴場で良質な名湯を満喫でき、プライベート感を大切にしたいカップルやご夫婦に選ばれています。</span></li><li className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-relaxed"><span className="text-amber-500 font-bold shrink-0">・</span><span>冬の夕食にはカニ料理や旬の地魚を盛り込んだ会席膳が並び、手頃な価格設定ながら上質な滞在を提供してくれます。</span></li>
                </ul>
                
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs text-slate-400 block">最安料金目安（2名1室利用時/1名あたり）</span>
                    <span className="text-2xl font-black text-rose-600">¥8,800</span>
                    <span className="text-xs text-slate-500 ml-1">〜（税込）</span>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4853%2F4853.html"
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
・新幹線：北陸新幹線「加賀温泉駅」下車。東京駅より「かがやき」で直通約2時間45分。金沢駅からは新幹線で約15分、福井駅からは約12分。加賀温泉駅からは各宿の専用無料送迎車で約10〜15分。
・電車（関西・中京方面）：JR大阪駅・京都駅より特急サンダーバードで敦賀駅乗り換え、北陸新幹線で加賀温泉駅まで約2時間10分。名古屋駅からは特急しらさぎ・新幹線経由で約2時間15分。
・飛行機：小松空港よりレンタカーまたはタクシーで約30分。空港リムジンバスで福井・金沢方面へもアクセス便利。
・車：北陸自動車道「加賀IC」または「片山津IC」より約15分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月中旬〜12月（11月6日のカニ漁解禁直後の最も活気ある時期。初雪が舞い始める北陸独特の風情ある雪見温泉を満喫できます）。
・気温の目安：日本海側気候のため雨や雪が降りやすく、11月は日中11〜15℃、朝晩は5〜8℃。12月に入ると日中でも6〜9℃、朝晩は1〜4℃前後まで冷え込みます。
・服装のポイント：防風・防水性のある厚手コートやダウンジャケット、折りたたみ傘（または雨雪兼用傘）を必ずご用意ください。温泉街の散策には滑りにくい防水シューズが適しています。
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
              <span>「加能ガニ」とはどのような蟹ですか？越前ガニとの違いは？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              「加能ガニ（かのうがに）」は、石川県の港（橋立港、金沢港など）で水揚げされるオスのズワイガニの最高級ブランド名です。青色のブランドタグが取り付けられます。福井県の「越前ガニ（黄色タグ）」と同じズワイガニですが、漁場が近く日帰り漁で水揚げされるため鮮度が極めて高いのが特徴です。またメスのズワイガニは「香箱ガニ（こうばこがに）」と呼ばれ、濃厚な内子と外子が絶品です。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>北大路魯山人と山代温泉「あらや滔々庵」の縁とは？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              大正4年（1915年）、当時まだ無名だった福田房次郎（後の北大路魯山人）が山代温泉を訪れ、あらや滔々庵の先代主人や初代須田菁華と出会いました。あらやの離れに逗留して多くの看板や額を彫り、九谷焼の作陶に開眼したことが、魯山人の芸術家・美食家としての原点となりました。館内には現在も魯山人の貴重な作品が展示されています。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-2 shadow-sm">
            <h4 className="text-sm md:text-base font-bold text-slate-900 flex items-start gap-2">
              <span className="text-rose-600 font-black shrink-0">Q.</span>
              <span>12月の加賀温泉郷へ車で行く場合、スタッドレスタイヤは必要ですか？</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-6">
              北陸自動車道や加賀温泉郷周辺は、12月に入ると強い寒波によって雪が積もったり路面が凍結することがあります。冬季にお車で訪れる場合は、必ずスタッドレスタイヤを装着してください。北陸新幹線の利用が最も安全でスムーズです。
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
