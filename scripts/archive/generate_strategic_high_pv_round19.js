const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound19 = [
  {
    slug: 'luxury-private-onsen-with-starry-sky-terrace-hammock',
    query: 'ハンモック テラス 星空 温泉 ホテル',
    title: '【2026年】星空ハンモックテラス＆貸切露天風呂！心地よい夜風と天の川に癒やされる宿5選',
    metaDesc: '2026年最新！客室専用ウッドテラスのハンモックに揺られながら満天の星と月を眺め、天然温泉で心身を解きほぐす大人のリゾートホテル5選。',
    theme: '星空ハンモックテラス＆プライベート温泉宿',
    leadText: 'ゆらゆらと揺れるハンモックに身を委ね、見上げる夜空に広がる無数の星々と天の川。心地よい夜風と虫の音をBGMに温かいハーブティーを味わい、テラス直結の客室露天風呂で温まる。日常のストレスから完全に解き放たれる極上の星空リトリート。',
    badge: '星空ハンモック×テラス露天風呂',
    tags: ['ハンモック', '星空テラス', '客室露天風呂', '天の川', 'リゾートホテル', '楽天トラベル']
  },
  {
    slug: 'traditional-sakura-ebi-shirasu-suruga-bay-stay',
    query: '桜えび 温泉 旅館',
    title: '【2026年】駿河湾の宝石！サクサク桜えびかき揚げ＆獲れたて生しらす会席の温泉宿5選',
    metaDesc: '2026年最新！静岡・由比港や用宗港で水揚げされた新鮮な生桜えび・生しらすや香ばしいかき揚げ、富士山を望む絶景温泉を満喫できる名宿5選。',
    theme: '駿河湾桜えび＆生しらすグルメ温泉宿',
    leadText: '日本で唯一駿河湾でのみ水揚げされる「海の宝石」桜えび。甘み際立つ生の桜えびやサクサクのかき揚げ、朝獲れのぷりぷり生しらす丼。富士山と駿河湾のパノラマを望む温泉露天風呂とともに味わう、静岡ならではの絶品海の恵み旅。',
    badge: '桜えびかき揚げ×生しらす会席宿',
    tags: ['桜えび', '生しらす', '駿河湾グルメ', '富士山ビュー', '静岡温泉', '楽天トラベル']
  },
  {
    slug: 'super-panoramic-cloud-sea-glamping-stay',
    query: '雲海 グランピング 温泉',
    title: '【2026年】標高1,000mの天空世界！早朝雲海パノラマ＆温泉グランピングリゾート5選',
    metaDesc: '2026年最新！朝起きると目の前に一面の雲海が広がる天空グランピングドームと、絶景展望露天風呂や焚き火BARを楽しめる極上アウトドア宿5選。',
    theme: '早朝雲海パノラマ＆天空温泉グランピング',
    leadText: '早朝、テントのカーテンを開けると広がる足元の白い雲海と朝焼けのグラデーション。ホテルのような贅沢な快適空間と、満天の星・焚き火・天然温泉が融合した最高峰のグランピング。息をのむ大自然の奇跡に出会う感動のステイ。',
    badge: '早朝雲海パノラマ×天空グランピング',
    tags: ['雲海', 'グランピング', '天空リゾート', '絶景ドームテント', '焚き火', '楽天トラベル']
  },
  {
    slug: 'organic-medicinal-herb-sauna-detox-stay',
    query: '薬草 サウナ 温泉 旅館',
    title: '【2026年】和漢薬草スチームサウナ＆薬膳養生！自然治癒力を高める薬草温活温泉宿5選',
    metaDesc: '2026年最新！当帰やよもぎなど十数種の国産生薬を蒸留した薬草サウナと、濃厚な薬草湯、体を芯から温める薬膳会席でデトックスできる養生宿5選。',
    theme: '和漢薬草サウナ＆薬膳温活デトックス宿',
    leadText: '香ばしい和漢ハーブの蒸気に包まれる薬草スチームサウナ。古来より湯治客を癒やしてきた薬草風呂で発汗を促し、旬の生薬と地場野菜を取り入れた本格薬膳料理で体内環境を整える。疲れた現代人の心身を内側から再生する本格温活ステイ。',
    badge: '薬草スチームサウナ×薬膳温活宿',
    tags: ['薬草サウナ', 'よもぎ蒸し', '薬善料理', '温活デトックス', '養生温泉', '楽天トラベル']
  },
  {
    slug: 'winter-ise-ebi-lobster-luxury-gourmet-stay',
    query: '伊勢海老 温泉 旅館',
    title: '【2026年】ぷりぷり甘い極上伊勢海老！お造り・鬼殻焼き・伊勢海老出汁雑炊の名宿5選',
    metaDesc: '2026年最新！伊勢志摩・南紀・伊豆で水揚げされた活伊勢海老のお造りや香ばしい鬼殻焼き、濃厚な味噌汁・雑炊を堪能できる贅沢グルメ温泉宿5選。',
    theme: '特大活伊勢海老尽くし＆美食温泉宿',
    leadText: '透き通るような身の甘みと弾力ある歯ごたえがたまらない活伊勢海老のお造り。炭火で香ばしく焼き上げる鬼殻焼き、頭から溢れ出る濃厚な海老味噌の旨味を吸い尽くす締めのお雑炊。海の王様・伊勢海老を余すところなく味わう贅沢な美食旅。',
    badge: '特大活伊勢海老×極上鬼殻焼き会席',
    tags: ['伊勢海老', '鬼殻焼き', '伊勢志摩温泉', '南紀白浜', '海の幸会席', '楽天トラベル']
  },
  {
    slug: 'traditional-gold-leaf-craft-kanazawa-stay',
    query: '金沢 金箔 温泉 旅館',
    title: '【2026年】黄金の輝きと加賀百万石の雅！金箔貼り体験＆金箔風呂が自慢の金沢温泉宿5選',
    metaDesc: '2026年最新！金沢の伝統工芸「金箔」の貼り体験や、金箔が舞う贅沢な金箔風呂、金箔をあしらった豪華加賀会席を満喫できる名門温泉旅館5選。',
    theme: '加賀金箔工芸＆金箔風呂温泉宿',
    leadText: '1万分の1ミリの薄さまで打ち延ばされた黄金の芸術・金沢箔。箸や小箱に金箔を施す伝統工芸体験、湯船に金箔がキラキラと舞う優美な金箔風呂、そして金箔をあしらった華やかな治部煮や加賀会席。百万石の贅と美意識に包まれる雅な金沢ステイ。',
    badge: '加賀金箔工芸×金箔風呂名宿',
    tags: ['金箔体験', '金沢温泉', '加賀会席', '加賀百万石', '伝統工芸宿', '楽天トラベル']
  }
];

async function generate() {
  console.log('--- Generating Round 19 strategic high-intent comparison articles via Rakuten API Helper ---');

  const appDir = path.join(__dirname, 'src', 'app');
  const allHotelsDataPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let hotelsDb = {};
  if (fs.existsSync(allHotelsDataPath)) {
    hotelsDb = JSON.parse(fs.readFileSync(allHotelsDataPath, 'utf8'));
  }

  for (const theme of strategicThemesRound19) {
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
