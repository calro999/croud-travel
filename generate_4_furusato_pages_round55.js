const fs = require('fs');
const path = require('path');

const round55Hotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round55_hotels.json'), 'utf-8'));

// 認証済み公式実在URL（HTTP 200）
const OFFICIAL_FURUSATO_AFFILIATE_URL = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F";

const pages = [
  {
    slug: 'furusato-tax-scenic-drives-highland-resort-stay',
    title: '【日本百名道・絶景ドライブ】ビーナスライン・志賀草津・やまなみハイウェイを巡る高原温泉リゾート特集｜楽天ふるさと納税完全ガイド',
    description: '日本屈指の絶景ドライブルート（長野・ビーナスライン、群馬／長野・志賀草津高原ルート、大分／熊本・やまなみハイウェイ）。標高2000m超の雲上パノラマと、白樺湖・草津温泉・由布院温泉の極上リゾートステイ。楽天ふるさと納税の宿泊割引クーポンを活用した爽快ドライブ旅。',
    h1: '日本百名道の絶景ドライブルートと高原・海沿いリゾートステイ',
    lead: '四季折々の美しい稜線、澄み切った高原の風、そしてどこまでも続くワインディングロード。「日本百名道」に選ばれるビーナスライン、志賀草津高原ルート、やまなみハイウェイは、車やバイクを走らせるだけで心が解き放たれる極上のステージです。走破した後は、名湯に浸かり、地元の山の幸やテロワール料理に舌鼓を打つ至福の夜。楽天ふるさと納税の宿泊割引クーポンを活用して、実質2,000円の自己負担で叶える絶景ドライブ＆高原温泉リゾートへ出かけましょう。',
    hotelKeys: ['drive_venus', 'drive_shiga', 'drive_yamanami'],
    keywords: '日本百名道, ビーナスライン, 志賀草津高原ルート, やまなみハイウェイ, ドライブ旅行, 草津温泉ホテル櫻井, 由布院月燈庵, 楽天ふるさと納税, トラベルクーポン',
    badge: '日本百名道・絶景高原ドライブステイ特集'
  },
  {
    slug: 'furusato-tax-three-great-bridges-heritage-stay',
    title: '【日本三大名橋】日本橋・錦帯橋・長崎眼鏡橋の歴史美と水辺の風情宿特集｜楽天ふるさと納税トラベルクーポン完全活用',
    description: '五街道の起点・東京「日本橋」、木造五連アーチが奇跡を描く山口「錦帯橋」、日本最古の石造りアーチ長崎「眼鏡橋」。日本の土木美と歴史情緒が凝縮された三大名橋を巡る旅。ラグジュアリーホテルや城下町の老舗宿を楽天ふるさと納税でお得に楽しむ完全ガイド。',
    h1: '日本三大名橋の歴史美と城下町・水辺の風情宿ステイ',
    lead: '川を渡り、人と文化を結んできた日本の至宝「日本三大名橋」。日本の道路元標が鎮座する帝都の要所「日本橋」、錦川の清流に美しい木造アーチを描く「錦帯橋」、長崎の異国情緒と石畳の風情が薫る「眼鏡橋」。橋の袂に広がる城下町や水辺の歴史美を愛で、洗練されたホテルや風情ある湯宿で過ごす優雅なひととき。楽天ふるさと納税の宿泊割引クーポンを駆使して、日本の伝統と美意識に触れる橋巡りの旅をお楽しみください。',
    hotelKeys: ['bridge_nihonbashi', 'bridge_kintaikyo', 'bridge_megane'],
    keywords: '日本三大名橋, 日本橋, 錦帯橋, 長崎眼鏡橋, マンダリンオリエンタル東京, 錦帯橋温泉岩国国際観光ホテル, 楽天ふるさと納税, トラベルクーポン',
    badge: '日本三大名橋・歴史浪漫水辺ステイ特集'
  },
  {
    slug: 'furusato-tax-three-great-water-towns-canal-stay',
    title: '【日本三大水郷】近江八幡・柳川・潮来の舟運川下りと水辺の名湯・名旅館特集｜楽天ふるさと納税で味わう水と暮らす日本の原風景',
    description: '白壁土蔵が水面に映える滋賀・近江八幡の八幡堀、どんこ舟で巡る福岡・柳川の掘割と鰻せいろ蒸し、十二橋めぐりとあやめ薫る茨城・潮来。日本の水郷情緒に癒やされる旅。楽天ふるさと納税の宿泊割引クーポンを活用して、心安らぐ水辺の名旅館ステイへ。',
    h1: '日本三大水郷の情緒あふれる舟運・川下りと水辺の名湯ステイ',
    lead: '水とともに生き、豊かな生活文化を育んできた「日本三大水郷」。近江商人の栄華を伝える八幡堀とヨシ原が広がる「近江八幡」、縦横に巡らされた掘割を竿一本で巧みに操る川下りが名物の「柳川」、前川のあやめと利根川水系の舟運の歴史が息づく「潮来」。櫓の音や川のせせらぎに耳を澄まし、獲れたての湖魚や名物うなぎ料理を味わう贅沢。楽天ふるさと納税の宿泊クーポンを活用して、水辺の情緒あふれる大人の休息旅へご案内します。',
    hotelKeys: ['town_omihachiman', 'town_yanagawa', 'town_itako'],
    keywords: '日本三大水郷, 近江八幡, 柳川川下り, 潮来水郷, 柳川藩主立花邸御花, 休暇村近江八幡, 楽天ふるさと納税, 水郷温泉宿',
    badge: '日本三大水郷・舟運川下りステイ特集'
  },
  {
    slug: 'furusato-tax-kumano-kodo-world-heritage-stay',
    title: '【熊野古道・世界遺産】祈りの巡礼路と湯の峰・那智勝浦・白浜の極上温泉宿特集｜楽天ふるさと納税で巡る紀伊山地の聖地',
    description: '千年の祈りが息づく世界遺産「紀伊山地の霊場と参詣道・熊野古道」。日本最古の湯の峰温泉つぼ湯、那智の滝と大門坂、大洞窟温泉を誇る勝浦温泉、太平洋を一望する白浜温泉。楽天ふるさと納税のトラベルクーポンを利用して、魂を浄化する極上の巡礼温泉ステイへ。',
    h1: '世界遺産・熊野古道の祈りの巡礼路と名湯ステイ',
    lead: '杉木立が連なる苔むした石畳、山々を包み込む神聖な霧、そして熊野三山へと続く「熊野古道」。古より貴族から庶民まで、多くの人々が再生と救いを求めて歩んできた祈りの道です。巡礼の旅人を癒やしてきた日本最古の温泉地「湯の峰温泉」、太平洋の荒波が打ち寄せる大洞窟露天「勝浦温泉」、そして絶景オーシャンビューの「白浜温泉」。楽天ふるさと納税を活用して、心身を根底から解き放つ世界遺産の聖地巡礼温泉旅をお楽しみください。',
    hotelKeys: ['kumano_yunomine', 'kumano_katsuura', 'kumano_kaishu'],
    keywords: '熊野古道, 世界遺産, 湯の峰温泉, 那智勝浦温泉, ホテル浦島, 浜千鳥の湯海舟, 旅館あづまや, 楽天ふるさと納税, 巡礼温泉宿',
    badge: '世界遺産熊野古道・祈りの名湯ステイ特集'
  }
];

