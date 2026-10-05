const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));

  // 1. toji_nanbu: 花巻温泉 岩手
  await sleep(2000);
  console.log('Fetching toji_nanbu with "花巻温泉 旅館 岩手"...');
  let nanbuHotels = await searchRakutenHotels('花巻温泉 旅館 岩手', 3);
  if (nanbuHotels && nanbuHotels.length > 0) {
    allSeasonal['furusato-tax-three-master-brewers-toji-sake-inn-stay']['toji_nanbu'] = {
      label: '岩手県花巻市・紫波町ふるさと納税・日本最大の蔵人集団「南部杜氏」の秘伝地酒と宮沢賢治ゆかりの花巻温泉郷',
      hotels: nanbuHotels
    };
    console.log('toji_nanbu saved successfully!');
  }

  // 2. pottery_seto: 瀬戸・名古屋・尾張の宿（小豆島ではなく愛知・瀬戸周辺）
  await sleep(2000);
  console.log('Fetching pottery_seto with "瀬戸市 ホテル 愛知"...');
  let setoHotels = await searchRakutenHotels('瀬戸市 ホテル 愛知', 3);
  if (!setoHotels || setoHotels.length === 0) {
    await sleep(2000);
    setoHotels = await searchRakutenHotels('尾張旭 ホテル 愛知', 3);
  }
  if (setoHotels && setoHotels.length > 0) {
    allSeasonal['furusato-tax-three-great-pottery-towns-gourmet-stay']['pottery_seto'] = {
      label: '愛知県瀬戸市ふるさと納税・日本の陶磁器の代名詞「瀬戸焼（せともの）」ギャラリーめぐりと尾張郷土会席名宿',
      hotels: setoHotels
    };
    console.log('pottery_seto updated with Aichi Seto hotels!');
  }

  // 3. hachiman_iwashimizu: 八幡市・京都南部の宿（伊豆ではなく京都）
  await sleep(2000);
  console.log('Fetching hachiman_iwashimizu with "京都 伏見 旅館"...');
  let iwashimizuHotels = await searchRakutenHotels('京都 伏見 旅館', 3);
  if (iwashimizuHotels && iwashimizuHotels.length > 0) {
    allSeasonal['furusato-tax-three-great-hachiman-shrines-sacred-stay']['hachiman_iwashimizu'] = {
      label: '京都府八幡市・伏見区ふるさと納税・国宝「石清水八幡宮」男山展望台と伏見酒蔵・京料理旅館',
      hotels: iwashimizuHotels
    };
    console.log('hachiman_iwashimizu updated with Kyoto Fushimi/Yawata hotels!');
  }

  // 4. hachiman_usa: 宇佐・別府温泉の宿を充実
  await sleep(2000);
  console.log('Fetching hachiman_usa with "別府温泉 旅館 大分"...');
  let usaHotels = await searchRakutenHotels('別府温泉 旅館 大分', 3);
  if (usaHotels && usaHotels.length > 0) {
    allSeasonal['furusato-tax-three-great-hachiman-shrines-sacred-stay']['hachiman_usa'] = {
      label: '大分県宇佐市・別府市ふるさと納税・全国八幡宮の総本宮「宇佐神宮」参拝と別府八湯源泉かけ流し老舗宿',
      hotels: usaHotels
    };
    console.log('hachiman_usa updated with Beppu onsen hotels!');
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('Round 23 data fixed successfully!');
}

main();
