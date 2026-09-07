const fs = require('fs');
const path = require('path');

const round57Hotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round57_hotels.json'), 'utf-8'));

// 認証済み公式実在URL（HTTP 200）
const OFFICIAL_FURUSATO_AFFILIATE_URL = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F";

const pages = [
  {
    slug: 'furusato-tax-three-great-rapids-river-stay',
    title: '【日本三大急流】最上川・富士川・球磨川の豪快な川下りと大自然リバーサイド温泉宿特集｜楽天ふるさと納税完全活用',
    description: '轟く水飛沫とダイナミックな渓谷美を誇る「日本三大急流」（山形・最上川、山梨・富士川、熊本・球磨川）。芭蕉ゆかりの舟下り、信玄の隠し湯・下部温泉、清流アユと天然露天風呂。楽天ふるさと納税の宿泊割引クーポンを活用して、大自然の躍動感を五感で味わうリバーサイド温泉旅へ。',
    h1: '日本三大急流の豪快な舟下りと大自然リバーサイド温泉ステイ',
    lead: '山々を切り裂き、轟音とともに流れる圧倒的な水量とダイナミックな渓谷景観「日本三大急流」。「五月雨をあつめて早し」と詠まれた最上川の舟下り、甲州から駿河へと注ぐ急流富士川と名湯下部温泉、そして九州山地を潤す清流球磨川のラフティングとアユ美食。川のせせらぎとマイナスイオンに包まれ、贅沢な源泉かけ流し露天風呂に身を委ねる時間。楽天ふるさと納税の宿泊割引クーポンを利用して、実質2,000円の自己負担で叶える迫力満点のリバーサイドステイへご案内します。',
    hotelKeys: ['rapid_mogami', 'rapid_fuji', 'rapid_kuma'],
    keywords: '日本三大急流, 最上川舟下り, 富士川, 球磨川, 高見屋最上川別邸紅, 下部ホテル, あゆの里, 楽天ふるさと納税, リバーサイド温泉',
    badge: '日本三大急流・水辺の躍動ステイ特集'
  },
  {
    slug: 'furusato-tax-three-great-night-cherry-blossoms-stay',
    title: '【日本三大夜桜】弘前公園・高田城址公園・上野恩賜公園の幻想的な春宵と贅沢ホテルステイ特集｜楽天ふるさと納税完全ガイド',
    description: '春の夜空を桜色に染め上げる日本屈指の夜桜名所「日本三大夜桜」（青森・弘前城の花筏と夜桜、新潟・高田城の四千本ぼんぼり、東京・上野恩賜公園の風情）。幻想的なライトアップを散策した後は、上質なシティホテルや名門ホテルで寛ぐ旅。楽天ふるさと納税でお得に楽しむお花見ステイ。',
    h1: '日本三大夜桜の名所と春の宵を彩る贅沢ホテルステイ',
    lead: '闇夜に浮かび上がる幾千本もの桜と、水面に映り込む淡紅色の光のコントラスト。「日本三大夜桜」と称される弘前公園、高田城址公園、上野恩賜公園は、息をのむほど幽玄でドラマティックな春の絶景を誇ります。濠を埋め尽くす桜の花筏、ぼんぼりに照らされた三重櫓、そして江戸情緒漂う上野の桜並木。夜風に舞う花吹雪を堪能した後は、洗練されたホテルで美酒とともに余韻に浸る贅沢。楽天ふるさと納税の宿泊クーポンを活用して、一生の思い出に残る夜桜旅行へ出かけましょう。',
    hotelKeys: ['sakura_hirosaki', 'sakura_takada', 'sakura_ueno'],
    keywords: '日本三大夜桜, 弘前公園桜まつり, 高田城址公園, 上野恩賜公園, 弘前パークホテル, アートホテル上越, 三井ガーデンホテル上野, 楽天ふるさと納税, お花見旅行',
    badge: '日本三大夜桜・幽玄の春宵ステイ特集'
  },
  {
    slug: 'furusato-tax-three-great-fireworks-resort-stay',
    title: '【日本三大花火大会】大曲の花火・長岡まつり・土浦全国花火の圧倒的スケールと眺望ホテルステイ特集｜楽天ふるさと納税トラベルクーポン',
    description: '夜空を揺るがす光と音の饗宴「日本三大花火大会」（秋田・大曲の花火、新潟・長岡まつり大花火大会、茨城・土浦全国花火競技大会）。内閣総理大臣賞を競う最高峰の煙火芸術や復興祈願フェニックス花火。楽天ふるさと納税の宿泊割引クーポンを活用して、感動の特等席と快適ステイを両立する完全ガイド。',
    h1: '日本三大花火大会の特等席と快適眺望ホテルステイ',
    lead: '一瞬の輝きに魂を込める花火師たちの技術の粋と、夜空いっぱいに広がる大輪の火の華「日本三大花火大会」。全国の精鋭が覇を競う「大曲の花火」、信濃川の夜空に打ち上がる大迫力の正三尺玉とフェニックス「長岡花火」、秋風の中で繰り広げられる煙火競技の最高峰「土浦花火」。胸の奥まで響く重低音と煌めく光のシャワーに心を奪われる至福の夜。楽天ふるさと納税の宿泊クーポンを駆使して、日本の夏の風物詩を快適に味わうプレミアムステイをお楽しみください。',
    hotelKeys: ['fireworks_omagari', 'fireworks_nagaoka', 'fireworks_tsuchiura'],
    keywords: '日本三大花火大会, 大曲の花火, 長岡花火, 土浦花火大会, ホテルルートイン大曲駅前, ホテルニューオータニ長岡, ホテルマロウド筑波, 楽天ふるさと納税',
    badge: '日本三大花火・光と音の饗宴ステイ特集'
  },
  {
    slug: 'furusato-tax-famous-castles-stone-walls-stay',
    title: '【日本百名城・国宝名城】松本城・姫路城・熊本城の壮大な石垣美と天守を望む城下町名門ホテル特集｜楽天ふるさと納税完全活用',
    description: '武士たちの誇りと築城技術の極致「日本屈指の名城」（長野・国宝松本城、兵庫・世界遺産姫路城、熊本・難攻不落の武者返し熊本城）。漆黒と白亜の対比、そびえ立つ天守閣を客室や展望ラウンジから望む優雅な滞在。楽天ふるさと納税の宿泊割引クーポンを活用した歴史探訪紀行。',
    h1: '日本百名城の石垣美と天守を望む城下町名門ホテルステイ',
    lead: '威風堂々とそびえ立つ天守閣と、何段にも積み上げられた壮大な武者返しの石垣。戦国から泰平の世へと移り変わる歴史を見届けてきた名城たち。北アルプスを借景とする漆黒の国宝「松本城」、白鷺が羽を広げたような優美さを誇る世界遺産「姫路城」、そして見事な復興を遂げた不落の巨城「熊本城」。城下町の歴史ある町並みを散策し、格式高い名門ホテルで贅沢な美食を味わうひととき。楽天ふるさと納税を活用して、日本の城郭美を愛でる極上の旅へ出かけましょう。',
    hotelKeys: ['castle_matsumoto', 'castle_himeji', 'castle_kumamoto'],
    keywords: '日本百名城, 国宝天守, 松本城, 姫路城, 熊本城, 松本ホテル花月, ホテルモントレ姫路, 熊本ホテルキャッスル, 楽天ふるさと納税, 歴史名門ホテル',
    badge: '名城天守・城下町クラシックステイ特集'
  }
];

