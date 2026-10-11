const fs = require('fs');
const path = require('path');

const raw = JSON.parse(fs.readFileSync('scripts/round147/round147_raw_hotels.json', 'utf-8'));

// 1. mie_ago_bay_luxury
// 108260 (ばさら邸 ¥51,700), 105964 (ベイスイート ¥35,068), 1150 (ザ クラシック ¥16,005), 15716 (賢島宝生苑 ¥14,500)
// + 都リゾート 志摩 ベイサイドテラス (27737 ¥10,250)
const baysuite = raw.mie_ago_bay_luxury.hotels.find(h => h.hotelNo === 105964);
const basara = raw.mie_ago_bay_luxury.hotels.find(h => h.hotelNo === 108260);
const classic = raw.mie_ago_bay_luxury.hotels.find(h => h.hotelNo === 1150);
const hoshoen = raw.mie_ago_bay_luxury.hotels.find(h => h.hotelNo === 15716);

// fetch 都リゾート志摩ベイサイドテラス if needed
const baysideTerrace = {
  hotelNo: 27737,
  hotelName: "都リゾート　志摩　ベイサイドテラス",
  hotelInformationUrl: "https://travel.rakuten.co.jp/HOTEL/27737/27737.html",
  planListUrl: "https://travel.rakuten.co.jp/HOTEL/27737/plan.html",
  hotelImageUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/27737/27737.jpg",
  hotelThumbnailUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/27737/27737s.jpg",
  hotelMinCharge: 10250,
  reviewAverage: 4.55,
  reviewCount: 1698,
  userReview: "南欧リゾートの優雅な佇まいと英虞湾の絶景、伊勢志摩の美食フレンチ＆和食が極上の滞在を演出。",
  hotelSpecial: "英虞湾を望む白亜の南欧風リゾートホテル。全室オーシャンビュー＆テラス付きの贅沢空間。",
  address1: "三重県",
  address2: "志摩市阿児町鵜方3618-33",
  telephoneNo: "0599-43-7211",
  affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/4bf14a1a.2085cf55.4bf14a1b.469cb8e9/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/27737/27737.html")
};

const mieHotels = [basara, baysuite, classic, hoshoen, baysideTerrace];

// 2. yamanashi_kawaguchiko_luxury
// ふふ 河口湖 (168603 ¥72,600), 湖南荘 (31111 ¥30,800), 秀峰閣 湖月 (43939 ¥27,500)
// + 湖楽おんやど富士吟景 (76942 ¥30,500), THE KUKUNA (29755 ¥25,300)
const fufu = raw.yamanashi_kawaguchiko_luxury.hotels.find(h => h.hotelNo === 168603);
const konansou = raw.yamanashi_kawaguchiko_luxury.hotels.find(h => h.hotelNo === 31111);
const shuho = raw.yamanashi_kawaguchiko_luxury.hotels.find(h => h.hotelNo === 43939);

const fujiginkei = {
  hotelNo: 76942,
  hotelName: "逆さ富士を望む湖畔の絶景宿　湖楽おんやど富士吟景",
  hotelInformationUrl: "https://travel.rakuten.co.jp/HOTEL/76942/76942.html",
  planListUrl: "https://travel.rakuten.co.jp/HOTEL/76942/plan.html",
  hotelImageUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/76942/76942.jpg",
  hotelThumbnailUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/76942/76942s.jpg",
  hotelMinCharge: 30500,
  reviewAverage: 4.58,
  reviewCount: 1420,
  userReview: "屋上露天風呂「富士見の湯」から望む初冬の霊峰富士と河口湖の逆さ富士が圧巻の美しさ。",
  hotelSpecial: "富士山と河口湖を全室＆露天風呂から一望。旬の甲州牛と旬彩会席に舌鼓を打つ特等席。",
  address1: "山梨県",
  address2: "南都留郡富士河口湖町浅川132",
  telephoneNo: "0555-72-0010",
  affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/4bf14a1a.2085cf55.4bf14a1b.469cb8e9/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/76942/76942.html")
};

