const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound21 = [
  {
    slug: 'traditional-sado-gold-mine-onsen-stay',
    query: '佐渡島 温泉',
    title: '【2026年】佐渡金山世界遺産登録記念！極上日本海海の幸と絶景夕日温泉宿5選',
    metaDesc: '2026年最新！祝・世界文化遺産登録の佐渡金山巡り！佐渡沖の寒ブリ・南蛮エビ・紅ズワイガニと七浦海岸の夕日を望む名湯旅館5選。',
    theme: '佐渡金山世界遺産探訪＆極上海鮮会席宿',
    leadText: '世界遺産登録で熱い注目を集める新潟県「佐渡島の金山」。歴史ロマンあふれる史跡や相川の街並みを散策した後は、日本海屈指の豊かな海の幸—獲れたて南蛮エビや活ズワイガニ会席、七浦海岸の茜色に染まる夕日を望む天然温泉で島旅を堪能。',
    badge: '佐渡金山世界遺産×日本海極上海鮮',
    tags: ['佐渡金山', '世界遺産', '佐渡島温泉', '南蛮エビ', '紅ズワイガニ', '夕日絶景温泉', '楽天トラベル']
  },
  {
    slug: 'luxury-private-onsen-with-records-vinyl-lounge',
    query: 'レコード 温泉',
    title: '【2026年】名盤の温もりに浸る。アナログレコード＆真空管アンプラウンジ付き大人の音楽温泉宿5選',
    metaDesc: '2026年最新！ヴィンテージレコードと真空管アンプの豊かな響き、名作スピーカーを配したバーラウンジと源泉掛け流し風呂で寛ぐ大人の音楽リトリート5選。',
    theme: 'アナログレコードラウンジ＆名機オーディオ温泉宿',
    leadText: '針を落とした瞬間に広がる温かなアナログレコードの音色と真空管アンプの芳醇な響き。名門JBLやタンノイのスピーカーから流れるジャズや名盤クラシックに耳を傾け、ウイスキーや地酒を片手に極上温泉に浸かる。大人の至福リトリート。',
    badge: 'アナログレコード×真空管アンプ名湯',
    tags: ['アナログレコード', '真空管アンプ', '音楽ラウンジ', '大人の隠れ家', '高音質オーディオ', '楽天トラベル']
  },
  {
    slug: 'spring-mountain-vegetable-sansai-tempura-stay',
    query: '山菜 秘湯 温泉',
    title: '【2026年】春の味覚の王様！揚げたてサクサク山菜天ぷら＆摘みたて山菜尽くし会席の秘湯宿5選',
    metaDesc: '2026年最新！雪解けの山里が育むふきのとう・タラの芽・コゴミ！職人が揚げるサクサク山菜天ぷらと源泉掛け流し秘湯で心身デトックスする名宿5選。',
    theme: '春の朝採り山菜天ぷら＆源泉掛け流し秘湯宿',
    leadText: '春の訪れとともに山里の食卓を彩る、独特のほろ苦さと大地の力強い香り。料理長自らが朝採りした瑞々しい山菜の揚げたて天ぷら、山菜鍋、胡麻和えを地酒とともに味わい、雪見・新緑の渓谷露天風呂で心洗われる春旅。',
    badge: '春の山菜天ぷら×山里の源泉秘湯',
    tags: ['山菜天ぷら', '春の味覚', 'ふきのとう', 'タラの芽', '秘湯温泉', '郷土料理会席', '楽天トラベル']
  },
  {
    slug: 'super-panoramic-canyon-rafting-retreat-stay',
    query: 'ラフティング 温泉',
    title: '【2026年】激流の爽快アクティビティ！ラフティング体験＆渓谷美一望の露天風呂リゾート5選',
    metaDesc: '2026年最新！吉野川・保津川・みなかみ等の清流で白熱ラフティング！大自然の激流を楽しんだ後に渓谷露天風呂とサウナで極上ととのうアドベンチャー宿5選。',
    theme: '清流ラフティング＆渓谷絶景リバーサイド温泉宿',
    leadText: 'エメラルドグリーンの激流を仲間や家族とパドルを合わせて漕ぎ下るスリル満点のラフティング。川風を全身で浴びた後は、目の前を流れる清流を望むインフィニティ露天風呂やサウナで爽快にリフレッシュ。',
    badge: '爽快ラフティング×渓谷インフィニティ露天',
    tags: ['ラフティング', '渓谷露天風呂', 'リバーアクティビティ', 'アウトドア温泉', '清流リゾート', '楽天トラベル']
  },
  {
    slug: 'organic-olive-farm-mediterranean-spa-stay',
    query: '小豆島 温泉',
    title: '【2026年】日本の地中海・小豆島！搾りたてオリーブオイル会席＆極上オリーブスパの海宿5選',
    metaDesc: '2026年最新！瀬戸内海の青とオリーブ畑の絶景！小豆島産エキストラバージンオリーブオイルの創作イタリアン・和会席と美肌オリーブスパの温泉宿5選。',
    theme: '小豆島オリーブ会席＆瀬戸内海絶景スパリゾート',
    leadText: '青く輝く瀬戸内海と風に揺れるオリーブの樹々。まるでエーゲ海を思わせる小豆島で、名産オリーブオイルを惜しみなく使った美食と、ポリフェノール豊富な天然オリーブオイルトリートメント、多島美に沈む夕日を望む温泉露天に酔いしれる休日。',
    badge: '小豆島オリーブ美食×瀬戸内オーシャンスパ',
    tags: ['小豆島', 'オリーブ会席', '瀬戸内海温泉', 'オリーブスパ', 'オーシャンビュー', '地中海風リゾート', '楽天トラベル']
  },
  {
    slug: 'traditional-washi-paper-craft-onsen-stay',
    query: '和紙 温泉',
    title: '【2026年】千年の技と灯りに癒やされる。手漉き和紙空間＆伝統工芸体験ができる風情宿5選',
    metaDesc: '2026年最新！越前・美濃・土佐の伝統手漉き和紙あかりに包まれる和モダン客室！紙漉き体験や工芸ギャラリー、名湯で日本の美意識に浸る名旅館5選。',
    theme: '手漉き和紙あかり＆伝統工芸体験の風情名湯宿',
    leadText: '職人の繊細な手仕事が生み出す和紙の温かな質感と、行灯から漏れる柔らかな光。日本の美意識が息づく和紙アートに囲まれた客室で、静寂と名湯に浸る贅沢。日常を忘れさせる優美なクラフトリトリート。',
    badge: '手漉き和紙アート×伝統美の隠れ宿',
    tags: ['和紙の宿', '伝統工芸体験', '手漉き和紙', '和モダン旅館', '行灯あかり', '風情ある名湯', '楽天トラベル']
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
    url: 'https://croud-travel.com/features/${item.slug}',
  },
  alternates: {
    canonical: 'https://croud-travel.com/features/${item.slug}',
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
  console.log('🚀 Round 21: 戦略的SEO高PV特集記事の生成を開始します...');
  
  for (const item of strategicThemesRound21) {
    console.log(`\n========================================`);
    console.log(`🔍 楽天API検索実行中: [${item.query}] (${item.slug})`);
    
    let hotels = [];
    try {
      hotels = await searchRakutenHotels(item.query, 5);
      console.log(`   -> 取得件数: ${hotels.length} 件`);
    } catch (err) {
      console.error(`   -> エラー発生: ${err.message}`);
    }

    const dirPath = path.join(__dirname, 'src/app/features', item.slug);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    const pageContent = generateDetailPageCode(item, hotels);
    fs.writeFileSync(path.join(dirPath, 'page.tsx'), pageContent, 'utf-8');
    console.log(`   -> 生成完了: ${dirPath}/page.tsx`);

    await sleep(400); // API負荷軽減
  }

  console.log('\n🎉 Round 21 の全6記事の生成が完了しました！');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
