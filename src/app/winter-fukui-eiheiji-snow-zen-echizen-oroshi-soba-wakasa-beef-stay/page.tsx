import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Snowflake, Flame, Sun, Mountain, Sparkles, Building, Waves
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月福井】曹洞宗大本山永平寺の雪静寂＆新春開運参拝！名物越前おろしそばと極上若狭牛・越前がにを味わう名宿5選",
  description: "冬の福井・永平寺は、樹齢数百年を数える杉木立と回廊が純白の雪に包まれ、770余年の歴史を誇る禅の祈りが厳かに響き渡る静寂の聖地。11月から1月にかけての冬期は、永平寺の新春開運参拝や坐禅体験、傘松閣の絵天井の美、名物「越前おろしそば」のピリリとした大根の辛み、そして日本海がもたらす冬の味覚の王者「越前がに」と極上黒毛和牛「若狭牛」の贅沢な味わい。北陸新幹線でより身近になった福井の歴史と美味に浸る厳選名宿5選を詳しくご案内します。",
  keywords: '永平寺 ホテル, 永平寺 親禅の宿 柏樹關, 福井 永平寺 初詣, 越前おろしそば, 若狭牛, 越前がに, コートヤードバイマリオット福井, 11月 12月 1月 福井 観光',
  alternates: {
    canonical: 'https://croud-travel.com/winter-fukui-eiheiji-snow-zen-echizen-oroshi-soba-wakasa-beef-stay'
  },
  openGraph: {
    title: "【11・12・1月福井】曹洞宗大本山永平寺の雪静寂＆新春開運参拝！名物越前おろしそばと極上若狭牛・越前がにを味わう名宿5選",
    description: "冬の福井・永平寺は、樹齢数百年を数える杉木立と回廊が純白の雪に包まれ、770余年の歴史を誇る禅の祈りが厳かに響き渡る静寂の聖地。11月から1月にかけての冬期は、永平寺の新春開運参拝や坐禅体験、傘松閣の絵天井の美、名物「越前おろしそば」のピリリとした大根の辛み、そして日本海がもたらす冬の味覚の王者「越前がに」と極上黒毛和牛「若狭牛」の贅沢な味わい。北陸新幹線でより身近になった福井の歴史と美味に浸る厳選名宿5選を詳しくご案内します。",
    url: 'https://croud-travel.com/winter-fukui-eiheiji-snow-zen-echizen-oroshi-soba-wakasa-beef-stay',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=630', width: 1200, height: 630, alt: '大本山永平寺の雪景色と静寂の回廊' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月福井】曹洞宗大本山永平寺の雪静寂＆新春開運参拝！名物越前おろしそばと極上若狭牛・越前がにを味わう名宿5選",
    description: "冬の福井・永平寺は、樹齢数百年を数える杉木立と回廊が純白の雪に包まれ、770余年の歴史を誇る禅の祈りが厳かに響き渡る静寂の聖地。11月から1月にかけての冬期は、永平寺の新春開運参拝や坐禅体験、傘松閣の絵天井の美、名物「越前おろしそば」のピリリとした大根の辛み、そして日本海がもたらす冬の味覚の王者「越前がに」と極上黒毛和牛「若狭牛」の贅沢な味わい。北陸新幹線でより身近になった福井の歴史と美味に浸る厳選名宿5選を詳しくご案内します。"
  }
};

