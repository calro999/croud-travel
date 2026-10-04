import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Landmark, Snowflake, ShieldCheck, Footprints, Coffee, Camera, Sun, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【12・1月福島】猪苗代湖＆磐梯熱海温泉！奇跡の「しぶき氷」と白鳥飛来・雪見露天風呂と会津地鶏・福島牛名宿5選",
  description: "厳冬期の福島・猪苗代湖は、大自然が創り出す奇跡の氷結アート「しぶき氷」と、シベリアから飛来する数千羽の優雅な白鳥たちが出迎える幻想的な白銀の世界です。湖畔の天神浜では強い西風と波しぶきが樹木を凍りつかせ、巨大な氷の彫刻のような絶景が出現。冠雪した秀峰・磐梯山を背に、開湯800年を誇る「萩姫伝説」の名湯・磐梯熱海温泉の美肌雪見露天風呂で体の芯まで温まる至福のひととき。会津地鶏、新鮮な極上馬刺し、福島牛すき焼きの美食を堪能する厳選名宿5選を徹底解説します。",
  keywords: '猪苗代湖 ホテル, 磐梯熱海温泉 旅館, 猪苗代湖 しぶき氷, 猪苗代湖 白鳥, 磐梯山 雪景色, ホテルリステル猪苗代, ホテル華の湯, 四季彩一力, 守田屋, 12月 1月 福島 観光',
  alternates: {
    canonical: 'https://croud-travel.com/winter-fukushima-inawashiro-lake-shibukigori-swan-onsen-stay'
  },
  openGraph: {
    title: "【12・1月福島】猪苗代湖＆磐梯熱海温泉！奇跡の「しぶき氷」と白鳥飛来・雪見露天風呂と会津地鶏・福島牛名宿5選",
    description: "厳冬期の福島・猪苗代湖は、大自然が創り出す奇跡の氷結アート「しぶき氷」と、シベリアから飛来する数千羽の優雅な白鳥たちが出迎える幻想的な白銀の世界です。湖畔の天神浜では強い西風と波しぶきが樹木を凍りつかせ、巨大な氷の彫刻のような絶景が出現。冠雪した秀峰・磐梯山を背に、開湯800年を誇る「萩姫伝説」の名湯・磐梯熱海温泉の美肌雪見露天風呂で体の芯まで温まる至福のひととき。会津地鶏、新鮮な極上馬刺し、福島牛すき焼きの美食を堪能する厳選名宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-fukushima-inawashiro-lake-shibukigori-swan-onsen-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/5300/5300.jpg",
      width: 1200,
      height: 630,
      alt: '冬の猪苗代湖と磐梯山の雪景色'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【12・1月福島】猪苗代湖＆磐梯熱海温泉！奇跡の「しぶき氷」と白鳥飛来・雪見露天風呂と会津地鶏・福島牛名宿5選",
    description: "厳冬期の福島・猪苗代湖は、大自然が創り出す奇跡の氷結アート「しぶき氷」と、シベリアから飛来する数千羽の優雅な白鳥たちが出迎える幻想的な白銀の世界です。湖畔の天神浜では強い西風と波しぶきが樹木を凍りつかせ、巨大な氷の彫刻のような絶景が出現。冠雪した秀峰・磐梯山を背に、開湯800年を誇る「萩姫伝説」の名湯・磐梯熱海温泉の美肌雪見露天風呂で体の芯まで温まる至福のひととき。会津地鶏、新鮮な極上馬刺し、福島牛すき焼きの美食を堪能する厳選名宿5選を徹底解説します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/5300/5300.jpg"]
  }
};

