import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Snowflake, Flame, Mountain, Building, ThermometerSun, Waves, Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月今治】冬の来島海峡絶景＆日本総鎮守・大山祇神社新春初詣！来島天然真鯛と名湯に寛ぐ厳選宿5選",
  description: "冬の瀬戸内海は澄み渡る青空と多島美が最も美しく輝く季節。世界初の三連吊橋「来島海峡大橋」が架かる愛媛県今治市と、日本総鎮守・大山祇神社が鎮座する大三島。激流で引き締まる冬の最高峰「来島海峡天然真鯛」の鯛めしや鯛鍋、伊予牛、今治鉄板焼き鳥に舌鼓を打ち、美肌の名湯「鈍川温泉」や「湯ノ浦温泉」で心身を温める。楽天APIから最新取得した信頼の名宿5選を徹底特集します。",
  keywords: '今治 ホテル, しまなみ海道 ホテル, 大山祇神社 初詣, 来島海峡大橋 絶景, 鈍川温泉, 今治国際ホテル, GLAMPROOK しまなみ, 来島天然真鯛, 11月 12月 1月 愛媛 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-ehime-imabari-shimanami-oomishima-taimeshi-onsen-stay/"
  },
  openGraph: {
    title: "【11・12・1月今治】冬の来島海峡絶景＆日本総鎮守・大山祇神社新春初詣！来島天然真鯛と名湯に寛ぐ厳選宿5選",
    description: "冬の瀬戸内海は澄み渡る青空と多島美が最も美しく輝く季節。世界初の三連吊橋「来島海峡大橋」が架かる愛媛県今治市と、日本総鎮守・大山祇神社が鎮座する大三島。激流で引き締まる冬の最高峰「来島海峡天然真鯛」の鯛めしや鯛鍋、伊予牛、今治鉄板焼き鳥に舌鼓を打ち、美肌の名湯「鈍川温泉」や「湯ノ浦温泉」で心身を温める。楽天APIから最新取得した信頼の名宿5選を徹底特集します。",
    url: 'https://croud-travel.com/winter-ehime-imabari-shimanami-oomishima-taimeshi-onsen-stay',
    type: 'article'
  }
};

