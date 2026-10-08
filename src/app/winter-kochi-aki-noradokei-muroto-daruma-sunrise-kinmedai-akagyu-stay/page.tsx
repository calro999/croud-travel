import { Metadata } from 'next';
import Link from 'next/link';
import { Star, MapPin, Calendar, Compass, ShieldCheck, Heart, Sparkles, ExternalLink, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '【土佐の小京都・安芸武家屋敷と室戸岬冬のだるま朝日】2026-2027年冬の高知・安芸＆室戸！脂の乗った室戸キンメダイと土佐あかうし名宿5選',
  description: '歴史薫る土佐の安芸「野良時計」と土居廓中武家屋敷、そして冬の室戸岬で出逢う奇跡の絶景「だるま朝日」！太平洋の雄大な黒潮が育む冬の極上「室戸キンメダイ煮付け」や幻の赤身肉「土佐あかうし」。黒潮の潮騒と太平洋一望露天風呂に癒やされる冬の東高知厳選名宿5選。',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-kochi-aki-noradokei-muroto-daruma-sunrise-kinmedai-akagyu-stay/',
  },
  openGraph: {
    title: '【土佐の小京都・安芸武家屋敷と室戸岬冬のだるま朝日】2026-2027年冬の高知・安芸＆室戸！脂の乗った室戸キンメダイと土佐あかうし名宿5選',
    description: '歴史薫る土佐の安芸「野良時計」と土居廓中武家屋敷、そして冬の室戸岬で出逢う奇跡の絶景「だるま朝日」！太平洋の雄大な黒潮が育む冬の極上「室戸キンメダイ煮付け」や幻の赤身肉「土佐あかうし」。黒潮の潮騒と太平洋一望露天風呂に癒やされる冬の東高知厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-kochi-aki-noradokei-muroto-daruma-sunrise-kinmedai-akagyu-stay/',
    siteName: '冬の日本厳選旅行ガイド',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/20497/20497.jpg',
        width: 1200,
        height: 630,
        alt: '【土佐の小京都・安芸武家屋敷と室戸岬冬のだるま朝日】2026-2027年冬の高知・安芸＆室戸！脂の乗った室戸キンメダイと土佐あかうし名宿5選',
      },
    ],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '【土佐の小京都・安芸武家屋敷と室戸岬冬のだるま朝日】2026-2027年冬の高知・安芸＆室戸！脂の乗った室戸キンメダイと土佐あかうし名宿5選',
    description: '歴史薫る土佐の安芸「野良時計」と土居廓中武家屋敷、そして冬の室戸岬で出逢う奇跡の絶景「だるま朝日」！太平洋の雄大な黒潮が育む冬の極上「室戸キンメダイ煮付け」や幻の赤身肉「土佐あかうし」。黒潮の潮騒と太平洋一望露天風呂に癒やされる冬の東高知厳選名宿5選。',
    images: ['https://img.travel.rakuten.co.jp/share/HOTEL/20497/20497.jpg'],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://croud-travel.pages.dev/winter-kochi-aki-noradokei-muroto-daruma-sunrise-kinmedai-akagyu-stay#article",
      "headline": "【土佐の小京都・安芸武家屋敷と室戸岬冬のだるま朝日】2026-2027年冬の高知・安芸＆室戸！脂の乗った室戸キンメダイと土佐あかうし名宿5選",
      "description": "歴史薫る土佐の安芸「野良時計」と土居廓中武家屋敷、そして冬の室戸岬で出逢う奇跡の絶景「だるま朝日」！太平洋の雄大な黒潮が育む冬の極上「室戸キンメダイ煮付け」や幻の赤身肉「土佐あかうし」。黒潮の潮騒と太平洋一望露天風呂に癒やされる冬の東高知厳選名宿5選。",
      "image": "https://img.travel.rakuten.co.jp/share/HOTEL/20497/20497.jpg",
      "datePublished": "2026-10-09T08:00:00+09:00",
      "dateModified": "2026-10-09T08:00:00+09:00",
      "author": {
        "@type": "Organization",
        "name": "旅宿クラウド 冬の日本厳選旅取材班",
        "url": "https://croud-travel.pages.dev"
      },
      "publisher": {
        "@type": "Organization",
        "name": "旅宿クラウド",
        "logo": {
          "@type": "ImageObject",
          "url": "https://croud-travel.pages.dev/ogp.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://croud-travel.pages.dev/winter-kochi-aki-noradokei-muroto-daruma-sunrise-kinmedai-akagyu-stay/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://croud-travel.pages.dev/winter-kochi-aki-noradokei-muroto-daruma-sunrise-kinmedai-akagyu-stay#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "ホーム",
          "item": "https://croud-travel.pages.dev/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "冬の厳選特集",
          "item": "https://croud-travel.pages.dev/features"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "高知県の宿・観光",
          "item": "https://croud-travel.pages.dev/prefectures/kochi"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "【土佐の小京都・安芸武家屋敷と室戸岬冬のだるま朝日】2026-2027年冬の高知・安芸＆室戸！脂の乗った室戸キンメダイと土佐あかうし名宿5選",
          "item": "https://croud-travel.pages.dev/winter-kochi-aki-noradokei-muroto-daruma-sunrise-kinmedai-akagyu-stay/"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://croud-travel.pages.dev/winter-kochi-aki-noradokei-muroto-daruma-sunrise-kinmedai-akagyu-stay#itemlist",
      "name": "安芸・室戸・東高知 冬の厳選名宿5選",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "ホテルＴＡＭＡＩ",
          "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20497%2F20497.html"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "ホテル　なはり",
          "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20702%2F20702.html"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "リゾートホテル海辺の果樹園",
          "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13721%2F13721.html"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "高知黒潮ホテル",
          "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15239%2F15239.html"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "サザンシティホテル",
          "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1807%2F1807.html"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://croud-travel.pages.dev/winter-kochi-aki-noradokei-muroto-daruma-sunrise-kinmedai-akagyu-stay#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "室戸岬の「だるま朝日」が見られる条件とベストな時間帯は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "11月中旬から1月下旬のよく晴れた冷え込んだ早朝（7:00前後）に現れます。海水温と大気の温度差が大きいこと、水平線上に雲がないことが条件です。出現率はシーズン中でも限られるため、見られたら幸運を呼ぶと言われています。"
          }
        },
        {
          "@type": "Question",
          "name": "野良時計の建物内は見学できますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "野良時計は個人の私有地・住宅であるため、建物内部の見学はできません。外観の時計櫓や美しい庭先を道路から鑑賞する形となります。周辺ののどかな田園風景や水路とともに風情をお楽しみください。"
          }
        },
        {
          "@type": "Question",
          "name": "「土佐あかうし」の特徴とおすすめの食べ方は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "土佐あかうし（褐毛和種高知系）は、高知県内でのみ飼育される希少な和牛です。黒毛和牛に比べて赤身の割合が多く、噛むほどにアミノ酸の濃厚な旨味が溢れ出します。ステーキやタタキ、ローストビーフで赤身本来の美味しさを味わうのが最適です。"
          }
        }
      ]
    }
  ]
}),
        }}
      />

      <article className="min-h-screen bg-stone-50/50 pb-20">
        {/* ヒーローヘッダー */}
        <header className="relative bg-gradient-to-br from-cyan-950 via-sky-950 to-stone-900 text-white py-14 sm:py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
            <img
              src="https://img.travel.rakuten.co.jp/share/HOTEL/20497/20497.jpg"
              alt="背景画像"
              className="w-full h-full object-cover blur-sm"
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <Link href="/" className="text-cyan-200 hover:text-white transition-colors">
                TOP
              </Link>
              <ChevronRight className="w-3 h-3 text-cyan-400" />
              <Link href="/features" className="text-cyan-200 hover:text-white transition-colors">
                冬の厳選特集
              </Link>
              <ChevronRight className="w-3 h-3 text-cyan-400" />
              <Link href="/prefectures/kochi" className="text-cyan-200 hover:text-white transition-colors">
                高知県
              </Link>
              <ChevronRight className="w-3 h-3 text-cyan-400" />
              <span className="text-cyan-100">安芸・室戸・東高知</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-cyan-900/80 border border-cyan-700/60 text-cyan-200 px-3 py-1 rounded-full text-xs font-semibold">
              <Calendar className="w-3.5 h-3.5 text-cyan-300" />
              <span>冬の旅（11月〜1月）厳選特集</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-sm">
              【土佐の小京都・安芸武家屋敷と室戸岬冬のだるま朝日】2026-2027年冬の高知・安芸＆室戸！脂の乗った室戸キンメダイと土佐あかうし名宿5選
            </h1>

            <p className="text-sm sm:text-base text-cyan-100/90 leading-relaxed max-w-3xl pt-2">
              歴史薫る土佐の安芸「野良時計」と土居廓中武家屋敷、そして冬の室戸岬で出逢う奇跡の絶景「だるま朝日」！太平洋の雄大な黒潮が育む冬の極上「室戸キンメダイ煮付け」や幻の赤身肉「土佐あかうし」。黒潮の潮騒と太平洋一望露天風呂に癒やされる冬の東高知厳選名宿5選。
            </p>
          </div>
        </header>

        {/* メインコンテンツエリア */}
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
          {/* イントロセクション */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                <Compass className="w-6 h-6 text-cyan-700" />
                <span>冬の安芸・室戸・東高知探訪：静寂と温もりに包まれる旅の魅力</span>
              </h2>
            </div>
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base whitespace-pre-line">
              土佐湾の東岸、黒潮洗う太平洋の水平線が弧を描く高知県・安芸＆室戸エリア。冬の土佐は全国屈指の日照時間を誇り、抜けるような青空と群青の海がどこまでも広がります。安芸市は、明治の偉人・岩崎弥太郎（三菱財閥創業者）の生家や、土佐藩郷士の格式を今に伝える「土居廓中（どいかくちゅう）」武家屋敷が残る歴史と文化の薫る町。町外れののどかな田園風景の中に佇む「野良時計（のらどけい）」は、明治時代に地元の地主・畠中源馬氏がアメリカ製の掛時計を独学で分解・研究し、歯車から分銅まで全パーツを手作りで組み上げた木造の櫓時計。国の登録有形文化財であり、かつて農作業に励む人々に正確な時を知らせて愛された温もりの音色が、冬の澄んだ空気に今も優しく響き渡るかのようです。安芸から国道55号線を東へ、黒潮が激しく打ち寄せる室戸岬へと向かうシーサイドドライブは、冬ならではの奇跡の情景に出逢う道。海面と冷え込んだ大気との寒暖差によって、日の出の太陽がダルマのように二重に見える幻想的な現象「だるま朝日」は、11月から1月にかけての冬期にだけ現れる幸運の絶景です。そして冬の東高知の食卓を彩るのは、室戸の深海から水揚げされる脂の乗った「室戸キンメダイ」。甘辛い秘伝のタレでふっくら煮付けた金目鯛の煮付けや丼は、口の中でとろけるような極上の美味。さらに幻の和牛と呼ばれる赤身の旨味が凝縮された「土佐あかうし」のステーキなど、心身を震わせる冬の土佐グルメが待っています。太陽と海の生命力に満ちた冬の東高知の旅をご堪能ください。
            </p>

            <div className="space-y-4 pt-4 border-t border-stone-100">
              <h3 className="text-lg font-bold text-stone-900">
                この冬、安芸・室戸・東高知を訪れるべき3つの理由
              </h3>
              <div className="grid grid-cols-1 gap-4">

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-800 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  1
                </span>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  手作り時計の温もりと土佐郷士の歴史！「野良時計」と土居廓中武家屋敷散策
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                明治の手作り時計職人魂が息づく野良時計と、武家屋敷の玉石垣やウバメガシの生垣が美しい土居廓中。岩崎弥太郎生家の星型の鬼瓦など、日本の近代化の礎を築いた土佐の風土と歴史ロマンを冬の静寂の中で体感できます。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-800 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  2
                </span>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  奇跡の冬絶景！室戸岬の「だるま朝日」と世界ジオパークのダイナミックな海岸美
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                11月〜1月の冷え込んだ晴天の朝にだけ現れる幻想的な「だるま朝日」。地球の息吹を体感できる室戸ユネスコ世界ジオパークの隆起海岸や弘法大師空海修行の「御厨人窟（みくろど）」など、神秘のパワースポットが連続します。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-800 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  3
                </span>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  深海の赤いダイヤ「室戸キンメダイ」と幻の「土佐あかうし」！黒潮の恵みと絶景温泉
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                脂の乗りが抜群の冬の室戸キンメダイの煮付けや丼、赤身とサシのバランスが絶妙な土佐あかうし。太平洋の潮騒を間近に聴く展望露天風呂や海洋深層水の湯に浸かり、土佐の豪快な美味に舌鼓を打つ極上の冬旅が叶います。
              </p>
            </div>
              </div>
            </div>

            {/* アクセス・気候・おすすめ服装 */}
            <div className="bg-cyan-50/60 border border-cyan-100 rounded-xl p-5 space-y-3 text-xs sm:text-sm text-stone-700">
              <h4 className="font-bold text-cyan-950 flex items-center gap-1.5 text-sm sm:text-base">
                <ShieldCheck className="w-4 h-4 text-cyan-700" />
                <span>アクセス・気候・おすすめの服装ガイド</span>
              </h4>
              <pre className="font-sans whitespace-pre-line leading-relaxed text-stone-600 text-xs sm:text-sm">
                【エリアへのアクセス】
・飛行機・高知龍馬空港から：高知龍馬空港より車・レンタカーで国道55号線を経由し、安芸市街（野良時計）まで約35分。室戸岬までは約1時間40分。
・電車・土佐くろしお鉄道：JR高知駅より土讃線・ごめん・なはり線直通列車（オープンデッキ車両など）で安芸駅まで約40分〜1時間。安芸駅より野良時計へはタクシーで約5分、レンタサイクルで約15分。
・バス：安芸駅より高知東部交通バス（室戸岬行き）で室戸岬まで約1時間25分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月下旬〜1月下旬（だるま朝日の出現期、室戸キンメダイの旬、冬晴れの太平洋海岸線ドライブ）。
・気温の目安：四国南部のため日中は11〜14℃と日差しがあれば温かいですが、朝晩や室戸岬の先端では強い海風が吹き込み体感温度は0〜3℃近くまで下がります。
・服装のポイント：野良時計や武家屋敷の散策には歩きやすい靴を。だるま朝日の見学（早朝6:30〜7:15頃）や室戸岬散策には、しっかりとした防風防寒ダウンジャケット、手袋、マフラーを必ず着用してください。
              </pre>
            </div>
          </section>

          {/* Wikipedia 近隣観光名所セクション */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-bold text-cyan-700 tracking-wider uppercase">Wikipedia Spot Archive</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2 mt-1">
                <Heart className="w-6 h-6 text-rose-500" />
                <span>近隣名所アーカイブ：土佐の小京都・野良時計と土居廓中武家屋敷（手作り大時計の響きと室戸岬だるま朝日）</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Noradokei_02.JPG/1280px-Noradokei_02.JPG?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="土佐の小京都・野良時計と土居廓中武家屋敷（手作り大時計の響きと室戸岬だるま朝日）"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="font-bold text-stone-900 text-base">
                  【土佐の小京都・野良時計と土居廓中武家屋敷（手作り大時計の響きと室戸岬だるま朝日）の見どころと歴史】
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  野良時計（のらどけい）は、高知県安芸市にある時計台である。明治時代に作製され、その地の地主宅に据えられた。安芸平野のほぼ中央に位置し田園風景にたたずむ姿は安芸市の観光名所の一つとなっている。国の登録有形文化財。
                </p>
                <div className="pt-2 text-xs text-stone-700">
                  <a
                    href="https://ja.wikipedia.org/wiki/%E9%87%8E%E8%89%AF%E6%99%82%E8%A8%88"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 text-cyan-700 hover:text-cyan-900 underline"
                  >
                    <span>出典：Wikipedia公式『野良時計』詳細情報を見る</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 厳選名宿5選 */}
          <section className="space-y-8">
            <div className="border-b border-stone-200 pb-4">
              <span className="text-xs font-bold text-cyan-700 tracking-wider uppercase">Rakuten Travel Selected</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
                安芸・室戸・東高知 厳選の温泉＆名宿5選
              </h2>
              <p className="text-sm text-stone-600 mt-2">
                楽天トラベルの最新口コミ評価・立地・冬の特別会席プランを徹底精査したおすすめ宿です。
              </p>
            </div>

            <div className="space-y-8">

            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4">
                  <div className="space-y-1">
                    <span className="inline-block bg-cyan-100 text-cyan-900 text-xs px-2.5 py-1 rounded-full font-semibold">
                      第1位 厳選名宿
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                      ホテルＴＡＭＡＩ
                    </h3>
                    <p className="text-xs text-cyan-800 font-medium">安芸市中心部に建つランドマークホテル！最上階展望レストランと快適アクセス</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-amber-900">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-sm">3.09</span>
                    <span className="text-xs text-stone-700 font-medium">(502件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/20497/20497.jpg"
                      alt="ホテルＴＡＭＡＩ"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                    <li key="0" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">野良時計や土居廓中武家屋敷、岩崎弥太郎生家まで車で数分の絶好の観光ロケーション</span></li>
                    <li key="1" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">最上階のレストランから太平洋と安芸の街並みを一望する心地よいパノラマビュー</span></li>
                    <li key="2" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">土佐の鰹のタタキや安芸名物のちりめんじゃこ、土佐あかうしを取り入れた郷土会席プラン</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      安芸市の中心部に位置し、東高知観光の拠点として高い利便性を誇るシティホテル。客室はシンプルで機能的、ビジネスや一人旅からファミリーまで快適に過ごせます。最上階のレストランからはどこまでも青い土佐湾の海原を見渡せ、夕暮れ時の水平線は格別の美しさ。夕食には本場土佐のカツオのタタキや、釜揚げちりめん丼、土佐あかうしの陶板焼きなど、郷土色豊かな味覚を心ゆくまで満喫できます。
                    </p>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-4 text-xs text-amber-950/90 leading-relaxed italic">
                  「立体駐車場の段差でバンパーを擦り残念立体駐車場上から下りる際、入り口の段差でフロントバンパー擦れ傷になった。非常に残念です。ノーマルの高さのヴォクシークチコミの詳細はこちらから　htt…　2026-09-23 06:46:43投稿 つづきはこちら」
                </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>高知県 安芸市矢ノ丸1-6</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">ごめん・なはり線「安芸駅」より徒歩５分／高知空港よりお車で30分</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥7,700〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20497%2F20497.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm shrink-0"
                  >
                    <span>空室確認・宿泊プランを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4">
                  <div className="space-y-1">
                    <span className="inline-block bg-cyan-100 text-cyan-900 text-xs px-2.5 py-1 rounded-full font-semibold">
                      第2位 厳選名宿
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                      ホテル　なはり
                    </h3>
                    <p className="text-xs text-cyan-800 font-medium">室戸キンメダイの料理が自慢の海辺の宿！深層水風呂と新鮮魚介フルコース</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-amber-900">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-sm">4.02</span>
                    <span className="text-xs text-stone-700 font-medium">(613件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/20702/20702.jpg"
                      alt="ホテル　なはり"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                    <li key="0" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">奈半利駅から徒歩圏内！室戸岬と安芸の中間に位置し、東高知周遊に最適なアクセス</span></li>
                    <li key="1" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">室戸海洋深層水を取り入れた大浴場で、ミネラルたっぷりの癒やしの湯浴みを体験</span></li>
                    <li key="2" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">名物「金目鯛の煮付け」や刺身盛り合わせなど、料理長が腕を振るう海鮮料理が大好評</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      ごめん・なはり線の終着駅・奈半利駅の近くに位置する、食通に知られる名物ホテル。自慢はなんといっても東高知屈指の海鮮料理。冬の室戸沖で獲れた極上キンメダイを秘伝の煮汁でじっくり炊き上げた煮付けは、ふっくらとした身に上品な脂が絡み合う絶品です。大浴場には室戸海洋深層水が導入されており、身体の芯から温まります。室戸岬のだるま朝日撮影への早朝出発にも便利です。
                    </p>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-4 text-xs text-amber-950/90 leading-relaxed italic">
                  「併設レストランと桧の露天風呂でゆったり夕飯は近くの居酒屋、翌朝は古民家のモーニングが気になり、素泊まりで予約。ところが夕は天候が悪くホテル併設のストランを利用しました。通常のレストランのようで、こ…　2026-10-03 14:17:37投稿 つづきはこちら」
                </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>高知県 安芸郡奈半利町乙593-1</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">御免奈半利線　奈半利駅／高速南国ＩＣより約１時間１５分／高知空港より約５０分／バス高知東部交通「法恩寺通」より徒歩３分</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥7,300〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20702%2F20702.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm shrink-0"
                  >
                    <span>空室確認・宿泊プランを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4">
                  <div className="space-y-1">
                    <span className="inline-block bg-cyan-100 text-cyan-900 text-xs px-2.5 py-1 rounded-full font-semibold">
                      第3位 厳選名宿
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                      リゾートホテル海辺の果樹園
                    </h3>
                    <p className="text-xs text-cyan-800 font-medium">太平洋を一望する南欧風丘の上リゾート！露天風呂と自家製果樹の贅沢ステイ</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-amber-900">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-sm">4.07</span>
                    <span className="text-xs text-stone-700 font-medium">(677件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/13721/13721.jpg"
                      alt="リゾートホテル海辺の果樹園"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                    <li key="0" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">太平洋を見下ろす高台に建ち、全室バルコニー付きの開放的なオーシャンビュー客室</span></li>
                    <li key="1" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">黒潮の海風を感じる露天風呂と大浴場を完備し、満天の星空を眺めながら極上の湯浴み</span></li>
                    <li key="2" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">ホテル内の果樹園で育った柑橘や新鮮な魚介・土佐あかうしを堪能する特選ディナー</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      夜須町の小高い丘の上に広がる、南欧プロヴァンスの風情が漂うリゾートホテル。眼下に広がる雄大な太平洋のパノラマは圧巻で、冬の澄んだ大気の中で夕景や星空がドラマチックに輝きます。客室は広々とした設計で、バルコニーから海風を感じながらのんびり寛げます。夕食には土佐の海の幸や土佐あかうし、自家果樹園で採れたフルーツのデザートが並び、上質なリゾートステイを演出します。
                    </p>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-4 text-xs text-amber-950/90 leading-relaxed italic">
                  「スタンプラリーと卓球で子供が大満足子どものスタンプラリーが楽しめて良かったです。卓球も汗だくで子どもが楽しんでました。クチコミの詳細はこちらから　https://review.travel…　2026-09-30 08:40:31投稿 つづきはこちら」
                </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>高知県 香南市夜須町手結山506-1</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">高知空港より車１５分／高知東部自動車道高知龍馬空港ICから１５分／夜須駅より車で3分</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥6,400〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13721%2F13721.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm shrink-0"
                  >
                    <span>空室確認・宿泊プランを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4">
                  <div className="space-y-1">
                    <span className="inline-block bg-cyan-100 text-cyan-900 text-xs px-2.5 py-1 rounded-full font-semibold">
                      第4位 厳選名宿
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                      高知黒潮ホテル
                    </h3>
                    <p className="text-xs text-cyan-800 font-medium">天然温泉「龍馬の湯」を併設！太平洋に面した本格温泉リゾートホテル</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-amber-900">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-sm">4.10</span>
                    <span className="text-xs text-stone-700 font-medium">(967件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/15239/15239.jpg"
                      alt="高知黒潮ホテル"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                    <li key="0" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">地下1300mから湧き出る自家源泉の天然温泉「黒潮温泉 龍馬の湯」で至福の湯巡り</span></li>
                    <li key="1" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">露天風呂やサウナ・歩行浴プールを備えた充実の温浴施設で冬の寒さを癒やす</span></li>
                    <li key="2" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">高知の新鮮な鰹の塩タタキや土佐の冬の幸を味わえるバラエティ豊かなお食事処</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      香南市野市町に位置し、本格的な天然温泉施設「龍馬の湯」を併設した人気の温泉リゾートホテル。温泉は含弱放射能-ナトリウム-塩化物温泉で、身体がぽかぽかと温まり湯冷めしにくいのが特徴です。広々とした露天風呂からは冬の澄んだ星空を眺められ、サウナ施設も充実。安芸の野良時計観光へ車で約25分、高知市内へも好アクセスで、温泉と観光をバランスよく楽しみたい方に最適です。
                    </p>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-4 text-xs text-amber-950/90 leading-relaxed italic">
                  「温泉と焼肉は最高だが駅からの距離が難点温泉(それもph9以上のアルカリ泉、さらにサウナも)や焼肉店が併設されていたので、ただ宿泊するよりも楽しむことができた。一方、鉄道駅から10分以上も歩く必…　2026-10-01 08:03:11投稿 つづきはこちら」
                </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>高知県 香南市野市町東野1630</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">高知龍馬空港より車で10分  ごめん・なはり線野市駅より徒歩10分</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥7,600〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15239%2F15239.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm shrink-0"
                  >
                    <span>空室確認・宿泊プランを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4">
                  <div className="space-y-1">
                    <span className="inline-block bg-cyan-100 text-cyan-900 text-xs px-2.5 py-1 rounded-full font-semibold">
                      第5位 厳選名宿
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                      サザンシティホテル
                    </h3>
                    <p className="text-xs text-cyan-800 font-medium">高知龍馬空港から至近の機能的シティホテル！大浴場完備と充実の朝食バイキング</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-amber-900">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-sm">4.38</span>
                    <span className="text-xs text-stone-700 font-medium">(1910件)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 relative rounded-xl overflow-hidden shadow-inner aspect-[4/3]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/1807/1807.jpg"
                      alt="サザンシティホテル"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-4">
                    <ul className="space-y-2">
                    <li key="0" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">高知龍馬空港や南国ICから車で約10〜15分！東高知ドライブのゲートウェイに最適な立地</span></li>
                    <li key="1" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">旅の疲れをゆったり癒やせる男女別大浴場を完備し、足を伸ばしてリラックス</span></li>
                    <li key="2" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">地元高知の食材や出来立ての卵料理が並ぶ種類豊富な朝食バイキングで元気な一日をスタート</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      南国市に位置し、高知空港からのアクセスに優れたシティホテル。広々とした駐車場を完備し、レンタカーを利用した安芸・室戸ドライブの拠点として極めて便利です。館内には旅の疲労をほぐす大浴場が備わり、清潔感あふれる客室で快眠をサポート。周辺には名物レストランも多く、初日は空港から直行して宿泊し、翌朝早くから安芸の野良時計や室戸岬を目指すアクティブな旅行者にぴったりです。
                    </p>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-4 text-xs text-amber-950/90 leading-relaxed italic">
                  「広く綺麗で大満足の空間広く綺麗で大満足です。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/1807?reviewI…　2026-10-03 15:58:25投稿 つづきはこちら」
                </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>高知県 南国市明見933</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">高知市内より車で15分☆ 高知空港・南国インターチェンジより車で10分☆</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥5,400〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1807%2F1807.html"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-sm shrink-0"
                  >
                    <span>空室確認・宿泊プランを見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            </div>
          </section>

          {/* 楽天ふるさと納税 案内 */}
          <section className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-300/60 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-amber-600" />
              <h3 className="text-lg sm:text-xl font-bold text-amber-950">
                楽天ふるさと納税で賢くお得に泊まる方法
              </h3>
            </div>
            <p className="text-sm text-amber-950/90 leading-relaxed">
              楽天ふるさと納税を活用すると、寄付金額に応じた宿泊クーポンが返礼品として付与され、実質自己負担2,000円で憧れの高級温泉旅館や特別会席プランに宿泊できます。
              すでに予約済みの宿泊であっても「あとから割引」が適用可能なため、旅行の計画に合わせて手軽に節税とお得なステイを両立できます。
            </p>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-2.5 rounded-xl shadow-sm text-sm transition-colors"
              >
                <span>楽天トラベル×ふるさと納税 対象宿一覧・クーポン取得はこちら</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* FAQ セクション */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-bold text-cyan-700 tracking-wider uppercase">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                冬の安芸・室戸・東高知旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-4">

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>室戸岬の「だるま朝日」が見られる条件とベストな時間帯は？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>11月中旬から1月下旬のよく晴れた冷え込んだ早朝（7:00前後）に現れます。海水温と大気の温度差が大きいこと、水平線上に雲がないことが条件です。出現率はシーズン中でも限られるため、見られたら幸運を呼ぶと言われています。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>野良時計の建物内は見学できますか？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>野良時計は個人の私有地・住宅であるため、建物内部の見学はできません。外観の時計櫓や美しい庭先を道路から鑑賞する形となります。周辺ののどかな田園風景や水路とともに風情をお楽しみください。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>「土佐あかうし」の特徴とおすすめの食べ方は？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>土佐あかうし（褐毛和種高知系）は、高知県内でのみ飼育される希少な和牛です。黒毛和牛に比べて赤身の割合が多く、噛むほどにアミノ酸の濃厚な旨味が溢れ出します。ステーキやタタキ、ローストビーフで赤身本来の美味しさを味わうのが最適です。
              </p>
            </div>
            </div>
          </section>

          {/* 関連特集リンク */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-b border-stone-100 pb-3">
              あわせて読みたい関連特集
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li>
                <Link href="/prefectures/kochi" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>高知県のおすすめ観光名所＆温泉宿一覧</span>
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>全国の季節・目的別旅行特集一覧</span>
                </Link>
              </li>

            <li>
              <Link href="/winter-kochi-muroto-daruma-sunrise-kinmedai-deepsea-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>【室戸岬・だるま朝日と金目鯛】冬の海洋深層水温泉名宿</span>
              </Link>
            </li>

            <li>
              <Link href="/winter-kochi-katsurahama-ryoma-sunrise-chikurinji-hatsumode-tataki-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>【桂浜・坂本龍馬像初日の出と竹林寺初詣】冬の高知名宿</span>
              </Link>
            </li>

            <li>
              <Link href="/winter-kochi-city-tosa-kue-katsuo-akagyu-castle-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>【高知城・天然クエ鍋と土佐あかうし】冬の高知市街美食名宿</span>
              </Link>
            </li>

            <li>
              <Link href="/winter-kochi-niyodogawa-niyodoblue-nakatsu-tosa-akagyu-onsen-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>【仁淀川・冬の奇跡仁淀ブルー】渓流温泉と土佐あかうし名宿</span>
              </Link>
            </li>
              <li>
                <Link href="/furusato-tax-luxury-hotspring-ryokan-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>実質2,000円で泊まる名湯・高級温泉旅館ガイド</span>
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-local-gourmet-inn-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>ご当地グルメを堪能する全国美食旅特集</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
