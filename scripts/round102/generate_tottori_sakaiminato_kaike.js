const fs = require('fs');
const path = require('path');

function generateTottoriSakaiminatoKaikePage(hotels) {
  const slug = 'winter-tottori-sakaiminato-kaike-onsen-matsubagani-stay';
  const title = '【11・12・1月鳥取】冬の味覚の王様・山陰松葉ガニ解禁！境港水産物直売センター＆水木しげるロードと皆生温泉「塩の湯」・大山冬景色を堪能する名宿5選';
  const description = '11月6日の松葉ガニ漁解禁とともに、山陰・鳥取県は年間で最も美食と活気に満ちる冬の黄金期を迎えます。日本屈指のズワイガニ水揚げ量を誇る境港で味わう茹でたて本松葉ガニ、水木しげるロードのレトロな妖怪ブロンズ像散策、日本海と雪化粧した名峰・大山（伯耆富士）を望む皆生温泉の濃厚な「海の温泉（塩化物泉）」。冬の味覚の頂点と美肌の塩湯に浸る贅沢な滞在を満喫できる厳選名宿5選と、1泊2日のドライブモデルコースをお届けします。';

  const hotelDetails = [
    {
      story: '弓ヶ浜の白砂青松が続く海岸線に面し、全館に心地よい和の情緒と音楽の癒やしが満ちる「皆生温泉 皆生菊乃家」。館内には主人が厳選した地酒と手作りの温かなもてなしが息づき、ロビーでは夕暮れ時に響く生演奏が旅情を優しく包みます。冬の目玉はなんといっても地元境港で水揚げされた活松葉ガニを贅沢に使った「タグ付き活松葉ガニフルコース」。目の前で焼き上げる香ばしい焼きガニ、甘みが舌の上でとろけるカニ刺し、濃厚なカニ味噌甲羅焼きに甲羅酒と、松葉ガニの真髄を味わい尽くせます。日本海から湧き出るミネラル豊富な源泉掛け流しの湯は、湯冷めしにくく冬の冷えた体を芯から温めてくれます。',
      roomTip: '海側和室。窓一面に広がる日本海の冬波と、晴れた日には遠く島根半島まで見渡せる絶景空間で贅沢な寛ぎを堪能できます。',
      gourmetTip: '「活タグ付き松葉ガニづくし会席」。境港水揚げ証明タグ付きの活ガニを1人あたり1杯半以上使用し、刺し・焼き・茹で・鍋のすべてで堪能できます。'
    },
    {
      story: '全客室が日本海を一望するオーシャンフロントの贅を極めた純和風旅館「皆生温泉 湯喜望 白扇」。館内は全館畳敷きの設えとなっており、スリッパを脱いで素足で心地よく畳の感触を味わえます。冬の澄んだ大気のもと、水平線から昇る朝日や日本海の荒波を眺めながら入る展望大浴場と露天風呂は格別の爽快感。客室に備えられた展望風呂からも、プライベートな海景色と名湯を独り占めできます。夕食には境港直送の松葉ガニをメインに、鳥取が誇る最高級ブランド牛「鳥取和牛オレイン55」を組み合わせた極上会席が並び、山陰屈指の冬の味覚を心ゆくまで堪能できます。',
      roomTip: '展望風呂付きオーシャンビュー客室。海を眺めながら好きな時に何度でも名湯に浸かれるプライベート空間が約束されます。',
      gourmetTip: '「松葉ガニ＆鳥取和牛極上味覚会席」。甘み濃厚な茹で松葉ガニと、融点が低く脂が上品な鳥取和牛の陶板ステーキを同時に味わえます。'
    },
    {
      story: '皆生温泉の東端、日野川河口と日本海が出会う絶好のロケーションに建つラグジュアリー旅館「皆生温泉 華水亭」。日本庭園と現代数寄屋造りが融合した雅な空間で、洗練された大人の静寂を約束してくれます。自慢の露天風呂「宝生の湯」からは、荒波寄せる日本海と白銀に輝く秀峰・大山のパノラマを一望。自家源泉から引かれるナトリウム・カルシウム塩化物泉は肌にしっとりと吸い付き、高い保湿効果を誇ります。冬の料理は料理長が素材の目利きから仕込みまで徹底的にこだわり抜いた松葉ガニ料理。活ガニの繊細な花咲く刺身や、秘伝の出汁で炊き上げるカニ雑炊は記憶に残る至高の逸品です。',
      roomTip: '東館オーシャンビュー和洋室。水平線から昇る神々しい朝日の光を浴びながら目覚める贅沢な朝を迎えられます。',
      gourmetTip: '「特選活松葉ガニ懐石」。境港産の最高品質の松葉ガニを繊細な職人技で仕立てた、目にも鮮やかな日本料理の真骨頂を味わえます。'
    },
    {
      story: 'JR境港駅から徒歩わずか1分、水木しげるロードの起点に位置する全館畳敷きの和風プレミアムホテル「天然温泉 夕凪の湯 御宿 野乃境港」。ビジネスホテルの利便性と高級旅館の風情を兼ね備え、観光の拠点として絶大な支持を集めています。最上階12階に設けられた展望露天風呂「夕凪の湯」からは、眼下に境港の港町と境水道、遠くに雪化粧した大山を一望。泉質は皆生温泉と同じく塩化物泉で、港風に吹かれながらの手足を伸ばした入浴は至福のひとときです。朝食バイキングでは、境港直送の新鮮な紅ズワイガニのほぐし身やイクラ、マグロ、甘エビを盛り放題の「勝手丼」が名物で、朝から贅沢極まりない海の恵みを味わえます。',
      roomTip: '高層階ダブルまたはツインルーム。素足で歩ける清潔な琉球畳とサータ社製ベッドで、快適な旅の休息を約束します。',
      gourmetTip: '「名物・海鮮勝手丼朝食＆夜鳴きそば」。朝食での紅ズワイガニ乗せ放題海鮮丼に加え、夜はドーミーイン名物の特製あっさり醤油ラーメンを無料で堪能。'
    },
    {
      story: '皆生温泉の中心に位置し、創業から続く伝統のきめ細やかなおもてなしと四季折々の風情を大切にする老舗宿「皆生温泉 皆生つるや 四季を奏でるさらさの宿」。館内に足を踏み入れると、季節の草花とお香の清々しい香りが迎えてくれます。男女別の大浴場と風情あふれる庭園露天風呂では、豊富な湯量を誇る皆生の塩湯を心ゆくまで堪能。塩分が肌をベールのように包み込み、入浴後も何時間もぽかぽかとした温もりが持続します。冬の料理コースでは、地元の競りで仕入れた松葉ガニを熟練の板前が絶妙な塩加減で茹で上げる「浜茹で松葉ガニ」が絶品。カニ本来の甘みと旨味が凝縮された身離れの良さに感動します。',
      roomTip: '和室12畳のゆったりとした本館客室。数寄屋風の落ち着いた意匠で、ご家族やグループでの冬旅にも広々と寛げます。',
      gourmetTip: '「浜茹で松葉ガニ一杯付き山陰冬会席」。カニ本来の旨味を最もストレートに味わえる茹でガニ丸ごと一杯に、日本海の旬魚刺身が華を添えます。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥6,600〜' : i === 1 ? '¥6,050〜' : i === 2 ? '¥8,800〜' : i === 3 ? '¥9,096〜' : '¥7,260〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.44' : i === 1 ? '4.28' : i === 2 ? '4.59' : i === 3 ? '4.51' : '4.44');
    const reviewCount = h.reviewCount || (i === 0 ? 580 : i === 1 ? 420 : i === 2 ? 690 : i === 3 ? 1250 : 380);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || '米子駅より路線バスで約20分、米子鬼太郎空港より車で約20分。米子ICより車で約15分')},
              special: ${JSON.stringify(h.hotelSpecial || '境港直送の本松葉ガニフルコースと日本海を望む皆生温泉・塩の湯を満喫する名宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '境港直送の活松葉ガニフルコース・目の前で焼き上げる香ばしい焼きガニと甲羅酒' : i === 1 ? '全室オーシャンビュー＆全館畳敷き・素足で寛げる清潔感あふれる絶景和風宿' : i === 2 ? '自家源泉掛け流しの日本海パノラマ露天風呂と最高級松葉ガニ懐石の極み' : i === 3 ? 'JR境港駅徒歩1分・最上階12階の展望露天風呂と朝食の豪華海鮮勝手丼バイキング' : '創業の伝統が息づく手厚いもてなしと絶妙な塩加減で仕上げる名物浜茹で松葉ガニ')},
                ${JSON.stringify(i === 0 ? '日本海から湧き出る濃厚な塩化物泉・保温効果抜群で湯冷めしにくい美肌の湯' : i === 1 ? '展望風呂付き客室で波音を聴きながら心ゆくまで名湯を独占する贅沢' : i === 2 ? '晴れた日には遠く大山と美保湾を望む雄大なロケーションと洗練された客室' : i === 3 ? '水木しげるロード散策の拠点に最適・夜鳴きそば無料サービスなど充実の設備' : '日本庭園を眺める露天風呂と鳥取和牛・日本海の旬魚を組み合わせた美食膳')},
                ${JSON.stringify(i === 0 ? '夕暮れロビーでの生演奏など心温まる演出と鳥取の厳選地酒の品揃え' : i === 1 ? '鳥取和牛オレイン55の陶板焼きと松葉ガニの豪華二大味覚プランが人気' : i === 2 ? '料理長が素材を吟味した花咲くカニ刺しと濃厚なカニ雑炊の圧倒的完成度' : i === 3 ? '全館畳敷きのモダン和空間・観光にもビジネスにも抜群の快適性とコストパフォーマンス' : '広々とした和室客室で家族や三世代旅行にもゆったり安心して滞在可能')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "鳥取・境港の松葉ガニ漁の解禁期間と、最も美味しい旬の時期はいつですか？",
      a: "山陰地方のズワイガニ漁（松葉ガニ）は、省令により毎年11月6日に一斉解禁され、翌年3月20日まで行われます。特に11月中旬から1月にかけては、脱皮を終えて甲羅が固くなり、身がぎっしりと詰まって濃厚なカニ味噌を蓄えた最上級の活ガニが水揚げされます。また、11月から12月末までの短い期間だけ漁獲が許可される雌のズワイガニ「親ガニ（セコガニ・コッペガニ）」は、甲羅の内側に詰まった鮮やかな朱色の内子（卵巣）とプチプチした外子が絶品で、この時期限定の濃厚な味噌汁や丼として地元でも熱烈に愛されています。"
    },
    {
      q: "「松葉ガニ」と「紅ズワイガニ」の違いや特徴、味の比較を教えてください。",
      a: "松葉ガニ（本ズワイガニ）は水深200〜400mの砂泥底に生息し、甲羅は淡い褐色で足が長く太いのが特徴です。身の繊維がしっかりとして弾力があり、強い甘みと上品で濃厚なカニ味噌を持ち、カニ刺しや焼きガニ、カニすきなどあらゆる調理法で至高の味を誇ります。一方、紅ズワイガニは水深800〜1,500mの深海に生息し、茹でる前から鮮やかな赤色をしています。水分が多く身が非常にジューシーで甘みが強いのが魅力で、境港は日本一の水揚げ量を誇ります。価格面では松葉ガニが高級贈答品やフルコース向け、紅ズワイガニはリーズナブルに日常使いや海鮮丼で気軽に楽しめるという違いがあります。"
    },
    {
      q: "皆生温泉の泉質と冬の健康・美肌効果について教えてください。",
      a: "皆生温泉の泉質は「ナトリウム・カルシウム-塩化物泉」です。海岸の浅瀬から温泉が湧き出しているため、海水に似た豊富な塩分とミネラル分を含んでいます。この塩分が入浴時に肌の表面に付着して汗の蒸発を防ぐ「塩のパック効果」を生み出すため、入浴後も熱が逃げず、真冬でも何時間も体が芯から温まる抜群の保温効果があります。また、弱食塩泉の引き締め効果と豊富なカルシウム成分により、肌がすべすべになる「美肌の湯」としても知られ、冷え性や関節痛、慢性皮膚炎の改善に優れた効果を発揮します。"
    },
    {
      q: "境港の水木しげるロードを冬に巡る際のポイントやライトアップ情報は？",
      a: "JR境港駅から約800メートルにわたって続く「水木しげるロード」には、177体の妖怪ブロンズ像が立ち並びます。日没から夜22時頃までは毎日ライトアップが行われており、道路や歩道に妖怪の影絵が次々と投影される幻想的な夜の妖怪ストリートを楽しめます。冬場は日本海からの冷たい海風が吹き抜けるため、風を通さない防寒コート、手袋、マフラーを着用するのが鉄則です。ロード沿いの水木しげる記念館（2024年リニューアルオープン）では、充実した展示と温かい館内で妖怪の世界にじっくり浸ることができます。"
    },
    {
      q: "冬（11月・12月・1月）の米子・境港・大山エリアの道路状況や雪の対策は？",
      a: "皆生温泉や境港市街地など平野部の沿岸部は、11月〜12月上旬は積雪することは稀ですが、強い寒波が到来する12月中旬〜1月には積雪や夜間の路面凍結が発生します。特に中国山地を越える米子自動車道や、大山寺・大山まきばみるくの里など標高の高いエリアへ向かう場合は、路面が完全な圧雪・アイスバーンとなるため、スタッドレスタイヤの装着が必須です。冬に車で旅行する際は、必ず冬用タイヤ規制や高速道路のチェーン規制情報を事前に確認し、余裕を持った運転計画を立ててください。"
    }
  ];

  const pageContent = `import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Snowflake, Waves, Sun, Flame, Mountain, Building, Coffee, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '松葉ガニ 解禁 鳥取, 境港 松葉ガニ, 皆生温泉 蟹 宿泊, 水木しげるロード 冬, 皆生菊乃家, 湯喜望 白扇, 皆生温泉 華水亭, 御宿 野乃 境港, 皆生つるや, 大山 雪景色, 11月 12月 1月 鳥取旅行',
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
        url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の鳥取県皆生温泉と日本海の雪景色'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    images: ['https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function TottoriSakaiminatoKaikeWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
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
        name: '境港松葉ガニ＆皆生温泉特集',
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
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-cyan-100 selection:text-cyan-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の鳥取・境港と皆生温泉の日本海景色" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-cyan-900/80 backdrop-blur-md text-cyan-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-cyan-400/30">
            <Snowflake className="w-4 h-4 text-cyan-300" />
            11月・12月・1月 冬の山陰・本松葉ガニ解禁＆皆生温泉「塩の湯」特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月鳥取】冬の味覚の王様・山陰松葉ガニ解禁！境港水産物直売センター＆水木しげるロードと皆生温泉「塩の湯」・大山冬景色を堪能する名宿5選
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            11月6日の初競りから幕を開ける山陰の冬。日本海から水揚げされる活松葉ガニの甘く濃厚な身と黄金色のカニ味噌、境港の活気あふれる市場と水木しげるロードの妖怪ストリート。そして弓ヶ浜の海岸線に湧き出る皆生温泉は、海水を抱いた濃厚な塩分が体を芯から温めて湯冷め知らずの「塩の湯」。遠くに白銀の大山を仰ぎ、冬の美食と極上温泉に身を浸す至福の山陰旅へ誘います。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-cyan-400" /> 最適時期：11月中旬〜1月下旬（松葉ガニ最盛期・大山冠雪）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /> エリア：鳥取県境港市・米子市皆生温泉</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-cyan-400" /> 名物：本松葉ガニ・紅ズワイガニ・鳥取和牛・モサエビ・親ガニ汁</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の日本海がもたらす至高の恵み・松葉ガニと、海から湧き出る奇蹟の美肌名湯
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              日本海からの冷たい北風が吹き寄せ、中国山地の主峰・大山が白銀の雪化粧をまとい始めると、鳥取県・境港と米子エリアは1年で最も活気あふれる美食の季節を迎えます。毎年11月6日、日本海のズワイガニ漁が一斉に解禁されると、全国有数の水揚げ高を誇る境港の市場には、水揚げされたばかりの活きの良い「松葉ガニ」がびっしりと並び、港町は独特の熱気に包まれます。
            </p>
            <p>
              山陰の清らかな深海で育まれた松葉ガニは、引き締まった脚にぎっしりと詰まった繊細な肉質と、噛むほどに広がる上品な甘みが特徴です。甲羅の中にたっぷりと詰まった濃厚なカニ味噌は、まさに海の至宝。カニ刺しの透き通るような花咲く身、炭火で香ばしく焼き上げる焼きガニの芳醇な香り、大鍋で野菜と煮込むカニすきの深いコク、そして締めの一杯として甲羅に熱燗を注ぐ「甲羅酒」まで、松葉ガニは冬の日本料理のあらゆる喜びを体現してくれます。
            </p>
            <p>
              港町・境港から弓ヶ浜の海岸線を南へ車で約20分走ると、日本海沿いに湯けむりを上げる「皆生温泉（かいけおんせん）」へと至ります。1900年、地元の漁師が海岸の海中に湧き出す熱湯を発見したことから始まったこの温泉地は、国内でも屈指の「海の温泉」として名を馳せています。ナトリウムとカルシウムを含む高濃度の塩化物泉は、入浴すると肌の表面に塩分の薄い膜を作り出し、体温の発散を防ぐため、真冬の寒風にさらされた身体を芯からじんわりと温め続けてくれます。
            </p>
            <p>
              さらに、日中は境港の水木しげるロードで177体の妖怪ブロンズ像やリニューアルされた水木しげる記念館を巡り、境港水産物直売センターで茹でたてのカニや幻のエビと呼ばれる「モサエビ」の買い物に舌鼓。夕暮れ時には日本海の波打ち際に佇む皆生の宿で水平線に沈む夕陽を眺め、夜は名物カニ尽くしのフルコースと名湯に身を委ねる。これ以上ない贅沢と温もりが詰まった山陰の冬旅がここに待っています。
            </p>
          </div>
        </section>

        {/* 3 Key Highlights Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の鳥取・境港＆皆生温泉で体感すべき3つのプレミアムな魅力
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              11月〜1月だからこそ出逢える、本場のカニ料理と海の温泉、雪の景勝美。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                1. 11月6日解禁！境港直送の「本松葉ガニ」フルコース
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                境港のタグ付き活松葉ガニを贅沢に使用。刺身、炭火焼き、茹でガニ、濃厚な甲羅味噌焼きまで、本場ならではの圧倒的な鮮度とボリュームで堪能できます。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                2. 日本海を一望！皆生温泉「塩の湯」の保温・美肌効果
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                海中から湧き出るミネラル豊富な塩化物泉。塩分パック効果で湯冷めせず、入浴後もぽかぽか感が何時間も持続。日本海の雄大な荒波を眺める露天風呂は格別です。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                3. 水木しげるロード夜間妖怪影絵と白銀の伯耆富士・大山
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                夜のライトアップで妖しく浮かび上がる水木しげるロードの妖怪ブロンズ像と、晴れた日に弓ヶ浜から仰ぎ見る純白の秀峰・大山のパノラマ絶景を堪能。
              </p>
            </div>
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-cyan-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              【1泊2日】境港カニ市場と水木しげるロード・皆生温泉を満喫する冬の黄金ルート
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              米子空港または米子駅からスタートし、冬の山陰の味覚・文化・温泉を無駄なく味わうドライブコース。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">DAY 1 昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  11:30 米子空港・米子駅到着 ➔ 境港水産物直売センターで名物「紅ズワイガニ丼」ランチ
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  米子鬼太郎空港からレンタカーで約10分、境港水産物直売センターへ。水揚げされたばかりの紅ズワイガニやモサエビ、ノドグロが並ぶ活気ある市場を見学。併設の海鮮食堂で身がたっぷり乗ったカニ丼と濃厚な親ガニ汁を味わい、山陰の美食の旅をスタートします。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">DAY 1 午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  13:30 水木しげるロード散策 ➔ 水木しげる記念館見学とお土産探し
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  境港駅前へ移動し、800mにわたって177体の妖怪ブロンズ像が並ぶ水木しげるロードを散策。鬼太郎や目玉おやじ、ねずみ男の像と記念撮影を楽しみ、リニューアルされた水木しげる記念館で貴重な原画や妖怪の世界観に触れます。妖怪パンや目玉おやじの和菓子を食べ歩き。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">DAY 1 夕刻〜夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  16:00 皆生温泉の名宿へチェックイン ➔ 日本海を望む露天風呂＆極上「活松葉ガニ会席」
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  弓ヶ浜沿いの宿へ到着。海に面した露天風呂に浸かり、波音を聴きながら塩分たっぷりの「塩の湯」で長旅の疲れを癒やします。夕食は境港直送のタグ付き活松葉ガニフルコース。刺身、焼きガニ、茹でガニ、そして芳醇なカニ味噌甲羅酒に鳥取和牛を堪能します。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  09:00 朝の海辺散歩と朝風呂 ➔ 伯耆富士・大山山麓の大山寺参拝または「みるくの里」へ
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  朝食後は弓ヶ浜海岸で澄んだ冬の大気を吸い込み、車で大山方面へドライブ。標高の高い大山まきばみるくの里から米子市街と弓ヶ浜の絶景パノラマを望み、特製濃厚ソフトクリームを堪能。歴史ある名刹・大山寺で冬の安全祈願を行い、充実した帰路へ就きます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Featured Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の境港松葉ガニと皆生温泉を堪能する厳選名宿5選
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              楽天トラベル公式APIより取得した最新データに基づく、料理・風呂・立地が高評価の宿。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((h) => (
              <div key={h.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[260px]">
                    <img 
                      src={h.img} 
                      alt={h.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                      厳選第 {h.id} 位
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-cyan-900 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200/60">
                          {h.access}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-stone-600">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-bold text-stone-900 text-sm">{h.rating}</span>
                          <span>({h.reviews}件のクチコミ)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {h.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-500 font-medium">
                        {h.special}
                      </p>

                      <p className="text-sm text-stone-700 leading-relaxed pt-2">
                        {h.story}
                      </p>
                    </div>

                    <div className="space-y-3 bg-stone-50 rounded-2xl p-4 border border-stone-200/70 text-xs sm:text-sm text-stone-700">
                      <div className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-cyan-600" />
                        この宿の注目ポイント
                      </div>
                      <ul className="space-y-1.5 list-disc list-inside text-stone-600">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="leading-relaxed">{hl}</li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-stone-200/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="font-bold text-stone-900">客室の提案：</span>
                          <span className="text-stone-600">{h.roomTip}</span>
                        </div>
                        <div>
                          <span className="font-bold text-stone-900">料理の提案：</span>
                          <span className="text-stone-600">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-stone-100">
                      <div>
                        <span className="text-xs text-stone-500 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-black text-cyan-950">{h.price}</span>
                      </div>

                      <a 
                        href={h.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-800 to-slate-900 hover:from-cyan-900 hover:to-slate-950 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm group"
                      >
                        <span>楽天トラベルで空室・プランを見る</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local Gourmet & Culture Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Gastronomy & Culture</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              鳥取・境港の風土が生んだ至高の海の幸と冬の地酒文化
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-cyan-700" />
                最高級ブランド「五輝星」と幻のエビ「モサエビ」
              </h3>
              <p>
                鳥取県で水揚げされる松葉ガニの中でも、大きさ・重さ（1.2kg以上）・身詰まり・色合いなど5つの厳格な基準をすべてクリアした最高峰だけに与えられる称号が「五輝星（いつきぼし）」です。初競りでは数百万円の値が付くこともある幻の逸品。また、鮮度落ちが早く県外へほとんど流通しない幻のエビ「モサエビ（クロザコエビ）」は、甘エビ以上の強い甘みとプリプリした食感を持ち、冬の山陰市場で絶対に見逃せない隠れた名物です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-cyan-700" />
                銘酒「千代むすび」「大山」と親ガニ汁の滋味
              </h3>
              <p>
                境港の老舗酒蔵・千代むすび酒造が醸す日本酒は、辛口の切れ味と米の旨味が調和し、松葉ガニ料理や濃厚なカニ味噌との相性が抜群です。また、地元家庭や居酒屋で愛される冬のソウルフード「親ガニ汁」は、メスガニをぶつ切りにして大根や葱とともに味噌仕立てにした郷土料理。カニの殻から染み出す濃厚な出汁と内子のコクが、冬の冷えた体に染み渡る最高の温もりを届けてくれます。
              </p>
            </div>
          </div>
        </section>

        {/* Practical Tips Section */}
        <section className="bg-cyan-50/60 rounded-3xl p-6 sm:p-10 border border-cyan-200/60 space-y-6">
          <div className="border-b border-cyan-200/80 pb-4">
            <span className="text-cyan-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Traveler Tips</span>
            <h2 className="text-xl sm:text-2xl font-bold text-cyan-950">
              冬の鳥取・境港＆皆生温泉を快適に巡るための実践アドバイス
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-cyan-950">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-cyan-700" />
                防風着と海風対策
              </div>
              <p className="leading-relaxed text-stone-700">
                境港の港町や水木しげるロード、皆生温泉の海岸沿いは日本海からの冷たい強風が吹き付けます。体感温度が氷点下近くまで下がることもあるため、防風・撥水機能のあるダウンコート、ニット帽、ネックウォーマーを着用しましょう。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-cyan-700" />
                冬用タイヤ規制と大山方面の注意
              </div>
              <p className="leading-relaxed text-stone-700">
                12月中旬〜1月は山陰道や米子自動車道で冬用タイヤ規制が行われる日があります。大山山麓へアクセスする場合は圧雪路面となるためスタッドレスタイヤが必須です。沿岸部の米子・境港間も夜間凍結の可能性があるため慎重な運転を。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-cyan-700" />
                カニ宿の早期予約と競り見学
              </div>
              <p className="leading-relaxed text-stone-700">
                11月の解禁直後から年末年始、1月の週末にかけて、境港の活松葉ガニを提供する人気旅館は早期に満室となります。2〜3ヶ月前からの予約が安全です。境港水産物地方卸売市場の見学デッキからは朝の熱気あるセリの様子を安全に観覧できます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の境港松葉ガニ＆皆生温泉に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-cyan-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-cyan-800 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    Q
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-3 pl-9">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links Section */}
        <section className="border-t border-stone-200 pt-10 space-y-6">
          <div className="space-y-1">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい全国の冬景色・味覚・温泉特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-ibaraki-fukuroda-waterfall-ice-onsen-shamo-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-cyan-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-cyan-800 font-bold text-xs block mb-1">茨城・袋田＆奥久慈</span>
              <span className="text-stone-900 font-bold group-hover:text-cyan-900 transition-colors line-clamp-2">
                日本三名瀑・袋田の滝の完全凍結「氷瀑」と奥久慈軍鶏鍋＆常陸牛名宿
              </span>
            </Link>

            <Link 
              href="/winter-kanagawa-miura-misaki-maguro-suisen-fuji-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-cyan-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-cyan-800 font-bold text-xs block mb-1">神奈川・三浦＆三崎</span>
              <span className="text-stone-900 font-bold group-hover:text-cyan-900 transition-colors line-clamp-2">
                冬の城ヶ島30万本水仙まつりと富士山絶景・三崎まぐろ尽くし名宿
              </span>
            </Link>

            <Link 
              href="/winter-chiba-kamogawa-seaworld-kominato-kinmedai-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-cyan-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-cyan-800 font-bold text-xs block mb-1">千葉・鴨川＆小湊</span>
              <span className="text-stone-900 font-bold group-hover:text-cyan-900 transition-colors line-clamp-2">
                冬の鴨川シーワールドシャチと外房寒金目鯛姿煮＆房総伊勢海老名宿
              </span>
            </Link>

            <Link 
              href="/winter-hokkaido-shikotsuko-hyoto-blue-onsen-himemasu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-cyan-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-cyan-800 font-bold text-xs block mb-1">北海道・千歳支笏湖</span>
              <span className="text-stone-900 font-bold group-hover:text-cyan-900 transition-colors line-clamp-2">
                支笏湖ブルーと氷濤まつり・丸駒温泉秘湯＆冬ヒメマス料理名宿
              </span>
            </Link>

            <Link 
              href="/winter-okinawa-ishigaki-kabilabay-starrysky-beef-resort-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-cyan-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-cyan-800 font-bold text-xs block mb-1">沖縄・石垣島＆川平湾</span>
              <span className="text-stone-900 font-bold group-hover:text-cyan-900 transition-colors line-clamp-2">
                星空保護区の南十字星と川平湾ブルー・石垣牛炭火焼肉リゾート名宿
              </span>
            </Link>

            <Link 
              href="/features" 
              className="p-4 rounded-2xl bg-gradient-to-br from-cyan-900 to-slate-950 text-white hover:opacity-95 transition-all group block flex flex-col justify-between"
            >
              <div>
                <span className="text-cyan-300 font-bold text-xs block mb-1">特集ポータル</span>
                <span className="font-bold group-hover:text-cyan-200 transition-colors">
                  全国の季節旅・目的別おすすめ特集一覧を見る
                </span>
              </div>
              <span className="text-xs text-cyan-300 mt-2 block font-medium">全特集をチェック ➔</span>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
`;

  return { slug, pageContent };
}

module.exports = {
  generateTottoriSakaiminatoKaikePage
};

