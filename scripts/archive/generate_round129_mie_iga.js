const fs = require('fs');
const path = require('path');

function generateMieIgaPage(hotels) {
  const slug = 'winter-mie-iga-ueno-castle-akame-48waterfalls-hyobaku-igagyu-stay';
  const title = '【11・12・1月三重】忍者の里「伊賀上野城」白銀の高石垣と芭蕉翁生家・菅原道真公祀る「上野天神宮」新春初詣！冬限定「赤目四十八滝」氷瀑トレッキング・幻の最高峰「伊賀牛すき焼き」＆赤目温泉厳選名宿5選';
  const description = '忍者の里として世界に知られる三重県伊賀・名張。11〜1月は盆地特有の厳しい冷え込みがもたらす白銀の冬景色が広がります。築城の名手・藤堂高虎が築いた高さ約30mの日本一の高石垣を誇る「伊賀上野城」の雪景色、学問の神・菅原道真公を祀る「上野天神宮」の新春初詣。名勝「赤目四十八滝」では冷気で凍りついた神秘の氷瀑が出現し、伊賀盆地の清らかな風土が育む幻の黒毛和牛「伊賀牛」のとろけるすき焼きを堪能。歴史情緒と極上の名湯「赤目温泉」を巡る冬の特選名宿5選。';

  const hotelDetails = [
    {
      story: '名勝「赤目四十八滝」の渓谷入口の目の前に位置する老舗温泉旅館「赤目温泉 隠れの湯 対泉閣」。明治時代より滝参りの宿として文人墨客を迎え入れてきた由緒ある名宿です。自慢の天然温泉「隠れの湯」は、柔らかな肌触りが心地よい単純温泉。冬は雪化粧した赤目の深い山林と宇陀川のせせらぎを眼下に望む露天風呂が格別の風情を醸し出します。料理は地元伊賀の誇りである極上黒毛和牛「伊賀牛」のすき焼きや陶板焼き会席が名物。流通量が少なく幻と称される伊賀牛のきめ細やかなサシと芳醇な赤身の甘みが、特製割り下とともに口いっぱいに広がります。赤目四十八滝の冬期散策や氷瀑見学への拠点として最高の立地を誇ります。',
      roomTip: '渓流を望む本館和室または露天風呂付き客室。宇陀川のせせらぎと冬の山鳥の声に包まれながら、日常から隔絶された静寂な滞在を満喫。',
      gourmetTip: '名物「特選伊賀牛すき焼き会席」。伊賀盆地の冷涼な気候が育んだ未経産牛の上質な脂と、伊賀の地野菜を特製割り下で贅沢に。'
    },
    {
      story: '赤目四十八滝から少し離れた山あいの隠れ里、約1万坪の広大な敷地に数寄屋造りの離れが点在する「赤目温泉 山の湯 湯元赤目 山水園」。昭和の風情を残す庭園には冬の木立が静かに佇み、プライベート感を重視した大人の逗留に最適な環境です。地下約1000mから湧出する自家源泉は、微量のラドンを含む天然ラジウム温泉。弱アルカリ性のお湯は保温・保湿効果が高く、入浴後も身体の芯から温もりが持続します。冬の山里の清冽な空気の中で楽しむ野天風呂は格別の贅沢。伊賀牛のステーキや旬の山海料理を盛り込んだ懐石料理が旅の夜を静かに彩ります。',
      roomTip: '庭園に独立して佇む数寄屋造りの離れ客室。誰にも気兼ねすることなく、プライベートな縁側から冬の日本庭園の静けさを独占。',
      gourmetTip: '冬の特選会席「伊賀牛炭火焼きと季節鍋」。香ばしく炭火で焼き上げた伊賀牛の旨味と、地元赤目名水仕込みの鍋出汁が絶品。'
    },
    {
      story: '名阪国道の中小野インター・伊賀一之宮インター至近に位置し、車での伊賀上野周遊に抜群の機動性を誇る「ホテルルートイン伊賀上野－伊賀一之宮インター－」。平面無料駐車場を完備し、伊賀上野城や上野天神宮、芭蕉翁記念館へ車で約10分という好アクセスです。館内にはラジウム人工温泉大浴場「旅人の湯」を完備しており、冬の城下町散策で冷えた身体を広々とした湯舟で心地よく解きほぐせます。機能的な全客室には加湿空気清浄機とWi-Fiを完備。朝食バイキングでは温かい総菜やヨーロッパ直輸入の焼きたてパンが無料で提供され、清々しい新春参拝の朝を快適にスタートできます。',
      roomTip: 'コンフォートルーム（ダブルまたはツイン）。上層階の落ち着いた空間とエアウィーヴマットレス導入で深い眠りをサポート。',
      gourmetTip: '無料朝食バイキングの温かい日替わりスープと和洋総菜。ホテル周辺の伊賀牛割烹や老舗洋食店でのディナーもおすすめ。'
    },
    {
      story: '伊賀鉄道の上野市駅（忍者市駅）から徒歩約3分、城下町の風情が色濃く残る中心街に位置する「伊賀上野シティホテル」。伊賀上野城や伊賀流忍者博物館、菅原道真公を祀る上野天神宮へすべて徒歩圏内という圧倒的な立地を誇ります。モダンで落ち着いた客室はビジネスから観光まで幅広く対応。ホテル1階のレストラン「みやび」では、地元精肉店直送の厳選された伊賀牛ステーキや網焼きを手頃な価格で堪能できると評判です。車を使わずに電車で城下町を巡り、歴史散策や新春初詣、グルメを満喫したい旅人に理想的な都市型拠点です。',
      roomTip: 'デラックスツインまたはコーナーダブル。街側の客室からは伊賀上野の瓦屋根が連なる歴史的な町並みを一望できます。',
      gourmetTip: '館内レストラン「みやび」の極上伊賀牛サーロインステーキ。きめ細やかな肉質と濃厚な甘みが口いっぱいに広がる絶品。'
    },
    {
      story: '近鉄名張駅から車で約5分、国道165号線沿いに位置する「ホテル ルートイン名張」。伊賀上野と赤目四十八滝のちょうど中間に位置し、両エリアを1泊2日で効率よく巡る拠点として抜群の利便性を誇ります。人工温泉大浴場を完備し、足を伸ばして温まれる湯処は冬のドライブ旅の疲れを心地よく癒やしてくれます。周辺には名張名物のご当地グルメ店や飲食店が点在し、夕食の選択肢も豊富。全館無料Wi-Fiと充実のアメニティが揃い、コストパフォーマンスに優れた快適な滞在を約束します。',
      roomTip: 'スタンダードツインまたはセミダブル。加湿空気清浄機完備の清潔な空間で、翌日の赤目トレッキングに備えて英気を養えます。',
      gourmetTip: '充実の和洋朝食バイキング。炊きたてのご飯と温かい具だくさん味噌汁で、冬の冷たい朝にも身体の芯からエネルギーを充填。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥15,950〜' : i === 1 ? '¥9,900〜' : i === 2 ? '¥6,250〜' : i === 3 ? '¥3,300〜' : '¥6,600〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.42' : i === 1 ? '4.44' : i === 2 ? '4.07' : i === 3 ? '3.91' : '4.04');
    const reviewCount = h.reviewCount || (i === 0 ? 820 : i === 1 ? 490 : i === 2 ? 650 : i === 3 ? 580 : 710);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || '近鉄大阪線 赤目口駅・名張駅、または伊賀鉄道 上野市駅より車・バスで約3〜15分')},
              special: ${JSON.stringify(h.hotelSpecial || '伊賀上野城の白銀高石垣と上野天神宮初詣、赤目四十八滝の氷瀑と極上伊賀牛すき焼きを満喫する名宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '名勝赤目四十八滝の入口目の前・渓流沿い露天風呂と極上伊賀牛すき焼き会席' : i === 1 ? '約1万坪の広大な自然庭園・数寄屋造りの離れ客室で楽しむ天然ラジウム温泉' : i === 2 ? '名阪国道インター至近・ラジウム人工温泉大浴場と充実の無料朝食バイキング' : i === 3 ? '上野市駅徒歩3分・伊賀上野城や上野天神宮へ徒歩圏内の城下町中心ホテル' : '名張駅至近の好立地・大浴場完備で伊賀上野と赤目四十八滝の両方を巡る拠点')} ,
                ${JSON.stringify(i === 0 ? '創業明治期の老舗の風格・宇陀川のせせらぎを聴きながら浸かる名湯隠れの湯' : i === 1 ? 'プライベート感あふれる静寂空間・冬の澄んだ大気の中で楽しむ贅沢な野天風呂' : i === 2 ? '平面無料駐車場完備・車での城下町周遊や新春ドライブに抜群の機動性' : i === 3 ? '直営レストランで味わう厳選伊賀牛ステーキ・町歩きと歴史探訪に最適な都市型拠点' : '国道165号線沿いでアクセス良好・清潔で機能的な客室と温かいおもてなし')} ,
                ${JSON.stringify(i === 0 ? '流通量が少なく幻と称される伊賀牛・きめ細やかなサシと芳醇な赤身の甘みを堪能' : i === 1 ? '弱アルカリ性の湯で保温効果抜群・地元名水仕込みの伊賀牛炭火焼き会席' : i === 2 ? '加湿空気清浄機完備の清潔客室・ビジネスから観光まで安心のルートイン品質' : i === 3 ? '伊賀鉄道利用の電車旅に最適・駅前商店街や和菓子老舗巡りにも直結' : 'リーズナブルな料金設定・周辺の地元グルメ店や居酒屋へのアクセスも便利')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "冬（11・12・1月）の赤目四十八滝で「氷瀑」が見られる時期や気象条件は？",
      a: "赤目四十八滝で氷瀑が観測されるのは、主に厳冬期である1月中旬〜2月上旬にかけてです。強い寒波が流入し、朝の最低気温が氷点下4度〜5度以下まで下がる日が数日続くと、不動滝や千手滝、布曳滝などの岩肌に飛沫が凍りつき、巨大な氷柱や氷の彫刻のような神秘的な氷瀑が姿を現します。散策路は石段や岩場が多く、凍結して滑りやすいため、防寒着に加えスノーブーツや軽アイゼンの携行が推奨されます。"
    },
    {
      q: "伊賀上野城の日本屈指の高石垣の特徴と、冬の雪景色を見るポイントは？",
      a: "伊賀上野城の高石垣は、築城の名手として名高い藤堂高虎公によって慶長16年（1611年）に築かれたもので、高さ約30mを誇り大阪城と並び日本一の高さを競います。美しい曲線を描く「扇の勾配」が見事で、黒澤明監督の映画『影武者』のロケ地にもなりました。冬（12〜1月）に雪が降ると、白い雪と黒々とした巨石のコントラストが際立ち、天守閣の白壁とともに水墨画のように重厚で幽玄な景観を描き出します。上野公園本丸広場から見下ろす堀の雪景色は必見です。"
    },
    {
      q: "伊賀上野総鎮守「上野天神宮」の新春初詣の見どころとご利益は？",
      a: "上野天神宮（菅原神社）は、学問の神様として崇められる菅原道真公を主祭神とし、古くから伊賀上野城下の総鎮守として篤い信仰を集めています。国の重要無形民俗文化財に指定されている「上野天神祭（ダンジリ行事）」で全国的に有名です。新春初詣では、学業成就・合格祈願をはじめ、厄除開運や商売繁盛を願う参拝者で賑わいます。拝殿には美しい彫刻が施されており、新年の厳かな祈りを捧げるのにふさわしい城下町の古社です。"
    },
    {
      q: "三重の隠れた名牛「伊賀牛」とは？松阪牛との違いと冬の美味しい食べ方は？",
      a: "伊賀牛は、伊賀盆地の清らかな水と朝晩の寒暖差が大きい気候風土の中で、丹精込めて育てられる黒毛和牛です。肉質はきめ細やかで柔らかく、融点の低い上質な脂と赤身本来の深い芳醇な旨味が特徴。生産頭数の約8割が伊賀地域内で消費されるため全国的な流通量が極めて少なく、「幻の牛肉」と称されています。冬は特製の割り下で煮込む「伊賀牛すき焼き」が最高峰の味わい。上質な脂が野菜に染み渡り、口の中でとろけるような至福の食感を堪能できます。"
    },
    {
      q: "冬の伊賀・名張エリアへのアクセスと、盆地特有の積雪・道路事情は？",
      a: "大阪や名古屋方面からは、名阪国道（無料の自動車専用道路）を利用して上野ICや伊賀一之宮ICから約1時間半〜2時間でアクセスできます。鉄道の場合は近鉄大阪線（名張駅・赤目口駅）やJR関西本線・伊賀鉄道が便利です。伊賀盆地は冬の朝晩の冷え込みが極めて厳しく、積雪は年に数回程度ですが、路面凍結（特に名阪国道の山添IC〜上野IC間や赤目渓谷への山道）が頻発します。12月〜2月の自動車利用時は必ずスタッドレスタイヤを装着してください。"
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
  keywords: '伊賀上野城 冬 雪景色, 上野天神宮 初詣, 赤目四十八滝 氷瀑, 伊賀牛 すき焼き, 赤目温泉 対泉閣, 山水園 赤目, 伊賀 忍者 冬 旅行, 三重 冬 観光',
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
      url: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80',
      width: 1200,
      height: 630,
      alt: '冬の伊賀上野城 白銀の天守と赤目四十八滝の氷瀑'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    images: ['https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function MieIgaWinterFeaturePage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": ${JSON.stringify(title)},
    "description": ${JSON.stringify(description)},
    "image": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "2026-10-06T09:00:00+09:00",
    "dateModified": "2026-10-06T09:00:00+09:00",
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
        "name": "三重・伊賀上野＆赤目四十八滝 冬の初詣と氷瀑",
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

      <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-emerald-600 selection:text-white">
        {/* Breadcrumb Bar */}
        <nav aria-label="パンくずリスト" className="bg-white border-b border-stone-200 text-xs text-stone-500 py-3 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto flex items-center space-x-2">
            <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:text-emerald-600 transition">特集一覧</Link>
            <span>/</span>
            <Link href="/prefectures/mie" className="hover:text-emerald-600 transition">三重県</Link>
            <span>/</span>
            <span className="text-stone-800 font-medium">伊賀上野城初詣＆赤目四十八滝氷瀑</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-b from-stone-900 via-stone-850 to-stone-900 text-white py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs sm:text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              11月・12月・1月冬の三重・伊賀名張探訪スペシャル
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              【三重・伊賀上野＆赤目四十八滝】<br className="hidden sm:inline" />
              忍者の里「伊賀上野城」白銀の高石垣と上野天神宮新春初詣！<br />
              神秘の「赤目四十八滝」氷瀑と幻の極上伊賀牛すき焼き名宿
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              伊賀盆地の澄み切った冷気の中に浮かぶ白銀の城下町・伊賀上野。藤堂高虎公が築いた高さ約30mの日本屈指の高石垣と木造天守の雪景色。菅原道真公を祀る「上野天神宮」の新春初詣。修験道の聖地「赤目四十八滝」で冬の冷気が創り出すクリスタルの氷瀑トレッキング。流通量が少なく幻と称される「伊賀牛」のとろけるすき焼きに舌鼓を打ち、美肌の名湯「赤目温泉」で心身を解きほぐす冬の特選旅へご案内します。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-stone-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-emerald-400" /> 最適期: 11月中旬〜1月下旬
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-emerald-400" /> エリア: 三重県伊賀市・名張市
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Waves className="w-4 h-4 text-emerald-400" /> 温泉: 赤目温泉（単純温泉・放射能泉）
              </span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          
          {/* Section 1: 伊賀上野城と上野天神宮初詣 */}
          <section className="mb-16">
            <div className="border-l-4 border-emerald-600 pl-4 mb-6">
              <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase">Castle Town & Shrine Heritage</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                高さ約30mの白銀高石垣「伊賀上野城」と、学問の神を仰ぐ「上野天神宮」新春初詣
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                周囲を鈴鹿・信楽・大和の山々に囲まれた伊賀盆地。その中央に聳える平山城が「伊賀上野城（白鳳城）」です。慶長16年（1611年）、築城の名手として名高い藤堂高虎公が大坂城の豊臣方に対抗するため、本丸の西側に築いた石垣は高さ約30mを誇り、大阪城と並び日本屈指の高さを誇ります。美しい扇の勾配を描く巨石の石積みは、冬に雪が舞い降りると白黒のコントラストが際立ち、水墨画のような凛とした風格を漂わせます。
              </p>
              <p>
                城下町の中心に鎮座する「上野天神宮（菅原神社）」は、学問の神様・菅原道真公を祀る伊賀上野の総鎮守。国の重要無形民俗文化財「上野天神祭のダンジリ行事」で広く知られ、新春には学業成就、合格祈願、厄除開運を願う参拝者で賑わいます。拝殿には精緻な木彫りが施され、新年の冷たく清らかな空気の中で手を合わせれば、背筋がすっと伸びる神聖な心持ちに満たされます。
              </p>
              <p>
                城の麓には、俳聖・松尾芭蕉の生家や、晩年の草庵「蓑虫庵（みのむしあん）」が静かに佇みます。「古池や 蛙飛びこむ 水の音」をはじめ、生涯にわたり旅を愛した芭蕉翁の足跡をたどりながら、冬の静かな城下町をそぞろ歩く時間は、歴史文学のロマンを深く実感させてくれます。
              </p>
            </div>
          </section>

          {/* Section 2: 赤目四十八滝の冬景色と氷瀑 */}
          <section className="mb-16">
            <div className="border-l-4 border-cyan-600 pl-4 mb-6">
              <span className="text-xs font-bold text-cyan-600 tracking-wider uppercase">Frozen Waterfall Adventure</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                修験道の聖地に現れる自然のクリスタル！「赤目四十八滝」神秘の氷瀑トレッキング
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                伊賀市に隣接する名張市の南端、室生赤目青山国定公園に位置する「赤目四十八滝（あかめしじゅうはちたき）」。滝川の上流約4kmにわたって大小無数の瀑布が連続する景勝地で、かつて役行者が修行中に赤い目をした牛に乗った不動明王と出会ったことからその名が付けられました。伊賀忍者の祖・百地丹波が修行を積んだ地としても知られ、日本の滝百選、森林浴の森百選に選定されています。
              </p>
              <p>
                新緑や紅葉の名所として親しまれる赤目ですが、真冬の1月中旬から2月にかけて強い寒波が到来すると、その表情は一変します。最低気温が氷点下まで下がり冷え込みが続くと、赤目五大瀑と呼ばれる「不動滝」「千手滝」「布曳滝」の断崖絶壁に飛沫が凍りつき、巨大な氷柱が幾重にも重なる「氷瀑（ひょうばく）」が出現します。
              </p>
              <p>
                轟音を響かせて落下する激流と、青白く凍結した氷の造形美が織りなす光景は、厳冬期にしか出逢えない自然の彫刻。清冽なマイナスイオンと静寂に包まれた雪の渓谷路を一歩一歩進むトレッキングは、日常の煩わしさを忘れさせ、五感を心地よく研ぎ澄ませてくれます。
              </p>
            </div>
          </section>

          {/* Section 3: 幻の伊賀牛と赤目温泉 */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Gourmet & Hot Spring</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                流通量わずかな幻の最高峰「伊賀牛すき焼き」と、肌を潤す名湯「赤目温泉」
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                三重県の牛肉といえば松阪牛が全国に知られていますが、地元で「本当に旨い牛肉」として絶大な人気を誇るのが「伊賀牛（いがぎゅう）」です。伊賀盆地の豊かな自然と清冽な伏流水、そして盆地特有の寒暖差の中で育まれる黒毛和牛で、未経産の雌牛に限定して肥育されます。生産頭数の大半が地元伊賀地域で消費されるため県外への出荷が極めて少なく、「幻の牛肉」と呼ばれてきました。
              </p>
              <p>
                伊賀牛の肉質はきめ細やかで、脂の融点が低いため、口に含んだ瞬間に上品な甘みとともにすっと溶け出します。冬の夜、鉄鍋で焼き目をつけ、地元のたまり醤油と砂糖の特製割り下で煮込む「伊賀牛すき焼き」は至極の贅沢。霜降り肉の芳醇な旨味と、冬の伊賀白ネギや地元椎茸が絶妙に調和し、旅情を最高潮に盛り上げてくれます。
              </p>
              <p>
                滝巡りとグルメを堪能した後は、名勝の麓に湧く「赤目温泉」へ。単純温泉や天然ラジウム温泉（放射能泉）の泉質を持ち、弱アルカリ性の柔らかな湯触りが特徴です。血行を促進し、冷えた身体を芯からポカポカと温め、筋肉の疲労を優しく解きほぐします。冬の夜、雪化粧した渓谷の木立を眺めながら露天風呂に浸かる贅沢は、伊賀の冬旅ならではの至福のひとときです。
              </p>
            </div>
          </section>

          {/* Section 4: 厳選名宿5選 */}
          <section className="mb-16">
            <div className="border-l-4 border-emerald-600 pl-4 mb-8">
              <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase">Verified Hotels via Rakuten API</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【楽天トラベル実データ連携】赤目温泉・伊賀上野周辺の厳選名宿5選
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                ※公式リアルタイムAPIから取得した宿泊料金目安・レビュー評価・アクセス情報を掲載しています。
              </p>
            </div>

            <div className="space-y-8">
              {hotels.map((h) => (
                <div key={h.id} className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="p-5 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                        厳選第{h.id}位
                      </span>
                      <div className="flex items-center gap-3 text-xs sm:text-sm">
                        <span className="flex items-center text-amber-500 font-bold">
                          <Star className="w-4 h-4 fill-amber-400 stroke-amber-400 mr-1" />
                          {h.rating}
                        </span>
                        <span className="text-stone-400">({h.reviews.toLocaleString()}件)</span>
                        <span className="text-emerald-600 font-black text-sm sm:text-base">
                          {h.price}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                      {h.name}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
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
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition"
                      >
                        <span>楽天トラベルでプラン・空室を確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: 1泊2日モデルコース */}
          <section className="mb-16">
            <div className="border-l-4 border-emerald-600 pl-4 mb-6">
              <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【1泊2日モデルコース】伊賀上野城下町初詣と赤目四十八滝氷瀑・伊賀牛堪能ルート
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">1</span>
                  1日目：伊賀上野城下町散策・上野天神宮新春初詣＆赤目温泉
                </h3>
                <ol className="relative border-l border-stone-200 ml-3 space-y-4 text-xs sm:text-sm text-stone-600">
                  <li className="pl-4">
                    <strong className="text-stone-800">10:30 伊賀鉄道 上野市駅（忍者市駅）到着・城下町散策</strong><br />
                    忍者列車で上野市駅へ。駅前の歴史的町家が並ぶ商店街で伊賀くみひも体験や和菓子巡り。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">11:30 上野天神宮（菅原神社）で学業成就・厄除け新春初詣</strong><br />
                    城下町総鎮守に参拝し、道真公のご神徳を授かる。天神祭の伝統に触れる。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">12:30 伊賀上野城 白銀の高石垣見学＆伊賀流忍者博物館</strong><br />
                    高さ約30mの日本屈指の高石垣から冬の城下町を一望。からくり屋敷や手裏剣打ちを体験。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">15:30 赤目温泉へ移動・チェックイン＆渓流露天風呂</strong><br />
                    名勝の麓に位置する赤目温泉の宿に到着。美肌の単純温泉に浸かり、冬の冷えを芯から癒やす。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">18:30 幻の極上「伊賀牛すき焼き」と伊賀地酒の夕宴</strong><br />
                    口の中でとろける伊賀牛の霜降りを特製割り下で贅沢に味わい、至福の夜を過ごす。
                  </li>
                </ol>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">2</span>
                  2日目：赤目四十八滝冬の氷瀑トレッキング＆名張散策
                </h3>
                <ol className="relative border-l border-stone-200 ml-3 space-y-4 text-xs sm:text-sm text-stone-600">
                  <li className="pl-4">
                    <strong className="text-stone-800">08:00 宿で朝風呂と地元産食材の和朝食</strong><br />
                    清々しい朝の渓流を眺めながら露天風呂で目覚め、温かい郷土味噌汁とご飯を味わう。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">09:30 赤目四十八滝 氷瀑トレッキング出発</strong><br />
                    防寒具と滑り止めシューズを整え、不動滝・千手滝・布曳滝へ。凍結した神秘の氷柱群を鑑賞。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">12:00 名物「へこきまんじゅう」でほっこり休憩</strong><br />
                    滝の入口で名物のサツマイモ生地の手作り焼き菓子を熱々で味わい、冷えた身体を温める。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">13:30 名張市街の酒蔵巡りまたは青蓮寺湖へ</strong><br />
                    江戸時代創業の造り酒屋で伊賀酒の銘酒を購入し、冬景色の青蓮寺湖ドライブを楽しんで帰路へ。
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section 6: 冬（11・12・1月）の参拝・旅行攻略 */}
          <section className="mb-16">
            <div className="border-l-4 border-rose-600 pl-4 mb-6">
              <span className="text-xs font-bold text-rose-600 tracking-wider uppercase">Travel Guide & Tips</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【11・12・1月】伊賀・名張の気候・服装・トレッキングの注意点
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <Snowflake className="w-4 h-4 text-emerald-500" />
                  盆地の底冷えと防寒レイヤリング
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  伊賀盆地は周囲の山々から冷気が吹き溜まるため、冬の朝晩は氷点下に達する厳しい「底冷え」に見舞われます。風を通さない防風アウター、吸湿発熱インナー、マフラー、手袋を着用し、重ね着で温度調整ができる服装を準備してください。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <Footprints className="w-4 h-4 text-cyan-500" />
                  赤目四十八滝の足元対策と安全装備
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  赤目四十八滝の散策路は自然の岩場や石段が多く、冬期は飛沫が凍りついてツルツルに滑る箇所があります。スニーカーでは転倒の危険があるため、防水性のあるトレッキングシューズや防滑スノーブーツの着用が不可欠です。必要に応じて簡易チェーンスパイクを持参してください。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  名阪国道の凍結とスタッドレスタイヤ
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  名阪国道は山間部を抜ける高速規格の幹線道路であり、冬期は標高の高い区間（特に山添IC〜上野IC周辺）で濃霧や路面凍結が多発します。急ブレーキ・急ハンドルを避け、12月〜2月に車で訪れる際は必ずスタッドレスタイヤを装着して安全運転を心がけてください。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <Calendar className="w-4 h-4 text-rose-500" />
                  新春初詣と伊賀牛名店の事前予約
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  上野天神宮は元旦から1月3日にかけて初詣客で賑わいますが、境内が広いため比較的落ち着いて参拝できます。注意が必要なのは伊賀牛の老舗割烹や専門店です。正月三が日は休業または満席になることが多いため、食事付き宿泊プランを選ぶか、早めの事前予約を強く推奨します。
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: FAQセクション */}
          <section className="mb-16">
            <div className="border-l-4 border-emerald-600 pl-4 mb-6">
              <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                伊賀上野初詣＆赤目四十八滝冬旅 よくある質問（FAQ）
              </h2>
            </div>

            <div className="space-y-4">
              {faqList.map((f, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                  <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                    <span className="text-emerald-600 font-black">Q.</span>
                    <span>{f.q}</span>
                  </h3>
                  <div className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5 border-l-2 border-emerald-100 mt-2">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: まとめ＆内部リンク */}
          <section className="border-t border-stone-200 pt-10 text-center">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-4">
              白銀の高石垣と神秘の氷瀑、とろける伊賀牛が待つ冬の伊賀名張へ
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
              藤堂高虎公の誇る高石垣と上野天神宮の厳かな初詣、赤目四十八滝のクリスタル氷瀑、そして幻の伊賀牛すき焼きと赤目温泉。冬の凛とした空気の中で味わう歴史と自然の恵みが、新年の旅路を贅沢に彩ってくれます。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              <Link href="/features" className="px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition">
                ← 特集一覧に戻る
              </Link>
              <Link href="/prefectures/mie" className="px-4 py-2 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold transition">
                三重県の旅行ガイド・宿一覧
              </Link>
              <Link href="/" className="px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition">
                クラドトラベル トップページ
              </Link>
            </div>
          </section>

        </main>
      </article>
    </>
  );
}
`;

  const outDir = path.join(__dirname, '../../src/app', slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'page.tsx'), pageContent, 'utf8');
  console.log(`[Generated] ${slug}/page.tsx`);
}

module.exports = { generateMieIgaPage };
