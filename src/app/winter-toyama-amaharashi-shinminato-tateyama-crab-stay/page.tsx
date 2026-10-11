import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, ThermometerSun, Heart, ShoppingBag, Shield, Mountain, Landmark, Camera, Ship
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月富山：氷見寒ブリ！名宿5選',
  description: '11月から1月、富山湾沿岸（高岡・雨晴・射水新湊・富山市街）は、世界でも稀少な海越しに冠雪した標高3000m級立山連峰が浮かび上がる奇跡の冬絶景と。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '雨晴海岸 立山連峰 冬, 新湊 昼セリ カニ, 氷見 寒ブリ, 富山湾鮨, 雨晴温泉 磯はなび, リバーリトリート雅樂倶, ホテルニューオータニ高岡, 御宿野乃富山, 第一イン新湊, 11月 12月 1月 富山旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-toyama-amaharashi-shinminato-tateyama-crab-stay/"
  },
  openGraph: {
    title: '11・12・1月富山：氷見寒ブリ！名宿5選',
    description: '11月から1月、富山湾沿岸（高岡・雨晴・射水新湊・富山市街）は、世界でも稀少な海越しに冠雪した標高3000m級立山連峰が浮かび上がる奇跡の冬絶景と。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-toyama-amaharashi-shinminato-tateyama-crab-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '雨晴海岸から望む冬の富山湾と冠雪の立山連峰'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月富山：雨晴海岸から望む冠雪立山連峰の奇跡絶景＆新湊昼セリ極上本ズワイガニ・氷見寒ブリ・白えび・富山湾鮨を堪能する名宿5選",
    description: "11月から1月、富山湾沿岸（高岡・雨晴・射水新湊・富山市街）は、世界でも稀少な海越しに冠雪した標高3000m級立山連峰が浮かび上がる奇跡の冬絶景と、全国屈指の極上海鮮が集結する至福の季節を迎えます。冷え込んだ朝に現れる幻想的な「気嵐（けあらし）」、新湊漁港で毎日13時から開催される名物「昼セリ」で紅く染まる本ズワイガニや紅ズワイガニ、11月下旬から脂が極限まで乗る氷見の寒ブリ、冬も甘みが凝縮する白えび、そして職人の技が光る富山湾鮨。富山湾の絶景露天風呂やアートリゾート、名湯と美食に浸る厳選5宿を徹底ガイドします。",
    images: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function ToyamaAmaharashiShinminatoWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "11・12・1月富山：雨晴海岸から望む冠雪立山連峰の奇跡絶景＆新湊昼セリ極上本ズワイガニ・氷見寒ブリ・白えび・富山湾鮨を堪能する名宿5選",
    description: "11月から1月、富山湾沿岸（高岡・雨晴・射水新湊・富山市街）は、世界でも稀少な海越しに冠雪した標高3000m級立山連峰が浮かび上がる奇跡の冬絶景と、全国屈指の極上海鮮が集結する至福の季節を迎えます。冷え込んだ朝に現れる幻想的な「気嵐（けあらし）」、新湊漁港で毎日13時から開催される名物「昼セリ」で紅く染まる本ズワイガニや紅ズワイガニ、11月下旬から脂が極限まで乗る氷見の寒ブリ、冬も甘みが凝縮する白えび、そして職人の技が光る富山湾鮨。富山湾の絶景露天風呂やアートリゾート、名湯と美食に浸る厳選5宿を徹底ガイドします。",
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    datePublished: '',
    dateModified: '',
    author: {
      '@type': 'Organization',
      name: 'クラドトラベル編集部',
      url: 'https://croud-travel.pages.dev'
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.pages.dev/winter-toyama-amaharashi-shinminato-tateyama-crab-stay'
    }
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://croud-travel.pages.dev'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '冬の特集一覧',
        item: 'https://croud-travel.pages.dev/features'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '雨晴海岸・新湊の冬絶景と富山湾海鮮名宿',
        item: 'https://croud-travel.pages.dev/winter-toyama-amaharashi-shinminato-tateyama-crab-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "雨晴海岸から海越しに雪の立山連峰が綺麗に見える時期や時間帯、条件は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "雨晴海岸から富山湾越しに標高3,000m級の立山連峰がくっきりと浮かび上がって見えるベストシーズンは、空気が澄み渡る11月中旬から翌年2月下旬です。特に「冬型の気圧配置が緩んだ移動性高気圧に覆われた晴天の朝（日の出から午前9時頃）。」が最も綺麗に見える確率が高くなります。冬の日本海特有の強風がなく、放射冷却で冷え込んだ朝には、海面から水蒸気が立ち上る「気嵐（けあらし）」と白銀の連峰が重なり合い、世界中を探しても他にほとんど類を見ない息を呑む絶景が広がります。午後は逆光や霞が出やすいため、早朝の訪問を強くおすすめします。"
        }
      },
      {
        '@type': 'Question',
        name: "新湊漁港の「昼セリ」とは何ですか？一般旅行者でも見学や買い物ができますか？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "通常、全国の漁港でのセリは早朝に行われますが、新湊漁港では漁場が港から極めて近い（船で20分〜30分程度）ため、午前中に出港して獲れた魚介をその日の午後13時からセリにかける独特の「昼セリ」が開催されます。特に9月から翌年5月にかけて行われる紅ズワイガニの昼セリでは、床一面に敷き詰められた深紅のカニの絨毯とセリ人の威勢の良い掛け声が大迫力です。隣接する「新湊きっときと市場」の観光インフォメーション窓口から事前予約（有料ガイドツアー等）で見学デッキから見学できるほか、市場内では茹でたてのカニをその場で解体して味わうことができます。"
        }
      },
      {
        '@type': 'Question',
        name: "11月〜1月の富山で絶対に味わうべき旬の冬グルメは何ですか？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "冬の富山湾は「天然の生け簀」と称され、年間を通じて最も魚介の旨味が凝縮する黄金期です。筆頭は11月解禁の本ズワイガニと紅ズワイガニ。特に新湊の昼セリで揚がるものは鮮度が抜群で、甘みたっぷりの身と濃厚なカニ味噌が楽しめます。また11月下旬〜12月に旬を迎える「氷見の寒ブリ」は、脂の乗りが最高潮に達し、刺身はもちろん熱々の「ブリしゃぶ」で食すと極上の味わいです。さらに冬でも透き通るような甘みを持つ「白えび」、富山湾の旬ネタ10貫で構成されるブランド寿司「富山湾鮨」、そして黒醤油のコクが染みる富山ブラックラーメンも必食です。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の富山旅行（雨晴・新湊・高岡）の移動手段やレンタカーの注意点は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "富山市街〜高岡〜雨晴海岸〜新湊エリアは、JR氷見線や万葉線（路面電車・アイトラム）、あいの風とやま鉄道が走っており、公共交通機関だけでも効率よく周遊可能です。特にJR氷見線の車窓から望む冬の富山湾は絶景ルートとして人気があります。一方で、各温泉宿や早朝の雨晴海岸、新湊きっときと市場などを自由に巡るにはレンタカーが便利です。12月〜1月は平野部でも降雪や凍結の可能性があるため、レンタカーを借りる際は必ず「スタッドレスタイヤ（冬用タイヤ）」装着車を指定してください。海沿いは強風による視界不良にも注意が必要です。"
        }
      },
      {
        '@type': 'Question',
        name: "雨晴海岸・新湊周辺のおすすめ冬の観光立ち寄りスポットはどこですか？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "雨晴海岸の「道の駅 雨晴」は展望デッキから立山連峰を一望できる絶好のビュースポットです。高岡市内では、加賀前田家ゆかりの国宝「瑞龍寺（ずいりゅうじ）」の静謐な雪景色や、日本三大仏の一つ「高岡大仏」、土蔵造りの町並みが残る「山町筋（やまちょうすじ）」が見どころです。新湊エリアでは、19世紀の帆船が停泊する「海王丸パーク」や、内川沿いに民家と運河が調和し「日本のベニス」と呼ばれる情緒あふれる川べりの散策、映画のロケ地にもなったノスタルジックな湊町のカフェ巡りがおすすめです。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "雨晴温泉　磯はなび",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108675/108675.jpg",
              rating: 4.28,
              reviews: 1071,
              price: "¥11,000〜",
              access: "あいの風とやま鉄道高岡駅よりJR氷見線に乗換えてJR雨晴駅で下車（無料送迎有／要連絡）",
              special: "富山湾でとれた海の幸と北陸随一を誇る雨晴の絶景をお楽しみください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108675%2F108675.html",
              story: "雨晴海岸を見下ろす高台、海抜約60メートルの絶景地に佇む「雨晴温泉 磯はなび」。館内のパノラマウィンドウや露天風呂からは、青く澄み渡る富山湾と、その向こうに壁のようにそびえる白銀の立山連峰を絵画のように一望できます。冬の冷気の中で立ち上る湯けむりに包まれながら、海から昇る朝陽や茜色に染まる夕暮れのパノラマを眺めるひとときは贅沢の極み。料理は富山湾の海の恵みを惜しみなく使った会席料理。新湊や氷見から直送される冬の寒ブリしゃぶしゃぶや、身がぎっしり詰まった本ズワイガニ、白えびのお造りなど、富山の冬の味覚を心ゆくまで堪能できます。",
              roomTip: "海側和洋室。窓いっぱいに富山湾と立山連峰が広がり、朝には海面から昇る朝日と気嵐の神秘的なグラデーションを客室から鑑賞できます。",
              gourmetTip: "「富山湾冬の味覚尽くし会席」。寒ブリの刺身と熱々のブリしゃぶ、本ズワイガニの甲羅焼き、白えびのかき揚げが並ぶ豪快なコースです。",
              highlights: [
                "雨晴海岸の高台から望む富山湾と白銀立山連峰の絶景インフィニティ露天風呂",
                "新湊直送の本ズワイガニと熱々の寒ブリしゃぶしゃぶ＆白えび尽くし会席",
                "冬の澄んだ朝に現れる幻想的な気嵐と海から昇る朝日の奇跡のコラボレーション"
              ]
            },
            {
              id: 2,
              name: "リバーリトリート雅樂倶",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/17655/17655.jpg",
              rating: 4.79,
              reviews: 210,
              price: "¥26,059〜",
              access: "ＪＲ富山駅よりお車で40分／北陸自動車道・富山ＩＣよりお車で20分／富山空港よりお車で20分／金沢市内よりお車で80分",
              special: "神通峡のほとりに佇むスモールラグジュアリーホテル。唯一無二の贅沢な空間をお樂しみください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17655%2F17655.html",
              story: "神通川の清らかなほとり、雄大な自然美の中に突如現れる現代アートと美食の隠れ家「リバーリトリート雅樂倶」。館内全体が美術館のように洗練され、約300点のアート作品が展示されています。天然温泉「春日の湯」は、肌にしっとりと馴染むナトリウム・塩化物泉。雪景色が広がる神通峡の渓流を眺めながらの湯浴みは、日常の喧騒を完全に忘れさせてくれます。夕食は国内外から食通が訪れるメインダイニングで味わう前衛的地方料理（イノベーティブ）。富山湾の新鮮な寒ブリやズワイガニ、地元の冬野菜、ジビエなどを独創的な感性で昇華させた料理は、一皿ごとに深い感動を与えてくれます。",
              roomTip: "リバービュー・スイートルーム。それぞれ異なる建築家・デザイナーが手掛けた個性あふれる空間で、静かに流れる川面と雪の渓谷美を独占できます。",
              gourmetTip: "「冬のイノベーティブ・ガストロノミーディナー。」。富山湾の紅ズワイガニや寒ブリを低温調理や発酵の技法で仕立てた芸術的なフルコースです。",
              highlights: [
                "神通峡の雪景色に抱かれた美術館のような現代アート空間＆極上ガストロノミー",
                "富山の旬魚やジビエを独創的に仕立てた前衛的ディナー＆自家製ペアリング",
                "肌に潤いを与える塩化物泉春日の湯＆静寂の中で心身をリセットする滞在"
              ]
            },
            {
              id: 3,
              name: "ホテルニューオータニ高岡",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5573/5573.jpg",
              rating: 4.32,
              reviews: 2041,
              price: "¥4,900〜",
              access: "■徒歩５分（JR高岡駅から）※富山空港からJR高岡駅まで車で４０分■車-小杉ICから20分　高岡ICから15分",
              special: "高岡市唯一の都市型ホテル。駅より徒歩5分。ホテル周辺は飲食店も充実。コンビニも近くに有り。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5573%2F5573.html",
              story: "万葉の歴史が息づく高岡市の中心部に位置し、雨晴海岸や新湊漁港への周遊拠点として抜群の利便性を誇る「ホテルニューオータニ高岡」。高層階の客室やレストランからは、雪化粧した高岡市街と遠くに連なる立山連峰の雄大な稜線を望むことができます。館内には日本料理「都万麻（つまま）」をはじめ本格的なレストランが揃い、職人が目の前で握る富山湾鮨や、氷見牛のステーキ、冬の白えび料理を優雅に堪能。高品質なベッドと行き届いたホテルサービスで、観光にもビジネスにも上質な寛ぎを提供してくれます。",
              roomTip: "立山連峰側スーペリアツイン。天候に恵まれた冬の澄んだ朝には、朝焼けにピンク色に染まる立山の山並みを一望できる特等席です。",
              gourmetTip: "「富山湾鮨と氷見牛会席」。富山湾の朝獲れネタで握る極上寿司と、きめ細やかなサシが入った氷見牛の陶板焼きを同時に味わえます。",
              highlights: [
                "高岡駅近くの好立地＆高層階から市街と立山連峰のパノラマを望む洗練の客室",
                "日本料理都万麻で味わう職人握りの富山湾鮨＆とろける氷見牛ステーキ",
                "雨晴海岸や国宝瑞龍寺へのアクセス抜群＆快適なシティリゾート設備"
              ]
            },
            {
              id: 4,
              name: "天然温泉　剱の湯　御宿　野乃富山（ドーミーイン・御宿野乃　ホテルズグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/153267/153267.jpg",
              rating: 4.49,
              reviews: 2268,
              price: "¥5,650〜",
              access: "富山駅より路面電車環状線「大手モール」下車徒歩2分・北陸自動車道『富山ＩＣ』出口より15分",
              special: "全館畳敷きの和風ホテル！天然温泉檜風呂付客室もご用意☆ご当地逸品料理「海鮮丼」",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153267%2F153267.html",
              story: "富山市中心部、総曲輪（そうがわ）の好立地に佇む「天然温泉 剱の湯 御宿 野乃富山」。全館畳敷きの和の温もりあふれる館内は、エントランスで靴を脱いで素足でリラックスできる心地よさが魅力です。最上階の大浴場「剱の湯」には、茶褐色の自家源泉天然温泉が引かれ、高温サウナや水風呂、半露天風呂を完備。湯上がりの無料アイスや夜鳴きそばのサービスも大好評。朝食は全国でもトップクラスの評価を誇る豪華バイキング。富山名物の白えびご飯、紅ズワイガニのほぐし身、イクラのかけ放題海鮮丼、名物ます寿司など、朝から富山グルメを心ゆくまで堪能できます。",
              roomTip: "檜風呂付き和洋室。お部屋にいながら木の香りに癒やされ、プライベートな空間でゆったりと温泉気分を満喫できます。",
              gourmetTip: "「豪華朝食バイキング・海鮮ごちそう丼」。いくら、甘海老、ズワイガニを白米の上に好きなだけ盛り付けられる至福のオリジナル丼です。",
              highlights: [
                "全館畳敷き＆茶褐色の天然温泉剱の湯・いくら盛り放題の豪華海鮮朝食バイキング",
                "朝食で味わう白えびご飯・紅ズワイガニほぐし身・ます寿司・夜鳴きそば",
                "最上階サウナ付き大浴場＆素足で過ごす心地よい和風ビジネスホテルの最高峰"
              ]
            },
            {
              id: 5,
              name: "第一イン新湊",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/184683/184683.jpg",
              rating: 4.58,
              reviews: 139,
              price: "¥4,400〜",
              access: "万葉線「第一イン新湊　クロスベイ前」駅より徒歩3分",
              special: "全室シモンズベッド導入！＆シングル17.6㎡～とゆったり♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184683%2F184683.html",
              story: "新湊漁港や「新湊きっときと市場」、海王丸パークまで車で約3分という絶好のロケーションに建つ「第一イン新湊」。毎日13時から開催される名物「新湊昼セリ」の見学や、港町・内川（日本のベニス）の情緒ある運河散策の拠点としてこれ以上ない利便性を誇ります。客室からは新湊大橋や富山湾、遠くに立山連峰を望むパノラマビュー。館内の和食レストランでは、漁港直送の新鮮な魚介を使ったカニ尽くし会席や白えび御膳が提供され、獲れたてならではの弾力と甘みをリーズナブルに楽しむことができます。",
              roomTip: "ベイビューツインルーム。夜にはライトアップされた美しい新湊大橋と富山湾の夜景を窓越しに静かに眺めることができます。",
              gourmetTip: "「新湊港直送・冬の紅ズワイガニ一杯丸ごと付き会席。」。茹でたて熱々のカニを豪快に味わい、濃厚なカニ味噌に地酒を注ぐ甲羅酒も絶品です。",
              highlights: [
                "新湊漁港昼セリ会場へ車で3分＆富山湾と新湊大橋を望む絶好のロケーション",
                "新湊港直送の茹でたて紅ズワイガニ一杯丸ごと付き会席＆新鮮な寒ブリ造り",
                "日本のベニス内川散策や新湊きっときと市場での買い物に便利な拠点宿"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "雨晴海岸から海越しに雪の立山連峰が綺麗に見える時期や時間帯、条件は？",
    "a": "雨晴海岸から富山湾越しに標高3,000m級の立山連峰がくっきりと浮かび上がって見えるベストシーズンは、空気が澄み渡る11月中旬から翌年2月下旬です。特に「冬型の気圧配置が緩んだ移動性高気圧に覆われた晴天の朝（日の出から午前9時頃）。」が最も綺麗に見える確率が高くなります。冬の日本海特有の強風がなく、放射冷却で冷え込んだ朝には、海面から水蒸気が立ち上る「気嵐（けあらし）」と白銀の連峰が重なり合い、世界中を探しても他にほとんど類を見ない息を呑む絶景が広がります。午後は逆光や霞が出やすいため、早朝の訪問を強くおすすめします。"
  },
  {
    "q": "新湊漁港の「昼セリ」とは何ですか？一般旅行者でも見学や買い物ができますか？",
    "a": "通常、全国の漁港でのセリは早朝に行われますが、新湊漁港では漁場が港から極めて近い（船で20分〜30分程度）ため、午前中に出港して獲れた魚介をその日の午後13時からセリにかける独特の「昼セリ」が開催されます。特に9月から翌年5月にかけて行われる紅ズワイガニの昼セリでは、床一面に敷き詰められた深紅のカニの絨毯とセリ人の威勢の良い掛け声が大迫力です。隣接する「新湊きっときと市場」の観光インフォメーション窓口から事前予約（有料ガイドツアー等）で見学デッキから見学できるほか、市場内では茹でたてのカニをその場で解体して味わうことができます。"
  },
  {
    "q": "11月〜1月の富山で絶対に味わうべき旬の冬グルメは何ですか？",
    "a": "冬の富山湾は「天然の生け簀」と称され、年間を通じて最も魚介の旨味が凝縮する黄金期です。筆頭は11月解禁の本ズワイガニと紅ズワイガニ。特に新湊の昼セリで揚がるものは鮮度が抜群で、甘みたっぷりの身と濃厚なカニ味噌が楽しめます。また11月下旬〜12月に旬を迎える「氷見の寒ブリ」は、脂の乗りが最高潮に達し、刺身はもちろん熱々の「ブリしゃぶ」で食すと極上の味わいです。さらに冬でも透き通るような甘みを持つ「白えび」、富山湾の旬ネタ10貫で構成されるブランド寿司「富山湾鮨」、そして黒醤油のコクが染みる富山ブラックラーメンも必食です。"
  },
  {
    "q": "冬の富山旅行（雨晴・新湊・高岡）の移動手段やレンタカーの注意点は？",
    "a": "富山市街〜高岡〜雨晴海岸〜新湊エリアは、JR氷見線や万葉線（路面電車・アイトラム）、あいの風とやま鉄道が走っており、公共交通機関だけでも効率よく周遊可能です。特にJR氷見線の車窓から望む冬の富山湾は絶景ルートとして人気があります。一方で、各温泉宿や早朝の雨晴海岸、新湊きっときと市場などを自由に巡るにはレンタカーが便利です。12月〜1月は平野部でも降雪や凍結の可能性があるため、レンタカーを借りる際は必ず「スタッドレスタイヤ（冬用タイヤ）」装着車を指定してください。海沿いは強風による視界不良にも注意が必要です。"
  },
  {
    "q": "雨晴海岸・新湊周辺のおすすめ冬の観光立ち寄りスポットはどこですか？",
    "a": "雨晴海岸の「道の駅 雨晴」は展望デッキから立山連峰を一望できる絶好のビュースポットです。高岡市内では、加賀前田家ゆかりの国宝「瑞龍寺（ずいりゅうじ）」の静謐な雪景色や、日本三大仏の一つ「高岡大仏」、土蔵造りの町並みが残る「山町筋（やまちょうすじ）」が見どころです。新湊エリアでは、19世紀の帆船が停泊する「海王丸パーク」や、内川沿いに民家と運河が調和し「日本のベニス」と呼ばれる情緒あふれる川べりの散策、映画のロケ地にもなったノスタルジックな湊町のカフェ巡りがおすすめです。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-cyan-100 selection:text-cyan-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-stone-900 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の雨晴海岸と立山連峰" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-cyan-800/80 backdrop-blur-md text-cyan-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-cyan-400/30">
            <Snowflake className="w-4 h-4 text-cyan-200" />
            11月・12月・1月 冬の日本海・奇跡の富山湾絶景＆美食特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">「11・12・1月富山」雨晴海岸から望む冠雪立山連峰の奇跡絶景＆新湊昼セリ極上本ズワイガニ・氷見寒ブリ・白えび・富山湾鮨を堪能する名宿5選</h1>
          <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            空気が澄み渡る初冬から厳冬期、富山湾の青い海原の向こうに標高3,000m級の白銀に輝く立山連峰が海上に浮かび上がる世界屈指の絶景「雨晴海岸」。早朝の気嵐、新湊漁港名物の「昼セリ」で紅く染まる本ズワイガニ、脂の乗り切った寒ブリ、富山湾鮨など、冬の富山が誇る最高峰の贅沢を満喫できる極上宿を厳選しました。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-cyan-400" /> 旬の時期：11月中旬〜1月下旬</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /> エリア：富山県高岡市・射水市新湊・富山市</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-cyan-400" /> 旬グルメ：本ズワイガニ・寒ブリ・白えび・富山湾鮨</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Introduction</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              海上に浮かぶ白銀の立山連峰と、富山湾の冬の赤い宝石「新湊本ズワイガニ」
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              日本海側が白銀の静寂に包まれる11月から1月にかけて、富山湾沿岸は世界中の写真家や旅人を魅了してやまない特別な輝きを放ちます。その象徴が、高岡市の「雨晴海岸（あまはらしかいがん）」から望む光景です。波静かな青い海越しの海上に、標高3,000メートル級の北アルプス・立山連峰が白銀の雪煙を上げてそびえ立つ景観は、イタリアのベネチアやチリのプエルト・モントなど世界でもごく限られた場所でしか見られない稀有な自然現象です。
            </p>
            <p>
              特に放射冷却によって大気と海水の温度差が広がる初冬の早朝、海面から湯気が立ち上るように霧が立ち込める「気嵐（けあらし）」が発生。岩礁の「義経岩」や松の小島を白く包み込みながら、朝陽に照らされた立山連峰がピンク色から白銀へと色を変えていく様は、神話の世界を目の当たりにしたかのような深い感動をもたらします。
            </p>
            <p>
              そして冬の富山旅のもう一つの主役が、「天然の生け簀」と称される富山湾の圧倒的な海の幸です。11月には本ズワイガニ漁が解禁。射水市の新湊漁港では、近海漁の利点を活かして毎日13時から「昼セリ」が開催され、競り落とされたばかりの茹でたて熱々のカニをその場で味わう贅沢が叶います。さらに、丸々と太り脂が霜降りのように入った氷見の寒ブリ、透き通るような甘みを持つ白えび、そして職人が富山湾の朝獲れ魚介を丹精込めて握る「富山湾鮨」など、この季節だけの至極の美食が待っています。
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-cyan-50/50 rounded-2xl p-4 border border-cyan-100 space-y-2">
              <div className="flex items-center gap-2 text-cyan-900 font-bold text-sm">
                <Mountain className="w-4 h-4 text-cyan-700" />
                冠雪立山連峰の絶景
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                雨晴海岸や高台の展望風呂から、海上に浮かぶ白銀の3,000m峰と幻想的な早朝の気嵐を一望。
              </p>
            </div>
            <div className="bg-cyan-50/50 rounded-2xl p-4 border border-cyan-100 space-y-2">
              <div className="flex items-center gap-2 text-cyan-900 font-bold text-sm">
                <Ship className="w-4 h-4 text-cyan-700" />
                新湊名物「昼セリ」の活気
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                毎日13時に開催される全国でも珍しい昼セリ。紅く染まるカニの絨毯と茹でたての極上カニを堪能。
              </p>
            </div>
            <div className="bg-cyan-50/50 rounded-2xl p-4 border border-cyan-100 space-y-2">
              <div className="flex items-center gap-2 text-cyan-900 font-bold text-sm">
                <Utensils className="w-4 h-4 text-cyan-700" />
                寒ブリ・白えび・富山湾鮨
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                脂の乗り切った寒ブリしゃぶしゃぶ、白えびのかき揚げ、朝獲れネタの富山湾鮨を老舗宿で味わう。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-cyan-950 font-bold text-sm tracking-wide bg-cyan-100/60 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4 text-cyan-800" />
              楽天トラベル公式連携・厳選宿
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 mt-2">
              雨晴・新湊・富山の冬絶景と富山湾の海の幸を堪能する名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              ※表示料金は楽天トラベルAPIより取得した参考最低価格です。時期やプランにより変動します。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200 hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {/* Hotel Image */}
                <div className="w-full relative aspect-[16/9] sm:aspect-[21/9]">
                  <img 
                    src={hotel.img} 
                    alt={hotel.name}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    厳選宿 {hotel.id}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-stone-900 text-xs font-bold px-3 py-1 rounded-lg shadow-xs flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    {hotel.rating} <span className="text-stone-400 font-normal">({hotel.reviews}件)</span>
                  </div>
                </div>

                {/* Hotel Details */}
                <div className="p-6 md:p-8 w-full flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-cyan-700" />
                        {hotel.access}
                      </span>
                      <span className="text-cyan-800 font-extrabold text-base sm:text-lg">
                        {hotel.price} <span className="text-xs font-normal text-stone-500">（税込目安）</span>
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-2xl font-bold text-stone-900 leading-snug">
                      {hotel.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {hotel.story}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 bg-stone-50 rounded-2xl p-4 border border-stone-100">
                      {hotel.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Room & Gourmet tips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="bg-cyan-50/40 p-3 rounded-xl border border-cyan-100/60">
                        <span className="font-bold text-cyan-900 block mb-1">【客室の選び方】</span>
                        <p className="text-stone-600 leading-relaxed">{hotel.roomTip}</p>
                      </div>
                      <div className="bg-amber-50/40 p-3 rounded-xl border border-amber-100/60">
                        <span className="font-bold text-amber-900 block mb-1">【冬の味覚おすすめ】</span>
                        <p className="text-stone-600 leading-relaxed">{hotel.gourmetTip}</p>
                      </div>
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="pt-2">
                    <a 
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-700 to-cyan-900 hover:from-cyan-800 hover:to-cyan-950 text-white font-bold py-3.5 px-6 rounded-2xl shadow-sm hover:shadow transition text-sm tracking-wide"
                    >
                      <span>楽天トラベルで空室・冬限定プランを見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2-Day Winter Model Course Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Route</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の雨晴・新湊・富山 2泊3日王道モデルコース
            </h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-stone-700">
            {/* Day 1 */}
            <div className="relative pl-6 border-l-2 border-cyan-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-cyan-700" />
              <h3 className="font-bold text-stone-900 text-base">
                1日目：高岡の歴史探訪と新湊「昼セリ」のカニ堪能
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                新高岡駅または富山空港を出発し、加賀前田家ゆかりの国宝・高岡瑞龍寺を拝観。静謐な雪の回廊を歩いた後、射水市の新湊漁港へ。13時からの名物「昼セリ」を見学し、セリ落とされたばかりの茹でたて紅ズワイガニを「新湊きっときと市場」で味わいます。午後は「日本のベニス」内川沿いのレトロな運河を散策し、夕暮れには雨晴温泉へチェックイン。露天風呂から富山湾と立山連峰を眺め、夜は寒ブリしゃぶしゃぶ会席に舌鼓。
              </p>
            </div>

            {/* Day 2 */}
            <div className="relative pl-6 border-l-2 border-cyan-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-cyan-700" />
              <h3 className="font-bold text-stone-900 text-base">
                2日目：早朝の雨晴海岸「気嵐」と白銀の立山連峰＆富山アートステイ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                夜明け前、雨晴海岸へ。澄み切った氷点下の空気の中、富山湾から立ち上る幻想的な気嵐と、朝陽に染まる立山連峰の奇跡の絶景を心ゆくまで撮影。宿で朝食をとった後、海沿いを走るローカル線・JR氷見線に乗車。午後は富山市街へ移動し、富山市ガラス美術館を見学。夜は神通峡に佇むアートホテル「リバーリトリート雅樂倶」または富山駅前の天然温泉宿へ。冬の富山湾の旬魚を独創的に仕立てたディナーを堪能します。
              </p>
            </div>

            {/* Day 3 */}
            <div className="relative pl-6 border-l-2 border-cyan-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-cyan-700" />
              <h3 className="font-bold text-stone-900 text-base">
                3日目：富山市街の職人握り「富山湾鮨」と白えび土産めぐり
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                宿の温泉で朝の雪見風呂を楽しんだ後、富山市中心部へ。富山城址公園を散策し、昼食は老舗の寿司処で職人が握る名物「富山湾鮨」を堪能。寒ブリ、白えび、紅ズワイガニ、バイ貝など10貫の至極の握りを味わいます。富山駅前の「とやマルシェ」で白えび煎餅やます寿司をお土産に購入し、北陸新幹線で帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Local Winter Practical Tips */}
        <section className="bg-cyan-900 text-white rounded-3xl p-6 sm:p-10 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs sm:text-sm tracking-wider uppercase">
            <ThermometerSun className="w-4 h-4 text-cyan-300" />
            現地リアルアドバイス
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">
            冬の富山湾岸を快適に旅するための装備と路面情報
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-cyan-100 leading-relaxed pt-2">
            <div className="space-y-2 bg-cyan-950/40 p-4 rounded-2xl border border-cyan-800/60">
              <span className="font-bold text-white block">【防寒具と足元対策】</span>
              <p>
                富山湾沿岸は海風が強く、実際の気温（日中2〜6℃、早朝氷点下）以上に体感温度が低くなります。防風性の高い厚手のロングダウンやマフラー、手袋が必須です。特に雨晴海岸の岩場や砂浜を散策する際は、滑りにくく防水性の高いスノーブーツやトレッキングシューズを着用してください。
              </p>
            </div>
            <div className="space-y-2 bg-cyan-950/40 p-4 rounded-2xl border border-cyan-800/60">
              <span className="font-bold text-white block">【レンタカーと路面凍結】</span>
              <p>
                12月中旬から1月は平野部でも急な降雪や夜間の路面凍結が発生します。レンタカーを利用する場合は必ずスタッドレスタイヤ装着車を手配し、急発進・急ブレーキを避け、車間距離を通常の2倍以上確保して安全運転を心がけてください。主要幹線道路は消雪パイプが整備されていますが、水跳ねに注意が必要です。
              </p>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-cyan-950 font-bold text-sm tracking-wide bg-cyan-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-cyan-800" />
              富山・雨晴・新湊の冬名物＆おみやげ手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              旅の記憶を鮮やかに彩る富山湾の海の幸と高岡クラフト名品
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-700" />
                新湊港直送・茹でたて紅ズワイガニの地方発送と白えび寿し
              </h3>
              <p>
                新湊きっときと市場内の各鮮魚店では、当日の昼セリで競り落とされたばかりの紅ズワイガニや本ズワイガニを大釜で塩茹でし、発泡スチロールと氷で詰めて当日クール便発送が可能です。帰宅後に自宅で家族や友人と味わう濃厚なカニ味噌とジューシーな身肉は至高の贅沢。また、白えびの上品な甘みを酢飯と合わせた押し寿司「白えび寿し」や、香ばしい「白えび十割煎餅」も外せない手土産です。
              </p>
            </div>
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-700" />
                高岡鋳物の伝統美「能作」の純錫酒器と銘菓「とこなつ」
              </h3>
              <p>
                400年の鋳物文化を受け継ぐ高岡市。世界的ブランド「能作（のうさく）」の純度100%の錫（すず）製ぐい呑みやタンブラーは、注いだ日本酒の雑味を抜き、まろやかな味わいに変えると評判で、冬の富山の地酒（立山、勝駒、満寿泉）を楽しむ最高の相棒になります。和菓子では、大伴家持の歌に因んだ大野屋の「とこなつ」や、木型で作られる優美な「高岡ラムネ」が旅情あふれる手土産として人気を集めています。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-cyan-950 font-bold text-sm tracking-wide bg-cyan-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-cyan-800" />
              富山湾の神秘・ディープダイブ解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ富山湾は「天然の生け簀」と呼ばれ、冬に奇跡の絶景を生むのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-stone-100 shadow-2xs">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Waves className="w-4 h-4 text-cyan-700" />
                すり鉢状の海底渓谷「藍瓶（あいがめ）」が育む極上の魚介
              </h3>
              <p>
                富山湾は海岸からわずか数キロ進むだけで水深1,000メートル近くまで急激に落ち込む独特のすり鉢状の地形をしています。沿岸の浅瀬から海底深く刻まれた海底谷「藍瓶」には、標高3,000mの立山連峰から雪解け水がミネラルを豊富に含んで注ぎ込み、冷たい「日本海固有水（海洋深層水）」と対馬暖流が交錯。日本海に生息する約800種のうち約500種の魚介が生息する奇跡の海域となり、漁場と港が極めて近いため、抜群の鮮度を保ったまま市場や食卓へ届けられます。
              </p>
            </div>

            <div className="space-y-2 bg-white p-5 rounded-2xl border border-stone-100 shadow-2xs">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Mountain className="w-4 h-4 text-cyan-700" />
                標高差4,000メートルの地球規模のダイナミズム
              </h3>
              <p>
                富山湾の最深部（水深約1,000m）から、海上にそびえる立山連峰の主峰・雄山（標高3,003m）や剱岳（標高2,999m）までの直線距離はわずか40〜50キロメートル。高低差にして実に4,000メートルという世界屈指の険しい地形が、海と山を密接に結びつけています。冬の冷え込みによって海水温と大気温の差が15℃以上になると、海水から立ち上る水蒸気が冷やされて白い霧となる「気嵐（けあらし）」が発生し、海上に雪山が浮かんでいるかのような幻想風景が完成します。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-cyan-950 font-bold text-sm tracking-wide bg-cyan-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-cyan-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬・厳冬期の富山・雨晴・新湊旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-cyan-700 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
          <div className="flex items-center gap-2 text-cyan-950 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-cyan-800" />
            あわせて読みたい北陸の冬温泉＆海鮮特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-toyama-himi-kanburi-luxury-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-cyan-700 font-bold block text-[10px]">富山・氷見温泉郷</span>
              <p className="font-bold text-stone-800 line-clamp-2">冬の王者ひみ寒ぶり宣言と富山湾越しの立山連峰・極上寒ブリ尽くしの宿</p>
            </Link>
            <Link 
              href="/winter-toyama-unazuki-onsen-kurobe-snow-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-cyan-700 font-bold block text-[10px]">富山・宇奈月温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">黒部峡谷の雪景色と美肌の無色透明温泉・富山湾の冬海鮮を味わう峡谷宿</p>
            </Link>
            <Link 
              href="/winter-ishikawa-kanazawa-yuwaku-onsen-koubako-crab-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-cyan-700 font-bold block text-[10px]">石川・金沢湯涌温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">兼六園の雪吊りと奥金沢の静寂湯・冬限定の香箱ガニ＆加能ガニを味わう名宿</p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-toyama-amaharashi-shinminato-tateyama-crab-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
