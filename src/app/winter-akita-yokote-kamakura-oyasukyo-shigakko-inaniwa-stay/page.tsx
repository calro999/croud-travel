import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Landmark, Flame, ShieldCheck, Footprints, Snowflake, Coffee, Sun, Thermometer
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月秋田】横手＆湯沢・小安峡！約450年の伝統「横手のかまくら」雪まつり＆小安峡大噴湯の巨大氷柱「しがっこ」・本場稲庭うどん＆雪見露天名宿5選",
  description: "みちのくの豪雪地帯・秋田県県南の横手市と湯沢市。11〜1月は450年の伝統を誇る小正月行事「横手のかまくら」の白銀情景が広がり、湯沢・小安峡では岩肌から噴出する熱湯蒸気と巨大つらら「しがっこ」が大自然の氷結アートを描き出します。日本三大うどん「本場稲庭うどん」や希少な幻のブランド和牛「皆瀬牛」、秋田杉香る名湯・小安峡温泉や秋の宮温泉郷の雪見露天風呂を満喫できる厳選名宿5選を徹底解説します。",
  keywords: '横手かまくら ホテル, 小安峡温泉 旅館, 多郎兵衛旅館, 稲住温泉, ホテルプラザアネックス横手, 稲庭うどん 湯沢, 皆瀬牛, 小安峡 しがっこ, 12月 1月 秋田 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-akita-yokote-kamakura-oyasukyo-shigakko-inaniwa-stay/"
  },
  openGraph: {
    title: "【11・12・1月秋田】横手＆湯沢・小安峡！約450年の伝統「横手のかまくら」雪まつり＆小安峡大噴湯の巨大氷柱「しがっこ」・本場稲庭うどん＆雪見露天名宿5選",
    description: "みちのくの豪雪地帯・秋田県県南の横手市と湯沢市。11〜1月は450年の伝統を誇る小正月行事「横手のかまくら」の白銀情景が広がり、湯沢・小安峡では岩肌から噴出する熱湯蒸気と巨大つらら「しがっこ」が大自然の氷結アートを描き出します。日本三大うどん「本場稲庭うどん」や希少な幻のブランド和牛「皆瀬牛」、秋田杉香る名湯・小安峡温泉や秋の宮温泉郷の雪見露天風呂を満喫できる厳選名宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-akita-yokote-kamakura-oyasukyo-shigakko-inaniwa-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/55778/55778.jpg",
      width: 1200,
      height: 630,
      alt: '雪に包まれた横手のかまくらの灯りと小安峡の雪見露天風呂'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月秋田】横手＆湯沢・小安峡！約450年の伝統「横手のかまくら」雪まつり＆小安峡大噴湯の巨大氷柱「しがっこ」・本場稲庭うどん＆雪見露天名宿5選",
    description: "みちのくの豪雪地帯・秋田県県南の横手市と湯沢市。11〜1月は450年の伝統を誇る小正月行事「横手のかまくら」の白銀情景が広がり、湯沢・小安峡では岩肌から噴出する熱湯蒸気と巨大つらら「しがっこ」が大自然の氷結アートを描き出します。日本三大うどん「本場稲庭うどん」や希少な幻のブランド和牛「皆瀬牛」、秋田杉香る名湯・小安峡温泉や秋の宮温泉郷の雪見露天風呂を満喫できる厳選名宿5選を徹底解説します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/55778/55778.jpg"]
  }
};

