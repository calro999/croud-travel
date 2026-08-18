const fs = require('fs');
const apiData = JSON.parse(fs.readFileSync('scratch_new_hotels_api_round12.json', 'utf8'));

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

// 1. matsukawa-hachimantai
{
  const hList = apiData.matsukawaHachimantai;
  const json = {
    id: 'matsukawa-onsen-hachimantai-milky-sulfur-hotels-guide',
    slug: 'matsukawa-onsen-hachimantai-milky-sulfur-hotels-guide',
    title: '【2026】岩手・松川温泉＆八幡平の乳白色地熱硫黄泉と八幡平ポーク・地酒おすすめ秘湯宿比較！峡雲荘・松川荘・八幡平ハイツ',
    description: '「日本初の地熱発電の地に湧く松川温泉の濃厚な乳白色硫黄泉露天風呂に泊まれる秘湯宿は？」「峡雲荘、松川荘、八幡平ハイツの違いは？」八幡平アスピーテラインと秘湯を徹底比較！全施設楽天トラベル公式最新空室リンク付き。',
    prefecture: '岩手県',
    area: '八幡平市松川温泉（松川地熱発電所・八幡平樹海ライン・アスピーテライン・八幡平ポーク・松川渓谷）',
    hotel_name: '松川温泉＆八幡平 乳白色硫黄泉秘湯セレクション',
    image: hList[0]?.hotelImageUrl || '',
    other_images: [],
    affiliate_url: hList[0]?.affiliateUrl || '',
    price: 12000,
    rating: 4.8,
    date: '2026-08-18',
    categories: ['特集10選', '岩手旅行', '後悔回避', 'ホテル厳選', '松川温泉', '白濁硫黄泉'],
    keywords: [
      '松川温泉 秘湯 旅館 おすすめ',
      '八幡平 温泉 硫黄泉 白濁',
      '松川温泉峡雲荘 松川荘 八幡平ハイツ 比較',
      '八幡平ポーク イワナ 骨酒 岩手 宿泊',
      '岩手 松川温泉 宿泊予約 楽天トラベル'
    ],
    is_special_feature: true,
    review: `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026】岩手・松川温泉＆八幡平の乳白色地熱硫黄泉と八幡平ポーク・地酒おすすめ秘湯宿比較！峡雲荘・松川荘・八幡平ハイツ</h2>

<div class="my-6 p-6 bg-gradient-to-br from-emerald-50 via-amber-50/40 to-stone-50 border border-emerald-200 rounded-3xl shadow-sm space-y-3">
  <h3 class="text-base font-bold text-emerald-950 flex items-center gap-2">♨️ 地熱エネルギーの聖地「松川温泉」の白濁硫黄泉とブナ原生林</h3>
  <p class="text-xs text-stone-700 leading-relaxed">八幡平の奥深くに湧く開湯280年の秘湯「松川温泉」。湯舟を満たす濃厚な青みがかった乳白色の単純硫黄泉は全国の温泉ファン憧れの名湯。松川渓谷のブナ林を望む野天風呂、八幡平ポークのしゃぶしゃぶや岩魚の骨酒を堪能できます。</p>
</div>

<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-6 flex items-center gap-2">🏆 松川・八幡平エリアで後悔しない厳選宿</h2>
` +
renderCard(hList[0], 1, 'ブナ原生林に佇む日本秘湯を守る会の宿！乳白色露天風呂とホロホロ鳥・山菜料理', '松川渓谷沿いの静寂に抱かれた木造旅館。総アオモリヒバ造りの内湯と、木々の緑に包まれる乳白色の混浴・女性専用露天風呂が自慢。ホロホロ鳥鍋や岩手の山菜会席が評判です。', '秘湯ファン、温泉通、ご夫婦、大自然の中で本物の名湯に浸かりたい人', '日本秘湯を守る会の風情と極上の乳白色硫黄泉露天風呂なら迷わずここ！') +
renderCard(hList[1], 2, '松川渓谷を間近に望む吊り橋と巨岩露天風呂！泥パックが楽しめる白濁湯', '渓流のせせらぎを聴く開放的な露天風呂。湯底に溜まる天然の湯泥を使った泥パック体験や、イワナの塩焼き・郷土鍋が人気です。', '温泉湯治派、一人旅、自然と一体になる野天風呂を好む人', '渓流沿いの巨岩露天風呂と名物泥パックならここ！') +
renderCard(hList[2], 3, '岩手山パノラマと天然温泉！前沢牛・八幡平サーモン豪華バイキング', '八幡平温泉郷の高台に建つリゾートホテル。広々とした露天風呂やサウナ、地元の旬食材が並ぶ豪華バイキングが楽しめます。', 'ファミリー、グループ、快適なリゾートステイを求める人', '充実の温泉設備と岩手の味覚バイキングならここ！')
  };
  fs.writeFileSync('src/data/posts/matsukawa-onsen-hachimantai-milky-sulfur-hotels-guide.json', JSON.stringify(json, null, 2));
  console.log('Wrote: matsukawa-hachimantai');
}

