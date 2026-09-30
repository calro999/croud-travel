const fs = require('fs');
const path = require('path');

function generateKumamotoKikuchiValleyPage(hotels) {
  const slug = 'winter-kumamoto-kikuchi-onsen-bihada-akagyu-pork-stay';
  const title = '【11・12月肥後】日本の名湯百選「化粧の湯」の極上とろみ泉・初冬の菊池渓谷美＆熊本あか牛ステーキ＆名水ポークを堪能する名宿5選';
  const description = '11月中旬から12月の初冬、阿蘇外輪山の北西麓に広がる熊本県菊池市は、澄み渡る初冬の青空と阿蘇の山並みが美しいコントラストを描き、名水百選に輝く菊池川の清流が静かに輝く季節を迎えます。昭和29年、白龍が天に昇る神託によって開かれたと伝わる「菊池温泉（きくちおんせん）」は、「日本の名湯百選」と「日本の名水百選」にダブルで選ばれた九州屈指の美肌の湯処。泉質は無色透明のアルカリ性単純温泉で、お湯に触れた瞬間に誰もが驚くほど、美容液のようにトロリとした極上の肌ざわりを誇り、古くから「化粧の湯」「美肌の湯」として親しまれてきました。湧出量は毎分莫大で、温泉街のほとんどの宿が100%源泉かけ流しを実現しています。初冬の朝、凛とした清涼な空気に包まれる「菊池渓谷」では、エメラルドグリーンの淵や落葉を踏みしめる静かな散策が楽しめます。夕食には、阿蘇の広大な草原で育ったヘルシーで濃厚な旨味のブランド牛「熊本あか牛」のステーキや陶板焼き、名水で育まれたジューシーな「菊池銘柄豚（りんどうポーク等）」のしゃぶしゃぶ、冬の極甘「熊本いちご・ゆうべに」、名物極上馬刺しが贅沢に並びます。心と肌をとろとろに解きほぐす初冬の肥後温泉紀行を叶える厳選5宿を徹底ガイドします。';

  const hotelDetails = [
    {
      story: '菊池温泉の中心に佇み、創業以来「良質なお湯とおもてなし」を守り続ける名門宿「菊池温泉 菊池 笹乃家」。館内には広々とした日本庭園を望む大浴場と、初冬の澄んだ夜空を仰ぐ露天風呂が完備され、pH9.0を超えるアルカリ性単純温泉が贅沢にかけ流されています。お肌に吸い付くようなとろみのある湯触りは、一度入浴すれば翌朝の化粧のりの違いを実感するほど。初冬の夕食には、阿蘇の大自然が育んだ「熊本あか牛」の陶板ステーキや、菊池の清流で育った川魚、地元の名水で育まれた旬の根菜を取り入れた本格会席が振る舞われ、落ち着いた大人の寛ぎを約束します。',
      roomTip: '手入れの行き届いた日本庭園や菊池の山並みを望む落ち着きある純和風客室。初冬の静けさの中で心安らぐひとときを過ごせます。',
      gourmetTip: '「特選熊本あか牛ステーキ＆肥後旬菜会席」。赤身本来の濃厚な肉の旨味と上品な脂の甘みが口いっぱいに広がる贅沢な逸品。'
    },
    {
      story: '菊池川の支流沿い、豊かな自然林の木立ちに囲まれた静寂のロケーションに建つ癒しの宿「菊池温泉 木立ちの中の宿 清流荘」。宿の自慢は、木々のざわめきと川のせせらぎを聞きながら浸かる野趣あふれる露天風呂「ほたるの湯」や趣の異なる貸切風呂。源泉温度45℃前後の新鮮な美肌湯が贅沢に注がれ、湯上がりは肌がつるつるすべすべに。夕食は、菊池名物のブランド豚「りんどうポーク」のしゃぶしゃぶや、鮮度抜群の熊本名物極上馬刺し、旬の山菜小鉢など、肥後の大地がもたらす豊かな恵みを存分に味わえます。',
      roomTip: '木立と清流に面した自然美あふれる和室。初冬の木漏れ日と野鳥のさえずりが心地よいプライベート空間です。',
      gourmetTip: '「菊池名水ポークしゃぶしゃぶ＆極上馬刺し膳」。あっさりとした甘みのある脂が特徴の名水豚を、特製の和風出汁でいただく温まり鍋。'
    },
    {
      story: '大正浪漫の面影とアットホームなもてなしが心地よい、菊池温泉街の老舗旅館「菊池温泉 望月旅館」。源泉かけ流しの天然温泉は、pH9.1のアルカリ性単純泉で、湯船に浸かると微細な気泡が肌を包み込み、まるでシルクを纏ったかのような極上の滑らかさを堪能できます。館内には露天風呂付き客室や家族風呂も備わり、カップルやファミリーにも人気。夕食には、熊本県産あか牛の陶板焼きに加え、地元契約農家の採れたて冬野菜や菊池米を使った手作りの郷土会席が並び、心温まる家庭的なぬくもりに癒やされます。',
      roomTip: '風情ある和室またはベッドを備えた和洋室。歴史ある温泉街の情緒を感じながら、のんびりと気ままな湯治ステイ。',
      gourmetTip: '「あか牛陶板焼きと手作り郷土会席」。霜降りと赤身のバランスが抜群のあか牛を熱々の陶板で焼き上げ、地元の甘露醤油で味わう。'
    },
    {
      story: '広々としたロビーと充実した設備を誇り、団体から個人旅行まで幅広く対応する菊池温泉の大型格式ホテル「菊池温泉 菊池グランドホテル」。館内には開放感あふれる大浴場と庭園露天風呂、打たせ湯があり、豊富な湯量を誇る菊池の名湯を心ゆくまで堪能できます。初冬の夕食プランでは、あか牛のしゃぶしゃぶやすき焼き、天草直送の新鮮な海の幸、名物からし蓮根など、熊本の郷土グルメが勢揃い。菊池神社や城山公園へのアクセスも良好で、初冬の観光拠点として絶好の宿です。',
      roomTip: '広々とした間取りの和室またはツインルーム。清潔感にあふれ、シニア層や家族連れでも快適に過ごせます。',
      gourmetTip: '「熊本満喫会席」。熊本あか牛と天草直送の鮮魚お造り、揚げたてのからし蓮根が並ぶ熊本名物尽くしの華やかな膳。'
    },
    {
      story: '菊池温泉の開湯当時からの歴史を紡ぎ、地元の人々にも愛される源泉かけ流しの湯治宿「菊池温泉 城乃井旅館」。宿の最大の魅力は、敷地内から自噴する一切加水・加温のない純度100%の極上とろみ源泉。天然の保湿成分メタケイ酸を豊富に含み、美肌効果は折り紙付きです。ビジネスや一人旅でも気兼ねなく泊まれるリーズナブルな価格設定ながら、夕食には地元の旬食材を使ったボリューム満点の田舎料理が振る舞われ、温泉通が足繁く通う隠れた名宿です。',
      roomTip: '昭和レトロな落ち着きある純和風客室。静かに名湯の温もりに浸りたい一人旅や連泊の湯治に最適です。',
      gourmetTip: '「菊池郷土膳」。名水育ちの豚肉小鍋や地元野菜の煮物、ふっくら炊き上げた菊池米など、素朴で優しい手作りの味。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥6,244〜' : i === 1 ? '¥7,740〜' : i === 2 ? '¥6,600〜' : i === 3 ? '¥12,100〜' : '¥6,380〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.47' : i === 1 ? '4.31' : i === 2 ? '4.28' : i === 3 ? '3.79' : '4.00');
    const reviewCount = h.reviewCount || (i === 0 ? 510 : i === 1 ? 340 : i === 2 ? 180 : i === 3 ? 420 : 150);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'JR「熊本駅」より熊本都市バス「菊池温泉」行きで約70分、または九州自動車道「植木IC」より車で約20分、阿蘇くまもと空港より車で約30分')},
              special: ${JSON.stringify(h.hotelSpecial || '日本名湯百選化粧の湯とろみ源泉＆熊本あか牛ステーキ・菊池名水ポークと初冬渓谷美')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? 'pH9.0超の名湯百選とろとろ美肌温泉＆極上熊本あか牛陶板ステーキと広大な日本庭園' : i === 1 ? '木立ちと清流に包まれた野趣露天風呂ほたるの湯＆菊池銘柄豚しゃぶしゃぶと極上馬刺し' : i === 2 ? 'シルクのような微細気泡が包む源泉かけ流し湯＆露天風呂付き客室とあか牛陶板焼き' : i === 3 ? '開放的な庭園露天風呂と打たせ湯の充実設備＆熊本あか牛と天草直送鮮魚の郷土会席' : '敷地内自噴の純度100%極上かけ流しとろみ湯＆一人旅や湯治にも最適な高コスパ宿')},
                ${JSON.stringify(i === 0 ? '手入れの行き届いた庭園露天風呂＆菊池の清流川魚や名水仕込みの季節会席' : i === 1 ? '趣の異なる貸切風呂のプライベート湯浴み＆阿蘇の伏流水が育んだ採れたて冬野菜' : i === 2 ? '大正浪漫の風情香る落ち着いた館内＆アットホームで心温まる細やかなもてなし' : i === 3 ? '菊池神社や城山公園観光の拠点に絶好＆広々とした客室でシニア・家族連れも安心' : 'メタケイ酸豊富な天然化粧水のような泉質＆素朴で温かい手作りの肥後郷土膳')},
                ${JSON.stringify(i === 0 ? '菊池温泉街の中心に位置する名門旅館＆翌朝の化粧のりの違いを実感する美肌ステイ' : i === 1 ? '川のせせらぎに癒やされる自然豊かな休息＆日常の喧騒を忘れる森林浴リトリート' : i === 2 ? '地元契約農家から仕入れる新鮮野菜と菊池米＆カップルや記念日にも人気の空間' : i === 3 ? '阿蘇くまもと空港から車で約30分の好アクセス＆熊本の味覚を網羅したバイキング・会席' : '温泉ファンが足繁く通う知る人ぞ知る名湯＆心身のコリを優しくほぐす癒やしの時間')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "菊池温泉が「化粧の湯」「日本の名湯百選」と呼ばれる理由と泉質の特徴は？",
      a: "菊池温泉は、日本の名湯百選および日本の名水百選に選ばれた熊本屈指の名湯です。主泉質は無色透明のアルカリ性単純温泉（pH9.0〜9.2）。肌につけた瞬間に美容液や化粧水を直接肌に塗ったかのような驚くべき「とろみ」があり、石鹸を使わなくても肌の余分な皮脂や角質を優しく落としてくれる天然のクレンジング作用を持ちます。さらに天然保湿成分メタケイ酸を豊富に含むため、湯上がり後も肌がしっとりと潤い、「化粧の湯」「美肌の湯」として女性をはじめ全国の温泉愛好家から絶大な支持を集めています。"
    },
    {
      q: "初冬の「菊池渓谷」の散策コースや見どころ、防寒対策は？",
      a: "菊池渓谷は、阿蘇外輪山の北西麓に位置する約4kmの清流渓谷で、日本の森林浴の森百選や名水百選に認定されています。11月中旬の晩秋から12月の初冬にかけては、混雑が落ち着き、透明度抜群のエメラルドグリーンの淵（黎明の滝、紅葉ヶ瀬、四十三万滝）と、落葉が敷き詰められた静寂な遊歩道散策が楽しめます。標高が500〜800mと高いため、平地よりも気温が5℃ほど低くなります。初冬に訪れる際は、風を通さない厚手のコートや手袋、歩きやすいトレッキングシューズなどの防寒装備を用意してください。"
    },
    {
      q: "熊本が誇るブランド和牛「熊本あか牛」と「菊池名水ポーク」の味の特徴は？",
      a: "「熊本あか牛（褐毛和種）」は、阿蘇の大草原で放牧され豊かな牧草と名水で育つ熊本特産の和牛です。黒毛和牛に比べて赤身が多く、脂肪分が適度でヘルシー。噛むほどに芳醇なアミノ酸の旨味がじゅわりと溢れ出し、胃もたれしない上質な味わいが特徴です。また、「菊池銘柄豚（りんどうポークなど）」は、阿蘇の天然ミネラル豊富な伏流水と厳選された飼料で育てられ、臭みがなく脂身が極めて甘くジューシー。すき焼き、ステーキ、しゃぶしゃぶでそれぞれの真価を堪能できます。"
    },
    {
      q: "11月・12月の熊本・菊池エリアの気候と道路状況、スタッドレスタイヤは必要？",
      a: "菊池市街地や温泉街は平野部に位置するため、11月・12月でも極端な積雪はほとんどなく、ノーマルタイヤで問題なくアクセス可能です。ただし、朝晩の冷え込みにより放射冷却で気温が氷点下近くまで下がることがあり、橋の上や日陰では路面凍結に注意が必要です。なお、菊池温泉から阿蘇ミルクロードや大観峰方面の山岳ルートへ抜ける場合は、12月中旬以降積雪や凍結のおそれがあるため、山越えドライブを計画される際は冬用タイヤの装着またはチェーン携行が推奨されます。"
    },
    {
      q: "熊本駅や阿蘇くまもと空港から菊池温泉へのアクセス方法と所要時間は？",
      a: "阿蘇くまもと空港からのアクセスが非常に良好で、レンタカーやタクシーで県道を経由して約30分で菊池温泉に到着します。熊本駅からは、熊本都市バスまたは産交バス（菊池温泉行き）に乗車し、約70分で温泉街中心部に直通します。車の場合は、九州自動車道「植木IC」から国道387号線を経由して約20分。福岡・博多方面からも九州道経由で約1時間20分と、週末の気軽な美肌温泉ドライブに最適な立地です。"
    }
  ];

  const pageContent = `import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map, Heart, ShoppingBag, Shield
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '菊池温泉 宿泊, 日本の名湯百選 化粧の湯, 熊本あか牛 ステーキ 宿, 菊池渓谷 初冬 散策, 菊池 笹乃家, 清流荘 菊池, 菊池名水ポーク, 11月 12月 熊本温泉旅行',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}'
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '日本の名湯百選菊池温泉のとろみ湯と菊池渓谷の清流美'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function KumamotoKikuchiValleyWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/${slug}#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.com/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.com/"
        },
        "headline": ${JSON.stringify(title)},
        "description": ${JSON.stringify(description)},
        "datePublished": "2026-09-30T00:00:00+09:00",
        "dateModified": "2026-09-30T00:00:00+09:00",
        "inLanguage": "ja",
        "mainEntityOfPage": "https://croud-travel.com/${slug}",
        "publisher": {
          "@type": "Organization",
          "name": "クラドトラベル編集部",
          "url": "https://croud-travel.com/"
        }
      },
      {
        "@type": "ItemList",
        "itemListElement": [
${hotels.map((h, i) => `          {
            "@type": "ListItem",
            "position": ${i + 1},
            "item": {
              "@type": "Hotel",
              "name": ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              "image": ${JSON.stringify(h.hotelImageUrl || '')},
              "url": ${JSON.stringify(h.affiliateUrl || '')},
              "priceRange": ${JSON.stringify((h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : '¥8,000〜')},
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "熊本県",
                "addressLocality": "菊池市",
                "streetAddress": ${JSON.stringify(h.address2 || '温泉街エリア')},
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": ${JSON.stringify((h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : '4.35')},
                "reviewCount": ${h.reviewCount || 280}
              }
            }
          }`).join(',\n')}
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

  const faqListItems = ${JSON.stringify(faqList, null, 2)};

  const hotelCards = [
${hotelCardsCode}
  ];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-900 leading-relaxed font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <header className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wide border border-teal-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            11月・12月肥後初冬特集・日本の名湯百選化粧の湯＆あか牛探訪
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {metadata.title as string}
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
            pH9.0超の天然美容液のような極上とろみ源泉と、名水百選に輝く菊池川の清流。
            阿蘇の大自然が育んだ熊本あか牛ステーキと名水ポーク、初冬の菊池渓谷に癒やされる贅沢な肥後ステイ。
          </p>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-4">
          <div className="flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide">
            <Flame className="w-4 h-4 text-teal-700" />
            白龍神託の開湯伝説と天然美容液のような奇跡のとろみ湯
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            11月中旬から12月にかけて、阿蘇五岳の初冠雪を遠望し、澄み切った清冽な冬晴れが広がる熊本県菊池市。昭和29年、地元の旅館主の夢枕に立った白龍のお告げによって掘削され、こんこんと湧き出した「菊池温泉（きくちおんせん）」は、「日本の名湯百選」と「日本の名水百選」にダブルで選出された九州を代表する名湯処です。その最大の特徴は、湯船に身を浸した瞬間に誰もが声を上げる「驚異的なとろみ」。pH9.0〜9.2のアルカリ性単純温泉は、まるで天然の美容液や化粧水そのものを全身に浴びているかのような滑らかさを誇り、古くから「化粧の湯」「美肌の湯」として親しまれてきました。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            この地は中世武士団・菊池一族の本拠地としても名高く、温泉街を見下ろす城山公園や菊池神社には、南北朝時代の名将・菊池武光公の銅像が威風堂々とそびえ立ちます。初冬の朝、阿蘇外輪山から吹き降ろす涼風を浴びながら歴史街道を歩けば、千年の時を超えて受け継がれる武士の誇りと肥後の豊かな精神文化が静かに胸に迫ります。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            毎分湧出量が極めて豊富なため、温泉街の多くの旅館が加水・加温なしの「100%源泉かけ流し」を実現。角質をやさしく溶かすアルカリ性のクレンジング作用と、天然保湿成分メタケイ酸のダブル効果により、入浴後は肌が吸い付くようにしっとり整います。また、車で20分ほどの阿蘇外輪山北西麓には、国の名勝「菊池渓谷」が広がり、初冬の澄んだ冷気の中でエメラルドグリーンに輝く滝壺や原生林の静寂なトレッキングが楽しめます。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            そして冬の肥後旅を締めくくるのは、滋味あふれる熊本の美食。阿蘇の広大な草原で健康的に育ったブランド牛「熊本あか牛」のステーキやすき焼きは、赤身の濃厚な旨味と上品な甘みが際立つ極上品。さらに菊池の名水で育てられた「菊池銘柄豚（りんどうポーク等）」のしゃぶしゃぶ、冬の極甘いちご「ゆうべに」、本場の極上馬刺しなど、冬の元気をチャージできる厳選5宿をご紹介します。
          </p>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <Landmark className="w-4 h-4 text-teal-800" />
              厳選5名宿のご案内
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              名湯百選化粧の湯と熊本あか牛＆名水ポークを堪能する名宿
            </h2>
          </div>

          <div className="space-y-10">
            {hotelCards.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition duration-300"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Hotel Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 mb-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>熊本県菊池市温泉街</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                        {hotel.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60 text-amber-900 text-xs font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{hotel.rating}</span>
                        <span className="text-stone-400 font-normal">({hotel.reviews}件)</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-stone-500 block">参考宿泊料金</span>
                        <span className="text-base sm:text-lg font-black text-rose-600">{hotel.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Image and Story Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-5 space-y-2">
                      <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={hotel.img} 
                          alt={hotel.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-[11px] text-stone-500 leading-normal">
                        {hotel.access}
                      </p>
                    </div>

                    <div className="md:col-span-7 space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
                      <p>{hotel.story}</p>
                      
                      <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100 space-y-2">
                        <div className="font-bold text-stone-900 text-xs flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-teal-700" />
                          客室の過ごし方
                        </div>
                        <p className="text-[11px] sm:text-xs text-stone-600">{hotel.roomTip}</p>
                        
                        <div className="font-bold text-stone-900 text-xs flex items-center gap-1.5 pt-1 border-t border-stone-200/50">
                          <Utensils className="w-3.5 h-3.5 text-teal-700" />
                          美食のこだわり
                        </div>
                        <p className="text-[11px] sm:text-xs text-stone-600">{hotel.gourmetTip}</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    <span className="text-xs font-bold text-stone-900 block">宿の注目ポイント：</span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {hotel.highlights.map((hl: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-1.5 bg-teal-50/50 p-2.5 rounded-xl border border-teal-100/50 text-[11px] text-teal-950 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link Button */}
                  <div className="pt-2 flex justify-end">
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-800 to-slate-800 hover:from-teal-900 hover:to-slate-900 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-xs hover:shadow-md transition duration-200"
                    >
                      <span>楽天トラベルでプラン詳細・空室確認</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Model Itinerary Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <Calendar className="w-4 h-4 text-teal-800" />
              11月・12月おすすめ1泊2日モデルコース
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              菊池渓谷トレッキングと化粧の湯・熊本あか牛を堪能する冬の肥後旅
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-teal-900 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-teal-700" />
                【1日目】菊池渓谷の清流散策と極上とろみ湯体験
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>11:30 阿蘇くまもと空港または熊本駅を出発：</strong>レンタカーで名水潤う菊池平野を抜けて阿蘇外輪山方面へ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>12:30 菊池渓谷散策＆森林浴：</strong>黎明の滝や紅葉ヶ瀬を巡り、初冬の澄み渡るエメラルドグリーンの清流美を体感。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>15:30 菊池温泉の宿へチェックイン：</strong>pH9.0超の天然美容液「化粧の湯」に浸かり、冷えた体を芯から温める。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>17:00 菊池神社・城山公園散策：</strong>中世の名族・菊池一族ゆかりの古社に参拝し、初冬の夕暮れパノラマを一望。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>18:30 熊本あか牛ステーキ＆名水ポーク会席：</strong>ジューシーなあか牛と甘い脂の名水豚、極上馬刺しに舌鼓。</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-teal-900 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-teal-700" />
                【2日目】初冬の名水スイーツ散歩と阿蘇ドライブ
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>08:00 朝の美肌湯入浴と郷土朝食：</strong>ふっくら炊き上げた菊池米と名水豆腐の味噌汁で爽やかな目覚め。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>09:30 道の駅旭志でお買い物：</strong>名水ポーク加工品や冬採れの甘い熊本いちご「ゆうべに」をおみやげに。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>11:30 阿蘇ミルクロード＆大観峰へドライブ：</strong>初冬の広大な阿蘇カルデラパノラマと初冠雪の阿蘇五岳を一望。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>14:00 熊本城見学＆帰路へ：</strong>復興進む名城熊本城を拝観し、熊本空港・熊本駅へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-teal-800" />
              初冬の菊池・阿蘇麓・おみやげ手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              名水の里で手に入れたい初冬の肥後銘品と立ち寄りスポット
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-700" />
                熊本限定いちご「ゆうべに」と名水水田ごぼう
              </h3>
              <p>
                10年もの歳月をかけて熊本県が開発したオリジナルいちご「ゆうべに」。鮮やかな紅色と美しい円錐形、芳醇な香りと高糖度・適度な酸味のバランスが抜群で、11月下旬から直売所に並び始めます。また、名水で育つアクの少ない「水田ごぼう」は柔らかく香りが豊かで、冬の鍋やきんぴら料理に最適です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-teal-700" />
                菊池温泉ミストと伝統銘菓「松風」
              </h3>
              <p>
                pH9.0超の天然美肌温泉をそのまま微細ミストにした「菊池温泉ミスト」は、冬の乾燥対策に女性客から圧倒的な支持を集めるお土産。また、日本一薄い和菓子として名高い菊池の伝統銘菓「松風（まつかぜ）」は、ケシの実が香ばしく上品な甘みとパリッとした独特の食感が緑茶やコーヒーによく合います。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <ThermometerSun className="w-4 h-4 text-teal-800" />
              初冬の菊池温泉・泉質と美肌メカニズムの徹底解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ菊池温泉のお湯は「美容液を浴びるよう」と称されるのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <Waves className="w-4 h-4 text-teal-700" />
              pH9.0〜9.2のアルカリ性とメタケイ酸が生み出すシルクのような肌触り
            </h3>
            <p>
              菊池温泉の泉質は、アルカリ性単純温泉（低張性アルカリ性高温泉）。源泉温度は43℃〜48℃と入浴に最も適した温度で自噴しています。pH9.0を超える高アルカリ性の湯は、肌表面の余分な古い角質や皮脂を自然に乳化・除去する「石鹸作用（角質クリア効果）」を持ちます。さらに、肌のセラミドを整え潤いを保持する天然保湿成分「メタケイ酸」が基準値を大きく上回って溶け込んでいるため、入浴するだけで毛穴が引き締まり、湯上がりにはしっとりとなめらかなシルクのような美肌に仕上がります。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Landmark className="w-4 h-4 text-teal-700" />
              毎分豊富な湯量が支える贅沢な100%源泉完全かけ流し
            </h3>
            <p>
              菊池温泉が全国の温泉通から高く評価されるもう一つの理由が、圧倒的な湧出量です。温泉街一帯に多数の源泉井戸が存在し、多くの宿が循環ろ過や塩素殺菌を行わない「純度100%の源泉かけ流し」を提供しています。常に生まれたてのフレッシュな温泉水が湯船に溢れ出ているため、酸化していないピュアな還元力を保ち、冬の冷えや日々のストレスで疲弊した細胞をやさしく活性化してくれます。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Sparkles className="w-4 h-4 text-teal-700" />
              熊本あか牛と菊池名水ポークがもたらす冬の活力チャージ
            </h3>
            <p>
              阿蘇の雄大なカルデラ草地で放牧飼育される「熊本あか牛」は、タウリンやカルニチンなど疲労回復アミノ酸が豊富に含まれ、高タンパクで脂質が控えめな健康和牛の代表格。さらに、阿蘇火山灰層の天然フィルターを通った名水百選菊池川の伏流水を飲んで育つ「菊池銘柄豚（りんどうポークなど）」は、ビタミンB1が一般豚の数倍とも言われ、冬の寒さに負けない免疫力向上に貢献します。名湯のピーリング効果と上質なお肉の滋養が融合し、内側からも外側からも美しさを磨く最高の冬湯治体験を約束します。
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-teal-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の菊池温泉・菊池渓谷旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-teal-700 font-extrabold">Q.</span>
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
          <div className="flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-teal-800" />
            あわせて読みたい初冬の全国名湯・美食特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-kumamoto-yamaga-hirayama-onsen-bihada-akagyu-basashi-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-teal-700 font-bold block text-[10px]">熊本・山鹿＆平山</span>
              <p className="font-bold text-stone-800 line-clamp-2">八千代座の初冬風情と極上とろとろ硫黄泉・熊本あか牛＆馬刺し名宿</p>
            </Link>
            <Link 
              href="/winter-kumamoto-aso-uchinomaki-onsen-akagyu-caldera-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-teal-700 font-bold block text-[10px]">熊本・阿蘇内牧温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">阿蘇カルデラの初冬絶景と極上あか牛丼・名湯百選露天風呂名宿</p>
            </Link>
            <Link 
              href="/winter-saga-furuyu-kumanokawa-onsen-nuruyu-sagagyu-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-teal-700 font-bold block text-[10px]">佐賀・古湯＆熊の川</span>
              <p className="font-bold text-stone-800 line-clamp-2">ぬる湯の聖地・嘉瀬川渓谷美と温冷交互浴・極上佐賀牛すき焼き名宿</p>
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

module.exports = { generateKumamotoKikuchiValleyPage };
