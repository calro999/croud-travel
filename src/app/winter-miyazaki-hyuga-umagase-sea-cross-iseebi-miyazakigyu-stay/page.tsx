import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye, Shell
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月宮崎：冬旬「日向灘伊勢海老」！名宿5選',
  description: '冬でも温暖な南国・宮崎の日豊海岸。11〜1月の冬シーズンは湿度が低く大気が澄み渡り。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '馬ヶ背 絶景, クルスの海 初日の出, 大御神社 初詣, 日向灘 伊勢海老, 宮崎牛, ホテルベルフォート日向, エンシティホテル延岡, チキン南蛮 直ちゃん, 延岡 ホテル, 宮崎 冬旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-miyazaki-hyuga-umagase-sea-cross-iseebi-miyazakigyu-stay'
  },
  openGraph: {
    title: '11・12・1月宮崎：冬旬「日向灘伊勢海老」！名宿5選',
    description: '冬でも温暖な南国・宮崎の日豊海岸。11〜1月の冬シーズンは湿度が低く大気が澄み渡り。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-miyazaki-hyuga-umagase-sea-cross-iseebi-miyazakigyu-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の日向岬・馬ヶ背の断崖絶壁と紺碧に輝く太平洋の大パノラマ'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月宮崎：日向岬「馬ヶ背」断崖絶壁と「クルスの海」新春祈願！冬旬「日向灘伊勢海老」＆宮崎牛・延岡名宿5選",
    description: "冬でも温暖な南国・宮崎の日豊海岸。11〜1月の冬シーズンは湿度が低く大気が澄み渡り、紺碧に輝く太平洋と高さ70mの柱状節理「馬ヶ背」の断崖絶壁が圧倒的なスケールで迫ります。十字の奇岩に願いを込める「クルスの海」や日向のお伊勢さま「大御神社」で迎える厳かな新春初詣。日向灘の荒波で身が引き締まった冬旬「日向灘伊勢海老」の活造り・味噌汁と、日本一の称号を誇る「宮崎牛」の極上鉄板焼き、延岡発祥の元祖チキン南蛮。心地よい南国ステイを満喫する厳選名宿5選を徹底特集。",
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export const dynamic = 'force-static';

export default function MiyazakiHyugaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月宮崎】日向岬「馬ヶ背」断崖絶壁と「クルスの海」新春祈願！冬旬「日向灘伊勢海老」＆宮崎牛・延岡名宿5選",
    "description": "冬でも温暖な南国・宮崎の日豊海岸。11〜1月の冬シーズンは湿度が低く大気が澄み渡り、紺碧に輝く太平洋と高さ70mの柱状節理「馬ヶ背」の断崖絶壁が圧倒的なスケールで迫ります。十字の奇岩に願いを込める「クルスの海」や日向のお伊勢さま「大御神社」で迎える厳かな新春初詣。日向灘の荒波で身が引き締まった冬旬「日向灘伊勢海老」の活造り・味噌汁と、日本一の称号を誇る「宮崎牛」の極上鉄板焼き、延岡発祥の元祖チキン南蛮。心地よい南国ステイを満喫する厳選名宿5選を徹底特集。",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80",
    "datePublished": "T00:00:00+09:00",
    "dateModified": "T00:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "旅宿クラウド 編集部",
      "url": "https://croud-travel.pages.dev"
    },
    "publisher": {
      "@type": "Organization",
      "name": "旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.pages.dev/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.pages.dev/winter-miyazaki-hyuga-umagase-sea-cross-iseebi-miyazakigyu-stay"
    }
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
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
        "name": "特集一覧",
        "item": "https://croud-travel.pages.dev/features"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "宮崎・日向＆延岡 冬特集",
        "item": "https://croud-travel.pages.dev/winter-miyazaki-hyuga-umagase-sea-cross-iseebi-miyazakigyu-stay"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "冬（11・12・1月）の日向岬「馬ヶ背」の見どころと展望デッキの注意点は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "日向岬・馬ヶ背（うまがせ）は、約1500万年前の火山活動によって形成された柱状節理（ちゅうじょうせつり）の岩肌が、海面から約70mの高さまで垂直に切り立つ国内最大級の断崖絶壁です。2020年に新設されたスケルトン展望デッキ「スカイウォーク」からは、足元に広がる荒波と断崖をガラス越しに見下ろすスリル満点の体験ができます。冬場は日向灘の海水が最も透き通る季節であり、コバルトブルーから深い群青へとグラデーションを描く太平洋の雄大さは息を呑む美しさです。海風が強いため防風ジャケットの着用が必須です。"
        }
      },
      {
        "@type": "Question",
        "name": "「願いが叶うクルスの海」と「大御神社」の新春初詣・パワースポットとしての見どころは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "「願いが叶うクルスの海」は、波の浸食によって岩場が十字（クルス）の形に裂け、隣の小岩と合わせると漢字の「叶」に見えることから、訪れて祈ると願いが叶うとされる神秘の海岸です。元旦には初日の出を拝みながら新年の願掛けをする人々で賑わいます。また「大御神社（おおみじんじゃ）」は天照大御神を祀り「日向のお伊勢さま」と称される絶景古社。境内には国歌に詠まれる日本一の「さざれ石群」があり、境内奥の鵜戸神社洞窟内からは、入口の光が昇り龍に見える「ドラゴンアイ（昇龍）」が現れることで大人気のパワースポットです。"
        }
      },
      {
        "@type": "Question",
        "name": "冬旬の「日向灘伊勢海老」と「宮崎牛」の贅沢な味わい方は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宮崎県の日向灘沿岸（日向市・延岡市・門川町）では、毎年秋の解禁から翌年春にかけて「伊勢海老まつり」が開催され、冬に身の甘みと弾力が最高潮に達します。黒潮の激しい潮流にもまれた伊勢海老は、透き通る活造りでプリプリの甘みを堪能したあと、頭部を豪快に割った濃厚な味噌汁（赤だし）で最後の一滴まで旨味を味わい尽くせます。また、全国和牛能力共進会で史上初の内閣総理大臣賞連続受賞を果たした「宮崎牛」の極上ステーキや陶板焼きと合わせれば、南国宮崎の山海の贅を極めた冬の饗宴となります。"
        }
      },
      {
        "@type": "Question",
        "name": "延岡発祥のグルメ「元祖チキン南蛮」の名店と特徴は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "全国的に人気の「チキン南蛮」は、宮崎県延岡市が発祥の地です。延岡のチキン南蛮には大きく2つの流派があります。一つは「直ちゃん」に代表される、タルタルソースをかけず甘酢のみでシンプルにいただく元祖スタイル。ふんわり揚がった鶏むね肉に染み込む爽やかな甘酢が絶妙です。もう一つは「おぐら」に代表される、自家製タルタルソースをたっぷりとかける濃厚スタイル。どちらも延岡市街地で本場の味を堪能できるため、食べ比べも冬のグルメ旅の大きな楽しみです。"
        }
      },
      {
        "@type": "Question",
        "name": "冬の日向・延岡へのアクセスと冬の道路環境（積雪・路面凍結）は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宮崎県北エリアの日向・延岡は、冬期でも日中の気温が12〜15度程度まで上がる日が多く、南国特有の温暖で過ごしやすい気候です。海岸沿いの道路（国道10号線や東九州自動車道）で積雪や路面凍結が起こることは極めて稀で、ノーマルタイヤでの快適なドライブが楽しめます。アクセスは宮崎空港からJR日豊本線の特急「にちりん」「ひゅうが」で日向市駅まで約50分、延岡駅まで約1時間15分。大分方面からも特急や高速道路でスムーズにアクセス可能です。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "ホテル　ベルフォート日向",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/413/413.jpg",
              rating: 3.73,
              reviews: 1048,
              price: "¥12,880〜",
              access: "JR日向市駅徒歩5分。コンビニ1分。市役所4分。市街地中心。光インターネット使い放題。和洋2つのレストランにグルメ満載。",
              special: "日向市街中心部。交通至便。ビジネス、レジャー両対応。婚礼、宴会、会議等の施設も充実。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F413%2F413.html",
              story: "JR日向市駅から徒歩約5分、中心街に位置し日向岬や大御神社への観光拠点として随一の利便性を誇るシティホテル「ホテル ベルフォート日向」。上品で落ち着きのあるロビーと広々とした客室が長旅の疲労を優しく癒やします。館内レストランでは、日向灘で水揚げされた新鮮な海の幸や、冬に旬を迎える獲れたて伊勢海老、宮崎県産黒毛和牛を用いた贅沢な会席料理を提供。サーフィンの聖地・お倉ヶ浜へのアクセスも良好で、爽快な冬のシーサイドステイを約束します。全室個別空調と清潔な寝具が完備され、快適な睡眠環境が整います。",
              roomTip: "デラックスツインまたはコーナーダブル。ゆったりとした広さの客室で、大きな荷物やカメラ機材をゆったり整理できる快適空間。",
              gourmetTip: "「日向灘冬の海鮮御膳」。冬の伊勢海老のお造りや天ぷら、濃厚な頭の味噌汁、宮崎牛の陶板焼きが揃う豪華な郷土ディナー。",
              highlights: [
                "日向市駅徒歩5分の中心地・日向岬馬ヶ背や大御神社へのドライブ拠点に最適" ,
                "日向灘の冬旬伊勢海老会席と宮崎牛陶板焼き・お倉ヶ浜サーフスポット至近" ,
                "広々とした客室で機材の整理も快適・南国日向の穏やかな風情を満喫"
              ]
            },
            {
              id: 2,
              name: "エンシティホテル延岡",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16366/16366.jpg",
              rating: 4.35,
              reviews: 2577,
              price: "¥4,000〜",
              access: "JR延岡駅～徒歩約7分♪徒歩にて歓楽街約3分・官公庁約10分★地下駐車場完備（先着順）",
              special: "清流・五ヶ瀬河畔、市の中心地。シティ＆リゾート機能と施設をエコノミー価格で提供。全館　Wi-Fi無料",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16366%2F16366.html",
              story: "延岡市街地を流れる清流・五ヶ瀬川のほとりに聳え立ち、県北エリア随一のスケールと格式を誇るハイクラスホテル「エンシティホテル延岡」。川面に映る冬の街明かりや愛宕山の山並みを望む眺望が自慢です。館内には和食・洋食・中華の多彩なレストランが揃い、元祖チキン南蛮をはじめとする延岡のソウルフードから本格的な宮崎牛コースまで幅広く対応。洗練されたサービスと清潔感あふれるモダン客室は、ビジネスから家族旅行まで絶大な信頼を集めています。",
              roomTip: "リバービューデラックスツイン。五ヶ瀬川の静かな水面と冬の朝焼けを眺めながら、淹れたてのコーヒーを楽しむ上質ルーム。",
              gourmetTip: "レストラン「カメリア」の特選宮崎牛ディナー。シェフが丁寧に火入れした宮崎牛サーロインと、地元契約農家の冬野菜のハーモニー。",
              highlights: [
                "五ヶ瀬川を望む県北随一のハイクラスホテル・特選宮崎牛コースと多彩なレストラン" ,
                "リバービュー客室からの冬景色・地元農家直送の旬食材を味わう上質ディナー" ,
                "格式あるロビーとおもてなし・延岡のシンボルホテルとしての高い信頼性"
              ]
            },
            {
              id: 3,
              name: "延岡アーバンホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/25110/25110.jpg",
              rating: 3.97,
              reviews: 1064,
              price: "¥4,785〜",
              access: "ＪＲ日豊本線・延岡駅～徒歩１５分・タクシー５分",
              special: "Ｗｉ-Ｆｉ全館対応★好評手作り朝食バイキング★ＪＲ延岡駅から車で５分★延岡の中心地・飲食店街の真ん中",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F25110%2F25110.html",
              story: "延岡の繁華街・中央通りの中心に位置し、夜のグルメ探訪や地酒巡りに抜群のフットワークを誇る「延岡アーバンホテル」。清潔で機能的な客室には高速インターネットや個別空調、快適な寝具が整い、細やかな気配りが好評です。周辺には地元延岡の居酒屋や鳥料理店、元祖チキン南蛮発祥の名店が徒歩圏内に点在。日向岬の絶景巡りや高千穂方面へのドライブ拠点としても使い勝手抜群のシティホテルです。",
              roomTip: "スタンダードダブルまたはツインルーム。無駄のない導線と充実したコンセント配置で、モバイル機器の充電もストレスフリー。",
              gourmetTip: "ホテル徒歩3分の元祖チキン南蛮専門店「直ちゃん」または「おぐら出北店」で味わう、ジューシーな鶏肉と秘伝タレの共演。",
              highlights: [
                "延岡繁華街中央通りの中心・元祖チキン南蛮の名店や地酒居酒屋へ徒歩すぐ" ,
                "清潔な客室と高速Wi-Fi完備・日向岬観光と高千穂・門川周遊のフットワーク抜群" ,
                "リーズナブルな価格設定・夜のグルメ散策を存分に楽しめる好ロケーション"
              ]
            },
            {
              id: 4,
              name: "アパホテル〈宮崎延岡駅前〉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/158887/158887.jpg",
              rating: 3.93,
              reviews: 783,
              price: "¥3,500〜",
              access: "■JR日豊本線「延岡駅」 徒歩1分 ■宮崎空港から約80分 ■コンビニ徒歩1分",
              special: "■駅前と繁華街、市内に2つのアパホテル！目的に応じてご予約下さい。延岡駅から徒歩1分の駅近ホテル！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158887%2F158887.html",
              story: "JR延岡駅西口から徒歩わずか1分という至便な立地に佇む「アパホテル〈宮崎延岡駅前〉」。洗練されたアパホテル仕様の高品質・高機能空間で、全室に大型液晶テレビ、快眠を追求したオリジナルベッド「Cloud fit（クラウドフィット）」を完備。非接触の自動チェックイン機やセキュリティエレベーターなど最新の設備が整い、冬の日豊海岸周遊や鉄道旅を身軽かつ安全に楽しみたい旅行者に選ばれています。",
              roomTip: "スタンダードルーム。雲の上にいるような寝心地のベッドが、冬の海岸線ウォーキングで疲れた身体を深くリフレッシュ。",
              gourmetTip: "延岡駅周辺の郷土料理処で味わう「地鶏の炭火焼き」と、日向灘の活締め真鯛や冬カンパチのお刺身、宮崎の本格芋焼酎。",
              highlights: [
                "JR延岡駅西口徒歩1分・快眠ベッドCloud fitと最新設備で快適ステイ" ,
                "大型液晶テレビ＆セキュリティエレベーター・身軽な一人旅や出張にもジャストフィット" ,
                "駅前ロータリー直結の圧倒的アクセス・早朝のクルスの海初日の出ドライブに最適"
              ]
            },
            {
              id: 5,
              name: "延岡ロイヤルホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12633/12633.jpg",
              rating: 4.03,
              reviews: 852,
              price: "¥3,500〜",
              access: "【JR延岡駅】より徒歩10分★【延岡IC】より車10分★繁華街徒歩圏内★駐車場完備★",
              special: "★朝食無料★フリードリンク★コンビニ徒歩3分★全客室WiFi完備★繁華街徒歩圏内★未就学児お子様無料",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12633%2F12633.html",
              story: "延岡市の中心を流れる大瀬川の河畔、船倉町の落ち着いた一角に位置する「延岡ロイヤルホテル」。静かなリバーサイドの環境と温かな家族的サービスが魅力です。全室無料Wi-Fiや個別空調、駐車場も完備され、マイカーでの日豊海岸ドライブ旅行に最適。朝食には地元のお米と温かいお味噌汁、焼き魚が並ぶ和朝食が好評で、一日の観光に向けた元気をしっかりとチャージできます。",
              roomTip: "リバーサイドツインルーム。川面を渡る清らかな風を感じながら、静かに旅の記録を綴ることができる居心地の良い客室。",
              gourmetTip: "門川港直送の冬の名物「金鱧（きんはも）」や、延岡名物「鮎のうるか」、地場産冬野菜の天ぷらと地酒「千徳」のペアリング。",
              highlights: [
                "大瀬川河畔の静寂に佇むリバーサイドホテル・温かな朝食と無料駐車場完備" ,
                "門川港直送の冬の鮮魚や地酒千徳を堪能・アットホームで心休まる滞在空間" ,
                "コスパ抜群の実力派・川のせせらぎを聞きながら静かに過ごせる隠れ宿"
              ]
            }
  ];

  const faqsData = [
    {
      q: "冬（11・12・1月）の日向岬「馬ヶ背」の見どころと展望デッキの注意点は？",
      a: "日向岬・馬ヶ背（うまがせ）は、約1500万年前の火山活動によって形成された柱状節理（ちゅうじょうせつり）の岩肌が、海面から約70mの高さまで垂直に切り立つ国内最大級の断崖絶壁です。2020年に新設されたスケルトン展望デッキ「スカイウォーク」からは、足元に広がる荒波と断崖をガラス越しに見下ろすスリル満点の体験ができます。冬場は日向灘の海水が最も透き通る季節であり、コバルトブルーから深い群青へとグラデーションを描く太平洋の雄大さは息を呑む美しさです。海風が強いため防風ジャケットの着用が必須です。"
    },
    {
      q: "「願いが叶うクルスの海」と「大御神社」の新春初詣・パワースポットとしての見どころは？",
      a: "「願いが叶うクルスの海」は、波の浸食によって岩場が十字（クルス）の形に裂け、隣の小岩と合わせると漢字の「叶」に見えることから、訪れて祈ると願いが叶うとされる神秘の海岸です。元旦には初日の出を拝みながら新年の願掛けをする人々で賑わいます。また「大御神社（おおみじんじゃ）」は天照大御神を祀り「日向のお伊勢さま」と称される絶景古社。境内には国歌に詠まれる日本一の「さざれ石群」があり、境内奥の鵜戸神社洞窟内からは、入口の光が昇り龍に見える「ドラゴンアイ（昇龍）」が現れることで大人気のパワースポットです。"
    },
    {
      q: "冬旬の「日向灘伊勢海老」と「宮崎牛」の贅沢な味わい方は？",
      a: "宮崎県の日向灘沿岸（日向市・延岡市・門川町）では、毎年秋の解禁から翌年春にかけて「伊勢海老まつり」が開催され、冬に身の甘みと弾力が最高潮に達します。黒潮の激しい潮流にもまれた伊勢海老は、透き通る活造りでプリプリの甘みを堪能したあと、頭部を豪快に割った濃厚な味噌汁（赤だし）で最後の一滴まで旨味を味わい尽くせます。また、全国和牛能力共進会で史上初の内閣総理大臣賞連続受賞を果たした「宮崎牛」の極上ステーキや陶板焼きと合わせれば、南国宮崎の山海の贅を極めた冬の饗宴となります。"
    },
    {
      q: "延岡発祥のグルメ「元祖チキン南蛮」の名店と特徴は？",
      a: "全国的に人気の「チキン南蛮」は、宮崎県延岡市が発祥の地です。延岡のチキン南蛮には大きく2つの流派があります。一つは「直ちゃん」に代表される、タルタルソースをかけず甘酢のみでシンプルにいただく元祖スタイル。ふんわり揚がった鶏むね肉に染み込む爽やかな甘酢が絶妙です。もう一つは「おぐら」に代表される、自家製タルタルソースをたっぷりとかける濃厚スタイル。どちらも延岡市街地で本場の味を堪能できるため、食べ比べも冬のグルメ旅の大きな楽しみです。"
    },
    {
      q: "冬の日向・延岡へのアクセスと冬の道路環境（積雪・路面凍結）は？",
      a: "宮崎県北エリアの日向・延岡は、冬期でも日中の気温が12〜15度程度まで上がる日が多く、南国特有の温暖で過ごしやすい気候です。海岸沿いの道路（国道10号線や東九州自動車道）で積雪や路面凍結が起こることは極めて稀で、ノーマルタイヤでの快適なドライブが楽しめます。アクセスは宮崎空港からJR日豊本線の特急「にちりん」「ひゅうが」で日向市駅まで約50分、延岡駅まで約1時間15分。大分方面からも特急や高速道路でスムーズにアクセス可能です。"
    }
  ];


  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-amber-950 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-amber-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Snowflake className="w-4 h-4 text-amber-300" />
            <span>九州・宮崎 日豊海岸・日向延岡 冬の特別紀行（11月・12月・1月）</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 font-journal-serif">日向岬「馬ヶ背」断崖絶壁と「クルスの海」新春祈願！<br className="hidden md:inline" /> 冬旬「日向灘伊勢海老」＆宮崎牛・延岡名宿5選</h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mb-6">
            宮崎空港から特急で日向灘沿いを北上。11〜1月の冬期は雨が少なく、日本屈指の透明度を誇る日豊海岸の海が最も深いコバルトブルーに輝く奇跡の季節です。高さ70mの柱状節理の断崖が垂直に切り立つ「馬ヶ背」のスケルトン展望台、十字の波が削り出した奇跡の願掛け地「クルスの海」、そして日向のお伊勢さま「大御神社」での厳かな新春初詣。黒潮の荒波が育む冬旬「日向灘伊勢海老」の活造りと日本一の栄冠に輝く「宮崎牛」、延岡発祥の元祖チキン南蛮に舌鼓を打つ極上の南国冬旅をお届けします。
          </p>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-slate-200">
            <span className="bg-amber-950/70 border border-amber-800/60 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-amber-400" /> 日向岬・馬ヶ背（高さ70mの柱状節理＆スカイウォーク）
            </span>
            <span className="bg-amber-950/70 border border-amber-800/60 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Sunrise className="w-4 h-4 text-amber-400" /> クルスの海・新春初日の出＆大御神社ドラゴンアイ
            </span>
            <span className="bg-amber-950/70 border border-amber-800/60 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Shell className="w-4 h-4 text-amber-400" /> 日向灘伊勢海老まつり＆最高峰宮崎牛・元祖チキン南蛮
            </span>
          </div>
        </div>
      </header>

      {/* Summary Box */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
          <div className="flex items-center gap-2 text-amber-700 font-bold text-lg mb-4">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <h2>日向・延岡 冬旅のハイライト（11・12・1月）</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm leading-relaxed text-slate-600">
            <div className="border-l-2 border-amber-500 pl-4">
              <h3 className="font-bold text-slate-900 mb-1">高さ70mの絶壁美「馬ヶ背」</h3>
              <p>日豊海岸国定公園を代表する奇勝。柱状節理の切り立った断崖と、ガラス張りのスケルトン展望台から見下ろす紺碧の波飛沫は圧倒的な迫力です。</p>
            </div>
            <div className="border-l-2 border-orange-500 pl-4">
              <h3 className="font-bold text-slate-900 mb-1">クルスの海＆大御神社初詣</h3>
              <p>岩が十字に裂け「叶」の文字に見えるクルスの海で新年の願掛け。大御神社では日本一のさざれ石や鵜戸神社の昇龍（ドラゴンアイ）を拝観できます。</p>
            </div>
            <div className="border-l-2 border-red-500 pl-4">
              <h3 className="font-bold text-slate-900 mb-1">日向灘伊勢海老と極上宮崎牛</h3>
              <p>冬に甘みと食感が最高潮に達する日向灘の伊勢海老フルコース。頭の濃厚な味噌汁と、日本一の宮崎牛ステーキで南国美食を満喫します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Guide Section 1 */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-10">
          <span className="text-amber-600 font-bold text-sm tracking-widest uppercase">OCEAN VIEWS & SACRED NATURE</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1 mb-4 font-journal-serif">
            紺碧の太平洋が刻んだ巨岩美と祈りのパワースポット
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mb-6" />
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base md:text-lg space-y-6">
          <p>
            宮崎県の北東部、リアス式海岸が織りなす雄大な景観が広がる日向市と延岡市。11月から1月にかけての冬は、太平洋高気圧に覆われて晴天の日が続き、日中の平均気温も12度前後と本州に比べてはるかに穏やかな南国情緒に包まれます。空気が極限まで澄み渡る冬の朝、水平線の彼方から昇る朝日の光が海面を黄金色に染め上げる瞬間は、日豊海岸ならではの絶景です。
          </p>
          <p>
            日向岬の先端に突き出た「馬ヶ背（うまがせ）」は、約1500万年前の火山活動で吹き出した溶岩が冷却してできた柱状節理の巨岩が、高さ約70m・幅約10mにわたって垂直に裂けた日本一の断崖絶壁。2020年にオープンしたガラス張りの展望台「スカイウォーク」に立つと、足元の透明な床越しに荒波が砕け散る吸い込まれそうな光景が広がり、まるで空中に浮いているかのようなスリルと爽快感を味わえます。白亜の細島灯台を背に、冬の濃紺の海原を眺める時間は格別の贅沢です。
          </p>
          <p>
            馬ヶ背からほど近い「願いが叶うクルスの海」は、波の浸食によって岩場が十字（ポルトガル語でクルス）に削られ、すぐそばの岩と合わせると漢字の「叶」の文字に見えることから名付けられた神秘の地。展望所には「クルスの鐘」が設置され、新年の新たな誓いや大切な人との良縁を祈る初詣客が後を絶ちません。さらに海辺に立つ「大御神社（おおみじんじゃ）」は天照大御神を祀る古社で、境内には国歌に登場する「さざれ石」が日本最大規模で群生。隣接する鵜戸神社の岩窟内からは、外を振り返ると洞窟の隙間が立ち昇る白龍の姿に見える「ドラゴンアイ」が現れ、新春の開運スポットとして絶大な人気を誇ります。
          </p>
          <p>
            また、日向市南部の「美々津（みみつ）」は、神武天皇が東征に出発した「お船出の地」として知られる港町。国の重要伝統的建造物群保存地区に選定されており、白壁と格子窓が連なる江戸末期から明治の回船問屋街を冬の暖かな木漏れ日の中でそぞろ歩きすることができます。
          </p>
        </div>
      </section>

      {/* Detailed Guide Section 2: Gourmet & Culture */}
      <section className="bg-slate-100 py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-red-600 font-bold text-sm tracking-widest uppercase">COASTAL GOURMET & SOUL FOOD</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1 mb-4 font-journal-serif">
              冬の日向灘伊勢海老と宮崎牛・元祖チキン南蛮の饗宴
            </h2>
            <div className="w-16 h-1 bg-red-500 rounded-full mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700 leading-relaxed">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 text-red-700 font-bold text-lg mb-3">
                <Shell className="w-5 h-5 text-red-600" />
                <h3>冬が旬！日向灘伊勢海老の圧倒的甘み</h3>
              </div>
              <p className="text-sm md:text-base mb-4">
                日向灘の荒波と豊かな黒潮プランクトンに育まれた「日向灘伊勢海老」。秋の漁解禁から真冬にかけて身がぎっしりと詰まり、甘みと弾力がピークを迎えます。
              </p>
              <p className="text-sm md:text-base">
                透明感あふれる活造りは、噛むほどに芳醇な甘みが口いっぱいに広がり、鬼殻焼きや天ぷらでも絶品。宴の締めくくりには、頭部を豪快に煮込んだ熱々の「伊勢海老の味噌汁」が振る舞われ、濃厚なエビ味噌と出汁の香りが冬の夜を温かく満たしてくれます。門川港で揚がる冬ハモ（金鱧）の鍋も格別の味覚です。
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-lg mb-3">
                <Utensils className="w-5 h-5 text-amber-600" />
                <h3>日本一の宮崎牛と延岡元祖チキン南蛮</h3>
              </div>
              <p className="text-sm md:text-base mb-4">
                和牛のオリンピックで内閣総理大臣賞を連続受賞した世界に誇る「宮崎牛」。極上の霜降りと融点の低い脂の芳醇なコクは、鉄板焼きステーキや陶板焼きで至高の輝きを放ちます。
              </p>
              <p className="text-sm md:text-base">
                そして延岡市は、全国的に愛される「チキン南蛮」発祥の地。甘酢のみでシンプルに味わう元祖店「直ちゃん」のサクサク感と、自家製タルタルソースが贅沢にかかる「おぐら」のジューシーな旨味は、延岡を訪れたら絶対に外せないソウルフードです。地酒「千徳」の搾りたて新酒や本格芋焼酎との相性も抜群です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Course Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-10">
          <span className="text-amber-600 font-bold text-sm tracking-widest uppercase">OCEAN ROAD ITINERARY</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1 mb-4 font-journal-serif">
            日向岬絶景＆延岡美食 1泊2日 ドライブモデルコース
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mb-6" />
        </div>

        <div className="relative border-l-2 border-amber-200 ml-4 md:ml-6 pl-6 md:pl-8 space-y-8 text-sm md:text-base">
          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-amber-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-amber-600 tracking-wider">DAY 1 / 10:30</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">JR日向市駅到着＆大御神社新春参拝</h3>
            <p className="text-slate-600 mt-1">
              宮崎空港から特急で日向市駅へ。レンタカーを借りて日向のお伊勢さま「大御神社」へ。日本一のさざれ石群を拝観し、奥の鵜戸神社洞窟で奇跡の「昇龍（ドラゴンアイ）」を撮影。
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-amber-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-amber-600 tracking-wider">DAY 1 / 12:30</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">日向岬・馬ヶ背スカイウォーク＆クルスの海</h3>
            <p className="text-slate-600 mt-1">
              日向岬へドライブ。高さ70mの柱状節理の絶壁「馬ヶ背」のスケルトン展望台から冬の太平洋を一望。「願いが叶うクルスの海」で鐘を鳴らし、新年の心願成就を祈願。
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-amber-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-amber-600 tracking-wider">DAY 1 / 15:30</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">美々津の重要伝統的建造物群保存地区散策</h3>
            <p className="text-slate-600 mt-1">
              神武天皇お船出の地として知られる港町・美々津へ。白壁と格子窓が美しい江戸〜明治の回船問屋街を冬散歩。歴史ある町家カフェで休憩。
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-amber-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-amber-600 tracking-wider">DAY 1 / 17:30</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">ホテルチェックイン＆冬旬伊勢海老・宮崎牛ディナー</h3>
            <p className="text-slate-600 mt-1">
              ホテルベルフォート日向またはエンシティホテル延岡へチェックイン。夕食は日向灘の冬の王者「伊勢海老会席」または特選宮崎牛ステーキに舌鼓。地元の本格芋焼酎とともに贅沢な夜を過ごす。
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-amber-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-amber-600 tracking-wider">DAY 2 / 11:30</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">延岡名物「元祖チキン南蛮」ランチ＆城山公園散策</h3>
            <p className="text-slate-600 mt-1">
              延岡のシンボル・城山公園（延岡城跡「千人殺しの石垣」）を散策。お昼には発祥の元祖「直ちゃん」または「おぐら」で熱々ジューシーなチキン南蛮を堪能し、笑顔で帰路へ。
            </p>
          </div>
        </div>
      </section>

      {/* Hotel Recommendation Section */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-400 font-bold text-sm tracking-widest uppercase">HOTEL & RYOKAN SELECTION</span>
            <h2 className="text-2xl md:text-4xl font-black mt-2 mb-4 font-journal-serif">
              日向岬・延岡冬旅に選ばれる厳選名宿5選
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              楽天トラベルAPIから最新の空室状況・宿泊プラン・宿泊者評価を直接取得。日向市駅前のシティホテルから五ヶ瀬川を望む名門ホテル、繁華街至近の機能派ホテルまで厳選しました。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 md:p-8 backdrop-blur shadow-2xl hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Hotel Image & Basic Specs */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="relative rounded-xl overflow-hidden mb-4 aspect-[16/9] sm:aspect-[21/9] bg-slate-950">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={hotel.img} 
                          alt={hotel.name} 
                          className="w-full h-full object-cover hover:scale-105 transition duration-500" 
                        />
                        <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-400/30">
                          厳選宿 #{hotel.id}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
                        <span className="flex items-center gap-1 text-amber-400 font-bold">
                          <Star className="w-4 h-4 fill-amber-400" /> {hotel.rating}
                        </span>
                        <span>クチコミ {hotel.reviews.toLocaleString()}件</span>
                        <span className="text-amber-300 font-bold">{hotel.price}</span>
                      </div>
                      <p className="text-xs text-slate-400 flex items-start gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                        <span>{hotel.access}</span>
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-700/60 hidden lg:block">
                      <a 
                        href={hotel.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold py-3 px-4 rounded-xl text-center block transition shadow-lg shadow-amber-900/30 text-sm"
                      >
                        楽天トラベルで空室・プランを見る <ExternalLink className="w-4 h-4 inline-block ml-1" />
                      </a>
                    </div>
                  </div>

                  {/* Hotel Details */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-white mb-3 font-journal-serif">
                        {hotel.name}
                      </h3>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-5">
                        {hotel.story}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-5">
                        {hotel.highlights.map((hl: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tips Boxes */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                        <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-700/50">
                          <span className="text-amber-400 font-bold block mb-1">【客室の選び方】</span>
                          <span className="text-slate-300 leading-normal">{hotel.roomTip}</span>
                        </div>
                        <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-700/50">
                          <span className="text-orange-400 font-bold block mb-1">【料理のこだわり】</span>
                          <span className="text-slate-300 leading-normal">{hotel.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 block lg:hidden">
                      <a 
                        href={hotel.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold py-3 px-4 rounded-xl text-center block transition shadow-lg shadow-amber-900/30 text-sm"
                      >
                        楽天トラベルで空室・プランを見る <ExternalLink className="w-4 h-4 inline-block ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-10 text-center">
          <span className="text-amber-600 font-bold text-sm tracking-widest uppercase">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1 mb-3 font-journal-serif">
            冬の日向岬・延岡旅行 よくある質問
          </h2>
          <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto" />
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqsData.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded font-black shrink-0 mt-0.5">Q</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Navigation & Related Links */}
      <section className="bg-slate-100 py-12 px-4 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-slate-500 font-bold text-xs tracking-widest uppercase">RELATED WINTER FEATURES</span>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
              あわせて読みたい冬の厳選旅行特集
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-8">
            <Link 
              href="/winter-miyazaki-aoshima-onsen-miyazakigyu-iseebi-resort-stay"
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-amber-500 transition hover:shadow-md group block"
            >
              <div className="text-amber-600 font-bold text-xs mb-1">宮崎・青島＆日南</div>
              <div className="font-bold text-slate-900 group-hover:text-amber-600 transition mb-2">
                青島神社新春初詣と鬼の洗濯板・太平洋初日の出と宮崎牛温泉リゾート
              </div>
              <p className="text-xs text-slate-500 line-clamp-2">
                宮崎南部を代表する神話の聖地・青島。縁結び初詣と海を望む青島温泉、宮崎牛の贅沢ステーキを味わう特集。
              </p>
            </Link>

            <Link 
              href="/winter-miyazaki-takachiho-yokagura-gorge-takachihogyu-stay"
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-amber-500 transition hover:shadow-md group block"
            >
              <div className="text-amber-600 font-bold text-xs mb-1">宮崎・高千穂＆奥日向</div>
              <div className="font-bold text-slate-900 group-hover:text-amber-600 transition mb-2">
                高千穂峡の冬静寂と夜神楽33番・天安河原初詣＆高千穂牛会席
              </div>
              <p className="text-xs text-slate-500 line-clamp-2">
                延岡から神話街道を登る神々の郷・高千穂。冬の夜を徹して奉納される夜神楽と霊験あらたかな神社巡り。
              </p>
            </Link>

            <Link 
              href="/winter-oita-usa-jingu-kunisaki-hatsumode-bungogyu-seafood-stay"
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-amber-500 transition hover:shadow-md group block"
            >
              <div className="text-amber-600 font-bold text-xs mb-1">大分・宇佐＆国東半島</div>
              <div className="font-bold text-slate-900 group-hover:text-amber-600 transition mb-2">
                八幡総本社「宇佐神宮」新春初詣と昭和の町・豊後牛＆冬の豊後水道
              </div>
              <p className="text-xs text-slate-500 line-clamp-2">
                日豊海岸をさらに北上する東九州の古社紀行。全国4万社の八幡宮総本社初詣と豊後水道の冬魚を満喫。
              </p>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-600">
            <Link href="/" className="hover:text-amber-600 underline">ホーム</Link>
            <span>•</span>
            <Link href="/features" className="hover:text-amber-600 underline">特集一覧</Link>
            <span>•</span>
            <Link href="/posts" className="hover:text-amber-600 underline">記事一覧カタログ</Link>
          </div>
        
      <HubRelatedPosts currentSlug="winter-miyazaki-hyuga-umagase-sea-cross-iseebi-miyazakigyu-stay" />
</div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-4 text-center text-xs">
        <p>© 2026 旅宿クラウド (croud-travel.pages.dev). All rights reserved.</p>
        <p className="mt-1 text-slate-500">
          ※本記事に掲載している宿泊施設情報、価格、評価、イベント情報等は、楽天トラベルAPIおよび公式サイトの最新データに基づいています。冬期の初詣参拝時間や伊勢海老まつりの実施期間は変更となる場合がありますので、お出かけ前にご確認ください。
        </p>
      </footer>
    </article>
  );
}
