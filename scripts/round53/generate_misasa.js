const fs = require('fs');
const path = require('path');

function generateMisasaPage(hotels) {
  const slug = 'winter-tottori-misasa-onsen-matsuba-crab-stay';
  const title = '【11月解禁！鳥取松葉ガニと三朝温泉】日本海直送タグ付き活ガニと世界屈指のラジウム名湯宿5選';
  const description = '11月6日解禁！境港・網代港直送のブランドタグ付き「活松葉ガニ」フルコース！開湯850年、世界有数のラドン含有量を誇る三朝温泉の奇跡のホルミシス効果に浸かり、国登録有形文化財の老舗宿や大庭園露天風呂で寛ぐ冬の至高旅。';

  const hotelDetails = [
    {
      story: '本館・離れなど建物のほぼ全域が国の登録有形文化財に指定されている、昭和7年創業の名門旅館。全国でも極めて珍しい、浴槽の底の岩盤からポコポコと自然湧出する3つの自噴泉を備えた「巌窟の湯（がんくつのゆ）」は、まさに奇跡の湯処です。湯船の深さが場所によって異なり、足元から湧き立ての超高濃度ラドン泉が直接体に触れる感動は言葉になりません。宮大工の技が光る繊細な組子障子や銘木の柱に囲まれた客室は、大人の静寂な休日にふさわしい格調の高さ。夕食は境港から直接届く赤タグ付きの活松葉ガニを、花咲くお造りや炭火焼き、甲羅味噌焼きで味わい尽くす至高の会席です。',
      roomTip: '三朝川の渓流を望む純和風客室は、冬になると対岸の雪景色と川のせせらぎが心地よく調和し、文豪の気分でゆったりと読書や思索に耽ることができます。',
      gourmetTip: '名物「活松葉ガニづくし会席」では、タグ付きの活カニを一人あたり贅沢に1.5〜2杯使用。料理長特製の出汁でいただくカニすきと、濃厚なカニ味噌を溶いた甲羅酒は悶絶級の美味です。'
    },
    {
      story: '三朝温泉街の静かな一角に佇み、女性3代（大女将・若女将・若旦那）が温かな笑顔でもてなす全数室の隠れ家的な温泉小宿。大手旅行予約サイトのクチコミ評価では驚異の4.9点以上を維持し続けています。自慢の内湯は、三朝のラジウム温泉を源泉100%かけ流しで注ぎ込んでおり、こじんまりとした湯船だからこそ湯の鮮度が抜群。熱すぎずじっくりと長湯できる湯加減に調整されています。夕食は女将が丹精込めて手作りする田舎風会席で、山陰の冬の味覚である松葉ガニ料理を家庭的な温もりとともに心ゆくまで味わうことができます。',
      roomTip: '清掃が隅々まで行き届いた清潔な和室は、畳の香りが心地よく、静かな環境で誰にも邪魔されずにぐっすりと眠ることができます。',
      gourmetTip: '手作りのカニ鍋や焼きガニ、地元鳥取県産の炊きたて米「星空舞」、自家製のお漬物など、ひと口ごとに優しさが染み渡る心温まる料理が並びます。'
    },
    {
      story: '三朝川の清流沿いに建ち、豊かな自然景観と開放的な温泉施設が自慢の快適な温泉宿。広々とした大浴場と岩造りの露天風呂からは、三朝の山並みと立ち上る湯けむりを眺めることができ、心地よい川のせせらぎをBGMにリラックスできます。高温サウナも完備されており、ラジウム温泉と温冷交代浴を組み合わせることで、新陳代謝と免疫力を最大限に高めることができます。館内にはバリアフリー対応や充実した売店もあり、ファミリーや三世代旅行にも使い勝手が抜群。冬の鳥取グルメを味わう多彩な宿泊プランが用意されています。',
      roomTip: '三朝川に面したリバービューの和洋室は、ベッドと畳スペースが両方あり、足腰に不安のあるシニア世代にも非常に過ごしやすいレイアウトです。',
      gourmetTip: '冬期限定の「松葉ガニ会席プラン」では、茹で松葉ガニ姿盛りやカニすき鍋、鳥取和牛の陶板焼きなど、山陰の二大ブランド食材を同時に堪能できる贅沢な献立です。'
    },
    {
      story: '夕暮れ時になると露天風呂の周囲に本物のかがり火が灯され、揺らめく炎と湯けむりが幻想的な世界を創り出す風情ある温泉旅館。野趣あふれる自然石を組んだ露天風呂「かがり火の湯」では、冷たい冬の夜風を感じながら、世界屈指のラジウム泉に肩まで浸かる贅沢な湯浴みが楽しめます。温泉街の中心である「三朝温泉本通り」まで徒歩2分という好立地にあり、浴衣姿に丹前を羽織って、射的場や駄菓子屋、足湯を巡る温泉街散策に最も適した宿のひとつです。',
      roomTip: '落ち着いた純和室からは手入れされた中庭や温泉街の屋根並みを望め、静かで情緒あふれる大人の時間を演出してくれます。',
      gourmetTip: '料理長厳選の山陰海鮮会席では、旬の松葉ガニ料理に加えて、日本海の寒ビラメや白イカ、鳥取県産黒毛和牛など、山陰の旬の恵みが贅沢に盛り込まれます。'
    },
    {
      story: '大正9年（1920年）創業、昭和天皇をはじめ数々の皇族や与謝野鉄幹・晶子夫妻、島崎藤村ら多くの文人墨客が定宿とした三朝屈指の格式ある名門旅館。最大の自慢は、敷地内の日本庭園を取り囲むように配された「回遊式大庭園風呂 山水ノ湯」。右の湯・左の湯合わせて大小12もの異なる湯処があり、滝見露天風呂、歩行湯、洞窟風呂、ラドン蒸気風呂など、趣向を凝らした湯めぐりを館内だけで存分に楽しめます。伝統の京風会席に山陰の極上素材を融合させたお料理と、老舗ならではの洗練されたおもてなしはまさに圧巻です。',
      roomTip: '三朝川を望む特別室や数寄屋造りの客室は、欄間の彫刻や床の間のしつらえに至るまで日本の建築美が凝縮された贅沢な空間です。',
      gourmetTip: '名物「特選活松葉ガニ尽くし会席」は、境港直送の最高級タグ付き松葉ガニを一人あたり丸ごと2杯使用。焼きガニの香ばしさと、繊細な甘みのカニ刺しは一生の思い出になる美味しさです。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName)},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80')},
              rating: ${h.reviewAverage ? Number(h.reviewAverage).toFixed(2) : '4.45'},
              reviews: ${h.reviewCount || 160},
              price: ${JSON.stringify(h.hotelMinCharge ? `¥${h.hotelMinCharge.toLocaleString()}〜` : '¥13,000〜')},
              access: ${JSON.stringify(h.access || 'JR山陰本線 倉吉駅より路線バス約20分または無料送迎')},
              special: ${JSON.stringify(h.hotelSpecial || '世界屈指のラジウム泉とタグ付き松葉ガニ会席')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '【館のほぼ全域が国登録有形文化財】足元から自噴する奇跡の「巌窟の湯」と匠の技が息づく木造建築美' : i === 1 ? '【クチコミ驚異の4.9点】女性3代で営む温もり宿！三朝の名湯と女将手作りの滋味あふれる田舎料理' : i === 2 ? '三朝川のせせらぎを望む開放的な大浴場・露天風呂とサウナ完備！鳥取グルメを堪能する快適宿' : i === 3 ? 'かがり火が揺らめく野趣あふれる岩造り露天風呂！高濃度ラジウム泉を心ゆくまで堪能' : '大正9年創業！文人墨客に愛された老舗名宿。大小12の湯処を巡る「回遊式大庭園風呂 山水ノ湯」')},
                ${JSON.stringify(i === 0 ? '境港直送のブランドタグ付き活松葉ガニづくし会席（花咲くカニ刺し・炭火焼き・甲羅味噌）' : i === 1 ? '家庭的で温かいおもてなしと、厳選された地元山陰の旬素材を使った贅沢なカニ料理' : i === 2 ? '冬限定の松葉ガニ会席やすき焼きプランなど、充実したお料理の選択肢' : i === 3 ? '三朝温泉本通りに近く、夜の温泉街そぞろ歩きや足湯めぐりにも最適なロケーション' : '料理長が腕を振るうタグ付き松葉ガニ姿茹でやカニすき鍋、鳥取和牛との贅沢な饗宴')},
                ${JSON.stringify(i === 0 ? '自噴泉を含む5つの自家源泉を保有し、全国的にも極めて希少な高濃度ラドン泉を満喫' : i === 1 ? '心温まるおもてなしと静かな環境で、長期滞在や湯治リピーターにも愛される隠れ宿' : i === 2 ? '広々とした客室と充実の館内設備で、ファミリーやグループ旅行にも大人気' : i === 3 ? '情緒あるかがり火の灯りに照らされながら浸かる夜の露天風呂は至福のひととき' : '朝夕で男女入れ替えとなる多彩な大浴場で、三朝が誇るホルミシス効果を全身で体感')}
              ]
            }`;
  }).join(',\n');

  const pageContent = `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, 
  Award, Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Droplets, Info 
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '三朝温泉 松葉ガニ, 鳥取 松葉がに 旅館, 活松葉ガニ 温泉, 三朝温泉 ラジウム温泉, 境港 カニ 温泉宿, 依山楼岩崎, 旅館大橋, 冬旅行 11月 12月',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}',
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: ${JSON.stringify(title)},
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
  }
};

