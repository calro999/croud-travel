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
  title: '定山渓温泉で過ごす冬の旅（11・12月）！北海道冬の三大蟹会席！名宿5選',
  description: '修験僧・美泉定山がアイヌの人々に導かれ拓いた札幌の奥座敷「定山渓温泉」。11月下旬の初雪から12月の白銀雪景色へと移ろう豊平川渓谷。冷え切った身体の芯から温もる純生の塩化物泉と、道産和牛＆北海道冬の三大蟹（毛ガニ・ズワイ・タラバ）を堪能する名宿ガイド。',
  keywords: '定山渓温泉 宿泊 11月 12月, 定山渓温泉 三大蟹 道産和牛, 札幌 奥座敷 雪見露天風呂, 定山渓第一寶亭留 翠山亭, ぬくもりの宿 ふる川, 定山渓万世閣ホテルミリオーネ, 厨翠山, 北海道 冬 温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-hokkaido-jozankei-onsen-snow-keikoku-stay/",
  },
  openGraph: {
    title: '定山渓温泉で過ごす冬の旅（11・12月）！北海道冬の三大蟹会席！名宿5選',
    description: '修験僧・美泉定山がアイヌの人々に導かれ拓いた札幌の奥座敷「定山渓温泉」。11月下旬の初雪から12月の白銀雪景色へと移ろう豊平川渓谷。冷え切った身体の芯から温もる純生の塩化物泉と、道産和牛＆北海道冬の三大蟹（毛ガニ・ズワイ・タラバ）を堪能する名宿ガイド。',
    url: 'https://croud-travel.pages.dev/winter-hokkaido-jozankei-onsen-snow-keikoku-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月定山渓温泉の雪渓谷美と名湯】札幌の奥座敷・ナトリウム塩化物泉と道産和牛＆北海道冬の三大蟹会席の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "定山渓温泉の雪渓谷美と名湯で過ごす冬の旅（11・12月）！札幌の奥座敷・ナトリウム塩化物泉と道産和牛＆北海道冬の三大蟹会席の宿5選",
    description: "修験僧・美泉定山がアイヌの人々に導かれ拓いた札幌の奥座敷「定山渓温泉」。11月下旬の初雪から12月の白銀雪景色へと移ろう豊平川渓谷。冷え切った身体の芯から温もる純生の塩化物泉と、道産和牛＆北海道冬の三大蟹（毛ガニ・ズワイ・タラバ）を堪能する名宿ガイド。",
  }
};

const faqList = [
  {
    "q": "定山渓温泉の11月・12月の雪の量や気温は？服装の注意点は？",
    "a": "定山渓温泉は山間に位置するため、札幌市街地よりも気温が2〜3℃低くなります。例年11月上旬から中旬に初雪が観測され、11月下旬からは本格的な雪景色となります。12月に入ると完全な根雪（冬の間溶けずに残る雪）となり、平均気温は氷点下（最高でも0℃〜2℃、夜間はマイナス5℃以下）に達します。観光の際は、厚手のダウンコートや防風インナー、手袋、マフラーに加え、雪道や凍結路面で滑らないスノーブーツや防滑ソールの靴が必須です。"
  },
  {
    "q": "札幌駅や新千歳空港からの直行アクセス方法は？",
    "a": "JR札幌駅バスターミナル（または駅前乗り場）から定山渓温泉直行バス「かっぱライナー号」（じょうてつバス）が毎日運行しており、約60分で到着します（予約制）。また普通路線バス「定山渓線」も約15分間隔で運行しています。新千歳空港からも定山渓温泉行きの直行バス「湯ったりライナー号」が運行しており、乗り換えなしで約100分で到着するため大変便利です。レンタカーの場合は冬期スタッドレスタイヤが標準装備されていますが、雪道運転に慣れていない方は直行バスの利用を強くおすすめします。"
  },
  {
    "q": "定山渓温泉の泉質『ナトリウム塩化物泉』の効能とは？",
    "a": "定山渓温泉の主たる泉質は『ナトリウム―塩化物泉』です。無色透明でわずかに塩分を含んでおり、入浴すると塩分が肌の表面に薄い皮膜を形成します。この皮膜が汗の蒸発を防ぎ、保温・保湿効果を高めるため、湯上がり後も湯冷めしにくく『熱の湯』とも呼ばれます。神経痛や冷え性の改善、疲労回復に優れた効能があり、極寒の北海道の冬に最もふさわしい名湯です。"
  },
  {
    "q": "北海道の冬の味覚『三大蟹』とは何ですか？旬の時期は？",
    "a": "北海道を代表する三大蟹とは『毛ガニ』『ズワイガニ』『タラバガニ』を指します。冬のオホーツク海や噴火湾で獲れる毛ガニは、甘みの強い繊細な身と濃厚なカニ味噌が詰まった最高級品。ズワイガニは上品で瑞々しい甘みと長い脚肉が特徴で、カニすきや焼きガニに最適。そしてタラバガニは太く弾力のある豪快な脚肉の食べ応えが魅力です。11月・12月はこれら三大蟹が勢揃いし、定山渓温泉の旅館で贅沢な食べ比べを楽しむことができます。"
  }
];

