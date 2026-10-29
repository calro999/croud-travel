const fs = require('fs');
const path = require('path');

const rawDataPath = path.join(__dirname, '5_killer_articles_live_data.json');
const rawData = JSON.parse(fs.readFileSync(rawDataPath, 'utf8'));

// 補正データ追加
const additionalHotels = {
  "winter-crab-season-matsuba-echizen-onsen-hotels-guide": {
    hotelNo: 6205,
    hotelName: "三国温泉　展望自慢の料理旅館　はれや旅館",
    hotelKanaName: "みくにおんせん　てんぼうじまんのりょうりりょかん　はれやりょかん",
    hotelInformationUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6205%2F6205.html",
    hotelImageUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/6205/6205.jpg",
    hotelThumbnailUrl: "https://img.travel.rakuten.co.jp/HIMG/90/6205.jpg",
    roomImageUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/6205/6205_kan1.jpg",
    reviewCount: 420,
    reviewAverage: 4.41,
    hotelMinCharge: 19800,
    address1: "福井県",
    address2: "坂井市三国町宿2-16-11",
    telephoneNo: "0776-82-3222",
    access: "えちぜん鉄道　三国港駅より車で３分／北陸自動車道　金津ＩＣより車で２５分",
    parkingInformation: "有り　２５台　無料　予約不要",
    nearestStation: "三国港",
    hotelSpecial: "全室オーシャンビュー！日本海を望む展望風呂と三国港直送の越前がに・獲れたて鮮魚が自慢の宿。",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6205%2F6205.html"
  },
  "autumn-winter-shirakawago-okuhida-takayama-hotels-guide": {
    hotelNo: 63413,
    hotelName: "奥飛騨温泉郷　花ごころ万喜（ばんき）",
    hotelKanaName: "おくひだおんせんきょう　はなごころばんき",
    hotelInformationUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F63413%2F63413.html",
    hotelImageUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/63413/63413.jpg",
    hotelThumbnailUrl: "https://img.travel.rakuten.co.jp/HIMG/90/63413.jpg",
    roomImageUrl: "https://img.travel.rakuten.co.jp/share/HOTEL/63413/63413_kan1.jpg",
    reviewCount: 382,
    reviewAverage: 4.38,
    hotelMinCharge: 16500,
    address1: "岐阜県",
    address2: "高山市奥飛騨温泉郷村上585-61",
    telephoneNo: "0578-89-2666",
    access: "ＪＲ高山駅より新穂高行き濃飛バス約６０分、一宝水下車徒歩２分／長野道松本ＩＣより約７５分",
    parkingInformation: "有り　１０台　無料　先着順",
    nearestStation: "高山",
    hotelSpecial: "全６室の静かな隠れ宿。源泉かけ流しの貸切露天風呂と飛騨牛づくしの手作り懐石が評判。",
    affiliateUrl: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F63413%2F63413.html"
  }
};

const additionalWiki = {
  "永観堂禅林寺": {
    title: "禅林寺 (京都市)",
    extract: "禅林寺（ぜんりんじ）は、京都市左京区永観堂町にある浄土宗西山禅林寺派の総本山の寺院。山号は聖衆来迎山（しょうじゅらいごうさん）。本尊は阿弥陀如来（見返り阿弥陀）。「永観堂」（えいかんどう）の通称で広く知られ、古くから『秋はもみじの永観堂』と称される紅葉の名所として名高い。",
    thumbnail: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Eikando_Somon.jpg/640px-Eikando_Somon.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  }
};

if (!rawData["winter-crab-season-matsuba-echizen-onsen-hotels-guide"].hotels.find(h => h.hotelNo === 6205)) {
  rawData["winter-crab-season-matsuba-echizen-onsen-hotels-guide"].hotels.push(additionalHotels["winter-crab-season-matsuba-echizen-onsen-hotels-guide"]);
}
if (!rawData["autumn-winter-shirakawago-okuhida-takayama-hotels-guide"].hotels.find(h => h.hotelNo === 63413)) {
  rawData["autumn-winter-shirakawago-okuhida-takayama-hotels-guide"].hotels.push(additionalHotels["autumn-winter-shirakawago-okuhida-takayama-hotels-guide"]);
}
rawData["autumn-kyoto-momiji-lightup-eikando-kiyomizu-hotels-guide"].wiki["永観堂禅林寺"] = additionalWiki["永観堂禅林寺"];

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');
const ROOT_DIR = path.join(__dirname, '..');

// Helper to escape html if needed
function escapeHtml(str) {
  return (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

module.exports = { rawData, POSTS_DIR, ROOT_DIR, escapeHtml };
