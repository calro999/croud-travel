const https = require('https');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const appId = process.env.RAKUTEN_APPLICATION_ID || "1a3cdfd9-2aec-4b42-8290-1c53603b0012";
const accessKey = process.env.RAKUTEN_ACCESS_KEY || "pk_XkZ5h9MDKSsuVr6T5CnLnlVNvFg3hiR5vMDGrQ75cU5";
const affId = process.env.RAKUTEN_AFFILIATE_ID || "54d2a438.4bc4abc2.54d2a439.aa1be583";

const sleep = ms => new Promise(r => setTimeout(r, ms));

// 主要返礼品カテゴリ（肉・米・海産物・フルーツ・日用品・旅行クーポン）
const CATEGORIES = [
  {
    id: "travel",
    name: "旅行クーポン（楽天トラベル）",
    icon: "♨️",
    lead: "12月31日の駆け込みに最も選ばれる返礼品。有効期限最長3年、寄付額の最大30%相当の宿泊クーポンが進呈され、年末年始や来年の連休に利用可能。",
    popularItems: [
      { name: "草津温泉 宿泊クーポン", target: "群馬県草津町", amount: "寄付10,000円〜100,000円（クーポン3,000円〜30,000円分）", points: "有効期限最大3年・対象宿多数" },
      { name: "箱根温泉 宿泊クーポン", target: "神奈川県箱根町", amount: "寄付20,000円〜300,000円（クーポン6,000円〜90,000円分）", points: "都心からアクセス抜群・高級旅館対応" },
      { name: "別府・由布院 宿泊クーポン", target: "大分県別府市・由布市", amount: "寄付10,000円〜150,000円（クーポン3,000円〜45,000円分）", points: "日本一の湧出量・客室露天風呂宿多数" },
      { name: "軽井沢リゾート 宿泊クーポン", target: "長野県軽井沢町", amount: "寄付30,000円〜200,000円（クーポン9,000円〜60,000円分）", points: "避暑地ヴィラ・冬のスキーリゾート" }
    ]
  },
  {
    id: "meat",
    name: "精肉・ブランド牛（ステーキ・しゃぶしゃぶ・ハンバーグ）",
    icon: "🥩",
    lead: "ふるさと納税で不動の人気No.1ジャンル。宮崎牛・佐賀牛・飛騨牛などのA5ランク黒毛和牛や、小分け冷凍で届く便利ハンバーグ・豚肉が大人気。",
    popularItems: [
      { name: "黒毛和牛切り落とし（小分けパック）", target: "宮崎県都城市など", amount: "寄付10,000円〜15,000円（1.5kg〜2.0kg）", points: "普段使いに最高・冷凍保存しやすい小分け" },
      { name: "鉄板焼き極上ハンバーグ（特製デミソース付）", target: "福岡県飯塚市など", amount: "寄付10,000円〜12,000円（10個〜20個）", points: "温めるだけで専門店の味・子どもに大人気" },
      { name: "A5等級サーロインステーキ", target: "鹿児島県・熊本県など", amount: "寄付20,000円〜30,000円（400g〜600g）", points: "年末年始のごちそう・記念日ディナーに" }
    ]
  },
  {
    id: "rice",
    name: "お米・ブランド米（コシヒカリ・つや姫・定期便）",
    icon: "🌾",
    lead: "家計の直接節約に直結する生活必需品。魚沼産コシヒカリ、山形つや姫、秋田あきたこまちなど、新米の定期便や大容量パックが定番。",
    popularItems: [
      { name: "山形県産つや姫・雪若丸食べ比べ", target: "山形県寒河江市・鶴岡市など", amount: "寄付10,000円〜15,000円（10kg〜15kg）", points: "冷めても美味しい・粘りと旨味が際立つ" },
      { name: "お米定期便（毎月お届け・全3回〜6回）", target: "新潟県・秋田県各自治体", amount: "寄付30,000円〜60,000円（5kg〜10kg×回数）", points: "保管場所をとらず毎月新鮮な精米が届く" },
      { name: "無洗米大容量パック", target: "熊本県・岩手県など", amount: "寄付12,000円〜16,000円（12kg〜15kg）", points: "研ぐ手間ゼロ・冬の冷たい水を使わない" }
    ]
  },
  {
    id: "seafood",
    name: "海産物・カニ・いくら・ホタテ",
    icon: "🦀",
    lead: "冬の年末年始の食卓を豪華に彩る海の幸。オホーツク海産ホタテ、北海道産大粒いくら醤油漬け、ボイルずわいがになどが年末に駆け込み殺到。",
    popularItems: [
      { name: "オホーツク産 大粒ホタテ玉冷", target: "北海道紋別市・白糠町など", amount: "寄付12,000円〜15,000円（1kg前後）", points: "肉厚で濃厚な甘み・刺身・バター焼き" },
      { name: "大粒いくら醤油漬け（鮭卵）", target: "北海道根室市・別海町など", amount: "寄付15,000円〜22,000円（250g〜500g）", points: "プチプチ食感・豪華海鮮丼に最適" },
      { name: "特大ボイルずわいがに（カット済）", target: "福井県敦賀市・鳥取県境港市など", amount: "寄付20,000円〜35,000円（800g〜1.5kg）", points: "解凍してすぐ食べられる・冬の鍋に" }
    ]
  },
  {
    id: "daily",
    name: "日用品・消耗品（ティッシュ・トイレットペーパー）",
    icon: "🧻",
    lead: "「冷蔵庫のスペースがない」「確実に使うものがいい」という堅実派に選ばれるボックスティッシュやトイレットペーパー。生活費を直接浮かせられる人気返礼品。",
    popularItems: [
      { name: "エリエール・スコッティ 箱ティッシュ大容量", target: "静岡県富士市・栃木県佐野市など", amount: "寄付12,000円〜15,000円（50箱〜60箱）", points: "半年〜1年分の日用品をまとめ買い感覚で" },
      { name: "長持ちトイレットペーパー（3倍巻き）", target: "静岡県沼津市など", amount: "寄付10,000円〜14,000円（48ロール〜72ロール）", points: "省スペース保管・交換頻度が劇的に減る" }
    ]
  }
];

