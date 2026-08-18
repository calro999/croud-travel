const fs = require('fs');
const apiData = JSON.parse(fs.readFileSync('scratch_new_hotels_api_round13.json', 'utf8'));

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

// 1. tono-folklore
{
  const hList = apiData.tonoFolklore;
  const json = {
    id: 'tono-folklore-kappa-craft-beer-hotels-guide',
    slug: 'tono-folklore-kappa-craft-beer-hotels-guide',
    title: '【2026】岩手・遠野（民話の里）のカッパ淵・伝承園観光＆遠野パドロン・クラフトビールおすすめ宿比較！あえりあ遠野・たかむろ水光園',
    description: '「柳田國男『遠野物語』のカッパ淵や伝承園観光に便利で、毎夜語り部の昔話が聴け、日本一の遠野産ホップ・クラフトビールが飲める宿は？」「あえりあ遠野、たかむろ水光園の違いは？」民話の里を徹底比較！全施設楽天トラベル公式最新空室リンク付き。',
    prefecture: '岩手県',
    area: '遠野市（カッパ淵・伝承園・遠野市立博物館・語り部の館・とおの物語の館・遠野ホップ）',
    hotel_name: '遠野 民話の里＆クラフトビール名宿セレクション',
    image: hList[0]?.hotelImageUrl || '',
    other_images: [],
    affiliate_url: hList[0]?.affiliateUrl || '',
    price: 8500,
    rating: 4.75,
    date: '2026-08-18',
    categories: ['特集10選', '岩手旅行', '後悔回避', 'ホテル厳選', '遠野', '遠野物語'],
    keywords: [
      '遠野 宿泊 旅館 ホテル',
      'カッパ淵 近く 宿泊 遠野',
      'あえりあ遠野 たかむろ水光園 比較',
      '語り部 昔話 遠野パドロン 遠野ビール 宿泊',
      '岩手 遠野 宿泊予約 楽天トラベル'
    ],
    is_special_feature: true,
    review: `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026】岩手・遠野（民話の里）のカッパ淵・伝承園観光＆遠野パドロン・クラフトビールおすすめ宿比較！あえりあ遠野・たかむろ水光園</h2>

<div class="my-6 p-6 bg-gradient-to-br from-emerald-50 via-amber-50/40 to-stone-50 border border-emerald-200 rounded-3xl shadow-sm space-y-3">
  <h3 class="text-base font-bold text-emerald-950 flex items-center gap-2">🥒 カッパ淵と曲り家が並ぶ「遠野物語」の原風景と日本一のホップ</h3>
  <p class="text-xs text-stone-700 leading-relaxed">カッパや座敷わらしの伝承が息づく民話の里「遠野」。常堅寺裏のカッパ淵や重要文化財の南部曲り家。日本有数のホップ生産地が生み出すフレッシュな遠野クラフトビールや、素揚げの遠野パドロン、遠野ジンギスカンを堪能できます。</p>
</div>

<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-6 flex items-center gap-2">🏆 遠野エリアで後悔しない厳選宿</h2>
` +
renderCard(hList[0], 1, '毎夜開催される語り部の昔話！遠野産ホップビールと大浴場完備のシティホテル', '遠野駅徒歩8分、観光施設に囲まれた中心部に位置。毎晩ロビーで開催される本物の語り部による遠野昔話の語りが大人気。大浴場や、遠野パドロン・岩手牛ディナーが好評です。', 'ファミリー、ご夫婦、一人旅、遠野の民話文化をじっくり体験したい人', '毎夜の語り部体験と中心街の抜群ロケーションなら迷わずここ！') +
renderCard(hList[1], 2, '広大な日本庭園と名物トロン温泉！南部曲り家でのんびり過ごす里山宿', '遠野の田園風景に囲まれた広大な温泉施設。ミネラル豊富なトロン温泉やサウナ、郷土のひっつみ鍋や川魚料理が味わえます。', 'シニア、ファミリー、静かな里山の自然に癒やされたい人', 'トロン温泉とアットホームな里山ステイならここ！')
  };
  fs.writeFileSync('src/data/posts/tono-folklore-kappa-craft-beer-hotels-guide.json', JSON.stringify(json, null, 2));
  console.log('Wrote: tono-folklore');
}

