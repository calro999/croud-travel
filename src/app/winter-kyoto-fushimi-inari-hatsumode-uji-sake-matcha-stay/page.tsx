import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Snowflake, Flame, Mountain, Building, ThermometerSun, Waves, Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月京都伏見宇治】伏見稲荷大社新春千本鳥居初詣！名宿5選',
  description: '冬の京都南部（伏見・宇治）は、全国3万社を数える稲荷神社の総本宮「伏見稲荷大社」の朱塗り千本鳥居が冬の青空に鮮やかに映え。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '伏見稲荷 ホテル, 宇治 旅館, 伏見稲荷大社 初詣, 平等院鳳凰堂 雪景色, 伏見 酒蔵巡り, 花やしき浮舟園, 都ホテル京都八条, アルモントホテル京都, 11月 12月 1月 京都 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kyoto-fushimi-inari-hatsumode-uji-sake-matcha-stay/"
  },
  openGraph: {
    title: '【11・12・1月京都伏見宇治】伏見稲荷大社新春千本鳥居初詣！名宿5選',
    description: '冬の京都南部（伏見・宇治）は、全国3万社を数える稲荷神社の総本宮「伏見稲荷大社」の朱塗り千本鳥居が冬の青空に鮮やかに映え。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-kyoto-fushimi-inari-hatsumode-uji-sake-matcha-stay',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80' }]
  }
};

