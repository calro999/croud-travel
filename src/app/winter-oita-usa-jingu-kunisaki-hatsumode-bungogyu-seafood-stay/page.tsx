import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Snowflake, Sun, Flame, Mountain, Building, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月大分：宇佐神宮新春開運初詣！名宿5選',
  description: '冬の大分・宇佐＆国東半島は、全国4万社を超える八幡宮の総本宮「宇佐神宮」での新春初詣と。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '宇佐神宮 初詣, 国東半島 ホテル, 富貴寺 旅庵蕗薹, 豊後牛 すき焼き, 豊前海 車海老, 宇佐からあげ, 昭和の町, 11月 12月 1月 大分 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-oita-usa-jingu-kunisaki-hatsumode-bungogyu-seafood-stay/"
  },
  openGraph: {
    title: '11・12・1月大分：宇佐神宮新春開運初詣！名宿5選',
    description: '冬の大分・宇佐＆国東半島は、全国4万社を超える八幡宮の総本宮「宇佐神宮」での新春初詣と。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-oita-usa-jingu-kunisaki-hatsumode-bungogyu-seafood-stay',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=630', width: 1200, height: 630, alt: '宇佐神宮と国東六郷満山の富貴寺' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月大分：全国八幡宮総本宮・宇佐神宮新春開運初詣＆国東六郷満山！豊前海天然車海老と極上豊後牛を味わう名宿5選",
    description: "冬の大分・宇佐＆国東半島は、全国4万社を超える八幡宮の総本宮「宇佐神宮」での新春初詣と、九州最古の木造建築・国宝「富貴寺大堂」をはじめとする神仏習合の六郷満山文化を訪ねる神秘の旅舞台。豊前海が育む冬の極上天然車海老や渡り蟹、大分の誇る黒毛和牛の最高峰「おおいた豊後牛」の贅沢なすき焼き、元祖宇佐からあげ。静寂に包まれる石仏群と冬晴れの別府湾・周防灘を望み、温もりの天然温泉に癒やされる厳選名宿5選を徹底解説します。"
  }
};

