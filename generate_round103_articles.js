const fs = require('fs');
const path = require('path');

const batchData = JSON.parse(fs.readFileSync('./round103_batch_data.json', 'utf8'));

function createPageCode(item) {
  const { slug, themeTitle, metaDescription, featureTag, areaName, prefecture, seasonFocus, catchphrase, hotels } = item;
  
  const hotelDetails = {
    // 1. 奥入瀬
    "71973": {
      name: "天然温泉 奥入瀬の湯 スーパーホテル十和田",
      kana: "てんねんおんせん おいらせのゆ すーぱーほてるとわだ",
      summary: "十和田市街地に位置し、奥入瀬渓流や十和田湖への観光拠点に最適な天然温泉ホテル。疲労回復に優れた奥入瀬の湯と、青森の郷土色豊かな健康朝食ビュッフェが評判。",
      spring: "単純温泉（低張性弱アルカリ性温泉） / 天然温泉「奥入瀬の湯」 / 効能：関節痛、冷え性、疲労回復、健康増進",
      cuisine: "青森名物「十和田バラ焼き」、せんべい汁、青森県産米まっしぐら、地元契約農家の有機野菜サラダバー（朝食無料）",
      charm: "奥入瀬渓流の散策前後にゆったり浸かれる天然温泉。リーズナブルでありながら質の高い設備とおもてなしで快適な旅をサポート。",
      access: "JR東北新幹線「七戸十和田駅」より車・バスで約25分 / 百石道路「下田百石IC」より約30分"
    },
    "168675": {
      name: "奥入瀬渓流温泉 灯と楓",
      kana: "おいらせけいりゅうおんせん あかりとかえで",
      summary: "奥入瀬の森に抱かれた一日数組限定の小さなプライベート温泉宿。薪ストーブの温もりと、源泉かけ流しの天然温泉、青森の自然派創作イタリアン・会席が自慢。",
      spring: "単純温泉（奥入瀬源泉） / 源泉かけ流し内湯・露天風呂 / 効能：美肌効果、神経痛、筋肉痛、冷え性、疲労回復",
      cuisine: "青森短角牛のロースト、奥入瀬イワナのアクアパッツァ、十和田湖ひめますのカルパッチョ、八甲田山麓の採れたてキノコパスタ",
      charm: "静寂のブナ林に囲まれた贅沢な隠れ家。秋には客室や露天風呂から燃えるような紅葉が広がり、薪の香りと美味に心癒やされます。",
      access: "JR八戸駅・新青森駅より路線バス「焼山」下車徒歩約5分 / 青森道「青森東IC」より車で約60分"
    },
    "14851": {
      name: "奥入瀬渓流温泉 野の花 焼山荘",
      kana: "おいらせけいりゅうおんせん ののはな やけやまそう",
      summary: "奥入瀬渓流の玄関口「焼山」に佇む、全館畳敷きの純和風温泉旅館。青森ヒバを贅沢に使った大浴場と露天風呂で、湯花香る名湯と山海郷土会席を堪能。",
      spring: "単純温泉（低張性中性高温泉） / 青森ヒバ造り大浴場・露天風呂 / 効能：神経痛、筋肉痛、関節痛、五十肩、冷え性、病後回復期",
      cuisine: "倉石牛（青森黒毛和牛）の陶板焼き、十和田湖ひめますのお造り・塩焼き、青森名物せんべい汁鍋、地場キノコと山菜の小鉢",
      charm: "青森ヒバの清々しい芳香と良質な温泉が疲れた体を優しく包み込みます。素足で寛げる畳敷きの館内と温かいおもてなしが好評。",
      access: "JR八戸駅よりJRバス「焼山」下車徒歩約3分 / 八戸自動車道「八戸IC」より車で約60分"
    },

    // 2. 高雄
    "38915": {
      name: "もみぢ家本館 高雄山荘",
      kana: "もみぢやほんかん たかおさんそう",
      summary: "京都屈指の紅葉名所・高雄の山腹に建つ創業明治の老舗料理旅館。神護寺や高山寺への参拝に便利で、秋には全館が紅葉の錦に包まれる絶好のロケーション。",
      spring: "展望檜風呂・貸切半露天風呂 / 効能：疲労回復、リフレッシュ、血行促進",
      cuisine: "名物「紅葉会席」、京都丹波牛のしゃぶしゃぶ鍋、旬の松茸土瓶蒸し、湯葉料理、秋の京野菜の焚き合わせ",
      charm: "秋風そよぐパノラマ露天風呂から見渡す高雄の山並みはまさに絶景。夕食時には舞妓さんのおもてなしプランも人気です。",
      access: "JR京都駅よりJRバス「高雄」下車徒歩約5分（送迎あり要連絡） / 名神高速「京都南IC」より約45分"
    },
    "38914": {
      name: "もみぢ家別館 川の庵",
      kana: "もみぢやべっかん かわのいおり",
      summary: "清滝川にかかる専用の吊り橋を渡って訪れる、清流のほとりに佇む数寄屋造りの隠れ家宿。夏から秋にかけて川床での贅沢な食事と、離れの客室露天風呂が魅力。",
      spring: "客室露天風呂・貸切露天風呂 / 効能：美肌、リラクゼーション、神経痛緩和",
      cuisine: "清滝川の秋の川床名残会席、丹波牛の陶板焼き、天然あゆ・子持ち鮎の炭火焼き、自家製ごま豆腐、秋の吹き寄せ前菜",
      charm: "清滝川のせせらぎと頭上を覆う真紅のもみじ。幻想的な夜のライトアップを眺めながら味わう川床料理は一生の思い出に。",
      access: "JR花園駅または地下鉄太秦天神川駅より無料送迎バスあり（要予約） / 京都南ICより約40分"
    },
    "108": {
      name: "リーガロイヤルホテル京都",
      kana: "りーがろいやるほてるきょうと",
      summary: "京都駅より徒歩約7分。伝統の格式と洗練されたモダンホスピタリティが融合したラグジュアリーホテル。京都紅葉めぐりの拠点として極上の快適性を提供。",
      spring: "室内温水プール・サウナ（フィットネス施設）",
      cuisine: "フレンチ「トップ オブ キョウト」（京都唯一の回転展望レストラン）、京料理「たん熊北店」の本格懐石、旬の京都産和牛ディナー",
      charm: "京都駅からのアクセスが抜群で、高雄や嵐山、東山への周遊に最適。360度京都の街並みと秋の山々を見渡す展望フレンチが格別。",
      access: "JR「京都駅」西口より徒歩約7分（八条口より無料シャトルバス運行） / 名神高速・京都南ICより約15分"
    },

    // 3. 木曽路
    "5933": {
      name: "木曽福島温泉 山みず季 URARA つたや",
      kana: "きそふくしまおんせん やまみずき うらら つたや",
      summary: "木曽川の清流沿いに佇み、創業元禄時代の伝統を今に伝える名門和風旅館。木曽ヒノキをふんだんに使った湯殿と、厳選された信州木曽牛会席が自慢。",
      spring: "含二酸化炭素-ナトリウム-炭酸水素塩・塩化物冷鉱泉（木曽福島自家源泉） / 効能：冷え性、高血圧、動脈硬化、疲労回復、筋肉痛",
      cuisine: "特選信州木曽牛の溶岩焼きステーキ、信州サーモンと岩魚のお造り、名物木曽手打ちそば、季節の茸朴葉味噌焼き",
      charm: "木曽川のせせらぎを眼下に望む露天風呂。ヒノキの心地よい香りに包まれながら、秋の木曽路の情緒と美味を堪能できます。",
      access: "JR中央本線「木曽福島駅」より徒歩約15分（無料送迎あり） / 中央道「伊那IC」または「中津川IC」より車で約45分"
    },
    "44821": {
      name: "木曽御岳温泉 つたや季の宿 風里",
      kana: "きそおんたけおんせん つたやときのやど ふうり",
      summary: "霊峰・木曽御嶽山を正面に望む標高1,200mの高原に広がる絶景温泉リゾート。広大な敷地にわずか限定室の静寂と、自家菜園の野菜を使った極上郷土フレンチ・会席。",
      spring: "炭酸水素塩温泉（木曽御岳温泉） / 展望露天風呂・客室露天風呂 / 効能：美肌効果、神経痛、筋肉痛、五十肩、冷え性",
      cuisine: "信州プレミアム木曽牛のフィレステーキ、木曽開田高原のそばがき、自家菜園の朝採れ高原野菜料理、信州の地酒ペアリング",
      charm: "露天風呂や客室テラスから望む夕日に染まる木曽御嶽山の紅葉パノラマ。満天の星と澄み切った高原の空気に心が洗われます。",
      access: "JR木曽福島駅より車で約25分（無料送迎あり要予約） / 中央道・伊那ICより国道361号経由約50分"
    },
    "183120": {
      name: "木曽駒の湯温泉 ぬくもりの宿 駒の湯",
      kana: "きそこまのゆおんせん ぬくもりのやど こまのゆ",
      summary: "木曽駒ヶ岳の麓、静かな山あいに湧く自家源泉の秘湯宿。名物の自家源泉かけ流し薬草風呂と露天風呂、素朴で温かい木曽の家庭料理が好評。",
      spring: "単純温泉・自家調合薬草風呂 / 源泉かけ流し露天風呂 / 効能：神経痛、リウマチ、疲労回復、胃腸病、美肌",
      cuisine: "信州ポークと木曽牛の陶板焼き、木曽の清流イワナの塩焼き、五平餅、山採りキノコ汁、地場野菜の天ぷら",
      charm: "素朴な自然美とぬくもりあふれるおもてなし。妻籠宿・奈良井宿の観光拠点としても便利で、心安らぐ湯治滞在が叶います。",
      access: "JR中央本線「原野駅」より車で約5分 / 木曽福島駅より車で約10分（送迎あり） / 伊那ICより約40分"
    },

    // 4. 名張・香落渓
    "7155": {
      name: "伊賀のかくれ宿 赤目温泉隠れの湯 対泉閣",
      kana: "いがのかくれやど あかめおんせんかくれのゆ たいせんかく",
      summary: "赤目四十八滝の渓谷入口に佇む、明治創業の老舗温泉旅館。忍者の里・伊賀の伝統と良質なアルカリ単純温泉、本場「伊賀牛」会席を堪能。",
      spring: "アルカリ性単純温泉（赤目温泉 隠れの湯） / 露天風呂・大浴場 / 効能：神経痛、筋肉痛、関節痛、疲労回復、冷え性、美肌効果",
      cuisine: "極上伊賀牛の味しゃぶ鍋会席、伊賀牛ステーキ、伊賀米コシヒカリの新米、名張特産きのこ料理、伊賀の地酒",
      charm: "赤目四十八滝ハイキングや香落渓ドライブの後に、美肌の湯でゆったり。とろけるような肉質の伊賀牛は一度食べたら忘れられない美味。",
      access: "近鉄大阪線「赤目口駅」より路線バス約10分「赤目滝」下車徒歩約1分（送迎あり要予約） / 名阪国道「上野IC」より約30分"
    },
    "7624": {
      name: "赤目温泉 山の湯 湯元赤目 山水園",
      kana: "あかめおんせん やまのゆ ゆもとあかめ さんすいえん",
      summary: "広大な日本庭園の中に数寄屋造りの離れが点在する隠れ里リゾート。赤目温泉の自家源泉から湧くラドン泉の露天風呂と、四季折々の会席料理が自慢。",
      spring: "単純弱放射能温泉（天然ラドン温泉） / 庭園露天風呂「吉祥の湯」 / 効能：通風、動脈硬化症、高血圧症、胆石症、慢性皮膚病、疲労回復",
      cuisine: "伊賀牛の石焼き会席、伊賀の旬魚・山菜料理、松茸の土瓶蒸し（秋季限定）、地場産契約農家の炊きたて伊賀米",
      charm: "庭園の池を赤や黄に染め上げる木々の紅葉。静かな離れ客室でプライベートな時間を過ごし、薬効高きラドン温泉で極上の癒やしを。",
      access: "近鉄赤目口駅よりタクシーまたは送迎バスで約5分 / 名阪国道・上野ICより約25分"
    },
    "76855": {
      name: "ホテル ルートイン名張",
      kana: "ほてる るーといんなばり",
      summary: "名張市街の中心に位置し、国道165号線沿いで車アクセス抜群のビジネス＆観光ホテル。ラジウム人工温泉大浴場と無料バイキング朝食を完備。",
      spring: "ラジウム人工温泉大浴場「旅人の湯」 / 効能：リウマチ、神経痛、冷え性、腰痛、疲労回復",
      cuisine: "焼き立てパンと和洋30種以上の無料朝食バイキング、名張地元食材を使った季節のおかず",
      charm: "香落渓や赤目四十八滝へのドライブ観光に最適なロケーション。広々とした大浴場で一日のドライブの疲れをしっかりリフレッシュ。",
      access: "近鉄大阪線「名張駅」東口より車で約5分（徒歩約15分） / 名阪国道「上野IC」より車で約25分"
    },

    // 5. 人吉温泉
    "16280": {
      name: "国登録有形文化財の宿 人吉温泉 芳野旅館",
      kana: "こくとうろくゆうけいぶんかざいのやど ひとよしおんせん よしのりょかん",
      summary: "明治42年創業、国の登録有形文化財に指定された木造三階建ての歴史的名旅館。職人技が光る格調高い建築と、源泉かけ流しの天然温泉、球磨の郷土料理を提供。",
      spring: "ナトリウム-炭酸水素塩・塩化物温泉（弱アルカリ性源泉かけ流し） / 効能：神経痛、筋肉痛、疲労回復、冷え性、美肌作用",
      cuisine: "熊本あか牛のステーキ会席、球磨川天然鮎の塩焼き、人吉名物つぼ汁、自家製鮎寿司、本格球磨焼酎の飲み比べ",
      charm: "100年以上の歴史が息づく中庭や意匠を凝らした客室。美肌の湯に浸かった後は、銘酒・球磨焼酎を傾けながら秋の夜長を過ごせます。",
      access: "JR肥薩線「人吉駅」より徒歩約10分（送迎あり） / 九州自動車道「人吉IC」より車で約5分"
    },
    "19539": {
      name: "人吉温泉 あゆの里",
      kana: "ひとよしおんせん あゆのさと",
      summary: "球磨川のほとりに佇み、和の情緒とモダンな快適性が融合した人吉を代表する高級温泉旅館。球磨川を望む絶景露天風呂と、極上の鮎・あか牛会席が人気。",
      spring: "ナトリウム-炭酸水素塩・塩化物温泉 / 展望露天風呂・足湯テラス / 効能：美肌効果、切り傷、火傷、疲労回復、健康増進",
      cuisine: "特選あか牛の溶岩焼き、球磨川の落ち鮎塩焼き、山江村産丹波栗を使った秋の小鉢、球磨焼酎仕込みの豚角煮",
      charm: "球磨川沿いのテラス足湯から眺める秋の朝霧と紅葉は息をのむ美しさ。洗練された空間と心地よいおもてなしで至福のステイを。",
      access: "JR人吉駅より車で約5分（無料送迎あり） / 九州道「人吉IC」より車で約7分 / 鹿児島空港より車で約50分"
    },
    "16248": {
      name: "人吉温泉 鍋屋（旧：人吉温泉 鍋屋本館）",
      kana: "ひとよしおんせん なべや",
      summary: "創業慶応4年（1868年）、人吉城跡の対岸に位置する老舗宿。球磨川の清流と相良藩の歴史を望むパノラマ大浴場と、人吉球磨の滋味を凝縮した会席料理。",
      spring: "弱アルカリ性単純温泉 / 展望大浴場・露天風呂 / 効能：神経痛、筋肉痛、疲労回復、冷え性、健康増進",
      cuisine: "熊本県産黒毛和牛・あか牛会席、球磨川産鮎の姿焼き、季節の山菜と地野菜の天ぷら、郷土料理の小鉢",
      charm: "大浴場から望む球磨川と人吉城跡の秋の景色。歴史ある温泉街の風情を感じながら、心解き放たれるリラックスタイム。",
      access: "JR人吉駅より徒歩約15分（送迎あり） / 人吉ICより車で約5分"
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
          "text": "例年${seasonFocus}が見頃のピークとなります。山々や渓谷のグラデーションとともに、旬を迎える地場食材を存分にお楽しみいただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "楽天ふるさと納税のトラベルクーポンは寄付後すぐに利用できますか？",
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
          "text": "10月〜11月の${areaName}は朝晩の冷え込みが強まります。日中は快適な服装で問題ありませんが、朝夕の散策や露天風呂への移動時には防寒着（フリースやジャケット等）を必ずご用意ください。"
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
                10月〜11月限定の美しいグラデーション。清流や奇岩、歴史的建造物と調和した絶景を満喫できます。
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
                厳選されたブランド和牛や旬の川魚・海の幸、採れたてのキノコや新米を味わう贅沢な秋会席。
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

console.log("All 5 pages for Round 103 generated successfully.");
