import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Snowflake, Flame, Mountain, Building, ThermometerSun, Waves, Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月金沢】冬の兼六園雪吊り＆尾山神社新春初詣！近江町市場の香箱ガニ・寒ブリ・加賀おでんに寛ぐ厳選宿5選",
  description: "冬の金沢は、名勝・兼六園の唐崎松に施される雪吊りが冬空に優美な幾何学模様を描き、11月6日のカニ漁解禁とともに近江町市場が真っ赤な香箱ガニと寒ブリで沸き立つ一年で最も華やぐ季節。12月の白銀ライトアップや1月の尾山神社ステンドグラス神門の新春開運初詣、熱々の金沢おでんやのどぐろ、治部煮に舌鼓を打つ極上の古都冬旅。楽天APIから最新取得した金沢駅周辺・兼六園近接の信頼の名宿5選を徹底特集します。",
  keywords: '金沢 ホテル, 金沢駅 宿, 兼六園 雪吊り, 尾山神社 初詣, 近江町市場 香箱ガニ, 金沢おでん, ホテル日航金沢, 御宿野乃金沢, 11月 12月 1月 金沢 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-ishikawa-kanazawa-city-kenrokuen-yukizuri-koubako-crab-stay/"
  },
  openGraph: {
    title: "【11・12・1月金沢】冬の兼六園雪吊り＆尾山神社新春初詣！近江町市場の香箱ガニ・寒ブリ・加賀おでんに寛ぐ厳選宿5選",
    description: "冬の金沢は、名勝・兼六園の唐崎松に施される雪吊りが冬空に優美な幾何学模様を描き、11月6日のカニ漁解禁とともに近江町市場が真っ赤な香箱ガニと寒ブリで沸き立つ一年で最も華やぐ季節。12月の白銀ライトアップや1月の尾山神社ステンドグラス神門の新春開運初詣、熱々の金沢おでんやのどぐろ、治部煮に舌鼓を打つ極上の古都冬旅。楽天APIから最新取得した金沢駅周辺・兼六園近接の信頼の名宿5選を徹底特集します。",
    url: 'https://croud-travel.pages.dev/winter-ishikawa-kanazawa-city-kenrokuen-yukizuri-koubako-crab-stay',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80' }]
  }
};

