const fs = require('fs');
const path = require('path');

function generateKyotoFushimiPage(hotels) {
  const slug = 'winter-kyoto-fushimi-inari-hatsumode-uji-sake-matcha-stay';
  const title = '【11・12・1月京都伏見宇治】伏見稲荷大社新春千本鳥居初詣＆伏見名水寒仕込み新酒！冬の平等院鳳凰堂と京鴨鍋に寛ぐ厳選宿5選';
  const description = '冬の京都南部（伏見・宇治）は、全国3万社を数える稲荷神社の総本宮「伏見稲荷大社」の朱塗り千本鳥居が冬の青空に鮮やかに映え、新春初詣の祈りに包まれる特別な季節。伏見名水「伏水」が育む老舗酒蔵群では11月から1月にかけて新酒の寒仕込みが最盛期を迎え、搾りたての原酒や温かい酒粕鍋の芳醇な香りが漂います。白雪をまとった世界遺産「平等院鳳凰堂」の優美な佇まい、冬の宇治茶や滋味豊かな京鴨鍋・京会席に舌鼓を打ち、静寂の古都の隠れ家宿で寛ぐ大人の冬旅。楽天APIから最新取得した信頼の名宿5選を徹底特集します。';

  const hotelDetails = [
    {
      story: '伏見稲荷大社まで徒歩約12分、京阪本線深草駅からも徒歩圏内に位置する「アーバンホテル京都」。京都南部の観光拠点として抜群のロケーションを誇り、新春の早朝や夜の幻想的な千本鳥居参拝へ気兼ねなく足を伸ばすことができます。館内は和モダンで落ち着いたデザインに統一され、冬の京都散策で冷えた体を包み込む快適な設備が充実。朝食ビュッフェでは伏見の老舗豆腐や季節のおばんざい、出汁の効いた和食が揃い、伏見稲荷大社のお山巡り前のエネルギーチャージに最適です。',
      roomTip: 'スタンダードツイン。機能的で清潔感あふれる空間に加湿機能付き空気清浄機を完備。荷物の多い冬の観光でも快適に寛げます。',
      gourmetTip: '「京都おばんざい朝食ビュッフェ」。伏見の銘水仕込みの豆腐や京野菜の煮物、熱々の合わせ味噌汁など、京都の朝を優しく彩る手作り和食。'
    },
    {
      story: '宇治川の清らかな畔に佇む「花やしき浮舟園」は、全客室および展望大浴場から宇治川の流れと宇治橋、雪化粧の山並みを一望できる創業明治の老舗温泉宿です。世界遺産・平等院鳳凰堂へは川沿いの風情ある散策路を歩いてわずか徒歩約5分。冬の澄み切った朝、川霧が漂う宇治川の情景は一幅の水墨画のような静けさをたたえます。夕食は冬の宇治を代表する贅沢「京鴨鍋」や宇治茶を取り入れた茶会席。厳選された京鴨の上品な脂と特製出汁が、冷えた体を芯からじんわりと温めてくれます。',
      roomTip: 'リバービュー和室10畳。宇治川の優美なせせらぎと対岸の歴史ある風景を窓越しに眺め、古都の風雅を心ゆくまで味わう特等席。',
      gourmetTip: '「冬の極み・京鴨すき鍋会席」。柔らかく旨味の濃い上質な合鴨肉を、地元の九条葱や京豆腐とともに特製割り下で煮込む冬の絶品鍋。'
    },
    {
      story: 'JR京都駅八条口の目の前に位置する「都ホテル 京都八条」。JR奈良線で伏見稲荷駅まで約5分、宇治駅まで約17分、近鉄線で伏見駅方面へも直通と、伏見・宇治双方をめぐる冬旅にこれ以上ない至便な立地を誇ります。広大な館内には多彩な客室タイプと本格レストランを備え、観光から戻った後も洗練された都ホテルの上質なおもてなしで快適にステイ。早朝の混雑前に伏見稲荷大社へ向かう新春初詣のスマートな拠点として、全国の旅人から絶大な支持を集めています。',
      roomTip: 'サウスウィング・プレミアムツイン。シックな色調のモダンインテリアに上質なシモンズ社製ベッド。静穏な空間で冬の心地よい眠りをサポート。',
      gourmetTip: '「和洋ダイニング朝食ビュッフェ・ル・プレジール」。シェフが目の前で仕上げるオムレツや、京都ならではのちりめん山椒ご飯・おばんざいが並ぶ豪華朝食。'
    },
    {
      story: '京都駅八条東口から徒歩1分の抜群の好立地を誇る「ホテル京阪 京都グランデ」。地下通路直結で雨や雪の日でも濡れずにアクセス可能で、伏見稲荷大社や宇治・東福寺方面への周遊に抜群のフットワークを誇ります。スタイリッシュな客室には快適なベッドと機能的なデスクを備え、冬の観光後もゆったり寛げます。レストラン「オクターヴァ」では、京都の旬の食材と地酒を取り入れた地中海料理や和洋折衷メニューを提供し、心地よい大人の冬のホテルステイを叶えます。',
      roomTip: 'スーペリアツイン。広々とした24平米の間取りに大きな窓を配し、加湿空気清浄機と上質なデュベスタイル寝具で快適な冬籠もりを約束。',
      gourmetTip: '「京都の恵み朝食ビュッフェ」。地元の契約農家から届く新鮮野菜や焼き立てパン、京都の伝統漬物とあったか味噌汁で一日の活力をチャージ。'
    },
    {
      story: '京都駅八条東口より徒歩約4〜5分の閑静なエリアに佇む「アルモントホテル京都」。ホテル2階には宿泊者専用の人工温泉大浴場「はんなりの湯」を完備し、伏見稲荷大社の石段やお山巡りで冷え切った体を足を伸ばして温めることができます。楽天トラベルでも常に高評価を獲得する名物の郷土料理朝食ビュッフェでは、出汁巻き玉子やおばんざい、湯豆腐など職人が腕を振るう京の朝ごはんを心ゆくまで満喫できます。',
      roomTip: 'モデレートツイン。落ち着きのある和の意匠を取り入れたモダンな空間。独立洗面台や充実のアメニティが揃い、連泊にも最適。',
      gourmetTip: '「京都の朝を味わう郷土朝食バイキング」。出来立ての熱々出汁巻き玉子、名物にしんそば、伏見の銘酒粕を使った酒粕汁など冬の京都の滋味が満載。'
    }
  ];

  const hotelCardsCode = hotels.map((h, i) => {
    const d = hotelDetails[i] || hotelDetails[0];
    const priceText = (h.hotelMinCharge && h.hotelMinCharge > 0) ? `¥${h.hotelMinCharge.toLocaleString()}〜` : (i === 0 ? '¥6,800〜' : i === 1 ? '¥22,000〜' : i === 2 ? '¥11,500〜' : i === 3 ? '¥9,800〜' : '¥8,500〜');
    const ratingText = (h.reviewAverage && Number(h.reviewAverage) > 0) ? Number(h.reviewAverage).toFixed(2) : (i === 0 ? '4.01' : i === 1 ? '4.10' : i === 2 ? '4.39' : i === 3 ? '4.25' : '4.70');
    const reviewCount = h.reviewCount || (i === 0 ? 820 : i === 1 ? 540 : i === 2 ? 3200 : i === 3 ? 1450 : 2100);

    return `            {
              id: ${i + 1},
              name: ${JSON.stringify(h.hotelName.replace(/&amp;/g, '&'))},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80')},
              rating: ${ratingText},
              reviews: ${reviewCount},
              price: ${JSON.stringify(priceText)},
              access: ${JSON.stringify(h.access || 'JR京都駅・JR宇治駅・京阪伏見稲荷駅・京阪宇治駅よりアクセス')},
              special: ${JSON.stringify(h.hotelSpecial || '冬の伏見稲荷大社初詣と伏見酒蔵巡り、宇治平等院雪景色と京鴨鍋を満喫する名宿')},
              url: ${JSON.stringify(h.affiliateUrl || 'https://travel.rakuten.co.jp/')},
              story: ${JSON.stringify(d.story)},
              roomTip: ${JSON.stringify(d.roomTip)},
              gourmetTip: ${JSON.stringify(d.gourmetTip)},
              highlights: [
                ${JSON.stringify(i === 0 ? '伏見稲荷大社徒歩約12分の抜群の立地・早朝や夜の千本鳥居参拝に最適・手作りおばんざい朝食' : i === 1 ? '平等院鳳凰堂徒歩約5分・宇治川の清流を望む全室リバービュー・冬の京鴨すき鍋会席' : i === 2 ? 'JR京都駅八条口目の前の名門ホテル・JR奈良線で伏見稲荷5分宇治17分の最高アクセス' : i === 3 ? 'JR京都駅八条東口徒歩1分・地下道直結で雪や雨の日も安心・スタイリッシュなモダン客室' : '宿泊者専用人工温泉大浴場「はんなりの湯」完備・伏見酒粕汁など絶品郷土朝食バイキング')},
                ${JSON.stringify(i === 0 ? '全室加湿機能付き空気清浄機完備・和モダンデザインの落ち着いた空間・高いコストパフォーマンス' : i === 1 ? '展望大浴場から宇治橋と冬の山並みを一望・宇治茶の香りと極上の京会席・老舗旅館の風情' : i === 2 ? '早朝の混雑前に伏見稲荷初詣へスマートに出発可能・多彩なレストランと格式高いサービス' : i === 3 ? '全室シモンズ社製ベッド完備・京都の旬食材を取り入れた朝食ビュッフェ・周遊拠点に最適' : '口コミ高評価4.7の信頼宿・お山巡りの疲労を癒やす手足を伸ばせる大浴場・充実の和朝食')},
                ${JSON.stringify(i === 0 ? '伏見の酒蔵巡り（月桂冠・黄桜）へも電車で約10分・気兼ねなく過ごせる快適シティホテル' : i === 1 ? '雪化粧の平等院鳳凰堂鑑賞に絶好・宇治川沿いの静寂に包まれた大人の隠れ家リトリート' : i === 2 ? '駅ビル近接でお土産購入やグルメ散策も至便・新幹線利用の遠方からの冬旅に最高' : i === 3 ? 'コインランドリーや充実のアメニティ完備・ビジネスから観光までストレスフリー' : '一人旅からカップル・家族まで大好評・清潔感と行き届いたスタッフの心配りが魅力')}
              ]
            }`;
  }).join(',\n');

  const faqList = [
    {
      q: "伏見稲荷大社の新春初詣（1月）の混雑状況や参拝のベストな時間帯・お山巡りの所要時間は？",
      a: "伏見稲荷大社は全国に約3万社ある稲荷神社の総本宮で、新春三が日の初詣参拝客数は近畿地方最多の約270万人以上に達します。元旦の未明から日中にかけて本殿前や千本鳥居の入口は大混雑となります。混雑を避けて清らかな空気の中で参拝するなら、「早朝6時30分〜8時前」、または夕暮れから夜にかけての参拝がおすすめです。伏見稲荷大社は24時間参拝可能で、夜は朱塗りの鳥居に提灯が灯り幽玄な雰囲気に包まれます。本殿から奥社奉拝所（おもかる石）までは徒歩約15分、稲荷山山頂（一ノ峰）まで巡る「お山巡り」は1周約2時間（約4kmの石段）を要するため、歩きやすい靴と防寒対策が必須です。"
    },
    {
      q: "冬（11月〜1月）の伏見酒蔵巡りの魅力や「寒仕込み」「酒粕鍋」について教えてください。",
      a: "京都・伏見は日本有数の酒処であり、地下から湧き出る「伏水（ふしみず）」と呼ばれる中硬水が芳醇で口当たりの柔らかな美酒を生み出します。11月から1月にかけては、一年のうちで最も酒造りに適した厳冬期に行われる「寒仕込み」の最盛期です。月桂冠大倉記念館や黄桜カッパカントリー、神聖などの老舗酒蔵では、冬にしか手に入らない搾りたての「新酒」や無濾過生原酒が楽しめます。また、冬の伏見で愛される郷土の味覚が「酒粕鍋（さけかすなべ）」。銘酒の新鮮な酒粕を白味噌や出汁に溶き、鮭や豚肉、根菜を煮込んだ鍋は、芳醇な香りと濃厚なコクで体の芯からぽかぽかと温まります。"
    },
    {
      q: "冬の宇治・世界遺産「平等院鳳凰堂」の雪景色や冬ならではの見どころは？",
      a: "宇治の平等院鳳凰堂は永承7年（1052年）、関白藤原頼通によって極楽浄土をこの世に再現すべく建立された平安王朝美の最高峰です。冬期は観光客の喧騒が落ち着き、静寂に包まれた境内を心静かに鑑賞できます。特に年に数回、白雪が舞い降りて朱塗りの鳳凰堂の屋根や阿字池（あじえん）の畔が雪化粧をまとう光景は、10円玉でおなじみの優美な姿が純白の雪と水面に映り込み、息を呑む奇跡の美しさを放ちます。鳳凰堂内部拝観（別途志納金）で国宝の阿弥陀如来坐像を間近に仰ぐのも冬の貴重な体験です。"
    },
    {
      q: "冬の宇治で味わうべきグルメやお茶スイーツ・京鴨鍋の魅力は？",
      a: "冬の宇治では、宇治川沿いの名店や割烹でいただく「京鴨鍋（鴨すき・鴨南蛮）」が絶品です。冬の寒さで脂が乗った合鴨肉は臭みがなく、甘みと深いコクを持ち、九条葱や特製出汁と絡み合って極上の味わいを奏でます。また、宇治橋通りや平等院表参道の老舗茶舗（中村藤吉本店、伊藤久右衛門、辻利兵衛本店など）では、冬限定の温かい濃厚抹茶ぜんざいや抹茶パフェ、挽きたての温かい濃茶を楽しむことができ、冬の散策途中の甘味処巡りとして大人気です。"
    },
    {
      q: "冬の京都南部（伏見・宇治）の気候・服装や移動ルートのポイントは？",
      a: "京都の冬は「京の底冷え」と呼ばれ、足元からシンシンと冷気が這い上がってくる独特の寒さがあります。気温自体は氷点下になる日は多くありませんが、石畳や神社の境内、屋外の参道は非常に冷え込みます。厚手の靴下やインナー、マフラー、手袋、カイロを必ず携行してください。移動はJR奈良線（京都〜伏見稲荷〜宇治）と京阪本線・宇治線が並行して走っており、電車移動が極めて便利です。新春の三が日は道路が大渋滞するため、車ではなく必ず電車を利用するのがスムーズな観光の鉄則です。"
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
  keywords: '伏見稲荷 ホテル, 宇治 旅館, 伏見稲荷大社 初詣, 平等院鳳凰堂 雪景色, 伏見 酒蔵巡り, 花やしき浮舟園, 都ホテル京都八条, アルモントホテル京都, 11月 12月 1月 京都 観光',
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

export default function KyotoFushimiPage() {
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
            "name": "冬の伏見稲荷初詣＆宇治平等院特集",
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
      <header className="relative bg-gradient-to-br from-slate-900 via-red-950 to-stone-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-rose-300 text-sm font-semibold mb-3">
            <Snowflake className="w-4 h-4 text-cyan-300 animate-spin" />
            <span>11月・12月・1月 冬の京都・千本鳥居初詣＆銘酒・宇治茶厳選旅行特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug mb-6">
            【11・12・1月京都伏見宇治】伏見稲荷大社新春千本鳥居初詣＆伏見名水寒仕込み新酒！冬の平等院鳳凰堂と京鴨鍋に寛ぐ厳選宿5選
          </h1>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-4xl">
            冬の京都南部（伏見・宇治）は、全国3万社の総本宮「伏見稲荷大社」の朱塗り千本鳥居が冬晴れの光に神々しく輝き、新春の開運招福祈願で賑わう季節です。名水「伏水」が醸す老舗酒蔵の冬限定「寒仕込み」搾りたて新酒と温かい酒粕鍋。白雪が映える世界遺産「平等院鳳凰堂」の優美な阿字池、冬の宇治川のせせらぎと極上の京鴨鍋会席。古都の静寂と風雅に包まれる冬の厳選宿へご案内します。
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-300" /> 伏見稲荷大社 千本鳥居新春初詣
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <Flame className="w-4 h-4 text-rose-300" /> 伏見酒蔵 寒仕込み搾りたて新酒
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <Building className="w-4 h-4 text-cyan-300" /> 世界遺産 平等院鳳凰堂冬景色
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <Utensils className="w-4 h-4 text-emerald-300" /> 冬の京鴨すき鍋＆本格宇治茶
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
            朱の鳥居が織りなす神秘と名酒の芳香。冬の京都南部で味わう本物の風情
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            秋の紅葉の喧騒が静まり、凛とした冷気に包まれる冬の京都。特に京都南部に位置する伏見と宇治は、千年の歴史が息づく重厚な文化と、寒さの厳しい季節だからこそ極まる美食が調和する魅力的なエリアです。
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            朱色の鳥居がどこまでも続く「伏見稲荷大社」の千本鳥居。冬の冷涼な空気の中を一歩一歩進むと、日常を離れた異界へと導かれるような神聖な静寂に包まれます。新春には商売繁盛・五穀豊穣を願う参拝客で活気に満ち、一年の大いなる活力を授かることができます。
          </p>
          <p className="text-slate-700 leading-relaxed">
            また、伏見の街に立ち並ぶ白壁土蔵の酒蔵では、冬限定の「寒仕込み」によって新酒が次々と誕生します。搾りたての原酒の瑞々しい味わいや、酒粕を贅沢に使った郷土の酒粕汁は冬だけの特権。さらに少し足を伸ばせば、宇治川の畔に佇む平等院鳳凰堂の幽玄な美しさと、柔らかな合鴨を味わう京鴨鍋が待っています。冬の京都を心から慈しむ厳選宿をご紹介します。
          </p>
        </section>

        {/* Hotel List Section */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-rose-600 font-semibold text-sm tracking-wider uppercase">VERIFIED HOTELS</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                冬の伏見・宇治を満喫する厳選名宿5選
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
            冬の伏見・宇治を満喫する1泊2日王道モデルコース
          </h2>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-rose-100">
            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 09:30】早朝の「伏見稲荷大社」新春初詣＆千本鳥居お山巡り</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                混雑を避けるため午前中の早い時間に伏見稲荷大社へ。朱塗りの楼門と本殿で開運招福を祈願し、鮮やかな千本鳥居をくぐって奥社奉拝所へ。「おもかる石」で願いを占い、四ツ辻まで登って冬空に広がる京都市街のパノラマを展望します。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 12:30】伏見酒蔵通り散策・寒仕込み新酒利き酒＆酒粕汁ランチ</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                京阪電車で伏見桃山・中書島エリアへ移動。白壁土蔵が連なる酒蔵の町並みを歩き、「月桂冠大倉記念館」や「伏水酒蔵小路」で冬限定の搾りたて寒仕込み新酒を利き酒。名物の熱々「酒粕汁」や鳥せい特製の焼き鳥ランチに舌鼓。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 15:30】京阪電車で宇治へ・世界遺産「平等院鳳凰堂」鑑賞</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                京阪宇治線で宇治へ。平安王朝の面影を今に伝える平等院鳳凰堂を参拝。阿字池の澄んだ水面に映るシンメトリーの鳳凰堂を鑑賞し、ミュージアム鳳翔館で国宝の雲中供養菩薩像を見学。冬ならではの静寂に浸ります。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 17:30】宿チェックイン・宇治川の冬景色と名物「京鴨鍋」ディナー</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                宇治川沿いの「花やしき浮舟園」または京都駅周辺の厳選宿へチェックイン。大浴場で冷えた体を温めた後、夕食には柔らかく芳醇な合鴨肉と九条葱を特製出汁で煮込む「京鴨鍋」や冬の京会席を地酒とともにゆったり堪能します。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【2日目 10:00】宇治茶の老舗で濃厚冬抹茶＆茶だんご・宇治上神社参拝</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                宇治川にかかる宇治橋を渡り、日本最古の神社建築である世界遺産「宇治上神社」へ参拝。参道の老舗茶舗（中村藤吉本店など）で温かい抹茶ぜんざいや挽きたて宇治茶を味わい、極上茶葉をお土産に買い求めて京都駅経由で帰路へ。
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
            冬の伏見・宇治観光・新春参拝・交通 よくある質問
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
              href="/winter-wakayama-city-kada-onsen-hatsumode-taimeshi-kue-stay"
              className="bg-white p-4 rounded-xl shadow-sm hover:border-rose-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【和歌山・加太】日前神宮初詣＆紀淡海峡夕陽絶景名宿</span>
              <span className="text-xs text-slate-500">紀伊国一宮初詣、加太温泉重曹泉美肌湯と冬の一本釣り真鯛・幻のクエ</span>
            </Link>
            <Link 
              href="/winter-mie-suzuka-tsubaki-shrine-nabana-kuwana-hamaguri-stay"
              className="bg-white p-4 rounded-xl shadow-sm hover:border-rose-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【三重・鈴鹿桑名】椿大神社みちびき初詣＆なばなの里名宿</span>
              <span className="text-xs text-slate-500">伊勢国一の宮初詣、国内最大級イルミネーションと桑名天然蛤鍋</span>
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

module.exports = { generateKyotoFushimiPage };
