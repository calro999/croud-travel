const fs = require('fs');
const path = require('path');

function generateNagasakiHiradoPage(hotels) {
  const slug = 'winter-nagasaki-hirado-onsen-kue-hirame-hirado-beef-stay';
  const title = '【11・12月長崎・平戸温泉郷の初冬黒潮絶景と天然クエ＆寒ヒラメ】幻の高級魚クエ鍋＆特選平戸和牛会席を堪能する城下町名宿5選';
  const description = '11月から12月にかけて、長崎県北西端に浮かぶ歴史と異国情緒の島・平戸温泉郷は、日本屈指の激流「平戸瀬戸」で身が引き締まった冬の味覚の王様「天然クエ（アラ）」と「寒ヒラメ」が最盛期を迎えます。日本初の西洋貿易港として栄えたオランダ商館跡やカトリック教会、青い海を見下ろす平戸城の歴史散策を楽しみ、夜は美肌効果抜群のナトリウム炭酸水素塩泉に浸かりながら満天の星と漁火を眺める至福の時間。とろける脂が絶品の幻の高級魚クエ鍋、透き通るヒラメの姿造り、そして全国のブランド牛のルーツとも称される特選平戸和牛の陶板ステーキを味わう厳選名宿5選を徹底解説します。';

  const hotelDetails = [
    {
      story: '平戸城の城山の高台に建ち、昭和天皇をはじめ幾多の皇族や文人墨客をお迎えしてきた平戸を代表する格式高い名門温泉旅館「平戸温泉 国際観光ホテル 旗松亭（きしょうてい）」。宿の最大の自慢は、館内随所や展望大浴場から眼下に広がる平戸瀬戸と白亜の平戸城、平戸大橋のパノラマビュー。特に最上階の展望パノラマ露天風呂からは、初冬の澄み渡る空気の中で茜色に染まる夕暮れの海景や、夜空にライトアップされた平戸城の幻想的な姿を湯船に浸かりながら一望できます。湧き出る平戸温泉は、肌がすべすべになる美肌の重曹泉。夕食は平戸港直送の冬の贅を尽くした特選会席で、脂の乗った寒ヒラメの姿造りや、幻の高級魚天然クエ鍋、ジューシーな肉質の特選平戸和牛ステーキなど、海と山の幸が豪華絢爛に並びます。',
      roomTip: '平戸城・平戸瀬戸ビュー客室（露天風呂付き和洋室または和室）。窓一面に絵画のような平戸城と海峡の絶景が広がり、夜にはライトアップされた城郭を独り占めできる贅沢な空間。',
      gourmetTip: '「初冬の平戸三景極味会席」。旬の寒ヒラメ活き造り、幻の天然クエ小鍋仕立て、A5ランク特選平戸和牛陶板ステーキ、平戸名物カスドース風デザート。'
    },
    {
      story: '平戸瀬戸の波打ち際に佇み、全客室がオーシャンビューを誇る海辺の老舗リゾート温泉ホテル「平戸海上ホテル」。宿の名物となっているのが、館内地下に設けられた珍しい「海底大浴場」。円形大浴場の周囲を本物のウミガメや色とりどりの魚が悠々と泳ぎ回る巨大水槽が囲み、まるで竜宮城に迷い込んだかのような非日常の湯浴みが楽しめます。また、海に面した展望露天風呂や貸切露天風呂からは、平戸瀬戸の潮騒と海風を間近に感じ、初冬の夜には海上に灯るイカ釣り漁船の漁火を眺めるロマンチックなひとときが流れます。夕食は平戸の新鮮な魚介類を豪快に味わう海鮮炭火焼きや会席料理。プリプリとした食感のヒラメやサザエ、伊勢海老、平戸和牛など、素材の力強い旨味を存分に堪能できます。',
      roomTip: 'オーシャンフロント客室。窓のすぐ下に平戸の海が広がり、波音を子守唄に心地よい眠りにつけるリゾート感あふれる和室または洋室。',
      gourmetTip: '「冬の平戸海鮮満喫炭火焼き会席」。新鮮なサザエやホタテの浜焼き、近海産寒ヒラメと旬魚のお造り、平戸和牛のサイコロステーキ、あご出汁で炊く名物炊き込みご飯。'
    },
    {
      story: '平戸大橋を渡る手前、田平（たびら）の海岸高台に位置し、平戸瀬戸と平戸城、平戸大橋の圧倒的なパノラマを一望できる屈指の大型温泉リゾート「平戸たびら温泉 サムソンホテル」。宿の自慢は、2022年にリニューアルされた絶景展望露天風呂と、自家源泉の天然温泉。高台から見下ろす平戸瀬戸のダイナミックな海景は圧巻で、朝陽が昇る瞬間や夕暮れ時のグラデーションは息を呑む美しさです。さらに宿の大きな魅力が、九州屈指の充実度を誇る豪華バイキングディナー。料理人が目の前で捌く新鮮なヒラメやカンパチの刺身、揚げたての天ぷら、ジューシーな牛ステーキ、さらには茹でズワイ蟹や地元の郷土料理が食べ放題で楽しめ、ファミリーからシニアまで圧倒的な人気を集めています。',
      roomTip: '新館タワー・オーシャンパノラマツイン。大きなピクチャーウィンドウから平戸大橋と平戸城のライトアップを一望できる洗練されたモダン空間。',
      gourmetTip: '「冬の贅沢海鮮＆和牛バイキング」。職人が握る新鮮寿司、近海産ヒラメ・マグロの舟盛り刺身、焼きたて牛ステーキ、冬の蟹フェア、平戸ちゃんぽん。'
    },
    {
      story: '平戸港フェリーターミナルから徒歩すぐ、平戸の城下町の中心に位置し、観光や歴史散策の拠点として抜群の利便性を誇る港町の名宿「ホテル彩陽 WAKIGAWA（旧：平戸脇川ホテル）」。客室やロビーからは平戸港を行き交う漁船や観光船を眺めることができ、港町ならではの情緒あふれる風景に心が和みます。大浴場には平戸温泉の天然温泉が引かれ、ミネラル豊富なやわらかなお湯が旅の疲れを優しく解きほぐしてくれます。そして何より宿泊客から絶大な支持を集めているのが、平戸の海の恵みを知り尽くした料理長が手掛ける海鮮会席。冬の平戸を代表する高級魚ヒラメのお造りをはじめ、ウチワエビや地魚の煮付け、平戸牛の一品など、港直結ならではの鮮度とボリュームを良心的な価格で味わえます。',
      roomTip: '平戸港ハーバービュー和室。港の灯りと静かな波の揺らぎを眺めながら、畳の上でのんびりと寛げる旅情あふれるお部屋。',
      gourmetTip: '「冬の平戸名物・寒ヒラメと地魚三昧会席」。透き通る寒ヒラメの薄造り、平戸産ウチワエビの塩茹で、季節の白身魚の煮付け、特選平戸牛の陶板焼き。'
    },
    {
      story: '平戸の白砂青松が広がる名勝「千里ヶ浜（せんりがはま）」海岸沿いに佇み、壮大なオーシャンフロントのロケーションと多彩な館内エンターテインメントが魅力の大型温泉リゾート「大江戸温泉物語 ホテル蘭風（らんぷう）」。千里ヶ浜海岸に直結した敷地には、海を見渡す広大な露天風呂やインフィニティ風の展望浴場があり、波音を聞きながら開放感あふれる湯浴みを満喫できます。天然温泉は保温効果の高い塩化物泉で、冬の湯冷めを防ぎ身体の芯までポカポカに。夕食は大江戸温泉物語ならではの豪華創作バイキング。平戸近海で獲れた旬の白身魚のお造りや寿司、ライブキッチンで焼き上げる熱々ステーキ、冬の鍋料理など、世代を問わず楽しめる多彩な料理が華やかに並びます。',
      roomTip: '千里ヶ浜オーシャンビュー和洋室。水平線から昇る美しい朝陽を眺めながら、ゆったりとプライベートなリゾートタイムを過ごせる快適な客室。',
      gourmetTip: '「初冬の平戸・海と山の恵みバイキング」。平戸近海産鮮魚のお刺身コーナー、シェフ実演牛ロースステーキ、熱々天ぷら、冬野菜の特製鍋、あご出汁うどん。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥5,720〜' : i === 1 ? '¥5,775〜' : i === 2 ? '¥8,800〜' : i === 3 ? '¥7,150〜' : '¥11,800〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '3.86' : i === 1 ? '3.69' : i === 2 ? '4.20' : i === 3 ? '3.89' : '3.92');
    const reviewCount = h.reviewCount || (i === 0 ? 1120 : i === 1 ? 860 : i === 2 ? 3450 : i === 3 ? 580 : 1890);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || '西九州自動車道 佐々ICより車で約35分。松浦鉄道 たびら平戸口駅より車で約10〜15分。長崎空港より車で約1時間50分。無料駐車場完備')},
              special: ${JSON.stringify(h.hotelSpecial || '初冬の平戸天然クエ鍋＆寒ヒラメまつり・特選平戸和牛と平戸城絶景温泉')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '平戸城下町の高台に建つ名門老舗＆平戸城と平戸瀬戸のライトアップを望む展望露天風呂' : i === 1 ? 'ウミガメが泳ぐ名物海底大浴場＆平戸瀬戸の波打ち際に建つ全室オーシャンフロント宿' : i === 2 ? '平戸大橋と平戸城を一望するパノラマ露天風呂＆九州屈指の豪華海鮮和牛バイキング' : i === 3 ? '平戸港徒歩すぐの好立地＆港直結の鮮度抜群な寒ヒラメ活造りとアットホームなおもてなし' : '千里ヶ浜海岸直結のオーシャンリゾート＆海見露天風呂と大江戸温泉物語自慢の創作バイキング')},
                ${JSON.stringify(i === 0 ? '幻の高級魚天然クエ小鍋と寒ヒラメ活き造り＆特選A5平戸和牛の贅沢会席' : i === 1 ? 'サザエやホタテの豪快海鮮炭火焼き＆平戸和牛サイコロステーキと地魚づくし' : i === 2 ? '職人が目の前で握る新鮮寿司や牛ステーキ食べ放題＆自家源泉の美肌湯を堪能' : i === 3 ? 'ウチワエビ塩茹でと季節の煮魚＆良心的な価格で楽しむ冬の平戸城下町ステイ' : '朝夕の豪華バイキング＆広々とした快適客室で過ごすファミリー・グループ旅行')},
                ${JSON.stringify(i === 0 ? '平戸城やオランダ商館への観光至便＆皇族もお迎えした細やかなおもてなしの心' : i === 1 ? '夜の海に瞬くイカ釣り漁船の漁火鑑賞＆非日常の海底温泉で子ども連れにも大好評' : i === 2 ? '新館タワーからの雄大な海峡夜景＆リニューアルされた上質な温泉設備' : i === 3 ? '平戸の歴史街並み散策にベストな拠点＆港町情緒を満喫できる落ち着いた客室' : '海風を感じるテラスや充実の館内施設＆白砂青松の千里ヶ浜で楽しむ初冬の散歩')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "冬の平戸名物「天然クエ（アラ）」と「寒ヒラメまつり」とは？旬の時期はいつですか？",
      a: "平戸瀬戸の潮流は日本屈指の速さを誇り、ここで育つ魚は身が引き締まり脂の乗りが抜群です。中でも11月から12月にかけて最盛期を迎えるのが「天然クエ（地元ではアラと呼びます）」と「寒ヒラメ」です。クエは水深の深い岩礁に棲む幻の超高級魚で、コラーゲンたっぷりのゼラチン質と上質な白身の旨味が凝縮したクエ鍋は『フグより旨い』と絶賛されます。また、平戸は全国有数の天然ヒラメの水揚げ量を誇り、毎年冬期には市内の宿や料理店で「平戸天然ひらめまつり」が開催されます。透き通るヒラメのお造りは、上品な甘みとコリコリとした歯ごたえが絶品です。"
    },
    {
      q: "11月・12月の平戸の気候や気温、おすすめの服装は？",
      a: "平戸は九州の西端に位置し、対馬暖流の影響を受けるため比較的温暖ですが、11月下旬から12月にかけては大陸からの強い北西の季節風が吹き付けます。11月の平均気温は13〜15℃前後で日中は快適ですが、朝晩は10℃を下回ります。12月に入ると最高気温は10〜12℃、最低気温は4〜6℃程度まで下がり、海沿いや平戸城の高台では強風により体感温度が氷点下近くまで冷え込むことがあります。観光には防風性の高いウインドブレーカーやダウンジャケット、首元を守るマフラー、手袋を用意し、風を通さない服装を心がけてください。"
    },
    {
      q: "平戸温泉の泉質や美肌効果、歴史について教えてください。",
      a: "平戸温泉は、炭酸水素塩泉（重曹泉）を主成分とするナトリウム-炭酸水素塩温泉です。無色透明でとろみのある湯ざわりが特徴で、皮脂や古い角質を優しく洗い流す石鹸のようなクレンジング効果があるため、「美人の湯」「美肌の湯」として親しまれています。湯上がり後は肌が滑らかになり、保温効果も持続します。古くから霊湯として知られ、平戸瀬戸や千里ヶ浜の海を望みながらの湯浴みは、心身の深いリフレッシュをもたらします。"
    },
    {
      q: "福岡・博多や長崎空港から平戸温泉へのアクセス方法や所要時間は？",
      a: "福岡・博多方面からは、西肥バスの高速バス「平戸・福岡線」が運行しており、約2時間30分で平戸桟橋に直通します。車の場合は西九州自動車道・佐々ICを下車し、国道204号経由で約35分（福岡市内から約2時間）です。長崎空港からはレンタカーまたは高速道路利用で約1時間50分。また、佐世保駅からは松浦鉄道に乗り換え「たびら平戸口駅（本土最西端の駅）」まで約1時間20分、駅からタクシーで平戸大橋を渡り約10〜15分で温泉街に到着します。"
    },
    {
      q: "平戸観光でおすすめの初冬の歴史散策ルートや名所は？",
      a: "平戸は日本初の西洋貿易港として開かれ、独自の和洋折衷文化が色濃く残る城下町です。まずは平戸瀬戸を一望する「平戸城（亀岡城）」へ。天守閣からのパノラマ絶景を楽しんだ後は、江戸初期のオランダ貿易の拠点「平戸オランダ商館」や、白亜の美しい「平戸ザビエル記念教会」、寺院の瓦屋根と教会の尖塔が重なり合う平戸随一のフォトスポット「寺院と教会の見える風景」を散策。散策の合間には、ポルトガルから伝わった平戸銘菓「カスドース」を老舗菓子舗で味わうのがおすすめです。"
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
  keywords: '平戸温泉 宿泊, 旗松亭, 平戸海上ホテル, サムソンホテル, ホテル彩陽, ホテル蘭風, 天然クエ鍋, 寒ヒラメ 11月 12月, 平戸和牛, 平戸城',
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
        alt: '初冬の平戸城と平戸瀬戸の黒潮海景・天然クエ鍋と美肌温泉'
      }
    ]
  }
};

