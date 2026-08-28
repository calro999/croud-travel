const fs = require('fs');
const path = require('path');

const microWave8Configs = [
  {
    slug: 'miyagi-matsushima-bay-stay',
    badge: 'MATSUSHIMA BAY MICRO GUIDE',
    title: '【宮城・日本三景松島】松島湾260島パノラマ・瑞巌寺＆極上牡蠣・牛たん宿 完全ガイド',
    metaDesc: '日本三景・宮城松島エリア完全特化！松島湾に浮かぶ260余の島々、国宝瑞巌寺、五大堂のすかし橋、福浦島（出会い橋）、本場松島牡蠣・三陸海の幸・仙台牛たんを味わうオーシャンビュー温泉宿を徹底解説。',
    heroDesc: '松尾芭蕉が言葉を失った日本三景「松島」。朝日と夕日に輝く松島湾260余の島々。伊達政宗公が再建した国宝・瑞巌寺の荘厳な佇まいと、ぷりぷりの松島牡蠣・三陸海の幸に舌鼓を打つ極上の海辺旅。',
    categoryKey: 'miyagi-matsushima-bay-stay',
    areaGuides: [
      {
        key: 'matsushima_bay_view',
        title: '1. 松島海岸・岬の高台（松島湾260余の島々を一望するオーシャンビュー温泉）',
        timing: '通年（松島湾から昇る感動の朝日サンライズ）',
        desc: '松島湾を見下ろす高台や海岸沿いに佇む温泉リゾート。美肌効果の高いアルカリ性単純温泉「松島温泉（太古天泉）」の展望露天風呂から、朝日を受けて黄金色に輝く島々のパノラマを独占。',
        spots: '松島四大観（大高森・幽観扇谷・麗観富山・偉観多聞山）、松島湾遊覧船（仁王丸コース）、西行戻しの松公園（桜と松島湾）',
        access: 'JR仙石線「松島海岸駅」またはJR東北本線「松島駅」下車。仙台駅から快速で約25〜30分。各宿無料送迎あり。',
        tip: '「西行戻しの松公園」の高台にあるカフェ「le Roman（ロマン）」の全面ガラス張りテラスから望む松島湾は絶景です。'
      },
      {
        key: 'matsushima_zuiganji_walk',
        title: '2. 瑞巌寺〜五大堂・福浦橋（伊達政宗公の祈りと朱塗りの橋めぐり）',
        timing: '通年（秋の瑞巌寺・円通院紅葉ライトアップ）',
        desc: '慶長14年（1609年）伊達政宗公が建立した国宝「瑞巌寺」の絢爛豪華な障壁画。足元から海が見える五大堂の「すかし橋」や、良縁を結ぶとされる全長252mの朱塗りの「福浦橋（出会い橋）」を渡る歴史散策。',
        spots: '国宝瑞巌寺、円通院（石庭・枯山水・数珠作り体験）、五大堂（すかし橋）、福浦島（福浦橋）、みちのく伊達政宗歴史館',
        access: '松島海岸駅より徒歩約5〜10分。',
        tip: '円通院の秋の紅葉ライトアップは、心字の池に映る逆さ紅葉が鏡のように幻想的で東北屈指の美しさを誇ります。'
      },
      {
        key: 'matsushima_oyster_gourmet',
        title: '3. 本場松島牡蠣＆三陸の海の幸（焼き牡蠣食べ放題と仙台牛・笹かまぼこ）',
        timing: '秋〜冬期（10月〜3月の松島牡蠣シーズン）',
        desc: '栄養豊富な松島湾で育つ名物「松島牡蠣」。「松島さかな市場」の焼き牡蠣ハウスや、宿の夕食でいただく牡蠣鍋・牡蠣フライ・牡蠣釜飯。本場仙台牛の陶板焼きや、自分で手焼きする笹かまぼこ体験。',
        spots: '松島さかな市場（焼き牡蠣ハウス）、松島かまぼこ本舗（手焼き笹かま体験）、松島海岸通り商店街',
        access: '松島海岸駅周辺。',
        tip: '「松島かまぼこ本舗」では、生の笹かまぼこを自分で炭火でじっくりキツネ色に焼き上げて食べる熱々体験ができます。'
      }
    ]
  },
  {
    slug: 'yamagata-zao-onsen-frost-stay',
    badge: 'ZAO SNOW MONSTER GUIDE',
    title: '【山形・蔵王温泉】樹氷スノーモンスター・強酸性硫黄泉＆山形牛極上宿 完全ガイド',
    metaDesc: '山形・蔵王温泉エリア完全特化！大迫力の「蔵王樹氷（スノーモンスター）」ライトアップ、開湯1900年の強酸性白濁硫黄泉、蔵王ロープウェイ、名物玉こんにゃく・山形牛すき焼きと老舗温泉宿を徹底解説。',
    heroDesc: '標高約900m、蔵王連峰の懐に湧く「蔵王温泉」。日本屈指の強酸性白濁硫黄泉が古くから皮膚病や美肌に効く名湯として愛される。冬には世界中から人々が訪れる奇跡の「樹氷（スノーモンスター）」と山形牛の饗宴。',
    categoryKey: 'yamagata-zao-onsen-frost-stay',
    areaGuides: [
      {
        key: 'zao_frost_monster_view',
        title: '1. 蔵王ロープウェイ〜山頂線（世界に誇る奇跡の造形美「樹氷スノーモンスター」）',
        timing: '冬期（1月〜2月の樹氷最盛期・ナイトクルーザー号夜間ライトアップ鑑賞）',
        desc: '蔵王の特殊な気候条件とアオモリトドマツが生み出す自然の芸術「樹氷（スノーモンスター）」。蔵王ロープウェイ山頂駅（標高1,661m）から見下ろす一面の白銀モンスター群。夜間は色彩豊かな光でライトアップ。',
        spots: '蔵王ロープウェイ（山麓線・山頂線）、地蔵山頂駅（蔵王地蔵尊）、樹氷幻想回廊ツアー（雪上車ナイトクルーザー号）',
        access: 'JR山形新幹線「山形駅」より山交バス「蔵王温泉行き」で約45分終点下車。各宿送迎あり。',
        tip: '樹氷ナイトクルーザー号は暖房付き雪上車で夜の樹氷原を間近に巡る大人気ツアー。事前予約が必須です。'
      },
      {
        key: 'zao_sulfur_hotspring',
        title: '2. 蔵王温泉街・高湯通り（pH1.5の強酸性白濁硫黄泉と三つの共同浴場めぐり）',
        timing: '通年（冬の雪見風呂・春夏のトレッキング）',
        desc: '1900年の歴史を持つ「蔵王温泉」。強酸性の硫黄泉は肌の古い角質を落とし血管を若返らせる「美肌と健康の湯」。湯の香が立ち込める高湯通りを木下駄で散策し、「上湯」「下湯」「川原湯」の共同浴場を巡る。',
        spots: '高湯通り、共同浴場（上湯・下湯・川原湯）、蔵王温泉大露天風呂（春〜秋営業）、酢川温泉神社',
        access: '蔵王温泉バスターミナルより徒歩約3〜8分。',
        tip: '「蔵王温泉大露天風呂」は一度に200人入れる巨大な渓流沿い野天風呂で、森林浴と白濁湯を同時に楽しめます。'
      },
      {
        key: 'zao_yamagatagyu_gourmet',
        title: '3. 山形牛ステーキ＆名物玉こんにゃく（本場芋煮鍋と山形の地酒）',
        timing: '通年（秋の山形芋煮・冬の熱々すき焼き）',
        desc: '厳しい寒暖差が育む極上の霜降り肉「山形牛」。蔵王の老舗宿でいただくすき焼きや陶板焼き。温泉街の店頭で醤油ダレが染み込んだ熱々の「玉こんにゃく」や、里芋と牛肉がたっぷり入った山形名物「芋煮鍋」を堪能。',
        spots: '高湯堂（湯旅屋・お土産）、音茶屋（蔵王カフェ）、ZAO CENTER PLAZA',
        access: '温泉街中心部。',
        tip: '湯上がりに「湯旅屋 高湯堂」でいただく蔵王温泉水サイダーや地ビールが観光客に大人気です。'
      }
    ]
  },
  {
    slug: 'hokkaido-shiretoko-utoro-stay',
    badge: 'SHIRETOKO WILDERNESS GUIDE',
    title: '【北海道・世界遺産知床ウトロ】オホーツク流氷・知床五湖＆エゾシカ海鮮極上宿 完全ガイド',
    metaDesc: '世界自然遺産・北海道知床ウトロエリア完全特化！オホーツク海の流氷クルーズ、知床五湖の高架木道散策、フレペの滝、オシンコシンの滝、知床産イクラ・ウニ・鮭とオホーツク海を一望する温泉リゾートを徹底解説。',
    heroDesc: '世界自然遺産「知床」。冬にはオホーツク海を真っ白に埋め尽くす神秘の流氷群。原生林に抱かれた知床五湖と、エゾシカやヒグマが暮らす手つかずの大自然。オホーツク海に沈む夕日を眺め、極上の海の幸を味わう旅。',
    categoryKey: 'hokkaido-shiretoko-utoro-stay',
    areaGuides: [
      {
        key: 'shiretoko_drift_ice_view',
        title: '1. ウトロ温泉・オホーツク海フロント（冬の流氷原パノラマと夕陽の特等席）',
        timing: '冬期：1月下旬〜3月中旬（流氷ウォーク・流氷観光砕氷船おーろら）／通年（夕日絶景）',
        desc: 'ウトロ港や高台に位置する温泉ホテル群。客室や展望大浴場から、オホーツク海を埋め尽くす白銀の流氷原や、水平線に沈む黄金色の夕日を一望。ドライスーツを着て流氷の上を歩く「流氷ウォーク」体験。',
        spots: 'ウトロ港（ゴジラ岩・オロンコ岩）、夕陽台展望台、プユニ岬、流氷ウォーク体験',
        access: '女満別空港より知床エアポートライナーで約2時間15分「ウトロ温泉各ホテル」下車。JR網走駅・斜里駅よりバス。',
        tip: '「オロンコ岩」の巨岩頂上まで階段を登ると、ウトロの街並みとオホーツク海を360度見渡す大パノラマが広がります。'
      },
      {
        key: 'shiretoko_goko_nature',
        title: '2. 知床五湖〜フレペの滝（原生林に佇む神秘の湖沼群とエゾシカ・ヒグマの楽園）',
        timing: 'グリーンシーズン：4月下旬〜11月上旬（高架木道は安全に通年散策可能）',
        desc: '知床連山を湖面に映す幻想的な「知床五湖」。往復約1.6kmの電気柵付き「高架木道」なら初心者でも安全に一湖の絶景を堪能。断崖絶壁からオホーツク海へ湧水が流れ落ちる「フレペの滝（乙女の涙）」の絶景トレッキング。',
        spots: '知床五湖（高架木道・地上遊歩道）、知床自然センター、フレペの滝、カムイワッカ湯の滝',
        access: 'ウトロ温泉街より知床五湖行き路線バスで約20分。',
        tip: '地上遊歩道を歩く場合は、ヒグマ活動期（5月〜7月末）は登録引率ガイドツアーへの参加が必要です。'
      },
      {
        key: 'shiretoko_seafood_gourmet',
        title: '3. 知床オホーツク海の幸づくし（知床産天然鮭・いくら・タラバガニバイキング）',
        timing: '通年（秋の鮭・いくらシーズン、冬の毛ガニ・タラバガニ）',
        desc: '日本一の鮭の水揚げ量を誇る斜里町・知床。ぷちぷち弾けるイクラのかけ放題、脂がのった鮭のチャンチャン焼き、オホーツク海の新鮮なウニやホタテ。地元のエゾシカ肉ローストなど北の大地の恵み。',
        spots: '道の駅うとろ・シリエトク、オシンコシンの滝（日本の滝百選）、知床世界遺産センター',
        access: 'ウトロ温泉街中心部。',
        tip: '「道の駅うとろ・シリエトク」のレストランで味わう「鮭親子丼（いくら＆鮭）」は、知床観光の定番グルメです。'
      }
    ]
  },
  {
    slug: 'kagoshima-ibusuki-sand-onsen-stay',
    badge: 'IBUSUKI SAND BATH GUIDE',
    title: '【鹿児島・指宿温泉】天然砂むし温泉＆開聞岳パノラマ・黒豚極上宿 完全ガイド',
    metaDesc: '南国鹿児島・指宿温泉エリア完全特化！波打ち際で温まる世界唯一の「天然砂むし温泉」、薩摩富士「開聞岳」、干潮時に歩いて渡る知林ヶ島、鹿児島黒豚しゃぶしゃぶ・さつま揚げと南国リゾート旅館を徹底解説。',
    heroDesc: '錦江湾と南国のヤシの木が揺れる「指宿（いぶすき）」。海岸の砂浜に埋もれて波音を聞きながら全身から汗を流す「砂むし温泉」。秀峰・開聞岳を望む絶景露天風呂と、本場鹿児島黒豚・極上焼酎に酔いしれる旅。',
    categoryKey: 'kagoshima-ibusuki-sand-onsen-stay',
    areaGuides: [
      {
        key: 'ibusuki_sand_bath_walk',
        title: '1. 砂むし会館 砂楽〜摺ヶ浜海岸（世界唯一の天然砂むし温泉で極上のデトックス）',
        timing: '通年（波打ち際で潮騒を聞きながら温まる唯一無二の体験）',
        desc: '海岸から湧き出る温泉熱で温められた砂に埋まる「砂むし温泉」。浴衣を着て砂に包まれること約10〜15分。波音を聞きながら全身から汗が噴き出し、通常の温泉の約3倍〜4倍のデトックス効果と血流改善。',
        spots: '砂むし会館 砂楽、摺ヶ浜海岸、指宿駅前足湯、指宿いわさきホテル砂むし温泉',
        access: 'JR指宿枕崎線「指宿駅」より路線バスで約5分「砂むし会館前」下車。鹿児島中央駅から特急「指宿のたまて箱」で約50分。',
        tip: '大潮の干潮時を狙って行くと、波打ち際のすぐ近くに掘られた砂むし場でよりダイナミックな入浴が楽しめます。'
      },
      {
        key: 'ibusuki_kaimondake_view',
        title: '2. 開聞岳〜長崎鼻・知林ヶ島（薩摩富士の円錐美と縁結びの砂州アイランド）',
        timing: '通年（3月〜10月の干潮時に現れる知林ヶ島の砂の道ちりりんロード）',
        desc: '標高924m、海に突き出た美しい円錐形の薩摩富士「開聞岳」。浦島太郎伝説が残る薩摩半島最南端の「長崎鼻」から望む開聞岳と東シナ海。干潮時だけ歩いて渡れる縁結びの無人島「知林ヶ島」。',
        spots: '開聞岳（登山・ふれあい公園）、長崎鼻（竜宮神社・薩摩長崎鼻灯台）、知林ヶ島（砂州ロード・ちりりんズベル）、池田湖（イッシー伝説・大うなぎ）',
        access: '指宿駅より車・レンタカーで約20〜30分。または路線バス運行。',
        tip: '「ヘルシーランド露天風呂 たまて箱温泉」は、目の前に東シナ海と開聞岳が広がる日本屈指の絶景露天風呂です。'
      },
      {
        key: 'ibusuki_kurobuta_gourmet',
        title: '3. 鹿児島黒豚しゃぶしゃぶ＆薩摩焼酎（本場さつま揚げと温たまらん丼）',
        timing: '通年（極上の旨味と甘みを持つかごしま黒豚）',
        desc: 'サツマイモを食べて育った「かごしま黒豚」の極上しゃぶしゃぶ。指宿の温泉卵を使ったご当地グルメ「温たまらん丼」や、揚げたてサクサクのさつま揚げ。厳選された薩摩本格芋焼酎とのマリアージュ。',
        spots: '唐船峡そうめん流し（名水百選・回転式そうめん流し発祥の地）、指宿名物温たまらん丼取扱店',
        access: '指宿温泉街および唐船峡周辺。',
        tip: '「唐船峡そうめん流し」は年間を通じて湧き出る冷涼な湧水で楽しむ回転式そうめん流しの元祖で、夏冬問わず大人気です。'
      }
    ]
  },
  {
    slug: 'nagano-shigakogen-shibutoge-stay',
    badge: 'SHIGA HIGHLAND NATURE GUIDE',
    title: '【長野・志賀高原＆渋峠】日本国道最高地点・雲海テラス＆パウダースノー極上宿 完全ガイド',
    metaDesc: '長野・上信越高原国立公園エリア完全特化！日本国道最高地点（標高2,172m）の渋峠、SORA terraceの雲海、志賀高原18スキー場ビッグゲレンデ、熊の湯温泉の濃厚緑色硫黄泉と高原山岳リゾートを徹底解説。',
    heroDesc: '標高2,000mを超える天空のリゾート「志賀高原・渋峠」。雲海を見下ろす日本国道最高地点と、息をのむ大パノラマ。エメラルドグリーンに輝く熊の湯温泉と、世界最高峰のパウダースノーを誇る山岳ホテルステイ。',
    categoryKey: 'nagano-shigakogen-shibutoge-stay',
    areaGuides: [
      {
        key: 'shigakogen_shibutoge_view',
        title: '1. 渋峠〜横手山山頂（日本国道最高地点2,172mと雲の上のベーカリー）',
        timing: 'グリーンシーズン：4月下旬〜11月上旬（志賀草津高原ルート開通期）／冬期（パウダースノー）',
        desc: '群馬と長野の県境に位置する日本国道最高地点「渋峠（標高2,172m）」。スカイレーターとリフトで登る横手山山頂の「横手山頂ヒュッテ」で味わう名物手作り焼き立てパンやボルシチ。足元に広がる壮大な雲海。',
        spots: '渋峠（日本国道最高地点の碑・渋峠ホテル）、横手山頂ヒュッテ（雲の上のパン屋さん・展望台）、SORA terrace（竜王マウンテンリゾート）',
        access: '長野駅より長電バス「志賀高原急行バス」で約70〜90分。上信越道信州中野ICより車約45分。',
        tip: '「渋峠ホテル」は建物の中央に県境線が引かれており、日本国道最高地点到達証明書を発行してもらえます。'
      },
      {
        key: 'kumanoyu_emerald_onsen',
        title: '2. 熊の湯温泉・ほたる温泉（エメラルドグリーンに輝く濃厚硫黄泉の奇跡）',
        timing: '通年（冬の雪見風呂・夏の爽快な高原避暑）',
        desc: '志賀高原随一の湯量を誇る「熊の湯温泉」。空気に触れると鮮やかなエメラルドグリーンに変化する濃厚な含硫黄炭酸水素塩泉。幕末の思想家・佐久間象山が発見したと伝わる名湯で、つるつるの美肌効果を体感。',
        spots: '熊の湯温泉（熊の湯ホテル・日帰り入浴）、ほたる温泉、木戸池（ボート・遊歩道）、田ノ原湿原',
        access: '志賀高原バス「熊の湯」下車すぐ。',
        tip: '熊の湯温泉の湯船は緑色の湯の花が舞う独特の泉質で、入浴後は肌がしっとりすべすべになります。'
      },
      {
        key: 'shigakogen_ski_resort',
        title: '3. 志賀高原ビッグゲレンデ（全18スキー場共通リフト券と暖炉ラウンジ）',
        timing: '冬期（11月下旬〜5月上旬の超ロングスキーシーズン）',
        desc: '単一エリアとしては日本最大の規模を誇る「志賀高原スキー場（全18スキー場）」。極上のプラチナパウダースノーと多彩なコース。ゲレンデ直結のホテルで暖炉の炎を眺めながら信州プレミアム牛やチーズフォンデュを堪能。',
        spots: '志賀高原一の瀬・焼額山・奥志賀高原スキー場、志賀高原マウンテンリゾート、大沼池（エメラルドグリーンの火口湖）',
        access: '志賀高原各エリアへ無料シャトルバス運行。',
        tip: '奥志賀高原や焼額山エリアの山岳リゾートホテルは、客室からそのままスキー板を履いて滑り出せる利便性が抜群です。'
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

for (const cfg of microWave8Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated micro tourist hub page: /${cfg.slug}`);
}
