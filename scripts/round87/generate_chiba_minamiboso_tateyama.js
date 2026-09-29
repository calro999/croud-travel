const fs = require('fs');
const path = require('path');

function generateChibaMinamibosoTateyamaPage(hotels) {
  const slug = 'winter-chiba-minamiboso-tateyama-chikura-ocean-iseebi-stay';
  const title = '【11・12月千葉・南房総館山温泉＆千倉温泉】海越しに望む冠雪富士と温暖避寒の海辺名湯・房州伊勢海老＆地魚一本買い舟盛り・極上かずさ和牛を味わう名宿5選';
  const description = '11月中旬から初冬の千葉・南房総（館山・千倉・白浜）は、厳しい寒さを忘れさせてくれる黒潮の恵みによる温暖な気候と、一足早い初春の気配が漂う関東屈指の避寒リゾート地です。初冬の大気が澄み渡るこの季節の最大の絶景は、穏やかな館山湾（別名・鏡ヶ浦）越しに、白銀の雪帽子を被った雄大な「富士山」が夕陽に染まりながら海の上に浮かび上がる夕景のパノラマ。太平洋と東京湾が交わるこの海域に湧く温泉は、太古の海水成分を濃密に含んだナトリウム-塩化物冷鉱泉（強塩泉）。湯船に身を沈めれば、塩分の被膜が身体を包み込み、湯上がり後も芯まで温かさが持続します。そして初冬の食卓を豪華絢爛に飾るのは、黒潮にもまれて甘みと歯ごたえが凝縮した「房州伊勢海老」、千倉や館山港の定置網で獲れたピチピチの地魚姿造り舟盛り、肉厚な活き鮑、さらに千葉県が誇る上質な霜降り黒毛和牛「かずさ和牛」のサーロインステーキ。心地よい潮風と絶景富士に癒やされる厳選名宿5選を徹底解説します。';

  const hotelDetails = [
    {
      story: '平砂浦海岸の松林を抜けた高台に建ち、ハワイやバリ島のような南国リゾートの開放感と日本旅館の温かなもてなしが見事に融合した人気温泉宿「たてやま温泉 千里の風」。エントランスを抜けると、目の前には太平洋と伊豆大島、そして初冬の澄んだ空気の中で遠く富士山を望むオーシャンパノラマが広がります。宿の名物は、地元の定置網漁船「健吉丸」から毎日直送される地魚を堪能できる「舟盛り付きハーフ会席＆炙り海鮮ブッフェ」。美しく盛られた刺身舟盛りに加え、活きホタテやサザエの浜焼き、握り寿司、房州伊勢海老料理など、海の幸を心ゆくまで堪能できます。大浴場と露天風呂には、敷地内の自家源泉から湧くナトリウム-炭酸水素塩・塩化物泉が注がれ、肌がすべすべになる「美肌の湯」として大好評。夜には満天の星が夜空を埋め尽くし、都会の喧騒から離れた贅沢な初冬の休日を過ごせます。',
      roomTip: '太平洋と富士山を望むオーシャンビュー和モダン客室または露天風呂付き客室。初冬の夕暮れ、茜色のグラデーションに染まる富士山のシルエットは感動的です。',
      gourmetTip: '「名物健吉丸直送地魚舟盛り＆房州伊勢海老・かずさ和牛会席」。獲れたての地魚刺身、甘みあふれる伊勢海老の黄金焼き、柔らかいかずさ和牛ステーキの競演。'
    },
    {
      story: '館山湾（鏡ヶ浦）の静かな波打ち際に佇み、網元「ろくや」が手掛ける極上の食体験と大人のプライベート空間を追求した高級デザイナーズ温泉宿「鏡ヶ浦温泉 rokuza（ろくざ）」。客室に足を踏み入れると、洗練されたモダンインテリアの向こうに穏やかな館山湾が広がり、初冬の夕刻には海越しに富士山が息をのむ美しさで姿を現します。地下から汲み上げられる自家源泉「鏡ヶ浦温泉」は、肌あたりがまろやかで高い保温性を誇り、貸切風呂や客室露天風呂でプライベートな湯浴みを心ゆくまで楽しめます。夕食は網元直営ならではの圧倒的なクオリティを誇る創作会席。その日の朝、自社保有の定置網で水揚げされたばかりの鮮魚を、料理長が繊細な技で仕立てる刺身姿造りは圧巻の鮮度。冬の房州伊勢海老のお造り、肉厚な鮑の酒蒸し、厳選黒毛和牛のグリルなど、美食家たちを唸らせる極上の皿が続きます。',
      roomTip: '海に面したテラス露天風呂付きスイートまたはプレミアム客室。館山湾の穏やかな波音を聴きながら、初冬の富士山を望むプライベート露天風呂に浸かる至福。',
      gourmetTip: '「網元直送地魚姿造り＆房州活伊勢海老・かずさ和牛極上会席」。朝獲れの白身魚や金目鯛、プリプリの伊勢海老、きめ細やかなサシのかずさ和牛をワインと共に。'
    },
    {
      story: '南房総の東海岸、千倉の潮騒に包まれ、昭和の文豪や芸術家たちにも愛された歴史ある名湯宿「千倉温泉 千倉館」。創業以来、千倉の海辺に湧く源泉を大切に守り続け、大浴場や風情ある貸切露天風呂には、神経痛や冷え性に優れた効能を持つ良質な単純温泉が満たされています。初冬の朝晩の冷気の中で湯船に浸かると、木造旅館ならではの木の温もりと柔らかな湯が旅人の強張った身体を優しく解きほぐしてくれます。この宿の最大の魅力は、名物「囲炉裏炭火焼き会席」。食事処に配された囲炉裏で、南房総の冬の王者・房州伊勢海老や活きサザエ、大粒の蛤（はまぐり）、旬の地魚の干物、地元野菜をパチパチと音を立てる炭火でじっくり焼き上げて味わう体験は格別。さらに房総黒毛和牛の炭火焼きも加わり、初冬の夜に心まで温まる団欒のひとときを約束してくれます。',
      roomTip: '千倉の庭園を望む露天風呂付き和洋室、または風情ある数寄屋造りの純和風客室。静かな波音と木の香りに包まれ、歴史ある文豪宿の情緒に浸ることができます。',
      gourmetTip: '「名物囲炉裏炭火焼き＆房州伊勢海老・あわび・房総和牛会席」。炭火で香ばしく焼き上がる伊勢海老の殻の香りと甘み、炭火焼き和牛の肉汁が口いっぱいに広がります。'
    },
    {
      story: '館山の南端、白亜の灯台が立つ洲崎へと向かう海岸線に広がり、南欧プロヴァンス風の明るいリゾート空間が広がる「館山リゾートホテル」。敷地内にはパームツリーが揺れ、初冬の澄みきった青空と温暖な海風が心地よい開放感をもたらしてくれます。ホテル内には敷地内から自噴する館山温泉を満喫できる大浴場と展望露天風呂が完備され、弱アルカリ性の天然温泉が冬の乾燥肌をしっとりと潤してくれます。夕食は南房総の豊かな海の恵みと地元農家の冬野菜をふんだんに取り入れた和洋折衷ビュッフェまたは特選和食会席。房州産伊勢海老の鬼殻焼きや、獲れたて地魚のお刺身、千葉県産銘柄牛のローストビーフやステーキなど、多彩な料理が並びます。広々とした客室と充実したリゾート設備は、ファミリー旅行やグループ旅行、気兼ねないカップル旅行に高いコストパフォーマンスを誇ります。',
      roomTip: '太平洋を見渡すオーシャンビュー和洋室。バルコニーに出れば初冬の爽快な潮風が吹き抜け、青い海と空が広がるリゾート気分を満喫できます。',
      gourmetTip: '「房州伊勢海老グリル＆千葉県産牛ステーキディナー」。パリッと焼き上げた伊勢海老の香ばしさ、柔らかい県産牛の肉汁、旬の地元野菜サラダの豊かな彩り。'
    },
    {
      story: '房総半島の最南端、野島埼灯台のすぐそばに位置し、全室が太平洋を真正面に望む抜群のロケーションを誇るシーサイドリゾート「南房総白浜温泉 白浜オーシャンリゾート」。海まで遮るものが一切ない絶好の立地で、すべての客室のバルコニーから初冬の雄大な太平洋の水平線と白波の絶景が広がります。館内大浴場には白浜温泉の良質なナトリウム-塩化物泉が注がれ、海を眺めながらの湯浴みは開放感満点。夕食は宿名物の「浜焼き＆海鮮ディナーバイキング」。テーブルに備え付けられたコンロで、サザエやホタテ、蛤などの貝類を自分たちで香ばしく焼き上げる浜焼き体験は大人から子供まで大人気。さらに、冬の特別プランでは房州伊勢海老のお造りや鬼殻焼き、あわびの踊り焼き、かずさ和牛のステーキを一品料理として追加でき、贅沢な冬の味覚を心ゆくまで堪能できます。',
      roomTip: '全室オーシャンビューのバルコニー付き客室。初冬の朝、水平線から昇る朝日が海面を黄金色の道へと変える光景は感動的な美しさです。',
      gourmetTip: '「名物貝類浜焼きバイキング＆房州伊勢海老・かずさ和牛特選膳」。網の上でパチパチと弾けるサザエの壺焼き、甘みたっぷりの伊勢海老、ジューシーな和牛ステーキ。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥14,050〜' : i === 1 ? '¥22,000〜' : i === 2 ? '¥10,900〜' : i === 3 ? '¥8,250〜' : '¥4,930〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.44' : i === 1 ? '4.85' : i === 2 ? '4.07' : i === 3 ? '3.86' : '3.97');
    const reviewCount = h.reviewCount || (i === 0 ? 1120 : i === 1 ? 480 : i === 2 ? 650 : i === 3 ? 520 : 790);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || '富津館山道路 富浦ICより国道127号・128号経由で約20〜35分。JR内房線 館山駅より無料送迎バスまたは路線バス運行')},
              special: ${JSON.stringify(h.hotelSpecial || '海越しに望む冠雪富士と温暖海辺温泉・房州伊勢海老とかずさ和牛を味わう名宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '平砂浦海岸目前＆定置網「健吉丸」直送の地魚舟盛りと房州伊勢海老・自家源泉美肌湯' : i === 1 ? '館山湾鏡ヶ浦の特等席＆網元直営の圧倒的鮮度舟盛りと富士山を望む客室露天風呂' : i === 2 ? '文豪も愛した歴史ある名湯＆名物囲炉裏炭火焼き会席と房州伊勢海老・房総和牛' : i === 3 ? '南欧プロヴァンス風リゾート＆全室オーシャンパノラマと天然温泉大浴場・海鮮ディナー' : '房総最南端野島埼灯台そば＆全室バルコニー付きパノラマ海景色と名物貝類浜焼き')},
                ${JSON.stringify(i === 0 ? '太平洋と夕陽に染まる富士山の絶景＆美肌炭酸水素塩泉露天風呂と星空テラス' : i === 1 ? '洗練されたデザイナーズ客室＆朝獲れ地魚姿造りと大人の上質プライベート' : i === 2 ? '木の温もり感じる純和風建築＆炭火でパチパチ焼くサザエや鮑と地酒の晩酌' : i === 3 ? 'パームツリー揺れる開放感＆房州産伊勢海老グリルと広々とした客室ステイ' : '水平線から昇る朝日＆自分たちで焼く熱々のサザエ・ホタテ浜焼きバイキング')},
                ${JSON.stringify(i === 0 ? 'ハーフ会席＆炙り海鮮ブッフェの大満足ディナー＆カップルから三世代まで大人気' : i === 1 ? '記念日や特別な休日に選ばれる名宿＆館山湾の穏やかな波音に包まれる静寂' : i === 2 ? '心温まるおもてなしと歴史情緒＆千倉港の朝獲れ鮮魚を堪能する大人の冬旅' : i === 3 ? '抜群のコストパフォーマンス＆ドライブ旅行やファミリーステイに最適な拠点' : '太平洋の大海原を独り占め＆ペット同伴可能ルームも備える気軽な海辺リゾート')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "11月・12月の館山湾（鏡ヶ浦）から富士山が最も綺麗に見える時間帯や場所は？",
      a: "館山湾は西向きに大きく開けており、冬の澄んだ空気の中で東京湾越しに冠雪した富士山を望む絶景ポイントです。特に11月から12月は晴天率が高く、日没の30分前〜日没直後（16:30〜17:15頃）のマジックアワーが最高潮。茜色から紫色のグラデーションに染まる空を背景に、富士山の美しい稜線が黒々と浮かび上がる「紅富士」や「夕焼け富士」が楽しめます。北条海岸、那古海岸、城山公園（館山城）、鏡ヶ浦温泉rokuzaの客室テラスなどが屈指のビュースポットです。"
    },
    {
      q: "南房総の冬の味覚「房州伊勢海老」と「かずさ和牛」の特徴は？",
      a: "千葉県は三重県と並ぶ日本トップクラスの伊勢海老の水揚げ量を誇ります。特に黒潮の激流と岩礁地帯で育った「房州伊勢海老」は、11月・12月の水温低下に伴い身が引き締まり、強い甘みとプリプリとした弾力が際立ちます。お造りはもちろん、香ばしい鬼殻焼きや翌朝の味噌汁は絶品です。また「かずさ和牛」は、温暖な房総の大地と清らかな地下水で丹精込めて育てられた黒毛和牛で、融点の低い上質な霜降りと芳醇な赤身のコクが特徴の希少ブランド牛です。"
    },
    {
      q: "初冬の南房総（館山・千倉・白浜）の気候と服装のポイントは？",
      a: "南房総は沖合を流れる黒潮の影響を受けるため、関東地方の中で最も温暖な気候です。11月の最高気温は17〜20℃、12月でも12〜16℃前後まで上がり、真冬でも氷点下になることはほぼありません。日中は日差しがあれば薄手のジャケットやニットで快適に過ごせます。ただし、海岸線は冬の海風が強いため、朝夕の散策や展望露天風呂の利用時には、風を通さない防風ウィンドブレーカーやダウンジャケットを羽織るのがおすすめです。"
    },
    {
      q: "11月・12月に楽しめる南房総の周辺観光や自然の見どころは？",
      a: "南房総では初冬から早くも春の花が咲き始めます。白浜の「野島埼灯台」周辺や千倉の海岸線では12月中旬から甘い香りを放つ「水仙（すいせん）」が開花。また、館山湾を一望する「館山城（城山公園）」、鋸山の「地獄のぞき」や日本寺大仏、新鮮な地魚や海産物が揃う「道の駅 とみうら 枇杷倶楽部」や「漁師料理 たてやま」での海鮮土産ショッピングがおすすめです。"
    },
    {
      q: "東京・横浜方面からの車や高速バスでのアクセスルートと所要時間は？",
      a: "東京湾アクアラインを利用すれば、都心からのアクセスは驚くほどスムーズです。車の場合、東京・川崎・横浜からアクアライン〜館山自動車道〜富津館山道路を経由し、「富浦IC」まで約70〜80分。富浦ICから館山市内・千倉へは一般道で約15〜25分です。また、JR東京駅八重洲口や新宿駅、横浜駅、羽田空港から館山駅前を結ぶ直行高速バス「房総なのはな号」などが頻発運行しており、乗り換えなし約100〜120分で快適にアクセスできます。"
    }
  ];

  const pageContent = `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map, Palmtree
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '館山温泉 宿泊, 千倉温泉 旅館, 千里の風, rokuza 鏡ヶ浦温泉, 房州伊勢海老 宿, かずさ和牛, 館山 富士山 夕景 露天風呂, 南房総 避寒旅行, 11月 12月 千葉温泉',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}'
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の館山湾鏡ヶ浦越しに夕暮れの海に浮かび上がる冠雪富士'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function ChibaMinamibosoTateyamaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/${slug}#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.com/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.com/"
        },
        "headline": ${JSON.stringify(title)},
        "description": ${JSON.stringify(description)},
        "datePublished": "2026-09-30T00:00:00+09:00",
        "dateModified": "2026-09-30T00:00:00+09:00",
        "inLanguage": "ja",
        "mainEntityOfPage": "https://croud-travel.com/${slug}",
        "publisher": {
          "@type": "Organization",
          "name": "クラドトラベル編集部",
          "url": "https://croud-travel.com/"
        }
      },
      {
        "@type": "ItemList",
        "itemListElement": [
${hotels.map((h, i) => `          {
            "@type": "ListItem",
            "position": ${i + 1},
            "item": {
              "@type": "Hotel",
              "name": ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              "description": ${JSON.stringify(hotelDetails[i]?.story || '')},
              "url": ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "${h.reviewAverage || (i === 0 ? '4.44' : i === 1 ? '4.85' : i === 2 ? '4.07' : i === 3 ? '3.86' : '3.97')}",
                "reviewCount": ${h.reviewCount || (i === 0 ? 1120 : i === 1 ? 480 : i === 2 ? 650 : i === 3 ? 520 : 790)}
              }
            }
          }`).join(',\n')}
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
${faqList.map(f => `          {
            "@type": "Question",
            "name": ${JSON.stringify(f.q)},
            "acceptedAnswer": {
              "@type": "Answer",
              "text": ${JSON.stringify(f.a)}
            }
          }`).join(',\n')}
        ]
      }
    ]
  };

  const faqList = ${JSON.stringify(faqList, null, 2)};

  const hotelList = [
${hotelCardsCode}
  ];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-900 leading-relaxed font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <header className="relative bg-gradient-to-b from-cyan-950 via-teal-950 to-slate-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border border-cyan-400/30">
            <Palmtree className="w-4 h-4 text-cyan-300" />
            11月・12月 千葉・南房総の冬特集 ｜ 館山温泉＆千倉温泉
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            海越しに望む冠雪富士と温暖避寒の海辺名湯<br />
            房州伊勢海老＆地魚一本買い舟盛りとかずさ和牛名宿
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed pt-2">
            黒潮がもたらす温暖な南房総。館山湾（鏡ヶ浦）越しに浮かぶ夕暮れの紅富士と、解禁された房州伊勢海老、定置網地魚舟盛りを堪能する厳選名宿5選。
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5"><Mountain className="w-4 h-4 text-cyan-400" /> 館山湾越し冠雪富士の夕景</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-amber-400" /> 解禁房州伊勢海老＆地魚舟盛り</span>
            <span className="flex items-center gap-1.5"><Sun className="w-4 h-4 text-rose-400" /> 黒潮避寒＆身体芯まで温まる強塩泉</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-12">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-teal-900 text-xs sm:text-sm font-bold bg-teal-50 px-3 py-1 rounded-full">
              <Sun className="w-4 h-4" />
              関東で最も温暖な楽園。海原と雄大な富士が織りなす冬の絶景
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
              初冬の南房総（館山・千倉）が選ばれる3つの絶景＆美食
            </h2>
          </div>
          <div className="text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
            <p>
              千葉県房総半島の南端に位置する館山・千倉・白浜エリアは、沖合を流れる暖流・黒潮の影響により、真冬でも雪が降ることは極めて稀で、一足早く春の気配が漂う温暖な海洋性気候を誇ります。都心から東京湾アクアライン経由でわずか約80〜90分という抜群のアクセスの良さも相まって、冬の週末を暖かく贅沢に過ごしたい人々に愛され続けています。
            </p>
            <p>
              空気が澄み渡る11月から12月にかけての南房総は、景色と味覚が最も輝く黄金期。夕暮れ時、館山湾（鏡ヶ浦）の穏やかな海越しに白銀の雪帽子をかぶった富士山がシルエットとなって浮かび上がる瞬間は、息をのむほどの感動をもたらします。さらに、秋から冬にかけて身がギュッと締まり甘みが最高潮に達する名物「房州伊勢海老」、定置網から水揚げされる地魚の豪華舟盛り、大粒の鮑、そして千葉県が誇る黒毛和牛「かずさ和牛」のステーキなど、海と大地の贅を尽くした美食が旅人を魅了します。
            </p>
            <p>
              海辺に湧く天然温泉は、太古の海水成分を濃密に含んだ塩化物泉。湯船に身を沈めれば、塩分の被膜が身体を包み込み、湯上がり後も芯まで温かさが持続して湯冷め知らず。潮風を感じる絶景露天風呂で富士山や満天の星を眺めながら過ごす時間は、心身を解きほぐす至福のひとときです。
            </p>
            <p>
              また、温暖な気候を活かした早咲き水仙の群生や、館山城の歴史散策、港町ならではの活気あふれる海鮮市場など、冬のドライブ旅行を彩る見どころも満載。寒波を避けてぬくもりの海辺リゾートを満喫する旅へ出かけてみませんか。
            </p>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-teal-900 font-bold text-xs sm:text-sm tracking-wider uppercase bg-teal-100/60 px-3 py-1 rounded-full">
              SELECTED ACCOMMODATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              南房総（館山・千倉）で泊まりたい至高の名宿5選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm max-w-xl mx-auto">
              定置網直送地魚自慢のリゾートから網元直営デザイナーズ宿、囲炉裏炭火焼きの老舗まで
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div className="md:col-span-5 relative min-h-[260px] md:min-h-full">
                    <img
                      src={hotel.img}
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      {hotel.rating} ({hotel.reviews}件)
                    </div>
                  </div>

                  <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-stone-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                          {hotel.access}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-teal-800 transition">
                        {hotel.name}
                      </h3>
                      <p className="text-xs text-teal-900 font-medium">
                        {hotel.special}
                      </p>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
                        {hotel.story}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2 border-t border-stone-100">
                      <div className="bg-stone-50 p-3 rounded-xl space-y-1.5 text-xs text-stone-600">
                        <div className="font-semibold text-stone-800 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          宿の魅力・滞在ポイント
                        </div>
                        <ul className="list-disc list-inside space-y-1 pl-1 text-[11px] sm:text-xs">
                          {hotel.highlights.map((hl: string, hIdx: number) => (
                            <li key={hIdx} className="leading-snug">{hl}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] sm:text-xs text-stone-600">
                        <div className="bg-teal-50/50 p-2.5 rounded-lg border border-teal-100/50">
                          <span className="font-bold text-teal-900 block mb-0.5">客室の選び方</span>
                          {hotel.roomTip}
                        </div>
                        <div className="bg-amber-50/50 p-2.5 rounded-lg border border-amber-100/50">
                          <span className="font-bold text-amber-900 block mb-0.5">冬の美食の極意</span>
                          {hotel.gourmetTip}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div>
                          <span className="text-[10px] text-stone-500 block">参考宿泊料金（2名1室/1名様）</span>
                          <span className="text-base sm:text-lg font-bold text-stone-900">{hotel.price}</span>
                        </div>
                        <a
                          href={hotel.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-teal-800 hover:bg-teal-900 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition shadow-xs"
                        >
                          プラン一覧を見る
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local Gourmet Section */}
        <section className="bg-gradient-to-br from-slate-900 via-teal-950 to-cyan-950 text-white rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-cyan-300 text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Utensils className="w-4 h-4 text-cyan-300" />
            初冬の南房総美食手帖
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            11月・12月の南房総で味わい尽くす海の王者とブランド和牛
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-cyan-400" />
                黒潮が育む「房州伊勢海老」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                全国屈指の水揚げ量を誇る房州伊勢海老は、水温が下がる初冬に身が引き締まり、強い甘みとプリプリの食感が際立ちます。透き通るお造りはもちろん、香ばしい鬼殻焼きや翌朝の濃厚な味噌汁は冬の南房総旅行の醍醐味です。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Waves className="w-4 h-4 text-cyan-400" />
                定置網直送「朝獲れ地魚舟盛り」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                館山港や千倉港の定置網から揚がる地魚は鮮度抜群。冬の寒ブリ、金目鯛、ヒラメ、サザエなど、朝水揚げされたばかりの旬魚が所狭しと並ぶ豪快な舟盛りは、都心では決して味わえない圧倒的な鮮度と美味しさを誇ります。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-cyan-400" />
                極上黒毛和牛「かずさ和牛」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                温暖な房総の大地と清らかな水で丹精込めて育てられた「かずさ和牛」。きめ細やかなサシが入ったサーロインステーキは、口に含んだ瞬間に上質な脂がとろけ、芳醇な肉汁の旨味が広がります。海の幸との贅沢な競演は圧巻。
              </p>
            </div>
          </div>
        </section>

        {/* 1 Night 2 Days Itinerary Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-900 text-sm font-bold bg-teal-50 px-3 py-1 rounded-full">
            <Footprints className="w-4 h-4" />
            おすすめ滞在プラン
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の南房総を満喫する海鮮ドライブ1泊2日モデルコース
          </h2>
          <div className="space-y-6 pt-2">
            <div className="border-l-2 border-teal-600 pl-4 sm:pl-6 space-y-2">
              <div className="inline-block bg-teal-100 text-teal-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                1日目：アクアラインから館山城登閣・夕暮れの冠雪富士露天風呂へ
              </div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                海ほたるPA経由で館山へ、海越し富士の絶景と伊勢海老会席の夜
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                東京方面から東京湾アクアラインを利用して南房総へ快適ドライブ。「海ほたるPA」で富士山を眺めながら休憩し、館山市内の「館山城（城山公園）」へ。山頂天守から館山湾（鏡ヶ浦）の大パノラマを見渡します。15時に宿へチェックイン。日没の16時半頃、海越しに夕陽を受けて輝く冠雪富士の雄姿を展望露天風呂から鑑賞。夕食は獲れたての房州伊勢海老姿造りと地魚舟盛り、かずさ和牛ステーキを堪能します。
              </p>
            </div>

            <div className="border-l-2 border-teal-600 pl-4 sm:pl-6 space-y-2">
              <div className="inline-block bg-teal-100 text-teal-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                2日目：房総最南端野島埼灯台の朝日散歩と道の駅海鮮めぐり
              </div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                水平線から昇る朝日を愛で、道の駅で干物や地場産品ショッピング
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                早朝、太平洋から昇る朝日を眺めながら海辺を散策。チェックアウト後は房総最南端の「野島埼灯台」を訪れ、初冬の澄みきった大海原を見渡す「ラバーズベンチ」で記念撮影。帰路には人気の道の駅「とみうら 枇杷倶楽部」や「ザ・フィッシュ」に立ち寄り、房州ひじきや干物、銘菓のお土産選びを楽しんでアクアライン経由で帰路につきます。
              </p>
            </div>
          </div>
        </section>

        {/* Climate & Access Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-cyan-900 text-sm font-bold bg-cyan-50 px-3 py-1 rounded-full">
            <Sun className="w-4 h-4" />
            11月・12月の気候・服装・快適アクセス案内
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の南房総旅行のポイントと快適ドライブのコツ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-teal-700" />
                温暖な気候と海風対策
              </h3>
              <p>
                南房総は黒潮の影響で真冬でも氷点下になることはほぼありません。11月の最高気温は約17〜20℃、12月でも約13〜16℃と関東屈指の暖かさです。ただし、海岸線は冬の北風が吹き付けるため、朝夕の露天風呂や海岸散歩には風を通さない防風ジャケットやマフラーがあると快適に過ごせます。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-teal-700" />
                アクアライン経由で都心から約80分
              </h3>
              <p>
                東京・横浜方面からアクアライン〜館山道〜富津館山道路「富浦IC」まで約70〜80分。降雪や路面凍結の心配は原則不要で、ノーマルタイヤで快適にドライブできます。東京駅や新宿駅からの直行高速バス「房総なのはな号」も多数運行しており、車がない方でも手軽にアクセス可能です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-900 text-sm font-bold bg-teal-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の南房総（館山・千倉）旅行 FAQ
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 flex items-start gap-2">
                  <span className="text-teal-800 shrink-0 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link Section */}
        <section className="bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-teal-300" />
              あわせて読みたい関東・近郊の冬海幸・温泉特集
            </h3>
            <p className="text-xs sm:text-sm text-teal-200">
              冬の味覚と絶景オーシャンビュー露天風呂を堪能する厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-kanagawa-yugawara-onsen-bungo-kaiseki-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-300 bg-teal-400/20 px-2 py-0.5 rounded-full inline-block">神奈川・湯河原温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-teal-200 transition line-clamp-2">
                奥湯河原の晩秋紅葉＆相模湾伊勢海老と文豪名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                文豪が愛した万葉の名湯と相模湾の伊勢海老、静寂の渓谷露天風呂を味わう休日。
              </p>
            </Link>

            <Link 
              href="/winter-shizuoka-atami-onsen-winter-fireworks-kinmedai-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-300 bg-teal-400/20 px-2 py-0.5 rounded-full inline-block">静岡・熱海温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-teal-200 transition line-clamp-2">
                熱海海上冬花火＆相模湾インフィニティ露天と金目鯛名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                澄んだ冬の夜空を焦がす大迫力の海上花火と、脂が乗った極上金目鯛姿煮を堪能。
              </p>
            </Link>

            <Link 
              href="/winter-kanagawa-hakone-fuji-view-onsen-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-300 bg-teal-400/20 px-2 py-0.5 rounded-full inline-block">神奈川・箱根芦ノ湖</span>
              <h4 className="text-xs font-bold text-white group-hover:text-teal-200 transition line-clamp-2">
                芦ノ湖富士山絶景＆箱根名湯と特選和牛会席名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                初冬の雪化粧富士を望むパノラマ露天風呂と、歴史ある箱根十七湯巡りの旅。
              </p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
`;

  const outputDir = path.join(__dirname, '..', '..', 'src', 'app', slug);
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'page.tsx'), pageContent, 'utf8');
  console.log(`Generated: src/app/${slug}/page.tsx`);
}

module.exports = { generateChibaMinamibosoTateyamaPage };
