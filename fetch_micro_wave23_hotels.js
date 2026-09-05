const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const microWave23Configs = [
  {
    slug: 'akita-oga-peninsula-namahage-nyudozaki-stay',
    badge: 'OGA & NAMAHAGE GUIDE',
    title: '【秋田・男鹿半島＆なまはげ・入道崎】北緯40度白黒灯台・名物石焼料理宿 完全ガイド',
    metaDesc: 'ユネスコ無形文化遺産なまはげの郷・秋田男鹿半島エリア完全特化！入道崎（北緯40度白黒モニュメント）、なまはげ館・男鹿真山伝承館、ゴジラ岩、男鹿温泉郷の伝統「豪快石焼料理宿」を徹底解説。',
    heroDesc: '荒波の日本海に突き出た信仰と伝説の半島「秋田・男鹿半島」。北緯40度線上にそびえる白黒縞模様の「入道崎灯台」。大晦日の夜に雄叫びを上げるユネスコ無形文化遺産「なまはげ」。真っ赤に熱した小石を桶の出汁に放り込む男鹿伝統の「石焼料理」を味わう旅。',
    queries: [
      { key: 'oga_onsen_ishiyaki_stay', query: '男鹿温泉 旅館 ホテル 宿泊 秋田 石焼料理 露天風呂', label: '男鹿温泉郷中心部・男鹿名物「石焼料理」＆源泉かけ流し宿' },
      { key: 'nyudozaki_cape_view_stay', query: '男鹿 入道崎 ホテル 旅館 宿泊 秋田 日本海 夕陽', label: '入道崎＆男鹿北海岸・夕陽絶景シーサイドホテル' },
      { key: 'namahage_shizan_heritage_stay', query: '男鹿市 温泉 旅館 宿泊 秋田 なまはげ 料理', label: 'なまはげ館＆真山神社参拝拠点・秋田の旬魚美食旅館' }
    ]
  },
  {
    slug: 'nagano-kiso-fukushima-nezamenotoko-stay',
    badge: 'KISO FUKUSHIMA & ONTAKE GUIDE',
    title: '【長野・木曽福島＆寝覚の床・御嶽山】中山道関所宿場町・木曽そば＆五平餅宿 完全ガイド',
    metaDesc: '中山道木曽路の中心・木曽福島＆寝覚の床エリア完全特化！日本四大関所「木曽福島関所」、浦島太郎伝説の名勝「寝覚の床」、霊峰御嶽山、木曽川の清流と名物「木曽手打ちそば・五平餅・朴葉巻き宿」を徹底解説。',
    heroDesc: '島崎藤村の『夜明け前』の舞台、深い木曽谷の歴史薫る宿場町「木曽福島」。中山道を取り締まった「福島関所」と崖家造りの町並み。木曽川のエメラルドグリーンの激流が花崗岩を削り出した奇勝「寝覚の床」。冷涼な木曽谷の天然温泉と信州手打ちそばの旅。',
    queries: [
      { key: 'kiso_fukushima_post_town_stay', query: '木曽福島 旅館 ホテル 温泉 宿泊 長野 中山道 露天風呂', label: '木曽福島宿場町・崖家造り景観＆木曽路老舗温泉旅館' },
      { key: 'nezamenotoko_agetsu_nature_stay', query: '上松町 寝覚の床 温泉 旅館 宿泊 長野 木曽', label: '名勝寝覚の床至近・木曽川渓谷美パノラマ温泉宿' },
      { key: 'ontake_kiso_soba_inn_stay', query: '木曽 旅館 信州そば 五平餅 料理 宿泊 長野 露天風呂', label: '名物「木曽手打ちそば」＆信州牛・五平餅の山里会席宿' }
    ]
  },
  {
    slug: 'toyama-himi-amaharashi-tateyama-stay',
    badge: 'HIMI & AMAHARASHI GUIDE',
    title: '【富山・氷見＆雨晴海岸・立山連峰】海越しに望む3000m立山連峰・氷見寒ブリ宿 完全ガイド',
    metaDesc: '世界屈指の絶景・海越しにそびえる立山連峰と海の幸王国・富山氷見エリア完全特化！義経伝説の雨晴海岸（女岩）、氷見漁港直送「氷見寒ブリ・白えび」、ひみ番屋街、氷見温泉郷のオーシャンビュー美肌宿を徹底解説。',
    heroDesc: '富山湾の青い海の向こうに、標高3,000m級の北アルプス立山連峰が白銀に輝く奇跡のパノラマ「雨晴海岸」。冬の日本海の王者「氷見寒ブリ」の極上刺身とブリしゃぶ。潮風を感じる氷見温泉郷のナトリウム塩化物泉。富山湾のキトキトな美味に酔いしれる旅。',
    queries: [
      { key: 'himi_winter_yellowtail_inn_stay', query: '氷見温泉 旅館 ホテル 寒ブリ 料理 宿泊 富山 露天風呂', label: '氷見漁港直送・冬の王者「氷見寒ブリ」会席＆氷見温泉宿' },
      { key: 'amaharashi_tateyama_view_stay', query: '雨晴海岸 氷見 ホテル 旅館 宿泊 富山 立山連峰 海鮮', label: '海越しに立山連峰を望む雨晴海岸パノラマ展望宿' },
      { key: 'himi_banyagai_gourmet_stay', query: '氷見 ホテル 旅館 ひみ番屋街 宿泊 富山 温泉 白えび', label: 'ひみ番屋街至近・富山湾の宝石「白えび」＆氷見牛海鮮宿' }
    ]
  },
  {
    slug: 'kochi-shimanto-river-chinkabashi-ashizuri-stay',
    badge: 'SHIMANTO & ASHIZURI GUIDE',
    title: '【高知・四万十川＆沈下橋・足摺岬】日本最後の清流カヌー・天然うなぎ＆カツオ宿 完全ガイド',
    metaDesc: '最後の清流と四国最南端・高知四万十＆足摺エリア完全特化！欄干のない「佐田の沈下橋・岩間沈下橋」、四万十川カヌー・屋形船遊覧、足摺岬灯台・金剛福寺、名物「天然鮎・四万十うなぎ・初鰹タタキ宿」を徹底解説。',
    heroDesc: '大自然の原風景がそのまま息づく日本最後の清流「四万十川」。増水時に川底に沈むように設計された欄干のない「沈下橋」。清流を滑るように進むカヌーや帆掛け舟。四国最南端・足摺岬の断崖絶壁と太平洋の大海原。極上の天然うなぎとカツオの藁焼きを味わう旅。',
    queries: [
      { key: 'shimanto_river_chinkabashi_inn', query: '四万十川 旅館 ホテル 宿泊 沈下橋 高知 温泉 カヌー', label: '四万十川畔・佐田沈下橋至近＆清流を望むネイチャーロッジ宿' },
      { key: 'ashizurimisaki_ocean_onsen_stay', query: 'あしずり温泉 足摺岬 旅館 ホテル 宿泊 高知 露天風呂 太平洋', label: '四国最南端・あしずり温泉郷＆太平洋一望オーシャンビュー宿' },
      { key: 'shimanto_unagi_katsuo_stay', query: '四万十 旅館 天然うなぎ カツオ 料理 宿泊 高知 海鮮', label: '四万十名物「天然うなぎ」＆本場カツオの藁焼きタタキ料理宿' }
    ]
  },
  {
    slug: 'kagoshima-yakushima-shiratani-jomon-sugi-stay',
    badge: 'YAKUSHIMA & WORLD HERITAGE GUIDE',
    title: '【鹿児島・屋久島＆白谷雲水峡・縄文杉】世界自然遺産・苔むす森トレッキング＆首折れ鯖宿 完全ガイド',
    metaDesc: '洋上のアルプス・世界自然遺産屋久島エリア完全特化！太古の巨木「縄文杉トレッキング」、映画の舞台「白谷雲水峡（苔むす森）」、大川の滝、名物「首折れ鯖・トビウオ料理・屋久島温泉リゾート」を徹底解説。',
    heroDesc: '樹齢数千年の巨木が呼吸する世界自然遺産の島「屋久島」。生命の神秘をたたえる「縄文杉」への巡礼。どこまでも深い緑の絨毯が広がる「白谷雲水峡・苔むす森」。屋久島近海で獲れる新鮮な「首折れ鯖」のお造りとトビウオのから揚げ。悠久の時を体感する大人の大自然旅。',
    queries: [
      { key: 'yakushima_luxury_resort_stay', query: '屋久島 ホテル リゾート 宿泊 温泉 鹿児島 露天風呂 自然', label: '屋久島ラグジュアリーリゾート＆大自然パノラマ天然温泉宿' },
      { key: 'shiratani_unsuikyo_trekking_stay', query: '屋久島 宮之浦 旅館 ホテル 宿泊 白谷雲水峡 縄文杉 鹿児島', label: '白谷雲水峡＆宮之浦港至近・トレッキング出発拠点名宿' },
      { key: 'yakushima_mackerel_flyingfish_stay', query: '屋久島 安房 ホテル 旅館 宿泊 首折れ鯖 トビウオ 料理', label: '安房港周辺・名物「首折れ鯖」＆トビウオ郷土料理宿' }
    ]
  }
];

