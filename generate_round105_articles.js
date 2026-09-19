const fs = require('fs');
const path = require('path');

const batchData = JSON.parse(fs.readFileSync('./round105_batch_data.json', 'utf8'));

function createPageCode(item) {
  const { slug, themeTitle, metaDescription, featureTag, areaName, prefecture, seasonFocus, catchphrase, hotels } = item;
  
  const hotelDetails = {
    // 1. 高湯温泉
    "64792": {
      name: "高湯温泉 花月ハイランドホテル",
      kana: "たかゆおんせん かげつはいらんどほてる",
      summary: "吾妻連峰の中腹、標高800mの高台に佇む絶景温泉リゾート。福島盆地を一望するパノラマ露天風呂と、日本屈指の純度を誇る白濁の源泉かけ流し硫黄泉を満喫。",
      spring: "酸性・含硫黄-アルミニウム・カルシウム硫酸塩温泉（硫化水素型） / 100%源泉かけ流し / 効能：神経痛、筋肉痛、冷え性、慢性皮膚病、美肌効果、疲労回復",
      cuisine: "福島牛の陶板焼きステーキ、福島郷土料理「いかにんじん」、地場産契約農家の秋野菜会席、会津コシヒカリの新米、季節のフルーツデザート",
      charm: "標高800mの露天風呂から見下ろす紅葉パノラマと、夜にはきらめく福島市街の夜景。一切の加水・加温を行わない本物の名湯に浸かる贅沢。",
      access: "JR東北新幹線「福島駅」西口より路線バス「高湯温泉」行きで約40分、終点下車すぐ（無料送迎あり要予約） / 東北道「福島西IC」より車で約30分"
    },
    "67218": {
      name: "高湯温泉 旅館 玉子湯",
      kana: "たかゆおんせん りょかん たまごゆ",
      summary: "創業慶応4年（1868年）、400年の歴史を誇る藁葺き屋根の湯小屋「玉子湯」がシンボルの名門秘湯旅館。ゆで卵のような硫黄の香りと絹のような肌触りの白濁湯が評判。",
      spring: "酸性・含硫黄-カルシウム・アルミニウム-硫酸塩温泉 / 毎分湧出する自噴源泉100%完全かけ流し / 効能：高血圧、動脈硬化、皮膚病、リウマチ、疲労回復",
      cuisine: "福島県産黒毛和牛のすき焼き鍋、吾妻山麓の旬のキノコと山菜の天ぷら、清流イワナの塩焼き、滋味豊かな山里会席料理",
      charm: "清流のほとりに建つ茅葺きの湯小屋。秋風に揺れる紅葉の木々と白濁した名湯のコントラストは、まさに日本の秘湯の真骨頂です。",
      access: "JR福島駅西口より路線バス高湯温泉行き約40分「玉子湯前」下車すぐ / 福島西ICより約30分"
    },
    "135419": {
      name: "高湯温泉 安達屋",
      kana: "たかゆおんせん あだちや",
      summary: "創業400年の伝統と洗練された和モダン空間が調和する大人の隠れ宿。巨石を配した広大な混浴大露天風呂「大気の湯」と、囲炉裏炭火焼き会席が絶大な人気。",
      spring: "酸性・含硫黄-カルシウム・アルミニウム-硫酸塩温泉（硫化水素型） / 混浴大露天風呂「大気の湯」・貸切露天風呂 / 効能：美肌、神経痛、胃腸病、冷え性",
      cuisine: "囲炉裏端で焼き上げる特選福島牛炭火焼き、奥会津産イワナの塩焼き、季節の茸炭火串、手打ちそば、地酒のペアリング",
      charm: "木々に包まれた大露天風呂「大気の湯」は全長30mにおよぶ圧倒的開放感。囲炉裏を囲んで味わう炭火料理と美酒が秋の夜を優雅に彩ります。",
      access: "JR福島駅西口より路線バス高湯温泉行き約40分（送迎あり要事前連絡） / 東北道・福島西ICより車で約30分"
    },

    // 2. 蓼科
    "16099": {
      name: "蓼科温泉 いろりの宿 蓼科パークホテル",
      kana: "たてしなおんせん いろりのやど たてしなぱーくほてる",
      summary: "蓼科高原の白樺とカラマツの森に包まれた高原リゾート。自家源泉の天然温泉と、信州の味覚を囲炉裏バイキングや会席で気軽に楽しめる人気宿。",
      spring: "弱アルカリ性単純温泉（蓼科温泉自家源泉） / 露天風呂・大浴場 / 効能：神経痛、関節痛、筋肉痛、冷え性、疲労回復",
      cuisine: "信州ポークの陶板焼き、信州サーモンのお造り、信州手打ちそば、山菜とキノコの天ぷら、長野県産りんごのスイーツ",
      charm: "カラマツが黄金に輝く秋の蓼科高原散策に絶好の立地。横谷渓谷の滝巡りや御射鹿池へのアクセスも抜群です。",
      access: "JR中央本線「茅野駅」より路線バスで約30分「蓼科高原」下車徒歩約5分 / 中央自動車道「諏訪IC」より車で約30分"
    },
    "56788": {
      name: "奥蓼科温泉 渋・辰野館",
      kana: "おくたてしなおんせん しぶ たつのかん",
      summary: "八ヶ岳山麓、標高1,500mの原生林に佇む信玄の隠し湯。日本屈指の薬効を誇る乳白色・緑がかった酸性明礬緑礬泉（含鉄泉）と、本格薬膳山里料理。",
      spring: "酸性-含硫黄・鉄-単純冷鉱泉（信玄公隠し湯・薬効名湯） / 効能：冷え性、胃腸病、神経痛、リウマチ、アトピー、美肌",
      cuisine: "信州牛の朴葉味噌焼き、山里薬膳料理、天然キノコ鍋、信州十割そば、山菜の天ぷら",
      charm: "森の中に点在する湯殿で、強い薬効を持つ白濁冷鉱泉と加温湯を交互浴。静寂に包まれた奥蓼科の秋の森で心身の深層リフレッシュ。",
      access: "JR茅野駅より奥蓼科温泉行きバスで約40分「渋川温泉」下車徒歩約3分 / 諏訪ICより約35分"
    },
    "178456": {
      name: "蓼科温泉 １日３組のおもてなし たてしな 麓八",
      kana: "たてしなおんせん いちにちさんくみのおもてなし たてしな ろくや",
      summary: "蓼科高原の森に佇む、一日わずか3組限定の極上プライベート温泉旅館。細やかなおもてなしと、貸切温泉、信州の極上食材を昇華させた創作懐石が絶賛される宿。",
      spring: "単純温泉（低張性弱アルカリ性高温泉） / 貸切風呂 / 効能：美肌、疲労回復、リラクゼーション、筋肉痛",
      cuisine: "A5信州プレミアム牛の炭火焼き、信州サーモンと岩魚の創作造り、八ヶ岳山麓の朝採れ高原野菜、信州米コシヒカリ釜飯",
      charm: "全3室のみだからこそ叶う完全な静寂とプライベート空間。信州の秋の味覚を極めた創作料理と貸切温泉で至高の記念日ステイ。",
      access: "JR茅野駅より車・タクシーで約25分 / 中央道・諏訪ICまたは諏訪南ICより約30分"
    },

    // 3. 皆生温泉・大山
    "5020": {
      name: "皆生温泉 皆生シーサイドホテル 海の四季",
      kana: "かいけおんせん かいけしーさいどほてる うみのしき",
      summary: "全室オーシャンビュー、日本海を望む絶景シーサイド温泉リゾート。海底から湧き出るミネラル豊富な塩化物泉と、11月解禁の本場「松葉がに」会席が自慢。",
      spring: "ナトリウム・カルシウム-塩化物泉（高温泉） / 海を望む露天風呂・貸切風呂 / 効能：保温効果、神経痛、関節痛、冷え性、美肌効果",
      cuisine: "11月解禁「境港直送・活松葉がにフルコース」（焼きがに、かに刺し、かに鍋、甲羅味噌焼き）、鳥取和牛ステーキ、地魚お造り",
      charm: "波打ち際ぎりぎりに設えられた露天風呂に浸かり、秋の日本海の夕暮れと潮騒を堪能。大山紅葉ドライブとカニ三昧の至福のコンビネーション。",
      access: "JR山陰本線「米子駅」より路線バスで約20分「皆生温泉観光センター」下車徒歩約3分 / 米子自動車道「米子IC」より車で約10分"
    },
    "12677": {
      name: "皆生温泉 皆生菊乃家",
      kana: "かいけおんせん かいけきくのや",
      summary: "温かなもてなしと館内に流れる生演奏が心地よい老舗海辺旅館。海一望の露天風呂と、料理長が腕を振るう山陰の旬味・松葉がに料理が人気。",
      spring: "ナトリウム・カルシウム-塩化物泉 / 展望大浴場・露天風呂 / 効能：美肌、疲労回復、冷え性、神経痛",
      cuisine: "タグ付きブランド松葉がに会席、鳥取大山黒牛の溶岩焼き、日本海朝獲れ鮮魚の姿造り、大山おこわ",
      charm: "夕暮れ時にロビーで奏でられるジャズやピアノの生演奏。温かい塩化物泉で温まった後に味わう本場松葉がにの甘みが五臓六腑に染み渡ります。",
      access: "JR米子駅よりバス約20分（米子駅より無料送迎あり要予約） / 米子ICより車で約10分"
    },
    "13895": {
      name: "皆生温泉 湯喜望 白扇",
      kana: "かいけおんせん ゆきぼう はくせん",
      summary: "全館畳敷きの和の趣と全室オーシャンビューを誇る高級和風旅館。全客室に展望ジャグジーまたは露天風呂を備え、極上の松葉がにと鳥取和牛会席を提供。",
      spring: "ナトリウム・カルシウム-塩化物温泉 / 展望露天風呂・大浴場 / 効能：冷え性改善、筋肉痛、美肌効果、疲労回復",
      cuisine: "特選松葉がにづくし会席、A5鳥取和牛オレイン55ステーキ、境港水揚げ本マグロのお造り、大山鶏の茶碗蒸し",
      charm: "素足で歩く心地よい畳敷きの館内。客室の大きな窓一面に広がる日本海のパノラマと、冬の味覚の王様・松葉がにを味わう贅沢。",
      access: "JR米子駅より路線バス約20分「皆生温泉」下車徒歩約5分 / 米子ICより車で約10分 / 米子鬼太郎空港より車で約20分"
    },

    // 4. 滑床・宇和島
    "184525": {
      name: "天然温泉渓流滑床の湯 スーパーホテル宇和島駅前天然温泉",
      kana: "てんねんおんせんけいりゅうなめとこのゆ すーぱーほてるうわじまえきてんねんおんせん",
      summary: "宇和島駅前に位置し、滑床渓谷や宇和海へのアクセス抜群の快適ホテル。奥道後温泉から引湯するpH9.4の美肌天然温泉「滑床の湯」と焼きたてパン朝食。",
      spring: "アルカリ性単純温泉（奥道後温泉源泉引湯・pH9.4） / 天然温泉「滑床の湯」 / 効能：美肌効果、疲労回復、神経痛、冷え性",
      cuisine: "宇和島名物「宇和島鯛めし」（朝食ビュッフェにて提供）、焼きたてパン、地場産有機野菜サラダバー",
      charm: "美肌効果抜群のトロトロ天然温泉に浸かり、朝食には本場の宇和島鯛めしを堪能。滑床渓谷の紅葉散策の拠点として最高のコストパフォーマンス。",
      access: "JR予讃線「宇和島駅」より徒歩約3分 / 松山自動車道「宇和島朝日IC」より車で約2分"
    },
    "16805": {
      name: "宇和島リージェントホテル",
      kana: "うわじまりーじぇんとほてる",
      summary: "宇和島市の中心街に位置し、観光にもビジネスにも便利な都市型ホテル。地元食材をふんだんに使った宇和島郷土料理の和食ディナーが好評。",
      spring: "大浴場・リラクゼーションルーム完備",
      cuisine: "本場宇和島鯛めし御膳、宇和島名物「じゃこ天」、ふかの湯ざらし、伊予牛の陶板焼き、南予の郷土小鉢",
      charm: "宇和島城や商店街にも近く、夜の街歩きや郷土料理店めぐりにも最適。清潔で快適な客室でゆったりと秋の南予旅を楽しめます。",
      access: "JR宇和島駅より徒歩約12分（車で約3分） / 宇和島朝日ICより車で約3分"
    },
    "2352": {
      name: "宇和島オリエンタルホテル",
      kana: "うわじまおりえんたるほてる",
      summary: "宇和島駅から徒歩約5分の好立地ホテル。アメニティバーや無料レンタルサイクル、地元名店と提携した本格宇和島鯛めしプランが人気。",
      spring: "リラクゼーションシャワー・アメニティバイキング",
      cuisine: "地元老舗割烹で味わう極上宇和島鯛めしセット、宇和海の新鮮真鯛のお造り、特製じゃこ天",
      charm: "無料レンタサイクルで宇和島城や城下町の紅葉めぐりへ。フレンドリーなサービスと充実の設備で快適な一人旅やカップル旅を演出。",
      access: "JR宇和島駅より徒歩約5分 / 松山自動車道・宇和島朝日ICより車で約3分"
    },

    // 5. えびの高原・京町温泉
    "191683": {
      name: "えびの高原ホテル",
      kana: "えびのこうげんほてる",
      summary: "標高1,200m、霧島錦江湾国立公園の中心に位置する雲上の高原温泉リゾート。硫黄山を望む絶景露天風呂と、宮崎牛や黒豚を盛り込んだ高原会席。",
      spring: "単純温泉（低張性中性温泉） / 展望大浴場・露天風呂・サウナ / 効能：神経痛、筋肉痛、冷え性、疲労回復、健康増進",
      cuisine: "特選宮崎牛のすき焼き鍋会席、霧島黒豚のしゃぶしゃぶ、宮崎名物チキン南蛮、ヤマメの塩焼き、季節の山菜小鉢",
      charm: "白紫池や不動池の紅葉ハイキングの拠点。標高1,200mの澄み切った星空と、秋風そよぐ露天風呂での温泉浴は息をのむ美しさ。",
      access: "JR吉都線「えびの駅」より車で約30分 / 宮崎道「えびのIC」より車で約30分 / 鹿児島空港より車で約50分"
    },
    "140849": {
      name: "京町温泉 玉泉館",
      kana: "きょうまちおんせん ぎょくせんかん",
      summary: "川内川の清流沿いに佇む、大正時代創業の歴史ある老舗温泉旅館。宮崎屈指の湧出量を誇る源泉かけ流しの天然温泉と、南九州の旬菜会席。",
      spring: "単純温泉（弱アルカリ性源泉かけ流し） / 庭園露天風呂・内湯 / 効能：神経痛、関節痛、疲労回復、冷え性、美肌",
      cuisine: "宮崎牛のステーキ会席、川内川名物天然鮎の塩焼き、地元えびの産ひのひかりの新米、手作り田舎料理の小鉢",
      charm: "昔ながらの温泉情緒が漂う静かな宿。トロトロの肌触りの源泉かけ流しに浸かり、心温まる家庭的なもてなしに癒やされます。",
      access: "JR吉都線「京町温泉駅」より徒歩約5分 / 宮崎自動車道「えびのIC」より車で約7分"
    },
    "43906": {
      name: "京町温泉 あけぼの荘",
      kana: "きょうまちおんせん あけぼのそう",
      summary: "緑豊かな日本庭園と良質な天然温泉が自慢の純和風旅館。源泉100%かけ流しの柔らかいお湯と、厳選された宮崎牛・地頭鶏の炭火会席が評判。",
      spring: "アルカリ性単純温泉 / 源泉100%かけ流し大浴場・露天風呂 / 効能：美肌、神経痛、筋肉痛、冷え性、五十肩",
      cuisine: "宮崎牛とみやざき地頭鶏の炭火焼きコース、手作り郷土会席、えびの高原野菜の炊き合わせ、名物鯉こく（要予約）",
      charm: "化粧水のような美肌温泉でゆったり長湯。えびの高原の黄金ススキ散策の後に、静かな庭園を眺めながら宮崎牛を味わう至福のひととき。",
      access: "JR京町温泉駅より徒歩約8分 / えびのICより車で約8分 / 鹿児島空港より車で約40分"
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
        "name": "${areaName}の秋（10月〜11月）のベストシーズン・見頃はいつですか？",
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

console.log("All 5 pages for Round 105 generated successfully.");
