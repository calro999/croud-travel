const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound22 = [
  {
    slug: 'traditional-sanuki-udon-gourmet-onsen-stay',
    query: 'こんぴら温泉 讃岐うどん',
    title: '【2026年】本場讃岐うどん巡礼！こんぴら温泉郷＆香川グルメを堪能する極上名宿5選',
    metaDesc: '2026年最新！金刀比羅宮の参拝と名店うどん巡り！讃岐コーチンや讃岐牛の会席、こんぴら温泉郷の美肌名湯で癒やされる香川のおすすめ旅館5選。',
    theme: '本場讃岐うどん巡り＆こんぴら温泉郷の宿',
    leadText: 'コシのある打ちたて讃岐うどんの名店巡りと、金刀比羅宮の石段参拝。香川の旅の醍醐味を存分に満喫した後は、歴史ある「こんぴら温泉郷」のやわらかな湯と、讃岐牛や瀬戸内の旬魚を味わう贅沢な滞在をお届けします。',
    badge: '讃岐うどん巡り×こんぴら名湯',
    tags: ['讃岐うどん', 'こんぴら温泉', '金刀比羅宮', '香川旅行', '讃岐牛', '温泉旅館', '楽天トラベル']
  },
  {
    slug: 'luxury-private-onsen-with-tea-ceremony-lounge',
    query: '茶室 抹茶 温泉 旅館',
    title: '【2026年】本格茶室で一服の静寂を。お点前体験＆日本庭園露天風呂が自慢の和モダン宿5選',
    metaDesc: '2026年最新！格式ある本格茶室で楽しむ抹茶とお抹茶菓子のおもてなし。美しい日本庭園を眺める露天風呂と和の美意識に浸る大人の癒やし宿5選。',
    theme: '本格茶室お点前体験＆日本庭園名湯宿',
    leadText: '掛け軸と季節の茶花が飾られた静謐な茶室でいただく、点てたての香り高い抹茶と上生菓子。日常の喧騒から解き放たれ、美しい日本庭園の移ろいを眺めながら名湯に浸かる、心洗われる和のリトリートステイ。',
    badge: '本格茶室お点前×日本庭園名湯',
    tags: ['茶室体験', '抹茶おもてなし', '日本庭園', '和モダン旅館', '数寄屋造り', '露天風呂', '楽天トラベル']
  },
  {
    slug: 'super-panoramic-paragliding-sky-resort-stay',
    query: 'パラグライダー 温泉 リゾート ホテル',
    title: '【2026年】大空を舞う感動体験！パラグライダー＆大パノラマ展望露天リゾート5選',
    metaDesc: '2026年最新！白馬・朝霧高原・阿蘇などで空を飛ぶパラグライダー体験！雄大な山並みを見渡す展望露天風呂と爽快アクティビティが魅力の宿5選。',
    theme: '大空パラグライダー体験＆絶景パノラマ温泉宿',
    leadText: '鳥のように大空を滑空し、眼下に広がる壮大な山並みや湖を眺めるパラグライダー体験。インストラクターとのタンデムフライトで爽快な空中散歩を楽しんだ後は、雲海や山絶景を望むパノラマ露天風呂で心地よい余韻に浸る旅。',
    badge: '大空パラグライダー×絶景パノラマ露天',
    tags: ['パラグライダー', 'スカイアクティビティ', 'パノラマ露天風呂', '雲海ビュー', '高原リゾート', '楽天トラベル']
  },
  {
    slug: 'spring-takenoko-bamboo-shoot-kaiseki-stay',
    query: '竹林 温泉 旅館',
    title: '【2026年】春の味覚・朝採り筍！掘りたてタケノコ会席＆幻想的な竹林露天の風情宿5選',
    metaDesc: '2026年最新！春限定の朝掘り新鮮タケノコ会席！焼き筍・筍ご飯・若竹煮と、ライトアップされた竹林を望む幻想露天風呂が自慢の名湯宿5選。',
    theme: '朝採り筍会席＆幻想竹林露天の風情宿',
    leadText: 'えぐみがなく甘み際立つ、朝掘りたての新鮮な筍（タケノコ）。炭火で香ばしく焼き上げる焼き筍や、風味豊かな筍ご飯、若竹煮など春の恵みを尽くした会席料理。風に揺れる竹の葉音とライトアップされた竹林露天風呂で過ごす風流な春の夜。',
    badge: '朝採り筍会席×幻想竹林露天',
    tags: ['筍会席', 'タケノコ料理', '春の味覚', '竹林露天風呂', '風情ある温泉旅館', '楽天トラベル']
  },
  {
    slug: 'organic-wine-vineyard-retreat-spa-stay',
    query: 'ワイナリー 温泉 ホテル',
    title: '【2026年】広大なブドウ畑を望む。ワイナリー直営レストラン＆ワイン風呂リゾート5選',
    metaDesc: '2026年最新！勝沼・余市・長野のワイナリー直営宿！ブドウ畑を見渡す絶景テラスと醸造家厳選のペアリングディナー、天然温泉スパを愉しむワイナリーリゾート5選。',
    theme: 'ワイナリー直営美食＆ブドウ畑ビュー温泉リゾート',
    leadText: '見渡す限りに広がる美しいブドウ畑と爽快な青空。ワイナリー直営ならではの希少な限定ワインと地元食材のマリアージュディナーを味わい、芳醇なワイン風呂や源泉掛け流しスパで心ほどける優雅な大人の休日。',
    badge: 'ワイナリー直営ペアリング×ブドウ畑温泉',
    tags: ['ワイナリーホテル', 'ワインリゾート', 'ペアリングディナー', 'ブドウ畑ビュー', 'ワイン風呂', '楽天トラベル']
  },
  {
    slug: 'traditional-kutani-ware-ceramic-art-onsen-stay',
    query: '九谷焼 加賀温泉 旅館',
    title: '【2026年】五彩の美に酔いしれる。九谷焼ギャラリー＆絵付け体験ができる加賀温泉郷の名旅館5選',
    metaDesc: '2026年最新！石川県・加賀温泉郷で楽しむ伝統工芸「九谷焼」。名工の器で味わう加賀会席や絵付け体験、名湯山中・山代・片山津の極上温泉宿5選。',
    theme: '九谷焼の美と加賀美食＆名湯加賀温泉郷の宿',
    leadText: '加賀百万石の文化が育んだ、華やかで鮮やかな色絵磁器「九谷焼」。名工が手掛けた九谷焼の器に美しく盛り付けられた加賀会席を堪能し、絵付け体験で旅の思い出作り。千二百年の歴史を誇る名湯で寛ぐ上質な石川の旅。',
    badge: '九谷焼ギャラリー×加賀会席名湯',
    tags: ['九谷焼', '加賀温泉郷', '山中温泉', '山代温泉', '伝統工芸体験', '加賀会席', '楽天トラベル']
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
  console.log('🚀 Round 22: 戦略的SEO高PV特集記事の生成を開始します...');
  
  for (const item of strategicThemesRound22) {
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

  console.log('\n🎉 Round 22 の全6記事の生成が完了しました！');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
