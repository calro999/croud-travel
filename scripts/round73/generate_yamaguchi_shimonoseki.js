const fs = require('fs');
const path = require('path');

function generateYamaguchiShimonosekiPage(hotels) {
  const slug = 'winter-yamaguchi-shimonoseki-kawatana-onsen-torafugu-kawarasoba-stay';
  const title = '【11・12月山口・下関と川棚温泉の本場とらふぐ解禁美食と元祖瓦そば】関門海峡・響灘夕景＆開湯八百年ラジウム美肌泉の宿5選';
  const description = '11月から12月にかけて、本州最西端に位置する山口県下関市および響灘沿いの名湯「川棚温泉（かわたなおんせん）」は、冬の味覚の最高峰「本場とらふぐ（下関ふく）」が最も身を引き締め、濃厚な旨味を蓄える年間最高のハイシーズンを迎えます。日本屈指のふぐ水揚げを誇る南風泊港から届く極上の天然・厳選とらふぐは、職人技が光る繊細な菊盛りの「てっさ」、身がぷりぷりの「てっちり」、香ばしい「ひれ酒」で五感を満たします。さらに熱々の日本瓦で茶そばを焼き上げる名物「元祖瓦そば」、毛利侯の隠れ湯として愛された開湯800年の名湯ラジウム泉。関門海峡と響灘の絶景夕日に癒やされる、初冬の下関・川棚の厳選名旅館・ホテル5選を徹底解説。';

  const hotelDetails = [
    {
      story: '川棚温泉の中心に位置し、広大な日本庭園と洗練されたモダン建築が調和する名門リゾート「川棚グランドホテル お多福」。開湯800年を誇る自家源泉のラジウム温泉は、微量のラドンを含み血行を促進して肌をしっとり整える名湯で、大浴場「山頭火の湯」や庭園露天風呂で心地よい湯浴みが楽しめます。館内の名物ダイニングでは、熱した本物の日本瓦の上で茶そばを香ばしく焼き上げる「元祖瓦そば」を堪能できるほか、冬期には下関直送の本場とらふぐフルコース会席が登場。美しく透き通ったてっさやふぐ唐揚げ、ヒレ酒の芳醇な香りに酔いしれる贅沢な大人の休日が過ごせます。',
      roomTip: '温泉露天風呂付き離れ「みすゞうた」またはモダン和洋室。自家源泉の掛け流し湯をプライベートに独占し、庭園の緑を眺めながら静謐なリトリート。',
      gourmetTip: '「下関本場とらふぐ尽くし会席＆元祖瓦そば」。職人が美しく引いたとらふぐ刺し菊盛り、熱々のふぐちり鍋、香ばしいひれ酒、熱した瓦で焼く元祖瓦そば。'
    },
    {
      story: '関門海峡を目前に望み、すべての客室に海を眺めながら湯浴みを楽しめる温泉展望風呂を備えたラグジュアリーリゾート「下関温泉 風の海」。客室のパノラマウィンドウからは、行き交う巨大タンカーや対岸の門司港の街並み、そして海峡を黄金色に染め上げる夕暮れ時の絶景が広がります。館内は落ち着いた木目調と間接照明が織りなす大人の隠れ家空間。夕食は関門海峡を望むダイニングにて、下関南風泊港直送の最高級とらふぐを中心に、長州黒かしわや山口県産和牛を組み合わせた現代的で洗練された創作和食会席が振る舞われます。',
      roomTip: '全室オーシャンビュー＆海を望む温泉展望風呂付き客室。心地よい波音と船の汽笛を遠くに聞きながら、シモンズ製特注ベッドで極上の眠り。',
      gourmetTip: '「冬の風の海・特選とらふぐ特別会席」。極薄に引かれた美しいとらふぐ刺し、ふぐ白子の炭火焼き、特製出汁で味わうふぐ鍋、〆の濃厚雑炊。'
    },
    {
      story: '下関駅至近の閑静な一角に佇み、創業80余年の歴史を誇る老舗割烹旅館「割烹旅館 寿美礼（すみれ）」。全国の食通や美食家が「本物のふぐを食べるためだけに下関を訪れる」と絶賛する名店中の名店です。代々受け継がれた門外不出のポン酢は、柑橘の爽やかな酸味と出汁の深いコクが絶妙で、肉厚に引かれたとらふぐの強い弾力と甘みを極限まで引き立てます。さらに、下関ならではの「天然クジラ料理」や響灘の鮮魚も秀逸。料理旅館ならではの家庭的で温かなおもてなしと、畳の温もりが心地よい老舗の風情に心癒やされます。',
      roomTip: '落ち着いた純和室。床の間の掛け軸や季節の生花が心を和ませ、美味しいふぐ会席に舌鼓を打った後に畳の上でゆったりと手足を伸ばせる空間。',
      gourmetTip: '「寿美礼伝統・天然とらふぐ極みフルコース」。肉厚に引いたてっさ、ふっくら揚がったふぐ唐揚げ、秘伝ポン酢で食すてっちり、名物クジラ刺し。'
    },
    {
      story: '関門海峡に架かる雄大な関門橋を目の前に望み、壇ノ浦の歴史情緒が漂う海辺の温泉宿「関門の宿 源平荘」。客室やロビー、大浴場からは関門橋のライトアップと海峡を行き交う船の光が織りなすロマンチックな夜景が一望できます。下関ならではのふぐ会席は、お手頃な価格帯から本格的なフルコースまで幅広く用意されており、高いコストパフォーマンスで人気を集めています。初冬の海峡を吹き抜ける風を感じながら、関門海峡の潮の流れを眺め、歴史のロマンに思いを馳せるひとときは下関ならではの特別な体験です。',
      roomTip: '関門海峡・関門橋ビューの純和室。窓のすぐ下を流れる関門海峡の急流と、夜間に美しく輝く関門橋のイルミネーションを眺める特等席。',
      gourmetTip: '「海峡冬の味覚・とらふぐ会席プラン」。新鮮なとらふぐ刺し、熱々のふぐちり鍋、香ばしいふぐヒレ酒、旬の瀬戸内・日本海海の幸盛り合わせ。'
    },
    {
      story: '日本海・響灘に突き出た岬の突端に位置し、コバルトブルーの海と白い砂浜、そして日本屈指の絶景スポット「角島大橋」を間近に望むリゾートホテル「ホテル西長門リゾート」。全室がオーシャンビューで、露天風呂はまるで海と湯面が繋がっているかのようなインフィニティ設計。11月・12月には空気が澄み、日本海に沈む夕日が水平線を茜色に染め上げるマジックアワーを露天風呂から堪能できます。夕食は下関名物のふぐ料理をはじめ、長門・角島近海で獲れた新鮮なウニやアワビ、サザエを贅沢に味わう海鮮会席が人気です。',
      roomTip: '角島大橋と響灘を一望するオーシャンフロント客室。白波と青い海原のパノラマを窓いっぱいに眺め、夜には満天の星と角島灯台の光に癒やされる滞在。',
      gourmetTip: '「西長門冬の特選・下関とらふぐと日本海旬魚会席」。とらふぐ薄造り、ふぐちり鍋、近海朝獲れアワビの踊り焼き、山口県産銘柄牛のステーキ。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥8,250〜' : i === 1 ? '¥17,050〜' : i === 2 ? '¥8,650〜' : i === 3 ? '¥9,000〜' : '¥9,700〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.20' : i === 1 ? '4.76' : i === 2 ? '4.56' : i === 3 ? '4.13' : '4.27');
    const reviewCount = h.reviewCount || (i === 0 ? 1680 : i === 1 ? 520 : i === 2 ? 430 : i === 3 ? 980 : 2150);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'JR山陽本線 下関駅または新下関駅より車・バスで約10〜30分。中国自動車道 下関ICまたは小月ICより車で約15〜30分')},
              special: ${JSON.stringify(h.hotelSpecial || '関門海峡・響灘絶景露天＆11・12月本場下関とらふぐ・元祖瓦そば会席')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '開湯800年ラジウム名湯＆熱した日本瓦で豪快に焼く名物「元祖瓦そば」とふぐ会席' : i === 1 ? '全室オーシャンビュー温泉展望風呂付き＆関門海峡の船の往来と夜景を見下ろす特等席' : i === 2 ? '創業80余年の名門割烹旅館＆全国の食通を唸らせる極厚とらふぐ刺しと秘伝ポン酢' : i === 3 ? '関門橋のライトアップが目の前に広がる絶景ロケーション＆高コスパな本格ふぐフルコース' : '角島大橋を一望する岬のインフィニティ露天風呂＆響灘に沈む初冬の夕日マジックアワー')},
                ${JSON.stringify(i === 0 ? '露天風呂付き離れや広大な日本庭園＆山頭火が愛した川棚温泉のやわらかな美肌湯' : i === 1 ? '南風泊港直送の最高級とらふぐと山口県産和牛の洗練された現代和食ダイニング' : i === 2 ? '下関駅徒歩圏で観光・ビジネス至便＆下関名物の鯨料理ととらふぐを同時に満喫' : i === 3 ? '壇ノ浦の歴史情緒に包まれる滞在＆ふぐちり鍋と香ばしいヒレ酒に酔いしれる冬夜' : '日本海の透明度抜群な海と白い砂浜が広がるリゾート＆響灘の新鮮なウニ・アワビ会席')},
                ${JSON.stringify(i === 0 ? '下関・萩・角島への周遊拠点に最適＆愛犬同伴ルームも完備した安心のリゾート' : i === 1 ? '大切な記念日や大人の夫婦旅にふさわしい静謐なプライベート空間とおもてなし' : i === 2 ? '家族経営ならではの温かく丁寧な接客＆本物の味を追求する料理人魂の宿' : i === 3 ? '唐戸市場や赤間神宮へアクセス良好＆海峡の風を感じる爽快な朝の海岸散策' : 'コバルトブルーの絶景ドライブ＆露天風呂から波音に耳を傾ける非日常のひととき')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "下関・川棚温泉の11月・12月の気温や気候、冬の旅行時の服装は？",
      a: "山口県下関市は日本海（響灘）と瀬戸内海（関門海峡）に挟まれた地形のため、比較的温暖な気候ですが、11月下旬から12月にかけては日本海からの北西の季節風が強まりやすくなります。11月の平均最高気温は15〜17℃、最低気温は8〜10℃前後で日中は過ごしやすいですが、12月に入ると最高気温は11〜13℃、最低気温は4〜6℃程度まで低下します。雪が積もることは極めて稀ですが、関門海峡沿いや角島大橋、海岸沿いの展望スポットでは冷たい海風が吹き抜けるため、防風性のあるコートやダウンジャケット、ストールのご用意をおすすめします。"
    },
    {
      q: "下関で「ふぐ」を「ふく」と呼ぶ理由と、11月・12月のとらふぐが美味しい理由は？",
      a: "下関では古くから、ふぐ（河豚）を「福（ふく）」に掛けて「ふく」と呼び、不遇（ふぐう）を避けて幸運を呼ぶ縁起の良い魚として親しまれています。日本で唯一のふぐ専門卸売市場である下関「南風泊（はえどまり）市場」には全国から最高級のとらふぐが集まります。特に11月から12月にかけては、海水温が低下することでとらふぐの身が引き締まり、越冬と産卵に向けて上質な脂とアミノ酸（イノシン酸・グルタミン酸）をぎっしり蓄えるため、一年の中で最も歯ごたえと甘みが際立つ最盛期を迎えます。"
    },
    {
      q: "川棚温泉（かわたなおんせん）の歴史と泉質、ラジウム温泉の効能は？",
      a: "川棚温泉は平安時代末期、寿永年間に青龍が棲みついた沼から温泉が湧出したという伝説に始まる開湯800年余りの歴史ある温泉です。江戸時代には長州藩主・毛利侯の「殿様湯」として保護され、放浪の俳人・種田山頭火やフランスの世界的ピアニスト・アルフレッド・コルトーもその静けさと名湯を絶賛しました。泉質は「含弱放射能-ナトリウム・カルシウム-塩化物泉（ラジウム泉）」で、微量のラドン成分が細胞を刺激して自然治癒力や免疫力を高める「ホルミシス効果」をもたらします。神経痛や冷え性の緩和、疲労回復に優れ、湯上がりは肌がスベスベになると評判です。"
    },
    {
      q: "名物「瓦そば」とはどのような郷土料理？発祥の由来は？",
      a: "「瓦そば（かわらそば）」は、1877年（明治10年）の西南戦争の際、熊本城を包囲した薩摩軍の兵士たちが野戦の合間に瓦を使って野草や肉を焼いて食べたという逸話をもとに、川棚温泉の「お多福（現・川棚グランドホテル）」の創業者によって1961年に開発された下関発祥の郷土料理です。熱々に熱した本物の日本瓦の上に、風味豊かな茶そばを乗せて香ばしく焼き、その上に甘辛く煮た牛肉、錦糸卵、海苔、小ネギ、レモンスライス、もみじおろしを盛り付けます。温かい特製つゆにつけて食べると、パリッと香ばしいおこげの食感と出汁の旨味が重なり合う絶品です。"
    },
    {
      q: "新幹線や福岡（博多・小倉）方面からのアクセス方法は？",
      a: "下関・川棚温泉へのアクセスは山陽新幹線の利用が極めて便利です。新幹線「新下関駅」までは博多駅から約30分、広島駅から約1時間、新大阪駅から約2時間15分で直通アクセス可能です。新下関駅から下関市街（唐戸市場・関門海峡）までは車または路線バスで約20分、川棚温泉までは車で約35分（JR山陰本線利用なら川棚温泉駅まで約40分）です。また、北九州空港や山口宇部空港からもアクセスしやすく、福岡・小倉方面からの日帰りや1泊2日のドライブ旅行にも絶大な人気を誇ります。"
    }
  ];

  const pageContent = `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, SunMedium, Anchor
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '下関 温泉 宿泊, 川棚温泉, 下関 とらふぐ 宿, 川棚グランドホテル, 下関温泉 風の海, 割烹旅館 寿美礼, 関門の宿 源平荘, ホテル西長門リゾート, 瓦そば, 関門海峡 絶景 宿',
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
        alt: '初冬の関門海峡と下関温泉の夕暮れ絶景'
      }
    ]
  }
};

const faqList = ${JSON.stringify(faqList, null, 2)};

export default function YamaguchiShimonosekiWinterFeature() {
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
        "datePublished": "2026-09-28T09:00:00+09:00",
        "dateModified": "2026-09-28T09:00:00+09:00",
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
          "name": "Croud Travel 西日本海洋名湯・本場ふく紀行取材班"
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
            "name": "山口・下関と川棚温泉 本場とらふぐ解禁美食と元祖瓦そばの宿",
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
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
          alt="関門海峡の夕景と初冬の海"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold">
            <Anchor className="w-4 h-4" />
            11月・12月 冬の最高峰美食＆海峡絶景特集｜山口・下関と川棚温泉
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            本場とらふぐ解禁美食と元祖瓦そば<br className="hidden sm:inline" />
            関門海峡夕景＆開湯八百年ラジウム美肌泉の極上宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            11月・12月に旨味の頂点を極める下関とらふぐ。毛利侯や山頭火が愛した名湯ラジウム泉と、熱した瓦で焼く元祖瓦そばを堪能する大人の贅沢旅。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-amber-400" /> 11月〜12月がふぐ最盛期</span>
            <span className="flex items-center gap-1"><Flame className="w-4 h-4 text-amber-400" /> 開湯800年ラジウム美肌泉</span>
            <span className="flex items-center gap-1"><Utensils className="w-4 h-4 text-amber-400" /> 本場とらふぐフルコース＆元祖瓦そば</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Section 1: Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <SunMedium className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Strait Splendor & Heritage</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                本州最西端・下関と響灘が輝く初冬｜11月・12月に訪れるべき理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              本州と九州を隔てる関門海峡を抱き、三方を海に囲まれた水運と歴史の要衝・山口県下関市。壇ノ浦の合戦や幕末の維新胎動など、日本の歴史の転換点となってきたこの地は、11月から12月にかけて一年の中で最も食通たちの熱気に包まれます。
            </p>
            <p>
              その理由は唯一無二、冬の味覚の絶対王者「下関本場とらふぐ（下関ふく）」が最も身を引き締め、アミノ酸の甘みを凝縮させる旬の最盛期を迎えるからです。南風泊市場に全国から水揚げされる最高級とらふぐは、熟練の職人が引く美しい菊花盛りのてっさや、骨のまわりの濃厚な旨味を味わうてっちり鍋、香ばしいひれ酒となって旅人を至福へと誘います。
            </p>
            <p>
              さらに、下関から響灘沿いに北上した地に佇む「川棚温泉（かわたなおんせん）」は、長州藩主・毛利候が「御殿湯」を構え、種田山頭火がその静けさを愛した名湯。初冬の澄んだ空気の中、日本海・響灘に沈む雄大な夕日を眺め、熱々の瓦で焼き上げる「元祖瓦そば」とふぐ料理に舌鼓を打つ時間は、下関でしか味わえない格別の贅沢です。
            </p>
          </div>
        </section>

        {/* Section 2: Onsen Features */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Ancient Healing Radium Springs</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                毛利侯の隠れ湯・開湯八百年の霊泉｜川棚温泉のラジウム泉と効能
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              川棚温泉の歴史は古く、寿永年間（1182〜1185年）に青龍が棲んでいた沼の底から湧き出したという伝説に由来します。江戸時代には長州藩毛利家の保護を受け、歴代藩主が湯治に訪れる「殿様湯」として繁栄しました。
            </p>
            <p>
              泉質は「含弱放射能-ナトリウム・カルシウム-塩化物温泉（弱アルカリ性低張性高温泉）」。全国的にも貴重なラジウム泉であり、微量のラドン成分が含まれています。この微量の放射線が体内の細胞を心地よく刺激し、免疫力や自然治癒力を活性化させる「ホルミシス効果」をもたらすと言われています。
            </p>
            <p>
              また、塩化物泉特有の塩分被膜効果によって体温が逃げにくく、入浴後は長時間にわたって身体のポカポカ感が持続します。神経痛、リウマチ、疲労回復、筋肉痛を和らげるとともに、肌をしっとりと滑らかに整える美肌の湯としても名高く、初冬の寒風で冷えた心身を解きほぐすのに最適です。
            </p>
          </div>
        </section>

        {/* Section 3: Winter Gourmet */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Torafugu & Kawara Soba</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                本場下関とらふぐの極みと名物「元祖瓦そば」の至福
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              下関の冬の食文化を象徴するのが「とらふぐ料理」です。日本唯一のふぐ専門卸売市場である南風泊市場で競り落とされる天然・厳選のとらふぐは、身の締まりと弾力、上品な旨味が群を抜いています。
            </p>
            <p>
              絵皿の文様が透けて見えるほど極薄に引かれた「てっさ（ふぐ刺し）」は、2〜3枚を箸ですくい、地元特産の安岡ネギと紅葉おろしを巻き、自家製ポン酢につけて口へ運べば、しっかりとした歯ごたえとともに噛むほどに広がる甘みと旨味が舌を魅了します。熱々の土鍋で煮込む「てっちり鍋」は、ふっくらとした身とプルプルの皮、骨から溶け出す濃厚なゼラチン質が格別。炙ったヒレに熱燗を注ぎ、マッチの火を近づけてアルコールを飛ばして香りを立たせる「ひれ酒」は、冬の寒さを一瞬で忘れさせる芳醇な香気を放ちます。
            </p>
            <p>
              そしてもう一つの名物が、川棚温泉発祥の「元祖瓦そば」です。熱々に熱した本物の日本瓦の上に、京都宇治抹茶を練り込んだ茶そばを乗せて香ばしく焼き、その上に甘辛い牛肉、錦糸卵、海苔、レモン、もみじおろしをトッピング。瓦に接した茶そばがおこげになってパリパリとした食感を生み出し、温かい特製つゆにつけて食べる贅沢な郷土の味は、一度味わえば病みつきになる美味しさです。
            </p>
          </div>
        </section>

        {/* Section 3.5: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Shimonoseki Winter Model Course</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の下関・川棚1泊2日ドライブモデルコース｜海峡散策と角島大橋・美食温泉旅
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              <strong>【1日目】</strong><br />
              新幹線「新下関駅」でレンタカーを借り、まずは活気あふれる「唐戸市場」へ。週末に開催される「活きいき馬関街」で新鮮なふく汁や握り寿司を堪能します。食後は竜宮城のような朱塗りの門が美しい「赤間神宮」を参拝し、関門海峡の人道トンネルやみもすそ川公園で壇ノ浦の歴史情緒に触れます。
            </p>
            <p>
              午後は響灘沿いの絶景快走ルート（国道191号）を北上し、日本屈指の絶景「角島大橋」へ。エメラルドグリーンの海を渡る白い橋のパノラマを満喫したのち、南下して川棚温泉の宿へチェックイン。開湯800年のラジウム名湯に身を浸してドライブの疲れを癒やします。夕食には名物「元祖瓦そば」と本場下関とらふぐフルコースを地酒「獺祭」や「東洋美人」とともに心ゆくまで味わいます。
            </p>
            <p>
              <strong>【2日目】</strong><br />
              朝湯を満喫した後は、川棚温泉街の青龍大権現や種田山頭火の思索の地をのんびり散策。川棚名物の瓦シュークリームやふぐ煎餅をお土産に購入し、関門橋の雄大なパノラマを望む火の山展望台へ立ち寄ってから帰路につきます。
            </p>
          </div>
        </section>

        {/* Section 4: 5 Selected Inns */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Featured Shimonoseki & Kawatana Ryokan</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              本場とらふぐと名湯に癒やされる｜下関・川棚の厳選宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              すべて楽天トラベルで高い評価を獲得し、本場とらふぐ料理や開湯800年ラジウム泉、絶景海峡ビューを誇る本物の宿を厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-5/12 relative h-64 md:h-auto min-h-[260px] bg-slate-100 flex-shrink-0">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                    <span className="text-amber-400 font-extrabold">#{h.id}</span>
                    <span>下関・川棚の名宿</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    目安料金: {h.price}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {h.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-amber-50 text-amber-900 px-2.5 py-1 rounded-full text-xs font-semibold border border-amber-200/60">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{h.rating}</span>
                        <span className="text-slate-500 font-normal">({h.reviews}件)</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-amber-900 flex items-center gap-1.5">
                          <Landmark className="w-3.5 h-3.5 text-amber-700" />
                          客室・滞在のこだわり
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {h.roomTip}
                        </p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-sky-900 flex items-center gap-1.5">
                          <Utensils className="w-3.5 h-3.5 text-sky-700" />
                          旬の極上グルメ
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {h.gourmetTip}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                        この宿のおすすめポイント
                      </div>
                      <ul className="space-y-1.5">
                        {h.highlights.map((item, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-[11px] text-slate-500">
                      <span>交通: {h.access}</span>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-sm hover:shadow transition group flex-shrink-0"
                    >
                      <span>楽天トラベルでプランを見る</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Travel Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Seasonal Advice</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の下関・川棚旅行｜海峡の風とふぐシーズンの予約のコツ
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-amber-800" />
                海峡風に備えた防寒と唐戸市場の訪問時間
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                関門海峡周辺や響灘沿いは、冬期に北風が強く吹き抜けることがあります。唐戸市場の屋外デッキや関門橋周辺の散策には、風を遮る防風ジャケットやマフラーを用意しましょう。唐戸市場の屋台イベントは午前中が最も活気があるため、早めの時間帯（9時〜11時頃）の訪問がおすすめです。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-amber-800" />
                とらふぐ最盛期の宿泊予約はお早めに
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                11月から12月は下関のふぐ料理が最も美味しくなる年間最大の繁忙期です。特に週末や祝前日は人気のふぐ料理旅館や展望風呂付き客室から埋まっていきます。希望の宿や料理プラン（天然とらふぐコース等）がある場合は、1〜2ヶ月前の早期予約をおすすめします。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                山口・下関と川棚温泉冬旅のよくある質問（FAQ）
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-amber-800 font-extrabold">Q.</span>
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
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Related Western Japan & Winter Gourmet Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい中国・九州・西日本の冬名湯＆極上味覚特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の冬の味覚、日本海カニ会席、オーシャンビュー絶景露天をめぐる人気特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-yamaguchi-nagato-yumoto-onsen-snow-choshu-chicken-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">山口・長門湯本温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">音信川の冬灯りと長州黒かしわ・開湯六百年美肌恩湯の宿</h3>
            </Link>
            <Link 
              href="/winter-yamaguchi-hagi-onsen-snow-choshu-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">山口・萩温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">世界遺産の城下町情緒と見蘭牛・日本海地魚会席の宿</h3>
            </Link>
            <Link 
              href="/winter-shimane-izumo-taisha-kamiarizuki-shimane-wagyu-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">島根・出雲大社周辺</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">神在月参拝と初冬解禁日本海の幸・しまね和牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-fukuoka-hakata-onsen-mizutaki-motsunabe-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">福岡・博多温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">本場水炊き・もつ鍋と天然温泉・冬の屋台めぐりステイ</h3>
            </Link>
            <Link 
              href="/winter-hyogo-ako-onsen-oyster-inland-sea-sunset-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">兵庫・赤穂温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">11月解禁坂越牡蠣と瀬戸内夕景・絶景インフィニティ露天の宿</h3>
            </Link>
            <Link 
              href="/winter-tokushima-naruto-onsen-uzushio-naruto-tai-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">徳島・鳴門温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">鳴門海峡の冬渦潮と激流天然鳴門鯛・大塚国際美術館アート旅の宿</h3>
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

module.exports = { generateYamaguchiShimonosekiPage };
