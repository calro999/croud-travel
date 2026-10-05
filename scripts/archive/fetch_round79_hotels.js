const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'shizuoka_dogashima',
    label: '静岡・西伊豆堂ヶ島温泉（夕陽百選＆駿河湾越しの雪化粧富士・名物戸田高足ガニ＆伊勢海老・地金目鯛）',
    queries: [
      '堂ヶ島温泉　堂ヶ島ニュー銀水',
      '堂ヶ島温泉　海辺のかくれ湯　清流',
      '堂ヶ島唯一の自家源泉掛流宿　堂ヶ島温泉ホテル',
      '宇久須温泉　西伊豆クリスタルビューホテル',
      '和モダンで愉しむ西伊豆ダイニング　西伊豆　今宵'
    ]
  },
  {
    theme: 'fukuoka_yanagawa',
    label: '福岡・水郷柳川温泉（冬の風物詩こたつ舟どんこ舟川下り＆名物元祖うなぎのせいろ蒸し・博多和牛会席）',
    queries: [
      '柳川藩主立花邸　御花',
      '亀の井ホテル　柳川',
      'ホテルニューガイア　柳川',
      '柳川　白柳荘',
      '柳川温泉ホテル　輝泉荘'
    ]
  },
  {
    theme: 'oita_nagayu',
    label: '大分・竹田長湯温泉（世界屈指の天然炭酸泉とくじゅう連山初雪絶景・名物清流エノハ料理＆極上豊後牛会席）',
    queries: [
      '長湯温泉　大丸旅館',
      '長湯温泉　丸長旅館',
      '長湯温泉　かじか庵',
      '長湯温泉　紅葉館',
      'クアパーク長湯'
    ]
  },
  {
    theme: 'shimane_matsue',
    label: '島根・松江しんじ湖温泉（宍道湖の夕日絶景と解禁松葉ガニ＆寒シジミ鍋・しまね和牛会席レイクビュー）',
    queries: [
      '松江しんじ湖温泉　なにわ一水',
      '松江しんじ湖温泉　ホテル一畑',
      '松江しんじ湖温泉　松平閣',
      '松江しんじ湖温泉　大橋館',
      '松江しんじ湖温泉　ニューアーバンホテル本館・別館'
    ]
  },
  {
    theme: 'fukushima_urabandai',
    label: '福島・裏磐梯温泉郷（五色沼初雪ウォーク＆磐梯山雪景色・極上福島牛ステーキ＆会津地鶏鍋・桧原湖ワカサギ）',
    queries: [
      '裏磐梯高原ホテル',
      '裏磐梯レイクリゾート　迎賓館　猫魔離宮',
      '裏磐梯レイクリゾート　本館　五色の森',
      '休暇村　裏磐梯',
      '裏磐梯五色沼ホテル'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 79 (All 5 Themes, Exactly 5 Local Hotels Each)');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
      console.log(`Query: "${q}"...`);
      try {
        const hotels = await searchRakutenHotels(q, 3);
        await sleep(1300); // 楽天APIレートリミット対策
        if (hotels && hotels.length > 0) {
          let selected = null;
          for (const h of hotels) {
            if (!usedHotelNos.has(h.hotelNo)) {
              selected = h;
              break;
            }
          }
          if (selected) {
            usedHotelNos.add(selected.hotelNo);
            themeHotels.push(selected);
            console.log(`  -> Success: ${selected.hotelName} (No: ${selected.hotelNo}, Rating: ${selected.reviewAverage}, Price: ¥${selected.hotelMinCharge})`);
          } else {
            console.warn(`  -> All results duplicate for "${q}"`);
          }
        } else {
          console.warn(`  -> No match for "${q}"`);
        }
      } catch (err) {
        console.error(`  -> Error fetching "${q}":`, err.message);
      }
    }

    console.log(`Total hotels collected for ${t.theme}: ${themeHotels.length}`);
    if (themeHotels.length < 5) {
      console.error(`ERROR: Failed to collect 5 hotels for ${t.theme}!`);
      process.exit(1);
    }
    result[t.theme] = themeHotels;
  }

  const outputPath = path.join(__dirname, 'round79_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully wrote all hotel data to ${outputPath}`);
}

main().catch(err => {
  console.error('Fatal error in fetch_round79_hotels:', err);
  process.exit(1);
});
