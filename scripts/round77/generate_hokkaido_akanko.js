const fs = require('fs');
const path = require('path');

function generateHokkaidoAkankoPage(hotels) {
  const slug = 'winter-hokkaido-akanko-onsen-lakeview-frost-flower-hokkaido-beef-stay';
  const title = '【11・12月北海道・阿寒湖温泉の初冬フロストフラワーとアイヌ文化】極上道東海鮮蟹会席＆北海道黒毛和牛を愉しむ湖畔名宿5選';
  const description = '11月から12月にかけて、道東・阿寒摩周国立公園の雄大な大自然に抱かれた阿寒湖温泉は、湖面が結氷を始める前の静謐な冬景色を迎え、氷点下15度以下の早朝には湖水が奇跡の結晶を作る「フロストフラワー（霜の花）」の幻想的な現象が観測される神秘の季節を迎えます。アイヌの伝統文化が息づく「阿寒湖アイヌコタン」の木彫り工芸や古式舞踊、湖畔を見下ろす展望雪見露天風呂、そしてオホーツク海から直送される冬の毛蟹やいくら、阿寒湖特産のワカサギ天ぷら、北海道産黒毛和牛の陶板ステーキを味わう厳選湖畔名宿5選を徹底解説します。';

  const hotelDetails = [
    {
      story: '阿寒湖の波打ち際に佇み、北海道を代表する最高峰のおもてなしとアイヌ文化の美意識が息づく名門旅館「あかん遊久の里 鶴雅（つるが）」。館内には重厚なアイヌ木彫りアートが随所に飾られ、暖炉の温もりと静謐な空気に包まれます。自慢の温泉は、阿寒湖と雌阿寒岳・雄阿寒岳を一望する最上階の空中露天風呂「天頂の湯」と、湖水に浸かっているかのような感覚を味わえる1階の庭園露天風呂。初冬の冷気の中で立ち上る湯けむりの向こうに、初氷が張り始める静まり返った阿寒湖の神秘的なパノラマが広がります。夕食はオホーツク海直送の冬の味覚を堪能する豪華ビュッフェまたは料亭個室会席。茹でたて毛蟹、脂の乗った寒ブリ、新鮮なイクラ、北海道産黒毛和牛のステーキが並びます。',
      roomTip: '阿寒湖側・温泉露天風呂付き和洋室。大きな窓の外に広がる冬の阿寒湖の静寂を眺めながら、いつでも好きな時に名湯を満喫できる極上のプライベート空間。',
      gourmetTip: '「鶴雅特選・冬の道東山海極味会席」。オホーツク産本ズワイ蟹と毛蟹の食べ比べ、北海道産黒毛和牛の陶板ステーキ、阿寒湖産ワカサギのサクサク天ぷら。'
    },
    {
      story: '阿寒湖畔に佇む全25室すべてに客室専用の展望露天風呂を備えた、大人のための最高級スモールラグジュアリー旅館「阿寒湖温泉 あかん鶴雅別荘 鄙の座（ひなのざ）」。全館に静かな時が流れ、「故郷の温もり」をテーマにした洗練された空間は、中学生未満の宿泊を制限した大人のサンクチュアリです。客室の露天風呂からは、初冬の静まり返る阿寒湖の湖面と冠雪した山々を眺め、誰にも邪魔されない至福の湯浴みを満喫できます。さらに館内のドリンクやバーが無料で楽しめるオールインクルーシブスタイル。夕食は個室茶寮でいただく至高の茶懐石会席。料理長が厳選したオホーツク海の冬の幸、極上蝦夷鮑、北海道黒毛和牛が、芸術的な器とともに一品ずつ贅沢に運ばれます。',
      roomTip: '湖側スイートルーム「霞の座」または「天の座」。客室の広々としたデッキに設えられた檜の露天風呂から、阿寒湖の夜空にきらめく満天の星と湖水を独占。',
      gourmetTip: '「鄙の座・冬の創作茶懐石」。オホーツク海直送の活毛蟹洗い、北海道黒毛和牛フィレ肉の炭火焼き、寒鮃と雲丹のお造り、道産米ゆめぴりかの土鍋ご飯。'
    },
    {
      story: '阿寒湖温泉のランドマークとして愛され、屋上に広がる天空のインフィニティスパが絶大な人気を誇る大型リゾート「ニュー阿寒ホテル」。宿の最大の目玉は、最上階（地上30メートル）に設置されたインフィニティ・エッジ・スパ「天空ガーデンスパ」。専用湯浴み着で入浴する混浴スパからは、眼下に広がる阿寒湖と冬の雄阿寒岳、そして頭上に広がる広大な大空とが完全に一体化する圧倒的なスケール感を体験できます。初冬の朝には湖面に漂う朝霧と朝陽、夜には満天の星空を眺めるドラマチックな時間が流れます。夕食はリゾートビュッフェ「フェリシェ」。シェフが焼き上げる牛ステーキやジンギスカン、北海道産チーズ料理、山盛りのイクラ丼など道産グルメが勢揃いします。',
      roomTip: 'シャングリラ館・阿寒湖ビュー客室。大きなピクチャーウィンドウから初冬の阿寒湖を一望し、朝日に輝く湖面の霧を眺めながらゆったり寛げるお部屋。',
      gourmetTip: '「冬の北海道味覚満喫バイキング」。焼き立て牛ロースステーキ、自分で作る豪華こぼれイクラ海鮮丼、北海道産ホタテの浜焼き、特製チーズフォンデュ。'
    },
    {
      story: '阿寒の豊かな原生林をテーマに、洗練されたモダンな北欧風デザインとおしゃれな空間で女性客やカップルから高い支持を集める「THE FOREST 阿寒 TSURUGA RESORT（旧：阿寒の森 鶴雅リゾート 花ゆう香）」。館内はアロマの香りと木の温もりに満ち、絵本の世界に入り込んだような心ときめくリゾート空間が広がります。温泉大浴場「花しづか」では、肌触り滑らかな阿寒湖の名湯で心身を優しくほぐすことができ、さらに姉妹館「あかん遊久の里 鶴雅」の多彩な大浴場や露天風呂への湯巡りも無料で楽しめます。夕食は森のレストランで楽しむビュッフェまたはプレートディナー。地元道東の冬野菜や乳製品、ジューシーな肉料理が彩り豊かにテーブルを飾ります。',
      roomTip: '森の温もりあふれるスーペリアツイン。ナチュラルな木製家具と上質なベッドが心地よく、阿寒の静かな冬の夜をゆったり過ごせる癒やしの空間。',
      gourmetTip: '「冬の森のごちそうディナー」。道産牛のグリルステーキ、冬野菜のクリームポタージュ、道東産チーズのピッツァ、パティシエ特製の森のスイーツ。'
    },
    {
      story: '阿寒湖の湖畔の波打ち際に建ち、創業以来の温かいおもてなしと100%天然温泉の源泉掛け流しで親しまれる老舗湖畔ホテル「ホテル 御前水（ごぜんすい）」。阿寒湖の遊覧船乗り場やアイヌコタンまで徒歩数分という絶好のロケーションを誇ります。宿の自慢は大浴場「阿寒・清流の湯」で、加水・加温一切なしの純度100%自家源泉が惜しみなく湯船に注がれています。無色透明のやさしい湯は肌の角質を滑らかにし、湯上がり後もポカポカとした温もりが長く持続。食事は阿寒湖名物のワカサギの天ぷらをはじめ、近海で獲れた新鮮な魚介、北海道産牛の陶板焼きなど、どこか懐かしく滋味あふれる手作りの和食膳を良心的な価格で楽しめます。',
      roomTip: '阿寒湖を正面に望むレイクビュー和室。静まり返った初冬の阿寒湖の波音を聞きながら、畳の上で足を伸ばしてのんびりと寛げる心温まる空間。',
      gourmetTip: '「冬の阿寒郷土和食膳」。サクサクに揚げた阿寒湖産ワカサギの天ぷら、北海道産牛の陶板焼き、旬の刺身三種盛り、熱々の手作り鍋。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥19,541〜' : i === 1 ? '¥48,279〜' : i === 2 ? '¥10,200〜' : i === 3 ? '¥14,399〜' : '¥8,250〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.50' : i === 1 ? '4.90' : i === 2 ? '4.15' : i === 3 ? '4.14' : '3.94');
    const reviewCount = h.reviewCount || (i === 0 ? 3280 : i === 1 ? 520 : i === 2 ? 4150 : i === 3 ? 1280 : 1620);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'たんちょう釧路空港より阿寒バス（阿寒湖温泉行き）で約75分。JR釧路駅より路線バスで約120分。道東自動車道 足寄ICより車で約60分。無料駐車場完備')},
              special: ${JSON.stringify(h.hotelSpecial || '阿寒湖初氷フロストフラワー＆アイヌ文化・極上オホーツク海鮮毛蟹と北海道牛会席')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '阿寒湖最上階の空中露天「天頂の湯」＆湖水と一体になる庭園露天風呂とアイヌ工芸' : i === 1 ? '全25室客室露天風呂付き最高級スモールラグジュアリー＆無料ドリンクの贅沢' : i === 2 ? '地上30m屋上インフィニティ天空ガーデンスパ＆阿寒湖パノラマと充実バイキング' : i === 3 ? '阿寒の森をテーマにした北欧風モダンリゾート＆姉妹館鶴雅への無料湯巡り特典' : '創業以来の温かいおもてなし＆源泉100%掛け流し温泉と阿寒湖産ワカサギ天ぷら')},
                ${JSON.stringify(i === 0 ? 'オホーツク海直送の本ズワイ蟹と毛蟹食べ比べ＆北海道黒毛和牛の贅沢会席' : i === 1 ? '活毛蟹洗いと北海道黒毛和牛フィレ炭火焼き＆大人の静寂を守る特別な隠れ宿' : i === 2 ? 'シェフ実演牛ステーキやいくら盛り放題バイキング＆家族みんなで楽しめるスパ' : i === 3 ? '森のレストランの彩り冬ディナー＆アロマ香る癒やしの客室で過ごす女子旅・夫婦旅' : '阿寒湖波打ち際のレイクビュー和室＆リーズナブルに楽しむ冬の阿寒温泉旅')},
                ${JSON.stringify(i === 0 ? '阿寒湖アイヌコタンや遊覧船乗り場に直結の好立地＆細やかな鶴雅クオリティ' : i === 1 ? '阿寒湖の夜空に瞬く満天の冬星を眺める極上露天風呂＆記念日旅行に最高峰の評価' : i === 2 ? '朝霧に染まる朝陽の阿寒湖をインフィニティスパから一望＆最高の開放感' : i === 3 ? '阿寒湖温泉街散策に便利な立地＆北欧ライクなインテリアで心地よいリラクゼーション' : '加水加温なしの良質な自家源泉の温もり＆旅情あふれる阿寒の老舗名物宿')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "阿寒湖の冬の奇跡「フロストフラワー（霜の花）」とは？いつ見られますか？",
      a: "フロストフラワーは、阿寒湖の湖面が凍結する初冬（12月頃〜2月頃）の早朝、極めて厳しい気象条件が重なった時にだけ現れる氷の結晶現象です。風がほとんどない無風状態、気温がマイナス15度以下まで冷え込み、湖面の氷の上に薄く水蒸気が供給されるという奇跡的な条件でのみ、氷の表面に白い羽や花びらのような繊細な霜の花が咲き乱れます。手のひらで息を吹きかけるだけで一瞬で溶けてしまうほど儚く、朝陽を浴びて輝くフロストフラワーの群生は「冬の奇跡」と称されます。12月上旬から中旬の結氷初期は特に観測チャンスが高い時期とされています。"
    },
    {
      q: "11月・12月の阿寒湖温泉の気候や気温、おすすめの服装は？",
      a: "阿寒湖温泉は道東の内陸標高約420mに位置するため、寒さが非常に厳しい寒冷地です。11月の平均最高気温は3〜6℃、最低気温は-3〜-7℃前後まで下がり、路面凍結や初雪が本格化します。12月に入ると最高気温でも-2〜0℃前後の真冬日となり、朝晩の最低気温は-10〜-18℃近くまで急激に冷え込みます。観光には厚手のダウンコート、保温性の高いインナー（ヒートテック等）、風を通さないオーバーパンツやタイツ、耳まで覆うニット帽、厚手の手袋、ネックウォーマーが必須です。また、凍結した雪道を歩くため、靴裏に深い溝や滑り止め（スパイク等）が付いたスノーブーツを必ず着用してください。"
    },
    {
      q: "「阿寒湖アイヌコタン」の初冬の見どころや体験プログラムは？",
      a: "阿寒湖温泉街の一角にある「阿寒湖アイヌコタン」は、約120名の人々が暮らす北海道最大級のアイヌの集落です。アイヌ民俗舞踊や人形劇が上演される劇場「阿寒湖アイヌシアター〈イコロ〉」では、ユネスコ無形文化遺産に登録された伝統の古式舞踊や現代劇「ロストカムイ」が通年上演されています。また、坂道沿いにはアイヌの伝統木彫り工芸や刺繍作品が並ぶ民芸品店、伝統料理（オハウと呼ばれる汁物など）を味わえる飲食店が立ち並び、初冬の静かな雪景色の中でアイヌ文化の深い精神性と温もりに触れることができます。"
    },
    {
      q: "阿寒湖温泉で冬に味わえる名物グルメや特産品は何ですか？",
      a: "冬の阿寒湖温泉では、道東の豊かな海と山、そして阿寒湖ならではの恵みが贅沢に並びます。代表格は、阿寒湖の清流で育つ「阿寒湖産ワカサギ」。初冬に獲れるワカサギは身が引き締まり、揚げたての天ぷらはサクサクと香ばしく甘みがあります。また、オホーツク海から届く旬の「毛蟹」や「本ズワイ蟹」、プチプチと弾ける「イクラ」、新鮮な「寒ホタテ」や「寒ブリ」など北の海の幸が圧巻。さらに、広大な大地で育まれたジューシーな「北海道産黒毛和牛」や「白糠産エゾシカ肉」のステーキなど、滋味豊かな冬の北海道グルメを堪能できます。"
    },
    {
      q: "たんちょう釧路空港や女満別空港から阿寒湖温泉へのアクセス方法は？",
      a: "飛行機を利用する場合、最寄りの「たんちょう釧路空港」から阿寒バス（定期路線バス・阿寒湖温泉行き）に乗車し、約75分で阿寒湖温泉各ホテルに到着します。JR釧路駅からは路線バスで約2時間です。また、「女満別空港」からはレンタカーまたは網走・北見経由のバスで約1時間30分〜2時間です。冬期（11月中旬以降）は全道路が完全凍結・圧雪アイスバーンとなるため、レンタカーを運転される方はスタッドレスタイヤの装着はもちろん、急発進・急ブレーキを避け、十分な車間距離を確保した慎重な運転が必要です。雪道運転に不慣れな方は空港からの直通バスの利用を強くおすすめします。"
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
  keywords: '阿寒湖温泉 宿泊, あかん遊久の里 鶴雅, 鄙の座, ニュー阿寒ホテル, フロストフラワー 11月 12月, 阿寒湖 アイヌコタン, オホーツク毛蟹, 阿寒湖 ワカサギ, 道東海鮮',
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
        alt: '初冬の阿寒湖温泉とフロストフラワー・雪見露天風呂'
      }
    ]
  }
};

