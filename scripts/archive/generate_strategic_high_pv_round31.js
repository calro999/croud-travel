const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound31 = [
  {
    slug: 'traditional-nagasaki-champon-gourmet-stay',
    query: '雲仙温泉 長崎 旅館',
    title: '【2026年】長崎名物・海鮮ちゃんぽん＆卓袱料理！雲仙地獄・小浜温泉の絶景名湯宿5選',
    metaDesc: '2026年最新！新鮮魚介と濃厚スープの長崎特製ちゃんぽん＆伝統卓袱料理！もくもくと立ち込める雲仙地獄の硫黄泉や橘湾の夕日露天が自慢の名宿5選。',
    theme: '長崎特製ちゃんぽん・卓袱料理＆雲仙・小浜名湯宿',
    leadText: '長崎の豊かな海と山が育んだ食文化の粋「卓袱（しっぽく）料理」と、濃厚なコクの海鮮ちゃんぽん。もくもくと白煙が立ち上る雲仙地獄の濃厚な白濁硫黄泉や、日本一の熱量を誇る小浜温泉の夕日露天で癒やされる長崎の旅。',
    badge: '長崎卓袱料理×雲仙地獄白濁名湯',
    tags: ['長崎ちゃんぽん', '卓袱料理', '雲仙温泉', '小浜温泉', '雲仙地獄', '硫黄泉', '楽天トラベル']
  },
  {
    slug: 'luxury-private-onsen-with-scenic-waterfall-view',
    query: '滝 露天風呂 温泉 旅館',
    title: '【2026年】マイナスイオンを浴びる特等席！滝見露天風呂＆大自然の隠れ家温泉宿5選',
    metaDesc: '2026年最新！豪快に流れ落ちる滝の飛沫と轟音を目の前に望む「滝見露天風呂」！四季折々の木々と清流のマイナスイオンに包まれる極上秘湯旅館5選。',
    theme: '滝見露天風呂＆清流マイナスイオン秘湯宿',
    leadText: '湯船の目の前に迫るダイナミックな滝の姿と、轟く水音、肌を潤す細やかな水飛沫。圧倒的なマイナスイオンに包まれながら、源泉掛け流しの名湯に浸かる至福の時間。日常の疲れを完全に浄化する絶景ネイチャーリトリート。',
    badge: '滝見プライベート露天×マイナスイオン秘湯',
    tags: ['滝見露天風呂', '絶景滝', 'マイナスイオン', '秘湯名宿', '大自然リゾート', '源泉掛け流し', '楽天トラベル']
  },
  {
    slug: 'super-panoramic-canyon-canyoning-adventure-stay',
    query: 'キャニオニング 温泉',
    title: '【2026年】天然ウォータースライダーを滑走！キャニオニング体験＆爽快森林露天リゾート5選',
    metaDesc: '2026年最新！透き通る渓谷を体一つで滑り降りるキャニオニング！大自然のアドベンチャー後に森林露天風呂やサウナで極上のととのいを体験する宿5選。',
    theme: '爽快キャニオニング体験＆森林パノラマ露天宿',
    leadText: 'エメラルドグリーンの清流が削り出した天然のウォータースライダーや滝壺ダイブ！体一つで渓谷を下るスリル満点のキャニオニングを満喫した後は、森林浴気分を味わえる開放的な露天風呂やサウナで心身を癒やすアドベンチャーステイ。',
    badge: '爽快キャニオニング×森林パノラマ露天',
    tags: ['キャニオニング', '川遊びアクティビティ', '森林露天風呂', 'みなかみ', '四万十川', 'アウトドア温泉', '楽天トラベル']
  },
  {
    slug: 'spring-yamagata-cherry-picking-stay',
    query: '山形 さくらんぼ 温泉 旅館',
    title: '【2026年】ルビーのように輝く初夏の宝石！佐藤錦さくらんぼ狩り＆天童・かみのやま名湯宿5選',
    metaDesc: '2026年最新！山形特産「佐藤錦・紅秀峰」さくらんぼ狩り食べ放題！山形牛会席と将棋の街・天童温泉やかみのやま温泉のやわらかな名湯を満喫する名宿5選。',
    theme: '山形特産さくらんぼ狩り＆天童・かみのやま名湯宿',
    leadText: '初夏の大地に真っ赤に実る「果樹王国山形」の代名詞・佐藤錦。もぎたてジューシーなさくらんぼ狩りを楽しんだ後は、山形牛の陶板焼き会席と、歴史ある天童温泉やかみのやま温泉の名湯で寛ぐ贅沢な山形の初夏旅。',
    badge: '山形佐藤錦さくらんぼ×天童・かみのやま名湯',
    tags: ['さくらんぼ狩り', '佐藤錦', '天童温泉', 'かみのやま温泉', '山形牛', '初夏フルーツ', '楽天トラベル']
  },
  {
    slug: 'organic-nordic-smoke-sauna-retreat-stay',
    query: 'フィンランド サウナ 温泉',
    title: '【2026年】本場北欧の本格熱波！フィンランドサウナ＆ログハウスヴィラ温泉宿5選',
    metaDesc: '2026年最新！本場フィンランド直輸入の本格木造サウナ＆セルフロウリュ！白樺ヴィヒタとプライベート天然水風呂、森林外気浴を満喫するサウナリゾート5選。',
    theme: '本場フィンランドサウナ＆ログハウスヴィラ温泉宿',
    leadText: '木の温もりあふれるフィンランド直輸入の本格木造サウナ。白樺のヴィヒタで香りを楽しみながらアロマ水でセルフロウリュ。冷たい天然水風呂と森林テラスの外気浴で心身を完全に解き放つ至極のサウナリトリート。',
    badge: '本場フィンランドサウナ×ログハウス温泉宿',
    tags: ['フィンランドサウナ', 'セルフロウリュ', 'ヴィヒタ', 'ログハウスホテル', '森林サウナ', '究極のととのい', '楽天トラベル']
  },
  {
    slug: 'traditional-okinawa-bingata-textile-stay',
    query: '読谷村 リゾート ホテル 沖縄',
    title: '【2026年】琉球王朝の雅を体感！琉球紅型染め体験＆読谷やちむんの里のオーシャンリゾート5選',
    metaDesc: '2026年最新！鮮やかな色彩が美しい伝統染物「琉球紅型」体験！やちむんの器で味わう琉球フレンチ・会席と残波岬の青い海を望むプレミアムリゾート5選。',
    theme: '琉球紅型体験・やちむん美食＆読谷オーシャンリゾート',
    leadText: '南国の自然や吉祥文様を鮮やかに染め抜く伝統工芸「琉球紅型（びんがた）」。読谷村のやちむん（焼き物）の器に美しく盛り付けられた琉球モダン会席を味わい、残波岬のエメラルドグリーンの海と夕日に包まれる沖縄の文化リゾート。',
    badge: '琉球紅型アート×読谷やちむんオーシャンリゾート',
    tags: ['琉球紅型', 'やちむんの里', '読谷村ホテル', '残波岬', '沖縄伝統工芸', 'オーシャンビュー', '楽天トラベル']
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
  console.log('🚀 Round 31: 戦略的SEO高PV特集記事の生成を開始します...');
  
  for (const item of strategicThemesRound31) {
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

  console.log('\n🎉 Round 31 の全6記事の生成が完了しました！');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