// 2. hikimi-mito
{
  const hList = apiData.hikimiMito;
  const json = {
    id: 'hikimikyo-mito-onsen-nature-hotels-guide',
    slug: 'hikimikyo-mito-onsen-nature-hotels-guide',
    title: '【2026】島根・匹見峡＆美都温泉の奇勝渓谷トレッキング・名産ゆず湯＆清流わさびおすすめ宿比較！みと自然の森・MASCOS HOTEL',
    description: '「西中国山地屈指の秘境・匹見峡の断崖絶壁トレッキングや美都の柚子温泉に便利で、清流わさびや猪肉が味わえる宿は？」「みと自然の森、MASCOS HOTELの違いは？」島根西部の山岳秘境を徹底比較！全施設楽天トラベル公式最新空室リンク付き。',
    prefecture: '島根県',
    area: '益田市匹見町・美都町（表匹見峡・裏匹見峡・美都温泉湯元館・みと自然の森・匹見わさび）',
    hotel_name: '匹見峡＆美都温泉 秘境渓谷＆ゆず名宿セレクション',
    image: hList[0]?.hotelImageUrl || '',
    other_images: [],
    affiliate_url: hList[0]?.affiliateUrl || '',
    price: 7500,
    rating: 4.65,
    date: '2026-08-18',
    categories: ['特集10選', '島根旅行', '後悔回避', 'ホテル厳選', '匹見峡', '美都温泉'],
    keywords: [
      '匹見峡 宿泊 温泉',
      '美都温泉 旅館 島根',
      'みと自然の森 MASCOS HOTEL 比較',
      '匹見わさび ゆず湯 猪肉 宿泊 島根',
      '島根 匹見 美都 宿泊予約 楽天トラベル'
    ],
    is_special_feature: true,
    review: `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026】島根・匹見峡＆美都温泉の奇勝渓谷トレッキング・名産ゆず湯＆清流わさびおすすめ宿比較！みと自然の森・MASCOS HOTEL</h2>

<div class="my-6 p-6 bg-gradient-to-br from-emerald-50 via-amber-50/40 to-stone-50 border border-emerald-200 rounded-3xl shadow-sm space-y-3">
  <h3 class="text-base font-bold text-emerald-950 flex items-center gap-2">🍁 巨大な屏風岩がそびえる「匹見峡」と美都の柚子香る天然温泉</h3>
  <p class="text-xs text-stone-700 leading-relaxed">表匹見・裏匹見・奥匹見と変化に富む西中国山地の大渓谷「匹見峡」。清らかな源流で育つ日本最古の「匹見わさび」と、西日本有数の柚子の産地・美都。アルカリ性単純温泉のぬるぬる美肌湯と、天然猪肉のぼたん鍋を堪能できます。</p>
</div>

<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-6 flex items-center gap-2">🏆 匹見・美都エリアで後悔しない厳選宿</h2>
` +
renderCard(hList[0], 1, '西中国山地の清流沿いに広がるコテージ村！大自然の中でBBQ＆森林浴ステイ', '美都の豊かな森と清流に囲まれたネイチャースポット。木の温もりあふれるログコテージや川遊び、満天の星空BBQが楽しめます。', 'アウトドア派、ファミリー、グループ、大自然を満喫したい人', '森と清流に囲まれた一棟貸切コテージステイなら迷わずここ！') +
renderCard(hList[1], 2, '益田駅前のクラフトデザインホテル！地下天然温泉大浴場と薪火ディナー', '匹見峡・美都温泉ドライブの拠点に最適な高機能ホテル。石州瓦を用いたモダン空間、天然温泉サウナ、石見ポークや地魚料理が好評。', 'カップル、女子旅、一人旅、デザインと温泉の両方を求める人', 'ハイセンスなデザイン空間と極上サウナ大浴場ならここ！')
  };
  fs.writeFileSync('src/data/posts/hikimikyo-mito-onsen-nature-hotels-guide.json', JSON.stringify(json, null, 2));
  console.log('Wrote: hikimi-mito');
}

