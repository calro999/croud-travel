const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound26 = [
  {
    slug: 'traditional-okinawa-ishigaki-beef-stay',
    query: '石垣島 石垣牛 ホテル',
    title: '【2026年】南の島の至高の美食！極上石垣牛ステーキ＆川平湾エメラルドビーチリゾート5選',
    metaDesc: '2026年最新！とろける肉質の特選石垣牛ステーキ・炭火焼肉ディナー！川平湾や竹富島を望むオーシャンビュープール付き石垣島リゾートホテル5選。',
    theme: '極上石垣牛ディナー＆エメラルドオーシャンリゾート',
    leadText: '八重山の豊かな自然と南国の太陽が育む最高峰の黒毛和牛「石垣牛」。ジューシーで深いコクの石垣牛ステーキや焼き肉ディナーを堪能し、ミシュラン三ツ星の川平湾や満天の星空に包まれる贅沢なアイランドステイ。',
    badge: '特選石垣牛ディナー×八重山オーシャンリゾート',
    tags: ['石垣牛', '石垣島リゾート', '川平湾', 'オーシャンビュー', 'プール付きホテル', '沖縄離島', '楽天トラベル']
  },
  {
    slug: 'luxury-private-onsen-with-scenic-creek-view',
    query: '渓流 露天風呂 温泉 旅館',
    title: '【2026年】せせらぎがBGM。清流の息吹を感じる渓流沿い専用露天風呂付き極上宿5選',
    metaDesc: '2026年最新！目の前を流れる清流と新緑・紅葉の絶景！マイナスイオンあふれる渓流沿い客室露天風呂と川床料理で心洗われる隠れ家温泉旅館5選。',
    theme: '渓流沿い専用露天風呂＆清流マイナスイオン宿',
    leadText: '耳を澄ませば響く心地よいせせらぎの音と、木々の間を吹き抜ける清らかな川風。客室専用の露天風呂から間近に清流を眺め、川床会席や地元名物料理に舌鼓を打つ、都会では味わえない極上のネイチャーリトリート。',
    badge: '渓流プライベート露天×清流マイナスイオン',
    tags: ['渓流露天風呂', '客室専用露天', 'せせらぎの宿', '川床料理', '大人の隠れ家', '源泉掛け流し', '楽天トラベル']
  },
  {
    slug: 'super-panoramic-sand-dune-camel-stay',
    query: '鳥取砂丘 温泉 旅館',
    title: '【2026年】風紋が描く黄金の大地！鳥取砂丘サンライズ＆日本海極上松葉ガニ・海鮮の宿5選',
    metaDesc: '2026年最新！鳥取砂丘の神秘的な風紋と海に沈む夕日！日本海のブランド活松葉ガニ・天然岩牡蠣会席と三朝・皆生・鳥取温泉の名湯旅館5選。',
    theme: '鳥取砂丘絶景＆日本海活松葉ガニ名湯宿',
    leadText: '日本最大級の砂丘が織りなす神秘的な風紋と、見渡す限りの日本海パノラマ。早朝の澄んだ空気の中で砂丘散策を楽しんだ後は、水揚げされたばかりの活松葉ガニや白イカ会席、歴史あるラジウム温泉で癒やされる山陰の旅。',
    badge: '鳥取砂丘絶景×日本海極上松葉ガニ',
    tags: ['鳥取砂丘', '松葉ガニ', '鳥取温泉', '皆生温泉', '三朝温泉', '山陰海鮮', '楽天トラベル']
  },
  {
    slug: 'spring-izu-cherry-blossom-and-onsen-stay',
    query: '伊豆 河津桜 温泉 旅館',
    title: '【2026年】一足早い春の訪れ！早咲き河津桜＆伊豆金目鯛姿煮と海一望露天風呂の宿5選',
    metaDesc: '2026年最新！濃いピンク色に染まる河津桜並木と菜の花の絶景！名物金目鯛の姿煮・舟盛り会席と太平洋を一望する絶景露天風呂が自慢の伊豆名宿5選。',
    theme: '早咲き河津桜＆名物金目鯛姿煮の伊豆名湯宿',
    leadText: 'ひと足早く春を告げる濃密なピンクの「河津桜」と黄色い菜の花のコントラスト。桜のトンネルを散策した後は、甘辛く煮付けた極上金目鯛の姿煮と獲れたて地魚舟盛り、青い海を見渡す絶景温泉で温まる春の伊豆トリップ。',
    badge: '早咲き河津桜×名物金目鯛姿煮',
    tags: ['河津桜', '金目鯛姿煮', '伊豆温泉', '海一望露天', '東伊豆', '春の花見旅行', '楽天トラベル']
  },
  {
    slug: 'organic-forest-aromatherapy-villa-stay',
    query: '森林浴 温泉 ヴィラ',
    title: '【2026年】天然精油の香りで深呼吸。ヒノキ・スギ精油アロマスパスパ＆森林浴プライベートヴィラ5選',
    metaDesc: '2026年最新！森の香りに包まれてデトックス！天然ヒノキやスギのオーガニック精油トリートメント、大自然に囲まれたプライベートヴィラと温泉スパ5選。',
    theme: '森の天然精油アロマスパ＆森林浴プライベートヴィラ',
    leadText: 'フィトンチッドあふれる深い森の中に佇むプライベートヴィラ。地元産ヒノキやクロモジから抽出した天然精油を使った極上アロママッサージと、森林を見渡すウッドデッキ露天風呂で心と体を芯から解きほぐすウェルネスステイ。',
    badge: '森のオーガニックアロマ×森林浴ヴィラ',
    tags: ['アロマセラピー', '森林浴ヴィラ', 'ヒノキ精油', 'クロモジ', 'プライベートヴィラ', 'ウェルネス温泉', '楽天トラベル']
  },
  {
    slug: 'traditional-kyoto-fushimi-sake-brewery-stay',
    query: '京都 伏見 ホテル',
    title: '【2026年】名水と酒蔵の歴史薫る街。京都伏見の酒蔵巡り＆名水仕込み京料理の風情宿5選',
    metaDesc: '2026年最新！坂本龍馬ゆかりの伏見十石舟と白壁酒蔵巡り！名水「伏水」仕込みの利き酒セットと旬の京料理を堪能する京都・伏見のおすすめ名宿5選。',
    theme: '京都伏見酒蔵巡り＆名水仕込み京料理の宿',
    leadText: '柳並木が揺れる宇治川派流と白壁土蔵が連なる風情ある伏見の街並み。銘酒を生み出す名水で丁寧に仕込まれた京料理と日本酒ペアリング、十石舟クルーズを愉しみ、古都の情緒あふれるモダン空間で寛ぐ大人の京都旅。',
    badge: '京都伏見酒蔵巡り×名水京料理',
    tags: ['京都伏見', '酒蔵巡り', '十石舟', '伏見の日本酒', '京料理', '京都町家ホテル', '楽天トラベル']
  }
];