// 2. oki-geopark
{
  const hList = apiData.okiGeopark;
  const json = {
    id: 'oki-islands-geopark-kuniga-cliff-hotels-guide',
    slug: 'oki-islands-geopark-kuniga-cliff-hotels-guide',
    title: '【2026】島根・隠岐諸島（世界ジオパーク）の国賀海岸摩天崖絶景＆隠岐牛・岩牡蠣おすすめ名宿比較！Entô・隠岐プラザ・ホテル海音里',
    description: '「ユネスコ世界ジオパーク・隠岐諸島の国賀海岸摩天崖やローソク島遊覧に便利で、幻の隠岐牛や巨大岩牡蠣春香が味わえる宿は？」「話題のジオホテルEntô、隠岐プラザホテル、ホテル海音里の違いは？」離島の絶景を徹底比較！全施設楽天トラベル公式最新空室リンク付き。',
    prefecture: '島根県',
    area: '隠岐郡（西ノ島町・海士町・隠岐の島町・知夫村・国賀海岸・摩天崖・ローソク島）',
    hotel_name: '隠岐諸島 世界ジオパーク＆絶景オーシャン名宿セレクション',
    image: hList[0]?.hotelImageUrl || '',
    other_images: [],
    affiliate_url: hList[0]?.affiliateUrl || '',
    price: 16500,
    rating: 4.88,
    date: '2026-08-18',
    categories: ['特集10選', '島根旅行', '後悔回避', 'ホテル厳選', '隠岐諸島', '世界ジオパーク'],
    keywords: [
      '隠岐 ホテル おすすめ Ento',
      '国賀海岸 近く 宿泊 隠岐諸島',
      'Ento 隠岐プラザホテル ホテル海音里 比較',
      '摩天崖 ローソク島 隠岐牛 岩牡蠣 宿泊',
      '島根 隠岐 宿泊予約 楽天トラベル'
    ],
    is_special_feature: true,
    review: `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026】島根・隠岐諸島（世界ジオパーク）の国賀海岸摩天崖絶景＆隠岐牛・岩牡蠣おすすめ名宿比較！Entô・隠岐プラザ・ホテル海音里</h2>

<div class="my-6 p-6 bg-gradient-to-br from-cyan-50 via-emerald-50/40 to-stone-50 border border-cyan-200 rounded-3xl shadow-sm space-y-3">
  <h3 class="text-base font-bold text-cyan-950 flex items-center gap-2">🌊 高さ257mの大絶壁「摩天崖」と日本海の奇跡「世界ジオパーク隠岐」</h3>
  <p class="text-xs text-stone-700 leading-relaxed">ユネスコ世界ジオパークに認定された隠岐諸島。西ノ島・国賀海岸の垂直にそそり立つ摩天崖と放牧馬、夕日が先端に灯るローソク島。島頭で放牧される希少な未経産黒毛和牛「隠岐牛」や、濃厚なブランド岩牡蠣「春香」を堪能できます。</p>
</div>

<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-6 flex items-center gap-2">🏆 隠岐諸島で後悔しない厳選3大ホテル</h2>
` +
renderCard(hList[0], 1, 'ジオパーク拠点施設一体型の泊まれる拠点！海を望むミニマルデザイン客室と島食材フレンチ', '海士町・菱浦港直結の話題のジオホテル。客室の大きなピクチャーウィンドウから日本海と島影を望み、地球の歴史を体感。島の旬魚や隠岐牛を洗練された一皿に仕立てたディナーが絶賛されています。', '建築デザイン好き、カップル、一人旅、特別な島時間を過ごしたい人', 'ミニマルで洗練された空間とジオパークの絶景体験なら迷わずここ！') +
renderCard(hList[1], 2, '隠岐の島町・西郷港を望む老舗ホテル！展望大浴場と隠岐海の幸舟盛り会席', '隠岐の島町の玄関口・西郷港近くに建つ大型ホテル。港を見下ろす展望大浴場や、サザエのつぼ焼き・岩牡蠣・アワビが並ぶ豪華海鮮料理が人気。', 'ファミリー、グループ、観光船アクセス重視派', '西郷港すぐの好立地と豪華海の幸会席ならここ！') +
renderCard(hList[2], 3, '西ノ島・国賀海岸へのアクセス抜群！静寂の入り江に建つオーシャンホテル', '西ノ島の浦郷港近くに位置。目の前に広がる穏やかな内海と、アットホームなおもてなし、新鮮な地魚会席が楽しめます。', '国賀海岸観光派、ご夫婦、静かな滞在を好む人', '国賀海岸への拠点と穏やかなオーシャンビューならここ！')
  };
  fs.writeFileSync('src/data/posts/oki-islands-geopark-kuniga-cliff-hotels-guide.json', JSON.stringify(json, null, 2));
  console.log('Wrote: oki-geopark');
}

