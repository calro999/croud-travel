import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Landmark, Anchor, ShieldCheck, Footprints, Coffee, Camera, Sun, Ship
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月広島】呉＆江田島・音戸！最旬の広島かき小屋グルメと大和ミュージアム・海上自衛隊艦船ライトアップ冬イルミ・瀬戸内海一望名宿5選",
  description: "冬の瀬戸内海は空気が澄み渡り、歴史ある港町・呉と多島美あふれる江田島が最も旅情を誘う季節です。11月から1月にかけて最盛期を迎える「広島かき」は身が引き締まり濃厚そのもの。江田島の海辺に並ぶ牡蠣小屋での豪快な焼き牡蠣や土手鍋、大和ミュージアム（呉市海事歴史科学館）やてつのくじら館、アレイからすこじまで間近に望む海上自衛隊の潜水艦・護衛艦の冬の夕暮れと幻想的な艦船ライトアップ。平清盛伝説の音戸の瀬戸、名物海軍カレーと広島牛。港町の情緒と極上温泉を味わう厳選名宿5選を徹底解説します。",
  keywords: '呉 ホテル, 江田島 ホテル, 広島 牡蠣小屋, 大和ミュージアム, てつのくじら館, アレイからすこじま 艦船ライトアップ, 呉阪急ホテル, クレイトンベイホテル, 江田島荘, 11月 12月 1月 広島 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-hiroshima-kure-edajima-oyster-yamato-port-stay/"
  },
  openGraph: {
    title: "【11・12・1月広島】呉＆江田島・音戸！最旬の広島かき小屋グルメと大和ミュージアム・海上自衛隊艦船ライトアップ冬イルミ・瀬戸内海一望名宿5選",
    description: "冬の瀬戸内海は空気が澄み渡り、歴史ある港町・呉と多島美あふれる江田島が最も旅情を誘う季節です。11月から1月にかけて最盛期を迎える「広島かき」は身が引き締まり濃厚そのもの。江田島の海辺に並ぶ牡蠣小屋での豪快な焼き牡蠣や土手鍋、大和ミュージアム（呉市海事歴史科学館）やてつのくじら館、アレイからすこじまで間近に望む海上自衛隊の潜水艦・護衛艦の冬の夕暮れと幻想的な艦船ライトアップ。平清盛伝説の音戸の瀬戸、名物海軍カレーと広島牛。港町の情緒と極上温泉を味わう厳選名宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-hiroshima-kure-edajima-oyster-yamato-port-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/7470/7470.jpg",
      width: 1200,
      height: 630,
      alt: '冬の呉港と瀬戸内海の夕景'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月広島】呉＆江田島・音戸！最旬の広島かき小屋グルメと大和ミュージアム・海上自衛隊艦船ライトアップ冬イルミ・瀬戸内海一望名宿5選",
    description: "冬の瀬戸内海は空気が澄み渡り、歴史ある港町・呉と多島美あふれる江田島が最も旅情を誘う季節です。11月から1月にかけて最盛期を迎える「広島かき」は身が引き締まり濃厚そのもの。江田島の海辺に並ぶ牡蠣小屋での豪快な焼き牡蠣や土手鍋、大和ミュージアム（呉市海事歴史科学館）やてつのくじら館、アレイからすこじまで間近に望む海上自衛隊の潜水艦・護衛艦の冬の夕暮れと幻想的な艦船ライトアップ。平清盛伝説の音戸の瀬戸、名物海軍カレーと広島牛。港町の情緒と極上温泉を味わう厳選名宿5選を徹底解説します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/7470/7470.jpg"]
  }
};

