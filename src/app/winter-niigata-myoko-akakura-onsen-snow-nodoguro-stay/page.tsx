import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月新潟・妙高赤倉温泉の初雪妙高山と開湯200年名湯】硫酸塩・炭酸水素塩のダブル美肌露天・冬のどぐろ塩焼き＆新潟和牛会席の宿5選",
  description: "11月から12月にかけて新潟県・妙高山麓は、標高2,454mの日本百名山・妙高山が初雪の白銀に輝き、豪雪地帯ならではの純白の冬景色が広がります。文化13年（1816年）開湯、妙高山北地獄谷から湧き出る源泉は、「肌を滑らかにする炭酸水素塩泉」と「肌を保湿しコーティングする硫酸塩泉」を併せ持つ日本有数のダブル美肌温泉。創業1937年のクラシックリゾートからの雪海パノラマ、日本海・直江津港や能生漁港から直送される高級魚「冬のどぐろ」の塩焼きや刺身、とろける霜降りの「にいがた和牛」、妙高・魚沼産コシヒカリの新米と地酒を味わう至高の妙高名宿5選を徹底解説。",
  keywords: '赤倉温泉 宿泊, 妙高高原 11月 12月, 赤倉観光ホテル, ホテル太閤, 赤倉ホテル, お宿ふるや, 香風館, 妙高山 雪景色, 赤倉温泉 美肌の湯, 新潟 のどぐろ 宿, にいがた和牛 赤倉温泉',
  alternates: {
    canonical: 'https://croud-travel.com/winter-niigata-myoko-akakura-onsen-snow-nodoguro-stay'
  },
  openGraph: {
    title: "【11・12月新潟・妙高赤倉温泉の初雪妙高山と開湯200年名湯】硫酸塩・炭酸水素塩のダブル美肌露天・冬のどぐろ塩焼き＆新潟和牛会席の宿5選",
    description: "11月から12月にかけて新潟県・妙高山麓は、標高2,454mの日本百名山・妙高山が初雪の白銀に輝き、豪雪地帯ならではの純白の冬景色が広がります。文化13年（1816年）開湯、妙高山北地獄谷から湧き出る源泉は、「肌を滑らかにする炭酸水素塩泉」と「肌を保湿しコーティングする硫酸塩泉」を併せ持つ日本有数のダブル美肌温泉。創業1937年のクラシックリゾートからの雪海パノラマ、日本海・直江津港や能生漁港から直送される高級魚「冬のどぐろ」の塩焼きや刺身、とろける霜降りの「にいがた和牛」、妙高・魚沼産コシヒカリの新米と地酒を味わう至高の妙高名宿5選を徹底解説。",
    url: 'https://croud-travel.com/winter-niigata-myoko-akakura-onsen-snow-nodoguro-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の妙高山と赤倉温泉の雪景色'
      }
    ]
  }
};