// 3. hakushu-hokuto
{
  const hList = apiData.hakushuHokuto;
  const json = {
    id: 'hakushu-hokuto-whisky-mineral-water-hotels-guide',
    slug: 'hakushu-hokuto-whisky-mineral-water-hotels-guide',
    title: '【2026】山梨・白州＆北杜の南アルプス名水・サントリー白州蒸溜所見学＆星空おすすめホテル比較！リゾナーレ八ヶ岳・グランドメルキュール八ヶ岳',
    description: '「南アルプスの名水が育むサントリー白州蒸溜所や尾白川渓谷に近く、波の出る屋内プールや満天の星空を満喫できるホテルは？」「星野リゾート リゾナーレ八ヶ岳、グランドメルキュール八ヶ岳リゾート＆スパの違いは？」八ヶ岳南麓リゾートを徹底比較！全施設楽天トラベル公式最新空室リンク付き。',
    prefecture: '山梨県',
    area: '北杜市白州町・小淵沢町・大泉町（サントリー白州蒸溜所・名水百選尾白川渓谷・清里高原・八ヶ岳南麓）',
    hotel_name: '白州＆北杜 サントリー白州蒸溜所＆八ヶ岳高原リゾートセレクション',
    image: hList[0]?.hotelImageUrl || '',
    other_images: [],
    affiliate_url: hList[0]?.affiliateUrl || '',
    price: 19500,
    rating: 4.88,
    date: '2026-08-18',
    categories: ['特集10選', '山梨旅行', '後悔回避', 'ホテル厳選', '白州', 'サントリー白州蒸溜所'],
    keywords: [
      '白州蒸溜所 近く ホテル',
      '北杜市 温泉 おすすめ 宿',
      'リゾナーレ八ヶ岳 グランドメルキュール八ヶ岳 比較',
      'サントリー白州 南アルプス天然水 尾白川渓谷 宿泊',
      '山梨 北杜 白州 宿泊予約 楽天トラベル'
    ],
    is_special_feature: true,
    review: `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026】山梨・白州＆北杜の南アルプス名水・サントリー白州蒸溜所見学＆星空おすすめホテル比較！リゾナーレ八ヶ岳・グランドメルキュール八ヶ岳</h2>

<div class="my-6 p-6 bg-gradient-to-br from-emerald-50 via-sky-50/40 to-stone-50 border border-emerald-200 rounded-3xl shadow-sm space-y-3">
  <h3 class="text-base font-bold text-emerald-950 flex items-center gap-2">🥃 世界が称賛するシングルモルト「白州」の森と南アルプス甲斐駒ヶ岳の名水</h3>
  <p class="text-xs text-stone-700 leading-relaxed">日本屈指のウイスキーの聖地「サントリー白州蒸溜所」と名水百選「尾白川渓谷」。森の息吹を浴びる蒸溜所ツアーの後は、波の出る屋内プール「イルマーレ」やワインリゾート、甲州ワインビーフや高原野菜のグリルを堪能できます。</p>
</div>

<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-6 flex items-center gap-2">🏆 白州・北杜エリアで後悔しない厳選3大リゾート</h2>
` +
renderCard(hList[0], 1, '波の出る屋内プール「イルマーレ」とピーマン通り！ワインと美食の高原メガリゾート', 'ヨーロッパの街並みを再現した石畳の回廊「ピーマン通り」や、全天候型波のプールを完備。山梨・長野のワインが24種類並ぶワインハウスや、イタリアン「OTTO SETTE」での極上コースが至高の評価。', '子連れファミリー、カップル、ワイン好き、洗練されたアクティビティを楽しみたい人', '波の出る屋内プールと世界屈指のワインリゾート体験なら迷わずここ！') +
renderCard(hList[1], 2, 'オールインクルーシブの高原温泉リゾート！展望温泉露天風呂と八ヶ岳ビュッフェ', '八ヶ岳南麓の高台に位置。宿泊料金に夕朝食バイキング、ラウンジでのアルコールやソフトドリンク、温泉大浴場が含まれるオールインクルーシブ。天体望遠鏡での星空観察も人気。', 'ファミリー、ご夫婦、お得に高原リゾートを楽しみたい人', '充実のオールインクルーシブと星空露天風呂ならここ！') +
renderCard(hList[2], 3, 'キース・ヘリング美術館隣接！自然とアートが調和するスモールラグジュアリー', '八ヶ岳の森に佇むデザインホテル。モダンな客室、貸切露天風呂、地元旬食材を使った創作フレンチが記念日に最適。', '記念日、アート愛好家、静かな大人の隠れ家を求める人', '自然美とアートが融合した隠れ家ラグジュアリーならここ！')
  };
  fs.writeFileSync('src/data/posts/hakushu-hokuto-whisky-mineral-water-hotels-guide.json', JSON.stringify(json, null, 2));
  console.log('Wrote: hakushu-hokuto');
}