export default function KyotoFushimiPage() {
  const hotels = [
            {
              id: 1,
              name: "アーバンホテル京都",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1445/1445.jpg",
              rating: 4.01,
              reviews: 4508,
              price: "¥6,050〜",
              access: "車：京都南ＩＣ5分、京都駅10分　電車：JR稲荷10分、京阪龍谷大前深草5分、地下鉄くいな橋12分　バス龍谷大学前3分",
              special: "伏見稲荷徒歩約10分／Wi-Fi完備／Ｐ有（先着順・大型要予約）／全室禁煙（1階喫煙スペースあり）",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1445%2F1445.html",
              story: "伏見稲荷大社まで徒歩約12分、京阪本線深草駅からも徒歩圏内という絶好のロケーションに位置する「アーバンホテル京都」。京都南部の観光や酒蔵巡りの拠点として抜群の機動力を誇り、新春の早朝や夜の幻想的な千本鳥居参拝へ人混みを避けてスマートに足を伸ばすことができます。館内は和モダンで洗練された落ち着きあるデザインに統一され、冬の京都散策で冷え切った体を包み込む快適な設備が充実。朝食ビュッフェでは伏見の名水で仕込まれた老舗豆腐や季節の京おばんざい、出汁の効いた和食がずらりと並び、伏見稲荷大社のお山巡り前のエネルギーチャージに最適です。",
              roomTip: "スタンダードツイン。機能的で清潔感あふれる空間に加湿機能付き空気清浄機を完備。荷物の多い冬の観光でもゆったりと快適に寛げます。",
              gourmetTip: "「京都おばんざい朝食ビュッフェ」。伏見の銘水仕込みの豆腐や京野菜の炊き合わせ、熱々の合わせ味噌汁など、京都の朝を優しく彩る手作り和食。",
              highlights: [
                "伏見稲荷大社徒歩約12分の抜群の立地・早朝や夜の千本鳥居参拝に最適・手作りおばんざい朝食",
                "全室加湿機能付き空気清浄機完備・和モダンデザインの落ち着いた空間・高いコストパフォーマンス",
                "伏見の酒蔵巡り（月桂冠・黄桜）へも電車で約10分・気兼ねなく過ごせる快適シティホテル"
              ]
            },
            {
              id: 2,
              name: "花やしき浮舟園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/73944/73944.jpg",
              rating: 4.10,
              reviews: 302,
              price: "¥22,000〜",
              access: "ＪＲ・京阪　宇治駅よりお車で約5分",
              special: "全室から宇治川を一望、四季折々京都宇治の絶景を楽しむ旅館。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73944%2F73944.html",
              story: "宇治川の清らかな畔に優雅に佇む「花やしき浮舟園」は、全客室および展望大浴場から宇治川の雄大な流れと宇治橋、雪化粧の山並みを一望できる創業明治の老舗温泉宿です。世界遺産・平等院鳳凰堂へは川沿いの風情ある散策路「あじろぎの道」を歩いてわずか徒歩約5分。冬の澄み切った早朝、川霧が幻想的に漂う宇治川の情景は一幅の水墨画のような静寂をたたえます。夕食は冬の宇治を代表する贅沢「京鴨鍋」や宇治茶を取り入れた伝統の茶会席。厳選された京鴨の上品な脂と特製出汁が、冷えた体を芯からじんわりと温めてくれます。",
              roomTip: "リバービュー和室10畳。宇治川の優美なせせらぎと対岸の歴史ある風景を窓越しに眺め、古都の風雅を心ゆくまで味わう特等席。",
              gourmetTip: "「冬の極み・京鴨すき鍋会席」。柔らかく旨味の濃い上質な合鴨肉を、地元の九条葱や京豆腐とともに特製割り下で煮込む冬の絶品鍋。",
              highlights: [
                "平等院鳳凰堂徒歩約5分・宇治川の清流を望む全室リバービュー・冬の京鴨すき鍋会席",
                "展望大浴場から宇治橋と冬の山並みを一望・宇治茶の香りと極上の京会席・老舗旅館の風情",
                "雪化粧の平等院鳳凰堂鑑賞に絶好・宇治川沿いの静寂に包まれた大人の隠れ家リトリート"
              ]
            },
            {
              id: 3,
              name: "都ホテル京都八条",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1160/1160.jpg",
              rating: 4.39,
              reviews: 7571,
              price: "¥11,700〜",
              access: "京都駅八条口から徒歩約２分！",
              special: "京都駅徒歩２分でアクセス抜群、 全室無料Wi-Fi完備、手荷物無料預かりサービスもあってとっても便利",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1160%2F1160.html",
              story: "JR京都駅八条口の目の前に堂々と位置する「都ホテル 京都八条」。JR奈良線で伏見稲荷駅まで約5分、宇治駅まで約17分、近鉄京都線で伏見桃山方面へも直通と、伏見・宇治双方をめぐる冬旅にこれ以上ない至便な立地を誇ります。広大な館内には多彩な客室タイプと本格レストランを備え、観光から戻った後も洗練された都ホテルの上質なおもてなしで快適にステイ。早朝の混雑前に伏見稲荷大社へ向かう新春初詣のスマートな拠点として、全国の旅人から絶大な支持を集めています。",
              roomTip: "サウスウィング・プレミアムツイン。シックな色調のモダンインテリアに上質なシモンズ社製ベッド。静穏な空間で冬の心地よい眠りをサポート。",
              gourmetTip: "「和洋ダイニング朝食ビュッフェ・ル・プレジール。」。シェフが目の前で仕上げるオムレツや、京都ならではのちりめん山椒ご飯・おばんざいが並ぶ豪華朝食。",
              highlights: [
                "JR京都駅八条口目の前の名門ホテル・JR奈良線で伏見稲荷5分宇治17分の最高アクセス",
                "早朝の混雑前に伏見稲荷初詣へスマートに出発可能・多彩なレストランと格式高いサービス",
                "駅ビル近接でお土産購入やグルメ散策も至便・新幹線利用の遠方からの冬旅に最高"
              ]
            },
            {
              id: 4,
              name: "ホテル京阪　京都グランデ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4979/4979.jpg",
              rating: 4.25,
              reviews: 5185,
              price: "¥8,001〜",
              access: "ＪＲ「京都」駅八条東口（新幹線側）より徒歩１分★地下道直結なので雨の日も安心★ホテル玄関前から空港リムジンバス発着",
              special: "観光・ビジネスには立地が１番！「京都」駅より徒歩約1分★空港バスはホテル玄関前発着と便利です",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4979%2F4979.html",
              story: "京都駅八条東口から徒歩わずか1分の抜群の好立地を誇る「ホテル京阪 京都グランデ」。地下通路直結で雨や雪の日でも濡れずにアクセス可能で、伏見稲荷大社や宇治・東福寺方面への周遊に抜群のフットワークを誇ります。スタイリッシュな客室には快適なベッドと機能的なデスクを備え、冬の観光後もゆったり寛げます。レストラン「オクターヴァ」では、京都の旬の食材と地酒を取り入れた地中海料理や和洋折衷メニューを提供し、心地よい大人の冬のホテルステイを叶えます。",
              roomTip: "スーペリアツイン。広々とした24平米の間取りに大きな窓を配し、加湿空気清浄機と上質なデュベスタイル寝具で快適な冬籠もりを約束。",
              gourmetTip: "「京都の恵み朝食ビュッフェ」。地元の契約農家から届く新鮮野菜や焼き立てパン、京都の伝統漬物とあったか味噌汁で一日の活力をチャージ。",
              highlights: [
                "JR京都駅八条東口徒歩1分・地下道直結で雪や雨の日も安心・スタイリッシュなモダン客室",
                "全室シモンズ社製ベッド完備・京都の旬食材を取り入れた朝食ビュッフェ・周遊拠点に最適",
                "コインランドリーや充実のアメニティ完備・ビジネスから観光までストレスフリー"
              ]
            },
            {
              id: 5,
              name: "アルモントホテル京都",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/138005/138005.jpg",
              rating: 4.70,
              reviews: 750,
              price: "¥8,700〜",
              access: "①ＪＲ京都駅から・・・・・八条東口より徒歩約５分、八条口より徒歩約８分、新幹線中央口より徒歩１０分　",
              special: "男女別の大浴場完備。ＪＲ京都駅八条東口より徒歩約５分と、観光やビジネスにも最適です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F138005%2F138005.html",
              story: "京都駅八条東口より徒歩約4〜5分の閑静なエリアに佇む「アルモントホテル京都」。ホテル2階には宿泊者専用の人工温泉大浴場「はんなりの湯」を完備し、伏見稲荷大社の石段やお山巡りで冷え切った体を足を伸ばして温めることができます。楽天トラベルでも常に高評価を獲得する名物の郷土料理朝食ビュッフェでは、出汁巻き玉子やおばんざい、湯豆腐など職人が腕を振るう京の朝ごはんを心ゆくまで満喫できます。",
              roomTip: "モデレートツイン。落ち着きのある和の意匠を取り入れたモダンな空間。独立洗面台や充実のアメニティが揃い、連泊にも最適。",
              gourmetTip: "「京都の朝を味わう郷土朝食バイキング」。出来立ての熱々出汁巻き玉子、名物にしんそば、伏見の銘酒粕を使った酒粕汁など冬の京都の滋味が満載。",
              highlights: [
                "宿泊者専用人工温泉大浴場「はんなりの湯」完備・伏見酒粕汁など絶品郷土朝食バイキング",
                "口コミ高評価4.7の信頼宿・お山巡りの疲労を癒やす手足を伸ばせる大浴場・充実の和朝食",
                "一人旅からカップル・家族まで大好評・清潔感と行き届いたスタッフの心配りが魅力"
              ]
            }
  ];

  const faqData = [
  {
    "q": "伏見稲荷大社の新春初詣（1月）の混雑状況や参拝のベストな時間帯・お山巡りの所要時間は？",
    "a": "伏見稲荷大社は全国に約3万社ある稲荷神社の総本宮で、新春三が日の初詣参拝客数は近畿地方最多の約270万人以上に達します。元旦の未明から日中にかけて本殿前や千本鳥居の入口は大混雑となります。混雑を避けて清らかな空気の中で参拝するなら、「早朝6時30分〜8時前」、または夕暮れから夜にかけての参拝がおすすめです。伏見稲荷大社は24時間参拝可能で、夜は朱塗りの鳥居に提灯が灯り幽玄な雰囲気に包まれます。本殿から奥社奉拝所（おもかる石）までは徒歩約15分、稲荷山山頂（一ノ峰）まで巡る「お山巡り」は1周約2時間（約4kmの石段）を要するため、歩きやすい靴と防寒対策が必須です。"
  },
  {
    "q": "冬（11月〜1月）の伏見酒蔵巡りの魅力や「寒仕込み」「酒粕鍋」について教えてください。",
    "a": "京都・伏見は日本有数の酒処であり、地下から湧き出る「伏水（ふしみず）」と呼ばれる中硬水が芳醇で口当たりの柔らかな美酒を生み出します。11月から1月にかけては、一年のうちで最も酒造りに適した厳冬期に行われる「寒仕込み」の最盛期です。月桂冠大倉記念館や黄桜カッパカントリー、神聖などの老舗酒蔵では、冬にしか手に入らない搾りたての「新酒」や無濾過生原酒が楽しめます。また、冬の伏見で愛される郷土の味覚が「酒粕鍋（さけかすなべ）」。銘酒の新鮮な酒粕を白味噌や出汁に溶き、鮭や豚肉、根菜を煮込んだ鍋は、芳醇な香りと濃厚なコクで体の芯からぽかぽかと温まります。"
  },
  {
    "q": "冬の宇治・世界遺産「平等院鳳凰堂」の雪景色や冬ならではの見どころは？",
    "a": "宇治の平等院鳳凰堂は永承7年（1052年）、関白藤原頼通によって極楽浄土をこの世に再現すべく建立された平安王朝美の最高峰です。冬期は観光客の喧騒が落ち着き、静寂に包まれた境内を心静かに鑑賞できます。特に年に数回、白雪が舞い降りて朱塗りの鳳凰堂の屋根や阿字池（あじえん）の畔が雪化粧をまとう光景は、10円玉でおなじみの優美な姿が純白の雪と水面に映り込み、息を呑む奇跡の美しさを放ちます。鳳凰堂内部拝観（別途志納金）で国宝の阿弥陀如来坐像を間近に仰ぐのも冬の貴重な体験です。"
  },
  {
    "q": "冬の宇治で味わうべきグルメやお茶スイーツ・京鴨鍋の魅力は？",
    "a": "冬の宇治では、宇治川沿いの名店や割烹でいただく「京鴨鍋（鴨すき・鴨南蛮）」が絶品です。冬の寒さで脂が乗った合鴨肉は臭みがなく、甘みと深いコクを持ち、九条葱や特製出汁と絡み合って極上の味わいを奏でます。また、宇治橋通りや平等院表参道の老舗茶舗（中村藤吉本店、伊藤久右衛門、辻利兵衛本店など）では、冬限定の温かい濃厚抹茶ぜんざいや抹茶パフェ、挽きたての温かい濃茶を楽しむことができ、冬の散策途中の甘味処巡りとして大人気です。"
  },
  {
    "q": "冬の京都南部（伏見・宇治）の気候・服装や移動ルートのポイントは？",
    "a": "京都の冬は「京の底冷え」と呼ばれ、足元からシンシンと冷気が這い上がってくる独特の寒さがあります。気温自体は氷点下になる日は多くありませんが、石畳や神社の境内、屋外の参道は非常に冷え込みます。厚手の靴下やインナー、マフラー、手袋、カイロを必ず携行してください。移動はJR奈良線（京都〜伏見稲荷〜宇治）と京阪本線・宇治線が並行して走っており、電車移動が極めて便利です。新春の三が日は道路が大渋滞するため、車ではなく必ず電車を利用するのがスムーズな観光の鉄則です。"
  }
];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "【11・12・1月京都伏見宇治】伏見稲荷大社新春千本鳥居初詣＆伏見名水寒仕込み新酒！冬の平等院鳳凰堂と京鴨鍋に寛ぐ厳選宿5選",
        "description": "冬の京都南部（伏見・宇治）は、全国3万社を数える稲荷神社の総本宮「伏見稲荷大社」の朱塗り千本鳥居が冬の青空に鮮やかに映え、新春初詣の祈りに包まれる特別な季節。伏見名水「伏水」が育む老舗酒蔵群では11月から1月にかけて新酒の寒仕込みが最盛期を迎え、搾りたての原酒や温かい酒粕鍋の芳醇な香りが漂います。白雪をまとった世界遺産「平等院鳳凰堂」の優美な佇まい、冬の宇治茶や滋味豊かな京鴨鍋・京会席に舌鼓を打ち、静寂の古都の隠れ家宿で寛ぐ大人の冬旅。楽天APIから最新取得した信頼の名宿5選を徹底特集します。",
        "url": 'https://croud-travel.pages.dev/winter-kyoto-fushimi-inari-hatsumode-uji-sake-matcha-stay',
        "publisher": {
          "@type": "Organization",
          "name": "週末ごほうび旅・厳選の宿ガイド",
          "url": "https://croud-travel.pages.dev"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.pages.dev"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "冬の特集一覧",
            "item": "https://croud-travel.pages.dev/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "冬の伏見稲荷初詣＆宇治平等院特集",
            "item": 'https://croud-travel.pages.dev/winter-kyoto-fushimi-inari-hatsumode-uji-sake-matcha-stay'
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


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月京都伏見宇治】伏見稲荷大社新春千本鳥居初詣＆伏見名水寒仕込み新酒！冬の平等院鳳凰堂と京鴨鍋に寛ぐ厳選宿5選",
    "description": "冬の京都南部（伏見・宇治）は、全国3万社を数える稲荷神社の総本宮「伏見稲荷大社」の朱塗り千本鳥居が冬の青空に鮮やかに映え、新春初詣の祈りに包まれる特別な季節。伏見名水「伏水」が育む老舗酒蔵群では11月から1月にかけて新酒の寒仕込みが最盛期を迎え、搾りたての原酒や温かい酒粕鍋の芳醇な香りが漂います。白雪をまとった世界遺産「平等院鳳凰堂」の優美な佇まい、冬の宇治茶や滋味豊かな京鴨鍋・京会席に舌鼓を打ち、静寂の古都の隠れ家宿で寛ぐ大人の冬旅。楽天APIから最新取得した信頼の名宿5選を徹底特集します。",
    "url": "https://croud-travel.pages.dev/winter-kyoto-fushimi-inari-hatsumode-uji-sake-matcha-stay/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev" },
      { "@type": "ListItem", "position": 2, "name": "【11・12・1月京都伏見宇治】伏見稲荷大社新春千本鳥居初詣＆伏見名水寒仕込み新酒！冬の平等院鳳凰堂と京鴨鍋に寛ぐ厳選宿5選", "item": "https://croud-travel.pages.dev/winter-kyoto-fushimi-inari-hatsumode-uji-sake-matcha-stay/" }
    ]
  };

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-red-950 to-stone-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/20 border border-red-400/30 text-red-200 text-xs sm:text-sm font-medium mb-6">
            <Snowflake className="w-4 h-4 text-cyan-300 animate-spin" />
            11月・12月・1月冬の特選旅｜京都・伏見＆宇治
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-6">
            伏見稲荷大社新春千本鳥居初詣＆伏見名水寒仕込み新酒！<br className="hidden sm:inline" />
            冬の平等院鳳凰堂と京鴨鍋に寛ぐ厳選宿5選
          </h1>
          <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-4xl mb-8">
            京都駅からJR奈良線でわずか5〜17分。冬の京都南部（伏見・宇治）は、全国3万社の総本宮「伏見稲荷大社」の朱塗り千本鳥居が冬晴れの光に神々しく輝き、新春の開運招福祈願で賑わう季節です。名水「伏水」が醸す老舗酒蔵の冬限定「寒仕込み」搾りたて新酒と温かい酒粕鍋。白雪が映える世界遺産「平等院鳳凰堂」の優美な阿字池、冬の宇治川のせせらぎと極上の京鴨鍋会席。古都の静寂と風雅に包まれる冬の厳選宿へご案内します。
          </p>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-red-400" /> 京都府京都市伏見区・宇治市</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-red-400" /> 探訪期：11月下旬〜1月下旬</span>
            <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-red-400" /> 伏見稲荷千本鳥居初詣＆平等院鳳凰堂冬景</span>
          </div>
        </div>
      </header>

      {/* Navigation Breadcrumbs */}
      <nav aria-label="パンくずリスト" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-500">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-red-600 transition">ホーム</Link></li>
          <li><span>/</span></li>
          <li><Link href="/features" className="hover:text-red-600 transition">特集一覧</Link></li>
          <li><span>/</span></li>
          <li className="text-slate-800 font-medium truncate">冬の伏見稲荷初詣＆宇治平等院特集</li>
        </ol>
      </nav>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-red-600 pl-4">
            <span className="text-red-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Tradition & Historic Serenity</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              朱の鳥居が織りなす神聖な回廊と、伏水が醸す冬限定「寒仕込み」の芳醇
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              全国稲荷神社の総本宮での新春祈願と、宇治川の静寂に佇む平安王朝の美
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              京都市街の南部に広がる伏見と、宇治川の清らかな名水に抱かれた宇治。平安時代には藤原氏をはじめとする平安貴族たちの別業（別荘）が営まれ、『源氏物語』宇治十帖の舞台となった風雅なこの地は、安土桃山時代には豊臣秀吉が伏見城を築き、濠川や宇治川の水運を活かした水陸交通の要衝として一大城下町へと発展しました。江戸時代には坂本龍馬ゆかりの船宿「寺田屋」や三十石船が往来し、幕末維新の歴史の表舞台ともなりました。秋の紅葉狩りの喧騒が落ち着き、凛とした寒気が古都を包み込む11月下旬から1月にかけては、名所旧跡が本来の崇高な静寂を取り戻す特別なシーズンとなります。
            </p>
            <p>
              新春の幕開けを飾る最大の聖地が、和銅4年（711年）創建、全国に約3万社ある稲荷神社の総本宮「伏見稲荷大社」です。朱塗りの楼門をくぐり本殿で商売繁盛・五穀豊穣・家内安全を祈願した先には、神体山である稲荷山へと続く無数の鳥居が連なる「千本鳥居」が広がります。冬の冷涼な木漏れ日を受け、どこまでも続く朱のトンネルを歩む体験は、まさに神域の息吹に触れるような幽玄の世界。奥社奉拝所の「おもかる石」で一年の運勢を占い、四ツ辻を経て山頂の一ノ峰まで巡る約2時間のお山巡りは、澄み切った冷気を胸いっぱいに吸い込みながら、新年の新たな活力を心身に満たしてくれます。
            </p>
            <p>
              参拝後は、白壁土蔵の酒蔵が連なる伏見の酒蔵通りへ。地下からこんこんと湧き出る「伏水（ふしみず）」は、ミネラルバランスに優れた中硬水で、きめ細やかで芳醇な美酒を生み出します。11月から1月は、一年で最も気温が下がる厳冬期に行われる伝統の「寒仕込み」の最盛期。月桂冠大倉記念館や黄桜カッパカントリー、神聖などの老舗酒蔵からは蒸米の甘い香りが漂い、この時期しか味わえない搾りたての無濾過生原酒や新酒の利き酒が楽しめます。また、新鮮な酒粕を白味噌出汁に溶き入れた郷土の「酒粕鍋（酒粕汁）」は、冬の寒さに冷えた体を芯から温めてくれる最高の冬のご馳走です。
            </p>
            <p>
              さらに京阪電車やJR奈良線でわずか十数分の宇治へ足を伸ばせば、関白藤原頼通が極楽浄土を現世に具現化した世界遺産「平等院鳳凰堂」が迎えてくれます。冬の澄み切った阿字池の水面に映り込む阿弥陀堂のシンメトリーの優美な姿。時折舞い降りる雪をまとった鳳凰堂の雪景色は、10円硬貨でおなじみの意匠が純白の雪と水面に映え、言葉を失うほどの気品を放ちます。
            </p>
            <p>
              冬の宇治の美食の代表が、宇治川の老舗割烹や料理旅館で味わう「京鴨鍋（鴨すき）」。寒さで良質な脂を蓄えた合鴨の肉を、甘みのある九条葱や京豆腐とともに特製出汁で煮込む鍋は、上品なコクが口いっぱいに広がります。参道の老舗茶舗（中村藤吉本店、伊藤久右衛門など）でいただく温かい挽きたて宇治抹茶や濃厚抹茶ぜんざいとともに、古都の奥深き冬を心ゆくまで味わい尽くす厳選宿をご紹介します。
            </p>
            <p>
              京都駅からのアクセスも電車で5〜15分程度と抜群でありながら、祇園や東山エリアとは一線を画す落ち着いた風情が漂う伏見と宇治。早朝の澄んだ空気の中で初詣を済ませ、昼は酒蔵通りで名酒を味わい、夕暮れには宇治川のせせらぎを聞きながら名宿で温まる。冬だからこそ実現する、静かで贅沢な京都旅の醍醐味がここに詰まっています。
            </p>
          </div>

          {/* 3 Pillar Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2 text-red-700 font-bold text-sm mb-1">
                <Sparkles className="w-4 h-4 text-red-600" />
                <span>伏見稲荷 千本鳥居初詣</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                全国3万社の総本宮での新春開運祈願。朱塗りの千本鳥居とお山巡り、幽玄な冬の静寂に包まれる神聖な祈り。
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2 text-red-700 font-bold text-sm mb-1">
                <Flame className="w-4 h-4 text-red-600" />
                <span>伏見酒蔵 寒仕込み新酒</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                名水「伏水」が醸す冬限定の搾りたて生原酒。白壁土蔵の酒蔵巡りと、芳醇な香りで温まる郷土の酒粕鍋。
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2 text-red-700 font-bold text-sm mb-1">
                <Building className="w-4 h-4 text-red-600" />
                <span>平等院冬景＆京鴨すき鍋</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                阿字池に映える国宝平等院鳳凰堂の冬の静寂。宇治川の絶景を望む老舗宿で味わう極上京鴨鍋と本格宇治抹茶。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <div>
              <span className="text-red-600 font-bold text-xs uppercase tracking-wider block">SELECTED ACCOMMODATIONS</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                冬の伏見・宇治を満喫する厳選名宿5選
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              ※楽天トラベルAPIリアルタイム取得データ（2026年最新）
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((hotel) => (
              <article key={hotel.id} className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div className="md:col-span-5 relative min-h-[260px] bg-slate-100">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 text-white text-xs px-2.5 py-1 rounded-full font-bold">
                      厳選宿 #{hotel.id}
                    </div>
                  </div>

                  <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5 text-amber-500">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-extrabold text-sm text-slate-900">{hotel.rating}</span>
                          <span className="text-xs text-slate-500">({hotel.reviews.toLocaleString()}件)</span>
                        </div>
                        <span className="text-xs font-semibold text-red-700 bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                          冬の特選プラン
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-snug">
                        {hotel.name}
                      </h3>

                      <p className="text-xs text-slate-500 flex items-center gap-1.5 mb-4">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{hotel.access}</span>
                      </p>

                      <p className="text-sm text-slate-700 leading-relaxed mb-5">
                        {hotel.story}
                      </p>

                      <div className="bg-slate-50 rounded-2xl p-4 mb-5 text-xs space-y-2 border border-slate-100">
                        <div className="flex items-start gap-2">
                          <Building className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-900">客室選びのヒント：</span>
                            <span className="text-slate-600 ml-1">{hotel.roomTip}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Utensils className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-900">冬の味覚ハイライト：</span>
                            <span className="text-slate-600 ml-1">{hotel.gourmetTip}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-1.5 mb-6 text-xs text-slate-600">
                        {hotel.highlights.map((hl: string, hIdx: number) => (
                          <li key={hIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-slate-400 block font-medium">宿泊参考料金（2名1室時1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-black text-rose-600">{hotel.price}</span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-xs transition-all"
                      >
                        <span>空室・プランを確認</span>
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
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-red-600 pl-4">
            <span className="text-red-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Winter Schedule</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の伏見・宇治を満喫する1泊2日王道モデルコース
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              千本鳥居初詣、伏見酒蔵新酒巡り、宇治平等院と京鴨すき鍋を堪能する大人の休日
            </p>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-red-100">
            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-red-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 09:30】早朝の「伏見稲荷大社」新春初詣＆千本鳥居お山巡り</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                混雑を避けるため午前中の早い時間に伏見稲荷大社へ。朱塗りの楼門と本殿で開運招福を祈願し、鮮やかな千本鳥居をくぐって奥社奉拝所へ。「おもかる石」で願いを占い、四ツ辻まで登って冬空に広がる京都市街のパノラマを展望します。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-red-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 12:30】伏見酒蔵通り散策・寒仕込み新酒利き酒＆酒粕汁ランチ</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                京阪電車で伏見桃山・中書島エリアへ移動。白壁土蔵が連なる酒蔵の町並みを歩き、「月桂冠大倉記念館」や「伏水酒蔵小路」で冬限定の搾りたて寒仕込み新酒を利き酒。名物の熱々「酒粕汁」や鳥せい特製の焼き鳥ランチに舌鼓。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-red-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 15:30】京阪電車で宇治へ・世界遺産「平等院鳳凰堂」鑑賞</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                京阪宇治線で宇治へ。平安王朝の面影を今に伝える平等院鳳凰堂を参拝。阿字池の澄んだ水面に映るシンメトリーの鳳凰堂を鑑賞し、ミュージアム鳳翔館で国宝の雲中供養菩薩像を見学。冬ならではの静寂に浸ります。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-red-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 17:30】宿チェックイン・宇治川の冬景色と名物「京鴨鍋」ディナー</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                宇治川沿いの「花やしき浮舟園」または京都駅周辺の厳選宿へチェックイン。大浴場で冷えた体を温めた後、夕食には柔らかく芳醇な合鴨肉と九条葱を特製出汁で煮込む「京鴨鍋」や冬の京会席を地酒とともにゆったり堪能します。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-red-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【2日目 10:00】宇治茶の老舗で濃厚冬抹茶＆茶だんご・宇治上神社参拝</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                宇治川にかかる宇治橋を渡り、日本最古の神社建築である世界遺産「宇治上神社」へ参拝。参道の老舗茶舗（中村藤吉本店など）で温かい抹茶ぜんざいや挽きたて宇治茶を味わい、極上茶葉をお土産に買い求めて京都駅経由で帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* 冬の伏見・宇治観光・実用ガイドセクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-red-600 pl-4">
            <span className="text-red-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Practical Winter Guide</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の伏見・宇治旅を快適に楽しむための底冷え対策・混雑回避・移動のアドバイス
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-rose-500" />
                京の底冷えと足元防寒
              </h4>
              <p>
                盆地特有の底冷えが厳しく、神社の石畳や板敷きの参道は足元から急激に熱を奪います。厚手の靴下や保温インソール、裏起毛パンツを着用し、カイロを靴先や腰に貼るのが効果的です。
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <Building className="w-4 h-4 text-red-500" />
                電車移動と初詣の混雑回避
              </h4>
              <p>
                新春の伏見稲荷大社周辺は道路が全面交通規制・大渋滞となります。必ずJR奈良線または京阪電車を利用してください。また、午前8時前または夕方以降の参拝がもっとも混雑を避けられます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-red-600 pl-4">
            <span className="text-red-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">FAQ & Local Insights</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の伏見・宇治観光・新春参拝・交通 よくある質問
            </h2>
          </div>

          <div className="space-y-6 divide-y divide-slate-100">
            {faqData.map((faq, index) => (
              <div key={index} className="pt-5 first:pt-0">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <span className="text-red-600 font-black">Q{index + 1}.</span>
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
        <section className="bg-slate-100 rounded-3xl p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            合わせて読みたい冬の厳選温泉・初詣特集
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <Link 
              href="/winter-osaka-city-sumiyoshi-taisha-hatsumode-illumination-fugu-stay"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-red-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【大阪】住吉大社新春初詣＆御堂筋イルミネーション名宿</span>
              <span className="text-xs text-slate-500">光の回廊と全国総本社開運参拝、冬の本場とらふぐてっちり鍋</span>
            </Link>
            <Link 
              href="/winter-wakayama-city-kada-onsen-hatsumode-taimeshi-kue-stay"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-red-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【和歌山・加太】日前神宮初詣＆紀淡海峡夕陽絶景名宿</span>
              <span className="text-xs text-slate-500">紀伊国一宮初詣、加太温泉重曹泉美肌湯と冬の一本釣り真鯛・幻のクエ</span>
            </Link>
            <Link 
              href="/winter-mie-suzuka-tsubaki-shrine-nabana-kuwana-hamaguri-stay"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-red-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【三重・鈴鹿桑名】椿大神社みちびき初詣＆なばなの里名宿</span>
              <span className="text-xs text-slate-500">伊勢国一の宮初詣、国内最大級イルミネーションと桑名天然蛤鍋</span>
            </Link>
            <Link 
              href="/features"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-red-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【全国】冬の厳選温泉＆旬グルメ特集一覧へ</span>
              <span className="text-xs text-slate-500">11月・12月・1月に訪れたい日本各地の名宿・絶景旅ガイド</span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-kyoto-fushimi-inari-hatsumode-uji-sake-matcha-stay" />
</div>
        </section>
      </main>
    </article>
  );
}
