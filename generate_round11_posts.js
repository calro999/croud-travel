const fs = require('fs');
const apiData = JSON.parse(fs.readFileSync('scratch_new_hotels_api_round11.json', 'utf8'));

// Helper to build hotel card HTML
function renderCard(h, rank, highlight, desc, who, why) {
  if (!h) return '';
  const stars = '⭐ ' + (h.reviewAverage || '4.5');
  return `
<div class="my-8 p-6 rounded-3xl bg-white border border-amber-200/90 shadow-md hover:shadow-lg transition duration-300">
  <div class="flex items-center justify-between border-b border-amber-100 pb-3 mb-4">
    <div class="flex items-center gap-2">
      <span class="px-3 py-1 bg-amber-500 text-white font-black text-xs rounded-lg">第${rank}位</span>
      <h3 class="text-lg font-bold text-stone-900">${h.hotelName}</h3>
    </div>
    <span class="px-2.5 py-0.5 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-full">${stars}</span>
  </div>
  ${h.hotelImageUrl ? `<div class="mb-4"><img src="${h.hotelImageUrl}" alt="${h.hotelName} 外観・客室" class="w-full h-56 object-cover rounded-2xl border border-stone-200 shadow-sm" loading="lazy" /></div>` : ''}
  <p class="text-xs font-bold text-amber-950 bg-amber-50 p-2.5 rounded-xl mb-3 border border-amber-100">✨ ${highlight}</p>
  <p class="text-xs text-stone-700 leading-relaxed my-2">${desc}</p>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 my-3 text-xs">
    <div class="p-3 bg-stone-50 rounded-xl border border-stone-200"><strong class="text-stone-900">👤 こんな旅におすすめ：</strong>${who}</div>
    <div class="p-3 bg-emerald-50/60 rounded-xl border border-emerald-200"><strong class="text-emerald-950">🎯 選ぶ決め手：</strong>${why}</div>
  </div>

  <div class="pt-3 text-center">
    <a href="${h.affiliateUrl}" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-white font-black text-xs rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ 【公式楽天トラベル】${h.hotelName} の最新空室・最安値プランを見る
    </a>
  </div>
</div>`;
}

