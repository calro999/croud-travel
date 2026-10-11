import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, SunMedium
} from 'lucide-react';

export const metadata: Metadata = {
  title: '指宿温泉で過ごす冬の旅（11・12月）！開聞岳望む錦江湾露天！名宿5選',
  description: '本州が本格的な寒さを迎える11月から12月にかけて、日中は20℃前後のぽかぽかとした暖かさが残る南国薩摩・鹿児島県「指宿温泉」。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '指宿温泉 宿泊, 指宿 11月 12月, 天然砂むし温泉, 指宿白水館, いぶすき秀水園, 指宿シーサイドホテル, 吟松, 指宿ロイヤルホテル, かごしま黒豚 しゃぶしゃぶ, 開聞岳, 鹿児島 温泉 旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kagoshima-ibusuki-onsen-sunamushi-black-pork-stay/",
  },
  openGraph: {
    title: '指宿温泉で過ごす冬の旅（11・12月）！開聞岳望む錦江湾露天！名宿5選',
    description: '本州が本格的な寒さを迎える11月から12月にかけて、日中は20℃前後のぽかぽかとした暖かさが残る南国薩摩・鹿児島県「指宿温泉」。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-kagoshima-ibusuki-onsen-sunamushi-black-pork-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月指宿温泉の南国初冬リゾートと天然砂むし温泉】開聞岳望む錦江湾露天・極上かごしま黒豚しゃぶしゃぶ＆薩摩美味会席の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "指宿温泉の南国初冬リゾートと天然砂むし温泉で過ごす冬の旅（11・12月）！開聞岳望む錦江湾露天・極上かごしま黒豚しゃぶしゃぶ＆薩摩美味会席の宿5選",
    description: "本州が本格的な寒さを迎える11月から12月にかけて、日中は20℃前後のぽかぽかとした暖かさが残る南国薩摩・鹿児島県「指宿温泉」。海岸から自然湧出する温泉熱を利用した世界唯一の「天然砂むし温泉」による究極のデトックス体験、薩摩富士「開聞岳」と穏やかな錦江湾を望む絶景パノラマ露天風呂、とろける甘みと極上の肉質を誇る「かごしま黒豚」しゃぶしゃぶ、さつま地鶏や錦江湾の旬魚、本場薩摩芋焼酎を堪能する名宿5選を徹底解説。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'],
  }
};

const faqList = [
  {
    "q": "指宿の『天然砂むし温泉』とはどのような仕組みですか？効果や入浴方法は？",
    "a": "指宿の天然砂むし温泉は、海岸の砂浜の地下を流れる高温（約80℃〜90℃）の天然温泉熱によって温められた砂を利用する、世界で唯一の温熱療法です。専用の浴衣に着替えて砂の上に横たわると、スタッフが適度な重み（約15〜20kg）で温かい砂（約50℃〜55℃）をかけてくれます。温熱効果と砂の圧力によって末梢血管が拡張し、心臓から送り出される血液量が増加。わずか10分〜15分横たわるだけで通常の温泉入浴の約3〜4倍もの全身発汗とデトックス効果が得られ、冷え性、腰痛、肩こり、美肌に絶大な効果を発揮します。"
  },
  {
    "q": "11月・12月の指宿温泉の気候や気温は？どのような服装が適していますか？",
    "a": "薩摩半島の南端に位置する指宿は、年間を通じて温暖な亜熱帯気候の影響を受けます。11月は最高気温が20℃〜22℃に達する日も多く、日中は長袖シャツや薄手の羽織もの一枚で快適に過ごせます。12月に入っても日中は15℃〜18℃前後と、本州の東京や大阪の秋口のような暖かさです。ただし海沿いのため朝晩は10℃前後まで冷え込むことがあるため、朝夕の散策用にカーディガンやジャケット、軽めのコートをご用意ください。12月下旬には早くも沿道に日本一早い黄色の菜の花が咲き始め、一足早い春の気配を感じられます。"
  },
  {
    "q": "指宿温泉の泉質や特徴について教えてください。",
    "a": "指宿温泉の主な泉質は「ナトリウム・塩化物温泉」です。海辺に湧出するため塩分濃度が高く、無色透明で弱塩味があります。湯に浸かると肌に塩のベールが形成され、体内の熱と水分の蒸発をしっかり防ぐため、湯上がり後もポカポカ感が何時間も持続します。また、保湿成分である「メタケイ酸」やカルシウムイオンも豊富に含まれており、乾燥しがちな初冬の肌をしっとりと滑らかに整えてくれる美肌の湯です。"
  },
  {
    "q": "冬の指宿で味わうべきおすすめの鹿児島グルメは何ですか？",
    "a": "指宿の冬の美食の代表格は、サツマイモを食べて育つ最高峰ブランド豚「かごしま黒豚」のしゃぶしゃぶです。白身（脂身）がさっぱりとしていて甘みが強く、口の中でとろけます。また、引き締まった弾力と濃厚な旨味が特徴の「さつま地鶏」の刺身（鳥刺し・たたき）、錦江湾で水揚げされる銀色に輝く「キビナゴ」の菊花造りや天ぷら、本場の揚げたて「さつま揚げ」、そして指宿特産のそら豆を使った料理が絶品です。地元酒蔵の本格芋焼酎を「ロクヨン（焼酎6：お湯4）」のお湯割りで合わせるのが鹿児島の極上の愉しみ方です。"
  },
  {
    "q": "鹿児島空港や鹿児島中央駅から指宿温泉へのアクセス方法は？",
    "a": "鹿児島中央駅からは、JR指宿枕崎線の観光特急「指宿のたまて箱号」（約50分）が運行されており、海側のカウンター席から錦江湾と桜島を眺めながらの列車旅が大人気です。普通列車や快速「なのはな」でも約1時間10分〜1時間20分で指宿駅に到着します。鹿児島空港からは、指宿駅前直行の空港連絡バスが運行されており、乗り換えなし約1時間35分でアクセスできます。道路も高速道路（指宿スカイライン等）が整備されており、レンタカーでのドライブも快適です。"
  }
];