export default function OitaUsaKunisakiPage() {
  const hotels = [
            {
              id: 1,
              name: "富貴寺温泉　旅庵　蕗薹",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/167291/167291.jpg",
              rating: 4.55,
              reviews: 86,
              price: "¥13,200〜",
              access: "ＪＲ　宇佐駅よりお車にて約３０分、大分空港よりお車にて約４０分",
              special: "国宝富貴寺大堂に隣接したお宿。歴史を感じさせる佇まいの中で喧噪を忘れ、ゆったりとお過ごしください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167291%2F167291.html",
              story: "九州最古の木造建築であり国宝に指定された「富貴寺大堂」に静かに隣接する料理旅館「富貴寺温泉 旅庵 蕗薹（ふきのとう）」。冬の冷気の中、杉木立に囲まれた静寂の境内に佇む富貴寺を朝夕に散策できる唯一無二のロケーションが魅力です。館内には肌あたりの柔らかな天然温泉が湧き、冬の散策で冷えた身体を芯からじんわりと温めてくれます。夕食には大分県産ブランド黒毛和牛「おおいた豊後牛」の陶板焼きや、国東特産の肉厚干し椎茸、地元契約農家の冬野菜を使った繊細な手作り田舎会席が供され、滋味深い土地の恵みに心洗われる滞在が叶います。",
              roomTip: "和室10畳（庭園側）。窓外に国東半島の豊かな自然と里山の冬景色が広がり、日常の喧騒を忘れさせる静謐な和の空間。",
              gourmetTip: "「豊後牛陶板焼き＆地産会席」。とろけるような豊後牛の旨みと、香り高い原木椎茸、地元の清流米で炊き上げる季節のご飯。",
              highlights: [
                "国宝富貴寺に隣接する唯一無二の料理旅館・源泉かけ流し天然温泉と静寂の杉木立",
                "極上黒毛和牛「おおいた豊後牛」陶板焼き＆国東特産原木椎茸の手作り田舎会席",
                "早朝の誰もいない国宝富貴寺大堂を静かに参拝できる贅沢な時間"
              ]
            },
            {
              id: 2,
              name: "全室オーシャンビュー　ホテルベイグランド国東（旧：いこいの村国東）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108667/108667.jpg",
              rating: 3.94,
              reviews: 216,
              price: "¥5,060〜",
              access: "ＪＲ杵築駅より路線バス国東行乗車黒津崎海岸バス停下車後2分/大分道・連見ICより車で50分",
              special: "★全室オーシャンビュー★全館Wi-Fi対応！シーンに合わせて提供する会席料理",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108667%2F108667.html",
              story: "国東半島の東海岸に位置し、目の前に穏やかな周防灘・伊予灘のオーシャンビューが広がる「全室オーシャンビュー ホテルベイグランド国東（旧：いこいの村国東）。」。全客室および大浴場から雄大な海を一望でき、冬の早朝には水平線から昇る神々しい朝日のパノラマを堪能できます。夕食では豊前海・国東沖で水揚げされた新鮮な天然車海老の塩焼きや冬の旬魚のお造り、太刀魚、豊後牛のステーキなど海の幸と山の幸が勢揃い。広大な敷地と静かな海辺のロケーションが、冬の心穏やかなリフレッシュステイを約束します。",
              roomTip: "オーシャンビュー和室・洋室。大きな窓から水平線が一望でき、冬の澄んだ朝焼けや月明かりに照らされる海を部屋から眺められます。",
              gourmetTip: "「豊前海海鮮会席＆天然車海老」。プリプリの甘みが弾ける車海老の塩焼きや地魚のお造り、冬のあったか海鮮小鍋。",
              highlights: [
                "全室オーシャンビュー・水平線から昇る冬の神々しい日の出と広々展望大浴場",
                "豊前海直送の天然車海老塩焼き＆冬の地魚お造り・贅沢な海鮮ディナー",
                "冬の周防灘を望む絶景ロケーション・波の音に包まれるリラクゼーション"
              ]
            },
            {
              id: 3,
              name: "梅園の里",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/129891/129891.jpg",
              rating: 4.13,
              reviews: 99,
              price: "¥5,500〜",
              access: "杵築駅からお車で５０分",
              special: "2018年4月『天球館』リニューアルOPEN☆美しい星空と自然に癒される！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129891%2F129891.html",
              story: "国東半島の中央部、豊かな緑と清澄な空気に包まれた高台に佇む「梅園の里」。江戸時代の先哲・三浦梅園の生誕地にちなんだリゾート施設であり、敷地内には本格的な公開天文台「天球館」を併設。冬の澄み渡る夜空に煌めく満天の星空観測体験が人気を集めています。館内の天然温泉大浴場からは国東の山並みを望め、冬の冷たい空気の中で楽しむ露天風呂は格別の爽快感。地元産の食材をふんだんに取り入れた郷土会席料理とともに、心温まるアットホームなもてなしが旅人を迎えてくれます。",
              roomTip: "本館和室またはコテージ。澄んだ山の空気と静けさに包まれ、夜には満天の星が頭上に広がるネイチャーステイ。",
              gourmetTip: "「国東味覚会席＆冠地鶏鍋」。大分の地鶏「おおいた冠地鶏」の旨味溢れる冬鍋と、豊後牛のグリル、滋味豊かな里山料理。",
              highlights: [
                "国東半島の高台に位置する大自然リゾート・本格天文台併設で満天の冬星空観測",
                "おおいた冠地鶏のあったか冬鍋＆豊後牛グリル・里山恵み会席料理",
                "山並みを望む開放的な露天風呂・澄んだ空気の中で楽しむ非日常ステイ"
              ]
            },
            {
              id: 4,
              name: "ＨＯＴＥＬ　ＡＺ　大分空港店",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/181327/181327.jpg",
              rating: 4.05,
              reviews: 309,
              price: "¥5,280〜",
              access: "大分空港より車で3分",
              special: "【全室禁煙】朝食無料、Wi-Fi無料、駐車場無料（大・中型車除く）でコスパに優れたホテルです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181327%2F181327.html",
              story: "大分空港から車でわずか約5分の至近距離に位置し、飛行機を利用した大分・国東周遊の玄関口として圧倒的な利便性を誇る「ＨＯＴＥＬ ＡＺ 大分空港店」。宇佐神宮へのドライブ観光や国東六郷満山の寺院巡りへスムーズに出発できる好立地です。リーズナブルな均一料金設定でありながら、無料の平面駐車場、朝食バイキング、コインランドリーなど長期滞在にも安心の設備が充実。清潔で明るい客室には個別空調や快適なベッドが整い、新春の初詣ドライブやビジネスにも使い勝手抜群の宿です。",
              roomTip: "スタンダードツイン・シングル。無駄のない機能的なレイアウトと充実した電源環境。静かな環境で翌日の観光に備えて熟睡できます。",
              gourmetTip: "「無料和洋朝食バイキング」。温かいご飯と味噌汁、焼き魚や卵料理など、旅の出発前にエネルギーをチャージできる安心の朝食。",
              highlights: [
                "大分空港車5分の抜群のアクセス・無料平面駐車場完備で初詣ドライブの拠点",
                "和洋朝食バイキング無料・周辺の名店で味わう元祖宇佐からあげや地魚",
                "均一料金で安心のコストパフォーマンス・国東六郷満山巡りに最適"
              ]
            },
            {
              id: 5,
              name: "ホテルルートイン中津駅前",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/51222/51222.jpg",
              rating: 4.13,
              reviews: 1132,
              price: "¥5,275〜",
              access: "ＪＲ中津駅より徒歩３分",
              special: "和洋バイキング朝食無料！！☆広々とした140台の無料駐車場も確保しております。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F51222%2F51222.html",
              story: "JR日豊本線の中津駅南口から徒歩約3分に位置する「ホテルルートイン中津駅前」。福澤諭吉の故郷・中津城下にあり、宇佐神宮へは車で約25分、電車（JR日豊本線）でも約10分とアクセス至近。館内には旅の疲れを心地よく癒やす人工温泉大浴場「旅人の湯」が完備され、冬の初詣帰りの冷えた身体を温められます。無料の和洋バイキング朝食には、ヨーロッパ直輸入の焼きたてクロワッサンや温かい惣菜が並び、周辺には本場の中津からあげ店や名物鱧料理店が点在する充実のロケーションです。",
              roomTip: "コンフォートルーム。エアウィーヴ社製マットレス導入客室もあり、冬の観光疲れを上質な眠りでしっかりとリセット。",
              gourmetTip: "「和洋バイキング朝食＆中津からあげ探訪」。ホテル自慢の焼きたてパン朝食と、夜は駅前でサクサクジューシーな中津からあげ巡り。",
              highlights: [
                "JR中津駅徒歩3分・宇佐神宮アクセス良好・男女別人工温泉大浴場＆無料朝食",
                "ヨーロッパ直輸入の焼きたてパン朝食バイキング・中津城下町のからあげ探訪",
                "エアウィーヴ導入客室あり・ビジネスから冬の観光まで快適な快眠環境"
              ]
            }
  ];

  const faqList = [
  {
    "q": "冬（11月〜1月）の宇佐神宮の新春初詣の混雑状況や見どころ、参拝作法は？",
    "a": "宇佐神宮は全国に約44,000社ある八幡宮の総本宮で、欽明天皇32年（571年）に創建されたと伝わる神仏習合発祥の大社です。正月三が日には約40万人の参拝者が訪れます。本殿は八幡造りの国宝建築で、一之御殿（八幡大神・応神天皇）、二之御殿（比売大神）、三之御殿（神功皇后）の順に参拝します。一般的な神社とは異なり、出雲大社と同じ「二礼四拍手一礼」の作法で拝礼するのが特徴です。元旦から3日にかけては国道10号線や駐車場が渋滞するため、早朝（午前7時〜8時台）または夕方16時以降の参拝がスムーズです。御神木の巨木クスノキや、勅使街道に架かる屋根付きの美しい「呉橋」も見どころです。"
  },
  {
    "q": "国東半島の「六郷満山（ろくごうまんざん）」文化と、冬に訪れるべき代表寺社は？",
    "a": "国東半島の中央にそびえる両子山（ふたごさん）から放射状に広がる6つの谷筋（郷）に開かれた天台宗寺院群を「六郷満山」と呼びます。奈良時代末期に仁聞（にんもん）菩薩によって開創され、宇佐神宮の八幡信仰と仏教が融合した独特の神仏習合文化が今に息づいています。冬の代表格は、九州最古の木造建築で平安時代後期の阿弥陀堂である国宝「富貴寺大堂（ふきじだいどう）」。冬枯れの木立の中に佇む姿は孤高の美しさを誇ります。さらに高さ8mを超える巨岩に刻まれた日本最大級の「熊野磨崖仏（くまのまがいぶつ）」や、仁王像が有名な「両子寺（ふたごじ）」など、静謐な空気に満ちた聖地巡りが楽しめます。"
  },
  {
    "q": "冬の宇佐・国東半島で味わうべき極上グルメ（豊後牛、天然車海老、宇佐からあげ）は？",
    "a": "大分県が全国に誇る黒毛和牛「おおいた豊後牛」は、和牛の品評会で日本一に輝いた血統を引く最高峰ブランド。オレイン酸を豊富に含み、とろけるような口どけと上質な脂の甘みが特徴で、冬は熱々のすき焼きや陶板焼きが絶品です。また豊前海や姫島周辺の海は日本屈指の「車海老」の好漁場であり、冬に甘みと身の締まりが最高潮に達します。塩焼きや天ぷら、踊り食いでその弾力と濃厚な旨みを堪能できます。さらに宇佐市は「からあげ専門店発祥の地」として知られ、ニンニクや生姜を効かせた秘伝のタレに漬け込んだ揚げたての宇佐からあげは、冬のドライブのお供に欠かせないご当地グルメです。"
  },
  {
    "q": "冬の国東半島ドライブ時の気候と積雪、車運転の注意点は？",
    "a": "国東半島沿岸部（国東市、豊後高田市、宇佐市）は瀬戸内海式気候に属し、冬でも比較的温暖で積雪することは滅多にありません。日中の気温は8〜12℃前後です。しかし半島中央部の両子山周辺や熊野磨崖仏、富貴寺などの山間部は標高が高く、12月下旬から1月の冷え込み時には路面凍結（アイスバーン）やうっすらとした降雪が見られることがあります。山間部の峠道を走行する場合は、スタッドレスタイヤの装着をおすすめします。東九州自動車道や宇佐別府道路などの高速道が整備されており、大分空港や北九州方面からのアクセスは非常に軽快です。"
  },
  {
    "q": "冬の宇佐・国東半島を満喫するおすすめの1泊2日観光モデルコースは？",
    "a": "1日目は大分空港またはJR宇佐駅・中津駅を出発し、まず全国八幡総本宮「宇佐神宮」へ新春初詣。国宝本殿で開運を祈願し、門前で熱々の宇佐からあげを堪能。午後は豊後高田市の「昭和の町」へ移動し、昭和30年代のノスタルジックな商店街や駄菓子屋を散策。夕方に国宝「富貴寺」を訪れ、隣接する旅庵蕗薹または海岸線のオーシャンビュー宿へチェックイン。名湯で温まり、おおいた豊後牛や豊前海車海老の贅沢会席を堪能。2日目は早朝の海や里山を眺めた後、「熊野磨崖仏」の石段を登って古代の祈りに触れ、「両子寺」の荘厳な仁王像を見学して大分空港や別府方面へ向かう充実のルートがおすすめです。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'ホーム', 'item': 'https://croud-travel.pages.dev' },
          { '@type': 'ListItem', 'position': 2, 'name': '特集一覧', 'item': 'https://croud-travel.pages.dev/features' },
          { '@type': 'ListItem', 'position': 3, 'name': '宇佐神宮初詣・国東六郷満山と豊後牛名宿', 'item': 'https://croud-travel.pages.dev/winter-oita-usa-jingu-kunisaki-hatsumode-bungogyu-seafood-stay' }
        ]
      },
      {
        '@type': 'TouristDestination',
        'name': '宇佐神宮・国宝富貴寺・国東半島',
        'description': "冬の大分・宇佐＆国東半島は、全国4万社を超える八幡宮の総本宮「宇佐神宮」での新春初詣と、九州最古の木造建築・国宝「富貴寺大堂」をはじめとする神仏習合の六郷満山文化を訪ねる神秘の旅舞台。豊前海が育む冬の極上天然車海老や渡り蟹、大分の誇る黒毛和牛の最高峰「おおいた豊後牛」の贅沢なすき焼き、元祖宇佐からあげ。静寂に包まれる石仏群と冬晴れの別府湾・周防灘を望み、温もりの天然温泉に癒やされる厳選名宿5選を徹底解説します。",
        'touristType': ['歴史探訪', '新春初詣', '神仏習合文化', '冬の美食', '温泉保養']
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': "冬（11月〜1月）の宇佐神宮の新春初詣の混雑状況や見どころ、参拝作法は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "宇佐神宮は全国に約44,000社ある八幡宮の総本宮で、欽明天皇32年（571年）に創建されたと伝わる神仏習合発祥の大社です。正月三が日には約40万人の参拝者が訪れます。本殿は八幡造りの国宝建築で、一之御殿（八幡大神・応神天皇）、二之御殿（比売大神）、三之御殿（神功皇后）の順に参拝します。一般的な神社とは異なり、出雲大社と同じ「二礼四拍手一礼」の作法で拝礼するのが特徴です。元旦から3日にかけては国道10号線や駐車場が渋滞するため、早朝（午前7時〜8時台）または夕方16時以降の参拝がスムーズです。御神木の巨木クスノキや、勅使街道に架かる屋根付きの美しい「呉橋」も見どころです。"
            }
          },
          {
            '@type': 'Question',
            'name': "国東半島の「六郷満山（ろくごうまんざん）」文化と、冬に訪れるべき代表寺社は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "国東半島の中央にそびえる両子山（ふたごさん）から放射状に広がる6つの谷筋（郷）に開かれた天台宗寺院群を「六郷満山」と呼びます。奈良時代末期に仁聞（にんもん）菩薩によって開創され、宇佐神宮の八幡信仰と仏教が融合した独特の神仏習合文化が今に息づいています。冬の代表格は、九州最古の木造建築で平安時代後期の阿弥陀堂である国宝「富貴寺大堂（ふきじだいどう）」。冬枯れの木立の中に佇む姿は孤高の美しさを誇ります。さらに高さ8mを超える巨岩に刻まれた日本最大級の「熊野磨崖仏（くまのまがいぶつ）」や、仁王像が有名な「両子寺（ふたごじ）」など、静謐な空気に満ちた聖地巡りが楽しめます。"
            }
          },
          {
            '@type': 'Question',
            'name': "冬の宇佐・国東半島で味わうべき極上グルメ（豊後牛、天然車海老、宇佐からあげ）は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "大分県が全国に誇る黒毛和牛「おおいた豊後牛」は、和牛の品評会で日本一に輝いた血統を引く最高峰ブランド。オレイン酸を豊富に含み、とろけるような口どけと上質な脂の甘みが特徴で、冬は熱々のすき焼きや陶板焼きが絶品です。また豊前海や姫島周辺の海は日本屈指の「車海老」の好漁場であり、冬に甘みと身の締まりが最高潮に達します。塩焼きや天ぷら、踊り食いでその弾力と濃厚な旨みを堪能できます。さらに宇佐市は「からあげ専門店発祥の地」として知られ、ニンニクや生姜を効かせた秘伝のタレに漬け込んだ揚げたての宇佐からあげは、冬のドライブのお供に欠かせないご当地グルメです。"
            }
          },
          {
            '@type': 'Question',
            'name': "冬の国東半島ドライブ時の気候と積雪、車運転の注意点は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "国東半島沿岸部（国東市、豊後高田市、宇佐市）は瀬戸内海式気候に属し、冬でも比較的温暖で積雪することは滅多にありません。日中の気温は8〜12℃前後です。しかし半島中央部の両子山周辺や熊野磨崖仏、富貴寺などの山間部は標高が高く、12月下旬から1月の冷え込み時には路面凍結（アイスバーン）やうっすらとした降雪が見られることがあります。山間部の峠道を走行する場合は、スタッドレスタイヤの装着をおすすめします。東九州自動車道や宇佐別府道路などの高速道が整備されており、大分空港や北九州方面からのアクセスは非常に軽快です。"
            }
          },
          {
            '@type': 'Question',
            'name': "冬の宇佐・国東半島を満喫するおすすめの1泊2日観光モデルコースは？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "1日目は大分空港またはJR宇佐駅・中津駅を出発し、まず全国八幡総本宮「宇佐神宮」へ新春初詣。国宝本殿で開運を祈願し、門前で熱々の宇佐からあげを堪能。午後は豊後高田市の「昭和の町」へ移動し、昭和30年代のノスタルジックな商店街や駄菓子屋を散策。夕方に国宝「富貴寺」を訪れ、隣接する旅庵蕗薹または海岸線のオーシャンビュー宿へチェックイン。名湯で温まり、おおいた豊後牛や豊前海車海老の贅沢会席を堪能。2日目は早朝の海や里山を眺めた後、「熊野磨崖仏」の石段を登って古代の祈りに触れ、「両子寺」の荘厳な仁王像を見学して大分空港や別府方面へ向かう充実のルートがおすすめです。"
            }
          }
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
      <header className="relative bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs sm:text-sm font-medium mb-6">
            <Snowflake className="w-4 h-4 text-emerald-300" />
            11月・12月・1月冬の特選旅｜大分・宇佐＆国東半島
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-6">全国八幡宮総本宮・宇佐神宮新春開運初詣＆国東六郷満山！<br className="hidden sm:inline" /> 豊前海天然車海老と極上豊後牛の名宿5選</h1>
          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-4xl mb-8">
            神と仏がひとつの祈りとして溶け合う神仏習合のふるさと、大分・宇佐と国東半島。全国4万4000社余の八幡宮の頂点「宇佐神宮」での新春開運初詣、平安の美を湛える九州最古の木造建築・国宝「富貴寺大堂」の静謐な冬姿。そして周防灘・豊前海が育む甘美な天然車海老と、最高峰和牛「おおいた豊後牛」の極上すき焼き、元祖宇佐からあげ。豊かな自然と歴史の深淵に触れ、心洗われる名宿をご案内します。
          </p>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-emerald-200">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-400" /> 大分県宇佐市・豊後高田市・国東市</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-emerald-400" /> 見頃期：11月上旬〜1月下旬</span>
            <span className="flex items-center gap-1.5"><Flame className="w-4 h-4 text-emerald-400" /> 総本宮宇佐神宮初詣＆国宝富貴寺</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-emerald-600 pl-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Sacred Culture & Heritage</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              八幡信仰の総本宮と六郷満山の祈り、豊穣の海山がもたらす冬の滋味
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              千三百年の神仏習合の記憶と、極上の豊後牛・車海老が織りなす大分の冬
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              大分県北部に位置する宇佐と国東（くにさき）半島。この地は、日本の精神史において極めて重要な役割を果たしてきました。欽明天皇32年（571年）に創建されたと伝わる「宇佐神宮」は、全国に4万4000社余り存在する八幡宮の総本宮です。奈良の大仏建立を支援し、伊勢神宮に次ぐ第二の宗廟として歴代皇室や幕府から篤く崇敬されてきました。鮮やかな朱塗りの楼門をくぐると、国宝に指定された本殿（八幡造）が厳かに鎮座。宇佐神宮の参拝作法は、出雲大社と同じ「二礼四拍手一礼」という古式を守り伝えており、新春を迎えると約40万人の初詣客が全国から開運と厄除けを祈願して訪れます。
            </p>
            <p>
              そして宇佐神宮の八幡信仰が、国東半島の険しい岩峰群と融合して花開いたのが「六郷満山（ろくごうまんざん）」の仏教文化です。半島中央の両子山（標高721m）から放射状に広がる6つの郷筋に開かれた山岳寺院群は、神と仏が一体となった神仏習合の原風景。冬の澄み渡る寒気の中、樹齢数百年の杉木立に囲まれた国宝「富貴寺大堂」は、平安時代後期の美しい阿弥陀堂建築を残し、堂内の阿弥陀如来坐像とともに見る者を深い静寂へと誘います。さらに岩壁に彫られた日本最大級の「熊野磨崖仏」や、筋骨たくましい石造仁王像が守る「両子寺」など、石仏と巨岩が語りかける歴史の重みは冬ならではの迫真の魅力を持っています。
            </p>
            <p>
              また宇佐・国東の冬は、豊かな食の宝庫でもあります。北を周防灘・豊前海、東を伊予灘に面した国東半島は、プランクトンが豊富な好漁場。冬に旬を迎える「天然車海老」は、きめ細やかな肉質と濃厚な甘みが口いっぱいに広がる極上の海の幸です。さらに大分県が誇る黒毛和牛「おおいた豊後牛」は、きめ細やかなサシと芳醇な旨味が特徴で、冬の寒い夜に味わう熱々のすき焼きや陶板焼きは旅人の至福の贅沢。そして宇佐といえば、日本で初めて専門店が生まれたとされる「からあげ発祥の地」。ニンニクと醤油の効いた香ばしい揚げたてからあげは、散策途中のパワーチャージに欠かせないソウルフードです。
            </p>
          </div>

          {/* 3 Pillar Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">全国八幡宮総本宮の新春初詣</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                4万4000社の頂点に立つ宇佐神宮。国宝本殿での二礼四拍手一礼の開運参拝と、屋根付き木橋「呉橋」の神聖美。
              </p>
            </div>

            <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">国宝富貴寺＆六郷満山石仏巡礼</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                九州最古の木造建築・国宝富貴寺大堂の孤高の冬姿。熊野磨崖仏や両子寺仁王像など神仏習合の息吹を体感。
              </p>
            </div>

            <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">極上豊後牛＆豊前海天然車海老</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                とろける旨味のおおいた豊後牛すき焼き、身の締まった甘美な天然車海老、そして元祖宇佐からあげの黄金トリオ。
              </p>
            </div>
          </div>
        </section>

        {/* Month Guide */}
        <section className="bg-gradient-to-r from-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
          <div className="border-l-4 border-emerald-400 pl-4">
            <span className="text-emerald-300 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Seasonal Calendar</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              11月・12月・1月の見どころカレンダー＆気候・服装ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-md">11月（初冬）</span>
              <h3 className="font-bold text-white text-base">富貴寺のイチョウ落葉と両子寺の紅葉</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                富貴寺境内の大イチョウが黄金色の絨毯を作り出す息をのむ美景。日中は15℃前後で散策に快適ですが、山間部の寺院は夕方から急激に冷え込むためフリースや軽めのダウンが役立ちます。
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-md">12月（仲冬）</span>
              <h3 className="font-bold text-white text-base">六郷満山の静寂と豊前海車海老の旬</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                観光客が落ち着き、石仏や古刹が神聖な静けさを取り戻す季節。周防灘の車海老やワタリガニが甘みを極めます。気温は6〜10℃程度に下がるため、厚手のコートや手袋、歩きやすい防寒ブーツが必須です。
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-rose-500/20 text-rose-300 text-xs font-bold rounded-md">1月（厳冬）</span>
              <h3 className="font-bold text-white text-base">宇佐神宮新春初詣と熱々豊後牛すき焼き</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                新年を祝う熱気あふれる初詣シーズン。冷気で引き締まる境内での祈願後、熱々の豊後牛すき焼きやだんご汁が五臓六腑を温めます。早朝の路面凍結に備え、車で峠を越える場合はスタッドレスタイヤを準備してください。
              </p>
            </div>
          </div>
        </section>

        {/* Spot Highlights Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8">
          <div className="border-l-4 border-emerald-600 pl-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Must-Visit Winter Spots</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬に訪れるべき宇佐＆国東の三大名所と体験ポイント
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-emerald-600" /> 宇佐神宮（八幡総本宮）
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                全国約4万4000社ある八幡宮の総本宮。国宝本殿の一之御殿から三之御殿までを二礼四拍手一礼で参拝。朱塗りの南中楼門、樹齢約800年の大クス、寄藻川に架かる屋根付きの木橋「呉橋」など神聖な見どころが凝縮。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：JR宇佐駅よりバス約10分。東九州道宇佐ICより約15分。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Mountain className="w-5 h-5 text-amber-600" /> 国宝 富貴寺大堂
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                平安時代後期に建立された九州最古の木造建築（国宝）。宇治の平等院鳳凰堂、平泉の中尊寺金色堂と並ぶ日本三阿弥陀堂の一つ。萱葺き屋根と素木造りの簡素な美が、冬の冷たい空気の中に静かに浮かび上がります。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：JR宇佐駅より車で約30分。大分空港より車で約40分。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Building className="w-5 h-5 text-indigo-600" /> 豊後高田「昭和の町」
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                昭和30年代の活気ある商店街を今に蘇らせたノスタルジックタウン。駄菓子屋の博物館「駄菓子屋の夢博物館」や、ボンネットバスの運行、昔懐かしいコロッケや揚げパンの食べ歩きが冬の旅に温かな笑顔を添えます。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：宇佐神宮より車で約15分。無料駐車場完備。
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-l-4 border-emerald-600 pl-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              冬の宇佐＆国東を満喫する厳選名宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              国宝隣接の料理旅館・オーシャンビュー絶景宿・天然温泉・初詣拠点ホテル
            </p>
          </div>

          <div className="space-y-12">
            {hotels.map((h) => (
              <div key={h.id} className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-200/80 hover:shadow-md transition-shadow">
                <div className="flex flex-col">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
                    <img
                      src={h.img}
                      alt={h.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      厳選宿 #{h.id}
                    </div>
                  </div>

                  <div className="w-full p-5 sm:p-7 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                          {h.special}
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span>{h.rating}</span>
                          <span className="text-slate-400 text-xs">({h.reviews}件)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                        {h.name}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {h.story}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs">
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <strong className="text-slate-900 block mb-1 flex items-center gap-1">
                            <Sun className="w-3.5 h-3.5 text-emerald-600" /> 客室・眺望の魅力
                          </strong>
                          <span className="text-slate-600">{h.roomTip}</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <strong className="text-slate-900 block mb-1 flex items-center gap-1">
                            <Utensils className="w-3.5 h-3.5 text-amber-600" /> 冬の美食ポイント
                          </strong>
                          <span className="text-slate-600">{h.gourmetTip}</span>
                        </div>
                      </div>

                      <ul className="space-y-1.5 mb-6 text-xs sm:text-sm text-slate-700">
                        {h.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-slate-500 block">宿泊料金の目安（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-extrabold text-emerald-950">{h.price}</span>
                      </div>

                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-sm shadow hover:from-emerald-700 hover:to-teal-800 transition-all"
                      >
                        <span>楽天トラベルでプランを見る</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Winter Itinerary Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-emerald-600 pl-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の宇佐＆国東を満喫する1泊2日開運・美食巡礼モデルコース
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              八幡総本宮初詣、昭和の町レトロ散策、国宝富貴寺と豊後牛・車海老を味わい尽くす旅日程
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-emerald-600 text-white text-xs rounded-md font-bold">1日目</span>
                八幡総本宮・宇佐神宮新春初詣と昭和の町散策・名宿ディナー
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed">
                <li><strong className="text-slate-900">10:30 JR宇佐駅または中津駅に到着</strong>：レンタカーを借りて「宇佐神宮」へ。南中楼門をくぐり国宝本殿で新春開運祈願。</li>
                <li><strong className="text-slate-900">12:30 門前で元祖宇佐からあげランチ</strong>：揚げたてサクサクの香ばしい宇佐からあげと定食を堪能。</li>
                <li><strong className="text-slate-900">14:00 豊後高田「昭和の町」へ</strong>：昭和の町商店街を散策。ボンネットバスや駄菓子屋博物館でレトロな時間を満喫。</li>
                <li><strong className="text-slate-900">16:00 国宝「富貴寺」へ</strong>：夕暮れの冷気の中、九州最古の木造阿弥陀堂を静かに拝観。</li>
                <li><strong className="text-slate-900">17:30 宿にチェックイン＆冬の滋味ディナー</strong>：温泉で温まった後、おおいた豊後牛の陶板焼きやすき焼き、豊前海天然車海老の贅沢会席を堪能。</li>
              </ol>
            </div>

            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-teal-800 text-white text-xs rounded-md font-bold">2日目</span>
                六郷満山神仏習合の聖地巡礼と周防灘オーシャンビュー
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed">
                <li><strong className="text-slate-900">08:00 宿で朝食</strong>：地元野菜と温かいだんご汁、炊きたてご飯を味わってチェックアウト。</li>
                <li><strong className="text-slate-900">09:30 熊野磨崖仏へ</strong>：鬼が一夜で積んだと伝わる石段を登り、岩肌に刻まれた巨大な大日如来と不動明王を拝観。</li>
                <li><strong className="text-slate-900">11:30 両子寺へ</strong>：国東半島の最高峰・両子山の中腹にある名刹へ。風格ある仁王像と冬の杉並木を参拝。</li>
                <li><strong className="text-slate-900">13:30 国東沿岸部で海鮮ランチ</strong>：周防灘を望む海沿いレストランで、冬魚のお造りや車海老天丼を堪能。</li>
                <li><strong className="text-slate-900">15:30 大分空港またはJR駅へ</strong>：国東名産の原木しいたけや麦焼酎をお土産に購入し帰路へ。</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Access and Winter Driving Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-emerald-600 pl-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Access & Winter Driving</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              宇佐＆国東半島への交通アクセスと冬道ドライブの注意点
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Compass className="w-5 h-5 text-emerald-600" /> 電車・航空便アクセス
              </h3>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li><strong className="text-slate-900">飛行機（大分空港）</strong>：羽田・伊丹等から大分空港へ直行。空港から国東半島各所へはレンタカーで20〜40分と至近。</li>
                <li><strong className="text-slate-900">JR特急ソニック</strong>：博多駅・小倉駅からJR日豊本線特急ソニックで「中津駅」まで約30分（小倉発）、「宇佐駅」まで約40分。</li>
              </ul>
            </div>

            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ThermometerSun className="w-5 h-5 text-amber-600" /> 車・レンタカー＆山間部の冬道注意
              </h3>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li><strong className="text-slate-900">高速道路IC</strong>：東九州自動車道「宇佐IC」または大分空港道路「国東IC」が便利です。</li>
                <li><strong className="text-slate-900">山間部の路面凍結注意</strong>：沿岸部は温暖ですが、両子寺や富貴寺など山間部の谷あいは日陰が多く、12月下旬〜1月早朝は路面凍結のリスクがあります。峠越えドライブにはスタッドレスタイヤ装着が安心です。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-emerald-600 pl-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-2xl font-bold text-slate-900">
              冬の宇佐＆国東旅行 よくある質問（FAQ）
            </h2>
          </div>
          <div className="space-y-6">
            {faqList.map((faq, index) => (
              <div key={index} className="pb-6 border-b border-slate-100 last:border-b-0 last:pb-0">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <span className="text-emerald-600 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link Network */}
        <section className="bg-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-emerald-600" />
            あわせて読みたい！近隣エリアの冬特集記事
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/winter-fukuoka-mojiko-retro-illumination-buzen-oyster-kokuragyu-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-emerald-600 block"
            >
              【門司港レトロ＆小倉】冬の浪漫灯彩と豊前海一粒牡蠣・小倉牛名宿
            </Link>
            <Link
              href="/winter-oita-beppu-kannawa-onsen-yukemuri-bungo-beef-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-emerald-600 block"
            >
              【別府・鉄輪温泉】冬の立ち上る湯煙と地獄蒸し・豊後牛名宿
            </Link>
            <Link
              href="/winter-fukuoka-dazaifu-tenmangu-hatsumode-futsukaichi-beef-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-emerald-600 block"
            >
              【太宰府天満宮＆二日市温泉】飛梅と新春初詣・博多和牛名宿
            </Link>
            <Link
              href="/winter-saga-tara-takezaki-crab-yutoku-inari-ureshino-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-emerald-600 block"
            >
              【佐賀・太良＆祐徳稲荷】冬の竹崎カニと三大稲荷初詣・美肌温泉名宿
            </Link>
            <Link
              href="/winter-kumamoto-kurokawa-onsen-yuakari-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-emerald-600 block"
            >
              【黒川温泉】冬の竹あかり幻想露天風呂とあか牛・入湯手形名宿
            </Link>
            <Link
              href="/features"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 hover:shadow-xs transition-all text-sm font-bold text-emerald-700 block text-center flex items-center justify-center gap-1"
            >
              <span>全国の冬旅特集一覧を見る</span>
              <Compass className="w-4 h-4" />
            </Link>
          
      <HubRelatedPosts currentSlug="winter-oita-usa-jingu-kunisaki-hatsumode-bungogyu-seafood-stay" />
</div>
        </section>
      </main>
    </article>
  );
}
