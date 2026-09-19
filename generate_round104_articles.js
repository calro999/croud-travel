const fs = require('fs');
const path = require('path');

const batchData = JSON.parse(fs.readFileSync('./round104_batch_data.json', 'utf8'));

function createPageCode(item) {
  const { slug, themeTitle, metaDescription, featureTag, areaName, prefecture, seasonFocus, catchphrase, hotels } = item;
  
  const hotelDetails = {
    // 1. 乳頭温泉・田沢湖
    "72803": {
      name: "休暇村 乳頭温泉郷",
      kana: "きゅうかむら にゅうとうおんせんきょう",
      summary: "ブナの原生林に囲まれ、乳頭温泉郷の豊かな自然を五感で味わう高原リゾート。乳白色の「田沢湖高原の湯」と茶褐色の「乳頭の湯」の2種類の源泉を一度に堪能できる。",
      spring: "単純硫黄温泉（乳白色）＆ナトリウム・カルシウム-炭酸水素塩温泉（茶褐色） / 効能：美肌効果、神経痛、筋肉痛、冷え性、高血圧症、疲労回復",
      cuisine: "秋田名物「比内地鶏のきりたんぽ鍋」、秋田錦牛の陶板焼き、八幡平ポーク、山菜やキノコの天ぷらビュッフェまたは会席",
      charm: "ブナ林を望む露天風呂での森林浴と湯浴み。秋には黄金色のブナの葉が舞い落ち、静寂の中で極上のリフレッシュが叶います。",
      access: "JR田沢湖駅より羽後交通バス「乳頭温泉」行きで約45分、終点下車すぐ / 東北道「盛岡IC」より国道46号経由約80分"
    },
    "59623": {
      name: "乳頭温泉郷 大釜温泉",
      kana: "にゅうとうおんせんきょう おおがまおんせん",
      summary: "木造校舎を移築したどこか懐かしい佇まいの秘湯宿。豊富な湯量を誇る酸性の茶褐色濁り湯と、源泉足湯が旅人を温かく迎える。",
      spring: "酸性-含ヒ素・ナトリウム・塩化物硫酸塩温泉（弱酸性茶褐色濁り湯） / 源泉かけ流し / 効能：リウマチ、皮膚病、神経痛、冷え性、疲労回復",
      cuisine: "秋田郷土の味覚膳。名物きりたんぽ鍋、秋田岩魚の塩焼き、山の芋鍋、みずの実など秋の山菜・きのこ料理",
      charm: "ノスタルジックな木造校舎の風情と、力強い薬効を持つ名湯。湯治場の情緒に浸りながら、秋の奥羽山脈の自然を満喫できます。",
      access: "JR田沢湖駅より乳頭温泉行きバスで約45分「大釜温泉」下車すぐ / 盛岡ICより約80分"
    },
    "129680": {
      name: "ホテルグランド天空",
      kana: "ほてるぐらんどてんくう",
      summary: "田沢湖を見下ろす高台に建ち、全客室や大浴場から神秘の田沢湖パノラマを一望できる絶景温泉ホテル。駒ケ岳温泉の源泉を引く良質な湯と秋田の旬会席。",
      spring: "単純硫黄温泉（硫化水素型） / 展望露天風呂・大浴場 / 効能：美肌、慢性皮膚病、筋肉痛、冷え性、疲労回復",
      cuisine: "秋田県産ブランド牛「秋田牛」のステーキ、比内地鶏のつみれ鍋、田沢湖産イワナのお造り、秋田こまちの新米",
      charm: "夕暮れ時に黄金色に染まる田沢湖の湖面と紅葉の山々を眺めながらの温泉入浴は圧巻の美しさ。大人の贅沢な秋旅に最適。",
      access: "JR田沢湖駅よりバスで約30分「高原温泉」下車徒歩約5分（送迎あり要予約） / 盛岡ICより約60分"
    },

    // 2. 修善寺
    "109030": {
      name: "伊豆・修善寺温泉 ホテル滝亭",
      kana: "いず しゅぜんじおんせん ほてるたきてい",
      summary: "修善寺の奥座敷、清流と竹林に囲まれた純和風旅館。敷地内に湧く自家源泉のアルカリ性単純温泉と、伊豆の山海の味覚を盛り込んだ会席料理が人気。",
      spring: "アルカリ性単純温泉（修善寺温泉自家源泉） / 露天風呂・大浴場 / 効能：美肌効果、神経痛、筋肉痛、関節痛、疲労回復、冷え性",
      cuisine: "伊豆天城軍鶏のすき焼き鍋、伊豆牛の溶岩焼き、修善寺名物・生わさびで味わう近海鮮魚のお造り、鮎の塩焼き",
      charm: "自然林のせせらぎを聞きながら入る露天風呂は開放感抜群。虹の郷や修善寺竹林の小径へのアクセスも良好。",
      access: "伊豆箱根鉄道「修善寺駅」よりタクシーまたはバスで約10分 / 東名高速・沼津ICより伊豆縦貫道経由約35分"
    },
    "130639": {
      name: "修善寺温泉 五葉館",
      kana: "しゅぜんじおんせん ごようかん",
      summary: "大正ロマンの情緒が漂う、全館わずか限定室のデザイナーズ隠れ家旅館。ステンドグラスやアンティーク家具に彩られた空間で、3つの無料貸切露天風呂を満喫。",
      spring: "アルカリ性単純温泉 / 3つの趣異なる貸切露天風呂 / 効能：美肌作用、疲労回復、冷え性改善、健康増進",
      cuisine: "伊豆の旬彩創作懐石。天城特産本わさびと味わう旬魚、伊豆牛のロースト、地場野菜のバーニャカウダ、秋の栗ご飯",
      charm: "趣異なる3つの貸切露天風呂でプライベートな湯浴み。夜には竹林の小径や桂川の紅葉ライトアップ散策を贅沢に楽しめます。",
      access: "修善寺駅よりバス約8分「修善寺温泉」下車徒歩約3分 / 沼津ICより伊豆縦貫道経由約30分"
    },
    "31865": {
      name: "修善寺温泉 国の登録文化財の宿 新井旅館",
      kana: "しゅぜんじおんせん こくのとうろくぶんかざいのやど あらいりょかん",
      summary: "明治5年創業、館内15棟が国の登録有形文化財に指定された日本を代表する名門旅館。名画の世界に入り込んだかのような天平風呂と、桂川沿いの紅葉庭園が圧巻。",
      spring: "単純温泉（低張性弱アルカリ性高温泉） / 文化財指定「天平風呂」・野天風呂 / 効能：神経痛、筋肉痛、関節痛、五十肩、冷え性、美肌",
      cuisine: "伝統の京風会席料理。伊豆天城軍鶏と松茸の土瓶蒸し、伊豆近海産活締め金目鯛の姿煮、厳選静岡そだち牛ステーキ、わさびご飯",
      charm: "横山大観や芥川龍之介など文人墨客が愛した歴史の息吹。客室から望む桂川と燃えるような紅葉の日本庭園は息をのむ美しさ。",
      access: "修善寺駅よりバスで約7分「修善寺温泉」下車徒歩約3分 / 沼津IC・長泉沼津ICより約35分"
    },

    // 3. 飛騨せせらぎ街道・奥飛騨
    "63424": {
      name: "奥飛騨温泉郷 新平湯温泉 美山荘",
      kana: "おくひだおんせんきょう しんひらゆおんせん みやまそう",
      summary: "北アルプスの麓、豊かな大自然に包まれたアットホームな温泉旅館。豊富な湯量を誇る自家源泉かけ流しの露天風呂と、本場飛騨牛の陶板焼きが自慢。",
      spring: "単純温泉（中性低張性高温泉） / 源泉かけ流し大浴場・露天風呂 / 効能：神経痛、筋肉痛、疲労回復、冷え性、関節痛",
      cuisine: "A5等級飛騨牛の陶板焼き、奥飛騨清流イワナの塩焼き、飛騨名物朴葉味噌ステーキ、山菜とキノコの小鉢",
      charm: "秋の夜風が心地よい露天風呂からは奥飛騨の澄んだ星空と山並みを一望。せせらぎ街道ドライブの疲れを名湯が優しく癒やします。",
      access: "JR高山駅より濃飛バス「新平湯温泉」下車徒歩約3分 / 長野道「松本IC」または中部縦貫道「高山IC」より車で約60分"
    },
    "19946": {
      name: "新平湯温泉 奥飛騨百姓座敷の宿 藤屋",
      kana: "しんひらゆおんせん おくひだひゃくしょうざしきのやど ふじや",
      summary: "築150年の古民家を移築した飛騨造りの情緒あふれる宿。囲炉裏を囲んで味わう飛騨牛や岩魚の炭火焼きと、貸切露天風呂で源泉を満喫。",
      spring: "単純温泉 / 巨石露天風呂・総ヒノキ内湯・貸切風呂 / 効能：美肌、リラクゼーション、疲労回復、冷え性",
      cuisine: "囲炉裏炭火焼き会席。極上飛騨牛の炭火串焼き、清流岩魚の塩焼き、五平餅、飛騨の採れたてキノコ鍋、地酒",
      charm: "パチパチと炭が爆ぜる囲炉裏端での贅沢な夕食。どこか懐かしい日本の原風景の中で、秋の奥飛騨の旅情に浸れます。",
      access: "JR高山駅よりバス約60分「一重ヶ根」下車徒歩約2分 / 高山ICより車で約50分"
    },
    "50913": {
      name: "奥飛騨温泉郷 ペットと泊まれる素泊まり温泉宿 こんじ旅館",
      kana: "おくひだおんせんきょう ぺっとととまれるすどまりおんせんやど こんじりょかん",
      summary: "北アルプスの絶景と良質な天然温泉を気兼ねなく楽しめる高評価の温泉宿。ペット同伴可能で、源泉かけ流しの貸切露天風呂が評判。",
      spring: "単純温泉（自家源泉かけ流し） / 24時間貸切露天風呂 / 効能：美肌効果、筋肉痛、神経痛、疲労回復",
      cuisine: "素泊まり・持ち込み自由スタイル（周辺の飛騨牛専門店や郷土料理店での食事もおすすめ）",
      charm: "24時間いつでも入れる源泉かけ流しの貸切露天風呂。秋色に染まる北アルプスの山々を眺めながら、自由で気ままな温泉ステイ。",
      access: "高山駅より路線バス約60分「新平湯温泉」下車徒歩約5分 / 長野道松本ICより約70分"
    },

    // 4. 湖東三山・彦根
    "76388": {
      name: "ホテル ルートイン彦根",
      kana: "ほてる るーといんひこね",
      summary: "国道8号線沿いに位置し、名神高速・彦根ICから車で約5分の好立地。ラジウム人工温泉大浴場と無料バイキング朝食を完備し、湖東三山ドライブの拠点に最適。",
      spring: "ラジウム人工温泉大浴場「旅人の湯」 / 効能：リウマチ、神経痛、冷え性、腰痛、疲労回復",
      cuisine: "和洋30種以上の無料朝食バイキング、焼き立てクロワッサン、滋賀県産米のご飯",
      charm: "百済寺や金剛輪寺、西明寺への紅葉巡りドライブに絶好のアクセス。大浴場で疲れを癒やし、コスパ良く充実した旅を。",
      access: "JR東海道本線「彦根駅」より車で約5分 / 名神高速道路「彦根IC」より車で約5分"
    },
    "145042": {
      name: "彦根キャッスル リゾート＆スパ",
      kana: "ひこねきゃっする りぞーとあんどすぱ",
      summary: "国宝・彦根城を眼前に望む絶景ロケーションのラグジュアリーホテル。城見の展望大浴場「城見の湯」と、日本三大和牛「近江牛」の極上会席が絶大な人気。",
      spring: "光明石人工温泉「城見の湯」 / 展望テラス・岩盤浴 / 効能：肩こり、腰痛、冷え性、疲労回復、リフレッシュ",
      cuisine: "特選近江牛づくし会席（近江牛しゃぶしゃぶまたはすき焼き、近江牛ローストビーフ）、琵琶湖産ビワマスの造り、近江米みずかがみ",
      charm: "展望風呂や客室テラスからライトアップされた彦根城天守閣を一望。極上近江牛の甘みと旨みに酔いしれるプレミアムステイ。",
      access: "JR彦根駅西口より徒歩約8分（無料送迎あり） / 彦根ICより車で約7分"
    },
    "42016": {
      name: "亀の井ホテル 彦根",
      kana: "かめのいほてる ひこね",
      summary: "琵琶湖の湖畔に建ち、全室レイクビューの開放的な温泉リゾートホテル。雄大な琵琶湖の夕景と、近江の味覚バイキングまたは特選会席を堪能。",
      spring: "人工温泉大浴場・露天風呂 / 効能：神経痛、筋肉痛、冷え性、疲労回復",
      cuisine: "近江牛陶板焼き付き秋の湖国会席、琵琶湖産小鮎の天ぷら、名物「夜鳴き担々麺」（無料サービス）、滋賀の地酒",
      charm: "窓一面に広がる琵琶湖のレイクビューと秋の夕日。湖東三山の紅葉狩りと彦根城散策の拠点として快適な滞在を提供。",
      access: "JR彦根駅より車で約8分（無料送迎バス運行あり） / 名神高速・彦根ICより車で約10分"
    },

    // 5. 唐津・呼子
    "52129": {
      name: "唐津シーサイドホテル",
      kana: "からつしーさいどほてる",
      summary: "日本三大松原「虹の松原」と唐津湾に隣接する最高峰オーシャンフロント温泉リゾート。海と一体化するインフィニティ露天風呂と、極上佐賀牛・呼子イカ会席。",
      spring: "唐津温泉（ナトリウム-塩化物強塩温泉） / インフィニティ露天風呂・スチームサウナ / 効能：美肌、保温効果、神経痛、筋肉痛、疲労回復",
      cuisine: "呼子直送の透き通る活きイカ姿造り（後造り天ぷら付き）、最高級A5ランク佐賀牛ステーキ、玄界灘の旬魚お造り、唐津Qサバ",
      charm: "唐津湾を一望するインフィニティ露天風呂は言葉を失う美しさ。唐津くんちの熱気と呼子の極上イカを堪能する極上の佐賀リゾート。",
      access: "JR筑肥線「東唐津駅」より車で約3分（無料送迎あり） / 福岡空港・博多駅より車で約60分（西九州道経由）"
    },
    "14889": {
      name: "からつ温泉 かぐや姫の湯 旅館 綿屋",
      kana: "からつおんせん かぐやひめのゆ りょかん わたや",
      summary: "創業明治9年、唐津城下町に佇む登録有形文化財の老舗純和風旅館。数寄屋造りの風情ある客室と、天然温泉「かぐや姫の湯」、伝統の玄海会席。",
      spring: "ナトリウム・カルシウム-塩化物・炭酸水素塩温泉 / 檜風呂・岩風呂 / 効能：冷え性、皮膚病、神経痛、疲労回復、美肌",
      cuisine: "呼子活イカ会席、極上佐賀牛しゃぶしゃぶ、玄界灘天然真鯛の荒炊き、唐津の郷土料理と佐賀の銘酒",
      charm: "唐津くんちの舞台となる唐津神社や城下町散策に絶好の立地。歴史ある日本建築のぬくもりと細やかなもてなしに心が和みます。",
      access: "JR唐津駅より徒歩約15分（車で約4分・送迎あり要連絡） / 多久ICより車で約40分"
    },
    "40527": {
      name: "嬉野温泉 和多屋別荘",
      kana: "うれしのおんせん わたやべっそう",
      summary: "日本三大美肌の湯・嬉野温泉を代表する二万坪の広大な敷地を誇る老舗温泉リゾート。嬉野川沿いに広がる日本庭園と、とろとろの美肌名湯、佐賀牛会席。",
      spring: "ナトリウム-炭酸水素塩・塩化物温泉（日本三大美肌の湯） / 源泉かけ流し大浴場・露天風呂 / 効能：美肌（角質軟化・美白）、神経痛、リウマチ、胃腸病",
      cuisine: "名物「嬉野温泉どうふ」、特選佐賀牛のセイロ蒸し・すき焼き、有明海の海鮮、嬉野茶を使った特製デザート",
      charm: "化粧水のようなとろとろの温泉に浸かり、嬉野川のせせらぎを聞く至福の時間。唐津くんちや呼子観光とあわせた佐賀周遊に最適。",
      access: "西九州新幹線「嬉野温泉駅」より車で約5分 / 長崎道「嬉野IC」より車で約5分"
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
          "text": "10月〜11月の${areaName}は朝夕の寒暖差が大きくなります。日中は快適な服装で問題ありませんが、朝夕の散策や露天風呂への移動時には防寒着（フリースやジャケット等）を必ずご用意ください。"
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

console.log("All 5 pages for Round 104 generated successfully.");
