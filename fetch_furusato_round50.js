const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-shoyu-capitals-brewery-stay',
    queries: [
      { query: '銚子 温泉 旅館 絶景の宿　犬吠埼ホテル', fallback: '絶景の宿　犬吠埼ホテル', key: 'shoyu_choshi', label: '千葉県銚子市ふるさと納税・ヒゲタ・ヤマサの歴史薫る東の醤油大国「銚子の醤油蔵」絶景の宿犬吠埼ホテル' },
      { query: '小豆島 温泉 旅館 醤の郷 ベイリゾートホテル小豆島', fallback: 'ベイリゾートホテル小豆島', key: 'shoyu_shodoshima', label: '香川県小豆島町ふるさと納税・木桶仕込みの伝統息づく天然醸造の聖地「小豆島・醤の郷」ベイリゾートホテル小豆島' },
      { query: '兵庫 たつの 龍野 旅館 ホテル', fallback: '赤穂温泉　絶景露天風呂の宿　銀波荘', key: 'shoyu_tatsuno', label: '兵庫県たつの市・赤穂市ふるさと納税・揖保川の清流が生んだ淡口醤油のふるさと「播州龍野の白壁蔵」絶景露天風呂の宿銀波荘' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-fruit-kingdoms-auberge-stay',
    queries: [
      { query: '山梨 勝沼 笛吹 温泉 フルーツ ホテル', fallback: '石和温泉　華やぎの章　慶山', key: 'fruit_yamanashi', label: '山梨県山梨市・笛吹市ふるさと納税・桃とぶどうの生産量日本一を誇る甲府盆地「山梨フルーツ王国」華やぎの章慶山' },
      { query: '山形 天童 寒河江 温泉 さくらんぼ 旅館', fallback: '天童温泉　ほほえみの宿　滝の湯', key: 'fruit_yamagata', label: '山形県天童市・寒河江市ふるさと納税・赤いルビー佐藤錦とラ・フランスの極み「山形フルーツ街道」天童温泉滝の湯' },
      { query: '長野 小布施 須坂 温泉 りんご ホテル', fallback: '信州長野　小布施の宿　ヴァンヴェール', key: 'fruit_nagano', label: '長野県須坂市・小布施町ふるさと納税・シャインマスカットとりんご三兄弟の郷「信州フルーツ王国」小布施温泉ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-miso-capitals-gastronomy-stay',
    queries: [
      { query: '長野 諏訪 上諏訪温泉 味噌 ホテル', fallback: '上諏訪温泉　しんゆ（親湯）', key: 'miso_shinshu', label: '長野県岡谷市・諏訪市ふるさと納税・全国シェア首位を誇る澄んだ名水と米麹「信州味噌の郷」諏訪湖畔名湯ステイ' },
      { query: '愛知 岡崎 八丁味噌 ホテル', fallback: '天然温泉　葵の湯　スーパーホテル岡崎', key: 'miso_okazaki', label: '愛知県岡崎市ふるさと納税・徳川家康ゆかりの大豆と塩のみで熟成させる赤出汁「八丁味噌の蔵元」岡崎城下町ステイ' },
      { query: '宮城 仙台 温泉 仙台味噌 作並 旅館', fallback: '仙台・作並温泉　ゆづくしＳａｌｏｎ一の坊', key: 'miso_sendai', label: '宮城県仙台市ふるさと納税・伊達政宗が御塩噌蔵を築いた赤色辛口本醸造「仙台味噌の里」作並温泉ゆづくしSalon一の坊' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-citrus-kingdoms-resort-stay',
    queries: [
      { query: '愛媛 道後温泉 松山 みかん ホテル', fallback: '道後温泉　茶玻瑠', key: 'citrus_ehime', label: '愛媛県松山市・八幡浜市ふるさと納税・太陽の光と潮風が育む温州みかんと高級柑橘「愛媛みかん海道」道後温泉茶玻瑠' },
      { query: '和歌山 白浜 有田 みかん 温泉 ホテル', fallback: '南紀白浜マリオットホテル', key: 'citrus_wakayama', label: '和歌山県有田市・白浜町ふるさと納税・400年の歴史誇る日本一の有田みかん「和歌山柑橘ロード」南紀白浜マリオットホテル' },
      { query: '静岡 熱海 湯河原 柑橘 温泉 ホテル', fallback: '熱海温泉　ホテル大野屋', key: 'citrus_shizuoka', label: '静岡県熱海市・伊東市ふるさと納税・三ヶ日みかんとニューサマーオレンジ香る「静岡柑橘リゾート」熱海温泉ホテル大野屋' }
    ]
  }
];

async function main() {
  const dbPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let db = {};
  if (fs.existsSync(dbPath)) {
    db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  }

  const collected = {};

  for (const group of configs) {
    console.log(`\n========================================`);
    console.log(`Processing Group: ${group.slug}`);
    console.log(`========================================`);

    for (const q of group.queries) {
      console.log(`Searching for: "${q.query}" (key: ${q.key})...`);
      await sleep(3500);
      let list = [];
      try {
        list = await searchRakutenHotels(q.query, 3);
      } catch (err) {
        console.error(`Error searching "${q.query}":`, err.message);
      }

      if (!list || list.length === 0) {
        console.log(`Falling back to: "${q.fallback}"...`);
        await sleep(3500);
        try {
          list = await searchRakutenHotels(q.fallback, 3);
        } catch (err) {
          console.error(`Fallback error:`, err.message);
        }
      }

      if (list && list.length > 0) {
        const primary = list[0];
        console.log(` -> Found: [${primary.hotelName}] Price: ¥${primary.minPrice || primary.hotelMinCharge} Rating: ${primary.reviewAverage}`);
        collected[q.key] = {
          hotelNo: primary.hotelNo,
          hotelName: primary.hotelName,
          hotelInformationUrl: primary.hotelInformationUrl,
          planListUrl: primary.planListUrl,
          dpPlanListUrl: primary.dpPlanListUrl,
          reviewUrl: primary.reviewUrl,
          hotelKanaName: primary.hotelKanaName,
          hotelSpecial: primary.hotelSpecial,
          hotelMinCharge: primary.hotelMinCharge || primary.minPrice,
          latitude: primary.latitude,
          longitude: primary.longitude,
          postalCode: primary.postalCode,
          address1: primary.address1,
          address2: primary.address2,
          telephoneNo: primary.telephoneNo,
          hotelImageUrl: primary.hotelImageUrl,
          roomImageUrl: primary.roomImageUrl,
          reviewCount: primary.reviewCount,
          reviewAverage: primary.reviewAverage,
          userReview: primary.userReview,
          affiliateUrl: primary.affiliateUrl,
          access: primary.access || '最寄り駅・主要道路よりアクセス良好',
          label: q.label
        };
        db[q.key] = collected[q.key];
      } else {
        console.warn(`WARNING: No hotel found for ${q.key}`);
      }
    }
  }

  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  fs.writeFileSync(path.join(__dirname, 'round50_hotels.json'), JSON.stringify(collected, null, 2), 'utf8');
  console.log(`\nSuccessfully saved Round 50 hotels to ${dbPath} and round50_hotels.json!`);
}

main();