export default function JozankeiWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-hokkaido-jozankei-onsen-snow-keikoku-stay#article",
        "headline": "【11・12月定山渓温泉の雪渓谷美と名湯】札幌の奥座敷・ナトリウム塩化物泉と道産和牛＆北海道冬の三大蟹会席の宿5選",
        "description": "修験僧・美泉定山がアイヌの人々に導かれ拓いた札幌の奥座敷「定山渓温泉」。11月下旬の初雪から12月の白銀雪景色へと移ろう豊平川渓谷。冷え切った身体の芯から温もる純生の塩化物泉と、道産和牛＆北海道冬の三大蟹（毛ガニ・ズワイ・タラバ）を堪能する名宿ガイド。",
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
          "@id": "https://croud-travel.pages.dev/winter-hokkaido-jozankei-onsen-snow-keikoku-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-hokkaido-jozankei-onsen-snow-keikoku-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "定山渓温泉の11月・12月の雪の量や気温は？服装の注意点は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "定山渓温泉は山間に位置するため、札幌市街地よりも気温が2〜3℃低くなります。例年11月上旬から中旬に初雪が観測され、11月下旬からは本格的な雪景色となります。12月に入ると完全な根雪（冬の間溶けずに残る雪）となり、平均気温は氷点下（最高でも0℃〜2℃、夜間はマイナス5℃以下）に達します。観光の際は、厚手のダウンコートや防風インナー、手袋、マフラーに加え、雪道や凍結路面で滑らないスノーブーツや防滑ソールの靴が必須です。"
            }
          },
          {
            "@type": "Question",
            "name": "札幌駅や新千歳空港からの直行アクセス方法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "JR札幌駅バスターミナル（または駅前乗り場）から定山渓温泉直行バス「かっぱライナー号」（じょうてつバス）が毎日運行しており、約60分で到着します（予約制）。また普通路線バス「定山渓線」も約15分間隔で運行しています。新千歳空港からも定山渓温泉行きの直行バス「湯ったりライナー号」が運行しており、乗り換えなしで約100分で到着するため大変便利です。レンタカーの場合は冬期スタッドレスタイヤが標準装備されていますが、雪道運転に慣れていない方は直行バスの利用を強くおすすめします。"
            }
          },
          {
            "@type": "Question",
            "name": "定山渓温泉の泉質『ナトリウム塩化物泉』の効能とは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "定山渓温泉の主たる泉質は『ナトリウム―塩化物泉』です。無色透明でわずかに塩分を含んでおり、入浴すると塩分が肌の表面に薄い皮膜を形成します。この皮膜が汗の蒸発を防ぎ、保温・保湿効果を高めるため、湯上がり後も湯冷めしにくく『熱の湯』とも呼ばれます。神経痛や冷え性の改善、疲労回復に優れた効能があり、極寒の北海道の冬に最もふさわしい名湯です。"
            }
          },
          {
            "@type": "Question",
            "name": "北海道の冬の味覚『三大蟹』とは何ですか？旬の時期は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "北海道を代表する三大蟹とは『毛ガニ』『ズワイガニ』『タラバガニ』を指します。冬のオホーツク海や噴火湾で獲れる毛ガニは、甘みの強い繊細な身と濃厚なカニ味噌が詰まった最高級品。ズワイガニは上品で瑞々しい甘みと長い脚肉が特徴で、カニすきや焼きガニに最適。そしてタラバガニは太く弾力のある豪快な脚肉の食べ応えが魅力です。11月・12月はこれら三大蟹が勢揃いし、定山渓温泉の旅館で贅沢な食べ比べを楽しむことができます。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-hokkaido-jozankei-onsen-snow-keikoku-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "定山渓温泉　定山渓第一寶亭留　翠山亭",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F875%2F875.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "定山渓温泉　ぬくもりの宿　ふる川",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1037%2F1037.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "定山渓万世閣ホテルミリオーネ",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20619%2F20619.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "厨翠山",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161193%2F161193.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "エグゼクティブスイート翠嶺（定山渓ビューホテル内）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F192780%2F192780.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "定山渓温泉　定山渓第一寶亭留　翠山亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/875/875.jpg",
              rating: 4.46,
              reviews: 1503,
              price: "¥16,286〜",
              access: "札幌より無料送迎バス運行（要予約）／ＪＲ札幌駅より車で60分／新千歳空港より車で約2時間",
              special: "全室温泉付客室／貸切サウナ誕生／ラウンジ＆ロビーリニューアル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F875%2F875.html",
              story: "創業百余年の歴史を誇る第一寶亭留グループの旗艦宿として、定山渓随一の格式と上質な和の安らぎを提供する「定山渓第一寶亭留 翠山亭」。自家源泉から引く濃厚なナトリウム塩化物泉は、敷地内に湧き出る3本の源泉を贅沢にブレンドした純度100%の名湯です。初冬の冷気に包まれた大浴場「森乃湯」や庭園露天風呂では、白樺やエゾ松が雪化粧をまとった幻想的な雪景色を眺めながら極上の湯浴みが愉しめます。館内には落ち着いたバーや茶室、選書にこだわったライブラリーも完備され、大人が心から寛げる静謐な時間が流れています。",
              roomTip: "客室専用の源泉かけ流し展望風呂を備えた特別室や数寄屋造りのスイートルーム。窓外に広がる豊平川渓谷の白銀の森を独り占めしながら、いつでも好きな時に名湯を満喫できます。",
              gourmetTip: "北海道各地から厳選された旬の食材を匠の技で仕立てる本格和食会席。冬に身がぎっしり詰まるオホーツク海産毛ガニの姿盛りや、極上霜降りの道産黒毛和牛サーロインの炭火焼き、噴火湾産ホタテと北海真鱈の白子小鍋など、贅を尽くした料理が並びます。",
              highlights: [
                "第一寶亭留グループの最高峰本館＆3本の自家源泉をブレンドした純度100%の名湯「森乃湯」",
                "白樺やエゾ松が雪化粧をまとう庭園露天風呂＆大人のための静謐なライブラリーとバー",
                "オホーツク海産毛ガニ姿盛り＆道産黒毛和牛サーロイン炭火焼き・噴火湾産ホタテ小鍋"
              ]
            },
            {
              id: 2,
              name: "定山渓温泉　ぬくもりの宿　ふる川",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1037/1037.jpg",
              rating: 4.63,
              reviews: 1403,
              price: "¥16,800〜",
              access: "じょうてつバス定山渓線定山渓湯の町下車すぐ。無料送迎バス毎日１便運行／大通西１丁目テレビ塔北向かい出発。事前予約制。",
              special: "道内では珍しい民芸調の宿屋、館内には囲炉裏があり、田舎情緒たっぷり。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1037%2F1037.html",
              story: "民芸調の温もりあふれる木造建築と、囲炉裏の炭火が温かく旅人を迎え入れてくれる評判の宿「ぬくもりの宿 ふる川」。宿の至る所に飾られた手作りの和小物や相田みつをの書画が、どこか懐かしい郷愁を誘います。名物の大浴場は、石造りの落ち着いた内湯と豊平川のせせらぎを聞く露天風呂に加え、北海道産の薬草や温泉蒸気を利用した「温泉蒸し風呂」が人気。11月下旬から12月にかけては、雪が舞い散る露天風呂の湯船から雪見酒を楽しむこともでき、手作りの温かなもてなしに心までほどけていきます。",
              roomTip: "木の温もりを感じる和モダン客室や、愛犬と一緒に泊まれる専用客室。畳敷きの落ち着いた空間にモダンなベッドが配置され、初冬の渓谷美を眺めながらゆったりと読書を楽しめます。",
              gourmetTip: "山里の温もりを感じる創作会席。料理人が目の前の炭火でじっくりと焼き上げる道産牛や旬魚の串焼き、名物の手打ち蕎麦、冬限定の濃厚カニ鍋や根菜の炊き合わせなど、素朴ながら滋味あふれる料理が心に染み渡ります。",
              highlights: [
                "囲炉裏の炭火と民芸調の温もりあふれる湯宿＆豊平川渓流露天風呂と温泉蒸気サウナ",
                "雪が舞う露天風呂で楽しむ風流な雪見酒＆手作りの和小物に囲まれた癒やしの滞在",
                "囲炉裏で焼き上げる道産牛串焼きと地魚＆冬限定の濃厚カニ鍋と手打ち蕎麦の創作膳"
              ]
            },
            {
              id: 3,
              name: "定山渓万世閣ホテルミリオーネ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/20619/20619.jpg",
              rating: 4.13,
              reviews: 2503,
              price: "¥9,263〜",
              access: "地下鉄真駒内駅→じょうてつバス「定山渓車庫行き」定山渓停留所下車／札幌市内～国道230号線南下で約50分",
              special: "札幌の奥座敷でのんびり過ごす。美食と美湯で幸せな時間を。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20619%2F20619.html",
              story: "定山渓温泉街の中心にそびえ立ち、シルクロードの異国情緒と和のくつろぎが融合した大型リゾート旅館「定山渓万世閣ホテルミリオーネ」。千平米を誇る広々とした大浴場には、多種多様な内湯と露天風呂、そして近年大ブームの本格的なオートロウリュ付きドライサウナが完備されています。露天風呂からは初冬の山並みと澄んだ星空を一望でき、冷涼な外気浴と名湯の温冷交代浴で究極の「ととのい」を体験。館内のベーカリーカフェでは焼きたてのパンの香りが漂い、幅広い世代に愛される宿です。",
              roomTip: "高層階の展望客室やモダンリニューアルされた和洋室。窓からは初冬の定山渓温泉街の湯煙と、雪をかぶった山々の雄大なパノラマを一望できます。",
              gourmetTip: "オープンキッチンでライブ感あふれるディナービュッフェ。職人がその場で握る新鮮な北海道産寿司、焼き立ての道産牛ステーキ、アツアツの揚げたて天ぷら、そして冬の味覚である紅ズワイガニの食べ放題など、北海道の美味が目白押しです。",
              highlights: [
                "千平米の巨大大浴場とセルフロウリュサウナ＆雪見露天風呂での本格外気浴ととのい",
                "焼きたてパンの香るベーカリーカフェ＆定山渓温泉街の中心に位置する抜群の好立地",
                "豪華ビュッフェで味わう紅ズワイガニ食べ放題＆握りたて北海道寿司とジューシー牛ステーキ"
              ]
            },
            {
              id: 4,
              name: "厨翠山",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/161193/161193.jpg",
              rating: 4.46,
              reviews: 109,
              price: "¥18,480〜",
              access: "札幌より無料送迎バス運行（要予約）／JR札幌駅より車で60分／新千歳空港より車で約2時間",
              special: "当館へは、少しお腹をすかせてお越しくださいませ。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161193%2F161193.html",
              story: "「食」を旅の主役に据え、料理人が客人の目の前で一皿一皿の物語を紡ぎ出す全室スイートの美食隠れ宿「厨翠山（くりや すいざん）」。客室はわずか十数室のみに限定され、静寂に満ちた大人のための特別な空間が保たれています。チェックインからチェックアウトまで、館内のドリンクやフィンガーフードが自由に楽しめるオールインクルーシブスタイル。初冬の凛とした森に囲まれ、名湯・定山渓温泉の滑らかな泉質に肌を浸した後は、北海道の冬の恵みを極限まで昇華させた感動のディナーが待っています。",
              roomTip: "洗練された北欧と和の美が融合した全室スイート。大きなガラス窓の向こうには初冬の雪景色が広がり、ミニバーの銘酒を傾けながら極上の静寂を堪能できます。",
              gourmetTip: "厨房カウンターで料理人と対話しながら味わう唯一無二の創作ディナー。冬のオホーツク海産毛ガニを再構築した前菜、最高峰白老牛のロースト、冬トリュフと道産百合根のポタージュなど、五感を揺さぶる至高のキュイジーヌ。",
              highlights: [
                "料理人が客人の目の前で創り出す美食劇場＆全室スイート・ドリンク無料のオールインクルーシブ",
                "わずか十数室の大人の隠れ家＆初冬の静まり返った原生林に抱かれるプライベートステイ",
                "冬の毛ガニ・極上白老牛ロースト・冬トリュフを散りばめた至高のキュイジーヌディナー"
              ]
            },
            {
              id: 5,
              name: "エグゼクティブスイート翠嶺（定山渓ビューホテル内）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/192780/192780.jpg",
              rating: 4.42,
              reviews: 100,
              price: "¥23,700〜",
              access: "札幌駅北口⇔ホテル往復無料シャトルバス運行（要予約）。新千歳空港→札幌駅→宿は公共交通機関で約110分。",
              special: "【OPEN】定山渓随一の絶景を望む、特別な33室。宿泊者専用ラウンジも。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F192780%2F192780.html",
              story: "定山渓ビューホテル本館の最上層に位置し、専用キーを持つ宿泊者だけが足を踏み入れることを許された最高峰の特別フロア「エグゼクティブスイート翠嶺（すいれい）」。地上数十メートルの最上階から見下ろす豊平川渓谷の雪景色は、まさに圧巻の一言です。客室には上質なシモンズ製ベッドやデザイナーズ家具が配され、贅沢なプライベートラウンジではシャンパンや上質なオードブルが無料で振る舞われます。広大な温水アミューズメント施設「水の王国ラグーン」や地下大浴場も利用でき、贅沢とアクティビティを両立できます。",
              roomTip: "最上階からパノラマビューを誇るラグジュアリースイート。初冬の雪雲が晴れ渡る朝、朝日を浴びてキラキラと輝く定山渓の白銀渓谷を一望できます。",
              gourmetTip: "翠嶺宿泊者専用のプレミアムレストランでいただく特選会席。北海道三大蟹（毛ガニ・ズワイ・タラバ）の食べ比べや、極上道産和牛ヒレ肉のステーキ、旬の蝦夷アワビの酒蒸しなど、最上級の北海道食材がテーブルを彩ります。",
              highlights: [
                "最上階専用フロアのエグゼクティブスイート＆専用ラウンジのシャンパンサービスと特選三大蟹会席",
                "地上数十メートルから見下ろす豊平川渓谷の白銀大パノラマ＆贅を尽くしたデザイナーズ空間",
                "北海道三大蟹（毛ガニ・ズワイ・タラバ）食べ比べ＆道産牛ヒレステーキと蝦夷アワビ会席"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-sky-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="定山渓温泉・豊平川の初冬雪景色と原生林に抱かれた雪見露天風呂"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/90 text-sky-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-sky-800/50">
            <Eye className="w-4 h-4 text-sky-300" />
            <span>11月・12月限定 札幌奥座敷の雪渓谷＆北海道三大蟹・道産和牛特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">定山渓温泉の雪渓谷美と名湯で過ごす冬の旅（11・12月）！<br className="hidden sm:inline" /> 札幌の奥座敷・ナトリウム塩化物泉と道産和牛＆北海道冬の三大蟹会席の宿5選</h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            札幌駅からバスでわずか60分。支笏洞爺国立公園の白銀の原生林と豊平川の深い渓谷に佇む「定山渓温泉」。芯から温まるナトリウム塩化物泉の雪見露天風呂と、冬に旬を迎える極上毛ガニ・ズワイ・タラバの三大蟹、そしてとろける道産和牛を味わい尽くす至福の北国ステイ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-sky-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-sky-400" /> 北海道札幌市南区定山渓温泉</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月定山渓温泉】北海道冬の三大蟹会席！名宿5選","item":"https://croud-travel.pages.dev/winter-hokkaido-jozankei-onsen-snow-keikoku-stay"}]}) }}
      />
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-sky-100">
            <div className="p-2.5 rounded-2xl bg-sky-50 text-sky-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">Jozankei Valley Heritage</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                修験僧が拓いた札幌の奥座敷。白銀の渓谷美と塩化物泉の温もり
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            札幌市の中心部から南西へ約30キロ。ビルが立ち並ぶ大都会から車を1時間走らせるだけで、太古の自然が息づく支笏洞爺国立公園の山懐へと辿り着きます。慶応2年（1866年）、修験僧・美泉定山（みいずみじょうざん）がアイヌの人々の案内でこの地に湧き出る温泉と出会い、私財を投じて開拓を進めたことが「定山渓温泉」の始まりです。以来百五十余年、札幌の奥座敷として北海道内外から絶大な支持を集めてきました。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            定山渓の11月・12月は、北国特有の劇的な季節の移ろいを肌で感じる季節です。11月上旬の初雪を合図に山々の装いは一気にモノトーンへと移り変わり、11月下旬から12月にかけては、温泉街を流れる豊平川の奇岩やエゾ松の枝にふんわりと純白の雪が降り積もります。湯気立ち上る露天風呂に肩まで浸かり、静かに舞い落ちる雪を眺めながら過ごす「雪見風呂」は、冬の北海道旅行の醍醐味そのものです。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして冬の北海道を旅する最大の楽しみといえば、なんといっても豪華絢爛な北の美食です。11月から12月は、冷たい海水で身がぎっしりと引き締まり濃厚なカニ味噌を蓄えた「毛ガニ」、繊細な甘みが際立つ「ズワイガニ」、そして太く弾力のある脚肉が食べ応え満点の「タラバガニ」が揃い踏み。さらに、大自然の中で丹精込めて育てられた白老牛やふらの牛などの極上道産黒毛和牛が、贅沢な夜を鮮やかに彩ります。
          </p>
          
          <div className="bg-sky-50/70 rounded-2xl p-5 border border-sky-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-sky-700" />
                11月・12月定山渓温泉 旅のハイライト
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                豊平川渓谷の白銀雪景色・湯冷めしにくい極上ナトリウム塩化物泉・冬の北海道三大蟹食べ比べ・とろける霜降り道産黒毛和牛・札幌駅直行バスの快適アクセス
              </p>
            </div>
            <a
              href="#hotels"
              className="px-5 py-2.5 bg-sky-800 hover:bg-sky-900 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              厳選名宿5選を見る
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-stone-100/80 rounded-2xl p-6 border border-stone-200">
          <h2 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-sky-800" />
            目次・インデックス
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-stone-700">
            <a href="#futami-bridge" className="hover:text-sky-800 hover:underline flex items-center gap-1.5">
              <span>1. 二見吊橋と豊平川の初冬雪景色：エゾ松と奇岩の白銀美</span>
            </a>
            <a href="#spring-feature" className="hover:text-sky-800 hover:underline flex items-center gap-1.5">
              <span>2. 湯冷め知らずの「熱の湯」：ナトリウム塩化物泉の温もり</span>
            </a>
            <a href="#winter-illumination" className="hover:text-sky-800 hover:underline flex items-center gap-1.5">
              <span>3. 冬の温泉街散策：定山渓かっぱ伝説と雪あかりの風情</span>
            </a>
            <a href="#hotels" className="hover:text-sky-800 hover:underline flex items-center gap-1.5">
              <span>4. 11・12月に泊まりたい定山渓温泉の厳選名宿5選</span>
            </a>
            <a href="#gourmet" className="hover:text-sky-800 hover:underline flex items-center gap-1.5">
              <span>5. 北の大地が誇る贅の極み：北海道三大蟹と道産黒毛和牛</span>
            </a>
            <a href="#itinerary" className="hover:text-sky-800 hover:underline flex items-center gap-1.5">
              <span>6. 1泊2日 王道モデルコース（札幌直行バスと雪見露天）</span>
            </a>
            <a href="#faq" className="hover:text-sky-800 hover:underline flex items-center gap-1.5">
              <span>7. よくある質問（FAQ）と冬の防寒対策＆アクセス</span>
            </a>
          </nav>
        </section>

        {/* Futami Bridge Section */}
        <section id="futami-bridge" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">Scenic Futami Gorge</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                二見吊橋と豊平川の初冬雪景色：エゾ松と奇岩の白銀美
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            定山渓温泉の散策スポットとして名高い「二見吊橋（ふたみつりばし）」。鮮やかな赤色の吊橋から見下ろす豊平川の渓谷は、11月下旬から12月にかけて真っ白なパウダースノーに覆われ、息をのむ美しさを誇ります。川岸にそびえ立つ「二見岩」や「かっぱ淵」には、静寂とともに清らかな水音が響き、原生林のエゾ松の枝に積もった雪が風に舞う姿は、北国ならではの風情です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            温泉街にはかっぱ大王像をはじめとする多彩なかっぱのブロンズ像が点在し、冬の散策を温かく彩ります。寒風で冷えた手足を温泉街の無料足湯「長寿と健康の足つぼの湯」や「定山源泉公園」で温めながら歩くひとときは、冬の定山渓ならではの贅沢な過ごし方です。
          </p>
        </section>

        {/* Hot Spring Features */}
        <section id="spring-feature" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-800">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">Thermal Spring Qualities</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                湯冷め知らずの「熱の湯」：ナトリウム塩化物泉の温もりと効能
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-600" />
                塩のベールが熱を逃がさない
              </h3>
              <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
                定山渓の湯は無色透明でまろやかなナトリウム塩化物泉。温泉に含まれる塩分が肌に皮膜を作り、汗の蒸発を防いでポカポカとした温もりが驚くほど長く持続します。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-600" />
                豊富な湧出量と多彩な自家源泉
              </h3>
              <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
                定山渓地区には50箇所以上もの源泉が存在し、毎分8,600リットルもの豊富な湯量を誇ります。各旅館が独自のブレンドや自家源泉かけ流しを大切に守っています。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-600" />
                冷え性・疲労回復に抜群の効能
              </h3>
              <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
                豊かなミネラルが血行を促進し、慢性的な冷え性や神経痛、筋肉痛、関節のこわばりを優しく和らげます。冬の北海道観光で冷えた身体を芯から癒やしてくれます。
              </p>
            </div>
          </div>
        </section>

        {/* Winter Illumination Section */}
        <section id="winter-illumination" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-800">
              <Snowflake className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">Winter Atmosphere</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬の温泉街散策：定山渓神社と白銀のイルミネーション情緒
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            初冬の定山渓温泉街は、雪景色とともに幻想的な光に彩られます。杉の巨木に囲まれた「定山渓神社」では、雪に覆われた鳥居や参道が凛とした神聖な空気に包まれます。夕暮れとともに旅館街や橋の街灯が灯り、白銀の雪に反射する暖色の光が、訪れる人々の心を優しく温めてくれます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            また、札幌市中心部の大通公園で開催される「さっぽろホワイトイルミネーション」や「ミュンヘン・クリスマス市」と組み合わせた旅程も大人気。大都会の華やかな光の祭典を楽しんだ後、静寂に満ちた定山渓の温泉宿で雪見風呂とカニ料理を堪能するプランは、冬の北海道観光の王道コースです。
          </p>
        </section>

        {/* Hotel List */}
        <section id="hotels" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-sky-800 uppercase tracking-widest">Selected Ryokans</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              11月・12月に泊まりたい定山渓温泉の厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              白銀の渓谷美を望む露天風呂、道産和牛と北海道三大蟹を心ゆくまで堪能できる最高峰の宿を厳選。
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
                    <div className="absolute top-4 left-4 bg-sky-950/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
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
                        <span className="text-xs text-sky-800 font-semibold bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                          定山渓温泉・豊平川渓谷
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
                          <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                          <span><strong>客室の魅力：</strong>{hotel.roomTip}</span>
                        </div>
                        <div className="flex items-start gap-2 text-stone-700">
                          <Utensils className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                          <span><strong>冬の料理：</strong>{hotel.gourmetTip}</span>
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-2">
                        {hotel.highlights.map((hl: string, hIdx: number) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-stone-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0 mt-1.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-stone-500 block">参考宿泊料金（1泊2食付／2名1室時1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-extrabold text-sky-800">
                          {hotel.price}
                        </span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-800 hover:bg-sky-900 text-white font-bold rounded-xl shadow-md transition-all duration-200 text-sm hover:scale-[1.02]"
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
            <div className="p-2 rounded-xl bg-sky-50 text-sky-800">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">Winter Delicacies</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                北の大地が誇る贅の極み：北海道三大蟹と極上道産黒毛和牛
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-stone-700">
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-700" />
                冬に甘みと味噌が凝縮する「北海道三大蟹」
              </h3>
              <p className="leading-relaxed text-sm">
                毛ガニ、ズワイガニ、タラバガニ。それぞれの魅力が際立つ北海道の冬。特に初冬の毛ガニは、繊細な甘みの身とクリーミーで濃厚なカニ味噌が詰まった最高峰の美味です。焼きガニの香ばしい薫りや、熱々のカニ鍋で引き出される芳醇な出汁は、北国の寒さを忘れさせてくれる感動の味覚です。
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-700" />
                清らかな水と澄んだ空気で育つ「道産黒毛和牛」
              </h3>
              <p className="leading-relaxed text-sm">
                北海道の大自然の中で良質な牧草と清涼な伏流水を飲んで育てられた道産黒毛和牛。赤身の力強い旨味ときめ細やかな霜降りのバランスが絶妙で、ステーキやしゃぶしゃぶで味わうと、口の中で上品な脂の甘みがふわっと溶け出し、上質な余韻が広がります。
              </p>
            </div>
          </div>
        </section>

        {/* Itinerary Section */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-800">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">Recommended 2-Day Tour</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                1泊2日 王道モデルコース：札幌直行バスで行く！雪見露天風呂と北の美食三昧
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-sky-800 pl-4 sm:pl-6 space-y-2">
              <span className="text-xs font-extrabold text-sky-800 uppercase tracking-wider">【1日目】札幌駅から定山渓へ〜雪渓谷散策と名湯チェックイン</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                12:00 札幌駅周辺で名物スープカレーまたは味噌ラーメンランチ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                スパイスの効いた熱々スープカレーで身体を温め、出発の準備を整える。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                14:00 札幌駅前より直行バス「かっぱライナー号」に乗車 → 15:00 定山渓温泉到着
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                車窓から山林が次第に白銀へと染まっていく美しい景色を眺めながらスムーズに到着。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                15:30 旅館へチェックイン → 豊平川渓谷を望む雪見露天風呂
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                ナトリウム塩化物泉で身体の芯まで温まる。静かに雪が降り積もる冬の渓谷美を堪能。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                18:30 北海道三大蟹会席＆道産黒毛和牛ディナー
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                毛ガニ姿盛りや香ばしい焼きガニ、極上牛ステーキと北海道の地酒を心ゆくまで堪能。
              </p>
            </div>

            <div className="border-l-2 border-stone-300 pl-4 sm:pl-6 space-y-2 pt-2">
              <span className="text-xs font-extrabold text-stone-500 uppercase tracking-wider">【2日目】朝の清涼露天風呂〜足湯巡りと札幌ホワイトイルミネーションへ</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                08:00 朝の雪見風呂でリフレッシュ → 地産地消の北海和朝食
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                白銀の山々に朝日が差し込む露天風呂。北海道産米ゆめぴりかといくら、焼き鮭の贅沢朝食。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                10:30 定山渓神社や「二見吊橋」の雪景色散策＆温泉街スイーツ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                白銀の吊り橋から渓谷美をパノラマ鑑賞。人気の温泉饅頭やアップルパイを購入しバスで札幌駅へ。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        

        {/* Internal Links / Related Guides */}
        <section className="bg-sky-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-sky-300 uppercase tracking-widest">Related Winter Hot Spring Guides</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい北海道・東北の冬・雪見温泉特集
            </h2>
            <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed">
              11月・12月ならではの雪景色や旬の郷土グルメを堪能できる全国各地の名湯ガイドを多数公開中。次の旅の計画にぜひお役立てください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-hokkaido-noboribetsu-onsen-snow-jigokudani-stay"
              className="bg-sky-900/80 hover:bg-sky-900 p-4 rounded-2xl transition border border-sky-800/50 block group"
            >
              <span className="text-xs text-sky-300 font-semibold block mb-1">北海道・登別</span>
              <h3 className="text-sm font-bold group-hover:text-sky-200 transition">登別温泉 雪景色地獄谷と9種の泉質・北海カニ尽くしの宿</h3>
            </Link>
            <Link 
              href="/winter-hokkaido-sapporo-white-illumination-stay"
              className="bg-sky-900/80 hover:bg-sky-900 p-4 rounded-2xl transition border border-sky-800/50 block group"
            >
              <span className="text-xs text-sky-300 font-semibold block mb-1">北海道・札幌</span>
              <h3 className="text-sm font-bold group-hover:text-sky-200 transition">さっぽろホワイトイルミネーションと大通公園周辺の宿</h3>
            </Link>
            <Link 
              href="/winter-niseko-powder-snow-ski-resort-stay"
              className="bg-sky-900/80 hover:bg-sky-900 p-4 rounded-2xl transition border border-sky-800/50 block group"
            >
              <span className="text-xs text-sky-300 font-semibold block mb-1">北海道・ニセコ</span>
              <h3 className="text-sm font-bold group-hover:text-sky-200 transition">ニセコ 極上パウダースノーと羊蹄山ビュー温泉リゾート</h3>
            </Link>
            <Link 
              href="/winter-iwate-hanamaki-onsen-yukimi-maesawa-beef-stay"
              className="bg-sky-900/80 hover:bg-sky-900 p-4 rounded-2xl transition border border-sky-800/50 block group"
            >
              <span className="text-xs text-sky-300 font-semibold block mb-1">岩手・花巻</span>
              <h3 className="text-sm font-bold group-hover:text-sky-200 transition">花巻温泉郷 白銀雪見露天と前沢牛＆白金豚の宿</h3>
            </Link>
            <Link 
              href="/winter-yamagata-ginzan-onsen-snow-taisho-stay"
              className="bg-sky-900/80 hover:bg-sky-900 p-4 rounded-2xl transition border border-sky-800/50 block group"
            >
              <span className="text-xs text-sky-300 font-semibold block mb-1">山形・銀山</span>
              <h3 className="text-sm font-bold group-hover:text-sky-200 transition">銀山温泉 大正ロマン雪景色とガス灯情緒の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-sky-900/80 hover:bg-sky-900 p-4 rounded-2xl transition border border-sky-800/50 block group"
            >
              <span className="text-xs text-sky-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-sky-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-hokkaido-jozankei-onsen-snow-keikoku-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
