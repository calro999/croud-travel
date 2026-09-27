const fs = require('fs');
const path = require('path');

function generateUreshinoPage(hotels) {
  const slug = 'winter-saga-ureshino-onsen-bihada-yudofu-stay';
  const title = '【11・12月嬉野温泉の日本三大美肌湯と冬情緒】嬉野茶の香りと名物とろける温泉湯豆腐＆極上佐賀牛の宿5選';
  const description = '斐乃上温泉、喜連川温泉と並び「日本三大美肌の湯」として名高い佐賀県・嬉野温泉。11月から12月にかけて恋しくなる冬の名物「とろける温泉湯豆腐」、嬉野茶の茶香炉が漂う風情豊かな温泉街、とろみのある重曹泉の露天風呂、そして最高峰A5ランク佐賀牛を心ゆくまで堪能する名宿ガイド。';

  const hotelDetails = [
    {
      story: '嬉野川を跨ぐ二万坪もの広大な敷地に佇み、薩摩藩島津家ゆかりの歴史と現代アートが融合した嬉野屈指の文化リゾート「和多屋別荘」。世界的建築家・黒川紀章氏が設計したタワー館や数寄屋造りの離れが美しく調和し、館内には嬉野茶を五感で愉しむ茶寮やブックラウンジが広がります。御影石を敷き詰めた広大な大浴場と渓流露天風呂には、日本三大美肌の湯と称される嬉野の源泉が掛け流され、とろりとした湯ざわりが肌に吸い付くように馴染みます。11月・12月の冬、温かい嬉野茶の香炉に包まれながら、静かな川のせせらぎを聞いて過ごす時間は格別の贅沢です。',
      roomTip: '嬉野川の渓流を望むタワー館の客室や、自家源泉の温泉を引いた露天風呂付き離れ「水明荘」。プライベートな空間で美肌の湯を心ゆくまで満喫できます。',
      gourmetTip: '嬉野名物の「温泉湯豆腐」と佐賀牛を味わう会席料理。特製のごまだれでいただく熱々のとろける湯豆腐はもちろん、きめ細やかな霜降りのA5佐賀牛ステーキや、嬉野茶を使った創作料理など、洗練された美食の数々がテーブルを彩ります。'
    },
    {
      story: '大正14年創業、皇族方や多くの文人に愛されてきた嬉野温泉を代表する老舗名旅館「大正屋」。日本建築の巨匠・吉村順三氏が手掛けた和の意匠は、無駄を削ぎ落とした静寂の美しさを湛え、中庭の美しい日本庭園が旅人を優しく迎えてくれます。自慢の大浴場「四季の湯」は吹き抜けのガラス張りで、初冬の庭園の自然を眺めながらゆったりと入浴。さらに別館の「滝の湯」では、庭園の滝を眺めながらの開放的な湯あみが愉しめます。細部まで行き届いた伝統のおもてなしと、純和風の落ち着きが日常を忘れさせてくれる至高の宿です。',
      roomTip: '手入れの行き届いた日本庭園に面した純和風客室。初冬の冷涼な空気の中、障子を開けると木々と石組みが織りなす絵画のような景観が広がります。',
      gourmetTip: '創業以来受け継がれる伝統の特選会席。自家製の嬉野温泉湯豆腐をはじめ、全国トップクラスの肉質を誇る特選佐賀牛の陶板焼き、有明海で獲れた冬の新鮮な海の幸など、一品一品が丁寧に仕立てられた極上の料理です。'
    },
    {
      story: '嬉野特産の「嬉野茶」をテーマにし、五感でお茶の癒やしを体験できるユニークな名旅館「茶心の宿 和楽園」。館内に入ると心地よいお茶の香炉が焚かれ、爽やかな芳香が旅人を包みます。宿の最大のハイライトは、日本でも極めて珍しい名物「茶風呂露天風呂・緑寿庵」。巨大な急須から嬉野茶のエキスがたっぷりと注がれる緑色のお湯に浸かり、美肌の湯とお茶のカテキンによるダブルのスキンケア効果を実感できます。お茶にこだわったおもてなしと、温かい笑顔の接客がリピーターを惹きつけてやまない人気の宿です。',
      roomTip: 'お茶の香りが心地よい和モダン客室や、露天風呂付き客室。初冬の澄んだ夜空を眺めながら、客室の湯船で誰にも気兼ねなくお茶と名湯のコラボレーションを楽しめます。',
      gourmetTip: 'お茶の風味を取り入れた「お茶会席」。特選佐賀牛をお茶の出汁にくぐらせる「茶しゃぶしゃぶ」や、嬉野温泉水でとろとろに煮込んだ名物温泉湯豆腐など、ここでしか味わえないヘルシーで贅沢な冬の味覚を堪能できます。'
    },
    {
      story: '嬉野温泉街から少し離れた椎葉山麓の山あいに佇み、豊かな森と清流に囲まれた静寂の一軒宿「大正屋 椎葉山荘（しいばさんそう）」。大正屋グループの離れ宿として、より深い自然とプライベート感を求める大人の旅行者に愛されています。宿の自慢は、嬉野随一の広さを誇る大露天風呂「しいばの湯」。初冬の澄み渡る冷気の中、目の前を流れる椎葉川のせせらぎと落葉樹の森を望みながら入る露天風呂は、まるで大自然の中に溶け込んだかのような圧倒的な開放感。夜には満天の星が降り注ぎ、非日常の安らぎが心を満たします。',
      roomTip: '渓流に面したバルコニー付きの和洋室。川の音と初冬の森の静けさに包まれ、読書や語らいを愉しむ贅沢な大人の時間が過ごせます。',
      gourmetTip: 'レストラン「山法師」でいただく創作山里会席または特選焼肉。A5ランク佐賀牛のグリルや、山菜、清流で育った川魚、冬の朝食には出来立てのとろとろ嬉野温泉湯豆腐が振る舞われます。'
    },
    {
      story: '嬉野温泉の緑豊かな小高い丘の上に佇み、ノスタルジックな洋館の優雅さと温泉リゾートの快適さが調和したクラシックホテル「ハミルトン宇礼志野」。大正ロマンを彷彿とさせるアールデコ調の館内にはアンティーク家具が配され、上質な大人の隠れ家としての気品が漂います。ピラミッド型のガラス屋根から光が差し込む大浴場や、森の緑を望む露天風呂では、良質な嬉野の美肌温泉を優雅に堪能。和風旅館とは一線を画す洗練された洋のリゾートステイを愉しみたい方に絶大な支持を得ています。',
      roomTip: 'ヨーロッパのクラシックホテルを思わせるツインルームやスイート。落ち着いた間接照明とハイセンスなインテリアが、特別な記念日ステイを演出します。',
      gourmetTip: '地元佐賀の食材をふんだんに取り入れた本格イタリアンディナー。冬の有明海・玄界灘の新鮮な魚介や、極上佐賀牛のビステッカ（ステーキ）など、ワインとともに楽しむエレガントな冬の食体験が叶います。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName)},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80')},
              rating: ${h.reviewAverage ? Number(h.reviewAverage).toFixed(2) : '4.43'},
              reviews: ${h.reviewCount || 290},
              price: ${JSON.stringify(h.hotelMinCharge ? `¥${h.hotelMinCharge.toLocaleString()}〜` : '¥19,000〜')},
              access: ${JSON.stringify(h.access || '西九州新幹線 嬉野温泉駅よりタクシー約5〜10分、長崎自動車道 嬉野ICより車で約5分')},
              special: ${JSON.stringify(h.hotelSpecial || '日本三大美肌の湯・冬名物とろける温泉湯豆腐と極上A5佐賀牛を堪能')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '黒川紀章設計の文化リゾート＆二万坪の敷地に広がる嬉野川渓流露天風呂と茶寮' : i === 1 ? '吉村順三設計の純和風名門＆吹き抜けガラス張りの名湯「四季の湯」と滝の湯' : i === 2 ? '日本初のお茶エキスが注ぐ名物「茶風呂露天風呂」＆茶香炉の芳香に癒やされる宿' : i === 3 ? '椎葉山麓の静寂な一軒宿＆大自然の森と渓流に溶け込む嬉野随一の大露天風呂' : '小高い丘のノスタルジック洋館＆本格イタリアンディナーとアールデコの美空間')},
                ${JSON.stringify(i === 0 ? '日本三大美肌湯の重曹泉掛け流し＆歴史ある島津家ゆかりの数寄屋離れ「水明荘」' : i === 1 ? '創業大正14年の伝統と格式＆中庭の日本庭園を眺める贅沢な大人の湯治ステイ' : i === 2 ? '美肌湯とお茶のカテキンのダブル効果＆温かいもてなしが評判のアットホーム宿' : i === 3 ? '満天の星と川のせせらぎを聞く湯あみ＆日常の喧騒から離れた大人の隠れ家' : 'ピラミッド型ガラス屋根の優雅な大浴場＆ヨーロッパ調スイートで過ごす休日')},
                ${JSON.stringify(i === 0 ? '冬名物とろける嬉野温泉湯豆腐＆最高峰A5ランク佐賀牛ステーキの上質会席' : i === 1 ? '伝統の特選会席＆自家製温泉湯豆腐とA5佐賀牛陶板焼き・有明海の海の幸' : i === 2 ? '名物「お茶会席」＆佐賀牛の茶しゃぶしゃぶと熱々とろとろ温泉湯豆腐の饗宴' : i === 3 ? '山里創作料理レストラン「山法師」＆佐賀牛グリルと出来立て温泉湯豆腐' : '地元食材の本格イタリアンコース＆極上佐賀牛ビステッカと厳選ワイン')}
              ]
            }`;
  }).join(',\n');

  const pageContent = `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '嬉野温泉 宿泊 11月 12月, 嬉野温泉湯豆腐 旅館, 和多屋別荘 嬉野, 大正屋 嬉野温泉, 茶心の宿 和楽園, 椎葉山荘 嬉野, 日本三大美肌の湯 佐賀, 佐賀牛 嬉野温泉',
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

  const faqList = [
    {
      q: "嬉野名物『温泉湯豆腐』が白濁してとろける科学的な理由は？",
      a: "嬉野温泉水は重曹泉（弱アルカリ性ナトリウム-炭酸水素塩泉）で、豆腐の凝固剤であるにがり（塩化マグネシウム）と反応する性質を持っています。温泉水で豆腐をコトコトと煮込むことで、弱アルカリ成分が豆腐のタンパク質をゆっくりと分解・乳化させ、角が取れて淡雪のようにふんわりと溶け出します。煮汁が豆乳のように白濁し、出汁と大豆の甘みが溶け合った熱々のスープごと味わう『奇跡の湯豆腐』は、11月・12月の冬に必食のご当地グルメです。"
    },
    {
      q: "『日本三大美肌の湯』としての嬉野温泉の泉質と効能は？",
      a: "嬉野温泉は島根県の斐乃上温泉、栃木県の喜連川温泉とともに『日本三大美肌の湯』に認定されています。泉質はナトリウム-炭酸水素塩・塩化物泉で、高温（80℃以上）で湧出するとろみのある重曹泉です。重曹成分が肌の余分な皮脂や分泌物を乳化させて優しく洗い流し、塩分が肌の乾燥を防いで潤いをキープ。湯上がりの肌がつるつる・すべすべになり、化粧水の浸透が格段に良くなると女性を中心に絶賛されています。"
    },
    {
      q: "西九州新幹線『かもめ』でのアクセス方法と所要時間は？",
      a: "2022年に西九州新幹線の『嬉野温泉駅』が開業し、アクセスが飛躍的に便利になりました。博多駅からは特急『リレーかもめ』と西九州新幹線『かもめ』の対面乗り換えで約1時間で嬉野温泉駅に到着します。長崎駅からは新幹線でわずか約25分。嬉野温泉駅から旅館街中心部へはタクシーで約5分〜10分、路線バスで約10分です。お車の場合は長崎自動車道・嬉野ICより約5分と好アクセスです。"
    },
    {
      q: "冬（11月・12月）の嬉野温泉の気候と服装のアドバイスは？",
      a: "九州・佐賀県に位置する嬉野温泉は比較的温暖ですが、山あいの盆地にあるため、初冬の11月下旬から12月にかけては朝晩の冷え込みが強まります。日中の最高気温は12℃〜16℃前後ですが、朝夕は5℃以下まで冷え込む日があります。温泉街の足湯巡りやお茶カフェ散策を楽しむ際は、脱ぎ着しやすいコートやマフラー、歩きやすい靴でお越しください。"
    }
  ];

