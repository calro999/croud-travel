import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月天童温泉】A5山形牛すき焼き！名宿5選',
  description: '将棋駒の生産量日本一を誇る山形の名湯「天童温泉」。11月から12月にかけて最盛期を迎える果物の女王「ラ・フランス」の芳醇な甘みと。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '天童温泉 宿泊, 天童温泉 11月 12月, ほほえみの宿 滝の湯, 天童荘, 天童ホテル, ラフランス 山形, 山形牛 すき焼き 天童, 将棋の里, 山寺 立石寺 雪景色',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-yamagata-tendo-onsen-lafrance-yamagata-beef-stay/",
  },
  openGraph: {
    title: '【11・12月天童温泉】A5山形牛すき焼き！名宿5選',
    description: '将棋駒の生産量日本一を誇る山形の名湯「天童温泉」。11月から12月にかけて最盛期を迎える果物の女王「ラ・フランス」の芳醇な甘みと。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-yamagata-tendo-onsen-lafrance-yamagata-beef-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月天童温泉の冬名湯と山形美食】将棋の里・雪見露天風呂と11月旬ラ・フランス＆A5山形牛すき焼きの宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月天童温泉の冬名湯と山形美食】将棋の里・雪見露天風呂と11月旬ラ・フランス＆A5山形牛すき焼きの宿5選",
    description: "将棋駒の生産量日本一を誇る山形の名湯「天童温泉」。11月から12月にかけて最盛期を迎える果物の女王「ラ・フランス」の芳醇な甘みと、極上の霜降りを誇るブランド黒毛和牛「山形牛」のすき焼き・ステーキ会席。初冬の奥羽山脈の雪見露天風呂、山寺（立石寺）の初冬散策を満喫する厳選名宿5選を徹底解説。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'],
  }
};

const faqList = [
  {
    "q": "天童温泉の11月・12月の気候や雪はどのような状況ですか？",
    "a": "11月上旬から中旬は紅葉の終わりから晩秋の気候で、日中は12℃前後ですが朝晩は3℃〜5℃前後まで冷え込みます。11月下旬になると初雪が観測され、12月に入ると周囲の奥羽山脈や月山が白銀に覆われ、温泉街にも雪が積もる日が増えます。12月の平均気温は1℃前後で、防寒性の高いダウンコート、マフラー、滑りにくい冬用ブーツが必須です。お車でお越しの場合は山形自動車道や一般道が凍結・積雪するため、必ずスタッドレスタイヤを装着してください。"
  },
  {
    "q": "山形特産『ラ・フランス』の旬と最も美味しい時期はいつですか？",
    "a": "ラ・フランスは山形県が全国生産量の約8割を占める特産品で、10月に収穫された後、低温でじっくりと『追熟（ついじゅく）』されることで、11月上旬から12月にかけて最も濃厚な甘みと芳醇な香りを放ちます。果肉がとろけるようになめらかになり、果汁が溢れ出すこの時期はまさに『果物の女王』と呼ばれるにふさわしい味わい。天童温泉の各旅館では、生食はもちろん、コンポートやシャーベット、前菜のアクセントなど工夫を凝らしたラ・フランス料理が振る舞われます。"
  },
  {
    "q": "天童が『将棋駒の街』と呼ばれる理由と、街で楽しめるスポットは？",
    "a": "天童市は全国の将棋駒の約9割以上を生産する日本一の将棋の街です。江戸時代末期、天童織田藩が藩士の内職として将棋駒の製造を奨励したのが始まりとされています。街中には将棋の駒をかたどった橋の欄干や歩道の敷石、マンホール、駒の形をした郵便ポストが点在。JR天童駅直結の『天童市将棋資料館』では貴重な名駒や歴史が展示されており、温泉街の工房では自分だけの名前や文字を駒に彫る『将棋駒の彫り・書き体験』も人気です。"
  },
  {
    "q": "天童温泉から名所『山寺（立石寺）』へのアクセスと初冬の見どころは？",
    "a": "松尾芭蕉が『閑さや岩にしみ入る蝉の声』と詠んだ名刹・山寺（宝珠山立石寺）へは、天童温泉から車やタクシーで約15分、またはJR仙山線で天童駅から約20分（山寺駅下車）と非常に近いです。11月下旬から12月の初冬は、観光シーズンの混雑が落ち着き、墨絵のように雪化粧し始めた奇岩と堂宇の静寂な美しさを味わえます。石段には雪や凍結があるため、滑りにくいトレッキングシューズや長靴での参拝がおすすめです。"
  },
  {
    "q": "天童温泉の泉質と効能について教えてください。",
    "a": "天童温泉は明治44年（1911年）、田んぼの井戸掘削中に偶然温泉が湧き出したのが始まりです。泉質はナトリウム・カルシウム-硫酸塩・塩化物温泉（弱アルカリ性）。無色透明で匂いも少なく、肌当たりが極めてまろやかです。硫酸塩泉の引き締め効果と塩化物泉の優れた保温・保湿効果を併せ持ち、入浴後も肌がすべすべになり湯冷めしにくいことから『美肌と温まりの名湯』として親しまれています。"
  }
];

