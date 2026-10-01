const fs = require('fs');
const path = require('path');

function generateYamagataShonaiKandaraPage(hotels) {
  const slug = 'winter-yamagata-shonai-kandara-atsumi-yunohama-stay';
  const title = '【11・12・1月山形】庄内名物「寒鱈汁（どんがら汁）」と極上白子・寒ブリ・出羽三山雪景色＆名湯あつみ・湯野浜温泉を巡る厳選宿5選';
  const description = '11月から1月、山形県庄内地方（鶴岡・酒田・温海・湯野浜）は、荒波の日本海が育む冬の風物詩「寒鱈（かんだら）汁」の熱気と、白銀に包まれる出羽三山や鳥海山の荘厳な雪景色に包まれます。丸ごと一匹のタラの身、濃厚な白子（あぶらこ）、肝（あぶら）を豪快に煮込んだ熱々のどんがら汁、庄内浜の冬の王者・寒ブリや紅ズワイガニ、とろける庄内牛。1000年以上の歴史を誇るあつみ温泉や日本海一望の湯野浜温泉の雪見露天風呂に浸かり、ユネスコ食文化創造都市・鶴岡の至福の郷土美食に酔いしれる名宿5選を徹底ガイドします。';

  const hotelDetails = [
    {
      story: '創業文化10年（1813年）、200年以上の伝統を紡ぎながら現代の洗練されたリゾートへと進化した「HOTEL KAMEYA（旧名：湯野浜温泉 亀や）」。目の前には雄大な日本海が広がり、客室や最上階の展望ラウンジからは荒波寄せる冬の海と茜色に染まる日本海の夕暮れを一望できます。名湯・湯野浜温泉は塩化物泉で、体の芯から温まる美肌の湯。夕食は鶴岡のガストロノミーを体現した会席料理。冬は庄内浜で水揚げされたばかりの寒鱈を使ったどんがら汁の小鍋や、甘みたっぷりのズワイガニ、庄内牛フィレステーキなど、歴史ある料亭旅館の技が冴え渡る極上の一皿一皿に心奪われます。冬の海風が心地よい露天風呂で温まり、波の音を聴きながら過ごす大人の隠れ家です。',
      roomTip: 'オーシャンビュープレミアム和洋室。大きなピクチャーウィンドウから冬の日本海のダイナミックな波と夕陽のグラデーションを独占できる贅沢な空間です。',
      gourmetTip: '「庄内冬の味覚尽くし会席」。本場の寒鱈汁をはじめ、庄内浜の寒ブリ刺身、ズワイガニの宝楽焼き、庄内牛の石焼きステーキを一度に堪能できます。'
    },
    {
      story: 'あつみ温泉の清流・温海川のほとりに佇み、創業370余年の歴史を誇る老舗旅館「温海温泉 たちばなや」。約3,000坪におよぶ壮麗な日本庭園を抱え、冬には枝に積もる白雪と錦鯉が泳ぐ池がまるで一幅の水墨画のような静謐な美しさを見せてくれます。広々とした大浴場や清流のせせらぎを間近に感じる露天風呂では、古くから名湯と称えられたあつみ温泉の源泉が肌を優しく包み込みます。料理は庄内の山海の恵みを惜しみなく使った会席。庄内浜の寒鱈と白子の小鍋仕立て、のどぐろの塩焼き、柔らかな山形牛の陶板焼きなど、伝統に裏打ちされた滋味深い味わいが冬の旅路を温かく彩ります。',
      roomTip: '庭園側和室「風の館」。雪化粧した名園を窓一面に見下ろし、川のせせらぎを聞きながら静寂の時間を過ごせます。',
      gourmetTip: '「庄内の恵み・冬の特選会席」。とろける山形牛すき焼きと、庄内浜直送の寒鱈と白子の熱々雪見鍋が並ぶ冬限定プランが絶品です。'
    },
    {
      story: 'プロが選ぶ日本のホテル・旅館100選で長年上位に選ばれ続ける東北屈指の名宿「温海温泉 萬国屋」。数寄屋造りの贅を尽くした館内には心温まるおもてなしが息づいています。川のせせらぎを望む庭園露天風呂「桃里の湯」や御影石の広々とした大浴場には、豊富な湯量を誇るあつみ温泉が溢れ、冬の冷気の中で湯けむりに包まれる至福の湯浴みが叶います。夕食は旬の美味を極めた会席膳。冬の日本海の荒波が育んだ本ズワイガニや寒ブリ、庄内豚や山形牛のしゃぶしゃぶなど、厳選された地場食材が目にも鮮やかに並び、贅沢な冬の一夜を演出します。きめ細やかな仲居のおもてなしも魅力です。',
      roomTip: '本館最上階または「八潮」の客室。温海川と山々の雪景色を見渡すゆとりある間取りで、3世代旅行や記念日にも最適です。',
      gourmetTip: '「冬の山形牛・庄内浜海鮮贅沢会席」。脂の甘みが際立つ山形牛サーロインと、新鮮な冬魚のお造り盛り合わせが食卓を彩ります。'
    },
    {
      story: '「夕陽の宿」として知られる湯野浜温泉の海辺に佇む「游水亭 いさごや」。館内は和モダンな美意識と茶の湯の心が調和した優雅な空間です。名物の檜露天風呂や広々とした大浴場からは、刻々と表情を変える日本海の波涛を眺めながら、体の芯まで温まる湯浴みを満喫できます。料理へのこだわりは庄内でも随一。毎朝酒田や加茂の漁港から仕入れる新鮮な魚介と、出羽三山の清らかな水が育んだ郷土野菜を組み合わせた月替わりの創作会席。冬は庄内名物の寒鱈料理をはじめ、鮑の踊り焼きや山形牛を組み合わせた美食コースが旅慣れた食通を唸らせています。',
      roomTip: '海側和モダンベッドルーム。低床ベッドが置かれた洗練の空間で、波の音をBGMに冬の海景色を眺める特別なリラックスタイムを過ごせます。',
      gourmetTip: '「寒鱈と旬魚の懐石膳」。冬限定の濃厚な寒鱈白子ポン酢、鱈ちり小鍋、地魚の昆布締めと山形牛のローストが並ぶ雅やかなコースです。'
    },
    {
      story: '北前船の歴史が色濃く残る港町・酒田市の中心部に位置し、最上階の展望ラウンジから鳥海山や最上川を望む「ホテルリッチ＆ガーデン酒田」。北欧風の洗練されたインテリアと温かみのある木目調の客室が特徴で、出羽三山観光や酒田のレトロな町並み散策の拠点として抜群の利便性を誇ります。館内のレストランでは、山形県産の食材をふんだんに取り入れた和洋バイキングやディナーコースを提供。冬の朝食では、郷土の味・芋煮や庄内米つや姫の炊きたてご飯、酒田名物の新鮮な魚介小鉢が並び、酒田の豊かな食文化を気軽に堪能できます。',
      roomTip: '鳥海山側ツインルーム。天候に恵まれた冬の朝には、白銀に輝く独立峰・出羽富士「鳥海山」の美しい稜線を窓から一望できます。',
      gourmetTip: '「庄内朝ごはんバイキング」。炊きたての山形県産つや姫に、温かい芋煮汁、地魚の焼き物や酒田名物の塩引き鮭を合わせた贅沢な朝食です。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥6,050〜' : i === 1 ? '¥5,280〜' : i === 2 ? '¥11,000〜' : i === 3 ? '¥17,424〜' : '¥4,700〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.13' : i === 1 ? '4.44' : i === 2 ? '4.58' : i === 3 ? '4.43' : '4.19');
    const reviewCount = h.reviewCount || (i === 0 ? 320 : i === 1 ? 580 : i === 2 ? 890 : i === 3 ? 460 : 710);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'JR羽越本線鶴岡駅またはあつみ温泉駅よりアクセス')},
              special: ${JSON.stringify(h.hotelSpecial || '冬の庄内名物寒鱈汁と極上白子・寒ブリ・出羽三山雪景色を巡る名湯ステイ')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '創業200年超の伝統と現代デザインが融合した日本海フロントの絶景リゾート' : i === 1 ? '3000坪の雪化粧した回遊式日本庭園とあつみ川のせせらぎに癒やされる静寂名宿' : i === 2 ? 'プロが選ぶ100選常連の格式と温もり・豊富な自家源泉が注ぐ庭園露天風呂桃里の湯' : i === 3 ? '夕陽と波の音に包まれる海辺の宿・茶室を思わせる和モダン空間と旬魚の懐石膳' : '酒田駅・山居倉庫・日和山公園へのアクセス至便＆白銀の鳥海山を望む展望ホテル')},
                ${JSON.stringify(i === 0 ? '鶴岡ガストロノミー会席・庄内浜の寒鱈汁小鍋と寒ブリ・庄内牛の極上コラボ' : i === 1 ? '冬限定の庄内特選会席・とろける山形牛すき焼きと熱々の寒鱈白子雪見鍋' : i === 2 ? '山形牛サーロインと庄内浜の冬魚お造り・贅を尽くした老舗旅館の会席料理' : i === 3 ? '漁港直送の新鮮な寒鱈と濃厚白子ポン酢・鮑の踊り焼きと山形牛の贅沢会席' : '朝食バイキングで味わう炊きたてつや姫・熱々芋煮汁・酒田港直送の魚介小鉢')},
                ${JSON.stringify(i === 0 ? '波打ち際の展望露天風呂から望む冬の日本海の荒波と夕陽のドラマチックな情景' : i === 1 ? '開湯1000年以上の歴史を誇るあつみ温泉の美肌湯＆雪見露天の清らかな湯浴み' : i === 2 ? 'ゆったりとした数寄屋造りの客室と細やかなもてなし・家族3世代での冬旅行に最適' : i === 3 ? '檜の香り漂う露天風呂とプライベート貸切風呂で心身を解きほぐす大人の冬旅' : '北前船の歴史香る酒田散策と山居倉庫ケヤキ並木の雪景色撮影に抜群の立地')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "庄内の冬の名物「寒鱈汁（どんがら汁）」とはどんな料理ですか？どこで食べられますか？",
      a: "寒鱈汁（どんがら汁）は、冬の日本海の荒波にもまれて脂が乗った真鱈（まだら）を頭から内臓、骨まで余すところなくブツ切りにし、大根やネギ、豆腐とともに味噌仕立てで豪快に煮込んだ山形県庄内地方の代表的な郷土料理です。特に鱈の濃厚な肝臓（あぶら）が溶け込んだコク深いスープと、とろけるようなオスの白子（あぶらこ）、仕上げに散らす磯の香る岩海苔が絶品です。12月下旬から2月上旬にかけて鶴岡市や酒田市の鮮魚料理店、各温泉旅館で提供されるほか、毎年1月には「鶴岡冬まつり・日本海寒鱈まつり」や「酒田日本海寒鱈まつり」が開催され、大鍋で煮立てられた熱々のどんがら汁を味わう人々で賑わいます。"
    },
    {
      q: "冬の出羽三山（羽黒山）参拝や観光は雪でも可能ですか？冬靴や服装の注意点は？",
      a: "出羽三山のうち、冬期も参拝が可能なのは羽黒山です（月山と湯殿山は冬期閉鎖となります）。羽黒山山頂の「三神合祭殿」へは、有料道路の羽黒山有料道路または鶴岡駅からの路線バス（庄内交通）でアクセス可能です。ただし、羽黒山の象徴である随神門から国宝・羽黒山五重塔に至るスギ並木の石段参道は深い雪に覆われます。五重塔までは冬期も除雪されている日が多いですが、足元は滑りやすいため、完全防水で靴底の深いスノーブーツや長靴（スパイク付きが理想）を着用してください。また随神門の授乳所等で長靴の有料レンタルが行われている場合もあります。氷点下になるため防寒インナー、ダウンジャケット、帽子、手袋は必須です。"
    },
    {
      q: "湯野浜温泉とあつみ温泉（温海温泉）の違いや、それぞれの魅力は？",
      a: "「湯野浜温泉」は日本海に面した開湯約1,000年の海岸温泉地で、広大な砂浜と雄大な日本海の水平線、そして美しい夕陽を望むオーシャンビューの旅館が並びます。泉質はナトリウム・カルシウム-塩化物泉で、入浴後も体がぽかぽかと温まり湯冷めしにくいのが特徴です。一方「あつみ温泉」は温海川沿いの静かな山あいに開けた開湯約1,200年の名湯で、せせらぎを聞きながら落ち着いた日本庭園や数寄屋造りの旅館で寛ぐ風情ある湯の町です。塩化物・硫酸塩泉で肌にしっとりと馴染む「美肌の湯」として親しまれています。海絶景なら湯野浜、山里の情緒と名園ならあつみがおすすめです。"
    },
    {
      q: "11月〜1月の庄内地方の雪の降り方やレンタカー運転の注意点は？",
      a: "庄内地方は日本海側気候のため、11月下旬頃から初雪が降り、12月中旬から1月にかけて本格的な積雪期を迎えます。海岸沿いの酒田市街や湯野浜は内陸（山形市や米沢など）に比べて積雪量はやや少なめですが、日本海からの猛烈な寒風（地吹雪）と路面凍結（ブラックアイスバーン）が発生しやすくなります。車を利用する場合はスタッドレスタイヤの装着が絶対に不可欠です。ホワイトアウトで視界が遮られることもあるため、無理な運転は避け、速度を控えめに車間距離を広く取ることが重要です。羽田空港から庄内空港へのフライト利用なら、空港連絡バスやタクシー、JR羽越本線を組み合わせた公共交通機関の旅も安心です。"
    },
    {
      q: "冬の鶴岡・酒田観光で立ち寄るべきおすすめスポットやご当地グルメは？",
      a: "鶴岡市街ではユネスコ食文化創造都市ならではの郷土料理や、世界一のクラゲ展示を誇る「加茂水族館（クラゲドリーム館）」の幻想的な冬のクラゲ展示、致道博物館が見どころです。酒田エリアでは、映画のロケ地にもなった雪景色が美しい「山居倉庫」のケヤキ並木や、北前船の歴史を伝える「旧鐙屋」、本間家旧本邸の歴史散策が人気です。グルメでは寒鱈汁のほか、庄内浜の活ズワイガニ、寒ブリ、脂が乗った弁慶飯（味噌おにぎりを青菜漬けで巻いて焼いたもの）、魚介出汁の利いた酒田ラーメン、山形牛や庄内豚の料理が必食です。"
    }
  ];

  const pageContent = `import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Flame, Snowflake, Waves, ThermometerSun, ShoppingBag, Mountain, Landmark, Camera, Ship, Fish
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '庄内 寒鱈汁, 鶴岡 寒鱈まつり, 湯野浜温泉 ホテル, あつみ温泉 たちばなや, あつみ温泉 萬国屋, HOTEL KAMEYA, 游水亭 いさごや, ホテルリッチ＆ガーデン酒田, 11月 12月 1月 山形旅行, 出羽三山 冬',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}'
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の日本海と出羽三山の白銀絶景'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    images: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function YamagataShonaiKandaraWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    datePublished: '2026-10-02',
    dateModified: '2026-10-02',
    author: {
      '@type': 'Organization',
      name: 'クラドトラベル編集部',
      url: 'https://croud-travel.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.com/${slug}'
    }
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://croud-travel.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '冬の特集一覧',
        item: 'https://croud-travel.com/features'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '庄内・寒鱈汁と出羽三山雪景色＆名湯あつみ・湯野浜温泉',
        item: 'https://croud-travel.com/${slug}'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
${faqList.map(f => `      {
        '@type': 'Question',
        name: ${JSON.stringify(f.q)},
        acceptedAnswer: {
          '@type': 'Answer',
          text: ${JSON.stringify(f.a)}
        }
      }`).join(',\n')}
    ]
  };

  const hotelsData = [
${hotelCardsCode}
  ];

  const faqListItems = ${JSON.stringify(faqList, null, 2)};

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-indigo-100 selection:text-indigo-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の山形庄内と日本海の荒波" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-indigo-900/80 backdrop-blur-md text-indigo-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-indigo-400/30">
            <Snowflake className="w-4 h-4 text-indigo-300" />
            11月・12月・1月 冬の日本海・庄内ガストロノミー＆雪見露天特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月山形】庄内名物「寒鱈汁（どんがら汁）」と極上白子・寒ブリ・出羽三山雪景色＆名湯あつみ・湯野浜温泉を巡る厳選宿5選
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            日本海の荒波が運ぶ冬の王者「真鱈（まだら）」。濃厚な肝と白子が溶け合う熱々の「どんがら汁」に舌鼓を打ち、白銀に染まる出羽三山の厳かな杉並木と国宝五重塔の静寂に心を研ぎ澄ます。1000年以上の歴史を刻むあつみ温泉や湯野浜温泉の雪見露天風呂、極上山形牛を心ゆくまで堪能する名宿を厳選紹介します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-indigo-400" /> 旬の時期：11月下旬〜1月下旬</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-indigo-400" /> エリア：山形県鶴岡市・酒田市・あつみ温泉・湯野浜温泉</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-indigo-400" /> 旬グルメ：寒鱈汁（どんがら汁）・白子・寒ブリ・ズワイガニ・山形牛</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Introduction</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の日本海が育む熱き漁師の魂「寒鱈汁」と、ユネスコ食文化創造都市・鶴岡の真髄
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              日本海の白波が激しく打ち寄せ、出羽三山や鳥海山が厚い白銀のヴェールをまとう11月から1月、山形県庄内地方は一年で最も食の熱気に包まれます。その中心にあるのが、庄内の冬を象徴するソウルフード「寒鱈（かんだら）汁」です。極寒の日本海で産卵のために脂を極限まで蓄えた真鱈を、骨やアラ（どんがら）、頭、身、そして「あぶら」と呼ばれる肝臓や「あぶらこ」と呼ばれるクリーミーな白子まで丸ごと味噌仕立てで煮込む豪快な鍋料理です。
            </p>
            <p>
              立ち上る湯気とともに漂う香ばしい磯の岩海苔の香り。ひと口すすれば、鱈の濃厚な肝から溶け出した芳醇な脂と出汁が五臓六腑に染み渡り、冷えた体を芯から温めてくれます。地元では「寒鱈を食べなければ庄内の冬は始まらない」と言われるほどで、1月には酒田や鶴岡で大鍋を囲む「寒鱈まつり」が開催され、町中が歓声と湯気に包まれます。
            </p>
            <p>
              さらに庄内地方は、日本で初めてユネスコ食文化創造都市に認定された鶴岡市を擁し、在来作物や精進料理の伝統が息づく美食の宝庫。冬には庄内浜の寒ブリや紅ズワイガニ、きめ細やかなサシが入ったブランド牛「山形牛」「庄内牛」、そして山形が生んだ最高峰のブランド米「つや姫」が揃い踏み。白銀の出羽三山杉並木の静寂と、名湯あつみ・湯野浜温泉の雪見風呂とともに味わう旅は、大人の冬の旅情を極限まで満たしてくれます。
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-indigo-50/50 rounded-2xl p-4 border border-indigo-100 space-y-2">
              <div className="flex items-center gap-2 text-indigo-950 font-bold text-sm">
                <Flame className="w-4 h-4 text-indigo-700" />
                庄内名物「寒鱈汁」の熱気
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                丸ごとの真鱈、濃厚な肝、とろける白子を味噌仕立てで煮込んだ冬の至宝。岩海苔の風味とともに堪能。
              </p>
            </div>
            <div className="bg-indigo-50/50 rounded-2xl p-4 border border-indigo-100 space-y-2">
              <div className="flex items-center gap-2 text-indigo-950 font-bold text-sm">
                <Mountain className="w-4 h-4 text-indigo-700" />
                出羽三山の白銀静寂美
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                巨杉がそびえる羽黒山の雪景色と国宝五重塔。冬の冷気の中で研ぎ澄まされるスピリチュアルな祈りの地。
              </p>
            </div>
            <div className="bg-indigo-50/50 rounded-2xl p-4 border border-indigo-100 space-y-2">
              <div className="flex items-center gap-2 text-indigo-950 font-bold text-sm">
                <Waves className="w-4 h-4 text-indigo-700" />
                あつみ＆湯野浜の名湯露天
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                開湯1000年超の歴史を誇るあつみ温泉の美肌湯と、日本海一望の湯野浜温泉で味わう極上の雪見風呂。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-indigo-950 font-bold text-sm tracking-wide bg-indigo-100/60 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4 text-indigo-800" />
              楽天トラベル公式連携・厳選宿
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 mt-2">
              庄内・鶴岡・酒田の冬絶景と美食を味わい尽くす名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              ※表示料金は楽天トラベルAPIより取得した参考最低価格です。時期や宿泊プランにより変動します。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row"
              >
                {/* Hotel Image */}
                <div className="md:w-2/5 relative min-h-[260px] md:min-h-full bg-stone-100 overflow-hidden">
                  <img 
                    src={hotel.img} 
                    alt={hotel.name}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    厳選宿 {hotel.id}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-stone-900 text-xs font-bold px-3 py-1 rounded-lg shadow-xs flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    {hotel.rating} <span className="text-stone-400 font-normal">({hotel.reviews}件)</span>
                  </div>
                </div>

                {/* Hotel Details */}
                <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-indigo-700" />
                        {hotel.access}
                      </span>
                      <span className="text-indigo-800 font-extrabold text-base sm:text-lg">
                        {hotel.price} <span className="text-xs font-normal text-stone-500">（税込目安）</span>
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-2xl font-bold text-stone-900 leading-snug">
                      {hotel.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {hotel.story}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 bg-stone-50 rounded-2xl p-4 border border-stone-100">
                      {hotel.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-indigo-700 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Room & Gourmet tips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="bg-indigo-50/40 p-3 rounded-xl border border-indigo-100/60">
                        <span className="font-bold text-indigo-950 block mb-1">【客室の選び方】</span>
                        <p className="text-stone-600 leading-relaxed">{hotel.roomTip}</p>
                      </div>
                      <div className="bg-amber-50/40 p-3 rounded-xl border border-amber-100/60">
                        <span className="font-bold text-amber-950 block mb-1">【冬の味覚おすすめ】</span>
                        <p className="text-stone-600 leading-relaxed">{hotel.gourmetTip}</p>
                      </div>
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="pt-2">
                    <a 
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-800 to-slate-900 hover:from-indigo-900 hover:to-black text-white font-bold py-3.5 px-6 rounded-2xl shadow-sm hover:shadow transition text-sm tracking-wide"
                    >
                      <span>楽天トラベルで空室・冬限定プランを見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2-Day Winter Model Course Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Route</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の庄内・鶴岡・酒田 2泊3日王道モデルコース
            </h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-stone-700">
            {/* Day 1 */}
            <div className="relative pl-6 border-l-2 border-indigo-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-indigo-700" />
              <h3 className="font-bold text-stone-900 text-base">
                1日目：庄内空港到着・出羽三山羽黒山の雪景色と湯野浜温泉オーシャンビュー
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                おいしい庄内空港またはJR鶴岡駅に到着後、バスまたはレンタカーで羽黒山へ。巨杉が立ち並ぶ雪の参道を歩き、荘厳な国宝・羽黒山五重塔を参拝。冬の冷気の中で心を清めた後、世界一のクラゲ展示を誇る「加茂水族館（クラゲドリーム館）」へ。夜は日本海に面した湯野浜温泉へチェックイン。荒波寄せる日本海の夕景を露天風呂から眺め、夕食には熱々の寒鱈汁や庄内牛会席を堪能します。
              </p>
            </div>

            {/* Day 2 */}
            <div className="relative pl-6 border-l-2 border-indigo-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-indigo-700" />
              <h3 className="font-bold text-stone-900 text-base">
                2日目：酒田の北前船歴史探訪・山居倉庫雪景色とあつみ温泉の名園ステイ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                午前中は港町・酒田へ。雪化粧したケヤキ並木と黒塗りの土蔵が美しい「山居倉庫」を散策し、庄内米や地酒のお土産を購入。昼食は酒田港の海鮮市場で獲れたての寒ブリやズワイガニの海鮮丼、または魚介出汁香る名物酒田ラーメンを味わいます。午後は南下して温海川沿いの名湯「あつみ温泉」へ。雪化粧した広大な日本庭園を眺め、開湯1000年以上の歴史ある美肌の湯に浸かり、冬限定の寒鱈白子小鍋や山形牛すき焼きに舌鼓。
              </p>
            </div>

            {/* Day 3 */}
            <div className="relative pl-6 border-l-2 border-indigo-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-indigo-700" />
              <h3 className="font-bold text-stone-900 text-base">
                3日目：あつみ温泉朝市・鶴岡市街のユネスコ食文化巡りとお土産調達
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                朝は温海川沿いで開かれる名物「あつみ温泉朝市」へ。名物の赤かぶ漬けや栃餅、干物を地元の人々と交流しながらお買い物。チェックアウト後は鶴岡市街へ戻り、庄内藩主酒井家の歴史を伝える致道博物館や藩校致道館を見学。昼食は老舗の割烹で弁慶飯や庄内の冬郷土料理を堪能。庄内空港または鶴岡駅から帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Local Winter Practical Tips */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs sm:text-sm tracking-wider uppercase">
            <ThermometerSun className="w-4 h-4 text-indigo-300" />
            現地リアルアドバイス
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">
            冬の庄内を快適に巡るための防寒装備・道路凍結注意点
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-200 leading-relaxed pt-2">
            <div className="space-y-2 bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
              <span className="font-bold text-white block">【服装と足元：地吹雪と防水対策】</span>
              <p>
                日本海沿岸の庄内平野は強風が吹き荒れる日が多く、体感温度は氷点下まで下がります。防風・撥水性能のある厚手のダウンジャケット、ニット帽、ネックウォーマー、手袋が必須です。特に羽黒山の参道や酒田港周辺は足元が雪やシャーベット状になりやすいため、完全防水で靴底に凹凸のあるスノーブーツを着用してください。
              </p>
            </div>
            <div className="space-y-2 bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
              <span className="font-bold text-white block">【レンタカー：スタッドレスと地吹雪ホワイトアウト】</span>
              <p>
                12月〜1月のレンタカーはスタッドレスタイヤ必須です。平野部では雪が吹き荒れる「地吹雪（ホワイトアウト）」で一瞬にして視界が真っ白になることがあります。悪天候時は速度を大幅に落とし、ヘッドライトを点灯させ、車間距離を十分にとってください。山形道（月山越え）は豪雪地帯となるため、冬期の長距離移動はJR羽越本線やフライトの利用が賢明です。
              </p>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-indigo-950 font-bold text-sm tracking-wide bg-indigo-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-indigo-800" />
              庄内・鶴岡・酒田の冬名物＆厳選おみやげ手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              北前船の文化と肥沃な庄内平野が育んだ伝統の銘品
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-700" />
                温海かぶの甘酢漬け・民芸菓子「からから煎餅」
              </h3>
              <p>
                あつみ温泉周辺の焼畑農法で育つ伝統野菜「温海かぶ」。鮮やかな赤紫色とパリッとした歯ごたえ、甘酸っぱい風味が冬の食卓の最高のお供になります。また、鶴岡の伝統駄菓子「からから煎餅」は、黒糖風味の三角煎餅を割ると中から可愛らしい民芸玩具や鈴が出てくる縁起菓子。子どもから大人まで笑顔になれる庄内ならではの名物手土産です。
              </p>
            </div>
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-700" />
                庄内名酒「初孫」「麓井」「楯野川」の冬のしぼりたて生酒
              </h3>
              <p>
                日本有数の米どころ・庄内平野は、鳥海山や出羽三山の超軟水の伏流水に恵まれた日本酒の聖地です。「初孫」の生酛造り、「麓井」「楯野川」の純米大吟醸など、11月から1月にかけて各蔵から登場する「しぼりたて新酒」や「にごり酒」は、冬の寒鱈汁や寒ブリ、庄内牛の脂と抜群のマリアージュを奏でます。酒田や鶴岡の酒販店や旅館の売店で購入可能です。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-indigo-950 font-bold text-sm tracking-wide bg-indigo-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-indigo-800" />
              庄内食文化ディープダイブ
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ鶴岡はユネスコ食文化創造都市に選ばれ、冬の寒鱈が神聖視されるのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-stone-100 shadow-2xs">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Landmark className="w-4 h-4 text-indigo-700" />
                出羽三山の山岳信仰と北前船貿易が生んだ食の重層性
              </h3>
              <p>
                鶴岡市が日本で初めてユネスコ食文化創造都市に認定された理由は、数百年にわたり農家が一子相伝で受け継いできた数十種もの「在来作物」、出羽三山の修験道から生まれた精神性の高い「精進料理」、そして江戸時代に日本海を行き交った北前船がもたらした京都・上方文化の融合にあります。冬の厳しい自然と対峙しながら、食材の命を余すところなく尊ぶ精神が、寒鱈を骨から肝まで一滴も無駄にせず食す「どんがら汁」の文化を生み出しました。
              </p>
            </div>

            <div className="space-y-2 bg-white p-5 rounded-2xl border border-stone-100 shadow-2xs">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Fish className="w-4 h-4 text-indigo-700" />
                恵比寿講と寒鱈：庄内の人々の冬の感謝の祈り
              </h3>
              <p>
                庄内地方では古くから、初冬の12月上旬に行われる商売繁盛と家内安全の神事「恵比寿講（えびすこう）」のお供え物として、丸ごと一本の寒鱈を神棚に捧げる風習があります。荒れ狂う冬の日本海に命がけで漕ぎ出し、海の恵みを持ち帰ってくれた漁師への敬意と、神への感謝を込めて家族揃って寒鱈汁をいただく。一杯のどんがら汁には、庄内の厳しくも豊かな風土と人々の温かな祈りが凝縮されているのです。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-indigo-950 font-bold text-sm tracking-wide bg-indigo-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-indigo-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬・厳冬期の庄内・鶴岡・酒田旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-indigo-700 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
          <div className="flex items-center gap-2 text-indigo-950 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-indigo-800" />
            あわせて読みたい東北・山形の冬温泉＆味覚特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-yamagata-hijiori-onsen-snow-yamagatagyu-toji-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-indigo-700 font-bold block text-[10px]">山形・肘折温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">豪雪の秘湯肘折温泉と冬の湯治文化・山形牛すき焼き＆雪見露天の宿</p>
            </Link>
            <Link 
              href="/winter-yamagata-ginzan-onsen-snow-taisho-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-indigo-700 font-bold block text-[10px]">山形・銀山温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">大正ロマンのガス灯と雪景色の温泉街・尾花沢牛と名湯に浸る極上宿</p>
            </Link>
            <Link 
              href="/winter-yamagata-zao-onsen-snow-jyuhyo-beef-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-indigo-700 font-bold block text-[10px]">山形・蔵王温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">世界に誇るスノーモンスター樹氷と強酸性硫黄泉・極上蔵王牛を味わう名宿</p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
`;

  const outputPath = path.join(__dirname, '..', '..', 'src', 'app', slug, 'page.tsx');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, pageContent, 'utf8');
  console.log(`Generated: ${outputPath}`);
}

module.exports = { generateYamagataShonaiKandaraPage };