export default function AkitaYokoteOyasukyoWinterPage() {
  const hotelsData = [
            {
              id: 1,
              name: "ホテルプラザアネックス横手",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/55778/55778.jpg",
              rating: 4.34,
              reviews: 3490,
              price: "¥6,720〜",
              access: "JR横手駅徒歩2分！　横手ICより5分、秋田空港・花巻空港より車60分、横手バスターミナル徒歩3分",
              special: "お客様評価すべて★★★★以上！天然温泉＆岩盤浴＆サロン＆レストラン◎露天風呂付き客室も人気",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F55778%2F55778.html",
              story: "JR横手駅西口の目の前に位置し、本格的な天然温泉リゾート施設「ゆうゆうプラザ」と連絡通路で直結した上質なシティ＆温泉ホテル「ホテルプラザアネックス横手」。館内には美肌効果の高いアルカリ性単純温泉が満たされた大浴場や露天風呂、展望サウナが完備され、冬の雪国観光で冷え切った体を至福の温もりで包み込みます。客室は広々とした和モダンデザインで、一部には客室専用の天然温泉展望風呂付き客室も用意。冬期は横手城や横手公園、かまくら館など市内観光のアクセス拠点として抜群の利便性を誇ります。夕食には秋田名物のきりたんぽ鍋や比内地鶏、横手やきそばなど郷土の味覚を館内の食事処で気軽に楽しめ、ビジネスから家族旅行まで高い満足度を誇ります。",
              roomTip: "天然温泉客室展望風呂付き和洋室。窓の外に広がる横手平野の白銀雪景色を眺めながら、24時間好きな時に自分専用の源泉に浸かる贅沢。",
              gourmetTip: "「秋田味めぐり膳」。本場比内地鶏の出汁が染み渡る熱々のきりたんぽ鍋と、秋田県産黒毛和牛の陶板焼きが自慢。",
              highlights: [
                "横手駅西口直結・天然温泉リゾート「ゆうゆうプラザ」の大浴場＆露天風呂満喫",
                "客室専用温泉展望風呂プランあり・比内地鶏きりたんぽ鍋と秋田牛陶板焼き",
                "サウナ＆岩盤浴完備・ビジネスから観光まで快適な広々和モダン客室"
              ]
            },
            {
              id: 2,
              name: "横手セントラルホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1558/1558.jpg",
              rating: 4.28,
              reviews: 1935,
              price: "¥5,040〜",
              access: "JR奥羽本線「横手駅」下車徒歩15分、タクシーで3分。 秋田自動車道横手ICより国道107号線経由で約8分",
              special: "◆Wi-Fi完備◆夜カレーサービス＆男性用大浴場あり◎地元食材を使用した朝食バイキングが人気！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1558%2F1558.html",
              story: "横手市街の中心部に位置し、横手城展望台やかまくら通りなどの観光名所へのアクセスに優れたコミュニティホテル「横手セントラルホテル」。開放的なロビーと清潔感あふれる客室が旅人を温かく迎えてくれます。冬の「横手のかまくら」期間中は市内各地のイベント会場への周遊拠点として最適。朝食ビュッフェでは、横手産あきたこまちの炊きたてご飯をはじめ、名物のいぶりがっこ、じゅんさい、あつあつの芋の子汁（里芋の郷土汁）など、秋田県南の素朴で滋味深いお母さんの味が所狭しと並びます。リーズナブルな価格設定と親身なフロントサービスで、冬のひとり旅や夫婦旅に選ばれ続けています。",
              roomTip: "デラックスツイン。落ち着いたトーンのインテリアで、広めのデスクと快適なベッドを備えた寛ぎの空間。",
              gourmetTip: "「秋田の朝ごはんビュッフェ」。炊きたての新米あきたこまちにいぶりがっこと味噌だれを合わせ、温かい芋の子汁をいただく至福の朝。",
              highlights: [
                "横手城・かまくら通り至近・あきたこまちと素朴な郷土料理朝食ビュッフェ",
                "市街地中心の好立地・リーズナブルで冬の雪国観光に最適な安心設備",
                "あつあつ芋の子汁といぶりがっこ・親身なフロントサービスが好評"
              ]
            },
            {
              id: 3,
              name: "小安峡温泉　旅館　多郎兵衛",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54673/54673.jpg",
              rating: 4.62,
              reviews: 684,
              price: "¥9,350〜",
              access: "車⇒湯沢ＩＣ・十文字ＩＣより398号線経由40分/　奥羽本線湯沢駅下車⇒バス50分「元湯」下車すぐ",
              special: "土地の食材を季節に注意し、女将自ら腕をふるって無添加手作り料理でおもてなしをしております。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54673%2F54673.html",
              story: "雄大な皆瀬川の渓谷に抱かれた小安峡温泉で、創業明治の歴史を誇る名門湯宿「小安峡温泉 旅館 多郎兵衛（たろべえ）」。宿の代名詞は、樹齢100年を超える秋田杉を惜しみなく使った大浴場「薬師の湯」。太い梁と高い天井が醸し出す重厚な佇まいの中、湯船に注がれる源泉掛け流しの湯が体を芯から温めてくれます。さらに露天風呂「風の風呂」では、冬の小安峡に降り積もる純白の雪景色と清流の音を聞きながら、極上の雪見風呂を満喫。夕食は山と大地の恵みを凝縮した手作り会席で、希少な地元特産「皆瀬牛（みなせぎゅう）」の石焼きステーキや、山菜の塩漬け料理、川魚の塩焼きなど、本物の雪国の滋味が食卓を彩ります。",
              roomTip: "渓谷側和室または特別室。窓を開けると雪化粧した渓谷美が広がり、秋田杉の香りに包まれる落ち着きある和空間。",
              gourmetTip: "「幻の皆瀬牛陶板焼き会席」。年間出荷頭数が極めて少ない希少な皆瀬牛。きめ細やかな肉質と濃厚な肉汁が口福をもたらします。",
              highlights: [
                "創業明治・樹齢100年秋田杉風呂「薬師の湯」＆渓谷雪見露天風呂",
                "幻のブランド牛「皆瀬牛」陶板焼き・小安峡大噴湯スノーハイク拠点",
                "大正ロマンの風情あふれる館内・山菜塩漬けなど本物の雪国の味"
              ]
            },
            {
              id: 4,
              name: "小安峡温泉　湯の宿　元湯くらぶ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/161215/161215.jpg",
              rating: 4.63,
              reviews: 125,
              price: "¥11,000〜",
              access: "湯沢駅よりお車にて約１時間",
              special: "いいお湯と　食膳を賑わす手料理の数々　のんびりと　やすらげるお部屋　ぬくもりが優しい湯の宿元湯くらぶ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161215%2F161215.html",
              story: "小安峡の渓谷沿いに建ち、自噴する高温の源泉を贅沢に掛け流す全15室の隠れ家的な宿「小安峡温泉 湯の宿 元湯くらぶ」。宿の自慢は、空いていれば何度でも無料で利用できる貸切露天風呂。冬の冷気の中で湯けむりを上げる露天風呂からは、雪を被った渓谷の木々と岩肌が見渡せ、プライベートな雪見湯浴みを心ゆくまで楽しめます。料理は料理長が腕を振るう創作郷土会席で、冬の湯沢名物「手綯い（てない）稲庭うどん」の温かい小鍋や、秋田錦牛のステーキ、地元農家から仕入れる冬野菜を取り入れた温もりあふれる料理が並びます。細やかな心配りと家庭的な温かさにリピーターが絶えない名宿です。",
              roomTip: "渓流を望む和洋室。畳の温もりとベッドの快適性が融合し、静かな渓谷の雪景色を眺めながらゆったり読書が楽しめます。",
              gourmetTip: "「本場稲庭うどんと秋田牛会席」。なめらかな喉越しの稲庭うどんと、じっくり煮込んだ地鶏出汁の相性が抜群。",
              highlights: [
                "全15室の静寂隠れ家・自噴源泉掛け流し無料貸切露天風呂＆手作り創作会席",
                "本場稲庭うどん小鍋と秋田牛・家庭的な温もりとおもてなし",
                "渓流を望む和洋室・静けさを愛する大人の湯治リトリート"
              ]
            },
            {
              id: 5,
              name: "秋の宮温泉郷　湯けむりの宿　稲住温泉（共立リゾート）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/176789/176789.jpg",
              rating: 4.67,
              reviews: 248,
              price: "¥28,710〜",
              access: "【新庄駅】よりお車で約５０分/【鳴子温泉駅】よりお車で約４０分/【秋田空港】よりお車で約９０分",
              special: "多くの著名人に愛された昭和の名宿「稲住温泉」！令和元年リニューアル！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176789%2F176789.html",
              story: "開湯1200年、秋田県最古の温泉地と伝わる「秋の宮温泉郷」の荒川渓谷沿いに佇む共立リゾートの最高峰離れ宿「湯けむりの宿 稲住温泉（いなずみおんせん）」。かつて武者小路実篤ら文人墨客に愛された歴史を持ち、約1万坪の広大な敷地に日本庭園と数寄屋造りの建物が調和しています。客室の多くに自家源泉の客室温泉風呂が備わり、大浴場や渓流沿いの露天風呂では、雪景色の渓谷を眺めながら硫黄香る名湯に身を委ねられます。夕食は秋田の贅を尽くした和会席で、きりたんぽ鍋や秋田牛、旬魚の造りとともに、秋田の地酒を心ゆくまで堪能。共立リゾート名物の夜鳴きそばや湯上がりアイスのサービスも充実し、特別な記念日に最高のステイが叶います。",
              roomTip: "温泉露天風呂付き離れ「天の川」。清流・荒川のせせらぎと白銀の庭園を独り占めできる、洗練を極めた極上和洋室。",
              gourmetTip: "「冬の厳選会席」。旬の比内地鶏や秋田由利牛、本場の稲庭うどんを織り交ぜた、目にも鮮やかな会席料理のフルコース。",
              highlights: [
                "約1万坪の日本庭園に佇む最高峰離れ宿・自家源泉かけ流し露天風呂＆贅沢和会席",
                "武者小路実篤ゆかりの名湯・無料の夜鳴きそば＆湯上がり処サービス充実",
                "記念日やご褒美旅行に選ばれ続ける秋田最古の温泉郷の格式"
              ]
            }
  ];

  const faqData = [
  {
    "q": "「横手のかまくら」の開催期間と見どころスポットは？",
    "a": "横手の雪まつり「かまくら」は例年2月15日・16日に本番が開催されますが、1月下旬から市内各所で準備が進み雪国の情緒が高まります。また横手市役所前の「横手市ふれあいセンターかまくら館」では、マイナス10度に保たれたかまくら室の中に本物の雪で作られたかまくらが常設展示されており、年間を通じて本物のかまくらの中に入る体験ができます。本番期間中には「蛇の崎川原」に数千個のミニかまくらが作られ、中に灯されたろうそくの光が雪原を照らす幻想的な絶景が広がります。"
  },
  {
    "q": "小安峡（おやすきょう）大噴湯と冬の巨大つらら「しがっこ」とは？",
    "a": "小安峡は皆瀬川の急流が両岸の岩を深く削り取ってできたV字谷の渓流美です。遊歩道を下りた谷底にある「大噴湯（だいふんとう）」では、岩の裂け目から約98度の高熱蒸気と温泉水が轟音とともに激しく噴き出しています。12月から1月の厳冬期には、断崖絶壁に染み出す地下水が凍りつき、高さ数十メートルにも達する巨大なつらら群「しがっこ（秋田方言で氷・つらら）」が形成されます。立ち上る白い温泉蒸気と青白く凍てつく氷柱が織りなす大自然の氷結アートは東北屈指の冬絶景です。"
  },
  {
    "q": "「本場・稲庭うどん」の特徴と冬に食べるおすすめのスタイルは？",
    "a": "湯沢市稲庭町発祥の「稲庭（いなにわ）うどん」は、約350年の歴史を持ち、讃岐うどん、水沢うどんと並び「日本三大うどん」の一つに数えられます。手綯い（てない）と呼ばれる職人の手作業によって極細の平打ち麺に仕上げられ、滑らかな喉越しとコシの強さが特徴です。夏は冷たいざるうどんが定番ですが、冬は比内地鶏の滋味あふれる温かい出汁をかけた「比内地鶏かけうどん」や、セリや舞茸と一緒に煮込む「うどん鍋」が冷えた体を芯から温めてくれます。"
  },
  {
    "q": "横手・湯沢エリアの冬の気候と雪道運転の注意点は？",
    "a": "秋田県南の内陸部に位置する横手・湯沢は、全国有数の特別豪雪地帯です。12月から1月にかけては1メートルを超える積雪が珍しくなく、日中でも気温が氷点下になる日が多くあります。車を運転する場合は、最新スタッドレスタイヤの装着が絶対条件であり、急ブレーキや急発進を厳禁とし、わだち（轍）に沿って慎重に走行してください。小安峡や秋の宮温泉郷へ向かう国道398号・108号は除雪が行き届いていますが、吹雪による視界不良や峠道の凍結には十分ご注意ください。"
  },
  {
    "q": "幻のブランド黒毛和牛「皆瀬牛（みなせぎゅう）」とは？",
    "a": "湯沢市皆瀬地区の冷涼な気候と清らかな伏流水、良質な牧草で手塩にかけて育てられる「皆瀬牛」。年間出荷頭数が数十頭から百頭程度と極めて少なく、そのほとんどが地元で消費されるため「幻の和牛」と呼ばれます。融点の低い上質なサシと、噛むほどに旨味が溢れ出す濃い赤身のバランスが抜群で、小安峡温泉の老舗旅館でいただく陶板焼きやステーキは全国の牛肉通を唸らせる極上の逸品です。"
  },
  {
    "q": "秋田新幹線や空港からのアクセス方法は？",
    "a": "新幹線の場合、秋田新幹線「大曲駅」でJR奥羽本線に乗り換えて横手駅まで約18分、湯沢駅まで約35分です。また山形新幹線「新庄駅」からJR奥羽本線で北上するルートも便利です。飛行機の場合、秋田空港から横手・湯沢方面へ向かう乗合タクシー「あきたエアポートライナー」が運行されており、横手駅まで約60分で直行できます。小安峡温泉へは湯沢駅から羽後交通の路線バス（皆瀬線）で約50分です。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-akita-yokote-kamakura-oyasukyo-shigakko-inaniwa-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-akita-yokote-kamakura-oyasukyo-shigakko-inaniwa-stay"
        },
        "headline": "【11・12・1月秋田】横手＆湯沢・小安峡！約450年の伝統「横手のかまくら」雪まつり＆小安峡大噴湯の巨大氷柱「しがっこ」・本場稲庭うどん＆雪見露天名宿5選",
        "description": "みちのくの豪雪地帯・秋田県県南の横手市と湯沢市。11〜1月は450年の伝統を誇る小正月行事「横手のかまくら」の白銀情景が広がり、湯沢・小安峡では岩肌から噴出する熱湯蒸気と巨大つらら「しがっこ」が大自然の氷結アートを描き出します。日本三大うどん「本場稲庭うどん」や希少な幻のブランド和牛「皆瀬牛」、秋田杉香る名湯・小安峡温泉や秋の宮温泉郷の雪見露天風呂を満喫できる厳選名宿5選を徹底解説します。",
        "datePublished": "2026-10-04T00:00:00+09:00",
        "dateModified": "2026-10-04T00:00:00+09:00",
        "inLanguage": "ja",
        "publisher": {
          "@type": "Organization",
          "name": "地域の宿探訪",
          "url": "https://croud-travel.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.com"
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
            "name": "横手＆小安峡温泉冬特集",
            "item": "https://croud-travel.com/winter-akita-yokote-kamakura-oyasukyo-shigakko-inaniwa-stay"
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


  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(96,165,250,0.2),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-medium">
            <Snowflake className="w-4 h-4 text-blue-300" />
            <span>11月・12月・1月冬の東北雪国旅特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-6">
            横手＆湯沢・小安峡！<br className="hidden sm:inline" />
            約450年の伝統「横手のかまくら」雪まつり＆小安峡大噴湯の巨大氷柱「しがっこ」・本場稲庭うどん＆雪見露天名宿5選
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            みちのく奥羽山脈の懐に抱かれた秋田県南の豪雪地帯。水神様を祀る約450年の伝統行事「横手のかまくら」では、雪洞の中に灯るろうそくの光が幻想的な童話の世界を創り出します。湯沢・小安峡では轟音とともに吹き出す98度の温泉蒸気と、断崖に連なる巨大つらら「しがっこ」が壮大な氷結美を描写。手綯い本場稲庭うどんの滑らかな喉越し、幻の希少牛「皆瀬牛」、そして秋田杉が香る雪見露天風呂に浸かる至福のみちのく冬旅をお届けします。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-200 border-t border-slate-700/60 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
              <span>旬期：11月下旬〜2月下旬</span>
            </div>
            <div className="flex items-center gap-2">
              <Snowflake className="w-4 h-4 text-blue-400 shrink-0" />
              <span>横手のかまくら＆ミニかまくら</span>
            </div>
            <div className="flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-blue-400 shrink-0" />
              <span>小安峡大噴湯＆巨大氷柱しがっこ</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-blue-400 shrink-0" />
              <span>本場稲庭うどん＆幻の皆瀬牛</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Section 1: エリア解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Destination Overview</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Snowflake className="w-6 h-6 text-blue-500 shrink-0" />
              白銀に灯るかまくらの温もりと大噴湯の湯煙！冬の秋田県南の息吹
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              日本屈指の豪雪地帯として知られる秋田県南部。横手盆地を潤す雄物川沿いの横手市では、450年以上の歴史を誇る小正月行事「横手のかまくら」が冬の風物詩として愛されています。雪で作られた高さ3メートルほどのかまくらの中には水神様が祀られ、地元の子どもたちが「はいってたんせ（入ってください）」「おがんでたんせ（拝んでください）」と声をかけ、甘酒や焼いたお餅を振る舞います。蛇の崎川原に広がる数千個のミニかまくらに灯るローソクの明かりは、冬の夜の寒さを忘れさせる心温まる絶景です。
            </p>
            <p>
              そこから南へ、湯沢市の山あいに深く刻まれた「小安峡（おやすきょう）」へ足を踏み入れると、大自然の躍動に圧倒されます。V字谷の断崖の岩肌から、98度もの高温蒸気と温泉水がゴーゴーと音を立てて噴き出す「大噴湯」。厳冬期には、岩肌を伝う地下水が凍りつき、巨大なつらら群「しがっこ」となって氷の柱を形成。激しい湯煙と氷柱の青白いコントラストは、まさに地球の息吹を感じさせる神秘のアートです。
            </p>
            <p>
              厳しい寒さの中で育まれた食文化も秋田県南の誇り。約350年前から受け継がれる手綯い製法の「稲庭うどん」は、シルクのような滑らかな喉越しで、冬の温かい比内地鶏出汁との相性が抜群。さらに幻の銘柄和牛「皆瀬牛」や熱々のきりたんぽ鍋、秋田杉の香る源泉掛け流し風呂が、冷えた体を芯から包み込んでくれます。
            </p>
          </div>
        </section>

        {/* Section 2: 宿泊施設一覧 */}
        <section className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Featured Accommodations</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Building className="w-6 h-6 text-blue-500 shrink-0" />
              横手＆湯沢・小安峡で泊まりたい冬の厳選宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              ※楽天トラベルの最新APIデータを反映。駅前天然温泉、秋田杉の名湯、幻の皆瀬牛、文人ゆかりの極上離れ宿を厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((h) => (
              <article key={h.id} className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
                  <div className="lg:col-span-5 space-y-3">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                      <img 
                        src={h.img} 
                        alt={h.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-xs font-bold">
                        第{h.id}位
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                      <div className="flex items-center gap-1 text-blue-600 font-bold text-sm">
                        <Star className="w-4 h-4 fill-blue-500 text-blue-500" />
                        <span>{h.rating}</span>
                        <span className="text-slate-400 font-normal">({h.reviews}件)</span>
                      </div>
                      <div className="text-slate-600 font-medium">
                        目安: <span className="text-slate-900 font-bold text-sm">{h.price}</span>/人
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                        <a href={h.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                          {h.name}
                          <ExternalLink className="w-4 h-4 text-slate-400 shrink-0" />
                        </a>
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        {h.access}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                        {h.story}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="text-xs text-slate-700 bg-blue-50/50 p-2.5 rounded-lg border border-blue-100/60">
                        <strong className="text-blue-800 block mb-0.5">客室の魅力:</strong>
                        {h.roomTip}
                      </div>
                      <div className="text-xs text-slate-700 bg-amber-50/50 p-2.5 rounded-lg border border-amber-100/60">
                        <strong className="text-amber-800 block mb-0.5">冬の料理のこだわり:</strong>
                        {h.gourmetTip}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">宿泊ハイライト</h4>
                      <ul className="grid grid-cols-1 gap-1 text-xs text-slate-600">
                        {h.highlights.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all gap-1.5"
                      >
                        <span>空室・宿泊プランを楽天トラベルで確認</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 3: 冬の見どころ＆アクティビティ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Sightseeing & Nature</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Thermometer className="w-6 h-6 text-blue-500 shrink-0" />
              雪と氷が創り出す奇跡！横手・湯沢エリアの冬の必訪スポット
            </h2>
          </div>

          <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            <div className="border-l-4 border-blue-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                1. 小安峡大噴湯の「巨大氷柱しがっこ」と立ち上る白煙
              </h3>
              <p className="text-xs sm:text-sm">
                皆瀬川が削り出した深さ60mのV字谷。谷底の岩壁から98度の高熱蒸気が勢いよく噴き出す「大噴湯」は、冬期には断崖絶壁に巨大な氷柱群「しがっこ」がびっしりと垂れ下がります。湯煙とつららが交差する神秘的な光景は、遊歩道から間近に体感でき、地球の鼓動を肌で感じる大迫力のスポットです。
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                2. 横手市ふれあいセンター「かまくら館」常設かまくら体験
              </h3>
              <p className="text-xs sm:text-sm">
                横手市役所本庁舎前に位置するかまくら館では、室温マイナス10度に保たれた冷凍室の中に本物の雪で作られたかまくらが常設されています。防寒用の半纏（はんてん）を羽織ってかまくらの中に入れば、外の音が遮断された静けさと、雪壁の不思議な温もりを一年中体感できます。
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                3. 日本三大うどん「佐藤養助 総本店」の稲庭うどん手綯い見学
              </h3>
              <p className="text-xs sm:text-sm">
                湯沢市稲庭町にある創業万延元年の老舗「佐藤養助 総本店」。職人たちが熟練の技で麺を一本一本手作業で綯（な）う製造工程をガラス越しに見学できます。併設の食事処では、出来立ての温かい稲庭うどんを比内地鶏の極上つけ汁でいただく贅沢なランチが楽しめます。
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                4. 川原毛地獄（かわらげじごく）と秋の宮温泉郷の秘湯散策
              </h3>
              <p className="text-xs sm:text-sm">
                日本三大霊地の一つに数えられる川原毛地獄。冬期は積雪のため一部立ち入りが制限されますが、山麓の秋の宮温泉郷は湯量豊富な名湯が点在。荒川渓谷沿いに湧く硫黄泉に浸かり、雪に包まれた静かな温泉街を歩く時間は、大人の湯治旅に最高の癒やしをもたらします。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: 冬の美食 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Gastronomy</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-blue-500 shrink-0" />
              雪国秋田が誇る極上グルメ！手綯い稲庭うどん・幻の皆瀬牛・横手やきそば
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-blue-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                伝統手綯い「本場稲庭うどん」
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                練る・綯う・延ばすの工程を職人が全て手作業で行う伝統の平打ち麺。繊細な細さでありながら強いコシがあり、ツルツルとしたシルクのような喉越しが絶品です。冬は熱々の比内地鶏鍋の〆や温かいかけうどんで至福の味を堪能できます。
              </p>
            </div>

            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-blue-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                幻の希少黒毛和牛「皆瀬牛」
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                小安峡のある皆瀬地区で丹精込めて育てられる極少生産の黒毛和牛。きめ細やかな霜降りと肉本来の力強い旨味が特徴で、県外には滅多に出回らない幻の味。陶板焼きやステーキで噛みしめれば、芳醇な肉汁が溢れます。
              </p>
            </div>

            <div className="border-l-4 border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-blue-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                横手やきそばと熱々きりたんぽ鍋
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                B-1グランプリ王者に輝いた「横手やきそば」。ストレートの太麺に特製ソースを絡め、半熟の目玉焼きと福神漬けを添えたソウルフードです。また新米あきたこまちで作る本場のきりたんぽ鍋は、冬の寒さを吹き飛ばす最高のあったか鍋です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: 雪道運転＆防寒ガイド */}
        <section className="bg-blue-50/60 rounded-2xl p-6 sm:p-10 border border-blue-100 space-y-6">
          <div className="border-b border-blue-200/60 pb-4">
            <span className="text-blue-700 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Access & Preparation</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
              豪雪地帯を安全に旅する！スタッドレスタイヤ＆完全防寒の心得
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="bg-white p-5 rounded-xl border border-blue-100 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-blue-600" />
                服装と足元の完全防寒対策
              </h3>
              <p>
                横手・湯沢は厳冬期には積雪が1メートルを超え、気温も氷点下に達します。厚手のダウンコート、保温性の高いインナー、フリースの重ね着が必須。足元は圧雪やシャーベット状の雪で濡れやすいため、完全防水で滑り止めの付いた防寒スノーブーツをご着用ください。耳当て付き帽子、手袋、ネックウォーマーも必須携行品です。
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-blue-100 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Compass className="w-4 h-4 text-blue-600" />
                雪道運転とレンタカーの選び方
              </h3>
              <p>
                レンタカーを利用する場合は、必ず「4WD（四輪駆動）＋最新スタッドレスタイヤ」を選択してください。国道13号・398号は除雪体制が整っていますが、吹雪による視界不良（ホワイトアウト）やわだち（轍）でのハンドル取られに注意が必要です。時間に余裕を持ったスケジュールを組み、日没前のチェックインを心がけましょう。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: モデルコース */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-blue-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Itinerary</span>
            <h2 className="text-xl sm:text-3xl font-bold text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-blue-400 shrink-0" />
              かまくら体験と小安峡大噴湯雪見露天を満喫する1泊2日モデルコース
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-blue-300 text-lg">
                <span className="bg-blue-600 text-white text-xs px-2.5 py-1 rounded-md">Day 1</span>
                <span>横手到着・かまくら館体験と小安峡温泉雪見露天風呂</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>11:30</strong> 秋田空港または秋田新幹線大曲駅経由で横手駅へ到着。駅前の名店で目玉焼きのった熱々「横手やきそば」ランチ。
                </p>
                <p>
                  <strong>13:00</strong> 「横手市ふれあいセンターかまくら館」へ。マイナス10度の冷凍室で本物の雪かまくらの中に入り記念撮影。
                </p>
                <p>
                  <strong>14:30</strong> 湯沢・皆瀬方面へドライブ。小安峡温泉の老舗宿（多郎兵衛旅館など）へチェックイン。
                </p>
                <p>
                  <strong>15:30</strong> 「小安峡大噴湯」へ。断崖から立ち上る猛烈な湯煙と青白い巨大つらら「しがっこ」の共演を間近に体感。
                </p>
                <p>
                  <strong>17:00</strong> 宿に戻り、樹齢百年の秋田杉風呂や雪見露天風呂に浸かり、体の芯までポカポカに温まる。
                </p>
                <p>
                  <strong>18:30</strong> 幻の皆瀬牛の陶板焼きステーキや本場比内地鶏のきりたんぽ鍋、秋田の銘酒に酔いしれる。
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-blue-300 text-lg">
                <span className="bg-blue-600 text-white text-xs px-2.5 py-1 rounded-md">Day 2</span>
                <span>朝の雪見風呂・稲庭うどん手綯い見学とお土産買い出し</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>08:00</strong> 澄み渡る白銀の渓谷を眺めながら朝の露天風呂に入浴。
                </p>
                <p>
                  <strong>09:00</strong> あきたこまちのご飯と山菜の小鉢、温かい味噌汁の和朝食をゆっくり楽しむ。
                </p>
                <p>
                  <strong>10:30</strong> 湯沢市稲庭町の「佐藤養助 総本店」へ。職人による稲庭うどんの手綯い工程を見学。
                </p>
                <p>
                  <strong>12:00</strong> 総本店の食事処で、温かい比内地鶏つけうどんの贅沢ランチ。お土産用の稲庭干饂飩を購入。
                </p>
                <p>
                  <strong>14:00</strong> 道の駅「十文字」で秋田銘菓やいぶりがっこ、地酒をお買い物し、横手駅または空港へ向かい帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              冬の横手＆湯沢・小安峡旅行 よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-5 bg-slate-50/30 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-blue-600 font-extrabold shrink-0">Q.</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: 周遊内部リンク */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-blue-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              あわせて楽しむ！東北・秋田の冬特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <Link 
              href="/winter-akita-oga-onsen-ishiyaki-namahage-snow-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-blue-400 block mb-1">男鹿半島冬特集</span>
              <span className="font-bold text-white block">男鹿温泉！冬のなまはげと名物石焼き鍋・雪の日本海名宿</span>
            </Link>

            <Link 
              href="/winter-yamagata-ginzan-onsen-snow-taisho-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-blue-400 block mb-1">銀山温泉冬特集</span>
              <span className="font-bold text-white block">銀山温泉！大正ロマンのガス灯雪景色と尾花沢牛名宿</span>
            </Link>

            <Link 
              href="/winter-iwate-hanamaki-onsen-yukimi-maesawa-beef-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-blue-400 block mb-1">花巻温泉冬特集</span>
              <span className="font-bold text-white block">花巻温泉郷！雪見露天風呂と前沢牛・宮沢賢治イーハトーブ名宿</span>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer Navigation */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200 mt-16 text-center text-xs text-slate-500">
        <p>© 2026 地域の宿探訪 - 日本の四季と極上ホテル・旅館を巡る旅</p>
      </footer>
    
      <HubRelatedPosts currentSlug="winter-akita-yokote-kamakura-oyasukyo-shigakko-inaniwa-stay" />
</div>
  );
}
