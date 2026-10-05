import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, Flame, Landmark, Snowflake, ShieldCheck, Heart, Moon, Coffee, Footprints
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月京都】八坂神社新春初詣＆雪の清水寺！冬の祇園白川の風情と老舗湯豆腐・京懐石の雅宿5選",
  description: "冬の京都・東山は、観光の喧騒が落ち着き古都本来の静寂と雅な旅情が広がる特別な季節。大晦日の「をけら詣り」から新春の活気に包まれる八坂神社、雪化粧をまとう清水寺の舞台、格子戸が連なる祇園白川の石畳。冷えた体を芯から温める老舗の熱々湯豆腐や白味噌雑煮、繊細な冬の京懐石まで。楽天APIから最新取得したホテル ザ セレスティン京都祇園、ウェスティン都ホテル京都など厳選雅宿5選を徹底特集します。",
  keywords: '京都 祇園 ホテル, 清水寺 ホテル, 八坂神社 初詣, 東山 旅館, ウェスティン都ホテル京都, セレスティン京都祇園, ハイアットリージェンシー京都, 京都グランベルホテル, ノーガホテル清水京都, 11月 12月 1月 京都 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kyoto-gion-higashiyama-yasaka-shrine-hatsumode-kiyomizu-stay/"
  },
  openGraph: {
    title: "【11・12・1月京都】八坂神社新春初詣＆雪の清水寺！冬の祇園白川の風情と老舗湯豆腐・京懐石の雅宿5選",
    description: "冬の京都・東山は、観光の喧騒が落ち着き古都本来の静寂と雅な旅情が広がる特別な季節。大晦日の「をけら詣り」から新春の活気に包まれる八坂神社、雪化粧をまとう清水寺の舞台、格子戸が連なる祇園白川の石畳。冷えた体を芯から温める老舗の熱々湯豆腐や白味噌雑煮、繊細な冬の京懐石まで。楽天APIから最新取得したホテル ザ セレスティン京都祇園、ウェスティン都ホテル京都など厳選雅宿5選を徹底特集します。",
    url: 'https://croud-travel.com/winter-kyoto-gion-higashiyama-yasaka-shrine-hatsumode-kiyomizu-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/160991/160991.jpg",
      width: 1200,
      height: 630,
      alt: '冬の京都八坂神社新春初詣と雪の清水寺'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月京都】八坂神社新春初詣＆雪の清水寺！冬の祇園白川の風情と老舗湯豆腐・京懐石の雅宿5選",
    description: "冬の京都・東山は、観光の喧騒が落ち着き古都本来の静寂と雅な旅情が広がる特別な季節。大晦日の「をけら詣り」から新春の活気に包まれる八坂神社、雪化粧をまとう清水寺の舞台、格子戸が連なる祇園白川の石畳。冷えた体を芯から温める老舗の熱々湯豆腐や白味噌雑煮、繊細な冬の京懐石まで。楽天APIから最新取得したホテル ザ セレスティン京都祇園、ウェスティン都ホテル京都など厳選雅宿5選を徹底特集します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/160991/160991.jpg"]
  }
};

