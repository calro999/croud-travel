import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Snowflake, Flame, Landmark, Building, Mountain, Trees, Clock, ShieldCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月長野】中山道！名宿5選',
  description: '11月から1月、信州・木曽路（中山道）は、日本最長の宿場町「奈良井宿」や重要伝統的建造物群保存地区「妻籠宿」の木造千本格子に純白の雪が降り積もり。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '木曽路 冬, 奈良井宿 雪景色, 妻籠宿, 投じ蕎麦, すんき鍋, ＢＹＡＫＵ Ｎａｒａｉ, 木曽路の宿いわや, ＴＡＯＹＡ木曽路, 木曽牛, 木曽温泉, 11月 12月 1月 長野旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-nagano-kisoji-narai-tsumago-snow-toujisoba-stay/"
  },
  openGraph: {
    title: '【11・12・1月長野】中山道！名宿5選',
    description: '11月から1月、信州・木曽路（中山道）は、日本最長の宿場町「奈良井宿」や重要伝統的建造物群保存地区「妻籠宿」の木造千本格子に純白の雪が降り積もり。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-nagano-kisoji-narai-tsumago-snow-toujisoba-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の木曽路・奈良井宿の雪景色と千本格子'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月長野】中山道・木曽路の雪化粧宿場町（奈良井宿・妻籠宿）と冬の郷土味覚「投じ蕎麦・すんき鍋」・木曽牛＆木曽御嶽山麓の雪見温泉宿5選",
    description: "11月から1月、信州・木曽路（中山道）は、日本最長の宿場町「奈良井宿」や重要伝統的建造物群保存地区「妻籠宿」の木造千本格子に純白の雪が降り積もり、江戸時代へタイムスリップしたかのような静寂美に包まれます。冬限定の奇跡の発酵食「すんき鍋」や竹籠でくぐらせる名物「投じ蕎麦」、極上木曽牛のすき焼き。雪化粧の中央アルプスや木曽御嶽山を望む雪見露天風呂が自慢の厳選名宿5選を徹底ガイドします。",
    images: ['https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function NaganoKisojiNaraiTsumagoWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【11・12・1月長野】中山道・木曽路の雪化粧宿場町（奈良井宿・妻籠宿）と冬の郷土味覚「投じ蕎麦・すんき鍋」・木曽牛＆木曽御嶽山麓の雪見温泉宿5選",
    description: "11月から1月、信州・木曽路（中山道）は、日本最長の宿場町「奈良井宿」や重要伝統的建造物群保存地区「妻籠宿」の木造千本格子に純白の雪が降り積もり、江戸時代へタイムスリップしたかのような静寂美に包まれます。冬限定の奇跡の発酵食「すんき鍋」や竹籠でくぐらせる名物「投じ蕎麦」、極上木曽牛のすき焼き。雪化粧の中央アルプスや木曽御嶽山を望む雪見露天風呂が自慢の厳選名宿5選を徹底ガイドします。",
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
    datePublished: '',
    dateModified: '',
    author: {
      '@type': 'Organization',
      name: 'クラドトラベル編集部',
      url: 'https://croud-travel.pages.dev'
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.pages.dev/winter-nagano-kisoji-narai-tsumago-snow-toujisoba-stay'
    }
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://croud-travel.pages.dev'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '冬の特集一覧',
        item: 'https://croud-travel.pages.dev/features'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '長野・木曽路宿場町雪景色＆投じ蕎麦特集',
        item: 'https://croud-travel.pages.dev/winter-nagano-kisoji-narai-tsumago-snow-toujisoba-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "木曽路（中山道）の「奈良井宿」と「妻籠宿」の冬の見どころと魅力は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "木曽路は江戸と京都を結ぶ中山道の山岳ルートで、険しい木曽谷沿いに十一の宿場町（木曽十一宿）が点在します。中でも「奈良井宿（ならいじゅく）」は日本最長約1kmにわたり千本格子の木造町家が連なり「奈良井千軒」と呼ばれます。「妻籠宿（つまごじゅく）」は日本で最初に伝統的建造物群保存地区に選定され、電線を地中化するなど江戸時代の原風景を最も忠実に残す町です。11月から1月の冬は観光客が少なく、格子戸や出梁造りの屋根に白い雪が降り積もり、夕暮れに行燈が灯ると、まるで水墨画の世界に迷い込んだかのような圧倒的な静寂と哀愁に包まれます。"
        }
      },
      {
        '@type': 'Question',
        name: "木曽谷の冬の名物「投じ蕎麦（とうじそば）」とはどのような料理ですか？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "「投じ蕎麦（とうじそば）」は、信州木曽や松本安曇の冬を代表する郷土の蕎麦料理です。「投じる」とは「浸す」という意味の方言に由来します。一口大に丸められた冷たい手打ち蕎麦を、柄の付いた小さな竹製の籠（投じ籠）に入れ、きのこ、山菜、鶏肉、冬野菜などを煮込んだ熱々の醤油仕立ての鍋汁の中にサッと浸して温めます。数秒ほど湯がいて蕎麦が温まったら、鍋の具材とともにお椀に移して汁をかけてすすります。冷たい蕎麦と熱々の鍋を融合させた、厳冬の山国ならではの知恵が詰まった心温まる郷土食です。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の奇跡の発酵食「すんき」とは？健康効果や味の特徴は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "「すんき」は、木曽地方で300年以上にわたり冬期限定で作られてきた伝統の無塩乳酸菌発酵漬物です。冬に収穫される赤かぶの葉を、前年の「すんき種」に住み着く植物性乳酸菌だけで発酵させます。塩が貴重だった山国で生まれた知恵のため、塩分を一切使わずに強烈な酸味と奥深い旨味を生み出すのが最大の特徴です。豊富な植物性乳酸菌が含まれており、アレルギー抑制や整腸作用など高い健康効果が科学的にも注目されています。冬の木曽では、味噌汁に入れたり、温かい蕎麦に乗せた「すんき蕎麦」、豚肉やすんきを煮込んだ「すんき鍋」として親しまれます。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の木曽路の気候と気温、雪道運転の注意点は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "木曽地域は標高が高く、11月下旬から1月にかけては厳しい寒波が押し寄せます。日中の気温でも5℃前後にしかならず、夜間や早朝はマイナス5℃〜マイナス10℃以下に冷え込みます。奈良井宿周辺や旧街道沿いは積雪や路面凍結（アイスバーン）が日常的に発生するため、車で訪れる場合は必ずスタッドレスタイヤを装着してください。また、中山道沿いの国道19号線は大型トラックの往来が多いため、車間距離を十分に取った慎重な運転が必要です。歩行時も滑り止めの効いた冬用ブーツの着用を強くおすすめします。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の木曽路観光でおすすめの立ち寄りスポットや体験は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "冬の木曽路では、宿場町の散策に加えて、木曽漆器の産地「木曽平沢」での漆器工房めぐり、江戸時代の関所の姿を今に残す国史跡「福島関所資料館」、エメラルドグリーンの渓流美を誇る「阿寺渓谷」、木曽御嶽山の勇壮な白銀パノラマを望む「開田高原」などがおすすめです。開田高原では日本在来馬である「木曽馬」との雪上ふれあい体験も楽しめます。散策後は街道沿いの甘味処で名物の五平餅（エゴマや胡桃のタレが香ばしい焼き餅）を囲炉裏端でいただくのが格別です。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "ＢＹＡＫＵ　Ｎａｒａｉ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/182769/182769.jpg",
              rating: 4.38,
              reviews: 35,
              price: "¥56,100〜",
              access: "電車/JR中央本線奈良井駅から徒歩5分　車/長野自動車道・塩尻I.Cより35分、中央自動車道・伊那I.Cより40分",
              special: "長野・奈良井宿　百の物語に出逢う宿＜開業＞",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182769%2F182769.html",
              story: "中山道奈良井宿の町並みそのものに溶け込み、創業200年を超える老舗酒蔵「杉の森酒造」や江戸末期の町家建築を再生した分散型ラグジュアリーホテル「ＢＹＡＫＵ Ｎａｒａｉ」。宿場町の歴史的建造物に現代の洗練された快適性と美意識を融合させた空間は、一歩足を踏み入れた瞬間に江戸の息吹と極上の静寂へ誘います。冬の厳しい寒さに包まれる夜、暖炉の薪が爆ぜる音と炎の揺らめきが心地よいラウンジや、信州檜を贅沢に使ったプライベート風呂で心身を解きほぐす時間はまさに至高の体験。夕食はメインダイニング「嵓（くら）」にて、木曽谷の冬の風土を五感で表現したイノベーティブ和食を提供。上質な木曽牛や無塩発酵食すんき、木曽漆器の器に美しく盛り付けられた郷土食材が、唯一無二の贅沢な美食時間をもたらします。",
              roomTip: "百四「山櫻」蔵スイートルーム。江戸後期の重厚な土蔵を改装したメゾネット仕様で、太い梁と高い吹き抜け、窓から白雪の町並みを眺めるプライベート空間が魅力です。",
              gourmetTip: "「木曽谷テロワールディナー」。木曽の厳冬期に育まれた冬根菜や厳選された信州プレミアム牛を、伝統発酵技術と現代フレンチの技法で昇華させたフルコース。",
              highlights: [
                "奈良井宿の歴史的町家と酒蔵を再生・百年の歴史に包まれる分散型ラグジュアリーホテル",
                "木曽漆器で彩るイノベーティブ和食・信州プレミアム牛と冬の発酵食すんきの饗宴",
                "薪ストーブ揺れるラウンジ・雪の奈良井宿を早朝に散策できる唯一無二のロケーション"
              ]
            },
            {
              id: 2,
              name: "木曽路の宿　いわや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16778/16778.jpg",
              rating: 3.96,
              reviews: 104,
              price: "¥12,100〜",
              access: "JR木曽福島駅より徒歩10分／中央自動車道：塩尻ICより60分、中津川ICより60分",
              special: "宮家の方々や文人に愛された、木曽路で最も古い老舗。木曽川眺望、総檜造りのお部屋や展望露天など。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16778%2F16778.html",
              story: "木曽福島宿の旧中山道沿いに佇み、江戸幕府の関所破りを見張った日本四大関所「福島関所」の近くに位置する老舗温泉旅館「木曽路の宿 いわや」。創業300余年の歴史を誇り、文豪・島崎藤村をはじめ多くの文人墨客が定宿とした由緒ある名宿です。自家源泉の天然温泉が注ぐ大浴場や庭園露天風呂からは、冬になると白銀に雪化粧した優美な日本庭園を眺めながら優雅な雪見風呂を満喫できます。夕食は木曽路の冬の伝統会席。竹籠に盛った蕎麦を熱々の鍋汁にくぐらせていただく名物「投じ蕎麦」や、柔らかな木曽牛の石焼き、赤かぶの乳酸菌漬物「すんき」など、信州の温かな郷土料理に心も体も満たされます。雪景色の庭を眺めながら囲炉裏端でいただく地酒の味わいは格別です。",
              roomTip: "庭園側次の間付き数寄屋和室。雪吊りが施された風情ある日本庭園を窓から見下ろし、しんしんと降る雪の音に耳を傾ける大人の冬籠もりに最適なお部屋です。",
              gourmetTip: "「木曽名物・冬の投じ蕎麦会席」。きのこや地鶏の出汁が効いた熱々鍋に手打ち蕎麦をくぐらせる伝統鍋と、霜降り木曽牛の陶板焼きを一度に味わえます。",
              highlights: [
                "創業300年島崎藤村ゆかりの老舗・雪化粧した日本庭園を望む雪見露天風呂と名物投じ蕎麦",
                "熱々鍋に竹籠で蕎麦をくぐらせる本場投じ蕎麦・霜降り木曽牛陶板焼きの贅沢",
                "木曽福島関所跡まで徒歩すぐ・歴史ある街道散策と温泉三昧の冬旅に最適"
              ]
            },
            {
              id: 3,
              name: "自由旅クラブ　木曽三河家",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/140759/140759.jpg",
              rating: 4.26,
              reviews: 490,
              price: "¥8,280〜",
              access: "木曽福島駅から徒歩にて２０分　最寄りのコンビニまで徒歩20分",
              special: "お客様のライフスタイルや色々な旅のかたちでご利用頂ける、自由で気ままな、ビジネス旅館でございます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F140759%2F140759.html",
              story: "木曽福島駅から車で約5分、木曽川の清らかな本流を見下ろす高台に建つ温泉旅館「自由旅クラブ 木曽三河家」。リーズナブルな価格設定でありながら、自家源泉のアルカリ性単純温泉と温かなおもてなしで高い評価を集めています。開放感あふれる大浴場からは木曽の雄大な山並みを一望でき、冬には雪景色を眺めながらゆったりと湯浴みを楽しめます。夕食は地元の旬食材をふんだんに使った和食会席。信州サーモンのお造りや信州ポークのしゃぶしゃぶ、冬の味覚を散りばめた小鍋仕立てなど、気取らずに信州の味を楽しめるのが魅力。ひとり旅やビジネスでのワーケーション、家族旅行まで幅広く対応する居心地の良さが評判です。",
              roomTip: "リバービュー和洋室。木曽川のせせらぎと対岸の雪山を望む開放的なお部屋。シモンズ製ベッドを備えたモダンな設えで、冬の夜も暖かくぐっすり眠れます。",
              gourmetTip: "「信州味めぐり膳」。信州プレミアム牛の陶板ステーキまたは熱々すき焼きをメインに、冬の信州郷土小鉢を彩り豊かに味わう満足プラン。",
              highlights: [
                "木曽川を一望する高台の温泉宿・シモンズベッド完備客室と信州味めぐり会席",
                "信州プレミアム牛や信州サーモン・地元の厳選素材を手頃な価格で堪能",
                "木曽福島駅送迎あり・ひとり旅やビジネス利用にも使い勝手抜群の好立地"
              ]
            },
            {
              id: 4,
              name: "ＴＡＯＹＡ木曽路",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/167241/167241.jpg",
              rating: 4.37,
              reviews: 930,
              price: "¥22,800〜",
              access: "南木曽駅よりお車にて約１５分   中津川ＩＣより車で約40分。ナビは道の駅「しずも」を経由地に入れてください。",
              special: "化粧水のような温泉とオールインクルーシブでくつろぎのひと時をお過ごしください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167241%2F167241.html",
              story: "南木曽の雄大な大自然に抱かれた高原に位置し、オールインクルーシブの贅沢な滞在を提供する「ＴＡＯＹＡ木曽路」（旧ホテル木曽路）。館内に一歩入ると暖炉の火が温かく迎えてくれ、滞在中のラウンジでのドリンクや湯上がりビール、夜食まで追加料金なしで愉しめます。自慢は日本屈指の広さを誇る庭園露天風呂。冬の澄み切った満天の星空と純白の雪景色に包まれながら、とろりとした美肌の湯に身を委ねる時間はまさに至福。夕食はバイキング形式で、ライブキッチンで焼き上げる牛ステーキや揚げたて天ぷら、信州そば、木曽の郷土料理が食べ放題。妻籠宿や馬籠宿への観光拠点としても最高のロケーションです。",
              roomTip: "マウンテンビュー和洋室。広々としたバルコニーから雪化粧した南木曽の山並みを一望できる開放的な客室で、静かな雪山の美しさに癒やされます。",
              gourmetTip: "「プレミアムディナーバイキング」。シェフが目の前で仕上げる信州産ローストビーフや冬の温鍋、地酒飲み放題を含む贅沢な美食の饗宴。",
              highlights: [
                "オールインクルーシブの贅沢高原リゾート・圧倒的スケールの庭園雪見露天風呂",
                "ライブキッチンで焼くステーキや信州そばバイキング・地酒や夜食も無料",
                "暖炉付きラウンジでのドリンクサービス・家族やカップルで寛ぐリゾート空間"
              ]
            },
            {
              id: 5,
              name: "フォレスパ木曽　あてら温泉　阿寺荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/146115/146115.jpg",
              rating: 3.67,
              reviews: 109,
              price: "¥7,700〜",
              access: "ＪＲ野尻駅よりお車で約7分",
              special: "＜絶景阿寺ブルーへ＞阿寺渓谷お車2分＆妻籠宿20分！とろとろ温泉＆添い寝無料＆野尻駅より無料送迎OK",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F146115%2F146115.html",
              story: "木曽川の支流、青く澄み渡る「阿寺ブルー」で名高い名勝・阿寺渓谷の玄関口に佇む公営温泉リゾート「フォレスパ木曽 あてら温泉 阿寺荘」。周囲を檜や杉の原生林に囲まれた静寂のロケーションで、冬の凛とした森の空気と天然温泉を満喫できます。あてら温泉は全国的にも珍しい天然の炭酸水素塩温泉で、無色透明ながらとろりとした肌触りが特徴。湯上がりの肌がつるつるになると評判の「美人の湯」です。夕食は料理長が腕を振るう木曽の里山会席。冬は木曽美水豚の豆乳鍋や岩魚の塩焼き、冬野菜の天ぷらなど、大自然の恵みを素朴ながら丁寧に仕立てた料理が旅人の心を深く癒やします。",
              roomTip: "渓流側和室。窓を開けると阿寺渓谷の清らかな瀬音が響き、冬の雪化粧した杉林の静けさを独り占めできる落ち着いた和の空間です。",
              gourmetTip: "「木曽美水豚と冬野菜の里山会席」。きめ細かく柔らかな地元銘柄豚の小鍋と、阿寺の名水で仕込んだ香り高い手打ち十割蕎麦のコース。",
              highlights: [
                "阿寺渓谷の玄関口に佇む大自然の隠れ宿・とろりとした美肌温泉と木曽美水豚の里山会席",
                "清流阿寺川の岩魚塩焼きと手打ち十割蕎麦・冬の静寂の森に抱かれる癒やし",
                "全国的にも希少な天然炭酸水素塩泉・湯上がりの肌がつるつるになる美人の湯"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "木曽路（中山道）の「奈良井宿」と「妻籠宿」の冬の見どころと魅力は？",
    "a": "木曽路は江戸と京都を結ぶ中山道の山岳ルートで、険しい木曽谷沿いに十一の宿場町（木曽十一宿）が点在します。中でも「奈良井宿（ならいじゅく）」は日本最長約1kmにわたり千本格子の木造町家が連なり「奈良井千軒」と呼ばれます。「妻籠宿（つまごじゅく）」は日本で最初に伝統的建造物群保存地区に選定され、電線を地中化するなど江戸時代の原風景を最も忠実に残す町です。11月から1月の冬は観光客が少なく、格子戸や出梁造りの屋根に白い雪が降り積もり、夕暮れに行燈が灯ると、まるで水墨画の世界に迷い込んだかのような圧倒的な静寂と哀愁に包まれます。"
  },
  {
    "q": "木曽谷の冬の名物「投じ蕎麦（とうじそば）」とはどのような料理ですか？",
    "a": "「投じ蕎麦（とうじそば）」は、信州木曽や松本安曇の冬を代表する郷土の蕎麦料理です。「投じる」とは「浸す」という意味の方言に由来します。一口大に丸められた冷たい手打ち蕎麦を、柄の付いた小さな竹製の籠（投じ籠）に入れ、きのこ、山菜、鶏肉、冬野菜などを煮込んだ熱々の醤油仕立ての鍋汁の中にサッと浸して温めます。数秒ほど湯がいて蕎麦が温まったら、鍋の具材とともにお椀に移して汁をかけてすすります。冷たい蕎麦と熱々の鍋を融合させた、厳冬の山国ならではの知恵が詰まった心温まる郷土食です。"
  },
  {
    "q": "冬の奇跡の発酵食「すんき」とは？健康効果や味の特徴は？",
    "a": "「すんき」は、木曽地方で300年以上にわたり冬期限定で作られてきた伝統の無塩乳酸菌発酵漬物です。冬に収穫される赤かぶの葉を、前年の「すんき種」に住み着く植物性乳酸菌だけで発酵させます。塩が貴重だった山国で生まれた知恵のため、塩分を一切使わずに強烈な酸味と奥深い旨味を生み出すのが最大の特徴です。豊富な植物性乳酸菌が含まれており、アレルギー抑制や整腸作用など高い健康効果が科学的にも注目されています。冬の木曽では、味噌汁に入れたり、温かい蕎麦に乗せた「すんき蕎麦」、豚肉やすんきを煮込んだ「すんき鍋」として親しまれます。"
  },
  {
    "q": "冬の木曽路の気候と気温、雪道運転の注意点は？",
    "a": "木曽地域は標高が高く、11月下旬から1月にかけては厳しい寒波が押し寄せます。日中の気温でも5℃前後にしかならず、夜間や早朝はマイナス5℃〜マイナス10℃以下に冷え込みます。奈良井宿周辺や旧街道沿いは積雪や路面凍結（アイスバーン）が日常的に発生するため、車で訪れる場合は必ずスタッドレスタイヤを装着してください。また、中山道沿いの国道19号線は大型トラックの往来が多いため、車間距離を十分に取った慎重な運転が必要です。歩行時も滑り止めの効いた冬用ブーツの着用を強くおすすめします。"
  },
  {
    "q": "冬の木曽路観光でおすすめの立ち寄りスポットや体験は？",
    "a": "冬の木曽路では、宿場町の散策に加えて、木曽漆器の産地「木曽平沢」での漆器工房めぐり、江戸時代の関所の姿を今に残す国史跡「福島関所資料館」、エメラルドグリーンの渓流美を誇る「阿寺渓谷」、木曽御嶽山の勇壮な白銀パノラマを望む「開田高原」などがおすすめです。開田高原では日本在来馬である「木曽馬」との雪上ふれあい体験も楽しめます。散策後は街道沿いの甘味処で名物の五平餅（エゴマや胡桃のタレが香ばしい焼き餅）を囲炉裏端でいただくのが格別です。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-orange-100 selection:text-orange-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の木曽路・雪化粧の奈良井宿" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-orange-900/80 backdrop-blur-md text-orange-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-orange-400/30">
            <Snowflake className="w-4 h-4 text-orange-300" />
            11月・12月・1月 冬の中山道・木曽路雪景色宿場町＆伝統郷土鍋特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月長野】中山道・木曽路の雪化粧宿場町（奈良井宿・妻籠宿）と冬の郷土味覚「投じ蕎麦・すんき鍋」・木曽牛＆木曽御嶽山麓の雪見温泉宿5選
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            中山道の難所・木曽谷に息づく日本最長の宿場町「奈良井宿」と江戸の風情を今に残す「妻籠宿」。黒光りする千本格子に純白の雪が降り積もり、行燈の灯りがともる冬の静寂美。竹籠にくぐらせる熱々の名物「投じ蕎麦」と奇跡の無塩発酵食「すんき鍋」、霜降り木曽牛。木曽御嶽山の雪景色を望む雪見露天風呂の旅へご案内します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-orange-400" /> 旬の時期：11月下旬〜1月下旬（積雪の宿場町＆すんき最盛期）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-orange-400" /> エリア：長野県塩尻市奈良井・木曽郡木曽町・南木曽町</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-orange-400" /> 旬グルメ：投じ蕎麦・すんき鍋・すんき蕎麦・木曽牛・五平餅</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-orange-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Introduction</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              江戸の旅情が雪の中に息づく中山道と、山国の厳しい冬が生んだ発酵の知恵
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              「木曽路はすべて山の中である」——文豪・島崎藤村が不朽の名作『夜明け前』の冒頭に記した通り、長野県南西部を流れる木曽川の険しい谷沿いには、江戸と京都を結ぶ中山道の山岳路が通っています。この街道沿いに連なる十一の宿場町「木曽十一宿」は、11月から1月の冬を迎えると、年間を通じて最も幽玄で美しい表情を見せてくれます。
            </p>
            <p>
              中でも日本一の長さを誇る「奈良井宿」の千軒格子や、国の重要伝統的建造物群保存地区第1号となった「妻籠宿」は、電線や看板が排除され、江戸時代の木造町家がそのまま保存された奇跡の町並みです。初雪が屋根や出梁（だしばり）を真っ白に覆い、格子戸の隙間から温かな行燈の光が漏れる夕暮れ時、しんしんと降る雪の音だけが響く静寂の街道を歩く時間は、まるで数百年の時を超えて旅籠へ急ぐ旅人になったかのような錯覚を覚えます。
            </p>
            <p>
              江戸時代、尾張藩の領地として厳格に管理された「木曽五木（ヒノキ、サワラ、アスナロ、コウヤマキ、ネズコ）。」の鬱蒼たる美林は、「木一本首一つ」の掟で大切に守り継がれ、現在の豊かな自然景観を形作っています。冬になると、標高3,067mの霊峰・木曽御嶽山や中央アルプスが純白の雪を戴き、青空との鮮やかなコントラストを描き出します。
            </p>
            <p>
              そして、厳寒の木曽谷で人々を温め続けてきたのが、独自の食文化です。赤かぶの葉を塩を一切使わずに植物性乳酸菌だけで発酵させた300年の奇跡の発酵食「すんき」を使った熱々の「すんき鍋」、小分けにした手打ち蕎麦を竹製の投じ籠に入れ、きのこや地鶏が煮立つ熱々の鍋汁にくぐらせて食べる名物「投じ蕎麦（とうじそば）」。冷え切った体を芯から温めてくれる滋味深い鍋料理と、木曽御嶽山や中央アルプスの雪景色を望む天然温泉が、旅人の心身を優しく包み込みます。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-100">
            <div className="flex items-start gap-3 p-3.5 bg-orange-50/60 rounded-2xl border border-orange-100">
              <Landmark className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-stone-900 text-sm">雪化粧の木曽路宿場町</h3>
                <p className="text-stone-600 text-xs mt-1">奈良井宿・妻籠宿の千本格子に白雪が積もる江戸時代の静寂美。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 bg-orange-50/60 rounded-2xl border border-orange-100">
              <Utensils className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-stone-900 text-sm">冬の名物「投じ蕎麦」</h3>
                <p className="text-stone-600 text-xs mt-1">竹籠で熱々の鍋汁にくぐらせてすする信州伝統の温まりの知恵。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3.5 bg-orange-50/60 rounded-2xl border border-orange-100">
              <Flame className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-stone-900 text-sm">奇跡の発酵食「すんき鍋」</h3>
                <p className="text-stone-600 text-xs mt-1">塩分ゼロ・植物性乳酸菌の酸味とコクが絶品の木曽谷伝統鍋。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive Section: Gourmet & Culture */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-8">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-orange-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Gourmet & Tradition</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              囲炉裏端で受け継がれる木曽谷の温もりと「投じる」作法
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <Utensils className="w-5 h-5 text-orange-600" />
                竹籠でサッとくぐらせる「投じ蕎麦」の愉しみ
              </h3>
              <p>
                信州の蕎麦といえば冷たいざる蕎麦が基本ですが、氷点下に冷え込む冬の木曽路では「投じ蕎麦（とうじそば）」が最高の馳走となります。鍋には地元で採れた天然きのこ、冬野菜、鶏肉や鴨肉、根菜が醤油仕立ての出汁でグツグツと煮立っています。
              </p>
              <p>
                手元の竹籠（投じ籠）に一口分の手打ち蕎麦を入れ、煮立つ鍋の中に浸して「1、2、3秒」と軽く揺らします。蕎麦が出汁の熱で温まり、旨味をまとった瞬間に引き上げてお椀へ。鍋の熱々の具材と出汁を上からかけてすすれば、蕎麦の芳醇な香りと出汁の深いコクが口いっぱいに広がります。冷たい蕎麦のコシを残しながら芯まで温まる、まさに冬の傑作です。
              </p>
              <p>
                さらに、木曽路の標高1,100m〜1,300mに位置する開田高原（かいだこうげん）で栽培される玄蕎麦は、昼夜の寒暖差によって甘みと香りが極限まで凝縮された最高峰の蕎麦粉として知られます。冬の澄んだ水で手打ちされた十割蕎麦を投じる贅沢は、信州ならではの至福です。
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-600" />
                塩を使わない300年の奇跡「すんき」と木曽牛
              </h3>
              <p>
                「すんき」は海から遠く塩が貴重だった木曽谷で、冬の赤かぶの葉を保存するために生まれた世界でも珍しい「完全無塩」の発酵食品です。前年のすんきをスターター（種）にして赤かぶの葉を漬け込むと、植物性乳酸菌が繁殖して爽やかな酸味を生み出します。
              </p>
              <p>
                このすんきを豚肉や豆腐とともに味噌仕立てで煮込む「すんき鍋」は、乳酸菌の酸味が肉の脂っぽさを消し、驚くほどまろやかで奥深い旨味を引き出します。さらに、木曽谷の澄んだ空気と清流で育つ希少なブランド黒毛和牛「木曽牛」の霜降り肉を合わせれば、滋味と贅沢が融合した信州屈指の冬のご馳走が完成します。
              </p>
              <p>
                また、街道の茶屋で炭火で香ばしく焼き上げられる名物「五平餅（ごへいもち）」も見逃せません。炊きたてのうるち米を半搗きにして串に刺し、胡桃や胡麻、エゴマをたっぷり使った秘伝の甘辛醤油ダレを塗って香ばしく焦がした五平餅は、冬の散策で冷えた体に優しい活力を与えてくれます。
              </p>
            </div>
          </div>

          <div className="bg-amber-50/70 p-5 sm:p-6 rounded-2xl border border-amber-200/60">
            <h4 className="font-bold text-amber-950 text-base mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              木曽漆器の器で味わう宿場町の美意識
            </h4>
            <p className="text-amber-900 text-xs sm:text-sm leading-relaxed">
              木曽路の北端、奈良井宿に隣接する「木曽平沢」は、国の重要伝統的建造物群保存地区にも指定された日本屈指の漆器の産地です。幾重にも漆を塗り重ねた木曽漆器の椀や重箱は、熱い汁物を入れても手が熱くならず、保温性に優れています。手打ち蕎麦や郷土鍋を艶やかな漆器でいただく体験は、木曽路の歴史と職人技を五感で味わう至高の贅沢です。
            </p>
          </div>
        </section>

        {/* Hotel Recommendations Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-orange-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-xl sm:text-3xl font-black text-stone-900">
              【長野・木曽路】雪景色宿場町と冬の郷土味覚を堪能する名宿5選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              奈良井宿や妻籠宿に近く、雪見温泉風呂や伝統の投じ蕎麦・木曽牛を味わえる厳選温泉宿＆クラシックリゾート
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((h) => (
              <div key={h.id} className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 hover:border-orange-300 transition-all duration-300 space-y-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-2/5 shrink-0">
                    <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-stone-100 group">
                      <img 
                        src={h.img} 
                        alt={h.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>★ {h.rating}</span>
                        <span className="text-slate-400 text-[10px]">({h.reviews}件)</span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-orange-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
                        {h.price}
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-3/5 space-y-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-orange-800 mb-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>中山道・木曽路温泉郷エリア</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-stone-900 leading-snug">
                        {h.name}
                      </h3>
                      <p className="text-stone-500 text-xs mt-1 flex items-center gap-1">
                        <Compass className="w-3.5 h-3.5" /> {h.access}
                      </p>
                      <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mt-3">
                        {h.story}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-stone-100 text-xs">
                      <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200/60">
                        <span className="font-bold text-stone-800 block mb-0.5">客室のポイント</span>
                        <span className="text-stone-600">{h.roomTip}</span>
                      </div>
                      <div className="bg-orange-50/60 p-2.5 rounded-xl border border-orange-100">
                        <span className="font-bold text-orange-950 block mb-0.5">自慢の冬グルメ</span>
                        <span className="text-orange-900">{h.gourmetTip}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50/80 rounded-2xl p-4 border border-stone-200/60 space-y-2">
                  <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block">宿のハイライト</span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-stone-600">
                    {h.highlights.map((hl: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <a 
                    href={h.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
                  >
                    <span>楽天トラベルでプラン・空室を見る</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1泊2日モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-orange-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の木曽路 宿場町雪景色と郷土味覚を巡る1泊2日モデルコース
            </h2>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-orange-200 space-y-6">
              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">1日目 11:00</span>
                <h3 className="font-bold text-stone-900 text-base mt-1">奈良井宿に到着＆雪の千軒格子散策</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1">
                  JR中央本線奈良井駅または車で奈良井宿に到着。約1kmにわたる木造の町並みを歩き、雪化粧した木曽の大橋や出梁造りの格子戸を鑑賞。名物の五平餅を囲炉裏端で味わい、雪の宿場町ならではの静寂に浸る。
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">1日目 13:30</span>
                <h3 className="font-bold text-stone-900 text-base mt-1">木曽平沢で木曽漆器の工房めぐり</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1">
                  伝統的建造物群保存地区に指定された漆器の町・木曽平沢へ。職人が手がける艶やかな漆塗りの椀やお盆を見学し、旅の記念に一生ものの漆器を手に入れる。
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">1日目 15:30</span>
                <h3 className="font-bold text-stone-900 text-base mt-1">木曽温泉の宿にチェックイン＆雪見露天風呂</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1">
                  歴史ある温泉宿にチェックイン。木曽谷の冷気を感じながら、雪化粧した日本庭園や山並みを望む露天風呂に浸かり、旅の疲れを芯から癒やす至福の時間。
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">1日目 18:30</span>
                <h3 className="font-bold text-stone-900 text-base mt-1">夕食：本場「投じ蕎麦」と木曽牛の贅沢会席</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1">
                  竹籠にくぐらせてすする熱々の投じ蕎麦、赤かぶの乳酸菌発酵「すんき」、とろける霜降り木曽牛の石焼きを、木曽の地酒「七笑」や「中乗さん」とともに堪能。
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">2日目 09:30</span>
                <h3 className="font-bold text-stone-900 text-base mt-1">木曽福島・福島関所資料館と山村代官屋敷を見学</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1">
                  宿を出発し、木曽福島宿へ。天下の四大関所の一つ「福島関所」の資料館を見学し、街道警備の歴史を学ぶ。崖屋造りの町並みを散策。
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-600 border-4 border-white shadow-sm" />
                <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-md">2日目 11:30</span>
                <h3 className="font-bold text-stone-900 text-base mt-1">妻籠宿へ移動＆江戸の面影残す雪の宿場歩き</h3>
                <p className="text-stone-600 text-xs sm:text-sm mt-1">
                  南木曽の妻籠宿へ。本陣や脇本陣奥谷を巡り、歴史ある格子戸の町並みを歩く。温かいすんき蕎麦でランチを楽しみ、冬の木曽路の思い出を胸に帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-orange-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-orange-600" />
              冬の木曽路旅行 よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="p-4 sm:p-5 bg-stone-50 rounded-2xl border border-stone-200/60 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-orange-600 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link Section */}
        <section className="bg-gradient-to-br from-slate-900 to-stone-900 rounded-3xl p-6 sm:p-10 text-white space-y-6 shadow-xl">
          <div className="border-b border-slate-700 pb-4">
            <span className="text-orange-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              あわせて読みたい！全国の11・12・1月冬の温泉＆味覚特集
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              雪景色宿場町・古都・秘湯で日本の冬を深く味わう厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              href="/winter-gifu-hida-takayama-onsen-snow-beef-stay"
              className="group p-4 bg-slate-800/70 hover:bg-slate-800 rounded-2xl border border-slate-700/80 hover:border-orange-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 bg-orange-950/80 border border-orange-400/40 text-orange-300 text-[10px] font-bold rounded-md mb-2">
                  岐阜・飛騨高山温泉
                </span>
                <h3 className="font-bold text-white text-sm group-hover:text-orange-300 transition-colors line-clamp-2">
                  白銀の古い町並み雪景色と飛騨高山温泉・A5飛騨牛すき焼き＆新酒利き酒
                </h3>
              </div>
              <span className="text-xs text-orange-400 font-semibold mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                特集を見る →
              </span>
            </Link>

            <Link 
              href="/winter-shiga-omihachiman-hikone-snow-castle-omigyu-stay"
              className="group p-4 bg-slate-800/70 hover:bg-slate-800 rounded-2xl border border-slate-700/80 hover:border-orange-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 bg-orange-950/80 border border-orange-400/40 text-orange-300 text-[10px] font-bold rounded-md mb-2">
                  滋賀・近江八幡＆彦根
                </span>
                <h3 className="font-bold text-white text-sm group-hover:text-orange-300 transition-colors line-clamp-2">
                  近江八幡水郷雪景色と国宝彦根城雪化粧・近江牛すき焼き＆琵琶湖名宿
                </h3>
              </div>
              <span className="text-xs text-orange-400 font-semibold mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                特集を見る →
              </span>
            </Link>

            <Link 
              href="/winter-nara-dorogawa-onsen-snow-botannabe-stay"
              className="group p-4 bg-slate-800/70 hover:bg-slate-800 rounded-2xl border border-slate-700/80 hover:border-orange-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 bg-orange-950/80 border border-orange-400/40 text-orange-300 text-[10px] font-bold rounded-md mb-2">
                  奈良・洞川温泉
                </span>
                <h3 className="font-bold text-white text-sm group-hover:text-orange-300 transition-colors line-clamp-2">
                  雪化粧の提灯灯る木造行者宿・大峯山麓洞川温泉のぼたん鍋＆名水とうふ
                </h3>
              </div>
              <span className="text-xs text-orange-400 font-semibold mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                特集を見る →
              </span>
            </Link>

            <Link 
              href="/winter-nagano-hirugami-onsen-starry-sky-shinshugyu-stay"
              className="group p-4 bg-slate-800/70 hover:bg-slate-800 rounded-2xl border border-slate-700/80 hover:border-orange-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 bg-orange-950/80 border border-orange-400/40 text-orange-300 text-[10px] font-bold rounded-md mb-2">
                  長野・昼神温泉
                </span>
                <h3 className="font-bold text-white text-sm group-hover:text-orange-300 transition-colors line-clamp-2">
                  日本一の星空ナイトツアーとpH9.7強アルカリ美肌の湯・極上南信州牛名宿
                </h3>
              </div>
              <span className="text-xs text-orange-400 font-semibold mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                特集を見る →
              </span>
            </Link>

            <Link 
              href="/winter-yamanashi-yamanakako-oshino-diamond-fuji-houtou-stay"
              className="group p-4 bg-slate-800/70 hover:bg-slate-800 rounded-2xl border border-slate-700/80 hover:border-orange-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 bg-orange-950/80 border border-orange-400/40 text-orange-300 text-[10px] font-bold rounded-md mb-2">
                  山梨・山中湖＆忍野八海
                </span>
                <h3 className="font-bold text-white text-sm group-hover:text-orange-300 transition-colors line-clamp-2">
                  冬の澄天ダイヤモンド富士と忍野八海・熱々甲州ほうとう鍋富士見宿
                </h3>
              </div>
              <span className="text-xs text-orange-400 font-semibold mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                特集を見る →
              </span>
            </Link>

            <Link 
              href="/winter-tochigi-yunishigawa-onsen-kamakura-irori-stay"
              className="group p-4 bg-slate-800/70 hover:bg-slate-800 rounded-2xl border border-slate-700/80 hover:border-orange-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 bg-orange-950/80 border border-orange-400/40 text-orange-300 text-[10px] font-bold rounded-md mb-2">
                  栃木・湯西川温泉
                </span>
                <h3 className="font-bold text-white text-sm group-hover:text-orange-300 transition-colors line-clamp-2">
                  平家落人の隠れ里・雪見露天風呂と名物囲炉裏会席＆かまくら祭名宿
                </h3>
              </div>
              <span className="text-xs text-orange-400 font-semibold mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                特集を見る →
              </span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-nagano-kisoji-narai-tsumago-snow-toujisoba-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
