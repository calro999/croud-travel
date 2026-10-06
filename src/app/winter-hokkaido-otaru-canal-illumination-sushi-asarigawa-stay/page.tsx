import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Fish, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Snowflake, Sparkle, Map
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月北海道・小樽】小樽前浜極上寿司！名宿5選',
  description: '11月から12月にかけて、小樽は初雪が舞い散る運河沿いに約1万個の青色LEDが輝く冬の風物詩「小樽ゆき物語・青の運河」が開幕し。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '小樽温泉 宿泊, ホテルノイシュロス小樽, おたる宏楽園, 運河の宿おたるふる川, オーセントホテル小樽, ホテル武蔵亭, 小樽ゆき物語, 青の運河 11月 12月, 朝里川温泉, 小樽寿司',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-hokkaido-otaru-canal-illumination-sushi-asarigawa-stay/"
  },
  openGraph: {
    title: '【11・12月北海道・小樽】小樽前浜極上寿司！名宿5選',
    description: '11月から12月にかけて、小樽は初雪が舞い散る運河沿いに約1万個の青色LEDが輝く冬の風物詩「小樽ゆき物語・青の運河」が開幕し。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-hokkaido-otaru-canal-illumination-sushi-asarigawa-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の小樽運河と青の運河イルミネーション・朝里川温泉雪見露天風呂'
      }
    ]
  }
};

