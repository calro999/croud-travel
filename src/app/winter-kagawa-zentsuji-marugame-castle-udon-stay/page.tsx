import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Landmark, Castle, ShieldCheck, Flame, Footprints, Sun, Coffee, AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月香川】善通寺＆丸亀！弘法大師生誕地・総本山善通寺の雪の初詣と丸亀城石垣ライトアップ・冬の讃岐しっぽくうどん＆骨付鳥名宿5選",
  description: "真言宗開祖・弘法大師空海の御生誕の地であり四国霊場第75番札所の総本山善通寺での荘厳な初詣。日本一の石垣美を誇る現存十二天守・丸亀城の冬のライトアップや、冬期限定の具だくさん郷土麺「讃岐しっぽくうどん」、丸亀発祥のスパイシーな「骨付鳥」。瀬戸内海を望む展望風呂や名湯こんぴら温泉に癒やされる厳選名宿5選を徹底特集します。",
  keywords: '総本山善通寺 初詣, 丸亀城 ライトアップ, しっぽくうどん 香川, 骨付鳥 丸亀, オークラホテル丸亀, 紅梅亭, レオマの森, 空海 生誕地, 11月 12月 1月 香川 旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kagawa-zentsuji-marugame-castle-udon-stay/"
  },
  openGraph: {
    title: "【11・12・1月香川】善通寺＆丸亀！弘法大師生誕地・総本山善通寺の雪の初詣と丸亀城石垣ライトアップ・冬の讃岐しっぽくうどん＆骨付鳥名宿5選",
    description: "真言宗開祖・弘法大師空海の御生誕の地であり四国霊場第75番札所の総本山善通寺での荘厳な初詣。日本一の石垣美を誇る現存十二天守・丸亀城の冬のライトアップや、冬期限定の具だくさん郷土麺「讃岐しっぽくうどん」、丸亀発祥のスパイシーな「骨付鳥」。瀬戸内海を望む展望風呂や名湯こんぴら温泉に癒やされる厳選名宿5選を徹底特集します。",
    url: 'https://croud-travel.com/winter-kagawa-zentsuji-marugame-castle-udon-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/675/675.jpg",
      width: 1200,
      height: 630,
      alt: '冬の総本山善通寺五重塔と丸亀城の石垣ライトアップ'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月香川】善通寺＆丸亀！弘法大師生誕地・総本山善通寺の雪の初詣と丸亀城石垣ライトアップ・冬の讃岐しっぽくうどん＆骨付鳥名宿5選",
    description: "真言宗開祖・弘法大師空海の御生誕の地であり四国霊場第75番札所の総本山善通寺での荘厳な初詣。日本一の石垣美を誇る現存十二天守・丸亀城の冬のライトアップや、冬期限定の具だくさん郷土麺「讃岐しっぽくうどん」、丸亀発祥のスパイシーな「骨付鳥」。瀬戸内海を望む展望風呂や名湯こんぴら温泉に癒やされる厳選名宿5選を徹底特集します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/675/675.jpg"]
  }
};

export const dynamic = 'force-static';

