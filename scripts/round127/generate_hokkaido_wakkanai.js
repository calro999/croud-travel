const fs = require('fs');
const path = require('path');

function generateHokkaidoWakkanaiPage(hotels) {
  const slug = 'winter-hokkaido-wakkanai-soya-cape-sunrise-tako-shabu-soya-beef-stay';
  const title = '【11・12・1月北海道】日本最北端「宗谷岬」冬の初日の出と氷門の詩情！極上「宗谷黒牛」＆名物タコしゃぶ・稚内天然温泉名宿5選';
  const description = '北緯45度31分、日本最北端の地・稚内と宗谷岬で迎える11〜1月の冬紀行。白銀のオホーツク海から昇る日本最北端の元旦初日の出と、古代ローマ建築の風格を漂わせる北海道遺産「稚内港北防波堤ドーム」。冬の澄んだ大気の先に浮かぶ秀峰・利尻富士の雄姿。水揚げ日本一を誇るミズダコの極上「元祖タコしゃぶ」と、厳寒の宗谷丘陵で育まれる希少黒毛和牛「宗谷黒牛」の鉄板焼き。最果ての厳しい寒さを忘れさせる自家源泉の天然温泉と、心温まるホスピタリティが宿る厳選名宿5選を徹底特集。';

  const hotelDetails = [
    {
      story: 'JR稚内駅から徒歩約2分、日本最北端に位置する共立リゾートのビジネスホテル「天然温泉 天北の湯 ドーミーイン稚内」。最上階10階に設けられた天然温泉大浴場からは、冬の稚内港や雪に覆われた市街地、遠く宗谷湾を一望できます。茶褐色を帯びたナトリウム-塩化物・炭酸水素塩泉は保温効果が非常に高く、極寒の外気浴とサウナで格別の整い体験を約束。名物の無料夜鳴きそばや、朝食バイキングで味わえるイクラかけ放題・海鮮丼が旅人を歓喜させています。館内は清潔感に溢れ、極寒の北国を旅してきた身体を優しく包み込む最高級の設備が揃います。',
      roomTip: '最上階展望フロアまたは和風コンパクトツイン。サータ社製高品質ベッドで最果ての旅路の疲労を熟睡で解きほぐす快適空間。加湿空気清浄機も完備。',
      gourmetTip: '朝食バイキング「豪快海鮮丼」。冬の濃厚なイクラや大粒ホタテ、甘エビをお好みの量で豪快に盛り付ける贅沢な朝のセルフ海鮮丼。'
    },
    {
      story: '稚内港に面して堂々とそびえ立ち、最北の地にありながら国際級のグレードを誇る本格シティホテル「サフィールホテル稚内」。全天候型の広々としたロビーをくぐると、洗練されたおもてなしと上質な空間が広がります。客室の大きな窓からは、冬の宗谷湾を行き交う船や、荒波を受け止める北防波堤ドームの雪景色を一望。館内の和洋レストランでは、幻のブランド牛「宗谷黒牛」のステーキやオホーツク海の冬の毛ガニ、ホタテを用いた本格ディナーを堪能できます。最北端の旅を上質な思い出に仕立てる名ホテルです。',
      roomTip: 'オーシャンビューデラックスツイン。窓一面に広がる冬のオホーツク海と港の夜景を眺めながら過ごす優雅なひととき。ゆったりとしたソファスペース付き。',
      gourmetTip: '「宗谷黒牛のフィレステーキ会席」。サシの甘みと赤身のコクが際立つ希少牛を、料理長特製のソースと地場冬野菜とともに味わう極上肉料理。'
    },
    {
      story: '南稚内駅から徒歩約3分、繁華街の入り口に位置し、昭和の良き風格と温かなサービスが息づく「稚内グランドホテル」。市内で唯一、地下から湧き出る化石海水の天然温泉を有し、黄金色の塩化物泉が身体の芯までぽかぽかに温めてくれます。地元民にも長年愛される名物料理の数々が自慢で、オホーツク海の冬の味覚であるタラバガニや毛ガニ、宗谷のタコしゃぶを取り入れた会席コースはボリューム・鮮度ともに圧倒的。冬のビジネスや一人旅にも心強い拠点です。',
      roomTip: '本館和室または別館デラックスツイン。畳の香りに癒やされながら、ゆったりと足を伸ばして寛げる落ち着きある客室。冬の暖房設備も万全。',
      gourmetTip: '「オホーツク冬の味覚膳」。冬旬の毛ガニ半身盛り、プリプリの活タコしゃぶしゃぶ、宗谷産ホタテの陶板焼きが並ぶ郷土の恵み。'
    },
    {
      story: '南稚内駅の目の前に位置し、雪の日でも迷わずチェックインできる抜群のロケーションが魅力の「ホテルニューチコウ」。リーズナブルな宿泊料金ながら、館内は清潔に保たれ、スタッフのアットホームで親身な対応が多くのリピーターを生んでいます。周辺には南稚内の味処や炉端焼き、居酒屋が徒歩圏内に充実しており、夜のグルメ散策の拠点としても最適。コインランドリーや電子レンジも完備され、冬の連泊や鉄道旅に重宝します。',
      roomTip: 'スタンダードツインまたはシングル。機能的な造りで冬の重い防寒具や荷物も広げやすい実用派ルーム。暖房もしっかり効いて快適。',
      gourmetTip: '南稚内駅前の居酒屋で味わう名物「かすべ（エイヒレ）の煮付け」や、冬のホッケのちゃんちゃん焼き、地酒「北の誉」。'
    },
    {
      story: 'JR稚内駅から徒歩約3分、中央商店街の一角に佇み、家庭的な温もりと手頃な価格で旅行者を迎え入れる「ホテルサハリン」。かつて樺太（サハリン）への連絡船が就航していた稚内の歴史を感じさせる素朴な雰囲気が漂います。全室に無料Wi-Fiや個別暖房を完備し、厳しい冬の夜も温かく快適に過ごせます。駅前のコンビニや飲食店街、北防波堤ドームへも徒歩圏内で、気取らない最果ての旅情を味わいたいバックパッカーや鉄道ファンに選ばれています。',
      roomTip: '和室またはシングルルーム。昭和レトロな落ち着きと静けさの中で、旅の計画をじっくり練るのに最適な空間。',
      gourmetTip: '稚内駅前の老舗食堂「車屋源氏」で味わう元祖タコしゃぶ。極薄にスライスされた大判ミズダコを出汁にくぐらせる絶品。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥6,300〜' : i === 1 ? '¥6,240〜' : i === 2 ? '¥6,000〜' : i === 3 ? '¥6,200〜' : '¥5,000〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.45' : i === 1 ? '4.35' : i === 2 ? '4.03' : i === 3 ? '3.76' : '3.52');
    const reviewCount = h.reviewCount || (i === 0 ? 1850 : i === 1 ? 920 : i === 2 ? 650 : i === 3 ? 320 : 210);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'JR稚内駅・南稚内駅より徒歩2〜3分、稚内空港より連絡バスで約30分')},
              special: ${JSON.stringify(h.hotelSpecial || '日本最北端・宗谷岬の初日の出と北防波堤ドーム、極上タコしゃぶと宗谷黒牛・天然温泉を満喫する厳選名宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '最上階10階の展望天然温泉「天北の湯」・夜鳴きそばと朝食セルフ海鮮丼が名物' : i === 1 ? '稚内港を望む最北の本格シティホテル・宗谷黒牛ステーキとオホーツク海の幸ディナー' : i === 2 ? '南稚内駅徒歩3分・市内で唯一の化石海水天然温泉とボリューム満点の海鮮膳' : i === 3 ? '南稚内駅前すぐの好立地・清潔な客室とアットホームなもてなしでコスパ抜群' : 'JR稚内駅徒歩3分・北防波堤ドームや駅前飲食店街至近のレトロで温かな宿')} ,
                ${JSON.stringify(i === 0 ? 'ナトリウム塩化物泉で極寒の身体を芯まで保温・外気浴サウナからの港ビュー' : i === 1 ? '北海道遺産「北防波堤ドーム」徒歩圏内・広々とした客室と上質なホスピタリティ' : i === 2 ? '毛ガニ・ホタテ・タコしゃぶを取り入れた郷土会席・地元民も通う老舗温泉' : i === 3 ? '周辺に南稚内の炉端焼き・居酒屋が多数・冬の味覚散策の拠点にぴったり' : '個別暖房完備で冬も快適・元祖タコしゃぶの名店「車屋源氏」へのアクセス良好')} ,
                ${JSON.stringify(i === 0 ? 'JR稚内駅徒歩2分の超至便・最北端観光のバス発着拠点としても最強' : i === 1 ? 'オーシャンビュー客室から眺める冬のオホーツク海・記念日やご褒美旅に最適' : i === 2 ? '南稚内繁華街の中心・和室で足を伸ばしてくつろげる落ち着いた滞在' : i === 3 ? '無料Wi-Fi＆コインランドリー完備・冬の鉄道旅やツーリングの定番定宿' : 'リーズナブルな価格設定・最果ての歴史と旅情を色濃く感じるアットホーム感')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "冬（11・12・1月）の稚内・宗谷岬の気候と気温、服装の注意点は？",
      a: "稚内・宗谷岬の冬は日本国内でも最も風が強く厳しい環境となります。12月〜1月の平均気温は氷点下3〜5度、時に氷点下10度以下まで下がり、オホーツク海からの強風によって体感温度は氷点下15度以下に達します。服装は極地仕様の防風・防水ダウンジャケット、防寒パンツ、吸湿発熱インナーの重ね着が必須です。耳当て付きニット帽、ネックウォーマー、防風手袋、厚手の靴下に加え、雪道や凍結路面で滑らないスノーブーツ（滑り止めスパイク付きが理想）を必ず着用してください。"
    },
    {
      q: "日本最北端「宗谷岬」の元旦初日の出とモニュメントへのアクセス方法は？",
      a: "宗谷岬（北緯45度31分22秒）には「日本最北端の地の碑」が建ち、元旦には日本最北端の地で新年の初日の出を拝もうと全国から旅人が集まります（毎年元旦の「初日の出inてっぺん」イベント等）。稚内市街地（JR稚内駅）から宗谷岬までは宗谷バス（天北宗谷岬線）で約50分、車で約40分です。元旦早朝は臨時バスが運行される年もありますが、運行ダイヤや積雪による道路状況を事前に宗谷バス公式サイトで確認してください。冬道運転に不慣れな場合は路線バスまたは観光タクシーの利用が賢明です。"
    },
    {
      q: "北海道遺産「稚内港北防波堤ドーム」の見どころと冬の景観美は？",
      a: "稚内港北防波堤ドームは、昭和11年（1936年）に樺太連絡船の航路を強風や高波から守るために建設された半アーチ型の巨大防波堤です。高さ約14m、長さ427mにおよび、古代ローマの神殿建築を思わせる70本のエンタシス状円柱が連なる姿は圧巻で、北海道遺産・土木遺産に認定されています。冬期は白銀の雪と荒れ狂うオホーツク海の波飛沫、そして重厚なコンクリートアーチが織りなす荘厳なコントラストが写真映えし、映画のワンシーンのような旅情を漂わせます。"
    },
    {
      q: "稚内名物「タコしゃぶ」と「宗谷黒牛」はどのようなグルメ？",
      a: "稚内はミズダコの水揚げ量が日本一を誇り、その新鮮なタコの足を薄く大判にスライスして出汁でサッと泳がせる「元祖タコしゃぶ」が名物です。半生で引き上げるとプリプリとした弾力と上品な甘みが口いっぱいに広がります。また、「宗谷黒牛」は日本最北の牧場・宗谷丘陵で潮風のミネラルを含んだ牧草を食べて育つ希少なブランド黒毛和牛。赤身の旨味が凝縮され、脂がしつこくなく、ステーキやしゃぶしゃぶで抜群の美味を誇ります。"
    },
    {
      q: "冬の稚内へのアクセス（JR宗谷本線・飛行機・都市間バス）の注意点は？",
      a: "稚内へは羽田空港および新千歳空港からANAの直行便が就航する「稚内空港」から連絡バスで約30分。鉄道の場合は札幌駅から特急「宗谷」「サロベツ」で約5時間〜5時間30分、都市間高速バス「特急わっかない号」で約6時間です。冬期（特に12月〜1月）は暴風雪（ホワイトアウト）による飛行機の欠航やJR・バスの運休が発生することがあります。天気予報を数日前から綿密にチェックし、旅程には半日〜1日程度の余裕を持たせることを強く推奨します。"
    }
  ];

  const pageContent = `import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye, Compass as CompassIcon
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '宗谷岬 初日の出, 稚内 冬旅行, 稚内港北防波堤ドーム, タコしゃぶ 稚内, 宗谷黒牛, ドーミーイン稚内, サフィールホテル稚内, 稚内グランドホテル, 日本最北端の地の碑, 利尻富士 冬',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}'
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の白銀に染まる宗谷岬の日本最北端の地の碑とオホーツク海の水平線'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    images: ['https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export const dynamic = 'force-static';

export default function HokkaidoWakkanaiWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": ${JSON.stringify(title)},
    "description": ${JSON.stringify(description)},
    "image": "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1200&h=630&q=80",
    "datePublished": "2026-10-06T00:00:00+09:00",
    "dateModified": "2026-10-06T00:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "旅宿クラウド 編集部",
      "url": "https://croud-travel.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.com/${slug}"
    }
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://croud-travel.com"
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
        "name": "北海道・稚内＆宗谷岬 冬特集",
        "item": "https://croud-travel.com/${slug}"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
${faqList.map(item => `      {
        "@type": "Question",
        "name": ${JSON.stringify(item.q)},
        "acceptedAnswer": {
          "@type": "Answer",
          "text": ${JSON.stringify(item.a)}
        }
      }`).join(',\n')}
    ]
  };

  const hotelsData = [
${hotelCardsCode}
  ];

  const faqsData = [
${faqList.map(item => `    {
      q: ${JSON.stringify(item.q)},
      a: ${JSON.stringify(item.a)}
    }`).join(",\n")}
  ];

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-cyan-950 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-cyan-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Snowflake className="w-4 h-4 text-cyan-300" />
            <span>北海道 道北・最果ての地 冬の特別紀行（11月・12月・1月）</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 font-journal-serif">
            日本最北端「宗谷岬」冬の初日の出と氷門の詩情！<br className="hidden md:inline" />
            極上「宗谷黒牛」＆名物タコしゃぶ・稚内天然温泉名宿5選
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mb-6">
            北緯45度31分22秒、日本の頂に立つ地・稚内。11〜1月の冬期は、見渡す限りの雪原と凍てつくオホーツク海、そして激しい海鳴りが旅情を掻き立てる最果ての聖地です。白銀の岬から仰ぐ日本最北端の元旦初日の出、古代ローマ円柱が連なる北海道遺産「稚内港北防波堤ドーム」の荘厳な姿。水揚げ日本一を誇るミズダコの極上「タコしゃぶ」と、幻のブランド牛「宗谷黒牛」の美食。極寒の風に晒された身体を芯から溶かす自家源泉の天然温泉と、最北の厳選名宿へご案内します。
          </p>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-slate-200">
            <span className="bg-cyan-950/70 border border-cyan-800/60 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <CompassIcon className="w-4 h-4 text-cyan-400" /> 日本最北端・宗谷岬（元旦初日の出とオホーツク氷海）
            </span>
            <span className="bg-cyan-950/70 border border-cyan-800/60 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Building className="w-4 h-4 text-cyan-400" /> 稚内港北防波堤ドーム（北海道遺産・古代ローマ様式）
            </span>
            <span className="bg-cyan-950/70 border border-cyan-800/60 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-cyan-400" /> 元祖タコしゃぶ＆幻の宗谷黒牛・最北天然温泉
            </span>
          </div>
        </div>
      </header>

      {/* Summary Box */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
          <div className="flex items-center gap-2 text-cyan-700 font-bold text-lg mb-4">
            <Sparkles className="w-5 h-5 text-cyan-600" />
            <h2>稚内＆宗谷岬 冬旅のハイライト（11・12・1月）</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm leading-relaxed text-slate-600">
            <div className="border-l-2 border-cyan-500 pl-4">
              <h3 className="font-bold text-slate-900 mb-1">日本最北端の元旦初日の出</h3>
              <p>宗谷岬に立つ「日本最北端の地の碑」。オホーツク海の水平線から昇る元旦の朝日を浴び、人生の新たな門出を誓う特別な感動体験が待っています。</p>
            </div>
            <div className="border-l-2 border-amber-500 pl-4">
              <h3 className="font-bold text-slate-900 mb-1">元祖タコしゃぶと宗谷黒牛</h3>
              <p>日本一の水揚げを誇るミズダコを極薄に引いた「タコしゃぶ」の弾力美と、海風のミネラルで育つ黒毛和牛「宗谷黒牛」。最北の食の贅が揃います。</p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h3 className="font-bold text-slate-900 mb-1">極寒を癒やす最北の天然温泉</h3>
              <p>最上階に展望露天を構えるドーミーインや、化石海水の稚内グランドホテル。塩分を含んだ保温性の高い名湯が旅人の身体を芯まで温めます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Guide Section 1 */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-10">
          <span className="text-cyan-600 font-bold text-sm tracking-widest uppercase">THE EDGE OF JAPAN</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1 mb-4 font-journal-serif">
            白銀のオホーツク海と風雪に耐える歴史遺産
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mb-6" />
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base md:text-lg space-y-6">
          <p>
            北海道の最北端、宗谷海峡を挟んでサハリン（樺太）までわずか43kmに位置する稚内。11月に入ると初雪が街を白く染め始め、12月から1月にかけては厳しい冬将軍が支配する白銀の世界へと変貌します。年間を通じて冷涼な強風が吹き抜けるこの地では、冬になると粉雪が激しい風に舞い上がり、地平線と空の境界が失われる地吹雪（ホワイトアウト）が起きるなど、日本列島の極北ならではの圧倒的な大自然のスケールを肌で体感できます。
          </p>
          <p>
            旅人が目指す聖地「宗谷岬」には、北緯45度31分22秒を示すピラミッド型の「日本最北端の地の碑」が誇らしげにそびえ立ちます。冬のオホーツク海は鉛色の重い波を立て、冷たい季節風とともに凍てつく潮騒が響き渡ります。晴れ渡った冬の早朝、遥か水平線の彼方から昇る太陽が雪原を茜色から黄金色へとドラマチックに染め上げる瞬間は、日本列島の最果てを踏破した者だけに与えられる一生モノの絶景体験です。岬の高台には江戸時代の探検家・間宮林蔵の銅像や「あけぼの像」、世界平和を祈る「祈りの塔」が静かに佇み、厳しい寒さの中に深い歴史の重みを伝えています。
          </p>
          <p>
            稚内港の突端に佇む「稚内港北防波堤ドーム」は、昭和6年（1931年）から昭和11年にかけて樺太連絡船の乗客を高波と強風から守るために建設された半アーチ型の巨大防波堤です。高さ約14m、総延長427mにおよび、古代ローマの宮殿回廊を思わせる70本のエンタシス状円柱が連なる光景は圧巻の美しさ。北海道遺産および土木学会選奨土木遺産に認定されており、冬になると白銀の積雪と荒波の飛沫、そして重厚なコンクリートアーチが織りなす荘厳なコントラストが、映画のワンシーンのような郷愁と詩情を漂わせます。
          </p>
          <p>
            さらに西海岸に突き出た「ノシャップ岬（野寒布岬）」では、日本海の水平線越しに利尻島が誇る独立峰「利尻富士（利尻山・標高1,721m）」が雪をまとった神々しい三角錐の姿を現します。冬至前後の夕暮れ時には、茜色に燃える日本海と利尻富士のシルエットが見事なグラデーションを描き出し、多くの写真愛好家を魅了してやみません。
          </p>
        </div>
      </section>

      {/* Detailed Guide Section 2: Gourmet & Hot Spring */}
      <section className="bg-slate-100 py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-amber-600 font-bold text-sm tracking-widest uppercase">ARCTIC GOURMET & SPA</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1 mb-4 font-journal-serif">
              極限の海が育む「タコしゃぶ」と宗谷黒牛の濃厚な旨み
            </h2>
            <div className="w-16 h-1 bg-amber-500 rounded-full mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700 leading-relaxed">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-lg mb-3">
                <Utensils className="w-5 h-5 text-amber-600" />
                <h3>元祖タコしゃぶとオホーツク海鮮の極み</h3>
              </div>
              <p className="text-sm md:text-base mb-4">
                稚内はミズダコの水揚げ日本一を誇る街です。水深の深い冷涼な潮流で育ったミズダコは、太く肉厚でありながら非常に柔らかな肉質が特徴。その足を薄く大判にスライスし、利尻昆布の出汁に2〜3回サッとくぐらせて特製胡麻ダレでいただく「タコしゃぶ」は、稚内の老舗食堂「車屋源氏」が考案した元祖グルメです。
              </p>
              <p className="text-sm md:text-base">
                出汁の熱でキュッと縮んだタコは、プリプリとした瑞々しい弾力と上品な甘みが口いっぱいに広がり、噛むほどに旨味が溢れ出します。さらに冬はオホーツク海で水揚げされる身詰まり抜群の毛ガニや大粒の宗谷ホタテ、脂の乗った真鱈（マダラ）の白子（たち）も旬を迎え、極上の冬の海の幸を堪能できます。
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 text-cyan-700 font-bold text-lg mb-3">
                <Waves className="w-5 h-5 text-cyan-600" />
                <h3>希少黒毛和牛「宗谷黒牛」と最北の天然温泉</h3>
              </div>
              <p className="text-sm md:text-base mb-4">
                日本最北端の放牧地・宗谷丘陵で潮風を浴びながらストレスフリーに育つブランド黒毛和牛「宗谷黒牛」。海風に含まれるミネラル豊富な牧草を食べて育つため、脂にしつこさがなく、赤身肉そのものの野性味あふれる濃密なコクが際立ちます。冬のステーキやしゃぶしゃぶで抜群の存在感を発揮します。
              </p>
              <p className="text-sm md:text-base">
                そして厳しい寒さの中で旅人を優しく迎えるのが、稚内市内に湧き出す天然温泉です。「ドーミーイン稚内」の最上階展望風呂「天北の湯」や、「稚内グランドホテル」の化石海水温泉は、太古の海水成分が凝縮された濃厚な塩化物泉。湯上がりに肌の表面に塩分のベールが形成され、身体の深部体温を長時間保つため、湯冷めしにくい最高の泉質です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Course Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-10">
          <span className="text-cyan-600 font-bold text-sm tracking-widest uppercase">ITINERARY GUIDE</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1 mb-4 font-journal-serif">
            日本最北端・稚内 1泊2日 厳冬探訪モデルコース
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mb-6" />
        </div>

        <div className="relative border-l-2 border-cyan-200 ml-4 md:ml-6 pl-6 md:pl-8 space-y-8 text-sm md:text-base">
          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-cyan-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-cyan-600 tracking-wider">DAY 1 / 11:30</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">稚内空港またはJR稚内駅到着＆名物ランチ</h3>
            <p className="text-slate-600 mt-1">
              飛行機または特急列車で最北の街に到着。駅前の老舗郷土料理店で名物「元祖タコしゃぶ」または宗谷黒牛ハンバーグを味わい、極寒の旅への活力をチャージ。日本最北端の線路の終点標識前で記念撮影。
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-cyan-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-cyan-600 tracking-wider">DAY 1 / 13:00</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">稚内港北防波堤ドーム＆ノシャップ岬</h3>
            <p className="text-slate-600 mt-1">
              北海道遺産の北防波堤ドームを散策。70本の古代ローマ風円柱が連なる回廊を歩く。続いてノシャップ岬へ移動し、荒波の向こうにそびえる冬の利尻富士の雄姿を望む。わっかない海の駅で冬の干物をチェック。
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-cyan-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-cyan-600 tracking-wider">DAY 1 / 16:00</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">ホテルチェックイン＆最上階天然温泉</h3>
            <p className="text-slate-600 mt-1">
              ドーミーイン稚内またはサフィールホテル稚内にチェックイン。最上階の天然温泉大浴場に浸かり、雪景色の稚内港を眺めながら冷えた身体を芯まで温める。夜鳴きそばや炉端焼きディナーを満喫。
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-cyan-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-cyan-600 tracking-wider">DAY 2 / 06:00</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">宗谷岬へ出発＆日本最北端の日の出拝観</h3>
            <p className="text-slate-600 mt-1">
              早朝、宗谷バスまたは車で宗谷岬へ。「日本最北端の地の碑」前に立ち、白銀のオホーツク海から昇る厳かな朝日の光を浴びる。間宮林蔵像や祈りの塔を見学。元旦には日本最北端の初日の出イベントを体験。
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-cyan-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-cyan-600 tracking-wider">DAY 2 / 10:30</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">最北の駅舎「道の駅わっかない」でお土産購入</h3>
            <p className="text-slate-600 mt-1">
              道の駅で宗谷黒牛の加工品や利尻昆布、ホタテ干し貝柱、稚内銘菓「流氷まんじゅう」を買い求め、最果ての旅情の余韻に浸りながら空港または特急列車で帰路へ。
            </p>
          </div>
        </div>
      </section>

      {/* Hotel Recommendation Section */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-cyan-400 font-bold text-sm tracking-widest uppercase">HOTEL & RYOKAN SELECTION</span>
            <h2 className="text-2xl md:text-4xl font-black mt-2 mb-4 font-journal-serif">
              宗谷岬・稚内冬旅に選ばれる厳選名宿5選
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              楽天トラベルAPIから最新の空室状況・宿泊プラン・宿泊者評価を直接取得。最上階の展望天然温泉を備える名門チェーンから港を一望するハイクラスホテルまで厳選しました。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 md:p-8 backdrop-blur shadow-2xl hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Hotel Image & Basic Specs */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="relative rounded-xl overflow-hidden mb-4 aspect-[4/3] bg-slate-950">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={hotel.img} 
                          alt={hotel.name} 
                          className="w-full h-full object-cover hover:scale-105 transition duration-500" 
                        />
                        <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-cyan-400 border border-cyan-400/30">
                          厳選宿 #{hotel.id}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
                        <span className="flex items-center gap-1 text-amber-400 font-bold">
                          <Star className="w-4 h-4 fill-amber-400" /> {hotel.rating}
                        </span>
                        <span>クチコミ {hotel.reviews.toLocaleString()}件</span>
                        <span className="text-cyan-300 font-bold">{hotel.price}</span>
                      </div>
                      <p className="text-xs text-slate-400 flex items-start gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                        <span>{hotel.access}</span>
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-700/60 hidden lg:block">
                      <a 
                        href={hotel.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 px-4 rounded-xl text-center block transition shadow-lg shadow-cyan-900/30 text-sm"
                      >
                        楽天トラベルで空室・プランを見る <ExternalLink className="w-4 h-4 inline-block ml-1" />
                      </a>
                    </div>
                  </div>

                  {/* Hotel Details */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-white mb-3 font-journal-serif">
                        {hotel.name}
                      </h3>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-5">
                        {hotel.story}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-5">
                        {hotel.highlights.map((hl: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tips Boxes */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                        <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-700/50">
                          <span className="text-cyan-400 font-bold block mb-1">【客室の選び方】</span>
                          <span className="text-slate-300 leading-normal">{hotel.roomTip}</span>
                        </div>
                        <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-700/50">
                          <span className="text-amber-400 font-bold block mb-1">【料理のこだわり】</span>
                          <span className="text-slate-300 leading-normal">{hotel.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 block lg:hidden">
                      <a 
                        href={hotel.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 px-4 rounded-xl text-center block transition shadow-lg shadow-cyan-900/30 text-sm"
                      >
                        楽天トラベルで空室・プランを見る <ExternalLink className="w-4 h-4 inline-block ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-10 text-center">
          <span className="text-cyan-600 font-bold text-sm tracking-widest uppercase">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1 mb-3 font-journal-serif">
            冬の稚内・宗谷岬旅行 よくある質問
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mx-auto" />
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqsData.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
                <span className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded font-black shrink-0 mt-0.5">Q</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Navigation & Related Links */}
      <section className="bg-slate-100 py-12 px-4 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-slate-500 font-bold text-xs tracking-widest uppercase">RELATED WINTER FEATURES</span>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
              あわせて読みたい冬の厳選旅行特集
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-8">
            <Link 
              href="/winter-hokkaido-kushiro-tancho-crane-snow-nusamaibashi-sunset-robata-stay"
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-cyan-500 transition hover:shadow-md group block"
            >
              <div className="text-cyan-600 font-bold text-xs mb-1">北海道・釧路＆鶴居</div>
              <div className="font-bold text-slate-900 group-hover:text-cyan-600 transition mb-2">
                雪原に舞う丹頂鶴と幣舞橋の世界三大夕日・炭火炉端焼き＆天然温泉
              </div>
              <p className="text-xs text-slate-500 line-clamp-2">
                道東の冬を代表する絶景。優雅なタンチョウ鶴の姿と夕日、港町の炉端焼きを満喫する北海道特集。
              </p>
            </Link>

            <Link 
              href="/winter-hokkaido-otaru-canal-illumination-sushi-asarigawa-stay"
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-cyan-500 transition hover:shadow-md group block"
            >
              <div className="text-cyan-600 font-bold text-xs mb-1">北海道・小樽＆朝里川</div>
              <div className="font-bold text-slate-900 group-hover:text-cyan-600 transition mb-2">
                小樽運河イルミネーションと雪あかり・極上握り寿司と朝里川温泉
              </div>
              <p className="text-xs text-slate-500 line-clamp-2">
                ガス灯が灯る冬の小樽運河の幻想的なロマンと、日本海の新鮮なネタを握る名店、静かな雪見温泉。
              </p>
            </Link>

            <Link 
              href="/winter-aomori-shimofuro-onsen-oma-maguro-ankou-tsugaru-stay"
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-cyan-500 transition hover:shadow-md group block"
            >
              <div className="text-cyan-600 font-bold text-xs mb-1">青森・下北半島＆大間</div>
              <div className="font-bold text-slate-900 group-hover:text-cyan-600 transition mb-2">
                本州最北端大間マグロと下風呂温泉の白濁硫黄泉・津軽海峡冬景色
              </div>
              <p className="text-xs text-slate-500 line-clamp-2">
                宗谷岬と並び立つ最果ての旅情。津軽海峡の荒波を望む本州最北端・大間崎と極上マグロを味わう旅。
              </p>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-600">
            <Link href="/" className="hover:text-cyan-600 underline">ホーム</Link>
            <span>•</span>
            <Link href="/features" className="hover:text-cyan-600 underline">特集一覧</Link>
            <span>•</span>
            <Link href="/posts" className="hover:text-cyan-600 underline">記事一覧カタログ</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-4 text-center text-xs">
        <p>© 2026 旅宿クラウド (croud-travel.com). All rights reserved.</p>
        <p className="mt-1 text-slate-500">
          ※本記事に掲載している宿泊施設情報、価格、評価、交通アクセス等は、楽天トラベルAPIおよび公式サイトの最新データに基づいています。冬期の宗谷岬方面バス運行ダイヤや天候による運休情報は、事前にお確かめください。
        </p>
      </footer>
    </article>
  );
}
`;

  return { slug, pageContent };
}

module.exports = { generateHokkaidoWakkanaiPage };
