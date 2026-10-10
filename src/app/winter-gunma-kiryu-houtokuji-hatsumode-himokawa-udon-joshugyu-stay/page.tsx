import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月群馬】桐生新町と床もみじの名刹「宝徳寺」新春初詣！名宿5選',
  description: '「西の西陣、東の桐生」と称された織物の都・桐生が最も静謐で趣深い表情を見せる11〜1月の冬旅特集。ピカピカに磨かれた本堂の漆床に雪景色や新春。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '宝徳寺 床もみじ, 宝徳寺 初詣, ひもかわうどん 桐生, 桐生新町 重伝建, 上州牛 すき焼き, パークイン桐生, 梨木館, 桐生 グルメ 冬, 群馬 初詣 温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-gunma-kiryu-houtokuji-hatsumode-himokawa-udon-joshugyu-stay/"
  },
  openGraph: {
    title: '【11・12・1月群馬】桐生新町と床もみじの名刹「宝徳寺」新春初詣！名宿5選',
    description: '「西の西陣、東の桐生」と称された織物の都・桐生が最も静謐で趣深い表情を見せる11〜1月の冬旅特集。ピカピカに磨かれた本堂の漆床に雪景色や新春。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-gunma-kiryu-houtokuji-hatsumode-himokawa-udon-joshugyu-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の宝徳寺本堂の床もみじと桐生新町のこぎり屋根情景'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月群馬】織物の都・桐生新町と床もみじの名刹「宝徳寺」新春初詣！冬の熱々「幅広ひもかわうどん」＆上州牛・両毛名宿5選",
    description: "「西の西陣、東の桐生」と称された織物の都・桐生が最も静謐で趣深い表情を見せる11〜1月の冬旅特集。ピカピカに磨かれた本堂の漆床に雪景色や新春の光が映り込む名刹「宝徳寺」の新春特別祈祷、重要伝統的建造物群保存地区「桐生新町」ののこぎり屋根工場と白壁土蔵、幅十センチ以上にも及ぶ桐生名物「ひもかわうどん」の熱々肉汁仕立て、豊かな赤身と上質なサシを誇る「上州牛」すき焼き。桐生・みどり市エリアの滞在拠点に最適な厳選ホテル・名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export const dynamic = 'force-static';

export default function GunmaKiryuWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月群馬】織物の都・桐生新町と床もみじの名刹「宝徳寺」新春初詣！冬の熱々「幅広ひもかわうどん」＆上州牛・両毛名宿5選",
    "description": "「西の西陣、東の桐生」と称された織物の都・桐生が最も静謐で趣深い表情を見せる11〜1月の冬旅特集。ピカピカに磨かれた本堂の漆床に雪景色や新春の光が映り込む名刹「宝徳寺」の新春特別祈祷、重要伝統的建造物群保存地区「桐生新町」ののこぎり屋根工場と白壁土蔵、幅十センチ以上にも及ぶ桐生名物「ひもかわうどん」の熱々肉汁仕立て、豊かな赤身と上質なサシを誇る「上州牛」すき焼き。桐生・みどり市エリアの滞在拠点に最適な厳選ホテル・名宿5選を徹底解説します。",
    "image": "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80",
    "datePublished": "T12:00:00+09:00",
    "dateModified": "T12:00:00+09:00",
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
      "@id": "https://croud-travel.pages.dev/winter-gunma-kiryu-houtokuji-hatsumode-himokawa-udon-joshugyu-stay"
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
        "name": "群馬・桐生＆宝徳寺 冬特集",
        "item": "https://croud-travel.pages.dev/winter-gunma-kiryu-houtokuji-hatsumode-himokawa-udon-joshugyu-stay"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "冬（11・12・1月）の「宝徳寺（ほうとくじ）」の見どころと「床もみじ」冬特別公開・新春初詣は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "群馬県桐生市にある宝徳寺は室町時代創建の禅寺で、漆塗りの本堂の床に周囲の景色が鏡のように映り込む「床もみじ」で全国的に有名です。秋の紅葉に続き、冬期には枯淡の冬木立や白雪が映り込む「冬の床もみじ」特別公開が開催される年もあり、静謐を極めた美しさを堪能できます。また、境内には約1,000体を超える愛らしいお地蔵様（なで地蔵・ほほえみ地蔵など）が並び、正月三が日には厄除け・開運の新春初詣客で賑わいます。冬限定の美しい絵入り御朱印も大人気です。"
        }
      },
      {
        "@type": "Question",
        "name": "桐生名物「ひもかわうどん」の特徴と、冬におすすめの食べ方は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ひもかわうどんは、群馬県桐生地方に古くから伝わる郷土料理で、麺の幅が約5センチから広いものでは15センチ以上にも及ぶ日本一平たい幅広うどんです。群馬県産の上質な小麦粉を用い、薄く延ばしながらも強いコシとなめらかな喉越しを実現しています。冬の寒い時期は、熱々の甘辛い豚肉汁につけていただく「肉汁ひもかわ」や、冬野菜と油揚げがたっぷり入った「煮込みひもかわ」が絶品。箸で持ち上げたときの圧倒的な迫力と、出汁をたっぷりまとったモチモチ食感がやみつきになります。"
        }
      },
      {
        "@type": "Question",
        "name": "日本遺産「桐生新町（きりゅうしんまち）」の町並み見どころと散策のポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "桐生は奈良時代から続く絹織物の産地で、「西の西陣、東の桐生」と称えられた織物の都です。国の重要伝統的建造物群保存地区に選定されている桐生新町には、江戸から大正・昭和初期にかけて建てられた蔵造りの商家や、北側から均一な光を取り入れるために考案された三角屋根の「のこぎり屋根工場」が多数現存しています。現在はのこぎり屋根工場を改装したカフェやベーカリー、ギャラリーになっており、冬の澄んだ青空の下、レトロな路地をゆっくり散策するのがおすすめです。"
        }
      },
      {
        "@type": "Question",
        "name": "群馬の最高峰ブランド和牛「上州牛（じょうしゅうぎゅう）」の美味しさの理由は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "上州牛は、赤城山・榛名山・妙義山の上毛三山に囲まれた自然豊かな環境と、利根川水系の清らかな伏流水で丹精込めて育てられた群馬県自慢のブランド牛です。程よいサシの入った赤身肉の旨味が濃厚で、脂がしつこくなく上品な後味が特徴です。冬は上州名物の下仁田ネギや白菜、舞茸と一緒に、甘辛い割り下で煮込む「上州牛すき焼き鍋」が格別。熱々の肉を溶き卵にくぐらせれば、とろけるような柔らかさと肉本来の深いコクを満喫できます。"
        }
      },
      {
        "@type": "Question",
        "name": "東京（浅草・新宿・上野）から桐生・宝徳寺への冬のアクセス方法は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "東武鉄道の特急「りょうもう号」を利用するのが最も快適です。浅草駅・北千住駅から東武伊勢崎線・桐生線特急で新桐生駅または相老駅まで直通約1時間40分です。JR利用の場合は、上野駅・新宿駅から高崎線または両毛線直通で桐生駅まで約2時間。車の場合は北関東自動車道「太田桐生IC」から桐生市街まで約15分、宝徳寺までは約25分です。宝徳寺周辺は山沿いに位置するため、12月下旬〜1月に車で訪れる際は念のためスタッドレスタイヤ装着が推奨されます。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "パークイン桐生",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8983/8983.jpg",
              rating: 4.18,
              reviews: 1840,
              price: "¥5,700〜",
              access: "JR桐生駅南口徒歩1分、無料駐車場有り(2ｔ未満)",
              special: "◆リラクゼーションルーム新設◆（マッサージチェア無料）◇【シモンズ社製ベッド】★無料駐車場完備★",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8983%2F8983.html",
              story: "JR桐生駅南口から徒歩わずか1分、駅前ロータリーに面した抜群の好立地に位置する「パークイン桐生」。全室に幅広のライティングデスクと快適なベッドを備え、冬の宝徳寺初詣や桐生新町散策の活動拠点として絶大な利便性を発揮します。最上階には男女別の大浴場とサウナを完備しており、赤城おろしの寒風で冷え切った身体を手足を伸ばして温められるのが大きな魅力。無料朝食バイキングでは、温かいお味噌汁や日替わりの和洋おかずが提供され、寒い冬の朝も活力十分に旅立てます。",
              roomTip: "最上階フロアのシングルまたはツイン。大浴場と同じフロアで移動が楽々、窓から桐生の山並みを遠望。",
              gourmetTip: "「無料和洋朝食バイキング」。温かいスープや炊きたてご飯、地元食材を使ったお惣菜で出発前のエネルギー補給。",
              highlights: [
                "JR桐生駅南口徒歩1分・最上階大浴場＆サウナ完備で冷えた身体をぽかぽかに温める" ,
                "無料朝食バイキング付き・冬の宝徳寺初詣やわたらせ渓谷周遊の拠点に最適" ,
                "駅前ロータリー直結の機動力・親切なフロント対応と高いコストパフォーマンス"
              ]
            },
            {
              id: 2,
              name: "パールホテル＜桐生市＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/31153/31153.jpg",
              rating: 4.00,
              reviews: 158,
              price: "¥4,850〜",
              access: "JR桐生駅 北口より徒歩5分■東武・浅草から急行りょうもう号で約1時間45分■関越道→北関東道・太田藪塚ICから約20分",
              special: "JR桐生駅から徒歩５分　繁華街に一番近いホテル！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31153%2F31153.html",
              story: "JR桐生駅北口から徒歩約2分、桐生市街の中心部に佇む「パールホテル＜桐生市＞」。繁華街や老舗のひもかわうどん店、ソースカツ丼の名店へ徒歩でアクセスできる便利な立地が魅力です。客室は清潔で機能的に整えられ、全室に加湿空気清浄機と無料Wi-Fiを完備。冬の連泊でも快適に過ごせるランドリー設備も整っており、自由気ままに桐生の歴史ある織物文化やグルメを食べ歩く一人旅やカップル旅行に最適です。",
              roomTip: "デラックスシングル。ゆったりとしたセミダブルベッドで冬の散策疲れを心地よく癒やせます。",
              gourmetTip: "「桐生市街の老舗巡り」。ホテル徒歩圏内の老舗店で味わう熱々の肉汁ひもかわうどんと揚げたてソースカツ丼が至高。",
              highlights: [
                "桐生駅北口徒歩2分・老舗ひもかわうどん店やソースカツ丼の名店へ徒歩すぐ" ,
                "清潔感ある機能的客室・加湿空気清浄機完備で冬の乾燥対策も万全" ,
                "リーズナブルな宿泊料金・観光にもビジネスにも使い勝手抜群の好立地"
              ]
            },
            {
              id: 3,
              name: "桐生グランドホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7168/7168.jpg",
              rating: 4.06,
              reviews: 308,
              price: "¥8,800〜",
              access: "北関東自動車道太田藪塚ICより20分／東武鉄道特急りょうもう号「相老駅」下車、徒歩7分",
              special: "2011年10月新館ANNEXオープン! モダンにデザインされたツイン・和室。大浴場も完備。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7168%2F7168.html",
              story: "東武桐生線相老駅から車で約5分、国道沿いに広大な日本庭園と格調高いエントランスを構える「桐生グランドホテル」。英国風のクラシカルな館内デザインと、ゆとりある客室が非日常の贅沢感を演出します。館内には本格フレンチや日本料理のレストランがあり、冬の旬食材を贅沢に使った上州牛のステーキディナーや会席料理を堪能可能。広々とした無料平面駐車場を備えており、宝徳寺やわたらせ渓谷方面へのマイカードライブに極めて便利なリゾートホテルです。",
              roomTip: "ガーデンビューツイン。手入れの行き届いた日本庭園を眺めながら静かな冬の夕べを過ごせる上質空間。",
              gourmetTip: "「上州牛のグリルディナー」。香ばしく焼き上げた群馬県産黒毛和牛の豊かな旨味と赤ワインのマリアージュ。",
              highlights: [
                "日本庭園を抱くクラシックホテル・上州牛ディナーとゆとりある無料平面駐車場" ,
                "広々とした客室設計・落ち着いた英国風デザインでカップルや家族連れに好評" ,
                "宝徳寺まで車で約15分・北関東道からのマイカードライブ派に最高の利便性"
              ]
            },
            {
              id: 4,
              name: "梨木温泉　梨木館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12550/12550.jpg",
              rating: 4.00,
              reviews: 286,
              price: "¥22,850〜",
              access: "北関東道『太田藪塚IC』より40分 / わたらせ渓谷鉄道『本宿駅・梨木温泉』より無料送迎（約10分・当日要予約）",
              special: "赤城山の麓、周囲に民家も街灯もない豊かな自然のなかに建つ一軒宿。名物はきじ料理。露天風呂付客室が人気",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12550%2F12550.html",
              story: "桐生市郊外の山あいに位置し、創業百余年の歴史を誇る秘湯の一軒宿「梨木温泉 梨木館」。清流・深沢川の渓谷沿いに佇み、古くから薬効の高い霊泉として親しまれてきた茶褐色のにごり湯（含食塩・二酸化炭素・炭酸水素塩泉）を源泉かけ流しで堪能できます。冬は白銀に染まる渓谷を湯船から望む雪見露天風呂が息を呑む絶景。夕食には名物の「きじ鍋」や上州黒毛和牛の石焼きステーキ、山里の旬菜が並び、都会の喧騒を完全に忘れる至高の湯治ステイが叶います。",
              roomTip: "露天風呂付き離れ客室。誰にも邪魔されず名湯の雪見風呂を独り占めできる極上のプライベート空間。",
              gourmetTip: "「名物きじ鍋と上州牛会席」。野趣あふれるきじ肉の濃厚な出汁と冬根菜の煮込みが冷えた体を芯から温めます。",
              highlights: [
                "創業百余年の秘湯一軒宿・源泉かけ流し茶褐色にごり湯の雪見露天風呂ときじ鍋" ,
                "渓谷沿いの絶景ロケーション・上州黒毛和牛石焼きステーキと山里の滋味会席" ,
                "全館静寂に包まれた大人のお籠もり宿・冬の雪景色に心洗われる温泉旅行"
              ]
            },
            {
              id: 5,
              name: "東横ＩＮＮ桐生駅南口",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/75279/75279.jpg",
              rating: 3.85,
              reviews: 432,
              price: "¥6,195〜",
              access: "桐生駅より徒歩２分",
              special: "桐生駅から徒歩2分で朝食・小学生以下添い寝無料のホテル！わたらせ渓谷鉄道まで車で30分",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75279%2F75279.html",
              story: "JR桐生駅南口から徒歩約2分、清潔感と安心のクオリティで高い稼働率を誇る「東横INN桐生駅南口」。機能的な客室には幅広ベッド、加湿器、個別空調を完備し、冬の寒さや乾燥を気にせず快適に休息できます。毎朝手作りされる無料朝食では、温かいおにぎりや具だくさん味噌汁が提供され、スムーズな出発をサポート。敷地内立体駐車場も完備され、宝徳寺の新春参拝やわたらせ渓谷鉄道の撮影旅の拠点として高い実用性を誇ります。",
              roomTip: "上層階ダブル。ワイドなベッドで広々と休め、駅近ながら静かな環境で熟睡をサポート。",
              gourmetTip: "「東横インの健康朝食」。温かいお味噌汁とお惣菜、炊きたてご飯で手軽に朝のエネルギーを充填。",
              highlights: [
                "JR桐生駅南口徒歩2分・安心の東横イン品質と清潔な快適ベッド＆手作り無料朝食" ,
                "機能的な設備と個別空調・宝徳寺や織物資料館へのアクセスもスムーズ" ,
                "全国チェーンの安定感と充実の設備・冬の両毛エリア散策の頼れる味方"
              ]
            }
  ];

  const faqsData = [
    {
      q: "冬（11・12・1月）の「宝徳寺（ほうとくじ）」の見どころと「床もみじ」冬特別公開・新春初詣は？",
      a: "群馬県桐生市にある宝徳寺は室町時代創建の禅寺で、漆塗りの本堂の床に周囲の景色が鏡のように映り込む「床もみじ」で全国的に有名です。秋の紅葉に続き、冬期には枯淡の冬木立や白雪が映り込む「冬の床もみじ」特別公開が開催される年もあり、静謐を極めた美しさを堪能できます。また、境内には約1,000体を超える愛らしいお地蔵様（なで地蔵・ほほえみ地蔵など）が並び、正月三が日には厄除け・開運の新春初詣客で賑わいます。冬限定の美しい絵入り御朱印も大人気です。"
    },
    {
      q: "桐生名物「ひもかわうどん」の特徴と、冬におすすめの食べ方は？",
      a: "ひもかわうどんは、群馬県桐生地方に古くから伝わる郷土料理で、麺の幅が約5センチから広いものでは15センチ以上にも及ぶ日本一平たい幅広うどんです。群馬県産の上質な小麦粉を用い、薄く延ばしながらも強いコシとなめらかな喉越しを実現しています。冬の寒い時期は、熱々の甘辛い豚肉汁につけていただく「肉汁ひもかわ」や、冬野菜と油揚げがたっぷり入った「煮込みひもかわ」が絶品。箸で持ち上げたときの圧倒的な迫力と、出汁をたっぷりまとったモチモチ食感がやみつきになります。"
    },
    {
      q: "日本遺産「桐生新町（きりゅうしんまち）」の町並み見どころと散策のポイントは？",
      a: "桐生は奈良時代から続く絹織物の産地で、「西の西陣、東の桐生」と称えられた織物の都です。国の重要伝統的建造物群保存地区に選定されている桐生新町には、江戸から大正・昭和初期にかけて建てられた蔵造りの商家や、北側から均一な光を取り入れるために考案された三角屋根の「のこぎり屋根工場」が多数現存しています。現在はのこぎり屋根工場を改装したカフェやベーカリー、ギャラリーになっており、冬の澄んだ青空の下、レトロな路地をゆっくり散策するのがおすすめです。"
    },
    {
      q: "群馬の最高峰ブランド和牛「上州牛（じょうしゅうぎゅう）」の美味しさの理由は？",
      a: "上州牛は、赤城山・榛名山・妙義山の上毛三山に囲まれた自然豊かな環境と、利根川水系の清らかな伏流水で丹精込めて育てられた群馬県自慢のブランド牛です。程よいサシの入った赤身肉の旨味が濃厚で、脂がしつこくなく上品な後味が特徴です。冬は上州名物の下仁田ネギや白菜、舞茸と一緒に、甘辛い割り下で煮込む「上州牛すき焼き鍋」が格別。熱々の肉を溶き卵にくぐらせれば、とろけるような柔らかさと肉本来の深いコクを満喫できます。"
    },
    {
      q: "東京（浅草・新宿・上野）から桐生・宝徳寺への冬のアクセス方法は？",
      a: "東武鉄道の特急「りょうもう号」を利用するのが最も快適です。浅草駅・北千住駅から東武伊勢崎線・桐生線特急で新桐生駅または相老駅まで直通約1時間40分です。JR利用の場合は、上野駅・新宿駅から高崎線または両毛線直通で桐生駅まで約2時間。車の場合は北関東自動車道「太田桐生IC」から桐生市街まで約15分、宝徳寺までは約25分です。宝徳寺周辺は山沿いに位置するため、12月下旬〜1月に車で訪れる際は念のためスタッドレスタイヤ装着が推奨されます。"
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
      <header className="relative bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-800 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-indigo-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Sunrise className="w-4 h-4 text-indigo-300" />
            <span>上野国・群馬 冬の特別紀行（11月・12月・1月）</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 font-journal-serif">
            織物の都・桐生新町と床もみじの名刹「宝徳寺」新春初詣<br className="hidden md:inline" />
            熱々「幅広ひもかわうどん」＆上州牛・両毛厳選名宿
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mb-6">
            「西の西陣、東の桐生」と謳われた日本遺産の織物街・群馬県桐生市。11月から1月、赤城おろしの寒風が吹く冬の街は、凛とした静寂と温かい人情に包まれます。本堂の漆床に雪景色が映る名刹「宝徳寺」の新春厄除け祈願、のこぎり屋根工場と白壁土蔵が連なる桐生新町のレトロ散策、幅十センチを超える名物「ひもかわうどん」の熱々肉汁、そして濃厚な赤身肉の旨味が際立つ「上州牛」すき焼き。心と舌を震わせる冬の両毛旅をご案内します。
          </p>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-slate-200">
            <span className="bg-indigo-900/60 border border-indigo-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-400" /> 宝徳寺（床もみじ＆新春初詣・地蔵尊）
            </span>
            <span className="bg-indigo-900/60 border border-indigo-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Building className="w-4 h-4 text-indigo-400" /> 桐生新町（重要伝統的建造物群保存地区）
            </span>
            <span className="bg-indigo-900/60 border border-indigo-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-indigo-400" /> 名物「ひもかわうどん」＆上州牛すき焼き
            </span>
          </div>
        </div>
      </header>

      {/* Summary Box */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
            <CheckCircle2 className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span>本特集でわかること（11・12・1月の桐生・宝徳寺旅行の要点）</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="bg-indigo-50/60 p-4 rounded-xl border border-indigo-100">
              <span className="font-bold text-indigo-950 block mb-1">① 宝徳寺 冬の床もみじと初詣</span>
              磨き抜かれた本堂漆床に映る冬枯れと白雪のリフレクション。千体地蔵尊の笑顔と新春厄除け祈祷、限定絵入り御朱印の魅力。
            </div>
            <div className="bg-indigo-50/60 p-4 rounded-xl border border-indigo-100">
              <span className="font-bold text-indigo-950 block mb-1">② 圧巻の幅広ひもかわ＆上州牛</span>
              幅十数センチの反物のような麺を熱々豚肉汁にくぐらせる名物「ひもかわうどん」。上州三山の自然が育む「上州牛」すき焼き。
            </div>
            <div className="bg-indigo-50/60 p-4 rounded-xl border border-indigo-100">
              <span className="font-bold text-indigo-950 block mb-1">③ 桐生新町のこぎり屋根散策</span>
              日本遺産・重伝建地区のレトロな町並み。三角屋根ののこぎり屋根工場カフェ巡りと、梨木温泉にごり湯秘湯での湯浴み。
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 py-4 text-xs text-slate-500 flex items-center gap-2">
        <Link href="/" className="hover:text-indigo-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/features" className="hover:text-indigo-800 transition">特集一覧</Link>
        <span>/</span>
        <span className="text-slate-700 font-medium">群馬・桐生＆宝徳寺 冬特集</span>
      </nav>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">

        {/* Section 1: Overview and Atmosphere */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-indigo-100 text-indigo-900 rounded-xl">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest block">HISTORIC TEXTILE TOWN</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                漆床に新春の光が鏡のように映り、織物の歴史息づく町並みに冬の風が渡る
              </h2>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              赤城山の南東麓、渡良瀬川と桐生川の清流に抱かれた群馬県桐生市。古くから「桐生織」で天下に知られ、江戸時代には徳川家康の関ヶ原の戦いにおける旗絹を短期間で織り上げた伝説を持つ、日本のものづくりを支えてきた誇り高き街です。
            </p>
            <p>
              冬の訪れとともに赤城山から吹き降ろすからっ風が街を包み込む11月から1月、桐生の街は格別の情趣に満ち溢れます。国の重要伝統的建造物群保存地区に選定されている「桐生新町」を歩けば、北向きの窓から柔らかな採光を得る特徴的な「のこぎり屋根工場」や重厚な見世蔵が立ち並び、職人たちが織りなした近代日本の熱気が静かに息づいています。
            </p>
            <p>
              郊外の丘陵地に佇む臨済宗の名刹「宝徳寺」へ足を伸ばせば、磨き上げられた本堂の黒漆の床に冬枯れの庭園や白雪が映り込む「冬の床もみじ」が静かに迎えてくれます。千体地蔵の優しい微笑みに癒やされ、新年の開運を祈願した後は、幅広の麺が湯気を上げる名物「ひもかわうどん」を熱い肉汁に浸して頬張る——寒さを吹き飛ばす温もりと歴史の深みに心奪われる、冬の両毛紀行がここにあります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100">
              <h3 className="font-bold text-indigo-950 text-sm mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-700" /> 宝徳寺 床もみじ＆初詣
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                本堂の漆床に映るリフレクション絶景。新春厄除け祈願と千体地蔵尊の優しい表情に癒やされる古刹。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100">
              <h3 className="font-bold text-indigo-950 text-sm mb-1 flex items-center gap-1.5">
                <Building className="w-4 h-4 text-indigo-700" /> 桐生新町のこぎり屋根
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                日本遺産の町並み。レンガ造りのこぎり屋根工場や白壁土蔵が立ち並び、レトロなカフェや工房巡りも充実。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100">
              <h3 className="font-bold text-indigo-950 text-sm mb-1 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-indigo-700" /> 名物ひもかわと上州牛
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                幅十数センチの超幅広麺を熱々肉汁でいただくひもかわうどん。上州牛すき焼きとソースカツ丼も必食。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Winter Gourmet Focus */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-amber-100 text-amber-900 rounded-xl">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">LOCAL GASTRONOMY</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                圧巻の幅広「ひもかわうどん」と、旨味凝縮「上州牛」すき焼き
              </h2>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              群馬の良質な小麦粉と清らかな水から生まれる桐生名物「ひもかわうどん」。箸で持ち上げると反物のように広がる幅広の麺は、インパクト抜群の見た目とは裏腹に、驚くほど滑らかでシルクのような舌触りです。冬の冷え込みが厳しい日は、豚肉と長ネギの甘辛い旨味がたっぷり溶け込んだ熱々の「肉汁つけ汁」でいただくのが一番。出汁をしっかりまとったモチモチの麺が口いっぱいに広がり、体の芯までポカポカと温めてくれます。
            </p>
            <p>
              上毛三山に囲まれた自然環境で、徹底した衛生管理と良質な飼料で育てられる「上州牛」。赤身とサシのバランスが絶妙で、肉本来の芳醇な旨味と甘い脂の香りが際立ちます。冬の桐生の夜は、甘辛い割下で下仁田ネギや舞茸と一緒にサッと煮る「上州牛すき焼き」や、地酒「赤城山」の辛口生酒を合わせた陶板焼きが至高のご馳走。ひと口噛むごとに溢れるジューシーな肉汁が旅の幸福感を最高潮へと引き上げます。
            </p>
            <p>
              さらに、桐生のソウルフードとして外せないのが「桐生ソースカツ丼」です。卵でとじず、揚げたて熱々のヒレカツを秘伝のウスター系甘辛ソースにサッとくぐらせ、ご飯の上に載せるシンプルなスタイル。サクサクの衣と柔らかい豚肉、ソースの香ばしさが食欲を刺激し、冬の散策途中のパワーチャージに最適です。
            </p>
          </div>
        </section>

        {/* Section 3: Sightseeing Spots & Winter Attractions */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-indigo-100 text-indigo-900 rounded-xl">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest block">HISTORIC & SCENIC SPOTS</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                千体地蔵の祈りと、高津戸峡の奇岩・わたらせ渓谷鉄道の冬旅情
              </h2>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              桐生市梅田町の山裾に位置する「宝徳寺」は、室町時代に桐生城主・佐野氏が開基した名刹です。境内を埋め尽くすお地蔵様たちは、「ほほえみ地蔵」「しあわせ地蔵」など表情豊かで、冬の参拝者の心を優しく和ませてくれます。正月には新春祈祷が行われ、新年の厄除け・開運を願う人々で賑わいます。枯山水庭園と雪のコントラストは、まるで一幅の水墨画のような静寂の美しさを湛えています。
            </p>
            <p>
              桐生新町の中央に位置する「有鄰館（ゆうりんかん）」は、江戸から昭和にかけて建てられた酒蔵や醤油蔵・味噌蔵・煉瓦蔵など11棟の蔵群が現存する歴史遺産です。冬の寒さの中でも重厚な蔵の土壁が歴史の風格を醸し出し、クラフト展やコンサートなど地域の文化発信拠点としても親しまれています。
            </p>
            <p>
              隣接するみどり市へ足を伸ばせば、「関東の耶馬渓」と称えられる景勝地「高津戸峡（たかつどきょう）」が広がります。渡良瀬川の急流が削り出した奇岩・巨岩が連なり、冬枯れの木々とエメラルドグリーンの川面のコントラストがダイナミックな景観を見せてくれます。わたらせ渓谷鐵道のディーゼル列車に揺られながら車窓から眺める冬の渓谷美も、心に残る旅のひとコマです。
            </p>
          </div>
        </section>

        {/* Section 4: Travel Practical Tips */}
        <section className="bg-slate-100/80 rounded-2xl p-6 md:p-8 border border-slate-200 space-y-4">
          <h2 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span>冬の桐生・両毛 旅の実践アドバイス（気候・服装・からっ風対策）</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-slate-700">
            <div>
              <strong className="block text-slate-900 font-bold mb-1">【気候と防寒】</strong>
              群馬の冬は「上州のからっ風（赤城おろし）」と呼ばれる乾燥した冷たい強風が吹き荒れます。晴天率は高いものの体感温度は氷点下近くまで下がることがあるため、風を通さない防風アウターやマフラー、手袋、リップクリーム等の乾燥対策を万全に準備してください。
            </div>
            <div>
              <strong className="block text-slate-900 font-bold mb-1">【アクセスと移動】</strong>
              東京・浅草から東武特急りょうもう号で新桐生駅まで直通約1時間40分と電車アクセスが快適です。宝徳寺へは桐生駅から車・タクシーで約15分、おりひめバス（路線バス）も運行しています。梨木温泉などの山沿いへ向かう場合は、12月下旬以降はスタッドレスタイヤ装着が安心です。
            </div>
          </div>
        </section>

        {/* Section 5: Verified Hotels */}
        <section className="space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-black text-indigo-800 uppercase tracking-widest bg-indigo-100 px-3 py-1 rounded-full inline-block">
              SELECTED ACCOMMODATIONS
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 font-journal-serif">
              宝徳寺初詣＆桐生散策を満喫する厳選名宿5選
            </h2>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              楽天トラベルAPIより最新の空室・料金・レビュー情報を取得。大浴場完備の駅前ホテルから、グルメ巡りに便利な市街地ホテル、日本庭園を持つホテル、渓谷の秘湯にごり湯一軒宿まで厳選しました。
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image */}
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{hotel.rating}</span>
                      <span className="text-slate-300">({hotel.reviews}件)</span>
                    </div>
                  </div>

                  {/* Hotel Content */}
                  <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-extrabold text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200">
                          厳選宿 #{hotel.id}
                        </span>
                        <span className="text-sm font-black text-rose-600">
                          参考宿泊料: {hotel.price}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-black text-slate-900 hover:text-indigo-800 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                          {hotel.name}
                        </a>
                      </h3>

                      <p className="text-xs text-slate-500 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{hotel.access}</span>
                      </p>

                      <p className="text-slate-700 text-xs md:text-sm leading-relaxed">
                        {hotel.story}
                      </p>

                      {/* Tips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <strong className="block text-slate-900 font-bold mb-1 text-[11px] uppercase tracking-wider text-indigo-800">
                            🛌 客室選びのヒント
                          </strong>
                          <span className="text-slate-600">{hotel.roomTip}</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <strong className="block text-slate-900 font-bold mb-1 text-[11px] uppercase tracking-wider text-amber-800">
                            🥢 冬の特選グルメ
                          </strong>
                          <span className="text-slate-600">{hotel.gourmetTip}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-1.5 pt-2 text-xs text-slate-600">
                        {hotel.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Booking Button */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-400">楽天トラベル公認リンク</span>
                      <a 
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black text-xs md:text-sm rounded-xl shadow-md hover:shadow-lg transition transform active:scale-95"
                      >
                        <span>プラン詳細・空室確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: 1-Night 2-Days Model Course */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-indigo-100 text-indigo-900 rounded-xl">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest block">MODEL ITINERARY</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                宝徳寺初詣＆桐生新町・ひもかわ 1泊2日冬の黄金モデルコース
              </h2>
            </div>
          </div>

          <div className="space-y-6 text-xs md:text-sm">
            {/* Day 1 */}
            <div className="border-l-2 border-indigo-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-indigo-600 text-white px-2 py-0.5 rounded text-xs">1日目</span>
                日本遺産・桐生新町を散策し、熱々ひもかわうどんを味わう
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>11:30 東武特急りょうもう号で桐生エリアに到着</strong><br />
                桐生市街の有名店で、幅十数センチの「ひもかわうどん」を昼食に。熱々の豚肉汁出汁で体の芯から温まる。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>13:00 重伝建「桐生新町」のこぎり屋根と町家散策</strong><br />
                矢野園や有鄰館など歴史的建造物が並ぶ本町通りを散策。のこぎり屋根工場を改装したベーカリーやカフェで冬のティータイム。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>16:00 ホテルにチェックイン＆大浴場へ</strong><br />
                パークイン桐生の大浴場や梨木館の雪見にごり湯で冷えた身体を芯から解きほぐす。夕食は上州牛すき焼きや名物ソースカツ丼を地酒「赤城山」とともに堪能。
              </p>
            </div>

            {/* Day 2 */}
            <div className="border-l-2 border-emerald-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-xs">2日目</span>
                名刹「宝徳寺」で床もみじ鑑賞と新春祈願、わたらせ渓谷へ
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>09:00 宝徳寺へ新春初詣</strong><br />
                本堂の磨き上げられた床に映り込む静謐な冬の床もみじを拝観。境内の千体地蔵を巡り、新年の無病息災・厄除けを祈念。冬限定の美しい絵入り御朱印をいただく。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>12:00 高津戸峡（みどり市）の冬景色散策</strong><br />
                関東の耶馬渓と称される高津戸峡へ。冬枯れの木々と奇岩、エメラルドグリーンの川面の渓谷美を散策路から眺望。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>14:30 桐生駅から東武特急またはJRで帰路へ</strong><br />
                桐生織の小物や銘菓、生ひもかわうどんのお土産を購入し、東京方面へ帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-purple-100 text-purple-900 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-800 uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                桐生・宝徳寺 冬の旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div key={idx} className="border border-slate-100 rounded-xl p-4 md:p-5 bg-slate-50/50">
                <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2 flex items-start gap-2">
                  <span className="text-indigo-600 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link CTA */}
        <section className="bg-gradient-to-r from-indigo-950 to-slate-900 text-white rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-black font-journal-serif">
            冬の日本全国・厳選特集をチェック
          </h2>
          <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto">
            11月・12月・1月が旬の温泉郷、新春初詣、冬の味覚、雪景色を特集したオリジナル旅行ガイドを多数公開中。次の旅の目的地を見つけてください。
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link 
              href="/features" 
              className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-black text-xs md:text-sm rounded-xl shadow transition"
            >
              特集記事一覧を見る
            </Link>
            <Link 
              href="/" 
              className="px-6 py-3 bg-indigo-800 hover:bg-indigo-700 text-white font-black text-xs md:text-sm rounded-xl border border-indigo-600 transition"
            >
              トップページへ戻る
            </Link>
          
      <HubRelatedPosts currentSlug="winter-gunma-kiryu-houtokuji-hatsumode-himokawa-udon-joshugyu-stay" />
</div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 text-center text-xs border-t border-slate-800 mt-16">
        <p>© 2026 旅宿クラウド (croud-travel.pages.dev). All rights reserved.</p>
        <p className="mt-2 text-slate-500">掲載の宿泊料金や施設情報は楽天トラベルAPIより取得した参考データです。最新のプラン内容は各宿泊施設ページをご確認ください。</p>
      </footer>
    </article>
  );
}