export default function KagawaZentsujiMarugamePage() {
  const hotels = [
            {
              id: 1,
              name: "オークラホテル丸亀",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/675/675.jpg",
              rating: 4.11,
              reviews: 3812,
              price: "¥5,300〜",
              access: "ＪＲ丸亀駅より車で５分、本州方面は瀬戸中央自動車道-坂出北ICより１５分、四国方面は高松自動車道-坂出ICより１５分",
              special: "香川県丸亀市周辺への出張、観光に最適なプラン掲載。展望浴場、ＷiFiあり、有線LAN回線あり。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F675%2F675.html",
              story: "瀬戸内海に面したウォーターフロントに聳え立ち、瀬戸大橋の雄大な夜景と多度津・丸亀港の穏やかな海原を一望できるシティリゾート「オークラホテル丸亀」。冬の澄み切った夜空の下、客室や最上階展望レストランから望むライトアップされた瀬戸大橋のアーチは息を呑む美しさです。館内には展望大浴場とサウナが完備され、冬の観光で冷えた身体を温かい湯で解きほぐすことができます。料理は瀬戸内海の旬の海の幸と香川県特産の「オリーブ牛」を贅沢に味わえる和洋会席。冬に脂が乗る瀬戸内の真鯛やオリーブハマチ、讃岐コーチンなど、厳選食材を使った至極のディナーを堪能できます。丸亀城へ車で約5分、善通寺へも約15分と冬の初詣や城郭巡りの拠点として抜群の利便性を誇ります。",
              roomTip: "瀬戸大橋側オーシャンビューツイン。ワイドな窓から冬の静かな瀬戸内海とライトアップされた瀬戸大橋のパノラマ夜景を独占できます。",
              gourmetTip: "「オリーブ牛ステーキ＆瀬戸内冬魚介ディナー」。とろけるオリーブ牛のサーロインと、冬の瀬戸内真鯛のポワレを味わう贅沢なコース。",
              highlights: [
                "瀬戸大橋のライトアップ夜景一望・展望大浴場サウナと上質シティリゾート",
                "オリーブ牛ステーキと瀬戸内冬真鯛ディナー・優雅な最上階レストラン",
                "丸亀城へ車5分・瀬戸内の潮風を感じるウォーターフロントステイ"
              ]
            },
            {
              id: 2,
              name: "丸亀プラザホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12630/12630.jpg",
              rating: 4.06,
              reviews: 520,
              price: "¥4,000〜",
              access: "■ＪＲ予讃線丸亀駅から徒歩５分　■善通寺ＩＣから車で１５分　■坂出北ＩＣから車で１５分　■高松ＡＰから車で４５分",
              special: "室内バス及びウォシュレット付・全室ゆとりのセミダブルベッド・お部屋にてインターネット可（無料）",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12630%2F12630.html",
              story: "JR丸亀駅より徒歩約5分、国の史跡・丸亀城の城下町中心部に位置し、ビジネスから観光まで高い信頼を集める機能的ホテル「丸亀プラザホテル」。ホテルを一歩出れば、冬の名物「骨付鳥」発祥の老舗店「一鶴（いっかく）」本店をはじめとする名店が徒歩圏内に点在し、スパイシーでジューシーな熱々の骨付鳥と生ビールを満喫する冬の夜のグルメ散策に最適です。客室はシンプルながら清潔感にあふれ、シモンズ社製ベッドが快適な睡眠をサポート。朝食には地元讃岐の味覚を取り入れた和洋バイキングが用意され、朝から温かい手打ちうどんを味わえるのも讃岐路ならではの嬉しいおもてなしです。",
              roomTip: "丸亀城側セミダブルまたはツイン。窓の向こうに冬の空に凛と聳える丸亀城天守閣と石垣の美しいシルエットを望めます。",
              gourmetTip: "「讃岐ご当地朝食バイキング」。出汁の香りが漂う温かい讃岐うどんや、県産米のおにぎり、手作りお惣菜で元気に一日をスタート。",
              highlights: [
                "丸亀駅徒歩5分・骨付鳥発祥の一鶴本店至近で冬の食べ歩きに最適",
                "シモンズベッド完備・朝食バイキングで温かい讃岐うどんを堪能",
                "丸亀城石垣ライトアップ鑑賞拠点・機能的で清潔な快適空間"
              ]
            },
            {
              id: 3,
              name: "善通寺グランドホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15603/15603.jpg",
              rating: 3.37,
              reviews: 310,
              price: "¥3,000〜",
              access: "総本山善通寺より車で３分、徒歩７分／ JR土讃線「善通寺駅」車で５分／善通寺ICより国道１１号経由　車で８分",
              special: "【善通寺にいくならココ】立地抜群！地域最安！飲食店やスーパー徒歩圏内／平面駐車場無料",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15603%2F15603.html",
              story: "弘法大師空海御生誕の霊場「総本山善通寺」まで車でわずか約3分、善通寺ICからも近い好立地に佇む「善通寺グランドホテル」。新年の初詣客や四国八十八ヶ所巡礼の遍路旅、ビジネス客に長く親しまれているアットホームな拠点宿です。冬の善通寺は朝の凛とした冷気の中に鐘の音が響き渡り、五重塔や大楠が神聖な雰囲気を放ちます。宿ではゆったりとした客室と親身なおもてなしを提供しており、無料駐車場も完備。周辺には早朝から営業している讃岐うどんの有名店が多数あり、冬限定の根菜たっぷり「しっぽくうどん」を食べ歩くモーニングうどん巡りのベースキャンプとしても絶好のロケーションです。",
              roomTip: "和室またはゆったりツインルーム。畳敷きの和室は家族連れやお遍路・初詣のグループ旅行でも足を伸ばして寛げます。",
              gourmetTip: "「周辺うどん店＆骨付鳥巡り」。宿周辺の讃岐うどん名店案内が充実しており、冬ならではの熱々うどん探訪を楽しめます。",
              highlights: [
                "総本山善通寺まで車3分・初詣やお遍路拠点に抜群の立地と無料駐車場",
                "周辺の有名讃岐うどん店へアクセス抜群・冬のしっぽくうどん巡り",
                "空海御生誕の霊場至近・静かな環境で心を整える善通寺滞在"
              ]
            },
            {
              id: 4,
              name: "湯元こんぴら温泉華の湯　紅梅亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5901/5901.jpg",
              rating: 4.58,
              reviews: 1680,
              price: "¥13,860〜",
              access: "ＪＲ琴平駅下車、徒歩5分（無料送迎有・要予約）。車：道善通寺ＩＣ下車約15分。高松空港より約40分",
              special: "露天風呂付スイートOPEN◆2種の源泉を楽しむ＜3箇所15種類の湯処＞でのんびり湯巡り",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5901%2F5901.html",
              story: "金刀比羅宮の門前町に佇み、贅を尽くした和の美空間と豊富な自家源泉「華の湯」で旅人を魅了する屈指の高級温泉旅館「湯元こんぴら温泉華の湯 紅梅亭（こうばいてい）」。善通寺や丸亀城からも車で約15〜20分と至近で、初詣を兼ねた冬のご褒美旅に最適です。館内には割烹ダイニングや数寄屋造りの贅沢な空間が広がり、温泉は趣の異なる多彩な湯船が揃う大浴場と露天風呂。冬の澄んだ空気の中で檜の香りに包まれる雪見露天は至福のひとときです。夕食は四国の山海の幸を極上の技で仕上げる本格会席で、オリーブ牛の石焼きや讃岐コーチンの鍋仕立て、冬の瀬戸内海の旬魚が美しく並びます。きめ細やかなおもてなしが特別な冬の記念日を優雅に演出します。",
              roomTip: "露天風呂付き客室「花香木」。客室専用の露天風呂で金刀比羅の山並みを眺めながら、誰にも邪魔されないプライベートな湯浴みを満喫。",
              gourmetTip: "「讃岐極上会席・オリーブ牛と冬の瀬戸内海の恵み」。A5ランクオリーブ牛のフィレステーキと、冬真鯛や伊勢海老の贅沢なお造り盛り合わせ。",
              highlights: [
                "門前町最高峰の贅沢旅館・自家源泉「華の湯」露天風呂とオリーブ牛会席",
                "A5ランクオリーブ牛石焼き＆讃岐コーチン・四季の本格日本料理",
                "金刀比羅宮と善通寺のW初詣・きめ細やかなおもてなしの格式"
              ]
            },
            {
              id: 5,
              name: "大江戸温泉物語　ホテルレオマの森",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28098/28098.jpg",
              rating: 3.95,
              reviews: 3503,
              price: "¥8,500〜",
              access: "JR琴平駅より車で15分 /高松空港より車で3０分",
              special: "温泉、グルメバイキング、プール、遊園地！楽しさ全開の温泉ホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28098%2F28098.html",
              story: "丸亀市南部、雄大な讃岐富士（飯野山）を望む丘陵地に広がり、森に囲まれた天然温泉と豪華バイキングがファミリーやグループに大人気の大型リゾートホテル「大江戸温泉物語 ホテルレオマの森」。冬期は隣接するNEWレオマワールドで中四国最大級の「レオマ光ワールド」イルミネーションが開催され、数百万球の圧倒的な光のファンタジーを満喫できます。宿自慢の天然温泉「森の温泉」は、大自然のパノラマを望む露天風呂や広々とした内湯が揃い、身体の芯から温まります。夕食バイキングでは、冬の北海道・海鮮フェアや讃岐うどん、焼きたてステーキなど多彩な豪華メニューが食べ放題。大人から子供まで笑顔あふれる冬の休日を過ごせます。",
              roomTip: "パークビュー和洋室。広々としたバルコニーから冬の澄んだ星空やレオマのイルミネーションを遠望できる快適な客室。",
              gourmetTip: "「冬の創作バイキング」。ライブキッチンで焼き上げる熱々ステーキや揚げたて天ぷら、冬の海鮮握り寿司が食べ放題の豪華ディナー。",
              highlights: [
                "中四国最大級レオマ光ワールド至近・森の天然温泉と豪華食べ放題バイキング",
                "冬の海鮮ディナーバイキング・ライブキッチンステーキと多彩なデザート",
                "ファミリーや三世代旅行に大人気・屋内プールやアミューズメント併設"
              ]
            }
  ];

  const faqs = [
  {
    "q": "総本山善通寺の初詣の見どころと空海ゆかりの参拝スポットは？",
    "a": "総本山善通寺は、弘法大師空海が平安時代初期（807年）に建立した真言宗善通寺派の総本山であり、京都の東寺、高野山金剛峯寺と並ぶ弘法大師三大霊場の一つです。冬の初詣では、伽藍（東院）にそびえる高さ約43メートルの木造五重塔（国重要文化財）や、樹齢千数百年を超える二本の大楠が神聖な雰囲気を醸し出します。誕生院（西院）の御影堂地下には、約100メートルの完全な暗闇を手探りで進み、空海と結縁する「戒壇めぐり（かいだんめぐり）」があり、新年の心身の浄化や開運祈願に多くの参拝者が訪れます。"
  },
  {
    "q": "冬の讃岐うどんの名物「しっぽくうどん」とはどのようなうどんですか？",
    "a": "「しっぽくうどん」は、香川県で晩秋（11月頃）から冬期（2月頃まで）にかけて提供される冬限定の代表的な郷土うどんです。大根、里芋、人参、ごぼうなどの根菜類、油揚げ、豚肉や鶏肉を、いりこ出汁と醤油ベースの甘辛いつゆでじっくりと煮込み、茹でたての温かいうどんの上に豪快に盛り付けます。野菜の滋味が溶け出した優しい出汁と、熱々のコシのあるうどんが冷えた身体を芯から温めてくれます。丸亀市や善通寺市周辺の老舗うどん店でも冬の名物として大人気です。"
  },
  {
    "q": "丸亀名物「骨付鳥」の特徴と注文時のポイントは？",
    "a": "丸亀市が発祥のご当地グルメ「骨付鳥（ほねつきどり）」は、鶏の骨付きもも肉にニンニク、塩、胡椒、唐辛子などを効かせ、特製のオーブンで皮はパリッと香ばしく、中はジューシーに焼き上げた料理です。肉質が引き締まり噛むほどに濃厚な旨味が溢れる「おや（親どり）」と、身が柔らかくふっくらジューシーな「ひな（若どり）」の2種類があり、好みに応じて選べます。皿に残ったスパイシーな肉汁（油）に、付け合わせのキャベツや名物の「むすび（おにぎり）」を浸して食べるのが本場の通の食べ方です。"
  },
  {
    "q": "丸亀城の冬の見どころと夜間ライトアップについて教えてください。",
    "a": "丸亀城は「石垣の名城」として名高く、内堀から天守にかけて積み上げられた石垣の総高は約60メートルで日本一を誇ります。扇の勾配と呼ばれる美しい曲線美を描く石垣の上に、現存十二天守の一つである木造三層の天守閣が鎮座しています。冬の澄んだ空気の中、天守閣からは瀬戸大橋や讃岐富士（飯野山）を一望できます。日没後は石垣と天守が美しくライトアップされ、夜空に浮かび上がる壮大な城郭のシルエットは必見です。"
  },
  {
    "q": "高松空港やJR丸亀駅からのアクセスと周遊のコツは？",
    "a": "羽田・成田空港から高松空港へ到着後、リムジンバスで丸亀駅まで約1時間15分です。鉄道の場合は、岡山駅から瀬戸大橋線（特急しおかぜ・南風など）を利用すれば約30分で丸亀駅に直通します。丸亀駅から善通寺駅まではJR土讃線で約10分と非常に近接しています。冬期のうどん店巡りや善通寺、丸亀城、こんぴら温泉を効率よく巡るにはレンタカーの利用が最も便利です。四国は雪道になることは比較的稀ですが、山間部へ向かう場合は念のため天気予報をご確認ください。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-kagawa-zentsuji-marugame-castle-udon-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-kagawa-zentsuji-marugame-castle-udon-stay"
        },
        "headline": "【11・12・1月香川】善通寺＆丸亀！弘法大師生誕地・総本山善通寺の雪の初詣と丸亀城石垣ライトアップ・冬の讃岐しっぽくうどん＆骨付鳥名宿5選",
        "description": "真言宗開祖・弘法大師空海の御生誕の地であり四国霊場第75番札所の総本山善通寺での荘厳な初詣。日本一の石垣美を誇る現存十二天守・丸亀城の冬のライトアップや、冬期限定の具だくさん郷土麺「讃岐しっぽくうどん」、丸亀発祥のスパイシーな「骨付鳥」。瀬戸内海を望む展望風呂や名湯こんぴら温泉に癒やされる厳選名宿5選を徹底特集します。",
        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/675/675.jpg",
        "datePublished": "2026-10-04T21:00:00+09:00",
        "dateModified": "2026-10-04T21:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "地域の宿探訪",
          "url": "https://croud-travel.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-kagawa-zentsuji-marugame-castle-udon-stay"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.com/winter-kagawa-zentsuji-marugame-castle-udon-stay#breadcrumb",
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
            "name": "特集一覧",
            "item": "https://croud-travel.com/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "善通寺＆丸亀・弘法大師初詣としっぽくうどん名宿",
            "item": "https://croud-travel.com/winter-kagawa-zentsuji-marugame-castle-udon-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-kagawa-zentsuji-marugame-castle-udon-stay#faq",
        "mainEntity": faqs.map(f => ({
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


  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 py-4 text-xs font-semibold text-stone-500 flex items-center gap-2">
        <Link href="/" className="hover:text-amber-700 transition">ホーム</Link>
        <span>/</span>
        <Link href="/features" className="hover:text-amber-700 transition">特集一覧</Link>
        <span>/</span>
        <span className="text-stone-800">香川・善通寺＆丸亀・初詣としっぽくうどん名宿</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="relative bg-gradient-to-b from-stone-900 via-stone-800 to-orange-950 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs font-bold tracking-wide">
            <Landmark className="w-3.5 h-3.5 text-orange-400" />
            11月〜1月限定・讃岐の聖地初詣＆熱々冬グルメ特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight md:leading-snug text-balance">
            【11・12・1月香川】善通寺＆丸亀！弘法大師生誕地・総本山善通寺の雪の初詣と丸亀城石垣ライトアップ・冬の讃岐しっぽくうどん＆骨付鳥名宿5選
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            空海御生誕の霊場・総本山善通寺での厳かな初詣と戒壇めぐり。日本一高い石垣を誇る名城・丸亀城の冬の夜間ライトアップ。冬期限定の根菜たっぷり「しっぽくうどん」と熱々スパイシーな「骨付鳥」を味わい、瀬戸内海展望露天やこんぴら温泉で寛ぐ冬旅へ。
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-3 text-xs text-orange-200">
            <span className="flex items-center gap-1.5"><Landmark className="w-4 h-4" /> 弘法大師三大霊場・善通寺</span>
            <span className="flex items-center gap-1.5"><Castle className="w-4 h-4" /> 現存十二天守・丸亀城</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4" /> 冬限定しっぽくうどん＆骨付鳥</span>
            <span className="flex items-center gap-1.5"><Flame className="w-4 h-4" /> こんぴら温泉＆瀬戸大橋夜景</span>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">

        {/* イントロダクション解説 */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-6">
          <div className="border-l-4 border-orange-600 pl-4">
            <span className="text-xs font-bold text-orange-700 tracking-wider uppercase">Winter Highlights</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              冬の中讃岐が心を掴む理由：空海の祈りが宿る古刹と湯気立ち上る冬の讃岐うどん
            </h2>
          </div>
          <div className="prose text-stone-700 text-sm md:text-base leading-relaxed space-y-4">
            <p>
              香川県中部に広がる丸亀市と善通寺市。温暖な瀬戸内海気候に恵まれ、冬でも青空が広がりやすいこの地域は、11月から1月にかけて初詣と美食を巡る旅人にとって絶好の季節を迎えます。その中心となるのが、真言宗の宗祖・弘法大師空海の誕生地として千二百年以上の歴史を刻む四国霊場第75番札所「総本山善通寺」です。樹齢千有余年の大楠と木造五重塔がそびえる広大な境内は、冬の澄み渡る冷気の中でより一層の神聖さを湛えます。御影堂地下の暗闇を進む「戒壇めぐり」は、新年に自分自身を見つめ直し、新たな心でスタートを切るための特別な体験として全国から多くの参拝者が集まります。
            </p>
            <p>
              一方、丸亀港を望む城下町・丸亀の象徴「丸亀城」は、高さ約60メートルに達する日本一高い石垣群を誇ります。「扇の勾配」と呼ばれる優美な曲線を描く巨石の城壁の上に、白亜の現存十二天守が凛と佇む光景は圧巻。冬の夜には石垣がドラマチックにライトアップされ、夜空に浮かび上がる姿は息を呑む美しさです。
            </p>
            <p>
              冬の香川を訪れたなら絶対に見逃せないのが、11月から冬期限定で登場する讃岐の郷土の味「しっぽくうどん」です。大根、里芋、人参、ごぼうなどの根菜類と油揚げや鶏肉を出汁でじっくり煮込み、熱々のうどんにたっぷりかけた一杯は、野菜の優しい甘みが染み渡る冬ならではの至福。さらに、丸亀発祥のご当地グルメ「骨付鳥」は、ニンニクと胡椒がガツンと効いたスパイシーな味わいで、パリッとした皮と溢れる肉汁が旅の夜を盛り上げます。瀬戸大橋の夜景を望むホテルや門前町の名湯こんぴら温泉で心身を解きほぐす、充実の冬旅をお届けします。
            </p>
          </div>
        </section>

        {/* 厳選ホテル5選 */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-orange-700 tracking-wider uppercase">Selected Ryokan & Hotels</span>
            <h2 className="text-2xl md:text-3xl font-black text-stone-900">
              善通寺＆丸亀！初詣と讃岐グルメを満喫する厳選名宿5選
            </h2>
            <p className="text-stone-600 text-xs md:text-sm">
              楽天トラベルで支持を集め、瀬戸内海の夜景や名湯温泉・アクセスの良さを誇るホテル＆旅館
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((hotel) => (
              <article key={hotel.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition">
                <div className="p-6 md:p-8 space-y-6">
                  {/* ヘッダー情報 */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="bg-orange-600 text-white text-xs font-black px-2.5 py-0.5 rounded-full">
                          第{hotel.id}選
                        </span>
                        <div className="flex items-center text-amber-500 text-xs font-bold">
                          <Star className="w-3.5 h-3.5 fill-current mr-1" />
                          <span>{hotel.rating}</span>
                          <span className="text-stone-400 ml-1">({hotel.reviews}件)</span>
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-stone-900 font-journal-serif">
                        {hotel.name}
                      </h3>
                      <p className="text-xs text-stone-500 flex items-center gap-1.5 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
                        {hotel.access}
                      </p>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="text-xs text-stone-400 block">参考宿泊料金（1名）</span>
                      <span className="text-lg md:text-xl font-black text-orange-700">{hotel.price}</span>
                    </div>
                  </div>

                  {/* 宿の詳細ストーリー */}
                  <div className="prose text-stone-700 text-sm md:text-base leading-relaxed">
                    <p>{hotel.story}</p>
                  </div>

                  {/* ハイライト3点 */}
                  <div className="bg-orange-50/50 rounded-2xl p-4 md:p-5 border border-orange-100 space-y-2.5">
                    <h4 className="text-xs font-black text-orange-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                      この宿の注目ポイント＆こだわり
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs text-stone-700">
                      {hotel.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 客室・グルメのアドバイス */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60">
                      <span className="font-bold text-stone-900 flex items-center gap-1 mb-1">
                        <Building className="w-3.5 h-3.5 text-orange-700" /> おすすめ客室
                      </span>
                      <p className="text-stone-600 leading-relaxed">{hotel.roomTip}</p>
                    </div>
                    <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60">
                      <span className="font-bold text-stone-900 flex items-center gap-1 mb-1">
                        <Utensils className="w-3.5 h-3.5 text-orange-700" /> 冬の美食プラン
                      </span>
                      <p className="text-stone-600 leading-relaxed">{hotel.gourmetTip}</p>
                    </div>
                  </div>

                  {/* 予約リンク */}
                  <div className="pt-2 text-center md:text-right">
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-orange-700 text-white font-bold text-xs md:text-sm hover:from-orange-700 hover:to-orange-800 shadow-sm hover:shadow transition"
                    >
                      楽天トラベルで空室・プラン詳細を見る
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 冬の讃岐を味わう三大美味＆文化セクション */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="border-l-4 border-orange-600 pl-4">
            <span className="text-xs font-bold text-orange-700 tracking-wider uppercase">Local Food & Culture</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              冬の香川で絶対に味わうべき三大味覚：しっぽくうどん・骨付鳥・オリーブ牛
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-stone-700">
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-3">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-600" />
                冬の風物詩「讃岐しっぽくうどん」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                晩秋から冬期限定で讃岐のうどん店に登場する郷土麺。大根、人参、里芋、ごぼうなどの根菜類と油揚げ、鶏肉を、いりこ出汁と醤油でじっくり煮込み、熱々のうどんに出汁ごとたっぷりとかけた一杯。野菜の甘みと出汁の深い旨味が染み渡る冬の滋味です。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-3">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-600" />
                丸亀発祥のスパイシー「骨付鳥」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                ニンニクと胡椒が効いた特製スパイスで香ばしく焼き上げる丸亀の名物グルメ。しっかりとした歯ごたえで噛むほどに旨味が溢れる「おや（親どり）」と、柔らかく肉汁たっぷりの「ひな（若どり）」の2種。皿に残った熱々の旨味脂におにぎりを浸して食べるのが本場の極意です。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-3">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-600" />
                小豆島オリーブ育ち「オリーブ牛」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                香川県の県木であるオリーブの搾り果実を与えて育てた讃岐牛の最高峰ブランド。オレイン酸と抗酸化成分が豊富で、さっぱりとした後味とコクのある旨味が特徴。冬の冷えた夜に、ステーキやすき焼き小鍋で味わえば、口の中でとろける甘みを堪能できます。
              </p>
            </div>
          </div>
        </section>

        {/* 空海の土木遺産と丸亀うちわの歴史コラム */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="border-l-4 border-orange-600 pl-4">
            <span className="text-xs font-bold text-orange-700 tracking-wider uppercase">History & Heritage</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              空海の奇跡・満濃池修築の土木遺産と、丸亀藩が生んだ「丸亀うちわ」の技
            </h2>
          </div>
          <div className="prose text-stone-700 text-sm md:text-base leading-relaxed space-y-4">
            <p>
              善通寺市が生んだ偉人・弘法大師空海は、宗教家にとどまらず類まれな土木技術者でもありました。その象徴が善通寺の南に位置する日本最大の農業用ため池「満濃池（まんのういけ）」です。度重なる決壊で民が苦しんでいた池の堤防を、唐で学んだアーチ型ダムの最新土木技術と人々の熱狂的な信望を集めてわずか3ヶ月で修築させた伝説は、今なお讃岐の人々の誇りとして語り継がれています。
            </p>
            <p>
              また、城下町・丸亀は国の伝統的工芸品「丸亀うちわ」の全国シェア約9割を誇る産地です。江戸時代、丸亀藩が武士の内職として奨励し、金刀比羅宮への参拝客（こんぴら参り）の土産物として「渋うちわ」が大流行したことが発展の礎となりました。竹の節を巧みに裂いて広げる職人の繊細な手仕事は、丸亀城の堅固な石垣美とともに讃岐の手仕事文化の深さを物語っています。
            </p>
          </div>
        </section>

        {/* 11・12・1月モデルコース */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="border-l-4 border-orange-600 pl-4">
            <span className="text-xs font-bold text-orange-700 tracking-wider uppercase">Model Itinerary</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              【1泊2日】空海の善通寺初詣と丸亀城石垣ライトアップ・讃岐グルメ満喫コース
            </h2>
          </div>

          <div className="space-y-6 text-sm text-stone-700">
            <div className="relative pl-6 border-l-2 border-orange-200 space-y-4">
              <div className="relative">
                <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-orange-600 border-2 border-white" />
                <h4 className="font-bold text-stone-900 text-base">1日目：空海御生誕の総本山善通寺初詣と夜の丸亀城</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  午前、高松空港またはJR丸亀駅よりスタート。善通寺市へ向かい、まずは名店で冬名物の熱々「しっぽくうどん」を味わう。続いて弘法大師御誕生所「総本山善通寺」へ。五重塔や樹齢千年の大楠を仰ぎ、御影堂地下の「戒壇めぐり」で暗闇を進みながら新年の開運を祈願。午後は丸亀市街へ移動し、名城・丸亀城へ登城。日本一高い石垣群と現存天守を見学し、天守閣から瀬戸内海の多島美を一望。夕刻ホテルにチェックイン後、日没後にライトアップされた丸亀城の幻想的な石垣を夜間散策。夜は丸亀名物「一鶴」本店などで熱々スパイシーな骨付鳥とお酒に舌鼓。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-orange-600 border-2 border-white" />
                <h4 className="font-bold text-stone-900 text-base">2日目：金刀比羅宮門前町散策と瀬戸内海の絶景パノラマ</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  朝、展望風呂で爽快な朝湯を愉しみ、温かい讃岐うどんの朝食をいただく。チェックアウト後、車で約20分の「金刀比羅宮」へ足を伸ばし、本宮までの石段（785段）を登って讃岐平野のパノラマを展望。参道で温かい甘酒や灸まんをお土産に購入。午後は瀬戸大橋記念公園に立ち寄り、雄大な瀬戸大橋の偉容を間近に体感。讃岐うどんの製麺所で本場の手打ちうどんをお土産に買い求め、充実した旅を締めくくる。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 冬のアクセス＆城郭・初詣散策ガイド */}
        <section className="bg-orange-50/60 rounded-3xl p-6 md:p-10 border border-orange-200/80 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-orange-900 font-bold text-base">
            <AlertTriangle className="w-5 h-5 text-orange-700 shrink-0" />
            <span>冬の中讃岐旅行・快適アクセス＆散策ガイド</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700 leading-relaxed">
            <div className="space-y-2">
              <strong className="text-stone-900 block font-bold">丸亀城の登城坂道と足元注意</strong>
              <p>
                丸亀城の天守閣へ登る「見返り坂」は傾斜が約20度と非常に急な石畳の坂道です。冬の朝夕は露や霜で足元が滑りやすくなるため、ヒールや滑りやすい靴を避け、スニーカーなどの歩きやすい靴でお越しください。
              </p>
            </div>
            <div className="space-y-2">
              <strong className="text-stone-900 block font-bold">善通寺の戒壇めぐりと初詣参拝マナー</strong>
              <p>
                善通寺の戒壇めぐりは御影堂の地下約100mの完全な暗闇を手探りで歩く神聖な修行です。私語を慎み、左手で壁伝いに静かに進みましょう。正月三が日は周辺道路や駐車場が混雑するため、午前中の早い時間帯の参拝がおすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* よくある質問（FAQ） */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="border-l-4 border-orange-600 pl-4">
            <span className="text-xs font-bold text-orange-700 tracking-wider uppercase">Frequently Asked Questions</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              冬の善通寺・丸亀旅行に関するよくある質問
            </h2>
          </div>

          <div className="divide-y divide-stone-100">
            {faqs.map((f, idx) => (
              <div key={idx} className="py-4 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm md:text-base flex items-start gap-2">
                  <span className="text-orange-600 font-black">Q.</span>
                  <span>{f.q}</span>
                </h3>
                <p className="text-xs md:text-sm text-stone-600 pl-6 leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 内部リンク・関連特集 */}
        <section className="bg-stone-100 rounded-3xl p-6 md:p-8 space-y-4">
          <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
            あわせて読みたい！四国の冬旅＆名湯特集
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <Link href="/winter-kagawa-kotohira-onsen-konpira-olive-beef-stay" className="p-3 bg-white rounded-xl hover:text-orange-700 shadow-xs transition">
              ⛩️ こんぴら温泉郷！金刀比羅宮初詣とオリーブ牛名宿
            </Link>
            <Link href="/winter-kagawa-takamatsu-ritsurin-yashima-olive-hamachi-udon-stay" className="p-3 bg-white rounded-xl hover:text-orange-700 shadow-xs transition">
              🌊 高松栗林公園の冬景色＆オリーブハマチ・うどん宿
            </Link>
            <Link href="/winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay" className="p-3 bg-white rounded-xl hover:text-orange-700 shadow-xs transition">
              ♨️ 道後温泉本館！冬の伊予鯛めしと名湯名宿
            </Link>
            <Link href="/winter-tokushima-naruto-onsen-uzushio-naruto-tai-stay" className="p-3 bg-white rounded-xl hover:text-orange-700 shadow-xs transition">
              🌀 鳴門温泉＆渦潮！冬の鳴門鯛と絶景リゾート
            </Link>
            <Link href="/campaigns/autumn-gourmet-travel" className="p-3 bg-white rounded-xl hover:text-orange-700 shadow-xs transition">
              🍁 全国の旬の味覚＆極上温泉宿特集まとめ
            </Link>
          </div>
        </section>

      </main>
    
      <HubRelatedPosts currentSlug="winter-kagawa-zentsuji-marugame-castle-udon-stay" />
</div>
  );
}
