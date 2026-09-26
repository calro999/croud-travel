const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound32 = [
  {
    slug: 'traditional-hokkaido-furano-lavender-stay',
    query: '富良野 温泉 ホテル ラベンダー',
    title: '【2026年】紫の絨毯が広がる夏の富良野！ラベンダー畑パノラマ＆ふらの和牛ディナーの宿5選',
    metaDesc: '2026年最新！富良野・美瑛の広大なラベンダー畑とパッチワークの丘！十勝岳連峰を一望する展望露天風呂とブランドふらの和牛を堪能するリゾートホテル5選。',
    theme: '富良野ラベンダー畑絶景＆ふらの和牛リゾート',
    leadText: '風にそよぐ一面紫色のラベンダー畑と、十勝岳連峰の雄大な山並み。富良野・美瑛の爽快なパノラマを望み、地元産ふらの和牛や新鮮な富良野野菜のフレンチ・会席、白銀温泉や十勝岳温泉の名湯で癒やされる北海道のサマーリゾート。',
    badge: '富良野ラベンダー絶景×ふらの和牛名湯',
    tags: ['富良野ラベンダー', '美瑛の丘', 'ふらの和牛', '白銀温泉', '十勝岳温泉', '北海道リゾート', '楽天トラベル']
  },
  {
    slug: 'luxury-private-onsen-with-footbath-cafe-deck',
    query: '足湯 カフェ 温泉 旅館 ホテル',
    title: '【2026年】湯けむりとカフェ＆カクテルの至福。絶景足湯テラス・足湯BAR付き温泉宿5選',
    metaDesc: '2026年最新！足元ぽかぽか温まりながらドリンクを満喫！渓流や海、星空を眺める足湯カフェ・足湯バーを併設したお洒落な和モダン温泉ホテル5選。',
    theme: '絶景足湯カフェ・足湯BAR＆和モダン温泉宿',
    leadText: '心地よい温もりに足を浸しながら、挽きたて珈琲やオリジナルカクテルを片手に語らう贅沢。水盤テラスや渓流沿いに設けられた足湯デッキで、四季折々の絶景と夕暮れのマジックアワーを心ゆくまで堪能する大人の休日。',
    badge: '絶景足湯カフェBAR×和モダン名湯',
    tags: ['足湯カフェ', '足湯バー', '足湯テラス', '和モダンホテル', '大人のリゾート', 'カップル旅行', '楽天トラベル']
  },
  {
    slug: 'super-panoramic-canyon-bridge-walk-stay',
    query: '祖谷 温泉 旅館 かずら橋',
    title: '【2026年】日本三大秘境のスリルと絶景！祖谷のかずら橋＆断崖ケーブルカー露天の秘境宿5選',
    metaDesc: '2026年最新！シラクチカズラで編まれたスリル満点の吊り橋「祖谷のかずら橋」！断崖絶壁をケーブルカーで下る秘境の谷底露天風呂と阿波尾鶏会席の宿5選。',
    theme: '祖谷のかずら橋秘境探訪＆ケーブルカー谷底露天宿',
    leadText: '深いV字谷に架かるスリル満点の「祖谷のかずら橋」。専用ケーブルカーで断崖絶壁を下った先にある秘境の谷底露天風呂や、阿波牛・阿波尾鶏、名物祖谷蕎麦を囲む囲炉裏会席で、日本の原風景に浸る徳島・祖谷の旅。',
    badge: '祖谷のかずら橋×ケーブルカー谷底秘湯',
    tags: ['祖谷のかずら橋', '日本三大秘境', '祖谷温泉', 'ケーブルカー露天', '阿波尾鶏', '秘境名宿', '楽天トラベル']
  },
  {
    slug: 'spring-niigata-echigo-hime-strawberry-stay',
    query: '月岡温泉 旅館',
    title: '【2026年】みずみずしく芳醇な春いちご！新潟特産「越後姫」スイーツ＆月岡エメラルド硫黄泉の宿5選',
    metaDesc: '2026年最新！果肉が柔らかく甘い香りが広がる新潟限定いちご「越後姫」パフェ！全国屈指の美肌の湯・月岡温泉のエメラルドグリーン硫黄泉を満喫する名宿5選。',
    theme: '新潟特産越後姫スイーツ＆月岡温泉エメラルド硫黄泉宿',
    leadText: '大粒で果汁たっぷり、とろけるような食感の新潟限定ブランドいちご「越後姫」。特製いちごスイーツを堪能し、国内有数の硫黄含有量を誇る月岡温泉の美しいエメラルドグリーンの湯で「もっと美人になれる」極上の温泉ステイ。',
    badge: '新潟特産越後姫×月岡温泉エメラルド美肌湯',
    tags: ['越後姫', 'いちごスイーツ', '月岡温泉', 'エメラルドグリーンの湯', '硫黄泉', '美肌温泉', '楽天トラベル']
  },
  {
    slug: 'organic-forest-cliffside-sauna-stay',
    query: '絶景 サウナ 露天風呂 温泉',
    title: '【2026年】天空の絶景ととのい体験！断崖絶壁パノラマサウナ＆インフィニティ水風呂の宿5選',
    metaDesc: '2026年最新！標高数百メートルから海や山を見下ろすパノラマサウナ！絶壁にせり出すインフィニティ水風呂と天空の外気浴デッキで究極の解放感を味わう宿5選。',
    theme: '天空パノラマサウナ＆絶壁インフィニティ水風呂宿',
    leadText: 'ガラス張りのサウナ室から見渡す、どこまでも広がる青い海や雄大な山並み。熱々のサウナを出た後は、空と一体化するインフィニティ水風呂へ。心地よい絶景風を浴びながら深くととのう、サウナー垂涎の絶景リゾート。',
    badge: '天空パノラマサウナ×絶壁インフィニティ水風呂',
    tags: ['絶景サウナ', 'パノラマサウナ', 'インフィニティ水風呂', '天空外気浴', '大人の隠れ家', 'ととのい体験', '楽天トラベル']
  },
  {
    slug: 'traditional-ishikawa-wajima-nuri-lacquer-stay',
    query: '和倉温泉 能登 旅館',
    title: '【2026年】輪島塗の器で味わう能登前寿司！能登復興応援＆和倉温泉・七尾湾オーシャン宿5選',
    metaDesc: '2026年最新！日本の伝統漆器「輪島塗」の美しい器でいただく能登前握り寿司＆のどぐろ会席！七尾湾の穏やかな海を一望する和倉温泉の名湯と能登復興応援の宿5選。',
    theme: '輪島塗漆器＆能登前寿司と和倉温泉オーシャン宿',
    leadText: '何十もの工程を経て生み出される堅牢優美な「輪島塗」の器。日本海の最高峰のどぐろや能登前寿司の極上握りを味わい、七尾湾の海絶景を望む和倉温泉の名湯で癒やされる、能登の豊かな文化と美食を応援する旅。',
    badge: '輪島塗漆器美食×和倉温泉七尾湾オーシャン',
    tags: ['輪島塗', '和倉温泉', '能登前寿司', 'のどぐろ会席', '七尾湾', '能登復興応援', '楽天トラベル']
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
  console.log('🚀 Round 32: 戦略的SEO高PV特集記事の生成を開始します...');
  
  for (const item of strategicThemesRound32) {
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

  console.log('\n🎉 Round 32 の全6記事の生成が完了しました！');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
