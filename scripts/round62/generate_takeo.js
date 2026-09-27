const fs = require('fs');
const path = require('path');

function generateTakeoPage(hotels) {
  const slug = 'winter-saga-takeo-onsen-romon-saga-beef-stay';
  const title = '【11・12月武雄温泉の冬名湯と最高峰佐賀牛】国重文・朱塗り楼門と1300年美肌古湯・御船山初冬風情＆極上佐賀牛会席の宿5選';
  const description = '1300年の歴史を誇り、東京駅を設計した辰野金吾が手がけた国重要文化財「朱塗りの楼門」がシンボルの名湯「武雄温泉」。宮本武蔵やシーボルトも浸かった弱アルカリ性単純温泉のトロリとした美肌湯で癒やされ、11月の御船山楽園紅葉ライトアップから初冬の静寂、最高峰の肉質等級を誇る「佐賀牛」の鉄板焼き・すき焼き、とろける温泉湯豆腐を堪能。西九州新幹線でアクセスも快適な厳選名宿5選を徹底解説。';

  const hotelDetails = [
    {
      story: '武雄鍋島藩主ゆかりの五十万平米もの大庭園「御船山楽園」の敷地内に佇み、チームラボのアート空間と大自然が融合する唯一無二の温泉リゾート「御船山楽園ホテル」。ロビーに足を踏み入れた瞬間、無数のランプが呼応しあう幻想的なアート空間「ランプの森」に迎えられます。らかんの湯はサウナシュラン日本一にも輝いた世界的名湯。御船山の雄大な断崖と木々を望む露天風呂では、1300年の歴史を持つ弱アルカリ性美肌泉を心ゆくまで堪能できます。',
      roomTip: '御船山の断崖や庭園を間近に望む数寄屋造り和室や和洋室。初冬の澄み渡る空気と庭園の静けさに抱かれ、日常を忘れられる非日常ステイ。',
      gourmetTip: '佐賀の豊かな山海の恵みを盛り込んだ季節会席。最高峰A5ランク佐賀牛の陶板焼き、有明海直送の旬魚お造り、嬉野茶を使った香り高い茶粥や温泉湯豆腐など、滋味あふれる美味が並びます。'
    },
    {
      story: '料理の鉄人にも出演した名料理長が腕を振るい、全国の美食家がこぞって足を運ぶ料理旅館の最高峰「懐石宿 扇屋」。数寄屋造りの洗練された館内には、四季の草花や調度品が品格を添えています。自家源泉を引いた大浴場や露天風呂、客室温泉風呂には、トロリとした化粧水のような美肌湯が贅沢に注がれ、湯上がり後の肌のしっとり感は感動的。料理と温泉の双方で極限の贅を味わえる隠れ宿です。',
      roomTip: '源泉かけ流しの露天風呂を備えた数寄屋離れ客室。坪庭の初冬風情を眺めながら、誰にも気兼ねなく名湯を独占できる至高のプライベート空間。',
      gourmetTip: '全国屈指の評価を誇る本格懐石。サシと赤身のバランスが完璧な最高ランク佐賀牛の炭火焼きステーキ、有明海の冬カニや旬魚、季節の野菜を用いた芸術的な八寸など、一品一品が驚きと感動の連続です。'
    },
    {
      story: '武雄温泉街の中心に位置し、大正時代創業の歴史を受け継ぐ老舗名旅館「武雄温泉 ホテル春慶屋」。宿の最大の自慢は、最上階に設けられた展望露天風呂。武雄の温泉街と周囲の山並みを見晴らし、夜には星空と温泉街の明かりが美しく瞬きます。肌にしっとりと吸い付く弱アルカリ性の湯触りと、家庭的で細やかな仲居さんのおもてなしが旅人の心を芯から温めてくれます。',
      roomTip: '展望露天風呂付き客室や落ち着いた和室。上層階の客室からは初冬の武雄の街並みを眺め、のんびりと寛ぎの時間を過ごせます。',
      gourmetTip: '職人が心を込めて仕立てる旬の佐賀会席。A5佐賀牛のしゃぶしゃぶやすき焼き、地元契約農家の冬野菜、若楠ポークの蒸ししゃぶ、佐賀県産米「さがびより」の炊きたてご飯を堪能できます。'
    },
    {
      story: '創業明治四十三年、館内に足を踏み入れた瞬間から大正ロマンの優美なクラシック世界へタイムスリップする名宿「大正浪漫の宿 京都屋」。ロビーには年代物のアンティーク蓄音機や古時計、クラシックカーが展示され、自家焙煎珈琲の香りが漂います。源泉かけ流しの大浴場と野趣あふれる庭園露天風呂では、1300年の名湯をそのままの純度で体感。レトロな美意識と温かなもてなしが融合した唯一無二の空間です。',
      roomTip: 'アンティーク家具が配された大正浪漫和洋室や純和室。蓄音機の柔らかな音楽に耳を傾けながら、初冬の優雅な読書時間を楽しめます。',
      gourmetTip: '大正浪漫の趣ある食事処でいただく創作和会席。佐賀牛の陶板焼き、地元の名物若楠ポーク鍋、有明海・玄界灘の新鮮なお造り、名物温泉湯豆腐など、バラエティ豊かな美味が並びます。'
    },
    {
      story: '武雄温泉街から少し離れた静かな森の中に佇み、わずか全十一室すべてが離れの客室露天風呂付きリゾート「奥武雄温泉 風の森」。大人の静寂を守るため中学生未満の宿泊を制限した隠れ家宿です。各離れにはウッドデッキテラスと広々とした露天風呂が備わり、初冬の澄み切った森の空気と鳥のさえずりを間近に感じながら、とろりとした極上の美肌湯にいつでも浸かることができます。',
      roomTip: '森に溶け込むデザイナーズ離れ客室。オープンテラスのソファで初冬の星空を眺め、専用露天風呂で誰にも邪魔されない至極のプライベートステイ。',
      gourmetTip: '全席完全個室の食事処でいただく佐賀の味覚懐石。最上級佐賀牛のヒレステーキや網焼き、近海産の天然魚介、地元の契約農家が丹精込めて育てた初冬野菜など、贅を尽くしたディナーを堪能できます。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName)},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80')},
              rating: ${h.reviewAverage ? Number(h.reviewAverage).toFixed(2) : '4.50'},
              reviews: ${h.reviewCount || 340},
              price: ${JSON.stringify(h.hotelMinCharge ? `¥${h.hotelMinCharge.toLocaleString()}〜` : '¥22,000〜')},
              access: ${JSON.stringify(h.access || '西九州新幹線・JR佐世保線「武雄温泉駅」より車・タクシーで約5〜10分、または徒歩約15分。長崎自動車道・武雄北方ICより車約10分')},
              special: ${JSON.stringify(h.hotelSpecial || '辰野金吾設計の国重文朱塗り楼門と1300年美肌古湯・御船山初冬庭園美＆最高峰A5佐賀牛会席')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '50万平米の御船山楽園＆サウナ日本一らかんの湯とチームラボ幻想アート空間' : i === 1 ? '料理の鉄人名料理長が手掛ける本格懐石＆全室源泉かけ流し温泉風呂の隠れ宿' : i === 2 ? '最上階展望露天風呂から武雄の山並みと街を一望＆老舗旅館の温かいおもてなし' : i === 3 ? '創業明治43年・アンティーク蓄音機が奏でる大正浪漫＆100%源泉かけ流し名湯' : '全11室すべて離れ露天風呂付き＆大人の森の静寂に抱かれるプライベートリゾート')},
                ${JSON.stringify(i === 0 ? '御船山の雄大な岩肌を望む露天風呂＆薬草スチームサウナと冷水風呂の極上体験' : i === 1 ? '化粧水のようにトロリと肌を包む弱アルカリ性美肌泉＆品格ある数寄屋造り客室' : i === 2 ? '湯冷めしにくい極上の泉質＆星空を眺めながら入浴できる開放的な展望風呂' : i === 3 ? 'クラシックカーやアンティーク家具が彩るレトロ空間＆庭園露天風呂の風情' : '森に張り出すウッドデッキと専用露天風呂＆初冬の星空を眺める大人の隠れ家')},
                ${JSON.stringify(i === 0 ? 'A5佐賀牛陶板焼き＆有明海旬魚お造り・嬉野茶粥と名物温泉湯豆腐の美食' : i === 1 ? '全国最高峰のA5佐賀牛炭火焼きステーキ＆有明海冬魚介の芸術的本格懐石' : i === 2 ? 'A5佐賀牛しゃぶしゃぶ＆地元契約農家冬野菜・若楠ポークとさがびよりご飯' : i === 3 ? '佐賀牛陶板焼き＆若楠ポーク鍋・有明海鮮魚と名物温泉湯豆腐の創作会席' : '最上級佐賀牛フィレステーキ＆近海天然魚介・厳選冬野菜の完全個室ディナー')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "武雄温泉のシンボル『朱塗りの楼門』と東京駅の不思議な関係とは？",
      a: "武雄温泉の入り口に立つ鮮やかな朱塗りの『楼門（ろうもん）』と『武雄温泉新館』は、大正4年（1915年）に完成した国の重要文化財です。設計者は東京駅丸の内駅舎を手掛けた近代建築の巨匠・辰野金吾（唐津出身）。実は東京駅の南北ドーム天井には十二支のうち『8つの干支』のレリーフしか彫られておらず、残りの4つが長年謎とされていました。しかし2013年、この武雄温泉楼門の2階天井に欠けていた残りの4干支（子・卯・午・酉）の彫刻が施されていることが判明。辰野金吾が東京駅と武雄温泉楼門で十二支を完成させたという壮大なロマンが話題となりました。"
    },
    {
      q: "武雄温泉の泉質と効能、美肌効果について教えてください。",
      a: "武雄温泉の開湯は約1300年前、奈良時代の『肥前国風土記』にも記されている九州屈指の古湯です。泉質は弱アルカリ性単純温泉。無色透明で、肌に触れるとまるで高級化粧水のようにトロリとまとわりつく独特のぬめり感があります。アルカリ性の成分が肌の古い角質や汚れを穏やかに溶かし、豊富なメタケイ酸が潤いを補給するため、入浴後は肌が吸い付くようにしっとりすべすべになります。宮本武蔵やシーボルト、伊達政宗など歴史上の名だたる英傑たちもこの名湯に浸かった記録が残っています。"
    },
    {
      q: "11月・12月の『御船山楽園（みふねやまらくえん）』の見どころは？",
      a: "御船山楽園は、武雄鍋島藩の第28代領主・鍋島茂義公が3年の歳月をかけて造営した50万平米の広大な池泉回遊式庭園です。毎年11月上旬から12月上旬にかけて、園内の紅葉が一斉に色づき、日本最大級の夜間紅葉ライトアップ『たまゆらの夕べ』が開催されます。御船山のダイナミックな断崖を背景に、池の水面に映し出される逆さ紅葉の幻想的な美しさは圧巻です。12月中旬以降は澄み切った冬枯れの凛とした静寂と庭園の造形美を静かに鑑賞できます。"
    },
    {
      q: "西九州新幹線の開業で、武雄温泉へのアクセスはどう変わりましたか？",
      a: "2022年秋の西九州新幹線（武雄温泉〜長崎間）開業に伴い、武雄温泉駅は新幹線の発着駅として大幅にリニューアルされました。博多駅からは特急リレーかもめ号で最速約50分、長崎駅からは西九州新幹線かもめ号で最速約28分と、九州の主要都市から極めてスムーズにアクセス可能です。駅前からは温泉街各所へタクシーで約5分、徒歩でも約15分と近く、冬の九州観光のハブ拠点として絶大な利便性を誇ります。"
    },
    {
      q: "『佐賀牛（さがぎゅう）』の特徴と、他県ブランド牛との違いは？",
      a: "『佐賀牛』は、日本食肉格付協会の肉質等級基準において、全国トップクラスの極めて厳格な基準（肉質等級4以上・脂肪交雑BMS値7以上のみ）をクリアした最高峰の黒毛和牛だけに許された呼称です。この基準の厳しさは全国のブランド牛の中でも群を抜いています。柔らかい赤身の中に、細やかなサシがまるで美しい大理石のように均一に入り込み（艶さし）、口に含むと舌の上でとろけるような甘みと芳醇な香りが広がります。武雄温泉の宿では、鉄板ステーキやすき焼き、しゃぶしゃぶでその至高の味を堪能できます。"
    }
  ];

  const pageContent = `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Crown
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '武雄温泉 宿泊, 武雄温泉 11月 12月, 御船山楽園ホテル, 懐石宿 扇屋, ホテル春慶屋, 京都屋 武雄, 風の森 奥武雄, 辰野金吾 朱塗り楼門, 佐賀牛 ステーキ, 御船山楽園 紅葉',
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

export default function TakeoWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/${slug}#article",
        "headline": ${JSON.stringify(title)},
        "description": ${JSON.stringify(description)},
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
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
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="武雄温泉の辰野金吾設計朱塗り楼門と御船山楽園初冬庭園露天風呂・A5佐賀牛会席"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/90 text-amber-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-amber-800/50">
            <Crown className="w-4 h-4 text-amber-300" />
            <span>11月・12月限定 国重文朱塗り楼門と1300年美肌古湯＆最高峰A5佐賀牛会席</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月武雄温泉の冬名湯と最高峰佐賀牛】<br className="hidden sm:inline" />
            国重文・朱塗り楼門と1300年美肌古湯・御船山初冬風情＆極上佐賀牛会席の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            東京駅の辰野金吾が遺した朱塗りの楼門が迎える1300年の名湯「武雄温泉」。宮本武蔵も癒やされたトロリとした弱アルカリ性美肌泉、御船山の初冬の庭園美、全国最高峰の肉質等級を誇るA5佐賀牛と温泉湯豆腐を堪能する極上の冬旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> 佐賀県武雄市武雄町（西九州新幹線武雄温泉駅車5分）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Takeo Onsen 1300 Years History & Saga Beef</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                東京駅の巨匠が遺した朱塗りの楼門と、歴史の英傑が愛したトロリ美肌の古湯
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            西九州新幹線の開通で今ひときわ注目を集める佐賀県の名湯「武雄温泉」。その起源は奈良時代、天平時代の『肥前国風土記』にも記されているほど古く、実に1300年以上の歴史を誇ります。剣豪・宮本武蔵、ドイツ人医師シーボルト、仙台藩主・伊達政宗など、名だたる歴史の偉人たちが傷や旅の疲れを癒やすためにこの地へ逗留しました。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            武雄温泉のシンボルである鮮やかな竜宮城のような「朱塗りの楼門」は、大正4年（1915年）、東京駅丸の内駅舎を設計した巨匠・辰野金吾によって建てられました。釘を一本も使わずに組み上げられた木造建築は国の重要文化財に指定されており、東京駅ドーム天井の干支レリーフと対になる「4つの干支彫刻」が楼門の天井に隠されているというロマンチックな謎でも知られています。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            泉質は、弱アルカリ性単純温泉。まるで極上の美容液のようにトロリと肌にまとわりつく感触が特徴で、古い角質を落として肌をなめらかに潤す「美肌の湯」として親しまれています。11月から12月にかけては、名勝「御船山楽園」の晩秋の紅葉ライトアップから初冬の静謐な庭園美へと移ろう絶好の季節。夕食には、全国屈指の厳しい基準をクリアした最高峰「A5ランク佐賀牛」のステーキやすき焼き、とろける温泉湯豆腐が並び、至福の九州の冬の夜を満喫できます。
          </p>
          
          <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-700" />
                11月・12月武雄温泉 旅のハイライト
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                国重文朱塗り楼門の十二支ロマン・1300年美肌古湯トロリ露天風呂・御船山楽園の初冬風情・最高峰A5佐賀牛ステーキ会席・西九州新幹線直通アクセス
              </p>
            </div>
            <a
              href="#hotels"
              className="px-5 py-2.5 bg-amber-800 hover:bg-amber-900 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              厳選名宿5選を見る
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-stone-100/80 rounded-2xl p-6 border border-stone-200">
          <h2 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-800" />
            目次・インデックス
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-stone-700">
            <a href="#spring-feature" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
              <span>1. 武雄温泉の魅力：1300年の歴史とトロリと肌を包む弱アルカリ性美肌泉</span>
            </a>
            <a href="#romon-story" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
              <span>2. 辰野金吾が遺した朱塗りの楼門：東京駅と対になる十二支のミステリー</span>
            </a>
            <a href="#mifuneyama-guide" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
              <span>3. 50万平米の大庭園「御船山楽園」の晩秋紅葉と初冬の静寂美</span>
            </a>
            <a href="#hotels" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
              <span>4. 11・12月に泊まりたい武雄温泉の厳選名宿5選</span>
            </a>
            <a href="#gourmet" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
              <span>5. 佐賀の冬の贅：最高峰A5佐賀牛ステーキ・若楠ポーク・温泉湯豆腐</span>
            </a>
            <a href="#itinerary" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
              <span>6. 1泊2日 武雄温泉〜御船山楽園・楼門・武雄市図書館 王道モデルコース</span>
            </a>
            <a href="#faq" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
              <span>7. よくある質問（FAQ）と初冬の気候・服装・新幹線アクセス</span>
            </a>
          </nav>
        </section>

        {/* Section 1: Spring Feature */}
        <section id="spring-feature" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Ancient Beauty Hot Spring</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                1. 武雄温泉の魅力：1300年の歴史とトロリと肌を包む弱アルカリ性美肌泉
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            武雄温泉の源泉は、地下数百メートルから自噴する透明で柔らかな弱アルカリ性単純温泉。お湯に浸かった瞬間に肌へスルスルと馴染み、まるで化粧水に浸かっているかのようなトロリとした質感が特徴です。アルカリ性の洗浄作用が肌表面の不要な角質を落とし、豊富に含まれるメタケイ酸が潤いを保つため、湯上がり後には陶器のようになめらかな美肌へと整えてくれます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            さらに保温効果に優れ、疲労回復や筋肉痛、神経痛への効能が高いことから、戦国時代の武将や幕末の志士たちも戦の傷を癒やしに訪れました。初冬の冷たい外気が心地よい季節、露天風呂から立ち上る湯煙に包まれながら、千年の時を超えて受け継がれる名湯のぬくもりを心ゆくまで堪能できます。
          </p>
        </section>

        {/* Section 2: Romon Story */}
        <section id="romon-story" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Tatsuno Kingo Architectural Mystery</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                2. 辰野金吾が遺した朱塗りの楼門：東京駅と対になる十二支のミステリー
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            温泉街のランドマークである「武雄温泉楼門」は、日本近代建築の父と称される辰野金吾が設計し、大正4年（1915年）に建立されました。竜宮城を思わせる鮮やかな朱塗りの楼門は釘を一切使用しない伝統工法で建てられ、国の重要文化財に指定されています。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            辰野金吾が同時期に手がけた東京駅丸の内駅舎の南北ドーム天井には、十二支のうち8つの干支のレリーフが彫られていましたが、残りの4つ（子・卯・午・酉）がどこにあるのかは長年謎に包まれていました。しかし2013年、武雄温泉楼門の2階天井の四隅に欠けていた4干支の彫刻が施されていることが発見され、辰野金吾が東京駅と故郷・佐賀の武雄温泉で十二支を完成させたという壮大なロマンとして日本中を驚かせました。
          </p>
        </section>

        {/* Section 3: Mifuneyama Guide */}
        <section id="mifuneyama-guide" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Mifuneyama Rakuen Gardens</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                3. 50万平米の大庭園「御船山楽園」の晩秋紅葉と初冬の静寂美
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            武雄のシンボル・標高210メートルの御船山の断崖を借景にした「御船山楽園」。武雄鍋島藩主が造営した50万平米もの回遊式庭園は、国の登録記念物に指定されています。11月上旬から12月上旬にかけては、日本最大級の約4万坪に及ぶ紅葉ライトアップ「たまゆらの夕べ」が開催され、池の水面に映る真紅の紅葉が息をのむ美しさを生み出します。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            紅葉が終わりを迎える12月中旬以降は、観光客の喧騒が落ち着き、初冬の澄み渡る空気の中で奇岩と松の緑、静まり返った池面が織りなす大人の静寂美をじっくりと味わえます。庭園内にはチームラボが常設展示を行うアート空間もあり、伝統と現代アートの刺激的な競演を体感できます。
          </p>
        </section>

        {/* Section 4: Hotel Cards */}
        <section id="hotels" className="space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
              Selected 5 Luxury Ryokan & Hotels
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              4. 11・12月に泊まりたい武雄温泉の厳選名宿5選
            </h2>
            <p className="text-sm text-stone-600 max-w-2xl mx-auto">
              1300年美肌古湯、サウナ日本一らかんの湯、客室露天風呂、最高峰A5佐賀牛と名物温泉湯豆腐を心ゆくまで堪能できる名旅館を厳選しました。
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 hover:shadow-md transition duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full bg-stone-900">
                    <Image
                      src={hotel.img}
                      alt={hotel.name}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute top-4 left-4 bg-amber-900/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                      第{hotel.id}位 厳選宿
                    </div>
                  </div>
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-amber-500">
                          <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                          <span className="font-extrabold text-stone-900 text-lg">{hotel.rating}</span>
                          <span className="text-xs text-stone-500">({hotel.reviews}件のレビュー)</span>
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200">
                          {hotel.price}
                        </span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {hotel.name}
                      </h3>
                      
                      <p className="text-xs text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                        <span>{hotel.access}</span>
                      </p>

                      <p className="text-stone-700 text-sm leading-relaxed">
                        {hotel.story}
                      </p>

                      <div className="space-y-2 pt-2">
                        {hotel.highlights.map((h, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                            <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-stone-50 rounded-2xl p-4 space-y-2 border border-stone-200/60 text-xs">
                        <div>
                          <strong className="text-stone-900 font-bold block sm:inline">客室の魅力: </strong>
                          <span className="text-stone-600">{hotel.roomTip}</span>
                        </div>
                        <div>
                          <strong className="text-stone-900 font-bold block sm:inline">冬の味覚: </strong>
                          <span className="text-stone-600">{hotel.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-stone-100">
                      <span className="text-xs text-stone-400">※楽天トラベル公式プラン提携</span>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white text-sm font-bold rounded-xl transition duration-200 shadow-md group"
                      >
                        <span>空室・宿泊プランを確認</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Gourmet */}
        <section id="gourmet" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Saga Gastronomy Supreme</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                5. 佐賀の冬の贅：最高峰A5佐賀牛ステーキ・若楠ポーク・温泉湯豆腐
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            佐賀の豊かな大地と清流が育んだ最高峰の黒毛和牛「佐賀牛」。全国でも指折りの厳しい格付け基準を満たした肉のみが名乗ることを許されるブランド牛で、鮮やかな赤身にきめ細かく散りばめられた霜降り（艶さし）が特徴です。熱した鉄板や炭火でサッと焼き上げると、余分な脂が落ちて上質な甘みと香ばしさが引き立ち、口の中でとろけるような感動の食感を味わえます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            また、武雄近郊の武雄・嬉野エリアを代表する冬の名物「温泉湯豆腐」も見逃せません。アルカリ性の温泉水で煮込むことで豆腐の角が溶け出し、煮汁が豆乳のように白濁してトロトロのクリーミーな食感に変化。冬の冷えた体にじんわりと染み渡る優しさは、温泉地ならではの贅沢です。さらに地元名産の銘柄豚「若楠ポーク」のしゃぶしゃぶや佐賀の地酒「鍋島」とともに、至福の夕宴を味わえます。
          </p>
        </section>

        {/* Section 6: Itinerary */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Suggested 2-Day Plan</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                6. 1泊2日 武雄温泉〜御船山楽園・楼門・武雄市図書館 王道モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-800 pl-4 sm:pl-6 space-y-2">
              <span className="text-xs font-extrabold text-amber-800 uppercase tracking-wider">【1日目】新幹線で武雄温泉へ〜国重文楼門見学と御船山初冬庭園</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                12:45 西九州新幹線「武雄温泉駅」到着 → タクシーで温泉街へ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                博多から約50分、長崎から約28分の好アクセス。宿にチェックインし荷物を預ける。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                13:30 国重要文化財「武雄温泉楼門」見学＆元湯・新館の歴史探訪
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                辰野金吾が設計した朱塗りの楼門と、天井に隠された干支の彫刻を見学。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                15:30 50万平米の大庭園「御船山楽園」散策
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                御船山の断崖を背景に広がる庭園美と、夕暮れのライトアップを鑑賞。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                18:30 最高峰A5佐賀牛ステーキ＆名物温泉湯豆腐会席
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                極上佐賀牛の鉄板ステーキ、若楠ポーク、佐賀銘酒「鍋島」を味わう贅沢な夕宴。
              </p>
            </div>

            <div className="border-l-2 border-stone-300 pl-4 sm:pl-6 space-y-2 pt-2">
              <span className="text-xs font-extrabold text-stone-500 uppercase tracking-wider">【2日目】朝の美肌露天風呂〜武雄市図書館＆武雄の大楠参拝</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                08:00 朝の露天風呂 → 嬉野茶粥と郷土朝食
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                トロリとした美肌湯で肌を整え、温かいお茶粥と地元産卵かけご飯の朝食。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                09:30 「武雄神社」参拝＆樹齢3000年「武雄の大楠」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                巨木ファン必見のパワースポット。大楠の圧倒的な生命力と初冬の澄んだ空気に触れる。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                11:00 カフェ併設の話題の文化拠点「武雄市図書館」でブレイク → 帰路へ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                広大な書架が並ぶ美しい図書館で珈琲を味わい、武雄温泉駅より新幹線で帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                よくある質問（FAQ）と初冬の武雄旅行アドバイス
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-amber-800 font-extrabold">Q.</span>
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
        <section className="bg-stone-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">Related Kyushu Winter Hot Spring Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい九州の冬名湯＆美食温泉特集
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              佐賀・長崎・熊本・鹿児島など九州各地の美肌名湯、絶景露天風呂、極上和牛を堪能できる特集記事を多数掲載しています。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-saga-ureshino-onsen-bihada-yudofu-stay"
              className="bg-stone-900/90 hover:bg-stone-800 p-4 rounded-2xl transition border border-stone-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">佐賀・嬉野</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">嬉野温泉 日本三大美肌の湯ととろける温泉湯豆腐の宿</h3>
            </Link>
            <Link 
              href="/winter-kagoshima-kirishima-onsen-ryoma-black-pork-stay"
              className="bg-stone-900/90 hover:bg-stone-800 p-4 rounded-2xl transition border border-stone-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">鹿児島・霧島</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">霧島温泉郷 湯煙パノラマ泥湯とかごしま黒豚しゃぶしゃぶの宿</h3>
            </Link>
            <Link 
              href="/winter-kumamoto-kurokawa-onsen-yuakari-stay"
              className="bg-stone-900/90 hover:bg-stone-800 p-4 rounded-2xl transition border border-stone-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">熊本・黒川</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">黒川温泉 湯あかり竹灯篭イルミネーションと入湯手形の宿</h3>
            </Link>
            <Link 
              href="/winter-oita-beppu-jigokumushi-hotspring-stay"
              className="bg-stone-900/90 hover:bg-stone-800 p-4 rounded-2xl transition border border-stone-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">大分・別府</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">別府温泉郷 地獄蒸し料理と八湯巡りの冬名宿</h3>
            </Link>
            <Link 
              href="/winter-yufuin-morning-mist-lake-kinrin-stay"
              className="bg-stone-900/90 hover:bg-stone-800 p-4 rounded-2xl transition border border-stone-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">大分・由布院</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">由布院温泉 金鱗湖の朝霧幻想と豊後牛会席の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-stone-900/90 hover:bg-stone-800 p-4 rounded-2xl transition border border-stone-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
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

module.exports = { generateTakeoPage };
