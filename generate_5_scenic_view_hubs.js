const fs = require('fs');
const path = require('path');

const scenicViewConfigs = [
  {
    slug: 'japan-top-night-view-luxury-hotel-stay',
    badge: 'JAPAN TOP NIGHT VIEW GUIDE',
    title: '【日本三大夜景＆摩天楼パノラマ宿】函館・長崎・神戸・横浜・東京高層ホテル 完全ガイド',
    metaDesc: '息を呑む1000万ドルの夜景完全特化！函館山を望むベイサイド、長崎稲佐山のすり鉢状パノラマ、神戸六甲山・ハーバーランド、横浜みなとみらい、東京ベイエリア高層階客室の展望露天風呂ホテルを徹底解説。',
    heroDesc: '部屋の明かりを消した瞬間、目の前に広がる光の宝石箱！世界新三大夜景「長崎」、日本三大夜景「函館・神戸」、そして横浜・東京の煌めく摩天楼。シャンパンを傾けながら夜景に包まれるロマンチックな極上ステイへ。',
    categoryKey: 'japan-top-night-view-luxury-hotel-stay',
    areaGuides: [
      {
        key: 'hakodate_nagasaki_nightview',
        title: '1. 函館山＆長崎稲佐山（世界新三大夜景と扇状に広がる光の絨毯）',
        timing: '通年（日没後30分〜1時間の「マジックアワー」が最も幻想的）',
        desc: '津軽海峡と函館湾に挟まれたくびれが美しい「函館山からの夜景」。すり鉢状の地形に家々の明かりが立体的に煌めく「長崎・稲佐山からの夜景（世界新三大夜景）」。客室や屋上展望台から光の海を見下ろす贅沢。',
        spots: '函館山山頂展望台、長崎稲佐山山頂展望テラス、グラバー園ライトアップ、鍋冠山公園',
        access: '函館駅・長崎駅周辺から車・ロープウェイで約10〜15分。',
        tip: '日没の20分前頃から部屋のカーテンを開けて待機すると、空が深い青から紫へと変わり街の灯りが一斉に点灯する感動的な瞬間を見届けられます。'
      },
      {
        key: 'kobe_yokohama_harbor_nightview',
        title: '2. 神戸ハーバーランド＆横浜みなとみらい（海と光が織りなす1000万ドルの港夜景）',
        timing: '通年（クリスマス・年末年始・イルミネーション期間はさらに華やか）',
        desc: 'ポートタワーや海洋博物館が照らされる「神戸ウォーターフロント」と六甲山からのパノラマ。コスモクロック21（大観覧車）やベイブリッジを望む「横浜みなとみらい」。バルコニー付き客室で潮風と夜景を満喫。',
        spots: '神戸ハーバーランドumie、メリケンパーク、横浜みなとみらい21、万国橋、大さん橋',
        access: '神戸三宮・元町駅、横浜・桜木町・みなとみらい駅至近。',
        tip: 'バルコニー付きのお部屋を予約すると、心地よい夜風を感じながらプライベート空間で夜景とドリンクを楽しめます。'
      },
      {
        key: 'tokyo_skyscraper_luxury_nightview',
        title: '3. 東京摩天楼＆東京タワービュー（高層階から見下ろす首都のダイナミズム）',
        timing: '通年（空気の澄んだ秋〜冬は遠く富士山のシルエットも）',
        desc: '地上30階以上の高層階に位置するラグジュアリーホテル。眼下に広がるビル群の光の海、赤くライトアップされた東京タワーやレインボーブリッジ。クラブラウンジでイブニングカクテルを味わいながら過ごす特別な夜。',
        spots: '東京タワー、レインボーブリッジ、お台場ベイエリア、六本木ヒルズ展望台、渋谷スクランブルスクエア',
        access: '都内主要ターミナル駅直結・至近。',
        tip: '東京タワーが見える「東京タワービュー確約プラン」を選ぶと、記念日やプロポーズのサプライズに最高の演出ができます。'
      }
    ]
  },
  {
    slug: 'japan-starry-sky-astrophotography-resort-stay',
    badge: 'STARRY SKY & ASTROPHOTOGRAPHY GUIDE',
    title: '【満天の星空＆星空案内人の宿】阿智村・野辺山・石垣島＆星空露天風呂 完全ガイド',
    metaDesc: '環境省認定の日本一の星空完全特化！長野「阿智村」、八ヶ岳「野辺山高原」、星空保護区「石垣島・西表島」、岡山「美星町」、星空案内人（星ソムリエ）の天体観測ツアーと屋上星空テラス温泉宿を徹底解説。',
    heroDesc: '人工の光が届かない満天のプラネタリウム「星降る宿」。環境省認定日本一の星空・阿智村ナイトツアー、八ヶ岳野辺山高原の巨大電波望遠鏡、南十字星が輝く八重山諸島。天の川を眺めながら湯船に浸かる神秘の夜へ。',
    categoryKey: 'japan-starry-sky-astrophotography-resort-stay',
    areaGuides: [
      {
        key: 'achi_starry_sky_luxury_stay',
        title: '1. 長野・阿智村〜昼神温泉（環境省認定「日本一の星空」ナイトツアー）',
        timing: '通年（特に新月期やペルセウス座・ふたご座流星群の時期は圧巻）',
        desc: '環境省が実施した全国星空継続観察で「星が最も輝いて見える場所」第1位に認定された阿智村。ヘブンスそのはら天空の楽園ナイトツアーでは、ゴンドラで標高1,400mへ上がり一斉に消灯。美肌の昼神温泉での至福の湯浴み。',
        spots: '富士見台高原ヘブンスそのはら（天空の楽園 ナイトツアー）、浪合パーク（星空デッキ）、昼神温泉足湯',
        access: 'JR飯田線「飯田駅」より路線バス約30分。中央道「飯田山本IC」より約10分。',
        tip: 'ナイトツアー参加時は、春・秋・冬はもちろん、夏でも山頂は気温が10度近くまで下がるため、厚手の防寒着やブランケットが必須です。'
      },
      {
        key: 'nobeyama_yatsugatake_stars_stay',
        title: '2. 八ヶ岳・野辺山高原〜美星町（標高1300mの澄んだ大気と巨大電波望遠鏡）',
        timing: '通年（秋〜冬期は空気が澄み天の川の微細な星屑まで肉眼で見える）',
        desc: '国立天文台野辺山宇宙電波観測所が置かれるほど星空観測に適した「野辺山高原」。星空案内人（星ソムリエ）が常駐し、大型天体望遠鏡で土星の輪や木星の衛星を案内してくれるホテル。光害防止条例第1号の岡山県美星町。',
        spots: '国立天文台野辺山、野辺山SLランド跡、八ヶ岳自然文化園、美星天文台（岡山県）',
        access: 'JR小海線「野辺山駅」下車。中央道「須玉IC」より約30分。',
        tip: 'スマートフォンで星空を綺麗に撮影するには、三脚でスマホを固定し「夜景モード（露光時間10〜30秒）」に設定するのがポイントです。'
      },
      {
        key: 'ishigaki_starry_island_resort',
        title: '3. 沖縄・石垣島＆西表島（国内初の「星空保護区」認定・全88星座中84星座を観測）',
        timing: '12月〜6月（南十字星観測シーズン）、夏秋（天の川の大アーチ）',
        desc: '国際ダークスカイ協会より日本初の「星空保護区（ダークスカイ・パーク）」に認定された西表石垣国立公園。日本で唯一「南十字星」を観測できる南国の楽園。波音だけが響くプライベートビーチでのスターゲイジング。',
        spots: '石垣島天文台、平久保崎灯台、波照間島星空観測タワー、西表島浦内川',
        access: '新石垣空港より車・バスで島内各地へ。',
        tip: '波照間島（はてるまじま）まで足を伸ばすと、日本最南端の碑の周辺で水平線ギリギリに輝く南十字星を最も美しく観察できます。'
      }
    ]
  },
  {
    slug: 'japan-sea-of-clouds-terrace-infinity-onsen-stay',
    badge: 'SEA OF CLOUDS & SKY INFINITY GUIDE',
    title: '【雲海テラス＆天空インフィニティ温泉宿】トマム・竜王・秩父・竹田城 完全ガイド',
    metaDesc: '雲の上に浮かぶ奇跡の絶景完全特化！星野リゾート トマム「雲海テラス」、長野SORA terrace、兵庫「天空の城・竹田城跡」、埼玉「秩父ミューズパーク」、早朝雲海ツアーと天空インフィニティ露天風呂宿を徹底解説。',
    heroDesc: '朝起きると、そこは一面の白い雲の海「雲海リゾート」。ゴンドラで登るトマムの雲海テラス、北アルプスに沈む夕陽と雲海を望むSORA terrace、朝霧に浮かぶ天空の城・竹田城跡。雲を見下ろしながら浸かる天空露天風呂へ。',
    categoryKey: 'japan-sea-of-clouds-terrace-infinity-onsen-stay',
    areaGuides: [
      {
        key: 'tomamu_ryuo_cloud_terrace_stay',
        title: '1. 北海道・トマム＆長野・竜王SORA terrace（雲の上を歩くような空中デッキ）',
        timing: 'グリーンシーズン：5月中旬〜10月中旬（発生確率約40〜60%）',
        desc: 'ゴンドラで標高1,088mへ登る「星野リゾート トマム 雲海テラス」。せり出す展望デッキ「クラウドウォーク」や雲の形をした巨大ハンモック。標高1,770mの「竜王マウンテンリゾート SORA terrace」の夕陽と雲海。',
        spots: 'トマム雲海テラス（クラウドウォーク・てんぼうかふぇ）、竜王SORA terrace（SORA terrace cafe）、志賀高原',
        access: 'JR石勝線「トマム駅」、長野電鉄「湯田中駅」よりシャトルバス。',
        tip: '前日の夜に雨が降り、翌朝風がなく晴れ予報の日は、放射冷却によって高確率でダイナミックな雲海が発生します。'
      },
      {
        key: 'takeda_castle_sky_ruins_stay',
        title: '2. 兵庫・竹田城跡〜立雲峡（「日本のマチュピチュ」朝霧に浮かぶ天空の山城）',
        timing: '秋期限定：9月下旬〜12月上旬（特に10月〜11月の早朝がベストシーズン）',
        desc: '標高353mの古城山山頂に築かれた国の史跡「竹田城跡」。円山川から立ち上る川霧が城跡を包み込み、まるで雲の上に浮かんでいるかのような幻想風景。対岸の「立雲峡（りつうんきょう）」展望台からの全景撮影。',
        spots: '竹田城跡（天守台・南千畳）、立雲峡（第1〜第3展望台）、竹田城下町（寺町通り・古民家ホテル）',
        access: 'JR播但線「竹田駅」下車。北近畿豊岡道「和田山IC」より約10分。',
        tip: '立雲峡の第1展望台へは駐車場から登山道を約30分歩くため、懐中電灯とトレッキングシューズを用意して日の出前に登りましょう。'
      },
      {
        key: 'chichibu_bisei_sky_onsen_stay',
        title: '3. 埼玉・秩父盆地雲海（都心から西武特急で約80分の雲海ビュースポット）',
        timing: '春・秋：4月〜5月、10月〜11月（発生率高）',
        desc: '秩父盆地特有の地形と荒川の水蒸気が生み出す「秩父雲海」。秩父ミューズパーク展望台や三峯神社から見下ろす街明かりが透ける工場夜景雲海。雲海を眺められる客室露天風呂や山頂展望温泉。',
        spots: '秩父ミューズパーク展望台、美の山公園（国民休養地）、三峯神社（遥拝殿）、羊山公園',
        access: '西武池袋線「西武秩父駅」より車・バスで約15〜20分。',
        tip: '秩父ミューズパークでは、早朝の雲海に街の工場や電波塔の光が透過する「夜景雲海」が全国の写真愛好家に大人気です。'
      }
    ]
  },
  {
    slug: 'japan-fuji-view-private-open-air-bath-stay',
    badge: 'FUJI VIEW & PRIVATE ONSEN GUIDE',
    title: '【富士山ビュー客室露天風呂の宿】河口湖・箱根・日本平＆霊峰パノラマ 完全ガイド',
    metaDesc: '客室の湯船から富士山を独り占め！河口湖畔の逆さ富士、箱根芦ノ湖畔の富士山ビュー露天、静岡日本平の駿河湾＆富士山大パノラマ、記念日・特別な日に泊まりたい絶景温泉旅館を徹底解説。',
    heroDesc: '湯船に身を沈め、湯けむりの向こうにそびえる雄大な霊峰「富士山」。河口湖の水面に映る「逆さ富士」、芦ノ湖の青い水越しに仰ぐ雪化粧の富士、駿河湾の彼方に浮かぶ夕暮れの富士。日本一の絶景を独占する至福の客室露天風呂へ。',
    categoryKey: 'japan-fuji-view-private-open-air-bath-stay',
    areaGuides: [
      {
        key: 'kawaguchiko_fuji_private_onsen',
        title: '1. 河口湖北岸〜産屋ヶ崎（湖面に映る「逆さ富士」と客室専用露天風呂）',
        timing: '通年（冬期11月〜2月は雪化粧した富士山と澄んだ青空のベストシーズン）',
        desc: '富士五湖の中で最も富士山の眺望に優れた「河口湖北岸」。客室のテラスに設えられた温泉露天風呂から、遮るもののない富士山と湖を一望。波のない晴れた早朝に見られる奇跡の「逆さ富士」と、夕日に染まる「赤富士」。',
        spots: '産屋ヶ崎（逆さ富士の名所）、大石公園（ラベンダー・コキア）、河口湖音楽と森の美術館、新倉山浅間公園（五重塔と富士山）',
        access: '富士急行線「河口湖駅」より各ホテル無料送迎バス運行。',
        tip: '冬の早朝（日の出直後）は風が止まり湖面が鏡のようになるため、最も美しい逆さ富士を部屋の露天風呂から鑑賞できます。'
      },
      {
        key: 'hakone_fuji_view_luxury_ryokan',
        title: '2. 箱根・芦ノ湖畔〜大涌谷（海賊船・赤い水中鳥居と富士山の共演）',
        timing: '通年（空気が澄む早朝と夕暮れ時）',
        desc: '芦ノ湖の南岸・元箱根周辺から望む、箱根神社の平和の鳥居と芦ノ湖、その奥にそびえる富士山の黄金アングル。箱根駒ヶ岳ロープウェイ山頂展望台からの360度パノラマ。白濁の硫黄泉や美肌温泉の客室風呂ステイ。',
        spots: '箱根神社（平和の鳥居）、箱根駒ヶ岳ロープウェイ、大涌谷、芦ノ湖遊覧船・箱根海賊船',
        access: '小田急ロマンスカー「箱根湯本駅」より箱根登山バス「元箱根港」方面へ。',
        tip: '芦ノ湖の海賊船の展望デッキからは、湖上を進みながら富士山が徐々に大きく迫り来るダイナミックな景観を楽しめます。'
      },
      {
        key: 'nihondaira_suruga_fuji_resort',
        title: '3. 静岡・日本平〜駿河湾・伊豆西海岸（青い海と茶畑越しに仰ぐ世界遺産の富士）',
        timing: '通年（夕暮れ時にピンク色に染まる紅富士）',
        desc: '国名勝・日本観光地百選第1位に輝いた「日本平」。日本平夢テラスの展望回廊から望む駿河湾・三保松原越しの富士山。伊豆西海岸（土肥・戸田）の海辺露天風呂から、駿河湾の水平線の向こうに浮かぶ富士山を望む絶景。',
        spots: '日本平夢テラス（隈研吾建築都市設計事務所）、日本平ロープウェイ（久能山東照宮）、三保松原（羽衣の松）、土肥温泉',
        access: 'JR静岡駅より日本平行きバス約35分。東名高速「静岡IC」より約25分。',
        tip: '日本平ホテルなどの全面ガラス張りのアトリウムラウンジは「風景美術館」と称され、一枚の巨大な絵画のような富士山を鑑賞できます。'
      }
    ]
  },
  {
    slug: 'japan-ocean-cliff-sunset-view-stay',
    badge: 'OCEAN CLIFF & SUNSET VIEW GUIDE',
    title: '【絶景断崖オーシャン＆夕陽パノラマ宿】三陸・男鹿・越前・室戸岬・天草 完全ガイド',
    metaDesc: '荒波が削り出した断崖絶壁と燃えるような夕陽完全特化！三陸復興国立公園・北山崎、男鹿半島・入道崎、福井・東尋坊、高知・室戸岬、熊本・天草松島の夕陽百選、波打ち際の絶景露天風呂温泉旅館を徹底解説。',
    heroDesc: '見渡す限りの水平線に沈みゆく黄金の太陽！日本の名勝・断崖絶壁に建つ「絶景オーシャン＆夕陽の宿」。三陸海岸の高さ200mの絶壁、男鹿半島のゴジラ岩、東尋坊の夕暮れ。打ち寄せる波音をBGMに湯船に浸かるドラマチックな休日。',
    categoryKey: 'japan-ocean-cliff-sunset-view-stay',
    areaGuides: [
      {
        key: 'sanriku_oga_cliff_sunset_stay',
        title: '1. 三陸・北山崎＆秋田・男鹿半島（高さ200mの海のアルプスと入道崎の夕陽）',
        timing: '通年（初夏の新緑・秋の透明度の高い海と夕暮れ）',
        desc: '高さ200mの断崖が約8kmにわたって連なる「三陸海岸・北山崎（海のアルプス）」。サッパ船で断崖の真下をくぐるアドベンチャー。男鹿半島・入道崎の白黒灯台と日本海に沈む夕日、名物「ゴジラ岩」の夕陽シルエット。',
        spots: '北山崎展望台（サッパ船アドベンチャーズ）、浄土ヶ浜、男鹿半島入道崎（北緯40度モニュメント）、ゴジラ岩',
        access: '三陸鉄道リアス線「普代駅」、JR男鹿線「男鹿駅」周辺。',
        tip: '男鹿温泉郷の伝統料理「石焼料理（桶に入れた魚介と味噌出汁に、真っ赤に熱した溶岩を投入して一瞬で沸騰させる料理）」は必見の大迫力です。'
      },
      {
        key: 'tojinbo_echizen_sunset_stay',
        title: '2. 福井・東尋坊〜三国温泉・越前海岸（国の天然記念物・柱状節理と日本の夕陽百選）',
        timing: '通年（冬の荒波「波の花」と越前ガニシーズンは圧巻）',
        desc: '輝石安山岩の柱状節理が約1km続く国の名勝「東尋坊」。断崖絶壁に打ち寄せる日本海の白波。三国温泉の展望露天風呂から望む、空と海を黄金色に染め上げる夕陽。夕食には三国港直送の越前ガニや甘エビ。',
        spots: '東尋坊（東尋坊タワー・遊覧船）、三国サンセットビーチ、越前松島水族館、雄島（朱塗りの橋）',
        access: 'えちぜん鉄道「三国港駅」下車。北陸新幹線「芦原温泉駅」より車・バス約25分。',
        tip: '三国港周辺の旅館では、夕食時間を日没に合わせて調整してくれる宿が多く、食事処の窓一面に広がる夕陽を眺めながら乾杯できます。'
      },
      {
        key: 'amakusa_muroto_ocean_resort',
        title: '3. 熊本・天草五橋＆高知・室戸岬（多島美を染める天草夕景と太平洋の丸い水平線）',
        timing: '通年（イルカウォッチング・南国の爽快シーサイド）',
        desc: '大小120余の島々が浮かぶ天草松島の多島美を渡る「天草五橋（天草パールライン）」。日本の夕陽百選に選ばれた西平椿公園の夕陽。室戸岬の地球の丸さを実感できる270度の大パノラマと、黒潮が育む伊勢海老やカツオ。',
        spots: '天草五橋（天草クルーズ・イルカウォッチング）、大江天主堂・﨑津集落（世界遺産）、室戸岬灯台、中岡慎太郎像',
        access: 'JR三角駅より車・定期船、高知空港より車で約100分。',
        tip: '天草・下島西海岸の「﨑津集落」では、波静かな羊角湾に面して建つゴシック様式の﨑津教会が夕暮れ時に水面に映り、息を呑む美しさです。'
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

export default function ScenicViewHubPage() {
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

      {/* テーマ別徹底ガイド＆おすすめ宿 */}
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
              {/* テーマ見出し */}
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

              {/* 絶景ポイント・アクセス・撮影のコツ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 絶景ビュースポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 最高の景色を楽しむコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの絶景展望宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    絶景プラン
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

for (const cfg of scenicViewConfigs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated scenic view hub page: /${cfg.slug}`);
}
