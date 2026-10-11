import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Sunrise, Waves, Sun, Flame, Landmark, Building, Camera, ShoppingBag, ThermometerSun, Fish
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月神奈川：鶴岡八幡宮新春初詣！名宿5選',
  description: '11月から1月、湘南・鎌倉・江の島は澄み切った冬空が広がり、相模湾の向こうに純白の冠雪を抱いた富士山が最もくっきりと美しく浮かび上がります。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '鎌倉 江の島 冬 旅行, 湘南の宝石, 江の島シーキャンドル イルミネーション, 鶴岡八幡宮 初詣, 富士山 夕景 湘南, 鎌倉プリンスホテル, ホテルメトロポリタン鎌倉, 江の島ホテル, ブレスホテル, かいひん荘鎌倉, 寒平目 カワハギ 肝和え, 葉山牛, 11月 12月 1月 神奈川旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kanagawa-kamakura-enoshima-jewel-shrine-fuji-stay/"
  },
  openGraph: {
    title: '11・12・1月神奈川：鶴岡八幡宮新春初詣！名宿5選',
    description: '11月から1月、湘南・鎌倉・江の島は澄み切った冬空が広がり、相模湾の向こうに純白の冠雪を抱いた富士山が最もくっきりと美しく浮かび上がります。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-kanagawa-kamakura-enoshima-jewel-shrine-fuji-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の相模湾と夕暮れの富士山・江の島の絶景'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月神奈川：冬の湘南・江の島シーキャンドル「湘南の宝石」イルミネーション＆鶴岡八幡宮新春初詣・富士山夕景と相模湾冬の地魚を味わう名宿5選",
    description: "11月から1月、湘南・鎌倉・江の島は澄み切った冬空が広がり、相模湾の向こうに純白の冠雪を抱いた富士山が最もくっきりと美しく浮かび上がります。関東三大イルミネーションに数えられる「湘南の宝石」で光輝く江の島シーキャンドル、新春の幕開けを厳かに祈る鶴岡八幡宮や長谷寺の初詣、海沿いを走るレトロな江ノ電、そして冬に脂が乗る寒平目や相模湾の地魚、希少な葉山牛。海と古都の歴史が調和する冬の湘南・鎌倉を満喫する厳選名宿5選と1泊2日の冬のモデルコースを徹底解説します。",
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function KanagawaKamakuraEnoshimaWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "11・12・1月神奈川：冬の湘南・江の島シーキャンドル「湘南の宝石」イルミネーション＆鶴岡八幡宮新春初詣・富士山夕景と相模湾冬の地魚を味わう名宿5選",
    description: "11月から1月、湘南・鎌倉・江の島は澄み切った冬空が広がり、相模湾の向こうに純白の冠雪を抱いた富士山が最もくっきりと美しく浮かび上がります。関東三大イルミネーションに数えられる「湘南の宝石」で光輝く江の島シーキャンドル、新春の幕開けを厳かに祈る鶴岡八幡宮や長谷寺の初詣、海沿いを走るレトロな江ノ電、そして冬に脂が乗る寒平目や相模湾の地魚、希少な葉山牛。海と古都の歴史が調和する冬の湘南・鎌倉を満喫する厳選名宿5選と1泊2日の冬のモデルコースを徹底解説します。",
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
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
      '@id': 'https://croud-travel.pages.dev/winter-kanagawa-kamakura-enoshima-jewel-shrine-fuji-stay'
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
        name: '冬の鎌倉・江の島湘南の宝石＆初詣特集',
        item: 'https://croud-travel.pages.dev/winter-kanagawa-kamakura-enoshima-jewel-shrine-fuji-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "関東三大イルミネーション「湘南の宝石（江の島シーキャンドル）」の開催時期と見どころは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "「湘南の宝石」は、江の島サムエル・コッキング苑および江の島シーキャンドルを中心に、毎年11月下旬から2月中旬にかけて開催される日本有数の光の祭典です。最高峰の透明度を誇る冬の空気の中、シーキャンドルから360度に広がる「光の大空間」や、数万個のスワロフスキー・クリスタルが輝くクリスタルゲートなど、圧巻のイルミネーションが島全体を包みます。日没直後のトワイライトタイムには、茜色に染まる富士山のシルエットとイルミネーションが同時に楽しめる奇跡の瞬間が訪れます。"
        }
      },
      {
        '@type': 'Question',
        name: "冬（11月・12月・1月）に湘南・鎌倉から富士山が最も綺麗に見える時間帯とビュースポットは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "湘南海岸から富士山を最も美しく鑑賞できるのは、空気が乾燥して澄み渡る11月から2月の冬期です。時間帯としては「午前中の早い時間（日の出後〜10時頃）」と「夕暮れ時（16時半〜17時過ぎ）」の2回が絶景タイミング。午前中は青空を背景に白雪を冠した富士山がくっきりと見え、夕方は夕陽に照らされた富士の稜線が茜色から紫色へと美しく染まります。名所としては七里ヶ浜海岸、稲村ヶ崎、江の島弁天橋、湘南海岸公園が代表的です。"
        }
      },
      {
        '@type': 'Question',
        name: "鶴岡八幡宮や長谷寺の新春初詣の混雑状況と参拝のコツは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "源頼朝ゆかりの鶴岡八幡宮は、正月三が日に例年200万人以上の参拝者が訪れる関東屈指の初詣スポットです。大晦日の深夜から元旦、正月三が日の10時〜16時は本宮へ向かう大石段で入場規制が行われ、参拝まで数時間待ちになることもあります。混雑を避けるなら、早朝（午前6時〜8時台）または夕方17時以降の参拝がおすすめです。また、長谷寺や鎌倉大仏（高徳院）も新春の厳かな雰囲気が素晴らしく、午前中の早い時間帯に訪れると落ち着いて新年の祈願ができます。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の相模湾・三浦半島で旬を迎える地魚と冬限定グルメは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "冬の相模湾は海水温が下がり、魚に上質な脂が乗る最高のシーズンです。代表格は「寒平目（かんばらめ）」「寒ブリ」「金目鯛」、そして冬の味覚「カワハギの肝和え」です。透き通るような白身に濃厚な肝を溶かした醤油でいただくカワハギは冬ならではの絶品。また、三浦半島の肥沃な大地で育つ甘みたっぷりの「三浦大根」を使った煮物料理や、幻のブランド和牛「葉山牛」のステーキなど、冬の海と大地の贅沢な味覚が揃います。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の鎌倉・江の島旅行の服装・足元と江ノ電利用のポイントは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "湘南・鎌倉は内陸部に比べると比較的温暖ですが、海岸沿いは冬の強い海風が吹き抜けるため体感温度はぐっと下がります。防風性のあるコートやダウン、マフラー、手袋を持参しましょう。また、鎌倉の寺社巡りや江の島の階段・坂道散策ではかなりの距離を歩くため、歩きやすいフラットなスニーカーやウォーキングシューズが必須です。江ノ電を利用する際は、全線1日乗り降り自由な「のりおりくん」を活用すると、極楽寺、長谷、由比ヶ浜、七里ヶ浜、江の島を効率よく周遊できます。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "鎌倉プリンスホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1679/1679.jpg",
              rating: 4.38,
              reviews: 1816,
              price: "¥12,576〜",
              access: "江ノ島電鉄七里ヶ浜駅～徒歩約8分。無料送迎バスあり。または有料バスにて潮騒通り下車徒歩約1分。",
              special: "相模湾を望む、七里ヶ浜の丘に建つホテル。すべてのお部屋から相模湾の風景が望めます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1679%2F1679.html",
              story: "七里ヶ浜の高台に弧を描くように建ち、全室オーシャンビューを誇る名門リゾート「鎌倉プリンスホテル」。冬の大気が澄み渡るこの季節、客室の窓からは青く輝く相模湾と江の島、そしてその背後にそびえる白銀の富士山が一幅の絵画のように広がります。夕暮れ時には富士山のシルエットが茜色から紫色のグラデーションに染まり、息をのむ美しさを独占。江ノ電「七里ヶ浜駅」から徒歩圏内にあり、江の島方面へも鎌倉市街へもアクセス抜群です。館内レストラン「ル・トリアノン」では、相模湾の冬の鮮魚や三浦野菜、上質な牛フィレ肉を取り入れた本格フレンチが提供され、海を眺めながら優雅なディナータイムを過ごせます。",
              roomTip: "富士山ビューツインルーム。天候に恵まれる冬は、相模湾と江の島、雪化粧の富士山が重なる奇跡のパノラマを朝から夕暮れまで満喫できます。",
              gourmetTip: "「フレンチ・ル・トリアノンの冬の特選ディナー。」。相模湾産平目のポワレや三浦大根のポタージュなど、湘南の海と大地の冬の恵みが凝縮。",
              highlights: [
                "全室オーシャンビュー・七里ヶ浜越しの雪化粧富士山と江の島夕景の絶景パノラマ",
                "レストラン「ル・トリアノン」で味わう相模湾の冬魚と三浦野菜の本格フレンチ",
                "江ノ電七里ヶ浜駅徒歩圏・海沿いを走るレトロな江ノ電観光の拠点に最適"
              ]
            },
            {
              id: 2,
              name: "ホテルメトロポリタン鎌倉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/177689/177689.jpg",
              rating: 4.68,
              reviews: 1616,
              price: "¥14,200〜",
              access: "JR鎌倉駅東口より徒歩にて約２分",
              special: "鎌倉駅徒歩２分の若宮大路沿いで観光拠点に最適！全室禁煙と洗い場付バスルームを完備。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177689%2F177689.html",
              story: "JR鎌倉駅東口から徒歩わずか2分、鎌倉のメインストリート若宮大路沿いに佇む「ホテルメトロポリタン 鎌倉」。鶴岡八幡宮の参道に位置するため、新春の初詣や古都の散策拠点としてこれ以上ない最高の立地を誇ります。客室は木の温もりと和の情緒を散りばめたモダンなインテリアで、全室に洗い場付きの広々としたバスルームと加湿空気清浄機を完備。中庭の緑を望む吹き抜けのロビーや、地元・鎌倉の味覚を取り入れた提携カフェ「Café & Meal MUJI」での朝食など、暮らすように鎌倉に滞在できる上質なくつろぎが魅力です。夜の静かな鎌倉の路地裏散策も思いのままに楽しめます。",
              roomTip: "プレミアムコーナーツイン。二面採光の大きな窓から若宮大路の木立を望み、小上がりスペースで靴を脱いでゆったりと寛げます。",
              gourmetTip: "「ごちそう朝食セット」。地元の鎌倉野菜をふんだんに使った彩り豊かなサラダや温かいスープ、三浦半島産の魚料理が朝の活力を与えてくれます。",
              highlights: [
                "若宮大路沿い＆鎌倉駅徒歩2分・鶴岡八幡宮初詣や小町通り散策に最高のロケーション",
                "木の温もりある上質な和モダン空間・全室洗い場付きバスルームと加湿空気清浄機",
                "夜の静かな鎌倉の路地裏散策や早朝の八幡宮参拝など宿泊者ならではの贅沢"
              ]
            },
            {
              id: 3,
              name: "江の島ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/179415/179415.jpg",
              rating: 4.19,
              reviews: 180,
              price: "¥11,400〜",
              access: "小田急江ノ島線～片瀬江ノ島駅より徒歩約１０分",
              special: "江の島ホテル2020年3月開業。江ノ島大橋近くに位置し「江の島アイランドスパ」や観光拠点に便利",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179415%2F179415.html",
              story: "江の島の島内、弁天橋を渡ったその先に佇む唯一無二のロケーションを誇る「江の島ホテル」。隣接する天然温泉スパ施設「江の島アイランドスパ」を滞在中に利用でき、地下1,500mから湧き出る天然温泉と相模湾・富士山を一望する絶景露天風呂を心ゆくまで堪能できます。夜には冬の澄んだ大気の中、島頂上にそびえる江の島シーキャンドルのイルミネーション「湘南の宝石」を間近に楽しめ、点灯の瞬間の感動を宿のすぐそばで味わえるのが最大の魅力。夕食には江の島名物の新鮮な海の幸や冬の煮魚料理が振る舞われ、島に泊まるからこその非日常感を存分に体感できます。",
              roomTip: "オーシャンビューツイン。湘南の海と富士山を望み、波の音をBGMに眠りにつく贅沢なアイランドステイが約束されます。",
              gourmetTip: "「相模湾の地魚御膳」。冬の脂が乗った鮮魚のお刺身や名物サザエのつぼ焼きなど、獲れたての磯の香りをダイレクトに味わえます。",
              highlights: [
                "江の島島内の特等席・直結スパの天然温泉露天風呂と湘南の宝石イルミネーション",
                "江の島アイランドスパ利用可・冬の澄んだ海風と富士山を望む絶景温泉浴",
                "冬の脂が乗った地魚やサザエのつぼ焼きなど獲れたての海の幸会席"
              ]
            },
            {
              id: 4,
              name: "ＢＲＥＡＴＨ　ＨＯＴＥＬ（ブレスホテル）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/147040/147040.jpg",
              rating: 4.79,
              reviews: 501,
              price: "¥13,915〜",
              access: "鵠沼海岸駅より徒歩15分",
              special: "湘南の自然の恵みと最上のホスピタリティーでくつろぐ空間。深呼吸してカラダが目覚めるのを感じてください",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147040%2F147040.html",
              story: "湘南海岸公園のすぐそば、江の島と相模湾を正面に望む全16室のスモールラグジュアリーホテル「BREATH HOTEL（ブレスホテル）。」。すべての客室に人工温泉のマイクロバブルバスや大型ブロアバス、最新のエンターテインメント設備を備え、究極の癒しとリラクゼーションを追求しています。アメニティには上質なオーガニックコスメを揃え、全室から冬の澄んだ海と江の島の美しいシルエットを鑑賞可能。夕食・朝食ともにお部屋でゆったりといただけるインルームダイニングスタイルが好評で、カップルの記念日やご夫婦でのご褒美旅行に圧倒的なプライベート空間を提供します。",
              roomTip: "オーシャンプレミアムスイート。テラス付きの広々としたリビングと海を望むビューバスを備え、冬の海辺のロマンチックな滞在を演出します。",
              gourmetTip: "「インルーム特選ディナーコース」。相模湾の旬魚と上質な特選牛ロース肉のステーキを、周りを気にせずお部屋でワインとともに楽しめます。",
              highlights: [
                "全室マイクロバブルバス完備・海を望むインルームダイニングと極上プライベート空間",
                "厳選オーガニックアメニティ充実・記念日やご褒美ステイに最適なホスピタリティ",
                "全16室のスモールラグジュアリー・波の音に包まれる至福のリゾートタイム"
              ]
            },
            {
              id: 5,
              name: "かいひん荘鎌倉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/109016/109016.jpg",
              rating: 4.74,
              reviews: 318,
              price: "¥12,100〜",
              access: "JR鎌倉駅よりタクシーで6分、または江ノ島電鉄で3分→由比ヶ浜駅下車、徒歩1分／湘南の海まで徒歩3分",
              special: "大正ロマンの香りを残す鎌倉の純和風旅館。日本庭園と旬の味覚を味わい安らぎの休日をお過ごし下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109016%2F109016.html",
              story: "由比ヶ浜海岸まで徒歩3分、大正ロマンの風情を今に伝える国登録有形文化財の洋館を擁する老舗和風旅館「かいひん荘鎌倉」。かつて文豪や政財界の要人が逗留した歴史を持ち、手入れの行き届いた広大な日本庭園が四季折々の情緒を醸し出します。客室は純和風の落ち着いた数寄屋造りで、冬の澄んだ日差しが縁側に心地よく差し込みます。夕食は月替わりの本格会席料理。三浦半島の新鮮な海の幸や旬の冬野菜、厳選された肉料理が職人の技で美しく盛り付けられ、古都鎌倉の雅やかな夜を心豊かに彩ります。長谷寺や高徳院（鎌倉大仏）への徒歩散策にも最適です。",
              roomTip: "庭園を望む数寄屋造り和室。静寂な日本庭園の冬景色を眺めながら、畳の香りと歴史ある日本建築の温もりに包まれて寛げます。",
              gourmetTip: "「月替わり伝統会席料理」。冬の寒平目の昆布締めや温かい蕪蒸し、季節の土鍋ご飯など、出汁の効いた優しい味わいが体に染み渡ります。",
              highlights: [
                "国登録有形文化財の洋館を擁する老舗旅館・日本庭園の冬景色と月替わり本格会席",
                "由比ヶ浜徒歩3分＆長谷寺徒歩圏・冬の古都鎌倉をゆったり散策できる静寂の環境",
                "文豪も愛した歴史ある数寄屋造り・冬の寒平目や温かい蕪蒸しを味わう伝統の味"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "関東三大イルミネーション「湘南の宝石（江の島シーキャンドル）」の開催時期と見どころは？",
    "a": "「湘南の宝石」は、江の島サムエル・コッキング苑および江の島シーキャンドルを中心に、毎年11月下旬から2月中旬にかけて開催される日本有数の光の祭典です。最高峰の透明度を誇る冬の空気の中、シーキャンドルから360度に広がる「光の大空間」や、数万個のスワロフスキー・クリスタルが輝くクリスタルゲートなど、圧巻のイルミネーションが島全体を包みます。日没直後のトワイライトタイムには、茜色に染まる富士山のシルエットとイルミネーションが同時に楽しめる奇跡の瞬間が訪れます。"
  },
  {
    "q": "冬（11月・12月・1月）に湘南・鎌倉から富士山が最も綺麗に見える時間帯とビュースポットは？",
    "a": "湘南海岸から富士山を最も美しく鑑賞できるのは、空気が乾燥して澄み渡る11月から2月の冬期です。時間帯としては「午前中の早い時間（日の出後〜10時頃）」と「夕暮れ時（16時半〜17時過ぎ）」の2回が絶景タイミング。午前中は青空を背景に白雪を冠した富士山がくっきりと見え、夕方は夕陽に照らされた富士の稜線が茜色から紫色へと美しく染まります。名所としては七里ヶ浜海岸、稲村ヶ崎、江の島弁天橋、湘南海岸公園が代表的です。"
  },
  {
    "q": "鶴岡八幡宮や長谷寺の新春初詣の混雑状況と参拝のコツは？",
    "a": "源頼朝ゆかりの鶴岡八幡宮は、正月三が日に例年200万人以上の参拝者が訪れる関東屈指の初詣スポットです。大晦日の深夜から元旦、正月三が日の10時〜16時は本宮へ向かう大石段で入場規制が行われ、参拝まで数時間待ちになることもあります。混雑を避けるなら、早朝（午前6時〜8時台）または夕方17時以降の参拝がおすすめです。また、長谷寺や鎌倉大仏（高徳院）も新春の厳かな雰囲気が素晴らしく、午前中の早い時間帯に訪れると落ち着いて新年の祈願ができます。"
  },
  {
    "q": "冬の相模湾・三浦半島で旬を迎える地魚と冬限定グルメは？",
    "a": "冬の相模湾は海水温が下がり、魚に上質な脂が乗る最高のシーズンです。代表格は「寒平目（かんばらめ）」「寒ブリ」「金目鯛」、そして冬の味覚「カワハギの肝和え」です。透き通るような白身に濃厚な肝を溶かした醤油でいただくカワハギは冬ならではの絶品。また、三浦半島の肥沃な大地で育つ甘みたっぷりの「三浦大根」を使った煮物料理や、幻のブランド和牛「葉山牛」のステーキなど、冬の海と大地の贅沢な味覚が揃います。"
  },
  {
    "q": "冬の鎌倉・江の島旅行の服装・足元と江ノ電利用のポイントは？",
    "a": "湘南・鎌倉は内陸部に比べると比較的温暖ですが、海岸沿いは冬の強い海風が吹き抜けるため体感温度はぐっと下がります。防風性のあるコートやダウン、マフラー、手袋を持参しましょう。また、鎌倉の寺社巡りや江の島の階段・坂道散策ではかなりの距離を歩くため、歩きやすいフラットなスニーカーやウォーキングシューズが必須です。江ノ電を利用する際は、全線1日乗り降り自由な「のりおりくん」を活用すると、極楽寺、長谷、由比ヶ浜、七里ヶ浜、江の島を効率よく周遊できます。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-blue-100 selection:text-blue-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の相模湾と夕暮れの富士山・江の島の絶景" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-blue-900/80 backdrop-blur-md text-blue-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-blue-400/30">
            <Camera className="w-4 h-4 text-blue-300" />
            11月・12月・1月 冬の神奈川・鎌倉＆江の島湘南リゾート特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">「11・12・1月神奈川」冬の湘南・江の島シーキャンドル「湘南の宝石」イルミネーション＆鶴岡八幡宮新春初詣・富士山夕景と相模湾冬の地魚を味わう名宿5選</h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            透き通る大気の中に純白の富士山が浮かび上がる冬の相模湾。関東三大イルミネーション「湘南の宝石」が輝く江の島シーキャンドルの光の宮殿、新春の願いを捧げる鶴岡八幡宮の初詣、海風を浴びて走る江ノ電の情景。冬に脂が乗り切る寒平目やカワハギの肝和え、幻の葉山牛ステーキ。大人の感性を解き放つ冬の鎌倉・江の島の名宿とモデルコースをご案内します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-blue-400" /> 最適時期：11月下旬〜1月下旬（湘南の宝石・冬の富士山夕景・新春初詣）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-blue-400" /> エリア：神奈川県鎌倉市・藤沢市（江の島・七里ヶ浜・由比ヶ浜・雪ノ下）</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-blue-400" /> 名物：相模湾寒平目・カワハギ肝和え・葉山牛・鎌倉野菜</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-blue-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Introduction</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の大気だけが魅せる富士山と光の海。古都の静寂と湘南の華やぎが交差する季節へ
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              夏のマリンリゾートや秋の紅葉狩りとは異なる、特別な透明感と静寂が街を包み込む冬の湘南・鎌倉・江の島。11月から1月にかけてのこの季節、湿度が下がって大気が澄み渡るため、海越しに望む冠雪の富士山が年間で最も鮮明に姿を現します。七里ヶ浜や稲村ヶ崎の波打ち際から望む、青い相模湾と白銀の富士山のコントラストは、まさに北斎の浮世絵を彷彿とさせる日本の美の極致です。
            </p>
            <p>
              そして夕暮れが訪れると、湘南の海は幻想的な光の世界へと変貌を遂げます。江の島の頂上にそびえる江の島シーキャンドルでは、関東三大イルミネーションのひとつ「湘南の宝石」が開催されます。空が茜色から深い藍色へと移ろうマジックアワー、光り輝くタワーのシルエットの向こうに富士山の稜線が浮かび上がり、足元には満天の星が降ってきたかのような光の大空間が広がります。宝石のように散りばめられたスワロフスキー・クリスタルの煌めきは、見る者の心を深く震わせます。
            </p>
            <p>
              一方、鎌倉の街では古都ならではの歴史と格式が息づく新春の風情が漂います。源頼朝によって創建された鶴岡八幡宮では、厳かな空気の中で新年の開運を祈る初詣が行われ、若宮大路や段葛には新春の清々しい気が満ち満ちます。長谷寺の十一面観音菩薩や鎌倉大仏の高徳院を訪ねる静かな古寺散策も、冬の澄んだ木漏れ日の中で心静かに自分自身と向き合うかけがえのない時間をもたらします。
            </p>
            <p>
              旅の夜を飾るのは、真冬の相模湾がもたらす最高の海の幸です。冷たい海水で身が引き締まり、脂が極上に乗り切った寒平目（かんばらめ）や寒ブリ、そして冬の珍味・カワハギの肝和えは、地酒との相性が抜群。さらに幻の銘牛と呼ばれる「葉山牛」のジューシーなステーキや、甘みがぎゅっと凝縮された冬の鎌倉野菜や三浦大根の料理。海を望むラグジュアリーなリゾートホテルや歴史ある和風旅館に逗留し、冬の湘南の美しさを五感で満喫する旅は、心洗われる感動に満ちています。
            </p>
          </div>
        </section>

        {/* 3 Key Highlights Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-blue-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の鎌倉・江の島を彩る3大ハイライト
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              11月〜1月の湘南だからこそ出逢える、光と絶景と古都の初詣。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                1. 関東三大イルミ「湘南の宝石」シーキャンドル
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                江の島島内が数十万球のクリスタルイルミネーションで光の宮殿へと変わる祭典。夕暮れの富士山夕景と光のタワーが競演する絶景は一生忘れられない美しさです。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                2. 鶴岡八幡宮の新春初詣と段葛の厳かな冬景色
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                新年の開運・厄除けを祈願する鶴岡八幡宮の初詣。早朝の若宮大路や段葛の凛とした神聖な空気を味わい、長谷寺や鎌倉大仏へと続く古都散策が楽しめます。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                <Fish className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                3. 相模湾の冬魚「寒平目・カワハギ肝」＆葉山牛
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                真冬の低水温で極上の脂を蓄えた寒平目の刺身やカワハギの肝和え、冬の地魚料理。そして幻の黒毛和牛「葉山牛」のステーキなど、湘南の贅沢な美食を堪能できます。
              </p>
            </div>
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-blue-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Course</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              【1泊2日】古都の初詣と海越しの富士山・光の江の島周遊モデルコース
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              江ノ電に揺られながら鎌倉の歴史と江の島のイルミネーションを最高潮に味わう黄金ルート。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">DAY 1 午前〜午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  11:00 鎌倉駅到着 ➔ 小町通り食べ歩き＆「鶴岡八幡宮」新春参拝
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  JR鎌倉駅に降り立ち、活気ある小町通りで温かいしらすまんや出来立てのわらび餅を楽しみながら散策。段葛を抜けて鶴岡八幡宮へ。大石段を上り、舞殿と本宮で新年の無病息災と開運を厳かに祈願します。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">DAY 1 午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  13:30 江ノ電で長谷へ ➔ 長谷寺の冬景色観賞＆鎌倉大仏（高徳院）
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  江ノ電に乗って長谷駅へ。十一面観音を祀る花の寺・長谷寺の見晴台から、冬の穏やかな由比ヶ浜のパノラマを一望。続いて高徳院の国宝・鎌倉大仏を仰ぎ、冬の青空を背にした堂々たるお姿に圧倒されます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">DAY 1 夕刻〜夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  16:00 七里ヶ浜・江の島へ ➔ 富士山夕景＆「湘南の宝石」イルミネーション観賞
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  七里ヶ浜海岸から茜色に染まる海と富士山の絶景夕景を撮影後、江の島へ。サムエル・コッキング苑に輝く「湘南の宝石」の光の宮殿を散策。シーキャンドル展望台から望む夜景とイルミネーションの幻想的な光景に包まれます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">DAY 1 夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  19:00 湘南名宿へチェックイン ➔ 相模湾の冬魚と葉山牛ディナー＆天然温泉
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  宿にチェックインし、温泉大浴場やスパで冷えた体をポカポカに温めます。夕食は、脂の乗った寒平目やカワハギの肝和え、幻の葉山牛ステーキなど、冬の湘南の至宝を贅沢に味わい、夜の波音を聴きながら寛ぎます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  08:30 海を望むモーニング ➔ 稲村ヶ崎散策＆鎌倉みやげのお買い物
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  朝日に輝く相模湾を望みながら優雅な朝食。チェックアウト後は稲村ヶ崎の岬から朝の富士山を仰ぎ、鎌倉駅周辺で鳩サブレーや鎌倉紅谷のクルミッ子などのお土産を選んで、心地よい余韻とともに帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-blue-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の鎌倉・江の島ステイを彩る厳選名宿5選
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              七里ヶ浜越しの富士山を望む名門ホテルから、若宮大路のモダンホテル、江の島島内スパ温泉宿まで。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((h) => (
              <div key={h.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
                    <img 
                      src={h.img} 
                      alt={h.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                      厳選第 {h.id} 位
                    </div>
                  </div>

                  <div className="w-full p-5 sm:p-7 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
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
                        <Sparkles className="w-4 h-4 text-blue-600" />
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
                        <span className="text-xl sm:text-2xl font-black text-blue-900">{h.price}</span>
                      </div>

                      <a 
                        href={h.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-slate-900 hover:from-blue-800 hover:to-slate-950 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm group"
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

        {/* Local Gourmet & Culture Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-blue-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Gourmet & Souvenir Guide</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の湘南・鎌倉を深く知る美食カルチャーと厳選銘菓
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-blue-700" />
                相模湾の冬魚と幻の黒毛和牛「葉山牛」
              </h3>
              <p>
                冬の相模湾は、海底深く潜る寒平目やカワハギが旬を迎えます。特にカワハギの肝は冬に最も肥大化し、濃厚なコクとクリーミーな旨味が絶品。肝を醤油に溶いて刺身に絡める「肝醤油」は冬の湘南を訪れたなら必食の味です。また、三浦半島で丹精込めて育てられる「葉山牛」は出荷頭数が少なく「幻の牛」と呼ばれ、きめ細かい肉質と甘い脂の芳香が舌の上でとろけます。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-blue-700" />
                鎌倉の伝統銘菓と湘南クラフト
              </h3>
              <p>
                お土産には、明治創業の豊島屋「鳩サブレー」や、キャラメルとクルミをバター生地で挟んだ鎌倉紅谷の「クルミッ子」が大定番。また、鎌倉彫の伝統工芸品や、湘南の海をモチーフにしたハンドメイドキャンドル、江の島の貝殻をあしらったアクセサリーなど、冬の海街の思い出を彩るハイセンスな雑貨も人気を集めています。
              </p>
            </div>
          </div>
        </section>

        {/* Winter Travel Practical Tips & Access Guide */}
        <section className="bg-blue-50/60 rounded-3xl p-6 sm:p-10 border border-blue-200/60 space-y-6">
          <div className="border-b border-blue-200/80 pb-4">
            <span className="text-blue-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Practical Guide</span>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-950">
              冬の鎌倉・江の島旅行を安全・快適に楽しむための装備とアクセス注意点
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-blue-950">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-blue-700" />
                海風と防寒のポイント
              </div>
              <p className="leading-relaxed text-stone-700">
                日中は日差しがあれば暖かい日もありますが、夕方以降や海岸沿い、江の島島内は冷たい海風が強まります。イルミネーション観賞や夕景撮影時は、風を遮るウインドブレーカーやダウンジャケット、手袋を必ず着用しましょう。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-blue-700" />
                江ノ電・パーク＆ライドの活用
              </div>
              <p className="leading-relaxed text-stone-700">
                年末年始や週末の国道134号線・鎌倉市街は激しい渋滞が発生します。車の場合は藤沢駅や大船駅周辺の駐車場を利用し、JRや江ノ電・湘南モノレールに乗り換えるパーク＆ライドが最も賢明なアクセス方法です。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-700" />
                江の島島内の歩行路と階段
              </div>
              <p className="leading-relaxed text-stone-700">
                江の島は高低差が大きく石段や急坂が多いため、歩きやすいフラットなスニーカーが必須です。足腰に不安がある方や移動時間を短縮したい場合は、有料のエスカレーター「江の島エスカー」を活用するとスムーズに登頂できます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-blue-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">FAQ</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の鎌倉・江の島観光・宿泊に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-blue-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-800 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
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
            <span className="text-blue-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Winter Travels</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい関東・全国の冬特集・名湯宿ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-kanagawa-hakone-fuji-view-onsen-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-blue-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-blue-800 font-bold text-xs block mb-1">神奈川・箱根温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-blue-900 transition-colors line-clamp-2">
                冬の箱根温泉・雪化粧の富士山を望む絶景露天風呂と名旅館
              </span>
            </Link>

            <Link 
              href="/winter-kanagawa-yugawara-onsen-bungo-kaiseki-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-blue-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-blue-800 font-bold text-xs block mb-1">神奈川・湯河原温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-blue-900 transition-colors line-clamp-2">
                文豪が愛した湯河原の名湯・冬の相模湾魚介と会席料理を味わう老舗湯宿
              </span>
            </Link>

            <Link 
              href="/winter-chiba-choshi-inubosaki-sunrise-kinmedai-hamaguri-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-blue-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-blue-800 font-bold text-xs block mb-1">千葉・銚子犬吠埼</span>
              <span className="text-stone-900 font-bold group-hover:text-blue-900 transition-colors line-clamp-2">
                本州一早い初日の出と極上つりきんめ・犬吠埼温泉リゾートステイ
              </span>
            </Link>

            <Link 
              href="/winter-shizuoka-atami-onsen-winter-fireworks-kinmedai-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-blue-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-blue-800 font-bold text-xs block mb-1">静岡・熱海温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-blue-900 transition-colors line-clamp-2">
                冬の熱海海上花火大会と絶景露天風呂・金目鯛煮付けを味わう名門宿
              </span>
            </Link>

            <Link 
              href="/winter-nagano-karuizawa-hoshino-illumination-tonbonoyu-shinshugyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-blue-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-blue-800 font-bold text-xs block mb-1">長野・軽井沢星野</span>
              <span className="text-stone-900 font-bold group-hover:text-blue-900 transition-colors line-clamp-2">
                冬の軽井沢・もみの木イルミネーションと星野温泉トンボの湯・信州牛ステイ
              </span>
            </Link>

            <Link 
              href="/features" 
              className="p-4 rounded-2xl bg-stone-100 border border-stone-200 hover:border-blue-400 transition-all group flex flex-col justify-center text-center"
            >
              <span className="text-stone-900 font-bold group-hover:text-blue-900 transition-colors">
                冬の特集記事一覧をすべて見る ➔
              </span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-kanagawa-kamakura-enoshima-jewel-shrine-fuji-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
