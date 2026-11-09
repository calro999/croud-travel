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
  { rank: 1, name_key: '松島温泉 松島一の坊', pref: '宮城県', area: '松島温泉', kw: '松島温泉 松島一の坊', feature: '日本三景・松島を望む「理想の日常」！水上庭園・料理人がその場で仕立てるオーダーディナー・生ビール・ジェラート・生演奏サロンまで全て無料のオールインクルーシブ最高峰' },
  { rank: 2, name_key: 'アンダリゾート伊豆高原', pref: '静岡県', area: '伊豆高原', kw: 'アンダリゾート伊豆高原', feature: '飲み放題＆遊び放題の楽園！80種以上のフリードリンク・夜食バー・貸切露天風呂・カラオケ・ダーツ・卓球・焼きマシュマロまで追加料金一切なし' },
  { rank: 3, name_key: '季の湯 雪月花', pref: '神奈川県', area: '箱根・強羅', kw: '季の湯 雪月花', feature: '箱根屈指の人気共立リゾート！全室客室露天風呂付き・無料の夜鳴き蕎麦・湯上がりアイス・選べる色浴衣・3箇所の貸切露天風呂がすべてフリー' },
  { rank: 4, name_key: 'TAOYA秋保', pref: '宮城県', area: '秋保温泉', kw: 'TAOYA秋保', feature: '大江戸温泉物語が誇る最高峰温泉リゾート！滝を望むインフィニティ露天風呂・生ビール＆ワインのラウンジフリーフロー・豪華バイキング' },
  { rank: 5, name_key: 'TAOYA志摩', pref: '三重県', area: '伊勢志摩', kw: 'TAOYA志摩', feature: '鳥羽・志摩の海と一体化するインフィニティ露天風呂！生ビール飲み放題のオーシャンビューラウンジ・星空テラス・ピアノライブ' },
  { rank: 6, name_key: 'TAOYA日光霧降', pref: '栃木県', area: '日光・霧降高原', kw: 'TAOYA日光霧降', feature: '標高1,000mの絶景インフィニティ温泉！満天の星と霧降高原の雄大パノラマ・豪華グリルバイキング＆生ビール・地酒フリーフロー' },
  { rank: 7, name_key: 'ゆづくしSalon一の坊', pref: '宮城県', area: '作並温泉', kw: 'ゆづくしSalon一の坊', feature: '広瀬川の渓流露天風呂とサロン文化！挽きたて珈琲・宮城の地酒・手作りスイーツ・おつまみを川のせせらぎとともに楽しむ大人の静寂リトリート' },
  { rank: 8, name_key: '風の薫 MORI Premier', pref: '静岡県', area: '伊東・伊豆高原', kw: '風の薫 ＭＯＲＩ', feature: '全7室スイートの大人の隠れ家！客室温泉風呂・バーラウンジの厳選銘酒・極上フレンチ懐石ディナーのペアリングドリンクまで完全インクルーシブ' },
  { rank: 9, name_key: 'グランドメルキュール那須高原リゾート＆スパ', pref: '栃木県', area: '那須高原', kw: 'グランドメルキュール那須高原リゾート＆スパ', feature: '世界水準アコーの洗練オールインクルーシブ！スパークリングワイン・ビール・郷土イブニングカクテル・那須の森の天然温泉と豪華ビュッフェ' },
  { rank: 10, name_key: 'グランドメルキュール八ヶ岳リゾート＆スパ', pref: '山梨県', area: '八ヶ岳・清里', kw: 'グランドメルキュール八ヶ岳', feature: '八ヶ岳南麓の高原リゾート！満天の星空観測ラウンジ・ワイン王国山梨の銘醸ワインフリーフロー・全天候型大型キッズパーク完備' },
  { rank: 11, name_key: 'グランドメルキュール別府湾リゾート＆スパ', pref: '大分県', area: '別府湾・速見', kw: 'グランドメルキュール別府湾リゾート＆スパ', feature: '別府湾を一望するオーシャンビューリゾート！湯上がりの生ビールラウンジ・大分名物かぼすドリンク・伝統の別府温泉とモダンビュッフェ' },
  { rank: 12, name_key: '島原温泉 ホテル南風楼', pref: '長崎県', area: '島原温泉', kw: 'オールインクルーシブ 島原温泉ホテル南風楼', feature: '有明海を望む海のサウナ＆絶景インフィニティ露天風呂！アイス・生ビール・駄菓子・テラス足湯・キッズパーク・夜食のすべてが無料' }
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

  fs.writeFileSync('scripts/all_inclusive_hotels_data.json', JSON.stringify(results, null, 2), 'utf-8');
  console.log(`\nSuccessfully fetched ${results.length}/${list.length} hotels.`);
}

main();
