import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Snowflake, Flame, Sun, Building, Sparkles, Heart, Castle
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月愛知】現存最古の木造天守・国宝犬山城の冬絶景＆三光稲荷神社新春初詣！名美肌湯「白帝の湯」と本場名古屋コーチンを堪能する名宿5選",
  description: "冬の愛知・犬山は、木曽川の断崖にそびえる現存最古の木造天守「国宝犬山城」が凛とした青空と朝霧に映え、ハートの絵馬で名高い三光稲荷神社や針綱神社が新春開運初詣で賑わう季節。江戸の町割りが残る城下町本町通りの食べ歩き、国宝茶室「如庵」の静謐な冬庭園。アルカリ性単純温泉「犬山温泉 白帝の湯」の柔らかな美肌湯に浸かり、日本三大地鶏の最高峰「名古屋コーチン」の濃厚な水炊きやすき焼き、飛騨牛料理に舌鼓を打つ厳選名宿5選を徹底解説します。",
  keywords: '犬山 ホテル, 国宝犬山城 冬景色, 三光稲荷神社 初詣, 犬山温泉 白帝の湯, 名古屋コーチン 鍋, ホテルインディゴ犬山有楽苑, 灯屋迎帆楼, 11月 12月 1月 愛知 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-aichi-inuyama-castle-kiso-river-nagoya-cochin-stay/"
  },
  openGraph: {
    title: "【11・12・1月愛知】現存最古の木造天守・国宝犬山城の冬絶景＆三光稲荷神社新春初詣！名美肌湯「白帝の湯」と本場名古屋コーチンを堪能する名宿5選",
    description: "冬の愛知・犬山は、木曽川の断崖にそびえる現存最古の木造天守「国宝犬山城」が凛とした青空と朝霧に映え、ハートの絵馬で名高い三光稲荷神社や針綱神社が新春開運初詣で賑わう季節。江戸の町割りが残る城下町本町通りの食べ歩き、国宝茶室「如庵」の静謐な冬庭園。アルカリ性単純温泉「犬山温泉 白帝の湯」の柔らかな美肌湯に浸かり、日本三大地鶏の最高峰「名古屋コーチン」の濃厚な水炊きやすき焼き、飛騨牛料理に舌鼓を打つ厳選名宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-aichi-inuyama-castle-kiso-river-nagoya-cochin-stay',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=630', width: 1200, height: 630, alt: '国宝犬山城と木曽川の冬景色' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月愛知】現存最古の木造天守・国宝犬山城の冬絶景＆三光稲荷神社新春初詣！名美肌湯「白帝の湯」と本場名古屋コーチンを堪能する名宿5選",
    description: "冬の愛知・犬山は、木曽川の断崖にそびえる現存最古の木造天守「国宝犬山城」が凛とした青空と朝霧に映え、ハートの絵馬で名高い三光稲荷神社や針綱神社が新春開運初詣で賑わう季節。江戸の町割りが残る城下町本町通りの食べ歩き、国宝茶室「如庵」の静謐な冬庭園。アルカリ性単純温泉「犬山温泉 白帝の湯」の柔らかな美肌湯に浸かり、日本三大地鶏の最高峰「名古屋コーチン」の濃厚な水炊きやすき焼き、飛騨牛料理に舌鼓を打つ厳選名宿5選を徹底解説します。"
  }
};

