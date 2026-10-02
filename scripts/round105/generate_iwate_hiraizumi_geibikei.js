const fs = require('fs');
const path = require('path');

function generateIwateHiraizumiGeibikeiPage(hotels) {
  const slug = 'winter-iwate-hiraizumi-chusonji-geibikei-maesawagyu-stay';
  const title = '【11・12・1月岩手】世界遺産・平泉中尊寺金色堂の白銀月見坂＆日本百景・猊鼻渓「雪見こたつ舟」と極上前沢牛を味わう名宿5選';
  const description = '11月下旬から1月、岩手県南部の平泉と一関は、静寂と白銀の神秘に包まれます。奥州藤原氏が築いた世界遺産「中尊寺」では、老杉の並木道「月見坂」に雪が降り積もり、国宝「金色堂」が黄金の神々しさを一層際立たせます。日本百景の名勝「猊鼻渓（げいびけい）」では、12月から冬の名物「雪見こたつ舟」が運航。切り立つ百尺の断崖絶壁に舞い散る雪を眺めながら、ぽかぽかのこたつで味わう熱々の木流し鍋と船頭の「猊鼻追分」。厳冬の美味「前沢牛」のすき焼きや天然温泉に癒やされる厳選名宿5選を徹底解説します。';

  const hotelDetails = [
    {
      story: '中尊寺から奥へ約6km、昔ながらの懐かしい里山にぽつんと佇む一軒宿「奥州平泉温泉 そば庵 しづか亭」。平泉エリアで唯一となる天然温泉の源泉かけ流しを誇り、とろりとした肌あたりの美肌湯が冬の雪見露天風呂で冷えた身体を芯から温めてくれます。宿の自家菜園で採れる無農薬野菜や地元の山菜、そして手打ち十割そばが名物。冬の夕食には、岩手を代表する最高峰ブランド「前沢牛」を贅沢に使用したすき焼きや陶板焼きが並び、田舎の温かなもてなしとともに静謐な平泉の夜をゆったりと過ごせます。',
      roomTip: '里山の自然を望む落ち着いた和室。窓外に広がる白銀の雪景色を眺めながら、静けさの中で日常を忘れるプライベートタイム。',
      gourmetTip: '「極上前沢牛すき焼き＆手打ち十割そば会席」。きめ細やかな霜降り前沢牛をとろける卵と特製割り下で味わい、締めの手打ち蕎麦で満足の極み。'
    },
    {
      story: '一ノ関駅から車で約15分、平泉観光の拠点としても好立地な丘陵地に建つ源泉かけ流しの名宿「山桜 桃の湯」。館内はアジアンテイストと和の美が調和した上質なリゾート空間で、多彩な湯舟が自慢です。冬の澄んだ空気の中で楽しむ露天風呂は、保温効果の高い弱アルカリ性温泉で湯冷めしにくいと大好評。夕食には地元岩手の旬の素材を活かした創作和食が振る舞われ、前沢牛やいわて牛のステーキ、出来立ての天ぷらなど、一品一品丁寧に仕上げられた冬の美食を味わえます。',
      roomTip: 'バルコニー付き和洋室。開放感あふれるモダンな空間から一関の冬景色を一望でき、ベッドの快適性と和の寛ぎを同時に満喫。',
      gourmetTip: '「岩手恵みの創作会席・前沢牛ステーキ付き」。柔らかな肉質と芳醇な脂の甘みが広がる前沢牛鉄板焼きと、冬の三陸海鮮の饗宴。'
    },
    {
      story: '一関市街の国道4号沿いに位置し、イタリア調の上品な調度品とクラシカルな気品が漂う「ベリーノ ホテル一関」。米国シモンズ社製ベッドを全室に配した客室は広々としており、旅の疲れを極上の眠りで癒やしてくれます。館内レストランでは、地元一関・平泉の誇るブランド豚「白金豚（プラチナポーク）」や最高級「前沢牛」をメインとした本格ディナーを提供。和食・洋食それぞれのシェフが腕を振るう冬のコース料理は、舌の肥えた旅人からも絶賛されています。猊鼻渓や平泉へのアクセスも抜群です。',
      roomTip: 'エグゼクティブツインルーム。ヨーロッパ調のインテリアとゆとりあるリビングスペースで、冬の記念日旅や大人の夫婦旅に最適。',
      gourmetTip: '「前沢牛＆白金豚の贅沢ディナーコース」。きめ細やかな前沢牛のローストとジューシーな白金豚のソテー、地元野菜の温製オードブル。'
    },
    {
      story: '国の名勝・天然記念物「厳美渓（げんびけい）」まで車ですぐ、磐井川の渓谷美を間近に望む高台に建つ「亀の井ホテル 一関」。エリア最大級を誇る天然温泉の大浴場と開放的な雪見露天風呂が魅力で、冷えた身体を広々とした湯舟で手足を伸ばして癒やせます。名物の無料夜食「担々麺」など宿泊者向けサービスも充実。夕食は岩手の冬の味覚を詰め込んだ会席料理で、霜降り前沢牛のすき焼きや釜飯、三陸の海の幸をふんだんに取り揃えた贅沢な膳が冬の夜を彩ります。',
      roomTip: '渓谷ビュー和室。窓一面に広がる厳美渓の雪景色を眺めながら、畳の温もりに包まれて寛げる静かな客室。',
      gourmetTip: '「厳選前沢牛会席プラン」。美しいサシが入った前沢牛の小鍋すき焼きと、冬の味覚を凝縮した熱々釜飯、地元の銘酒とのマリアージュ。'
    },
    {
      story: '世界遺産・中尊寺の表参道まで徒歩約10分、平泉観光の中心に位置する歴史ある温泉宿「平泉ホテル武蔵坊」。中尊寺や毛越寺の早朝参拝にも最適な立地です。地下から湧き出る天然温泉は、平安の昔から旅人の疲れを癒やしてきたと伝わる名湯で、冬の雪見風呂は格別の風情。夕食には岩手の伝統的な郷土料理が並び、前沢牛の陶板焼きをはじめ、一関地方名物の「もち料理（多彩なお椀仕立て）」など、奥州藤原氏の歴史と文化を感じさせる奥深い味わいを堪能できます。',
      roomTip: '純和風客室。静まり返る平泉の街並みと冬の山々を眺めながら、歴史のロマンに思いを馳せる落ち着いた滞在が叶います。',
      gourmetTip: '「前沢牛陶板焼きと平泉郷土もち御膳」。ジューシーな前沢牛の香ばしい陶板焼きと、くるみ・ずんだ・あんこ等の伝統もち料理の食べ比べ。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥9,702〜' : i === 1 ? '¥7,865〜' : i === 2 ? '¥8,140〜' : i === 3 ? '¥6,720〜' : '¥8,800〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.21' : i === 1 ? '4.43' : i === 2 ? '4.27' : i === 3 ? '4.27' : '4.00');
    const reviewCount = h.reviewCount || (i === 0 ? 443 : i === 1 ? 426 : i === 2 ? 702 : i === 3 ? 891 : 382);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || '東北新幹線一ノ関駅より車・バスで約15〜20分。JR平泉駅より無料送迎または徒歩')},
              special: ${JSON.stringify(h.hotelSpecial || '世界遺産平泉中尊寺冬参拝＆猊鼻渓雪見こたつ舟・前沢牛を味わう名宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '平泉唯一の源泉かけ流し天然温泉・懐かしい里山に佇む一軒宿の雪見露天風呂' : i === 1 ? 'アジアン調モダンリゾート空間・湯冷めしにくい良質な美肌温泉と岩手恵み創作料理' : i === 2 ? 'イタリア調の格調高いラグジュアリーホテル・シモンズ社製ベッド完備の上質ステイ' : i === 3 ? '厳美渓近くの高台に佇む温泉ホテル・エリア最大級の大浴場と無料夜食サービス' : '中尊寺まで徒歩約10分の好立地・平安の歴史薫る天然温泉と伝統もち料理会席')},
                ${JSON.stringify(i === 0 ? '極上前沢牛すき焼きと自家菜園野菜・毎朝打つ十割手打ち蕎麦の絶品会席' : i === 1 ? '前沢牛鉄板焼きステーキと旬魚の饗宴・出来立て天ぷらと季節の手作り料理' : i === 2 ? '前沢牛ローストとブランド豚白金豚ディナー・和洋専任シェフによる極上コース' : i === 3 ? '霜降り前沢牛のすき焼き小鍋と熱々釜飯・三陸海の幸と地酒のペアリング' : '香ばしい前沢牛陶板焼きと一関伝統もち御膳・奥州藤原氏の食文化を体感')},
                ${JSON.stringify(i === 0 ? '静寂に包まれる里山和室・平泉駅無料送迎ありで冬の鉄道一人旅や夫婦旅に最適' : i === 1 ? '開放感あふれるバルコニー付き客室・カップルや女性旅にも大人気の癒やし空間' : i === 2 ? '無料大駐車場完備・広々とした客室設計で冬のドライブやビジネス兼観光に便利' : i === 3 ? '無料「ねまらいラウンジ」完備・ドリンクやお菓子とともに寛げる充実設備' : '中尊寺・毛越寺の早朝雪道参拝に最高の拠点・先着順無料大駐車場完備')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "冬（11月〜1月）の平泉・中尊寺金色堂の積雪や拝観時の服装・靴の注意点は？",
      a: "平泉地方は11月下旬から冷え込みが厳しくなり、12月中旬から1月にかけて本格的な積雪期に入ります。中尊寺の表参道である「月見坂」は樹齢300〜400年の老杉に囲まれた坂道で、雪が踏み固められると滑りやすくなります。防寒ダウンコートや手袋・マフラーに加え、靴底にしっかりとした滑り止めがついたスノーブーツや防寒トレッキングシューズが必須です。金色堂の覆堂内は空調が効いていますが、讃衡蔵や境内散策時は足元から冷えるため厚手の靴下やカイロを持参しましょう。"
    },
    {
      q: "猊鼻渓の「雪見こたつ舟」の運航期間・料金と予約の要否は？",
      a: "猊鼻渓の名物「雪見こたつ舟」は、例年12月1日から翌年2月末日まで運航されます。舟の中に豆炭こたつがセットされ、木流し鍋（要予約の熱々鍋）を味わいながら往復約90分の渓谷舟下りを楽しめます。乗船料金は大人2,000円前後（鍋付きプランは別途料金）。定期便は予約なしでも当日乗船可能ですが、こたつ舟で木流し鍋を食べるコースや団体利用は事前予約が必要です。雪の降る日は水墨画のような絶景となり、船頭が唄う「猊鼻追分」の美声が峡谷に響き渡ります。"
    },
    {
      q: "岩手の最高峰ブランド牛「前沢牛」の特徴と、おすすめの食べ方は？",
      a: "前沢牛（まえさわぎゅう）は、岩手県奥州市前沢地域で丹精込めて肥育される黒毛和牛で、全国肉用牛枝肉共励会などで何度も名誉賞（日本一）に輝いた最高峰ブランドです。鮮やかな霜降りと融点が低くとろけるような脂の甘み、赤身の芳醇なコクが特徴。冬には特製の割り下で煮込む「すき焼き」や、さっぱりと肉本来の旨みを味わう「しゃぶしゃぶ」、表面を香ばしく焼き上げる「ステーキ」「陶板焼き」で味わうのが極上の贅沢です。"
    },
    {
      q: "東京や仙台から平泉・一関へのアクセス方法は？冬道運転の注意点は？",
      a: "鉄道利用の場合、東北新幹線で東京駅から一ノ関駅まで「はやぶさ」で約1時間50分〜2時間、仙台駅からは約30分と非常にスピーディです。一ノ関駅からはJR東北本線で平泉駅まで約8分、猊鼻渓へは大船渡線で猊鼻渓駅まで約30分でアクセスできます。車の場合は東北自動車道・一関ICまたは平泉前沢ICを利用しますが、12月〜1月は路面凍結や積雪があるため、スタッドレスタイヤの装着が絶対に不可欠です。"
    },
    {
      q: "平泉・一関周辺で冬に立ち寄りたい名所やご当地グルメは？",
      a: "世界遺産「毛越寺（もうつうじ）」の大泉が池に映る雪景色は浄土庭園の極致。また、「厳美渓」では冬も渓谷をワイヤーロープの籠で行き来する「空飛ぶだんご（郭公だんご）」の風情（冬季休業期間あり、営業要確認）や、一関地方の伝統「果報もち（多彩な餡で楽しむ一口もち料理）」、平泉の「わんこそば・手打ち十割そば」が定番のご当地グルメです。"
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
  keywords: '平泉 中尊寺 金色堂 冬, 猊鼻渓 こたつ舟 雪見, 前沢牛 すき焼き 宿, 平泉 温泉 ホテル, しづか亭, 山桜 桃の湯, ベリーノホテル一関, 亀の井ホテル 一関, 平泉ホテル武蔵坊, 11月 12月 1月 岩手 旅行',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}'
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    type: 'article',
    images: [{ url: 'https://img.travel.rakuten.co.jp/share/HOTEL/54928/54928.jpg', width: 1200, height: 630, alt: '平泉中尊寺と猊鼻渓こたつ舟・前沢牛名宿' }]
  }
};