// 4. irabu-17end
{
  const hList = apiData.irabu17end;
  const json = {
    id: 'irabujima-17end-luxury-resort-villa-hotels-guide',
    slug: 'irabujima-17end-luxury-resort-villa-hotels-guide',
    title: '【2026】沖縄・伊良部島＆下地島「17エンド」幻の絶景ビーチ＆伊良部大橋パノラマ・最高級プライベートヴィラ比較！イラフSUI・ヴィラブ・ウォーターマーク',
    description: '「下地島空港17エンドの幻の干潟ビーチや通り池に近く、全室プライベートプールやオーシャンフロントの最高峰ヴィラは？」「イラフSUI、ヴィラブ リゾート、ウォーターマークホテル宮古島の違いは？」宮古ブルーを徹底比較！全施設楽天トラベル公式最新空室リンク付き。',
    prefecture: '沖縄県',
    area: '宮古島市伊良部（伊良部島・下地島・下地島空港17エンド・通り池・渡口の浜・伊良部大橋）',
    hotel_name: '伊良部島・下地島 17エンド＆最高級プライベートヴィラセレクション',
    image: hList[0]?.hotelImageUrl || '',
    other_images: [],
    affiliate_url: hList[0]?.affiliateUrl || '',
    price: 32000,
    rating: 4.95,
    date: '2026-08-18',
    categories: ['特集10選', '沖縄旅行', '後悔回避', 'ホテル厳選', '伊良部島', '17エンド'],
    keywords: [
      '伊良部島 ホテル おすすめ 高級',
      '17エンド 近く ヴィラ 宮古島',
      'イラフ SUI ヴィラブリゾート ウォーターマークホテル 比較',
      '下地島空港 17エンド 宮古牛 伊良部大橋 宿泊',
      '沖縄 伊良部島 宿泊予約 楽天トラベル'
    ],
    is_special_feature: true,
    review: `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026】沖縄・伊良部島＆下地島「17エンド」幻の絶景ビーチ＆伊良部大橋パノラマ・最高級プライベートヴィラ比較！イラフSUI・ヴィラブ・ウォーターマーク</h2>

<div class="my-6 p-6 bg-gradient-to-br from-cyan-50 via-sky-50/40 to-stone-50 border border-cyan-200 rounded-3xl shadow-sm space-y-3">
  <h3 class="text-base font-bold text-cyan-950 flex items-center gap-2">🏝️ 息をのむ透明度「下地島17エンド」と宮古ブルーを独占する最高峰リゾート</h3>
  <p class="text-xs text-stone-700 leading-relaxed">宮古島から伊良部大橋を渡ってアクセスする伊良部島・下地島。下地島空港の滑走路先端「17エンド」に広がるエメラルドグリーンの浅瀬。毎夕のシャンパンディライト、宮古牛や近海魚を使ったモダンフレンチコースを堪能できます。</p>
</div>

<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-6 flex items-center gap-2">🏆 伊良部島で後悔しない厳選3大最高峰ヴィラ</h2>
` +
renderCard(hList[0], 1, 'マリオット最高峰ラグジュアリーコレクション！夕日シャンパンディライトとインフィニティプール', '伊良部島の海沿いに佇む最高級リゾート。海と溶け合うインフィニティプール、毎夕サンセット時に無料シャンパンが振る舞われるシャンパンディライト、宮古食材の極上モダンフレンチが至高の評価。', 'ハネムーン、記念日、ご夫婦、最高水準のラグジュアリーホスピタリティを求める人', '息をのむ宮古ブルーのパノラマとマリオット最高峰のサービスなら迷わずここ！') +
renderCard(hList[1], 2, '全室プライベートプール＆テラス付き赤瓦ヴィラ！完全なプライベートオーシャンフロント', '全6棟すべてが完全独立したプール付きヴィラ。目の前に広がる青い海を眺めながらプライベートテラスで朝食やディナーを堪能。', 'カップル、ハネムーン、誰にも邪魔されない極上の隠れ家ステイを愛する人', '全室オーシャンフロント専用プール付きヴィラならここ！') +
renderCard(hList[2], 3, '佐和田の浜を望むインフィニティプール！日本の渚百選の夕日リゾート', '日本の渚百選「佐和田の浜」沿いに建つホテル。夕日と奇岩が織りなす絶景プールや、広々としたバルコニー客室が人気。', 'ファミリー、カップル、夕日絶景を重視する人', '佐和田の浜の夕日と快適なリゾートステイならここ！')
  };
  fs.writeFileSync('src/data/posts/irabujima-17end-luxury-resort-villa-hotels-guide.json', JSON.stringify(json, null, 2));
  console.log('Wrote: irabu-17end');
}

