const fs = require('fs');
const path = require('path');

const microWave13Configs = [
  {
    slug: 'kumamoto-aso-caldera-minamiaso-stay',
    badge: 'ASO CALDERA & NATURE GUIDE',
    title: '【熊本・阿蘇カルデラ＆南阿蘇】大観峰・草千里ヶ浜＆あか牛・白川水源宿 完全ガイド',
    metaDesc: '世界最大級のカルデラ・熊本阿蘇エリア完全特化！大観峰の360度パノラマ、草千里ヶ浜の引き馬体験、名水白川水源、阿蘇五岳を望む展望温泉露天風呂、名物「あか牛丼・あか牛ステーキ会席宿」を徹底解説。',
    heroDesc: '世界最大級の火山カルデラが織りなす雄大な大地「熊本・阿蘇」。大観峰から見下ろす雲海と阿蘇五岳「涅槃像」。草千里ヶ浜のエメラルドグリーンの草原。名水・白川水源が育むヘルシーな極上「あか牛」に舌鼓を打つ大自然の旅。',
    categoryKey: 'kumamoto-aso-caldera-minamiaso-stay',
    areaGuides: [
      {
        key: 'aso_caldera_view_onsen',
        title: '1. 大観峰〜草千里ヶ浜・阿蘇中岳火口（世界最大級カルデラの絶景パノラマ）',
        timing: '通年（春〜夏の新緑草原・秋のすすきと雲海・冬の雪化粧）',
        desc: '標高936m、阿蘇カルデラと阿蘇五岳を一望する最高峰の展望台「大観峰」。噴煙を上げる中岳火口を望む「草千里ヶ浜」での引き馬体験や烏帽子岳ハイク。「阿蘇火山博物館」と火口見学道路（阿蘇パノラマライン）。',
        spots: '大観峰展望台、草千里ヶ浜（草千里展望デッキ・引き馬）、阿蘇中岳火口、道の駅阿蘇',
        access: 'JR豊肥本線「阿蘇駅」下車。熊本空港より車・バスで約50分。',
        tip: '秋の早朝（10月〜11月）には大観峰から阿蘇谷を覆い尽くす幻想的な「雲海」が高確率で発生します。'
      },
      {
        key: 'minamiaso_nature_water_stay',
        title: '2. 南阿蘇〜白川水源・トロッコ列車（毎分60トン湧出する名水と里山風景）',
        timing: '通年（清涼な名水と四季の花々）',
        desc: '環境省名水百選に選ばれ、常温14度の名水が毎分60トン自噴する「白川水源」。南阿蘇鉄道の観光トロッコ列車「ゆうすげ号」や新名所「新阿蘇大橋展望所ヨ・ミュール」。阿蘇五岳の南麓に湧く美肌の南阿蘇温泉郷。',
        spots: '白川水源（水汲み場・名水カフェ）、南阿蘇鉄道（高森駅・立野駅・第一白川橋梁）、あそ望の郷くぎの',
        access: '南阿蘇鉄道沿線。熊本市内より車で約45分。',
        tip: '白川水源ではペットボトルを持参すれば、湧き出たまろやかで澄んだ名水をそのまま持ち帰ることができます。'
      },
      {
        key: 'aso_akagyu_gourmet_stay',
        title: '3. 熊本名物「あか牛」＆極上馬刺し（赤身の旨味が凝縮された褐毛和種）',
        timing: '通年（脂肪分が少なくヘルシーでジューシーな赤身肉）',
        desc: '阿蘇の大自然で放牧され、ミネラル豊富な牧草を食べて育つ「熊本あか牛（褐毛和種）」。炭火で香ばしく焼き上げるあか牛サーロインステーキや、甘辛いタレと半熟卵が絡む「あか牛丼」。本場熊本の特選霜降り馬刺し。',
        spots: 'いまきん食堂（あか牛丼発祥店）、阿蘇とり宮（あか牛の油揚げ・コロッケ）、道の駅波野',
        access: '阿蘇・内牧温泉・南阿蘇。',
        tip: '「内牧温泉街」にはあか牛料理専門店が多数立ち並んでおり、食べ比べを楽しむのが阿蘇観光の醍醐味です。'
      }
    ]
  },
  {
    slug: 'tochigi-okunikko-yumoto-nature-stay',
    badge: 'OKUNIKKO & YUMOTO ONSEN GUIDE',
    title: '【栃木・奥日光＆湯元温泉】男体山・戦場ヶ原＆乳白色硫黄泉・日光湯波宿 完全ガイド',
    metaDesc: '奥日光の大自然と乳白色の名湯・日光湯元温泉エリア完全特化！男体山を望む「中禅寺湖」、ラムサール条約湿地「戦場ヶ原」、大迫力の「湯滝」、日本で4番目に濃い乳白色硫黄泉と伝統の日光湯波会席宿を徹底解説。',
    heroDesc: '標高1,500m、雲の上に広がる静寂の奥座敷「日光湯元温泉」。エメラルドグリーンから乳白色へと色を変える濃厚な硫黄泉。戦場ヶ原の木道トレッキングと、男体山を映す湯ノ湖畔の宿で極上の癒やしを。',
    categoryKey: 'tochigi-okunikko-yumoto-nature-stay',
    areaGuides: [
      {
        key: 'okunikko_yumoto_sulfur_onsen',
        title: '1. 日光湯元温泉〜湯ノ湖・湯畑（エメラルドグリーンから乳白色に変わる硫黄泉）',
        timing: '通年（夏の避暑・秋の全山紅葉・冬の雪見風呂と氷彫刻）',
        desc: '延暦7年（788年）勝道上人が発見したと伝わる「日光湯元温泉」。木道が敷かれた「温泉寺・湯畑」ではポコポコと源泉が湧き出す様子を間近で見学。湯ノ湖の静かな湖畔遊歩道散策と、硫黄の香りに包まれる名湯。',
        spots: '湯ノ湖遊歩道、日光山温泉寺（薬師湯・日帰り入浴）、湯元温泉源泉（湯畑）、あんよの湯（無料足湯）',
        access: 'JR日光駅・東武日光駅より東武バス「日光湯元温泉行き」で約75分。',
        tip: '「温泉寺」は全国でも珍しいお寺の中に温泉があるスポットで、参拝とともにお堂の奥で源泉かけ流しに入浴できます。'
      },
      {
        key: 'senjogahara_nature_stay',
        title: '2. 戦場ヶ原〜小田代原・湯滝（男体山を仰ぎ見る400ヘクタールの大湿原木道）',
        timing: 'グリーンシーズン：5月〜10月（ワタスゲ・高山植物・草紅葉）',
        desc: 'かつて神々が争ったという伝説が残るラムサール条約登録湿地「戦場ヶ原」。平坦な木道が整備され、男体山をバックに原生林や湿原植物を観察するハイキング。湯ノ湖から流れ落ちる落差50mの豪快な「湯滝」。',
        spots: '戦場ヶ原自然研究路（赤沼〜湯滝）、小田代原（貴婦人のシラカバ）、湯滝（滝壺レストハウス・鮎の塩焼き）',
        access: '赤沼車庫または湯滝下バス停下車。',
        tip: '湯滝の観瀑台は滝壺の目の前にあり、水しぶきとマイナスイオンを全身に浴びる大迫力スポットです。'
      },
      {
        key: 'nikko_yuba_tochigyu_gourmet',
        title: '3. 伝統「日光湯波」＆とちぎ和牛（修験道から受け継がれる精進料理と極上霜降り）',
        timing: '通年（滋味あふれる大豆の風味ととろける和牛）',
        desc: '日光の清らかな水で作られる伝統の「日光湯波（ゆば）」。二重に巻き上げたボリュームある湯波の煮物や刺身ゆば。栃木県が誇る最高級黒毛和牛「とちぎ和牛」の陶板焼き。岩魚や山菜など奥日光の豊かな恵み。',
        spots: '日光湯波専門店、日光物産館、中禅寺湖畔レストラン',
        access: '中禅寺湖・奥日光エリア。',
        tip: '京都の「湯葉」が一枚仕立てで繊細なのに対し、日光の「湯波」は二つ折りに巻き上げるため肉厚でジューシーな食感が特徴です。'
      }
    ]
  },
  {
    slug: 'nagano-matsumoto-asama-utsukushigahara-stay',
    badge: 'MATSUMOTO & UTSUKUSHIGAHARA GUIDE',
    title: '【長野・松本＆浅間温泉・美ヶ原】国宝松本城・クラフトの街＆信州そば・雲海宿 完全ガイド',
    metaDesc: '城下町文化と高原パノラマ・長野松本＆浅間温泉・美ヶ原エリア完全特化！国宝五重天守「松本城」、中町通りのなまこ壁、美ヶ原高原の雲海、飛鳥時代開湯の「浅間温泉」、手打ち信州そばと信州サーモン宿を徹底解説。',
    heroDesc: '漆黒の天守がアルプスに映える国宝「松本城」と、民藝とクラフトの息づく城下町「松本」。飛鳥時代からの歴史を誇る文人墨客の奥座敷「浅間温泉」。標高2,000mの美ヶ原高原から見下ろす雲海と、香り高い信州手打ちそばへ。',
    categoryKey: 'nagano-matsumoto-asama-utsukushigahara-stay',
    areaGuides: [
      {
        key: 'matsumoto_asama_onsen_walk',
        title: '1. 松本城〜中町通り・縄手通り（国宝の黒漆天守となまこ壁クラフト散歩）',
        timing: '通年（春の松本城桜まつり・秋の松本城太鼓まつり・冬の氷彫フェスティバル）',
        desc: '現存最古の五重六階天守を誇る国宝「松本城」。北アルプスを背景に水堀に映る漆黒の城影。白と黒の幾何学模様が美しいなまこ壁の蔵が並ぶ「中町通り」や、カエルの街「縄手通り」で雑貨やスイーツ巡り。',
        spots: '国宝松本城、中町通り（蔵シック館・民藝ショップ）、縄手通り（四柱神社・たい焼き）、松本市美術館（草間彌生コレクション）',
        access: 'JR篠ノ井線「松本駅」下車。浅間温泉まで路線バスで約20分。',
        tip: '「松本市美術館」では、松本出身の前衛芸術家・草間彌生氏の巨大な野外彫刻や水玉アートが迎えてくれます。'
      },
      {
        key: 'utsukushigahara_plateau_hotel',
        title: '2. 美ヶ原高原〜王ヶ頭・美しの塔（標高2000mの天空パノラマと大雲海）',
        timing: 'グリーンシーズン：4月下旬〜11月上旬（高山植物と放牧牛・冬の雪上車ツアー）',
        desc: '八ヶ岳中信高原国定公園の最高峰「美ヶ原高原（標高2,034m）」。北アルプス・中央アルプス・南アルプス・富士山を360度見渡す天空の楽園。朝日に照らされる雲海と、夜の満天の天の川。シンボル「美しの塔」。',
        spots: '美ヶ原高原（王ヶ頭・王ヶ鼻）、美しの塔、美ヶ原高原美術館（野外彫刻美術館）、山本小屋ふるさと館',
        access: '松本駅より美ヶ原高原直行バス運行（季節運行）、車で約60分。',
        tip: '「王ヶ鼻」の先端からは、目の前に槍ヶ岳や穂高連峰など北アルプスの全貌が迫る圧巻のパノラマが広がります。'
      },
      {
        key: 'matsumoto_soba_craft_stay',
        title: '3. 手打ち「信州そば」＆信州サーモン（アルプスの名水が育む食の芸術）',
        timing: '秋〜冬期（11月〜の新そばシーズンは特に香り高い）',
        desc: '北アルプスの清らかな伏流水と信州産そば粉で打つ、喉越し抜群の二八そばや十割そば。長野県水産試験場が開発した上品な脂ととろける食感の「信州サーモン」、信州牛の石焼きステーキと地酒「大信州」「夜明け前」。',
        spots: '松本そば祭り（秋開催）、浅間温泉手打ちそば処、松本酒蔵巡り',
        access: '松本市街・浅間温泉。',
        tip: '松本ご当地グルメ「山賊焼き（鶏もも肉をニンニク醤油タレに漬け込んで揚げた大判唐揚げ）」も大人気です。'
      }
    ]
  },
  {
    slug: 'yamaguchi-hagi-nagato-yumoto-stay',
    badge: 'HAGI & NAGATO YUMOTO GUIDE',
    title: '【山口・萩＆長門湯本温泉】維新の城下町・川床テラス＆元乃隅神社・瓦そば宿 完全ガイド',
    metaDesc: '明治維新の故郷とリノベーション温泉街・山口萩＆長門湯本温泉エリア完全特化！萩城下町の白壁・夏みかん、音信川の川床テラス、アメリカCNN絶賛の「元乃隅神社」123基鳥居、名物「瓦そば・ふぐ会席宿」を徹底解説。',
    heroDesc: '白壁となまこ壁に夏みかんが揺れる世界遺産の城下町「萩」。音信川（おとずれがわ）沿いに川床や飛び石、竹林のライトアップが広がる「長門湯本温泉」。日本海へ連なる元乃隅神社の赤い鳥居と、熱々瓦そば・ふぐ会席を味わう旅。',
    categoryKey: 'yamaguchi-hagi-nagato-yumoto-stay',
    areaGuides: [
      {
        key: 'nagato_yumoto_kawadoko_stay',
        title: '1. 長門湯本温泉〜音信川沿い（星野リゾート監修・川床と飛び石の温泉街散策）',
        timing: '通年（春の桜・初夏の川床カフェ・秋の紅葉ライトアップ）',
        desc: '開湯約600年、室町時代から続く長門湯本温泉。音信川の清流沿いに川床テラスや飛び石、足湯、竹林の階段が整備されたモダンな温泉街。公衆浴場「恩湯（おんとう）」の足元湧出岩盤風呂と、地ビール・萩焼ギャラリー巡り。',
        spots: '恩湯（立ち寄り温泉）、川床テラス（おとずれ足湯・クラフトビールバー）、竹林の階段、元乃隅神社',
        access: 'JR美祢線「長門湯本駅」下車。山口宇部空港より乗合タクシーで約70分。',
        tip: '夕暮れ時には温泉街全体が暖色系のライトアップに包まれ、川床テラスで川のせせらぎを聞きながら地ビールを味わうのが最高です。'
      },
      {
        key: 'hagi_castle_heritage_walk',
        title: '2. 萩城下町〜松下村塾（世界遺産の白壁となまこ壁・明治維新胎動の地）',
        timing: '通年（歴史散歩と萩焼窯元めぐり）',
        desc: '江戸時代の町割りがそのまま残る「萩城下町」。重厚な武家屋敷の白壁からのぞく黄色い夏みかんのコントラスト。吉田松陰が指導した「松下村塾（世界文化遺産）」や高杉晋作・木戸孝允の生家をめぐる維新浪漫。',
        spots: '萩城下町（菊屋家住宅・木戸孝允旧宅）、松陰神社（松下村塾・至誠館）、萩城跡指月公園、萩焼会館',
        access: 'JR山陰本線「東萩駅」下車。長門湯本温泉より車で約35分。',
        tip: '萩城下町はレンタサイクルでの散策が快適で、夏みかんソフトクリームや夏みかんピールのお土産が名物です。'
      },
      {
        key: 'yamaguchi_kawarasoba_fugu_stay',
        title: '3. 山口名物「瓦そば」＆日本海のふぐ（熱々の日本瓦で焼く茶そばの香ばしさ）',
        timing: '通年（秋〜冬の天然とらふぐ解禁シーズン）',
        desc: '熱した日本瓦の上に茶そば、錦糸卵、甘辛い牛肉、ネギ、レモン、もみじおろしを乗せて食べる山口名物「瓦そば」。下関や仙崎港直送の「ふぐ刺し・ふぐちり鍋」。長州黒かしわや長州藤光ポークなど山口の極上グルメ。',
        spots: '元祖瓦そば たかせ、仙崎人工島（センザキッチン・金子みすゞ記念館）、道の駅萩しーまーと',
        access: '長門・萩エリア。',
        tip: '瓦そばは、最初はそのままつゆにつけて、途中でレモンともみじおろしをつゆに絞って味変するのが本場の美味しい食べ方です。'
      }
    ]
  },
  {
    slug: 'hokkaido-furano-biei-lavender-stay',
    badge: 'FURANO & BIEI NATURE GUIDE',
    title: '【北海道・富良野＆美瑛】青い池・ファーム富田ラベンダー＆白金温泉・富良野牛宿 完全ガイド',
    metaDesc: 'パッチワークの丘と紫の絨毯・北海道富良野＆美瑛エリア完全特化！「ファーム富田」のラベンダー畑、神秘のコバルトブルー「白金青い池」、白ひげの滝、源泉100%白金温泉、ふらの和牛・富良野メロン会席宿を徹底解説。',
    heroDesc: '見渡す限りの紫の絨毯と色彩豊かなパッチワークの丘「北海道・富良野美瑛」。ファーム富田のラベンダーの香り。神秘的なエメラルドブルーを湛える「白金の青い池」。大雪山連峰を望む白金温泉と、極上のふらの和牛に包まれる旅。',
    categoryKey: 'hokkaido-furano-biei-lavender-stay',
    areaGuides: [
      {
        key: 'furano_lavender_farm_stay',
        title: '1. ファーム富田〜中富良野（見渡す限りの紫のグラデーションとラベンダーソフト）',
        timing: '夏期：6月下旬〜8月上旬（7月中旬〜下旬がラベンダーの満開ピーク）',
        desc: '日本最大級のラベンダー畑が広がる「ファーム富田」。色とりどりの花々が丘の斜面に虹のように咲く「彩りの畑」。十勝岳連峰を借景にした圧巻の風景美。ラベンダーエッセンシャルオイル抽出工房の見学。',
        spots: 'ファーム富田（トラディショナルラベンダー畑・彩りの畑・ポプリの舎）、フラワーランドかみふらの、かんのファーム',
        access: 'JR富良野線「ラベンダー畑駅（季節臨時駅）」下車徒歩7分。旭川空港より車で約45分。',
        tip: 'ファーム富田の「ラベンダーソフトクリーム」は、爽やかな香りと優しい甘みで夏の富良野観光の必食スイーツです。'
      },
      {
        key: 'biei_blue_pond_shirogane',
        title: '2. 白金青い池〜白ひげの滝・四季彩の丘（神秘のコバルトブルーとパッチワークの丘）',
        timing: '通年（新緑の初夏・夏の青い水面・冬の雪景色とライトアップ）',
        desc: '立ち枯れたカラマツと幻想的な青い水面が世界的に有名な「白金青い池」。地下水が岩肌から白い髭のように湧き出る「白ひげの滝」。「パッチワークの路」「四季彩の丘」で巡る広大なロールベールアート。',
        spots: '白金青い池、白ひげの滝（ブルーリバー）、四季彩の丘（ノロッコ号・アルパカ牧場）、セブンスターの木・ケンとメリーの木',
        access: '美瑛駅より道北バスで約20分。',
        tip: '青い池は、晴れた風のない日の午前中に訪れると、水面が最も鮮やかなコバルトブルーに輝きます。'
      },
      {
        key: 'furano_beef_melon_gourmet',
        title: '3. プレミアム「ふらの和牛」＆富良野メロン（大自然の恵みを味わう北海道美食）',
        timing: '通年（夏秋の富良野メロン・新じゃが・秋野菜）',
        desc: '大雪山系の伏流水と厳しい寒暖差の中で育つブランド黒毛和牛「ふらの和牛」。糖度15度を超えるジューシーな「富良野メロン」、富良野チーズ工房の搾りたてミルクとワインチェダーチーズ。地元ワインとのマリアージュ。',
        spots: '富良野チーズ工房（ピッツァ工房・アイス工房）、ふらのワインハウス、カンパーニュ工房',
        access: '富良野市街・美瑛エリア。',
        tip: '「ふらのワインハウス」の高台レストランでは、富良野盆地と十勝岳連峰のパノラマを眺めながらチーズフォンデュをいただけます。'
      }
    ]
  }
];

function generatePageTsx(config) {
  return `import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "${config.title} ｜ 日本全国・旅宿クラウド",
  description: "${config.metaDesc}",
  keywords: ["${config.slug}", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["${config.categoryKey}"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for ${config.categoryKey}", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = ${JSON.stringify(config.areaGuides, null, 2)};

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ${config.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            ${config.title}
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            ${config.heroDesc}
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-emerald-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 観光・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめ見どころ・スポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 満足度を高める滞在のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}周辺のおすすめ厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-950/5">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">
                              ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                            </span>
                          )}
                        </div>

                        <div className="p-4 space-y-2">
                          {hotel.reviewAverage > 0 && (
                            <div className="flex items-center justify-between text-[9px] font-bold text-amber-600">
                              <span>⭐ {hotel.reviewAverage}点（{hotel.reviewCount}件）</span>
                            </div>
                          )}
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-emerald-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-emerald-950/70 line-clamp-2 font-medium">
                              {hotel.hotelSpecial}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="p-4 pt-0">
                        <a
                          href={hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで宿泊プラン・空室を見る
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 47都道府県トップへのリンク */}
      <div className="text-center pt-8">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
`;
}

for (const cfg of microWave13Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated micro tourist hub page: /${cfg.slug}`);
}
