const fs = require('fs');
const path = require('path');

const batchData = JSON.parse(fs.readFileSync('./round102_batch_data.json', 'utf8'));

function createPageCode(item) {
  const { slug, themeTitle, metaDescription, featureTag, areaName, prefecture, seasonFocus, catchphrase, hotels } = item;
  
  const hotelDetails = {
    // 1. 蔵王
    "39565": {
      name: "蔵王温泉 名湯リゾート ルーセントタカミヤ",
      kana: "ざおうおんせん めいとうりぞーと るーせんとたかみや",
      summary: "蔵王温泉街の中心に位置し、名湯・高湯の源泉を引く大型温泉リゾート。木の温もりあふれる大浴場と露天風呂で日本屈指の強酸性白濁硫黄泉を贅沢に満喫でき、本場山形牛会席が人気。",
      spring: "酸性・含硫黄-アルミニウム-硫酸塩・塩化物温泉（強酸性pH1.5前後の乳白色硫黄泉） / 源泉かけ流し / 効能：美肌（肌の殺菌・角質軟化）、慢性皮膚病、神経痛、疲労回復、冷え性",
      cuisine: "山形牛のすき焼きまたはしゃぶしゃぶ鍋、山形名物「芋煮汁」、蔵王ハーブ豚の陶板焼き、山形県産つや姫の新米、季節の山菜小鉢",
      charm: "硫黄の香りと乳白色の湯に包まれ、湯上がりの肌は驚くほどつるつるに。蔵王中央ロープウェイ乗り場も至近で、紅葉観光の拠点として抜群のロケーション。",
      access: "JR山形駅より蔵王温泉行き山交バスで約45分、終点下車徒歩約5分 / 山形自動車道「山形蔵王IC」より西蔵王高原ライン経由約30分"
    },
    "40164": {
      name: "蔵王温泉 ＫＫＲ蔵王 白銀荘（国家公務員共済組合連合会蔵王保養所）",
      kana: "ざおうおんせん けーけーあーるざおう はくぎんそう",
      summary: "蔵王の自然林に囲まれた静寂の高原の宿。どなたでも利用可能な癒やしの保養所で、自噴する名湯蔵王温泉の掛け流しと、山形の旬食材をふんだんに盛り込んだ創作和食膳を堪能。",
      spring: "酸性・含硫黄-硫酸塩温泉 / 源泉100%かけ流し（白濁湯） / 効能：筋肉痛、関節痛、冷え性、高血圧症、動脈硬化症、疲労回復",
      cuisine: "山形県産牛と蔵王ポークのステーキ食べ比べ、山形名物芋煮鍋、旬の茸の天ぷら、つや姫ご飯、手作りデザート",
      charm: "喧騒を離れた森の中に佇み、鳥のさえずりと紅葉の木々を眺めながら静かな湯浴み時間を過ごせる隠れ家的な心地よさ。",
      access: "JR山形駅よりバス約45分「蔵王温泉バスターミナル」より送迎あり（要予約） / 山形蔵王ICより約30分"
    },
    "8084": {
      name: "蔵王温泉 最上高湯 善七乃湯（旧：蔵王温泉 大平ホテル）",
      kana: "ざおうおんせん もがみたかゆ ぜんしちのゆ",
      summary: "創業以来の伝統を受け継ぐ源泉かけ流し100%の老舗宿。ペット同伴可能ルームや7つの多彩な貸切露天風呂を備え、高台から望む蔵王連峰の山並みと極上硫黄泉が評判。",
      spring: "酸性・含硫黄-硫酸塩・塩化物温泉 / 100%源泉かけ流し（加水・加温・循環一切なし） / 効能：美肌、皮膚病、神経痛、リウマチ、疲労回復",
      cuisine: "A5ランク山形牛の陶板焼き会席、自家製味噌で仕込む山形芋煮鍋、山形郷土料理「だし」と地場野菜の小鉢、地酒飲み比べセット",
      charm: "森の中に点在する趣豊かな貸切露天風呂で、色づく蔵王の紅葉を眺めながらプライベートな湯浴み。気兼ねなく温泉三昧を楽しめます。",
      access: "JR山形駅より蔵王温泉行きバスで約45分、バスターミナルより無料送迎あり / 山形蔵王ICより約35分"
    },

    // 2. 水上
    "2497": {
      name: "水上温泉 ペンション 朝ねぼう",
      kana: "みなかみおんせん ぺんしょん あさねぼう",
      summary: "ゴールデンレトリバーたちが温かく出迎えてくれる、みなかみ高原の看板犬ペンション。天然温泉の貸切風呂と、ボリューム満点の自家製欧風フルコースディナーでリピーター多数。",
      spring: "アルカリ性単純温泉（みなかみ温泉引湯） / 24時間貸切天然温泉 / 効能：美肌効果、疲労回復、筋肉痛、冷え性、関節痛",
      cuisine: "上州牛のローストビーフ、上州麦豚のポワレ、地元みなかみ産高原野菜のサラダ、自家製焼きたてパン、手作り特製デザート",
      charm: "愛らしい看板犬との触れ合いと、温かなおもてなし。谷川岳の紅葉ハイキングの疲れを天然温泉と絶品ディナーで心地よく癒やせます。",
      access: "JR上越線「水上駅」より車で約10分（送迎あり要連絡） / 関越自動車道「水上IC」より車で約15分"
    },
    "184453": {
      name: "水上温泉 あらたし みなかみ",
      kana: "みなかみおんせん あらたし みなかみ",
      summary: "利根川の清流を望む絶景ロケーションに誕生した新感覚モダン温泉旅館。全室リバービューの客室や開放的なテラス、川のせせらぎを聴く大浴場で上質なリフレッシュを提供。",
      spring: "カルシウム・ナトリウム-硫酸塩・塩化物温泉（弱アルカリ性低張性高温泉） / 効能：動脈硬化、美肌、きりきず、やけど、疲労回復、神経痛",
      cuisine: "上州牛と地元野菜のグリル会席、みなかみ名水で仕込んだ川場サーモンのお造り、群馬県産こんにゃくの創作前菜、地酒ペアリング",
      charm: "洗練された北欧×和モダンのデザイン空間。テラスのソファに腰掛け、利根川沿いに広がる紅葉パノラマとせせらぎに身を委ねる極上ステイ。",
      access: "JR上越線「水上駅」より徒歩約13分（無料送迎あり） / 関越自動車道「水上IC」より車で約5分"
    },
    "31846": {
      name: "水上温泉 おやど 松葉屋",
      kana: "みなかみおんせん おやど まつばや",
      summary: "水上温泉街の中心に佇む、純和風の落ち着いた佇まいの老舗旅館。湯量豊富な源泉かけ流しの天然温泉と、上州の四季を盛り込んだ手作り会席料理が自慢。",
      spring: "カルシウム・ナトリウム-硫酸塩温泉（弱アルカリ性） / 源泉かけ流し / 効能：神経痛、筋肉痛、五十肩、運動麻痺、慢性消化器病、疲労回復",
      cuisine: "上州牛のすき焼き鍋会席、名物岩魚の塩焼き、舞茸の土瓶蒸し（秋季限定）、地場契約農家直送コシヒカリご飯",
      charm: "木の香り漂う大浴場と露天風呂で24時間いつでも湯浴み可能。どこか懐かしい日本の温泉宿の真心こもるもてなしに心が和みます。",
      access: "JR水上駅より徒歩約10分（送迎あり） / 関越道・水上ICより車で約8分"
    },

    // 3. 志賀高原・湯田中
    "38584": {
      name: "信州湯田中温泉 ホテルゆだなか ～大浴場「吉の湯」～",
      kana: "しんしゅうゆだなかおんせん ほてるゆだなか よしのゆ",
      summary: "湯田中駅前に位置する便利な好立地ホテル。自家源泉から湧き出る豊富な天然温泉を湛えた名物大浴場「吉の湯」と、信州の山の幸・郷土料理バイキングまたは会席が好評。",
      spring: "ナトリウム-塩化物・硫酸塩温泉（弱アルカリ性高温泉） / 自家源泉かけ流し / 効能：神経痛、冷え性、関節痛、美肌効果、疲労回復",
      cuisine: "信州牛の陶板焼き、信州サーモンのお造り、信州そば、採れたて信州キノコ鍋、信州りんごを使った秋スイーツ",
      charm: "駅近でありながら本格的な源泉かけ流し温泉を堪能。志賀高原へのアクセス拠点としても抜群で、アクティブな紅葉ドライブに最適。",
      access: "長野電鉄長野線「湯田中駅」より徒歩約3分 / 上信越自動車道「信州中野IC」より車で約15分"
    },
    "7120": {
      name: "湯田中温泉 白雲楼旅館",
      kana: "ゆだなかおんせん はくうんろうりょかん",
      summary: "創業明治の歴史を刻む湯田中温泉の純和風旅館。夜間瀬川のほとりに位置し、源泉100%かけ流しの名湯と、真心込めた郷土会席料理でおもてなし。",
      spring: "単純温泉（弱アルカリ性低張性高温泉） / 源泉100%かけ流し / 効能：リウマチ性疾患、運動器障害、神経痛、疲労回復、健康増進",
      cuisine: "信州プレミアム牛の朴葉味噌焼き、山ノ内町特産のみゆきポーク鍋、旬の松茸やキノコの炊き込みご飯、信州手打ちそば",
      charm: "大浴場から望む秋の山並みと川のせせらぎ。昔ながらの湯治場の風情が漂い、静かに心と体を癒やす大人の温泉旅にぴったり。",
      access: "長野電鉄「湯田中駅」より徒歩約10分（送迎あり） / 信州中野ICより車で約15分"
    },
    "41634": {
      name: "信州・湯田中温泉 清風荘",
      kana: "しんしゅう ゆだなかおんせん せいふうそう",
      summary: "庭園露天風呂と源泉かけ流しの天然温泉が自慢の温泉宿。信州の素材を吟味した手作り料理と、落ち着いた和の客室でプライベートなひとときを。",
      spring: "ナトリウム-塩化物温泉（源泉かけ流し） / 露天風呂・大浴場・貸切風呂 / 効能：冷え性、疲労回復、筋肉痛、神経痛、皮膚病",
      cuisine: "信州牛のすき焼き会席、信州サーモンと岩魚のお造り、山菜とキノコの天ぷら、信州りんごのデザート",
      charm: "四季の彩りを見せる日本庭園を眺めながらの露天風呂。湯田中・渋温泉街の外湯めぐり（九湯めぐり）への散策も楽しめます。",
      access: "長野電鉄「湯田中駅」より徒歩約7分（送迎あり） / 信州中野ICより約15分"
    },

    // 4. 丹波篠山
    "130472": {
      name: "旅館 浪花館 丹波・篠山 篭坊温泉",
      kana: "りょかん なにわかん たんば ささやま かごぼうおんせん",
      summary: "平家の落人伝説が残る奥篠山の秘湯「篭坊温泉」に佇む川沿いの老舗料理旅館。羽束川の清流を望み、天然温泉と秋の丹波篠山名物「ぼたん鍋」を堪能。",
      spring: "含二酸化炭素・ナトリウム-塩化物・炭酸水素塩冷鉱泉（天然ラジウム・含鉄炭酸泉） / 効能：神経痛、リウマチ、冷え性、胃腸病、疲労回復",
      cuisine: "本場丹波篠山の特選ぼたん鍋（極上猪肉×自家製秘伝味噌）、丹波黒枝豆の塩茹で、丹波栗の渋皮煮・栗ご飯、清流あまごの塩焼き",
      charm: "深山幽谷の静寂と川のせせらぎに包まれる秘湯の一軒宿。秋には山全体が紅葉に染まり、秘伝味噌で味わうぼたん鍋の深いコクが五臓六腑に染み渡ります。",
      access: "JR福知山線「篠山口駅」より車・タクシーで約30分 / 舞鶴若狭自動車道「丹南篠山口IC」より車で約25分"
    },
    "18267": {
      name: "丹波篠山 潯陽楼",
      kana: "たんばささやま じんようろう",
      summary: "篠山城下町近くに位置し、明治・大正の文豪や著名人に愛されてきた伝統の料理旅館。創業100年を超える歴史が醸し出す格調高い空間と、丹波の至高の味覚を提供。",
      spring: "貸切家族風呂（ミネラル豊富な温まりの湯） / 効能：疲労回復、リラクゼーション、冷え性改善",
      cuisine: "丹波篠山名物・極上猪肉のぼたん鍋会席、丹波牛ステーキ、秋獲れ丹波黒枝豆、丹波松茸の土瓶蒸し（秋季限定）、丹波栗ご飯",
      charm: "篠山城跡や武家屋敷通りの散策に最適なロケーション。歴史あるお屋敷で、秋の味覚の王者・ぼたん鍋と丹波栗を堪能する贅沢な時間。",
      access: "JR福知山線「篠山口駅」より神姫バス「篠山営業所行き」約15分、「二階町」下車徒歩約3分 / 丹南篠山口ICより車で約10分"
    },
    "149449": {
      name: "篠山城下町ホテルＮＩＰＰＯＮＩＡ",
      kana: "ささやまじょうかまちほてる にっぽにあ",
      summary: "城下町全体を一つのホテルに見立てた分散型古民家リゾート。国重要伝統的建造物群保存地区に点在する歴史的建造物をモダンにリノベーションした唯一無二の滞在体験。",
      spring: "檜風呂・モダン客室風呂（客室ごとに異なる上質なバスルーム）",
      cuisine: "関西フレンチの重鎮が手掛ける丹波篠山テロワールフレンチ。但馬牛・丹波黒豆・丹波栗・地場有機野菜をフレンチ技法で昇華した極上コース",
      charm: "江戸・明治・大正の町家に泊まり、篠山の歴史と暮らすように滞在。地産地消の絶品フレンチと城下町の紅葉が心に深く刻まれます。",
      access: "JR篠山口駅より車・バスで約15分（送迎あり要事前予約） / 丹南篠山口ICより車で約12分"
    },

    // 5. 日南・青島
    "187408": {
      name: "天然温泉ひなたの宿日南宮崎",
      kana: "てんねんおんせん ひなたのやど にちなんみやざき",
      summary: "日南・飫肥の自然林に抱かれたスタイリッシュな温泉リゾートホテル。美肌効果抜群の天然アルカリ温泉と、宮崎牛や秋の伊勢海老を盛り込んだ豪華会席が自慢。",
      spring: "ナトリウム-炭酸水素塩・塩化物温泉（pH8.8の美肌とろとろ泉） / 源泉かけ流し大浴場・露天風呂 / 効能：美肌、神経痛、筋肉痛、疲労回復、冷え性",
      cuisine: "秋の日南海岸伊勢海老のお造り＆鬼殻焼き、特選宮崎牛の溶岩プレート焼き、日南一本釣りカツオのタタキ、宮崎名物チキン南蛮",
      charm: "とろりとした化粧水のような極上美肌湯と、飫肥城下町の情緒。夕食には秋に解禁されたばかりのぷりぷり天然伊勢海老を贅沢に味わえます。",
      access: "JR日南線「飫肥駅」より車で約5分 / 宮崎空港より車で約50分（宮崎自動車道・田野IC経由）"
    },
    "5370": {
      name: "ホテル日南北郷リゾート",
      kana: "ほてるにちなんきたごうりぞーと",
      summary: "標高290mの丘の上に建ち、鰐塚山系の山並みと日南の自然を一望できる高原温泉リゾート。広大な露天風呂から望む秋の夕景や星空パノラマが圧巻。",
      spring: "ナトリウム-炭酸水素塩温泉（美肌の湯） / 展望大露天風呂・サウナ / 効能：美肌作用、切り傷、やけど、神経痛、疲労回復",
      cuisine: "日南海岸獲れたて天然伊勢海老会席、宮崎牛すき焼き、日南鶏の炭火焼き、飫肥名物「厚焼き玉子」と郷土の小鉢",
      charm: "開放感抜群のパノラマ露天風呂に浸かりながら、秋風そよぐ日南の山並みを一望。秋の伊勢海老まつりプランでグルメ旅を極める滞在。",
      access: "JR日南線「北郷駅」より車で約7分（送迎あり） / 宮崎空港より車で約45分"
    },
    "68070": {
      name: "青島天然温泉ルートイングランティアあおしま太陽閣",
      kana: "あおしまてんねんおんせん るーといんぐらんてぃあ あおしまたいようかく",
      summary: "日南海岸の玄関口「青島」に位置する天然温泉リゾートホテル。地下1,000mから湧き出る「美肌の湯」青島温泉と、新鮮な海の幸バイキング・会席が人気。",
      spring: "ナトリウム-塩化物・炭酸水素塩温泉（美肌温泉） / 露天風呂・大浴場・打たせ湯・サウナ / 効能：神経痛、筋肉痛、冷え性、美肌効果、疲労回復",
      cuisine: "宮崎牛の陶板焼き、日南獲れ伊勢海老鍋（秋季限定）、近海マグロ・カツオのお造り、宮崎郷土料理ビュッフェまたは御膳",
      charm: "青島神社や鬼の洗濯板への観光拠点に最適。温暖な秋の南国リゾート気分と、天然温泉でゆったり寛げるコストパフォーマンス抜群の宿。",
      access: "JR日南線「子供の国駅」より徒歩約7分 / JR青島駅より車で約3分 / 宮崎空港より車で約15分"
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
  keywords: ['${areaName} 紅葉 グルメ', '${prefecture} 秋 10月 11月', '${featureTag}', 'ふるさと納税 温泉宿泊券', '${info1.name}', '${info2.name}', '${info3.name}', '楽天ふるさと納税 温泉クーポン'],
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
    "datePublished": "2026-09-19",
    "dateModified": "2026-09-19",
    "mainEntityOfPage": "https://croud-travel.com/${slug}"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "${areaName}の秋（10月〜11月）の見どころや旬の味覚は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "例年${seasonFocus}が最高のシーズンです。息をのむ秋の絶景とともに、この時期にしか味わえない旬のブランド食材や名物鍋をご堪能いただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "楽天ふるさと納税の宿泊クーポンは予約時にすぐ使えますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "寄付完了後、最短即日〜数日以内に楽天トラベルのマイクーポンに付与されます。予約ステップで適用するだけで、寄付額に応じた割引が即座に反映されます。"
        }
      },
      {
        "@type": "Question",
        "name": "秋の${areaName}旅行のおすすめの過ごし方は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "日中は澄んだ秋空の下で景勝地散策や歴史ある街並み歩き、味覚狩りを楽しみ、夕暮れ以降は宿自慢の天然温泉に浸かって旬の贅沢会席を味わう滞在が格別です。"
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
      <header className="relative bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
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
            <span className="flex items-center gap-1">♨️ 自慢の泉質＆贅沢秋会席</span>
            <span className="flex items-center gap-1">🎁 実質自己負担2,000円で高級宿ステイ</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-950 border-b-2 border-amber-600 pb-3 mb-6">
            はじめに：10月・11月の${areaName}で叶える極上の秋旅
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            秋が深まる10月から11月、${prefecture}・${areaName}エリアは一年の中で最も豊かで魅力的な表情を見せてくれます。澄み切った秋空に映える山々や渓谷のグラデーション、歴史ある町並みに漂う秋の情緒、そしてこの季節ならではの極上グルメが旅人を迎えます。
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            日中は心地よい秋風を感じながら散策やドライブを楽しみ、夕暮れには名湯に浸かって日頃の疲れを解きほぐす――。夜には地域の特産食材や旬の味覚をふんだんに盛り込んだ贅沢な会席料理に舌鼓を打つひとときは、何物にも代えがたい幸福感をもたらします。
          </p>
          <p className="text-slate-700 leading-relaxed">
            本記事では、${areaName}エリアで高い評価を獲得しているおすすめの名宿3選を詳しくご紹介します。楽天ふるさと納税を活用すれば、実質自己負担わずか2,000円でお得に宿泊クーポンを取得可能。賢く上質な大人の秋旅を計画しましょう。
          </p>
        </section>

        {/* Highlight Map / Summary Points */}
        <section className="bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200 mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <span>🍁</span> ${areaName} 秋旅の3大魅力ポイント
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">① 秋ならではの絶景パノラマ</div>
              <p className="text-xs sm:text-sm text-slate-600">
                10月〜11月限定の息をのむ大自然のグラデーションや、風情あふれる歴史的景観を心ゆくまで堪能できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">② 個性あふれる極上の名湯</div>
              <p className="text-xs sm:text-sm text-slate-600">
                歴史ある湯治場や源泉かけ流しの天然温泉。露天風呂で秋の爽快な外気を感じながらリラックスできます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">③ 実りの秋を味わう極上美食</div>
              <p className="text-xs sm:text-sm text-slate-600">
                秋に解禁される旬の海の幸、脂がのったブランド肉、採れたての新米や旬の野菜が織りなす絶品会席。
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
        <section className="bg-gradient-to-br from-amber-950 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg mb-12">
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
                <span className="text-amber-600 font-bold">Q.</span> ${areaName}の秋のベストシーズンはいつですか？
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">
                例年${seasonFocus}が最高の見頃となります。標高差や気候に合わせて色づきや食材の旬が移り変わり、10月から11月下旬まで長く楽しめます。
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
                10月〜11月の${areaName}は朝晩の冷え込みが予想されます。日中は薄手のアウターで快適ですが、早朝や夜間、山間部の散策には防風ジャケットやフリース、歩きやすい靴をご用意ください。
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

console.log("All 5 pages for Round 102 generated successfully.");