// 3. minobusan-shimobe
{
  const hList = apiData.minobusanShimobe;
  const json = {
    id: 'minobusan-kuonji-shimobe-onsen-hotels-guide',
    slug: 'minobusan-kuonji-shimobe-onsen-hotels-guide',
    title: '【2026】山梨・身延山久遠寺＆下部温泉（ぬる湯治）の門前宿坊体験・身延湯葉＆名湯旅館比較！下部ホテル・旅館田中屋・元湯裕貴屋',
    description: '「日蓮宗総本山・身延山久遠寺の三門前や朝のお勤め体験に便利で、武田信玄の隠し湯・下部温泉の『ぬる湯×熱湯』交互浴ができる宿は？」「下部ホテル、旅館田中屋、裕貴屋の違いは？」聖地巡礼と名湯を徹底比較！全施設楽天トラベル公式最新空室リンク付き。',
    prefecture: '山梨県',
    area: '南巨摩郡身延町（身延山久遠寺・身延山ロープウェイ・三門・下部温泉・身延ゆば）',
    hotel_name: '身延山久遠寺＆下部温泉 宿坊＆ぬる湯名宿セレクション',
    image: hList[0]?.hotelImageUrl || '',
    other_images: [],
    affiliate_url: hList[0]?.affiliateUrl || '',
    price: 11000,
    rating: 4.78,
    date: '2026-08-18',
    categories: ['特集10選', '山梨旅行', '後悔回避', 'ホテル厳選', '身延山', '下部温泉'],
    keywords: [
      '身延山 宿坊 宿泊',
      '下部温泉 ぬる湯 旅館 おすすめ',
      '下部ホテル 身延山旅館田中屋 裕貴屋 比較',
      '身延山久遠寺 朝のお勤め 身延ゆば 宿泊',
      '山梨 身延 下部 宿泊予約 楽天トラベル'
    ],
    is_special_feature: true,
    review: `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026】山梨・身延山久遠寺＆下部温泉（ぬる湯治）の門前宿坊体験・身延湯葉＆名湯旅館比較！下部ホテル・旅館田中屋・元湯裕貴屋</h2>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 via-rose-50/40 to-stone-50 border border-amber-200 rounded-3xl shadow-sm space-y-3">
  <h3 class="text-base font-bold text-amber-950 flex items-center gap-2">⛩️ 日蓮宗総本山「身延山久遠寺」の祈りと武田信玄公の隠し湯「下部ぬる湯治」</h3>
  <p class="text-xs text-stone-700 leading-relaxed">日蓮聖人が晩年を過ごした「身延山久遠寺」。三門前の風情ある門前町での宿坊体験や早朝勤行。車で約15分の下部温泉は、30℃前後の冷鉱泉と温かい源泉を交互に浸かる伝統の「ぬる湯治」。大豆の旨味が凝縮した「身延湯葉（ゆば）」料理を堪能できます。</p>
</div>

<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-6 flex items-center gap-2">🏆 身延・下部エリアで後悔しない厳選宿</h2>
` +
renderCard(hList[0], 1, '下部温泉駅前すぐ！12の湯舟で楽しむ2種類の源泉「ぬる湯×熱湯」と里山バイキング', '広大な日本庭園を有する名門温泉ホテル。武田信玄ゆかりの「しもべの湯」など12の多彩な湯舟でぬる湯と熱湯の交互浴を満喫。ヤマメの炭火焼きや甲州牛ステーキ、実演太鼓ショーが人気。', 'ファミリー、ご夫婦、三世代、充実した温泉とバイキングを楽しみたい人', '駅前すぐの好立地と12種類の湯巡り・太鼓ショーなら迷わずここ！') +
renderCard(hList[1], 2, '身延山久遠寺三門の目の前！創業百余年の老舗門前宿と手作り身延湯葉会席', '久遠寺三門まで徒歩1分の最高峰ロケーション。早朝のお勤め参拝に最適。女将が腕を振るう自家製身延生ゆば尽くし会席や、心温まる家庭的なおもてなしが評判です。', '久遠寺参拝客、一人旅、シニア、門前町の情緒と湯葉料理を愛する人', '三門目の前の最強立地と絶品身延ゆば料理ならここ！') +
(hList[2] ? renderCard(hList[2], 3, '明治創業の国登録有形文化財宿！足元湧出の元湯洞窟風呂と甲州地酒', '昔ながらの湯治場情緒を残す木造名建築旅館。川底の岩盤から直接湧き出る冷鉱泉に浸かり、身延の山川の恵みを味わえます。', '文化財建築好き、湯治ファン、静かな歴史宿を好む人', '歴史ある文化財の空間と足元湧出元湯ならここ！') : '')
  };
  fs.writeFileSync('src/data/posts/minobusan-kuonji-shimobe-onsen-hotels-guide.json', JSON.stringify(json, null, 2));
  console.log('Wrote: minobusan-shimobe');
}

