import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, Sparkles, Calendar, Utensils, Compass, ExternalLink, Snowflake, Flame, Building, ThermometerSun } from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月福岡：万葉の古湯二日市温泉と博多和牛の！名宿5選',
  description: '11月から1月、福岡・太宰府は本格的な受験シーズンの合格祈願と、新春三が日に200万人以上が訪れる日本屈指の初詣で最も熱気と神気に包まれる季。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '太宰府天満宮 初詣 混雑, 太宰府 合格祈願 宿泊, 梅ヶ枝餅 名物, 二日市温泉 旅館, 博多和牛 宿, 大丸別荘, HOTEL CULTIA 太宰府, ルートイングランティア太宰府, 扇屋旅館, 二日市グリーンホテル, 11月 12月 1月 福岡旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-fukuoka-dazaifu-tenmangu-hatsumode-futsukaichi-beef-stay/"
  },
  openGraph: {
    title: '11・12・1月福岡：万葉の古湯二日市温泉と博多和牛の！名宿5選',
    description: '11月から1月、福岡・太宰府は本格的な受験シーズンの合格祈願と、新春三が日に200万人以上が訪れる日本屈指の初詣で最も熱気と神気に包まれる季。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-fukuoka-dazaifu-tenmangu-hatsumode-futsukaichi-beef-stay',
    type: 'article',
    images: [{ url: 'https://img.travel.rakuten.co.jp/share/HOTEL/38630/38630.jpg', width: 1200, height: 630, alt: '太宰府天満宮初詣と二日市温泉名宿' }]
  }
};

