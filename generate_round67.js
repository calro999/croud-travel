const fs = require('fs');
const path = require('path');

const hotelsData = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

// 4記事の構成定義
const articles = [
  {
    slug: 'furusato-tax-dog-friendly-luxury-onsen-stay',
    componentName: 'FurusatoDogFriendlyLuxuryStayPage',
    tag: '愛犬・ペット同伴客室露天＆広大ドッグラン特集',
    title: '愛犬と泊まる極上客室露天風呂＆広大ドッグラン温泉宿×ふるさと納税完全ガイド【2026年最新】伊豆高原・那須高原・琵琶湖',
    shortTitle: '愛犬同伴の客室露天温泉＆ドッグラン名宿特集',
    description: '大切な愛犬（ペット）と一緒に贅沢な温泉旅行を満喫！伊豆高原の全室露天風呂付き英国調洋館「別邸 石の家」、那須高原の森に包まれた巨大温泉リゾート「ホテルサンバレー那須」、琵琶湖畔のラグジュアリーステイ「琵琶湖マリオットホテル」。ドッグラン・愛犬用アメニティ・客室同伴食事など愛犬家の夢を叶える名宿に、楽天ふるさと納税トラベルクーポンで実質2,000円負担で宿泊する完全ガイド。',
    hotels: [
      { key: 'izu_dog_resort', area: '静岡県伊東市（伊豆高原）', feature: '全室専用露天風呂付き・英国マナーハウス調の隠れ家で愛犬と部屋食美食' },
      { key: 'nasu_dog_resort', area: '栃木県那須町（那須高原）', feature: '高原の豊かな自然に包まれたドッグラン＆多彩な源泉めぐりスパリゾート' },
      { key: 'biwako_dog_resort', area: '滋賀県守山市（琵琶湖畔）', feature: '琵琶湖の美景を愛犬と散策・世界水準の快適空間と温泉露天風呂付きドッグフレンドリールーム' }
    ]
  },
  {
    slug: 'furusato-tax-fujisan-view-luxury-open-air-bath-stay',
    componentName: 'FurusatoFujisanViewLuxuryStayPage',
    tag: '富士山絶景ビュー天空露天風呂＆名旅館特集',
    title: '富士山を望む絶景露天風呂＆天空テラスの至高の宿×ふるさと納税完全ガイド【2026年最新】河口湖・山中湖・西伊豆土肥',
    shortTitle: '富士山ビュー天空露天風呂＆絶景名宿特集',
    description: '日本人の心のふるさと「霊峰富士」を湯船から一望する至福の絶景露天風呂ステイ！河口湖畔に佇み富士と湖のパノラマを望む「大池ホテル」、富士吉田の広大な日本庭園と露天風呂から富士を仰ぐ名門「ホテル鐘山苑」、駿河湾越しに夕陽と富士のシルエットが浮かぶ西伊豆「土肥ふじやホテル」。楽天ふるさと納税トラベルクーポンを活用し、実質2,000円負担で極上パノラマに抱かれる贅沢な旅の全ノウハウ。',
    hotels: [
      { key: 'kawaguchiko_fuji_view', area: '山梨県富士河口湖町（河口湖）', feature: '湖越しに雄大な富士山を仰ぐ展望露天風呂と富士桜ポークなど甲斐の旬味' },
      { key: 'yamanakako_fuji_view', area: '山梨県富士吉田市（山中湖周辺）', feature: '二万五千坪の名庭園と富士山を真正面に望む天空露天風呂「こもれびの湯」' },
      { key: 'izu_fuji_view', area: '静岡県伊豆市（西伊豆・土肥温泉）', feature: '黄金色の駿河湾サンセットと海の向こうにそびえる富士山を眺める展望大浴場' }
    ]
  },
  {
    slug: 'furusato-tax-onsen-steam-natural-hotspring-healing-stay',
    componentName: 'FurusatoOnsenSteamHealingStayPage',
    tag: '湯煙立ち上る温泉街・地獄蒸し＆天然砂むし湯治特集',
    title: '湯煙たなびく温泉街・名物地獄蒸し＆天然砂むし極上湯治宿×ふるさと納税完全ガイド【2026年最新】別府鉄輪・指宿・雲仙',
    shortTitle: '湯煙の温泉街・地獄蒸し＆砂むし湯治名宿特集',
    description: '地球の鼓動を感じる蒸気と湧出量日本一の湯力に癒やされる！別府鉄輪温泉の湯治文化と地熱スチーム料理を味わう「旅館 さくら屋」、錦江湾の波打ち際で天然砂むし温泉と元禄風呂を誇る指宿「指宿白水館」、立ち上る雲仙地獄の白煙とおしどりの池を望む名旅館「東園」。日本の伝統的な温泉文化と地熱エネルギーの恵みを、楽天ふるさと納税トラベルクーポンで賢く実質2,000円で体験する湯治旅手引書。',
    hotels: [
      { key: 'beppu_kannawa_steam', area: '大分県別府市（鉄輪温泉）', feature: 'もうもうと湯煙が立ち上るレトロな湯治場・自家源泉の蒸気で蒸し上げる地獄蒸し体験' },
      { key: 'ibusuki_sand_bath', area: '鹿児島県指宿市（指宿温泉）', feature: '波音を聞きながら温かい砂に埋もれる名物砂むし温泉＆浮世絵の世界観を再現した大浴場' },
      { key: 'unzen_jigoku_steam', area: '長崎県雲仙市（雲仙温泉）', feature: '硫黄の香る雲仙地獄と静かなおしどりの池の絶景・乳白色の濃厚な硫黄泉と四季の会席料理' }
    ]
  },
  {
    slug: 'furusato-tax-seasonal-fruit-picking-vineyard-onsen-stay',
    componentName: 'FurusatoSeasonalFruitPickingStayPage',
    tag: '旬のフルーツ狩り・果樹園＆ワイナリー温泉宿特集',
    title: '果樹園の旬フルーツ狩り＆名門ワイナリー・美肌温泉宿×ふるさと納税完全ガイド【2026年最新】石和・伊豆長岡・飯坂',
    shortTitle: 'フルーツ王国果樹園＆ワイナリー美肌温泉特集',
    description: '桃・ぶどう・完熟いちご・蜜入りりんご！日本屈指のフルーツ王国で採れたて果実の芳醇な甘みと名湯を堪能する大人の贅沢旅。甲州ワインの聖地・笛吹市石和温泉の老舗「みなもと旅館」、紅ほっぺなど章姫いちご狩り天国の伊豆の国市「招福の宿 ゑびすや」、福島フルーツラインの果樹園群と摺上川の渓谷美「飯坂温泉 摺上亭 大鳥」。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ果実美酒温泉ステイ。',
    hotels: [
      { key: 'fuefuki_fruit_wine', area: '山梨県笛吹市（石和温泉）', feature: '桃や葡萄の果樹園が広がる日本屈指の果樹地帯・甲州ワインとアルカリ性単純温泉の美肌湯' },
      { key: 'izu_strawberry_onsen', area: '静岡県伊豆の国市（伊豆長岡温泉）', feature: '甘み際立つ完熟いちご狩り農園へのアクセス抜群・古奈温泉の名湯と旬の駿河湾会席' },
      { key: 'shinshu_apple_orchard', area: '福島県福島市（飯坂温泉）', feature: 'フルーツ王国ふくしまの桃・梨・りんご街道・自家源泉を引く広々とした露天風呂と旬菜料理' }
    ]
  }
];

console.log('Loaded config for 4 articles.');
