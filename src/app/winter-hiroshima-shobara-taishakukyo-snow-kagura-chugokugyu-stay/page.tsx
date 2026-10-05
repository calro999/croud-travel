import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '冬の帝釈峡・庄原完全ガイド｜雪の渓谷美と広島神楽・比婆牛・備北温泉宿',
  description: '積雪が断崖を白く染める帝釈峡の雪景色、奉納神楽の迫力、比婆牛と広島牡蠣鍋——広島・庄原エリアの冬旅の魅力を楽天トラベル人気宿とともに徹底解説。三次ワイナリーも必見。',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-hiroshima-shobara-taishakukyo-snow-kagura-chugokugyu-stay/",
  },
  openGraph: {
    title: '冬の帝釈峡・庄原完全ガイド｜雪の渓谷美と広島神楽・比婆牛・備北温泉宿',
    description: '積雪が断崖を白く染める帝釈峡の雪景色、奉納神楽の迫力、比婆牛と広島牡蠣鍋——広島・庄原エリアの冬旅の魅力を楽天トラベル人気宿とともに徹底解説。',
    url: 'https://croud-travel.com/winter-hiroshima-shobara-taishakukyo-snow-kagura-chugokugyu-stay',
    siteName: 'Croud Travel',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function Page() {
  const faqList = [
  {
    "q": "帝釈峡への最寄りアクセスは？冬期に車以外でも行けますか？",
    "a": "帝釈峡国定公園の最寄り駅はJR芸備線「備後落合駅」または「東城駅」ですが、列車の本数が極めて少ないため、広島市内や福山から国道182号線を利用した車でのアクセスが現実的です。広島市内から車で約2時間、福山・尾道方面からは1時間半程度。レンタカーを利用して庄原・三次周辺に宿をとり、翌朝早めに帝釈峡へ向かうのがおすすめです。"
  },
  {
    "q": "冬の帝釈峡はどんな景色が楽しめますか？見どころは？",
    "a": "帝釈峡は石灰岩が침食されてできた断崖絶壁と清流が連なる渓谷で、冬は積雪が崖の岩肌を白く染め、水面に映る幽玄な雪景色が広がります。全長18kmの渓谷のうち一般観光に開かれた「上帝釈」エリアでは「神竜湖」周辺の遊歩道が比較的歩きやすく、雪中ハイキングが楽しめます。アイスバーンに備えてスパイク付きの靴底を持参すると安心です。"
  },
  {
    "q": "広島神楽（かぐら）はどこで観られますか？冬のシーズンのスケジュールは？",
    "a": "広島神楽は安芸・備北地方に伝わる神話を題材とした奉納芸能で、演目の迫力と華やかな衣装・囃子が圧巻です。三次市内の「夢ランド布野」や「道の駅神石こうげん」、庄原市のイベント施設でも定期公演が行われており、冬は初詣シーズンの神社奉納神楽が各地で催されます。「みよし神楽の里」では毎月定例公演があるため、事前にスケジュールを確認して訪問するとほぼ確実に観覧できます。"
  },
  {
    "q": "比婆牛（ひばごう）とはどんな牛肉ですか？どこで食べられますか？",
    "a": "比婆牛は広島県庄原市の比婆山麓で育てられた黒毛和牛のブランド牛で、自然豊かな高原環境で育つため肉質のきめが細かく、甘みのある霜降りが特徴とされています。庄原市内の道の駅「たかのがルーべ」周辺や、ラ・フォーレ庄原などの宿泊施設での夕食で提供されることがあります。三次市内の焼肉店でも中国地方産の銘柄牛として扱われており、中国牛の旨みを存分に楽しめます。"
  },
  {
    "q": "三次（みよし）のワイナリーは冬でも見学できますか？",
    "a": "「三次ワイナリー」は中国山地の高原性気候を活かしてワインを醸造している施設で、売店・レストラン・見学スペースが揃っています。冬期も基本的に営業していますが、12〜1月は積雪による休業日が生じる場合があるため、訪問前にウェブサイトで確認することをおすすめします。冬限定の甘口ワインやボジョレーヌーボーの期間も過ぎたこの時期は、ゆったりと試飲を楽しめる穴場の季節です。"
  },
  {
    "q": "帝釈峡と三次を組み合わせた2泊3日の旅程はどう組みますか？",
    "a": "1日目：広島または福山から車で移動→三次着・神楽の夜公演を観覧→三次市内ホテル泊。2日目：早朝に帝釈峡へドライブ→雪の渓谷を散策→庄原市内の宿で比婆牛会席料理と露天風呂。3日目：道の駅「庄原」で地野菜・ジビエを購入→広島市内または尾道へ移動、という動線が充実感があります。運転が心配な場合は三次を起点に帝釈峡を日帰りで往復するだけでも十分に楽しめます。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://croud-travel.com' },
          { '@type': 'ListItem', position: 2, name: '冬の旅行特集', item: 'https://croud-travel.com/features' },
          { '@type': 'ListItem', position: 3, name: '冬の帝釈峡・庄原×神楽×比婆牛×温泉宿', item: 'https://croud-travel.com/winter-hiroshima-shobara-taishakukyo-snow-kagura-chugokugyu-stay' },
        ],
      },
      {
        '@type': 'Article',
        headline: '冬の帝釈峡・庄原完全ガイド｜雪の渓谷美と広島神楽・比婆牛・備北温泉宿',
        description: '積雪が断崖を白く染める帝釈峡の雪景色、奉納神楽の迫力、比婆牛と広島牡蠣鍋——広島・庄原エリアの冬旅の魅力を徹底解説。',
        url: 'https://croud-travel.com/winter-hiroshima-shobara-taishakukyo-snow-kagura-chugokugyu-stay',
        publisher: { '@type': 'Organization', name: 'Croud Travel', url: 'https://croud-travel.com' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqList.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">ホーム</Link>
          <span className="mx-2">›</span>
          <Link href="/features" className="hover:underline">冬の旅行特集</Link>
          <span className="mx-2">›</span>
          <span>冬の帝釈峡・庄原×神楽×比婆牛×温泉宿</span>
        </nav>

        <h1 className="text-2xl font-bold mb-4 leading-snug">
          冬の帝釈峡・庄原完全ガイド<br />
          <span className="text-lg font-normal text-gray-600">雪の渓谷美と広島神楽・比婆牛・備北温泉宿</span>
        </h1>

        <p className="text-gray-600 text-sm mb-8">
          更新日：2024年12月 ｜ 対象時期：11月〜1月
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-green-600 pl-3">帝釈峡の冬——雪に染まる石灰岩の断崖と神龍湖</h2>
          <p className="mb-4">
            広島県北東部、庄原市東城町に広がる帝釈峡（たいしゃっきょう）は、国定公園に指定された石灰岩の渓谷地帯だ。春は桜、秋は紅葉の名所として知られるが、冬の雪化粧をした帝釈峡の姿はあまり知られていない。断崖の岩肌を白雪が覆い、清流がひっそりと流れる光景は静謐そのものであり、観光シーズンの人混みとは無縁の、本物の自然と向き合える時間が待っている。
          </p>
          <p className="mb-4">
            帝釈峡は上帝釈・下帝釈の2ゾーンに分かれており、一般観光客が歩きやすいのは上帝釈エリアの「神竜湖」周辺の遊歩道だ。全長約3kmのコースは石灰岩の奇形地形——鍾乳洞・天然橋・甌穴（おうけつ）が連続し、雪の中ではその非現実的な造形美がより際立つ。遊歩道は舗装されているが、冬季はアイスバーンになる箇所もあるため、スパイク付きシューズソールかトレッキングシューズが必須だ。
          </p>
          <p className="mb-4">
            神龍湖は渓谷の岩を堰き止めてできた人造湖で、冬の澄んだ空気の中では湖面がガラスのように静まり、両岸の断崖と白雪が鏡映しになる。観光船は冬季運休になることが多いが、岸辺から眺める景色だけでも十分に価値がある。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-green-600 pl-3">広島神楽——神話を纏う荘厳な奉納芸能</h2>
          <p className="mb-4">
            「広島神楽」は安芸・備北地方に代々伝わる神事芸能で、国や地域の重要無形民俗文化財に指定されている団体も多い。スサノオノミコトとヤマタノオロチの対決を描く「大蛇（おろち）」や、天岩戸の神話を題材にした演目など、豪壮な衣装と囃子の響き、炎や煙を用いた演出は観る者を古代の神話世界へ引き込む。
          </p>
          <p className="mb-4">
            三次市・庄原市エリアでは、毎月のように神楽の定例公演が行われており、特に年末〜正月にかけては神社の初詣奉納神楽が各地で催される。「みよし神楽の里」では毎月第一・第三土曜日に定期公演を開催しており、事前に観覧スケジュールを確認のうえ訪問すると確実だ。公演は1〜2時間程度で、子供から年配まで楽しめる演目構成になっている。
          </p>
          <p className="mb-4">
            幕間にはお面や衣装の展示解説があり、撮影もOKな場合が多い。神楽衣装の鮮やかな朱と金の刺繍は、カメラを構えるだけで絵になる被写体だ。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-green-600 pl-3">比婆牛と三次ワイナリー——備北の山の幸を味わう</h2>
          <p className="mb-4">
            比婆牛（ひばごう）は広島県庄原市の比婆山麓一帯で育てられた黒毛和牛のブランド牛だ。標高500〜600mの高原性気候と清冽な地下水で育つ牛は、脂の融点が低く、口に含んだ瞬間にとろける食感が評判だ。地元の宿泊施設や庄原市内のレストランでは、比婆牛のすき焼き・しゃぶしゃぶ・鉄板焼きが振る舞われ、冬の寒さに負けない深い旨みで体の芯から温まれる。
          </p>
          <p className="mb-4">
            三次市に立地する「三次ワイナリー」は中国山地の冷涼な気候を活かしたワイン醸造施設で、ブドウ畑の見学・試飲・直売所が揃う複合施設だ。冬の三次は夕霧（ゆうぎり）現象が有名で、早朝に三次盆地を覆う幻想的な霧の海は、全国的に知られる絶景スポットでもある。ワイナリーから見渡す冬の霧の盆地を眺めながら地元ワインを一杯、という贅沢な時間を楽しんでみてほしい。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 border-l-4 border-green-600 pl-3">帝釈峡・庄原・三次の宿——楽天トラベル人気ホテル5選</h2>
          <div className="space-y-8">
            
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50714%2F50714.html" target="_blank" rel="noopener noreferrer sponsored">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/50714/50714.jpg"
                  alt="休暇村 帝釈峡の外観"
                  width={800}
                  height={500}
                  className="w-full object-cover"
                  priority
                />
              </a>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">
                  <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50714%2F50714.html" target="_blank" rel="noopener noreferrer sponsored" className="hover:underline text-blue-700">
                    休暇村 帝釈峡
                  </a>
                </h3>
                <p className="text-sm text-gray-500 mb-2">📍 庄原市東城町三坂962-1 ｜ 最寄り：備後落合駅 ｜ ⭐ 4.19 ｜ 1泊〜¥10,000〜</p>
                <p className="text-sm text-gray-700 mb-3">帝釈峡の自然に抱かれた休暇村。温泉・ハイキング・四季折々の絶景が一度に楽しめる宿泊施設。</p>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50714%2F50714.html"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-2 px-5 rounded"
                >
                  楽天トラベルで空室を確認
                </a>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183874%2F183874.html" target="_blank" rel="noopener noreferrer sponsored">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/183874/183874.jpg"
                  alt="桜花の郷 ラ・フォーレ庄原の外観"
                  width={800}
                  height={500}
                  className="w-full object-cover"
                  
                />
              </a>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">
                  <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183874%2F183874.html" target="_blank" rel="noopener noreferrer sponsored" className="hover:underline text-blue-700">
                    桜花の郷 ラ・フォーレ庄原
                  </a>
                </h3>
                <p className="text-sm text-gray-500 mb-2">📍 庄原市新庄町5281-1 ｜ 最寄り：備後庄原駅 ｜ ⭐ 4.31 ｜ 1泊〜¥7,800〜</p>
                <p className="text-sm text-gray-700 mb-3">満点の星空が見える露天風呂と四季折々の旬な食材を使った美食で身体と心を癒す天然温泉ホテル。</p>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183874%2F183874.html"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-2 px-5 rounded"
                >
                  楽天トラベルで空室を確認
                </a>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38563%2F38563.html" target="_blank" rel="noopener noreferrer sponsored">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/38563/38563.jpg"
                  alt="備長炭の湯 ホテルクラウンヒルズ三次の外観"
                  width={800}
                  height={500}
                  className="w-full object-cover"
                  
                />
              </a>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">
                  <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38563%2F38563.html" target="_blank" rel="noopener noreferrer sponsored" className="hover:underline text-blue-700">
                    備長炭の湯 ホテルクラウンヒルズ三次
                  </a>
                </h3>
                <p className="text-sm text-gray-500 mb-2">📍 三次市十日市東6-13-25 ｜ 最寄り：三次駅 ｜ ⭐ 3.89 ｜ 1泊〜¥3,700〜</p>
                <p className="text-sm text-gray-700 mb-3">三次ICより車で1分。広島県北部の観光拠点として最適なホテル。備長炭温泉大浴場が自慢。</p>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38563%2F38563.html"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-2 px-5 rounded"
                >
                  楽天トラベルで空室を確認
                </a>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187288%2F187288.html" target="_blank" rel="noopener noreferrer sponsored">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/187288/187288.jpg"
                  alt="ホテルルートイン三次駅前の外観"
                  width={800}
                  height={500}
                  className="w-full object-cover"
                  
                />
              </a>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">
                  <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187288%2F187288.html" target="_blank" rel="noopener noreferrer sponsored" className="hover:underline text-blue-700">
                    ホテルルートイン三次駅前
                  </a>
                </h3>
                <p className="text-sm text-gray-500 mb-2">📍 三次市十日市南1-5-5 ｜ 最寄り：三次駅 ｜ ⭐ 4.35 ｜ 1泊〜¥6,650〜</p>
                <p className="text-sm text-gray-700 mb-3">三次駅より徒歩3分。男女別大浴場・品数豊富な朝食バイキング・ランドリー室・全館Wi-Fiが揃う快適ホテル。</p>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187288%2F187288.html"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-2 px-5 rounded"
                >
                  楽天トラベルで空室を確認
                </a>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15881%2F15881.html" target="_blank" rel="noopener noreferrer sponsored">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/15881/15881.jpg"
                  alt="ホテルアルファーワン三次の外観"
                  width={800}
                  height={500}
                  className="w-full object-cover"
                  
                />
              </a>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">
                  <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15881%2F15881.html" target="_blank" rel="noopener noreferrer sponsored" className="hover:underline text-blue-700">
                    ホテルアルファーワン三次
                  </a>
                </h3>
                <p className="text-sm text-gray-500 mb-2">📍 三次市十日市西1-4-22 ｜ 最寄り：三次駅 ｜ ⭐ 4.03 ｜ 1泊〜¥5,600〜</p>
                <p className="text-sm text-gray-700 mb-3">自慢の朝定食（和・洋定食＆セミバイキング）・各階電子レンジ・全室Wi-Fi・無料駐車場130台完備。</p>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15881%2F15881.html"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-block bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-2 px-5 rounded"
                >
                  楽天トラベルで空室を確認
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-green-600 pl-3">アクセスと旅程——広島県北部の歩き方</h2>
          <p className="mb-4">
            広島市内から帝釈峡まで国道432号線経由で約2時間、福山・尾道からは国道182号線経由で1時間30分程度が目安だ。三次市は中国自動車道「三次IC」下車が便利で、帝釈峡へはそこからさらに東城方面へ30分。鉄路利用の場合はJR芸備線が通っているものの、1日の本数が非常に少ないため事前に時刻を確認しておくこと。
          </p>
          <p className="mb-4">
            1泊2日の旅程例：初日に三次着→三次ワイナリー・霧の盆地ビューポイント→神楽公演観覧→三次ホテル泊。2日目：早朝の霧の海を堪能→帝釈峡ドライブ・雪中ハイキング→庄原のラ・フォーレで比婆牛ランチ→広島方面へ帰路。この動線なら帝釈峡・神楽・グルメのすべてが無理なく盛り込める。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-6 border-l-4 border-green-600 pl-3">よくある質問</h2>
          <div className="space-y-5">
            {faqList.map((item, idx) => (
              <details key={idx} className="border rounded p-4">
                <summary className="font-bold cursor-pointer">{item.q}</summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 border-l-4 border-green-600 pl-3">関連記事——中国地方の冬旅をもっと深く</h2>
          <ul className="space-y-2 text-sm">
            <li>→ <Link href="/winter-hiroshima-miyajima-onsen-kaki-oyster-seto-stay" className="text-blue-600 hover:underline">冬の宮島・牡蠣と温泉で過ごす瀬戸内の絶景宿</Link></li>
            <li>→ <Link href="/winter-hiroshima-onomichi-senkoji-shimanami-okoze-ramen-stay" className="text-blue-600 hover:underline">冬の尾道・千光寺公園としまなみ海道・穴子&尾道ラーメン宿</Link></li>
            <li>→ <Link href="/winter-okayama-yubara-onsen-sunayu-hiruzen-wagyu-stay" className="text-blue-600 hover:underline">冬の湯原温泉・砂湯と蒜山和牛の岡山山間旅</Link></li>
            <li>→ <Link href="/winter-shimane-matsue-shinjiko-onsen-sunset-matsubagani-shijimi-stay" className="text-blue-600 hover:underline">冬の松江・宍道湖夕景と松葉ガニ・しじみ汁温泉宿</Link></li>
            <li>→ <Link href="/winter-tottori-misasa-onsen-matsuba-crab-stay" className="text-blue-600 hover:underline">冬の三朝温泉・ラジウム湯と松葉ガニの鳥取旅</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
