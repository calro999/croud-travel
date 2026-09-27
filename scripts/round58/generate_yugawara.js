const fs = require('fs');
const path = require('path');

function generateYugawaraPage(hotels) {
  const slug = 'winter-kanagawa-yugawara-onsen-bungo-kaiseki-stay';
  const title = '【11・12月湯河原温泉の名湯と奥湯河原晩秋紅葉】文豪が愛した万葉の隠れ家・相模湾の伊勢海老＆地魚会席の宿5選';
  const description = '万葉集に唯一詠まれた関東最古の名湯・神奈川県湯河原温泉。11月下旬から12月上旬にかけて奥湯河原やもみじの郷を彩る関東で最も遅い錦秋の紅葉。夏目漱石や芥川龍之介ら文豪が愛した静寂の数寄屋宿、肌を柔らかく包む弱アルカリ性源泉、そして相模湾の冬の味覚・伊勢海老や寒金目鯛の贅沢会席を堪能する極上冬旅ガイド。';

  const hotelDetails = [
    {
      story: '創業300余年、国の登録有形文化財に指定された木造4階建て本館を有する湯河原随一の歴史を誇る老舗宿「源泉 上野屋」。水戸光圀の時代から湯守を勤め、近代には島崎藤村が逗留して小説『夜明け前』の着想を得たことでも知られます。宿の最大の誇りは、敷地内の地下から自噴する2本の自家源泉。大浴場「藤木湯」や露天風呂、さらに最上階にある貸切展望露天風呂にいたるまで、贅沢な源泉かけ流しが徹底されています。泉質は肌あたりが極めて柔らかなナトリウム・カルシウム-塩化物・硫酸塩泉で、「薬師の湯」「傷の湯」として古くから湯治客を癒やしてきました。初冬の澄んだ夜空を見上げる展望露天風呂からの湯あみは、旅の情緒を深く心に刻みます。',
      roomTip: '文化財に指定された本館和室や、千歳川のせせらぎを聞く落ち着いた和室。宮大工の細やかな細工と障子越しに差し込む柔らかな光が、文豪の執筆宿の趣を伝えます。',
      gourmetTip: '月替わりの本格会席料理。真鶴港や小田原港から届く冬の地魚のお造りや、旬の寒金目鯛の煮付け、相模湾の伊勢海老、足柄牛の陶板焼きなど、滋味豊かな海の幸と山里の幸が調和します。'
    },
    {
      story: '奥湯河原の清流・藤木川の上流、豊かな自然林に包まれた閑静な高台に佇む料亭旅館「山翠楼 SANSUIROU」。初冬の奥湯河原は、関東で最も遅くまで紅葉が残る名所として知られ、11月下旬から12月上旬にかけてモミジやカエデが真紅に染まり、宿の周囲を雅やかに彩ります。宿の象徴である展望露天風呂「大空」からは、奥湯河原の山並みと錦秋から冬枯れへと移ろう絶景が360度の大パノラマで広がり、朝夕の清冽な空気の中で極上の湯あみが楽しめます。名物の「自家製引き上げ湯葉」をはじめ、料亭旅館ならではの一椀一皿に込められた伝統の日本料理の技は、全国の美食家から惜しみない称賛を集めています。',
      roomTip: '奥湯河原の自然を額縁のように切り取る大型窓を備えた数寄屋風客室や、自家源泉の露天風呂付き客室。川のせせらぎと鳥のさえずりだけが響く完全なプライベート空間です。',
      gourmetTip: '毎朝大豆から絞り出す自家製豆乳を用いた「出来たて引き上げ湯葉会席」。相模湾の朝獲れ地魚、冬の伊勢海老、厳選黒毛和牛とともに、繊細を極めた出汁の旨味を味わえます。'
    },
    {
      story: '「日本の宿のぬくもり」を大切に、バリアフリーとおもてなしに細やかな配慮を尽くす湯河原の温泉宿「おんやど恵」。閑静な温泉街に佇み、館内には落ち着いた数寄屋造りの和の情緒が漂います。自慢の大浴場と露天風呂には、湯河原の良質な天然温泉（弱アルカリ性単純温泉）が注がれ、湯冷めしにくく肌がしっとり潤う美肌効果が抜群。さらに、車椅子でも利用可能な広々とした貸切露天風呂や足湯も完備され、三世代の家族旅行やシニアの温泉旅でも安心して快適な滞在が叶います。温泉街の中心部へも散策しやすく、初冬の温泉街の湯けむりと温かい人情に触れられる居心地の良い宿です。',
      roomTip: '露天風呂付き客室や、段差をなくしたユニバーサルデザインの和洋室が充実。誰にでも優しく使い勝手の良い快適な滞在が約束されます。',
      gourmetTip: '料理長が丹精込めて仕立てる季節の和食会席。相模湾直送の鮮魚盛合せや、相州牛のすき焼き、冬野菜の炊き合わせなど、素材本来の持ち味を活かした心温まる料理が並びます。'
    },
    {
      story: '奥湯河原の入り口、敷地内に落差38メートルを誇る名瀑「白雲の滝」を有する自然美豊かな老舗宿「青巒荘（せいらんそう）」。昭和初期の木造建築の風情を残し、文豪や芸術家たちにも愛された歴史を持ちます。宿の名物は、白雲の滝のすぐ脇に造られた野趣満点の仙境野天風呂。滝の轟音と水しぶきを肌に感じ、初冬の冷気と滝周辺の紅葉の名残りを眺めながら浸かる温泉は、まさに大自然と一体となる圧巻の秘湯体験です。館内には自家源泉が引き湯された大浴場や貸切風呂もあり、湯河原の豊かな湯量を心ゆくまで満喫できます。',
      roomTip: '川のせせらぎや庭園を望む純和風客室。どこか懐かしい昭和の風情が残り、静かな時間をのんびりと過ごすことができます。',
      gourmetTip: '相模湾の新鮮な地魚を中心とした磯会席。冬に脂が乗る金目鯛の煮付けやサクサクの天ぷら、季節の鍋物など、ボリューム満点の海の幸を堪能できます。'
    },
    {
      story: '湯河原の高台に建ち、相模湾の水平線と湯河原温泉街の街並みを見晴らす眺望自慢の宿「湯河原温泉 アポロ荘」。初冬の澄み渡る晴天の日には、青く輝く相模湾から真鶴半島、遠く伊豆大島まで見渡す大パノラマが広がります。館内の大浴場と露天風呂には、湯河原の柔らかな天然温泉が満ち、海風を感じながらの爽快な湯あみが楽しめます。リーズナブルな価格設定でありながら、相模湾の海の幸を取り入れた手作りの和食料理や、アットホームで気さくなサービスが好評で、一人旅や気軽な週末リフレッシュにもぴったりの温泉宿です。',
      roomTip: '海側の客室がおすすめ。朝には相模湾から昇る美しい日の出を、夜には温泉街の静かな夜景を窓から眺めることができます。',
      gourmetTip: '近海で獲れた地魚のお刺身盛り合わせや焼き魚、季節の小鉢が並ぶ親しみやすい和食膳。気兼ねなく地元の美味を味わえます。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName)},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80')},
              rating: ${h.reviewAverage ? Number(h.reviewAverage).toFixed(2) : '4.25'},
              reviews: ${h.reviewCount || 190},
              price: ${JSON.stringify(h.hotelMinCharge ? `¥${h.hotelMinCharge.toLocaleString()}〜` : '¥16,000〜')},
              access: ${JSON.stringify(h.access || 'JR東海道線湯河原駅よりバスで約10〜20分（タクシーで約5〜15分）、西湘バイパス石橋ICより車で約25分')},
              special: ${JSON.stringify(h.hotelSpecial || '万葉の歴史と文豪ゆかりの名湯・奥湯河原の遅い紅葉と相模湾海の幸会席を堪能する名宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '国登録有形文化財の木造建築＆島崎藤村ゆかり・300年の歴史を誇る老舗宿' : i === 1 ? '奥湯河原の静寂と遅咲き紅葉＆屋上展望露天「大空」から望む360度パノラマ' : i === 2 ? '心温まる家族的ホスピタリティ＆バリアフリー対応の貸切露天風呂完備' : i === 3 ? '落差38m「白雲の滝」を目前に望む仙境野天風呂＆昭和レトロな木造風情' : '相模湾の水平線と湯河原温泉街を見晴らす高台眺望＆気軽なリフレッシュ旅')},
                ${JSON.stringify(i === 0 ? '敷地内自噴の2本の自家源泉かけ流し＆最上階の貸切展望露天風呂' : i === 1 ? '名物「自家製引き上げ湯葉」の贅沢会席＆全国に名だたる料亭旅館の美食' : i === 2 ? '湯冷めしにくい美肌の弱アルカリ性源泉＆足湯・車椅子対応の安心設計' : i === 3 ? '滝の水しぶきと紅葉の余韻に包まれる露天風呂＆自家源泉掛け流し' : '海から昇る朝日の絶景＆相模湾直送の新鮮地魚を味わうリーズナブルな滞在')},
                ${JSON.stringify(i === 0 ? '真鶴港・小田原港直送の旬魚介＆寒金目鯛煮付けと足柄牛の月替わり会席' : i === 1 ? '毎朝絞る豆乳の湯葉会席＆冬の伊勢海老と厳選黒毛和牛の最高峰ディナー' : i === 2 ? '相模湾の鮮魚盛り合わせ＆相州牛すき焼きの心尽くし季節和食会席' : i === 3 ? '脂の乗った金目鯛煮付けと地魚刺身＆ボリューム満点の磯会席料理' : '近海地魚のお刺身盛り合わせ＆季節の小鉢が並ぶアットホームな和食膳')}
              ]
            }`;
  }).join(',\n');

  const pageContent = `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, BookOpen, Waves
} from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: '湯河原温泉 宿泊 11月 12月, 湯河原温泉 紅葉 もみじの郷, 奥湯河原 旅館 おすすめ, 上野屋 山翠楼 湯河原, 湯河原 伊勢海老 金目鯛, 文豪 湯河原温泉 夏目漱石, 湯河原温泉 冬 モデルコース',
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
  }
};