const faqList = [
  {
    "q": "妙高赤倉温泉の11月・12月の気候や気温、積雪状況はどうですか？",
    "a": "妙高高原（赤倉温泉）は標高約700〜1,000mの高冷地に位置し、日本有数の豪雪地帯として知られます。11月上旬から最低気温が0℃近くまで下がり、11月中旬には妙高山（標高2,454m）が本格冠雪、11月下旬には温泉街にも初雪が舞います。12月に入ると平年で数十センチから1メートル以上の積雪となり、完全な白銀の世界となります。最高気温でも0〜3℃、夜間はマイナス5℃以下まで冷え込むため、ダウンジャケット、防寒インナー、防水防寒ブーツが必須です。"
  },
  {
    "q": "赤倉温泉のお湯が「ダブル美肌の湯」と呼ばれる理由と泉質の特徴は？",
    "a": "赤倉温泉の源泉は妙高山の中腹・北地獄谷から引湯されており、泉質は「カルシウム・マグネシウム・ナトリウム-硫酸塩・炭酸水素塩温泉（低張性 中性 高温泉）」です。炭酸水素塩泉は肌の古い角質や皮脂を優しく洗い流す「クレンジング作用（美白・つるつる効果）」があり、硫酸塩泉は肌に潤いを与えて乾燥を防ぐ「保湿・保水ベール作用」を持っています。この2つの美肌泉質を併せ持つため、一度の入浴で角質ケアとスキンケアが同時に完了する奇跡の名湯と称されます。"
  },
  {
    "q": "冬の妙高高原を車で訪れる際の注意点は？冬用タイヤはいつから必要ですか？",
    "a": "11月中旬以降の妙高高原エリアへのドライブは、スタッドレスタイヤの装着が絶対に不可欠です。上信越自動車道（妙高高原ICや信濃町IC周辺）では冬用タイヤ規制が頻繁に実施されます。また、温泉街へ続く坂道やカーブは路面凍結（アイスバーン）や圧雪路面となるため、四輪駆動（4WD）車が推奨されます。運転に自信がない方は、北陸新幹線・上越妙高駅からえちごトキめき鉄道に乗り換え、妙高高原駅から各宿の送迎バスや路線バスを利用するのが最も安全です。"
  },
  {
    "q": "11月・12月に赤倉温泉で味わえる新潟の冬の旬グルメは何ですか？",
    "a": "冬の新潟はまさに美食の宝庫です。日本海で水揚げされる「のどぐろ（アカムツ）」は初冬から真冬にかけて脂の乗りが最高潮に達し、香ばしい塩焼きやお造りが格別です。また、とろけるような肉質と上質な脂が特徴の「にいがた和牛」、秋に収穫されたばかりのツヤツヤの「妙高・魚沼産新米コシヒカリ」、新潟の冬の郷土料理「のっぺ汁」などが楽しめます。妙高市内の蔵元（千代の光、鮎正宗、君の井）が醸す初冬の新酒（しぼりたて）とのペアリングも格別です。"
  },
  {
    "q": "赤倉観光ホテルからの「雲海」は11月・12月にも見られますか？",
    "a": "標高1,000mに建つ赤倉観光ホテルからは、11月から12月上旬にかけても条件が揃えば見事な雲海が発生します。特に「前日に雨や雪が降り、翌朝が晴れて風がなく、放射冷却で冷え込んだ早朝」に善光寺平や野尻湖周辺に濃い霧が溜まり、雲海が出現しやすくなります。白銀に輝く北信越の山々と雲海が朝日を浴びて黄金色に染まる光景は、一生の思い出に残る絶景です。"
  }
];