export default function HiroshimaKureEdajimaWinterPage() {
  const hotelsData = [
            {
              id: 1,
              name: "呉阪急ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7470/7470.jpg",
              rating: 4.47,
              reviews: 2220,
              price: "¥10,610〜",
              access: "ＪＲ呉線呉駅下車徒歩１分。呉港から徒歩約７分。「大和ミュージアム」＆「てつのくじら館（実物潜水艦展示）」まで徒歩約６分。",
              special: "阪急阪神第一ホテルグループ★歴史と浪漫の街に南欧風快適空間",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7470%2F7470.html",
              story: "JR呉駅正面に位置し、連絡通路で直結する呉随一のシティリゾート「呉阪急ホテル」。大和ミュージアムや呉港、アレイからすこじまなど呉市内の主要観光スポットへのアクセスが抜群のランドマークホテルです。館内は港町・呉の歴史とヨーロッパのクラシシズムが調和した格調高い空間。客室からは冬の澄んだ空気の向こうに呉の街並みや遠く呉湾を行き交う船影を望めます。冬のディナーには館内レストランで地元広島の食材を活かした特別会席やフレンチフルコースが用意され、大粒の広島牡蠣や極上の広島牛フィレステーキを贅沢に堪能。観光の疲れを優雅に癒やす洗練されたホスピタリティが光ります。",
              roomTip: "デラックスツイン（高層階）。呉駅と呉港の灯りを眼下に見下ろし、ゆったりとした広さで冬の港町ステイを満喫。",
              gourmetTip: "日本料理「音戸（おんど）」。冬限定の「広島牡蠣会席」。焼き牡蠣、牡蠣の土手鍋、牡蠣ご飯まで旬の旨味が凝縮された逸品揃い。",
              highlights: [
                "JR呉駅直結・格式あるシティホテル・日本料理「音戸」の冬牡蠣会席",
                "大和ミュージアムや呉港へ徒歩圏内・洗練されたホスピタリティ",
                "広島牛フィレステーキ＆地酒千福・伝統の海軍グルメプランも充実"
              ]
            },
            {
              id: 2,
              name: "クレイトンベイホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/17718/17718.jpg",
              rating: 4.49,
              reviews: 1726,
              price: "¥5,720〜",
              access: "ＪＲ呉駅・大和ミュージアムまでお車にて約５分。無料送迎バス、無料駐車場有（大型車以外予約不要）",
              special: "全室無線Wｉ-Ｆｉ対応（無料）・無料駐車場完備・呉駅まで無料シャトルバスを運行しております",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17718%2F17718.html",
              story: "呉湾のウォーターフロントに佇み、全室からオーシャンビューと造船所の巨大クレーン、行き交う艦船をパノラマで望む「クレイトンベイホテル」。呉ならではのダイナミックなベイサイドロケーションが魅力のリゾートホテルです。冬の黄昏時には、アレイからすこじま方面に沈む夕日と、停泊する海上自衛隊艦船のシルエットが息を呑むほどドラマチックに広がります。夕食はフレンチ、和食、中国料理の多彩な名店が揃い、特に冬の味覚である江田島・倉橋島産の大粒牡蠣を使った創作料理が絶品。JR呉駅からの無料シャトルバスも運行しており、冬の港町散策の拠点に最適です。",
              roomTip: "ハーバービューツイン。ピクチャーウィンドウから巨大ドックと停泊する護衛艦、ライトアップされた夜景を独占。",
              gourmetTip: "レストラン「ヴェ・ール」。冬の瀬戸内シーフードフレンチ。地元産の濃厚な冬牡蠣のポワレと広島牛ロース肉のグリルが評判。",
              highlights: [
                "全室ハーバービュー・停泊する護衛艦と夕日パノラマ・絶景フレンチ",
                "呉湾の巨大ドック夜景・無料シャトルバス運行・地元食材ディナー",
                "冬の澄んだ夜空に輝く艦船ライトアップ・優雅なベイサイドステイ"
              ]
            },
            {
              id: 3,
              name: "えたじま温泉　江田島荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/182130/182130.jpg",
              rating: 4.76,
              reviews: 348,
              price: "¥17,350〜",
              access: "広島駅から広島港まで市電で約３０分、広島港から中町港まで高速船で約３０分、中町港から車で約４分",
              special: "瀬戸内海に面するオーシャンビュー。源泉掛け流しの湯を満喫",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182130%2F182130.html",
              story: "江田島の中町海岸に2021年誕生し、国内外のトラベラーから絶賛を集める温泉リゾート「えたじま温泉 江田島荘」。目の前に穏やかな瀬戸内海と島々が広がる全室オーシャンビューの温泉宿です。こちらの温泉は、地下約1,000mから湧出する「含弱放射能-ナトリウム・カルシウム-塩化物強塩冷鉱泉」で、全国でも希少な療養泉の基準を満たす美肌の湯。冷えた体を芯からじんわりと温めてくれます。冬の夕食は、江田島で育まれた滋味あふれる食材をシェフが革新的な和フレンチへと仕立てる極上コース。すぐ目の前の海で揚がったばかりのプリプリの生牡蠣や焼き牡蠣、江田島ポークなど、ここでしか出合えない美食の数々に酔いしれます。",
              roomTip: "プレミアムオーシャンスイート。大きなテラスとデイベッドを備え、波音を聴きながら冬の瀬戸内海の多島美を眺める贅沢な時間。",
              gourmetTip: "メインダイニング「Locavore（ロカヴォール）」。江田島産牡蠣の低温調理や藁焼き、島野菜と広島牛のペアリングディナー。",
              highlights: [
                "療養泉認定えたじま温泉・全室オーシャンビュー・島ガストロノミー",
                "地下1000m湧出の極上美肌湯・冬の江田島牡蠣藁焼き・静寂の島ステイ",
                "建築美あふれるデザイナーズ空間・瀬戸内海を一望する絶景テラス"
              ]
            },
            {
              id: 4,
              name: "コンフォートホテル呉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/78130/78130.jpg",
              rating: 4.07,
              reviews: 3489,
              price: "¥4,050〜",
              access: "JR呉駅より徒歩2分（南側）◆大和ミュージアム徒歩5分◆「広島空港」空港リムジンバスで約65分◆広島市内バス約４０分",
              special: "日替わりスムージーが人気★無料朝食サービスがイチオシのコスパ最強ホテル◆小学6年生まで添い寝無料",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F78130%2F78130.html",
              story: "JR呉駅みなと口から徒歩約2分、大和ミュージアムやゆめタウン呉へも徒歩圏内という圧倒的な利便性を誇る「コンフォートホテル呉」。冬の呉観光をアクティブに楽しみたい旅行者にぴったりのスタイリッシュなホテルです。全室禁煙で清潔感あふれる客室には、快眠を追求したオリジナル寝具「チョイスピロー」を完備。無料朝食ビュッフェでは、季節のスープや焼きたてワッフル、地元の素材を取り入れた温かいメニューが冷えた朝の体を優しく目覚めさせてくれます。14時〜24時まで利用できるオープンスペース「コンフォートライブラリーカフェ」では、フリードリンクとともに呉の歴史や旅行ガイド本をゆっくり読むことができます。",
              roomTip: "クイーンエコノミー／ツインスタンダード。機能的なデスクと広々ベッドで、冬のひとり旅やカップル旅行にも快適。",
              gourmetTip: "無料朝食ビュッフェの温かい日替わりスープと季節のスムージー。周辺には海軍カレーや呉細うどんの名店が多数点在。",
              highlights: [
                "JR呉駅徒歩2分・大和ミュージアム至近・快眠寝具と無料朝食カフェ",
                "無料オープンスペース・挽きたてコーヒー・全室禁煙クリーン環境",
                "周辺に名物グルメ店多数・細うどんや海軍カレーめぐりに便利"
              ]
            },
            {
              id: 5,
              name: "呉ステーションホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16179/16179.jpg",
              rating: 3.65,
              reviews: 1584,
              price: "¥5,800〜",
              access: "ＪＲ呉駅より徒歩3分  　ＪＲ広島駅～呉駅まで快速で３０～３５分",
              special: "呉駅徒歩約３分◆コンビニ２４Ｈファミレス徒歩圏内◆夜間出入可・最終チェックイン２３時",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16179%2F16179.html",
              story: "JR呉駅正面から徒歩わずか2分、昭和の懐かしさと温かなもてなしが息づく「呉ステーションホテル」。大和ミュージアムやてつのくじら館、フェリー乗り場のある呉中央桟橋まで徒歩約10分と、呉の港湾エリア散策に抜群のフットワークを誇ります。手頃な宿泊料金ながら、客室は機能的で清潔に保たれており、長期滞在やビジネス、一人旅の拠点としてもリピーターに愛されています。ホテルの周辺には、冬の赤ちょうちんが灯る「呉屋台通り（蔵本通り）」があり、熱々のおでんや中華そば、呉名物の鳥皮みそ煮込みをつまみながら地元の人々と温かい交流を楽しめるのも大きな魅力です。",
              roomTip: "スタンダードシングル／ツイン。シンプルで使い勝手が良く、冬の観光後も静かな環境でぐっすり休息できます。",
              gourmetTip: "徒歩数分の「呉屋台通り」で味わう熱々のおでんと鳥皮みそ煮込み、そして〆の呉ラーメン。冬の夜に心まで温まる屋台体験。",
              highlights: [
                "JR呉駅前すぐ・抜群のコスパ・冬の呉名物屋台通りまで徒歩圏内",
                "アットホームな接客・一人旅やビジネス・気兼ねない港町滞在",
                "昭和レトロな街並み散策・熱々おでんと鳥皮みそ煮込みで温まる夜"
              ]
            }
  ];

  const faqData = [
  {
    "q": "海上自衛隊呉基地（アレイからすこじま）の艦船ライトアップや夕呉クルーズの時期は？",
    "a": "アレイからすこじま周辺では、停泊する潜水艦や護衛艦を間近で見学できます。特に冬場は空気が澄んで夕景からトワイライトの美しさが際立ちます。日没に合わせて自衛艦旗が降下されるラッパの音が響き渡り、年末年始や週末など特定の日には電灯艦飾（イルミネーション）が点灯されることがあります。また、呉中央桟橋から運航される「夕呉クルーズ」では、海上から巨大な艦船を大迫力で見上げることができ、冬期も大人気のアクティビティです。"
  },
  {
    "q": "江田島や呉周辺の「牡蠣小屋」の営業期間とおすすめの楽しみ方は？",
    "a": "広島かきが最も身を太らせて美味しくなるのは11月中旬から翌年3月頃です。呉市街や江田島島内（能美町・大柿町など）の沿岸部には多数の牡蠣小屋がオープンします。炭火やガス台の上で殻付き牡蠣を平らな面を下にして焼き、殻が開いたらレモンやポン酢を垂らしてアツアツを頬張るのが醍醐味です。牡蠣ご飯やカキフライ、牡蠣汁がセットになったコースも人気で、週末は事前予約をおすすめします。"
  },
  {
    "q": "大和ミュージアムとてつのくじら館の見学所要時間と見どころは？",
    "a": "大和ミュージアム（呉市海事歴史科学館）は、館内中央に鎮座する全長26.3mの「10分の1戦艦大和」が圧巻で、呉の造船・製鋼技術の歴史を深く学べます。所要時間は約1.5〜2時間です。すぐ隣にある「てつのくじら館（海上自衛隊呉史料館）」は入館無料で、本物の巨大潜水艦「あきしお」の内部に入り、潜望鏡を覗いたり士官室を見学できます（所要時間約45分〜1時間）。両館合わせて半日じっくり楽しむのが王道です。"
  },
  {
    "q": "呉から江田島へのアクセスはフェリーと車のどちらがおすすめですか？",
    "a": "呉中央桟橋から江田島（小用港）へは高速船で約10分、フェリーでも約20分と非常に近いため、船旅を楽しむのがおすすめです。船上から眺める呉湾の景色や造船所、護衛艦の眺望は圧巻です。一方、車で陸路を巡る場合は、真紅のアーチ橋「音戸大橋」を渡って倉橋島を経由し、さらに「早瀬大橋」を渡って江田島へ入るドライブコース（約50分）が風光明媚で人気です。"
  },
  {
    "q": "冬の呉で味わうべき名物グルメは何ですか？",
    "a": "最旬の「広島かき」に加え、旧日本海軍のレシピを再現した「呉海軍カレー」が名物です。艦艇ごとに異なる秘伝の味を市内認定店で食べ比べできます。また、茹で時間が短く柔らかい平打ち麺と優しい出汁が冷えた体に染み渡る「呉細うどん」、赤ちょうちんの屋台で親しまれる「鳥皮みそ煮込み（みそだき）」、広島牛のステーキなど、港町ならではの温まる美食が目白押しです。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-hiroshima-kure-edajima-oyster-yamato-port-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-hiroshima-kure-edajima-oyster-yamato-port-stay"
        },
        "headline": "【11・12・1月広島】呉＆江田島・音戸！最旬の広島かき小屋グルメと大和ミュージアム・海上自衛隊艦船ライトアップ冬イルミ・瀬戸内海一望名宿5選",
        "description": "冬の瀬戸内海は空気が澄み渡り、歴史ある港町・呉と多島美あふれる江田島が最も旅情を誘う季節です。11月から1月にかけて最盛期を迎える「広島かき」は身が引き締まり濃厚そのもの。江田島の海辺に並ぶ牡蠣小屋での豪快な焼き牡蠣や土手鍋、大和ミュージアム（呉市海事歴史科学館）やてつのくじら館、アレイからすこじまで間近に望む海上自衛隊の潜水艦・護衛艦の冬の夕暮れと幻想的な艦船ライトアップ。平清盛伝説の音戸の瀬戸、名物海軍カレーと広島牛。港町の情緒と極上温泉を味わう厳選名宿5選を徹底解説します。",
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
            "name": "呉＆江田島・音戸冬特集",
            "item": "https://croud-travel.com/winter-hiroshima-kure-edajima-oyster-yamato-port-stay"
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
      <header className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-medium">
            <Anchor className="w-4 h-4 text-blue-300" />
            <span>11月・12月・1月冬の瀬戸内港町＆美食特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-6">
            呉＆江田島・音戸！<br className="hidden sm:inline" />
            最旬の広島かき小屋グルメと艦船ライトアップ冬イルミ・瀬戸内海一望名宿5選
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            戦艦大和を生み出した歴史の港町・呉と、温暖な多島美に包まれる江田島。冬の澄んだ大気のもと、アレイからすこじまに並ぶ海上自衛隊の潜水艦や護衛艦が夕日に染まり、夜には幻想的な明かりが海を彩ります。11月から1月に旬のピークを迎える江田島・呉の「広島かき」を海辺の牡蠣小屋で豪快に味わい、名物海軍カレーや呉細うどんで温まる旅。港町の情緒と極上温泉を満喫する厳選名宿をお届けします。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-200 border-t border-slate-700/60 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
              <span>旬期：11月〜2月（牡蠣最盛期）</span>
            </div>
            <div className="flex items-center gap-2">
              <Ship className="w-4 h-4 text-blue-400 shrink-0" />
              <span>大和ミュージアム＆艦船夜景</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-blue-400 shrink-0" />
              <span>江田島牡蠣小屋＆土手鍋会席</span>
            </div>
            <div className="flex items-center gap-2">
              <Landmark className="w-4 h-4 text-blue-400 shrink-0" />
              <span>音戸の瀬戸＆てつのくじら館</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Section 1: エリア解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Destination Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Anchor className="w-6 h-6 text-blue-500 shrink-0" />
              澄み渡る冬の呉湾と江田島！鉄の巨艦と瀬戸内多島美が織りなす唯一無二の情景
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              広島県の南西部に位置する呉市は、明治時代から東洋一の軍港として栄え、世界最大の戦艦「大和」を建造した日本の近代化遺産の宝庫です。冬になると瀬戸内海の湿度が下がり、抜けるような青空と穏やかな海面が美しいコントラストを描き出します。港にそびえる大和ミュージアム（呉市海事歴史科学館）では、10分の1スケールで精巧に復元された戦艦大和の威容に圧倒され、隣接する海上自衛隊呉史料館「てつのくじら館」では、陸揚げされた本物の潜水艦の内部を見学することができます。
            </p>
            <p>
              日本で唯一、間近で潜水艦を見ることができる公園「アレイからすこじま」では、現役の潜水艦や護衛艦が岸壁に係留されており、冬の夕暮れ時には赤く染まる空と灰色の鋼鉄の船体が織りなすドラマチックな光景が広がります。日が落ちると艦船の舷灯やマストの灯りが水面に映り込み、港町特有のロマンチックな夜景へと表情を変えます。
            </p>
            <p>
              呉から音戸大橋を渡るかフェリーで渡る江田島は、全国屈指の牡蠣の産地。11月から1月にかけての冬は、牡蠣の身入りが最も良くなり、プリップリの弾力と濃厚なミルクのような旨味がピークに達します。沿岸部の牡蠣小屋でパチパチと音を立てる焼き牡蠣を頬張り、夕暮れには美肌温泉に浸かる。冬の呉・江田島は、知的好奇心と食欲を満たす贅沢な旅の舞台です。
            </p>
          </div>
        </section>

        {/* Section 2: 宿泊施設一覧 */}
        <section className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Building className="w-6 h-6 text-blue-500 shrink-0" />
              呉＆江田島で泊まりたい冬の厳選名宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              ※楽天トラベルの最新APIデータを反映。呉湾のパノラマ夜景、療養泉の極上温泉、冬牡蠣の美食会席を誇る宿を厳選。
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
                      <div className="flex items-center gap-1 text-blue-500 font-bold text-sm">
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
                        <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>{h.access}</span>
                      </div>

                      <h3 className="text-lg sm:text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                        <a href={h.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                          {h.name}
                          <ExternalLink className="w-4 h-4 text-slate-400 shrink-0" />
                        </a>
                      </h3>

                      <p className="text-xs text-blue-700 bg-blue-50 border border-blue-200/60 rounded-md px-2.5 py-1 mt-2 inline-block font-medium">
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
                          <Utensils className="w-3.5 h-3.5 text-blue-500" />
                          <span>冬の美食ポイント：</span>
                          <span className="font-normal text-slate-600">{h.gourmetTip}</span>
                        </div>
                      </div>

                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-slate-500">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                            <span className="truncate">{hl}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2">
                        <a
                          href={h.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-2.5 px-4 rounded-xl text-sm shadow-sm transition-all text-center"
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
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Climate & Packing Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Sun className="w-6 h-6 text-blue-500 shrink-0" />
              呉＆江田島の冬の気候と時期別おすすめの服装・防寒対策
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-blue-900 text-base flex items-center justify-between">
                <span>11月中旬〜下旬</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-medium">平均 13℃ / 最低 8℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                瀬戸内特有の穏やかな好天が続き、日中は秋用コートやジャケットで軽快に観光できます。ただし夕暮れの「夕呉クルーズ」やアレイからすこじまの海上見学は海風で底冷えするため、首元を温めるストールやライトダウンの携帯をおすすめします。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-blue-900 text-base flex items-center justify-between">
                <span>12月（年末年始）</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-medium">平均 8℃ / 最低 3℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                冬晴れの日が多いものの、江田島へのフェリー甲板や海沿いの牡蠣小屋では強い浜風に晒されます。風を通さない防風アウターや厚手のウールコート、手袋が必須です。蔵本通りの夜の屋台めぐりには足元の防寒対策も欠かせません。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-blue-900 text-base flex items-center justify-between">
                <span>1月（厳冬期〜牡蠣最盛期）</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-medium">平均 5℃ / 最低 1℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                空気が最も澄み渡る季節。呉港周辺や大和ミュージアム周辺は港湾特有のビル風と海風が交錯し、体感温度は氷点下近くまで下がります。厚手ダウンジャケット、カイロ、吸湿発熱インナーを着用して万全の防寒で巡りましょう。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: 絶景フォトスポット＆撮影攻略ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Photo Spots & Tips</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Camera className="w-6 h-6 text-blue-500 shrink-0" />
              冬の呉・江田島を美しく切り取る！絶景フォトスポット＆撮影テクニック
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600">
            <div className="border border-slate-200 rounded-xl p-5 space-y-2.5 bg-slate-50/50">
              <h3 className="font-bold text-blue-950 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                アレイからすこじまの夕暮れ潜水艦
              </h3>
              <p className="leading-relaxed">
                日没前後のマジックアワー（16:30〜17:15）が最高の一枚を撮る絶好のチャンス。赤銅色に染まる呉湾の水面を背景に、岸壁に係留された潜水艦や魚雷積載クレーンの幾何学的な鉄の影をシルエットで劇的に捉える構図が印象的です。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-2.5 bg-slate-50/50">
              <h3 className="font-bold text-blue-950 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                呉港の夜景と停泊艦船のライトアップ
              </h3>
              <p className="leading-relaxed">
                三脚や手すりを利用して手ブレを防ぎ、夜の澄みきった大気のなかで停泊する護衛艦のマスト灯や舷灯、水面にキラキラと反射する光の帯を長秒露光（1〜3秒）で撮影すると、まるで絵画のような港町の夜景美が浮かび上がります。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-2.5 bg-slate-50/50">
              <h3 className="font-bold text-blue-950 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                音戸の瀬戸と真紅の音戸大橋
              </h3>
              <p className="leading-relaxed">
                第二音戸大橋の「日招き広場」からのパノラマビューが絶景。深い青の海峡を勢いよく航行する漁船や定期船の引き波と、冬晴れの青空に鮮やかに映える朱塗りのループ橋を対角線構図で切り取るのがプロ仕様のテクニックです。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: 冬の美食＆お土産 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Gourmet & Harbor Flavors</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-blue-500 shrink-0" />
              冬の呉・江田島を味わう！広島かき・海軍カレー・呉細うどん・広島牛
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-blue-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                江田島＆呉の極上冬牡蠣
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                清浄な海域で育つ江田島・呉の牡蠣は、冬になると大粒で旨味がギュッと濃縮されます。海沿いの牡蠣小屋で香ばしく焼き上げる殻付き焼き牡蠣、濃厚な味噌出汁で煮込む郷土料理「牡蠣の土手鍋」、サクサクの衣の中にジューシーな旨味が溢れるカキフライなど、冬の味覚を余すところなく味わえます。
              </p>
            </div>

            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-blue-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                伝統の「呉海軍カレー」
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                海上自衛隊の艦艇ごとに異なる秘伝のカレーレシピを、呉市内の飲食店が忠実に再現。牛すじを煮込んだスパイシーなカレーやフルーティーな甘口カレーなど、個性豊かな味が揃います。冬の寒い散策途中、熱々のカレーが体の芯から温めてくれます。
              </p>
            </div>

            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-blue-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                呉細うどん＆屋台のみそだき
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm">
                忙しい海軍工廠の工員たちが素早く食べられるよう細く作られたとされる「呉細うどん」。柔らかく出汁がよく絡む麺と、優しいいりこ出汁のハーモニーは絶品です。夜には蔵本通りの屋台で、赤味噌でじっくり煮込んだ「鳥皮みそ煮込み」とおでんで地酒を楽しむのが呉の定番スタイルです。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: モデルコース */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-blue-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-3xl font-bold text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-blue-400 shrink-0" />
              大和の歴史と冬牡蠣を堪能する1泊2日王道モデルコース
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-blue-300 text-lg">
                <span className="bg-blue-600 text-white text-xs px-2.5 py-1 rounded-md">Day 1</span>
                <span>大和ミュージアム・てつのくじら館とアレイからすこじま夕景</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>10:30</strong> JR呉駅に到着。「大和ミュージアム」で10分の1戦艦大和や呉の造船の歴史をじっくり見学。
                </p>
                <p>
                  <strong>12:30</strong> 市内の洋食店で本格「呉海軍カレー」のランチを味わう。
                </p>
                <p>
                  <strong>13:30</strong> 「てつのくじら館」へ。本物の潜水艦内部に入り、潜望鏡や操舵席を体感。
                </p>
                <p>
                  <strong>15:30</strong> 「アレイからすこじま」へ移動。冬の夕日に染まる潜水艦と護衛艦の雄姿を撮影。
                </p>
                <p>
                  <strong>17:30</strong> ホテルへチェックイン。冬の呉港の夜景を眺めながら、旬の広島牡蠣会席と地酒千福を堪能。
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-blue-300 text-lg">
                <span className="bg-blue-600 text-white text-xs px-2.5 py-1 rounded-md">Day 2</span>
                <span>フェリーで江田島へ！牡蠣小屋の豪快焼き牡蠣とえたじま温泉</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>08:30</strong> ホテルで和洋朝食を楽しんだ後、呉中央桟橋からフェリーで江田島（小用港）へ（約20分）。
                </p>
                <p>
                  <strong>09:30</strong> 旧海軍兵学校（海上自衛隊第1術科学校）を見学。赤レンガの美しい幹部候補生学校庁舎に感嘆。
                </p>
                <p>
                  <strong>11:30</strong> 江田島の海沿いに佇む「牡蠣小屋」へ。炭火で豪快に焼く殻付き焼き牡蠣と牡蠣ご飯を堪能。
                </p>
                <p>
                  <strong>13:30</strong> 「えたじま温泉」の日帰り温泉へ。海を望む露天風呂で療養泉の極上湯に浸かり旅の疲れをリセット。
                </p>
                <p>
                  <strong>15:30</strong> 音戸大橋を経由して呉駅へ戻り、名物「呉細うどん」を軽く啜ってから帰路へ。
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
              冬の呉・江田島旅行 よくある質問
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
              あわせて楽しむ！広島・瀬戸内エリアの冬特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <Link 
              href="/winter-hiroshima-miyajima-itsukushima-oyster-snow-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-blue-400 block mb-1">宮島・厳島神社冬特集</span>
              <span className="font-bold text-white block">嚴島神社初詣＆世界遺産冬景色・極上牡蠣と宮島温泉名宿</span>
            </Link>

            <Link 
              href="/winter-okayama-kurashiki-bikan-yakei-kibitsu-chiyagyu-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-blue-400 block mb-1">倉敷美観地区冬特集</span>
              <span className="font-bold text-white block">白壁の街並み冬ライトアップ＆吉備津神社初詣・千屋牛名宿</span>
            </Link>

            <Link 
              href="/winter-yamaguchi-iwakuni-kintaikyo-suo-oshima-mikan-nabe-takamorigyu-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-blue-400 block mb-1">岩国・錦帯橋冬特集</span>
              <span className="font-bold text-white block">錦帯橋の冬景色＆周防大島みかん鍋・高森牛と瀬戸内温泉名宿</span>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer Navigation */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200 mt-16 text-center text-xs text-slate-500">
        <p>© 2026 地域の宿探訪 - 日本の四季と極上ホテル・旅館を巡る旅</p>
      </footer>
    
      <HubRelatedPosts currentSlug="winter-hiroshima-kure-edajima-oyster-yamato-port-stay" />
</div>
  );
}