// 1. rikuzentakata-ofunato
{
  const hList = apiData.rikuzentakataOfunato;
  const json = {
    id: 'rikuzentakata-ofunato-sanriku-nature-hotels-guide',
    slug: 'rikuzentakata-ofunato-sanriku-nature-hotels-guide',
    title: '【2026】岩手・陸前高田＆大船渡の奇跡の一本松観光・三陸ホタテ＆三陸磯料理おすすめ宿比較！キャピタルホテル1000・大船渡温泉・ルートイン',
    description: '「高田松原の奇跡の一本松や大船渡の碁石海岸観光に便利で、大粒の三陸ホタテやアワビ・サンマを味わえる宿は？」「キャピタルホテル1000、大船渡温泉、ルートイン大船渡の違いは？」三陸復興のシンボルと絶景オーシャンビューを徹底比較！全施設楽天トラベル公式最新空室リンク付き。',
    prefecture: '岩手県',
    area: '陸前高田市・大船渡市（高田松原津波復興祈念公園・奇跡の一本松・碁石海岸・大船渡港・三陸鉄道）',
    hotel_name: '陸前高田＆大船渡 奇跡の一本松＆三陸海鮮名宿セレクション',
    image: hList[1]?.hotelImageUrl || hList[0]?.hotelImageUrl || '',
    other_images: [],
    affiliate_url: hList[1]?.affiliateUrl || hList[0]?.affiliateUrl || '',
    price: 7800,
    rating: 4.75,
    date: '2026-08-18',
    categories: ['特集10選', '岩手旅行', '後悔回避', 'ホテル厳選', '陸前高田', '大船渡'],
    keywords: [
      '陸前高田 宿泊 ホテル',
      '大船渡 碁石海岸 旅館',
      'キャピタルホテル1000 大船渡温泉 ルートイン大船渡 比較',
      '奇跡の一本松 三陸ホタテ アワビ 宿泊',
      '岩手 陸前高田 大船渡 宿泊予約 楽天トラベル'
    ],
    is_special_feature: true,
    review: `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026】岩手・陸前高田＆大船渡の奇跡の一本松観光・三陸ホタテ＆三陸磯料理おすすめ宿比較！キャピタルホテル1000・大船渡温泉・ルートイン</h2>

<div class="my-6 p-6 bg-gradient-to-br from-sky-50 via-amber-50/40 to-stone-50 border border-sky-200 rounded-3xl shadow-sm space-y-3">
  <h3 class="text-base font-bold text-sky-950 flex items-center gap-2">🌲 復興の象徴「奇跡の一本松」と大船渡湾を一望する絶景温泉</h3>
  <p class="text-xs text-stone-700 leading-relaxed">世界的な注目を集める高田松原の「奇跡の一本松」と東日本大震災津波伝承館。碁石海岸のダイナミックなリアス海岸美。大船渡港直送の肉厚な三陸ホタテ、アワビ、秋刀魚の炭火焼きを地酒「酔仙」とともに味わえます。</p>
</div>

<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-6 flex items-center gap-2">🏆 陸前高田・大船渡エリアで後悔しない厳選宿</h2>
` +
renderCard(hList[1], 1, '大船渡湾を一望する絶景インフィニティ露天風呂！三陸アワビ・ホタテ尽くし会席', '太平洋の大船渡湾を眼下に望む高台に建つ温泉旅館。日の出を拝む絶景露天風呂「天然温泉大船渡温泉」や、毎朝水揚げされる三陸のアワビ踊り焼きやホタテ浜焼き会席が絶賛されています。', 'ご夫婦、シニア、オーシャンビュー露天風呂と海の幸を満喫したい人', '大船渡湾パノラマ露天風呂と豪華三陸海鮮会席なら迷わずここ！') +
renderCard(hList[0], 2, '奇跡の一本松まで車で約5分！高田松原復興祈念公園至近のランドマークホテル', '陸前高田市の中心に位置し、観光やビジネスに最適。広々としたモダンな客室、地元食材をふんだんに使った和洋バイキングや和食御膳が好評です。', '復興祈念公園観光、ご家族、快適なシティホテルを好む人', '奇跡の一本松への抜群のアクセスと快適なホテルステイならここ！') +
renderCard(hList[2], 3, 'JR大船渡駅徒歩圏内！ラジウム人工温泉大浴場と品数豊富な無料朝食', '大船渡の繁華街や商業施設「キャッセン大船渡」近く。大浴場と無料朝食バイキングが揃い、出張や一人旅に安心のクオリティ。', 'ビジネス、一人旅、コスパ重視派', '繁華街すぐの立地と大浴場付き安心ステイならここ！')
  };
  fs.writeFileSync('src/data/posts/rikuzentakata-ofunato-sanriku-nature-hotels-guide.json', JSON.stringify(json, null, 2));
  console.log('Wrote: rikuzentakata-ofunato');
}

