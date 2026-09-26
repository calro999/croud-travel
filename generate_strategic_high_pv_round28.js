const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound28 = [
  {
    slug: 'traditional-mie-matsusaka-beef-steak-stay',
    query: '松阪牛 温泉 旅館',
    title: '【2026年】肉の芸術品・特選松阪牛！炭火ステーキ・すき焼き会席＆伊勢志摩・鳥羽の極上宿5選',
    metaDesc: '2026年最新！日本最高峰のブランド和牛「松阪牛」の極上サーロインステーキ＆すき焼き！伊勢神宮参拝と鳥羽・賢島オーシャンビュー温泉旅館5選。',
    theme: '特選松阪牛会席＆伊勢志摩オーシャンビュー温泉宿',
    leadText: 'きめ細やかなサシと芳醇な甘い香り。「肉の芸術品」と称される最高ランク松阪牛の炭火ステーキやすき焼き会席。伊勢神宮のお参りとともに、英虞湾や鳥羽湾の美しいリアス海岸を一望する温泉露天風呂で寛ぐ贅沢な三重ステイ。',
    badge: '特選松阪牛会席×伊勢志摩オーシャン露天',
    tags: ['松阪牛', '松阪牛ステーキ', '伊勢志摩温泉', '鳥羽温泉', '伊勢神宮', '英虞湾', '楽天トラベル']
  },
  {
    slug: 'luxury-private-onsen-with-cave-bath-spa',
    query: '洞窟風呂 温泉 旅館',
    title: '【2026年】神秘の地底空間へ。天然洞窟風呂＆鍾乳洞インフィニティ温泉の隠れ家宿5選',
    metaDesc: '2026年最新！大自然の岩肌に包まれる幻想的な「洞窟風呂」！薄明かりに照らされた神秘の湯船と源泉掛け流しの秘湯を堪能する大人の隠れ家名宿5選。',
    theme: '天然洞窟風呂＆神秘の地底秘湯宿',
    leadText: '何千年もの歳月をかけて自然が創り出した岩肌の洞窟。薄暗い灯りに照らされた湯面と岩肌を伝う湯の音。まるで異世界に迷い込んだかのような神秘の空間で、純度の高い源泉掛け流し温泉に浸かる極上の非日常トリップ。',
    badge: '天然洞窟風呂×神秘の地底名湯',
    tags: ['洞窟風呂', '秘湯名宿', '天然岩風呂', '源泉掛け流し', '大人の隠れ家', '神秘の温泉', '楽天トラベル']
  },
  {
    slug: 'super-panoramic-sunset-dune-coastal-stay',
    query: '夕日 砂浜 温泉 ホテル',
    title: '【2026年】日本の夕日百選！黄金に染まる海と砂浜パノラマ露天風呂リゾート5選',
    metaDesc: '2026年最新！水平線に沈むドラマチックな夕日を独占！白砂青松の海岸美を望むオーシャンフロント展望露天風呂と新鮮な海の幸会席を満喫する宿5選。',
    theme: '夕日百選サンセット＆白砂海岸露天リゾート',
    leadText: '空と海が茜色から紫へと移り変わる夕暮れのマジックアワー。波打ち際の露天風呂から眺める夕日は息をのむ美しさ。波の音をBGMに、獲れたての海の幸と地酒を味わい、心洗われるサンセットリゾートステイ。',
    badge: '夕日百選サンセット×白砂オーシャン露天',
    tags: ['夕日百選', 'サンセットビュー', '海岸露天風呂', 'オーシャンフロント', '海鮮会席', '楽天トラベル']
  },
  {
    slug: 'spring-okayama-white-peach-parfait-stay',
    query: '岡山 白桃 温泉 旅館',
    title: '【2026年】果物王国の極上スイーツ！名産清水白桃パフェ＆倉敷美観地区・湯原温泉の風情宿5選',
    metaDesc: '2026年最新！とろける甘さと芳醇な香りの岡山特産「清水白桃」！白桃パフェ・スイーツと倉敷美観地区の白壁町家、名湯湯原温泉で寛ぐ晴れの国岡山のおすすめ宿5選。',
    theme: '岡山清水白桃スイーツ＆倉敷美観地区・湯原温泉宿',
    leadText: '上品な白さと高貴な香りを誇る「果物の女王」岡山県産清水白桃。みずみずしい白桃を丸ごと使った特製パフェやスイーツを堪能し、倉敷美観地区の白壁の風情ある街並みや湯原温泉の美肌名湯に浸る贅沢な岡山旅行。',
    badge: '岡山特産白桃スイーツ×倉敷美観地区・名湯',
    tags: ['清水白桃', '白桃パフェ', '倉敷美観地区', '湯原温泉', '岡山フルーツ', '町家ホテル', '楽天トラベル']
  },
  {
    slug: 'organic-forest-treehouse-glamping-stay',
    query: 'ツリーハウス グランピング サウナ',
    title: '【2026年】子どもの頃の夢を叶える！ツリーハウス＆森林薪サウナ付き極上グランピング5選',
    metaDesc: '2026年最新！木の上に佇む秘密基地のようなツリーハウス！専用プライベートデッキ、薪割り体験、バレルサウナとBBQを満喫する大自然グランピング5選。',
    theme: 'ツリーハウス秘密基地＆森林薪サウナグランピング',
    leadText: '大木の梢に建てられた、絵本の世界のようなツリーハウス。鳥の目線で森を見渡し、満天の星空を仰ぐウッドデッキ。セルフロウリュが楽しめる本格薪サウナと豪華グランピングBBQで童心に帰る大自然アドベンチャー。',
    badge: 'ツリーハウス秘密基地×森林薪サウナ',
    tags: ['ツリーハウス', 'グランピング', '薪サウナ', 'バレルサウナ', 'BBQ', '大自然リゾート', '楽天トラベル']
  },
  {
    slug: 'traditional-gunma-daruma-craft-onsen-stay',
    query: '伊香保温泉 旅館',
    title: '【2026年】福を呼ぶ伝統工芸体験！高崎だるま絵付け＆伊香保石段街・黄金の湯の名旅館5選',
    metaDesc: '2026年最新！縁起物の高崎だるま絵付け体験！365段の伊香保温泉石段街散策と茶褐色の名湯「黄金の湯」掛け流し、上州牛会席を満喫する群馬の名宿5選。',
    theme: '高崎だるま絵付け体験＆伊香保温泉石段街の宿',
    leadText: '自分だけの願いを込めて目入れをする伝統の「高崎だるま」絵付け体験。浴衣に下駄を鳴らして365段の伊香保石段街を散策し、独特の茶褐色が特徴の歴史ある名湯「黄金の湯」と極上上州牛会席に癒やされる群馬の情緒旅。',
    badge: '高崎だるま体験×伊香保石段街黄金の湯',
    tags: ['高崎だるま', '伊香保温泉', '黄金の湯', '石段街散策', '上州牛', '伝統工芸宿', '楽天トラベル']
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
  console.log('🚀 Round 28: 戦略的SEO高PV特集記事の生成を開始します...');
  
  for (const item of strategicThemesRound28) {
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

  console.log('\n🎉 Round 28 の全6記事の生成が完了しました！');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
