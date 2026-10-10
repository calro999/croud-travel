import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Snowflake, Waves, Sun, Mountain, Building, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月広島：千光寺新春開運初詣！名宿5選',
  description: '冬の広島・尾道は、箱庭のような尾道水道と島々のシルエットが夕日に黄金色に染まる年間最高峰の絶景シーズン。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '尾道 ホテル, 千光寺 初詣, 尾道水道 夕景, 尾道ラーメン, オコゼ 尾道, しまなみ海道 冬, グリーンヒルホテル尾道, HOTEL CYCLE, 11月 12月 1月 広島 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-hiroshima-onomichi-senkoji-shimanami-okoze-ramen-stay/"
  },
  openGraph: {
    title: '11・12・1月広島：千光寺新春開運初詣！名宿5選',
    description: '冬の広島・尾道は、箱庭のような尾道水道と島々のシルエットが夕日に黄金色に染まる年間最高峰の絶景シーズン。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-hiroshima-onomichi-senkoji-shimanami-okoze-ramen-stay',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=630', width: 1200, height: 630, alt: '尾道水道の夕景と千光寺' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月広島：尾道水道の夕景＆千光寺新春開運初詣！瀬戸内の旬魚オコゼ・穴子と名物尾道ラーメンを味わう名宿5選",
    description: "冬の広島・尾道は、箱庭のような尾道水道と島々のシルエットが夕日に黄金色に染まる年間最高峰の絶景シーズン。大同元年（806年）開基の古刹「千光寺」での新春開運初詣と玉の岩の伝説、尾道最古の艮神社や風情ある坂の小路散策。冬に最も脂が乗る瀬戸内の高級魚オコゼの薄造りや唐揚げ、冬の寒穴子、本場の熱々尾道ラーメンや名産生口島レモン。海運倉庫を再生した話題のデザインホテルから尾道水道一望の絶景宿、天然温泉まで厳選名宿5選を徹底解説します。"
  }
};

