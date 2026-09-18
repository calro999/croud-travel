const fs = require('fs');
const path = require('path');

const batchData = JSON.parse(fs.readFileSync('./round101_batch_data.json', 'utf8'));

function createPageCode(item) {
  const { slug, themeTitle, metaDescription, featureTag, areaName, prefecture, seasonFocus, catchphrase, hotels } = item;
  
  const hotelDetails = {
    // 1. 日光
    "135482": {
      name: "日光湯元温泉 日光グランドホテル ほのかな宿樹林",
      kana: "にっこうゆもとおんせん にっこうぐらんどほてる ほのかなやどじゅりん",
      summary: "日光国立公園の原生林に抱かれた静寂の温泉リゾート。奥日光湯元ならではの濃厚なエメラルドグリーンから乳白色へと変化する源泉かけ流し硫黄泉と、森を望む露天風呂、地元栃木の恵みを味わう会席が自慢。",
      spring: "含硫黄-カルシウム・ナトリウム-硫酸塩・炭酸水素塩温泉（硫化水素型） / 源泉かけ流し（白濁・エメラルドグリーン） / 効能：神経痛、筋肉痛、冷え性、美肌効果、疲労回復",
      cuisine: "とちぎ和牛の陶板焼き、日光名物の引き上げ湯波・揚巻湯波、奥日光の清流で育った岩魚の塩焼き、旬の山の幸と契約農家直送の高原野菜会席",
      charm: "白樺やカラマツの森に囲まれた露天風呂「樹林の湯」では、湯花が舞う白濁の湯に浸かりながら、黄金色に染まる奥日光の紅葉パノラマを堪能できます。",
      access: "JR・東武「日光駅」より東武バス「湯元温泉」行きで約80分、終点下車徒歩約3分 / 日光宇都宮道路「清滝IC」よりいろは坂経由で約45分"
    },
    "40862": {
      name: "日光湯元温泉 奥日光パークロッジ深山",
      kana: "にっこうゆもとおんせん おくにっこうぱーくろっじみやま",
      summary: "木の温もりに包まれた山岳リゾートの趣を残すアットホームな温泉宿。湯元名物の濃厚な源泉かけ流し硫黄泉を24時間満喫でき、ハイキングや紅葉撮影の拠点としても絶大な人気を誇る。",
      spring: "酸性・含硫黄-硫酸塩・塩化物温泉 / 完全源泉かけ流し（日によって白〜緑色に変化） / 効能：慢性皮膚病、冷え性、動脈硬化、関節痛、疲労回復",
      cuisine: "郷土料理をモダンにアレンジした山里和食膳。日光湯波の炊き合わせ、栃木県産ハーブ豚のしゃぶしゃぶ鍋、地場産根菜の滋味豊かな小鉢",
      charm: "奥日光の澄んだ空気と静けさのなか、硫黄の香りに包まれて心身を芯からリセット。リーズナブルながら温かなもてなしと絶品温泉が評判です。",
      access: "JR・東武「日光駅」より東武バス「湯元温泉」行き約80分、終点下車徒歩約5分 / 清滝ICより約40分"
    },
    "8819": {
      name: "日光湯元温泉 ゆ宿 美や川",
      kana: "にっこうゆもとおんせん ゆやど みやかわ",
      summary: "全5室のみの贅沢な大人の隠れ家。すべての客室や館内に落ち着いた和の美意識が宿り、貸切風呂で源泉100%かけ流しの乳白色硫黄泉を心ゆくまで堪能できる。",
      spring: "単純硫黄温泉（硫化水素型） / 源泉100%完全かけ流し（加水・加温なし） / 効能：きりきず、やけど、慢性皮膚病、虚弱児童、慢性婦人病、美肌効果",
      cuisine: "板長が腕を振るう季節の本格懐石。厳選とちぎ和牛のフィレステーキ、極上生湯波のお造り、日光岩魚の姿造り、手打ち十割そば",
      charm: "全室わずか5室だからこそ叶うプライベート感と、一切薄めない極上の源泉。湯上がりに楽しむ地酒と、静寂に包まれた奥日光の夜が格別です。",
      access: "JR・東武日光駅より湯元温泉行き東武バスで約75分「日光湯元」下車徒歩約2分 / 清滝ICよりいろは坂経由約40分"
    },

    // 2. 白馬
    "5940": {
      name: "白馬八方温泉 白馬 丸金旅館",
      kana: "はくばはっぽうおんせん はくば まるきんりょかん",
      summary: "八方尾根スキー場の麓に佇む、昭和の温もりと信州の素朴な真心が息づく温泉旅館。pH11を超える日本最高峰の強アルカリ美肌泉と、自家製米・手作り田舎料理が旅人を温かく迎える。",
      spring: "アルカリ性単純温泉（pH11.2の日本屈指の高アルカリ泉） / 源泉かけ流し / 効能：美肌作用（角質軟化）、筋肉痛、神経痛、疲労回復、冷え性",
      cuisine: "信州牛の朴葉味噌焼き、自家菜園の採れたて野菜の天ぷら、信州サーモンのお造り、八方名物の手打ち新そば、自家製はぜかけ米",
      charm: "とろりとした化粧水のような美肌湯は、一度入れば肌がツルツルになると大評判。八方尾根ゴンドラ乗り場にも近く、紅葉ハイクの拠点に最適。",
      access: "JR大糸線「白馬駅」より車・バスで約8分（送迎あり要予約） / 長野ICまたは安曇野ICより車で約60分"
    },
    "17514": {
      name: "白馬八方温泉 白馬ピエモン ヤマジュウ",
      kana: "はくばはっぽうおんせん はくばぴえもん やまじゅう",
      summary: "欧風ロッジの開放感と日本の家庭的な温かさが融合したペンションスタイルの宿。八方の名湯と信州の自然が育んだ旬食材の創作ディナーが楽しめる。",
      spring: "アルカリ性単純温泉（白馬八方源泉） / 効能：美肌、関節痛、疲労回復、健康増進",
      cuisine: "信州産ポークの低温ロースト、採れたて信州キノコのポタージュ、信州サーモンのカルパッチョ、手作りデザート",
      charm: "北アルプスの山麓を一望できる明るいダイニングと、アットホームなもてなし。秋の三段紅葉ハイキングの後に心地よい安らぎを提供。",
      access: "JR白馬駅より車で約7分 / 八方バスターミナルより徒歩約8分 / 上信越道「長野IC」より約60分"
    },
    "17516": {
      name: "白馬八方温泉 白馬ホテル花乃郷",
      kana: "はくばはっぽうおんせん はくばほてるはなのさと",
      summary: "八方温泉街の中心に位置し、白馬三山を望む絶好のロケーション。天然の高アルカリ美肌湯と、信州の旬味を凝縮した贅沢会席が自慢のリゾートホテル。",
      spring: "アルカリ性単純温泉（pH11.4） / 効能：美肌、美白、神経痛、運動麻痺、冷え性、疲労回復",
      cuisine: "信州プレミアム牛と信州サーモンの特製会席、松茸と信州キノコの土瓶蒸し（秋季限定）、地場産安曇野わさびで味わう旬魚旬菜",
      charm: "大浴場から望む秋の北アルプスは息をのむ美しさ。美肌の湯に浸かった後は、信州の地酒とともに秋の夜長をゆったりと過ごせます。",
      access: "JR白馬駅よりタクシーで約5分（八方バスターミナル徒歩5分） / 長野IC・安曇野ICより車で約60分"
    },

    // 3. 香嵐渓・猿投
    "7144": {
      name: "しあわせ隠れ里 猿投温泉 癒しの宿 金泉閣",
      kana: "しあわせかくれざと さなげおんせん いやしのやど きんせんかく",
      summary: "愛知・三河の奥座敷に佇む「医者がすすめる奇跡の湯」。日本屈指の天然ラドン温泉を贅沢に湛え、飲泉許可も得ている全国屈指の療養温泉リゾート。",
      spring: "含弱放射能-ナトリウム-炭酸水素塩温泉（天然ラドン温泉・飲泉可） / 効能：通風、動脈硬化、高血圧、慢性皮膚病、疲労回復、自律神経調整",
      cuisine: "三河牛の溶岩焼き、三河湾直送の天然鮮魚、愛知名物の八丁味噌仕立て鍋、猿投温泉の源泉水で炊き上げた極上釜飯",
      charm: "静寂な山あいに包まれ、飲んで良し浸かって良しのラドン温泉で体の内側から細胞を活性化。香嵐渓の紅葉狩りとセットで訪れる極上リトリート。",
      access: "名鉄「浄水駅」または「愛知環状鉄道・保見駅」より無料送迎バスあり（要予約） / 猿投グリーンロード「加納IC」より車で約5分"
    },
    "38582": {
      name: "柿野温泉 八勝園湯元館",
      kana: "かきのおんせん はっしょうえんゆもとかん",
      summary: "香嵐渓からも好アクセスの隠れた名湯・柿野温泉の老舗宿。名物のジャングル大風呂と薬効高き天然ラジウム温泉、三河・美濃の山海旬会席を満喫。",
      spring: "単純弱放射能温泉（天然ラジウム泉） / 効能：神経痛、リウマチ、胃腸病、冷え性、美肌効果",
      cuisine: "飛騨牛・三河牛の食べ比べ陶板焼き、子持ち鮎の塩焼き、季節の山菜と松茸の釜飯会席、名物手作り豆腐",
      charm: "南国植物が生い茂る巨大なジャングル大風呂は圧巻の開放感。湯けむりの中でゆったりと旅の疲れを解きほぐせます。",
      access: "JR中央本線「多治見駅」よりタクシー約20分 / 東名高速・豊田藤岡ICより車で約20分"
    },
    "153094": {
      name: "夏焼温泉 青柳亭",
      kana: "なつやけおんせん あおやぎてい",
      summary: "奥三河の山里、名倉川の清流沿いに佇む静かな一軒宿。香嵐渓から車で約30分の奥矢作エリアにあり、天然ラドン温泉と四季折々の山川の恵みを味わう。",
      spring: "単純弱放射能冷鉱泉（加温循環） / 効能：関節痛、五十肩、冷え性、疲労回復、健康増進",
      cuisine: "奥三河のジビエ（猪・鹿肉）鍋、奥矢作名物の天然鮎・あまごの塩焼き、五平餅、山里の手打ちそば会席",
      charm: "川のせせらぎと満天の星に包まれる素朴な贅沢。観光地の喧騒を離れ、奥三河の自然の恵みと温かいもてなしに癒やされます。",
      access: "猿投グリーンロード「力石IC」より国道153号線経由約45分 / 名鉄豊田市駅よりバス"
    },

    // 4. 吉野山
    "56233": {
      name: "吉野温泉元湯",
      kana: "よしのおんせんもとゆ",
      summary: "文豪・島崎藤村が逗留し小説『破戒』を執筆したことでも知られる、創業300年を超える名門秘湯宿。吉野山の中腹、静寂の谷間に湧く赤褐色の含鉄炭酸泉。",
      spring: "含炭酸-鉄-炭酸水素塩冷鉱泉（赤褐色の濁り湯） / 効能：神経痛、関節痛、冷え性、貧血、疲労回復、婦人病",
      cuisine: "大和牛のすき焼き・しゃぶしゃぶ会席、吉野名物の本葛を使った胡麻豆腐・葛うどん、吉野鮎の塩焼き、郷土の味覚・柿の葉寿司",
      charm: "藤村が愛した深い静寂と、鉄分を豊富に含む赤茶色の名湯。窓の外に広がる吉野山の秋のグラデーションを眺めながら、歴史のロマンに浸れます。",
      access: "近鉄「吉野駅」より車で約5分（送迎あり・要連絡） / 南阪奈道路「葛城IC」より車で約50分"
    },
    "104591": {
      name: "世界遺産吉野山 吉野荘湯川屋",
      kana: "せかいいさんよしのやま よしのそうゆかわや",
      summary: "世界遺産・金峯山寺蔵王堂から徒歩約5分。吉野山の尾根に位置し、創業300年の伝統を誇る格式ある料理旅館。客室や展望風呂から吉野の山並みを一望。",
      spring: "人工温泉（吉野の銘木・吉野檜香る展望風呂） / 効能：リラクゼーション、血行促進、疲労回復",
      cuisine: "名物「西行鍋」（吉野本葛を出汁に溶かし大和肉鶏や旬野菜を煮込む伝統鍋）、大和牛のステーキ、自家製胡麻豆腐、柿の葉寿司",
      charm: "眼下に広がる紅葉の海と蔵王堂のシルエット。歴史の息吹を感じながら、伝統の西行鍋と大和の恵みを堪能する上質な時間。",
      access: "近鉄吉野駅よりロープウェイ「吉野山駅」下車徒歩約10分 / 名阪国道「針IC」より約60分"
    },
    "145484": {
      name: "世界遺産・吉野山 眺望風呂と桜の宿 一休庵",
      kana: "せかいいさん よしのやま ちょうぼうぶろとさくらのやど いっきゅうあん",
      summary: "吉野山・中千本の絶景ポイントに佇む全8室の隠れ宿。すべての客室から吉野の山並みを見渡し、秋には山肌一面に広がる紅葉絵巻を独り占めできる。",
      spring: "展望薬草風呂（大和当帰などの和漢植物を配合した温まりの湯） / 効能：冷え性、肩こり、腰痛、血行促進、美肌",
      cuisine: "大和牛の朴葉味噌焼き、吉野葛を贅沢に使った葛会席、大和ポークの豆乳鍋、旬の根菜と大和野菜の炊き合わせ",
      charm: "展望風呂から眺める夕暮れ時の吉野山紅葉は圧巻。大和の薬草風呂で体を温め、静寂に包まれた夜景を眺める大人の贅沢。",
      access: "近鉄吉野駅より吉野山ロープウェイ吉野山駅下車徒歩約8分 / 西名阪道「柏原IC」より約50分"
    },

    // 5. 長門峡・長門湯本
    "5670": {
      name: "長門湯本温泉 山村別館",
      kana: "ながとゆもとおんせん さんそんべっかん",
      summary: "音信川のせせらぎ近く、四季折々の日本庭園と心づくしのもてなしが心地よい和風旅館。山口県最古の名湯「長門湯本温泉」の柔らかな美肌湯と、秋のとらふぐ会席を堪能。",
      spring: "アルカリ性単純温泉（pH9.6の化粧水のような美肌湯） / 効能：神経痛、筋肉痛、関節痛、疲労回復、冷え性、美肌効果",
      cuisine: "秋・冬の王様「下関・仙崎直送とらふぐフルコース」（てっさ、てっちり、ふぐ唐揚げ、ひれ酒）、長州黒かしわの陶板焼き、仙崎イカのお造り",
      charm: "広々とした大浴場と緑に包まれた露天風呂。ライトアップされた音信川の温泉街散策へのアクセスも抜群です。",
      access: "JR美祢線「長門湯本駅」より徒歩約10分（送迎あり） / 中国自動車道「美祢IC」より車で約30分"
    },
    "14980": {
      name: "長門湯本温泉 楊貴妃浪漫の宿 玉仙閣",
      kana: "ながとゆもとおんせん ようきひろまんのやど ぎょくせんかく",
      summary: "楊貴妃伝説が残る長門の地にちなんだ異国情緒と和の雅が融合する宿。深さ120cmの立って入る名物「深風呂」と、極上のとらふぐ・長州牛会席が自慢。",
      spring: "アルカリ性単純温泉（自家源泉ブレンド） / 名物「貴妃湯（深さ120cm立湯）」 / 効能：美肌、血行促進、五十肩、疲労回復、神経痛",
      cuisine: "楊貴妃も愛したとされるコラーゲンたっぷりの美容会席、特選とらふぐ尽くし、長州藤光牛のすき焼き、仙崎港水揚げの活魚",
      charm: "立ち湯ならではの全身を包み込む水圧効果で血行促進＆デトックス。音信川の川床テラスや恩湯へも徒歩圏内。",
      access: "JR長門湯本駅より車で約3分（送迎あり） / 美祢ICより国道316号線経由約30分"
    },
    "7243": {
      name: "長門湯本温泉 湯本観光ホテル 西京",
      kana: "ながとゆもとおんせん ゆもとかんこうほてる さいきょう",
      summary: "長門湯本温泉最大級のスケールを誇るエンターテインメント和風旅館。広大な庭園露天風呂や多彩な湯殿、毎夜開催される芝居小屋・ボウリング場など充実の館内施設。",
      spring: "アルカリ性単純温泉 / 庭園大露天風呂、大浴場、足湯 / 効能：美肌、神経痛、筋肉痛、冷え性、関節のこわばり",
      cuisine: "山口名物とらふぐ刺し＆ちり鍋、長州牛の陶板焼き、ふぐの釜飯、長門の地魚お造り盛り合わせバイキングまたは会席",
      charm: "開放感あふれる広大な庭園露天風呂で紅葉の風情を満喫。ファミリーから三世代旅行、カップルまで幅広く楽しめる多彩なアクティビティ。",
      access: "JR長門湯本駅より徒歩約9分（無料送迎あり） / 美祢ICより車で約30分 / 山口宇部空港より車で約70分"
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
  keywords: ['${areaName} 紅葉', '${prefecture} 紅葉 10月 11月', '${featureTag}', 'ふるさと納税 温泉宿泊券', '${info1.name}', '${info2.name}', '${info3.name}', '楽天ふるさと納税 トラベル'],
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
        "name": "${areaName}の紅葉の見頃時期はいつですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "例年${seasonFocus}が見頃となります。標高差がある地域では高所から山麓へと約1ヶ月にわたり美しいグラデーションを楽しめます。"
        }
      },
      {
        "@type": "Question",
        "name": "ふるさと納税の楽天トラベルクーポンはどのように利用できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "寄付完了後、最短翌日〜数日以内に楽天トラベルの会員アカウントに宿泊クーポンが付与されます。予約時にクーポンを適用することで、最大30%相当の宿泊代金割引が受けられます。"
        }
      },
      {
        "@type": "Question",
        "name": "10月〜11月の${areaName}旅行における服装や持ち物の注意点は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "秋の${areaName}は日中と朝晩の寒暖差が非常に大きくなります。日中は長袖シャツや軽いジャケットで快適ですが、早朝・夜間や散策時は厚手のフリース、ダウンジャケット、手袋などの防寒着を必ずご用意ください。"
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
      <header className="relative bg-gradient-to-br from-amber-900 via-orange-900 to-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
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
            <span className="flex items-center gap-1">📅 ベストシーズン：${seasonFocus}</span>
            <span className="flex items-center gap-1">♨️ 泉質自慢の名湯＆地産会席</span>
            <span className="flex items-center gap-1">🎁 実質自己負担2,000円で高級宿ステイ</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-950 border-b-2 border-amber-600 pb-3 mb-6">
            はじめに：秋の${areaName}が魅せる極上の錦秋美と温泉旅
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            10月から11月にかけて、${prefecture}・${areaName}エリアは一年で最も艶やかでドラマチックな季節を迎えます。澄み渡る秋空の下、木々が深紅や山吹色、黄金色へと染まりゆく圧巻のグラデーションは、訪れる旅人の心を奪ってやみません。
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            日中は爽やかな空気のなかで息をのむ絶景紅葉を満喫し、夕暮れには湯けむり立ち上る名湯に浸かって冷えた体を芯から温める――これぞ日本の秋旅の醍醐味です。さらに、実りの秋ならではのブランド牛や清流の恵み、旬の味覚を贅沢に味わう会席料理が、旅の満足度を最高潮へと高めてくれます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            本記事では、${areaName}エリアの厳選された名宿3選を徹底解説します。楽天ふるさと納税の宿泊クーポンを活用すれば、実質自己負担わずか2,000円で憧れの高級旅館・温泉リゾートに宿泊可能。賢く贅沢に、心洗われる秋の休日を叶えましょう。
          </p>
        </section>

        {/* Highlight Map / Summary Points */}
        <section className="bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200 mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <span>🍁</span> ${areaName} 秋旅の3大魅力ポイント
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">① 標高差が織りなす絶景パノラマ</div>
              <p className="text-xs sm:text-sm text-slate-600">
                山頂から山麓、渓谷へと色づきが移り変わり、10月中旬から11月下旬まで長期間にわたり感動的な紅葉美を鑑賞できます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">② 個性豊かな名湯・美肌温泉</div>
              <p className="text-xs sm:text-sm text-slate-600">
                奥深い歴史と湯量を誇る天然温泉。秋風そよぐ露天風呂で紅葉を眺めながらの湯浴みは至福のひとときです。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-amber-100 shadow-sm">
              <div className="text-amber-700 font-bold text-base mb-2">③ 実りの秋を味わい尽くす郷土美食</div>
              <p className="text-xs sm:text-sm text-slate-600">
                秋の味覚がぎっしり詰まった旬会席。厳選された地場ブランド牛や清流魚、採れたての山の幸をご堪能ください。
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
        <section className="bg-gradient-to-br from-amber-900 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg mb-12">
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
                <span className="text-amber-600 font-bold">Q.</span> ${areaName}の紅葉の見頃時期はいつですか？
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed pl-6">
                例年${seasonFocus}が見頃となります。標高の高い山頂付近から徐々に色づきが始まり、山麓の温泉街へと紅葉前線が降りてくるため、長期間にわたって楽しめます。
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
                10月〜11月の${areaName}は朝晩の冷え込みが厳しくなります。脱ぎ着しやすいフリースや厚手のジャケット、歩きやすいスニーカーやトレッキングシューズの着用をおすすめします。
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

console.log("All 5 pages generated successfully.");
