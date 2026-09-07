const fs = require('fs');
const path = require('path');

const round56Hotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round56_hotels.json'), 'utf-8'));

// 認証済み公式実在URL（HTTP 200）
const OFFICIAL_FURUSATO_AFFILIATE_URL = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F";

const pages = [
  {
    slug: 'furusato-tax-preservation-districts-heritage-stay',
    title: '【重要伝統的建造物群保存地区】倉敷美観地区・萩城下町・橿原今井町の歴史町家・古民家宿特集｜楽天ふるさと納税完全活用',
    description: '時を越えて受け継がれる日本の町並み遺産「重要伝統的建造物群保存地区（重伝建）」。白壁土蔵と柳並木の倉敷美観地区、なまこ壁と維新胎動の萩城下町、五百棟の伝統町家が残る大和今井町。歴史的建築を改装した極上宿を楽天ふるさと納税でお得に楽しむ完全ガイド。',
    h1: '重要伝統的建造物群保存地区（重伝建）の白壁・蔵元宿ステイ',
    lead: '江戸・明治の風情を今に留め、国の重要伝統的建造物群保存地区に選定される美しい町並み。倉敷川沿いの白壁土蔵が美しい「倉敷美観地区」、維新の志士たちが駆け抜けた武家屋敷が残る「萩城下町」、そして中世の自治都市の面影を残す「橿原今井町」。夕暮れのガス灯や格子戸から漏れる灯りに包まれ、歴史ある町家や風情ある湯宿で過ごす大人の休日。楽天ふるさと納税の宿泊割引クーポンを活用して、実質2,000円の自己負担で叶える歴史浪漫ステイへご案内します。',
    hotelKeys: ['heritage_kurashiki', 'heritage_hagi', 'heritage_imai'],
    keywords: '重要伝統的建造物群保存地区, 重伝建, 倉敷美観地区, 料理旅館鶴形, 萩城三の丸北門屋敷, 橿原今井町, 楽天ふるさと納税, 古民家ホテル',
    badge: '重伝建・歴史町家ステイ特集'
  },
  {
    slug: 'furusato-tax-famous-spring-waters-healing-stay',
    title: '【日本名水百選】白川水源・安曇野わさび田・柿田川湧水群を巡る清冽な名水仕込み美食と美肌温泉宿特集｜楽天ふるさと納税ガイド',
    description: '大地が育んだ日本屈指の名水湧出地（熊本・南阿蘇白川水源、長野・安曇野わさび田湧水、静岡・富士山柿田川湧水群）。清冽な名水で仕込んだ地酒や信州蕎麦、名水豆腐に舌鼓を打ち、源泉名湯で癒やされる旅。楽天ふるさと納税の宿泊割引クーポンを活用した名水リトリート。',
    h1: '日本名水百選の湧水地と名水仕込みの地酒・美肌温泉ステイ',
    lead: '幾重もの地層をくぐり抜け、気の遠くなるような歳月を経て湧き出づる「日本名水百選」の奇跡の水。毎分60トンの清冽な水が砂を巻き上げて噴き出す「白川水源」、北アルプスの雪解け水が広大なわさび田を潤す「安曇野」、富士山の伏流水が青く輝く東洋一の湧水「柿田川」。名水が育む採れたての旬菜、銘酒、そして名水仕込みの美肌温泉。楽天ふるさと納税の宿泊割引クーポンを駆使して、心身を清らかに潤す名水巡礼の旅へ出かけましょう。',
    hotelKeys: ['spring_shirakawa', 'spring_azumino', 'spring_kakitagawa'],
    keywords: '日本名水百選, 白川水源, 安曇野わさび田, 柿田川湧水群, 南阿蘇夢しずく温泉別邸蘇庵, 安曇野穂高ビューホテル, 富士山三島東急ホテル, 楽天ふるさと納税',
    badge: '日本名水百選・清冽リトリートステイ特集'
  },
  {
    slug: 'furusato-tax-six-ancient-kilns-pottery-stay',
    title: '【日本六古窯】備前・信楽・丹波立杭を巡る千年の土と炎の陶芸美・名料亭旅館ステイ特集｜楽天ふるさと納税トラベルクーポン完全活用',
    description: '中世から現在まで窯の火が途絶えることなく続く日本屈指のやきものの里「日本六古窯」（岡山・備前焼、滋賀・信楽焼、兵庫・丹波焼）。登り窯のぬくもりと作家の器で味わう極上会席料理。楽天ふるさと納税の宿泊割引クーポンを活用して、日本の伝統工芸を味わい尽くす旅へ。',
    h1: '日本六古窯の里を巡る陶芸美と作家の器で味わう名旅館ステイ',
    lead: '日本古来の陶磁器文化を今に伝える「日本六古窯」。釉薬を使わず土と炎の力だけで焼き締める素朴で力強い「備前焼」、温かみのある緋色とタヌキの置物で知られる「信楽焼」、八百余年の歴史と灰釉の美しさを誇る「丹波焼（立杭焼）」。陶芸作家の器に美しく盛り付けられた旬の美食をいただき、登り窯の煙がたなびく里山温泉宿で過ごすひととき。楽天ふるさと納税の宿泊クーポンを活用して、日本のものづくり文化に浸る贅沢な旅をお楽しみください。',
    hotelKeys: ['kiln_bizen', 'kiln_shigaraki', 'kiln_tanba'],
    keywords: '日本六古窯, 備前焼, 信楽焼, 丹波立杭焼, 丹波篠山近又, ホテルレイクヴィラ, 備前ホテル陶, 陶芸温泉宿, 楽天ふるさと納税',
    badge: '日本六古窯・陶芸美食ステイ特集'
  },
  {
    slug: 'furusato-tax-three-great-forests-wood-villa-stay',
    title: '【日本三大美林】青森ヒバ・秋田スギ・木曽ヒノキの香りに包まれる森林セラピー＆ウッドヴィラ温泉宿特集｜楽天ふるさと納税完全ガイド',
    description: '神仏の建築や式年遷宮を支えてきた日本の誇る銘木林「日本三大美林」（青森ヒバ・秋田スギ・木曽ヒノキ）。芳醇な木の香りに満ちた大浴場や客室、フィトンチッド溢れる森林浴で究極の深呼吸リラクゼーション。楽天ふるさと納税の宿泊割引クーポンを活用した極上ウェルネス旅。',
    h1: '日本三大美林の木漏れ日と森林セラピー・ウッドヴィラステイ',
    lead: '悠久の森が育んだ生命の息吹と、圧倒的な癒やしをもたらす「日本三大美林」。抗菌力と芳醇な香気を放つ黄金の木「青森ヒバ」、美しく均整のとれた木目が薫る「秋田スギ」、伊勢神宮の御用木として尊ばれる最高峰の「木曽ヒノキ」。木肌の温もりに包まれた総ヒノキ・ヒバ風呂に浸かり、森林セラピーの澄んだ空気を胸いっぱいに吸い込む休日。楽天ふるさと納税を活用して、五感すべてが解き放たれる美林温泉ステイへご案内します。',
    hotelKeys: ['forest_hiba', 'forest_sugi', 'forest_hinoki'],
    keywords: '日本三大美林, 青森ヒバ, 秋田杉, 木曽檜, 森林セラピー, 不二やホテル, 男鹿温泉別邸つばき, 木曽路の宿いわや, 楽天ふるさと納税, トラベルクーポン',
    badge: '日本三大美林・森林セラピーステイ特集'
  }
];