export default function WinterHokkaidoOtaruPage() {
  const hotels = [
            {
              id: 1,
              name: "ホテルノイシュロス小樽",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/20682/20682.jpg",
              rating: 4.24,
              reviews: 1477,
              price: "¥11,550〜",
              access: "小樽駅より無料送迎有　要予約（電話対応） ＪＲ小樽駅よりバス２０分　千歳空港よりお車で９０分　小樽ＩＣよりお車で２５分",
              special: "全室露天風呂（窓開閉式）付きオーシャンビューリゾート。ディナーはフレンチコース料理をご堪能下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20682%2F20682.html",
              story: "日本海を見下ろす祝津（しゅくつ）の断崖絶壁、ニセコ積丹小樽海岸国定公園の岬の突端に聳え立つ、全室オーシャンビュー＆客室露天風呂付きの欧風リゾートホテル「ホテルノイシュロス小樽」。館内はウィーンの古城をイメージした重厚なクラシックモダン調で統一され、ロビーやラウンジの大きな窓の外には初冬の荒々しくも美しい日本海がどこまでも広がります。全客室に設えられた展望風呂からは、湯船に浸かりながら冬の日本海の水平線や波しぶき、夜には海に浮かぶイカ釣り漁船の漁火を独占。天候に恵まれた夕暮れ時には、海と空が紫紅に染まる劇的な夕景が旅人を魅了します。夕食は北海道の厳選食材と日本海の新鮮な海の幸を惜しみなく使った創作フレンチコース。近海産ヒラメのポワレや道産牛フィレ肉のロティなど、ワインとともに優雅なディナータイムが流れます。",
              roomTip: "オーシャンフロント展望風呂付き洋室（または和洋室）。窓一面に広がる冬の日本海のダイナミックな海景と波音に包まれ、誰にも邪魔されずに名湯を満喫できる贅沢なプライベート空間。",
              gourmetTip: "「初冬の創作フレンチフルコース」。小樽前浜産活蝦夷鮑のステーキ、道産黒毛和牛フィレ肉の低温ロースト・赤ワインソース、冬野菜のポタージュ、自家製パンとパティシエ特製デザート。",
              highlights: [
                "祝津の岬に建つ欧風古城ホテル＆全室オーシャンビュー客室展望風呂の圧倒的眺望",
                "北海道厳選素材の創作フレンチフルコース＆冬の日本海水平線を望む非日常ディナー",
                "夜空に浮かぶイカ釣り漁船の漁火＆天狗山や小樽市内観光へのアクセスも良好"
              ]
            },
            {
              id: 2,
              name: "おたる　宏楽園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4661/4661.jpg",
              rating: 4.72,
              reviews: 369,
              price: "¥20,900〜",
              access: "ＪＲ小樽築港駅よりタクシー１5分。又は小樽駅バスターミナル2番から朝里川温泉行きで30分◇お車の方は朝里インター1分",
              special: "8千坪の庭園に囲まれた和風の閑静な宿です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4661%2F4661.html",
              story: "小樽の奥座敷として知られる朝里川温泉に佇み、約8,000坪もの広大な日本庭園と自家源泉の美肌湯を誇る純和風の名門温泉旅館「おたる 宏楽園（こうらくえん）」。手入れの行き届いた日本庭園は、初冬になると木々に雪吊りが施され、静かに降り積もる初雪と灯籠の灯りが幽玄な世界を紡ぎ出します。自家源泉から湧き出る温泉は、肌をしっとりと包み込む肌触り柔らかなアルカリ性単純温泉。庭園に面した野趣あふれる大浴場や露天風呂では、凛とした冬の冷気の中で立ち上る湯けむりに包まれ、白銀の木々を眺めながら時間を忘れる湯浴みが楽しめます。夕食は北海道の四季折々の旬魚や銘柄肉を贅沢に盛り込んだ本格京風会席。小樽港から届く新鮮なお造り盛り合わせ、道産牛の陶板焼き、土鍋でふっくら炊き上げる道産米の炊き込みご飯など、一品一品に職人の細やかな技が息づきます。",
              roomTip: "露天風呂付き客室（本館または別邸）。雪化粧した宏楽園自慢の日本庭園を客室専用の露天風呂から眺め、湯上がりには心地よい畳敷きのリビングでゆったりとプライベートな時を過ごせます。",
              gourmetTip: "「初冬の宏楽園特選会席」。小樽港直送・旬魚五種のお造り（牡丹海老・寒平目・本鮪・生雲丹等）、北海道産黒毛和牛の陶板ステーキ、旬の焼き物、道産ゆめぴりかの季節の土鍋ご飯。",
              highlights: [
                "8,000坪の雪化粧日本庭園＆自家源泉美肌の湯と露天風呂付き客室で過ごす至福",
                "小樽港直送旬魚五種盛りと道産黒毛和牛の贅沢会席＆職人の繊細な京風仕立て",
                "雪吊りが施された冬庭園のライトアップ＆静寂な大人の時間を約束する名旅館"
              ]
            },
            {
              id: 3,
              name: "運河の宿　おたる　ふる川",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1734/1734.jpg",
              rating: 4.80,
              reviews: 1129,
              price: "¥12,100〜",
              access: "ＪＲ小樽駅から徒歩約１３分（車で５分）",
              special: "天然温泉『小樽運河前の温泉宿』　明治時代の商家を再現。おもてなし溢れる空間で寛ぎの一日を。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1734%2F1734.html",
              story: "小樽運河のすぐ目の前に位置し、明治・大正期の小樽の商家の温もりとノスタルジーを現代に蘇らせた風情あふれる宿「運河の宿 おたる ふる川」。天然木や古民家の梁を活かした温かみのある館内は、どこか懐かしく心安らぐ空気に満ちています。宿自慢の温泉大浴場は、小樽軟石を敷き詰めた内湯「壱の湯」と檜の香り漂う「弐の湯」があり、朝夕で男女入れ替え制。露天風呂には初冬の冷たい空気が心地よく流れ、湯上がり処では無料の麦茶やアイスキャンディーが用意されています。さらに運河に面した展望ラウンジからは、夕暮れ時から夜にかけて青色にライトアップされた「青の運河」の絶景を特等席で見下ろすことができます。夕食は小樽の海の幸や北海道の郷土の味覚を大切にした和食会席。料理人が目の前で腕を振るう食事処で、港町小樽ならではの贅沢を味わえます。",
              roomTip: "運河側客室（スーペリアツインまたは和洋室）。ライトアップされた幻想的な小樽運河のガス灯と石造り倉庫群を窓から一望でき、散策の余韻をそのまま部屋で味わえる最高のロケーション。",
              gourmetTip: "「冬の小樽美味会席」。近海で獲れた活ホタテやシャコ、寒ブリのお造り、道産牛と冬野菜の小鍋仕立て、香ばしい焼き魚、北海道産新米と手作り味噌汁。",
              highlights: [
                "小樽運河の目の前に建つノスタルジック和風宿＆青の運河を望む特等席ラウンジ",
                "小樽港前浜の活ホタテ・シャコ・寒ブリ会席＆小樽軟石と檜が香る風情あふれる温泉",
                "運河散策の拠点に最適なロケーション＆大正ロマン薫る落ち着いた客室空間"
              ]
            },
            {
              id: 4,
              name: "オーセントホテル小樽",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/825/825.jpg",
              rating: 4.39,
              reviews: 2109,
              price: "¥6,100〜",
              access: "ＪＲ小樽駅より徒歩5分　悪天候時は都通り商店街(屋根付き)をお歩き下さい　近隣コインパーキングも多数",
              special: "小樽駅より徒歩5分で観光便利♪海と街を望むノスタルジックなホテル。地産地消の美食も口コミ高評価！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F825%2F825.html",
              story: "小樽の目抜き通り・中央通に面し、JR小樽駅から徒歩約5分という観光・散策の拠点として抜群の立地を誇る本格シティホテル「オーセントホテル小樽」。館内はヨーロッパ調のクラシックな気品と落ち着きが漂い、一流ホテルならではのきめ細やかなホスピタリティが高評価を得ています。宿泊者専用の大浴場には本場フィンランド式サウナとミストサウナが完備され、初冬の街歩きで冷えた身体の芯まで心地よく温めることができます。ホテル内には小樽前浜の新鮮な握り寿司を堪能できる「和食 入舟」や、本格フレンチレストラン「カサブランカ」、最上階の夜景を望むオーセンティックバー「キャプテンズ・バー」など多彩な名店が集結。夕食には職人が一貫一貫丁寧に握る蝦夷前寿司会席が人気で、地酒や北海道ワインとともに優雅なディナーを堪能できます。",
              roomTip: "デラックスツインルーム。広々としたベッドと気品ある調度品が配され、窓からは小樽の街並みや天狗山方面の夜景をゆったりと眺められる寛ぎの空間。",
              gourmetTip: "「和食入舟・蝦夷前特上にぎり会席」。小樽前浜水揚げの生ウニ、活ボタンエビ、脂の乗った本マグロ、蝦夷アワビなど厳選八貫の極上握りと、季節の茶碗蒸し、道産牛の小鉢。",
              highlights: [
                "小樽駅徒歩5分の本格シティホテル＆サウナ付き大浴場と館内名店で味わう蝦夷前寿司",
                "和食入舟の極上八貫にぎり寿司＆キャプテンズ・バーで愉しむ小樽の大人な夜",
                "小樽運河や堺町通り商店街へ徒歩圏内＆快適なホテルステイと安心のサービス"
              ]
            },
            {
              id: 5,
              name: "小樽朝里川温泉　ホテル武蔵亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/51226/51226.jpg",
              rating: 3.80,
              reviews: 297,
              price: "¥8,010〜",
              access: "ＪＲ小樽築港駅より車で１０分",
              special: "小樽の新鮮な魚介類、朝里の山菜を堪能できる料理自慢の温泉宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F51226%2F51226.html",
              story: "小樽の静かな山あいに位置する朝里川温泉郷に佇み、創業以来の温かいもてなしと料理長自慢の会席料理で長年親しまれる温泉旅館「小樽朝里川温泉 ホテル武蔵亭（むさしてい）」。宿の魅力は何と言っても、加水・加温を最小限に抑えた肌触り滑らかな天然温泉。広々とした大浴場と初冬の雪景色を望む露天風呂には、朝里川の清流のせせらぎが響き、山あいの清浄な空気を吸い込みながら至福の長湯が楽しめます。また、館内には多彩なタイプの客室が揃い、リーズナブルな純和室から檜の内風呂や露天風呂付きの特別室まで旅のスタイルに合わせて選択可能。食事は小樽前浜の海の幸を中心に、北海道の大地が育んだ旬の食材を豪快かつ繊細に仕上げた手作りの和食膳。アットホームで心温まる滞在を求める旅行者に愛され続けています。",
              roomTip: "温泉客室風呂付き和室。いつでも好きな時間に朝里川の名湯を独り占めでき、冬の静寂な山里の景色に癒やされながら気兼ねなく寛げるプライベート空間。",
              gourmetTip: "「初冬の小樽海鮮満喫会席」。料理長が毎朝市場で吟味する刺身盛り合わせ、ジューシーな道産牛の陶板焼き、海鮮寄せ鍋、地元野菜の天ぷらと手作りデザート。",
              highlights: [
                "朝里川温泉の清流沿いに佇む老舗名湯＆初冬の雪見露天風呂と滋味あふれる手作り和会席",
                "リーズナブルに楽しむ天然温泉客室風呂＆小樽市場直送の海鮮刺身盛り合わせ",
                "朝里川温泉スキー場にも至近＆家族旅行や気ままな一人旅にも温かいおもてなし"
              ]
            }
  ];

  const faqList = [
  {
    "q": "冬の小樽の風物詩「小樽ゆき物語・青の運河」の見どころや開催時期・点灯時間は？",
    "a": "「小樽ゆき物語」は、毎年11月上旬から翌年2月中旬頃まで小樽市内各所で開催される冬のロングランイベントです。中でも最大のハイライトである「青の運河」は、小樽運河の浅草橋から中央橋にかけて約1万個の青色LED電球が灯され、石造り倉庫群や初雪を青い光でドラマチックに照らし出します。点灯時間は日没から22時30分頃まで。雪がちらつく夕暮れ時、青いイルミネーションと運河のガス灯が水面に反射する光景は息を呑む美しさです。また、JR小樽駅構内には小樽ガラスで作られた「ガラスアートギャラリー」が展示されるなど、街全体が温かな光とアートに包まれます。"
  },
  {
    "q": "11月・12月の小樽・朝里川温泉の気候や気温、おすすめの服装・足元対策は？",
    "a": "小樽の11月は平均最高気温が7〜8℃、最低気温は0〜2℃程度で、下旬になると初雪が降り始めます。12月に入ると最高気温でも1〜2℃、最低気温は-4〜-6℃前後の本格的な真冬日となり、市内全域が本格的な積雪期に入ります。観光には厚手のダウンジャケットや防寒ウールコート、保温インナー（吸湿発熱素材）、マフラー、手袋、耳まで覆うニット帽が必須です。特に小樽は坂道が多く、石畳や運河沿いの遊歩道は圧雪や凍結で大変滑りやすくなります。靴は必ず靴底に深い溝や滑り止めスパイクが付いた防水防寒スノーブーツを着用し、歩幅を小さくして歩くのが安全です。"
  },
  {
    "q": "11月・12月に小樽で旬を迎える名物グルメやおすすめの海鮮は何ですか？",
    "a": "冬の小樽は日本海の荒波で身が引き締まった極上の海産物が目白押しです。特に11月〜12月は、小樽前浜で水揚げされる「冬シャコ」の第二の旬を迎え、子持ちシャコは濃厚な甘みと旨味が詰まっています。また、小樽港に揚がる脂の乗った「真鱈（白子・タチ）」、冬の「ニシン」、甘みたっぷりの「ボタンエビ」、ぷちぷちと弾ける「自家製イクラ」、濃厚な「紫ウニ」など、寿司屋通りの名店で味わう蝦夷前握りは絶品です。さらに、体が芯から温まる小樽名物「あんかけ焼きそば」や、小樽地ビール、後志（しりべし）地方のクラフトワインも見逃せません。"
  },
  {
    "q": "小樽運河から朝里川温泉へのアクセス方法や所要時間は？",
    "a": "小樽運河やJR小樽駅から朝里川温泉までは、車やタクシーで約15〜20分（約8〜10km）です。公共交通機関を利用する場合は、JR小樽駅前バスターミナルから北海道中央バス「朝里川温泉行き（13系統）」に乗車し、約30分で朝里川温泉街各ホテル前に到着します。また、新千歳空港や札幌方面からJR快速エアポートを利用する場合、JR朝里駅で下車してタクシーで約8分というルートも便利です。冬期は道路が積雪・圧雪アイスバーン状態になりますので、レンタカーを運転される方は十分な車間距離と減速を心がけてください。"
  },
  {
    "q": "小樽市内観光でおすすめの初冬散策ルートや観光スポットは？",
    "a": "初冬の小樽観光は、情緒豊かな「小樽運河」の散策からスタートするのが王道です。昼の石造り倉庫群を眺めた後は、歴史的建造物が軒を連ねる「堺町通り商店街」へ。小樽オルゴール堂、北一硝子、北菓楼、ルタオ本店などの名店を巡り、お土産選びや温かいカフェスイーツを楽しめます。夕暮れ時には再び小樽運河へ戻り、青色LEDが輝く「青の運河」の幻想的なライトアップを鑑賞。その後、寿司屋通りで極上の小樽寿司を堪能し、夜は天狗山ロープウェイで山頂へ登り「北海道三大夜景」に数えられる小樽市街のきらめく夜景を見渡すルートが最高におすすめです。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://croud-travel.pages.dev/winter-hokkaido-otaru-canal-illumination-sushi-asarigawa-stay#article',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://croud-travel.pages.dev/#website',
          'name': 'クラドトラベル',
          'url': 'https://croud-travel.pages.dev/'
        },
        'headline': "【11・12月北海道・小樽の青の運河イルミネーションと朝里川雪見露天】小樽前浜極上寿司＆道産牛会席を味わう冬の運河・温泉名宿5選",
        'description': "11月から12月にかけて、小樽は初雪が舞い散る運河沿いに約1万個の青色LEDが輝く冬の風物詩「小樽ゆき物語・青の運河」が開幕し、1年で最もロマンチックな季節を迎えます。明治・大正期の石造り倉庫群が雪化粧をまとい、ガス灯が揺れるノスタルジックな街並み散策の後は、小樽港で早朝水揚げされた冬の極上ウニ、活ホタテ、蝦夷前寿司、そして小樽奥座敷・朝里川温泉の森林に包まれた雪見露天風呂を満喫。日本海のパノラマ絶景を望む岬のホテルから歴史的風情が漂う運河畔の名宿まで、初冬の小樽を心ゆくまで味わい尽くす厳選名宿5選を徹底解説します。",
        'inLanguage': 'ja',
        'mainEntityOfPage': 'https://croud-travel.pages.dev/winter-hokkaido-otaru-canal-illumination-sushi-asarigawa-stay',
        'datePublished': '2026-09-28T00:00:00+09:00',
        'dateModified': '2026-09-28T00:00:00+09:00',
        'publisher': {
          '@type': 'Organization',
          'name': 'クラドトラベル編集部',
          'url': 'https://croud-travel.pages.dev/'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://croud-travel.pages.dev/winter-hokkaido-otaru-canal-illumination-sushi-asarigawa-stay#faq',
        'mainEntity': faqList.map((f) => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.a
          }
        }))
      }
    ]
  };


  return (
    <article className="min-h-screen bg-gradient-to-b from-slate-50 via-teal-50/20 to-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-teal-900 via-sky-900 to-indigo-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-teal-200">
            <Link href="/" className="hover:underline hover:text-white transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:underline hover:text-white transition">特集一覧</Link>
            <span>/</span>
            <span className="text-white font-medium">小樽・朝里川温泉</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-xs sm:text-sm font-semibold tracking-wide">
            <Snowflake className="w-4 h-4 text-sky-300 animate-pulse" />
            11月・12月 冬の風物詩特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月北海道・小樽】青の運河イルミネーションと朝里川雪見露天
            <span className="block text-teal-300 text-lg sm:text-2xl mt-3 font-normal">
              小樽前浜極上寿司＆道産牛会席を味わう冬の運河・温泉名宿5選
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl">
            11月から12月にかけて、小樽は初雪が舞い散る運河沿いに約1万個の青色LEDが輝く「小樽ゆき物語・青の運河」が開幕し、息を呑むほどロマンチックな初冬の装いに包まれます。明治・大正期の石造り倉庫群が雪化粧をまとい、揺らめくガス灯が水面に映る情緒あふれる散策の後は、小樽港から届く冬の極上ウニ・イクラ・蝦夷前寿司、そして小樽奥座敷・朝里川温泉の清流沿いに湧く美肌の雪見露天風呂を満喫。日本海のパノラマ絶景を望む岬のホテルから歴史的風情が息づく運河畔の名宿まで、厳選5宿の魅力を徹底解説します。
          </p>

          <div className="flex flex-wrap gap-4 pt-4 text-xs sm:text-sm text-teal-100">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <Calendar className="w-4 h-4 text-teal-300" />
              <span>ベストシーズン: 11月上旬〜12月下旬</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>小樽ゆき物語・青の運河点灯</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <Fish className="w-4 h-4 text-sky-300" />
              <span>小樽前浜寿司・冬シャコ・寒魚</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月北海道・小樽】小樽前浜極上寿司！名宿5選","item":"https://croud-travel.pages.dev/winter-hokkaido-otaru-canal-illumination-sushi-asarigawa-stay"}]}) }}
      />
        
        {/* Section 1: Season Context & Highlights */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <Sparkle className="w-6 h-6 text-teal-700" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              初冬の静謐と青い光の回廊｜11月・12月に小樽・朝里川温泉を訪れるべき理由
            </h2>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              かつて北前船の寄港地、そして明治・大正期の北海道経済の中心地として繁栄を極めた港町・小樽。秋の紅葉が過ぎ去り、初雪の便りが届く11月から12月にかけて、この歴史ある街は静寂と温かな光に包まれる特別な季節を迎えます。夏や秋の賑わいが落ち着いた初冬の小樽は、観光客で混み合うことなく、名建築の石造り倉庫群やガス灯の美しい陰影をゆったりと味わえる絶好の時期です。
            </p>
            <p>
              この時期最大の目玉が、冬の風物詩「小樽ゆき物語」のメインイベントである「青の運河」です。小樽運河の水面に約1万個の青色LEDが放つ光が映り込み、雪をかぶった石造り倉庫の重厚な佇まいと相まって、まるで絵画の中に迷い込んだかのような幻想的な夜景が広がります。さらにJR小樽駅のガラスアートギャラリーや、運河プラザに飾られるワイングラスのツリーなど、ガラスの街・小樽ならではの温もりあふれる光の演出が随所に散りばめられています。
            </p>
            <p>
              そして小樽の旅の醍醐味は、港町ならではの圧倒的な冬の美食と、山あいに湧く名湯の組み合わせにあります。日本海の荒波で身を引き締めた冬シャコや真鱈の白子、脂が乗った寒ヒラメ、そして職人が握る極上の蝦夷前寿司。昼間はレトロな街並みやオルゴール堂・ガラス工房を巡り、夕暮れには青の運河の絶景に息を呑み、夜は小樽の奥座敷・朝里川温泉の雪見露天風呂に身を沈めて川のせせらぎに耳を澄ます——これ以上ない贅沢な冬の休日がここにあります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-teal-900 text-sm">
                <Snowflake className="w-4 h-4 text-teal-600" />
                約1万個の青色LED「青の運河」
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                初雪が舞う小樽運河を幻想的な青い光が照らす冬限定の絶景。ガス灯の温もりと雪化粧した石造り倉庫群のコントラストは圧巻。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-teal-900 text-sm">
                <Fish className="w-4 h-4 text-teal-600" />
                小樽前浜の冬シャコ＆蝦夷前寿司
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                初冬に子持ちとなり旨味が凝縮する冬シャコや、生ウニ、活ボタンエビ、真鱈の白子。全国の食通を唸らせる港町屈指の寿司文化。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-teal-900 text-sm">
                <Waves className="w-4 h-4 text-teal-600" />
                朝里川温泉の森林雪見露天風呂
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                小樽市街から車でわずか15分の奥座敷。肌触り柔らかな自家源泉の美肌湯と、雪景色に包まれた日本庭園露天風呂で至福の温もり。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Hotel Cards */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs sm:text-sm font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Selected 5 Luxury Accommodations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              初冬の小樽・朝里川温泉を満喫する厳選名宿5選
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              小樽運河の絶景を望む宿から、朝里川温泉の森に包まれた雪見名湯、日本海を見下ろす岬のパノラマホテルまで、11・12月の旅を格別にする宿を厳選。
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((h) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-200/80 flex flex-col lg:flex-row"
              >
                {/* Hotel Image */}
                <div className="lg:w-2/5 relative min-h-[260px] lg:min-h-full">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 left-4 bg-teal-900/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    第{h.id}選
                  </div>
                </div>

                {/* Hotel Info */}
                <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-amber-500 text-sm font-bold">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span>{h.rating}</span>
                        <span className="text-xs text-slate-400 font-normal">（{h.reviews.toLocaleString()}件の口コミ）</span>
                      </div>
                      <span className="text-sm font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                        {h.price}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                      {h.name}
                    </h3>

                    <p className="text-xs text-slate-500 flex items-start gap-1">
                      <MapPin className="w-3.5 h-3.5 text-teal-700 flex-shrink-0 mt-0.5" />
                      <span>{h.access}</span>
                    </p>

                    <p className="text-sm text-slate-700 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2 text-xs sm:text-sm">
                      <div className="flex items-start gap-2">
                        <Eye className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 font-semibold">おすすめ客室＆眺望: </strong>
                          <span className="text-slate-700">{h.roomTip}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Utensils className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 font-semibold">冬の特選美食: </strong>
                          <span className="text-slate-700">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-slate-900 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        この宿の注目ポイント
                      </span>
                      <ul className="grid grid-cols-1 gap-1 text-xs text-slate-600">
                        {h.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 flex-shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-sm font-bold shadow-sm hover:shadow transition duration-200"
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

        {/* Section 3: 1泊2日のおすすめモデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Map className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                【11月・12月】小樽の青の運河イルミネーションと朝里川雪見露天を巡る1泊2日モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6 text-sm text-slate-700">
            <div className="border-l-2 border-teal-600 pl-4 sm:pl-6 space-y-3">
              <div className="font-bold text-teal-900 text-base flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">1日目</span>
                札幌・新千歳空港から小樽へ・堺町通り散策と青の運河ライトアップ鑑賞
              </div>
              <p className="leading-relaxed text-xs sm:text-sm">
                午前中にJR快速エアポートで小樽駅へ到着。駅前の三角市場で獲れたての活ホタテやイクラが山盛りの海鮮丼をランチで味わった後、情緒あふれる「堺町通り商店街」へ。北一硝子で繊細なガラス器を鑑賞し、ルタオ本店で限定のドゥーブルフロマージュと温かい紅茶でティータイム。16時半頃、夕暮れに合わせて小樽運河へ移動し、日没とともに点灯する「青の運河」の幻想的なイルミネーションを浅草橋から鑑賞します。青い光とガス灯が初雪の運河に揺らめく光景を満喫した後は、朝里川温泉の名旅館へチェックイン。白銀の日本庭園を望む露天風呂で冷えた体を芯から解きほぐし、夕食には小樽前浜直送の極上蝦夷前寿司と道産牛ステーキを地酒とともに堪能します。
              </p>
            </div>
            <div className="border-l-2 border-teal-600 pl-4 sm:pl-6 space-y-3">
              <div className="font-bold text-teal-900 text-base flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">2日目</span>
                静寂の朝風呂・祝津パノラマ展望台と小樽鰊御殿の見学
              </div>
              <p className="leading-relaxed text-xs sm:text-sm">
                朝は小鳥のさえずりと朝里川のせせらぎを聞きながら朝露天風呂を満喫。焼き魚や北海道米の炊きたてご飯が並ぶ和朝食を味わった後、10時にチェックアウト。車またはタクシーで日本海の絶壁に位置する祝津エリアへ向かい、「小樽市鰊御殿」や「日和山灯台」から冬の荒々しくも雄大な日本海パノラマを見渡します。昼は小樽市内へ戻り、地元で愛される熱々の「小樽あんかけ焼きそば」を味わい、小樽オルゴール堂でお土産を選んで帰路へ。冬の小樽の歴史とロマン、美食と名湯を凝縮した大満足のプランです。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Winter Gourmet Guide */}
        <section className="bg-gradient-to-br from-teal-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-700/60">
            <Utensils className="w-6 h-6 text-amber-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              小樽の初冬グルメ完全ガイド！寿司・冬シャコ・小樽ワイン
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-200">
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Fish className="w-4 h-4 text-amber-300" />
                蝦夷前握り寿司＆冬シャコ
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                初冬の小樽港では、秋から初冬にかけて子持ちとなる「冬シャコ」が旬を迎えます。濃厚な卵の食感と上品な甘みは小樽ならではの贅沢。さらに生ウニ、ボタンエビ、脂の乗った寒ブリが並ぶ特上にぎりは格別の味わいです。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-orange-300" />
                熱々あんかけ焼きそば＆真鱈白子鍋
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                昭和30年代から小樽市民に愛されてきたソウルフード「小樽あんかけ焼きそば」。香ばしく焼いた麺の上にたっぷりの海鮮と野菜の熱々餡が絡み、冷えた体を芯から温めます。また冬限定の真鱈の白子（タチ）ポン酢や鍋も必食です。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Wine className="w-4 h-4 text-rose-300" />
                小樽ワイン＆地酒「北の誉」
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                小樽・余市エリアは日本有数のワイン用ブドウの産地。初冬の海鮮フレンチや寿司には、すっきりとした酸味が心地よい白ワイン（ケルナーやミュラー・トゥルガウ）が相性抜群。地酒の熱燗とともに冬の夜長を贅沢に過ごせます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Travel Tips / Climate & Clothing */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <Footprints className="w-6 h-6 text-teal-800" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              11月・12月の小樽観光！気候・服装・散策のアドバイス
            </h2>
          </div>
          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              小樽の11月は晩秋から初冬への移行期で、最高気温は7〜8℃、最低気温は0〜2℃程度まで低下します。11月下旬からは雪が舞い始め、12月に入ると最高気温も1〜2℃前後の真冬日が多くなり、一面の銀世界へと様変わりします。日本海からの寒風が吹き付けるため、体感温度は氷点下を大きく下回ります。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                  <ThermometerSun className="w-4 h-4 text-teal-700" />
                  おすすめの服装・防寒着
                </h4>
                <p className="text-slate-600">
                  風を通さないロング丈のダウンコート、吸湿発熱インナー、厚手のセーターやフリース、マフラー、手袋、耳あて付きニット帽が必須。屋内は暖房が効いているため着脱しやすい重ね着が快適です。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-700" />
                  足元の滑り止め・靴選び
                </h4>
                <p className="text-slate-600">
                  小樽は坂道が多く、運河沿いの石畳や歩道は圧雪や凍結で非常に滑りやすくなります。靴底に深い溝がある防水防寒スノーブーツか、現地や駅で購入できる着脱式スパイクの装着を強く推奨します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Area Access & Transportation */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <Map className="w-6 h-6 text-teal-800" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              小樽・朝里川温泉へのアクセス情報
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-teal-800 block text-sm">新千歳空港から</span>
              <p className="text-slate-600 leading-relaxed">
                JR快速エアポートで約75分、乗り換えなしでJR小樽駅に直通。小樽駅からは運河まで徒歩約8〜10分と非常にスムーズです。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-teal-800 block text-sm">札幌駅から</span>
              <p className="text-slate-600 leading-relaxed">
                JR函館本線（快速エアポート・区間快速）で約35分。石狩湾の冬景色を車窓から眺めながら気軽な日帰り〜宿泊旅が楽しめます。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-teal-800 block text-sm">小樽駅から朝里川温泉へ</span>
              <p className="text-slate-600 leading-relaxed">
                駅前バスターミナルより北海道中央バス「朝里川温泉行き」で約30分。タクシー利用の場合は約15分（約8〜10km）です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <HelpCircle className="w-6 h-6 text-teal-800" />
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の小樽・朝里川温泉旅行 よくある質問
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-teal-700 font-extrabold flex-shrink-0">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Related Links / Mesh */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <Compass className="w-6 h-6 text-teal-800" />
            <h2 className="text-xl font-bold text-slate-900">
              あわせて読みたい！冬の北海道＆名湯・美食特集
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/winter-hokkaido-akanko-onsen-lakeview-frost-flower-hokkaido-beef-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-full inline-block">北海道・阿寒湖</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-teal-800 transition line-clamp-2">
                阿寒湖温泉の初冬フロストフラワーとアイヌ文化・毛蟹宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                奇跡の霜の花とオホーツク海鮮毛蟹・北海道黒毛和牛を堪能。
              </p>
            </Link>
            <Link 
              href="/winter-hokkaido-tokachigawa-onsen-moor-swan-tokachi-beef-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-full inline-block">北海道・十勝川</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-teal-800 transition line-clamp-2">
                十勝川温泉の初冬白鳥飛来と遺産モール温泉・十勝牛宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                北海道遺産植物性モール温泉と白鳥の飛来を望む極上ステイ。
              </p>
            </Link>
            <Link 
              href="/winter-hokkaido-hakodate-yunokawa-onsen-isaribi-seafood-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-full inline-block">北海道・函館湯の川</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-teal-800 transition line-clamp-2">
                湯の川温泉の津軽海峡漁火雪見露天と函館冬海鮮宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                津軽海峡にきらめくイカ釣り漁火と函館の冬の味覚を堪能。
              </p>
            </Link>
            <Link 
              href="/winter-hokkaido-jozankei-onsen-snow-keikoku-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-full inline-block">北海道・定山渓</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-teal-800 transition line-clamp-2">
                定山渓温泉の札幌奥座敷雪見渓谷露天風呂宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                白糸の滝や豊平川渓谷の雪景色と名湯を味わう大人の休日。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-hokkaido-otaru-canal-illumination-sushi-asarigawa-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
