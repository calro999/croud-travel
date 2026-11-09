const https = require('https');
const fs = require('fs');

const appId = '1a3cdfd9-2aec-4b42-8290-1c53603b0012';
const accessKey = 'pk_XkZ5h9MDKSsuVr6T5CnLnlVNvFg3hiR5vMDGrQ75cU5';
const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function search(kw) {
  await sleep(600);
  return new Promise((resolve) => {
    const url = 'https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20260731?format=json&keyword=' + encodeURIComponent(kw) + '&applicationId=' + appId + '&accessKey=' + accessKey + '&affiliateId=' + affId + '&hits=1';
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const j = JSON.parse(data);
          if (j.hotels && j.hotels.length > 0) {
            const b = j.hotels[0].hotel[0].hotelBasicInfo;
            resolve({
              no: b.hotelNo,
              name: b.hotelName,
              rating: b.reviewAverage,
              reviews: b.reviewCount,
              price: b.hotelMinCharge,
              url: b.hotelInformationUrl,
              img: b.hotelImageUrl,
              roomImg: b.roomImageUrl || '',
              address: (b.address1 || '') + (b.address2 || ''),
              special: b.hotelSpecial || ''
            });
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

const list = [
  { area: '兵庫・城崎温泉', kw: '西村屋ホテル招月庭' },
  { area: '兵庫・城崎温泉', kw: '城崎温泉 ときわ別館' },
  { area: '兵庫・城崎温泉', kw: '城崎温泉 あさぎり荘' },
  { area: '福井・あわら温泉', kw: 'あわら温泉 清風荘' },
  { area: '石川・加賀片山津温泉', kw: '片山津温泉 佳水郷' },
  { area: '京都・夕日ヶ浦温泉', kw: '夕日ヶ浦温泉 新海荘' },
  { area: '京都・夕日ヶ浦温泉', kw: '夕日ヶ浦温泉 旅館 夕日ヶ浦' },
  { area: '鳥取・皆生温泉', kw: '皆生温泉 皆生菊乃家' },
  { area: '鳥取・三朝温泉', kw: '三朝温泉 かがり火の宿 有楽' },
  { area: '鳥取・三朝温泉', kw: '三朝温泉 依山楼 岩崎' },
  { area: '兵庫・香住温泉', kw: 'かに楽座 甲羅戯' },
  { area: '福井・三国温泉', kw: '三国温泉 はれや旅館' }
];

(async () => {
  const results = [];
  for (const item of list) {
    const res = await search(item.kw);
    if (res) {
      results.push({ ...res, targetArea: item.area, searchKw: item.kw });
      console.log(`[OK] ${item.area}: ${res.name} (★${res.rating})`);
    } else {
      console.log(`[NG] ${item.area}: ${item.kw}`);
    }
  }
  fs.writeFileSync('scripts/killer_hotels_data.json', JSON.stringify(results, null, 2), 'utf8');
  console.log('Saved to scripts/killer_hotels_data.json. Total count:', results.length);
})();