export default function AichiInuyamaPage() {
  const hotels = [
            {
              id: 1,
              name: "ホテルインディゴ犬山有楽苑　ｂｙ　ＩＨＧ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/183344/183344.jpg",
              rating: 4.37,
              reviews: 537,
              price: "¥16,000〜",
              access: "名鉄犬山遊園駅より徒歩約7分",
              special: "名古屋駅から電車で30分～犬山城を訪れ、天然温泉で寛ぎの時間を～",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183344%2F183344.html",
              story: "木曽川のほとり、国宝茶室「如庵」を有する名勝庭園「有楽苑」に抱かれた「ホテルインディゴ犬山有楽苑 ｂｙ ＩＨＧ」。客室のバルコニーや大きなピクチャーウィンドウからは、冬の澄んだ大気に浮かぶ国宝犬山城の勇姿と木曽川の清流を一望できます。館内には犬山の祭り文化や茶の湯の美学をモダンに昇華したアートが散りばめられ、大浴場では名湯「犬山温泉 白帝の湯」の露天風呂を満喫。冬の夕食には、地元尾張の旬野菜や名古屋コーチン、近隣の銘柄和牛をフランス料理の技法で繊細に仕上げたインディゴ特製ディナーが振る舞われ、歴史と現代の感性が響き合うラグジュアリーステイを約束します。",
              roomTip: "国宝犬山城ビュープレミアムルーム。バルコニーからライトアップされた夜の犬山城と朝霧の木曽川を望む圧倒的な眺望。",
              gourmetTip: "「車山（やま）フレンチディナー」。じっくり火入れした名古屋コーチンのローストと、美濃・尾張の冬野菜のハーモニー。",
              highlights: [
                "名勝有楽苑隣接・バルコニーから国宝犬山城と木曽川のパノラマ・天然温泉白帝の湯露天風呂",
                "尾張の旬野菜と名古屋コーチンを昇華させたイノベーティブフレンチ・洗練された空間",
                "有楽苑茶室如庵の歴史散策・デザイン性の高いインテリアと上質なライフスタイル体験"
              ]
            },
            {
              id: 2,
              name: "ホテルミュースタイル犬山エクスペリエンス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/182415/182415.jpg",
              rating: 4.42,
              reviews: 703,
              price: "¥5,500〜",
              access: "名鉄犬山駅から徒歩１分",
              special: "泊まるだけじゃない、本物の犬山体験を",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182415%2F182415.html",
              story: "名鉄犬山駅西口から徒歩わずか1分という抜群のアクセスを誇る「ホテルミュースタイル犬山エクスペリエンス」。犬山城下町の風情を取り入れた洗練されたインテリアが特徴で、城下町散策や新春の三光稲荷神社・針綱神社参拝の拠点として極めて軽快に利用できます。宿の大きな自慢は、犬山温泉「白帝の湯」を引湯した広々とした天然温泉大浴場と露天風呂。オートロウリュサウナと水風呂も完備され、冬の冷え切った身体をととのえる極上の温浴体験を提供します。ラウンジやカフェスペースも充実し、自由気ままでアクティブな大人の冬旅を快適に支えてくれます。",
              roomTip: "モデレートツインルーム。犬山の伝統工芸や車山の色彩をアクセントにしたモダンな客室。快眠を誘う上質なベッドと独立洗面台。",
              gourmetTip: "「犬山城下町グルメ探訪」。ホテル周辺や城下町の本町通りで、名物みたらし団子や飛騨牛にぎり、名古屋コーチン釜飯を食べ歩き。",
              highlights: [
                "名鉄犬山駅西口徒歩1分・オートロウリュサウナ付き白帝の湯大浴場・城下町散策に最適",
                "城下町本町通りや周辺の名古屋コーチン専門店へのアクセス抜群・自由気ままな美食旅",
                "サウナ＆水風呂で冬の温冷交代浴・無料Wi-Fi完備・清潔で快適なデザイナーズ客室"
              ]
            },
            {
              id: 3,
              name: "灯屋　迎帆楼",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/162755/162755.jpg",
              rating: 4.60,
              reviews: 103,
              price: "¥56,100〜",
              access: "犬山駅よりお車にて約５分、徒歩にて約１５分",
              special: "全室半露天風呂付・十室限定の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F162755%2F162755.html",
              story: "大正8年創業、木曽川のほとりに佇む「灯屋 迎帆楼（あかりや げいはんろう）」は、わずか16室すべてが木曽川と国宝犬山城を望む半露天風呂付きスイートという究極の隠れ宿です。冬の朝、木曽川から立ち上る川霧の向こうに白帝城（犬山城）が浮かび上がる幻想的な光景は、迎帆楼の特等席だからこそ味わえる奇跡の瞬間。全室のお風呂には美肌効果の高い「犬山温泉 白帝の湯」が滔々と注ぎます。夕食は旬の美味を極めた月替わりの本格会席。弾力ある名古屋コーチンの治部煮やりんご鍋、極上飛騨牛の炭火焼きなど、料理人の研ぎ澄まされた技が光る美食を心ゆくまで堪能できます。",
              roomTip: "キャッスルビューラグジュアリースイート。テラスの半露天風呂に浸かりながら国宝犬山城を見上げる至福のプライベート空間。",
              gourmetTip: "「迎帆楼名物・迎帆会席」。純系名古屋コーチンの深い旨みと、厳選された冬の黒毛和牛、旬の川魚が織りなす最高峰の日本料理。",
              highlights: [
                "全室木曽川＆犬山城ビュー半露天風呂付き・大正創業老舗の最高級おもてなし・贅沢な全16室",
                "純系名古屋コーチンと極上飛騨牛の月替わり特選懐石・厳選地酒とのマリアージュ",
                "朝霧に浮かぶ国宝犬山城の幻想風景・記念日やご褒美旅にふさわしい至高のプライベート"
              ]
            },
            {
              id: 4,
              name: "犬山温泉　臨江館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15091/15091.jpg",
              rating: 4.15,
              reviews: 205,
              price: "¥4,400〜",
              access: "名鉄犬山遊園駅西口より２５０ｍ徒歩６分／東名高速道路小牧ＩＣ下車犬山城方面へ",
              special: "犬山城観光に便利　駐車無料。犬山温泉と日本料理がちょっぴり自慢。 昭和のお宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15091%2F15091.html",
              story: "木曽川の穏やかな水面を眼前に望み、明治の文豪たちも愛した川沿いの景勝地に佇む純和風の湯宿「犬山温泉 臨江館」。国宝犬山城へも城下町へも徒歩圏内でありながら、川のせせらぎが心地よい静寂に包まれています。大浴場には肌にしっとりと馴染むアルカリ性単純温泉「白帝の湯」が溢れ、冬の旅の疲れを優しく解きほぐしてくれます。夕食はお部屋食または個室風の食事処で、朝引きの新鮮な名古屋コーチンを贅沢に使った水炊き鍋や味噌すき焼き、三河湾直送の旬魚が並び、どこか懐かしく温かい日本旅館ならではの真心のおもてなしに癒やされます。",
              roomTip: "リバービュー和室10畳。窓を開ければ悠々と流れる木曽川のパノラマ。冬の川風を感じながら静かに寛げる純和風の安らぎ。",
              gourmetTip: "「名古屋コーチン尽くし会席」。歯ごたえと旨み抜群のコーチン肉を熱々の白湯スープで炊き上げる絶品鍋と、コーチン卵の雑炊。",
              highlights: [
                "木曽川湖畔の閑静な純和風旅館・美肌の湯白帝の湯大浴場・名古屋コーチン鍋のお部屋食",
                "朝引き名古屋コーチン水炊き鍋＆すき焼き会席・三河湾の旬魚と手作り和食",
                "川のせせらぎを聞きながら過ごす落ち着いた時間・心温まるおもてなしと家庭的な寛ぎ"
              ]
            },
            {
              id: 5,
              name: "犬山ミヤコホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5169/5169.jpg",
              rating: 4.22,
              reviews: 684,
              price: "¥5,450〜",
              access: "名鉄犬山駅より徒歩５分、小牧インターより25分",
              special: "2024年秋にフルリニューアル。犬山駅徒歩5分とアクセス至便で大駐車場も完備で宿泊拠点に最適です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5169%2F5169.html",
              story: "名鉄犬山駅から徒歩5分、犬山城の城下町エリアにもほど近い便利な立地に位置する「犬山ミヤコホテル」。ビジネスから観光まで幅広く愛されるアットホームなホテルで、冬のひとり旅や気軽なカップル旅に使い勝手の良い機能性を備えています。全室に無料高速Wi-Fi、個別空調、快適な寝具を完備。フロントスタッフの温かな案内とともに、三光稲荷神社の新春初詣や城下町食べ歩き、日本モンキーパークへのアクセスもスムーズ。周辺には地元の人々が通う名店が揃い、気軽に名古屋コーチンや尾張の郷土料理を楽しむことができます。",
              roomTip: "スタンダードダブル・ツイン。コンパクトながら機能的にまとめられた清潔な客室。リーズナブルに連泊しやすい快適設計。",
              gourmetTip: "「犬山駅前・城下町の郷土酒場巡り」。地元の居酒屋で熱々の赤味噌おでんや手羽先唐揚げ、名古屋コーチン焼き鳥と愛知の地酒。",
              highlights: [
                "名鉄犬山駅徒歩5分・城下町や三光稲荷神社への軽快アクセス・安心のリーズナブルステイ",
                "周辺に郷土料理店多数・熱々の八丁味噌おでんや手羽先唐揚げ・地酒を気軽に楽しむ",
                "無料Wi-Fi・観光のフットワーク重視派に嬉しい機能的な設備と親しみやすいサービス"
              ]
            }
  ];

  const faqList = [
  {
    "q": "冬（11月〜1月）の国宝犬山城の見どころや朝霧・夕景の絶景ポイントは？",
    "a": "国宝犬山城は天文6年（1537年）織田信長の叔父・織田信康によって築かれたとされ、天守は現存する日本最古の木造天守です。木曽川沿いの標高約88mの断崖の上にそびえ立ち、江戸時代の儒学者・荻生徂徠が李白の詩にちなんで「白帝城」と命名しました。冬期は空気が澄み渡り、最上階の望楼（廻り縁）からは木曽川の流れや御嶽山、恵那山、名古屋市街のビル群まで360度の大パノラマが広がります。特に冬の早朝、木曽川から立ち上る川霧（朝霧）の中に天守が浮かび上がる光景や、夕暮れ時に茜色に染まる水面と天守のシルエットは息をのむ美しさです。"
  },
  {
    "q": "三光稲荷神社の新春初詣（ハート絵馬・銭洗い）と針綱神社の開運ご利益は？",
    "a": "犬山城の麓に位置する「三光稲荷神社」は、城主・成瀬家の守護神として信仰された古社で、家内安全や商売繁盛、交通安全のご利益で知られます。特に境内社の猿田彦神社にちなむピンク色の「ハートの絵馬」は縁結びのパワースポットとして全国的な人気を誇ります。また境内の「銭洗稲荷神社」では、御神水でお金を洗い清めると何倍にもなって返ってくると伝わり、新春初詣の金運祈願として大変な賑わいを見せます。隣接する「針綱神社」は東海鎮護・安産・延命長寿の神として親しまれ、城山への登城口で両社を巡る新春参拝が定番です。"
  },
  {
    "q": "本場の「名古屋コーチン」の魅力と犬山での冬の味わい方は？",
    "a": "名古屋コーチン（尾張地鶏）は、明治時代初期に旧尾張藩士の海部兄弟が開発した日本初の国産実用鶏で、比内地鶏・薩摩地鶏と並ぶ「日本三大地鶏」の最高峰です。肉質は引き締まり、赤みを帯びた肉にはコクのある脂が適度に入り、噛むほどに芳醇な旨みと心地よい歯ごたえが広がります。冬の犬山では、じっくり煮込んだ鶏ガラ白湯スープでいただく「水炊き鍋」や、愛知特産の八丁味噌で仕立てる「味噌すき焼き（引き摺り鍋）」が絶品。濃厚でコクのある名古屋コーチンの卵でとじる親子丼や卵かけご飯も外せない郷土グルメです。"
  },
  {
    "q": "犬山温泉「白帝の湯」の特徴や泉質、効能は？",
    "a": "犬山温泉「白帝の湯」は、木曽川のほとり、犬山城の麓に湧き出る天然温泉です。泉質はアルカリ性単純温泉（低張性弱アルカリ性低温泉）で、pH約8.5前後の滑らかなお湯が特徴。無色透明で刺激が少なく、肌の古い角質を優しく落としてスベスベに整えることから「美肌の湯」として女性を中心に高く評価されています。効能は冷え性、疲労回復、筋肉痛、関節痛、神経痛など。冬の寒風で冷えた身体を芯からポカポカに温めてくれます。"
  },
  {
    "q": "冬の犬山散策の気候、服装、アクセス方法は？",
    "a": "犬山市は濃尾平野の北端に位置し、11月は紅葉の残る穏やかな気候（平均気温約12℃）ですが、12月〜1月は伊吹山から吹き下ろす「伊吹おろし」の冷たい風が吹き、平均気温は約4〜6℃、朝晩は氷点近くまで冷え込みます。雪が積もることは比較的稀ですが、防風性のあるダウンジャケット、マフラー、手袋などの防寒具が必要です。アクセスは名古屋駅から名鉄犬山線の特急・快速特急で犬山駅または犬山遊園駅まで約25〜30分と極めて快適。車の場合は名神高速道路・小牧ICから国道41号線経由で約25分です。"
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
          { '@type': 'ListItem', 'position': 3, 'name': '国宝犬山城冬景色と白帝の湯・名古屋コーチン名宿', 'item': 'https://croud-travel.com/winter-aichi-inuyama-castle-kiso-river-nagoya-cochin-stay' }
        ]
      },
      {
        '@type': 'TouristDestination',
        'name': '国宝犬山城・三光稲荷神社・犬山温泉白帝の湯',
        'description': "冬の愛知・犬山は、木曽川の断崖にそびえる現存最古の木造天守「国宝犬山城」が凛とした青空と朝霧に映え、ハートの絵馬で名高い三光稲荷神社や針綱神社が新春開運初詣で賑わう季節。江戸の町割りが残る城下町本町通りの食べ歩き、国宝茶室「如庵」の静謐な冬庭園。アルカリ性単純温泉「犬山温泉 白帝の湯」の柔らかな美肌湯に浸かり、日本三大地鶏の最高峰「名古屋コーチン」の濃厚な水炊きやすき焼き、飛騨牛料理に舌鼓を打つ厳選名宿5選を徹底解説します。",
        'touristType': ['歴史探訪', '城郭建築', '新春初詣', '温泉保養', '地鶏美食']
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': "冬（11月〜1月）の国宝犬山城の見どころや朝霧・夕景の絶景ポイントは？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "国宝犬山城は天文6年（1537年）織田信長の叔父・織田信康によって築かれたとされ、天守は現存する日本最古の木造天守です。木曽川沿いの標高約88mの断崖の上にそびえ立ち、江戸時代の儒学者・荻生徂徠が李白の詩にちなんで「白帝城」と命名しました。冬期は空気が澄み渡り、最上階の望楼（廻り縁）からは木曽川の流れや御嶽山、恵那山、名古屋市街のビル群まで360度の大パノラマが広がります。特に冬の早朝、木曽川から立ち上る川霧（朝霧）の中に天守が浮かび上がる光景や、夕暮れ時に茜色に染まる水面と天守のシルエットは息をのむ美しさです。"
            }
          },
          {
            '@type': 'Question',
            'name': "三光稲荷神社の新春初詣（ハート絵馬・銭洗い）と針綱神社の開運ご利益は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "犬山城の麓に位置する「三光稲荷神社」は、城主・成瀬家の守護神として信仰された古社で、家内安全や商売繁盛、交通安全のご利益で知られます。特に境内社の猿田彦神社にちなむピンク色の「ハートの絵馬」は縁結びのパワースポットとして全国的な人気を誇ります。また境内の「銭洗稲荷神社」では、御神水でお金を洗い清めると何倍にもなって返ってくると伝わり、新春初詣の金運祈願として大変な賑わいを見せます。隣接する「針綱神社」は東海鎮護・安産・延命長寿の神として親しまれ、城山への登城口で両社を巡る新春参拝が定番です。"
            }
          },
          {
            '@type': 'Question',
            'name': "本場の「名古屋コーチン」の魅力と犬山での冬の味わい方は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "名古屋コーチン（尾張地鶏）は、明治時代初期に旧尾張藩士の海部兄弟が開発した日本初の国産実用鶏で、比内地鶏・薩摩地鶏と並ぶ「日本三大地鶏」の最高峰です。肉質は引き締まり、赤みを帯びた肉にはコクのある脂が適度に入り、噛むほどに芳醇な旨みと心地よい歯ごたえが広がります。冬の犬山では、じっくり煮込んだ鶏ガラ白湯スープでいただく「水炊き鍋」や、愛知特産の八丁味噌で仕立てる「味噌すき焼き（引き摺り鍋）」が絶品。濃厚でコクのある名古屋コーチンの卵でとじる親子丼や卵かけご飯も外せない郷土グルメです。"
            }
          },
          {
            '@type': 'Question',
            'name': "犬山温泉「白帝の湯」の特徴や泉質、効能は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "犬山温泉「白帝の湯」は、木曽川のほとり、犬山城の麓に湧き出る天然温泉です。泉質はアルカリ性単純温泉（低張性弱アルカリ性低温泉）で、pH約8.5前後の滑らかなお湯が特徴。無色透明で刺激が少なく、肌の古い角質を優しく落としてスベスベに整えることから「美肌の湯」として女性を中心に高く評価されています。効能は冷え性、疲労回復、筋肉痛、関節痛、神経痛など。冬の寒風で冷えた身体を芯からポカポカに温めてくれます。"
            }
          },
          {
            '@type': 'Question',
            'name': "冬の犬山散策の気候、服装、アクセス方法は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "犬山市は濃尾平野の北端に位置し、11月は紅葉の残る穏やかな気候（平均気温約12℃）ですが、12月〜1月は伊吹山から吹き下ろす「伊吹おろし」の冷たい風が吹き、平均気温は約4〜6℃、朝晩は氷点近くまで冷え込みます。雪が積もることは比較的稀ですが、防風性のあるダウンジャケット、マフラー、手袋などの防寒具が必要です。アクセスは名古屋駅から名鉄犬山線の特急・快速特急で犬山駅または犬山遊園駅まで約25〜30分と極めて快適。車の場合は名神高速道路・小牧ICから国道41号線経由で約25分です。"
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
      <header className="relative bg-gradient-to-br from-stone-950 via-rose-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-200 text-xs sm:text-sm font-medium mb-6">
            <Snowflake className="w-4 h-4 text-rose-300" />
            11月・12月・1月冬の特選旅｜愛知・犬山＆木曽川
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-6">
            現存最古の木造天守・国宝犬山城の冬絶景＆三光稲荷神社新春初詣！<br className="hidden sm:inline" />
            名美肌湯「白帝の湯」と本場名古屋コーチンを堪能する名宿5選
          </h1>
          <p className="text-base sm:text-lg text-stone-200/90 leading-relaxed max-w-4xl mb-8">
            木曽川の清流と断崖の上に屹立する現存最古の木造天守・国宝犬山城。11月から1月にかけての冬は、澄み切った青空に白帝城が凛とそびえ立ち、朝霧に煙る幻想的な水辺の風景が広がります。ハート絵馬と銭洗いで名高い三光稲荷神社での新春開運祈願、江戸の風情を色濃く残す城下町の散策。そして弱アルカリ性の美肌湯「白帝の湯」に癒やされ、日本三大地鶏・名古屋コーチンの極上鍋を味わう特別な冬旅へご案内します。
          </p>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-400" /> 愛知県犬山市（犬山城・木曽川畔）</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-rose-400" /> 好適期：11月上旬〜1月下旬</span>
            <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-rose-400" /> 三光稲荷初詣＆本場名古屋コーチン</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Atmosphere & Tradition</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              木曽川の朝霧に浮かぶ白帝城の気品と、尾張の歴史が育んだ地鶏美食の極み
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              江戸の町割りが息づく城下町と、心洗われる新春の祈りが織りなす冬の尾張路
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              愛知県北西部に位置する犬山は、戦国時代から城下町として栄え、豊かな自然と重厚な歴史文化が融合した風光明媚な街です。その象徴である「国宝犬山城」は、織田信長の叔父・織田信康によって天文6年（1537年）に築城されたと伝わり、天守は現存する木造天守の中で最も古い歴史を誇ります。冬の凛とした冷気の中、木曽川の断崖の上にそびえる天守の姿は、江戸時代の儒学者・荻生徂徠が中国の名勝に擬えて「白帝城」と名付けた通りの格調高い気品を放ちます。特に冷え込みが厳しい冬の朝、木曽川の水面から立ち上る川霧が城山を包み込み、まるで雲海に浮かぶ天空の城のような幻想的な姿を見せてくれます。
            </p>
            <p>
              城の麓には、城主・成瀬家の守護神として崇敬された「三光稲荷神社」と東海鎮護の「針綱神社」が鎮座します。三光稲荷神社の境内には、ピンク色のハート絵馬がびっしりと奉納され、良縁成就を願う参拝者で賑わうとともに、御神水でお金を洗い清める「銭洗い」で新春の金運上昇を祈願する人々が列を作ります。神社の鳥居を抜けて広がる城下町「本町通り」には、江戸から明治・大正期の町屋が連なり、名物の五平餅やみたらし団子、飛騨牛にぎり寿司、香ばしい田楽など、冬の寒さを温める食べ歩きグルメが旅の楽しみを広げてくれます。
            </p>
            <p>
              そして冬の犬山滞在を最高のものにしてくれるのが、名湯「犬山温泉 白帝の湯」と本場の「名古屋コーチン」です。木曽川沿いに湧出する白帝の湯は、pH8.5の弱アルカリ性単純温泉。まるで美容液のように肌を滑らかに包み込み、冬の乾燥した素肌をしっとりと潤してくれます。湯上がりに味わう夕食の主役は、日本三大地鶏の筆頭である「名古屋コーチン」。尾張藩の武士が情熱を傾けて生み出したこの地鶏は、引き締まった肉質から溢れ出る濃厚な旨みと心地よい弾力が格別です。骨付き肉と冬野菜をじっくり炊き上げた熱々の水炊き鍋や、愛知特産の八丁味噌で香ばしく煮込むすき焼きは、冬の尾張路の贅沢そのものです。
            </p>
            <p>
              冬晴れの空の下、国宝茶室「如庵」が佇む有楽苑の静寂な日本庭園を歩けば、織田有楽斎が極めた茶の湯の精神が静かに心を満たします。木曽川の清流と歴史ある街並みが調和する犬山は、冬の澄み渡る大気の中で最も深い趣を湛え、訪れる旅人に忘れがたい安らぎを与えてくれます。
            </p>
          </div>

          {/* 3 Pillar Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-rose-50/60 border border-rose-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">現存最古・国宝犬山城の望楼</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                木曽川の断崖に立つ白帝城。澄み切った冬空の下、最上階の廻り縁から見渡す御嶽山と濃尾平野の大パノラマ。
              </p>
            </div>

            <div className="bg-rose-50/60 border border-rose-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">三光稲荷の新春初詣＆城下町</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                縁結びハート絵馬と金運銭洗いの新春祈願。本町通りの江戸町屋が連なる情緒ある通りでの名物食べ歩き。
              </p>
            </div>

            <div className="bg-rose-50/60 border border-rose-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">美肌湯「白帝の湯」＆名古屋コーチン</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                弱アルカリ性の柔らかな美肌温泉。噛むほどに旨みが溢れる最高峰地鶏名古屋コーチンの熱々冬鍋会席。
              </p>
            </div>
          </div>
        </section>

        {/* Month Guide */}
        <section className="bg-gradient-to-r from-stone-900 to-rose-950 text-white rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
          <div className="border-l-4 border-rose-400 pl-4">
            <span className="text-rose-300 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Seasonal Calendar</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              11月・12月・1月の見どころカレンダー＆気候・服装ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between border-b border-white/20 pb-2">
                <span className="font-bold text-rose-300 text-base">11月（晩秋・紅葉の彩り）</span>
                <span className="text-xs text-stone-300">平均気温 12.0℃</span>
              </div>
              <p className="text-stone-200 text-xs sm:text-sm leading-relaxed">
                犬山城山や日本庭園・有楽苑のモミジが深紅に染まる紅葉ハイシーズン。日中は暖かく城下町の散策が快適で、夕暮れの木曽川マジックアワーが美しい季節。
              </p>
              <div className="text-xs text-rose-200">
                おすすめ服装：ウールジャケット、ニットセーター、脱ぎ着しやすい羽織り
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between border-b border-white/20 pb-2">
                <span className="font-bold text-rose-300 text-base">12月（初冬・朝霧と澄澄天）</span>
                <span className="text-xs text-stone-300">平均気温 6.8℃</span>
              </div>
              <p className="text-stone-200 text-xs sm:text-sm leading-relaxed">
                空気が一段と澄み渡り、天守からの遠望が最高潮に。早朝には木曽川から幻想的な川霧が立ち上ります。犬山温泉白帝の湯で温まる心地よさが身に染みる季節。
              </p>
              <div className="text-xs text-rose-200">
                おすすめ服装：中綿・ダウンジャケット、マフラー、手袋、保温性のある靴
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between border-b border-white/20 pb-2">
                <span className="font-bold text-rose-300 text-base">1月（新春初詣・伊吹おろし）</span>
                <span className="text-xs text-stone-300">平均気温 4.5℃</span>
              </div>
              <p className="text-stone-200 text-xs sm:text-sm leading-relaxed">
                正月三が日は三光稲荷神社・針綱神社が新春初詣客で大変賑わいます。伊吹山からの寒風が吹きますが、熱々の名古屋コーチン鍋と地酒で芯から温まる冬旅が格別。
              </p>
              <div className="text-xs text-rose-200">
                おすすめ服装：厚手防風ダウンコート、マフラー、手袋、カイロ、防寒インナー
              </div>
            </div>
          </div>
        </section>

        {/* Must-Visit Winter Spots Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Must-Visit Winter Spots</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬に訪れるべき犬山・木曽川の三大名所と体験ポイント
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Castle className="w-5 h-5 text-rose-600" /> 国宝犬山城（白帝城）
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                現存最古の木造天守。冬の澄んだ空気の中、最上階の廻り縁から見渡す木曽川の清流と御嶽山の雪山パノラマは息をのむ絶景。冬の早朝に現れる川霧と城郭の幻想的な光景も見逃せません。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：名鉄犬山駅より徒歩約15分。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-600" /> 三光稲荷神社＆針綱神社
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                城山の登城口に鎮座する二大社。三光稲荷神社のピンクのハート絵馬での良縁祈願と、御神水でお金を洗う銭洗いでの金運祈願。針綱神社の安産・延命長寿祈願と合わせた新春参拝が人気です。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：犬山城登城口すぐ。参拝自由。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Building className="w-5 h-5 text-rose-600" /> 犬山城下町（本町通り）＆有楽苑
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                江戸の風情を残す町屋が連なる通り。冬の食べ歩きには熱々のみたらし団子や五平餅、飛騨牛串が最高です。隣接する有楽苑では織田信長の弟・有楽斎が建てた国宝茶室「如庵」の静謐な冬姿を鑑賞。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：名鉄犬山駅西口より徒歩約8分。
              </div>
            </div>
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の犬山を満喫する1泊2日王道モデルコース
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-rose-800 block text-sm">【1日目】城下町食べ歩きと国宝犬山城登城・美肌温泉ステイ</span>
              <p className="leading-relaxed">
                名古屋駅から名鉄特急で約25分、犬山駅に到着。まずは本町通りの城下町を散策し、香ばしい五平餅や飛騨牛にぎり寿司を堪能。三光稲荷神社でハート絵馬奉納と銭洗いの開運祈願。続いて国宝犬山城の急階段を登り、天守望楼から冬の木曽川パノラマを満喫。夕方に宿へチェックインし、犬山温泉「白帝の湯」の柔らかな湯に浸かります。夕食は本場名古屋コーチンの濃厚水炊き鍋やすき焼きを地酒とともに味わいます。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-rose-800 block text-sm">【2日目】木曽川の朝霧絶景と国宝茶室如庵・針綱神社参拝</span>
              <p className="leading-relaxed">
                早朝、木曽川沿いを散策して川霧に煙る白帝城の幻想的な姿を鑑賞。宿で美味しい朝食をいただいた後、名勝有楽苑へ。国宝茶室「如庵」の洗練された佇まいと手入れの行き届いた日本庭園で一服。針綱神社で新春の厄除け祈願を行った後は、駅前のお土産処で犬山銘菓「げんこつ飴」や守口漬を購入し、名鉄電車で帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Curated Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              冬の犬山・木曽川を満喫する厳選名宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              国宝天守を仰ぎ見るラグジュアリーホテルから老舗料亭旅館・駅近温泉リゾートまで
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row"
              >
                {/* Hotel Image */}
                <div className="md:w-5/12 relative min-h-[260px] md:min-h-[320px] bg-slate-100">
                  <img 
                    src={hotel.img} 
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-rose-950/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    厳選名宿 #{hotel.id}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{hotel.rating}</span>
                    <span className="text-slate-400 font-normal">({hotel.reviews}件)</span>
                  </div>
                </div>

                {/* Hotel Info */}
                <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-100 pb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                        {hotel.name}
                      </h3>
                      <span className="text-sm sm:text-base font-bold text-rose-800">
                        {hotel.price}
                      </span>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {hotel.story}
                    </p>

                    <div className="space-y-2 pt-1 text-xs sm:text-sm">
                      <div className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        <div><strong className="text-slate-900">客室の魅力：</strong>{hotel.roomTip}</div>
                      </div>
                      <div className="flex items-start gap-2 text-slate-700">
                        <Utensils className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        <div><strong className="text-slate-900">冬の美食：</strong>{hotel.gourmetTip}</div>
                      </div>
                      <div className="flex items-start gap-2 text-slate-500">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <div><strong className="text-slate-700">交通：</strong>{hotel.access}</div>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-1.5">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">こだわりポイント</span>
                      <ul className="text-xs text-slate-600 space-y-1">
                        {hotel.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-bold text-sm shadow-xs transition-colors duration-200"
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

        {/* Deep FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の犬山・木曽川旅行 よくある質問とアドバイス
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              現地を深く知る専門視点から冬の旅をサポートする5つの疑問に回答
            </p>
          </div>

          <div className="space-y-6">
            {faqList.map((faq, idx) => (
              <div key={idx} className="border-b border-slate-100 pb-5 last:border-b-0 last:pb-0 space-y-2">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">Q</span>
                  {faq.q}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links */}
        <section className="bg-slate-100/80 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6">
          <div className="border-l-4 border-slate-600 pl-4">
            <span className="text-slate-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Guides</span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              東海・中部エリアの冬旅＆関連する冬の厳選特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-aichi-nagoya-atsuta-jingu-hatsumode-hitsumabushi-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-rose-700 mb-1">名古屋・熱田神宮初詣＆ひつまぶし</div>
              <div className="text-slate-500 text-xs">三種の神器草薙神剣の古社参拝と名古屋名物うなぎの名宿特集</div>
            </Link>
            <Link 
              href="/winter-gifu-gujo-hachiman-snow-castle-hidagyu-keichan-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-rose-700 mb-1">岐阜・郡上八幡城雪景色＆宗祇水</div>
              <div className="text-slate-500 text-xs">日本最古木造再建城の雪化粧と奥美濃名物鶏ちゃん・飛騨牛</div>
            </Link>
            <Link 
              href="/winter-aichi-minamichita-onsen-torafugu-chita-beef-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-rose-700 mb-1">南知多温泉郷のとらふぐ＆知多牛</div>
              <div className="text-slate-500 text-xs">伊勢湾の夕陽絶景と冬の天然とらふぐフルコース名宿ガイド</div>
            </Link>
            <Link 
              href="/winter-mie-ise-jingu-hatsumode-okageyokocho-iseebi-matsusaka-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-rose-700 mb-1">伊勢神宮新春初詣＆伊勢海老・松阪牛</div>
              <div className="text-slate-500 text-xs">お伊勢参りと宇治橋朝陽・おかげ横丁食べ歩きと名宿ステイ</div>
            </Link>
            <Link 
              href="/winter-shizuoka-hamanako-kanzanji-torafugu-unagi-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-rose-700 mb-1">浜名湖かんざんじ温泉の天然ふぐ＆鰻</div>
              <div className="text-slate-500 text-xs">遠州灘の冬の恵みと湖畔の絶景露天風呂名宿特集</div>
            </Link>
            <Link 
              href="/features" 
              className="p-4 rounded-2xl bg-rose-950 text-white hover:bg-stone-950 transition-all block flex flex-col justify-center items-center text-center font-bold"
            >
              <span>全国の冬特集一覧を見る →</span>
              <span className="text-rose-200 text-xs font-normal mt-1">11・12・1月の厳選記事を多数掲載</span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-aichi-inuyama-castle-kiso-river-nagoya-cochin-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