export default function FukuiEiheijiPage() {
  const hotels = [
            {
              id: 1,
              name: "永平寺　親禅の宿　柏樹關",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/173065/173065.jpg",
              rating: 4.67,
              reviews: 86,
              price: "¥35,750〜",
              access: "ＪＲ　福井駅よりお車にて約３０分",
              special: "「旅館と宿坊の中間」をコンセプトとし、快適な設備・サービスと本格的な坐禅など禅の世界が体験できます",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F173065%2F173065.html",
              story: "曹洞宗大本山永平寺の門前に静かに佇む「永平寺 親禅の宿 柏樹關（はくじゅかん）」は、伝統ある宿坊の清らかな精神性と、上質な和モダン旅館の快適性を融合させた唯一無二の宿です。冬の朝、雪化粧した杉並木を抜けて永平寺の法堂へと向かい、修行僧（雲水）たちの読経が響き渡る早朝の「朝課（朝のお勤め）」に参加できるのは宿泊者だけの特別な体験。館内には越前和紙や越前焼を散りばめた静謐な空間が広がり、開山道元禅師の教えを受け継ぐ本格的な坐禅体験も可能。夕食には永平寺監修の精進料理をベースに、厳選された福井の旬魚や最高級若狭牛の陶板焼きを組み合わせた滋味深いお料理が振る舞われ、心洗われる冬の滞在が叶います。",
              roomTip: "和洋室「柏樹の間」。越前漆器や越前和紙が彩る上質な和モダン空間。窓外に広がる雪の木立を眺めながら静かな瞑想の時間を。",
              gourmetTip: "「永平寺監修・精進会席＆若狭牛ステーキ」。胡麻豆腐や季節の根菜を丁寧に仕立てた精進料理と、とろける若狭牛の極上マリアージュ。",
              highlights: [
                "永平寺門前・早朝のお勤め（朝課）や坐禅体験・宿坊と高級旅館を融合した親禅の宿",
                "永平寺監修の滋味深い精進料理会席＆若狭牛ステーキ・心と身体を整える禅の食体験",
                "越前和紙や越前焼の優美なしつらえ・雪の杉並木に抱かれた静寂の客室での深い休息"
              ]
            },
            {
              id: 2,
              name: "コートヤード・バイ・マリオット福井",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/189079/189079.jpg",
              rating: 4.41,
              reviews: 365,
              price: "¥9,075〜",
              access: "■JR福井駅西口から徒歩2分。　■北陸自動車道 福井インターチェンジから車で約15分。",
              special: "JR福井駅西口から徒歩2分！&amp;#12220;層ビルの17～28階にあり眺望◎",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F189079%2F189079.html",
              story: "北陸新幹線の延伸開業で賑わうJR福井駅西口に直結するハイエンドホテル「コートヤード・バイ・マリオット福井」。高層階に位置するロビーや客室からは、冬の澄んだ大気に浮かぶ福井市街の街並みと、遠くに連なる白山連峰の雄大な雪景色を一望できます。客室はマリオットのグローバル基準を満たす洗練されたモダンデザインで、上質な寝具と充実したワークスペースを完備。館内のオールデイダイニングでは、冬の福井が誇る越前がにの特別コースや、若狭牛のグリル、地元野菜のタパスなどを洗練されたプレゼンテーションで提供し、都市の利便性と冬の美食ステイを高い次元で両立しています。",
              roomTip: "デラックスキング・ツイン（高層階）。床から天井までの大きな窓から福井の雪景色を見渡すパノラマビュー。心地よい静けさと上質な眠り。",
              gourmetTip: "「福井テロワール・ディナー」。越前がにや若狭牛、三里浜砂丘らっきょうなど福井の極上テロワールを現代的な技法で味わう贅沢。",
              highlights: [
                "北陸新幹線福井駅西口直結・高層階からの雪山パノラマ・洗練されたマリオットラグジュアリー",
                "福井の旬魚や若狭牛・越前がにを昇華させたグリルダイニング・地酒バーラウンジ",
                "最新の設備と高速Wi-Fi・エグゼクティブラウンジ・世界基準の快適な快眠環境"
              ]
            },
            {
              id: 3,
              name: "ホテルリバージュアケボノ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/168/168.jpg",
              rating: 4.39,
              reviews: 4538,
              price: "¥5,152〜",
              access: "【徒歩】福井駅西口を直進し信号４つ目を左折50m約10分 【100円バス】福井駅前2～4番バス停から「片町入口」下車",
              special: "美しい自然豊かな川のほとり。福井の景観、福井の文化、福井の食でおもてなしする「美食のホテル」",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168%2F168.html",
              story: "福井市を流れる足羽川のほとりに位置し、福井駅からも徒歩圏内の好立地に建つ「ホテルリバージュアケボノ」。最上階には足羽山と足羽川の雪景色を一望できる展望大浴場「天空の湯」を備え、冬の冷えた身体を手足を伸ばして温めることができます。宿の最大の自慢は、旅行予約サイトで数々の賞を受賞している「福井のお幸ざい朝ごはん」。冬の味覚である水ようかんや越前おろしそば、焼き鯖、厚揚げの煮物など、福井の郷土料理が所狭しと並びます。夕食には本場越前がにのフルコースや若狭牛すき焼きプランも充実し、地元愛に溢れる温かなおもてなしに心癒やされます。",
              roomTip: "足羽川リバービューツイン。春の桜並木で有名な足羽川の冬の雪景色を静かに眺められる客室。シモンズベッドで深い休息を。",
              gourmetTip: "「越前がに会席＆日本一の福井お幸ざい朝食」。甘みたっぷりの茹で越前がにと、朝から味わう名物越前おろしそばの至福のコンビネーション。",
              highlights: [
                "足羽川展望大浴場「天空の湯」・数々の賞を受賞した福井のお幸ざい朝ごはん・越前がにプラン",
                "本場越前がにフルコース＆若狭牛陶板焼き・名物水ようかんとおろしそばの朝食",
                "パノラマ展望風呂で温まる癒やしの時間・足羽川沿いの静かなロケーション"
              ]
            },
            {
              id: 4,
              name: "ホテルフジタ福井",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/181073/181073.jpg",
              rating: 4.12,
              reviews: 2050,
              price: "¥5,300〜",
              access: "ＪＲ　福井駅より徒歩にて約8分",
              special: "【福井エリア売上NO.1】ローストビーフや福井のソウルフード等、朝が楽しみになるビュッフェが自慢",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181073%2F181073.html",
              story: "福井市中心街の官公庁街・中央通りに面し、観光からビジネスまで絶大な支持を集めるシティホテル「ホテルフジタ福井」。全室に加湿機能付き空気清浄機、無料Wi-Fi、広めのデスクを整え、快適な居住性を追求しています。永平寺口へ向かう電車やバスの発着点からも近く、冬の永平寺参拝や一乗谷朝倉氏遺跡、勝山へのアクセス拠点として最適。館内には複数のレストランが揃い、冬期限定の越前がに料理や福井名物ソースカツ丼、越前おろしそばを気軽に楽しむことができ、安心感のあるゆとりあるホテルステイを提供します。",
              roomTip: "スーペリアダブル・ツイン。落ち着いたトーンの内装と広いライティングデスク。清潔感あふれるデュベスタイルのベッド。",
              gourmetTip: "「福井の味覚三昧プラン」。からりと揚がった熱々ソースカツ丼と、辛味大根のダシが香る越前おろしそばの定番美味セット。",
              highlights: [
                "福井市中心街の好立地・広めの客室と充実設備・永平寺や一乗谷遺跡への軽快アクセス",
                "福井名物ソースカツ丼＆越前おろしそばセット・郷土の味覚を気軽に味わえるレストラン",
                "清潔なデュベベッド・安心のセキュリティ・観光案内の充実したフロントサービス"
              ]
            },
            {
              id: 5,
              name: "ホテル京福　福井駅前",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1999/1999.jpg",
              rating: 3.98,
              reviews: 1516,
              price: "¥3,150〜",
              access: "JR福井駅東口より徒歩１分！東京・大阪・名古屋・小松空港方面高速バス発着場・えちぜん鉄道が目の前。福井ICより車で10分",
              special: "JR福井駅東口徒歩１分！全室無料Wi-Fi&amp;有線LAN☆漫画コーナー☆",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1999%2F1999.html",
              story: "JR福井駅東口から徒歩わずか1分という抜群のロケーションに位置する「ホテル京福 福井駅前」。永平寺直通バス「特急永平寺ライナー」の乗り場や、えちぜん鉄道の改札口まで目と鼻の先であり、冬の公共交通機関を利用した永平寺参拝のベースキャンプとしてこれ以上ない利便性を誇ります。機能的で清潔な客室は冬のひとり旅や夫婦旅に使い勝手が良く、リーズナブルな宿泊料金も大きな魅力。駅周辺の老舗蕎麦店や鮮魚居酒屋にも歩いてすぐ立ち寄ることができ、福井の冬の味覚を気兼ねなく満喫できます。",
              roomTip: "スタンダードシングル・ツイン。無駄を省いたレイアウトと快適なベッド。駅近ならではの安心感と静かな客室環境。",
              gourmetTip: "「福井駅前グルメ探訪」。駅構内や徒歩圏内の名店で味わう越前がにの甲羅盛り、甘海老のお造り、福井の地酒「黒龍」のぬる燗。",
              highlights: [
                "JR福井駅東口徒歩1分・特急永平寺ライナー乗り場すぐ・冬の身軽なひとり旅にも最適",
                "駅周辺の老舗居酒屋で味わう越前がに甲羅盛り・甘海老・福井の銘酒「黒龍」ぬる燗",
                "抜群のコストパフォーマンス・降雪時も安心の駅前立地・スムーズなチェックイン"
              ]
            }
  ];

  const faqList = [
  {
    "q": "冬（11月〜1月）の大本山永平寺の雪景色の見どころや早朝参拝のポイントは？",
    "a": "大本山永平寺は寛元2年（1244年）道元禅師によって開かれた曹洞宗の大本山で、深い杉木立に囲まれた山間に七堂伽藍をはじめとする大小70余棟の殿堂が点在します。11月中旬から初雪が舞い、12月から1月にかけては境内の石段や屋根、巨杉が純白の雪で覆われ、凛とした静寂と荘厳な美しさに包まれます。伽藍内は全て屋根付きの階段回廊で結ばれているため、雪の日でも快適に拝観できます（廊下は冷え込むため厚手の靴下の着用が推奨されます）。また著名画家たちによる230枚の花鳥天井画で知られる「傘松閣（さんしょうかく）」も必見です。早朝の朝課（お勤め）では、雲水たちの力強い読経と鐘の音が響き渡り、背筋が伸びる神聖な時間を体験できます。"
  },
  {
    "q": "永平寺門前の名物「越前おろしそば」と精進料理の特徴は？",
    "a": "「越前おろしそば」は、殻ごと挽き込んだ風味豊かな黒っぽい蕎麦に、ピリリと辛味の効いた大根おろしをたっぷりと入れ、冷たい出汁をぶっかけて味わう福井のソウルフードです。江戸時代初期に越前国府で考案されたとされ、冬の寒い時期でも暖房の効いた店内でキリリと冷えたおろしそばをすするのが福井流の醍醐味。永平寺門前には挽きたて・打ちたて・茹でたての門前そば店が並びます。また永平寺の精進料理は、道元禅師の『典座教訓』『赴粥飯法』に基づき、動物性食材を一切使わずに野菜・豆類・海藻の命を生かし切る滋味あふれる料理。名物の「ごま豆腐」は、もっちりとした弾力と香ばしい胡麻の風味が秀逸です。"
  },
  {
    "q": "冬の福井が誇る至高の味覚「若狭牛」と「越前がに」の魅力は？",
    "a": "「若狭牛」は、福井県内で丹精込めて肥育された黒毛和牛の中でも、肉質等級4等級以上の厳格な基準を満たした最高峰ブランド牛です。明治時代からその品質が高く評価され、きめ細やかな霜降りと上品な甘みのある脂、とろけるような口溶けが特徴です。すき焼きや陶板焼きでいただくと肉本来の深い旨みが広がります。そして11月6日に漁が解禁される「越前がに」は、黄色いタグが付けられた福井県水揚げのオスのズワイガニで、皇室に献上される唯一のカニとしても有名です。甘みの詰まった爪肉や濃厚なカニ味噌は冬の北陸の至福です。"
  },
  {
    "q": "北陸新幹線の福井延伸によるアクセス改善と永平寺への行き方は？",
    "a": "2024年春の北陸新幹線金沢〜敦賀間延伸開業により、東京駅から福井駅までは乗り換えなしの「かがやき」で最速約2時間51分と、アクセスが飛躍的に向上しました。JR福井駅からは、東口バス乗り場から京福バスの直行バス「特急永平寺ライナー」が運行しており、約30分で永平寺門前へダイレクトに到着します。また、えちぜん鉄道勝山永平寺線を利用して「永平寺口駅」まで約25分、そこから京福バスで約13分というローカル鉄道ルートも、冬の車窓風景をのんびり楽しめるおすすめの移動方法です。"
  },
  {
    "q": "冬の永平寺・福井エリアの気候、積雪、靴や服装の注意点は？",
    "a": "福井県は日本海側気候であり、11月下旬から山沿いで雪が降り始め、12月中旬から1月にかけては本格的な降雪・積雪期に入ります。永平寺は山間部に位置するため、福井市街地よりも気温が2〜3℃低く、平均気温は氷点下近くまで冷え込みます。寺院の境内や参道は除雪が行われますが、足元は凍結しやすいため、防水加工が施された滑り止めの効くスノーブーツが必須です。また永平寺の回廊内は暖房設備が限られ板張りの床を歩くため、厚手の靴下やレッグウォーマー、ロング丈の防寒ダウンコート、手袋、マフラーを着用して拝観しましょう。"
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
          { '@type': 'ListItem', 'position': 3, 'name': '永平寺雪静寂と越前おろしそば・若狭牛名宿', 'item': 'https://croud-travel.com/winter-fukui-eiheiji-snow-zen-echizen-oroshi-soba-wakasa-beef-stay' }
        ]
      },
      {
        '@type': 'TouristDestination',
        'name': '曹洞宗大本山永平寺・福井市・勝山',
        'description': "冬の福井・永平寺は、樹齢数百年を数える杉木立と回廊が純白の雪に包まれ、770余年の歴史を誇る禅の祈りが厳かに響き渡る静寂の聖地。11月から1月にかけての冬期は、永平寺の新春開運参拝や坐禅体験、傘松閣の絵天井の美、名物「越前おろしそば」のピリリとした大根の辛み、そして日本海がもたらす冬の味覚の王者「越前がに」と極上黒毛和牛「若狭牛」の贅沢な味わい。北陸新幹線でより身近になった福井の歴史と美味に浸る厳選名宿5選を詳しくご案内します。",
        'touristType': ['歴史探訪', '禅の体験', '新春参拝', '冬の味覚探訪', '精進料理']
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': "冬（11月〜1月）の大本山永平寺の雪景色の見どころや早朝参拝のポイントは？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "大本山永平寺は寛元2年（1244年）道元禅師によって開かれた曹洞宗の大本山で、深い杉木立に囲まれた山間に七堂伽藍をはじめとする大小70余棟の殿堂が点在します。11月中旬から初雪が舞い、12月から1月にかけては境内の石段や屋根、巨杉が純白の雪で覆われ、凛とした静寂と荘厳な美しさに包まれます。伽藍内は全て屋根付きの階段回廊で結ばれているため、雪の日でも快適に拝観できます（廊下は冷え込むため厚手の靴下の着用が推奨されます）。また著名画家たちによる230枚の花鳥天井画で知られる「傘松閣（さんしょうかく）」も必見です。早朝の朝課（お勤め）では、雲水たちの力強い読経と鐘の音が響き渡り、背筋が伸びる神聖な時間を体験できます。"
            }
          },
          {
            '@type': 'Question',
            'name': "永平寺門前の名物「越前おろしそば」と精進料理の特徴は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "「越前おろしそば」は、殻ごと挽き込んだ風味豊かな黒っぽい蕎麦に、ピリリと辛味の効いた大根おろしをたっぷりと入れ、冷たい出汁をぶっかけて味わう福井のソウルフードです。江戸時代初期に越前国府で考案されたとされ、冬の寒い時期でも暖房の効いた店内でキリリと冷えたおろしそばをすするのが福井流の醍醐味。永平寺門前には挽きたて・打ちたて・茹でたての門前そば店が並びます。また永平寺の精進料理は、道元禅師の『典座教訓』『赴粥飯法』に基づき、動物性食材を一切使わずに野菜・豆類・海藻の命を生かし切る滋味あふれる料理。名物の「ごま豆腐」は、もっちりとした弾力と香ばしい胡麻の風味が秀逸です。"
            }
          },
          {
            '@type': 'Question',
            'name': "冬の福井が誇る至高の味覚「若狭牛」と「越前がに」の魅力は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "「若狭牛」は、福井県内で丹精込めて肥育された黒毛和牛の中でも、肉質等級4等級以上の厳格な基準を満たした最高峰ブランド牛です。明治時代からその品質が高く評価され、きめ細やかな霜降りと上品な甘みのある脂、とろけるような口溶けが特徴です。すき焼きや陶板焼きでいただくと肉本来の深い旨みが広がります。そして11月6日に漁が解禁される「越前がに」は、黄色いタグが付けられた福井県水揚げのオスのズワイガニで、皇室に献上される唯一のカニとしても有名です。甘みの詰まった爪肉や濃厚なカニ味噌は冬の北陸の至福です。"
            }
          },
          {
            '@type': 'Question',
            'name': "北陸新幹線の福井延伸によるアクセス改善と永平寺への行き方は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "2024年春の北陸新幹線金沢〜敦賀間延伸開業により、東京駅から福井駅までは乗り換えなしの「かがやき」で最速約2時間51分と、アクセスが飛躍的に向上しました。JR福井駅からは、東口バス乗り場から京福バスの直行バス「特急永平寺ライナー」が運行しており、約30分で永平寺門前へダイレクトに到着します。また、えちぜん鉄道勝山永平寺線を利用して「永平寺口駅」まで約25分、そこから京福バスで約13分というローカル鉄道ルートも、冬の車窓風景をのんびり楽しめるおすすめの移動方法です。"
            }
          },
          {
            '@type': 'Question',
            'name': "冬の永平寺・福井エリアの気候、積雪、靴や服装の注意点は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "福井県は日本海側気候であり、11月下旬から山沿いで雪が降り始め、12月中旬から1月にかけては本格的な降雪・積雪期に入ります。永平寺は山間部に位置するため、福井市街地よりも気温が2〜3℃低く、平均気温は氷点下近くまで冷え込みます。寺院の境内や参道は除雪が行われますが、足元は凍結しやすいため、防水加工が施された滑り止めの効くスノーブーツが必須です。また永平寺の回廊内は暖房設備が限られ板張りの床を歩くため、厚手の靴下やレッグウォーマー、ロング丈の防寒ダウンコート、手袋、マフラーを着用して拝観しましょう。"
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
      <header className="relative bg-gradient-to-br from-stone-950 via-teal-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-xs sm:text-sm font-medium mb-6">
            <Snowflake className="w-4 h-4 text-teal-300" />
            11月・12月・1月冬の特選旅｜福井・永平寺＆福井市
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-6">
            曹洞宗大本山永平寺の雪静寂＆新春開運参拝！<br className="hidden sm:inline" />
            名物越前おろしそばと極上若狭牛・越前がにを味わう名宿5選
          </h1>
          <p className="text-base sm:text-lg text-stone-200/90 leading-relaxed max-w-4xl mb-8">
            樹齢数百年の巨杉が天を突き、白銀の回廊に読経の声が響き渡る曹洞宗大本山永平寺。道元禅師が開創した770余年の祈りの聖地は、冬になると凛とした静けさに満たされ、訪れる者の心を深く洗います。新春の開運参拝や坐禅体験、傘松閣の華麗な天井画。そして冬の越前が誇る大根辛味の越前おろしそば、甘みとろける最高級黒毛和牛「若狭牛」、冬の味覚の王者「越前がに」。北陸新幹線でアクセスが向上した福井で、心と身体を整える厳選宿をご紹介します。
          </p>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-teal-400" /> 福井県吉田郡永平寺町・福井市</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-teal-400" /> 探訪期：11月上旬〜1月下旬</span>
            <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-teal-400" /> 永平寺新春参拝＆若狭牛・越前がに</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-teal-600 pl-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Atmosphere & Tradition</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              白銀の杉木立に響く禅の祈りと、越前国の風土が育んだ至高の冬美食
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              道元禅師の教え息づく大本山の回廊と、冬の日本海がもたらす極上の味覚
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              福井県北東部、九頭竜川の支流・永平寺川の上流に位置する曹洞宗大本山永平寺。寛元2年（1244年）、道元禅師によって開かれた出家清規の道場であり、今も多くの修行僧（雲水）たちが厳格な戒律のもとで日夜禅の修行に励んでいます。約33万平方メートルに及ぶ広大な境内は、樹齢数百年を数える巨杉の森に囲まれ、冬を迎えると純白の雪が梢や屋根、石段を覆い尽くします。七堂伽藍を結ぶ階段回廊を歩けば、冷たく澄み切った空気の中に木造建築の重厚な香りが漂い、外界の喧騒から隔絶された圧倒的な静寂が心を穏やかに解きほぐしてくれます。
            </p>
            <p>
              冬の永平寺参拝では、12月から1月にかけての新春開運祈願はもちろん、早朝の「朝課（朝のお勤め）」への参加が強く心に残る体験となります。法堂に響き渡る雲水たちの力強く調和のとれた読経と荘厳な磬子（けいす）の鐘の音は、雪国の夜明けとともに魂を揺さぶるような感動をもたらします。また「傘松閣（さんしょうかく）」の2階大広間には、昭和初期の日本画壇を代表する144名の画家によって描かれた230枚の花鳥天井画が嵌め込まれており、冬の外光に照らされて優美な色彩の輝きを放ちます。
            </p>
            <p>
              そして心洗われる参拝の後に待っているのが、越前国の冬の絶品美食です。永平寺門前の名物「越前おろしそば」は、香り高い蕎麦にピリリと辛い大根おろしをたっぷりと乗せ、冷たい出汁をかけてすする郷土の逸品。辛味大根の爽快な刺激が蕎麦の甘みを鮮烈に引き立てます。さらに福井県が誇る幻の黒毛和牛「若狭牛」は、きめ細やかな霜降りと上品な甘みが特徴で、熱々の陶板焼きやすき焼きでいただくと芳醇な香りが口いっぱいに広がります。11月に解禁される黄色いタグ付きの「越前がに」や甘海老、名物水ようかんとともに味わう冬の宴は、北陸・福井ならではの至福の喜びです。
            </p>
            <p>
              北陸新幹線の福井延伸によってアクセスも大きく向上し、冬の福井は首都圏や関西圏からの週末旅に最高の目的地となりました。雪深い静寂の山寺で自分自身と静かに向き合い、温泉で温まり、滋味深い越前の食を味わう時間は、現代人にとって何物にも代えがたい贅沢なリトリートとなります。
            </p>
          </div>

          {/* 3 Pillar Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-teal-50/60 border border-teal-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">雪静寂の大本山永平寺回廊</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                巨杉と白雪に抱かれた七堂伽藍。傘松閣の230枚の花鳥天井画や早朝の朝課・坐禅体験で心を清める時間。
              </p>
            </div>

            <div className="bg-teal-50/60 border border-teal-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">名物越前おろしそば＆精進料理</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                辛味大根が効いた冷たい越前おろしそばと、道元禅師の教えを受け継ぐ胡麻豆腐や滋味深い精進会席。
              </p>
            </div>

            <div className="bg-teal-50/60 border border-teal-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">極上若狭牛＆旬の越前がに</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                とろける霜降りのブランド黒毛和牛「若狭牛」の陶板焼きと、冬の味覚の王様・黄色タグ付き越前がにの贅沢。
              </p>
            </div>
          </div>
        </section>

        {/* Month Guide */}
        <section className="bg-gradient-to-r from-stone-900 to-teal-950 text-white rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
          <div className="border-l-4 border-teal-400 pl-4">
            <span className="text-teal-300 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Seasonal Calendar</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              11月・12月・1月の見どころカレンダー＆気候・服装ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between border-b border-white/20 pb-2">
                <span className="font-bold text-teal-300 text-base">11月（初冬・越前がに解禁）</span>
                <span className="text-xs text-stone-300">平均気温 11.2℃</span>
              </div>
              <p className="text-stone-200 text-xs sm:text-sm leading-relaxed">
                11月6日に越前がに漁が解禁され、福井の冬美食が一斉にスタート。永平寺の紅葉の終盤から初雪の気配が漂い、静謐な参拝が楽しめる落ち着いた季節。
              </p>
              <div className="text-xs text-teal-200">
                おすすめ服装：厚手コート、セーター、スカーフ、歩きやすい革靴・スニーカー
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between border-b border-white/20 pb-2">
                <span className="font-bold text-teal-300 text-base">12月（積雪期・雪の永平寺）</span>
                <span className="text-xs text-stone-300">平均気温 5.8℃</span>
              </div>
              <p className="text-stone-200 text-xs sm:text-sm leading-relaxed">
                永平寺の山間に本格的な雪が積もり、白銀の回廊と雪の杉並木が完成。福井市街でも雪吊りが施され、越前そばと熱々の若狭牛すき焼きが最も美味しい季節。
              </p>
              <div className="text-xs text-teal-200">
                おすすめ服装：防水ダウンジャケット、厚手の靴下（寺院内拝観用）、防水スノーブーツ
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between border-b border-white/20 pb-2">
                <span className="font-bold text-teal-300 text-base">1月（新春開運参拝・深雪）</span>
                <span className="text-xs text-stone-300">平均気温 3.0℃</span>
              </div>
              <p className="text-stone-200 text-xs sm:text-sm leading-relaxed">
                正月三が日は新春開運参拝の参拝客で賑わいます。静かな朝の勤行や坐禅体験で一年の誓いを立てるのに最適な時期。福井名物の水ようかんをこたつで味わう冬の情緒。
              </p>
              <div className="text-xs text-teal-200">
                おすすめ服装：防風ロングダウン、耳当て・ニット帽、手袋、保温インナー、カイロ
              </div>
            </div>
          </div>
        </section>

        {/* Must-Visit Winter Spots Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8">
          <div className="border-l-4 border-teal-600 pl-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Must-Visit Winter Spots</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬に訪れるべき永平寺・福井の三大名所と体験ポイント
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Building className="w-5 h-5 text-teal-600" /> 曹洞宗大本山永平寺（七堂伽藍）
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                巨杉の山間に佇む禅の総本山。山門・仏殿・法堂・僧堂・庫院・東司・浴室の七堂伽藍が屋根付き回廊で結ばれ、冬の白銀世界でも厳かに参拝できます。傘松閣の絵天井や早朝の読経勤行は心を洗う体験です。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：JR福井駅より特急永平寺ライナーで約30分。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Utensils className="w-5 h-5 text-teal-600" /> 永平寺門前町（おろしそば＆ごま豆腐）
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                永平寺の門前に広がる歴史ある門前町。名物の越前おろしそばを提供する老舗蕎麦店や、もっちりとした弾力の永平寺ごま豆腐を販売する店が並びます。冬の参拝前後の温かいおもてなしが魅力です。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：永平寺バス停すぐ。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Mountain className="w-5 h-5 text-teal-600" /> 一乗谷朝倉氏遺跡＆足羽山
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                戦国時代の城下町がそのまま発掘・復元された国の特別史跡。冬の雪に覆われた武家屋敷群や庭園跡は、戦国ロマンの哀愁と美しさを漂わせます。福井市街を一望する足羽山の冬景色もおすすめ。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：JR福井駅よりJR越美北線またはバスで約15〜25分。
              </div>
            </div>
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-teal-600 pl-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の永平寺・福井を満喫する1泊2日王道モデルコース
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-teal-800 block text-sm">【1日目】北陸新幹線で福井へ・永平寺参拝と精進会席・若狭牛ディナー</span>
              <p className="leading-relaxed">
                東京や大阪から北陸新幹線・特急サンダーバードでJR福井駅に到着。直行バス「特急永平寺ライナー」で永平寺へ。門前で名物越前おろしそばを味わった後、大本山永平寺へ参拝。傘松閣の絵天井や静寂の七堂伽藍を見学。門前の「柏樹關」または福井駅前のホテルへチェックイン。夕食には永平寺監修の精進料理会席や、極上若狭牛の陶板焼き・旬の越前がに料理を堪能します。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-teal-800 block text-sm">【2日目】早朝の朝課（お勤め）・一乗谷朝倉氏遺跡と福井名物お土産</span>
              <p className="leading-relaxed">
                早朝、永平寺の法堂で雲水たちの力強い読経が響く朝課に参加し、心を整える清々しい体験。朝食後は一乗谷朝倉氏遺跡へ移動し、雪に煙る戦国城下町跡を散策。午後は福井駅「くるふ福井駅」でお土産選び。名物の羽二重餅や水ようかん、越前そばの生麺、地酒「黒龍」を購入し、新幹線で帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-l-4 border-teal-600 pl-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Curated Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              冬の永平寺・福井を満喫する厳選名宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              永平寺門前の親禅の宿から新幹線直結マリオット・展望風呂付き老舗シティホテルまで
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
                  <div className="absolute top-4 left-4 bg-teal-950/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
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
                      <span className="text-sm sm:text-base font-bold text-teal-800">
                        {hotel.price}
                      </span>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {hotel.story}
                    </p>

                    <div className="space-y-2 pt-1 text-xs sm:text-sm">
                      <div className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <div><strong className="text-slate-900">客室の魅力：</strong>{hotel.roomTip}</div>
                      </div>
                      <div className="flex items-start gap-2 text-slate-700">
                        <Utensils className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
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
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
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
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-xs transition-colors duration-200"
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
          <div className="border-l-4 border-teal-600 pl-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の永平寺・福井旅行 よくある質問とアドバイス
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              現地を熟知した専門視点から冬の旅をサポートする5つの疑問に回答
            </p>
          </div>

          <div className="space-y-6">
            {faqList.map((faq, idx) => (
              <div key={idx} className="border-b border-slate-100 pb-5 last:border-b-0 last:pb-0 space-y-2">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">Q</span>
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
              北陸・近畿の冬旅＆関連する冬の厳選特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-fukui-awara-onsen-echizen-crab-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-teal-700 mb-1">あわら温泉と越前がに極上宿</div>
              <div className="text-slate-500 text-xs">関西の奥座敷で味わう茹でたて越前がにと名湯旅館特集</div>
            </Link>
            <Link 
              href="/winter-fukui-mikuni-onsen-echizen-crab-tojinbo-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-teal-700 mb-1">三国温泉・東尋坊夕陽と越前がに</div>
              <div className="text-slate-500 text-xs">日本海の荒波絶景と本場港町で味わうタグ付き越前がに</div>
            </Link>
            <Link 
              href="/winter-ishikawa-kanazawa-yuwaku-onsen-koubako-crab-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-teal-700 mb-1">金沢・湯涌温泉と香箱ガニ</div>
              <div className="text-slate-500 text-xs">兼六園雪吊りと金沢の奥座敷・冬の味覚を満喫する名宿</div>
            </Link>
            <Link 
              href="/winter-toyama-himi-kanburi-luxury-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-teal-700 mb-1">富山・氷見の寒ブリ極上ステイ</div>
              <div className="text-slate-500 text-xs">立山連峰を望む富山湾の富山湾越冬寒ブリと海辺の温泉宿</div>
            </Link>
            <Link 
              href="/winter-shiga-nagahama-taiko-onsen-biwako-kamonabe-omigyu-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-teal-700 mb-1">滋賀・長浜太閤温泉と天然鴨鍋・近江牛</div>
              <div className="text-slate-500 text-xs">雪の琵琶湖畔と黒壁スクエア・真冬の天然真鴨鍋名宿</div>
            </Link>
            <Link 
              href="/features" 
              className="p-4 rounded-2xl bg-teal-950 text-white hover:bg-stone-950 transition-all block flex flex-col justify-center items-center text-center font-bold"
            >
              <span>全国の冬特集一覧を見る →</span>
              <span className="text-teal-200 text-xs font-normal mt-1">11・12・1月の厳選記事を多数掲載</span>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
