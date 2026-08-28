const fs = require('fs');
const path = require('path');

const microWave7Configs = [
  {
    slug: 'hyogo-kobe-arima-onsen-stay',
    badge: 'ARIMA ONSEN MICRO GUIDE',
    title: '【兵庫・神戸有馬温泉】金泉・銀泉の奇跡の名湯＆六甲山夜景・神戸牛極上宿 完全ガイド',
    metaDesc: '日本三古湯・日本三名泉の有馬温泉エリア完全特化！茶褐色の「金泉」と無色透明炭酸泉の「銀泉」、湯本坂レトロ散策、六甲有馬ロープウェー、極上神戸牛ステーキと老舗名門旅館を徹底解説。',
    heroDesc: '豊臣秀吉が愛した日本最古の温泉郷「有馬温泉」。湧出時は透明で空気に触れて赤褐色に輝く濃厚な「金泉」と、気泡が弾ける美肌の「銀泉」。六甲山の1000万ドルの夜景と、世界に誇る神戸牛に舌鼓を打つ極上の休日。',
    categoryKey: 'hyogo-kobe-arima-onsen-stay',
    areaGuides: [
      {
        key: 'arima_kinsen_ginsen',
        title: '1. 温泉街中心部・湯本坂（秀吉ゆかりの金泉「金の湯」と銀泉「銀の湯」めぐり）',
        timing: '通年（冬の湯けむりと秋の瑞宝寺公園紅葉）',
        desc: '海水の約1.5倍から2倍の塩分濃度を誇り、鉄分で赤褐色に染まる「金泉」と、ラドン・炭酸ガスを含む「銀泉」。昔ながらの格子戸の家が並ぶ湯本坂をそぞろ歩き、名物「炭酸せんべい」や有馬サイダーを味わう。',
        spots: '金の湯（無料足湯あり）、銀の湯、湯本坂（レトロ商店街）、有馬玩具博物館、温泉寺・極楽寺',
        access: '神戸電鉄有馬線「有馬温泉駅」下車徒歩約5〜10分。三宮・新神戸・大阪駅から直通高速バス運行。',
        tip: '三津森本舗の「生炭酸せんべい」は、焼き上がり後わずか5秒間だけ柔らかく、すぐにパリッと固まる奇跡の食感を体験できます。'
      },
      {
        key: 'arima_kobe_beef',
        title: '2. 神戸牛づくし極上ステイ（世界が称賛する霜降り神戸ビーフの鉄板焼き・すき焼き）',
        timing: '通年（記念日や特別なご褒美旅行に最適）',
        desc: '人肌でとろける上品な脂と芳醇な香りを誇る「神戸牛（但馬牛）」。有馬温泉の名門宿で、専属シェフが目の前で焼き上げる鉄板焼きステーキや、伝統のすき焼き・しゃぶしゃぶを個室・お部屋食で堪能。',
        spots: '瑞宝寺公園（太閤秀吉が愛した紅葉名所・日暮しの庭）、鼓ヶ滝公園、竹中肉店（神戸牛コロッケ）',
        access: '有馬温泉街中心部。各旅館の無料送迎あり。',
        tip: '湯本坂の「竹中肉店」で揚げたて熱々の「神戸牛コロッケ」やミンチカツを食べ歩きするのが観光客の定番です。'
      },
      {
        key: 'arima_rokko_view',
        title: '3. 六甲有馬ロープウェー〜六甲山頂（1000万ドルの夜景と六甲ガーデンテラス）',
        timing: '通年（特に秋・冬の澄み渡る夜景パノラマ）',
        desc: '有馬温泉駅から六甲山頂駅まで約12分の空中散歩「六甲有馬ロープウェー」。眼下に広がる紅葉や雪景色を眺め、山頂の「六甲ガーデンテラス」から神戸・大阪湾を一望する日本屈指の大パノラマ夜景。',
        spots: '六甲有馬ロープウェー、六甲ガーデンテラス（自然体感展望台 六甲枝垂れ）、六甲高山植物園、六甲オルゴールミュージアム',
        access: '有馬温泉街よりロープウェー有馬温泉駅へ徒歩または送迎車約10分。',
        tip: '有馬温泉で温まった後にロープウェーで六甲山へ上がり、夕暮れから日没の1000万ドルの夜景を眺めるルートが人気です。'
      }
    ]
  },
  {
    slug: 'yamanashi-fujigoko-kawaguchiko-stay',
    badge: 'FUJI FIVE LAKES MICRO GUIDE',
    title: '【山梨・富士五湖＆河口湖】逆さ富士・富士急ハイランド＆ほうとう極上宿 完全ガイド',
    metaDesc: '山梨・富士五湖（河口湖・山中湖）エリア完全特化！湖面に映る奇跡の「逆さ富士」、富士急ハイランド、富士山パノラマロープウェイ、名物ほうとう鍋と全室富士山ビュー温泉ホテルを徹底解説。',
    heroDesc: '波静かな湖面に鏡のように映り込む霊峰富士の「逆さ富士」。四季折々の花々と青い湖水が織りなす圧倒的な美景。客室露天風呂から雪化粧した富士山を独占し、名物ほうとうと甲州牛に舌鼓を打つ休日。',
    categoryKey: 'yamanashi-fujigoko-kawaguchiko-stay',
    areaGuides: [
      {
        key: 'kawaguchiko_fuji_view',
        title: '1. 河口湖北岸・大石公園周辺（湖と富士山が織りなす「逆さ富士」の特等席）',
        timing: '通年（春の桜・初夏のラベンダー・秋の紅葉回廊・冬の雪化粧富士）',
        desc: '河口湖の北岸エリアに立ち並ぶ絶景リゾートホテル。波のない早朝、湖面に映る完璧な「逆さ富士」を客室テラスや露天風呂から鑑賞。秋の「もみじ回廊」ライトアップや大石公園のコキアなど見どころ満載。',
        spots: '大石公園（ラベンダー・コキア・河口湖自然生活館）、もみじ回廊（紅葉まつり）、河口湖音楽と森の美術館、河口湖遊覧船「天晴」',
        access: '富士急行線「河口湖駅」より河口湖周遊レトロバス（レッドライン）で約15〜25分。新宿から直通高速バスあり。',
        tip: '逆さ富士を綺麗に見るなら、風が止む早朝6時〜7時頃が最大のチャンスです。北岸の宿に泊まれば客室からすぐに見られます。'
      },
      {
        key: 'kawaguchiko_station_walk',
        title: '2. 河口湖駅〜富士山パノラマロープウェイ・富士急（名物ほうとうと爽快絶景）',
        timing: '通年（世界最高クラスのアトラクションと絶景ブランコ）',
        desc: '富士五湖観光の拠点・河口湖駅周辺。太宰治ゆかりの天上山へ登る「富士山パノラマロープウェイ」や、絶叫マシンが揃う「富士急ハイランド」。熱々の鉄鍋で提供される名物「甲州ほうとう」を満喫。',
        spots: '〜河口湖〜 富士山パノラマロープウェイ（絶景やぐら・カチカチ山）、富士急ハイランド、ほうとう不動、小作河口湖店',
        access: 'JR中央線直通特急「富士回遊」で新宿から河口湖駅まで直通約1時間55分。',
        tip: 'パノラマロープウェイ山頂展望台にある「カチカチ山絶景ブランコ」は、富士山に向かって飛び出すような大迫力写真が撮れます。'
      },
      {
        key: 'yamanakako_onsen_stay',
        title: '3. 山中湖・忍野八海（富士山の湧水群と朝日に輝く「紅富士」ステイ）',
        timing: '通年（冬のダイヤモンド富士・忍野八海の透明度）',
        desc: '富士五湖の中で最も標高が高い「山中湖」。朝日に赤く染まる「紅富士」や、夕日が山頂に沈む「ダイヤモンド富士」。富士山の雪解け水が湧き出す国の天然記念物「忍野八海」の神秘的な透明度。',
        spots: '忍野八海（湧池・鏡池・名水百選）、山中湖パノラマ台、山中湖花の都公園、紅富士の湯',
        access: '東富士五湖道路山中湖ICより車約10分。河口湖駅・御殿場駅より路線バス運行。',
        tip: '忍野八海でいただく「草餅（栃餅）」や名水仕込みの蕎麦・豆腐は、富士山の清らかな水ならではの絶品です。'
      }
    ]
  },
  {
    slug: 'shizuoka-izu-shuzenji-bamboo-stay',
    badge: 'SHUZENJI BAMBOO MICRO GUIDE',
    title: '【静岡・伊豆修善寺】竹林の小径・独鈷の湯＆伊豆牛・本わさび極上宿 完全ガイド',
    metaDesc: '伊豆の小京都・修善寺温泉エリア完全特化！桂川沿いの「竹林の小径」、弘法大師開湯の「独鈷の湯」、修禅寺、朱塗りの恋の橋めぐり、天城越え本わさび丼と文化財名門旅館を徹底解説。',
    heroDesc: '伊豆半島で最も歴史ある名湯「修善寺温泉」。桂川のせせらぎと青々とした竹林を渡る風。朱塗りの桂橋や楓橋、登録有形文化財の数寄屋旅館。文豪や芸術家に愛された日本の原風景へ。',
    categoryKey: 'shizuoka-izu-shuzenji-bamboo-stay',
    areaGuides: [
      {
        key: 'shuzenji_bamboo_walk',
        title: '1. 桂川沿い・竹林の小径〜修禅寺（伊豆の小京都をめぐる恋の橋と円形ベンチ）',
        timing: '通年（秋の紅葉・初夏の青もみじ・冬の静寂）',
        desc: '桂川に沿って整備された石畳の散策路「竹林の小径」。中央にある竹製の円形ベンチに寝転んで見上げる竹のトンネル。弘法大師空海が開創した古刹「修禅寺」や、5つの恋の橋を渡るパワースポットめぐり。',
        spots: '竹林の小径、独鈷の湯（とっこのゆ・伊豆最古の温泉）、福地山修禅寺、恋の橋めぐり（桂橋・楓橋・渡月橋・虎渓橋・滝下橋）、河原湯（足湯）',
        access: '伊豆箱根鉄道駿豆線「修善寺駅」より東海バスで約8分「修善寺温泉」下車すぐ。東京から特急踊り子号直通あり。',
        tip: '竹林の小径は夜になるとライトアップされ、昼間とは一変した幽玄で幻想的な光の小径へと姿を変えます。'
      },
      {
        key: 'shuzenji_wasabi_gourmet',
        title: '2. 天城の恵み！生わさび一本付き会席＆伊豆牛（擦りたて本わさびの香りと美味）',
        timing: '通年（天城山麓の清流が育む日本一のわさび）',
        desc: '天城連山の湧水で育まれた「天城本わさび」。修善寺の老舗宿では、自分でおろし金で擦る生わさびとともに味わう伊豆牛の炭火ステーキや地魚のお造り。門前町でいただく「わさびソフトクリーム」も名物。',
        spots: '修禅寺門前通り（お土産・甘味処）、一石庵（足湯カフェ・白玉ぜんざい）、修善寺プリン工房',
        access: '修善寺温泉街中心部。',
        tip: '「修善寺プリン工房」の竹容器に入ったプリンは、カラメル代わりに黒蜜をかけていただくお土産人気No.1スイーツです。'
      },
      {
        key: 'shuzenji_niji_no_sato',
        title: '3. 修善寺自然公園〜修善寺虹の郷（もみじ林の秋景色とイギリス村SL）',
        timing: '秋（11月中旬〜12月上旬の修善寺もみじ林ライトアップ）',
        desc: '約1,000本のもみじが群生する「修善寺自然公園もみじ林」。富士山を望むパノラマと、イギリス村やカナダ村が広がるテーマパーク「修善寺虹の郷」での本格ロムニー鉄道（SL乗車体験）。',
        spots: '修善寺自然公園（もみじ林・梅林）、修善寺虹の郷（SLロムニー鉄道・日本庭園）、修善寺カントリークラブ',
        access: '修善寺温泉街より路線バス・車で約5〜10分。',
        tip: '「修善寺虹の郷」の冬期イルミネーションは、夜の蒸気機関車と光の森が融合した大迫力の光の祭典です。'
      }
    ]
  },
  {
    slug: 'nagano-hakuba-happo-stay',
    badge: 'HAKUBA MOUNTAIN MICRO GUIDE',
    title: '【長野・白馬八方尾根】白馬マウンテンハーバー＆北アルプス絶景・温泉宿 完全ガイド',
    metaDesc: '長野・北アルプス白馬エリア完全特化！標高1,289mの絶景テラス「白馬マウンテンハーバー」、八方池トレッキング、白馬八方温泉の高アルカリ美肌湯、冬のパウダースノースキー場と北欧風山岳リゾートを徹底解説。',
    heroDesc: '標高3,000m級の北アルプス白馬連峰が眼前に迫る「白馬」。山頂テラスのブランコから望む三段紅葉と雪山パノラマ。pH11を超える日本最高峰のアルカリ性美肌温泉に浸かり、大自然に抱かれる極上のリゾートへ。',
    categoryKey: 'nagano-hakuba-happo-stay',
    areaGuides: [
      {
        key: 'hakuba_mountain_harbor',
        title: '1. 白馬岩岳マウンテンリゾート〜HAKUBA MOUNTAIN HARBOR（天空テラスの絶景）',
        timing: '通年（秋の三段紅葉・夏の避暑テラス・冬の絶景スノーテラス）',
        desc: 'ゴンドラリフトで標高1,289mの山頂へ。北アルプス白馬三山を一望するウッドデッキテラス「HAKUBA MOUNTAIN HARBOR」。「THE CITY BAKERY」のクロワッサンサンドや、山に飛び出す「ヤッホー！スウィング」を満喫。',
        spots: 'HAKUBA MOUNTAIN HARBOR、THE CITY BAKERY白馬店、ヤッホー！スウィング（巨大ブランコ）、白馬ヒトトキノモリ',
        access: 'JR大糸線「白馬駅」よりシャトルバス・車で約10分。北陸新幹線長野駅より特急バス約70分。',
        tip: '巨大ブランコ「ヤッホー！スウィング」に乗ると、まるで北アルプスの大空へ飛び立つような大迫力の動画が撮影できます。'
      },
      {
        key: 'hakuba_happo_onsen',
        title: '2. 八方尾根〜八方池（北アルプスの山並みが鏡のように映る神秘の池と八方温泉）',
        timing: 'グリーンシーズン：6月〜10月（高山植物と秋の紅葉）',
        desc: '八方アルペンラインのゴンドラとリフトを乗り継ぎ、八方池（標高2,060m）へ。白馬三山が水面に映るリフレクションは息をのむ美しさ。下山後は、pH11.2を誇る日本屈指の強アルカリ性温泉「白馬八方温泉」でつるつる美肌に。',
        spots: '八方池、八方尾根自然研究路、白馬八方温泉（八方の湯・みみずくの湯・おびなたの湯）、白馬ジャンプ競技場',
        access: '白馬八方バスターミナル周辺。',
        tip: '白馬八方温泉の「みみずくの湯」の露天風呂からは、白馬三山を真正面に眺めながらの入浴が楽しめます。'
      },
      {
        key: 'hakuba_ski_powder',
        title: '3. 白馬バレーのパウダースノー（世界中のスキーヤーを魅了するJAPOWと山岳ホテル）',
        timing: '冬期（12月中旬〜5月上旬の極上ロングシーズン）',
        desc: '1998年長野冬季五輪の舞台「白馬八方尾根スキー場」をはじめとするHAKUBA VALLEY。極上のパウダースノー（JAPOW）と北欧風の山岳リゾートホテル。暖炉のあるラウンジで信州ワインやクラフトビールを堪能。',
        spots: '白馬八方尾根スキー場、Hakuba47・白馬五竜、スノーピーク LAND STATION HAKUBA',
        access: '白馬八方バスターミナルより各スキー場シャトルバス運行。',
        tip: '「スノーピーク LAND STATION HAKUBA」では、隈研吾設計の建築美の中で信州の食材を使った薪火料理やグランピングカフェを楽しめます。'
      }
    ]
  },
  {
    slug: 'ishikawa-kaga-onsen-valley-stay',
    badge: 'KAGA YAMANAKA YAMASHIRO GUIDE',
    title: '【石川・加賀温泉郷】山中温泉・山代温泉＆鶴仙渓川床・加能ガニ極上宿 完全ガイド',
    metaDesc: '石川・加賀温泉郷（山中温泉・山代温泉・片山津温泉・粟津温泉）エリア完全特化！鶴仙渓のあやとりはしと川床、魯山人寓居跡いろは草庵、九谷焼・山中漆器体験、冬の加能ガニ・香箱ガニ会席と老舗名門旅館を徹底解説。',
    heroDesc: '芭蕉が愛した山中温泉と、魯山人が逗留した山代温泉。鶴仙渓のせせらぎを聞きながらいただく川床スイーツと、紅殻格子の温泉街。名門旅館の庭園露天風呂で温まり、北陸の冬の味覚・加能ガニに酔いしれる旅。',
    categoryKey: 'ishikawa-kaga-onsen-valley-stay',
    areaGuides: [
      {
        key: 'kaga_yamanaka_kakusenkei',
        title: '1. 山中温泉・鶴仙渓（あやとりはし・こおろぎ橋と清流の川床カフェ）',
        timing: '通年（4月〜11月の鶴仙渓川床・秋の全山紅葉・冬の雪景色）',
        desc: '北陸随一の渓谷美を誇る「鶴仙渓（かくせんけい）」。ユニークなS字型の紅色「あやとりはし」や総檜造りの「こおろぎ橋」。清流沿いの「鶴仙渓川床」で道場六三郎レシピのスイーツや加賀棒茶を味わう至福の散策。',
        spots: '鶴仙渓（川床・あやとりはし・こおろぎ橋・黒谷橋）、山中温泉総湯「菊の湯」、ゆげ街道（山中漆器・食べ歩きコロッケ）',
        access: '北陸新幹線「加賀温泉駅」より路線バス・加賀周遊キャンバスで約25分「山中温泉」下車。各宿送迎あり。',
        tip: '「ゆげ街道」の肉のいづみやの「手作りコロッケ」を片手に、山中漆器や九谷焼のギャラリーを巡るのが定番です。'
      },
      {
        key: 'kaga_yamashiro_luxury',
        title: '2. 山代温泉・湯の曲輪（紅殻格子の街並みと魯山人ゆかりの文化財ステイ）',
        timing: '通年（歴史と文化に触れる大人旅）',
        desc: '温泉街の中心に共同浴場「古総湯」を配した伝統の街並み「湯の曲輪（ゆのがわ）」。明治時代の総湯を復元したステンドグラス輝く古総湯での入浴体験。北大路魯山人が逗留した「いろは草庵」で芸術に触れる。',
        spots: '山代温泉古総湯・総湯、魯山人寓居跡いろは草庵、九谷焼窯跡展示館、服部神社',
        access: '加賀温泉駅より車・バスで約10〜15分。',
        tip: '山代温泉古総湯はシャンプーや石鹸を使わず、源泉かけ流しの湯船と九谷焼タイルの壁画を純粋に楽しむ体験型温泉です。'
      },
      {
        key: 'kaga_kanogani_gourmet',
        title: '3. 加賀美食ステイ（冬の加能ガニ・香箱ガニと九谷焼・山中漆器の器）',
        timing: '冬期（11月6日解禁の加能ガニ・香箱ガニシーズン）',
        desc: '石川県が誇るブランドズワイガニ「加能ガニ」と、内子・外子が濃厚な雌ガニ「香箱ガニ」。高級魚のどぐろの塩焼きや、華やかな九谷焼・山中漆器の器に盛り付けられた加賀懐石を個室で堪能。',
        spots: '片山津温泉（柴山潟・浮御堂・中谷宇吉郎雪の科学館）、月うさぎの里、ゆのくにの森（伝統工芸村）',
        access: '加賀温泉駅より各エリアへアクセス。',
        tip: '「ゆのくにの森」では築数百年の古民家で九谷焼の絵付けや金箔貼り、山中漆器の蒔絵体験が楽しめます。'
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

for (const cfg of microWave7Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated micro tourist hub page: /${cfg.slug}`);
}