export default function TendoWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-yamagata-tendo-onsen-lafrance-yamagata-beef-stay#article",
        "headline": "【11・12月天童温泉の冬名湯と山形美食】将棋の里・雪見露天風呂と11月旬ラ・フランス＆A5山形牛すき焼きの宿5選",
        "description": "将棋駒の生産量日本一を誇る山形の名湯「天童温泉」。11月から12月にかけて最盛期を迎える果物の女王「ラ・フランス」の芳醇な甘みと、極上の霜降りを誇るブランド黒毛和牛「山形牛」のすき焼き・ステーキ会席。初冬の奥羽山脈の雪見露天風呂、山寺（立石寺）の初冬散策を満喫する厳選名宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-27T00:00:00+09:00",
        "dateModified": "2026-09-27T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド 編集部",
          "url": "https://croud-travel.pages.dev"
        },
        "publisher": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-yamagata-tendo-onsen-lafrance-yamagata-beef-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-yamagata-tendo-onsen-lafrance-yamagata-beef-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "天童温泉の11月・12月の気候や雪はどのような状況ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "11月上旬から中旬は紅葉の終わりから晩秋の気候で、日中は12℃前後ですが朝晩は3℃〜5℃前後まで冷え込みます。11月下旬になると初雪が観測され、12月に入ると周囲の奥羽山脈や月山が白銀に覆われ、温泉街にも雪が積もる日が増えます。12月の平均気温は1℃前後で、防寒性の高いダウンコート、マフラー、滑りにくい冬用ブーツが必須です。お車でお越しの場合は山形自動車道や一般道が凍結・積雪するため、必ずスタッドレスタイヤを装着してください。"
            }
          },
          {
            "@type": "Question",
            "name": "山形特産『ラ・フランス』の旬と最も美味しい時期はいつですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ラ・フランスは山形県が全国生産量の約8割を占める特産品で、10月に収穫された後、低温でじっくりと『追熟（ついじゅく）』されることで、11月上旬から12月にかけて最も濃厚な甘みと芳醇な香りを放ちます。果肉がとろけるようになめらかになり、果汁が溢れ出すこの時期はまさに『果物の女王』と呼ばれるにふさわしい味わい。天童温泉の各旅館では、生食はもちろん、コンポートやシャーベット、前菜のアクセントなど工夫を凝らしたラ・フランス料理が振る舞われます。"
            }
          },
          {
            "@type": "Question",
            "name": "天童が『将棋駒の街』と呼ばれる理由と、街で楽しめるスポットは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "天童市は全国の将棋駒の約9割以上を生産する日本一の将棋の街です。江戸時代末期、天童織田藩が藩士の内職として将棋駒の製造を奨励したのが始まりとされています。街中には将棋の駒をかたどった橋の欄干や歩道の敷石、マンホール、駒の形をした郵便ポストが点在。JR天童駅直結の『天童市将棋資料館』では貴重な名駒や歴史が展示されており、温泉街の工房では自分だけの名前や文字を駒に彫る『将棋駒の彫り・書き体験』も人気です。"
            }
          },
          {
            "@type": "Question",
            "name": "天童温泉から名所『山寺（立石寺）』へのアクセスと初冬の見どころは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "松尾芭蕉が『閑さや岩にしみ入る蝉の声』と詠んだ名刹・山寺（宝珠山立石寺）へは、天童温泉から車やタクシーで約15分、またはJR仙山線で天童駅から約20分（山寺駅下車）と非常に近いです。11月下旬から12月の初冬は、観光シーズンの混雑が落ち着き、墨絵のように雪化粧し始めた奇岩と堂宇の静寂な美しさを味わえます。石段には雪や凍結があるため、滑りにくいトレッキングシューズや長靴での参拝がおすすめです。"
            }
          },
          {
            "@type": "Question",
            "name": "天童温泉の泉質と効能について教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "天童温泉は明治44年（1911年）、田んぼの井戸掘削中に偶然温泉が湧き出したのが始まりです。泉質はナトリウム・カルシウム-硫酸塩・塩化物温泉（弱アルカリ性）。無色透明で匂いも少なく、肌当たりが極めてまろやかです。硫酸塩泉の引き締め効果と塩化物泉の優れた保温・保湿効果を併せ持ち、入浴後も肌がすべすべになり湯冷めしにくいことから『美肌と温まりの名湯』として親しまれています。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-yamagata-tendo-onsen-lafrance-yamagata-beef-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "天童温泉　ほほえみの宿　滝の湯",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53746%2F53746.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "天童荘",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70387%2F70387.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "天童温泉　美味求真の宿　天童ホテル",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5954%2F5954.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "天童温泉　湯の香　松の湯",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52812%2F52812.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "天童温泉　栄屋ホテル",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F84800%2F84800.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "天童温泉　ほほえみの宿　滝の湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/53746/53746.jpg",
              rating: 4.59,
              reviews: 1042,
              price: "¥18,150〜",
              access: "ＪＲ山形新幹線　天童駅より車にて３分、徒歩にて１５分（無料送迎あり）　山形北ＩＣより２０分",
              special: "天童温泉と宿泊者専用ラウンジで、心身をやさしく整える滞在をお楽しみください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53746%2F53746.html",
              story: "自家農園を所有し、安全で滋味あふれる食材とおもてなしの心で全国屈指の人気を誇る名旅館「ほほえみの宿 滝の湯」。宿のシンボルである大浴場には、天然の銘石を贅沢に配した広大な露天風呂や広々とした内湯が広がり、弱アルカリ性の柔らかな美肌の湯が贅沢に注がれます。11月から12月にかけては、宿の日本庭園に雪吊りが施され、初冬の冷気の中で湯煙に包まれながら眺める庭園雪景色が格別の旅情を誘います。",
              roomTip: "プライベートな源泉露天風呂を備えた離れ客室「天の原」や数寄屋和室。広々とした広縁から冬の日本庭園を眺め、静寂の中で心安らぐ休日を過ごせます。",
              gourmetTip: "直営の無農薬自家農園野菜とA5ランク山形牛のすき焼き会席。11月・12月が食べ頃のラ・フランスを使った特製デザートや、山形名物芋煮、山形地酒「出羽桜」「十四代」との贅沢なペアリングを堪能できます。",
              highlights: [
                "自家農園無農薬野菜＆庭園雪吊り露天風呂で味わう山形屈指のホスピタリティ",
                "弱アルカリ性の肌に優しい硫酸塩泉で湯上がりもしっとり続く保温効果",
                "11月12月旬ラ・フランスデザート＆A5極上山形牛すき焼き・地酒出羽桜"
              ]
            },
            {
              id: 2,
              name: "天童荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/70387/70387.jpg",
              rating: 4.80,
              reviews: 22,
              price: "¥35,200〜",
              access: "ＪＲ　天童駅より車で５分",
              special: "二十四節気のおもてなし。古き良き日本の宿でございます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70387%2F70387.html",
              story: "天童温泉の街並みから一線を画した静謐な佇まい、数寄屋造りの平屋離れで極上の非日常を紡ぐ最高級老舗宿「天童荘」。各界の食通や文化人がお忍びで訪れる名宿で、館内には名茶人好みの茶室や美術品がさりげなく配されています。総檜造りの大浴場や露天風呂に注ぐ名湯は肌をしっとりと包み込み、初冬の静まり返った空気の中で木の温もりと温泉の芳香に満たされる至高のリラクゼーションを提供します。",
              roomTip: "贅を尽くした離れスイートや数寄屋造り客室。専任の仲居さんによる細やかなもてなしと、庭園の初冬景色を愛でながら静かな時間を独占できます。",
              gourmetTip: "宿の名物である秘伝のタレで香ばしく焼き上げる「鰻蒲焼」と、極上霜降り山形牛のしゃぶしゃぶ・ステーキ懐石。旬の追熟されたラ・フランスの前菜やデザートが初冬の膳を華やかに彩ります。",
              highlights: [
                "数寄屋造り平屋離れの最高級老舗宿＆名物鰻蒲焼とA5山形牛しゃぶしゃぶ懐石",
                "総檜風呂から漂う木の香りと静寂＆皇族や文化人が愛した上質なもてなし",
                "秘伝タレで焼く名物鰻と極上山形牛懐石＆ラ・フランスの創作前菜"
              ]
            },
            {
              id: 3,
              name: "天童温泉　美味求真の宿　天童ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5954/5954.jpg",
              rating: 4.53,
              reviews: 1849,
              price: "¥12,100〜",
              access: "山形新幹線で東京駅ー天童駅3H。天童駅東口から無料送迎4分（要予約）。天童ICから10分、山形北ICから15分。街中の宿",
              special: "【楽天トラベルゴールドアワード】【楽天トラベル日本の宿】2024年W受賞！山形の旬を味わえる会席料理",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5954%2F5954.html",
              story: "「美味求真」を掲げ、山形が誇る食材の美味しさを極限まで追求する温泉宿「美味求真の宿 天童ホテル」。広々とした大浴場には三段に重なる滝が流れる野趣あふれる庭園露天風呂があり、水音と湯煙が幻想的な空間を作り出しています。初冬の澄んだ夜空を見上げながらの露天風呂は開放感抜群。キッズスペースやリラクゼーションサロンも完備し、ファミリーからカップルまで誰もが心地よく滞在できます。",
              roomTip: "温泉展望風呂付き客室や、和室とベッドルームを兼ね備えた和モダンツイン。上層階からは初冬の奥羽山脈や月山方面の美しい稜線を望めます。",
              gourmetTip: "山形牛を陶板焼きやすき焼き、牛鍋など多彩な調理法で味わう「美味求真会席」。冬の味覚である寒ダラ汁、山形県産米「つや姫」の炊きたてご飯、とろけるラ・フランスのコンポートなど、山形の豊穣が詰まっています。",
              highlights: [
                "三段の滝が流れる庭園大露天風呂＆山形牛づくしの美味求真会席膳",
                "開放感あふれる大浴場＆初冬の澄んだ星空を眺める爽快な露天風呂",
                "山形牛陶板焼き・芋煮鍋・炊きたてつや姫・とろけるラ・フランスコンポート"
              ]
            },
            {
              id: 4,
              name: "天童温泉　湯の香　松の湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/52812/52812.jpg",
              rating: 4.81,
              reviews: 185,
              price: "¥19,360〜",
              access: "山形新幹線東京駅から天童駅まで約2時間45分。天童駅から車で約5分",
              special: "天童唯一二種類の源泉100%を掛流し☆山形牛付お部屋食",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52812%2F52812.html",
              story: "全館畳敷きの温もりと、源泉かけ流しの柔らかな湯が評判のアットホームな名宿「天童温泉 湯の香 松の湯」。玄関で靴を脱ぐと足の裏に伝わる畳の心地よさに旅の緊張がほどけます。露天風呂や大浴場には天童温泉の源泉が掛け流され、芯からポカポカと温まる泉質が冬の冷えを心地よく解消。女将の手作り感あふれる温かな接客と清潔感あふれる館内が高評価を得ています。",
              roomTip: "畳の香る純和室や落ち着きある和洋室。素足で歩ける開放感と、初冬の静けさに包まれた居心地の良いプライベート空間。",
              gourmetTip: "料理長が厳選する山形牛と庄内浜直送の鮮魚を組み合わせた手作り季節会席。山形名物の熱々芋煮鍋やラ・フランスのシャーベットなど、素朴で贅沢な山形の郷土の味が心に沁みます。",
              highlights: [
                "全館畳敷きの素足の心地よさ＆100%源泉かけ流し美肌湯と手作り山形会席",
                "肌に吸い付く柔らかな泉触り＆女将の温かい笑顔に癒やされる隠れ宿",
                "山形牛すき焼き＆庄内浜鮮魚お造り・熱々郷土芋煮鍋の贅沢膳"
              ]
            },
            {
              id: 5,
              name: "天童温泉　栄屋ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/84800/84800.jpg",
              rating: 4.01,
              reviews: 470,
              price: "¥6,050〜",
              access: "天童駅よりお車にて５分",
              special: "天童唯一の出羽の山々を見渡す絶景展望露天風呂と山形の味覚会席で心ほどける極上旅",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F84800%2F84800.html",
              story: "天童温泉街の中心に位置し、屋上展望大浴場から天童の街並みと奥羽山脈の山並みを一望できる「天童温泉 栄屋ホテル」。初冬の冷たく澄んだ外気を感じながら浸かる展望露天風呂は格別の爽快感です。リーズナブルな価格設定でありながら、山形牛を中心とした満足度の高い料理を提供し、天童の将棋駒散策や山寺観光の拠点として高い利便性を誇ります。",
              roomTip: "眺望の良い和室やモダンツイン。初冬の夕暮れに赤く染まる山々や、夜に広がる天童の街の灯りをのんびりと鑑賞できます。",
              gourmetTip: "山形牛陶板焼きを中心とした季節の会席膳。地元の特産であるラ・フランスを使ったデザートや、山形の漬物「青菜漬（せいさいづけ）」、炊きたてつや姫の豊かな甘みを味わえます。",
              highlights: [
                "屋上展望大浴場から奥羽山脈を一望＆将棋の街の観光拠点に最適な利便性",
                "初冬の冷気と温かい名湯のコントラストを楽しむ展望雪見露天風呂",
                "山形牛陶板焼き＆山形郷土料理・山形地酒とともに味わう冬の美食"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-emerald-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="天童温泉の庭園雪見露天風呂と山形牛すき焼き・初冬の味覚ラ・フランス"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/90 text-emerald-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-emerald-800/50">
            <Award className="w-4 h-4 text-emerald-300" />
            <span>11月・12月限定 将棋の里の初冬雪見名湯と果物の女王ラ・フランス＆山形牛会席</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月天童温泉の冬名湯と山形美食】<br className="hidden sm:inline" />
            将棋の里・雪見露天風呂と11月旬ラ・フランス＆A5山形牛すき焼きの宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            奥羽山脈の初冬の山並みを望む将棋駒のふるさと「天童温泉」。11月から12月に最も甘く芳醇に香り立つラ・フランスと、極上の霜降りを誇るA5山形牛すき焼きに舌鼓を打ち、柔らかな美肌露天風呂で温まる贅沢な休日。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-emerald-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-400" /> 山形県天童市鎌田本町（山形新幹線天童駅車5分）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月天童温泉】A5山形牛すき焼き！名宿5選","item":"https://croud-travel.pages.dev/winter-yamagata-tendo-onsen-lafrance-yamagata-beef-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Tendo Onsen Heritage & Winter Feast</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                将棋駒の伝統が息づく温泉街と、晩秋から初冬へ移ろう山形の恵み
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            山形盆地のほぼ中央に位置し、奥羽山脈の雄大な峰々を仰ぐ「天童温泉」。その歴史は明治44年（1911年）、静かな田園地帯の井戸を掘削していた際に温泉が噴出したことから始まりました。同時に天童は、江戸時代末期に天童織田藩の武士の内職として始まった将棋駒づくりが受け継がれ、今や全国シェアの9割以上を誇る「将棋駒の街」としても知られています。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            天童温泉の泉質は、ナトリウム・カルシウム-硫酸塩・塩化物温泉（弱アルカリ性）。無色透明でまろやかなお湯は肌触りがとても優しく、硫酸塩泉特有の肌の引き締め効果と、塩化物泉の抜群の保温効果が同時に働きます。初冬の冷え込みが始まる11月から12月にかけて、露天風呂に注ぐ豊かな湯に浸かると、体の芯までじんわりと熱が染み渡り、湯上がり後も温かさが長く続きます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして初冬の天童を訪れる最大の歓びが、「食」の感動です。11月から12月は、山形が誇る果物の女王「ラ・フランス」がじっくりと追熟され、果汁滴る最高の食べ頃を迎える最盛期。さらに、澄んだ空気と清らかな雪解け水で育まれた「山形牛」の極上すき焼きやステーキ、山形のソウルフードである熱々の芋煮、新米のつや姫、初冬の新酒地酒「出羽桜」など、冬の東北を代表する至高の味覚が食卓を彩ります。
          </p>
          
          <div className="bg-emerald-50/70 rounded-2xl p-5 border border-emerald-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-emerald-700" />
                11月・12月天童温泉 旅のハイライト
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                11月12月旬ラ・フランスの極上デザート・A5ランク山形牛すき焼き会席・弱アルカリ性美肌硫酸塩泉雪見露天風呂・将棋駒の街散策・山形新幹線直通アクセス
              </p>
            </div>
            <a
              href="#hotels"
              className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              厳選名宿5選を見る
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-stone-100/80 rounded-2xl p-6 border border-stone-200">
          <h2 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-emerald-800" />
            目次・インデックス
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-stone-700">
            <a href="#spring-feature" className="hover:text-emerald-800 hover:underline flex items-center gap-1.5">
              <span>1. 天童温泉の魅力：弱アルカリ性美肌湯と奥羽山脈の雪見露天</span>
            </a>
            <a href="#lafrance-guide" className="hover:text-emerald-800 hover:underline flex items-center gap-1.5">
              <span>2. 11月・12月が旬！果物の女王「ラ・フランス」の芳醇な味わい</span>
            </a>
            <a href="#shogi-heritage" className="hover:text-emerald-800 hover:underline flex items-center gap-1.5">
              <span>3. 将棋駒の日本一の里：歩いて楽しむ天童の歴史と駒彫り体験</span>
            </a>
            <a href="#hotels" className="hover:text-emerald-800 hover:underline flex items-center gap-1.5">
              <span>4. 11・12月に泊まりたい天童温泉の厳選名宿5選</span>
            </a>
            <a href="#gourmet" className="hover:text-emerald-800 hover:underline flex items-center gap-1.5">
              <span>5. 山形の冬の贅沢：A5山形牛すき焼き・熱々芋煮・銘酒出羽桜</span>
            </a>
            <a href="#itinerary" className="hover:text-emerald-800 hover:underline flex items-center gap-1.5">
              <span>6. 1泊2日 天童温泉〜初冬の山寺立石寺・将棋資料館 王道モデルコース</span>
            </a>
            <a href="#faq" className="hover:text-emerald-800 hover:underline flex items-center gap-1.5">
              <span>7. よくある質問（FAQ）と初冬の気候・服装・雪道対策</span>
            </a>
          </nav>
        </section>

        {/* Section 1: Spring Feature */}
        <section id="spring-feature" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Natural Spring Quality</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                1. 天童温泉の魅力：弱アルカリ性美肌湯と奥羽山脈の雪見露天
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            天童温泉の湯は、地下数百メートルから湧き出る弱アルカリ性の硫酸塩・塩化物泉。硫酸塩泉は古くから「傷の湯」「美肌の湯」として親しまれ、肌の角質を優しく整えてしっとりとしたなめらかさを与えてくれます。さらに塩化物泉の成分が肌を包み込み、湯上がりの熱を逃がさないため、冬の寒さが厳しい山形の地でも長時間ポカポカが持続します。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月下旬から12月にかけては、温泉街を取り囲む奥羽山脈の峰々が白く雪化粧し始めます。庭園露天風呂や展望大浴場に浸かりながら、初冬の冷たい外気を吸い込み、立ち上る湯煙の向こうに雪景色を愛でる雪見風呂は、まさに東北の温泉旅行の醍醐味です。
          </p>
        </section>

        {/* Section 2: La France Guide */}
        <section id="lafrance-guide" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Queen of Fruits</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                2. 11月・12月が旬！果物の女王「ラ・フランス」の芳醇な味わい
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            フランス生まれの洋梨「ラ・フランス」は、その気難しい栽培条件から本国フランスではほとんど栽培されなくなりましたが、山形の農家の情熱と技術によって見事に開花し、現在では山形県が全国生産量の約8割を誇ります。10月に収穫された実は、専用の貯蔵庫で低温管理されながら約1ヶ月かけて「予冷」と「追熟」が行われます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            ちょうど11月上旬から12月にかけて、追熟が完了したラ・フランスは、果肉がバターのようになめらかになり、高貴な芳香と滴るような甘い果汁をたたえます。天童温泉の旅館では、この最高の旬を迎えたラ・フランスを夕食のデザートや前菜、特製タルト、自家製シャーベットとして提供し、宿泊客を魅了しています。
          </p>
        </section>

        {/* Section 3: Shogi Heritage */}
        <section id="shogi-heritage" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Shogi Piece Craft & Culture</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                3. 将棋駒の日本一の里：歩いて楽しむ天童の歴史と駒彫り体験
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            天童の街を歩くと、いたるところに将棋の意匠を見つけることができます。倉津川にかかる橋の欄干には王将や飛車などの巨大な駒が据えられ、歩道のブロックには詰将棋の問題が埋め込まれています。初冬の凛とした空気の中、足湯に浸かりながら将棋の街をのんびり散策するのも天童ならではの楽しみ方です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            JR天童駅直結の「天童市将棋資料館」では、豊臣秀吉の時代から続く将棋の歴史や全国の名工が手掛けた美術品のような飾り駒を鑑賞できます。また市内の工房では、黄楊（つげ）の木片に彫刻刀で文字を彫り込む「飾り駒彫り体験」も開催されており、旅の思い出やお土産として大変人気を集めています。
          </p>
        </section>

        {/* Section 4: Hotel Cards */}
        <section id="hotels" className="space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
              Selected 5 Luxury Ryokan & Hotels
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              4. 11・12月に泊まりたい天童温泉の厳選名宿5選
            </h2>
            <p className="text-sm text-stone-600 max-w-2xl mx-auto">
              庭園雪見露天風呂、自家農園野菜、A5山形牛すき焼き、旬のラ・フランス料理を心ゆくまで堪能できる名旅館を厳選しました。
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 hover:shadow-md transition duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full bg-stone-900">
                    <Image
                      src={hotel.img}
                      alt={hotel.name}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute top-4 left-4 bg-emerald-900/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                      第{hotel.id}位 厳選宿
                    </div>
                  </div>
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-amber-500">
                          <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                          <span className="font-extrabold text-stone-900 text-lg">{hotel.rating}</span>
                          <span className="text-xs text-stone-500">({hotel.reviews}件のレビュー)</span>
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
                          {hotel.price}
                        </span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {hotel.name}
                      </h3>
                      
                      <p className="text-xs text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{hotel.access}</span>
                      </p>

                      <p className="text-stone-700 text-sm leading-relaxed">
                        {hotel.story}
                      </p>

                      <div className="space-y-2 pt-2">
                        {hotel.highlights.map((h, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-stone-50 rounded-2xl p-4 space-y-2 border border-stone-200/60 text-xs">
                        <div>
                          <strong className="text-stone-900 font-bold block sm:inline">客室の魅力: </strong>
                          <span className="text-stone-600">{hotel.roomTip}</span>
                        </div>
                        <div>
                          <strong className="text-stone-900 font-bold block sm:inline">冬の味覚: </strong>
                          <span className="text-stone-600">{hotel.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-stone-100">
                      <span className="text-xs text-stone-400">※楽天トラベル公式プラン提携</span>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white text-sm font-bold rounded-xl transition duration-200 shadow-md group"
                      >
                        <span>空室・宿泊プランを確認</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Gourmet */}
        <section id="gourmet" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Yamagata Winter Gastronomy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                5. 山形の冬の贅沢：A5山形牛すき焼き・熱々芋煮・銘酒出羽桜
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            山形が世界に誇る黒毛和牛「山形牛」。昼夜の寒暖差が大きい山形の気候でじっくり育てられた牛は、肉質がきめ細かく、融点の低い上質なサシ（霜降り）が特徴です。すき焼き鍋で特製の甘辛い割り下にくぐらせると、口の中に入れた瞬間に上質な脂の甘みと赤身の深いコクがとろけるように広がります。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            さらに山形の郷土の誇り「芋煮」は、里芋と牛肉、こんにゃく、ネギを醤油仕立ての出汁でじっくり煮込んだ冬の最高のごちそう。地元の銘酒「出羽桜（でわざくら）」をはじめとする初冬のしぼりたて新酒地酒、炊きたての山形ブランド米「つや姫」とともに味わう夕宴は、旅人を至福の幸福感で満たしてくれます。
          </p>
        </section>

        {/* Section 6: Itinerary */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Suggested 2-Day Plan</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                6. 1泊2日 天童温泉〜初冬の山寺立石寺・将棋資料館 王道モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-emerald-800 pl-4 sm:pl-6 space-y-2">
              <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">【1日目】山形新幹線で天童へ〜将棋の街散策と庭園雪見露天</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                12:45 山形新幹線「天童駅」到着 → 天童市将棋資料館＆工房見学
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                駅直結の資料館で将棋駒の名品を見学。工房で職人の伝統彫り技を鑑賞し、お土産の駒を購入。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                15:00 天童温泉の宿にチェックイン → 弱アルカリ性美肌露天風呂
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                日本庭園の雪吊りを眺めながら、体の芯まで温まる名湯に浸かり旅の疲れをほぐす。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                18:30 A5山形牛すき焼き＆旬のラ・フランス会席
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                極上山形牛のすき焼き、熱々芋煮、とろける完熟ラ・フランスのデザートを地酒出羽桜とともに満喫。
              </p>
            </div>

            <div className="border-l-2 border-stone-300 pl-4 sm:pl-6 space-y-2 pt-2">
              <span className="text-xs font-extrabold text-stone-500 uppercase tracking-wider">【2日目】朝風呂でリフレッシュ〜初冬の山寺参拝＆果樹園直売所</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                08:00 朝の露天風呂 → つや姫と郷土料理の朝食
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                炊きたてつや姫と温かい味噌汁、手作りの山形郷土小鉢で心地よい朝を迎える。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                09:30 名刹「山寺（宝珠山立石寺）」へ（車で約15分）
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                初冬の雪をまとった根本中堂や五大堂を参拝。墨絵のような絶景パノラマを見晴らす。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                13:00 天童市内の果樹園直売所で旬のラ・フランスをお土産に購入 → 帰路へ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                産地ならではの最高品質のラ・フランスやりんごを自宅や親しい人へ発送。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        

        {/* Internal Links / Related Guides */}
        <section className="bg-stone-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">Related Tohoku Winter Guides</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい東北・山形の冬雪見温泉＆極上ブランド牛特集
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              山形・東北各地の歴史ある名湯、雪景色が美しい露天風呂、極上和牛を堪能できる特集記事を多数掲載しています。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-yamagata-ginzan-onsen-snow-taisho-stay"
              className="bg-stone-900/90 hover:bg-stone-800 p-4 rounded-2xl transition border border-stone-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">山形・銀山</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">銀山温泉 大正ロマンガス灯雪景色と木造多層建築の宿</h3>
            </Link>
            <Link 
              href="/winter-yamagata-onogawa-yonezawa-beef-stay"
              className="bg-stone-900/90 hover:bg-stone-800 p-4 rounded-2xl transition border border-stone-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">山形・小野川</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">小野川温泉 小野小町ゆかりの美肌湯と米沢牛すき焼きの宿</h3>
            </Link>
            <Link 
              href="/winter-zao-snow-monster-ice-tree-stay"
              className="bg-stone-900/90 hover:bg-stone-800 p-4 rounded-2xl transition border border-stone-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">山形・蔵王</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">蔵王温泉 樹氷ライトアップと強酸性にごり湯露天風呂の宿</h3>
            </Link>
            <Link 
              href="/winter-miyagi-akiu-onsen-sendai-beef-serinabe-stay"
              className="bg-stone-900/90 hover:bg-stone-800 p-4 rounded-2xl transition border border-stone-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">宮城・秋保</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">秋保温泉 名取川渓谷美とA5仙台牛・名物せり鍋の宿</h3>
            </Link>
            <Link 
              href="/winter-fukushima-aizu-higashiyama-snow-heritage-stay"
              className="bg-stone-900/90 hover:bg-stone-800 p-4 rounded-2xl transition border border-stone-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">福島・会津東山</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">会津東山温泉 歴史ある渓流雪見露天と会津郷土料理の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-stone-900/90 hover:bg-stone-800 p-4 rounded-2xl transition border border-stone-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-yamagata-tendo-onsen-lafrance-yamagata-beef-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
