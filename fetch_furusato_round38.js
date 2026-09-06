const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-wagyu-beef-gourmet-stay',
    queries: [
      { query: '松阪 松阪牛 ホテル ホテルファインガーデン松阪', fallback: 'エースイン松阪', key: 'wagyu_matsusaka', label: '三重県松阪市ふるさと納税・肉の芸術品と称される世界最高峰「松阪牛」本場すき焼き会席とエースイン松阪' },
      { query: '神戸 有馬温泉 神戸牛 旅館', fallback: '有馬温泉　兵衛向陽閣', key: 'wagyu_kobe', label: '兵庫県神戸市北区ふるさと納税・きめ細やかなサシと芳醇な香り「神戸ビーフ」金泉名湯と有馬温泉兵衛向陽閣' },
      { query: '滋賀 近江八幡 近江牛 旅館 ホテル', fallback: '休暇村　近江八幡', key: 'wagyu_oumi', label: '滋賀県近江八幡市ふるさと納税・400年の歴史誇る日本最古のブランド牛「近江牛」琵琶湖パノラマと休暇村近江八幡' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-rapid-currents-strait-stay',
    queries: [
      { query: '鳴門 うず潮 温泉 リゾート ホテル', fallback: 'アオアヲ　ナルト　リゾート', key: 'current_naruto', label: '徳島県鳴門市ふるさと納税・世界最大級の渦潮が渦巻くダイナミズム「鳴門海峡」鳴門鯛とアオアヲナルトリゾート' },
      { query: '今治 しまなみ 来島海峡 ホテル', fallback: '今治国際ホテル', key: 'current_kurushima', label: '愛媛県今治市ふるさと納税・日本三大急潮の八艘飛び潮流「来島海峡」来島鯛としまなみ海道今治国際ホテル' },
      { query: '下関 関門海峡 ふぐ ホテル', fallback: '下関温泉　風の海', key: 'current_kanmon', label: '山口県下関市ふるさと納税・早鞆ノ瀬戸の急潮と巌流島「関門海峡」本場下関のとらふぐと全室露天風呂下関温泉風の海' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-washi-papers-stay',
    queries: [
      { query: '福井 越前和紙 越前市 武生 温泉 旅館', fallback: 'しきぶ温泉　白波館', key: 'washi_echizen', label: '福井県越前市ふるさと納税・1500年の技・最高品質の奉書紙「越前和紙」里山の自然としきぶ温泉白波館' },
      { query: '岐阜 美濃 うだつの上がる町並み 長良川 旅館', fallback: '長良川温泉　十八楼', key: 'washi_mino', label: '岐阜県美濃市・岐阜市ふるさと納税・清流長良川が育んだ薄く強靭な「美濃和紙」うだつの町並みと長良川温泉十八楼' },
      { query: '高知 仁淀川 いの町 土佐和紙 温泉', fallback: '土佐和紙工芸村　くらうど', key: 'washi_tosa', label: '高知県いの町ふるさと納税・奇跡の清流仁淀ブルーが生んだカゲロウの羽「土佐和紙」紙漉き体験と土佐和紙工芸村くらうど' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-highlands-resort-stay',
    queries: [
      { query: '長野 志賀高原 リゾート ホテル 温泉', fallback: '志賀高原プリンスホテル', key: 'highland_shiga', label: '長野県山ノ内町ふるさと納税・標高2000mの白銀と高山植物「志賀高原」大自然パノラマと志賀高原プリンスホテル' },
      { query: '軽井沢 ホテル リゾート 軽井沢プリンスホテル', fallback: '軽井沢プリンスホテル　ウエスト', key: 'highland_karuizawa', label: '長野県軽井沢町ふるさと納税・明治以来の日本屈指の高原保養地「軽井沢高原」白樺林と軽井沢プリンスホテルウエスト' },
      { query: '長野 蓼科 霧ヶ峰 美ヶ原 リゾート ホテル', fallback: '蓼科東急ホテル', key: 'highland_kirigamine', label: '長野県茅野市・諏訪市ふるさと納税・天空のニッコウキスゲと爽快スカイライン「霧ヶ峰・美ヶ原高原」蓼科東急ホテル' }
    ]
  }
];

async function main() {
  console.log('Fetching Round 38 hotels using rakuten_api_helper.js...');
  const allHotelsPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let currentData = {};
  if (fs.existsSync(allHotelsPath)) {
    currentData = JSON.parse(fs.readFileSync(allHotelsPath, 'utf8'));
  }

  for (const cfg of configs) {
    console.log(`=== Processing: ${cfg.slug} ===`);
    for (const q of cfg.queries) {
      console.log(`Searching for: ${q.query} (${q.key})...`);
      let list = await searchRakutenHotels(q.query, 3);
      await sleep(2200);
      if (!list || list.length === 0) {
        console.log(`Trying fallback: ${q.fallback}...`);
        list = await searchRakutenHotels(q.fallback, 3);
        await sleep(2200);
      }
      if (list && list.length > 0) {
        const hotel = list[0];
        currentData[q.key] = {
          ...hotel,
          label: q.label
        };
        console.log(`✓ Added: ${hotel.hotelName} (No: ${hotel.hotelNo})`);
      } else {
        console.error(`X Still failed for ${q.key}`);
      }
    }
  }

  fs.writeFileSync(allHotelsPath, JSON.stringify(currentData, null, 2));
  console.log('Round 38 hotels updated in src/data/all_seasonal_rakuten_hotels.json');
}

main();