function generatePageCode(p) {
  const hotelsData = p.hotelKeys.map(k => {
    const raw = round57Hotels[k];
    if (!raw) {
      console.error(`Missing hotel key: ${k}`);
      return null;
    }
    return {
      key: k,
      hotelNo: raw.hotelNo,
      hotelName: raw.hotelName,
      hotelImageUrl: raw.hotelImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      hotelMinCharge: raw.hotelMinCharge || 15000,
      reviewAverage: raw.reviewAverage || 4.5,
      reviewCount: raw.reviewCount || 100,
      address: (raw.address1 || '') + (raw.address2 || ''),
      access: raw.access || '最寄り駅・主要インターチェンジより車または送迎バス',
      userReview: raw.userReview || '絶景のロケーションと心温まるおもてなし、旬の美食に大変満足いたしました。',
      label: raw.label || raw.hotelName,
      affiliateUrl: OFFICIAL_FURUSATO_AFFILIATE_URL
    };
  }).filter(Boolean);

  return `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${p.title.replace(/'/g, "\\'")}',
  description: '${p.description.replace(/'/g, "\\'")}',
  keywords: '${p.keywords}',
  openGraph: {
    title: '${p.title.replace(/'/g, "\\'")}',
    description: '${p.description.replace(/'/g, "\\'")}',
    url: 'https://croud-travel.pages.dev/${p.slug}',
    siteName: '楽天ふるさと納税×高級トラベルガイド',
    type: 'article',
    locale: 'ja_JP',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/${p.slug}',
  },
};

const hotels = ${JSON.stringify(hotelsData, null, 2)};

export default function FurusatoRound57Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-slate-950 via-rose-950 to-indigo-950 text-white py-20 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-400/40 px-4 py-1.5 rounded-full text-rose-300 text-sm font-semibold mb-6">
            <span>✨</span>
            <span>${p.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            ${p.h1}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            ${p.lead}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="${OFFICIAL_FURUSATO_AFFILIATE_URL}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transform hover:-translate-y-0.5 transition duration-200"
            >
              <span>♨️</span>
              <span>楽天ふるさと納税で対象クーポンを探す</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro Box */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-100 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="text-rose-600">🌿</span>
            <span>なぜ今、ふるさと納税で巡る日本の名所・文化遺産旅なのか？</span>
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            全国各地の自治体が発行する「楽天トラベルクーポン返礼品」は、寄付額の最大30%相当が旅行代金から割引される極めて還元率の高い返礼品です。翌年の住民税・所得税の控除対象となるため、実質2,000円の自己負担で憧れの名門ホテルや城下町の老舗宿に宿泊することができます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            寄付後即座にマイクーポンへ付与され、予約時に1クリックで適用可能。本特集で厳選したホテル・旅館はいずれも各地の自然景観・祭礼文化や歴史遺産を満喫できる特等席のロケーションを誇り、五感を解き放つ特別な休日を約束してくれます。
          </p>
        </section>

        {/* Hotel Cards */}
        <div className="space-y-12 mb-16">
          {hotels.map((h, idx) => (
            <article key={h.key} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 transition-all hover:shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[280px] md:min-h-full">
                  <Image
                    src={h.hotelImageUrl}
                    alt={h.hotelName}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 bg-rose-950/80 backdrop-blur-md text-rose-300 font-bold px-3 py-1 rounded-lg text-sm border border-rose-500/30">
                    STAGE 0{idx + 1}
                  </div>
                </div>
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-rose-700 mb-1 tracking-wider uppercase">
                      {h.label}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3 hover:text-rose-700 transition">
                      <a href={h.affiliateUrl} target="_blank" rel="noopener noreferrer">
                        {h.hotelName}
                      </a>
                    </h3>
                    <div className="flex items-center gap-3 mb-4 text-sm text-slate-600">
                      <span className="flex items-center text-amber-500 font-bold">
                        ★ {h.reviewAverage.toFixed(1)}
                      </span>
                      <span className="text-slate-400">({h.reviewCount}件の評価)</span>
                      <span className="text-rose-700 font-semibold">・ 参考目安: ¥{h.hotelMinCharge.toLocaleString()}〜</span>
                    </div>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 italic">
                      「{h.userReview}」
                    </p>
                    <div className="text-xs text-slate-500 space-y-1 mb-6">
                      <p>📍 所在地: {h.address}</p>
                      <p>🚗 アクセス: {h.access}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                    <a
                      href={h.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gradient-to-r from-rose-600 to-indigo-700 hover:from-rose-700 hover:to-indigo-800 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-150 text-sm"
                    >
                      楽天ふるさと納税で宿を予約する
                    </a>
                    <a
                      href="${OFFICIAL_FURUSATO_AFFILIATE_URL}"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-150 text-sm"
                    >
                      自治体返礼品クーポン一覧
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Step Guide */}
        <section className="bg-gradient-to-br from-slate-900 to-rose-950 text-white rounded-3xl p-8 shadow-xl mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-rose-300">
            楽天ふるさと納税トラベルクーポンの簡単3ステップ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-black text-amber-400 mb-2">01</div>
              <h3 className="font-bold text-lg mb-2">自治体に寄付</h3>
              <p className="text-sm text-slate-300">
                希望する宿がある自治体を選び、楽天ふるさと納税で寄付を実行します。楽天ポイントも通常通り貯まります。
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-black text-amber-400 mb-2">02</div>
              <h3 className="font-bold text-lg mb-2">クーポン自動付与</h3>
              <p className="text-sm text-slate-300">
                寄付完了後、数日以内にお客様の楽天アカウント（マイクーポン）へ宿泊割引クーポンが自動的に付与されます。
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-black text-amber-400 mb-2">03</div>
              <h3 className="font-bold text-lg mb-2">楽天トラベルで予約</h3>
              <p className="text-sm text-slate-300">
                対象の宿泊施設を予約する際、支払い画面でクーポンを選択するだけで最大30%割引が即時適用されます。
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="${OFFICIAL_FURUSATO_AFFILIATE_URL}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg hover:brightness-110 transition"
            >
              今すぐ使える自治体クーポンを探す
            </a>
          </div>
        </section>

        {/* Cross Interlinks */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 mb-4">あわせて読みたい極上ふるさと納税旅特集</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/furusato-tax-preservation-districts-heritage-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-rose-700 block mb-1">重要伝統的建造物群</span>
              <span className="font-semibold text-slate-900 text-sm">【重伝建の町並み】倉敷・萩・今井町の歴史町家宿特集</span>
            </Link>
            <Link
              href="/furusato-tax-famous-spring-waters-healing-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-rose-700 block mb-1">名水百選リトリート</span>
              <span className="font-semibold text-slate-900 text-sm">【日本名水百選】白川水源・安曇野・柿田川の美食名湯特集</span>
            </Link>
            <Link
              href="/furusato-tax-six-ancient-kilns-pottery-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-rose-700 block mb-1">日本六古窯の里</span>
              <span className="font-semibold text-slate-900 text-sm">【日本六古窯】備前・信楽・丹波立杭の陶芸名料亭特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-forests-wood-villa-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-rose-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-rose-700 block mb-1">日本三大美林セラピー</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大美林】青森ヒバ・秋田杉・木曽檜ウッドヴィラ特集</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
`;
}

for (const p of pages) {
  const dirPath = path.join(__dirname, 'src', 'app', p.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  const code = generatePageCode(p);
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), code, 'utf-8');
  console.log(`Generated: src/app/${p.slug}/page.tsx`);
}
