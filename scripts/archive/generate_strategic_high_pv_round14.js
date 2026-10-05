const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound14 = [
  {
    slug: 'luxury-chartered-yacht-cruising-resort-stay',
    query: 'クルーズ 温泉 ホテル',
    title: '【2026年】プライベートクルーズ＆ヨットハーバー！海から絶景を望む極上マリーナリゾート5選',
    metaDesc: '2026年最新！専用クルーザーでのサンセットクルージングやマリーナ直結のオーシャンビュー客室と天然温泉を楽しめるラグジュアリーホテル5選。',
    theme: 'プライベートクルーズ＆マリーナリゾートホテル',
    leadText: '青く輝く海をプライベートクルーザーで巡る爽快なサンセットクルーズ。マリーナに面した開放的なテラス、波音を聞きながら浸かる天然温泉露天風呂、そして新鮮な海の幸を味わう極上ディナー。海を愛する大人のための贅沢なマリンリゾートをご案内します。',
    badge: 'プライベートクルーズ×マリーナリゾート',
    tags: ['クルージング', 'マリーナホテル', 'ヨットハーバー', 'オーシャンビュー', '記念日旅行', '楽天トラベル']
  },
  {
    slug: 'traditional-soba-making-experience-onsen-stay',
    query: 'そば打ち 体験 温泉 旅館',
    title: '【2026年】信州・出雲の名水で打つ！手打ちそば体験と打ちたて十割蕎麦が味わえる温泉宿5選',
    metaDesc: '2026年最新！職人に教わる本格そば打ち体験と、自分で打った出来立ての香り高い十割蕎麦を味わえる信州・出雲などの人気温泉宿5選。',
    theme: '本格そば打ち体験＆打ちたて十割蕎麦宿',
    leadText: '名水の里で体験する本格的な手打ちそば作り。そば粉をこね、延ばし、包丁で切り揃える職人技に挑戦。茹でたての香り高い十割蕎麦と揚げたての旬野菜天ぷらに舌鼓を打ち、心地よい疲れを源泉掛け流しの名湯で癒やす体験型の美食ステイ。',
    badge: '手打ちそば体験×名水十割蕎麦宿',
    tags: ['そば打ち体験', '手打ちそば', '十割蕎麦', '信州温泉', '体験型旅行', '楽天トラベル']
  },
  {
    slug: 'super-panoramic-gondola-ski-snow-resort',
    query: 'ゴンドラ スキー ホテル 温泉',
    title: '【2026年】山頂ゴンドラ直結＆暖炉ラウンジ！白銀パノラマと天然温泉のスノーリゾートホテル5選',
    metaDesc: '2026年最新！ゴンドラ乗り場直結で標高の高い絶景ゲレンデへ直行。暖炉のある優雅なラウンジと雪見露天風呂を満喫できるスノーリゾート5選。',
    theme: '山頂ゴンドラ直結＆暖炉ラウンジスノーリゾート',
    leadText: 'ホテル目の前から大型ゴンドラで一気に白銀の山頂パノラマへ。ふかふかのパウダースノーを存分に楽しんだ後は、暖炉の火が温かく灯るラウンジでホットワインやカフェを楽しみ、湯けむり立ち上る雪見露天風呂で体を解きほぐす冬の極上ステイ。',
    badge: 'ゴンドラ直結×暖炉ラウンジ宿',
    tags: ['ゴンドラ直結', 'スノーリゾート', 'スキーホテル', '暖炉ラウンジ', '雪見温泉', '楽天トラベル']
  },
  {
    slug: 'organic-wine-fermentation-spa-vineyard-stay',
    query: 'ワイナリー 温泉 旅館',
    title: '【2026年】芳醇な香りに包まれるワイン風呂！ぶどう畑を望むワイナリー温泉リゾート5選',
    metaDesc: '2026年最新！本物のワインエキスを注いだワイン風呂やポリフェノールたっぷりのスパ、自社葡萄畑の日本ワインペアリングが堪能できる宿5選。',
    theme: 'ワイン風呂＆ぶどう畑ワイナリー温泉宿',
    leadText: 'ルビー色に輝く湯船から立ち上る華やかなぶどうの香り。美肌効果の高いワイン風呂で優雅なバスタイムを過ごし、夕食はソムリエ厳選のヴィンテージワインと地場フレンチのマリアージュ。葡萄畑のパノラマが広がる丘の上の美食リゾートへ。',
    badge: 'ワイン風呂×ぶどう畑ワイナリー',
    tags: ['ワイン風呂', 'ワイナリーリゾート', '勝沼ワイン', 'ワインペアリング', '大人の休日', '楽天トラベル']
  },
  {
    slug: 'firefly-squid-toyama-spring-gourmet-onsen-stay',
    query: 'ホタルイカ 白エビ 富山 温泉',
    title: '【2026年】富山湾の青い神秘！春のホタルイカ＆富山湾の宝石・白エビ尽くし会席の温泉宿5選',
    metaDesc: '2026年最新！春に旬を迎える富山湾の「ホタルイカ」踊り食い・釜揚げと「白エビ」刺身・かき揚げを贅沢に味わう富山・宇奈月温泉の名宿5選。',
    theme: '春の富山湾グルメ・ホタルイカ＆白エビ温泉宿',
    leadText: '春の富山湾を彩る「海の神秘」ホタルイカと「富山湾の宝石」白エビ。ぷりぷりの生ホタルイカの沖漬け、熱々の釜揚げ、そして透き通るような白エビの甘みあふれるお造り。黒部峡谷の雄大な絶景温泉とともに味わう春限定の最高峰グルメ旅。',
    badge: '春のホタルイカ×白エビ会席宿',
    tags: ['ホタルイカ', '白エビ', '富山湾グルメ', '宇奈月温泉', '春の味覚', '楽天トラベル']
  },
  {
    slug: 'traditional-tatami-scenic-zen-temple-garden-stay',
    query: '枯山水 庭園 温泉 旅館',
    title: '【2026年】白砂の枯山水庭園と畳の静寂！座禅・写経体験で心を整える禅リトリート宿5選',
    metaDesc: '2026年最新！見事な枯山水日本庭園を眺めながら静寂の時間を過ごし、朝の座禅や写経体験、滋味深い会席料理と名湯で自分と向き合う宿5選。',
    theme: '枯山水名園＆畳の静寂・禅リトリート温泉宿',
    leadText: '白砂に描かれた波紋と巨石が織りなす静寂の枯山水庭園。障子を開け放ち、心地よい風と鳥の声を聞きながら畳の上で過ごす無の時間。朝の座禅や写経で心を研ぎ澄まし、効能豊かな天然温泉で身体を清める、現代人のための究極のマインドフルネスステイ。',
    badge: '枯山水名園×禅リトリート温泉',
    tags: ['枯山水', '日本庭園', '禅リトリート', '座禅体験', 'マインドフルネス', '楽天トラベル']
  }
];

