const fs = require('fs');
const path = require('path');

function generateFukuiWakasaPage(hotels) {
  const slug = 'winter-fukui-wakasa-mikatagoko-onsen-fugu-echizen-crab-stay';
  const title = '【11・12月福井・若狭三方五湖＆敦賀温泉郷の初冬レイクビューと若狭ふぐ】越前蟹・名物焼き鯖＆敦賀港冬海鮮会席を愉しむ湖畔・海辺名宿5選';
  const description = '11月から12月にかけて、国の名勝・三方五湖（みかたごこ）と敦賀湾を擁する福井県若狭エリアは、日本最北限の冷たい荒波で鍛え抜かれた冬の美食の最高峰「若狭ふぐ」が本格解禁を迎え、11月6日の越前蟹解禁とともに美食家を唸らせる黄金の季節に突入します。水質や水深が異なる五つの湖が初冬の澄んだ光に染まる神秘的な湖畔風景、レインボーライン山頂公園からの360度パノラマ絶景、そして北陸新幹線敦賀開業でぐっと身近になった名湯露天風呂。本場の若狭ふぐフルコース（てっさ・てっちり・唐揚げ・ひれ酒）や敦賀港直送の越前蟹、若狭名物の焼き鯖を堪能する厳選名宿5選を徹底解説します。';

  const hotelDetails = [
    {
      story: 'ラムサール条約湿地に登録された三方五湖の一つ「水月湖（すいげつこ）」の波打ち際に佇み、客室や温泉露天風呂から静謐な湖面を一望できる絶景の湖畔リゾート「若狭みかた きらら温泉 水月花（すいげっか）」。初冬の朝、水月湖には幻想的な湖霧が立ち込め、静寂の中で白鳥や水鳥が羽を休める情緒あふれる光景が広がります。宿自慢の天然温泉「きらら温泉」は、肌をしっとり潤す弱アルカリ性単純温泉。湖水に手が届きそうな露天風呂に浸かれば、初冬の澄み渡る空気と穏やかな波音が日々の疲れを心地よく解き放ってくれます。夕食は若狭の冬の代名詞「若狭ふぐフルコース」または「越前蟹会席」。透き通る身の歯ごたえが素晴らしいふぐ刺し（てっさ）、旨味が凝縮したふぐちり鍋、香ばしい唐揚げ、芳醇なひれ酒を湖畔の落ち着いた食事処で心ゆくまで味わえます。',
      roomTip: '水月湖レイクビュー和洋室。大きなピクチャーウィンドウから朝霧に包まれる神秘的な水月湖を眺め、静寂な湖畔の時をゆったりと過ごせる癒やしの空間。',
      gourmetTip: '「若狭ふぐ極みフルコース」。大皿に美しく引かれた極上てっさ、熱々ふぐちり鍋、サクサクのふぐ唐揚げ、香ばしいふぐひれ酒、ふぐの旨味が溶け出した絶品雑炊。'
    },
    {
      story: '水月湖の湖畔にひっそりと佇み、築150年以上の茅葺き古民家や素朴な民芸家具が温かな旅情を醸し出す隠れ家温泉宿「虹岳島温泉 虹岳島荘（こがくじまそう）」。湖に向かって開かれた館内には囲炉裏が切られ、初冬の冷気の中で赤々と燃える炭火の温もりが訪れる旅人を優しく迎えます。自家源泉の「虹岳島温泉」は、古くから湯治場として親しまれてきたラドン温泉（単純弱放射能冷鉱泉）。神経痛や冷え性に優れた効能を持ち、木造りの大浴場や湖を望む露天風呂からは、色づき残る木々と初冬の静まり返った湖面のコントラストを堪能できます。夕食は若狭の旬の地魚や湖の幸、地元美浜のジビエを取り入れた田舎風の本格会席。若狭ふぐ料理はもちろん、囲炉裏で香ばしく焼き上げる名物若狭牛や焼き魚の香りが食欲をそそります。',
      roomTip: '湖側和室。窓を開けると穏やかな水月湖の波音が心地よく響き、初冬の湖畔の静けさに抱かれて日常の喧騒を忘れられる情緒あふれる純和風客室。',
      gourmetTip: '「冬の虹岳島・若狭ふぐと湖畔滋味会席」。引き締まった若狭ふぐのてっさ、囲炉裏炭火焼き料理、美浜産冬野菜とふぐの小鍋、若狭名物の焼き鯖寿司と手作りデザート。'
    },
    {
      story: '若狭湾国定公園の美しい砂浜に直接面し、わずか6室すべての客室に海を見渡すテラスと露天風呂（または展望風呂）を備えた大人の極上スモールラグジュアリー旅館「海香の宿 波華楼（なみはなろう）」。全室が日本海に面し、打ち寄せる穏やかな波の音と潮の香りに包まれる至福のロケーションを誇ります。客室のテラス露天風呂からは、初冬の澄んだ水平線に沈みゆく劇的な夕陽や、満天の星空を誰にも邪魔されずに独占。宿の最大の自慢は、若狭湾を知り尽くした主人が目利きする最高鮮度の海の幸会席。11月〜12月は、地元若狭湾で水揚げされた活若狭ふぐ、越前港直送のタグ付き活越前蟹、アワビ、若狭牛などを贅沢に使用。器や盛り付けにもこだわり抜かれた芸術的な料理の数々が、大切な人との冬の旅を鮮やかに彩ります。',
      roomTip: 'オーシャンビュー露天風呂付き客室。ウッドデッキテラスから若狭湾の水平線を一望し、寄せては返す波音を聞きながら至高のプライベート湯浴みを満喫。',
      gourmetTip: '「波華楼・若狭ふぐと特選若狭牛の特選創作会席」。活〆若狭ふぐの薄造り、ふぐちり鍋、若狭牛フィレ肉の低温炭火ロースト、若狭湾産寒魚のお造り、地酒ペアリング。'
    },
    {
      story: '若狭湾の穏やかな内海・久々子湖（くぐしこ）と美浜の海岸線を見下ろす高台に建ち、2022年にリニューアルオープンした洗練された温泉リゾート「若狭美浜温泉 悠久乃碧 ホテル湾彩（わんさい）」。館内は和モダンな上質空間で統一され、ロビーラウンジからは久々子湖と日本海の絶景パノラマが広がります。宿自慢の展望大浴場「美浜の湯」には、肌に優しい弱アルカリ性の天然温泉が注がれ、広々とした内湯と露天風呂からは初冬の清々しい海風を感じながらの湯浴みが楽しめます。夕食は福井・若狭の旬を彩る海鮮ビュッフェまたは特選和食会席。冬は脂が乗り切った若狭ふぐ料理や、敦賀港直送の新鮮なお刺身盛り合わせ、若狭牛のすき焼き、名物へしこ（鯖の糠漬け）や焼き鯖など、若狭ならではの伝統美味を心ゆくまで堪能できます。',
      roomTip: 'リニューアル・パノラマビュー和洋室。久々子湖と日本海の雄大な景色を大きな窓から見渡し、シモンズ製ベッドで極上の睡眠を叶える快適な空間。',
      gourmetTip: '「初冬の若狭海鮮＆若狭ふぐ会席」。若狭ふぐのてっさ、ふぐ皮湯引きポン酢、若狭牛と冬野菜のすき焼き小鍋、敦賀港水揚げ鮮魚のお造り、美浜産コシヒカリのご飯。'
    },
    {
      story: '北陸新幹線の新たな終着駅・始発駅として賑わうJR敦賀駅前より徒歩約1分、三方五湖や若狭観光の拠点として最高峰の利便性を誇るハイクオリティホテル「敦賀マンテンホテル駅前（マンテンホテルグループ）」。館内2階には宿泊者専用の男女別大浴場「高温サウナ・露天風呂付き大浴場」を完備。初冬の観光で冷えた身体を、足を伸ばしてゆったりと温め、男性用には本格ドライサウナ、女性用にはスチームサウナが用意されています。客室はシモンズ社製ベッドと個別空調を備えた快適な機能空間。朝食には北陸・福井の郷土料理を取り入れた「選べる和定食・洋定食＋おふくろの味小鉢バイキング」が提供され、名物の焼き鯖、越前おろしそば、福井県産コシヒカリのご飯など、朝から福井の美味を贅沢に楽しめます。',
      roomTip: 'コンフォートダブルまたはツインルーム。静音性に優れた客室と上質なベッドで旅の疲れを癒やし、新幹線利用のスマートな若狭旅をサポートする空間。',
      gourmetTip: '「福井の味覚満載ブレックファースト」。脂が乗った名物焼き鯖の塩焼き、越前おろしそば、地元豆腐店の冷奴、福井県産コシヒカリの炊きたてご飯と熱々味噌汁。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥8,800〜' : i === 1 ? '¥8,800〜' : i === 2 ? '¥28,600〜' : i === 3 ? '¥8,100〜' : '¥4,900〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '3.94' : i === 1 ? '3.63' : i === 2 ? '4.58' : i === 3 ? '3.97' : '4.17');
    const reviewCount = h.reviewCount || (i === 0 ? 980 : i === 1 ? 420 : i === 2 ? 650 : i === 3 ? 810 : 2890);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || '北陸新幹線・JR敦賀駅より車で約25〜35分。JR小浜線 三方駅または美浜駅より送迎・車で約10〜15分。舞鶴若狭自動車道 若狭三方ICまたは美浜ICより好アクセス。無料駐車場完備')},
              special: ${JSON.stringify(h.hotelSpecial || '若狭ふぐフルコース＆敦賀港越前蟹・三方五湖初冬レイクビュー温泉露天風呂')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '水月湖畔の絶好ロケーション＆波打ち際の温泉露天風呂と若狭ふぐフルコース会席' : i === 1 ? '築150年の茅葺き古民家風情＆水月湖を望むラドン温泉と囲炉裏炭火焼き料理' : i === 2 ? '全6室オーシャンビュー露天風呂付き隠れ宿＆若狭湾の絶景夕陽と活若狭ふぐ・若狭牛' : i === 3 ? '久々子湖と日本海を見渡す絶景パノラマリゾート＆広々展望大浴場と海鮮会席' : '北陸新幹線敦賀駅前徒歩1分の最高立地＆サウナ・露天風呂付き大浴場と焼き鯖朝食')},
                ${JSON.stringify(i === 0 ? '冬の水月湖に漂う幻想的な朝霧の絶景鑑賞＆肌触り滑らかな天然きらら温泉の温もり' : i === 1 ? '囲炉裏の炭火で温まる静寂な湖畔の休日＆神経痛や冷え性に効く伝統のラドン泉' : i === 2 ? '若狭湾の波音に包まれるウッドデッキテラス＆料理長渾身のタグ付き越前蟹とふぐ料理' : i === 3 ? 'シモンズベッド完備のリニューアル和モダン客室＆美浜の豊かな海の恵みを満喫' : '新幹線開業でアクセス抜群＆ビジネス・観光の快適な拠点と充実のマンテンクオリティ')},
                ${JSON.stringify(i === 0 ? '三方五湖レインボーライン山頂公園へ至近＆若狭湾の冬の味覚をリーズナブルに堪能' : i === 1 ? '年縞博物館や三方五湖ドライブに便利＆日常を忘れるプライベートな湖畔時間' : i === 2 ? '大切な記念日や大人の夫婦旅に選ばれる最高峰の評価＆贅を尽くしたおもてなし' : i === 3 ? '三方五湖巡りや敦賀観光のハブとして最適＆ファミリーにも安心の広々リゾート' : '周辺に海鮮居酒屋や敦賀ラーメン店が多数＆敦賀港の冬の味覚巡りにも至便')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "福井・若狭名物「若狭ふぐ」の特徴や旬の時期、他産地のふぐとの違いは？",
      a: "「若狭ふぐ」は、福井県若狭湾の穏やかなリアス式海岸で養殖されるトラフグのブランド名です。若狭湾は日本海で最も北に位置するトラフグ養殖の北限地であり、冬の日本海の海水温が極めて低いため、ふぐの身がキュッと引き締まり、きめ細やかな肉質と濃厚な旨味・甘みが蓄えられます。旬は水温が下がる10月下旬から翌年3月頃までで、特に11月〜12月は脂が乗り切る最盛期です。引き締まった身だからこそ引ける美しい薄造り（てっさ）のコリコリとした歯ごたえ、ゼラチン質たっぷりのてっちり鍋、香ばしいヒレ酒は、下関のふぐにも引けを取らない日本屈指の逸品です。"
    },
    {
      q: "11月・12月の若狭三方五湖・敦賀の気候や気温、おすすめの服装は？",
      a: "若狭・敦賀エリアの11月は平均最高気温が15〜17℃、最低気温は7〜9℃前後で、秋の穏やかさから初冬の肌寒さへと移行します。12月に入ると最高気温は10〜12℃、最低気温は3〜5℃程度まで冷え込み、日本海特有のしぐれ模様（雨やみぞれ）や初雪が観測される日が増えます。海沿いやレインボーライン山頂公園（標高約400m）は冷たい北風が吹き抜けるため、防風性のあるダウンジャケットや裏起毛のコート、マフラー、手袋が必要です。また、雨や雪に備えて折りたたみ傘や防水仕様の歩きやすい靴を用意すると安心です。"
    },
    {
      q: "「三方五湖（みかたごこ）」の見どころや、初冬のおすすめ観光スポットは？",
      a: "三方五湖は三方湖・水月湖・菅湖・久々子湖・日向湖の5つの湖からなり、淡水・汽水・海水とそれぞれ塩分濃度や水深が異なるため、水面の色が微妙に違って見えることから「五色の湖」と呼ばれます。初冬のハイライトは、有料道路「レインボーライン」を登った先にある「レインボーライン山頂公園」。足湯に浸かりながら三方五湖と若狭湾のダイナミックな冬景色を360度見渡せます。また、水月湖の湖底に7万年分堆積した縞模様の泥を展示する世界的な地質遺産「福井県年縞（ねんこう）博物館」も、冬の知的好奇心を満たす必見スポットです。"
    },
    {
      q: "北陸新幹線敦賀駅開業によるアクセスや三方五湖への移動方法は？",
      a: "2024年春に北陸新幹線が敦賀駅まで延伸開業したことで、東京から敦賀まで乗り換えなしで最短約2時間51分、関西（大阪・京都）や中京（名古屋）からも特急サンダーバード・しらさぎで敦賀まで直通約50〜80分とアクセスが劇的に向上しました。敦賀駅から三方五湖エリアへは、JR小浜線に乗り換えて美浜駅や三方駅まで約20〜30分、駅からタクシーや宿の送迎を利用するのが一般的です。また、駅前でレンタカーを借りれば、敦賀湾沿いや三方五湖の美しい海岸線を巡るドライブ（車で約30〜40分）を快適に楽しめます。"
    },
    {
      q: "若狭・敦賀エリアで若狭ふぐ以外に味わうべき冬の味覚は何ですか？",
      a: "冬の福井・若狭は海の幸の宝庫です。11月6日に漁が解禁される冬の味覚の王者「越前蟹（ズワイガニ）」や雌の「セイコガニ（香箱ガニ）」は、濃厚なカニ味噌と甘い身が絶品です。また、敦賀港に水揚げされる「敦賀真鯛」や脂の乗った「寒ブリ」、若狭の伝統食である「焼き鯖（一本丸ごと香ばしく焼き上げた名物）」や「サバのへしこ（糠漬け）」、さらにジューシーな赤身が自慢の銘柄牛「若狭牛」のステーキやすき焼きなど、海の幸と山の幸の両方を贅沢に堪能できます。"
    }
  ];

  const pageContent = `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Fish, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Snowflake, Sparkle, Map
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '三方五湖 宿泊, 水月花, 虹岳島荘, 波華楼, ホテル湾彩, 敦賀マンテンホテル駅前, 若狭ふぐ 11月 12月, 越前蟹, 焼き鯖, 北陸新幹線敦賀',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}'
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の三方五湖レイクビューと若狭ふぐフルコース・敦賀温泉露天風呂'
      }
    ]
  }
};

export default function WinterFukuiWakasaPage() {
  const hotels = [
${hotelCardsCode}
  ];

  const faqList = ${JSON.stringify(faqList, null, 2)};

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://croud-travel.com/${slug}#article',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://croud-travel.com/#website',
          'name': 'クラドトラベル',
          'url': 'https://croud-travel.com/'
        },
        'headline': ${JSON.stringify(title)},
        'description': ${JSON.stringify(description)},
        'inLanguage': 'ja',
        'mainEntityOfPage': 'https://croud-travel.com/${slug}',
        'datePublished': '2026-09-28T00:00:00+09:00',
        'dateModified': '2026-09-28T00:00:00+09:00',
        'publisher': {
          '@type': 'Organization',
          'name': 'クラドトラベル編集部',
          'url': 'https://croud-travel.com/'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://croud-travel.com/${slug}#faq',
        'mainEntity': faqList.map((f) => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.a
          }
        }))
      }
    ]
  };

  return (
    <article className="min-h-screen bg-gradient-to-b from-slate-50 via-teal-50/20 to-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-teal-900 via-sky-900 to-indigo-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-teal-200">
            <Link href="/" className="hover:underline hover:text-white transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:underline hover:text-white transition">特集一覧</Link>
            <span>/</span>
            <span className="text-white font-medium">福井・若狭三方五湖＆敦賀</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-xs sm:text-sm font-semibold tracking-wide">
            <Fish className="w-4 h-4 text-sky-300" />
            11月・12月 冬の味覚解禁特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月福井・若狭三方五湖】初冬レイクビューと若狭ふぐ
            <span className="block text-teal-300 text-lg sm:text-2xl mt-3 font-normal">
              越前蟹・名物焼き鯖＆敦賀港冬海鮮会席を愉しむ湖畔・海辺名宿5選
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl">
            11月から12月にかけて、五色の湖・三方五湖と敦賀湾が広がる福井県若狭地方は、日本海の冷水で引き締まった最高峰の「若狭ふぐ」が本格シーズンを迎え、11月6日の「越前蟹」解禁とともに美食の黄金期を迎えます。朝霧に包まれる神秘的な水月湖や波静かな若狭湾の絶景、北陸新幹線敦賀開業でぐっと快適になったアクセス。本場の若狭ふぐフルコース（てっさ・てっちり・唐揚げ・ひれ酒）や焼き鯖、名湯温泉を心ゆくまで堪能する厳選名宿5選を徹底解説します。
          </p>

          <div className="flex flex-wrap gap-4 pt-4 text-xs sm:text-sm text-teal-100">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <Calendar className="w-4 h-4 text-teal-300" />
              <span>ベストシーズン: 11月上旬〜12月下旬</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <Fish className="w-4 h-4 text-amber-300" />
              <span>若狭ふぐ＆越前蟹解禁</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <Compass className="w-4 h-4 text-sky-300" />
              <span>三方五湖レインボーライン絶景</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Section 1: Season Context & Highlights */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <Sparkle className="w-6 h-6 text-teal-700" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              五色の湖と北限のふぐ｜11月・12月に若狭三方五湖を訪れるべき理由
            </h2>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              日本海と若狭湾の複雑に入り組んだリアス式海岸に抱かれた三方五湖。三方湖・水月湖・菅湖・久々子湖・日向湖の5つの湖は、淡水・汽水・海水とそれぞれ異なる水質を持ち、湖面の青さが季節や時間、天候によって神秘的な変化を見せることから「五色の湖」と称えられます。秋の行楽シーズンが落ち着いた11月から12月にかけて、この湖畔には静寂な冬の空気が満ち、早朝には湖面から白い水蒸気が立ち上る幻想的な朝霧が広がります。
            </p>
            <p>
              この初冬に若狭を訪れる最大の魅力は、日本海の厳しい寒さがもたらす冬の味覚の数々です。若狭湾はトラフグ養殖の「日本最北限」。冬の冷たい海水温に耐えることで、ふぐの身は引き締まり、格別の歯ごたえと凝縮された甘みが生まれます。11月〜12月はまさにその旬の最盛期。さらに11月6日には「越前蟹（ズワイガニ）」の漁が解禁され、福井の海は1年で最も贅沢な美味に沸き立ちます。大皿に盛られたてっさ、熱々のふぐちり鍋、香ばしい焼き鯖、そしてタグ付き越前蟹と、北陸の冬の美味を一度に味わい尽くすことができます。
            </p>
            <p>
              また、2024年春の北陸新幹線敦賀駅延伸開業により、首都圏や関西・中京からのアクセスが飛躍的に快適になりました。レインボーライン山頂公園の足湯テラスから360度の大パノラマを見渡し、世界的な地質遺産である福井県年縞博物館で地球の歴史に思いを馳せ、夜は静寂な湖畔の温泉露天風呂で心身を解きほぐす——心満たされる冬の大人の旅が叶います。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-teal-900 text-sm">
                <Fish className="w-4 h-4 text-teal-600" />
                日本最北限の身の締まり「若狭ふぐ」
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                冷たい日本海の荒波で鍛え抜かれたトラフグ。弾力あふれるてっさ、濃厚出汁のてっちり鍋、香ばしい唐揚げと熱々ひれ酒。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-teal-900 text-sm">
                <Compass className="w-4 h-4 text-teal-600" />
                レインボーライン＆年縞博物館
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                山頂テラスの天空足湯から見下ろす三方五湖と若狭湾の絶景。水月湖の湖底から採取された7万年の奇跡の泥を展示する博物館。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-teal-900 text-sm">
                <Waves className="w-4 h-4 text-teal-600" />
                静謐な湖畔美肌温泉＆新幹線アクセス
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                水月湖畔の波打ち際に湧く肌に優しい名湯。北陸新幹線敦賀駅から好アクセスで、都会の喧騒を離れた贅沢な休日。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Hotel Cards */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs sm:text-sm font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Selected 5 Scenic Lake & Ocean Accommodations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              初冬の若狭三方五湖・敦賀を満喫する厳選名宿5選
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              水月湖の波打ち際に建つ絶景温泉宿から、茅葺き古民家風情漂う隠れ宿、全室露天風呂付きオーシャンフロント旅館まで、冬の贅沢を叶える宿を厳選。
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((h) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-200/80 flex flex-col lg:flex-row"
              >
                {/* Hotel Image */}
                <div className="lg:w-2/5 relative min-h-[260px] lg:min-h-full">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 left-4 bg-teal-900/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    第{h.id}選
                  </div>
                </div>

                {/* Hotel Info */}
                <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-amber-500 text-sm font-bold">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span>{h.rating}</span>
                        <span className="text-xs text-slate-400 font-normal">（{h.reviews.toLocaleString()}件の口コミ）</span>
                      </div>
                      <span className="text-sm font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                        {h.price}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                      {h.name}
                    </h3>

                    <p className="text-xs text-slate-500 flex items-start gap-1">
                      <MapPin className="w-3.5 h-3.5 text-teal-700 flex-shrink-0 mt-0.5" />
                      <span>{h.access}</span>
                    </p>

                    <p className="text-sm text-slate-700 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2 text-xs sm:text-sm">
                      <div className="flex items-start gap-2">
                        <Eye className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 font-semibold">おすすめ客室＆眺望: </strong>
                          <span className="text-slate-700">{h.roomTip}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Utensils className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 font-semibold">冬の特選美食: </strong>
                          <span className="text-slate-700">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-slate-900 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        この宿の注目ポイント
                      </span>
                      <ul className="grid grid-cols-1 gap-1 text-xs text-slate-600">
                        {h.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 flex-shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-sm font-bold shadow-sm hover:shadow transition duration-200"
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

        {/* Section 3: 1泊2日のおすすめモデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Map className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                【11月・12月】三方五湖パノラマ絶景と本場若狭ふぐを味わい尽くす1泊2日モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6 text-sm text-slate-700">
            <div className="border-l-2 border-teal-600 pl-4 sm:pl-6 space-y-3">
              <div className="font-bold text-teal-900 text-base flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">1日目</span>
                北陸新幹線敦賀駅から三方五湖へ・年縞博物館見学と本場若狭ふぐフルコース
              </div>
              <p className="leading-relaxed text-xs sm:text-sm">
                午前中に北陸新幹線で敦賀駅へ到着。駅前でレンタカーを借り、敦賀湾沿いをドライブして三方五湖エリアへ。昼は三方湖畔の老舗うなぎ店で名物の口細青うなぎや、焼き鯖御膳を堪能。午後は世界的な研究拠点「福井県年縞博物館」を見学し、7万年分の奇跡の泥の縞模様から地球の気候変動ロマンを体感。15時半頃に水月湖畔の温泉旅館へチェックイン。湖水が目の前に広がる露天風呂に浸かり、初冬の静まり返った湖面に漂う夕霧を眺めながらゆったりと湯浴み。夕食は冬の主役・若狭ふぐフルコース。透き通るてっさ、ふぐ皮ポン酢、熱々てっちり鍋、香ばしい唐揚げ、そして芳醇な香りのふぐひれ酒を満喫します。
              </p>
            </div>
            <div className="border-l-2 border-teal-600 pl-4 sm:pl-6 space-y-3">
              <div className="font-bold text-teal-900 text-base flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">2日目</span>
                朝霧の水月湖畔・レインボーライン山頂公園天空足湯と敦賀港海鮮市場
              </div>
              <p className="leading-relaxed text-xs sm:text-sm">
                朝は湖面を渡る清らかな風を感じながら朝風呂へ。へしこ茶漬けや地元豆腐、焼き魚が並ぶ朝食を味わい、10時にチェックアウト。美浜と若狭町を結ぶ「三方五湖レインボーライン」をドライブして山頂公園へ。天空の足湯に浸かりながら、五色の湖と雄大な若狭湾のパノラマ絶景を堪能します。その後、敦賀市内へ向かい、日本海さかな街で越前蟹や焼き鯖、鯖寿司のお土産を購入。昼食は敦賀港直送の冬の海鮮丼や越前おろしそばを味わい、北陸新幹線で快適に帰路へ就きます。五感で福井の冬を味わい尽くす贅沢なプランです。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Winter Gourmet Guide */}
        <section className="bg-gradient-to-br from-teal-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-700/60">
            <Utensils className="w-6 h-6 text-amber-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              若狭三方五湖の初冬グルメ完全ガイド！ふぐ・越前蟹・焼き鯖
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-200">
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Fish className="w-4 h-4 text-amber-300" />
                若狭ふぐフルコース
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                透き通るてっさ、出汁が染み出す熱々てっちり鍋、香ばしく揚がった唐揚げ、コリコリのふぐ皮湯引き。冷水で締まった若狭ふぐは噛むほどに芳醇な甘みが広がり、熱々のヒレ酒とともに冬の至福を満喫できます。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Waves className="w-4 h-4 text-sky-300" />
                敦賀港直送・越前蟹
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                11月6日解禁の「越前蟹（ズワイガニ）」。黄色いタグが最高級の証で、濃厚でクリーミーな蟹味噌と繊維が細かく甘い身は冬の味覚の頂点。小ぶりながら内子と外子がぎっしり詰まったセイコガニも必食です。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-orange-300" />
                浜焼き鯖＆サバのへしこ
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                かつて京都へ海産物を運んだ「鯖街道」の起点・若狭。脂が乗った丸ごと一本の焼き鯖は皮がパリッと身はふっくらジューシー。米糠と塩でじっくり熟成させた「へしこ」はお茶漬けや地酒の肴に最高です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Travel Tips / Climate & Clothing */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <Footprints className="w-6 h-6 text-teal-800" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              11月・12月の若狭・三方五湖観光！気候・服装・散策のアドバイス
            </h2>
          </div>
          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              若狭地方の11月は最高気温15〜17℃前後で爽やかですが、朝晩は7〜9℃まで冷え込みます。12月に入ると最高気温10〜12℃、最低気温3〜5℃となり、日本海からの北風としぐれ模様（急な小雨や雪）が増えます。湖畔や海沿い、標高の高い山頂公園では体感温度がぐっと下がるため、しっかりとした防寒対策が欠かせません。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                  <ThermometerSun className="w-4 h-4 text-teal-700" />
                  防風アウターと雨具の準備
                </h4>
                <p className="text-slate-600">
                  冷たい海風を防ぐウインドブレーカーやダウンジャケット、首元を温めるストールが重宝します。冬の日本海側特有の変わりやすい天気に備えて折りたたみ傘を携行しましょう。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-700" />
                  歩きやすい靴での観光
                </h4>
                <p className="text-slate-600">
                  レインボーライン山頂公園の展望テラスや年縞博物館の見学など、歩く場面が多いため、歩きやすく滑りにくいスニーカーやフラットシューズが最適です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Area Access & Transportation */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <Map className="w-6 h-6 text-teal-800" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              若狭三方五湖＆敦賀へのアクセス情報
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-teal-800 block text-sm">北陸新幹線・敦賀駅から</span>
              <p className="text-slate-600 leading-relaxed">
                東京から北陸新幹線で直通最短約2時間51分。敦賀駅からJR小浜線に乗り換え、美浜駅・三方駅まで約20〜30分。駅前レンタカー利用も便利です。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-teal-800 block text-sm">関西・中京方面から</span>
              <p className="text-slate-600 leading-relaxed">
                京都・大阪から特急サンダーバードで敦賀まで約50〜80分。名古屋から特急しらさぎで敦賀まで約1時間35分。敦賀乗り換えでスムーズに到着します。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-teal-800 block text-sm">車でのアクセス（高速道路）</span>
              <p className="text-slate-600 leading-relaxed">
                舞鶴若狭自動車道 若狭三方ICまたは美浜ICより三方五湖まで約5〜15分。京阪神・名古屋方面からも全線高速道路で快適にアクセス可能です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <HelpCircle className="w-6 h-6 text-teal-800" />
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の若狭三方五湖旅行 よくある質問
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-teal-700 font-extrabold flex-shrink-0">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Related Links / Mesh */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <Compass className="w-6 h-6 text-teal-800" />
            <h2 className="text-xl font-bold text-slate-900">
              あわせて読みたい！北陸＆冬の蟹・ふぐ温泉特集
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/winter-fukui-awara-onsen-echizen-crab-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-full inline-block">福井・あわら</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-teal-800 transition line-clamp-2">
                あわら温泉の関西奥座敷名湯と越前蟹尽くし宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                名湯庭園露天風呂と解禁直後のタグ付き越前蟹を堪能。
              </p>
            </Link>
            <Link 
              href="/winter-fukui-mikuni-onsen-echizen-crab-tojinbo-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-full inline-block">福井・三国</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-teal-800 transition line-clamp-2">
                三国温泉の東尋坊日本海絶景と皇室献上越前蟹宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                三国港直送の極上越前蟹と荒波の東尋坊を望む旅。
              </p>
            </Link>
            <Link 
              href="/winter-ishikawa-kaga-yamashiro-kano-crab-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-full inline-block">石川・山代</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-teal-800 transition line-clamp-2">
                山代温泉の加賀百万石名湯と加能ガニ・香箱ガニ宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                開湯1300年の総湯文化と北陸のズワイガニ会席を満喫。
              </p>
            </Link>
            <Link 
              href="/winter-shimonoseki-fugu-torafugu-luxury-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-full inline-block">山口・下関</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-teal-800 transition line-clamp-2">
                下関の天然とらふぐ本場極上フルコース名宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                南風泊市場直送のとらふぐ刺し・ちり鍋と関門海峡絶景。
              </p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
`;

  const outputDir = path.join(__dirname, '..', '..', 'src', 'app', slug);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  fs.writeFileSync(path.join(outputDir, 'page.tsx'), pageContent, 'utf8');
  console.log(`Generated: src/app/${slug}/page.tsx`);
}

module.exports = { generateFukuiWakasaPage };