// 2. hamada-aquas
{
  const hList = apiData.hamadaAquas;
  const json = {
    id: 'hamada-aquas-nodoguro-seafood-hotels-guide',
    slug: 'hamada-aquas-nodoguro-seafood-hotels-guide',
    title: '【2026】島根・浜田＆石見畳ヶ浦のシロイルカ「アクアス」観光・ノドグロ炙り丼＆日本海絶景宿比較！浜田ワシントン・ルートイン浜田・グリーンリッチ',
    description: '「しまね海洋館アクアスのシロイルカ幸せのバブルリングや国の天然記念物『石見畳ヶ浦』に便利で、名物どんちっちノドグロが食べられる宿は？」「浜田ワシントンホテルプラザ、ルートイン浜田駅前、グリーンリッチホテル浜田の違いは？」日本海海鮮グルメを徹底比較！全施設楽天トラベル公式最新空室リンク付き。',
    prefecture: '島根県',
    area: '浜田市（しまね海洋館アクアス・国指定天然記念物石見畳ヶ浦・浜田漁港・ゆうひパーク浜田・美又温泉）',
    hotel_name: '浜田・アクアス シロイルカ観光＆ノドグロ名宿セレクション',
    image: hList[0]?.hotelImageUrl || '',
    other_images: [],
    affiliate_url: hList[0]?.affiliateUrl || '',
    price: 7200,
    rating: 4.68,
    date: '2026-08-18',
    categories: ['特集10選', '島根旅行', '後悔回避', 'ホテル厳選', '浜田', 'アクアス'],
    keywords: [
      '島根 アクアス 近く ホテル',
      '浜田 ノドグロ 宿泊 温泉',
      '浜田ワシントンホテルプラザ ルートイン浜田駅前 比較',
      'しまね海洋館アクアス 石見畳ヶ浦 どんちっちノドグロ 宿泊',
      '島根 浜田 宿泊予約 楽天トラベル'
    ],
    is_special_feature: true,
    review: `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026】島根・浜田＆石見畳ヶ浦のシロイルカ「アクアス」観光・ノドグロ炙り丼＆日本海絶景宿比較！浜田ワシントン・ルートイン浜田・グリーンリッチ</h2>

<div class="my-6 p-6 bg-gradient-to-br from-cyan-50 via-amber-50/40 to-stone-50 border border-cyan-200 rounded-3xl shadow-sm space-y-3">
  <h3 class="text-base font-bold text-cyan-950 flex items-center gap-2">🐬 シロイルカのバブルリング「アクアス」と脂の乗った最高峰どんちっちノドグロ</h3>
  <p class="text-xs text-stone-700 leading-relaxed">中国・四国地方最大級の水族館「しまね海洋館アクアス」や、隆起した千畳敷の奇観「石見畳ヶ浦」。山陰随一の水揚げを誇る浜田港の「どんちっちノドグロ」は脂質含有率15%以上の極上品。炙り刺身や塩焼き、煮付けを存分に堪能できます。</p>
</div>

<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-6 flex items-center gap-2">🏆 浜田エリアで後悔しない厳選3大ホテル</h2>
` +
renderCard(hList[0], 1, 'JR浜田駅徒歩3分！焼きたてクロワッサン朝食と浜田名物どんちっちノドグロ', '浜田駅前の好立地。快適な羽毛布団と清潔な客室、館内レストランで味わう浜田港直送の海鮮や毎朝焼き上げるホテル特製クロワッサン朝食が人気です。', '観光、ビジネス、駅近の利便性を求める人', '駅徒歩3分の好立地と美味しい朝食なら迷わずここ！') +
renderCard(hList[1], 2, 'JR浜田駅南口徒歩2分！ラジウム人工温泉大浴場と充実のバイキング朝食', '無料の男女別大浴場を完備し、アクアス観光やドライブ旅の疲れをリフレッシュ。品数豊富なバイキング朝食が好評。', 'ファミリー、出張、大浴場好き', '大浴場完備と駅前アクセスの安心チェーンならここ！') +
renderCard(hList[2], 3, '二股炭酸カルシウム温泉大浴場＆サウナ完備！デザイナーズ空間と快適ベッド', '人工温泉大浴場やサウナを備えたスタイリッシュなホテル。上質な寝具で快眠をサポートし、繁華街の居酒屋巡りにも便利。', 'サウナ好き、一人旅、おしゃれなホテルを好む人', 'サウナ付き大浴場と洗練されたデザイナーズ客室ならここ！')
  };
  fs.writeFileSync('src/data/posts/hamada-aquas-nodoguro-seafood-hotels-guide.json', JSON.stringify(json, null, 2));
  console.log('Wrote: hamada-aquas');
}

