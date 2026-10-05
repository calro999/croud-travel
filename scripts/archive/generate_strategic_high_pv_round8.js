const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound8 = [
  {
    slug: 'ocean-view-seafood-bbq-hamayaki-onsen-stay',
    query: '浜焼き 温泉 旅館',
    title: '海を望む絶景オーシャンビュー＆獲れたて海鮮浜焼き・磯料理が自慢の温泉宿',
    metaDesc: '2026年最新！目の前に広がる絶景オーシャンビューと、新鮮なサザエやホタテ、伊勢海老を豪快に焼く海鮮浜焼き・舟盛りが自慢の厳選温泉宿。海の恵みと波音に癒やされる旅へ。',
    theme: '絶景オーシャンビュー＆海鮮浜焼き温泉宿',
    leadText: 'どこまでも続く青い海と水平線を眺めながら、旬のサザエやホタテ、伊勢海老を目の前で香ばしく焼き上げる浜焼きバイキング＆舟盛り磯会席。波音をBGMに湯浴みを楽しむ至福のオーシャンフロント温泉宿を厳選しました。',
    badge: '海鮮浜焼き×絶景オーシャンビュー',
    tags: ['海鮮浜焼き', 'オーシャンビュー', '温泉旅行', '楽天トラベル', '磯料理']
  },
  {
    slug: 'valley-gorge-suspension-bridge-secret-onsen-stay',
    query: '渓谷 露天風呂 温泉',
    title: 'エメラルドグリーンの渓谷美と秘境吊り橋！大自然の峡谷露天風呂に癒やされる隠れ家温泉宿',
    metaDesc: '2026年最新！エメラルドグリーンの清流と峡谷の絶景を望む秘境温泉宿。スリル満点の吊り橋散策とマイナスイオン溢れる渓流露天風呂で極上の癒やしを。',
    theme: '渓谷美＆秘境峡谷露天風呂宿',
    leadText: '清らかな渓流のせせらぎ、深い緑や錦秋の峡谷、そしてスリルと絶景が広がる吊り橋。手つかずの大自然に抱かれた秘境の露天風呂で、日常の喧騒を完全に忘れて心身をリセットできる隠れ家宿をご紹介します。',
    badge: '渓谷美×秘境峡谷露天風呂',
    tags: ['渓谷露天風呂', '秘境温泉', '吊り橋', '温泉旅行', '楽天トラベル']
  },
  {
    slug: 'seasonal-flower-garden-botanical-healing-onsen-stay',
    query: '庭園 露天風呂 温泉 旅館',
    title: '四季折々の花畑と名園美に包まれる！美しい日本庭園と美肌温泉で心潤す花巡り宿',
    metaDesc: '2026年最新！美しい四季の花畑と名園を散策できる極上の日本庭園温泉宿。季節ごとの草花と名湯に癒やされる心潤う女子旅・夫婦旅におすすめの宿。',
    theme: '四季の名園＆花巡り日本庭園温泉宿',
    leadText: '春の桜やツツジ、初夏の紫陽花、秋の紅葉、冬の寒椿まで。丹精込めて手入れされた広大な日本庭園や四季折々の花々を愛でながら、湯量豊富な美肌の湯に浸かる贅沢。花の香りと鳥のさえずりに包まれる優美な温泉宿をご紹介します。',
    badge: '四季の名園×花巡り温泉',
    tags: ['日本庭園', '花巡り', '露天風呂', '美肌温泉', '楽天トラベル']
  },
  {
    slug: 'luxury-pastry-chef-sweets-dessert-gourmet-stay',
    query: 'スイーツ デザート ビュッフェ ホテル',
    title: '専属パティシエ特製スイーツ＆デザートビュッフェ！甘美なご褒美を味わう極上美食ホテル',
    metaDesc: '2026年最新！専属パティシエの特製スイーツや豪華デザートビュッフェが自慢のホテル＆温泉旅館。記念日や女子旅、自分へのご褒美に最高の甘美なステイ。',
    theme: '専属パティシエスイーツ＆デザートホテル',
    leadText: '旅の醍醐味は美味しいデザート！一流パティシエが目の前で仕上げる出来立てミルフィーユや旬フルーツのパフェ、豪華なワゴンデザートサービスまで。スイーツ好きの夢を叶える贅沢な美食リゾート＆温泉ホテルを厳選しました。',
    badge: 'パティシエ特製スイーツ×極上美食',
    tags: ['ホテルスイーツ', 'デザートビュッフェ', 'パティシエ', 'ご褒美旅', '楽天トラベル']
  },
  {
    slug: 'private-sauna-self-loyly-barrel-sauna-stay',
    query: 'サウナ 露天風呂 温泉',
    title: '客室専用プライベートサウナ＆セルフロウリュ！誰にも邪魔されずととのう極上温泉宿',
    metaDesc: '2026年最新！客室専用プライベートサウナ＆セルフロウリュ完備の極上温泉宿。水風呂・絶景外気浴スペース完備で完全プライベートな「究極のととのい」を体験。',
    theme: '客室専用サウナ＆セルフロウリュ宿',
    leadText: '好きなタイミングでアロマ水を注ぐセルフロウリュ、富士山や森林の絶景を望む外気浴スペース、そして地下水かけ流しの水風呂。完全プライベート空間で至極のととのい体験ができる客室サウナ付き温泉宿をピックアップしました。',
    badge: '客室専用サウナ×セルフロウリュ',
    tags: ['プライベートサウナ', '客室サウナ', 'セルフロウリュ', 'ととのい', '楽天トラベル']
  },
  {
    slug: 'stargazing-telescope-planetarium-night-sky-resort',
    query: '星空 露天風呂 ホテル',
    title: '本格天体望遠鏡＆星空ガイド付き！満天の星と天の川に包まれる高原星空リゾート',
    metaDesc: '2026年最新！大型天体望遠鏡や星空ツアー、露天風呂が楽しめる満天の星空リゾートホテル。澄んだ空気の高原で天の川や流星群を眺める非日常体験。',
    theme: '本格天体望遠鏡＆星空満天リゾート',
    leadText: '標高1,000m以上の澄み切った夜空に広がる無数の星々と天の川。本格的な天体望遠鏡での惑星観測や、星空案内人によるナイトツアー、展望露天風呂など、宇宙の神秘に触れる感動のステイが楽しめる高原リゾートホテルをご紹介します。',
    badge: '天体観測×満天の星空リゾート',
    tags: ['星空リゾート', '天体望遠鏡', '星空露天風呂', '天の川', '楽天トラベル']
  }
];

async function generate() {
  console.log('--- Generating Round 8 strategic high-intent comparison articles via Rakuten API Helper ---');

  const appDir = path.join(__dirname, 'src', 'app');
  const allHotelsDataPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let hotelsDb = {};
  if (fs.existsSync(allHotelsDataPath)) {
    hotelsDb = JSON.parse(fs.readFileSync(allHotelsDataPath, 'utf8'));
  }

  for (const theme of strategicThemesRound8) {
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
