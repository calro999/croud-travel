const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-gora-onsen-private-roten-luxury-stay',
    queries: [
      { key: 'gora_karaku', query: '箱根 佳ら久', label: '箱根町ふるさと納税・全室客室温泉露天風呂完備！森と海の絶景ラウンジ＆五感を満たす大人の極上リゾート' },
      { key: 'gora_byakudan', query: '箱根強羅 白檀', label: '箱根町ふるさと納税・三千七百坪の落葉樹林に佇む美宿！全室源泉掛け流し露天風呂と香りのもてなし' },
      { key: 'gora_setsugetsuka', query: '季の湯 雪月花', label: '箱根町ふるさと納税・全客室に檜の露天風呂完備！強羅駅徒歩1分の好立地と二つの自家源泉' }
    ]
  },
  {
    slug: 'furusato-tax-noboribetsu-onsen-buffet-gourmet-stay',
    queries: [
      { key: 'noboribetsu_mahoroba', query: '登別温泉 ホテル まほろば', label: '登別市ふるさと納税・日本最大級の露天風呂と全三十一の湯巡り！三大蟹食べ放題の豪華ビュッフェ' },
      { key: 'noboribetsu_daiichi', query: '登別温泉 第一滝本館', label: '登別市ふるさと納税・千五百坪の大浴場に五つの源泉！地獄谷を一望する名湯と北の味覚ビュッフェ' },
      { key: 'noboribetsu_grand', query: '登別温泉 登別グランドホテル', label: '登別市ふるさと納税・登別の迎賓館！滝見の庭園露天風呂と鬼サウナ、本格和洋中ビュッフェ' }
    ]
  },
  {
    slug: 'furusato-tax-kawaguchiko-fuji-view-onsen-stay',
    queries: [
      { key: 'kawaguchiko_kogetsu', query: '秀峰閣 湖月', label: '富士河口湖町ふるさと納税・全室＆露天風呂から富士山と河口湖のパノラマ絶景！逆さ富士を望む贅沢ステイ' },
      { key: 'kawaguchiko_maruei', query: '富士河口湖温泉 若草の宿 丸栄', label: '富士河口湖町ふるさと納税・最上階の富士山展望風呂「富士の湯」！匠の技が光る本格季節会席料理' },
      { key: 'kawaguchiko_lakehotel', query: '河口湖温泉 富士レークホテル', label: '富士河口湖町ふるさと納税・昭和七年創業の老舗宿！河口湖畔と富士の眺望、バリアフリー対応の安心美宿' }
    ]
  },
  {
    slug: 'furusato-tax-shirahone-onsen-milky-secret-stay',
    queries: [
      { key: 'shirahone_saito', query: '白骨温泉 湯元齋藤旅館', label: '松本市ふるさと納税・享保年間創業・文人墨客に愛された老舗宿！自家源泉かけ流しの白濁湯と信州牛' },
      { key: 'shirahone_sasaya', query: '白骨温泉 小梨の湯 笹屋', label: '松本市ふるさと納税・白樺林に囲まれた静寂の一軒宿！完全貸切の野天風呂と囲炉裏炭火料理' },
      { key: 'shirahone_marunaga', query: '白骨温泉 かつらの湯 丸永旅館', label: '松本市ふるさと納税・桂の木の下に湧く混浴露天と乳白色の美湯！素朴な信州の温もり宿' }
    ]
  }
];

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let allSeasonal = {};
  if (fs.existsSync(allSeasonalPath)) {
    try {
      allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));
    } catch (e) {
      console.error('Failed to parse all_seasonal_rakuten_hotels.json', e);
    }
  }

  const results = {};

  for (const config of furusatoConfigs) {
    console.log(`\n=== Processing ${config.slug} ===`);
    results[config.slug] = [];

    for (const q of config.queries) {
      console.log(`Searching for: ${q.query}...`);
      const hotels = await searchRakutenHotels(q.query, 1);
      await sleep(1500);

      if (hotels && hotels.length > 0) {
        const hotel = hotels[0];
        console.log(`✓ Found: ${hotel.hotelName} (ID: ${hotel.hotelNo})`);
        results[config.slug].push({
          ...q,
          hotel
        });
        allSeasonal[hotel.hotelNo] = hotel;
      } else {
        console.log(`✗ Not found: ${q.query}`);
      }
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2));
  fs.writeFileSync('round97_hotels.json', JSON.stringify(results, null, 2));
  console.log('\nFinished fetching hotels for Round 97.');
}

main();
