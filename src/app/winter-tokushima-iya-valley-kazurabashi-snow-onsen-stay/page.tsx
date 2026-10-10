import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Snowflake, Waves, Sun, Flame, Mountain, Building, Coffee, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月徳島：日本三大秘境！名宿5選',
  description: '11月晩秋の紅葉から12月・1月の白銀の世界へと移り変わる徳島県・祖谷渓谷（いやけいこく）。岐阜県の白川郷。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '祖谷のかずら橋 冬, 祖谷温泉 宿泊, ホテル祖谷温泉 ケーブルカー, 大歩危峡まんなか, ホテルかずら橋, サンリバー大歩危, ホテル秘境の湯, 大歩危 こたつ舟, 阿波尾鶏, 祖谷そば, 11月 12月 1月 徳島旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-tokushima-iya-valley-kazurabashi-snow-onsen-stay/"
  },
  openGraph: {
    title: '11・12・1月徳島：日本三大秘境！名宿5選',
    description: '11月晩秋の紅葉から12月・1月の白銀の世界へと移り変わる徳島県・祖谷渓谷（いやけいこく）。岐阜県の白川郷。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-tokushima-iya-valley-kazurabashi-snow-onsen-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の徳島県祖谷渓谷とかずら橋の雪景色'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月徳島：日本三大秘境・冬の祖谷渓谷「祖谷のかずら橋」雪景色と大歩危峡・ケーブルカーで行く谷底秘湯露天風呂＆阿波尾鶏を堪能する名宿5選",
    description: "11月晩秋の紅葉から12月・1月の白銀の世界へと移り変わる徳島県・祖谷渓谷（いやけいこく）。岐阜県の白川郷、宮崎県の椎葉村と並び「日本三大秘境」に数えられる断崖絶壁の山懐に、国指定重要有形民俗文化財「祖谷のかずら橋」が佇みます。粉雪をまとったかずら橋とエメラルドグリーンに澄み切る祖谷川の渓谷美、傾斜42度の専用ケーブルカーで下る谷底の自噴秘湯露天風呂、そして囲炉裏端で香ばしく焼き上げる阿波尾鶏や祖谷そばの素朴な美食。喧騒を完全に忘れ去る冬の秘境名宿5選と1泊2日のモデルコースをお届けします。",
    images: ['https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function TokushimaIyaValleyWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "11・12・1月徳島：日本三大秘境・冬の祖谷渓谷「祖谷のかずら橋」雪景色と大歩危峡・ケーブルカーで行く谷底秘湯露天風呂＆阿波尾鶏を堪能する名宿5選",
    description: "11月晩秋の紅葉から12月・1月の白銀の世界へと移り変わる徳島県・祖谷渓谷（いやけいこく）。岐阜県の白川郷、宮崎県の椎葉村と並び「日本三大秘境」に数えられる断崖絶壁の山懐に、国指定重要有形民俗文化財「祖谷のかずら橋」が佇みます。粉雪をまとったかずら橋とエメラルドグリーンに澄み切る祖谷川の渓谷美、傾斜42度の専用ケーブルカーで下る谷底の自噴秘湯露天風呂、そして囲炉裏端で香ばしく焼き上げる阿波尾鶏や祖谷そばの素朴な美食。喧騒を完全に忘れ去る冬の秘境名宿5選と1泊2日のモデルコースをお届けします。",
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
      '@id': 'https://croud-travel.pages.dev/winter-tokushima-iya-valley-kazurabashi-snow-onsen-stay'
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
        name: '徳島祖谷渓谷＆大歩危秘境特集',
        item: 'https://croud-travel.pages.dev/winter-tokushima-iya-valley-kazurabashi-snow-onsen-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "冬（11月・12月・1月）の「祖谷のかずら橋」の観光状況や渡橋の注意点は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "国指定重要有形民俗文化財「祖谷のかずら橋」（長さ45m・幅2m・水面からの高さ14m）は、年間を通して年中無休（荒天時除く）で営業しています。11月は周囲の山々が鮮やかな紅葉に染まり、12月中旬〜1月にかけては雪が舞い散る白銀の秘境へと姿を変えます。踏み板（さな木）の隙間が約10センチほど空いており、足元から真冬のエメラルドグリーンの祖谷川が丸見えとなるためスリル満点です。冬は足元の木や手すりのツルが霜や雪で凍結して滑りやすくなるため、両手が空くリュックサックを背負い、滑り止めの効いたスニーカーやトレッキングシューズで慎重に渡るのが必須です。"
        }
      },
      {
        '@type': 'Question',
        name: "「和の宿 ホテル祖谷温泉」のケーブルカー露天風呂の特徴と冬の入浴法は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "ホテル祖谷温泉の「渓谷露天風呂」は、宿の建物から傾斜42度の専用ケーブルカーに乗り、約5分かけて断崖絶壁を170メートル下った谷底の川岸にあります。自噴する源泉の温度は約38.3度とぬるめのため、真冬は一見ぬるく感じられますが、硫黄成分と炭酸ガスを微量に含んだ細かな気泡が全身を包み込むため、20分〜30分とじっくり浸かることで体の芯からじわじわと温まります。内湯の大浴場は加温された温かい温泉となっているため、谷底露天風呂で秘境の絶景を楽しんだ後、館内の内湯でしっかりと体を温め直すのが冬の通の入浴法です。"
        }
      },
      {
        '@type': 'Question',
        name: "大歩危峡の「こたつ舟遊覧船」の運行期間と冬の見どころは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "大歩危峡観光遊覧船は、吉野川の結晶片岩が削り出された国指定天然記念物の奇岩絶壁を約30分かけて巡る人気アクティビティです。例年12月1日から翌年2月末頃までの冬期期間は、船内に特製の「こたつ」が設置された「こたつ舟」として運航されます。足元をぽかぽかと温めながら、澄み切った吉野川の碧流と、雪化粧した険しい渓谷の岩肌を間近に見上げる冬ならではの風流な舟旅が楽しめます。船頭さんのユーモアあふれる解説も魅力です。"
        }
      },
      {
        '@type': 'Question',
        name: "祖谷の郷土料理「祖谷そば」「でこまわし」「岩豆腐」とは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "祖谷地方は急峻な斜面地で水田が少なかったため、古くから蕎麦の栽培が盛んでした。「祖谷そば」は小麦粉などのつなぎをほとんど使わず、地元産そば粉だけで打つため、麺が太く切れやすいのが特徴。素朴で芳醇な蕎麦の香りと、出汁の効いた温かいツユが冬の体に染み渡ります。「でこまわし」は、堅くて崩れない伝統の「岩豆腐（石豆腐）」やこんにゃく、里芋を串に刺し、柚子味噌を塗って炭火の囲炉裏でくるくると回しながら焼く郷土料理。人形浄瑠璃の木偶（でこ）に形が似ていることから名付けられた、冬にぴったりの温かな味覚です。"
        }
      },
      {
        '@type': 'Question',
        name: "冬に車で祖谷渓谷や大歩危へアクセスする際の道路凍結やスタッドレスタイヤの必要性は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "国道32号線（高知〜大歩危〜池田間）は比較的道路幅が広く整備されていますが、大歩危から祖谷温泉やかずら橋方面へ入る県道32号線や県道45号線は、急カーブや細い隘路が連続する山岳道路です。祖谷地方は四国の中でも標高が高く冷え込みが厳しいため、12月中旬〜1月にかけては積雪や路面凍結（ブラックアイスバーン）が頻繁に発生します。冬に車で訪れる場合は必ずスタッドレスタイヤを装着し、日陰のカーブや橋の上では十分減速して運転してください。雪道運転に不安がある場合は、JR大歩危駅からタクシーや定期観光バスを利用するのが安全です。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "和の宿　ホテル祖谷温泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13663/13663.jpg",
              rating: 4.64,
              reviews: 567,
              price: "¥23,100〜",
              access: "井川池田ＩＣより約２５km（国道３２号線経由）／ＪＲ大歩危駅下車　四国交通バスで約30分　",
              special: "ケーブルカーで行く谷底の源泉掛け流しの露天風呂",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13663%2F13663.html",
              story: "祖谷渓の断崖絶壁にせり出すように建ち、国内外の温泉ファンから絶賛される日本屈指の秘湯宿「和の宿 ホテル祖谷温泉」。最大の自慢は、宿から専用の傾斜鉄道（ケーブルカー）に乗って高低差170メートルの谷底へと下りる源泉掛け流しの露天風呂「渓谷露天風呂」。毎分1,500リットル以上も自噴するアルカリ性硫黄温泉は、ぬるめの38度前後の源泉が湯船を満たし、無数の細かな気泡が肌にびっしりと吸い付く極上のシルクのような浴感。冬の澄み渡る渓流のせせらぎと雪景色を間近に眺めながら、心ゆくまで長湯を楽しめます。夕食には徳島が誇るブランド地鶏「阿波尾鶏」や特選阿波牛、祖谷の清流で育った川魚のアマゴ（あめのうお）を使った繊細な会席料理が並びます。",
              roomTip: "露天風呂付き客室。祖谷渓の雄大な渓谷美を眼下に収め、プライベートな源泉掛け流し風呂で至福の静寂を独り占めできます。",
              gourmetTip: "「阿波尾鶏と阿波牛の特選渓谷会席」。噛むほどに旨味が溢れる阿波尾鶏の炭火焼きと、柔らかな霜降り阿波牛の陶板ステーキを味わえます。",
              highlights: [
                "専用ケーブルカーで高低差170mを下る谷底露天風呂・毎分大量自噴の極上シルク泡温泉",
                "祖谷渓の断崖絶壁にせり出す唯一無二の絶景ロケーションと阿波尾鶏・阿波牛会席",
                "世界的な旅行ガイドでも絶賛される秘境の隠れ宿・大人の贅沢な冬の静寂トリップ"
              ]
            },
            {
              id: 2,
              name: "峡谷の湯宿　大歩危峡まんなか",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/53066/53066.jpg",
              rating: 4.59,
              reviews: 1911,
              price: "¥9,500〜",
              access: "大歩危駅より車で5分(徒歩20分)ご宿泊のお客様は送迎有（要予約）井川池田IC・大豊ICより各約30分　高知空港が最寄り",
              special: "楽天アワード13年連続受賞！Wi-Fi・スチーマー・空気清浄加湿機完備■遊覧船割引券有■お料理自慢！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53066%2F53066.html",
              story: "吉野川が激しく岩を削り出した大歩危峡の真上に佇み、大歩危観光の拠点として絶大な利便性を誇る名宿「峡谷の湯宿 大歩危峡まんなか」。全客室やレストランから大歩危の勇壮な巨岩とエメラルドグリーンの川面を見下ろす絶好のロケーションです。冬の名物「大歩危峡遊覧船」の乗り場に直結しており、冬期限定のこたつ舟で巨岩奇岩の合間を縫う神秘的な川下りを楽しめます。大浴場には岩造りの露天風呂があり、弱アルカリ性の柔らかな温泉に浸かりながら渓谷を吹き抜ける冬の清風を感じられます。夕食には名物の祖谷そばや、地元の郷土味噌田楽「でこまわし」、阿波尾鶏の鍋料理など、山里の素朴な温もりが詰まった膳が旅人を迎えます。",
              roomTip: "渓谷側和洋室。大きな窓から吉野川の激流と結晶片岩の断崖を眺め、ゆったりとしたベッドで快適に寛げます。",
              gourmetTip: "「大歩危郷土味覚会席」。囲炉裏風の炭火でじっくり焼いた祖谷の岩豆腐とこんにゃくの田楽「でこまわし」と阿波尾鶏の朴葉焼きが絶品。",
              highlights: [
                "大歩危峡の絶壁に佇む絶景宿・冬限定のこたつ舟遊覧船乗り場に直結した抜群のロケーション",
                "弱アルカリ性の美肌露天風呂と名物でこまわし炭火焼き・祖谷そばの手作り膳",
                "JR大歩危駅からのアクセス至便・渓谷の雪景色と激流のコントラストに包まれる滞在"
              ]
            },
            {
              id: 3,
              name: "新祖谷温泉　ホテルかずら橋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/20228/20228.jpg",
              rating: 4.69,
              reviews: 992,
              price: "¥20,350〜",
              access: "ＪＲのお客様 大歩危駅～路線バス20分（タクシー15分）・お車のお客様　徳島自動車道井川池田ＩＣより大歩危経由で５０分　",
              special: "ケーブルカーで登る天空露天風呂と囲炉裏の宿。渓谷の絶景と郷土料理、温かなおもてなしでお迎えいたします",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20228%2F20228.html",
              story: "「祖谷のかずら橋」まで車で約5分、山の中腹に位置し、専用のスロープカーで登る「天空の露天風呂」が名物の人気旅館「新祖谷温泉 ホテルかずら橋」。山頂に設けられた天空の露天風呂からは、山里の集落と重なる祖谷の稜線を一望でき、冬の朝には幻想的な雲海が広がることもあります。温泉は単純硫黄温泉で、湯冷めしにくく冬の冷えた体を芯から温めてくれます。宿の夕食は、囲炉裏を囲んでいただく本格的な郷土会席。炭火の周りに串刺しにしたアマゴの塩焼きや名物でこまわし、そして鉄鍋でぐつぐつ煮込む阿波尾鶏と祖谷根菜の味噌鍋など、昔話の世界に迷い込んだかのような風情豊かなひとときを体験できます。",
              roomTip: "天空露天風呂付き客室。祖谷の山並みを眺めながら、客室テラスの専用風呂で誰にも気兼ねなく名湯を満喫できます。",
              gourmetTip: "「名物・囲炉裏会席」。炭火でじっくりと香ばしく焼き上げたアマゴの塩焼きと、滋味豊かな阿波尾鶏のつみれ鍋を囲炉裏端で堪能。",
              highlights: [
                "山頂スロープカーで行く天空の露天風呂・昔話のような囲炉裏端でいただく炭火焼き郷土料理",
                "冬の朝に広がる神秘的な雲海パノラマ・祖谷のかずら橋まで車でわずか5分の至近距離",
                "竹筒のかっぽ酒を囲炉裏で温めて傾ける至福の時間・心温まるおもてなしの高評価宿"
              ]
            },
            {
              id: 4,
              name: "大歩危温泉　サンリバー大歩危",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54677/54677.jpg",
              rating: 4.19,
              reviews: 1226,
              price: "¥5,500〜",
              access: "お車は井川池田インターより国道32号線沿いに３０分。列車はＪＲ大歩危駅または小歩危駅から送迎有。（要連絡）",
              special: "大歩危・小歩危を眼下に温泉を楽しめるホテル。山と川の幸にこだわった会席料理が自慢です！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54677%2F54677.html",
              story: "大歩危の渓谷沿いに建ち、強アルカリ温泉による極上の美肌効果と眺望を誇る近代的な温泉ホテル「大歩危温泉 サンリバー大歩危」。眼下に吉野川の峡谷と、JR土讃線の列車が鉄橋を渡る長閑な景色を望む絶景宿です。自慢の大浴場「大歩危温泉」は、pH9.8という四国屈指の強アルカリ性単純温泉。湯船に浸かると肌がとろりと滑らかになり、天然のピーリング効果で湯上がりの肌がつるつるになると女性客からも大絶賛されています。夕食には徳島名産のすだちを使った創作料理や、阿波尾鶏の陶板焼き、祖谷そばなど、地元の厳選素材をふんだんに盛り込んだ会席料理をリーズナブルに楽しめます。",
              roomTip: "リバービュー和室。窓から大歩危峡の奇岩と川の流れを一望でき、鉄道ファンには列車の絶景撮影ポイントとしても人気です。",
              gourmetTip: "「すだちぶりと阿波尾鶏の味覚会席」。徳島特産の柑橘すだちを食べて育った脂乗りの良い「すだちぶり」と阿波尾鶏の贅沢な組み合わせ。",
              highlights: [
                "pH9.8を誇る四国屈指の強アルカリ美肌温泉・大歩危の峡谷とJR土讃線を望む絶景リバービュー",
                "天然のピーリング効果でつるつるの肌触り・リーズナブルな価格設定で一人旅にも最適",
                "徳島特産のすだちを使った創作料理や地酒の品揃え・清潔感ある近代的な施設設計"
              ]
            },
            {
              id: 5,
              name: "祖谷渓温泉　ホテル秘境の湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/52860/52860.jpg",
              rating: 4.11,
              reviews: 522,
              price: "¥6,600〜",
              access: "JR大歩危駅～車で15分(送迎要予約14時～18時) 　高知空港～車で約1時間10分　徳島自動車道井川池田IC～約40分",
              special: "静寂な空間に古え時がよみがえる…平家伝説の里。落人伝説の地『祖谷渓』は歴史の香り漂う秘湯です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52860%2F52860.html",
              story: "祖谷渓の豊かな自然に囲まれ、広々とした温泉施設と充実の郷土料理が揃う大型温泉リゾート「祖谷渓温泉 ホテル秘境の湯」。開放感あふれる内湯の大浴場に加え、巨岩を配した野趣あふれる露天風呂や薬草風呂、サウナなど多彩な湯処を完備。柔らかな単純温泉は冷え性や筋肉痛の緩和に優れ、冬の観光で歩き疲れた体を心地よく解きほぐしてくれます。夕食は地元の阿波牛や阿波尾鶏、清流の鮎やアマゴ、祖谷特産の岩豆腐など、徳島の豊かな山海の幸を彩り豊かに仕上げた和食会席。広々としたロビーや売店には祖谷そばや徳島の銘菓が揃い、ファミリーからグループ旅行まで安心して快適に滞在できます。",
              roomTip: "スタンダード和室10畳。清潔で落ち着いた和の空間で、冬の祖谷の静寂な夜を穏やかに過ごせます。",
              gourmetTip: "「阿波牛陶板焼きと祖谷郷土会席」。肉質等級の高い阿波牛のジューシーなステーキと、手打ち祖谷そばの素朴な喉越しを楽しめます。",
              highlights: [
                "多彩な湯処を備えた秘境の温泉リゾート・阿波牛や阿波尾鶏など徳島の豊かな山海の味覚を満喫",
                "巨岩露天風呂や薬草風呂で旅の疲れを芯から癒やす・広々とした客室でファミリー旅行にも安心",
                "祖谷観光の拠点に便利な立地・お土産コーナーや地場産品の品揃えも充実"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "冬（11月・12月・1月）の「祖谷のかずら橋」の観光状況や渡橋の注意点は？",
    "a": "国指定重要有形民俗文化財「祖谷のかずら橋」（長さ45m・幅2m・水面からの高さ14m）は、年間を通して年中無休（荒天時除く）で営業しています。11月は周囲の山々が鮮やかな紅葉に染まり、12月中旬〜1月にかけては雪が舞い散る白銀の秘境へと姿を変えます。踏み板（さな木）の隙間が約10センチほど空いており、足元から真冬のエメラルドグリーンの祖谷川が丸見えとなるためスリル満点です。冬は足元の木や手すりのツルが霜や雪で凍結して滑りやすくなるため、両手が空くリュックサックを背負い、滑り止めの効いたスニーカーやトレッキングシューズで慎重に渡るのが必須です。"
  },
  {
    "q": "「和の宿 ホテル祖谷温泉」のケーブルカー露天風呂の特徴と冬の入浴法は？",
    "a": "ホテル祖谷温泉の「渓谷露天風呂」は、宿の建物から傾斜42度の専用ケーブルカーに乗り、約5分かけて断崖絶壁を170メートル下った谷底の川岸にあります。自噴する源泉の温度は約38.3度とぬるめのため、真冬は一見ぬるく感じられますが、硫黄成分と炭酸ガスを微量に含んだ細かな気泡が全身を包み込むため、20分〜30分とじっくり浸かることで体の芯からじわじわと温まります。内湯の大浴場は加温された温かい温泉となっているため、谷底露天風呂で秘境の絶景を楽しんだ後、館内の内湯でしっかりと体を温め直すのが冬の通の入浴法です。"
  },
  {
    "q": "大歩危峡の「こたつ舟遊覧船」の運行期間と冬の見どころは？",
    "a": "大歩危峡観光遊覧船は、吉野川の結晶片岩が削り出された国指定天然記念物の奇岩絶壁を約30分かけて巡る人気アクティビティです。例年12月1日から翌年2月末頃までの冬期期間は、船内に特製の「こたつ」が設置された「こたつ舟」として運航されます。足元をぽかぽかと温めながら、澄み切った吉野川の碧流と、雪化粧した険しい渓谷の岩肌を間近に見上げる冬ならではの風流な舟旅が楽しめます。船頭さんのユーモアあふれる解説も魅力です。"
  },
  {
    "q": "祖谷の郷土料理「祖谷そば」「でこまわし」「岩豆腐」とは？",
    "a": "祖谷地方は急峻な斜面地で水田が少なかったため、古くから蕎麦の栽培が盛んでした。「祖谷そば」は小麦粉などのつなぎをほとんど使わず、地元産そば粉だけで打つため、麺が太く切れやすいのが特徴。素朴で芳醇な蕎麦の香りと、出汁の効いた温かいツユが冬の体に染み渡ります。「でこまわし」は、堅くて崩れない伝統の「岩豆腐（石豆腐）」やこんにゃく、里芋を串に刺し、柚子味噌を塗って炭火の囲炉裏でくるくると回しながら焼く郷土料理。人形浄瑠璃の木偶（でこ）に形が似ていることから名付けられた、冬にぴったりの温かな味覚です。"
  },
  {
    "q": "冬に車で祖谷渓谷や大歩危へアクセスする際の道路凍結やスタッドレスタイヤの必要性は？",
    "a": "国道32号線（高知〜大歩危〜池田間）は比較的道路幅が広く整備されていますが、大歩危から祖谷温泉やかずら橋方面へ入る県道32号線や県道45号線は、急カーブや細い隘路が連続する山岳道路です。祖谷地方は四国の中でも標高が高く冷え込みが厳しいため、12月中旬〜1月にかけては積雪や路面凍結（ブラックアイスバーン）が頻繁に発生します。冬に車で訪れる場合は必ずスタッドレスタイヤを装着し、日陰のカーブや橋の上では十分減速して運転してください。雪道運転に不安がある場合は、JR大歩危駅からタクシーや定期観光バスを利用するのが安全です。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-cyan-100 selection:text-cyan-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の徳島県祖谷渓谷とかずら橋の風景" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-teal-900/80 backdrop-blur-md text-teal-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-teal-400/30">
            <Snowflake className="w-4 h-4 text-teal-300" />
            11月・12月・1月 冬の四国・日本三大秘境「祖谷のかずら橋」雪景色＆谷底自噴露天風呂特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">「11・12・1月徳島」日本三大秘境・冬の祖谷渓谷「祖谷のかずら橋」雪景色と大歩危峡・ケーブルカーで行く谷底秘湯露天風呂＆阿波尾鶏を堪能する名宿5選</h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            白川郷、椎葉村と並び「日本三大秘境」と称される四国の山懐・祖谷渓谷。国指定重要有形民俗文化財「祖谷のかずら橋」が白銀の雪化粧をまとい、眼下には透き通る祖谷川のエメラルドグリーンが息を呑む静寂を描き出します。傾斜42度の専用ケーブルカーで下る谷底の源泉掛け流し露天風呂、大歩危峡の風情あふれるこたつ舟、そして囲炉裏端で焼き上げる阿波尾鶏と素朴な祖谷そば。日常の喧騒から完全に解き放たれる冬の秘境旅へご案内します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-teal-400" /> 最適時期：11月下旬〜1月下旬（冬の静寂・雪景色・こたつ舟）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-teal-400" /> エリア：徳島県三好市西祖谷山村・大歩危</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-teal-400" /> 名物：阿波尾鶏炭火焼き・祖谷そば・でこまわし・アマゴ塩焼き・祖谷岩豆腐</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              急峻な断崖に閉ざされた神話と平家落人の里、冬にだけ現れる崇高な静寂美
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              四国の屋根と呼ばれる剣山系から吉野川の支流へと深く刻み込まれた祖谷渓谷。かつて源平合戦に敗れた平家の落人たちが隠れ住んだという伝説が今なお色濃く息づくこの地は、岐阜県の白川郷、宮崎県の椎葉村と並び「日本三大秘境」の一つに数えられています。
            </p>
            <p>
              晩秋の紅葉が散り、12月から1月にかけて本格的な寒気が山々を包み込むと、祖谷は一変して深閑とした白銀の世界へと姿を変えます。谷を渡す唯一の道としてシラクチカズラを編んで架けられた「祖谷のかずら橋」は、雪化粧をまとい、眼下の碧流と切り立つ奇岩が織りなすモノトーンの水墨画のような幽玄な美しさを湛えます。軋む吊り橋を一歩一歩渡る時の緊張感と、澄み渡る渓谷の美しさは、訪れる者の魂を強く揺さぶります。
            </p>
            <p>
              この険しい秘境にあって、極上の温もりを提供してくれるのが、祖谷渓や大歩危の山肌に湧き出る名湯です。特に「ホテル祖谷温泉」では、断崖絶壁に敷かれた専用ケーブルカーに揺られて高低差170メートルの谷底へと下り、川のすぐ真横に自噴する天然のぬる湯露天風呂に浸かるという、日本全国でも類を見ない圧倒的な秘湯体験が待っています。無数の気泡が肌を包み込み、冬の渓谷美を間近に仰ぐ入浴は、まさに至福そのものです。
            </p>
            <p>
              さらに、吉野川の奇岩をこたつに入って巡る「大歩危峡こたつ舟」、囲炉裏を囲んで炭火でじっくりと焼き上げる香ばしい「阿波尾鶏」や郷土の味噌田楽「でこまわし」、つなぎを一切使わない太打ちの「祖谷そば」など、素朴で温かな美食が冷えた体を芯から癒やしてくれます。現代の喧騒を完全に忘れ去り、自然と対話する冬の秘境旅がここにあります。
            </p>
          </div>
        </section>

        {/* 3 Key Highlights Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の徳島・祖谷渓谷＆大歩危で体感すべき3つのプレミアムな魅力
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              11月〜1月だからこそ出逢える、雪の吊り橋と谷底の自噴秘湯、囲炉裏の郷土美味。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700 font-bold">
                <Snowflake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                1. 白銀の日本三大秘境「祖谷のかずら橋」雪景色渡橋
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                国指定重要有形民俗文化財の吊り橋。粉雪をまとったカズラのツルと、14m下の澄み切ったエメラルドグリーンの祖谷川を望むスリルと絶景の調和。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                2. 傾斜42度ケーブルカーで下る高低差170m谷底自噴露天風呂
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                断崖を下る専用ケーブルカーで行く秘湯。川岸に湧き出る毎分大量自噴のシルク泡温泉に浸かり、冬の渓谷のせせらぎと雪景色を愛でる贅沢。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                3. 囲炉裏炭火焼き阿波尾鶏＆でこまわし・温まる十割祖谷そば
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                炭火の周りで焼き上げる川魚アマゴや岩豆腐の味噌田楽「でこまわし」、地鶏阿波尾鶏の鍋。素朴で芳醇な手打ち祖谷そばが心身を温めます。
              </p>
            </div>
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-teal-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              【1泊2日】かずら橋雪景色と大歩危こたつ舟・秘湯露天風呂を巡る冬の秘境探訪ルート
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              井川池田ICまたはJR大歩危駅を起点に、四国屈指の渓谷絶景と名湯、郷土料理を網羅する1泊2日旅。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-teal-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">DAY 1 昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  12:00 大歩危峡に到着 ➔ 渓谷を望む食堂で名物「祖谷そば」＆「でこまわし」ランチ
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  大歩危駅周辺または「大歩危峡まんなか」のレストランへ。太打ちで素朴な風味の十割手打ち「祖谷そば」と、甘辛い柚子味噌が香ばしい「でこまわし」でランチ。四国の秘境に入った旅情が高まります。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">DAY 1 午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  13:30 冬限定「大歩危峡こたつ舟遊覧船」乗船 ➔ 祖谷渓谷の小便小僧絶壁へ
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  ぽかぽかのこたつに入りながら、吉野川の結晶片岩が迫る大歩危峡を遊覧船で巡ります。下船後は県道32号を北上し、高さ200mの断崖絶壁に立つ「小便小僧の像」を見学。吸い込まれそうな深いV字谷の絶景パノラマを体感します。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">DAY 1 夕刻〜夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  16:00 祖谷の温泉宿へチェックイン ➔ ケーブルカー谷底露天風呂＆「阿波尾鶏囲炉裏会席」
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  秘境宿にチェックインし、専用ケーブルカーで谷底の川岸露天風呂、または天空露天風呂へ。夕暮れの山並みとせせらぎに包まれながら美肌温泉を満喫。夕食は囲炉裏を囲み、炭火で焼いたアマゴや阿波尾鶏、熱々の味噌鍋に地酒を合わせます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  09:00 朝の澄み切った「祖谷のかずら橋」渡橋体験 ➔ 琵琶の滝を見学して帰路へ
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  観光客が少ない朝の時間帯にかずら橋へ。白銀の渓谷に架かるカズラの吊り橋を一歩ずつ慎重に渡り、すぐ隣にある落差50mの「琵琶の滝」の清涼な水しぶきを鑑賞。道の駅大歩危で徳島銘菓や地酒を購入し、大満足の帰路へ就きます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Featured Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の祖谷かずら橋と秘境温泉を堪能する厳選名宿5選
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              楽天トラベル公式APIより取得した最新データに基づく、露天風呂・料理・渓谷眺望が高評価の宿。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((h) => (
              <div key={h.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[260px]">
                    <img 
                      src={h.img} 
                      alt={h.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                      厳選第 {h.id} 位
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-teal-900 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60">
                          {h.access}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-stone-600">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-bold text-stone-900 text-sm">{h.rating}</span>
                          <span>({h.reviews}件のクチコミ)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {h.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-500 font-medium">
                        {h.special}
                      </p>

                      <p className="text-sm text-stone-700 leading-relaxed pt-2">
                        {h.story}
                      </p>
                    </div>

                    <div className="space-y-3 bg-stone-50 rounded-2xl p-4 border border-stone-200/70 text-xs sm:text-sm text-stone-700">
                      <div className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-teal-600" />
                        この宿の注目ポイント
                      </div>
                      <ul className="space-y-1.5 list-disc list-inside text-stone-600">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="leading-relaxed">{hl}</li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-stone-200/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="font-bold text-stone-900">客室の提案：</span>
                          <span className="text-stone-600">{h.roomTip}</span>
                        </div>
                        <div>
                          <span className="font-bold text-stone-900">料理の提案：</span>
                          <span className="text-stone-600">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-stone-100">
                      <div>
                        <span className="text-xs text-stone-500 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-black text-teal-950">{h.price}</span>
                      </div>

                      <a 
                        href={h.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-800 to-slate-900 hover:from-teal-900 hover:to-slate-950 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm group"
                      >
                        <span>楽天トラベルで空室・プランを見る</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local Gourmet & Culture Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Gastronomy & Culture</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              祖谷の山懐が受け継ぐ平家落人伝説と伝統の囲炉裏料理
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-teal-700" />
                香ばしい炭火の薫香「でこまわし」と清流アマゴ
              </h3>
              <p>
                「でこまわし」は、祖谷の伝統的な堅豆腐「岩豆腐」やこんにゃく、里芋を串に刺し、柚子味噌を塗って炭火で焼き上げる郷土料理。表面が香ばしく焦げた味噌の甘みと豆腐の濃厚な大豆の旨味が絶妙です。また、吉野川や祖谷川の清流で育った川魚「あめのうお（アマゴ）」は、塩焼きにすることで皮はパリッと、身はしっとりホクホクとした甘みが口いっぱいに広がります。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-teal-700" />
                地鶏「阿波尾鶏」と竹筒の熱燗「かっぽ酒」
              </h3>
              <p>
                徳島県が誇るブランド地鶏「阿波尾鶏」は、肉の旨味成分であるアスパラギン酸が多く含まれ、適度な歯ごたえとジューシーな肉汁が特徴。冬の鍋料理や炭火焼きの主役です。また、青竹を切り落とした筒に地酒を注ぎ、囲炉裏の灰に差し込んで温める「かっぽ酒」は、注ぐ際に「かっぽ、かっぽ」と音が鳴ることから名付けられた風雅な酒器。竹の爽やかな香りが移った熱燗は、冬の夜の秘境宿で格別の酔い心地を届けてくれます。
              </p>
            </div>
          </div>
        </section>

        {/* Practical Tips Section */}
        <section className="bg-teal-50/60 rounded-3xl p-6 sm:p-10 border border-teal-200/60 space-y-6">
          <div className="border-b border-teal-200/80 pb-4">
            <span className="text-teal-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Traveler Tips</span>
            <h2 className="text-xl sm:text-2xl font-bold text-teal-950">
              冬の祖谷渓谷・大歩危を安全に楽しむための装備と山岳道路の心得
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-teal-950">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-teal-700" />
                足元の滑り止めとかずら橋の装備
              </div>
              <p className="leading-relaxed text-stone-700">
                かずら橋は木と木の間隔が広く、冬は水煙や雪で足元が滑りやすくなります。ヒールやサンダルは厳禁で、滑り止めの効いたスニーカーやトレッキングシューズが必須です。両手を自由に使えるよう手袋とリュックを準備しましょう。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-teal-700" />
                冬用タイヤ規制と山間隘路の運転
              </div>
              <p className="leading-relaxed text-stone-700">
                12月中旬〜1月は県道32号線の祖谷山間部で降雪や路面凍結が発生します。マイカーの場合はスタッドレスタイヤを装着し、対向車とのすれ違いに注意して慎重に運転してください。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-teal-700" />
                日没時間と早めの宿チェックイン
              </div>
              <p className="leading-relaxed text-stone-700">
                深いV字谷の祖谷渓谷は冬になると午後16時過ぎには日が陰り、急激に冷え込みます。観光は明るい時間帯に済ませ、15時〜16時頃には宿にチェックインして名湯を楽しむ計画がおすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の祖谷渓谷・かずら橋＆大歩危に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-teal-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-800 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    Q
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-3 pl-9">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links Section */}
        <section className="border-t border-stone-200 pt-10 space-y-6">
          <div className="space-y-1">
            <span className="text-teal-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい全国の冬景色・秘境・名湯特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-tottori-sakaiminato-kaike-onsen-matsubagani-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-teal-800 font-bold text-xs block mb-1">鳥取・境港＆皆生温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-teal-900 transition-colors line-clamp-2">
                山陰松葉ガニ解禁！境港水産物市場と皆生温泉「塩の湯」名宿
              </span>
            </Link>

            <Link 
              href="/winter-saga-tara-takezaki-crab-yutoku-inari-ureshino-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-teal-800 font-bold text-xs block mb-1">佐賀・太良＆嬉野</span>
              <span className="text-stone-900 font-bold group-hover:text-teal-900 transition-colors line-clamp-2">
                冬の内子竹崎カニと祐徳稲荷初詣・日本三大美肌湯嬉野温泉名宿
              </span>
            </Link>

            <Link 
              href="/winter-shizuoka-shimoda-tsumekizaki-suisen-kinmedai-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-teal-800 font-bold text-xs block mb-1">静岡・下田＆爪木崎</span>
              <span className="text-stone-900 font-bold group-hover:text-teal-900 transition-colors line-clamp-2">
                300万本の爪木崎水仙まつりと富士山絶景・一本釣り地金目鯛名宿
              </span>
            </Link>

            <Link 
              href="/winter-hokkaido-shikotsuko-hyoto-blue-onsen-himemasu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-teal-800 font-bold text-xs block mb-1">北海道・千歳支笏湖</span>
              <span className="text-stone-900 font-bold group-hover:text-teal-900 transition-colors line-clamp-2">
                支笏湖ブルーと氷濤まつり・丸駒温泉秘湯＆冬ヒメマス料理名宿
              </span>
            </Link>

            <Link 
              href="/winter-ibaraki-fukuroda-waterfall-ice-onsen-shamo-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-teal-800 font-bold text-xs block mb-1">茨城・袋田＆奥久慈</span>
              <span className="text-stone-900 font-bold group-hover:text-teal-900 transition-colors line-clamp-2">
                日本三名瀑・袋田の滝の完全凍結「氷瀑」と奥久慈軍鶏鍋＆常陸牛名宿
              </span>
            </Link>

            <Link 
              href="/features" 
              className="p-4 rounded-2xl bg-gradient-to-br from-teal-900 to-slate-950 text-white hover:opacity-95 transition-all group block flex flex-col justify-between"
            >
              <div>
                <span className="text-teal-300 font-bold text-xs block mb-1">特集ポータル</span>
                <span className="font-bold group-hover:text-teal-200 transition-colors">
                  全国の季節旅・目的別おすすめ特集一覧を見る
                </span>
              </div>
              <span className="text-xs text-teal-300 mt-2 block font-medium">全特集をチェック ➔</span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-tokushima-iya-valley-kazurabashi-snow-onsen-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
