import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Snowflake, Waves, Sun, Flame, Mountain, Building, Coffee, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月山梨】武田神社新春初詣＆富士山・南アルプス雪景色！開湯1200年信玄の隠し湯「湯村温泉」と熱々ほうとう・極上甲州牛の名宿5選",
  description: "冬の山梨・甲府盆地は、白雪をまとった霊峰富士や南アルプス、八ヶ岳の壮大な連峰が青空に際立つ絶景の季節。武田信玄公の館跡に鎮座し「勝運」をもたらす武田神社の新春初詣、甲府城跡天守台からのパノラマビュー。開湯1200年、信玄公が川中島の合戦での傷を癒やしたと伝わる名湯「信玄の隠し湯・湯村温泉」の弱アルカリ性美肌湯、冬の底冷えを優しく溶かす熱々のかぼちゃほうとう、日本一の肉質等級を誇る「甲州牛」のすき焼きに舌鼓。歴史浪漫と温泉、極上肉を堪能する名宿5選を詳しく解説します。",
  keywords: '甲府 ホテル, 武田神社 初詣, 湯村温泉, 常磐ホテル, 信玄の隠し湯, 甲州牛 すき焼き, 甲府 ほうとう, 甲府城 富士山, 11月 12月 1月 山梨 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-yamanashi-kofu-takeda-shrine-yumura-onsen-koshugyu-stay/"
  },
  openGraph: {
    title: "【11・12・1月山梨】武田神社新春初詣＆富士山・南アルプス雪景色！開湯1200年信玄の隠し湯「湯村温泉」と熱々ほうとう・極上甲州牛の名宿5選",
    description: "冬の山梨・甲府盆地は、白雪をまとった霊峰富士や南アルプス、八ヶ岳の壮大な連峰が青空に際立つ絶景の季節。武田信玄公の館跡に鎮座し「勝運」をもたらす武田神社の新春初詣、甲府城跡天守台からのパノラマビュー。開湯1200年、信玄公が川中島の合戦での傷を癒やしたと伝わる名湯「信玄の隠し湯・湯村温泉」の弱アルカリ性美肌湯、冬の底冷えを優しく溶かす熱々のかぼちゃほうとう、日本一の肉質等級を誇る「甲州牛」のすき焼きに舌鼓。歴史浪漫と温泉、極上肉を堪能する名宿5選を詳しく解説します。",
    url: 'https://croud-travel.com/winter-yamanashi-kofu-takeda-shrine-yumura-onsen-koshugyu-stay',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=630', width: 1200, height: 630, alt: '武田神社新春初詣と湯村温泉雪見風呂' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月山梨】武田神社新春初詣＆富士山・南アルプス雪景色！開湯1200年信玄の隠し湯「湯村温泉」と熱々ほうとう・極上甲州牛の名宿5選",
    description: "冬の山梨・甲府盆地は、白雪をまとった霊峰富士や南アルプス、八ヶ岳の壮大な連峰が青空に際立つ絶景の季節。武田信玄公の館跡に鎮座し「勝運」をもたらす武田神社の新春初詣、甲府城跡天守台からのパノラマビュー。開湯1200年、信玄公が川中島の合戦での傷を癒やしたと伝わる名湯「信玄の隠し湯・湯村温泉」の弱アルカリ性美肌湯、冬の底冷えを優しく溶かす熱々のかぼちゃほうとう、日本一の肉質等級を誇る「甲州牛」のすき焼きに舌鼓。歴史浪漫と温泉、極上肉を堪能する名宿5選を詳しく解説します。"
  }
};

