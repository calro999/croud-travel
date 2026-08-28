const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fixes = [
  { theme: 'winter-snowshoe-frozen-waterfall', key: 'oirase_ice_fall', query: '奥入瀬 温泉 ホテル', label: '青森・奥入瀬渓流（青く凍りつく巨大氷瀑ツアー）' },
  { theme: 'winter-snowshoe-frozen-waterfall', key: 'bandai_yellow_fall', query: '裏磐梯 温泉 リゾート ホテル', label: '福島・裏磐梯（磐梯山イエローフォール＆スノーシュー）' },
  { theme: 'autumn-winter-traditional-craft-pottery', key: 'echizen_craft', query: 'あわら温泉 旅館 露天風呂', label: '福井・あわら温泉（越前和紙・越前打刃物・越前焼の里）' },
  { theme: 'autumn-winter-strawberry-picking-resort', key: 'fukuoka_strawberry', query: '原鶴温泉 旅館 露天風呂 福岡', label: '福岡・久留米原鶴温泉（本場あまおう狩りと美肌温泉）' },
  { theme: 'autumn-winter-sacred-power-spot', key: 'kumano_kodo', query: '勝浦温泉 ホテル 旅館 和歌山', label: '和歌山・熊野三山＆南紀勝浦温泉（那智の滝と忘帰洞温泉）' }
];

async function main() {
  const filePath = path.join(__dirname, 'src', 'data', 'all_seasonal_rakuten_hotels.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  for (const f of fixes) {
    console.log(`Fixing query for ${f.theme}.${f.key}: "${f.query}"...`);
    await sleep(1300);
    const res = await searchRakutenHotels(f.query, 4);
    console.log(` -> Found ${res.length} hotels.`);
    if (res.length > 0) {
      data[f.theme][f.key] = {
        label: f.label,
        query: f.query,
        hotels: res
      };
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log('Successfully updated zero-hit categories with fresh direct Rakuten API data!');
}

main().catch(console.error);