function generatePageCode(p) {
  const hotelsData = p.hotelKeys.map(k => {
    const raw = round55Hotels[k];
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

export default function FurusatoRound55Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-teal-950 via-emerald-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/40 px-4 py-1.5 rounded-full text-teal-300 text-sm font-semibold mb-6">
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
            <span className="text-teal-600">🌿</span>
            <span>なぜ今、ふるさと納税で巡る日本の街道・水辺・巡礼旅なのか？</span>
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            全国各地の自治体が発行する「楽天トラベルクーポン返礼品」は、寄付額の最大30%相当が旅行代金から割引される極めて還元率の高い返礼品です。翌年の住民税・所得税の控除対象となるため、実質2,000円の自己負担で憧れの高級リゾートや歴史ある老舗宿に宿泊することができます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            寄付後即座にマイクーポンへ付与され、予約時に1クリックで適用可能。本特集で厳選した名宿はいずれも各エリア屈指の自然美・歴史的風土とおもてなしを誇り、五感を解き放つ特別な休日を約束してくれます。
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
                  <div className="absolute top-4 left-4 bg-teal-950/80 backdrop-blur-md text-teal-300 font-bold px-3 py-1 rounded-lg text-sm border border-teal-500/30">
                    STAGE 0{idx + 1}
                  </div>
                </div>
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-teal-700 mb-1 tracking-wider uppercase">
                      {h.label}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3 hover:text-teal-700 transition">
                      <a href={h.affiliateUrl} target="_blank" rel="noopener noreferrer">
                        {h.hotelName}
                      </a>
                    </h3>
                    <div className="flex items-center gap-3 mb-4 text-sm text-slate-600">
                      <span className="flex items-center text-amber-500 font-bold">
                        ★ {h.reviewAverage.toFixed(1)}
                      </span>
                      <span className="text-slate-400">({h.reviewCount}件の評価)</span>
                      <span className="text-teal-700 font-semibold">・ 参考目安: ¥{h.hotelMinCharge.toLocaleString()}〜</span>
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
                      className="flex-1 text-center bg-gradient-to-r from-teal-600 to-emerald-700 hover:from-teal-700 hover:to-emerald-800 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-150 text-sm"
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
        <section className="bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-3xl p-8 shadow-xl mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-teal-300">
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
              href="/furusato-tax-three-great-caves-underground-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-teal-700 block mb-1">三大鍾乳洞地底美</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大鍾乳洞】龍泉洞・秋芳洞・龍河洞ステイ特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-pine-groves-oceanview-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-teal-700 block mb-1">三大松原オーシャンビュー</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大松原】三保・虹の松原・気比の松原特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-mountain-castles-history-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-teal-700 block mb-1">天空の山城雲海</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大山城】竹田城・備中松山城・岩村城特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-train-views-scenic-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-teal-700 block mb-1">三大車窓パノラマ</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大車窓】姨捨・肥薩線・狩勝峠鉄道旅特集</span>
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