export default function FukushimaInawashiroBandaiWinterPage() {
  const hotelsData = [
            {
              id: 1,
              name: "ホテルリステル猪苗代ウイングタワー",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5300/5300.jpg",
              rating: 4.12,
              reviews: 3663,
              price: "¥6,800〜",
              access: "磐越西線猪苗代駅より送迎バス有※前日17:00までに要予約　磐越自動車道猪苗代ICより１０分",
              special: "ヨーロピアンクラシカル調の高層ホテル。全室より猪苗代湖を一望する四季のパノラマが魅力です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5300%2F5300.html",
              story: "猪苗代湖を眼下に一望する高台にそびえ立ち、ヨーロッパの優雅な城を思わせるタワーホテル「ホテルリステル猪苗代ウイングタワー」。全室から猪苗代湖の雄大なレイクビューまたは雪化粧した磐梯山のパノラマを望めるオールシーズンリゾートです。敷地内から湧出する自家源泉「猪苗代温泉」は、肌触りの柔らかなアルカリ性単純温泉。冬期は雪景色が広がる庭園露天風呂で、冷気を感じながら温かい湯に浸かる贅沢な雪見風呂を楽しめます。夕食は和洋中ディナービュッフェで、冬の福島県産黒毛和牛や郷土料理のこづゆ、熱々の鍋料理が並び、ファミリーからシニアまで大満足のステイが叶います。ホテル直結のスキー場もあり、冬のアクティビティ拠点としても抜群です。",
              roomTip: "ウイングタワー高層階レイクビュールーム。眼下に広がる広大な猪苗代湖の白銀湖畔をパノラマで見下ろす絶景空間。",
              gourmetTip: "「冬の和洋中ディナービュッフェ」。目の前で焼き上げる牛ステーキや、会津の郷土料理「こづゆ」、地元米会津コシヒカリの熱々ご飯。",
              highlights: [
                "猪苗代湖一望の高原リゾート・自家源泉の雪見庭園露天風呂・和洋中ディナー",
                "ホテル直結スキー場・ファミリールーム完備・猪苗代湖パノラマビュー",
                "会津コシヒカリと福島県産牛・猪苗代駅からの無料送迎バス運行"
              ]
            },
            {
              id: 2,
              name: "磐梯熱海温泉　ホテル華の湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15988/15988.jpg",
              rating: 4.40,
              reviews: 3412,
              price: "¥9,900〜",
              access: "磐越自動車道磐梯熱海ＩＣより車で8分、磐越西線磐梯熱海駅より送迎可能です。（要連絡）",
              special: "ファミリーに人気のビュッフェダイニングや、露天風呂付客室でゆったり贅沢な大人旅を！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15988%2F15988.html",
              story: "清流・五百川のせせらぎ沿いに建ち、多彩な湯巡りが自慢の大型温泉旅館「磐梯熱海温泉 ホテル華の湯」。館内にはなんと30種類もの湯船が点在し、展望露天風呂や庭園露天風呂、桧風呂、立ち湯など、趣の異なる温泉三昧を満喫できます。特に冬の澄み渡る夜空を見上げる屋上展望露天風呂「宙（そら）の湯」からの雪景色と星空は圧巻。泉質はph9.1を誇るアルカリ性単純温泉で、角質をやさしく落とす美肌効果から「美人の湯」として親しまれています。料理は地元契約農家から仕入れる減農薬野菜や福島牛、会津地鶏を盛り込んだ創作会席「華風会席」。冬の五感を温かく満たしてくれます。",
              roomTip: "風の館 和洋室（五百川ビュー）。川のせせらぎと対岸の雪木立を眺めながら、ゆったりと寛げる上質なモダン客室。",
              gourmetTip: "創作会席「華風会席」。厳選福島牛の陶板焼きや会津地鶏のつみれ鍋など、冬の寒さを忘れさせる温かな郷土の美食。",
              highlights: [
                "30種類の湯巡り・屋上展望露天「宙の湯」からの雪景色星空・美肌アルカリ泉",
                "五百川の渓流沿い・契約農家野菜の華風会席・広々とした快適客室",
                "ph9.1の極上美人の湯・冬の湯巡り手形・郡山駅からのアクセス良好"
              ]
            },
            {
              id: 3,
              name: "磐梯熱海温泉　四季彩　一力",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/27936/27936.jpg",
              rating: 4.32,
              reviews: 1037,
              price: "¥12,100〜",
              access: "ＪＲ郡山駅より磐梯西線乗換、磐梯熱海駅（１５分）下車、徒歩５分/磐越自動車道磐梯熱海ICより１０分",
              special: "創業100年！季節の花木を愛でる日本庭園の眺望。温泉と自慢の料理で至福のひと時を。 ワーケーション可",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27936%2F27936.html",
              story: "皇族や文人墨客にも愛されてきた創業百余年の老舗高級旅館「磐梯熱海温泉 四季彩 一力（いちりき）」。五百川に面した広大な日本庭園「水輪園」を抱き、冬には見事な雪吊りと白銀の雪景色が静寂の中に浮かび上がります。客室の大きな窓からは一枚の日本画のような雪庭が広がり、日常の喧騒を完全に忘れさせてくれます。大浴場や露天風呂に注ぐ名湯は源泉かけ流し。ぬくもりのある木造りの湯船で五百川のせせらぎを聞きながら極上の雪見風呂を堪能できます。夕食は旬の最高級食材を贅沢に用いた本格懐石料理。冬の日本海の寒魚や福島牛、手打ち蕎麦が美しい器に彩られ、至高の時間を演出します。",
              roomTip: "庭園露天風呂付き客室。雪化粧した名園「水輪園」を独占しながら、誰にも邪魔されず名湯に浸かる究極のプライベートステイ。",
              gourmetTip: "料理長渾身の「冬の特選会席」。厳選黒毛和牛のしゃぶしゃぶやすき焼き、冬の旬魚の造り、地元の美酒ペアリングが秀逸。",
              highlights: [
                "創業百余年の名門老舗宿・名園「水輪園」の雪景色・本格懐石と名湯かけ流し",
                "皇族も訪れた格式・五百川のせせらぎ・日本庭園の雪吊りライトアップ",
                "極上福島牛と冬の寒魚・贅を尽くしたプライベート雪見ステイ"
              ]
            },
            {
              id: 4,
              name: "磐梯熱海温泉　あたたかい記憶が宿る　守田屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/69244/69244.jpg",
              rating: 4.57,
              reviews: 286,
              price: "¥21,100〜",
              access: "磐越西線　磐梯熱海駅よりタクシー３分「送迎なし」／磐越自動車道　磐梯熱海ＩＣより車で１０分",
              special: "源泉掛け流し100％の露天風呂付客室★料理評価は抜群★リピーターが足繁く通う大人の隠れ宿！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F69244%2F69244.html",
              story: "全室に源泉かけ流しの露天風呂または半露天風呂を備えた大人のための隠れ宿「磐梯熱海温泉 あたたかい記憶が宿る 守田屋（もりたや）」。わずか9室のみの贅沢な設えで、プライベート感を重視するカップルやご夫婦に絶大な人気を誇ります。客室の湯船には磐梯熱海の名湯が24時間掛け流され、冬の雪が舞い散るなか、好きな時に好きなだけ温まることができます。夕食はプライベートな個室ダイニングでいただく創作和食会席。福島牛のサーロインステーキや旬の地魚、彩り豊かな前菜が並び、細やかなもてなしの心と美味しい料理が心に残る温かい記憶を刻んでくれます。",
              roomTip: "テラス露天風呂付き客室。雪見テラスにしつらえられた信楽焼や桧の露天風呂で、冬の冷気と熱い名湯のコントラストを堪能。",
              gourmetTip: "個室で味わう「福島牛ステーキ付き創作会席」。きめ細やかなサシが入った福島牛を石焼きで。会津の地酒との相性も抜群。",
              highlights: [
                "全室客室露天風呂付き・大人の隠れ宿・個室で味わう福島牛ステーキ会席",
                "全9室のプライベート空間・24時間かけ流し美肌湯・細やかなおもてなし",
                "信楽焼や桧の客室風呂・記念日やご褒美旅行に最適な静寂"
              ]
            },
            {
              id: 5,
              name: "猪苗代湖　ＬＡＫＥ　ＳＩＤＥ　ＨＯＴＥＬ　みなとや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13884/13884.jpg",
              rating: 3.80,
              reviews: 189,
              price: "¥6,050〜",
              access: "【必見】湖畔レジャー＆テントサウナも大人気★磐越道『猪苗代磐梯高原IC』車10分／『猪苗代駅』バス10分、長浜バス停",
              special: "猪苗代湖がすぐ目前！本格中国料理×麦飯石の湯を満喫できる",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13884%2F13884.html",
              story: "猪苗代湖の北岸・長浜に位置し、白鳥が飛来する白鳥浜まで徒歩わずか1分の好立地を誇る「猪苗代湖 LAKE SIDE HOTEL みなとや」。宿の目の前に広がる穏やかな湖面と、冬の空を優雅に舞う白鳥たちを間近に感じられるアットホームなレイクサイドホテルです。自家源泉の天然温泉大浴場からは湖を一望でき、朝湯に浸かりながら白鳥たちの鳴き声に耳を傾ける清々しい朝を迎えられます。名物は会津名産の「極上馬刺し」や中華料理を取り入れたボリューム満点の夕食。リーズナブルな価格設定と心温まるおもてなしで、冬のしぶき氷散策や写真撮影の拠点として写真愛好家にも広く親しまれています。",
              roomTip: "レイクビュー和室。窓を開ければすぐそこに猪苗代湖が広がり、冬の朝霧と白鳥たちの優雅な姿を部屋から眺望。",
              gourmetTip: "会津名物「極上赤身馬刺し」と自家製本格中華ディナー。あっさりとした赤身馬刺しを特製辛味噌だれでいただく本場の味。",
              highlights: [
                "白鳥浜まで徒歩1分・自家源泉レイクビュー温泉・本場会津馬刺しと中華美食",
                "アットホームな温かい宿・写真撮影や観光拠点に抜群のコスパ",
                "朝風呂から白鳥を眺める贅沢・冬のしぶき氷散策ツアーにも至便"
              ]
            }
  ];

  const faqData = [
  {
    "q": "猪苗代湖の奇跡の絶景「しぶき氷」とは？見頃の時期と発生場所は？",
    "a": "「しぶき氷」とは、厳冬期（例年1月上旬〜2月中旬頃）に、猪苗代湖の強い西風によって吹き上げられた湖水が岸辺の樹木に吹き付けられ、幾重にも氷結して創り出される天然の氷の彫刻アートです。国内でも極めて珍しい現象で、主な発生場所は湖の北東岸にある「天神浜（小平潟天神宮の裏手）」です。天候や気温（氷点下の日が続いた後）によって造形が日々変化し、巨大な鍾乳石のような氷の柱が連なる姿は圧巻です。"
  },
  {
    "q": "しぶき氷を見に行く際の服装・靴・持ち物の注意点は？",
    "a": "天神浜駐車場からしぶき氷のスポットまでは雪道を片道約15〜20分歩く必要があります。湖畔は吹き晒しで強風が吹くため体感温度は氷点下10度近くになります。完全防寒のダウンジャケット、スキーウェア、ニット帽、厚手の手袋が必須です。足元はスニーカー厳禁で、防水のスノーブーツまたは防寒長靴に簡易アイゼン（チェーンスパイク）を装着するのが安全です。スマホやカメラのバッテリーも寒さで急激に減るためカイロで温めておきましょう。"
  },
  {
    "q": "猪苗代湖畔で白鳥を見学できるおすすめスポットと時期は？",
    "a": "例年11月上旬から翌年3月中旬頃まで、シベリアから数千羽の白鳥（オオハクチョウ・コハクチョウ）が越冬のために飛来します。見学のベストスポットは「長浜（遊覧船乗り場周辺）」や「白鳥浜」、そして「志田浜」です。特に長浜は湖岸近くまで白鳥たちが優雅に泳ぎ、磐梯山を背景に飛び立つ姿を間近で観察・撮影できます。早朝や夕暮れ時は水面に朝焼け・夕焼けが反射し、息を呑むほど幻想的な光景が広がります。"
  },
  {
    "q": "磐梯熱海温泉の特徴と泉質、冬の雪見露天風呂の魅力は？",
    "a": "磐梯熱海温泉は、約800年前に不治の病に苦しむ萩姫が夢のお告げに従って湯に入り全快したという「萩姫伝説」が残る名湯です。泉質はph9前後のアルカリ性単純温泉で、肌の不要な角質を落としツルツルにしてくれることから「美人の湯」として知られます。冬は五百川沿いの雪景色や雪吊りを施した日本庭園を眺めながらの雪見露天風呂が醍醐味で、冷えた大気と柔らかな湯の温もりが最高の癒やしをもたらします。"
  },
  {
    "q": "冬の猪苗代・磐梯熱海への車や電車のアクセス方法は？",
    "a": "車の場合、磐越自動車道「磐梯熱海IC」または「猪苗代磐梯高原IC」を利用します。冬期の会津・猪苗代エリアは豪雪地帯であり、湖畔道路や峠道は完全な圧雪・凍結路面となります。必ずスタッドレスタイヤ（4WD推奨）を装着し、急ハンドル・急ブレーキを避けて慎重に運転してください。電車の場合は、JR東北新幹線「郡山駅」からJR磐越西線に乗り換え、磐梯熱海駅（約15分）または猪苗代駅（約35分〜40分）で下車。多くの宿が駅から無料送迎を行っています。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-fukushima-inawashiro-lake-shibukigori-swan-onsen-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-fukushima-inawashiro-lake-shibukigori-swan-onsen-stay"
        },
        "headline": "【12・1月福島】猪苗代湖＆磐梯熱海温泉！奇跡の「しぶき氷」と白鳥飛来・雪見露天風呂と会津地鶏・福島牛名宿5選",
        "description": "厳冬期の福島・猪苗代湖は、大自然が創り出す奇跡の氷結アート「しぶき氷」と、シベリアから飛来する数千羽の優雅な白鳥たちが出迎える幻想的な白銀の世界です。湖畔の天神浜では強い西風と波しぶきが樹木を凍りつかせ、巨大な氷の彫刻のような絶景が出現。冠雪した秀峰・磐梯山を背に、開湯800年を誇る「萩姫伝説」の名湯・磐梯熱海温泉の美肌雪見露天風呂で体の芯まで温まる至福のひととき。会津地鶏、新鮮な極上馬刺し、福島牛すき焼きの美食を堪能する厳選名宿5選を徹底解説します。",
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
            "name": "猪苗代湖＆磐梯熱海温泉冬特集",
            "item": "https://croud-travel.com/winter-fukushima-inawashiro-lake-shibukigori-swan-onsen-stay"
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
      <header className="relative bg-gradient-to-br from-slate-950 via-cyan-950 to-blue-950 text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.2),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-medium">
            <Snowflake className="w-4 h-4 text-cyan-300" />
            <span>12月・1月冬の白銀レイク＆雪見名湯特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-6">
            猪苗代湖＆磐梯熱海温泉！<br className="hidden sm:inline" />
            奇跡の「しぶき氷」と白鳥飛来・雪見露天風呂と会津地鶏・福島牛名宿5選
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            厳冬期の猪苗代湖（天鏡湖）は、氷点下の強風と波しぶきが岸辺の樹木を凍らせて創り出す奇跡の自然氷結アート「しぶき氷」と、シベリアから飛来する数千羽の優雅な白鳥たちが出迎える白銀の別世界。冠雪した秀峰・磐梯山を望み、開湯800年「萩姫伝説」の美肌湯・磐梯熱海温泉で極上の雪見風呂に浸かる。会津地鶏、極上馬刺し、福島牛の贅沢な味覚を味わう至高の冬旅へご案内します。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-200 border-t border-slate-700/60 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>旬期：12月下旬〜2月（厳冬期）</span>
            </div>
            <div className="flex items-center gap-2">
              <Snowflake className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>天神浜の天然しぶき氷アート</span>
            </div>
            <div className="flex items-center gap-2">
              <Mountain className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>冠雪磐梯山＆白鳥浜の白鳥</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>磐梯熱海温泉の美肌雪見露天</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Section 1: エリア解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Destination Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Snowflake className="w-6 h-6 text-cyan-500 shrink-0" />
              氷と白鳥が織りなす冬の奇跡！猪苗代湖のしぶき氷と名湯・磐梯熱海の魅力
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              福島県の中央に広がる「猪苗代湖」は、日本で4番目の広さを誇り、鏡のように澄み切った水面から別名「天鏡湖（てんきょうこ）」とも呼ばれます。冬が深まる1月から2月にかけて、この湖畔には世界でも滅多に見られない奇跡の自然現象「しぶき氷（しぶきごおり）」が現れます。西から吹き付ける冷たい強風によって巻き上げられた湖水が、東岸・天神浜の樹木に吹き付けられ、幾重にも重なって氷結。自然が削り出した巨大な氷の鍾乳洞やオブジェのような光景は、息を呑むほどの神秘的な美しさを放ちます。
            </p>
            <p>
              湖畔の長浜や白鳥浜には、シベリアから厳しい冬を越すために飛来した数千羽の白鳥たちが群れ集まります。冠雪した秀峰・磐梯山（標高1,816m）の雄姿を背景に、水面を滑るように泳ぎ、羽ばたく姿はまるで絵画のよう。冬の朝霧が立ち込める静寂の湖畔は、訪れる人の心を深く洗ってくれます。
            </p>
            <p>
              そして冷え切った体を優しく温めてくれるのが、郡山の奥座敷「磐梯熱海温泉」です。約800年前、不治の皮膚病に悩む都の姫・萩姫がこの温泉に入って完治したという伝説から「美人の湯」として語り継がれてきました。肌にしっとりと吸い付くアルカリ性の名湯に身を委ね、五百川のせせらぎや雪化粧した木立を眺める雪見露天風呂は、冬の東北旅における究極の贅沢です。
            </p>
          </div>
        </section>

        {/* Section 2: 宿泊施設一覧 */}
        <section className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Building className="w-6 h-6 text-cyan-500 shrink-0" />
              猪苗代湖＆磐梯熱海温泉で泊まりたい冬の厳選名宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              ※楽天トラベルの最新APIデータを反映。レイクビューの雪見風呂、多彩な湯巡り、会津地鶏と福島牛の美食を誇る名宿を厳選。
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
                      <div className="flex items-center gap-1 text-cyan-500 font-bold text-sm">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
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
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                        <span>{h.access}</span>
                      </div>

                      <h3 className="text-lg sm:text-2xl font-bold text-slate-900 hover:text-cyan-600 transition-colors">
                        <a href={h.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                          {h.name}
                          <ExternalLink className="w-4 h-4 text-slate-400 shrink-0" />
                        </a>
                      </h3>

                      <p className="text-xs text-cyan-700 bg-cyan-50 border border-cyan-200/60 rounded-md px-2.5 py-1 mt-2 inline-block font-medium">
                        {h.special}
                      </p>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-3">
                        {h.story}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
                      <div className="bg-slate-50 rounded-lg p-3 space-y-1.5">
                        <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>おすすめ客室：</span>
                          <span className="font-normal text-slate-600">{h.roomTip}</span>
                        </div>
                        <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                          <Utensils className="w-3.5 h-3.5 text-cyan-500" />
                          <span>冬の美食ポイント：</span>
                          <span className="font-normal text-slate-600">{h.gourmetTip}</span>
                        </div>
                      </div>

                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-slate-500">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                            <span className="truncate">{hl}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2">
                        <a
                          href={h.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-bold py-2.5 px-4 rounded-xl text-sm shadow-sm transition-all text-center"
                        >
                          <span>空室状況・宿泊プランを見る（楽天トラベル）</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 3: 気候・服装・持ち物ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Climate & Packing Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Sun className="w-6 h-6 text-cyan-500 shrink-0" />
              猪苗代湖・磐梯熱海の冬の気候と時期別おすすめの服装・防寒対策
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-cyan-900 text-base flex items-center justify-between">
                <span>11月下旬〜12月上旬</span>
                <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded font-medium">平均 4℃ / 最低 -2℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                初雪が舞い始め、朝晩は氷点下に冷え込みます。冬用ダウンコート、厚手のマフラー、手袋が必須です。湖畔の長浜では白鳥の飛来が本格化するため、水辺での観察用に風を通さない防寒着と滑り止め付きの暖かいブーツを準備しましょう。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-cyan-900 text-base flex items-center justify-between">
                <span>12月中旬〜年末年始</span>
                <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded font-medium">平均 0℃ / 最低 -5℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                本格的な積雪期に突入。道路は圧雪・凍結路面となるため車のスタッドレスタイヤは絶対必須です。湖畔は冷たい西風が吹き荒れるため、防風・防水性のあるロングダウンやスキーウェア、耳まで覆うニット帽、吸湿発熱インナーを重ね着しましょう。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-cyan-900 text-base flex items-center justify-between">
                <span>1月（しぶき氷・厳冬期）</span>
                <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded font-medium">平均 -3℃ / 最低 -8℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                天神浜のしぶき氷スポットは体感温度が氷点下12度以下に達します。雪道を片道20分歩くため、防水防寒スノーブーツに簡易アイゼン（チェーンスパイク）を装着するのが安全です。厚手手袋、ネックウォーマー、貼るカイロ、カメラ予備バッテリーで万全の重装備を。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: 絶景フォトスポット＆撮影攻略ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Photo Spots & Tips</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Camera className="w-6 h-6 text-cyan-500 shrink-0" />
              冬の猪苗代湖を美しく切り取る！絶景フォトスポット＆撮影テクニック
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600">
            <div className="border border-slate-200 rounded-xl p-5 space-y-2.5 bg-slate-50/50">
              <h3 className="font-bold text-cyan-950 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-600" />
                天神浜の天然しぶき氷アート
              </h3>
              <p className="leading-relaxed">
                晴天の午前中（9:00〜11:00）がベスト。斜光から逆光気味のアングルを選ぶと、樹木を包み込む氷柱の透明感とクリスタルのような輝きが引き立ちます。広角レンズで群生する氷の造形全体を捉えつつ、望遠やマクロで氷の繊細な表情を切り取るのがコツです。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-2.5 bg-slate-50/50">
              <h3 className="font-bold text-cyan-950 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-600" />
                長浜の白鳥と冠雪磐梯山
              </h3>
              <p className="leading-relaxed">
                朝の清々しい順光時間帯が狙い目。静かな湖面に浮かぶ真っ白な白鳥たちの優雅な群れと、背景に堂々とそびえる雪の磐梯山をバランスよく配置。シャッタースピードを速め（1/1000秒以上）に設定し、羽ばたく瞬間や着水シーンを連写で捉えると躍動感あふれる一枚になります。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-2.5 bg-slate-50/50">
              <h3 className="font-bold text-cyan-950 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-600" />
                磐梯熱海温泉の雪吊り庭園と湯煙
              </h3>
              <p className="leading-relaxed">
                夕暮れ時のトワイライトタイム。五百川沿いの雪景色や名門旅館の庭園に施された雪吊りがライトアップされ、露天風呂から立ち上る白い湯けむりが情緒を掻き立てます。暖色系の露光調整で、雪の白さと温泉宿の温もりを対比させて撮影するのがおすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: 冬の美食＆お土産 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Gourmet & Local Delicacies</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-cyan-500 shrink-0" />
              冬の会津・猪苗代を味わう！会津地鶏・極上馬刺し・福島牛・熱々喜多方ラーメン
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-cyan-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                会津地鶏の鍋＆すき焼き
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                平家の落人が愛育したと伝わる幻の地鶏「会津地鶏」。赤身が濃く、噛むほどに溢れ出す芳醇な肉汁とコク深い脂の旨味が特徴です。冬はシャキシャキの地元野菜とともに水炊きやつみれ鍋、すき焼きで味わうと、体の芯からポカポカに温まります。
              </p>
            </div>

            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-cyan-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                会津名物「極上赤身馬刺し」
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                会津の馬刺しは、脂身の少ない鮮やかな赤身肉が特徴。一切の臭みがなく、驚くほど柔らかく上品な甘みがあります。地元特製のピリッと辛い「にんにく辛子味噌」を醤油に溶いて絡めて食べるのが会津流。地酒との相性は最高です。
              </p>
            </div>

            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-cyan-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                福島牛ステーキ＆喜多方ラーメン
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                豊かな自然と清らかな水で育まれた黒毛和牛「福島牛」。きめ細やかなサシが入ったサーロインステーキや陶板焼きは、とろけるような口どけです。また、手揉み縮れ太麺と澄んだ醤油スープが特徴の喜多方ラーメンも冬の散策に欠かせないご馳走です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: モデルコース */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-cyan-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-3xl font-bold text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-cyan-400 shrink-0" />
              しぶき氷と白鳥に出会う1泊2日冬の王道モデルコース
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-cyan-300 text-lg">
                <span className="bg-cyan-600 text-white text-xs px-2.5 py-1 rounded-md">Day 1</span>
                <span>猪苗代湖の長浜で白鳥見学＆天神浜しぶき氷散策と美肌温泉</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>10:30</strong> 郡山駅からJR磐越西線または車で猪苗代湖畔へ。
                </p>
                <p>
                  <strong>11:30</strong> 猪苗代湖「長浜」に到着。磐梯山をバックに優雅に湖面を漂う白鳥たちを観察。
                </p>
                <p>
                  <strong>12:30</strong> 湖畔の食堂で熱々の名物ラーメンやわっぱ飯ランチ。
                </p>
                <p>
                  <strong>13:45</strong> 「天神浜」へ。完全防寒とスノーブーツで歩き、樹木を包み込む奇跡の自然造形「しぶき氷」を撮影。
                </p>
                <p>
                  <strong>16:00</strong> 磐梯熱海温泉または猪苗代湖畔の宿へチェックイン。名湯の雪見露天風呂で冷えた体を芯から解きほぐす。
                </p>
                <p>
                  <strong>18:30</strong> 会津地鶏鍋や極上馬刺し、福島牛ステーキと会津の銘酒で贅沢な夕餉を。
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-cyan-300 text-lg">
                <span className="bg-cyan-600 text-white text-xs px-2.5 py-1 rounded-md">Day 2</span>
                <span>雪の鶴ヶ城天守閣散策と喜多方ラーメン＆地酒蔵元めぐり</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>08:30</strong> 宿で滋味あふれる温泉朝食を楽しんだ後、会津若松市街へ移動。
                </p>
                <p>
                  <strong>09:45</strong> 「鶴ヶ城（会津若松城）」へ。赤瓦と白壁に純白の雪が映える名城の雪景色を堪能。
                </p>
                <p>
                  <strong>11:30</strong> 会津の伝統的な町並み・七日町通りを散策。老舗の造り酒屋で冬の新酒を試飲。
                </p>
                <p>
                  <strong>13:00</strong> 喜多方へ足を伸ばし、本場の蔵造り店舗で熱々モチモチの喜多方ラーメンを味わう。
                </p>
                <p>
                  <strong>15:00</strong> 会津漆器や赤べこなどの伝統工芸品をお土産に購入し、郡山駅経由で帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              冬の猪苗代湖・磐梯熱海旅行 よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-5 bg-slate-50/30 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-cyan-600 font-extrabold shrink-0">Q.</span>
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
            <span className="text-cyan-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              あわせて楽しむ！東北・福島エリアの冬特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <Link 
              href="/winter-fukushima-urabandai-onsen-goshikinuma-snow-fukushimagyu-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-cyan-400 block mb-1">裏磐梯・五色沼冬特集</span>
              <span className="font-bold text-white block">神秘の五色沼スノーシュー＆裏磐梯パウダースノー名宿</span>
            </Link>

            <Link 
              href="/winter-fukushima-aizu-higashiyama-ashinomaki-snow-tsurugajo-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-cyan-400 block mb-1">会津東山・芦ノ牧冬特集</span>
              <span className="font-bold text-white block">雪の鶴ヶ城と渓谷露天風呂・会津郷土料理と名湯宿</span>
            </Link>

            <Link 
              href="/winter-yamagata-akayu-onsen-yonezawa-beef-wine-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-cyan-400 block mb-1">山形・赤湯温泉冬特集</span>
              <span className="font-bold text-white block">米沢牛すき焼き＆ワイナリーめぐり・赤湯温泉雪見名宿</span>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer Navigation */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200 mt-16 text-center text-xs text-slate-500">
        <p>© 2026 地域の宿探訪 - 日本の四季と極上ホテル・旅館を巡る旅</p>
      </footer>
    </div>
  );
}