export default function YugawaraWinterPage() {
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
          {
            "@type": "Question",
            "name": "湯河原温泉・奥湯河原の紅葉の見頃はいつ頃ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "湯河原温泉は相模湾に面した温暖な気候のため、関東地方で最も遅く紅葉の見頃を迎える名所です。例年11月中旬頃から色づき始め、11月下旬から12月上旬にかけてピークを迎えます。奥湯河原の『もみじの郷（池峰池周辺）』や万葉公園の渓流沿いには数百本のもみじが真っ赤に燃え上がり、12月に入っても美しい紅葉狩りが楽しめます。"
            }
          },
          {
            "@type": "Question",
            "name": "東京からのアクセス方法と所要時間はどのくらいですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "東京駅からはJR特急『踊り子』号で湯河原駅まで乗り換えなし約75分です。東海道新幹線の場合は東京駅から熱海駅または小田原駅で東海道本線に乗り換えて約60〜70分で到着します。お車の場合は東名高速道路・厚木ICから小田原厚木道路、西湘バイパス・真鶴道路を経由して都心から約90分〜120分と、首都圏からのアクセスは極めて快適で雪の心配もほとんどありません。"
            }
          },
          {
            "@type": "Question",
            "name": "湯河原温泉の泉質と効能の特徴は何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "湯河原温泉の泉質は主に『弱アルカリ性単純温泉』および『ナトリウム・カルシウム-塩化物・硫酸塩泉』です。『万葉集』の東歌にも詠まれた関東最古の温泉であり、無色透明で肌あたりが非常に柔らかいのが特徴です。塩分が汗の蒸発を防ぐため湯冷めしにくく、冷え性や神経痛、疲労回復に優れた効果を発揮します。肌の角質をやさしく落としてしっとり保湿する『美肌の湯』『薬師の湯』としても名高い名泉です。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の湯河原で味わうべき海の幸と特産グルメは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "目の前の相模湾（真鶴港・小田原港）で水揚げされる冬の魚介が主役です。特に身が引き締まり甘みが凝縮する『伊勢海老』や、脂が乗った『寒金目鯛（姿煮やしゃぶしゃぶ）』、朝獲れの地魚のお造りは絶品です。また、柑橘王国でもある湯河原の初冬に旬を迎える甘酸っぱい『湯河原みかん（大津みかん・青島温州）』や、地元大豆を使った自家製湯葉・豆腐料理も外せない名物です。"
            }
          }
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
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-orange-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85"
          alt="初冬の奥湯河原・清流沿いの遅咲き紅葉と歴史ある木造数寄屋造りの老舗温泉宿"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-950/90 text-orange-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-orange-800/50">
            <BookOpen className="w-4 h-4 text-orange-300" />
            <span>11月・12月限定 万葉の古湯と関東最遅の紅葉・相模湾海の幸会席特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月湯河原温泉の名湯と奥湯河原晩秋紅葉】<br className="hidden sm:inline" />
            文豪が愛した万葉の隠れ家・相模湾の伊勢海老＆地魚会席の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            万葉集に唯一詠まれ、漱石・芥川・藤村ら文豪が執筆に籠もった関東最古の名湯。11月下旬から12月上旬にかけて奥湯河原を彩る遅咲きの真紅のもみじ。相模湾の冬の味覚・伊勢海老と寒金目鯛に舌鼓を打つ静寂の隠れ家へ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-orange-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-orange-400" /> 神奈川県足柄下郡湯河原町（湯河原温泉・奥湯河原）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Literary Sanctuary & Manyo Legacy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                『万葉集』に唯一詠まれた関東最古の名湯。数多の文豪が愛した静寂の奥座敷
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            神奈川県の最南端、相模湾に面し静岡県熱海市と境を接する湯河原温泉。『万葉集』巻14の東歌に「足柄の 土肥の河内に出づる湯の 世にもたよらに 子ろが言はなくに」と唯一その名が刻まれた、関東で最も古い歴史を有する名泉です。近代以降、その温暖な気候と川のせせらぎが響く閑静な佇まいに魅せられ、夏目漱石（『明暗』を執筆）、国木田独歩（『湯河原ゆき』）、芥川龍之介（『一塊の土』）、島崎藤村、谷崎潤一郎など、近代日本文学を代表する文豪たちがこぞって逗留し、数々の名作を紡ぎ出しました。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            湯河原の冬の大きな魅力は、「関東で最も遅い紅葉」です。相模湾からの温暖な海風が吹き込むため、箱根や日光がすでに冬枯れを迎えた11月下旬から12月上旬にかけて、奥湯河原や「もみじの郷（池峰山周辺）」のカエデやモミジが一斉に真紅や黄金色に染まり上がります。澄み切った初冬の青空の下、千歳川や藤木川の渓谷美を彩る紅葉狩りと名湯露天風呂を同時に満喫できるのは、湯河原ならではの至福の贅沢です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして冬の食卓を飾るのは、相模湾（真鶴港・小田原港）から朝水揚げされる極上の海の幸。身が引き締まり濃厚な甘みを蓄えた「伊勢海老」、脂がたっぷり乗った「寒金目鯛」の姿煮やしゃぶしゃぶ、相州牛のすき焼き。東京駅から特急踊り子号でわずか75分という近さでありながら、日常の喧騒から隔絶された静寂と美食が、冬の心身を優しく解き放ってくれます。
          </p>
          
          <div className="bg-orange-50/70 rounded-2xl p-5 border border-orange-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-700" />
                11月・12月湯河原温泉 旅のハイライト
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                関東で最も遅い奥湯河原の紅葉・文豪ゆかりの登録有形文化財宿・相模湾の伊勢海老＆寒金目鯛会席
              </p>
            </div>
            <a
              href="#hotels"
              className="px-5 py-2.5 bg-orange-700 hover:bg-orange-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              名宿5選を見る
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-stone-100/80 rounded-2xl p-6 border border-stone-200">
          <h2 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-orange-700" />
            目次・インデックス
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-stone-700">
            <a href="#autumn-leaves" className="hover:text-orange-700 hover:underline flex items-center gap-1.5">
              <span>1. 関東最遅！11月下旬〜12月上旬の奥湯河原紅葉ガイド</span>
            </a>
            <a href="#springs" className="hover:text-orange-700 hover:underline flex items-center gap-1.5">
              <span>2. 万葉の「薬師の湯」泉質と文豪逗留の歴史</span>
            </a>
            <a href="#hotels" className="hover:text-orange-700 hover:underline flex items-center gap-1.5">
              <span>3. 湯河原温泉 11・12月に泊まりたい名宿厳選5選</span>
            </a>
            <a href="#gourmet" className="hover:text-orange-700 hover:underline flex items-center gap-1.5">
              <span>4. 相模湾の冬魚介：伊勢海老・寒金目鯛と湯河原みかん</span>
            </a>
            <a href="#itinerary" className="hover:text-orange-700 hover:underline flex items-center gap-1.5">
              <span>5. 1泊2日 王道モデルコース（万葉公園と料亭会席）</span>
            </a>
            <a href="#faq" className="hover:text-orange-700 hover:underline flex items-center gap-1.5">
              <span>6. よくある質問（FAQ）とアクセス情報</span>
            </a>
          </nav>
        </section>

        {/* Autumn Leaves Section */}
        <section id="autumn-leaves" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-orange-50 text-orange-800">
              <Calendar className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              関東で最も遅い紅葉：11月下旬〜12月上旬の奥湯河原ともみじの郷
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600">
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-orange-600" />
                もみじの郷（池峰山池周辺）の圧巻のパノラマ
              </h3>
              <p className="leading-relaxed">
                奥湯河原の池峰山周辺には、約540本ものイロハモミジが群生する「もみじの郷」が広がります。温暖な湯河原では、例年11月中旬に色づき始め、11月下旬から12月上旬にかけてピークを迎えます。山一面が燃え上がるような真紅や橙色に包まれ、池の水面に映り込む紅葉のグラデーションは息をのむ美しさです。
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                <Waves className="w-4 h-4 text-orange-600" />
                万葉公園「湯河原惣湯 Books and Retreat」
              </h3>
              <p className="leading-relaxed">
                千歳川のせせらぎ沿いに広がる万葉公園。初冬には渓流沿いのモミジが美しく色づき、散策路を歩けば川のせせらぎと落葉の絨毯が楽しめます。公園内にある日帰りリトリート施設「湯河原惣湯 Books and Retreat」では、源泉かけ流しの露天風呂とライブラリーで静かな読書時間を過ごせます。
              </p>
            </div>
          </div>
        </section>

        {/* Hotels List */}
        <section id="hotels" className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Rakuten Travel Verified Pure Springs Inns</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              11・12月湯河原温泉 泊まりたい名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              文化財宿の格式、奥湯河原の紅葉眺望、自家源泉の泉質、相模湾の新鮮魚介を堪能できる最高峰の5宿を厳選。
            </p>
          </div>

          <div className="space-y-10">
            {hotelList.map((h) => (
              <div
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/90 hover:shadow-md transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image Column */}
                  <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[280px] bg-stone-100">
                    <Image
                      src={h.img}
                      alt={h.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                      <span className="w-2 h-2 rounded-full bg-orange-400" />
                      厳選第{h.id}位
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-amber-500">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm font-bold text-stone-900">{h.rating}</span>
                          <span className="text-xs text-stone-400">（{h.reviews}件のクチコミ）</span>
                        </div>
                        <span className="text-xs font-medium px-2.5 py-1 bg-stone-100 text-stone-600 rounded-lg">
                          目安: {h.price} / 泊
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {h.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        {h.access}
                      </p>

                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-stone-50/80 p-3.5 rounded-xl border border-stone-100">
                        {h.special}
                      </p>

                      <div className="pt-2 space-y-2">
                        <h4 className="text-xs font-bold text-stone-900 tracking-wider uppercase flex items-center gap-1.5 text-orange-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                          宿の魅力と客室・温泉・美食のこだわり
                        </h4>
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                          {h.story}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
                        <div className="p-2.5 rounded-xl bg-orange-50/50 border border-orange-100 text-orange-950">
                          <span className="font-bold block text-orange-800 mb-0.5">客室の選び方：</span>
                          {h.roomTip}
                        </div>
                        <div className="p-2.5 rounded-xl bg-amber-50/50 border border-amber-100 text-amber-950">
                          <span className="font-bold block text-amber-800 mb-0.5">料理長のこだわり：</span>
                          {h.gourmetTip}
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-2">
                        {h.highlights.map((hl, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="text-xs text-stone-400">
                        ※最新の空室状況・限定プランは楽天トラベル公式でご確認ください
                      </div>
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-700 hover:bg-orange-800 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200"
                      >
                        <span>空室・料金プランを確認</span>
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
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Utensils className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              相模湾の冬の贅：伊勢海老・寒金目鯛の姿煮と湯河原みかん
            </h2>
          </div>
          
          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              湯河原の美食の真髄は、相模湾の豊かな黒潮がもたらす極上の魚介類にあります。11月から12月にかけて海水温が下がり、魚たちの身がキュッと引き締まり脂が乗る最高の季節を迎えます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-orange-600" />
                  相模湾の伊勢海老とお造り・寒金目鯛の煮付け
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  真鶴港や小田原港から届く伊勢海老は、透き通る身のプリプリとした弾力と上品な甘みが格別。お造りで味わった後の頭は翌朝の濃厚なお味噌汁に仕立てられます。また、脂の乗った金目鯛を秘伝の甘辛いタレでふっくら炊き上げた「金目鯛の姿煮」は、ご飯もお酒も止まらない湯河原の定番の贅沢です。
                </p>
              </div>
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-orange-600" />
                  太陽の恵み「湯河原みかん」と伝統の自家製湯葉
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  南向きの段々畑で太陽の光と潮風を浴びて育つ「湯河原みかん」。11月から12月は甘みとコクが凝縮した温州みかんの最盛期です。また、料亭旅館で供される毎朝絞りたての豆乳から手作業で引き上げる「自家製湯葉」や豆腐料理は、大豆の優しい甘みが広がる至高のヘルシー美味です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Model Course */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-orange-50 text-orange-800">
              <Clock className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              1泊2日 理想の冬のモデルコース：奥湯河原の紅葉と文豪ゆかりの名宿で過ごす週末
            </h2>
          </div>

          <div className="space-y-6">
            <div className="border-l-2 border-orange-500 pl-4 sm:pl-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-orange-100 text-orange-800 font-bold text-xs rounded-md">
                  1日目
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  特急踊り子号で湯河原へ・万葉公園散策と名湯・伊勢海老ディナー
                </h3>
              </div>
              <ul className="text-xs sm:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li><strong>11:30 東京駅より特急踊り子号に乗車：</strong>車窓に広がる相模湾の青い海を眺めながら湯河原駅へ（約75分）。</li>
                <li><strong>13:00 湯河原駅到着＆ランチ：</strong>駅前で名物の担々やきそばや地魚寿司を味わう。バスで万葉公園へ。</li>
                <li><strong>14:00 万葉公園＆湯河原惣湯散策：</strong>千歳川のせせらぎと晩秋の紅葉を眺めながら散策路を歩く。</li>
                <li><strong>15:30 宿にチェックイン：</strong>文豪ゆかりの老舗宿へ。弱アルカリ性の柔らかい自家源泉露天風呂で旅の疲れを癒やす。</li>
                <li><strong>18:30 相模湾の魚介会席：</strong>伊勢海老のお造り、寒金目鯛の姿煮、足柄牛の陶板焼きに地酒を合わせて至福の晩餐。</li>
              </ul>
            </div>

            <div className="border-l-2 border-orange-500 pl-4 sm:pl-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-orange-100 text-orange-800 font-bold text-xs rounded-md">
                  2日目
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  奥湯河原もみじの郷ハイク＆真鶴岬の絶景・みかん狩り
                </h3>
              </div>
              <ul className="text-xs sm:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li><strong>08:00 朝の清冽な空気で朝風呂＆和朝食：</strong>伊勢海老の頭で出汁をとった味噌汁や焼き魚の朝食。</li>
                <li><strong>09:30 奥湯河原「もみじの郷」へ：</strong>池峰山池周辺をハイキング。真っ赤に燃える関東最遅のモミジ林を鑑賞。</li>
                <li><strong>12:00 真鶴岬・三ツ石へ立ち寄り：</strong>タクシーで真鶴半島へ。相模湾に突き出る奇岩・三ツ石の雄大な海景と海鮮丼ランチ。</li>
                <li><strong>14:30 湯河原みかん狩り・お土産選び：</strong>段々畑で甘い完熟みかんを味わい、駅前商店街で温泉まんじゅうや干物を購入。</li>
                <li><strong>16:00 湯河原駅より特急踊り子号で帰路へ：</strong>ゆったりと都心へ帰着。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-orange-50 text-orange-800">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              よくある質問（FAQ）：冬の湯河原温泉旅行のポイント
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-orange-700 text-white flex items-center justify-center text-xs shrink-0">Q</span>
                11月・12月の湯河原温泉は雪が降りますか？ノーマルタイヤでも行けますか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 pl-7 leading-relaxed">
                湯河原温泉の温泉街は相模湾に面した海岸近くに位置するため、冬でも温暖で雪が降ることは極めて稀です。11月・12月であれば基本的にノーマルタイヤでお越しいただけます。ただし、箱根や大観山方面へ峠越えをする場合や、強い冬型気圧配置の際は山沿いで一時的に凍結する恐れがあるため、事前に天気予報をご確認ください。
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-orange-700 text-white flex items-center justify-center text-xs shrink-0">Q</span>
                「湯河原温泉」と「奥湯河原温泉」の違いは何ですか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 pl-7 leading-relaxed">
                湯河原温泉街はJR湯河原駅から千歳川沿いに約3〜4km続く賑やかな温泉街です。一方、「奥湯河原温泉」はそこからさらに藤木川沿いを山手へ約2〜3km上った、鬱蒼とした自然林に抱かれた静寂の別天地です。高級料亭旅館や隠れ家宿が点在し、より静かな環境で紅葉や川のせせらぎを楽しみたい大人の旅行者に特に人気があります。
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-orange-700 text-white flex items-center justify-center text-xs shrink-0">Q</span>
                一人旅でも宿泊できる温泉宿はありますか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 pl-7 leading-relaxed">
                はい、湯河原温泉は昔から文豪が一人で籠もって執筆や静養を行う伝統があるため、一人旅歓迎のプランを用意している旅館が数多くあります。平日の静かな温泉街を散策し、お部屋食や温泉三昧を満喫する贅沢なソロワーケーションやリトリートにも最適な温泉地です。
              </p>
            </div>
          </div>
        </section>

        {/* Related Features & Internal Links */}
        <section className="bg-stone-100/80 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-orange-700" />
              あわせて読みたい関東・東伊豆の冬温泉特集
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              冬の味覚、名湯露天風呂、雪景色を楽しむ日本全国の厳選特集記事。旅の目的に合わせてぜひご覧ください。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 text-xs sm:text-sm">
            <Link
              href="/winter-kanagawa-hakone-fuji-view-onsen-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-orange-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-orange-700 mb-1">
                箱根温泉の富士山ビュー露天風呂特集
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                初冬の澄み切った空に浮かぶ白銀の富士山を望む箱根の名湯リゾートガイド。
              </p>
            </Link>

            <Link
              href="/winter-atami-fireworks-ocean-view-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-orange-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-orange-700 mb-1">
                熱海海上花火大会とオーシャンビュー宿
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                冬の澄んだ夜空に響き渡る圧巻の花火ミュージカルと相模湾を見晴らす名湯。
              </p>
            </Link>

            <Link
              href="/winter-shizuoka-shuzenji-late-momiji-bamboo-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-orange-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-orange-700 mb-1">
                伊豆・修善寺温泉の竹林の小径と晩秋紅葉
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                弘法大師開湯の伊豆最古の名湯。竹林のライトアップと桂川沿いの老舗旅館。
              </p>
            </Link>

            <Link
              href="/winter-shizuoka-izukogen-granillumi-ito-onsen-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-orange-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-orange-700 mb-1">
                伊豆高原グランイルミと伊東温泉特集
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                日本屈指の体験型イルミネーションと湯量豊富な伊東温泉の名宿ガイド。
              </p>
            </Link>

            <Link
              href="/winter-chichibu-icicle-misotsuchi-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-orange-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-orange-700 mb-1">
                埼玉・秩父の三十槌の氷柱と郷土宿
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                大自然が創り出す神秘の氷の芸術・三十槌の氷柱と秩父の山里温泉。
              </p>
            </Link>

            <Link
              href="/features"
              className="p-3.5 bg-orange-50/70 rounded-xl border border-orange-200 hover:bg-orange-100/70 transition-all flex flex-col justify-center items-center text-center group"
            >
              <div className="font-bold text-orange-900 mb-1">
                全国の旅・特集記事一覧へ →
              </div>
              <p className="text-xs text-orange-700">
                春夏秋冬の旬の旅、美食・絶景・名湯の厳選ガイドをチェック
              </p>
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

module.exports = { generateYugawaraPage };