export default function HiroshimaOnomichiSenkojiPage() {
  const hotels = [
            {
              id: 1,
              name: "グリーンヒルホテル尾道",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/783/783.jpg",
              rating: 4.40,
              reviews: 1532,
              price: "¥6,352〜",
              access: "山陽本線尾道駅駅前　山陽新幹線新尾道駅より車で７分 山陽自動車道福山西・尾道ＩＣより約２０分",
              special: "ＪＲ尾道駅から徒歩２分に位置し、尾道観光やしまなみ海道サイクリングの拠点に最適！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F783%2F783.html",
              story: "JR尾道駅の海側出口から徒歩わずか2分、穏やかな尾道水道のウォーターフロントに建つ「グリーンヒルホテル尾道」。客室の窓からは、対岸の向島を行き交う渡船や静かな波の煌めきが一望でき、冬の澄み渡る夕暮れ時には水面が茜色から深い藍色へと移ろうドラマチックな光景を楽しめます。館内レストラン「ハーバー」では、瀬戸内海の旬魚や広島県産牛を使った洋食ディナーや和洋会席を提供。朝食ビュッフェには名物の鯛茶漬けや地元野菜の手作り惣菜、淹れたての温かいコーヒーが並び、港町の清々しい朝のスタートを爽やかに彩ります。",
              roomTip: "ハーバービューツインルーム。尾道水道に面したパノラマビュー。朝夕に行き交う渡船の情緒ある汽笛の音と波光を部屋にいながら満喫できます。",
              gourmetTip: "「瀬戸内旬魚ハーバーディナー＆鯛茶漬け朝食。」。冬の真鯛や穴子、広島牛のグリルと、朝一番の出汁香る名物鯛茶漬け。",
              highlights: [
                "JR尾道駅徒歩2分のウォーターフロント・全客室から尾道水道パノラマビューを一望",
                "朝食ビュッフェで味わう名物鯛茶漬け＆地元野菜の温かい手作りお惣菜",
                "対岸の向島へ渡る渡船乗り場すぐ・しまなみ海道サイクリングや島巡りに最適"
              ]
            },
            {
              id: 2,
              name: "尾道国際ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/470/470.jpg",
              rating: 4.04,
              reviews: 835,
              price: "¥5,200〜",
              access: "JR尾道駅より車で3分。尾道駅から送迎可（要オンライン予約）／山陽道尾道・福山西の各ICより20分",
              special: "【広島食べんさい店グランプリ受賞】尾道駅から無料送迎＆無料駐車場あり！コンビニ徒歩1分で便利",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F470%2F470.html",
              story: "尾道市街地と海を見渡すロケーションに位置し、尾道観光やしまなみ海道へのドライブ拠点として長年親しまれている「尾道国際ホテル」。落ち着きと品格を備えたシティホテルであり、館内には和食処・洋食レストラン・バーなど充実の設備が整います。冬のディナーでは、尾道近海で獲れた高級魚オコゼの薄造りや唐揚げ、冬の寒穴子の一本揚げ、広島牛ステーキなど、料理長が腕を振るう本格的な瀬戸内会席を心ゆくまで堪能。広めのベッドと行き届いたフルサービスが、冬の旅人に安心とくつろぎを届けます。",
              roomTip: "デラックスツインルーム。広々とした落ち着いた空間。千光寺山方面や尾道港の夜景を眺めながら静かに休息できる快適な客室。",
              gourmetTip: "「瀬戸内会席・冬のオコゼと寒穴子尽くし」。白身の王様オコゼの繊細な旨みと、甘辛いタレが香ばしい穴子飯の贅沢な味わい。",
              highlights: [
                "品格と落ち着きのシティホテル・本格日本料理処で味わう冬の瀬戸内オコゼ会席",
                "料理長厳選の瀬戸内冬魚オコゼ薄造り＆甘辛ダレ香る寒穴子一本揚げ",
                "無料平面駐車場完備で車でのしまなみ周遊や尾道ドライブにも安心の拠点"
              ]
            },
            {
              id: 3,
              name: "ＨＯＴＥＬ　ＣＹＣＬＥ（ホテルサイクル）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/145459/145459.jpg",
              rating: 4.50,
              reviews: 207,
              price: "¥15,791〜",
              access: "JR山陽本線　尾道駅より徒歩にて約５分。",
              special: "ここでしか過ごせないひとときとアットホームなおもてなしでお迎えいたします。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145459%2F145459.html",
              story: "戦前の歴史ある海運倉庫を大胆にリノベーションした複合施設「ONOMICHI U2」内に位置する「ＨＯＴＥＬ ＣＹＣＬＥ（ホテルサイクル）。」。国内外のデザイン賞を多数受賞した洗練の空間は、木と鉄の温もりとインダストリアルな美意識が調和し、世界中からサイクリストやカルチャートラベラーを惹きつけています。客室には上質な天然素材のリネンや厳選されたアメニティが揃い、冬の冷たい風を遮る心地よい静寂に浸れます。併設レストランでは薪火でじっくり焼き上げる瀬戸内の旬魚や地元肉料理が味わえ、感性を刺激する唯一無二の滞在が叶います。",
              roomTip: "デラックスツイン。質感豊かな木製家具と特注ベッド。自転車を部屋に持ち込めるサイクルハンガーを備えた洗練のデザイン空間。",
              gourmetTip: "「The RESTAURANT・薪火グリルディナー。」。香ばしい薪の香りをまとった瀬戸内真鯛や広島県産牛ステーキ、地産冬野菜のロースト。",
              highlights: [
                "海運倉庫再生の話題リノベーション複合施設ONOMICHI U2内・世界水準デザイン",
                "薪火グリルで仕上げる香ばしい瀬戸内真鯛＆地元契約農家の冬野菜ロースト",
                "客室内に愛車をディスプレイできるサイクルハンガー完備・バー＆ベーカリー併設"
              ]
            },
            {
              id: 4,
              name: "天然温泉　尾道みなと館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/153136/153136.jpg",
              rating: 4.32,
              reviews: 594,
              price: "¥5,830〜",
              access: "ＪＲ尾道駅より　徒歩約１５分／バス約５分（”長江口”で下車後徒歩２分）",
              special: "天然温泉が自慢★尾道観光中心部★プチリゾートホテル★",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153136%2F153136.html",
              story: "尾道本通り商店街のアーケード内に佇む「天然温泉 尾道みなと館」は、尾道市街地で極めて希少な天然温泉大浴場を備えた温もりの宿。地下深くから湧き出る天然ラジウム温泉は、冬の坂道や石段の散策で冷え切った足腰を芯からじんわりと温め解きほぐしてくれます。館内には本格的なグリルレストラン「WHARF」が併設されており、広島牛や瀬戸内海の海の幸を気軽に味わえます。商店街に直結しているため、昔ながらの純喫茶や町中華、老舗の尾道ラーメン店巡りにも抜群のアクセスを誇ります。",
              roomTip: "和モダンツインルーム。靴を脱いでくつろげる畳敷きの小上がりとシモンズベッド。冬の温泉上がりに素足でリラックスできる空間。",
              gourmetTip: "「広島牛の溶岩焼きグリル＆天然温泉朝食」。熱々の溶岩プレートで香ばしく焼き上げるブランド牛と、冬の身体に優しいあったか和朝食。",
              highlights: [
                "尾道市街地で希少な天然ラジウム温泉大浴場完備・本通り商店街アーケード直結",
                "併設グリルで味わう広島牛溶岩焼きディナー＆商店街の老舗ラーメン巡り",
                "冷えた身体を天然温泉で芯から癒やす・散策疲れを解きほぐす至福の湯浴み"
              ]
            },
            {
              id: 5,
              name: "尾道宿場",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/177103/177103.jpg",
              rating: 3.91,
              reviews: 44,
              price: "¥4,200〜",
              access: "ＪＲ　尾道駅より徒歩にて約１５分",
              special: "千光寺ロープウェイ乗り場から徒歩2分、尾道観光にとても便利な立地です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177103%2F177103.html",
              story: "千光寺ロープウェイ山麓駅まで徒歩わずか3分、情緒ある長江通り沿いに位置する「尾道宿場」。尾道の歴史ある町並みに溶け込むように佇み、千光寺への早朝参拝や新春初詣の拠点として絶好のロケーションを誇ります。シンプルで清潔感あふれる和モダンな客室は、気兼ねなく過ごせるプライベート感を重視した設計。周辺には昭和レトロな街並みや隠れ家カフェが点在し、夕暮れから夜にかけての尾道の情緒を間近に感じられます。リーズナブルでありながら居心地の良さを追求した、スマートな旅にぴったりの宿です。",
              roomTip: "ダブル・ツインルーム。コンパクトながら動線に優れた機能的な間取り。千光寺の麓の澄んだ空気を感じながら静かに眠れます。",
              gourmetTip: "「近隣名店探訪・本場尾道ラーメンと瀬戸内居酒屋。」。宿周辺に点在する老舗尾道ラーメン店で、熱々の背脂醤油ラーメンを夜食に堪能。",
              highlights: [
                "千光寺ロープウェイ山麓駅徒歩3分・新春初詣至近・レトロな長江通りの隠れ家ステイ",
                "静かな和モダン客室で気兼ねない時間・周辺の隠れ家カフェや純喫茶探訪",
                "リーズナブルな料金設定と抜群の立地・千光寺早朝参拝で清々しい新年の幕開け"
              ]
            }
  ];

  const faqList = [
  {
    "q": "冬（11月〜1月）の尾道で尾道水道の夕景や夜景が最も美しい時間帯や観賞スポットは？",
    "a": "尾道は南に尾道水道、北に千光寺山を背負った地形のため、冬の澄んだ大気の中で日没前後の空と水面のグラデーションが息をのむ美しさを見せます。日の入り時刻は11月〜1月で17:00〜17:20頃。日没の約30分前から日没後20分（マジックアワー）がベストです。最高峰の観賞スポットは千光寺公園展望台「PEAK（ピーク）」で、尾道水道を挟んで向島や因島、遠く四国山地までが一望できます。また、尾道駅前港湾緑地やグリーンヒルホテル尾道前の遊歩道から見上げる、山肌に灯る民家の温かな明かりと渡船の光も格別の旅情があります。"
  },
  {
    "q": "千光寺の新春初詣の混雑状況や見どころ、ロープウェイの運行は？",
    "a": "千光寺は大同元年（806年）弘法大師の開基とも伝えられる名刹で、朱塗りの本堂（赤堂）が山肌にせり出すように建っています。新春初詣には備後エリア一円から多数の参拝客が訪れ、元旦から三が日は大変賑わいます。千光寺山ロープウェイは初詣期間中も運行されており、約3分で山頂展望台と山麓を結びます（徒歩の場合は「文学のこみち」の石段を登り約15〜20分）。本尊の千手観世音菩薩の御開帳や、かつて宝珠が光を放ったと伝わる「玉の岩」、除夜の鐘で有名な鐘楼が見どころ。混雑を避けるなら午前8時〜9時台の早朝参拝が清々しくおすすめです。"
  },
  {
    "q": "冬の尾道で味わうべきご当地グルメ（オコゼ、穴子、尾道ラーメン）の魅力は？",
    "a": "尾道の冬の味覚の王様は「オコゼ（虎魚）」です。見た目は厳つい魚ですが、冬は引き締まった身に甘みと旨みが凝縮され、フグにも勝ると称される極上の白身魚です。透き通る薄造り（刺身）や、骨まで香ばしく揚げる唐揚げ、濃厚なアラの味噌汁は絶品。また冬の「寒穴子」はふっくらと脂が乗り、香ばしい穴子飯や白焼きで親しまれます。そして寒風の中で身体を温めるなら「尾道ラーメン」。鶏ガラと瀬戸内の小魚（イリコ等）で取った澄んだ醤油スープに平打ち熟成麺、そして表面に浮かぶ大粒の豚背脂のコクがたまらない冬のソウルフードです。"
  },
  {
    "q": "冬の尾道〜しまなみ海道周遊時の気候とサイクリング・ドライブの注意点は？",
    "a": "瀬戸内海特有の温暖少雨な気候のため、尾道市街地やしまなみ海道の島々で雪が積もることは極めて稀です。日中の最高気温は10〜13℃前後と晴れていれば心地よいですが、海沿いや橋の上は北西の海風（からっ風）が強く吹き抜けるため、体感温度は一気に下がります。冬にしまなみ海道をサイクリングする場合は、防風ウインドブレーカー、ネックウォーマー、防寒手袋が必須です。車でのドライブは積雪の心配はほとんどありませんが、朝晩の冷え込みによる橋梁部分の路面凍結には注意が必要です。"
  },
  {
    "q": "冬の尾道をゆったり巡るおすすめの1泊2日観光モデルコースは？",
    "a": "1日目はJR尾道駅到着後、まず「ONOMICHI U2」のベーカリーやカフェで海を眺めて一息。尾道本通り商店街を散策しながら人気の尾道ラーメン店でランチ。午後は「艮神社」の巨樹クスノキをお参りし、千光寺山ロープウェイで山頂へ。新展望台「PEAK」から夕暮れに輝く尾道水道の大パノラマを鑑賞し、夕暮れの「猫の細道」を下って宿へチェックイン。夜は名宿でオコゼや寒穴子の瀬戸内会席を堪能。2日目は早朝の千光寺へ参拝して新春開運祈願。対岸の向島へ渡船で渡り、生口島の「耕三寺」や「瀬戸田レモン谷」へ足を伸ばす爽快ルートがおすすめです。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'ホーム', 'item': 'https://croud-travel.pages.dev' },
          { '@type': 'ListItem', 'position': 2, 'name': '特集一覧', 'item': 'https://croud-travel.pages.dev/features' },
          { '@type': 'ListItem', 'position': 3, 'name': '尾道水道夕景・千光寺初詣とオコゼ名宿', 'item': 'https://croud-travel.pages.dev/winter-hiroshima-onomichi-senkoji-shimanami-okoze-ramen-stay' }
        ]
      },
      {
        '@type': 'TouristDestination',
        'name': '千光寺・尾道水道・尾道市',
        'description': "冬の広島・尾道は、箱庭のような尾道水道と島々のシルエットが夕日に黄金色に染まる年間最高峰の絶景シーズン。大同元年（806年）開基の古刹「千光寺」での新春開運初詣と玉の岩の伝説、尾道最古の艮神社や風情ある坂の小路散策。冬に最も脂が乗る瀬戸内の高級魚オコゼの薄造りや唐揚げ、冬の寒穴子、本場の熱々尾道ラーメンや名産生口島レモン。海運倉庫を再生した話題のデザインホテルから尾道水道一望の絶景宿、天然温泉まで厳選名宿5選を徹底解説します。",
        'touristType': ['歴史探訪', '絶景鑑賞', '新春初詣', '冬の美食', '港町散策']
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': "冬（11月〜1月）の尾道で尾道水道の夕景や夜景が最も美しい時間帯や観賞スポットは？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "尾道は南に尾道水道、北に千光寺山を背負った地形のため、冬の澄んだ大気の中で日没前後の空と水面のグラデーションが息をのむ美しさを見せます。日の入り時刻は11月〜1月で17:00〜17:20頃。日没の約30分前から日没後20分（マジックアワー）がベストです。最高峰の観賞スポットは千光寺公園展望台「PEAK（ピーク）」で、尾道水道を挟んで向島や因島、遠く四国山地までが一望できます。また、尾道駅前港湾緑地やグリーンヒルホテル尾道前の遊歩道から見上げる、山肌に灯る民家の温かな明かりと渡船の光も格別の旅情があります。"
            }
          },
          {
            '@type': 'Question',
            'name': "千光寺の新春初詣の混雑状況や見どころ、ロープウェイの運行は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "千光寺は大同元年（806年）弘法大師の開基とも伝えられる名刹で、朱塗りの本堂（赤堂）が山肌にせり出すように建っています。新春初詣には備後エリア一円から多数の参拝客が訪れ、元旦から三が日は大変賑わいます。千光寺山ロープウェイは初詣期間中も運行されており、約3分で山頂展望台と山麓を結びます（徒歩の場合は「文学のこみち」の石段を登り約15〜20分）。本尊の千手観世音菩薩の御開帳や、かつて宝珠が光を放ったと伝わる「玉の岩」、除夜の鐘で有名な鐘楼が見どころ。混雑を避けるなら午前8時〜9時台の早朝参拝が清々しくおすすめです。"
            }
          },
          {
            '@type': 'Question',
            'name': "冬の尾道で味わうべきご当地グルメ（オコゼ、穴子、尾道ラーメン）の魅力は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "尾道の冬の味覚の王様は「オコゼ（虎魚）」です。見た目は厳つい魚ですが、冬は引き締まった身に甘みと旨みが凝縮され、フグにも勝ると称される極上の白身魚です。透き通る薄造り（刺身）や、骨まで香ばしく揚げる唐揚げ、濃厚なアラの味噌汁は絶品。また冬の「寒穴子」はふっくらと脂が乗り、香ばしい穴子飯や白焼きで親しまれます。そして寒風の中で身体を温めるなら「尾道ラーメン」。鶏ガラと瀬戸内の小魚（イリコ等）で取った澄んだ醤油スープに平打ち熟成麺、そして表面に浮かぶ大粒の豚背脂のコクがたまらない冬のソウルフードです。"
            }
          },
          {
            '@type': 'Question',
            'name': "冬の尾道〜しまなみ海道周遊時の気候とサイクリング・ドライブの注意点は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "瀬戸内海特有の温暖少雨な気候のため、尾道市街地やしまなみ海道の島々で雪が積もることは極めて稀です。日中の最高気温は10〜13℃前後と晴れていれば心地よいですが、海沿いや橋の上は北西の海風（からっ風）が強く吹き抜けるため、体感温度は一気に下がります。冬にしまなみ海道をサイクリングする場合は、防風ウインドブレーカー、ネックウォーマー、防寒手袋が必須です。車でのドライブは積雪の心配はほとんどありませんが、朝晩の冷え込みによる橋梁部分の路面凍結には注意が必要です。"
            }
          },
          {
            '@type': 'Question',
            'name': "冬の尾道をゆったり巡るおすすめの1泊2日観光モデルコースは？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "1日目はJR尾道駅到着後、まず「ONOMICHI U2」のベーカリーやカフェで海を眺めて一息。尾道本通り商店街を散策しながら人気の尾道ラーメン店でランチ。午後は「艮神社」の巨樹クスノキをお参りし、千光寺山ロープウェイで山頂へ。新展望台「PEAK」から夕暮れに輝く尾道水道の大パノラマを鑑賞し、夕暮れの「猫の細道」を下って宿へチェックイン。夜は名宿でオコゼや寒穴子の瀬戸内会席を堪能。2日目は早朝の千光寺へ参拝して新春開運祈願。対岸の向島へ渡船で渡り、生口島の「耕三寺」や「瀬戸田レモン谷」へ足を伸ばす爽快ルートがおすすめです。"
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
      <header className="relative bg-gradient-to-br from-indigo-950 via-slate-900 to-amber-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-200 text-xs sm:text-sm font-medium mb-6">
            <Snowflake className="w-4 h-4 text-cyan-300" />
            11月・12月・1月冬の特選旅｜広島・尾道＆しまなみ海道
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-6">尾道水道の夕景＆千光寺新春開運初詣！<br className="hidden sm:inline" /> 瀬戸内の旬魚オコゼ・穴子と名物尾道ラーメンの名宿5選</h1>
          <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-4xl mb-8">
            箱庭のように美しい瀬戸内の海と島々を抱く坂の街・尾道。空気が最も澄み切る冬期は、夕日に黄金色に輝く尾道水道の絶景が息をのむ美しさを放ちます。大同元年開基の古刹「千光寺」での清々しい新春初詣、尾道最古の艮神社と坂道の路地巡り。そして冬に極上の脂を蓄える高級白身魚オコゼや寒穴子、冷えた身体に染み渡る本場尾道ラーメン。歴史ある港町の情緒と感性を刺激する厳選名宿をご案内します。
          </p>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-cyan-200">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /> 広島県尾道市・向島</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-cyan-400" /> 見頃期：11月上旬〜1月下旬</span>
            <span className="flex items-center gap-1.5"><Waves className="w-4 h-4 text-cyan-400" /> 尾道水道夕景＆千光寺新春初詣</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-cyan-600 pl-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Destination In-Depth</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の尾道水道が魅せる光の陰影、千年の古刹に祈る新年の幸福
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              坂道と海が織りなす日本遺産の美と、瀬戸内の冬の豊穣が紡ぐ特別な旅
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              本州と向島を隔てる幅わずか200〜300メートルの細長い海「尾道水道」。天然の良港として平安時代末期から北前船や西廻り航路の寄港地として栄えた尾道は、山と海に挟まれた狭小な土地に寺社や民家が寄り添うように立ち並び、「箱庭的都市」として日本遺産第1号に認定されました。尾道が一年の中で最も静謐で美しい光をまとうのが、11月から1月にかけての冬の季節です。
            </p>
            <p>
              冬特有の澄み渡る乾いた空気の中、夕刻になると西の空が茜色から紫、群青へと染まり、穏やかな尾道水道の水面がまるで鏡のように夕焼けの空と島影を映し出します。山肌に張り付くように建つ「千光寺」の境内や、千光寺公園の新展望台「PEAK」から見下ろす水道のパノラマは、まさに息をのむ美しさ。行き交う小さな渡船が引く一筋の白い航跡と、遠くで響く汽笛の音が、旅情を静かに掻き立てます。千光寺は大同元年（806年）開基の古刹で、朱塗りの本堂や夜に輝いたと伝わる玉の岩など数々の伝説を秘めた聖地。正月三が日には多くの参拝者が新年の開運・厄除けを祈願して訪れます。
            </p>
            <p>
              また尾道の冬は、グルメにとっても至福の季節です。瀬戸内海の激しい潮流にもまれて育つ冬の「オコゼ（虎魚）」は、薄造りで食せばフグにも勝る繊細な甘みと歯ごたえを誇り、カラリと揚げた唐揚げは香ばしい骨まで丸ごと味わえます。さらに脂が乗った冬の「寒穴子」を特製のタレでふっくら炊き上げた穴子飯や、旬を迎える瀬戸内真鯛、冬の牡蠣。そして散策で冷えた身体を芯から温めてくれるのが名物の「尾道ラーメン」。瀬戸内の小魚出汁が香る醤油スープにコク深い豚の背脂が浮かび、熱々のスープが喉を通る瞬間の多幸感は格別です。
            </p>
            <p>
              近年では、海運倉庫を再生した「ONOMICHI U2」をはじめ、古民家や町家をリノベーションした個性豊かなカフェやギャラリーが次々と誕生。歴史と現代のデザインが見事に融合した街並みを歩き、尾道水道を間近に望む宿や希少な天然温泉で過ごすひとときは、日常を離れた贅沢な休息をもたらしてくれます。
            </p>
          </div>

          {/* 3 Pillar Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-cyan-50/60 border border-cyan-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">尾道水道の夕景マジックアワー</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                澄み渡る冬の大気の中、千光寺公園展望台PEAKから望む黄金色の夕景。行き交う渡船と島々の影が織りなす絶景。
              </p>
            </div>

            <div className="bg-cyan-50/60 border border-cyan-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">千光寺新春初詣＆坂の小路散策</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                806年開基の古刹で開運初詣。艮神社の巨樹クスノキ、猫の細道、石畳の小路を巡る情緒豊かな町歩き。
              </p>
            </div>

            <div className="bg-cyan-50/60 border border-cyan-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">冬の高級魚オコゼ＆尾道ラーメン</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                白身の王様オコゼの薄造りと唐揚げ、冬の寒穴子飯、そして小魚出汁と背脂が染み渡る熱々の尾道ラーメン。
              </p>
            </div>
          </div>
        </section>

        {/* Month Guide */}
        <section className="bg-gradient-to-r from-slate-900 to-cyan-950 text-white rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
          <div className="border-l-4 border-cyan-400 pl-4">
            <span className="text-cyan-300 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Seasonal Calendar</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              11月・12月・1月の見どころカレンダー＆気候・服装ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-md">11月（初冬）</span>
              <h3 className="font-bold text-white text-base">西國寺の紅葉と快適なしまなみ周遊</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                古刹・西國寺や耕三寺の紅葉が深まり、冬の澄んだ青空の下で快適な町歩きが楽しめます。日中は15℃前後で過ごしやすいですが、海沿いの夕方は風が冷たくなるため羽織るジャケットが重宝します。
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded-md">12月（仲冬）</span>
              <h3 className="font-bold text-white text-base">尾道水道夕景の極みとオコゼ旬入り</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                年間で最も夕景の色彩が鮮やかになるシーズン。瀬戸内のオコゼ漁が最盛期を迎え、各割烹で極上の薄造りが登場します。気温は5〜10℃程度に下がるため、風を通さないコートやマフラーが必須です。
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-rose-500/20 text-rose-300 text-xs font-bold rounded-md">1月（厳冬）</span>
              <h3 className="font-bold text-white text-base">千光寺新春初詣と熱々尾道ラーメン</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                新年を祝う初詣客で賑わう千光寺と艮神社。冷え込みが厳しくなるこの時期、背脂が浮かぶ熱々の尾道ラーメンが格別の旨さ。海風対策として防寒インナーや手袋をしっかり準備して出かけましょう。
              </p>
            </div>
          </div>
        </section>

        {/* Spot Highlights Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8">
          <div className="border-l-4 border-cyan-600 pl-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Must-Visit Winter Spots</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬に訪れるべき尾道の三大名所と体験ポイント
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Mountain className="w-5 h-5 text-cyan-600" /> 大宝山 千光寺
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                巨岩怪石が連なる千光寺山の中腹に建つ名刹。朱塗りの本堂から尾道水道を一望する絶景は圧巻。除夜の鐘楼や縁起物の玉の岩、新春限定の御朱印やお守りを授かる新春参拝が人気です。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：千光寺山ロープウェイ山頂駅より徒歩約3分。山麓駅から徒歩約15〜20分。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Sun className="w-5 h-5 text-amber-600" /> 千光寺公園展望台「PEAK」
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                全長約63メートルの曲線美を誇るモダンな展望台。尾道水道、向島、因島、そして遠く四国の稜線までを360度の大パノラマで見渡せます。冬の夕刻に訪れると、絵画のようなマジックアワーを体感できます。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：ロープウェイ山頂駅すぐ。24時間開放（入場無料）。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Building className="w-5 h-5 text-indigo-600" /> ONOMICHI U2＆尾道水道プロムナード
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                海運倉庫を再生した複合商業施設。ホテル、ベーカリー、レストラン、カフェ、サイクルショップが集結。海沿いの木製デッキを散策しながら、冬の海風と波の音を楽しむ心地よいひとときを過ごせます。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：JR尾道駅南口より徒歩約5分。無料レンタサイクルや荷物預かりも充実。
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-l-4 border-cyan-600 pl-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              冬の尾道を満喫する厳選名宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              水道ハーバービュー・話題のリノベーションホテル・天然温泉・初詣至近の名宿
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
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      厳選宿 #{h.id}
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-100">
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
                            <Sun className="w-3.5 h-3.5 text-cyan-600" /> 客室・眺望の魅力
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
                        <span className="text-xl sm:text-2xl font-extrabold text-slate-900">{h.price}</span>
                      </div>

                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white font-bold text-sm shadow hover:from-cyan-700 hover:to-indigo-700 transition-all"
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
          <div className="border-l-4 border-cyan-600 pl-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の尾道を満喫する1泊2日絶景・美食・初詣モデルコース
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              尾道水道の夕景、千光寺新春開運初詣、オコゼ会席と名物ラーメンを味わい尽くす旅日程
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-cyan-600 text-white text-xs rounded-md font-bold">1日目</span>
                尾道水道プロムナード散策・ロープウェイ絶景夕景とオコゼ会席
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed">
                <li><strong className="text-slate-900">11:30 JR尾道駅に到着</strong>：駅前の海沿いプロムナードを散策し、海運倉庫を改装した複合施設「ONOMICHI U2」へ。</li>
                <li><strong className="text-slate-900">12:30 本場尾道ラーメンランチ</strong>：尾道本通り商店街の老舗ラーメン店で、熱々の小魚出汁＆背脂醤油ラーメンを堪能。</li>
                <li><strong className="text-slate-900">14:00 艮神社と猫の細道を散策</strong>：尾道最古の艮神社で巨樹クスノキを拝観し、風情ある石畳の坂道や隠れ家カフェを巡る。</li>
                <li><strong className="text-slate-900">16:00 千光寺山ロープウェイで展望台PEAKへ</strong>：夕暮れに合わせて山頂へ。冬の澄んだ大気の中、黄金色に染まる尾道水道のマジックアワーを鑑賞。</li>
                <li><strong className="text-slate-900">18:00 宿にチェックイン＆冬の瀬戸内ディナー</strong>：尾道水道を望む宿または天然温泉でくつろぎ、冬の高級魚オコゼの薄造りや唐揚げ、広島牛会席を堪能。</li>
              </ol>
            </div>

            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-slate-800 text-white text-xs rounded-md font-bold">2日目</span>
                千光寺新春開運初詣と向島渡船体験・しまなみ島巡り
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed">
                <li><strong className="text-slate-900">08:00 宿で朝食を堪能</strong>：名物の鯛茶漬けや地元野菜の和朝食で温まり、チェックアウト。</li>
                <li><strong className="text-slate-900">09:00 千光寺へ新春開運参拝</strong>：朝の清々しい空気の中、朱塗りの赤堂で本尊千手観音に参拝し、玉の岩や鐘楼を見学。</li>
                <li><strong className="text-slate-900">11:00 向島渡船体験</strong>：駅前桟橋からわずか3分、わずか数十円の渡船で対岸の向島へ。レトロな港町の日常風景を体感。</li>
                <li><strong className="text-slate-900">12:30 しまなみ海道ドライブまたは生口島へ</strong>：車またはバスで生口島へ。耕三寺や未来心の丘を散策し、特産の瀬戸田レモンランチとお土産選び。</li>
                <li><strong className="text-slate-900">16:00 福山駅または尾道駅より新幹線で帰路へ</strong>：山陽新幹線で快適に帰路へ。</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Access and Winter Driving Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-cyan-600 pl-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Access & Winter Driving</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              尾道への交通アクセスと冬期の移動注意点
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Compass className="w-5 h-5 text-cyan-600" /> 電車・新幹線・航空便アクセス
              </h3>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li><strong className="text-slate-900">新幹線でのアクセス</strong>：山陽新幹線「福山駅」よりJR山陽本線乗り換えで尾道駅まで約20分。または「新尾道駅」下車、路線バスで尾道駅まで約15分。</li>
                <li><strong className="text-slate-900">飛行機でのアクセス</strong>：広島空港よりリムジンバス・連絡バスで福山・三原経由、尾道市街地まで約50〜60分。</li>
              </ul>
            </div>

            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ThermometerSun className="w-5 h-5 text-amber-600" /> 車・レンタカー＆海風・防寒対策
              </h3>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li><strong className="text-slate-900">高速道路IC</strong>：山陽自動車道「尾道IC」または「福山西IC」より市街地まで約15〜20分。西瀬戸自動車道（しまなみ海道）「尾道大橋出入口」直結。</li>
                <li><strong className="text-slate-900">冬の気候と橋の走行</strong>：瀬戸内海沿岸のため積雪の心配はほとんどありませんが、しまなみ海道の大型橋梁上は強風が吹く日があります。二輪車や自転車での走行時は横風に十分注意してください。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-cyan-600 pl-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-2xl font-bold text-slate-900">
              冬の尾道旅行 よくある質問（FAQ）
            </h2>
          </div>
          <div className="space-y-6">
            {faqList.map((faq, index) => (
              <div key={index} className="pb-6 border-b border-slate-100 last:border-b-0 last:pb-0">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <span className="text-cyan-600 font-extrabold">Q.</span>
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
            <Compass className="w-5 h-5 text-cyan-600" />
            あわせて読みたい！近隣エリアの冬特集記事
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/winter-hiroshima-miyajima-etajima-oyster-onsen-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-cyan-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-cyan-600 block"
            >
              【宮島・江田島】世界遺産厳島神社新春初詣と冬の焼き牡蠣・温泉名宿
            </Link>
            <Link
              href="/winter-hiroshima-tomonoura-onsen-setouchi-taimeshi-taoshitagyu-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-cyan-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-cyan-600 block"
            >
              【鞆の浦温泉】常夜燈と冬の瀬戸内真鯛茶漬け・幻の峠下牛名宿
            </Link>
            <Link
              href="/winter-yamaguchi-iwakuni-kintaikyo-suo-oshima-mikan-nabe-takamorigyu-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-cyan-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-cyan-600 block"
            >
              【岩国・周防大島】日本三名橋錦帯橋の冬景色と名物みかん鍋・高森牛名宿
            </Link>
            <Link
              href="/winter-kagawa-takamatsu-ritsurin-yashima-olive-hamachi-udon-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-cyan-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-cyan-600 block"
            >
              【高松・屋島】特別名勝栗林公園の冬景色と極上オリーブハマチ名宿
            </Link>
            <Link
              href="/winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-cyan-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-cyan-600 block"
            >
              【道後温泉本館】日本最古の名湯再生と宇和島鯛めし・伊予牛名宿
            </Link>
            <Link
              href="/features"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-cyan-300 hover:shadow-xs transition-all text-sm font-bold text-cyan-700 block text-center flex items-center justify-center gap-1"
            >
              <span>全国の冬旅特集一覧を見る</span>
              <Compass className="w-4 h-4" />
            </Link>
          
      <HubRelatedPosts currentSlug="winter-hiroshima-onomichi-senkoji-shimanami-okoze-ramen-stay" />
</div>
        </section>
      </main>
    </article>
  );
}
