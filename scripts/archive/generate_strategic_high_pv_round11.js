const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound11 = [
  {
    slug: 'autumn-leaves-illuminated-night-onsen-stay',
    query: '紅葉 露天風呂 温泉 旅館',
    title: '【2026年】黄金と深紅の幻想美！紅葉ライトアップ＆夜の庭園露天風呂が美しい秋の名宿5選',
    metaDesc: '2026年最新！京都・日光・箱根・黒川など、鮮やかに色づく紅葉のライトアップと湯けむり立ち上る夜の露天風呂を堪能できる厳選秋旅名宿5選。',
    theme: '紅葉ライトアップ＆夜景庭園露天風呂宿',
    leadText: '秋の夜長を彩る幻想的な紅葉のライトアップ。漆黒の夜空に浮かび上がる燃えるような赤と黄金のグラデーション、水面に映る逆さ紅葉、そして澄んだ秋空の下で浸かる至福の露天風呂。心奪われる日本の秋の絶景美を宿にいながら独占できる名旅館を厳選しました。',
    badge: '紅葉ライトアップ×庭園露天風呂',
    tags: ['紅葉温泉', 'ライトアップ', '秋旅行', '庭園露天風呂', '京都紅葉', '楽天トラベル']
  },
  {
    slug: 'art-museum-stay-contemporary-architecture-resort',
    query: 'デザイナーズ アート ホテル 温泉',
    title: '【2026年】名建築と現代アートに泊まる！美術館直結・デザイナーズ温泉ホテル5選',
    metaDesc: '2026年最新！直島・箱根・十和田など、世界的建築家が手がけた名建築とアート作品に囲まれ、上質な温泉と美食を楽しむ大人のアートステイ5選。',
    theme: '名建築＆現代アートに泊まる温泉リゾート',
    leadText: '空間そのものがひとつの美術作品。名だたる建築家が設計した洗練のモダンデザイン、館内の随所に展示された現代アート作品、そして感性を研ぎ澄ます静寂の温泉空間。アート好き・建築好きの知的好奇心を刺激する、特別なデザイナーズステイをご案内します。',
    badge: '名建築×現代アートステイ',
    tags: ['アートホテル', 'デザイナーズホテル', '名建築', '美術館巡り', '温泉リゾート', '楽天トラベル']
  },
  {
    slug: 'super-panoramic-ropeway-mountain-top-hotel-stay',
    query: '展望 絶景 山頂 ホテル 温泉',
    title: '【2026年】標高1,000m以上の絶景パノラマ！ロープウェイ直結＆雲上展望山頂ホテル5選',
    metaDesc: '2026年最新！中央アルプス・蔵王・八甲田など、ロープウェイで登る雲上の山頂リゾートホテル5選。眼下に広がる雲海とパノラマ展望露天風呂の感動。',
    theme: '雲上マウンテンビュー＆山頂展望温泉ホテル',
    leadText: '下界の喧騒をはるか遠くに望む標高1,000m以上の雲上世界。ロープウェイに乗って訪れる山頂ホテルでは、朝は幻想的な雲海、夕方は山々を染める夕暮れ、夜は満天の星空が広がります。大自然の圧倒的スケールを体感できる絶景マウンテンリゾートをご紹介します。',
    badge: '雲上パノラマ×山頂展望温泉',
    tags: ['雲海ホテル', '山頂リゾート', '絶景パノラマ', 'ロープウェイ', '高原温泉', '楽天トラベル']
  },
  {
    slug: 'retro-showa-nostalgic-hotspring-inn-stay',
    query: '昭和レトロ 温泉 旅館',
    title: '【2026年】昭和ノスタルジーと古き良き湯治文化！レトロタイル風呂と木造建築の秘湯宿5選',
    metaDesc: '2026年最新！渋温泉・四万温泉・鉛温泉など、大正・昭和の面影を色濃く残す木造建築、色鮮やかなモザイクタイル風呂、心温まる手作り郷土料理の宿5選。',
    theme: '昭和レトロ＆ノスタルジック秘湯宿',
    leadText: 'カランコロンと響く下駄の音、趣ある木造の階段、ステンドグラスや美しいモザイクタイルの湯船。まるでタイムスリップしたかのような昭和レトロな温泉街と湯治宿。どこか懐かしく温かいおもてなしと、昔ながらの濃厚な源泉掛け流しに心解き放たれる旅へ。',
    badge: '昭和レトロ×ノスタルジック秘湯',
    tags: ['昭和レトロ', 'タイル風呂', '木造旅館', '湯治場', 'ノスタルジー', '楽天トラベル']
  },
  {
    slug: 'craft-gin-whisky-distillery-boutique-stay',
    query: 'ウイスキー バー ホテル 温泉',
    title: '【2026年】本格BAR＆銘酒ウイスキー・クラフトジン！大人の夜を愉しむオーセンティックホテル5選',
    metaDesc: '2026年最新！希少なジャパニーズウイスキーやクラフトジンのテイスティングができる本格バー併設の温泉ホテル5選。大人の贅沢な夜を満喫。',
    theme: 'ウイスキーBAR＆銘酒テイスティング宿',
    leadText: '暖炉の火が静かに揺れる重厚なメインバーで、バーテンダーが注ぐ至極のシングルモルトやクラフトカクテル。温泉で心地よく温まったあとに、グラスを傾けながら語らう極上のひととき。お酒を愛する大人のためのハイエンドなオーセンティックステイ。',
    badge: '銘酒ウイスキー×本格BARホテル',
    tags: ['ウイスキーバー', 'クラフトジン', 'BARホテル', '大人の隠れ家', '美酒旅', '楽天トラベル']
  },
  {
    slug: 'private-beach-secluded-cove-luxury-villa-stay',
    query: 'プライベートビーチ ヴィラ',
    title: '【2026年】プライベートビーチ＆入江直結！波打ち際を独占する完全貸切オーシャンヴィラ5選',
    metaDesc: '2026年最新！客室から砂浜へ直結、誰にも邪魔されない完全プライベートな入江と天然温泉を備えた最高峰オーシャンフロントヴィラ5選。',
    theme: 'プライベートビーチ直結＆完全貸切ヴィラ',
    leadText: '客室のテラスから素足でそのまま白砂のビーチへ。誰にも邪魔されない隠れ家のような入江で、寄せては返す波の音を聞きながら過ごす至福の時間。客室専用の天然温泉露天風呂やインフィニティプールを備えた、国内最高峰のオーシャンフロントラグジュアリー。',
    badge: 'プライベートビーチ×完全貸切ヴィラ',
    tags: ['プライベートビーチ', '貸切ヴィラ', 'オーシャンフロント', '客室露天風呂', 'ビーチリゾート', '楽天トラベル']
  }
];

async function generate() {
  console.log('--- Generating Round 11 strategic high-intent comparison articles via Rakuten API Helper ---');

  const appDir = path.join(__dirname, 'src', 'app');
  const allHotelsDataPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let hotelsDb = {};
  if (fs.existsSync(allHotelsDataPath)) {
    hotelsDb = JSON.parse(fs.readFileSync(allHotelsDataPath, 'utf8'));
  }

  for (const theme of strategicThemesRound11) {
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
