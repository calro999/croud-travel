const fs = require('fs');
const path = require('path');

const batchData = JSON.parse(fs.readFileSync('./round107_batch_data.json', 'utf8'));

function createPageCode(item) {
  const { slug, themeTitle, metaDescription, featureTag, areaName, prefecture, seasonFocus, catchphrase, hotels } = item;
  
  const hotelDetails = {
    // 1. 赤湯温泉
    "5841": {
      name: "赤湯温泉 升形屋旅館",
      kana: "あかゆおんせん ますがたやりょかん",
      summary: "開湯920年の歴史を誇る赤湯温泉の中心に佇む老舗純和風旅館。源泉かけ流しの美肌名湯と、山形牛・米沢牛を贅沢に盛り込んだ郷土会席が人気。",
      spring: "含硫黄-ナトリウム・カルシウム-塩化物温泉（弱アルカリ性源泉かけ流し） / 効能：神経痛、筋肉痛、冷え性、切り傷、慢性皮膚病、美肌効果",
      cuisine: "A5ランク米沢牛のすき焼き鍋会席、山形名物芋煮汁、地場産ラ・フランスやぶどうのデザート、山形ワイナリー直送ワイン",
      charm: "硫黄が香る柔らかなお湯で体の芯からポカポカに。南陽のワイナリー巡りやぶどう狩りの拠点として至福のステイを提供。",
      access: "JR山形新幹線「赤湯駅」より車・タクシーで約5分（徒歩約20分） / 東北中央自動車道「南陽高畠IC」より車で約10分"
    },
    "14667": {
      name: "赤湯温泉 大正ロマン香る癒しの宿 丹波館",
      kana: "あかゆおんせん たいしょうろまんかおるいやしのやど たんばかん",
      summary: "大正ロマンの風情が色濃く残る、ステンドグラスとアンティーク調の落ち着いた温泉宿。2種類の源泉を引く良質な名湯と、米沢牛ステーキが評判。",
      spring: "含硫黄-ナトリウム・カルシウム-塩化物温泉 / 総ヒノキ風呂・大浴場 / 効能：美肌、疲労回復、リウマチ、胃腸病、冷え性",
      cuisine: "米沢牛のサーロインステーキ会席、山形県産つや姫の新米、旬のきのこ鍋、契約農家の朝採れ地場野菜小鉢",
      charm: "大正時代にタイムスリップしたようなノスタルジックな館内。心地よい湯守りの湯に浸かり、ワインと米沢牛に酔いしれる秋の夜長。",
      access: "JR赤湯駅よりタクシーで約5分 / 南陽高畠ICより車で約8分"
    },
    "11034": {
      name: "赤湯温泉 丹泉ホテル",
      kana: "あかゆおんせん たんせんほてる",
      summary: "赤湯温泉最大級の規模を誇る格式ある和風温泉ホテル。ローマ風大浴場や露天風呂、自家製手打ちそばと米沢牛の贅沢会席が自慢。",
      spring: "含硫黄-ナトリウム・カルシウム-塩化物泉 / 露天風呂・大浴場「古代ローマ風呂」 / 効能：神経痛、関節痛、筋肉痛、冷え性、五十肩、美肌",
      cuisine: "米沢牛のすき焼き・しゃぶしゃぶ・ステーキ選べる会席、名物手打ち十割そば、山形郷土料理、南陽産地ワイン",
      charm: "広々とした大浴場で名湯赤湯温泉を満喫。烏帽子山公園の紅葉散策やワイナリーへのアクセスも抜群の好立地。",
      access: "JR赤湯駅より車で約5分（送迎あり要予約） / 山形空港より車で約60分 / 南陽高畠ICより車で約10分"
    },

    // 2. 小布施
    "187457": {
      name: "天然温泉 旅人の湯 ホテルルートインＧｒａｎｄ中野小布施－信州中野駅前－",
      kana: "てんねんおんせん たびのゆ ほてるるーといんぐらんどなかのこぶせ しんしゅうなかのえきまえ",
      summary: "信州中野駅前、小布施町へ車で約10分の最新ハイグレードホテル。自家源泉「延徳温泉」の天然温泉大浴場と充実の施設で、小布施栗グルメ巡りの拠点に最適。",
      spring: "ナトリウム-塩化物温泉（天然温泉「延徳温泉」） / 大浴場・露天風呂・サウナ / 効能：神経痛、筋肉痛、冷え性、疲労回復、美肌効果",
      cuisine: "和洋50種以上の豪華朝食バイキング、信州名物おやき、信州そば、地元契約農家の採れたて信州りんご・高原野菜",
      charm: "小布施の栗スイーツ巡りや北斎館散策に絶好の立地。本格的なサウナと天然温泉でドライブの疲れをすっきりリフレッシュ。",
      access: "長野電鉄長野線「信州中野駅」より徒歩約1分 / 上信越自動車道「信州中野IC」より車で約10分"
    },
    "149041": {
      name: "小布施温泉あけびの湯",
      kana: "おぶせおんせん あけびのゆ",
      summary: "小布施の高台に位置し、北信五岳と北アルプスを一望する絶景天然温泉宿。日によって無色透明からエメラルドグリーン、白濁へと変化する神秘の硫黄泉。",
      spring: "含硫黄-ナトリウム・カルシウム-塩化物・硫酸塩温泉（湯色変化する天然温泉） / 展望露天風呂 / 効能：美肌、糖尿病、痛風、神経痛、冷え性",
      cuisine: "信州牛の陶板焼き会席、小布施名物栗おこわ、信州サーモンのお造り、季節の山菜とキノコの天ぷら",
      charm: "露天風呂から見渡す夕暮れ時の北アルプス紅葉パノラマは圧巻。泉質抜群の硫黄泉に浸かり、名物小布施栗を堪能する贅沢。",
      access: "長野電鉄「小布施駅」よりタクシーで約8分 / 上信越道「小布施PAスマートIC」より車で約5分"
    },
    "144487": {
      name: "須坂温泉 古城荘",
      kana: "すざかおんせん こじょうそう",
      summary: "小布施に隣接する蔵の町・須坂に佇む温泉旅館。豊かな緑に囲まれた広々とした庭園大浴場と、信州の恵みを盛り込んだ会席料理でおもてなし。",
      spring: "単純温泉（弱アルカリ性低張性高温泉） / 庭園露天風呂・大浴場 / 効能：リウマチ、神経痛、筋肉痛、疲労回復、冷え性",
      cuisine: "信州プレミアム牛のすき焼き鍋、須坂特産味噌仕立て鍋、手打ち信州そば、秋の味覚松茸ご飯（秋季限定）",
      charm: "小布施町中心部まで車で約10分。静かな環境でゆったりと温泉に浸かり、秋の信州果物狩り（ぶどう・りんご・栗）を満喫。",
      access: "長野電鉄「須坂駅」よりタクシーで約7分（送迎あり要連絡） / 須坂長野東ICより車で約15分"
    },

    // 3. 宇奈月温泉
    "40625": {
      name: "黒部峡谷・宇奈月温泉 ホテル黒部",
      kana: "くろべきょうこく うなづきおんせん ほてるくろべ",
      summary: "宇奈月温泉で最も黒部峡谷の奥深くに位置し、全客室や露天風呂から黒部峡谷とトロッコ電車を見下ろす特等席の絶景宿。名湯と富山湾の海の幸を堪能。",
      spring: "単純温泉（日本屈指の弱アルカリ性透明美肌湯） / 峡谷展望露天風呂 / 効能：美肌（つるつる効果）、神経痛、筋肉痛、冷え性、疲労回復",
      cuisine: "富山湾直送「活紅ズワイガニ会席」、白えびのお造り・かき揚げ、富山牛のステーキ、黒部名水ポーク鍋、富山湾の旬魚姿造り",
      charm: "露天風呂から手を振るとトロッコ電車の乗客が振り返してくれる絶景ロケーション。燃えるような峡谷紅葉を独り占めできる至福。",
      access: "富山地方鉄道「宇奈月温泉駅」より徒歩約15分（無料送迎あり） / 北陸自動車道「黒部IC」より車で約20分"
    },
    "39383": {
      name: "人気の露天風呂客室と富山の旬菜美味 宇奈月温泉サン柳亭",
      kana: "にんきのろてんぶろきゃくしつととやまのしゅんさいびみ うなづきおんせん さんりゅうてい",
      summary: "黒部川の清流沿いに佇む料理自慢の高級温泉旅館。富山湾のきときとな海の幸と、黒部川を望む露天風呂付き客室で極上のプライベートステイを提供。",
      spring: "単純温泉（宇奈月温泉源泉かけ流し） / 黒部川展望露天風呂・貸切風呂 / 効能：美肌、リラクゼーション、神経痛、冷え性",
      cuisine: "料理長厳選・極上紅ズワイガニ姿茹で、白えび・寒ブリ・ノドグロの贅沢お造り、富山牛の陶板焼き、名水仕込みのコシヒカリ",
      charm: "黒部川のせせらぎに包まれた上質な和の空間。客室露天風呂で紅葉を愛でながら、富山の味覚の王様・紅ズワイガニを堪能。",
      access: "宇奈月温泉駅より徒歩約3分（無料送迎あり） / 黒部ICより車で約20分 / 北陸新幹線「黒部宇奈月温泉駅」より富山地鉄乗換約25分"
    },
    "4804": {
      name: "宇奈月温泉の老舗旅館 延対寺荘",
      kana: "うなづきおんせんのしにせりょかん えんたいじそう",
      summary: "創業明治33年、川端康成や与謝野晶子ら文人墨客が愛した宇奈月を代表する老舗宿。黒部峡谷の断崖絶壁にせり出す露天風呂からのパノラマが圧巻。",
      spring: "単純温泉（弱アルカリ性源泉かけ流し） / 渓谷露天風呂「幽玄の湯」 / 効能：美肌作用、神経痛、関節痛、疲労回復、健康増進",
      cuisine: "延対寺伝統の越中会席。富山湾紅ズワイガニ、名物「白えび御膳」、厳選とやま和牛、富山湾深層水仕込みの旬魚",
      charm: "文豪が逗留した歴史ある客室から見下ろす黒部峡谷の錦秋パノラマ。川の轟音と名湯が織りなす極上の癒やし時間。",
      access: "富山地鉄宇奈月温泉駅より徒歩約5分（送迎あり） / 黒部ICより車で約20分"
    },

    // 4. 嵐山
    "8838": {
      name: "京都 嵐山温泉 渡月亭",
      kana: "きょうと あらしやまおんせん とげつてい",
      summary: "創業明治30年、渡月橋南詰に佇む嵐山を代表する老舗料理旅館。嵐山温泉の湯量豊かな美肌湯と、伝統の京懐石・湯豆腐会席で極上の京都時間を演出。",
      spring: "単純温泉（低張性弱アルカリ性温泉） / 嵐山温泉大浴場 / 効能：神経痛、筋肉痛、関節痛、五十肩、冷え性、美肌効果",
      cuisine: "伝統の嵐山京懐石料理。京都丹波牛の陶板焼き、名物嵯峨豆腐の小鍋、旬の松茸土瓶蒸し（秋季限定）、京野菜の吹き寄せ",
      charm: "渡月橋や嵯峨野竹林、保津川下りの乗船場へも抜群のロケーション。秋の夕暮れに染まる嵐山を眺めながら味わう京料理が格別。",
      access: "阪急嵐山線「嵐山駅」より徒歩約5分 / JR嵯峨野線「嵯峨嵐山駅」より徒歩約15分（車で約5分） / 名神高速・京都南ICより約35分"
    },
    "73923": {
      name: "嵐山温泉彩四季の宿 花筏",
      kana: "あらしやまおんせんいろどりしきのやど はないかだ",
      summary: "渡月橋のたもとに位置し、嵐山と渡月橋を一望できる展望露天風呂が自慢の純和風温泉旅館。自家製豆腐や京懐石料理が評判の隠れ宿。",
      spring: "単純温泉（嵐山温泉自家源泉） / 展望露天風呂「遊月の湯」「風花の湯」 / 効能：美肌、疲労回復、筋肉痛、冷え性",
      cuisine: "名物「自家製すくい豆腐会席」、京地鶏鍋、京都丹波牛ステーキ、秋の味覚吹き寄せ前菜、京漬物と炊きたてご飯",
      charm: "展望露天風呂から見晴らす錦秋の嵐山と渡月橋の眺望は息をのむ美しさ。保津川下りや嵯峨野トロッコ列車の旅とあわせて楽しめます。",
      access: "阪急嵐山駅より徒歩約5分 / 嵯峨嵐山駅よりタクシー約5分 / 京都南ICより約35分"
    },
    "18908": {
      name: "京都嵐山 花のいえ",
      kana: "きょうとあらしやま はなのいえ",
      summary: "大堰川（保津川）のほとり、嵯峨野の静寂な住宅街に佇む公立学校共済組合の指定保養所（一般利用可能）。天然温泉と本格京懐石をリーズナブルに堪能。",
      spring: "単純温泉（嵐山温泉引湯） / 大浴場 / 効能：神経痛、筋肉痛、冷え性、疲労回復",
      cuisine: "季節の本格京会席、京都産黒毛和牛の陶板焼き、季節の旬魚お造り、湯葉と生麩の炊き合わせ、手作り和スイーツ",
      charm: "嵯峨野散策や天龍寺、竹林の小径へ徒歩すぐ。手入れの行き届いた日本庭園を眺めながら静かに過ごせる大人の隠れ家。",
      access: "京福電鉄（嵐電）「嵐電嵯峨駅」より徒歩約5分 / JR嵯峨嵐山駅より徒歩約7分 / 阪急嵐山駅より徒歩約12分"
    },

    // 5. 指宿
    "10832": {
      name: "指宿温泉 指宿ロイヤルホテル ～すべての女性へ美と健康を楽しむホテル～",
      kana: "いぶすきおんせん いぶすきろいやるほてる",
      summary: "錦江湾の高台に建ち、全室オーシャンビューを誇るリゾート温泉ホテル。開聞岳と海を見晴らす絶景露天風呂と、タラソテラピーや鹿児島美食が人気。",
      spring: "ナトリウム-塩化物温泉（高温泉） / 絶景展望露天風呂 / 効能：美肌効果、冷え性、神経痛、筋肉痛、疲労回復、デトックス",
      cuisine: "鹿児島県産黒豚のしゃぶしゃぶ鍋会席、近海獲れたてキハダマグロ・キビナゴのお造り、さつま揚げ、鹿児島黒牛ステーキ",
      charm: "海から昇る朝日を望む露天風呂。有名な「砂むし会館 砂楽」へのアクセスも良く、砂むし風呂と天然温泉の贅沢なダブル湯浴みが叶います。",
      access: "JR指宿枕崎線「指宿駅」よりタクシーで約5分（無料送迎あり要予約） / 鹿児島空港より連絡バス約95分"
    },
    "15962": {
      name: "指宿温泉 いぶすき秀水園",
      kana: "いぶすきおんせん いぶすきしゅうすいえん",
      summary: "プロが選ぶ日本のホテル・旅館100選「料理部門」で連続全国1位を獲得した日本屈指の料理旅館。枯山水庭園と名湯、至高の薩摩会席でおもてなし。",
      spring: "ナトリウム-塩化物温泉（指宿温泉源泉） / 庭園露天風呂・足湯 / 効能：美肌、切り傷、やけど、神経痛、冷え性",
      cuisine: "全国料理1位の特選薩摩懐石。極上鹿児島黒毛和牛の炭火焼き、鹿児島黒豚のやわらか角煮、錦江湾直送鮮魚の姿造り、さつま郷土小鉢",
      charm: "砂むし会館「砂楽」まで徒歩約3分の好立地。砂むし温泉で汗を流した後は、全国一と称される究極の薩摩料理に舌鼓を打つ極上の時間。",
      access: "JR指宿駅より車で約5分（送迎あり） / 指宿スカイライン「谷山IC」より国道225号経由約50分"
    },
    "54567": {
      name: "指宿温泉 指宿こころの宿",
      kana: "いぶすきおんせん いぶすきこころのやど",
      summary: "多彩な湯処とリラクゼーション施設を備えた大型温泉リゾート。天然温泉の大浴場や露天風呂、岩盤浴、鹿児島郷土料理バイキングまたは御膳を満喫。",
      spring: "ナトリウム-塩化物泉 / 露天風呂・檜風呂・炭酸泉・サウナ・岩盤浴 / 効能：冷え性、腰痛、関節痛、疲労回復、美肌",
      cuisine: "鹿児島黒豚しゃぶしゃぶ鍋御膳、きびなご天ぷら、近海カツオのタタキ、地場産さつま芋スイーツ",
      charm: "広々とした館内で湯めぐりと岩盤浴三昧。知覧武家屋敷や開聞岳へのドライブ観光の拠点として抜群の快適性とコストパフォーマンス。",
      access: "JR指宿駅より車で約10分（無料送迎あり要予約） / 谷山ICより約45分"
    }
  };

  const hotel1 = hotels[0];
  const hotel2 = hotels[1];
  const hotel3 = hotels[2];

  const info1 = hotelDetails[String(hotel1.hotelNo)] || {
    name: hotel1.hotelName,
    kana: "",
    summary: hotel1.hotelSpecial || "名湯と絶品料理を堪能できる名宿。",
    spring: "天然温泉 / 美肌効果、疲労回復",
    cuisine: "地場産旬食材を活かした季節の会席料理",
    charm: "落ち着いた和の空間と心地よいおもてなし。",
    access: hotel1.access || "最寄り駅よりアクセス良好"
  };

  const info2 = hotelDetails[String(hotel2.hotelNo)] || {
    name: hotel2.hotelName,
    kana: "",
    summary: hotel2.hotelSpecial || "豊かな自然に囲まれた贅沢な癒やしの宿。",
    spring: "天然温泉 / 疲労回復、リフレッシュ",
    cuisine: "厳選食材による特製和食膳",
    charm: "四季折々の景色を望む絶景風呂。",
    access: hotel2.access || "最寄り駅より車でアクセス"
  };

  const info3 = hotelDetails[String(hotel3.hotelNo)] || {
    name: hotel3.hotelName,
    kana: "",
    summary: hotel3.hotelSpecial || "心温まるもてなしと絶品グルメが人気の隠れ宿。",
    spring: "天然温泉 / 冷え性改善、美肌効果",
    cuisine: "旬の郷土料理と厳選牛会席",
    charm: "静寂に包まれたプライベートな滞在。",
    access: hotel3.access || "最寄り駅よりアクセス"
  };

  return `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${themeTitle} | クラウドトラベルふるさと納税',
  description: '${metaDescription}',
  keywords: ['${areaName} 紅葉 観光', '${prefecture} 10月 11月 旅行', '${featureTag}', 'ふるさと納税 温泉宿泊券', '${info1.name}', '${info2.name}', '${info3.name}', '楽天ふるさと納税 宿泊クーポン'],
  alternates: {
    canonical: 'https://croud-travel.com/${slug}',
  },
  openGraph: {
    title: '${themeTitle}',
    description: '${metaDescription}',
    url: 'https://croud-travel.com/${slug}',
    siteName: 'クラウドトラベル (croud-travel.com)',
    type: 'article',
    locale: 'ja_JP',
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${themeTitle}",
    "description": "${metaDescription}",
    "author": {
      "@type": "Organization",
      "name": "クラウドトラベル編集部"
    },
    "publisher": {
      "@type": "Organization",
      "name": "クラウドトラベル",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.com/logo.png"
      }
    },
    "datePublished": "2026-09-20",
    "dateModified": "2026-09-20",
    "mainEntityOfPage": "https://croud-travel.com/${slug}"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "${areaName}の秋（10月〜11月）のベストシーズン・見どころはいつですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "例年${seasonFocus}が見頃のピークとなります。山々や街並みの美しい秋景色とともに、旬を迎える地場食材を存分にお楽しみいただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "楽天ふるさと納税のトラベルクーポンは予約時にすぐ使えますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、寄付完了後最短即日〜数日以内に楽天トラベルのマイクーポンに付与されます。予約時にクーポンを適用することで、最大30%相当の宿泊補助が受けられます。"
        }
      },
      {
        "@type": "Question",
        "name": "秋の${areaName}旅行における服装や持ち物のポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "10月〜11月の${areaName}は朝夕の冷え込みが強まります。日中は快適な服装で問題ありませんが、朝夕の散策や露天風呂への移動時には防寒着（フリースやジャケット等）を必ずご用意ください。"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 leading-relaxed font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-stone-900 via-amber-950 to-orange-950 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-amber-500/30 text-amber-200 border border-amber-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              ${prefecture} / ${areaName}
            </span>
            <span className="bg-orange-600/40 text-orange-200 border border-orange-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              10月〜11月 秋限定特集
            </span>
            <span className="bg-emerald-600/40 text-emerald-200 border border-emerald-400/40 text-xs font-semibold px-3 py-1 rounded-full">
              ふるさと納税 宿泊クーポン対象
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            ${themeTitle}
          </h1>
          <p className="text-base sm:text-lg text-amber-100 max-w-3xl leading-relaxed">
            ${catchphrase}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1">📅 旬のシーズン：${seasonFocus}</span>
            <span className="flex items-center gap-1">♨️ 自慢の泉質＆旬の味覚会席</span>
            <span className="flex items-center gap-1">🎁 実質自己負担2,000円で高級宿ステイ</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-950 border-b-2 border-amber-600 pb-3 mb-6">
            はじめに：秋の${areaName}で味わう絶景と至高の温泉時間
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            10月から11月にかけての${prefecture}・${areaName}は、豊かな自然美と歴史情緒が鮮やかに交差する特別なシーズンを迎えます。澄んだ秋空の下、山肌や街並みが織りなす錦秋のパノラマは息をのむ美しさで、訪れる人々を魅了してやみません。
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            心地よい秋風を感じながら名所を巡ったあとは、名湯に身を浸して日々の喧騒を忘れ、夜には秋の実りを凝縮した贅沢な郷土会席に舌鼓を打つ――これこそが大人の旅にふさわしい至高の贅沢です。
          </p>
          <p className="text-slate-700 leading-relaxed">
            本記事では、${areaName}エリアで高い評価を誇るおすすめの名宿3選を徹底解説します。楽天ふるさと納税の宿泊クーポンを活用すれば、実質自己負担わずか2,000円で憧れの高級旅館や温泉宿にお得に宿泊可能です。秋の特別な旅行プランをぜひご検討ください。
          </p>
        </section>

        {/* Highlight Points */}
        <section className="bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200 mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <span>🍁</span> ${areaName} 秋旅の3大魅力ポイント
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">① 圧巻の秋色パノラマ絶景</div>
              <p className="text-xs sm:text-sm text-slate-600">
                10月〜11月限定の美しいグラデーション。清流や歴史的建造物と調和した絶景を満喫できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">② 歴史と効能を誇る名湯</div>
              <p className="text-xs sm:text-sm text-slate-600">
                湯量豊富な天然温泉や情緒ある露天風呂。秋の爽やかな外気を感じながら心身を優しく解きほぐせます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">③ 実りの秋を味わう郷土美食</div>
              <p className="text-xs sm:text-sm text-slate-600">
                厳選されたブランド和牛や旬の海の幸・山の幸、採れたての新米を味わう贅沢な秋会席。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel 1 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4 mb-6">
            <div>
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">HOTEL SELECTION 01</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">${info1.name}</h3>
              <p className="text-xs text-slate-500">${info1.kana}</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: ${hotel1.reviewAverage || "4.2"}点 <span className="text-xs font-normal text-slate-600">(${hotel1.reviewCount || 0}件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="${hotel1.hotelImageUrl}"
                alt="${info1.name}の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  ${info1.summary}
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ${info1.spring}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：${info1.access}
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ${info1.cuisine}
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ${info1.charm}
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="${hotel1.hotelInformationUrl}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:from-amber-700 hover:to-orange-700 transition duration-150 transform hover:-translate-y-0.5 w-full sm:w-auto text-sm sm:text-base"
            >
              <span>🏨</span> 楽天トラベルで空室・プランを見る
            </a>
          </div>
        </section>

        {/* Hotel 2 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4 mb-6">
            <div>
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">HOTEL SELECTION 02</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">${info2.name}</h3>
              <p className="text-xs text-slate-500">${info2.kana}</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: ${hotel2.reviewAverage || "4.1"}点 <span className="text-xs font-normal text-slate-600">(${hotel2.reviewCount || 0}件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="${hotel2.hotelImageUrl}"
                alt="${info2.name}の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  ${info2.summary}
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ${info2.spring}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：${info2.access}
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ${info2.cuisine}
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ${info2.charm}
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="${hotel2.hotelInformationUrl}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:from-amber-700 hover:to-orange-700 transition duration-150 transform hover:-translate-y-0.5 w-full sm:w-auto text-sm sm:text-base"
            >
              <span>🏨</span> 楽天トラベルで空室・プランを見る
            </a>
          </div>
        </section>

        {/* Hotel 3 */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4 mb-6">
            <div>
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">HOTEL SELECTION 03</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">${info3.name}</h3>
              <p className="text-xs text-slate-500">${info3.kana}</p>
            </div>
            <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1">
              ★ 楽天評価: ${hotel3.reviewAverage || "4.3"}点 <span className="text-xs font-normal text-slate-600">(${hotel3.reviewCount || 0}件)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner bg-slate-100">
              <img
                src="${hotel3.hotelImageUrl}"
                alt="${info3.name}の外観・温泉風景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-base mb-2">宿の概要とロケーション</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  ${info3.summary}
                </p>
                <h4 className="font-bold text-slate-800 text-base mb-2">自慢の温泉・泉質</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ${info3.spring}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                📍 アクセス：${info3.access}
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6 space-y-4">
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>🍽️</span> 料理のこだわり・秋の旬会席
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ${info3.cuisine}
              </p>
            </div>
            <div>
              <h5 className="font-bold text-stone-800 text-sm mb-1 flex items-center gap-1.5">
                <span>✨</span> おすすめの過ごし方・魅力
              </h5>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ${info3.charm}
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href="${hotel3.hotelInformationUrl}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:from-amber-700 hover:to-orange-700 transition duration-150 transform hover:-translate-y-0.5 w-full sm:w-auto text-sm sm:text-base"
            >
              <span>🏨</span> 楽天トラベルで空室・プランを見る
            </a>
          </div>
        </section>

        {/* Furusato Tax Guide Section */}
        <section className="bg-gradient-to-br from-stone-900 to-amber-950 text-white rounded-2xl p-6 sm:p-8 shadow-lg mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-amber-200">
            💡 楽天ふるさと納税で「宿泊クーポン」を賢く手に入れる3ステップ
          </h3>
          <p className="text-stone-200 text-sm sm:text-base leading-relaxed mb-6">
            楽天ふるさと納税を利用すれば、${prefecture}内の対象宿泊施設で使える楽天トラベルクーポンが寄付額に応じて返礼品として付与されます。実質負担2,000円で高級宿に泊まれるお得な活用法をチェックしましょう。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700">
              <div className="text-amber-400 font-bold text-sm mb-1">STEP 1. 控除上限額を確認</div>
              <p className="text-xs text-stone-300">
                ご自身の年収や家族構成から、自己負担2,000円で寄付できる年間控除上限額をシミュレーションします。
              </p>
            </div>
            <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700">
              <div className="text-amber-400 font-bold text-sm mb-1">STEP 2. 自治体へ寄付</div>
              <p className="text-xs text-stone-300">
                楽天ふるさと納税から対象自治体の「楽天トラベルクーポン返礼品」を選んで寄付を申し込みます。
              </p>
            </div>
            <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700">
              <div className="text-amber-400 font-bold text-sm mb-1">STEP 3. 予約時にクーポン適用</div>
              <p className="text-xs text-stone-300">
                付与されたクーポンを楽天トラベルの予約画面で選択するだけで、即座に宿泊代金が割引されます。
              </p>
            </div>
          </div>
          <div className="bg-amber-950/60 p-4 rounded-xl border border-amber-500/30 text-xs sm:text-sm text-amber-100 flex items-start gap-2">
            <span>ℹ️</span>
            <span>
              <strong>ポイント還元の二重取り：</strong>楽天カード決済や「お買い物マラソン」「0と5のつく日」を併用すると、寄付額に対して高還元率で楽天ポイントも獲得でき、さらにお得になります。
            </span>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3 mb-6">
            よくある質問（FAQ）
          </h3>
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h4 className="font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
                <span className="text-amber-600 font-bold">Q.</span> ${areaName}の秋の見頃時期はいつですか？
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">
                例年${seasonFocus}が見頃となります。標高差や気候に合わせて色づきが移り変わり、長期間にわたって楽しめます。
              </p>
            </div>
            <div className="border-b border-slate-100 pb-4">
              <h4 className="font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
                <span className="text-amber-600 font-bold">Q.</span> ふるさと納税クーポンと楽天トラベルの他セールクーポンは併用できますか？
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">
                楽天トラベルでは、原則として自治体発行のふるさと納税クーポンと一部の宿クーポン等を組み合わせて利用可能です。予約ステップで適用可能なクーポンが自動表示されます。
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
                <span className="text-amber-600 font-bold">Q.</span> 秋の旅行時に必要な服装や装備は？
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">
                10月〜11月の${areaName}は朝夕の冷え込みが予想されます。日中は薄手のアウターで快適ですが、早朝や夜間、散策時には厚手のフリースやジャケット、歩きやすい靴をご用意ください。
              </p>
            </div>
          </div>
        </section>

        {/* Navigation / Back to List */}
        <div className="text-center py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-600 font-bold text-sm sm:text-base transition"
          >
            ← トップページ・特集一覧に戻る
          </Link>
        </div>
      </main>
    </div>
  );
}
`;
}

for (const item of batchData) {
  const targetDir = path.resolve(`./src/app/${item.slug}`);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const pageFile = path.join(targetDir, 'page.tsx');
  const code = createPageCode(item);
  fs.writeFileSync(pageFile, code, 'utf8');
  console.log(`Generated page: ${pageFile}`);
}

console.log("All 5 pages for Round 107 generated successfully.");
