import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月由布院温泉】由布岳冠雪！名宿5選',
  description: '11月から12月にかけて大分県・由布院温泉は、冷え込んだ早朝に金鱗湖から立ち昇る幻想的な「朝霧」と、初雪を冠した優美な由布岳の絶景に包まれます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '由布院温泉 宿泊, 由布院 11月 12月, 金鱗湖 朝霧, ゆふいん花由, ゆふいん月燈庵, ゆふいん山水館, 旅亭 田乃倉, ほたるの宿 仙洞, 豊後牛 すき焼き, 由布岳 雪化粧, 大分 温泉 旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-oita-yufuin-onsen-kinrinko-asamiri-bungo-beef-stay/",
  },
  openGraph: {
    title: '【11・12月由布院温泉】由布岳冠雪！名宿5選',
    description: '11月から12月にかけて大分県・由布院温泉は、冷え込んだ早朝に金鱗湖から立ち昇る幻想的な「朝霧」と、初雪を冠した優美な由布岳の絶景に包まれます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-oita-yufuin-onsen-kinrinko-asamiri-bungo-beef-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月由布院温泉の冬名湯と金鱗湖の幻想朝霧】由布岳冠雪・離れ露天風呂と極上豊後牛＆冠地鶏鍋会席の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月由布院温泉の冬名湯と金鱗湖の幻想朝霧】由布岳冠雪・離れ露天風呂と極上豊後牛＆冠地鶏鍋会席の宿5選",
    description: "11月から12月にかけて大分県・由布院温泉は、冷え込んだ早朝に金鱗湖から立ち昇る幻想的な「朝霧」と、初雪を冠した優美な由布岳の絶景に包まれます。メタケイ酸を豊富に含む弱アルカリ性のまろやかな美肌の湯、全室離れや客室露天風呂で過ごす静謐な冬のプライベートタイム、最高峰ブランド黒毛和牛「おおいた和牛（豊後牛）」の炭火焼きやすき焼き、大分特産「冠地鶏」のあったか地鶏鍋を堪能する至高の名宿5選を徹底解説。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'],
  }
};

const faqList = [
  {
    "q": "由布院温泉の11月・12月の気候と寒さはどのくらいですか？冬用タイヤは必要ですか？",
    "a": "由布院は標高約450〜500メートルの盆地に位置するため、大分市内や福岡市などの平野部よりも気温が約3〜5℃低くなります。11月は最高気温14℃前後、朝晩は5℃以下まで冷え込みます。12月に入ると最高気温でも8℃前後、早朝や夜間は氷点下に達する日が増えます。12月中旬以降にお車で訪れる場合は、湯布院IC周辺や峠道で路面凍結が発生することがあるため、スタッドレスタイヤの装着をおすすめします。服装は風を通さない厚手のダウンジャケット、マフラー、手袋、朝霧散策用の歩きやすい靴をご用意ください。"
  },
  {
    "q": "冬の風物詩『金鱗湖の朝霧』を見るためのベストな時間帯や条件は？",
    "a": "金鱗湖の朝霧が最も美しく発生するのは、11月から12月にかけての放射冷却で冷え込んだ、風のない晴れた早朝（日の出前の午前6時30分頃から午前8時頃まで）です。金鱗湖は湖底から温泉（約30℃）と清水が同時に湧き出しているため、冬の冷たい外気との温度差によって大量の湯気が水面から立ち昇ります。朝日が差し込むと、黄金色の光と白い霧が織りなす息をのむほど幻想的な光景が広がります。金鱗湖近くの宿に宿泊すると、混雑のない静寂の中でこの絶景を堪能できます。"
  },
  {
    "q": "由布院温泉の泉質や効能、湯ざわりの特徴はどのようなものですか？",
    "a": "由布院温泉の主な泉質は「アルカリ性単純温泉」または「単純温泉」で、無色透明・無味無臭の柔らかな湯ざわりが特徴です。特筆すべきは天然の保湿成分として知られる「メタケイ酸」の含有量が非常に高い点です。肌のセラミドを整え、角質層の水分保持力を高める効果があるため、入浴後は化粧水をつけた後のように肌がしっとりすべすべになります。刺激が極めて少なく肌に優しいため、長湯をしても湯疲れしにくく、赤ちゃんからご年配の方まで安心して入浴できます。"
  },
  {
    "q": "冬の由布院観光でおすすめのグルメや食べ歩きスポットは？",
    "a": "冬の由布院では、大分県が誇るブランド黒毛和牛「おおいた和牛（豊後牛）」のすき焼きや炭火焼きステーキが絶品です。また、大分特産の「冠地鶏（かんむりじどり）」の水炊き鍋や、豊後水道直送の「関アジ・関サバ」の活造りも冬に脂が乗って最高の味わいとなります。日中の観光では、湯の坪街道沿いで揚げたての「金賞コロッケ」、蒸したての温泉まんじゅう、湯布院産チーズケーキ、由布院クラフトビールや地酒の角打ちなどを楽しむのが定番です。"
  },
  {
    "q": "博多駅や大分空港から由布院温泉へのアクセス方法は？",
    "a": "福岡・博多方面からは、JR特急「ゆふいんの森号」または特急「ゆふ号」を利用して約2時間15分、あるいは博多バスターミナル・天神高速バスターミナルから運行している高速バス「ゆふいん号」で約2時間10分で到着します。大分空港からは、由布院駅前行きの直行高速バス（空港特急バス）が運行されており、所要時間は約55分です。冬場の雪や凍結を心配される場合は、特急列車や高速バスの利用が非常にスムーズでおすすめです。"
  }
];

