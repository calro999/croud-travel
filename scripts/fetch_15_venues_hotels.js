require("dotenv").config();
const fs = require("fs");
const path = require("path");

const appId = process.env.RAKUTEN_APPLICATION_ID;
const accessKey = process.env.RAKUTEN_ACCESS_KEY;
const affId = process.env.RAKUTEN_AFFILIATE_ID;

const venues = [
  // 1. 東京ドーム
  {
    id: "tokyo-dome",
    name: "東京ドーム",
    prefecture: "東京都",
    area: "水道橋・後楽園・飯田橋",
    description: "JR総武線・都営三田線「水道橋駅」や丸ノ内線「後楽園駅」。終演後の混雑時は駅改札規制がかかるため、徒歩で帰れる水道橋・飯田橋エリアのホテル確保が鉄則。",
    budgetQueries: ["アパホテル 水道橋駅前", "東急ステイ水道橋", "後楽ガーデンホテル", "カプセルホテル 水道橋"],
    luxuryQueries: ["東京ドームホテル", "ホテルメトロポリタン エドモント", "庭のホテル 東京", "ホテルモントレ半蔵門"]
  },
  // 2. 京セラドーム大阪
  {
    id: "kyocera-dome",
    name: "京セラドーム大阪",
    prefecture: "大阪府",
    area: "大正・弁天町・心斎橋",
    description: "JR環状線「大正駅」や地下鉄「ドーム前千代崎駅」。終演後の大正駅は大混雑するため、大正駅前のホテルか、地下鉄直通の心斎橋・弁天町エリアを狙うのが鉄則。",
    budgetQueries: ["ホテルソビアル 大阪 ドーム前", "HOSTEL 桜川", "東横イン 大阪弁天町", "スマイルホテル大阪四ツ橋"],
    luxuryQueries: ["アートホテル大阪ベイタワー", "ホテル日航大阪", "ホテルモントレ グラスミア大阪", "スイスホテル南海大阪"]
  },
  // 3. Kアリーナ横浜・ぴあアリーナMM
  {
    id: "k-arena",
    name: "Kアリーナ横浜・ぴあアリーナMM",
    prefecture: "神奈川県",
    area: "横浜・みなとみらい・桜木町",
    description: "2万人収容の音楽専用アリーナ。終演後は横浜駅東口への歩道橋が大渋滞（規制退場と合わせて1時間以上）するため、みなとみらい側・桜木町側へ歩くのが大正解。",
    budgetQueries: ["横浜平和プラザホテル", "桜木町 ワシントンホテル", "相鉄フレッサイン 横浜桜木町", "ホテルリブマックス横浜桜木町"],
    luxuryQueries: ["三井ガーデンホテル横浜みなとみらいプレミア", "横浜ベイホテル東急", "ウェスティンホテル横浜", "横浜ロイヤルパークホテル"]
  },
  // 4. さいたまスーパーアリーナ（たまアリ）
  {
    id: "saitama-arena",
    name: "さいたまスーパーアリーナ（たまアリ）",
    prefecture: "埼玉県",
    area: "さいたま新都心・大宮",
    description: "さいたま新都心駅すぐ。アリーナ・スタジアムモードともに3万人以上が集まるため、新都心駅前ホテルか、1駅隣の巨大ターミナル大宮駅前を抑えた人が勝ち組。",
    budgetQueries: ["アパホテル さいたま新都心駅西", "カプセルイン大宮", "マロウドイン大宮", "スーパーホテルPremierさいたま・大宮駅東口"],
    luxuryQueries: ["ホテルメトロポリタン さいたま新都心", "パレスホテル大宮", "カンデオホテルズ大宮", "ロイヤルパインズホテル浦和"]
  },
  // 5. バンテリンドーム ナゴヤ
  {
    id: "nagoya-dome",
    name: "バンテリンドーム ナゴヤ",
    prefecture: "愛知県",
    area: "大曽根・栄・名古屋駅",
    description: "地下鉄「ナゴヤドーム前矢田駅」やJR「大曽根駅」。地下鉄改札は大混雑するため、大曽根駅南口の徒歩ホテルか、JR・名城線で直通の栄・千種エリアが便利。",
    budgetQueries: ["シティホテルドーム", "R&Bホテル 名古屋栄東", "ホテルメルパルク名古屋", "アパホテル 名古屋栄"],
    luxuryQueries: ["名古屋観光ホテル", "名古屋東急ホテル", "TIAD オートグラフ コレクション", "ヒルトン名古屋"]
  },
  // 6. みずほPayPayドーム福岡
  {
    id: "fukuoka-dome",
    name: "みずほPayPayドーム福岡",
    prefecture: "福岡県",
    area: "百道浜・唐人町・天神",
    description: "地下鉄「唐人町駅」。駅からの徒歩（約15分）道は大名行列状態になるため、ドーム直結のヒルトンか、唐人町駅前、またはバス直通の天神エリアが2大正解。",
    budgetQueries: ["THE NINE STATES HOTEL 唐人町", "平和台ホテル5", "アパホテル 福岡天神西", "ホテルオリエンタルエクスプレス福岡天神"],
    luxuryQueries: ["ヒルトン福岡シーホーク", "ホテルモントレ福岡", "ソラリア西鉄ホテル福岡", "グランドハイアット福岡"]
  },
  // 7. 有明アリーナ・東京ガーデンシアター
  {
    id: "ariake-arena",
    name: "有明アリーナ・東京ガーデンシアター",
    prefecture: "東京都",
    area: "有明・豊洲・お台場",
    description: "ゆりかもめ「有明テニスの森駅」やりんかい線「国際展示場駅」。臨海エリアは終演後のゆりかもめが超満員になるため、徒歩圏の有明・豊洲ホテルに直行するのがベスト。",
    budgetQueries: ["ホテルリブマックス豊洲駅前", "ヴィラフォンテーヌ グランド 東京有明", "相鉄グランドフレッサ 東京ベイ有明", "東京ベイ有明ワシントンホテル"],
    luxuryQueries: ["グランドニッコー東京 台場", "ヒルトン東京お台場", "ホテル櫂会", "ラビスタ東京ベイ"]
  },
  // 8. 横浜アリーナ（横アリ）
  {
    id: "yokohama-arena",
    name: "横浜アリーナ（横アリ）",
    prefecture: "神奈川県",
    area: "新横浜",
    description: "東海道新幹線・JR横浜線・相鉄東急直通線「新横浜駅」から徒歩5分。遠征組にとって新幹線駅直結の最高立地。終演後ダッシュなしで新横浜駅前の宿にチェックイン可能。",
    budgetQueries: ["新横浜フジビューホテル", "コートホテル新横浜", "スーパーホテル新横浜", "R&Bホテル新横浜駅前"],
    luxuryQueries: ["新横浜プリンスホテル", "ホテルアソシア新横浜", "ダイワロイネットホテル新横浜", "新横浜グレイスホテル"]
  },
  // 9. 大阪城ホール（城ホ）
  {
    id: "osakajo-hall",
    name: "大阪城ホール（城ホ）",
    prefecture: "大阪府",
    area: "大阪城公園・OBP・京橋",
    description: "JR大阪城公園駅・地下鉄大阪ビジネスパーク（OBP）駅・京橋駅。OBPビル街と直結しており、歩いて京橋駅やOBP内のシティホテルにチェックインできる抜群の利便性。",
    budgetQueries: ["ホテル京阪 京橋 グランデ", "アパホテル 大阪天満", "東横イン 大阪京橋桜ノ宮", "ホテルリブマックス大阪ドーム前"],
    luxuryQueries: ["ホテルニューオータニ大阪", "帝国ホテル 大阪", "ホテルモントレ ラ・スール大阪", "ウェスティンホテル大阪"]
  },
  // 10. 日本武道館
  {
    id: "nippon-budokan",
    name: "日本武道館",
    prefecture: "東京都",
    area: "九段下・神保町・飯田橋",
    description: "東京メトロ東西線・半蔵門線・都営新宿線「九段下駅」徒歩5分。靖国通り・神保町エリアまで歩けば古書店街と名物カレーの名店多数。終演後も徒歩で帰還できます。",
    budgetQueries: ["サクラホテル神保町", "京王プレッソイン九段下", "アパホテル 飯田橋駅前", "アパホテル 神田神保町駅東"],
    luxuryQueries: ["ホテルグランドアーク半蔵門", "ホテルメトロポリタン エドモント", "庭のホテル 東京", "ホテルニューオータニ"]
  },
  // 11. ベルーナドーム（西武ドーム）
  {
    id: "belluna-dome",
    name: "ベルーナドーム（西武ドーム）",
    prefecture: "埼玉県",
    area: "所沢・西武球場前・池袋",
    description: "西武狭山線「西武球場前駅」すぐ。山間部にあるため終演後の単線電車は大混雑。直通の所沢駅前ホテルか、特急ラビューで1本の池袋駅前を事前に押さえるのが鉄則。",
    budgetQueries: ["所沢パークホテル", "ザ・ベッドアンドスパ所沢", "ホテルリブマックス東村山駅前", "スマイルホテル川越"],
    luxuryQueries: ["中国割烹旅館 掬水亭", "ホテルメトロポリタン 池袋", "サンシャインシティプリンスホテル", "川越プリンスホテル"]
  },
  // 12. 宮城・セキスイハイムスーパーアリーナ（グランディ・21）
  {
    id: "miyagi-sekisui",
    name: "宮城・セキスイハイムスーパーアリーナ（グランディ・21）",
    prefecture: "宮城県",
    area: "仙台駅・利府",
    description: "東北最大のメガアリーナ。JR利府駅からのシャトルバスが大渋滞するため、仙台駅周辺のホテルを拠点にし、公式シャトルバスで仙台駅前直行・直帰が最大の安全策。",
    budgetQueries: ["カプセルホテルとぽす 仙台駅西口", "アパホテル 仙台駅五橋", "コンフォートホテル仙台西口", "相鉄フレッサイン仙台"],
    luxuryQueries: ["ウェスティンホテル仙台", "ホテルメトロポリタン仙台", "仙台ロイヤルパークホテル", "ホテルモントレ仙台"]
  },
  // 13. Aichi Sky Expo（愛知県国際展示場）
  {
    id: "aichi-sky-expo",
    name: "Aichi Sky Expo（愛知県国際展示場）",
    prefecture: "愛知県",
    area: "中部国際空港（セントレア）・常滑",
    description: "中部国際空港（セントレア）島内に直結する巨大アリーナ展示場。名鉄「中部国際空港駅」から徒歩5分。島内ホテルなら終演後5分でベッドにダイブできる神立地。",
    budgetQueries: ["東横イン 中部国際空港1", "コンフォートホテル中部国際空港", "スプリングサニーホテル名古屋常滑駅前", "ホテルルートイン常滑駅前"],
    luxuryQueries: ["フォーポイントバイシェラトン名古屋 中部国際空港", "セントレアホテル", "TUBE Yd 常滑", "名古屋マリオットアソシアホテル"]
  },
  // 14. マリンメッセ福岡（A館・B館）
  {
    id: "marine-messe-fukuoka",
    name: "マリンメッセ福岡（A館・B館）",
    prefecture: "福岡県",
    area: "博多・天神・ウォーターフロント",
    description: "博多港ウォーターフロント。終演後は博多駅・天神駅行きの臨時バスに長蛇の列ができるため、中洲川端・呉服町へ徒歩（約15分〜20分）で抜けるか、呉服町周辺宿が賢い選択。",
    budgetQueries: ["冷泉閣ホテル 川端", "ホテルリブマックス博多中洲", "ベッセルイン博多中洲", "東横イン 博多口駅前"],
    luxuryQueries: ["ホテルオークラ福岡", "グランドハイアット福岡", "都ホテル 博多", "THE BLOSSOM HAKATA Premier"]
  },
  // 15. 大和ハウス プレミストドーム（札幌ドーム）
  {
    id: "sapporo-dome",
    name: "大和ハウス プレミストドーム（札幌ドーム）",
    prefecture: "北海道",
    area: "福住・すすきの・札幌駅",
    description: "地下鉄東豊線「福住駅」徒歩10分。終演後の福住駅は入場規制で雪や雨の中待たされるため、東豊線直通の豊水すすきの駅や大通駅・さっぽろ駅周辺のホテルが拠点に最適。",
    budgetQueries: ["カプセル・イン札幌", "ホテルアベスト札幌", "スマイルホテルプレミアム札幌すすきの", "ネストホテル札幌駅前"],
    luxuryQueries: ["JRタワーホテル日航札幌", "札幌グランドホテル", "プレミアホテル 中島公園 札幌", "京王プラザホテル札幌"]
  }
];

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function searchRakutenHotel(keyword) {
  const url = `https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20260731?format=json&keyword=${encodeURIComponent(keyword)}&applicationId=${appId}&accessKey=${accessKey}&affiliateId=${affId}&hits=1`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Fetch error for ${keyword}: ${res.status}`);
      return null;
    }
    const data = await res.json();
    if (!data.hotels || data.hotels.length === 0) return null;
    const h = data.hotels[0].hotel;
    const basic = h[0].hotelBasicInfo;
    return {
      hotelNo: basic.hotelNo,
      hotelName: basic.hotelName,
      hotelInformationUrl: basic.hotelInformationUrl,
      planListUrl: basic.planListUrl,
      reviewAverage: basic.reviewAverage,
      reviewCount: basic.reviewCount,
      hotelMinCharge: basic.hotelMinCharge,
      hotelImageUrl: basic.hotelImageUrl,
      address1: basic.address1,
      address2: basic.address2,
      access: basic.access,
      special: basic.hotelSpecial
    };
  } catch (e) {
    console.error(`Error fetching ${keyword}:`, e.message);
    return null;
  }
}

async function run() {
  console.log(`Starting to collect hotels for ${venues.length} venues...`);
  const results = [];

  for (const v of venues) {
    console.log(`\n=== Processing: ${v.name} ===`);
    const budgetHotels = [];
    const luxuryHotels = [];

    // Collect budget hotels (up to 2-3 distinct)
    for (const q of v.budgetQueries) {
      if (budgetHotels.length >= 2) break;
      await sleep(250);
      const h = await searchRakutenHotel(q);
      if (h && !budgetHotels.some(b => b.hotelNo === h.hotelNo)) {
        console.log(`  [Budget Found]: ${h.hotelName} (Min: ¥${h.hotelMinCharge})`);
        budgetHotels.push(h);
      }
    }

    // Collect luxury hotels (up to 2-3 distinct)
    for (const q of v.luxuryQueries) {
      if (luxuryHotels.length >= 2) break;
      await sleep(250);
      const h = await searchRakutenHotel(q);
      if (h && !budgetHotels.some(b => b.hotelNo === h.hotelNo) && !luxuryHotels.some(l => l.hotelNo === h.hotelNo)) {
        console.log(`  [Luxury Found]: ${h.hotelName} (Min: ¥${h.hotelMinCharge})`);
        luxuryHotels.push(h);
      }
    }

    results.push({
      ...v,
      budgetHotels,
      luxuryHotels,
      totalHotels: budgetHotels.length + luxuryHotels.length
    });
  }

  const outDir = path.join(process.cwd(), "scratch");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const outPath = path.join(outDir, "oshi_15_venues_hotels.json");
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), "utf8");
  console.log(`\nDONE! Saved 15 venues hotel data to ${outPath}`);
}

run();