export default function KanazawaCityWinterPage() {
  const hotels = [
            {
              id: 1,
              name: "ホテル日航金沢",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2050/2050.jpg",
              rating: 4.70,
              reviews: 2839,
              price: "¥12,100〜",
              access: "JR金沢駅兼六園口（東口）より地下道で直結、徒歩3分程／小松空港より車で約40分",
              special: "ＪＲ金沢駅兼六園口（東口）より徒歩３分程の高層ホテル。客室は全て１７階以上／全室Wi-Fi接続無料",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2050%2F2050.html",
              story: "JR金沢駅兼六園口（東口）から地下道で直結し、雪や雨の日でも濡れずにスマートにチェックインできる地上30階建ての高層ランドマーク「ホテル日航金沢」。全客室が17階以上に配置されており、冬の澄んだ空気のなかで白山連峰の雄大な雪嶺や日本海、金沢市街地の白銀パノラマを一望できます。館内は金沢の伝統工芸である加賀友禅や金箔の美意識を取り入れた格調高い空間。朝食は楽天トラベルでも絶賛される豪華ビュッフェで、名物「車麩のフレンチトースト」や郷土料理「治部煮」、じっくり炊き上げた能登米コシヒカリが並び、冬の観光前に心身を満たす贅沢な朝を堪能できます。",
              roomTip: "ニッコーフロア・ラグジュアリーツイン。高層階ならではの息を呑む夜景とシモンズ社製特注ベッドで極上の寛ぎを体感。加湿空気清浄機完備。",
              gourmetTip: "「和洋朝食ビュッフェ・ザ・ガーデンハウス」。目の前で焼き上げる車麩フレンチトーストと、金沢郷土の味・治部煮や旬の地魚が彩る贅沢モーニング。",
              highlights: [
                "金沢駅兼六園口直結・全室17階以上の高層シティホテル・白山連峰パノラマビュー",
                "名物車麩フレンチトーストと治部煮が評判の朝食ビュッフェ・上質な日航ブランドの接客",
                "地下道連絡で冬の雪や雨でも傘いらず・ビジネスから記念日旅行まで幅広く支持"
              ]
            },
            {
              id: 2,
              name: "ハイアット　セントリック　金沢",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/179694/179694.jpg",
              rating: 4.67,
              reviews: 261,
              price: "¥15,012〜",
              access: "金沢駅より徒歩にて約２分",
              special: "金沢駅から徒歩2分＆全室32平米以上。伝統工芸とアートに包まれる、プレミアムステイを。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179694%2F179694.html",
              story: "金沢駅金沢港口（西口）から徒歩わずか2分という好立地に佇む「ハイアット セントリック 金沢」。金沢の伝統と現代アートが刺激的に融合した館内は、全室32平米以上のゆとりある空間設計を誇ります。冬の北陸観光で気になる足元の冷えや荷物の多さも、広々とした客室と上質なバスルームで心地よく解消。2階のオールデイダイニング「FIVE – Grill & Lounge」では、能登牛や冬の北陸鮮魚を豪快にグリルしたモダン料理が楽しめ、夜はルーフトップバー「RoofTerrace Bar」で冬の古都の夜景を眺めながら地元銘酒のカクテルを傾ける洗練の滞在が叶います。",
              roomTip: "デラックスキング（38平米）。広々とした独立型バスタブとレインシャワーを備え、冬の散策で冷えた体をゆったり温められるモダンな客室。",
              gourmetTip: "「FIVE – Grill & Lounge」の冬期ディナーコース。厳選された能登牛の備長炭グリルと北陸直送の寒魚を、オープンキッチンから届く出来立てで堪能。",
              highlights: [
                "金沢駅西口徒歩2分・全室32平米以上の贅沢モダン空間・ルーフトップバー完備",
                "能登牛や北陸寒魚をダイナミックに楽しむグリルダイニング・アートに浸る滞在",
                "ハイアットの上質さとローカルの魅力が融合・広々としたバスルームで冬も快適"
              ]
            },
            {
              id: 3,
              name: "三井ガーデンホテル金沢",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/167963/167963.jpg",
              rating: 4.58,
              reviews: 858,
              price: "¥8,820〜",
              access: "ＪＲ　金沢駅よりお車にて約8分",
              special: "観光名所が身近に揃うロケーション。加賀友禅をあしらった客室や最上階の大浴場でおくつろぎください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167963%2F167963.html",
              story: "近江町市場まで徒歩約3分、尾山神社や兼六園も徒歩圏内という金沢観光の黄金エリアに建つ「三井ガーデンホテル金沢」。金沢の町家にインスパイアされた格子や瓦、加賀友禅の色彩が調和した和モダンホテルです。特筆すべきは最上階13階に設けられた宿泊者専用展望大浴場。天気が良い冬の朝には遠く白山連峰の雪景色、夜には金沢城公園方面の夜景を温もりあふれる湯船から鑑賞できます。近江町市場で冬の味覚を堪能したあと、歩いて宿へ戻り展望風呂で手足を伸ばす心地よさは格別です。",
              roomTip: "スーペリアツイン。加賀友禅の意匠を取り入れたヘッドボードと落ち着いた木目調のインテリアが、心静まる上質な休息を約束。",
              gourmetTip: "「金沢の朝を味わう和洋ビュッフェ」。地元の加賀野菜を使ったおばんざいや能登豚のしゃぶしゃぶ、香ばしい加賀棒茶粥で体を芯から温める朝食。",
              highlights: [
                "近江町市場徒歩3分・最上階13階に金沢城一望の展望大浴場・加賀友禅アート空間",
                "尾山神社や兼六園への散策拠点に抜群・金沢町家の落ち着きある和モダンデザイン",
                "女性一人旅やカップルに大好評・加賀棒茶粥など体に優しい手作り和朝食"
              ]
            },
            {
              id: 4,
              name: "天然温泉　加賀の宝泉　御宿　野乃金沢（ドーミーイン・御宿野乃　ホテルズグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/182423/182423.jpg",
              rating: 4.55,
              reviews: 2072,
              price: "¥6,490〜",
              access: "JR金沢駅より徒歩15分または北鉄バス6～10番乗り場からバスで4分「武蔵が辻・近江町市場」バス停下車後徒歩1分",
              special: "「近江町市場」「兼六園」まで徒歩圏内！天然温泉大浴場＆サウナ完備！朝食は「お好み海鮮丼」",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182423%2F182423.html",
              story: "近江町市場の目の前に位置し、館内全域が素足で寛げる畳敷き仕様となっている「天然温泉 加賀の宝泉 御宿 野乃金沢」。最上階14階には金沢市街地を一望する男女別天然温泉大浴場を完備し、自家源泉のナトリウム・塩化物強塩温泉が冬の冷えた体を芯からポカポカに温めてくれます。さらに高温サウナと強冷水風呂、外気浴スペースも充実。朝食はいくらや寒ブリ、甘海老など冬の日本海海の幸を豪快にご飯に盛り付ける「お好み海鮮丼」が看板メニューで、市場直結の活気と温泉宿の極楽を同時に満喫できます。",
              roomTip: "スーペリアダブル。全館素足で過ごせる心地よい琉球畳敷き。サータ社製ベッドと清潔感あふれる和風デザインで旅の疲れを完全にリセット。",
              gourmetTip: "「豪快！ご当地海鮮丼朝食バイキング」。プチプチ弾けるいくら、冬の寒ブリ、甘海老を枡や丼に盛り放題。夜鳴き蕎麦の無料サービスも大人気。",
              highlights: [
                "近江町市場目の前・全館素足の畳敷き・最上階天然温泉＆サウナ・朝食いくら盛り放題",
                "朝食から海鮮丼バイキング・夜鳴き蕎麦無料・強塩泉で湯冷めしにくい極上保温湯",
                "家族連れやカップルに大人気・サウナ好きも納得の充実設備と清潔な畳空間"
              ]
            },
            {
              id: 5,
              name: "金沢白鳥路　ホテル山楽",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9004/9004.jpg",
              rating: 4.56,
              reviews: 2857,
              price: "¥12,250〜",
              access: "■金沢駅⇔ホテル無料送迎バス■金沢駅東口より車で１０分■金沢駅東口⑥、⑦乗り場【兼六園下・金沢城】バス停下車徒歩５分",
              special: "金沢城のすぐ側で美肌の湯と金沢美食、そして心温まるおもてなしに癒されて日常をひと休みしませんか。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9004%2F9004.html",
              story: "兼六園・金沢城公園・金沢21世紀美術館へ徒歩約5分、加賀藩主前田家の奥御殿跡に建つクラシックホテル「金沢白鳥路 ホテル山楽」。ロビーに足を踏み入れると、大正ロマンを思わせる絢爛豪華なステンドグラスと赤絨毯が迎えてくれます。金沢市内中心部では極めて貴重な「自家源泉の天然温泉（美肌の湯）」を有し、琥珀色に輝くナトリウム炭酸水素塩・塩化物泉が絹のような肌触りで旅人を包み込みます。夕食には冬の日本海会席を贅沢に味わい、歴史ある金沢の奥深さを静かに味わう大人の隠れ家です。",
              roomTip: "浪漫ツイン。大正モダンのクラシカルな調度品に加賀水引や九谷焼のアートを配した気品ある客室。静謐な城下町の夜を贅沢に過ごせます。",
              gourmetTip: "「旬彩加賀会席」。冬の味覚の王様・ズワイガニや香箱ガニ（11月〜12月限定）、寒ブリの照り焼き、治部煮を九谷焼や輪島塗の器でいただく極上膳。",
              highlights: [
                "兼六園＆金沢城公園徒歩5分・大正ロマンのステンドグラス・自家源泉の琥珀色天然温泉",
                "創業の歴史が息づく城下町の奥座敷・九谷焼や輪島塗で楽しむ本格加賀会席料理",
                "静謐な丸の内に位置・金沢の歴史風情を存分に味わえる大人のクラシックリゾート"
              ]
            }
  ];

  const faqData = [
  {
    "q": "兼六園の「雪吊り」の実施期間や冬の見どころ・ライトアップについて教えてください。",
    "a": "兼六園の冬の風物詩である「雪吊り（ゆきづり）」は、毎年11月1日に庭師の手によって唐崎松（からさきのまつ）から縄張りが開始され、12月中旬頃までに園内数百本の樹木に施されます。雪の重みから枝を守る円錐状の縄の幾何学模様は、青空や白雪、水面に美しく映えます。12月から2月にかけての特定期間（冬の段）には夜間無料開放とライトアップが実施され、黄金色に照らされた唐崎松と雪景色が息を呑む幻想美を見せてくれます。雪吊りは例年3月中旬頃まで鑑賞可能です。"
  },
  {
    "q": "冬の金沢で外せない味覚「香箱ガニ（こうばこがに）」の解禁期間やおすすめの食べ方は？",
    "a": "香箱ガニとは、北陸で水揚げされる雌のズワイガニの呼び名です。漁期は資源保護のため非常に短く、毎年11月6日の解禁から年末の12月29日頃までの約2ヶ月間しか味わえません。小ぶりな甲羅の中にぎっしり詰まった濃厚な「カニ味噌」、未成熟卵であるオレンジ色の「内子（うちこ）」、プチプチとした食感の「外子（そとこ）」の三拍子が揃った至高の冬の味覚です。近江町市場の鮮魚店や居酒屋で甲羅に身を詰めた「カニ面（かにめん）」をおでん出汁で温めて食べるのが金沢通の贅沢です。"
  },
  {
    "q": "尾山神社的新春初詣（1月）の特徴や見どころ、混雑を避ける参拝のコツは？",
    "a": "尾山神社（おやまじんじゃ）は、加賀藩祖・前田利家公と正室お松の方を祀る金沢の総鎮守です。日本屈指のユニークな重要文化財「神門」は、和漢洋折衷の三層構造で最上階に色鮮やかなステンドグラス（ギヤマン）がはめ込まれており、夜には内部から明かりが灯って美しく輝きます。新春初詣では文武両道・夫婦円満・勝運の御利益を求めて多くの初詣客で賑わいます。混雑のピークは元旦の日中ですので、三が日の早朝7時〜8時台、または夕方16時以降の参拝が比較的静かにゆっくりお参りできます。"
  },
  {
    "q": "冬の金沢で味わうべきご当地グルメは何がありますか？",
    "a": "冬の金沢は海の幸と郷土料理の宝庫です。第一は近江町市場や割烹でいただく「寒ブリ」で、脂が乗った刺身やブリしゃぶは絶品です。第二は「金沢おでん」。車麩、梅貝、赤巻、カニ面など金沢ならではの具材を澄んだ出汁で煮込んだ熱々の一杯は冬の冷えた体に染み渡ります。さらに、鴨肉やすだれ麩をとろみのある出汁で仕立てた伝統の「治部煮（じぶに）」、脂の乗った白身のトロ「のどぐろの塩焼き・炙り刺し」、冬の加賀野菜（源助大根、加賀れんこん）も見逃せません。"
  },
  {
    "q": "冬（11月・12月・1月）の金沢の気候や雪・服装・歩き方の注意点は？",
    "a": "金沢の冬は「弁当忘れても傘忘れるな」と言われるほど天気が変わりやすく、雨やみぞれ、雪が頻繁に降ります。11月後半からは冷え込みが強まり、12月後半から1月にかけては積雪が見られます。金沢市内の道路には消雪パイプ（融雪装置）が設置されており水が撒かれているため、靴には「完全防水の歩きやすいスニーカー」または「防水防寒ブーツ」が必須です。革靴や布製スニーカーは濡れて浸水しやすいため避けましょう。ダウンジャケット、マフラー、手袋、折りたたみ傘（風に強いもの）を必ずご用意ください。"
  }
];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://croud-travel.pages.dev/winter-ishikawa-kanazawa-city-kenrokuen-yukizuri-koubako-crab-stay#webpage",
        "url": "https://croud-travel.pages.dev/winter-ishikawa-kanazawa-city-kenrokuen-yukizuri-koubako-crab-stay",
        "name": "【11・12・1月金沢】冬の兼六園雪吊り＆尾山神社新春初詣！近江町市場の香箱ガニ・寒ブリ・加賀おでんに寛ぐ厳選宿5選",
        "description": "冬の金沢は、名勝・兼六園の唐崎松に施される雪吊りが冬空に優美な幾何学模様を描き、11月6日のカニ漁解禁とともに近江町市場が真っ赤な香箱ガニと寒ブリで沸き立つ一年で最も華やぐ季節。12月の白銀ライトアップや1月の尾山神社ステンドグラス神門の新春開運初詣、熱々の金沢おでんやのどぐろ、治部煮に舌鼓を打つ極上の古都冬旅。楽天APIから最新取得した金沢駅周辺・兼六園近接の信頼の名宿5選を徹底特集します。",
        "inLanguage": "ja",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.pages.dev/#website",
          "url": "https://croud-travel.pages.dev/",
          "name": "くらうどトラベル"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.pages.dev/"
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
            "name": "金沢雪吊り＆香箱ガニ厳選宿",
            "item": "https://croud-travel.pages.dev/winter-ishikawa-kanazawa-city-kenrokuen-yukizuri-koubako-crab-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      },
      {
        "@type": "TouristDestination",
        "name": "石川県金沢市（兼六園・近江町市場・尾山神社）",
        "description": "日本三名園・兼六園の雪吊りと白銀世界、近江町市場の香箱ガニや寒ブリ、尾山神社の新春初詣で賑わう冬の金沢中心部。",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "石川県",
          "addressLocality": "金沢市",
          "addressCountry": "JP"
        }
      }
    ]
  };


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月金沢】冬の兼六園雪吊り＆尾山神社新春初詣！近江町市場の香箱ガニ・寒ブリ・加賀おでんに寛ぐ厳選宿5選",
    "description": "冬の金沢は、名勝・兼六園の唐崎松に施される雪吊りが冬空に優美な幾何学模様を描き、11月6日のカニ漁解禁とともに近江町市場が真っ赤な香箱ガニと寒ブリで沸き立つ一年で最も華やぐ季節。12月の白銀ライトアップや1月の尾山神社ステンドグラス神門の新春開運初詣、熱々の金沢おでんやのどぐろ、治部煮に舌鼓を打つ極上の古都冬旅。楽天APIから最新取得した金沢駅周辺・兼六園近接の信頼の名宿5選を徹底特集します。",
    "url": "https://croud-travel.pages.dev/winter-ishikawa-kanazawa-city-kenrokuen-yukizuri-koubako-crab-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【11・12・1月金沢】冬の兼六園雪吊り＆尾山神社新春初詣！近江町市場の香箱ガニ・寒ブリ・加賀おでんに寛ぐ厳選宿5選", "item": "https://croud-travel.pages.dev/winter-ishikawa-kanazawa-city-kenrokuen-yukizuri-koubako-crab-stay/" }
    ]
  };

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-rose-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-semibold tracking-wide">
            <Snowflake className="w-4 h-4 text-rose-300 animate-pulse" />
            <span>11月・12月・1月冬の北陸特選ガイド｜石川県金沢市</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            冬の兼六園雪吊り＆尾山神社新春初詣！<br className="hidden sm:inline" />
            近江町市場の香箱ガニ・寒ブリ・加賀おでんに寛ぐ厳選宿5選
          </h1>

          <p className="max-w-4xl text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal">
            加賀百万石の栄華を今に伝える城下町・金沢。11月1日に始まる兼六園の唐崎松雪吊り、11月6日のカニ漁解禁で沸き立つ近江町市場、12月の純白ライトアップ、1月の尾山神社ステンドグラス神門新春初詣まで、冬こそ金沢が最も輝く黄金期。北陸の至福の味覚と城下町情緒に浸る上質な冬旅へご案内します。
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Compass className="w-4 h-4 text-rose-400" /> 金沢駅・近江町市場・兼六園・尾山神社
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Utensils className="w-4 h-4 text-amber-400" /> 香箱ガニ・寒ブリ・のどぐろ・金沢おでん
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Calendar className="w-4 h-4 text-sky-400" /> 探訪期：11月上旬〜1月下旬
            </span>
          </div>
        </div>
      </header>

      {/* Navigation Breadcrumbs */}
      <nav aria-label="パンくずリスト" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-500">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-rose-600 transition">ホーム</Link></li>
          <li><span>/</span></li>
          <li><Link href="/features" className="hover:text-rose-600 transition">特集一覧</Link></li>
          <li><span>/</span></li>
          <li className="text-slate-800 font-medium truncate">冬の金沢雪吊り＆香箱ガニ特集</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-16">
        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-rose-500 pl-4">
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Deep Dive Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              白銀の唐崎松と湯気立つ近江町市場！冬の金沢に息づく北陸の贅と祈り
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              加賀百万石の美意識が息づく冬景色、新春の開運初詣、そして日本海の至高の味覚
            </p>
          </div>

          <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
            <p>
              北陸新幹線の延伸により全国からのアクセスが一段と向上した古都・金沢。四季折々に風光明媚な表情を見せるこの街が、一年の中で最も美しく、最も濃密な情緒を放つのが11月から1月にかけての冬の季節です。立冬を控えた11月1日、日本三名園の一つ「兼六園」では、名木・唐崎松への雪吊り作業が始まります。高さ十数メートルの芯柱から放射状に幾重にも張り巡らされる荒縄の円錐美は、湿り気を含んだ重い雪から枝を守る加賀庭師の伝統技術。12月から1月にかけて雪化粧をまとった唐崎松が霞ヶ池の静かな水面に映り込む光景は、息を呑むような静謐さと美しさを漂わせます。
            </p>
            <p>
              そして11月6日、日本海のズワイガニ漁が一斉に解禁の号令を迎えると、金沢市民の台所として300年の歴史を刻む「近江町市場」は熱狂に包まれます。店頭にはオレンジ色のタグが輝く雄の加能ガニとともに、小ぶりながら濃厚な旨味が詰まった雌の「香箱ガニ（こうばこがに）」が所狭しと並びます。甲羅の中に凝縮された濃厚なカニ味噌、鮮やかなオレンジ色の内子（うちこ）、プチプチと弾ける外子（そとこ）の三位一体の味わいは、11月上旬から年末までのわずか2ヶ月弱しか手に入らない冬の奇跡。熱々の茹で立てを市場の喧騒の中で味わう瞬間は、旅人にとって忘れがたい思い出となります。
            </p>
            <p>
              年が明けた1月の新春、金沢の街は開運祈願の祈りに包まれます。加賀藩祖・前田利家公と正室お松の方を祀る「尾山神社」では、明治8年建築の和漢洋折衷の神門に嵌め込まれた色鮮やかなステンドグラス（ギヤマン）が、冬の夕暮れや雪景色の中で幻想的に輝きます。重要文化財の神門をくぐり、勝運や夫婦円満、厄除けを祈願した後は、前田利家公の金色の兜像を仰ぎ、清々しい新年の誓いを立てることができます。
            </p>
            <p>
              散策で冷え切った体を芯から温めてくれるのが、金沢の豊かな冬グルメです。澄み切った上品な昆布出汁で車麩、バイ貝、赤巻、大根をじっくり煮込んだ熱々の「金沢おでん」。冬に脂の乗りが最高潮に達する日本海の「寒ブリ」の刺身やブリしゃぶ、白身のトロと称される「のどぐろ」の塩焼き、鴨肉とすだれ麩を煮込んだ伝統の「治部煮」。夜の帳が下りる頃、市内の名居酒屋やおでん屋の赤提灯をくぐり、石川の銘酒「菊姫」「黒帯」「手取川」の熱燗を傾ければ、北陸の冬ならではの幸福感に心まで満たされます。
            </p>
            <p>
              金沢駅周辺や兼六園周辺には、高層階からの雪景色パノラマを楽しめるラグジュアリーホテルから、金沢城公園に隣接する自家源泉のクラシック温泉旅館、全館畳敷きで天然温泉大浴場と海鮮丼朝食を備えた和風ホテルまで、個性豊かな宿が揃っています。冬の寒さを心地よい温もりへと変えてくれる厳選宿で、特別な古都の休日をお過ごしください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs sm:text-sm">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="font-bold text-rose-700 block mb-1">兼六園雪吊り＆ライトアップ</span>
              <p className="text-slate-600">唐崎松の円錐状の荒縄美と白銀の庭園。冬の夜間特別ライトアップが織りなす幻想的な雪景色。</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="font-bold text-rose-700 block mb-1">近江町市場の香箱ガニ＆寒ブリ</span>
              <p className="text-slate-600">11月〜12月限定の香箱ガニ、内子外子の濃厚な旨味。寒ブリやのどぐろが揃う北陸の海の幸の頂点。</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="font-bold text-rose-700 block mb-1">尾山神社初詣＆金沢おでん</span>
              <p className="text-slate-600">ステンドグラス神門の新春開運参拝。出汁染みる車麩やカニ面おでん、銘酒の熱燗で温まる夜。</p>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase">Handpicked Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              冬の金沢を満喫する厳選名宿5選
            </h2>
            <p className="text-sm text-slate-600">
              楽天トラベルAPIから最新取得した、金沢駅直結・近江町市場徒歩圏・自家源泉完備の信頼宿
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
              >
                {/* Hotel Image */}
                <div className="relative md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100 overflow-hidden">
                  <img
                    src={hotel.img}
                    alt={hotel.name}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{hotel.rating}</span>
                    <span className="text-slate-300 font-normal">({hotel.reviews}件)</span>
                  </div>
                </div>

                {/* Hotel Info */}
                <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-medium text-rose-700 bg-rose-50 px-3 py-1 rounded-lg w-fit">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{hotel.access}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                      {hotel.name}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {hotel.story}
                    </p>

                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
                      <div>
                        <span className="font-bold text-slate-900">客室の魅力：</span> {hotel.roomTip}
                      </div>
                      <div>
                        <span className="font-bold text-slate-900">冬の食体験：</span> {hotel.gourmetTip}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-2">
                      {hotel.highlights.map((item: string, hIdx: number) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-slate-500 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-2xl font-extrabold text-rose-600">{hotel.price}</span>
                    </div>

                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-bold text-sm shadow-md hover:from-rose-500 hover:to-red-500 hover:shadow-lg transition-all"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1泊2日モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-rose-500 pl-4">
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Winter Schedule</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の金沢を満喫する1泊2日王道モデルコース
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              兼六園雪吊り、近江町市場香箱ガニ、尾山神社初詣、金沢おでんを味わい尽くす充実プラン
            </p>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-rose-100">
            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 11:00】金沢駅到着＆近江町市場で冬の香箱ガニランチ</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                北陸新幹線で金沢駅に到着。兼六園口（東口）のシンボル「鼓門」をくぐり、徒歩またはバスで近江町市場へ。活気あふれる市場内で11月〜12月限定の香箱ガニや、冬の寒ブリ、甘海老が山盛りの海鮮丼を堪能。店頭で茹で上げられたカニの立ち食いも楽しめます。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 13:30】名勝「兼六園」唐崎松雪吊り散策＆金沢城公園</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                兼六園へ移動。霞ヶ池の畔に立つ唐崎松の円錐状の雪吊りや、ことじ灯籠を鑑賞。茶店で温かい甘酒や金箔ソフトを味わいながら冬の静寂に浸ります。石川門を渡り金沢城公園の五十間長屋や菱櫓の白壁と雪のコントラストを見学します。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 16:00】尾山神社参拝・ステンドグラス神門の夕景鑑賞</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                金沢城公園の玉泉院丸庭園から鼠多門橋を渡って尾山神社へ。和漢洋折衷の神門最上階にあるギヤマン（ステンドグラス）が夕暮れの明かりに照らされ、幻想的な美しさを放ちます。新春初詣の祈願を済ませ、前田利家公の像を仰ぎます。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 18:00】厳選宿チェックイン＆名物「金沢おでん」と地酒ディナー</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                ホテル日航金沢や御宿野乃金沢など厳選宿にチェックイン。大浴場や天然温泉で冷えた体をじっくり温めた後、片町・香林坊や駅前の名店へ。車麩やバイ貝、カニ面を煮込んだ熱々の金沢おでんと菊姫の熱燗に舌鼓を打ちます。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【2日目 09:30】ひがし茶屋街の格子戸の町並み散策＆金箔スイーツ</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                朝食後、雪吊りが施された木虫籠（きむすこ）の格子戸が連なる「ひがし茶屋街」へ。朝の静かな路地を散策し、老舗茶房で温かい加賀棒茶と上生菓子を賞味。金箔貼り体験やお土産を選び、金沢駅ナカの「あんと」で地酒や和菓子を買い求めて帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Local Winter Experience Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8">
          <div className="border-l-4 border-rose-500 pl-4">
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Travel Strategy</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の金沢完全攻略：兼六園・近江町市場・初詣を極める旅の心得
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Snowflake className="w-5 h-5 text-sky-500" />
                兼六園「雪吊り」鑑賞の特等席と時間帯
              </h3>
              <p className="leading-relaxed">
                兼六園の中でも最も壮麗な雪吊りは、霞ヶ池の畔に立つ樹齢数百年の「唐崎松」です。朝8時前の開園直後は観光客も少なく、静寂に包まれた水面に逆さ雪吊りが映り込みます。ことじ灯籠と唐崎松を一枚のフレームに収めるアングルは冬の金沢を代表する絶景。12月以降の雪が積もった朝は格別の静謐さを誇ります。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-amber-500" />
                近江町市場での香箱ガニ選びとランチ戦略
              </h3>
              <p className="leading-relaxed">
                香箱ガニは11月6日から12月下旬までの限定品。鮮魚店店頭で茹で上げられたものをその場で捌いてもらい、外子・内子・カニ味噌を日本酒とともに立ち食いするのが醍醐味です。昼時の市場食堂街は大行列となるため、午前10時30分前の早めランチ、または午後14時以降の時間を狙うのが快適です。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Building className="w-5 h-5 text-rose-500" />
                尾山神社新春初詣とステンドグラス神門
              </h3>
              <p className="leading-relaxed">
                尾山神社のシンボル・神門は三層構造の洋風建築。夕暮れ時になると最上階のギヤマン（ステンドグラス）が赤や緑に灯り、白雪の境内を幻想的に彩ります。元旦から三が日は大勢の初詣客で賑わうため、朝7時〜8時の清らかな時間帯にお参りすると、落ち着いて新年の誓いを立てることができます。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500" />
                夜の楽しみ！金沢おでんと地酒の銘店巡り
              </h3>
              <p className="leading-relaxed">
                冬の金沢の夜は「金沢おでん」で決まり。車麩、バイ貝、源助大根、そして香箱ガニの甲羅に身を詰めた「カニ面」を透き通った出汁で味わいます。菊姫や手取川、黒帯など石川の銘酒の熱燗を合わせれば、冬の寒さも一瞬で幸福感へと変わります。繁華街の片町・香林坊や金沢駅ナカの「あんと」に名店が集まっています。
              </p>
            </div>
          </div>
        </section>

        {/* Climate and Access */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-rose-500 pl-4">
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Travel Advice</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の金沢：気候・服装・足元対策のポイント
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-rose-500" />
                気温と足元の防水対策
              </h4>
              <p>
                12月〜1月の平均気温は3〜5℃前後まで下がります。道路には融雪パイプから水が出ているため、布製スニーカーはすぐに水没します。必ず「防水仕様の靴」や「防水防寒ブーツ」を着用してください。
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <Building className="w-4 h-4 text-indigo-500" />
                市内交通と周遊バスの活用
              </h4>
              <p>
                金沢駅兼六園口（東口）からは「城下まち金沢周遊バス」が運行しており、兼六園、近江町市場、ひがし茶屋街を効率よく結びます。冬の雨や雪の日は無理に歩かずバスを賢く利用するのが快適です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-rose-500 pl-4">
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">FAQ & Local Insights</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の金沢観光・兼六園雪吊り・グルメ よくある質問
            </h2>
          </div>

          <div className="space-y-6 divide-y divide-slate-100">
            {faqData.map((faq, index) => (
              <div key={index} className="pt-5 first:pt-0">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <span className="text-rose-600 font-black">Q{index + 1}.</span>
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
              href="/winter-ishikawa-kanazawa-yuwaku-onsen-koubako-crab-stay"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-rose-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【金沢・湯涌温泉】竹久夢二ゆかりの美肌いで湯と香箱ガニ名宿</span>
              <span className="text-xs text-slate-500">金沢の奥座敷で味わう静寂の雪見露天風呂と加賀会席</span>
            </Link>
            <Link 
              href="/winter-toyama-himi-kanburi-luxury-stay"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-rose-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【富山・氷見】立山連峰海越し絶景＆本場氷見寒ブリ極上宿</span>
              <span className="text-xs text-slate-500">冬の富山湾が誇る至高のブランド寒ブリと展望温泉</span>
            </Link>
            <Link 
              href="/winter-fukui-awara-onsen-echizen-crab-stay"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-rose-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【福井・芦原温泉】名湯あわら温泉と本場越前ガニ尽くし名宿</span>
              <span className="text-xs text-slate-500">黄色いタグ付き越前ガニの濃厚な旨味と関西の奥座敷</span>
            </Link>
            <Link 
              href="/features"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-rose-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【全国】冬の厳選温泉＆旬グルメ特集一覧へ</span>
              <span className="text-xs text-slate-500">11月・12月・1月に訪れたい日本各地の名宿・絶景旅ガイド</span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-ishikawa-kanazawa-city-kenrokuen-yukizuri-koubako-crab-stay" />
</div>
        </section>
      </main>
    </article>
  );
}