export default function IwateHiraizumiGeibikeiPage() {
  const hotelsData = [
${hotelCardsCode}
  ];

  const faqListItems = ${JSON.stringify(faqList, null, 2)};

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    name: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://croud-travel.com/' },
        { '@type': 'ListItem', position: 2, name: '冬の特集一覧', item: 'https://croud-travel.com/features/' },
        { '@type': 'ListItem', position: 3, name: '平泉中尊寺＆猊鼻渓こたつ舟・前沢牛ステイ', item: 'https://croud-travel.com/${slug}' }
      ]
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: hotelsData.map((h, idx) => ({
        '@type': 'Hotel',
        position: idx + 1,
        name: h.name,
        image: h.img,
        priceRange: h.price,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: h.rating,
          reviewCount: h.reviews
        },
        address: {
          '@type': 'PostalAddress',
          addressRegion: '岩手県',
          addressLocality: '西磐井郡平泉町・一関市'
        }
      }))
    }
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqListItems.map((item: { q: string; a: string }) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  };

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-100 selection:text-amber-900 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-white overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
            <Snowflake className="w-4 h-4 text-amber-300" />
            11月・12月・1月 世界遺産雪景色＆雪見こたつ舟特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-snug text-stone-100 font-serif">
            白銀の月見坂に輝く金色堂と水墨画の峡谷美<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-200">
              世界遺産・平泉中尊寺雪景色＆猊鼻渓「雪見こたつ舟」と極上前沢牛の名宿
            </span>
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-light">
            奥州藤原氏が理想とした極楽浄土の都・平泉。老杉に白雪が降り積もる静寂の「月見坂」と、黄金の輝きを放つ国宝「金色堂」。日本百景・猊鼻渓の百尺断崖に舞う雪を、温かなこたつと名物「木流し鍋」で愛でる冬限定の舟下り。そして冷えた身体を温める名湯と、最高峰ブランド「前沢牛」の極上すき焼きに満たされる至高の冬旅をご案内します。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Calendar className="w-4 h-4 text-amber-400" /> 旬の時期：11月下旬〜1月（厳冬期）
            </span>
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Utensils className="w-4 h-4 text-amber-400" /> 極上前沢牛・手打ち蕎麦・木流し鍋
            </span>
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Flame className="w-4 h-4 text-amber-400" /> 平泉温泉・雪見露天風呂
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Feature Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              冬の平泉・猊鼻渓が魅せる「白銀の極楽浄土」と温もりの旅路
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              みちのくの冬空の下、歴史遺産と大自然の峡谷美が最も神聖に澄み渡る季節
            </p>
          </div>

          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              平安時代末期、奥州藤原氏三代が戦乱のない平和郷を願って築き上げた世界遺産「平泉」。11月下旬を過ぎると木々は葉を落とし、やがてしんしんと白雪が舞い降ります。中尊寺の表参道「月見坂」は樹齢300年を超える老杉が白銀の雪帽子をかぶり、凛とした冷気と静寂に包まれます。その奥に佇む国宝「金色堂」は、内外を純金箔で覆い尽くし夜光貝の螺鈿細工や象牙で飾られた仏教美術の最高峰。雪景色の参道を歩いた後に目にする黄金の堂宇は、息を呑むほど神々しく、訪れる者の心を深い感動で満たします。毛越寺の浄土庭園も、大泉が池に薄氷が張り白雪が積もる冬こそが、最も「静寂の浄土」の真髄を伝えてくれます。
            </p>
            <p>
              平泉から車で約30分の景勝地「猊鼻渓（げいびけい）」では、12月1日から冬の風物詩「雪見こたつ舟」がスタートします。高さ100メートルを超える石灰岩の断崖絶壁が約2キロにわたって続く砂鉄川を、船頭が竿一本で巧みに操る舟で往復90分。舟の中には温かな豆炭こたつが設えられ、ぽかぽかと温まりながら水墨画さながらの白銀の渓谷美を愛でることができます。希望者は熱々の地元名物「木流し鍋（鴨肉や根菜の味噌仕立て）」を味わうことができ、峡谷の奥で船頭が唄い上げる民謡「猊鼻追分」の朗々たる美声が雪の岩肌に反響する瞬間は、生涯忘れられない冬の記憶となるでしょう。
            </p>
            <p>
              散策の後は、みちのくが誇る最高峰のブランド牛「前沢牛」の贅沢な夕食が待っています。良質な稲わらと清らかな水で肥育された前沢牛は、きめ細やかなサシが特徴で、箸で切れるほどの柔らかさと上品な甘みが際立ちます。熱々のすき焼きや陶板焼きでとろけるような肉質を堪能し、平泉唯一の源泉かけ流し温泉や渓谷を望む露天風呂で雪見風呂を満喫する。歴史、絶景、美食、名湯のすべてが調和した、冬の東北旅の最高峰が平泉・一関にあります。
            </p>
          </div>

          {/* Highlights 3-column Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-stone-900 text-base">世界遺産・中尊寺金色堂の雪景色</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                老杉が立ち並ぶ白銀の月見坂と、黄金色に輝く国宝金色堂。平安仏教文化の極楽浄土が静寂の中で甦る冬参拝。
              </p>
            </div>

            <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-stone-900 text-base">猊鼻渓の風物詩「雪見こたつ舟」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                百尺の断崖絶壁が水墨画に変わる冬。ぽかぽかのこたつで味わう木流し鍋と、渓谷に響き渡る船頭の「猊鼻追分」。
              </p>
            </div>

            <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-stone-900 text-base">最高峰ブランド前沢牛＆天然温泉</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                日本一の栄誉に輝く極上前沢牛のとろけるすき焼き。源泉かけ流しの雪見露天風呂で冷えた身体を芯から癒やす極上宿。
              </p>
            </div>
          </div>
        </section>

        {/* Local Gastronomy & Culture Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Gastronomy & Culture</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              奥州藤原氏の栄華が息づく黄金文化と、みちのく最高峰「前沢牛」の神髄
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-amber-700" />
                奥州藤原氏三代の祈りと毛越寺浄土庭園の冬美
              </h3>
              <p>
                奥州藤原氏初代・清衡公が建立した中尊寺金色堂は、極楽浄土の阿弥陀堂を地上に具現化した世界的な仏教建築の至宝です。雪が降り積もる冬、月見坂の老杉に囲まれた境内は厳かな神気に包まれます。二代・基衡公が造営した毛越寺（もうつうじ）の浄土庭園は、大泉が池を中心とする平安時代の作庭様式を完全に遺す貴重な遺構。池に薄氷が張り、州浜や出島に白雪が積もる冬景色は、仏教の無常観と永遠の美を静かに物語っています。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-700" />
                全国品評会日本一を誇る「前沢牛」と一関伝統もち文化
              </h3>
              <p>
                岩手県奥州市前沢地区で育てられる「前沢牛」は、澄んだ空気ときれいな水、良質な稲わらを食べて育つ日本最高峰の黒毛和牛です。鮮やかな霜降りと融点の低い甘い脂は、口に入れた瞬間にとろける極上の舌触り。冬のすき焼きや陶板焼きステーキでその真価を発揮します。また、一関・平泉地方は江戸時代から続く「もち食文化」の先進地で、くるみ、ずんだ、小豆、じゅうね（えごま）など多彩な味付けで楽しむ「果報もち御膳」も冬の身体を優しく温めてくれます。
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Timeline Model Course Section */}
        <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-stone-800 pb-4">
            <span className="text-amber-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">
              【1泊2日】世界遺産中尊寺金色堂と猊鼻渓こたつ舟・前沢牛を巡る黄金モデルコース
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm mt-1">
              東京から新幹線はやぶさで直通約2時間。冬のみちのくの歴史と絶景を満喫する旅路。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 1 午前〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  10:45 東北新幹線一ノ関駅到着 ➔ 平泉へ移動＆手打ち十割蕎麦ランチ
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  東京駅または仙台駅から新幹線で一ノ関駅へ到着。JR東北本線またはレンタカーで平泉へ向かいます。平泉駅前の老舗蕎麦店で名物の手打ち十割そばや熱々の天ぷらを味わった後、世界遺産「中尊寺」の表参道「月見坂」へ。白銀の雪をかぶった樹齢数百年の老杉並木を歩き、澄み切った大気の中で心を整えます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 1 午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  13:30 国宝「金色堂」拝観＆毛越寺浄土庭園雪景色 ➔ 温泉宿へチェックイン
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  讃衡蔵で奥州藤原氏の仏教美術の至宝を鑑賞した後、国宝「金色堂」へ。純金箔と夜光貝の螺鈿で飾られた堂宇の神々しい輝きに対面します。続いて毛越寺へ移動し、大泉が池に薄氷が張る静寂の浄土庭園を散策。夕方に平泉・一関の温泉宿へチェックインし、源泉かけ流しの雪見露天風呂で冷えた身体を芯から温めます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 1 夕刻〜夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  18:30 最高峰ブランド「前沢牛すき焼き」と三陸海の幸・地酒に酔いしれる夜
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  夕食は岩手の誇る最高峰「前沢牛」をメインとした豪華会席。きめ細やかなサシが入った極上肉をすき焼き小鍋や陶板焼きで堪能。地元の地酒「世嬉の一」や「磐乃井」の純米酒とともに、静寂に包まれる平泉の冬宵をゆったりと過ごします。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  09:30 日本百景「猊鼻渓」へ ➔ 名物「雪見こたつ舟」と熱々木流し鍋
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  朝風呂を満喫し岩手県産米コシヒカリの朝食を味わった後、車で日本百景「猊鼻渓」へ移動。名物「雪見こたつ舟」に乗船し、ぽかぽかの豆炭こたつに入りながら水墨画のような百尺断崖の雪景色を愛でます。熱々の木流し鍋を味わい、船頭の美声「猊鼻追分」を聴いた後、一ノ関駅から新幹線で帰路へつきます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotels Section */}
        <section className="space-y-8">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              平泉・一関の冬旅を彩る厳選名宿5選
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              世界遺産参拝と猊鼻渓へのアクセス、極上前沢牛と天然温泉が自慢の宿
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Hotel Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-stone-100 pb-5">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs font-bold">
                          {hotel.id}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                          厳選名宿
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
                        {hotel.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-500 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                        {hotel.access}
                      </p>
                    </div>

                    <div className="text-right sm:shrink-0 bg-amber-50/50 p-3 sm:p-4 rounded-2xl border border-amber-100">
                      <div className="flex items-center sm:justify-end gap-1 text-amber-600 font-bold text-sm sm:text-base">
                        <Star className="w-4 h-4 fill-current text-amber-500" />
                        <span>{hotel.rating}</span>
                        <span className="text-stone-400 text-xs font-normal">（{hotel.reviews}件）</span>
                      </div>
                      <div className="text-xs text-stone-500 mt-1">宿泊目安（1名/税込）</div>
                      <div className="text-lg sm:text-xl font-black text-amber-700">{hotel.price}</div>
                    </div>
                  </div>

                  {/* Hotel Story Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={hotel.img} 
                        alt={hotel.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                        {hotel.story}
                      </p>

                      <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200/60 space-y-2 text-xs sm:text-sm">
                        <div className="flex items-start gap-2">
                          <Building className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <div><strong className="text-stone-900">客室の魅力：</strong><span className="text-stone-600">{hotel.roomTip}</span></div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Utensils className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <div><strong className="text-stone-900">冬の極上美食：</strong><span className="text-stone-600">{hotel.gourmetTip}</span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="bg-stone-50/70 rounded-2xl p-4 sm:p-5 border border-stone-200/60">
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">おすすめのポイント</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-stone-700">
                      {hotel.highlights.map((item: string, hIdx: number) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="pt-2 text-center sm:text-right">
                    <a 
                      href={hotel.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-amber-600/20 hover:shadow-lg transition-all w-full sm:w-auto"
                    >
                      <span>楽天トラベルでプランと空室を見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Winter Travel Tips */}
        <section className="bg-amber-50/60 rounded-3xl p-6 sm:p-10 border border-amber-200/80 space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-800 font-bold text-xs uppercase tracking-wider block">Winter Travel Advice</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              冬の平泉・一関旅行で注意したい気候・靴・交通アクセス
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-stone-700">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-amber-700" />
                月見坂の凍結対策と防寒具
              </div>
              <p className="leading-relaxed">
                中尊寺の月見坂は斜度があり、雪が踏み固められるとアイスバーンになります。滑り止めの効いたスノーブーツや防水トレッキングシューズでお出かけください。手袋とニット帽も必須です。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Waves className="w-4 h-4 text-amber-700" />
                猊鼻渓こたつ舟の防寒と運航確認
              </div>
              <p className="leading-relaxed">
                舟内はこたつで足元は温かいですが、上半身は渓谷の風を受けるためダウンジャケットの着用が推奨されます。強風や大雪による増水時は運航見合わせとなる場合があるため、当日の運行確認が安心です。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-amber-700" />
                新幹線利用とレンタカー・送迎の活用
              </div>
              <p className="leading-relaxed">
                東京から一ノ関駅まで新幹線で直通約2時間。駅前からのレンタカー利用時はスタッドレスタイヤ必須です。雪道運転に不安がある方は、平泉駅からの宿の無料送迎や路線バス、観光タクシーの利用が便利です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-700 font-bold text-xs uppercase tracking-wider block">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              平泉中尊寺・猊鼻渓の冬旅行に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-amber-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
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
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              あわせて読みたい東北・東日本の冬景色＆初詣特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-iwate-hanamaki-minami-namari-osawa-snow-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">岩手・花巻温泉郷</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                鉛温泉・大沢温泉の秘湯雪見露天風呂と宮沢賢治ゆかりの宿
              </span>
            </Link>

            <Link 
              href="/winter-iwate-sanriku-kotatsu-train-kaisen-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">岩手・三陸鉄道</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                冬の名物こたつ列車と三陸極上海鮮丼・オーシャンビュー名宿
              </span>
            </Link>

            <Link 
              href="/winter-tochigi-nikko-toshogu-hatsumode-yuba-onsen-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">栃木・日光東照宮</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                世界遺産日光東照宮の冬参拝＆名物日光湯波会席・日光温泉名宿
              </span>
            </Link>

            <Link 
              href="/winter-miyagi-kesennuma-mekajiki-fuyu-onsen-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">宮城・気仙沼</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                冬の極上メカジキしゃぶしゃぶ＆フカヒレと気仙沼温泉名宿
              </span>
            </Link>

            <Link 
              href="/winter-yamagata-ginzan-onsen-snow-taisho-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">山形・銀山温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                大正ロマンのガス灯雪景色と木造多層建築のぬくもり名宿
              </span>
            </Link>

            <Link 
              href="/winter-fukushima-aizu-ouchijuku-snow-negi-soba-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">福島・会津大内宿</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                茅葺き宿場町の白銀雪景色と名物ねぎそば・芦ノ牧温泉名宿
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

module.exports = { generateIwateHiraizumiGeibikeiPage };
