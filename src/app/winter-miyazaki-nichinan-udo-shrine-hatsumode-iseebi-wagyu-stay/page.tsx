import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Snowflake, Flame, Mountain, Building, ThermometerSun, Waves, Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月宮崎日南】冬の鵜戸神宮新春開運初詣＆日南海岸絶景ドライブ！名物伊勢海老・極上宮崎牛と日南温泉名宿5選",
  description: "冬の宮崎・日南海岸エリアは、紺碧の太平洋が広がる温暖な気候のもと、奇岩怪石の断崖洞窟に鎮座する霊場「鵜戸神宮」が新春開運の初詣祈願と運玉投げで賑わう絶景の地。鬼の洗濯板やフェニックス並木が続く日南フェニックスロードの爽快ドライブ、九州の小京都・飫肥城下町の風情、冬に最盛期を迎える日南名物「伊勢海老」尽くしや日本一の「宮崎牛」に舌鼓を打ち、美肌の天然温泉宿で寛ぐ大人の冬旅。楽天APIから最新取得した日南・南郷・青島の信頼の名宿5選を徹底特集します。",
  keywords: '日南 ホテル, 鵜戸神宮 初詣, 日南 温泉, 南郷プリンスホテル, 合歓のはな, 日南 伊勢海老, 宮崎牛, 飫肥城下町, 11月 12月 1月 宮崎 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-miyazaki-nichinan-udo-shrine-hatsumode-iseebi-wagyu-stay/"
  },
  openGraph: {
    title: "【11・12・1月宮崎日南】冬の鵜戸神宮新春開運初詣＆日南海岸絶景ドライブ！名物伊勢海老・極上宮崎牛と日南温泉名宿5選",
    description: "冬の宮崎・日南海岸エリアは、紺碧の太平洋が広がる温暖な気候のもと、奇岩怪石の断崖洞窟に鎮座する霊場「鵜戸神宮」が新春開運の初詣祈願と運玉投げで賑わう絶景の地。鬼の洗濯板やフェニックス並木が続く日南フェニックスロードの爽快ドライブ、九州の小京都・飫肥城下町の風情、冬に最盛期を迎える日南名物「伊勢海老」尽くしや日本一の「宮崎牛」に舌鼓を打ち、美肌の天然温泉宿で寛ぐ大人の冬旅。楽天APIから最新取得した日南・南郷・青島の信頼の名宿5選を徹底特集します。",
    url: 'https://croud-travel.com/winter-miyazaki-nichinan-udo-shrine-hatsumode-iseebi-wagyu-stay',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80' }]
  }
};

