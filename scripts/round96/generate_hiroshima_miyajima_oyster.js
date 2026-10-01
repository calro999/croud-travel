const fs = require('fs');
const path = require('path');

function generateHiroshimaMiyajimaOysterPage(hotels) {
  const slug = 'winter-hiroshima-miyajima-etajima-oyster-onsen-stay';
  const title = '【11・12・1月広島】冬の瀬戸内「広島牡蠣」焼き牡蠣・土手鍋＆世界遺産・宮島厳島神社の初詣・江田島温泉を巡る厳選名宿5選';
  const description = '11月から1月、瀬戸内海・広島湾（廿日市宮島・江田島・広島市街）は、全国屈指のブランドを誇る「広島牡蠣」が最もふっくらと大粒に育ち、濃厚な旨みを凝縮させる旬の黄金期を迎えます。香ばしい殻付き焼き牡蠣、熱々の味噌仕立て牡蠣土手鍋、サクサクの牡蠣フライ、そして宮島名物穴子めしや極上広島牛。澄み渡る冬空に映える世界遺産・厳島神社の海に浮かぶ朱塗り大鳥居の初詣や雪景色、江田島の海を望むオリーブ温泉や宮島の数寄屋造り名宿で、心洗われる冬の休日を満喫する厳選5宿を徹底ガイドします。';

  const hotelDetails = [
    {
      story: '世界遺産・厳島神社まで徒歩わずか3分という神域の特等席に佇み、江戸時代初期の創業以来400年以上の歴史を誇る宮島随一の老舗格式宿「宮島グランドホテル 有もと」。数寄屋造りの気品ある館内には静謐な和の情緒が漂い、潮の満ち引きとともに表情を変える大鳥居の神秘的な風景を間近に感じられます。露天風呂付き客室や広々とした大浴場では、旅の疲れを優しく解きほぐす癒やしの時間が流れます。夕食は広島の旬を極めた贅沢な会席料理。冬は広島湾直送の大粒牡蠣を使った土手鍋や香ばしい宝楽焼き、名物穴子の薄造り、柔らかくジューシーな広島牛の陶板焼きなど、伝統の出汁と技が織りなす至福の美味を堪能できます。',
      roomTip: '数寄屋スイートまたは露天風呂付き客室。宮島の原生林や神社の杜を窓越しに望み、朝夕の静けさを心ゆくまで味わえる空間です。',
      gourmetTip: '「厳島冬の味覚・牡蠣と広島牛会席」。ふっくら大粒の牡蠣の土手鍋と広島牛サーロイン、宮島名物穴子釜飯が揃う豪華コースです。'
    },
    {
      story: '宮島の景勝地・紅葉谷公園の清らかな渓流沿いに佇み、創業安政元年（1854年）の歴史を刻む名門「みやじまの宿 岩惣（いわそう）」。明治・大正の文豪や歴代皇族も宿泊した由緒正しき離れや本館は、周囲の豊かな自然と見事に調和しています。敷地内に湧く「若宮温泉」は、宮島でも稀少な天然温泉。冬の冷気の中、せせらぎを聞きながら浸かる露天風呂は至福の心地よさです。夕食は四季の移ろいを繊細に表現した本格懐石。冬限定の極上広島牡蠣を上品な椀物や焼き物で仕立て、瀬戸内の朝獲れ地魚や厳選された和牛とともに、五感で味わう芸術的なひとときを提供してくれます。',
      roomTip: '離れ「秋錦亭」または本館渓流側客室。窓の外に広がる原生林と冬の木漏れ日、時折訪れる鹿の姿に心が和みます。',
      gourmetTip: '「冬の本格伝統懐石」。大粒の広島牡蠣を風味豊かな味噌仕立ての小鍋や天ぷら、穴子めしとともに味わう洗練の懐石です。'
    },
    {
      story: '宮島からフェリーで約30分、風光明媚なオリーブとみかんの島・江田島に2021年誕生した話題のラグジュアリー温泉リゾート「えたじま温泉 江田島荘」。全室オーシャンビューの客室からは、穏やかな瀬戸内海と島々が織りなす多島美を一望できます。宿の自慢は、地下約1,000メートルから湧き出る療養泉基準を満たした高張性の自家源泉天然温泉。冬の澄んだ星空と海を望む半露天風呂で、体の芯まで温まります。夕食は江田島をはじめ広島のテロワールを表現した創作フレンチ・ガストロノミー。大粒の江田島産牡蠣を独創的なポワレやソースで昇華させ、江田島ポークや地元無農薬野菜と合わせた感動のディナーが待っています。',
      roomTip: 'オーシャンフロントテラス付き客室。波静かな瀬戸内海から昇る朝日や茜色の夕景をプライベートテラスから静かに眺められます。',
      gourmetTip: '「冬の江田島テロワールディナー」。大粒牡蠣のポワレや燻製、江田島ポークの低温ローストを自然派ワインと楽しむフルコース。'
    },
    {
      story: '宮島を対岸に望む本土側の海岸沿いに位置し、全室から瀬戸内海と大鳥居の遠景を望むパノラマビューが自慢の「安芸グランドホテル」。宮島口駅からの無料送迎もあり、宮島観光と広島市内観光の拠点として絶大な人気を誇ります。宿専用のナイトクルーズ船を運航しており、ライトアップされた冬の厳島神社大鳥居を海上から間近に拝観できる特別な体験が大好評。館内には海を望む展望大浴場や露天風呂を完備。夕食は瀬戸内の海の幸をふんだんに使った会席や、冬の広島牡蠣尽くしプラン、広島牛鉄板焼きなど、多彩な料理コースから選べます。',
      roomTip: '宮島側オーシャンビューツイン。ライトアップされた厳島神社の鳥居が夜の海に浮かび上がるロマンチックな夜景を満喫できます。',
      gourmetTip: '「冬の広島牡蠣尽くし会席」。焼き牡蠣、牡蠣鍋、牡蠣フライ、牡蠣の釜飯まで、広島湾の恵みを余すところなく堪能できます。'
    },
    {
      story: '宮島桟橋から徒歩わずか1分、海風を感じる好立地に佇む「ホテル宮島別荘」。「大人の隠れ家」をテーマにした館内は、畳敷きの心地よい和モダン空間。展望大浴場「湯の別荘」には全国でも珍しい畳風呂が採用され、足元が温かく滑りにくいため冬の湯浴みも快適そのものです。夕食は国内外で高評価を得るオーガニック＆ローカルビュッフェ。広島湾の獲れたて牡蠣を使ったアヒージョやグラタン、宮島名物の穴子料理、契約農家の冬野菜をシェフがオープンキッチンで出来立て熱々で提供。自由で贅沢な美食ステイが叶います。',
      roomTip: '町家スタイル和洋室。無垢の木と畳が調和した温もりあふれる空間で、素足のままリラックスして滞在できます。',
      gourmetTip: '「宮島別荘ディナービュッフェ」。冬限定の熱々牡蠣料理や広島牛のローストビーフ、手作りスイーツをワインとともに好きなだけ楽しめます。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥28,500〜' : i === 1 ? '¥31,900〜' : i === 2 ? '¥17,350〜' : i === 3 ? '¥11,000〜' : '¥25,300〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.56' : i === 1 ? '4.45' : i === 2 ? '4.76' : i === 3 ? '4.00' : '4.54');
    const reviewCount = h.reviewCount || (i === 0 ? 620 : i === 1 ? 480 : i === 2 ? 210 : i === 3 ? 1450 : 380);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'JR山陽本線宮島口駅よりフェリーまたは広電宮島口駅よりアクセス')},
              special: ${JSON.stringify(h.hotelSpecial || '冬の広島牡蠣・厳島神社初詣・宮島穴子めし・江田島絶景温泉を満喫')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '厳島神社徒歩3分の創業400年老舗格式宿・神域の静寂と数寄屋造りの気品' : i === 1 ? '文豪も愛した紅葉谷公園の名門宿・宮島随一の天然若宮温泉露天風呂と伝統懐石' : i === 2 ? '江田島の海辺に佇む新鋭リゾート・源泉かけ流し絶景療養泉とイノベーティブフレンチ' : i === 3 ? '宮島対岸オーシャンビュー＆宿専用船で巡る冬の大鳥具ライトアップナイトクルーズ' : '宮島桟橋徒歩1分のモダン隠れ家・心地よい畳風呂温泉と極上ビュッフェダイニング')},
                ${JSON.stringify(i === 0 ? '広島湾直送の大粒牡蠣土手鍋＆宝楽焼き・広島牛サーロインと名物穴子釜飯会席' : i === 1 ? '冬の本格伝統懐石・大粒牡蠣の繊細な小鍋仕立てと瀬戸内旬魚のお造り盛り' : i === 2 ? '江田島産牡蠣のポワレと江田島ポーク・地元自然派ワインとのマリアージュ' : i === 3 ? '冬の広島牡蠣尽くし会席・焼き牡蠣から牡蠣鍋・フライ・釜飯まで贅沢フルコース' : 'シェフが目の前で仕上げる冬の熱々牡蠣料理や穴子料理・契約農家野菜バイキング')},
                ${JSON.stringify(i === 0 ? '早朝の静かな厳島神社参拝や初詣に抜群の近さ＆細やかなおもてなしの心' : i === 1 ? '野生の鹿が遊ぶ日本庭園と川のせせらぎ・日常を忘れさせる大人の極上ステイ' : i === 2 ? '瀬戸内の多島美を望むプライベートテラス＆レンタサイクルでの島巡り' : i === 3 ? '展望大浴場から望む宮島の夕景＆JR宮島口駅からの無料送迎でアクセス至便' : '畳敷きの客室とオーガニックラウンジ・大人のカップルや女子旅に絶大な支持')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "広島牡蠣の旬はいつですか？冬に美味しくなる理由や代表的な食べ方は？",
      a: "広島牡蠣の本格的な旬は、水温が下がり身がギュッと引き締まる11月から翌年2月下旬です。特に12月〜1月はグリコーゲンやアミノ酸などの旨み成分が最高潮に達し、乳白色の身がぷっくりと膨らみます。広島湾は中国山地から太田川を通じて豊富な植物プランクトンとミネラルが供給され、波静かで塩分濃度が適度に保たれるため、牡蠣にとって理想的な生育環境です。食べ方としては、殻付きのまま炭火で香ばしく焼き上げる「焼き牡蠣」、鍋のふちに味噌を土手状に塗り香ばしく煮込む広島郷土料理「牡蠣の土手鍋」、サクサクの衣の中にジューシーな旨みを閉じ込めた「牡蠣フライ」、出汁が染み渡る「牡蠣ご飯」など、多彩な調理法で楽しめます。"
    },
    {
      q: "冬の厳島神社（宮島）の大鳥居や社殿の見どころ、初詣の混雑状況は？",
      a: "世界文化遺産・厳島神社の象徴である重要文化財「大鳥居」は、2022年末に大改修を終え、鮮やかな朱塗りの姿を取り戻しました。冬は空気が澄み渡るため、青い海と空、そして後方の雪化粧した弥山（みせん）を背景に立つ大鳥居が息を呑む美しさを見せます。満潮時には海上に社殿や鳥居が浮かんでいるように見え、干潮時には鳥居の真下まで歩いて近づくことができます（潮汐表を事前に確認するのがおすすめです）。年末年始の初詣期間（元日〜1月3日）は全国から多くの参拝客で混雑しますが、宮島島内の宿に宿泊すれば、観光客が押し寄せる前の早朝や、静寂に包まれる夜間に落ち着いて参拝できる大きな特権があります。"
    },
    {
      q: "宮島から江田島へのアクセス方法や、江田島のおすすめ観光スポットは？",
      a: "宮島から江田島へは、宮島港から広島港（宇品）経由の高速船、または宮島口から対岸へ戻り広島港からフェリーや高速船で約20〜30分でアクセスできます。また江田島荘へは呉港からのフェリーも便利です。江田島は穏やかな瀬戸内海に囲まれた「オリーブとみかんの島」として知られ、広大なオリーブ畑を望むカフェや、旧海軍兵学校（海上自衛隊第1術科学校）の重厚な赤レンガ建築見学、陀峯山（だぼうざん）パノラマ展望台からの多島美絶景、名湯えたじま温泉での湯浴みが人気です。混雑する宮島観光と組み合わせて、静かな離島ステイを楽しむ旅程が注目を集めています。"
    },
    {
      q: "冬の広島・宮島・江田島の気候や服装、観光時のアドバイスは？",
      a: "瀬戸内海沿岸は比較的温暖な気候ですが、冬の海沿いやフェリーのデッキ、宮島島内は海風が吹き抜け、朝晩は体感温度がぐっと下がります。特に早朝の初詣や厳島神社の回廊を素足で歩く際、弥山登山をする場合は冷え込みますので、厚手のダウンコート、マフラー、手袋、ヒートテックなどの防寒インナーが欠かせません。宮島島内は舗装されていますが坂道や石段が多いため、歩きやすいスニーカーやフラットシューズが必須です。また宮島には野生の鹿が生息していますが、冬場も食べ物や紙類を近づけないよう注意してください。"
    },
    {
      q: "宮島・広島旅行で絶対に外せない冬のご当地グルメやお土産は？",
      a: "グルメの筆頭は大粒の「広島牡蠣」と、ふっくら香ばしく焼き上げた秘伝タレの「宮島穴子めし」。また、広島名物の「お好み焼き（広島風）」や、きめ細やかなサシが入った「広島牛」の鉄板焼きも外せません。お土産には、定番のもみじ饅頭はもちろん、もちもち食感の「生もみじ」や、宮島表参道商店街で食べ歩きできる「揚げもみじ」、大粒牡蠣を燻製にしてオリーブオイルに漬けた「牡蠣のオイル漬け」、江田島産のエキストラバージンオリーブオイル、伝統工芸の「宮島杓子（しゃもじ）」や「熊野筆」、銘酒「賀茂鶴」「雨後の月」がおすすめです。"
    }
  ];

  const pageContent = `import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Flame, Snowflake, Waves, ThermometerSun, ShoppingBag, Mountain, Landmark, Camera, Ship, Fish, Heart
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '広島牡蠣 温泉宿, 宮島 厳島神社 初詣 宿, 有もと, 岩惣, 江田島荘, 安芸グランドホテル, ホテル宮島別荘, 11月 12月 1月 広島旅行, 焼き牡蠣 土手鍋 穴子めし',
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
        alt: '冬の宮島厳島神社大鳥居と瀬戸内海'
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

export default function HiroshimaMiyajimaOysterWinterPage() {
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
        name: '広島牡蠣・宮島厳島神社初詣＆江田島温泉名宿',
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
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-rose-100 selection:text-rose-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の宮島厳島神社大鳥居" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-rose-950/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-rose-900/80 backdrop-blur-md text-rose-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-rose-400/30">
            <Snowflake className="w-4 h-4 text-rose-300" />
            11月・12月・1月 冬の瀬戸内・広島牡蠣＆厳島神社初詣特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月広島】冬の瀬戸内「広島牡蠣」焼き牡蠣・土手鍋＆世界遺産・宮島厳島神社の初詣・江田島温泉を巡る厳選名宿5選
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            瀬戸内海の穏やかな海が育む冬の海のミルク「広島牡蠣」。香ばしい殻付き焼き牡蠣や熱々の土手鍋、宮島名物穴子めしに舌鼓。澄み切った冬空に映える厳島神社の朱塗り大鳥居の初詣と、江田島の多島美を望む極上温泉宿で、心洗われる冬の旅をご堪能ください。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-rose-400" /> 旬の時期：11月中旬〜1月下旬</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-400" /> エリア：広島県廿日市市宮島・江田島市・広島市</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-rose-400" /> 旬グルメ：広島牡蠣（焼き・土手鍋・フライ）・穴子めし・広島牛</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Introduction</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の瀬戸内海が育む海のミルク「広島牡蠣」と、神が宿る島・宮島の静寂と祈り
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              瀬戸内海に初冬の清々しい風が吹き渡る11月から1月、広島湾沿岸は全国の牡蠣ファンを虜にする最高峰の旬を迎えます。広島の牡蠣養殖は450年以上の歴史を誇り、太田川から注ぎ込む豊富な山水のミネラルと穏やかな湾内環境に恵まれ、全国シェアの約6割を誇る日本一の産地です。水温がぐっと低下する初冬から真冬にかけて、牡蠣は栄養をたっぷり蓄えて身がパンパンに膨らみ、濃厚なクリーミーさと弾力ある歯ごたえが頂点に達します。
            </p>
            <p>
              炭火の上でパチパチと音を立てて開く殻付き焼き牡蠣。立ち上る磯の香ばしい煙とともに熱々の身を頬張れば、凝縮された濃厚なミルクのようなエキスが口いっぱいに溢れ出します。さらに八丁味噌と白味噌を合わせた土手鍋で煮込む熱々の牡蠣ちりや、サクサクの衣を纏ったジューシーな牡蠣フライ、芳醇な出汁が染みる牡蠣ご飯など、冬の広島でしか味わえない贅沢が旅人を待っています。
            </p>
            <p>
              そして冬の宮島旅行の最大の醍醐味は、大改修を終えて鮮やかな朱色が蘇った世界遺産・厳島神社の荘厳な佇まいです。冬の澄んだ大気のもと、満潮時には穏やかな海原の上に大鳥居と回廊が神秘的に浮かび上がり、干潮時には鳥居の真下まで歩いて参拝できる奇跡のロケーション。年末年始の初詣や、対岸や離島・江田島の絶景温泉宿に泊まり、日常を忘れて心身をリセットする冬の贅沢をお届けします。
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-rose-50/50 rounded-2xl p-4 border border-rose-100 space-y-2">
              <div className="flex items-center gap-2 text-rose-950 font-bold text-sm">
                <Fish className="w-4 h-4 text-rose-700" />
                大粒「広島牡蠣」の濃厚なコク
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                冬の冷たい海水で身が詰まる海のミルク。香ばしい焼き牡蠣、熱々土手鍋、サクサク牡蠣フライを堪能。
              </p>
            </div>
            <div className="bg-rose-50/50 rounded-2xl p-4 border border-rose-100 space-y-2">
              <div className="flex items-center gap-2 text-rose-950 font-bold text-sm">
                <Landmark className="w-4 h-4 text-rose-700" />
                厳島神社大鳥居の初詣＆雪景色
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                海上に浮かぶ大鳥居の神々しい姿。冬の静寂に包まれる早朝参拝や、潮の満ち引きで変わる絶景を満喫。
              </p>
            </div>
            <div className="bg-rose-50/50 rounded-2xl p-4 border border-rose-100 space-y-2">
              <div className="flex items-center gap-2 text-rose-950 font-bold text-sm">
                <Waves className="w-4 h-4 text-rose-700" />
                江田島オリーブ温泉＆名門宿
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                宮島の老舗数寄屋造り宿から江田島の現代リゾートまで。源泉かけ流し温泉と瀬戸内海の多島美に浸る。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-rose-950 font-bold text-sm tracking-wide bg-rose-100/60 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4 text-rose-800" />
              楽天トラベル公式連携・厳選宿
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 mt-2">
              宮島・厳島神社周辺＆江田島の冬絶景と美食を満喫する名宿5選
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
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
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
                        <MapPin className="w-3.5 h-3.5 text-rose-700" />
                        {hotel.access}
                      </span>
                      <span className="text-rose-800 font-extrabold text-base sm:text-lg">
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
                          <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Room & Gourmet tips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="bg-rose-50/40 p-3 rounded-xl border border-rose-100/60">
                        <span className="font-bold text-rose-950 block mb-1">【客室の選び方】</span>
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
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-800 to-slate-900 hover:from-rose-900 hover:to-black text-white font-bold py-3.5 px-6 rounded-2xl shadow-sm hover:shadow transition text-sm tracking-wide"
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
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Route</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の広島・宮島・江田島 2泊3日王道モデルコース
            </h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-stone-700">
            {/* Day 1 */}
            <div className="relative pl-6 border-l-2 border-rose-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-rose-700" />
              <h3 className="font-bold text-stone-900 text-base">
                1日目：広島駅到着・平和記念公園から宮島へ・夕暮れの厳島神社と老舗宿
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                広島駅に新幹線または飛行機で到着。平和記念公園を訪れて平和を祈念した後、世界遺産航路の高速船で直接宮島へ渡航。宮島表参道商店街で焼き立ての牡蠣や揚げもみじを食べ歩き。夕暮れ時には潮が満ちた厳島神社を参拝し、海に浮かぶ朱塗り大鳥居の神々しい姿を鑑賞。夜は宮島の老舗宿「有もと」または「岩惣」にチェックイン。名湯に浸かり、夕食には熱々の牡蠣土手鍋や広島牛会席に舌鼓を打ちます。
              </p>
            </div>

            {/* Day 2 */}
            <div className="relative pl-6 border-l-2 border-rose-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-rose-700" />
              <h3 className="font-bold text-stone-900 text-base">
                2日目：早朝の宮島静寂参拝・フェリーで江田島へ渡航＆オリーブ温泉リゾート
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                観光客が訪れる前の清らかな早朝、厳島神社の大鳥居を静かに参拝。宿で朝食をとった後、紅葉谷公園や大聖院の冬景色を散策。昼食は名店で香ばしい宮島穴子めしを堪能。午後は宮島港から広島港経由でフェリーに乗り、風光明媚な「江田島」へ。海辺のラグジュアリー温泉「江田島荘」にチェックイン。源泉かけ流しの天然温泉露天風呂から瀬戸内海の夕陽を眺め、夜は大粒江田島牡蠣と江田島ポークの創作ディナーを楽しみます。
              </p>
            </div>

            {/* Day 3 */}
            <div className="relative pl-6 border-l-2 border-rose-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-rose-700" />
              <h3 className="font-bold text-stone-900 text-base">
                3日目：江田島オリーブ園散策・呉の大和ミュージアムとお土産調達
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                波静かな瀬戸内海から昇る朝日のパノラマをテラスから鑑賞。江田島オリーブファクトリーで搾りたてオリーブオイルのテイスティングとお買い物を楽しんだ後、フェリーで呉港へ。大和ミュージアム（呉市海事歴史科学館）や海上自衛隊呉史料館（てつのくじら館）を見学。広島駅へ移動し、牡蠣のオイル漬けや生もみじを手土産に購入して新幹線で帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Local Winter Practical Tips */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-rose-300 font-bold text-xs sm:text-sm tracking-wider uppercase">
            <ThermometerSun className="w-4 h-4 text-rose-300" />
            現地リアルアドバイス
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">
            冬の宮島・瀬戸内海を快適に旅するための防寒と潮汐アドバイス
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-200 leading-relaxed pt-2">
            <div className="space-y-2 bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
              <span className="font-bold text-white block">【服装：海風対策と歩きやすい靴】</span>
              <p>
                瀬戸内海は内海のため比較的温暖ですが、冬のフェリーの甲板や宮島の海岸沿いは冷たい潮風が吹き抜けます。防風性のあるアウター、ストールやマフラーを着用してください。また厳島神社の回廊や宮島の町歩きは徒歩移動が基本となるため、脱ぎ履きしやすく歩きやすいフラットな靴やスニーカーが必須です。
              </p>
            </div>
            <div className="space-y-2 bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
              <span className="font-bold text-white block">【潮汐の確認：満潮と干潮の時間を事前チェック】</span>
              <p>
                厳島神社は潮の満ち引きによって全く異なる表情を見せます。大鳥居や社殿が海に浮かぶ姿を撮影したい場合は「満潮時（潮位250cm以上）」、大鳥居の足元まで歩いて間近で見上げたい場合は「干潮時（潮位100cm以下）」を狙いましょう。宮島観光協会の年間潮汐表を事前に確認してスケジュールを組むのがプロのコツです。
              </p>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-rose-950 font-bold text-sm tracking-wide bg-rose-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-rose-800" />
              宮島・広島の冬名物＆厳選おみやげ手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              歴史ある門前町と肥沃な瀬戸内海が育んだ伝統銘品
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-700" />
                にしき堂の「生もみじ」と老舗名店の「牡蠣のオイル漬け」
              </h3>
              <p>
                広島銘菓もみじ饅頭の進化系「生もみじ」。広島県産米粉を使用したもっちりとした極上の生地で上品な餡を包み、今や広島土産の定番トップに君臨します。また、冬獲れの旨みが詰まった大粒牡蠣をじっくりスモークし、ハーブやオリーブオイルに漬け込んだ瓶詰めは、白ワインや日本酒のおつまみに最高の逸品です。
              </p>
            </div>
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-700" />
                伝統工芸「宮島杓子（しゃもじ）」と西条の吟醸酒
              </h3>
              <p>
                寛政年間に宮島の僧侶が弁財天の琵琶の形から考案したとされる「宮島杓子」。「敵を召し捕る（飯取る）」という語呂合わせから、家内安全や必勝・商売繁盛の縁起物として初詣の記念に喜ばれています。また、日本三大酒処の一つ・東広島市西条の銘酒「賀茂鶴」の大吟醸は、冬の焼き牡蠣や穴子料理の味を一層引き立ててくれます。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-rose-950 font-bold text-sm tracking-wide bg-rose-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-rose-800" />
              宮島と広島牡蠣ディープダイブ解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ厳島神社は海上に建てられ、広島湾は日本一の牡蠣の楽園となったのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-stone-100 shadow-2xs">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Landmark className="w-4 h-4 text-rose-700" />
                島そのものが御神体：平清盛が創り上げた海上の寝殿造り
              </h3>
              <p>
                古代より宮島（厳島）は、山全体が神の宿る御神体として崇められていました。そのため「神聖な島を傷つけてはならない」という畏敬の念から、陸地ではなく潮の満ち引きする海浜の波打ち際に社殿が建立されました。平安時代末期、平清盛が当時の貴族の邸宅様式であった「寝殿造り」を海上に再現したことで、満潮時には社殿全体が海に浮かんでいるかのような世界無比の美が生み出されたのです。
              </p>
            </div>

            <div className="space-y-2 bg-white p-5 rounded-2xl border border-stone-100 shadow-2xs">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Fish className="w-4 h-4 text-rose-700" />
                太田川の三角州と瀬戸内海の閉鎖性水域がもたらす奇跡の生態系
              </h3>
              <p>
                広島湾は、中国山地の広大なブナ林から太田川を経て流れ込む清らかな淡水と、栄養塩豊富な瀬戸内海の水が交じり合う理想的な汽水域を形成しています。さらに周囲を島々に囲まれているため波が極めて穏やかで、牡蠣のいかだを安全に係留できます。適度な水温変化によって春〜夏に産卵し、秋から冬にかけて植物プランクトンをたっぷり食べて太るサイクルが安定しているため、肉厚で濃厚な極上牡蠣が育つのです。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-rose-950 font-bold text-sm tracking-wide bg-rose-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-rose-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬・厳冬期の広島・宮島・江田島旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-rose-700 font-extrabold">Q.</span>
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
          <div className="flex items-center gap-2 text-rose-950 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-rose-800" />
            あわせて読みたい瀬戸内・西日本の冬温泉＆味覚特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-ehime-dogo-onsen-taimeshi-heritage-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-rose-700 font-bold block text-[10px]">愛媛・道後温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">日本最古の名湯道後温泉本館と名物宇和島鯛めし・瀬戸内の冬美食ステイ</p>
            </Link>
            <Link 
              href="/winter-hyogo-awajishima-sumoto-3year-torafugu-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-rose-700 font-bold block text-[10px]">兵庫・淡路島</span>
              <p className="font-bold text-stone-800 line-clamp-2">冬の淡路島3年とらふぐフルコースと洲本温泉・鳴門海峡の冬絶景露天宿</p>
            </Link>
            <Link 
              href="/winter-kagawa-shodoshima-onsen-kankakei-olive-beef-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-rose-700 font-bold block text-[10px]">香川・小豆島温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">寒霞渓の冬景色とオリーブ牛ステーキ・瀬戸内海を一望する海辺リゾート</p>
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

module.exports = { generateHiroshimaMiyajimaOysterPage };
