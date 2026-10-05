import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, Flame, Anchor, Landmark, Castle, Mountain, TreePine, Snowflake, ShieldCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月奈良】春日大社新春開運初詣＆東大寺大仏殿冬景色！大和牛すき焼きと古都の静謐に寛ぐ厳選宿5選",
  description: "1300年の歴史が静かに息づく古都・奈良の冬。世界遺産・春日大社の朱塗りの社殿と無数の釣燈籠が白雪に映える新春開運初詣、東大寺大仏殿の厳かな佇まい、冬毛でもふもふと暖かそうな奈良公園の鹿たちとの出会い。澄み切った夕暮れには若草山が茜色から深い藍色へと染まり、滋味豊かな大和牛すき焼きや飛鳥鍋、三輪そうめんのにゅうめんが冷えた体を優しく温めます。楽天APIから最新取得した奈良公園・ならまち・奈良駅周辺の格調高き名宿5選を徹底特集します。",
  keywords: '奈良 ホテル, 春日大社 初詣 ホテル, 東大寺 大仏殿, 奈良公園 鹿, 奈良ホテル, JWマリオット奈良, 紫翠ラグジュアリーコレクション奈良, 大和牛 すき焼き, 11月 12月 1月 奈良 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-nara-park-kasuga-taisha-hatsumode-todaiji-yamatogyu-stay/"
  },
  openGraph: {
    title: "【11・12・1月奈良】春日大社新春開運初詣＆東大寺大仏殿冬景色！大和牛すき焼きと古都の静謐に寛ぐ厳選宿5選",
    description: "1300年の歴史が静かに息づく古都・奈良の冬。世界遺産・春日大社の朱塗りの社殿と無数の釣燈籠が白雪に映える新春開運初詣、東大寺大仏殿の厳かな佇まい、冬毛でもふもふと暖かそうな奈良公園の鹿たちとの出会い。澄み切った夕暮れには若草山が茜色から深い藍色へと染まり、滋味豊かな大和牛すき焼きや飛鳥鍋、三輪そうめんのにゅうめんが冷えた体を優しく温めます。楽天APIから最新取得した奈良公園・ならまち・奈良駅周辺の格調高き名宿5選を徹底特集します。",
    url: 'https://croud-travel.com/winter-nara-park-kasuga-taisha-hatsumode-todaiji-yamatogyu-stay',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80' }]
  }
};