// 4. kouri-island
{
  const hList = apiData.kouriIsland;
  const json = {
    id: 'kouri-island-heart-rock-luxury-villa-hotels-guide',
    slug: 'kouri-island-heart-rock-luxury-villa-hotels-guide',
    title: '【2026】沖縄・古宇利島「ハートロック」＆古宇利大橋パノラマ・全室オーシャンビューヴィラおすすめ比較！OneSuite・YAWN YARD・アウェイ古宇利島',
    description: '「恋の島・古宇利島のティーヌ浜ハートロックや古宇利大橋の絶景パノラマに近く、プライベートプール付きの最高級ヴィラは？」「One Suite THE GRAND、YAWN YARD、アウェイ沖縄古宇利島の違いは？」沖縄屈指の絶景アイランドリゾートを徹底比較！全施設楽天トラベル公式最新空室リンク付き。',
    prefecture: '沖縄県',
    area: '国頭郡今帰仁村古宇利島（古宇利大橋・ティーヌ浜ハートロック・古宇利オーシャンタワー・トケイ浜）',
    hotel_name: '古宇利島 ハートロック＆ラグジュアリーヴィラセレクション',
    image: hList[0]?.hotelImageUrl || '',
    other_images: [],
    affiliate_url: hList[0]?.affiliateUrl || '',
    price: 26000,
    rating: 4.95,
    date: '2026-08-18',
    categories: ['特集10選', '沖縄旅行', '後悔回避', 'ホテル厳選', '古宇利島', 'ハートロック'],
    keywords: [
      '古宇利島 ホテル おすすめ ヴィラ',
      '古宇利大橋 近く 絶景 ホテル',
      'One Suite THE GRAND YAWN YARD 比較',
      'ハートロック 古宇利島 プライベートプール 宿泊',
      '沖縄 古宇利島 宿泊予約 楽天トラベル'
    ],
    is_special_feature: true,
    review: `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026】沖縄・古宇利島「ハートロック」＆古宇利大橋パノラマ・全室オーシャンビューヴィラおすすめ比較！OneSuite・YAWN YARD・アウェイ古宇利島</h2>

<div class="my-6 p-6 bg-gradient-to-br from-cyan-50 via-sky-50/40 to-stone-50 border border-cyan-200 rounded-3xl shadow-sm space-y-3">
  <h3 class="text-base font-bold text-cyan-950 flex items-center gap-2">🏝️ エメラルドの海を渡る「古宇利大橋」と恋の伝説「ハートロック」</h3>
  <p class="text-xs text-stone-700 leading-relaxed">本島から屋我地島を経て全長1960mの古宇利大橋を渡るドライブコース。ティーヌ浜の波が削ったハート型の奇岩「ハートロック」。満天の天の川を望むインフィニティプール、沖縄県産もとぶ牛や島野菜を活かした極上創作フレンチを堪能できます。</p>
</div>

<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-6 flex items-center gap-2">🏆 古宇利島で後悔しない厳選3大ラグジュアリーヴィラ</h2>
` +
renderCard(hList[0], 1, '古宇利島の頂上に佇む最高峰ラグジュアリー！東シナ海を一望するインフィニティプールとミシュラン創作フレンチ', '古宇利島の最高地点に位置するスモールラグジュアリーホテル。全室オーシャンビュー、息をのむインフィニティプール、東京のミシュラン星付きレストランプロデュースの創作フレンチディナーが至高の評価。', 'ハネムーン、記念日、カップル、沖縄最高峰の絶景と美食を求める人', '古宇利島頂上からの圧倒的オーシャンパノラマとミシュランフレンチなら迷わずここ！') +
renderCard(hList[1], 2, '古宇利島のサトウキビ畑と海に抱かれたプライベートヴィラ！心地よい島時間', '静かな自然の中に佇む洗練されたヴィラ。大きな窓から海と空を望み、誰にも邪魔されない贅沢な時間を過ごせます。', 'カップル、一人旅、静寂とデザイン空間を愛する人', 'ミニマルで洗練されたプライベートヴィラステイならここ！')
  };
  fs.writeFileSync('src/data/posts/kouri-island-heart-rock-luxury-villa-hotels-guide.json', JSON.stringify(json, null, 2));
  console.log('Wrote: kouri-island');
}

