import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, Sun
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月京都丹後・夕日ヶ浦温泉】本場間人ガニ！名宿5選',
  description: '11月6日のカニ漁解禁を迎えると、京都府北部・丹後半島の西端に位置する夕日ヶ浦温泉（浜詰温泉）は。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '夕日ヶ浦温泉 宿泊, 夕日ヶ浦温泉 カニ 11月 12月, 佳松苑 夕日ヶ浦, 海花亭 花御前, 旅亭 櫂, 静花扇, 海舟 夕日ヶ浦, 松葉ガニ 間人ガニ 宿, 丹後 温泉 露天風呂',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kyoto-tango-yuhigaura-matsuba-crab-stay/"
  },
  openGraph: {
    title: '【11・12月京都丹後・夕日ヶ浦温泉】本場間人ガニ！名宿5選',
    description: '11月6日のカニ漁解禁を迎えると、京都府北部・丹後半島の西端に位置する夕日ヶ浦温泉（浜詰温泉）は。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-kyoto-tango-yuhigaura-matsuba-crab-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の夕日ヶ浦温泉と日本海に沈む夕日'
      }
    ]
  }
};

const faqList = [
  {
    "q": "夕日ヶ浦温泉の11月・12月の気候や気温、雪の降り始めはいつ頃ですか？",
    "a": "京都府北部の丹後地方に位置する夕日ヶ浦温泉は、日本海特有の冬の気候となります。11月上旬から中旬は最高気温13〜17℃、最低気温7〜10℃前後で、日中は比較的過ごしやすい日が多いですが、海からの冷たい北風が吹き抜けます。11月下旬になると一気に気温が下がり、朝晩は3〜5℃前後まで冷え込みます。12月に入ると最高気温8〜10℃、朝晩は0〜3℃前後となり、12月中旬から下旬にかけて初雪や降雪が見られます。海辺のため風が強く体感温度がぐっと下がるため、風を通さない厚手のダウンコート、防風マフラー、手袋、保温性インナーの着用が必須です。"
  },
  {
    "q": "夕日ヶ浦温泉の泉質の特徴と「美人の湯」と呼ばれる理由は？",
    "a": "夕日ヶ浦温泉（浜詰温泉）の泉質は「アルカリ性単純温泉（低張性アルカリ性高温泉）。」。pH値が8.5以上のアルカリ性を示し、無色透明で肌触りが非常に滑らかでトロリとしているのが大きな特徴です。アルカリ性の温泉水には肌表面の古い角質や余分な皮脂をやさしく落とす天然のクレンジング効果があり、入浴直後から肌がつるつる・すべすべになることから「美人の湯」「美肌の湯」として女性客を中心に絶大な支持を集めています。刺激が少なく湯あたりしにくいため、初冬の冷えた体を長湯でじっくり温めるのに最適です。"
  },
  {
    "q": "11月に解禁される「松葉ガニ」と「間人ガニ」の違いは何ですか？",
    "a": "「松葉ガニ」とは、山陰・北陸沖の日本海で水揚げされる成長した雄のズワイガニの地方名です。毎年11月6日に一斉にカニ漁が解禁され、3月下旬まで水揚げされます。その中でも「間人ガニ（たいざがに）」は、夕日ヶ浦温泉からほど近い丹後半島の間人港（京丹後市丹後町）に所属するわずか5隻の小型底引き網漁船によって日帰り漁で水揚げされる最高級ブランドガニです。漁場が近く獲れたその日のうちに生きたままセリにかけられるため、鮮度と身の締まり、味噌の濃厚さが格別で、緑色の認定タグが付けられて「幻の蟹」として高値で取引されます。夕日ヶ浦温泉では、間人ガニをはじめ、近隣の津居山港や柴山港、網野の厳選松葉ガニが宿ごとに贅沢に提供されます。"
  },
  {
    "q": "京都・大阪方面からのアクセス方法と冬道運転の注意点は？",
    "a": "電車を利用する場合、京都駅または新大阪駅からJR特急「はしだて」「こうのとり」で福知山または豊岡へ向かい、京都丹後鉄道に乗り換えて「夕日ヶ浦木津温泉駅」まで約2時間30分〜3時間です。駅からは多くの宿が無料送迎を行っています。車の場合は、京都縦貫自動車道を経由して「京丹後大宮IC」まで直結し、そこから一般道（国道312号・府道）で約30分とアクセスが大幅に向上しました。ただし、12月に入ると山間部（丹波・福知山周辺や丹後大宮付近）で路面凍結や積雪が発生するため、車で訪れる場合は必ずスタッドレスタイヤを装着してください。"
  },
  {
    "q": "「日本の夕陽百選」に選ばれた夕日ヶ浦の夕日を見るベストな時間は？",
    "a": "夕日ヶ浦海岸（浜詰海岸）は、約8kmにわたって緩やかな弧を描く白砂青松のロングビーチで、水平線にゆっくりと沈む夕日の美しさは「日本の夕陽百選」にも選定されています。11月・12月の日の入り時刻はおよそ16時40分〜17時00分頃です。日没の約30分前から空が茜色、紫、深い青へとグラデーションを描く「マジックアワー」が始まります。チェックインを16時前までに済ませ、客室のテラスや展望露天風呂、海岸の木製ブランコ「ゆらり」周辺から眺めるのが最もおすすめです。"
  }
];

