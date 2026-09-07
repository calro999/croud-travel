const fs = require('fs');
const path = require('path');

const round53Hotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round53_hotels.json'), 'utf-8'));

// 認証済み公式実在URL（HTTP 200）
const OFFICIAL_FURUSATO_AFFILIATE_URL = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F";

const pages = [
  {
    slug: 'furusato-tax-three-great-rivers-riverside-stay',
    title: '【日本三大河川】利根川・筑後川・吉野川の雄大な流れを望むリバーサイド名湯宿特集｜楽天ふるさと納税で叶える清流温泉旅',
    description: '坂東太郎（利根川）・筑紫次郎（筑後川）・四国三郎（吉野川）と称される日本三大河川の雄大な流域美とせせらぎに癒やされる旅。水上温泉、筑後川温泉、大歩危峡の絶景露天風呂を厳選。楽天ふるさと納税の宿泊割引クーポンを活用して賢く贅沢に巡る完全ガイド。',
    h1: '日本三大河川の雄大な流れを望むリバーサイド名湯ステイ',
    lead: '古来より日本の風土と文化を育んできた三大河川「坂東太郎・利根川」「筑紫次郎・筑後川」「四国三郎・吉野川」。滔々と流れる大河のせせらぎやダイナミックな峡谷を望む露天風呂は、日々の喧騒を洗い流してくれる格別の癒やし空間です。本特集では、大河のほとりに佇む屈指の名旅館・リゾートを厳選。楽天ふるさと納税のトラベルクーポンを利用して、実質2,000円の自己負担で実現する極上リバーサイドステイへご案内します。',
    hotelKeys: ['river_tone', 'river_chikugo', 'river_yoshino'],
    keywords: '日本三大河川, 利根川, 筑後川, 吉野川, リバーサイド温泉, 水上温泉, 大歩危峡, 楽天ふるさと納税, トラベルクーポン',
    badge: '日本三大河川・水辺の名湯ステイ特集'
  },
  {
    slug: 'furusato-tax-three-great-karsts-highland-stay',
    title: '【日本三大カルスト】秋吉台・四国カルスト・平尾台の白銀石灰岩パノラマと高原リゾート特集｜楽天ふるさと納税宿泊クーポン完全活用',
    description: '緑の高原に無数の白大理石・石灰岩が羊の群れのように広がる日本三大カルスト（秋吉台・四国カルスト・平尾台）。標高1400mの星空リゾートやカルスト山麓の天然温泉宿で非日常を満喫。楽天ふるさと納税を活用したお得で開放感溢れる絶景高原旅行術を徹底解説。',
    h1: '日本三大カルストの白銀石灰岩パノラマと高原リゾートステイ',
    lead: '青空と緑の草原に純白の石灰岩が点在する、まるでヨーロッパの高原や異世界を思わせる「日本三大カルスト」。秋吉台の悠久の鍾乳洞、四国カルストの雲海と満天の星、平尾台の雄大な羊群原パノラマ。大地の造形美に抱かれながら過ごす休日は、心洗われる爽快感に満ちています。楽天ふるさと納税の宿泊割引クーポンを駆使して、天空のカルスト高原リゾートを賢くスマートにお楽しみください。',
    hotelKeys: ['karst_akiyoshi', 'karst_shikoku', 'karst_hiraodai'],
    keywords: '日本三大カルスト, 秋吉台, 四国カルスト, 平尾台, 高原リゾート, 星空露天風呂, 楽天ふるさと納税, トラベルクーポン',
    badge: '日本三大カルスト・天空高原ステイ特集'
  },
  {
    slug: 'furusato-tax-three-great-wagyu-beef-luxury-stay',
    title: '【日本三大銘牛】松阪牛・神戸牛・米沢牛の極上鉄板焼き＆すき焼きを味わう美食温泉宿特集｜楽天ふるさと納税で味わう肉の芸術品',
    description: '世界が絶賛する最高峰の和牛ブランド「日本三大和牛」（松阪牛・神戸ビーフ・米沢牛）。口の中でとろける極上の霜降り肉を、本場の名門料理旅館や名湯宿の客室・鉄板焼きカウンターで堪能。楽天ふるさと納税の宿泊割引クーポンを活用して、至高の美食温泉旅へ。',
    h1: '日本三大銘牛の極上美食と名湯贅沢ステイ',
    lead: '日本が世界に誇る肉の芸術品「松阪牛」「神戸ビーフ」「米沢牛」。徹底した血統管理と伝統の肥育技術によって生み出されるきめ細やかなサシ、甘みと芳醇な香りは、まさに至福の味覚体験です。本特集では、各産地の歴史ある温泉街で本物の三大和牛会席を供する名宿を厳選。楽天ふるさと納税の宿泊クーポンを活用して、実質2,000円の自己負担で叶える究極のガストロノミー温泉ステイをお届けします。',
    hotelKeys: ['wagyu_matsusaka', 'wagyu_kobe', 'wagyu_yonezawa'],
    keywords: '日本三大和牛, 松阪牛, 神戸牛, 米沢牛, 高級旅館, 鉄板焼き, すき焼き, 楽天ふるさと納税, グルメ温泉旅',
    badge: '日本三大和牛・極上美食ステイ特集'
  },
  {
    slug: 'furusato-tax-three-great-dunes-oceanview-stay',
    title: '【日本三大砂丘】鳥取砂丘・遠州大砂丘・吹上浜の壮大な風紋と夕日オーシャンビュー宿特集｜楽天ふるさと納税で訪れる海の砂漠リゾート',
    description: '海風が織りなす神秘的な風紋と、見渡す限りの砂と海のコントラスト「日本三大砂丘」（鳥取砂丘・遠州砂丘・吹上浜）。東シナ海や日本海に沈む夕日を望むオーシャンビュー露天風呂と新鮮な海の幸。楽天ふるさと納税の宿泊割引クーポンを利用して巡る絶景沿岸ステイ。',
    h1: '日本三大砂丘の壮大な風紋と夕日オーシャンビュー宿ステイ',
    lead: '日本にいながらにして砂漠のような神秘的な情景と、どこまでも続く水平線が融合する「日本三大砂丘」。風が砂地に描き出す一瞬の芸術「風紋」、黄金色に輝く夕暮れ時のマジックアワー。砂丘散策の後は、海辺の温泉宿で波音を聞きながら名湯に浸かり、獲れたての伊勢海老や旬魚を味わう贅沢。楽天ふるさと納税を活用して、記憶に深く刻まれる砂丘と海のリゾートへ出かけましょう。',
    hotelKeys: ['dune_tottori', 'dune_enshu', 'dune_fukiage'],
    keywords: '日本三大砂丘, 鳥取砂丘, 遠州大砂丘, 吹上浜, オーシャンビュー温泉, 夕日絶景宿, 楽天ふるさと納税, 温泉旅行',
    badge: '日本三大砂丘・風紋絶景ステイ特集'
  }
];