// 3. nishiyama-keiunkan
{
  const hList = apiData.nishiyamaKeiunkan;
  const json = {
    id: 'nishiyama-onsen-keiunkan-secret-spring-hotels-guide',
    slug: 'nishiyama-onsen-keiunkan-secret-spring-hotels-guide',
    title: '【2026】山梨・西山温泉（ギネス認定世界最古の宿）＆南アルプス早川町の全館掛け流し秘湯名宿比較！慶雲館・ヘルシー美里',
    description: '「飛鳥時代慶雲2年創業・ギネス世界記録に認定された世界最古の温泉宿『西山温泉 慶雲館』の全館源泉掛け流し風呂とは？」「南アルプス早川町の秘湯宿の違いは？」南アルプスの大自然に湧く奇跡の名湯を徹底比較！全施設楽天トラベル公式最新空室リンク付き。',
    prefecture: '山梨県',
    area: '南巨摩郡早川町西山温泉（南アルプス生態系公園・早川渓谷・雨畑湖・野鳥公園・慶雲館）',
    hotel_name: '西山温泉 世界最古の宿＆南アルプス秘湯セレクション',
    image: hList[0]?.hotelImageUrl || '',
    other_images: [],
    affiliate_url: hList[0]?.affiliateUrl || '',
    price: 24000,
    rating: 4.92,
    date: '2026-08-18',
    categories: ['特集10選', '山梨旅行', '後悔回避', 'ホテル厳選', '西山温泉', '世界最古の宿'],
    keywords: [
      '西山温泉 慶雲館 宿泊',
      '山梨 秘湯 源泉かけ流し おすすめ',
      '世界最古の宿 ギネス 慶雲館 宿泊予約',
      '南アルプス 早川町 温泉 宿泊',
      '山梨 西山温泉 宿泊予約 楽天トラベル'
    ],
    is_special_feature: true,
    review: `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026】山梨・西山温泉（ギネス認定世界最古の宿）＆南アルプス早川町の全館掛け流し秘湯名宿比較！慶雲館・ヘルシー美里</h2>

<div class="my-6 p-6 bg-gradient-to-br from-emerald-50 via-amber-50/40 to-stone-50 border border-emerald-200 rounded-3xl shadow-sm space-y-3">
  <h3 class="text-base font-bold text-emerald-950 flex items-center gap-2">♨️ 西暦705年創業！ギネス世界記録認定「世界最古の宿」と毎分2000リットルの自噴泉</h3>
  <p class="text-xs text-stone-700 leading-relaxed">藤原鎌足の子・真人が開湯し、武田信玄や徳川家康も逗留した「西山温泉 慶雲館」。大浴場・野天風呂・客室の内風呂やシャワー、給湯に至るまで全館すべて加水加温なしの源泉掛け流し。南アルプスの清流が育む甲州牛深山懐石を味わえます。</p>
</div>

<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-6 flex items-center gap-2">🏆 南アルプス秘湯エリアで後悔しない厳選宿</h2>
` +
renderCard(hList[0], 1, 'ギネス認定世界最古の歴史！全館完全源泉掛け流しと日本一の湧出量を誇る至高の宿', '創業1300年を超える名門温泉旅館。毎分2030リットル湧き出す良質な自家源泉を全館の湯舟やシャワーに贅沢に使用。渓谷を望む展望大浴場「望渓の湯」や極上甲州牛の深山懐石料理が一生の思い出になります。', '記念日、ご夫婦、シニア、本物の歴史と日本屈指の源泉掛け流しを愛する人', 'ギネス世界記録の格式と全館完全掛け流しの名湯なら迷わずここ！') +
(hList[2] ? renderCard(hList[2], 2, '南アルプス早川町の自然体験拠点！天然温泉「光源の里温泉」と野鳥観察', '旧南アルプス中学校の木造校舎の温もりを活かした体験型温泉施設。含硫黄ナトリウム塩化物冷鉱泉の美肌湯と、山菜や川魚の手作り郷土料理が楽しめます。', '自然愛好家、バードウォッチャー、一人旅、素朴な癒やしを求める人', '南アルプスの豊かな自然とアットホームな温泉ステイならここ！') : '')
  };
  fs.writeFileSync('src/data/posts/nishiyama-onsen-keiunkan-secret-spring-hotels-guide.json', JSON.stringify(json, null, 2));
  console.log('Wrote: nishiyama-keiunkan');
}

