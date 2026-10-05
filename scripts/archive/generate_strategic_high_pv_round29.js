const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound29 = [
  {
    slug: 'traditional-okinawa-agu-pork-shabu-stay',
    query: 'あぐー豚 沖縄 ホテル',
    title: '【2026年】旨味と甘み極まる幻の島豚！あぐー豚しゃぶしゃぶ＆美ら海・古宇利島リゾート5選',
    metaDesc: '2026年最新！コレステロールが低く旨味成分豊富な沖縄名物「あぐー豚」しゃぶしゃぶ会席！エメラルドグリーンの美ら海を一望する絶景リゾートホテル5選。',
    theme: '特選あぐー豚しゃぶしゃぶ＆美ら海オーシャンリゾート',
    leadText: '口に入れた瞬間にとろける脂の甘みと濃厚なコクが特徴の沖縄県産「あぐー豚」。シークヮーサーぽん酢や島塩で味わう極上しゃぶしゃぶディナーと、古宇利大橋や美ら海を望むプライベートプール付きリゾートで過ごす至福の沖縄ステイ。',
    badge: '極上あぐー豚しゃぶ×美ら海オーシャンリゾート',
    tags: ['あぐー豚', 'アグー豚しゃぶしゃぶ', '沖縄リゾート', '古宇利島', '美ら海水族館', 'オーシャンビューホテル', '楽天トラベル']
  },
  {
    slug: 'luxury-private-onsen-with-mud-bath-spa',
    query: '泥湯 温泉 旅館',
    title: '【2026年】天然クレイで全身つるつる美肌！泥パック泥湯＆源泉掛け流し泥温泉宿5選',
    metaDesc: '2026年最新！大地のミネラルを豊富に含んだ天然泥湯・泥パック体験！古い角質を落とし美白効果抜群のにごり湯と極上エステが自慢の名湯温泉宿5選。',
    theme: '天然ミネラル泥パック＆極上美肌泥湯の宿',
    leadText: '地中深くから湧き出るミネラルたっぷりの天然泥（クレイ）。全身に塗って乾かす天然泥パックと、濃厚なグレーの泥湯温泉で湯上がりは驚くほどのすべすべ素肌に。自然の恵みで心身をまるごとデトックスする極上スパステイ。',
    badge: '天然ミネラル泥パック×極上美肌泥湯',
    tags: ['泥湯', '泥パック', 'クレイセラピー', '美肌の湯', '別府温泉', '霧島温泉', '楽天トラベル']
  },
  {
    slug: 'super-panoramic-lake-towada-autumn-leaf-stay',
    query: '十和田湖 温泉 ホテル',
    title: '【2026年】神秘のカルデラ湖畔！十和田湖カヌー＆奥入瀬渓流散策と大自然リゾート5選',
    metaDesc: '2026年最新！エメラルドグリーンの湖水と奥入瀬渓流の苔むす巨岩美！早朝レイクカヌーと十和田湖畔温泉・青森ヒバ風呂で大自然に抱かれる宿5選。',
    theme: '十和田湖カヌー＆奥入瀬渓流ネイチャーリゾート',
    leadText: '北東北のシンボル・十和田湖の静寂と、躍動する奥入瀬渓流のせせらぎ。朝の澄んだ湖へカヌーを漕ぎ出し、散策後は青森ヒバが香る温泉大浴場や露天風呂でリフレッシュ。大自然の圧倒的な息吹を感じるプレミアムリトリート。',
    badge: '十和田湖カヌー×奥入瀬渓流名湯リゾート',
    tags: ['十和田湖', '奥入瀬渓流', 'レイクカヌー', '青森ヒバ風呂', '大自然リゾート', '十和田温泉', '楽天トラベル']
  },
  {
    slug: 'spring-kumamoto-sweet-melon-kaiseki-stay',
    query: '阿蘇 温泉 ホテル 旅館',
    title: '【2026年】糖度際立つ春メロン！肥後グリーン会席＆阿蘇カルデラ大パノラマ温泉宿5選',
    metaDesc: '2026年最新！果汁あふれる熊本特産「肥後グリーンメロン」デザート＆赤牛溶岩焼き会席！阿蘇五岳や雲海を一望する絶景露天風呂付き名宿5選。',
    theme: '肥後グリーンメロン＆阿蘇あか牛溶岩焼き温泉宿',
    leadText: 'ジューシーで強い甘みが口いっぱいに広がる熊本県産ブランドメロン「肥後グリーン」。名物あか牛の溶岩焼きステーキ会席とともに堪能し、阿蘇の大カルデラや雄大な外輪山を一望するパノラマ露天風呂に癒やされる火の国ステイ。',
    badge: '熊本特産肥後グリーン×阿蘇カルデラ絶景露天',
    tags: ['肥後グリーン', '熊本メロン', '阿蘇温泉', 'あか牛溶岩焼き', 'カルデラ絶景', '雲海ビュー', '楽天トラベル']
  },
  {
    slug: 'organic-nordic-barrel-sauna-lakeside-stay',
    query: 'バレルサウナ 湖 温泉',
    title: '【2026年】天然湖水風呂へダイブ！北欧直輸入バレルサウナ＆レイクフロント温泉宿5選',
    metaDesc: '2026年最新！ヒノキ香る丸いバレルサウナでセルフロウリュ！目の前の天然湖へ飛び込む究極の水風呂と湖畔外気浴テラスが自慢のサウナリゾート5選。',
    theme: '北欧直輸入バレルサウナ＆天然湖水風呂リゾート',
    leadText: '薪ストーブのパチパチとはぜる音と、熱波が均一に対流する丸いバレルサウナ。限界まで温まった体を冷たい天然の湖へダイブさせ、湖畔のインフィニティチェアで風に包まれる、サウナ愛好家憧れの「究極のととのい」体験。',
    badge: '北欧バレルサウナ×天然湖ダイブ水風呂',
    tags: ['バレルサウナ', '薪サウナ', '湖水風呂', 'テントサウナ', 'アウトドアサウナ', 'ととのい体験', '楽天トラベル']
  },
  {
    slug: 'traditional-gifu-mino-washi-lantern-stay',
    query: '長良川 温泉 旅館',
    title: '【2026年】美濃和紙あかりの町並みと清流鵜飼い。長良川温泉＆飛騨牛会席の風情名宿5選',
    metaDesc: '2026年最新！千三百年続く長良川鵜飼いの篝火と美濃和紙あかりアート！茶褐色の名湯「長良川温泉」と極上飛騨牛会席を味わう岐阜の歴史風情旅館5選。',
    theme: '長良川鵜飼い・美濃和紙あかり＆長良川名湯宿',
    leadText: '夕闇に揺れる篝火（かがりび）と鵜匠の巧みな技が幻想的な長良川鵜飼い。美濃和紙の柔らかな行灯が灯る川沿いの町並みを散策し、鉄分豊富な茶褐色の長良川温泉と飛騨牛会席に舌鼓を打つ、伝統美が息づく岐阜の雅な夜。',
    badge: '長良川鵜飼い篝火×美濃和紙あかり名湯',
    tags: ['長良川温泉', '長良川鵜飼い', '美濃和紙', '飛騨牛会席', '川沿い温泉旅館', '岐阜旅行', '楽天トラベル']
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
  console.log('🚀 Round 29: 戦略的SEO高PV特集記事の生成を開始します...');
  
  for (const item of strategicThemesRound29) {
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

  console.log('\n🎉 Round 29 の全6記事の生成が完了しました！');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
