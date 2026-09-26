const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const TARGET_THEMES_ROUND7 = [
  {
    slug: 'literary-heritage-bungo-historic-ryokan-stay',
    title: '文豪たちが筆を走らせた名湯！名作誕生の舞台・文学ゆかりの歴史ある老舗旅館',
    shortTitle: '文豪ゆかりの名湯・老舗旅館',
    query: '文豪 ゆかり 温泉 旅館',
    metaDesc: '城崎・伊豆湯ヶ島・道後など志賀直哉、川端康成、夏目漱石ら文豪が逗留し名作を執筆した老舗宿。当時の面影を残す客室や庭園、名湯を愛でる旅。',
    theme: '文学散歩・文豪ゆかりの名宿',
    intro: 'かつて数多くの文豪たちが静けさと名湯を求め、数週間から数ヶ月にわたって逗留した歴史ある老舗旅館。障子越しに差し込む柔らかな光、手入れの行き届いた日本庭園、そして文豪たちが愛した湯船。物語の息吹を今なお色濃く残す空間で、贅沢な知の余白を味わう旅へ。',
    tags: ['文豪の宿', '城崎温泉', '老舗旅館', '文学旅', '登録有形文化財', '歴史の宿']
  },
  {
    slug: 'terraced-rice-fields-satoyama-healing-onsen-stay',
    title: '黄金色に輝く日本の原風景！絶景棚田と里山の恵みを味わうヒーリング温泉宿',
    shortTitle: '絶景棚田＆里山ノスタルジー宿',
    query: '棚田 里山 温泉 旅館',
    metaDesc: '星峠・白米千枚田・大山千枚田など幾重にも重なる美しい棚田のパノラマ。朝霧や夕映えに輝く田園風景と、地場野菜・かまど炊きご飯を味わう休日。',
    theme: '棚田絶景・里山リトリート',
    intro: '山の斜面に幾重にも連なる美しい棚田。水鏡のように空を映す春、青々と稲がそよぐ夏、黄金色の稲穂が波打つ秋、そして雪に覆われる冬。どこか懐かしい日本の原風景を見下ろす高台の露天風呂に浸かり、大地の恵みをたっぷり使った素朴で滋味あふれる料理に癒やされる旅をご案内します。',
    tags: ['棚田', '星峠の棚田', '里山リゾート', '絶景温泉', '古民家宿', '日本の原風景']
  },
  {
    slug: 'spring-water-soba-tofu-gourmet-onsen-stay',
    title: '清冽な名水が生み出す極上の喉ごし！名水百選の手打ち蕎麦＆名水豆腐料理の温泉宿',
    shortTitle: '名水蕎麦＆名水豆腐の美味宿',
    query: '名水 蕎麦 豆腐 温泉 旅館',
    metaDesc: '忍野八海・安曇野・郡上八幡など全国屈指の名水地に佇むグルメ宿。清らかな伏流水で打つ香り高い十割蕎麦やとろけるような名水豆腐会席を堪能。',
    theme: '名水グルメ・蕎麦と豆腐の旅',
    intro: '雪解け水が何十年もの歳月をかけてろ過された清らかな湧き水。その名水を使って打つ蕎麦は、香り立ちと喉ごしが格別。大豆の甘みを極限まで引き出した濃厚な名水豆腐や汲み上げ湯葉とともに、体に染み渡るような優しい美食と名湯を味わう大人のグルメ旅へ。',
    tags: ['名水百選', '手打ち蕎麦', '名水豆腐', '安曇野', '忍野八海', 'グルメ温泉']
  },
  {
    slug: 'japan-historic-classic-hotel-heritage-stay',
    title: '文明開化と昭和モダンの薫り！日本が誇る最高峰クラシックホテル＆洋館ステイ',
    shortTitle: '名門クラシックホテル＆洋館宿',
    query: 'クラシックホテル 温泉',
    metaDesc: '日光金谷・箱根富士屋・雲仙観光・横浜ニューグランドなど日本の近代建築美が薫る名門ホテル。重厚なメインダイニングで味わう伝統のフレンチと名湯。',
    theme: 'クラシックホテル・近代建築美',
    intro: 'アール・デコ調のステンドグラス、格調高い彫刻が施された柱やマントルピース、代々受け継がれてきた伝統のコンソメスープやローストビーフ。国内外の要人や皇族をもてなしてきた歴史と品格が息づくクラシックホテルで、時を超えた極上のリゾートステイをお届けします。',
    tags: ['クラシックホテル', '富士屋ホテル', '日光金谷ホテル', '近代建築', '洋館ホテル', '伝統の味']
  },
  {
    slug: 'winter-kue-gourmet-luxury-fish-onsen-stay',
    title: '白身のトロと称される幻の高級魚！天然本クエ鍋＆クエフルコースを味わう冬の温泉宿',
    shortTitle: '天然本クエ鍋＆幻の高級魚宿',
    query: 'クエ 鍋 温泉 旅館',
    metaDesc: '南紀白浜・五島列島・高知室戸など冬に旬を迎える幻の高級魚「天然クエ」。上品な脂の乗った薄造り、コラーゲンたっぷりのクエ鍋、雑炊を堪能。',
    theme: '天然クエ鍋・冬の幻グルメ',
    intro: '「クエを食ったら他の魚は食えん」と食通たちを唸らせる幻の高級魚・クエ。引き締まった上品な白身と、皮と身の間に凝縮されたプルプルの濃厚なコラーゲン。熱々のクエ鍋から立ち上る芳醇な出汁と、旨味をすべて吸い込んだ締めの雑炊。冬にしか味わえない最高峰の美味旅へ。',
    tags: ['クエ料理', '本クエ鍋', '南紀白浜', '冬の味覚', '幻の魚', '温泉グルメ']
  },
  {
    slug: 'mt-fuji-view-private-open-air-bath-luxury-stay',
    title: '霊峰富士を独り占め！全室富士山ビュー＆客室専用露天風呂付き絶景リゾートホテル',
    shortTitle: '富士山ビュー客室露天風呂宿',
    query: '富士山 露天風呂 客室 ホテル 温泉',
    metaDesc: '河口湖・山中湖・日本平・箱根芦ノ湖など客室の露天風呂やテラスから雄大な富士山を一望できるラグジュアリーホテル。赤富士や逆さ富士を望む贅沢な旅。',
    theme: '富士山ビュー・絶景露天風呂',
    intro: '朝日に照らされて紅く染まる「赤富士」、夕暮れ時のシルエット、そして夜空に浮かび上がる神秘的な霊峰。誰の視線も気にすることなく、お部屋の専用露天風呂に浸かりながら富士山を眺める時間は、まさに日本が世界に誇る至高のリゾート体験です。',
    tags: ['富士山ビュー', '客室露天風呂', '河口湖温泉', '富士山一望', '絶景リゾート', '記念日旅行']
  }
];

async function generateRound7() {
  console.log('--- Generating Round 7 strategic high-intent comparison articles via Rakuten API ---');
  const appDir = path.join(__dirname, 'src', 'app');
  const allHotelsDbPath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let hotelsDb = {};
  if (fs.existsSync(allHotelsDbPath)) {
    hotelsDb = JSON.parse(fs.readFileSync(allHotelsDbPath, 'utf8'));
  }

  for (const theme of TARGET_THEMES_ROUND7) {
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

generateRound7().catch(console.error);
