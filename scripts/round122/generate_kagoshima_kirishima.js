const fs = require('fs');
const path = require('path');

function generateKagoshimaKirishimaPage(hotels) {
  const slug = 'winter-kagoshima-kirishima-jingu-hatsumode-onsen-kurobuta-stay';
  const title = '【11・12・1月鹿児島】国宝「霧島神宮」新春初詣と湯けむり立ち上る丸尾温泉！源泉露天＆極上黒豚名宿5選';
  const description = '南九州随一のパワースポットと天下の名湯に癒やされる11〜1月の冬旅ガイド。天孫降臨神話が息づく国宝「霧島神宮」の新春初詣と朱塗りの本殿。標高600〜800mの山懐に湯けむりがもうもうと立ち上る「霧島温泉郷（丸尾温泉・硫黄谷温泉）」の乳白色の源泉掛け流し露天風呂。冬に甘みと旨味が最高潮に達する本場「かごしま黒豚」のしゃぶしゃぶや黒毛和牛、きびなご、本格芋焼酎。冬の霧島連山の雄大な景観を望む厳選名宿5選を詳しくご紹介します。';

  const hotelDetails = [
    {
      story: '丸尾温泉の中心地、もうもうと立ち上る湯けむりを見下ろす高台に建ち、乳白色のにごり湯と温泉蒸気サウナで名高い老舗大型リゾート「湯けむりとにごり湯の宿 霧島国際ホテル」。宿の真骨頂は、敷地内の源泉から引く硫黄分をたっぷり含んだ白濁の天然温泉。冬の冷え込んだ外気の中で白濁の湯船に身を沈めると、硫黄の香りとまろやかな湯ざわりが身体全体を包み込み、日頃の疲れや冷えを一瞬で吹き飛ばしてくれます。温泉の蒸気熱をそのまま利用した天然蒸気サウナや、湯けむりを望む露天風呂、泥パック体験など湯浴みのバリエーションも多彩。夕食には、鹿児島県産黒豚のしゃぶしゃぶや黒毛和牛、旬の地魚が並ぶ豪華ビュッフェまたは会席料理が用意され、湯上がりの贅沢なひとときを心ゆくまで堪能できます。',
      roomTip: '丸尾温泉街の湯けむりを見渡す和室またはモダンツイン。窓の外に立ち上る白い蒸気と冬の山並みが旅情をかき立てます。',
      gourmetTip: '「かごしま黒豚しゃぶしゃぶ＆郷土バイキング」。きめ細かな肉質の黒豚を出汁にくぐらせ、特製ポン酢で味わう絶品鍋。'
    },
    {
      story: '幕末に坂本龍馬とおりょうが日本最初の新婚旅行で逗留した歴史を誇る硫黄谷温泉の元湯「霧島温泉郷 霧島ホテル」。宿の象徴である「硫黄谷庭園大浴場」は、体育館ほどもある広大な空間に樹齢数百年の杉巨木がそびえ、毎分一万リットルを超える驚異的な湧出量を誇る14の源泉が掛け流されています。硫黄泉、明礬泉、塩類泉、鉄泉と泉質の異なる4つの湯がひとつの大浴場に揃い、白濁の濁り湯から透明な美肌湯まで一度に湯巡りできるスケールは圧巻。冬の冷涼な空気の中、庭園露天風呂で立ち上る豪快な湯けむりを眺めながらの入浴は、まさに温泉天国の名にふさわしい至福の体験です。夕食は鹿児島の山海の幸を盛り込んだ本格会席で、個室食事処でゆったりと美食を味わえます。',
      roomTip: '東館または高層階和洋室。窓の外に広がる広大な百年杉の森と霧島連山の雄大な冬景色に包まれる静寂の空間。',
      gourmetTip: '「黒豚と黒毛和牛の贅沢会席」。脂身の甘みが際立つ黒豚と柔らかな黒毛和牛の食べ比べ、名物さつま揚げを地酒とともに。'
    },
    {
      story: '霧島連山の南斜面、標高約500mの高台に建ち、全客室に天然温泉露天風呂を備えた南欧風のラグジュアリーリゾート「ラビスタ霧島ヒルズ（共立リゾート）」。客室のテラスからは、冬の澄み渡る空気の向こうに錦江湾と雄大な桜島を一望できます。好きな時にいつでもプライベートな天然温泉露天風呂に浸かり、冬空に浮かぶ桜島や満天の星を眺められる贅沢は格別。館内には広大な大浴場や多彩な無料貸切風呂、岩盤浴も完備。夕食はイタリアンの要素を取り入れた洋食のフルコースで、鹿児島県産の黒豚や旬の魚介、厳選野菜をスタイリッシュにアレンジ。夜には共立リゾート名物の「夜鳴きそば」の無料サービスもあり、大人の冬のおこもり旅に最適です。',
      roomTip: '桜島を正面に望むラビスタルーム。テラスの天然温泉露天風呂から夕暮れに染まる桜島と錦江湾のパノラマを独占。',
      gourmetTip: '「錦江湾の旬魚＆黒豚ローストの洋食フルコース」。洗練された盛り付けと鹿児島の新鮮な素材が織りなす極上のディナー。'
    },
    {
      story: '丸尾温泉の高台、豊かな森に包まれるように佇み、展望足湯や露天風呂から錦江湾と桜島を望む「霧島の森に佇むオーベルジュ AUBEGIO霧島観光ホテル」。宿の自慢は、木々の緑と冬の澄んだ山風を感じながら入浴できる開放的な露天風呂「もみじの湯」と、鹿児島の特産品である溶岩を浴槽に敷き詰めた「溶岩大浴場」。遠赤外線効果で身体の芯から温まり、湯冷めしにくいのが特徴です。展望ロビーには無料の足湯バーがあり、温かい足湯に浸かりながら冬の夕暮れにシルエットとなって浮かぶ桜島を眺める時間は格別の寛ぎ。夕食は料理長が素材の味を引き出した薩摩会席で、黒豚しゃぶしゃぶや地鶏の刺身など鹿児島の美味を堪能できます。',
      roomTip: '桜島ビューの和洋室またはモダン客室。窓の外に広がるパノラマの絶景と木の温もりに癒やされる居心地の良い部屋。',
      gourmetTip: '「薩摩旬彩会席＆黒豚セイロ蒸し」。余分な脂を落とし旨味を凝縮させた黒豚のセイロ蒸しと、季節の先付・お造り。'
    },
    {
      story: '霧島温泉郷の中心に位置し、全客室が54平米以上の広々とした和洋室で構成され、ファミリーやグループ旅行にもゆったりと寛げる「霧島温泉 ホテル霧島キャッスル」。館内には大きなガラス窓から緑の森を望む大浴場と、野趣あふれる岩造りの露天風呂があり、効能豊かな単純温泉が旅の疲れを優しく癒やしてくれます。夕食はライブキッチンを備えた和洋中バイキングで、焼き立ての黒豚ステーキや揚げたての天ぷら、握り寿司、鹿児島の郷土料理が食べ放題。小さなお子様からご年配の方まで気兼ねなく楽しめるアットホームな雰囲気と、広大な客室空間が冬の連泊旅行にも好評です。',
      roomTip: '54平米のデラックス和洋室。畳スペースとベッドが分かれ、大人数でもゆったりと足を伸ばして団らんできます。',
      gourmetTip: '「黒豚ステーキ＆ライブキッチンバイキング」。目の前で焼き上げる黒豚や熱々のお料理を好きなだけ味わえる大満足の夕食。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥13,800〜' : i === 1 ? '¥18,000〜' : i === 2 ? '¥24,000〜' : i === 3 ? '¥12,500〜' : '¥9,800〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.32' : i === 1 ? '4.63' : i === 2 ? '4.54' : i === 3 ? '4.42' : '3.86');
    const reviewCount = h.reviewCount || (i === 0 ? 820 : i === 1 ? 950 : i === 2 ? 620 : i === 3 ? 480 : 390);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'JR日豊本線霧島神宮駅・肥薩線霧島温泉駅より車またはバス、九州道横川IC・溝辺鹿児島空港IC経由')},
              special: ${JSON.stringify(h.hotelSpecial || '国宝霧島神宮新春初詣と湯けむり立ち上る丸尾温泉、源泉掛け流し露天風呂＆極上黒豚名宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '乳白色のにごり湯と天然蒸気サウナ・湯けむり見下ろす展望露天風呂' : i === 1 ? '圧巻の硫黄谷庭園大浴場・毎分1万リットル超の自噴源泉と4つの泉質' : i === 2 ? '全室天然温泉露天風呂付き・テラスから桜島と錦江湾を一望する南欧リゾート' : i === 3 ? '溶岩大浴場と露天風呂もみじの湯・桜島を望む展望足湯カフェ完備' : '全室54平米以上の広々和洋室・ライブキッチン黒豚バイキング食べ放題')} ,
                ${JSON.stringify(i === 0 ? '鹿児島県産黒豚しゃぶしゃぶ鍋と郷土の美味を堪能する豪華ビュッフェ' : i === 1 ? '百年杉の森に抱かれる歴史の宿・黒豚＆黒毛和牛贅沢会席' : i === 2 ? '洋食フルコースディナー＆共立リゾート名物夜鳴きそば無料サービス' : i === 3 ? '森のオーベルジュで味わう薩摩旬彩会席と黒豚セイロ蒸し' : '野趣あふれる岩造り露天風呂・ファミリーやグループ旅行にも快適')} ,
                ${JSON.stringify(i === 0 ? '丸尾温泉中心地・霧島神宮や丸尾滝・大浪池への観光アクセス抜群' : i === 1 ? '坂本龍馬とおりょうの新婚旅行ゆかりの地・圧倒的スケールの温泉天国' : i === 2 ? '記念日やご褒美旅に最適・優雅な客室露天風呂でプライベート湯浴み' : i === 3 ? '高台からの桜島サンセット絶景・静かな森の中でリフレッシュ' : '広大な客室でゆったり団らん・コスパ抜群の温泉ステイ')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "南九州最大のパワースポット・国宝「霧島神宮」の新春初詣の見どころは？",
      a: "霧島神宮は、天孫降臨神話の主神であるニニギノミコト（瓊瓊杵尊）を祀る神社で、創建は6世紀と伝わります。幾度かの霧島山の噴火による焼失を経て、現在の本殿・幣殿・拝殿は薩摩藩主・島津吉貴によって正徳5年（1715年）に建立・寄進されたもので、その絢爛豪華な朱塗りの彫刻美から「西の日光」と称され、2022年に本殿などが国宝に指定されました。正月三が日には九州一円から約30万人の初詣客が訪れます。杉の巨木に囲まれた参道を進むと現れる鮮やかな朱色の社殿は、冬の澄んだ森の空気の中でひときわ神々しく輝き、国家安泰や商売繁盛、家内安全、縁結びの祈願に絶大なご利益があると信じられています。"
    },
    {
      q: "霧島温泉郷（丸尾温泉・硫黄谷温泉）の特徴と冬の温泉情緒は？",
      a: "霧島連山の南西側斜面に広がる霧島温泉郷は、丸尾温泉、硫黄谷温泉、新湯温泉、林田温泉など大小様々な温泉地が集まる一大温泉地帯です。特に丸尾温泉や硫黄谷温泉は、街のあちこちからシューシューと勢いよく白い噴気が噴き出し、冬の冷たい外気に触れて巨大な湯けむりの雲が立ち上るダイナミックな景観が広がります。泉質は主に単純硫黄泉や酸性硫黄泉で、湯船に注がれると乳白色や青白く濁るのが特徴です。硫黄成分による血行促進と冷え性改善効果、古い角質を落とす美肌効果が高く、冬の雪見風呂や湯煙を眺めながらの入浴は身体の芯まで温まります。"
    },
    {
      q: "「かごしま黒豚」はなぜ冬に美味しいのですか？おすすめの食べ方は？",
      a: "かごしま黒豚は、約400年の歴史を持つバークシャー純血種で、サツマイモを飼料として与えて育てられます。筋繊維が細かいため歯切れが柔らかく、脂身の融点が高いためべたつかず、甘みと旨味が口いっぱいに広がります。特に冬は豚肉の脂がしっかりと乗り、甘みが最も引き立ちます。おすすめの食べ方は何といっても「黒豚しゃぶしゃぶ」。昆布や鰹の出汁に薄切りの黒豚をさっとくぐらせ、白ネギや春菊とともにポン酢やそば出汁でいただくと、肉の甘みと旨味が爆発します。冬の冷え込んだ夜に、鹿児島の本格芋焼酎のお湯割りと合わせるのが地元の王道の楽しみ方です。"
    },
    {
      q: "冬の霧島連山の気候と道路の積雪・凍結（スタッドレスタイヤ）の注意点は？",
      a: "鹿児島県は南国というイメージがありますが、霧島温泉郷は標高約600〜800mの高原に位置するため、冬（12〜1月）の気温は東京や大阪よりも低く、氷点下まで下がることが珍しくありません。霧島神宮や丸尾温泉周辺の主要道路（国道223号等）は通常ノーマルタイヤで通行可能な日が多いですが、強い冬型の気圧配置時や降雪時には、えびの高原へ抜ける道路や県道1号線などでチェーン規制・冬用タイヤ規制が敷かれます。えびの高原や大浪池、高千穂河原方面へ向かう予定がある場合は、スタッドレスタイヤ装着車の利用を強く推奨します。"
    },
    {
      q: "霧島神宮初詣と霧島温泉郷を巡る冬の1泊2日おすすめモデルコースは？",
      a: "【1日目】鹿児島空港に到着（レンタカー借受） → 国道223号を走り霧島へ（車約35分） → 国宝「霧島神宮」で新春初詣＆大杉（ご神木）に参拝 → 門前町の茶屋で名物「湯之寿（かるかん）」やお茶で一服 → 豪快な「丸尾滝」の冬の湯けむり景観を見学 → 丸尾温泉または硫黄谷温泉（霧島国際ホテルや霧島ホテル等）にチェックイン → 白濁の硫黄泉露天風呂で冷えた身体を温める → 夕食に本場「かごしま黒豚しゃぶしゃぶ会席」と芋焼酎を堪能。【2日目】朝の清々しい温泉街を散策 → 高千穂河原またはえびの高原へドライブし霧島連山の雪景色を展望 → 霧島神話の里公園で桜島パノラマを鑑賞 → 鹿児島空港でお土産（黒豚加工品、さつま揚げ、かるかん）を購入して帰路へ。"
    }
  ];

  const pageContent = `import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Anchor, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '霧島神宮 初詣 国宝, 霧島温泉郷 旅館, 丸尾温泉 にごり湯, 霧島国際ホテル, 霧島ホテル 庭園大浴場, ラビスタ霧島ヒルズ, かごしま黒豚 しゃぶしゃぶ, 鹿児島 冬 旅行',
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
        url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の鹿児島・国宝霧島神宮新春初詣と丸尾温泉郷の湯けむり'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    images: ['https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function KagoshimaKirishimaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": ${JSON.stringify(title)},
        "description": ${JSON.stringify(description)},
        "image": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-10-05T00:00:00+09:00",
        "dateModified": "2026-10-05T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "旅クラウド編集部",
          "url": "https://croud-travel.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "旅クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/${slug}"
        }
      },
      {
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
            "name": "冬の旅特集一覧",
            "item": "https://croud-travel.com/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "鹿児島・国宝霧島神宮初詣＆丸尾温泉名宿",
            "item": "https://croud-travel.com/${slug}"
          }
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

  const hotelsList = [
${hotelCardsCode}
  ];

  const faqs = [
${faqList.map(f => `    {
      q: ${JSON.stringify(f.q)},
      a: ${JSON.stringify(f.a)}
    }`).join(',\n')}
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-800">
        {/* Breadcrumb Navigation */}
        <nav aria-label="パンくずリスト" className="bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-3 text-xs md:text-sm text-slate-600 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-blue-600">ホーム</Link>
            <span>&gt;</span>
            <Link href="/features" className="hover:text-blue-600">特集一覧</Link>
            <span>&gt;</span>
            <span className="text-slate-900 font-semibold">鹿児島・国宝霧島神宮初詣＆丸尾温泉名宿</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-red-950 via-stone-900 to-amber-950 text-white py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/30 border border-amber-300/40 text-amber-200 text-xs md:text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>11月・12月・1月冬の南九州・薩摩旅情特集</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 text-white drop-shadow-md">
              鹿児島・霧島温泉郷＆霧島神宮<br className="hidden sm:inline" />
              国宝「霧島神宮」新春初詣と湯けむり立ち上る丸尾温泉！<br className="hidden sm:inline" />
              源泉掛け流し露天風呂＆極上かごしま黒豚名宿5選
            </h1>
            <p className="max-w-3xl mx-auto text-sm md:text-lg text-amber-100 leading-relaxed drop-shadow">
              天孫降臨の神話が息づく国宝・霧島神宮で迎える厳かな新年。標高の山懐に豪快な湯けむりが噴き上がる丸尾温泉・硫黄谷温泉の乳白色にごり湯に身を委ね、冬に甘みが極まる本場「かごしま黒豚しゃぶしゃぶ」と本格芋焼酎に酔いしれる冬の霧島紀行。
            </p>
          </div>
        </header>

        {/* Article Summary Box */}
        <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
              <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span>本特集でわかること（11・12・1月の鹿児島・霧島旅行の要点）</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
              <div className="bg-red-50/60 p-4 rounded-xl border border-red-100">
                <span className="font-bold text-red-900 block mb-1">① 国宝霧島神宮初詣＆天孫降臨</span>
                2022年に国宝指定された朱塗りの本殿・拝殿。「西の日光」と称される豪華な彫刻美と新年祈祷、巨大な御神木。
              </div>
              <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
                <span className="font-bold text-amber-900 block mb-1">② 丸尾・硫黄谷の乳白色にごり湯</span>
                大地から激しく立ち上る湯けむり。硫黄の香る白濁の源泉掛け流し露天風呂と天然蒸気サウナで身体の芯まで温まる。
              </div>
              <div className="bg-stone-50/60 p-4 rounded-xl border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">③ かごしま黒豚しゃぶしゃぶ＆芋焼酎</span>
                サツマイモで育ち冬に脂の甘みが際立つ黒豚。きびなご刺身やさつま揚げ、香ばしい芋焼酎のお湯割りと合わせる贅沢。
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Regional Editorial Section */}
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
          <section className="space-y-6">
            <div className="border-l-4 border-amber-600 pl-4">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">KIRISHIMA WINTER MAJESTY</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                なぜ11〜1月の霧島なのか？神話の聖地と大自然が放つ圧倒的な湯力
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                鹿児島県北東部に連なる霧島連山（高千穂峰、韓国岳など）。その裾野に広がる霧島エリアは、日本神話の「天孫降臨」の舞台として古くから人々の畏敬を集めてきた聖地であり、同時に活火山がもたらす日本屈指の温泉天国です。11月から1月にかけての冬は、大気が冴え渡り、標高600メートル前後の山懐から吹き上がる白い湯けむりが青空に向かって力強く立ち上る、最も情緒あふれる季節を迎えます。
              </p>
              <p>
                2022年に本殿などが国宝に指定された「霧島神宮」は、天孫ニニギノミコトを祀る南九州最大の神社です。幾重にも続く杉の古木の参道を抜けると、目の前に忽然と現れる朱塗りの社殿。薩摩藩主・島津吉貴が寄進した豪壮華麗な建築は、竜や獅子、鳳凰の精緻な彫刻と極彩色の絵画で飾られ、別名「西の日光」と讃えられます。冬の凛と澄み渡る冷気の中で社殿に向き合い手を合わせると、清浄なエネルギーが全身に行き渡るような深い神気に包まれます。
              </p>
              <p>
                また、霧島は幕末の英雄・坂本龍馬と妻おりょうが、寺田屋事件の傷を癒やすために訪れた「日本最初の新婚旅行の地」としても名高いロマンの地です。二人が滞在した塩浸温泉や硫黄谷温泉、天逆鉾（あまのさかほこ）が突き刺さる霊峰・高千穂峰への登頂など、今も歴史の足跡が息づいています。冬の澄んだ晴天の日には、高台から遠く錦江湾と堂々たる桜島を望むパノラマビューが広がり、南九州ならではの雄大な自然に圧倒されます。
              </p>
              <p>
                参拝の後は、立ち上る湯けむりに導かれるように「霧島温泉郷」へ。丸尾温泉や硫黄谷温泉では、道路脇の側溝や山肌から勢いよく温泉蒸気が噴出し、まさに温泉の息吹を間近に感じられます。ここの名湯は、火山性の硫黄分を豊富に含んだ白濁のにごり湯。湯船に浸かるとほのかな硫黄香が心地よく鼻をくすぐり、冬の寒風に冷えた身体を指先から芯までじっくりと解きほぐしてくれます。そして夕食には、鹿児島の誇る「かごしま黒豚」のしゃぶしゃぶ。サツマイモを食べて育った黒豚は、融点が高く甘みのある上質な脂が特徴で、冬の熱々の出汁にくぐらせて口に運べば、とろけるような美味が広がります。コク深い本格芋焼酎の湯割りを傾けながら過ごす冬の夜は、何ものにも代えがたい至福の時間です。
              </p>
            </div>
          </section>

          {/* Section: Spots to visit */}
          <section className="bg-slate-100 rounded-3xl p-6 md:p-10 space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-6 h-6 text-amber-600" />
              <span>冬の霧島温泉郷＆霧島神宮で絶対に巡りたい名所</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-base text-red-900 flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-red-600" />
                  <span>国宝・霧島神宮とご神木の大杉</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  2022年に国宝に指定された絢爛豪華な朱塗りの社殿。樹齢約800年、高さ38mを誇るご神木の大杉は圧巻の存在感で、社殿の裏手や参道には「さざれ石」や龍馬・おりょうの新婚旅行記念碑が立ちます。新春初詣の厳かな雰囲気は格別です。
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-base text-amber-900 flex items-center gap-1.5">
                  <Waves className="w-4 h-4 text-amber-600" />
                  <span>丸尾滝（温泉水が流れる湯けむりの滝）</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  丸尾温泉の温泉街近くにある高さ23m、幅16mの豪快な滝。上流の温泉水が集まって流れているため、冬には滝壺や滝の周りから白い湯けむりがもうもうと立ち上る非常に珍しい「湯の滝」の景観を楽しめます。
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-base text-stone-900 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-stone-600" />
                  <span>霧島温泉市場と温泉蒸し玉子</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  丸尾温泉の中心にある観光拠点。広場には温泉の天然蒸気を利用した蒸し釜があり、蒸したての熱々玉子やさつまいも、豚まんなどを食べ歩きできます。特産品ショップや足湯も併設され、散策の休憩に最適です。
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-base text-emerald-900 flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-emerald-600" />
                  <span>かごしま黒豚しゃぶしゃぶ＆本格芋焼酎</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  純粋バークシャー種の黒豚。きめ細やかな肉質と、さっぱりと甘い脂身が特徴です。昆布出汁やそばつゆでさっとくぐらせるしゃぶしゃぶは冬の定番。黄金千貫などを使った芋焼酎のお湯割りと相性抜群です。
                </p>
              </div>
            </div>
          </section>

          {/* Hotel List Section */}
          <section className="space-y-8">
            <div className="border-l-4 border-amber-600 pl-4">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">FEATURED ACCOMMODATIONS</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                霧島温泉郷＆霧島神宮を満喫する厳選ホテル・宿5選
              </h2>
              <p className="text-xs md:text-sm text-slate-500 mt-1">
                ※楽天トラベルAPIより最新の空室状況・料金・レビュー情報を取得して掲載しています。
              </p>
            </div>

            <div className="space-y-8">
              {hotelsList.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition flex flex-col md:flex-row">
                  <div className="md:w-5/12 relative h-64 md:h-auto min-h-[240px]">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-amber-700/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      厳選宿 #{hotel.id}
                    </div>
                  </div>
                  <div className="md:w-7/12 p-6 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center text-amber-500 font-bold text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" />
                          <span>{hotel.rating}</span>
                        </div>
                        <span className="text-xs text-slate-400">（口コミ {hotel.reviews}件）</span>
                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded ml-auto">
                          目安: {hotel.price}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 leading-snug">
                        {hotel.name}
                      </h3>
                      <p className="text-xs text-slate-500 mb-3 flex items-start gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span>{hotel.access}</span>
                      </p>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
                        {hotel.story}
                      </p>
                      <div className="space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700">
                        {hotel.highlights.map((hl: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <div className="text-xs text-slate-500">
                        <span className="font-semibold text-slate-700 block">おすすめ客室:</span>
                        {hotel.roomTip}
                      </div>
                      <a 
                        href={hotel.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs md:text-sm px-4 py-2.5 rounded-xl transition shadow-sm flex-shrink-0 ml-3"
                      >
                        <span>プラン詳細・予約</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Model Course Section */}
          <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="border-l-4 border-amber-600 pl-4">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">RECOMMENDED ITINERARY</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">
                1泊2日！国宝霧島神宮新春参拝と丸尾温泉湯けむり・黒豚しゃぶしゃぶを満喫する冬の王道モデルコース
              </h3>
            </div>
            
            <div className="relative border-l-2 border-amber-200 ml-4 pl-6 space-y-8 text-sm">
              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-amber-700 block mb-1">1日目 10:30 | 鹿児島空港に到着</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">レンタカーで霧島へ移動＆国宝「霧島神宮」新春初詣</h4>
                <p className="text-slate-600 leading-relaxed">
                  鹿児島空港から車で約35分で霧島神宮へ。杉の巨木が立ち並ぶ参道を歩き、2022年に国宝に指定された朱塗りの壮麗な社殿を参拝。新年の開運厄除けを祈願し、樹齢800年のご神木からパワーを授かる。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-amber-700 block mb-1">1日目 13:00 | 門前町ランチ＆丸尾滝見学</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">門前町で郷土料理ランチ＆冬の湯けむり立ち上る「丸尾滝」</h4>
                <p className="text-slate-600 leading-relaxed">
                  門前町で黒豚そばや郷土汁のランチ。その後、丸尾温泉へ移動し、温泉水が滝となって流れ落ちる「丸尾滝」を見学。冷気の中で白い湯気がダイナミックに立ち上る冬ならではの景観を鑑賞。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-amber-700 block mb-1">1日目 15:30 | 丸尾温泉にチェックイン</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">乳白色のにごり湯露天風呂で温まり「かごしま黒豚しゃぶしゃぶ」の宴</h4>
                <p className="text-slate-600 leading-relaxed">
                  温泉宿（霧島国際ホテルや霧島ホテル等）にチェックイン。硫黄が香る白濁の源泉露天風呂に浸かり、冬の冷えを芯から解凍。夕食には甘みあふれるかごしま黒豚しゃぶしゃぶと本格芋焼酎のお湯割りに舌鼓。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-amber-700 block mb-1">2日目 09:30 | 霧島温泉市場散策</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">湯けむり立ち上る温泉市場で蒸したて玉子と足湯体験</h4>
                <p className="text-slate-600 leading-relaxed">
                  丸尾温泉街の「霧島温泉市場」へ。天然蒸気で蒸し上げた温泉蒸し玉子を味わい、足湯でまったり。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-amber-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-amber-700 block mb-1">2日目 12:30 | 桜島絶景＆お土産購入</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">霧島神話の里公園で桜島パノラマ展望＆鹿児島空港へ</h4>
                <p className="text-slate-600 leading-relaxed">
                  高台の霧島神話の里公園から錦江湾と雄大な桜島を展望。鹿児島空港へ戻り、さつま揚げやかるかん、黒豚味噌を購入して大満足の帰路へ。
                </p>
              </div>
            </div>
          </section>

          {/* Winter Travel Tips */}
          <section className="bg-amber-50/70 border border-amber-200 rounded-3xl p-6 md:p-8 space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-amber-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span>冬（11・12・1月）の霧島旅行・お役立ちTips</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-amber-950">
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・霧島温泉郷の冬の冷え込みと服装</strong>
                霧島温泉郷は標高約600〜800mに位置するため、平野部の鹿児島市内に比べて気温が4〜5度低くなります。朝夕は0度前後まで冷え込むため、厚手のコート、マフラー、手袋などの冬の防寒対策が必要です。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・霧島神宮の新春初詣混雑と駐車場</strong>
                正月三が日は霧島神宮周辺の道路（国道223号等）が参拝車で大変混雑し、駐車場入場に1時間以上待つことがあります。混雑を避けるには、朝8時前の早朝参拝か夕方16時以降の参拝がおすすめです。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・えびの高原・山岳道路の積雪・凍結注意</strong>
                寒波到来時には、丸尾からえびの高原へ向かう道路（県道1号線）などで積雪やチェーン規制が出ることがあります。山間部の峠越えを予定している場合は、事前に鹿児島県道路通行規制情報を確認してください。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・硫黄泉入浴時の貴金属類の注意</strong>
                丸尾温泉や硫黄谷温泉のにごり湯は強い硫黄成分を含みます。シルバーの指輪やネックレス、腕時計などの貴金属は硫化して一瞬で黒変するため、入浴前に必ず外して脱衣所のロッカー等に保管してください。
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-6">
            <div className="border-l-4 border-amber-600 pl-4">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">
                霧島温泉郷＆霧島神宮の冬旅に関するよくある質問
              </h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                    <span className="text-amber-600 font-black">Q.</span>
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links Section */}
          <section className="bg-slate-100 rounded-3xl p-6 md:p-8 space-y-4">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span>鹿児島および九州の冬の厳選温泉特集</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <Link href="/winter-kagoshima-city-sakurajima-view-kurobuta-kanburi-onsen-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition font-medium text-slate-700">
                🌋 鹿児島市・桜島ビュー露天と黒豚名宿
              </Link>
              <Link href="/winter-kagoshima-izumi-crane-akune-kurobuta-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition font-medium text-slate-700">
                🦩 出水ツル渡来地と阿久根黒豚名宿
              </Link>
              <Link href="/winter-miyazaki-nichinan-udo-shrine-hatsumode-iseebi-wagyu-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition font-medium text-slate-700">
                ⛩️ 宮崎日南・鵜戸神宮初詣と伊勢海老名宿
              </Link>
              <Link href="/winter-miyazaki-miyakonojo-kobayashi-kirishima-wagyu-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition font-medium text-slate-700">
                🥩 都城＆小林・霧島連山と宮崎牛名宿
              </Link>
              <Link href="/winter-kumamoto-minamiaso-takamori-snow-dengaku-akagyu-onsen-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-amber-400 transition font-medium text-slate-700">
                🏔️ 南阿蘇＆高森・阿蘇五岳と高森田楽名宿
              </Link>
              <Link href="/features" className="p-3 bg-amber-700 text-white rounded-xl font-bold hover:bg-amber-800 transition text-center flex items-center justify-center">
                ❄️ 全国の冬の厳選特集一覧を見る →
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
`;

  return { slug, pageContent };
}

module.exports = { generateKagoshimaKirishimaPage };
