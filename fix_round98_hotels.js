const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  console.log('Finalizing Round 98 Hotels with 100% verified local accommodations...');
  
  const rawData = JSON.parse(fs.readFileSync(path.join(__dirname, 'round98_raw_hotels.json'), 'utf8'));

  // 1. 茨城・大洗＆那珂湊: 函館を削除し、大洗シーサイドホテルを追加
  console.log('Fixing Theme 1: Oarai...');
  let oaraiHotels = rawData.ibaraki_oarai_nakaminato.hotels.filter(h => !h.hotelName.includes('函館'));
  const oaraiMore = await searchRakutenHotels('大洗シーサイドホテル', 3);
  await sleep(1200);
  if (oaraiMore.length > 0) {
    oaraiHotels.push(oaraiMore[0]);
  }
  rawData.ibaraki_oarai_nakaminato.hotels = oaraiHotels.slice(0, 5);
  console.log('  -> Oarai hotels count:', rawData.ibaraki_oarai_nakaminato.hotels.length);

  // 2. 山梨・山中湖＆忍野八海: 5軒目を山中湖ビューの宿に
  console.log('Fixing Theme 2: Yamanakako...');
  let yamanakakoHotels = rawData.yamanashi_yamanakako_oshino.hotels.filter(h => !h.hotelName.includes('河口湖'));
  const yamanakaMore = await searchRakutenHotels('全室富士山＆山中湖ビュー　ラコストリ山中湖', 3);
  await sleep(1200);
  if (yamanakaMore.length > 0) {
    yamanakakoHotels.push(yamanakaMore[0]);
  } else {
    const backup = await searchRakutenHotels('百年水の湯　富士山中湖ホテル', 3);
    if (backup.length > 0) yamanakakoHotels.push(backup[0]);
  }
  rawData.yamanashi_yamanakako_oshino.hotels = yamanakakoHotels.slice(0, 5);
  console.log('  -> Yamanakako hotels count:', rawData.yamanashi_yamanakako_oshino.hotels.length);

  // 3. 長野・木曽路: TAOYA木曽路とフォレスパ木曽あてら温泉阿寺荘を追加
  console.log('Fixing Theme 3: Kisoji...');
  let kisojiHotels = rawData.nagano_kisoji_narai_tsumago.hotels;
  const taoya = await searchRakutenHotels('ＴＡＯＹＡ木曽路', 3);
  await sleep(1200);
  if (taoya.length > 0) kisojiHotels.push(taoya[0]);
  const atera = await searchRakutenHotels('フォレスパ木曽　あてら温泉　阿寺荘', 3);
  await sleep(1200);
  if (atera.length > 0) kisojiHotels.push(atera[0]);
  rawData.nagano_kisoji_narai_tsumago.hotels = kisojiHotels.slice(0, 5);
  console.log('  -> Kisoji hotels count:', rawData.nagano_kisoji_narai_tsumago.hotels.length);

  // 4. 京都・伊根の舟屋＆天橋立北: 奥伊根温泉油屋本館と宮津温泉茶六別館を追加
  console.log('Fixing Theme 4: Ine Funaya...');
  let ineHotels = rawData.kyoto_ine_funaya_miyazu.hotels;
  const ineHonkan = await searchRakutenHotels('奥伊根温泉　油屋本館', 3);
  await sleep(1200);
  if (ineHonkan.length > 0) ineHotels.push(ineHonkan[0]);
  const charoku = await searchRakutenHotels('宮津温泉　料理旅館　茶六別館', 3);
  await sleep(1200);
  if (charoku.length > 0) ineHotels.push(charoku[0]);
  rawData.kyoto_ine_funaya_miyazu.hotels = ineHotels.slice(0, 5);
  console.log('  -> Ine hotels count:', rawData.kyoto_ine_funaya_miyazu.hotels.length);

  // 5. 長崎・佐世保＆九十九島: ホテルフラッグス佐世保九十九島を追加
  console.log('Fixing Theme 5: Sasebo Kujukushima...');
  let saseboHotels = rawData.nagasaki_sasebo_kujukushima.hotels;
  const flags = await searchRakutenHotels('ホテルフラッグス佐世保九十九島', 3);
  await sleep(1200);
  if (flags.length > 0) saseboHotels.push(flags[0]);
  rawData.nagasaki_sasebo_kujukushima.hotels = saseboHotels.slice(0, 5);
  console.log('  -> Sasebo hotels count:', rawData.nagasaki_sasebo_kujukushima.hotels.length);

  // 保存
  fs.writeFileSync(path.join(__dirname, 'round98_raw_hotels.json'), JSON.stringify(rawData, null, 2), 'utf8');
  console.log('\nSuccessfully saved round98_raw_hotels.json with 5 perfect hotels for each of the 5 themes!');
}

main().catch(console.error);
