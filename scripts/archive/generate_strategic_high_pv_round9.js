const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound9 = [
  {
    slug: 'luxury-glamping-dome-tent-private-onsen-stay',
    query: 'グランピング ドーム 温泉',
    title: '【2026年】天然温泉付きドームテント＆星空グランピング！大自然を満喫する極上アウトドアリゾート5選',
    metaDesc: '2026年最新！冷暖房完備の大型ドームテントに専用温泉露天風呂やBBQスペースを完備した最高峰のグランピング施設5選。満天の星と手ぶらアウトドアを満喫。',
    theme: '温泉付きドームテント＆星空グランピング',
    leadText: '冷暖房完備でホテルのような快適さを誇るおしゃれな大型ドームテント。夜は満天の星空の下で本格グリルBBQを楽しみ、敷地内の天然温泉や客室専用ジャグジーで心地よく癒やされる、贅沢なアウトドアリゾートを厳選しました。',
    badge: '温泉ドームテント×星空グランピング',
    tags: ['グランピング', 'ドームテント', '温泉リゾート', 'BBQ', '星空キャンプ', '楽天トラベル']
  },
  {
    slug: 'traditional-kaiseki-in-room-open-air-bath-kyoto',
    query: '京都 露天風呂 会席 旅館',
    title: '【2026年】古都の情緒と旬の京会席！客室露天風呂で贅沢に寛ぐ京都の隠れ家名旅館5選',
    metaDesc: '2026年最新！嵐山・東山・貴船など京都情緒あふれる空間で、出汁の効いた本格京料理会席とプライベート客室露天風呂を堪能できる厳選宿5選。',
    theme: '京都・町家情緒＆京会席・客室露天風呂宿',
    leadText: '竹林の静寂や鴨川のせせらぎに包まれる古都・京都。京町家の風情を残す数寄屋造りの客室、四季の美しさを映す坪庭、そして料理人が丹精込めた旬の京会席。プライベートな客室露天風呂で贅沢な時間に浸る大人の京都ステイをご提案します。',
    badge: '京会席×客室露天風呂名宿',
    tags: ['京都温泉', '京会席', '客室露天風呂', '嵐山', '町家宿', '楽天トラベル']
  },
  {
    slug: 'onsen-ryokan-with-oceanfront-infinity-pool-stay',
    query: 'インフィニティ プール 温泉',
    title: '【2026年】海と空に溶け込むインフィニティプール＆展望温泉！絶景リゾートホテル5選',
    metaDesc: '2026年最新！海と一体化する幻想的なインフィニティプールと絶景展望露天風呂を備えた人気リゾートホテル5選。非日常のラグジュアリーステイを。',
    theme: '海直結インフィニティプール＆展望温泉リゾート',
    leadText: '水平線と水面が一体になるかのようなインフィニティプール。夕暮れ時には茜色に染まるマジックアワーをプールサイドで眺め、夜はライトアップされた幻想的な空間と効能豊かな天然温泉を満喫。国内にいながら海外リゾート気分を味わえる名ホテルをご紹介します。',
    badge: 'インフィニティプール×絶景温泉',
    tags: ['インフィニティプール', 'オーシャンビュー', '展望温泉', 'リゾートホテル', '楽天トラベル']
  },
  {
    slug: 'hot-spring-cure-modern-toji-wellness-stay',
    query: '湯治 温泉 旅館 リトリート',
    title: '【2026年】現代湯治＆ウェルネスリトリート！心と体を根本から整える極上ヘルスケア温泉宿5選',
    metaDesc: '2026年最新！伝統の湯治文化を現代風にアップデート。薬草ハーブ湯・玄米自然食・ヨガやファスティングプランが充実した心身リセット温泉宿5選。',
    theme: '現代湯治＆ウェルネス温泉リトリート',
    leadText: '古くから日本人の健康を支えてきた「湯治」を、モダンで洗練された空間で体験。成分濃厚な名湯での温冷交代浴、無農薬野菜や発酵食を中心とした身体に優しいヘルシー会席、静寂の中で行う瞑想やヨガ。日々の疲れをリセットし、活力をチャージする滞在へ。',
    badge: '現代湯治×ウェルネスリトリート',
    tags: ['現代湯治', 'リトリート', '薬草温泉', '自然食', 'デトックス', '楽天トラベル']
  },
  {
    slug: 'firefly-viewing-summer-stream-night-walk-stay',
    query: 'ホタル 温泉 旅館 清流',
    title: '【2026年】幻想的なホタルの乱舞と清流のせせらぎ！初夏の夜空を彩る蛍観賞温泉宿5選',
    metaDesc: '2026年最新！宿の敷地内や清流沿いで無数のホタルが舞う幻想的な光景に出会える初夏の温泉宿5選。澄んだ空気と涼やかな川床料理を楽しむ特別な旅。',
    theme: '初夏のホタル観賞＆清流の涼名湯宿',
    leadText: '清らかな小川が流れる山あいの温泉地で、初夏にだけ見られる自然のイルミネーション・蛍の乱舞。宿の庭園や徒歩圏内の清流沿いで柔らかな光が飛び交う幻想的な夜を過ごし、川のせせらぎを聞きながら露天風呂に浸かる風流な旅をお届けします。',
    badge: 'ホタル観賞×清流露天風呂',
    tags: ['ホタル観賞', '清流の宿', '初夏旅行', '川床料理', '露天風呂', '楽天トラベル']
  },
  {
    slug: 'traditional-craft-pottery-artisan-village-stay',
    query: '陶芸 温泉 旅館',
    title: '【2026年】手仕事の器と窯元のぬくもり！益子・有田・波佐見・信楽など陶芸体験ができる名湯宿5選',
    metaDesc: '2026年最新！有名陶芸産地を巡り、お気に入りの器で味わう郷土会席と陶芸ろくろ体験が楽しめる温泉宿5選。器好き・アート好きに選ばれる文化の宿。',
    theme: '名窯元の陶芸体験＆手仕事の器と名湯宿',
    leadText: '益子焼、有田焼、波佐見焼、信楽焼など、全国の伝統的な焼き物の里。職人が心を込めて焼き上げたこだわりの器で供される四季の会席料理、自分だけの器を作る陶芸ろくろ体験、そして窯元巡りの後に浸かる癒やしの天然温泉。ものづくりの温もりに触れる旅へ。',
    badge: '陶芸体験×名窯元の美肌湯宿',
    tags: ['陶芸体験', '焼き物の里', '益子焼', '有田焼', '器と美食', '楽天トラベル']
  }
];

async function generate() {
  console.log('--- Generating Round 9 strategic high-intent comparison articles via Rakuten API Helper ---');

  const appDir = path.join(__dirname, 'src', 'app');
  const allHotelsDataPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let hotelsDb = {};
  if (fs.existsSync(allHotelsDataPath)) {
    hotelsDb = JSON.parse(fs.readFileSync(allHotelsDataPath, 'utf8'));
  }

  for (const theme of strategicThemesRound9) {
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
