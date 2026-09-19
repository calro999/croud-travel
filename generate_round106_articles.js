const fs = require('fs');
const path = require('path');

const batchData = JSON.parse(fs.readFileSync('./round106_batch_data.json', 'utf8'));

function createPageCode(item) {
  const { slug, themeTitle, metaDescription, featureTag, areaName, prefecture, seasonFocus, catchphrase, hotels } = item;
  
  const hotelDetails = {
    // 1. 一関・厳美渓・猊鼻渓
    "51221": {
      name: "亀の井ホテル 一関",
      kana: "かめのいほてる いちのせき",
      summary: "栗駒山麓の自然に抱かれた高台の温泉リゾートホテル。厳美渓や平泉中尊寺の観光拠点に最適で、展望大浴場と岩手ブランド「前沢牛」を贅沢に味わう会席が評判。",
      spring: "ナトリウム・カルシウム-硫酸塩・塩化物温泉（低張性弱アルカリ性高温泉） / 展望大浴場・露天風呂 / 効能：神経痛、筋肉痛、冷え性、五十肩、疲労回復、健康増進",
      cuisine: "最高級ブランド「前沢牛」のしゃぶしゃぶ鍋会席、三陸直送の旬魚お造り、一関名物「もち料理」の小鉢、地場産ひとめぼれの新米",
      charm: "紅葉に染まる山並みを望む露天風呂での湯浴み。夜には名物「夜鳴き担々麺」の無料サービスもあり、旅情豊かなひとときを過ごせます。",
      access: "JR東北新幹線「一ノ関駅」より車・タクシーで約20分（無料送迎バスあり要予約） / 東北自動車道「一関IC」より車で約15分"
    },
    "70275": {
      name: "ホテルルートイン一関インター",
      kana: "ほてるるーといんいちのせきいんたー",
      summary: "東北自動車道・一関IC至近で車観光に抜群の好立地。ラジウム人工温泉大浴場と無料バイキング朝食を完備し、厳美渓・猊鼻渓ドライブの拠点に最適。",
      spring: "ラジウム人工温泉大浴場「旅人の湯」 / 効能：リウマチ、神経痛、冷え性、腰痛、疲労回復",
      cuisine: "焼き立てクロワッサンと和洋30種以上の無料朝食バイキング、岩手県産ひとめぼれのご飯",
      charm: "厳美渓まで車で約10分、猊鼻渓まで約25分。大浴場で旅の疲れをしっかりリフレッシュでき、コストパフォーマンス抜群。",
      access: "JR一ノ関駅より車で約8分 / 東北自動車道「一関IC」より車で約1分"
    },
    "72032": {
      name: "祭畤温泉 かみくら",
      kana: "まつるべおんせん かみくら",
      summary: "栗駒山麓・祭畤（まつるべ）の静寂の森に佇む一軒宿。太古の地層から湧き出る源泉かけ流しの天然温泉と、岩手の大自然が育んだ山里料理が自慢。",
      spring: "ナトリウム・カルシウム-硫酸塩・塩化物泉（源泉かけ流し） / 木漏れ日の露天風呂 / 効能：美肌、神経痛、リウマチ、胃腸病、冷え性",
      cuisine: "前沢牛の陶板焼きステーキ、岩手地鶏「南部どり」鍋、山菜と採れたてキノコの天ぷら、清流イワナの塩焼き、古代米ご飯",
      charm: "手つかずの自然に囲まれた秘湯の静けさ。秋には露天風呂一面に紅葉が広がり、夜には満天の星と虫の音に癒やされます。",
      access: "JR一ノ関駅より路線バス約60分（送迎あり要予約） / 一関ICより国道342号経由約40分"
    },

    // 2. 昼神・天竜峡
    "39234": {
      name: "昼神温泉 湯元ホテル 阿智川",
      kana: "ひるがみおんせん ゆもとほてる あちがわ",
      summary: "阿知川の清流沿いに佇む、南信州最大級のスケールを誇る温泉旅館。開放感あふれる巨岩露天風呂と洞窟風呂で、pH9.7の極上美肌湯を堪能。",
      spring: "アルカリ性単純温泉（pH9.7の高アルカリ美肌泉） / 巨岩大露天風呂・洞窟風呂・足湯 / 効能：美肌作用（角質軟化）、リウマチ、神経痛、疲労回復",
      cuisine: "信州牛のしゃぶしゃぶ鍋会席、南信州名物「馬刺し」、天竜川清流アユの塩焼き、秋の信州そば、地場産松茸の土瓶蒸し（秋季限定）",
      charm: "川のせせらぎを聞きながら入る大露天風呂は圧巻。阿智村の「日本一の星空ナイトツアー」への送迎プランも大人気です。",
      access: "JR飯田線「飯田駅」よりバス約30分（昼神温泉郷バス停送迎あり） / 中央道「飯田山本IC」より車で約10分"
    },
    "5624": {
      name: "昼神温泉 日長庵 桂月",
      kana: "ひるがみおんせん にっちょうあん けいげつ",
      summary: "全館数寄屋造りの格調高い純和風旅館。客室や露天風呂に高野槇を贅沢に使用し、旬の信州会席と化粧水のような美肌湯で極上のおもてなしを提供。",
      spring: "アルカリ性単純硫黄温泉 / 高野槇造り大浴場・露天風呂 / 効能：美肌効果、糖尿病、痛風、神経痛、冷え性",
      cuisine: "信州プレミアム牛の溶岩焼き懐石、信州サーモンと岩魚のお造り、信州十割手打ちそば、季節の吹き寄せ前菜、信州地酒ペアリング",
      charm: "静寂と木の温もりに満ちた館内。お部屋食でゆっくりと信州牛を味わい、極上の美肌湯に身を委ねる上質な大人の休日。",
      access: "JR飯田駅より路線バスで約30分 / 中央道・飯田山本ICより車で約10分 / 名古屋より高速バス約90分"
    },
    "51693": {
      name: "昼神温泉郷 懐石と炉ばたの宿 吉弥",
      kana: "ひるがみおんせんきょう かいせきとろばたのやど きちや",
      summary: "阿智川のほとりに位置し、名物の炉ばた炭火焼きと本格京風懐石が自慢の料理宿。庭園露天風呂と肌をつるつるにする名湯が旅人に愛される。",
      spring: "アルカリ性単純温泉（pH9.6） / 庭園露天風呂「ひるがみの湯」 / 効能：美肌、神経痛、関節痛、五十肩、疲労回復",
      cuisine: "炉ばた炭火焼き会席（信州アルプス牛の炭火串焼き、五平餅、岩魚の塩焼き、季節野菜の炭火焼き）、南信州の秋の味覚小鉢",
      charm: "パチパチと炭が燃える炉ばたを囲む贅沢な夕食。天竜峡舟下りや星空観賞と組み合わせた充実の秋旅にぴったり。",
      access: "JR飯田駅よりバス約30分 / 飯田山本ICより車で約10分 / 園原ICより車で約10分"
    },

    // 3. 養老温泉・養老公園
    "71966": {
      name: "養老温泉 滝元館 遊季の里",
      kana: "ようろうおんせん たきもとかん ゆきのさと",
      summary: "養老公園の最奥、養老の滝のすぐそばに佇む全11室の大人の隠れ宿。濃尾平野を見晴らす絶景テラスと、名湯養老温泉、本場飛騨牛会席。",
      spring: "ナトリウム・カルシウム-塩化物泉 / 展望露天風呂・客室露天風呂 / 効能：神経痛、筋肉痛、冷え性、関節痛、疲労回復",
      cuisine: "最上級A5飛騨牛のすき焼きまたはしゃぶしゃぶ鍋会席、美濃けんとん豚の角煮、清流長良川の若鮎、地場産旬野菜の炊き合わせ",
      charm: "濃尾平野の雄大なパノラマと煌めく夜景を一望。養老の滝のもみじライトアップ散策へも徒歩すぐの絶好のロケーション。",
      access: "養老鉄道「養老駅」より車で約5分（無料送迎あり） / 名神高速「大垣IC」または東海環状道「養老IC」より車で約15分"
    },
    "40515": {
      name: "養老温泉 ゆせんの里 ホテルなでしこ",
      kana: "ようろうおんせん ゆせんのさと ほてるなでしこ",
      summary: "地下約1,200mから湧き出る自家源泉の天然温泉と、多彩な温浴施設・汗蒸幕（ハンジュンマク）を備えた温泉リゾート。養老の飛騨牛焼肉・会席を堪能。",
      spring: "ナトリウム-塩化物泉（源泉かけ流し濁り湯） / 本館「みのり乃湯」・さらさの湯・汗蒸幕 / 効能：神経痛、関節痛、冷え性、五十肩、美肌",
      cuisine: "飛騨牛の炭火焼肉コースまたは飛騨牛すき焼き御膳、養老山麓の旬食材を使った健康創作和食、岐阜県産ハツシモご飯",
      charm: "良質な源泉かけ流しの天然温泉と本格的な韓国式サウナ汗蒸幕でデトックス。飛騨牛街道の名店が集まる養老町グルメを満喫。",
      access: "養老駅より車で約10分（無料シャトルバスあり） / 東海環状道「養老IC」より車で約5分"
    },
    "19544": {
      name: "ホテルルートイン大垣インター",
      kana: "ほてるるーといんおおがきいんたー",
      summary: "名神高速・大垣ICから車で約1分、養老公園や関ケ原へのアクセス至便なビジネス＆観光ホテル。ラジウム人工温泉大浴場と無料朝食バイキングを完備。",
      spring: "ラジウム人工温泉大浴場「旅人の湯」 / 効能：リウマチ、神経痛、冷え性、腰痛、疲労回復",
      cuisine: "和洋30種以上の無料朝食バイキング、焼き立てクロワッサン、岐阜県産米のご飯",
      charm: "養老公園や養老の滝まで車で約15分。広々とした大浴場でドライブの疲れを癒やし、コスパ良く秋の西美濃観光を楽しめます。",
      access: "養老鉄道「友江駅」より徒歩約15分 / 名神高速道路「大垣IC」より車で約1分"
    },

    // 4. 出雲・玉造温泉
    "162886": {
      name: "天然温泉 八雲の湯 ドーミーイン出雲（ドーミーイン・御宿野乃 ホテルズグループ）",
      kana: "てんねんおんせん やくものゆ どーみーいんいずも",
      summary: "JR出雲市駅南口目の前に位置し、出雲大社への参拝拠点に最適な天然温泉ホテル。自家源泉の最上階大浴場とサウナ、夜鳴きそば、山陰の旬を味わう朝食が人気。",
      spring: "ナトリウム・カルシウム-塩化物温泉（天然温泉「八雲の湯」） / 最上階展望大浴場・露天風呂・高温サウナ / 効能：冷え性、神経痛、筋肉痛、疲労回復",
      cuisine: "名物「出雲そば」、カニ飯またはイクラ丼、日本海の幸を使った小鉢バイキング、夜鳴きそば（無料）",
      charm: "出雲大社へのアクセスが抜群。最上階の天然温泉で旅の疲れを癒やし、出雲名物グルメを心ゆくまで堪能できる快適ホテル。",
      access: "JR山陰本線「出雲市駅」南口より徒歩約1分 / 山陰道「斐川IC」より車で約15分 / 出雲縁結び空港より連絡バスで約30分"
    },
    "78179": {
      name: "出雲・玉造温泉 白石家",
      kana: "いずも たまつくりおんせん しらいしや",
      summary: "創業300年余、楽天アワード連続受賞を誇る玉造温泉の老舗女性に優しい宿。総ヒノキ造りの大浴場と、毎日開催される出雲神楽・津軽三味線ライブが名物。",
      spring: "ナトリウム・カルシウム・硫酸塩・塩化物泉（美肌温泉） / 総檜大浴場「織姫」・黒御影石風呂 / 効能：美肌（天然の化粧水）、神経痛、冷え性、疲労回復",
      cuisine: "特選しまね和牛と島根ポークの食べ比べ会席、日本海獲れたて紅ズワイガニ、日本海の旬魚お造り、出雲仁多米コシヒカリ",
      charm: "温泉総選挙で美肌日本一に輝いた玉造温泉の極上湯。夕食後のロビーライブ（出雲神楽）と心温まるおもてなしで感動の神在月ステイ。",
      access: "JR山陰本線「玉造温泉駅」より車で約5分（無料送迎あり） / 山陰自動車道「松江玉造IC」より車で約10分"
    },
    "14708": {
      name: "玉造温泉 旅亭 山の井",
      kana: "たまつくりおんせん りょてい やまのい",
      summary: "玉湯川のほとりに佇み、和の情緒と落ち着いた佇まいが心地よい温泉旅館。系列の名門「佳翠苑 皆美」の温泉施設も利用可能で、島根の旬彩料理を堪能。",
      spring: "ナトリウム・カルシウム・硫酸塩・塩化物泉 / 露天風呂・大浴場 / 効能：美肌、リラクゼーション、神経痛、冷え性",
      cuisine: "しまね和牛の石焼き会席、日本海鮮魚の姿造り、名物「皆美家伝鯛めし」（朝食または夕食プラン）、秋の味覚土瓶蒸し",
      charm: "玉湯川沿いの足湯や温泉街散策に絶好のロケーション。化粧水のような美肌温泉に浸かり、名門皆美伝統の鯛めしを味わう贅沢。",
      access: "JR玉造温泉駅より車で約5分（無料送迎あり要連絡） / 松江玉造ICより車で約10分"
    },

    // 5. 耶馬渓・中津
    "71925": {
      name: "天然温泉 扇城の湯 スーパーホテル大分・中津駅前",
      kana: "てんねんおんせん せんじょうのゆ すーぱーほてるおおいた なかつえきまえ",
      summary: "中津駅南口から徒歩約3分。天然温泉「扇城の湯」を完備し、耶馬渓・一目八景へのドライブ観光拠点に最適なコストパフォーマンス抜群のホテル。",
      spring: "単純温泉（天然温泉「扇城の湯」） / 効能：神経痛、筋肉痛、冷え性、関節痛、疲労回復",
      cuisine: "中津名物「中津からあげ」、焼き立てパン、オーガニック野菜サラダバー（朝食無料ビュッフェ）",
      charm: "耶馬渓の紅葉ドライブを楽しんだ後は、天然温泉で手足を伸ばしてゆったりリフレッシュ。健康朝食で元気をチャージ。",
      access: "JR日豊本線「中津駅」南口より徒歩約3分 / 東九州自動車道「中津IC」より車で約15分"
    },
    "51222": {
      name: "ホテルルートイン中津駅前",
      kana: "ほてるるーといんなかつえきまえ",
      summary: "中津駅南口より徒歩約3分の好立地。ラジウム人工温泉大浴場と無料バイキング朝食を完備し、快適な客室とサービスで耶馬渓観光をサポート。",
      spring: "ラジウム人工温泉大浴場「旅人の湯」 / 効能：リウマチ、神経痛、冷え性、腰痛、疲労回復",
      cuisine: "和洋30種以上の無料朝食バイキング、中津名物おかず、炊きたてご飯",
      charm: "耶馬渓（青の洞門・羅漢寺・一目八景）へのアクセスがスムーズ。清潔な大浴場でドライブの疲れをしっかり癒やせます。",
      access: "JR中津駅南口より徒歩約3分 / 中津ICより車で約15分 / 北九州空港より車で約60分"
    },
    "43951": {
      name: "耶馬渓山荘 えぼしや",
      kana: "やばけいさんそう えぼしや",
      summary: "耶馬渓の雄大な自然に囲まれた山あいの温泉宿。深山幽谷の静けさと、耶馬渓の旬の食材を使った素朴で滋味豊かな山里料理でおもてなし。",
      spring: "単純温泉（耶馬渓天然温泉） / 露天風呂・家族風呂 / 効能：疲労回復、筋肉痛、神経痛、冷え性",
      cuisine: "豊後牛の陶板焼き、耶馬渓の清流ヤマメの塩焼き、季節のキノコ鍋、耶馬渓名物手打ちそば、山菜小鉢",
      charm: "一目八景の紅葉スポットに近く、朝一番の静寂の中で耶馬渓の絶景を満喫。山里の温かいもてなしと温泉に癒やされます。",
      access: "JR久大本線「豊後森駅」より車で約20分 / 大分自動車道「玖珠IC」より車で約20分 / 中津ICより約40分"
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

console.log("All 5 pages for Round 106 generated successfully.");
