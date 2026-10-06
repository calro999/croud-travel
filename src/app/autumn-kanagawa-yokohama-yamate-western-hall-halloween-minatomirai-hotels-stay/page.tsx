import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Footprints, Flame, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye, Landmark, Flower2
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【秋の横浜山手西洋館ハロウィーン】歴史ある洋館7館の本格装飾と山手ハロウィーンウォーク！みなとみらい夜景・絶品アフタヌーンティー＆クラシック・ベイサイド厳選名宿5選",
  description: "横浜開港の歴史息づく山手の丘に佇む異人館街「山手西洋館」。10月下旬には「エリスマン邸」「ベーリック・ホール」「外交官の家」など国指定重要文化財を含む西洋館7館が、フラワーアーティストやコーディネーターによる洗練された本格ハロウィーン装飾で彩られます。スタンプラリーや仮装パレードが賑わう「山手ハロウィーンウォーク」、港の見える丘公園の秋バラ、元町ショッピングストリートのカフェ巡り。夜はみなとみらいの煌めく大観覧車とベイブリッジの夜景を望み、歴史あるクラシックホテルやハイクオリティタワーホテル厳選5選を徹底特集。",
  keywords: '山手西洋館 ハロウィン, 横浜 ハロウィンウォーク, 横浜ベイホテル東急, ホテルニューグランド, ヨコハマグランドインターコンチネンタル, 三井ガーデンホテル横浜みなとみらいプレミア, 港の見える丘公園 秋バラ, 横浜 アフタヌーンティー ハロウィン',
  alternates: {
    canonical: 'https://croud-travel.com/autumn-kanagawa-yokohama-yamate-western-hall-halloween-minatomirai-hotels-stay'
  },
  openGraph: {
    title: "【秋の横浜山手西洋館ハロウィーン】歴史ある洋館7館の本格装飾と山手ハロウィーンウォーク！みなとみらい夜景・絶品アフタヌーンティー＆クラシック・ベイサイド厳選名宿5選",
    description: "横浜開港の歴史息づく山手の丘に佇む異人館街「山手西洋館」。10月下旬には「エリスマン邸」「ベーリック・ホール」「外交官の家」など国指定重要文化財を含む西洋館7館が、フラワーアーティストやコーディネーターによる洗練された本格ハロウィーン装飾で彩られます。スタンプラリーや仮装パレードが賑わう「山手ハロウィーンウォーク」、港の見える丘公園の秋バラ、元町ショッピングストリートのカフェ巡り。夜はみなとみらいの煌めく大観覧車とベイブリッジの夜景を望み、歴史あるクラシックホテルやハイクオリティタワーホテル厳選5選を徹底特集。",
    url: 'https://croud-travel.com/autumn-kanagawa-yokohama-yamate-western-hall-halloween-minatomirai-hotels-stay',
    siteName: 'クラドトラベル',
    type: 'article',
    locale: 'ja_JP',
    images: [{
      url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      width: 1200,
      height: 630,
      alt: '秋の横浜 山手西洋館のクラシカルな街並みとみなとみらいの夜景'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【秋の横浜山手西洋館ハロウィーン】歴史ある洋館7館の本格装飾と山手ハロウィーンウォーク！みなとみらい夜景・絶品アフタヌーンティー＆クラシック・ベイサイド厳選名宿5選",
    description: "横浜開港の歴史息づく山手の丘に佇む異人館街「山手西洋館」。10月下旬には「エリスマン邸」「ベーリック・ホール」「外交官の家」など国指定重要文化財を含む西洋館7館が、フラワーアーティストやコーディネーターによる洗練された本格ハロウィーン装飾で彩られます。スタンプラリーや仮装パレードが賑わう「山手ハロウィーンウォーク」、港の見える丘公園の秋バラ、元町ショッピングストリートのカフェ巡り。夜はみなとみらいの煌めく大観覧車とベイブリッジの夜景を望み、歴史あるクラシックホテルやハイクオリティタワーホテル厳選5選を徹底特集。",
    images: ['https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function YokohamaHalloweenFeaturePage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【秋の横浜山手西洋館ハロウィーン】歴史ある洋館7館の本格装飾と山手ハロウィーンウォーク！みなとみらい夜景・絶品アフタヌーンティー＆クラシック・ベイサイド厳選名宿5選",
    "description": "横浜開港の歴史息づく山手の丘に佇む異人館街「山手西洋館」。10月下旬には「エリスマン邸」「ベーリック・ホール」「外交官の家」など国指定重要文化財を含む西洋館7館が、フラワーアーティストやコーディネーターによる洗練された本格ハロウィーン装飾で彩られます。スタンプラリーや仮装パレードが賑わう「山手ハロウィーンウォーク」、港の見える丘公園の秋バラ、元町ショッピングストリートのカフェ巡り。夜はみなとみらいの煌めく大観覧車とベイブリッジの夜景を望み、歴史あるクラシックホテルやハイクオリティタワーホテル厳選5選を徹底特集。",
    "image": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "2026-10-06T10:00:00+09:00",
    "dateModified": "2026-10-06T10:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "クラドトラベル編集部 横浜クラシック・ベイサイド取材班"
    },
    "publisher": {
      "@type": "Organization",
      "name": "クラドトラベル",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.com/autumn-kanagawa-yokohama-yamate-western-hall-halloween-minatomirai-hotels-stay"
    }
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        "name": "横浜山手西洋館ハロウィーン＆みなとみらい特集",
        "item": "https://croud-travel.com/autumn-kanagawa-yokohama-yamate-western-hall-halloween-minatomirai-hotels-stay"
      }
    ]
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "横浜山手西洋館の「ハロウィーン装飾」と「山手ハロウィーンウォーク」の開催時期と見学方法は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "山手西洋館のハロウィーン装飾は、例年10月中旬から10月31日まで開催されます。対象となる館は「外交官の家」「ブラフ18番館」「ベーリック・ホール」「エリスマン邸」「山手234番館」「横浜市イギリス館」「山手111番館」の7館です。入館料はすべて無料で、各館ごとにフラワーデザイナーやコーディネーターによる個性豊かで洗練されたハロウィーンディスプレイを鑑賞できます。また、10月最終日曜日に開催される「山手ハロウィーンウォーク」では、仮装した子どもや大人たちがスタンプラリーを巡り、山手の丘全体が賑やかなお祭りムードに包まれます。"
        }
      },
      {
        "@type": "Question",
        "name": "山手西洋館巡りのおすすめ散策ルートと所要時間は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "おすすめルートは、みなとみらい線「元町・中華街駅」の元町口（アメリカ山公園口）からスタートし、エレベーターで丘の上へ上がるルートです。「アメリカ山公園」→「港の見える丘公園（秋バラ鑑賞）」→「イギリス館・山手111番館」→「山手資料館」→「山手234番館・エリスマン邸・ベーリック・ホール」→「元町公園」→「イタリア山庭園（外交官の家・ブラフ18番館）」と巡り、最後はJR石川町駅へ抜けるのがスムーズです。洋館の見学とお茶休憩を含めて約2時間半〜3時間半が目安です。"
        }
      },
      {
        "@type": "Question",
        "name": "港の見える丘公園や山手エリアの「秋バラ」の見頃の時期は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "山手の丘にある「港の見える丘公園」や「山手イタリア山庭園」では、10月中旬から11月中旬にかけて「秋バラ」が見頃を迎えます。春バラに比べて花数はやや控えめですが、気温が下がる秋は一輪一輪の色が深く鮮やかで、芳醇な香りが強く漂うのが特徴です。ハロウィーンのオレンジ色の装飾と、深紅やピンクの秋バラのコントラストはこの時期だけの絶景です。"
        }
      },
      {
        "@type": "Question",
        "name": "秋の横浜で楽しみたい限定アフタヌーンティーやカフェ巡りのポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "横浜ベイホテル東急の「ソマーハウス」やホテルニューグランドの「本館ロビーラウンジ ラ・テラス」、ヨコハマグランドインターコンチネンタルホテルの「マリンブルー」などでは、10月限定で栗、かぼちゃ、紫芋、洋梨をふんだんに使ったハロウィーンアフタヌーンティーが提供されます。大観覧車や横浜港の絶景を眺めながら優雅にティータイムを過ごせます。また、山手のエリスマン邸内「カフェ エリスマン」や、えの木ていの洋菓子店でいただくチェリーサンドも散策途中の名物です。"
        }
      },
      {
        "@type": "Question",
        "name": "秋（10月）の横浜山手・みなとみらいの気候と歩きやすい服装・靴のアドバイスは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "10月の横浜は日中の平均気温が18〜22度前後と大変過ごしやすい季節ですが、山手の丘は坂道や階段が多く、移動でしっかり汗をかきます。また、海沿いのみなとみらいは日没後に海風で冷え込むため、脱ぎ着しやすいカーディガンやトレンチコートが便利です。石畳や坂道を長く歩くため、履き慣れた歩きやすいスニーカーまたはローヒールの靴を強くおすすめします。"
        }
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "横浜ベイホテル東急",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2003/2003.jpg",
              rating: 4.64,
              reviews: 10803,
              price: "¥9,200〜",
              access: "みなとみらい線みなとみらい駅徒歩約１分／ＪＲ・市営地下鉄線桜木町駅徒歩１０分",
              special: "横浜港を一望できるアーバンリゾートで最上のくつろぎを",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2003%2F2003.html",
              story: "みなとみらいのシンボル・大観覧車「コスモクロック21」の真向かい、ウォーターフロントに聳えるアーバンリゾート「横浜ベイホテル東急」。最大の特徴は、みなとみらいエリアのホテルで唯一、客室に風を感じられるバルコニーを備えている点です。秋の澄み切った夜空の下、ライトアップされた大観覧車や横浜港のイルミネーションをバルコニーから独占できる特等席。館内には2層吹き抜けの開放的なラウンジ「ソマーハウス」があり、ハロウィーン限定アフタヌーンティーが大人気。クィーン・アリスやスーツァン・レストラン陳など名店が揃い、美食家をも唸らせる極上の滞在が叶います。",
              roomTip: "ベイクラブフロアまたはエグゼクティブパークビューツイン（バルコニー付き）。目の前に迫る大観覧車のイルミネーションをバルコニーから見上げる贅沢。",
              gourmetTip: "ラウンジ「ソマーハウス」のハロウィーンアフタヌーンティー。秋の栗や紫芋、洋梨を使った繊細なパティスリーと香り高い紅茶のペアリング。",
              highlights: [
                "全室バルコニー付き・大観覧車のイルミネーションを目の前に望むベイサイド特等席" ,
                "ラウンジ「ソマーハウス」のハロウィーン限定アフタヌーンティーが大人気" ,
                "みなとみらい駅直結・クイーンズスクエア隣接でショッピングや散策も快適"
              ]
            },
            {
              id: 2,
              name: "ホテルニューグランド",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2013/2013.jpg",
              rating: 4.66,
              reviews: 3859,
              price: "¥11,900〜",
              access: "みなとみらい線元町・中華街駅1番出口より徒歩1分",
              special: "横��スタンダードをいまに伝える、欧州の香りと趣。開港当時の横浜の面影を残すクラシックホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2013%2F2013.html",
              story: "昭和2年（1927年）開業、マッカーサー元帥やチャップリンをはじめ世界のVIPを迎えてきた日本を代表する名門クラシックホテル「ホテルニューグランド」。山下公園の目の前に位置し、本館ロビーには大階段や横浜市認定歴史的建造物の重厚なレトロ空間が広がります。山手西洋館のハロウィーン散策の余韻に浸るのにこれ以上ふさわしい舞台はありません。「シーフードドリア」「スパゲッティ ナポリタン」「プリン ア・ラ・モード」の日本の洋食三大発祥ホテルとしても名高く、本館「ザ・カフェ」で味わう元祖の味は格別の感動をもたらします。",
              roomTip: "本館グランドデラックスまたはタワー館グランドスイート。クラシカルな高い天井とアンティーク家具、窓の外に広がる山下公園と横浜港の海景色。",
              gourmetTip: "本館「ザ・カフェ」の元祖プリン ア・ラ・モード＆発祥のシーフードドリア。90余年の伝統を誇るクリーミーで濃厚な味わい。",
              highlights: [
                "昭和2年開業のクラシック名門・本館大階段と日本の洋食三大発祥の歴史" ,
                "山下公園目の前・元祖プリン ア・ラ・モード＆シーフードドリアの伝統の味" ,
                "世界のVIPを魅了した本物のおもてなし・山手西洋館ハロウィーンの最高の拠点"
              ]
            },
            {
              id: 3,
              name: "ヨコハマ　グランド　インターコンチネンタル　ホテル　ｂｙ　ＩＨＧ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5731/5731.jpg",
              rating: 4.46,
              reviews: 9567,
              price: "¥10,559〜",
              access: "みなとみらい駅から徒歩約5分、桜木町駅から徒歩約10分。みなとみらいのシンボルホテル♪",
              special: "みなとみらいのシンボル、風をはらんだヨットの帆の形が特徴のインターナショナルブランドホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5731%2F5731.html",
              story: "ヨットの帆を模した独創的な外観で世界的に有名な横浜の象徴「ヨコハマ グランド インターコンチネンタル ホテル（by IHG）」。海に突き出た突端に位置するため、客室からは遮るもののない横浜港のオーシャンビュー、または煌びやかなみなとみらいのシティビューが広がります。館内には国際的ホスピタリティが息づき、専用クルーズ船「ル・グラン・ブルー」による秋の運河・港内クルーズも運航。インターコンチネンタルならではの洗練されたクラブラウンジと温かなサービスで、贅沢な大人の秋旅を約束します。",
              roomTip: "クラブインターコンチネンタル ハーバービューまたはシティビュー。高層階から見下ろすベイブリッジのライトアップと行き交う船の光。",
              gourmetTip: "フランス料理「アジュール」の秋の美食ディナーコース。旬の食材をフレンチの伝統とモダンな感性で昇華させた華やかなフルコース。",
              highlights: [
                "ヨットの帆を模した横浜のシンボル・専用クルーズ船ル・グラン・ブルー運航" ,
                "クラブインターコンチネンタルラウンジの優雅な寛ぎ・海と都市のパノラマ" ,
                "パシフィコ横浜直結・国際基準のきめ細やかなホスピタリティ"
              ]
            },
            {
              id: 4,
              name: "ローズホテル横浜",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/18148/18148.jpg",
              rating: 4.30,
              reviews: 5698,
              price: "¥6,500〜",
              access: "地下鉄みなとみらい線「元町・中華街駅」2番出口より徒歩1分／ＪＲ京浜東北根岸線「石川町駅」北口より徒歩１０分",
              special: "中華街に立地し中華料理の老舗「重慶飯店」を併設！全室26平米以上小学生以下添い寝無料※全室禁煙",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18148%2F18148.html",
              story: "横浜中華街のメインストリート・朝陽門（東門）至近に位置し、異国情緒あふれるモダンチャイニーズリゾート「ローズホテル横浜」。山手西洋館エリア（アメリカ山公園・港の見える丘公園）へも徒歩圏内という絶好のアクセスを誇ります。客室はシノワズリ調の洗練されたデザインで、広々とした空間が魅力。1階には昭和34年創業の四川料理の名店「重慶飯店」が併設され、秋限定の上海蟹料理や麻婆豆腐など本格中華を堪能できます。パティスリー「ミリオンベル」のハロウィーンスイーツも大好評です。",
              roomTip: "スーペリアツインまたはデラックスキング。落ち着いたオリエンタルモダンな空間で、中華街の喧騒から離れて静かに寛げる設計。",
              gourmetTip: "「重慶飯店」の秋限定・上海蟹と黒毛和牛の特選コース。本場四川の麻辣スパイスと濃厚な上海蟹味噌の絶妙なハーモニー。",
              highlights: [
                "横浜中華街朝陽門すぐ・山手西洋館へ徒歩圏内＆四川名店「重慶飯店」直結" ,
                "秋の上海蟹特選コース・シノワズリ調のモダン客室とアットホームな滞在" ,
                "元町ショッピングストリートやアメリカ山公園へ直結・抜群のコストパフォーマンス"
              ]
            },
            {
              id: 5,
              name: "三井ガーデンホテル横浜みなとみらいプレミア",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/184792/184792.jpg",
              rating: 4.71,
              reviews: 913,
              price: "¥9,017〜",
              access: "みなとみらい線「みなとみらい」駅 5番出口より徒歩約5分、JR根岸線「桜木町」駅より徒歩約10分",
              special: "2023年5月16日(火)　新規オープン。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184792%2F184792.html",
              story: "みなとみらい21地区の複合タワー「横浜コネクトスクエア」上層階（20〜27階）に位置する「三井ガーデンホテル横浜みなとみらいプレミア」。20階のスカイロビーに降り立つと、宙に浮かぶかのような開放的な大パノラマとウォーターフロントの景色が出迎えます。最大の目玉は、20階に設置されたスカイプール（屋内・屋外ジェットバス）とサウナ・フィットネス。海風を感じながら高層階のプールで寛ぎ、夜には眼下に広がるみなとみらいの夜景を一望できます。全室に最新の快眠ベッドと快適なワークスペースを完備しています。",
              roomTip: "エグゼクティブコーナースイートまたはデラックスツイン。2面採光の大きな窓から横浜港と富士山方面の夕景・夜景をパノラマ展望。",
              gourmetTip: "モダンイタリアン「サロン ド パルフェ」の秋のパスタコース。旬のポルチーニ茸やトリュフを贅沢に使った香りと味わいの饗宴。",
              highlights: [
                "地上20階スカイプール＆屋外ジェットバス完備・みなとみらい最新プレミアタワー" ,
                "20〜27階高層客室からの圧倒的夜景・モダンイタリアンの洗練ディナーコース" ,
                "楽天トラベル高評価4.7超え・洗練されたデザインと上質な快眠ベッド完備"
              ]
            }
  ];

  const faqList = (jsonLdFaq.mainEntity as any[]).map(e => ({ q: e.name, a: e.acceptedAnswer.text }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-600 selection:text-white">
        {/* Breadcrumb Bar */}
        <nav aria-label="パンくずリスト" className="bg-white border-b border-stone-200 text-xs text-stone-500 py-3 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto flex items-center space-x-2">
            <Link href="/" className="hover:text-amber-600 transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:text-amber-600 transition">特集一覧</Link>
            <span>/</span>
            <Link href="/prefectures/kanagawa" className="hover:text-amber-600 transition">神奈川県</Link>
            <span>/</span>
            <span className="text-stone-800 font-medium">横浜山手西洋館ハロウィーン特集</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-b from-stone-900 via-stone-850 to-stone-900 text-white py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs sm:text-sm font-semibold mb-6">
              <Landmark className="w-4 h-4 text-amber-400" />
              10月秋の横浜クラシック＆ベイサイド特別企画
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              【秋の横浜山手西洋館ハロウィーン】<br className="hidden sm:inline" />
              歴史ある異人館7館の本格装飾と山手ハロウィーンウォーク！<br />
              秋バラの丘・限定アフタヌーンティー＆クラシック名宿5選
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              開港の薫りを今に伝える横浜・山手の丘。10月中旬〜下旬にはベーリック・ホールやエリスマン邸など7つの西洋館が、一流アーティストによる華やかで格調高いハロウィーン装飾で彩られます。港の見える丘公園の薫り高い秋バラ、元町ショッピングストリートのカフェ巡り、そして夜は煌めく大観覧車とベイブリッジの夜景を望む特等席。昭和2年開業の名門クラシックホテルやバルコニー付き絶景ホテルで過ごす、優雅で洗練された秋の大人の旅へご案内します。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-stone-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-amber-400" /> 期間: 10月中旬〜10月31日
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-amber-400" /> エリア: 神奈川県横浜市中区山手・みなとみらい
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Flower2 className="w-4 h-4 text-amber-400" /> 見どころ: 西洋館ハロウィーン装飾・秋バラ・バルコニー夜景
              </span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          
          {/* Section 1: 山手西洋館の装飾 */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Historic Western Mansions</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                洋館7館が魅せる本格アート！洗練された「山手西洋館ハロウィーン装飾」
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                緑豊かな山手の丘に点在する洋館群。外交官の家、ブラフ18番館、ベーリック・ホール、エリスマン邸、山手234番館、イギリス館、山手111番館の7館では、毎年10月にそれぞれ異なるテーマで本格的なハロウィーン装飾が施されます。一般的な派手な仮装イベントとは異なり、ヨーロッパの伝統や貴族の秋の晩餐会を思わせるクラシカルで洗練されたテーブルコーディネートやフラワーアレンジメントが鑑賞できるのが最大の特徴です。
              </p>
              <p>
                スパニッシュ様式の優美なアーチが連なるベーリック・ホールの広々としたホールや、近代建築の父レーモンド設計のエリスマン邸のサンルームには、カボチャやドライフラワー、アンティークカトラリーが美しく配置され、窓から差し込む秋の柔らかな光と相まって息をのむ芸術空間が広がります。全館とも入場無料で、贅沢なアート散策を心ゆくまで満喫できます。
              </p>
              <p>
                各館のコーディネーターは、英国風クラシック、フレンチシック、アメリカンカントリーなど、建物のルーツに合わせた繊細な装飾を展開。アンティークな暖炉の周りに灯るキャンドル風ライトや、銀食器に盛り付けられた秋の果実のオブジェなど、写真愛好家にとっても絶好の被写体に満ちています。
              </p>
            </div>
          </section>

          {/* Section 2: 秋バラと山手ハロウィーンウォーク */}
          <section className="mb-16">
            <div className="border-l-4 border-rose-600 pl-4 mb-6">
              <span className="text-xs font-bold text-rose-600 tracking-wider uppercase">Autumn Roses & Halloween Walk</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                深紅に咲き誇る「港の見える丘公園」の秋バラと、賑わうハロウィーンウォーク
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                洋館巡りとあわせて外せないのが、横浜港を見渡す「港の見える丘公園」のイングリッシュローズガーデンです。10月中旬から11月上旬にかけて見頃を迎える「秋バラ」は、夏の暑さを乗り越えて深い花色と濃厚な香りを漂わせます。横浜港の海風を感じながら、深紅やアプリコット色の美しいバラに囲まれて歩く時間は格別の癒やしです。
              </p>
              <p>
                また、10月下旬の日曜日には恒例の「山手ハロウィーンウォーク」が開催され、スタンプラリーカードを手にした仮装の子どもたちやファミリーで山手の丘が活気づきます。元町ショッピングストリートでもハロウィーンイベントが開催され、歴史と活気が見事に調和した横浜の秋を体験できます。
              </p>
            </div>
          </section>

          {/* Section 3: 横浜名物グルメと発祥の洋食文化 */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-500 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Classic Gourmet Heritage</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                日本の洋食文化発祥の地！元祖プリン ア・ラ・モード＆老舗中華の秋の味覚
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                開港の街・横浜は、西洋料理と中国料理が日本で最も早く成熟したグルメの聖地です。山下公園前に佇むホテルニューグランドは、現代の日本人に親しまれている「シーフードドリア」「スパゲッティ ナポリタン」「プリン ア・ラ・モード」の3大洋食を生み出した伝説の地。本館「ザ・カフェ」でいただく元祖プリン ア・ラ・モードは、特製の横長ガラス器に自家製カスタードプリンと色鮮やかなフルーツが盛り付けられ、昭和初期のアメリカ将校夫人たちを喜ばせた当時の華やぎをそのまま味わえます。
              </p>
              <p>
                また、山手の丘の麓に広がる横浜中華街では、秋の訪れとともに「上海蟹フェア」が開幕。濃厚な蟹味噌と甘みのある身を老酒とともに味わう贅沢は、秋の横浜旅行のハイライトです。元町本通りの老舗ベーカリーや紅茶専門店でのティータイムも、散策の途中に優雅な休息をもたらしてくれます。
              </p>
            </div>
          </section>

          {/* Section 3.5: 山手本通りの散策とクラシック建築美 */}
          <section className="mb-16">
            <div className="border-l-4 border-emerald-600 pl-4 mb-6">
              <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase">Yamate Promenade & Heritage</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                異国情緒の薫る「山手本通り」！石畳の小道と名建築カフェ巡り
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                港の見える丘公園からイタリア山庭園へと続く「山手本通り」は、かつて外国人居留地として栄えた面影を今に色濃く残す並木道です。木漏れ日が揺れる歩道沿いには、カトリック山手教会やフェリス女学院、横浜外国人墓地が静かに佇み、歩みを進めるごとに幕末から明治・大正期の歴史ロマンが胸に迫ります。
              </p>
              <p>
                散策の合間に立ち寄りたいのが、昭和初期の英国風洋館をそのまま利用した喫茶店「えの木てい」や、エリスマン邸内のカフェ。秋風が心地よいガーデンテラスで、手作りのスコーンや名物のチェリーサンドをいただきながら、洋館のハロウィーン装飾の余韻に浸る時間は、都会の喧騒を完全に忘れさせてくれる贅沢な大人の休日を演出してくれます。
              </p>
            </div>
          </section>

          {/* Section 4: 厳選名宿5選 */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-8">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Verified Hotels via Rakuten API</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【楽天トラベル実データ連携】みなとみらい・山下公園周辺の厳選名宿5選
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                ※公式リアルタイムAPIから取得した宿泊料金目安・レビュー評価・アクセス情報を掲載しています。
              </p>
            </div>

            <div className="space-y-8">
              {hotels.map((h) => (
                <div key={h.id} className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="p-5 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded bg-amber-50 text-amber-700 border border-amber-200">
                        厳選第{h.id}位
                      </span>
                      <div className="flex items-center gap-3 text-xs sm:text-sm">
                        <span className="flex items-center text-amber-500 font-bold">
                          <Star className="w-4 h-4 fill-amber-400 stroke-amber-400 mr-1" />
                          {h.rating}
                        </span>
                        <span className="text-stone-400">({h.reviews.toLocaleString()}件)</span>
                        <span className="text-amber-600 font-black text-sm sm:text-base">
                          {h.price}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                      {h.name}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{h.access}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                      {h.story}
                    </p>

                    <div className="bg-stone-50 rounded-lg p-3.5 space-y-2 mb-5 text-xs text-stone-600">
                      <div>
                        <strong className="text-stone-800 font-semibold mr-1">客室の魅力:</strong>
                        {h.roomTip}
                      </div>
                      <div>
                        <strong className="text-stone-800 font-semibold mr-1">秋の味覚＆ディナー:</strong>
                        {h.gourmetTip}
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                        宿泊ポイント・魅力
                      </h4>
                      <ul className="grid grid-cols-1 gap-1.5">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-sm transition"
                      >
                        <span>楽天トラベルでプラン・空室を確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: 1泊2日モデルコース */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Classic Itinerary</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【1泊2日モデルコース】山手西洋館巡り・港の秋バラ＆夜景ディナールート
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold">1</span>
                  1日目：元町中華街ランチ・山手西洋館ハロウィーン巡り＆夜景ステイ
                </h3>
                <ol className="relative border-l border-stone-200 ml-3 space-y-4 text-xs sm:text-sm text-stone-600">
                  <li className="pl-4">
                    <strong className="text-stone-800">11:30 元町・中華街駅到着＆中華街「重慶飯店」で四川ランチ</strong><br />
                    本場四川の麻婆豆腐や点心で舌鼓。ローズホテル横浜等に荷物を預けて身軽に散策へ。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">13:00 アメリカ山公園経由で「港の見える丘公園」の秋バラ鑑賞</strong><br />
                    横浜港を一望する展望台と、芳醇な香りに満ちた秋バラのイングリッシュガーデンを散策。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">14:00 山手西洋館（イギリス館・ベーリックホール・エリスマン邸）見学</strong><br />
                    各洋館の本格ハロウィーン装飾を鑑賞。アンティークな調度品とカボチャの調和をカメラに収める。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">16:30 ホテルニューグランドまたは横浜ベイホテル東急にチェックイン</strong><br />
                    バルコニー付き客室やクラシカルな本館客室へ。夕暮れの横浜港や大観覧車のイルミネーションを展望。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">18:30 ホテル特製ディナーまたは限定アフタヌーンティー</strong><br />
                    シーフードドリアの元祖の味や、パティシエ特製のハロウィーンスイーツプレートを満喫。
                  </li>
                </ol>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold">2</span>
                  2日目：山下公園朝散歩・赤レンガ倉庫＆みなとみらいショッピング
                </h3>
                <ol className="relative border-l border-stone-200 ml-3 space-y-4 text-xs sm:text-sm text-stone-600">
                  <li className="pl-4">
                    <strong className="text-stone-800">08:00 山下公園の潮風散歩＆氷川丸の雄姿を眺める朝食</strong><br />
                    澄み切った秋の朝の大気を感じながら海岸通りを散歩。ホテルの優雅なモーニングでリフレッシュ。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">10:30 横浜赤レンガ倉庫散策＆秋のクラフトマーケット</strong><br />
                    歴史ある赤レンガの広場で秋のイベントや雑貨ショップ、カフェを巡る。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">13:30 横浜ハンマーヘッド・元町ショッピングストリートでお買い物＆帰路</strong><br />
                    横浜銘菓「ありあけハーバー」や元町老舗の焼き菓子を手に入れて、充実の秋旅を締めくくる。
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section 6: 注意点 */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-500 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Travel Tips</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                横浜山手散策をスマートに楽しむための注意点
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  坂道とスニーカーの準備
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  元町から山手の丘へは急な坂道（谷戸坂・代官坂等）があります。歩きやすいスニーカーを着用し、アメリカ山公園のエレベーターを賢く活用しましょう。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <Calendar className="w-4 h-4 text-rose-500" />
                  ハロウィーンウォーク当日の混雑
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  10月最終日曜の「ハロウィーンウォーク」当日は洋館内が大変混雑し入場規制がかかることがあります。ゆっくり静かに鑑賞したい場合は平日が狙い目です。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <Sunrise className="w-4 h-4 text-amber-500" />
                  アフタヌーンティーの事前予約
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  ソマーハウスやラ・テラスなどのハロウィーンアフタヌーンティーは非常に人気が高いため、1〜2ヶ月前の事前予約が必須です。
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: FAQセクション */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                横浜山手西洋館ハロウィーン よくある質問（FAQ）
              </h2>
            </div>

            <div className="space-y-4">
              {faqList.map((f, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                  <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                    <span className="text-amber-600 font-black">Q.</span>
                    <span>{f.q}</span>
                  </h3>
                  <div className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5 border-l-2 border-amber-100 mt-2">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: まとめ＆内部リンク */}
          <section className="border-t border-stone-200 pt-10 text-center">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-4">
              異人館の秋の風情と煌めく港夜景に酔いしれる横浜ステイへ
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
              クラシカルな洋館に息づくアート装飾、香り立つ秋バラ、そしてバルコニーから眺める大観覧車のイルミネーション。大人の感性を刺激する洗練された横浜の秋を体験してみませんか。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              <Link href="/features" className="px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition">
                ← 特集一覧に戻る
              </Link>
              <Link href="/prefectures/kanagawa" className="px-4 py-2 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-700 font-semibold transition">
                神奈川県の旅行ガイド・名宿一覧
              </Link>
              <Link href="/winter-tokyo-takao-yakuoin-shrine-hatsumode-fuji-tororo-soba-stay" className="px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition">
                高尾山薬王院初詣＆とろろそば特集
              </Link>
              <Link href="/" className="px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition">
                クラドトラベル トップページ
              </Link>
            </div>
          </section>

        </main>
      </article>
    </>
  );
}
