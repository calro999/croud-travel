import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Snowflake, Waves, Sun, Flame, Mountain, Building, Coffee, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月山口】日本三名橋「錦帯橋」の冬景色＆白蛇神社新春初詣！冬の風物詩「周防大島みかん鍋」と幻の高森牛・銘酒獺祭の名宿5選",
  description: "冬の山口・岩国と周防大島は、水墨画のように美しい日本三名橋「錦帯橋」の雪化粧と、瀬戸内海の温暖な冬晴れが共存する魅力あふれる季節。金運・招福の守り神として名高い岩国白蛇神社の新春初詣、山頂にそびえる岩国城の展望台。11月から旬を迎える周防大島の奇跡の名物「みかん鍋（温州みかんを丸ごと浮かべた地魚鍋）」、岩国が誇る幻の最高級黒毛和牛「高森牛」のすき焼き、殿様寿司として伝わる郷土料理「岩国寿司」、そして世界を魅了する銘酒「獺祭」。歴史浪漫と名湯、冬の珍味を心ゆくまで満喫する名宿5選を徹底解説します。",
  keywords: '岩国 ホテル, 錦帯橋 雪景色, 周防大島 みかん鍋, 白蛇神社 初詣, 岩国国際観光ホテル, 高森牛 すき焼き, 獺祭 岩国, 錦帯橋温泉, 11月 12月 1月 山口 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-yamaguchi-iwakuni-kintaikyo-suo-oshima-mikan-nabe-takamorigyu-stay/"
  },
  openGraph: {
    title: "【11・12・1月山口】日本三名橋「錦帯橋」の冬景色＆白蛇神社新春初詣！冬の風物詩「周防大島みかん鍋」と幻の高森牛・銘酒獺祭の名宿5選",
    description: "冬の山口・岩国と周防大島は、水墨画のように美しい日本三名橋「錦帯橋」の雪化粧と、瀬戸内海の温暖な冬晴れが共存する魅力あふれる季節。金運・招福の守り神として名高い岩国白蛇神社の新春初詣、山頂にそびえる岩国城の展望台。11月から旬を迎える周防大島の奇跡の名物「みかん鍋（温州みかんを丸ごと浮かべた地魚鍋）」、岩国が誇る幻の最高級黒毛和牛「高森牛」のすき焼き、殿様寿司として伝わる郷土料理「岩国寿司」、そして世界を魅了する銘酒「獺祭」。歴史浪漫と名湯、冬の珍味を心ゆくまで満喫する名宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-yamaguchi-iwakuni-kintaikyo-suo-oshima-mikan-nabe-takamorigyu-stay',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=630', width: 1200, height: 630, alt: '錦帯橋の冬景色と錦帯橋温泉・高森牛会席' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月山口】日本三名橋「錦帯橋」の冬景色＆白蛇神社新春初詣！冬の風物詩「周防大島みかん鍋」と幻の高森牛・銘酒獺祭の名宿5選",
    description: "冬の山口・岩国と周防大島は、水墨画のように美しい日本三名橋「錦帯橋」の雪化粧と、瀬戸内海の温暖な冬晴れが共存する魅力あふれる季節。金運・招福の守り神として名高い岩国白蛇神社の新春初詣、山頂にそびえる岩国城の展望台。11月から旬を迎える周防大島の奇跡の名物「みかん鍋（温州みかんを丸ごと浮かべた地魚鍋）」、岩国が誇る幻の最高級黒毛和牛「高森牛」のすき焼き、殿様寿司として伝わる郷土料理「岩国寿司」、そして世界を魅了する銘酒「獺祭」。歴史浪漫と名湯、冬の珍味を心ゆくまで満喫する名宿5選を徹底解説します。"
  }
};

