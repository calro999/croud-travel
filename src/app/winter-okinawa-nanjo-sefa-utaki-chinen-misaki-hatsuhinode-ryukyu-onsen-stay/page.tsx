import { Metadata } from 'next';
import Link from 'next/link';
import { Star, MapPin, Calendar, Compass, ShieldCheck, Heart, Sparkles, ExternalLink, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '琉球最高の聖地・斎場御嶽新春祈願と知念岬初日の出：2026-2027年冬の沖縄・南城！美ら海絶景と琉球温泉・あぐー豚名宿5選',
  description: '琉球王国最高の聖地・世界遺産「斎場御嶽」の新春開運祈願と、神の島・久高島を仰ぐ知念岬の感動初日の出！冬でも平均気温18℃前後の心地よい南城市。太平洋を望む絶景天然温泉やあぐー豚しゃぶしゃぶ・近海魚料理に癒やされる冬の南沖縄厳選リゾート名宿5選。',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-okinawa-nanjo-sefa-utaki-chinen-misaki-hatsuhinode-ryukyu-onsen-stay/',
  },
  openGraph: {
    title: '琉球最高の聖地・斎場御嶽新春祈願と知念岬初日の出：2026-2027年冬の沖縄・南城！美ら海絶景と琉球温泉・あぐー豚名宿5選',
    description: '琉球王国最高の聖地・世界遺産「斎場御嶽」の新春開運祈願と、神の島・久高島を仰ぐ知念岬の感動初日の出！冬でも平均気温18℃前後の心地よい南城市。太平洋を望む絶景天然温泉やあぐー豚しゃぶしゃぶ・近海魚料理に癒やされる冬の南沖縄厳選リゾート名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-okinawa-nanjo-sefa-utaki-chinen-misaki-hatsuhinode-ryukyu-onsen-stay/',
    siteName: '冬の日本厳選旅行ガイド',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/187553/187553.jpg',
        width: 1200,
        height: 630,
        alt: '【琉球最高の聖地・斎場御嶽新春祈願と知念岬初日の出】2026-2027年冬の沖縄・南城！美ら海絶景と琉球温泉・あぐー豚名宿5選',
      },
    ],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '琉球最高の聖地・斎場御嶽新春祈願と知念岬初日の出：2026-2027年冬の沖縄・南城！美ら海絶景と琉球温泉・あぐー豚名宿5選',
    description: '琉球王国最高の聖地・世界遺産「斎場御嶽」の新春開運祈願と、神の島・久高島を仰ぐ知念岬の感動初日の出！冬でも平均気温18℃前後の心地よい南城市。太平洋を望む絶景天然温泉やあぐー豚しゃぶしゃぶ・近海魚料理に癒やされる冬の南沖縄厳選リゾート名宿5選。',
    images: ['https://img.travel.rakuten.co.jp/share/HOTEL/187553/187553.jpg'],
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
      "@id": "https://croud-travel.pages.dev/winter-okinawa-nanjo-sefa-utaki-chinen-misaki-hatsuhinode-ryukyu-onsen-stay#article",
      "headline": "【琉球最高の聖地・斎場御嶽新春祈願と知念岬初日の出】2026-2027年冬の沖縄・南城！美ら海絶景と琉球温泉・あぐー豚名宿5選",
      "description": "琉球王国最高の聖地・世界遺産「斎場御嶽」の新春開運祈願と、神の島・久高島を仰ぐ知念岬の感動初日の出！冬でも平均気温18℃前後の心地よい南城市。太平洋を望む絶景天然温泉やあぐー豚しゃぶしゃぶ・近海魚料理に癒やされる冬の南沖縄厳選リゾート名宿5選。",
      "image": "https://img.travel.rakuten.co.jp/share/HOTEL/187553/187553.jpg",
      "datePublished": "T08:00:00+09:00",
      "dateModified": "T08:00:00+09:00",
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
        "@id": "https://croud-travel.pages.dev/winter-okinawa-nanjo-sefa-utaki-chinen-misaki-hatsuhinode-ryukyu-onsen-stay/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://croud-travel.pages.dev/winter-okinawa-nanjo-sefa-utaki-chinen-misaki-hatsuhinode-ryukyu-onsen-stay#breadcrumb",
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
          "name": "沖縄県の宿・観光",
          "item": "https://croud-travel.pages.dev/prefectures/okinawa"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "【琉球最高の聖地・斎場御嶽新春祈願と知念岬初日の出】2026-2027年冬の沖縄・南城！美ら海絶景と琉球温泉・あぐー豚名宿5選",
          "item": "https://croud-travel.pages.dev/winter-okinawa-nanjo-sefa-utaki-chinen-misaki-hatsuhinode-ryukyu-onsen-stay/"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://croud-travel.pages.dev/winter-okinawa-nanjo-sefa-utaki-chinen-misaki-hatsuhinode-ryukyu-onsen-stay#itemlist",
      "name": "南城・知念岬・南部海岸 冬の厳選名宿5選",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "百名伽藍",
          "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187553%2F187553.html"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "ウェルネスリゾート沖縄　ユインチホテル南城",
          "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F74545%2F74545.html"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "琉球温泉　瀬長島ホテル",
          "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139989%2F139989.html"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "サザンビーチホテル&amp;リゾート沖縄",
          "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76401%2F76401.html"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "ホテルグランビューガーデン沖縄",
          "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75371%2F75371.html"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://croud-travel.pages.dev/winter-okinawa-nanjo-sefa-utaki-chinen-misaki-hatsuhinode-ryukyu-onsen-stay#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "冬の沖縄旅行の最大の魅力は何ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "冬の沖縄は台風の心配がほぼゼロで、湿度が低く非常に過ごしやすいのが大きな魅力です。真夏の強い日差しに邪魔されることなく世界遺産や自然散策をじっくり満喫でき、航空券やリゾートホテルの価格も落ち着くため、上質な滞在をリーズナブルに楽しめます。"
          }
        },
        {
          "@type": "Question",
          "name": "斎場御嶽を参拝する際のマナーや注意点はありますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "斎場御嶽は現在も地元の方々にとって極めて神聖な祈りの場（拝所）です。大声での会話や岩肌への落書き、立ち入り禁止区域への侵入は固く禁じられています。露出の多い服装を避け、敬虔な気持ちで静かに歩きましょう。"
          }
        },
        {
          "@type": "Question",
          "name": "知念岬で初日の出を見る場合のポイントは？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "元旦の日の出時刻は例年7:15頃です。周辺の駐車場は6:00過ぎから混み合いますので、日の出の45分前には到着しておくことをおすすめします。海風が冷たいため防寒具をしっかり着用してください。"
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
              src="https://img.travel.rakuten.co.jp/share/HOTEL/187553/187553.jpg"
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
              <Link href="/prefectures/okinawa" className="text-cyan-200 hover:text-white transition-colors">
                沖縄県
              </Link>
              <ChevronRight className="w-3 h-3 text-cyan-400" />
              <span className="text-cyan-100">南城・知念岬・南部海岸</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-cyan-900/80 border border-cyan-700/60 text-cyan-200 px-3 py-1 rounded-full text-xs font-semibold">
              <Calendar className="w-3.5 h-3.5 text-cyan-300" />
              <span>冬の旅（11月〜1月）厳選特集</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-sm">「琉球最高の聖地・斎場御嶽新春祈願と知念岬初日の出」2026-2027年冬の沖縄・南城！美ら海絶景と琉球温泉・あぐー豚名宿5選</h1>

            <p className="text-sm sm:text-base text-cyan-100/90 leading-relaxed max-w-3xl pt-2">
              琉球王国最高の聖地・世界遺産「斎場御嶽」の新春開運祈願と、神の島・久高島を仰ぐ知念岬の感動初日の出！冬でも平均気温18℃前後の心地よい南城市。太平洋を望む絶景天然温泉やあぐー豚しゃぶしゃぶ・近海魚料理に癒やされる冬の南沖縄厳選リゾート名宿5選。
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
                <span>冬の南城・知念岬・南部海岸探訪：静寂と温もりに包まれる旅の魅力</span>
              </h2>
            </div>
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base whitespace-pre-line">
              冬の沖縄本島南部・南城市は、夏の強い日差しや台風の喧騒が過ぎ去り、一年の中で最も清らかで穏やかな空気に包まれる季節を迎えます。最高気温は18度から21度前後と、本州の秋晴れのような過ごしやすい気候が続き、静寂の中で自らの内面と向き合う旅に最適な環境が整います。この南城の杜に厳かに佇む「斎場御嶽（せーふぁうたき）」は、琉球開闢の祖神・アマミキヨが創成したと伝わる琉球王国最高の聖域。巨岩が互いを支え合う「三庫理（さんぐーい）」の崇高な空間を抜けると、コバルトブルーの海原の先に神々の住まう東方の聖地「久高島」が神々しく浮かび上がります。新春には新たな一年の平穏と感謝を捧げる祈りの場として、深い静寂が満ち渡ります。そこから車でわずか数分の「知念岬公園」は、太平洋を250度見渡す大パノラマが広がり、元旦には水平線から昇る感動の初日の出を拝む絶好の名所。さらに冬の南城・南部エリアは、地下深くから湧出する塩分とミネラルを豊富に含んだ希少な天然温泉「琉球温泉」や、甘み豊かなあぐー豚の出汁しゃぶしゃぶ、冬に身が締まる近海の夜光貝やイラブチャーなど、滋味豊かな島の手料理が旅人を温かく迎えてくれます。冬だからこそ味わえる澄み切った海風と神聖なる杜の息吹に包まれる、贅沢な南沖縄滞在をお届けします。
            </p>

            <div className="space-y-4 pt-4 border-t border-stone-100">
              <h3 className="text-lg font-bold text-stone-900">
                この冬、南城・知念岬・南部海岸を訪れるべき3つの理由
              </h3>
              <div className="grid grid-cols-1 gap-4">

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-800 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  1
                </span>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  琉球王国最高の聖地で新春開運祈願！世界遺産「斎場御嶽」と神の島・久高島遥拝
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                木々の木漏れ日と静寂が支配する斎場御嶽の神域。巨大な二つの巨岩が三角形を描く三庫理の空間は圧倒的な神聖さを誇り、その奥から望む久高島のシルエットは新春の新たな門出にふさわしい清廉な活力を与えてくれます。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-800 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  2
                </span>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  太平洋を望む大パノラマ！「知念岬」の絶景初日の出と冬の爽快な美ら海ドライブ
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                知念半島の突端に位置する知念岬公園。冬の澄み切った大気の中、水平線から昇る朝日の美しさは沖縄屈指を誇ります。ニライカナイ橋から見下ろす紺碧のグラデーションの海を巡る冬のドライブは、混雑もなく快適そのものです。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-cyan-800 text-white font-bold flex items-center justify-center text-sm shrink-0">
                  3
                </span>
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  太古の海水が育む琥珀色の「琉球天然温泉」と冬の極上「あぐー豚しゃぶしゃぶ」
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-11">
                沖縄では珍しい地下深層から湧出する高張性天然温泉。身体の芯までぽかぽかと温まる美肌の湯に浸かり、夜は脂の融点が低くとろける旨味のあぐー豚や地元島野菜の鍋料理を堪能する至福の時間を過ごせます。
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
・飛行機・那覇空港から：那覇空港より車・レンタカーで那覇空港自動車道（南風原南IC経由）を利用し、斎場御嶽・知念岬まで約45〜50分。
・路線バス：那覇バスターミナルより東陽バス（38番志喜屋線など）に乗車、「斎場御嶽入口」バス停下車、徒歩約5〜10分（所要約1時間）。
・タクシー：那覇市内中心部（国際通り周辺）から南城市知念エリアまで約40分（約5,000〜6,500円）。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月〜1月（真夏の酷暑が和らぎ、空気が澄んで視界が開ける散策・初日の出・初詣のベストシーズン）。
・気温の目安：平均気温18〜20℃前後。日中は長袖シャツや薄手のジャケットで快適に過ごせますが、海沿いでは北風が強く吹くため、朝晩や岬周辺では防風性のあるウィンドブレーカーや薄手コートがあると重宝します。
・服装のポイント：斎場御嶽の参道は石畳や自然の岩肌が多く、雨露で滑りやすいため、ヒールのない歩きやすいスニーカーの着用が必須です。
              </pre>
            </div>
          </section>

          {/* Wikipedia 近隣観光名所セクション */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-bold text-cyan-700 tracking-wider uppercase">Wikipedia Spot Archive</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2 mt-1">
                <Heart className="w-6 h-6 text-rose-500" />
                <span>近隣名所アーカイブ：世界遺産・斎場御嶽（琉球王国最高の聖地・新春開運祈願と知念岬初日の出）</span>
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9]">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Sangui_%28Triangle_Rock%29_of_Sefa-Utaki.jpg/1280px-Sangui_%28Triangle_Rock%29_of_Sefa-Utaki.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="世界遺産・斎場御嶽（琉球王国最高の聖地・新春開運祈願と知念岬初日の出）"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="font-bold text-stone-900 text-base">
                  【世界遺産・斎場御嶽（琉球王国最高の聖地・新春開運祈願と知念岬初日の出）の見どころと歴史】
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  斎場御嶽（せーふぁーうたき／サイハノうたき）は沖縄県南城市知念にある史跡。15世紀-16世紀の琉球王国・尚真王時代の御嶽であるとされる。「せーふぁ」は「最高位」を意味し、「斎場御嶽」は「最高の御嶽」ほどの意味となり、これは通称である。正式な神名は「君ガ嶽、主ガ嶽ノイビ」という。
                </p>
                <div className="pt-2 text-xs text-stone-700">
                  <a
                    href="https://ja.wikipedia.org/wiki/%E6%96%8E%E5%A0%B4%E5%BE%A1%E5%B6%BD"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 text-cyan-700 hover:text-cyan-900 underline"
                  >
                    <span>出典：Wikipedia公式『斎場御嶽』詳細情報を見る</span>
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
                南城・知念岬・南部海岸 厳選の温泉＆名宿5選
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
                      百名伽藍
                    </h3>
                    <p className="text-xs text-cyan-800 font-medium">南城の崖上に佇む全室オーシャンビューの最高峰琉球リゾート・露天風呂と極上懐石</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-amber-900">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-sm">4.58</span>
                    <span className="text-xs text-stone-700 font-medium">(30件)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/187553/187553.jpg"
                      alt="百名伽藍"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full space-y-4">
                    <ul className="space-y-2">
                    <li key="0" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">赤瓦と琉球石灰岩が織りなす回廊建築！全室から神秘の美ら海を一望する圧倒的プライベート空間</span></li>
                    <li key="1" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">客室ごとに趣の異なる専用方丈庵（展望露天風呂）を完備し、波の音を聴きながら湯浴みを満喫</span></li>
                    <li key="2" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">沖縄の厳選食材と和の技法が美しく融合した琉球会席！あぐー豚や近海魚の滋味あふれる料理</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      南城市玉城の海岸沿い、神原海岸の崖の上に悠然と佇む大人のための隠れ家リゾート。回廊を吹き抜ける心地よい海風と巨木ガジュマルの緑が心を解きほぐします。全室が広々としたオーシャンフロントで、最上階の専用露天風呂「方丈庵」からは朝夕に表情を変える紺碧の海を独り占め。斎場御嶽への朝の参拝にも車で十数分と好立地で、静寂と極上の美食を愛する旅人に支持されています。
                    </p>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-4 text-xs text-amber-950/90 leading-relaxed italic">
                  「貸切風呂から眺める海の景色が最高貸切風呂に入りながらの海の景色が最高でした。」
                </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>沖縄県 南城市玉城字百名山下原1299-1</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">那覇空港からお車にて約40分</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥54,450〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187553%2F187553.html"
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
                      ウェルネスリゾート沖縄　ユインチホテル南城
                    </h3>
                    <p className="text-xs text-cyan-800 font-medium">南城市の高台から太平洋と久高島を一望！太古の天然温泉と充実のウェルネスステイ</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-amber-900">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-sm">4.47</span>
                    <span className="text-xs text-stone-700 font-medium">(1359件)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/74545/74545.jpg"
                      alt="ウェルネスリゾート沖縄　ユインチホテル南城"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full space-y-4">
                    <ul className="space-y-2">
                    <li key="0" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">標高約150mの高台に建ち、眼下にコバルトブルーの太平洋と知念半島を望む絶景パノラマ</span></li>
                    <li key="1" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">約500万年前の地層から湧き出る天然温泉「さしきの猿人の湯」！眺望と美肌効果を誇る名湯</span></li>
                    <li key="2" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">地元南城の朝採れ島野菜やあぐー豚をふんだんに取り入れた健康志向のビュッフェダイニング</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      知念半島を見晴らす丘の上に建つ複合ウェルネスリゾート。宿自慢の天然温泉「猿人の湯」は、太古の海水や植物由来の成分が溶け込んだ黄金色の湯で、塩分濃度が高く身体が芯から温まります。展望大浴場や露天風呂からは太平洋を一望でき、朝には日の出の眩い光が湯面に煌めきます。斎場御嶽や知念岬へのアクセスも車で約10分と至便で、アクティブな散策と湯治のような寛ぎが両立します。
                    </p>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-4 text-xs text-amber-950/90 leading-relaxed italic">
                  「温泉とアクティビティが充実、家族で満喫子供達もお気に入りで沖縄旅行の最終日に何度か利用させていただいています。夕食も、朝食も猿人の湯もとても良いです。沖縄でこのような温泉があるホテル等なか。」
                </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>沖縄県 南城市佐敷新里1688</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">那覇空港から車で約40分。那覇空港自動車道・南風原北ICから約15分。那覇空港から路線バス系統39番で約70分。</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥5,250〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F74545%2F74545.html"
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
                      琉球温泉　瀬長島ホテル
                    </h3>
                    <p className="text-xs text-cyan-800 font-medium">那覇空港至近の瀬長島に位置する絶景アイランドリゾート・立ち湯露天と夕日パノラマ</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-amber-900">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-sm">4.47</span>
                    <span className="text-xs text-stone-700 font-medium">(1296件)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/139989/139989.jpg"
                      alt="琉球温泉　瀬長島ホテル"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full space-y-4">
                    <ul className="space-y-2">
                    <li key="0" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">西海岸の海と慶良間諸島、那覇空港の滑走路を行き交う飛行機を一望する特等席のロケーション</span></li>
                    <li key="1" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">地下1000mから湧く「龍神の湯」！立ち湯露天風呂から眺める夕陽と冬の澄んだ夜空は圧巻</span></li>
                    <li key="2" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">ウミカジテラスに直結し、南城エリアへのドライブ観光の起点としても抜群の利便性</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      那覇空港から車でわずか15分の瀬長島に位置するラグジュアリー温泉リゾート。名物の立ち湯露天風呂「龍神の湯」からは、昼はエメラルドグリーンの海、夕暮れには息を呑むサンセット、夜には空港の美しい誘導灯が広がります。客室の露天風呂付きルームではプライベートな湯浴みも可能。南城市の斎場御嶽へも那覇空港自動車道経由で約40分と快適にアクセスできます。
                    </p>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-4 text-xs text-amber-950/90 leading-relaxed italic">
                  「朝食と露天風呂は最高、和室に椅子が欲しい初めて宿泊しました!朝食も美味しく、部屋の露天風呂もスパも良かったです。」
                </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>沖縄県 豊見城市字瀬長174-5</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">那覇空港よりお車にて約15分/ 路線バスで約20分　那覇空港‐赤嶺駅‐瀬長島ホテル前</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥9,630〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139989%2F139989.html"
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
                      サザンビーチホテル&amp;リゾート沖縄
                    </h3>
                    <p className="text-xs text-cyan-800 font-medium">美々ビーチいとまん目前の大型ビーチリゾート・多彩なプールと贅沢オーシャンビュー</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-amber-900">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-sm">4.29</span>
                    <span className="text-xs text-stone-700 font-medium">(2155件)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/76401/76401.jpg"
                      alt="サザンビーチホテル&amp;リゾート沖縄"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full space-y-4">
                    <ul className="space-y-2">
                    <li key="0" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">目の前に広がる白い砂浜と美々ビーチ！開放感あふれるモダンな客室から望む雄大な海景色</span></li>
                    <li key="1" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">冬期も快適に利用できる屋内温水プールやサウナを完備し、ファミリーやカップルに最適</span></li>
                    <li key="2" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">地元糸満漁港直送の新鮮魚介や沖縄県産食材を多彩なスタイルで楽しめるレストラン</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      本島南部・糸満市の港町に位置する本格ビーチリゾートホテル。開放感あふれるロビーと広々とした客室からは、どこまでも続く水平線と茜色に染まる夕景を眺められます。館内には温水インドアプールやリラクゼーションサロンが充実し、冬のオフシーズンでもリゾート気分を満喫。南城市の知念岬や斎場御嶽へも南海岸沿いのドライブで約35分とスムーズに巡ることができます。
                    </p>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-4 text-xs text-amber-950/90 leading-relaxed italic">
                  「清潔感がありプールは楽しめたが朝食は混雑サービスや施設の充実度は期待より低かったが、清潔感がありプールもあるのでこどもたちは楽しんでいました。ビュッフェはたのしみにしていたが、朝食では混み合っ。」
                </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>沖縄県 糸満市西崎町1-6-1</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">空港より車で約20分・最寄り「豊見城・名嘉地IC」まで約20分／東京バス「ウミカジライナー」で空港から約45分</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥6,200〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76401%2F76401.html"
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
                      ホテルグランビューガーデン沖縄
                    </h3>
                    <p className="text-xs text-cyan-800 font-medium">豊崎美らSUNビーチ至近の快適シティリゾート・展望大浴場と極上アウトレットアクセス</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-amber-900">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-sm">3.99</span>
                    <span className="text-xs text-stone-700 font-medium">(647件)</span>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9]">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/75371/75371.jpg"
                      alt="ホテルグランビューガーデン沖縄"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full space-y-4">
                    <ul className="space-y-2">
                    <li key="0" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">那覇空港から車で約15分！大型アウトレットモールあしびなーや大型商業施設へ徒歩圏内</span></li>
                    <li key="1" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">サウナ付きの展望大浴場を完備し、冬の散策で疲れた身体をゆったりとリフレッシュ</span></li>
                    <li key="2" className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span className="text-stone-700 text-sm font-medium">沖縄の郷土料理と洋食がバランスよく並ぶ朝食バイキングがビジネス・観光客双方に好評</span></li>
                    </ul>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      豊見城市豊崎に位置し、利便性とリゾートの寛ぎを兼ね備えた人気ホテル。那覇空港へのアクセスが抜群で、周辺にはショッピング施設や夕日の名所が揃います。最上階の大浴場にはサウナと水風呂が備わり、旅の疲れを心地よく癒やしてくれます。本島南部・南城市へのレンタカー周遊ルートの拠点として機能性が高く、快適な冬の沖縄ステイを約束してくれます。
                    </p>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-4 text-xs text-amber-950/90 leading-relaxed italic">
                  「立地と朝食を考えればコスパは十分この立地で、朝食付きでこのお値段ならコスパはいいと思います。コンビニなどは少し歩く必要があるので、あらかじめ時間に余裕を持っておくか、事前に買い物を済ませておく。」
                </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 border border-stone-100">
                  <div className="space-y-1 text-xs text-stone-700">
                    <div className="flex items-center gap-1 font-semibold text-stone-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>沖縄県 豊見城市豊崎3-82</span>
                    </div>
                    <div className="text-stone-700 pl-4.5">那覇空港から車で約１５分</div>
                    <div className="text-stone-700 pl-4.5 font-medium">目安料金: <span className="text-cyan-800 font-bold">¥7,700〜</span>（1名あたり/時期により変動）</div>
                  </div>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75371%2F75371.html"
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
                冬の南城・知念岬・南部海岸旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-4">

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>冬の沖縄旅行の最大の魅力は何ですか？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>冬の沖縄は台風の心配がほぼゼロで、湿度が低く非常に過ごしやすいのが大きな魅力です。真夏の強い日差しに邪魔されることなく世界遺産や自然散策をじっくり満喫でき、航空券やリゾートホテルの価格も落ち着くため、上質な滞在をリーズナブルに楽しめます。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>斎場御嶽を参拝する際のマナーや注意点はありますか？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>斎場御嶽は現在も地元の方々にとって極めて神聖な祈りの場（拝所）です。大声での会話や岩肌への落書き、立ち入り禁止区域への侵入は固く禁じられています。露出の多い服装を避け、敬虔な気持ちで静かに歩きましょう。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-stone-900 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>知念岬で初日の出を見る場合のポイントは？</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed pl-6">
                <span className="font-semibold text-stone-800">A. </span>元旦の日の出時刻は例年7:15頃です。周辺の駐車場は6:00過ぎから混み合いますので、日の出の45分前には到着しておくことをおすすめします。海風が冷たいため防寒具をしっかり着用してください。
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
                <Link href="/prefectures/okinawa" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>沖縄県のおすすめ観光名所＆温泉宿一覧</span>
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                  <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>全国の季節・目的別旅行特集一覧</span>
                </Link>
              </li>

            <li>
              <Link href="/winter-okinawa-naha-naminoe-shrine-hatsumode-agu-resort-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>【那覇・波上宮初詣＆あぐー豚】冬の沖縄シティリゾート名宿</span>
              </Link>
            </li>

            <li>
              <Link href="/winter-okinawa-onna-motobu-whalewatching-agu-resort-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>【恩納・本部ホエールウォッチング】冬の沖縄リゾート名宿</span>
              </Link>
            </li>

            <li>
              <Link href="/winter-okinawa-motobu-nakijin-yaedake-sakura-festival-agu-resort-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>【本部・八重岳日本一早い桜まつり】今帰仁とあぐー豚リゾート名宿</span>
              </Link>
            </li>

            <li>
              <Link href="/winter-okinawa-ishigaki-kabilabay-starrysky-beef-resort-stay" className="text-cyan-800 hover:text-cyan-950 font-medium hover:underline flex items-center gap-1.5 text-sm">
                <ChevronRight className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>【石垣島・川平湾と満天の星空】冬の南国リゾート＆石垣牛名宿</span>
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