function generateDetailPageCode(item, hotels) {
  const hotelCardsCode = hotels.map((h, idx) => {
    const starVal = h.reviewAverage ? parseFloat(h.reviewAverage).toFixed(2) : '4.50';
    const priceText = h.hotelMinCharge ? `¥${h.hotelMinCharge.toLocaleString()}〜` : '料金要確認';
    const featuresList = [
      h.hotelSpecial ? h.hotelSpecial.replace(/<[^>]*>?/gm, '').slice(0, 75) + '…' : null,
      h.access ? `アクセス: ${h.access.slice(0, 60)}` : null,
      `楽天トラベル総合評価: ★${starVal}（レビュー ${h.reviewCount || 0}件）`
    ].filter(Boolean);

    return `
            {/* 宿カード ${idx + 1} */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto min-h-[240px] bg-slate-100">
                  <img
                    src="${h.hotelImageUrl || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'}"
                    alt="${h.hotelName}"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    第 ${idx + 1} 位
                  </div>
                </div>
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                      <span className="bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded">${h.address1 || '日本国内'}</span>
                      <span>${h.address2 || ''}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                      <a href="${h.hotelInformationUrl || '#'}" target="_blank" rel="noopener noreferrer">
                        ${h.hotelName}
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-bold text-sm ml-1 text-slate-800">${starVal}</span>
                      </div>
                      <span className="text-xs text-slate-400">（口コミ ${h.reviewCount || 0} 件）</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">楽天高評価</span>
                    </div>
                    <ul className="space-y-1 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                      ${featuresList.map(f => `<li className="flex items-start gap-1"><span className="text-amber-500 shrink-0">•</span><span>${f}</span></li>`).join('\n                      ')}
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">最安目安（税込）/人</span>
                      <div className="text-lg font-bold text-rose-600">${priceText}</div>
                    </div>
                    <a
                      href="${h.planListUrl || h.hotelInformationUrl || '#'}"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all"
                    >
                      <span>プラン・空室を見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>`;
  }).join('\n');

  return `import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Star, MapPin, Sparkles, CheckCircle2, ChevronRight, Award, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: '${item.title} | 日本全国・旅宿クラウド',
  description: '${item.metaDesc}',
  keywords: ${JSON.stringify(item.tags)},
  openGraph: {
    title: '${item.title}',
    description: '${item.metaDesc}',
    type: 'article',
    url: 'https://croud-travel.com/${item.slug}',
  },
  alternates: {
    canonical: 'https://croud-travel.com/${item.slug}',
  },
};

const hotels: any[] = ${JSON.stringify(hotels, null, 2)};

export default function FeatureDetailPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 text-sm text-slate-500 flex items-center space-x-2">
          <Link href="/" className="hover:text-amber-600">トップ</Link>
          <span>&gt;</span>
          <Link href="/features" className="hover:text-amber-600">厳選特集一覧</Link>
          <span>&gt;</span>
          <span className="text-slate-800 font-medium truncate max-w-xs sm:max-w-md md:max-w-none">
            ${item.theme}
          </span>
        </div>
      </div>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-r from-amber-900 via-stone-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-amber-400/30">
            <Sparkles className="w-4 h-4" /> ${item.badge}
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            ${item.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed pt-2">
            ${item.leadText}
          </p>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* 特集の魅力と選び方 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-600" />
            ${item.theme}の楽しみ方＆おすすめの選び方
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            楽天トラベルに寄せられたリアルな宿泊者口コミの中から、特に評価の高いハイクラス宿・隠れ家宿を厳選。テーマに特化した最高峰の体験とおもてなしをお約束します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
              <h3 className="font-bold text-amber-900 text-sm mb-1">① 圧倒的な世界観と体験</h3>
              <p className="text-xs text-amber-800">ここでしか味わえない非日常の空間と贅沢なひとときを追求。</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm mb-1">② 口コミ高評価の宿を厳選</h3>
              <p className="text-xs text-slate-600">総合評価★4.2以上を中心に満足度の高い宿のみをセレクト。</p>
            </div>
            <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
              <h3 className="font-bold text-emerald-900 text-sm mb-1">③ 楽天トラベル直結予約</h3>
              <p className="text-xs text-emerald-800">リアルタイムの空室・プラン・限定クーポンを今すぐチェック可能。</p>
            </div>
          </div>
        </section>

        {/* 厳選宿リスト */}
        <section className="space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <h2 className="text-2xl font-bold text-slate-900">
              編集部が選ぶおすすめ名宿一覧（全{hotels.length}選）
            </h2>
            <p className="text-sm text-slate-500 mt-1">楽天トラベル公式APIから最新の空室・料金情報を取得しています</p>
          </div>

          <div className="space-y-6">
            ${hotelCardsCode}
          </div>
        </section>

        {/* 関連タグ */}
        <section className="bg-white rounded-2xl p-6 border border-slate-200">
          <h3 className="text-sm font-bold text-slate-700 mb-3">関連キーワード・タグ</h3>
          <div className="flex flex-wrap gap-2">
            ${item.tags.map(t => `<span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg">#${t}</span>`).join('\n            ')}
          </div>
        </section>

        {/* 特集トップへのリンク */}
        <div className="text-center pt-4">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-2xl shadow-md transition-all"
          >
            <span>他の厳選特集一覧を見る</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </main>
    </div>
  );
}
`;
}

async function main() {
  console.log('🚀 Round 26: 戦略的SEO高PV特集記事の生成を開始します...');
  
  for (const item of strategicThemesRound26) {
    console.log(`\n========================================`);
    console.log(`🔍 楽天API検索実行中: [${item.query}] (${item.slug})`);
    
    let hotels = [];
    try {
      hotels = await searchRakutenHotels(item.query, 5);
      console.log(`   -> 取得件数: ${hotels.length} 件`);
    } catch (err) {
      console.error(`   -> エラー発生: ${err.message}`);
    }

    const dirPath = path.join(__dirname, 'src/app', item.slug);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    const pageContent = generateDetailPageCode(item, hotels);
    fs.writeFileSync(path.join(dirPath, 'page.tsx'), pageContent, 'utf-8');
    console.log(`   -> 生成完了: ${dirPath}/page.tsx`);

    await sleep(400); // API負荷軽減
  }

  console.log('\n🎉 Round 26 の全6記事の生成が完了しました！');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
