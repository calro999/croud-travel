const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const TARGET_THEMES_ROUND4 = [
  {
    slug: 'winery-vineyard-auberge-wine-pairing-stay',
    title: '葡萄畑の絶景と極上ワインに酔いしれる！全国のワイナリー併設＆オーベルジュホテル',
    shortTitle: 'ワイナリー＆ワインオーベルジュ',
    query: 'ワイナリー オーベルジュ 温泉 ワイン',
    metaDesc: '勝沼・余市・長野など広大な葡萄畑に囲まれた憧れのワイナリーホテル。醸造家こだわりの日本ワインと地元食材を活かした極上ペアリングフレンチ。',
    theme: 'ワイナリー・ワイン旅',
    intro: '見渡す限りの葡萄畑の稜線と、夕暮れに赤く染まる山々。醸造所から届くフレッシュなワインと熟成ヴィンテージを、シェフ渾身のフルコースとともに味わう至福のディナー。ワイン好きなら一度は訪れたい、葡萄の薫りに包まれる洗練された大人のオーベルジュステイをご紹介します。',
    tags: ['ワイナリーホテル', 'ワインペアリング', 'オーベルジュ', '勝沼ワイン', '余市ワイン', '美食宿']
  },
  {
    slug: 'traditional-irori-charcoal-hearth-satoyama-stay',
    title: 'パチパチ爆ぜる炭火の温もり！囲炉裏料理と清流川魚・ジビエを味わう里山名湯宿',
    shortTitle: '囲炉裏料理＆里山名湯古民家宿',
    query: '囲炉裏 炭火焼き 温泉 旅館',
    metaDesc: '奥飛騨・白川郷・秩父など古き良き日本の風情が残る囲炉裏のある名旅館。炭火でじっくり焼く岩魚や鮎、朴葉味噌、飛騨牛ステーキを堪能する休日。',
    theme: '囲炉裏料理・古民家情緒',
    intro: '自在鉤から下がる鉄鍋から立ち上る湯気と、炭火で香ばしく焼き上がる串刺しの川魚。どこか懐かしい木の香りに包まれながら、赤々と燃える炭火を囲んで地酒を傾ける贅沢な時間。日本の原風景に出会う、心温まる里山ステイをお届けします。',
    tags: ['囲炉裏料理', '炭火焼き', '古民家宿', '奥飛騨温泉郷', 'ジビエ料理', '里山リゾート']
  },
  {
    slug: 'medicinal-carbonated-mud-springs-healing-stay',
    title: 'シュワシュワ天然泡＆濃厚泥パック！奇跡の名湯・炭酸泉と美肌薬湯治リトリート宿',
    shortTitle: '炭酸泉＆泥湯・美肌薬湯治宿',
    query: '炭酸泉 温泉 旅館 美肌',
    metaDesc: '長湯温泉・別府・嬉野・玉造など全国屈指の濃厚な高濃度炭酸泉や天然泥湯。肌にしがみつく無数の気泡とミネラルたっぷりの泥湯で心身を再生。',
    theme: '炭酸泉・泥湯・美肌湯治',
    intro: '湯船に身を沈めた瞬間、全身を無数のシルキーな炭酸の泡が包み込み、じんわりと血行を促進する奇跡の炭酸泉。そして天然のミネラルを豊富に含み、滑らかな美肌へと導く泥湯。日々の疲れをリセットし、体の芯から生命力を呼び覚ます本格湯治体験へご案内します。',
    tags: ['炭酸泉', '泥湯', '美肌の湯', '長湯温泉', '湯治宿', '薬湯']
  },
  {
    slug: 'aquarium-themepark-official-family-hotel-stay',
    title: '開園直前から閉園後まで遊び尽くす！全国の水族館・テーマパーク直結＆オフィシャルホテル',
    shortTitle: '水族館＆テーマパーク直結ホテル',
    query: '水族館 テーマパーク オフィシャル ホテル',
    metaDesc: '鴨川シーワールド・美ら海水族館・アドベンチャーワールド・富士急など人気施設直結のホテル。入園パスポート付きプランやキャラクタールームが充実。',
    theme: '水族館・テーマパーク旅',
    intro: '朝一番の空いている時間に人気アトラクションを楽しんだり、閉園後のナイトツアーに参加したり。パーク直結や徒歩数分のホテルなら、途中で部屋に戻って休憩できるため小さなお子様連れやシニアも安心。感動体験を余すところなく味わえる特等席ステイをご提案します。',
    tags: ['テーマパークホテル', '水族館直結', 'オフィシャルホテル', '子連れ旅行', '家族旅行', 'パスポート付き']
  },
  {
    slug: 'sunset-magic-hour-oceanview-onsen-stay',
    title: '黄金色に染まる海と空のマジックアワー！夕日絶景オーシャンビュー露天風呂宿',
    shortTitle: '夕日絶景・マジックアワー海宿',
    query: '夕日 絶景 露天風呂 温泉 オーシャンビュー',
    metaDesc: '西伊豆堂ヶ島・丹後夕日ヶ浦・庄内浜など日本海・太平洋の夕陽の名所に佇む温泉宿。夕暮れどきに露天風呂から眺める黄金のサンセットグラデーション。',
    theme: 'サンセット・夕日絶景',
    intro: '昼から夜へと移り変わるわずか30分間、空と海がオレンジから茜色、紫へと息をのむような美しいグラデーションを描くマジックアワー。波の音をBGMに、水平線にゆっくりと沈みゆく夕日を露天風呂から眺める時間は、どんな贅沢にも勝る特別な癒やしをもたらしてくれます。',
    tags: ['夕日絶景', 'サンセット露天', 'マジックアワー', '西伊豆堂ヶ島', '夕日ヶ浦温泉', '海一望']
  },
  {
    slug: 'car-free-train-access-girls-trip-stay',
    title: '新幹線・特急駅から徒歩ですぐ！車なし・電車アクセス抜群の駅近名湯＆女子旅ホテル',
    shortTitle: '車なし・駅近アクセス女子旅宿',
    query: '駅近 温泉 女子旅 観光 ホテル',
    metaDesc: '金沢・松本・仙台・別府など主要駅から徒歩数分や無料送迎でアクセス至便な温泉宿。レンタカーなしでも周辺の観光名所やグルメスポットを身軽に満喫。',
    theme: '車なし・駅近アクセス旅',
    intro: '運転免許がない方や、慣れない土地での雪道・長距離運転を避けたい方に最適な「駅チカ名宿」。新幹線や特急を降りてチェックインしたら、すぐに荷物を預けて身軽に城下町散策やご当地カフェめぐりへ。夜は天然温泉とおしゃれなラウンジで寛ぐ、スマートな電車旅をお届けします。',
    tags: ['車なし旅行', '駅近ホテル', '女子旅', '電車旅', '新幹線アクセス', '手ぶら観光']
  }
];

async function generateRound4() {
  console.log('--- Generating Round 4 strategic high-intent comparison articles via Rakuten API ---');
  const appDir = path.join(__dirname, 'src', 'app');
  const allHotelsDbPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let hotelsDb = {};
  if (fs.existsSync(allHotelsDbPath)) {
    hotelsDb = JSON.parse(fs.readFileSync(allHotelsDbPath, 'utf8'));
  }

  for (const theme of TARGET_THEMES_ROUND4) {
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

generateRound4().catch(console.error);