export default function FukuokaDazaifuFutsukaichiPage() {
  const hotelsData = [
            {
              id: 1,
              name: "二日市温泉　大丸別荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38630/38630.jpg",
              rating: 4.67,
              reviews: 494,
              price: "¥11,350〜",
              access: "「福岡空港」より高速バスで約30分　「博多駅」よりＪＲ線利用で20分　「福岡天神駅」より西鉄電車利用で30分",
              special: "◇博多駅から20分◇源泉かけ流し天然温泉◇和の心を継ぐ宿【福岡】◇",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38630%2F38630.html",
              story: "慶応元年（1865年）創業、万葉集の時代から湧き出づる二日市温泉に三千坪の壮大な日本庭園を抱く老舗中の老舗旅館「二日市温泉 大丸別荘」。昭和天皇をはじめ皇族方や多くの文人墨客が宿泊した格式高い純和風の迎賓館です。玉石が敷き詰められた名物の大浴場には、単純弱放射能温泉（ラドン温泉）の柔らかな源泉が惜しみなく掛け流され、冬の寒さに縮こまった心身を芯から解きほぐします。夕食は四季の旬材と最高級の「博多和牛」を上品に仕立てた伝統の京風会席料理。太宰府天満宮への初詣や合格祈願の旅にふさわしい、格式と静寂に満ちた別世界が広がります。",
              roomTip: "大正亭・特別室。大正ロマンの優美な建築美と雪吊りの日本庭園を望み、歴史の重みに抱かれる最上級の滞在が叶います。",
              gourmetTip: "「大丸伝統・博多和牛会席」。きめ細やかなサシの博多和牛ステーキを中心に、玄界灘の冬の鮮魚や季節の炊き合わせが彩る老舗の味。",
              highlights: [
                "慶応元年創業・三千坪の壮麗な日本庭園と源泉掛け流しラドン温泉大浴場",
                "極上博多和牛ステーキと伝統の京風会席・皇族や文人に愛された名門の味",
                "玉石が敷かれた名物風呂の極上泉質・新春初詣や合格祈願の記念旅行に最適"
              ]
            },
            {
              id: 2,
              name: "ＨＯＴＥＬ　ＣＵＬＴＩＡ　太宰府",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/177090/177090.jpg",
              rating: 4.41,
              reviews: 81,
              price: "¥29,207〜",
              access: "西鉄「太宰府」駅より徒歩約5分",
              special: "【博多駅より車で30分】太宰府天満宮の門前町に溶け込 む”CULTURE”ホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177090%2F177090.html",
              story: "太宰府天満宮の門前町に佇み、江戸末期から明治にかけて建てられた歴史ある町家や古民家を再生した分散型ブティックホテル「HOTEL CULTIA 太宰府」。天満宮の参道まで徒歩数分というロケーションにあり、早朝や夜の静寂に包まれた境内を独り占めできる特別な体験が待っています。客室は歴史的な梁や漆喰の趣を残しつつ、現代の快適性を融合させた上質な大人の空間。夕食はかつての酒蔵や奥庭を望むダイニングで味わうフレンチ。地元福岡・太宰府の冬野菜や博多和牛をフレンチの技法で昇華させた至高のディナーに酔いしれます。",
              roomTip: "蔵スイートルーム。重厚な蔵の扉や高い天井が醸し出す非日常の空間に、最高級ベッドと檜風呂を備えた贅沢な隠れ家。",
              gourmetTip: "「太宰府テロワール・冬のフレンチフルコース。」。地元契約農家の冬根菜と極上博多和牛のロースト、福岡の旬の恵みが織りなす創作皿。",
              highlights: [
                "太宰府天満宮参道沿いの歴史的町家を再生・夜や早朝の静寂な境内を独占できる特別な宿",
                "酒蔵を改装したフレンチレストラン・博多和牛と地元冬野菜の創作フルコース",
                "太宰府の歴史文化に溶け込む滞在・カップルや大人の一人旅に圧倒的人気"
              ]
            },
            {
              id: 3,
              name: "太宰府天然温泉ルートイングランティア太宰府",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/75246/75246.jpg",
              rating: 3.88,
              reviews: 1146,
              price: "¥6,600〜",
              access: "西鉄太宰府駅から車で約3分◆福岡空港から車で約30分◆JR二日市駅より車で約12分◆西鉄太宰府駅から無料シャトルバス運行",
              special: "太宰府天満宮(太宰府駅)まで車で約３分■九州国立博物館へのアクセスも便利。天然温泉ございます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75246%2F75246.html",
              story: "太宰府天満宮から車で約5分の小高い丘の上に佇み、地下深くから湧き出る天然温泉「みかさの湯」を多彩な湯船で楽しめる温泉リゾート「太宰府天然温泉 ルートイングランティア太宰府。」。広々とした大浴場には、岩風呂の露天風呂や洞窟風呂、檜風呂、サウナ、岩盤浴が揃い、太宰府散策や初詣で冷えた身体をじっくり温めることができます。ホテルと西鉄太宰府駅間を結ぶ無料シャトルバスも運行しておりアクセスも快適。夕食には博多名物のもつ鍋や水炊き、新鮮な刺身が並び、ファミリーから一人旅まで気軽に利用できる人気の宿です。",
              roomTip: "コンフォートツインルーム。清潔感のある落ち着いた内装で、加湿空気清浄機を完備し冬の乾燥対策も万全。",
              gourmetTip: "「博多名物・牛もつ鍋御膳」。ぷりぷりの国産牛もつと特製醤油スープの旨味が染み渡る、身体がポカポカ温まる冬の定番鍋。",
              highlights: [
                "太宰府の高台に湧く天然温泉「みかさの湯」・岩風呂露天や洞窟風呂・サウナ完備",
                "博多名物牛もつ鍋や水炊き御膳・湯上がり処やリラクゼーションも充実",
                "太宰府駅からの無料送迎バス運行・家族連れやグループ旅行にも安心"
              ]
            },
            {
              id: 4,
              name: "二日市温泉　扇屋旅館＜福岡県＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/44834/44834.jpg",
              rating: 3.67,
              reviews: 36,
              price: "¥5,500〜",
              access: "JR　二日市駅より車で５分／西鉄大牟田線　二日市駅よりバスで１０分",
              special: "真心こもったサービス。家庭的な温かい宿で旅の疲れを癒してください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44834%2F44834.html",
              story: "二日市温泉の歴史ある街並みに佇み、創業以来家族的な温もりと細やかなおもてなしで参拝客を迎える純和風旅館「二日市温泉 扇屋旅館＜福岡県＞」。大正時代を思わせる木造の風情ある館内には、天然のラドン温泉を引くこぢんまりとした大浴場があり、美肌効果と保温効果に優れた名湯を24時間いつでも静かに楽しめます。夕食は玄界灘の冬の海の幸や地元福岡の山の幸を手作りした心温まる和食膳。アットホームでリーズナブルな価格設定も魅力で、太宰府天満宮での合格祈願や初詣の前泊・後泊に温かな癒やしを提供してくれます。",
              roomTip: "純和風和室。畳の香りと障子越しの柔らかい冬の光が心地よく、気兼ねなく足を伸ばしてリラックスできます。",
              gourmetTip: "「手作り郷土会席膳」。玄界灘の冬の白身魚のお造りや季節の炊き込みご飯、身体が温まる小鍋仕立ての家庭会席。",
              highlights: [
                "二日市温泉の純和風老舗旅館・名湯ラドン温泉と心温まるおもてなし",
                "玄界灘の冬の鮮魚と旬の和食膳・歴史ある二日市温泉街の情緒を満喫",
                "24時間入浴可能な天然温泉・アットホームで心温まる冬の温泉逗留"
              ]
            },
            {
              id: 5,
              name: "二日市グリーンホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54960/54960.jpg",
              rating: 3.38,
              reviews: 474,
              price: "¥5,300〜",
              access: "ＪＲ二日市駅改札出入口(東)より約110ｍ／西鉄二日市駅西口から約800ｍ／西鉄紫駅から約500ｍ　地図をご覧下さい。",
              special: "ＪＲ二日市駅約100m！西鉄二日市駅約800ｍ！紫駅約500ｍ！ＪＲ二日市駅から一番近いホテルです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54960%2F54960.html",
              story: "JR二日市駅から徒歩約1分、西鉄紫駅からも徒歩圏内という抜群の交通利便性を誇るビジネスホテル「二日市グリーンホテル」。JRを利用すれば博多駅まで快速で約15分、西鉄を利用すれば太宰府駅まで約15分と、福岡市内観光と太宰府天満宮初詣の両方を軽快に楽しむことができます。全室に高速Wi-Fi、加湿器、個別空調を完備し、受験生の宿泊にも安心。近隣には二日市温泉の歴史ある共同浴場「御前湯（ごぜんゆ）」や「博多湯」があり、気軽に外湯めぐりを楽しみながらスマートな宿泊が叶います。",
              roomTip: "シングルルーム。明るいデスク環境と快適なベッドを備え、受験直前の集中やビジネスユースにも最適。",
              gourmetTip: "「和洋朝食サービス」。炊きたてのご飯と温かい味噌汁、定番のおかずが揃い、朝の参拝へ向けた元気なスタートをサポート。",
              highlights: [
                "JR二日市駅徒歩1分の抜群アクセス・太宰府初詣と博多観光の両立に最適な高コスパ宿",
                "二日市温泉「博多湯」「御前湯」の外湯めぐり至近・受験生応援の静かな客室",
                "博多駅まで快速15分・新幹線や飛行機利用の旅行者にも便利なフットワーク"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "太宰府天満宮の新春初詣（正月三が日）の混雑状況と狙い目の参拝時間は？",
    "a": "太宰府天満宮は正月三が日に全国から約200万人以上の初詣参拝客が訪れる九州最大の初詣スポットです。特に大晦日23時〜元旦3時、および三が日の10時〜16時は西鉄太宰府駅前から参道、本殿（仮殿）前まで身動きが取れないほどの人波となります。混雑を避けるなら、早朝（朝6時〜8時台）または夕方（17時以降）がおすすめです。冬の早朝は張り詰めた神聖な空気の中、静かに参拝でき、参道の梅ヶ枝餅店も早朝から焼き立てを提供しています。"
  },
  {
    "q": "太宰府天満宮の名物「梅ヶ枝餅（うめがえもち）」の特徴と特別な日の限定餅とは？",
    "a": "梅ヶ枝餅は、もち米とうるち米の生地に上品な小豆あんを包み、梅の刻印が入った鉄板で香ばしく焼き上げた太宰府の伝統銘菓です。菅原道真公が太宰府に左遷され不遇な日々を送っていた際、浄妙尼（じょうみょうに）という老婆が梅の枝に餅を巻き付けて差し入れた故事が由来です。毎月25日（天神さまの日）には「よもぎ入り（緑色）」の梅ヶ枝餅が、毎月17日（きゅうしゅうの日）には「古代米入り（紫色）」の梅ヶ枝餅が限定販売され、大変な人気を集めます。"
  },
  {
    "q": "現在公開中の「仮殿（かりでん）」の見どころと御神木「飛梅（とびうめ）」の開花は？",
    "a": "重要文化財の本殿が約124年ぶりの大改修（令和の大改修）を行っている期間中、参拝者を迎えるために建設された「仮殿」は、世界的な建築家・藤本壮介氏が設計を担当しました。屋根の上に天満宮周辺の植物や梅の木が浮かぶように茂る「浮かぶ森」のような斬新で美しい現代建築で、今しか見られない貴重な文化財です。また、本殿前右手の御神木「飛梅」は、道真公を慕って都から飛んできた伝説を持ち、極めて早咲きの白梅として例年1月上旬〜中旬にいち早く可憐な花を咲かせます。"
  },
  {
    "q": "万葉集にも詠まれた名湯「二日市温泉」の歴史と泉質・効能は？",
    "a": "二日市温泉（福岡県筑紫野市）は、奈良時代の『万葉集』に大伴旅人（おおとものたびと）らが詠んだ歌が残る、開湯1300年以上の歴史を誇る九州最古級の名湯です。菅原道真公も天拝山に向かう前にこの湯で心身を清めたと伝えられています。泉質はアルカリ性単純温泉（単純弱放射能温泉）で、微量のラドンを含み、硫黄の香りが微かに漂います。入浴すると肌がツルツルになる美肌効果と、身体の芯まで温まる高い保温効果があり、冬の冷え性や疲労回復に抜群の効能を発揮します。"
  },
  {
    "q": "博多・福岡空港から太宰府・二日市へのアクセス方法と冬の移動ルートは？",
    "a": "西鉄電車を利用する場合、西鉄福岡（天神）駅から特急・急行で西鉄二日市駅まで約15分、太宰府線に乗り換えて太宰府駅まで約5分（合計約25分）で到着します。博多駅や福岡空港からは、直行バス「太宰府ライナーバス旅人（たびと）」が運行しており、博多駅から約40分、福岡空港国際線から約25分で太宰府駅へ直通アクセスできます。車の場合、年末年始や1月の週末は太宰府IC周辺および天満宮周辺で大規模な渋滞が発生するため、西鉄電車やJR電車の利用が最も確実で快適です。"
  }
];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    name: "【11・12・1月福岡】学問の神様・太宰府天満宮の合格祈願＆新春200万人初詣と名物「梅ヶ枝餅」・万葉の古湯二日市温泉と博多和牛の名宿5選",
    description: "11月から1月、福岡・太宰府は本格的な受験シーズンの合格祈願と、新春三が日に200万人以上が訪れる日本屈指の初詣で最も熱気と神気に包まれる季節を迎えます。菅原道真公を祀る全国約1万2000社の総本宮「太宰府天満宮」では、屋根に緑が茂る美しい現代の仮殿や、道真公を慕って咲く御神木「飛梅（とびうめ）」が冬の境内を神聖に彩ります。参道で頬張る出来立て熱々の名物「梅ヶ枝餅」、万葉集に詠まれた開湯1300年の九州最古の名湯「二日市温泉」、そしてとろける旨味の「博多和牛」や名物水炊き。学業成就と開運を願う冬の厳選名宿5選をご紹介します。",
    url: 'https://croud-travel.pages.dev/winter-fukuoka-dazaifu-tenmangu-hatsumode-futsukaichi-beef-stay',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://croud-travel.pages.dev/' },
        { '@type': 'ListItem', position: 2, name: '冬の特集一覧', item: 'https://croud-travel.pages.dev/features/' },
        { '@type': 'ListItem', position: 3, name: '太宰府天満宮初詣＆二日市温泉ステイ', item: 'https://croud-travel.pages.dev/winter-fukuoka-dazaifu-tenmangu-hatsumode-futsukaichi-beef-stay' }
      ]
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: hotelsData.map((h, idx) => ({
        '@type': 'Hotel',
        position: idx + 1,
        name: h.name,
        image: h.img,
        priceRange: h.price,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: h.rating,
          reviewCount: h.reviews
        },
        address: {
          '@type': 'PostalAddress',
          addressRegion: '福岡県',
          addressLocality: idx === 1 || idx === 2 ? '太宰府市' : '筑紫野市'
        }
      }))
    }
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqListItems.map((item: { q: string; a: string }) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  };


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月福岡】学問の神様・太宰府天満宮の合格祈願＆新春200万人初詣と名物「梅ヶ枝餅」・万葉の古湯二日市温泉と博多和牛の名宿5選",
    "description": "11月から1月、福岡・太宰府は本格的な受験シーズンの合格祈願と、新春三が日に200万人以上が訪れる日本屈指の初詣で最も熱気と神気に包まれる季節を迎えます。菅原道真公を祀る全国約1万2000社の総本宮「太宰府天満宮」では、屋根に緑が茂る美しい現代の仮殿や、道真公を慕って咲く御神木「飛梅（とびうめ）」が冬の境内を神聖に彩ります。参道で頬張る出来立て熱々の名物「梅ヶ枝餅」、万葉集に詠まれた開湯1300年の九州最古の名湯「二日市温泉」、そしてとろける旨味の「博多和牛」や名物水炊き。学業成就と開運を願う冬の厳選名宿5選をご紹介します。",
    "url": "https://croud-travel.pages.dev/winter-fukuoka-dazaifu-tenmangu-hatsumode-futsukaichi-beef-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【11・12・1月福岡】学問の神様・太宰府天満宮の合格祈願＆新春200万人初詣と名物「梅ヶ枝餅」・万葉の古湯二日市温泉と博多和牛の名宿5選", "item": "https://croud-travel.pages.dev/winter-fukuoka-dazaifu-tenmangu-hatsumode-futsukaichi-beef-stay/" }
    ]
  };

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-indigo-100 selection:text-indigo-900 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-white overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs sm:text-sm font-semibold tracking-wide">
            <Snowflake className="w-4 h-4 text-indigo-300" />
            11月・12月・1月 冬の学業成就・新春200万人初詣＆万葉名湯特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-snug text-stone-100 font-serif">天神さまの祈りと熱々梅ヶ枝餅、万葉の古湯<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-sky-200 to-amber-200"> 太宰府天満宮合格祈願・初詣＆二日市温泉・博多和牛の名宿 </span></h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-light">
            学問の神様・菅原道真公を祀る全国総本宮「太宰府天満宮」。受験合格祈願と200万人が集う新春初詣の熱気、話題の仮殿と早咲きの御神木「飛梅」、香ばしい名物「梅ヶ枝餅」。そして万葉集にも詠まれた開湯1300年の名湯「二日市温泉」と極上「博多和牛」に癒やされる珠玉の冬旅へご案内します。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Calendar className="w-4 h-4 text-indigo-400" /> 旬の時期：11月〜1月
            </span>
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Utensils className="w-4 h-4 text-indigo-400" /> 梅ヶ枝餅・博多和牛・水炊き
            </span>
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Flame className="w-4 h-4 text-indigo-400" /> 万葉の二日市温泉・古民家宿
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Feature Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-indigo-600 pl-4">
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              冬の太宰府が放つ神聖なエネルギーと、万葉集の湯の癒やし
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              合格祈願の絵馬が揺れる天神さまの神域と、1300年の歴史が温める二日市温泉
            </p>
          </div>

          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              福岡県太宰府市に鎮座する太宰府天満宮は、学問・文化・厄除けの神様として崇敬される菅原道真公の御墓所の上に建てられた全国約1万2000社の天満宮の総本宮です。11月の七五三から、12月〜1月の高校・大学入試を迎える本格的な受験シーズン、そして正月三が日の新春初詣にかけて、全国から200万人以上の参拝者が集まり、境内は祈りと熱気で満ち溢れます。現在、約124年ぶりの大改修に伴い公開されている「仮殿」は、建築家・藤本壮介氏が手掛けた屋根の上に緑の森が浮かぶ美しい現代建築で、今しか見られない特別な美を誇ります。
            </p>
            <p>
              太宰府の冬の風物詩として外せないのが、本殿前右手に佇む御神木「飛梅（とびうめ）」です。道真公を慕って京都から一夜にして飛んできたという伝説を持つこの白梅は、日本屈指の早咲きの梅として知られ、寒さが厳しい1月上旬〜中旬にいち早く芳しい花を開かせ、春の訪れを告げます。参拝の行き帰りには、賑やかな門前町で出来立て熱々の名物「梅ヶ枝餅」を頬張るのがお約束。パリッと香ばしい焼き目と上品な小豆あんの温かさが、冬の参道を歩く身体にじんわりと染み渡ります。
            </p>
            <p>
              太宰府天満宮から電車や車でわずか10分ほどの距離に位置する「二日市温泉」は、奈良時代の『万葉集』に大伴旅人らの歌が残る九州最古級の天然温泉です。菅原道真公も身を清めたと伝わる由緒ある名湯は、柔らかな肌触りと微量のラドンを含み、身体の芯から温める抜群の保温力を誇ります。慶応元年創業の名門旅館「大丸別荘」をはじめとする歴史ある名宿で、霜降り「博多和牛」のステーキやすき焼き、滋味豊かな博多の郷土料理を味わう冬の旅は、学業成就や一年の開運を願う旅人に最高のエネルギーをチャージしてくれます。
            </p>
          </div>

          {/* Highlights 3-column Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-indigo-50/50 border border-indigo-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-stone-900 text-base">合格祈願・初詣＆話題の仮殿</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                学問の神様へ祈る200万人の初詣。森が浮かぶ現代建築の仮殿と早咲きの御神木「飛梅」の神聖な美。
              </p>
            </div>

            <div className="bg-indigo-50/50 border border-indigo-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-stone-900 text-base">出来立て熱々の名物「梅ヶ枝餅」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                香ばしい焼き目と優しい甘さの小豆あん。25日限定よもぎ餅など参道に漂う香ばしい名物グルメ巡り。
              </p>
            </div>

            <div className="bg-indigo-50/50 border border-indigo-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-stone-900 text-base">万葉の二日市温泉＆博多和牛</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                開湯1300年・万葉集のラドン美肌泉。老舗の三千坪日本庭園宿で味わう極上霜降り博多和牛会席。
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Timeline Model Course Section */}
        <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-stone-800 pb-4">
            <span className="text-indigo-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">
              【1泊2日】太宰府合格祈願・初詣と万葉の古湯・博多和牛美食黄金モデルコース
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm mt-1">
              西鉄電車で天神・博多から約25分。天神さまと名湯を巡る開運リフレッシュの旅。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">DAY 1 午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  14:00 博多・福岡空港発 ➔ 西鉄電車で二日市温泉チェックイン＆外湯めぐり
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  西鉄福岡（天神）駅または博多駅から西鉄電車で二日市温泉へ。慶応元年創業の大丸別荘や温泉宿にチェックインし、源泉掛け流しラドン温泉に浸かって長旅の疲れを解きほぐします。風情ある温泉街の共同浴場「博多湯」で外湯の熱湯を体験。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">DAY 1 夕刻〜夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  18:30 極上霜降り「博多和牛ステーキ」＆本場博多の郷土鍋ディナー
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  宿で味わう伝統の会席料理。福岡県産の黒毛和牛「博多和牛」のステーキやすき焼き、玄界灘の冬の鮮魚、博多名物のもつ鍋や水炊き小鍋を堪能。三千坪の日本庭園の夜景を眺めながら、静かに心身を整える贅沢な一夜を過ごします。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">DAY 2 早朝〜朝</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  08:00 太宰府天満宮へ ➔ 話題の仮殿参拝・合格祈願・御神木「飛梅」鑑賞
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  混雑前の朝一番に西鉄電車で太宰府駅へ。神聖な太鼓橋を渡り、藤本壮介氏設計の美しい緑の「仮殿」で学業成就や一年の開運を静かに祈願。早咲きの白梅・御神木「飛梅」を愛で、絵馬を奉納して心を込めて祈ります。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">DAY 2 昼〜午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  11:00 参道で焼き立て「梅ヶ枝餅」食べ比べ ➔ 九州国立博物館見学〜帰路へ
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  参道沿いの老舗「かさの家」などで出来立てアツアツの梅ヶ枝餅を購入し、パリッとした皮と温かい小豆あんを堪能。隣接する九州国立博物館で特別展を見学した後、太宰府ライナーバス旅人で博多駅や福岡空港へ戻り帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Gastronomy & Culture Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Gastronomy & Culture</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              太宰府名物「梅ヶ枝餅」の由緒と、福岡の至宝「博多和牛」
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-indigo-700" />
                菅原道真公の伝説が息づく「梅ヶ枝餅」の温かな歴史
              </h3>
              <p>
                太宰府参道の名物「梅ヶ枝餅」は、大宰府に左遷された菅原道真公を見かねた近所の老婆・浄妙尼が、道真公の好物であった餅に梅の枝を添えて差し入れたことが始まりと伝わります。うるち米ともち米を絶妙な比率で配合した生地に、北海道産小豆の上品な粒あんを包み、鉄板で両面を香ばしく焼き上げます。熱々の焼きたては外皮がパリッと香ばしく、中はモチモチ。冬の参道を歩きながら味わう手元の温もりは太宰府観光の何よりの記憶になります。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-indigo-700" />
                稲わらと清流水で育まれた極上黒毛和牛「博多和牛」
              </h3>
              <p>
                福岡県内の登録農家で良質な稲わらと清冽な水で丁寧に育てられた「博多和牛」。肉質はやわらかく、赤身と霜降りのバランスが抜群で、噛むほどにジューシーな旨味と甘みが口いっぱいに広がります。冬には上質な割り下で煮立てるすき焼き鍋や、炭火で香ばしく焼き上げるステーキが絶品。博多名物の水炊きやもつ鍋とともに、福岡の冬の豊かな食文化を象徴する極上グルメです。
              </p>
            </div>
          </div>
        </section>

        {/* Selected Hotels Section */}
        <section className="space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-indigo-700 font-bold text-xs sm:text-sm tracking-wider uppercase block">
              Handpicked Accommodations
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif">
              太宰府天満宮初詣＆二日市温泉を愉しむ厳選名宿5選
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm">
              公式楽天トラベルAPIより取得した最新の宿泊データ・クチコミ・最低料金を掲載
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((hotel: any) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-3xl border border-stone-200/90 shadow-xs overflow-hidden transition-all duration-300 hover:border-indigo-400 hover:shadow-md"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Hotel Header Badge & Title */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100/70 text-indigo-800 text-xs font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                        厳選名宿 No.{hotel.id}
                      </span>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="flex items-center gap-1 text-indigo-600 font-bold">
                          <Star className="w-4 h-4 fill-indigo-400 text-indigo-400" />
                          {hotel.rating}
                        </span>
                        <span className="text-stone-400">({hotel.reviews}件のクチコミ)</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group">
                      <a 
                        href={hotel.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-indigo-700 transition-colors inline-flex items-center gap-2"
                      >
                        {hotel.name}
                        <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-indigo-700 inline" />
                      </a>
                    </h3>

                    <p className="text-stone-500 text-xs sm:text-sm flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-indigo-600 shrink-0" />
                      {hotel.access}
                    </p>
                  </div>

                  {/* Hotel Image & Price Banner */}
                  <div className="relative rounded-2xl overflow-hidden aspect-video sm:aspect-21/9 bg-stone-100">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 right-3 bg-stone-900/85 backdrop-blur-xs text-white px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold shadow-md">
                      参考宿泊料金：<span className="text-indigo-300 font-bold">{hotel.price}</span> / 名
                    </div>
                  </div>

                  {/* Editorial Story */}
                  <div className="space-y-3 bg-stone-50/70 rounded-2xl p-4 sm:p-5 border border-stone-200/60">
                    <h4 className="text-xs sm:text-sm font-bold text-indigo-900 flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-indigo-600" />
                      宿の魅力と冬の滞在ストーリー
                    </h4>
                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                      {hotel.story}
                    </p>
                  </div>

                  {/* Tips 2-col */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="bg-indigo-50/30 border border-indigo-100 rounded-xl p-3.5 space-y-1">
                      <span className="font-bold text-indigo-900 flex items-center gap-1">
                        <ThermometerSun className="w-3.5 h-3.5 text-indigo-700" /> おすすめの客室
                      </span>
                      <p className="text-stone-600 text-xs leading-relaxed">{hotel.roomTip}</p>
                    </div>
                    <div className="bg-indigo-50/30 border border-indigo-100 rounded-xl p-3.5 space-y-1">
                      <span className="font-bold text-indigo-900 flex items-center gap-1">
                        <Utensils className="w-3.5 h-3.5 text-indigo-700" /> 冬の自慢グルメ
                      </span>
                      <p className="text-stone-600 text-xs leading-relaxed">{hotel.gourmetTip}</p>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                      Key Highlights
                    </span>
                    <ul className="space-y-1.5">
                      {hotel.highlights.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200"
                    >
                      楽天トラベルで空室・冬の宿泊プランを確認する
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Tips Section */}
        <section className="bg-indigo-50/60 rounded-3xl p-6 sm:p-10 border border-indigo-200/60 space-y-6">
          <div className="border-b border-indigo-200/80 pb-4">
            <span className="text-indigo-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Traveler Tips</span>
            <h2 className="text-xl sm:text-2xl font-bold text-indigo-950 font-serif">
              太宰府天満宮初詣＆二日市温泉を快適に巡るための実践アドバイス
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-indigo-950">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-indigo-700" />
                西鉄電車・直行バスの活用で渋滞回避
              </div>
              <p className="leading-relaxed text-stone-700">
                初詣期間や1月の受験シーズンは太宰府ICや県道が終日大渋滞します。西鉄福岡（天神）駅からの電車や、博多駅・福岡空港からの「太宰府ライナーバス旅人」の利用が最も時間を正確に読めて快適です。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Utensils className="w-4 h-4 text-indigo-700" />
                焼きたて梅ヶ枝餅の限定日チェック
              </div>
              <p className="leading-relaxed text-stone-700">
                梅ヶ枝餅は毎月25日限定で「よもぎ入り（緑）」、毎月17日限定で「古代米入り（紫）」が販売されます。通常の白餅も店頭の焼き立てが一番美味しいので、食べ歩き用として出来立てをぜひ味わってください。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-indigo-700" />
                二日市温泉の外湯「博多湯」「御前湯」
              </div>
              <p className="leading-relaxed text-stone-700">
                二日市温泉に泊まる際は、温泉街の歴史ある公衆浴場「博多湯（源泉掛け流しで硫黄が香る熱湯）」の外湯めぐりもおすすめ。入浴用のフェイスタオルを1枚持参しておくと気軽に立ち寄れます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-indigo-600 pl-4">
            <span className="text-indigo-700 font-bold text-xs uppercase tracking-wider block">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              太宰府天満宮初詣・梅ヶ枝餅＆二日市温泉に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-indigo-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-700 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
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
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              あわせて読みたい九州・全国の初詣・名湯・冬グルメ特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-saga-tara-takezaki-crab-yutoku-inari-ureshino-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-700 font-bold text-xs block mb-1">佐賀・祐徳稲荷＆嬉野</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-800 transition-colors line-clamp-2">
                日本三大稲荷の初詣と冬の竹崎カニ＆日本三大美肌の湯嬉野温泉名宿
              </span>
            </Link>

            <Link 
              href="/winter-nagasaki-city-inasayama-nightview-glover-champon-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-700 font-bold text-xs block mb-1">長崎・稲佐山夜景</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-800 transition-colors line-clamp-2">
                世界新三大夜景とグラバー園イルミネーション＆本場ちゃんぽん名宿
              </span>
            </Link>

            <Link 
              href="/winter-miyazaki-takachiho-night-kagura-beef-onsen-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-700 font-bold text-xs block mb-1">宮崎・高千穂峡</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-800 transition-colors line-clamp-2">
                冬の夜を徹して舞う高千穂夜神楽と高千穂峡冬景色・高千穂牛名宿
              </span>
            </Link>

            <Link 
              href="/winter-kumamoto-kurokawa-onsen-yuakari-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-700 font-bold text-xs block mb-1">熊本・黒川温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-800 transition-colors line-clamp-2">
                冬の幻想美「湯あかり」竹灯籠と入湯手形露天風呂めぐり名宿
              </span>
            </Link>

            <Link 
              href="/winter-fukuoka-itoshima-oyster-hakata-fugu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-700 font-bold text-xs block mb-1">福岡・糸島＆博多</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-800 transition-colors line-clamp-2">
                冬の糸島焼き牡蠣小屋と極上博多とらふぐ・玄界灘美食名宿
              </span>
            </Link>

            <Link 
              href="/winter-mie-ise-jingu-hatsumode-okageyokocho-iseebi-matsusaka-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-indigo-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-indigo-700 font-bold text-xs block mb-1">三重・伊勢神宮</span>
              <span className="text-stone-900 font-bold group-hover:text-indigo-800 transition-colors line-clamp-2">
                新春の伊勢神宮初詣とおかげ横丁・伊勢海老＆松阪牛会席名宿
              </span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-fukuoka-dazaifu-tenmangu-hatsumode-futsukaichi-beef-stay" />
</div>
        </section>
      </main>
    </article>
  );
}