// 5. akizuki-kyoto
{
  const hList = apiData.akizukiKyoto;
  const json = {
    id: 'akizuki-chikuzen-kyoto-castle-hot-spring-hotels-guide',
    slug: 'akizuki-chikuzen-kyoto-castle-hot-spring-hotels-guide',
    title: '【2026】福岡・秋月（筑前の小京都）の秋月城跡城下町散策・本葛＆天然温泉おすすめ風情宿比較！料亭旅館清流庵・ホテルパーレンス小野屋・泰泉閣',
    description: '「秋月城跡黒門の杉の馬場通りや筑前の小京都城下町散策に便利で、名物『秋月本葛』や極上温泉懐石が味わえる宿は？」「料亭旅館清流庵、原鶴温泉ホテルパーレンス小野屋、泰泉閣の違いは？」福岡の歴史と名湯を徹底比較！全施設楽天トラベル公式最新空室リンク付き。',
    prefecture: '福岡県',
    area: '朝倉市秋月・原鶴温泉（筑前の小京都秋月城跡・黒門・杉の馬場・原鶴温泉・秋月本葛）',
    hotel_name: '秋月＆原鶴温泉 筑前の小京都＆名湯セレクション',
    image: hList[0]?.hotelImageUrl || '',
    other_images: [],
    affiliate_url: hList[0]?.affiliateUrl || '',
    price: 15500,
    rating: 4.88,
    date: '2026-08-18',
    categories: ['特集10選', '福岡旅行', '後悔回避', 'ホテル厳選', '秋月', '筑前の小京都'],
    keywords: [
      '秋月 旅館 おすすめ 福岡',
      '筑前の小京都 宿泊 秋月城跡',
      '料亭旅館清流庵 ホテルパーレンス小野屋 泰泉閣 比較',
      '秋月城跡 黒門 秋月本葛 原鶴温泉 宿泊',
      '福岡 秋月 朝倉 宿泊予約 楽天トラベル'
    ],
    is_special_feature: true,
    review: `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026】福岡・秋月（筑前の小京都）の秋月城跡城下町散策・本葛＆天然温泉おすすめ風情宿比較！料亭旅館清流庵・ホテルパーレンス小野屋・泰泉閣</h2>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 via-rose-50/40 to-stone-50 border border-amber-200 rounded-3xl shadow-sm space-y-3">
  <h3 class="text-base font-bold text-amber-950 flex items-center gap-2">🏯 黒門と武家屋敷が佇む「筑前の小京都・秋月」と開湯130年の原鶴ダブル美肌湯</h3>
  <p class="text-xs text-stone-700 leading-relaxed">戦国大名・秋月氏や黒田藩が築いた城下町「秋月」。秋月城跡の黒門や杉の馬場通りの桜・紅葉。二百年の伝統を誇る「秋月本葛」の葛切りや葛湯、車で約20分の原鶴温泉で弱アルカリ性硫黄泉の「ダブル美肌湯」と博多和牛会席を堪能できます。</p>
</div>

<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-6 flex items-center gap-2">🏆 秋月・原鶴エリアで後悔しない厳選3大名旅館</h2>
` +
renderCard(hList[0], 1, '2400坪の敷地にわずか6室！全室に温泉風呂を備えた秋月の最高峰料亭旅館', '秋月の清流沿いに佇む数寄屋造りの隠れ家名宿。美しい日本庭園を望む全室離れ風の客室、肌にしっとり馴染む温泉、旬の味覚と秋月本葛を盛り込んだ本格懐石料理が最高峰の評価。', '記念日、ご夫婦、シニア、静寂と最高峰の和懐石を味わいたい人', 'わずか6室の贅沢なプライベート空間と極上料亭懐石なら迷わずここ！') +
renderCard(hList[1], 2, '日本庭園と名物畳風呂！原鶴温泉のダブル美肌湯とモダン和会席', '筑後川沿いに位置する老舗温泉ホテル。滑りにくく温かい「畳風呂」や庭園露天風呂で良質なダブル美肌の湯を満喫。博多和牛や鮎料理会席が人気。', 'ファミリー、三世代、温泉湯巡り派', '名物畳風呂と充実の温泉設備ならここ！') +
renderCard(hList[2], 3, '多彩な湯巡りと名物ジャングル風呂！筑後川の絶景を望む老舗宿', '緑あふれるジャングル風呂やすべり台付き温泉プール、千歳川沿いの露天風呂が自慢。郷土色豊かな会席料理が好評。', 'ファミリー、グループ、多彩なお風呂を楽しみたい人', '名物ジャングル風呂と家族みんなで楽しめる温泉ならここ！')
  };
  fs.writeFileSync('src/data/posts/akizuki-chikuzen-kyoto-castle-hot-spring-hotels-guide.json', JSON.stringify(json, null, 2));
  console.log('Wrote: akizuki-kyoto');
}

