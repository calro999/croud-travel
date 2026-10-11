import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月三重：伊勢海老！名宿5選',
  description: '二千年の歴史を誇る日本の心のふるさと・伊勢志摩を巡る11〜1月の冬紀行。冬至前後に宇治橋大鳥居の中央から昇る奇跡の朝光と「伊勢神宮（内宮・外。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '伊勢神宮 初詣, 宇治橋 日の出 冬, 的矢かき 伊勢志摩, 伊勢海老 鳥羽, 鳥羽国際ホテル, 志摩観光ホテル, いにしえの宿 伊久, 三重 冬旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-mie-iseshima-jingu-hatsumode-toba-matoya-oyster-ise-ebi-stay/"
  },
  openGraph: {
    title: '11・12・1月三重：伊勢海老！名宿5選',
    description: '二千年の歴史を誇る日本の心のふるさと・伊勢志摩を巡る11〜1月の冬紀行。冬至前後に宇治橋大鳥居の中央から昇る奇跡の朝光と「伊勢神宮（内宮・外。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-mie-iseshima-jingu-hatsumode-toba-matoya-oyster-ise-ebi-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬至の宇治橋大鳥居から昇る黄金色の朝日と伊勢神宮'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月三重：「伊勢神宮」新春初詣と宇治橋の冬日の出！冬旬「的矢かき」・伊勢海老・松阪牛会席＆鳥羽・賢島名宿5選",
    description: "二千年の歴史を誇る日本の心のふるさと・伊勢志摩を巡る11〜1月の冬紀行。冬至前後に宇治橋大鳥居の中央から昇る奇跡の朝光と「伊勢神宮（内宮・外宮）」厳かな新春初詣、五十鈴川の清冽な流れ。的矢湾の恵みが育む冬のブランド牡蠣「的矢かき」、伊勢湾で水揚げされる伊勢海老、本場・松阪牛のすき焼き・ステーキ。鳥羽温泉郷や英虞湾を望む賢島のリゾートなど、極上の冬の滞在を叶える厳選名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export const dynamic = 'force-static';

export default function MieIseshimaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月三重】「伊勢神宮」新春初詣と宇治橋の冬日の出！冬旬「的矢かき」・伊勢海老・松阪牛会席＆鳥羽・賢島名宿5選",
    "description": "二千年の歴史を誇る日本の心のふるさと・伊勢志摩を巡る11〜1月の冬紀行。冬至前後に宇治橋大鳥居の中央から昇る奇跡の朝光と「伊勢神宮（内宮・外宮）」厳かな新春初詣、五十鈴川の清冽な流れ。的矢湾の恵みが育む冬のブランド牡蠣「的矢かき」、伊勢湾で水揚げされる伊勢海老、本場・松阪牛のすき焼き・ステーキ。鳥羽温泉郷や英虞湾を望む賢島のリゾートなど、極上の冬の滞在を叶える厳選名宿5選を徹底解説します。",
    "image": "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80",
    "datePublished": "T15:00:00+09:00",
    "dateModified": "T15:00:00+09:00",
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
      "@id": "https://croud-travel.pages.dev/winter-mie-iseshima-jingu-hatsumode-toba-matoya-oyster-ise-ebi-stay"
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
        "name": "三重・伊勢志摩＆鳥羽 冬特集",
        "item": "https://croud-travel.pages.dev/winter-mie-iseshima-jingu-hatsumode-toba-matoya-oyster-ise-ebi-stay"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "冬（11・12・1月）の伊勢神宮初詣の参拝順序と宇治橋大鳥居の日の出の時期は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "伊勢神宮の正式な参拝順序は、まず衣食住の神様である豊受大御神を祀る「外宮（豊受大神宮）」を参拝し、その後に日本の総氏神・天照大御神を祀る「内宮（皇大神宮）」を参拝するのが古くからの習わしです。冬の最大のハイライトは、冬至の前後（11月下旬〜1月下旬頃）に内宮・宇治橋の大鳥居の真ん中から昇る神々しい朝日の光景です。午前7時30分頃に大鳥居の真上から光が差し込み、宇治橋を渡る参拝者を黄金色に照らします。新春三が日は終日大変混雑するため、早朝6時〜7時台の早朝参拝が最も清々しくおすすめです。"
        }
      },
      {
        "@type": "Question",
        "name": "伊勢志摩の冬の名物「的矢かき（まとやかき）」の特徴と安心・安全の理由は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "的矢かきは、志摩半島の的矢湾で養殖されるブランド牡蠣です。神路山や朝熊山からの清流と黒潮が交じり合う的矢湾は植物プランクトンが極めて豊富で、わずか1年で身が丸々と太り、渋みが少なく豊かな甘みと芳醇な旨味が凝縮します。さらに、昭和初期に世界で初めて紫外線滅菌浄化技術を確立したことで知られ、清浄海水で24時間以上浄化されるため、生でも安心して食べられる「清浄生牡蠣」として全国の一流料亭やホテルで高く評価されています。旬は11月から3月頃までです。"
        }
      },
      {
        "@type": "Question",
        "name": "伊勢神宮内宮の早朝参拝の魅力とおすすめの滞在方法は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "伊勢神宮の内宮は冬期でも早朝5時から開門されています。早朝参拝の魅力は、日中の混雑や喧騒が嘘のように静まり返り、樹齢数百年の杉木立を抜ける玉砂利の足音と、五十鈴川のせせらぎだけが響く神聖な空間を独占できることです。朝靄（あさもや）が立ち込める神域に朝日が差し込む瞬間は息を呑むほどの神々しさがあります。早朝参拝を快適に行うには、内宮徒歩圏内（おはらい町周辺など）の宿に宿泊するか、鳥羽・五十鈴川駅周辺の宿から早朝タクシーや車で向かうのがベストです。"
        }
      },
      {
        "@type": "Question",
        "name": "鳥羽温泉郷と賢島（志摩）のロケーションの違いと選ぶ基準は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "鳥羽温泉郷は鳥羽駅や伊勢湾に近く、鳥羽水族館やミキモト真珠島などの観光名所が充実しており、伊勢神宮へのアクセスも車・電車で約20〜30分と良好です。海鮮料理や多彩な湯めぐりを楽しみたい方に向いています。一方、賢島（志摩市）はリアス式海岸の英虞湾に浮かぶ離島で、静寂でラグジュアリーなリゾートホテルが点在します。波静かな湾に浮かぶ真珠筏の夕景を眺めながら、極上のフランス料理や静謐な時間を過ごしたいカップルや記念日旅行に最適です。"
        }
      },
      {
        "@type": "Question",
        "name": "冬の伊勢志摩の気温と服装、車でのアクセスの注意点は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "伊勢志摩は太平洋側に位置し黒潮の影響を受けるため、日本海側と比べて雪が降ることは稀で比較的温暖です。ただし、冬の五十鈴川沿いや内宮の杜、海沿いの鳥羽・賢島は冷たい季節風（伊勢湾からの浜風）が吹き抜けるため、体感温度はかなり低くなります。風を通さないコートやダウンジャケット、マフラー、手袋をご用意ください。伊勢自動車道などの主要道路は積雪の心配は少ないですが、深夜・早朝の橋梁部や日陰では路面凍結の可能性があるため注意して運転してください。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "鳥羽国際ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8529/8529.jpg",
              rating: 4.48,
              reviews: 1126,
              price: "¥13,552〜",
              access: "ＪＲ及び近鉄「鳥羽駅」より車で3分。近鉄鳥羽駅から無料シャトルバス有。（12:30～18:00の間毎時0分・30分）",
              special: "鳥羽駅からシャトルバスで5分。神宮から車で約20分。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8529%2F8529.html",
              story: "鳥羽湾を一望する岬の高台に佇み、半世紀以上にわたり国内外の賓客や皇族を迎えてきた伊勢志摩の迎賓館「鳥羽国際ホテル」。ロビーやテラスから見下ろす紺碧の鳥羽湾には冬の澄んだ陽光が煌めき、行き交う定期船の航跡が優美な絵画のような景観を描き出します。客室はモダンで落ち着いた設えで、真冬でも温もりあふれる快適な空間。館内メインダイニング「シーホース」では、伊勢海老や鮑、そして冬に旬の極みを迎えるブランド牡蠣「的矢かき」をふんだんに取り入れた珠玉のフレンチを提供。名物のチーズケーキとともに、五感を満たす最高峰のリゾートステイを体験できます。",
              roomTip: "オーシャンビューツインまたはハーバーウィング客室。朝日が海面を黄金色に染め上げる瞬間をプライベート空間から眺める至福。",
              gourmetTip: "「フレンチジャポネ冬の美食ディナー」。的矢かきのポシェや伊勢海老のビスク、三重県産黒毛和牛フィレ肉のロティが織りなす極上のハーモニー。",
              highlights: [
                "鳥羽湾パノラマ・皇族も迎えてきた迎賓館リゾートで味わう極上フレンチとチーズケーキ" ,
                "冬旬の的矢かき・伊勢海老・三重県産黒毛和牛を昇華させた珠玉のディナー" ,
                "記念日や上質な一人旅に選ばれる気品・冬の澄み渡る海の情景に浸る時間"
              ]
            },
            {
              id: 2,
              name: "伊勢志摩国立公園　／　鳥羽温泉郷　戸田家",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4761/4761.jpg",
              rating: 4.42,
              reviews: 2310,
              price: "¥9,240〜",
              access: "【電車】近鉄・JR鳥羽駅より徒歩3分（送迎有）【お車】伊勢道伊勢ICより伊勢二見鳥羽ライン経由約15分",
              special: "【鳥羽駅徒歩圏内の温泉旅館】鳥羽湾一望の客室と13の湯めぐり、地魚解体ショーが人気",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4761%2F4761.html",
              story: "天保元年（1830年）創業、鳥羽駅前に堂々たる威容を誇る老舗温泉旅館「伊勢志摩国立公園 ／ 鳥羽温泉郷 戸田家。」。広大な敷地内には「嬉春亭」「南館」など趣の異なる館が連なり、館内の湯めぐり施設が極めて充実しています。野趣あふれる「風流野天風呂」や24時間入浴可能な5つの無料貸切風呂、足湯など多彩な湯処で、冬の冷えた体を芯からポカポカに温めてくれます。夕食は伊勢志摩の豊かな海の幸を贅沢に盛り込んだ会席料理、または目の前で職人が調理するライブキッチンバイキング。三世代旅行から記念日旅行まで幅広く支持される伝統の宿です。",
              roomTip: "嬉春亭の海側和室または温泉露天風呂付き客室。鳥羽湾を行き交う船を眺めながら、畳のぬくもりの中でゆったり寛げます。",
              gourmetTip: "「冬の伊勢海老・的矢かき会席」。ぷりぷりの伊勢海老姿造りと香ばしい焼き的矢かき、三重のブランド牛鍋が並ぶ豪華絢爛な膳。",
              highlights: [
                "天保元年創業の老舗・多彩な大浴場と5つの無料貸切風呂で楽しむ冬の湯めぐり" ,
                "鳥羽駅前徒歩約3分の抜群の利便性・伊勢志摩の新鮮魚介を堪能する会席料理" ,
                "野趣あふれる露天風呂と足湯・伊勢神宮や鳥羽水族館への観光アクセス至便"
              ]
            },
            {
              id: 3,
              name: "志摩観光ホテル　ザ　クラシック",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1150/1150.jpg",
              rating: 4.73,
              reviews: 957,
              price: "¥16,005〜",
              access: "近鉄「賢島駅」から徒歩約5分、シャトルバス2分。（定時運行・予約不要）",
              special: "伊勢志摩サミット開催ホテル。落ち着いた空間で時を過ごせるリゾートホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1150%2F1150.html",
              story: "英虞湾（あごわん）を見下ろす緑豊かな賢島高台に建ち、2016年伊勢志摩サミットのメイン会場となった歴史と風格を誇る名門「志摩観光ホテル ザ クラシック」。建築家・村野藤吾が手掛けた温かみのあるモダニズム建築と、サミット当時の円卓テーブルが保存された館内は知的好奇心を刺激します。客室からは真珠筏が浮かぶ穏やかな英虞湾の冬景色が一望でき、夕暮れ時には世界中を魅了する黄金色のトワイライトが広がります。樋口宏江総料理長が監修する「海の幸フランス料理」は、冬の海の恵みを芸術の域へと昇華させた至高の逸品です。",
              roomTip: "プレミアムツイン（リアス式海岸ビュー）。洗練されたインテリアと大きなピクチャーウィンドウから冬の英虞湾パノラマを満喫。",
              gourmetTip: "「海の幸フランス料理・冬のクラシックコース。」。伝統の伊勢海老アメリカンスープと、的矢かきのアミューズ、黒毛和牛ステーキが絶品。",
              highlights: [
                "伊勢志摩サミットの舞台・英虞湾の夕暮れを望む村野藤吾建築と伝統の海の幸フランス料理" ,
                "全室リアス式海岸の絶景ビュー・プライベートラウンジで味わう上質な時間" ,
                "世界基準の最高峰サービス・一生の記憶に残る冬の賢島リゾートエクスペリエンス"
              ]
            },
            {
              id: 4,
              name: "湯めぐり海百景　鳥羽シーサイドホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15780/15780.jpg",
              rating: 4.42,
              reviews: 1627,
              price: "¥7,700〜",
              access: "近鉄・ＪＲ鳥羽駅より車で１０分（無料送迎有・定期運行）／伊勢自動車道　伊勢ＩＣ→伊勢二見鳥羽ライン２５分",
              special: "伊勢神宮まで車で３０分　☆お客様が選ぶ４つ星以上の人気宿☆",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15780%2F15780.html",
              story: "鳥羽湾を望む岬の先端、雄大なオーシャンビューに抱かれた大型温泉リゾート「湯めぐり海百景 鳥羽シーサイドホテル」。館内には「風の街」「岬の街」「潮の街」の3館があり、それぞれに趣の異なる3つの大浴場（露天風呂付き）が備わっており、館内にいながらにして本格的な湯めぐりを満喫できます。ナトリウム・炭酸水素塩温泉の柔らかな湯は、冷たい海風で乾燥しがちな冬の素肌をしっとりと潤してくれます。夕食は伊勢海老や旬の魚介を焼き立て・揚げ立てで提供するバイキングや、個室で味わう本格和食会席など、旅のスタイルに合わせて選べるのも魅力です。",
              roomTip: "岬の街または潮の街のオーシャンビュー和洋室。水平線から昇る冬の力強い朝日に照らされ、清々しい目覚めを迎えられます。",
              gourmetTip: "「伊勢志摩冬の味覚バイキング」。目の前で焼き上げる旬の貝類や牛ステーキ、伊勢うどん、手こね寿司など三重の味覚が食べ放題。",
              highlights: [
                "鳥羽湾岬の3つの大浴場・ナトリウム炭酸水素塩温泉の美肌湯と海鮮バイキング" ,
                "家族連れやグループにも人気の広々客室・水平線から昇る冬の朝日の大パノラマ" ,
                "鳥羽シーサイドの絶景露天風呂・手頃な宿泊プランと充実のアメニティ"
              ]
            },
            {
              id: 5,
              name: "いにしえの宿　伊久（共立リゾート）（リニューアルオープン）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/142809/142809.jpg",
              rating: 4.66,
              reviews: 1284,
              price: "¥24,860〜",
              access: "近鉄五十鈴川駅より送迎あり※詳しくは【よくある質問】Q.伊久までの送迎はありますか？をご覧ください。",
              special: "内宮までゆっくり歩いて15分の全室露天風呂付のお宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142809%2F142809.html",
              story: "伊勢神宮・内宮の宇治橋前まで徒歩約15分、おはらい町や五十鈴川のほとりに佇む極上の和宿「いにしえの宿 伊久（共立リゾート）」。早朝の澄み切った神域へ誰よりも早く参拝できる絶好のロケーションを誇ります。全客室に天然温泉またはマイナスイオン露天風呂を完備し、プライベートな空間でいつでも温かい湯に浸かれる贅沢。大浴場には内湯と露天風呂のほか、趣の異なる4つの無料貸切風呂も用意されています。夕食は松阪牛のすき焼きや伊勢海老、的矢かきなど三重の誇る高級食材を織り交ぜた月替わりの会席料理。参宮の宿として至高の寛ぎを提供します。",
              roomTip: "露天風呂付き客室。木の香りに包まれた湯船に浸かりながら、伊勢の神聖な森の静寂と澄み渡る冬の夜空を仰ぐ特別な時間。",
              gourmetTip: "「松阪牛と伊勢海老の贅沢会席」。きめ細やかなサシがとろける松阪牛のすき焼き鍋と、甘美な伊勢海老の造りが旅の夜を華やかに彩ります。",
              highlights: [
                "伊勢神宮内宮まで徒歩15分・全室露天風呂付き客室で叶える至福の早朝参宮ステイ" ,
                "4つの無料貸切風呂と湯上がりアイス・夜鳴きそばサービスなど充実のホスピタリティ" ,
                "混雑前の静寂に包まれた内宮早朝参拝が実現・松阪牛すき焼きの極上夕食"
              ]
            }
  ];

  const faqsData = [
    {
      q: "冬（11・12・1月）の伊勢神宮初詣の参拝順序と宇治橋大鳥居の日の出の時期は？",
      a: "伊勢神宮の正式な参拝順序は、まず衣食住の神様である豊受大御神を祀る「外宮（豊受大神宮）」を参拝し、その後に日本の総氏神・天照大御神を祀る「内宮（皇大神宮）」を参拝するのが古くからの習わしです。冬の最大のハイライトは、冬至の前後（11月下旬〜1月下旬頃）に内宮・宇治橋の大鳥居の真ん中から昇る神々しい朝日の光景です。午前7時30分頃に大鳥居の真上から光が差し込み、宇治橋を渡る参拝者を黄金色に照らします。新春三が日は終日大変混雑するため、早朝6時〜7時台の早朝参拝が最も清々しくおすすめです。"
    },
    {
      q: "伊勢志摩の冬の名物「的矢かき（まとやかき）」の特徴と安心・安全の理由は？",
      a: "的矢かきは、志摩半島の的矢湾で養殖されるブランド牡蠣です。神路山や朝熊山からの清流と黒潮が交じり合う的矢湾は植物プランクトンが極めて豊富で、わずか1年で身が丸々と太り、渋みが少なく豊かな甘みと芳醇な旨味が凝縮します。さらに、昭和初期に世界で初めて紫外線滅菌浄化技術を確立したことで知られ、清浄海水で24時間以上浄化されるため、生でも安心して食べられる「清浄生牡蠣」として全国の一流料亭やホテルで高く評価されています。旬は11月から3月頃までです。"
    },
    {
      q: "伊勢神宮内宮の早朝参拝の魅力とおすすめの滞在方法は？",
      a: "伊勢神宮の内宮は冬期でも早朝5時から開門されています。早朝参拝の魅力は、日中の混雑や喧騒が嘘のように静まり返り、樹齢数百年の杉木立を抜ける玉砂利の足音と、五十鈴川のせせらぎだけが響く神聖な空間を独占できることです。朝靄（あさもや）が立ち込める神域に朝日が差し込む瞬間は息を呑むほどの神々しさがあります。早朝参拝を快適に行うには、内宮徒歩圏内（おはらい町周辺など）の宿に宿泊するか、鳥羽・五十鈴川駅周辺の宿から早朝タクシーや車で向かうのがベストです。"
    },
    {
      q: "鳥羽温泉郷と賢島（志摩）のロケーションの違いと選ぶ基準は？",
      a: "鳥羽温泉郷は鳥羽駅や伊勢湾に近く、鳥羽水族館やミキモト真珠島などの観光名所が充実しており、伊勢神宮へのアクセスも車・電車で約20〜30分と良好です。海鮮料理や多彩な湯めぐりを楽しみたい方に向いています。一方、賢島（志摩市）はリアス式海岸の英虞湾に浮かぶ離島で、静寂でラグジュアリーなリゾートホテルが点在します。波静かな湾に浮かぶ真珠筏の夕景を眺めながら、極上のフランス料理や静謐な時間を過ごしたいカップルや記念日旅行に最適です。"
    },
    {
      q: "冬の伊勢志摩の気温と服装、車でのアクセスの注意点は？",
      a: "伊勢志摩は太平洋側に位置し黒潮の影響を受けるため、日本海側と比べて雪が降ることは稀で比較的温暖です。ただし、冬の五十鈴川沿いや内宮の杜、海沿いの鳥羽・賢島は冷たい季節風（伊勢湾からの浜風）が吹き抜けるため、体感温度はかなり低くなります。風を通さないコートやダウンジャケット、マフラー、手袋をご用意ください。伊勢自動車道などの主要道路は積雪の心配は少ないですが、深夜・早朝の橋梁部や日陰では路面凍結の可能性があるため注意して運転してください。"
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
      <header className="relative bg-gradient-to-b from-amber-950 via-slate-900 to-slate-800 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-amber-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Sunrise className="w-4 h-4 text-amber-300" />
            <span>東海・三重 伊勢志摩 冬の特別紀行（11月・12月・1月）</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 font-journal-serif">「伊勢神宮」新春初詣と宇治橋大鳥居の冬日の出<br className="hidden md:inline" /> 冬旬「的矢かき」・伊勢海老・松阪牛会席＆鳥羽・賢島名宿5選</h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mb-6">
            二千年の祈りを紡ぐ日本の心のふるさと・伊勢。冬至前後に宇治橋大鳥居の真ん中から昇る奇跡の朝光に包まれる11月から1月、神域は一年で最も神聖で清澄な空気に満たされます。外宮から内宮へと巡る新春初詣、五十鈴川の清冽な水鏡。そして的矢湾が育む清浄生牡蠣「的矢かき」、冬の伊勢海老、本場・松阪牛のすき焼き。鳥羽温泉郷や英虞湾のパノラマを望む名門リゾートで、魂が満たされる冬の参宮旅をお届けします。
          </p>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-slate-200">
            <span className="bg-amber-900/60 border border-amber-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" /> 伊勢神宮（内宮・外宮新春初詣）
            </span>
            <span className="bg-amber-900/60 border border-amber-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Sunrise className="w-4 h-4 text-amber-400" /> 宇治橋大鳥居 冬の日の出（冬至の奇跡）
            </span>
            <span className="bg-amber-900/60 border border-amber-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-amber-400" /> 的矢かき＆伊勢海老・松阪牛会席
            </span>
          </div>
        </div>
      </header>

      {/* Summary Box */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
            <CheckCircle2 className="w-5 h-5 text-amber-700 flex-shrink-0" />
            <span>本特集でわかること（11・12・1月の伊勢志摩・鳥羽旅行の要点）</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
              <span className="font-bold text-amber-950 block mb-1">① 宇治橋日の出と内宮早朝参宮</span>
              冬至を挟む約2ヶ月間だけ現れる大鳥居中央の日の出。朝靄に包まれた静寂の神域を歩み、清らかな心で新年を寿ぐ参拝作法。
            </div>
            <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
              <span className="font-bold text-amber-950 block mb-1">② 的矢かき・伊勢海老・松阪牛</span>
              プランクトン豊かな的矢湾で育ち無菌浄化された甘美な「的矢かき」、冬の伊勢海老姿造り、とろける極上松阪牛の豪華三重グルメ。
            </div>
            <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
              <span className="font-bold text-amber-950 block mb-1">③ 鳥羽温泉郷と賢島リゾート</span>
              鳥羽湾パノラマを見渡す迎賓館ホテルや湯めぐり老舗旅館、サミットの舞台となった英虞湾の賢島名門ホテルでの贅沢ステイ。
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 py-4 text-xs text-slate-500 flex items-center gap-2">
        <Link href="/" className="hover:text-amber-700 transition">ホーム</Link>
        <span>/</span>
        <Link href="/features" className="hover:text-amber-700 transition">特集一覧</Link>
        <span>/</span>
        <span className="text-slate-700 font-medium">三重・伊勢志摩＆鳥羽 冬特集</span>
      </nav>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">

        {/* Section 1: Overview and Atmosphere */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">AREA ATMOSPHERE & GEO OVERVIEW</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                常若（とこわか）の神域に差す冬の光と、リアス式海岸の優美な海景
              </h2>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              日本人の心の原風景として敬われてきた「お伊勢参り」。三重県伊勢市、鳥羽市、志摩市に広がる伊勢志摩国立公園は、神聖な原生林と複雑に入り組んだリアス式海岸が共存する日本屈指の風光明媚な地です。11月から1月にかけての冬、太平洋からの澄み切った陽光が大気を通して降り注ぎ、五十鈴川の水面は鏡のように透き通ります。神宮の森に聳える巨杉の合間から木漏れ日が差し込む光景は、訪れるすべての人の雑念を洗い流してくれます。
            </p>
            <p>
              冬の伊勢を語る上で欠かせないのが、冬至（12月22日頃）を挟む約2ヶ月間だけ見ることができる「宇治橋大鳥居の日の出」です。朝の冷気が肌を刺す午前7時30分頃、五十鈴川にかかる宇治橋の大鳥居の真ん中から、黄金色に輝く朝日がゆっくりと昇り始めます。鳥居の笠木のシルエットと背後の朝熊山（あさまやま）から放たれる神々しい陽光は、天照大御神の御神威を全身で体感できる奇跡の瞬間として、全国から多くの参拝者を惹きつけています。
            </p>
            <p>
              参拝を終えた後は、鳥羽や志摩の海へ。鳥羽湾では行き交う船とカモメの群れが冬の海辺に活気を与え、波静かな英虞湾（あごわん）では、無数の真珠筏が浮かぶ夕景が茜色から紫色へと美しく移ろいます。神域の凛とした静けさと、海のリゾートの優雅な寛ぎ。その二つが見事に調和した伊勢志摩の冬旅は、新年の門出を祝うのに最もふさわしい旅路です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-100">
              <h3 className="font-bold text-amber-950 text-sm mb-1 flex items-center gap-1.5">
                <Footprints className="w-4 h-4 text-amber-700" /> 伊勢神宮 内宮・外宮参宮
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                外宮から内宮へと巡る正式参拝。玉砂利を踏みしめる音と巨杉の杜に包まれる新春の厳粛な祈り。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-100">
              <h3 className="font-bold text-amber-950 text-sm mb-1 flex items-center gap-1.5">
                <Sunrise className="w-4 h-4 text-amber-700" /> 宇治橋大鳥居 冬至の朝光
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                大鳥居の中心から昇る神聖な朝日。光が宇治橋を渡る人々を照らし出す冬だけの奇跡の絶景。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-100">
              <h3 className="font-bold text-amber-950 text-sm mb-1 flex items-center gap-1.5">
                <Waves className="w-4 h-4 text-amber-700" /> 鳥羽湾＆英虞湾リアス海岸
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                伊勢志摩サミットの舞台となった英虞湾の夕景と、鳥羽温泉郷の多彩な名湯露天風呂。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Winter Gourmet Focus */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-rose-100 text-rose-900 rounded-xl">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest block">WINTER LOCAL GASTRONOMY</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                甘美なる清浄「的矢かき」と伊勢海老・松阪牛、三重が誇る至高の三代美食
              </h2>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              古くから「御食国（みけつくに）」として朝廷に豊かな海の幸を献上してきた志摩国。その冬の美食の筆頭に挙げられるのが、志摩市磯部町の的矢湾で育てられるブランド牡蠣「的矢かき（まとやかき）」です。神路山や朝熊山の森林から流れ出る3つの河川が植物プランクトンを豊富に運び込む的矢湾は、牡蠣の生育に理想的な環境。わずか1年という短期間で身がふっくらと肥育されるため、エグみや渋みが極めて少なく、クリーミーで上品な甘みが特徴です。
            </p>
            <p>
              さらに的矢かきは、紫外線滅菌浄化海水の特許技術を用いて徹底的に浄化されているため、生でも安心して味わえる「清浄生牡蠣」のパイオニアです。レモンを一搾りしてツルリと口へ運べば、海のミルクの濃厚なコクと爽やかな潮の香りが口内いっぱいに弾けます。炭火で香ばしく殻ごと焼き上げた「焼き牡蠣」や、昆布出汁でサッと火を通す「牡蠣鍋」、衣サクサクの「牡蠣フライ」など、多彩な調理法でその真価を堪能できます。
            </p>
            <p>
              冬に甘みを増す「伊勢海老」のお造りや鬼殻焼き、そして三重県が世界に誇る黒毛和牛の最高峰「松阪牛」のすき焼き・ステーキと組み合わせた会席料理は、まさに日本の食文化の頂点。伊勢の地酒「伊勢嶋」や「作（ざく）」を傾けながら過ごす冬の夜は、旅の記憶を鮮やかに彩ってくれます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-xl bg-rose-50/70 border border-rose-100">
              <h3 className="font-bold text-rose-950 text-sm mb-2 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-rose-700" /> 的矢かきの美味しさの真髄
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                <li>・<strong>生牡蠣：</strong>渋みがなく絹のように滑らかな舌触り。清浄滅菌による圧倒的な安心感。</li>
                <li>・<strong>焼き牡蠣：</strong>殻の中で煮立つ熱々の貝汁と、凝縮された旨味のジュースを最後の一滴まで。</li>
                <li>・<strong>牡蠣雑炊：</strong>牡蠣の濃厚なエキスが出汁に溶け込んだ、冬の身体を芯から温める締め。</li>
              </ul>
            </div>
            <div className="p-5 rounded-xl bg-rose-50/70 border border-rose-100">
              <h3 className="font-bold text-rose-950 text-sm mb-2 flex items-center gap-1.5">
                <Wine className="w-4 h-4 text-rose-700" /> 伊勢海老＆松阪牛の饗宴
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                <li>・<strong>伊勢海老姿造り：</strong>透明感あふれる身のプリプリとした弾力と、後を引く上品な甘み。</li>
                <li>・<strong>松阪牛すき焼き：</strong>人肌でとろける不飽和脂肪酸の極上サシと、香ばしい醤油だれの芳香。</li>
                <li>・<strong>伊勢うどん＆手こね寿司：</strong>おはらい町やおかげ横丁で味わう伝統の門前郷土グルメ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Hotel Showcase */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">RECOMMENDED ACCOMMODATIONS</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 font-journal-serif">
              伊勢参宮＆的矢かき・伊勢海老を堪能する厳選名宿5選
            </h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              楽天トラベルAPIから最新の空室状況・評価を取得。内宮徒歩圏の露天付き宿から鳥羽湾の迎賓館、サミット舞台の賢島リゾートまで網羅。
            </p>
          </div>

          <div className="space-y-6">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col">
                  {/* Image Column */}
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover absolute inset-0"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-amber-900/90 text-white text-xs font-black px-2.5 py-1 rounded-md shadow">
                      第{hotel.id}選
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="w-full p-5 sm:p-7 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5 text-amber-500 font-black text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span>{hotel.rating}</span>
                          <span className="text-xs text-slate-400 font-normal">（{hotel.reviews}件のクチコミ）</span>
                        </div>
                        <div className="text-xs font-bold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
                          参考最安料金: {hotel.price}
                        </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 font-journal-serif">
                        {hotel.name}
                      </h3>

                      <p className="text-xs text-slate-500 flex items-center gap-1 mb-3">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        <span>{hotel.access}</span>
                      </p>

                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed mb-4">
                        {hotel.story}
                      </p>

                      <div className="space-y-2 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs">
                        <div className="text-slate-700">
                          <strong className="text-amber-950 font-bold">客室の寛ぎ：</strong> {hotel.roomTip}
                        </div>
                        <div className="text-slate-700">
                          <strong className="text-amber-950 font-bold">美食のポイント：</strong> {hotel.gourmetTip}
                        </div>
                      </div>
                    </div>

                    <div>
                      <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4 text-xs text-slate-600">
                        {hotel.highlights.map((hl, hIdx) => (
                          <li key={hIdx} className="bg-amber-50/40 p-2 rounded-lg border border-amber-100/60 flex items-start gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 flex-shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs text-slate-400">楽天トラベル公式プラン詳細</span>
                        <a 
                          href={hotel.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-amber-900 hover:bg-amber-800 text-white font-bold text-xs rounded-xl shadow transition"
                        >
                          <span>宿泊プラン・空室を確認</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Model Itinerary */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block">SUGGESTED ITINERARY</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                11・12・1月を満喫する「外宮・内宮早朝参宮と鳥羽・的矢かき」1泊2日黄金コース
              </h2>
            </div>
          </div>

          <div className="space-y-6 text-xs md:text-sm">
            {/* Day 1 */}
            <div className="border-l-2 border-amber-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-amber-600 text-white px-2 py-0.5 rounded text-xs">1日目</span>
                近鉄特急で伊勢市へ、外宮参拝とおはらい町散策、鳥羽の名宿へ
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>10:30 近鉄「伊勢市駅」または「宇治山田駅」に到着</strong><br />
                名古屋・大阪・京都から快適な近鉄特急（観光特急しまかぜ等）で到着。駅前から徒歩で外宮へ向かう。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>11:00 伊勢神宮「外宮（豊受大神宮）」へ参拝</strong><br />
                古式に則り外宮から参拝。緑豊かな杜の中、衣食住の守護神である豊受大御神に感謝と祈りを捧げる。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>13:00 おはらい町・おかげ横丁で門前昼食</strong><br />
                石畳のレトロな町並みを散策。名物の伊勢うどんや熱々の松阪牛串、手こね寿司を味わい、神宮の参道情緒を楽しむ。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>15:30 鳥羽または内宮近くの名宿にチェックイン</strong><br />
                海を望む露天風呂で冷えた身体を温める。夕食には的矢かきの生牡蠣・焼き牡蠣、伊勢海老、松阪牛すき焼きの豪華会席を堪能。
              </p>
            </div>

            {/* Day 2 */}
            <div className="border-l-2 border-emerald-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-xs">2日目</span>
                宇治橋大鳥居の冬日の出と内宮早朝参拝、鳥羽水族館または賢島クルーズ
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>07:15 宇治橋前にて大鳥居の日の出を拝観</strong><br />
                澄み切った冷気の中、大鳥居の中央から昇る黄金色の朝日を拝む。光に包まれながら宇治橋を渡る清々しい瞬間。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>08:00 伊勢神宮「内宮（皇大神宮）」早朝参拝</strong><br />
                五十鈴川御手洗場（みたらし）の清流で手を清め、天照大御神を祀る正宮へ。静寂に包まれた杜の中で新年の幸を祈る。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>11:30 鳥羽水族館見学またはミキモト真珠島へ</strong><br />
                飼育種類数日本一の鳥羽水族館でジュゴンやラッコと出会う。鳥羽駅周辺でお土産に赤福餅や乾物を購入。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>15:00 近鉄鳥羽駅より特急に乗車し帰路へ</strong><br />
                車窓に広がる穏やかな鳥羽湾を見つめながら、心が洗われた新春参宮の旅を締めくくる。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-purple-100 text-purple-900 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-800 uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                三重・伊勢志摩＆鳥羽 冬の旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div key={idx} className="border border-slate-100 rounded-xl p-4 md:p-5 bg-slate-50/50">
                <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2 flex items-start gap-2">
                  <span className="text-amber-600 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Internal Links / Related Winter Guides */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-sky-100 text-sky-800 rounded-xl">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest block">RELATED WINTER FEATURES</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                あわせて読みたい！近畿・東海の厳選「冬の初詣＆名所・温泉特集」
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
            <Link 
              href="/winter-nara-kashihara-jingu-hatsumode-asuka-asukunabe-yamatogyu-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 transition block space-y-1"
            >
              <span className="font-bold text-amber-950 block">【奈良】橿原神宮初詣と明日香・飛鳥鍋＆大和牛名宿</span>
              <span className="text-slate-500 text-xs">日本建国の聖地で迎える新春初詣と畝傍山の朝霧、古代宮廷由来の牛乳仕立て飛鳥鍋。</span>
            </Link>

            <Link 
              href="/winter-fukui-tsuruga-kehi-jingu-mikata-goko-echizengani-wakasa-fugu-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 transition block space-y-1"
            >
              <span className="font-bold text-amber-950 block">【福井】氣比神宮初詣と三方五湖冬静寂・越前がに名宿</span>
              <span className="text-slate-500 text-xs">北陸新幹線敦賀開業で直通！国重文大鳥居初詣と黄色タグ越前がに・若狭ふぐ極上会席。</span>
            </Link>

            <Link 
              href="/winter-shizuoka-kakegawa-fukuroi-hattasan-hatsumode-yumesakigyu-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 transition block space-y-1"
            >
              <span className="font-bold text-amber-950 block">【静岡】法多山尊永寺初詣と掛川城木造天守・遠州夢咲牛名宿</span>
              <span className="text-slate-500 text-xs">厄除け大本山での新春祈祷と名物厄除団子、可睡齋ひなまつりと日本一黒毛和牛の贅。</span>
            </Link>

            <Link 
              href="/winter-aichi-toyokawa-inari-hatsumode-yuya-onsen-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 transition block space-y-1"
            >
              <span className="font-bold text-amber-950 block">【愛知】豊川稲荷新春初詣と三河一色うなぎ名宿</span>
              <span className="text-slate-500 text-xs">千本幟と霊狐塚が圧巻の商売繁盛祈願、冬に脂が乗る三河一色の炭火手焼きうなぎ。</span>
            </Link>
          </div>
        </section>

        {/* Internal Link CTA */}
        <section className="bg-gradient-to-r from-amber-950 to-slate-900 text-white rounded-2xl p-8 text-center space-y-4">
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
              className="px-6 py-3 bg-amber-800 hover:bg-amber-700 text-white font-black text-xs md:text-sm rounded-xl border border-amber-600 transition"
            >
              トップページへ戻る
            </Link>
          
      <HubRelatedPosts currentSlug="winter-mie-iseshima-jingu-hatsumode-toba-matoya-oyster-ise-ebi-stay" />
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
