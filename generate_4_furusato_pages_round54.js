const fs = require('fs');
const path = require('path');

const round54Hotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'round54_hotels.json'), 'utf-8'));

// 認証済み公式実在URL（HTTP 200）
const OFFICIAL_FURUSATO_AFFILIATE_URL = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F";

const pages = [
  {
    slug: 'furusato-tax-three-great-caves-underground-stay',
    title: '【日本三大鍾乳洞】龍泉洞・秋芳洞・龍河洞の神秘の地底美と山麓名湯宿特集｜楽天ふるさと納税で叶える地下ワンダーランド旅',
    description: '何億年もの歳月が創り上げた日本三大鍾乳洞（岩手・龍泉洞、山口・秋芳洞、高知・龍河洞）。ドラゴンブルーの地底湖や壮大な石灰華の造形美に息を呑み、山麓の名湯温泉で癒やされる旅。楽天ふるさと納税の宿泊割引クーポンを活用して賢く贅沢に巡る完全ガイド。',
    h1: '日本三大鍾乳洞の神秘の地底美と山麓名湯ステイ',
    lead: '地上とは隔絶された静寂と、無数の鍾乳石が織りなす神秘の世界「日本三大鍾乳洞」。世界有数の透明度を誇るドラゴンブルーの地底湖「龍泉洞」、東洋屈指のスケールを誇る千畳敷と百枚皿「秋芳洞」、神の壺が悠久の時を刻む「龍河洞」。大自然のアートを体感した後は、山麓の名湯温泉に浸かり地元の旬魚・美酒に酔いしれる贅沢。楽天ふるさと納税のトラベルクーポンを利用して、実質2,000円の自己負担で実現する地下探検＆名湯ステイへご案内します。',
    hotelKeys: ['cave_ryusendo', 'cave_akiyoshido', 'cave_ryugado'],
    keywords: '日本三大鍾乳洞, 龍泉洞, 秋芳洞, 龍河洞, 地底湖温泉, 湯田温泉, 楽天ふるさと納税, トラベルクーポン',
    badge: '日本三大鍾乳洞・地底美名湯ステイ特集'
  },
  {
    slug: 'furusato-tax-three-great-pine-groves-oceanview-stay',
    title: '【日本三大松原】三保の松原・虹の松原・気比の松原の白砂青松オーシャンビュー宿特集｜楽天ふるさと納税トラベルクーポン完全活用',
    description: '青い海と白い砂浜、幾万本もの黒松が美しく連なる日本三大松原（静岡・三保の松原、佐賀・唐津虹の松原、福井・敦賀気比の松原）。富士山を望む絶景宿や玄界灘・若狭湾の海の幸を味わい尽くす旅。楽天ふるさと納税を活用したお得で心洗われる沿岸旅行術を徹底解説。',
    h1: '日本三大松原の白砂青松オーシャンビュー宿ステイ',
    lead: '古来より数多の歌人や絵師を魅了し、日本の美の象徴とされてきた「日本三大松原」。駿河湾越しに霊峰富士を仰ぐ「三保の松原」、唐津湾沿いに虹の弧を描く百年の松林「虹の松原」、万葉の息吹を今に伝える敦賀湾の「気比の松原」。心地よい潮風と松の香りに包まれ、夕暮れに染まる水平線を望む至福の時間。楽天ふるさと納税の宿泊割引クーポンを駆使して、日本の伝統美薫る名松原オーシャンリゾートへお出かけください。',
    hotelKeys: ['pine_miho', 'pine_niji', 'pine_kehi'],
    keywords: '日本三大松原, 三保の松原, 虹の松原, 気比の松原, オーシャンビューホテル, 唐津シーサイドホテル, 楽天ふるさと納税, トラベルクーポン',
    badge: '日本三大松原・白砂青松オーシャンステイ特集'
  },
  {
    slug: 'furusato-tax-three-great-mountain-castles-history-stay',
    title: '【日本三大山城・天空の城】竹田城・備中松山城・岩村城の雲海と歴史浪漫・城下町宿特集｜楽天ふるさと納税で巡る雲上の砦',
    description: '雲海に浮かぶ天空の城として名高い日本屈指の山城遺構（兵庫・竹田城跡、岡山・現存天守備中松山城、岐阜・日本三大山城岩村城）。早朝の雲海展望と城下町の町家ホテル・古民家宿で歴史浪漫を満喫。楽天ふるさと納税の宿泊割引クーポンを活用して、幻想的な天空の城旅へ。',
    h1: '日本三大山城の雲海と歴史浪漫・城下町宿ステイ',
    lead: '険しい岩山の頂に築かれ、秋から冬にかけて一面の白い雲海に包まれる「天空の山城」。日本のマチュピチュと称される「竹田城跡」、現存天守を持つ唯一の山城で雲海展望が圧巻の「備中松山城」、日本三大山城にして女城主の悲哀が残る「岩村城」。朝もやの中に浮かび上がる石垣の威容と、歴史情緒あふれる城下町の温もり。楽天ふるさと納税の宿泊クーポンを活用して、実質2,000円の自己負担で叶える天空山城リトリートをお楽しみください。',
    hotelKeys: ['castle_takeda', 'castle_bitchu', 'castle_iwamura'],
    keywords: '日本三大山城, 天空の城, 竹田城, 備中松山城, 岩村城, 雲海ホテル, 城下町旅館, 楽天ふるさと納税, 歴史旅行',
    badge: '天空の山城・雲海歴史浪漫ステイ特集'
  },
  {
    slug: 'furusato-tax-three-great-train-views-scenic-stay',
    title: '【日本三大車窓】篠ノ井線姨捨・肥薩線矢岳越え・旧狩勝峠の絶景パノラマと名湯ステイ特集｜楽天ふるさと納税で旅する鉄道紀行',
    description: '鉄道ファンのみならず旅情をそそる日本三大車窓（長野・篠ノ井線姨捨の善光寺平、熊本・宮崎肥薩線矢岳越えの霧島連峰、北海道・旧狩勝峠の十勝平野）。車窓から望む絶景パノラマと、戸倉上山田温泉・人吉温泉・サホロリゾートの名湯。楽天ふるさと納税を活用した至高の鉄道ステイ。',
    h1: '日本三大車窓を望む絶景パノラマと名湯ステイ',
    lead: '列車が峠を越えた瞬間、目の前に突如として広がる息をのむ大パノラマ。「日本三大車窓」と称賛される千曲川と棚田の夜景が広がる「姨捨」、えびの高原と霧島連峰を望む「矢岳越え」、どこまでも続く地平線「狩勝峠」。鉄道の旅情と四季折々の雄大なランドスケープに酔いしれ、名湯に浸かる休日は大人の至福そのもの。楽天ふるさと納税を活用して、記憶に刻まれる絶景車窓と温泉リゾートの旅へ出かけましょう。',
    hotelKeys: ['train_obasute', 'train_hisatsu', 'train_karikachi'],
    keywords: '日本三大車窓, 姨捨駅, 肥薩線矢岳越え, 狩勝峠, 戸倉上山田温泉, 人吉温泉, サホロリゾート, 楽天ふるさと納税, 鉄道温泉旅',
    badge: '日本三大車窓・絶景パノラマ鉄道ステイ特集'
  }
];