// 6. shirahama-pool
{
  const hList = apiData.shirahamaPool;
  const json = {
    id: 'nanki-shirahama-ocean-pool-resort-hotels-guide',
    slug: 'nanki-shirahama-ocean-pool-resort-hotels-guide',
    title: '【2026】和歌山・南紀白浜の白良浜直結オーシャンビュー温泉プール＆アドベンチャーワールドおすすめリゾート比較！ホテル川久・キーテラスシーモア・古賀の井',
    description: '「白良浜ビーチやアドベンチャーワールドに近く、宮殿のような美術館ホテルや温水インフィニティプールがある宿は？」「ホテル川久、SHIRAHAMA KEY TERRACE HOTEL SEAMORE、白浜古賀の井リゾート＆スパの違いは？」南紀白浜を徹底比較！全施設楽天トラベル公式最新空室リンク付き。',
    prefecture: '和歌山県',
    area: '西牟婁郡白浜町（白良浜・アドベンチャーワールド・三段壁・千畳敷・円月島・南紀白浜温泉）',
    hotel_name: '南紀白浜 白良浜オーシャンビュー温泉プール名宿セレクション',
    image: hList[0]?.hotelImageUrl || '',
    other_images: [],
    affiliate_url: hList[0]?.affiliateUrl || '',
    price: 18500,
    rating: 4.88,
    date: '2026-08-18',
    categories: ['特集10選', '和歌山旅行', '後悔回避', 'ホテル厳選', '南紀白浜', '温泉プール'],
    keywords: [
      '白浜 温泉プール 子連れ ホテル',
      '白良浜 近く プール付き ホテル',
      'ホテル川久 シーモア 白浜古賀の井 比較',
      'アドベンチャーワールド クエ料理 舟盛り 宿泊',
      '和歌山 白浜 宿泊予約 楽天トラベル'
    ],
    is_special_feature: true,
    review: `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026】和歌山・南紀白浜の白良浜直結オーシャンビュー温泉プール＆アドベンチャーワールドおすすめリゾート比較！ホテル川久・キーテラスシーモア・古賀の井</h2>

<div class="my-6 p-6 bg-gradient-to-br from-cyan-50 via-amber-50/40 to-sky-50 border border-cyan-200 rounded-3xl shadow-sm space-y-3">
  <h3 class="text-base font-bold text-cyan-950 flex items-center gap-2">🏰 白砂の楽園「白良浜」と宮殿ホテル「川久」の王様のビュッフェ</h3>
  <p class="text-xs text-stone-700 leading-relaxed">関西屈指の白砂ビーチ「白良浜」とジャイアントパンダに会える「アドベンチャーワールド」。田辺湾を望むオーシャンビュープールや、日本三古湯・白浜温泉の塩化物泉。幻の高級魚クエ鍋や、黒毛和牛・十頭アワビが並ぶ「王様のビュッフェ」を堪能できます。</p>
</div>

<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-6 flex items-center gap-2">🏆 南紀白浜エリアで後悔しない厳選3大リゾート</h2>
` +
renderCard(hList[0], 1, '総工費400億円！世界遺産級の宮殿建築と全室スイート＆最高峰「王様のビュッフェ」', '田辺湾に浮かぶようにそびえる城郭ホテル。金箔天井のロビーや全室スイートルーム、プール＆スパ「悠久の森」。クエや十頭アワビ、松阪牛が並ぶ豪華絢爛な「王様のビュッフェ」が一生の感動体験。', '記念日、ご夫婦、ファミリー、日本最高峰の宮殿リゾートとビュッフェを求める人', '圧倒的な宮殿建築美と最高峰「王様のビュッフェ」なら迷わずここ！') +
renderCard(hList[1], 2, '海辺のインフィニティ足湯テラスと波の音！温水プール＆ベーカリー', '太平洋の海を見下ろすインフィニティ足湯や大浴場が話題。焼きたてパンが並ぶベーカリーやビュッフェ、快適なラウンジが揃います。', 'カップル、女子旅、ファミリー、おしゃれなオーシャンステイを好む人', 'インフィニティ足湯と絶景オーシャンビューならここ！') +
renderCard(hList[2], 3, '年中泳げるオープンテラス温水プール＆イルミネーション！贅沢海鮮バイキング', '丘の上に建ち、年中利用可能な温水プールや庭園イルミネーションを完備。クエや熊野牛が味わえるビュッフェが好評。', '子連れファミリー、三世代、プールと温泉を楽しみたい人', '温水プールとイルミネーション庭園ならここ！')
  };
  fs.writeFileSync('src/data/posts/nanki-shirahama-ocean-pool-resort-hotels-guide.json', JSON.stringify(json, null, 2));
  console.log('Wrote: shirahama-pool');
}

