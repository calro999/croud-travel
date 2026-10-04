const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const articleThemes = [
  {
    num: 94,
    title: '【極上和牛の食べ比べ】近江牛＆神戸牛と松茸会席！びわ湖・有馬温泉で味わう関西の美食名旅館5選',
    queries: ['おごと温泉 きくのや', 'おごと温泉 びわこ緑水亭', '有馬温泉 兵衛向陽閣', '有馬温泉 兆楽', '有馬温泉 欽山']
  },
  {
    num: 95,
    title: '【ふるさと納税で実質2,000円負担】年末混雑前の今が最後の穴場！年内旅行を確定させる名宿5選',
    queries: ['箱根 強羅花壇', '草津温泉 望雲', '修善寺温泉 新井旅館', '河口湖 秀峰閣湖月', '奥入瀬渓流ホテル']
  },
  {
    num: 96,
    title: '【中禅寺湖の紅葉露天】2026年日光の紅葉見頃時期と気温・服装！鬼怒川・奥日光の人気温泉宿5選',
    queries: ['日光中禅寺湖温泉 ホテル花庵', '奥日光 森のホテル', '鬼怒川温泉 あさや', '鬼怒川温泉 七重八重', '奥日光高原ホテル']
  },
  {
    num: 97,
    title: '【全室客室露天風呂】2026年箱根の紅葉見頃と気温・服装！強羅・芦ノ湖の絶景温泉宿厳選5選',
    queries: ['強羅花扇', '箱根芦ノ湖温泉 和心亭豊月', '箱根湯本 はつはな', '富士屋ホテル 箱根', '金乃竹 仙石原']
  },
  {
    num: 98,
    title: '【湯畑徒歩3分以内】2026年草津温泉の紅葉見頃時期と気温・服装！名湯掛け流しおすすめ旅館5選',
    queries: ['草津温泉 奈良屋', '草津温泉 望雲', '草津温泉 ホテル一井', '草津温泉 中村屋旅館', '草津温泉 湯元館']
  },
  {
    num: 99,
    title: '【部屋から逆さ富士】2026年河口湖もみじ回廊の紅葉見頃と服装！富士山一望のおすすめ温泉宿5選',
    queries: ['富士河口湖温泉 秀峰閣湖月', '富士河口湖温泉 湖南荘', '富士レークホテル', '富士ビューホテル', '河口湖温泉寺 露天風呂の宿 夢殿']
  },
  {
    num: 100,
    title: '【渡月橋の紅葉パノラマ】2026年秋の京都嵐山・嵯峨野の見頃と服装！嵐山温泉の人気旅館5選',
    queries: ['翠嵐 ラグジュアリーコレクションホテル 京都', '京都 嵐山温泉 花伝抄', '嵐山 渡月亭', '京都嵐山 花のいえ', 'らんざん 嵐山']
  },
  {
    num: 101,
    title: '【金泉・銀泉に浸かる】2026年有馬温泉の紅葉見頃時期と服装！神戸牛が味わえる名門旅館5選',
    queries: ['有馬温泉 兵衛向陽閣', '有馬温泉 中の坊瑞苑', '有馬グランドホテル', '有馬温泉 兆楽', '有馬温泉 月光園 鴻朧館']
  },
  {
    num: 102,
    title: '【北アルプス三段紅葉】2026年白馬・上高地の紅葉見頃と服装！絶景パノラマ露天風呂の宿5選',
    queries: ['白馬アルパインホテル', '白馬東急ホテル', 'ホテル ラ・ネージュ 白馬', '上高地帝国ホテル', '白馬リゾートホテル ラ・ネージュ東館']
  },
  {
    num: 103,
    title: '【蔦沼の朝焼け紅葉】2026年奥入瀬渓流・十和田湖の紅葉見頃と服装！自噴秘湯と名湯宿5選',
    queries: ['星野リゾート 奥入瀬渓流ホテル', '蔦温泉旅館', '八甲田ホテル', '酸ヶ湯温泉旅館', '十和田湖ホテル']
  },
  {
    num: 104,
    title: '【神在月の特別参拝】2026年出雲大社の神在祭時期と混雑対策！玉造温泉の美肌旅館おすすめ5選',
    queries: ['いにしえの宿 佳雲', '出雲 玉造温泉 白石家', '玉造温泉 佳翠苑皆美', '竹野屋旅館 出雲', 'お宿 月夜のうさぎ']
  },
  {
    num: 105,
    title: '【竹林の小径の紅葉】2026年修善寺温泉の見頃時期と伊豆の服装！登録有形文化財の名旅館5選',
    queries: ['修善寺温泉 新井旅館', '修善寺温泉 宙SORA 渡月荘金龍', '湯回廊 菊屋', '修善寺温泉 柳生の庄', '修善寺温泉 鬼の栖']
  },
  {
    num: 106,
    title: '【鳴子峡の断崖紅葉】2026年鳴子温泉の見頃時期と服装！泉質自慢の名湯旅館5選',
    queries: ['鳴子観光ホテル', '鳴子ホテル', '鳴子温泉 湯元吉祥', '鳴子温泉 旅館大沼', '鳴子 中山平温泉 旅館三之亟湯']
  },
  {
    num: 107,
    title: '【豊平峡の渓谷美】2026年定山渓温泉の紅葉見頃と北海道の服装！名湯リゾート5選',
    queries: ['定山渓温泉 ぬくもりの宿 ふる川', '定山渓第一寶亭留 翠山亭', '定山渓万世閣ホテルミリオーネ', '章月グランドホテル', '定山渓ビューホテル']
  },
  {
    num: 108,
    title: '【由布岳の裾野紅葉】2026年湯布院・湯平温泉の見頃と服装！隠れ家名旅館5選',
    queries: ['由布院温泉 旅亭 田乃倉', 'ゆふいん花由', '由布院温泉 ゆふいん月燈庵', '由布院温泉 朝霧のみえる宿 ゆふいん花由', '湯平温泉 旅館 山城屋']
  },
  {
    num: 109,
    title: '【日本最古の名湯】2026年道後温泉の秋旅見頃時期と服装！湯めぐりおすすめ宿5選',
    queries: ['道後温泉 ふなや', '道後温泉 道後舘', '道後御湯', '道後温泉 ホテル古湧園 遥', '道後温泉 大和屋本店']
  },
  {
    num: 110,
    title: '【阿蘇の大自然と渓谷紅葉】2026年黒川温泉の見頃と服装！露天風呂めぐり名宿5選',
    queries: ['黒川温泉 やまびこ旅館', '黒川温泉 瀬の本高原ホテル', '黒川温泉 ふもと旅館', '杖立温泉 純和風旅館 泉屋', '阿蘇内牧温泉 蘇山郷']
  },
  {
    num: 111,
    title: '【世界屈指のラドン温泉】2026年三朝温泉の秋旅見頃と服装！山陰美食名旅館5選',
    queries: ['三朝温泉 依山楼岩崎', '三朝温泉 旅館大橋', '三朝温泉 斉木別館', '皆生温泉 華水亭', '皆生游月']
  },
  {
    num: 112,
    title: '【越前がにと庭園露天】2026年あわら温泉の秋旅見頃と服装！北陸屈指の名旅館5選',
    queries: ['越前あわら温泉 つるや', 'あわら温泉 グランディア芳泉', 'あわら温泉 まつや千千', 'あわら温泉 清風荘', '三国温泉 望洋楼']
  },
  {
    num: 113,
    title: '【世界遺産熊野古道と海景露天】2026年南紀勝浦・白浜温泉の秋旅と服装！絶景宿5選',
    queries: ['碧き島の宿 熊野別邸 中の島', '南紀勝浦温泉 ホテル浦島', '白浜温泉 ホテル川久', '白浜温泉 白良荘グランドホテル', '白浜古賀の井リゾート＆スパ']
  },
  {
    num: 114,
    title: '【365段の石段街と紅葉】2026年伊香保温泉・四万温泉の見頃と服装！名湯宿5選',
    queries: ['伊香保温泉 ホテル木暮', '伊香保温泉 福一', '四万温泉 積善館', '四万温泉 柏屋旅館', '四万温泉 四万やまぐち館']
  },
  {
    num: 115,
    title: '【英虞湾の夕景パノラマ】2026年伊勢志摩・鳥羽の秋旅見頃時期と服装！美食宿5選',
    queries: ['志摩観光ホテル ザ ベイスイート', '志摩観光ホテル ザ クラシック', '鳥羽国際ホテル 潮路亭', '鳥羽温泉郷 戸田家', 'サン浦島 悠季の里']
  }
];