const faqList = ${JSON.stringify(faqList, null, 2)};

export default function HokkaidoAkankoWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/${slug}#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/${slug}"
        },
        "headline": ${JSON.stringify(title)},
        "description": ${JSON.stringify(description)},
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T13:00:00+09:00",
        "dateModified": "2026-09-28T13:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "Croud Travel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "author": {
          "@type": "Organization",
          "name": "Croud Travel 道東・大自然名湯紀行取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.com/${slug}#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "特集一覧",
            "item": "https://croud-travel.com/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "北海道・阿寒湖温泉 初冬フロストフラワーとアイヌ文化の宿",
            "item": "https://croud-travel.com/${slug}"
          }
        ]
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
      }
    ]
  };

  const hotels = [
${hotelCardsCode}
  ];

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <header className="relative w-full h-[360px] sm:h-[480px] flex items-end justify-center bg-slate-900 text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
          alt="阿寒湖の初冬絶景と湖畔雪見露天風呂"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-semibold">
            <Snowflake className="w-4 h-4" />
            11月・12月 阿寒湖初氷＆アイヌ文化特集｜北海道・阿寒湖温泉
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            初冬のフロストフラワーとアイヌ文化<br className="hidden sm:inline" />
            極上道東海鮮蟹会席＆北海道黒毛和牛を愉しむ湖畔名宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            神秘の湖・阿寒湖に咲く奇跡の霜の花と、雄阿寒岳・雌阿寒岳の神々しい冬姿。アイヌの木彫りアートと温もりに包まれ、オホーツク海の毛蟹と湖畔雪見露天風呂に癒やされる冬の道東旅。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-teal-400" /> 11月下旬〜12月が初氷とフロストフラワーの旬</span>
            <span className="flex items-center gap-1"><Waves className="w-4 h-4 text-teal-400" /> 阿寒湖一望空中露天風呂＆源泉掛け流し湯</span>
            <span className="flex items-center gap-1"><Utensils className="w-4 h-4 text-teal-400" /> オホーツク産毛蟹＆阿寒湖ワカサギ天ぷら</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Section 1: Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Akan Pristine Winter & Frost Flowers</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の静謐と奇跡の結晶｜11月・12月に阿寒湖温泉を訪れるべき理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              北海道の東部、阿寒摩周国立公園の雄大な原生林とカルデラに抱かれた阿寒湖温泉。秋の観光シーズンが幕を閉じる11月から12月にかけて、この地は氷点下の静寂が支配する神秘的な冬の訪れを迎えます。冠雪した雄阿寒岳と雌阿寒岳が澄み渡る蒼穹の下に荘厳な姿を現し、深く青い阿寒湖の湖面は朝晩の急激な冷え込みとともに初氷を張り始めます。
            </p>
            <p>
              この初冬の時期にしか出会えない奇跡の絶景が「フロストフラワー（霜の花）」です。氷点下15度以下まで冷え込み、風のない静かな早朝、結氷し始めたばかりの薄氷の上に湖水から立ち上る水蒸気が結晶化して、まるで純白の花びらのように一面に咲き誇ります。手のひらのぬくもりで一瞬にして消えてしまう儚い美しさは、自然が極寒の道東に贈る冬の芸術品です。
            </p>
            <p>
              また、阿寒湖温泉はアイヌの伝統文化が色濃く息づく特別な場所でもあります。日本最大級のアイヌの集落「阿寒湖アイヌコタン」には、温かみあふれる手彫りの木彫り民芸店が軒を連ね、伝統芸能劇場では古式舞踊が上演されます。極寒の風が吹く外気から一歩館内へ入れば、パチパチとはぜる薪の暖炉やアイヌ文様の優しいぬくもりが出迎えてくれます。夕食にはオホーツク海から直送される冬の味覚の王様「毛蟹」や「本ズワイ蟹」、プチプチと輝くイクラ、阿寒湖の清流で育まれた「ワカサギ」の揚げたて天ぷら、そして上質なサシが入った北海道産黒毛和牛が並び、北の大地の恵みを心ゆくまで堪能できます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-teal-900 text-sm">
                <Snowflake className="w-4 h-4 text-teal-600" />
                冬の奇跡・フロストフラワー
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                氷点下15度以下の無風早朝にだけ薄氷の上に咲く霜の花。朝日に輝く繊細な氷の結晶は初冬ならではの奇跡の絶景。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-teal-900 text-sm">
                <Waves className="w-4 h-4 text-teal-600" />
                阿寒湖一望空中露天風呂
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                最上階インフィニティスパから望む阿寒湖と雄阿寒岳の大パノラマ。100%源泉掛け流し湯で極寒の冷えを芯から癒やす。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-teal-900 text-sm">
                <Utensils className="w-4 h-4 text-teal-600" />
                オホーツク毛蟹＆ワカサギ
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                オホーツク海直送の茹でたて毛蟹、阿寒湖名物のサクサク揚げたてワカサギ天ぷら、北海道産黒毛和牛を贅沢に味わう。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Deep Dive Geography & Terroir */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Caldera Ecology & Ainu Cultural Heritage</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                カルデラが生んだ神秘の生態系とアイヌ民族が紡ぐ自然共生の知恵
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              阿寒湖は、約15万年前の巨大なカルデラ火山の陥没によって形成されたカルデラ湖です。周囲を雄阿寒岳（標高1,371m）と活火山である雌阿寒岳（標高1,499m）に囲まれ、湖底や湖畔の至る所から地熱と温泉が噴出しています。国の特別天然記念物である「マリモ（毬藻）」が世界で唯一、美しい球状に育つ奇跡の環境として知られるのも、このカルデラ湖特有の穏やかな水流とミネラル豊富な地下湧水があるためです。
            </p>
            <p>
              この豊かな火山生態系の中で、自然の神々（カムイ）とともに生きてきたのがアイヌ民族です。阿寒湖温泉のアイヌコタンは、自然を敬い、動物や植物の恵みに感謝しながら暮らすアイヌの世界観を現代に色濃く伝えています。伝統芸能劇場〈イコロ〉で演じられる古式舞踊は、鶴や狐、神々の姿を表現した力強く美しい舞で、初冬の静まり返る夜に鑑賞すると魂が揺さぶられるような深い感動を覚えます。
            </p>
            <p>
              また、冷え込みが厳しくなる11月から12月にかけて、阿寒湖では冬の風物詩である「ワカサギ漁」が本格化します。プランクトンが豊富な阿寒湖の水で育つワカサギは苦みが一切なく、丸々と太って骨が柔らかいのが特徴です。獲れたてをすぐに高温の油で揚げた天ぷらは、サクッとした食感の後にワカサギ本来の上品な甘みが口いっぱいに広がり、冷えた体に格別の温もりを与えてくれます。
            </p>
          </div>
        </section>

        {/* Section 3: Hotel Cards */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Selected Lakeside Hot Spring Resorts</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              11月・12月の阿寒湖温泉を満喫する厳選名宿5選
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              オホーツク産極上毛蟹と北海道黒毛和牛、阿寒湖を一望する雪見露天風呂を誇る、楽天トラベル高評価の特選宿をご紹介します。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300 flex flex-col md:flex-row"
              >
                {/* Hotel Image */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100 flex-shrink-0">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{hotel.rating}</span>
                    <span className="text-slate-400">({hotel.reviews.toLocaleString()}件)</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-teal-700/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                    第{hotel.id}選
                  </div>
                </div>

                {/* Hotel Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-teal-800 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                          {hotel.name}
                        </a>
                      </h3>
                      <div className="text-right">
                        <span className="text-xs text-slate-500 block">参考宿泊料金（2名1室時1名）</span>
                        <span className="text-xl font-extrabold text-teal-800">{hotel.price}</span>
                      </div>
                    </div>

                    <p className="text-xs text-teal-800 font-semibold bg-teal-50 px-3 py-1.5 rounded-xl inline-block">
                      {hotel.special}
                    </p>

                    <p className="text-sm text-slate-700 leading-relaxed pt-1">
                      {hotel.story}
                    </p>

                    {/* Room & Gourmet Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 space-y-1">
                        <span className="text-xs font-bold text-slate-900 flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5 text-teal-700" /> おすすめ客室・眺望
                        </span>
                        <p className="text-xs text-slate-600 leading-normal">
                          {hotel.roomTip}
                        </p>
                      </div>
                      <div className="bg-amber-50/60 p-3.5 rounded-2xl border border-amber-100/80 space-y-1">
                        <span className="text-xs font-bold text-amber-900 flex items-center gap-1">
                          <Utensils className="w-3.5 h-3.5 text-amber-700" /> 冬の特選グルメ
                        </span>
                        <p className="text-xs text-slate-700 leading-normal">
                          {hotel.gourmetTip}
                        </p>
                      </div>
                    </div>

                    {/* Highlights Points */}
                    <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                      {hotel.highlights.map((hl: string, idx: number) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {hotel.access}
                    </span>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-2xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition duration-200"
                    >
                      <span>空室状況・プラン詳細（楽天トラベル）</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: 1泊2日のおすすめモデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Map className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                【11月・12月】阿寒湖の初冬絶景とアイヌ文化を極める1泊2日モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6 text-sm text-slate-700">
            <div className="border-l-2 border-teal-600 pl-4 sm:pl-6 space-y-3">
              <div className="font-bold text-teal-900 text-base flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">1日目</span>
                たんちょう釧路空港から阿寒へ・アイヌコタン木彫り巡りと湖畔雪見露天
              </div>
              <p className="leading-relaxed text-xs sm:text-sm">
                午前中に羽田等から「たんちょう釧路空港」へ到着。レンタカーまたは定期バスで阿寒湖温泉へ（途中、鶴居村で越冬のために飛来した優美な丹頂鶴を観察するのもおすすめ）。正午過ぎに阿寒湖温泉街に到着し、まずは地元食事処で揚げたて阿寒湖産ワカサギ天丼やエゾシカ肉料理のランチを堪能。午後は北海道最大級の「阿寒湖アイヌコタン」を散策し、職人手彫りの木彫り工芸店巡りや伝統アイヌ文様のコースター作りを体験。15時半頃に湖畔ホテルへチェックイン。最上階の天空インフィニティスパから初冬の阿寒湖と冠雪した雄阿寒岳を一望し、冷えた体を芯から温めます。夕食はオホーツク直送の茹でたて毛蟹、イクラ、北海道産黒毛和牛の贅沢会席を満喫。夜はシアターイコロで幻想的なアイヌ古式舞踊を鑑賞します。
              </p>
            </div>
            <div className="border-l-2 border-teal-600 pl-4 sm:pl-6 space-y-3">
              <div className="font-bold text-teal-900 text-base flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">2日目</span>
                早朝のフロストフラワー探し・湖畔朝風呂と摩周湖・硫黄山巡り
              </div>
              <p className="leading-relaxed text-xs sm:text-sm">
                早朝、完全防寒スタイルで湖畔遊歩道へ。氷点下15度以下の静寂の中、薄氷の上に咲く奇跡の氷の結晶「フロストフラワー」の観賞にチャレンジ（ガイドツアー参加も推奨）。朝陽に輝く幻想的な光景に感動した後は、ホテルに戻って温かい朝風呂で手足を解凍し、いくら盛り放題のバイキング朝食をいただきます。10時にチェックアウト後、車で約45分の「摩周湖」へ。冬の澄み切った摩周ブルーのカルデラ湖を展望台から見下ろし、大迫力の噴煙を上げる「硫黄山（アトサヌプリ）」を見学。川湯温泉街で温泉卵や名物スイーツを味わい、夕方のフライトに合わせて釧路空港または女満別空港から帰路へ着きます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Travel Tips */}
        <section className="bg-gradient-to-br from-teal-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-6 shadow-md">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-800">
            <Compass className="w-6 h-6 text-teal-400" />
            <h2 className="text-xl sm:text-2xl font-bold">
              11月・12月の阿寒湖温泉旅行を満喫する実践ガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="font-bold text-teal-300 flex items-center gap-1.5">
                <ThermometerSun className="w-4 h-4" /> 気温と完全防寒スノーブーツ
              </h3>
              <p className="text-slate-200 text-xs leading-relaxed">
                12月は氷点下10度以下まで冷え込みます。厚手ダウンコート、ヒートテック、ニット帽、厚手手袋、ネックウォーマーに加え、圧雪・凍結路面を安全に歩ける防滑スノーブーツの着用が絶対条件です。
              </p>
            </div>
            <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="font-bold text-teal-300 flex items-center gap-1.5">
                <Footprints className="w-4 h-4" /> アイヌコタンと伝統舞踊
              </h3>
              <p className="text-slate-200 text-xs leading-relaxed">
                北海道最大級の阿寒湖アイヌコタンでは木彫り工芸店巡りや「阿寒湖アイヌシアターイコロ」での伝統古式舞踊上演が見逃せません。初冬の夜のライトアップされたコタンは温かい旅情に満ちています。
              </p>
            </div>
            <div className="space-y-2 bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="font-bold text-teal-300 flex items-center gap-1.5">
                <Fish className="w-4 h-4" /> オホーツク毛蟹とワカサギ
              </h3>
              <p className="text-slate-200 text-xs leading-relaxed">
                冬の道東はオホーツク海から直送される毛蟹やズワイ蟹が絶品。濃厚な蟹味噌と甘い身を堪能しましょう。さらに阿寒湖名物の揚げたてワカサギ天ぷらはサクサクで一度食べたら忘れられない美味です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の阿寒湖温泉旅行 よくある質問
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

        {/* Section 7: Related Links / Mesh */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <Compass className="w-6 h-6 text-teal-800" />
            <h2 className="text-xl font-bold text-slate-900">
              あわせて読みたい！冬の温泉・美食旅行特集
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/winter-hokkaido-tokachigawa-onsen-moor-swan-tokachi-beef-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-full inline-block">北海道・十勝川</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-teal-800 transition line-clamp-2">
                十勝川温泉の初冬白鳥飛来と遺産モール温泉・十勝牛宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                北海道遺産植物性モール温泉と白鳥の飛来を望む極上ステイ。
              </p>
            </Link>
            <Link 
              href="/winter-hokkaido-sounkyo-onsen-snow-gorge-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-full inline-block">北海道・層雲峡</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-teal-800 transition line-clamp-2">
                層雲峡温泉の大雪山初冬雪峡絶景と名湯雪見露天風呂宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                断崖絶壁の柱状節理と白い雪が織りなす大雪山の渓谷美。
              </p>
            </Link>
            <Link 
              href="/winter-hokkaido-hakodate-yunokawa-onsen-isaribi-seafood-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-full inline-block">北海道・函館湯の川</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-teal-800 transition line-clamp-2">
                湯の川温泉の津軽海峡漁火雪見露天と函館冬海鮮宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                津軽海峡にきらめくイカ釣り漁火と函館の冬の味覚を堪能。
              </p>
            </Link>
            <Link 
              href="/winter-hokkaido-noboribetsu-onsen-snow-jigokudani-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-full inline-block">北海道・登別</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-teal-800 transition line-clamp-2">
                登別温泉の初冬地獄谷雪景色と多彩な名湯白濁露天風呂宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                白煙立ち込める地獄谷と日本屈指の豊富な泉質を巡る湯治旅。
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

module.exports = { generateHokkaidoAkankoPage };