// 楽天APIから主要温泉地（自治体）の宿データを取得して最新化
async function fetchLatestMunicipalities() {
  console.log("Fetching live hotel data for municipalities via Rakuten Travel API...");
  const municipalities = [
    { pref: "群馬県", municipality: "草津町", onsen: "草津温泉", keyword: "草津温泉", articleSlug: "furusato-tax-kusatsu-yubatake-luxury-ryokan-stay" },
    { pref: "神奈川県", municipality: "箱根町", onsen: "箱根温泉郷", keyword: "箱根 温泉", articleSlug: "furusato-tax-hakone-gora-onsen-art-luxury-stay" },
    { pref: "長野県", municipality: "軽井沢町", onsen: "軽井沢リゾート", keyword: "軽井沢 ホテル", articleSlug: "furusato-tax-karuizawa-luxury-resort-villa-stay" },
    { pref: "大分県", municipality: "別府市", onsen: "別府八湯", keyword: "別府温泉", articleSlug: "furusato-tax-beppu-onsen-jigoku-meguri-stay" },
    { pref: "大分県", municipality: "由布市", onsen: "由布院温泉", keyword: "由布院 旅館", articleSlug: "furusato-tax-yufuin-kinrinko-morning-mist-stay" },
    { pref: "静岡県", municipality: "熱海市", onsen: "熱海温泉", keyword: "熱海温泉", articleSlug: "furusato-tax-atami-ocean-fireworks-luxury-stay" },
    { pref: "静岡県", municipality: "伊東市", onsen: "伊東温泉・伊豆高原", keyword: "伊東温泉", articleSlug: "furusato-tax-ito-onsen-seafood-luxury-stay" },
    { pref: "北海道", municipality: "登別市", onsen: "登別温泉", keyword: "登別温泉", articleSlug: "furusato-tax-noboribetsu-jigokudani-sulfur-springs-stay" },
    { pref: "石川県", municipality: "加賀市", onsen: "山代・山中温泉", keyword: "山代温泉", articleSlug: "furusato-tax-yamashiro-onsen-kaga-million-gourmet-stay" },
    { pref: "兵庫県", municipality: "神戸市", onsen: "有馬温泉", keyword: "有馬温泉", articleSlug: "furusato-tax-arima-onsen-kinsen-ginsen-luxury-stay" },
    { pref: "兵庫県", municipality: "豊岡市", onsen: "城崎温泉", keyword: "城崎温泉", articleSlug: "furusato-tax-kinosaki-onsen-matsuba-crab-seven-baths-stay" },
    { pref: "愛媛県", municipality: "松山市", onsen: "道後温泉", keyword: "道後温泉", articleSlug: "furusato-tax-dogo-onsen-honkan-heritage-stay" },
    { pref: "熊本県", municipality: "南小国町", onsen: "黒川温泉", keyword: "黒川温泉", articleSlug: "furusato-tax-kurokawa-onsen-nyuto-tegata-stay" },
    { pref: "沖縄県", municipality: "恩納村", onsen: "恩納村ビーチリゾート", keyword: "恩納村 リゾート", articleSlug: "furusato-tax-okinawa-beach-resort-luxury-stay" }
  ];

  const results = [];
  for (const m of municipalities) {
    console.log(`Querying Rakuten API for: ${m.keyword}`);
    try {
      const url = `https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20260731?format=json&keyword=${encodeURIComponent(m.keyword)}&applicationId=${appId}&accessKey=${accessKey}&affiliateId=${affId}&hits=3`;
      const res = await new Promise((resolve) => {
        https.get(url, (resp) => {
          const chunks = [];
          resp.on('data', c => chunks.push(c));
          resp.on('end', () => {
            try {
              const data = JSON.parse(Buffer.concat(chunks).toString('utf8'));
              resolve(data);
            } catch(e) { resolve(null); }
          });
        }).on('error', () => resolve(null));
      });

      const sampleHotels = [];
      let affiliateSampleUrl = "";
      if (res && res.hotels) {
        for (const h of res.hotels) {
          const b = h.hotel[0].hotelBasicInfo;
          sampleHotels.push({
            hotelName: b.hotelName,
            hotelNo: b.hotelNo,
            address: `${b.address1 || ''} ${b.address2 || ''}`.trim(),
            hotelImageUrl: b.hotelImageUrl || b.hotelThumbnailUrl || "",
            reviewAverage: b.reviewAverage || "4.50",
            reviewCount: b.reviewCount || 0,
            hotelMinCharge: b.hotelMinCharge || null,
            affiliateUrl: b.hotelInformationUrl || b.planListUrl || ""
          });
          if (!affiliateSampleUrl && b.hotelInformationUrl) {
            affiliateSampleUrl = b.hotelInformationUrl;
          }
        }
      }

      results.push({
        pref: m.pref,
        municipality: m.municipality,
        onsen: m.onsen,
        articleSlug: m.articleSlug,
        sampleHotels,
        affiliateSampleUrl
      });
      console.log(`✓ Got ${sampleHotels.length} hotels for ${m.municipality}`);
    } catch(err) {
      console.error(`Error for ${m.municipality}:`, err.message);
    }
    await sleep(1000);
  }

  const outMuniPath = path.join(__dirname, '..', 'src', 'data', 'furusato_table_municipalities.json');
  fs.writeFileSync(outMuniPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`Saved updated municipalities data to: ${outMuniPath}`);

  const outCatPath = path.join(__dirname, '..', 'src', 'data', 'furusato_categories_comprehensive.json');
  fs.writeFileSync(outCatPath, JSON.stringify(CATEGORIES, null, 2), 'utf8');
  console.log(`Saved categories data to: ${outCatPath}`);
}

fetchLatestMunicipalities().catch(console.error);