export default function KyotoGionHigashiyamaWinterPage() {
  const hotelsData = [
            {
              id: 1,
              name: "ホテル　ザ　セレスティン京都祇園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/160991/160991.jpg",
              rating: 4.67,
              reviews: 236,
              price: "¥40,424〜",
              access: "京都駅八条口より無料シャトルバスで約10分。京阪電車「祇園四条」より徒歩10分。阪急電車「京都河原町」より徒歩12分。",
              special: "祇園　八坂通りに位置し、京都駅より無料送迎バスで約10分。名店八坂圓堂の食事と大浴場も満喫。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F160991%2F160991.html",
              story: "祇園の南、八坂通沿いに佇み、建仁寺まで徒歩数分、八坂の塔（法観寺）を間近に望む閑静な地に位置する「ホテル ザ セレスティン京都祇園」。日本の伝統美と現代の快適性が調和した洗練の和モダンホテルです。館内には竹や和紙、信楽焼のアートが随所に配され、地下には宿泊者専用の広々とした大浴場を完備。冬の東山の散策で冷えた体を、御影石造りの温かい湯船で優しく温めることができます。最大の贅沢は朝食。京都を代表する天ぷらの名店「八坂 圓堂」が館内レストランを手掛け、職人が目の前で揚げる熱々の名物・名代変わり揚げ（トウモロコシ天や季節野菜天）や、お出汁香る京おばんざいを朝から心ゆくまで堪能できます。祇園や清水寺への早朝散策の拠点としても至高のロケーションです。",
              roomTip: "スーペリアツイン（八坂通側）。大きな窓から京都の町並みを感じられる落ち着いた客室。加湿空気清浄機と快適な寝具で冬も心地よい眠り。",
              gourmetTip: "「八坂 圓堂」の朝食ビュッフェ。目の前で揚げる出来立てサクサクの天ぷらと、京都の旬食材をふんだんに使った贅沢な朝粥・京料理。",
              highlights: [
                "八坂通沿い・建仁寺至近・大浴場完備・名店「八坂 圓堂」の揚げたて朝食天ぷら",
                "信楽焼や和紙アートが彩る和モダン・冬の祇園早朝散策の黄金ロケーション",
                "客室御影石風呂や快適な寝具・八坂の塔を望む静寂な大人の隠れ家"
              ]
            },
            {
              id: 2,
              name: "ウェスティン都ホテル京都",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1167/1167.jpg",
              rating: 4.72,
              reviews: 2965,
              price: "¥39,831〜",
              access: "京都駅八条口より無料送迎バスあり / 地下鉄東西線＜蹴上駅＞から徒歩2分 / 南禅寺・哲学の道まですぐ",
              special: "心地よいという新しいラグジュアリー。★魅惑なグルメの世界と天然温泉SPAでお寛ぎいただけます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1167%2F1167.html",
              story: "東山・蹴上の高台に佇み、130年を超える歴史を誇る名門「ウェスティン都ホテル京都」。広大な敷地内には近代造園の先駆者・小川治兵衛作庭の名勝庭園「佳水園庭園」を有し、冬には静謐な雪景色が広がります。最大の魅力は、敷地内の地下から湧出する天然温泉を利用した総合スパ施設「SPA 華頂（かちょう）」です。総面積約2,100平米を誇る京都屈指のスケールで、琵琶湖疏水をイメージした優美なデザインの内湯や、東山の冷涼な外気を感じながら浸かる半露天風呂、サウナを完備。客室は数寄屋風の伝統美が息づく和室から、ヘブンリーベッドを備えたラグジュアリー洋室まで多彩。名僧ゆかりの南禅寺や平安神宮への新春初詣にも至近の最高峰リゾートです。",
              roomTip: "デラックスツイン（平安神宮ビュー）。冬の澄んだ空気の中に平安神宮の大鳥居や比叡山を遠望。雲の上の寝心地「ヘブンリーベッド」完備。",
              gourmetTip: "ドミニク・ブシェ キョート「ル・レストラン」またはオールデイダイニング「洛空」。冬の京都の地野菜と厳選肉を用いた極上フレンチ。",
              highlights: [
                "東山蹴上・総面積2100平米の天然温泉「SPA 華頂」・名勝庭園佳水園・極上リゾート",
                "敷地内湧出の天然温泉と半露天風呂・平安神宮や南禅寺への冬散策至近",
                "京都屈指の伝統と格式・ヘブンリーベッドでの極上安眠・多彩な一流ダイニング"
              ]
            },
            {
              id: 3,
              name: "ハイアット　リージェンシー　京都",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/50636/50636.jpg",
              rating: 4.29,
              reviews: 665,
              price: "¥36,793〜",
              access: "ＪＲ京都駅より車で約５分／京阪七条駅より徒歩で５分",
              special: "自然と歴史を伝える緑豊かな東山に位置。コンテンポラリージャパニーズをコンセプトにデザインの館内",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50636%2F50636.html",
              story: "東山七条の落ち着いた文教エリアに佇み、三十三間堂や京都国立博物館に隣接する「ハイアット リージェンシー 京都」。世界的建築家・杉本貴志氏率いるスーパーポテトが手掛けたインテリアは、日本の伝統的な木工芸や白木、竹林、漆の美意識を現代的に昇華させた圧巻の空間です。館内の中庭には手入れの行き届いた竹林が広がり、冬の雪が竹の葉に積もる姿は絵画のような風情。客室には京都の伝統織物や行灯をモチーフにした照明が配され、贅沢な寛ぎを約束します。館内のイタリアン「トラットリア セッテ」の石窯ピッツァや、日本料理「東山（Touzan）」での冬の鴨鍋・炭火焼き会席など、美食の評価も極めて高い大人の隠れ家です。",
              roomTip: "デラックスバルコニーキング。中庭の竹林を望むプライベートバルコニー付。冬の朝、雪の静寂に包まれる竹林を眺めながら過ごす贅沢。",
              gourmetTip: "日本料理「東山（Touzan）」。京都の冬の味覚である聖護院かぶらや寒鰤、京都産和牛を炭火と繊細な出汁で味わう極上会席料理。",
              highlights: [
                "東山七条・三十三間堂隣接・スーパーポテト設計の洗練空間・竹林の中庭",
                "伝統織物と白木が香るラグジュアリー客室・日本料理「東山」の冬会席",
                "世界的ブランドの上質ホスピタリティ・雪の積もる中庭竹林の風情"
              ]
            },
            {
              id: 4,
              name: "京都グランベルホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/162930/162930.jpg",
              rating: 4.80,
              reviews: 306,
              price: "¥18,400〜",
              access: "「祇園四条駅」より徒歩2分。「京都河原町駅」より徒歩7分。「京都駅」よりタクシー約10分。「八坂神社」まで徒歩約8分。",
              special: "祇園四条駅から徒歩2分♪お得なプラン販売中！伝統美と快適さを備えた客室。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F162930%2F162930.html",
              story: "京阪本線「祇園四条駅」から徒歩わずか2分、花街・祇園の中心に位置しながら隠れ家のような佇まいを見せる「京都グランベルホテル」。世界的クリエイターが手掛けた館内は、祇園の伝統的な町家文化を現代アートと融合させたデザイナーズ空間です。地下1階には庭園を望む宿泊者専用大浴場「komorebi（木漏れ日）」が備わり、坪庭に差し込む柔らかな光と冬の雪景色を眺めながら温かい湯浴みが楽しめます。1階のラウンジではウェルカムドリンクや夜のバータイムを提供。客室は靴を脱いで上がる小上がりスタイルの畳ベッドルームなど、和の寛ぎと機能美が追求されています。花見小路や八坂神社へ夜の静かな散策に出かけるのにも抜群の立地です。",
              roomTip: "プレミアムキング（和洋室）。畳の小上がりに特注ベッドを配置。障子越しに京都の情緒を感じる落ち着いたデザイン空間。",
              gourmetTip: "朝食ビュッフェ。京都老舗の漬物や手作り豆腐、出汁の効いたおばんざいが並ぶ和洋朝食。目の前で焼き上げるお魚料理も大好評。",
              highlights: [
                "祇園四条駅徒歩2分・坪庭を望む大浴場「komorebi」・小上がり畳ベッドルーム",
                "花街の伝統とモダンアートが融合・夜の祇園白川や花見小路散策へ直行",
                "口コミ高評価4.8点の超人気宿・フリーラウンジサービスとバー完備"
              ]
            },
            {
              id: 5,
              name: "ＮＯＨＧＡ　ＨＯＴＥＬ　ＫＩＹＯＭＩＺＵ　ＫＹＯＴＯ（ノーガホテル清水京都）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/183230/183230.jpg",
              rating: 4.65,
              reviews: 124,
              price: "¥18,690〜",
              access: "京阪本線「清水五条」駅 4番出口より徒歩7分",
              special: "世界遺産・清水寺のほど近く。伝統と新しい感性が織りなす、ここでしか出逢えない京都へ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183230%2F183230.html",
              story: "京阪「清水五条駅」から徒歩約7分、清水寺へと続く五条坂の麓に位置するライフスタイルホテル「ＮＯＨＧＡ ＨＯＴＥＬ ＫＩＹＯＭＩＺＵ ＫＹＯＴＯ（ノーガホテル清水京都）」。京都の伝統工芸や気鋭のクリエイターと協働し、清水焼の食器や西陣織のアートが館内を彩ります。ホテルの名物は最上階の「ルーフトップバー」。冬の澄み渡る夜空の下、ライトアップされた京都タワーや東山の山並み、清水寺方面の夜景を温かいホットカクテル片手に一望できます。1階のベーカリーでは毎朝職人が焼き上げる香ばしいクロワッサンやハードパンを提供。客室には上質なBluetoothスピーカーやオリジナルアメニティが揃い、五感で京都の洗練を味わえる新しい滞在スタイルを提案しています。",
              roomTip: "デラックスツイン。清水焼のオリジナル洗面ボウルや京都の職人技が光る家具。広々とした空間でゆったりと冬の旅の思い出を振り返る。",
              gourmetTip: "「CICON by NOHGA HOTEL」。炭火焼きグリルをメインにしたイタリアン。京都近郊の冬野菜や厳選牛を豪快かつ繊細に仕上げたディナー。",
              highlights: [
                "清水寺徒歩圏・ルーフトップバーからの京都パノラマ夜景・自家製ベーカリー併設",
                "清水焼の伝統工芸と現代アートが調和・炭火グリルイタリアン「CICON」",
                "五条坂近く・早朝の雪の清水寺参拝に最適な高感度ライフスタイルホテル"
              ]
            }
  ];

  const faqData = [
  {
    "q": "八坂神社の新春初詣や大晦日の「をけら詣り」とはどんな行事ですか？",
    "a": "八坂神社（祇園社）は京都を代表する厄除け・縁結びの古社です。大晦日の夜から元旦未明にかけて行われる「をけら詣り（白木を焚く厄除け神事）」では、「をけら火」と呼ばれる御神火を火縄に移し、火が消えないようクルクルと回しながら持ち帰って新年の雑煮を炊く伝統行事として有名です。正月三が日は全国から100万人以上の初詣客が参拝し、厄除け守りや新春の干支絵馬を授かります。さらに1月8日〜12日には近くの京都ゑびす神社で「十日ゑびす（初ゑびす）」が開催され、商売繁盛を願う笹を持った参拝者で大変賑わいます。"
  },
  {
    "q": "冬の清水寺の見どころや雪景色のベストな時間帯は？",
    "a": "世界遺産・清水寺は、冬になると「清水の舞台（本堂）」を囲む錦雲渓（きんうんけい）の木々が葉を落とし、雪が降ると白銀の木々と舞台の懸造り（かけづくり）の木組みのコントラストが息を呑む絶景となります。舞台からは雪化粧した京都盆地と子安塔が一望できます。雪景色の清水寺を鑑賞するなら、午前6時の開門直後がベストです。まだ誰も踏み固めていない純白の雪と、朝日に照らされる朱塗りの仁王門や三重塔の美しさは冬の京都ならではの感動です。"
  },
  {
    "q": "冬の京都東山で絶対に味わいたい名物グルメと老舗料理は？",
    "a": "冬の京都で必食なのが、南禅寺周辺や祇園で味わう「湯豆腐」です。利尻昆布の出汁で温められた滑らかな豆腐に特製醤油たれと薬味を添えていただく素朴かつ奥深い味は、冷えた体を芯から温めてくれます。また、お正月前後に味わえる「白味噌仕立ての京雑煮（丸餅と頭芋、金時人参入り）」や、京都の冬の伝統漬物「千枚漬け」「すぐき」、聖護院大根や海老芋を使った冬の京懐石・おばんざいも外せない逸品です。"
  },
  {
    "q": "11月・12月・1月の京都東山の気温と底冷え対策・歩きやすい服装は？",
    "a": "京都の冬は「京の底冷え」と呼ばれ、盆地特有の湿気を帯びた刺すような寒さが足元から忍び寄ります。寺院や神社の拝観では靴を脱いで板の間の本堂や回廊を歩く機会が多いため、厚手の靴下や重ね履き用のソックス、足用カイロの準備が極めて重要です。服装は風を通さないロング丈のコート、マフラー、手袋に加え、産寧坂・二寧坂などの石畳や階段を安全に歩けるよう、滑り止めの効いた歩きやすいフラットシューズやショートブーツを選びましょう。"
  },
  {
    "q": "冬の祇園・東山・清水寺を巡る1泊2日の王道散策コースは？",
    "a": "1日目は京都駅から市バスまたはタクシーで東山へ。南禅寺で名物の熱々湯豆腐ランチを味わった後、青蓮院門跡や知恩院を巡り八坂神社へ参拝。夕方に祇園白川の辰巳大明神周辺や花見小路の石畳を散策し、夜は老舗割烹や町家ダイニングで冬の京料理を堪能。2日目は早朝の清らかな空気の中、産寧坂・二寧坂を歩いて清水寺の開門参拝へ。音羽の滝の霊水をいただき、五条坂や茶わん坂で清水焼の手土産を購入して京都駅へ戻るコースが、冬の京都の静寂と雅を味わい尽くす黄金ルートです。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-kyoto-gion-higashiyama-yasaka-shrine-hatsumode-kiyomizu-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-kyoto-gion-higashiyama-yasaka-shrine-hatsumode-kiyomizu-stay"
        },
        "headline": "【11・12・1月京都】八坂神社新春初詣＆雪の清水寺！冬の祇園白川の風情と老舗湯豆腐・京懐石の雅宿5選",
        "description": "冬の京都・東山は、観光の喧騒が落ち着き古都本来の静寂と雅な旅情が広がる特別な季節。大晦日の「をけら詣り」から新春の活気に包まれる八坂神社、雪化粧をまとう清水寺の舞台、格子戸が連なる祇園白川の石畳。冷えた体を芯から温める老舗の熱々湯豆腐や白味噌雑煮、繊細な冬の京懐石まで。楽天APIから最新取得したホテル ザ セレスティン京都祇園、ウェスティン都ホテル京都など厳選雅宿5選を徹底特集します。",
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
            "name": "京都・祇園東山 冬特集",
            "item": "https://croud-travel.com/winter-kyoto-gion-higashiyama-yasaka-shrine-hatsumode-kiyomizu-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map((f: any) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  };


  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-purple-500 selection:text-white pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <header className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-purple-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-400 via-rose-500 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
            <Landmark className="w-4 h-4 text-purple-300" />
            <span>11月・12月・1月冬の古都雅特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-6">
            八坂神社新春初詣＆雪の清水寺！<br className="hidden sm:inline" />
            冬の祇園白川の風情と老舗湯豆腐・京懐石の雅宿5選
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            秋の紅葉が過ぎ去り、観光客の波が引いた11月下旬から1月にかけて、京都・東山は本来の静謐さと幽玄な美を取り戻します。大晦日の御神火を灯す八坂神社「をけら詣り」から新春の厳かな初詣、白銀の雪をまとう清水の舞台、格子戸が連なる祇園白川の石畳。冷えた体を芯から温める老舗の湯豆腐や白味噌雑煮とともに、古都の雅に心洗われる大人の冬旅へご案内します。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-200 border-t border-slate-700/60 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-purple-400 shrink-0" />
              <span>シーズン：11月下旬〜1月下旬</span>
            </div>
            <div className="flex items-center gap-2">
              <Landmark className="w-4 h-4 text-purple-400 shrink-0" />
              <span>八坂神社初詣＆雪の清水寺</span>
            </div>
            <div className="flex items-center gap-2">
              <Moon className="w-4 h-4 text-purple-400 shrink-0" />
              <span>祇園白川・花見小路の静寂</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-amber-400 shrink-0" />
              <span>熱々湯豆腐＆冬の京懐石</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Section 1: エリア解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-purple-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Kyoto Winter Solitude</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Landmark className="w-6 h-6 text-purple-500 shrink-0" />
              静寂が魅せる本来の京都美！冬の祇園・東山散策の醍醐味
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              「冬の京都こそ、真の京都の姿がある」としばしば語られます。観光のトップシーズンである秋の喧騒が去り、冬木立に包まれる11月下旬から1月にかけての東山は、研ぎ澄まされた空気と静寂が支配する特別な時間を迎えます。
            </p>
            <p>
              その中心となるのが、祇園の鎮守社として平安の昔から京の町を見守り続けてきた「八坂神社」です。大晦日の夜から元旦にかけて行われる「をけら詣り」は、薬草であるオケラを焚いた神火を火縄に移して持ち帰り、元旦の雑煮を炊いて一年の無病息災を祈る京都ならではの風物詩。新春を迎えると、厄除けや商売繁盛を願う参拝客で華やかな賑わいを見せます。
            </p>
            <p>
              八坂神社からねねの道、二寧坂（二年坂）、産寧坂（三年坂）の石畳を歩いて辿り着く「清水寺」は、冬に雪が舞い降りると水墨画のような絶景を生み出します。139本のケヤキの柱が支える「清水の舞台」に雪が積もり、眼下に広がる音羽山の雪谷と遠く霞む京都の市街地を望む光景は、息を呑む厳かさに満ちています。
            </p>
            <p>
              そして夕暮れ時、柳の枝が揺れる祇園白川や花見小路の茶屋街を歩けば、千本格子の窓から漏れる温かな明かりと、石畳に響く下駄の音が冬の旅情をかき立てます。冷え切った体を芯から温めてくれるのが、南禅寺周辺の老舗で供される熱々の「湯豆腐」や、白味噌仕立ての丸餅雑煮、出汁の効いた旬の京懐石。五感のすべてが清められる、大人の至福がここにあります。
            </p>
            <p>
              また、祇園の南に位置する京都最古の禅寺「建仁寺」では、冬の枯山水庭園「潮音庭（ちょうおんてい）」や「大雄苑（だいおうえん）」に腰を下ろすと、研ぎ澄まされた冷気の中で心静かに自分自身と向き合う禅の時間を過ごせます。法堂の天井に描かれた大迫力の双龍図や風神雷神図屏風（高精細複製画）の鑑賞も、冬の静かな拝観だからこそじっくりと深く味わうことができます。
            </p>
            <p>
              さらに東山の奥、南禅寺の境内を抜けると現れるローマ水道橋を模した赤レンガの「水路閣（すいろかく）」。明治の近代化遺産と古刹の杉木立が調和するこの空間は、粉雪が舞うとまるで絵画のようなノスタルジーを漂わせます。八坂通りの坂道から見上げる「八坂の塔（法観寺）」のシルエット越しに広がる夕焼け空も、冬の京都を訪れた旅人だけが出会える珠玉の一コマです。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-purple-50/60 rounded-xl p-5 border border-purple-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-purple-600" />
                <span>八坂神社初詣＆をけら詣り</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                大晦日の厄除け神火から新春の初詣、1月の初ゑびすまで。千年の都に受け継がれる新春の祈りと伝統行事。
              </p>
            </div>
            <div className="bg-rose-50/60 rounded-xl p-5 border border-rose-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Snowflake className="w-5 h-5 text-rose-600" />
                <span>雪の清水寺と石畳の坂道</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                清水の舞台を白銀が包み込む幽玄の雪景色。産寧坂・二寧坂の石畳を早朝に歩く贅沢な静寂散策。
              </p>
            </div>
            <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-amber-600" />
                <span>老舗の熱々湯豆腐＆京懐石</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                昆布出汁で温める滑らかな南禅寺湯豆腐や、白味噌仕立ての京雑煮、旬の聖護院かぶらを使った冬の京料理。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: 厳選ホテル紹介 */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-purple-600 font-bold text-xs sm:text-sm tracking-wider uppercase">Refined Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              祇園＆東山・清水寺周辺で冬を愉しむ名宿5選
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              楽天トラベルAPIより最新の空室・料金・口コミデータをリアルタイム取得。冬の古都を雅に彩る至高の5軒を厳選しました。
            </p>
          </div>

          <div className="space-y-12">
            {hotelsData.map((h: any) => (
              <div key={h.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Hotel Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-100 pb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="bg-purple-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
                          厳選宿 #{h.id}
                        </span>
                        <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-purple-600" />
                          {h.access}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-purple-600 transition-colors">
                        <a href={h.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                          {h.name}
                          <ExternalLink className="w-4 h-4 text-slate-400" />
                        </a>
                      </h3>
                      <p className="text-xs sm:text-sm text-purple-700 font-medium">{h.special}</p>
                    </div>

                    <div className="flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center shrink-0 bg-slate-50 sm:bg-transparent p-3 sm:p-0 rounded-xl">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="text-base sm:text-lg font-extrabold text-slate-900">{h.rating}</span>
                        <span className="text-xs text-slate-500">（{h.reviews}件）</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-500 block">参考宿泊料金（目安）</span>
                        <span className="text-lg sm:text-xl font-bold text-rose-600">{h.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hotel Image and Story Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-5 relative group overflow-hidden rounded-xl bg-slate-100 min-h-[240px]">
                      <img 
                        src={h.img} 
                        alt={h.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    <div className="lg:col-span-7 space-y-4 text-slate-600 text-sm leading-relaxed">
                      <p>{h.story}</p>
                      
                      <div className="bg-slate-50 rounded-xl p-4 space-y-2 border border-slate-150">
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-purple-600" />
                          <span>おすすめ客室：</span>
                          <span className="font-normal text-slate-700">{h.roomTip}</span>
                        </div>
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <Utensils className="w-4 h-4 text-amber-600" />
                          <span>冬の絶品美食：</span>
                          <span className="font-normal text-slate-700">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="border-t border-slate-100 pt-5">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">この宿の注目ポイント</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      {h.highlights.map((hl: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-1.5 text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2 text-right">
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-700 hover:to-rose-700 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-sm hover:shadow transition-all w-full sm:w-auto"
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

        {/* Section 3: 黄金のモデルコース */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-purple-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Ancient Capital Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-6 h-6 text-purple-500 shrink-0" />
              1泊2日！冬の八坂神社初詣＆雪の清水寺・祇園湯豆腐 雅モデルコース
            </h2>
          </div>

          <div className="relative border-l-2 border-purple-200 ml-4 pl-6 space-y-8 my-4">
            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">1日目 11:30</span>
              <h3 className="text-base font-bold text-slate-900">京都駅到着から東山へ・名店「南禅寺 順正」で熱々湯豆腐ランチ</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                新幹線で京都駅へ到着後、地下鉄またはタクシーで蹴上・南禅寺へ。雪景色の日本庭園を眺めながら、昆布出汁が香る名物の熱々湯豆腐を味わいます。
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">1日目 13:30</span>
              <h3 className="text-base font-bold text-slate-900">知恩院の三門から八坂神社へ・新春厄除け参拝</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                国宝・知恩院三門の威容を見上げ、円山公園を抜けて八坂神社へ。朱塗りの西楼門や本殿を参拝し、美御前社で湧き出る「美容水」で美徳を祈願。
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">1日目 15:30</span>
              <h3 className="text-base font-bold text-slate-900">祇園白川＆花見小路の石畳散策と老舗甘味処</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                辰巳大明神周辺の柳並木と白川のせせらぎを愛で、花見小路へ。老舗茶房「鍵善良房」で冬の温かい葛切りやぜんざいを味わい、ひと息。
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">1日目 17:30</span>
              <h3 className="text-base font-bold text-slate-900">ホテルにチェックイン・大浴場やスパで冷えた体を癒やす</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                東山の洗練ホテルへ。大浴場や天然温泉で手足を伸ばし、散策の冷えを芯から解きほぐします。
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">1日目 19:30</span>
              <h3 className="text-base font-bold text-slate-900">冬の京懐石ディナーまたは町家レストランでの美食時間</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                聖護院かぶらや寒鰤、京都産和牛など冬の滋味を凝縮した会席料理を地酒とともに賞味。静寂に包まれた祇園の夜をゆっくりと過ごします。
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">2日目 06:30</span>
              <h3 className="text-base font-bold text-slate-900">早朝の静寂！清水寺の開門参拝＆産寧坂・二寧坂の雪景色</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                人影のない早朝の清水寺へ。朝靄や雪をまとう清水の舞台から京都盆地を望み、音羽の滝の清らかな水をいただきます。
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">2日目 08:30</span>
              <h3 className="text-base font-bold text-slate-900">宿自慢の贅沢和朝食（揚げたて天ぷらやおばんざい）</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                散策後、宿で名店仕込みの出来立て朝食や温かい京粥を堪能。お腹と心を優しく満たします。
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">2日目 11:00</span>
              <h3 className="text-base font-bold text-slate-900">五条坂で清水焼選び＆京都駅でお土産を購入して帰路へ</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                風情ある窯元で冬の酒器やお茶碗を選び、京都駅の「ジェイアール京都伊勢丹」等で千枚漬けや京銘菓を買い求めて帰路へつきます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: 実用ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-purple-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Travel Advice</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-purple-500 shrink-0" />
              冬の京都観光！「底冷え」対策と寺院拝観マナーの知恵
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600">
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Footprints className="w-5 h-5 text-purple-600" />
                足元からの底冷え対策と脱ぎ履きしやすい靴
              </h3>
              <p className="leading-relaxed">
                京都の冬の冷え込みは盆地特有で、足元からじわじわと芯に寒さが染み渡ります。特に清水寺や建仁寺、知恩院などの寺院本堂拝観では、靴を脱いで木造の板の間を歩くため、足裏が強烈に冷たくなります。
              </p>
              <p className="leading-relaxed">
                ウール混の厚手ソックスやインナーソックスの重ね履き、靴下用カイロの活用が非常に有効です。また、脱ぎ履きが頻繁にあるため、紐靴よりも着脱がスムーズなサイドゴアブーツやスリッポン形状の防寒靴が適しています。
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Moon className="w-5 h-5 text-purple-600" />
                早朝参拝の活用と市バス混雑回避
              </h3>
              <p className="leading-relaxed">
                冬の東山は日中でも夏や秋ほど混雑しませんが、清水寺や八坂神社をゆったり参拝するなら「午前7時〜8時台の早朝散策」が圧倒的におすすめです。朝の澄んだ光と静寂は、昼間とは全く異なる神聖な美しさがあります。
              </p>
              <p className="leading-relaxed">
                また京都駅からの移動は、時間帯によって市バスが混雑・遅延することがあります。地下鉄東西線（東山駅・蹴上駅）や京阪本線（祇園四条駅・清水五条駅）の鉄道を組み合わせると、時間を正確に読めて快適です。
              </p>
            </div>

            <div className="space-y-3 md:col-span-2 bg-slate-50 p-4 rounded-xl border border-slate-150">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-purple-600" />
                夕暮れ〜夜の石畳と提灯明かり！冬の大人の夜散策マナー
              </h3>
              <p className="leading-relaxed">
                日が落ちた後の花見小路や祇園白川、ねねの道は、軒先の提灯や行灯が石畳にほの温かい光を落とし、京都屈指の情緒的な美しさを放ちます。冬は人通りが少なく静かに歩けるのが最大の魅力ですが、舞妓さん・芸妓さんへの撮影マナー（追いかけ撮影や無断撮影は禁止）や、私道での立ち入り禁止ルールは厳格に守りましょう。散策の合間に暖簾をくぐり、温かいお薄（抹茶）や甘酒、地酒を味わうのが冬の粋な過ごし方です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: よくある質問 FAQ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-purple-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の京都・祇園＆東山・清水寺観光 よくある質問
            </h2>
          </div>

          <div className="divide-y divide-slate-100 space-y-4">
            {faqData.map((item: any, idx: number) => (
              <div key={idx} className="pt-4 first:pt-0 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-md shrink-0 font-extrabold mt-0.5">Q</span>
                  <span>{item.q}</span>
                </h3>
                <div className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: 関連内部リンク */}
        <section className="bg-gradient-to-br from-slate-950 to-purple-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            あわせて読みたい！冬の人気特集記事
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            当サイトでは、全国の冬の絶景・歴史・温泉・美食を徹底取材したオリジナル特集を公開しています。冬の旅行計画にお役立てください。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <Link 
              href="/winter-kyoto-fushimi-inari-hatsumode-uji-sake-matcha-stay" 
              className="bg-white/10 hover:bg-white/20 p-3.5 rounded-xl border border-white/10 transition-colors text-xs sm:text-sm font-medium flex items-center justify-between"
            >
              <span>伏見稲荷大社初詣＆宇治抹茶！冬の伏見酒蔵と京名宿</span>
              <span className="text-purple-300">→</span>
            </Link>
            <Link 
              href="/winter-nara-park-kasuga-taisha-hatsumode-todaiji-yamatogyu-stay" 
              className="bg-white/10 hover:bg-white/20 p-3.5 rounded-xl border border-white/10 transition-colors text-xs sm:text-sm font-medium flex items-center justify-between"
            >
              <span>春日大社初詣＆東大寺大仏殿冬景色！大和牛すき焼き名宿</span>
              <span className="text-purple-300">→</span>
            </Link>
            <Link 
              href="/winter-hyogo-kobe-port-ikuta-shrine-luminarie-beef-stay" 
              className="bg-white/10 hover:bg-white/20 p-3.5 rounded-xl border border-white/10 transition-colors text-xs sm:text-sm font-medium flex items-center justify-between"
            >
              <span>生田神社初詣＆神戸ルミナリエ！メリケンパーク冬夜景名宿</span>
              <span className="text-purple-300">→</span>
            </Link>
            <Link 
              href="/winter-osaka-castle-nakanoshima-illumination-tenmangu-stay" 
              className="bg-white/10 hover:bg-white/20 p-3.5 rounded-xl border border-white/10 transition-colors text-xs sm:text-sm font-medium flex items-center justify-between"
            >
              <span>大阪城イルミナージュ＆大阪天満宮初詣！水都夜景となにわ名宿</span>
              <span className="text-purple-300">→</span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-kyoto-gion-higashiyama-yasaka-shrine-hatsumode-kiyomizu-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