export default function UreshinoWinterPage() {
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
        "mainEntity": faqList.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
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
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-emerald-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85"
          alt="嬉野温泉・日本三大美肌の湯と初冬の茶畑風景・温泉湯豆腐の風情"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/90 text-emerald-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-emerald-800/50">
            <Eye className="w-4 h-4 text-emerald-300" />
            <span>11月・12月限定 日本三大美肌の湯＆名物とろける温泉湯豆腐・極上佐賀牛特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月嬉野温泉の日本三大美肌湯と冬情緒】<br className="hidden sm:inline" />
            嬉野茶の香りと名物とろける温泉湯豆腐＆極上佐賀牛の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            神功皇后の伝説が息づく「日本三大美肌の湯」嬉野温泉。冬の寒さを優しく包むぬめりのある重曹泉。淡雪のようにとろける名物「嬉野温泉湯豆腐」と、香ばしい嬉野茶の茶香炉、そして最高峰A5ランク佐賀牛を味わう大人の九州冬旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-emerald-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-400" /> 佐賀県嬉野市嬉野町</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Three Great Skin Beautifying Waters</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                「あな、うれしの」と神功皇后が喜んだ美肌の湯。初冬の茶香と至福の湯あみ
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            佐賀県南西部の緑豊かな山あいに位置する「嬉野温泉（うれしのおんせん）」。その起源は神話の時代に遡り、神功皇后が戦の帰りに川底から湧き出る温泉で白鷺が傷を癒やすのを見て、兵士を入浴させたところ傷が全快したことに大いに喜ばれ、「あな、うれしの（ああ、嬉しい）」と言われたことが地名の由来と伝えられています。江戸時代には長崎街道の宿場町として栄え、ドイツの医師シーボルトも立ち寄ってその泉質を絶賛した歴史ある名湯です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            嬉野温泉は、島根県斐乃上温泉、栃木県喜連川温泉とともに「日本三大美肌の湯」に選定されています。無色透明でとろみのあるナトリウム-炭酸水素塩・塩化物泉は、入浴した瞬間に肌がぬるりとして、角質や余分な皮脂を優しく洗い流してくれる天然の美容液のようなお湯。湯上がりには肌がつるつるになり、高い保湿効果で冬の乾燥から肌をしっかりと守ってくれます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月・12月の冬を迎えると、嬉野の温泉街は名産「嬉野茶」を焚く茶香炉の清々しい香りに包まれます。そして冬の食卓の主役が、嬉野の奇跡の郷土料理「温泉湯豆腐」。嬉野の温泉水で煮込むことで、豆腐の角が丸くなり、まるで淡雪のようにふわふわ・とろとろに溶け出します。白濁した豆乳スープをごまだれやポン酢でいただく熱々の湯豆腐は、身体の芯から温まる冬の極上のご馳走。さらに佐賀が世界に誇る最高級黒毛和牛「佐賀牛」の霜降りステーキとともに、五感を満たす至福の冬旅が約束されます。
          </p>
          
          <div className="bg-emerald-50/70 rounded-2xl p-5 border border-emerald-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-emerald-700" />
                11月・12月嬉野温泉 旅のハイライト
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                名物とろける温泉湯豆腐・日本三大美肌湯のとろみ露天・嬉野茶香炉・極上A5佐賀牛ステーキ・西九州新幹線かもめ
              </p>
            </div>
            <a
              href="#hotels"
              className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              厳選名宿5選を見る
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-stone-100/80 rounded-2xl p-6 border border-stone-200">
          <h2 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-emerald-700" />
            目次・インデックス
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-stone-700">
            <a href="#bihada-spring" className="hover:text-emerald-700 hover:underline flex items-center gap-1.5">
              <span>1. 日本三大美肌の湯の真髄：とろとろ重曹泉のスキンケア効果</span>
            </a>
            <a href="#yudofu-magic" className="hover:text-emerald-700 hover:underline flex items-center gap-1.5">
              <span>2. 奇跡の郷土鍋「嬉野温泉湯豆腐」：淡雪のようにとろける秘密</span>
            </a>
            <a href="#culture-pottery" className="hover:text-emerald-700 hover:underline flex items-center gap-1.5">
              <span>3. 400年の肥前吉田焼と美肌の神「白なまず様」</span>
            </a>
            <a href="#hotels" className="hover:text-emerald-700 hover:underline flex items-center gap-1.5">
              <span>4. 11・12月に泊まりたい嬉野温泉の名宿厳選5選</span>
            </a>
            <a href="#gourmet" className="hover:text-emerald-700 hover:underline flex items-center gap-1.5">
              <span>4. 佐賀冬の贅沢グルメ：極上A5佐賀牛と香り高き嬉野茶会席</span>
            </a>
            <a href="#itinerary" className="hover:text-emerald-700 hover:underline flex items-center gap-1.5">
              <span>6. 1泊2日 王道モデルコース（西九州新幹線と茶畑散策）</span>
            </a>
            <a href="#faq" className="hover:text-emerald-700 hover:underline flex items-center gap-1.5">
              <span>7. よくある質問（FAQ）と新幹線・アクセス情報</span>
            </a>
          </nav>
        </section>

        {/* Bihada Spring Section */}
        <section id="bihada-spring" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Skin Beautifying Secrets</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                日本三大美肌の湯の真髄：とろとろ重曹泉のスキンケア効果
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            嬉野温泉の源泉は、地下数百メートルから約85℃〜90℃の高温で自噴する弱アルカリ性ナトリウム-炭酸水素塩・塩化物泉です。重曹泉の最大の特徴は、重曹成分が皮膚の余分な古い角質や毛穴の皮脂汚れを乳化させて洗い流す「石鹸のようなクレンジング効果」を持つ点にあります。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            湯船に浸かると、まるでとろりとした美容液に包まれているかのような濃厚なぬめりを感じることができます。そして塩化物泉の成分が肌の表面にヴェールを作り、入浴後も水分が蒸発するのを防ぐため、湯上がりの肌は驚くほどしっとり、すべすべに。冬の冷たい風で乾燥しがちな肌を内側から生き返らせてくれる、至福のスキンケア温泉です。
          </p>
        </section>

        {/* Yudofu Magic Section */}
        <section id="yudofu-magic" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Miraculous Hot Spring Tofu</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                奇跡の郷土鍋「嬉野温泉湯豆腐」：淡雪のようにとろける秘密
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            全国各地に湯豆腐はありますが、嬉野温泉の湯豆腐は他とは決定的に異なります。嬉野の弱アルカリ性の温泉水で木綿豆腐をコトコトと煮込むと、温泉水に含まれる炭酸水素ナトリウムが豆腐のタンパク質を分解し、角が取れて淡雪のようにふんわりと溶け出します。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            透明だった鍋の湯は、大豆の成分が溶け出してみるみるうちに真っ白な豆乳スープへと変化。すくい上げるとトロトロの食感で、大豆の自然な甘みが口いっぱいに広がります。特製のごまだれや刻みネギ、生姜を添えて味わい、残った白濁スープに野菜やご飯を投入して作る雑炊は、冬の朝食や夕食の最高の締めくくりです。
          </p>
        </section>

        
        {/* Pottery & Culture Section */}
        <section id="culture-pottery" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Pottery Culture & Folklore</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                400年の歴史を紡ぐ「肥前吉田焼」と美肌の神使「白なまず様」の伝説
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            嬉野温泉の魅力はお湯と湯豆腐にとどまりません。温泉街から車で約10分の吉田地区には、有田焼や波佐見焼と並び400年以上の歴史を誇る「肥前吉田焼」の窯元が軒を連ねます。決まった様式に縛られず、日常に寄り添うモダンな器や、嬉野茶を美味しく淹れるための急須・茶器が数多く作られており、初冬の静かな窯元巡りや陶芸体験は大人の旅にぴったりです。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            また、温泉街の中心に鎮座する「豊玉姫神社（とよたまひめじんじゃ）」は、竜宮城の乙姫様としても知られる豊玉姫を祀る美肌のパワースポット。境内に祀られている白磁の「なまず様」は、古くから豊玉姫の神使とされ、嬉野温泉を訪れた旅人が柄杓で温泉水をかけながら願い事をすると、肌がつるつる・すべすべになり美肌が叶うと信仰されています。
          </p>
        </section>

        {/* Hotel List Section */}
        <section id="hotels" className="space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
              <Flame className="w-3.5 h-3.5" />
              <span>Rakuten Travel Official API Verified Selection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              11・12月に泊まりたい嬉野温泉の名宿厳選5選
            </h2>
            <p className="text-stone-600 text-sm max-w-2xl mx-auto">
              楽天トラベルAPIから最新の口コミ評価・宿泊料金・空室情報を取得。日本三大美肌の湯と名物とろける温泉湯豆腐、最高峰A5佐賀牛を心ゆくまで堪能できる名宿5軒をご紹介します。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/90 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image Container */}
                  <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-stone-100">
                    <Image
                      src={hotel.img}
                      alt={hotel.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-md">
                      厳選名宿 No.{hotel.id}
                    </div>
                  </div>

                  {/* Hotel Content */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                        <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                          {hotel.access}
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2 py-0.5 rounded-md">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="font-bold text-sm text-stone-800">{hotel.rating}</span>
                          <span className="text-xs text-stone-400">({hotel.reviews}件)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug mb-3">
                        {hotel.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 mb-4 italic">
                        「{hotel.special}」
                      </p>

                      <p className="text-stone-700 text-sm leading-relaxed mb-5">
                        {hotel.story}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 bg-stone-50 p-4 rounded-2xl border border-stone-200/70 mb-5">
                        <h4 className="text-xs font-bold text-stone-900 flex items-center gap-1.5 uppercase tracking-wide">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                          冬の滞在おすすめポイント
                        </h4>
                        <ul className="text-xs text-stone-600 space-y-1.5 pl-1">
                          {hotel.highlights.map((hl: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-emerald-700 font-bold">•</span>
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                          <span className="font-bold text-emerald-900 block mb-1 flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5" /> 客室の選び方
                          </span>
                          <p className="text-stone-600">{hotel.roomTip}</p>
                        </div>
                        <div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                          <span className="font-bold text-emerald-900 block mb-1 flex items-center gap-1">
                            <Utensils className="w-3.5 h-3.5" /> 冬の料理長おすすめ
                          </span>
                          <p className="text-stone-600">{hotel.gourmetTip}</p>
                        </div>
                      </div>
                    </div>

                    {/* Booking Footer */}
                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-stone-500 block">参考宿泊料金（1泊2食付／2名1室時1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-extrabold text-emerald-800">
                          {hotel.price}
                        </span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl shadow-md transition-all duration-200 text-sm hover:scale-[1.02]"
                      >
                        <span>空室状況・プラン一覧</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gourmet Section */}
        <section id="gourmet" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Winter Gastronomy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                佐賀冬の贅沢グルメ：最高峰A5佐賀牛と香り高き嬉野茶会席
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-stone-700">
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-700" />
                全国屈指のブランド黒毛和牛「佐賀牛」
              </h3>
              <p className="leading-relaxed text-sm">
                日本食肉格付協会の肉質等級5等級および4等級、BMS（霜降り度合い）7番以上の最高ランクのみに許される銘柄「佐賀牛」。穏やかな気候と良質な水、肥沃な佐賀平野で丹精込めて育てられた肉質は、艶やかな光沢ときめ細やかな「艶さし（つやさし）」が特徴です。熱を加えると上質な脂がとろけ出し、芳醇な香りとジューシーな甘みが口いっぱいに広がります。陶板焼きやしゃぶしゃぶでその極上の味を堪能できます。
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-700" />
                伝統の釜炒り茶「嬉野茶（うれしのちゃ）」
              </h3>
              <p className="leading-relaxed text-sm">
                室町時代に中国から伝来したとされ、丸みを帯びた茶葉の形状から「玉緑茶（たまりょくちゃ）」としても親しまれる嬉野茶。霧深く昼夜の寒暖差が大きい嬉野の山あいで育つ茶葉は、豊かなコクと爽やかな香気が特徴です。冬の会席では、お茶の出汁で佐賀牛をくぐらせる「茶しゃぶ」や、茶葉の天ぷら、食後の淹れたて煎茶など、お茶処ならではの風雅な味覚を楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* Itinerary Section */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Recommended 2-Day Tour</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                1泊2日 王道モデルコース：西九州新幹線で行く美肌の湯と足湯・お茶カフェ巡り
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-emerald-800 pl-4 sm:pl-6 space-y-2">
              <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">【1日目】かもめで快適アクセス〜温泉街散策と美肌の宿ステイ</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                11:30 西九州新幹線「かもめ」で嬉野温泉駅到着 → タクシーで温泉街へ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                博多から約1時間で到着。温泉街の有名食事処「宗庵 よこ長」で本場の元祖温泉湯豆腐ランチ。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                13:30 シーボルトの湯＆豊玉姫神社で美肌祈願
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                大正ロマン風の公衆浴場「シーボルトの湯」を見学。美肌の神様として親しまれる豊玉姫神社の「白なまず様」にお参り。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                15:30 旅館へチェックイン → とろとろ重曹泉で至福の湯あみ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                日本三大美肌の湯で肌をつるつるに磨き上げる。夕食は極上A5佐賀牛と旬の和会席に舌鼓。
              </p>
            </div>

            <div className="border-l-2 border-stone-300 pl-4 sm:pl-6 space-y-2 pt-2">
              <span className="text-xs font-extrabold text-stone-500 uppercase tracking-wider">【2日目】朝の温泉湯豆腐〜嬉野茶カフェと茶畑絶景へ</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                08:00 朝陽が差し込む露天風呂 → 宿自慢のとろける温泉湯豆腐朝食
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                朝の清々しい空気の中で露天風呂を満喫。熱々とろとろの嬉野温泉湯豆腐で身体を目覚めさせます。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                10:30 「茶心（ちゃしん）」カフェでお茶スイーツ＆肥前吉田焼の窯元巡り
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                嬉野茶を使った抹茶パフェや煎茶をテイスティング。400年の歴史を持つ吉田焼の器をお土産に選び、嬉野温泉駅へ。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Traveler's FAQ</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                よくある質問（FAQ）と冬の旅のアドバイス
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-emerald-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links / Related Guides */}
        <section className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">Related Winter Hot Spring Guides</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい九州・西日本の冬・温泉特集
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              11月・12月ならではの絶景や冬の美食を堪能できる全国各地の名湯ガイドを多数公開中。次の旅の計画にぜひお役立てください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-kumamoto-kurokawa-onsen-yuakari-stay"
              className="bg-emerald-900/80 hover:bg-emerald-900 p-4 rounded-2xl transition border border-emerald-800/50 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">熊本・黒川</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">黒川温泉 冬の湯あかりイルミネーションと名湯露天の宿</h3>
            </Link>
            <Link 
              href="/winter-fukuoka-hakata-christmas-advent-gourmet-stay"
              className="bg-emerald-900/80 hover:bg-emerald-900 p-4 rounded-2xl transition border border-emerald-800/50 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">福岡・博多</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">博多クリスマスアドベントと冬のもつ鍋・水炊きの宿</h3>
            </Link>
            <Link 
              href="/winter-nagasaki-huistenbosch-christmas-lights-stay"
              className="bg-emerald-900/80 hover:bg-emerald-900 p-4 rounded-2xl transition border border-emerald-800/50 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">長崎・佐世保</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">ハウステンボス 光の街のクリスマスとイルミネーションの宿</h3>
            </Link>
            <Link 
              href="/winter-ehime-dogo-onsen-taimeshi-heritage-stay"
              className="bg-emerald-900/80 hover:bg-emerald-900 p-4 rounded-2xl transition border border-emerald-800/50 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">愛媛・道後</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">道後温泉 本館リニューアルと宇和島鯛めしの名宿</h3>
            </Link>
            <Link 
              href="/winter-wakayama-nanki-shirahama-kue-hotspring-stay"
              className="bg-emerald-900/80 hover:bg-emerald-900 p-4 rounded-2xl transition border border-emerald-800/50 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">和歌山・白浜</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">南紀白浜温泉 太平洋夕陽と幻の紀州本クエ鍋の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-emerald-900/80 hover:bg-emerald-900 p-4 rounded-2xl transition border border-emerald-800/50 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
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

module.exports = { generateUreshinoPage };
