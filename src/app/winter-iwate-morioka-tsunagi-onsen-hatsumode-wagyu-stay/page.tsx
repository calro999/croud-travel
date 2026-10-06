import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Snowflake, Flame, Mountain, Building, ThermometerSun, Waves, Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月盛岡】冬の盛岡八幡宮新春開運初詣！名宿5選',
  description: '冬の盛岡は、冠雪した霊峰・岩手山（南部片富士）が澄み渡る青空に凛とそびえ立ち。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '盛岡 ホテル, 繋温泉 旅館, つなぎ温泉 宿泊, 盛岡八幡宮 初詣, 岩手山 絶景, 盛岡三大麺, ホテル紫苑, 愛真館, ドーミーイン盛岡, 11月 12月 1月 盛岡 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-iwate-morioka-tsunagi-onsen-hatsumode-wagyu-stay/"
  },
  openGraph: {
    title: '【11・12・1月盛岡】冬の盛岡八幡宮新春開運初詣！名宿5選',
    description: '冬の盛岡は、冠雪した霊峰・岩手山（南部片富士）が澄み渡る青空に凛とそびえ立ち。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-iwate-morioka-tsunagi-onsen-hatsumode-wagyu-stay',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80' }]
  }
};

export default function IwateMoriokaPage() {
  const hotels = [
            {
              id: 1,
              name: "盛岡つなぎ温泉　ホテル紫苑",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10629/10629.jpg",
              rating: 4.43,
              reviews: 1988,
              price: "¥8,800〜",
              access: "■電車／JR盛岡駅西口より定刻運行シャトルバス【要予約有料】■お車／東北道盛岡ICより国道46号を秋田方面へ約15分",
              special: "「全室がレイクビュー」 湖畔に佇み上質な時間が流れる和のリゾートへ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10629%2F10629.html",
              story: "御所湖の畔に雄大に佇む「盛岡つなぎ温泉 ホテル紫苑」は、全客室および大浴場から白銀の御所湖と雪を被った名峰・岩手山を真正面に望む屈指の絶景自慢の老舗大型旅館です。冬の澄み渡る空気の中、源泉掛け流しの南部曲り家の湯や、御所湖を見下ろす広々とした展望露天風呂に浸かると、ほんのり香る硫黄泉の湯けむりが旅の疲れを優しく包み込みます。夕食には岩手の誇る極上肉「雫石牛」の陶板焼きや前沢牛、三陸海岸から直送される寒ヒラメや寒アワビの舟盛りが並ぶ贅沢な和食会席。盛岡八幡宮への初詣ドライブの拠点としても、ゆったりとした冬の温泉旅を約束してくれます。",
              roomTip: "御所湖・岩手山眺望のレイクビュースーペリア和室。窓一面に広がる白銀の湖面と夕暮れに茜色へ染まる岩手山の絶景を畳の上から独占できる特等席。",
              gourmetTip: "「岩手銘柄雫石牛のすき焼き鍋会席」。きめ細やかな霜降りの雫石牛を特製割り下で煮込み、地元の新鮮な南部鶏卵に絡めて味わう至福の冬の献立。",
              highlights: [
                "御所湖と雪の岩手山を一望するパノラマ絶景・源泉掛け流し南部曲り家の湯・展望露天風呂",
                "地元雫石牛のすき焼き鍋や三陸直送の寒魚会席・贅沢な冬の恵みを味わう会席膳",
                "盛岡八幡宮や小岩井農場へのアクセス至便・静寂に包まれた湖畔リゾートステイ"
              ]
            },
            {
              id: 2,
              name: "盛岡つなぎ温泉　愛真館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9552/9552.jpg",
              rating: 4.25,
              reviews: 2118,
              price: "¥7,150〜",
              access: "■電車／JR盛岡駅西口より定刻運行シャトル【要予約】約25分　■お車／東北道盛岡ICより国道46号を秋田方面へ約15分",
              special: "ドリンクインクルーシブ/17の湯舟ではしご風呂/老舗人気店「焼肉・冷麺　髭」プロデュース焼肉",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9552%2F9552.html",
              story: "盛岡つなぎ温泉の温泉街中心に位置する「愛真館」は、名物「大浴場・露天風呂温泉庭園」をはじめとする多彩な湯めぐりが評判の温泉宿です。敷地内には檜風呂や岩風呂、打たせ湯など18種類もの湯船が点在し、冬の雪がしんしんと舞い落ちる中で楽しむ雪見露天風呂は格別の情緒を誇ります。繋温泉の開湯伝説に由来する源泉は肌に滑らかで、入浴後も体がぽかぽかと温まり続けます。お料理は岩手の郷土の温もりを伝える「南部郷土会席」で、冬が旬の三陸海鮮鍋や岩手県産豚のせいろ蒸しなど、滋味豊かな地元の美味を心ゆくまで満喫できます。",
              roomTip: "純和風本館10畳和室。畳の清々しい香りと雪見障子から覗く白銀の庭園が、古き良き日本の温泉旅情をじっくりと感じさせてくれます。",
              gourmetTip: "「三陸寒鱈と白子の寄せ鍋会席」。冬の日本海・三陸の荒波で育った寒鱈の身と濃厚な白子を、地酒のアテとともに温かい出汁でいただく冬限定の鍋仕立て。",
              highlights: [
                "敷地内に点在する18種の湯船めぐり・風情豊かな雪見露天風呂・肌をしっとり包む美肌源泉",
                "三陸寒鱈の寄せ鍋や岩手県産豚のせいろ蒸し・心温まる南部郷土会席料理",
                "家族やグループで楽しめる充実の温泉施設・冬の温泉情緒を満喫するぬくもり旅"
              ]
            },
            {
              id: 3,
              name: "ホテルメトロポリタン盛岡ニューウイング",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/396/396.jpg",
              rating: 4.51,
              reviews: 1821,
              price: "¥4,000〜",
              access: "盛岡駅東口を出て左へ。最初の信号を渡り右折し直進、旭橋手前（徒歩3分）。高速道盛岡ICより車で約10分。",
              special: "ヨーロピアンクラシカルと盛岡の情緒が溶け込んだ落ち着いたインテリアがハイグレードな室内空間を演出",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F396%2F396.html",
              story: "JR盛岡駅西口からペデストリアンデッキで直結する「ホテルメトロポリタン盛岡 ニューウイング」は、北東北の文化と洗練されたホスピタリティが融合したハイグレードシティホテルです。ヨーロピアンクラシックを基調とした館内は重厚感に満ち、盛岡八幡宮への初詣や盛岡城跡公園・レトロな街並み散策の拠点として最高のアクセスを誇ります。館内レストランでは、地元岩手の豊かな大自然が育んだ前沢牛や短角牛、三陸の海の幸を匠の技で仕立てた本格フランス料理や日本料理を提供。冬の観光やショッピングの後に、上質で落ち着いた大人のステイを叶えてくれます。",
              roomTip: "デラックスツインルーム。30平米を超えるゆったりとした間取りにシモンズ社製ベッドを配置し、冬の冷え切った体を快適な暖かさで迎える極上の安らぎ空間。",
              gourmetTip: "「日本料理対滝閣・前沢牛フィレ肉と三陸冬魚の会席ディナー」。極上肉の繊細な旨味と、旬の三陸産寒ヒラメのお造りが饗宴するホテル自慢の贅沢ディナー。",
              highlights: [
                "JR盛岡駅直結の最高級シティホテル・洗練されたヨーロピアン空間・前沢牛本格ディナー",
                "日本料理やフランス料理の名店を館内に併設・地元食材を活かした記念日ディナー",
                "出張から記念日旅行まで対応・北東北随一の格式と上質なサービス"
              ]
            },
            {
              id: 4,
              name: "天然温泉　さんさの湯　ドーミーイン盛岡（ドーミーイン・御宿野乃　ホテルズグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/172659/172659.jpg",
              rating: 4.53,
              reviews: 2098,
              price: "¥5,593〜",
              access: "盛岡駅南口より徒歩にて約１２分またはお車にて約５分",
              special: "希少源泉モルデンの湯を用いた大浴場！朝食は海鮮瓶詰丼やひっつみ汁をご堪能いただけます♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172659%2F172659.html",
              story: "盛岡の繁華街・大通や中央通にほど近い好立地に建つ「天然温泉 さんさの湯 ドーミーイン盛岡」。最上階の10階には自家源泉を引いた天然温泉大浴場「さんさの湯」を備え、冬の冷えた夜に外気浴と高温サウナ、内湯の天然温泉で極上のととのい体験を満喫できます。朝食バイキングでは、盛岡名物の盛岡冷麺をはじめ、岩手県産の山の幸・海の幸を取り入れた小鉢横丁が大人気。夜には宿泊者限定の「夜鳴きそば」が無料で提供され、夜の盛岡観光や居酒屋巡りの締めくくりに胃袋と心をじんわり温めてくれます。",
              roomTip: "クイーンルーム。広々とした160cm幅のサータ社製ベッドと機能的なワーキングデスクを備え、一人旅やカップルの冬の街歩き拠点に最適。",
              gourmetTip: "「ドーミーイン名物ご当地朝食バイキング」。冬でもつるりと美味しい本格盛岡冷麺に、熱々の郷土汁やひっつみ汁、三陸の海鮮小鉢を好きなだけ。",
              highlights: [
                "最上階10階の天然温泉大浴場＆サウナ完備・夜鳴きそば無料サービス・本格盛岡冷麺朝食",
                "盛岡繁華街徒歩圏内で夜の街歩きや三大麺めぐり・居酒屋探訪に最適な立地",
                "天然温泉と高温サウナで極上のリフレッシュ・一人旅からカップルまで快適"
              ]
            },
            {
              id: 5,
              name: "ダイワロイネットホテル盛岡駅前",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/183248/183248.jpg",
              rating: 4.52,
              reviews: 1894,
              price: "¥4,325〜",
              access: "JR盛岡駅より徒歩約4分。東口より地下道A1出口を出て開運橋方面に約100ｍ。",
              special: "JR盛岡駅より徒歩約4分の好立地。全室21㎡以上。一部を除きバス・トイレ別。充実のアメニティバー設置",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183248%2F183248.html",
              story: "JR盛岡駅東口から徒歩わずか3分、盛岡八幡宮方面への路線バス乗り場も目の前という抜群の利便性を誇る「ダイワロイネットホテル盛岡駅前」。全室に独立型バスルーム（洗い場付き）を完備しており、冬の観光から帰館した後に浴槽へたっぷりとお湯を張ってゆっくりと温まれる設計が旅人に高く評価されています。ホテル1階にはコンビニエンスストアが直結し、冬の雪の日でも外に出ることなく快適に滞在可能。朝食会場では岩手の郷土料理を取り入れた和洋ビュッフェが用意され、出立前の活力をしっかりチャージできます。",
              roomTip: "モデレートダブルルーム。天井高と大きなデスク、加湿空気清浄機を完備した快適空間。洗い場付きバスルームで冬の旅の疲労をしっかりリセット。",
              gourmetTip: "「岩手の大地を味わう朝食ビュッフェ」。地元農家直送の新鮮野菜サラダや炊きたての岩手県産米「銀河のしずく」、熱々の具だくさん郷土汁で迎える清々しい朝。",
              highlights: [
                "JR盛岡駅徒歩3分・全室洗い場付き独立バスルーム完備・岩手郷土料理の和洋朝食ビュッフェ",
                "盛岡八幡宮初詣や市内観光バス停が目の前・冬でも雪道移動が少なく安心の拠点",
                "加湿空気清浄機完備・シモンズ社製ベッドで冬の夜も温かく快眠をサポート"
              ]
            }
  ];

  const faqData = [
  {
    "q": "冬（11月〜1月）の盛岡観光で岩手山が最も美しく見える時間帯や絶景スポットはどこですか？",
    "a": "盛岡のシンボルである岩手山（標高2,038m）は、冬期には純白の雪を抱き「南部片富士」と呼ばれる雄大な姿を見せます。最も美しく望めるのは、大気の揺らぎが少なく澄み渡る早朝から午前10時頃です。絶景スポットとしては、御所湖畔（繋温泉周辺）からの湖越しビュー、開運橋（別名二度泣き橋）から望む北上川越しの岩手山、盛岡城跡公園（岩手公園）の本丸跡、小岩井農場の一本桜越しに見上げる雪嶺が挙げられます。夕暮れ時に茜色に染まるモルゲンロートの岩手山も息を呑む美しさです。"
  },
  {
    "q": "盛岡八幡宮の新春初詣（1月）の混雑状況や見どころ、伝統行事「裸参り」について教えてください。",
    "a": "盛岡八幡宮は延宝8年（1680年）に創建された岩手県総鎮守で、新春三が日には約20万人以上の参拝客が訪れます。元旦の未明から午前中は大石段から本殿にかけて長い行列ができるため、混雑を避けるなら早朝8時前か夕方16時以降の参拝がおすすめです。本殿のほか、敷地内には十二支神社や笠森稲荷神社など多くの境内社が鎮座し、開運厄除や商売繁盛、学問成就を一度に祈願できます。また毎年1月15日には盛岡無形民俗文化財の「盛岡八幡宮 裸参り」が斎行され、厳寒の雪道をさらし姿の男衆が練り歩く勇壮な姿は冬の盛岡の代表的風物詩です。"
  },
  {
    "q": "繋温泉（つなぎ温泉）の泉質や効能、冬の湯浴みの特徴はどのようなものですか？",
    "a": "繋温泉は平安時代末期、前九年の役で源義家が愛馬を石に繋いで休ませたという伝説に由来する名湯です。泉質はpH9前後のアルカリ性単純硫黄温泉で、ほのかな硫黄の香りとメタケイ酸を豊富に含むトロリとした肌触りが特徴。古い角質を落として肌をなめらかに整える「美肌の湯」として親しまれています。冬は外気温が氷点下になるため、雪見露天風呂では頭上を冷涼な冬空が冷やし、肩まで浸かる湯は芯まで温まる最高のバランスを体験できます。"
  },
  {
    "q": "冬の盛岡で味わうべき「盛岡三大麺」や名物ご当地グルメの楽しみ方は？",
    "a": "盛岡三大麺とは「盛岡冷麺」「盛岡じゃじゃ麺」「わんこそば」を指します。冬の冷麺は、牛骨をじっくり煮出したコク深い冷製スープと強いコシの麺に、発酵が進んだ酸味のある冬の白菜キムチが抜群の相性を誇ります。寒い日には温かいスープでいただく「温麺（おんめん）」も人気です。じゃじゃ麺は茹でたての平打ちうどんに熱々の特製肉味噌を絡めて食べ、最後に生卵を割り入れて茹で汁と味噌を注ぐ「チータンタン（卵スープ）」で体の芯から温まります。さらに雫石牛やすき焼き、南部せんべいを使った郷土鍋「ひっつみ汁」も冬の必食グルメです。"
  },
  {
    "q": "冬の盛岡旅行での積雪状況・靴選び・寒さ対策のポイントは？",
    "a": "盛岡の冬（11月下旬〜1月）は内陸性気候のため冷え込みが厳しく、12月中旬以降は朝晩の気温が氷点下5度以下に達することが珍しくありません。市内でも路面が圧雪またはアイスバーン状に凍結するため、靴はスニーカーではなく防滑溝の深いスノーブーツや防水仕様の防寒靴が必須です。服装はヒートテックなどの吸湿発熱インナーにウールセーター、防風性のあるロング丈ダウンコート、手袋、マフラー、耳当て付きのニット帽を準備してください。建物内や列車内は暖房がしっかり効いているため、着脱しやすい重ね着が快適です。"
  }
];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "【11・12・1月盛岡】冬の盛岡八幡宮新春開運初詣＆岩手山白銀パノラマ！繋温泉の美肌いで湯と盛岡三大麺・雫石牛に寛ぐ名宿5選",
        "description": "冬の盛岡は、冠雪した霊峰・岩手山（南部片富士）が澄み渡る青空に凛とそびえ立ち、白鳥が飛来する中津川や風情あるレトロな赤レンガ建築が雪景色に包まれる特別な季節。11月下旬の初雪から1月の盛岡八幡宮新春初詣や伝統の裸参りまで、冬の静寂と歴史の温もりが満ちています。湯量豊富な繋温泉（つなぎ温泉）の源泉掛け流し美肌湯に浸かり、名物の盛岡三大麺（熱々じゃじゃ麺・わんこそば・盛岡冷麺）や極上の雫石牛・前沢牛のすき焼き鍋を堪能する冬の温泉旅。楽天APIから最新取得した信頼の名宿5選を徹底特集します。",
        "url": 'https://croud-travel.pages.dev/winter-iwate-morioka-tsunagi-onsen-hatsumode-wagyu-stay',
        "publisher": {
          "@type": "Organization",
          "name": "週末ごほうび旅・厳選の宿ガイド",
          "url": "https://croud-travel.pages.dev"
        }
      },
      {
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
            "name": "冬の特集一覧",
            "item": "https://croud-travel.pages.dev/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "冬の盛岡・盛岡八幡宮初詣＆繋温泉特集",
            "item": 'https://croud-travel.pages.dev/winter-iwate-morioka-tsunagi-onsen-hatsumode-wagyu-stay'
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月盛岡】冬の盛岡八幡宮新春開運初詣＆岩手山白銀パノラマ！繋温泉の美肌いで湯と盛岡三大麺・雫石牛に寛ぐ名宿5選",
    "description": "冬の盛岡は、冠雪した霊峰・岩手山（南部片富士）が澄み渡る青空に凛とそびえ立ち、白鳥が飛来する中津川や風情あるレトロな赤レンガ建築が雪景色に包まれる特別な季節。11月下旬の初雪から1月の盛岡八幡宮新春初詣や伝統の裸参りまで、冬の静寂と歴史の温もりが満ちています。湯量豊富な繋温泉（つなぎ温泉）の源泉掛け流し美肌湯に浸かり、名物の盛岡三大麺（熱々じゃじゃ麺・わんこそば・盛岡冷麺）や極上の雫石牛・前沢牛のすき焼き鍋を堪能する冬の温泉旅。楽天APIから最新取得した信頼の名宿5選を徹底特集します。",
    "url": "https://croud-travel.pages.dev/winter-iwate-morioka-tsunagi-onsen-hatsumode-wagyu-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【11・12・1月盛岡】冬の盛岡八幡宮新春開運初詣＆岩手山白銀パノラマ！繋温泉の美肌いで湯と盛岡三大麺・雫石牛に寛ぐ名宿5選", "item": "https://croud-travel.pages.dev/winter-iwate-morioka-tsunagi-onsen-hatsumode-wagyu-stay/" }
    ]
  };

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs sm:text-sm font-medium mb-6">
            <Snowflake className="w-4 h-4 text-cyan-300 animate-spin" />
            11月・12月・1月冬の特選旅｜岩手・盛岡＆繋温泉
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-6">
            冬の盛岡八幡宮新春開運初詣＆岩手山白銀パノラマ！<br className="hidden sm:inline" />
            繋温泉の美肌いで湯と盛岡三大麺・雫石牛に寛ぐ名宿5選
          </h1>
          <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-4xl mb-8">
            東北新幹線で東京から約2時間10分。冬の盛岡は、澄み切った北国の青空の下、純白の雪を戴く雄大な霊峰・岩手山（南部片富士）が凛然と輝く美しい季節です。盛岡八幡宮での新春初詣や厳寒の伝統行事「裸参り」、白鳥が遊ぶ中津川沿いの赤レンガレトロ建築散策、そして湯量豊かな繋温泉の雪見露天風呂。盛岡三大麺（熱々じゃじゃ麺・わんこそば・盛岡冷麺）や雫石牛を味わい尽くす冬籠もりの旅へご案内します。
          </p>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-indigo-400" /> 岩手県盛岡市・雫石町（繋温泉・盛岡駅前）</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-indigo-400" /> 探訪期：11月下旬〜1月下旬</span>
            <span className="flex items-center gap-1.5"><Mountain className="w-4 h-4 text-indigo-400" /> 岩手山白銀眺望＆盛岡八幡宮新春初詣</span>
          </div>
        </div>
      </header>

      {/* Navigation Breadcrumbs */}
      <nav aria-label="パンくずリスト" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-500">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-indigo-600 transition">ホーム</Link></li>
          <li><span>/</span></li>
          <li><Link href="/features" className="hover:text-indigo-600 transition">特集一覧</Link></li>
          <li><span>/</span></li>
          <li className="text-slate-800 font-medium truncate">冬の盛岡・盛岡八幡宮初詣＆繋温泉特集</li>
        </ol>
      </nav>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-indigo-600 pl-4">
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Tradition & Panoramic Snowscape</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              凛冽の雪空に聳える「南部片富士」と、杜の都・盛岡が紡ぐ四百年の温もり
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              世界が称賛した歩いて巡れる城下町と、源義家伝説が息づく名湯のぬくもり
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              本州の北東部に位置し、北上川・中津川・雫石川の三川が合流する豊かな沃野に拓かれた岩手県盛岡市。慶長年間に南部信直が盛岡城を築城して以来、南部藩20万石の城下町として繁栄を極めました。米ニューヨーク・タイムズ紙が発表した「2023年に行くべき52カ所」において、ロンドンに次ぐ世界第2位に選出されたことで国際的にも脚光を浴びたこの街は、東京から新幹線でわずか2時間強という至近にありながら、大正ロマンの薫り漂う赤レンガの洋館、江戸の面影を残す紺屋町や鉈屋町の古い格子戸の商家群、そして市民の暮らしに溶け込む湧水文化が徒歩圏内に美しく調和しています。
            </p>
            <p>
              新緑の美しさや秋の紅葉も格別ですが、盛岡の街が最も高潔な気品に満ちるのは、11月下旬の初雪から1月にかけての冬の季節です。大気の湿度が下がり抜けるような寒晴れの青空が広がると、市街地の北西に標高2,038mの霊峰「岩手山」が圧倒的な白銀の衣をまとって姿を現します。富士山に酷似した端正な稜線を持ちながら、西側の片斜面が削ぎ落とされたような独特の山容から「南部片富士」と称されるこの名峰は、開運橋（別名二度泣き橋）から北上川の白波越しに仰ぎ見ても、盛岡城跡公園の天守台から見晴らしても、見る者の背筋を正すような神々しさを湛えています。
            </p>
            <p>
              冬の盛岡の精神的支柱となるのが、延宝8年（1680年）に第4代南部藩主・南部重信公によって建立された岩手県総鎮守「盛岡八幡宮」です。鮮やかな朱塗りの大鳥居をくぐり、雪を踏みしめながら大石段を登った先に鎮座する荘厳な本殿。新春三が日には県内外から20万人を超える参拝者が詰めかけ、新年の開運招福、厄除け、商売繁盛を熱心に祈願します。境内には十二支神社や笠森稲荷神社、神田神社など数多くの境内社が祀られ、あらゆる願いを受け止めてくれます。さらに厳冬の1月15日には、盛岡市指定無形民俗文化財「盛岡八幡宮 裸参り」が執り行われます。厳寒の雪道を白晒しに注連縄を巻いた男衆が口に含み紙をくわえ、鈴を鳴らしながら一糸乱れぬ足取りで参拝する姿は、北国の冬の祈りの深さを肌で実感させる感動の光景です。
            </p>
            <p>
              寒風に冷えた身体を優しく癒やしてくれるのが、盛岡市街地から西へ車で約25分、御所湖の畔に湧く「繋温泉（つなぎ温泉）」です。平安末期の前九年の役（1062年）の折、源義家がこの地に陣を敷いた際、愛馬の疲れを癒やすため温泉の湧き出る巨石（湯繋石）に馬を繋いだことが開湯の由来と伝わります。泉質はpH9を超える高アルカリ性の単純硫黄泉。トロリとした湯ざわりで古い角質を優しく落とし、湯上がりの肌をしっとりと潤す「美肌の湯」として名高く、冬の雪見露天風呂では湯面に舞い散る風花を眺めながら極上の長湯を楽しめます。
            </p>
            <p>
              そして冬の盛岡旅のもう一つの至福が、滋味あふれる郷土グルメです。全国にファンを持つ「盛岡三大麺」のうち、冬にこそ味わいたいのが熱々の「盛岡じゃじゃ麺」。茹でたての平打ち麺に秘伝の肉味噌と生姜・ニンニクを豪快に混ぜ合わせ、食べ終えた器に生卵と茹で汁を注ぐ「チータンタン（卵スープ）」は、胃の腑から全身をポカポカと温めてくれます。冬の冷たい空気の中でツルツルといただく「盛岡冷麺」のキレのある牛骨スープと冬白菜の辛味キムチ、そして「わんこそば」の温かい出汁。さらに雫石町の大自然で育てられた黒毛和牛「雫石牛」やすき焼き、三陸から直送される寒ヒラメや寒鱈の寄せ鍋とともに、南部杜氏が醸す銘酒「あさ開」や「七福神」を傾ける夕べは、これ以上ない冬の贅沢です。
            </p>
          </div>

          {/* 3 Pillar Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm mb-1">
                <Mountain className="w-4 h-4 text-indigo-600" />
                <span>岩手山白銀眺望</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                澄み渡る冬空に輝く「南部片富士」。御所湖や開運橋、中津川の白鳥越しに仰ぐ冠雪パノラマの気高き美しさ。
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm mb-1">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>盛岡八幡宮 初詣＆裸参り</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                岩手県総鎮守での新春開運祈願。朱塗りの本殿と十二支神社参拝、1月15日に斎行される厳冬の勇壮な伝統裸参り。
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm mb-1">
                <Utensils className="w-4 h-4 text-indigo-600" />
                <span>繋温泉美肌湯＆三大麺</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                源義家ゆかりのpH9超硫黄美肌湯で雪見露天風呂。熱々じゃじゃ麺のチータンタン、盛岡冷麺、極上雫石牛すき焼き。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <div>
              <span className="text-indigo-600 font-bold text-xs uppercase tracking-wider block">SELECTED ACCOMMODATIONS</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                冬の盛岡＆繋温泉を満喫する厳選名宿5選
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              ※楽天トラベルAPIリアルタイム取得データ（2026年最新）
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((hotel) => (
              <article key={hotel.id} className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div className="md:col-span-5 relative min-h-[260px] bg-slate-100">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 text-white text-xs px-2.5 py-1 rounded-full font-bold">
                      厳選宿 #{hotel.id}
                    </div>
                  </div>

                  <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5 text-amber-500">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-extrabold text-sm text-slate-900">{hotel.rating}</span>
                          <span className="text-xs text-slate-500">({hotel.reviews.toLocaleString()}件)</span>
                        </div>
                        <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
                          冬の特選プラン
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-snug">
                        {hotel.name}
                      </h3>

                      <p className="text-xs text-slate-500 flex items-center gap-1.5 mb-4">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{hotel.access}</span>
                      </p>

                      <p className="text-sm text-slate-700 leading-relaxed mb-5">
                        {hotel.story}
                      </p>

                      <div className="bg-slate-50 rounded-2xl p-4 mb-5 text-xs space-y-2 border border-slate-100">
                        <div className="flex items-start gap-2">
                          <Building className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-900">客室選びのヒント：</span>
                            <span className="text-slate-600 ml-1">{hotel.roomTip}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Utensils className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-900">冬の味覚ハイライト：</span>
                            <span className="text-slate-600 ml-1">{hotel.gourmetTip}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-1.5 mb-6 text-xs text-slate-600">
                        {hotel.highlights.map((hl: string, hIdx: number) => (
                          <li key={hIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-slate-400 block font-medium">宿泊参考料金（2名1室時1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-black text-rose-600">{hotel.price}</span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-xs transition-all"
                      >
                        <span>空室・プランを確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 1泊2日冬旅モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-indigo-600 pl-4">
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Winter Schedule</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の盛岡＆繋温泉を満喫する1泊2日王道モデルコース
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              白銀の岩手山を仰ぎ、歴史の小路を歩き、名湯と三大麺で温まる冬の完璧プラン
            </p>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-indigo-100">
            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 11:30】盛岡駅到着＆熱々じゃじゃ麺の昼食</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                東北新幹線で盛岡駅に到着。まずは駅ビル「フェザン」やお城通り近くの名店「白龍（パイロン）」で盛岡じゃじゃ麺を注文。モチモチの平打ちうどんに特製肉味噌を豪快に混ぜ合わせて味わい、締めは卵を溶いた熱々スープ「チータンタン」で心身をポカポカに温めます。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 13:30】中津川散策・岩手銀行赤レンガ館・南部鉄器工房見学</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                白鳥が飛来する中津川に架かる上の橋を渡り、国の重要文化財「岩手銀行赤レンガ館」へ。白雪と辰野金吾設計の赤レンガの美しいコントラストを眺めた後は、創業400年の老舗「鈴木盛久工房」などで伝統の南部鉄器を鑑賞。宮沢賢治ゆかりの注文の多い料理店を出版した「光原社」の可否館で珈琲とくるみクッキーを楽しむのも格別の風雅です。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 16:00】繋温泉チェックイン・雪見露天風呂と雫石牛会席</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                盛岡駅から路線バスまたは宿の送迎バスで御所湖畔の繋温泉へ。白銀の湖面と夕日に染まる岩手山を眺めながら、源泉掛け流しの硫黄美肌湯で旅の疲れをほぐします。夕食は極上の雫石牛や三陸の冬魚を取り入れた温かい会席料理に舌鼓。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【2日目 09:30】岩手県総鎮守「盛岡八幡宮」新春開運初詣</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                朝風呂と朝食を堪能してチェックアウト後、市内中心部の「盛岡八幡宮」へ参拝。朱塗りの大鳥居をくぐり、大石段の先にある本殿で一年の開運招福と無病息災を祈願。名物の「めで鯛みくじ」を竿で釣り上げて運勢を占います。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【2日目 12:30】名店「ぴょんぴょん舎」で盛岡冷麺ランチ＆お土産購入</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                盛岡駅前に戻り、「ぴょんぴょん舎」で本場の盛岡冷麺と焼肉のランチ。牛骨ダシのコク深いスープと辛味キムチが織りなす絶妙なハーモニーを堪能。駅ビルでお土産（福田パン、かもめの玉子、地酒あさ開）を購入して新幹線で帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* 冬の盛岡観光・実用ガイドセクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-indigo-600 pl-4">
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Practical Winter Guide</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の盛岡旅を快適に楽しむための気候・服装・移動のアドバイス
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-rose-500" />
                気候と防寒対策
              </h4>
              <p>
                盛岡の11月下旬〜1月は氷点下を記録する日が多く、朝晩はマイナス5度以下まで冷え込みます。吸湿発熱インナー、厚手のセーター、防風性のあるロングダウンコートが必須。手袋、耳当て、マフラー、貼るカイロを用意し、建物内との温度差に対応できるよう着脱しやすい服装を心がけてください。
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <Snowflake className="w-4 h-4 text-cyan-500" />
                靴選びと路面凍結
              </h4>
              <p>
                市街地の歩道や横断歩道は圧雪やブラックアイスバーン状に凍結します。靴底に深い溝がある滑り止めの効いたスノーブーツや防水防寒シューズを必ず着用してください。歩幅を小さくし、足裏全体で地面を踏みしめる「ペンギン歩き」が転倒防止の基本です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-indigo-600 pl-4">
            <span className="text-indigo-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">FAQ & Local Insights</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の盛岡観光・交通・防寒対策 よくある質問
            </h2>
          </div>

          <div className="space-y-6 divide-y divide-slate-100">
            {faqData.map((faq, index) => (
              <div key={index} className="pt-5 first:pt-0">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <span className="text-indigo-600 font-black">Q{index + 1}.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 内部リンク関連特集 */}
        <section className="bg-slate-100 rounded-3xl p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            合わせて読みたい冬の厳選温泉・初詣特集
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <Link 
              href="/winter-kanagawa-hakone-yumoto-ashinoko-shrine-fuji-stay"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-indigo-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【箱根】冬の箱根湯本＆芦ノ湖・箱根神社初詣と富士山名宿</span>
              <span className="text-xs text-slate-500">澄み渡る白雪富士と関東総鎮守の開運祈願、相模湾の寒魚会席</span>
            </Link>
            <Link 
              href="/winter-ibaraki-tsukubasan-shrine-hatsumode-yakei-onsen-hitachigyu-stay"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-indigo-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【筑波山】筑波山神社新春初詣＆スターダスト夜景名宿</span>
              <span className="text-xs text-slate-500">日本夜景遺産の絶景パノラマと筑波山美肌温泉、極上常陸牛</span>
            </Link>
            <Link 
              href="/winter-osaka-city-sumiyoshi-taisha-hatsumode-illumination-fugu-stay"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-indigo-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【大阪】住吉大社新春初詣＆御堂筋イルミネーション名宿</span>
              <span className="text-xs text-slate-500">光の回廊と全国総本社開運参拝、冬の本場とらふぐてっちり鍋</span>
            </Link>
            <Link 
              href="/features"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-indigo-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【全国】冬の厳選温泉＆旬グルメ特集一覧へ</span>
              <span className="text-xs text-slate-500">11月・12月・1月に訪れたい日本各地の名宿・絶景旅ガイド</span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-iwate-morioka-tsunagi-onsen-hatsumode-wagyu-stay" />
</div>
        </section>
      </main>
    </article>
  );
}
