const fs = require('fs');
const path = require('path');

const microWave9Configs = [
  {
    slug: 'shimane-izumo-tamatsukuri-onsen-stay',
    badge: 'IZUMO TAISHA & TAMATSUKURI GUIDE',
    title: '【島根・出雲大社＆玉造温泉】神話と縁結び・日本最古の美肌温泉宿 完全ガイド',
    metaDesc: '神々の国・島根出雲＆玉造温泉エリア完全特化！縁結びの総本山「出雲大社」、日本最古の美肌温泉「玉造温泉（美肌の湯）」、宍道湖の夕日、名物出雲そば・しまね和牛・のどぐろ会席宿を徹底解説。',
    heroDesc: '八百万の神々が集う聖地「出雲大社」。参拝後は『出雲国風土記』に「一度洗えば容貌美麗になり、再び浴すれば万病治る」と記された神の湯「玉造温泉」へ。美肌温泉と山陰の幸に癒やされる縁結びの旅。',
    categoryKey: 'shimane-izumo-tamatsukuri-onsen-stay',
    areaGuides: [
      {
        key: 'izumo_taisha_walk',
        title: '1. 出雲大社〜神門通り・稲佐の浜（大注連縄と神々をお迎えする海岸参拝）',
        timing: '通年（旧暦10月の神在月・秋の神在祭）',
        desc: '日本屈指のパワースポット「出雲大社」。神楽殿の大注連縄（長さ13.6m、重さ5.2トン）の圧倒的存在感。神門通りでの名物「割子そば」食べ歩きや、八百万の神々をお迎えする「稲佐の浜」での夕日鑑賞。',
        spots: '出雲大社（御本殿・神楽殿・宝物殿）、神門通り（出雲そば・ぜんざい発祥の地）、稲佐の浜（弁天島・夕日百選）、古代出雲歴史博物館',
        access: '一畑電車「出雲大社前駅」下車徒歩約5分。JR出雲市駅より路線バス約25分。',
        tip: '出雲大社の参拝作法は「二礼・四拍手・一礼」。稲佐の浜の砂をいただいて出雲大社の素鵞社（そがのやしろ）の砂と交換する清めの参拝がおすすめです。'
      },
      {
        key: 'tamatsukuri_bihada_onsen',
        title: '2. 玉造温泉街・玉湯川（製薬会社が絶賛した天然の化粧水温泉と足湯めぐり）',
        timing: '通年（春の玉湯川沿い桜並木ライトアップ・夜の竹灯籠）',
        desc: '美肌作用の高い硫酸塩泉と保湿効果の高い塩化物泉が理想的なバランスで混ざる「玉造温泉」。玉湯川沿いの足湯や、美肌温泉水を専用ボトルに汲んで持ち帰れる「湯薬師広場」、勾玉作りの歴史に触れる。',
        spots: '玉作湯神社（願い石・叶い石）、湯薬師広場（美肌温泉水ボトル）、玉造温泉ゆ〜ゆ、足湯（川床足湯）',
        access: 'JR山陰本線「玉造温泉駅」より車・バスで約5分。各旅館の送迎バスあり。',
        tip: '「玉作湯神社」では、授与所で「叶い石」を授かり、境内の「願い石」に重ねてお祈りすると自分だけのお守りを作ることができます。'
      },
      {
        key: 'shinji_lake_sunset_seafood',
        title: '3. 宍道湖の夕日＆山陰美食（のどぐろ・しまね和牛・宍道湖七珍）',
        timing: '通年（日本の夕日百選に選ばれる宍道湖サンセット）',
        desc: '刻一刻と空と湖面が茜色から紫へと染まる「宍道湖の夕日」。日本海の赤い宝石「のどぐろ」の塩焼きや煮付け、きめ細かな霜降りの「しまね和牛」、宍道湖名物のしじみ汁など山陰の極上美食を堪能。',
        spots: '宍道湖夕日スポット（とるぱ・袖師地蔵）、宍道湖遊覧船はくちょう号、島根県立美術館',
        access: '玉造温泉より宍道湖畔まで車で約10分。',
        tip: '「島根県立美術館」はロビーが日没後まで開放されており、絵画のような宍道湖の夕日をガラス越しに鑑賞できます。'
      }
    ]
  },
  {
    slug: 'miyazaki-takachiho-gorge-myth-stay',
    badge: 'TAKACHIHO MYTH & NATURE GUIDE',
    title: '【宮崎・高千穂峡】真名井の滝・高千穂神楽＆天安河原・宮崎牛極上宿 完全ガイド',
    metaDesc: '神話のふるさと宮崎・高千穂エリア完全特化！柱状節理の断崖絶壁と「真名井の滝」手漕ぎボート、夜毎奉納される「高千穂夜神楽」、天岩戸神社・天安河原、極上宮崎牛炭火焼きと隠れ家温泉宿を徹底解説。',
    heroDesc: '阿蘇の火山活動が創り出した奇跡の峡谷「高千穂峡」。エメラルドグリーンの水面に流れ落ちる「真名井の滝」。天孫降臨の神話が息づく天安河原と、毎夜響く神楽の音。神秘のパワースポットと宮崎牛に癒やされる旅。',
    categoryKey: 'miyazaki-takachiho-gorge-myth-stay',
    areaGuides: [
      {
        key: 'takachiho_gorge_boat',
        title: '1. 高千穂峡〜真名井の滝（阿蘇溶岩の柱状節理と手漕ぎ貸ボートアドベンチャー）',
        timing: '通年（新緑の5月・秋の紅葉11月・夏のライトアップ）',
        desc: '高さ80m〜100mの切り立った断崖が約7kmにわたって続く国の名勝・天然記念物「高千穂峡」。日本の滝百選「真名井の滝」のすぐそばまで手漕ぎ貸ボートで近づき、降り注ぐマイナスイオンを全身で体感。',
        spots: '真名井の滝、高千穂峡貸ボート、仙人の屏風岩、槍飛橋、高千穂峡淡水魚水族館',
        access: '熊本空港より特急バス「たかちほ号」で約2時間。延岡駅より路線バス約80分。',
        tip: '高千穂峡の貸ボートは完全事前予約制（公式サイト）です。特に午前中の時間帯は数週間前から満席になるため早めの予約が必須です。'
      },
      {
        key: 'takachiho_shrine_kagura',
        title: '2. 高千穂神社〜天岩戸神社・天安河原（毎夜行われる高千穂神楽と無数の積石）',
        timing: '通年（毎夜20時から高千穂神社神楽殿で「観光夜神楽」奉納）',
        desc: '天照大神がお隠れになった天岩戸を祀る「天岩戸神社」。八百万の神々が集まって相談したと伝わる大洞窟「天安河原」に広がる無数の願いの積石。夜は高千穂神社の神楽殿で三十三番の代表的な四番の神楽を鑑賞。',
        spots: '高千穂神社（夫婦杉・神楽殿）、天岩戸神社（西本宮・東本宮）、天安河原（仰慕窟・積石祈願）、槵觸神社（くしふるじんじゃ）',
        access: '高千穂バスセンターより車で約10〜15分。',
        tip: '高千穂神社の境内にある樹齢800年の「夫婦杉」は、大切な人と手をつないで時計回りに3周回ると縁結び・家内安全が叶うとされます。'
      },
      {
        key: 'takachiho_wagyu_luxury',
        title: '3. 高千穂牛ステーキ＆雲海テラス（和牛オリンピック日本一と国見ヶ丘の雲海）',
        timing: '秋〜冬期：9月中旬〜11月下旬の早朝（国見ヶ丘の雲海シーズン）',
        desc: '内閣総理大臣賞を連続受賞した最高峰の黒毛和牛「高千穂牛（宮崎牛）」。肉汁あふれる炭火焼きステーキや朴葉味噌焼き。標高513mの「国見ヶ丘」から望む、高千穂盆地を覆い尽くす幻想的な大雲海。',
        spots: '国見ヶ丘展望台（雲海・阿蘇五岳パノラマ・ミシュラン一ツ星）、高千穂あまてらす鉄道（グランドスーパーカート）',
        access: '高千穂中心街より国見ヶ丘まで車で約15分。',
        tip: '「高千穂あまてらす鉄道」のグランドスーパーカートは、高さ105mの高千穂橋梁の上でシャボン玉を飛ばす大迫力のアトラクションです。'
      }
    ]
  },
  {
    slug: 'aomori-oirase-towada-nature-stay',
    badge: 'OIRASE GORGE NATURE GUIDE',
    title: '【青森・十和田湖＆奥入瀬渓流】苔むす清流・銚子大滝＆青森りんご極上宿 完全ガイド',
    metaDesc: '特別名勝・青森奥入瀬渓流＆十和田湖エリア完全特化！全長14kmの清流散策、銚子大滝、阿修羅の流れ、星野リゾート奥入瀬渓流ホテル、十和田湖遊覧船、十和田バラ焼きと青森食材フレンチ宿を徹底解説。',
    heroDesc: 'ブナやカエデの原生林を縫うように流れる「奥入瀬渓流（おいらせけいりゅう）」。岩を覆う鮮やかな苔と、激しく水しぶきを上げる滝の数々。十和田湖の深い青と、満点の星空、名湯に癒やされるネイチャーステイ。',
    categoryKey: 'aomori-oirase-towada-nature-stay',
    areaGuides: [
      {
        key: 'oirase_stream_luxury',
        title: '1. 奥入瀬渓流ウォーク〜阿修羅の流れ・銚子大滝（苔と水しぶきの天然美術館）',
        timing: '通年（5月〜6月の新緑、10月中旬〜下旬の全山紅葉、冬の氷瀑・氷柱）',
        desc: '国の特別名勝・天然記念物に指定された約14kmの「奥入瀬渓流」。激しい水流が岩を洗う「阿修羅の流れ」や、幅20m・落差7mの「銚子大滝」。渓流沿いの遊歩道を歩き、300種以上の苔が織りなす緑のミクロ世界を堪能。',
        spots: '阿修羅の流れ、銚子大滝、雲井の滝、三乱の流れ、奥入瀬渓流館（苔ソフト・こけ玉作り体験）',
        access: 'JR八戸駅・新青森駅よりJRバス「おいらせ号・みずうみ号」で約1時間30分〜2時間。各ホテル無料送迎あり。',
        tip: '渓流散策にはレンタサイクル（電動アシスト自転車）の利用が便利。各拠点で乗り捨てができるサービスもあります。'
      },
      {
        key: 'towada_lake_view',
        title: '2. 十和田湖・休屋周辺（二重カルデラ湖のパノラマと高村光太郎の乙女の像）',
        timing: '通年（十和田湖遊覧船・湖畔カヌーツアー）',
        desc: '周囲約46km、最大水深326.8mを誇る神秘のカルデラ湖「十和田湖」。「十和田湖遊覧船」から見上げる御倉半島と中山半島の断崖美。湖畔のシンボル高村光太郎作「乙女の像」や、杉木立に囲まれた古刹「十和田神社」。',
        spots: '十和田湖遊覧船（休屋〜子ノ口航路）、乙女の像、十和田神社（開運占い・青龍権現）、発荷峠展望台',
        access: '奥入瀬渓流子ノ口より遊覧船または車で約15分「休屋」へ。',
        tip: '「発荷峠展望台」は十和田湖の全景と八甲田連峰を一望できる随一のビューポイントで、早朝の雲海も格別です。'
      },
      {
        key: 'oirase_apple_gourmet',
        title: '3. 青森りんごスイーツ＆十和田バラ焼き（青森の恵みを味わうビュッフェ）',
        timing: '通年（秋の収穫期りんご・冬の熱々バラ焼き）',
        desc: '日本一のりんご王国・青森。焼きたてアップルパイやりんごジャム、シードル。B級ご当地グルメの王道「十和田バラ焼き（牛バラ肉と玉ねぎの甘辛炒め）」や、新鮮な八戸前沖サバ、青森県産牛のロースト。',
        spots: '十和田バラ焼き専門店、道の駅奥入瀬（奥入瀬ビール・ピザ）、十和田市現代美術館（アート散策）',
        access: '十和田市街地・奥入瀬エリア。',
        tip: '「十和田市現代美術館」では、草間彌生やロン・ミュエクの巨大アート作品が展示されており、必見の立ち寄りスポットです。'
      }
    ]
  },
  {
    slug: 'toyama-tateyama-kurobe-alpen-stay',
    badge: 'TATEYAMA ALPEN ROUTE GUIDE',
    title: '【富山・立山黒部アルペンルート】雪の大谷・みくりが池＆立山連峰・富山湾宿 完全ガイド',
    metaDesc: '世界屈指の山岳観光ルート・立山黒部アルペンルートエリア完全特化！高さ20mに達する「雪の大谷ウォーク」、標高2,410mの「室堂・みくりが池温泉」、黒部ダムの観光放水、富山湾の白えび・寒ブリ宿を徹底解説。',
    heroDesc: '標高3,000m級の北アルプスを貫く世界有数の山岳観光路「立山黒部アルペンルート」。春の巨大な雪の壁「雪の大谷」、紺碧の水面に立山が映る「みくりが池」。雲上の絶景温泉に浸かり、富山湾の海の幸を堪能する大冒険へ。',
    categoryKey: 'toyama-tateyama-kurobe-alpen-stay',
    areaGuides: [
      {
        key: 'tateyama_murodo_snow_view',
        title: '1. 室堂平〜雪の大谷・みくりが池（高さ20mの巨大雪壁と日本最高所の天然温泉）',
        timing: '春（4月中旬〜6月中旬の雪の大谷ウォーク）／夏〜秋（7月〜10月の室堂トレッキング・全山紅葉）',
        desc: 'アルペンルートの最高地点「室堂（標高2,450m）」。道路を豪快に除雪してできる高さ最大20mの「雪の大谷」。火口湖「みくりが池」のコバルトブルーと、日本最高所にある源泉かけ流し天然温泉「みくりが池温泉」。',
        spots: '雪の大谷ウォーク、みくりが池、ホテル立山（星空観察会）、みくりが池温泉（日本最高所温泉）、立山玉殿の湧水',
        access: '富山地方鉄道「立山駅」より立山ケーブルカーと高原バスを乗り継ぎ約1時間で「室堂」到着。',
        tip: '「ホテル立山」や「みくりが池温泉」など室堂に宿泊すると、観光客が帰った後の満点の天の川や朝焼けの立山連峰を独占できます。'
      },
      {
        key: 'tateyama_station_base',
        title: '2. 立山駅〜美女平・弥陀ヶ原（原生林の巨木と広大な高原湿原リゾート）',
        timing: '通年（アルペンルート運行期間：4月中旬〜11月30日）',
        desc: '富山側の出発拠点・立山駅周辺から高原エリア。樹齢数百年を誇るタテヤマスギの巨木が立ち並ぶ「美女平」や、高山植物が咲き誇るラムサール条約湿地「弥陀ヶ原（みだがはら）」。雲海を見下ろす高原ホテルステイ。',
        spots: '立山駅、美女平（バードウォッチング・巨木巡り）、弥陀ヶ原湿原（木道散策・雲海テラス）、称名滝（日本一の落差350m）',
        access: '北陸新幹線富山駅より富山地方鉄道で立山駅まで約60分。',
        tip: '「称名滝（しょうみょうだき）」は落差350mと日本一を誇り、特に春の雪解け期には隣にハンノキ滝が現れる二段滝の絶景が見られます。'
      },
      {
        key: 'toyama_bay_seafood_stay',
        title: '3. 黒部ダム放水＆富山湾の海の幸（白えび・紅ズワイガニ・黒部名水ポーク）',
        timing: '夏期：6月26日〜10月15日（黒部ダム大迫力観光放水）／冬期（寒ブリ・カニ）',
        desc: '堤高186m、日本一の高さを誇る巨大アーチ式ダム「黒部ダム」。毎秒10トン以上の水が虹を架けながら吹き出す大迫力の観光放水。下山後は、富山湾の宝石「白えび」の刺身や天ぷら、紅ズワイガニを満喫。',
        spots: '黒部ダム（展望台・新展望広場・ダムレストハウスの黒部ダムカレー）、富山湾海鮮料理店',
        access: '室堂よりトロリーバス・ロープウェイ・ケーブルカーを乗り継ぎ黒部ダムへ。',
        tip: '黒部ダムレストハウスの名物「黒部ダムカレー」は、ダムのえん堤をご飯で、エメラルドグリーンの湖水をグリーンカレーで再現した名物です。'
      }
    ]
  },
  {
    slug: 'hyogo-awaji-naruto-whirlpool-stay',
    badge: 'AWAJI ISLAND RESORT GUIDE',
    title: '【兵庫・淡路島＆鳴門海峡】うずしおクルーズ・淡路牛＆玉ねぎ・オーシャンビュー宿 完全ガイド',
    metaDesc: '関西屈指のリゾートアイランド・兵庫淡路島エリア完全特化！世界最大級の「鳴門の渦潮」クルーズ、明石海峡大橋、ニジゲンノモリ、淡路島玉ねぎ＆淡路牛・由良ウニ・3年とらふぐを味わう絶景温泉ホテルを徹底解説。',
    heroDesc: '明石海峡大橋を渡れば広がる青い海と緑の島「淡路島」。鳴門海峡で激しく渦巻く世界最大級の「うずしお」。波打ち際のインフィニティ温泉露天風呂から海を眺め、甘み豊かな淡路島玉ねぎと淡路牛ステーキに舌鼓を打つリゾートへ。',
    categoryKey: 'hyogo-awaji-naruto-whirlpool-stay',
    areaGuides: [
      {
        key: 'awaji_naruto_whirlpool_view',
        title: '1. 南あわじ・福良港〜鳴門海峡（世界一の渦潮を間近で体感するうずしおクルーズ）',
        timing: '通年（春と秋の大潮の時期は直径最大20mの巨大渦潮が出現）',
        desc: '瀬戸内海と太平洋の潮の干満差によって生まれる世界最大級の自然現象「鳴門の渦潮」。「うずしおクルーズ（咸臨丸・日本丸）」に乗船して、足元で轟音とともに巻く大迫力の渦潮を体感。大鳴門橋を見下ろす岬の温泉。',
        spots: 'うずしおクルーズ（福良港発着）、道の駅うずしお（大鳴門橋展望台・あわじ島バーガー）、うずの丘 大鳴門橋記念館（おっ玉葱オブジェ）',
        access: '神戸・三宮より高速バスで約80分「福良」下車。各旅館無料送迎あり。',
        tip: '「道の駅うずしお」の「あわじ島オニオンビーフバーガー」は、全国ご当地バーガーグランプリ1位に輝いた必食グルメです。'
      },
      {
        key: 'awaji_ocean_infinity',
        title: '2. 洲本温泉・海岸フロント（紀淡海峡を望むインフィニティ展望露天風呂）',
        timing: '通年（海から昇る感動の朝日サンライズと夜の波音）',
        desc: '淡路島最大の温泉郷「洲本温泉」。「ホテルニューアワジ」をはじめとする海岸沿いの名門リゾート。海と空と湯船がひとつに溶け合うインフィニティ露天風呂から、紀淡海峡を行き交う船や朝日の絶景を鑑賞。',
        spots: '洲本城跡（三熊山山頂・紀淡海峡パノラマ）、大浜海水浴場、洲本レトロこみち',
        access: '三宮・大阪駅より高速バス「洲本高速バスセンター」行きで約80〜100分。各宿送迎あり。',
        tip: '「洲本レトロこみち」は城下町の古民家を再生したお洒落なカフェやジェラート店、雑貨屋が並ぶ人気の散策小路です。'
      },
      {
        key: 'awaji_beef_onion_gourmet',
        title: '3. 淡路島三大美食づくし（淡路牛ステーキ・甘い淡路玉ねぎ・淡路島3年とらふぐ）',
        timing: '通年（冬期：11月〜3月の淡路島3年とらふぐ、夏の由良赤ウニ）',
        desc: '御食国（みけつくに）として朝廷に食材を納めてきた食の宝庫・淡路島。糖度が高く甘い「淡路島玉ねぎ」のステーキ、神戸牛の素牛となる「淡路牛」、鳴門の激流で3年間育てた濃厚な旨味の「淡路島3年とらふぐ」を堪能。',
        spots: '淡路ハイウェイオアシス（明石海峡大橋絶景）、ニジゲンノモリ（県立淡路島公園）、クラフトサーカス',
        access: '神戸淡路鳴門自動車道沿線。',
        tip: '淡路島3年とらふぐは、通常の2年物より一回り大きく育ち、白子や身の締まり・濃厚な旨味が段違いの冬の最高峰グルメです。'
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

for (const cfg of microWave9Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated micro tourist hub page: /${cfg.slug}`);
}
