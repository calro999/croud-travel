const fs = require('fs');
const path = require('path');

function generateOkayamaKurashikiPage(hotels) {
  const slug = 'winter-okayama-kurashiki-bikan-achi-shrine-hatsumode-chiyagyu-stay';
  const title = '【11・12・1月岡山】白壁となまこ壁が雪景色に映える「倉敷美観地区」冬情景！倉敷総鎮守「阿智神社」新春初詣・名物下津井タコ料理＆幻の千屋牛ステーキ厳選名宿5選';
  const description = '江戸情緒を色濃く残す白壁の蔵屋敷となまこ壁の町並み！11〜1月は柳並木の倉敷川沿いがしっとりとした静寂に包まれ、冬の夕暮れ時には風情ある町家ライトアップが幻想的な陰影を描き出します。美観地区を見守る鶴形山山頂の「阿智神社」では宗像三女神への美と健康・新春初詣と能舞台の清浄な気配。瀬戸内海の激流で育った冬旬「下津井タコ」のしゃぶしゃぶや旨味濃厚な日本最古の蔓牛「千屋牛」会席を堪能し、倉敷アイビースクエアや倉敷美観地区至近の洗練名宿5選を徹底特集。';

  const hotelDetails = [
    {
      story: '明治22年（1889年）建築の旧倉敷紡績（クラボウ）本社工場を再生した複合カルチャーリゾート「倉敷アイビースクエア」。美観地区の中心部に位置し、赤煉瓦の外壁を覆うツタと白壁のコントラストが国の「近代化産業遺産」に認定されています。冬はツタが落葉して煉瓦建築の重厚な幾何学模様が露わになり、夜には優しい灯火がクラシカルな中庭を照らします。館内には広々とした大浴場を完備し、レストランでは岡山県産食材を贅沢に使ったフレンチや和会席を提供。美観地区散策の起点として、歴史の息吹と洗練が共存する唯一無二のヘリテージホテルです。',
      roomTip: 'デラックスツインまたは歴史的紡績工場の梁を活かしたスーペリアルーム。高い天井と木の温もりが上質な寛ぎを演出。',
      gourmetTip: '「レストラン 蔦」の冬の岡山テロワール会席。千屋牛のローストビーフや下津井真蛸のマリネ、岡山県産冬野菜の温菜。'
    },
    {
      story: 'JR倉敷駅南口から徒歩約5分、美観地区へも徒歩約5分という最高のロケーションに位置する「ロイヤルパークホテル 倉敷」。最上階11階には宿泊者専用の展望ラウンジと大浴場を備え、冬の澄んだ空気の中で美観地区の白壁の屋根並みや鶴形山の緑を一望できます。全室にシモンズ社製ベッドと加湿空気清浄機を完備し、デザイン性と機能美を極めた客室空間が魅力。バーラウンジでは岡山の地酒やフルーツカクテルを楽しめ、大人の冬の倉敷ステイを贅沢に彩ります。',
      roomTip: 'プレミアムフロアツインまたはコーナールーム。大きな窓から倉敷の街並みを見下ろし、落ち着いたインテリアで静かな夜を。',
      gourmetTip: '最上階ラウンジでの和洋朝食ビュッフェ。岡山の郷土料理「ままかり」や温かい蒸し野菜、搾りたてフルーツジュース。'
    },
    {
      story: '倉敷美観地区の入口、大原美術館のすぐ近くに佇む「天然温泉 阿智の湯 ドーミーイン倉敷」。最上階9階には自家源泉を引いた天然温泉大浴場（露天風呂・サウナ完備）を誇り、美観地区の町並みを眺めながら天然温泉に浸かる贅沢な湯浴みを楽しめます。泉質は柔らかな単純温泉で、冬の散策で冷えた身体を優しく包み込みます。名物の夜鳴きそばサービスや、朝食バイキングで提供される「岡山名物まつりずし（ばら寿司）」など、旅情を満たす嬉しいおもてなしが揃っています。',
      roomTip: '和風ダブルまたはスーペリアツイン。サータ社製快眠ベッドと機能的な水回りで、散策後の身体を心地よく休める空間。',
      gourmetTip: '朝食バイキングの「岡山ばら寿司」と下津井産タコ飯。朝から瀬戸内の滋味をふんだんに味わえる大満足のバイキング。'
    },
    {
      story: 'JR倉敷駅南口から徒歩約3分、繁華街に面した好立地に佇む「センチュリオンホテル＆スパ倉敷」。館内には男女別の人工温泉大浴場と本格サウナ・水風呂を完備しており、観光後のリフレッシュに最適です。英国王室御用達のスランバーランド製ベッドを全室に導入し、モダンアジアンテイストの上質なインテリアが非日常の寛ぎを演出。リーズナブルな価格ながら高い快適性を誇り、美観地区の夜間ライトアップ散策にもフットワーク軽快に繰り出せます。',
      roomTip: 'スタンダードダブルまたはスーペリアツイン。高級寝具の包み込むような寝心地で、冬の疲れを朝までリセット。',
      gourmetTip: 'ホテル周辺の美観地区路地裏に佇む隠れ家割烹で味わう、千屋牛の溶岩焼きステーキと下津井タコの天ぷら。'
    },
    {
      story: 'JR倉敷駅南口から徒歩約3分、昭和の創業以来倉敷を訪れる旅人に愛されてきた老舗ビジネスホテル「倉敷ステーションホテル」。美観地区へも徒歩約5分とアクセス至便。館内地下には直営の瀬戸内海鮮居酒屋が併設されており、下津井港から直送される新鮮な魚介類や地酒を気軽に堪能できます。リーズナブルで実直なサービスと清潔な客室で、気ままな一人旅や新春の早朝参拝を計画する旅行者に根強い支持を得ています。',
      roomTip: 'シングルまたはツインルーム。コンパクトで清潔感ある客室は、手荷物の多い旅行者にも使いやすい設計。',
      gourmetTip: '館内直営レストランで味わう「冬の下津井タコ刺身」と瀬戸内天然小魚の唐揚げ、岡山銘酒「御前酒」の熱燗。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥9,100〜' : i === 1 ? '¥6,015〜' : i === 2 ? '¥7,345〜' : i === 3 ? '¥3,200〜' : '¥3,750〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.55' : i === 1 ? '4.45' : i === 2 ? '4.36' : i === 3 ? '3.95' : '3.85');
    const reviewCount = h.reviewCount || (i === 0 ? 3850 : i === 1 ? 1420 : i === 2 ? 2680 : i === 3 ? 1120 : 890);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'JR倉敷駅より徒歩3〜15分、または倉敷美観地区内')},
              special: ${JSON.stringify(h.hotelSpecial || '倉敷美観地区の白壁雪景色と阿智神社初詣、名物下津井タコと幻の千屋牛を満喫する厳選名宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '旧倉敷紡績工場の赤煉瓦ヘリテージ・近代化産業遺産に泊まる特別な美観地区ステイ' : i === 1 ? '美観地区徒歩5分・最上階展望ラウンジ＆大浴場から白壁瓦屋根のパノラマを一望' : i === 2 ? '美観地区入口すぐ・最上階に自家源泉の天然温泉露天風呂＆本格サウナ完備' : i === 3 ? 'JR倉敷駅徒歩3分・人工温泉大浴場＆サウナ完備、スランバーランドベッド導入' : 'JR倉敷駅徒歩3分・直営瀬戸内海鮮居酒屋併設で下津井タコと地酒を気軽に満喫')} ,
                ${JSON.stringify(i === 0 ? '美観地区散策のベスト拠点・館内大浴場完備と岡山テロワール会席ディナー' : i === 1 ? '全室シモンズ社製ベッド導入・スタイリッシュな客室空間とバーラウンジが魅力' : i === 2 ? '名物夜鳴きそば無料・朝食バイキングで味わう岡山ばら寿司と下津井タコ飯' : i === 3 ? 'モダンアジアンデザイン・美観地区の夜間ライトアップ散策にも至便な立地' : 'リーズナブルな良心価格・気ままな一人旅や新春早朝参拝に最適な駅前実力派宿')} ,
                ${JSON.stringify(i === 0 ? 'ツタと赤煉瓦の美しい中庭・冬の夜のライトアップと歴史情緒が織りなす空間' : i === 1 ? '地元食材あふれる朝食ビュッフェ・美観地区を暮らすように楽しむ大人の拠点' : i === 2 ? '単純温泉の柔らかな湯触り・冬の寒さで冷えた身体を芯から温める癒やしの宿' : i === 3 ? '清潔な客室と充実のアメニティ・高いコストパフォーマンスで快適な滞在を実現' : 'アットホームな老舗の安心感・手荷物を預けて身軽に倉敷川沿いをウォーキング')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "冬の「倉敷美観地区」の魅力と、夜間景観照明（ライトアップ）の点灯時間は？",
      a: "倉敷美観地区は、江戸幕府の天領（直轄地）として栄えた物資集散の港町で、白壁土蔵やなまこ壁、格子戸の町家が美しく保存された重要伝統的建造物群保存地区です。冬（11〜1月）は観光客の喧騒が落ち着き、倉敷川沿いの柳並木が冬枯れて白壁の凛とした陰影が際立ちます。日没から21時（冬期）まで点灯される「倉敷美観地区 夜間景観照明」は、世界的照明デザイナー・石井幹子氏がプロデュース。温かみのある光がなまこ壁や今橋、倉敷館を照らし出し、川面に反射する光の揺らぎが息を呑む幻想的な美しさを創り出します。"
    },
    {
      q: "鶴形山山頂に鎮座する「阿智神社」の新春初詣の見どころと御利益は？",
      a: "阿智神社（あちじんじゃ）は、倉敷美観地区の北側に聳える鶴形山山頂に鎮座する倉敷の総鎮守です。創祀は千数百年前と伝わり、御祭神は宗像三女神（多紀理毘売命・多岐都比売命・市寸島比売命）。古くより海上交通の守護神、そして現代では美容・健康・交通安全・厄除開運のパワースポットとして厚く信仰されています。新春の境内には清々しい空気が満ち、見事な総檜造りの能舞台や、境内から見渡す倉敷の白壁瓦屋根のパノラマビューが絶景です。また、境内に自生する樹齢約500年の県天然記念物「阿知の藤」も名高い巨樹です。"
    },
    {
      q: "冬の瀬戸内名物「下津井タコ」の美味しさの秘密とおすすめ料理は？",
      a: "倉敷市南端、鷲羽山を望む下津井（しもつい）港は、全国屈指の真蛸の水揚げを誇る港町です。瀬戸内海の激流で知られる下津井瀬戸で育つタコは、潮流に逆らって踏ん張るため足が太く短く、筋肉質で強烈な弾力と甘みを持ちます。特に11月から1月にかけての冬タコは、身が引き締まり最も味が濃厚になる旬の時期。薄切りにしたタコを出汁にさっとくぐらせる「タコしゃぶ」は、プリッとした歯ごたえと甘みが口いっぱいに弾けます。また、香ばしい「タコ飯」や「タコの天ぷら」も冬の倉敷グルメの定番です。"
    },
    {
      q: "日本最古の蔓牛の血統を引く幻の和牛「千屋牛」とは？",
      a: "千屋牛（ちやぎゅう）は、岡山県新見市千屋地区で育まれる黒毛和種で、日本のブランド和牛のルーツとされる「竹の谷蔓（たけのたにつる）」の血統を直系で受け継ぐ日本最古の蔓牛です。飼育頭数が少なく全国に出荷されることが稀なため「幻の和牛」と称されます。赤身と霜降りのバランスが極めて優れており、融点が低く甘みのある脂と、肉本来の芳醇な旨味が特徴。冬の美観地区の割烹やレストランで味わう千屋牛の鉄板ステーキやすき焼きは、一度食べたら忘れられない極上の味覚体験となります。"
    },
    {
      q: "倉敷美観地区の歴史的建築を活かしたヘリテージホテル「倉敷アイビースクエア」の魅力は？",
      a: "倉敷アイビースクエアは、明治22年（1889年）に建設された旧倉敷紡績本社工場を保存・改修して誕生した複合観光施設です。赤煉瓦の外壁、鋸屋根の工場建築、水路が巡る中庭など、明治の日本の近代化を象徴する意匠が随所に残され、国の「近代化産業遺産」に認定されています。冬はツタの葉が落ちて煉瓦本来の温かみある赤色が際立ち、冬晴れの青空とのコントラストが見事です。敷地内には大浴場や歴史資料館、倉敷民藝館、大原美術館も隣接し、美観地区の文化の深さを滞在を通じて体感できます。"
    }
  ];

  const pageContent = `import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '倉敷美観地区 冬, 倉敷美観地区 ライトアップ, 阿智神社 初詣, 下津井タコ, 千屋牛 ステーキ, 倉敷アイビースクエア, ドーミーイン倉敷, ロイヤルパークホテル倉敷, 岡山ばら寿司, 倉敷 冬 旅行',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}'
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    siteName: 'クラドトラベル',
    type: 'article',
    locale: 'ja_JP',
    images: [{
      url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      width: 1200,
      height: 630,
      alt: '冬の倉敷美観地区 白壁土蔵となまこ壁の雪景色と町家ライトアップ'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    images: ['https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function OkayamaKurashikiWinterFeaturePage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": ${JSON.stringify(title)},
    "description": ${JSON.stringify(description)},
    "image": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "2026-10-06T06:00:00+09:00",
    "dateModified": "2026-10-06T06:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "クラドトラベル編集部 温泉・神社仏閣取材班"
    },
    "publisher": {
      "@type": "Organization",
      "name": "クラドトラベル",
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

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        "name": "岡山・倉敷美観地区＆阿智神社 冬の初詣と下津井タコ",
        "item": "https://croud-travel.com/${slug}"
      }
    ]
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
${faqList.map(f => `      {
        "@type": "Question",
        "name": ${JSON.stringify(f.q)},
        "acceptedAnswer": {
          "@type": "Answer",
          "text": ${JSON.stringify(f.a)}
        }
      }`).join(',\n')}
    ]
  };

  const hotels = [
${hotelCardsCode}
  ];

  const faqList = ${JSON.stringify(faqList, null, 2)};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-indigo-600 selection:text-white">
        {/* Breadcrumb Bar */}
        <nav aria-label="パンくずリスト" className="bg-white border-b border-stone-200 text-xs text-stone-500 py-3 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto flex items-center space-x-2">
            <Link href="/" className="hover:text-indigo-600 transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:text-indigo-600 transition">特集一覧</Link>
            <span>/</span>
            <span className="text-stone-800 font-medium">岡山・倉敷美観地区＆阿智神社 冬の初詣と下津井タコ</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-b from-stone-900 via-slate-900 to-stone-900 text-white py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs sm:text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              11月・12月・1月冬の晴れの国・倉敷探訪スペシャル
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              【岡山・倉敷美観地区】<br className="hidden sm:inline" />
              白壁となまこ壁が雪景色に映える冬情景と町家ライトアップ！<br />
              倉敷総鎮守「阿智神社」新春初詣・極上下津井タコ＆千屋牛名宿
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              江戸幕府の天領として栄えた白壁土蔵となまこ壁の蔵屋敷。11〜1月の冬シーズンは倉敷川沿いがしっとりとした静寂に包まれ、夜間景観照明が白壁を幻想的に照らし出します。鶴形山山頂に鎮座する倉敷総鎮守「阿智神社」で宗像三女神へ捧げる新春初詣。激流で鍛え抜かれた冬旬「下津井タコ」のしゃぶしゃぶと、幻の黒毛和牛「千屋牛」の極上ステーキ。赤煉瓦ヘリテージ「倉敷アイビースクエア」や美観地区至近の洗練名宿を巡る贅沢な冬旅をご案内します。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-indigo-400" /> 最適期: 11月中旬〜1月下旬
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-indigo-400" /> エリア: 岡山県倉敷市・倉敷美観地区・鶴形山
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Waves className="w-4 h-4 text-indigo-400" /> 温泉: 阿智の湯（天然温泉・単純温泉）
              </span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          
          {/* Section 1: 倉敷美観地区の冬景色とライトアップ */}
          <section className="mb-16">
            <div className="border-l-4 border-indigo-600 pl-4 mb-6">
              <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">Heritage Canal & Night Illumination</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                白壁となまこ壁が織りなす静謐の美「倉敷美観地区」冬の柳並木と町家ライトアップ
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                岡山県倉敷市の中核をなす「倉敷美観地区」。江戸時代、幕府の直轄地「天領」として代官所が置かれ、備中一帯の年貢米や綿花が集まる物資集散の港町として空前の繁栄を極めました。倉敷川の畔には、白壁の土蔵や漆黒の瓦をあしらったなまこ壁の蔵屋敷が立ち並び、国の重要伝統的建造物群保存地区に選定されています。
              </p>
              <p>
                春や秋の観光シーズンは多くの人々で賑わいますが、11月から1月にかけての冬は、観光客の足が落ち着き、本来の天領の静寂と歴史情緒が色濃く蘇ります。葉を落とした柳並木のシルエットが白壁に映り、時折舞い散る粉雪が本瓦の屋根をうっすらと白く染める光景は、水墨画のような幽玄の美しさをたたえています。倉敷川のほとりに佇むギリシャ神殿風の堂々たる洋風建築「大原美術館」は、昭和5年（1930年）に倉敷の実業家・大原孫三郎が画家の親友・児島虎次郎の遺志を継いで創設した日本最初の私立西洋美術館。エル・グレコの『受胎告知』やクロード・モネの『睡蓮』など世界的名画が展示され、冬の静けさの中で美術鑑賞に没頭する贅沢な時間を過ごせます。
              </p>
              <p>
                冬の倉敷散策で絶対に見逃せないのが、日没とともに始まる「夜間景観照明」。世界的照明デザイナー・石井幹子氏の手によって設計された照明は、単に明るく照らすのではなく、蔵屋敷の白壁となまこ壁の陰影を優しく際立たせます。今橋の袂から倉敷館を眺めると、柔らかな光が冷たい川面にゆらゆらと反射し、まるで江戸の昔へとタイムスリップしたかのような幻想的な散歩道が続きます。
              </p>
            </div>
          </section>

          {/* Section 2: 鶴形山 阿智神社の新春初詣 */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Sacred Mount & Historic Shrine</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                倉敷の総鎮守「阿智神社」鶴形山山頂の新春初詣と宗像三女神の美と健康祈願
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                美観地区の北側に位置する小高い丘・鶴形山（つるがたやま）。その山頂に鎮座するのが、倉敷の総鎮守として千数百年の歴史を誇る「阿智神社（あちじんじゃ）」です。かつてこの一帯が海だった頃、鶴形山は「亀島」と呼ばれる孤島であり、阿知使主（あちのおみ）の一族が住み着いて航海安全を祈願したことが神社の起源と伝えられています。
              </p>
              <p>
                御祭神は、天照大神と素戔嗚尊の誓約によって生まれた宗像三女神（多紀理毘売命・多岐都比売命・市寸島比売命）。海の神であるとともに、美と健康、芸能、交通安全、商売繁盛を司る神として崇敬を集めています。美観地区から続く「米寿坂」「還暦坂」「厄除坂」という縁起の良い石段を登りきると、冬の澄んだ大気の中に厳かな本殿と見事な総檜造りの能舞台が現れます。
              </p>
              <p>
                新春の初詣では、新年の誓いを胸に多くの参拝者が訪れ、家内安全や良縁、厄除を祈願します。境内奥の見晴らし台からは、眼下に広がる美観地区の本瓦屋根の波や、遠く水島臨海工業地帯のコンビナート、さらに瀬戸内海の島々までが一望のもとに見渡せます。境内にある樹齢約500年の県指定天然記念物「阿知の藤」の堂々たる枝ぶりも、冬の生命の力強さを静かに感じさせてくれます。また、新春に授与される「うさぎ守」や華やかな絵馬は、美と開運を願う女性やカップルにも高い人気を誇ります。
              </p>
            </div>
          </section>

          {/* Section 3: 下津井タコ＆千屋牛の冬グルメ */}
          <section className="mb-16">
            <div className="border-l-4 border-rose-600 pl-4 mb-6">
              <span className="text-xs font-bold text-rose-600 tracking-wider uppercase">Gourmet Marvels of Okayama</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                激流で鍛え抜かれた「下津井タコしゃぶ」と、幻の日本最古黒毛和牛「千屋牛」の極上肉質
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                「晴れの国おかやま」の冬の味覚を牽引するのが、瀬戸内海の激流と中国山地の清流がもたらす極上食材です。倉敷の南端、瀬戸大橋の袂に位置する下津井港は、古くからタコの名産地として全国にその名を轟かせています。下津井瀬戸の潮流は最大で時速約15kmにも達し、海底の複雑な岩礁を泳ぎ回る真蛸は足が太く筋肉質。特に11月から1月の冬タコは、寒さに備えて餌をたっぷり食べ、身が締まり濃厚な旨味を蓄えています。
              </p>
              <p>
                薄く削ぎ切りにした新鮮な冬タコを、熱々の昆布出汁にサッと数秒くぐらせる「タコしゃぶ」。花が咲くように白く縮んだところをポン酢に浸して頬張ると、プリッとした強烈な弾力と、噛むほどに溢れ出す甘いエキスが口いっぱいに広がります。炊きたてのタコ飯や、外はサクッと中はジューシーなタコ天ぷらも、冬の倉敷の居酒屋や割烹で欠かせない逸品です。また、岡山を代表する冬の魚「寒鰆（寒サワラ）」のお造りやタタキ、岡山の特産「黄ニラ」の雑炊も、繊細な甘みと香りで冬の身体を優しく温めてくれます。
              </p>
              <p>
                そして肉料理の最高峰として君臨するのが、岡山県北部の新見市千屋地区で育まれる「千屋牛（ちやぎゅう）」。全国のブランド和牛のルーツとなった日本最古の蔓牛「竹の谷蔓」の血統を受け継ぐ幻の和牛です。生産頭数が非常に少なく県外にはほとんど出回らないため、現地でしか味わえない希少価値を誇ります。千屋牛のサーロインステーキやすき焼きは、きめ細やかな霜降りの脂が体温でとろけ、赤身の芳醇な香りと力強いコクが際立ちます。倉敷の銘酒「御前酒」や「三冠」の熱燗とともに味わえば、極上の美食の夜が完成します。
              </p>
            </div>
          </section>

          {/* Section 4: 厳選名宿5選 */}
          <section className="mb-16">
            <div className="border-l-4 border-indigo-600 pl-4 mb-8">
              <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">Verified Hotels via Rakuten API</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【楽天トラベル実データ連携】倉敷美観地区・駅周辺の厳選名宿5選
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                ※リアルタイムAPIから取得した宿泊料金目安・レビュー評価・立地条件を掲載しています。
              </p>
            </div>

            <div className="space-y-8">
              {hotels.map((h) => (
                <div key={h.id} className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="p-5 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                        厳選第{h.id}位
                      </span>
                      <div className="flex items-center gap-3 text-xs sm:text-sm">
                        <span className="flex items-center text-amber-500 font-bold">
                          <Star className="w-4 h-4 fill-amber-400 stroke-amber-400 mr-1" />
                          {h.rating}
                        </span>
                        <span className="text-stone-400">({h.reviews.toLocaleString()}件)</span>
                        <span className="text-indigo-600 font-black text-sm sm:text-base">
                          {h.price}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                      {h.name}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <span>{h.access}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                      {h.story}
                    </p>

                    <div className="bg-stone-50 rounded-lg p-3.5 space-y-2 mb-5 text-xs text-stone-600">
                      <div>
                        <strong className="text-stone-800 font-semibold mr-1">客室の魅力:</strong>
                        {h.roomTip}
                      </div>
                      <div>
                        <strong className="text-stone-800 font-semibold mr-1">冬の美食:</strong>
                        {h.gourmetTip}
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                        宿泊ポイント・魅力
                      </h4>
                      <ul className="grid grid-cols-1 gap-1.5">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-[11px] text-stone-400">
                        楽天トラベル公認宿泊プラン・即時予約対応
                      </span>
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition shadow-sm"
                      >
                        楽天トラベルでプラン・空室を確認
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: 冬の倉敷1泊2日モデルコース */}
          <section className="mb-16">
            <div className="border-l-4 border-stone-700 pl-4 mb-6">
              <span className="text-xs font-bold text-stone-600 tracking-wider uppercase">Model Itinerary</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【1泊2日】白壁町並みライトアップと阿智神社初詣・千屋牛満喫モデルコース
              </h2>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-stone-800 text-white text-xs font-bold rounded">DAY 1</span>
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                    倉敷到着！大原美術館鑑賞と倉敷川冬散策・幻想の夜間ライトアップと千屋牛ディナー
                  </h3>
                </div>
                <ul className="border-l-2 border-stone-200 ml-3 pl-4 space-y-3 text-xs sm:text-sm text-stone-600">
                  <li>
                    <strong className="text-stone-800">11:00</strong> 岡山駅よりJR山陽本線で約17分、「JR倉敷駅」に到着。徒歩で倉敷美観地区へ。
                  </li>
                  <li>
                    <strong className="text-stone-800">11:30</strong> 美観地区の町家カフェで名物「ままかり寿司」や冬の温かい手打ちうどんの昼食。
                  </li>
                  <li>
                    <strong className="text-stone-800">13:00</strong> 日本初の私立西洋美術館「大原美術館」をじっくり鑑賞。エル・グレコやモネの傑作に対面。
                  </li>
                  <li>
                    <strong className="text-stone-800">15:30</strong> 「倉敷アイビースクエア」または「ロイヤルパークホテル 倉敷」へチェックイン。
                  </li>
                  <li>
                    <strong className="text-stone-800">17:00</strong> 日没後の美観地区へ。石井幹子氏プロデュースの「夜間景観照明」に照らされた白壁となまこ壁の幽玄の美を散策。
                  </li>
                  <li>
                    <strong className="text-stone-800">18:30</strong> 割烹やホテルレストランで、冬旬「下津井タコしゃぶ」と「幻の千屋牛ステーキ」会席を堪能。
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs font-bold rounded">DAY 2</span>
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                    鶴形山・阿智神社で新春初詣と倉敷民芸館・倉敷帆布ショッピング
                  </h3>
                </div>
                <ul className="border-l-2 border-stone-200 ml-3 pl-4 space-y-3 text-xs sm:text-sm text-stone-600">
                  <li>
                    <strong className="text-stone-800">08:30</strong> 展望レストランまたは大浴場で朝風呂を満喫し、岡山ばら寿司の朝食を味わってチェックアウト。
                  </li>
                  <li>
                    <strong className="text-stone-800">09:30</strong> 厄除坂の石段を登り鶴形山山頂の「阿智神社」へ。宗像三女神に新年の美と健康・開運を祈願。山頂展望台から白壁屋根のパノラマを一望。
                  </li>
                  <li>
                    <strong className="text-stone-800">11:00</strong> 「倉敷民藝館」や本町・東町の古い町家通りを散策。
                  </li>
                  <li>
                    <strong className="text-stone-800">12:30</strong> 古民家食事処で熱々のぜんざいや抹茶パフェで温まる。
                  </li>
                  <li>
                    <strong className="text-stone-800">14:00</strong> 伝統の「倉敷帆布」やマスキングテープの専門店でお土産を選び、充実した帰路へ。
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: FAQ Section */}
          <section className="mb-16">
            <div className="border-l-4 border-indigo-600 pl-4 mb-6">
              <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                冬の倉敷美観地区旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-4">
              {faqList.map((f, i) => (
                <div key={i} className="bg-white border border-stone-200 rounded-xl p-5">
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-2 flex items-start gap-2">
                    <span className="text-indigo-600 font-black">Q.</span>
                    <span>{f.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5 border-l-2 border-indigo-100">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: 内部リンク & 関連記事クロスナビゲーション */}
          <section className="border-t border-stone-200 pt-10">
            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4 text-indigo-600" />
              RELATED WINTER FEATURES（冬の注目特集一覧）
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <Link 
                href="/winter-okayama-kibiji-soja-saijo-inari-hatsumode-chiyagyu-stay"
                className="p-3 bg-white border border-stone-200 rounded-lg hover:border-indigo-400 hover:shadow-sm transition"
              >
                <div className="font-bold text-stone-800 mb-1">【岡山】吉備路・総社＆最上稲荷初詣</div>
                <p className="text-stone-500">日本三大稲荷の巨大鳥居と五重塔雪景色・千屋牛と温泉名宿</p>
              </Link>
              <Link 
                href="/winter-okayama-hinase-ushimado-oyster-kakioko-stay"
                className="p-3 bg-white border border-stone-200 rounded-lg hover:border-indigo-400 hover:shadow-sm transition"
              >
                <div className="font-bold text-stone-800 mb-1">【岡山】日生・牛窓＆牡蠣カキオコ</div>
                <p className="text-stone-500">瀬戸内海のエーゲ海と日生カキオコ・殻付き真牡蠣と海見温泉名宿</p>
              </Link>
              <Link 
                href="/winter-hiroshima-saijo-takehara-sake-brewery-bikan-stay"
                className="p-3 bg-white border border-stone-200 rounded-lg hover:border-indigo-400 hover:shadow-sm transition"
              >
                <div className="font-bold text-stone-800 mb-1">【広島】西条酒蔵通り＆竹原町並み</div>
                <p className="text-stone-500">安芸の小京都の白壁格子戸と寒仕込み美酒鍋・竹原温泉名宿</p>
              </Link>
              <Link 
                href="/winter-tottori-sakyu-snow-hakuto-shrine-hatsumode-matsubagani-onsen-stay"
                className="p-3 bg-white border border-stone-200 rounded-lg hover:border-indigo-400 hover:shadow-sm transition"
              >
                <div className="font-bold text-stone-800 mb-1">【鳥取】鳥取砂丘雪景色＆白兎神社初詣</div>
                <p className="text-stone-500">風紋が白銀に輝く鳥取砂丘と因幡の白うさぎ初詣・松葉蟹＆鳥取温泉名宿</p>
              </Link>
            </div>
            <div className="mt-6 text-center">
              <Link 
                href="/features"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition"
              >
                全国の冬特集・温泉宿泊ガイド一覧を見る →
              </Link>
            </div>
          </section>

        </main>
      </article>
    </>
  );
}
`;

  const targetDir = path.join(__dirname, '..', '..', 'src', 'app', slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const outPath = path.join(targetDir, 'page.tsx');
  fs.writeFileSync(outPath, pageContent, 'utf8');
  console.log(`✓ Successfully generated Okayama Kurashiki page: ${outPath}`);
}

module.exports = { generateOkayamaKurashikiPage };
