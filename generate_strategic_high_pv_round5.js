const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const TARGET_THEMES_ROUND5 = [
  {
    slug: 'book-hotel-library-reading-retreat-stay',
    title: '数万冊の本に囲まれて贅沢な夜更かし！全国の泊まれる図書館＆ブックホテル特集',
    shortTitle: 'ブックホテル＆読書リトリート',
    query: '本 温泉 ホテル',
    metaDesc: '箱根・京都・湯河原など壁一面の本棚や隠れ家リーディングスペースを備えた話題のブックホテル。名湯に浸かり、珈琲や地酒を片手に読書に没頭する旅。',
    theme: 'ブックホテル・読書旅',
    intro: '静まり返った夜、ふかふかのソファやベッドに深く腰掛け、普段はなかなか読めなかった長編小説や美しいアート写真集をめくる。温泉で温まった体に心地よい読書灯の光。時間を忘れて活字の世界に没入できる、知的好奇心を満たすおこもりステイへご案内します。',
    tags: ['ブックホテル', '読書リトリート', '泊まれる図書館', '箱根本箱', '温泉ホテル', '一人旅']
  },
  {
    slug: 'kuroge-wagyu-teppanyaki-gourmet-luxury-stay',
    title: '目の前でジュワッと焼き上げる最高峰の霜降り！ブランド黒毛和牛・極上鉄板焼き会席の宿',
    shortTitle: '黒毛和牛鉄板焼き＆美食宿',
    query: '黒毛和牛 鉄板焼き 温泉 旅館',
    metaDesc: '松阪牛・近江牛・米沢牛・神戸牛など日本屈指の銘柄牛をシェフが目の前で焼き上げる鉄板焼きカウンター。上質な脂の甘みと赤身の旨味を堪能する極上宿。',
    theme: '黒毛和牛・鉄板焼き美食旅',
    intro: 'カウンター越しに響く肉の焼ける心地よい音と立ち上る芳醇な香り。選りすぐりの最高ランク黒毛和牛フィレやサーロインに、ワサビや岩塩、特製ガーリックチップを添えて口へ運べば、とろけるような柔らかさと肉汁の旨味が溢れ出します。記念日や自分へのご褒美にふさえる至高のディナーをお届けします。',
    tags: ['黒毛和牛', '鉄板焼き', '松阪牛', '近江牛', '米沢牛', '記念日ディナー']
  },
  {
    slug: 'sulfur-springs-milky-white-onsen-town-stay',
    title: '立ち上る湯けむりと濃密な硫黄の香り！乳白色のにごり湯と風情ある温泉街めぐりの宿',
    shortTitle: '乳白色硫黄泉＆温泉街情緒宿',
    query: '乳白色 硫黄泉 温泉 にごり湯 旅館',
    metaDesc: '草津・蔵王・野沢温泉・別府明礬など、湯の花が舞うエメラルドグリーンや乳白色の硫黄泉。浴衣と下駄で温泉街の湯めぐりや足湯散策を楽しむ名湯宿。',
    theme: 'にごり湯・温泉街散策',
    intro: '浴槽を満たす青みがかった乳白色の湯に浸かると、肌にじんわりと染み渡る濃厚な天然成分。温泉街の石畳に響く下駄の音と、立ち込める湯けむりの情緒。温泉情緒を120%味わい尽くす、本物の名湯宿をラインナップしました。',
    tags: ['にごり湯', '乳白色温泉', '硫黄泉', '草津温泉', '蔵王温泉', '湯めぐり']
  },
  {
    slug: 'three-generation-family-large-room-luxury-stay',
    title: '祖父母から孫までみんなで快適！3世代ファミリー旅行・コネクティングルーム＆露天風呂付き離れ宿',
    shortTitle: '3世代家族・大型客室＆離れ宿',
    query: '3世代 ファミリー 露天風呂 旅館',
    metaDesc: '熱海・白浜・那須・伊豆など祖父母・両親・子どもがプライバシーを保ちながら一緒に泊まれる大型客室やコネクティングルーム。貸切風呂や部屋食も充実。',
    theme: '3世代旅行・ファミリー',
    intro: '還暦や古希のお祝い、家族みんなの思い出作りに最適な3世代旅行。大部屋や隣同士をつなぐコネクティングルーム、完全独立の離れなら、夜遅くまで語り合いながらもそれぞれの就寝リズムを邪魔しません。段差が少ないバリアフリー設計や子ども向け設備が整った安心の宿をご案内します。',
    tags: ['3世代旅行', 'ファミリー旅行', 'コネクティングルーム', '客室露天風呂', '部屋食', '家族旅行']
  },
  {
    slug: 'scenic-railway-sl-trolley-train-onsen-stay',
    title: '車窓を流れる絶景とレトロな汽笛！SL・トロッコ観光列車の旅と途中下車の名湯旅館',
    shortTitle: '観光列車・SL＆トロッコ温泉宿',
    query: '黒部峡谷 トロッコ 温泉 旅館',
    metaDesc: '大井川鐵道・黒部峡谷・わたらせ渓谷などダイナミックな峡谷や大自然を駆け抜ける観光列車。レトロな客車に揺られながら沿線の秘湯で寛ぐ贅沢な鉄道旅。',
    theme: '観光列車・鉄道の旅',
    intro: '吹き抜ける爽快な風を浴びながらエメラルドグリーンの渓谷を渡るトロッコ列車や、力強く煙を上げて走る蒸気機関車（SL）。ガタゴトと揺れるノスタルジックな車窓風景を楽しんだ後は、沿線の名湯旅館で美味しい郷土料理に舌鼓。のんびりとした時間の流れを愛でる鉄道旅へ。',
    tags: ['観光列車', 'SL列車', 'トロッコ列車', '鉄道旅', '黒部峡谷', '大井川鐵道']
  },
  {
    slug: 'waterfall-gorge-healing-forest-onsen-stay',
    title: '豪快な滝の飛沫と深い森の静寂！清流渓谷のせせらぎ＆滝見露天風呂ヒーリング宿',
    shortTitle: '滝見露天風呂＆森林セラピー宿',
    query: '奥入瀬 渓流 露天風呂 温泉',
    metaDesc: '奥入瀬渓流・天城湯ヶ島・作並温泉など目の前に迫る豪快な滝や清らかな渓流を望む露天風呂。マイナスイオンとフィトンチッドに満たされる癒やしの旅。',
    theme: '滝見露天・清流リトリート',
    intro: 'ザーザーと響く滝の水音と、木々の間から差し込む木漏れ日。湯船のすぐ目の前に広がる大迫力の滝や清流を眺めながら、豊富に湧き出る天然温泉に浸かる贅沢。全身でマイナスイオンを浴び、日々のストレスを綺麗さっぱり洗い流す森林セラピー温泉をご提案します。',
    tags: ['滝見露天風呂', '渓谷温泉', '奥入瀬渓流', '森林浴', 'マイナスイオン', '癒やしの宿']
  }
];

