import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Landmark, Flame, ShieldCheck, Footprints, Home, Snowflake, Coffee, Sun
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【12・1月京都】美山かやぶきの里＆丹波！白銀の茅葺き集落雪景色と雪灯廊・冬の最高峰「天然ぼたん鍋」＆里山雪見温泉名宿5選",
  description: "日本の原風景が色濃く残る京都府南丹市「美山かやぶきの里」。12〜1月は茅葺き屋根の上に純白の雪が降り積もり、昔話の世界のような静寂と温もりに包まれます。1月下旬には集落全体が雪灯籠の柔らかな光に照らされる「美山雪灯廊」が開幕。丹波地方の冬の王様・天然猪肉の熱々「ぼたん鍋」や丹波牛、湯の花温泉の美肌露天風呂を満喫できる厳選名宿5選を徹底解説します。",
  keywords: '美山かやぶきの里 冬, 美山雪灯廊, ぼたん鍋 美山, 湯の花温泉 旅館, 渓山閣, すみや亀峰菴, 翠泉, 丹波牛, 河鹿荘, 12月 1月 京都 旅行',
  alternates: {
    canonical: 'https://croud-travel.com/winter-kyoto-miyama-kayabuki-snow-botannabe-tanba-stay'
  },
  openGraph: {
    title: "【12・1月京都】美山かやぶきの里＆丹波！白銀の茅葺き集落雪景色と雪灯廊・冬の最高峰「天然ぼたん鍋」＆里山雪見温泉名宿5選",
    description: "日本の原風景が色濃く残る京都府南丹市「美山かやぶきの里」。12〜1月は茅葺き屋根の上に純白の雪が降り積もり、昔話の世界のような静寂と温もりに包まれます。1月下旬には集落全体が雪灯籠の柔らかな光に照らされる「美山雪灯廊」が開幕。丹波地方の冬の王様・天然猪肉の熱々「ぼたん鍋」や丹波牛、湯の花温泉の美肌露天風呂を満喫できる厳選名宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-kyoto-miyama-kayabuki-snow-botannabe-tanba-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/108931/108931.jpg",
      width: 1200,
      height: 630,
      alt: '雪化粧した美山かやぶきの里の集落と雪灯廊のライトアップ'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【12・1月京都】美山かやぶきの里＆丹波！白銀の茅葺き集落雪景色と雪灯廊・冬の最高峰「天然ぼたん鍋」＆里山雪見温泉名宿5選",
    description: "日本の原風景が色濃く残る京都府南丹市「美山かやぶきの里」。12〜1月は茅葺き屋根の上に純白の雪が降り積もり、昔話の世界のような静寂と温もりに包まれます。1月下旬には集落全体が雪灯籠の柔らかな光に照らされる「美山雪灯廊」が開幕。丹波地方の冬の王様・天然猪肉の熱々「ぼたん鍋」や丹波牛、湯の花温泉の美肌露天風呂を満喫できる厳選名宿5選を徹底解説します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/108931/108931.jpg"]
  }
};

