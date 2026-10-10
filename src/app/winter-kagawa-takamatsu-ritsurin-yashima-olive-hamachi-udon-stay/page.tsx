import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Snowflake, Waves, Sun, Flame, Mountain, Building, Coffee, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月香川】屋島寺新春初詣！名宿5選',
  description: '冬の香川・高松は、一歩一景の美を誇る国の特別名勝「栗林公園」が静寂と凛とした風情に包まれる特別な季節。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '高松 ホテル, 栗林公園 冬, オリーブハマチ, オリーブ牛 すき焼き, 屋島寺 初詣, JRホテルクレメント高松, HOTEL花樹海, しっぽくうどん, 11月 12月 1月 香川 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kagawa-takamatsu-ritsurin-yashima-olive-hamachi-udon-stay/"
  },
  openGraph: {
    title: '【11・12・1月香川】屋島寺新春初詣！名宿5選',
    description: '冬の香川・高松は、一歩一景の美を誇る国の特別名勝「栗林公園」が静寂と凛とした風情に包まれる特別な季節。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-kagawa-takamatsu-ritsurin-yashima-olive-hamachi-udon-stay',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=630', width: 1200, height: 630, alt: '特別名勝栗林公園の冬景色とオリーブハマチ・オリーブ牛会席' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月香川】特別名勝「栗林公園」の冬景色＆屋島寺新春初詣！冬限定の奇跡魚「オリーブハマチ」と讃岐うどん・オリーブ牛の名宿5選",
    description: "冬の香川・高松は、一歩一景の美を誇る国の特別名勝「栗林公園」が静寂と凛とした風情に包まれる特別な季節。掬月亭で味わう抹茶、源平合戦の古戦場・屋島山頂からの瀬戸内海初日の出と四国霊場第84番札所「屋島寺」の新春初詣。そして1月中旬までの冬期限定でしか味わえない香川の奇跡のブランド魚「オリーブハマチ（脂がのってさっぱりとした極上の身）。」の刺身やしゃぶしゃぶ、冬の風物詩「讃岐しっぽくうどん」、讃岐牛の最高峰「オリーブ牛」のすき焼き。瀬戸内の多島美を望む温泉展望宿や名門ホテル厳選5選を詳しく紹介します。"
  }
};

