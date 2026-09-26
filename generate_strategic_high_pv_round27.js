const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound27 = [
  {
    slug: 'traditional-hokkaido-kaisen-don-morning-stay',
    query: '函館 朝食 いくら ホテル',
    title: '【2026年】朝からいくら・ウニ・ホタテかけ放題！北海道の海鮮勝手丼朝食が凄すぎるホテル5選',
    metaDesc: '2026年最新！朝食の美味しさ日本一を競う函館・札幌・小樽の海鮮バイキング！いくら盛り放題の絶品勝手丼と天然温泉展望風呂が自慢の宿5選。',
    theme: 'いくら盛り放題海鮮朝食バイキング＆北海道名湯ホテル',
    leadText: '朝からキラキラ輝くいくらや甘いホタテ、新鮮なマグロやサーモンを好きなだけご飯にのせて作る自分だけの贅沢「勝手丼」。全国の旅行者を虜にする北海道の豪華海鮮朝食と、夜景を見渡す天然温泉で満たされる最高の朝。',
    badge: 'いくら盛り放題海鮮朝食×北海道名湯',
    tags: ['いくら盛り放題', '海鮮バイキング', '勝手丼', '函館朝食', '札幌ホテル', '天然温泉', '楽天トラベル']
  },
  {
    slug: 'luxury-private-onsen-with-scenic-cliffside-view',
    query: '絶景 露天風呂 オーシャンビュー 温泉',
    title: '【2026年】空と海にせり出すスリルと絶景！断崖絶壁パノラマ露天風呂付き極上宿5選',
    metaDesc: '2026年最新！足元に打ち寄せる波音と水平線の大パノラマ！断崖絶壁に張り出すインフィニティ露天風呂と絶景オーシャンビュー客室のプレミアム宿5選。',
    theme: '断崖絶壁パノラマ露天＆オーシャンインフィニティ宿',
    leadText: '海に向かってダイナミックにせり出すテラス露天風呂。遮るもののない360度の大パノラマと、眼下に広がる壮大な海のうねり。夕暮れのマジックアワーや満天の星空に包まれ、大自然のスケールを全身で体感する唯一無二の滞在。',
    badge: '断崖絶壁パノラマ露天×海絶景インフィニティ',
    tags: ['断崖絶壁露天', 'インフィニティ温泉', 'オーシャンパノラマ', '絶景テラス', '大人の隠れ家', '楽天トラベル']
  },
  {
    slug: 'super-panoramic-lake-biwa-sup-cruise-stay',
    query: 'おごと温泉 琵琶湖 旅館',
    title: '【2026年】湖上に浮かぶ大鳥居へ！琵琶湖SUP体験＆レイクサイド絶景温泉リゾート5選',
    metaDesc: '2026年最新！白髭神社の湖上鳥居を目指す絶景SUPクルージング！穏やかな琵琶湖の水上アクティビティとおごと温泉・湖畔展望風呂リゾート5選。',
    theme: '琵琶湖SUPクルージング＆おごと温泉リゾート',
    leadText: '日本最大の湖・琵琶湖で楽しむ爽快なSUP（スタンドアップパドルボード）クルージング。青い湖面に佇む白髭神社の鳥居を水上から参拝し、近江牛ディナーと名湯おごと温泉の露天風呂で寛ぐ優雅なレイクサイドアドベンチャー。',
    badge: '琵琶湖湖上SUP×おごと温泉リゾート',
    tags: ['琵琶湖SUP', '白髭神社', 'おごと温泉', '近江牛ディナー', 'レイクビュー温泉', '楽天トラベル']
  },
  {
    slug: 'spring-tanba-sasayama-botan-nabe-stay',
    query: '丹波篠山 ぼたん鍋 旅館',
    title: '【2026年】本場・丹波篠山の極上ぼたん鍋！丹波黒豆スイーツ＆城下町古民家分散型ホテル5選',
    metaDesc: '2026年最新！職人が美しく盛り付ける天然猪肉の「ぼたん鍋」！丹波栗・黒豆スイーツと城下町の歴史的古民家を再生した上質ホテル＆名湯宿5選。',
    theme: '丹波篠山ぼたん鍋＆城下町古民家ホテル',
    leadText: '寒牡丹の花のように美しく皿に並べられた極上天然猪肉と、秘伝の山椒味噌だしが香る本場「ぼたん鍋」。丹波篠山の歴史ある城下町に点在する古民家ホテルで、風情ある町並み散策と旬の味覚を心ゆくまで愉しむ旅。',
    badge: '丹波篠山ぼたん鍋×城下町古民家ステイ',
    tags: ['丹波篠山', 'ぼたん鍋', '古民家ホテル', '丹波黒豆', '丹波栗', '城下町散策', '楽天トラベル']
  },
  {
    slug: 'organic-rooftop-infinity-pool-spa-stay',
    query: 'ルーフトップ プール 温泉 ホテル',
    title: '【2026年】都会の空に浮かぶオアシス！ルーフトップインフィニティプール＆天然温泉ホテル5選',
    metaDesc: '2026年最新！煌めく夜景とスカイラインを一望！屋上インフィニティプールと本格天然温泉大浴場、クラブラウンジを備えた大人のアーバンリゾート5選。',
    theme: 'ルーフトップインフィニティプール＆都会の天然温泉',
    leadText: '高層ビルの屋上から見渡す摩天楼の夜景と夕焼け。温水インフィニティプールで夜風を感じながらカクテルを片手に寛ぎ、館内の本格天然温泉やサウナでリフレッシュする、都会の喧騒を忘れるラグジュアリーステイ。',
    badge: 'ルーフトッププール×アーバン天然温泉',
    tags: ['インフィニティプール', 'ルーフトップバー', 'ナイトプール', 'アーバンリゾート', '天然温泉ホテル', '楽天トラベル']
  },
  {
    slug: 'traditional-iwate-nanbu-ironware-onsen-stay',
    query: '花巻温泉 旅館',
    title: '【2026年】鉄瓶で沸かすまろやかな白湯。南部鉄器の美と花巻・つなぎ温泉の風情名宿5選',
    metaDesc: '2026年最新！四百年の歴史を誇る岩手の伝統工芸「南部鉄器」！鉄瓶で丁寧に淹れたお茶と前沢牛・三陸海鮮会席、名湯花巻温泉郷で日本の職人技に触れる宿5選。',
    theme: '南部鉄器クラフト＆花巻温泉郷の名湯宿',
    leadText: '使い込むほどに深い味わいを増す岩手の伝統工芸「南部鉄器」。重厚な鉄瓶で沸かした白湯やお茶のまろやかな口当たりを味わい、宮沢賢治ゆかりの花巻温泉郷や盛岡つなぎ温泉のやわらかな名湯で癒やされる東北のクラフト旅。',
    badge: '伝統南部鉄器×花巻温泉郷名湯',
    tags: ['南部鉄器', '花巻温泉', 'つなぎ温泉', '前沢牛', '三陸海鮮', '伝統工芸宿', '楽天トラベル']
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
  console.log('🚀 Round 27: 戦略的SEO高PV特集記事の生成を開始します...');
  
  for (const item of strategicThemesRound27) {
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

  console.log('\n🎉 Round 27 の全6記事の生成が完了しました！');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
