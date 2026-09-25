const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const TARGET_THEMES = [
  {
    slug: 'winter-crab-gourmet-luxury-inn-ranking',
    title: '冬の味覚の王様！極上活蟹・松葉ガニ・越前ガニを心ゆくまで堪能できる厳選温泉宿',
    shortTitle: '冬の活蟹・カニ尽くし名宿',
    query: '城崎温泉 カニ',
    metaDesc: '城崎・三国・皆生など冬の味覚の最高峰「松葉ガニ」「越前ガニ」を活蟹会席で贅沢に堪能できる厳選温泉宿を特集。楽天トラベルの最新空室・プラン情報。',
    theme: '冬の味覚・カニ旅',
    intro: '冬の訪れとともに解禁される日本海の味覚の王者、松葉ガニや越前ガニ。生簀から引き揚げて直前に捌くタグ付き活蟹の刺身、香ばしく炭火で焼き上げる焼きガニ、濃厚な蟹味噌と甲羅酒、そして締めの上品なカニ雑炊まで。一度味わえば忘れられない冬の至福を約束する名宿をご紹介します。',
    tags: ['カニ料理', '温泉宿', '冬旅行', 'グルメ旅', '城崎温泉', '松葉ガニ']
  },
  {
    slug: 'snow-viewing-open-air-bath-secret-hotsprings',
    title: '白銀の世界に抱かれる至福！雪見露天風呂と濁り湯が自慢の極上秘湯宿',
    shortTitle: '雪見露天＆にごり湯秘湯',
    query: '万座温泉 にごり湯 露天風呂',
    metaDesc: '乳頭温泉・万座・奥飛騨など一面の白銀世界を望む雪見露天風呂と濃厚なにごり湯が評判の秘湯旅館を徹底ガイド。冬ならではの絶景温泉ステイ。',
    theme: '雪見露天・秘湯',
    intro: 'しんしんと降り積もる雪の中、立ち上る湯けむりに包まれる雪見露天風呂は、冬の日本旅における究極の贅沢。白濁した硫黄泉やエメラルドグリーンの濁り湯に身を委ね、凛とした冷気に火照った肌を冷ましながら雪景色を眺める時間は、日常の喧騒を完全に忘れさせてくれます。',
    tags: ['雪見風呂', '露天風呂', '秘湯', '濁り湯', '万座温泉', '冬温泉']
  },
  {
    slug: 'new-year-sunrise-ocean-view-resorts',
    title: '海から昇る初日の出を客室から望む！年末年始・お正月に行きたい絶景オーシャンビュー宿',
    shortTitle: '初日の出・海一望リゾート',
    query: '伊豆 露天風呂 オーシャンビュー',
    metaDesc: '伊豆・房総・沖縄の水平線から昇る朝日を一望できる絶景リゾート。客室露天風呂やお部屋から初日の出を拝む、新年の幕開けにふさわしい贅沢宿を厳選。',
    theme: '年末年始・初日の出',
    intro: '太平洋の水平線が黄金色に染まり、ゆっくりと昇りゆく太陽の光が水面を照らす瞬間。お部屋のテラスや専用露天風呂に浸かりながら初日の出を迎える体験は、新しい一年のスタートを清々しく特別なものにしてくれます。海と空が溶け合うパノラマビュー自慢の宿をセレクトしました。',
    tags: ['初日の出', 'オーシャンビュー', '客室露天風呂', '伊豆', '正月旅行', 'リゾート']
  },
  {
    slug: 'welcome-baby-family-indoor-pool-hotels',
    title: '赤ちゃん連れも安心！室内温水プール＆充実のキッズアメニティが嬉しいファミリー宿',
    shortTitle: '子連れ・温水プールリゾート',
    query: '那須 ファミリー キッズ プール',
    metaDesc: '那須・熱海・軽井沢など小さな子どもや赤ちゃん連れでも気兼ねなく楽しめるファミリーホテル。室内温水プール、離乳食対応、貸切風呂完備の宿。',
    theme: 'ファミリー・子連れ',
    intro: '小さな子どもを連れての旅行は、荷物の多さや周りへの気兼ねなど心配事が尽きないもの。しかし、充実したキッズパークや天候を気にせず遊べる室内温水プール、部屋食や離乳食の手配が整ったウェルカムベビー認定宿なら、パパママも心からリフレッシュできます。',
    tags: ['子連れ旅行', 'ウェルカムベビー', '温水プール', '那須高原', '家族旅行', '部屋食']
  },
  {
    slug: 'couples-anniversary-private-villa-hanare',
    title: '二人だけの静寂と贅沢！全室離れ・客室露天風呂付き大人の隠れ家おこもり宿',
    shortTitle: '大人の離れ・客室露天宿',
    query: '由布院 離れ 露天風呂付き客室',
    metaDesc: '由布院・箱根・京都嵐山など記念日やカップル旅行に最適な全室離れのプライベートヴィラ。誰にも邪魔されない極上の客室専用露天風呂と部屋食会席。',
    theme: '記念日・カップル',
    intro: '大切なパートナーの誕生日や結婚記念日、日頃の感謝を伝える旅には、プライバシーが徹底的に守られた「全室離れ」のおこもり宿が最適。専用の客室露天風呂で好きな時に何度でも湯浴みを楽しみ、お部屋で味わう季節の創作会席に舌鼓を打つ、至高のプライベートタイムをお届けします。',
    tags: ['記念日', 'カップル旅行', '離れの宿', '客室露天風呂', '由布院', '隠れ家']
  },
  {
    slug: 'private-sauna-cold-bath-retreat-hotels',
    title: '澄んだ冬空の下で極上の外気浴！完全貸切プライベートサウナ＆天然水風呂完備ホテル',
    shortTitle: '貸切サウナ＆水風呂リトリート',
    query: '富士山 サウナ 貸切 バレルサウナ',
    metaDesc: '富士山麓・野尻湖・知床など澄み切った冷気の中で最高のととのい体験。本格薪ストーブ・バレルサウナ・富士の伏流水風呂を備えた極上サウナ宿。',
    theme: 'サウナ・ととのい旅',
    intro: 'サウナーなら誰もが憧れる、自然の中での完全プライベートサウナ。セルフロウリュで熱波を満喫した後は、天然の湧水掛け流し水風呂に身を沈め、澄み渡る冬空と大自然の風を浴びながらインフィニティチェアで外気浴。五感が研ぎ澄まされる本格サウナステイを提案します。',
    tags: ['サウナ', 'バレルサウナ', 'ロウリュ', 'ととのい', '富士山', 'プライベートサウナ']
  },
  {
    slug: 'shinkansen-station-direct-ski-onsen-resorts',
    title: '雪道運転の心配なし！新幹線駅から直結・徒歩圏内のスキー＆天然温泉スノーリゾート',
    shortTitle: '新幹線駅直結スキー温泉',
    query: '越後湯沢駅 温泉 ゲレンデ スキー',
    metaDesc: '越後湯沢や軽井沢など東京から新幹線1本、駅から直結や徒歩圏内でアクセス抜群のスキー＆温泉ホテル。ノーマルタイヤや運転不要で冬の白銀世界を満喫。',
    theme: '車なし・新幹線アクセス',
    intro: '冬の雪道運転が不安な方でも、東京駅から上越新幹線や北陸新幹線で1時間〜1時間半。駅から直結、あるいは無料送迎ですぐにゲレンデと天然温泉にアクセスできる宿なら、重い荷物やレンタカーのチェーン着脱に悩まされることなく、スマートに冬のリゾートステイを楽しめます。',
    tags: ['新幹線アクセス', '越後湯沢', 'スキー', 'スノーボード', '駅直結', '雪見温泉']
  },
  {
    slug: 'solo-travel-in-room-dining-peaceful-hotsprings',
    title: '気兼ねなく一人を謳歌する！お部屋食＆客室専用風呂で過ごす極上ソロ温泉リトリート',
    shortTitle: '一人旅・お部屋食の静寂温泉',
    query: '四万温泉 一人旅 部屋食 温泉',
    metaDesc: '四万・別所・かみのやまなど一人旅歓迎のお宿を厳選。人目を気にせずお部屋でゆっくり味わう会席料理と、名湯を独り占めできる貸切風呂・客室風呂。',
    theme: '一人旅・リトリート',
    intro: '誰にも気を使わず、自分の気の向くままに湯に浸かり、読書に耽り、お部屋に運ばれる温かい料理をゆっくりと味わう。ひとり旅だからこそ味わえる深い静寂と贅沢な時間は、心身の疲れを芯から癒やしてくれます。一人旅歓迎プランが充実した信頼の名宿をご案内します。',
    tags: ['一人旅', 'ソロ旅', '部屋食', '四万温泉', 'リトリート', '温泉ワーケーション']
  }
];

