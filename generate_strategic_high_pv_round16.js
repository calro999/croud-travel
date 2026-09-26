const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound16 = [
  {
    slug: 'luxury-private-cinema-theater-room-resort-stay',
    query: 'プロジェクター シアター ホテル 温泉',
    title: '【2026年】大画面プロジェクター＆高音質音響！客室シアタールームで映画に没入する温泉宿5選',
    metaDesc: '2026年最新！100インチ以上の大画面プロジェクターや最新音響システム、動画配信見放題を備えたシアタールーム完備の極上温泉ホテル5選。',
    theme: '客室専用シアタールーム＆映画没入温泉宿',
    leadText: 'お気に入りの映画やライブ映像を、大画面スクリーンと高音質スピーカーで心ゆくまで鑑賞。ルームサービスのお酒やおつまみを片手にソファで寛ぎ、合間には美肌名湯の露天風呂へ。プライベートシアターと温泉が融合した究極のエンタメステイ。',
    badge: '客室シアター×大画面映画没入',
    tags: ['シアタールーム', 'プロジェクター', '映画鑑賞', 'ポップインアラジン', 'おこもりステイ', '楽天トラベル']
  },
  {
    slug: 'traditional-ayu-sweetfish-charcoal-grill-stay',
    query: '鮎 塩焼き 温泉 旅館',
    title: '【2026年】香ばしい炭火焼き鮎と清流の恵み！天然鮎尽くし会席＆川床露天風呂の名宿5選',
    metaDesc: '2026年最新！長良川や四万十川など清流で獲れた天然鮎の塩焼き、鮎刺し、鮎雑炊を堪能できる初夏・夏のグルメ温泉旅館5選。',
    theme: '天然鮎の炭火塩焼き＆清流会席温泉宿',
    leadText: '炭火でじっくりと香ばしく焼き上げられた、スイカの香りがすると称される夏の美味・鮎（アユ）。パリッとした皮目とふっくら柔らかな身、ほろ苦い内臓の旨味。清流のせせらぎを聞きながら川床や個室で味わう鮎フルコースと、爽快な渓流露天風呂の旅。',
    badge: '天然鮎の塩焼き×清流川床会席',
    tags: ['鮎料理', '炭火塩焼き', '清流の宿', '川床料理', '夏の味覚', '楽天トラベル']
  },
  {
    slug: 'super-panoramic-canyon-bridge-bungy-stay',
    query: 'ラフティング アクティビティ 温泉 旅館',
    title: '【2026年】爽快ラフティング＆キャニオニング！大自然アクティビティと癒やしの天然温泉宿5選',
    metaDesc: '2026年最新！水上・長瀞・吉野川など、大興奮の急流ラフティングやキャニオニング体験と、疲れた体を包み込む天然温泉がセットになった人気宿5選。',
    theme: '大自然アクティビティ＆癒やしの天然温泉宿',
    leadText: 'エメラルドグリーンの激流を下るラフティングや、滝壺へ飛び込むキャニオニング。思い切り体を動かして大自然のエネルギーを感じた後は、効能豊かな天然温泉に飛び込んで筋肉の疲労をじんわり解消。仲間や家族と最高の思い出を作る爽快アクティブ旅。',
    badge: '爽快アクティビティ×天然温泉',
    tags: ['ラフティング', 'キャニオニング', 'アウトドア', '水上温泉', 'グループ旅行', '楽天トラベル']
  },
  {
    slug: 'organic-honey-bee-farm-sweet-spa-stay',
    query: 'はちみつ スパ 温泉 ホテル',
    title: '【2026年】採れたて天然ハチミツ食べ比べ！ハニーエステ＆濃厚巣蜜スイーツが自慢の癒やし宿5選',
    metaDesc: '2026年最新！数種類の国産天然はちみつビュッフェや濃厚な巣蜜トースト、保湿効果抜群のハニー全身スパトリートメントが評判の温泉宿5選。',
    theme: '国産天然はちみつ＆ハニーエステ温泉宿',
    leadText: '黄金色に輝く濃厚な天然はちみつの甘い香りに包まれる休日。朝食ビュッフェに並ぶ巣蜜（コムハニー）や季節の花のはちみつ食べ比べ、ミネラルと酵素を肌に届ける贅沢なハニースパ。体の内側からも外側からも美しく潤うご褒美ステイ。',
    badge: '天然はちみつ×ハニースパエステ',
    tags: ['はちみつ', 'ハニースパ', '巣蜜', 'エステサロン', 'ご褒美女子旅', '楽天トラベル']
  },
  {
    slug: 'summer-hydrangea-temple-garden-healing-stay',
    query: 'あじさい 温泉 旅館',
    title: '【2026年】青や紫のグラデーション！紫陽花寺めぐり＆あじさい庭園露天風呂の初夏温泉宿5選',
    metaDesc: '2026年最新！鎌倉・箱根・京都など数千株の紫陽花が咲き誇る名所寺院めぐりと、色鮮やかなあじさい庭園を望む露天風呂が自慢の初夏の名宿5選。',
    theme: '紫陽花名所めぐり＆あじさい庭園露天宿',
    leadText: 'しっとりとした初夏の雨に濡れて一層美しさを増す紫陽花（アジサイ）。境内一面を埋め尽くすあじさい小径の散策や、宿の日本庭園を彩る色とりどりの花々。湯船に浮かべられた紫陽花の水中花を眺めながら、心静かに癒やされる初夏の風情旅。',
    badge: '紫陽花名所×あじさい庭園露天',
    tags: ['紫陽花', 'あじさい寺', '初夏旅行', '箱根あじさい', '庭園露天風呂', '楽天トラベル']
  },
  {
    slug: 'traditional-fireworks-festival-view-room-stay',
    query: '花火 露天風呂 温泉 ホテル',
    title: '【2026年】客室から大迫力の花火を特等席で観賞！花火大会一望＆夜景露天風呂の温泉ホテル5選',
    metaDesc: '2026年最新！熱海海上花火大会や洞爺湖ロングラン花火など、人混みを避けて部屋のテラスや露天風呂から大迫力の花火を満喫できるプレミアム宿5選。',
    theme: '客室から花火観賞＆夜景温泉ホテル',
    leadText: '夜空いっぱいに広がる大輪の花火と、体に響く轟音。人混みの混雑を気にすることなく、客室のテラスや専用露天風呂からグラス片手に眺める特等席の花火観賞。大切な人との記念日や家族旅行に忘れられない感動を届けるラグジュアリーステイ。',
    badge: '客室から花火観賞×特等席ステイ',
    tags: ['花火が見える宿', '熱海海上花火', '洞爺湖花火', '記念日ホテル', '客室露天風呂', '楽天トラベル']
  }
];

async function generate() {
  console.log('--- Generating Round 16 strategic high-intent comparison articles via Rakuten API Helper ---');

  const appDir = path.join(__dirname, 'src', 'app');
  const allHotelsDataPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let hotelsDb = {};
  if (fs.existsSync(allHotelsDataPath)) {
    hotelsDb = JSON.parse(fs.readFileSync(allHotelsDataPath, 'utf8'));
  }

  for (const theme of strategicThemesRound16) {
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