async function fetchAllLiveHotels() {
  console.log('Fetching live hotels from Rakuten API for all 22 articles (94 to 115)...');
  const allResults = {};

  for (const item of articleThemes) {
    console.log(`\nFetching for note-${item.num}: ${item.title}`);
    const hotelList = [];
    const seenNos = new Set();

    for (const q of item.queries) {
      await sleep(350);
      try {
        const res = await searchRakutenHotels(q, 1);
        if (res && res.length > 0) {
          const h = res[0];
          if (!seenNos.has(h.hotelNo)) {
            seenNos.add(h.hotelNo);
            hotelList.push(h);
            console.log(`  -> [${h.hotelNo}] ${h.hotelName} (★${h.reviewAverage}, ￥${h.hotelMinCharge}) [${h.address1} ${h.address2}]`);
          }
        } else {
          console.log(`  -> No hit for query: "${q}"`);
        }
      } catch (err) {
        console.error(`  -> Error fetching "${q}":`, err.message);
      }
    }

    // fallback if less than 5
    if (hotelList.length < 5) {
      console.log(`  Warning: Only got ${hotelList.length} hotels for note-${item.num}. Fetching broad search...`);
      const broad = item.title.split('】')[1] ? item.title.split('】')[1].split('！')[0] : '温泉';
      const fallbackRes = await searchRakutenHotels(broad, 5);
      for (const h of fallbackRes) {
        if (hotelList.length >= 5) break;
        if (!seenNos.has(h.hotelNo)) {
          seenNos.add(h.hotelNo);
          hotelList.push(h);
          console.log(`  -> (Fallback) [${h.hotelNo}] ${h.hotelName}`);
        }
      }
    }

    allResults[item.num] = hotelList;
  }

  fs.writeFileSync('live_rakuten_hotels_94_115.json', JSON.stringify(allResults, null, 2), 'utf-8');
  console.log('\nAll 22 articles verified live hotels saved to live_rakuten_hotels_94_115.json');
}

fetchAllLiveHotels();
