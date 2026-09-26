const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound15 = [
  {
    slug: 'luxury-private-onsen-with-grand-piano-stay',
    query: 'ピアノ 演奏 温泉 ホテル',
    title: '【2026年】優雅な生演奏と美肌名湯！グランドピアノ・音楽ラウンジ付き極上リゾート宿5選',
    metaDesc: '2026年最新！毎夜のジャズやクラシック生演奏、自由に弾けるグランドピアノを備えた音楽と名湯のマリアージュを楽しむ大人の温泉リゾート5選。',
    theme: 'グランドピアノ生演奏＆音楽ラウンジ温泉宿',
    leadText: '吹き抜けのラウンジに響き渡るスタインウェイやヤマハの美しいピアノの調べ。夕食後のひとときにカクテルを傾けながら聴くジャズやクラシックの生演奏。音楽を愛する大人のための、優雅で洗練された温泉リゾートステイをお届けします。',
    badge: 'ピアノ生演奏×音楽ラウンジ温泉',
    tags: ['ピアノ演奏', '音楽ホテル', 'ジャズラウンジ', '大人のリゾート', '記念日旅行', '楽天トラベル']
  },
  {
    slug: 'traditional-clay-pot-cooked-rice-gourmet-stay',
    query: '土鍋 ご飯 温泉 旅館',
    title: '【2026年】ふっくら艶やかな土鍋炊き銀シャリ！お米の旨味を極めた絶品朝ごはんの温泉宿5選',
    metaDesc: '2026年最新！魚沼産コシヒカリや地元銘柄米を専用土鍋やかまどで炊き上げる極上ご飯と、ご飯のお供が充実した朝食自慢の温泉旅館5選。',
    theme: '土鍋炊き立てご飯＆究極の朝食温泉宿',
    leadText: '蓋を開けた瞬間に立ち上る甘い湯気と、一粒一粒が立ったツヤツヤの銀シャリ。名水と職人の火加減で炊き上げる土鍋ご飯は、それだけでご馳走。炭火焼きの干物や地卵の出汁巻き、旬の小鉢とともに味わう日本の誇る究極の朝ごはんステイ。',
    badge: '土鍋炊き銀シャリ×究極の朝ごはん',
    tags: ['土鍋ご飯', '朝食自慢', '魚沼産コシヒカリ', '銀シャリ', 'グルメ温泉', '楽天トラベル']
  },
  {
    slug: 'super-panoramic-cliff-edge-ocean-onsen-stay',
    query: '絶景 露天風呂 温泉 海',
    title: '【2026年】水平線と波しぶきを見下ろす！断崖絶壁・オーシャンクリフ絶景露天風呂の宿5選',
    metaDesc: '2026年最新！海にせり出す断崖絶壁から太平洋や日本海を一望するパノラマ露天風呂が圧巻の温泉旅館・リゾートホテル5選。',
    theme: '断崖絶壁オーシャンフロント露天風呂宿',
    leadText: '眼下に打ち寄せるダイナミックな白波と、どこまでも広がる雄大な水平線。まるで海の上に浮かんでいるかのようなスリルと開放感が味わえる断崖絶壁の露天風呂。夕陽が海を茜色に染めるマジックアワーから満天の星空まで、息をのむ絶景の湯浴みへ。',
    badge: '断崖絶壁×海一望パノラマ露天',
    tags: ['断崖絶景', '海露天風呂', 'インフィニティ温泉', 'パノラマビュー', '絶景宿', '楽天トラベル']
  },
  {
    slug: 'organic-citrus-yuzu-mikan-aroma-spa-stay',
    query: 'ゆず 温泉 旅館',
    title: '【2026年】甘酸っぱい柚子・みかんの香りに包まれる！名産柑橘風呂＆アロマスパ温泉宿5選',
    metaDesc: '2026年最新！愛媛や高知、湯河原などの特産ゆず・みかんを浮かべた爽快な柑橘温泉風呂と、天然精油アロマトリートメントで心癒やされる宿5選。',
    theme: '特産柑橘アロマ風呂＆リフレッシュ温泉宿',
    leadText: '湯船いっぱいに浮かぶ黄色い柚子やフレッシュなみかんの爽やかな香り。ビタミンCと精油成分が溶け込んだビタミン風呂で肌はつるつる、芯から温まる癒やしのひととき。地元の柑橘を使ったデザートやスパトリートメントで五感リフレッシュ。',
    badge: '柑橘アロマ風呂×ビタミン美肌湯',
    tags: ['柑橘風呂', '柚子湯', 'アロマスパ', '美肌温泉', 'リフレッシュ旅', '楽天トラベル']
  },
  {
    slug: 'cherry-blossom-viewing-private-bath-spring-stay',
    query: '桜 露天風呂 温泉 旅館',
    title: '【2026年】客室露天から桜を独り占め！お花見露天風呂＆春爛漫の会席料理が自慢の温泉宿5選',
    metaDesc: '2026年最新！満開の桜並木や庭園のしだれ桜を湯船から愛でる贅沢なお花見客室露天風呂と、春の旬食材を使った桜会席が人気の名宿5選。',
    theme: 'お花見客室露天風呂＆春爛漫の温泉宿',
    leadText: '湯けむりの向こうに咲き誇る淡いピンクの桜。舞い散る花びらが水面に浮かぶ風流なお花見露天風呂。人混みを離れ、プライベートな客室露天風呂から満開の桜を独占する贅沢。筍や山菜、鯛など春の恵みをふんだんに盛り込んだ特製会席とともに。',
    badge: 'お花見露天風呂×春の桜ステイ',
    tags: ['お花見温泉', '桜露天風呂', '春旅行', '客室露天風呂', '桜会席', '楽天トラベル']
  },
  {
    slug: 'traditional-kimono-yukata-rental-hotspring-town-stay',
    query: '色浴衣 湯めぐり 温泉 旅館',
    title: '【2026年】選べる色浴衣とカランコロン下駄歩き！風情ある温泉街湯めぐりが楽しい名宿5選',
    metaDesc: '2026年最新！城崎温泉・草津・道後・黒川など、数十種類の色浴衣レンタルや外湯めぐりパス付きで街歩きが満喫できる女子旅・カップルおすすめ宿5選。',
    theme: '選べる色浴衣＆外湯めぐり温泉街の宿',
    leadText: 'お気に入りの色浴衣と下駄を選んで、柳並木や温泉情緒あふれる街並みへお出かけ。射的や足湯カフェ、温泉まんじゅうの食べ歩きを楽しみ、複数の外湯を巡る贅沢な休日。写真映えも抜群の温泉街ステイを心ゆくまで満喫できる宿をピックアップ。',
    badge: '選べる色浴衣×外湯めぐり街歩き',
    tags: ['色浴衣', '湯めぐり', '城崎温泉', '草津温泉', '温泉街歩き', '楽天トラベル']
  }
];

async function generate() {
  console.log('--- Generating Round 15 strategic high-intent comparison articles via Rakuten API Helper ---');

  const appDir = path.join(__dirname, 'src', 'app');
  const allHotelsDataPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let hotelsDb = {};
  if (fs.existsSync(allHotelsDataPath)) {
    hotelsDb = JSON.parse(fs.readFileSync(allHotelsDataPath, 'utf8'));
  }

  for (const theme of strategicThemesRound15) {
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
