const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const TARGET_THEMES_ROUND6 = [
  {
    slug: 'sake-bar-free-flow-tasting-onsen-stay',
    title: '全国の銘酒・純米大吟醸を利き酒！地酒BAR＆日本酒ペアリングが自慢の温泉旅館',
    shortTitle: '地酒BAR＆日本酒飲み比べ宿',
    query: '地酒 飲み比べ 利き酒 温泉 旅館',
    metaDesc: '越後湯沢・赤湯・会津など酒どころに佇む日本酒好き垂涎の温泉宿。常時数十種類の地酒サーバーやプレミアム銘酒飲み比べ、郷土会席ペアリング。',
    theme: '日本酒・地酒ペアリング旅',
    intro: '湯上がりにラウンジへ向かえば、ずらりと並ぶ地元の厳選日本酒サーバー。純米酒から香り高い純米大吟醸、季節限定の搾りたて生原酒までを心ゆくまで利き酒。夕食では料理長がひと皿ごとに選び抜いた銘酒とのマリアージュに酔いしれる、大人のための美酒ステイへご案内します。',
    tags: ['日本酒ペアリング', '地酒飲み比べ', '酒蔵の宿', '越後湯沢', '利き酒バー', '温泉旅館']
  },
  {
    slug: 'winter-fugu-pufferfish-gourmet-onsen-stay',
    title: '冬の贅沢の極み！本場下関の天然とらふぐ刺し・白子焼き・ひれ酒を堪能する名宿',
    shortTitle: 'とらふぐ会席＆ひれ酒名宿',
    query: 'ふぐ 虎河豚 温泉 旅館',
    metaDesc: '下関・臼杵・日間賀島など本場のとらふぐを贅沢に味わい尽くす冬の温泉旅。皿が透けるほど美しいふぐ刺し（てっさ）、香ばしい焼き白子とひれ酒。',
    theme: '冬のふぐ会席・美食旅',
    intro: '冬の味覚において、他の追随を許さない気品と旨味を誇る「天然とらふぐ」。職人の技が光る大皿のふぐ刺し、プリプリの身と野菜の出汁が染み渡るてっちり鍋、香ばしく炙ったひれ酒。冬だけの至福の美食体験を約束する名宿を厳選しました。',
    tags: ['ふぐ料理', 'とらふぐ', '下関ふぐ', 'ひれ酒', '冬グルメ', '温泉会席']
  },
  {
    slug: 'limestone-cave-underground-lake-adventure-stay',
    title: 'エメラルドに輝く神秘の地底湖！日本屈指の鍾乳洞探検と周辺名湯旅館',
    shortTitle: '鍾乳洞探検＆地底湖アドベンチャー宿',
    query: '鍾乳洞 温泉 旅館',
    metaDesc: '龍泉洞・秋芳洞・龍河洞など何万年もの歳月が創り出した神秘の鍾乳洞やエメラルドグリーンの地底湖。大自然の造形美に圧倒される探検の旅。',
    theme: '鍾乳洞・地底アドベンチャー',
    intro: '一歩足を踏み入れれば、そこは外気と遮断されたひんやりとした静寂の世界。無数に垂れ下がる鍾乳石の回廊を抜け、底まで見通せるほど透明なドラゴンブルーの地底湖に出会う感動。地球の息吹を間近に感じる冒険の後は、周辺の名湯で手足を伸ばして温まる旅へ。',
    tags: ['鍾乳洞', '龍泉洞', '秋芳洞', '地底湖', 'パワースポット', '絶景温泉']
  },
  {
    slug: 'private-pool-luxury-resort-villa-stay',
    title: '誰にも邪魔されない極上の水辺！専用プライベートプール付き高級リゾートヴィラ',
    shortTitle: '専用プール付きラグジュアリーヴィラ',
    query: 'プライベートプール ヴィラ ホテル',
    metaDesc: '宮古島・南房総・淡路島など客室から直接飛び込める専用プライベートプール完備の最高級ヴィラ。海外リゾートのような開放感と贅沢な休日。',
    theme: 'プライベートプール・ヴィラ旅',
    intro: '青く澄んだプールサイドのデッキチェアに横たわり、トロピカルカクテルを片手に心地よい海風を感じる。人目を気にせず24時間いつでも泳げるプライベートプールと、夕暮れどきの水面ライトアップ。日常から完全にエスケープできる最高峰のヴィラステイをご提案します。',
    tags: ['プライベートプール', '客室プール', '高級ヴィラ', '宮古島', '淡路島', 'リゾートホテル']
  },
  {
    slug: 'temple-shukubo-shojin-cuisine-mindfulness-stay',
    title: '歴史ある古刹で心を洗う！本格精進料理＆朝のお勤め体験ができる名門宿坊',
    shortTitle: '古刹宿坊＆本格精進料理ステイ',
    query: '宿坊 精進料理 寺 旅館',
    metaDesc: '高野山・善光寺・京都の歴史寺院で体験する非日常のマインドフルネス滞在。滋味あふれる伝統の精進料理、早朝の護摩祈祷や写経で心を整える旅。',
    theme: '宿坊体験・マインドフルネス',
    intro: '凛とした空気が漂う境内で、静かに響く鐘の音と僧侶の読経。旬の野菜や豆類を丁寧に調理した美しい精進料理を味わい、朝のお勤めや瞑想で雑念を手放す。忙しい現代人にこそ必要な、心と体をリセットする静寂の宿坊ステイをお届けします。',
    tags: ['宿坊', '精進料理', '高野山', '善光寺', 'マインドフルネス', '寺院ステイ']
  },
  {
    slug: 'scenic-cycling-shimanami-lake-resort-stay',
    title: '青い海と島々を渡る風になれ！しまなみ海道・ビワイチ絶景サイクリスト温泉リゾート',
    shortTitle: 'しまなみ＆ビワイチ絶景サイクリング宿',
    query: 'しまなみ海道 尾道 サイクリング ホテル',
    metaDesc: 'しまなみ海道や琵琶湖を走るサイクリスト必見。自転車の部屋持ち込み対応、メンテナンススペース完備、ライド後の疲れを癒やすオーシャンビュー温泉。',
    theme: '絶景サイクリング・アクティブ旅',
    intro: '瀬戸内海の多島美を望む橋の上を、爽快な潮風を浴びながら駆け抜けるしまなみ海道サイクリング。愛車をお部屋まで持ち込める専用バイクラックや安心の整備スペース、そしてライド後の筋肉をほぐす展望露天風呂。アクティブな旅を最高のホスピタリティで支える宿をご紹介します。',
    tags: ['しまなみ海道', 'サイクリング', 'ビワイチ', '尾道', 'オーシャンビュー', '温泉リゾート']
  }
];

async function generateRound6() {
  console.log('--- Generating Round 6 strategic high-intent comparison articles via Rakuten API ---');
  const appDir = path.join(__dirname, 'src', 'app');
  const allHotelsDbPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let hotelsDb = {};
  if (fs.existsSync(allHotelsDbPath)) {
    hotelsDb = JSON.parse(fs.readFileSync(allHotelsDbPath, 'utf8'));
  }

  for (const theme of TARGET_THEMES_ROUND6) {
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

generateRound6().catch(console.error);