async function generateStrategicArticles() {
  console.log('--- Fetching Rakuten API directly and generating high-intent comparison articles ---');
  const appDir = path.join(__dirname, 'src', 'app');
  const allHotelsDbPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let hotelsDb = {};
  if (fs.existsSync(allHotelsDbPath)) {
    hotelsDb = JSON.parse(fs.readFileSync(allHotelsDbPath, 'utf8'));
  }

  for (const theme of TARGET_THEMES) {
    console.log(`Searching Rakuten API for: "${theme.query}"...`);
    try {
      const hotels = await searchRakutenHotels(theme.query, 3);
      await sleep(1200);

      if (!hotels || hotels.length === 0) {
        console.warn(`No hotels found for query: ${theme.query}`);
        continue;
      }

      // Save to hotels DB
      hotels.forEach(h => {
        hotelsDb[h.hotelNo] = {
          hotelName: h.hotelName,
          hotelImageUrl: h.hotelImageUrl || h.hotelThumbnailUrl,
          hotelMinCharge: h.hotelMinCharge,
          reviewAverage: h.reviewAverage,
          address1: h.address1,
          address2: h.address2,
          access: h.access,
          hotelSpecial: h.hotelSpecial,
          affiliateUrl: h.affiliateUrl
        };
      });

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
          "text": "人気のハイシーズンや週末・連休は2〜3ヶ月前からの予約が推奨されます。楽天トラベルの「5と0のつく日セール」や「ふるさと納税クーポン」を事前獲得しておくことで、最もお得に予約いただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "楽天トラベルのクーポンやポイント還元は併用できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、楽天トラベルのキャンペーンクーポンや楽天ポイント、ふるさと納税宿泊クーポンは規定の範囲内で組み合わせてご利用いただけます。"
        }
      }
    ]
  };

  const hotels = ${JSON.stringify(hotels, null, 2)};

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* パンくず */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center flex-wrap gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/features" className="hover:text-teal-800 transition">特集一覧</Link>
        <span>/</span>
        <span className="text-emerald-950/40 line-clamp-1">${theme.shortTitle}</span>
      </nav>

      {/* ヒーローヘッダー */}
      <div className="border border-emerald-950/10 bg-white rounded-3xl p-6 md:p-12 shadow-sm space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              ${theme.theme} 特選ガイド
            </span>
            <span className="text-[10px] text-slate-400 font-bold">2026年最新版</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
            ${theme.title}
          </h1>
          <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium pt-2">
            ${theme.intro}
          </p>
        </div>

        {/* クーポン特大バナー */}
        <SpecialCouponBanner />

        {/* 厳選ホテル・宿ランキング比較一覧 */}
        <div className="space-y-8 pt-4">
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2 border-b border-emerald-950/10 pb-3">
            <span>🏆</span>
            <span>編集部が厳選したおすすめ宿泊施設 TOP3</span>
          </h2>

          <div className="space-y-8">
            {hotels.map((h, idx) => (
              <div
                key={h.hotelNo}
                className="border border-emerald-950/10 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-md transition space-y-4"
              >
                {/* 宿バッジ・タイトル */}
                <div className="bg-emerald-50/50 p-5 border-b border-emerald-950/5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-amber-600 text-white font-black flex items-center justify-center text-sm">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="text-base md:text-lg font-black text-emerald-950 font-journal-serif">
                        {h.hotelName}
                      </h3>
                      <p className="text-[11px] text-teal-900/60 font-medium">
                        {h.address1} {h.address2}
                      </p>
                    </div>
                  </div>
                  {h.reviewAverage > 0 && (
                    <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-amber-300 shadow-sm">
                      <span className="text-amber-500 font-black text-xs">⭐ {h.reviewAverage}</span>
                      <span className="text-[10px] text-slate-500 font-bold">({h.reviewCount}件)</span>
                    </div>
                  )}
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  {/* 画像 */}
                  <div className="md:col-span-1 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative">
                    {h.hotelImageUrl ? (
                      <img
                        src={h.hotelImageUrl}
                        alt={h.hotelName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">No Image</div>
                    )}
                  </div>

                  {/* 宿の特徴・アクセス・料金 */}
                  <div className="md:col-span-2 space-y-4">
                    {h.hotelSpecial && (
                      <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium bg-teal-50/40 p-4 rounded-2xl border border-teal-900/10">
                        ✨ {h.hotelSpecial}
                      </p>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="space-y-1">
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase">アクセス</span>
                        <p className="text-slate-700 font-medium">{h.access || h.nearestStation || '詳細はプランページをご確認ください'}</p>
                      </div>
                      {h.hotelMinCharge > 0 && (
                        <div className="space-y-1">
                          <span className="text-[10px] font-extrabold text-slate-400 uppercase">宿泊目安料金</span>
                          <p className="text-amber-700 font-black text-base">
                            ¥{Number(h.hotelMinCharge).toLocaleString()}〜 <span className="text-[10px] text-slate-500 font-normal">/ 人</span>
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="pt-2">
                      <a
                        href={h.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full sm:w-auto text-center px-6 py-3.5 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-500 hover:to-amber-700 text-white font-black text-xs md:text-sm rounded-2xl shadow-md transition transform hover:-translate-y-0.5"
                      >
                        ✈️ {h.hotelName} の最新空室＆宿泊プランを見る
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* シェアボタン */}
        <div className="pt-6 border-t border-emerald-950/5">
          <ShareButtons
            title="${theme.title}"
            url="https://croud-travel.pages.dev/${theme.slug}"
          />
        </div>

        {/* よくある質問 FAQ */}
        <div className="pt-8 border-t border-emerald-950/10 space-y-4">
          <h3 className="text-lg font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span>
            <span>${theme.theme}に関するよくある質問</span>
          </h3>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. ${theme.theme}の予約でお得な方法はありますか？</h4>
              <p className="text-emerald-950/80 leading-relaxed">
                楽天トラベルの「5と0のつく日セール」による最大20%割引や、実質2,000円の自己負担で宿泊できる「楽天ふるさと納税宿泊クーポン」の併用が最もお得でおすすめです。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-teal-50/30 border border-teal-900/10 space-y-1.5">
              <h4 className="font-bold text-teal-950">Q. キャンセル料や予約変更はどうなっていますか？</h4>
              <p className="text-emerald-950/80 leading-relaxed">
                各宿泊施設および予約プランによってキャンセル規定が異なります。ご予約完了前に楽天トラベルの詳細ページにてキャンセルポリシーを必ずご確認ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

      fs.writeFileSync(path.join(pageDir, 'page.tsx'), pageCode, 'utf8');
      console.log(`Generated: src/app/${theme.slug}/page.tsx`);
    } catch (err) {
      console.error(`Error processing theme ${theme.slug}:`, err);
    }
  }

  // Update hotels DB
  fs.writeFileSync(allHotelsDbPath, JSON.stringify(hotelsDb, null, 2), 'utf8');
  console.log(`Updated hotels DB at ${allHotelsDbPath}`);
}

generateStrategicArticles().catch(console.error);