export default function AkakuraOnsenWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-niigata-myoko-akakura-onsen-snow-nodoguro-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-niigata-myoko-akakura-onsen-snow-nodoguro-stay"
        },
        "headline": "【11・12月新潟・妙高赤倉温泉の初雪妙高山と開湯200年名湯】硫酸塩・炭酸水素塩のダブル美肌露天・冬のどぐろ塩焼き＆新潟和牛会席の宿5選",
        "description": "11月から12月にかけて新潟県・妙高山麓は、標高2,454mの日本百名山・妙高山が初雪の白銀に輝き、豪雪地帯ならではの純白の冬景色が広がります。文化13年（1816年）開湯、妙高山北地獄谷から湧き出る源泉は、「肌を滑らかにする炭酸水素塩泉」と「肌を保湿しコーティングする硫酸塩泉」を併せ持つ日本有数のダブル美肌温泉。創業1937年のクラシックリゾートからの雪海パノラマ、日本海・直江津港や能生漁港から直送される高級魚「冬のどぐろ」の塩焼きや刺身、とろける霜降りの「にいがた和牛」、妙高・魚沼産コシヒカリの新米と地酒を味わう至高の妙高名宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T04:00:00+09:00",
        "dateModified": "2026-09-28T04:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "Croud Travel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "author": {
          "@type": "Organization",
          "name": "Croud Travel 温泉・冬旅取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.com/winter-niigata-myoko-akakura-onsen-snow-nodoguro-stay#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.com/"
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
            "name": "新潟・妙高赤倉温泉 初雪妙高山とダブル美肌湯の宿",
            "item": "https://croud-travel.com/winter-niigata-myoko-akakura-onsen-snow-nodoguro-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-niigata-myoko-akakura-onsen-snow-nodoguro-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "妙高赤倉温泉の11月・12月の気候や気温、積雪状況はどうですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "妙高高原（赤倉温泉）は標高約700〜1,000mの高冷地に位置し、日本有数の豪雪地帯として知られます。11月上旬から最低気温が0℃近くまで下がり、11月中旬には妙高山（標高2,454m）が本格冠雪、11月下旬には温泉街にも初雪が舞います。12月に入ると平年で数十センチから1メートル以上の積雪となり、完全な白銀の世界となります。最高気温でも0〜3℃、夜間はマイナス5℃以下まで冷え込むため、ダウンジャケット、防寒インナー、防水防寒ブーツが必須です。"
            }
          },
          {
            "@type": "Question",
            "name": "赤倉温泉のお湯が「ダブル美肌の湯」と呼ばれる理由と泉質の特徴は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "赤倉温泉の源泉は妙高山の中腹・北地獄谷から引湯されており、泉質は「カルシウム・マグネシウム・ナトリウム-硫酸塩・炭酸水素塩温泉（低張性 中性 高温泉）」です。炭酸水素塩泉は肌の古い角質や皮脂を優しく洗い流す「クレンジング作用（美白・つるつる効果）」があり、硫酸塩泉は肌に潤いを与えて乾燥を防ぐ「保湿・保水ベール作用」を持っています。この2つの美肌泉質を併せ持つため、一度の入浴で角質ケアとスキンケアが同時に完了する奇跡の名湯と称されます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の妙高高原を車で訪れる際の注意点は？冬用タイヤはいつから必要ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "11月中旬以降の妙高高原エリアへのドライブは、スタッドレスタイヤの装着が絶対に不可欠です。上信越自動車道（妙高高原ICや信濃町IC周辺）では冬用タイヤ規制が頻繁に実施されます。また、温泉街へ続く坂道やカーブは路面凍結（アイスバーン）や圧雪路面となるため、四輪駆動（4WD）車が推奨されます。運転に自信がない方は、北陸新幹線・上越妙高駅からえちごトキめき鉄道に乗り換え、妙高高原駅から各宿の送迎バスや路線バスを利用するのが最も安全です。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月に赤倉温泉で味わえる新潟の冬の旬グルメは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "冬の新潟はまさに美食の宝庫です。日本海で水揚げされる「のどぐろ（アカムツ）」は初冬から真冬にかけて脂の乗りが最高潮に達し、香ばしい塩焼きやお造りが格別です。また、とろけるような肉質と上質な脂が特徴の「にいがた和牛」、秋に収穫されたばかりのツヤツヤの「妙高・魚沼産新米コシヒカリ」、新潟の冬の郷土料理「のっぺ汁」などが楽しめます。妙高市内の蔵元（千代の光、鮎正宗、君の井）が醸す初冬の新酒（しぼりたて）とのペアリングも格別です。"
            }
          },
          {
            "@type": "Question",
            "name": "赤倉観光ホテルからの「雲海」は11月・12月にも見られますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "標高1,000mに建つ赤倉観光ホテルからは、11月から12月上旬にかけても条件が揃えば見事な雲海が発生します。特に「前日に雨や雪が降り、翌朝が晴れて風がなく、放射冷却で冷え込んだ早朝」に善光寺平や野尻湖周辺に濃い霧が溜まり、雲海が出現しやすくなります。白銀に輝く北信越の山々と雲海が朝日を浴びて黄金色に染まる光景は、一生の思い出に残る絶景です。"
            }
          }
        ]
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "赤倉温泉　赤倉観光ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/32250/32250.jpg",
              rating: 4.79,
              reviews: 663,
              price: "¥38,500〜",
              access: "電車◆しなの鉄道・えちごトキめき鉄道－妙高高原駅から無料送迎バス（予約制）あり／車◆上信越道－　妙高高原ＩＣより１０分",
              special: "80余年の伝統と眺望、温泉に恵まれたスパ＆リゾート",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32250%2F32250.html",
              story: "標高1,000mの妙高高原の山腹に堂々とそびえ、1937年創業の歴史を誇る日本を代表する高原クラシックリゾート「赤倉観光ホテル」。眼下には広大な善光寺平や野尻湖、遠く斑尾山や志賀連山が広がり、初冬の早朝には一面に広がる幻想的な「雲海」と雪化粧した山並みに出会えます。源泉掛け流しの展望露天風呂「アクアテラス」からは、大パノラマの絶景と温泉の湯けむりが一体となる唯一無二の湯浴みを提供。館内随所に漂う気品と洗練されたホスピタリティが、特別な冬の休日を演出します。",
              roomTip: "プレミアム棟の温泉露天風呂付きテラスルーム。デッキに設えられた源泉掛け流しの湯船から、初冬の澄み切った冷気の中で輝く白銀の山並みや朝陽の雲海を独占できます。",
              gourmetTip: "メインダイニング「ソルビエ」での伝統フレンチ、または「旬菜ダイニング 白樺」での特選会席。にいがた和牛フィレ肉のローストや日本海直送の鮮魚、新潟魚沼産コシヒカリを厳選ワインや地酒とともに堪能。",
              highlights: [
                "標高1,000mの絶景アクアテラス＆雲海と白銀の北信越山並みを望む展望露天風呂",
                "1937年創業の気品あふれるクラシックホテル＆伝統フレンチとにいがた和牛",
                "初冬の澄んだ空気の中で楽しむ極上のバーラウンジ＆名門リゾートの贅沢ステイ"
              ]
            },
            {
              id: 2,
              name: "赤倉温泉　ホテル太閤",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/31845/31845.jpg",
              rating: 5.00,
              reviews: 459,
              price: "¥16,300〜",
              access: "妙高高原駅よりバス約20分、タクシー約10分／妙高高原ICより車約10分　★注意★カーナビは「住所」で検索して下さい。",
              special: "【2016年　館内リニューアル♪】赤倉の高台に佇む絶景温泉★イルミネーション会場まで車で30分圏内",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31845%2F31845.html",
              story: "妙高山の雄大な裾野に位置し、最上階の展望大浴場と野天風呂から北信越の山々を一望できる絶景の宿「赤倉温泉 ホテル太閤」。開湯200余年の歴史を誇る妙高山・北地獄谷から自然湧出する名湯を贅沢に引き湯し、豊富な湯量で掛け流しています。湯の花が湯面に浮かぶお湯は、古い角質を落とすクレンジング効果と、肌をしっとり潤すパック効果を併せ持つ「ダブル美肌の湯」。初冬の冷え込んだ夜、湯煙越しに仰ぐ満天の星と妙高の夜景は息をのむ美しさです。",
              roomTip: "妙高山側スーペリア和洋室または展望温泉風呂付き特別室。大きなピクチャーウィンドウから、初雪を冠した妙高山の雄姿を真正面に眺める贅沢なロケーションです。",
              gourmetTip: "日本海直送の新鮮な海の幸と越後郷土の味覚を散りばめた季節会席。冬に脂が乗る白身のトロ「のどぐろ」の塩焼きや刺身、新潟県産豚の雪室熟成しゃぶしゃぶ、新米妙高コシヒカリの釜飯が絶品。",
              highlights: [
                "最上階展望大浴場と野天風呂から望む妙高山初雪パノラマ＆名湯掛け流し",
                "硫酸塩泉と炭酸水素塩泉のダブル美肌成分＆日本海のどぐろ塩焼きと妙高コシヒカリ",
                "冬の冷え込みの中で身体の芯から温まる濃厚な湯の花＆落ち着いた和モダン客室"
              ]
            },
            {
              id: 3,
              name: "赤倉温泉　赤倉ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5031/5031.jpg",
              rating: 3.97,
              reviews: 369,
              price: "¥11,000〜",
              access: "妙高高原駅より車で１０分、妙高高原ＩＣより車で１０分。国道１８号線の信号「豊橋」より左上に曲がって、赤倉温泉街へ・・",
              special: "源泉掛け流し温泉と旬な会席料理をお味わい下さい",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5031%2F5031.html",
              story: "赤倉温泉街の中心に佇み、江戸末期の文化13年（1816年）の開湯時より歴史を紡いできた温泉街屈指の老舗「赤倉温泉 赤倉ホテル」。宿の誇りは、樹齢数百年を数える天然青森ヒバを贅沢に組み上げた名物大浴場「有縁の湯（うえんのゆ）」。ヒバの清々しい香りと源泉掛け流しの名湯が心身の奥深くまで染み渡ります。ジャグジーや露天風呂、貸切風呂など館内で多彩な湯めぐりが楽しめ、初冬の寒さを忘れさせる贅沢な温まりの時間を過ごせます。",
              roomTip: "本館または別館の落ち着いた和室・和モダンツイン。赤倉温泉街の情緒ある街並みや遠くの山々を望み、老舗ならではの静かで落ち着いた佇まいに寛げます。",
              gourmetTip: "板前が丹精込めて仕立てる越後会席。近隣の日本海・能生漁港から仕入れる新鮮な海の幸盛り合わせや、ブランド牛「にいがた和牛」の陶板焼き、地元の山菜やきのこを使った温かい小鍋立て。",
              highlights: [
                "文化13年開湯の歴史を誇る老舗＆天然青森ヒバを組み上げた名物風呂「有縁の湯」",
                "ジャグジーや露天風呂など多彩な湯めぐり＆能生港直送の鮮魚とにいがた和牛陶板焼き",
                "赤倉温泉街の中心に位置し外湯めぐりや温泉街散策にも最適なロケーション"
              ]
            },
            {
              id: 4,
              name: "赤倉温泉　お宿　ふるや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/71920/71920.jpg",
              rating: 4.32,
              reviews: 160,
              price: "¥8,800〜",
              access: "JR 妙高高原駅よりお車にて10分 ※妙高高原駅までの送迎をご希望の方は「送迎希望」とご記入ください。",
              special: "癒しと寛ぎの空間ふるや。めずらしい畳風呂や女将手書きのメッセージでみなさまの心を温かく包みます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F71920%2F71920.html",
              story: "全館に畳が敷き詰められた温もりあふれる館内と、囲炉裏ダイニングでの心尽くしのもてなしが旅人を魅了する「赤倉温泉 お宿 ふるや」。大浴場にも特殊な畳が敷かれ、冷たい冬の日でも足元から温かく安全に湯浴みを楽しめる工夫が凝らされています。妙高山から湧き出る源泉を惜しみなく注ぐ野天風呂では、舞い散る初雪を眺めながらの雪見風呂が最高。湯上がりには囲炉裏の火を囲み、宿自慢の利き酒セットで新潟の銘酒を味わう大人の時間が流れます。",
              roomTip: "露天風呂付き客室または和モダン和洋室。陶器や檜の湯船に掛け流しの美肌湯が満たされ、冬の静かな妙高高原の夜風を感じながらプライベートな入浴を満喫できます。",
              gourmetTip: "囲炉裏ダイニング「石心亭」で味わう炭火焼きと創作会席。日本海直送の極上のどぐろの炭火塩焼き、炭火で香ばしく焼き上げるにいがた和牛、地元農家直送の妙高産コシヒカリの新米ご飯。",
              highlights: [
                "全館畳敷きの温もりと畳風呂大浴場＆囲炉裏ダイニングでの冬のどぐろ炭火焼き",
                "露天風呂付き客室で楽しむプライベートな雪見風呂＆新潟銘酒利き酒セット",
                "炭火の温もりを囲む囲炉裏ディナー＆雪国の温かいもてなしに癒やされる休日"
              ]
            },
            {
              id: 5,
              name: "妙高温泉　妙高・山里の湯宿　香風館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2788/2788.jpg",
              rating: 3.84,
              reviews: 340,
              price: "¥6,050〜",
              access: "妙高高原駅から徒歩約15分、タクシー約3分、上信越自動車道　妙高高原I.Cから妙高温泉方面約3分。",
              special: "厳選かけ流しの温泉と妙高山・日本海の山海田舎料理でおもてなし。眺めの良い貸切風呂のご用意もございます",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2788%2F2788.html",
              story: "妙高高原の自然に溶け込むように建ち、四季折々の表情を見せる日本庭園と妙高山の絶景が自慢の「妙高温泉 妙高・山里の湯宿 香風館」。源泉100%掛け流しの庭園露天風呂からは、初雪をまとった妙高山の雄大な姿を遮るものなく仰ぐことができます。弱アルカリ性の柔らかな温泉は湯あたりしにくく、長湯を楽しめるのが魅力。アットホームで心温まるおもてなしと、越後の豊かな恵みを活かした家庭的な料理が、冬の旅人を優しく癒やします。",
              roomTip: "妙高山眺望指定の純和室。窓いっぱいに広がる妙高山の稜線と雪景色を眺めながら、畳の清々しい香りに包まれてゆったりとした時間を過ごせます。",
              gourmetTip: "妙高の山里の恵みと日本海の幸を盛り込んだ手作り会席。冬の日本海のお造りや焼き魚、地元産野菜の天ぷら、新潟名物のっぺ汁、ツヤツヤに炊き上げた妙高産コシヒカリ。",
              highlights: [
                "庭園露天風呂から真正面に仰ぐ妙高山の初雪絶景＆源泉100%掛け流しの美肌湯",
                "アットホームな心温まるもてなし＆越後のっぺ汁と新米妙高コシヒカリの山里会席",
                "抜群のコストパフォーマンスで楽しむ妙高名湯旅＆スキー場や高原散策の拠点"
              ]
            }
  ];

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <header className="relative w-full h-[360px] sm:h-[480px] flex items-end justify-center bg-slate-900 text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
          alt="冬の妙高山と赤倉温泉の雪景色"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-semibold">
            <Snowflake className="w-4 h-4" />
            11月・12月 冬の極上温泉特集｜新潟・妙高高原
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月新潟・妙高赤倉温泉】<br className="hidden sm:inline" />
            初雪の妙高山とダブル美肌露天・冬のどぐろ＆新潟和牛会席の宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            開湯200余年、炭酸水素塩泉と硫酸塩泉が織りなす極上の美肌名湯。初雪に染まる霊峰・妙高山の雄姿を仰ぎ、冬の日本海から届く極上のどぐろとにいがた和牛を味わう至高の雪国リゾート。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* Section 1: Seasonal Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Mountain className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Heritage Double Beautifying Spring</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                日本百名山・妙高山の初雪と、高原リゾート文化が息づく冬の赤倉
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              新潟県と長野県の県境にそびえる秀峰・妙高山（標高2,454m）。越後富士と讃えられる円錐形の美しい山容は、11月中旬を迎えると山頂から鮮やかな純白の初冠雪を纏い、山麓のブナ原生林の黄葉が散り果てるとともに、一帯はしっとりと静まり返る初冬の装いへと移行します。12月に入ると純白のパウダースノーが大地を覆い尽くし、世界屈指の豪雪地帯ならではの幻想的な白銀のパノラマが広がります。
            </p>
            <p>
              赤倉温泉の歴史は、江戸後期の文化13年（1816年）に高田藩主・榊原政令が藩費を投じて開削したことに端を発します。明治から昭和にかけては、日本美術の父・岡倉天心が晩年を過ごし思索に耽った地としても名高く、昭和12年（1937年）には大倉喜七郎男爵によって日本最初期の国際高原リゾートホテル「赤倉観光ホテル」が誕生しました。標高1,000mの絶壁に建つクラシックホテルからは、早朝に放射冷却で冷え切った善光寺平や野尻湖を覆い尽くす圧巻の「滝雲・雲海」が広がり、遠く北信越の山々が朝日を浴びて黄金色に輝きます。
            </p>
            <p>
              温泉街には木造の風情ある老舗旅館が立ち並び、足湯公園や外湯の湯煙が冷気の中で白く立ち上ります。都会の喧騒を完全に忘れ去り、雪国の静けさと豊かなぬくもりに浸る贅沢な冬の隠れ家ステイがここには息づいています。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Eye className="w-5 h-5 text-teal-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">妙高山の初雪と幻想雲海</div>
              <div className="text-xs text-slate-600">標高1000mからのパノラマ絶景。冷え込んだ早朝に広がる雲海と白銀の峰々。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <ThermometerSun className="w-5 h-5 text-teal-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">炭酸水素塩＆硫酸塩の奇跡</div>
              <div className="text-xs text-slate-600">肌を滑らかにするクレンジング効果と保湿ベールが一度に手に入る稀有な泉質。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Utensils className="w-5 h-5 text-teal-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">冬のどぐろ＆にいがた和牛</div>
              <div className="text-xs text-slate-600">日本海の白身のトロ「のどぐろ」塩焼き、霜降り和牛ステーキ、新米コシヒカリ。</div>
            </div>
          </div>
        </section>

        {/* Section 2: Geology & Gastronomy Science */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Thermal Science & Coastal Bounty</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                北地獄谷7km引湯「炭酸水素塩泉×硫酸塩泉」ダブル美肌科学と日本海の冬味覚
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Flame className="w-4 h-4 text-teal-700" />
              <span>角質クレンジングと天然保湿パックが同時に完結する温泉医学の妙</span>
            </h3>
            <p>
              赤倉温泉の源泉は、霊峰・妙高山の中腹に位置する標高1,800mの「北地獄谷」から自然湧出しています。山肌に沿って敷設された約7kmの専用送湯管を通り、動力ポンプを一切使わずに落差による自然流下のみで各宿へと配湯されています。湧出温度は約51℃。配管を流れる過程で外気により適度な入浴温度へと自然冷却され、加水や加温を必要としない極めて純度の高い生源泉が湯船に注がれます。
            </p>
            <p>
              泉質名は「カルシウム・マグネシウム・ナトリウム-硫酸塩・炭酸水素塩温泉（低張性 中性 高温泉）」。炭酸水素塩泉（重曹成分）は弱アルカリ性の石鹸のような乳化作用を持ち、肌表面の余分な皮脂汚れや古くなった角質を優しく軟化させて洗い流します。そして同時に含まれる硫酸塩泉（芒硝・石膏成分）が、角質が整った肌の表面に微細なカルシウム・マグネシウムの皮膜を形成し、水分の蒸発をブロックする「天然の保湿パック（化粧水ベール）」として機能します。この「落として潤す」ダブル作用により、湯上がりの肌は驚くほどの弾力と透明感を取り戻します。
            </p>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 pt-2">
              <Utensils className="w-4 h-4 text-teal-700" />
              <span>日本海・能生港直送の「冬のどぐろ」塩焼きと霜降り「にいがた和牛」の旨味</span>
            </h3>
            <p>
              妙高高原は山間のリゾート地でありながら、日本海に面した上越市・直江津港や能生漁港まで車で約40分という立地条件に恵まれています。冬の日本海で揚がる魚介の中でも最高峰の評価を受けるのが「のどぐろ（アカムツ）」です。初冬から真冬にかけてのどぐろは皮下脂肪率が20%を超え、「白身のトロ」と呼ばれるにふさわしい極上の脂の乗りを見せます。強火の遠火でじっくり焼き上げた塩焼きは、皮目がパリッと香ばしく、箸を入れた瞬間に透明な脂が溢れ出します。
            </p>
            <p>
              さらに、豊かな自然の中で新潟県産の良質な米や牧草を食べて育てられる黒毛和牛「にいがた和牛」は、オレイン酸を豊富に含み、脂の融点が低いため後味が驚くほど軽やか。秋に収穫されたばかりの妙高山麓産・魚沼産のツヤツヤの新米コシヒカリと、妙高の銘酒「千代の光」「鮎正宗」の初冬しぼりたて新酒を合わせれば、冬の味覚の贅を尽くした至福の晩餐となります。
            </p>
          </div>
        </section>

        {/* Section 3: Hotel Cards */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Recommended Ryokan & Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              妙高赤倉温泉・冬の滞在を彩る厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              楽天トラベル公式APIより最新の宿泊プラン・評価情報を取得。11月・12月の冬旅行に心からおすすめできる宿を徹底比較。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div 
                key={h.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300 flex flex-col"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Title & Rating */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-teal-800 text-white text-xs font-bold">
                          厳選第{h.id}位
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 text-sm font-bold">
                          <Star className="w-4 h-4 fill-current" />
                          <span>{h.rating}</span>
                          <span className="text-slate-400 font-normal text-xs">({h.reviews}件)</span>
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-teal-800 transition">
                        <a href={h.url} target="_blank" rel="noopener noreferrer">
                          {h.name}
                        </a>
                      </h3>
                    </div>
                    <div className="text-right flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center">
                      <span className="text-xs text-slate-500">1名あたり参考料金（税込）</span>
                      <span className="text-2xl font-black text-amber-600">{h.price}</span>
                    </div>
                  </div>

                  {/* Image & Story Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-5 relative h-60 sm:h-72 rounded-2xl overflow-hidden bg-slate-100">
                      <Image
                        src={h.img}
                        alt={h.name}
                        fill
                        className="object-cover hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {h.story}
                      </p>
                      <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                          <Utensils className="w-4 h-4 text-amber-700" />
                          <span>冬の絶品料理のこだわり</span>
                        </div>
                        <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                          {h.gourmetTip}
                        </p>
                      </div>
                      <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200/60 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-teal-900">
                          <Landmark className="w-4 h-4 text-teal-800" />
                          <span>おすすめ客室・眺望のポイント</span>
                        </div>
                        <p className="text-xs sm:text-sm text-teal-950 leading-relaxed">
                          {h.roomTip}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      この宿の注目ポイント
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {h.highlights.map((hl: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-teal-800 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Access & Booking Button */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-start gap-2 text-xs text-slate-600 max-w-xl">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{h.access}</span>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-teal-800 to-teal-900 hover:from-teal-900 hover:to-slate-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
                    >
                      <span>楽天トラベルでプラン・空室を見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">1泊2日 満喫ルート</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                妙高赤倉温泉＆雪見露天と日本海直江津・能生鮮魚を巡るモデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                <span className="w-6 h-6 rounded-full bg-teal-800 text-white flex items-center justify-center text-xs">1</span>
                <span>1日目：上越妙高駅 〜 いもり池（妙高山水鏡） 〜 赤倉温泉チェックイン＆ダブル美肌湯</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                北陸新幹線・上越妙高駅よりレンタカーまたは妙高高原駅経由で出発。初冬の静まり返った「いもり池」に立ち寄り、雪化粧を始めた妙高山が水面に映る絶景を鑑賞。午後は早めに赤倉温泉の宿へチェックイン。硫酸塩泉と炭酸水素塩泉の源泉掛け流し露天風呂で温まり、夕食には日本海直送の極上のどぐろ塩焼きやにいがた和牛、新米コシヒカリを地酒「千代の光」とともに堪能。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                <span className="w-6 h-6 rounded-full bg-teal-800 text-white flex items-center justify-center text-xs">2</span>
                <span>2日目：早朝アクアテラス雲海鑑賞 〜 岡倉天心六角堂 〜 道の駅あらい（日本海鮮魚・お土産）</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                宿の展望露天やテラスから早朝の雲海と白銀の山並みを眺める至福の朝湯。朝食後にチェックアウトし、赤倉温泉街にある「岡倉天心六角堂」や足湯公園を散策。車で約30分の「道の駅あらい」に立ち寄り、日本海で揚がった鮮魚や紅ズワイガニ、新潟限定の地酒や笹団子を購入して帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Climate & Travel Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Travel Advisory</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の妙高高原 冬旅の注意点と服装・雪道運転の心得
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-teal-800" />
                厳しい冷え込みと本格防寒
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                標高700〜1,000mに位置するため、平地と比べて気温が約5〜7℃低くなります。11月下旬以降は氷点下の真冬日が増加します。厚手のロングダウンコート、防風性の高い手袋、耳まで覆うニット帽、保温性インナー（発熱タイツなど）を必ず着用してください。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-teal-800" />
                スタッドレスタイヤと滑り止め靴
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                11月中旬以降の車利用はスタッドレスタイヤ必須です。温泉街周辺の坂道は雪道・凍結路面となります。また、屋外散策時は滑り止め溝の深いスノーブーツや防水トレッキングシューズを着用し、転倒事故に十分注意してください。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                妙高赤倉温泉冬旅のよくある質問（FAQ）
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-teal-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Internal Links */}
        <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Related Winter Features & Hot Springs</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい新潟・甲信越の冬名湯＆雪見露天特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の初雪や雪景色、極上グルメを味わう人気の厳選特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-niigata-echigo-yuzawa-snow-sake-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">新潟・越後湯沢</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">雪国情緒と雪見酒・南魚沼コシヒカリと新潟地酒の宿</h3>
            </Link>
            <Link 
              href="/winter-niigata-tsukioka-onsen-emerald-bihada-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">新潟・月岡温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">エメラルドグリーンの硫黄泉と美肌湯・越後牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-nagano-yudanaka-onsen-snow-monkey-shinshu-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">長野・湯田中渋温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">スノーモンキーと開湯1350年登録有形文化財風呂・信州牛の宿</h3>
            </Link>
            <Link 
              href="/winter-nagano-nozawa-onsen-powder-snow-sotoyu-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">長野・野沢温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">13の外湯めぐりと湯煙・信州牛と野沢菜漬けの宿</h3>
            </Link>
            <Link 
              href="/winter-gunma-manza-snow-milky-hotspring-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">群馬・万座温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">標高1800mの白濁にごり湯雪見露天と満天の星空の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">全国の厳選温泉・旬旅特集まとめを見る</h3>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
