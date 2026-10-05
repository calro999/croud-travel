import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月大分・筋湯温泉＆九重連山】くじゅう連山初冬の霧氷雪景色と打たせ湯日本一・極上おおいた豊後牛＆九重夢ポークを堪能する名宿5選",
  description: "11月中旬から九州屈指の寒冷地である標高1000mの九重高原を初冬の冷気が包み込み、くじゅう連山の稜線が幻想的な霧氷や白雪に覆われる大分県・筋湯温泉（すじゆおんせん）。開湯1000年以上の歴史を誇り、「筋の病に効く」として全国の湯治客に親しまれてきたこの山峡の名湯は、高さ3mから18筋の湯が豪快に落ちる共同浴場「うたせ大浴場」をはじめ、乳白色の硫黄泉やメタケイ酸豊富な美肌湯が湧き出る秘湯の里です。冷え切った身体を名湯で芯から温めた後は、大分が誇る最高峰の黒毛和牛「おおいた豊後牛」の霜降りすき焼きや陶板ステーキ、きめ細やかな旨味のブランド豚「九重夢ポーク」のしゃぶしゃぶ鍋、地獄蒸し料理など、冬の山里の滋味を贅沢に味わえます。初冬の九重連山で静寂と至福の温もりに浸る厳選名宿5選を詳細に紐解きます。",
  keywords: '筋湯温泉 宿泊, 九重温泉 旅館, 筋湯温泉 旅館白滝, 宿房 花しのぶ, 九重悠々亭, たからや旅館, 季の郷 山の湯, うたせ大浴場, 豊後牛 すき焼き, 九重夢ポーク, 11月 12月 大分温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-oita-sujiyu-onsen-kuju-snow-bungo-beef-stay/"
  },
  openGraph: {
    title: "【11・12月大分・筋湯温泉＆九重連山】くじゅう連山初冬の霧氷雪景色と打たせ湯日本一・極上おおいた豊後牛＆九重夢ポークを堪能する名宿5選",
    description: "11月中旬から九州屈指の寒冷地である標高1000mの九重高原を初冬の冷気が包み込み、くじゅう連山の稜線が幻想的な霧氷や白雪に覆われる大分県・筋湯温泉（すじゆおんせん）。開湯1000年以上の歴史を誇り、「筋の病に効く」として全国の湯治客に親しまれてきたこの山峡の名湯は、高さ3mから18筋の湯が豪快に落ちる共同浴場「うたせ大浴場」をはじめ、乳白色の硫黄泉やメタケイ酸豊富な美肌湯が湧き出る秘湯の里です。冷え切った身体を名湯で芯から温めた後は、大分が誇る最高峰の黒毛和牛「おおいた豊後牛」の霜降りすき焼きや陶板ステーキ、きめ細やかな旨味のブランド豚「九重夢ポーク」のしゃぶしゃぶ鍋、地獄蒸し料理など、冬の山里の滋味を贅沢に味わえます。初冬の九重連山で静寂と至福の温もりに浸る厳選名宿5選を詳細に紐解きます。",
    url: 'https://croud-travel.com/winter-oita-sujiyu-onsen-kuju-snow-bungo-beef-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬のくじゅう連山と筋湯温泉うたせ大浴場の雪見風景'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月大分・筋湯温泉＆九重連山】くじゅう連山初冬の霧氷雪景色と打たせ湯日本一・極上おおいた豊後牛＆九重夢ポークを堪能する名宿5選",
    description: "11月中旬から九州屈指の寒冷地である標高1000mの九重高原を初冬の冷気が包み込み、くじゅう連山の稜線が幻想的な霧氷や白雪に覆われる大分県・筋湯温泉（すじゆおんせん）。開湯1000年以上の歴史を誇り、「筋の病に効く」として全国の湯治客に親しまれてきたこの山峡の名湯は、高さ3mから18筋の湯が豪快に落ちる共同浴場「うたせ大浴場」をはじめ、乳白色の硫黄泉やメタケイ酸豊富な美肌湯が湧き出る秘湯の里です。冷え切った身体を名湯で芯から温めた後は、大分が誇る最高峰の黒毛和牛「おおいた豊後牛」の霜降りすき焼きや陶板ステーキ、きめ細やかな旨味のブランド豚「九重夢ポーク」のしゃぶしゃぶ鍋、地獄蒸し料理など、冬の山里の滋味を贅沢に味わえます。初冬の九重連山で静寂と至福の温もりに浸る厳選名宿5選を詳細に紐解きます。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function OitaSujiyuKujuPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-oita-sujiyu-onsen-kuju-snow-bungo-beef-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.com/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.com/"
        },
        "headline": "【11・12月大分・筋湯温泉＆九重連山】くじゅう連山初冬の霧氷雪景色と打たせ湯日本一・極上おおいた豊後牛＆九重夢ポークを堪能する名宿5選",
        "description": "11月中旬から九州屈指の寒冷地である標高1000mの九重高原を初冬の冷気が包み込み、くじゅう連山の稜線が幻想的な霧氷や白雪に覆われる大分県・筋湯温泉（すじゆおんせん）。開湯1000年以上の歴史を誇り、「筋の病に効く」として全国の湯治客に親しまれてきたこの山峡の名湯は、高さ3mから18筋の湯が豪快に落ちる共同浴場「うたせ大浴場」をはじめ、乳白色の硫黄泉やメタケイ酸豊富な美肌湯が湧き出る秘湯の里です。冷え切った身体を名湯で芯から温めた後は、大分が誇る最高峰の黒毛和牛「おおいた豊後牛」の霜降りすき焼きや陶板ステーキ、きめ細やかな旨味のブランド豚「九重夢ポーク」のしゃぶしゃぶ鍋、地獄蒸し料理など、冬の山里の滋味を贅沢に味わえます。初冬の九重連山で静寂と至福の温もりに浸る厳選名宿5選を詳細に紐解きます。",
        "datePublished": "2026-09-29T18:00:00+09:00",
        "dateModified": "2026-09-29T18:00:00+09:00",
        "inLanguage": "ja",
        "mainEntityOfPage": "https://croud-travel.com/winter-oita-sujiyu-onsen-kuju-snow-bungo-beef-stay",
        "publisher": {
          "@type": "Organization",
          "name": "クラドトラベル編集部",
          "url": "https://croud-travel.com/"
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
              "name": "筋湯温泉　旅館白滝",
              "description": "筋湯温泉の最奥部、小松地獄の湯けむりと九重連山の雄峰を間近に仰ぐ静寂の地に佇む「筋湯温泉 旅館白滝」。古き良き湯治文化の温もりを守り続ける純和風旅館で、宿自慢の天然温泉は天候や気温によって透明から神秘的な乳白色へと表情を変える上質な硫黄泉です。総檜造りの内湯や、初冬の冷気と舞い散る粉雪が心地よい露天風呂には、100%源泉掛け流しの湯が惜しみなく注ぎ込まれています。メタケイ酸を豊富に含んだ湯は肌をしっとりと滑らかに潤し、冷え性や筋肉疲労をじんわりと癒やしてくれます。夕食は九重の山里の恵みと大分の極上食材をふんだんに取り入れた郷土会席。メインにはきめ細やかな霜降りを誇る「おおいた豊後牛」のすき焼きまたは陶板焼きが供され、熊本直送の新鮮な馬刺しや清流ヤマメの炭火塩焼き、地元農家が育てる高原野菜の小鉢など、心温まる手作りの味がテーブルを彩ります。秘湯の風情とおもてなしに心まで解きほぐされる名宿です。",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F84937%2F84937.html",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.67",
                "reviewCount": 171
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Hotel",
              "name": "筋湯温泉　宿房　花しのぶ",
              "description": "筋湯のせせらぎが聞こえる静かな小道沿いに佇み、わずか数室のみの贅沢なプライベート空間を提供する隠れ宿「筋湯温泉 宿房 花しのぶ」。大人の隠れ家にふさわしい静謐な館内には、趣の異なる貸切家族風呂が点在し、誰にも邪魔されることなく源泉掛け流しの名湯を独占できます。単純温泉のまろやかな湯は肌への刺激が少なく、初冬の寒風で冷え切った身体を優しく包み込んで芯から温めてくれます。食事は地産地消に徹底してこだわった創作山里懐石。地元九重のブランド豚「九重夢ポーク」を特製出汁でいただくしゃぶしゃぶ鍋は、脂身の上品な甘みと柔らかな肉質が絶品。さらに、旬の山菜料理や豊後水道直送の鮮魚、契約農家のミルキークイーンの釜炊きご飯など、一品一品に料理人の繊細な工夫が光ります。カップルや夫婦の特別な初冬の記念日旅に最適な名宿です。",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145290%2F145290.html",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.41",
                "reviewCount": 179
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Hotel",
              "name": "筋湯温泉　九重　悠々亭",
              "description": "筋湯温泉のシンボルとして親しまれ、可愛い看板犬（グレートピレニーズ）のエンジェル君が出迎えてくれる大型温泉宿「筋湯温泉 九重 悠々亭」。館内には男女合わせて24種類もの多彩なお風呂が揃い、打たせ湯や蒸し風呂、檜風呂、そして初冬の九重連山を望む大露天風呂など、宿にいながらにして一大温泉巡りが楽しめます。源泉は単純温泉・塩化物泉で湯量が極めて豊富。夕食は九重の火山エネルギーを活用した名物「地獄蒸し」や、最高級おおいた和牛の陶板ステーキ会席が名物。蒸気で一気に蒸し上げられた野菜や豚肉は素材本来の甘みが凝縮されており、ヘルシーでありながら深い満足感を味わえます。子ども連れのファミリーから三世代旅行、グループ旅行まで、誰もが笑顔になれる充実したアミューズメント性と確かな温泉力を誇るリゾート旅館です。",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44945%2F44945.html",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "3.95",
                "reviewCount": 212
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Hotel",
              "name": "筋湯温泉　たからや旅館＜大分県＞",
              "description": "筋湯温泉の象徴である共同浴場「うたせ大浴場」のすぐ目の前に位置し、湯治場の伝統を今に伝えるアットホームな老舗「筋湯温泉 たからや旅館＜大分県＞」。宿内にも自家源泉掛け流しの貸切風呂や大浴場が完備されており、うたせ湯巡りと宿のプライベート湯浴みの両方を手軽に満喫できる絶好の立地です。湯上がり処には囲炉裏が切られ、冬の寒さを忘れさせるパチパチとはぜる炭火の温もりが旅人を迎えます。食事は女将と料理長が真心を込めて手作りする田舎風山里膳。地元産豊後牛の陶板焼きや高原野菜の小鍋、名水で仕込んだ手作り豆腐など、素朴ながらも滋味深い料理が並び、どこか懐かしい温もりに包まれます。リーズナブルな価格設定と温かな接客で、リピーターの絶えない名宿です。",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54634%2F54634.html",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "3.92",
                "reviewCount": 128
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Hotel",
              "name": "宝泉寺温泉　ペットと泊まれる宿　季の郷　山の湯",
              "description": "筋湯温泉から車で約15分、九重連山の麓の静かな里山に位置し、愛犬と一緒に泊まれる上質な温泉宿として高い評価を受ける「宝泉寺温泉 ペットと泊まれる宿 季の郷 山の湯」。初冬の澄んだ森の空気に抱かれた宿内には、美肌効果抜群の弱アルカリ性単純温泉が湛えられた広々とした露天風呂があり、夜には満天の冬星を眺めながらの爽快な湯浴みが楽しめます。ペット専用の温泉足湯やドッグランも完備され、愛犬家はもちろん、静けさを求める一般の旅行者にも快適な空間が提供されています。夕食は大分の旬の味覚をふんだんに取り入れた炭火会席や和食膳。おおいた豊後牛の炭火焼きや旬の地魚、手作りの郷土小鉢など、心づくしの美食が冬の夜を贅沢に演出します。自然と調和した心地よいステイが叶う名宿です。",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29378%2F29378.html",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.58",
                "reviewCount": 286
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
            "name": "11月・12月の筋湯温泉・九重連山（やまなみハイウェイ）の積雪・路面凍結状況とタイヤ規制は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "筋湯温泉は標高約1,000mの九州屈指の寒冷高原地帯に位置し、例年11月下旬頃に初雪が観測され、12月に入ると本格的な積雪や朝晩の路面凍結（ブラックアイスバーン）が頻発します。大分自動車道九重ICから筋湯温泉へ通じる「四季彩ロード」や「やまなみハイウェイ（県道11号線）」では、積雪時にチェーン規制や冬用タイヤ規制が発令されることがあります。11月中旬以降に車で訪れる場合は必ずスタッドレスタイヤを装着するか、タイヤチェーンを必ず携行してください。"
            }
          },
          {
            "@type": "Question",
            "name": "筋湯温泉の象徴「うたせ大浴場」の利用方法や特徴は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "共同浴場「うたせ大浴場」は、高さ約3mから18筋の湯が滝のように豪快に流れ落ちる全国屈指の打たせ湯です。入口の自動販売機でコインを購入して入場します。水圧と湯温（約42〜43℃）が絶妙で、肩や腰、背中に打たせることで筋肉のコリや神経痛を和らげると言われています。勢いが強いため、直接頭部に当てず、タオルを肩に載せて受けるのが地元流の入浴法です。"
            }
          },
          {
            "@type": "Question",
            "name": "初冬の九重・筋湯エリアで味わえる名物グルメやブランド肉は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "大分県が誇るブランド黒毛和牛「おおいた豊後牛」やすき焼き・ステーキは必食の逸品です。また、九重の大自然と澄んだ水で育まれたブランド豚「九重夢ポーク」は、脂身に上品な甘みがあり、しゃぶしゃぶ鍋やローストで絶大な人気を誇ります。さらに、小松地獄などの温泉蒸気を活かした「地獄蒸し卵・地獄蒸し野菜」、清流で育ったヤマメ・エノハの塩焼き、大分名物の「だんご汁」「とり天」も冬の身体を芯から温めてくれます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬期（11・12月）の九重連山のおすすめ観光スポットやアクティビティは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "11月下旬以降、冷え込んだ朝にはくじゅう連山の山肌に美しい「霧氷（むひょう）」が現れ、白銀の絶景が広がります。また、宿から車で約10〜15分の「九重森林公園スキー場」が12月上旬にオープンし、九州屈指のゲレンデでスキーやスノーボードを楽しめます。さらに、日本有数の吊橋「九重“夢”大吊橋」からの白銀の滝・渓谷パノラマや、硫黄の噴気が立ち上る「小松地獄」の散策も初冬の見どころです。"
            }
          },
          {
            "@type": "Question",
            "name": "公共交通機関（JR・バス）を利用したアクセス方法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "JR久大本線「豊後中村駅」から九重町コミュニティバス（筋湯温泉行き）が運行されています。また、福岡（博多・天神）や由布院・別府・阿蘇方面からは高速バス「九州横断バス」を利用して「筋湯温泉入口」バス停で下車し、各宿の送迎車を利用するルートもあります。冬道の運転を避けたい方は、公共交通機関と宿の送迎サービスの組み合わせがおすすめです。"
            }
          }
        ]
      }
    ]
  };

  const faqList = [
  {
    "q": "11月・12月の筋湯温泉・九重連山（やまなみハイウェイ）の積雪・路面凍結状況とタイヤ規制は？",
    "a": "筋湯温泉は標高約1,000mの九州屈指の寒冷高原地帯に位置し、例年11月下旬頃に初雪が観測され、12月に入ると本格的な積雪や朝晩の路面凍結（ブラックアイスバーン）が頻発します。大分自動車道九重ICから筋湯温泉へ通じる「四季彩ロード」や「やまなみハイウェイ（県道11号線）」では、積雪時にチェーン規制や冬用タイヤ規制が発令されることがあります。11月中旬以降に車で訪れる場合は必ずスタッドレスタイヤを装着するか、タイヤチェーンを必ず携行してください。"
  },
  {
    "q": "筋湯温泉の象徴「うたせ大浴場」の利用方法や特徴は？",
    "a": "共同浴場「うたせ大浴場」は、高さ約3mから18筋の湯が滝のように豪快に流れ落ちる全国屈指の打たせ湯です。入口の自動販売機でコインを購入して入場します。水圧と湯温（約42〜43℃）が絶妙で、肩や腰、背中に打たせることで筋肉のコリや神経痛を和らげると言われています。勢いが強いため、直接頭部に当てず、タオルを肩に載せて受けるのが地元流の入浴法です。"
  },
  {
    "q": "初冬の九重・筋湯エリアで味わえる名物グルメやブランド肉は？",
    "a": "大分県が誇るブランド黒毛和牛「おおいた豊後牛」やすき焼き・ステーキは必食の逸品です。また、九重の大自然と澄んだ水で育まれたブランド豚「九重夢ポーク」は、脂身に上品な甘みがあり、しゃぶしゃぶ鍋やローストで絶大な人気を誇ります。さらに、小松地獄などの温泉蒸気を活かした「地獄蒸し卵・地獄蒸し野菜」、清流で育ったヤマメ・エノハの塩焼き、大分名物の「だんご汁」「とり天」も冬の身体を芯から温めてくれます。"
  },
  {
    "q": "冬期（11・12月）の九重連山のおすすめ観光スポットやアクティビティは？",
    "a": "11月下旬以降、冷え込んだ朝にはくじゅう連山の山肌に美しい「霧氷（むひょう）」が現れ、白銀の絶景が広がります。また、宿から車で約10〜15分の「九重森林公園スキー場」が12月上旬にオープンし、九州屈指のゲレンデでスキーやスノーボードを楽しめます。さらに、日本有数の吊橋「九重“夢”大吊橋」からの白銀の滝・渓谷パノラマや、硫黄の噴気が立ち上る「小松地獄」の散策も初冬の見どころです。"
  },
  {
    "q": "公共交通機関（JR・バス）を利用したアクセス方法は？",
    "a": "JR久大本線「豊後中村駅」から九重町コミュニティバス（筋湯温泉行き）が運行されています。また、福岡（博多・天神）や由布院・別府・阿蘇方面からは高速バス「九州横断バス」を利用して「筋湯温泉入口」バス停で下車し、各宿の送迎車を利用するルートもあります。冬道の運転を避けたい方は、公共交通機関と宿の送迎サービスの組み合わせがおすすめです。"
  }
];

  const hotelList = [
            {
              id: 1,
              name: "筋湯温泉　旅館白滝",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/84937/84937.jpg",
              rating: 4.67,
              reviews: 171,
              price: "¥8,800〜",
              access: "豊後中村駅より日田バスで１時間",
              special: "■九重スキー場まで車で5分■自然豊かな山あいの湯宿。手作りのお料理、貸切風呂、真心込めたおもてなし。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F84937%2F84937.html",
              story: "筋湯温泉の最奥部、小松地獄の湯けむりと九重連山の雄峰を間近に仰ぐ静寂の地に佇む「筋湯温泉 旅館白滝」。古き良き湯治文化の温もりを守り続ける純和風旅館で、宿自慢の天然温泉は天候や気温によって透明から神秘的な乳白色へと表情を変える上質な硫黄泉です。総檜造りの内湯や、初冬の冷気と舞い散る粉雪が心地よい露天風呂には、100%源泉掛け流しの湯が惜しみなく注ぎ込まれています。メタケイ酸を豊富に含んだ湯は肌をしっとりと滑らかに潤し、冷え性や筋肉疲労をじんわりと癒やしてくれます。夕食は九重の山里の恵みと大分の極上食材をふんだんに取り入れた郷土会席。メインにはきめ細やかな霜降りを誇る「おおいた豊後牛」のすき焼きまたは陶板焼きが供され、熊本直送の新鮮な馬刺しや清流ヤマメの炭火塩焼き、地元農家が育てる高原野菜の小鉢など、心温まる手作りの味がテーブルを彩ります。秘湯の風情とおもてなしに心まで解きほぐされる名宿です。",
              roomTip: "くじゅう連山の山並みを望む落ち着いた和室。初冬の澄み渡る夜には満天の星が広がり、静寂に包まれた安らぎの時間を過ごせます。",
              gourmetTip: "「おおいた豊後牛すき焼き＆小松郷土会席」。とろける豊後牛の旨味、熊本直送の極上霜降り馬刺し、ヤマメの塩焼き、大分麦焼酎。",
              highlights: [
                "乳白色に色を変える極上自噴硫黄泉＆小松地獄を望む総檜造りの雪見露天風呂",
                "霜降りおおいた豊後牛すき焼き＆熊本直送の極上馬刺しと清流ヤマメ塩焼き",
                "標高1000mの白銀世界に包まれる秘湯一軒宿＆メタケイ酸たっぷりの美肌湯"
              ]
            },
            {
              id: 2,
              name: "筋湯温泉　宿房　花しのぶ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/145290/145290.jpg",
              rating: 4.41,
              reviews: 179,
              price: "¥9,000〜",
              access: "大分自動車道九重ＩＣから車で約30分。筋湯温泉に入り「旅の宿 山椿」さんがあるＴ字路からお越し下さい※ホームページ参照",
              special: "雄大な九重連山の麓、渓流のせせらぎの音、鳥のさえずりを音楽に心癒せる時をすごせる所",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145290%2F145290.html",
              story: "筋湯のせせらぎが聞こえる静かな小道沿いに佇み、わずか数室のみの贅沢なプライベート空間を提供する隠れ宿「筋湯温泉 宿房 花しのぶ」。大人の隠れ家にふさわしい静謐な館内には、趣の異なる貸切家族風呂が点在し、誰にも邪魔されることなく源泉掛け流しの名湯を独占できます。単純温泉のまろやかな湯は肌への刺激が少なく、初冬の寒風で冷え切った身体を優しく包み込んで芯から温めてくれます。食事は地産地消に徹底してこだわった創作山里懐石。地元九重のブランド豚「九重夢ポーク」を特製出汁でいただくしゃぶしゃぶ鍋は、脂身の上品な甘みと柔らかな肉質が絶品。さらに、旬の山菜料理や豊後水道直送の鮮魚、契約農家のミルキークイーンの釜炊きご飯など、一品一品に料理人の繊細な工夫が光ります。カップルや夫婦の特別な初冬の記念日旅に最適な名宿です。",
              roomTip: "離れ風の趣を持つ落ち着いた和洋室。専用の温泉風呂付き客室もあり、好きな時に何度でも雪見風呂を愉しむ贅沢が叶います。",
              gourmetTip: "「九重夢ポークしゃぶしゃぶ＆山里創作懐石」。甘みが溶け出す九重夢ポーク、手作り刺身こんにゃく、高原野菜の小鍋、大分県産米のご飯。",
              highlights: [
                "全室離れ風の静寂な大人の隠れ家＆趣異なる貸切家族風呂と源泉掛け流し",
                "九重夢ポーク特製出汁しゃぶしゃぶ＆契約農家ミルキークイーン釜炊きご飯",
                "カップル・夫婦の記念日旅行に最高のプライベート空間＆露天風呂付き客室"
              ]
            },
            {
              id: 3,
              name: "筋湯温泉　九重　悠々亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/44945/44945.jpg",
              rating: 3.95,
              reviews: 212,
              price: "¥16,500〜",
              access: "ＪＲ久大線　豊後中村駅よりバスで６０分／大分自動車道　九重インターより車で３０分",
              special: "2025年4月リニューアルオープン♪館内湯めぐりに旬の味覚★エンジェル君も待ってるワン！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44945%2F44945.html",
              story: "筋湯温泉のシンボルとして親しまれ、可愛い看板犬（グレートピレニーズ）のエンジェル君が出迎えてくれる大型温泉宿「筋湯温泉 九重 悠々亭」。館内には男女合わせて24種類もの多彩なお風呂が揃い、打たせ湯や蒸し風呂、檜風呂、そして初冬の九重連山を望む大露天風呂など、宿にいながらにして一大温泉巡りが楽しめます。源泉は単純温泉・塩化物泉で湯量が極めて豊富。夕食は九重の火山エネルギーを活用した名物「地獄蒸し」や、最高級おおいた和牛の陶板ステーキ会席が名物。蒸気で一気に蒸し上げられた野菜や豚肉は素材本来の甘みが凝縮されており、ヘルシーでありながら深い満足感を味わえます。子ども連れのファミリーから三世代旅行、グループ旅行まで、誰もが笑顔になれる充実したアミューズメント性と確かな温泉力を誇るリゾート旅館です。",
              roomTip: "九重連山の雄大なパノラマを一望する高層階和室またはモダン客室。初冬の朝、雪化粧した山肌が朝日に染まるモルゲンロートを望めます。",
              gourmetTip: "「おおいた和牛陶板ステーキ＆名物地獄蒸し会席」。ジューシーな和牛ステーキ、温泉蒸気で蒸し上げる豚肉と冬野菜、名物だんご汁。",
              highlights: [
                "24種類の多彩なお風呂完備＆火山エネルギー地獄蒸しとおおいた和牛会席",
                "可愛い名物看板犬エンジェル君のお出迎え＆初冬九重連山の雄大パノラマ",
                "ファミリー・三世代旅行に大人気＆九重森林公園スキー場へのアクセス抜群"
              ]
            },
            {
              id: 4,
              name: "筋湯温泉　たからや旅館＜大分県＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54634/54634.jpg",
              rating: 3.92,
              reviews: 128,
              price: "¥8,250〜",
              access: "豊後中村駅より九重登山口行きバスにて約50分/九州自動車道九重ICより約30分",
              special: "※フロント等に除菌ポンプ設置済※筋湯温泉郷に佇む全11室の老舗旅館。森林公園スキー場まで車で5分",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54634%2F54634.html",
              story: "筋湯温泉の象徴である共同浴場「うたせ大浴場」のすぐ目の前に位置し、湯治場の伝統を今に伝えるアットホームな老舗「筋湯温泉 たからや旅館＜大分県＞」。宿内にも自家源泉掛け流しの貸切風呂や大浴場が完備されており、うたせ湯巡りと宿のプライベート湯浴みの両方を手軽に満喫できる絶好の立地です。湯上がり処には囲炉裏が切られ、冬の寒さを忘れさせるパチパチとはぜる炭火の温もりが旅人を迎えます。食事は女将と料理長が真心を込めて手作りする田舎風山里膳。地元産豊後牛の陶板焼きや高原野菜の小鍋、名水で仕込んだ手作り豆腐など、素朴ながらも滋味深い料理が並び、どこか懐かしい温もりに包まれます。リーズナブルな価格設定と温かな接客で、リピーターの絶えない名宿です。",
              roomTip: "昔ながらの温泉情緒が漂う純和風客室。共同浴場の湯けむりを見下ろしながら、のんびりと読書や休息を楽しむ湯治ステイに最適です。",
              gourmetTip: "「豊後牛陶板焼き＆囲炉裏風田舎膳」。香ばしい豊後牛の陶板焼き、九重の大根や白菜を使った煮物、名物山女魚の塩焼き、大分のかぼす酒。",
              highlights: [
                "名物うたせ大浴場の目の前＆囲炉裏の炭火温もりと自家源泉掛け流し湯",
                "素朴で温かい手作り山里膳＆コストパフォーマンス抜群の湯治ステイ",
                "筋湯温泉街の中心で名物湯巡り満喫＆昔ながらの湯治場風情を味わう休日"
              ]
            },
            {
              id: 5,
              name: "宝泉寺温泉　ペットと泊まれる宿　季の郷　山の湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29378/29378.jpg",
              rating: 4.58,
              reviews: 286,
              price: "¥10,800〜",
              access: "久大本線・豊後森駅／大分自動車道・九重ＩＣ～１０分",
              special: "大分県九重連山麓の温泉旅館で洞窟風呂、うたせ湯、露天風呂、家族風呂があり四季の季節感あふれる宿です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29378%2F29378.html",
              story: "筋湯温泉から車で約15分、九重連山の麓の静かな里山に位置し、愛犬と一緒に泊まれる上質な温泉宿として高い評価を受ける「宝泉寺温泉 ペットと泊まれる宿 季の郷 山の湯」。初冬の澄んだ森の空気に抱かれた宿内には、美肌効果抜群の弱アルカリ性単純温泉が湛えられた広々とした露天風呂があり、夜には満天の冬星を眺めながらの爽快な湯浴みが楽しめます。ペット専用の温泉足湯やドッグランも完備され、愛犬家はもちろん、静けさを求める一般の旅行者にも快適な空間が提供されています。夕食は大分の旬の味覚をふんだんに取り入れた炭火会席や和食膳。おおいた豊後牛の炭火焼きや旬の地魚、手作りの郷土小鉢など、心づくしの美食が冬の夜を贅沢に演出します。自然と調和した心地よいステイが叶う名宿です。",
              roomTip: "木の温もりが広がる和洋室または露天風呂付き特別室。愛犬同伴でも気兼ねなく寛げる清潔でゆったりとした空間設計が魅力です。",
              gourmetTip: "「おおいた豊後牛炭火焼き＆旬魚会席」。炭火の遠赤外線でジューシーに焼き上げる豊後牛、豊後水道の鮮魚お造り、自家製デザート。",
              highlights: [
                "九重山麓の美肌天然温泉露天風呂＆おおいた豊後牛炭火焼きと旬魚会席",
                "愛犬同伴対応の充実設備＆満天の冬星空を仰ぐ爽快なフォレスト露天風呂",
                "宝泉寺温泉の静かな森に佇む癒やし宿＆九州ドライブ周遊の理想的拠点"
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
      <header className="relative bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80"
            alt="初冬のくじゅう連山と筋湯温泉の雪景色"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border border-amber-500/30">
            <Snowflake className="w-4 h-4 text-amber-300" />
            11月・12月 九州の冬温泉特集 ｜ 大分・筋湯温泉＆九重連山
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            標高1000mくじゅう連山の霧氷雪景色<br />
            日本一の打たせ湯と極上おおいた豊後牛名宿
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed pt-2">
            18筋の湯が落ちる「うたせ大浴場」と乳白色の自噴硫黄泉。小松地獄の湯けむりが舞う山峡で味わう九重夢ポークと霜降り豊後牛。
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5"><Waves className="w-4 h-4 text-sky-400" /> 日本一の18筋「うたせ大浴場」</span>
            <span className="flex items-center gap-1.5"><Mountain className="w-4 h-4 text-amber-400" /> 標高1,000mくじゅう連山初冬の霧氷</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-rose-400" /> 極上おおいた豊後牛＆九重夢ポーク</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-12">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-amber-800 text-xs sm:text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
              <Mountain className="w-4 h-4" />
              九州最高峰の山麓に湧く、開湯千年の古湯と豪快な打たせ湯
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
              11月から12月へ。くじゅうの白銀霧氷と身体の芯まで熱が染み渡る自噴泉
            </h2>
          </div>
          <div className="text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
            <p>
              大分県西部にそびえる九州本土最高峰・中岳（標高1791m）を擁する九重連山。その雄大な山懐、標高約1000mの高原の谷あいに位置する「筋湯温泉（すじゆおんせん）」は、平安時代の開湯と伝わり、「筋肉の凝りや筋の病を治す」ことからその名が付けられた由緒ある秘湯です。
            </p>
            <p>
              11月中旬を迎えると九州とは思えない冷気が高原を包み、くじゅう連山の木々は美しい霧氷をまとい、やまなみハイウェイの車窓には白銀の絶景が広がります。温泉街の中心に佇む共同浴場「うたせ大浴場」では、高さ3mの樋から18筋の湯がドドドと轟音を立てて落下し、肩や腰を打たせることで日頃の疲労や寒さによる強張りを一気に吹き飛ばしてくれます。また、温泉街の周辺には乳白色の硫黄泉やメタケイ酸豊富な美肌湯など、泉質の異なる豊かな源泉が自噴しています。
            </p>
            <p>
              湯上がりの夕べを彩るのは、大分の大自然の恵み。肉質等級4等級以上の厳選黒毛和牛「おおいた豊後牛」の霜降りすき焼きや陶板ステーキ、甘み際立つ地元産「九重夢ポーク」のしゃぶしゃぶ鍋、そして温泉蒸気で蒸し上げる熱々の「地獄蒸し」など、冬の山里ならではの温もりあふれる美食が並びます。静寂と清冽な空気に抱かれ、心身ともに生き返る初冬の九重旅をお楽しみください。
            </p>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase bg-amber-100/60 px-3 py-1 rounded-full">
              SELECTED ACCOMMODATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              筋湯温泉＆九重連山で泊まりたい至高の名宿5選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm max-w-xl mx-auto">
              小松地獄を望む自噴硫黄泉の老舗から離れ風隠れ宿、24種の湯巡りリゾートまで
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
                    <Image
                      src={hotel.img}
                      alt={hotel.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
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
                        <div className="bg-rose-50/50 p-2.5 rounded-lg border border-rose-100/50">
                          <span className="font-bold text-rose-900 block mb-0.5">冬の美食の極意</span>
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
        <section className="bg-gradient-to-br from-stone-900 to-amber-950 text-white rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-300 text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Utensils className="w-4 h-4 text-amber-300" />
            初冬のくじゅう高原美食手帖
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            11月・12月の筋湯・九重で味わい尽くす大分豊後牛と山里の恵み
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                最高峰黒毛和牛「おおいた豊後牛」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                大分の雄大な自然で育まれる「おおいた豊後牛」。肉質等級4等級以上の肉は、細やかな霜降りと人肌で溶ける脂の旨味が絶品。陶板ステーキですっきりと焼き上げるか、甘辛い割下のすき焼きで肉の甘みを引き出します。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-amber-400" />
                九重名物「九重夢ポーク出汁しゃぶ」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                九重山麓の清澄な伏流水と厳選した飼料で育つ銘柄豚「九重夢ポーク」。肉質が柔らかく、脂身に臭みが一切ない上品な甘みが特徴。昆布と鰹の特製出汁でいただくしゃぶしゃぶ鍋は、冬の寒さを忘れさせる美味しさです。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                温泉地獄蒸しと大分名物だんご汁
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                九重の活発な地熱蒸気で一気に蒸し上げる「地獄蒸し」。高原大根やカボチャ、卵の甘みが凝縮されます。さらに、小麦粉を帯状に伸ばした手延べ麺と根菜を味噌仕立てで煮込む名物「だんご汁」は心温まる郷土の味です。
              </p>
            </div>
          </div>
        </section>

        {/* 1 Night 2 Days Itinerary Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <Footprints className="w-4 h-4" />
            おすすめ滞在プラン
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の筋湯温泉＆九重連山 1泊2日満喫モデルコース
          </h2>
          <div className="space-y-6 pt-2">
            <div className="border-l-2 border-amber-600 pl-4 sm:pl-6 space-y-2">
              <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                1日目：九重ICから絶景ドライブ・打たせ湯と豊後牛の夜
              </div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                九重ICから「九重“夢”大吊橋」、筋湯温泉うたせ大浴場と極上会席
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                大分自動車道九重ICを出発し、四季彩ロードを抜けて日本有数の高さを誇る「九重“夢”大吊橋」へ。初冬の冷気の中、白銀に煙る震動の滝と九重渓谷の雄大なパノラマを空中散歩。午後、筋湯温泉へチェックイン。共同浴場「うたせ大浴場」で高さ3mから落ちる18筋の打たせ湯を浴び、日頃の肩こりや運転疲れをリフレッシュ。夜は霜降りおおいた豊後牛のすき焼きや九重夢ポークのしゃぶしゃぶ鍋を大分麦焼酎とともに堪能。
              </p>
            </div>

            <div className="border-l-2 border-amber-600 pl-4 sm:pl-6 space-y-2">
              <div className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                2日目：くじゅう霧氷を仰ぐ朝露天・小松地獄散策とやまなみ絶景
              </div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                白銀の山並み望む朝風呂から「小松地獄」蒸気散策、湯布院・阿蘇へ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                澄み渡る朝の空気の中、初雪をかぶった九重連山を望む雪見露天風呂で爽快な湯浴み。朝食に熱々のだんご汁と大分県産米のご飯を味わいチェックアウト。宿のすぐ近くにある「小松地獄」へ向かい、噴煙立ち上る遊歩道散策と名物の地獄蒸し卵作りを体験。その後、やまなみハイウェイをドライブして牧ノ戸峠の霧氷絶景を眺めながら、由布院または阿蘇方面への周遊ルートへ。
              </p>
            </div>
          </div>
        </section>

        {/* Winter Driving & Climate Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-sky-800 text-sm font-bold bg-sky-50 px-3 py-1 rounded-full">
            <Snowflake className="w-4 h-4" />
            11月・12月の気候・雪道運転・服装完全ガイド
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            標高1000m高原の寒さとやまなみハイウェイ運転注意点
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-700" />
                高原気候の寒暖差と防寒装備
              </h3>
              <p>
                筋湯温泉は標高1000mに位置するため、平地（大分市や福岡市）よりも気温が約6〜8℃低くなります。11月中旬の朝晩は氷点下に達し、12月は日中でも5℃を下回ります。
              </p>
              <p>
                防風性のある厚手ダウンジャケット、マフラー、手袋を必ず持参してください。温泉街の石畳や散策道は凍結しやすいため、滑りにくいトレッキングシューズや防寒靴が適しています。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-700" />
                やまなみハイウェイの積雪・凍結対策
              </h3>
              <p>
                九重ICから四季彩ロード、または湯布院・阿蘇方面からのやまなみハイウェイは、冬期に積雪や夜間凍結が発生します。11月下旬以降はスタッドレスタイヤの装着、またはチェーンの携行が必須です。
              </p>
              <p>
                特に牧ノ戸峠周辺（標高1330m）は急激に天候が悪化しやすいため、道路交通情報と天気予報を事前確認し、日没前の明るい時間帯のチェックインを強く推奨します。
              </p>
            </div>
          </div>

          <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <ThermometerSun className="w-4 h-4 text-amber-700" />
              名物「打たせ湯」の安全な入浴法とマナー
            </h3>
            <p>
              うたせ大浴場の湯は高さ3mから勢いよく落下するため、直接頭部や顔に当てるのは避けてください。まずは肩や背中にタオルを当てて、水圧を適度に和らげながら受けるのがベストです。
            </p>
            <p>
              強い刺激により血行が急速に促進されるため、1回あたり5〜10分程度を目安にし、長時間の連続利用は避けましょう。入浴後は水分をしっかり拭き、脱衣所で身体を冷やさないよう注意してください。
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の筋湯温泉＆九重連山旅行 FAQ
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
              あわせて読みたい大分・九州の冬温泉特集
            </h3>
            <p className="text-xs sm:text-sm text-amber-200">
              湯布院の朝霧、別府の湯けむり、長湯の炭酸泉を満喫する極上冬旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-oita-yufuin-onsen-kinrinko-asamiri-bungo-beef-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">大分・由布院温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                金鱗湖の幻想的な朝霧と豊後牛会席
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                冬の金鱗湖から立ち上る湯気と由布岳の雪景色、極上豊後牛を堪能する大人の休日。
              </p>
            </Link>

            <Link 
              href="/winter-oita-beppu-kannawa-onsen-yukemuri-bungo-beef-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">大分・別府鉄輪温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                鉄輪温泉の湯けむり展望と地獄蒸し
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                立ち上る湯けむりと別府湾の夜景、名物地獄蒸し料理と豊後牛ステーキを味わう旅。
              </p>
            </Link>

            <Link 
              href="/winter-oita-nagayu-onsen-carbonated-spring-kuju-snow-bungogyu-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">大分・竹田長湯温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                日本一の高濃度炭酸泉と芹川雪景色
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                全身を泡が包む世界屈指の炭酸泉と名物ラムネ温泉館、豊後牛しゃぶしゃぶ。
              </p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
