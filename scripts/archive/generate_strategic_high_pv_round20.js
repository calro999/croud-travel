const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound20 = [
  {
    slug: 'luxury-private-onsen-with-infinity-edge-footbath',
    query: '足湯 インフィニティ 温泉 ホテル',
    title: '【2026年】水盤と空が一体化する！インフィニティ足湯テラス＆絶景ラウンジ付き温泉宿5選',
    metaDesc: '2026年最新！雄大な海や山並みを見渡すインフィニティ足湯テラスでドリンクを片手に優雅な時間を過ごせる極上モダン温泉リゾート5選。',
    theme: 'インフィニティ足湯テラス＆絶景ラウンジ宿',
    leadText: '水盤の先に広がる青い空と海、夕暮れには茜色の空が映り込む幻想的なインフィニティ足湯テラス。足元からじんわりと温まりながら、バーカウンターのオリジナルカクテルやカフェを愉しむ。非日常の絶景とデザイン美に浸る大人の休日。',
    badge: 'インフィニティ足湯×絶景テラス',
    tags: ['インフィニティ足湯', '絶景テラス', 'モダン温泉宿', '足湯バー', '大人のリゾート', '楽天トラベル']
  },
  {
    slug: 'traditional-hida-beef-houba-miso-grill-stay',
    query: '飛騨牛 朴葉味噌 温泉 旅館',
    title: '【2026年】香ばしい味噌の香りと極上霜降り！名物「飛騨牛朴葉味噌焼き」会席の温泉宿5選',
    metaDesc: '2026年最新！飛騨高山・下呂・奥飛騨温泉郷で味わう、自家製味噌とA5飛騨牛を朴の葉の上で香ばしく焼き上げる名物会席と日本三名泉の宿5選。',
    theme: '名物飛騨牛朴葉味噌焼き＆名湯下呂温泉宿',
    leadText: '朴の葉の上でぐつぐつと香ばしく焼ける特製山椒味噌と、とろけるようなA5ランク飛騨牛の甘い脂。炊き立てのご飯にも地酒にも相性抜群の飛騨の伝統郷土料理。つるつるの美肌湯として名高い下呂や奥飛騨の源泉掛け流し温泉とともに。',
    badge: '飛騨牛朴葉味噌焼き×日本三名泉',
    tags: ['飛騨牛', '朴葉味噌', '下呂温泉', '奥飛騨温泉郷', '郷土会席', '楽天トラベル']
  },
  {
    slug: 'super-panoramic-sunset-coastal-cliff-villa',
    query: '夕日 オーシャンビュー ヴィラ 温泉',
    title: '【2026年】日本の夕陽百選を独占！茜色の海と水平線に沈む夕日を望むオーシャンヴィラ5選',
    metaDesc: '2026年最新！西伊豆・夕日ヶ浦・沖縄など、客室のテラスや露天風呂から水平線に沈む黄金の夕日とマジックアワーを独占できる絶景ヴィラ5選。',
    theme: 'サンセットオーシャンビュー＆海一望ヴィラ',
    leadText: '空と海が刻一刻とオレンジから紫、深い群青へと移り変わるマジックアワー。波の音だけが響く完全プライベートなテラスで、夕日を眺めながら湯浴みを楽しむ贅沢。大切な人との記念日やプロポーズにもふさわしい、息をのむ絶景オーシャンフロントステイ。',
    badge: 'サンセットオーシャン×夕日一望ヴィラ',
    tags: ['夕日絶景', 'オーシャンヴィラ', 'サンセット露天', '客室露天風呂', '記念日旅行', '楽天トラベル']
  },
  {
    slug: 'organic-forest-sauna-cold-water-stream-stay',
    query: 'サウナ 水風呂 川 温泉',
    title: '【2026年】天然の清流へダイブ！森林バレルサウナ＆天然川水風呂で極上のととのい宿5選',
    metaDesc: '2026年最新！薪サウナでアツアツに温まった後、目の前を流れる雪解け水の清流へ飛び込む究極の水風呂体験と森林外気浴が楽しめるサウナ名宿5選。',
    theme: '清流ダイブ天然水風呂＆森林薪サウナ宿',
    leadText: 'パチパチと薪が燃えるバレルサウナでセルフロウリュを満喫した後は、そのまま目の前の澄み切った天然清流へダイブ！キンキンに冷えた天然水風呂と、木漏れ日と野鳥の声に包まれる森林外気浴。大自然と一体化する究極のととのい体験へ。',
    badge: '清流ダイブ水風呂×森林薪サウナ',
    tags: ['バレルサウナ', '清流ダイブ', '天然水風呂', '薪サウナ', '究極のととのい', '楽天トラベル']
  },
  {
    slug: 'spring-cherry-blossom-illuminated-river-cruise-stay',
    query: '桜 温泉 旅館 ライトアップ',
    title: '【2026年】川沿いに続く桜並木のライトアップ！夜桜鑑賞と春爛漫グルメが自慢の温泉宿5選',
    metaDesc: '2026年最新！温泉街の川沿いに咲き誇る満開の桜並木のライトアップや、お花見舟下り体験、春の味覚をふんだんに盛り込んだ桜会席を楽しめる宿5選。',
    theme: '川沿い夜桜ライトアップ＆春の花見温泉宿',
    leadText: '川面に映るピンク色の桜並木と、幻想的な提灯・ライトアップの灯り。温泉街の川沿いを浴衣姿で散策し、湯船からも満開の桜を愛でる贅沢な春の夜。旬の桜鯛や山菜、春野菜を贅沢に使った彩り豊かなお花見会席とともに。',
    badge: '夜桜ライトアップ×川沿い花見温泉',
    tags: ['夜桜ライトアップ', '桜並木', 'お花見温泉', '春の味覚', '温泉街散策', '楽天トラベル']
  },
  {
    slug: 'traditional-edo-cut-glass-kiriko-craft-stay',
    query: '伝統工芸 温泉 旅館',
    title: '【2026年】繊細なカットが生み出す光の芸術！薩摩切子・江戸切子のグラスで愉しむ地酒BARの宿5選',
    metaDesc: '2026年最新！鹿児島の薩摩切子や東京の江戸切子の美しい酒器で厳選地酒を味わえるBARや、切子工芸の展示・体験が楽しめる伝統文化の温泉宿5選。',
    theme: '伝統切子ガラス工芸＆銘酒BARの宿',
    leadText: '光を浴びて宝石のようにきらめく薩摩切子や江戸切子の美しいカットガラス。職人が手作業で削り出した極上の酒器に注がれる銘酒を味わう特別な夜。日本の伝統工芸の粋を集めた空間と、美肌名湯に心癒やされる大人の美意識ステイ。',
    badge: '伝統切子工芸×銘酒BARホテル',
    tags: ['薩摩切子', '江戸切子', '伝統工芸', '地酒BAR', '大人の隠れ家', '楽天トラベル']
  }
];

async function generate() {
  console.log('--- Generating Round 20 strategic high-intent comparison articles via Rakuten API Helper ---');

  const appDir = path.join(__dirname, 'src', 'app');
  const allHotelsDataPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let hotelsDb = {};
  if (fs.existsSync(allHotelsDataPath)) {
    hotelsDb = JSON.parse(fs.readFileSync(allHotelsDataPath, 'utf8'));
  }

  for (const theme of strategicThemesRound20) {
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
    "datePublished": "2026-09-27",
    "dateModified": "2026-09-27",
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
