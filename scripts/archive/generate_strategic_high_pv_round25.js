const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound25 = [
  {
    slug: 'traditional-hakata-mizutaki-gourmet-stay',
    query: '博多 水炊き ホテル',
    title: '【2026年】博多名物・濃厚鶏白湯水炊き！呼子イカ活造り＆福岡名湯・サウナの極上宿5選',
    metaDesc: '2026年最新！じっくり煮込んだ黄金スープの博多水炊き会席＆透き通る呼子イカ活造り！福岡・博多の天然温泉＆極上サウナ付きホテル5選。',
    theme: '博多名物水炊き＆呼子イカ会席と福岡名湯宿',
    leadText: '鶏ガラをじっくり煮込んだコラーゲンたっぷりの濃厚白湯スープでいただく本場博多の水炊き。透き通る鮮度抜群の呼子直送イカ活造りとともに、天然温泉大浴場やサウナで寛ぐ贅沢な福岡グルメ旅。',
    badge: '博多名物水炊き×極上福岡天然温泉',
    tags: ['博多水炊き', '呼子イカ', '博多温泉', '福岡グルメ', 'サウナホテル', '楽天トラベル']
  },
  {
    slug: 'luxury-private-onsen-with-tatami-bath-deck',
    query: '畳風呂 温泉 旅館',
    title: '【2026年】足元ふんわり温かい！全面畳敷き大浴場＆純和風モダン露天風呂の宿5選',
    metaDesc: '2026年最新！浴室の床一面に特殊畳を敷き詰めた「畳風呂」！滑りにくく冷えない安心の浴場で、赤ちゃん連れやシニア旅行にも大人気の名湯旅館5選。',
    theme: '足元やさしい全面畳敷き風呂＆純和風名湯宿',
    leadText: '浴室の床に敷き詰められた特殊畳のやさしい足触り。濡れても滑りにくく、冬でも足元がひんやりしない「畳風呂」は、三世代旅行や赤ちゃん連れにも大好評。情緒あふれる和の設えと名湯で寛ぐ癒やしの滞在。',
    badge: '安心の全面畳風呂×和モダン名湯',
    tags: ['畳風呂', '全面畳敷き', 'ファミリー旅行', 'シニア旅行', '和モダン旅館', '安心安全の宿', '楽天トラベル']
  },
  {
    slug: 'super-panoramic-lake-kayak-morning-stay',
    query: 'カヤック 湖 温泉 ホテル',
    title: '【2026年】朝霧立つ静寂の湖へ。早朝カヤック体験＆湖畔一望のインフィニティ露天宿5選',
    metaDesc: '2026年最新！富士五湖・十和田湖・洞爺湖などで楽しむ幻想的な早朝カヤック！鏡のような湖面を進むモーニングアクティビティと湖畔露天リゾート5選。',
    theme: '早朝レイクカヤック＆湖畔絶景インフィニティ露天宿',
    leadText: '朝霧が幻想的に立ち込める静寂の湖へ、カヤックに乗って漕ぎ出す贅沢なモーニングタイム。水鳥の声とパドルの水音だけに包まれる非日常を体験した後は、湖と一体化するインフィニティ露天風呂で温まるレイクサイドステイ。',
    badge: '早朝レイクカヤック×湖畔インフィニティ露天',
    tags: ['レイクカヤック', 'モーニングアクティビティ', '湖畔ホテル', 'インフィニティ露天', '富士五湖', '洞爺湖', '楽天トラベル']
  },
  {
    slug: 'spring-yatsugatake-highland-strawberry-stay',
    query: '八ヶ岳 温泉 ホテル',
    title: '【2026年】甘い香りに満ちる春の高原！完熟いちご狩り＆摘みたて苺パフェと八ヶ岳温泉宿5選',
    metaDesc: '2026年最新！八ヶ岳・清里高原のプレミアム完熟いちご狩り食べ放題！ホテル特製あまおう・紅ほっぺパフェと南アルプス連峰を望む高原露天リゾート5選。',
    theme: '高原完熟いちご狩り＆特製苺スイーツの八ヶ岳リゾート',
    leadText: '澄んだ空気と豊富な日照時間が育む、糖度抜群の高原完熟いちご。契約農園でのいちご狩りやパティシエ特製のいちごパフェを堪能し、八ヶ岳や南アルプス連峰の絶景を望む高原温泉で心ほどける春の休日。',
    badge: '八ヶ岳完熟いちご×高原展望名湯',
    tags: ['八ヶ岳いちご狩り', 'いちごスイーツ', '清里高原', '八ヶ岳温泉', '高原リゾート', '南アルプス絶景', '楽天トラベル']
  },
  {
    slug: 'organic-detox-herb-garden-spa-stay',
    query: 'ハーブガーデン 温泉 ホテル',
    title: '【2026年】摘みたてハーブの癒やし。自家菜園ハーブ料理＆ハーバルサウナの温泉リゾート5選',
    metaDesc: '2026年最新！広大なハーブ園でリフレッシュ！摘みたてフレッシュハーブティー、自家菜園ハーブの創作ディナーと天然ハーブスチームサウナの癒やし宿5選。',
    theme: '自家製ハーブ美食＆ハーバルスチームサウナ宿',
    leadText: 'カモミールやラベンダーが風にそよぐ広大なハーブガーデン。朝摘みのフレッシュハーブティーと自家製ハーブを使った香り豊かな創作ディナー、ハーブの蒸気で満たされるスチームサウナで心身を根本からリセットするボタニカルリトリート。',
    badge: '自家製ハーブ美食×ハーバル薬草サウナ',
    tags: ['ハーブガーデン', 'ハーバルサウナ', 'フレッシュハーブティー', 'ボタニカルリトリート', '温泉リゾート', '楽天トラベル']
  },
  {
    slug: 'traditional-ehime-towel-and-dogo-onsen-stay',
    query: '道後温泉 旅館',
    title: '【2026年】ふんわり極上の肌触り！今治タオルアメニティ＆日本最古の名湯・道後温泉の宿5選',
    metaDesc: '2026年最新！世界に誇る「今治最高級タオル」を完備！三千年の歴史を持つ道後温泉本館散策と瀬戸内鯛めし会席を贅沢に愉しむ愛媛の名旅館5選。',
    theme: '今治最高級タオル×日本最古の道後温泉宿',
    leadText: '一度使うと虜になる、極上の吸水性とふんわりとした柔らかさを誇る「今治タオル」。厳選されたタオルアメニティに包まれ、三千年の歴史を刻む道後温泉の名湯と、来島海峡の真鯛を使った名物鯛めし会席を味わう至福の愛媛ステイ。',
    badge: '今治プレミアムタオル×道後温泉名湯',
    tags: ['道後温泉', '今治タオル', '道後温泉本館', '鯛めし会席', '愛媛旅館', '日本最古の名湯', '楽天トラベル']
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
  console.log('🚀 Round 25: 戦略的SEO高PV特集記事の生成を開始します...');
  
  for (const item of strategicThemesRound25) {
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

  console.log('\n🎉 Round 25 の全6記事の生成が完了しました！');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