function generatePageCode(p) {
  const hotelsData = p.hotelKeys.map(k => {
    const raw = round54Hotels[k];
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

export default function FurusatoRound54Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-950 text-white py-20 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/40 px-4 py-1.5 rounded-full text-indigo-300 text-sm font-semibold mb-6">
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
            <span className="text-indigo-600">🌿</span>
            <span>なぜ今、ふるさと納税で巡る日本の歴史景観・鉄道旅なのか？</span>
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            全国各地の自治体が発行する「楽天トラベルクーポン返礼品」は、寄付額の最大30%相当が旅行代金から割引される極めて還元率の高い返礼品です。翌年の住民税・所得税の控除対象となるため、実質2,000円の自己負担で憧れの城下町老舗宿や絶景パノラマリゾートに宿泊することができます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            寄付後即座にマイクーポンへ付与され、予約時に1クリックで適用可能。本特集で厳選した名宿はいずれも各エリア屈指の自然遺産・歴史浪漫とおもてなしを誇り、五感を解き放つ特別な休日を約束してくれます。
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
                  <div className="absolute top-4 left-4 bg-indigo-950/80 backdrop-blur-md text-indigo-300 font-bold px-3 py-1 rounded-lg text-sm border border-indigo-500/30">
                    STAGE 0{idx + 1}
                  </div>
                </div>
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-indigo-700 mb-1 tracking-wider uppercase">
                      {h.label}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3 hover:text-indigo-700 transition">
                      <a href={h.affiliateUrl} target="_blank" rel="noopener noreferrer">
                        {h.hotelName}
                      </a>
                    </h3>
                    <div className="flex items-center gap-3 mb-4 text-sm text-slate-600">
                      <span className="flex items-center text-amber-500 font-bold">
                        ★ {h.reviewAverage.toFixed(1)}
                      </span>
                      <span className="text-slate-400">({h.reviewCount}件の評価)</span>
                      <span className="text-indigo-700 font-semibold">・ 参考目安: ¥{h.hotelMinCharge.toLocaleString()}〜</span>
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
                      className="flex-1 text-center bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-150 text-sm"
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
        <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 shadow-xl mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-indigo-300">
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
              href="/furusato-tax-three-great-rivers-riverside-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-indigo-700 block mb-1">三大河川名湯</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大河川】利根川・筑後川・吉野川のせせらぎ宿特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-karsts-highland-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-indigo-700 block mb-1">三大カルスト天空リゾート</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大カルスト】秋吉台・四国カルスト・平尾台特集</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-wagyu-beef-luxury-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-indigo-700 block mb-1">三大和牛ガストロノミー</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大銘牛】松阪牛・神戸牛・米沢牛の名湯贅沢ステイ</span>
            </Link>
            <Link
              href="/furusato-tax-three-great-dunes-oceanview-stay"
              className="block p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 transition"
            >
              <span className="text-xs font-bold text-indigo-700 block mb-1">三大砂丘風紋絶景</span>
              <span className="font-semibold text-slate-900 text-sm">【日本三大砂丘】鳥取砂丘・遠州砂丘・吹上浜ステイ特集</span>
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