export default function NaraParkKasugaWinterPage() {
  const hotels = [
            {
              id: 1,
              name: "奈良ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1148/1148.jpg",
              rating: 4.66,
              reviews: 1734,
              price: "¥17,800〜",
              access: "近鉄奈良駅東改札口B出口より徒歩約15分。タクシーで5分。路線バス（天理方面行き3番のりば）約7分",
              special: "関西の迎賓館として1909年創業。伝統のおもてなしで心に残る旅を。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1148%2F1148.html",
              story: "明治42年（1909年）創業、「関西の迎賓館」として皇族やアインシュタイン、ヘレン・ケラーなど世界のVIPを迎えてきたクラシックホテルの最高峰「奈良ホテル」。奈良公園の高台に位置し、辰野金吾が設計した桃山御殿風檜造りの本館は、創業当時の格調高い佇まいをそのまま残しています。ロビーの赤絨毯やマントルピース（暖炉）、大正時代の調度品に囲まれた館内は、冬の澄んだ冷気の中で一段と優美な温もりを放ちます。メインダイニングルーム「三笠」では、歴代のシェフが受け継ぐ伝統のフランス料理を銀器とともに堪能。春日大社や興福寺へも朝の静かな時間に徒歩で散策できる、日本屈指の歴史的名宿です。",
              roomTip: "本館クラシックツイン（格天井・マントルピース付）。明治の美意識が息づく高い天井と大正モダンな照明。歴史と静寂に包まれる特別な宿泊体験。",
              gourmetTip: "メインダイニングルーム「三笠」の冬期ディナーコース。伝統のコンソメスープと、厳選された大和牛フィレ肉のローストが奏でる極上フレンチ。",
              highlights: [
                "明治42年創業「関西の迎賓館」・辰野金吾設計の桃山御殿風本館・春日大社や東大寺へ徒歩至近",
                "メインダイニング三笠の極上フレンチ・創業当時の暖炉や赤絨毯が放つ圧倒的なクラシック情緒",
                "アインシュタインが弾いたピアノが残るラウンジ・冬の静寂な古都の朝散歩に最高のロケーション"
              ]
            },
            {
              id: 2,
              name: "ＪＷマリオット・ホテル奈良",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/178614/178614.jpg",
              rating: 4.12,
              reviews: 133,
              price: "¥18,912〜",
              access: "近鉄奈良線　新大宮駅より徒歩にて約10分",
              special: "最高級ラグジュアリーホテルが古都・奈良に日本初上陸。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178614%2F178614.html",
              story: "奈良県初となる国際的最高級ラグジュアリーホテルとして誕生した「JWマリオット・ホテル奈良」。奈良の豊かな自然や伝統的な木造建築、神使である鹿のモチーフを現代アートと融合させた洗練の空間が広がります。全室にシモンズ社製特注ピロートップベッドと大理石の豪華バスルームを完備。館内には屋内温水プールや24時間フィットネス、極上のスパトリートメントを備え、冬の観光で冷えた体を最高峰の設備で癒やしてくれます。日本料理「校倉（あぜくら）」では、鉄板焼や寿司、会席料理で冬の大和牛や大和野菜を贅沢に味わえます。",
              roomTip: "エグゼクティブスイート（92平米）。広々とした独立リビングとウォークインクローゼット、専用ラウンジアクセス付きの至福の滞在。",
              gourmetTip: "日本料理「校倉」の鉄板焼コース。目の前で焼き上げられる極上大和牛サーロインと、冬の三輪手延べそうめんや大和茶を使ったデザート。",
              highlights: [
                "奈良初最高峰インターナショナルホテル・現代アートと奈良の伝統美が融合・屋内プール＆スパ完備",
                "日本料理校倉の鉄板焼と大和牛ステーキ・クラブラウンジでの上質なカクテルタイム",
                "世界基準のJWマリオットブランドのおもてなし・広々とした大理石バスルームで至福のバスタイム"
              ]
            },
            {
              id: 3,
              name: "紫翠ラグジュアリーコレクションホテル奈良",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/187253/187253.jpg",
              rating: 4.08,
              reviews: 28,
              price: "¥36,685〜",
              access: "JR 奈良駅よりバス「県庁東」下車 徒歩3分。近鉄 奈良駅より 徒歩15分",
              special: "奈良公園西端に立地する世界遺産や豊かな自然に囲まれたホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187253%2F187253.html",
              story: "奈良公園西端、名勝「旧興福寺子院 宝憲院」の庭園跡という歴史的特等地に佇むラグジュアリーリゾート「紫翠 ラグジュアリーコレクションホテル 奈良」。世界的な建築家・隈研吾氏が設計を手掛け、大正時代に建てられた奈良県知事公舎の歴史的木造建築を保存・再生したメイン棟が迎えてくれます。客室の一部にはプライベートな天然温泉露天風呂が備えられ、冬の澄み切った木立を眺めながら掛け流しの湯を独占できます。夕暮れ時には宿泊者専用の「シャンパンディライト」が開催され、庭園の冬枯れの美しさを愛でながら優雅なひとときを過ごせます。",
              roomTip: "温泉露天風呂付デラックスルーム。専用の天然温泉露天風呂から冬の日本庭園を眺める贅沢。洗練された和モダンの静謐な客室。",
              gourmetTip: "レストラン「翠めぐり」。伝統的な大和の食文化とフレンチの技巧が融合したイノベーティブ料理。冬のジビエや大和まな、大和牛を堪能。",
              highlights: [
                "隈研吾氏設計・旧奈良県知事公舎を再生・名勝庭園跡に佇む客室露天温泉リゾート",
                "夕暮れのシャンパンディライト無料サービス・プライベート露天風呂で楽しむ冬の温泉浴",
                "ラグジュアリーコレクションの格調・大正ロマンの木造建築バーで傾ける冬のカクテル"
              ]
            },
            {
              id: 4,
              name: "ホテル日航奈良",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1791/1791.jpg",
              rating: 4.31,
              reviews: 4177,
              price: "¥7,700〜",
              access: "ＪＲ奈良駅西口直結 /近鉄奈良駅徒歩12分",
              special: "【JR奈良駅西口直結】地酒が愉しめるラウンジ＆奈良の朝食ブッフェ好評",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1791%2F1791.html",
              story: "JR奈良駅西口に直結し、冬の雨や寒さでも傘いらずでスムーズにチェックインできる抜群の利便性を誇る「ホテル日航奈良」。駅直結でありながら、館内には宿泊者専用の広々とした人工温泉大浴場を完備しており、冬の奈良公園散策で歩き疲れた体をゆったりと温められます。朝食ビュッフェは楽天トラベルでも屈指の評価を誇り、名物の「柿の葉寿司」や「三輪そうめんのにゅうめん」、奈良の郷土料理「飛鳥鍋（牛乳仕立ての滋味鍋）」、茶粥など奈良の味覚を朝から贅沢に食べ比べできます。観光にもビジネスにも圧倒的な快適性を提供するシティホテルです。",
              roomTip: "プレミアルーム（禁煙・高層階）。シモンズ社製ベッドと加湿空気清浄機を完備。若草山方面を望む開放的なシティビュー。",
              gourmetTip: "「奈良の朝ごはん」朝食バイキング。冬に嬉しい熱々の飛鳥鍋、吉野葛を使った料理、職人仕込みの柿の葉寿司や大和茶粥が並ぶ郷土の味。",
              highlights: [
                "JR奈良駅西口直結で傘いらず・宿泊者専用大浴場完備・名物飛鳥鍋＆柿の葉寿司の朝食バイキング",
                "奈良郷土料理が並ぶ自慢の朝ごはんビュッフェ・冬の冷えた体を温める広々とした大浴場",
                "駅直結商業施設でお土産購入も至便・奈良交通バス各線へのアクセスも抜群のハブ拠点"
              ]
            },
            {
              id: 5,
              name: "ピアッツァホテル奈良",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/161142/161142.jpg",
              rating: 4.34,
              reviews: 475,
              price: "¥8,413〜",
              access: "ＪＲ　奈良駅　西口より徒歩１分",
              special: "★ＪＲ奈良駅徒歩１分♪ラグジュアリーかつ安心・安全なホテル★高層階眺望抜群！全館全室禁煙",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161142%2F161142.html",
              story: "JR奈良駅西口から徒歩わずか1分、駅前広場に面して建つスタイリッシュなモダンホテル「ピアッツァホテル奈良」。全室にシモンズ社製の最高級マットレスを導入し、上質な眠りと快適な滞在を追求しています。館内にはフィットネスルームやコインランドリー、開放的なカフェ＆バーを備え、長期滞在や一人旅にも最適。朝食レストラン「La Festa」では、奈良の食材をふんだんに使った和洋折衷ビュッフェが楽しめ、特に冬の冷え込んだ朝にいただく温かいにゅうめんや具だくさんの豚汁が旅人に喜ばれています。駅近で高コスパ、清潔感あふれる空間が魅力です。",
              roomTip: "スーペリアダブル／ツイン。広めのワークデスクと明るい間照明、機能的なバスルームを備え、冬の古都ひとり旅やカップルステイに最適。",
              gourmetTip: "朝食レストラン「La Festa」。地元奈良産の新鮮野菜サラダや温かい三輪そうめん、炊き立てのご飯と出汁の利いた和惣菜が好評。",
              highlights: [
                "JR奈良駅徒歩1分・シモンズ社製最高級ベッド・清潔で機能的なモダンホテル・高コスパ",
                "温かい三輪そうめんや地場野菜が並ぶ和洋朝食・一人旅からビジネス、カップルまで大好評",
                "駅前広場に面した抜群の立地・加湿空気清浄機完備で冬の乾燥対策も万全な快適ステイ"
              ]
            }
  ];

  const faqData = [
  {
    "q": "春日大社（かすがたいしゃ）の新春開運初詣（1月）の見どころと参拝時間は？",
    "a": "春日大社は全国約3,000社の春日神社の総本社であり、世界遺産「古都奈良の文化財」の主要構成資産です。朱塗りの社殿と無数の釣燈籠（つりとうろう）が白雪や杉木立に映える光景は神々しく、新春の厄除け・開運招福・交通安全を願う参拝客で賑わいます。三が日の開門時間は元旦0:00〜20:00、2日・3日は7:00〜19:00です。三が日の11:00〜14:30は本殿前に行列ができるため、早朝7:00〜9:00の澄み切った清冽な空気の中での参拝が最もおすすめです。国宝殿で国宝の刀剣や甲冑を鑑賞するのも新春の素晴らしい体験です。"
  },
  {
    "q": "冬の東大寺（とうだいじ）大仏殿の見学や年末年始の行事について教えてください。",
    "a": "東大寺大仏殿は世界最大級の木造建築物であり、冬の凛とした澄んだ空気の中で見上げる盧舎那仏（大仏様・高さ約15m）の存在感は圧巻です。冬期（11月〜3月）の拝観時間は8:00〜17:00となっています。特に大晦日から元旦にかけては「年越し万灯供養会」が開催され、大仏殿参道に無数の灯籠が灯り、元旦0:00〜8:00の間は大仏殿中門が開かれて無料で参拝できる伝統の年越し行事が行われます。大仏殿正面の観相窓（かんそうまど）が特別に開かれ、外から大仏様のお顔を拝むことができる貴重な瞬間です。"
  },
  {
    "q": "冬の奈良公園の鹿たちの様子や鹿せんべいの与え方のコツは？",
    "a": "冬の奈良公園に暮らす約1,200頭の天然記念物の鹿たちは、秋の毛変わりを経てモコモコとした厚い「冬毛（茶褐色で保温性の高い毛並み）」に包まれます。夏毛の白い斑点とは異なり、ぬいぐるみのように愛らしい姿を見せてくれます。冬は木々の草が枯れるため鹿たちもお腹を空かせており、園内の売店で販売されている「鹿せんべい（1束200円）」は大人気。せんべいを持つと大勢集まってくるため、焦らさずスムーズに与え、なくなったら両手を広げて見せると鹿たちもお辞儀をして落ち着いて離れてくれます。"
  },
  {
    "q": "冬の奈良で味わうべき郷土料理「大和牛」「飛鳥鍋」「にゅうめん」とは？",
    "a": "冬の奈良は体を芯から温めてくれる滋味深い郷土料理の宝庫です。「大和牛（やまとうし）」は鎌倉時代からの歴史を持つ銘柄黒毛和牛で、上品な甘みと柔らかな肉質が特徴。冬は割り下が染みるすき焼きやしゃぶしゃぶでいただくのが最高です。「飛鳥鍋（あすかなべ）」は鶏肉や季節の野菜を牛乳と鶏ガラスープ、白味噌仕立ての出汁で煮込んだ飛鳥時代ルーツの鍋で、まろやかなコクが冷えた体に染み渡ります。さらに、日本最古の手延べ麺とされる三輪そうめんを温かい出汁でいただく「にゅうめん」や、酢飯と鯖・鮭を柿の葉で包んだ伝統の「柿の葉寿司」も必食です。"
  },
  {
    "q": "冬（11月・12月・1月）の奈良の気候と寒さ・服装・おすすめの歩き方は？",
    "a": "奈良盆地特有の内陸性気候のため、冬の奈良は「底冷え（そこびえ）」と呼ばれる足元からしんしんと冷え込む厳しい寒さが特徴です。雪は頻繁には積もりませんが、朝晩は氷点下近くまで冷え込みます。奈良公園内は広大で舗装されていない砂利道や土の小道が多いため、「厚手の靴下と底の厚い歩きやすいスニーカーまたは防寒ブーツ」が必須です。ヒートテックインナー、厚手のセーター、防風ダウンコート、マフラー、手袋をしっかり装備してください。近鉄奈良駅やJR奈良駅から奈良交通の「ぐるっとバス（1回100円）」を活用すると、寒さをしのぎながら効率よく主要スポットを回れます。"
  }
];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://croud-travel.com/winter-nara-park-kasuga-taisha-hatsumode-todaiji-yamatogyu-stay#webpage",
        "url": "https://croud-travel.com/winter-nara-park-kasuga-taisha-hatsumode-todaiji-yamatogyu-stay",
        "name": "【11・12・1月奈良】春日大社新春開運初詣＆東大寺大仏殿冬景色！大和牛すき焼きと古都の静謐に寛ぐ厳選宿5選",
        "description": "1300年の歴史が静かに息づく古都・奈良の冬。世界遺産・春日大社の朱塗りの社殿と無数の釣燈籠が白雪に映える新春開運初詣、東大寺大仏殿の厳かな佇まい、冬毛でもふもふと暖かそうな奈良公園の鹿たちとの出会い。澄み切った夕暮れには若草山が茜色から深い藍色へと染まり、滋味豊かな大和牛すき焼きや飛鳥鍋、三輪そうめんのにゅうめんが冷えた体を優しく温めます。楽天APIから最新取得した奈良公園・ならまち・奈良駅周辺の格調高き名宿5選を徹底特集します。",
        "inLanguage": "ja",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.com/#website",
          "url": "https://croud-travel.com/",
          "name": "くらうどトラベル"
        }
      },
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
            "name": "春日大社初詣＆東大寺冬景色宿",
            "item": "https://croud-travel.com/winter-nara-park-kasuga-taisha-hatsumode-todaiji-yamatogyu-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      },
      {
        "@type": "TouristDestination",
        "name": "奈良県奈良市（奈良公園・春日大社・東大寺・ならまち）",
        "description": "世界遺産春日大社の新春開運初詣、東大寺大仏殿の冬景色、冬毛の鹿たちと大和牛すき焼きが迎える古都奈良。",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "奈良県",
          "addressLocality": "奈良市",
          "addressCountry": "JP"
        }
      }
    ]
  };


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月奈良】春日大社新春開運初詣＆東大寺大仏殿冬景色！大和牛すき焼きと古都の静謐に寛ぐ厳選宿5選",
    "description": "1300年の歴史が静かに息づく古都・奈良の冬。世界遺産・春日大社の朱塗りの社殿と無数の釣燈籠が白雪に映える新春開運初詣、東大寺大仏殿の厳かな佇まい、冬毛でもふもふと暖かそうな奈良公園の鹿たちとの出会い。澄み切った夕暮れには若草山が茜色から深い藍色へと染まり、滋味豊かな大和牛すき焼きや飛鳥鍋、三輪そうめんのにゅうめんが冷えた体を優しく温めます。楽天APIから最新取得した奈良公園・ならまち・奈良駅周辺の格調高き名宿5選を徹底特集します。",
    "url": "https://croud-travel.pages.dev/winter-nara-park-kasuga-taisha-hatsumode-todaiji-yamatogyu-stay/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev" },
      { "@type": "ListItem", "position": 2, "name": "【11・12・1月奈良】春日大社新春開運初詣＆東大寺大仏殿冬景色！大和牛すき焼きと古都の静謐に寛ぐ厳選宿5選", "item": "https://croud-travel.pages.dev/winter-nara-park-kasuga-taisha-hatsumode-todaiji-yamatogyu-stay/" }
    ]
  };

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-rose-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide">
            <Landmark className="w-4 h-4 text-emerald-300 animate-pulse" />
            <span>11月・12月・1月冬の大和路特選ガイド｜奈良県奈良市奈良公園・高畑・三条</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            春日大社新春開運初詣＆東大寺大仏殿冬景色！<br className="hidden sm:inline" />
            大和牛すき焼きと古都の静謐に寛ぐ厳選宿5選
          </h1>

          <p className="max-w-4xl text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal">
            1300年の祈りと歴史が息づく古都・奈良。世界遺産「春日大社」の朱塗り社殿と釣燈籠が雪に映える新春厄除け初詣、冬の凛とした澄明な空気に包まれる「東大寺大仏殿」、冬毛でもふもふと暖かそうな奈良公園の鹿たちとのふれあい。滋味豊かな大和牛すき焼きや飛鳥鍋、三輪そうめんのにゅうめんに舌鼓を打ち、歴史薫る名宿で心静かに過ごす冬の贅沢な旅へご案内します。
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Compass className="w-4 h-4 text-emerald-400" /> 春日大社・東大寺大仏殿・奈良公園・興福寺
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Utensils className="w-4 h-4 text-amber-400" /> 大和牛すき焼き・飛鳥鍋・三輪にゅうめん・柿の葉寿司
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Calendar className="w-4 h-4 text-sky-400" /> 探訪期：11月上旬〜1月下旬
            </span>
          </div>
        </div>
      </header>

      {/* Navigation Breadcrumbs */}
      <nav aria-label="パンくずリスト" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-500">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-emerald-600 transition">ホーム</Link></li>
          <li><span>/</span></li>
          <li><Link href="/features" className="hover:text-emerald-600 transition">特集一覧</Link></li>
          <li><span>/</span></li>
          <li className="text-slate-800 font-medium truncate">春日大社初詣＆東大寺冬景色宿</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-16">
        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-emerald-500 pl-4">
            <span className="text-emerald-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Deep Dive Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              朱塗りの回廊と静謐な白銀！冬の奈良公園・春日大社が旅人の心を洗う理由
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              世界遺産の荘厳な神仏の杜、冬毛に包まれた神鹿、古都の奥深きもてなし
            </p>
          </div>

          <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
            <p>
              多くの観光客で賑わう春秋の喧騒が去り、街全体が穏やかな静けさと澄んだ空気に包まれる11月から1月。奈良盆地特有のピリッとした「底冷え」の寒さこそが、1300年の歴史を誇る古都の神聖な空気を極限まで研ぎ澄まします。原生林の濃い緑を背負う奈良公園では、冬枯れの木々と若草山の柔らかな山肌が茜色の夕日に染まり、悠久の時を超えてきた都の情緒が最も深く心に沁みわたります。
            </p>
            <p>
              新春の奈良探訪の最大の中心となるのが、全国約3,000社の春日神社の総本社である世界遺産「春日大社」です。御蓋山（みかさやま）の麓に広がる境内を進むと、参道の両脇に苔むした無数の石燈籠が立ち並び、神聖な森の空気が漂います。朱塗りの鮮やかな回廊には、平安時代から奉納されてきた約1,000基の青銅製「釣燈籠」が吊り下げられ、冬の雪化粧をまとう姿は息を呑むほどの神々しさ。新年の厄除けや招福を祈願し、静かに手を合わせるひとときは、新たな一年の始まりに清々しい力を授けてくれます。
            </p>
            <p>
              そして春日大社から北へ歩みを進めれば、世界最大級の木造建築である「東大寺大仏殿」が堂々とそびえます。冬の澄み切った冷気の中、巨大な観相窓の下で静かに鎮座される盧舎那仏（大仏様）を仰ぎ見る瞬間は、言葉を失うほどの威厳と慈悲深さに包まれます。冬毛でふっくらと暖かそうな毛並みになった奈良公園の鹿たちが、白い息を吐きながら歩み寄る愛らしい姿も、冬の奈良ならではの心温まる情景です。
            </p>
            <p>
              散策を堪能した後は、温かい奈良の伝統の味覚が待っています。極上の霜降りを誇る「大和牛」のすき焼きをはじめ、飛鳥時代から伝わる牛乳出汁の「飛鳥鍋」、温かい出汁で喉越しを楽しむ「三輪そうめんのにゅうめん」、そして「柿の葉寿司」。明治の息吹を残す奈良ホテルや、隈研吾建築が光る紫翠ラグジュアリーなど、世界最高峰の宿で寛ぐ滞在は、冬の大人の旅にふさわしい至高のひとときを叶えてくれます。
            </p>
          </div>
        </section>

        {/* 5 Hotels Detail Section */}
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              奈良公園・ならまちで冬の静謐を愛でる厳選名宿5選
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              楽天トラベル公式APIからリアルタイムに取得した信頼の宿泊施設。創業110余年のクラシックホテルから客室露天風呂付きリゾートまで厳選しました。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition duration-300 flex flex-col lg:flex-row"
              >
                {/* Hotel Image Container */}
                <div className="lg:w-2/5 relative min-h-[280px] lg:min-h-full bg-slate-100 overflow-hidden">
                  <img 
                    src={hotel.img} 
                    alt={hotel.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                    <Building className="w-3.5 h-3.5 text-emerald-400" />
                    <span>厳選宿 #{hotel.id}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/75 backdrop-blur-sm text-white p-3 rounded-2xl text-xs space-y-1 border border-white/10">
                    <p className="text-slate-300 line-clamp-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      {hotel.access}
                    </p>
                  </div>
                </div>

                {/* Hotel Content */}
                <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center text-amber-500">
                          <Star className="w-4 h-4 fill-amber-400" />
                          <span className="font-bold text-sm ml-1 text-slate-800">{hotel.rating}</span>
                        </div>
                        <span className="text-xs text-slate-400">({hotel.reviews}件のクチコミ)</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-500 block">参考宿泊料金（1名）</span>
                        <span className="text-lg sm:text-xl font-black text-rose-600">{hotel.price}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-emerald-600 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2 group">
                          <span>{hotel.name}</span>
                          <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 shrink-0" />
                        </a>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                        {hotel.special}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      {hotel.story}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100/60">
                        <span className="font-bold text-emerald-800 block mb-1 flex items-center gap-1">
                          <Building className="w-3.5 h-3.5 text-emerald-600" /> おすすめ客室
                        </span>
                        <span className="text-slate-600">{hotel.roomTip}</span>
                      </div>
                      <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-100/60">
                        <span className="font-bold text-amber-800 block mb-1 flex items-center gap-1">
                          <Utensils className="w-3.5 h-3.5 text-amber-600" /> 冬のグルメ体験
                        </span>
                        <span className="text-slate-600">{hotel.gourmetTip}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">滞在の魅力ポイント</span>
                      {hotel.highlights.map((h: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-700 to-indigo-700 hover:from-emerald-700 hover:to-indigo-800 text-white font-bold text-sm shadow-sm hover:shadow transition"
                    >
                      <span>楽天トラベルで空室・宿泊プランを確認する</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1泊2日王道モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-emerald-500 pl-4">
            <span className="text-emerald-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Winter Schedule</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の奈良公園・春日大社を満喫する1泊2日王道モデルコース
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              ならまち散策、東大寺大仏殿見学、大和牛すき焼き、早朝の春日大社新春初詣を巡る静謐な旅プラン
            </p>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-emerald-100">
            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 11:30】近鉄奈良駅到着＆ならまち町家カフェで温かいランチ</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                近鉄奈良駅に到着し、古い格子戸が連なる「ならまち」へ。江戸時代末期の町家を改装した落ち着いたカフェや食事処で、出汁が香る熱々の「三輪そうめんのにゅうめん」や、鯖と鮭の押し寿司「柿の葉寿司」を堪能。身も心もほっと温まります。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 13:30】奈良公園散策・冬毛の鹿たちとふれあい＆東大寺大仏殿</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                奈良公園の参道を歩き、冬毛でふっくらとした愛らしい鹿たちに鹿せんべいを与える癒やしのひととき。南大門の金剛力士像を仰ぎ、世界最大級の木造建築「東大寺大仏殿」へ。冬の静寂の中に座す盧舎那仏（大仏様）を参拝し、その荘厳な佇まいに圧倒されます。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 16:00】名門宿へチェックイン＆若草山冬夕景鑑賞</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                明治42年創業の奈良ホテルや紫翠ラグジュアリーコレクションなどへチェックイン。客室の窓から若草山の柔らかな稜線が冬の夕日に赤く染まる茜色の夕景を鑑賞。客室露天温泉や大浴場で、歩き疲れた手足をゆったり伸ばして温めます。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 18:30】極上「大和牛すき焼き」ディナー＆伝統のバー</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                夕食は古都の至宝「大和牛」のすき焼きや会席料理。上質なサシがとろける柔らかな肉質と、大和まななど地元野菜の甘みを特製割り下で味わいます。食後は暖炉の火が揺らぐホテルのクラシックバーで、冬限定のカクテルや奈良の地酒「春鹿」「風の森」を味わい、優雅な夜を過ごします。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【2日目 07:30】清冽な早朝の春日大社新春開運厄除け初詣</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                朝一番の澄み切った冷気の中、世界遺産・春日大社へ。苔むす参道の石燈籠と朱塗りの回廊に吊り下がる無数の釣燈籠が織りなす神聖な美しさの中、新春の開運・厄除けを祈願。国宝殿で刀剣を拝観し、興福寺の五重塔を眺めながら奈良駅へ戻り帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Local Winter Experience Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8">
          <div className="border-l-4 border-emerald-500 pl-4">
            <span className="text-emerald-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Travel Strategy</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の奈良公園・春日大社完全攻略：初詣・大仏殿・大和牛の心得
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-emerald-500" />
                春日大社の釣燈籠と早朝参拝の静寂美
              </h3>
              <p className="leading-relaxed">
                春日大社は平安時代から貴族や武士、庶民によって奉納された約3,000基の燈籠（石燈籠2,000基、青銅の釣燈籠1,000基）を有します。新春三が日の日中は初詣客で大変混雑しますが、開門直後の早朝7:00〜8:30は観光客もまばら。杉木立を抜ける朝日の光条と朱塗りの柱、青銅の燈籠が織りなす静謐な光景は息を呑む美しさで、新年の心静かな誓いに最高の時間帯です。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Building className="w-5 h-5 text-indigo-500" />
                東大寺大仏殿の見学と観相窓の特別開扉
              </h3>
              <p className="leading-relaxed">
                東大寺大仏殿は幅57m、奥行き50m、高さ48mの世界最大級の木造建築。冬の引き締まった冷気の中で堂内に入ると、大仏様（盧舎那仏）の圧倒的な存在感に包まれます。元旦の0:00〜8:00には大仏殿正面の「観相窓（かんそうまど）」が開扉され、堂外の中門から大仏様のお顔を拝むことができる年越し万灯会が行われます。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <TreePine className="w-5 h-5 text-teal-500" />
                冬毛に包まれた奈良の鹿との正しい接し方
              </h3>
              <p className="leading-relaxed">
                奈良公園の鹿たちは、冬になると濃い茶褐色の厚い冬毛に包まれ、ふっくらとした愛らしい姿になります。春日大社の神使として大切に守られており、鹿せんべいを手に持つとお辞儀をしてくれます。焦らさずにスムーズに与え、なくなったら両手の平をパーにして見せるのが円滑なコミュニケーションの秘訣です。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-amber-500" />
                冬の大和美食「大和牛」「飛鳥鍋」「三輪にゅうめん」
              </h3>
              <p className="leading-relaxed">
                冬の奈良の味覚を代表する「大和牛」は、上品な霜降りと赤身のコクが調和した銘柄牛。熱々のすき焼きでいただくのが最高です。また、牛乳に鶏出汁と白味噌を合わせた奈良伝統の「飛鳥鍋」は、まろやかなコクが冷えた体に染み渡る郷土の味。伝統の手延べ三輪そうめんを温かい出汁でいただく「にゅうめん」も、冬の散策途中のランチに欠かせません。
              </p>
            </div>
          </div>
        </section>

        {/* Climate and Access Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-emerald-500 pl-4">
            <span className="text-emerald-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Travel Logistics</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬（11月・12月・1月）の奈良気候・底冷え対策と公園内アクセス術
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                盆地特有の底冷えと寺社拝観の足元防寒
              </h3>
              <p className="leading-relaxed">
                奈良盆地は内陸性気候のため、冬は足元からしんしんと冷え込む「底冷え」が特徴です。寺院の堂内を拝観する際は靴を脱いで板張りの廊下を歩く機会が多いため、厚手のウール靴下やタイツ、携帯用スリッパがあると寒さを防げます。靴は厚底のクッション性の高いスニーカーまたは防寒ブーツを選び、ダウンコートとマフラー、手袋を万全に装備しましょう。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-indigo-500" />
                ぐるっとバスと近鉄・JR奈良駅の使い分け
              </h3>
              <p className="leading-relaxed">
                近鉄奈良駅は奈良公園に近く徒歩約15分で大仏殿や興福寺へアクセス可能ですが、JR奈良駅からは少し距離があります。土日祝を中心に1回100円で運行している「ぐるっとバス（奈良公園ルート・若草山麓ルート）」を活用すれば、主要寺社間を寒さに震えることなく快適に移動できます。京都や大阪（難波・梅田）からも電車で約35〜45分とアクセス抜群です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-emerald-500 pl-4">
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider block">FAQ</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の奈良公園・春日大社・東大寺旅行 よくある質問
            </h2>
          </div>

          <div className="divide-y divide-slate-100 space-y-4">
            {faqData.map((item: any, idx: number) => (
              <div key={idx} className="pt-4 first:pt-0 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded-md shrink-0 font-extrabold mt-0.5">Q</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Feature Links Section */}
        <section className="bg-slate-100/80 rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-200">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            あわせて読みたい大和路・近畿の冬特選特集記事
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            奈良吉野や長谷寺、京都・大阪・滋賀など近隣の魅力あふれる冬旅特集もぜひご覧ください。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
            <Link 
              href="/winter-nara-hasedera-winter-peony-oomiwa-yamatogyu-stay"
              className="bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-emerald-400 hover:shadow-xs transition flex flex-col justify-between"
            >
              <span className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-2">長谷寺の冬牡丹＆大神神社初詣！大和牛すき焼きの滋味宿</span>
              <span className="text-[11px] text-emerald-600 font-medium mt-2 flex items-center gap-1">奈良・桜井長谷寺特集を読む →</span>
            </Link>
            <Link 
              href="/winter-nara-dorogawa-onsen-snow-botannabe-stay"
              className="bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-emerald-400 hover:shadow-xs transition flex flex-col justify-between"
            >
              <span className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-2">洞川温泉の雪景色＆名物ぼたん鍋！修験道の秘湯宿</span>
              <span className="text-[11px] text-emerald-600 font-medium mt-2 flex items-center gap-1">奈良・洞川温泉特集を読む →</span>
            </Link>
            <Link 
              href="/winter-osaka-castle-nakanoshima-illumination-tenmangu-stay"
              className="bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-emerald-400 hover:shadow-xs transition flex flex-col justify-between"
            >
              <span className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-2">大阪城イルミナージュ＆大阪天満宮初詣！中之島水都夜景宿</span>
              <span className="text-[11px] text-emerald-600 font-medium mt-2 flex items-center gap-1">大阪・大阪城特集を読む →</span>
            </Link>
            <Link 
              href="/winter-kyoto-fushimi-inari-hatsumode-uji-sake-matcha-stay"
              className="bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-emerald-400 hover:shadow-xs transition flex flex-col justify-between"
            >
              <span className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-2">伏見稲荷大社新春初詣＆宇治抹茶！冬の酒蔵めぐりと京会席宿</span>
              <span className="text-[11px] text-emerald-600 font-medium mt-2 flex items-center gap-1">京都・伏見宇治特集を読む →</span>
            </Link>
            <Link 
              href="/winter-mie-suzuka-tsubaki-shrine-nabana-hamaguri-stay"
              className="bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-emerald-400 hover:shadow-xs transition flex flex-col justify-between"
            >
              <span className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-2">椿大神社開運初詣＆なばなの里イルミ！桑名蛤と天然温泉宿</span>
              <span className="text-[11px] text-emerald-600 font-medium mt-2 flex items-center gap-1">三重・鈴鹿桑名特集を読む →</span>
            </Link>
            <Link 
              href="/features"
              className="bg-emerald-50 p-3.5 rounded-2xl border border-emerald-200 hover:bg-emerald-100 transition flex flex-col justify-between"
            >
              <span className="font-bold text-xs sm:text-sm text-emerald-900 line-clamp-2">全国の冬旅・新春初詣＆温泉特選特集一覧</span>
              <span className="text-[11px] text-emerald-700 font-medium mt-2 flex items-center gap-1">全特集一覧へ戻る →</span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-nara-park-kasuga-taisha-hatsumode-todaiji-yamatogyu-stay" />
</div>
        </section>
      </main>

      {/* Footer Disclaimer */}
      <footer className="border-t border-slate-200 bg-white py-8 px-4 text-center text-xs text-slate-400">
        <p>※掲載の宿泊料金目安・口コミ評価・イベント開催情報は最新のAPIおよび公式発表に基づきます。最新情報は各予約サイトをご確認ください。</p>
        <p className="mt-1">© 2026 くらうどトラベル All Rights Reserved.</p>
      </footer>
    </article>
  );
}
