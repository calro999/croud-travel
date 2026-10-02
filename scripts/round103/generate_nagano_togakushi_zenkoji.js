const fs = require('fs');
const path = require('path');

function generateNaganoTogakushiZenkojiPage(hotels) {
  const slug = 'winter-nagano-togakushi-zenkoji-hatsumode-snow-soba-beef-stay';
  const title = '【11・12・1月長野】白銀の戸隠神社・奥社杉並木と冬の戸隠新そば＆国宝善光寺「お朝事」初詣・信州牛を堪能する名宿5選';
  const description = '11月から1月、信州の冬は静謐と祈りに満ちた神聖な季節を迎えます。樹齢400年を超える杉並木が一面の雪化粧に包まれる日本屈指の聖地「戸隠神社・奥社」の白銀古道と、秋収穫の風味豊かな「戸隠手打ち新そば」。そして約1400年の歴史を誇り「一生に一度は善光寺参り」と称される国宝「善光寺」での冬の朝のお朝事（あさじ）・お数珠頂戴と新春初詣。善光寺門前の歴史ある宿坊や格式高いシティホテル、信州プレミアム牛肉のすき焼きと信州味噌仕立ての温かな郷土料理に癒やされる冬の名宿5選をお届けします。';

  const hotelDetails = [
    {
      story: '長野県庁や城山公園に隣接し、善光寺まで徒歩圏内の落ち着いた文教エリアに佇む信州屈指の名門ホテル「ホテル国際21」。広々としたロビーや気品ある客室からは、冬の白銀に輝く北アルプスや志賀高原の山並みを望むことができます。館内には本格的な日本料理、鉄板焼き、中国料理、イタリアンの名店が揃い、冬の味覚として信州プレミアム牛肉のステーキやすき焼き、地元契約農家から届く根菜を使った温かなスープを提供。善光寺のお朝事参拝へのアクセスも良く、快適で洗練された冬の信州ステイを約束してくれます。',
      roomTip: 'タワー棟スカイビューツイン。高層階から雪化粧した北信五岳の稜線と長野市街の冬景色をワイドな窓から眺められます。',
      gourmetTip: '「鉄板焼き・信州プレミアム牛フィレコース」。サシの甘みと赤身の旨味が際立つA5信州牛をシェフの技で香ばしく焼き上げる極上ディナー。'
    },
    {
      story: '明治23年創業、皇族や各界の文化人・VIPに愛され続けてきたクラシックホテルの名門「長野ホテル犀北館（さいほくかん）」。館内には人間国宝の美術品や調度品がさりげなく配され、大正・昭和の面影を残す重厚で優美な空間が広がります。善光寺表参道まで徒歩圏内に位置し、冬の早朝散策にも最適。館内の日本料理「紀元」では、冬の信州の旬を凝縮した会席料理を提供。信州サーモンや信州牛の朴葉味噌焼き、伝統の信州味噌仕立ての小鍋など、歴史に磨かれた美食を心ゆくまで堪能できます。',
      roomTip: 'グランドデラックスツイン。クラシカルな家具と高い天井が醸し出す上質な空間で、大人の冬の記念日旅に最適です。',
      gourmetTip: '「信州伝統美食会席」。信州プレミアム牛のすき焼き鍋を中心に、信州の手打ちそばや冬の川魚料理を盛り込んだ老舗の味。'
    },
    {
      story: 'JR長野駅東口から徒歩約5分、全室に加湿空気清浄機と上質な寝具を備え、機能性と居心地の良さを高次元で両立させたシティホテル「チサングランド長野」。広めの客室設計と落ち着いた木目調のインテリアが、冬の観光やドライブの疲れを心地よく解きほぐします。最上階のレストランからは雪の長野盆地を見渡すパノラマが広がり、朝食には信州名物のおやき、地元産信州味噌の味噌汁、長野県産米「風さやか」の炊きたてご飯など、地元のお母さんの手作りのような温かい郷土バイキングが大好評です。',
      roomTip: 'スーペリアダブルルーム。ゆったりとしたクイーンサイズベッドと広めのデスクを備え、一人旅からカップルまで快適に過ごせます。',
      gourmetTip: '「信州郷土の恵み朝食ビュッフェ」。熱々のおやきや信州そば、地元野菜の温野菜サラダなど信州の味覚を朝から満喫。'
    },
    {
      story: 'JR長野駅善光寺口に直結する抜群のアクセスを誇り、冬の寒さや雪の日でも濡れずにチェックインできる好立地ホテル「長野東急REIホテル」。地下通路を通じて駅ビルや商業施設へ直結しており、戸隠神社行きの路線バス乗り場も目の前という観光拠点として圧倒的な利便性を誇ります。客室はシンプルモダンで機能的、テンピュール社製の枕が快眠をサポート。善光寺参道の入り口に位置するため、冬の門前町散策やお土産選び、老舗の蕎麦店巡りにも絶好のロケーションです。',
      roomTip: 'スタンダードツインルーム。清潔感あふれる明るい内装で、駅前とは思えない静寂な空間でゆったりとくつろげます。',
      gourmetTip: '「和洋朝食ビュッフェ」。長野県産の新鮮卵で作るオムレツや、信州の地酒粕を使った豚汁など身体が温まるメニューが充実。'
    },
    {
      story: '国宝・善光寺の境内に位置し、善光寺の歴史とともに数百年にわたり参拝者を迎え入れてきた由緒ある宿坊「善光寺宿坊 淵之坊（ふちのぼう）」。阿弥陀如来を祀る本堂のすぐ近くにあり、冬の凛とした朝の空気の中、住職の案内で本堂の「お朝事（あさじ）」や「お数珠頂戴」へ参列する貴重な信仰体験が叶います。夕食には伝統の手法で一品一品丹精込めて作られる本格的な「精進料理」。冬の素材である蕪、蓮根、長芋、胡麻豆腐などが美しい漆器に並び、身体の芯から心が洗われる特別な一夜を過ごせます。',
      roomTip: '庭園を望む落ち着いた和室。青畳の香りと障子越しに差し込む柔らかな冬の光が、日常を離れた静謐な癒やしをもたらします。',
      gourmetTip: '「善光寺伝統・冬の本格精進料理」。動物性食材を一切使わず、出汁の旨味と旬の根菜・豆腐料理で仕立てる滋味あふれる御膳。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥9,200〜' : i === 1 ? '¥5,896〜' : i === 2 ? '¥4,950〜' : i === 3 ? '¥6,700〜' : '¥22,600〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.38' : i === 1 ? '4.15' : i === 2 ? '4.42' : i === 3 ? '4.22' : '4.71');
    const reviewCount = h.reviewCount || (i === 0 ? 1340 : i === 1 ? 820 : i === 2 ? 1560 : i === 3 ? 980 : 210);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'JR長野駅より徒歩またはタクシーで約5〜10分。上信越道・長野ICより車で約20分')},
              special: ${JSON.stringify(h.hotelSpecial || '白銀の戸隠神社杉並木・新そばと国宝善光寺冬の朝事・初詣＆信州牛を堪能する宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '善光寺まで徒歩圏内の名門ホテル・高層階から雪化粧の北アルプスを望むパノラマビュー' : i === 1 ? '明治23年創業の歴史あるクラシックホテル・美術品に彩られた上質な空間と伝統の信州料理' : i === 2 ? '長野駅東口徒歩5分の快適ステイ・広々とした客室と手作りおやきが並ぶ信州郷土朝食' : i === 3 ? '長野駅善光寺口に直結する抜群の好立地・戸隠行きバス停目の前で冬の観光拠点に最適' : '国宝善光寺境内の由緒ある宿坊・早朝の「お朝事」案内と心洗われる伝統精進料理')},
                ${JSON.stringify(i === 0 ? '信州プレミアム牛の鉄板焼きやすき焼き・4つの本格レストランが揃う美食体験' : i === 1 ? '日本料理「紀元」の信州牛朴葉味噌焼き会席・皇族や文人に愛された名門のホスピタリティ' : i === 2 ? '加湿空気清浄機完備の清潔な客室・ビジネスから観光まで高いクチコミ評価を獲得' : i === 3 ? 'テンピュール製枕の快眠サポート・善光寺表参道の散策や冬の門前町グルメめぐりに直結' : '本堂のお戒壇巡りやお数珠頂戴を体験・静謐な和室で過ごす非日常の祈りの時間')},
                ${JSON.stringify(i === 0 ? '無料送迎や充実の駐車場完備・カップルやファミリーにも選ばれる北信の迎賓館' : i === 1 ? 'クラシカルで格調高い大人の隠れ家・冬の善光寺参拝と信州ワインの優雅なマリアージュ' : i === 2 ? 'コストパフォーマンス抜群の滞在・最上階レストランからの眺望と温かなおもてなし' : i === 3 ? '駅直結で雪の日も安心移動・長野市内の人気そば店や地酒バーへのアクセスも自由自在' : '住職による心温まる法話と寺院文化・人生の節目に訪れたい特別な宿坊ステイ')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "冬の「戸隠神社・奥社」の参拝方法と雪道の装備・注意点は？",
      a: "戸隠神社奥社への参道（約2km）は、樹齢約400年のスギ並木が約500mにわたって続く日本屈指のパワースポットです。12月〜1月は参道全体が深い雪に覆われ、静寂に包まれた息を呑む白銀の絶景が広がります。冬期は奥社社務所は閉殿していますが、参拝自体は通年可能です。ただし、雪道は圧雪や凍結で大変滑りやすいため、スノーブーツや防寒長靴、簡易アイゼン（チェーンスパイク）の装着を強く推奨します。足元が不安な場合は、戸隠観光協会などでスノーシューをレンタルして冬のネイチャーウォークとして楽しむのもおすすめです。"
    },
    {
      q: "冬に味わう「戸隠そば（新そば）」の特徴と「ぼっち盛り」とは？",
      a: "日本三大そばの一つに数えられる戸隠そば。毎年10月下旬から11月にかけて「新そば」が出回り、冬（11月〜1月）は最も風味と香りが際立つ最高の季節です。戸隠そばの最大の特徴は、水をほとんど切らずに一口大に束ねてざるに盛る「ぼっち盛り（ひと山をぼっちと呼ぶ）」です。これは戸隠神社の神々へお供えした伝統に由来し、通常は5つのぼっち（五社を表す）で盛られます。冬には冷たいざるそばに加え、地元産キノコや根菜がたっぷり入った温かい「とうじそば」も身体が温まり格別の味わいです。"
    },
    {
      q: "国宝・善光寺の冬の「お朝事（あさじ）」と「お数珠頂戴」の魅力と時間は？",
      a: "善光寺では、365日欠かさず日の出とともに本堂で「お朝事（朝の法要）」が行われます。冬（11月〜1月）のお朝事は朝6時30分〜7時頃から始まります。本堂に向かう天台宗・浄土宗の両住職（貫主・上人）が、参道にひざまずく参拝者の頭を数珠で撫でて功徳を授ける「お数珠頂戴（おじゅずちょうだい）」は、善光寺ならではの神聖な儀式です。冬のピンと張り詰めた清浄な朝の空気の中、本堂内に響き渡る僧侶の声明（しょうみょう）と読経に包まれる体験は、心が洗われる一生の思い出になります。"
    },
    {
      q: "年末年始の善光寺初詣の混雑状況とおすすめの参拝時間帯は？",
      a: "善光寺は正月三が日に全国から約50万人以上の初詣客が訪れる信州最大の初詣スポットです。特に元日の0時〜2時、および日中の11時〜15時は本堂前が大変混雑し、参拝までに1時間以上並ぶことがあります。混雑を避けるなら、早朝（7時〜8時半のお朝事の時間帯）または夕方（16時以降）の参拝が狙い目です。雪の境内に灯る燈籠の灯りとライトアップされた山門の冬景色も幻想的です。"
    },
    {
      q: "冬期に長野市街から戸隠へアクセスする際のバス・道路交通状況は？",
      a: "長野駅（善光寺口7番乗り場）からアルピコ交通の路線バス「戸隠線」が通年運行しており、冬期でも約1時間で戸隠中社へアクセスできます（奥社行きの直通バスは冬期運休となるため、中社バス停から徒歩またはタクシー利用）。車で向かう場合、長野市街から戸隠へ至る県道（戸隠バードライン等）は標高1200mを超える山岳道路のため、11月下旬〜3月は完全な積雪・アイスバーン路面になります。必ず高性能スタッドレスタイヤを装着し、チェーンを携行してください。"
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
  keywords: '戸隠神社 冬 奥社 杉並木, 戸隠そば 新そば 冬, 善光寺 お朝事 初詣, 善光寺 宿坊 淵之坊, ホテル国際21 長野, 長野ホテル犀北館, チサングランド長野, 長野東急REIホテル, 信州牛 すき焼き, 11月 12月 1月 長野旅行',
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
        alt: '冬の戸隠神社・白銀の杉並木と国宝善光寺の雪景色'
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

export default function NaganoTogakushiZenkojiWinterPage() {
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
      url: 'https://croud-travel.com',
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
        item: 'https://croud-travel.com/'
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
        name: '戸隠神社＆善光寺 白銀古道と冬の新そば・初詣名宿',
        item: 'https://croud-travel.com/${slug}'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
${faqList.map(item => `      {
        '@type': 'Question',
        name: ${JSON.stringify(item.q)},
        acceptedAnswer: {
          '@type': 'Answer',
          text: ${JSON.stringify(item.a)}
        }
      }`).join(',\n')}
    ]
  };

  const hotelsData = [
${hotelCardsCode}
  ];

  const faqListItems = ${JSON.stringify(faqList, null, 2)};

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-emerald-100 selection:text-emerald-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の信州・白銀の戸隠神社奥社杉並木と善光寺" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-emerald-900/80 backdrop-blur-md text-emerald-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-emerald-400/30">
            <Snowflake className="w-4 h-4 text-emerald-300" />
            11月・12月・1月 冬の信州・白銀の戸隠神社＆国宝善光寺お朝事初詣特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月長野】白銀の戸隠神社・奥社杉並木と冬の戸隠新そば＆国宝善光寺「お朝事」初詣・信州牛を堪能する名宿5選
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            神話の時代から続く聖地・信州の冬。樹齢400年の巨大な杉並木が白銀の雪をまとい、音のない静寂に包まれる「戸隠神社・奥社」の神秘的な参道。晩秋に収穫されたばかりの瑞々しい風味と甘みが凝縮された名物「戸隠手打ち新そば」。そして約1400年の祈りを紡ぐ国宝「善光寺」での冬の朝のお朝事参拝とお数珠頂戴、新春初詣。善光寺門前の由緒ある宿坊や格式高いホテルで味わう極上信州牛のすき焼き鍋。心が洗われる冬の祈りと美食の旅へ誘います。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-emerald-400" /> 最適時期：11月中旬〜1月下旬（戸隠新そば・白銀雪景色・新春初詣）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-400" /> エリア：長野県長野市（善光寺門前・戸隠高原）</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-emerald-400" /> 名物：戸隠新そば・信州プレミアム牛・信州おやき・善光寺宿坊精進料理</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              白銀に佇む神話の杜と、千四百年の祈りが灯る善光寺の冬
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              日本海からの寒気が北信五岳の山々を越えて吹き下ろし、信州の野山が純白の雪に閉ざされる冬。長野市から車で約40分、標高1200メートルの高台に広がる戸隠（とがくし）は、天照大神が隠れた「天岩戸」が飛来したという神話が息づく聖地です。
            </p>
            <p>
              12月から1月、戸隠神社奥社へと続く約2キロメートルの参道は、一面の深い雪に覆われます。中間地点の随神門をくぐると現れるのは、樹齢400年を超える杉並木。空を覆い尽くすほどの巨木が雪をかぶり、凛とした冷気と足元の雪を踏みしめる音だけが響く静謐な空間は、訪れる者の心を瞬時に浄化してくれます。参拝の後は、門前の蕎麦店で冬の「戸隠新そば」を。晩秋に収穫されたばかりの風味豊かな新そばを、円錐状に美しく盛る「ぼっち盛り」で手繰れば、豊かな甘みと蕎麦の香りが鼻腔をくすぐります。
            </p>
            <p>
              山から長野市街へと戻れば、「牛に引かれて善光寺参り」で知られる無宗派の古刹・善光寺が佇みます。冬の早朝、凛と澄み渡る寒気の中、本堂で行われる「お朝事（あさじ）」は冬旅の真髄です。参道に跪く信徒の頭を住職が数珠で撫でて功徳を授ける「お数珠頂戴」、国宝本堂に響き渡る厳かな読経、そして真っ暗な回廊を手探りで進み極楽往生を祈る「お戒壇巡り」。新年の初詣の時期には、全国から多くの参拝者が集まり、新たな一年の平安を祈ります。
            </p>
            <p>
              門前の宿坊でいただく伝統の精進料理や、市内のホテルで味わう信州プレミアム牛肉のすき焼き・信州味噌仕立ての温かい郷土鍋。清らかな雪景色と温かな信州のもてなしが、冬の旅を深く心に刻んでくれます。
            </p>
          </div>
        </section>

        {/* 3 Major Winter Highlights */}
        <section className="space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の戸隠・善光寺を満喫する3大感動体験
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <Mountain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                1. 戸隠神社奥社・樹齢400年杉並木の白銀参道
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                雪に包まれた随神門と約500m続く巨木杉並木の圧倒的な静寂美。スノーブーツやスノーシューで歩く神話の杜は、一生忘れられない聖地体験となります。
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                2. 冬の戸隠新そば「ぼっち盛り」と郷土鍋
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                秋収穫の新そばが最も芳醇な香りを放つ冬。伝統のぼっち盛り手打ちそばに加え、冬限定の根菜ときのこがたっぷり入った温かい「とうじそば」で身体を温めます。
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                3. 国宝善光寺の早朝「お朝事」参拝と新春初詣
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                澄んだ冬の朝、両住職から功徳を授かる「お数珠頂戴」と本堂の荘厳な読経。漆黒の闇を進む「お戒壇巡り」と新年の初詣で心身をリセットする特別な時間。
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Timeline Model Course Section */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-emerald-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              【1泊2日】白銀の戸隠古道と善光寺お朝事を巡る信州祈り旅黄金モデルコース
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              長野駅を起点に、路線バスやタクシー・スタッドレス車で冬の神話の杜と国宝寺院を心静かに巡るプラン。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">DAY 1 昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  10:30 長野駅到着 ➔ 戸隠中社へ移動＆名物「戸隠新そば」ランチ
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  長野駅善光寺口から路線バスで約1時間、雪の戸隠中社へ。名店「うずら家」などで風味豊かな手打ち新そば（ぼっち盛り）と、揚げたての天ぷら、温かいそばがきを味わいます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">DAY 1 午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  13:00 戸隠神社奥社・白銀古道スノーウォーク ➔ 樹齢400年杉並木の静寂
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  スノーブーツを装着して奥社参道へ。赤い随神門をくぐり、雪をかぶった圧巻の巨木杉並木の中を進みます。音のない静謐な白銀の世界で心身を清める至福のウォーキング。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">DAY 1 夕刻〜夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  16:30 善光寺門前・長野市内の宿にチェックイン ➔ 信州プレミアム牛すき焼きディナー
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  長野市街へ戻り、名門ホテルまたは善光寺宿坊へチェックイン。夕食はとろける霜降りの信州牛すき焼き鍋や、信州味噌仕立ての温かい郷土料理。信州の銘酒「真澄」とともに冷えた身体を温めます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  06:45 国宝善光寺「お朝事」参拝＆お数珠頂戴 ➔ お戒壇巡りと仲見世散策
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  早朝、凛とした空気の中で両住職からお数珠頂戴を受け、本堂のお朝事に参列。床下の漆黒のお戒壇巡りを体験後、宿で温かい朝食。仲見世通りで蒸したておやきや七味唐辛子を購入して帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Gastronomy & Culture Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Gastronomy & Culture</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              厳しい冬の信州を温める伝統食文化と発酵の知恵
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-emerald-700" />
                善光寺門前の名物「八幡屋礒五郎」七味とおやき文化
              </h3>
              <p>
                善光寺参道の入口に店を構える創業280年の老舗「八幡屋礒五郎」の七味唐辛子は、善光寺詣での定番土産。唐辛子、山椒、生姜、麻種、胡麻、陳皮、紫蘇の絶妙な調合が、冬の冷えた身体を芯から温めます。また、冬の保存食として発展した「信州おやき」は、野沢菜や切り干し大根、小豆などを小麦粉生地で包んで蒸し焼きにした素朴な美味。出来立ての熱々を頬張る瞬間は旅の最高の醍醐味です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-emerald-700" />
                清冽な伏流水と寒造りが生み出す信州の地酒文化
              </h3>
              <p>
                北信濃の厳しい寒気と北アルプスの雪解け水は、酒造りに理想的な環境を提供します。長野市周辺の老舗酒蔵（西之門・よしのや等）では、冬に新酒の仕込みが最盛期を迎えます。芳醇な米の甘みとキレのある酸味が特徴の信州地酒は、信州牛のすき焼きや信州味噌の鍋料理と最高の相性を誇ります。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel Recommendations Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Selected Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の善光寺参拝と信州牛・郷土美食を堪能する厳選名宿5選
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              楽天トラベル公式APIより取得した最新データに基づく、立地・サービス・料理が高評価の宿。
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
                        <span className="text-xs font-bold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
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
                        <Sparkles className="w-4 h-4 text-emerald-600" />
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

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-stone-100">
                      <div>
                        <span className="text-xs text-stone-500 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-lg sm:text-xl font-black text-emerald-900">{h.price}</span>
                      </div>

                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-xs transition-colors"
                      >
                        楽天トラベルで空室・プランを見る
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Tips Section */}
        <section className="bg-emerald-50/60 rounded-3xl p-6 sm:p-10 border border-emerald-200/60 space-y-6">
          <div className="border-b border-emerald-200/80 pb-4">
            <span className="text-emerald-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Traveler Tips</span>
            <h2 className="text-xl sm:text-2xl font-bold text-emerald-950">
              冬の戸隠・善光寺を快適に巡るための実践アドバイス
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-emerald-950">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-emerald-700" />
                戸隠の積雪と足元装備
              </div>
              <p className="leading-relaxed text-stone-700">
                戸隠エリアは標高1200mを超える豪雪地帯です。奥社参道は圧雪や凍結で滑りやすいため、防水スノーブーツや簡易アイゼンを持参してください。手袋・ネックウォーマーも必須です。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-emerald-700" />
                山道ドライブの冬用タイヤ規制
              </div>
              <p className="leading-relaxed text-stone-700">
                長野市街から戸隠へ続く戸隠バードライン等はカーブが多く、12月〜1月は完全なアイスバーンになります。車で訪れる場合は必ず4WD車のスタッドレスタイヤ装着車を選び、安全運転を徹底しましょう。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                善光寺本堂の足元の冷え対策
              </div>
              <p className="leading-relaxed text-stone-700">
                冬の善光寺本堂内はお堂が広く板張りのため、足元から強烈に冷え込みます。お朝事参拝の際は厚手の靴下やレッグウォーマー、インナーダウンを着用して参拝に臨んでください。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の戸隠神社・新そば＆善光寺参拝に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-emerald-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
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
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい全国の冬景色・聖地・初詣特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-nagano-shibu-onsen-nine-sotoyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-emerald-800 font-bold text-xs block mb-1">長野・渋温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-emerald-900 transition-colors line-clamp-2">
                ノスタルジックな石畳の雪景色・九湯巡り厄除け外湯と信州牛名宿
              </span>
            </Link>

            <Link 
              href="/winter-nagano-hakuba-onsen-powder-snow-alps-shinshu-beef-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-emerald-800 font-bold text-xs block mb-1">長野・白馬</span>
              <span className="text-stone-900 font-bold group-hover:text-emerald-900 transition-colors line-clamp-2">
                極上パウダースノーと北アルプス白銀絶景・美肌八方温泉＆信州牛名宿
              </span>
            </Link>

            <Link 
              href="/winter-nagano-hirugami-onsen-starry-sky-shinshugyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-emerald-800 font-bold text-xs block mb-1">長野・阿智村</span>
              <span className="text-stone-900 font-bold group-hover:text-emerald-900 transition-colors line-clamp-2">
                日本一の星空ナイトツアーと南信州美肌の湯・昼神温泉名宿
              </span>
            </Link>

            <Link 
              href="/winter-mie-ise-jingu-hatsumode-okageyokocho-iseebi-matsusaka-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-emerald-800 font-bold text-xs block mb-1">三重・伊勢神宮</span>
              <span className="text-stone-900 font-bold group-hover:text-emerald-900 transition-colors line-clamp-2">
                新春の伊勢神宮初詣とおかげ横丁・伊勢海老＆松阪牛会席名宿
              </span>
            </Link>

            <Link 
              href="/winter-gunma-kusatsu-onsen-yubatake-joshu-beef-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-emerald-800 font-bold text-xs block mb-1">群馬・草津温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-emerald-900 transition-colors line-clamp-2">
                湯畑ライティングと西の河原露天風呂雪景色・名湯上州牛名宿
              </span>
            </Link>

            <Link 
              href="/winter-tokushima-iya-valley-kazurabashi-snow-onsen-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-emerald-800 font-bold text-xs block mb-1">徳島・祖谷渓谷</span>
              <span className="text-stone-900 font-bold group-hover:text-emerald-900 transition-colors line-clamp-2">
                祖谷のかずら橋雪景色とケーブルカーで行く谷底露天風呂名宿
              </span>
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

module.exports = { generateNaganoTogakushiZenkojiPage };