export default function KagawaTakamatsuYashimaPage() {
  const hotels = [
            {
              id: 1,
              name: "ＪＲホテルクレメント高松",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14862/14862.jpg",
              rating: 4.49,
              reviews: 4318,
              price: "¥8,000〜",
              access: "ＪＲ高松駅徒歩１分　高松空港よりバスにて４５分　タクシーにて３０分　サンポートホール隣接　レクザムホール徒歩８分",
              special: "高松駅徒歩1分　瀬戸内海や高松市内を一望出来る地上２０階建てのシティホテル。ＷｉＦｉ＆有線ＬＡＮ完備",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14862%2F14862.html",
              story: "JR高松駅および高松港フェリー乗り場に隣接し、瀬戸内海の多島美と屋島の稜線を間近に望む四国屈指のランドマークホテル「ＪＲホテルクレメント高松」。冬の澄み渡る朝、高松港から出航するフェリーや穏やかな海原を眺めながら過ごす時間は、旅情をこの上なくかき立ててくれます。栗林公園へは車で約10分、屋島へも車で約20分と冬の観光の拠点として抜群のロケーション。館内には本格的な日本料理、フランス料理、中国料理の名店が揃い、1月中旬までしか食べられない幻の冬魚「オリーブハマチ」の繊細なお造りや、特選「オリーブ牛」の鉄板焼きなど、香川の冬の恵みを極上のホテルサービスとともに堪能できます。",
              roomTip: "海側高層階プレミアムツイン。窓いっぱいに広がる冬の瀬戸内海と女木島・男木島の島影、朝日に輝く波光を望む贅沢なパノラマ。",
              gourmetTip: "「オリーブ牛＆オリーブハマチ贅沢会席」。脂のキレと旨みが際立つオリーブハマチの薄造りと、オリーブ牛フィレ肉の極上ステーキ。",
              highlights: [
                "高松港・JR高松駅直結の四国屈指のランドマーク・瀬戸内海多島美パノラマ",
                "1月中旬限定の旬魚オリーブハマチ薄造り＆極上オリーブ牛ステーキのホテルディナー",
                "栗林公園車10分・屋島車20分・小豆島や直島へのフェリー観光にも最適"
              ]
            },
            {
              id: 2,
              name: "ＪＲクレメントイン高松",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/167467/167467.jpg",
              rating: 4.35,
              reviews: 2000,
              price: "¥7,150〜",
              access: "ＪＲホテルクレメント高松隣／高松駅、高松築港駅徒歩１分／高松港徒歩３分／高松西IC、高松中央ICより車25分",
              special: "２０１８年１０月開業。ＪＲホテルクレメント高松隣接。高松駅徒歩１分。最上階に展望大浴場を完備。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167467%2F167467.html",
              story: "JR高松駅前広場に面し、2018年開業の洗練されたモダンな空間を誇る「ＪＲクレメントイン高松」。最上階の9階には宿泊者専用の展望大浴場が完備されており、冬の高松散策や屋島寺への初詣で冷えた身体を手足を伸ばして芯からじんわりと温めることができます。全室に加湿機能付き空気清浄機やシモンズ社製ベッドを標準装備し、冬の快眠を約束。1階には本場の讃岐うどん専門店「さぬき麺業」が併設されており、朝から熱々の出汁が香る打ち立て・茹でたての讃岐うどんを気軽に楽しめるのも、うどん県ならではの嬉しい魅力です。",
              roomTip: "コーナーツインルーム。二面採光の明るい窓から高松の街並みと港を望み、広めのバスタブと清潔感あふれる空間で快適ステイ。",
              gourmetTip: "「朝うどんセット＆讃岐の朝食」。併設店で味わう熱々のかけうどんや冬限定のしっぽくうどん、出汁香るおでん。",
              highlights: [
                "高松駅前・最上階9階に展望大浴場完備・1階に讃岐うどん店「さぬき麺業」併設",
                "シモンズ製ベッド完備・朝から熱々打ち立ての讃岐うどんを楽しめる贅沢",
                "清潔感あふれる最新設備・冬の観光で冷えた身体を展望大浴場で芯から癒やす"
              ]
            },
            {
              id: 3,
              name: "ロイヤルパークホテル高松",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9486/9486.jpg",
              rating: 4.37,
              reviews: 1958,
              price: "¥8,600〜",
              access: "ＪＲ高松駅より車で７分、徒歩３０分/高松空港よりＪＲ高松駅行リムジンバス瓦町下車　徒歩５分",
              special: "四国初のオールクラブフロアが叶える、ワンランク上の寛ぎ空間。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9486%2F9486.html",
              story: "高松随一の繁華街・瓦町駅近くに位置し、全室が上質なクラブラウンジアクセス付きのラグジュアリーホテル「ロイヤルパークホテル高松」。アールデコ調のエレガントで気品に満ちた館内は、大人の冬の贅沢旅にふさわしい静謐な隠れ家です。滞在中は宿泊者専用ライブラリーラウンジで、ティータイムのスイーツやカクテルタイムのアルコール・オードブルをすべて無料で優雅に楽しめます。ディナーでは提携する名店や館内で、厳選された讃岐牛（オリーブ牛）のすき焼きや瀬戸内冬魚を堪能。栗林公園へも徒歩約15分と、早朝の静かな庭園散策に絶好の立地です。",
              roomTip: "エグゼクティブフロア・ツイン。格調高いインテリアと広々としたソファスペース、極上のバスルームを備えた極上の安らぎ空間。",
              gourmetTip: "「ラウンジサービス＆特選オリーブ牛ディナー。」。夕暮れ時のワインやカクテルと、柔らかなオリーブ牛サーロインの芳醇な味わい。",
              highlights: [
                "瓦町駅徒歩5分・全室クラブラウンジアクセス付きの上質アールデコホテル",
                "無料スイーツやカクテルタイム・洗練された空間で味わう讃岐牛すき焼き",
                "栗林公園まで徒歩15分・早朝の凛とした日本庭園散策に最適なロケーション"
              ]
            },
            {
              id: 4,
              name: "高松国際ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13730/13730.jpg",
              rating: 4.38,
              reviews: 3296,
              price: "¥4,100〜",
              access: "JR高松駅より車で約15分　高松道高松中央IC、サンメッセ香川より車で約10分　市内バス(高松国際ホテル前)下車徒歩1分",
              special: "【車で来るならココ】平面駐車場無料・大型可【2019年リニューアル】全室シモンズベッド、空気清浄機",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13730%2F13730.html",
              story: "昭和39年創業、高松の迎賓館として国内外のVIPを迎えてきた歴史と風格を誇る名門「高松国際ホテル」。広大な敷地に平置き無料駐車場を完備し、マイカーやレンタカーで屋島や栗林公園、讃岐うどんの名店を巡る冬のドライブ旅行に最適です。クラシックで落ち着きのある客室はゆったりとした広さを確保。ホテル自慢のグリルレストランでは、長年培われた伝統の技で焼き上げる特選オリーブ牛のグリルや、冬の瀬戸内海の寒真鯛、旬の魚介を使った欧風コースが楽しめ、老舗ホテルならではの温かく端正なおもてなしが心を満たします。",
              roomTip: "本館デラックスツイン。落ち着いた木目調のインテリアと広めのリビングスペース。静かな環境で冬の夜をゆったり過ごせます。",
              gourmetTip: "「伝統のオリーブ牛グリルディナー」。香川県特産のオリーブ牛の旨みを最大限に引き出した香ばしいステーキと、地元冬野菜の温菜。",
              highlights: [
                "無料平面大駐車場完備・伝統のグリル料理と広々とした客室で安心ステイ",
                "老舗名門ホテルの本格オリーブ牛ステーキコース＆讃岐ドライブの拠点",
                "郊外のうどん名店巡りや屋島寺新春初詣に最適なレンタカー旅行の味方"
              ]
            },
            {
              id: 5,
              name: "夕凪の湯　ＨＯＴＥＬ花樹海",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/41416/41416.jpg",
              rating: 4.55,
              reviews: 1052,
              price: "¥13,750〜",
              access: "ＪＲ予讃線　高松駅から車で１０分／高松自動車道　高松西ＩＣ及び高松檀紙ICから一般道を通り約１０分",
              special: "市内や瀬戸内の多島美が一望できるリゾート型温泉旅館。創業70年の老舗の味と温泉でおくつろぎ下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41416%2F41416.html",
              story: "高松市街を見下ろす峰山緑地の高台に佇み、全客室やパノラマ露天風呂から讃岐平野の夜景と瀬戸内海の多島美を一望できる絶景温泉宿「夕凪の湯 ＨＯＴＥＬ花樹海」。ph値の高い自家源泉「夕凪の湯」は、とろりとした湯ざわりが特徴の本格的な美肌温泉で、冬の澄んだ夜空に輝く満天の星と宝石のような街の灯りを眺めながらの雪見・冬見露天風呂は感動の極みです。夕食には冬の香川が誇る二大ブランド「オリーブハマチ」と「オリーブ牛」を主役に据えた贅沢な創作会席が供され、五感で味わう至福の冬の温泉旅行を叶えてくれます。",
              roomTip: "展望風呂付き和洋室。大きな窓や客室露天から高松市街の煌めく夜景と瀬戸内海の朝焼けを独占できる特別なプライベート空間。",
              gourmetTip: "「オリーブハマチ＆オリーブ牛のWメイン会席。」。脂の乗った旬のオリーブハマチしゃぶしゃぶと、口の中でとろけるオリーブ牛陶板焼き。",
              highlights: [
                "峰山の高台から高松夜景と瀬戸内海を一望・とろとろ美肌の天然温泉露天風呂",
                "オリーブハマチしゃぶしゃぶとオリーブ牛陶板焼きの豪華Wメイン会席",
                "全室から宝石のような街の灯りを展望・冬のロマンチックな絶景温泉宿"
              ]
            }
  ];

  const faqList = [
  {
    "q": "香川の冬限定ブランド魚「オリーブハマチ」とは？旬の時期や特徴は？",
    "a": "「オリーブハマチ」は、香川県特産のオリーブの葉の粉末を加えた特別な餌を与えて育てたプレミアムブランド魚です。オリーブの葉に含まれる抗酸化成分（オレウロペイン）の働きにより、身の酸化や変色が抑えられ、脂がのっているにもかかわらず特有の生臭さが全くなく、驚くほどさっぱりとした上品な甘みと適度な歯ごたえが生まれます。水揚げ・出荷期間は毎年9月中旬から【1月中旬まで】のわずか4ヶ月間限定！12月〜1月は寒さで身が最も引き締まり脂が最高の状態に達するため、冬に香川を訪れたら絶対に味わうべき幻の至宝です。"
  },
  {
    "q": "国の特別名勝「栗林公園」の冬の見どころや雪景色、おすすめの散策時間は？",
    "a": "栗林公園は、ミシュラン・グリーンガイド・ジャポンで「わざわざ訪れる価値がある」最高ランクの三つ星を獲得した名園です。冬は松の緑と白雪の対比、雪吊りの施された優美な景観が静寂の中で際立ちます。南湖に架かる偃月橋（えんげつきょう）や、富士山に見立てた築山「飛来峰（ひらいほう）」からの眺めは一歩一景の絶景。散策途中に歴代藩主が大名茶を楽しんだ「掬月亭（きくげつてい）」に立ち寄り、冬の庭園を眺めながらいただく温かいお抹茶と季節の和菓子は格別の風雅です。早朝開園（冬期は7時開園）直後の朝霧が立ち込める時間帯が最も神秘的です。"
  },
  {
    "q": "源平合戦の古戦場「屋島」の新春初詣と初日の出、アクセス方法は？",
    "a": "高松市街の東に位置する屋島（やしま）は、平家物語の名場面「那須与一の扇の的」で有名な屋島合戦の舞台です。山頂の「獅子の霊巌（ししのれいがん）」展望台からは、瀬戸内海の多島美と大パノラマが一望でき、冬は空気が澄んで元日の「初日の出」スポットとして多くの人が集まります。また、山頂にある四国八十八箇所第84番札所「屋島寺」は鑑真和上が開創した名刹で、朱塗りの本堂（国指定重文）や蓑山大明神（日本三名狸の太三郎狸）があり、家内安全や縁結びの新春初詣で賑わいます。JR高松駅から車で約20分、または琴電屋島駅からシャトルバスでアクセス可能です。"
  },
  {
    "q": "冬の香川で食べるべき「しっぽくうどん」と「オリーブ牛」の魅力とは？",
    "a": "冬の讃岐うどんの代表格が「しっぽくうどん」です。秋から冬に収穫される大根、人参、里芋、ごぼうなどの根菜や油揚げ、鶏肉を、いりこ出汁と醤油ベースの汁でことこと煮込み、茹でたてのうどんに豪快にかけた香川の伝統郷土料理。野菜の甘みと滋味が熱々の出汁に溶け込み、冷えた身体を芯から温めてくれます。また、オリーブオイル搾油後のオリーブ果実を飼料に育った「オリーブ牛」は、オレイン酸と旨み成分カルノシンが豊富で、口溶けの良さとコクのある甘みが特徴。冬は熱々のすき焼きや陶板焼きで食べるのが最高です。"
  },
  {
    "q": "高松の冬の気候とおすすめの服装、小豆島や直島へのフェリー観光の注意点は？",
    "a": "高松は瀬戸内海特有の温暖少雨な気候のため、降雪や積雪は非常に稀です。冬場の平均気温は6℃〜10℃前後で晴天の日が多く過ごしやすいですが、瀬戸内海からの海風が吹くと体感温度が下がります。特に栗林公園の早朝散策や屋島山頂の展望台、フェリーのデッキでは風を通さないダウンジャケットやマフラー、手袋が必要です。小豆島や直島へのフェリーは高松港から年中運航していますが、冬場は強風による海上の波で揺れることがあるため、船酔いが心配な方は酔い止めを準備しておくと安心です。"
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
          { '@type': 'ListItem', 'position': 3, 'name': '栗林公園冬景色＆オリーブハマチ名宿', 'item': 'https://croud-travel.pages.dev/winter-kagawa-takamatsu-ritsurin-yashima-olive-hamachi-udon-stay' }
        ]
      },
      {
        '@type': 'TouristDestination',
        'name': '特別名勝栗林公園・屋島・高松市',
        'description': "冬の香川・高松は、一歩一景の美を誇る国の特別名勝「栗林公園」が静寂と凛とした風情に包まれる特別な季節。掬月亭で味わう抹茶、源平合戦の古戦場・屋島山頂からの瀬戸内海初日の出と四国霊場第84番札所「屋島寺」の新春初詣。そして1月中旬までの冬期限定でしか味わえない香川の奇跡のブランド魚「オリーブハマチ（脂がのってさっぱりとした極上の身）。」の刺身やしゃぶしゃぶ、冬の風物詩「讃岐しっぽくうどん」、讃岐牛の最高峰「オリーブ牛」のすき焼き。瀬戸内の多島美を望む温泉展望宿や名門ホテル厳選5選を詳しく紹介します。",
        'touristType': ['特別名勝', '日本庭園', '新春初詣', '冬限定美食', '瀬戸内海絶景']
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': "香川の冬限定ブランド魚「オリーブハマチ」とは？旬の時期や特徴は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "「オリーブハマチ」は、香川県特産のオリーブの葉の粉末を加えた特別な餌を与えて育てたプレミアムブランド魚です。オリーブの葉に含まれる抗酸化成分（オレウロペイン）の働きにより、身の酸化や変色が抑えられ、脂がのっているにもかかわらず特有の生臭さが全くなく、驚くほどさっぱりとした上品な甘みと適度な歯ごたえが生まれます。水揚げ・出荷期間は毎年9月中旬から【1月中旬まで】のわずか4ヶ月間限定！12月〜1月は寒さで身が最も引き締まり脂が最高の状態に達するため、冬に香川を訪れたら絶対に味わうべき幻の至宝です。"
            }
          },
          {
            '@type': 'Question',
            'name': "国の特別名勝「栗林公園」の冬の見どころや雪景色、おすすめの散策時間は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "栗林公園は、ミシュラン・グリーンガイド・ジャポンで「わざわざ訪れる価値がある」最高ランクの三つ星を獲得した名園です。冬は松の緑と白雪の対比、雪吊りの施された優美な景観が静寂の中で際立ちます。南湖に架かる偃月橋（えんげつきょう）や、富士山に見立てた築山「飛来峰（ひらいほう）」からの眺めは一歩一景の絶景。散策途中に歴代藩主が大名茶を楽しんだ「掬月亭（きくげつてい）」に立ち寄り、冬の庭園を眺めながらいただく温かいお抹茶と季節の和菓子は格別の風雅です。早朝開園（冬期は7時開園）直後の朝霧が立ち込める時間帯が最も神秘的です。"
            }
          },
          {
            '@type': 'Question',
            'name': "源平合戦の古戦場「屋島」の新春初詣と初日の出、アクセス方法は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "高松市街の東に位置する屋島（やしま）は、平家物語の名場面「那須与一の扇の的」で有名な屋島合戦の舞台です。山頂の「獅子の霊巌（ししのれいがん）」展望台からは、瀬戸内海の多島美と大パノラマが一望でき、冬は空気が澄んで元日の「初日の出」スポットとして多くの人が集まります。また、山頂にある四国八十八箇所第84番札所「屋島寺」は鑑真和上が開創した名刹で、朱塗りの本堂（国指定重文）や蓑山大明神（日本三名狸の太三郎狸）があり、家内安全や縁結びの新春初詣で賑わいます。JR高松駅から車で約20分、または琴電屋島駅からシャトルバスでアクセス可能です。"
            }
          },
          {
            '@type': 'Question',
            'name': "冬の香川で食べるべき「しっぽくうどん」と「オリーブ牛」の魅力とは？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "冬の讃岐うどんの代表格が「しっぽくうどん」です。秋から冬に収穫される大根、人参、里芋、ごぼうなどの根菜や油揚げ、鶏肉を、いりこ出汁と醤油ベースの汁でことこと煮込み、茹でたてのうどんに豪快にかけた香川の伝統郷土料理。野菜の甘みと滋味が熱々の出汁に溶け込み、冷えた身体を芯から温めてくれます。また、オリーブオイル搾油後のオリーブ果実を飼料に育った「オリーブ牛」は、オレイン酸と旨み成分カルノシンが豊富で、口溶けの良さとコクのある甘みが特徴。冬は熱々のすき焼きや陶板焼きで食べるのが最高です。"
            }
          },
          {
            '@type': 'Question',
            'name': "高松の冬の気候とおすすめの服装、小豆島や直島へのフェリー観光の注意点は？",
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': "高松は瀬戸内海特有の温暖少雨な気候のため、降雪や積雪は非常に稀です。冬場の平均気温は6℃〜10℃前後で晴天の日が多く過ごしやすいですが、瀬戸内海からの海風が吹くと体感温度が下がります。特に栗林公園の早朝散策や屋島山頂の展望台、フェリーのデッキでは風を通さないダウンジャケットやマフラー、手袋が必要です。小豆島や直島へのフェリーは高松港から年中運航していますが、冬場は強風による海上の波で揺れることがあるため、船酔いが心配な方は酔い止めを準備しておくと安心です。"
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
      <header className="relative bg-gradient-to-br from-teal-950 via-slate-900 to-amber-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-xs sm:text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-teal-300" />
            11月・12月・1月冬の特選旅｜香川・高松＆屋島・庵治
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-6">
            特別名勝「栗林公園」の冬景色＆屋島寺新春初詣！<br className="hidden sm:inline" />
            冬限定の奇跡魚「オリーブハマチ」と讃岐うどん・オリーブ牛の名宿5選
          </h1>
          <p className="text-base sm:text-lg text-teal-100/90 leading-relaxed max-w-4xl mb-8">
            一歩一景の美意識が息づく国の特別名勝「栗林公園」が静けさに包まれる冬。南湖に映る松の翠と雪吊りの風情、歴代藩主が愛した掬月亭での一服。源平合戦の舞台・屋島山頂からの瀬戸内海初日の出と四国霊場・屋島寺での新春開運参拝。そして1月中旬までの冬限定でしか味わえない奇跡の極上魚「オリーブハマチ」、心まで温まる具だくさんの讃岐しっぽくうどん、最高峰の「オリーブ牛」すき焼き。瀬戸内の穏やかな陽光と美食に癒やされる厳選宿をご案内します。
          </p>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-teal-200">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-teal-400" /> 香川県高松市・栗林公園・屋島</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-teal-400" /> 旬の時期：11月中旬〜1月中旬</span>
            <span className="flex items-center gap-1.5"><Waves className="w-4 h-4 text-teal-400" /> 栗林公園冬景色＆オリーブハマチ</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-teal-600 pl-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Destination Analysis</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              なぜ冬の高松・屋島が格別なのか？大名庭園の凛とした静寂と1月中旬までの幻の旬魚
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              ミシュラン三ツ星の庭園美と、香川県が世界に誇る冬限定オリーブブランドの共宴
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              四国の玄関口として栄える香川県高松市。穏やかな瀬戸内海に面し、温暖少雨な気候に恵まれたこの街は、冬を迎えると大気中の水蒸気が抜け、瀬戸内海の多島美と澄み切った青空が一際鮮やかに輝く季節を迎えます。全国的な寒波が押し寄せる厳冬期でも晴天率が高く、静けさに包まれた文化財巡りや美食の旅をゆったりと楽しむことができます。
            </p>
            <p>
              高松の美の象徴が、国の特別名勝であり、ミシュラン・グリーンガイド・ジャポンで最高評価の三ツ星に選ばれた「栗林公園（りつりんこうえん）」です。紫雲山を借景に6つの池と13の築山を巧みに配した約75万平方メートルの回遊式大名庭園は、「一歩一景」と称される変化に富んだ景観を誇ります。冬の凛とした冷気の中、歴代の高松藩主が手入れを重ねた約1,400本の松の緑と、雪吊りの施された優美な佇まいが南湖の水面に映り込む光景は息をのむ美しさ。大名茶室「掬月亭（きくげつてい）」の座敷から冬の庭園を眺めつつ、温かい抹茶と上生菓子をいただく時間は、喧騒から離れた究極の贅沢です。
            </p>
            <p>
              そして新春の幕開けには、源平合戦の古戦場として名高い「屋島（やしま）」へ。平坦な溶岩台地が広がる屋島山頂の展望台「獅子の霊巌（ししのれいがん）」からは、女木島や男木島など瀬戸内の島々を見下ろすパノラマが広がり、元日には神々しい「初日の出」を拝む絶好のスポットとなります。山頂に鎮座する四国霊場第84番札所「屋島寺」は鑑真和上ゆかりの名刹。朱塗りの重文本堂や夫婦円満・縁結びの蓑山大明神への新春参拝は、新年の運気を大きく呼び込んでくれます。
            </p>
            <p>
              そして何より、冬の高松を訪れる最大の食の動機となるのが、9月中旬から【1月中旬まで】のわずか4ヶ月間しか水揚げされない香川の奇跡のブランド魚「オリーブハマチ」です。香川県特産のオリーブ葉粉末を餌に混ぜて育てることで、身の酸化が劇的に抑えられ、ハマチ特有の脂っぽさや生臭さが全くない、さっぱりとして甘みのある極上の肉質に仕上がります。特に12月〜1月は寒さで身が極限まで引き締まる黄金期。薄造りやお刺身はもちろん、出汁にさっとくぐらせる「オリーブハマチしゃぶしゃぶ」は至福の逸品です。
            </p>
            <p>
              さらに、大根や里芋などの冬根菜をたっぷり煮込んだ熱々の「讃岐しっぽくうどん」、オリーブ果実の搾り粕を食べて育つ最高級黒毛和牛「オリーブ牛」のすき焼きなど、香川の冬は心も身体も芯から温めてくれる滋味あふれる名物に満ちています。
            </p>
          </div>

          {/* 3 Pillar Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-teal-50/60 border border-teal-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">特別名勝栗林公園の静寂美</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ミシュラン三ツ星の回遊式大名庭園。冬の南湖に映る雪吊りの松と掬月亭で味わう風雅な抹茶と和菓子。
              </p>
            </div>

            <div className="bg-teal-50/60 border border-teal-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">屋島山頂初日の出＆屋島寺初詣</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                源平の古戦場・屋島からの瀬戸内海多島美パノラマ。四国霊場第84番屋島寺での新春開運・縁結び祈願。
              </p>
            </div>

            <div className="bg-teal-50/60 border border-teal-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">1月中旬限定オリーブハマチ＆牛</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                冬限定の奇跡魚オリーブハマチの刺身・しゃぶしゃぶと、熱々しっぽくうどん・極上オリーブ牛会席。
              </p>
            </div>
          </div>
        </section>

        {/* Month Guide */}
        <section className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
          <div className="border-l-4 border-teal-400 pl-4">
            <span className="text-teal-300 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Seasonal Calendar</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              11月・12月・1月の見どころカレンダー＆気候ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-md">11月（初冬）</span>
              <h3 className="font-bold text-white text-base">栗林公園秋のライトアップとオリーブ収穫</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                11月下旬の紅葉ライトアップで庭園が光の回廊に。オリーブハマチの出荷が本格化し、脂が乗り始める最高のスタート。日中は過ごしやすく観光に最適な気候です。
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-sky-500/20 text-sky-300 text-xs font-bold rounded-md">12月（仲冬）</span>
              <h3 className="font-bold text-white text-base">澄み渡る瀬戸内海の青と熱々しっぽくうどん</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                年間で最も空気が澄み、屋島や高松港から本州の岡山までくっきり見渡せます。冬風が冷たい日は、根菜を煮込んだ熱々しっぽくうどんで温まるのが讃岐流の粋。
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-3">
              <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-bold rounded-md">1月（厳冬）</span>
              <h3 className="font-bold text-white text-base">屋島初日の出とオリーブハマチの食べ納め</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                屋島寺や田村神社での新春初詣。出荷が1月中旬で終了するオリーブハマチの最終最盛期。極限まで身が引き締まった至極の味を堪能できるラストチャンスです。
              </p>
            </div>
          </div>
        </section>

        {/* Spot Highlights Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8">
          <div className="border-l-4 border-teal-600 pl-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Must-Visit Winter Spots</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の高松・屋島で訪れるべき三大名所
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Sun className="w-5 h-5 text-teal-600" /> 特別名勝 栗林公園
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ミシュラン三ツ星の特別名勝。偃月橋や飛来峰からの冬パノラマ、掬月亭の抹茶体験。冬の早朝開園直後は観光客も少なく、静寂の庭園美を独占できます。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：JR高松駅よりバス約10分、または琴電栗林公園駅より徒歩約10分。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Mountain className="w-5 h-5 text-indigo-600" /> 屋島山頂・屋島寺
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                台状の溶岩台地。展望台「獅子の霊巌」からの瀬戸内海初日の出と夜景、四国霊場第84番屋島寺の新春参拝。かわらけ投げで厄除け祈願も楽しめます。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：高松駅より車約20分。琴電屋島駅からシャトルバス運行。
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Waves className="w-5 h-5 text-sky-600" /> サンポート高松＆高松港
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                高松港に面したウォーターフロント。赤灯台（せとしるべ）へと続く防波堤遊歩道からの夕日と冬の潮風、小豆島や直島へのフェリーが行き交う旅情あふれる港町風景。
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                アクセス：JR高松駅下車すぐ。遊歩道散策が快適。
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-l-4 border-teal-600 pl-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              高松・屋島の冬旅を彩る厳選宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              瀬戸内海パノラマ・展望温泉・オリーブハマチ＆牛ディナーの名宿
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
                      <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                      厳選宿 #{h.id}
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
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
                            <Sun className="w-3.5 h-3.5 text-teal-600" /> 客室・眺望の魅力
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
                        <span className="text-xl sm:text-2xl font-extrabold text-teal-900">{h.price}</span>
                      </div>

                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-indigo-600 text-white font-bold text-sm shadow hover:from-teal-700 hover:to-indigo-700 transition-all"
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
          <div className="border-l-4 border-teal-600 pl-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の高松を満喫する1泊2日モデルコース
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              讃岐うどん、栗林公園散策、屋島初日の出、オリーブハマチを堪能する充実旅
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-teal-600 text-white text-xs rounded-md font-bold">1日目</span>
                讃岐うどん巡りと特別名勝栗林公園の冬景色
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed">
                <li><strong className="text-slate-900">11:00 JR高松駅に到着</strong>：駅周辺の人気讃岐うどん店へ直行。冬限定の具だくさん「しっぽくうどん」で身体を温める。</li>
                <li><strong className="text-slate-900">13:00 国の特別名勝「栗林公園」へ</strong>：南湖に映る雪吊りの松、飛来峰からのパノラマ、偃月橋を散策。</li>
                <li><strong className="text-slate-900">14:30 掬月亭でお抹茶一服</strong>：大名茶室から冬の庭園を眺めながら温かい抹茶と季節の和菓子を味わう。</li>
                <li><strong className="text-slate-900">16:30 サンポート高松の夕日</strong>：高松港のウォーターフロントを散策し、赤灯台と瀬戸内の茜色の夕暮れを鑑賞。</li>
                <li><strong className="text-slate-900">18:00 ホテルチェックイン＆オリーブハマチディナー</strong>：1月中旬までの冬限定オリーブハマチ薄造りやオリーブ牛会席を満喫。</li>
              </ol>
            </div>

            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-indigo-600 text-white text-xs rounded-md font-bold">2日目</span>
                屋島山頂初日の出・屋島寺初詣と港町ドライブ
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed">
                <li><strong className="text-slate-900">06:45 屋島「獅子の霊巌」展望台へ</strong>：瀬戸内海を見下ろす山頂から神々しい日の出と澄んだ多島美を鑑賞。</li>
                <li><strong className="text-slate-900">08:00 四国霊場第84番「屋島寺」新春参拝</strong>：朱塗りの本堂と蓑山大明神を参拝し、新年開運と家内安全を祈願。</li>
                <li><strong className="text-slate-900">09:30 ホテルで朝食</strong>：名物の朝うどんや讃岐の朝食ビュッフェでエネルギー補給。</li>
                <li><strong className="text-slate-900">11:30 北浜アリーでおしゃれ雑貨散策</strong>：港の古い倉庫街をリノベーションしたカフェや雑貨店でショッピング。</li>
                <li><strong className="text-slate-900">14:30 高松駅よりマリンライナーまたは新幹線で帰路へ</strong>：瀬戸大橋を渡って岡山方面へ。</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Access and Climate Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-teal-600 pl-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Access & Climate Tips</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              高松・屋島へのアクセスと冬の服装ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Compass className="w-5 h-5 text-teal-600" /> 電車・新幹線・飛行機
              </h3>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li><strong className="text-slate-900">新幹線・快速マリンライナー</strong>：山陽新幹線「岡山駅」より快速マリンライナーで瀬戸大橋を渡り高松駅まで約55分。</li>
                <li><strong className="text-slate-900">高松空港から</strong>：羽田・成田等から就航。空港リムジンバスで高松駅まで約40分。</li>
                <li><strong className="text-slate-900">島へのアクセス</strong>：高松港フェリーターミナルから小豆島、直島、豊島行きの船が年中運航。</li>
              </ul>
            </div>

            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ThermometerSun className="w-5 h-5 text-indigo-600" /> 温暖な気候と海風対策
              </h3>
              <ul className="space-y-2 list-disc list-inside leading-relaxed">
                <li><strong className="text-slate-900">冬の気候</strong>：瀬戸内海気候で晴天率が高く、積雪はほとんどありません。平均気温は7〜10℃前後で過ごしやすいです。</li>
                <li><strong className="text-slate-900">防寒のポイント</strong>：屋島山頂や高松港の沿岸部では海風が吹くと体感温度が下がります。マフラーや防風性のあるジャケットを持参すると快適です。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-teal-600 pl-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-2xl font-bold text-slate-900">
              冬の高松・屋島旅行 よくある質問（FAQ）
            </h2>
          </div>
          <div className="space-y-6">
            {faqList.map((faq, index) => (
              <div key={index} className="pb-6 border-b border-slate-100 last:border-b-0 last:pb-0">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <span className="text-teal-600 font-extrabold">Q.</span>
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
            <Compass className="w-5 h-5 text-teal-600" />
            あわせて読みたい！四国の冬特集記事
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/winter-kagawa-kotohira-onsen-konpira-olive-beef-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-teal-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-teal-600 block"
            >
              【こんぴら温泉】金刀比羅宮新春初詣＆名物讃岐うどんとオリーブ牛名宿
            </Link>
            <Link
              href="/winter-kagawa-shodoshima-onsen-kankakei-olive-beef-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-teal-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-teal-600 block"
            >
              【小豆島温泉】寒霞渓冬景色＆オリーブ牛会席とオーシャンビュー名宿
            </Link>
            <Link
              href="/winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-teal-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-teal-600 block"
            >
              【道後温泉本館】日本最古の名湯＆冬の瀬戸内寒鯛めし・伊予牛名宿
            </Link>
            <Link
              href="/winter-tokushima-naruto-onsen-uzushio-naruto-tai-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-teal-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-teal-600 block"
            >
              【鳴門温泉】鳴門海峡の冬絶景露天風呂＆極上鳴門鯛づくし名宿
            </Link>
            <Link
              href="/winter-tokushima-iya-valley-kazurabashi-snow-onsen-stay"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-teal-300 hover:shadow-xs transition-all text-sm font-medium text-slate-800 hover:text-teal-600 block"
            >
              【祖谷渓温泉】秘境かずら橋雪景色＆祖谷そばと阿波牛囲炉裏名宿
            </Link>
            <Link
              href="/features"
              className="p-4 bg-white rounded-2xl border border-slate-200/80 hover:border-teal-300 hover:shadow-xs transition-all text-sm font-bold text-teal-700 block text-center flex items-center justify-center gap-1"
            >
              <span>全国の冬旅特集一覧を見る</span>
              <Compass className="w-4 h-4" />
            </Link>
          
      <HubRelatedPosts currentSlug="winter-kagawa-takamatsu-ritsurin-yashima-olive-hamachi-udon-stay" />
</div>
        </section>
      </main>
    </article>
  );
}