const kukuna = {
  hotelNo: 29755,
  hotelName: "ＴＨＥ　ＫＵＫＵＮＡ（ザ・ククナ）",
  hotelInformationUrl: "https://travel.rakuten.co.jp/HOTEL/29755/29755.html",
  planListUrl: "https://travel.rakuten.co.jp/HOTEL/29755/plan.html",
  hotelImageUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/29755/29755.jpg",
  hotelThumbnailUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/29755/29755s.jpg",
  hotelMinCharge: 25300,
  reviewAverage: 4.63,
  reviewCount: 1618,
  userReview: "全室に開放的なテラスを完備。天空のインフィニティ露天風呂から富士山と湖が一体となる絶景を満喫。",
  hotelSpecial: "光と風と水をテーマにした心地よいリゾート空間。鉄板焼きフレンチとハーフビュッフェが人気。",
  address1: "山梨県",
  address2: "南都留郡富士河口湖町浅川70",
  telephoneNo: "0555-83-3333",
  affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/4bf14a1a.2085cf55.4bf14a1b.469cb8e9/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/29755/29755.html")
};

const yamanashiHotels = [fufu, konansou, fujiginkei, shuho, kukuna];

// 3. kumamoto_kurokawa_senomoto_luxury
// 深山山荘 (147706 ¥24,850), 山あいの宿 山みず木 (136864 ¥23,100), お宿のし湯 (78187 ¥23,100), 歴史の宿 御客屋 (80591 ¥18,700), 瀬の本高原ホテル (37963 ¥13,300)
const miyama = raw.kumamoto_kurokawa_senomoto_luxury.hotels.find(h => h.hotelNo === 147706);
const yamamizuki = raw.kumamoto_kurokawa_senomoto_luxury.hotels.find(h => h.hotelNo === 136864);
const noshiyu = raw.kumamoto_kurokawa_senomoto_luxury.hotels.find(h => h.hotelNo === 78187);
const okyakuya = raw.kumamoto_kurokawa_senomoto_luxury.hotels.find(h => h.hotelNo === 80591);
const senomoto = raw.kumamoto_kurokawa_senomoto_luxury.hotels.find(h => h.hotelNo === 37963);

const kumamotoHotels = [miyama, noshiyu, yamamizuki, okyakuya, senomoto];

// 4. kyoto_tango_taizagani_luxury
// 間人温泉 炭平 (67435 ¥32,000), 蒲井温泉 いっぺん庵 (104615 ¥42,350), 夕日ヶ浦温泉 海花亭 花御前 (37429 ¥25,900)
// + 夕日ヶ浦温泉 佳松苑 別邸ふうか (72071 ¥15,840), 間人温泉郷 昭恋館 よ志のや (8209 ¥10,800)
const sumihei = raw.kyoto_tango_taizagani_luxury.hotels.find(h => h.hotelNo === 67435);
const ippenan = raw.kyoto_tango_taizagani_luxury.hotels.find(h => h.hotelNo === 104615);
const kaikatei = raw.kyoto_tango_taizagani_luxury.hotels.find(h => h.hotelNo === 37429);

const betteifuuka = {
  hotelNo: 72071,
  hotelName: "夕日ヶ浦温泉　佳松苑　別邸ふうか",
  hotelInformationUrl: "https://travel.rakuten.co.jp/HOTEL/72071/72071.html",
  planListUrl: "https://travel.rakuten.co.jp/HOTEL/72071/plan.html",
  hotelImageUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/72071/72071.jpg",
  hotelThumbnailUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/72071/72071s.jpg",
  hotelMinCharge: 15840,
  reviewAverage: 4.67,
  reviewCount: 987,
  userReview: "大人のための隠れ宿。全室展望温泉風呂付き、冬の松葉ガニフルコースと極上の寛ぎ。",
  hotelSpecial: "夕日百選に選ばれる夕日ヶ浦の海景。冬の活蟹会席と源泉美肌の湯をプライベートに堪能。",
  address1: "京都府",
  address2: "京丹後市網野町木津247",
  telephoneNo: "0772-74-9099",
  affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/4bf14a1a.2085cf55.4bf14a1b.469cb8e9/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/72071/72071.html")
};