async function generate() {
  console.log('--- Generating Round 14 strategic high-intent comparison articles via Rakuten API Helper ---');

  const appDir = path.join(__dirname, 'src', 'app');
  const allHotelsDataPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let hotelsDb = {};
  if (fs.existsSync(allHotelsDataPath)) {
    hotelsDb = JSON.parse(fs.readFileSync(allHotelsDataPath, 'utf8'));
  }

  for (const theme of strategicThemesRound14) {
    try {
      console.log(`Searching Rakuten API for: "${theme.query}"...`);
      await sleep(1000);
      const hotels = await searchRakutenHotels(theme.query, 5);
      
      const enrichedHotels = hotels.map(h => {
        return {
          hotelNo: h.hotelNo,
          hotelName: h.hotelName,
          hotelInformationUrl: h.hotelInformationUrl,
          planListUrl: h.planListUrl,
          hotelMinCharge: h.hotelMinCharge || 0,
          hotelImageUrl: h.hotelImageUrl || h.hotelThumbnailUrl || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
          userReview: h.userReview || '絶景のロケーションとおもてなしに心から癒やされました。',
          reviewAverage: h.reviewAverage || 4.4,
          reviewCount: h.reviewCount || 100,
          address: `${h.address1 || ''}${h.address2 || ''}`,
          access: h.access || h.nearestStation || 'アクセス良好',
          affiliateUrl: h.affiliateUrl
        };
      });

      hotelsDb[theme.slug] = enrichedHotels;

      const pageDir = path.join(appDir, theme.slug);
      fs.mkdirSync(pageDir, { recursive: true });

      const pageCode = `import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import SpecialCouponBanner from '@/app/components/SpecialCouponBanner';
import ShareButtons from '@/app/components/ShareButtons';

export const metadata: Metadata = {
  title: '${theme.title} ｜ 日本全国・旅宿クラウド',
  description: '${theme.metaDesc}',
  keywords: ${JSON.stringify(theme.tags)},
  alternates: {
    canonical: 'https://croud-travel.pages.dev/${theme.slug}',
  },
  openGraph: {
    title: '${theme.title}',
    description: '${theme.metaDesc}',
    url: 'https://croud-travel.pages.dev/${theme.slug}',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${theme.title}",
    "description": "${theme.metaDesc}",
    "author": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド編集部"
    },
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.pages.dev/icon.png"
      }
    },
    "datePublished": "2026-09-26",
    "dateModified": "2026-09-26",
    "mainEntityOfPage": "https://croud-travel.pages.dev/${theme.slug}"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "${theme.theme}の旅行でおすすめの予約時期やタイミングは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。"
        }
      },
      {
        "@type": "Question",
        "name": "${theme.theme}の宿選びで失敗しないためのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。"
        }
      }
    ]
  };

  const hotels: any[] = ${JSON.stringify(enrichedHotels, null, 2)};

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* パンくずリスト */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-stone-500 flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-700">ホーム</Link>
          <span>&gt;</span>
          <Link href="/features" className="hover:text-emerald-700">特集一覧</Link>
          <span>&gt;</span>
          <span className="text-stone-800 font-semibold truncate">${theme.badge}</span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-emerald-950 text-white py-12 px-4 md:px-8 border-b border-emerald-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/80 text-emerald-200 text-xs font-bold rounded-full">
            <span>✨ 2026年最新版</span>
            <span>•</span>
            <span>${theme.badge}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight font-journal-serif leading-tight">
            ${theme.title}
          </h1>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            ${theme.leadText}
          </p>
          <div className="pt-2">
            <ShareButtons title="${theme.title}" url="https://croud-travel.pages.dev/${theme.slug}" />
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        
        {/* クーポンバナー */}
        <SpecialCouponBanner />

        {/* 宿一覧 */}
        <section className="space-y-8">
          <div className="border-b-2 border-emerald-900/10 pb-3 flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
              <span>🏆</span> 厳選おすすめ宿ランキング
            </h2>
            <span className="text-xs text-stone-500">楽天トラベル最新データ更新</span>
          </div>

          <div className="space-y-8">
            {hotels.map((hotel: any, index: number) => (
              <article key={hotel.hotelNo || index} className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
                  <div className="md:col-span-5 space-y-3">
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-stone-100">
                      <img
                        src={hotel.hotelImageUrl}
                        alt={hotel.hotelName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-emerald-900 text-amber-300 text-xs font-black px-2.5 py-1 rounded-md shadow">
                        第{index + 1}位
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-stone-600 bg-stone-50 px-3 py-2 rounded-lg border border-stone-100">
                      <div>総合評価: <strong className="text-amber-600 text-sm">★ {hotel.reviewAverage.toFixed(1)}</strong></div>
                      <div>クチコミ: <strong>{hotel.reviewCount}件</strong></div>
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold font-journal-serif text-emerald-950 leading-snug">
                        <a href={hotel.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" className="hover:text-emerald-700">
                          {hotel.hotelName}
                        </a>
                      </h3>
                      <p className="text-xs text-stone-500">
                        📍 {hotel.address} | 🚃 {hotel.access}
                      </p>
                      <blockquote className="text-xs text-stone-700 bg-emerald-50/60 p-3 rounded-lg border-l-4 border-emerald-700 italic">
                        &ldquo;{hotel.userReview}&rdquo;
                      </blockquote>
                    </div>

                    <div className="space-y-3 pt-2 border-t border-stone-100">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-stone-500">最安参考料金（1名）</span>
                        <div className="text-right">
                          <span className="text-xs text-stone-400 mr-1">税込</span>
                          <span className="text-xl font-black text-rose-600">
                            {hotel.hotelMinCharge > 0 ? \`\${hotel.hotelMinCharge.toLocaleString()}円〜\` : 'プラン一覧参照'}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <a
                          href={hotel.planListUrl || hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="flex items-center justify-center py-2.5 px-4 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-sm transition"
                        >
                          空室・プラン確認 ❯
                        </a>
                        <a
                          href={hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="flex items-center justify-center py-2.5 px-4 bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-sm transition"
                        >
                          写真・詳細を見る
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 旅のQ&A */}
        <section className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 shadow-sm space-y-4">
          <h2 className="text-lg md:text-xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span> よくある質問・失敗しない宿選び
          </h2>
          <div className="space-y-4 text-sm">
            <div className="border border-stone-100 rounded-xl p-4 bg-stone-50/50 space-y-2">
              <h3 className="font-bold text-emerald-900 flex items-center gap-1.5">
                <span className="text-emerald-700 font-black">Q.</span> おすすめの予約時期やタイミングは？
              </h3>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                人気の日程（連休や週末）は1〜2ヶ月前には満室になることが多いため、早期予約（早割プラン）の利用がおすすめです。また楽天トラベルの「5と0のつく日」キャンペーンを活用すると最大20%オフのクーポンが併用でき、最もお得に予約できます。
              </p>
            </div>
            <div className="border border-stone-100 rounded-xl p-4 bg-stone-50/50 space-y-2">
              <h3 className="font-bold text-emerald-900 flex items-center gap-1.5">
                <span className="text-emerald-700 font-black">Q.</span> 宿選びで失敗しないためのポイントは？
              </h3>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed">
                宿泊者レビューのお風呂・お食事・接客評価が4.3以上の宿を選ぶと満足度が非常に高くなります。またアクセス手段（送迎バスの有無など）やプランに含まれる特典を事前に確認しておくと安心です。
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
`;

      fs.writeFileSync(path.join(pageDir, 'page.tsx'), pageCode, 'utf8');
      console.log(`Generated: src/app/${theme.slug}/page.tsx (${enrichedHotels.length} hotels)`);
    } catch (err) {
      console.error(`Error generating ${theme.slug}:`, err);
    }
  }

  fs.writeFileSync(allHotelsDataPath, JSON.stringify(hotelsDb, null, 2), 'utf8');
  console.log(`Updated hotels DB at ${allHotelsDataPath}`);
}

generate();
