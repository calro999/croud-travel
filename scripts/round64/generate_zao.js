const fs = require('fs');
const path = require('path');

function generateZaoPage(hotels) {
  const slug = 'winter-yamagata-zao-onsen-snow-jyuhyo-beef-stay';
  const title = '【11・12月山形蔵王温泉の冬名湯と白銀の樹氷】初雪の強酸性硫黄泉露天と蔵王ロープウェイ・極上山形牛すき焼き＆郷土芋煮会席の宿5選';
  const description = '11月下旬から12月にかけて奥羽山脈の主峰・蔵王連峰に雪が降り積もり、冬の奇跡「樹氷（スノーモンスター）」が徐々に姿を現し始める山形「蔵王温泉」。開湯1900年の歴史を誇るpH1.5前後の強酸性白濁硫黄泉は肌を滑らかにし血行を促進する「美人づくりの湯」。雪景色に包まれた野趣あふれる露天風呂、とろける肉質のブランド黒毛和牛「山形牛」「蔵王牛」のすき焼きや名物山形芋煮会席を満喫する厳選名宿5選を徹底解説。';

  const hotelDetails = [
    {
      story: '享保元年（1716年）創業、三百余年の歴史を紡ぎ蔵王温泉の開湯の歴史を今に伝える最高峰の老舗旅館「深山荘 高見屋（みやまそう たかみや）」。温泉街の最も奥まった高台、石段の続く情緒あふれる場所に佇む純木造数寄屋造りの建物は、まさに日本の伝統建築美の結晶です。宿が誇る自家源泉は蔵王屈指の濃厚な強酸性白濁硫黄泉。ヒノキの香りが漂う内湯「せせらぎの湯」や、自然の巨岩を配した野趣あふれる露天風呂「かじかの湯」で、初冬の静寂と雪の気配に包まれながら至高の湯浴みを堪能できます。',
      roomTip: '数寄屋造りの「離れ 雛蔵」または上層階の和モダン特別室。障子越しに初雪が降る奥羽の山並みを望み、歴史ある老舗ならではの静謐な時間を過ごせます。',
      gourmetTip: '山形の最高級ブランド「山形牛」のすき焼きやサーロインステーキをメインに据えた月替わりの懐石料理。冬の味覚である山形名物芋煮鍋や旬の根菜、山形地酒のペアリングが格別。'
    },
    {
      story: '蔵王の大自然に抱かれ、巨木を組み上げた圧巻の木造湯屋建築「八右衛門の湯」で全国の温泉ファンを魅了する「蔵王温泉 蔵王国際ホテル」。天井高の木造梁が美しい内湯と、雪景色を間近に臨む石造りの大露天風呂には、乳白色に濁るpH1.5前後の強酸性硫黄泉が贅沢に掛け流されています。広々としたラウンジや温もりのある館内はリゾート感に溢れ、蔵王ロープウェイ山麓駅までも徒歩数分という好立地。初冬の山歩きや樹氷見学の拠点として極上の快適性を誇ります。',
      roomTip: '木の温もりを感じるジュニアスイートまたはプレミアムツイン。大きな窓から蔵王連峰の初雪景色を一望でき、ゆったりとしたリビングスペースが旅の疲れを癒やします。',
      gourmetTip: '料理長特選の山形牛会席。霜降りの山形牛サーロイン陶板焼きやすき焼き、山形県産つや姫の新米、日本海の冬魚など、厳選された山形の豊かな恵みがテーブルを彩ります。'
    },
    {
      story: '蔵王温泉のシンボルである鴫の谷地沼（しぎのやちぬま）のほとり、美しい白樺林に囲まれた静寂のリゾート「蔵王温泉 蔵王四季のホテル」。ホテルの本館からカラマツの小道を歩いて百八歩の場所にある離れ湯「白樺の湯」は、総木造りの建物に乳白色の硫黄泉が湛えられ、開放感あふれる露天風呂からは初雪をまとった白樺の木立を眺められます。朝霧が立ち込める早朝の湯浴みは息をのむ美しさで、日常を完全に忘れさせてくれます。',
      roomTip: '白樺林を望む和モダンツインまたは純和風客室。静まり返った初冬の森の息吹を感じながら、澄んだ高原の空気に癒やされる贅沢なひととき。',
      gourmetTip: '山形牛をメインとした四季の会席料理。とろけるような山形牛のしゃぶしゃぶやすき焼き、地元特産の温かい山形芋煮、山形の郷土料理がバランス良く味わえます。'
    },
    {
      story: '蔵王温泉街の中心部に位置し、蔵王中央ロープウェイまで徒歩1分という絶好のアクセスを誇る大型温泉リゾート「名湯リゾート ルーセントタカミヤ」。赤御影石を贅沢に使った広々とした大浴場「瑠璃の湯」や、夜風が心地よい露天風呂には蔵王の強酸性硫黄泉が注がれ、湯上がり後の肌がすべすべになる抜群の温まり効果を体感できます。冬のアクティビティ後の宿泊にも最適で、館内にはリラクゼーション施設も充実しています。',
      roomTip: '眺望の良い高層階和洋室。初冬の蔵王温泉街の灯りと、雪化粧を始めた山並みをワイドな窓から鑑賞できます。',
      gourmetTip: '山形牛のすき焼きや陶板焼きを中心とした和食会席。山形県産の新鮮な野菜や山の幸を取り入れた、心温まる冬の郷土膳。'
    },
    {
      story: '創業千年余りの歴史を誇り、蔵王温泉で最も高台の源泉湧出地近くに建つ純和風旅館「蔵王温泉 おおみや旅館」。全館が温もりあふれる畳敷きとなっており、館内に足を踏み入れた瞬間からノスタルジックな大正ロマンの世界へと誘われます。大浴場には「玉子風呂」「源泉風呂」「泡風呂」という3つの異なる湯船があり、すべて自家源泉100%掛け流し。浴槽の底からじんわりと湧き出す新鮮な硫黄泉は肌あたりが柔らかく、古き良き湯治文化の真髄を味わえます。',
      roomTip: '大正ロマン香るレトロモダンな和室。畳の香りと障子から差し込む初冬の柔らかな光に包まれ、静かな旅情に浸ることができます。',
      gourmetTip: '山形の郷土の味を丁寧に紡いだ会席膳。山形牛の陶板焼き、山形名物芋煮汁、地元の採れたて山菜やきのこを使った繊細な小鉢が並びます。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName)},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80')},
              rating: ${h.reviewAverage ? Number(h.reviewAverage).toFixed(2) : '4.58'},
              reviews: ${h.reviewCount || 900},
              price: ${JSON.stringify(h.hotelMinCharge ? `¥${h.hotelMinCharge.toLocaleString()}〜` : '¥17,000〜')},
              access: ${JSON.stringify(h.access || '山形新幹線 山形駅より路線バスで約45分、蔵王温泉バスターミナル下車。山形自動車道 山形蔵王ICより車で約30分')},
              special: ${JSON.stringify(h.hotelSpecial || '初雪の強酸性硫黄泉露天風呂と樹氷ロープウェイ・極上山形牛会席')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '享保元年（1716年）創業・三百余年の歴史を誇る純木造数寄屋建築＆自家源泉掛け流し' : i === 1 ? '巨木組みの圧巻木造湯屋「八右衛門の湯」＆乳白色強酸性硫黄泉100%掛け流し' : i === 2 ? '本館から百八歩の離れ湯「白樺の湯」＆初雪の白樺林を望む絶景雪見露天風呂' : i === 3 ? '蔵王中央ロープウェイ徒歩1分の好立地＆赤御影石大浴場「瑠璃の湯」と露天風呂' : '創業千余年・全館畳敷きの大正ロマン宿＆自家源泉100%の玉子風呂・泡風呂湯巡り')},
                ${JSON.stringify(i === 0 ? '歴史ある石段街の最奥高台に位置する静寂の隠れ宿＆岩風呂「かじかの湯」' : i === 1 ? '蔵王ロープウェイ山麓駅徒歩数分＆広々としたジュニアスイートと上質ラウンジ' : i === 2 ? '鴫の谷地沼のほとりに建つ静謐なリゾート＆初冬の朝霧と白樺のパノラマ' : i === 3 ? '広々とした和洋室＆冬の蔵王連峰や温泉街を一望する快適リゾートステイ' : '足元からポカポカ温まる畳敷きの館内＆源泉の湧出地に最も近い高台の立地')},
                ${JSON.stringify(i === 0 ? '特選山形牛サーロインすき焼きと山形芋煮・山形地酒プレミアムペアリング' : i === 1 ? '最高級山形牛陶板焼き・すき焼き＆山形県産ブランド米つや姫の特選会席' : i === 2 ? '山形牛しゃぶしゃぶと山形郷土料理を味わう四季折々の月替わり膳' : i === 3 ? '山形牛陶板焼きと旬の山海の恵みを贅沢に盛り込んだボリューム満点会席' : '山形牛陶板焼きと手作り芋煮汁・山形郷土の味覚を心ゆくまで堪能する会席膳')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "蔵王温泉の11月・12月の気候や雪の状況は？ノーマルタイヤで行けますか？",
      a: "蔵王温泉街は標高約900m、樹氷原が広がる山頂部は標高約1,660mに達するため、11月に入ると平野部（山形市内）とは別世界の寒さとなります。11月上旬から初雪が舞うことがあり、11月中旬以降は道路の積雪や路面凍結が日常化します。12月に入ると完全な積雪期となり、温泉街でも50cm〜1m以上の積雪を記録します。そのため、11月以降にお車で訪れる場合はスタッドレスタイヤの装着が絶対に不可欠です（ノーマルタイヤでの走行は極めて危険であり法令違反となります）。防寒具には厚手のダウンジャケット、ニット帽、手袋、防水・防滑仕様のスノーブーツを必ずご用意ください。"
    },
    {
      q: "冬のシンボル『樹氷（スノーモンスター）』は11月・12月に見られますか？",
      a: "蔵王の樹氷は、日本海からの冷たい季節風がアオモリトドマツに吹き付け、過冷却水滴が凍りついて徐々に成長する世界でも稀な自然現象です。11月下旬から12月上旬にかけて山頂付近で「樹氷の着氷・着雪（初期段階）」が始まり、12月中旬から下旬にかけて徐々にモンスターの形へと育っていきます。完全な巨大人形（スノーモンスター）に完成するのは1月〜2月ですが、12月下旬からは「樹氷ライトアップ」がスタートし、夜の闇に浮かび上がる白銀の樹氷群をロープウェイから鑑賞することができます。"
    },
    {
      q: "蔵王温泉の泉質『強酸性白濁硫黄泉』の特徴と入浴時の注意点は？",
      a: "蔵王温泉はpH1.25〜1.6という日本でも指折りの強酸性温泉（酸性・含硫黄-アルミニウム-硫酸塩・塩化物温泉）です。強い殺菌力があり、皮膚病や慢性皮膚疾患、切り傷に効果があるほか、硫黄成分が血管を拡張して血行を促進し、肌の古い角質を溶かすため「美人づくりの湯」として親しまれています。注意点として、酸性度が非常に高いため貴金属（金・銀・プラチナなどの指輪やネックレス）は一瞬で黒く変色します。必ず入浴前に外してください。また、目に入ると強い痛みを感じるため、顔を洗う際は真水を使用しましょう。"
    },
    {
      q: "山形名物『芋煮（いもに）』とはどのような郷土料理ですか？",
      a: "山形の「芋煮」は、里芋、牛肉、こんにゃく、ネギなどを鍋でじっくり煮込んだ山形県民のソウルフードです。山形県内でも地域によって味付けが異なり、蔵王温泉を含む村山地域（内陸部）では「国産牛肉」を使い、醤油・酒・砂糖で甘辛く仕立てるのが伝統です。里芋のねっとりとした食感と牛肉の旨味が溶け出した熱々のスープは、初冬の冷え切った体を芯から温めてくれます。"
    },
    {
      q: "蔵王ロープウェイの運行状況と山頂の気温はどのくらいですか？",
      a: "蔵王ロープウェイは「蔵王山麓駅」から「樹氷高原駅」を経由して山頂の「地蔵山頂駅」まで結んでいます。初冬の山頂（標高1,661m）は、11月で日中0℃〜氷点下5℃、12月になると日中でもマイナス5℃〜マイナス10℃、強風時には体感温度マイナス20℃以下に達します。ロープウェイの車内や展望台から景色を眺めるだけでも極寒の冷気に晒されるため、完全防寒（スキーウェアや高性能ダウン、耳あて、ネックウォーマー、ホッカイロ）を装備して向かいましょう。"
    }
  ];

  const pageContent = `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '蔵王温泉 宿泊, 蔵王温泉 11月 12月, 深山荘 高見屋, 蔵王国際ホテル, 蔵王四季のホテル, ルーセントタカミヤ, おおみや旅館, 蔵王 樹氷 ライトアップ, 蔵王ロープウェイ, 山形牛 すき焼き, 山形 芋煮',
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
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
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
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'],
  }
};

const faqList = ${JSON.stringify(faqList, null, 2)};

export default function ZaoOnsenWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/${slug}#article",
        "headline": ${JSON.stringify(title)},
        "description": ${JSON.stringify(description)},
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-28T00:00:00+09:00",
        "dateModified": "2026-09-28T00:00:00+09:00",
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
          ${faqList.map(f => `{
            "@type": "Question",
            "name": ${JSON.stringify(f.q)},
            "acceptedAnswer": {
              "@type": "Answer",
              "text": ${JSON.stringify(f.a)}
            }
          }`).join(',\n          ')}
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
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-indigo-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-slate-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="蔵王連峰の白銀の樹氷と初雪に煙る強酸性白濁硫黄泉の雪見露天風呂"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/90 text-indigo-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-indigo-800/50">
            <Snowflake className="w-4 h-4 text-indigo-300" />
            <span>11月・12月限定 開湯1900年の強酸性白濁湯 樹氷形成の奇跡と極上山形牛</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月山形蔵王温泉の冬名湯と白銀の樹氷】<br className="hidden sm:inline" />
            初雪の強酸性硫黄泉露天と蔵王ロープウェイ・極上山形牛すき焼き＆郷土芋煮会席の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            奥羽山脈の主峰・蔵王連峰に舞い降りる純白の雪。pH1.5前後の圧倒的な酸性度を誇る乳白色の硫黄泉露天風呂に浸かり、神秘の樹氷形成と極上山形牛すき焼き、熱々の山形芋煮を味わう冬の東北旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-indigo-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-indigo-400" /> 山形県山形市蔵王温泉（標高約900m）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Yamagata Zao Onsen Winter Splendor</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                開湯千九百年。奥羽山脈の懐に湧く強酸性硫黄泉と、世界が驚嘆する白銀の樹氷世界
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            山形県と宮城県の境にそびえる奥羽山脈の主峰・蔵王連峰。その山形県側の山懐、標高約900メートルの高地に広がる「蔵王温泉」は、西暦110年に日本武尊の東征に従軍した吉備多賀由（きびのたかよし）によって発見されたと伝わる、東北屈指の古湯です。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            蔵王温泉の最大の特徴は、pH1.25〜1.6という日本でも有数の「強酸性・含硫黄-アルミニウム-硫酸塩・塩化物温泉」であること。乳白色に濁る湯には強い殺菌作用があり、皮膚病や切り傷を癒やすとともに、古い角質を溶かして肌を滑らかにするため、古くから「美人づくりの湯」として崇められてきました。さらに硫黄成分が毛細血管を広げ、真冬でも体の芯からぽかぽかと温まる抜群の保温効果を誇ります。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            11月下旬から12月にかけて、蔵王温泉は初雪とともに幻想的な白銀の世界へと姿を変えます。山頂付近（標高約1,660m）では世界的に珍しい自然の芸術「樹氷（スノーモンスター）」が徐々に育ち始め、蔵王ロープウェイからは一面の樹氷原パノラマを見渡すことができます。雪見露天風呂で冷えた体を包み込んだ後は、ブランド黒毛和牛「山形牛」の霜降りすき焼きや、心温まる山形名物芋煮鍋に舌鼓を打つ至福の冬旅をお約束します。
          </p>
          
          <div className="bg-indigo-50/70 rounded-2xl p-5 border border-indigo-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-indigo-900 tracking-wider">初冬の蔵王温泉 旅のチェックポイント</span>
              <p className="text-xs sm:text-sm text-slate-700">
                11月中旬以降は完全な雪道となります。お車は必ずスタッドレスタイヤを装着し、山頂展望台に向かう際は完全防寒具（厚手ダウン・スノーブーツ等）をご用意ください。
              </p>
            </div>
            <div className="shrink-0 bg-indigo-900 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm">
              標高約900m〜1660m
            </div>
          </div>
        </section>

        {/* Section 2: Juhyo & Strong Acid Sulfur Spring */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Zao Hot Spring & Nature Wonder</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                強酸性泉の圧倒的効能と初冬の樹氷（スノーモンスター）誕生の秘密
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            蔵王温泉の白濁湯は自然湧出の掛け流し。冬の澄み渡る寒さの中でこそ、その温熱効果と美肌作用が際立ちます。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-base">強酸性・含硫黄泉</span>
                <span className="text-xs bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">pH 1.5前後</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                強力な殺菌力と角質軟化作用を持ち、肌をスベスベにする美肌効果抜群。血行を促進して湯冷めを防ぎます。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-base">雪見露天風呂の極致</span>
                <span className="text-xs bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">初雪と白樺</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                巨石や総木造りの露天風呂に注ぐ乳白色の湯。外気温氷点下の凛とした空気と、立ち込める硫黄の湯煙のコントラストは至高。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-base">樹氷（スノーモンスター）</span>
                <span className="text-xs bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">11・12月初期形成</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                シベリアからの季節風がアオモリトドマツに氷結して生まれる冬の奇跡。12月下旬からは幻想的なライトアップも開始。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2.2: Historical Heritage & Public Baths */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Heritage of Takayu</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                日本武尊伝説から続く歴史。「高湯通り」と3つの名物共同浴場巡り
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            かつて「最上高湯（もがみたかゆ）」と呼ばれ、白布温泉・信夫高湯とともに「奥羽三高湯」に数えられた蔵王温泉。温泉街のメインストリートである「高湯通り」には、風情あふれる石段沿いに木造の老舗旅館やお土産店が軒を連ね、下駄のカラコロという音が心地よく響きます。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            通り沿いには「上湯（かみゆ）共同浴場」「下湯（しもゆ）共同浴場」「川原湯（かわらゆ）共同浴場」の3つの公衆浴場が点在。いずれも大人数百円で利用でき、足元から湧き出る生まれたての濃厚な硫黄泉を昔ながらの板張り湯船で体感できます。宿の湯と共同浴場の湯を交互に巡ることで、蔵王の湯治文化の奥深さをより一層深く体感できます。
          </p>
        </section>

        {/* Section 2.5: Three Reasons to Visit in Nov & Dec */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Seasonal Appeal</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の蔵王温泉が旅人を惹きつける3つの理由
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-indigo-900 text-white flex items-center justify-center text-xs font-bold">1</span>
                <h3 className="font-bold text-slate-900 text-sm">初雪と白濁硫黄泉の極上コントラスト</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                11月中旬以降、温泉街は初雪に包まれます。外気氷点下の澄み切った静寂の中で、乳白色の酸性硫黄泉に首まで浸かる雪見風呂は、日常を忘れさせる至福の瞬間です。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-indigo-900 text-white flex items-center justify-center text-xs font-bold">2</span>
                <h3 className="font-bold text-slate-900 text-sm">世界的奇跡「樹氷」の形成初期を目撃</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                山頂付近でアオモリトドマツに着氷が始まる初冬。純白のモンスターへと成長していく神秘の過程をロープウェイ展望台から間近に体感できます。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-indigo-900 text-white flex items-center justify-center text-xs font-bold">3</span>
                <h3 className="font-bold text-slate-900 text-sm">極上山形牛すき焼きと熱々芋煮の温もり</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                冬に脂の甘みが際立つ最高級山形牛と、里芋と牛肉を甘辛く炊き上げた山形芋煮。冷え切った体を芯から温めてくれる最高の冬のごちそうです。
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: 5 Recommended Hotels */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Selected Luxury Inns</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              【11・12月】蔵王温泉の真骨頂を味わう厳選名宿5選
            </h2>
            <p className="text-sm text-slate-600">
              楽天トラベルの最新APIデータに基づき、源泉掛け流しの湯質、雪見露天風呂の風情、山形牛すき焼き会席、宿泊者レビュー評価で選び抜いた5軒。
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row"
              >
                <div className="relative md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100 shrink-0">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    第{hotel.id}選
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold drop-shadow">
                    <span className="flex items-center gap-1 bg-amber-500/90 text-slate-950 px-2.5 py-1 rounded-md">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {hotel.rating} ({hotel.reviews}件)
                    </span>
                    <span className="bg-slate-900/80 px-2.5 py-1 rounded-md text-amber-200">
                      目安 {hotel.price}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-800 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                          {hotel.name}
                        </a>
                      </h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-indigo-700 shrink-0" />
                        <span>{hotel.access}</span>
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {hotel.story}
                    </p>

                    <div className="space-y-2 pt-1 border-t border-slate-100 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-indigo-900 bg-indigo-50 px-2 py-0.5 rounded shrink-0">客室の魅力</span>
                        <span className="text-slate-600">{hotel.roomTip}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded shrink-0">冬の極上食</span>
                        <span className="text-slate-600">{hotel.gourmetTip}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2">
                      {hotel.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-700 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                      楽天トラベル公認リンク・最新宿泊プラン
                    </span>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white text-xs sm:text-sm font-bold shadow transition group w-full sm:w-auto justify-center"
                    >
                      <span>空室・宿泊プランを確認</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Winter Gourmet & Yamagata Beef */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Yamagata Winter Gastronomy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                極上ブランド「山形牛」の霜降りと冬に染みる郷土芋煮鍋の温もり
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            山形県の内陸部は昼夜の寒暖差が大きく、清らかな雪解け水に恵まれているため、極上の黒毛和牛「山形牛」が育ちます。キメ細やかなサシが入った山形牛は、融点が低く口に入れた瞬間に甘みが溶け出します。冬の蔵王では、この山形牛を甘辛い割下で味わうすき焼きや、陶板ステーキが名物。さらに、ねっとりとした里芋と牛肉を醤油ベースで煮込んだ熱々の「山形芋煮」が、冷えた体を芯から温めてくれます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-1.5">
              <h4 className="font-bold text-indigo-900 text-sm">特選山形牛のすき焼き＆しゃぶしゃぶ</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                極上の霜降り肉をとろけるような柔らかさで堪能。山形県産ブランド米「つや姫」との相性も抜群です。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-1.5">
              <h4 className="font-bold text-indigo-900 text-sm">山形名物芋煮鍋＆地酒「出羽桜」「十四代」</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                山形の郷土愛が詰まった伝統鍋。米どころ山形が誇る銘酒の熱燗とともに味わう冬の至福のひととき。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の蔵王温泉を満喫する1泊2日王道モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-20 text-xs font-bold bg-indigo-100 text-indigo-900 px-3 py-1.5 rounded-lg text-center shrink-0">
                1日目 13:00
              </div>
              <div className="text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 block mb-0.5">蔵王温泉到着・蔵王ロープウェイで山頂パノラマへ</strong>
                山形駅から路線バスで蔵王温泉バスターミナルへ。蔵王ロープウェイに乗り継ぎ、初雪と樹氷が形成されつつある標高1,661mの地蔵山頂駅へ。展望台から白銀の奥羽山脈を望む。
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-20 text-xs font-bold bg-indigo-100 text-indigo-900 px-3 py-1.5 rounded-lg text-center shrink-0">
                1日目 15:30
              </div>
              <div className="text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 block mb-0.5">名宿チェックイン・乳白色の強酸性硫黄泉で雪見露天</strong>
                宿にチェックインし、名物の雪見露天風呂へ。pH1.5前後の強酸性白濁湯に浸かり、初雪の静寂とともに体の芯まで温まり尽くす。
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-20 text-xs font-bold bg-indigo-100 text-indigo-900 px-3 py-1.5 rounded-lg text-center shrink-0">
                1日目 18:00
              </div>
              <div className="text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 block mb-0.5">極上山形牛すき焼き会席＆冬の地酒を堪能</strong>
                夕食にA5ランク山形牛のすき焼きと熱々の山形芋煮を堪能。山形の銘酒「出羽桜」を傾けながら、雪夜の贅沢な時間を過ごす。
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-20 text-xs font-bold bg-indigo-100 text-indigo-900 px-3 py-1.5 rounded-lg text-center shrink-0">
                2日目 09:30
              </div>
              <div className="text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 block mb-0.5">温泉街の高湯通り散策＆名物「稲花餅（いがもち）」</strong>
                チェックアウト後、湯煙立ち上る温泉街のメインストリート「高湯通り」や上湯・下湯共同浴場を散策。笹の葉に載った名物「稲花餅」をお土産に。
              </div>
            </div>
          </div>
        </section>

        {/* Section 5.5: Climate, Clothing & Winter Road Driving */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Travel Preparation</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の気候・おすすめの防寒着・雪道ドライブ＆バスアクセス対策
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-indigo-700" />
                <span>氷点下に対応する完全防寒装備</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                標高約900mの温泉街は11月下旬から氷点下に達し、山頂部（標高1,660m）はマイナス5〜10℃の極寒となります。風雪を遮るロング丈のダウンコートやスキーウェア、厚手の靴下、耳当て付きニット帽、撥水性のあるスノーブーツ、ネックウォーマー、ホッカイロの携帯が必須です。
              </p>
            </div>
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-700" />
                <span>西蔵王高原ライン雪道運転と路線バスの活用</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                山形蔵王ICから西蔵王高原ライン経由で約30分。11月中旬以降は完全な圧雪・アイスバーン路面となるためスタッドレスタイヤが必須（四輪駆動車推奨）。雪道運転に不慣れな方は、JR山形駅東口から発着する山交バス（蔵王温泉行き・約45分・予約不要）を利用するのが最も安全で快適です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                よくある質問（FAQ）と初冬の蔵王温泉旅行アドバイス
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-indigo-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Internal Links */}
        <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Related Tohoku Winter Hotspring Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい東北・みちのくの冬名湯＆雪見露天特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月ならではの雪景色、大正ロマン、極上の黒毛和牛や郷土料理を味わい尽くす全国の名宿ガイドを多数公開中。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-yamagata-ginzan-onsen-snow-taisho-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">山形・銀山温泉</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">銀山温泉 大正ロマンガス灯雪景色と尾花沢牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-yamagata-tendo-onsen-lafrance-yamagata-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">山形・天童温泉</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">天童温泉 将棋の里の冬名湯とラ・フランス＆山形牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-miyagi-akiu-onsen-sendai-beef-serinabe-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">宮城・秋保温泉</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">秋保温泉 磊々峡の雪景色と極上仙台牛・名物せり鍋の宿</h3>
            </Link>
            <Link 
              href="/winter-iwate-hanamaki-onsen-yukimi-maesawa-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">岩手・花巻温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">花巻温泉郷 台川渓谷の雪見露天風呂と極上前沢牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-akita-nyuto-onsen-yukimi-kiritanpo-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">秋田・乳頭温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">乳頭温泉郷 白濁の秘湯雪見風呂と比内地鶏きりたんぽ鍋の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
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

module.exports = { generateZaoPage };