export default function YuhigauraOnsenWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-kyoto-tango-yuhigaura-matsuba-crab-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-kyoto-tango-yuhigaura-matsuba-crab-stay"
        },
        "headline": "【11・12月京都丹後・夕日ヶ浦温泉の日本海夕景と11月解禁松葉ガニ】本場間人ガニ・美人の湯＆海辺展望露天の宿5選",
        "description": "11月6日のカニ漁解禁を迎えると、京都府北部・丹後半島の西端に位置する夕日ヶ浦温泉（浜詰温泉）は、一年で最も活気と美食の熱気に包まれる松葉ガニの最盛期を迎えます。「日本の夕陽百選」に選定された白砂青松の浜詰海岸に沈む黄金の夕日と荒波打ち寄せる日本海の絶景を眺めながら、緑のタグで知られる幻の最高峰「間人ガニ（たいざがに）」や本場丹後松葉ガニの刺し・焼き・茹で・鍋のフルコースを堪能。「美人の湯」と称されるトロリとした弱アルカリ性単純温泉で冷えた身体を芯から温める、初冬の厳選海辺旅館5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "T06:00:00+09:00",
        "dateModified": "T06:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "Croud Travel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "author": {
          "@type": "Organization",
          "name": "Croud Travel 関西名湯・冬の味覚取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-kyoto-tango-yuhigaura-matsuba-crab-stay#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.pages.dev/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "特集一覧",
            "item": "https://croud-travel.pages.dev/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "京都丹後・夕日ヶ浦温泉 日本海夕景と解禁松葉ガニの宿",
            "item": "https://croud-travel.pages.dev/winter-kyoto-tango-yuhigaura-matsuba-crab-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-kyoto-tango-yuhigaura-matsuba-crab-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "夕日ヶ浦温泉の11月・12月の気候や気温、雪の降り始めはいつ頃ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "京都府北部の丹後地方に位置する夕日ヶ浦温泉は、日本海特有の冬の気候となります。11月上旬から中旬は最高気温13〜17℃、最低気温7〜10℃前後で、日中は比較的過ごしやすい日が多いですが、海からの冷たい北風が吹き抜けます。11月下旬になると一気に気温が下がり、朝晩は3〜5℃前後まで冷え込みます。12月に入ると最高気温8〜10℃、朝晩は0〜3℃前後となり、12月中旬から下旬にかけて初雪や降雪が見られます。海辺のため風が強く体感温度がぐっと下がるため、風を通さない厚手のダウンコート、防風マフラー、手袋、保温性インナーの着用が必須です。"
            }
          },
          {
            "@type": "Question",
            "name": "夕日ヶ浦温泉の泉質の特徴と「美人の湯」と呼ばれる理由は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "夕日ヶ浦温泉（浜詰温泉）の泉質は「アルカリ性単純温泉（低張性アルカリ性高温泉）。」。pH値が8.5以上のアルカリ性を示し、無色透明で肌触りが非常に滑らかでトロリとしているのが大きな特徴です。アルカリ性の温泉水には肌表面の古い角質や余分な皮脂をやさしく落とす天然のクレンジング効果があり、入浴直後から肌がつるつる・すべすべになることから「美人の湯」「美肌の湯」として女性客を中心に絶大な支持を集めています。刺激が少なく湯あたりしにくいため、初冬の冷えた体を長湯でじっくり温めるのに最適です。"
            }
          },
          {
            "@type": "Question",
            "name": "11月に解禁される「松葉ガニ」と「間人ガニ」の違いは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「松葉ガニ」とは、山陰・北陸沖の日本海で水揚げされる成長した雄のズワイガニの地方名です。毎年11月6日に一斉にカニ漁が解禁され、3月下旬まで水揚げされます。その中でも「間人ガニ（たいざがに）」は、夕日ヶ浦温泉からほど近い丹後半島の間人港（京丹後市丹後町）に所属するわずか5隻の小型底引き網漁船によって日帰り漁で水揚げされる最高級ブランドガニです。漁場が近く獲れたその日のうちに生きたままセリにかけられるため、鮮度と身の締まり、味噌の濃厚さが格別で、緑色の認定タグが付けられて「幻の蟹」として高値で取引されます。夕日ヶ浦温泉では、間人ガニをはじめ、近隣の津居山港や柴山港、網野の厳選松葉ガニが宿ごとに贅沢に提供されます。"
            }
          },
          {
            "@type": "Question",
            "name": "京都・大阪方面からのアクセス方法と冬道運転の注意点は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "電車を利用する場合、京都駅または新大阪駅からJR特急「はしだて」「こうのとり」で福知山または豊岡へ向かい、京都丹後鉄道に乗り換えて「夕日ヶ浦木津温泉駅」まで約2時間30分〜3時間です。駅からは多くの宿が無料送迎を行っています。車の場合は、京都縦貫自動車道を経由して「京丹後大宮IC」まで直結し、そこから一般道（国道312号・府道）で約30分とアクセスが大幅に向上しました。ただし、12月に入ると山間部（丹波・福知山周辺や丹後大宮付近）で路面凍結や積雪が発生するため、車で訪れる場合は必ずスタッドレスタイヤを装着してください。"
            }
          },
          {
            "@type": "Question",
            "name": "「日本の夕陽百選」に選ばれた夕日ヶ浦の夕日を見るベストな時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "夕日ヶ浦海岸（浜詰海岸）は、約8kmにわたって緩やかな弧を描く白砂青松のロングビーチで、水平線にゆっくりと沈む夕日の美しさは「日本の夕陽百選」にも選定されています。11月・12月の日の入り時刻はおよそ16時40分〜17時00分頃です。日没の約30分前から空が茜色、紫、深い青へとグラデーションを描く「マジックアワー」が始まります。チェックインを16時前までに済ませ、客室のテラスや展望露天風呂、海岸の木製ブランコ「ゆらり」周辺から眺めるのが最もおすすめです。"
            }
          }
        ]
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "夕日ヶ浦温泉　時季を彩る　佳松苑",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29771/29771.jpg",
              rating: 4.39,
              reviews: 1206,
              price: "¥18,240〜",
              access: "京都丹後鉄道・夕日ヶ浦木津温泉駅から徒歩で約15分、送迎バスで約3分／京都縦貫道・京丹後大宮IC下車約40分※カニバス有",
              special: "全室海側の客室で日本海を一望◇絶景夕日に時季を彩る旬の美味と温泉を存分にお楽しみください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29771%2F29771.html",
              story: "夕日ヶ浦の地に創業して以来、丹後の温かなもてなしと四季折々の旬の味覚を届け続ける名門旅館「夕日ヶ浦温泉 時季を彩る 佳松苑（かしょうえん）。」。宿の最上階に位置する展望露天風呂からは、初冬の夕暮れ時に空と海が茜色から深い藍色へと移ろう壮大なマジックアワーを眼下に一望できます。11月の解禁とともに始まるカニ料理は、厳選された活松葉ガニを生簀から揚げて調理する鮮度抜群のフルコース。花咲くカニ刺しの甘み、香ばしい甲羅味噌焼き、出汁が染み渡るカニすき鍋まで、冬の丹後を代表する王道の味覚を心ゆくまで堪能できます。",
              roomTip: "最上階展望フロアまたは温泉露天風呂付き客室。初冬の海風を感じながら、刻一刻と表情を変える日本海の波音と夕焼け空に包まれる寛ぎ。",
              gourmetTip: "「特選活松葉ガニづくし会席」。甘み濃厚なカニ刺し、炭火でふっくら焼き上げる焼きガニ、濃厚な蟹味噌甲羅焼き、締めの極上カニ雑炊まで贅を尽くした逸品。",
              highlights: [
                "夕日ヶ浦を代表する名門旅館＆最上階展望露天風呂から眺める黄金のマジックアワー",
                "生簀から揚げる活松葉ガニのフルコース（カニ刺し・炭火焼き・カニすき鍋・雑炊）",
                "京都丹後鉄道夕日ヶ浦木津温泉駅からの無料送迎完備＆充実の館内施設とおもてなし"
              ]
            },
            {
              id: 2,
              name: "夕日ヶ浦温泉　海花亭　花御前",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/37429/37429.jpg",
              rating: 4.46,
              reviews: 339,
              price: "¥25,900〜",
              access: "京都丹後鉄道　夕日ヶ浦木津温泉駅より車で５分",
              special: "【露天風呂付客室×個室食】京風数奇屋の優美な佇まい、都会の謙遜を忘れ露天風呂付客室で過ごす大人の休日",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37429%2F37429.html",
              story: "美しい日本庭園を囲むように数寄屋造りの雅な回廊が広がる大人の癒やし宿「夕日ヶ浦温泉 海花亭 花御前（かいかてい はなごぜん）。」。館内随所に配された季節の生け花や和のしつらえが、旅人の心を優しく解きほぐします。大浴場「滝林の湯」や庭園露天風呂には、弱アルカリ性の柔らかな美肌源泉が満ち、入浴後は肌が吸い付くようにしっとりと潤います。幻のブランド蟹として全国に名を馳せる近隣・間人港直送の「間人ガニ」を味わう特別プランも用意され、丹後屈指の美食ステイを約束してくれます。",
              roomTip: "庭園を望む離れ風和洋室または源泉露天風呂付き客室。木の温もりあふれる畳敷きの空間で、初冬の静寂と庭園美を独占できます。",
              gourmetTip: "「最高級タグ付き松葉ガニ＆但馬牛贅沢会席」。熟練の料理人が焼き加減を見極める焼きガニと、芳醇な肉汁あふれる京都丹後但馬牛ステーキの極上マリアージュ。",
              highlights: [
                "美しい日本庭園を囲む数寄屋建築の雅な空間＆幻の間人ガニや丹後但馬牛の極上会席",
                "弱アルカリ性の自家源泉美肌の湯＆四季折々の生け花が彩る優美な館内での静寂ステイ",
                "落ち着いた大人の旅や記念日旅行に最適な離れ客室とプライベートな露天風呂"
              ]
            },
            {
              id: 3,
              name: "夕日ヶ浦温泉　旅亭　櫂‐ＫＡＩ‐",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/151160/151160.jpg",
              rating: 4.82,
              reviews: 287,
              price: "¥20,000〜",
              access: "京都丹後鉄道・夕日ヶ浦木津温泉駅から徒歩で約20分、送迎バスで約5分／京都縦貫道・京丹後大宮IC下車約40分",
              special: "記憶に残る一皿と出会う旅。旅籠の趣を宿す木造建築と仄かな灯り、壮大な日本海が迎える「旅先の料亭」へ。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F151160%2F151160.html",
              story: "海を見下ろす高台に佇み、落ち着いた大人のための上質な休息を提案する隠れ家宿「夕日ヶ浦温泉 旅亭 櫂‐ＫＡＩ‐（かい）。」。全室がオーシャンビューで設計され、楽天トラベルアワードでも極めて高い評価（4.8点台）を誇ります。宿の白眉は、水平線と湯船が一体化するかのようなインフィニティ展望露天風呂。夕暮れには夕日が海面を黄金に染め上げ、夜には満天の星と漁火が水面に揺らめきます。オープンキッチンから一品ずつ最上のタイミングで運ばれるカニ創作料理は、目と舌を魅了する芸術的な仕上がりです。",
              roomTip: "展望風呂付きオーシャンフロント客室。窓一面に広がる日本海のパノラマと、シモンズ製上質ベッドで約束される至極のプライベートステイ。",
              gourmetTip: "「出来立てを味わう櫂流・活蟹創作会席」。生簀から揚げる新鮮なタグ付き松葉ガニを、素材の持ち味を極限まで引き出したモダンな創作仕立てで堪能。",
              highlights: [
                "楽天評価4.82を誇る大人のための隠れ宿＆海と空が溶け合うインフィニティ展望露天風呂",
                "オープンキッチンから出来立てを一品ずつ提供する活蟹創作会席と厳選丹後地酒",
                "シモンズ製ベッドを備えた全室テラス付き和モダン空間で過ごす上質な非日常"
              ]
            },
            {
              id: 4,
              name: "夕日ヶ浦温泉　静花扇",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/79373/79373.jpg",
              rating: 4.53,
              reviews: 396,
              price: "¥14,850〜",
              access: "京都丹後鉄道　夕日ヶ浦木津温泉駅より送迎（車で約5分）、京都縦貫道/京丹後大宮IC下車約40分",
              special: "目の前が海！小走り3秒で砂浜へ！海岸線に沈む雄大な夕日を見て、温泉にお食事におもてなし致します。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79373%2F79373.html",
              story: "浜詰海岸の波打ち際すぐ目の前に建ち、全客室および大浴場・露天風呂のすべてが日本海に面した絶景フロントシートを誇る「夕日ヶ浦温泉 静花扇（しずかおうぎ）」。寄せては返す初冬の日本海の波音をBGMに、刻一刻と赤く染まりゆく夕日を眺めながらの湯浴みは、言葉を失うほどの感動をもたらします。「美人の湯」として知られる透明な天然温泉は、湯冷めしにくく女性にも大好評。料理は仲買人の確かな目利きで厳選した本松葉ガニを贅沢に使用し、素材そのままの力強い甘みと旨味を引き出しています。",
              roomTip: "波打ち際を望む展望温泉風呂付き和洋室。水平線に沈む夕日と朝の爽やかな海原を、客室にいながらダイナミックに楽しめます。",
              gourmetTip: "「本松葉ガニ炭火焼き＆カニすき会席」。香ばしい香りが立ち上る炭火焼きガニと、濃厚な旨味が溶け出した特製出汁のカニすき鍋、甲羅酒が格別。",
              highlights: [
                "波打ち際の最前列に佇む全室オーシャンビュー＆波音と夕日を独占する展望温泉風呂",
                "仲買人の確かな目利きによる厳選松葉ガニ炭火焼き＆とろけるカニ味噌の甲羅焼き",
                "水平線に沈む夕陽百選の絶景を目の前に眺める唯一無二のオーシャンフロントロケーション"
              ]
            },
            {
              id: 5,
              name: "夕日ヶ浦温泉　海舟＜京都府＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67971/67971.jpg",
              rating: 4.53,
              reviews: 684,
              price: "¥11,980〜",
              access: "京都丹後鉄道　夕日ヶ浦木津温泉駅より無料送迎あり（要予約）、京都縦貫道/京丹後大宮IC下車約40分",
              special: "絶景プライベート温泉が大人気！　貸切展望露天風呂をリニューアルオープン！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67971%2F67971.html",
              story: "目の前に白砂の海岸と広大な日本海が広がり、網元ならではの圧倒的な魚介の鮮度と豪快なボリュームで旅人を魅了する海辺の宿「夕日ヶ浦温泉 海舟＜京都府＞」。リーズナブルな価格設定でありながら、冬のシーズンには身がぎっしりと詰まった茹でガニ一杯姿盛りや、舟盛りの新鮮な地魚、熱々の焼きガニがずらりと並ぶ圧巻のカニ尽くし会席を提供。展望大浴場「海の湯」からも日本海の雄大な景色が一望でき、冬の丹後を気兼ねなく満腹・満喫したい家族連れやグループ旅行に絶大な人気を博しています。",
              roomTip: "日本海を一望する海側和室。どこか懐かしい潮風の香りと波の音に包まれ、冬の日本海の旅情を心ゆくまで味わうことができます。",
              gourmetTip: "「名物・網元仕込みの豪快カニフルコース」。茹でガニ姿盛り、カニ刺し、陶板焼きガニ、カニ天ぷら、カニ雑炊と、カニの旨味を余すところなく味わい尽くす大満足プラン。",
              highlights: [
                "網元直営ならではの抜群の鮮度と圧倒的ボリューム＆身の詰まった茹でガニ姿盛り",
                "高コストパフォーマンスで味わう豪快カニ尽くし会席＆日本海を望む広々とした展望大浴場",
                "家族連れやグループ旅行にも愛されるアットホームな接客と心温まるおもてなし"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <header className="relative w-full h-[360px] sm:h-[480px] flex items-end justify-center bg-slate-900 text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
          alt="冬の夕日ヶ浦海岸と日本海の夕焼け"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/20 backdrop-blur-md border border-orange-400/30 text-orange-300 text-xs sm:text-sm font-semibold">
            <Snowflake className="w-4 h-4" />
            11月・12月 冬の極上名湯特集｜京都・丹後夕日ヶ浦温泉
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月京都丹後・夕日ヶ浦温泉】<br className="hidden sm:inline" />
            日本海夕景と11月解禁松葉ガニ・幻の間人ガニ＆美人の湯の宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            11月6日のカニ漁解禁で活気づく冬の丹後海岸。日本の夕陽百選に輝く雄大な水平線を望み、極上タグ付き松葉ガニととろり肌を潤す美肌湯に酔いしれる至高の冬旅。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* Section 1: Seasonal Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Sunset & Winter Matsuba Crab Season</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                黄金の夕日が染める日本海と、11月解禁を告げる本場松葉ガニの饗宴
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              京都府の北端、日本海に突き出す丹後半島の西側に広がる夕日ヶ浦温泉（浜詰海岸）。「常世（とこよ）の浜」とも呼ばれる約8kmの白砂青松のロングビーチは、夕暮れ時になると空と海が燃えるような朱色と茜色に染まり、水平線へと太陽がゆっくりと沈んでいく「日本の夕陽百選」屈指の名所です。11月から12月にかけては、澄み切った初冬の冷気によって空気の透明度が増し、夕焼けから夜空へと移り変わる奇跡のマジックアワーが一層鮮明に浮かび上がります。
            </p>
            <p>
              そして何よりも、11月6日のカニ漁解禁を迎えると、夕日ヶ浦は「冬のカニ旅の聖地」へと変貌を遂げます。近隣の間人港（たいざこう）に水揚げされる緑のタグ付き「間人ガニ」は、小型船による日帰り漁が生む圧倒的な鮮度と極上の甘みから「幻のカニ」と称され、全国の美食家がこぞって訪れます。さらに網野港や近隣の津居山港から直送される厳選松葉ガニが各旅館の生簀へと運ばれ、宿の板前が目の前で捌くカニ刺し、炭火でふっくらと焼き上げる焼きガニ、濃厚なカニ味噌甲羅焼きなど、言葉を失う贅沢なカニ尽くし会席が繰り広げられます。
            </p>
            <p>
              波打ち際に湧く温泉は、肌をすべすべに整えるアルカリ性単純温泉。「美人の湯」として女性にも愛され、冷たい潮風で冷えた身体を芯までじんわりと温めてくれます。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Sun className="w-5 h-5 text-orange-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">日本の夕陽百選の絶景</div>
              <div className="text-xs text-slate-600">浜詰海岸の水平線に沈む初冬の夕日。茜色の空と海が織りなすパノラマ。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Utensils className="w-5 h-5 text-orange-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">11月解禁 丹後松葉ガニ</div>
              <div className="text-xs text-slate-600">幻の間人ガニやタグ付き活松葉ガニ。刺し・焼き・茹で・鍋の贅沢極み。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Waves className="w-5 h-5 text-orange-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">とろり潤う美人の湯</div>
              <div className="text-xs text-slate-600">pH8.5超の弱アルカリ性単純温泉。古い角質を落としすべすべ肌へと導く。</div>
            </div>
          </div>
        </section>

        {/* Section 2: Onsen Qualities */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Alkaline Beauty Hot Springs</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                肌が喜ぶ天然の化粧水｜夕日ヶ浦「美人の湯」の泉質メカニズム
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              夕日ヶ浦温泉の泉質は、地下約1,000mから湧き出る「低張性アルカリ性高温泉（単純温泉）」。源泉温度は約45〜50℃、pH値は8.5以上を誇ります。
            </p>
            <p>
              アルカリ性の湯は、石鹸と同じように肌表面の余分な皮脂や古い角質を優しく乳化して洗い流す「天然のクレンジング効果」を持ちます。湯船に浸かると肌がとろりと滑らかな感触に包まれ、湯上がりには一皮むけたような透明感とすべすべの素肌を実感できます。
            </p>
            <p>
              さらに、刺激が少ない単純温泉のため、敏感肌の方や長湯を楽しみたい方、小さなお子様や高齢の方でも安心して入浴できます。日本海の荒波が運ぶ豊かなミネラルとマイナスイオンを浴びながらの露天風呂は、日頃のストレスや疲労を根本から洗い流してくれます。
            </p>
          </div>
        </section>

        {/* Section 3: Winter Gourmet */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">King of Winter Delicacies</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                冬の味覚の王者・松葉ガニと丹後但馬牛｜本場ならではの贅沢フルコース
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              11月6日のカニ漁解禁を迎えると、丹後半島の宿はカニ一色に染まります。夕日ヶ浦の料理人が腕を振るうカニ会席は、カニの魅力を知り尽くした産地ならではの贅沢さに満ちています。
            </p>
            <p>
              まずは、冷水にさらして花のようにふわりと開いた「カニ刺し」。口に運べば繊維がほどけ、濃厚な甘みが舌の上でとろけます。続いて備長炭で焼き上げる「炭火焼きガニ」は、焼ける甲羅の芳ばしい香りと凝縮された身の旨味が格別。甲羅にたっぷりと詰まった「カニ味噌」は、炭火でグツグツと温めてスプーンですくい、残った味噌に丹後の辛口地酒を注いで楽しむ「甲羅酒」が呑兵衛にはたまりません。
            </p>
            <p>
              さらに、身の詰まった茹でガニ、昆布出汁に野菜とカニの旨味が溶け出す「カニすき鍋」、そしてすべての旨味を吸い込んだ黄金の「カニ雑炊」。宿によってはブランド黒毛和牛「京都丹後但馬牛」の陶板焼きやすき焼きがセットになり、日本海と山の幸の極上コラボレーションが堪能できます。
            </p>
          </div>
        </section>

        {/* Section 3.5: Model Course & Sightseeing */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Tango Winter Scenic Course & Heritage</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の丹後・夕日ヶ浦散策モデルコース｜木製ブランコゆらりと久美浜湾の静寂
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              夕日ヶ浦温泉の冬旅を最高に彩るなら、日没前の海岸散策と丹後半島の歴史巡りを組み合わせるのがおすすめです。午後3時過ぎに夕日ヶ浦へ到着したら、まずは浜詰海岸の砂浜へ。名物の木製ビーチブランコ「ゆらり」に腰掛けて、初冬の澄んだ潮風を受けながら水平線に傾く夕日を待つ時間は、まさに旅のハイライトです。16時40分頃、海と空が燃えるようなグラデーションを描く日没の瞬間は、思わず息をのむ美しさです。
            </p>
            <p>
              翌朝は車で約15分の隣町・久美浜湾へ。波穏やかな内海にカキ棚が浮かぶ風情ある景観を眺めながら、国の登録有形文化財「豪商 稲葉本家」を訪ねましょう。織田信長ゆかりの名家が遺した重厚な数寄屋建築と日本庭園を見学し、名物の「ぼたもち」で一服。
            </p>
            <p>
              さらに足を延ばして、日本海の断崖絶壁に建つ「経ヶ岬灯台」や、舟屋の町並みで名高い「伊根の舟屋」へとドライブ。初冬の日本海の雄大な荒波と歴史情緒を満喫してから帰路に就くのが、丹後を満喫する理想のドライブコースです。
            </p>
          </div>
        </section>

        {/* Section 4: 5 Selected Inns */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-orange-700 uppercase tracking-widest">Featured Sunset & Crab Ryokan</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              日本海の夕景と本場カニ尽くし｜夕日ヶ浦温泉の厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              すべて楽天トラベルで高評価を獲得し、カニの仕入れと展望露天風呂に格別のこだわりを持つ厳選宿。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-5/12 relative h-64 md:h-auto min-h-[260px] bg-slate-100 flex-shrink-0">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                    <span className="text-orange-400 font-extrabold">#{h.id}</span>
                    <span>夕日ヶ浦の名宿</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    目安料金: {h.price}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {h.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-amber-50 text-amber-900 px-2.5 py-1 rounded-full text-xs font-semibold border border-amber-200/60">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{h.rating}</span>
                        <span className="text-slate-500 font-normal">({h.reviews}件)</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-2xl bg-orange-50/60 border border-orange-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-orange-900 flex items-center gap-1.5">
                          <Landmark className="w-3.5 h-3.5 text-orange-700" />
                          客室・滞在のこだわり
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {h.roomTip}
                        </p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-amber-900 flex items-center gap-1.5">
                          <Utensils className="w-3.5 h-3.5 text-amber-700" />
                          旬の極上グルメ
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {h.gourmetTip}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-orange-700" />
                        この宿のおすすめポイント
                      </div>
                      <ul className="space-y-1.5">
                        {h.highlights.map((item, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-orange-700 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-[11px] text-slate-500">
                      <span>交通: {h.access}</span>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-sm hover:shadow transition group flex-shrink-0"
                    >
                      <span>楽天トラベルでプランを見る</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Travel Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Travel Planning & Climate</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の夕日ヶ浦冬旅の気温・服装と快適アクセスのポイント
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-orange-800" />
                日本海の強い潮風と防寒対策
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                初冬の日本海沿岸は北西の季節風が強く吹きつけます。気温表示が10℃前後であっても体感温度はぐっと低く感じられます。夕日の時間帯の海岸散策や露天風呂での湯冷めを防ぐため、防風仕様の厚手コートやダウン、マフラー、ニット帽をご用意ください。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-orange-800" />
                京都縦貫道での快適アクセスと冬用タイヤ
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                車の場合は京都縦貫自動車道・京丹後大宮ICより約30分で到着します。12月に入ると山間部や内陸部で路面凍結や積雪が発生するため、冬用スタッドレスタイヤの装着が必須です。電車をご利用の場合は京都丹後鉄道・夕日ヶ浦木津温泉駅までの送迎サービスを事前に宿へ予約しておくと安心です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-orange-100">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                京都丹後夕日ヶ浦温泉冬旅のよくある質問（FAQ）
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-orange-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Internal Links */}
        <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Related Winter Features & Hot Springs</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい関西・山陰の冬名湯＆カニ・フグ美食特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の松葉ガニ解禁、日本海冬の味覚、歴史ある名湯をめぐる人気の厳選特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-kyoto-amanohashidate-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-orange-300 font-semibold block mb-1">京都・天橋立温泉</span>
              <h3 className="text-sm font-bold group-hover:text-orange-200 transition">日本三景雪景色と天橋立松葉ガニ・宮津地魚会席を味わう宿</h3>
            </Link>
            <Link 
              href="/winter-hyogo-kinosaki-onsen-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-orange-300 font-semibold block mb-1">兵庫・城崎温泉</span>
              <h3 className="text-sm font-bold group-hover:text-orange-200 transition">七つの外湯めぐりと津居山ガニ・但馬牛ステーキを満喫する名宿</h3>
            </Link>
            <Link 
              href="/winter-hyogo-kasumi-onsen-shibayama-crab-matsuba-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-orange-300 font-semibold block mb-1">兵庫・香住温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-orange-200 transition">最高峰ブランド柴山ガニと香住松葉ガニ・但馬牛ステーキの宿</h3>
            </Link>
            <Link 
              href="/winter-tottori-kaike-onsen-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-orange-300 font-semibold block mb-1">鳥取・皆生温泉</span>
              <h3 className="text-sm font-bold group-hover:text-orange-200 transition">美保湾境港直送松葉ガニと伯耆富士大山雪景色・塩化物泉の宿</h3>
            </Link>
            <Link 
              href="/winter-fukui-mikuni-onsen-echizen-crab-tojinbo-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-orange-300 font-semibold block mb-1">福井・三国温泉</span>
              <h3 className="text-sm font-bold group-hover:text-orange-200 transition">東尋坊の冬荒波と皇室献上越前ガニ・日本海夕陽パノラマの宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-orange-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-orange-200 transition">全国の厳選温泉・旬旅特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-kyoto-tango-yuhigaura-matsuba-crab-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