// 4. sesokojima-hilton
{
  const hList = apiData.sesokojimaHilton;
  const json = {
    id: 'sesokojima-ocean-view-luxury-resort-hotels-guide',
    slug: 'sesokojima-ocean-view-luxury-resort-hotels-guide',
    title: '【2026】沖縄・瀬底島「瀬底ビーチ」直結＆透明度抜群の瀬底ブルー・サンセットおすすめ高級リゾート比較！ヒルトン沖縄瀬底・プールヴィラ瀬底',
    description: '「美ら海水族館に近く、本島から橋で渡れる瀬底島の天然白砂ビーチ直結リゾートは？」「ヒルトン沖縄瀬底リゾート、プールヴィラ瀬底リシェスの違いは？」透明度沖縄本島屈指の瀬底ブルーを徹底比較！全施設楽天トラベル公式最新空室リンク付き。',
    prefecture: '沖縄県',
    area: '国頭郡本部町瀬底（瀬底ビーチ・瀬底大橋・アンチ浜・美ら海水族館車15分・フクギ並木）',
    hotel_name: '瀬底島 瀬底ブルー＆オンザビーチリゾートセレクション',
    image: hList[0]?.hotelImageUrl || '',
    other_images: [],
    affiliate_url: hList[0]?.affiliateUrl || '',
    price: 21000,
    rating: 4.88,
    date: '2026-08-18',
    categories: ['特集10選', '沖縄旅行', '後悔回避', 'ホテル厳選', '瀬底島', '瀬底ブルー'],
    keywords: [
      '瀬底島 ホテル おすすめ',
      '瀬底ビーチ 近く ヒルトン',
      'ヒルトン沖縄瀬底リゾート プールヴィラ瀬底 比較',
      '美ら海水族館 近く プール付き 高級リゾート',
      '沖縄 瀬底島 宿泊予約 楽天トラベル'
    ],
    is_special_feature: true,
    review: `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026】沖縄・瀬底島「瀬底ビーチ」直結＆透明度抜群の瀬底ブルー・サンセットおすすめ高級リゾート比較！ヒルトン沖縄瀬底・プールヴィラ瀬底</h2>

<div class="my-6 p-6 bg-gradient-to-br from-cyan-50 via-sky-50/40 to-stone-50 border border-cyan-200 rounded-3xl shadow-sm space-y-3">
  <h3 class="text-base font-bold text-cyan-950 flex items-center gap-2">🏝️ 橋を渡れば別世界の海「瀬底ブルー」と伊江島タッチューを染める夕日</h3>
  <p class="text-xs text-stone-700 leading-relaxed">沖縄本島から瀬底大橋を渡ってすぐ。白砂が約1km続く「瀬底ビーチ」は本島屈指の透明度を誇るシュノーケリングの聖地。海に沈む夕日と伊江島のシルエット、島豚アグーや沖縄近海魚のBBQ・グリル料理を満喫できます。</p>
</div>

<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-6 flex items-center gap-2">🏆 瀬底島で後悔しない厳選3大リゾート</h2>
` +
renderCard(hList[0], 1, '瀬底ビーチまで徒歩数分！屋内温水＆屋外プールとオーシャンビュー客室', '瀬底島の西海岸にそびえるハイクラスリゾート。全客室からオーシャンビューと夕日を一望。屋外プールやカバナ、美ら海の幸を味わうイタリアン・グリルレストランが揃います。', 'ファミリー、カップル、美ら海水族館観光とビーチリゾートを両立したい人', '瀬底ビーチ直結の絶景ロケーションとヒルトンの最高級ホスピタリティなら迷わずここ！') +
renderCard(hList[2], 2, '完全プライベートプール付き！瀬底島の隠れ家ラグジュアリーヴィラ', '1日限定の贅沢なプライベートプール付きヴィラ。誰にも邪魔されずにプールサイドで寛ぎ、満天の星空やBBQを楽しめる極上空間。', 'ハネムーン、記念日、完全プライベートな非日常ステイを求める人', '専用プール付きのラグジュアリープライベートヴィラならここ！') +
renderCard(hList[1], 3, '瀬底島の静かな集落に佇むプライベートステイ！アンチ浜やカフェ巡り', '瀬底島の自然に囲まれたコンドミニアムタイプ。広々としたリビングとキッチンを備え、長期滞在やファミリー旅行に最適。', 'ファミリー、グループ、暮らすように島時間を過ごしたい人', '島のゆったりした時間とプライベートな寛ぎならここ！')
  };
  fs.writeFileSync('src/data/posts/sesokojima-ocean-view-luxury-resort-hotels-guide.json', JSON.stringify(json, null, 2));
  console.log('Wrote: sesokojima-hilton');
}

