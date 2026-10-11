import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Snowflake, Flame, Sun, Waves, Sparkles, Building, Landmark
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月福岡：鐘崎天然とらふぐと極上宗像牛！名宿5選',
  description: '冬の福岡・宗像と岡垣は、世界文化遺産「神宿る島」宗像・沖ノ島と関連遺産群の中枢「宗像大社辺津宮」が新春開運祈願で賑わい。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '宗像 ホテル, 宗像大社 初詣, 鐘崎 とらふぐ, 宗像牛, メルキュール福岡宗像, ぶどうの樹 杜の七種, 宮地嶽神社, 11月 12月 1月 福岡 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-fukuoka-munakata-taisha-hatsumode-torafugu-munakatagyu-stay/"
  },
  openGraph: {
    title: '11・12・1月福岡：鐘崎天然とらふぐと極上宗像牛！名宿5選',
    description: '冬の福岡・宗像と岡垣は、世界文化遺産「神宿る島」宗像・沖ノ島と関連遺産群の中枢「宗像大社辺津宮」が新春開運祈願で賑わい。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-fukuoka-munakata-taisha-hatsumode-torafugu-munakatagyu-stay',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=630', width: 1200, height: 630, alt: '宗像大社と玄界灘の冬景色' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月福岡：世界遺産・宗像大社新春開運初詣＆玄界灘冬絶景！鐘崎天然とらふぐと極上宗像牛を堪能する名宿5選",
    description: "冬の福岡・宗像と岡垣は、世界文化遺産「神宿る島」宗像・沖ノ島と関連遺産群の中枢「宗像大社辺津宮」が新春開運祈願で賑わい、荒波寄せる玄界灘の海辺に白砂青松の「さつき松原」が広がる神話と美味の郷。11月から1月にかけての冬期は、全国屈指の水揚げを誇る鐘崎漁港の極上「天然とらふぐ」や旬の寒ブリ・ヤリイカ、赤身と霜降りのバランスが秀逸なブランド黒毛和牛「宗像牛」の贅沢な味わい。宮地嶽神社「光の道」にもほど近い玄界灘沿いの厳選名宿5選を徹底解説します。"
  }
};

