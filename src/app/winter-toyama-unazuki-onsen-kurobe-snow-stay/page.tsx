import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月宇奈月温泉】富山湾寒ブリ！名宿5選',
  description: '北アルプス最深部を穿つ黒部川の清流と断崖絶壁に抱かれた名湯・宇奈月温泉。11月中旬の晩秋から12月の初雪へと移ろう初冬、日本一の透明度を誇る弱アルカリ性美肌泉と、富山湾の冬の王者「寒ブリ」＆獲れたて紅ズワイガニ会席を堪能する名宿ガイド。',
  keywords: '宇奈月温泉 宿泊 11月 12月, 宇奈月温泉 寒ブリ 紅ズワイガニ, 黒部峡谷 雪景色 露天風呂, 黒部 宇奈月温泉 やまのは, 宇奈月温泉 延楽, 延対寺荘, サン柳亭, 富山 冬 温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-toyama-unazuki-onsen-kurobe-snow-stay/",
  },
  openGraph: {
    title: '【11・12月宇奈月温泉】富山湾寒ブリ！名宿5選',
    description: '北アルプス最深部を穿つ黒部川の清流と断崖絶壁に抱かれた名湯・宇奈月温泉。11月中旬の晩秋から12月の初雪へと移ろう初冬、日本一の透明度を誇る弱アルカリ性美肌泉と、富山湾の冬の王者「寒ブリ」＆獲れたて紅ズワイガニ会席を堪能する名宿ガイド。',
    url: 'https://croud-travel.pages.dev/winter-toyama-unazuki-onsen-kurobe-snow-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月宇奈月温泉の初冬黒部峡谷美と名湯】雪化粧の峡谷露天と日本一の透明度・富山湾寒ブリ＆紅ズワイガニの宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月宇奈月温泉の初冬黒部峡谷美と名湯】雪化粧の峡谷露天と日本一の透明度・富山湾寒ブリ＆紅ズワイガニの宿5選",
    description: "北アルプス最深部を穿つ黒部川の清流と断崖絶壁に抱かれた名湯・宇奈月温泉。11月中旬の晩秋から12月の初雪へと移ろう初冬、日本一の透明度を誇る弱アルカリ性美肌泉と、富山湾の冬の王者「寒ブリ」＆獲れたて紅ズワイガニ会席を堪能する名宿ガイド。",
  }
};

const faqList = [
  {
    "q": "宇奈月温泉の11月・12月の雪景色や寒さは？スタッドレスタイヤは必要？",
    "a": "宇奈月温泉は標高約200mに位置し、北アルプスの麓に広がる山間部にあります。11月上旬から中旬は紅葉の終盤で晩秋の肌寒さですが、11月下旬になると山頂付近から雪が降り始め、12月に入ると温泉街でも本格的な降雪・積雪が見られます。12月中旬以降は雪見露天風呂の最盛期を迎えます。11月下旬以降にお車で訪れる場合は、北陸道および一般道ともに凍結や積雪の恐れがあるため、必ずスタッドレスタイヤを装着してお越しください。"
  },
  {
    "q": "黒部峡谷トロッコ電車は11月・12月も乗車できますか？",
    "a": "黒部峡谷鉄道（トロッコ電車）の通常営業期間は、例年4月中旬から11月30日までとなっています。そのため11月いっぱいはトロッコ電車に乗って初冬の黒部峡谷のダイナミックな景観を楽しむことができます（11月は窓付きの密閉型客車が暖かくて快適です）。12月以降は冬季運休期間に入りますが、宇奈月温泉街の展望台や温泉旅館の露天風呂から、静寂に包まれた峡谷の雄大な雪景色を鑑賞することができます。"
  },
  {
    "q": "富山湾の『寒ブリ』と『紅ズワイガニ』の旬の時期はいつですか？",
    "a": "富山湾の紅ズワイガニは9月に漁が解禁され、水温が下がる11月から12月にかけて甘みと身の締まりが最高潮に達します。また、富山湾の冬の王者として名高い『寒ブリ（ひみ寒ぶり等）』は、初冬の日本海が荒れる『ブリ起こし』の雷鳴とともに南下し始め、11月中旬から翌年1月頃が最も脂の乗った極上の旬となります。宇奈月温泉の各旅館では、11・12月に寒ブリの刺身やしゃぶしゃぶ、カニ会席を堪能できます。"
  },
  {
    "q": "東京や関西から宇奈月温泉へのアクセス方法は？",
    "a": "北陸新幹線の開通によりアクセスが飛躍的に向上しました。東京駅からは北陸新幹線「はくたか」で「黒部宇奈月温泉駅」まで約2時間15分〜2時間30分。駅直結の富山地方鉄道「新黒部駅」から本線に乗り換え、約25分で「宇奈月温泉駅」に到着します。関西方面からは特急サンダーバードで敦賀駅へ、北陸新幹線に乗り換えて黒部宇奈月温泉駅へ約3時間半です。宇奈月温泉駅からはほとんどの旅館へ徒歩3〜5分圏内と非常に便利です。"
  }
];

