const fs = require('fs');
const path = require('path');

function generateIyaPage(hotels) {
  const slug = 'winter-tokushima-iya-valley-onsen-hikyo-awa-beef-stay';
  const title = '【11・12月徳島・祖谷温泉の日本三大秘境初雪渓谷美と谷底露天風呂】特選阿波牛・名物祖谷そば＆ケーブルカーで行く秘湯の宿5選';
  const description = '11月から12月にかけて四国の霊峰・剣山山系の深山幽谷に抱かれた「徳島・祖谷渓（いやけい）＆大歩危峡（おおぼけきょう）」は、日本三大秘境にふさわしい静寂と、初冠雪の白銀に化粧されたV字渓谷の圧倒的な自然美に包まれます。断崖絶壁から専用ケーブルカーで高低差170mの谷底へ下り、エメラルドグリーンの祖谷川の清流すれすれで浸かる自噴掛け流しの単純硫黄泉。スロープカーで登る天空露天風呂、とろける旨味の極上黒毛和牛「阿波牛」の陶板焼き、香り高い名物「祖谷そば」、囲炉裏の炭火で香ばしく焼き上げる郷土の伝統料理「でこまわし」を満喫する至高の秘湯宿5選を徹底解説。';

  const hotelDetails = [
    {
      story: '祖谷渓の深いV字谷の断崖絶壁にせり出すように建ち、日本屈指の秘湯として世界中の旅人を魅了する一軒宿「和の宿 ホテル祖谷温泉」。宿の最大の代名詞は、宿専用のケーブルカーで傾斜42度・高低差170mの深い谷底へと約5分かけて降りていく露天風呂「渓谷の湯」「せせらぎの湯」です。祖谷川の澄み切った清流のすぐ水際に設えられた湯船には、毎分330リットルもの新鮮な単純硫黄泉が完全掛け流しで自噴。38〜39度のぬる湯に浸かると、身体中にきめ細かな気泡（泡付き）がびっしりと付着し、初冬の冷気の中で何時間でも浸かっていたくなる至福の湯浴みが叶います。夕食には徳島が誇る極上黒毛和牛「阿波牛」や清流アメゴを盛り込んだ贅沢な会席料理が供されます。',
      roomTip: '祖谷渓谷を見下ろす露天風呂付き客室「雲の上」または展望和洋室。足元から切り立つ深い谷底と初冬の雲海・霧のパノラマを独占。',
      gourmetTip: '「特選阿波牛と祖谷の恵み炭火会席」。きめ細かなサシが入った阿波牛の炭火焼きステーキ、香り豊かな手打ち祖谷そば、吉野川水系の岩魚やアマゴの塩焼き。'
    },
    {
      story: '祖谷渓の絶景を一望する全9室すべてに源泉掛け流しの露天風呂が備えられ、大人の贅沢なプライベートステイで楽天トラベル評価4.83という驚異的な高評価を誇る「渓谷の隠れ宿 祖谷美人（いやびじん）」。全室が離れ風の造りとなっており、テラスの陶器風呂や檜露天風呂からは、深い谷底を流れる祖谷川のせせらぎと初雪に染まる山肌を静かに見下ろせます。囲炉裏を配した個室食事処では、宿の主人が毎日丹精込めて打つ十割祖谷そばをはじめ、郷土の味「でこまわし」や阿波牛の陶板焼きを、炭火の温もりを感じながら味わう贅沢な美食の夜が待っています。',
      roomTip: '全室渓谷ビューの源泉露天風呂付き和洋室。広々とした木製テラスで初冬の冷気を浴びながら、贅沢な源泉掛け流し湯を24時間いつでも独り占め。',
      gourmetTip: '「囲炉裏炭火焼き会席と手打ち祖谷そば」。囲炉裏でじっくり焼くアメゴやでこまわし、とろける阿波牛陶板焼き、風味豊かな挽きたて祖谷そば。'
    },
    {
      story: '吉野川が何億年もの歳月をかけて四国山地を削り出した大歩危峡の絶壁に佇み、エメラルドグリーンの激流と巨岩が織りなす大自然の造形美を間近に体感できる老舗宿「峡谷の湯宿 大歩危峡まんなか」。大浴場や露天風呂からは、初冬の澄んだ水面と、時折渓谷を走り抜けるJR土讃線の列車をまるでジオラマのように眺めることができます。大歩危峡遊覧船乗り場にも隣接しており、観光の拠点としても抜群の利便性を誇ります。夕食には阿波牛のしゃぶしゃぶや阿波ポーク、祖谷の豆腐料理など、徳島の豊かな山海の滋味を余すところなく味わえます。',
      roomTip: '大歩危峡を見下ろすリバービュー客室。窓の外に広がるエメラルドグリーンの清流と奇岩怪石のコントラストをゆったりと楽しめます。',
      gourmetTip: '「大歩危名物・阿波の美味味巡り会席」。芳醇な旨味の阿波牛しゃぶしゃぶ、香ばしい鮎の塩焼き、吉野川の清流が育んだ旬の山の幸。'
    },
    {
      story: '国指定重要有形民俗文化財「祖谷のかずら橋」から車で約5分、山懐に抱かれた素朴な集落に佇む風情豊かな名旅館「新祖谷温泉 ホテルかずら橋」。宿の目玉は、本館から専用のスロープカー（ケーブルカー）に乗って登る高台の「天空露天風呂」です。男女別の展望露天風呂や足湯、茅葺き屋根の休憩処「雲上亭」が設けられ、初冬の澄み切った空の下、眼下に広がる祖谷の山里の原風景と初雪の山並みを一望できます。夕食は本物の囲炉裏を囲んで炭火で食材を焼き上げる昔ながらのスタイルで、心温まる郷土情緒を満喫できます。',
      roomTip: '露天風呂付き客室または民芸調の和室。山里のどこか懐かしい静けさと木の温もりに包まれ、日々の喧騒を忘れさせてくれる至福の空間。',
      gourmetTip: '「昔ながらの囲炉裏炭火焼き会席」。炭火でじっくり焼き上げるアメゴの串焼き、名物でこまわし、熱々の祖谷そば、特選阿波牛のすき焼き。'
    },
    {
      story: '大歩危・祖谷渓の自然に調和した広大な敷地を持ち、豊富な湯量と充実した近代的なスパ設備を備えた総合リゾートホテル「祖谷渓温泉 ホテル秘境の湯」。徳島伝統の阿波藍をテーマにした大浴場には、露天風呂、気泡風呂、薬草風呂、サウナなど多彩な湯船が揃い、秘境の散策で疲れた身体を隅々までリフレッシュできます。館内はバリアフリーにも配慮された開放的な造りで、家族旅行や三世代旅行にも安心。手頃な料金設定でありながら、阿波牛や祖谷の郷土料理を彩り豊かに盛り込んだ会席料理が楽しめます。',
      roomTip: '広々とした和室または和洋室。窓からは祖谷の豊かな山々の初冬のグラデーションを望み、落ち着いた空間で足を伸ばして寛げます。',
      gourmetTip: '「秘境の味覚膳」。阿波牛の陶板焼き、祖谷名物岩豆腐とこんにゃくの刺身、地元野菜の天ぷらなど、徳島の滋味をバランス良く味わえる御膳。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥20,900〜' : i === 1 ? '¥17,955〜' : i === 2 ? '¥9,500〜' : i === 3 ? '¥19,250〜' : '¥6,600〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.64' : i === 1 ? '4.83' : i === 2 ? '4.59' : i === 3 ? '4.69' : '4.11');
    const reviewCount = h.reviewCount || (i === 0 ? 430 : i === 1 ? 310 : i === 2 ? 620 : i === 3 ? 510 : 280);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName)},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'JR土讃線 大歩危駅より車・バスで約15〜30分（宿の無料送迎あり）。徳島自動車道 井川池田ICより車で約35〜50分')},
              special: ${JSON.stringify(h.hotelSpecial || '日本三大秘境断崖露天＆専用ケーブルカー谷底湯・特選阿波牛と名物祖谷そば')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '専用ケーブルカーで高低差170mの谷底へ降りる自噴掛け流し露天風呂＆気泡包まれる極上ぬる湯' : i === 1 ? '全9室すべてに源泉露天風呂完備の隠れ宿（楽天評価4.83）＆手打ち十割祖谷そばと囲炉裏会席' : i === 2 ? '大歩危峡の絶壁に建つ抜群の渓谷パノラマ＆エメラルドグリーンの激流と阿波牛しゃぶしゃぶ' : i === 3 ? 'スロープカーで登る天空露天風呂と茅葺き雲上亭＆本物の囲炉裏を囲む炭火焼き会席' : '多彩な湯船とサウナを備えた阿波藍大浴場＆バリアフリー対応の快適な秘境リゾート')},
                ${JSON.stringify(i === 0 ? '断崖絶壁にせり出す唯一無二の絶景ロケーション＆特選阿波牛ステーキと祖谷の炭火料理' : i === 1 ? '個室囲炉裏で楽しむ名物でこまわし・清流アメゴ塩焼き・とろける阿波牛陶板焼き' : i === 2 ? 'JR大歩危駅や遊覧船乗り場至近の好アクセス＆川沿い露天風呂から望む冬の峡谷美' : i === 3 ? '祖谷のかずら橋至近の好立地＆祖谷の山里の原風景と初雪景色を見下ろす露天風呂' : '手頃な料金で満喫する阿波牛と祖谷郷土会席＆広々とした快適客室でのんびり滞在')},
                ${JSON.stringify(i === 0 ? '世界的な旅行誌でも絶賛される日本屈指の名秘湯＆初冬の澄み切った渓谷の静寂' : i === 1 ? '大切な記念日や夫婦・カップル旅に選ばれ続ける洗練された和モダン離れステイ' : i === 2 ? '土讃線の列車が走る絶景を望む客室＆家族連れやグループ旅行にも最適な安心感' : i === 3 ? '囲炉裏のパチパチとはぜる炭の音と昔話のような温かいおもてなしに心癒やされる旅' : '吉野川上流の自然散策や秘境ドライブの拠点として最適なロケーションとおもてなし')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "祖谷温泉・大歩危の11月・12月の気候や気温、積雪状況はどうですか？",
      a: "四国の中央山岳地帯に位置する徳島県三好市の祖谷地方は、標高が約300〜700mと高く、四国でありながら冬の寒さは内陸高地特有の厳しさを見せます。11月上旬から中旬は最高気温が12〜16℃、最低気温は4〜8℃前後で、晩秋の紅葉が渓谷を彩ります。11月下旬になると朝晩の気温が一気に0〜3℃前後まで冷え込みます。12月に入ると最高気温は6〜9℃、朝晩は氷点下（-1〜-3℃）まで下がり、山頂や渓谷沿いに初雪が舞います。日陰や橋の上では路面凍結が発生します。防寒には厚手のダウンジャケット、フリース、マフラー、手袋、歩きやすい防滑シューズを必ずご準備ください。"
    },
    {
      q: "祖谷温泉の泉質の特徴と「谷底露天風呂」の体験とは？",
      a: "祖谷温泉の泉質は「アルカリ性単純硫黄温泉（低張性アルカリ性温泉）」。pH値が9.1と高く、ほのかに心地よい硫黄の香りが漂います。最大の特徴は、湯口から絶え間なく注がれる生まれたての生源泉に浸かると、身体中に細かな炭酸や硫黄の気泡がびっしりと付着することです。源泉温度が約38〜39度のぬる湯のため、心臓に負担をかけずに30分から1時間以上もじっくりと長湯が楽しめます。入浴後は肌がつるつるになり、血管が拡張して体の芯からぽかぽかと温まります。「和の宿 ホテル祖谷温泉」では、断崖絶壁から専用のケーブルカーで高低差170m（傾斜42度）の谷底へ約5分かけて下りていくスリリングなアプローチも、日本屈指の温泉体験として知られます。"
    },
    {
      q: "高知空港や高松、岡山方面からのアクセス方法と冬道運転の注意点は？",
      a: "電車を利用する場合、岡山駅からJR特急「南風」でJR土讃線「大歩危（おおぼけ）駅」まで約1時間45分、高知駅からは特急で約50分です。大歩危駅からは各旅館の送迎バス（事前予約制・車で約15〜30分）または路線バスが利用できます。車の場合は、高松自動車道や高知自動車道から徳島自動車道「井川池田IC」で降り、国道32号線を経由して約35〜50分です。国道32号は大歩危峡沿いの幹線道路で除雪体制が整っていますが、祖谷渓方面へ入る県道（かずら橋や祖谷温泉へ向かう道）は道幅が狭く、12月に入ると路面凍結や積雪が発生するため、スタッドレスタイヤの装着が必須となります。"
    },
    {
      q: "祖谷地方の冬の郷土料理「でこまわし」や「祖谷そば」とは？",
      a: "祖谷の厳しい山岳気候が育んだ郷土料理は、素朴で力強い味わいが魅力です。「でこまわし」とは、地元特産の小粒のじゃがいも（ごうしゅいも）、堅い岩豆腐、こんにゃくなどを竹串に刺し、柚子味噌をたっぷりと塗って囲炉裏の炭火でくるくると回しながら香ばしく焼き上げる伝統料理で、人形浄瑠璃の「阿波人形の頭（でこ）」に形が似ていることから名付けられました。また、「祖谷そば」は寒暖差の大きい山間地で育ったソバの実を石臼で挽き、小麦粉などのつなぎを一切使わない（または極少量）で作る十割そばで、太めで短く、噛むほどに蕎麦本来の豊かな香りと素朴な甘みが広がります。これらに徳島の最高峰黒毛和牛「阿波牛」の陶板焼きが組み合わさる会席は絶品です。"
    },
    {
      q: "冬の「祖谷のかずら橋」や大歩危峡観光の見どころは？",
      a: "国指定重要有形民俗文化財「祖谷のかずら橋」は、平家の落人が追っ手を逃れるためにシラクチカズラで編んで架けたと伝わる原始的な吊り橋です。冬の澄み切った冷気の中で、足元の隙間からエメラルドグリーンの祖谷川を見下ろしながら渡るスリルは圧巻です。また、吉野川の激流を間近に見る「大歩危峡遊覧船」は、冬場は船内に暖房器具が備えられた「こたつ舟」として運航される日があり、巨岩怪石と初雪の渓谷美を温もりながら優雅に眺めることができます。"
    }
  ];

  const pageContent = `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '祖谷温泉 宿泊, 大歩危 温泉 11月 12月, ホテル祖谷温泉, 祖谷美人, 大歩危峡まんなか, ホテルかずら橋, ホテル秘境の湯, 祖谷そば, 阿波牛 すき焼き 宿, 日本三大秘境 露天風呂',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}'
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の祖谷渓谷と雪景色の秘境温泉'
      }
    ]
  }
};

const faqList = ${JSON.stringify(faqList, null, 2)};

export default function IyaOnsenWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/${slug}#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/${slug}"
        },
        "headline": ${JSON.stringify(title)},
        "description": ${JSON.stringify(description)},
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T06:00:00+09:00",
        "dateModified": "2026-09-28T06:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "Croud Travel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "author": {
          "@type": "Organization",
          "name": "Croud Travel 四国秘境・名湯紀行取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.com/${slug}#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "特集一覧",
            "item": "https://croud-travel.com/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "徳島・祖谷温泉 日本三大秘境の谷底露天風呂と阿波牛の宿",
            "item": "https://croud-travel.com/${slug}"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/${slug}#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "祖谷温泉・大歩危の11月・12月の気候や気温、積雪状況はどうですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "四国の中央山岳地帯に位置する徳島県三好市の祖谷地方は、標高が約300〜700mと高く、四国でありながら冬の寒さは内陸高地特有の厳しさを見せます。11月上旬から中旬は最高気温が12〜16℃、最低気温は4〜8℃前後で、晩秋の紅葉が渓谷を彩ります。11月下旬になると朝晩の気温が一気に0〜3℃前後まで冷え込みます。12月に入ると最高気温は6〜9℃、朝晩は氷点下（-1〜-3℃）まで下がり、山頂や渓谷沿いに初雪が舞います。日陰や橋の上では路面凍結が発生します。防寒には厚手のダウンジャケット、フリース、マフラー、手袋、歩きやすい防滑シューズを必ずご準備ください。"
            }
          },
          {
            "@type": "Question",
            "name": "祖谷温泉の泉質の特徴と「谷底露天風呂」の体験とは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "祖谷温泉の泉質は「アルカリ性単純硫黄温泉（低張性アルカリ性温泉）」。pH値が9.1と高く、ほのかに心地よい硫黄の香りが漂います。最大の特徴は、湯口から絶え間なく注がれる生まれたての生源泉に浸かると、身体中に細かな炭酸や硫黄の気泡がびっしりと付着することです。源泉温度が約38〜39度のぬる湯のため、心臓に負担をかけずに30分から1時間以上もじっくりと長湯が楽しめます。入浴後は肌がつるつるになり、血管が拡張して体の芯からぽかぽかと温まります。「和の宿 ホテル祖谷温泉」では、断崖絶壁から専用のケーブルカーで高低差170m（傾斜42度）の谷底へ約5分かけて下りていくスリリングなアプローチも、日本屈指の温泉体験として知られます。"
            }
          },
          {
            "@type": "Question",
            "name": "高知空港や高松、岡山方面からのアクセス方法と冬道運転の注意点は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "電車を利用する場合、岡山駅からJR特急「南風」でJR土讃線「大歩危（おおぼけ）駅」まで約1時間45分、高知駅からは特急で約50分です。大歩危駅からは各旅館の送迎バス（事前予約制・車で約15〜30分）または路線バスが利用できます。車の場合は、高松自動車道や高知自動車道から徳島自動車道「井川池田IC」で降り、国道32号線を経由して約35〜50分です。国道32号は大歩危峡沿いの幹線道路で除雪体制が整っていますが、祖谷渓方面へ入る県道（かずら橋や祖谷温泉へ向かう道）は道幅が狭く、12月に入ると路面凍結や積雪が発生するため、スタッドレスタイヤの装着が必須となります。"
            }
          },
          {
            "@type": "Question",
            "name": "祖谷地方の冬の郷土料理「でこまわし」や「祖谷そば」とは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "祖谷の厳しい山岳気候が育んだ郷土料理は、素朴で力強い味わいが魅力です。「でこまわし」とは、地元特産の小粒のじゃがいも（ごうしゅいも）、堅い岩豆腐、こんにゃくなどを竹串に刺し、柚子味噌をたっぷりと塗って囲炉裏の炭火でくるくると回しながら香ばしく焼き上げる伝統料理で、人形浄瑠璃の「阿波人形の頭（でこ）」に形が似ていることから名付けられました。また、「祖谷そば」は寒暖差の大きい山間地で育ったソバの実を石臼で挽き、小麦粉などのつなぎを一切使わない（または極少量）で作る十割そばで、太めで短く、噛むほどに蕎麦本来の豊かな香りと素朴な甘みが広がります。これらに徳島の最高峰黒毛和牛「阿波牛」の陶板焼きが組み合わさる会席は絶品です。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の「祖谷のかずら橋」や大歩危峡観光の見どころは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "国指定重要有形民俗文化財「祖谷のかずら橋」は、平家の落人が追っ手を逃れるためにシラクチカズラで編んで架けたと伝わる原始的な吊り橋です。冬の澄み切った冷気の中で、足元の隙間からエメラルドグリーンの祖谷川を見下ろしながら渡るスリルは圧巻です。また、吉野川の激流を間近に見る「大歩危峡遊覧船」は、冬場は船内に暖房器具が備えられた「こたつ舟」として運航される日があり、巨岩怪石と初雪の渓谷美を温もりながら優雅に眺めることができます。"
            }
          }
        ]
      }
    ]
  };

  const hotels = [
${hotelCardsCode}
  ];

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <header className="relative w-full h-[360px] sm:h-[480px] flex items-end justify-center bg-slate-900 text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
          alt="冬の祖谷渓谷と大自然の秘境温泉"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-semibold">
            <Snowflake className="w-4 h-4" />
            11月・12月 冬の極上名湯特集｜徳島・祖谷温泉＆大歩危峡
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月徳島・祖谷温泉】<br className="hidden sm:inline" />
            日本三大秘境初雪渓谷と谷底露天風呂・特選阿波牛＆名物祖谷そばの宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            四国山岳の奥深き日本三大秘境。専用ケーブルカーで高低差170mの谷底へ降りる自噴ぬる湯露天に抱かれ、囲炉裏で香るでこまわしと特選阿波牛に酔いしれる幽玄の冬旅。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* Section 1: Seasonal Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Mountain className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Japan's Top 3 Deep Secret Valleys</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初雪に白く染まる断崖絶壁のV字谷｜日本三大秘境「祖谷渓」の幽玄
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              四国の中央部にそびえる霊峰・剣山山系の懐深くに位置する徳島県三好市・祖谷渓（いやけい）。白川郷、椎葉村と並び「日本三大秘境」の一つに数えられるこの地は、吉野川の支流・祖谷川が何千万年もの歳月をかけて石灰岩の山肌を削り出した、深さ数百メートルに達する切り立ったV字谷が約20kmにわたって続きます。
            </p>
            <p>
              11月から12月にかけての祖谷渓は、晩秋の燃えるような紅葉が谷底を染め上げた後、木々の葉が落ちて渓谷の荒々しい岩肌とエメラルドグリーンの清流が一層際立ちます。11月下旬を過ぎると四国山脈の尾根から初雪が舞い降り、山肌や茅葺き屋根の古民家にうっすらと雪が積もる、水墨画の世界のような幽玄の静寂が広がります。
            </p>
            <p>
              この秘境に湧く温泉は、断崖絶壁から専用のケーブルカーで高低差170mを下った谷底に湧き出る自家源泉をはじめ、天空露天風呂など、自然のスケールを全身で体感できるものばかり。囲炉裏を囲んで炭火で香ばしく焼く郷土の味「でこまわし」や、太く素朴な「祖谷そば」、徳島が誇る最高峰黒毛和牛「阿波牛」の美味を味わう時間は、現代人が忘れかけた本物の安らぎを与えてくれます。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Mountain className="w-5 h-5 text-teal-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">日本三大秘境の初雪</div>
              <div className="text-xs text-slate-600">断崖絶壁のV字渓谷に舞う初雪。大自然の圧倒的スケールと深い静寂。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Waves className="w-5 h-5 text-teal-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">ケーブルカー谷底露天</div>
              <div className="text-xs text-slate-600">高低差170mを降りて浸かる清流沿いの自噴掛け流し硫黄ぬる湯。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Utensils className="w-5 h-5 text-teal-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">特選阿波牛＆囲炉裏料理</div>
              <div className="text-xs text-slate-600">とろける阿波牛ステーキと名物でこまわし・清流アメゴ炭火焼き。</div>
            </div>
          </div>
        </section>

        {/* Section 2: Onsen Qualities */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Natural Sulfur Effervescent Spring</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                全身を包む微細な気泡｜アルカリ性単純硫黄泉のぬる湯マジック
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              祖谷温泉の泉質は、「アルカリ性単純硫黄温泉（低張性アルカリ性温泉）」。源泉温度は約38〜39℃、pH値は9.1という高いアルカリ性を誇ります。
            </p>
            <p>
              湯口から注がれる生まれたての生源泉に浸かると、身体中に無数の細かな気泡が付着し、シルクのような滑らかな膜で全身が包まれます。38度前後の「ぬる湯」は副交感神経を優位にし、体温とほぼ同等のため心臓や血管への負担が極めて少なく、30分〜1時間じっくりと長湯が楽しめます。
            </p>
            <p>
              アルカリ性の作用で古い角質が洗い流されて肌がつるつるになるだけでなく、硫黄成分が末梢血管を拡張して血行を促進。ぬる湯でありながら湯上がり後は体の芯からポカポカとした温熱感が長時間持続し、冷え性や神経痛、疲労回復に絶大な効果を発揮します。
            </p>
          </div>
        </section>

        {/* Section 3: Winter Gourmet */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Iya Satoyama Winter Feast</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                秘境の冬を彩る滋味｜特選阿波牛・手打ち祖谷そば・囲炉裏でこまわし
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              山深き祖谷の冬の食卓は、昔ながらの知恵と豊かな大地の恵みに満ち溢れています。その筆頭が、徳島の大自然で育まれた黒毛和牛の最高峰「阿波牛」です。きめ細やかなサシが美しく入り、陶板焼きや炭火焼きで熱を通すと甘美な肉汁が溢れ出し、口の中でふわりととろけます。
            </p>
            <p>
              そして祖谷の伝統の味「でこまわし」。ごうしゅいも（里芋に似た小芋）、堅い岩豆腐、自家製こんにゃくを竹串に刺し、甘辛い特製柚子味噌を塗って囲炉裏の炭火で香ばしく焼き上げます。熱々の味噌の香りと素朴な素材の甘みが、冷えた身体に染み渡ります。
            </p>
            <p>
              さらに、つなぎを使わずに打つ十割の「祖谷そば」は、太めで素朴な食感と力強い蕎麦の香りが特徴。吉野川の清流で育った川魚アメゴの塩焼きとともにいただく里山の会席は、都会では決して味わえない唯一無二のご馳走です。
            </p>
          </div>
        </section>

        {/* Section 3.5: Model Course & Sightseeing */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Secret Valley Scenic Route & Thrill</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の祖谷・大歩危散策モデルコース｜かずら橋のスリルと大歩危こたつ舟
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              日本三大秘境・祖谷のダイナミックな景観を満喫するなら、スリル満点の吊り橋と峡谷クルーズを巡るモデルコースがおすすめです。まずは平家落人の伝説が残る「祖谷のかずら橋」へ。シラクチカズラで編まれた原始的な橋に一歩足を踏み出すと、足元の隙間から数十メートル下の祖谷川の清流が透けて見え、初冬の澄んだ風に揺れるスリルは忘れられない思い出になります。
            </p>
            <p>
              続いて、祖谷渓の街道沿いに立つ「小便小僧」の像へ。断崖絶壁の突端、高低差約200mの岩場の上にちょこんと立つその姿は、秘境・祖谷を象徴するフォトスポット。眼下に広がるV字谷の雄大さに圧倒されます。
            </p>
            <p>
              その後は吉野川沿いの「大歩危峡遊覧船」へ。冬の間は暖房が効いた「こたつ舟」が運航され、国指定天然記念物の巨岩奇岩が連なる峡谷美をぬくぬくと温まりながら見上げることができます。秘境探訪の後は、谷底露天風呂の待つ宿へ向かい、囲炉裏会席で温まる至福の冬旅をお楽しみください。
            </p>
          </div>
        </section>

        {/* Section 4: 5 Selected Inns */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Featured Secret Valley & Gorge Ryokan</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              秘境の断崖露天と温もりのもてなし｜祖谷・大歩危温泉の厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              すべて楽天トラベルで高評価を獲得し、谷底露天風呂や阿波牛会席に強い情熱を注ぐ本物の秘湯宿。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-5/12 relative h-64 md:h-auto min-h-[260px] bg-slate-100 flex-shrink-0">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                    <span className="text-teal-400 font-extrabold">#{h.id}</span>
                    <span>秘境の名宿</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    目安料金: {h.price}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {h.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-amber-50 text-amber-900 px-2.5 py-1 rounded-full text-xs font-semibold border border-amber-200/60">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{h.rating}</span>
                        <span className="text-slate-500 font-normal">({h.reviews}件)</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-2xl bg-teal-50/60 border border-teal-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-teal-900 flex items-center gap-1.5">
                          <Landmark className="w-3.5 h-3.5 text-teal-700" />
                          客室・滞在のこだわり
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {h.roomTip}
                        </p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-amber-900 flex items-center gap-1.5">
                          <Utensils className="w-3.5 h-3.5 text-amber-700" />
                          旬の極上グルメ
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {h.gourmetTip}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                        この宿のおすすめポイント
                      </div>
                      <ul className="space-y-1.5">
                        {h.highlights.map((item, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-[11px] text-slate-500">
                      <span>交通: {h.access}</span>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-sm hover:shadow transition group flex-shrink-0"
                    >
                      <span>楽天トラベルでプランを見る</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Travel Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Travel Planning & Climate</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の祖谷冬旅の気温・服装と快適アクセスのポイント
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-teal-800" />
                標高差による急激な冷え込みと服装
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                四国の山岳地帯に位置するため、平地よりも気温が5〜8℃低くなります。11月下旬以降は朝晩の気温が氷点下近くまで下がることがあります。風を通さないダウンコート、フリース、マフラー、手袋に加え、かずら橋周辺や谷底露天風呂への移動に備えて滑りにくいウォーキングシューズをご着用ください。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-teal-800" />
                特急南風と大歩危駅からの無料送迎
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                JR土讃線・大歩危駅には岡山発・高知発の特急「南風」が停車し、駅から各旅館へは事前予約制の無料送迎バスが運行されています。雪道運転に不慣れな方は鉄道旅が安心です。自家用車やレンタカーで訪れる場合は、12月に入ると山間部の道路（県道32号・45号など）で路面凍結が発生するため、必ずスタッドレスタイヤを装着してください。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                徳島祖谷温泉冬旅のよくある質問（FAQ）
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-teal-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Internal Links */}
        <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Related Winter Features & Hot Springs</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい四国・関西の冬名湯＆極上和牛・絶景特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の初雪や雪景色、四国の伝統温泉文化、特選和牛やすき焼きをめぐる人気の厳選特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-ehime-dogo-onsen-taimeshi-heritage-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">愛媛・道後温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">日本最古の名湯と道後温泉本館・名物宇和島鯛めしを味わう名宿</h3>
            </Link>
            <Link 
              href="/winter-kagawa-kotohira-onsen-konpira-olive-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">香川・琴平温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">こんぴらさん初冬参りとおもてなし名湯・特選オリーブ牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-kagawa-shodoshima-onsen-kankakei-olive-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">香川・小豆島温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">寒霞渓の初冬絶景パノラマと瀬戸内海夕陽・オリーブ牛陶板焼きの宿</h3>
            </Link>
            <Link 
              href="/winter-wakayama-nanki-shirahama-kue-hotspring-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">和歌山・南紀白浜温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">冬の高級魚クエ鍋フルコースと崎の湯太平洋絶景・万葉名湯の宿</h3>
            </Link>
            <Link 
              href="/winter-kyoto-yunohana-onsen-unkai-botan-nabe-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">京都・湯の花温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">亀岡盆地幻想雲海と名物丹波ぼたん鍋・京都奥座敷の隠れ宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">全国の厳選温泉・旬旅特集まとめを見る</h3>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
`;

  const targetDir = path.join(__dirname, '..', '..', 'src', 'app', slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  fs.writeFileSync(path.join(targetDir, 'page.tsx'), pageContent, 'utf8');
  console.log(`Generated: src/app/${slug}/page.tsx`);
}

module.exports = { generateIyaPage };