export default function YufuinOnsenWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-oita-yufuin-onsen-kinrinko-asamiri-bungo-beef-stay#article",
        "headline": "【11・12月由布院温泉の冬名湯と金鱗湖の幻想朝霧】由布岳冠雪・離れ露天風呂と極上豊後牛＆冠地鶏鍋会席の宿5選",
        "description": "11月から12月にかけて大分県・由布院温泉は、冷え込んだ早朝に金鱗湖から立ち昇る幻想的な「朝霧」と、初雪を冠した優美な由布岳の絶景に包まれます。メタケイ酸を豊富に含む弱アルカリ性のまろやかな美肌の湯、全室離れや客室露天風呂で過ごす静謐な冬のプライベートタイム、最高峰ブランド黒毛和牛「おおいた和牛（豊後牛）」の炭火焼きやすき焼き、大分特産「冠地鶏」のあったか地鶏鍋を堪能する至高の名宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-28T00:00:00+09:00",
        "dateModified": "2026-09-28T00:00:00+09:00",
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
          "@id": "https://croud-travel.pages.dev/winter-oita-yufuin-onsen-kinrinko-asamiri-bungo-beef-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-oita-yufuin-onsen-kinrinko-asamiri-bungo-beef-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "由布院温泉の11月・12月の気候と寒さはどのくらいですか？冬用タイヤは必要ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "由布院は標高約450〜500メートルの盆地に位置するため、大分市内や福岡市などの平野部よりも気温が約3〜5℃低くなります。11月は最高気温14℃前後、朝晩は5℃以下まで冷え込みます。12月に入ると最高気温でも8℃前後、早朝や夜間は氷点下に達する日が増えます。12月中旬以降にお車で訪れる場合は、湯布院IC周辺や峠道で路面凍結が発生することがあるため、スタッドレスタイヤの装着をおすすめします。服装は風を通さない厚手のダウンジャケット、マフラー、手袋、朝霧散策用の歩きやすい靴をご用意ください。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の風物詩『金鱗湖の朝霧』を見るためのベストな時間帯や条件は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "金鱗湖の朝霧が最も美しく発生するのは、11月から12月にかけての放射冷却で冷え込んだ、風のない晴れた早朝（日の出前の午前6時30分頃から午前8時頃まで）です。金鱗湖は湖底から温泉（約30℃）と清水が同時に湧き出しているため、冬の冷たい外気との温度差によって大量の湯気が水面から立ち昇ります。朝日が差し込むと、黄金色の光と白い霧が織りなす息をのむほど幻想的な光景が広がります。金鱗湖近くの宿に宿泊すると、混雑のない静寂の中でこの絶景を堪能できます。"
            }
          },
          {
            "@type": "Question",
            "name": "由布院温泉の泉質や効能、湯ざわりの特徴はどのようなものですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "由布院温泉の主な泉質は「アルカリ性単純温泉」または「単純温泉」で、無色透明・無味無臭の柔らかな湯ざわりが特徴です。特筆すべきは天然の保湿成分として知られる「メタケイ酸」の含有量が非常に高い点です。肌のセラミドを整え、角質層の水分保持力を高める効果があるため、入浴後は化粧水をつけた後のように肌がしっとりすべすべになります。刺激が極めて少なく肌に優しいため、長湯をしても湯疲れしにくく、赤ちゃんからご年配の方まで安心して入浴できます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の由布院観光でおすすめのグルメや食べ歩きスポットは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "冬の由布院では、大分県が誇るブランド黒毛和牛「おおいた和牛（豊後牛）」のすき焼きや炭火焼きステーキが絶品です。また、大分特産の「冠地鶏（かんむりじどり）」の水炊き鍋や、豊後水道直送の「関アジ・関サバ」の活造りも冬に脂が乗って最高の味わいとなります。日中の観光では、湯の坪街道沿いで揚げたての「金賞コロッケ」、蒸したての温泉まんじゅう、湯布院産チーズケーキ、由布院クラフトビールや地酒の角打ちなどを楽しむのが定番です。"
            }
          },
          {
            "@type": "Question",
            "name": "博多駅や大分空港から由布院温泉へのアクセス方法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "福岡・博多方面からは、JR特急「ゆふいんの森号」または特急「ゆふ号」を利用して約2時間15分、あるいは博多バスターミナル・天神高速バスターミナルから運行している高速バス「ゆふいん号」で約2時間10分で到着します。大分空港からは、由布院駅前行きの直行高速バス（空港特急バス）が運行されており、所要時間は約55分です。冬場の雪や凍結を心配される場合は、特急列車や高速バスの利用が非常にスムーズでおすすめです。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-oita-yufuin-onsen-kinrinko-asamiri-bungo-beef-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "由布院温泉　朝霧のみえる宿　ゆふいん花由",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76377%2F76377.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "由布院温泉　ゆふいん月燈庵",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54519%2F54519.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "由布院温泉　ゆふいん山水館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1678%2F1678.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "由布院温泉　旅亭　田乃倉",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38277%2F38277.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "由布院温泉　旅館　ほたるの宿　仙洞",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41834%2F41834.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "由布院温泉　朝霧のみえる宿　ゆふいん花由",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/76377/76377.jpg",
              rating: 4.70,
              reviews: 1095,
              price: "¥25,520〜",
              access: "■湯布院ＩＣから車1分■由布院駅から車で７分程でございます。■無料送迎もございます（電話にて要予約）",
              special: "【湯布院随一の絶景＆眺望★★★★★】お客様評価5つ星！由布岳を望む眺望とPH9.2の温泉自慢の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76377%2F76377.html",
              story: "由布院盆地を一望する高台に広大な敷地を構え、「朝霧のみえる宿」の名にふさわしい圧倒的なパノラマビューを誇る「ゆふいん花由（はなよし）」。11月から12月の早朝、冷気が盆地に溜まると、客室テラスや露天風呂の眼下一面に真っ白な雲海（朝霧）が広がり、まるで天空の城に滞在しているかのような神仙の境地を味わえます。客室は全室に温泉風呂が備わる離れやモダン和洋室が中心で、誰にも気兼ねすることなく初冬の絶景を独占できます。敷地内の随所から優美な由布岳の稜線を望むことができ、朝夕の光の移ろいに息をのむ贅沢な滞在が叶います。",
              roomTip: "「ゆめ里エリア」の客室露天風呂付き離れ。ウッドデッキの湯船に浸かりながら、早朝に眼下を覆い尽くす朝霧の海と、朝日に照らされる由布岳の雪化粧を心ゆくまで堪能できます。",
              gourmetTip: "料理長が腕を振るう季節の創作和会席。きめ細やかな霜降りが美しい最高級おおいた和牛の陶板焼きをはじめ、豊後水道直送の旬魚のお造り、大分県産カボスの香りを利かせた温物など、五感で味わう逸品揃い。",
              highlights: [
                "由布院盆地を一望する高台立地＆早朝に眼下を埋め尽くす幻想的な朝霧の海",
                "全室に天然温泉風呂を備えた離れ客室とパノラマ展望ロビーラウンジ",
                "最高峰ブランド「おおいた和牛」陶板焼きと豊後水道の旬魚が彩る特選会席"
              ]
            },
            {
              id: 2,
              name: "由布院温泉　ゆふいん月燈庵",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54519/54519.jpg",
              rating: 4.00,
              reviews: 172,
              price: "¥20,000〜",
              access: "湯布院ICより車で１５分。由布院駅より車で７分。大分自動車道～湯布院ICを出て2つ目の信号を右折。50号線に乗り約4分。",
              special: "【『ももクロさん』出演 楽天トラベルCM ２０２３年秋冬編 撮影宿】全18棟の露天風呂付客室",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54519%2F54519.html",
              story: "由布岳の麓、人里離れた広大な雑木林の中に静かに佇み、日本の原風景を現代に蘇らせた名宿「ゆふいん月燈庵（げっとうあん）」。宿のエントランスをくぐると、小川のせせらぎの上に架かる専用の木造吊り橋が現れ、日常の喧騒から離れた特別な別世界へと誘われます。約1万坪の敷地に配された客室はわずか18室、そのすべてが独立した離れで露天風呂付き。11月下旬の晩秋の名残から12月の初雪の季節にかけて、木立の梢が澄み切った冬空に映え、夜には満天の星と灯籠の柔らかな明かりが雪景色を照らし出します。",
              roomTip: "築300年の古民家を移築・再生した特別棟「渓酔の間」または離れ和洋室。歴史を刻んだ太い梁とモダンなベッドルームが調和し、専用露天風呂から初冬の森の静けさを満喫。",
              gourmetTip: "母屋の個室食事処で供される月替わりの懐石料理。炭火でじっくり焼き上げる豊後牛のサーロインや、大分名産の冠地鶏の滋味あふれる小鍋、冬の根菜を炊き合わせた繊細な煮物など、滋味豊かな山里の恵み。",
              highlights: [
                "専用吊り橋を渡る1万坪の雑木林＆全室離れ・源泉掛け流し露天風呂完備",
                "築300年の古民家を移築した特別棟と灯籠が照らす雪景色の日本庭園",
                "個室食事処で味わう炭火焼き豊後牛サーロインと大分名物冠地鶏の小鍋懐石"
              ]
            },
            {
              id: 3,
              name: "由布院温泉　ゆふいん山水館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1678/1678.jpg",
              rating: 4.41,
              reviews: 892,
              price: "¥8,800〜",
              access: "ＪＲ由布院駅より徒歩約８分。大分自動車道湯布院ＩＣより車で約１５分。",
              special: "【ドリンクインクルーシブ】 滞在中のドリンクが飲み放題！。由布岳を目の前に望む絶景露天風呂が自慢。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1678%2F1678.html",
              story: "明治44年創業、由布院温泉の発展とともに歩んできた歴史ある名旅館「ゆふいん山水館」。JR由布院駅から徒歩約8分という好立地にありながら、館内からは霊峰・由布岳の雄大な二ッ峰を遮るものなく仰ぎ見ることができます。開放感あふれる展望露天風呂「ゆふの湯」と「あさぎりの湯」では、初雪を纏った由布岳の雄姿を眺めながらの贅沢な湯浴みが楽しめます。また館内には全国の温泉旅館でも珍しい自家製クラフトビールの醸造所「ゆふいん麦酒」を併設しており、湯上がりに出来立ての地ビールを味わえるのも大きな魅力です。",
              roomTip: "由布岳側の上層階客室または露天風呂付き和洋室。窓いっぱいに広がる初冬の由布岳パノラマは絵画のような美しさで、朝の光に染まる山肌のグラデーションに心洗われます。",
              gourmetTip: "大分・由布院の旬を盛り込んだ四季会席。豊後牛のすき焼き鍋や牛ステーキのほか、豊後水道の荒波で育った新鮮な関アジのお造り、自家製地ビールと相性抜群の創作料理を堪能。",
              highlights: [
                "由布院駅徒歩8分＆初冠雪の由布岳を遮るものなく仰ぐ展望大露天風呂",
                "館内併設のクラフトビール醸造所「ゆふいん麦酒」の出来立て地ビール",
                "特選豊後牛すき焼き鍋や関アジ造りなど大分の味覚を満喫する四季会席"
              ]
            },
            {
              id: 4,
              name: "由布院温泉　旅亭　田乃倉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38277/38277.jpg",
              rating: 4.79,
              reviews: 108,
              price: "¥31,410〜",
              access: "駅よりタクシーで5分  金鱗湖徒歩２分",
              special: "■料理　温泉　由布院散策　■お部屋食　■静かな宿　■金鱗湖2分　■おおいた和牛堪能",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38277%2F38277.html",
              story: "金鱗湖まで徒歩わずか1分、朝の散策に最高のロケーションに位置する純和風の高級料亭旅館「旅亭 田乃倉（たのくら）」。格式高い数寄屋造りの佇まいで、門をくぐると静謐な日本庭園が出迎えてくれます。宿泊客は夕食・朝食ともに、料理人が一品ずつ真心を込めて仕上げる本格的な京風会席料理をお部屋食で気兼ねなく味わうことができます。庭園に面した源泉掛け流しの大浴場「源流の湯」「金鱗の湯」には、湯気立つ露天風呂が併設され、柔らかなメタケイ酸豊富な名湯が旅の疲れをしっとりと癒やします。",
              roomTip: "1階の専用庭園付き和室、または2階の露天風呂付き客室。初冬の凛とした空気の中、手入れの行き届いた日本庭園を眺めながら、静かに流れる贅沢な時間を堪能できます。",
              gourmetTip: "料理宿として名高い田乃倉自慢の月替わり本格会席料理をお部屋食で。A5ランク豊後牛のしゃぶしゃぶやすき焼き、厳選された豊後水道の鮮魚、旬の冬野菜を繊細な出汁で仕立てた至極の膳。",
              highlights: [
                "金鱗湖徒歩1分＆格式高い数寄屋造りの料亭宿で堪能する伝統のお部屋食会席",
                "メタケイ酸豊富な自家源泉掛け流し名湯「源流の湯」「金鱗の湯」",
                "最高級A5豊後牛しゃぶしゃぶと料理人の繊細な出汁使いが光る京風会席"
              ]
            },
            {
              id: 5,
              name: "由布院温泉　旅館　ほたるの宿　仙洞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/41834/41834.jpg",
              rating: 4.28,
              reviews: 890,
              price: "¥9,500〜",
              access: "由布院駅より車で５分／湯布院ＩＣより車で１０分",
              special: "金鱗湖近く、木々に囲まれた静かな宿。風呂上りに一杯が楽しめるお宿です。全客室Wi－Fi接続可。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41834%2F41834.html",
              story: "金鱗湖のすぐそば、豊かな木立と小川に囲まれた隠れ家的な温泉宿「旅館 ほたるの宿 仙洞（せんどう）」。宿の自慢は、大きな自然石を贅沢に組み上げた野趣満点の混浴露天風呂（男女別露天風呂もあり）で、滾々と湧き出る源泉が惜しみなく注ぎ込まれています。湯上がり処には冷たい生ビールと地サイダーの無料サーバーが設置されており、お風呂上がりの贅沢な一杯をいつでも楽しめる心温まるおもてなしが大好評。初冬の冷気の中で温かい名湯に浸かり、囲炉裏の炭火料理に舌鼓を打つ素朴で温かい滞在が叶います。",
              roomTip: "離れの和室または落ち着いた本館客室。木立の合間から冬の木漏れ日が差し込み、小川のせせらぎを聞きながら誰にも邪魔されないのんびりとした休日を過ごせます。",
              gourmetTip: "母屋の食事処でいただく名物・豊後牛の炭火焼きステーキまたはすき焼き会席。香ばしい炭火の香りをまとったジューシーな牛肉と、大分名物のとり天、地元野菜の素朴な味わいが絶品。",
              highlights: [
                "金鱗湖至近＆巨石を配した野趣あふれる大露天風呂と無料生ビールサーバー",
                "香ばしい炭火で焼き上げる豊後牛ステーキと大分郷土料理のあったか膳",
                "地鶏の旨味が溶け出す冬のあったか鍋と地元産新鮮野菜の滋味あふれる料理"
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
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-slate-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="早朝の金鱗湖に立ち昇る幻想的な白い朝霧と初冠雪の由布岳"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/90 text-emerald-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-emerald-800/50">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>11月・12月限定 由布院盆地が白い霧に染まる奇跡の絶景と豊後牛美食旅</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月由布院温泉の冬名湯と金鱗湖の幻想朝霧】<br className="hidden sm:inline" />
            由布岳冠雪・離れ露天風呂と極上豊後牛＆冠地鶏鍋会席の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            初冬の澄み渡る冷気の中、金鱗湖の水面を覆い尽くす黄金の朝霧。雪化粧を纏った霊峰・由布岳を仰ぐ客室露天風呂、とろける極上「おおいた和牛」と滋味豊かな地鶏鍋を味わう至高の由布院滞在。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-emerald-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-400" /> 大分県由布市湯布院町（金鱗湖・湯の坪街道周辺）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月由布院温泉】由布岳冠雪！名宿5選","item":"https://croud-travel.pages.dev/winter-oita-yufuin-onsen-kinrinko-asamiri-bungo-beef-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Mountain className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Yufuin Winter Magic</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                朝霧が街を包み込む冬の由布院。温泉熱と冷気が織りなす奇跡の白いベール
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            大分県のほぼ中央、秀峰・由布岳（標高1,584m）の裾野に広がる標高約450mの山間盆地「由布院温泉」。別府温泉に次ぐ全国第2位の湧出量を誇りながらも、巨大な高層ホテル街を作らず、自然の景観と調和した閑静な離れ宿や数寄屋造りの旅館が点在する、日本屈指の人気温泉郷です。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            この由布院が1年の中で最も神秘的でドラマチックな美しさを見せるのが、11月から12月にかけての初冬の季節です。放射冷却によって夜間から早朝にかけて盆地内の大気がキリリと冷え込むと、シンボルである「金鱗湖（きんりんこ）」から猛烈な勢いで湯気が立ち上り始めます。金鱗湖は、湖底の半分から約30℃の温泉が、もう半分から清水がこんこんと湧き出す極めて珍しい構造を持っており、水温と冬の冷気の温度差によって大量の蒸気が発生するのです。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            この湯気が冷気に乗って盆地全体を覆い尽くし、街一面が純白の「朝霧（あさぎり）」の海へと変貌します。高台の展望台や宿のテラスから眺めれば雲海のように見下ろせ、湖畔に立てば太陽の光が霧の粒子に乱反射して黄金色に輝く幻想の世界が広がります。散策の後は、メタケイ酸がたっぷり溶け込んだ柔らかな名湯の客室露天風呂で体を温め、豊後牛のすき焼きや冠地鶏の滋味深い水炊きを堪能する。これこそが、冬の由布院に旅する最大の醍醐味です。
          </p>
          
          <div className="bg-emerald-50/70 rounded-2xl p-5 border border-emerald-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-900 tracking-wider">初冬の由布院温泉 散策アドバイス</span>
              <p className="text-xs sm:text-sm text-slate-700">
                金鱗湖の朝霧を鑑賞するなら、午前6時30分〜7時30分の早朝がベスト。朝食前の静かな時間帯は観光客も少なく、静寂の湖畔を独占できます。暖かい防寒具をお忘れなく。
              </p>
            </div>
            <div className="shrink-0 bg-emerald-900 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm">
              標高約450〜500m
            </div>
          </div>
        </section>

        {/* Section 2: Springs and Winter Gourmet */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Natural Spring & Winter Gourmet</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                メタケイ酸豊富な「美肌の湯」と、冬を彩る「おおいた和牛＆冠地鶏」の美食
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            由布院温泉の泉質は、主に弱アルカリ性または中性の単純温泉。無色透明でさらりとした肌あたりながら、角質層の水分を保持し肌のバリア機能を整える「メタケイ酸」が1リットルあたり100mg以上、宿によっては200mgを超える極めて高い濃度で含まれています。まるで天然の化粧水に浸かっているかのような保湿力を誇り、湯上がりの肌がしっとりすべすべになるのが特徴です。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-base">天然の化粧水 メタケイ酸</span>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">美肌効果</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                肌のターンオーバーを促進しコラーゲンの生成を助ける天然保湿成分。由布院の多くの源泉で基準値を大幅に超えるメタケイ酸が含有されており、冬の乾燥肌をやさしく潤します。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-base">極上おおいた和牛（豊後牛）</span>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">肉質4等級以上</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                大分の雄大な大地で育まれたブランド牛。オレイン酸を豊富に含み、口に入れた瞬間にフワッと溶け出す上質な脂の甘みと赤身の深いコクが、すき焼きや炭火焼きで際立ちます。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-base">大分特産「おおいた冠地鶏」</span>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">冬のあったか鍋</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                日本初の烏骨鶏を交配した大分自慢の地鶏。程よい歯ごたえと抜群の旨味、柔らかな肉質が特徴で、冬の澄んだ出汁で煮込む地鶏水炊きや鍋料理は身体を芯から温めてくれます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2.5: 3 Reasons to Visit in Nov & Dec */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Seasonal Highlights</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の由布院温泉が旅人を魅了してやまない3つの決定的な理由
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-900 text-white flex items-center justify-center text-xs">1</span>
                <span>金鱗湖の朝霧と由布岳の初冠雪が重なる奇跡のコントラスト</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                由布院盆地の秋から冬への移ろいはドラマチックです。11月下旬になると山頂に白銀の初冠雪を記録する由布岳。その凛とした佇まいと、盆地を埋め尽くす白い朝霧のベールが同時に見られるのは初冬の限られた期間だけ。朝日が昇るにつれて黄金色に輝く金鱗湖の水煙と、青空にくっきりと浮かぶ白い山肌の情景は、まさに絵画のような絶景です。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-900 text-white flex items-center justify-center text-xs">2</span>
                <span>客室露天風呂と離れ宿で叶える静寂のプライベート冬ごもり</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                由布院温泉は、全室離れや客室専用の源泉掛け流し露天風呂を備えた上質な小規模宿の宝庫です。外気温が5℃以下まで冷え込む冬だからこそ、湯気の立ち上る露天風呂に肩まで浸かる心地よさは格別。冷たい冬の風を頬に受けながら、時間を気にせず何度でも湯船に浸かり、薪ストーブや暖炉の温もりを感じながら読書やお酒を楽しむ贅沢な大人の時間が過ごせます。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-900 text-white flex items-center justify-center text-xs">3</span>
                <span>冬を越すために旨味を凝縮させた豊後牛と大分郷土の美味</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                初冬の大分は食材の宝庫です。脂のサシがきめ細かく入ったブランド黒毛和牛「おおいた和牛」は、甘辛い割り下でいただくすき焼きや炭火焼きで最高潮の旨味を放ちます。さらに、大分特産の「冠地鶏」から出る芳醇な鶏出汁鍋、豊後水道で水揚げされる脂の乗った関アジや寒ヒラメ、旬のカボスを搾った地酒の熱燗など、冬の温泉宿ならではの滋味深い会席料理が心と体を満たします。
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: 5 Recommended Hotels */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Selected Luxury Inns</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              【11・12月】由布院温泉の冬名湯を極める厳選宿5選
            </h2>
            <p className="text-sm text-slate-600">
              楽天トラベルの最新APIデータに基づき、客室からの眺望、源泉掛け流しの湯質、豊後牛や郷土料理、宿泊者レビュー評価を徹底比較して選び抜いた名宿。
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row"
              >
                <div className="relative md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100 shrink-0">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    第{hotel.id}選
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold drop-shadow">
                    <span className="flex items-center gap-1 bg-amber-500/90 text-slate-950 px-2.5 py-1 rounded-md">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {hotel.rating} ({hotel.reviews}件)
                    </span>
                    <span className="bg-slate-900/80 px-2.5 py-1 rounded-md text-amber-200">
                      目安 {hotel.price}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-emerald-800 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                          {hotel.name}
                        </a>
                      </h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span>{hotel.access}</span>
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {hotel.story}
                    </p>

                    <div className="space-y-2 pt-1 border-t border-slate-100 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded shrink-0">客室の魅力</span>
                        <span className="text-slate-600">{hotel.roomTip}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded shrink-0">冬の極上食</span>
                        <span className="text-slate-600">{hotel.gourmetTip}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2">
                      {hotel.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                      楽天トラベル公認リンク・最新宿泊プラン
                    </span>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold shadow transition group w-full sm:w-auto justify-center"
                    >
                      <span>空室・宿泊プランを確認</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3.5: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の由布院温泉を満喫する1泊2日王道モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-emerald-900 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-emerald-900 text-white px-2 py-0.5 rounded">1日目 午後</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">由布院駅到着〜湯の坪街道散策〜名宿チェックイン</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                JR特急「ゆふいんの森号」でJR由布院駅へ到着。駅舎から真正面に見える由布岳の雄姿を写真に収めたら、湯の坪街道へ。初冬の冷気を感じながら、熱々の金賞コロッケや蒸したて温泉まんじゅうを食べ歩き。クラフト工芸館やギャラリーに立ち寄りながら、15時に予約した隠れ宿へチェックイン。まずはウェルカムスイーツとお茶で一息つき、夕暮れ前の客室露天風呂で初冬の由布岳を眺めながら長湯を楽しみます。
              </p>
            </div>

            <div className="border-l-2 border-emerald-900 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-emerald-900 text-white px-2 py-0.5 rounded">1日目 夜</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">極上豊後牛会席ディナー〜満天の星と冬夜露天</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                夕食は個室食事処またはお部屋食で、最高ランクの「おおいた和牛」をすき焼きや炭火焼きで堪能。豊後水道の新鮮な関アジのお造りや大分地酒「西の関」の熱燗を合わせ、至福の美食時間を過ごします。食後は澄み渡る冬の夜空に瞬く満天の星を眺めながら、再び湯守の手入れが行き届いた露天風呂へ。静寂の中で木立のざわめきを聞きながら贅沢な眠りにつきます。
              </p>
            </div>

            <div className="border-l-2 border-emerald-900 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-emerald-900 text-white px-2 py-0.5 rounded">2日目 早朝</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">静寂の金鱗湖「朝霧鑑賞」散策〜朝風呂と滋味朝食</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                日の出前の午前6時45分頃、暖かい防寒着を羽織って金鱗湖畔へ。早朝の冷え切った空気の中、湖底から湧き出る温泉熱によって湖面一面に立ち昇る幻想的な「朝霧」を鑑賞。朝日が差し込む瞬間の黄金色の乱反射に息をのみます。宿に戻ったら冷えた体を朝露天風呂で芯まで温め、地元農家の炊きたて米と新鮮卵、温かいお味噌汁が並ぶ身体に優しい朝食をゆっくり味わいます。
              </p>
            </div>

            <div className="border-l-2 border-emerald-900 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-emerald-900 text-white px-2 py-0.5 rounded">2日目 午前〜午後</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">由布院アートギャラリー巡り〜カフェタイムとお土産選び</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                チェックアウト後は「COMICO ART MUSEUM YUFUIN」などの現代美術館や民芸村へ。静寂な冬の森に佇む美術館でアート鑑賞を楽しんだ後は、金鱗湖畔のカフェで温かい珈琲とスイーツを堪能。駅前通りで大分名産のカボス製品や柚子胡椒、とり天せんべいなどのお土産を購入し、満足感に包まれながら帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Travel Preparation */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <ThermometerSun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Travel Preparation</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の気候・おすすめの服装・アクセス対策
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-emerald-700" />
                <span>気温と服装のポイント</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                由布院は盆地地形のため朝晩の寒暖差が非常に激しく、11月下旬からは最低気温が氷点下近くまで下がります。12月の早朝は霜が降り、金鱗湖周辺は木道や石畳が冷え込みます。朝霧鑑賞に出かける際は、厚手のダウンコート、保温性の高いインナー、手袋、マフラーが必須です。日中は日差しがあれば10℃〜14℃程度まで上がりますが、重ね着で体温調節できるようにしましょう。
              </p>
            </div>
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>冬期ドライブと公共交通機関</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                大分自動車道「湯布院IC」周辺や、別府・阿蘇方面へ抜ける山道（水分峠や小田の池周辺）は、12月に入ると突然の降雪や早朝の路面凍結が発生することがあります。お車で訪れる場合は必ずスタッドレスタイヤを装着してください。運転が不安な方は、博多駅から運行している特急「ゆふいんの森号」や、福岡・大分空港発着の高速バスの利用が定時運行で安全かつ快適です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                よくある質問（FAQ）と由布院温泉の冬旅アドバイス
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-emerald-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Internal Links */}
        <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Related Kyushu & Winter Hotspring Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい九州の冬名湯＆全国の雪見露天特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月ならではの絶景露天や冬の郷土会席を味わう全国の人気特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-oita-beppu-kannawa-onsen-yukemuri-bungo-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">大分・別府温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">別府鉄輪湯けむり夜景＆別府湾絶景露天・豊後牛関アジ関サバの宿</h3>
            </Link>
            <Link 
              href="/winter-kumamoto-kurokawa-onsen-yuakari-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">熊本・黒川温泉</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">黒川温泉 竹灯篭湯あかりと渓流雪見露天・肥後あか牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-saga-takeo-onsen-romon-saga-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">佐賀・武雄温泉</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">武雄温泉 辰野金吾楼門と極上佐賀牛すき焼き・御船山楽園の宿</h3>
            </Link>
            <Link 
              href="/winter-nagasaki-unzen-onsen-jigoku-mist-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">長崎・雲仙温泉</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">雲仙地獄の湯煙白濁硫黄泉露天と雲仙あかね牛・冬霧氷の宿</h3>
            </Link>
            <Link 
              href="/winter-gunma-kusatsu-onsen-yubatake-joshu-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">群馬・草津温泉</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">草津温泉 湯畑冬イルミネーションと極上上州牛すき焼きの宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-oita-yufuin-onsen-kinrinko-asamiri-bungo-beef-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