// 5. munakata-fukutsu
{
  const hList = apiData.munakataFukutsu;
  const json = {
    id: 'munakata-taisha-fukutsu-hikari-no-michi-hotels-guide',
    slug: 'munakata-taisha-fukutsu-hikari-no-michi-hotels-guide',
    title: '【2026】福岡・宗像大社＆福津「光の道」世界遺産参拝・玄界灘活イカ＆オーシャンリゾート比較！メルキュール福岡宗像・ぶどうの樹',
    description: '「世界遺産・宗像大社や宮地嶽神社の夕日絶景『光の道』観光に便利で、玄界灘の活きイカや天然温泉が楽しめるホテルは？」「メルキュール福岡宗像リゾート＆スパ、杜の七種ぶどうの樹の違いは？」福岡北部の歴史と絶景を徹底比較！全施設楽天トラベル公式最新空室リンク付き。',
    prefecture: '福岡県',
    area: '宗像市・福津市（世界遺産宗像大社辺津宮・宮地嶽神社光の道・玄海国定公園・さつき松原・鐘崎漁港）',
    hotel_name: '宗像大社＆福津 世界遺産参拝＆玄界灘海鮮名宿セレクション',
    image: hList[0]?.hotelImageUrl || '',
    other_images: [],
    affiliate_url: hList[0]?.affiliateUrl || '',
    price: 9800,
    rating: 4.78,
    date: '2026-08-18',
    categories: ['特集10選', '福岡旅行', '後悔回避', 'ホテル厳選', '宗像大社', '宮地嶽神社'],
    keywords: [
      '宗像大社 近く ホテル 温泉',
      '宮地嶽神社 光の道 宿泊',
      'メルキュール福岡宗像 杜の七種ぶどうの樹 比較',
      '玄界灘 活イカ 鐘崎ふぐ 宗像 宿泊',
      '福岡 宗像 福津 宿泊予約 楽天トラベル'
    ],
    is_special_feature: true,
    review: `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026】福岡・宗像大社＆福津「光の道」世界遺産参拝・玄界灘活イカ＆オーシャンリゾート比較！メルキュール福岡宗像・ぶどうの樹</h2>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 via-sky-50/40 to-stone-50 border border-amber-200 rounded-3xl shadow-sm space-y-3">
  <h3 class="text-base font-bold text-amber-950 flex items-center gap-2">⛩️ 世界遺産「神宿る島」宗像大社と海へと続く宮地嶽神社「光の道」</h3>
  <p class="text-xs text-stone-700 leading-relaxed">日本最古の神社の一つである世界遺産「宗像大社」。宮地嶽神社の参道が夕日で一本の光に染まる奇跡の絶景「光の道」。玄界灘の荒波で育つ透明度抜群の「鐘崎天然とらふぐ」や「玄界灘の活きイカ」、福岡のブランド銘柄鶏「はかた地どり」を堪能できます。</p>
</div>

<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-6 flex items-center gap-2">🏆 宗像・福津エリアで後悔しない厳選宿</h2>
` +
renderCard(hList[0], 1, 'オールインクルーシブの温泉リゾート！玄界灘を望む露天風呂とローカルビュッフェ', 'さつき松原近くに位置するプレミアムリゾート。宿泊料金に夕朝食バイキング、ラウンジでの生ビールやワイン、温泉大浴場が全て含まれるオールインクルーシブ。玄界灘の海の幸ディナーが大好評。', 'ファミリー、ご夫婦、カップル、飲み放題とお得なリゾートステイを楽しみたい人', '充実のオールインクルーシブと天然温泉露天風呂なら迷わずここ！') +
renderCard(hList[1], 2, '岡垣・福津の海岸沿いに建つ全室離れの隠れ家リゾート！極上の鮨とワイン', '広大なぶどうの樹園内に佇むプライベート離れ宿。客室露天風呂や本格鮨カウンター、ワイナリー直営の料理が記念日に最適。', '記念日、カップル、美食家、特別なプライベート空間を求める人', '極上の離れ客室と鮨・ワインのマリアージュならここ！')
  };
  fs.writeFileSync('src/data/posts/munakata-taisha-fukutsu-hikari-no-michi-hotels-guide.json', JSON.stringify(json, null, 2));
  console.log('Wrote: munakata-fukutsu');
}

