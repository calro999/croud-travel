import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Sun, Sunset, Waves, Fish, Ship, Landmark, Building, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月神奈川】冬の三浦半島・城ヶ島30万本の水仙まつりと富士山絶景・名物三崎まぐろ尽くし＆朝獲れ地魚を味わう三浦名宿5選",
  description: "11月から1月、三浦半島最南端の城ヶ島や三浦海岸は、冬の澄み渡る青空の下で相模湾越しに純白の富士山が鮮やかに浮かび上がる絶景の季節を迎えます。城ヶ島公園では約30万株の八重咲水仙が甘い香りを漂わせる「水仙まつり」が開催され、三崎漁港では脂が乗り切った天然本まぐろや金目鯛、朝獲れの地魚が水揚げされます。地下深くから湧き出す天然温泉や展望風呂で温まり、極上の三崎まぐろ料理と三浦大根を堪能できる厳選名宿5選と冬のドライブモデルコースをご案内します。",
  keywords: '三浦半島 冬 旅行, 城ヶ島 水仙まつり, 三崎まぐろ 宿, マホロバマインズ三浦, ふふ 城ヶ島 海風のしらべ, 三浦半島の旅宿 三崎宿, 鮪のわらやき屋宿, 城ヶ島 港屋, 馬の背洞門 富士山, 三浦大根, みさきまぐろきっぷ, 11月 12月 1月 神奈川旅行',
  alternates: {
    canonical: 'https://croud-travel.com/winter-kanagawa-miura-misaki-maguro-suisen-fuji-stay'
  },
  openGraph: {
    title: "【11・12・1月神奈川】冬の三浦半島・城ヶ島30万本の水仙まつりと富士山絶景・名物三崎まぐろ尽くし＆朝獲れ地魚を味わう三浦名宿5選",
    description: "11月から1月、三浦半島最南端の城ヶ島や三浦海岸は、冬の澄み渡る青空の下で相模湾越しに純白の富士山が鮮やかに浮かび上がる絶景の季節を迎えます。城ヶ島公園では約30万株の八重咲水仙が甘い香りを漂わせる「水仙まつり」が開催され、三崎漁港では脂が乗り切った天然本まぐろや金目鯛、朝獲れの地魚が水揚げされます。地下深くから湧き出す天然温泉や展望風呂で温まり、極上の三崎まぐろ料理と三浦大根を堪能できる厳選名宿5選と冬のドライブモデルコースをご案内します。",
    url: 'https://croud-travel.com/winter-kanagawa-miura-misaki-maguro-suisen-fuji-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の三浦半島城ヶ島と相模湾越しの富士山夕景'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月神奈川】冬の三浦半島・城ヶ島30万本の水仙まつりと富士山絶景・名物三崎まぐろ尽くし＆朝獲れ地魚を味わう三浦名宿5選",
    description: "11月から1月、三浦半島最南端の城ヶ島や三浦海岸は、冬の澄み渡る青空の下で相模湾越しに純白の富士山が鮮やかに浮かび上がる絶景の季節を迎えます。城ヶ島公園では約30万株の八重咲水仙が甘い香りを漂わせる「水仙まつり」が開催され、三崎漁港では脂が乗り切った天然本まぐろや金目鯛、朝獲れの地魚が水揚げされます。地下深くから湧き出す天然温泉や展望風呂で温まり、極上の三崎まぐろ料理と三浦大根を堪能できる厳選名宿5選と冬のドライブモデルコースをご案内します。",
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function KanagawaMiuraMisakiWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【11・12・1月神奈川】冬の三浦半島・城ヶ島30万本の水仙まつりと富士山絶景・名物三崎まぐろ尽くし＆朝獲れ地魚を味わう三浦名宿5選",
    description: "11月から1月、三浦半島最南端の城ヶ島や三浦海岸は、冬の澄み渡る青空の下で相模湾越しに純白の富士山が鮮やかに浮かび上がる絶景の季節を迎えます。城ヶ島公園では約30万株の八重咲水仙が甘い香りを漂わせる「水仙まつり」が開催され、三崎漁港では脂が乗り切った天然本まぐろや金目鯛、朝獲れの地魚が水揚げされます。地下深くから湧き出す天然温泉や展望風呂で温まり、極上の三崎まぐろ料理と三浦大根を堪能できる厳選名宿5選と冬のドライブモデルコースをご案内します。",
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    datePublished: '2026-10-02',
    dateModified: '2026-10-02',
    author: {
      '@type': 'Organization',
      name: 'クラドトラベル編集部',
      url: 'https://croud-travel.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.com/winter-kanagawa-miura-misaki-maguro-suisen-fuji-stay'
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
        item: 'https://croud-travel.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '冬の特集一覧',
        item: 'https://croud-travel.com/features'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '三浦半島・城ヶ島＆三崎まぐろ特集',
        item: 'https://croud-travel.com/winter-kanagawa-miura-misaki-maguro-suisen-fuji-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "冬（11月・12月・1月）の三浦半島・城ヶ島「水仙まつり」の見頃と特徴は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "城ヶ島公園で開催される「水仙まつり」は、例年1月中旬から2月中旬にかけて見頃を迎えます。約30万株の八重咲水仙が園内一面に白と黄色の可憐な花を咲かせ、冬の海風に乗って甘く清々しい香りを漂わせます。11月下旬〜12月は水仙の蕾が膨らみ始めるとともに、空気が澄み切って相模湾越しに雪を冠した富士山が最も鮮やかに見えるシーズン。公園展望台からは富士山と水仙の共演という、冬の神奈川随一の絶景パノラマを堪能できます。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の三崎港で味わう「三崎まぐろ」が格別に美味しい理由とおすすめ部位は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "三崎港は、世界中の大海原で操業する遠洋延縄（はえなわ）まぐろ漁船の日本屈指の母港です。マイナス60度の超低温冷凍コンテナで鮮度を保ったまま運ばれる天然メバチマグロや本マグロは、冬に身の脂が乗り、旨味が極大化します。定番の赤身や中トロはもちろん、地元でしか味わえない希少部位（頭肉、カマトロ、ホホ肉、尾の身）のステーキや煮付け、名物「まぐろの兜焼き」など、まぐろのすべてを味わい尽くせるのが三崎の醍醐味です。"
        }
      },
      {
        '@type': 'Question',
        name: "城ヶ島の名所「馬の背洞門」や冬の絶景富士山ビューポイントはどこですか？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "城ヶ島を代表する自然のモニュメント「馬の背洞門（うまのせどうもん）」は、長い年月をかけて波浪や風雨に侵食されてできた天然の海蝕洞門です。冬の晴れた日には、洞門の岩の向こう側に青い海と空が広がり、壮大な造形美を見せてくれます。また、城ヶ島灯台周辺や西山展望台、城ヶ島公園の安房崎展望台からは、相模湾越しに夕日に染まる富士山の壮大なシルエットを望むことができ、夕暮れ時の16時半〜17時頃がベストタイムです。"
        }
      },
      {
        '@type': 'Question',
        name: "三浦半島の冬の名産「三浦大根」と冬野菜の魅力、お土産スポットは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "三浦半島は温暖な気候と豊かな土壌に恵まれ、冬野菜の一大産地です。特に12月〜1月に旬を迎える「三浦大根」は、中太りでずっしりと重く、緻密な肉質と強い甘みが特徴。煮崩れしにくいため、まぐろのあら炊きやおでんに最高です。三崎港の産直センター「うらりマルシェ」では、毎朝採れたての三浦大根やキャベツ、水産加工品が豊富に並び、名物「三崎まぐろラーメン」や「とろまん」のテイクアウトも楽しめます。"
        }
      },
      {
        '@type': 'Question',
        name: "都心から三浦半島・城ヶ島へのアクセスと「みさきまぐろきっぷ」の利用方法は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "電車の場合は、品川駅から京急本線・久里浜線快特で三崎口駅まで約65分。三崎口駅からは京急バスで三崎港（約15分）や城ヶ島（約30分）へ直行できます。京急電鉄が発売する「みさきまぐろきっぷ」は、電車・バス往復乗車券に加え、選べるまぐろ食事券とおもひで券（温泉入浴やアクティビティ）がセットになった超お得なきっぷで日帰り・宿泊旅ともに大人気です。車の場合は横浜横須賀道路・衣笠ICから三浦縦貫道路を経由して三浦海岸や城ヶ島へ約30分でアクセス可能です。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "マホロバ・マインズ三浦",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13569/13569.jpg",
              rating: 4.18,
              reviews: 2699,
              price: "¥7,200〜",
              access: "京浜急行線「三浦海岸駅」より徒歩7分（無料送迎バスあり） / 横浜・横須賀道路 佐原ICより１５分",
              special: "★マグロ寿司食べ放題★屋内プールあり★大好評！オールインクルーシブプラン★",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13569%2F13569.html",
              story: "三浦海岸駅から徒歩約7分、目の前に広がる雄大な東京湾と南房総の山並みを望む大型リゾートホテル「マホロバ・マインズ三浦」。地下1,500メートルから湧き出る自家源泉の天然温泉は、ナトリウム-塩化物強塩温泉で体の芯からポカポカと温まり、湯冷めしにくい冬に最適な泉質です。広々とした開放的な大浴場と露天風呂でリフレッシュした後は、大人気のリゾートバイキングへ。冬期は三崎港直送の新鮮なまぐろ刺身や寿司が食べ放題で味わえるほか、地元三浦産の甘みたっぷりの冬野菜や旬の海鮮料理が豪華に並びます。全室が広々としたコンドミニアム仕様で、ファミリーやグループ、三世代旅行でも我が家のように寛げます。",
              roomTip: "オーシャンビューロイヤルスイート。水平線から昇る感動の朝日と、澄み渡る冬の海原を眼下に一望する最高の開放感を満喫できます。",
              gourmetTip: "「三崎まぐろ食べ放題バイキング」。職人が目の前で握るまぐろ握り寿司や、赤身・中トロの舟盛り、三浦大根とまぐろの煮物など旬の美味を満喫できます。",
              highlights: [
                "地下1500mから湧く自家源泉天然温泉・大浴場露天風呂でぽかぽか温浴",
                "三崎港直送のまぐろ食べ放題バイキングと地元三浦産冬野菜の贅沢ビュッフェ",
                "全室広々コンドミニアム・海を望む絶景ロケーションでファミリーやグループに大人気"
              ]
            },
            {
              id: 2,
              name: "ふふ　城ヶ島　海風のしらべ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/198710/198710.jpg",
              rating: 4.92,
              reviews: 12,
              price: "¥34,000〜",
              access: "三崎口駅より路線バスにて約30分(施設まで徒歩約5分）、タクシーにて約20分。三浦縦貫道路 林ICより約35～50分",
              special: "「ふふ」初の海を望むリゾート。広大な海原と空を目の前に、心ほどける滞在。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F198710%2F198710.html",
              story: "三浦半島の最南端、太平洋と相模湾の荒波が削り出した絶景の孤島・城ヶ島に誕生した最高峰スモールラグジュアリーリゾート「ふふ 城ヶ島 海風のしらべ」。島の大自然と海風に寄り添う静寂なロケーションにあり、すべての客室に自家源泉の天然温泉露天風呂とデイベッドを完備しています。テラスからは、夕暮れ時に相模湾を茜色に染めながらシルエットを浮かび上がらせる富士山の神々しい夕景を独占。食事処では、三崎港のまぐろはもちろん、外房・相模湾の高級地魚や三浦牛など、旬の最高級食材を日本料理の技で仕立てた至高のコースを堪能できます。洗練を極めた空間で大人の冬の休日を過ごすのにふさわしい珠玉の宿です。",
              roomTip: "温泉露天風呂付プレシャススイート。波音を聴きながら露天風呂に浸かり、冬の澄んだ夜空に輝く満天の星と遠くの灯台の光を眺められます。",
              gourmetTip: "「城ヶ島海の恵み日本料理特選会席」。厳選された天然本まぐろの霜降り造りや炭火焼き、鮑の肝ソース焼きなど、贅を極めた冬の饗宴が楽しめます。",
              highlights: [
                "全室客室温泉露天風呂付・相模湾と富士山の絶景夕景を望む最高峰リゾート",
                "三崎まぐろや相模湾の地魚・三浦牛を繊細に仕立てた日本料理特選会席",
                "城ヶ島の大自然と波音に抱かれる静寂空間・大人の記念日やご褒美旅行に最適"
              ]
            },
            {
              id: 3,
              name: "三浦半島の旅宿　三崎宿",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/176924/176924.jpg",
              rating: 4.81,
              reviews: 105,
              price: "¥11,000〜",
              access: "京浜急行　三崎口駅よりお車にて約１５分",
              special: "港町ならではの、蔵造り・古民家を改装した分散型ホテル【三崎宿】",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176924%2F176924.html",
              story: "三崎港のレトロな港町に点在する古民家や蔵をモダンにリノベーションした分散型ホテル「三浦半島の旅宿 三崎宿」。町全体をひとつの宿と見立て、どこか懐かしい昭和の港情緒に包まれながら暮らすように旅する特別な体験が叶います。蔵を改装した客室は、漆喰の壁や太い梁の温もりが心地よく、現代的な快適性と歴史の趣が見事に融合。夕食は港町三崎の提携割烹や名店へ出かけ、地元漁師御用達の極上まぐろ料理や地魚の煮付けに舌鼓。翌朝は港の朝市や魚市場を散策し、活気ある競りの風景や朝獲れの海の幸に触れる、本物の港町旅が楽しめます。",
              roomTip: "蔵の宿スイートルーム。重厚な土蔵の扉を開けると現れるモダンな吹き抜け空間で、静謐な港町の夜を贅沢に過ごせます。",
              gourmetTip: "「三崎港老舗割烹との提携コース」。名物まぐろの兜焼きや尾の身ステーキ、希少部位のお造りなど、専門店ならではの奥深い味を堪能できます。",
              highlights: [
                "三崎港の古民家や土蔵を再生した分散型ホテル・情緒あふれる港町ステイ",
                "三崎下町の老舗割烹との連携・名物兜焼きや希少部位まぐろを堪能",
                "朝の三崎港魚市場散策や朝市買い出しなどリアルな港町体験を満喫"
              ]
            },
            {
              id: 4,
              name: "鮪のわらやき屋宿",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/197172/197172.jpg",
              rating: 4.33,
              reviews: 12,
              price: "¥5,900〜",
              access: "三崎口駅よりお車で約１５分",
              special: "本館は21時&amp;#12316;のレイトチェックイン、別館はチェックイン15時&amp;#12316;",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F197172%2F197172.html",
              story: "三崎下町商店街のほど近く、三崎港直送の天然まぐろを豪快な「藁焼き」で提供する注目の美食宿「鮪のわらやき屋宿」。一階に併設された飲食店では、注文ごとに立ち昇る大炎でまぐろを一気に焼き上げ、表面を香ばしく燻しながら中はレアの旨味を凝縮させた名物「まぐろの藁焼きタタキ」が絶大な人気を誇ります。宿はシンプルながら清潔感にあふれ、一人旅からカップルまで気軽に利用できるリーズナブルな価格設定が魅力。夕食時には、藁焼きの香ばしい香りが漂う店内で地酒「三浦三崎」とともに絶品まぐろ料理を味わい、夜の静かな港町散策を楽しむことができます。",
              roomTip: "モダンツインルーム。無駄のないスタイリッシュな空間で、グルメ散策の拠点として心地よい睡眠と休息を約束してくれます。",
              gourmetTip: "「名物・天然まぐろの藁焼き御膳」。高温の藁火で燻製香を纏わせたまぐろの赤身と中トロに、粗塩と特製ポン酢、生にんにくを添えて味わう極上の一皿です。",
              highlights: [
                "立ち昇る炎で一気に焼き上げる名物まぐろの藁焼きタタキと厳選地酒",
                "リーズナブルな価格設定で一人旅や気ままなグルメドライブに最適",
                "三崎下町商店街の散策に便利な拠点・清潔感のあるモダンな客室"
              ]
            },
            {
              id: 5,
              name: "城ヶ島　港屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/198947/198947.jpg",
              rating: 4.33,
              reviews: 6,
              price: "¥1,800〜",
              access: "京浜急行三崎口駅下車城ヶ島行きバス終点下車徒歩5分 お車の場合、横浜横須賀道路　佐原ＩＣから約40分",
              special: "三浦半島城ヶ島最南端に建ち、客室より全室太平洋、相模湾一望の絶景の宿、非日常の時と空間を楽しめる。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F198947%2F198947.html",
              story: "城ヶ島の渡し船発着所至近、島の玄関口に佇むアットホームな老舗海鮮民宿「城ヶ島 港屋」。城ヶ島大橋を渡ってすぐの便利な立地で、目の前には長閑な漁港の景色が広がります。宿の最大の自慢は、代々培われた目利きで仕入れる新鮮そのものの海の幸。冬は三崎港水揚げのまぐろはもちろん、城ヶ島近海で獲れた活サザエ、伊勢海老、メジナやカサゴなどの旬魚が惜しみなく膳に並びます。気取らない温かなおもてなしと家庭的な雰囲気にリピーターが多く、城ヶ島公園の水仙まつり散策や磯釣りの拠点として絶大なコストパフォーマンスを誇ります。",
              roomTip: "港を望む和室。窓を開けると心地よい潮風とカモメの声が響き、素朴で懐かしい島の旅情に浸ることができます。",
              gourmetTip: "「三崎まぐろと地魚満腹舟盛り会席」。豪快に盛り付けられたまぐろのお造りと旬の地魚の煮付け、名物サザエのつぼ焼きが存分に楽しめます。",
              highlights: [
                "城ヶ島港の目の前・獲れたて活魚舟盛りと温かい家庭的なもてなしの宿",
                "城ヶ島公園の水仙まつりや馬の背洞門へ徒歩圏内・抜群の観光アクセス",
                "三浦半島の海の幸をリーズナブルに味わえる圧倒的なコストパフォーマンス"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "冬（11月・12月・1月）の三浦半島・城ヶ島「水仙まつり」の見頃と特徴は？",
    "a": "城ヶ島公園で開催される「水仙まつり」は、例年1月中旬から2月中旬にかけて見頃を迎えます。約30万株の八重咲水仙が園内一面に白と黄色の可憐な花を咲かせ、冬の海風に乗って甘く清々しい香りを漂わせます。11月下旬〜12月は水仙の蕾が膨らみ始めるとともに、空気が澄み切って相模湾越しに雪を冠した富士山が最も鮮やかに見えるシーズン。公園展望台からは富士山と水仙の共演という、冬の神奈川随一の絶景パノラマを堪能できます。"
  },
  {
    "q": "冬の三崎港で味わう「三崎まぐろ」が格別に美味しい理由とおすすめ部位は？",
    "a": "三崎港は、世界中の大海原で操業する遠洋延縄（はえなわ）まぐろ漁船の日本屈指の母港です。マイナス60度の超低温冷凍コンテナで鮮度を保ったまま運ばれる天然メバチマグロや本マグロは、冬に身の脂が乗り、旨味が極大化します。定番の赤身や中トロはもちろん、地元でしか味わえない希少部位（頭肉、カマトロ、ホホ肉、尾の身）のステーキや煮付け、名物「まぐろの兜焼き」など、まぐろのすべてを味わい尽くせるのが三崎の醍醐味です。"
  },
  {
    "q": "城ヶ島の名所「馬の背洞門」や冬の絶景富士山ビューポイントはどこですか？",
    "a": "城ヶ島を代表する自然のモニュメント「馬の背洞門（うまのせどうもん）」は、長い年月をかけて波浪や風雨に侵食されてできた天然の海蝕洞門です。冬の晴れた日には、洞門の岩の向こう側に青い海と空が広がり、壮大な造形美を見せてくれます。また、城ヶ島灯台周辺や西山展望台、城ヶ島公園の安房崎展望台からは、相模湾越しに夕日に染まる富士山の壮大なシルエットを望むことができ、夕暮れ時の16時半〜17時頃がベストタイムです。"
  },
  {
    "q": "三浦半島の冬の名産「三浦大根」と冬野菜の魅力、お土産スポットは？",
    "a": "三浦半島は温暖な気候と豊かな土壌に恵まれ、冬野菜の一大産地です。特に12月〜1月に旬を迎える「三浦大根」は、中太りでずっしりと重く、緻密な肉質と強い甘みが特徴。煮崩れしにくいため、まぐろのあら炊きやおでんに最高です。三崎港の産直センター「うらりマルシェ」では、毎朝採れたての三浦大根やキャベツ、水産加工品が豊富に並び、名物「三崎まぐろラーメン」や「とろまん」のテイクアウトも楽しめます。"
  },
  {
    "q": "都心から三浦半島・城ヶ島へのアクセスと「みさきまぐろきっぷ」の利用方法は？",
    "a": "電車の場合は、品川駅から京急本線・久里浜線快特で三崎口駅まで約65分。三崎口駅からは京急バスで三崎港（約15分）や城ヶ島（約30分）へ直行できます。京急電鉄が発売する「みさきまぐろきっぷ」は、電車・バス往復乗車券に加え、選べるまぐろ食事券とおもひで券（温泉入浴やアクティビティ）がセットになった超お得なきっぷで日帰り・宿泊旅ともに大人気です。車の場合は横浜横須賀道路・衣笠ICから三浦縦貫道路を経由して三浦海岸や城ヶ島へ約30分でアクセス可能です。"
  }
];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-sky-100 selection:text-sky-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の三浦半島城ヶ島と相模湾越しの富士山夕景" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-sky-900/80 backdrop-blur-md text-sky-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-sky-400/30">
            <Fish className="w-4 h-4 text-sky-300" />
            11月・12月・1月 冬の神奈川・三浦半島＆城ヶ島水仙まつり・極上三崎まぐろ特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月神奈川】冬の三浦半島・城ヶ島30万本の水仙まつりと富士山絶景・名物三崎まぐろ尽くし＆朝獲れ地魚を味わう三浦名宿5選
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            冬の澄み渡る蒼穹の下、相模湾越しに純白の富士山が神々しくそびえ立つ三浦半島。城ヶ島公園一面を甘い芳香で包む30万株の「水仙まつり」、雄大な海蝕崖「馬の背洞門」の造形美、そして日本屈指の遠洋漁業基地・三崎港で味わう極上の天然まぐろと旬の三浦大根。冷えた体を温泉で解きほぐし、都心からわずか1時間半で別天地の絶景と美食に出逢える冬の旅へご案内します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-sky-400" /> 最適時期：11月下旬〜1月下旬（水仙見頃・富士山夕景・まぐろ最盛期）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-sky-400" /> エリア：神奈川県三浦市（三浦海岸・三崎港・城ヶ島・油壺）</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-sky-400" /> 名物：天然三崎まぐろ・三浦大根・地魚刺身・三浦牛</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬風が運ぶ水仙の甘い薫りと、相模湾を染める黄金の富士山夕景
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              東京湾と相模湾を分けるように南へと突き出た三浦半島。夏のマリンリゾートとしての賑やかさが落ち着く11月から1月、この地は年間で最も透明度の高い大気と、旅情あふれる静寂に包まれます。冬の澄んだ空気のおかげで、三浦海岸や城ヶ島の高台に立つと、青く輝く海原の彼方に雪化粧をまとった富士山の雄姿が驚くほどくっきりと望めます。夕刻、夕日が水平線に沈みゆく時間帯には、茜色から紫へと移ろう空を背景に黒々とした富士の稜線が浮かび上がり、言葉を失うほどの絶景美を見せてくれます。
            </p>
            <p>
              三浦半島の最南端に位置する周囲約4キロメートルの城ヶ島では、12月から1月にかけて約30万株の八重咲水仙が咲き誇る「水仙まつり」が幕を開けます。海風に揺れる白い花びらと黄色い副花冠が緑の絨毯のように広がり、島全体が清々しく甘い香りに包まれます。荒波が削り出した奇岩「馬の背洞門」や白亜の城ヶ島灯台を巡りながら、冬の心地よい潮風を感じるウォーキングは、心身を健やかにリフレッシュしてくれます。
            </p>
            <p>
              そして、旅の最大のハイライトとなるのが、日本屈指のまぐろの町・三崎港の美食です。世界各国の海から集まる天然本まぐろやメバチマグロは、真冬の寒冷期に脂の乗りが最高潮に達します。とろけるような大トロ・中トロのお造りはもちろん、香ばしい藁焼きタタキ、旨味が凝縮したカマ焼き、頭肉やホホ肉のステーキなど、専門の料理人が腕を振るう多彩なまぐろ料理は圧巻。さらに、冬に甘みと瑞々しさを増す特産の「三浦大根」との煮物やすき焼きは、冬の三浦ならではの至高の味わいです。
            </p>
            <p>
              都心から電車や車で約1時間半という気軽さでありながら、ダイナミックな自然の造形、満開の水仙、温泉、そして海の王者まぐろの贅沢な味わいをすべて堪能できる三浦半島。日常を離れ、清らかな冬の海風と温かな湯宿に身を委ねる極上の休日が待っています。
            </p>
          </div>
        </section>

        {/* 3 Key Highlights Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の三浦半島・城ヶ島で心震える3つの絶景と美食
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              11月〜1月のベストシーズンだからこそ出逢える、息をのむ瞬間。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700 font-bold">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                1. 城ヶ島30万株の水仙まつりと相模湾富士山
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                冬の青空と青い海に映える白と黄色の八重咲水仙。城ヶ島公園の展望デッキからは、雪化粧の富士山と水仙の香りが織りなす冬の絶景パノラマを堪能できます。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-700 font-bold">
                <Fish className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                2. 本場三崎港の天然まぐろ尽くしと希少部位
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                冬に脂が乗る天然まぐろのトロや赤身の刺身、香ばしい藁焼き、兜焼きやカマの煮付け。専門店や宿の割烹で味わう本場ならではのまぐろフルコースは至福の体験です。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                <Sunset className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                3. 馬の背洞門の自然造形美と感動の夕景
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                波の浸食が生んだ海蝕洞「馬の背洞門」の雄大な岩肌。夕刻には空と海が茜色に染まり、富士山のシルエットが幻想的に浮かび上がる感動のひとときを演出します。
              </p>
            </div>
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-sky-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              【1泊2日】水仙まつりと三崎まぐろ・富士山夕景を巡る冬の三浦ドライブコース
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              絶景スポットと港町のレトロ散策、天然温泉を効率よく巡る冬の王道ドライブルート。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-sky-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-sky-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-sky-400 tracking-wider uppercase">DAY 1 昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  12:00 三崎港に到着 ➔ 「うらりマルシェ」散策＆名物まぐろ丼ランチ
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  品川から快特で三崎口へ、または三浦縦貫道路経由で三崎港へ。まずは産直センター「うらりマルシェ」で朝獲れ地魚やまぐろ加工品を見学。港町の人気店で、溢れんばかりに盛られた本場天然まぐろ丼や、熱々の「三崎まぐろメンチカツ」を頬張ります。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-sky-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-sky-400 tracking-wider uppercase">DAY 1 午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  14:00 城ヶ島大橋を渡り城ヶ島へ ➔ 「城ヶ島公園水仙まつり」と「馬の背洞門」散策
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  城ヶ島公園へ移動し、甘い香りが漂う30万株の水仙の花畑を散策。安房崎灯台の白亜の塔を見上げ、海岸沿いのハイキングコースを進んで巨大な海蝕洞「馬の背洞門」へ。大自然が刻んだダイナミックな岩の造形美に圧倒されます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-sky-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-sky-400 tracking-wider uppercase">DAY 1 夕刻</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  16:30 西山展望台から相模湾越しの「夕日富士」を拝観 ➔ 宿へチェックイン
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  日が傾き始める頃、城ヶ島西側の展望台へ。沈みゆく太陽が空と海を黄金色に染め、相模湾の向こうに真っ白な富士山がシルエットとなって美しく浮かび上がります。感動的な夕景を目に焼き付けた後、三浦・城ヶ島の名宿へチェックイン。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-sky-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-sky-400 tracking-wider uppercase">DAY 1 夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  19:00 温泉で体を温めた後、至高の「三崎まぐろ会席」に酔いしれる
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  地下から湧く天然温泉や展望風呂で潮風に冷えた体を温めた後、待望の夕食。天然まぐろの大トロ・中トロ・赤身の食べ比べ、香ばしい藁焼きタタキ、三浦大根とまぐろの煮付けなど、地元の冬の恵みを地酒とともに心ゆくまで味わいます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-sky-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-sky-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  09:00 三浦海岸の砂浜散歩 ➔ 三浦大根の直売所巡りをして帰路へ
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  翌朝は穏やかな波が打ち寄せる三浦海岸を散策。海沿いの畑に広がる三浦大根の収穫風景を眺めながら、農家の直売所でずっしりと重い冬採り三浦大根や旬のキャベツを購入。海の幸と大地の恵みを両手に抱えて大満足の帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Featured Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の三浦半島・城ヶ島を満喫する厳選名宿5選
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              天然温泉とまぐろバイキングのリゾートから、富士山夕景を望む最高峰温泉宿、古民家分散ホテルまで厳選。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((h) => (
              <div key={h.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[260px]">
                    <img 
                      src={h.img} 
                      alt={h.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                      厳選第 {h.id} 位
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-sky-900 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200/60">
                          {h.access}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-stone-600">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-bold text-stone-900 text-sm">{h.rating}</span>
                          <span>({h.reviews}件のクチコミ)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {h.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-500 font-medium">
                        {h.special}
                      </p>

                      <p className="text-sm text-stone-700 leading-relaxed pt-2">
                        {h.story}
                      </p>
                    </div>

                    <div className="space-y-3 bg-stone-50 rounded-2xl p-4 border border-stone-200/70 text-xs sm:text-sm text-stone-700">
                      <div className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-sky-600" />
                        この宿の注目ポイント
                      </div>
                      <ul className="space-y-1.5 list-disc list-inside text-stone-600">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="leading-relaxed">{hl}</li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-stone-200/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="font-bold text-stone-900">客室の提案：</span>
                          <span className="text-stone-600">{h.roomTip}</span>
                        </div>
                        <div>
                          <span className="font-bold text-stone-900">料理の提案：</span>
                          <span className="text-stone-600">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-stone-100">
                      <div>
                        <span className="text-xs text-stone-500 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-black text-sky-950">{h.price}</span>
                      </div>

                      <a 
                        href={h.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-800 to-slate-900 hover:from-sky-900 hover:to-slate-950 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm group"
                      >
                        <span>楽天トラベルで空室・プランを見る</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local Gourmet Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Gastronomy & Produce</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の三浦半島が誇る至高の海の恵みと大地の実り
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-sky-700" />
                三崎まぐろの奥深い部位と伝統の食べ方
              </h3>
              <p>
                三崎で食べられる天然まぐろは、一般的な赤身やトロに留まりません。1匹のマグロからわずかしか取れない「ハチの身（頭肉）」は牛刺しのような濃厚なコクがあり、「ホホ肉」は火を通すとジューシーなステーキのよう。「カマ」はオーブンでじっくり塩焼きにすることで香ばしい脂が溢れ出します。また、骨の間の身をスプーンで掻き取った「中落ち」は旨味成分の宝庫で、熱々のご飯と合わせると格別の美味しさです。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-sky-700" />
                三浦大根の甘みとおすすめの港町みやげ
              </h3>
              <p>
                三浦半島の肥沃な火山灰土壌と温暖な潮風が育む「三浦大根」は、繊維が細かく肉質が緻密で、煮込むほどに出汁を吸ってとろけるような柔らかさになります。お土産には、丸ごとの新鮮な三浦大根はもちろん、三崎港名物の「まぐろ角煮」、天然まぐろの中落ちを贅沢に包んだ中華まん「とろまん」、三浦産の早春キャベツを使った加工品など、冬の食卓を豊かに彩る逸品が目白押しです。
              </p>
            </div>
          </div>
        </section>

        {/* Practical Tips Section */}
        <section className="bg-sky-50/60 rounded-3xl p-6 sm:p-10 border border-sky-200/60 space-y-6">
          <div className="border-b border-sky-200/80 pb-4">
            <span className="text-sky-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Traveler Tips</span>
            <h2 className="text-xl sm:text-2xl font-bold text-sky-950">
              冬の三浦・城ヶ島散策を快適に満喫するためのポイント
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-sky-950">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-sky-700" />
                海風対策と防風アウター
              </div>
              <p className="leading-relaxed text-stone-700">
                三浦半島は温暖ですが、城ヶ島や海岸線は太平洋からの冷たい海風が強く吹き抜けます。体感温度が下がりやすいため、風を通さないウインドブレーカーやダウンジャケット、首元を温めるマフラーが必須です。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-sky-700" />
                城ヶ島の散策ルートと足元
              </div>
              <p className="leading-relaxed text-stone-700">
                馬の背洞門や磯場周辺はゴツゴツとした岩場や未舗装の階段が続きます。ヒールやサンダルは危険ですので、歩き慣れたスニーカーやトレッキングシューズで散策を楽しみましょう。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-sky-700" />
                日没時間と富士山観賞のコツ
              </div>
              <p className="leading-relaxed text-stone-700">
                12月〜1月の日の入りは16時30分〜17時00分頃です。夕日に染まる富士山を眺めるには、日没の30分前までに城ヶ島西側の展望台や三浦海岸のビューポイントへ到着しておくのがおすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の三浦半島・城ヶ島旅行に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-sky-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-sky-800 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    Q
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-3 pl-9">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links Section */}
        <section className="border-t border-stone-200 pt-10 space-y-6">
          <div className="space-y-1">
            <span className="text-sky-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Coastal Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい海辺の冬景色・海鮮グルメ名宿特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-kanagawa-kamakura-enoshima-jewel-shrine-fuji-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-sky-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-sky-800 font-bold text-xs block mb-1">神奈川・鎌倉＆江の島</span>
              <span className="text-stone-900 font-bold group-hover:text-sky-900 transition-colors line-clamp-2">
                湘南の宝石イルミネーションと鶴岡八幡宮初詣・富士山夕景と相模湾冬魚名宿
              </span>
            </Link>

            <Link 
              href="/winter-kanagawa-hakone-fuji-view-onsen-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-sky-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-sky-800 font-bold text-xs block mb-1">神奈川・箱根温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-sky-900 transition-colors line-clamp-2">
                冬の箱根温泉・雪化粧の富士山を望む絶景露天風呂と名旅館
              </span>
            </Link>

            <Link 
              href="/winter-shizuoka-atami-onsen-winter-fireworks-kinmedai-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-sky-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-sky-800 font-bold text-xs block mb-1">静岡・熱海温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-sky-900 transition-colors line-clamp-2">
                熱海海上冬花火と金目鯛煮付け・相模湾オーシャンビュー名湯宿
              </span>
            </Link>

            <Link 
              href="/winter-chiba-choshi-inubosaki-sunrise-kinmedai-hamaguri-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-sky-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-sky-800 font-bold text-xs block mb-1">千葉・銚子犬吠埼</span>
              <span className="text-stone-900 font-bold group-hover:text-sky-900 transition-colors line-clamp-2">
                日本一早い初日の出と極上寒金目鯛・九十九里はまぐりを堪能する絶景名宿
              </span>
            </Link>

            <Link 
              href="/winter-shizuoka-yaizu-onsen-fuji-view-minami-maguro-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-sky-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-sky-800 font-bold text-xs block mb-1">静岡・焼津温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-sky-900 transition-colors line-clamp-2">
                駿河湾越しの冬富士と極上天然南まぐろ・黒潮温泉の温もりを味わう名宿
              </span>
            </Link>

            <Link 
              href="/features" 
              className="p-4 rounded-2xl bg-stone-100 border border-stone-200 hover:border-sky-400 transition-all group flex flex-col justify-center text-center"
            >
              <span className="text-stone-900 font-bold group-hover:text-sky-900 transition-colors">
                冬の特集記事一覧をすべて見る ➔
              </span>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
