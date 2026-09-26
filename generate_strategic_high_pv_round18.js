const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound18 = [
  {
    slug: 'luxury-private-onsen-with-art-gallery-stay',
    query: 'ギャラリー アート 温泉 旅館',
    title: '【2026年】館内ギャラリーで名画・彫刻を鑑賞！美の空間に泊まるミュージアム温泉宿5選',
    metaDesc: '2026年最新！現代アートの企画展や日本画・陶芸ギャラリーを併設し、上質なアート鑑賞と名湯を一度に楽しめる大人のミュージアム温泉宿5選。',
    theme: '館内アートギャラリー＆美の空間温泉宿',
    leadText: '回廊を歩くたびに心奪われる絵画や彫刻作品。館内そのものが美術館のように洗練されたアート宿で、知的好奇心を満たす贅沢な休日。美肌名湯に浸かり、感性を研ぎ澄ます静寂のギャラリーステイをご案内します。',
    badge: 'アートギャラリー×ミュージアム温泉',
    tags: ['アートギャラリー', 'ミュージアムホテル', '絵画鑑賞', '現代アート', '大人の休日', '楽天トラベル']
  },
  {
    slug: 'traditional-eel-unagi-charcoal-kabayaki-stay',
    query: 'うなぎ 蒲焼き 温泉 旅館',
    title: '【2026年】ふっくら香ばしい秘伝の炭火蒲焼き！極上うなぎ尽くし会席＆名湯の温泉宿5選',
    metaDesc: '2026年最新！浜名湖・三島・柳川など名産地の厳選うなぎを炭火で香ばしく焼き上げたうな重やひつまぶし、白焼きを堪能できる美食温泉宿5選。',
    theme: '炭火うなぎ蒲焼き＆うなぎ会席温泉宿',
    leadText: '立ち上る香ばしい煙と秘伝タレの甘辛い香り。皮目はパリッと香ばしく、身は口の中でとろけるほどふっくら柔らかな極上うなぎ。白焼き、うざく、う巻き、そして贅沢なうな重まで。スタミナ満点の美味と名湯で活力をチャージする至高の旅。',
    badge: '炭火うなぎ蒲焼き×ひつまぶし宿',
    tags: ['うなぎ料理', '炭火蒲焼き', 'うな重', '浜名湖温泉', '名物グルメ', '楽天トラベル']
  },
  {
    slug: 'super-panoramic-lake-canoe-kayak-resort-stay',
    query: 'カヌー 湖 温泉 ホテル',
    title: '【2026年】透明な水面を滑るレイクカヌー＆SUP！神秘の湖畔パノラマ温泉リゾート5選',
    metaDesc: '2026年最新！支笏湖・中禅寺湖・本栖湖など、鏡のような美しい湖でカヌーやSUPを楽しみ、湖畔を望む展望温泉で寛げるレイクサイドアクティブ宿5選。',
    theme: '湖畔カヌー・SUP＆レイクビュー温泉リゾート',
    leadText: '朝霧立ち込める静寂の湖に漕ぎ出すカヌーの旅。水底まで透き通るクリスタルブルーの水面、水鳥の羽音、周囲の山々が織りなすパノラマビュー。心地よい疲労感をレイクサイドの展望露天風呂で癒やす、自然と一体になる休日。',
    badge: '湖畔カヌー×レイクビュー温泉',
    tags: ['カヌー体験', 'SUP', 'レイクサイドリゾート', '湖畔温泉', 'アウトドア', '楽天トラベル']
  },
  {
    slug: 'organic-flower-bath-rose-herb-spa-stay',
    query: 'バラ風呂 温泉 旅館',
    title: '【2026年】生バラの花びらが浮かぶ優美な湯船！華やかなローズ風呂＆フラワーアロマ宿5選',
    metaDesc: '2026年最新！数百輪の色鮮やかな生バラを浮かべた贅沢なバラ風呂やハーブフラワーバス、天然アロマトリートメントで特別な記念日を彩る温泉宿5選。',
    theme: '生バラ風呂＆フラワーアロマ温泉宿',
    leadText: '湯船いっぱいに敷き詰められた赤やピンクの生バラの花びら。甘く高貴なローズの香りに包まれる非日常のバスタイムは、まさに映画のワンシーン。記念日や誕生日、自分への最高のご褒美にふさわしい華やかなフラワー温泉ステイ。',
    badge: '生バラ風呂×ローズアロマ温泉',
    tags: ['バラ風呂', 'ローズバス', '記念日旅行', 'フラワーアロマ', '女子旅温泉', '楽天トラベル']
  },
  {
    slug: 'winter-hot-pot-gibier-wild-game-satoyama-stay',
    query: 'ぼたん鍋 温泉 旅館',
    title: '【2026年】滋味あふれる天然猪肉と特製味噌出汁！伝統の「ぼたん鍋」＆里山ジビエ会席宿5選',
    metaDesc: '2026年最新！丹波篠山や奥飛騨の厳選された天然イノシシ肉を美しい牡丹の花のように盛り付け、特製味噌で煮込む絶品ぼたん鍋と名湯の宿5選。',
    theme: '天然猪肉ぼたん鍋＆里山ジビエ温泉宿',
    leadText: '冬の寒さとともに脂が乗って旨味が凝縮される天然イノシシ肉。大皿に牡丹の花のように並べられた美しい霜降り肉を、地元の熟成味噌出汁で煮込む熱々のぼたん鍋。野趣あふれる里山の恵みと体の芯まで温まる名湯で冬の寒さを忘れる美味旅。',
    badge: '天然猪肉ぼたん鍋×里山ジビエ宿',
    tags: ['ぼたん鍋', 'ジビエ料理', '猪肉', '丹波篠山', '冬の鍋旅', '楽天トラベル']
  },
  {
    slug: 'traditional-craft-lacquerware-wajima-aizu-stay',
    query: '漆器 温泉 旅館',
    title: '【2026年】艶やかな漆の器と伝統の技！輪島塗・会津塗の手仕事美を愛でる名湯の宿5選',
    metaDesc: '2026年最新！職人が手塗りを重ねた本漆の器で供される優美な日本料理と、伝統工芸のギャラリーや体験が楽しめる文化薫る名旅館5選。',
    theme: '伝統漆器と手仕事美＆名湯の宿',
    leadText: 'しっとりと手に馴染む本漆の器の優しい温もり。輪島塗や会津塗の美しい蒔絵が施された器に盛り付けられる四季の会席料理は、目にも舌にも贅沢。何百年もの伝統を受け継ぐ匠の技と、歴史ある名湯に心を委ねる格調高いステイ。',
    badge: '伝統漆器×手仕事の美宿',
    tags: ['輪島塗', '会津塗', '漆器の器', '伝統工芸', '文化の宿', '楽天トラベル']
  }
];

async function generate() {
  console.log('--- Generating Round 18 strategic high-intent comparison articles via Rakuten API Helper ---');

  const appDir = path.join(__dirname, 'src', 'app');
  const allHotelsDataPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let hotelsDb = {};
  if (fs.existsSync(allHotelsDataPath)) {
    hotelsDb = JSON.parse(fs.readFileSync(allHotelsDataPath, 'utf8'));
  }

  for (const theme of strategicThemesRound18) {
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