export default function MiyazakiNichinanWinterPage() {
  const hotels = [
            {
              id: 1,
              name: "日南海岸　南郷プリンスホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/51210/51210.jpg",
              rating: 4.47,
              reviews: 611,
              price: "¥6,790〜",
              access: "◆宮崎自動車道　宮崎IC～日南東郷IC利用で当館まで車で約1時間◆JR日南線　南郷駅より車で約4分♪",
              special: "宮崎空港より車で約60分。全客室バルコニー付オーシャンビュー。太平洋を染める美しい日の出を体験",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F51210%2F51210.html",
              story: "日南海岸国定公園の南端、緑豊かな岬と澄み切った海の狭間に優雅に佇む「日南海岸 南郷プリンスホテル」。全客室がオーシャンビュー＆バルコニー付きの開放的な設計で、冬の柔らかな日差しを浴びながら七ツ八島（ななつばえじま）や水平線の雄大なパノラマを一望できます。海を間近に感じるライオン岩の露天風呂では、心地よい潮騒の音に包まれながら贅沢な湯浴みが実現。夕食は冬の日南を代表する味覚・伊勢海老のお造りや鬼殻焼き、宮崎牛のステーキを盛り込んだ極上会席。鵜戸神宮や都井岬へのアクセスも抜群の南国リゾートです。",
              roomTip: "オーシャンビューツイン。全室バルコニー付きで窓一面に広がる日南ブルーの海。朝日が水平線から昇る幻想的な冬の夜明けを客室から鑑賞。",
              gourmetTip: "「冬の南郷特選会席」。日南海岸で揚がった伊勢海老のぷりぷりとした甘みと、頭の出汁が濃厚な味噌汁、霜降り宮崎牛の鉄板焼きを満喫。",
              highlights: [
                "全室バルコニー付きオーシャンビュー・七ツ八島を望むライオン岩露天風呂・冬の伊勢海老会席",
                "水平線から昇る神々しい冬の日の出・鵜戸神宮や都井岬観光に絶好の南国リゾート",
                "プリンスブランドの上質サービス・冬でも温暖な気候で心身を解放するシーサイドステイ"
              ]
            },
            {
              id: 2,
              name: "天然温泉ひなたの宿日南宮崎",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/187408/187408.jpg",
              rating: 4.47,
              reviews: 447,
              price: "¥10,000〜",
              access: "◆宮崎ICから車で約30分(日南東郷ICよりすぐ)◆飫肥駅から車で約5分",
              special: "多種のお風呂と日南グルメ満載の創作会席が自慢、 温泉宿泊施設「ひなたの宿」",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187408%2F187408.html",
              story: "飫肥城下町にほど近い酒谷川の清流沿いに建つ、木と畳の温もりに満ちた温泉宿「天然温泉ひなたの宿 日南宮崎」。館内に湧き出る自家源泉の天然温泉は、pH高めのアルカリ性単純温泉で、化粧水のように肌にしっとりと吸い付く「美肌の湯」として地元でも愛されています。大浴場には内湯と露天風呂、サウナを完備。夕食は料理長が腕を振るう創作和会席で、A5等級宮崎牛のすき焼きや日南獲れの鮮魚、飫肥名物の厚焼玉子などが彩り豊かに並び、心温まる九州のぬくもりに包まれます。",
              roomTip: "和洋室。畳のリビングスペースに快適なツインベッドを配した落ち着きある空間。窓の外に広がる日南の里山と川のせせらぎに癒やされます。",
              gourmetTip: "「宮崎牛と日南郷土会席」。とろけるようなA5宮崎牛の陶板焼きと、地頭鶏や季節の根菜を丁寧に仕立てた料理長渾身のコース。",
              highlights: [
                "飫肥城下町至近・pH高めのトロトロ天然温泉美肌の湯・料理長厳選のA5宮崎牛陶板焼き",
                "木の温もりあふれる和モダン空間・広々大浴場とサウナ・心温まるおもてなし",
                "酒谷川のせせらぎに癒やされる静穏な立地・ファミリーからシニアまで大満足"
              ]
            },
            {
              id: 3,
              name: "北郷　音色香の季　合歓のはな",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/161077/161077.jpg",
              rating: 5.00,
              reviews: 16,
              price: "¥47,000〜",
              access: "宮崎空港から約30分。福岡方面　宮崎自動車道　田野ICより車で約30分",
              special: "【全10棟の露天風呂付き離れ】秋の味覚・伊勢海老を味わう、静かな森と温泉で過ごす贅沢なひとときを。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161077%2F161077.html",
              story: "猪八重渓谷の清らかな自然に抱かれた、全室わずか10室のみの隠れ家離れリゾート「北郷 音色香の季 合歓のはな（ねいろかのとき ねむのはな）」。広大な敷地内に点在するすべての客室が独立したヴィラタイプとなっており、全室に源泉掛け流しの専用露天風呂を備えています。冬の凛とした空気のなか、星空を見上げながら人目を気にせず名湯に浸かる時間は究極の贅沢。夕食は地産地消にこだわった本格創作懐石。極上宮崎牛や黒潮の恵み、地元契約農家の冬野菜を洗練された器で一皿ずつ堪能できます。",
              roomTip: "離れヴィラスイート。広々としたテラスに客室専用の天然温泉露天風呂を完備。鳥のさえずりと川のせせらぎだけが響く完全プライベート空間。",
              gourmetTip: "「厳選宮崎牛と黒潮旬魚の創作懐石」。日南の極上伊勢海老や宮崎牛サーロインを贅沢に使用し、素材本来の旨味を五感で味わう至高の晩餐。",
              highlights: [
                "全10室限定の離れヴィラスイート・全室客室専用源泉露天風呂完備・静寂の隠れ家リゾート",
                "口コミ驚異の満点5.0評価・宮崎牛サーロインと黒潮魚介の極上創作懐石・大人の記念日旅",
                "星空を仰ぐプライベート露天風呂・非日常のプライバシーが保たれた究極の贅沢"
              ]
            },
            {
              id: 4,
              name: "ホテルシーズン日南",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30939/30939.jpg",
              rating: 4.11,
              reviews: 794,
              price: "¥4,590〜",
              access: "宮崎ICから車で約40分/宮崎空港より車で約50分・宮崎交通バス梅ヶ浜下車徒歩3分/日南線JR油津駅より車で約3分",
              special: "全室、太平洋を一望できるオーシャンビュー。キャンプでは広島東洋カープ選手常宿のホテルです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30939%2F30939.html",
              story: "日南市の中心地・油津港と広渡川の河口近くに位置する「ホテルシーズン日南」。最上階の展望大浴場からは、日南の穏やかな海と川の合流点、街並みを一望でき、朝夕の光の移ろいを眺めながらリラックスできます。機能的な客室は一人旅から家族連れまで使いやすく、プロ野球春季キャンプの滞在拠点としても高い知名度を誇ります。レストランでは、本場宮崎のチキン南蛮や油津港水揚げの新鮮なマグロ、鰹のタタキなど、ローカル色豊かな料理を手軽に楽しめます。",
              roomTip: "リバー＆オーシャンビューツイン。清潔で広々とした間取り。窓の外に広がる広渡川と日南の海を眺めながら静かに過ごせます。",
              gourmetTip: "「日南の郷土朝食＆ディナー」。本場仕込みのタルタルソースがたっぷり乗ったチキン南蛮や、油津港直送の鮮魚刺身が楽しめる気取らない美味。",
              highlights: [
                "油津港近く・最上階展望大浴場から海と川を一望・本場チキン南蛮と地魚料理が好評",
                "機能的で快適な客室・ビジネスから観光まで高い利便性・手頃な宿泊料金",
                "油津商店街や散策スポットに近接・温かいローカルな接客と清潔な設備"
              ]
            },
            {
              id: 5,
              name: "ＡＮＡホリデイ・インリゾート宮崎　ｂｙ　ＩＨＧ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8782/8782.jpg",
              rating: 4.36,
              reviews: 2174,
              price: "¥5,280〜",
              access: "宮崎自動車道宮崎ICから国道220号線で15分。宮崎ブーゲンビリア空港から車で15分。JRこどものくに駅から徒歩7分。",
              special: "サウナ付天然温泉完備で泉質は美肌の湯、海を眺めながらご入浴が可能な展望大浴場です",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8782%2F8782.html",
              story: "青島神社や鬼の洗濯板が広がる青島海岸のすぐ目の前に位置するインターナショナルリゾート「ANAホリデイ・インリゾート宮崎 by IHG」。日南海岸ドライブの起点に最適な絶好のロケーションを誇ります。地下深くから湧き出る「青島天然温泉」は、炭酸水素塩温泉の効能で肌がすべすべになる美人の湯。海を望むインドアプールや本格的なフィットネスも完備。朝食ビュッフェでは宮崎名物冷汁や炭火焼き、オムレツなど多彩な料理が並び、冬でも南国の陽光が降り注ぐ明るいリゾートステイを約束します。",
              roomTip: "プレミアムオーシャンビューツイン。バルコニーから青島と太平洋の大海原を一望。波の音をBGMに贅沢なリゾート時間を過ごせます。",
              gourmetTip: "「宮崎リゾートモーニングビュッフェ」。郷土料理の冷汁や日向夏ドレッシングの新鮮サラダ、焼きたてパンが揃う爽快な朝食。",
              highlights: [
                "青島海岸目前・青島天然温泉大浴場完備・日南フェニックスロードドライブの拠点に最適",
                "太平洋を望む開放的な客室・宮崎郷土料理ビュッフェ・多彩なアクティビティ施設",
                "青島神社徒歩圏・冬晴れの宮崎を満喫するインターナショナルブランドの安心感"
              ]
            }
  ];

  const faqData = [
  {
    "q": "鵜戸神宮の新春初詣（1月）の特徴や名物「運玉投げ」のルール・混雑回避のポイントは？",
    "a": "鵜戸神宮（うどじんぐう）は、日向灘の荒波が削り取った海食洞（巨大な洞窟）の中に極彩色の本殿が鎮座する全国的にも極めて珍しい神社です。主祭神は神武天皇の父である鵜草葺不合命（ウガヤフキアエズノミコト）で、縁結び・安産・航海安全・開運厄除の御利益で知られます。名物の「運玉投げ」は、亀の形をした巨岩（亀石）の背中にある窪み（枡形）をめがけて、男性は左手、女性は右手で素焼きの「運玉」を投げ入れ、見事に入ると願いが叶うとされます。三が日は参道や駐車場が大混雑するため、午前8時前または16時以降の参拝がスムーズです。"
  },
  {
    "q": "冬の日南海岸（フェニックスロード）ドライブの見どころや温暖な気候の魅力は？",
    "a": "宮崎市から日南市・串間市へと続く国道220号・448号は「日南フェニックスロード」と呼ばれ、日本の道100選にも選ばれた屈指のシーサイドドライブコースです。冬でも黒潮の影響で温暖な気候が保たれ、道沿いにはフェニックス（ヤシの木）が連なり南国情緒が漂います。国の天然記念物である奇岩群「鬼の洗濯板」、標高100mの断崖から太平洋を一望する「堀切峠（道の駅フェニックス）」、モアイ像が立ち並ぶ「サンメッセ日南」など、絶景ポイントが連続します。"
  },
  {
    "q": "冬の日南で味わうべきグルメ「伊勢海老」と「宮崎牛」の魅力は？",
    "a": "日南海岸は日本有数の伊勢海老の好漁場です。毎年9月に解禁される伊勢海老漁は冬（11月〜1月）に寒さとともに身が引き締まり、濃厚な甘みと弾力のある歯ごたえがピークを迎えます。お造りの透き通った甘み、香ばしい鬼殻焼き、頭から染み出る濃厚な味噌汁は冬の至福です。また、内閣総理大臣賞を連続受賞し全国和牛能力共進会で日本一に輝いた「宮崎牛」は、極上の霜降りと上品な脂の甘みが特徴。陶板焼きやすき焼きでその極上の柔らかさを堪能できます。"
  },
  {
    "q": "九州の小京都・飫肥（おび）城下町の見どころや食べ歩きグルメは？",
    "a": "飫肥は伊東氏5万石の城下町として栄えた歴史的な街並みで、石垣や武家屋敷、武家屋敷通りが江戸時代の面影をそのまま残しています。「あゆみちゃんマップ」を購入すると、飫肥城跡や商家資料館の見学と同時に、名物の「飫肥天（おびてん：魚のすり身に豆腐と黒砂糖を混ぜて揚げたほんのり甘い天ぷら）」や「厚焼玉子（まるでプリンのように滑らかで甘い伝統玉子焼き）」の食べ歩きが楽しめます。"
  },
  {
    "q": "冬（11月〜1月）の宮崎・日南の気候や服装・レンタカー移動のポイントは？",
    "a": "宮崎県南部は日照時間が日本トップクラスで、冬でも日中は15〜18℃近くまで気温が上がる日が多く、日差しがある屋外ではコートを脱いで過ごせるほど温暖です。ただし朝晩や海沿いの岬では海風が吹いて肌寒くなるため、薄手のダウンジャケットやカーディガンなどの羽織るものを用意しておくと安心です。日南海岸は絶景スポットが点在しているため、宮崎ブーゲンビリア空港または宮崎駅前でレンタカーを借りてドライブするのが最も自由で効率的な移動手段です。"
  }
];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://croud-travel.com/winter-miyazaki-nichinan-udo-shrine-hatsumode-iseebi-wagyu-stay#webpage",
        "url": "https://croud-travel.com/winter-miyazaki-nichinan-udo-shrine-hatsumode-iseebi-wagyu-stay",
        "name": "【11・12・1月宮崎日南】冬の鵜戸神宮新春開運初詣＆日南海岸絶景ドライブ！名物伊勢海老・極上宮崎牛と日南温泉名宿5選",
        "description": "冬の宮崎・日南海岸エリアは、紺碧の太平洋が広がる温暖な気候のもと、奇岩怪石の断崖洞窟に鎮座する霊場「鵜戸神宮」が新春開運の初詣祈願と運玉投げで賑わう絶景の地。鬼の洗濯板やフェニックス並木が続く日南フェニックスロードの爽快ドライブ、九州の小京都・飫肥城下町の風情、冬に最盛期を迎える日南名物「伊勢海老」尽くしや日本一の「宮崎牛」に舌鼓を打ち、美肌の天然温泉宿で寛ぐ大人の冬旅。楽天APIから最新取得した日南・南郷・青島の信頼の名宿5選を徹底特集します。",
        "inLanguage": "ja",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.com/#website",
          "url": "https://croud-travel.com/",
          "name": "くらうどトラベル"
        }
      },
      {
        "@type": "BreadcrumbList",
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
            "name": "鵜戸神宮初詣＆日南伊勢海老名宿",
            "item": "https://croud-travel.com/winter-miyazaki-nichinan-udo-shrine-hatsumode-iseebi-wagyu-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      },
      {
        "@type": "TouristDestination",
        "name": "宮崎県日南市（鵜戸神宮・日南海岸・飫肥城下町）",
        "description": "断崖洞窟の霊場・鵜戸神宮の新春開運初詣と運玉投げ、日南フェニックスロードの絶景、本場伊勢海老と宮崎牛に寛ぐ温暖な冬の宮崎。",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "宮崎県",
          "addressLocality": "日南市",
          "addressCountry": "JP"
        }
      }
    ]
  };

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-orange-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-amber-950 to-orange-950 text-white overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs sm:text-sm font-semibold tracking-wide">
            <Waves className="w-4 h-4 text-orange-300 animate-pulse" />
            <span>11月・12月・1月冬の九州特選ガイド｜宮崎・日南・南郷・青島</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            冬の鵜戸神宮新春開運初詣＆日南海岸絶景ドライブ！<br className="hidden sm:inline" />
            名物伊勢海老・極上宮崎牛と日南温泉名宿5選
          </h1>

          <p className="max-w-4xl text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal">
            断崖の洞窟に鎮座する神秘の鵜戸神宮で運玉を投げ、新春の開運を祈願。冬でも温暖な青空と紺碧の海が広がる日南海岸フェニックスロード、飫肥城下町の小京都情緒。甘み濃厚な本場伊勢海老と極上宮崎牛、美肌の天然温泉に癒やされる特別な冬旅へご案内します。
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Compass className="w-4 h-4 text-orange-400" /> 日南海岸・鵜戸神宮・飫肥・南郷
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Utensils className="w-4 h-4 text-amber-400" /> 日南伊勢海老・A5宮崎牛・飫肥天
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Calendar className="w-4 h-4 text-sky-400" /> 探訪期：11月上旬〜1月下旬
            </span>
          </div>
        </div>
      </header>

      {/* Navigation Breadcrumbs */}
      <nav aria-label="パンくずリスト" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-500">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-orange-600 transition">ホーム</Link></li>
          <li><span>/</span></li>
          <li><Link href="/features" className="hover:text-orange-600 transition">特集一覧</Link></li>
          <li><span>/</span></li>
          <li className="text-slate-800 font-medium truncate">冬の日南海岸・鵜戸神宮初詣＆伊勢海老特集</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-16">
        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-orange-500 pl-4">
            <span className="text-orange-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Deep Dive Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              波飛沫舞う断崖の洞窟宮と陽光の日南ブルー！南国宮崎の冬の祈りと美食
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              黒潮が運ぶ温暖な気候、神話の舞台・鵜戸神宮の運玉祈願、そして冬の伊勢海老尽くし
            </p>
          </div>

          <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
            <p>
              日本列島の多くの地域が厳しい寒風や降雪に見舞われる11月から1月にかけて、宮崎県南部の日南海岸は黒潮の恵みによって驚くほど温暖で明るい陽光に満ちあふれます。冬晴れの澄んだ青空、どこまでも続くフェニックス（ヤシの木）の並木道、青く澄み渡る太平洋、そして波の浸食によってできた奇岩「鬼の洗濯板」。国道220号から448号へと続く日南フェニックスロードは、日本の道100選にも選ばれた屈指の爽快ドライブコースであり、冬でも重い防寒具を脱いで心地よい海風を感じながら旅を楽しむことができます。
            </p>
            <p>
              海岸沿いの険しい断崖を石段伝いに降りていくと、太平洋の荒波が打ち寄せる巨大な海食洞窟が現れます。その薄暗い洞内に鮮やかな朱塗りの本殿が鎮座するのが、日向灘の聖地「鵜戸神宮（うどじんぐう）」です。日本神話において海神の娘・豊玉姫（トヨタマヒメ）が主祭神・ウガヤフキアエズノミコトを出産した霊場として伝わり、古くから縁結び・安産・航海安全・開運厄除の神として信仰を集めてきました。新春の初詣では全国から大勢の参拝者が訪れ、波の音と潮の香りに包まれながら新年の誓いを立てます。名物の「運玉投げ」は、海上の亀石（かめいし）と呼ばれる巨岩の窪みに向かって、男性は左手、女性は右手で素焼きの運玉を投げ入れる神事。見事に入れば願いが叶うとされ、歓声と笑顔が境内に響きます。
            </p>
            <p>
              日南海岸の冬を彩るもう一つの大きな魅力が、九州の小京都と称される「飫肥（おび）」の城下町です。飫肥杉の山々に抱かれ、伊東氏5万石の城下町として栄えたこの地には、重厚な石垣、武家屋敷の門構え、清流が流れる堀割が江戸時代のたたずまいそのままに残されています。冬の穏やかな日差しの下、「あゆみちゃんマップ」を手に散策すれば、魚のすり身に豆腐と黒砂糖を混ぜてふんわり揚げた郷土の「飫肥天（おびてん）」や、まるでプリンのように滑らかで上品な甘さの「厚焼玉子」の出来立てを味わうことができます。
            </p>
            <p>
              そして夜を彩る主役は、黒潮が育んだ贅を尽くした海の幸と山の幸です。日南海岸で水揚げされる「伊勢海老」は、冬の冷たい海水によって身がキュッと引き締まり、一年で最も甘みと弾力が濃厚になる旬を迎えます。透き通るような活造りの甘み、香ばしく焼き上げた鬼殻焼き、そして翌朝の味噌汁に染み出る濃厚な出汁は言葉を失う美味。さらに、内閣総理大臣賞を4大会連続受賞した最高峰のブランド牛「宮崎牛」の霜降りステーキやすき焼き、地元契約農家の冬野菜。肌にしっとりと吸い付くトロトロの天然温泉に身を沈めれば、心も体も芯から温まる極上の南国リトリートが完成します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs sm:text-sm">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="font-bold text-orange-700 block mb-1">鵜戸神宮初詣＆運玉投げ</span>
              <p className="text-slate-600">断崖洞窟に佇む朱の社殿。亀石の枡形に運玉を投げ入れて開運・安産・良縁を祈願する神秘体験。</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="font-bold text-orange-700 block mb-1">日南フェニックスロードドライブ</span>
              <p className="text-slate-600">冬でも温暖な青空とフェニックス並木。堀切峠のパノラマ、鬼の洗濯板、サンメッセ日南モアイ像。</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="font-bold text-orange-700 block mb-1">本場伊勢海老＆宮崎牛の贅</span>
              <p className="text-slate-600">冬に甘みが凝縮する日南伊勢海老の活造り・味噌汁。日本一の宮崎牛と美肌のトロトロ天然温泉。</p>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-orange-600 font-bold text-xs sm:text-sm tracking-wider uppercase">Handpicked Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              冬の日南・南郷・青島を満喫する厳選名宿5選
            </h2>
            <p className="text-sm text-slate-600">
              楽天トラベルAPIから最新取得した、オーシャンビュー絶景・美肌天然温泉・極上伊勢海老と宮崎牛の信頼宿
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
              >
                {/* Hotel Image */}
                <div className="relative md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100 overflow-hidden">
                  <img
                    src={hotel.img}
                    alt={hotel.name}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{hotel.rating}</span>
                    <span className="text-slate-300 font-normal">({hotel.reviews}件)</span>
                  </div>
                </div>

                {/* Hotel Info */}
                <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-medium text-orange-800 bg-orange-50 px-3 py-1 rounded-lg w-fit">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{hotel.access}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                      {hotel.name}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {hotel.story}
                    </p>

                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
                      <div>
                        <span className="font-bold text-slate-900">客室の魅力：</span> {hotel.roomTip}
                      </div>
                      <div>
                        <span className="font-bold text-slate-900">冬の食体験：</span> {hotel.gourmetTip}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-2">
                      {hotel.highlights.map((item: string, hIdx: number) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-slate-500 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-2xl font-extrabold text-orange-600">{hotel.price}</span>
                    </div>

                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-sm shadow-md hover:from-orange-500 hover:to-amber-500 hover:shadow-lg transition-all"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1泊2日モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-orange-500 pl-4">
            <span className="text-orange-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Winter Schedule</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の日南海岸を満喫する1泊2日王道モデルコース
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              鵜戸神宮運玉初詣、フェニックスロード爽快ドライブ、飫肥城下町、伊勢海老＆宮崎牛を味わう旅
            </p>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-orange-100">
            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 10:00】宮崎空港到着＆レンタカーで青島神社・鬼の洗濯板へ</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                宮崎ブーゲンビリア空港に到着。空港前でレンタカーを借り、国道220号を南下して「青島神社」へ。弥生橋を渡り、国の天然記念物「鬼の洗濯板」の奇岩美を鑑賞。亜熱帯植物が茂る元宮で新年の開運縁結びを祈願します。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 12:00】日南フェニックスロードドライブ＆堀切峠の絶景</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                シーサイドウェイを快走し「道の駅フェニックス」へ。標高約100mの展望デッキから紺碧の太平洋を一望。名物の日向夏ソフトクリームを味わった後、日南海岸沿いの食事処で冬に水揚げされたばかりの新鮮な伊勢海老ランチを堪能。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 14:00】断崖の洞窟宮「鵜戸神宮」新春初詣＆運玉投げ挑戦</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                日南随一のパワースポット「鵜戸神宮」へ。石段を降りて海食洞内の朱塗り本殿で開運祈願。波打ち際の亀石の窪みを目指して素焼きの運玉を投げる「運玉投げ」に挑戦。冬の澄んだ海風と波の音が心地よく響きます。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 16:30】日南・南郷のリゾート宿チェックイン＆極上ディナー</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                日南海岸南郷プリンスホテルや合歓のはなへチェックイン。客室バルコニーから海に沈む夕日を眺め、大浴場や露天風呂でリラックス。夕食は冬の伊勢海老お造りと濃厚味噌汁、とろける霜降り宮崎牛の陶板焼きを贅沢に味わいます。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【2日目 10:00】九州の小京都「飫肥城下町」散策＆名物食べ歩き</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                朝食後、伊東氏5万石の城下町「飫肥」へ。大手門や旧本丸跡を散策し、「あゆみちゃんマップ」を手に揚げたての飫肥天や甘い厚焼玉子を食べ歩き。サンメッセ日南でモアイ像を見学し、空港へ戻って帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Local Winter Experience Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8">
          <div className="border-l-4 border-orange-500 pl-4">
            <span className="text-orange-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Travel Strategy</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の日南完全攻略：鵜戸神宮初詣・絶景ドライブ・伊勢海老巡りの極意
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                鵜戸神宮の「運玉投げ」と新春初詣のコツ
              </h3>
              <p className="leading-relaxed">
                鵜戸神宮の運玉は5個で数百円。男性は左手、女性は右手で投げる習わしです。亀石の窪みまでは約12mあるため、力を抜いて山なりの放物線を描くように投げるのがコツ。三が日は参道前の駐車場が大渋滞するため、朝8時前の早い時間に到着するとスムーズに参拝できます。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-orange-500" />
                日南フェニックスロードの絶景立ち寄り処
              </h3>
              <p className="leading-relaxed">
                宮崎市内から日南へ向かうルートでは、まず「道の駅フェニックス」で堀切峠のパノラマと名物ソフトクリームを堪能。続いて「サンメッセ日南」で完全復刻された7体のモアイ像と記念撮影。冬の澄んだ青空と水平線が交わるコントラストは息を呑む美しさです。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Building className="w-5 h-5 text-indigo-500" />
                九州の小京都・飫肥城下町の散策と名物
              </h3>
              <p className="leading-relaxed">
                飫肥（おび）では飫肥杉が使われた大手門や武家屋敷が立ち並び、江戸情緒が漂います。「あゆみちゃんマップ」を片手に、揚げたての飫肥天やまるでプリンのような上品な甘さの厚焼玉子をつまみ食いしながらの散策は、冬の心地よい日差しにぴったりです。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-red-500" />
                冬の王様！日南伊勢海老と宮崎牛の贅沢
              </h3>
              <p className="leading-relaxed">
                日南海岸の伊勢海老は、冬の冷たい黒潮で身が引き締まり甘みが凝縮します。宿の夕食プランでは、お造りのぷりぷりした食感を楽しんだ後、翌朝の朝食や夕食の締めに頭を使った濃厚な味噌汁を味わうのが王道。霜降りの宮崎牛ステーキとの贅沢な競演は旅のハイライトです。
              </p>
            </div>
          </div>
        </section>

        {/* Climate and Access */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-orange-500 pl-4">
            <span className="text-orange-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Travel Advice</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の宮崎・日南：気候・服装・ドライブの注意点
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-orange-500" />
                温暖な気候と朝晩の寒暖差
              </h4>
              <p>
                日中は15℃を超える日も多く過ごしやすいですが、朝晩や岬の突端では冷たい海風が吹きます。脱ぎ着しやすいカーディガンやライトダウンを1着用意しておくと、一日中快適に観光を楽しめます。
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <Compass className="w-4 h-4 text-teal-500" />
                宮崎空港からのレンタカードライブ
              </h4>
              <p>
                宮崎ブーゲンビリア空港から日南市街地までは車で約50分。国道220号は道幅も広く走りやすいシーサイドウェイですが、鵜戸神宮周辺はカーブが多いため、景色に見とれず安全運転を心がけましょう。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-orange-500 pl-4">
            <span className="text-orange-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">FAQ & Local Insights</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の宮崎・日南観光・初詣・グルメ よくある質問
            </h2>
          </div>

          <div className="space-y-6 divide-y divide-slate-100">
            {faqData.map((faq, index) => (
              <div key={index} className="pt-5 first:pt-0">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <span className="text-orange-600 font-black">Q{index + 1}.</span>
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
            合わせて読みたい冬の九州・南国温泉特集
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <Link 
              href="/winter-miyazaki-aoshima-onsen-miyazakigyu-iseebi-resort-stay"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-orange-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【宮崎・青島】青島神社初詣＆鬼の洗濯板！美肌温泉リゾート名宿</span>
              <span className="text-xs text-slate-500">青島海岸の絶景オーシャンビューと伊勢海老・宮崎牛の贅</span>
            </Link>
            <Link 
              href="/winter-kagoshima-ibusuki-onsen-sunamushi-black-pork-stay"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-orange-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【鹿児島・指宿温泉】天然砂むし温泉＆開聞岳絶景！黒豚名宿</span>
              <span className="text-xs text-slate-500">波打ち際の天然砂むし温泉でデトックス、冬の極上かごしま黒豚</span>
            </Link>
            <Link 
              href="/winter-fukuoka-munakata-taisha-hatsumode-torafugu-munakatagyu-stay"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-orange-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【福岡・宗像】宗像大社世界遺産新春初詣＆玄界灘天然とらふぐ名宿</span>
              <span className="text-xs text-slate-500">神郡の開運パワースポットと冬の極上天然とらふぐ会席</span>
            </Link>
            <Link 
              href="/features"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-orange-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【全国】冬の厳選温泉＆旬グルメ特集一覧へ</span>
              <span className="text-xs text-slate-500">11月・12月・1月に訪れたい日本各地の名宿・絶景旅ガイド</span>
            </Link>
          </div>
        </section>
      </main>
    </article>
  );
}