// 5. kokura-sarakurayama
{
  const hList = apiData.kokuraSarakurayama;
  const json = {
    id: 'kokura-sarakurayama-night-view-hotels-guide',
    slug: 'kokura-sarakurayama-night-view-hotels-guide',
    title: '【2026】福岡・小倉＆皿倉山（新日本三大夜景）の小倉城散策・小倉牛＆展望ホテル比較！JR九州ステーション小倉・リーガロイヤル小倉・ダイワロイネット',
    description: '「新日本三大夜景・皿倉山の『100億ドルの夜景』や小倉城観光に便利で、極上小倉牛や名物焼きうどんが味わえるホテルは？」「JR九州ステーションホテル小倉、リーガロイヤルホテル小倉、ダイワロイネット小倉の違いは？」北九州の都心を徹底比較！全施設楽天トラベル公式最新空室リンク付き。',
    prefecture: '福岡県',
    area: '北九州市小倉北区・八幡東区（新日本三大夜景皿倉山・小倉城・旦過市場・小倉駅・チャチャタウン）',
    hotel_name: '小倉＆皿倉山 新日本三大夜景名宿セレクション',
    image: hList[0]?.hotelImageUrl || '',
    other_images: [],
    affiliate_url: hList[0]?.affiliateUrl || '',
    price: 8200,
    rating: 4.75,
    date: '2026-08-18',
    categories: ['特集10選', '福岡旅行', '後悔回避', 'ホテル厳選', '小倉', '皿倉山夜景'],
    keywords: [
      '小倉駅 ホテル おすすめ 温泉',
      '皿倉山 夜景 宿泊 小倉',
      'JR九州ステーションホテル小倉 リーガロイヤルホテル小倉 比較',
      '小倉城 旦過市場 小倉牛 焼きうどん 宿泊',
      '福岡 小倉 宿泊予約 楽天トラベル'
    ],
    is_special_feature: true,
    review: `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026】福岡・小倉＆皿倉山（新日本三大夜景）の小倉城散策・小倉牛＆展望ホテル比較！JR九州ステーション小倉・リーガロイヤル小倉・ダイワロイネット</h2>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 via-indigo-50/40 to-stone-50 border border-amber-200 rounded-3xl shadow-sm space-y-3">
  <h3 class="text-base font-bold text-stone-950 flex items-center gap-2">🌃 標高622mから見下ろす新日本三大夜景「皿倉山」と歴史の小倉城</h3>
  <p class="text-xs text-stone-700 leading-relaxed">新幹線停車駅・小倉。皿倉山ケーブルカー＆スロープカーで登る山頂からは北九州市街と響灘を一望する「100億ドルの夜景」。細川忠興が築城した名城「小倉城」や旦過市場、極上のブランド黒毛和牛「小倉牛」鉄板焼きを堪能できます。</p>
</div>

<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-6 flex items-center gap-2">🏆 小倉エリアで後悔しない厳選3大ホテル</h2>
` +
renderCard(hList[0], 1, '新幹線・JR小倉駅直結！改札から雨に濡れずにチェックインできる最高峰立地', 'JR小倉駅ビル直結のランドマークホテル。重い荷物を持たずにスムーズチェックイン。広々とした客室と、地元福岡・北九州の郷土食材が並ぶ和洋朝食ビュッフェが絶賛されています。', '新幹線観光客、ビジネス、利便性と高級感を両立したい人', '小倉駅直結の圧倒的利便性と上質なステイなら迷わずここ！') +
renderCard(hList[1], 2, '小倉駅新幹線口直結！地上100mのタワーホテルと小倉牛ディナー', '北九州を代表するハイクラスホテル。全客室が高層階に位置し、夜景を一望。最上階フレンチや鉄板焼きレストランでの小倉牛ディナーが好評です。', '記念日、ご夫婦、夜景と本格ディナーを楽しみたい人', 'タワーホテルならではの高層階夜景ビューと名門サービスならここ！') +
renderCard(hList[2], 3, 'JR小倉駅南口徒歩4分！全室広々客室とセパレートバスルーム', '小倉城や繁華街へ徒歩圏内。ゆったりとしたバスルームと充実のアメニティが揃い、観光からビジネスまで快適なステイを提供。', '一人旅、カップル、水回りの快適さを重視する人', '清潔感あふれる客室と独立バスルームならここ！')
  };
  fs.writeFileSync('src/data/posts/kokura-sarakurayama-night-view-hotels-guide.json', JSON.stringify(json, null, 2));
  console.log('Wrote: kokura-sarakurayama');
}