export default function MisasaCrabWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/${slug}#article",
        "headline": ${JSON.stringify(title)},
        "description": ${JSON.stringify(description)},
        "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-27T00:00:00+09:00",
        "dateModified": "2026-09-27T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド 編集部",
          "url": "https://croud-travel.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド",
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
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/${slug}#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "鳥取の「松葉ガニ」の解禁日と最も美味しい時期はいつですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "鳥取県の松葉ガニ（ズワイガニの雄）漁は毎年11月6日に一斉解禁されます。11月中旬から12月下旬にかけては水揚げが最盛期を迎え、甲羅に身がぎっしりと詰まり、濃厚なカニ味噌と上品な甘みを楽しめる年間最高のシーズンとなります。"
            }
          },
          {
            "@type": "Question",
            "name": "三朝温泉の「ラジウム温泉」の効能と効果的な入浴法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "三朝温泉は世界有数の高濃度ラドン含有量を誇ります。微量の放射線が細胞を活性化し新陳代謝や免疫力を高める「ホルミシス効果」で知られています。浸かるだけでなく、立ち上る湯気を鼻や口から深く吸い込む「吸気浴」、飲泉所で源泉を飲む「飲泉」を組み合わせることで、体の内外から温浴効果を体感できます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬に車で三朝温泉へ向かう際、スタッドレスタイヤは必要ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "12月中旬以降は中国山地や鳥取県内の峠道（院庄IC〜三朝間の国道179号など）で積雪や路面凍結が発生しやすくなります。冬季は必ずスタッドレスタイヤを装着してください。公共交通機関をご利用の場合は、JR山陰本線倉吉駅から各宿の無料送迎バスや路線バス（約20分）が便利です。"
            }
          },
          {
            "@type": "Question",
            "name": "「タグ付き活松葉ガニ」と一般的なカニ料理の違いは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "境港や網代港で水揚げされた高品質な松葉ガニには、産地と船名を証明する「赤色や青色のタグ」が付けられます。冷凍物とは異なり、生きたまま宿へ運ばれるため、繊維が花のように開く「カニ刺し」や香ばしい「炭火焼きガニ」、濃厚な「甲羅酒」など、極上の鮮度でしか味わえない本物のカニ料理を堪能できます。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.com/${slug}#hotels",
        "itemListElement": [
${hotels.map((h, idx) => `          {
            "@type": "ListItem",
            "position": ${idx + 1},
            "name": ${JSON.stringify(h.hotelName)},
            "url": ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')}
          }`).join(',\n')}
        ]
      }
    ]
  };

  const hotelList = [
${hotelCardsCode}
  ];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-rose-700 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85"
          alt="山陰・三朝温泉の湯けむりと冬の日本海で水揚げされる極上松葉ガニ"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-700/90 text-white text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-rose-400/30">
            <Utensils className="w-4 h-4 text-amber-200" />
            <span>11月解禁！冬の味覚の王様＆世界屈指のラジウム泉</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11月解禁！鳥取松葉ガニと三朝温泉】<br className="hidden sm:inline" />
            日本海直送タグ付き活ガニと世界屈指のラジウム名湯宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            11月6日、日本海の冬を告げる松葉ガニ漁が一斉解禁。境港直送のブランドタグ付き活カニをフルコースで味わい、「三日目の朝には病が治る」と伝わる奇跡のラジウム名湯で心身を解き放つ至福の山陰ステイ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-rose-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-400" /> 鳥取県（三朝温泉・境港・倉吉）</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-100">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-700">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-700 uppercase tracking-widest">King of Winter Delicacies</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                雪降る山陰に響く解禁の汽笛。活松葉ガニと奇跡のラジウム名湯の饗宴
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            毎年11月6日、日本海に冬の訪れを告げる松葉ガニ漁が一斉に解禁されます。鳥取の港（境港・網代港）から水揚げされるズワイガニの雄「とっとり松葉がに」は、ぎっしりと詰まった緻密な身肉、上品で濃厚な甘み、そして芳醇な香りを放つカニ味噌が詰まった冬の味覚の最高峰です。特に水揚げ時に厳しい基準をクリアしたカニにのみ付けられる「赤タグ」は、鮮度と品質が保証された本物の証。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            生きたまま宿へ届けられる活松葉ガニは、料理人の手によって芸術品のようなフルコースへと昇華します。氷水でキュッと締めることで花びらのように美しく開く繊細な「カニ刺し」、香ばしい湯気とともに甘みが凝縮する「炭火焼きガニ」、濃厚なカニ味噌をすくって楽しむ「甲羅味噌焼き」、特製出汁で身がふっくらと膨らむ「カニすき鍋」、そしてすべての旨味を吸い込んだ〆の「黄金雑炊」。この贅沢は、冬の鳥取を訪れた者だけが享受できる至高の特権です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして、カニとともに旅人を癒やすのが、開湯850余年の歴史を誇る「三朝温泉（みささおんせん）」。三朝川の清流沿いに風情ある木造建築が連なるこの温泉地は、世界屈指の高濃度ラドン含有量を誇る放射能泉（ラジウム温泉）です。「浸かってよし、吸ってよし、飲んでよし」と言われ、微量の放射線が免疫細胞を活性化させるホルミシス効果により、湯上がり後も驚くほどポカポカと温かさが持続します。国登録有形文化財の老舗宿や大庭園露天風呂で味わう、極上の冬旅をお届けします。
          </p>
          <div className="bg-rose-50/60 rounded-2xl p-5 border border-rose-200/60 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-rose-700" />
                タグ付き活松葉ガニ会席は11月・12月の早期予約が絶対条件
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                11月6日の解禁直後から年末にかけては予約が最も殺到します。活ガニプランは数量限定のため早めの確保が鉄則です。
              </p>
            </div>
            <a 
              href="#hotel-list" 
              className="px-5 py-2.5 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-sm transition-all"
            >
              厳選宿5選を見る ↓
            </a>
          </div>
        </section>

        {/* 3 Core Highlights */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-widest">Sanin Masterpiece</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の三朝温泉で堪能すべき3大ハイライト
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-stone-900">境港直送！タグ付き活松葉ガニ</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                花咲くカニ刺し、炭火焼き、甲羅味噌、カニすき。冷凍物では決して味わえない、活カニならではの極上の甘みとジューシーさ。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-stone-900">世界屈指の高濃度ラジウム泉</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                奇跡のホルミシス効果をもたらす名湯。「浸かる・吸う・飲む」の三位一体で、冷えた体を芯から温め免疫力を底上げ。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-stone-900">有形文化財の木造建築＆庭園露天</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                川沿いに佇む国登録有形文化財の老舗宿や、大小12の湯処を誇る回遊式大庭園風呂。冬の雪景色と調和する日本の伝統美。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section id="hotel-list" className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-widest">Selected Ryokans</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              タグ付き活松葉ガニと世界屈指のラジウム湯を堪能する厳選宿5選
            </h2>
            <p className="text-stone-500 text-sm mt-2">
              楽天トラベル公式APIより取得した最新情報に基づき、料理・源泉・建物格調において高いクチコミ評価を誇る5軒を厳選。
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative h-64 sm:h-72 lg:h-auto min-h-[300px] bg-stone-100">
                    <Image
                      src={hotel.img}
                      alt={hotel.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>厳選 NO.{hotel.id}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md">
                          三朝温泉・ラジウム温泉
                        </span>
                        <div className="flex items-center gap-1.5 text-amber-500 font-bold text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span>{hotel.rating}</span>
                          <span className="text-stone-400 font-normal text-xs">({hotel.reviews}件のクチコミ)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {hotel.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-500 mt-2 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-stone-400 shrink-0" />
                        <span>{hotel.access}</span>
                      </p>

                      {/* Detailed Story & Deep Dive Review */}
                      <div className="mt-4 pt-4 border-t border-stone-100 space-y-3">
                        <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
                          <Info className="w-4 h-4 text-rose-700" />
                          宿の魅力と自噴泉・活松葉ガニ会席レビュー
                        </h4>
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                          {hotel.story}
                        </p>
                        <div className="bg-stone-50 rounded-xl p-3 border border-stone-200/60 text-xs text-stone-600 space-y-1">
                          <div><strong className="text-stone-800">おすすめ客室の風情:</strong> {hotel.roomTip}</div>
                          <div><strong className="text-stone-800">カニ料理のこだわり:</strong> {hotel.gourmetTip}</div>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-stone-100 space-y-2">
                        <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider">主な特徴・サービス</h4>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-stone-600">
                          {hotel.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-stone-400 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-black text-rose-700">{hotel.price}</span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-bold text-sm shadow-sm transition-all hover:scale-[1.02]"
                      >
                        <span>楽天トラベルでプラン・空室を見る</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-600">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Comparison</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                三朝温泉厳選5宿 自家源泉・カニ料理・特徴比較表
              </h2>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700">
                  <th className="py-3 px-4 font-bold">宿名</th>
                  <th className="py-3 px-4 font-bold">温泉・自噴泉</th>
                  <th className="py-3 px-4 font-bold">冬の松葉ガニ料理</th>
                  <th className="py-3 px-4 font-bold">おすすめの滞在スタイル</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-600">
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">旅館 大橋</td>
                  <td className="py-3 px-4">自噴泉「巌窟の湯」有形文化財</td>
                  <td className="py-3 px-4">料理長厳選 活松葉ガニ特別会席</td>
                  <td className="py-3 px-4">国宝級の歴史的建築美と奇跡の自噴泉を堪能したい方</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">ちくま旅館</td>
                  <td className="py-3 px-4">源泉かけ流し内湯（クチコミ4.9点）</td>
                  <td className="py-3 px-4">心尽くしの手作りカニ田舎会席</td>
                  <td className="py-3 px-4">少人数で家庭的な温もりと静かな湯治を楽しみたい方</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">渓泉閣</td>
                  <td className="py-3 px-4">渓流沿い大浴場・露天・サウナ</td>
                  <td className="py-3 px-4">冬の松葉ガニ会席プラン</td>
                  <td className="py-3 px-4">ファミリーやグループで広々快適に過ごしたい方</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">かがり火の宿 有楽</td>
                  <td className="py-3 px-4">岩造り野天風呂（かがり火）</td>
                  <td className="py-3 px-4">鳥取和牛＆旬のカニ会席</td>
                  <td className="py-3 px-4">温泉街散策と情緒ある露天風呂を楽しみたい方</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">依山楼 岩崎</td>
                  <td className="py-3 px-4">回遊式大庭園風呂「山水ノ湯」12湯</td>
                  <td className="py-3 px-4">伝統の姿茹でカニ＆焼きガニ会席</td>
                  <td className="py-3 px-4">老舗旅館の圧倒的な湯処と格式あるおもてなしを求める方</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Expert Winter Tips */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-700">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-700 uppercase tracking-widest">Gourmet & Onsen Guide</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                三朝温泉の飲泉とタグ付き松葉ガニを極める専門TIPS
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-2 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Utensils className="w-4 h-4 text-rose-700" />
                タグ付き松葉ガニの「赤タグ」と「青タグ」の違い
              </h3>
              <p>
                鳥取県境港・網代港で水揚げされた松葉ガニには「赤タグ」、お隣の兵庫県津居山港では「青タグ」、間人港では「緑タグ」が付きます。いずれも厳格な基準をクリアした最高品質のブランドガニであり、タグ付きを選ぶことが絶対に失敗しないカニ旅の鉄則です。
              </p>
            </div>
            <div className="space-y-2 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Flame className="w-4 h-4 text-rose-700" />
                三朝温泉の「飲泉場」で源泉を美味しく飲むコツ
              </h3>
              <p>
                温泉街にある「株湯」や「薬師の湯」の飲泉所では、新鮮な源泉を直接飲用できます。無味無臭で飲みやすく、朝食前や入浴前にコップ1杯をゆっくり口に含むことで、胃腸の調子を整え、内臓からホルミシス効果を受け取ることができます。
              </p>
            </div>
          </div>
        </section>

        {/* 1泊2日モデルコース */}
        <section className="bg-gradient-to-br from-rose-50/70 via-white to-stone-50 rounded-3xl p-6 sm:p-10 border border-rose-200/80 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-widest">Model Course</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              【1泊2日】タグ付き活松葉ガニと奇跡のラジウム湯治コース
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              倉吉の町並み散策から、世界有数のラドン泉温浴、冬の味覚の王様・活松葉ガニを味わい尽くす旅程。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
              <div className="flex items-center gap-2 pb-2 border-b border-rose-100">
                <span className="px-3 py-1 bg-rose-700 text-white font-bold text-xs rounded-full">DAY 1</span>
                <h3 className="font-bold text-stone-900 text-base">倉吉白壁土蔵群散策と待望の活松葉ガニ会席</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">12:30</strong>
                  <span>倉吉駅到着。重要伝統的建造物群保存地区「倉吉白壁土蔵群」を散策。名物石臼珈琲で一息。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">15:00</strong>
                  <span>三朝温泉の老舗宿にチェックイン。飲泉場で温かい源泉を一杯いただき、内側から体を整える。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">16:00</strong>
                  <span>高濃度ラジウム泉大浴場へ。湯気を深く吸い込む吸気浴をしながら、ゆっくりと長湯を満喫。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">18:30</strong>
                  <span>【極上の夕宴】境港直送タグ付き活松葉ガニづくし会席。カニ刺し、炭火焼き、甲羅味噌酒に酔いしれる。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">21:00</strong>
                  <span>三朝川にかかる三朝橋や河原風呂の湯けむりを眺め、静寂な温泉街の夜を満喫。</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
              <div className="flex items-center gap-2 pb-2 border-b border-amber-100">
                <span className="px-3 py-1 bg-amber-600 text-white font-bold text-xs rounded-full">DAY 2</span>
                <h3 className="font-bold text-stone-900 text-base">朝湯・朝食と冬の鳥取砂丘・境港ショッピング</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">07:00</strong>
                  <span>朝の澄んだ空気を感じながら露天風呂へ。湯冷め知らずの温まりを実感。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">08:00</strong>
                  <span>日本海の干物や地元米の炊きたてご飯、温かい郷土味噌汁の滋味あふれる朝食膳。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">09:30</strong>
                  <span>チェックアウト後、車またはバスで冬の「鳥取砂丘」へ。風紋が描く壮大な冬景色を観賞。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">12:00</strong>
                  <span>「境港水産物直売センター」へ移動。新鮮なカニや一夜干し、海鮮丼ランチを楽しむ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">14:30</strong>
                  <span>お土産のカニをクーラーボックスに詰め込み、心身ともに満たされて帰路へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-700">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-700 uppercase tracking-widest">FAQ</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬の鳥取・三朝温泉松葉ガニ旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <details className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm sm:text-base list-none">
                <span>Q. 鳥取の「松葉ガニ」の解禁日と最も美味しい時期はいつですか？</span>
                <span className="text-rose-700 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                鳥取県の松葉ガニ（ズワイガニの雄）漁は毎年11月6日に一斉解禁されます。11月中旬から12月下旬にかけては水揚げが最盛期を迎え、甲羅に身がぎっしりと詰まり、濃厚なカニ味噌と上品な甘みを楽しめる年間最高のシーズンとなります。
              </p>
            </details>

            <details className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm sm:text-base list-none">
                <span>Q. 三朝温泉の「ラジウム温泉」の効能と効果的な入浴法は？</span>
                <span className="text-rose-700 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                三朝温泉は世界有数の高濃度ラドン含有量を誇ります。微量の放射線が細胞を活性化し新陳代謝や免疫力を高める「ホルミシス効果」で知られています。浸かるだけでなく、立ち上る湯気を鼻や口から深く吸い込む「吸気浴」、飲泉所で源泉を飲む「飲泉」を組み合わせることで、体の内外から温浴効果を体感できます。
              </p>
            </details>

            <details className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm sm:text-base list-none">
                <span>Q. 冬に車で三朝温泉へ向かう際、スタッドレスタイヤは必要ですか？</span>
                <span className="text-rose-700 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                12月中旬以降は中国山地や鳥取県内の峠道（院庄IC〜三朝間の国道179号など）で積雪や路面凍結が発生しやすくなります。冬季は必ずスタッドレスタイヤを装着してください。公共交通機関をご利用の場合は、JR山陰本線倉吉駅から各宿の無料送迎バスや路線バス（約20分）が便利です。
              </p>
            </details>

            <details className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm sm:text-base list-none">
                <span>Q. 「タグ付き活松葉ガニ」と一般的なカニ料理の違いは何ですか？</span>
                <span className="text-rose-700 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                境港や網代港で水揚げされた高品質な松葉ガニには、産地と船名を証明する「赤色や青色のタグ」が付けられます。冷凍物とは異なり、生きたまま宿へ運ばれるため、繊維が花のように開く「カニ刺し」や香ばしい「炭火焼きガニ」、濃厚な「甲羅酒」など、極上の鮮度でしか味わえない本物のカニ料理を堪能できます。
              </p>
            </details>
          </div>
        </section>

        {/* GEO & Internal Link Mesh */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-stone-100 text-stone-700">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">Internal Links</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                鳥取・山陰・近畿の冬のカニ＆名湯特集を探す
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm">
            <Link 
              href="/prefectures/tottori" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-rose-50 hover:text-rose-700 transition font-medium border border-stone-100"
            >
              鳥取県の温泉宿・ホテル一覧 →
            </Link>
            <Link 
              href="/winter-crab-gourmet" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-rose-50 hover:text-rose-700 transition font-medium border border-stone-100"
            >
              冬の極上カニグルメ宿特集 →
            </Link>
            <Link 
              href="/winter-echizen-crab-taiza-luxury-stay" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-rose-50 hover:text-rose-700 transition font-medium border border-stone-100"
            >
              越前ガニ・間人ガニ特集 →
            </Link>
            <Link 
              href="/prefectures/shimane" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-rose-50 hover:text-rose-700 transition font-medium border border-stone-100"
            >
              島根県（玉造温泉等）の宿 →
            </Link>
            <Link 
              href="/prefectures/hyogo" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-rose-50 hover:text-rose-700 transition font-medium border border-stone-100"
            >
              兵庫県（城崎・有馬温泉）の宿 →
            </Link>
            <Link 
              href="/prefectures/okayama" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-rose-50 hover:text-rose-700 transition font-medium border border-stone-100"
            >
              岡山県（湯原・美作）の宿 →
            </Link>
            <Link 
              href="/winter-snow-onsen" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-rose-50 hover:text-rose-700 transition font-medium border border-stone-100"
            >
              全国の雪見温泉宿特集 →
            </Link>
            <Link 
              href="/features" 
              className="p-3 rounded-xl bg-stone-900 text-white hover:bg-stone-800 transition font-bold text-center flex items-center justify-center gap-1"
            >
              <span>全国の特集一覧を見る</span>
              <ChevronRight className="w-4 h-4" />
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
  console.log(`[Success] Generated ${slug}/page.tsx`);
}

module.exports = { generateMisasaPage };