export default function UnazukiWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-toyama-unazuki-onsen-kurobe-snow-stay#article",
        "headline": "【11・12月宇奈月温泉の初冬黒部峡谷美と名湯】雪化粧の峡谷露天と日本一の透明度・富山湾寒ブリ＆紅ズワイガニの宿5選",
        "description": "北アルプス最深部を穿つ黒部川の清流と断崖絶壁に抱かれた名湯・宇奈月温泉。11月中旬の晩秋から12月の初雪へと移ろう初冬、日本一の透明度を誇る弱アルカリ性美肌泉と、富山湾の冬の王者「寒ブリ」＆獲れたて紅ズワイガニ会席を堪能する名宿ガイド。",
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
          "@id": "https://croud-travel.pages.dev/winter-toyama-unazuki-onsen-kurobe-snow-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-toyama-unazuki-onsen-kurobe-snow-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "宇奈月温泉の11月・12月の雪景色や寒さは？スタッドレスタイヤは必要？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "宇奈月温泉は標高約200mに位置し、北アルプスの麓に広がる山間部にあります。11月上旬から中旬は紅葉の終盤で晩秋の肌寒さですが、11月下旬になると山頂付近から雪が降り始め、12月に入ると温泉街でも本格的な降雪・積雪が見られます。12月中旬以降は雪見露天風呂の最盛期を迎えます。11月下旬以降にお車で訪れる場合は、北陸道および一般道ともに凍結や積雪の恐れがあるため、必ずスタッドレスタイヤを装着してお越しください。"
            }
          },
          {
            "@type": "Question",
            "name": "黒部峡谷トロッコ電車は11月・12月も乗車できますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "黒部峡谷鉄道（トロッコ電車）の通常営業期間は、例年4月中旬から11月30日までとなっています。そのため11月いっぱいはトロッコ電車に乗って初冬の黒部峡谷のダイナミックな景観を楽しむことができます（11月は窓付きの密閉型客車が暖かくて快適です）。12月以降は冬季運休期間に入りますが、宇奈月温泉街の展望台や温泉旅館の露天風呂から、静寂に包まれた峡谷の雄大な雪景色を鑑賞することができます。"
            }
          },
          {
            "@type": "Question",
            "name": "富山湾の『寒ブリ』と『紅ズワイガニ』の旬の時期はいつですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "富山湾の紅ズワイガニは9月に漁が解禁され、水温が下がる11月から12月にかけて甘みと身の締まりが最高潮に達します。また、富山湾の冬の王者として名高い『寒ブリ（ひみ寒ぶり等）』は、初冬の日本海が荒れる『ブリ起こし』の雷鳴とともに南下し始め、11月中旬から翌年1月頃が最も脂の乗った極上の旬となります。宇奈月温泉の各旅館では、11・12月に寒ブリの刺身やしゃぶしゃぶ、カニ会席を堪能できます。"
            }
          },
          {
            "@type": "Question",
            "name": "東京や関西から宇奈月温泉へのアクセス方法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "北陸新幹線の開通によりアクセスが飛躍的に向上しました。東京駅からは北陸新幹線「はくたか」で「黒部宇奈月温泉駅」まで約2時間15分〜2時間30分。駅直結の富山地方鉄道「新黒部駅」から本線に乗り換え、約25分で「宇奈月温泉駅」に到着します。関西方面からは特急サンダーバードで敦賀駅へ、北陸新幹線に乗り換えて黒部宇奈月温泉駅へ約3時間半です。宇奈月温泉駅からはほとんどの旅館へ徒歩3〜5分圏内と非常に便利です。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-toyama-unazuki-onsen-kurobe-snow-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "黒部・宇奈月温泉　やまのは（オリックスホテルズ＆リゾーツ）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9591%2F9591.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "宇奈月温泉　延楽",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10719%2F10719.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "宇奈月温泉の老舗旅館　延対寺荘",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4804%2F4804.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "人気の露天風呂客室と富山の旬菜美味　宇奈月温泉サン柳亭",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39383%2F39383.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "大江戸温泉物語　宇奈月グランドホテル",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F162778%2F162778.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "黒部・宇奈月温泉　やまのは（オリックスホテルズ＆リゾーツ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9591/9591.jpg",
              rating: 4.31,
              reviews: 4242,
              price: "¥10,800〜",
              access: "富山地方鉄道「宇奈月温泉駅」下車徒歩３分　無料送迎バス有※要確認／北陸自動車道黒部IC下車約２０分",
              special: "おかげさまで連続受賞！「楽天トラベル 日本の宿アワード2025 TOP47」♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9591%2F9591.html",
              story: "黒部峡谷の玄関口に佇み、宇奈月のシンボルである真っ赤な「新山彦橋」と黒部川の清流をパノラマで見渡す絶好のロケーションを誇る「黒部・宇奈月温泉 やまのは」。宿の自慢は、峡谷に向かって突き出すように設計された大浴場と展望露天風呂「棚湯」です。段々畑のように三段に広がる湯船に浸かると、まるで黒部川の澄んだ水面と一体になったかのような圧倒的な開放感に包まれます。初冬の冷たく澄み切った空気を吸い込みながら、対岸の山肌がうっすらと雪化粧をまとう絶景を眺める時間は格別。モダンで温かみのある北陸の上質な滞在を約束してくれます。",
              roomTip: "黒部川の渓谷美を眼下に望むリバービューの和洋室。大きな窓から初冬の雪景色と鉄橋を渡る列車の風情を楽しめるお部屋が特におすすめです。",
              gourmetTip: "富山湾の旬の海の幸と山の恵みが競演する豪華バイキング「Seeds」または創作会席。富山湾直送の寒ブリの刺身やブリしゃぶ、香ばしく焼き上げた白エビ、熱々の紅ズワイガニ、名水育ちの富山ポークなど、北陸の味覚が目の前で調理されます。",
              highlights: [
                "峡谷に突き出す三段の絶景展望露天風呂「棚湯」＆新山彦橋と黒部川の雪化粧パノラマ",
                "初冬の澄んだ空気と黒部川のせせらぎに包まれる湯浴み＆北陸の木の温もりあふれるモダン空間",
                "富山湾の寒ブリ刺身・ブリしゃぶ・紅ズワイガニ・富山ポークを贅沢に味わう豪華ビュッフェ"
              ]
            },
            {
              id: 2,
              name: "宇奈月温泉　延楽",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10719/10719.jpg",
              rating: 4.56,
              reviews: 551,
              price: "¥31,900〜",
              access: "富山地方鉄道「宇奈月温泉駅」より徒歩3分 / 北陸自動車道 黒部ICより約２０分",
              special: "季節のお料理と樹齢四百年の総檜露天風呂。露天風呂付き客室でゆったり自分時間。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10719%2F10719.html",
              story: "昭和十二年の創業以来、多くの文人墨客や皇族に愛されてきた宇奈月随一の格式を誇る純和風料理旅館「宇奈月温泉 延楽」。全客室および露天風呂が黒部峡谷に面しており、樹齢四百年の総檜で造られた露天風呂「華の湯」や、黒部川の銘石を配した野趣あふれる「愛心の湯」から望む初冬の峡谷美は息をのむ美しさです。料理宿としての誇りを貫き、毎朝料理長自らが富山湾の漁港へ足を運び、獲れたての極上魚介を厳選。客室係の洗練されたおもてなしと、研ぎ澄まされた和の美意識が調和する特別な名宿です。",
              roomTip: "黒部峡谷の絶壁に迫り出すような数寄屋造りの贅沢な和室や露天風呂付き客室。初冬の静まり返った渓谷のせせらぎを聞きながら、プライベートな湯浴みが満喫できます。",
              gourmetTip: "卓越した匠の技が光る本格茶懐石風会席。11月に解禁となる富山湾産紅ズワイガニの甲羅焼き、極上脂が乗った富山湾の寒ブリ大根、白エビの昆布締め、冬の名物カニすき鍋など、素材の輪郭が際立つ至福の美味を個室で堪能。",
              highlights: [
                "創業昭和12年の格式誇る老舗料理旅館＆樹齢400年の総檜露天風呂と黒部川銘石風呂",
                "毎朝料理長が富山湾の港で厳選する至高の魚介＆全室黒部峡谷に面した贅沢な数寄屋造り",
                "冬の王様・富山湾寒ブリ大根と紅ズワイガニ甲羅焼き・白エビ昆布締めの極上茶懐石"
              ]
            },
            {
              id: 3,
              name: "宇奈月温泉の老舗旅館　延対寺荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4804/4804.jpg",
              rating: 4.30,
              reviews: 1570,
              price: "¥13,200〜",
              access: "北陸自動車道黒部 Ｉ．Ｃより２０分。富山地方鉄道「宇奈月温泉駅」より徒歩５分。",
              special: "温泉街でも最も眺望の良い場所に立地し、源泉１００％の加温・加水無しの湯がお楽しみいただけます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4804%2F4804.html",
              story: "創業百余年の歴史を刻み、与謝野晶子や川端康成など日本の文学史を彩る文豪たちが逗留した宇奈月屈指の老舗「延対寺荘」。黒部川の急流が間近に迫る断崖に建てられており、ロビーや大浴場、客室のどこにいても黒部峡谷の大迫力パノラマを堪能できます。特に渓谷に向かって大きく開かれた露天風呂では、翡翠色に透き通る黒部川と初冬の雪化粧した岩壁が織りなす水墨画のような世界に浸ることができます。文豪たちが筆を走らせた静寂と格式、どこか懐かしく温かいおもてなしが旅人の心を深く解きほぐします。",
              roomTip: "文豪が愛した黒部渓谷沿いの静かな和室。窓辺の広縁に腰掛けて眺める初冬の黒部川の深い碧と、白く輝く岩肌のコントラストは旅情そのものです。",
              gourmetTip: "伝統の味を受け継ぐ「富山湾味覚会席」。冬の味覚の代表格である紅ズワイガニの姿盛りや、寒ブリのしゃぶしゃぶ、白エビのかき揚げ、黒部名水仕込みの地酒とのマリアージュをゆっくりと味わえます。",
              highlights: [
                "川端康成・与謝野晶子が逗留した文豪ゆかりの名宿＆黒部川急流を間近に見下ろす大迫力露天",
                "創業100余年の伝統とおもてなし＆水墨画のように美しい初冬の黒部峡谷の岩肌を一望",
                "紅ズワイガニ姿盛り＆寒ブリしゃぶしゃぶ・白エビかき揚げと黒部地酒の饗宴"
              ]
            },
            {
              id: 4,
              name: "人気の露天風呂客室と富山の旬菜美味　宇奈月温泉サン柳亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/39383/39383.jpg",
              rating: 4.70,
              reviews: 640,
              price: "¥22,300〜",
              access: "富山地方鉄道　宇奈月温泉駅から送迎車あり",
              special: "令和5年3月オープン☆川側特別室　宇奈月の山々と眼下に清流黒部川　貸切岩盤浴や貸切露天風呂も好評！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39383%2F39383.html",
              story: "黒部川のほとりに佇み、全客室わずか十数室の落ち着きある空間で贅沢なプライベート感を味わえる隠れ家旅館「宇奈月温泉 サン柳亭」。こちらの宿は特に女性やカップルからの支持が厚く、良質な宇奈月の名湯を引いた多彩な露天風呂付き客室が自慢です。宿の料理は富山県産の契約農家から届く有機野菜や、地元の港で競り落とされる新鮮な魚介を惜しみなく使用。初冬の凛とした黒部峡谷の空気に包まれながら、自分たちだけの湯船で源泉のぬくもりに浸り、五感で味わう季節の創作会席に舌鼓を打つ贅沢な時間が過ごせます。",
              roomTip: "源泉かけ流しの露天風呂を備えたデザイナーズ客室。二人だけの湯船から初冬の黒部渓谷の雪景色を眺めながら、心ゆくまで語り合うひとときに最適です。",
              gourmetTip: "手作りにこだわった富山づくしの創作会席。富山湾の朝獲れ寒ブリのお造り、とろける旨味の富山県産黒毛和牛ステーキ、紅ズワイガニ鍋、黒部の名水で炊き上げた富山産コシヒカリの釜飯など、一品一品に情熱が注がれています。",
              highlights: [
                "客室露天風呂で源泉を独り占めする隠れ宿＆契約農家野菜と富山湾直送鮮魚の創作会席",
                "プライベート空間で味わう大人の休日＆女性に優しいアメニティとおもてなし",
                "富山湾寒ブリ造り＆A5ランク富山県産和牛ステーキ・黒部名水コシヒカリの釜飯会席"
              ]
            },
            {
              id: 5,
              name: "大江戸温泉物語　宇奈月グランドホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/162778/162778.jpg",
              rating: 3.78,
              reviews: 912,
              price: "¥14,600〜",
              access: "宇奈月温泉駅より徒歩　約５分",
              special: "雄大な黒部峡谷の麓に佇む、抜群の透明度を誇る名湯が自慢の温泉ホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F162778%2F162778.html",
              story: "宇奈月温泉街の中心に位置し、名湯と多彩なエンターテインメントを手軽に楽しめる人気リゾートホテル「宇奈月グランドホテル」。広々とした大浴場と露天風呂には、黒薙から引き湯された無色透明の柔らかな弱アルカリ性温泉がこんこんと注がれ、湯上がりはお肌がつるつるになると評判です。館内には温泉卓球やカラオケ、リラクゼーションスペースが充実しており、ファミリーやグループ旅行にも最適。初冬の黒部観光の拠点として抜群の利便性と快適性を備えています。",
              roomTip: "明るくゆったりとした純和室やベッドを配したモダン和洋室。窓からは温泉街の風情や遠くの立山連峰・峡谷の山並みを望むことができます。",
              gourmetTip: "季節の味覚が食べ放題の豪華ディナーバイキング。富山湾の寒ブリフェアや紅ズワイガニ料理、揚げたて天ぷら、目の前で焼き上げるステーキ、富山ブラックラーメンなど、大人から子どもまで大満足の北陸グルメが勢揃いします。",
              highlights: [
                "黒薙源泉の柔らかな弱アルカリ性美肌湯＆季節の富山湾味覚バイキングと充実の館内施設",
                "広々とした大浴場で芯まで温まる湯治気分＆温泉街散策や足湯巡りにも便利な好立地",
                "寒ブリ＆紅ズワイガニ食べ放題フェアと目の前で焼き上げる熱々ステーキディナー"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-cyan-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="黒部峡谷の雪景色と宇奈月温泉の湯煙・冬の峡谷美露天風呂"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/90 text-cyan-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-cyan-800/50">
            <Eye className="w-4 h-4 text-cyan-300" />
            <span>11月・12月限定 黒部峡谷初冬の絶景＆富山湾寒ブリ・紅ズワイガニ特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月宇奈月温泉の初冬黒部峡谷美と名湯】<br className="hidden sm:inline" />
            雪化粧の峡谷露天と日本一の透明度・富山湾寒ブリ＆紅ズワイガニの宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            北アルプス黒部川の清流が削り出した日本屈指の深山幽谷。日本一の透明度を誇る名湯・宇奈月温泉。11月中旬の晩秋から12月の白銀雪化粧へと移ろう峡谷美を望む露天風呂と、富山湾が誇る冬の二大王者「寒ブリ」＆「紅ズワイガニ」に心奪われる至福の湯旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-cyan-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /> 富山県黒部市宇奈月温泉</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Kurobe Gorge & Unazuki Legacy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                大正の電源開発が生んだ奇跡の峡谷温泉。初冬の静寂と富山湾の美食
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            北アルプスの険しい峰々を貫き、日本海へと注ぎ込む黒部川。その大自然の懐深く、大正12年に黒部川の電源開発事業に伴って開湯したのが「宇奈月温泉（うなづきおんせん）」です。上流約7キロメートルの黒薙（くろなぎ）から木管を通して引湯される温泉は、無色透明にして日本屈指の透明度を誇ります。泉質は肌への刺激が少ない弱アルカリ性単純温泉で、角質を優しく落とし肌をしっとりと包み込む「美肌の湯」として、古くから多くの旅人を魅了してきました。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月から12月にかけての宇奈月温泉は、黒部峡谷のダイナミックな自然の移ろいを肌で感じられる特別な季節です。11月中旬までは、紅葉に染まる山肌と翡翠色の黒部川、そして真っ赤な新山彦橋が織りなす錦秋の景色が残ります。そして11月下旬から12月に入ると、日本海からの寒気によって北アルプスに雪が降り注ぎ、峡谷の険しい岩肌が純白の雪で覆われ、墨絵のような静寂の世界へと一変します。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            さらに冬の宇奈月を語る上で欠かせないのが、富山湾がもたらす圧倒的な海の幸です。11月は「天然の生け簀」と呼ばれる富山湾で紅ズワイガニ漁が最盛期を迎え、さらに11月中旬以降は海が荒れる「ブリ起こし」とともに、脂が極限まで乗った「寒ブリ」が水揚げされます。冷気凛とする峡谷の雪見露天風呂で温まったあと、刺身、しゃぶしゃぶ、カニすき鍋として味わう冬の富山湾グルメは、一生の記憶に残る極上の体験となるはずです。
          </p>
          
          <div className="bg-cyan-50/70 rounded-2xl p-5 border border-cyan-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-cyan-700" />
                11月・12月宇奈月温泉 旅のハイライト
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                黒部峡谷の雪化粧パノラマ・日本一の透明度を誇る美肌の湯・旬の富山湾産寒ブリしゃぶしゃぶ・甘み濃厚な紅ズワイガニ・新山彦橋と峡谷雪景色
              </p>
            </div>
            <a
              href="#hotels"
              className="px-5 py-2.5 bg-cyan-800 hover:bg-cyan-900 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              厳選名宿5選を見る
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-stone-100/80 rounded-2xl p-6 border border-stone-200">
          <h2 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-cyan-800" />
            目次・インデックス
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-stone-700">
            <a href="#scenic-gorge" className="hover:text-cyan-800 hover:underline flex items-center gap-1.5">
              <span>1. 黒部峡谷の初冬絶景：新山彦橋・やまびこ遊歩道と初雪</span>
            </a>
            <a href="#spring-feature" className="hover:text-cyan-800 hover:underline flex items-center gap-1.5">
              <span>2. 日本一の透明度と黒薙源泉の歴史：つべつべ美肌の秘密</span>
            </a>
            <a href="#trolley-winter" className="hover:text-cyan-800 hover:underline flex items-center gap-1.5">
              <span>3. 11月のトロッコ電車と12月の静寂雪景色</span>
            </a>
            <a href="#hotels" className="hover:text-cyan-800 hover:underline flex items-center gap-1.5">
              <span>4. 11・12月に泊まりたい宇奈月温泉の厳選名宿5選</span>
            </a>
            <a href="#gourmet" className="hover:text-cyan-800 hover:underline flex items-center gap-1.5">
              <span>5. 富山湾冬の味覚：極上寒ブリしゃぶしゃぶ＆紅ズワイガニ</span>
            </a>
            <a href="#itinerary" className="hover:text-cyan-800 hover:underline flex items-center gap-1.5">
              <span>6. 1泊2日 王道モデルコース（北陸新幹線と絶景足湯巡り）</span>
            </a>
            <a href="#faq" className="hover:text-cyan-800 hover:underline flex items-center gap-1.5">
              <span>7. よくある質問（FAQ）と初冬のアクセス＆服装</span>
            </a>
          </nav>
        </section>

        {/* Scenic Gorge Section */}
        <section id="scenic-gorge" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-cyan-50 text-cyan-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Scenic Winter Gorge</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                黒部峡谷の初冬絶景：新山彦橋・やまびこ遊歩道と初雪
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            宇奈月温泉街の象徴である「新山彦橋」。黒部川の清流を跨ぐ鮮烈な朱色の鉄橋は、エメラルドグリーンの川面と初冬の雪化粧した山肌とのコントラストで、訪れるすべての旅人を魅了します。かつてのトロッコ電車の旧軌道敷を活用して整備された「やまびこ遊歩道」を歩けば、澄み切った冷気の中で黒部川の雄大な水音を間近に聴くことができます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月中旬の晩秋には、モミジやブナの深紅や黄金色の葉が川面に舞い散り、12月に入ると峡谷の峻険な断崖絶壁に雪が張り付き、まるで水墨画のような幽玄な世界が現れます。露天風呂からこの峡谷の雪景色を見晴らす贅沢は、宇奈月温泉ならではの唯一無二の冬の体験です。
          </p>
        </section>

        {/* Hot Spring Features */}
        <section id="spring-feature" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-cyan-50 text-cyan-800">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Natural Spring Qualities</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                黒薙から湧き出る奇跡の源泉：日本一の透明度と美肌を育む弱アルカリ性単純泉
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-600" />
                日本一と称される透明度
              </h3>
              <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
                宇奈月温泉の湯は、底の小石までくっきりと見える驚異的な透明度を誇ります。不純物が極めて少なく、黒部川上流の自然が磨き上げた純粋無垢な湯触りが体感できます。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-600" />
                弱アルカリ性で美肌効果
              </h3>
              <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
                pH値8クラスの弱アルカリ性単純温泉。古い角質を優しく洗い流し、新陳代謝を促進。湯上がりは肌がすべすべになり、「つべつべの湯」として地元でも愛されています。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-600" />
                約90度の高温泉で芯から温まる
              </h3>
              <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
                黒薙温泉の湧出温度は約90度。長い引湯管を通ることで角が取れたまろやかな湯となり、冷えた身体の芯までじっくりと温もりを届けて湯冷めを防ぎます。
              </p>
            </div>
          </div>
        </section>

        {/* Trolley Winter Section */}
        <section id="trolley-winter" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-cyan-50 text-cyan-800">
              <Snowflake className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Trolley & Winter Solitude</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                11月のトロッコ電車フィナーレと、12月に訪れる峡谷の静寂美
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            黒部峡谷鉄道（トロッコ電車）は、例年11月30日まで運行されています。11月は暖房の効いた窓付きリラックス客車から、晩秋から初冬へと移ろう大自然のパノラマを体感できる貴重な時期です。鐘釣や欅平へと続く険しいV字谷の断崖、雪をかぶった白馬岳連峰の遠景など、息をのむ絶景が車窓に次々と現れます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして12月に入ると、トロッコ電車は冬期運休期間に入り、黒部峡谷は外界の音から遮断された完全な静寂の世界を迎えます。この静寂こそが、大人の冬の温泉旅における最大の贅沢。観光客で混み合うことのない落ち着いた温泉街で、名湯に浸かり、富山湾の冬の味覚を心ゆくまで味わう贅沢な滞在が叶います。
          </p>
        </section>

        {/* Hotel List */}
        <section id="hotels" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-cyan-800 uppercase tracking-widest">Selected Ryokans</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              11月・12月に泊まりたい宇奈月温泉の厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              峡谷の絶景を望む露天風呂、富山湾の寒ブリと紅ズワイガニを贅沢に味わえる最高峰の宿を厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 hover:shadow-md transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full">
                    <Image
                      src={hotel.img}
                      alt={hotel.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-cyan-950/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                      第{hotel.id}位
                    </div>
                  </div>
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center text-amber-500 font-bold text-sm">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" />
                            <span>{hotel.rating}</span>
                          </div>
                          <span className="text-xs text-stone-400">（口コミ {hotel.reviews}件）</span>
                        </div>
                        <span className="text-xs text-cyan-800 font-semibold bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-200">
                          宇奈月温泉・黒部峡谷
                        </span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {hotel.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {hotel.story}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-stone-100 text-xs sm:text-sm">
                        <div className="flex items-start gap-2 text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                          <span><strong>客室の魅力：</strong>{hotel.roomTip}</span>
                        </div>
                        <div className="flex items-start gap-2 text-stone-700">
                          <Utensils className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                          <span><strong>冬の料理：</strong>{hotel.gourmetTip}</span>
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-2">
                        {hotel.highlights.map((hl: string, hIdx: number) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-stone-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0 mt-1.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-stone-500 block">参考宿泊料金（1泊2食付／2名1室時1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-extrabold text-cyan-800">
                          {hotel.price}
                        </span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-800 hover:bg-cyan-900 text-white font-bold rounded-xl shadow-md transition-all duration-200 text-sm hover:scale-[1.02]"
                      >
                        <span>空室状況・プラン一覧</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gourmet Section */}
        <section id="gourmet" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-cyan-50 text-cyan-800">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Winter Delicacies</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬の富山湾が誇る極上美味：「寒ブリ」と「紅ズワイガニ」
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-stone-700">
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-700" />
                脂の乗りが最高潮に達する「富山湾の寒ブリ」
              </h3>
              <p className="leading-relaxed text-sm">
                11月中旬、日本海に激しい雷鳴が轟く「ブリ起こし」とともに、丸々と肥えた天然ブリが富山湾へと南下してきます。冷たい海で鍛えられた身は引き締まり、脂の乗りは格別。薄桃色に輝くお刺身はもちろん、昆布出汁にサッとくぐらせて余分な脂を落とし、甘みを引き立てる「ブリしゃぶ」は、冬の北陸を代表する贅沢の極みです。
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-700" />
                深海の名水が育む「富山湾産紅ズワイガニ」
              </h3>
              <p className="leading-relaxed text-sm">
                富山湾の海底深くに広がる日本海固有水（ミネラル豊富な海洋深層水）で育つ紅ズワイガニ。水揚げ港から目と鼻の先で競り落とされるため、鮮度と身のジューシーさが段違いです。茹でたてアツアツの身の繊細な甘みと、濃厚なカニ味噌を甲羅で焼き上げる芳ばしさは、冬の宇奈月温泉でしか味わえない至高のご馳走です。
              </p>
            </div>
          </div>
        </section>

        {/* Itinerary Section */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-cyan-50 text-cyan-800">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Recommended 2-Day Tour</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                1泊2日 王道モデルコース：北陸新幹線で行く！黒部峡谷初冬パノラマと海の幸三昧
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-cyan-800 pl-4 sm:pl-6 space-y-2">
              <span className="text-xs font-extrabold text-cyan-800 uppercase tracking-wider">【1日目】黒部宇奈月温泉駅へ〜峡谷散策と名湯チェックイン</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                11:45 北陸新幹線「はくたか」で黒部宇奈月温泉駅に到着
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                駅隣接の「地域観光ギャラリー」で黒部峡谷の自然ジオラマを見学。富山地方鉄道に乗車し宇奈月温泉へ。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                12:45 温泉街でお昼ごはん＆「やまびこ遊歩道」散策
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                名物の富山ブラックラーメンや白エビ丼を味わった後、旧軌道敷を利用した遊歩道へ。山彦橋から峡谷の初冬風景を眺望。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                15:00 旅館へチェックイン → 峡谷露天風呂で雪見風呂
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                日本屈指の透明度を誇る弱アルカリ性泉で肌を潤す。夕暮れ時の渓谷美を眺めながらゆったりと寛ぎのひととき。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                18:30 富山湾の寒ブリしゃぶしゃぶ＆紅ズワイガニ会席に舌鼓
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                脂の乗った旬の寒ブリと茹でたて紅ズワイガニ、地酒のペアリングを堪能。
              </p>
            </div>

            <div className="border-l-2 border-stone-300 pl-4 sm:pl-6 space-y-2 pt-2">
              <span className="text-xs font-extrabold text-stone-500 uppercase tracking-wider">【2日目】朝の清涼露天風呂〜足湯巡りと宇奈月スイーツ</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                08:00 朝の露天風呂でリフレッシュ → 北陸の海の幸朝食
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                澄み渡る峡谷の空気を胸いっぱいに吸い込みながら入る朝風呂。富山産コシヒカリと焼き魚の朝食。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                10:00 温泉街の足湯「おもかげ」巡り＆宇奈月スイーツ散歩
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                黒部川の天然水を使った宇奈月ビールやお豆腐スイーツ、名物チーズケーキ「アルペンチーズケーキ」をお土産に購入。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        

        {/* Internal Links / Related Guides */}
        <section className="bg-cyan-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Related Winter Hot Spring Guides</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい北陸・甲信越の冬・雪見温泉特集
            </h2>
            <p className="text-xs sm:text-sm text-cyan-100/90 leading-relaxed">
              11月・12月ならではの雪景色や旬の郷土グルメを堪能できる全国各地の名湯ガイドを多数公開中。次の旅の計画にぜひお役立てください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-toyama-himi-kanburi-luxury-stay"
              className="bg-cyan-900/80 hover:bg-cyan-900 p-4 rounded-2xl transition border border-cyan-800/50 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">富山・氷見</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">氷見温泉郷 ひみ寒ぶり宣言と立山連峰雪景色の宿</h3>
            </Link>
            <Link 
              href="/winter-kanazawa-kenrokuen-yukizuri-stay"
              className="bg-cyan-900/80 hover:bg-cyan-900 p-4 rounded-2xl transition border border-cyan-800/50 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">石川・金沢</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">金沢 兼六園の雪吊りと加能ガニ会席の宿</h3>
            </Link>
            <Link 
              href="/winter-ishikawa-kaga-yamashiro-kano-crab-stay"
              className="bg-cyan-900/80 hover:bg-cyan-900 p-4 rounded-2xl transition border border-cyan-800/50 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">石川・加賀山代</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">加賀山代温泉 魯山人ゆかりの名湯と極上カニ尽くしの宿</h3>
            </Link>
            <Link 
              href="/winter-gifu-okuhida-onsen-yukimi-roten-stay"
              className="bg-cyan-900/80 hover:bg-cyan-900 p-4 rounded-2xl transition border border-cyan-800/50 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">岐阜・奥飛騨</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">奥飛騨温泉郷 北アルプス雪見露天と飛騨牛炉端焼きの宿</h3>
            </Link>
            <Link 
              href="/winter-niigata-echigo-yuzawa-snow-sake-stay"
              className="bg-cyan-900/80 hover:bg-cyan-900 p-4 rounded-2xl transition border border-cyan-800/50 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">新潟・越後湯沢</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">越後湯沢温泉 川端康成『雪国』の白銀世界と地酒の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-cyan-900/80 hover:bg-cyan-900 p-4 rounded-2xl transition border border-cyan-800/50 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-toyama-unazuki-onsen-kurobe-snow-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
