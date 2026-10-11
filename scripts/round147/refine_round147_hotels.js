const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('../../rakuten_api_helper.js');

async function main() {
  const filePath = path.join(__dirname, 'round147_raw_hotels.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  console.log('=== Refining Round 147 Hotels for Precision ===');

  // 1. Mie Ago Bay: 奥伊勢を除外し、志摩・賢島の宿で揃える
  const mieQueries = ['汀渚 ばさら邸', '志摩観光ホテル ザ ベイスイート', '志摩観光ホテル ザ クラシック', '賢島宝生苑', '志摩 地中海村'];
  const mieHotels = [];
  for (const q of mieQueries) {
    const res = await searchRakutenHotels(q, 2);
    if (res && res.length > 0) {
      if (!mieHotels.some(h => h.hotelNo === res[0].hotelNo)) {
        mieHotels.push(res[0]);
      }
    }
  }
  if (mieHotels.length >= 5) {
    data['mie_ago_bay_luxury'].hotels = mieHotels.slice(0, 5);
  }

  // 2. Yamanashi Kawaguchiko: 富士ミルクランドを除外し、河口湖高級宿で揃える
  const yamanashiQueries = ['ふふ 河口湖', 'うぶや', '富士河口湖温泉 秀峰閣 湖月', '富士河口湖温泉 湖南荘', '富士レイクホテル'];
  const yamanashiHotels = [];
  for (const q of yamanashiQueries) {
    const res = await searchRakutenHotels(q, 2);
    if (res && res.length > 0) {
      if (!yamanashiHotels.some(h => h.hotelNo === res[0].hotelNo)) {
        yamanashiHotels.push(res[0]);
      }
    }
  }
  if (yamanashiHotels.length >= 5) {
    data['yamanashi_kawaguchiko_luxury'].hotels = yamanashiHotels.slice(0, 5);
  }

  // 3. Kyoto Tango Taizagani: 5件に揃える
  const tangoQueries = ['間人温泉 炭平', '炭平別邸 季ト時', '蒲井温泉 いっぺん庵', '夕日ヶ浦温泉 海花亭 花御前', '夕日ヶ浦温泉 佳松苑 はなれ風香'];
  const tangoHotels = [];
  for (const q of tangoQueries) {
    const res = await searchRakutenHotels(q, 2);
    if (res && res.length > 0) {
      if (!tangoHotels.some(h => h.hotelNo === res[0].hotelNo)) {
        tangoHotels.push(res[0]);
      }
    }
  }
  if (tangoHotels.length >= 5) {
    data['kyoto_tango_taizagani_luxury'].hotels = tangoHotels.slice(0, 5);
  }

  // 4. Kumamoto Kurokawa Senomoto: 5件厳選
  const kurokawaQueries = ['黒川温泉 山みず木別邸 深山山荘', '黒川温泉 山あいの宿 山みず木', '黒川温泉 お宿のし湯', '黒川温泉 山の宿 新明館', '瀬の本高原ホテル'];
  const kurokawaHotels = [];
  for (const q of kurokawaQueries) {
    const res = await searchRakutenHotels(q, 2);
    if (res && res.length > 0) {
      if (!kurokawaHotels.some(h => h.hotelNo === res[0].hotelNo)) {
        kurokawaHotels.push(res[0]);
      }
    }
  }
  if (kurokawaHotels.length >= 5) {
    data['kumamoto_kurokawa_senomoto_luxury'].hotels = kurokawaHotels.slice(0, 5);
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  console.log('🎉 Refined hotels saved successfully!');
}

main().catch(console.error);