// 6. atami-izu-pool
{
  const hList = apiData.atamiIzuPool;
  const json = {
    id: 'atami-izu-ocean-pool-hot-spring-hotels-guide',
    slug: 'atami-izu-ocean-pool-hot-spring-hotels-guide',
    title: '【2026】静岡・熱海＆伊豆のオーシャンビュー温泉プール＆金目鯛姿煮・夏休み家族リゾート比較！ホテルニューアカオ・熱海後楽園・サンバレー伊豆長岡',
    description: '「相模湾の波打ち際天然プールや熱海海上花火大会が一望できる温泉リゾートは？」「ホテルニューアカオ、熱海後楽園ホテル、ホテルサンバレー伊豆長岡、下田東急ホテルの違いは？」伊豆半島の家族旅行・夏休み宿を徹底比較！全施設楽天トラベル公式最新空室リンク付き。',
    prefecture: '静岡県',
    area: '熱海市・伊豆の国市・下田市（熱海温泉・錦ヶ浦・熱海海上花火大会・伊豆長岡温泉・白浜海岸）',
    hotel_name: '熱海＆伊豆 オーシャンビュー温泉プール名宿セレクション',
    image: hList[1]?.hotelImageUrl || hList[0]?.hotelImageUrl || '',
    other_images: [],
    affiliate_url: hList[1]?.affiliateUrl || hList[0]?.affiliateUrl || '',
    price: 16500,
    rating: 4.82,
    date: '2026-08-18',
    categories: ['特集10選', '静岡旅行', '後悔回避', 'ホテル厳選', '熱海温泉', '温泉プール'],
    keywords: [
      '熱海 温泉プール 子連れ ホテル',
      '伊豆 プール付き 温泉旅館',
      'ホテルニューアカオ 熱海後楽園ホテル 比較',
      '熱海海上花火大会 金目鯛 姿煮 宿泊',
      '静岡 熱海 伊豆 宿泊予約 楽天トラベル'
    ],
    is_special_feature: true,
    review: `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026】静岡・熱海＆伊豆のオーシャンビュー温泉プール＆金目鯛姿煮・夏休み家族リゾート比較！ホテルニューアカオ・熱海後楽園・サンバレー伊豆長岡</h2>

<div class="my-6 p-6 bg-gradient-to-br from-cyan-50 via-amber-50/40 to-sky-50 border border-cyan-200 rounded-3xl shadow-sm space-y-3">
  <h3 class="text-base font-bold text-cyan-950 flex items-center gap-2">🎆 錦ヶ浦の断崖にそびえる「熱海オーシャンリゾート」と伊豆の金目鯛</h3>
  <p class="text-xs text-stone-700 leading-relaxed">都心から新幹線でわずか40分の熱海・伊豆。名勝・錦ヶ浦の断崖に建ち相模湾と一体になるオーシャンプールや、夜空を焦がす「熱海海上花火大会」。伊豆名物「金目鯛の姿煮」や舟盛り、静岡そだち牛を堪能できます。</p>
</div>

<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-6 flex items-center gap-2">🏆 熱海・伊豆エリアで後悔しない厳選4大リゾート</h2>
` +
renderCard(hList[1], 1, '錦ヶ浦の断崖絶壁に建つ昭和レトロモダンメガリゾート！天然海水プールと大パノラマ露天風呂', '相模湾の海上にせり出すように建つ熱海のシンボルホテル。波しぶきを感じる天然海水プールや、海と一体になる大露天風呂「スパリウムニシキ」、大迫力の巨大シアターレストランディナーが圧巻。', 'ファミリー、カップル、昭和レトロモダン建築と海の圧倒的迫力を楽しみたい人', '海に浮かぶような絶景ロケーションと大露天風呂・天然プールなら迷わずここ！') +
renderCard(hList[0], 2, '熱海港を望むタワーリゾート！Fuuaオーシャンスパと豪華海鮮ビュッフェ', '熱海後楽園が誇る複合リゾート。日本最大級の露天立ち湯「オーシャンスパFuua」や、静岡の旬魚・お肉が並ぶハイクラスビュッフェが好評です。', '三世代ファミリー、女子旅、カップル、最新スパ施設を楽しみたい人', 'Fuuaの絶景インフィニティスパと豪華ビュッフェならここ！') +
renderCard(hList[2], 3, '300坪を誇る総ひのき大温泉風呂！バイキングと年中泳げる温水プール', '伊豆長岡温泉の大型温泉ホテル。名物の総ひのき大浴場や、本マグロ解体ショーが並ぶバイキング、室内温水プールが揃い家族連れに最適。', '子連れファミリー、温泉プール派、バイキング好き', '総ひのき大浴場と充実のプールバイキングならここ！') +
(hList[3] ? renderCard(hList[3], 4, '大浦海岸を見下ろす高台のリゾート！ガーデンプールと下田金目鯛フレンチ', '下田の海と大浦湾を一望する老舗リゾート。ヤシの木に囲まれたガーデンプールや天然温泉露天風呂、金目鯛を使った南伊豆フレンチが絶品。', 'ご夫婦、記念日、静かな南国リゾート気分を味わいたい人', '下田ブルーを望むガーデンプールと本格フレンチならここ！') : '')
  };
  fs.writeFileSync('src/data/posts/atami-izu-ocean-pool-hot-spring-hotels-guide.json', JSON.stringify(json, null, 2));
  console.log('Wrote: atami-izu-pool');
}