export default function EhimeImabariWinterFeaturePage() {
  const hotels = [
            {
              id: 1,
              name: "今治国際ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1036/1036.jpg",
              rating: 4.46,
              reviews: 2091,
              price: "¥8,700〜",
              access: "予讃線今治駅から徒歩で10分。",
              special: "ビジネス・観光に好立地・館内WIFI・全室インタ－ネット利用可能（ＬＡＮケ－ブル対応可）",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1036%2F1036.html",
              story: "今治市街の中心にそびえ立ち、四国屈指のスケールを誇るランドマークタワーホテル「今治国際ホテル」。地上23階建ての堂々たる外観と格式あるロビーが訪れる旅人を優雅に迎えます。館内には宿泊者専用の天然温泉露天風呂や広々とした大浴場、サウナ、室内温水プールを備え、冬のしまなみ観光で冷えた身体を芯からじんわりと解きほぐします。高層階の客室からは、冬晴れの瀬戸内海に浮かぶ島々や来島海峡大橋の雄姿、ライトアップされた今治城の夜景を一望。夕食は来島海峡の新鮮な天然真鯛や伊予牛を贅沢に盛り込んだ本格日本料理、洗練されたフランス料理、広東料理など多彩な美食から選べ、快適な滞在を約束します。",
              roomTip: "高層階パノラマツインルーム。大きなピクチャーウインドウから瀬戸内海の多島美と今治市街の夜景を見晴らすゆとりある上質空間。",
              gourmetTip: "「来島海峡天然真鯛の薄造りと伊予牛フィレステーキ会席」。激流で育った引き締まった真鯛の歯ごたえと、きめ細やかな伊予牛の深い旨み。",
              highlights: [
                "今治市街のランドマーク高層ホテル・天然温泉大浴場と露天風呂サウナ・来島海峡大橋展望",
                "来島海峡天然真鯛の薄造りと伊予牛ステーキ会席・フレンチ・日本料理の選べる夕食",
                "室内プールやエステ完備・今治城やしまなみ海道へのアクセス抜群・四国随一の格式"
              ]
            },
            {
              id: 2,
              name: "ＧＬＡＭＰＲＯＯＫしまなみ（グランルーク）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/180620/180620.jpg",
              rating: 4.81,
              reviews: 332,
              price: "¥21,100〜",
              access: "今治港より送迎車での無料送迎（要予約・先着順）／今治駅より路線バスで約16分 馬島バスストップ下車徒歩10分",
              special: "オールインクルーシブで過ごす大人の島旅。ホテルとグランピング、お好みのスタイルでお楽しみください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180620%2F180620.html",
              story: "来島海峡の真ん中に浮かぶ周囲約4kmの小さな離島・馬島（うましま）に位置する「GLAMPROOK しまなみ」。一般車両の進入が制限された特別な島で、滞在中の飲食やアクティビティがすべて宿泊料金に含まれるオールインクルーシブスタイルの極上リゾートです。頭上を雄大に通過する来島海峡大橋の白銀のワイヤーと、エメラルドグリーンの激流が織りなすパノラマは圧巻の一言。冬の澄み渡る夜には満天の星とライトアップされた橋の光が水面に揺らめきます。客室はコクーンテントとホテル棟から選べ、夕食には瀬戸内の旬魚や伊予牛を使った創作フルコースを堪能。非日常の島時間に深く浸れる隠れ家です。",
              roomTip: "オーシャンビュー・ジュニアスイート。海と橋を目の前に望む特等席。冬の澄んだ海風と波の音を感じながら静寂の時間を過ごせます。",
              gourmetTip: "「しまなみオールインクルーシブ冬のディナーコース」。来島海峡の寒鯛や車海老、伊予牛を厳選ワインとともに味わう至福のテーブル。",
              highlights: [
                "来島海峡に浮かぶ馬島の全室海望リゾート・オールインクルーシブ・橋と激流の大パノラマ",
                "専属シェフが腕を振るう冬の極上フレンチディナー・ワインやドリンクフリーの贅沢",
                "島内専用車送迎・クルージング体験・夜景と星空に包まれる唯一無二のプライベートステイ"
              ]
            },
            {
              id: 3,
              name: "鈍川温泉　皆楽荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108759/108759.jpg",
              rating: 4.02,
              reviews: 129,
              price: "¥6,600〜",
              access: "ＪＲ　今治駅から車で３０分",
              special: "渓谷を望む鈍川温泉は「すっぴん美人の湯」として親しまれています。寛ぎのひと時をお過ごしください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108759%2F108759.html",
              story: "道後温泉、本谷温泉とともに「伊予の三名湯」と称され、江戸時代には今治藩の湯治場として栄えた「鈍川温泉」の老舗旅館「鈍川温泉 皆楽荘」。鈍川渓谷の清流沿いに佇み、巨岩と自然林に囲まれた秘湯の風情が旅情をかき立てます。自慢の温泉はpH9.9という全国屈指の強アルカリ性単純泉で、「美人の湯」として名高い滑らかな肌ざわり。冬の冷え込みの中で入浴すると、まるで化粧水に浸かっているかのように肌が潤います。夕食は冬の山里の恵みである名物「キジ鍋」や「猪鍋（ボタン鍋）」、来島海峡の新鮮な鯛料理が並び、身体の芯から温まる素朴で贅沢な湯宿です。",
              roomTip: "渓流側純和風客室。窓の外に鈍川渓谷の清らかなせせらぎが響く静穏な部屋。冬の木立を眺めながら静かに読書や休息を楽しめます。",
              gourmetTip: "「秘伝出汁のキジ鍋会席＆来島鯛の荒滝造り」。高タンパクで上品な脂のキジ肉と地元冬野菜を特製出汁で煮込む冬の名物鍋料理。",
              highlights: [
                "伊予の三名湯・pH9.9強アルカリ性美肌の鈍川温泉・清流渓谷沿いの静寂・冬の名物キジ鍋",
                "秘伝出汁で味わうキジ鍋＆ボタン鍋・来島真鯛の荒滝造りと山里の旬菜・心温まるおもてなし",
                "化粧水のようなとろとろ美肌温泉・静かな渓谷のせせらぎ・日頃の疲れを癒やす秘湯旅"
              ]
            },
            {
              id: 4,
              name: "湯ノ浦温泉　汐の丸　瀬戸内の水軍浪漫をたどる宿",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7249/7249.jpg",
              rating: 4.02,
              reviews: 2234,
              price: "¥5,650〜",
              access: "今治湯ノ浦ＩＣより車で3分／今治ＩＣより車で20分／松山空港から松山ＩＣより車で約1時間３０分",
              special: "全面滑りづらい畳敷の大浴場でお子様・シニアもご安心！地元名物〈宝楽焼き〉や〈鯛めし〉なども大好評。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7249%2F7249.html",
              story: "国民保養温泉地「名湯百選」にも選ばれた湯ノ浦温泉の高台に建つ「湯ノ浦温泉 汐の丸 瀬戸内の水軍浪漫をたどる宿」。中世の瀬戸内海を支配した村上海賊（村水軍）の歴史と文化をテーマにした情緒あふれる和風旅館です。大浴場にはラドンを豊富に含む良質な天然温泉が満ち、露天風呂では冬の澄んだ空気を感じながら爽快な湯浴みが叶います。夕食は「水軍水車舟盛り」をはじめ、名物の「鯛釜飯」、来島海峡の天然魚介、愛媛のブランド牛「伊予牛 絹の味」を盛り込んだ豪快かつ繊細な会席料理。瀬戸内の海の歴史に思いを馳せながら、温かなおもてなしに癒やされます。",
              roomTip: "和モダン客室「水軍スイート」。畳の温もりとローベッドを配した寛ぎの空間。静かな丘の上から瀬戸内の風を感じる居心地の良さ。",
              gourmetTip: "「名物水軍海鮮会席＆ふっくら炊き立て鯛釜飯」。来島海峡の真鯛の旨みが米一粒一粒に染み渡る鯛めしと、伊予牛の陶板焼きの豪華共演。",
              highlights: [
                "名湯百選湯ノ浦温泉のラドン泉露天風呂・村上海賊水軍浪漫の宿・名物炊き立て鯛釜飯",
                "豪快な水軍舟盛りと伊予牛陶板焼き会席・海賊の歴史を感じる館内と落ち着きの和室",
                "高台からの開放的な眺望・しまなみ海道大三島大山祇神社への参拝拠点にも最適"
              ]
            },
            {
              id: 5,
              name: "ホテルクラウンヒルズ今治駅前（ＢＢＨホテルグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9047/9047.jpg",
              rating: 3.90,
              reviews: 1280,
              price: "¥4,000〜",
              access: "ＪＲ「今治駅」徒歩１分・しまなみ海道「今治ＩＣ」下車５分",
              special: "JR今治駅前好立地徒歩１分！無料朝食バイキング！男女浴場完備！全室加湿空気清浄機完備！無料Wi-Fi",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9047%2F9047.html",
              story: "JR予讃線・今治駅前より徒歩わずか1分という抜群のフットワークを誇る「ホテルクラウンヒルズ今治駅前」。しまなみ海道のサイクリング拠点や、大三島・大山祇神社へのバス移動の拠点として絶大な利便性を発揮します。館内には旅の疲れをほぐす展望大浴場と本格高温サウナを完備。足を伸ばして温まれる大浴場は、冬の観光帰りに嬉しい設備です。朝食バイキングは地元愛媛の郷土料理や焼き立てパンが無料で提供され、コストパフォーマンスの高さも抜群。駅前周辺には今治名物の「鉄板焼き鳥」を提供する老舗居酒屋が点在し、夜の街歩きも身軽に楽しめます。",
              roomTip: "リニューアルコンフォートダブル。シモンズ社製高級ベッドと個別空調を完備。駅前ながら静粛性が高く、ぐっすりと快眠できます。",
              gourmetTip: "「地元提携店での今治鉄板焼き鳥＆せんざんき」。重石でプレスしてカリッと焼き上げる名物皮焼きと、ジューシーな唐揚げを地酒とともに。",
              highlights: [
                "JR今治駅前徒歩1分の圧倒的利便性・展望大浴場と本格サウナ完備・今治焼き鳥名店至近",
                "無料朝食バイキング・今治城やしまなみ海道への観光拠点・コストパフォーマンス抜群",
                "シモンズベッドで快眠・女性専用アメニティ・ビジネスからしまなみ周遊まで快適サポート"
              ]
            }
  ];

  const faqList = [
  {
    "q": "冬（11月〜1月）のしまなみ海道（来島海峡大橋・亀老山）の景観と寒さの特徴は？",
    "a": "瀬戸内海は年間を通じて温暖な気候ですが、11月下旬から1月にかけては日本海側のような豪雪や極端な冷え込みは少なく、冬晴れ（快晴）の日が多いのが大きな魅力です。大気の透明度が高いため、来島海峡大橋の雄大な幾何学模様や、大島・亀老山（きろうさん）展望台からのパノラマビューは一年で最も遠くまで澄み渡り、遠く西日本最高峰・石鎚山の雪化粧した連峰まで見渡せます。ただし、海峡部や橋の上は海風が強く吹き抜けるため、体感温度は低くなります。防風性の高いマウンテンパーカーやダウンジャケット、手袋を準備しておくのがおすすめです。"
  },
  {
    "q": "日本総鎮守「大山祇神社（大三島）」の新春初詣（1月）の由緒と見どころは？",
    "a": "大山祇神社は全国に約1万社ある山祇神社や三島神社の総本社で、「日本総鎮守」の扁額を掲げる日本屈指のパワースポットです。境内中央には樹齢約2,600年の天然記念物「雨乞いの楠」が神々しくそびえ立ち、パワースポットとして知られます。また併設の宝物館（紫陽殿・国宝館）には、源頼朝、源義経、武蔵坊弁慶、巴御前、河野通有など歴代の武将が奉納した国宝・重要文化財指定の甲冑や刀剣が日本全国の約8割近く収蔵されています。新春には開運厄除け、必勝祈願、家内安全を祈る参拝者で賑わい、大三島の穏やかな冬景色とともに厳かな時間を過ごせます。"
  },
  {
    "q": "冬の「来島海峡天然真鯛」が特に美味しい理由と、名物グルメ「今治鯛めし」の特徴は？",
    "a": "来島海峡は日本三大急潮の一つに数えられ、最大潮流が10ノット（時速約18km）にも達する激流の海です。この激流にもまれて泳ぐ天然真鯛は骨が太く身が引き締まり、冬の低水温を乗り切るためにたっぷりと上質な脂を蓄えます。愛媛の鯛めしには、松山・今治風の「炊き込み鯛めし」と、宇和島風の「生の鯛刺身をタレと卵に絡める鯛めし」の2種類がありますが、今治では土鍋や釜でふっくらと炊き上げた鯛めしが冬の定番。出汁を吸ったご飯と鯛の旨みが口いっぱいに広がり、最後に熱々の出汁をかけて鯛茶漬けにするのも極上の味わいです。"
  },
  {
    "q": "今治市内の温泉地「鈍川温泉」と「湯ノ浦温泉」の特徴や違いは？",
    "a": "「鈍川温泉（にぶかわおんせん）」は今治市郊外の山あいに位置し、道後温泉と並ぶ伊予の三名湯。pH9.9という非常に強いアルカリ性単純泉で、石鹸のように肌の角質を落とす「美人の湯」として有名です。静かな渓谷美と名物キジ鍋・猪鍋が楽しめます。一方の「湯ノ浦温泉」は瀬戸内海を見晴らす高台に位置し、四国で初めて国民保養温泉地に指定された名湯百選の地。弱アルカリ性のラドン・フッ素を含む泉質で、神経痛や疲労回復、冷え性に優れています。山の秘湯風情なら鈍川、海沿いのリゾート感なら湯ノ浦と、好みに応じて選べます。"
  },
  {
    "q": "冬のしまなみ海道の観光ルートやレンタカー移動の注意点は？",
    "a": "冬のしまなみ海道（西瀬戸自動車道）は高速道路として全線開通しており、凍結や積雪による通行止めは年に数回程度と極めて稀です。今治駅から大島（亀老山）、伯方島、大三島（大山祇神社）までは車で片道約30〜45分程度と非常にアクセス良好。ドライブウェイとしての快適さは日本随一です。サイクリングを楽しむ場合は冬の海風対策としてウィンドブレーカーや防風手袋が必須ですが、冬の澄んだ瀬戸内海と島々の景観を爽快に楽しむことができます。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.com/"
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
            "name": "【11・12・1月今治】冬の来島海峡絶景＆日本総鎮守・大山祇神社新春初詣！来島天然真鯛と名湯に寛ぐ厳選宿5選",
            "item": 'https://croud-travel.com/winter-ehime-imabari-shimanami-oomishima-taimeshi-onsen-stay'
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "【11・12・1月今治】冬の来島海峡絶景＆日本総鎮守・大山祇神社新春初詣！来島天然真鯛と名湯に寛ぐ厳選宿5選",
        "description": "冬の瀬戸内海は澄み渡る青空と多島美が最も美しく輝く季節。世界初の三連吊橋「来島海峡大橋」が架かる愛媛県今治市と、日本総鎮守・大山祇神社が鎮座する大三島。激流で引き締まる冬の最高峰「来島海峡天然真鯛」の鯛めしや鯛鍋、伊予牛、今治鉄板焼き鳥に舌鼓を打ち、美肌の名湯「鈍川温泉」や「湯ノ浦温泉」で心身を温める。楽天APIから最新取得した信頼の名宿5選を徹底特集します。",
        "author": {
          "@type": "Organization",
          "name": "旅宿クラウド編集部"
        },
        "publisher": {
          "@type": "Organization",
          "name": "旅宿クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/icon.png"
          }
        },
        "datePublished": "2026-10-03",
        "dateModified": "2026-10-03"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "冬（11月〜1月）のしまなみ海道（来島海峡大橋・亀老山）の景観と寒さの特徴は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "瀬戸内海は年間を通じて温暖な気候ですが、11月下旬から1月にかけては日本海側のような豪雪や極端な冷え込みは少なく、冬晴れ（快晴）の日が多いのが大きな魅力です。大気の透明度が高いため、来島海峡大橋の雄大な幾何学模様や、大島・亀老山（きろうさん）展望台からのパノラマビューは一年で最も遠くまで澄み渡り、遠く西日本最高峰・石鎚山の雪化粧した連峰まで見渡せます。ただし、海峡部や橋の上は海風が強く吹き抜けるため、体感温度は低くなります。防風性の高いマウンテンパーカーやダウンジャケット、手袋を準備しておくのがおすすめです。"
            }
          },
          {
            "@type": "Question",
            "name": "日本総鎮守「大山祇神社（大三島）」の新春初詣（1月）の由緒と見どころは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "大山祇神社は全国に約1万社ある山祇神社や三島神社の総本社で、「日本総鎮守」の扁額を掲げる日本屈指のパワースポットです。境内中央には樹齢約2,600年の天然記念物「雨乞いの楠」が神々しくそびえ立ち、パワースポットとして知られます。また併設の宝物館（紫陽殿・国宝館）には、源頼朝、源義経、武蔵坊弁慶、巴御前、河野通有など歴代の武将が奉納した国宝・重要文化財指定の甲冑や刀剣が日本全国の約8割近く収蔵されています。新春には開運厄除け、必勝祈願、家内安全を祈る参拝者で賑わい、大三島の穏やかな冬景色とともに厳かな時間を過ごせます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の「来島海峡天然真鯛」が特に美味しい理由と、名物グルメ「今治鯛めし」の特徴は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "来島海峡は日本三大急潮の一つに数えられ、最大潮流が10ノット（時速約18km）にも達する激流の海です。この激流にもまれて泳ぐ天然真鯛は骨が太く身が引き締まり、冬の低水温を乗り切るためにたっぷりと上質な脂を蓄えます。愛媛の鯛めしには、松山・今治風の「炊き込み鯛めし」と、宇和島風の「生の鯛刺身をタレと卵に絡める鯛めし」の2種類がありますが、今治では土鍋や釜でふっくらと炊き上げた鯛めしが冬の定番。出汁を吸ったご飯と鯛の旨みが口いっぱいに広がり、最後に熱々の出汁をかけて鯛茶漬けにするのも極上の味わいです。"
            }
          },
          {
            "@type": "Question",
            "name": "今治市内の温泉地「鈍川温泉」と「湯ノ浦温泉」の特徴や違いは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「鈍川温泉（にぶかわおんせん）」は今治市郊外の山あいに位置し、道後温泉と並ぶ伊予の三名湯。pH9.9という非常に強いアルカリ性単純泉で、石鹸のように肌の角質を落とす「美人の湯」として有名です。静かな渓谷美と名物キジ鍋・猪鍋が楽しめます。一方の「湯ノ浦温泉」は瀬戸内海を見晴らす高台に位置し、四国で初めて国民保養温泉地に指定された名湯百選の地。弱アルカリ性のラドン・フッ素を含む泉質で、神経痛や疲労回復、冷え性に優れています。山の秘湯風情なら鈍川、海沿いのリゾート感なら湯ノ浦と、好みに応じて選べます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬のしまなみ海道の観光ルートやレンタカー移動の注意点は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "冬のしまなみ海道（西瀬戸自動車道）は高速道路として全線開通しており、凍結や積雪による通行止めは年に数回程度と極めて稀です。今治駅から大島（亀老山）、伯方島、大三島（大山祇神社）までは車で片道約30〜45分程度と非常にアクセス良好。ドライブウェイとしての快適さは日本随一です。サイクリングを楽しむ場合は冬の海風対策としてウィンドブレーカーや防風手袋が必須ですが、冬の澄んだ瀬戸内海と島々の景観を爽快に楽しむことができます。"
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
      <header className="relative bg-gradient-to-br from-slate-950 via-cyan-950 to-stone-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-200 text-xs sm:text-sm font-medium mb-6">
            <Waves className="w-4 h-4 text-cyan-300" />
            11月・12月・1月冬の特選旅｜愛媛・今治＆しまなみ海道
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-6">
            冬の来島海峡絶景＆日本総鎮守・大山祇神社新春初詣！<br className="hidden sm:inline" />
            来島天然真鯛と名湯に寛ぐ厳選宿5選
          </h1>
          <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-4xl mb-8">
            瀬戸内海の多島美を貫く「しまなみ海道」。冬は青空の澄み渡る日が多く、来島海峡大橋の幾何学美と紺碧の海、遠く白雪の石鎚山連峰が織りなす大パノラマが最も鮮やかに望める奇跡のシーズンです。日本総鎮守・大山祇神社での新春開運初詣、来島海峡の激流に育まれた冬の最高峰「寒真鯛」の鯛めしや鯛ちり鍋、伊予牛、今治鉄板焼き鳥。伊予の三名湯「鈍川温泉」や「湯ノ浦温泉」の美肌湯に癒やされる特別な冬旅をご提案します。
          </p>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /> 愛媛県今治市（しまなみ海道・大三島・鈍川）</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-cyan-400" /> 探訪期：11月中旬〜1月下旬</span>
            <span className="flex items-center gap-1.5"><Flame className="w-4 h-4 text-cyan-400" /> 来島天然真鯛鯛めし＆大山祇神社新春初詣</span>
          </div>
        </div>
      </header>

      {/* Navigation Breadcrumbs */}
      <nav aria-label="パンくずリスト" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-500">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-cyan-600 transition">ホーム</Link></li>
          <li><span>/</span></li>
          <li><Link href="/features" className="hover:text-cyan-600 transition">特集一覧</Link></li>
          <li><span>/</span></li>
          <li className="text-slate-800 font-medium truncate">冬の今治＆しまなみ海道特集</li>
        </ol>
      </nav>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-cyan-600 pl-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Setouchi Strait & Sacred Island</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              世界初の三連吊橋が架かる激流の海峡と、国宝武具が眠る日本総鎮守の島
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              村上海賊の歴史が息づく瀬戸の海と、冬晴れの多島美に包まれる至高の旅情
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              本州・尾道と四国・今治を橋で結ぶ「瀬戸内しまなみ海道」。全長約60kmの海道の終点に位置する今治市は、中世に瀬戸内海を支配した能島村上氏をはじめとする村上海賊（村水軍）の拠点であり、今なお独自の海洋文化と造船・タオルのものづくり精神が色濃く残る歴史都市です。春から秋のサイクリングで世界的な脚光を浴びるしまなみ海道ですが、大人の旅人が心惹かれるのが冬の情景。冬の瀬戸内海は移動性高気圧に覆われて晴天率が極めて高く、大気の水蒸気が減少するため、島々の稜線や海峡を渡る吊橋のシルエットがどこまでもくっきりと浮かび上がります。
            </p>
            <p>
              今治のシンボルである「来島海峡」は、鳴門海峡・関門海峡と並ぶ日本三大急潮の一つ。最大潮流10ノット（時速約18km）もの激流が渦を巻き、世界初の三連吊橋「来島海峡大橋」がその上を優美に跨ぎます。大島の「亀老山（きろうさん）展望台」から見下ろす冬の夕暮れは息をのむ美しさ。茜色に染まる瀬戸の夕日と、島々のシルエット、そして橋のライトアップが水面に映り込む光景は、日本屈指の展望パノラマです。
            </p>
            <p>
              そしてしまなみ海道のほぼ中央に位置する大三島には、「日本総鎮守」の号を賜る古社「大山祇神社（おおやまづみじんじゃ）」が鎮座します。大山積神を祀る全国約1万社の総本社で、推古天皇の御代に鎮座したと伝わる由緒ある名刹。境内には樹齢2,600年を超える御神木「乎加智命（おかちのみこと）手植えの大楠」が威厳を放ち、新春には開運厄除けや心願成就、必勝祈願の参拝者で賑わいます。さらに宝物館には、源頼朝や源義経、武蔵坊弁慶が奉納した国宝・重要文化財の甲冑や刀剣が多数保管されており、日本の国宝武具の約4割が集結する奇跡の聖地です。
            </p>
            <p>
              冬の味覚の王様は、来島海峡の激流にもまれて育つ「来島海峡天然真鯛」です。激しい潮流に逆らって泳ぐため身が引き締まり、冬の低水温で極上の脂を蓄えた寒鯛は、薄造りにすると身が透き通るような白さとコリコリとした歯ごたえ。土鍋や釜でふっくらと炊き上げた今治風「鯛めし」は、鯛の骨から出た濃厚な旨みが出汁と共にご飯の一粒一粒に染み渡り、一口ごとに至福の幸福感が広がります。さらに戦国期に水軍が出陣前に食べたと言われる八嶋鍋（水軍鍋）や、伯方の塩で味付けされた素朴な海鮮焼き、愛媛の黒毛和牛「伊予牛 絹の味」、香ばしい鉄板でプレスして焼き上げる「今治焼き鳥」、そしてpH9.9の強アルカリ性を誇る美肌の名湯「鈍川温泉」やラドン豊富な「湯ノ浦温泉」が、冷えた身体を優しく包み込みます。
            </p>
            <p>
              しまなみ海道沿いの島々には、日本遺産に認定された村上海賊ゆかりの「村上海賊ミュージアム（大島）」や、海城として名高い能島城跡の激流を間近に見る潮流体験船など、歴史と自然が織りなす見どころが満載。大三島の柑橘直売所で完熟の紅まどんなや伊予柑を味わい、世界基準の吸水性を誇る今治タオルの心地よさに触れる旅は、冬の瀬戸内ならではの温もりと豊かさを教えてくれます。
            </p>
          </div>

          {/* 3 Pillar Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-cyan-50/60 border border-cyan-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">来島海峡大橋の冬晴れ絶景</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                日本三大急潮に架かる世界初の三連吊橋。亀老山展望台からの多島美夕景とライトアップの幻想パノラマ。
              </p>
            </div>

            <div className="bg-cyan-50/60 border border-cyan-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">日本総鎮守・大山祇神社初詣</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                大三島に鎮座する全国総本社。樹齢2600年の大楠と源義経ゆかりの国宝武具・甲冑が眠る新春開運の聖地。
              </p>
            </div>

            <div className="bg-cyan-50/60 border border-cyan-100 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">来島天然真鯛＆伊予の三名湯</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                激流で育つ極上寒鯛の鯛めし・鯛ちり鍋。pH9.9の美肌鈍川温泉や名湯百選湯ノ浦温泉で温まる冬の極楽。
              </p>
            </div>
          </div>
        </section>

        {/* Month Guide */}
        <section className="bg-gradient-to-r from-slate-900 to-cyan-950 text-white rounded-3xl p-6 sm:p-10 shadow-md space-y-6">
          <div className="border-l-4 border-cyan-400 pl-4">
            <span className="text-cyan-300 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Calendar</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              11月・12月・1月｜今治＆しまなみの月別見どころと旅のポイント
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              温暖な瀬戸内の気候を活かして快適に巡る、冬の今治カレンダー
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-200 leading-relaxed">
            <div className="bg-white/10 backdrop-blur-xs p-5 rounded-2xl border border-white/10 space-y-3">
              <div className="text-cyan-300 font-bold text-base flex items-center gap-2">
                <Calendar className="w-4 h-4" /> 11月下旬：みかんの黄色と澄明な海
              </div>
              <p>
                島々の段々畑で温州みかんが鮮やかな橙色に実り、収穫期を迎えます。大気中の湿度が下がり、瀬戸内海の青さと島々の緑、みかんの橙色のコントラストが鮮明。ドライブや爽快な島巡りに最適な気候です。
              </p>
              <div className="text-xs text-cyan-200 font-medium">
                気温目安：今治市街 8〜17℃（日中は快適、夕方は上着推奨）
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs p-5 rounded-2xl border border-white/10 space-y-3">
              <div className="text-amber-300 font-bold text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> 12月：大橋ライトアップと冬の寒鯛
              </div>
              <p>
                週末や年末年始を中心に開催される来島海峡大橋のライトアップが美しい時期。水温低下とともに来島海峡の天然真鯛や車海老の脂乗りがピークに達し、海鮮料理の美味しさが極まります。
              </p>
              <div className="text-xs text-amber-200 font-medium">
                気温目安：今治市街 3〜12℃（海沿いの冷たい海風対策にコート必須）
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xs p-5 rounded-2xl border border-white/10 space-y-3">
              <div className="text-emerald-300 font-bold text-base flex items-center gap-2">
                <Flame className="w-4 h-4" /> 1月：大山祇神社初詣＆開運祈願
              </div>
              <p>
                新年を迎えると、全国から初詣客が大三島の大山祇神社へと参拝に訪れます。境内を包む凛とした空気と神聖な大楠のパワーに触れ、新年の誓いを立てる絶好の時期。鈍川温泉の熱い湯が格別の心地よさです。
              </p>
              <div className="text-xs text-emerald-200 font-medium">
                気温目安：今治市街 1〜10℃（大三島への移動は防寒ジャケット着用）
              </div>
            </div>
          </div>
        </section>

        {/* Model Itinerary & Practical Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-cyan-600 pl-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Route</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の今治＆しまなみ海道を満喫する1泊2日 黄金モデルコース
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              レンタカーで来島海峡大橋を渡り、神の島と名湯をゆったり巡る爽快プラン
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/70 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base text-cyan-800">
                【1日目】松山空港または今治駅からレンタカー出発 → 今治城見学 → 亀老山展望台で冬夕景 → 温泉宿で来島真鯛会席
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                昼前、今治に到着。海水を引き入れた堀が有名な「今治城」を散策し、今治名物の鉄板焼き鳥ランチ。しまなみ海道に入り、大島「亀老山展望台」へ。夕暮れ時、茜色に染まる来島海峡大橋と瀬戸内海の多島美を一望。夜は今治国際ホテルや鈍川温泉・湯ノ浦温泉の宿へチェックイン。名物の鯛めしや伊予牛会席を堪能し、美肌の天然温泉で旅の疲れをほぐします。
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/70 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base text-cyan-800">
                【2日目】しまなみ海道を渡り大三島へ → 大山祇神社初詣＆宝物館鑑賞 → 今治タオル美術館でお土産調達
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                朝、伯方島を経由して大三島へ。日本総鎮守・大山祇神社で新春初詣を行い、樹齢2600年の大楠に祈願。紫陽殿で国宝の武具甲冑をじっくり鑑賞。島内の道の駅「多々羅しまなみ公園」で新鮮なみかんや海産物を購入。午後は今治へ戻り、「タオル美術館」で高品質な今治タオルをお土産に選び、快適に帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Section: Hotel Cards */}
        <section className="space-y-8">
          <div>
            <span className="text-cyan-600 font-bold text-xs uppercase tracking-wider">VERIFIED ACCOMMODATIONS</span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              冬の今治＆しまなみ海道を満喫する厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              楽天トラベル公式APIを通じてレビュー評価、立地、展望露天風呂、来島鯛プランを厳選した最高品質の宿です。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 hover:border-cyan-300 transition-all duration-300 flex flex-col md:flex-row gap-6 lg:gap-8"
              >
                {/* Hotel Image */}
                <div className="md:w-5/12 shrink-0">
                  <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-100 shadow-inner">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full">
                      第{hotel.id}位 厳選
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span className="flex items-center gap-1 text-amber-600 font-bold">
                        <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                        {hotel.rating}
                      </span>
                      <span>レビュー ({hotel.reviews}件)</span>
                      <span className="font-bold text-slate-900 text-sm">{hotel.price}</span>
                    </div>

                    <div className="text-xs text-slate-500 flex items-start gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{hotel.access}</span>
                    </div>
                  </div>
                </div>

                {/* Hotel Information */}
                <div className="md:w-7/12 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-cyan-700 transition">
                      <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                        {hotel.name}
                      </a>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-500 mt-1 italic">
                      {hotel.special}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3">
                      {hotel.story}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs">
                      <div className="bg-cyan-50/70 p-3 rounded-xl border border-cyan-150">
                        <span className="font-bold text-cyan-900 block mb-1">🛏 おすすめ客室の過ごし方</span>
                        <span className="text-slate-700">{hotel.roomTip}</span>
                      </div>
                      <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-150">
                        <span className="font-bold text-amber-900 block mb-1">🍲 冬の絶品グルメ情報</span>
                        <span className="text-slate-700">{hotel.gourmetTip}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <span className="text-xs font-bold text-slate-700 block mb-2">✨ 宿のこだわりハイライト</span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {hotel.highlights.map((hl: string, hIdx: number) => (
                          <li key={hIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                    <a 
                      href={hotel.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold px-6 py-3 rounded-2xl text-xs sm:text-sm shadow-md shadow-cyan-600/20 transition-all hover:shadow-lg"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-slate-200/80 space-y-6">
          <div className="border-b border-slate-150 pb-4">
            <span className="text-cyan-600 font-bold text-xs uppercase tracking-wider">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              冬の今治・しまなみ海道旅行 よくある質問と実用アドバイス
            </h2>
          </div>

          <div className="space-y-6">
            {faqList.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-cyan-600 font-black">Q{index + 1}.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Internal Links */}
        <section className="bg-slate-100 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-cyan-700" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              四国・瀬戸内の冬旅＆関連する冬の厳選特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-cyan-700 mb-1">道後温泉本館リニューアル＆松山城</div>
              <div className="text-slate-500 text-xs">日本最古の名湯と宇和島鯛めし・伊予牛の極上会席名宿</div>
            </Link>
            <Link 
              href="/winter-kagawa-takamatsu-ritsurin-yashima-olive-hamachi-udon-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-cyan-700 mb-1">高松・特別名勝栗林公園と屋島</div>
              <div className="text-slate-500 text-xs">一歩一景の大名庭園と冬の脂の乗るオリーブハマチ・讃岐うどん</div>
            </Link>
            <Link 
              href="/winter-hiroshima-onomichi-senkoji-shimanami-okoze-ramen-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-cyan-700 mb-1">尾道・千光寺初詣＆しまなみオコゼ</div>
              <div className="text-slate-500 text-xs">坂の街の冬晴れパノラマと尾道ラーメン・瀬戸内旬魚の名宿</div>
            </Link>
            <Link 
              href="/winter-tokushima-naruto-onsen-uzushio-naruto-tai-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-cyan-700 mb-1">鳴門海峡の冬渦潮と鳴門鯛</div>
              <div className="text-slate-500 text-xs">大塚国際美術館と鳴門温泉・荒波が育む絶品鳴門わかめ</div>
            </Link>
            <Link 
              href="/winter-kochi-city-tosa-kue-katsuo-akagyu-castle-stay" 
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-xs transition-all group block"
            >
              <div className="font-bold text-slate-900 group-hover:text-cyan-700 mb-1">高知城冬景色と土佐天然クエ鍋</div>
              <div className="text-slate-500 text-xs">ひろめ市場の冬鰹藁焼きタタキ・幻の高級魚クエと土佐あかうし</div>
            </Link>
            <Link 
              href="/features" 
              className="p-4 rounded-2xl bg-cyan-900 text-white hover:bg-cyan-950 transition-all block flex flex-col justify-center items-center text-center font-bold"
            >
              <span>全国の冬特集一覧を見る →</span>
              <span className="text-cyan-200 text-xs font-normal mt-1">11・12・1月の厳選記事を多数掲載</span>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
