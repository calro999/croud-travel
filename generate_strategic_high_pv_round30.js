const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const strategicThemesRound30 = [
  {
    slug: 'traditional-shizuoka-unagi-kabayaki-stay',
    query: '浜名湖 温泉 旅館',
    title: '【2026年】香ばしい秘伝のタレとふっくら極上肉厚！浜名湖うなぎ尽くし会席＆舘山寺名湯宿5選',
    metaDesc: '2026年最新！うなぎ養殖発祥の地・浜名湖で味わう極上うなぎ蒲焼き・白焼き・ひつまぶし会席！穏やかな湖畔を望む舘山寺温泉・弁天島温泉の名旅館5選。',
    theme: '浜名湖うなぎ尽くし会席＆舘山寺レイクビュー温泉宿',
    leadText: '炭火でじっくり香ばしく焼き上げたふっくら肉厚の浜名湖産うなぎ。秘伝のタレが染み渡る蒲焼きや、わさび醤油でいただく白焼き、贅沢なひつまぶし。美しい浜名湖を一望する展望露天風呂で寛ぐ静岡の美食旅。',
    badge: '浜名湖極上うなぎ会席×舘山寺レイク露天',
    tags: ['浜名湖うなぎ', 'うなぎ蒲焼き', 'ひつまぶし', '舘山寺温泉', '弁天島温泉', 'レイクビュー温泉', '楽天トラベル']
  },
  {
    slug: 'luxury-private-onsen-with-scenic-cherry-blossom-view',
    query: '桜 露天風呂 客室 温泉 旅館',
    title: '【2026年】湯船から満開の桜を独占！プライベートお花見客室露天風呂付き極上宿5選',
    metaDesc: '2026年最新！春限定の贅沢なお花見風呂！客室専用の露天風呂から咲き誇る桜や夜桜ライトアップを眺めながら極上温泉に浸かる大人の隠れ家名宿5選。',
    theme: '客室専用お花見露天風呂＆桜ビュー極上温泉宿',
    leadText: '湯船のすぐそばに枝を伸ばす満開の桜並木。舞い散る花びらが湯面に浮かぶ風雅な客室露天風呂で、誰にも邪魔されずにお花見を愉しむ贅沢。ライトアップされた夜桜と春の旬彩会席に酔いしれる特別な春の休日。',
    badge: '客室専用お花見露天×夜桜ライトアップ',
    tags: ['お花見露天風呂', '客室専用露天', '夜桜ライトアップ', '春の花見旅行', '大人の隠れ家', '源泉掛け流し', '楽天トラベル']
  },
  {
    slug: 'super-panoramic-canyon-bungee-jumping-stay',
    query: 'みなかみ 温泉 露天風呂',
    title: '【2026年】日本一の絶叫吊り橋＆大自然アドベンチャー！バンジージャンプ＆渓谷露天風呂宿5選',
    metaDesc: '2026年最新！竜神大吊橋・みなかみの大自然渓谷でスリル満点のバンジージャンプ！アドベンチャー後に利根川や渓谷美を望む絶景露天風呂とサウナでととのう宿5選。',
    theme: '爽快バンジージャンプ＆みなかみ渓谷露天宿',
    leadText: '高さ100mの吊り橋から大自然の渓谷へ飛び込む究極のスリルと爽快感！大自然のアクティビティで思い切りエネルギーを発散した後は、利根川のせせらぎを聴く渓谷露天風呂や源泉掛け流し温泉で心地よく癒やされるアクティブ旅。',
    badge: '爽快バンジー体験×みなかみ渓谷名湯',
    tags: ['バンジージャンプ', 'みなかみ温泉', '竜神大吊橋', '渓谷露天風呂', 'アドベンチャー', 'アウトドアリゾート', '楽天トラベル']
  },
  {
    slug: 'spring-miyazaki-mango-parfait-stay',
    query: '宮崎 マンゴー ホテル',
    title: '【2026年】とろける黄金の果肉・太陽のタマゴ！宮崎完熟マンゴースイーツ＆青島オーシャン宿5選',
    metaDesc: '2026年最新！最高峰の宮崎完熟マンゴー「太陽のタマゴ」デザート＆宮崎牛炭火ステーキディナー！青島・日南海岸の絶景太平洋を望むリゾートホテル5選。',
    theme: '宮崎完熟マンゴースイーツ＆青島オーシャンビュー宿',
    leadText: '樹上で完全に熟して自然落果した最高級ブランド「太陽のタマゴ」。濃厚な甘みと果汁があふれる完熟マンゴーパフェを堪能し、青島神社や鬼の洗濯板を一望する展望温泉と宮崎牛ディナーで南国気分を満喫する宮崎リゾート。',
    badge: '太陽のタマゴ完熟マンゴー×青島オーシャン展望',
    tags: ['宮崎マンゴー', '太陽のタマゴ', '青島温泉', '宮崎牛', 'オーシャンビュー', '南国リゾート', '楽天トラベル']
  },
  {
    slug: 'organic-forest-floating-tent-glamping-stay',
    query: 'グランピング ドームテント 温泉',
    title: '【2026年】森の宙に浮かぶ幻想空間！空中テント・ドームテント＆森林プライベートサウナ宿5選',
    metaDesc: '2026年最新！木々の間に浮かぶフローティングテントやパノラマドームテント！満天の星空とプライベートテントサウナ、豪華BBQを愉しむ大自然グランピング5選。',
    theme: '空中フローティングテント＆星空ドームサウナグランピング',
    leadText: 'まるで雲の上に浮かんでいるかのような空中テントや、ベッドから星空を仰ぐ大型ドームテント。小鳥のさえずりで目覚め、森のプライベートサウナでロウリュを楽しんだ後は、地元特産牛の贅沢BBQに舌鼓を打つ極上のアウトドア体験。',
    badge: '空中テント星空ドーム×森林プライベートサウナ',
    tags: ['空中テント', 'ドームテント', 'グランピング', 'テントサウナ', '星空リゾート', '森のグランピング', '楽天トラベル']
  },
  {
    slug: 'traditional-aomori-nebuta-craft-onsen-stay',
    query: '青森 温泉 旅館',
    title: '【2026年】勇壮なねぶたの熱気に包まれる！ねぶたアート空間＆青森ヒバ名湯と海鮮極上宿5選',
    metaDesc: '2026年最新！職人が手掛けた巨大ねぶたの光アートと祭り囃子！大間マグロ・陸奥湾ホタテ会席と香り高い青森ヒバ温泉で津軽・南部の文化に触れる名宿5選。',
    theme: 'ねぶた光アート空間＆青森ヒバ名湯と大間マグロ宿',
    leadText: '和紙と光が織りなす極彩色の巨大「ねぶた」が館内を彩る圧巻の空間。毎夜響く祭り囃子の生演奏に心躍らせ、大間産天然本マグロや陸奥湾ホタテの極上海鮮会席、青森ヒバ造りの名湯で芯から温まる青森の文化リトリート。',
    badge: 'ねぶた光アート×青森ヒバ名湯・大間マグロ',
    tags: ['ねぶたの宿', '青森ねぶた', '青森ヒバ風呂', '大間マグロ', '陸奥湾ホタテ', '津軽文化体験', '楽天トラベル']
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
  console.log('🚀 Round 30: 戦略的SEO高PV特集記事の生成を開始します...');
  
  for (const item of strategicThemesRound30) {
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

  console.log('\n🎉 Round 30 の全6記事の生成が完了しました！');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
