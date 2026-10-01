import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, ThermometerSun, Heart, ShoppingBag, Shield, Mountain, Landmark, Sparkle
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月福岡】冬の糸島カキ小屋めぐりと玄界灘の天然とらふぐ・熱々博多もつ鍋＆水炊き・海を望むリゾート＆天然温泉を満喫する名宿5選",
  description: "11月から1月、福岡は玄界灘の冬の恵みが一斉に旬を迎える全国屈指の美食パラダイスとなります。福岡市民や全国の旅行者が心待ちにする冬の看板風物詩が、糸島半島（岐志・船越・加布里・福吉）に立ち並ぶ名物「糸島カキ小屋」。炭火やガス火で香ばしく焼き上げるミルキーで濃厚な糸島カキをはじめ、荒海で育った天然とらふぐや高級魚アラ（クエ）、そして寒風の中で湯気を上げる熱々の博多もつ鍋や濃厚白濁スープの博多水炊き。博多駅前の壮大なイルミネーション「光の街・博多」の煌めきや、糸島の美しい海岸美、博多湾を望む絶景オーシャンビューホテル＆屋上天然温泉スパで至福の冬旅を叶える厳選5宿を紹介します。",
  keywords: '糸島 カキ小屋 冬, 博多 もつ鍋 宿泊, 玄界灘 とらふぐ, ヒルトン福岡シーホーク, 都ホテル博多, ザルイガンズ, ホテルマリノアリゾート福岡, ドーミーインPREMIUM博多, 11月 12月 1月 福岡旅行',
  alternates: {
    canonical: 'https://croud-travel.com/winter-fukuoka-itoshima-oyster-hakata-fugu-stay'
  },
  openGraph: {
    title: "【11・12・1月福岡】冬の糸島カキ小屋めぐりと玄界灘の天然とらふぐ・熱々博多もつ鍋＆水炊き・海を望むリゾート＆天然温泉を満喫する名宿5選",
    description: "11月から1月、福岡は玄界灘の冬の恵みが一斉に旬を迎える全国屈指の美食パラダイスとなります。福岡市民や全国の旅行者が心待ちにする冬の看板風物詩が、糸島半島（岐志・船越・加布里・福吉）に立ち並ぶ名物「糸島カキ小屋」。炭火やガス火で香ばしく焼き上げるミルキーで濃厚な糸島カキをはじめ、荒海で育った天然とらふぐや高級魚アラ（クエ）、そして寒風の中で湯気を上げる熱々の博多もつ鍋や濃厚白濁スープの博多水炊き。博多駅前の壮大なイルミネーション「光の街・博多」の煌めきや、糸島の美しい海岸美、博多湾を望む絶景オーシャンビューホテル＆屋上天然温泉スパで至福の冬旅を叶える厳選5宿を紹介します。",
    url: 'https://croud-travel.com/winter-fukuoka-itoshima-oyster-hakata-fugu-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の博多湾と福岡タワーの煌めく夜景'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月福岡】冬の糸島カキ小屋めぐりと玄界灘の天然とらふぐ・熱々博多もつ鍋＆水炊き・海を望むリゾート＆天然温泉を満喫する名宿5選",
    description: "11月から1月、福岡は玄界灘の冬の恵みが一斉に旬を迎える全国屈指の美食パラダイスとなります。福岡市民や全国の旅行者が心待ちにする冬の看板風物詩が、糸島半島（岐志・船越・加布里・福吉）に立ち並ぶ名物「糸島カキ小屋」。炭火やガス火で香ばしく焼き上げるミルキーで濃厚な糸島カキをはじめ、荒海で育った天然とらふぐや高級魚アラ（クエ）、そして寒風の中で湯気を上げる熱々の博多もつ鍋や濃厚白濁スープの博多水炊き。博多駅前の壮大なイルミネーション「光の街・博多」の煌めきや、糸島の美しい海岸美、博多湾を望む絶景オーシャンビューホテル＆屋上天然温泉スパで至福の冬旅を叶える厳選5宿を紹介します。",
    images: ['https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function FukuokaItoshimaHakataWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【11・12・1月福岡】冬の糸島カキ小屋めぐりと玄界灘の天然とらふぐ・熱々博多もつ鍋＆水炊き・海を望むリゾート＆天然温泉を満喫する名宿5選",
    description: "11月から1月、福岡は玄界灘の冬の恵みが一斉に旬を迎える全国屈指の美食パラダイスとなります。福岡市民や全国の旅行者が心待ちにする冬の看板風物詩が、糸島半島（岐志・船越・加布里・福吉）に立ち並ぶ名物「糸島カキ小屋」。炭火やガス火で香ばしく焼き上げるミルキーで濃厚な糸島カキをはじめ、荒海で育った天然とらふぐや高級魚アラ（クエ）、そして寒風の中で湯気を上げる熱々の博多もつ鍋や濃厚白濁スープの博多水炊き。博多駅前の壮大なイルミネーション「光の街・博多」の煌めきや、糸島の美しい海岸美、博多湾を望む絶景オーシャンビューホテル＆屋上天然温泉スパで至福の冬旅を叶える厳選5宿を紹介します。",
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
    datePublished: '2026-10-01',
    dateModified: '2026-10-01',
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
      '@id': 'https://croud-travel.com/winter-fukuoka-itoshima-oyster-hakata-fugu-stay'
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
        name: '糸島カキ小屋と玄界灘とらふぐ・博多冬美食名宿',
        item: 'https://croud-travel.com/winter-fukuoka-itoshima-oyster-hakata-fugu-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "「糸島のカキ小屋」の営業期間やシステム、行き方（アクセス）はどうですか？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "糸島半島のカキ小屋は、例年10月下旬から11月上旬にかけて順次オープンし、翌年3月下旬から4月上旬まで営業します。主な漁港は岐志（きし）、船越（ふなこし）、加布里（かぶり）、福吉（ふくよし）などがあり、計30軒近くのカキ小屋が並びます。システムは、店頭でカキ（1皿約1kg・1,000円〜1,300円前後）やホタテ、サザエ、カキ飯などを注文し、炭火またはガス火の焼き台（炭代・ガス代300円〜400円程度）でセルフで焼いて食べるスタイルです。汚れ防止のカラフルなジャンパーを無料で貸し出してくれます。アクセスは福岡市内から西湘バイパス経由で車で約40〜50分、公共交通機関の場合はJR筑肥線筑前前原駅などから路線バスやタクシーを利用します。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の福岡・博多で味わうべき三大ご当地グルメは何ですか？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "冬の博多三大グルメの筆頭は「博多もつ鍋」です。ぷりぷりの新鮮な牛もつ（小腸など）とたっぷりのキャベツ、ニラ、ニンニクを醤油または白味噌仕立てのスープで煮込み、〆にちゃんぽん麺を投入するのが鉄板です。二つ目は「博多水炊き」。骨付き鶏肉をじっくり何時間も炊き上げた白濁の濃厚鶏ガラスープに、まずはスープのみを湯呑みで味わい、続いて自家製ポン酢で鶏肉とつくねを堪能します。三つ目は「玄界灘の天然とらふぐ＆アラ（クエ）」。荒海で身が引き締まったとらふぐの薄造り（てっさ）やふぐちり鍋、高級魚アラの鍋は全国の食通垂涎の冬の味覚です。"
        }
      },
      {
        '@type': 'Question',
        name: "冬（11月〜1月）の福岡の気候や気温、服装のポイントは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "福岡は九州に位置するため温暖と思われがちですが、日本海（玄界灘）に面しているため冬は北西の季節風が強く吹き付け、曇天や小雪が舞う日もあります。11月は最高気温17℃前後、最低気温10℃前後で過ごしやすい日が多いですが、12月〜1月は最高気温10℃前後、最低気温3〜5℃まで下がります。特に糸島の海岸沿いや博多湾沿いは海風が非常に冷たいため、風を通さない防風ダウンジャケット、マフラー、手袋が必須です。カキ小屋では炭の灰が飛ぶことがあるため、高価な衣類は避け、洗いやすいカジュアルな服装がベストです。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の福岡観光で夜におすすめのイルミネーションやライトアップスポットは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "福岡の冬の夜を彩る最大の名所は、JR博多駅前広場で開催される「光の街・博多」（例年11月上旬から翌年1月上旬頃まで）です。約62万球以上のLEDが駅前広場を青と白の幻想的な光で包み込み、巨大な光のツリーやクリスマスマーケット（ホットワインやソーセージの屋台）で賑わいます。また、天神地区の警固公園や福岡タワーの冬限定巨大ツリーイルミネーション、福岡市役所前ふれあい広場などでもイルミネーションが展開され、街全体が華やかな光に包まれます。"
        }
      },
      {
        '@type': 'Question',
        name: "糸島カキ小屋と博多市内観光を両立させるおすすめのモデルコースは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "1日目は午前中に福岡空港または博多駅を出発し、レンタカーで糸島半島へ直行。昼食は岐志漁港または船越漁港のカキ小屋で熱々の焼きガニ・ホタテ・カキ飯を堪能。午後は海沿いの「桜井二見ヶ浦（夫婦岩）」の白い鳥居と冬の海を眺め、人気のベーカリーやカフェに立ち寄り。夕方に福岡市街のオーシャンビューホテルまたは博多駅直結ホテルにチェックイン。夜は博多駅前のイルミネーションを鑑賞し、老舗のもつ鍋店へ。2日目は太宰府天満宮で初冬の参詣を楽しんだ後、中洲や天神で博多ラーメンや水炊きを味わって帰路につくコースが人気です。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "ヒルトン福岡シーホーク",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1137/1137.jpg",
              rating: 4.13,
              reviews: 4862,
              price: "¥12,683〜",
              access: "【バス】天神からW１番で１５分／博多駅から３０６番で３０分→ヒルトン福岡前下車 。",
              special: "みずほPayPayドーム福岡隣接！1052室全てがオーシャンビュー♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1137%2F1137.html",
              story: "博多湾のウォーターフロントに弧を描くようにそびえ立ち、全室オーシャンビューを誇るインターナショナルホテル「ヒルトン福岡シーホーク」。客室のパノラマウィンドウからは、冬の澄んだ空気の中に広がる博多湾と福岡タワー、志賀島の絶景を一望できます。館内には岩風呂を備えたサウナ付き浴場があり、冬の観光で冷えた体をゆったりと温めることができます。都市高速の百道ランプに隣接しているため、糸島半島へのドライブ観光の拠点として抜群の機動力を発揮。夕食は高さ40メートルのアトリウム空間「ブラッセリー＆ラウンジ シアラ」の豪華ビュッフェや、玄界灘の旬魚と九州産黒毛和牛を鉄板焼きで贅沢に楽しめます。",
              roomTip: "エグゼクティブパノラミックベイビュールーム。博多湾の壮大な海景色と福岡の夜景を独占でき、専用ラウンジでの優雅なカクテルタイムが楽しめます。",
              gourmetTip: "「九州味めぐりディナー＆鉄板焼き」。玄界灘直送の天然魚のお造りや九州産黒毛和牛ステーキを、ワインや九州の地酒とともに堪能できます。",
              highlights: [
                "博多湾を一望する全室オーシャンビュー＆岩風呂サウナ付き大浴場完備",
                "アトリウムでの豪華ディナービュッフェ＆九州産黒毛和牛鉄板焼き",
                "都市高速百道ランプすぐで糸島半島カキ小屋ドライブへの機動力抜群"
              ]
            },
            {
              id: 2,
              name: "都ホテル博多",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/172310/172310.jpg",
              rating: 4.62,
              reviews: 1178,
              price: "¥17,800〜",
              access: "博多駅直結！徒歩約１分。＜東７番出口＞福岡空港から地下鉄で約７分、車で約15分。一歩足を踏み入れたらもうそこはリゾート！",
              special: "さあ、都心のリゾートへ！ここは、いつでも夏休み。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172310%2F172310.html",
              story: "JR博多駅筑紫口から地下直結という最高峰のアクセス性を誇るラグジュアリーホテル「都ホテル 博多」。最上階（13階）には、地下から湧き出る天然温泉を利用した屋外アウトドアスパ＆プール、内湯大浴場、サウナを完備。冬の澄んだ夜空を見上げながら、温かな天然温泉スパに浸かる体験はまさに都会のオアシスです。客室は全室30平米以上のゆとりある広さで、洗い場付きの贅沢なバスルームを完備。レストラン「SOMEWHERE RESTAURANT&BAR」では、九州各地の厳選食材を使ったイノベーティブなディナーを提供。糸島カキ小屋めぐりや博多の夜の街歩きを満喫する最高にスマートな拠点宿です。",
              roomTip: "スーペリアツインまたはコーナーツイン。大きな窓から博多の街並みを見下ろし、洗練されたインテリアとシモンズ製特注ベッドで極上の睡眠が得られます。",
              gourmetTip: "「九州テロワール・冬の特別ディナー」。玄界灘のふぐや冬野菜、九州産和牛を独創的なフレンチスタイルに仕立てた華麗なコース料理です。",
              highlights: [
                "博多駅直結の最高立地＆最上階ルーフトップ天然温泉アウトドアスパ・プール",
                "最上階レストランで味わう九州テロワール・冬の厳選イノベーティブフレンチ",
                "洗練された客室デザインとシモンズ製特注ベッドで極上の都会休息"
              ]
            },
            {
              id: 3,
              name: "ＴＨＥ　ＬＵＩＧＡＮＳ　Ｓｐａ＆Ｒｅｓｏｒｔ(ザ・ルイガンズ.　スパ＆リゾート)",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67260/67260.jpg",
              rating: 4.33,
              reviews: 2267,
              price: "¥7,015〜",
              access: "博多から車で最短約20分、無料送迎バス、無料駐車場、福岡空港まで最短約30分。JR香椎線「海ノ中道」より徒歩約6分",
              special: "プール営業日決定｜家族旅行応援！海浜公園・水族館マリンワールドまで一番近くのリゾートホテル！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67260%2F67260.html",
              story: "国定公園・海の中道に位置し、目の前に穏やかな博多湾とヤシの木が広がる本格アーバンリゾートホテル「THE LUIGANS Spa & Resort（ザ・ルイガンズ）」。全室オーシャンビューの客室からは、冬の静かな海の碧さと対岸の福岡市街の美しい夜景を一望できます。館内にはスパや大浴場が揃い、海外リゾートを訪れたかのような非日常感に満ちた滞在が可能。料理は九州の豊かな食材を活かしたイタリアンや鉄板焼き。冬には近海で獲れた魚介のグリルや、濃厚なパスタ、九州産牛のステーキなどを、落ち着いたリゾート空間でゆっくりと味わうことができます。",
              roomTip: "バルコニー付きグランドフロアルーム。海風を感じながらテラスに出て、冬の夜空に瞬く星々と対岸のきらめく福岡の夜景を鑑賞できます。",
              gourmetTip: "「冬の九州グリルディナー」。玄界灘の魚介や糸島の旬野菜、九州産黒毛和牛を炭火で香ばしく焼き上げた素材本来の旨味を味わえます。",
              highlights: [
                "国定公園海の中道に佇む本格アーバンリゾート＆全室オーシャンビュー",
                "九州産黒毛和牛と玄界灘の魚介炭火グリルディナー＆洗練のワイン",
                "喧騒から離れた静かなリゾートステイ＆対岸に望む福岡市街のきらめく夜景"
              ]
            },
            {
              id: 4,
              name: "ホテルマリノアリゾート福岡",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/144978/144978.jpg",
              rating: 4.62,
              reviews: 495,
              price: "¥16,183〜",
              access: "地下鉄空港線：姪浜駅下車後、無料循環バス「クルットバス」利用で約20分　タクシーで5分",
              special: "全室オーシャンビュー／ウェルカムラウンジ、焚火ラウンジ、ナイトラウンジが無料で楽しめます☆",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F144978%2F144978.html",
              story: "福岡市西区、西日本最大級のヨットハーバーに隣接し、全室ハーバービュー＆全室42平米以上の広さを誇る隠れ家リゾート「ホテルマリノアリゾート福岡」。糸島半島の玄関口に位置するため、糸島のカキ小屋や桜井二見ヶ浦へのドライブアクセスが抜群です。すべての客室にオーシャンビューの大型ジャグジーバスが備えられており、冬の海と停泊するヨットを眺めながら優雅なバスタイムを満喫。夕食は糸島の契約農家から届く新鮮な無農薬野菜や玄界灘の魚介をふんだんに使用したフレンチ。素材の鮮度と美しさが際立つ料理で特別な記念日やご褒美旅行を演出してくれます。",
              roomTip: "ロフト付きマリノアツイン。高い天井と海を一望する広々としたバルコニー、窓辺のジャグジーが贅沢なプライベートリゾート感を高めてくれます。",
              gourmetTip: "「糸島オーガニックフレンチコース」。糸島産の冬根菜や玄界灘の天然真鯛、九州産牛肉を美しく盛り付けたヘルシーで香り高いディナーです。",
              highlights: [
                "全室ハーバービュー＆窓辺の大型ジャグジーバスで優雅なリゾートバスタイム",
                "糸島の契約農家直送オーガニック野菜と玄界灘鮮魚の贅沢フルコース",
                "糸島半島へのアクセス最前線＆ヨットハーバーに面した開放的なバルコニー"
              ]
            },
            {
              id: 5,
              name: "天然温泉　袖湊の湯　ドーミーインＰＲＥＭＩＵＭ博多・キャナルシティ前（ドーミーイン・野乃　グループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/130158/130158.jpg",
              rating: 4.45,
              reviews: 1655,
              price: "¥10,170〜",
              access: "■ＪＲ博多駅博多口より徒歩10分　■地下鉄櫛田神社前駅7番出口より徒歩1分",
              special: "キャナルシティが目の前の好立地。天然温泉大浴場＆夜鳴きそば無料",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F130158%2F130158.html",
              story: "博多駅と中洲の間に位置し、キャナルシティ博多へ徒歩1分という抜群の立地を誇る「天然温泉 袖湊の湯 ドーミーインPREMIUM博多・キャナルシティ前」。館内には都会の真ん中にありながら地下から湧出する自家源泉の天然温泉大浴場「袖湊の湯」を完備。内湯、露天風呂、本格的な高温ドライサウナと強冷水風呂で、冬の旅の疲れを完璧にリフレッシュできます。夜には名物の「夜鳴きそば」が無料提供され、朝食ビュッフェでは博多名物の熱々「水炊き」や「がめ煮」、揚げたての天ぷら、小鉢横丁が並び、ビジネスから観光まで高い満足度を誇る人気宿です。",
              roomTip: "クイーンルームまたは和風ツイン。機能的で落ち着いた空間設計と快適なサータ社製ベッドで、一人旅からカップルまで快適に寛げます。",
              gourmetTip: "「朝食バイキング・博多名物水炊き＆揚げたて天ぷら」。じっくり煮込んだ鶏の濃厚スープが朝の体に染み渡る博多ならではの朝食です。",
              highlights: [
                "キャナルシティすぐ＆地下湧出の自家源泉天然温泉袖湊の湯と名物水炊き朝食",
                "朝食バイキングで味わう熱々博多水炊き・揚げたて天ぷら・夜鳴きそば",
                "高温ドライサウナと強冷水風呂でととのう体験＆博多屋台街へも徒歩圏内"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "「糸島のカキ小屋」の営業期間やシステム、行き方（アクセス）はどうですか？",
    "a": "糸島半島のカキ小屋は、例年10月下旬から11月上旬にかけて順次オープンし、翌年3月下旬から4月上旬まで営業します。主な漁港は岐志（きし）、船越（ふなこし）、加布里（かぶり）、福吉（ふくよし）などがあり、計30軒近くのカキ小屋が並びます。システムは、店頭でカキ（1皿約1kg・1,000円〜1,300円前後）やホタテ、サザエ、カキ飯などを注文し、炭火またはガス火の焼き台（炭代・ガス代300円〜400円程度）でセルフで焼いて食べるスタイルです。汚れ防止のカラフルなジャンパーを無料で貸し出してくれます。アクセスは福岡市内から西湘バイパス経由で車で約40〜50分、公共交通機関の場合はJR筑肥線筑前前原駅などから路線バスやタクシーを利用します。"
  },
  {
    "q": "冬の福岡・博多で味わうべき三大ご当地グルメは何ですか？",
    "a": "冬の博多三大グルメの筆頭は「博多もつ鍋」です。ぷりぷりの新鮮な牛もつ（小腸など）とたっぷりのキャベツ、ニラ、ニンニクを醤油または白味噌仕立てのスープで煮込み、〆にちゃんぽん麺を投入するのが鉄板です。二つ目は「博多水炊き」。骨付き鶏肉をじっくり何時間も炊き上げた白濁の濃厚鶏ガラスープに、まずはスープのみを湯呑みで味わい、続いて自家製ポン酢で鶏肉とつくねを堪能します。三つ目は「玄界灘の天然とらふぐ＆アラ（クエ）」。荒海で身が引き締まったとらふぐの薄造り（てっさ）やふぐちり鍋、高級魚アラの鍋は全国の食通垂涎の冬の味覚です。"
  },
  {
    "q": "冬（11月〜1月）の福岡の気候や気温、服装のポイントは？",
    "a": "福岡は九州に位置するため温暖と思われがちですが、日本海（玄界灘）に面しているため冬は北西の季節風が強く吹き付け、曇天や小雪が舞う日もあります。11月は最高気温17℃前後、最低気温10℃前後で過ごしやすい日が多いですが、12月〜1月は最高気温10℃前後、最低気温3〜5℃まで下がります。特に糸島の海岸沿いや博多湾沿いは海風が非常に冷たいため、風を通さない防風ダウンジャケット、マフラー、手袋が必須です。カキ小屋では炭の灰が飛ぶことがあるため、高価な衣類は避け、洗いやすいカジュアルな服装がベストです。"
  },
  {
    "q": "冬の福岡観光で夜におすすめのイルミネーションやライトアップスポットは？",
    "a": "福岡の冬の夜を彩る最大の名所は、JR博多駅前広場で開催される「光の街・博多」（例年11月上旬から翌年1月上旬頃まで）です。約62万球以上のLEDが駅前広場を青と白の幻想的な光で包み込み、巨大な光のツリーやクリスマスマーケット（ホットワインやソーセージの屋台）で賑わいます。また、天神地区の警固公園や福岡タワーの冬限定巨大ツリーイルミネーション、福岡市役所前ふれあい広場などでもイルミネーションが展開され、街全体が華やかな光に包まれます。"
  },
  {
    "q": "糸島カキ小屋と博多市内観光を両立させるおすすめのモデルコースは？",
    "a": "1日目は午前中に福岡空港または博多駅を出発し、レンタカーで糸島半島へ直行。昼食は岐志漁港または船越漁港のカキ小屋で熱々の焼きガニ・ホタテ・カキ飯を堪能。午後は海沿いの「桜井二見ヶ浦（夫婦岩）」の白い鳥居と冬の海を眺め、人気のベーカリーやカフェに立ち寄り。夕方に福岡市街のオーシャンビューホテルまたは博多駅直結ホテルにチェックイン。夜は博多駅前のイルミネーションを鑑賞し、老舗のもつ鍋店へ。2日目は太宰府天満宮で初冬の参詣を楽しんだ後、中洲や天神で博多ラーメンや水炊きを味わって帰路につくコースが人気です。"
  }
];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-teal-100 selection:text-teal-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-stone-900 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の博多湾と福岡都市夜景" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-teal-800/80 backdrop-blur-md text-teal-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-teal-400/30">
            <Snowflake className="w-4 h-4 text-teal-200" />
            11月・12月・1月 九州・玄界灘の冬の恵み＆糸島カキ小屋・博多美食特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月福岡】冬の糸島カキ小屋めぐりと玄界灘の天然とらふぐ・熱々博多もつ鍋＆水炊き・海を望むリゾート＆天然温泉を満喫する名宿5選
          </h1>
          <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            11月に一斉オープンする糸島半島の風物詩「カキ小屋」で味わうミルキーな焼きカキ。玄界灘の荒海で育った極上の天然とらふぐや高級魚アラ、冷え込む夜に染み渡る博多もつ鍋と濃厚水炊き。博多駅前の壮大なイルミネーションと絶景リゾート＆温泉スパを堪能する名宿を厳選紹介します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-teal-400" /> 旬の時期：11月上旬〜1月下旬（カキ小屋シーズン最盛期）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-teal-400" /> エリア：福岡県糸島市・福岡市（博多・百道浜・海の中道）</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-teal-400" /> 旬グルメ：糸島焼きカキ・天然とらふぐ・博多もつ鍋・水炊き</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Introduction</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              煙立ち上る糸島カキ小屋の活気と、玄界灘の寒波が育む極上とらふぐ・熱々もつ鍋
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              日本海と玄界灘の荒波に抱かれた福岡県。11月に入ると、全国のグルメファンが首を長くして待っていた冬の風物詩「糸島カキ小屋」が一斉にオープンします。福岡市街から車でわずか40〜50分ほどの糸島半島（岐志・船越・加布里・福吉など）の漁港に、ビニールハウスの巨大なカキ小屋がずらりと立ち並びます。色とりどりのジャンパーを羽織り、炭火やガス火の焼き網の上に殻付きの糸島カキを乗せると、パチパチと香ばしい磯の香りが立ち上り、口いっぱいに広がる濃厚でミルキーなエキスは冬の幸福そのものです。
            </p>
            <p>
              福岡の冬の魅力はカキ小屋だけにとどまりません。玄界灘の激しい潮流と寒波に揉まれて身が締まった「天然とらふぐ」や、幻の高級魚「アラ（クエ）」は、全国の料亭が買い求める冬の最高峰。さらに、寒風吹き抜ける夜の街で湯気を上げる「博多もつ鍋」は、ぷりぷりの国産牛もつと甘みのあるキャベツが溶け合う至極のソウルフード。骨付き鶏肉を白濁するまでじっくり煮込んだ「博多水炊き」も、冷えた体を芯から温めてくれます。
            </p>
            <p>
              滞在の拠点には、糸島へのドライブアクセスに優れた博多湾沿いのオーシャンビューリゾートや、駅直結で屋上天然温泉スパを備えた最新ホテルが最適です。夜にはJR博多駅前広場を約62万球の光が彩るイルミネーション「光の街・博多」が開催され、都会的な華やかさと海の豊かな自然、そして圧倒的な美食を一度に楽しめるのが福岡の冬旅の真髄です。
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-teal-50/50 rounded-2xl p-4 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 text-teal-900 font-bold text-sm">
                <Flame className="w-4 h-4 text-teal-700" />
                糸島カキ小屋の熱狂
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                岐志や船越の漁港に並ぶカキ小屋。炭火で豪快に焼く濃厚ミルキーな糸島カキとカキ飯。
              </p>
            </div>
            <div className="bg-teal-50/50 rounded-2xl p-4 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 text-teal-900 font-bold text-sm">
                <Utensils className="w-4 h-4 text-teal-700" />
                天然とらふぐ＆もつ鍋・水炊き
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                玄界灘の天然とらふぐ薄造りやちり鍋、ぷりぷり牛もつ鍋、白濁スープの水炊きなど冬美食三昧。
              </p>
            </div>
            <div className="bg-teal-50/50 rounded-2xl p-4 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 text-teal-900 font-bold text-sm">
                <Sparkle className="w-4 h-4 text-teal-700" />
                博多駅イルミ＆温泉スパ
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                62万球が輝く光の街・博多の冬イルミネーションと、屋上アウトドア天然温泉スパで温まる。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-950 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4 text-teal-800" />
              楽天トラベル公式連携・厳選宿
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 mt-2">
              糸島カキ小屋ドライブ＆博多冬グルメ・絶景スパを満喫する名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              ※表示料金は楽天トラベルAPIより取得した参考最低価格です。時期やプランにより変動します。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row"
              >
                {/* Hotel Image */}
                <div className="md:w-2/5 relative min-h-[260px] md:min-h-full bg-stone-100 overflow-hidden">
                  <img 
                    src={hotel.img} 
                    alt={hotel.name}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal-400" />
                    厳選宿 {hotel.id}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-stone-900 text-xs font-bold px-3 py-1 rounded-lg shadow-xs flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    {hotel.rating} <span className="text-stone-400 font-normal">({hotel.reviews}件)</span>
                  </div>
                </div>

                {/* Hotel Details */}
                <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-teal-700" />
                        {hotel.access}
                      </span>
                      <span className="text-teal-800 font-extrabold text-base sm:text-lg">
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
                          <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Room & Gourmet tips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="bg-teal-50/40 p-3 rounded-xl border border-teal-100/60">
                        <span className="font-bold text-teal-900 block mb-1">【客室の選び方】</span>
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
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-700 to-teal-900 hover:from-teal-800 hover:to-teal-950 text-white font-bold py-3.5 px-6 rounded-2xl shadow-sm hover:shadow transition text-sm tracking-wide"
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
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Route</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の糸島カキ小屋と博多イルミ・玄界灘美食 2泊3日満喫モデルコース
            </h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-stone-700">
            {/* Day 1 */}
            <div className="relative pl-6 border-l-2 border-teal-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-teal-700" />
              <h3 className="font-bold text-stone-900 text-base">
                1日目：福岡空港到着と糸島カキ小屋直行ドライブ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                午前、福岡空港に到着してレンタカーを借り、福岡都市高速経由で糸島半島へ直行。岐志漁港または船越漁港のカキ小屋で、炭火で焼く熱々の糸島カキや車海老、サザエ、カキ飯を豪快に味わいます。午後はサンセットロードをドライブし、桜井二見ヶ浦の白い鳥居と夫婦岩を背景に記念撮影。夕暮れに博多湾沿いのリゾートホテルへチェックイン。夜はホテル内のレストランまたは中洲・天神へ出かけ、本場の熱々博多もつ鍋を堪能します。
              </p>
            </div>

            {/* Day 2 */}
            <div className="relative pl-6 border-l-2 border-teal-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-teal-700" />
              <h3 className="font-bold text-stone-900 text-base">
                2日目：太宰府天満宮参拝とJR博多駅前「光の街」イルミネーション
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                朝、太宰府天満宮へ。名物の焼き立て「梅ヶ枝餅」を頬張りながら、初冬の静謐な境内を参拝。昼は博多へ戻り、老舗の水炊き専門店で濃厚白濁スープと鶏肉の旨味をじっくり味わいます。午後はキャナルシティ博多でのショッピングを楽しみ、夕暮れには博多駅直結の都ホテルへ。最上階の屋上アウトドア天然温泉スパに浸かり、夜は博多駅前広場を彩る62万球の壮大なイルミネーション「光の街・博多」とクリスマスマーケットを満喫します。
              </p>
            </div>

            {/* Day 3 */}
            <div className="relative pl-6 border-l-2 border-teal-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-teal-700" />
              <h3 className="font-bold text-stone-900 text-base">
                3日目：柳橋連合市場の魚介探索とお土産「博多あまおう」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                最終日は「博多の台所」柳橋連合市場を散策。新鮮な明太子や乾物を見学し、昼食は市場近くで玄界灘の冬の魚介握り寿司または博多豚骨ラーメンを一杯。博多駅構内で旬を迎えた大粒の「博多あまおう」や明太子、銘菓「通りもん」を買い揃え、空港から帰路につきます。
              </p>
            </div>
          </div>
        </section>

        {/* Local Winter Practical Tips */}
        <section className="bg-teal-950 text-white rounded-3xl p-6 sm:p-10 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-teal-300 font-bold text-xs sm:text-sm tracking-wider uppercase">
            <ThermometerSun className="w-4 h-4 text-teal-300" />
            現地リアルアドバイス
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">
            糸島カキ小屋と冬の博多を120%楽しむための実践テクニック
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-teal-100 leading-relaxed pt-2">
            <div className="space-y-2 bg-stone-900/60 p-4 rounded-2xl border border-teal-800/60">
              <span className="font-bold text-white block">【カキ小屋での服装と持ち物】</span>
              <p>
                カキを網で焼く際、殻の破片や灰がパチパチと飛び散ることがあります。小屋で貸し出される無料ジャンパーを着るのが基本ですが、足元やズボンにも灰が落ちるため、高価な衣類やウールコートは避け、丸洗いできるカジュアルな服装で訪れるのが鉄則です。ウェットティッシュや軍手、調味料（レモン果汁、チーズ、ポン酢など持ち込み可能な店が多い）を持参するとより楽しめます。
              </p>
            </div>
            <div className="space-y-2 bg-stone-900/60 p-4 rounded-2xl border border-teal-800/60">
              <span className="font-bold text-white block">【カキ小屋の混雑回避と営業時間】</span>
              <p>
                11月〜1月の土日祝日は昼11時〜13時頃にかけて各漁港のカキ小屋に行列ができます。並ばずにスムーズに入るなら「オープン直後の午前10時〜10時半」または「少し遅めの14時以降」の訪問が狙い目です。夕方（15時〜16時頃）には閉店する店が多いため、必ず事前に各店舗の営業時間をチェックしておきましょう。
              </p>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-950 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-teal-800" />
              福岡・糸島・博多の冬名物＆おみやげ手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              玄界灘の磯の香りと博多の活気が詰まった冬の厳選土産
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-700" />
                糸島産「みるくがき」のクール便＆工房とったん「またいちの塩」
              </h3>
              <p>
                岐志や船越のカキ小屋店頭では、朝獲れ殻付きの「糸島カキ（みるくがき）」を発泡スチロール箱に詰めて地方発送可能。カキ専用ナイフと軍手付きのセットも多く、自宅でもレンジやグリルで簡単に浜焼きの味を楽しめます。また、糸島半島の突端・製塩所「工房とったん」で作られるミネラル豊富な天然塩「またいちの塩」や、塩とカラメルをかけて食べる名物「潮プリン」は行列必至の糸島大人気みやげです。
              </p>
            </div>
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-700" />
                老舗の「本場博多もつ鍋セット」＆冬に甘み極まる「博多あまおう」
              </h3>
              <p>
                博多駅構内の「マイング」や百貨店では、「やま中」「おおやま」「前田屋」など名店のもつ鍋セット（冷凍スープ・ぷりぷり牛もつ・ちゃんぽん麺付き）が豊富に揃います。さらに、12月から1月にかけて最盛期を迎える福岡限定の高級苺「博多あまおう」は、「あかい・まるい・おおきい・うまい」の頭文字通り、果汁たっぷりで濃厚な甘酸っぱさが旅の最高の締めくくりになります。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-950 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-teal-800" />
              玄界灘の海洋風土・ディープダイブ解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ糸島のカキは濃厚で、玄界灘の冬の魚介は別格の旨さなのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-stone-100 shadow-2xs">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Waves className="w-4 h-4 text-teal-700" />
                脊振山系の森のミネラルと玄界灘の激流が織りなす奇跡の湾
              </h3>
              <p>
                糸島半島が面する海域には、標高1,000m級の脊振（せふり）山系から原生林の植物性プランクトンや腐植土のミネラルを含んだ清流が注ぎ込みます。この栄養豊かな森の恵みと、対馬暖流が流れ込む外海の激しい潮流がぶつかり合うことで、カキの餌となる良質なプランクトンが爆発的に繁殖。カキが短期間で丸々と肥育し、エグみが少なく「ミルクのように甘くクリーミー」と称される極上の肉質に仕上がります。
              </p>
            </div>

            <div className="space-y-2 bg-white p-5 rounded-2xl border border-stone-100 shadow-2xs">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Utensils className="w-4 h-4 text-teal-700" />
                大陸の風がもたらす冬の荒海と引き締まった「天然とらふぐ・アラ」
              </h3>
              <p>
                冬になると大陸から強いシベリア寒気団が南下し、玄界灘には強烈な北西の季節風が吹き荒れ、日本屈指の荒波が巻き起こります。この過酷な激流に逆らって泳ぐ天然とらふぐや、海底の岩礁に潜む巨大魚アラ（クエ）は、筋肉繊維が極限まで引き締まり、身に上質な脂を蓄えます。透明感のある弾力と噛むほどに溢れ出すアミノ酸の旨味は、激動の冬の玄界灘がもたらす自然の最高傑作です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-950 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-teal-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬・厳冬期の福岡・糸島・博多旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-teal-700 font-extrabold">Q.</span>
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
          <div className="flex items-center gap-2 text-teal-950 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-teal-800" />
            あわせて読みたい九州・西日本の冬温泉＆海鮮特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-saga-karatsu-onsen-yobuko-ika-sagagyu-genkai-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-teal-700 font-bold block text-[10px]">佐賀・唐津＆呼子</span>
              <p className="font-bold text-stone-800 line-clamp-2">呼子イカ活き造りと玄界灘の冬魚・佐賀牛を堪能する海沿い温泉宿</p>
            </Link>
            <Link 
              href="/winter-shimonoseki-fugu-torafugu-luxury-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-teal-700 font-bold block text-[10px]">山口・下関</span>
              <p className="font-bold text-stone-800 line-clamp-2">本場下関の天然とらふぐフルコースと関門海峡の冬夜景を望む極上宿</p>
            </Link>
            <Link 
              href="/winter-nagasaki-huistenbosch-christmas-lights-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-teal-700 font-bold block text-[10px]">長崎・ハウステンボス</span>
              <p className="font-bold text-stone-800 line-clamp-2">世界最大1300万球の冬イルミネーションと直営リゾートホテルステイ</p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