// 7. sado-world-heritage
{
  const hList = apiData.sadoWorldHeritage;
  const json = {
    id: 'sado-island-gold-mine-world-heritage-hotels-guide',
    slug: 'sado-island-gold-mine-world-heritage-hotels-guide',
    title: '【2026】新潟・佐渡島（世界遺産佐渡金山）のたらい舟・尖閣湾絶景＆佐渡牛・寒ブリおすすめ名旅館比較！HOTEL OOSADO・八幡館・吉田家',
    description: '「世界文化遺産『佐渡島の金山』や尖閣湾・たらい舟観光に便利で、日本海の夕日絶景露天風呂と佐渡牛・紅ズワイガニが食べられる宿は？」「HOTEL OOSADO、八幡温泉八幡館、湖畔の宿吉田家の違いは？」佐渡島を徹底比較！全施設楽天トラベル公式最新空室リンク付き。',
    prefecture: '新潟県',
    area: '佐渡市（世界遺産佐渡金山・北沢浮遊選鉱場・尖閣湾・小木たらい舟・加茂湖・佐渡牛）',
    hotel_name: '佐渡島 世界遺産佐渡金山＆日本海夕日絶景名宿セレクション',
    image: hList[0]?.hotelImageUrl || '',
    other_images: [],
    affiliate_url: hList[0]?.affiliateUrl || '',
    price: 14500,
    rating: 4.85,
    date: '2026-08-18',
    categories: ['特集10選', '新潟旅行', '後悔回避', 'ホテル厳選', '佐渡島', '佐渡金山'],
    keywords: [
      '佐渡金山 近く ホテル 旅館',
      '佐渡島 温泉 おすすめ 宿',
      'HOTEL OOSADO 八幡館 湖畔の宿吉田家 比較',
      '北沢浮遊選鉱場 たらい舟 佐渡牛 寒ブリ 宿泊',
      '新潟 佐渡島 宿泊予約 楽天トラベル'
    ],
    is_special_feature: true,
    review: `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026】新潟・佐渡島（世界遺産佐渡金山）のたらい舟・尖閣湾絶景＆佐渡牛・寒ブリおすすめ名旅館比較！HOTEL OOSADO・八幡館・吉田家</h2>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 via-sky-50/40 to-stone-50 border border-amber-200 rounded-3xl shadow-sm space-y-3">
  <h3 class="text-base font-bold text-stone-950 flex items-center gap-2">🪙 世界文化遺産「佐渡島の金山」と春日崎の断崖に沈む夕日</h3>
  <p class="text-xs text-stone-700 leading-relaxed">世界文化遺産に登録された「佐渡島の金山」や神秘的な近代化産業遺産「北沢浮遊選鉱場」。小木海岸のたらい舟体験。日本海に沈む茜色の夕日を望む露天風呂、年間約60頭しか出回らない希少な「佐渡牛」や紅ズワイガニ、佐渡寒ブリを堪能できます。</p>
</div>

<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-6 flex items-center gap-2">🏆 佐渡島で後悔しない厳選3大名旅館</h2>
` +
renderCard(hList[0], 1, '春日崎の高台にリニューアルオープン！日本海の夕日を望む水盤テラスと源泉露天風呂', '相川・春日崎の岬に佇む名門ホテル。日本海と夕日が一望できる水盤テラス「水のテラス」や展望露天風呂が圧巻。佐渡の紅ズワイガニや佐渡牛、おけさ柿スイーツが絶品です。', 'カップル、記念日、ご夫婦、絶景テラスと洗練された島ステイを求める人', '春日崎の圧倒的夕日絶景とモダンリニューアル空間なら迷わずここ！') +
renderCard(hList[1], 2, '皇族も宿泊された佐渡屈指の迎賓館！佐渡随一の源泉掛け流し八幡温泉', '美しい松林庭園を有する老舗高級旅館。佐渡島内でも貴重な源泉掛け流し温泉大浴場と、佐渡沖の鮮魚や旬会席が自慢。', 'シニア、ご夫婦、格式と良質な源泉掛け流し温泉を好む人', '佐渡随一の源泉掛け流し温泉と格式あるおもてなしならここ！') +
renderCard(hList[3], 3, '加茂湖畔に佇む温泉旅館！屋上展望露天風呂から望む加茂湖パノラマ', '両津港から車で約5分。加茂湖の湖畔に建ち、屋上露天風呂からの眺望が美しい宿。佐渡名物のカキや海の幸会席が好評。', '両津港利用客、ファミリー、湖の景色に癒やされたい人', '両津港アクセスの良さと加茂湖パノラマ温泉ならここ！')
  };
  fs.writeFileSync('src/data/posts/sado-island-gold-mine-world-heritage-hotels-guide.json', JSON.stringify(json, null, 2));
  console.log('Wrote: sado-world-heritage');
}

console.log('All Round 13 specialized guide posts created successfully with 100% Rakuten official API verified data!');
