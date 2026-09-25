const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const TARGET_THEMES_ROUND2 = [
  {
    slug: 'award-winning-breakfast-gourmet-hotel-ranking',
    title: '朝から贅沢の極み！いくら盛り放題＆ご当地海鮮ビュッフェが自慢の朝食日本一ホテル特集',
    shortTitle: '朝食日本一・海鮮ビュッフェホテル',
    query: '函館 朝食 いくら ビュッフェ',
    metaDesc: '函館・金沢・神戸など全国の朝食フェスやランキングで常に話題をさらう名門ホテルを特集。山盛りのいくら丼や焼き立てクロワッサンを味わう贅沢な朝。',
    theme: '絶品朝食・ホテルビュッフェ',
    intro: '旅の最大の楽しみの一つであるホテルの朝ごはん。炊きたてのご飯の上にこぼれんばかりに盛る天然いくらや新鮮な魚介、シェフが目の前で焼き上げるふわとろオムレツ、焼き立てパンの芳醇な香り。朝起きるのが待ち遠しくなる、圧倒的なクオリティを誇る朝食自慢のホテルをご案内します。',
    tags: ['朝食美味しい', 'いくら食べ放題', 'ホテルビュッフェ', '函館', '朝ごはん', 'グルメ旅']
  },
  {
    slug: 'golf-resort-natural-hotspring-luxury-stay',
    title: 'ラウンド後は名湯で極上リフレッシュ！名門ゴルフコース併設の天然温泉リゾートホテル',
    shortTitle: '名門ゴルフ＆天然温泉リゾート',
    query: 'ゴルフ 温泉 リゾート',
    metaDesc: '川奈・軽井沢・那須など富士山や雄大な自然を望むチャンピオンコースでのラウンドと、プレー後の疲れを癒やす天然温泉・サウナが揃った贅沢リゾート。',
    theme: 'ゴルフ＆温泉ステイ',
    intro: '雄大な山々や海を望む美しい名門コースで爽快にスイングした後は、クラブハウス直結の天然温泉露天風呂や本格サウナで汗を流し、極上のディナーに舌鼓。移動のストレスなくプレーと上質なリゾートステイをシームレスに満喫できる、大人のためのゴルフ温泉宿を厳選しました。',
    tags: ['ゴルフ', '温泉リゾート', 'ゴルフ場併設', '軽井沢', '那須', '大人旅']
  },
  {
    slug: 'cultural-property-heritage-sukiya-ryokan-stay',
    title: '宮大工の技と歴史が息づく！国登録有形文化財・伝統建築美に泊まる名門老舗旅館',
    shortTitle: '登録有形文化財・名建築旅館',
    query: '登録有形文化財 温泉 旅館 老舗',
    metaDesc: '修善寺・渋温泉・箱根など、宮大工の至高の技と百年を超える歴史が刻まれた登録有形文化財の老舗宿。タイムスリップしたかのような日本の美と名湯。',
    theme: '文化財建築・歴史名宿',
    intro: '一歩足を踏み入れれば、木の温もりと凛とした静けさが広がる数寄屋造りの空間。釘を使わずに組み上げられた格天井や職人の手彫りによる欄間、月日を重ねて黒光りする磨き上げられた廊下。日本が誇る伝統建築の美意識と、受け継がれてきた細やかなもてなしを五感で味わう旅へ。',
    tags: ['登録有形文化財', '老舗旅館', '数寄屋造り', '修善寺温泉', '渋温泉', '伝統建築']
  },
  {
    slug: 'pet-friendly-private-dogrun-luxury-villa',
    title: '愛犬とずっと一緒！プライベートドッグラン＆客室天然温泉付き高級リゾートヴィラ',
    shortTitle: '愛犬同伴・ドッグラン付きヴィラ',
    query: '伊豆高原 ペット 温泉 ドッグラン',
    metaDesc: '伊豆高原・那須・軽井沢など愛犬とベッドや食事も一緒に過ごせる贅沢ヴィラ。完全プライベートドッグラン、足洗い場、客室専用温泉風呂を完備。',
    theme: 'ペット・愛犬同伴旅',
    intro: '大切な家族の一員である愛犬と一緒に、気兼ねなく最高のリゾートステイを。芝生が広がる専用のプライベートドッグランで思いっきり駆け回り、テラスで愛犬を眺めながら客室露天風呂を満喫。愛犬用アメニティや特製メニューも充実した、愛犬家絶賛の宿をラインナップしました。',
    tags: ['ペットと泊まれる宿', '犬連れ旅行', 'プライベートドッグラン', '伊豆高原', '那須高原', '客室露天風呂']
  },
  {
    slug: 'early-spring-kawazu-sakura-plum-blossom-hotsprings',
    title: '一足早い春の訪れ！早咲き河津桜＆梅まつりを愛でる花見露天風呂温泉旅館',
    shortTitle: '早咲き河津桜＆梅まつり温泉',
    query: '河津桜 温泉 露天風呂 伊豆',
    metaDesc: '伊豆河津・南伊豆・熱海など2月から濃いピンク色の花を咲かせる早咲きの河津桜や名木が揃う梅まつり。春の息吹を感じながら浸かる絶景露天風呂。',
    theme: '早咲き桜・梅まつり',
    intro: 'まだ冬の寒さが残る2月から、鮮やかな濃いピンク色の花びらで春の先陣を切る河津桜。川沿いに咲き誇る桜並木と黄色の菜の花のコントラストを楽しんだ後は、湯量豊富な天然温泉露天風呂で温まる。春の訪れを日本でいち早く実感できる、風情あふれるお花見名宿をご紹介します。',
    tags: ['河津桜', '早咲き桜', '梅まつり', '伊豆河津', '熱海温泉', '春先取り温泉']
  }
];

async function generateRound2() {
  console.log('--- Generating Round 2 strategic high-intent comparison articles via Rakuten API ---');
  const appDir = path.join(__dirname, 'src', 'app');
  const allHotelsDbPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let hotelsDb = {};
  if (fs.existsSync(allHotelsDbPath)) {
    hotelsDb = JSON.parse(fs.readFileSync(allHotelsDbPath, 'utf8'));
  }

  for (const theme of TARGET_THEMES_ROUND2) {
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

generateRound2().catch(console.error);
