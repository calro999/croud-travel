import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map, Sunset, Soup
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月長崎・雲仙小浜温泉】橘湾の茜色落日と熱量日本一1！名宿5選',
  description: '11月中旬から初冬の長崎・島原半島西岸に位置する小浜温泉（おばまおんせん）は、澄み切った冬空の下。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '小浜温泉 宿泊, 雲仙 温泉 旅館, 伊勢屋 小浜, オレンジ・ベイ, ほっとふっと105, 橘湾 夕日 露天風呂, 冬ワタリガニ, 小浜ちゃんぽん, 雲仙あかね牛, 11月 12月 長崎旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-nagasaki-obama-onsen-sunset-crab-champon-wagyu-stay/"
  },
  openGraph: {
    title: '【11・12月長崎・雲仙小浜温泉】橘湾の茜色落日と熱量日本一1！名宿5選',
    description: '11月中旬から初冬の長崎・島原半島西岸に位置する小浜温泉（おばまおんせん）は、澄み切った冬空の下。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-nagasaki-obama-onsen-sunset-crab-champon-wagyu-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の長崎小浜温泉橘湾に沈む黄金の夕陽と湯煙'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月長崎・雲仙小浜温泉】橘湾の茜色落日と熱量日本一105℃の源泉・初冬の味覚橘湾冬ワタリガニ＆名物小浜ちゃんぽん・極上雲仙あかね牛を堪能する名宿5選",
    description: "11月中旬から初冬の長崎・島原半島西岸に位置する小浜温泉（おばまおんせん）は、澄み切った冬空の下、橘湾を鮮やかな茜色に染め上げる壮大な落日パノラマに包まれます。地下から湧き出す源泉の温度は驚異の105度、湧出量×温度で算出される総熱量は日本一を誇り、高濃度の食塩泉が冷え切った身体の芯まで熱を浸透させ、湯上がり後も驚くほどポカポカ感が持続します。海沿いに延びる日本一長い105mの足湯「ほっとふっと105」では、立ち上る白煙とともに夕陽が水平線に沈むドラマチックな瞬間を特等席で体感。そして初冬の食卓を彩るのは、橘湾の豊かな潮流で育ち、濃厚な内子と上品な甘みを蓄えた「冬ワタリガニ（ガザミ）」、殻付き牡蠣や地魚の海鮮蒸し料理、さらに豚骨と魚介の旨味が凝縮したご当地グルメ「小浜ちゃんぽん」、赤身の旨味が濃厚な希少ブランド「雲仙あかね牛」のステーキ会席。夕陽と圧倒的熱量に癒やされる初冬の厳選名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function NagasakiObamaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-nagasaki-obama-onsen-sunset-crab-champon-wagyu-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.pages.dev/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.pages.dev/"
        },
        "headline": "【11・12月長崎・雲仙小浜温泉】橘湾の茜色落日と熱量日本一105℃の源泉・初冬の味覚橘湾冬ワタリガニ＆名物小浜ちゃんぽん・極上雲仙あかね牛を堪能する名宿5選",
        "description": "11月中旬から初冬の長崎・島原半島西岸に位置する小浜温泉（おばまおんせん）は、澄み切った冬空の下、橘湾を鮮やかな茜色に染め上げる壮大な落日パノラマに包まれます。地下から湧き出す源泉の温度は驚異の105度、湧出量×温度で算出される総熱量は日本一を誇り、高濃度の食塩泉が冷え切った身体の芯まで熱を浸透させ、湯上がり後も驚くほどポカポカ感が持続します。海沿いに延びる日本一長い105mの足湯「ほっとふっと105」では、立ち上る白煙とともに夕陽が水平線に沈むドラマチックな瞬間を特等席で体感。そして初冬の食卓を彩るのは、橘湾の豊かな潮流で育ち、濃厚な内子と上品な甘みを蓄えた「冬ワタリガニ（ガザミ）」、殻付き牡蠣や地魚の海鮮蒸し料理、さらに豚骨と魚介の旨味が凝縮したご当地グルメ「小浜ちゃんぽん」、赤身の旨味が濃厚な希少ブランド「雲仙あかね牛」のステーキ会席。夕陽と圧倒的熱量に癒やされる初冬の厳選名宿5選を徹底解説します。",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
        "inLanguage": "ja",
        "mainEntityOfPage": "https://croud-travel.pages.dev/winter-nagasaki-obama-onsen-sunset-crab-champon-wagyu-stay",
        "publisher": {
          "@type": "Organization",
          "name": "クラドトラベル編集部",
          "url": "https://croud-travel.pages.dev/"
        }
      },
      {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Hotel",
              "name": "小浜温泉　海を見渡す個室露天の宿　伊勢屋",
              "description": "創業寛文九年（1669年）、350年以上の歴史を誇る小浜屈指の老舗でありながら、全室オーシャンビュー＆客室露天風呂付きのデザイナーズ旅館へと進化を遂げた「海を見渡す個室露天の宿 伊勢屋」。客室テラスの浴槽には、敷地内から自噴する105度の高温泉が贅沢に掛け流され、橘湾の穏やかな波音を耳にしながら好きな時にいつでも極上の湯浴みが楽しめます。特に初冬の夕暮れ時、西の空が黄金色から燃えるような茜色、そして深い群青へとグラデーションを描くドラマチックな落日パノラマは息をのむ美しさ。夕食は橘湾の恵みを知り尽くした料理長による創作海鮮会席。旬を迎えた橘湾の冬ワタリガニや近海物の真鯛、地魚のお造りはもちろん、温泉蒸気を利用して素材の旨味を凝縮させた「地獄蒸し」、柔らかく風味豊かな「雲仙あかね牛」の鉄板焼きなど、目にも鮮やかな料理が並びます。歴史の重みとモダンな快適さが完璧に融合した名宿です。",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15973%2F15973.html",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.75",
                "reviewCount": 461
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Hotel",
              "name": "小浜温泉　旅館　富士屋",
              "description": "小浜温泉の源泉が密集する湯けむり情緒の中心に佇み、どこか懐かしい昭和レトロの木造建築と家庭的なもてなしが旅人の心をほぐす「小浜温泉 旅館 富士屋」。源泉温度100度を超える良質なナトリウム-塩化物泉を贅沢に100%源泉掛け流しで使用しており、浸かった瞬間に肌を包み込む濃厚な塩分とミネラルが、初冬の冷気で強張った筋肉を優しく解きほぐします。浴室の床や浴槽には長年堆積した温泉成分の結晶が重なり、本物の名湯ならではの風情を醸し出しています。夕食は島原半島の豊かな山海の恵みをふんだんに使った手作りの郷土会席。橘湾で揚がったばかりの新鮮な地魚の舟盛りに加え、冬の味覚であるワタリガニ、地元野菜の天ぷら、そして長崎和牛の陶板焼きなど、気取らないボリューム満点のご馳走が並びます。一人旅から湯治利用まで、本物の源泉力と温かなぬくもりを求める旅人に心から愛される隠れ宿です。",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38550%2F38550.html",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": 174
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Hotel",
              "name": "小浜温泉　プライベート・スパ・ホテル≪オレンジ・ベイ≫",
              "description": "橘湾の海岸通りに面し、全室に海を見渡す絶景の展望温泉露天風呂を備えたスタイリッシュなリゾートホテル「プライベート・スパ・ホテル≪オレンジ・ベイ≫。」。1階には橘湾の新鮮な海の幸が並ぶ海鮮市場があり、客室フロアへ上がると白とブルーを基調としたモダンな別世界が広がります。すべての客室のバルコニーに円形の展望露天風呂が設置され、小浜温泉の源泉が常時掛け流されています。視界を遮るもののない橘湾の水平線、空を舞う海鳥、そして海を黄金色に染め上げて沈んでいく夕陽を湯船の中から眺めるひとときは、まさに極上のプライベートリゾート体験。夕食は併設の海鮮食事処や提携の名店で、橘湾の朝獲れ地魚や冬ワタリガニ、アワビの踊り焼き、長崎牛の鉄板焼きなど、好みのスタイルで自由に堪能できます。自由度の高い滞在と絶景露天を愛するカップルやモダン派に絶大な支持を得ています。",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40438%2F40438.html",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.33",
                "reviewCount": 166
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Hotel",
              "name": "小浜温泉　湯宿　蒸気家",
              "description": "「小浜の恵みである天然温泉蒸気で、自ら食材を蒸して味わう。」という伝統の湯治スタイルを現代に伝える体験型温泉宿「小浜温泉 湯宿 蒸気家」。宿の中庭には、100度を超える猛烈な温泉蒸気が常時噴き出す専用の「蒸し釜（地獄蒸し場）」が複数設置され、宿泊客は近隣の商店や市場で買い込んだ橘湾のワタリガニ、牡蠣、エビ、地元産のさつまいもや卵などを自由に蒸して楽しむことができます。高温の温泉蒸気で一気に蒸し上げられた食材は、余分な脂が落ち、素材本来の濃厚な甘みと旨味が凝縮して感動的な美味しさに。大浴場には小浜の濃厚な食塩泉がたっぷりと掛け流され、蒸気を利用した天然スチームサウナも完備。リーズナブルな価格設定と、自分たちで食材を調理して味わう楽しさ、そして本物の高温泉パワーが揃い、連泊して暮らすように旅したい人々に圧倒的な人気を博しています。",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147700%2F147700.html",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.1",
                "reviewCount": 261
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Hotel",
              "name": "小浜温泉　福徳屋旅館",
              "description": "創業以来、小浜温泉の伝統を守り続け、自家源泉から湧く効能豊かな湯と心尽くしの料理でもてなす老舗旅館「小浜温泉 福徳屋旅館」。館内には趣の異なる多彩な浴場が備わり、貸切露天風呂や内湯など、源泉温度105度のパワフルな塩化物泉を贅沢に掛け流しで湯巡りできます。保温効果が極めて高い小浜の湯は「温まりの湯」として親しまれ、初冬の冷たい海風を浴びた後でも身体の芯からポカポカと温もりが全身を巡ります。料理は小浜ならではの郷土の味覚を大切にした和食会席。橘湾で水揚げされた新鮮な刺身盛り合わせをはじめ、冬の味覚であるワタリガニの姿蒸し、長崎名物豚の角煮、そして具だくさんで旨味の染み渡るミニ小浜ちゃんぽんなど、長崎・島原の美味を一度に味わい尽くせる充実の献立が旅の満足度を最高潮へと導いてくれます。",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56161%2F56161.html",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.1",
                "reviewCount": 171
              }
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "小浜温泉の源泉温度「105度・熱量日本一」とはどのような特徴ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "小浜温泉は湧出する源泉の温度が最高105℃に達し、湧出量と温度を掛け合わせた「総熱量」において日本一を誇る高温泉です。泉質はナトリウム-塩化物泉（強塩泉）で、海水に近い高濃度の塩分を含んでいるため、入浴すると皮膚に塩の被膜が形成されて汗の蒸発を防ぎます。そのため「温まりの湯」「熱の湯」と呼ばれ、初冬の冷たい海風で冷え切った身体でも、湯上がり後何時間もポカポカとした保温効果が持続するのが最大の特徴です。"
            }
          },
          {
            "@type": "Question",
            "name": "海辺の名物足湯「ほっとふっと105」の利用方法や夕陽の見どころは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「小浜温泉足湯 ほっとふっと105」は、源泉温度105度にちなんで全長105mという日本一の長さを誇る海辺の無料足湯施設です。橘湾の海岸線に沿って造られており、腰掛け足湯、歩行足湯、ペット足湯、蒸し釜などが完備されています。利用時間は10:00〜18:00（季節変動あり）。特に11月・12月は日没時刻（17:00〜17:30頃）に合わせて訪れると、橘湾の海面が茜色に輝き、水平線へと夕陽が沈む絶景を足湯に浸かりながら観賞できます。"
            }
          },
          {
            "@type": "Question",
            "name": "初冬の小浜温泉で味わうべき「橘湾冬ワタリガニ」と「小浜ちゃんぽん」の魅力は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "橘湾は潮流が速くプランクトンが豊富なため、極上のワタリガニ（ガザミ）が育ちます。特に水温が下がる11月から12月にかけての「冬ワタリガニ」は、身がギュッと引き締まり甘みが最高潮に達するほか、雌ガニには濃厚で旨味の詰まったオレンジ色の「内子（うちこ）」がぎっしりと蓄えられます。また、長崎ちゃんぽんのルーツの一つである「小浜ちゃんぽん」は、橘湾の魚介（エビやイカ）と豚骨ベースのスープに殻付きエビが入るのが特徴で、初冬の冷えた身体に染み渡る滋味深い一杯です。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の島原半島・小浜温泉の気候と雲仙岳観光時の注意点は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "海岸沿いの小浜温泉は温暖な有明海・橘湾気候で、11月の平均気温は約13〜17℃、12月は約8〜12℃と比較的過ごしやすい気候です。ただし、車で約25〜30分登った山上の「雲仙温泉」や標高1300m超の「仁田峠」へ向かう場合は注意が必要です。山の上は海岸部より5〜8℃気温が低く、11月下旬以降は霧氷（むひょう）が観測されたり道路が凍結することがあります。雲仙普賢岳方面へドライブする場合は、防寒着をしっかり用意し、気象予報や積雪・凍結情報を事前に確認してください。"
            }
          },
          {
            "@type": "Question",
            "name": "福岡・長崎空港・熊本方面からのアクセスルートとおすすめ移動手段は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "長崎空港からはレンタカーで約60分、またはリムジンバスでJR諫早駅へ出て島鉄バス（小浜行き）で約50分。福岡・博多方面からは西九州新幹線または特急かもめで諫早駅へ向かい、路線バスに乗り継ぐのがスムーズです。また、熊本方面からは「有明フェリー（長洲港〜多比良港・約45分）。」や「九商フェリー・熊本フェリー（熊本港〜島原港・約30〜60分）。」を利用して島原半島へ渡る海上ショートカットルートも絶景でおすすめです。"
            }
          }
        ]
      }
    ]
  };

  const faqList = [
  {
    "q": "小浜温泉の源泉温度「105度・熱量日本一」とはどのような特徴ですか？",
    "a": "小浜温泉は湧出する源泉の温度が最高105℃に達し、湧出量と温度を掛け合わせた「総熱量」において日本一を誇る高温泉です。泉質はナトリウム-塩化物泉（強塩泉）で、海水に近い高濃度の塩分を含んでいるため、入浴すると皮膚に塩の被膜が形成されて汗の蒸発を防ぎます。そのため「温まりの湯」「熱の湯」と呼ばれ、初冬の冷たい海風で冷え切った身体でも、湯上がり後何時間もポカポカとした保温効果が持続するのが最大の特徴です。"
  },
  {
    "q": "海辺の名物足湯「ほっとふっと105」の利用方法や夕陽の見どころは？",
    "a": "「小浜温泉足湯 ほっとふっと105」は、源泉温度105度にちなんで全長105mという日本一の長さを誇る海辺の無料足湯施設です。橘湾の海岸線に沿って造られており、腰掛け足湯、歩行足湯、ペット足湯、蒸し釜などが完備されています。利用時間は10:00〜18:00（季節変動あり）。特に11月・12月は日没時刻（17:00〜17:30頃）に合わせて訪れると、橘湾の海面が茜色に輝き、水平線へと夕陽が沈む絶景を足湯に浸かりながら観賞できます。"
  },
  {
    "q": "初冬の小浜温泉で味わうべき「橘湾冬ワタリガニ」と「小浜ちゃんぽん」の魅力は？",
    "a": "橘湾は潮流が速くプランクトンが豊富なため、極上のワタリガニ（ガザミ）が育ちます。特に水温が下がる11月から12月にかけての「冬ワタリガニ」は、身がギュッと引き締まり甘みが最高潮に達するほか、雌ガニには濃厚で旨味の詰まったオレンジ色の「内子（うちこ）」がぎっしりと蓄えられます。また、長崎ちゃんぽんのルーツの一つである「小浜ちゃんぽん」は、橘湾の魚介（エビやイカ）と豚骨ベースのスープに殻付きエビが入るのが特徴で、初冬の冷えた身体に染み渡る滋味深い一杯です。"
  },
  {
    "q": "11月・12月の島原半島・小浜温泉の気候と雲仙岳観光時の注意点は？",
    "a": "海岸沿いの小浜温泉は温暖な有明海・橘湾気候で、11月の平均気温は約13〜17℃、12月は約8〜12℃と比較的過ごしやすい気候です。ただし、車で約25〜30分登った山上の「雲仙温泉」や標高1300m超の「仁田峠」へ向かう場合は注意が必要です。山の上は海岸部より5〜8℃気温が低く、11月下旬以降は霧氷（むひょう）が観測されたり道路が凍結することがあります。雲仙普賢岳方面へドライブする場合は、防寒着をしっかり用意し、気象予報や積雪・凍結情報を事前に確認してください。"
  },
  {
    "q": "福岡・長崎空港・熊本方面からのアクセスルートとおすすめ移動手段は？",
    "a": "長崎空港からはレンタカーで約60分、またはリムジンバスでJR諫早駅へ出て島鉄バス（小浜行き）で約50分。福岡・博多方面からは西九州新幹線または特急かもめで諫早駅へ向かい、路線バスに乗り継ぐのがスムーズです。また、熊本方面からは「有明フェリー（長洲港〜多比良港・約45分）。」や「九商フェリー・熊本フェリー（熊本港〜島原港・約30〜60分）。」を利用して島原半島へ渡る海上ショートカットルートも絶景でおすすめです。"
  }
];

  const hotelList = [
            {
              id: 1,
              name: "小浜温泉　海を見渡す個室露天の宿　伊勢屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15973/15973.jpg",
              rating: 4.75,
              reviews: 461,
              price: "¥13,750〜",
              access: "長崎バス小浜ターミナルより徒歩3分",
              special: "令和元年10月13日新築オープン！海を見渡す個室露天の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15973%2F15973.html",
              story: "創業寛文九年（1669年）、350年以上の歴史を誇る小浜屈指の老舗でありながら、全室オーシャンビュー＆客室露天風呂付きのデザイナーズ旅館へと進化を遂げた「海を見渡す個室露天の宿 伊勢屋」。客室テラスの浴槽には、敷地内から自噴する105度の高温泉が贅沢に掛け流され、橘湾の穏やかな波音を耳にしながら好きな時にいつでも極上の湯浴みが楽しめます。特に初冬の夕暮れ時、西の空が黄金色から燃えるような茜色、そして深い群青へとグラデーションを描くドラマチックな落日パノラマは息をのむ美しさ。夕食は橘湾の恵みを知り尽くした料理長による創作海鮮会席。旬を迎えた橘湾の冬ワタリガニや近海物の真鯛、地魚のお造りはもちろん、温泉蒸気を利用して素材の旨味を凝縮させた「地獄蒸し」、柔らかく風味豊かな「雲仙あかね牛」の鉄板焼きなど、目にも鮮やかな料理が並びます。歴史の重みとモダンな快適さが完璧に融合した名宿です。",
              roomTip: "橘湾を一望するテラス露天風呂付き和洋室。夕陽が沈むマジックアワーに合わせて客室露天に浸かれば、海と空と湯船が一体となる贅沢を味わえます。",
              gourmetTip: "「橘湾冬ワタリガニ＆雲仙あかね牛・温泉地獄蒸し会席。」。甘みが強いワタリガニの蒸し料理、雲仙あかね牛のステーキ、旬魚の姿造りと名物小浜ちゃんぽん風小鍋。",
              highlights: [
                "全室オーシャンビュー＆客室テラス掛け流し露天風呂完備と橘湾の夕陽絶景",
                "350年超の歴史誇る老舗の進化系＆橘湾冬ワタリガニと雲仙あかね牛の創作会席",
                "日本一の足湯「ほっとふっと105」まで徒歩すぐ＆記念日や特別な休日に最高の選択"
              ]
            },
            {
              id: 2,
              name: "小浜温泉　旅館　富士屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38550/38550.jpg",
              rating: 5.00,
              reviews: 174,
              price: "¥10,000〜",
              access: "ＪＲ　諫早駅より車で５０分／長崎自動車道　諫早ＩＣより車で４５分",
              special: "４つのタイプの貸し切り天然温泉が何度でも楽しめる宿 　グループやファミリーの方にもおすすめの宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38550%2F38550.html",
              story: "小浜温泉の源泉が密集する湯けむり情緒の中心に佇み、どこか懐かしい昭和レトロの木造建築と家庭的なもてなしが旅人の心をほぐす「小浜温泉 旅館 富士屋」。源泉温度100度を超える良質なナトリウム-塩化物泉を贅沢に100%源泉掛け流しで使用しており、浸かった瞬間に肌を包み込む濃厚な塩分とミネラルが、初冬の冷気で強張った筋肉を優しく解きほぐします。浴室の床や浴槽には長年堆積した温泉成分の結晶が重なり、本物の名湯ならではの風情を醸し出しています。夕食は島原半島の豊かな山海の恵みをふんだんに使った手作りの郷土会席。橘湾で揚がったばかりの新鮮な地魚の舟盛りに加え、冬の味覚であるワタリガニ、地元野菜の天ぷら、そして長崎和牛の陶板焼きなど、気取らないボリューム満点のご馳走が並びます。一人旅から湯治利用まで、本物の源泉力と温かなぬくもりを求める旅人に心から愛される隠れ宿です。",
              roomTip: "畳の清々しい香りが漂う純和風客室。窓の外からは小浜のあちこちから立ち上る湯けむりが眺められ、昔ながらの温泉街情景に浸ることができます。",
              gourmetTip: "「名物地魚舟盛り＆橘湾ワタリガニ・長崎和牛陶板焼き膳。」。獲れたてのカンパチやタイの刺身、ワタリガニの味噌汁、ジューシーな長崎和牛の陶板焼き。",
              highlights: [
                "創業昭和レトロの木造情趣＆100%源泉掛け流しの濃厚塩化物泉と地魚舟盛り",
                "成分結晶が刻まれた本物の浴槽＆アットホームなもてなしと長崎和牛陶板焼き",
                "温泉通や一人旅に絶賛される隠れ宿＆高いリピート率を誇る奇跡の源泉力"
              ]
            },
            {
              id: 3,
              name: "小浜温泉　プライベート・スパ・ホテル≪オレンジ・ベイ≫",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40438/40438.jpg",
              rating: 4.33,
              reviews: 166,
              price: "¥13,500〜",
              access: "諫早駅／長崎自動車道　諫早ＩＣより国道５７号線を雪仙方面へ４０分",
              special: "全室オーシャンフロント。全室に広々としたプライベートお風呂付き。お風呂は天然温泉で温泉かけ流しです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40438%2F40438.html",
              story: "橘湾の海岸通りに面し、全室に海を見渡す絶景の展望温泉露天風呂を備えたスタイリッシュなリゾートホテル「プライベート・スパ・ホテル≪オレンジ・ベイ≫。」。1階には橘湾の新鮮な海の幸が並ぶ海鮮市場があり、客室フロアへ上がると白とブルーを基調としたモダンな別世界が広がります。すべての客室のバルコニーに円形の展望露天風呂が設置され、小浜温泉の源泉が常時掛け流されています。視界を遮るもののない橘湾の水平線、空を舞う海鳥、そして海を黄金色に染め上げて沈んでいく夕陽を湯船の中から眺めるひとときは、まさに極上のプライベートリゾート体験。夕食は併設の海鮮食事処や提携の名店で、橘湾の朝獲れ地魚や冬ワタリガニ、アワビの踊り焼き、長崎牛の鉄板焼きなど、好みのスタイルで自由に堪能できます。自由度の高い滞在と絶景露天を愛するカップルやモダン派に絶大な支持を得ています。",
              roomTip: "オーシャンフロントの展望露天風呂付き洋室（デラックスツイン）。広々としたテラスデッキに備わる源泉露天風呂から望む夕景は小浜屈指の美しさ。",
              gourmetTip: "「橘湾直送活魚・冬ワタリガニ＆長崎和牛海鮮特選コース。」。目の前の海で獲れた旬の海の幸と、サシが美しい長崎和牛をワインとともに味わう至福のディナー。",
              highlights: [
                "全室バルコニー円形展望露天風呂付き＆橘湾サンセットと海鮮市場直送の贅",
                "スタイリッシュなリゾート空間＆波音と潮風を感じながら浸かるプライベート温泉",
                "カップルや女子旅に絶大な人気＆テラスから眺める夕暮れのマジックアワー"
              ]
            },
            {
              id: 4,
              name: "小浜温泉　湯宿　蒸気家",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/147700/147700.jpg",
              rating: 4.10,
              reviews: 261,
              price: "¥6,000〜",
              access: "長野ICから車で約35分、長崎市からは車で約60分。",
              special: "小浜の中でも濃いといわれるかけ流しの源泉。温泉蒸気の蒸し風呂＆素材の旨みが引き立つ蒸釜料理体験も♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147700%2F147700.html",
              story: "「小浜の恵みである天然温泉蒸気で、自ら食材を蒸して味わう。」という伝統の湯治スタイルを現代に伝える体験型温泉宿「小浜温泉 湯宿 蒸気家」。宿の中庭には、100度を超える猛烈な温泉蒸気が常時噴き出す専用の「蒸し釜（地獄蒸し場）」が複数設置され、宿泊客は近隣の商店や市場で買い込んだ橘湾のワタリガニ、牡蠣、エビ、地元産のさつまいもや卵などを自由に蒸して楽しむことができます。高温の温泉蒸気で一気に蒸し上げられた食材は、余分な脂が落ち、素材本来の濃厚な甘みと旨味が凝縮して感動的な美味しさに。大浴場には小浜の濃厚な食塩泉がたっぷりと掛け流され、蒸気を利用した天然スチームサウナも完備。リーズナブルな価格設定と、自分たちで食材を調理して味わう楽しさ、そして本物の高温泉パワーが揃い、連泊して暮らすように旅したい人々に圧倒的な人気を博しています。",
              roomTip: "清潔で機能的な和室またはベッド付き和モダン客室。共同の蒸し釜や炊事場へのアクセスも良く、プライベート感を保ちながらマイペースに過ごせます。",
              gourmetTip: "「地獄蒸し体験（冬ワタリガニ・殻付き牡蠣・島原野菜）。」。自分たちで蒸し上げる熱々のワタリガニは格別。濃厚なカニ味噌とホクホクの身を地酒とともに。",
              highlights: [
                "天然105℃蒸気釜で地獄蒸し体験＆源泉スチームサウナと自由な湯治ステイ",
                "自炊可能なキッチンと蒸し場完備＆地元市場で仕入れた食材を豪快に味わう歓び",
                "長期滞在やワーケーションに最適＆圧倒的なコストパフォーマンスと湯治体験"
              ]
            },
            {
              id: 5,
              name: "小浜温泉　福徳屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/56161/56161.jpg",
              rating: 4.10,
              reviews: 171,
              price: "¥5,500〜",
              access: "ＪＲ　諫早駅より、小浜温泉又は雲仙行きの島原鉄道バスで１時間",
              special: "海の温泉ならではの新鮮な肴と、趣き異なる７つの貸切風呂を楽しみ自分らしい休日をお過し下さい！！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56161%2F56161.html",
              story: "創業以来、小浜温泉の伝統を守り続け、自家源泉から湧く効能豊かな湯と心尽くしの料理でもてなす老舗旅館「小浜温泉 福徳屋旅館」。館内には趣の異なる多彩な浴場が備わり、貸切露天風呂や内湯など、源泉温度105度のパワフルな塩化物泉を贅沢に掛け流しで湯巡りできます。保温効果が極めて高い小浜の湯は「温まりの湯」として親しまれ、初冬の冷たい海風を浴びた後でも身体の芯からポカポカと温もりが全身を巡ります。料理は小浜ならではの郷土の味覚を大切にした和食会席。橘湾で水揚げされた新鮮な刺身盛り合わせをはじめ、冬の味覚であるワタリガニの姿蒸し、長崎名物豚の角煮、そして具だくさんで旨味の染み渡るミニ小浜ちゃんぽんなど、長崎・島原の美味を一度に味わい尽くせる充実の献立が旅の満足度を最高潮へと導いてくれます。",
              roomTip: "温泉街の情緒を感じる落ち着いた和室。畳敷きの温もりあふれる空間で、貸切風呂を楽しんだ後に足を伸ばしてゆったりと寛げます。",
              gourmetTip: "「橘湾地魚刺身盛り＆冬ワタリガニ・長崎豚角煮と小浜ちゃんぽん会席。」。出汁の効いたちゃんぽんのコク、とろける豚角煮、甘いワタリガニの身の完璧な調和。",
              highlights: [
                "多彩な貸切露天風呂巡り＆橘湾冬ワタリガニと名物小浜ちゃんぽん・長崎角煮会席",
                "身体の芯まで温まる強塩泉＆心温まる女将のもてなしと島原半島の豊かな郷土美味",
                "ファミリーからカップルまで使いやすい名湯宿＆小浜温泉街の散策に最高の拠点"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-900 leading-relaxed font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <header className="relative bg-gradient-to-b from-amber-950 via-orange-950 to-stone-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border border-amber-400/30">
            <Sunset className="w-4 h-4 text-amber-300" />
            11月・12月 長崎の冬温泉特集 ｜ 島原半島・雲仙小浜温泉
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            橘湾の茜色落日と熱量日本一105℃の源泉<br />
            初冬の橘湾冬ワタリガニ＆極上雲仙あかね牛名宿
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed pt-2">
            日本一の放熱量を誇る高濃度強塩泉と、橘湾を黄金色に染め上げる日没の絶景。旬の冬ワタリガニと小浜ちゃんぽんに舌鼓を打つ厳選名宿5選。
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5"><Flame className="w-4 h-4 text-orange-400" /> 源泉温度105℃・熱量日本一</span>
            <span className="flex items-center gap-1.5"><Sunset className="w-4 h-4 text-amber-400" /> 全長105m足湯＆橘湾サンセット</span>
            <span className="flex items-center gap-1.5"><Soup className="w-4 h-4 text-rose-400" /> 冬ワタリガニ・小浜ちゃんぽん</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月長崎・雲仙小浜温泉】橘湾の茜色落日と熱量日本一1！名宿5選","item":"https://croud-travel.pages.dev/winter-nagasaki-obama-onsen-sunset-crab-champon-wagyu-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-amber-900 text-xs sm:text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
              <Flame className="w-4 h-4" />
              雲仙岳のマグマ熱が生み出す、日本一のパワフル高温泉
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
              11月から12月へ。橘湾を染める夕暮れマジックアワーと湯煙のぬくもり
            </h2>
          </div>
          <div className="text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
            <p>
              長崎県雲仙市の西岸、穏やかな橘湾に沿って広がる小浜温泉（おばまおんせん）は、開湯713年（肥前風土記）と伝わる日本屈指の歴史ある古湯です。背後にそびえる雲仙普賢岳のマグマの熱を受け、湧き出す源泉の温度は驚異の105度。湧出量と温度を乗じた「総熱量」においては日本一を誇り、街のあちこちから純白の蒸気が激しく噴き上がる壮観な湯煙情緒を醸し出しています。
            </p>
            <p>
              空気が澄み渡る11月から12月にかけての初冬は、小浜温泉の最大の魅力である「橘湾の落日」が最も美しく輝く季節。夕暮れ時、西の空と海面が黄金色から鮮やかな茜色へとグラデーションを描きながら沈みゆく夕陽は、まさに息をのむ美景です。高濃度の塩化物泉（強塩泉）は「温まりの湯」として知られ、入浴すると皮膚に塩の被膜が形成されて熱を逃がさず、初冬の冷たい海風を浴びてもポカポカ感が何時間も持続します。
            </p>
            <p>
              冬の味覚の主役は、潮流の速い橘湾で身を引き締め、濃厚なオレンジ色の内子をたっぷり抱えた「冬ワタリガニ（ガザミ）」。さらに105度の蒸気釜で一気に蒸し上げる「地獄蒸し海鮮料理」、魚介出汁が効いた名物「小浜ちゃんぽん」、そして大自然で育まれたブランド黒毛和牛「雲仙あかね牛」のステーキなど、滋味豊かな島原半島の冬の口福が旅人を迎えます。
            </p>
            <p>
              また、小浜温泉の海岸通りには日本一長い105mの足湯「ほっとふっと105」があり、湯けむりが舞う中で夕陽が水平線に沈みゆくドラマチックな瞬間を特等席で体感できます。地元の人々と旅人が並んで腰掛け、のんびりと語り合いながら過ごす夕暮れのひとときは、旅の最高の思い出となるはずです。
            </p>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-amber-900 font-bold text-xs sm:text-sm tracking-wider uppercase bg-amber-100/60 px-3 py-1 rounded-full">
              SELECTED ACCOMMODATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              小浜温泉で泊まりたい至高の名宿5選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm max-w-xl mx-auto">
              全室客室露天付きの老舗から展望露天リゾート、伝統の地獄蒸し湯治宿まで
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div className="md:col-span-5 relative min-h-[260px] md:min-h-full">
                    <img
                      src={hotel.img}
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      {hotel.rating} ({hotel.reviews}件)
                    </div>
                  </div>

                  <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-stone-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                          {hotel.access}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-amber-800 transition">
                        {hotel.name}
                      </h3>
                      <p className="text-xs text-amber-900 font-medium">
                        {hotel.special}
                      </p>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
                        {hotel.story}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2 border-t border-stone-100">
                      <div className="bg-stone-50 p-3 rounded-xl space-y-1.5 text-xs text-stone-600">
                        <div className="font-semibold text-stone-800 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          宿の魅力・滞在ポイント
                        </div>
                        <ul className="list-disc list-inside space-y-1 pl-1 text-[11px] sm:text-xs">
                          {hotel.highlights.map((hl: string, hIdx: number) => (
                            <li key={hIdx} className="leading-snug">{hl}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] sm:text-xs text-stone-600">
                        <div className="bg-amber-50/50 p-2.5 rounded-lg border border-amber-100/50">
                          <span className="font-bold text-amber-900 block mb-0.5">客室の選び方</span>
                          {hotel.roomTip}
                        </div>
                        <div className="bg-orange-50/50 p-2.5 rounded-lg border border-orange-100/50">
                          <span className="font-bold text-orange-900 block mb-0.5">冬の美食の極意</span>
                          {hotel.gourmetTip}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div>
                          <span className="text-[10px] text-stone-500 block">参考宿泊料金（2名1室/1名様）</span>
                          <span className="text-base sm:text-lg font-bold text-stone-900">{hotel.price}</span>
                        </div>
                        <a
                          href={hotel.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-amber-800 hover:bg-amber-900 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition shadow-xs"
                        >
                          プラン一覧を見る
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local Gourmet Section */}
        <section className="bg-gradient-to-br from-stone-900 via-amber-950 to-orange-950 text-white rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-300 text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Utensils className="w-4 h-4 text-amber-300" />
            初冬の島原半島・小浜温泉美食手帖
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            11月・12月の小浜温泉で味わい尽くす橘湾の海の幸と地獄蒸し
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Soup className="w-4 h-4 text-amber-400" />
                内子たっぷり「橘湾冬ワタリガニ」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                橘湾の激流にもまれて育つワタリガニは、水温が下がる初冬に身の甘みが最高潮に達します。特に雌ガニにぎっしりと詰まった濃厚なオレンジ色の内子（うちこ）は絶品。塩茹でや地獄蒸し、味噌汁で余すところなく味わえます。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                105℃の猛烈温泉蒸気「地獄蒸し」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                源泉温度105度の高温蒸気で一気に蒸し上げる伝統の調理法。地元産の殻付き牡蠣、サザエ、車海老、島原野菜などを蒸すと、素材の水分と甘みがギュッと閉じ込められ、天然の塩分とミネラルが素材の旨味を最大限に引き出します。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-amber-400" />
                元祖小浜ちゃんぽん＆雲仙あかね牛
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                長崎ちゃんぽんのルーツの一つである小浜ちゃんぽんは、橘湾の魚介出汁と豚骨スープのコク、殻付きエビが特徴。さらに雲仙岳の麓で育てられた希少な「雲仙あかね牛」のステーキは、赤身の芳醇な旨味が口いっぱいに広がります。
              </p>
            </div>
          </div>
        </section>

        {/* 1 Night 2 Days Itinerary Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-900 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <Footprints className="w-4 h-4" />
            おすすめ滞在プラン
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の小浜温泉を満喫する1泊2日モデルコース
          </h2>
          <div className="space-y-6 pt-2">
            <div className="border-l-2 border-amber-600 pl-4 sm:pl-6 space-y-2">
              <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                1日目：ほっとふっと105足湯から茜色の落日露天・冬ワタリガニの夜
              </div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                全長105mの海辺足湯で地獄蒸し卵を味わい、橘湾の夕陽露天に浸かる
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                午後、JR諫早駅または長崎空港からバスやレンタカーで小浜温泉へ到着。海岸沿いの「ほっとふっと105」で足湯に浸かりながら、温泉蒸気で蒸したアツアツの温泉卵や蒸し野菜を味わいます。15時に宿へチェックイン。夕暮れ時、橘湾が燃えるような茜色に染まるマジックアワーを客室露天風呂や展望大浴場からじっくり鑑賞。夕食には内子たっぷりの橘湾冬ワタリガニ姿蒸し、雲仙あかね牛ステーキ、熱々の小浜ちゃんぽんを堪能します。
              </p>
            </div>

            <div className="border-l-2 border-amber-600 pl-4 sm:pl-6 space-y-2">
              <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                2日目：雲仙地獄の白煙ハイキングと島原城下町の湧水めぐり
              </div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                雲仙岳の雄大な自然を体感し、名水湧く武家屋敷街散策
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                朝風呂で濃厚な食塩泉に浸かり、身体を芯から温めた後にチェックアウト。車で約25分登って標高700mの「雲仙地獄」へ向かい、激しい噴煙と硫黄の香りに包まれる遊歩道を散策。その後は島原城下町へ移動し、清流が流れる武家屋敷街や「湧水庭園 四明荘」で名物スイーツ「かんざらし」を味わい、有明海フェリーまたは長崎空港経由で帰路につきます。
              </p>
            </div>
          </div>
        </section>

        {/* Climate & Access Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-orange-900 text-sm font-bold bg-orange-50 px-3 py-1 rounded-full">
            <Sun className="w-4 h-4" />
            11月・12月の気候・服装・快適アクセス案内
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の小浜温泉旅行のポイントと寒さ対策
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-amber-700" />
                沿岸部の温暖さと山岳部（雲仙）の寒暖差
              </h3>
              <p>
                海岸沿いの小浜温泉は11月の最高気温が16〜19℃、12月でも12〜15℃と温暖です。ただし、橘湾からの海風があるため、夕暮れの足湯散策には風を通さないジャケットが必要。一方、標高700m以上の雲仙温泉や仁田峠へ登る場合は気温が5〜8℃低下し、12月には路面凍結のおそれもあるため、暖かい防寒着の準備とスタッドレスタイヤの確認が安心です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-700" />
                海上フェリーと陸路のスムーズな移動
              </h3>
              <p>
                福岡・長崎方面からは長崎道諫早ICより国道57号経由で約45分。JR諫早駅から路線バス（島鉄バス）も運行しています。熊本方面からは「有明フェリー（長洲港〜多比良港・45分）。」や「熊本フェリー（熊本港〜島原港・30分）」を利用すれば、海をショートカットして快適に島原半島へアクセスできます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-900 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の長崎・小浜温泉旅行 FAQ
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 flex items-start gap-2">
                  <span className="text-amber-800 shrink-0 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link Section */}
        <section className="bg-gradient-to-br from-stone-900 to-amber-950 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-amber-300" />
              あわせて読みたい九州の冬名湯・美食特集
            </h3>
            <p className="text-xs sm:text-sm text-amber-200">
              湯煙立ち上る名泉と極上の地元和牛・海の幸を味わう九州冬旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-nagasaki-unzen-onsen-jigoku-mist-beef-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">長崎・雲仙温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                雲仙地獄の湯煙と普賢岳霧氷・雲仙あかね牛名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                白濁の濃厚硫黄泉と初冬の雲仙地獄、山上の静寂と極上和牛を堪能する休日。
              </p>
            </Link>

            <Link 
              href="/winter-kumamoto-tsuetate-waita-onsen-steaming-higogyu-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">熊本・杖立温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                元祖むし湯と地獄蒸し＆肥後あか牛名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                立ち上る湯けむりと開湯1800年の天然サウナ、名物杖立プリンと阿蘇あか牛。
              </p>
            </Link>

            <Link 
              href="/winter-saga-takeo-onsen-romon-saga-beef-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">佐賀・武雄温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                国重文朱塗り楼門美肌古湯＆最高峰A5佐賀牛名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                辰野金吾設計の楼門と1300年の美肌湯、極上佐賀牛すき焼きを味わう冬旅。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-nagasaki-obama-onsen-sunset-crab-champon-wagyu-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
