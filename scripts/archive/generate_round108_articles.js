const fs = require('fs');
const path = require('path');

const batchData = JSON.parse(fs.readFileSync('./round108_batch_data.json', 'utf8'));

function createPageCode(item) {
  const { slug, themeTitle, metaDescription, featureTag, areaName, prefecture, seasonFocus, catchphrase, hotels } = item;
  
  const hotelDetails = {
    // 1. 塩原温泉
    "72035": {
      name: "塩原温泉 伊東園ホテル塩原",
      kana: "しおばらおんせん いとうえんほてるしおばら",
      summary: "塩原渓谷の自然林に包まれたリーズナブルな温泉ホテル。開湯1200年の名湯塩原温泉の大浴場・露天風呂と、季節の和洋中バイキングを満喫。",
      spring: "ナトリウム・カルシウム-塩化物・炭酸水素塩温泉 / 露天風呂・大浴場 / 効能：神経痛、筋肉痛、関節痛、冷え性、疲労回復、美肌",
      cuisine: "季節の和洋中バイキング（アルコール・ソフトドリンク飲み放題付き）、栃木名物餃子、地場産旬野菜コーナー",
      charm: "もみじ谷大吊橋や塩原渓谷遊歩道への観光拠点に最適。気軽に良質な天然温泉とバイキングを楽しめるコストパフォーマンス抜群の宿。",
      access: "JR東北新幹線「那須塩原駅」より路線バスで約60分（無料送迎バス運行あり要予約） / 東北自動車道「西那須野塩原IC」より車で約25分"
    },
    "32030": {
      name: "塩原温泉 奥塩原高原ホテル",
      kana: "しおばらおんせん おくしおばらこうげんほてる",
      summary: "奥塩原新湯温泉の高台、標高1,000mの白樺林に佇む静寂の高原リゾート。乳白色の天然硫黄泉かけ流しと、とちぎ和牛を味わう会席料理が自慢。",
      spring: "単純硫黄温泉（硫化水素型・乳白色源泉かけ流し） / 展望露天風呂・貸切露天風呂 / 効能：慢性皮膚病、冷え性、高血圧症、動脈硬化症、美肌効果",
      cuisine: "とちぎ和牛の陶板焼き会席、塩原名物「塩原高原大根」の風呂吹き、岩魚の塩焼き、契約農家直送コシヒカリ、栃木の地酒",
      charm: "湯花舞う乳白色の極上硫黄泉。秋には露天風呂から白樺と紅葉のコントラストを一望でき、大人の贅沢な湯治時間を過ごせます。",
      access: "那須塩原駅よりバス約65分（送迎あり要予約） / 西那須野塩原ICより国道400号経由約35分"
    },
    "129503": {
      name: "塩原温泉 創作料理と源泉掛け流しの宿 本陣",
      kana: "しおばらおんせん そうさくりょうりとげんせんかけながしのやど ほんじん",
      summary: "箒川の渓流沿いに建つ、全室趣異なる贅沢な温泉隠れ宿。敷地内自噴の源泉かけ流し天然温泉と、料理長が腕を振るう創作会席が絶賛される宿。",
      spring: "ナトリウム・カルシウム-塩化物・硫酸塩温泉 / 自家源泉100%完全かけ流し露天風呂 / 効能：美肌、神経痛、筋肉痛、五十肩、冷え性改善",
      cuisine: "A5とちぎ和牛のフィレステーキ、塩原高原野菜の彩り前菜、八溝ししまる（猪肉）の創作小鍋、清流イワナのお造り",
      charm: "箒川のせせらぎを聞きながら入る源泉かけ流し露天風呂。細やかなおもてなしと極上の創作料理で記念日旅行にも最適。",
      access: "JR那須塩原駅よりJRバス約50分「塩原塩釜」下車徒歩約2分 / 西那須野塩原ICより車で約20分"
    },

    // 2. 白骨温泉
    "141241": {
      name: "白骨温泉 小梨の湯 笹屋",
      kana: "しらほねおんせん こなしのゆ ささや",
      summary: "白樺の原生林に抱かれた一日限定数組の静かな隠れ宿。敷地内から自噴する乳白色の源泉かけ流し温泉と、囲炉裏でいただく滋味豊かな信州会席が評判。",
      spring: "含硫黄-カルシウム・マグネシウム-炭酸水素塩温泉（硫化水素型） / 自家源泉100%かけ流し貸切露天風呂 / 効能：胃腸病、神経痛、慢性婦人病、美肌効果、冷え性",
      cuisine: "囲炉裏炭火焼き料理、信州牛の朴葉味噌焼き、清流岩魚の塩焼き、白骨名物「温泉粥」、信州の手打ちそば、地場産山菜・キノコ",
      charm: "「３日入れば３年風邪をひかぬ」と称される名湯。静寂に包まれた貸切露天風呂で、黄金のカラマツ林を眺めながら極上の癒やし。",
      access: "松本電鉄上高地線「新島々駅」より路線バスで約70分「白骨温泉」下車（送迎あり要予約） / 長野道「松本IC」より車で約60分"
    },
    "38986": {
      name: "白骨温泉 お宿つるや （旧：つるや旅館）",
      kana: "しらほねおんせん おやどつるや",
      summary: "白骨温泉の中心に位置し、文人墨客にも親しまれた伝統の温泉旅館。総木造りの大浴場と露天風呂で、湯花漂う白濁名湯と信州の恵みを満喫。",
      spring: "含硫黄-カルシウム・マグネシウム-炭酸水素塩温泉 / 源泉かけ流し木造大浴場・露天風呂 / 効能：胃腸病、神経痛、筋肉痛、疲労回復、健康増進",
      cuisine: "信州プレミアム牛のすき焼き鍋会席、信州サーモンのお造り、白骨温泉水で炊いた温泉粥朝食、安曇野わさび",
      charm: "湯船の底に湯花が沈む濃厚な乳白色温泉。上高地や乗鞍高原の紅葉トレッキングの拠点として絶好のロケーション。",
      access: "新島々駅よりバス約70分「泡の湯」または「白骨温泉」下車すぐ / 松本ICより約60分 / 高山ICより約70分"
    },
    "128531": {
      name: "白骨温泉 白船グランドホテル",
      kana: "しらほねおんせん しらふねぐらんどほてる",
      summary: "白骨温泉の高台に建ち、乗鞍岳の山並みを見晴らす大型温泉旅館。開放的な展望露天風呂と、自家源泉の白濁湯、信州の旬会席が自慢。",
      spring: "含硫黄-カルシウム・マグネシウム-炭酸水素塩温泉 / 展望大浴場・露天風呂・野天風呂 / 効能：美肌、リウマチ、高血圧、動脈硬化、疲労回復",
      cuisine: "信州牛の陶板焼き会席、名物「白船鍋」、信州産そば、温泉粥、地元契約農家の採れたて高原野菜小鉢",
      charm: "標高1,400mの澄み切った空気と絶景露天風呂。秋の夜には満天の星が広がり、乳白色の湯に浸かりながら非日常の感動を味わえます。",
      access: "新島々駅より路線バス約70分（無料送迎あり要予約） / 松本ICより車で約60分 / 中部縦貫道・安房峠道路経由で高山方面からもアクセス可"
    },

    // 3. 和倉温泉・千里浜
    "7182": {
      name: "和倉温泉 花ごよみ",
      kana: "わくらおんせん はなごよみ",
      summary: "七尾湾の潮風香る数寄屋造りの純和風旅館。開湯1200年の歴史を持つ和倉の天然塩化物泉と、能登の旬魚・能登牛会席で心温まるもてなし。",
      spring: "ナトリウム・カルシウム-塩化物温泉（高温泉） / 露天風呂・大浴場 / 効能：リウマチ、神経痛、冷え性、切り傷、疲労回復、美肌",
      cuisine: "能登牛の陶板焼き、七尾湾獲れたて地魚のお造り盛り合わせ、能登ふぐ料理、季節の釜飯、能登の地酒",
      charm: "塩分を豊富に含む温泉は湯冷めしにくく体の芯までポカポカ。千里浜なぎさドライブウェイの夕日ドライブとあわせた能登応援旅。",
      access: "JR七尾線・のと鉄道「和倉温泉駅」より車で約5分（無料送迎あり） / のと里山海道「和倉IC」より車で約8分"
    },
    "11144": {
      name: "和倉温泉 ゆけむりの宿美湾荘",
      kana: "わくらおんせん ゆけむりのやどびわんそう",
      summary: "七尾湾に面して建ち、全客室や露天風呂から波静かな海を一望できる名門旅館。職人の美意識が宿る館内と、能登の山海美味を凝縮した贅沢会席。",
      spring: "ナトリウム・カルシウム-塩化物泉 / 海辺の露天風呂・大浴場 / 効能：美肌効果、保温効果、神経痛、関節痛、疲労回復",
      cuisine: "厳選能登牛会席、七尾湾直送ズワイガニ（秋・冬限定）、のどぐろ塩焼き、能登コシヒカリ、輪島ふぐのたたき",
      charm: "海と一体化するような絶景露天風呂。朝日に輝く七尾湾を眺めながらの朝風呂と、能登の誇るブランド牛・海の幸に舌鼓。",
      access: "JR和倉温泉駅より車で約5分（無料送迎バスあり） / 和倉ICより車で約7分 / のと里山空港より車で約50分"
    },
    "146888": {
      name: "和倉温泉はまづる",
      kana: "わくらおんせんはまづる",
      summary: "和倉温泉街の中心に位置し、源泉かけ流しの良質な天然温泉と家庭的なおもてなしが評判の純和風宿。能登の味覚をリーズナブルに堪能。",
      spring: "ナトリウム・カルシウム-塩化物泉（源泉かけ流し） / 家族風呂・内湯 / 効能：神経痛、筋肉痛、冷え性、皮膚病、美肌",
      cuisine: "能登牛ステーキ御膳、七尾港水揚げ旬魚の刺身、能登豚のしゃぶしゃぶ鍋、手作り郷土料理の小鉢",
      charm: "温泉街の名所「湯元の広場」や総湯へも徒歩すぐ。アットホームな空間で良泉に浸かり、気兼ねなく能登の旅情を満喫。",
      access: "JR和倉温泉駅よりバスまたはタクシーで約5分 / 和倉ICより車で約8分"
    },

    // 4. 高野山・龍神温泉
    "43782": {
      name: "龍神温泉 季楽里 龍神",
      kana: "りゅうじんおんせん きらり りゅうじん",
      summary: "日高川の清流沿いに建ち、日本三美人の湯・龍神温泉の極上美肌湯を堪能できるモダン温泉リゾート。広々とした大浴場と露天風呂、熊野牛会席が人気。",
      spring: "ナトリウム-炭酸水素塩温泉（純重曹泉・pH8.5超） / 源泉かけ流し大浴場・露天風呂・サウナ / 効能：美肌（角質軟化・美白）、神経痛、筋肉痛、冷え性",
      cuisine: "特選熊野牛のすき焼き鍋会席、日高川清流アマゴの塩焼き、紀州うめどり料理、龍神椎茸の炭火焼き、梅酒飲み比べ",
      charm: "化粧水に浸かっているかのようなトロトロの美肌湯。高野龍神スカイラインの紅葉ドライブと高野山参拝の後に至福のひととき。",
      access: "JR紀勢本線「紀伊田辺駅」より龍神バスで約80分「季楽里龍神」下車すぐ / 阪和自動車道「有田IC」または「南紀田辺IC」より車で約70分"
    },
    "68138": {
      name: "龍神温泉 下御殿",
      kana: "りゅうじんおんせん しもごてん",
      summary: "寛文年間（江戸時代初期）、紀州徳川藩の初代藩主・徳川頼宣公が逗留のために建てた歴史ある御宿。総ヒノキ風呂と混浴大露天風呂で名湯を満喫。",
      spring: "ナトリウム-炭酸水素塩泉（日本三美人の湯源泉） / 総檜内湯・日高川を望む露天風呂 / 効能：美肌作用、切り傷、やけど、神経痛、冷え性",
      cuisine: "名物「紀州熊野牛温泉しゃぶしゃぶ」、日高川産天然鮎の塩焼き、山の芋鍋、紀州備長炭で焼く山里料理、地酒",
      charm: "江戸の殿様が愛した歴史ある佇まい。日高川の渓流露天風呂で肌を磨き、熊野牛を温泉水でくぐらせる絶品しゃぶしゃぶに舌鼓。",
      access: "JR紀伊田辺駅より龍神バス約80分「龍神温泉」下車徒歩約1分 / 有田ICより約75分"
    },
    "130578": {
      name: "龍神温泉 民宿旅館 ささゆり",
      kana: "りゅうじんおんせん みんしゅくりょかん ささゆり",
      summary: "龍神温泉の温泉街に佇む、温かいもてなしと手作り料理が評判の純和風宿。日本三美人の湯を源泉かけ流しで24時間いつでも堪能できる。",
      spring: "ナトリウム-炭酸水素塩温泉（源泉100%かけ流し） / 家族風呂・天然温泉内湯 / 効能：美肌、神経痛、五十肩、冷え性改善",
      cuisine: "熊野牛の陶板焼き、日高川の川魚塩焼き、自家菜園の無農薬野菜料理、手作りこんにゃく、紀州梅干しと炊きたてご飯",
      charm: "名湯・龍神温泉元湯へも徒歩圏内。家庭的な温もりと源泉かけ流しの贅沢をリーズナブルに味わえる隠れ家民宿。",
      access: "JR紀伊田辺駅より龍神バス約80分「龍神温泉」下車徒歩約3分 / 南紀田辺ICより車で約70分"
    },

    // 5. 雲仙温泉
    "6194": {
      name: "雲仙温泉 民芸モダンの宿 雲仙福田屋",
      kana: "うんぜんおんせん みんげいもだんのやど うんぜんふくだや",
      summary: "民芸の温もりと洗練されたモダンデザインが融合した雲仙を代表する人気旅館。4つの源泉から引く極上白濁硫黄泉と、長崎和牛・島原の山海会席。",
      spring: "含硫黄-アルミニウム-硫酸塩温泉（酸性白濁硫黄泉） / 露天風呂「せせらぎの湯」・パノラマ露天風呂 / 効能：美肌、慢性皮膚病、神経痛、冷え性、疲労回復",
      cuisine: "最高等級・長崎和牛フィレステーキ、島原半島旬野菜のせいろ蒸し、有明海・橘湾の活魚お造り、雲仙特製鍋",
      charm: "湯けむりと木の香りに包まれる極上露天風呂。仁田峠の紅葉ロープウェイ散策や雲仙地獄めぐりに絶好のロケーション。",
      access: "JR長崎本線「諫早駅」より路線バスで約80分「雲仙」下車徒歩約3分 / 長崎自動車道「諫早IC」より車で約60分"
    },
    "41803": {
      name: "雲仙温泉・源泉かけ流し＆おしどりの池を望む美食の宿 東園",
      kana: "うんぜんおんせん げんせんかけながし おしどりのいけをのぞむびしょくのやど あずまえん",
      summary: "おしどりの池のほとりに佇む、数寄屋造りの最高峰料亭旅館。全室レイクビューの絶景と、自家源泉かけ流しの美肌名湯、受賞歴を誇る至高の懐石料理。",
      spring: "単純温泉・硫黄泉（自家源泉かけ流し） / 展望露天風呂「水鏡」 / 効能：美肌効果、神経痛、筋肉痛、関節痛、疲労回復",
      cuisine: "料理長渾身の特選東園会席。長崎和牛の炭火焼き、秋獲れ伊勢海老のお造り、島原名物具雑煮、長崎じげもん旬菜",
      charm: "静かな湖面に映る紅葉の山々と夕景。美肌の湯に浸かり、九州屈指と称される東園の美食を堪能する記念日ステイ。",
      access: "諫早駅よりバス約80分（送迎バスあり要予約） / 諫早ICより車で約60分 / 長崎空港より車で約80分"
    },
    "31749": {
      name: "雲仙温泉 ゆやど 雲仙新湯",
      kana: "うんぜんおんせん ゆやど うんぜんしんゆ",
      summary: "敷地内に湧く4つの異なる自家源泉を贅沢に引き分ける温泉自慢の宿。乳白色・透明など多彩な湯殿と、島原半島の豊かな実りを味わう郷土会席。",
      spring: "酸性・含硫黄-アルミニウム-硫酸塩温泉（4つの自家源泉） / 庭園露天風呂・大浴場・貸切風呂 / 効能：美肌、リウマチ、皮膚病、疲労回復、冷え性",
      cuisine: "長崎和牛の陶板焼き会席、雲仙ポークのしゃぶしゃぶ、橘湾水揚げ旬魚姿造り、長崎ちゃんぽん風小鍋、島原手延べそうめん",
      charm: "4つの異なる源泉を館内で湯めぐりできる贅沢。雲仙地獄まで徒歩約3分で、立ち上る白煙と紅葉の幻想的なコントラストを満喫。",
      access: "諫早駅より島鉄バス約80分「雲仙」下車徒歩約2分 / 諫早ICより車で約55分"
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
          "text": "例年${seasonFocus}が見頃のピークとなります。山々や渓谷の美しいグラデーションとともに、旬を迎える地場食材を存分にお楽しみいただけます。"
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
            10月から11月にかけての${prefecture}・${areaName}は、豊かな自然美と歴史情緒が鮮やかに交差する特別なシーズンを迎えます。澄んだ秋空の下、山肌や渓谷が織りなす錦秋のパノラマは息をのむ美しさで、訪れる人々を魅了してやみません。
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
                10月〜11月限定の美しいグラデーション。清流や奇岩、雄大な山並みと調和した絶景を満喫できます。
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

console.log("All 5 pages for Round 108 generated successfully.");