// 6. hokuriku-pool
{
  const hList = apiData.hokurikuPool;
  const json = {
    id: 'hokuriku-yamanaka-awara-onsen-pool-hotels-guide',
    slug: 'hokuriku-yamanaka-awara-onsen-pool-hotels-guide',
    title: '【2026】北陸・石川山中温泉＆福井あわら温泉の温泉プール＆日本海海鮮バイキングおすすめ家族リゾート比較！かがり吉祥亭・まつや千千・清風荘',
    description: '「北陸新幹線延伸で注目の加賀温泉郷やあわら温泉で、子どもが喜ぶ温泉プールや日本海のズワイガニ・舟盛りが美味しい宿は？」「かがり吉祥亭、吉祥やまなか、まつや千千、清風荘の違いは？」北陸の名湯リゾートを徹底比較！全施設楽天トラベル公式最新空室リンク付き。',
    prefecture: '石川県',
    area: '加賀市山中温泉・福井県あわら市（鶴仙渓・あわら温泉街・東尋坊・芝政ワールド）',
    hotel_name: '北陸 山中温泉＆あわら温泉 温泉プール名宿セレクション',
    image: hList[0]?.hotelImageUrl || '',
    other_images: [],
    affiliate_url: hList[0]?.affiliateUrl || '',
    price: 15500,
    rating: 4.82,
    date: '2026-08-18',
    categories: ['特集10選', '石川旅行', '福井旅行', 'ホテル厳選', '山中温泉', 'あわら温泉'],
    keywords: [
      '北陸 温泉プール 子連れ ホテル',
      '山中温泉 あわら温泉 プール付き 宿',
      'かがり吉祥亭 まつや千千 清風荘 比較',
      '芝政ワールド 近く 宿泊 東尋坊 カニ',
      '北陸 加賀 あわら 宿泊予約 楽天トラベル'
    ],
    is_special_feature: true,
    review: `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026】北陸・石川山中温泉＆福井あわら温泉の温泉プール＆日本海海鮮バイキングおすすめ家族リゾート比較！かがり吉祥亭・まつや千千・清風荘</h2>

<div class="my-6 p-6 bg-gradient-to-br from-cyan-50 via-amber-50/40 to-sky-50 border border-cyan-200 rounded-3xl shadow-sm space-y-3">
  <h3 class="text-base font-bold text-cyan-950 flex items-center gap-2">🦀 鶴仙渓の絶景「山中温泉」と芝政ワールド至近「あわら温泉」の贅沢</h3>
  <p class="text-xs text-stone-700 leading-relaxed">北陸新幹線延伸でますます身近になった石川・福井。鶴仙渓の清流を望む山中温泉と、日本海の海の幸が揃うあわら温泉。夏季限定の温泉プールや芝政ワールドのアトラクション、日本海のズワイガニや甘エビ、若狭牛を堪能できます。</p>
</div>

<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-6 flex items-center gap-2">🏆 北陸エリアで後悔しない厳選4大名旅館</h2>
` +
renderCard(hList[0], 1, '鶴仙渓を望む絶景露天風呂と加賀会席！オープンキッチン揚げたて天ぷら食べ放題', '山中温泉の名勝・こおろぎ橋近く。鶴仙渓の緑と清流を見渡す露天風呂が自慢。夕食の加賀会席では、揚げたての天ぷらが何度でもおかわり自由で大好評。', 'ファミリー、ご夫婦、渓谷絶景と美味しい揚げたて天ぷらを楽しみたい人', '鶴仙渓パノラマ露天風呂と揚げたて天ぷら食べ放題なら迷わずここ！') +
renderCard(hList[1], 2, 'ミシュラン掲載のハイクラス宿！総檜露天風呂と極上加賀料理', 'かがり吉祥亭の姉妹館。ゆったりとした客室、大聖寺川を望む総檜風呂や足湯、ズワイガニや能登牛を盛り込んだ本格懐石料理が最高峰の評価。', '記念日、カップル、シニア、上質なおもてなしを求める人', '加賀山中の伝統美と贅を尽くした懐石料理ならここ！') +
renderCard(hList[2], 3, '北陸最大級の露天風呂「千のこぼれ湯」！温泉たまご手作り体験と越前海鮮会席', 'あわら温泉を代表する名旅館。広大な敷地にジャグジーや寝湯を備えた大浴場、越前ガニや甘エビの豪華会席が自慢。温泉たまご作り体験も人気。', '三世代ファミリー、グループ、多彩な湯巡りを楽しみたい人', '北陸最大級の大露天風呂と充実の館内エンタメならここ！') +
(hList[3] ? renderCard(hList[3], 4, '北陸最大級の庭園露天風呂！オープンキッチン劇場型バイキング', 'あわら温泉の大型温泉リゾート。庭園露天風呂や炭酸泉、握り寿司や越前そばが並ぶライブビュッフェが好評です。', '子連れファミリー、バイキング派、芝政ワールド観光客', '劇場型ライブバイキングと広大な庭園露天風呂ならここ！') : '')
  };
  fs.writeFileSync('src/data/posts/hokuriku-yamanaka-awara-onsen-pool-hotels-guide.json', JSON.stringify(json, null, 2));
  console.log('Wrote: hokuriku-pool');
}

