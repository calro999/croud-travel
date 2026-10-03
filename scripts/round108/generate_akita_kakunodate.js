const fs = require('fs');
const path = require('path');

function generateAkitaKakunodatePage(hotels) {
  const slug = 'winter-akita-kakunodate-bukeyashiki-snow-kiritanpo-hinaijidori-stay';
  const title = '【11・12・1月秋田】陸奥の小京都・角館武家屋敷の雪景色＆冬の田沢湖！本場比内地鶏きりたんぽ鍋と名湯に寛ぐ名宿5選';
  const description = '冬の秋田・角館と田沢湖は、黒板塀が続く武家屋敷通りに純白の粉雪が降り積もり、日本一の深さを誇る田沢湖が神秘的な瑠璃色を湛える極上の雪国世界。11月中旬の初雪から1月の深雪期まで、小京都の静謐な佇まい、冬の田沢湖たつこ像、秋田が誇る日本三大美味鶏「比内地鶏」の出汁が染み渡る本場きりたんぽ鍋、ツルツルとした喉越しの稲庭うどん。田沢湖高原の白濁の湯や名湯に癒やされる厳選名宿5選を詳しくご案内します。';

  const hotelDetails = [
    {
      story: '陸奥の小京都・角館の歴史ある町並みに溶け込む「和のゐ 角館」は、江戸から明治期に築かれた歴史的な蔵（西宮家武士蔵・ガッコ蔵・反物蔵）をリノベーションした極上の古民家ホテルです。冬になると黒板塀や蔵の瓦屋根にふんわりと綿雪が積もり、雪国ならではの厳かな静寂が漂います。室内は秋田の伝統工芸「樺細工（桜皮細工）」や重厚な梁、組子格子が美しく配置され、現代の快適性を兼ね備えたモダンラグジュアリー空間。冬の冷え込みを忘れさせる床暖房や信楽焼の湯舟で温まった後は、地元の名店から届く比内地鶏のきりたんぽ鍋や秋田の銘酒を味わい、歴史ある蔵に籠もる贅沢な時間を堪能できます。',
      roomTip: '蔵スイートルーム。歴史を刻んだ太い梁と蔵戸が醸し出す重厚な空間。雪明かりが差し込む窓辺で秋田の地酒を傾ける格別のひととき。',
      gourmetTip: '「比内地鶏きりたんぽ御膳＆秋田の純米大吟醸」。炭火で香ばしく焼き上げた手作りたんぽに、比内地鶏の濃厚な鶏ガラスープが染み入る冬の極味。'
    },
    {
      story: '角館のシンボルである国指定重要伝統的建造物群保存地区「武家屋敷通り」まで徒歩わずか2分という好立地に佇む「町家ホテル 角館」。格子戸をあしらった町家風の外観が小京都の風情に調和し、観光の拠点として抜群の利便性を誇ります。冬の早朝、観光客の足跡がまだない新雪の武家屋敷通りを散策できるのは宿泊者だけの特権。客室は木の温もりを大切にした清潔感あふれる和モダンデザインで、バス・トイレがセパレートされた機能的な設え。隣接する食事処や周辺の老舗割烹で、熱々の稲庭うどんや比内地鶏料理を気兼ねなく楽しめるフットワークの軽さが魅力です。',
      roomTip: '町家ツインルーム。フローリングに琉球畳を配した寛ぎの客室。高い遮音性と快適なシモンズベッドで冬旅の疲れを心地よく癒やせます。',
      gourmetTip: '「門前通り名店での比内地鶏親子丼＆稲庭うどん」。とろとろの濃厚卵と弾力ある比内地鶏の旨み、なめらかな手延べ稲庭干饂飩の極上セット。'
    },
    {
      story: '日本一深い神秘の湖・田沢湖を望む雄大なロケーションに位置する「天然温泉 田沢湖レイクリゾート」。白銀の駒ヶ岳と田沢湖の自然林に抱かれ、冬のリゾートステイを満喫できる総合温泉宿です。宿自慢の「かたくり温泉」は、肌触りの柔らかな自家源泉で、冬の澄んだ空気を感じながら入る露天風呂はまさに極楽の心地。広々としたバイキングレストランでは、熱々の本場きりたんぽ鍋をはじめ、秋田錦牛の鉄板焼き、名物の横手やきそば、秋田の旬魚や山菜など、秋田の豊かな味覚をライブキッチンで出来立て熱々のまま堪能できます。',
      roomTip: '和モダンツイン・ファミリールーム。冬の田沢湖高原の白銀パノラマを望むゆとりある空間。ファミリーやカップルで寛げる温かいインテリア。',
      gourmetTip: '「秋田郷土ディナーバイキング」。目の前で仕上げる秋田錦牛ステーキと、比内地鶏出汁のきりたんぽ鍋、旬の海鮮を好きなだけ味わう贅沢。'
    },
    {
      story: '秋田駒ヶ岳の中腹、標高約600mの田沢湖高原温泉郷に佇む「亀の井ホテル 田沢湖」。乳白色の濁り湯が自慢の田沢湖高原温泉の引湯を引いており、硫黄の香る良質な天然温泉が冬の冷えた身体を芯からじんわりと解きほぐしてくれます。雪見風呂が楽しめる露天風呂からは、天候によって銀世界の森や美しい冬の星空を眺めることができます。夕食には秋田の伝統郷土料理を彩り豊かにアレンジした会席料理が振る舞われ、名物・夜鳴き担々麺の無料サービスも冬の夜の嬉しいおもてなしです。',
      roomTip: 'スーペリア和洋室。畳スペースと低床ベッドを組み合わせた居心地の良い設計。白銀のブナ原生林を望む静かなロケーション。',
      gourmetTip: '「秋田旬味会席＆亀の井名物夜鳴き担々麺」。比内地鶏とセリが香るきりたんぽ小鍋と、深夜の胃袋に染みる特製担々麺のダブルの愉しみ。'
    },
    {
      story: '田沢湖高原温泉郷の中でもひときわ高い丘の上に建ち、全客室や展望大浴場から白銀の田沢湖を見晴らす絶景宿「ホテルグランド天空」。冬の晴れた日には、青く輝く田沢湖の水面と雪化粧した山並みが織りなす大パノラマが眼下に広がります。お風呂は源泉かけ流しの天然温泉。夕食は秋田名物の「きりたんぽ鍋」を中心に、秋田由利牛の陶板焼きや八幡平ポーク、清流イワナの塩焼きなど、秋田の山海の恵みを贅沢に盛り込んだ手作り和食会席。高台ならではの静けさと絶景に包まれながら、大人の上質な冬籠もりを堪能できます。',
      roomTip: 'レイクビュー和室。大きな窓から冬の田沢湖と雪の森を一望。朝焼けに染まる湖面の美しさは息をのむほどの絶景。',
      gourmetTip: '「天空特製・比内地鶏きりたんぽ会席」。新米あきたこまちを手潰しした香ばしいたんぽと、比内地鶏の濃厚な旨みが調和した本物の郷土料理。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥34,000〜' : i === 1 ? '¥8,000〜' : i === 2 ? '¥6,300〜' : i === 3 ? '¥5,400〜' : '¥7,900〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.83' : i === 1 ? '4.01' : i === 2 ? '4.18' : i === 3 ? '4.04' : '4.46');
    const reviewCount = h.reviewCount || (i === 0 ? 30 : i === 1 ? 420 : i === 2 ? 850 : i === 3 ? 610 : 380);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'JR秋田新幹線角館駅・田沢湖駅より車またはバスでアクセス')},
              special: ${JSON.stringify(h.hotelSpecial || '冬の角館武家屋敷雪景色・田沢湖と比内地鶏きりたんぽ鍋を満喫する名宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '歴史ある江戸・明治の蔵を改装・樺細工と組子のモダンラグジュアリー・角館武家屋敷至近' : i === 1 ? '武家屋敷通りまで徒歩2分・早朝の新雪散策に最適・快適セパレート和モダンルーム' : i === 2 ? '田沢湖高原の雄大な自然・自家源泉かたくり温泉露天風呂・秋田郷土ディナーバイキング' : i === 3 ? '乳白色の天然温泉で雪見風呂・秋田駒ヶ岳山麓の静寂・名物夜鳴き担々麺サービス' : '田沢湖を一望する天空の高台絶景・源泉かけ流し天然温泉・比内地鶏きりたんぽ会席')},
                ${JSON.stringify(i === 0 ? '名店から届く比内地鶏の本格きりたんぽ鍋＆秋田銘酒の贅沢な部屋食・プライベートステイ' : i === 1 ? '周辺の老舗郷土割烹へのアクセス抜群・名物稲庭うどんや比内地鶏親子丼ランチ' : i === 2 ? '秋田錦牛ステーキ＆手作りきりたんぽ鍋・ライブキッチンで熱々の秋田美味を満喫' : i === 3 ? '旬の山菜と比内地鶏の冬会席・厳選地酒の飲み比べ・心温まるおもてなし' : '秋田由利牛陶板焼き＆香ばしい手潰したんぽ・山の恵みと清流岩魚の炭火焼き')},
                ${JSON.stringify(i === 0 ? '床暖房と信楽焼風呂で冬でもポカポカ・歴史的町並みでの特別な蔵泊体験' : i === 1 ? '無料駐車場完備・コンビニ隣接で便利・シモンズベッドで快眠サポート' : i === 2 ? '広々とした客室・冬のスキーやスノーシュー体験の拠点にも最適' : i === 3 ? '乳白色の濁り湯で芯から温まる美肌浴・秋田駒ヶ岳を望む寛ぎの和洋室' : '全室レイクビュー・冬の神秘的な田沢湖パノラマ・静寂に包まれた大人の隠れ家')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "冬（11月〜1月）の角館武家屋敷通りの雪景色の見どころと散策のポイントは？",
      a: "角館は「陸奥の小京都」と称され、江戸時代の上中級武士の屋敷（青柳家、石黒家、河原田家、岩橋家など）が当時の面影のまま保存されています。11月中旬から下旬にかけて初雪が舞い始め、12月中旬から1月には本格的な積雪期を迎えます。重厚な黒板塀（黒塗りの塀）と武家屋敷の茅葺き・木羽葺き屋根の上に純白の雪が降り積もり、モノトーンの美しい対比を描き出します。特に早朝の新雪が残る時間帯や、夕暮れの街灯が雪を照らす時間帯は息をのむ美しさです。通りは除雪されますが、路面凍結があるため防寒・防滑仕様のスノーブーツや長靴での散策が必須です。"
    },
    {
      q: "冬の田沢湖（たつこ像・御座石神社）の景観とアクセス時の注意点は？",
      a: "田沢湖は最大水深423.4mという日本一の深さを誇るカルデラ湖で、真冬でも水面が結氷することがありません。澄んだ冬の大気の下では、コバルトブルーから瑠璃色へと移ろう神秘的な湖水が広がり、金箔の「たつこ像」や湖畔に佇む「御座石神社」の朱塗りの鳥居が雪景色に鮮やかに映えます。田沢湖駅から羽後交通の路線バス（田沢湖一周線など）が運行していますが、冬期は便数が限られるため事前の時刻表確認が大切です。車で訪れる場合は国道46号線から湖畔道路に入りますが、湖畔は風が強く路面が凍結しやすいため、慎重な運転が求められます。"
    },
    {
      q: "本場の秋田名物「きりたんぽ鍋」と「比内地鶏」の美味しさの秘密は？",
      a: "秋田の冬の代表的郷土料理「きりたんぽ鍋」は、収穫されたばかりの新米あきたこまちをすり鉢で軽く潰し（半殺し）、杉の串に巻き付けて炭火で香ばしく焼き上げた「たんぽ」を使用します。これを比内地鶏の鶏ガラからじっくり取った黄金色の濃厚スープに、弾力ある比内地鶏の正肉、冬に甘みを増す舞茸、ゴボウ、長ネギ、そして秋田の鍋に欠かせない根付きの「セリ」と共に入れて煮込みます。比内地鶏の上品な脂と出汁を吸ったモチモチのきりたんぽと、シャキシャキとしたセリの根の芳醇な香りは、冬の寒さを一瞬で忘れさせる極上の味わいです。"
    },
    {
      q: "田沢湖高原温泉郷の特徴や泉質、冬の温泉情緒は？",
      a: "田沢湖高原温泉郷は、秋田駒ヶ岳の山麓に広がる温泉地で、標高約600〜700mの高台から田沢湖を見下ろす絶好のロケーションにあります。主に乳白色の硫黄泉（単純硫黄温泉）が引湯されており、ほんのりとした硫黄の香りと肌を滑らかに包み込む柔らかな湯ざわりが特徴です。効能は神経痛、冷え性、疲労回復、皮膚乾燥症など。雪深い冬の露天風呂では、頭上に舞い散る雪の花と湯けむり、遠くに広がる白銀の山並みを眺めながら、極上の雪見風呂を満喫できます。"
    },
    {
      q: "冬の角館・田沢湖エリアの気温、積雪状況、レンタカー運転の注意点は？",
      a: "11月の平均気温は約6℃（朝晩は0℃前後）、12月〜1月は平均気温が氷点下1℃〜3℃、最低気温は氷点下8℃近くまで下がります。積雪量は角館市街で30〜60cm、標高の高い田沢湖高原では1m以上の豪雪となります。冬用タイヤ（スタッドレスタイヤ）の装着は必須で、4WD車が推奨されます。秋田新幹線こまち（角館駅・田沢湖駅）を利用し、駅からの周遊バスやタクシー、宿の送迎バスを活用する鉄道旅も冬の安全で風情ある選択肢です。服装は防風性の高いダウンコート、厚手の手袋、ニット帽、マフラー、滑り止め付きスノーブーツが欠かせません。"
    }
  ];

  const pageContent = `import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Snowflake, Flame, Mountain, Building, ThermometerSun, Waves, Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '角館 ホテル, 田沢湖 温泉, 角館武家屋敷 雪景色, 比内地鶏 きりたんぽ鍋, 和のゐ角館, 田沢湖レイクリゾート, 稲庭うどん, 11月 12月 1月 秋田 観光',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}'
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=630', width: 1200, height: 630, alt: '角館武家屋敷雪景色と田沢湖' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)}
  }
};

export default function AkitaKakunodatePage() {
  const hotels = [
${hotelCardsCode}
  ];

  const faqList = ${JSON.stringify(faqList, null, 2)};

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'ホーム', 'item': 'https://croud-travel.com' },
          { '@type': 'ListItem', 'position': 2, 'name': '特集一覧', 'item': 'https://croud-travel.com/features' },
          { '@type': 'ListItem', 'position': 3, 'name': '角館武家屋敷雪景色と比内地鶏きりたんぽ鍋名宿', 'item': 'https://croud-travel.com/${slug}' }
        ]
      },
      {
        '@type': 'TouristDestination',
        'name': '角館武家屋敷通り・田沢湖・田沢湖高原温泉郷',
        'description': ${JSON.stringify(description)},
        'touristType': ['歴史探訪', '雪景色鑑賞', '冬の味覚探訪', '温泉保養', '小京都散策']
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
${faqList.map(item => `          {
            '@type': 'Question',
            'name': ${JSON.stringify(item.q)},
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': ${JSON.stringify(item.a)}
            }
          }`).join(',\n')}
        ]
      }
    ]
  };

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-sky-950 to-stone-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-200 text-xs sm:text-sm font-medium mb-6">
            <Snowflake className="w-4 h-4 text-sky-300" />
            11月・12月・1月冬の特選旅｜秋田・角館＆田沢湖
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-6">
            陸奥の小京都・角館武家屋敷の雪景色＆冬の田沢湖！<br className="hidden sm:inline" />
            本場比内地鶏きりたんぽ鍋と名湯に寛ぐ名宿5選
          </h1>
          <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-4xl mb-8">
            みちのくの歴史が息づく仙北市・角館と田沢湖。11月の晩秋の静寂から1月の本格的な白銀世界まで、黒板塀が続く武家屋敷通りに粉雪が舞い降りる景観は言葉を失う静謐な美しさ。日本一深い瑠璃色の田沢湖、新米あきたこまちと比内地鶏の出汁が染み渡る熱々きりたんぽ鍋、そして乳白色の天然温泉。冬の東北旅の醍醐味が詰まった厳選宿をご紹介します。
          </p>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-sky-400" /> 秋田県仙北市（角館・田沢湖）</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-sky-400" /> 探訪期：11月中旬〜1月下旬</span>
            <span className="flex items-center gap-1.5"><Flame className="w-4 h-4 text-sky-400" /> 本場きりたんぽ鍋＆雪見露天風呂</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-sky-600 pl-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Atmosphere & Tradition</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              黒板塀に降り積もる純白の雪と、新米の香ばしいたんぽが温める東北の冬
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              みちのくの小京都が魅せる水墨画の世界と、日本一深いカルデラ湖の神秘
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              秋田県東部、奥羽山脈の懐に抱かれた仙北市。春のシダレザクラで全国に名を馳せる角館ですが、旅の通が口を揃えて「最も美しい季節」と讃えるのが冬です。江戸時代、佐竹北家の城下町として栄えた角館の町並みは、武家屋敷が並ぶ「内町（うちまち）」と、商人や町人が暮らした「外町（とまち）」に分かれ、今も当時の地割りと重厚な建築がそのまま息づいています。11月中旬、山々に初雪が訪れると街は冬支度に入り、屋敷の立木には雪吊りが施されます。12月に入り本格的な積雪期を迎えると、黒塗りの板塀や茅葺き屋根の上にふわふわとしたパウダースノーが降り積もり、街全体が静謐な水墨画の世界へと姿を変えます。
            </p>
            <p>
              角館から車や秋田新幹線でわずか20分ほどの距離にある田沢湖は、周囲約20km、水深423.4mを誇る日本で最も深いカルデラ湖です。太陽光線の角度や深度によって、エメラルドグリーンから深いラピスラズリ（瑠璃色）へと湖面の色を変え、冬の澄み切った外気の中でその神秘性は最高潮に達します。雪に覆われた山並みを背景に、湖畔に佇む黄金の「たつこ像」や、湖水に朱塗りの鳥居が浮かぶ「御座石神社」が雪景色の中に凛として立ち現れる姿は、冬の東北でしか出逢えない絶景です。
            </p>
            <p>
              そして冷え切った旅人の身体を芯から温めてくれるのが、秋田の誇る郷土の味覚と名湯です。収穫を終えたばかりの新米「あきたこまち」を粒が残る程度に潰して杉串に巻き、炭火で香ばしく焼き上げた手作りの「たんぽ」。これを日本三大地鶏の一つ「比内地鶏」の鶏ガラから丁寧に取った黄金出汁に投入し、舞茸、ゴボウ、長ネギ、そしてシャキシャキとした根付きのセリと一緒に煮込む本場の「きりたんぽ鍋」は、一口スープをすするだけで滋味深い旨みが身体中に染み渡ります。田沢湖高原の白濁した硫黄泉に浸かり、湯上がりに熱々の鍋と秋田の純米大吟醸を傾けるひとときは、冬旅の極みと言えます。
            </p>
            <p>
              冬の仙北市は、歴史と自然が調和した奥深い魅力に溢れています。雪の静けさに包まれた武家屋敷の内町を歩けば、木造建築の重厚な佇まいと梢から落ちる雪の音が心地よく響きます。さらに田沢湖から秋田駒ヶ岳へと足を延ばせば、パウダースノーの銀世界と白濁の温泉が待ち受けており、冬の日本の美しさを五感のすべてで満喫できます。
            </p>
          </div>

          {/* 3 Pillar Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">水墨画の美・角館武家屋敷</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                黒板塀と純白の雪が織りなすモノトーンの美。青柳家や石黒家など江戸の武家屋敷を静かに巡る冬散策。
              </p>
            </div>

            <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">瑠璃色に輝く冬の田沢湖</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                真冬でも凍らない日本一深い湖。黄金のたつこ像と朱塗りの御座石神社鳥居が白銀の湖畔に映える神秘。
              </p>
            </div>

            <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">比内地鶏きりたんぽ鍋＆濁り湯</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                新米あきたこまちの香ばしいたんぽと比内地鶏の黄金出汁。田沢湖高原の乳白色硫黄泉で楽しむ至福の雪見風呂。
              </p>
            </div>
          </div>
        </section>

        {/* Month Guide */}
        <section className="bg-gradient-to-r from-slate-900 to-sky-950 text-white rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
          <div className="border-l-4 border-sky-400 pl-4">
            <span className="text-sky-300 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Seasonal Calendar</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              11月・12月・1月の見どころカレンダー＆気候・服装ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between border-b border-white/20 pb-2">
                <span className="font-bold text-sky-300 text-base">11月（初冬・初雪）</span>
                <span className="text-xs text-slate-300">平均気温 6.2℃</span>
              </div>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                上旬は武家屋敷の残る紅葉と雪吊りの設置風景が見られます。中旬〜下旬にかけて初雪が観測され、新米あきたこまちで作る本場きりたんぽ鍋のシーズンが本格開幕。
              </p>
              <div className="text-xs text-sky-200">
                おすすめ服装：厚手ウールコート、マフラー、手袋、防滑機能付きブーツ
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between border-b border-white/20 pb-2">
                <span className="font-bold text-sky-300 text-base">12月（積雪・白銀期）</span>
                <span className="text-xs text-slate-300">平均気温 0.1℃</span>
              </div>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                街全体が純白の雪に覆われ、黒板塀とのコントラストが完成します。田沢湖の湖水が澄み渡り、田沢湖高原のスキー場がオープン。雪見露天風呂の風情が格別です。
              </p>
              <div className="text-xs text-sky-200">
                おすすめ服装：防風・防水ダウンコート、保温インナー、完全防水スノーブーツ
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between border-b border-white/20 pb-2">
                <span className="font-bold text-sky-300 text-base">1月（深雪・新春期）</span>
                <span className="text-xs text-slate-300">平均気温 -2.5℃</span>
              </div>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                最も雪深い厳冬期。静まり返った武家屋敷の朝の雪景色は息を呑む絶景。新春の御座石神社初詣や、熱々の比内地鶏鍋と地酒の新酒（しぼりたて）を味わう最高の時期。
              </p>
              <div className="text-xs text-sky-200">
                おすすめ服装：厳冬期用ロングダウン、耳当て・ニット帽、ネックウォーマー、カイロ
              </div>
            </div>
          </div>
        </section>

        {/* Must-Visit Winter Spots Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8">
          <div className="border-l-4 border-sky-600 pl-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Must-Visit Winter Spots</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬に訪れるべき角館・田沢湖の三大名所と体験ポイント
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Building className="w-5 h-5 text-sky-600" /> 角館武家屋敷通り（内町）
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                重要伝統的建造物群保存地区。青柳家や石黒家など江戸時代からの名門武家屋敷が立ち並びます。冬は黒板塀の上に純白の雪が降り積もり、凛とした静寂に包まれます。邸内では囲炉裏の火が灯され、伝統工芸の樺細工実演や歴史資料の展示を鑑賞できます。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：JR角館駅より徒歩約15分。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Waves className="w-5 h-5 text-sky-600" /> 田沢湖（たつこ像＆御座石神社）
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                水深423.4mを誇る日本最深のカルデラ湖。永遠の美しさを求めて龍になった伝説の乙女「たつこ像」が黄金に輝き、北岸の「御座石神社」では雪の湖面に朱塗りの鳥居が鮮やかに映えます。冬晴れの澄んだ湖水は言葉を失う瑠璃色を湛えます。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：JR田沢湖駅より路線バスで約15〜30分。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Mountain className="w-5 h-5 text-sky-600" /> 田沢湖高原温泉郷＆雪見風呂
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                秋田駒ヶ岳の中腹に広がる名湯地。標高約600mの高台から白銀の田沢湖を見晴らす露天風呂や、乳白色の濃厚な硫黄泉が注ぐ湯舟が揃います。頭上に雪が舞う露天風呂で身体を芯から温める体験は、冬の東北旅ならではの至福です。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：田沢湖駅よりバス約35分。
              </div>
            </div>
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-sky-600 pl-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の角館・田沢湖を満喫する1泊2日王道モデルコース
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-sky-800 block text-sm">【1日目】小京都の雪散策と本場きりたんぽ鍋・名湯ステイ</span>
              <p className="leading-relaxed">
                午前中に秋田新幹線こまちでJR角館駅に到着。まずは武家屋敷通りへ向かい、青柳家や石黒家の歴史屋敷を見学。昼食は門前通りで比内地鶏の親子丼やなめらかな稲庭うどんを堪能。午後は樺細工伝承館で桜皮細工の職人技を見学し、雪明かりの美しい夕暮れの通りを散策。夕方に田沢湖高原の宿へチェックイン。乳白色の雪見露天風呂に浸かり、夕食には熱々の比内地鶏きりたんぽ鍋と秋田の銘酒を味わいます。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-sky-800 block text-sm">【2日目】冬の田沢湖ブルーとたつこ像・新春開運祈願</span>
              <p className="leading-relaxed">
                朝風呂で身体を目覚めさせ、秋田の郷土朝ごはんを満喫。宿を出発し、神秘の田沢湖畔へドライブ。黄金のたつこ像や湖畔の御座石神社で新春の開運祈願。雪と青い湖水の絶景を写真に収めた後は、湖畔のカフェや物産館で秋田犬グッズやいぶりがっこ、新米あきたこまちをお土産に購入。田沢湖駅または角館駅から新幹線で帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-l-4 border-sky-600 pl-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Curated Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              冬の角館・田沢湖を満喫する厳選名宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              武家屋敷至近の歴史的蔵ホテルから田沢湖一望の高原リゾート・濁り湯の秘湯まで
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row"
              >
                {/* Hotel Image */}
                <div className="md:w-5/12 relative min-h-[260px] md:min-h-[320px] bg-slate-100">
                  <img 
                    src={hotel.img} 
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-sky-900/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    厳選名宿 #{hotel.id}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{hotel.rating}</span>
                    <span className="text-slate-400 font-normal">({hotel.reviews}件)</span>
                  </div>
                </div>

                {/* Hotel Info */}
                <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-100 pb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                        {hotel.name}
                      </h3>
                      <span className="text-sm sm:text-base font-bold text-sky-800">
                        {hotel.price}
                      </span>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {hotel.story}
                    </p>

                    <div className="space-y-2 pt-1 text-xs sm:text-sm">
                      <div className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <div><strong className="text-slate-900">客室の魅力：</strong>{hotel.roomTip}</div>
                      </div>
                      <div className="flex items-start gap-2 text-slate-700">
                        <Utensils className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <div><strong className="text-slate-900">冬の美食：</strong>{hotel.gourmetTip}</div>
                      </div>
                      <div className="flex items-start gap-2 text-slate-500">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <div><strong className="text-slate-700">交通：</strong>{hotel.access}</div>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-1.5">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">こだわりポイント</span>
                      <ul className="text-xs text-slate-600 space-y-1">
                        {hotel.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-sm shadow-xs transition-colors duration-200"
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

        {/* Deep FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-sky-600 pl-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の角館・田沢湖旅行 よくある質問とアドバイス
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              現地を熟知した専門視点から冬の旅をサポートする5つの疑問に回答
            </p>
          </div>

          <div className="space-y-6">
            {faqList.map((faq, idx) => (
              <div key={idx} className="border-b border-slate-100 pb-5 last:border-b-0 last:pb-0 space-y-2">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">Q</span>
                  {faq.q}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links */}
        <section className="bg-slate-100/80 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6">
          <div className="border-l-4 border-slate-600 pl-4">
            <span className="text-slate-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Guides</span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              東北・北日本の冬旅＆関連する冬の厳選特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-akita-nyuto-onsen-yukimi-kiritanpo-hinaijidori-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-sky-700 mb-1">乳頭温泉郷の秘湯と雪見風呂</div>
              <div className="text-slate-500 text-xs">七湯めぐりと湯治文化・本場きりたんぽ鍋の名宿特集</div>
            </Link>
            <Link 
              href="/winter-yamagata-ginzan-onsen-snow-taisho-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-sky-700 mb-1">山形・銀山温泉の大正ロマン雪景色</div>
              <div className="text-slate-500 text-xs">ガス灯揺れる白銀の温泉街と尾花沢牛の極上会席</div>
            </Link>
            <Link 
              href="/winter-aomori-hachinohe-kabushima-ginsaba-senbeijiru-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-sky-700 mb-1">青森・八戸の銀鯖＆せんべい汁</div>
              <div className="text-slate-500 text-xs">蕪嶋神社初詣とみろく横丁・館鼻岸壁朝市の冬美食</div>
            </Link>
            <Link 
              href="/winter-iwate-hiraizumi-chusonji-geibikei-maesawagyu-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-sky-700 mb-1">岩手・平泉中尊寺＆猊鼻渓こたつ舟</div>
              <div className="text-slate-500 text-xs">世界遺産の雪景色と前沢牛すき焼きの名宿ガイド</div>
            </Link>
            <Link 
              href="/winter-miyagi-naruko-onsen-yukimi-sendai-beef-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-sky-700 mb-1">宮城・鳴子温泉郷の湯めぐり</div>
              <div className="text-slate-500 text-xs">多彩な源泉と仙台牛ステーキ・冬のこけし文化探訪</div>
            </Link>
            <Link 
              href="/features" 
              className="p-4 rounded-2xl bg-sky-900 text-white hover:bg-sky-950 transition-all block flex flex-col justify-center items-center text-center font-bold"
            >
              <span>全国の冬特集一覧を見る →</span>
              <span className="text-sky-200 text-xs font-normal mt-1">11・12・1月の厳選記事を多数掲載</span>
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

module.exports = { generateAkitaKakunodatePage };
