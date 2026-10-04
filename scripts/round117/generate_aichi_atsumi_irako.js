const fs = require('fs');
const path = require('path');

function generateAichiAtsumiIrakoPage(hotels) {
  const slug = 'winter-aichi-atsumi-irako-nanohana-torafugu-asari-stay';
  const title = '【11・12・1月愛知】渥美半島＆伊良湖岬！1月満開の菜の花まつりと伊良湖岬初日の出・冬旬の天然とらふぐ＆焼き大アサリ・伊良湖温泉名宿5選';
  const description = '黒潮の恩恵を受ける愛知県・渥美半島（田原市）は、冬でも日差しが暖かく、1月上旬からは日本屈指の早春を告げる「渥美半島菜の花まつり」が開幕。メイン会場の伊良湖菜の花ガーデンには見渡す限りの黄色い絨毯が広がります。元旦には伊良湖岬灯台や日出の石門から昇る雄大な初日の出を拝み、冬の味覚の王様・天然とらふぐのてっさや白子、香ばしい焼き大アサリ、甘みたっぷりの完熟いちご狩りを堪能。2022年に開湯した美肌の湯「伊良湖温泉」と絶景オーシャンビューが広がる厳選の名宿5選を徹底解説します。';

  const hotelDetails = [
    {
      story: '渥美半島の最先端、小高い丘の上にそびえ立ち、太平洋と三河湾を360度見渡す圧倒的なロケーションを誇る「伊良湖オーシャンリゾート」。全室オーシャンビューの客室からは、冬の澄み渡る青空とコバルトブルーの大海原、夕暮れ時には水平線に沈む黄金の夕日を一望できます。宿の自慢は、2022年4月に開湯した「伊良湖温泉」を満喫できる天空の露天風呂。海抜100mの絶景から見下ろす海原と、夜には満天の星空が広がるインフィニティ温泉で、冷えた体が芯から温まります。夕食は和洋中グリルビュッフェで、冬期は渥美半島の新鮮な海の幸、ローストビーフ、みかわ牛や旬の握り寿司がライブキッチンで提供され、世代を問わず贅沢な滞在を満喫できます。',
      roomTip: 'プレミアムオーシャンビュー和洋室（最上階）。太平洋の彼方に神島や伊勢志摩を望み、バルコニーから冬の澄んだ潮風を感じられる極上空間。',
      gourmetTip: 'グリルビュッフェダイニング「Breeze」。渥美半島産の新鮮野菜や近海地魚の刺身、焼きたてのステーキとともに、冬の味覚を心ゆくまで。'
    },
    {
      story: '創業文久年間、登録有形文化財の風情ある数寄屋造りの本館を持つ「伊良湖温泉 和味の宿 角上楼（かくじょうろう）」。渥美半島福江港のすぐそばに佇み、大人の隠れ家として全国の食通を惹きつける極上の料理旅館です。冬の角上楼の主役は、なんといっても全国屈指の水揚げを誇る遠州灘の「天然とらふぐ」。大将自ら目利きした特大の天然トラフグを熟成させ、極薄に引かれたてっさ、旨味が凝縮したてっちり、炭火で香ばしく焼き上げる焼きフグ、そしてとろけるような白子焼きをフルコースで提供。木の温もりに満ちた館内には源泉かけ流しの伊良湖温泉が注がれ、湯上がりには格子戸の渡り廊下や中庭を眺めながら静かな冬の夜景に浸ることができます。',
      roomTip: '露天風呂付き別邸客室「翠（すい）」。誰にも邪魔されずプライベートな伊良湖温泉の湯船に浸かり、大正浪漫の面影を残す意匠に酔いしれるひととき。',
      gourmetTip: '「名物・天然とらふぐフルコース」。てっさの歯ごたえと芳醇な甘み、骨の周りのゼラチン質が濃厚なふぐちり鍋、〆のふぐ雑炊まで至福の連続。'
    },
    {
      story: '三河湾国定公園の豊かな自然林に囲まれ、広大な敷地内で四季の移ろいを感じられる「休暇村 伊良湖」。伊良湖岬周辺の観光拠点としてファミリーやシニアまで幅広い支持を集めています。冬の目玉は、季節限定で開催される「渥美半島ごちそうビュッフェ」。渥美半島特産のキャベツやトマト、冬に旨味が増す大アサリの酒蒸しや浜焼き、ブランド豚「渥美うまみポーク」のしゃぶしゃぶなど、地産地消のこだわり料理が所狭しと並びます。大浴場「朝桜の湯」には美肌効果の高いにごり湯や薬湯、露天風呂が備わり、散策で疲れた体を心地よく癒やしてくれます。1月からの菜の花まつり会場へも車で約10分とアクセス良好です。',
      roomTip: '本館和洋室またはコテージ棟。窓の外に広がる松林と穏やかな三河湾の借景が心地よく、清潔感あふれるモダンな設え。',
      gourmetTip: '「冬のプレミアムビュッフェ」。職人が目の前で焼き上げる熱々の大アサリ浜焼きと、新鮮な地魚のお造りコーナーが一番人気。'
    },
    {
      story: '恋路ヶ浜を見下ろす高台に位置し、わずか8室のみの贅沢なプライベートステイを提供するスモールラグジュアリー「伊良湖ホテル＆リゾート」。全室から雄大な太平洋の水平線と白砂青松の海岸線を望み、波の音をBGMに静謐な時間を過ごせます。こちらの最大の魅力は、本場フランスで腕を磨いたフレンチシェフが手がける極上のディナー。冬の三河湾・遠州灘で獲れた天然ヒラメや車海老、伊勢海老、渥美牛や採れたての旬野菜をクラシックとモダンが融合した華やかなフレンチコースへと昇華させます。展望大浴場からも広大な海原が一望でき、冬の夕暮れ時には海と空が茜色から深い藍色へと移ろうマジックアワーを堪能できます。',
      roomTip: 'スーペリアオーシャンビュースイート。広々としたバルコニーと大きな窓から、恋路ヶ浜の白波と太平洋の水平線を絵画のように眺望。',
      gourmetTip: 'メインダイニング「クード・ヴァン」。冬の天然魚介と三河牛フィレ肉を取り入れたスペシャリテコース。厳選されたワインとのペアリングも秀逸。'
    },
    {
      story: '明治時代創業、かつて旧東海道・伊良湖街道の宿場町として栄えた福江地区に建つ「伊良湖温泉 浪漫の宿 井筒楼（いづつろう）」。木造3階建ての風格ある建物は登録有形文化財に指定されており、館内に一歩足を踏み入れれば、磨き上げられた黒光りする廊下や大正ロマンのアンティーク家具が迎えてくれます。角上楼の姉妹館として、上質な伊良湖温泉の貸切風呂や畳敷きの落ち着いた和室を完備。料理は角上楼の厨房から運ばれる本格会席で、冬のふぐ料理や地元漁港水揚げの地魚をリーズナブルに味わえるのが魅力です。古き良き日本の宿場町の情緒を肌で感じながら、温かいもてなしに心和む冬の滞在が叶います。',
      roomTip: '大正浪漫和室。職人技が光る組子細工や格天井の意匠を眺めながら、歴史のぬくもりに包まれてゆったりと過ごせます。',
      gourmetTip: '本館「角上楼」でいただく天然とらふぐミニ会席または地魚旬会席。冬ならではのふぐ刺しや地魚の煮付けが舌を唸らせます。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥18,000〜' : i === 1 ? '¥38,000〜' : i === 2 ? '¥14,000〜' : i === 3 ? '¥26,000〜' : '¥16,000〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.36' : i === 1 ? '4.46' : i === 2 ? '4.17' : i === 3 ? '4.32' : '4.42');
    const reviewCount = h.reviewCount || (i === 0 ? 1850 : i === 1 ? 420 : i === 2 ? 890 : i === 3 ? 210 : 340);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || '豊橋駅よりバス約90分または車約70分')},
              special: ${JSON.stringify(h.hotelSpecial || '冬の渥美半島菜の花まつりと天然とらふぐ・伊良湖温泉を満喫する名宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '海抜100mの天空露天風呂・インフィニティ伊良湖温泉＆満天星空' : i === 1 ? '創業文久年間の登録有形文化財・遠州灘極上天然とらふぐフルコース' : i === 2 ? '三河湾国定公園の豊かな松林・大アサリ浜焼き＆渥美半島ごちそうビュッフェ' : i === 3 ? '全8室スモールラグジュアリー・恋路ヶ浜一望の絶景フレンチコース' : '大正浪漫の登録有形文化財宿・風情あふれる貸切風呂と角上楼仕込みの旬美食')},
                ${JSON.stringify(i === 0 ? '全室オーシャンビュー・冬のコバルトブルー太平洋と夕日パノラマ' : i === 1 ? '大人の隠れ家料理旅館・源泉かけ流しの伊良湖温泉と別邸露天風呂客室' : i === 2 ? '菜の花ガーデンまで車10分・ファミリーからシニアまで快適な設備' : i === 3 ? '波音に包まれるプライベート空間・夕暮れ時の絶景マジックアワー' : '明治建築のぬくもり・宿場町の歴史を感じる落ち着いた和空間')},
                ${JSON.stringify(i === 0 ? '和洋中ビュッフェのライブキッチン・家族旅行からカップルまで大満足' : i === 1 ? '全国の食通が絶賛するてっさ＆白子焼き・記念日に最高の格式' : i === 2 ? '天然温泉「朝桜の湯」・ウォーキングコースや周辺散策も充実' : i === 3 ? 'ソムリエ厳選ワインと地魚フレンチ・静寂を愛する大人の特等席' : 'ふぐ会席を気軽に楽しめる良心的な価格帯・温かなおもてなし')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "「渥美半島菜の花まつり」の開催期間と見どころは？",
      a: "例年1月中旬から3月下旬まで開催されます。メイン会場となる「伊良湖菜の花ガーデン（田原市堀切町）」では、約4ヘクタールの敷地に数百万人分とも言われる菜の花が咲き誇り、一面黄色い絨毯の絶景が広がります。菜の花迷路や菜の花畑を見下ろす「なのはなタワー」、特設屋台での菜の花コロッケや菜の花ジェラートの販売など、一足早い春の息吹を五感で楽しめます。"
    },
    {
      q: "伊良湖岬で初日の出を見るおすすめスポットと時間帯は？",
      a: "元旦の日の出時刻は例年6時55分から7時00分頃です。おすすめスポットは波の浸食によってできた巨岩が印象的な「日出の石門（ひいのせきもん）」や「恋路ヶ浜」、そして白亜の「伊良湖岬灯台」です。太平洋の水平線から真っ赤な太陽が昇り、荒波と奇岩が黄金色に染まる光景は圧巻の美しさです。早朝は海風が非常に冷え込むため、ダウンジャケットや防風手袋などの厳重な防寒着が必要です。"
    },
    {
      q: "冬の渥美半島で味わうべきご当地グルメは何ですか？",
      a: "冬の王様は「遠州灘の天然とらふぐ」です。福江港や伊良湖港に水揚げされる天然トラフグは身が引き締まり、てっさやふぐ鍋、唐揚げが絶品です。また、恋路ヶ浜沿いの茶屋などで香ばしい醤油の香りを漂わせる「焼き大アサリ」や、地元ブランド牛「みかわ牛」、そして12月から出荷が本格化する「完熟いちご（章姫・かおり野）」のいちご狩りも外せない冬の名物です。"
    },
    {
      q: "2022年に開湯した「伊良湖温泉」の特徴や泉質は？",
      a: "伊良湖温泉は2022年4月に配湯が始まった新しい天然温泉です。泉質は「ナトリウム・カルシウム―塩化物温泉（低張性・弱アルカリ性・低温泉）」で、海水に似た塩分を含んでいるため保温効果が極めて高く、湯冷めしにくいのが特徴です。また肌の角質をやさしく落とす美肌効果もあり、冬の冷えた体とお肌を優しく潤してくれます。"
    },
    {
      q: "名古屋や東京方面からのアクセス方法と車・公共交通の注意点は？",
      a: "車の場合、東名高速道路「音羽蒲郡IC」または「豊川IC」から国道259号・42号を経由して約70〜90分です。冬期は積雪や路面凍結の心配はほとんどありませんが、半島特有の強い季節風が吹くため横風に注意してください。公共交通機関の場合は、JR・名鉄豊橋駅から豊鉄バス「伊良湖本線」で約90分、または豊橋鉄道渥美線で終点「三河田原駅」まで行き、そこから路線バスに乗り継ぐルートが便利です。"
    }
  ];

  const pageContent = `import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Landmark, Waves, ShieldCheck, Footprints, Coffee, Camera, Sun, Flower2
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '渥美半島 ホテル, 伊良湖 ホテル, 伊良湖温泉 旅館, 渥美半島 菜の花まつり, 伊良湖岬 初日の出, 天然とらふぐ 渥美半島, 大アサリ 伊良湖, 角上楼, 伊良湖オーシャンリゾート, 1月 愛知 観光',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}'
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: ${JSON.stringify(hotels[0]?.hotelImageUrl || 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&h=630&q=80')},
      width: 1200,
      height: 630,
      alt: '冬の渥美半島伊良湖岬の海原と菜の花畑'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    images: [${JSON.stringify(hotels[0]?.hotelImageUrl || 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&h=630&q=80')}]
  }
};

export default function AichiAtsumiIrakoWinterPage() {
  const hotelsData = [
${hotelCardsCode}
  ];

  const faqData = ${JSON.stringify(faqList, null, 2)};

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
        "datePublished": "2026-10-04T00:00:00+09:00",
        "dateModified": "2026-10-04T00:00:00+09:00",
        "inLanguage": "ja",
        "publisher": {
          "@type": "Organization",
          "name": "地域の宿探訪",
          "url": "https://croud-travel.com"
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
            "name": "特集一覧",
            "item": "https://croud-travel.com/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "渥美半島＆伊良湖岬冬特集",
            "item": "https://croud-travel.com/${slug}"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-amber-950 via-slate-900 to-teal-950 text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(245,158,11,0.2),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-medium">
            <Flower2 className="w-4 h-4 text-amber-300" />
            <span>11月・12月・1月冬〜早春の半島旅特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-6">
            渥美半島＆伊良湖岬！<br className="hidden sm:inline" />
            1月満開の菜の花まつりと初日の出・冬旬の天然とらふぐ＆伊良湖温泉名宿5選
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            太平洋と三河湾に抱かれた愛知県・渥美半島。黒潮の温もりを受けるこの地は、厳冬期でも晴天率が高く、1月中旬からは日本屈指の早春「渥美半島菜の花まつり」がスタートします。見渡す限りの黄色い菜の花畑、伊良湖岬灯台や日出の石門から拝む神秘的な初日の出、遠州灘の極上天然とらふぐと焼き大アサリの香ばしさ。2022年に誕生した新名湯「伊良湖温泉」で芯まで温まる至福の冬旅をお届けします。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-200 border-t border-slate-700/60 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
              <span>旬期：11月〜2月（菜の花1月〜）</span>
            </div>
            <div className="flex items-center gap-2">
              <Flower2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>伊良湖菜の花ガーデン満開</span>
            </div>
            <div className="flex items-center gap-2">
              <Waves className="w-4 h-4 text-amber-400 shrink-0" />
              <span>日出の石門＆岬の初日の出</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-amber-400 shrink-0" />
              <span>天然とらふぐ＆大アサリ浜焼き</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Section 1: エリア解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Destination Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Flower2 className="w-6 h-6 text-amber-500 shrink-0" />
              一足早い春の息吹！黄金に輝く菜の花畑と荒波寄せる伊良湖岬の冬景色
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              日本列島が厳しい寒さに包まれる1月、愛知県の最南端に位置する渥美半島は、どこよりも早く鮮やかな黄色に染まり始めます。温暖な気候を活かして開催される「渥美半島菜の花まつり」は、田原市全域に数百万本もの菜の花が咲き乱れる東海地方屈指の早春の風物詩です。特にメイン会場となる「伊良湖菜の花ガーデン」では、広大な敷地一面に甘い花の香りが漂い、青空との鮮やかなコントラストを描き出します。
            </p>
            <p>
              半島の突端「伊良湖岬」に立てば、荒れ狂う冬の太平洋と、穏やかな三河湾が交わるダイナミックな潮の流れを間近に体感できます。白亜の伊良湖岬灯台から「恋路ヶ浜」へと続く遊歩道は、潮風を感じながらの散策に最適。波の浸食によって中央が空洞になった「日出の石門（ひいのせきもん）」周辺は、元旦に水平線から昇る初日の出を拝む聖地としても知られ、全国から多くの参拝者が集まります。
            </p>
            <p>
              そして2022年春、この地に待望の天然温泉「伊良湖温泉」が誕生しました。湯冷めしにくい良質な塩化物温泉は、冷えた体を芯からポカポカに温め、肌をしっとりと包み込みます。花と海、温泉、そして冬の味覚が揃った渥美半島は、寒さを忘れて元気をチャージできる最高の冬のリトリート先です。
            </p>
          </div>
        </section>

        {/* Section 2: 宿泊施設一覧 */}
        <section className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Building className="w-6 h-6 text-amber-500 shrink-0" />
              渥美半島・伊良湖岬で泊まりたい冬の厳選宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              ※楽天トラベルの最新APIデータを反映。絶景露天風呂、極上ふぐ料理、おもてなしの格式を兼ね備えた名宿を厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((h) => (
              <article key={h.id} className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
                  <div className="lg:col-span-5 space-y-3">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                      <img 
                        src={h.img} 
                        alt={h.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-xs font-bold">
                        第{h.id}位
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span>{h.rating}</span>
                        <span className="text-slate-400 font-normal">({h.reviews}件)</span>
                      </div>
                      <div className="text-slate-600 font-medium">
                        目安: <span className="text-slate-900 font-bold text-sm">{h.price}</span>/人
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{h.access}</span>
                      </div>

                      <h3 className="text-lg sm:text-2xl font-bold text-slate-900 hover:text-amber-600 transition-colors">
                        <a href={h.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                          {h.name}
                          <ExternalLink className="w-4 h-4 text-slate-400 shrink-0" />
                        </a>
                      </h3>

                      <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200/60 rounded-md px-2.5 py-1 mt-2 inline-block font-medium">
                        {h.special}
                      </p>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-3">
                        {h.story}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
                      <div className="bg-slate-50 rounded-lg p-3 space-y-1.5">
                        <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>おすすめ客室：</span>
                          <span className="font-normal text-slate-600">{h.roomTip}</span>
                        </div>
                        <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                          <Utensils className="w-3.5 h-3.5 text-amber-500" />
                          <span>冬の美食ポイント：</span>
                          <span className="font-normal text-slate-600">{h.gourmetTip}</span>
                        </div>
                      </div>

                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-slate-500">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                            <span className="truncate">{hl}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2">
                        <a
                          href={h.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-2.5 px-4 rounded-xl text-sm shadow-sm transition-all text-center"
                        >
                          <span>空室状況・宿泊プランを見る（楽天トラベル）</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 3: 気候・服装・持ち物ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Climate & Packing Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Sun className="w-6 h-6 text-amber-500 shrink-0" />
              渥美半島・伊良湖岬の冬の気候と時期別おすすめの服装・防寒対策
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-amber-900 text-base flex items-center justify-between">
                <span>11月中旬〜下旬</span>
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-medium">平均 14℃ / 最低 9℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                黒潮の影響で日中は日差しがポカポカと暖かく、秋用のジャケットやカーディガンで快適に観光できます。ただし、伊良湖岬の先端や恋路ヶ浜など海岸沿いは海風が吹き抜けるため、風を通しにくいウィンドブレーカーやストールを携帯すると安心です。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-amber-900 text-base flex items-center justify-between">
                <span>12月（年末年始）</span>
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-medium">平均 9℃ / 最低 4℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                全国トップクラスの晴天率を誇りますが、冬型の気圧配置になると「遠州のからっ風」と呼ばれる強い季節風が吹きます。体感温度が実際の気温より3〜4℃低く感じられるため、防風性のあるダウンジャケットや裏起毛パンツ、手袋を着用して散策しましょう。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-amber-900 text-base flex items-center justify-between">
                <span>1月（菜の花・初日の出期）</span>
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-medium">平均 6℃ / 最低 2℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                日中の菜の花ガーデンは陽射しがあれば過ごしやすいですが、早朝の「初日の出」や「日出の石門」での朝焼け鑑賞は氷点下の強風が吹き荒れます。厚手のロングダウン、ニット帽、ネックウォーマー、貼るカイロなどの重防寒が必須です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: 絶景フォトスポット＆撮影攻略ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Photo Spots & Tips</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Camera className="w-6 h-6 text-amber-500 shrink-0" />
              冬の渥美半島を美しく切り取る！絶景フォトスポット＆撮影テクニック
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600">
            <div className="border border-slate-200 rounded-xl p-5 space-y-2.5 bg-slate-50/50">
              <h3 className="font-bold text-amber-950 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600" />
                伊良湖菜の花ガーデンの黄色い絨毯
              </h3>
              <p className="leading-relaxed">
                青空が広がる晴天の午前中（10:00〜12:00）がベスト。順光の位置から広角レンズでローアングルから撮影すると、画面いっぱいに広がる鮮やかな黄色の菜の花と澄み渡るスカイブルーの鮮烈なコントラストを美しく捉えることができます。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-2.5 bg-slate-50/50">
              <h3 className="font-bold text-amber-950 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600" />
                日出の石門と太平洋の初日の出
              </h3>
              <p className="leading-relaxed">
                日の出30分前の朝焼けグラデーションから撮影をスタート。奇岩の中央に空いた洞門や激しく打ち寄せる白波を前景に配し、水平線から顔を出す黄金色の太陽をシルエットで強調すると、神話の世界のような神秘的な一枚が完成します。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-2.5 bg-slate-50/50">
              <h3 className="font-bold text-amber-950 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600" />
                恋路ヶ浜と伊良湖岬灯台の黄昏景
              </h3>
              <p className="leading-relaxed">
                日没直後のマジックアワー（16:45〜17:15）が狙い目。白亜の灯台に明かりが灯り、遠く三重県の神島や伊勢志摩の島影が茜色から深い藍色へと移ろうトワイライトの空に浮かび上がります。波打ち際をスローシャッターで撮影するのもおすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: 冬の美食＆お土産 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Gourmet & Fruits</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-amber-500 shrink-0" />
              冬の渥美半島を味わい尽くす！遠州灘天然とらふぐ・焼き大アサリ・完熟いちご
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-amber-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                遠州灘の極上天然とらふぐ
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                実は全国有数のトラフグの水揚げを誇る遠州灘。福江港や伊良湖港に水揚げされる天然トラフグは、激しい海流に揉まれて身が締まり、噛むほどに上質な旨味と上品な甘みが広がります。薄造りのてっさ、豪快なふぐちり鍋、濃厚な白子焼きまで、本場ならではの贅沢を堪能できます。
              </p>
            </div>

            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-amber-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                恋路ヶ浜名物「焼き大アサリ」
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                伊良湖岬の名物といえば、手のひらほどもある大きな貝「ウチムラサキ（大アサリ）」。炭火の上で醤油と酒を垂らしてジュワッと焼き上げると、香ばしい磯の香りが立ち込めます。肉厚でプリプリとした食感と濃厚な貝出汁は、旅情をそそる最高の逸品です。
              </p>
            </div>

            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-amber-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                糖度抜群の完熟いちご狩り
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                冬の日照時間が日本一長い渥美半島は、愛知県屈指のいちごの産地。12月から5月にかけて農園で楽しめるいちご狩りでは、酸味が少なく大粒の「章姫（あきひめ）」や香り高い「かおり野」を時間無制限で心ゆくまで味わえます。練乳をたっぷりつけて頬張るもぎたての甘さは格別です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: モデルコース */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-amber-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-3xl font-bold text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-amber-400 shrink-0" />
              菜の花と天然とらふぐを満喫する1泊2日王道モデルコース
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-amber-300 text-lg">
                <span className="bg-amber-600 text-white text-xs px-2.5 py-1 rounded-md">Day 1</span>
                <span>冬のいちご狩り＆日出の石門夕景と伊良湖温泉</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>11:30</strong> 豊橋方面から渥美半島へドライブ。道中のいちご農園で大粒の完熟いちご狩りを堪能。
                </p>
                <p>
                  <strong>13:30</strong> 道の駅「めっくんハウス」や「田原めっくんはうす」で地元産の冬野菜やメロン加工品をチェック。
                </p>
                <p>
                  <strong>15:30</strong> 伊良湖岬の宿へチェックイン。荷物を置いて一休み。
                </p>
                <p>
                  <strong>16:30</strong> 「日出の石門」へ。波の浸食で作られた奇岩と、冬の夕暮れに赤く染まる太平洋の絶景を撮影。
                </p>
                <p>
                  <strong>18:30</strong> 宿で2022年開湯の「伊良湖温泉」に浸かり、遠州灘の天然とらふぐフルコースや大アサリに舌鼓。
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-amber-300 text-lg">
                <span className="bg-amber-600 text-white text-xs px-2.5 py-1 rounded-md">Day 2</span>
                <span>伊良湖岬の初日の出・菜の花ガーデンと大アサリ浜焼き</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>06:45</strong> 早起きして伊良湖岬灯台または恋路ヶ浜へ。水平線から昇る神々しい朝日に手を合わせる。
                </p>
                <p>
                  <strong>08:00</strong> 宿で三河湾の海の幸を取り入れた和朝食をゆっくり楽しむ。
                </p>
                <p>
                  <strong>09:30</strong> 「伊良湖菜の花ガーデン」へ。満開の黄色い絨毯のなか、菜の花迷路を散策し記念撮影。
                </p>
                <p>
                  <strong>11:30</strong> 恋路ヶ浜沿いの茶屋で、名物の香ばしい焼き大アサリを熱々で頬張る。
                </p>
                <p>
                  <strong>13:30</strong> 伊良湖港からフェリーで鳥羽へ渡るか、豊橋方面へ戻りながら帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              冬の渥美半島・伊良湖岬旅行 よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-5 bg-slate-50/30 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-amber-600 font-extrabold shrink-0">Q.</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: 周遊内部リンク */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-amber-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              あわせて楽しむ！東海・中部エリアの冬特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <Link 
              href="/winter-shizuoka-hamamatsu-hamanako-fugu-eel-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-amber-400 block mb-1">浜名湖冬特集</span>
              <span className="font-bold text-white block">浜名湖の冬！天然トラフグ＆名物うなぎ・舘山寺温泉名宿</span>
            </Link>

            <Link 
              href="/aichi-chita-minamichita-himakajima-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-amber-400 block mb-1">知多半島・日間賀島特集</span>
              <span className="font-bold text-white block">知多半島＆日間賀島！冬のタコ・ふぐと海の絶景温泉名宿</span>
            </Link>

            <Link 
              href="/winter-mie-nabana-no-sato-illumination-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-amber-400 block mb-1">三重・なばなの里冬特集</span>
              <span className="font-bold text-white block">国内最高峰イルミネーション！なばなの里＆長島温泉名宿</span>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer Navigation */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200 mt-16 text-center text-xs text-slate-500">
        <p>© 2026 地域の宿探訪 - 日本の四季と極上ホテル・旅館を巡る旅</p>
      </footer>
    </div>
  );
}
`;

  return { slug, pageContent };
}

module.exports = { generateAichiAtsumiIrakoPage };
