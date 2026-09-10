const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-shirahama-onsen-ocean-adventure-stay',
    queries: [
      { key: 'shirahama_kawakyu', query: 'ホテル川久', label: '白浜町ふるさと納税・世界の宮殿建築と全室スイート！インフィニティスパと王様のビュッフェ' },
      { key: 'shirahama_musashi', query: '紀州・白浜温泉 むさし', label: '白浜町ふるさと納税・白良浜まで徒歩1分！二つの自家源泉と本格和風庭園露天風呂' },
      { key: 'shirahama_shiraraso', query: '白良荘グランドホテル', label: '白浜町ふるさと納税・白良浜が目の前！遮るものなしのオーシャンビュー展望露天風呂とクエ会席' }
    ]
  },
  {
    slug: 'furusato-tax-nozawa-onsen-sotoyu-heritage-stay',
    queries: [
      { key: 'nozawa_sakaya', query: '野沢温泉 旅館 さかや', label: '野沢温泉村ふるさと納税・創業百余年・宮大工造りの湯屋建築！自家源泉自然湧出の木造大浴場' },
      { key: 'nozawa_kawaichiya', query: '野沢温泉 河一屋旅館', label: '野沢温泉村ふるさと納税・名湯真湯を引く白濁露天風呂！信州プレミアム牛と郷土料理' },
      { key: 'nozawa_sumiyosiya', query: '野沢温泉 住吉屋', label: '野沢温泉村ふるさと納税・麻釜のすぐ隣に佇む明治２年創業宿！自家源泉かけ流しの美肌湯' }
    ]
  },
  {
    slug: 'furusato-tax-ito-onsen-ocean-kinmedai-stay',
    queries: [
      { key: 'ito_aoyama', query: '伊東温泉 青山やまと', label: '伊東市ふるさと納税・伊東の街と相模湾を見晴らす丘の宿！源泉掛け流し露天風呂と金目鯛会席' },
      { key: 'ito_sunhatoya', query: 'サンハトヤ', label: '伊東市ふるさと納税・海底温泉「千石風呂」でお魚見学！全室オーシャンビューとディナーショー' },
      { key: 'ito_laforet', query: 'ラフォーレ倶楽部 伊東温泉 湯の庭', label: '伊東市ふるさと納税・全室温泉付き客室の和モダンホテル！良質な伊東の名湯と四季の会席' }
    ]
  },
  {
    slug: 'furusato-tax-zao-onsen-acid-sulfur-stay',
    queries: [
      { key: 'zao_takamiya', query: '深山荘 高見屋', label: '山形市ふるさと納税・享保年間創業三百年余の名門！総木造りの湯屋と強酸性自家源泉の掛け流し' },
      { key: 'zao_kokusai', query: '蔵王国際ホテル', label: '山形市ふるさと納税・木の温もりあふれる八右衛門の湯！乳白色の掛け流し天然温泉と山形牛' },
      { key: 'zao_shiki', query: '蔵王四季のホテル', label: '山形市ふるさと納税・離れ湯「百八歩の湯」！白樺林に囲まれた乳白色の露天風呂と本格和食' }
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
  fs.writeFileSync('round103_hotels.json', JSON.stringify(results, null, 2));
  console.log('\nFinished fetching hotels for Round 103.');
}

main();