export default function FukuokaMunakataPage() {
  const hotels = [
            {
              id: 1,
              name: "メルキュール福岡宗像リゾート＆スパ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9217/9217.jpg",
              rating: 4.19,
              reviews: 3213,
              price: "¥5,822〜",
              access: "福岡空港よりお車で約60分　古賀ICより車で約40分　JR東郷駅より無料送迎バス運行中　席数に限りがございます（要予約）",
              special: "福岡・北九州から約60分！地元素材を使ったビュッフェと温泉が人気のオールインクルーシブホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9217%2F9217.html",
              story: "玄界灘を望むさつき松原のほとりに佇む「メルキュール福岡宗像リゾート＆スパ（旧：ロイヤルホテル 宗像）。」。世界遺産・宗像大社辺津宮まで車で約10分という好立地にあり、新春初詣や玄界灘観光の拠点として絶大な人気を誇ります。宿の大きな魅力は、松原の清々しい空気を感じながら湯浴みを楽しめる天然温泉「玄海さつき温泉」の露天岩風呂。敷地内から湧く弱アルカリ性の柔らかな湯が、冬の冷えた身体を芯からポカポカに温めてくれます。夕食は旬の玄界灘の海の幸や地元食材をふんだんに取り入れた豪華ビュッフェで、アルコールを含むオールインクルーシブスタイルで贅沢なリゾート時間を満喫できます。",
              roomTip: "オーシャンビューデラックスツイン。バルコニーから玄界灘の海原と松林を望む開放的な客室。洗練されたモダンインテリアでゆったり休息。",
              gourmetTip: "「冬のオールインクルーシブ・ビュッフェ」。玄界灘の新鮮なお造りや郷土鍋、地元ブランド肉のグリルを多彩なワイン・地酒と共に。",
              highlights: [
                "宗像大社まで車10分・玄海さつき温泉露天岩風呂・オールインクルーシブビュッフェ",
                "玄界灘の新鮮刺身や地元食材ディナービュッフェ・アルコール飲み放題付きの優雅な夕宵",
                "さつき松原の自然に抱かれたリゾート空間・ファミリーからシニアまで安心の充実設備"
              ]
            },
            {
              id: 2,
              name: "ぶどうの樹　杜の七種",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/146916/146916.jpg",
              rating: 4.27,
              reviews: 72,
              price: "¥15,290〜",
              access: "海老津駅より西鉄バスに乗車。「手野」バス停下車し、徒歩約５分",
              special: "ぶどうの樹リゾートを楽しむ杜の離れ宿。ラグジュアリーな空間で大切なひとときを。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F146916%2F146916.html",
              story: "岡垣町の豊かな自然に囲まれた食と癒やしの複合リゾート「ぶどうの樹」の敷地内に佇む「ぶどうの樹 杜の七種（もりのななくさ）」。全室が離れ形式のラグジュアリーな隠れ宿で、冬の森の静寂に包まれた極上のプライベートステイを叶えてくれます。客室にはゆったりとしたジャグジーバスやウッドテラスが整い、暖かな薪ストーブの炎が冬の情緒を盛り上げます。夕食はすぐ近くの鐘崎漁港から直送される最高峰「天然とらふぐ」のフルコースや、自家ワイナリーの特製ワイン、岡垣の豊かな大自然が育んだ極上和牛のステーキなど、食のテーマパークならではの感動的な美食体験を堪能できます。",
              roomTip: "離れコテージスイート。高い天井と木の温もりに満ちた優美な空間。専用ジャグジーとテラスで冬の澄んだ星空を眺める至福の時間。",
              gourmetTip: "「鐘崎産天然とらふぐ極上会席」。透き通るようなふぐ刺し（てっさ）に、コラーゲンたっぷりのふぐちり鍋、香ばしいヒレ酒の贅沢。",
              highlights: [
                "ぶどうの樹敷地内・全室離れコテージ・ジャグジー＆暖炉完備・鐘崎天然とらふぐコース",
                "鐘崎港直送の天然とらふぐフルコース＆自家製ワイン・岡垣黒毛和牛ステーキ",
                "森の静寂に癒やされる隠れ家ステイ・自家製パンやスイーツが並ぶ朝食"
              ]
            },
            {
              id: 3,
              name: "ぶどうの樹ふくつ海岸通り　光の海ホテル＆リゾート　波の音（旧：グランピング福岡）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/165802/165802.jpg",
              rating: 4.59,
              reviews: 39,
              price: "¥9,900〜",
              access: "福間駅よりお車にて約５分",
              special: "福岡市内から30分の複合ビーチリゾートぶどうの樹。ビーチに直結した絶景サンセットコンセプトコテージ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165802%2F165802.html",
              story: "福津海岸（かがみの海）の目の前に広がるオーシャンフロントリゾート「ぶどうの樹ふくつ海岸通り 光の海ホテル＆リゾート 波の音。」。国宝の宝庫であり「光の道」で全国に知られる宮地嶽神社への初詣アクセスも車で約10分と軽快です。冬の玄界灘の雄大な波音をBGMに、目の前に広がる水平線に沈む冬の夕陽を眺められるのが最大の魅力。客室は海辺のグランピングスタイルやオーシャンビューの快適なホテルタイプ。冬期は屋根付きの暖かなデッキで楽しむ玄界灘の冬海鮮BBQや海鮮ブイヤベース鍋、本格鮨コースが選べ、海辺の開放感とぬくもりある滞在を両立しています。",
              roomTip: "オーシャンフロントルーム。大きな窓一面に広がる玄界灘のパノラマビュー。夕暮れ時の茜色に染まるマジックアワーは感動の美しさ。",
              gourmetTip: "「玄界灘冬魚介の特製鍋ディナー」。冬の荒波で脂が乗った旬魚と海老、地野菜を特製出汁で炊き上げる海辺の温もりディナー。",
              highlights: [
                "福津海岸オーシャンフロント・宮地嶽神社初詣至近・波音のプライベートリゾート",
                "冬の海鮮BBQや海鮮ブイヤベース鍋・テラスで味わう熱々の魚介グルメ",
                "水平線に沈む冬の夕陽パノラマ・開放感あふれるビーチフロントステイ"
              ]
            },
            {
              id: 4,
              name: "ＨＯＴＥＬ　ＧＲＥＧＥＳ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/201700/201700.jpg",
              rating: 4.50,
              reviews: 120,
              price: "¥14,820〜",
              access: "九州道 / 古賀IC・若宮ICより約30分　JR東郷駅よりタクシーで約15分",
              special: "博多より45分、 美しい水平線を背景に壮大な自然美が息づくデザイナーズホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F201700%2F201700.html",
              story: "宗像市神湊の岬の突端、玄界灘を一望する白亜のデザイナーズホテル「ＨＯＴＥＬ ＧＲＥＧＥＳ（オテルグレージュ）。」。世界的デザイナーのカッシーナ・イクスシーが全館のインテリアをプロデュースし、客室のバルコニーからは180度の大パノラマで広がる冬の紺碧の海と大島を望むことができます。ミシュランガイドにも掲載されたメインダイニングでは、鐘崎港の天然とらふぐやアワビ、ブランド牛「宗像牛」を贅沢に使用した前衛的なフレンチを提供。冬の澄み切った海風と静寂、波のきらめきに包まれながら、大人の記念日やご褒美旅にふさわしい至高のリゾートステイを体感できます。",
              roomTip: "カッシーナスイートルーム。全室オーシャンビューの洗練された純白のインテリア。波音を聞きながら浸かるジャグジーバス。",
              gourmetTip: "「宗像フレンチ特選ディナー」。鐘崎天然ふぐのエクラと宗像牛フィレ肉のロティ。地元テロワールを昇華させた最高峰のフランス料理。",
              highlights: [
                "カッシーナプロデュース全室オーシャンビュー・ミシュラン星シェフ監修フレンチ・白亜のリゾート",
                "鐘崎産天然ふぐと宗像牛フィレのモダンフレンチ・記念日にふさわしい美食ディナー",
                "180度パノラマの玄界灘ビュー・非日常の洗練されたデザイナーズ空間"
              ]
            },
            {
              id: 5,
              name: "ＨＯＴＥＬ　ＡＺ　福岡宗像店",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108888/108888.jpg",
              rating: 3.94,
              reviews: 1154,
              price: "¥5,370〜",
              access: "◆古賀ＩＣ・若宮ＩＣからお車で１５分◆　◆ＪＲ東郷駅日の里口からお車で５分◆　◆天神バスセンターからバスで６０分◆　　",
              special: "国道3号線沿い。無料平面駐車場完備！館内にはファミレス「Joyfull」。コンビニ徒歩約5分！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108888%2F108888.html",
              story: "国道3号線沿いに位置し、宗像大社辺津宮や宮地嶽神社への新春初詣ドライブに抜群のアクセスの良さを誇る「ＨＯＴＥＬ ＡＺ 福岡宗像店」。無料の平面駐車場を多数完備し、チェックインもスムーズで機能的なロードサイドホテルです。清潔感のある客室には無料Wi-Fi、個別エアコン、液晶テレビ、ユニットバスが整い、リーズナブルな一律価格で安心の宿泊を提供。館内にはバイキングレストランがあり、無料の朝食バイキングで元気に出発できます。近隣には地元で愛される玄界灘の海鮮居酒屋やうどんの名店が点在し、気兼ねない冬のロードトリップを力強くサポートします。",
              roomTip: "スタンダードシングル・ツイン。シンプルで清潔な機能美を追求した客室。静かな眠りをサポートする快適ベッド。",
              gourmetTip: "「宗像名物グルメ探訪」。近隣の名店で味わう玄界灘の旬魚海鮮丼や、甘めの出汁が染みる博多うどん、宗像牛のホルモン鉄板焼き。",
              highlights: [
                "国道3号線沿い無料駐車場完備・宗像大社新春初詣への軽快アクセス・無料朝食バイキング",
                "周辺の海鮮料理店で味わう玄界灘の旬寒ブリ丼・名物イカ活き造り・もつ鍋",
                "リーズナブルな均一料金・ロードトリップに便利な機能的客室と快適ベッド"
              ]
            }
  ];

  const faqList = [
  {
    "q": "世界遺産「宗像大社」の歴史と冬（11月〜1月）の新春初詣の見どころは？",
    "a": "宗像大社は日本神話に登場する天照大神の三女神（田心姫神・湍津姫神・市杵島姫神）を祀る全国約6,200の宗像神社・厳島神社の総本宮です。「沖津宮（沖ノ島）」「中津宮（大島）」「辺津宮（田島）」の三宮から成り、2017年に「『神宿る島』宗像・沖ノ島と関連遺産群」としてユネスコ世界文化遺産に登録されました。本土にある「辺津宮」は交通安全・航海安全・開運厄除の神として絶大な崇敬を集め、正月三が日には九州一円から約60万人もの初詣客が訪れます。本殿・拝殿は国の重要文化財。境内にある「神宝館」には、沖ノ島から出土した国宝約8万点が収蔵・展示されており、古代祭祀の息吹を間近に体感できます。"
  },
  {
    "q": "冬の玄界灘が誇る極上グルメ「鐘崎天然とらふぐ」と「宗像牛」の特徴は？",
    "a": "宗像市の「鐘崎（かねざき）漁港」は、古くから海女発祥の地として知られ、福岡県内でも屈指のトラフグの水揚げ量を誇る名港です。玄界灘の荒波と早い潮流で育った「天然とらふぐ」は、身が引き締まり、噛みしめるほどに上品で力強い甘みと旨みが口中に広がります。薄造り（てっさ）の美しい歯ごたえ、プリプリの身と皮が入ったふぐちり鍋、香ばしいヒレ酒は冬の最高峰の贅沢です。また「宗像牛」は、地元・宗像の澄んだ空気とおから等の厳選飼料で丹精込めて育てられたブランド牛。赤身の豊かな風味と適度なサシの甘みが調和し、すき焼きやステーキでさっぱりと美味しくいただけます。"
  },
  {
    "q": "冬の「宮地嶽神社（光の道）」と宗像大社を合わせた初詣モデルコースは？",
    "a": "宗像大社辺津宮から車で南へ約15分の福津市に鎮座する「宮地嶽神社」は、開運商売繁盛の神社として知られ、直径2.6m・重さ3トンの「日本一の大注連縄」で有名です。毎年2月と10月には参道から玄界灘へ夕陽が一直線に沈む「光の道」で世界的な話題となりましたが、冬の晴れた日にも参道の石段最上段から望む玄界灘の景色は圧巻です。初詣では、まず宗像大社で交通安全と国家安泰・家内安全を祈願し、続いて宮地嶽神社で大注連縄と奥の宮八社を巡る開運祈願を行うのが福岡・玄海エリアの最強開運ルートです。"
  },
  {
    "q": "「玄海さつき温泉」の泉質や特徴、冬の海辺リゾートの魅力は？",
    "a": "玄海さつき温泉は、宗像のさつき松原に湧出する天然温泉です。泉質は弱アルカリ性単純温泉で、刺激が少なく肌に優しい柔らかな湯ざわりが特徴。効能は神経痛、筋肉痛、冷え性、疲労回復など。冬の日本海特有の凛とした海風を感じながら、松の緑を望む露天風呂に浸かると、身体の芯から温まり旅の疲れが一気に吹き飛びます。海岸線には国指定名勝の「さつき松原」が約5kmにわたって連なり、冬晴れの松林散策や海辺のドライブは爽快そのものです。"
  },
  {
    "q": "冬の宗像・岡垣エリアの気候、風の強さ、アクセス方法は？",
    "a": "玄界灘に面する宗像・岡垣エリアは、11月の平均気温は約13℃で過ごしやすいですが、12月〜1月は玄界灘からの北西の季節風が強く吹き付け、平均気温は約6〜8℃、体感温度はさらに低くなります。積雪は稀ですが、海沿いは防風対策が必須のため、風を通さないダウンコートやフード付きアウター、手袋、マフラーを用意しましょう。アクセスは福岡市内（博多・天神）からJR鹿児島本線の快速で東郷駅または赤間駅まで約30分、駅から車やバスで約10〜15分。車の場合は九州自動車道・若宮ICまたは古賀ICから約25分と、福岡都市圏からのアクセスも極めて良好です。"
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
          { '@type': 'ListItem', 'position': 3, 'name': '宗像大社初詣と鐘崎天然とらふぐ・宗像牛名宿', 'item': 'https://croud-travel.pages.dev/winter-fukuoka-munakata-taisha-hatsumode-torafugu-munakatagyu-stay' }
        ]
      },
      {
        '@type': 'TouristDestination',
        'name': '世界遺産宗像大社辺津宮・さつき松原・玄界灘',
        'description': "冬の福岡・宗像と岡垣は、世界文化遺産「神宿る島」宗像・沖ノ島と関連遺産群の中枢「宗像大社辺津宮」が新春開運祈願で賑わい、荒波寄せる玄界灘の海辺に白砂青松の「さつき松原」が広がる神話と美味の郷。11月から1月にかけての冬期は、全国屈指の水揚げを誇る鐘崎漁港の極上「天然とらふぐ」や旬の寒ブリ・ヤリイカ、赤身と霜降りのバランスが秀逸なブランド黒毛和牛「宗像牛」の贅沢な味わい。宮地嶽神社「光の道」にもほど近い玄界灘沿いの厳選名宿5選を徹底解説します。",
        'touristType': ['世界遺産探訪', '新春開運初詣', '冬の味覚探訪', '海岸景観', '温泉リゾート']
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': "世界遺産「宗像大社」の歴史と冬（11月〜1月）の新春初詣の見どころは？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "宗像大社は日本神話に登場する天照大神の三女神（田心姫神・湍津姫神・市杵島姫神）を祀る全国約6,200の宗像神社・厳島神社の総本宮です。「沖津宮（沖ノ島）」「中津宮（大島）」「辺津宮（田島）」の三宮から成り、2017年に「『神宿る島』宗像・沖ノ島と関連遺産群」としてユネスコ世界文化遺産に登録されました。本土にある「辺津宮」は交通安全・航海安全・開運厄除の神として絶大な崇敬を集め、正月三が日には九州一円から約60万人もの初詣客が訪れます。本殿・拝殿は国の重要文化財。境内にある「神宝館」には、沖ノ島から出土した国宝約8万点が収蔵・展示されており、古代祭祀の息吹を間近に体感できます。"
            }
          },
          {
            '@type': 'Question',
            'name': "冬の玄界灘が誇る極上グルメ「鐘崎天然とらふぐ」と「宗像牛」の特徴は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "宗像市の「鐘崎（かねざき）漁港」は、古くから海女発祥の地として知られ、福岡県内でも屈指のトラフグの水揚げ量を誇る名港です。玄界灘の荒波と早い潮流で育った「天然とらふぐ」は、身が引き締まり、噛みしめるほどに上品で力強い甘みと旨みが口中に広がります。薄造り（てっさ）の美しい歯ごたえ、プリプリの身と皮が入ったふぐちり鍋、香ばしいヒレ酒は冬の最高峰の贅沢です。また「宗像牛」は、地元・宗像の澄んだ空気とおから等の厳選飼料で丹精込めて育てられたブランド牛。赤身の豊かな風味と適度なサシの甘みが調和し、すき焼きやステーキでさっぱりと美味しくいただけます。"
            }
          },
          {
            '@type': 'Question',
            'name': "冬の「宮地嶽神社（光の道）」と宗像大社を合わせた初詣モデルコースは？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "宗像大社辺津宮から車で南へ約15分の福津市に鎮座する「宮地嶽神社」は、開運商売繁盛の神社として知られ、直径2.6m・重さ3トンの「日本一の大注連縄」で有名です。毎年2月と10月には参道から玄界灘へ夕陽が一直線に沈む「光の道」で世界的な話題となりましたが、冬の晴れた日にも参道の石段最上段から望む玄界灘の景色は圧巻です。初詣では、まず宗像大社で交通安全と国家安泰・家内安全を祈願し、続いて宮地嶽神社で大注連縄と奥の宮八社を巡る開運祈願を行うのが福岡・玄海エリアの最強開運ルートです。"
            }
          },
          {
            '@type': 'Question',
            'name': "「玄海さつき温泉」の泉質や特徴、冬の海辺リゾートの魅力は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "玄海さつき温泉は、宗像のさつき松原に湧出する天然温泉です。泉質は弱アルカリ性単純温泉で、刺激が少なく肌に優しい柔らかな湯ざわりが特徴。効能は神経痛、筋肉痛、冷え性、疲労回復など。冬の日本海特有の凛とした海風を感じながら、松の緑を望む露天風呂に浸かると、身体の芯から温まり旅の疲れが一気に吹き飛びます。海岸線には国指定名勝の「さつき松原」が約5kmにわたって連なり、冬晴れの松林散策や海辺のドライブは爽快そのものです。"
            }
          },
          {
            '@type': 'Question',
            'name': "冬の宗像・岡垣エリアの気候、風の強さ、アクセス方法は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "玄界灘に面する宗像・岡垣エリアは、11月の平均気温は約13℃で過ごしやすいですが、12月〜1月は玄界灘からの北西の季節風が強く吹き付け、平均気温は約6〜8℃、体感温度はさらに低くなります。積雪は稀ですが、海沿いは防風対策が必須のため、風を通さないダウンコートやフード付きアウター、手袋、マフラーを用意しましょう。アクセスは福岡市内（博多・天神）からJR鹿児島本線の快速で東郷駅または赤間駅まで約30分、駅から車やバスで約10〜15分。車の場合は九州自動車道・若宮ICまたは古賀ICから約25分と、福岡都市圏からのアクセスも極めて良好です。"
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
      <header className="relative bg-gradient-to-br from-stone-950 via-blue-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-medium mb-6">
            <Snowflake className="w-4 h-4 text-blue-300" />
            11月・12月・1月冬の特選旅｜福岡・宗像＆岡垣
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-6">世界遺産・宗像大社新春開運初詣＆玄界灘冬絶景！<br className="hidden sm:inline" /> 鐘崎天然とらふぐと極上宗像牛を堪能する名宿5選</h1>
          <p className="text-base sm:text-lg text-stone-200/90 leading-relaxed max-w-4xl mb-8">
            日本神話の三女神が鎮まる世界文化遺産・宗像大社と、荒波打ち寄せる冬の玄界灘。11月から1月にかけての冬期は、全国から参拝者が集う新春開運祈願で聖域が厳かな賑わいを見せ、白砂青松のさつき松原には冬の清々しい風が吹き抜けます。そして福岡屈指の水揚げを誇る鐘崎港の極上「天然とらふぐ」、濃厚な旨みを蓄えた「宗像牛」、旬の寒ブリ。宮地嶽神社「光の道」にもほど近い玄界灘沿いで、神話の祈りと至高の美味に浸る厳選宿をご案内します。
          </p>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-blue-400" /> 福岡県宗像市・遠賀郡岡垣町</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-blue-400" /> 探訪期：11月上旬〜1月下旬</span>
            <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-blue-400" /> 世界遺産初詣＆鐘崎天然とらふぐ</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <span className="text-blue-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Atmosphere & Tradition</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              神宿る島の祈りと玄界灘の冬の恵み、古代と現代が交差する響灘の宿場
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              世界遺産・宗像三女神への新春初詣と、冬の荒波が育む天然ふぐ・宗像牛の贅
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              福岡市と北九州市の中間に位置し、北を荒波の玄界灘・響灘に面する宗像（むなかた）と岡垣。この地は古代より大陸との海上交易の要衝として栄え、天照大神の御子神である三女神を祀る「宗像大社」が鎮座する聖地です。2017年に世界文化遺産に登録された「神宿る島」宗像・沖ノ島と関連遺産群の中心である「宗像大社辺津宮」は、交通安全の最高神として、また新春の開運厄除や商売繁盛を願う場所として、正月三が日には約60万人もの参拝者で賑わいます。澄み渡る冬の朝、木々に囲まれた神聖な境内を歩き、国の重要文化財である本殿・拝殿に柏手を打てば、凛とした冷気とともに心身が洗われるような清々しさに包まれます。
            </p>
            <p>
              宗像大社から車を走らせれば、玄界灘沿いに約5kmにわたって黒松が続く国指定名勝「さつき松原」が広がります。冬の強い季節風に耐える松並木と、白波が砕け散る玄界灘の風景は、雄大で力強い冬の日本の原風景。さらに少し足を伸ばせば、巨大な注連縄と「光の道」で名高い福津市の「宮地嶽神社」があり、宗像大社と合わせた新春の「両社参り」は、福岡の冬を代表する開運ゴールデンルートとして親しまれています。
            </p>
            <p>
              そして冬の宗像旅行の最大の醍醐味は、冬の荒波がもたらす最高峰の海の幸です。宗像市の「鐘崎（かねざき）漁港」は、福岡県屈指のトラフグの水揚げ基地。水温が下がる11月から1月にかけて、玄界灘の激しい潮流で鍛えられた「天然とらふぐ」は極上の身締まりを見せます。職人の技で薄く引かれた美しい「てっさ」は、噛みしめるほどに凝縮された旨みと上品な甘みが広がり、プリプリの身と皮が入った熱々の「ふぐちり鍋」、香ばしく焼いたヒレ酒は冬の極楽そのもの。さらに宗像の大自然の中で丹念に肥育された「宗像牛」の極上ステーキや、玄海さつき温泉の温浴が合わさり、記憶に残る極上の冬旅が完成します。
            </p>
            <p>
              冬晴れの海沿いには、水平線に沈むドラマチックな夕陽が広がり、波音とともに味わう極上フレンチや地酒が旅情を高めます。歴史深い古代のロマンと、現代の洗練されたリゾート空間が調和する宗像・岡垣は、日常を離れた贅沢な冬のリフレッシュを叶えてくれます。
            </p>
          </div>

          {/* 3 Pillar Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">世界遺産・宗像大社の新春初詣</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                日本神話の三女神を祀る総本宮。重文本殿での開運・交通安全祈願と、国宝8万点を誇る神宝館の古代祭祀探訪。
              </p>
            </div>

            <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">玄界灘の冬絶景＆さつき松原</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                荒波砕ける冬の玄界灘と白砂青松。宮地嶽神社の大注連縄参拝や水平線に沈む冬夕陽のオーシャンビュー。
              </p>
            </div>

            <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">鐘崎天然とらふぐ＆極上宗像牛</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                本場鐘崎港直送の天然とらふぐフルコースと、赤身と霜降りが調和する宗像牛。玄海さつき温泉の温もり。
              </p>
            </div>
          </div>
        </section>

        {/* Month Guide */}
        <section className="bg-gradient-to-r from-stone-900 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
          <div className="border-l-4 border-blue-400 pl-4">
            <span className="text-blue-300 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Seasonal Calendar</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              11月・12月・1月の見どころカレンダー＆気候・服装ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between border-b border-white/20 pb-2">
                <span className="font-bold text-blue-300 text-base">11月（初冬・ふぐ漁本格化）</span>
                <span className="text-xs text-stone-300">平均気温 13.5℃</span>
              </div>
              <p className="text-stone-200 text-xs sm:text-sm leading-relaxed">
                鐘崎港のとらふぐ漁が本格化し、寒ブリやヤリイカなど冬の海鮮が一斉に旬を迎えます。宗像大社境内の紅葉が美しく、秋晴れの穏やかな海辺ドライブが快適な季節。
              </p>
              <div className="text-xs text-blue-200">
                おすすめ服装：トレンチコート、ウールジャケット、スカーフ、歩きやすい靴
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between border-b border-white/20 pb-2">
                <span className="font-bold text-blue-300 text-base">12月（寒波・荒波と夕陽）</span>
                <span className="text-xs text-stone-300">平均気温 8.2℃</span>
              </div>
              <p className="text-stone-200 text-xs sm:text-sm leading-relaxed">
                玄界灘からの北西風が強まり、冬の日本海らしい迫力ある白波が広がります。空気が澄んで夕暮れ時の水平線が美しく染まり、温泉と熱々のふぐちり鍋が極上の美味に。
              </p>
              <div className="text-xs text-blue-200">
                おすすめ服装：防風性のあるダウンジャケット、マフラー、手袋、風対策の帽子
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between border-b border-white/20 pb-2">
                <span className="font-bold text-blue-300 text-base">1月（新春初詣・祈願祭）</span>
                <span className="text-xs text-stone-300">平均気温 5.9℃</span>
              </div>
              <p className="text-stone-200 text-xs sm:text-sm leading-relaxed">
                正月三が日は宗像大社・宮地嶽神社が県内外からの初詣客で最大の熱気に包まれます。寒風が吹き抜ける海辺ですが、新春の清々しい祈りと豪華な冬会席で心身が整います。
              </p>
              <div className="text-xs text-blue-200">
                おすすめ服装：防風ロングダウン、保温インナー、マフラー、手袋、カイロ
              </div>
            </div>
          </div>
        </section>

        {/* Must-Visit Winter Spots Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8">
          <div className="border-l-4 border-blue-600 pl-4">
            <span className="text-blue-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Must-Visit Winter Spots</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬に訪れるべき宗像・岡垣の三大名所と体験ポイント
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Landmark className="w-5 h-5 text-blue-600" /> 宗像大社（辺津宮＆神宝館）
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                世界文化遺産の中心。日本神話の三女神を祀る総本宮で、国の重要文化財である本殿・拝殿が荘厳に佇みます。神宝館には沖ノ島から出土した国宝約8万点が収蔵・展示され、古代祭祀の息吹を間近に感じられます。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：JR東郷駅より西鉄バスで約12分。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Waves className="w-5 h-5 text-blue-600" /> さつき松原＆波津海岸
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                玄界灘沿いに約5kmにわたって広がる白砂青松の名勝。冬の荒波と力強い黒松並木が織りなす景観は圧巻。隣接する岡垣町の波津海岸では冬のサーフィンや海辺のウォーキング、夕暮れのマジックアワーを楽しめます。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：宗像大社より車で約5〜10分。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Building className="w-5 h-5 text-blue-600" /> 宮地嶽神社（日本一大注連縄）
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                開運商売繁盛で全国に名高い古社。直径2.6m・重さ3トンの日本一の大注連縄が拝殿に掲げられ、参道の石段最上段から望む玄界灘の冬景色は息を呑む絶景。「光の道」の舞台としても世界的に有名です。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：JR福間駅よりバス約5分。宗像大社より車約15分。
              </div>
            </div>
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <span className="text-blue-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の宗像・岡垣を満喫する1泊2日王道モデルコース
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-blue-800 block text-sm">【1日目】世界遺産宗像大社参拝と玄界灘の夕陽・鐘崎とらふぐディナー</span>
              <p className="leading-relaxed">
                博多駅からJR快速で約30分の東郷駅に到着。レンタカーまたはバスで世界遺産・宗像大社辺津宮へ。重文本殿で新春開運祈願を行い、神宝館で国宝の数々を拝観。昼食は鐘崎港周辺で旬の寒ブリや海鮮丼を堪能。午後はさつき松原沿いを爽快にドライブし、海辺のリゾートホテルへチェックイン。玄海さつき温泉で温まり、夕食には鐘崎直送の極上天然とらふぐフルコースや宗像牛のステーキを味わいます。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-blue-800 block text-sm">【2日目】宮地嶽神社「光の道」参拝と福津海岸・お土産巡り</span>
              <p className="leading-relaxed">
                海を眺めながら優雅な朝食をいただいた後、福津市の宮地嶽神社へ。日本一の大注連縄を見上げ、参道石段から玄界灘を見下ろす絶景パノラマを満喫。奥の宮八社を巡る開運スタンプラリーを楽しんだ後は、福津海岸のカフェで温かいコーヒーを一服。道の駅むなかたで新鮮な海の幸や宗像牛の加工品、地元銘菓を購入し、JR鹿児島本線で博多方面へ帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-l-4 border-blue-600 pl-4">
            <span className="text-blue-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Curated Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              冬の宗像・岡垣を満喫する厳選名宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              玄海さつき温泉リゾートから全室離れコテージ・白亜のデザイナーズホテルまで
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                {/* Hotel Image */}
                <div className="md:w-5/12 relative min-h-[260px] md:min-h-[320px] bg-slate-100">
                  <img 
                    src={hotel.img} 
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-blue-950/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    厳選名宿 #{hotel.id}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{hotel.rating}</span>
                    <span className="text-slate-400 font-normal">({hotel.reviews}件)</span>
                  </div>
                </div>

                {/* Hotel Info */}
                <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-100 pb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                        {hotel.name}
                      </h3>
                      <span className="text-sm sm:text-base font-bold text-blue-800">
                        {hotel.price}
                      </span>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {hotel.story}
                    </p>

                    <div className="space-y-2 pt-1 text-xs sm:text-sm">
                      <div className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <div><strong className="text-slate-900">客室の魅力：</strong>{hotel.roomTip}</div>
                      </div>
                      <div className="flex items-start gap-2 text-slate-700">
                        <Utensils className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <div><strong className="text-slate-900">冬の美食：</strong>{hotel.gourmetTip}</div>
                      </div>
                      <div className="flex items-start gap-2 text-slate-500">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <div><strong className="text-slate-700">交通：</strong>{hotel.access}</div>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-1.5">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">こだわりポイント</span>
                      <ul className="text-xs text-slate-600 space-y-1">
                        {hotel.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-xs transition-colors duration-200"
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

        {/* Deep FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <span className="text-blue-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の宗像・岡垣旅行 よくある質問とアドバイス
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              現地を熟知した専門視点から冬の旅をサポートする5つの疑問に回答
            </p>
          </div>

          <div className="space-y-6">
            {faqList.map((faq, idx) => (
              <div key={idx} className="border-b border-slate-100 pb-5 last:border-b-0 last:pb-0 space-y-2">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">Q</span>
                  {faq.q}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links */}
        <section className="bg-slate-100/80 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6">
          <div className="border-l-4 border-slate-600 pl-4">
            <span className="text-slate-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Guides</span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              九州・西日本の冬旅＆関連する冬の厳選特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-fukuoka-dazaifu-tenmangu-hatsumode-futsukaichi-beef-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-blue-700 mb-1">太宰府天満宮初詣と二日市温泉</div>
              <div className="text-slate-500 text-xs">学問の神様新春祈願と名湯二日市温泉・博多和牛の美食宿</div>
            </Link>
            <Link 
              href="/winter-fukuoka-mojiko-retro-illumination-buzen-oyster-kokuragyu-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-blue-700 mb-1">門司港レトロ冬イルミ＆豊前海一粒牡蠣</div>
              <div className="text-slate-500 text-xs">関門海峡の夜景と焼きカレー・小倉牛ステーキの名宿特集</div>
            </Link>
            <Link 
              href="/winter-oita-usa-jingu-kunisaki-hatsumode-bungogyu-seafood-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-blue-700 mb-1">宇佐神宮新春初詣＆国東六郷満山</div>
              <div className="text-slate-500 text-xs">全国八幡総本宮の初詣と豊前海車海老・おおいた豊後牛</div>
            </Link>
            <Link 
              href="/winter-saga-karatsu-onsen-yobuko-ika-sagagyu-genkai-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-blue-700 mb-1">唐津温泉・呼子イカと佐賀牛</div>
              <div className="text-slate-500 text-xs">虹の松原と冬の玄界灘絶景・透明な呼子活イカと佐賀牛会席</div>
            </Link>
            <Link 
              href="/winter-yamaguchi-shimonoseki-kawatana-onsen-torafugu-kawarasoba-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-blue-700 mb-1">下関・川棚温泉と本場とらふぐ・瓦そば</div>
              <div className="text-slate-500 text-xs">本場南風泊港のとらふぐ会席と名物瓦そばの温泉宿特集</div>
            </Link>
            <Link 
              href="/features" 
              className="p-4 rounded-2xl bg-blue-950 text-white hover:bg-stone-950 transition-all block flex flex-col justify-center items-center text-center font-bold"
            >
              <span>全国の冬特集一覧を見る →</span>
              <span className="text-blue-200 text-xs font-normal mt-1">11・12・1月の厳選記事を多数掲載</span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-fukuoka-munakata-taisha-hatsumode-torafugu-munakatagyu-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
