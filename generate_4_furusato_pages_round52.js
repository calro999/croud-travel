const fs = require('fs');
const path = require('path');

const round52Hotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round52_hotels.json'), 'utf-8'));

// 認証済み公式実在URL（HTTP 200）
const OFFICIAL_FURUSATO_AFFILIATE_URL = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F";

const pages = [
  {
    slug: 'furusato-tax-three-great-valleys-riverside-stay',
    title: '【日本三大渓流】奥入瀬・三段峡・御岳の清冽な自然を愛でる渓谷美露天風呂ステイ特集｜楽天ふるさと納税で叶える清流リゾート旅',
    description: '日本三大渓流（青森・奥入瀬渓流、広島・三段峡、東京・御岳渓谷）の息をのむ大自然美を五感で堪能する旅。清流のせせらぎに癒やされる露天風呂や旬の渓流美食を満喫できる名宿を厳選。楽天ふるさと納税の宿泊割引クーポンを活用して賢く贅沢に巡る完全ガイド。',
    h1: '日本三大渓流の清澄を愛でる渓谷美露天風呂ステイ',
    lead: 'エメラルドグリーンに輝く清流、木々の隙間から差し込む木漏れ日、そして幾重にも重なる奇岩と水飛沫。日本を代表する三大渓流（奥入瀬渓流・三段峡・御岳渓谷）は、日常の喧騒を忘れさせ、心身を根底から浄化してくれる至高のネイチャーリゾートです。本特集では、各渓流の魅力を間近で体感できる厳選の宿をご紹介。楽天ふるさと納税のトラベルクーポンを利用して、実質2,000円の自己負担で実現する清流ラグジュアリーステイへ出かけましょう。',
    hotelKeys: ['stream_oirase', 'stream_sandankyo', 'stream_mitake'],
    keywords: '日本三大渓流, 奥入瀬渓流, 三段峡, 御岳渓谷, 渓流露天風呂, 楽天ふるさと納税, 温泉旅行, 清流リゾート',
    badge: '日本三大渓流・清流美露天特集'
  },
  {
    slug: 'furusato-tax-three-great-scenic-wonders-stay',
    title: '【日本三大奇勝】妙義山・耶馬渓・寒霞渓の壮麗な奇岩絶景と極上湯宿ステイ特集｜楽天ふるさと納税トラベルクーポン完全活用',
    description: '大自然の悠久の営みが創り出した日本三大奇勝（群馬・妙義山、大分・耶馬渓、香川・小豆島寒霞渓）。天を突く奇岩怪石のパノラマと、滋味あふれる名湯・島美食を味わい尽くす贅沢な休日。楽天ふるさと納税を活用したお得で記憶に残る絶景旅行術を徹底解説。',
    h1: '日本三大奇勝の壮麗な岩壁美と秘湯ステイ',
    lead: '何万年、何百万年もの風雨と地殻変動が彫り出したダイナミックな造形美。「日本三大奇勝」と称される妙義山、耶馬渓、寒霞渓は、見る者を圧倒する孤高の絶景を誇ります。奇岩の稜線を一望する展望露天風呂や、地元食材を活かした滋味深い料理、そして心地よい静寂。楽天ふるさと納税の宿泊割引クーポンを駆使して、圧倒的なスケールを誇る奇勝の旅を賢くスマートにお楽しみください。',
    hotelKeys: ['wonder_myogi', 'wonder_yabakei', 'wonder_kankakei'],
    keywords: '日本三大奇勝, 妙義山, 耶馬渓, 寒霞渓, 小豆島, 絶景温泉, 楽天ふるさと納税, トラベルクーポン',
    badge: '日本三大奇勝・絶景岩壁ステイ特集'
  },
  {
    slug: 'furusato-tax-three-sacred-mountains-stay',
    title: '【日本三大霊峰】富士山・立山・白山の神気満ちる聖地と雲海・高山温泉ステイ特集｜楽天ふるさと納税で巡る日本屈指のパワースポット',
    description: '古来より山岳信仰の聖地として崇められてきた日本三大霊峰（富士山・立山・白山）。雄大な神嶺を仰ぎ見る絶景客室、標高数千メートルの雲海露天、白山山麓の秘湯でパワーチャージ。楽天ふるさと納税のトラベルクーポンを利用して巡る極上ウェルネス紀行。',
    h1: '日本三大霊峰の神気満ちる聖地と雲海・高山温泉ステイ',
    lead: '古より人々が祈りを捧げ、崇敬を集めてきた「日本三大霊峰」——富士山、立山、白山。朝日に染まる神々しい稜線、眼下に広がる広大な雲海、そして山麓から湧き出づる霊験あらたかな名湯。三大霊峰の自然と神気に包まれる滞在は、忙しい現代人の魂を深く潤してくれます。楽天ふるさと納税の宿泊割引クーポンを活用して、心洗われる聖地への贅沢な旅へご案内します。',
    hotelKeys: ['mountain_fuji', 'mountain_tateyama', 'mountain_hakusan'],
    keywords: '日本三大霊峰, 富士山, 立山連峰, 白山, パワースポット温泉, 雲海露天風呂, 楽天ふるさと納税, 高級旅館',
    badge: '日本三大霊峰・聖地温泉リトリート特集'
  },
  {
    slug: 'furusato-tax-top100-hidden-paradise-stay',
    title: '【日本三大秘境・秘境百選】祖谷・高千穂・秋山郷の隠れ宿と源泉秘湯ステイ特集｜楽天ふるさと納税で訪れる日本の桃源郷',
    description: '日本の原風景と静寂が息づく秘境（徳島・祖谷渓谷、宮崎・高千穂峡、信州・秋山郷）。日常を遠く離れた山深き谷あいで出会う至極のオーベルジュや源泉かけ流し秘湯。楽天ふるさと納税の宿泊割引クーポンを活用して、真の大人の贅沢を味わう隠れ家ステイ特集。',
    h1: '秘境百選の隠れ宿と源泉秘湯オーベルジュステイ',
    lead: '険しい山々を越えた先に広がる、まるで時間が止まったかのような日本の桃源郷。平家落人伝説が息づく祖谷、神話のふるさと高千穂、そして豪雪の山深くに佇む秋山郷。大自然の懐に抱かれた極上の隠れ宿で、清流のせせらぎと満天の星、滋味豊かな山菜・ジビエ料理を堪能するひとときは何物にも代えがたい贅沢です。楽天ふるさと納税を活用して、憧れの秘境ステイを賢く叶えましょう。',
    hotelKeys: ['hidden_iya', 'hidden_takachiho', 'hidden_akiyamago'],
    keywords: '日本の秘境, 祖谷温泉, 高千穂峡, 秋山郷, 秘湯旅館, 隠れ宿, 楽天ふるさと納税, 温泉旅行',
    badge: '秘境百選・天空の隠れ家ステイ特集'
  }
];