export default function IbusukiOnsenWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-kagoshima-ibusuki-onsen-sunamushi-black-pork-stay#article",
        "headline": "【11・12月指宿温泉の南国初冬リゾートと天然砂むし温泉】開聞岳望む錦江湾露天・極上かごしま黒豚しゃぶしゃぶ＆薩摩美味会席の宿5選",
        "description": "本州が本格的な寒さを迎える11月から12月にかけて、日中は20℃前後のぽかぽかとした暖かさが残る南国薩摩・鹿児島県「指宿温泉」。海岸から自然湧出する温泉熱を利用した世界唯一の「天然砂むし温泉」による究極のデトックス体験、薩摩富士「開聞岳」と穏やかな錦江湾を望む絶景パノラマ露天風呂、とろける甘みと極上の肉質を誇る「かごしま黒豚」しゃぶしゃぶ、さつま地鶏や錦江湾の旬魚、本場薩摩芋焼酎を堪能する名宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
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
          "@id": "https://croud-travel.pages.dev/winter-kagoshima-ibusuki-onsen-sunamushi-black-pork-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-kagoshima-ibusuki-onsen-sunamushi-black-pork-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "指宿の『天然砂むし温泉』とはどのような仕組みですか？効果や入浴方法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "指宿の天然砂むし温泉は、海岸の砂浜の地下を流れる高温（約80℃〜90℃）の天然温泉熱によって温められた砂を利用する、世界で唯一の温熱療法です。専用の浴衣に着替えて砂の上に横たわると、スタッフが適度な重み（約15〜20kg）で温かい砂（約50℃〜55℃）をかけてくれます。温熱効果と砂の圧力によって末梢血管が拡張し、心臓から送り出される血液量が増加。わずか10分〜15分横たわるだけで通常の温泉入浴の約3〜4倍もの全身発汗とデトックス効果が得られ、冷え性、腰痛、肩こり、美肌に絶大な効果を発揮します。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の指宿温泉の気候や気温は？どのような服装が適していますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "薩摩半島の南端に位置する指宿は、年間を通じて温暖な亜熱帯気候の影響を受けます。11月は最高気温が20℃〜22℃に達する日も多く、日中は長袖シャツや薄手の羽織もの一枚で快適に過ごせます。12月に入っても日中は15℃〜18℃前後と、本州の東京や大阪の秋口のような暖かさです。ただし海沿いのため朝晩は10℃前後まで冷え込むことがあるため、朝夕の散策用にカーディガンやジャケット、軽めのコートをご用意ください。12月下旬には早くも沿道に日本一早い黄色の菜の花が咲き始め、一足早い春の気配を感じられます。"
            }
          },
          {
            "@type": "Question",
            "name": "指宿温泉の泉質や特徴について教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "指宿温泉の主な泉質は「ナトリウム・塩化物温泉」です。海辺に湧出するため塩分濃度が高く、無色透明で弱塩味があります。湯に浸かると肌に塩のベールが形成され、体内の熱と水分の蒸発をしっかり防ぐため、湯上がり後もポカポカ感が何時間も持続します。また、保湿成分である「メタケイ酸」やカルシウムイオンも豊富に含まれており、乾燥しがちな初冬の肌をしっとりと滑らかに整えてくれる美肌の湯です。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の指宿で味わうべきおすすめの鹿児島グルメは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "指宿の冬の美食の代表格は、サツマイモを食べて育つ最高峰ブランド豚「かごしま黒豚」のしゃぶしゃぶです。白身（脂身）がさっぱりとしていて甘みが強く、口の中でとろけます。また、引き締まった弾力と濃厚な旨味が特徴の「さつま地鶏」の刺身（鳥刺し・たたき）、錦江湾で水揚げされる銀色に輝く「キビナゴ」の菊花造りや天ぷら、本場の揚げたて「さつま揚げ」、そして指宿特産のそら豆を使った料理が絶品です。地元酒蔵の本格芋焼酎を「ロクヨン（焼酎6：お湯4）」のお湯割りで合わせるのが鹿児島の極上の愉しみ方です。"
            }
          },
          {
            "@type": "Question",
            "name": "鹿児島空港や鹿児島中央駅から指宿温泉へのアクセス方法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "鹿児島中央駅からは、JR指宿枕崎線の観光特急「指宿のたまて箱号」（約50分）が運行されており、海側のカウンター席から錦江湾と桜島を眺めながらの列車旅が大人気です。普通列車や快速「なのはな」でも約1時間10分〜1時間20分で指宿駅に到着します。鹿児島空港からは、指宿駅前直行の空港連絡バスが運行されており、乗り換えなし約1時間35分でアクセスできます。道路も高速道路（指宿スカイライン等）が整備されており、レンタカーでのドライブも快適です。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-kagoshima-ibusuki-onsen-sunamushi-black-pork-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "鹿児島　砂むし温泉　指宿白水館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12529%2F12529.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "指宿温泉　いぶすき秀水園",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15962%2F15962.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "指宿砂むし温泉　指宿シーサイドホテル",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31775%2F31775.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "指宿温泉　夫婦露天風呂の宿　吟松（ぎんしょう）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F49347%2F49347.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "指宿温泉　指宿ロイヤルホテル　～すべての女性へ美と健康を楽しむホテル～",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10832%2F10832.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "鹿児島　砂むし温泉　指宿白水館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12529/12529.jpg",
              rating: 4.49,
              reviews: 2456,
              price: "¥14,630〜",
              access: "ＪＲ指宿駅下車、タクシー７分、無料送迎バスあり。 空港直行バス（JR指宿駅下車）",
              special: "地元食材の郷土料理と指宿温泉美肌の湯、砂むし風呂と岩盤浴で贅沢にデトックス！指宿駅まで無料送迎あり♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12529%2F12529.html",
              story: "錦江湾に面した約5万坪もの広大な松林の敷地に佇み、日本の伝統美と贅を尽くした全国屈指の名門旅館「指宿白水館（いぶすきはくすいかん）」。館内には波打ち際の専用「砂むし温泉」が完備され、外に出ることなく快適に天然砂むしを体験できます。さらに圧巻なのが、江戸の風呂文化を現代に再現した1,000坪もの大浴場「元禄風呂」。浮世絵の壁画が彩る広大な空間に、江戸石風呂、樽風呂、泡風呂、打たせ湯など多彩な湯船が並び、松林の向こうに錦江湾を望む大露天風呂へと続きます。敷地内の美術館「薩摩伝承館」では薩摩の歴史と美術工芸品に触れられ、極上の文化とリゾート滞在を満喫できます。",
              roomTip: "「離宮」または「磯客殿」のオーシャンビュー客室。松の緑越しに青く穏やかな錦江湾が広がり、初冬の澄んだ朝焼けや対岸の大隅半島の山並みを優雅に眺望。",
              gourmetTip: "薩摩の伝統と厳選素材が織りなす本格和会席。特選かごしま黒豚のしゃぶしゃぶ小鍋をはじめ、近海獲れのキビナゴや旬魚のお造り、名物さつま揚げ、手打ち薩摩蕎麦など贅沢な美食。",
              highlights: [
                "館内専用の砂むし温泉＆1,000坪の巨大元禄風呂・薩摩伝承館併設の最高峰名門宿",
                "約5万坪の広大な松林庭園と錦江湾オーシャンビューの離宮特別客室",
                "特選かごしま黒豚しゃぶしゃぶ・近海キビナゴ造り・手打ち薩摩蕎麦会席"
              ]
            },
            {
              id: 2,
              name: "指宿温泉　いぶすき秀水園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15962/15962.jpg",
              rating: 4.68,
              reviews: 537,
              price: "¥25,300〜",
              access: "ＪＲ指宿枕崎線指宿駅まで送迎あり／九州自動車道谷山インターより５０分",
              special: "南薩摩の湯の里指宿にて心尽くしの料理とやすらぎのひとときを…",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15962%2F15962.html",
              story: "旅行業界のプロが選ぶ「日本のホテル・旅館100選」の料理部門において、数十年にわたり常に全国トップクラスに君臨し続ける屈指の美食旅館「いぶすき秀水園（しゅうすいえん）」。宿に一歩足を踏み入れると、枯山水の優美な日本庭園と、お香のほのかな香りが迎えてくれます。自慢の料理は、器の選定から盛り付け、出汁の引き方に至るまで料理人の職人技が凝縮された珠玉の会席料理。天然砂むし会館「砂楽」まで徒歩わずか3分という好立地にあり、砂むし温泉と至高の料理をダブルで満喫したい大人旅に圧倒的な支持を得ています。",
              roomTip: "庭園を望む落ち着いた数寄屋造りの和室または露天風呂付き客室。細部まで手入れの行き届いた純和風の空間で、静寂と贅沢なおもてなしに心満たされます。",
              gourmetTip: "全国料理部門第1位に輝き続ける伝説の会席料理をお部屋食で。料理長特製の出汁で味わう極上かごしま黒豚、錦江湾の鯛やイカの華麗な造り、季節の先付など感動の連続。",
              highlights: [
                "全国ホテル旅館料理部門第1位常連・至高の本格和会席とお部屋食の贅沢",
                "天然砂むし会館「砂楽」徒歩3分・静謐な枯山水日本庭園と数寄屋建築",
                "料理人が腕を振るう極上黒豚小鍋と豊後・薩摩の鮮魚が彩る伝説の会席料理"
              ]
            },
            {
              id: 3,
              name: "指宿砂むし温泉　指宿シーサイドホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/31775/31775.jpg",
              rating: 3.65,
              reviews: 797,
              price: "¥8,500〜",
              access: "ＪＲ指宿枕崎線　指宿駅よりタクシー５分",
              special: "錦江湾を目の前に望む海辺の絶好のロケーション！館内で名物砂むし温泉が楽しめる♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31775%2F31775.html",
              story: "錦江湾の砂浜が目の前に広がる波打ち際の絶景ロケーションに建ち、ホテル敷地内に屋根付きの天然砂むし温泉を併設する大型温泉リゾート「指宿シーサイドホテル」。客室の窓を開ければ心地よい潮騒の音が響き渡り、海抜ゼロメートルの臨場感あふれる海景色を楽しめます。専用の浴衣を着て温かい砂に包まれる砂むし温泉では、波の音をBGMに約15分間横たわるだけで全身から心地よい汗が噴き出します。大浴場や露天風呂からも広大な鹿児島湾を一望でき、初冬の澄み渡る朝日を浴びながらの朝風呂は格別です。",
              roomTip: "海側のバルコニー付き和室または洋室ツイン。遮るもののない大パノラマで錦江湾の水平線を望み、早朝には海から昇る感動的な日の出を鑑賞できます。",
              gourmetTip: "鹿児島の郷土の味覚をふんだんに取り入れた薩摩和会席。黒豚のしゃぶしゃぶ鍋や豚の角煮、新鮮な地魚のお造り、本場揚げたてのさつま揚げを地元の芋焼酎とともに満喫。",
              highlights: [
                "波打ち際の絶景立地・敷地内専用砂むし温泉と錦江湾オーシャンビュー客室",
                "潮騒の音を聞きながら汗を流す天然砂むし＆広々とした大浴場海景露天",
                "黒豚しゃぶしゃぶ鍋や豚角煮・揚げたてさつま揚げと本場芋焼酎の夕食"
              ]
            },
            {
              id: 4,
              name: "指宿温泉　夫婦露天風呂の宿　吟松（ぎんしょう）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/49347/49347.jpg",
              rating: 4.63,
              reviews: 1565,
              price: "¥13,200〜",
              access: "車やレンタカー：カーナビに31をご設定下さい　タクシー：ＪＲ指宿駅から４分　",
              special: "≪2025年9月に新客室がリニューアルオープン≫天空野天風呂から錦江湾を一望。砂むし会館「砂楽」隣",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F49347%2F49347.html",
              story: "錦江湾に面した海岸沿いに位置し、全客室に海を望む専用露天風呂を備えたプランがカップルや夫婦に大人気の名宿「夫婦露天風呂の宿 吟松（ぎんしょう）」。宿の最大の魅力は、最上階（9階）に位置する天空野天風呂。湯船の縁が海へと溶け込むインフィニティ設計になっており、まるで錦江湾に浮かんでいるかのような圧倒的な開放感を味わえます。また、食事処のテーブル中央に温泉が湧き出す特注の「温泉卓」が設置されており、目の前で温泉の熱を利用して揚げる名物「さつま揚げ」など、ここでしか味わえない演出が光ります。",
              roomTip: "専用露天風呂付きの海側和洋室。プライベートなテラスの湯船から錦江湾の潮風を感じ、夜には波音と満天の星空に包まれるロマンチックな滞在が叶います。",
              gourmetTip: "特注の温泉卓で楽しむ「砂焼き会席」。テーブル中央の温泉熱で揚げたてを味わう自家製さつま揚げや、温泉卵、極上かごしま黒豚のせいろ蒸しなど、演出も楽しい絶品料理。",
              highlights: [
                "最上階インフィニティ天空野天風呂＆温泉卓で揚げる出来立てさつま揚げ会席",
                "全室海側客室露天風呂プランが人気・プライベート感満載のロマンチック宿",
                "目の前の温泉熱で調理する特注温泉卓の砂焼き会席と黒豚せいろ蒸し"
              ]
            },
            {
              id: 5,
              name: "指宿温泉　指宿ロイヤルホテル　～すべての女性へ美と健康を楽しむホテル～",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10832/10832.jpg",
              rating: 4.50,
              reviews: 1628,
              price: "¥12,650〜",
              access: "鹿児島空港→指宿駅　空港バス約１１０分。指宿駅→タクシー約５分。屋久島、霧島、大隅、南薩等指宿を拠点に観光がおすすめ",
              special: "南九州鹿児島。薩摩半島最南端に位置するホテルからの海の眺めは最高！女性に喜ばれるホテルです",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10832%2F10832.html",
              story: "海抜約30メートルの絶壁の高台に建ち、優美な稜線を描く薩摩富士「開聞岳」と青い錦江湾を同時に見晴らす絶好のパノラマビューを誇る「指宿ロイヤルホテル」。「すべての女性へ美と健康を楽しむホテル」をコンセプトに掲げ、ハワイの伝統マッサージ「ロミロミ」のエステサロンや、朝の絶景ヨガ体験など、心身を美しくリフレッシュするプログラムが充実しています。絶壁の上にせり出すように作られた展望露天風呂「古里の湯」からは、初冬の澄み渡る青空と群青の海がどこまでも広がり、心地よい潮風が日々の疲れを洗い流してくれます。",
              roomTip: "オーシャンビューのハイフロアツインまたは和洋室。バルコニーから見渡す開聞岳と錦江湾のコントラストは見事の一言で、初冬の温暖な日差しが差し込みます。",
              gourmetTip: "健康と美容を意識した彩り豊かな創作薩摩会席。鹿児島黒豚のしゃぶしゃぶをはじめ、地元契約農家から届く新鮮な指宿産野菜、近海マグロのお造りなどヘルシーで贅沢な逸品。",
              highlights: [
                "海抜30m絶壁露天から望む開聞岳と錦江湾パノラマ・美と健康のリゾートホテル",
                "絶景ヨガ体験や本格ロミロミエステ・初冬でも温暖な南国の癒やし空間",
                "鹿児島黒豚と指宿産高原野菜を取り入れたヘルシーで華やかな創作ディナー"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-slate-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="穏やかな錦江湾と優美な薩摩富士開聞岳を望む指宿の南国露天風呂"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/90 text-amber-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-amber-800/50">
            <SunMedium className="w-4 h-4 text-amber-400" />
            <span>11月・12月限定 初冬でも暖かい南国リゾート 世界唯一の天然砂むしと黒豚美食</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">指宿温泉の南国初冬リゾートと天然砂むし温泉で過ごす冬の旅（11・12月）！<br className="hidden sm:inline" /> 開聞岳望む錦江湾露天・極上かごしま黒豚しゃぶしゃぶ＆薩摩美味会席の宿5選</h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            寒さを忘れる南国薩摩の温暖な潮風。世界でここだけの「天然砂むし温泉」で心身を解き放ち、開聞岳の美景露天風呂と甘み際立つ極上「かごしま黒豚」しゃぶしゃぶを味わう癒やしの冬旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> 鹿児島県指宿市（湯の浜・十町・東方周辺）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月指宿温泉】開聞岳望む錦江湾露天！名宿5選","item":"https://croud-travel.pages.dev/winter-kagoshima-ibusuki-onsen-sunamushi-black-pork-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <SunMedium className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Southern Tropical Winter Resort</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                本州の冬を抜け出し、温暖な南国薩摩へ。世界唯一の「砂むし温泉」がもたらす奇跡の癒やし
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            九州本土の最南端、鹿児島県薩摩半島の南端に位置する「指宿（いぶすき）温泉」。本州の各地が木枯らしに震え、厳しい寒さを迎え始める11月から12月にかけても、指宿は日中の気温が20℃前後に達する温暖な南国気候に包まれています。青く穏やかな錦江湾（鹿児島湾）と、ヤシの木が揺れる海岸線、そして円錐形の美しい山容から薩摩富士と讃えられる「開聞岳（標高924m）」が織りなすパノラマは、冬であることを忘れさせてくれる楽園の風情に満ちています。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            指宿温泉の最大の代名詞が、海岸の波打ち際で体験する世界唯一の「天然砂むし温泉」です。海岸の地下深くを高温の温泉水脈が流れており、潮が引くと砂浜そのものが天然のサウナのように発熱します。浴衣を着て温かい砂に全身を埋めると、適度な砂の重みと地熱によって血流が一気に促進され、わずか10分から15分で全身から大量の汗が噴き出します。そのデトックス効果と老廃物排出作用は通常の温泉入浴の3〜4倍にものぼると医学的にも証明されています。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            砂から出た後の爽快感と、塩化物泉の大浴場で身体を洗い流した時の肌の潤いは、一度体験すると忘れられない感動です。湯上がりには、サツマイモを飼料にして育てられた最高峰ブランド「かごしま黒豚」の極上しゃぶしゃぶや、さつま地鶏のたたき、錦江湾の旬魚に舌鼓を打ち、本場薩摩の芋焼酎をお湯割りで味わう。心も身体もぽかぽかに温まる、贅沢極まりない初冬の南国温泉旅がここにあります。
          </p>
          
          <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-900 tracking-wider">指宿温泉 冬の快適ポイント</span>
              <p className="text-xs sm:text-sm text-slate-700">
                11月〜12月でも日中はぽかぽかと暖かく、雪や路面凍結の心配がほぼありません。冬の寒さが苦手な方や、シニア世代ののんびり湯治旅、記念日旅行に最高のデスティネーションです。
              </p>
            </div>
            <div className="shrink-0 bg-amber-900 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm">
              日中気温 約18〜20℃
            </div>
          </div>
        </section>

        {/* Section 2: Springs and Gourmet */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Sand Bath & Satsuma Gourmet</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                保温と美肌の「塩化物泉」と、至高の美味「かごしま黒豚＆薩摩地鶏」
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            指宿温泉の泉質は、主に塩分をたっぷり含んだ「ナトリウム・塩化物泉」。海水のミネラルと地中のメタケイ酸が高濃度で溶け込んでおり、湯船に浸かると皮膚に塩の薄い被膜を形成します。この塩のベールが水分の蒸発を防ぎ、保温と保湿を長時間持続させるため、湯上がりの肌が驚くほどしっとり滑らかになります。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-base">世界唯一 天然砂むし温泉</span>
                <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">デトックス3倍</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                海岸の地熱で温められた砂の重みと約55℃の熱が全身を包み込みます。末梢血管を広げて血行を促し、溜まった老廃物を一気に汗とともに排出し、心身を爽快にリセットします。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-base">最高峰「かごしま黒豚」</span>
                <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">純粋バークシャー</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                サツマイモを餌に育てられる鹿児島の至宝。筋繊維が細かく歯切れが抜群で、脂身にはオレイン酸が豊富に含まれ、口の中でスッと甘く溶け出すしゃぶしゃぶは感動の味です。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-base">薩摩美味と本場芋焼酎</span>
                <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">錦江湾の旬魚</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                錦江湾のキビナゴ菊花造りや揚げたてのさつま揚げ、濃厚な旨味のさつま地鶏たたき。地元蔵元の芋焼酎を「ロクヨンのお湯割り」で合わせるのが鹿児島の冬の最高の流儀です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2.5: 3 Reasons to Visit in Nov & Dec */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Seasonal Highlights</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の指宿温泉が旅人を魅了してやまない3つの決定的な理由
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-900 text-white flex items-center justify-center text-xs">1</span>
                <span>本州の冬の寒さを忘れる日中気温18〜20℃の快適な南国バカンス</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                寒さが厳しくなる11月下旬〜12月にこそ、指宿の温暖な気候のありがたみを実感できます。ダウンジャケットを脱ぎ、穏やかな錦江湾の潮風を感じながらヤシ並木や海岸線を散策。12月下旬には早くも黄色い菜の花が沿道に咲き誇り、日本で最も早い春の息吹を感じながらリゾート気分を満喫できます。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-900 text-white flex items-center justify-center text-xs">2</span>
                <span>波の音を聞きながら汗を流す世界唯一の「天然砂むし温泉」</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                海岸の地熱で温められた砂にすっぽりと包まれる体験は、指宿でしか味わえない唯一無二の贅沢です。約55℃の砂の心地よい重量感が全身の血行を促し、10〜15分で通常の入浴の3倍以上もの汗が噴き出します。砂から上がった後の身体の軽さと肌のツルツル感は、日々のストレスや疲れを一掃してくれます。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-900 text-white flex items-center justify-center text-xs">3</span>
                <span>甘み際立つ極上「かごしま黒豚」しゃぶしゃぶと本場芋焼酎</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                サツマイモをたっぷり食べて育った最高級の「かごしま黒豚」は、脂身の甘さとさっぱりとした後味が絶品覚醒。昆布出汁や蕎麦つゆ仕立てでいただく黒豚しゃぶしゃぶ鍋は、冬の指宿の夜を最高に彩ります。さらに、地元酒蔵の芋焼酎をお湯で割って立ち上る芳醇な香りを愉しむのが薩摩の粋な夜の過ごし方です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: 5 Recommended Hotels */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Selected Luxury Inns</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              【11・12月】指宿温泉の南国情緒と砂むしを極める厳選宿5選
            </h2>
            <p className="text-sm text-slate-600">
              楽天トラベルの最新APIデータに基づき、専用砂むし温泉の有無、錦江湾と開聞岳の眺望、かごしま黒豚会席の料理内容、宿泊者レビュー評価で選び抜いた5軒。
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow duration-300 flex flex-col"
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

                <div className="p-6 sm:p-8 w-full flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-amber-800 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                          {hotel.name}
                        </a>
                      </h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span>{hotel.access}</span>
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {hotel.story}
                    </p>

                    <div className="space-y-2 pt-1 border-t border-slate-100 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded shrink-0">客室の魅力</span>
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
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-900 hover:bg-amber-800 text-white text-xs sm:text-sm font-bold shadow transition group w-full sm:w-auto justify-center"
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
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の指宿を満喫する1泊2日砂むし＆薩摩美食モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-900 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-amber-900 text-white px-2 py-0.5 rounded">1日目 午後</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">特急たまて箱号で指宿到着〜長崎鼻散策〜名宿チェックイン</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                鹿児島中央駅から観光特急「指宿のたまて箱号」で指宿駅へ。車窓に広がる桜島と錦江湾の絶景を堪能。駅前からレンタカーまたはバスで薩摩半島最南端の「長崎鼻」へ。白い灯台越しにそびえる開聞岳の雄姿を写真に収め、竜宮神社で縁結び祈願。15時に予約した名旅館へチェックイン。まずは館内専用の砂むし温泉または天然砂むし会館「砂楽」へ向かい、温かい砂に包まれて至福の発汗体験を満喫します。
              </p>
            </div>

            <div className="border-l-2 border-amber-900 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-amber-900 text-white px-2 py-0.5 rounded">1日目 夜</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">極上かごしま黒豚しゃぶしゃぶ会席〜錦江湾の夜風と露天風呂</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                夕食は個室食事処で、とろける甘みがたまらない「かごしま黒豚」のしゃぶしゃぶやすき焼きを堪能。錦江湾水揚げの新鮮なキビナゴの菊花造りや、揚げたてサクサクのさつま揚げに舌鼓。本場の薩摩芋焼酎を「ロクヨンのお湯割り」で合わせ、鹿児島の深い食文化を味わいます。食後は塩化物泉の海辺露天風呂に浸かり、波の音と澄み切った星空に包まれて贅沢な夜を過ごします。
              </p>
            </div>

            <div className="border-l-2 border-amber-900 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-amber-900 text-white px-2 py-0.5 rounded">2日目 早朝</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">錦江湾の海から昇る感動の朝日鑑賞〜朝風呂と薩摩郷土朝食</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                日の出時刻に合わせて起床し、客室バルコニーや海景露天風呂へ。錦江湾の水平線から昇る黄金色の朝日と、朝日に照らされる開聞岳の稜線を鑑賞。朝風呂で塩化物泉の温もりを堪能した後は、地元指宿産の新鮮野菜や近海魚の干物、具だくさんの薩摩汁が並ぶ身体に優しい朝食をゆっくり味わいます。
              </p>
            </div>

            <div className="border-l-2 border-amber-900 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-amber-900 text-white px-2 py-0.5 rounded">2日目 午前〜午後</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">西大山駅（JR日本最南端）〜池田湖〜薩摩特産品お土産選び</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                チェックアウト後はJR日本最南端の駅「西大山駅」へ。黄色い幸せのポストと開聞岳が並ぶ絶景スポットで記念撮影。続いて九州最大のカルデラ湖「池田湖」をドライブし、指宿名物のそら豆スイーツや本場の芋焼酎、さつま揚げを購入。南国のポカポカとしたぬくもりを胸に帰路につきます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Travel Preparation */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <ThermometerSun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Travel Preparation</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の気候・おすすめの服装・アクセス情報
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-amber-700" />
                <span>南国の気候と服装ガイド</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                指宿は本州と比べて格段に暖かく、11月の日中は20℃を超える快適な陽気が続きます。12月でも日中は15℃〜18℃前後で過ごしやすく、過剰な重装備は不要です。ただし朝晩や海沿いは潮風で10℃近くまで冷え込むことがあるため、脱ぎ着しやすいカーディガンやジャケット、ストールがあると便利です。
              </p>
            </div>
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>快適なアクセスと観光特急</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                鹿児島中央駅からは、JRの観光特急「指宿のたまて箱号」の利用が旅情満点でおすすめです。車内からは桜島と錦江湾の絶景をパノラマで楽しめます。鹿児島空港からは直行リムジンバスで約95分。冬でも道路の積雪や路面凍結の心配はほぼ皆無なため、レンタカーでの開聞岳・長崎鼻ドライブも快適そのものです。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                よくある質問（FAQ）と初冬の指宿温泉旅行アドバイス
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-amber-800 font-extrabold">Q.</span>
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
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Related Kyushu & Resort Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい南国九州の冬名湯＆全国の温泉特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              霧島温泉や天草の海景色、別府・由布院など、冬でも魅力あふれる九州の名湯ガイドを多数公開中。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-kagoshima-kirishima-onsen-ryoma-black-pork-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">鹿児島・霧島温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">霧島温泉 坂本龍馬ゆかりの白濁硫黄泉と霧島黒豚・地鶏鍋の宿</h3>
            </Link>
            <Link 
              href="/winter-kumamoto-amakusa-shimoda-onsen-sunset-seafood-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">熊本・天草下田温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">天草下田温泉 東シナ海夕陽百選露天と伊勢海老・車海老・とらふぐの宿</h3>
            </Link>
            <Link 
              href="/winter-oita-beppu-kannawa-onsen-yukemuri-bungo-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">大分・別府温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">別府鉄輪湯けむり夜景＆別府湾絶景露天・豊後牛関アジ関サバの宿</h3>
            </Link>
            <Link 
              href="/winter-nagasaki-unzen-onsen-jigoku-mist-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">長崎・雲仙温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">雲仙地獄の湯煙白濁硫黄泉露天と雲仙あかね牛・冬霧氷の宿</h3>
            </Link>
            <Link 
              href="/winter-wakayama-nanki-shirahama-kue-hotspring-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">和歌山・南紀白浜温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">南紀白浜温泉 太平洋夕陽パノラマ露天と幻の高級魚クエ鍋の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-kagoshima-ibusuki-onsen-sunamushi-black-pork-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