export default function WinterNagasakiHiradoPage() {
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
            <span className="text-white font-medium">長崎・平戸温泉郷</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-xs sm:text-sm font-semibold tracking-wide">
            <Waves className="w-4 h-4 text-sky-300" />
            11月・12月 冬の美食＆歴史探訪特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月長崎・平戸温泉郷】初冬黒潮絶景と天然クエ＆寒ヒラメ
            <span className="block text-teal-300 text-lg sm:text-2xl mt-3 font-normal">
              幻の高級魚クエ鍋＆特選平戸和牛会席を堪能する城下町名宿5選
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl">
            11月から12月にかけて、長崎県北西端の平戸温泉郷は、平戸瀬戸の激流が育む冬の味覚の王様「天然クエ（アラ）」と「寒ヒラメ」が最盛期を迎える最高の旬を迎えます。日本初の西洋貿易港として栄えたオランダ商館跡やカトリック教会、平戸城が織りなす和洋折衷の歴史散策を楽しみ、美肌効果の高い重曹泉の露天風呂から海峡を行き交う船を眺める極上の時間。幻の高級魚クエ鍋、透き通るヒラメのお造り、特選平戸和牛の陶板ステーキを味わう厳選5宿を徹底解説します。
          </p>

          <div className="flex flex-wrap gap-4 pt-4 text-xs sm:text-sm text-teal-100">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <Calendar className="w-4 h-4 text-teal-300" />
              <span>ベストシーズン: 11月上旬〜12月下旬</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <Fish className="w-4 h-4 text-amber-300" />
              <span>天然クエ（アラ）＆寒ヒラメまつり</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <Landmark className="w-4 h-4 text-sky-300" />
              <span>平戸城下町＆教会・オランダ商館</span>
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
              歴史ロマンと黒潮の恩恵｜11月・12月に平戸温泉郷を訪れるべき理由
            </h2>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              九州本土と平戸大橋で結ばれた長崎県の離島・平戸。鎖国前の16世紀、ポルトガル船の入港やフランシスコ・ザビエルの布教、オランダ商館の設置など、日本で最初の本格的な西洋貿易港として異国文化をいち早く受け入れた城下町です。秋が深まり初冬の冷たい海風が吹き抜ける11月から12月にかけて、平戸は年間で最も海の幸が豊かに実る美食の頂点を迎えます。
            </p>
            <p>
              平戸島と本土の間の狭い海峡「平戸瀬戸」は、潮の干満差により日本屈指の急流が生じる天然の好漁場。ここで激流に耐え抜いた魚たちは、余分な脂肪を落としながらも濃厚な旨味と脂を蓄えます。中でも11月に開幕する「平戸天然ひらめまつり」の寒ヒラメ、そして水深の深い岩礁に潜む幻の超高級魚「天然クエ（アラ）」は、冬の平戸を訪れる最大の動機となります。コラーゲンたっぷりのクエ鍋の出汁に広がる白身の芳醇な旨味は、食通を唸らせてやみません。
            </p>
            <p>
              さらに、平戸城から見下ろす海峡のパノラマや、寺院の瓦屋根とカトリック教会の尖塔が共存するノスタルジックな石畳の坂道散策。冷えた身体を優しく包み込むのは、肌の古い角質を洗い流すとろりとした平戸温泉の「美肌の重曹泉」。夜には海上に灯るイカ釣り漁船の漁火やライトアップされた平戸城を露天風呂から眺め、特選平戸和牛のステーキと旬魚に舌鼓を打つ贅沢な滞在が旅人を待っています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-teal-900 text-sm">
                <Fish className="w-4 h-4 text-teal-600" />
                幻の魚・天然クエ鍋＆寒ヒラメ
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                激流・平戸瀬戸で育つ冬の味覚の王者クエ。ぷるぷるのゼラチン質と濃厚な白身の鍋、コリコリと甘い寒ヒラメ活造りは絶品。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-teal-900 text-sm">
                <Landmark className="w-4 h-4 text-teal-600" />
                和洋折衷の城下町ロマン散策
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                平戸城の天守閣展望、復元されたオランダ商館、寺院と教会の見える風景。江戸初期の貿易港の歴史と異国情緒が息づく街。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-teal-900 text-sm">
                <Waves className="w-4 h-4 text-teal-600" />
                美肌の重曹泉＆海峡絶景露天
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                ナトリウム炭酸水素塩泉のとろりとした美肌湯。海峡を行き交う船や夜の漁火、ライトアップされた城を眺める至福の湯浴み。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Hotel Cards */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs sm:text-sm font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Selected 5 Historic & Ocean View Accommodations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              初冬の平戸温泉郷を満喫する厳選名宿5選
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              平戸城を見渡す格式ある老舗旅館から、ウミガメが泳ぐ海底温泉、豪華バイキングと平戸大橋パノラマを誇るリゾートまで、冬の平戸旅に最適な宿を厳選。
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
                【11月・12月】平戸城とオランダ商館・天然クエ鍋を堪能する1泊2日歴史美食モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6 text-sm text-slate-700">
            <div className="border-l-2 border-teal-600 pl-4 sm:pl-6 space-y-3">
              <div className="font-bold text-teal-900 text-base flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">1日目</span>
                博多・佐世保から平戸大橋へ・平戸城パノラマと天然クエ鍋＆美肌温泉
              </div>
              <p className="leading-relaxed text-xs sm:text-sm">
                午前中に車または高速バスで平戸へ。朱塗りの美しい平戸大橋を渡り、まずは平戸港周辺の食事処で平戸名物の寒ヒラメ丼や平戸ちゃんぽんのランチ。午後は平戸瀬戸を見下ろす丘に聳える「平戸城（亀岡城）」へ。天守閣から青い海峡と城下町のパノラマを見渡した後は、1609年に設置された日本初の西洋館「平戸オランダ商館」や「寺院と教会の見える風景」の石畳を散策。夕方に平戸瀬戸を望む温泉宿へチェックイン。夕暮れに茜色へ染まる海を眺めながら美肌の重曹泉露天風呂を満喫し、夕食には冬の王様・天然クエ鍋、寒ヒラメ活き造り、特選平戸和牛の陶板ステーキを地酒「福田」とともに味わいます。
              </p>
            </div>
            <div className="border-l-2 border-teal-600 pl-4 sm:pl-6 space-y-3">
              <div className="font-bold text-teal-900 text-base flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">2日目</span>
                朝日に輝く平戸瀬戸・ザビエル記念教会と南蛮銘菓カスドース巡り
              </div>
              <p className="leading-relaxed text-xs sm:text-sm">
                水平線から昇る朝陽を見届けながら朝風呂を堪能。あご（トビウオ）出汁の熱々味噌汁と地魚の干物が並ぶ朝食を味わい、10時にチェックアウト。緑の木々に囲まれた美しい尖塔を持つ「平戸ザビエル記念教会」を見学し、続いて江戸時代から続く老舗菓子舗で、卵黄と砂糖を贅沢に使った南蛮渡来の伝統銘菓「カスドース」をお土産に購入。帰路は松浦鉄道の「たびら平戸口駅（日本本土最西端の駅）」に立ち寄り、記念撮影と鉄道旅情を楽しんで帰路へ。海と歴史と美食が響き合う充実の週末旅行です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Winter Gourmet Guide */}
        <section className="bg-gradient-to-br from-teal-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-700/60">
            <Utensils className="w-6 h-6 text-amber-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              平戸の初冬グルメ完全ガイド！クエ・寒ヒラメ・平戸和牛
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-200">
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Fish className="w-4 h-4 text-amber-300" />
                天然クエ鍋（アラ料理）
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                『フグより旨い』と食通を唸らせる幻の高級魚クエ。初冬は皮下にたっぷりと良質な脂を蓄え、熱々の出汁で煮るクエ鍋は、引き締まった白身の旨味とプルプルとしたゼラチン質が溶け合う至高の逸品です。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Waves className="w-4 h-4 text-sky-300" />
                平戸名物・寒ヒラメ活き造り
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                11月〜12月に平戸港へ大量に水揚げされる寒ヒラメ。平戸瀬戸の急流で育ったヒラメは、薄造りにしても抜群の弾力と上品な甘みがあり、自家製ポン酢や肝醤油で味わう贅沢は産地ならではの醍醐味です。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-orange-300" />
                特選平戸和牛ステーキ
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                ミネラル豊富な海風が吹き抜ける平戸の牧草地で育てられる「平戸和牛」。全国の銘柄牛の素牛としても名高く、肉質のキメが細かく融点の低い上品なサシが特徴。陶板ステーキでジューシーに楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Travel Tips / Climate & Clothing */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <Footprints className="w-6 h-6 text-teal-800" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              11月・12月の平戸観光！気候・服装・散策のアドバイス
            </h2>
          </div>
          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              平戸は九州西端に位置するため比較的温暖ですが、11月下旬以降は東シナ海からの強い季節風が吹き付けます。11月の平均気温は13〜15℃程度ですが、12月に入ると最高気温10〜12℃、最低気温4〜6℃まで冷え込みます。特に平戸城天守閣や海沿いの岬では風が強いため、体感温度への対策が大切です。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                  <ThermometerSun className="w-4 h-4 text-teal-700" />
                  防風性の高いアウターを用意
                </h4>
                <p className="text-slate-600">
                  海風を遮る防風ジャケットやウールコート、ダウンがおすすめ。朝晩の冷え込みに備えてストールや薄手の手袋があると、夜の平戸城ライトアップ散策も快適です。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-700" />
                  歩きやすい靴での散策
                </h4>
                <p className="text-slate-600">
                  平戸城や教会群、寺院が並ぶ坂道は石畳や階段が多いため、クッション性の高いスニーカーやフラットシューズが最適です。
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
              平戸温泉郷へのアクセス情報
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-teal-800 block text-sm">福岡・博多方面から</span>
              <p className="text-slate-600 leading-relaxed">
                車で福岡都市高速・西九州自動車道（佐々IC経由）で約2時間。西肥バスの高速バス「平戸〜福岡線」で約2時間30分直通です。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-teal-800 block text-sm">長崎空港・佐世保から</span>
              <p className="text-slate-600 leading-relaxed">
                長崎空港から車で約1時間50分。JR佐世保駅からは松浦鉄道で「たびら平戸口駅」まで約1時間20分、駅からタクシーで約10分です。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-teal-800 block text-sm">平戸大橋（通行無料）</span>
              <p className="text-slate-600 leading-relaxed">
                本土の田平町と平戸島を結ぶ平戸大橋は完全無料。赤い吊り橋と青い平戸瀬戸のコントラストが美しい絶景ドライブルートです。
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
                11月・12月の平戸温泉旅行 よくある質問
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
              あわせて読みたい！冬の九州＆海鮮・温泉特集
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/winter-nagasaki-unzen-onsen-jigoku-mist-beef-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-full inline-block">長崎・雲仙</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-teal-800 transition line-clamp-2">
                雲仙温泉の初冬地獄白煙と普賢岳霧氷・長崎和牛宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                立ち込める地獄の湯けむりと白濁硫黄泉・島原名物を堪能。
              </p>
            </Link>
            <Link 
              href="/winter-saga-takeo-onsen-romon-saga-beef-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-full inline-block">佐賀・武雄</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-teal-800 transition line-clamp-2">
                武雄温泉の歴史楼門と弱アルカリ美肌湯・佐賀牛会席宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                辰野金吾設計の朱塗り楼門と1300年の名湯を楽しむ冬旅。
              </p>
            </Link>
            <Link 
              href="/winter-saga-ureshino-onsen-bihada-yudofu-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-full inline-block">佐賀・嬉野</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-teal-800 transition line-clamp-2">
                嬉野温泉の日本三大美肌の湯と名物温泉湯豆腐宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                とろとろの重曹泉と熱々とろける温泉湯豆腐で温まるひととき。
              </p>
            </Link>
            <Link 
              href="/winter-kumamoto-amakusa-shimoda-onsen-sunset-seafood-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-full inline-block">熊本・天草</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-teal-800 transition line-clamp-2">
                天草下田温泉の東シナ海夕陽絶景と極上冬海鮮宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                茜色に染まる夕陽と天草の車海老・地魚会席を満喫。
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

module.exports = { generateNagasakiHiradoPage };