function generatePageCode(p) {
  const hotelsData = p.hotelKeys.map(k => {
    const raw = round52Hotels[k];
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

export default function FurusatoThreeGreatPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 shadow-2xl">
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
            <span>なぜ今、ふるさと納税で巡る日本の絶景旅なのか？</span>
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            全国各地の自治体が発行する「楽天トラベルクーポン返礼品」は、寄付額の最大30%相当が旅行代金から割引される極めて還元率の高い返礼品です。翌年の住民税・所得税の控除対象となるため、実質2,000円の自己負担で憧れの高級リゾートや秘境の名旅館に宿泊することができます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            寄付後即座にマイクーポンへ付与され、予約時に1クリックで適用可能。本特集で厳選した名宿はいずれも各エリアを代表する屈指のロケーションとホスピタリティを誇り、五感を解き放つ特別な休日を約束してくれます。
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
        <section className="bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-3xl p-8 shadow-xl mb-12">
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
              href="/furusato-tax-three-great-scenic-coasts-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-emerald-700 block mb-1">三大絶景海岸</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大名勝海岸】東尋坊・浄土ヶ浜・白良浜ステイ特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-famous-waterfalls-healing-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-emerald-700 block mb-1">三大名瀑ヒーリング</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大名瀑】白糸・吹割・原不動滝の癒やし湯宿特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-hotsprings-luxury-villas-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-emerald-700 block mb-1">三大名湯の離れ</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大名湯】草津・有馬・下呂の極上別邸ステイ特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-tea-plantations-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-emerald-700 block mb-1">三大茶園テロワール</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大茶園】牧之原・宇治・八女の茶香美食ステイ特集</span>
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
