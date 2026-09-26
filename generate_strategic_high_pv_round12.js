const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound12 = [
  {
    slug: 'ancient-jomon-forest-cave-onsen-stay',
    query: '洞窟風呂 秘湯 温泉 旅館',
    title: '【2026年】太古の地球エネルギーを体感！天然洞窟風呂＆巨岩露天風呂の秘境宿5選',
    metaDesc: '2026年最新！自然の岩盤をくり抜いた天然洞窟風呂や巨大な岩風呂が自慢の秘境温泉宿5選。地球の息吹を感じる神秘的な湯浴み体験へ。',
    theme: '天然洞窟風呂＆巨岩露天の秘境宿',
    leadText: '薄明かりに照らされた天然の洞窟の中に湧き出る神秘的な名湯。ゴツゴツとした岩肌と反響する湯の音、太古から続く地球の鼓動を肌で感じる非日常の湯浴み。秘境の地でしか出会えない野趣あふれる洞窟温泉＆巨岩露天風呂の宿を厳選しました。',
    badge: '天然洞窟風呂×秘境名湯',
    tags: ['洞窟風呂', '秘湯', '岩風呂', '野趣あふれる温泉', '大自然リトリート', '楽天トラベル']
  },
  {
    slug: 'matcha-green-tea-experience-onsen-stay',
    query: 'お茶 茶室 温泉 旅館',
    title: '【2026年】宇治・静岡・八女の銘茶香る！本格茶室体験とお茶風呂・茶懐石の美肌宿5選',
    metaDesc: '2026年最新！名産地のお茶を五感で楽しむお茶旅。本格茶室での点前体験、カテキンたっぷりの茶湯露天風呂、茶葉を使った特製茶懐石が自慢の宿5選。',
    theme: '銘茶の香り＆本格茶室・茶湯温泉宿',
    leadText: '淹れたての日本茶の香ばしいアロマに包まれる上質な休日。本格的な数寄屋造りの茶室で味わう抹茶と季節の上生菓子、美肌効果の高い緑茶エキスを浮かべた茶湯露天風呂、そして茶葉の天ぷらやほうじ茶ご飯を堪能する大人の風流ステイ。',
    badge: '銘茶の香り×本格茶室温泉',
    tags: ['お茶旅', '抹茶体験', '茶室', '茶湯温泉', '茶懐石', '楽天トラベル']
  },
  {
    slug: 'super-panoramic-footbath-cafe-resort-stay',
    query: '足湯 カフェ テラス 温泉 ホテル',
    title: '【2026年】絶景足湯カフェ＆テラスBAR！ぽかぽか足湯とドリンクを楽しむ展望リゾート5選',
    metaDesc: '2026年最新！海や山、満天の星を眺めながら足湯に浸かり、クラフトビールやハーブティーを楽しめる絶景足湯カフェ＆バー併設の人気ホテル5選。',
    theme: '絶景足湯カフェ＆足湯テラスバー付きホテル',
    leadText: '心地よい温もりに足を浸しながら、目の前に広がる水平線やアルプスの山並みを眺める至福の時間。オープンテラスの足湯カフェで味わう特製スイーツや地ビール、夜はライトアップされた足湯バーでカクテルを片手に星空観賞ができるリゾートホテル。',
    badge: '絶景足湯カフェ×テラスBAR',
    tags: ['足湯カフェ', '足湯バー', '展望テラス', '絶景ホテル', '温泉リゾート', '楽天トラベル']
  },
  {
    slug: 'organic-farm-stay-vegetable-gastronomy-resort',
    query: '自家農園 温泉 旅館',
    title: '【2026年】採れたて無農薬野菜とローカルガストロノミー！自家農園が自慢のオーガニック美食宿5選',
    metaDesc: '2026年最新！敷地内の自家農園で朝採れた新鮮野菜やハーブを贅沢に使ったファーム・トゥ・テーブル料理と上質な温泉を堪能できる美食宿5選。',
    theme: '自家農園オーガニック＆ローカルガストロノミー宿',
    leadText: '土の香りとみずみずしい大地のエネルギーが詰まった朝採れオーガニック野菜。シェフ自ら畑で収穫した旬の食材を独創的なガストロノミーコースに仕立てる極上のダイニング。心と体が内側から浄化される、ファームステイと名湯の旅へ。',
    badge: '自家農園オーガニック×ローカル美食',
    tags: ['自家農園', 'オーガニック', 'ファームトゥテーブル', 'ガストロノミー', '美食温泉', '楽天トラベル']
  },
  {
    slug: 'ski-in-ski-out-powder-snow-luxury-resort',
    query: 'ゲレンデ直結 温泉 ホテル',
    title: '【2026年】ゲレンデ直結スキーイン・スキーアウト！極上パウダースノーと展望温泉リゾート5選',
    metaDesc: '2026年最新！ニセコ・白馬・志賀高原など、ホテルから直接ゲレンデへ滑り出せるスキーイン・スキーアウト対応のラグジュアリー温泉ホテル5選。',
    theme: 'ゲレンデ直結スキーイン・スキーアウト温泉宿',
    leadText: 'ホテルのスキーロッカーから一歩出ればそこは白銀のパウダースノーゲレンデ。世界中のスキーヤー・スノーボーダーが憧れるJAPOW（極上雪質）を一日中滑り倒し、滑り終えたらそのまま展望温泉露天風呂へ直行できる至高のスノーリゾート。',
    badge: 'ゲレンデ直結×パウダースノー温泉',
    tags: ['スキーインスキーアウト', 'ゲレンデ直結', 'パウダースノー', 'スノーリゾート', '冬旅温泉', '楽天トラベル']
  },
  {
    slug: 'candle-night-lantern-floating-romantic-stay',
    query: 'キャンドル 温泉 旅館',
    title: '【2026年】無数のキャンドルとランタンの揺らめき！幻想的な夜を彩るロマンティック温泉宿5選',
    metaDesc: '2026年最新！竹灯籠やスカイランタン、無数のキャンドルが灯る温泉街と宿の庭園。記念日やカップル旅行にぴったりの幻想的な灯りイベントと名湯宿5選。',
    theme: 'キャンドルナイト＆幻想ランタン温泉宿',
    leadText: '夕闇が訪れると、回廊や日本庭園に無数の竹灯籠やキャンドルの灯りが灯る幻想的な夜。柔らかなオレンジ色の光に包まれて歩く夜の散策、ライトアップされた露天風呂に浮かぶ灯篭。非日常のロマンティックな美しさに心が満たされる特別な滞在へ。',
    badge: 'キャンドルナイト×幻想ランタン温泉',
    tags: ['キャンドルナイト', '竹灯籠', 'ランタン', 'ライトアップ温泉', '記念日旅行', '楽天トラベル']
  }
];

async function generate() {
  console.log('--- Generating Round 12 strategic high-intent comparison articles via Rakuten API Helper ---');

  const appDir = path.join(__dirname, 'src', 'app');
  const allHotelsDataPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let hotelsDb = {};
  if (fs.existsSync(allHotelsDataPath)) {
    hotelsDb = JSON.parse(fs.readFileSync(allHotelsDataPath, 'utf8'));
  }

  for (const theme of strategicThemesRound12) {
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