async function main() {
  console.log('=== Fetching direct hotel data from Rakuten Travel API for 5 Micro Hubs (Wave 23) ===');
  const cachePath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  let results = {};
  if (fs.existsSync(cachePath)) {
    results = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  }

  for (const theme of microWave23Configs) {
    console.log(`\n========================================`);
    console.log(`Micro Hub (Wave 23): ${theme.title} (${theme.slug})`);
    console.log(`========================================`);
    if (!results[theme.slug]) results[theme.slug] = {};

    for (const q of theme.queries) {
      console.log(`Querying Rakuten API: "${q.query}" (${q.label})...`);
      await sleep(1300);
      let hotels = [];
      try {
        hotels = await searchRakutenHotels(q.query, 4);
        if (!hotels || hotels.length === 0) {
          await sleep(1300);
          const fbQuery = q.query.split(' ').slice(0, 3).join(' ');
          hotels = await searchRakutenHotels(fbQuery, 4);
        }
      } catch (err) {
        console.warn(` Query failed: ${err.message}`);
      }
      console.log(` -> Retrieved ${hotels ? hotels.length : 0} hotels directly from Rakuten API.`);
      results[theme.slug][q.key] = {
        label: q.label,
        query: q.query,
        hotels: hotels || []
      };
    }
  }

  fs.writeFileSync(cachePath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nSuccessfully saved all Micro Tourist Hubs Wave 23 hotel data to: ${cachePath}`);
}

main().catch(console.error);