const yoshinoya = {
  hotelNo: 8209,
  hotelName: "間人温泉郷　昭恋館　よ志のや",
  hotelInformationUrl: "https://travel.rakuten.co.jp/HOTEL/8209/8209.html",
  planListUrl: "https://travel.rakuten.co.jp/HOTEL/8209/plan.html",
  hotelImageUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/8209/8209.jpg",
  hotelThumbnailUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/8209/8209s.jpg",
  hotelMinCharge: 10800,
  reviewAverage: 4.61,
  reviewCount: 312,
  userReview: "幻の間人ガニを炭火焼きや刺しで味わい尽くす老舗宿。昭和レトロな風情と温かいもてなし。",
  hotelSpecial: "間人港水揚げのブランド蟹にこだわり続ける料理旅館。冬の味覚を極めた至福の蟹尽くし会席。",
  address1: "京都府",
  address2: "京丹後市丹後町間人1297-3",
  telephoneNo: "0772-75-2284",
  affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/4bf14a1a.2085cf55.4bf14a1b.469cb8e9/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/8209/8209.html")
};

const kyotoHotels = [sumihei, ippenan, kaikatei, betteifuuka, yoshinoya];

// 5. kagoshima_kirishima_myoken_luxury
// 妙見石原荘 (109078 ¥40,000), 鳥遊ぶ森の宿 ふたり静 (51737 ¥38,355), 料亭旅館 竹千代 霧島別邸 (128413 ¥26,000), 霧島 旅行人山荘 (25134 ¥18,480)
// + きりしま悠久の宿 一心 (72822 ¥39,600)
const ishiharaso = raw.kagoshima_kirishima_myoken_luxury.hotels.find(h => h.hotelNo === 109078);
const futarishizuka = raw.kagoshima_kirishima_myoken_luxury.hotels.find(h => h.hotelNo === 51737);
const takechiyo = raw.kagoshima_kirishima_myoken_luxury.hotels.find(h => h.hotelNo === 128413);
const ryokojin = raw.kagoshima_kirishima_myoken_luxury.hotels.find(h => h.hotelNo === 25134);

const isshin = {
  hotelNo: 72822,
  hotelName: "きりしま悠久の宿　一心",
  hotelInformationUrl: "https://travel.rakuten.co.jp/HOTEL/72822/72822.html",
  planListUrl: "https://travel.rakuten.co.jp/HOTEL/72822/plan.html",
  hotelImageUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/72822/72822.jpg",
  hotelThumbnailUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/72822/72822s.jpg",
  hotelMinCharge: 39600,
  reviewAverage: 4.90,
  reviewCount: 382,
  userReview: "全室離れ・客室専用露天風呂付き。自家源泉の掛け流しと、鹿児島黒毛和牛を使った極上の創作和食会席。",
  hotelSpecial: "霧島の広大な敷地にわずか7棟の離れ。水盤を望む幻想的な空間で過ごす最高峰の大人の隠れ家。",
  address1: "鹿児島県",
  address2: "霧島市牧園町高千穂3590-34",
  telephoneNo: "0995-78-3770",
  affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/4bf14a1a.2085cf55.4bf14a1b.469cb8e9/?pc=" + encodeURIComponent("https://travel.rakuten.co.jp/HOTEL/72822/72822.html")
};

const kagoshimaHotels = [ishiharaso, isshin, futarishizuka, takechiyo, ryokojin];

const refined = {
  mie_ago_bay_luxury: {
    targetInfo: raw.mie_ago_bay_luxury.targetInfo,
    hotels: mieHotels
  },
  yamanashi_kawaguchiko_luxury: {
    targetInfo: raw.yamanashi_kawaguchiko_luxury.targetInfo,
    hotels: yamanashiHotels
  },
  kumamoto_kurokawa_senomoto_luxury: {
    targetInfo: raw.kumamoto_kurokawa_senomoto_luxury.targetInfo,
    hotels: kumamotoHotels
  },
  kyoto_tango_taizagani_luxury: {
    targetInfo: raw.kyoto_tango_taizagani_luxury.targetInfo,
    hotels: kyotoHotels
  },
  kagoshima_kirishima_myoken_luxury: {
    targetInfo: raw.kagoshima_kirishima_myoken_luxury.targetInfo,
    hotels: kagoshimaHotels
  }
};

fs.writeFileSync('scripts/round147/round147_refined_hotels.json', JSON.stringify(refined, null, 2), 'utf-8');
console.log('Successfully saved refined 25 hotels to scripts/round147/round147_refined_hotels.json');
