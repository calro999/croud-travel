const { searchRakutenHotels, getHotelByNo } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'tokushima_minamiawa_yakuouji_iseebi',
    slug: 'winter-tokushima-minamiawa-yakuouji-hatsumode-iseebi-stay',
    label: '徳島・美波＆牟岐・海陽町（四国霊場第23番札所・厄除け大師「薬王寺」初詣＆うみがめマリーンジャム！冬が最旬の南阿波名物「天然伊勢海老・アオリイカ・寒ブリ・阿波尾鶏」と太平洋水平線展望名宿）',
    queries: ['リビエラししくい', '遊遊NASA', '白い燈台 美波町', 'スーパーホテル阿南 富岡', 'ロイヤルガーデンホテル 阿南']
  },
  {
    theme: 'miyazaki_miyakonojo_kobayashi_kirishima',
    slug: 'winter-miyazaki-miyakonojo-kobayashi-kirishima-wagyu-stay',
    label: '宮崎・都城＆小林・えびの（白銀に染まる霧島連山ジオパーク＆神話の古刹「狭野神社・霧島東神社」初詣！日本一の肉のまち「都城産宮崎牛」すき焼き・本格芋焼酎＆えびの高原・極上美肌温泉名宿）',
    queries: ['極楽温泉 匠の宿', '常盤荘 都城', 'ベッセルホテル都城', '都城グリーンホテル', 'ホテルアルファーワン都城']
  },
  {
    theme: 'saitama_nagatoro_hodosan_roubai',
    slug: 'winter-saitama-nagatoro-hodosan-roubai-kotatsubune-stay',
    label: '埼玉・長瀞＆秩父・宝登山（冬の風物詩「長瀞こたつ舟下り」＆12〜1月早咲き満開「宝登山ロウバイ園」黄色い香りの花絶景！宝登山神社初詣＆名物「秩父豚みそ丼・天然氷かき氷・武州和牛」と秩父名湯名宿）',
    queries: ['長瀞温泉 花のおもてなし 長生館', '花湯別邸 長瀞', '渋沢栄一翁命名の宿 養浩亭', 'ナチュラルファームシティ農園ホテル', '梁山泊 小鹿野']
  },
  {
    theme: 'osaka_minoo_katsuo_ji_botannabe',
    slug: 'winter-osaka-minoo-katsuo-ji-daruma-botannabe-stay',
    label: '大阪・箕面＆能勢・池田（日本の滝百選・箕面大滝の冬情趣＆勝運の寺「勝尾寺」初詣で勝ちダルマ祈願！冬の味覚「能勢の天然猪鍋（ぼたん鍋）」・箕面名物もみじの天ぷら・池田牛＆箕面温泉の美肌名宿）',
    queries: ['箕面観光ホテル', '能勢温泉', '伏尾温泉 不死王閣', 'グリーンリッチホテル大阪空港前', '南千里クリスタルホテル']
  },
  {
    theme: 'shiga_omihachiman_hachimanbori_omigyu',
    slug: 'winter-shiga-omihachiman-hachimanbori-himure-omigyu-stay',
    label: '滋賀・近江八幡＆安土・東近江（雪化粧の水郷めぐり・八幡堀冬情趣と日牟禮八幡宮初詣！日本三大和牛「近江牛」極上すき焼き＆冬の滋賀名物「赤こんにゃく・丁字麩」・安土城跡と琵琶湖東岸名宿）',
    queries: ['休暇村 近江八幡', 'ホテルニューオウミ', '近江八幡 まちや倶楽部', 'グリーンホテルYES近江八幡', 'ＡＢホテル近江八幡']
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Verified 5 Hotels for 5 Themes via Rakuten API (Round 120)');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];

    for (const q of t.queries) {
      console.log(`Searching for "${q}"...`);
      try {
        const searchRes = await searchRakutenHotels(q, 3);
        await sleep(500);

        if (searchRes && searchRes.length > 0) {
          const hotel = searchRes[0];
          console.log(`  -> Fetched: [${hotel.hotelNo}] ${hotel.hotelName} (${hotel.address1} ${hotel.address2}) - Score: ${hotel.reviewAverage}`);
          themeHotels.push(hotel);
        } else {
          console.error(`  x Could not fetch hotel for query: ${q}`);
        }
      } catch (err) {
        console.error(`  x Error searching "${q}":`, err.message);
      }
    }

    result[t.theme] = {
      label: t.label,
      slug: t.slug,
      hotels: themeHotels
    };
  }

  const outPath = path.join(__dirname, 'round120_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotel data to: ${outPath}`);
  
  // Verify all 5 themes have exactly 5 hotels
  let allCountOk = true;
  for (const t of targets) {
    const count = result[t.theme].hotels.length;
    console.log(`- Theme ${t.theme}: ${count} hotels fetched`);
    if (count < 5) allCountOk = false;
  }
  if (!allCountOk) {
    console.error('Some themes have less than 5 hotels!');
    process.exit(1);
  }
  console.log('All 5 themes successfully fetched 5 verified hotels!');
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