export default function YamaguchiIwakuniSuooshimaPage() {
  const hotels = [
            {
              id: 1,
              name: "錦帯橋温泉　岩国国際観光ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/11295/11295.jpg",
              rating: 4.30,
              reviews: 1308,
              price: "¥16,500〜",
              access: "JR山陽新幹線新岩国駅より車で10分 山陽自動車道岩国ICより車で8分 岩国錦帯橋空港より車で15分、宮島より車で40分",
              special: "日本一の名橋『錦帯橋』より徒歩2分、岩国錦帯橋空港より車で約15分、宮島より車で約40分",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F11295%2F11295.html",
              story: "国の名勝・日本三名橋「錦帯橋」の目の前に位置し、館内の展望露天風呂や客室から優美な五連の木造アーチ橋を一望できる岩国随一の老舗旅館「錦帯橋温泉 岩国国際観光ホテル」。冬の朝、錦川の清流から立ち上る川霧や、うっすらと雪化粧した錦帯橋と横山城山（岩国城）の景観は息をのむ美しさです。展望風呂「いつつばしの湯」では、マイクロバブルのシルクバスや爽快な露天風呂で冷えた身体をじっくり温められます。夕食には岩国伝統の押し寿司「岩国寿司」や冬の味覚、そして岩国市周東町で丹精込めて育てられた希少な黒毛和牛「高森牛」のすき焼き・ステーキ会席が並び、地元の銘酒「獺祭」との贅沢な晩餐を堪能できます。",
              roomTip: "錦帯橋ビュー和室・和洋室。大きな窓越しにライトアップされた錦帯橋や白雪に映える木造アーチを独占できる最高の特等席。",
              gourmetTip: "「高森牛会席＆名物岩国寿司・獺祭」。芳醇な旨みと融点の低い上質な脂が特徴の高森牛と、彩り豊かな岩国寿司、獺祭純米大吟醸。",
              highlights: [
                "名勝錦帯橋の真正面・展望露天風呂「いつつばしの湯」から木造アーチ橋の雪化粧を一望",
                "幻の最高級黒毛和牛「高森牛」すき焼き会席や伝統の岩国寿司・銘酒獺祭を堪能",
                "白蛇神社新春初詣や岩国城ロープウェイへ徒歩圏内・歴史浪漫漂う老舗のおもてなし"
              ]
            },
            {
              id: 2,
              name: "グリーンリッチホテル岩国駅前　人工温泉・二股湯の華",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/72076/72076.jpg",
              rating: 3.95,
              reviews: 1939,
              price: "¥5,675〜",
              access: "JR岩国駅西口から徒歩約４分・岩国錦帯橋空港から車で７分・山陽自動車道岩国インターより車で２０分",
              special: "ＪＲ岩国駅西口より徒歩４分",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72076%2F72076.html",
              story: "JR山陽本線・岩国駅西口から徒歩約3分の好立地に建つ「グリーンリッチホテル岩国駅前 人工温泉・二股湯の華」。北海道二股温泉の鉱石を使用した炭酸カルシウム人工温泉の大浴場（男性用サウナ完備）を備え、冬の観光や新春初詣で歩き疲れた身体を手足を伸ばして癒やしてくれます。スタイリッシュで清潔感あふれる客室には、オリジナルの高反発・低反発ベッドが導入され、快眠環境を徹底サポート。岩国錦帯橋空港からもバスで約10分とアクセス良好で、近隣には山口の地酒や瀬戸内海・周防灘の新鮮な地魚を味わえる名店が多数集まり、夜のグルメ散策の拠点にも最適です。",
              roomTip: "プレミアムツインルーム。広々としたデスクと上質な寝具を備え、冬のひとり旅からカップル・家族旅行まで快適に過ごせる空間。",
              gourmetTip: "「大浴場後の地酒＆郷土料理めぐり」。ホテル周辺の割烹居酒屋で味わう岩国のレンコン料理や瀬戸内寒魚、山口地酒の飲み比べ。",
              highlights: [
                "JR岩国駅徒歩3分・北海道二股温泉鉱石の炭酸カルシウム大浴場完備",
                "加湿空気清浄機完備・周辺の地酒居酒屋や名物蓮根料理処へ徒歩すぐ",
                "岩国錦帯橋空港からバス10分・男性用サウナ完備で旅の疲れをリフレッシュ"
              ]
            },
            {
              id: 3,
              name: "アパホテル〈山口岩国駅前西〉（２０２６年６月プレオープン）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/199179/199179.jpg",
              rating: 3.68,
              reviews: 73,
              price: "¥3,690〜",
              access: "JR山陽本線「岩国駅」（西口）より徒歩5分",
              special: "JR山陽本線「岩国駅」徒歩5分の好立地！50型大型テレビ、Wi-Fi6完備のビジネス・観光の新拠点！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F199179%2F199179.html",
              story: "瀬戸内海に浮かぶ「みかんの島」周防大島の南端、オーシャンフロントの絶景白砂ビーチに佇むラグジュアリーリゾート「マリッサリゾート サザンセト周防大島」。南欧風の優雅な館内からは、冬でも穏やかでコバルトブルーに輝く瀬戸内海と島々の多島美を一望できます。冬の澄んだ夜空には満天の星が瞬き、天然温泉露天風呂に浸かりながら寄せては返す波音に癒やされる贅沢なひととき。レストランでは、周防大島の冬名物「みかん鍋」をフレンチ技法で洗練させたコースや、近海で獲れた伊勢海老・アワビ・山口県産和牛の極上ディナーが提供され、優雅な冬のリゾートステイを演出します。",
              roomTip: "オーシャンビュープレミアムツイン。広々としたバルコニーから冬の瀬戸内海の朝焼けと青空、多島美のパノラマを望む特等席。",
              gourmetTip: "「周防大島冬の恵みディナー」。名物みかん鍋仕立ての海鮮スープや瀬戸内真鯛、山口県産黒毛和牛フィレ肉とみかんワイン。",
              highlights: [
                "周防大島の白砂ビーチに面したラグジュアリーリゾート・全室オーシャンビュー",
                "名物みかん鍋を昇華させた贅沢ディナーや瀬戸内地魚・山口県産和牛ステーキ",
                "波音響く天然温泉露天風呂と満天の星空観賞・冬の優雅なアイランドステイ"
              ]
            },
            {
              id: 4,
              name: "ＨＯＴＥＬ　ＡＺ　山口岩国店",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/130098/130098.jpg",
              rating: 4.03,
              reviews: 1375,
              price: "¥5,170〜",
              access: "岩国駅よりお車にて5分、徒歩20分。山陽自動車道岩国I.Cより車で約20分。",
              special: "駐車場無料！朝食バイキング無料！Wi-Fi・LAN接続無料！☆岩国最大のビジネスホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F130098%2F130098.html",
              story: "JR岩国駅西口から徒歩約2分の駅前好立地に位置する最新ホテル「アパホテル〈山口岩国駅前西〉」。洗練されたコンパクトラグジュアリーな客室には、高品質・高機能なオリジナルベッド「Cloud fit（クラウドフィット）」や大型液晶テレビ、通信環境抜群のWi-Fiを完備。冬の錦帯橋や白蛇神社へのアクセスはもちろん、世界遺産・宮島（嚴島神社）へも山陽本線で約22分と、山口・広島の県境をまたぐ冬の観光ルートに絶妙な利便性を発揮します。自動チェックイン機によるスムーズな入退出や、機能美を極めた快適ステイが魅力です。",
              roomTip: "スタンダードルーム。快眠を追求したふんわり柔らかなベッドと加湿空気清浄機を備え、冬の観光の疲れを快適にリセット。",
              gourmetTip: "「駅前グルメ探訪＆手作り朝食」。岩国駅前で味わう名物蓮根コロッケや地魚料理、ホテルでの温かい和洋朝食プレート。",
              highlights: [
                "JR岩国駅西口徒歩2分・オリジナル快眠ベッド完備・宮島へJR22分の拠点性",
                "最新の自動チェックイン機完備・機能的で清潔な客室でスマートステイ",
                "世界遺産宮島（厳島神社）との周遊観光にも絶妙なロケーション"
              ]
            },
            {
              id: 5,
              name: "マリッサリゾート　サザンセト周防大島",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/188072/188072.jpg",
              rating: 4.47,
              reviews: 331,
              price: "¥16,900〜",
              access: "JR大畠駅よりお車にて約35分",
              special: "瀬戸内で一番海辺に近く、まさに楽園であそび、暮らすような大人のためのリゾートホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188072%2F188072.html",
              story: "山陽自動車道・岩国ICから車で約10分、国道沿いに位置し無料大型駐車場を完備したロードサイドの安心ホテル「ＨＯＴＥＬ ＡＺ 山口岩国店」。錦帯橋や岩国城、白蛇神社へマイカーやレンタカーで巡る冬のドライブ旅行に最適なロケーションです。リーズナブルで分かりやすい均一料金設定と清潔な客室、無料の朝食バイキングが人気を集めています。館内には24時間利用可能なコインランドリーや売店も揃い、連泊や家族旅行にも安心。車で少し足を伸ばせば、周防大島への大島大橋や旭酒造の本社蔵（獺祭ストア）へのアクセスも良好です。",
              roomTip: "スタンダードツイン。シンプルで使い勝手の良い機能的なレイアウト。静かな環境で冬のドライブ旅行の疲れをゆったり休息。",
              gourmetTip: "「無料バイキング朝食＆ご当地ドライブグルメ」。朝の温かい焼き魚や味噌汁、ドライブ途中で立ち寄る周防大島のみかん鍋処。",
              highlights: [
                "無料大型駐車場完備・岩国IC車10分・錦帯橋や周防大島ドライブの安心拠点",
                "無料朝食バイキング付き・分かりやすい均一料金で長期滞在や連泊にも最適",
                "コインランドリー完備・旭酒造（獺祭ストア）への立ち寄りドライブに便利"
              ]
            }
  ];

  const faqList = [
  {
    "q": "冬の「錦帯橋」の見どころやライトアップ、積雪の時期はいつですか？",
    "a": "錦帯橋は延宝元年（1673年）に岩国藩主・吉川広嘉によって創建された日本三名橋の一つで、頑丈な石垣の橋脚に5つの木造アーチが連なる世界に誇る木造建築の傑作です。冬場は空気が澄み、横山の城山にそびえる岩国城とのコントラストが際立ちます。錦川から立ち上る幻想的な朝霧や、年に数回見られるうっすらとした雪化粧の姿は水墨画のような風情。日没から22時頃まではライトアップが行われ、闇夜に黄金色に浮かび上がるアーチ橋の光景は必見です。"
  },
  {
    "q": "岩国白蛇神社（いわくにしろへびじんじゃ）の新春初詣のご利益と見どころは？",
    "a": "岩国に生息する「白蛇（シロヘビ）」は、アオダイショウが白化したもので、国の天然記念物に指定されています。古来より弁財天の使い、富や幸福をもたらす神聖な存在として崇められており、2012年に創建された岩国白蛇神社は「金運招福」「商売繁盛」「開運厄除」のご利益で全国から初詣参拝者が訪れます。境内には本物の生きた白蛇を間近で観察できる「今津白蛇資料館」が併設されており、新年の運気上昇を祈願するスポットとして大人気です。"
  },
  {
    "q": "周防大島の冬の名物「みかん鍋」とは？どんな味でどこで食べられますか？",
    "a": "周防大島は山口県のみかん生産量の約8割を占める「みかんの島」です。「みかん鍋」は、安心安全基準をクリアした特産の温州みかんを丸ごと焼き上げて土鍋に浮かべ、瀬戸内海の旬の地魚（真鯛やハモ）、みかんの皮を練り込んだ「みかんつみれ」、ピリッとした「みかん胡椒」とともに煮込むご当地名物鍋です。柑橘の爽やかな酸味と皮の香りが魚の臭みを消し、出汁にフルーティーな深みを与えて驚くほど美味。冬の11月〜1月に島内の旅館や和食処で味わえます。"
  },
  {
    "q": "山口県岩国が誇る幻の銘牛「高森牛」と世界的名酒「獺祭」の魅力は？",
    "a": "「高森牛（たかもりぎゅう）」は、岩国市周東町の豊かな自然環境の中で、厳選された穀物飼料と清らかな水で丹精込めて育てられる極上の黒毛和牛です。肉質はきめ細やかで柔らかく、脂の融点が低いため口の中でさらりととろけるような甘みが広がります。また、岩国市周東町の旭酒造が醸す「獺祭（だっさい）」は、酒米の王様・山田錦を極限まで精米して造る世界屈指の純米大吟醸。華やかな吟醸香と繊細な味わいは、高森牛のすき焼きや瀬戸内冬魚料理との相性が抜群です。"
  },
  {
    "q": "広島・宮島や新幹線新岩国駅からのアクセスとおすすめ冬の観光ルートは？",
    "a": "山陽新幹線・新岩国駅から錦帯橋へはバスまたはタクシーで約15分。JR山陽本線・岩国駅からはバスで約20分です。宮島（宮島口駅）から岩国駅へはJRでわずか22分と至近。おすすめルートは、午前中に世界遺産の宮島・嚴島神社を参拝した後、昼に岩国へ移動して錦帯橋を渡り、岩国寿司を堪能。ロープウェイで岩国城へ登りパノラマを楽しんだ後、白蛇神社で金運祈願。夜は錦帯橋温泉で高森牛と獺祭を味わい、翌日は大島大橋を渡って周防大島のみかん鍋ドライブを楽しむ1泊2日プランが最高です。"
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
          { '@type': 'ListItem', 'position': 3, 'name': '錦帯橋冬景色＆周防大島みかん鍋名宿', 'item': 'https://croud-travel.com/winter-yamaguchi-iwakuni-kintaikyo-suo-oshima-mikan-nabe-takamorigyu-stay' }
        ]
      },
      {
        '@type': 'TouristDestination',
        'name': '錦帯橋・岩国白蛇神社・周防大島',
        'description': "冬の山口・岩国と周防大島は、水墨画のように美しい日本三名橋「錦帯橋」の雪化粧と、瀬戸内海の温暖な冬晴れが共存する魅力あふれる季節。金運・招福の守り神として名高い岩国白蛇神社の新春初詣、山頂にそびえる岩国城の展望台。11月から旬を迎える周防大島の奇跡の名物「みかん鍋（温州みかんを丸ごと浮かべた地魚鍋）」、岩国が誇る幻の最高級黒毛和牛「高森牛」のすき焼き、殿様寿司として伝わる郷土料理「岩国寿司」、そして世界を魅了する銘酒「獺祭」。歴史浪漫と名湯、冬の珍味を心ゆくまで満喫する名宿5選を徹底解説します。",
        'touristType': ['歴史名所', '名橋雪景色', '金運初詣', 'ご当地鍋', '名酒探訪']
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': "冬の「錦帯橋」の見どころやライトアップ、積雪の時期はいつですか？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "錦帯橋は延宝元年（1673年）に岩国藩主・吉川広嘉によって創建された日本三名橋の一つで、頑丈な石垣の橋脚に5つの木造アーチが連なる世界に誇る木造建築の傑作です。冬場は空気が澄み、横山の城山にそびえる岩国城とのコントラストが際立ちます。錦川から立ち上る幻想的な朝霧や、年に数回見られるうっすらとした雪化粧の姿は水墨画のような風情。日没から22時頃まではライトアップが行われ、闇夜に黄金色に浮かび上がるアーチ橋の光景は必見です。"
            }
          },
          {
            '@type': 'Question',
            'name': "岩国白蛇神社（いわくにしろへびじんじゃ）の新春初詣のご利益と見どころは？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "岩国に生息する「白蛇（シロヘビ）」は、アオダイショウが白化したもので、国の天然記念物に指定されています。古来より弁財天の使い、富や幸福をもたらす神聖な存在として崇められており、2012年に創建された岩国白蛇神社は「金運招福」「商売繁盛」「開運厄除」のご利益で全国から初詣参拝者が訪れます。境内には本物の生きた白蛇を間近で観察できる「今津白蛇資料館」が併設されており、新年の運気上昇を祈願するスポットとして大人気です。"
            }
          },
          {
            '@type': 'Question',
            'name': "周防大島の冬の名物「みかん鍋」とは？どんな味でどこで食べられますか？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "周防大島は山口県のみかん生産量の約8割を占める「みかんの島」です。「みかん鍋」は、安心安全基準をクリアした特産の温州みかんを丸ごと焼き上げて土鍋に浮かべ、瀬戸内海の旬の地魚（真鯛やハモ）、みかんの皮を練り込んだ「みかんつみれ」、ピリッとした「みかん胡椒」とともに煮込むご当地名物鍋です。柑橘の爽やかな酸味と皮の香りが魚の臭みを消し、出汁にフルーティーな深みを与えて驚くほど美味。冬の11月〜1月に島内の旅館や和食処で味わえます。"
            }
          },
          {
            '@type': 'Question',
            'name': "山口県岩国が誇る幻の銘牛「高森牛」と世界的名酒「獺祭」の魅力は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "「高森牛（たかもりぎゅう）」は、岩国市周東町の豊かな自然環境の中で、厳選された穀物飼料と清らかな水で丹精込めて育てられる極上の黒毛和牛です。肉質はきめ細やかで柔らかく、脂の融点が低いため口の中でさらりととろけるような甘みが広がります。また、岩国市周東町の旭酒造が醸す「獺祭（だっさい）」は、酒米の王様・山田錦を極限まで精米して造る世界屈指の純米大吟醸。華やかな吟醸香と繊細な味わいは、高森牛のすき焼きや瀬戸内冬魚料理との相性が抜群です。"
            }
          },
          {
            '@type': 'Question',
            'name': "広島・宮島や新幹線新岩国駅からのアクセスとおすすめ冬の観光ルートは？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "山陽新幹線・新岩国駅から錦帯橋へはバスまたはタクシーで約15分。JR山陽本線・岩国駅からはバスで約20分です。宮島（宮島口駅）から岩国駅へはJRでわずか22分と至近。おすすめルートは、午前中に世界遺産の宮島・嚴島神社を参拝した後、昼に岩国へ移動して錦帯橋を渡り、岩国寿司を堪能。ロープウェイで岩国城へ登りパノラマを楽しんだ後、白蛇神社で金運祈願。夜は錦帯橋温泉で高森牛と獺祭を味わい、翌日は大島大橋を渡って周防大島のみかん鍋ドライブを楽しむ1泊2日プランが最高です。"
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
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-amber-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs sm:text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-emerald-300" />
            11月・12月・1月冬の特選旅｜山口・岩国＆周防大島
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-6">
            日本三名橋「錦帯橋」の冬景色＆白蛇神社新春初詣！<br className="hidden sm:inline" />
            冬の風物詩「周防大島みかん鍋」と幻の高森牛・銘酒獺祭の名宿5選
          </h1>
          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-4xl mb-8">
            水墨画のように澄み渡る錦川に優美な五連アーチを描く日本三名橋「錦帯橋」の冬景色。金運と商売繁盛を授かる岩国白蛇神社の新春初詣、横山城山から見晴るかすパノラマ。そして瀬戸内海のハワイ・周防大島で11月から旬を迎える奇跡の風物詩「みかん鍋」、幻の最高級黒毛和牛「高森牛」のすき焼き、殿様寿司の伝統を引く岩国寿司、世界が愛する銘酒「獺祭」。瀬戸内の穏やかな冬光と名湯、温かな郷土の美味に包まれる厳選宿を詳しく紹介します。
          </p>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-emerald-200">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-400" /> 山口県岩国市・周防大島町</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-emerald-400" /> 旬の時期：11月中旬〜1月下旬</span>
            <span className="flex items-center gap-1.5"><Waves className="w-4 h-4 text-emerald-400" /> 錦帯橋冬景色＆周防大島みかん鍋</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-emerald-600 pl-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Destination Analysis</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              なぜ冬の岩国・周防大島が特別なのか？名橋の静寂と温暖な瀬戸内アイランドの美食文化
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              世界遺産級の木造建築美と、瀬戸内の潮風が育む冬限定の驚きの美味
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              本州の西端・山口県の東部に位置し、清流錦川と瀬戸内海の豊かな海に抱かれた岩国と周防大島。年間を通じて温暖な瀬戸内海気候に恵まれたこの地域は、冬を迎えると凛とした空気感と澄み渡る青空が広がり、歴史と自然が織りなす極上のコントラストを旅人に見せてくれます。
            </p>
            <p>
              その象徴が、延宝元年（1673年）に岩国藩主・吉川広嘉によって創建された日本三名橋の一つ「錦帯橋」です。清流錦川の川幅約200メートルに架かる5連の木造アーチ橋は、釘を一本も使わずに木材を組み上げた世界屈指の構造美を誇ります。冬の朝、錦川から川霧が静かに立ち上り、背後の城山にうっすらと雪が舞う光景は、まるで一幅の水墨画のような静寂の美。夜間には黄金色のライトアップが施され、漆黒の水面にアーチが映り込む姿は息をのむ幻想美です。
            </p>
            <p>
              さらに新春の祈願所として外せないのが「岩国白蛇神社」です。国の天然記念物に指定されている岩国のシロヘビは、弁財天の使いとして古くから崇敬されてきた神聖な存在。2012年に鎮座した白蛇神社は、金運・財運招福や商売繁盛、厄除けの絶大なご利益で知られ、新年には全国から参拝者が詰めかけます。境内の白蛇資料館で神々しい純白の蛇を拝み、新年の運気上昇を願うひとときは清々しい感動をもたらします。
            </p>
            <p>
              そして冬のグルメとして全国の食通を唸らせるのが、大島大橋で結ばれた周防大島の名物「みかん鍋」です。山口県のみかん生産の約8割を担う島で、11月から1月の厳冬期に提供されるご当地鍋。安心基準をクリアした特産の温州みかんを皮ごと焼き上げて丸ごと土鍋に浮かべ、瀬戸内の寒真鯛やハモ、みかんの皮を練り込んだ「みかんつみれ」とともに特製出汁で煮込みます。みかんの爽やかな酸味と皮の芳香が魚の旨みと調和し、驚くほど上品で奥深い出汁に仕上がります。
            </p>
            <p>
              これに加え、岩国市周東町の自然で育まれる幻の最高級黒毛和牛「高森牛」の霜降りすき焼き、江戸時代から伝わる郷土寿司「岩国寿司」、そして世界的に名高い旭酒造の純米大吟醸「獺祭」。温泉で温まった後に味わうこれらの美食は、冬の山口の旅を忘れられない至福の思い出へと昇華させてくれます。
            </p>
          </div>

          {/* 3 Pillar Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">名勝錦帯橋の冬景色とライトアップ</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                木造五連アーチに舞う雪化粧と夜間黄金ライトアップ。錦川の川霧が演出する水墨画のような静寂美。
              </p>
            </div>

            <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">岩国白蛇神社新春初詣</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                国天然記念物の白蛇を祀る金運招福の聖地。弁財天の使いとして富と幸運をもたらす新春の開運参拝。
              </p>
            </div>

            <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">周防大島みかん鍋＆幻の高森牛</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                丸ごとみかんを浮かべた爽快な冬限定みかん鍋と、とろける霜降り希少肉「高森牛」・銘酒獺祭の晩餐。
              </p>
            </div>
          </div>
        </section>

        {/* Month Guide */}
        <section className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
          <div className="border-l-4 border-emerald-400 pl-4">
            <span className="text-emerald-300 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Seasonal Calendar</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              11月・12月・1月の見どころカレンダー＆気候ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-md">11月（初冬）</span>
              <h3 className="font-bold text-white text-base">紅葉谷のモミジとみかん狩り・鍋解禁</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                錦帯橋近くの紅葉谷公園が見頃を迎え、周防大島では温州みかんの収穫が最盛期に。名物みかん鍋の提供が始まり、秋の深まりと冬の味覚を同時に楽しめます。
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-sky-500/20 text-sky-300 text-xs font-bold rounded-md">12月（仲冬）</span>
              <h3 className="font-bold text-white text-base">澄んだ大気の錦帯橋ライトアップと冬星空</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                湿度が下がり、日没後の錦帯橋ライトアップが最も鮮明に。周防大島のリゾートホテルでは、波音を聞きながら満天の冬星空を望む露天風呂が最高の癒やしに。
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-md">1月（厳冬）</span>
              <h3 className="font-bold text-white text-base">白蛇神社初詣と熱々高森牛すき焼き</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                金運・商売繁盛を願う初詣参拝。冷え込みが深まる時期、錦帯橋温泉で温まった後に味わう熱々の幻の高森牛すき焼きと獺祭純米大吟醸が身体を温かく満たします。
              </p>
            </div>
          </div>
        </section>

        {/* Spot Highlights Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8">
          <div className="border-l-4 border-emerald-600 pl-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Must-Visit Winter Spots</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の岩国・周防大島で訪れるべき三大名所
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Mountain className="w-5 h-5 text-emerald-600" /> 名勝・錦帯橋
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                清流錦川に架かる五連の木造アーチ橋。河原から見上げる木組みの迫力、橋上から望む城山の雪景色。ロープウェイで登る岩国城天守閣からのパノラマも必見です。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：新岩国駅からバス約15分。岩国駅からバス約20分。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-600" /> 岩国白蛇神社
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                国天然記念物の白蛇を祀り、金運招福と商売繁盛を授ける新春の聖地。併設の白蛇資料館ではガラス越しに生きた白蛇を間近に観察でき、開運お守りも充実。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：JR岩国駅より車・タクシーで約10分。無料駐車場完備。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Waves className="w-5 h-5 text-sky-600" /> 周防大島（屋代島）
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                瀬戸内海で3番目に大きな島。本土と大島大橋で結ばれドライブ快適。美しい海岸線、冬のみかん畑、温泉リゾート、名物みかん鍋と瀬戸内地魚を満喫できます。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：山陽道玖珂ICより大島大橋経由で約30〜50分。
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-l-4 border-emerald-600 pl-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              岩国＆周防大島の冬旅を彩る厳選宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              錦帯橋ビュー・展望温泉・オーシャンリゾート・極上高森牛ディナー宿
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
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      厳選宿 #{h.id}
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
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
                            <Sun className="w-3.5 h-3.5 text-emerald-600" /> 客室・眺望の魅力
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
                        <span className="text-xl sm:text-2xl font-extrabold text-emerald-900">{h.price}</span>
                      </div>

                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-indigo-600 text-white font-bold text-sm shadow hover:from-emerald-700 hover:to-indigo-700 transition-all"
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
          <div className="border-l-4 border-emerald-600 pl-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の岩国＆周防大島を満喫する1泊2日モデルコース
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              錦帯橋、岩国城、白蛇神社初詣、周防大島みかん鍋を巡る王道ルート
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-emerald-600 text-white text-xs rounded-md font-bold">1日目</span>
                錦帯橋渡橋と岩国城展望、白蛇神社新春参拝
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed">
                <li><strong className="text-slate-900">11:00 新岩国駅または岩国駅に到着</strong>：バスで錦帯橋へ。五連の木造アーチ橋を渡り、城下町側の吉香公園へ。</li>
                <li><strong className="text-slate-900">12:30 名物「岩国寿司」ランチ</strong>：老舗食事処で錦糸卵や蓮根、魚を重ねて押し固めた彩り豊かな殿様寿司を堪能。</li>
                <li><strong className="text-slate-900">13:30 ロープウェイで岩国城へ</strong>：山頂の天守閣から錦川の蛇行と錦帯橋、瀬戸内海の島々を一望。</li>
                <li><strong className="text-slate-900">15:30 岩国白蛇神社で金運初詣</strong>：白蛇神社を参拝し、併設資料館で天然記念物の白蛇を拝観して金運招福祈願。</li>
                <li><strong className="text-slate-900">17:00 錦帯橋温泉にチェックイン</strong>：展望露天風呂「いつつばしの湯」から夕暮れの錦帯橋を眺め、幻の高森牛すき焼きと獺祭を満喫。</li>
              </ol>
            </div>

            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-amber-600 text-white text-xs rounded-md font-bold">2日目</span>
                大島大橋を渡り周防大島へ・冬の名物みかん鍋ドライブ
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed">
                <li><strong className="text-slate-900">08:30 宿で朝食</strong>：朝の錦帯橋を眺めながら温かい朝食を味わい、レンタカーで出発。</li>
                <li><strong className="text-slate-900">09:45 大島大橋を渡り周防大島へ</strong>：コバルトブルーの海を渡り島内ドライブ。みかん畑が広がる海岸線を走行。</li>
                <li><strong className="text-slate-900">11:30 周防大島名物「みかん鍋」ランチ</strong>：島内の食事処で丸ごと焼きみかんが浮かぶ熱々みかん鍋と地魚刺身を堪能。</li>
                <li><strong className="text-slate-900">13:30 旭酒造本社蔵（獺祭ストア）へ</strong>：岩国市周東町へ戻り、獺祭ストアで限定純米大吟醸やスイーツをお土産に購入。</li>
                <li><strong className="text-slate-900">16:00 新岩国駅より新幹線で帰路へ</strong>：山陽新幹線で快適に帰路へ。</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Access and Driving Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-emerald-600 pl-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Access & Winter Driving</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              岩国・周防大島へのアクセスと冬道ドライブ注意点
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Compass className="w-5 h-5 text-emerald-600" /> 新幹線・電車・飛行機
              </h3>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li><strong className="text-slate-900">山陽新幹線</strong>：「新岩国駅」下車、バスで錦帯橋まで約15分。</li>
                <li><strong className="text-slate-900">JR山陽本線</strong>：「岩国駅」下車、バスで錦帯橋まで約20分。宮島口駅からは電車で直通約22分。</li>
                <li><strong className="text-slate-900">岩国錦帯橋空港</strong>：羽田空港から直行便が毎日運航。空港から岩国駅までバス約10分。</li>
              </ul>
            </div>

            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ThermometerSun className="w-5 h-5 text-amber-600" /> 車・レンタカー＆気候
              </h3>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li><strong className="text-slate-900">高速道路IC</strong>：山陽自動車道「岩国IC」から錦帯橋まで約10分。周防大島へは「玖珂IC」より約30分。</li>
                <li><strong className="text-slate-900">冬道注意点</strong>：沿岸部は比較的温暖で積雪は稀ですが、山間部（旭酒造周辺や玖珂IC付近）では早朝・深夜に路面凍結することがあります。天気予報に留意し安全運転を心がけましょう。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-emerald-600 pl-4">
            <span className="text-emerald-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-2xl font-bold text-slate-900">
              冬の岩国・周防大島旅行 よくある質問（FAQ）
            </h2>
          </div>
          <div className="space-y-6">
            {faqList.map((faq, index) => (
              <div key={index} className="pb-6 border-b border-slate-100 last:border-b-0 last:pb-0">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <span className="text-emerald-600 font-extrabold">Q.</span>
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
            <Compass className="w-5 h-5 text-emerald-600" />
            あわせて読みたい！中国・山口エリアの冬特集記事
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/winter-yamaguchi-hagi-onsen-fugu-choshu-beef-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-emerald-600 block"
            >
              【萩温泉】城下町の冬散策＆日本海の天然ふぐと長州牛名宿
            </Link>
            <Link
              href="/winter-yamaguchi-yuda-onsen-torafugu-byakko-choshu-beef-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-emerald-600 block"
            >
              【湯田温泉】白狐の湯＆本場天然とらふぐと長州黒毛和牛名宿
            </Link>
            <Link
              href="/winter-hiroshima-miyajima-onsen-kaki-oyster-seto-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-emerald-600 block"
            >
              【宮島・厳島神社】冬の海中大鳥居＆ぷりぷり広島牡蠣と名湯宿
            </Link>
            <Link
              href="/winter-yamaguchi-nagato-yumoto-onsen-fugu-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-emerald-600 block"
            >
              【長門湯本温泉】音信川の冬灯り＆川床足湯と旬のふぐ料理名宿
            </Link>
            <Link
              href="/winter-hiroshima-tomonoura-onsen-setouchi-taimeshi-taoshitagyu-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-emerald-600 block"
            >
              【鞆の浦温泉】冬の夕暮れ港町風景＆瀬戸内寒鯛めし名宿
            </Link>
            <Link
              href="/features"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 hover:shadow-xs transition-all text-sm font-bold text-emerald-700 block text-center flex items-center justify-center gap-1"
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