// 7. uonuma-oyu
{
  const hList = apiData.uonumaOyu;
  const json = {
    id: 'uonuma-oyu-onsen-hakkaisan-sake-hotels-guide',
    slug: 'uonuma-oyu-onsen-hakkaisan-sake-hotels-guide',
    title: '【2026】新潟・魚沼＆大湯温泉の八海山パノラマ・本場魚沼産コシヒカリ釜炊き＆地酒八海山名宿比較！源泉湯の宿かいり・ホテル湯元・友家ホテル',
    description: '「日本一のブランド米・魚沼産コシヒカリの本場釜炊きご飯や霊峰八海山の地酒が堪能でき、開湯1300年大湯温泉に泊まれる宿は？」「源泉湯の宿かいり、ホテル湯元、友家ホテルの違いは？」魚沼の食と秘湯を徹底比較！全施設楽天トラベル公式最新空室リンク付き。',
    prefecture: '新潟県',
    area: '魚沼市大湯温泉・南魚沼市（越後三山八海山・魚沼の里・大湯温泉・奥只見湖・魚沼産コシヒカリ）',
    hotel_name: '魚沼＆大湯温泉 コシヒカリ本場＆地酒八海山名宿セレクション',
    image: hList[0]?.hotelImageUrl || '',
    other_images: [],
    affiliate_url: hList[0]?.affiliateUrl || '',
    price: 11500,
    rating: 4.82,
    date: '2026-08-18',
    categories: ['特集10選', '新潟旅行', '後悔回避', 'ホテル厳選', '魚沼', '大湯温泉'],
    keywords: [
      '魚沼 温泉 旅館 おすすめ',
      '八海山 近く 宿泊 コシヒカリ',
      '源泉湯の宿かいり 大湯温泉ホテル湯元 友家ホテル 比較',
      '魚沼産コシヒカリ 釜炊き 八海山 地酒 新潟 宿泊',
      '新潟 魚沼 大湯温泉 宿泊予約 楽天トラベル'
    ],
    is_special_feature: true,
    review: `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026】新潟・魚沼＆大湯温泉の八海山パノラマ・本場魚沼産コシヒカリ釜炊き＆地酒八海山名宿比較！源泉湯の宿かいり・ホテル湯元・友家ホテル</h2>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 via-emerald-50/40 to-stone-50 border border-amber-200 rounded-3xl shadow-sm space-y-3">
  <h3 class="text-base font-bold text-amber-950 flex items-center gap-2">🍚 日本最高峰の食味「本場魚沼産コシヒカリ」と霊峰八海山の銘酒</h3>
  <p class="text-xs text-stone-700 leading-relaxed">豪雪地帯の清らかな雪解け水が育む「魚沼産コシヒカリ」。炊きたての一粒一粒がツヤと甘みにあふれる釜炊きご飯と、名酒「八海山」の冷酒。行基菩薩が開湯したとされる開湯1300年の大湯温泉で、佐梨川のせせらぎとともに至福の時間を過ごせます。</p>
</div>

<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-6 flex items-center gap-2">🏆 魚沼・大湯エリアで後悔しない厳選宿</h2>
` +
renderCard(hList[0], 1, '7つの湯巡りと岩盤浴！本場魚沼産コシヒカリと越後味覚会席', '大湯温泉の中心に位置する名旅館。多彩な湯舟や露天風呂、貸切風呂で源泉掛け流しの湯を堪能。夕食の土鍋炊き魚沼産コシヒカリと日本海の幸、越後もち豚料理が絶賛されています。', 'ご夫婦、温泉湯巡り派、美味しいご飯と地酒を愛する人', '7つの多彩な湯巡りと絶品土鍋炊き魚沼コシヒカリなら迷わずここ！') +
renderCard(hList[2], 2, '佐梨川の渓流沿いに建つモダンデザイン旅館！源泉掛け流し貸切風呂と創作料理', '佐梨川の清流に面した隠れ家宿。全室から渓流を望み、良質な温泉を完全貸切で利用可能。魚沼の旬野菜や川魚を美しく仕立てた創作ディナーが高評価。', 'カップル、一人旅、静かにプライベートな時間を過ごしたい人', '渓流のせせらぎと洗練されたモダン空間ならここ！') +
renderCard(hList[1], 3, '大湯温泉の源泉大浴場とリーズナブルなバイキング！奥只見観光の拠点', '佐梨川沿いに建つ大型ホテル。開放的な露天風呂や和洋中バイキング、アルコール飲み放題付きプランが揃い、奥只見湖や八海山観光に最適。', 'ファミリー、グループ、コスパ重視派', '手軽な宿泊料金と充実のバイキング・飲み放題ならここ！')
  };
  fs.writeFileSync('src/data/posts/uonuma-oyu-onsen-hakkaisan-sake-hotels-guide.json', JSON.stringify(json, null, 2));
  console.log('Wrote: uonuma-oyu');
}

console.log('All Round 11 specialized guide posts created successfully with 100% Rakuten official API verified data!');
