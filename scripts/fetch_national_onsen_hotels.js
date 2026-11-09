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
            console.log('No hits for: ' + kw);
            resolve(null);
          }
        } catch (e) {
          console.log('Parse error for ' + kw + ': ' + e.message);
          resolve(null);
        }
      });
    }).on('error', (err) => {
      console.log('Request error for ' + kw + ': ' + err.message);
      resolve(null);
    });
  });
}

const list = [
  { rank: 1, onsen: '草津温泉', pref: '群馬県', kw: '草津温泉 ホテル一井', feature: '湯畑の真ん前！一番湯口から引く白旗源泉と万代鉱源泉の2つの名湯を源泉掛け流しで堪能する草津のシンボル宿' },
  { rank: 2, onsen: '箱根温泉郷', pref: '神奈川県', kw: '箱根・強羅 佳ら久', feature: '全室客室露天風呂完備！箱根連山をパノラマで見渡す二大展望露天風呂「蒼海」「明星」と極上のモダン会席' },
  { rank: 3, onsen: '有馬温泉', pref: '兵庫県', kw: '向陽閣', feature: '創業700年を誇る日本三古湯の雄！名物「金泉」を趣異なる三つの大浴場巡りで心ゆくまで味わい尽くす老舗宿' },
  { rank: 4, onsen: '由布院温泉', pref: '大分県', kw: 'ゆふいん花由', feature: '由布岳の雄姿と早朝の幻想的な朝霧を一望！全室離れ＆展望露天風呂付き客室で過ごす至福のプライベート湯浴み' },
  { rank: 5, onsen: '城崎温泉', pref: '兵庫県', kw: '西村屋ホテル招月庭', feature: '五万坪の大森林庭園に抱かれる極上のリゾート旅館！名門西村屋の伝統と本場松葉ガニ、森のプライベートスパ' },
  { rank: 6, onsen: '別府温泉郷', pref: '大分県', kw: '別府温泉 杉乃井ホテル', feature: '別府湾を見渡す圧倒的パノラマ「棚湯」！宙館・虹館など多彩な棟と全国屈指のメガビュッフェを誇る温泉エンタメの最高峰' },
  { rank: 7, onsen: '黒川温泉', pref: '熊本県', kw: '黒川温泉 黒川荘', feature: 'びょうぶ岩を仰ぐ絶景露天風呂！エメラルドグリーンに輝く神秘の湯と茅葺き屋根が織りなす日本の原風景' },
  { rank: 8, onsen: '銀山温泉', pref: '山形県', kw: '銀山温泉 銀山荘', feature: '大正ロマンのガス灯が灯る温泉街至近！仙峡の自然を望む寝湯露天風呂と山形牛会席を味わう雪国情緒の名宿' },
  { rank: 9, onsen: '道後温泉', pref: '愛媛県', kw: '道後温泉 八千代', feature: '全室に源泉掛け流しの半露天風呂を完備！日本最古の湯を誰にも邪魔されずプライベートに味わう贅沢の極み' },
  { rank: 10, onsen: '登別温泉', pref: '北海道', kw: '第一滝本館', feature: '地獄谷を目の前に望む圧巻1500坪の大浴場！5つの異なる天然温泉泉質と35の湯船を24時間巡り放題' },
  { rank: 11, onsen: '下呂温泉', pref: '岐阜県', kw: '下呂温泉 水明館', feature: '天下の三名泉・飛騨川の清流を望む老舗名館！とろとろの美肌の湯と極上の飛騨牛料理を三大大浴場で巡る' },
  { rank: 12, onsen: '加賀温泉郷', pref: '石川県', kw: '山代温泉 ゆのくに天祥', feature: '「一泊三湯十八ゆめぐり」！自家源泉と引き湯の2つの美肌泉質を18通りのお風呂で遊び尽くす北陸の名宿' }
];

async function main() {
  const results = [];
  for (const item of list) {
    console.log(`Fetching ${item.kw}...`);
    const h = await search(item.kw);
    if (h) {
      results.push({ ...item, ...h });
      console.log(`  -> OK: ${h.name} (★${h.rating}, ¥${h.price})`);
    } else {
      console.log(`  -> FAILED: ${item.kw}`);
    }
  }

  fs.writeFileSync('scripts/national_onsen_hotels_data.json', JSON.stringify(results, null, 2), 'utf-8');
  console.log(`\nSuccessfully fetched ${results.length}/${list.length} hotels.`);
}

main();