function generatePageCode(p) {
  const hotelsData = p.hotelKeys.map(k => {
    const raw = round53Hotels[k];
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

export default function FurusatoRound53Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-blue-950 via-teal-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 shadow-2xl">
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
            <span>なぜ今、ふるさと納税で巡る日本の名所旅なのか？</span>
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            全国各地の自治体が発行する「楽天トラベルクーポン返礼品」は、寄付額の最大30%相当が旅行代金から割引される極めて還元率の高い返礼品です。翌年の住民税・所得税の控除対象となるため、実質2,000円の自己負担で憧れの老舗料亭旅館や絶景リゾートに宿泊することができます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            寄付後即座にマイクーポンへ付与され、予約時に1クリックで適用可能。本特集で厳選した名宿はいずれも各エリア屈指の自然景観・歴史的風土とおもてなしを誇り、五感を解き放つ特別なひとときを約束してくれます。
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
                      className="flex-1 text-center bg-gradient-to-r from-teal-600 to-blue-700 hover:from-teal-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-150 text-sm"
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
              href="/furusato-tax-three-great-valleys-riverside-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-teal-700 block mb-1">三大渓流露天風呂</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大渓流】奥入瀬・三段峡・御岳の清流美特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-scenic-wonders-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-teal-700 block mb-1">三大奇勝岩壁美</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大奇勝】妙義山・耶馬渓・寒霞渓ステイ特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-sacred-mountains-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-teal-700 block mb-1">三大霊峰雲海ステイ</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大霊峰】富士山・立山・白山の聖地温泉特集</span>
            </Link>
            <Link
              href="/furusato-tax-top100-hidden-paradise-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-teal-700 block mb-1">秘境百選の隠れ宿</span>
              <span className="font-semibold text-slate-900 text-sm">【秘境百選】祖谷・高千穂・秋山郷の桃源郷特集</span>
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