async function generateRound5() {
  console.log('--- Generating Round 5 strategic high-intent comparison articles via Rakuten API ---');
  const appDir = path.join(__dirname, 'src', 'app');
  const allHotelsDbPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let hotelsDb = {};
  if (fs.existsSync(allHotelsDbPath)) {
    hotelsDb = JSON.parse(fs.readFileSync(allHotelsDbPath, 'utf8'));
  }

  for (const theme of TARGET_THEMES_ROUND5) {
    console.log(`Searching Rakuten API for: "${theme.query}"...`);
    try {
      const hotels = await searchRakutenHotels(theme.query, 3);
      await sleep(1200);

      if (!hotels || hotels.length === 0) {
        console.warn(`No hotels found for query: ${theme.query}`);
        continue;
      }

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
          "text": "人気の週末や見頃シーズンは満室になりやすいため、2〜3ヶ月前からの予約が安心です。楽天トラベルの『5と0のつく日セール』や『ふるさと納税宿泊クーポン』を活用すると最もお得に予約いただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "楽天トラベルのポイント還元やクーポンは予約後にも使えますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "楽天トラベルの『あとからクーポン適用』対象施設であれば、予約完了後でも条件を満たすクーポンを適用して割引を受けることができます。"
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

  fs.writeFileSync(allHotelsDbPath, JSON.stringify(hotelsDb, null, 2), 'utf8');
  console.log(`Updated hotels DB at ${allHotelsDbPath}`);
}

generateRound5().catch(console.error);