export default function KyotoMiyamaTanbaWinterPage() {
  const hotelsData = [
            {
              id: 1,
              name: "美山町自然文化村　河鹿荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108931/108931.jpg",
              rating: 4.35,
              reviews: 101,
              price: "¥8,250〜",
              access: "ＪＲ　園部駅よりお車にて５０分/舞鶴若狭自動車道「丹南篠山口」ＩＣより国道372→府道１９号で美山町へ",
              special: "≪かやぶき里・美山の宿≫日本の原風景探しの旅へ。美山の杉材を使用したログハウス調の建物が目印。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108931%2F108931.html",
              story: "清流・美山川のせせらぎを聞く大自然の中に建ち、「美山かやぶきの里」への観光拠点として絶大な人気を誇る公営リゾート「美山町自然文化村 河鹿荘（かじかそう）」。本館ロビーには薪ストーブがパチパチと温かい炎を上げ、雪深い冬の里山を訪れた旅人を優しく迎えてくれます。自慢の露天風呂からは、美山の山々と雪景色を見渡すことができ、柔らかなお湯が手足の冷えを心地よく解きほぐします。冬の料理の真骨頂は、地元猟師が仕留めた天然猪肉を使った本場美山の「ぼたん鍋」。秋にドングリや木の実をたっぷり食べて脂がのった猪肉は、特製合わせ味噌の出汁で煮込むほどに柔らかく、噛むほどに芳醇な甘みが口いっぱいに広がります。かやぶき民家の温もりを肌で感じられるアットホームな名宿です。",
              roomTip: "本館和室または別館かじか棟。窓の外に広がる冬枯れの杉木立と白銀の雪景色を眺めながら、静けさに満ちた時間を過ごせます。",
              gourmetTip: "「美山名物・天然猪肉のぼたん鍋会席」。赤身と白身のコントラストが美しい牡丹盛りの猪肉と、地元産の根菜や美山豆腐が織りなす極上の冬の味覚。",
              highlights: [
                "美山かやぶきの里すぐ・薪ストーブの温もりと本場天然猪肉のぼたん鍋会席",
                "美山川沿いの大自然・素朴で心温まるもてなしと手打ち美山そば",
                "雪灯廊シャトルバス運行・冬のアクティビティ派に選ばれる快適設計"
              ]
            },
            {
              id: 2,
              name: "おもてなしの宿　渓山閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67464/67464.jpg",
              rating: 3.94,
              reviews: 455,
              price: "¥12,100〜",
              access: "ＪＲ嵯峨嵐山線　亀岡駅から当館無料送迎バス有り（要事前予約）",
              special: "まったり温泉、たっぷり会席で非日常を。【プロが選ぶ日本の旅館100選】料理・もてなしの達人入選！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67464%2F67464.html",
              story: "戦国武将が刀傷を癒やした伝説が残る京都の奥座敷・亀岡「湯の花温泉」を代表する名門旅館「おもてなしの宿 渓山閣（けいざんかく）」。プロが選ぶ日本のホテル・旅館100選の料理部門に連続入選する実力を誇り、冬の京都の美食を心ゆくまで堪能できます。広々とした大浴場や開放的な庭園露天風呂には、微量のラドンを含む良質な湯の花温泉が注がれ、湯上がり後も体がポカポカと温まり続けます。冬の会席は、厳選されたブランド和牛「丹波牛」の石焼きやしゃぶしゃぶ、冬の旬魚のお造り、丹波野菜の焚き合わせなど、伝統の京料理の技が光る逸品揃い。美山かやぶきの里へのドライブと組み合わせた温泉ステイに最適な格式高い宿です。",
              roomTip: "露天風呂付き客室または特別室。専用の信楽焼湯船で湯の花温泉を満喫し、雪の庭園を眺めながらプライベートな寛ぎを堪能。",
              gourmetTip: "「丹波牛会席」。きめ細やかな霜降りの丹波牛を熱々の石焼きで。濃厚な肉の旨味と上品な脂の甘さが口の中でとろけます。",
              highlights: [
                "プロが選ぶ宿100選連続入選・開放的な大浴場と庭園露天風呂＆丹波牛会席",
                "湯の花温泉の美肌名湯・ファミリーから夫婦旅まで安心の伝統と格式",
                "露天風呂付き客室あり・亀岡駅から無料送迎バス運行でアクセス便利"
              ]
            },
            {
              id: 3,
              name: "京都　湯の花温泉　すみや亀峰菴",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9696/9696.jpg",
              rating: 4.38,
              reviews: 279,
              price: "¥24,200〜",
              access: "JR亀岡駅より車で２０分/京都縦貫道亀岡ICよりR372で約１０分/阪神高速池田線木部ICよりR423で約４０分",
              special: "京都の旅館ならではの日本の伝統美と現代アートの空間で四季折々の京懐石とオーストリアワインを愉しむ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9696%2F9696.html",
              story: "茅葺きの門をくぐると、そこには日常の喧騒を忘れさせる静謐な別世界が広がる大人の隠れ宿「京都 湯の花温泉 すみや亀峰菴（きほうあん）」。オーストリアワインの第一人者としても知られる主人が厳選したワインと、滋味あふれる京懐石のペアリングが全国の美食家を惹きつけてやみません。冬のすみや亀峰菴の主役は、極上の丹波産天然猪肉を用いた「ぼたん鍋」。選び抜かれた白味噌ベースの特製出汁が猪肉の力強い旨味を引き立て、厳選ワインとの相性も抜群です。木々の間に配された露天風呂「森の露天風呂」や貸切露天風呂では、冬の凛とした空気と湯煙に包まれながら、極上のプライベートリトリートを体験できます。",
              roomTip: "温泉露天風呂付き客室「亀峰菴」またはスーペリア和洋室。木のぬくもりと洗練されたデザイナーズ家具が調和した極上空間。",
              gourmetTip: "「冬の特選ぼたん鍋と京懐石コース」。上品な白味噌仕立ての猪鍋と、ソムリエが提案するオーストリア・ナチュラルワインのマリアージュ。",
              highlights: [
                "茅葺き門をくぐる大人の隠れ家・森の露天風呂と白味噌仕立てぼたん鍋＆厳選ワイン",
                "オーストリアワインとのペアリング・静寂を愛する旅行者のための特等席",
                "源泉掛け流し貸切露天風呂・木の香りとデザイナーズ家具の調和"
              ]
            },
            {
              id: 4,
              name: "里山の休日　京都・烟河（けぶりかわ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/27783/27783.jpg",
              rating: 4.47,
              reviews: 1490,
              price: "¥13,900〜",
              access: "JR嵯峨野線 亀岡駅より京阪京都交通バスで２０分、高芝下車徒歩３分／京阪神からお車で約６０分",
              special: "奥京都・湯の花温泉にある京都・烟河。自家農園によるこだわり野菜が味わえる里山情緒豊かな宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27783%2F27783.html",
              story: "里山ののどかな田園風景に溶け込むように佇み、自然の恵みとウェルネスをテーマにした滞在型リゾート「里山の休日 京都・烟河（けぶりかわ）」。自家農園「烟河ファーム」で育てられた新鮮な冬野菜や京都丹波の食材をふんだんに取り入れた里山ダイニングが自慢です。館内はドリンクやラウンジが自由に利用できるオールインクルーシブスタイルで、暖炉のあるラウンジで冬の夜をゆったり過ごせます。大浴場と露天風呂には湯の花温泉が滔々と注がれ、里山を渡る冷たい風を感じながらの雪見露天風呂は格別の心地よさ。丹波牛の石窯グリルや旬の野菜料理を味わい、心身をリセットする贅沢な休日が叶います。",
              roomTip: "露天風呂付き客室「保津川」。テラスの信楽焼露天風呂から雪化粧した里山の田園風景を眺め、湯上がりにはバスローブで寛ぐひととき。",
              gourmetTip: "里山ダイニングの大地を味わうディナーコース。自家農園の甘みたっぷりの冬根菜と、石窯でじっくり焼き上げた丹波牛サーロイン。",
              highlights: [
                "オールインクルーシブの里山ステイ・自家農園の甘み冬野菜と石窯焼き丹波牛",
                "暖炉ラウンジで寛ぐ冬の夜・里山の田園風景を望む開放的なテラス露天",
                "自家源泉の温もり・ウェルネスと美食を両立したリフレッシュ空間"
              ]
            },
            {
              id: 5,
              name: "京ＹＵＮＯＨＡＮＡ　ＲＥＳＯＲＴ　翠泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/141382/141382.jpg",
              rating: 5.00,
              reviews: 110,
              price: "¥40,000〜",
              access: "電車の場合：ＪＲ亀岡駅よりバスにて約20分",
              special: "“特別なおもてなし”と“繊細な飾りあふれる膳に心躍る”そんな『上質の大人のひととき』をごゆるりと",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F141382%2F141382.html",
              story: "わずか13室のみの贅沢な空間で、極上のプライベート感と最高峰の京会席を提供するスモールラグジュアリー「京YUNOHANA RESORT 翠泉（すいせん）」。小学生以下の宿泊をご遠慮いただく大人のための隠れ宿として、静寂を愛する旅行者から圧倒的な支持を集めています。全館に畳が敷き詰められ、客室や貸切露天風呂には湯の花温泉の美肌の湯が満たされています。夕食は個室食事処で一品一品丁寧に運ばれる極上の京会席。冬期は寒ブリ、ズワイガニ、丹波牛、フグなど最高級の冬食材が繊細な盛り付けで提供され、五感すべてで冬の京都を堪能できます。きめ細やかなもてなしと静寂に包まれた、記念日にふさわしい至高の宿です。",
              roomTip: "翠泉スイート（露天風呂付き）。リビングとベッドルームを備えた広々とした空間に専用露天風呂を完備し、至福のお籠もりステイ。",
              gourmetTip: "「冬の極み京会席」。料理長が厳選した丹波牛フィレ肉と冬の日本海の幸を贅沢に織り交ぜた、芸術品のような料理の数々。",
              highlights: [
                "全13室スモールラグジュアリー・全館畳敷き＆客室専用露天と最高峰の京会席",
                "静寂に包まれる大人の隠れ宿・記念日やご褒美旅行に選ばれ続ける最高評価",
                "板前が目の前で仕上げる絶品京料理・細部まで行き届いた上質なサービス"
              ]
            }
  ];

  const faqData = [
  {
    "q": "「美山かやぶきの里 雪灯廊（ゆきとうろう）」の開催時期と見どころは？",
    "a": "例年1月下旬から2月初旬にかけて開催されます（約1週間程度）。国の重要伝統的建造物群保存地区に選定されている美山町北集落の茅葺き民家が純白の雪に覆われ、夕暮れ時から集落全体が温かなライトアップで照らされます。道沿いには無数の手作り雪灯籠や竹灯籠、花灯籠が灯り、まるで昔話の世界に迷い込んだかのような幽玄な情景が広がります。また期間中にはあったか屋台や特産市、冬の夜空を彩る花火の打ち上げも行われます。"
  },
  {
    "q": "丹波・美山の冬名物「ぼたん鍋（猪鍋）」の美味しさの秘密とは？",
    "a": "丹波篠山から美山にかけての丹波山系は、日本一良質な猪肉が獲れる聖地として知られます。秋に山に実るドングリやクリ、葛の根をたっぷり食べて厳しい冬に備えた天然猪肉は、白身（脂身）が厚く、脂自体に上品な甘みとコクがあります。豚肉や牛肉と異なり「煮込めば煮込むほど柔らかくなる」のが特徴で、地元特産の丹波味噌や合わせ味噌、美山の地酒、山椒を効かせた出汁で根菜や美山豆腐と一緒に煮込むことで、臭みが全くない極上の滋味鍋に仕上がります。"
  },
  {
    "q": "湯の花温泉の泉質や効能、京都観光との組み合わせ方は？",
    "a": "湯の花温泉は亀岡市の山あいに位置し、泉質は「単純弱放射能温泉（低張性・中性・低温泉）」です。古くは戦国武将が傷を癒やしたと伝えられ、ラドンを微量に含む湯は血行を促進し、神経痛、筋肉痛、冷え性、疲労回復に優れた効果を発揮します。京都市内（京都駅・嵐山）からJR山陰本線（嵯峨野線）で快速約20分と至近なため、昼間に嵐山や京都市内を観光した後に湯の花温泉で宿泊し、翌日に美山かやぶきの里へドライブする周遊ルートが非常に人気です。"
  },
  {
    "q": "冬の美山へのアクセスと道路の積雪・凍結状況は？",
    "a": "車の場合、京都縦貫自動車道「園部IC」または「八木西IC」から府道19号線経由で約40〜50分です。美山町は京都府内でも有数の豪雪地帯であり、12月中旬から2月にかけては道路に圧雪や凍結が発生します。必ずスタッドレスタイヤを装着した車でお越しください。公共交通機関の場合、JR山陰本線「日吉駅」から南丹市営バスが運行されているほか、冬の雪灯廊期間中には京都駅や園部駅から直行バス（美山ネイチャー号など・要予約）が運行されます。"
  },
  {
    "q": "美山かやぶきの里を散策する際の防寒装備やマナーは？",
    "a": "美山かやぶきの里は現在も一般の住民の方々が実際に生活を営んでいる集落です。敷地内への無断立ち入りや大声での会話は避け、ゴミの持ち帰りを徹底しましょう。冬期は気温が氷点下まで下がり、足元には雪や氷が積もるため、防寒スノーブーツや長靴、厚手のダウンコート、帽子、手袋の着用が必須です。特に夕暮れ時や夜間の雪灯廊観賞時は冷え込みが厳しいため、使い捨てカイロの持参をおすすめします。"
  },
  {
    "q": "美山や丹波エリアで買いたいおすすめの冬のお土産は？",
    "a": "美山の清らかな水と豊かな自然が育んだ「美山牛乳」のスイーツ（美山プリンやクッキー）、美山産そば粉を使った「手打ち生そば」、特産の「美山納豆」、美山の平飼い卵などが定番人気です。また丹波篠山・亀岡エリアでは、大粒で甘み豊かな「丹波黒豆（黒大豆）」の煮豆や黒豆スイーツ、丹波栗のお菓子、蔵元が仕込む冬のしぼりたて新酒（地酒）が喜ばれます。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-kyoto-miyama-kayabuki-snow-botannabe-tanba-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-kyoto-miyama-kayabuki-snow-botannabe-tanba-stay"
        },
        "headline": "【12・1月京都】美山かやぶきの里＆丹波！白銀の茅葺き集落雪景色と雪灯廊・冬の最高峰「天然ぼたん鍋」＆里山雪見温泉名宿5選",
        "description": "日本の原風景が色濃く残る京都府南丹市「美山かやぶきの里」。12〜1月は茅葺き屋根の上に純白の雪が降り積もり、昔話の世界のような静寂と温もりに包まれます。1月下旬には集落全体が雪灯籠の柔らかな光に照らされる「美山雪灯廊」が開幕。丹波地方の冬の王様・天然猪肉の熱々「ぼたん鍋」や丹波牛、湯の花温泉の美肌露天風呂を満喫できる厳選名宿5選を徹底解説します。",
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
            "name": "美山かやぶきの里＆丹波冬特集",
            "item": "https://croud-travel.com/winter-kyoto-miyama-kayabuki-snow-botannabe-tanba-stay"
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
      <header className="relative bg-gradient-to-br from-stone-950 via-slate-900 to-amber-950 text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(217,119,6,0.2),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-medium">
            <Home className="w-4 h-4 text-amber-300" />
            <span>12月・1月冬の京都里山リトリート特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-6">
            美山かやぶきの里＆丹波！<br className="hidden sm:inline" />
            白銀の茅葺き集落雪景色と雪灯廊・冬の最高峰「天然ぼたん鍋」＆里山雪見温泉名宿5選
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            京都市内から車で約1時間半、大自然に囲まれた京都府南丹市美山町。重厚な茅葺き屋根が軒を連ねる「美山かやぶきの里」は、冬になると一面の白銀世界へと姿を変え、昔話の絵本から抜け出したようなノスタルジックな静寂に包まれます。1月下旬に開催される幻想の「美山雪灯廊」、丹波山系の豊かな森が育んだ冬の味覚の最高峰・天然猪肉の熱々「ぼたん鍋」、そして亀岡・湯の花温泉の美肌雪見露天風呂。心も体もじんわり温まる、冬の京都の隠れ里へご案内します。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-200 border-t border-slate-700/60 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
              <span>旬期：12月〜2月（雪灯廊1月下旬〜）</span>
            </div>
            <div className="flex items-center gap-2">
              <Snowflake className="w-4 h-4 text-amber-400 shrink-0" />
              <span>茅葺き集落の雪景色＆雪灯廊</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-400 shrink-0" />
              <span>名物・天然猪肉ぼたん鍋</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>湯の花温泉の美肌雪見露天</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Section 1: エリア解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Destination Overview</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Home className="w-6 h-6 text-amber-500 shrink-0" />
              雪積もる茅葺き屋根と薪ストーブの煙！日本の原風景に出会う冬の美山
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              京都府のほぼ中央に位置する南丹市美山町。国の重要伝統的建造物群保存地区に指定されている「かやぶきの里（北集落）」には、江戸時代中期から明治時代にかけて建てられた39棟もの茅葺き民家が現存し、今も人々が日々の暮らしを営んでいます。
            </p>
            <p>
              冬を迎えると、急勾配の入母屋造りの茅葺き屋根には純白の雪がふんわりと降り積もり、屋根のてっぺんに施された「千木（ちぎ）」や「雪割り」の意匠が白銀の中で凛と際立ちます。屋根から静かに立ち上る薪ストーブの煙、雪を踏みしめるキュッキュッという足音。1月下旬には集落全体を無数の雪灯籠や竹灯籠が照らす「美山雪灯廊」が開催され、闇夜に浮かび上がる黄金色の茅葺き屋根が息を呑むほど幻想的な光景を生み出します。
            </p>
            <p>
              そして美山から亀岡にかけての丹波地方は、古くから日本屈指の猟場として名を馳せた土地。冬の滋養食として愛される「ぼたん鍋」は、秋の木の実を食べて脂が乗った天然猪肉を丹波味噌の出汁で煮込む郷土のご馳走です。戦国武将ゆかりの湯の花温泉で雪見風呂に浸かり、芳醇な猪鍋や丹波牛に舌鼓を打つ。慌ただしい日常から離れ、里山の温もりに包まれる至福の冬旅がここにあります。
            </p>
          </div>
        </section>

        {/* Section 2: 宿泊施設一覧 */}
        <section className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Featured Accommodations</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Building className="w-6 h-6 text-amber-500 shrink-0" />
              美山＆湯の花温泉で泊まりたい冬の厳選名宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              ※楽天トラベルの最新APIデータを反映。本場ぼたん鍋、極上丹波牛、風情あふれる雪見露天風呂を誇る名宿を厳選。
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
                      <div className="flex items-center gap-1 text-amber-600 font-bold text-sm">
                        <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
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
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-amber-600 transition-colors">
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
                      <div className="text-xs text-slate-700 bg-amber-50/50 p-2.5 rounded-lg border border-amber-100/60">
                        <strong className="text-amber-800 block mb-0.5">客室の魅力:</strong>
                        {h.roomTip}
                      </div>
                      <div className="text-xs text-slate-700 bg-stone-50/50 p-2.5 rounded-lg border border-stone-200/60">
                        <strong className="text-stone-800 block mb-0.5">冬の料理のこだわり:</strong>
                        {h.gourmetTip}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">宿泊ハイライト</h4>
                      <ul className="grid grid-cols-1 gap-1 text-xs text-slate-600">
                        {h.highlights.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
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
                        className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-amber-600 to-stone-700 hover:from-amber-700 hover:to-stone-800 text-white rounded-xl font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all gap-1.5"
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

        {/* Section 3: 冬の美食・ぼたん鍋 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Gastronomy</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Flame className="w-6 h-6 text-amber-500 shrink-0" />
              丹波・美山が誇る冬の最高峰グルメ！天然猪肉「ぼたん鍋」と銘柄黒毛和牛「丹波牛」
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-amber-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                本場仕込みの「天然ぼたん鍋」
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                丹波の山野を駆け巡り、秋の実りをたっぷり食べた天然猪の肉は、真っ白な上質脂と鮮やかな赤身が美しい牡丹の花のように盛り付けられます。煮込むほどにコクが増す特製味噌仕立てのスープに、地元産のごぼうや白菜、美山豆腐を合わせて熱々をいただく極上の鍋料理です。
              </p>
            </div>

            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-amber-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                京都の誇り「丹波牛（京都肉）」
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                古くから名牛の産地として知られる丹波地方。澄んだ空気と清らかな水で丹精込めて育てられた丹波牛は、繊細な霜降りと芳醇な香りが特徴。石焼きステーキやしゃぶしゃぶで味わえば、口の中でとろけるような極上の食感を楽しめます。
              </p>
            </div>

            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-amber-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                美山手打ち蕎麦と美山牛乳スイーツ
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                寒暖差のある美山の高原地帯で育ったそば粉を使った香り高い「美山そば」。温かい地鶏南蛮そばは散策後の体を温めてくれます。また、濃厚な風味が全国区の人気を誇る「美山牛乳」のプリンやソフトクリーム、チーズも見逃せません。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: 見どころ＆冬の風物詩 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Sightseeing & Culture</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-amber-500 shrink-0" />
              白銀の茅葺き集落と雪灯籠！冬の美山・丹波を彩る必訪スポット
            </h2>
          </div>

          <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            <div className="border-l-4 border-amber-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                1. 美山かやぶきの里「雪灯廊（ゆきとうろう）」
              </h3>
              <p className="text-xs sm:text-sm">
                1月下旬に開催される美山冬の最大イベント。雪に包まれた茅葺き民家が温かい光でライトアップされ、集落の小道には訪れた人々が作った雪灯籠や花灯籠が幻想的に灯ります。冬の凛とした夜空に打ち上がる花火と、雪の茅葺き屋根が織りなす情景は、まるでおとぎ話の世界に入り込んだかのような感動を与えてくれます。
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                2. 美山民俗資料館とかやぶきカフェ
              </h3>
              <p className="text-xs sm:text-sm">
                約200年前の茅葺き農家を復元した「美山民俗資料館」では、囲炉裏に薪がくべられ、昔の暮らしの道具や屋根裏の構造を見学できます。また集落内にある「カフェ美卵（みらん）」では、平飼い卵の手作りプリンや温かい珈琲をいただきながら、窓の外に舞う雪景色を眺めてほっと一息つけます。
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                3. 京都の奥座敷・亀岡「湯の花温泉」の美肌湯めぐり
              </h3>
              <p className="text-xs sm:text-sm">
                美山から車で約40分、山あいにひっそりと湯煙を上げる湯の花温泉。微量のラドンを含む単純弱放射能泉は保温効果が高く、入浴後も体が冷めにくい名湯です。静かな雪景色を眺める庭園露天風呂や貸切風呂で過ごす時間は、冬の大人旅の至福のひとときです。
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-4 space-y-2">
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                4. 道の駅「美山ふれあい広場」と京都丹波の冬の特産市
              </h3>
              <p className="text-xs sm:text-sm">
                美山の玄関口に位置する人気の道の駅。名物の美山牛乳を使ったスイーツショップ「美山のめぐみ 郷の駅」や観光案内所が併設され、冬の地場産野菜や手打ちそば、丹波の地酒、天然ジビエの加工品などのお土産が豊富に揃います。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: 冬道運転＆装備ガイド */}
        <section className="bg-amber-50/60 rounded-2xl p-6 sm:p-10 border border-amber-100 space-y-6">
          <div className="border-b border-amber-200/60 pb-4">
            <span className="text-amber-700 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Access & Preparation</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-amber-600 shrink-0" />
              雪の美山を安全に楽しむ！スタッドレスタイヤ＆防寒レイヤリングの心得
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="bg-white p-5 rounded-xl border border-amber-100 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-amber-600" />
                集落散策の服装と靴の選び方
              </h3>
              <p>
                美山町は京都府内屈指の豪雪地帯で、冬期は集落の小道に圧雪や凍結が生じます。靴は防水性があり滑り止めのしっかりしたスノーブーツまたは長靴が必須です。また夕暮れ以降は急激に冷え込み氷点下になるため、防風・防水の厚手ダウンコート、マフラー、手袋、耳当て付き帽子、カイロをご用意ください。
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-amber-100 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-600" />
                マイカー・レンタカーの雪道運転
              </h3>
              <p>
                京都縦貫自動車道の園部ICから美山へ続く府道19号線は、冬期には路面凍結や積雪が頻発します。必ずスタッドレスタイヤを装着し、念のためタイヤチェーンを車載してください。日没後の山道運転は路面のブラックアイスバーンに注意し、スピードを抑えて安全運転を心がけましょう。雪道運転に不安がある方は、京都駅や園部駅発着の直行周遊バスの利用が安心です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: 冬の銘酒＆発酵文化 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Sake & Fermentation</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Flame className="w-6 h-6 text-amber-500 shrink-0" />
              名水と寒仕込みが醸す冬の恵み！丹波杜氏の銘酒と美山の発酵食
            </h2>
          </div>

          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              日本三大杜氏の一つに数えられる「丹波杜氏（たんばとうじ）」の故郷である丹波地域。冬期は寒冷な気候と清らかな山水に恵まれ、酒蔵では新酒の仕込みが最盛期を迎えます。亀岡の「丹山酒造」や「大石酒造」では、冬限定のしぼりたて生原酒やにごり酒が販売され、芳醇な米の旨味とフレッシュな微炭酸が楽しめます。
            </p>
            <p>
              また美山町では、昔ながらの藁づとに包まれた「美山納豆」や、地元の天然水と大豆で仕込む手作り味噌など、厳しい冬を乗り切るための発酵食文化が今も大切に受け継がれています。熱々のぼたん鍋とともに味わう地元のしぼりたて新酒は、体の芯から温めてくれる最高の冬の贅沢です。
            </p>
          </div>
        </section>

        {/* Section 7: モデルコース */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-amber-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Itinerary</span>
            <h2 className="text-xl sm:text-3xl font-bold text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-amber-400 shrink-0" />
              美山かやぶきの里雪灯廊と湯の花温泉ぼたん鍋を満喫する1泊2日コース
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-amber-300 text-lg">
                <span className="bg-amber-600 text-white text-xs px-2.5 py-1 rounded-md">Day 1</span>
                <span>京都駅から丹波路ドライブ・美山かやぶきの里と雪灯廊ライトアップ</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>11:30</strong> 京都駅周辺でレンタカーを借りて京都縦貫道経由で美山へ。道の駅「美山ふれあい広場」で名物ソフトクリーム。
                </p>
                <p>
                  <strong>13:00</strong> 「かやぶきの里」へ到着。手打ちそば屋で温かい地鶏南蛮そばの昼食。
                </p>
                <p>
                  <strong>14:30</strong> 白銀に包まれた茅葺き民家の小道を散策し、美山民俗資料館で囲炉裏の温もりに触れる。
                </p>
                <p>
                  <strong>17:00</strong> 夕暮れ時、「美山雪灯廊」が点灯！無数の雪灯籠とライトアップされた茅葺き屋根の幻想世界を鑑賞。
                </p>
                <p>
                  <strong>18:30</strong> 美山の宿（河鹿荘）または湯の花温泉の名宿へチェックイン。
                </p>
                <p>
                  <strong>19:30</strong> 薪ストーブや温泉で温まった後、熱々の天然猪肉「ぼたん鍋」や丹波牛会席に舌鼓。
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-amber-300 text-lg">
                <span className="bg-amber-600 text-white text-xs px-2.5 py-1 rounded-md">Day 2</span>
                <span>湯の花温泉雪見露天風呂・亀岡城下町と嵐山経由で帰路へ</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>08:00</strong> 朝の澄んだ空気の中、雪見露天風呂に浸かり里山の清々しい朝を満喫。
                </p>
                <p>
                  <strong>09:00</strong> 自家農園野菜や丹波黒豆を取り入れた滋味豊かな朝食をゆっくり楽しむ。
                </p>
                <p>
                  <strong>10:30</strong> 亀岡市内へ移動。明智光秀ゆかりの亀山城跡や城下町を散策。
                </p>
                <p>
                  <strong>12:30</strong> 亀岡市内のカフェで丹波牛バーガーや特製スイーツのランチ。
                </p>
                <p>
                  <strong>14:30</strong> 嵯峨野・嵐山方面を経由して京都市内へ戻り、帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              冬の美山かやぶきの里＆丹波旅行 よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-5 bg-slate-50/30 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-amber-600 font-extrabold shrink-0">Q.</span>
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
            <span className="text-amber-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              あわせて楽しむ！関西・近畿の冬特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <Link 
              href="/winter-kyoto-ine-funaya-ineburi-shabu-miyazu-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-amber-400 block mb-1">伊根の舟屋冬特集</span>
              <span className="font-bold text-white block">伊根の舟屋！冬の寒ブリしゃぶと天橋立・宮津名宿</span>
            </Link>

            <Link 
              href="/winter-hyogo-tanba-sasayama-botannabe-castle-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-amber-400 block mb-1">丹波篠山冬特集</span>
              <span className="font-bold text-white block">丹波篠山！本場ぼたん鍋と篠山城下町・丹波牛名宿</span>
            </Link>

            <Link 
              href="/winter-kyoto-gion-higashiyama-yasaka-shrine-hatsumode-kiyomizu-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-amber-400 block mb-1">京都祇園冬特集</span>
              <span className="font-bold text-white block">祇園・東山！八坂神社初詣と冬の静寂の清水寺名宿</span>
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
