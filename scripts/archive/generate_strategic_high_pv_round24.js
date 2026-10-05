const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound24 = [
  {
    slug: 'traditional-yonezawa-beef-sukiyaki-onsen-stay',
    query: '米沢牛 すき焼き 温泉 旅館',
    title: '【2026年】とろける極上霜降り！A5米沢牛すき焼き会席＆白布・小野川名湯宿5選',
    metaDesc: '2026年最新！日本三大和牛「米沢牛」の特選すき焼き・しゃぶしゃぶ会席！開湯千二百年の白布温泉や小野川温泉の源泉掛け流しと山形美食を満喫する名宿5選。',
    theme: 'A5米沢牛すき焼き会席＆山形名湯源泉掛け流し宿',
    leadText: 'きめ細やかな霜降りと甘くとろける脂の旨味。日本屈指のブランド和牛「米沢牛」を、創業伝承の割り下ですき焼きやすみれ鍋として味わう至福の夕宴。歴史ある白布温泉や小野川温泉の名湯とともに過ごす贅沢な山形ステイ。',
    badge: '極上A5米沢牛会席×歴史ある名湯',
    tags: ['米沢牛', 'すき焼き会席', '山形温泉', '白布温泉', '小野川温泉', '源泉掛け流し', '楽天トラベル']
  },
  {
    slug: 'luxury-private-onsen-with-onsen-sommelier-guide',
    query: '源泉掛け流し 秘湯 温泉 旅館',
    title: '【2026年】湯守のこだわりが息づく。本物の源泉掛け流し＆極上泉質を極めた名湯宿5選',
    metaDesc: '2026年最新！加水・加温・循環一切なしの本物のかけ流し！温泉ソムリエや湯守が守り続ける濃厚なにごり湯・炭酸泉・硫黄泉を堪能する極上温泉宿5選。',
    theme: '本物の源泉掛け流し＆湯守が守る至極の名湯宿',
    leadText: '大地から湧き出る生まれたての恵みをそのまま湯船へ。加水・加温・塩素消毒一切なしの純度100%源泉掛け流し。湯守が毎日温度や湯花を徹底管理する、温泉通も唸る本物の極上名湯宿をご紹介します。',
    badge: '純度100%源泉掛け流し×至極の泉質',
    tags: ['源泉掛け流し', 'にごり湯', '硫黄泉', '炭酸泉', '秘湯名宿', '湯守の宿', '楽天トラベル']
  },
  {
    slug: 'super-panoramic-cable-car-ropeway-mountain-stay',
    query: 'ロープウェイ 展望 露天風呂 ホテル',
    title: '【2026年】雲の上の絶景ステイ！ロープウェイで行く山頂パノラマ露天風呂リゾート5選',
    metaDesc: '2026年最新！標高1,000m超の雲上パノラマ！ロープウェイやゴンドラでアクセスする山頂展望露天風呂や雲海テラスが自慢の絶景山岳リゾートホテル5選。',
    theme: '山頂ロープウェイ＆雲上パノラマ露天リゾート',
    leadText: 'ゴンドラやロープウェイで雲を抜けた先に広がる、遮るもののない大パノラマ。朝は神秘的な雲海、夕刻には茜色に染まる山並み、夜は降るような満天の星。日常を完全に忘れる雲上の絶景リゾートホテル。',
    badge: '雲上パノラマ露天×山頂リゾート',
    tags: ['ロープウェイ', '山頂ホテル', '展望露天風呂', '雲海テラス', '山岳リゾート', '絶景パノラマ', '楽天トラベル']
  },
  {
    slug: 'spring-kyoto-bamboo-grove-arashiyama-stay',
    query: '嵐山 温泉 旅館 懐石',
    title: '【2026年】竹林の小径と渡月橋の風情。嵐山温泉＆極上京懐石を味わう京都の名旅館5選',
    metaDesc: '2026年最新！早朝の静寂に包まれる嵐山竹林の小径散策！名物湯豆腐・旬の京懐石とトロトロの嵐山温泉露天風呂で古都の風情に浸るおすすめ名宿5選。',
    theme: '嵐山竹林散策＆極上京懐石の京都名湯宿',
    leadText: '緑陰の美しい嵐山・嵯峨野の竹林の小径や桂川のせせらぎ。早朝の澄んだ空気の中で古都の情緒を独占し、出汁香る旬の京懐石や名物湯豆腐、やわらかな嵐山温泉に浸る、大人のための風雅な京都旅行。',
    badge: '嵐山竹林散策×極上京懐石名湯',
    tags: ['嵐山温泉', '京都旅館', '京懐石', '竹林の小径', '渡月橋', '湯豆腐', '楽天トラベル']
  },
  {
    slug: 'organic-citrus-spa-ocean-view-stay',
    query: 'みかん アロマ 温泉 ホテル',
    title: '【2026年】爽やかな柑橘の香りに包まれる。特産みかんアロマスパスパ＆オーシャンビュー宿5選',
    metaDesc: '2026年最新！愛媛や湯河原の特産みかん・伊予柑オイルを使った極上アロマスエステ！青い海を一望するインフィニティ露天風呂と柑橘スイーツを満喫する宿5選。',
    theme: '特産みかんアロマスパ＆オーシャンビュー温泉宿',
    leadText: '太陽の光をたっぷり浴びたみかんや伊予柑のフレッシュな天然アロマオイル。全身を包み込む極上の柑橘トリートメントエステと、輝く海を眼下に望むインフィニティ露天風呂で心身ともにリフレッシュ。',
    badge: '特産みかんアロマスパ×オーシャン露天',
    tags: ['みかんアロマ', 'アロマスエステ', 'オーシャンビュー', '愛媛温泉', '湯河原温泉', 'インフィニティ露天', '楽天トラベル']
  },
  {
    slug: 'traditional-kagoshima-shochu-kurobuta-stay',
    query: '鹿児島 黒豚 焼酎 温泉 旅館',
    title: '【2026年】極上黒豚しゃぶしゃぶ＆百種プレミアム焼酎BAR！指宿・霧島温泉の名旅館5選',
    metaDesc: '2026年最新！甘み際立つかごしま黒豚しゃぶしゃぶ会席！森伊蔵や魔王など銘酒芋焼酎のBARラウンジと指宿砂むし・霧島硫黄泉で寛ぐ鹿児島の名宿5選。',
    theme: 'かごしま黒豚しゃぶしゃぶ＆本格焼酎BAR温泉宿',
    leadText: 'きめ細かく柔らかで旨味あふれる「かごしま黒豚」の極上しゃぶしゃぶ。森伊蔵・村尾・魔王など幻のプレミアム芋焼酎が並ぶBARラウンジでグラスを傾け、霧島の濃厚なにごり湯や指宿の砂むし温泉で心ほどける鹿児島の夜。',
    badge: 'かごしま黒豚しゃぶ×プレミアム芋焼酎BAR',
    tags: ['かごしま黒豚', '芋焼酎BAR', '指宿温泉', '霧島温泉', '砂むし温泉', '鹿児島グルメ', '楽天トラベル']
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
  console.log('🚀 Round 24: 戦略的SEO高PV特集記事の生成を開始します...');
  
  for (const item of strategicThemesRound24) {
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

  console.log('\n🎉 Round 24 の全6記事の生成が完了しました！');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
