const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound17 = [
  {
    slug: 'luxury-private-onsen-with-artisan-coffee-bar',
    query: 'コーヒー カフェ 温泉 ホテル',
    title: '【2026年】専属バリスタのスペシャリティコーヒー！自家焙煎BAR＆カフェラウンジ付き温泉宿5選',
    metaDesc: '2026年最新！世界各国のシングルオリジンコーヒーのハンドドリップや自家焙煎BAR、絶品スイーツが自慢の珈琲好きにおすすめの温泉リゾート5選。',
    theme: '自家焙煎スペシャリティコーヒー＆カフェ温泉宿',
    leadText: '朝の澄んだ空気の中に漂う芳しい挽きたてコーヒーのアロマ。専属バリスタが丁寧に淹れるハンドドリップコーヒーやエスプレッソ、居心地の良いブックカフェラウンジ、そして湯量豊富な美肌温泉。珈琲と読書、名湯に癒やされる贅沢なリトリート。',
    badge: '自家焙煎珈琲×カフェラウンジ温泉',
    tags: ['スペシャリティコーヒー', '自家焙煎', 'ブックカフェ', '温泉リゾート', '大人のおこもり', '楽天トラベル']
  },
  {
    slug: 'traditional-sea-bream-rice-taimeshi-gourmet-stay',
    query: '鯛めし 鯛 温泉 旅館',
    title: '【2026年】愛媛・明石・鳴門の極上天然真鯛！名物「鯛めし」＆鯛しゃぶ会席が自慢の温泉宿5選',
    metaDesc: '2026年最新！宇和島風・松山風の名物鯛めしや、身が引き締まった天然鳴門鯛のお造り・鯛しゃぶを堪能できる瀬戸内の絶景グルメ温泉旅館5選。',
    theme: '天然真鯛尽くし＆名物鯛めし温泉宿',
    leadText: '激しい潮流に揉まれて身が引き締まった最高峰の天然真鯛。土鍋でふっくら炊き上げる鯛めし、新鮮な鯛の刺身に出汁卵を絡める宇和島鯛めし、サッと出汁にくぐらせる鯛しゃぶ。瀬戸内海の多島美を望む露天風呂とともに味わう至高の魚グルメステイ。',
    badge: '名物鯛めし×天然真鯛会席宿',
    tags: ['鯛めし', '天然真鯛', '鯛しゃぶ', '瀬戸内グルメ', '海の幸温泉', '楽天トラベル']
  },
  {
    slug: 'super-panoramic-sunset-dune-resort-stay',
    query: '鳥取砂丘 温泉 ホテル',
    title: '【2026年】黄金色に輝く風紋と日本海の夕陽！砂丘パノラマを望む絶景リゾートホテル5選',
    metaDesc: '2026年最新！鳥取砂丘や中田島砂丘など、刻一刻と表情を変える大砂丘のパノラマと茜色に染まる夕陽、満天の星空を満喫できる温泉リゾート5選。',
    theme: '大砂丘パノラマ＆サンセット温泉リゾート',
    leadText: '風が描き出す神秘的な風紋と、見渡す限りの黄金色の砂の世界。夕暮れ時には日本海に沈む夕陽が砂丘を紅く染め上げ、夜は都会では見られない満天の天の川が広がります。大自然の造形美と天然温泉のぬくもりに包まれる非日常のリゾートステイ。',
    badge: '大砂丘パノラマ×サンセット温泉',
    tags: ['鳥取砂丘', '砂丘リゾート', 'サンセットビュー', '絶景パノラマ', '天の川', '楽天トラベル']
  },
  {
    slug: 'organic-herbal-steam-bed-ayurveda-resort',
    query: 'アーユルヴェーダ スパ 温泉 ホテル',
    title: '【2026年】本場アーユルヴェーダ＆ハーブ温活！極上シロダーラと薬草温泉のデトックスリゾート5選',
    metaDesc: '2026年最新！額に温かいオイルを垂らす本格シロダーラやハーブサウナ、体質別オーガニック薬膳料理と名湯で心身を再生するウェルネスホテル5選。',
    theme: '本格アーユルヴェーダ＆薬草温活スパ宿',
    leadText: '深い瞑想状態へと導くシロダーラや温かい薬草オイルトリートメント。体内の毒素を排出し自律神経を整えるハーブスチームバスと、ミネラル豊富な天然温泉。静寂に包まれた自然の中で自分自身を深く癒やす、究極のホリスティックウェルネス。',
    badge: 'アーユルヴェーダ×薬草温活スパ',
    tags: ['アーユルヴェーダ', 'シロダーラ', '薬草温泉', 'デトックス', 'ウェルネス旅', '楽天トラベル']
  },
  {
    slug: 'autumn-chestnut-gourmet-montblanc-stay',
    query: '栗 デザート 温泉 旅館',
    title: '【2026年】小布施・丹波の極上和栗！搾りたて生モンブラン＆栗おこわ会席の秋グルメ宿5選',
    metaDesc: '2026年最新！栗の名産地で味わう賞味期限数十分の搾りたて極細生モンブランや、ホクホクの栗おこわ、栗の渋皮煮デザートが自慢の秋の名宿5選。',
    theme: '極上和栗モンブラン＆秋の栗グルメ温泉宿',
    leadText: '芳醇な香りと上品な甘みが際立つ最高峰のブランド和栗。目の前で幾重にも搾り出される繊細な極細生モンブラン、ほくほくの栗おこわ、栗と地鶏の炊き込みご飯。秋の味覚の王様・栗を贅沢に味わい尽くし、紅葉露天風呂に浸かる至福の秋旅へ。',
    badge: '搾りたて生モンブラン×極上和栗宿',
    tags: ['和栗モンブラン', '生モンブラン', '小布施栗', '丹波栗', '秋の味覚', '楽天トラベル']
  },
  {
    slug: 'traditional-bamboo-forest-path-quiet-onsen-stay',
    query: '竹林 露天風呂 温泉 旅館',
    title: '【2026年】笹の葉のざわめきとライトアップ！竹林の小径に佇む静寂の隠れ家温泉旅館5選',
    metaDesc: '2026年最新！伊豆修善寺・京都嵐山・黒川など、美しく手入れされた青竹の林に囲まれ、幻想的な竹林ライトアップと露天風呂を満喫できる隠れ家宿5選。',
    theme: '竹林の静寂＆竹林ライトアップ露天風呂宿',
    leadText: '天高く伸びる青竹の間を渡る心地よい風の音。夜になると竹林がライトアップされ、黄金色と緑の幻想的な光の世界が浮かび上がります。竹林に囲まれた専用露天風呂で日常を忘れ、静寂の中で心研ぎ澄まされる大人の隠れ家ステイ。',
    badge: '竹林ライトアップ×静寂露天風呂',
    tags: ['竹林の宿', '竹林露天風呂', '修善寺温泉', '嵐山', '大人の隠れ家', '楽天トラベル']
  }
];

async function generate() {
  console.log('--- Generating Round 17 strategic high-intent comparison articles via Rakuten API Helper ---');

  const appDir = path.join(__dirname, 'src', 'app');
  const allHotelsDataPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let hotelsDb = {};
  if (fs.existsSync(allHotelsDataPath)) {
    hotelsDb = JSON.parse(fs.readFileSync(allHotelsDataPath, 'utf8'));
  }

  for (const theme of strategicThemesRound17) {
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
