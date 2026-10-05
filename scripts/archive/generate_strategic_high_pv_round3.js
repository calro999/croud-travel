const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const TARGET_THEMES_ROUND3 = [
  {
    slug: 'craft-beer-brewery-hotel-ranking-stay',
    title: '出来立ての生ビールと名湯に酔いしれる！全国のクラフトビール醸造所・ブルワリー直結ホテル',
    shortTitle: 'クラフトビール＆ブルワリー宿',
    query: 'クラフトビール ブルワリー 温泉 ホテル',
    metaDesc: '軽井沢・修善寺・富士吉田などクラフトビール醸造所に隣接した話題のホテル。タンク直結のフレッシュなIPAやピルスナーと絶品ペアリングディナー。',
    theme: 'クラフトビール・ブルワリー旅',
    intro: '湯上がりに喉を鳴らして飲む、キンキンに冷えたクラフトビール。醸造タンクから直接注がれるフレッシュなホップの香り豊かなIPAや、まろやかなコクの黒ビール、地元果実を使った限定エール。温泉と出来立てビール、そして相性抜群の地元料理を心ゆくまで堪能できる至福のビール旅へご案内します。',
    tags: ['クラフトビール', 'ブルワリー', '地ビール', '温泉宿', '軽井沢', 'ペアリングディナー']
  },
  {
    slug: 'dark-sky-starry-observatory-resort-stay',
    title: '宇宙の神秘と満天の天の川！天体望遠鏡＆星空デッキ完備の星空リゾートホテル',
    shortTitle: '星空保護区・天体観測リゾート',
    query: '星空 阿智村 温泉 ホテル',
    metaDesc: '阿智村・八ヶ岳・鳥取大山・石垣島など日本屈指の満天の星空を誇る絶景宿。本格天体望遠鏡によるスターウォッチングや星空露天風呂で神秘の夜を体験。',
    theme: '星空観測・ナイトツアー',
    intro: '人工の光が届かない澄み切った夜空に、降るように広がる無数の星々と白銀の天の川。館内備え付けの大型天体望遠鏡で土星の輪や月面のクレーターを覗き、ホットワインを片手に星空テラスで寝転ぶ。星のソムリエによる星空解説や星空露天風呂など、忘れられない感動の夜をお届けします。',
    tags: ['星空リゾート', '天体観測', '阿智村', '八ヶ岳', '星空露天風呂', '星空保護区']
  },
  {
    slug: 'infinity-ocean-onsen-panoramic-luxury-stay',
    title: '海と空に溶け込む究極の開放感！全国の絶景インフィニティ露天風呂名門宿',
    shortTitle: 'インフィニティ露天風呂名宿',
    query: 'インフィニティ 露天風呂 温泉 オーシャンビュー',
    metaDesc: '熱海・南紀白浜・赤穂・指宿など湯船と水平線が一体化するインフィニティ温泉。波音を聞きながら海風に包まれる、一生に一度は訪れたい極上リゾート。',
    theme: 'インフィニティ温泉・絶景宿',
    intro: '湯船の縁が見えず、まるでどこまでも広がる大海原にそのまま浮かんでいるかのような錯覚を覚えるインフィニティ露天風呂。朝日に輝く波光、夕暮れに茜色に染まる海空のマジックアワー、そして満月の夜に海面に現れる月光の道「月の階段」。圧巻の絶景と名湯が織りなす極上ステイを厳選しました。',
    tags: ['インフィニティ温泉', '絶景露天風呂', 'オーシャンビュー', '熱海温泉', '南紀白浜', '海一望']
  },
  {
    slug: 'girls-trip-afternoon-tea-luxury-spa-stay',
    title: '至福のアフタヌーンティー＆本格極上スパ！女子旅・母娘旅で行きたいご褒美ラグジュアリーホテル',
    shortTitle: 'アフタヌーンティー＆極上スパ',
    query: 'アフタヌーンティー スパ ラグジュアリー ホテル',
    metaDesc: '京都・横浜・箱根・神戸など季節限定アフタヌーンティーとアロマトリートメントスパが楽しめる高級ホテル。特別な記念日やご褒美女子旅におすすめ。',
    theme: '女子旅・ご褒美スパ',
    intro: '洗練されたラウンジで味わう三段スタンドの華やかな季節のアフタヌーンティー。厳選された紅茶やシャンパンとともに語り合い、午後はホテル直営のラグジュアリースパでアロマオイルトリートメントに身を委ねる。日常を離れ、自分へのご褒美や大切な友人・母娘との優雅な休日を叶える名宿をご紹介します。',
    tags: ['女子旅', 'アフタヌーンティー', 'ホテルスパ', '母娘旅', 'ラグジュアリーホテル', 'ご褒美ステイ']
  },
  {
    slug: 'sea-of-clouds-sky-terrace-resort-stay',
    title: '雲の上に広がる天空の別世界！早朝の雲海テラス＆天空パノラマ露天風呂ホテル',
    shortTitle: '雲海テラス＆天空パノラマ宿',
    query: '雲海 絶景 露天風呂 リゾート ホテル',
    metaDesc: 'トマム・志賀高原・美ヶ原・秩父など早朝に発生する幻想的な雲海を一望できる天空リゾート。雲上の特等席テラスや標高の高い露天風呂からの大絶景。',
    theme: '雲海・天空リゾート',
    intro: '早朝、目の前に広がる一面真っ白な雲の海。山の稜線が島のように浮かび上がり、昇る朝日に黄金色に輝く奇跡のパノラマビュー。条件が揃った朝にしか出会えない感動の雲海を、お部屋のバルコニーや展望デッキ、そして天空の露天風呂から見下ろす特別な旅をご提案します。',
    tags: ['雲海', '雲海テラス', '天空のホテル', 'トマム', '絶景ホテル', '早朝パノラマ']
  },
  {
    slug: 'private-onsen-sauna-charter-luxury-villa',
    title: '完全プライベートな一棟貸切！天然温泉掛け流し＆客室専用サウナ付き極上ヴィラ',
    shortTitle: '一棟貸切・温泉＆サウナ付きヴィラ',
    query: '一棟貸し ヴィラ 客室サウナ 温泉',
    metaDesc: '白馬・那須・淡路島・宮古島など誰にも邪魔されない完全プライベートな一棟貸し高級ヴィラ。専用の源泉掛け流し風呂と本格プライベートサウナ完備。',
    theme: '一棟貸切・プライベートヴィラ',
    intro: 'グループや家族、大切な仲間だけで広々とした邸宅を贅沢に独占できる一棟貸しヴィラ。24時間好きな時に楽しめる専用の天然温泉と、セルフロウリュができる本格サウナ、広大なテラスでのBBQ。誰にも気兼ねすることなく、最高峰のプライベートな時間をお過ごしいただけます。',
    tags: ['一棟貸し', 'プライベートヴィラ', '客室サウナ', '源泉掛け流し', '貸切別荘', 'ラグジュアリーステイ']
  }
];

async function generateRound3() {
  console.log('--- Generating Round 3 strategic high-intent comparison articles via Rakuten API ---');
  const appDir = path.join(__dirname, 'src', 'app');
  const allHotelsDbPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let hotelsDb = {};
  if (fs.existsSync(allHotelsDbPath)) {
    hotelsDb = JSON.parse(fs.readFileSync(allHotelsDbPath, 'utf8'));
  }

  for (const theme of TARGET_THEMES_ROUND3) {
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

generateRound3().catch(console.error);
