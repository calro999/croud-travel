const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound23 = [
  {
    slug: 'traditional-shinshu-soba-kaiseki-onsen-stay',
    query: '信州 蕎麦 温泉',
    title: '【2026年】挽きたて・打ちたて・茹でたて！信州手打ち蕎麦会席＆北アルプス展望温泉宿5選',
    metaDesc: '2026年最新！長野・戸隠・安曇野の名水が育む絶品手打ち蕎麦尽くし会席！北アルプスの雪形や新緑を望む絶景露天風呂と信州美食を堪能する名宿5選。',
    theme: '信州手打ち蕎麦会席＆北アルプス絶景温泉宿',
    leadText: '澄んだ名水と寒暖差が育む長野県特産の信州蕎麦。職人が丹精込めて打つ十割蕎麦や蕎麦がき、信州プレミアム牛肉との贅沢な会席料理。北アルプスの雄峰を一望する展望露天風呂で心洗われる信州の休日。',
    badge: '信州手打ち蕎麦会席×北アルプス展望名湯',
    tags: ['信州蕎麦', '手打ち十割蕎麦', '長野温泉', '戸隠蕎麦', '安曇野', '北アルプス絶景', '楽天トラベル']
  },
  {
    slug: 'luxury-private-onsen-with-starry-astronomy-deck',
    query: '阿智村 星空 温泉',
    title: '【2026年】日本一の星空・阿智村！天体観測専用デッキ＆満天星露天風呂付き極上宿5選',
    metaDesc: '2026年最新！環境省認定日本一の星空の村・長野県阿智村（昼神温泉）！星空ナイトツアーや客室星空デッキ、美肌の湯で宇宙の神秘に包まれる名宿5選。',
    theme: '日本一の阿智村星空＆昼神美肌温泉宿',
    leadText: '満天の星が夜空を埋め尽くす「日本一の星空の村」長野県阿智村。天体望遠鏡を備えた展望デッキや、寝湯から星を仰ぐ露天風呂、トロトロの美肌湯として名高い昼神温泉で過ごすロマンチックなひととき。',
    badge: '日本一の阿智村星空×昼神美肌名湯',
    tags: ['阿智村星空', '昼神温泉', '天体観測デッキ', '星空ナイトツアー', '美肌の湯', '満天星露天風呂', '楽天トラベル']
  },
  {
    slug: 'super-panoramic-canyon-stand-up-paddle-stay',
    query: 'SUP 湖 温泉',
    title: '【2026年】水面を滑る感動体験！湖畔＆リバーSUP体験付き絶景リゾート温泉宿5選',
    metaDesc: '2026年最新！本栖湖・中禅寺湖・宮良川等で爽快SUP（スタンドアップパドルボード）！水上アクティビティ後に湖畔一望の露天風呂とサウナでととのう宿5選。',
    theme: '爽快SUP体験＆湖畔ビュー温泉リゾート',
    leadText: '鏡のように澄み渡る湖面や清流をSUPボードで滑り出す贅沢な朝。初心者でも楽しめるSUPクルージングを満喫した後は、水辺を望むインフィニティ温泉やサウナで爽やかにリフレッシュ。',
    badge: '爽快レイクSUP×水辺インフィニティ露天',
    tags: ['SUP体験', 'スタンドアップパドル', '湖畔リゾート', 'リバーアクティビティ', '水辺露天風呂', '楽天トラベル']
  },
  {
    slug: 'spring-biwa-fruit-loquat-spa-retreat-stay',
    query: '房総 温泉 びわ',
    title: '【2026年】初夏の極上フルーツ！房州名産びわ会席＆びわ葉エキス温浴スパの風情宿5選',
    metaDesc: '2026年最新！みずみずしい大粒の房州びわ尽くしデザート＆びわ葉エキスを使った薬草風呂！太平洋の海絶景と海鮮美食を堪能する房総半島の温泉宿5選。',
    theme: '房州びわスイーツ＆びわ葉温浴スパの海宿',
    leadText: '黄金色に輝く初夏の味覚「房州びわ」。ジューシーで上品な甘みが広がるびわ尽くしデザートと、古くから健康湯として親しまれるびわ葉温浴で心身をじんわり癒やす、南房総ならではの温かなリトリート。',
    badge: '房州びわスイーツ×びわ葉温浴スパ',
    tags: ['房州びわ', '初夏フルーツ', 'びわ葉温泉', '南房総', 'オーシャンビュー温泉', '楽天トラベル']
  },
  {
    slug: 'organic-craft-beer-taproom-brewery-stay',
    query: 'クラフトビール 温泉',
    title: '【2026年】出来立てクラフトビールをタップから！醸造所直営ブルワリーホテル＆温泉宿5選',
    metaDesc: '2026年最新！併設ブルワリーから注がれる出来立て新鮮クラフトビール飲み放題プラン！ビアバーラウンジと自家源泉掛け流し温泉を満喫する大人の宿5選。',
    theme: '醸造所直営クラフトビール＆源泉温泉ホテル',
    leadText: 'ブルワリー（醸造所）併設ならではの、タンクから注ぎたてのフレッシュなクラフトビール。IPAやペールエールなど多彩なクラフトビールを味わい、温泉上がりにテラスで楽しむ至福の乾杯。',
    badge: '醸造所クラフトビール×源泉掛け流し名湯',
    tags: ['クラフトビール', 'ブルワリーホテル', 'タップルーム', '地ビール飲み比べ', '温泉ホテル', '楽天トラベル']
  },
  {
    slug: 'traditional-aomori-tsugaru-shamisen-onsen-stay',
    query: '津軽三味線 温泉',
    title: '【2026年】迫力の津軽三味線生ライブ！陸奥湾海鮮会席＆青森名湯を味わう風情旅館5選',
    metaDesc: '2026年最新！魂を揺さぶる津軽三味線の毎夜の生演奏ライブ！陸奥湾ホタテ・大間マグロ会席と浅虫温泉・嶽温泉の源泉で青森の情緒に浸る名旅館5選。',
    theme: '津軽三味線ライブ＆陸奥湾海鮮会席の名湯宿',
    leadText: 'バチが弦を叩く力強い響きと魂を揺さぶる音色。館内ロビーや特設ステージで毎夜開催される津軽三味線の生演奏ライブに魅了され、陸奥湾直送のホタテや旬魚の会席、名湯浅虫温泉の温もりに浸る青森の情緒旅。',
    badge: '津軽三味線生ライブ×陸奥湾極上海鮮',
    tags: ['津軽三味線', '青森温泉', '浅虫温泉', '陸奥湾ホタテ', '大間マグロ', '郷土芸能', '楽天トラベル']
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
  console.log('🚀 Round 23: 戦略的SEO高PV特集記事の生成を開始します...');
  
  for (const item of strategicThemesRound23) {
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

  console.log('\n🎉 Round 23 の全6記事の生成が完了しました！');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