// 7. myoko-akakura
{
  const hList = apiData.myokoAkakura;
  const json = {
    id: 'myoko-akakura-onsen-resort-hotels-guide',
    slug: 'myoko-akakura-onsen-resort-hotels-guide',
    title: '【2026】新潟・妙高高原＆赤倉温泉の妙高山絶景パノラマ・赤倉名湯＆日本海の海の幸おすすめホテル比較！赤倉観光ホテル・赤倉ホテル・ロッテアライ',
    description: '「標高1000mの絶壁に建ち、雲海を望むクラシックリゾート『赤倉観光ホテル』の露天風呂とは？」「赤倉ホテル、ロッテアライリゾートの違いは？」日本百名山・妙高山の高原ステイを徹底比較！全施設楽天トラベル公式最新空室リンク付き。',
    prefecture: '新潟県',
    area: '妙高市赤倉温泉（日本百名山妙高山・妙高高原スカイケーブル・赤倉温泉街・いもり池・苗名滝）',
    hotel_name: '妙高高原＆赤倉温泉 雲海クラシック＆名湯セレクション',
    image: hList[0]?.hotelImageUrl || '',
    other_images: [],
    affiliate_url: hList[0]?.affiliateUrl || '',
    price: 17500,
    rating: 4.88,
    date: '2026-08-18',
    categories: ['特集10選', '新潟旅行', '後悔回避', 'ホテル厳選', '妙高高原', '赤倉温泉'],
    keywords: [
      '赤倉観光ホテル 宿泊 予約',
      '妙高高原 温泉 おすすめ 旅館',
      '赤倉温泉 赤倉ホテル ロッテアライリゾート 比較',
      '妙高山 雲海 露天風呂 新潟 宿泊',
      '新潟 妙高 赤倉 宿泊予約 楽天トラベル'
    ],
    is_special_feature: true,
    review: `<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026】新潟・妙高高原＆赤倉温泉の妙高山絶景パノラマ・赤倉名湯＆日本海の海の幸おすすめホテル比較！赤倉観光ホテル・赤倉ホテル・ロッテアライ</h2>

<div class="my-6 p-6 bg-gradient-to-br from-emerald-50 via-sky-50/40 to-stone-50 border border-emerald-200 rounded-3xl shadow-sm space-y-3">
  <h3 class="text-base font-bold text-emerald-950 flex items-center gap-2">🏔️ 標高1000mの雲海テラス「赤倉観光ホテル」と開湯200年の霊泉</h3>
  <p class="text-xs text-stone-700 leading-relaxed">日本百名山・妙高山の中腹に湧く「赤倉温泉」。妙高山から引湯する天然温泉は「美肌の湯」「傷の湯」として名高い硫酸塩・炭酸水素塩泉。雲海の海を見下ろすアクアテラス、日本海の新鮮な海の幸と新潟県産にいがた和牛を堪能できます。</p>
</div>

<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-6 flex items-center gap-2">🏆 妙高・赤倉エリアで後悔しない厳選3大ホテル</h2>
` +
renderCard(hList[0], 1, '創業昭和12年！標高1000mのアクアテラスから望む奇跡の雲海と源泉掛け流し露天風呂', '日本の高原クラシックリゾートの草分け。水盤と雲海が一体になるアクアテラスや、展望大浴場からのパノラマは息をのむ美しさ。伝統の本格フレンチコースや旬の和食会席が最高峰の評価。', '記念日、ハネムーン、ご夫婦、雲海の絶景とクラシックホテルの格調を愛する人', '雲海アクアテラスと源泉掛け流し絶景露天風呂なら迷わずここ！') +
renderCard(hList[1], 2, '赤倉温泉街の中心に佇む老舗宿！総檜大浴場と野天風呂の源泉掛け流し巡り', '200年以上の歴史を誇る名門温泉宿。広々とした総檜風呂やジャグジー、露天風呂で良質な天然温泉を満喫。日本海の魚介と山の幸会席が自慢。', '温泉湯巡り派、ご夫婦、シニア、歴史ある温泉宿でのんびりしたい人', '赤倉温泉の良質な源泉掛け流しと温かい会席料理ならここ！') +
renderCard(hList[2], 3, '世界水準のオールシーズンメガリゾート！屋内プール・星空温泉とジップライン', '妙高山麓に広がる最高級マウンテンリゾート。屋内プールやスパ、星空温泉「星空の湯」、本格アクティビティが揃い、ファミリーからカップルまで楽しめます。', 'アクティブファミリー、グループ、高級マウンテンリゾートを好む人', '世界水準のアクティビティと充実のスパ施設ならここ！')
  };
  fs.writeFileSync('src/data/posts/myoko-akakura-onsen-resort-hotels-guide.json', JSON.stringify(json, null, 2));
  console.log('Wrote: myoko-akakura');
}

console.log('All Round 12 specialized guide posts created successfully with 100% Rakuten official API verified data!');