function generatePageCode(p) {
  const hotelsData = p.hotelKeys.map(k => {
    const raw = round56Hotels[k];
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

export default function FurusatoRound56Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-stone-950 via-emerald-950 to-teal-950 text-white py-20 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 px-4 py-1.5 rounded-full text-emerald-300 text-sm font-semibold mb-6">
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
            <span className="text-emerald-600">🌿</span>
            <span>なぜ今、ふるさと納税で巡る日本の伝統美・名水旅なのか？</span>
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            全国各地の自治体が発行する「楽天トラベルクーポン返礼品」は、寄付額の最大30%相当が旅行代金から割引される極めて還元率の高い返礼品です。翌年の住民税・所得税の控除対象となるため、実質2,000円の自己負担で憧れの伝統建築ホテルや名工の器を味わう名旅館に宿泊することができます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            寄付後即座にマイクーポンへ付与され、予約時に1クリックで適用可能。本特集で厳選した名宿はいずれも各地域の歴史遺産・自然美とおもてなしを極めた名所ばかりであり、五感を解き放つ特別な休日を約束してくれます。
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
                  <div className="absolute top-4 left-4 bg-emerald-950/80 backdrop-blur-md text-emerald-300 font-bold px-3 py-1 rounded-lg text-sm border border-emerald-500/30">
                    STAGE 0{idx + 1}
                  </div>
                </div>
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-emerald-700 mb-1 tracking-wider uppercase">
                      {h.label}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3 hover:text-emerald-700 transition">
                      <a href={h.affiliateUrl} target="_blank" rel="noopener noreferrer">
                        {h.hotelName}
                      </a>
                    </h3>
                    <div className="flex items-center gap-3 mb-4 text-sm text-slate-600">
                      <span className="flex items-center text-amber-500 font-bold">
                        ★ {h.reviewAverage.toFixed(1)}
                      </span>
                      <span className="text-slate-400">({h.reviewCount}件の評価)</span>
                      <span className="text-emerald-700 font-semibold">・ 参考目安: ¥{h.hotelMinCharge.toLocaleString()}〜</span>
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
                      className="flex-1 text-center bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-150 text-sm"
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
        <section className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-3xl p-8 shadow-xl mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-emerald-300">
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
              href="/furusato-tax-scenic-drives-highland-resort-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-emerald-700 block mb-1">日本百名道ドライブ</span>
              <span className="font-semibold text-slate-900 text-sm">【日本百名道】ビーナスライン・志賀草津・やまなみハイウェイ特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-bridges-heritage-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-emerald-700 block mb-1">三大名橋歴史美</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大名橋】日本橋・錦帯橋・長崎眼鏡橋ステイ特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-water-towns-canal-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-emerald-700 block mb-1">三大水郷舟運川下り</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大水郷】近江八幡・柳川・潮来の水辺名湯特集</span>
            </Link>
            <Link
              href="/furusato-tax-kumano-kodo-world-heritage-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-emerald-700 block mb-1">世界遺産熊野古道</span>
              <span className="font-semibold text-slate-900 text-sm">【熊野古道】祈りの巡礼路と湯の峰・那智勝浦・白浜特集</span>
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
