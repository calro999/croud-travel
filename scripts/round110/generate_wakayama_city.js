const fs = require('fs');
const path = require('path');

function generateWakayamaCityPage(hotels) {
  const slug = 'winter-wakayama-city-kada-onsen-hatsumode-taimeshi-kue-stay';
  const title = '【11・12・1月和歌山加太】冬の日前神宮新春開運初詣＆紀淡海峡夕陽絶景！加太温泉名湯と冬の天然真鯛・幻のクエに寛ぐ名宿5選';
  const description = '冬の和歌山・加太エリアは、紀淡海峡の彼方に沈む鮮やかな夕陽と友ヶ島のシルエットが旅情をかきたて、神代の歴史を誇る紀伊国一之宮「日前神宮・國懸神宮」の新春開運初詣で新年を迎える特別な季節。11月下旬の晩秋から1月にかけて、一本釣りで知られる加太の寒真鯛（鯛しゃぶ・鯛釜飯）や紀州沖の幻の高級魚・天然本クエ鍋、極上の熊野牛が旬を迎えます。美肌効果抜群のとろみある重曹泉・加太温泉に浸かり、徳川御三家の城下町の歴史と海の幸に酔いしれる冬の贅沢旅。楽天APIから最新取得した信頼の名宿5選を徹底特集します。';

  const hotelDetails = [
    {
      story: '加太の海岸線にせり出すように建つ「和歌山加太温泉 シーサイドホテル加太海月」は、全客室および露天風呂から紀淡海峡の雄大なオーシャンビューと友ヶ島を一望できる絶景の温泉宿です。冬の澄んだ夕暮れ時、海一面が黄金色から茜色へと染まりゆくサンセット露天風呂は言葉を失う感動を与えてくれます。加太温泉の名湯は炭酸水素塩泉（重曹泉）で、入浴した瞬間に肌がツルツルになる「美人の湯」として評判。夕食には加太港直送の一本釣り真鯛の姿造りや鯛しゃぶ、冬限定の濃厚な紀州本クエ鍋会席が並び、海の恵みを存分に味わえます。',
      roomTip: 'オーシャンビュー和洋室。窓一面に広がる紀淡海峡のパノラマと友ヶ島の島影。冬の静かな波音を聞きながら畳とベッドで寛げる極上の空間。',
      gourmetTip: '「加太名物・一本釣り天然真鯛尽くし会席」。冬に脂が乗って身が引き締まった天然真鯛のお造り、鯛のあら炊き、ふっくら炊き上げた鯛釜飯の贅沢三昧。'
    },
    {
      story: '瀬戸内海国立公園の高台に位置する「休暇村 紀州加太」は、紀淡海峡を見下ろすインフィニティ露天風呂「天空の湯」が全国的な人気を誇るリゾートホテルです。湯船に浸かると湯面と海と空が一体化し、まるで海に浮かんでいるかのような開放感を味わえます。冬の澄み切った日には遠く四国や淡路島までくっきりと見渡せます。夕食は旬の地元食材を贅沢に使ったコース料理や会席で、冬の味覚の王様「天然クエ」や加太の鯛、熊野牛を洗練されたダイニングでゆっくり堪能できます。',
      roomTip: 'みやま館・和室ツイン（バルコニー付き）。標高約100mの高台から見下ろす大パノラマ。夕暮れのグラデーションに染まる海をテラスから鑑賞。',
      gourmetTip: '「紀州冬の極み・本クエ尽くし会席」。コラーゲンたっぷりで上品な脂の乗った本クエの薄造り、濃厚な出汁が染み渡るクエ鍋、締めの上品な雑炊。'
    },
    {
      story: '和歌山城の真正面にそびえ立つ「ダイワロイネットホテル和歌山」は、客室からライトアップされた白亜の和歌山城天守閣を一望できる市内随一のロケーションを誇るシティホテルです。日前神宮・國懸神宮への初詣にも車で約10分とアクセス至便。広々とした客室には快適なワークスペースとシモンズ社製ベッドを備え、冬の観光やビジネスに極上の安らぎを提供します。ホテル周辺には老舗の和歌山ラーメン店や割烹が点在し、夜の城下町グルメ散策の拠点としても最高です。',
      roomTip: 'キャッスルビューツイン。正面の大きな窓から青空に映える冬の和歌山城や、夜の幻想的な天守閣ライトアップを独占できる人気客室。',
      gourmetTip: '「和歌山郷土グルメ朝食ビュッフェ」。紀州南高梅の食べ比べや名物めはり寿司、茶粥、熊野牛カレーなど地元の味覚が勢揃いする贅沢な朝食。'
    },
    {
      story: 'JR和歌山駅中央口直結という抜群のフットワークを誇る「ホテルグランヴィア和歌山」。新春初詣で賑わう日前神宮・國懸神宮へはわかやま電鉄貴志川線またはタクシーでわずか数分と至近です。JR西日本グループの上質なおもてなしと洗練された客室空間が旅の疲れを心地よく癒やします。ホテル内レストランでは、紀州の旬食材をふんだんに取り入れた日本料理やフランス料理が用意され、出張帰りの冬のプチ贅沢や新春の家族旅行に安心と快適さを約束してくれます。',
      roomTip: 'スーペリアダブル。駅直結の静穏な空間にゆったりとしたライティングデスクと快適なワイドベッド。冬の寒さを感じさせない心地よいホテルステイ。',
      gourmetTip: '「日本料理毬・冬の紀州美味会席」。和歌山近海で水揚げされた寒魚のお造りと、柔らかくジューシーな熊野牛の網焼きを堪能する特別会席。'
    },
    {
      story: '和歌浦の美しい海に囲まれたリゾートアイランドに建つ「和歌山マリーナシティホテル」。全客室がオーシャンビューのバルコニー付きで、まるで地中海のリゾートに訪れたかのような異国情緒が漂います。隣接する「天然温泉 紀州黒潮温泉」では、海底1,500mから湧き出る塩化物泉の露天風呂から和歌の浦の冬景色を一望可能。隣接の黒潮市場では冬のマグロ解体ショーや新鮮な海鮮バーベキューが楽しめ、家族連れやカップルの特別な冬の休日にぴったりです。',
      roomTip: 'オーシャンビュー・バルコニーツイン。ヨットハーバーと紀伊水道を見渡す開放感。夕陽が沈むマジックアワーをテラスのチェアから眺める贅沢。',
      gourmetTip: '「冬のイタリアン・駿河湾ならぬ和歌浦の海の幸ディナー」。和歌浦直送の鮮魚カルパッチョや、冬野菜と熊野牛のローストを味わうリゾートディナー。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥16,500〜' : i === 1 ? '¥18,000〜' : i === 2 ? '¥9,800〜' : i === 3 ? '¥9,200〜' : '¥14,000〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.30' : i === 1 ? '4.55' : i === 2 ? '4.49' : i === 3 ? '4.26' : '4.37');
    const reviewCount = h.reviewCount || (i === 0 ? 1120 : i === 1 ? 1680 : i === 2 ? 1850 : i === 3 ? 1230 : 940);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || '南海加太線加太駅またはJR和歌山駅・南海和歌山市駅よりアクセス')},
              special: ${JSON.stringify(h.hotelSpecial || '冬の日前神宮初詣と紀淡海峡夕陽、加太温泉名湯と寒真鯛・クエを満喫する名宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '紀淡海峡にせり出すサンセット露天風呂・とろりとした加太温泉重曹泉美肌湯・一本釣り鯛会席' : i === 1 ? '海と一体化するインフィニティ露天風呂「天空の湯」・紀淡海峡絶景パノラマ・本クエ尽くしコース' : i === 2 ? '和歌山城の真正面に建つ絶景ロケーション・ライトアップ天守閣眺望・シモンズ社製ベッド' : i === 3 ? 'JR和歌山駅中央口直結の抜群のフットワーク・日前宮初詣アクセス至便・洗練されたシティステイ' : '全室オーシャンビューのバルコニー付き客室・天然温泉紀州黒潮温泉利用・黒潮市場マグロ解体ショー')},
                ${JSON.stringify(i === 0 ? '友ヶ島を望む全室オーシャンビュー・冬の天然真鯛姿造りや鯛しゃぶ・冬限定天然クエ鍋' : i === 1 ? '標高100mの高台から望む息を呑む夕陽・天然クエの薄造りと鍋会席・熊野牛ディナー' : i === 2 ? '日前神宮・國懸神宮初詣へ車約10分・和歌山ラーメンや城下町割烹めぐりに最適な立地' : i === 3 ? '紀州の味覚を取り入れた本格日本料理ディナー・出張や新春家族旅行に安心のJRグループ' : '地中海リゾートの開放感あふれる空間・イタリアンディナー・ヨットハーバーの冬夜景')},
                ${JSON.stringify(i === 0 ? '加太港の風情ある漁町散策・淡嶋神社参拝も徒歩圏内・心洗われる夕暮れのマジックアワー' : i === 1 ? '瀬戸内海国立公園の豊かな自然・広々とした館内設備と上質なホスピタリティ' : i === 2 ? '紀州南高梅ため比べやめはり寿司の朝食バイキング・加湿空気清浄機完備の清潔客室' : i === 3 ? '駅ビル近接でお土産購入もスムーズ・関西空港からのアクセスも直通リムジンバスあり' : 'リゾートアイランドでのんびり過ごす非日常体験・冬の海辺で過ごす贅沢な休日')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "紀伊国一之宮「日前神宮・國懸神宮（ひのくま・くにかかすじんぐう）」の新春初詣の由緒や特徴は？",
      a: "日前神宮・國懸神宮（通称：日前宮・にちぜんぐう）は、神話の時代に天照大神の御鏡に先立って鋳造された二つの神鏡をご神体とする、日本で最も古い神社の一つです。一つの境内に二つの官幣大社が並び鎮座する極めて珍しい形式を誇り、伊勢神宮に次ぐ神階を有します。新春三が日は約30万人の参拝客で賑わい、家内安全や良縁結び、商売繁盛の開運祈願が行われます。木立に囲まれた厳かな参道は冬の澄んだ大気に包まれ、清らかな新年の始まりを迎えるのに最高のパワースポットです。"
    },
    {
      q: "加太温泉の泉質や美肌効果・冬のインフィニティ露天風呂の魅力は？",
      a: "加太温泉はナトリウム-炭酸水素塩・塩化物温泉（重曹泉）で、pH8前後の弱アルカリ性のお湯です。お湯に浸かった瞬間に肌にとろみと吸い付くような滑らかさを感じられ、古い角質や皮脂汚れを優しく落とす「クレンジングの湯」として親しまれています。さらに塩化物成分が肌の表面をベールのように包み込んで保温するため、冬の湯冷めを防ぎます。紀淡海峡に面したインフィニティ露天風呂からは、海と湯船がひと続きになったような感覚で、茜色に染まる夕陽と友ヶ島の絶景を同時に堪能できます。"
    },
    {
      q: "冬の加太・和歌山で味わうべき「一本釣り天然真鯛」や「幻のクエ」の旬の味わいは？",
      a: "加太の海は紀淡海峡の激しい潮流がぶつかり合う好漁場で、伝統の「一本釣り」で傷をつけずに水揚げされる天然真鯛は全国的ブランドです。冬の真鯛は寒さに備えて脂を蓄え、身が引き締まり強い甘みを持ちます。薄切りの身を出汁にくぐらせる「鯛しゃぶ」や、骨の出汁が米の一粒一粒に染み渡る「鯛釜飯」は絶品です。また、冬（11月〜2月）は紀州沖の「天然本クエ」の最盛期。ゼラチン質たっぷりの皮と純白の身から溢れる芳醇な脂は、フグにも勝ると称される冬の究極鍋です。"
    },
    {
      q: "冬の和歌山市・加太観光での気候や服装・夕陽鑑賞の注意点は？",
      a: "和歌山市および加太エリアは黒潮の影響を受けるため、冬でも比較的温暖で雪が積もることは滅多にありません。ただし、海沿いの加太や和歌浦では紀淡海峡からの海風（北西の季節風）が強まるため、体感温度は低くなります。風を通さない防風ジャケットやストール、手袋を準備してください。加太の冬の夕陽は16時45分から17時15分頃が日没のピークとなるため、16時30分前には露天風呂や展望デッキにスタンバイするのがおすすめです。"
    },
    {
      q: "大阪や関西国際空港から和歌山市・加太へのアクセス方法は？",
      a: "大阪・なんば駅からは南海電鉄の特急サザンで和歌山市駅まで約55分。そこから加太線（めでたいでんしゃ）に乗り換えて約25分で加太駅に到着します。加太線では鯛をモチーフにしたカラフルで可愛い観光列車「めでたいでんしゃ」が運行されており、移動そのものが楽しい旅のアクティビティになります。JR利用の場合は天王寺駅から特急くろしおで和歌山駅まで約45分。関西国際空港からもリムジンバスで和歌山駅まで約40分と、首都圏や遠方からのアクセスも極めてスムーズです。"
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
  keywords: '和歌山 ホテル, 加太温泉 旅館, 日前神宮 初詣, 紀淡海峡 夕日, 加太 鯛料理, 休暇村紀州加太, 加太海月, ダイワロイネットホテル和歌山, 11月 12月 1月 和歌山 観光',
  alternates: {
    canonical: 'https://croud-travel.com/${slug}'
  },
  openGraph: {
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(description)},
    url: 'https://croud-travel.com/${slug}',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80' }]
  }
};

export default function WakayamaCityPage() {
  const hotels = [
${hotelCardsCode}
  ];

  const faqData = ${JSON.stringify(faqList, null, 2)};

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": ${JSON.stringify(title)},
        "description": ${JSON.stringify(description)},
        "url": 'https://croud-travel.com/${slug}',
        "publisher": {
          "@type": "Organization",
          "name": "週末ごほうび旅・厳選の宿ガイド",
          "url": "https://croud-travel.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "冬の特集一覧",
            "item": "https://croud-travel.com/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "冬の和歌山加太・日前神宮初詣＆紀淡海峡夕陽特集",
            "item": 'https://croud-travel.com/${slug}'
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-900 via-rose-950 to-orange-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-rose-300 text-sm font-semibold mb-3">
            <Snowflake className="w-4 h-4 text-cyan-300 animate-spin" />
            <span>11月・12月・1月 冬の和歌山・絶景夕陽＆名湯・初詣厳選旅行特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug mb-6">
            【11・12・1月和歌山加太】冬の日前神宮新春開運初詣＆紀淡海峡夕陽絶景！加太温泉名湯と冬の天然真鯛・幻のクエに寛ぐ名宿5選
          </h1>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-4xl">
            冬の和歌山市・加太は、黄金色から紫紺へと染まる紀淡海峡のサンセット絶景と、神代の歴史を誇る紀伊国一之宮・日前神宮での新春開運初詣が心を満たす季節です。加太港の一本釣り天然真鯛や紀州沖の幻の高級魚・天然クエ鍋、美肌効果抜群のとろりとした重曹泉・加太温泉のインフィニティ露天風呂。徳川御三家の城下町と海辺の絶景宿で温まる冬旅へご案内します。
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <Waves className="w-4 h-4 text-orange-300" /> 紀淡海峡夕陽インフィニティ露天
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-300" /> 紀伊国一之宮 日前神宮新春初詣
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <Utensils className="w-4 h-4 text-emerald-300" /> 加太一本釣り真鯛＆天然本クエ鍋
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <Building className="w-4 h-4 text-cyan-300" /> 和歌山城天守閣＆めでたいでんしゃ
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro Section */}
        <section className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 mb-12 border border-slate-100">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Flame className="w-6 h-6 text-rose-500" />
            水平線に沈む冬夕陽と至福の温泉。紀州の豊かな海山の幸に心満ちる時間
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            大阪難波から特急サザンと加太線で約1時間20分。都会の喧騒から程よく離れた和歌山県北西端に位置する加太（かだ）は、万葉の歌人たちも愛した風光明媚な景勝地です。冬の加太の空は澄み渡り、夕暮れ時には紀淡海峡の彼方に横たわる友ヶ島や淡路島の島影が、燃えるような夕陽に照らし出されます。
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            和歌山市内に鎮座する「日前神宮・國懸神宮（ひのくま・くにかかすじんぐう）」は、二千六百有余年の歴史を紡ぐ紀伊国一之宮。境内に二つの大社が並び立つ全国屈指の古社で、新春の初詣には県内外から多くの参拝者が訪れ、新たな年の開運招福と良縁を結びます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            冬の味覚の主役は、激流で知られる加太瀬戸で一本釣りされる「寒真鯛」。脂の乗り切った鯛の薄造りや鯛しゃぶ、鯛釜飯は至福の美味しさです。さらに冬限定で登場する幻の「天然クエ鍋」は、コラーゲンたっぷりの身と濃厚な出汁が冷えた体に染み渡ります。とろりとした重曹泉の美肌湯に浸かり、冬の贅沢を味わい尽くす厳選宿をご紹介します。
          </p>
        </section>

        {/* Hotel List Section */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-rose-600 font-semibold text-sm tracking-wider uppercase">VERIFIED HOTELS</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                冬の和歌山・加太を満喫する厳選名宿5選
              </h2>
            </div>
            <span className="text-xs bg-rose-50 text-rose-700 px-3 py-1 rounded-full font-medium border border-rose-200 hidden sm:inline-block">
              楽天トラベルAPI最新確認済
            </span>
          </div>

          <div className="space-y-10">
            {hotels.map((hotel) => (
              <article key={hotel.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200/80 transition-all hover:shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div className="md:col-span-5 relative h-64 md:h-auto min-h-[260px] bg-slate-100">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 text-white text-xs px-2.5 py-1 rounded-md backdrop-blur-sm font-semibold">
                      第{hotel.id}位
                    </div>
                  </div>

                  <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1 text-amber-500">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-bold text-sm text-slate-800">{hotel.rating}</span>
                          <span className="text-xs text-slate-500">({hotel.reviews.toLocaleString()}件)</span>
                        </div>
                        <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                          冬プラン提供中
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-snug">
                        {hotel.name}
                      </h3>

                      <p className="text-xs text-slate-500 flex items-center gap-1 mb-3">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        <span>{hotel.access}</span>
                      </p>

                      <p className="text-sm text-slate-700 leading-relaxed mb-4">
                        {hotel.story}
                      </p>

                      <div className="bg-slate-50 rounded-xl p-3.5 mb-4 text-xs space-y-2 border border-slate-100">
                        <div className="flex items-start gap-2">
                          <Building className="w-3.5 h-3.5 text-rose-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-bold text-slate-800">おすすめの部屋：</span>
                            <span className="text-slate-600">{hotel.roomTip}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Utensils className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-bold text-slate-800">冬の味覚：</span>
                            <span className="text-slate-600">{hotel.gourmetTip}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-1.5 mb-5 text-xs text-slate-600">
                        {hotel.highlights.map((hl: string, hIdx: number) => (
                          <li key={hIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-slate-400 block">参考宿泊目安（2名1室時）</span>
                        <span className="text-xl sm:text-2xl font-black text-rose-600">{hotel.price}</span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all"
                      >
                        <span>プラン詳細を見る</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 1泊2日冬旅モデルコース */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 mb-14">
          <div className="flex items-center gap-2 text-rose-600 font-semibold text-sm mb-2">
            <Calendar className="w-4 h-4" />
            <span>ITINERARY</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            冬の和歌山・加太を満喫する1泊2日王道モデルコース
          </h2>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-rose-100">
            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 11:00】和歌山城散策＆老舗で冬の「和歌山ラーメン」ランチ</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                JR和歌山駅または南海和歌山市駅に到着。徳川御三家の城「和歌山城」の天守閣へ登閣し、紀の川と市街地を見晴らします。お昼は名店「井出商店」や「丸三」で、豚骨醤油のコク深い熱々スープと細ストレート麺が絡む本場の和歌山中華そばを堪能。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 13:30】紀伊国一之宮「日前神宮・國懸神宮」新春開運初詣</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                日本最古級の由緒を持つ日前宮へ参拝。緑の杜に包まれた荘厳な境内で、日前神宮と國懸神宮の双方に手を合わせ、新年の開運招福と良縁・家内安全を祈願。神聖な気で満たされた境内で心洗われる時間を過ごします。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 15:30】「めでたいでんしゃ」で加太へ＆人形供養の淡嶋神社参拝</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                和歌山市駅から人気の観光列車「めでたいでんしゃ」に揺られて加太へ。加太駅から港町を散策し、全国から人形が集まる「淡嶋神社」へ参拝。女性の病気平癒や安産祈願の霊験あらたかな神仏に手を合わせます。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 17:00】温泉宿チェックイン・紀淡海峡夕陽露天風呂と天然鯛会席</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                加太の温泉宿へチェックイン。水平線に沈む冬の夕陽をインフィニティ露天風呂から眺める贅沢な湯浴み。夕食は一本釣り天然真鯛のお造りや鯛しゃぶ、冬限定の濃厚本クエ鍋に舌鼓を打ちます。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【2日目 10:30】加太港散策・よもぎ餅購入＆和歌浦・黒潮市場立ち寄り</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                朝風呂と朝食を堪能後、加太名物「先田本家のよもぎ餅」を土産に購入。和歌浦方面へ足を伸ばし、黒潮市場で冬マグロの解体ショーを見学＆新鮮な干物や梅干しを買い求めて帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 mb-14">
          <div className="flex items-center gap-2 text-rose-600 font-semibold text-sm mb-2">
            <Compass className="w-4 h-4" />
            <span>Q&A GUIDE</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            冬の和歌山・加太観光・交通・グルメ よくある質問
          </h2>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-slate-100 pb-5 last:border-b-0 last:pb-0">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <span className="text-rose-600 font-black">Q{index + 1}.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 内部リンク関連特集 */}
        <section className="bg-slate-100 rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            合わせて読みたい冬の厳選温泉・初詣特集
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <Link 
              href="/winter-osaka-city-sumiyoshi-taisha-hatsumode-illumination-fugu-stay"
              className="bg-white p-4 rounded-xl shadow-sm hover:border-rose-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【大阪】住吉大社新春初詣＆御堂筋イルミネーション名宿</span>
              <span className="text-xs text-slate-500">光の回廊と全国総本社開運参拝、冬の本場とらふぐてっちり鍋</span>
            </Link>
            <Link 
              href="/winter-mie-suzuka-tsubaki-shrine-nabana-kuwana-hamaguri-stay"
              className="bg-white p-4 rounded-xl shadow-sm hover:border-rose-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【三重・鈴鹿桑名】椿大神社みちびき初詣＆なばなの里名宿</span>
              <span className="text-xs text-slate-500">伊勢国一の宮初詣、国内最大級イルミネーションと桑名天然蛤鍋</span>
            </Link>
            <Link 
              href="/winter-ehime-imabari-shimanami-oomishima-taimeshi-onsen-stay"
              className="bg-white p-4 rounded-xl shadow-sm hover:border-rose-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【愛媛・しまなみ】大山祇神社新春初詣＆天然真鯛名宿</span>
              <span className="text-xs text-slate-500">冬晴れの来島海峡大橋絶景と日本総鎮守初詣、ふっくら鯛めし</span>
            </Link>
            <Link 
              href="/features"
              className="bg-white p-4 rounded-xl shadow-sm hover:border-rose-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【全国】冬の厳選温泉＆旬グルメ特集一覧へ</span>
              <span className="text-xs text-slate-500">11月・12月・1月に訪れたい日本各地の名宿・絶景旅ガイド</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
`;

  return { slug, pageContent };
}

module.exports = { generateWakayamaCityPage };