export default function YamanashiKofuYumuraPage() {
  const hotels = [
            {
              id: 1,
              name: "信玄の湯　湯村温泉　常磐ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9045/9045.jpg",
              rating: 4.77,
              reviews: 1576,
              price: "¥22,000〜",
              access: "中央自動車道、甲府昭和ICから20分／甲府駅南口バスターミナル4番線15分「湯村温泉入口」下車。武田神社は車で15分",
              special: "日本旅館の感性と、都市型ホテルの利便性を兼備えた、皇室もご利用なさる甲府の迎賓館",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9045%2F9045.html",
              story: "将棋の名人戦や囲碁本因坊戦など数々の世紀の対局舞台として知られ、皇室や文豪にも愛されてきた甲府・湯村温泉を代表する名門迎賓館「信玄の湯 湯村温泉 常磐ホテル」。約3,000坪の壮麗な日本庭園は、冬になると松の雪吊りや寒椿が咲き誇り、静寂に満ちた和の美意識を伝えます。信玄公ゆかりの自家源泉から湧き出る柔らかな弱アルカリ性単純温泉は、冬の寒さで強張った身体を優しく包み込み、湯上がりは驚くほど肌がしっとり。夕食には山梨が誇る最高峰の黒毛和牛「甲州牛」の霜降りサーロインや甲州富士桜ポーク、旬の冬根菜を盛り込んだ至高の本格会席が供され、贅を尽くした冬の旅を約束してくれます。",
              roomTip: "日本庭園を望む数寄屋造りの離れまたは東館客室。手入れの行き届いた庭園雪景色を眺めながら、極上の静けさに浸る優雅なステイ。",
              gourmetTip: "「甲州牛会席＆山梨銘酒ペアリング」。きめ細やかなサシが入った甲州牛のすき焼きやステーキと、老舗ワイナリーの甲州白ワイン。",
              highlights: [
                "将棋名人戦の舞台・3000坪の名園雪景色を誇る湯村温泉の最高峰迎賓館",
                "最高峰ブランド「甲州牛」霜降りステーキやすき焼き・山梨ワインとの極上マリアージュ",
                "数寄屋造りの贅沢な離れ客室・弱アルカリ性の柔らかな美肌温泉で心身を再生"
              ]
            },
            {
              id: 2,
              name: "甲州湯村温泉　柳屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/165690/165690.jpg",
              rating: 4.00,
              reviews: 183,
              price: "¥9,900〜",
              access: "甲府駅よりお車にて約１５分",
              special: "部屋から眺める自然庭園と信玄の隠し湯♪湯村温泉",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165690%2F165690.html",
              story: "創業明治時代、湯村温泉の中心に位置し、昔ながらの湯治場情緒と心温まるおもてなしを今に受け継ぐ老舗宿「甲州湯村温泉 柳屋」。敷地内から自噴する良質な天然温泉を贅沢に掛け流す大浴場と風情あふれる露天風呂は、冬の澄んだ夜空を見上げながらの雪見風呂に最適です。どこか懐かしく落ち着きのある純和風の館内には囲炉裏や民芸調の調度品が配され、冬の旅情を心地よく高めてくれます。夕食は山梨の郷土の味覚を大切にした手作り会席。熱々のかぼちゃほうとう小鍋仕立てや甲州牛の陶板焼きなど、滋味豊かな冬の温もりが身体の芯まで染み渡ります。",
              roomTip: "落ち着いた和室。窓から湯村の山並みを眺め、畳の香りと温泉の湯けむりに包まれてゆったりとした時間を過ごせる客室。",
              gourmetTip: "「手作り甲州郷土会席＆熱々ほうとう鍋」。信州味噌仕立ての具だくさんほうとうと、じっくり焼き上げた甲州牛の陶板焼き。",
              highlights: [
                "信玄の隠し湯源泉かけ流し・昔ながらの湯治風情と囲炉裏が心地よい老舗宿",
                "信州味噌仕立ての熱々かぼちゃほうとう小鍋＆甲州牛陶板焼きの手作り会席",
                "冬の澄んだ夜空を仰ぐ露天風呂・飾らない温かなおもてなしで癒やしの時間"
              ]
            },
            {
              id: 3,
              name: "古名屋ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2493/2493.jpg",
              rating: 4.29,
              reviews: 580,
              price: "¥8,000〜",
              access: "電車：ＪＲ中央本線甲府駅から徒歩約8分　車：（長野方面より）甲府昭和ⅠCから13分 （東京方面より）甲府南ＩCから18分",
              special: "アーバンヴィラ…都会の隠れ家、一歩踏み入れば、そこはオリエンタルモダンな空間",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2493%2F2493.html",
              story: "甲府駅南口から徒歩約8分、創業1942年の歴史を誇る「古名屋ホテル（KONA-YA HOTEL）」は、甲府市街地にありながら敷地内から自噴する天然温泉を贅沢に湛える本格シティ＆リゾートホテルです。エントランスに足を踏み入れると、オリエンタルモダンで洗練された優雅な空間が広がり、日常を忘れさせてくれます。宿泊者専用の温泉大浴場では、琥珀色の柔らかなモール系源泉が旅の疲れをじんわりと癒やしてくれます。館内には本格中華、和食、鉄板焼きの名店が揃い、冬の味覚コースや甲州牛料理、厳選された地元山梨県産ワインとの贅沢なマリアージュを堪能できます。",
              roomTip: "エグゼクティブツイン・スイート。アジアンリゾートの美意識と上質なベッドが調和した広々とした空間で、贅沢な寛ぎを満喫。",
              gourmetTip: "「鉄板焼き甲州牛ステーキディナー」。シェフの鮮やかな手さばきで焼き上げられる甲州牛と、ソムリエ厳選の勝沼産甲州ワイン。",
              highlights: [
                "甲府駅前で自家源泉天然温泉を堪能・オリエンタルモダンなシティリゾート",
                "鉄板焼きや本格中華・甲州ワインと楽しむ洗練されたディナーコース",
                "琥珀色の自噴源泉に浸かる贅沢・優雅なロビーラウンジで冬のひととき"
              ]
            },
            {
              id: 4,
              name: "城のホテル甲府",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/992/992.jpg",
              rating: 4.50,
              reviews: 5408,
              price: "¥7,600〜",
              access: "ＪＲ中央本線甲府駅から徒歩で1分。",
              special: "最上階に展望露天風呂と温泉。やまなしグリーンゾーン認定で安心安全なご宿泊を。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F992%2F992.html",
              story: "JR甲府駅南口から徒歩わずか1分、甲府城跡（舞鶴城公園）のすぐ向かいに建つ「城のホテル甲府」。最上階の13階には甲府の街並みと南アルプス、富士山を一望できる宿泊者専用の天然温泉展望大浴場があり、冬の澄み渡る青空や茜色の夕暮れを眺めながらの入浴は格別です。客室は甲州印伝や武田菱など山梨の伝統工芸の意匠を現代的に取り入れたシックなデザイン。シモンズ社製ベッドや最新の機能美が備わり、心地よい快眠を約束します。朝食には甲府名物の鳥もつ煮やほうとう、地元産食材を使った手作り和洋バイキングが用意され、朝から甲斐の魅力を実感できます。",
              roomTip: "キャッスルビューツイン。窓の向こうに甲府城跡の石垣や天守台、白銀の南アルプス連峰を望むパノラマロケーション。",
              gourmetTip: "「山梨の恵み朝食バイキング」。B-1グランプリ王者の甲府鳥もつ煮や自家製ほうとう、山梨県産米の炊きたてご飯。",
              highlights: [
                "JR甲府駅徒歩1分・最上階に甲府城跡と南アルプス・富士山を望む天然温泉展望大浴場",
                "甲府鳥もつ煮や自家製ほうとうが並ぶ充実の山梨郷土朝食バイキング",
                "甲州印伝や武田菱を取り入れた和モダン客室・シモンズベッドで快眠"
              ]
            },
            {
              id: 5,
              name: "甲斐のホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/991/991.jpg",
              rating: 4.42,
              reviews: 2359,
              price: "¥6,750〜",
              access: "【楽天トラベルアワード2025受賞記念プラン販売中】普通車駐車無料。甲府昭和ＩＣより車で3分。甲府駅より車で15分。",
              special: "甲府昭和ＩＣから車で1分♪　無料駐車場100台♪　男女別大浴場は入替なしでワイン風呂が好評！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F991%2F991.html",
              story: "甲府昭和ICから車で約5分、甲府バイパス沿いに位置し、マイカーやレンタカーでの冬の山梨ドライブ旅行に抜群のアクセスを誇る「甲斐のホテル」。全室に快適なベッドと充実したアメニティを備え、観光だけでなくビジネスや新春初詣の宿泊拠点として幅広く親しまれています。館内には手足を伸ばして温まれる大浴場が備わっており、冬の寒さで冷えた身体を心地よくリフレッシュ。無料平面駐車場が完備されているため、冬用タイヤを装備した車での移動も安心です。近隣には地元で評判のほうとう専門店や甲州牛の焼肉処が多数あり、夜の食べ歩きにも便利です。",
              roomTip: "デラックスシングル・ツイン。ゆったりとした間取りと明るい室内照明で、冬のドライブ帰りの荷物整理や休息も快適。",
              gourmetTip: "「無料軽朝食＆周辺名店連携」。パンや温かいスープ、挽きたてコーヒーに加え、徒歩圏内の老舗ほうとう店での夕食がおすすめ。",
              highlights: [
                "甲府昭和IC車5分の好立地・無料平面駐車場完備＆リフレッシュ大浴場",
                "周辺に老舗ほうとう店や甲州牛名店が多数・冬のドライブ観光拠点に最適",
                "リーズナブルな料金設定と清潔な客室・ビジネスから観光まで安心ステイ"
              ]
            }
  ];

  const faqList = [
  {
    "q": "武田神社の新春初詣の見どころやご利益、混雑を避ける参拝時間は？",
    "a": "武田神社は、戦国最強の武将・武田信玄公の館跡（躑躅ヶ崎館跡・国指定史跡）に大正時代に創建された甲斐国の総鎮守です。信玄公が連戦連勝を誇ったことから「勝運（人生やすべての勝負に勝つ）」「開運・厄除け」「商売繁盛」の絶大なご利益で知られ、正月三が日には約10万人が参拝します。境内には信玄公愛用の名刀を収蔵する宝物殿や、延命長寿の「姫の井戸」があります。元日および三が日の昼前後は神橋から参道にかけて大混雑するため、早朝（7時〜9時頃）または夕方16時以降の参拝が比較的スムーズです。"
  },
  {
    "q": "「信玄の隠し湯」として知られる湯村温泉の泉質や効能、歴史は？",
    "a": "湯村温泉は平安時代（808年）、弘法大師空海が杖で大石を動かしたところ湯が湧き出したと伝わる開湯1200年の名湯です。戦国時代には武田信玄公が川中島の合戦での刀傷や疲労を癒やすために陣中療養地（隠し湯）として定めたことで有名になりました。泉質は弱アルカリ性単純温泉（およびナトリウム・カルシウム-塩化物・硫酸塩泉）で、無色透明・肌あたりが非常に柔らかいのが特徴です。「美肌の湯」として肌をしっとり潤すとともに、神経痛や冷え性、疲労回復に優れた効果があり、冬の底冷えした身体を芯まで温めてくれます。"
  },
  {
    "q": "冬の甲府盆地を訪れる際の寒さや積雪、車の冬用タイヤ（スタッドレス）は必要？",
    "a": "甲府盆地は周囲を山々に囲まれているため、冬場は放射冷却現象によって朝晩の冷え込みが極めて厳しく、氷点下まで下がります（甲府の底冷え）。一方で太平洋側の気候のため晴天率が高く、平野部での積雪は年に数回程度です。ただし、早朝や夜間は路面凍結（ブラックアイスバーン）が発生しやすく、昇仙峡や武田神社周辺、湯村温泉の坂道、中央自動車道の笹子トンネル付近などは雪や凍結のリスクが高まります。12月〜1月に車で訪れる場合はスタッドレスタイヤの装着が必須です。"
  },
  {
    "q": "冬の甲府で外せない「ほうとう」「甲州牛」「鳥もつ煮」の美味しい楽しみ方は？",
    "a": "山梨の冬を代表する郷土料理「ほうとう」は、平打ちの幅広うどんを、かぼちゃ、里芋、白菜、きのこなど旬の根菜とともに自家製合わせ味噌で煮込んだ熱々の煮込み麺。とろけたかぼちゃが出汁に甘みとコクを与え、身体の芯から温まります。また、全国枝肉共励会などで最高峰を受賞する「甲州牛」は、やわらかな肉質と芳醇な霜降りが自慢で、冬は熱々のすき焼きや溶岩焼きステーキで味わうのが至高。さらに甘辛い醤油タレで照り煮にした「甲府鳥もつ煮」や、山梨県産甲州ワインとのペアリングも外せません。"
  },
  {
    "q": "甲府駅から武田神社や湯村温泉へのアクセスとおすすめの冬の1泊2日モデルコースは？",
    "a": "JR甲府駅北口から武田神社へは路線バスで約8分（徒歩約30分）。湯村温泉へは甲府駅南口からバスで約15分です。おすすめコースは、1日目の昼に甲府駅へ到着後、甲府城跡天守台から白銀の南アルプスと富士山を展望。駅前で名物ほうとうを味わい、武田神社へ参拝して開運祈願。夕方に湯村温泉の名宿へチェックインし、源泉かけ流しの露天風呂と甲州牛会席を満喫。2日目は冬の澄み渡る大気の中で昇仙峡の奇岩・仙娥滝（氷瀑の美）を散策し、ワイナリーでお土産の甲州ワインを選ぶプランが人気です。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'ホーム', 'item': 'https://croud-travel.com' },
          { '@type': 'ListItem', 'position': 2, 'name': '特集一覧', 'item': 'https://croud-travel.com/features' },
          { '@type': 'ListItem', 'position': 3, 'name': '武田神社初詣＆湯村温泉・甲州牛名宿', 'item': 'https://croud-travel.com/winter-yamanashi-kofu-takeda-shrine-yumura-onsen-koshugyu-stay' }
        ]
      },
      {
        '@type': 'TouristDestination',
        'name': '武田神社・湯村温泉・甲府市',
        'description': "冬の山梨・甲府盆地は、白雪をまとった霊峰富士や南アルプス、八ヶ岳の壮大な連峰が青空に際立つ絶景の季節。武田信玄公の館跡に鎮座し「勝運」をもたらす武田神社の新春初詣、甲府城跡天守台からのパノラマビュー。開湯1200年、信玄公が川中島の合戦での傷を癒やしたと伝わる名湯「信玄の隠し湯・湯村温泉」の弱アルカリ性美肌湯、冬の底冷えを優しく溶かす熱々のかぼちゃほうとう、日本一の肉質等級を誇る「甲州牛」のすき焼きに舌鼓。歴史浪漫と温泉、極上肉を堪能する名宿5選を詳しく解説します。",
        'touristType': ['歴史探訪', '新春初詣', '信玄隠し湯', '冬の美食', '富士山南アルプス絶景']
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': "武田神社の新春初詣の見どころやご利益、混雑を避ける参拝時間は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "武田神社は、戦国最強の武将・武田信玄公の館跡（躑躅ヶ崎館跡・国指定史跡）に大正時代に創建された甲斐国の総鎮守です。信玄公が連戦連勝を誇ったことから「勝運（人生やすべての勝負に勝つ）」「開運・厄除け」「商売繁盛」の絶大なご利益で知られ、正月三が日には約10万人が参拝します。境内には信玄公愛用の名刀を収蔵する宝物殿や、延命長寿の「姫の井戸」があります。元日および三が日の昼前後は神橋から参道にかけて大混雑するため、早朝（7時〜9時頃）または夕方16時以降の参拝が比較的スムーズです。"
            }
          },
          {
            '@type': 'Question',
            'name': "「信玄の隠し湯」として知られる湯村温泉の泉質や効能、歴史は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "湯村温泉は平安時代（808年）、弘法大師空海が杖で大石を動かしたところ湯が湧き出したと伝わる開湯1200年の名湯です。戦国時代には武田信玄公が川中島の合戦での刀傷や疲労を癒やすために陣中療養地（隠し湯）として定めたことで有名になりました。泉質は弱アルカリ性単純温泉（およびナトリウム・カルシウム-塩化物・硫酸塩泉）で、無色透明・肌あたりが非常に柔らかいのが特徴です。「美肌の湯」として肌をしっとり潤すとともに、神経痛や冷え性、疲労回復に優れた効果があり、冬の底冷えした身体を芯まで温めてくれます。"
            }
          },
          {
            '@type': 'Question',
            'name': "冬の甲府盆地を訪れる際の寒さや積雪、車の冬用タイヤ（スタッドレス）は必要？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "甲府盆地は周囲を山々に囲まれているため、冬場は放射冷却現象によって朝晩の冷え込みが極めて厳しく、氷点下まで下がります（甲府の底冷え）。一方で太平洋側の気候のため晴天率が高く、平野部での積雪は年に数回程度です。ただし、早朝や夜間は路面凍結（ブラックアイスバーン）が発生しやすく、昇仙峡や武田神社周辺、湯村温泉の坂道、中央自動車道の笹子トンネル付近などは雪や凍結のリスクが高まります。12月〜1月に車で訪れる場合はスタッドレスタイヤの装着が必須です。"
            }
          },
          {
            '@type': 'Question',
            'name': "冬の甲府で外せない「ほうとう」「甲州牛」「鳥もつ煮」の美味しい楽しみ方は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "山梨の冬を代表する郷土料理「ほうとう」は、平打ちの幅広うどんを、かぼちゃ、里芋、白菜、きのこなど旬の根菜とともに自家製合わせ味噌で煮込んだ熱々の煮込み麺。とろけたかぼちゃが出汁に甘みとコクを与え、身体の芯から温まります。また、全国枝肉共励会などで最高峰を受賞する「甲州牛」は、やわらかな肉質と芳醇な霜降りが自慢で、冬は熱々のすき焼きや溶岩焼きステーキで味わうのが至高。さらに甘辛い醤油タレで照り煮にした「甲府鳥もつ煮」や、山梨県産甲州ワインとのペアリングも外せません。"
            }
          },
          {
            '@type': 'Question',
            'name': "甲府駅から武田神社や湯村温泉へのアクセスとおすすめの冬の1泊2日モデルコースは？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "JR甲府駅北口から武田神社へは路線バスで約8分（徒歩約30分）。湯村温泉へは甲府駅南口からバスで約15分です。おすすめコースは、1日目の昼に甲府駅へ到着後、甲府城跡天守台から白銀の南アルプスと富士山を展望。駅前で名物ほうとうを味わい、武田神社へ参拝して開運祈願。夕方に湯村温泉の名宿へチェックインし、源泉かけ流しの露天風呂と甲州牛会席を満喫。2日目は冬の澄み渡る大気の中で昇仙峡の奇岩・仙娥滝（氷瀑の美）を散策し、ワイナリーでお土産の甲州ワインを選ぶプランが人気です。"
            }
          }
        ]
      }
    ]
  };

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-red-950 via-slate-900 to-amber-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/20 border border-red-400/30 text-red-200 text-xs sm:text-sm font-medium mb-6">
            <Flame className="w-4 h-4 text-red-300" />
            11月・12月・1月冬の特選旅｜山梨・甲府＆湯村温泉
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-6">
            武田神社新春初詣＆富士山・南アルプス雪景色！<br className="hidden sm:inline" />
            開湯1200年信玄の隠し湯「湯村温泉」と熱々ほうとう・甲州牛の名宿5選
          </h1>
          <p className="text-base sm:text-lg text-amber-100/90 leading-relaxed max-w-4xl mb-8">
            冬の甲府盆地を包む凛とした冷気と、白銀に輝く富士山・南アルプス連峰の圧倒的なパノラマ。武田信玄公の館跡に建ち勝運を授かる「武田神社」での新春初詣、甲府城跡天守台からの雪景色。そして開湯1200年、信玄公が合戦の傷を癒やした「信玄の隠し湯・湯村温泉」の柔らかく温かい名湯。冬の底冷えに染み渡る熱々のかぼちゃほうとうと、最高級霜降り「甲州牛」のすき焼き。甲斐の歴史とぬくもりに浸る名宿を詳しく紹介します。
          </p>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-red-200">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-red-400" /> 山梨県甲府市・湯村温泉・武田神社</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-red-400" /> 見頃期：11月上旬〜1月下旬</span>
            <span className="flex items-center gap-1.5"><Mountain className="w-4 h-4 text-red-400" /> 武田神社初詣＆信玄の隠し湯</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-red-600 pl-4">
            <span className="text-red-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Destination Analysis</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              なぜ冬の甲府・湯村温泉が旅人を惹きつけるのか？盆地を囲む白銀名峰と信玄公ゆかりの癒やし
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              戦国最強武将の不屈の歴史が息づく聖地と、冬の寒さを優しく包む名湯・滋味料理
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              四方を南アルプス、八ヶ岳、秩父山地、そして霊峰富士に囲まれた甲斐の国・甲府盆地。冬になると盆地特有の放射冷却によって朝晩は氷点下の厳しい「底冷え」に見舞われますが、その寒さと引き換えに訪れるのが、言葉を失うほどの澄み切った絶景です。冬晴れの日、甲府城跡（舞鶴城公園）の天守台や市街の高台に立てば、雪をまとった名峰たちが360度の大パノラマで青空に輝き、まさに天下人を育んだ壮大な大地であることを実感させられます。
            </p>
            <p>
              新春の甲府を象徴するのが「武田神社」です。信玄公・勝頼公の二代にわたって甲斐国を治めた館跡「躑躅ヶ崎館（つつじがさきやかた）」の跡地に創建された神社で、信玄公をご祭神として祀ります。合戦において無類の強さを誇ったことから「勝運」の神様として崇敬され、人生の勝負事やビジネスの開運、受験合格、厄除けを祈願して正月三が日には約10万人の参拝客で境内が埋め尽くされます。濠に囲まれた厳かな社殿や宝物殿の国宝・吉岡一文字の太刀、延命長寿の「姫の井戸」など、歴史ファンならずとも背筋が伸びる神聖な空気に満ちています。
            </p>
            <p>
              初詣の寒さで冷えた身体を優しく解きほぐしてくれるのが、甲府市北西部に位置する「湯村温泉（ゆむらおんせん）」です。平安時代の弘法大師空海による開湯伝説を持ち、戦国時代には武田信玄公が合戦で負った傷や疲労を癒やす陣中療養地「信玄の隠し湯」として利用した名湯。弱アルカリ性単純温泉の柔らかな湯は、肌への刺激が少なくじんわりと身体の芯まで温め、湯上がり後も温もりが長時間持続します。太宰治や井伏鱒二など昭和の文豪たちが執筆のために逗留したことでも知られ、どこか懐かしい湯治場の静けさが旅情を深めてくれます。
            </p>
            <p>
              そして甲府の冬を語る上で欠かせないのが、身体を芯から温めるご当地グルメの筆頭「甲州ほうとう」です。自家製味噌をベースにした濃厚な出汁に、かぼちゃ、里芋、白菜、きのこなどの根菜をたっぷり入れ、平打ちの生麺をそのまま煮込む熱々の鍋料理。とろけたかぼちゃの自然な甘みがスープに溶け出し、冷えた身体に染み渡る美味しさは冬ならでは。さらに山梨県が誇る最高級黒毛和牛「甲州牛」の霜降りすき焼きやステーキ、B級グルメで一世を風靡した「甲府鳥もつ煮」など、甲斐の豊かな食の恵みが冬の贅沢な滞在を彩ります。
            </p>
          </div>

          {/* 3 Pillar Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-red-50/60 border border-red-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">武田神社新春初詣と勝運祈願</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                戦国最強武将・武田信玄公の館跡に鎮座。勝負運・開運・商売繁盛を願う参拝者で賑わう甲斐国の総鎮守。
              </p>
            </div>

            <div className="bg-red-50/60 border border-red-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">開湯1200年・信玄隠し湯の美肌泉</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                弘法大師開湯、信玄公が陣中傷を癒やした湯村温泉。弱アルカリ性の柔らかな湯が冬の冷えを芯から温める。
              </p>
            </div>

            <div className="bg-red-50/60 border border-red-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">熱々ほうとう鍋＆極上甲州牛</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                かぼちゃと旬根菜が溶け合う熱々ほうとうと、最高級霜降り黒毛和牛「甲州牛」のすき焼き・ステーキ会席。
              </p>
            </div>
          </div>
        </section>

        {/* Month Guide */}
        <section className="bg-gradient-to-r from-slate-900 via-red-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
          <div className="border-l-4 border-red-400 pl-4">
            <span className="text-red-300 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Seasonal Calendar</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              11月・12月・1月の見どころカレンダー＆気候・服装ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-md">11月（初冬）</span>
              <h3 className="font-bold text-white text-base">昇仙峡紅葉のクライマックスと新酒ワイン</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                昇仙峡の覚円峰を彩る紅葉。11月3日には山梨ヌーボー（新酒甲州ワイン）が解禁され、実りの秋と冬の始まりを祝うワインと郷土料理のマリアージュが楽しめます。
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-sky-500/20 text-sky-300 text-xs font-bold rounded-md">12月（仲冬）</span>
              <h3 className="font-bold text-white text-base">澄み渡る白銀南アルプスと甲府の底冷え</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                大気の透明度が最高になり、甲府城跡から望む富士山や南アルプスの冠雪が息をのむ美しさに。朝晩は氷点下に達するため、ダウンコートや手袋、マフラーでしっかり防寒を。
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-red-500/20 text-red-300 text-xs font-bold rounded-md">1月（厳冬）</span>
              <h3 className="font-bold text-white text-base">武田神社新春初詣と極上甲州牛すき焼き</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                全国から勝運祈願の参拝客が集まる武田神社。凛とした寒気の中で新年の誓いを立て、湯村温泉の温かい湯と熱々のほうとう、霜降り甲州牛で温まる至福の新年旅。
              </p>
            </div>
          </div>
        </section>

        {/* Spot Highlights Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8">
          <div className="border-l-4 border-red-600 pl-4">
            <span className="text-red-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Must-Visit Winter Spots</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の甲府・湯村温泉で巡るべき三大名所
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-red-600" /> 武田神社（躑躅ヶ崎館跡）
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                武田信玄公の居館跡に鎮座する甲斐の総鎮守。名刀や軍旗を展示する宝物殿、名水が湧く姫の井戸、勝運を授かる神橋など、戦国最強の息吹が息づく新春初詣の聖地です。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：JR甲府駅北口より山梨交通バスで約8分。無料駐車場完備。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Waves className="w-5 h-5 text-sky-600" /> 信玄の隠し湯・湯村温泉街
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                開湯1200年の歴史を誇る温泉街。弘法大師ゆかりの塩澤寺や湯村山城跡を背に、昔ながらの老舗旅館や迎賓館が点在。弱アルカリ性の掛け流し湯が旅の疲れをじんわり解きます。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：甲府駅南口よりバス約15分。市街地から至近の静かな温泉郷。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Mountain className="w-5 h-5 text-indigo-600" /> 甲府城跡（舞鶴城公園）
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                武田氏滅亡後、豊臣秀吉の命により築城された名城。見事な野面積みの石垣が残り、天守台からは富士山、南アルプス、八ヶ岳の白銀の峰々を一望できる絶景展望スポット。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：JR甲府駅南口より徒歩約3分。入園無料。
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-l-4 border-red-600 pl-4">
            <span className="text-red-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              甲府・湯村温泉の冬を堪能する厳選名宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              名門迎賓館・源泉かけ流し老舗宿・天然温泉展望ホテルを厳選
            </p>
          </div>

          <div className="space-y-12">
            {hotels.map((h) => (
              <div key={h.id} className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-200/80 hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
                    <img
                      src={h.img}
                      alt={h.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-400"></span>
                      厳選宿 #{h.id}
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-red-800 bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
                          {h.special}
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span>{h.rating}</span>
                          <span className="text-slate-400 text-xs">({h.reviews}件)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                        {h.name}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {h.story}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs">
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <strong className="text-slate-900 block mb-1 flex items-center gap-1">
                            <Sun className="w-3.5 h-3.5 text-red-600" /> 客室・眺望の魅力
                          </strong>
                          <span className="text-slate-600">{h.roomTip}</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                          <strong className="text-slate-900 block mb-1 flex items-center gap-1">
                            <Utensils className="w-3.5 h-3.5 text-amber-600" /> 冬の美食ポイント
                          </strong>
                          <span className="text-slate-600">{h.gourmetTip}</span>
                        </div>
                      </div>

                      <ul className="space-y-1.5 mb-6 text-xs sm:text-sm text-slate-700">
                        {h.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-slate-500 block">宿泊料金の目安（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-extrabold text-red-900">{h.price}</span>
                      </div>

                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-sm shadow hover:from-red-700 hover:to-amber-700 transition-all"
                      >
                        <span>楽天トラベルでプランを見る</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Winter Itinerary Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-red-600 pl-4">
            <span className="text-red-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の甲府・湯村温泉を満喫する1泊2日モデルコース
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              甲府城展望、名物ほうとう、武田神社初詣、湯村温泉宿泊の黄金ルート
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-red-600 text-white text-xs rounded-md font-bold">1日目</span>
                甲府城跡天守台と武田神社新春初詣、湯村温泉へ
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed">
                <li><strong className="text-slate-900">11:30 JR甲府駅に到着</strong>：特急あずさ・かいじで甲府駅へ。南口すぐの「甲府城跡（舞鶴城公園）」へ登り、白雪の富士山と南アルプス連峰をパノラマ展望。</li>
                <li><strong className="text-slate-900">12:30 老舗店で名物ほうとうランチ</strong>：駅前の老舗ほうとう専門店で、甘いかぼちゃと旬根菜が溶け合う熱々ほうとうを味わう。</li>
                <li><strong className="text-slate-900">14:00 武田神社へ新春参拝</strong>：バスで武田神社へ。信玄公館跡の神聖な空気の中、勝運・開運祈願とお守り・福みくじを拝受。</li>
                <li><strong className="text-slate-900">16:00 湯村温泉へチェックイン</strong>：開湯1200年の信玄の隠し湯宿へ。弱アルカリ性の上質な温泉で冷えた身体をじっくり温める。</li>
                <li><strong className="text-slate-900">18:30 甲州牛会席と甲州ワインディナー</strong>：最高級黒毛和牛「甲州牛」の霜降りすき焼きやステーキ、山梨産ワインを堪能。</li>
              </ol>
            </div>

            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-amber-600 text-white text-xs rounded-md font-bold">2日目</span>
                昇仙峡の冬景色散策と甲州ワイナリー巡り
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed">
                <li><strong className="text-slate-900">08:00 宿で和朝食</strong>：朝の温泉入浴後、甲州名物の鳥もつ煮や温かい味噌汁、炊きたてご飯を味わう。</li>
                <li><strong className="text-slate-900">09:30 御岳昇仙峡へ</strong>：車またはバスで国の特別名勝・昇仙峡へ。冬の澄んだ大気の中で仙娥滝の氷瀑や覚円峰の奇岩絶壁を鑑賞。</li>
                <li><strong className="text-slate-900">12:30 甲府市街で鳥もつ煮ランチ</strong>：B級グルメ発祥店で甘辛タレが絡む名物「甲府鳥もつ煮」と蕎麦を堪能。</li>
                <li><strong className="text-slate-900">14:00 ワイナリーでお土産選び</strong>：老舗ワイナリーを訪れ、冬限定の甲州ワインや信玄餅をお土産に購入。</li>
                <li><strong className="text-slate-900">16:00 甲府駅より特急列車で帰路へ</strong>：快適な特急あずさ・かいじで新宿方面へ。</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Access and Winter Driving Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-red-600 pl-4">
            <span className="text-red-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Access & Winter Tips</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              甲府・湯村温泉へのアクセスと底冷え・冬道注意点
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Compass className="w-5 h-5 text-red-600" /> 電車・特急・高速バス
              </h3>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li><strong className="text-slate-900">JR中央線特急</strong>：新宿駅から「特急あずさ・かいじ」で甲府駅まで直通約1時間25分〜1時間35分。</li>
                <li><strong className="text-slate-900">静岡・名古屋方面から</strong>：東海道新幹線静岡駅からJR身延線特急ふじかわで甲府駅まで約2時間15分。</li>
                <li><strong className="text-slate-900">市内バス</strong>：甲府駅南口バスターミナルから湯村温泉方面行きバスが頻発（所要約15分）。</li>
              </ul>
            </div>

            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ThermometerSun className="w-5 h-5 text-amber-600" /> 中央道ドライブと路面凍結注意
              </h3>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li><strong className="text-slate-900">高速道路IC</strong>：中央自動車道「甲府昭和IC」より湯村温泉まで約15分。</li>
                <li><strong className="text-slate-900">冬道運転の注意</strong>：甲府盆地は晴天が多いですが、早朝や夜間は氷点下に冷え込み路面が凍結します。特に笹子トンネル付近や昇仙峡、山間部へ行く場合はスタッドレスタイヤを必ず装着してください。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-red-600 pl-4">
            <span className="text-red-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-2xl font-bold text-slate-900">
              冬の甲府・湯村温泉旅行 よくある質問（FAQ）
            </h2>
          </div>
          <div className="space-y-6">
            {faqList.map((faq, index) => (
              <div key={index} className="pb-6 border-b border-slate-100 last:border-b-0 last:pb-0">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <span className="text-red-600 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link Network */}
        <section className="bg-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-red-600" />
            あわせて読みたい！山梨・甲信越の冬特集記事
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/winter-yamanashi-isawa-onsen-wine-koshu-beef-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-red-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-red-600 block"
            >
              【石和温泉】名湯美肌風呂＆極上甲州ワインと甲州牛ステーキ名宿
            </Link>
            <Link
              href="/winter-yamanashi-kawaguchiko-onsen-fuji-view-koshu-beef-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-red-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-red-600 block"
            >
              【河口湖温泉】富士山雪景色と甲州牛会席を満喫する湖畔宿
            </Link>
            <Link
              href="/winter-yamanashi-kiyosato-yatsugatake-starry-sky-winebeef-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-red-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-red-600 block"
            >
              【清里・八ヶ岳】満天の冬星空観賞と甲州ワインビーフ名宿
            </Link>
            <Link
              href="/winter-nagano-suwa-onsen-lake-view-shinshu-beef-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-red-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-red-600 block"
            >
              【上諏訪温泉】諏訪大社四社まいり初詣＆信州牛と地酒名宿
            </Link>
            <Link
              href="/winter-shizuoka-fujinomiya-sengen-taisha-fuji-view-wagyu-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-red-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-red-600 block"
            >
              【富士宮】浅間大社新春初詣＆白雪富士山・静岡そだち牛名宿
            </Link>
            <Link
              href="/features"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-red-300 hover:shadow-xs transition-all text-sm font-bold text-red-700 block text-center flex items-center justify-center gap-1"
            >
              <span>全国の冬旅特集一覧を見る</span>
              <Compass className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </article>
  );
}
