import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Fish, ThermometerSun, Footprints, Landmark, Mountain, Map, Heart, Shell, Flower2, ShoppingBag, Shield
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月南伊豆＆下賀茂温泉】温暖な避寒リゾートと湯煙南国情緒・旬の伊勢海老姿造り＆脂が乗った地金目鯛姿煮・水仙まつりを巡る名宿5選",
  description: "11月から12月にかけて寒風が吹き始める本州において、黒潮が洗う伊豆半島最南端の「南伊豆・下賀茂温泉＆弓ヶ浜」は、初冬でも平均気温15℃前後というポカポカとした温暖な気候に恵まれた屈指の避寒温泉リゾートです。青野川沿いの至る所から100℃近い純白の湯煙が立ちのぼり、ソテツやヤシの木が揺れる南国情緒と、情緒あふれる数寄屋造りの温泉宿が共存する独特の景観が旅人を迎えます。下賀茂温泉の泉質は、豊富な塩分とカルシウムを含む良質な塩化物泉。湯船に身を沈めれば塩分が肌の表面にヴェールを作り、冷たい海風を遮って体の芯からポカポカとした保温効果がいつまでも持続します。そして初冬の南伊豆で最大のハイライトが、10月から12月にかけて最盛期を迎える「伊勢海老」。引き締まった身の甘みと濃厚な味噌を味わう姿造りや鬼殻焼き、翌朝の贅沢な伊勢海老味噌汁はまさに感動の美食体験です。さらに冬に最も脂が乗りコクを増す「地金目鯛の煮付け」やしゃぶしゃぶ、温泉熱を利用して育てられる極甘の「温泉メロン」、12月中旬から爪木崎の断崖に300万本が咲き誇る「水仙まつり」など、初冬の南伊豆を満喫できる厳選宿5選を詳しく紹介します。",
  keywords: '南伊豆 宿泊, 下賀茂温泉 旅館, 弓ヶ浜 温泉, 伊勢海老 祭り 南伊豆, 地金目鯛 姿煮, 季一遊 南伊豆, 爪木崎 水仙まつり, 避寒 温泉旅行, 11月 12月 伊豆旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-shizuoka-minamiizu-shimogamo-onsen-iseebi-kinmedai-stay/"
  },
  openGraph: {
    title: "【11・12月南伊豆＆下賀茂温泉】温暖な避寒リゾートと湯煙南国情緒・旬の伊勢海老姿造り＆脂が乗った地金目鯛姿煮・水仙まつりを巡る名宿5選",
    description: "11月から12月にかけて寒風が吹き始める本州において、黒潮が洗う伊豆半島最南端の「南伊豆・下賀茂温泉＆弓ヶ浜」は、初冬でも平均気温15℃前後というポカポカとした温暖な気候に恵まれた屈指の避寒温泉リゾートです。青野川沿いの至る所から100℃近い純白の湯煙が立ちのぼり、ソテツやヤシの木が揺れる南国情緒と、情緒あふれる数寄屋造りの温泉宿が共存する独特の景観が旅人を迎えます。下賀茂温泉の泉質は、豊富な塩分とカルシウムを含む良質な塩化物泉。湯船に身を沈めれば塩分が肌の表面にヴェールを作り、冷たい海風を遮って体の芯からポカポカとした保温効果がいつまでも持続します。そして初冬の南伊豆で最大のハイライトが、10月から12月にかけて最盛期を迎える「伊勢海老」。引き締まった身の甘みと濃厚な味噌を味わう姿造りや鬼殻焼き、翌朝の贅沢な伊勢海老味噌汁はまさに感動の美食体験です。さらに冬に最も脂が乗りコクを増す「地金目鯛の煮付け」やしゃぶしゃぶ、温泉熱を利用して育てられる極甘の「温泉メロン」、12月中旬から爪木崎の断崖に300万本が咲き誇る「水仙まつり」など、初冬の南伊豆を満喫できる厳選宿5選を詳しく紹介します。",
    url: 'https://croud-travel.pages.dev/winter-shizuoka-minamiizu-shimogamo-onsen-iseebi-kinmedai-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '温暖な南伊豆・弓ヶ浜の海岸美と下賀茂温泉の立ちのぼる湯煙'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月南伊豆＆下賀茂温泉】温暖な避寒リゾートと湯煙南国情緒・旬の伊勢海老姿造り＆脂が乗った地金目鯛姿煮・水仙まつりを巡る名宿5選",
    description: "11月から12月にかけて寒風が吹き始める本州において、黒潮が洗う伊豆半島最南端の「南伊豆・下賀茂温泉＆弓ヶ浜」は、初冬でも平均気温15℃前後というポカポカとした温暖な気候に恵まれた屈指の避寒温泉リゾートです。青野川沿いの至る所から100℃近い純白の湯煙が立ちのぼり、ソテツやヤシの木が揺れる南国情緒と、情緒あふれる数寄屋造りの温泉宿が共存する独特の景観が旅人を迎えます。下賀茂温泉の泉質は、豊富な塩分とカルシウムを含む良質な塩化物泉。湯船に身を沈めれば塩分が肌の表面にヴェールを作り、冷たい海風を遮って体の芯からポカポカとした保温効果がいつまでも持続します。そして初冬の南伊豆で最大のハイライトが、10月から12月にかけて最盛期を迎える「伊勢海老」。引き締まった身の甘みと濃厚な味噌を味わう姿造りや鬼殻焼き、翌朝の贅沢な伊勢海老味噌汁はまさに感動の美食体験です。さらに冬に最も脂が乗りコクを増す「地金目鯛の煮付け」やしゃぶしゃぶ、温泉熱を利用して育てられる極甘の「温泉メロン」、12月中旬から爪木崎の断崖に300万本が咲き誇る「水仙まつり」など、初冬の南伊豆を満喫できる厳選宿5選を詳しく紹介します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function ShizuokaMinamiizuShimogamoWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-shizuoka-minamiizu-shimogamo-onsen-iseebi-kinmedai-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.pages.dev/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.pages.dev/"
        },
        "headline": "【11・12月南伊豆＆下賀茂温泉】温暖な避寒リゾートと湯煙南国情緒・旬の伊勢海老姿造り＆脂が乗った地金目鯛姿煮・水仙まつりを巡る名宿5選",
        "description": "11月から12月にかけて寒風が吹き始める本州において、黒潮が洗う伊豆半島最南端の「南伊豆・下賀茂温泉＆弓ヶ浜」は、初冬でも平均気温15℃前後というポカポカとした温暖な気候に恵まれた屈指の避寒温泉リゾートです。青野川沿いの至る所から100℃近い純白の湯煙が立ちのぼり、ソテツやヤシの木が揺れる南国情緒と、情緒あふれる数寄屋造りの温泉宿が共存する独特の景観が旅人を迎えます。下賀茂温泉の泉質は、豊富な塩分とカルシウムを含む良質な塩化物泉。湯船に身を沈めれば塩分が肌の表面にヴェールを作り、冷たい海風を遮って体の芯からポカポカとした保温効果がいつまでも持続します。そして初冬の南伊豆で最大のハイライトが、10月から12月にかけて最盛期を迎える「伊勢海老」。引き締まった身の甘みと濃厚な味噌を味わう姿造りや鬼殻焼き、翌朝の贅沢な伊勢海老味噌汁はまさに感動の美食体験です。さらに冬に最も脂が乗りコクを増す「地金目鯛の煮付け」やしゃぶしゃぶ、温泉熱を利用して育てられる極甘の「温泉メロン」、12月中旬から爪木崎の断崖に300万本が咲き誇る「水仙まつり」など、初冬の南伊豆を満喫できる厳選宿5選を詳しく紹介します。",
        "datePublished": "2026-09-30T00:00:00+09:00",
        "dateModified": "2026-09-30T00:00:00+09:00",
        "inLanguage": "ja",
        "mainEntityOfPage": "https://croud-travel.pages.dev/winter-shizuoka-minamiizu-shimogamo-onsen-iseebi-kinmedai-stay",
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
              "name": "南伊豆弓ヶ浜温泉　季一遊",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/67430/67430.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67430%2F67430.html",
              "priceRange": "¥13,750〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "静岡県",
                "addressLocality": "賀茂郡南伊豆町",
                "streetAddress": "賀茂郡南伊豆町湊川口902-1",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.52",
                "reviewCount": 730
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Hotel",
              "name": "源泉一途　南伊豆（旧　下賀茂温泉　花のおもてなし南楽）",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/39621/39621.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39621%2F39621.html",
              "priceRange": "¥15,200〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "静岡県",
                "addressLocality": "賀茂郡南伊豆町",
                "streetAddress": "賀茂郡南伊豆町下賀茂130-1",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.47",
                "reviewCount": 367
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Hotel",
              "name": "壺中の天　宿○文",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/51660/51660.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F51660%2F51660.html",
              "priceRange": "¥13,860〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "静岡県",
                "addressLocality": "賀茂郡南伊豆町",
                "streetAddress": "賀茂郡南伊豆町湊1561",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.25",
                "reviewCount": 405
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Hotel",
              "name": "ホテル河内屋　伊豆下賀茂温泉　１００％源泉かけ流しの湯",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/27984/27984.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27984%2F27984.html",
              "priceRange": "¥4,400〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "静岡県",
                "addressLocality": "賀茂郡南伊豆町",
                "streetAddress": "賀茂郡南伊豆町下賀茂436-1",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.23",
                "reviewCount": 524
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Hotel",
              "name": "休暇村南伊豆",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/67271/67271.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67271%2F67271.html",
              "priceRange": "¥12,500〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "静岡県",
                "addressLocality": "賀茂郡南伊豆町",
                "streetAddress": "賀茂郡南伊豆町湊889-1",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.54",
                "reviewCount": 626
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
            "name": "11月・12月の南伊豆の気候と気温、服装の目安は？本当に暖かいですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "南伊豆エリア（下賀茂温泉・弓ヶ浜・石廊崎）は、本州の南端近くに位置し沖合を流れる黒潮の影響を直接受けるため、本州の中で最も温暖な避寒地の一つです。11月の最高気温は約17〜20℃、12月でも約14〜17℃と、東京や横浜に比べて2〜4℃高く、日中は晴天であれば薄手のセーターやカーディガン1枚で快適に過ごせます。雪が降ることはほぼ皆無で、凍結の心配も海岸線沿いはほとんどありません。ただし朝晩や海風の強い海岸では冷え込むため、脱ぎ着しやすいジャケットやストールをお持ちください。"
            }
          },
          {
            "@type": "Question",
            "name": "南伊豆の「伊勢海老まつり」や伊勢海老の旬の時期はいつですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "南伊豆町は静岡県内でも有数の伊勢海老の水揚げ量を誇ります。毎年秋の禁漁明け（9月中旬）から漁が始まり、例年9月下旬から12月上旬にかけて町全体で「南伊豆町伊勢海老まつり」が開催されます。特に11月から12月は水温の低下とともに伊勢海老の身がぎゅっと引き締まり、甘みと味噌のコクが最も深まるベストシーズンです。多くの旅館で1人1匹以上の伊勢海老が付いた豪華会席プランが提供されます。"
            }
          },
          {
            "@type": "Question",
            "name": "下賀茂温泉の泉質と特徴、周辺の湯煙風景について教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "下賀茂温泉は、青野川沿いの至る所から泉温約100℃前後の熱湯と白い湯煙が勢いよく立ちのぼる高温のナトリウム・カルシウム-塩化物温泉です。塩分濃度が高いため湯冷めしにくく、冷え性や関節痛に優れた効果を発揮します。温泉熱は宿泊施設だけでなく、名産の「温泉メロン」栽培や熱帯植物園の暖房、町民の暖房給湯にも利用されており、湯煙とヤシの木が織りなす南国情緒あふれる独特の風景が魅力です。"
            }
          },
          {
            "@type": "Question",
            "name": "12月中旬から開催される「爪木崎水仙まつり」の見どころとアクセスは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "下田市の爪木崎（つめきざき）は、須崎半島の先端に位置する日本有数の水仙の名所です。毎年12月中旬から翌年1月下旬にかけて、海岸沿いの丘陵地一面に約300万本もの野生の野水仙（ニホンズイセン）が咲き乱れます。澄み渡る初冬の青空と太平洋の青、白い水仙の花畑、そして甘く清々しい香りが風に乗って漂う光景は圧巻です。下賀茂温泉や弓ヶ浜からは車で約25〜30分、下田駅からも臨時路線バスが運行されます。"
            }
          },
          {
            "@type": "Question",
            "name": "南伊豆・下賀茂温泉へのアクセス方法と、伊豆急下田駅からの交通機関は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "公共交通機関の場合は、東京駅から特急「サフィール踊り子」または「踊り子」で伊豆急下田駅まで直通約2時間30分〜2時間45分。伊豆急下田駅からは東海バス（下賀茂行きまたは石廊崎オーシャンパーク行き）に乗車し、下賀茂温泉まで約20分、弓ヶ浜温泉まで約25分です。車の場合は、新東名「長泉沼津IC」または東名「沼津IC」から伊豆縦貫道・伊豆中央道・修善寺道路・国道414号を経由して約90〜100分。初冬のドライブコースとしても海岸美が爽快です。"
            }
          }
        ]
      }
    ]
  };

  const faqListItems = [
  {
    "q": "11月・12月の南伊豆の気候と気温、服装の目安は？本当に暖かいですか？",
    "a": "南伊豆エリア（下賀茂温泉・弓ヶ浜・石廊崎）は、本州の南端近くに位置し沖合を流れる黒潮の影響を直接受けるため、本州の中で最も温暖な避寒地の一つです。11月の最高気温は約17〜20℃、12月でも約14〜17℃と、東京や横浜に比べて2〜4℃高く、日中は晴天であれば薄手のセーターやカーディガン1枚で快適に過ごせます。雪が降ることはほぼ皆無で、凍結の心配も海岸線沿いはほとんどありません。ただし朝晩や海風の強い海岸では冷え込むため、脱ぎ着しやすいジャケットやストールをお持ちください。"
  },
  {
    "q": "南伊豆の「伊勢海老まつり」や伊勢海老の旬の時期はいつですか？",
    "a": "南伊豆町は静岡県内でも有数の伊勢海老の水揚げ量を誇ります。毎年秋の禁漁明け（9月中旬）から漁が始まり、例年9月下旬から12月上旬にかけて町全体で「南伊豆町伊勢海老まつり」が開催されます。特に11月から12月は水温の低下とともに伊勢海老の身がぎゅっと引き締まり、甘みと味噌のコクが最も深まるベストシーズンです。多くの旅館で1人1匹以上の伊勢海老が付いた豪華会席プランが提供されます。"
  },
  {
    "q": "下賀茂温泉の泉質と特徴、周辺の湯煙風景について教えてください。",
    "a": "下賀茂温泉は、青野川沿いの至る所から泉温約100℃前後の熱湯と白い湯煙が勢いよく立ちのぼる高温のナトリウム・カルシウム-塩化物温泉です。塩分濃度が高いため湯冷めしにくく、冷え性や関節痛に優れた効果を発揮します。温泉熱は宿泊施設だけでなく、名産の「温泉メロン」栽培や熱帯植物園の暖房、町民の暖房給湯にも利用されており、湯煙とヤシの木が織りなす南国情緒あふれる独特の風景が魅力です。"
  },
  {
    "q": "12月中旬から開催される「爪木崎水仙まつり」の見どころとアクセスは？",
    "a": "下田市の爪木崎（つめきざき）は、須崎半島の先端に位置する日本有数の水仙の名所です。毎年12月中旬から翌年1月下旬にかけて、海岸沿いの丘陵地一面に約300万本もの野生の野水仙（ニホンズイセン）が咲き乱れます。澄み渡る初冬の青空と太平洋の青、白い水仙の花畑、そして甘く清々しい香りが風に乗って漂う光景は圧巻です。下賀茂温泉や弓ヶ浜からは車で約25〜30分、下田駅からも臨時路線バスが運行されます。"
  },
  {
    "q": "南伊豆・下賀茂温泉へのアクセス方法と、伊豆急下田駅からの交通機関は？",
    "a": "公共交通機関の場合は、東京駅から特急「サフィール踊り子」または「踊り子」で伊豆急下田駅まで直通約2時間30分〜2時間45分。伊豆急下田駅からは東海バス（下賀茂行きまたは石廊崎オーシャンパーク行き）に乗車し、下賀茂温泉まで約20分、弓ヶ浜温泉まで約25分です。車の場合は、新東名「長泉沼津IC」または東名「沼津IC」から伊豆縦貫道・伊豆中央道・修善寺道路・国道414号を経由して約90〜100分。初冬のドライブコースとしても海岸美が爽快です。"
  }
];

  const hotelCards = [
            {
              id: 1,
              name: "南伊豆弓ヶ浜温泉　季一遊",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67430/67430.jpg",
              rating: 4.52,
              reviews: 730,
              price: "¥13,750〜",
              access: "伊豆急下田駅より送迎バスにて約20分",
              special: "旅館のスタイルにこだわらない自由な発想。南伊豆の「今日の美味」をお届けします。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67430%2F67430.html",
              story: "「日本の渚百選」に選ばれた弓ヶ浜の美しい白砂青松の海岸線まで徒歩わずか1分、海と松林の静寂に抱かれた極上の湯宿「南伊豆弓ヶ浜温泉 季一遊」。館内に足を踏み入れると、広々とした畳敷きのロビー越しに松林と潮騒の心地よい音が旅人を優しく出迎えます。敷地内に湧く豊富な自家源泉は、肌触り滑らかなナトリウム・カルシウム-塩化物泉。波音を間近に聞く露天風呂「浜の湯」や御影石の大浴場、趣の異なる3つの無料貸切露天風呂で、贅沢な湯浴み三昧が楽しめます。夕食は南伊豆の海の幸を豪快に味わう海鮮会席。旬を迎えた本場伊勢海老のお造りや鬼殻焼きをはじめ、脂の乗った地金目鯛の姿煮、獲れたての地魚をお好みの調理法で選べる魚獲りチョイスなど、美食の極みを堪能できます。きめ細やかなおもてなしと上質な空間美が、大切な記念日や夫婦旅に極上の時間をもたらします。",
              roomTip: "海側に面したバルコニー付き和洋室。朝の澄み渡る空気の中、青い太平洋から昇る美しい朝陽を眺めながら過ごす時間は格別です。",
              gourmetTip: "「伊勢海老姿造りと地金目鯛姿煮の特選海鮮会席」。ぷりぷりと弾ける伊勢海老の濃厚な甘みと、秘伝のタレでこっくり煮付けた金目鯛の旨味。",
              highlights: [
                "弓ヶ浜海岸徒歩1分の絶好立地＆自家源泉露天風呂と3つの無料貸切露天風呂",
                "旬の伊勢海老姿造りと地金目鯛姿煮会席＆魚獲りチョイスの美食体験",
                "畳敷きロビーと潮騒のおもてなし＆記念日や夫婦旅に大好評の上質空間"
              ]
            },
            {
              id: 2,
              name: "源泉一途　南伊豆（旧　下賀茂温泉　花のおもてなし南楽）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/39621/39621.jpg",
              rating: 4.47,
              reviews: 367,
              price: "¥15,200〜",
              access: "JR伊豆急 下田駅より車で１５分＜毎日無料送迎有＞／新東名長泉沼津IC～中伊豆道路湯ヶ島IC経由で100分",
              special: "2026年6月1日始動。加水一切なしの「生きた源泉」を7の貸切風呂で。本能が潤う、一途な湯と食を。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39621%2F39621.html",
              story: "青野川のほとり、広大な敷地に数寄屋造りの平屋が点在し、日本庭園の風情と温泉情緒が息づく下賀茂温泉屈指の名門宿「源泉一途 南伊豆（旧 下賀茂温泉 花のおもてなし南楽）」。宿の最大の誇りは、敷地内に湧出する2つの自家源泉を惜しみなく注いだ「25の湯船」です。大浴場はもちろん、それぞれ異なる趣を持つ10カ所の貸切風呂はすべて無料で利用可能。石造り、檜造り、洞窟風など、多彩な湯船で源泉かけ流しの極上塩化物泉を巡る贅沢は、まさに温泉好きのパラダイスです。夕食は南伊豆の旬の食材を一品ずつ丁寧に仕立てる里山里海会席。冬の王様・伊勢海老の鬼殻焼きや、ふっくらと煮上げた下田港直送の金目鯛、温泉熱で蒸し上げる地元野菜など、手作りの温もりが宿る滋味あふれる料理が並びます。",
              roomTip: "日本庭園に面した純和風の数寄屋平屋客室。川のせせらぎと竹林の葉擦れの音を聞きながら、まるで隠れ里にいるような静寂を味わえます。",
              gourmetTip: "「伊勢海老鬼殻焼きと金目鯛季節会席」。香ばしい殻の香りと甘い身が引き立つ伊勢海老と、地酒「あらばしり」との相性が抜群。",
              highlights: [
                "広大な日本庭園に佇む数寄屋宿＆25の湯船と10カ所の無料貸切露天風呂",
                "敷地内2源泉かけ流しの贅沢＆伊勢海老鬼殻焼きと金目鯛の里山里海会席",
                "青野川の清流と竹林の静寂＆平屋建ての風情ある純和風客室"
              ]
            },
            {
              id: 3,
              name: "壺中の天　宿○文",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/51660/51660.jpg",
              rating: 4.25,
              reviews: 405,
              price: "¥13,860〜",
              access: "伊豆急行線　下田駅より車、又はバスで２０分（事前予約制の無料送迎バスもございます。）",
              special: "全室【オーシャンビュー・露天風呂付き】弓ヶ浜ビーチまで徒歩０分",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F51660%2F51660.html",
              story: "弓ヶ浜海岸のすぐ目の前に位置し、全客室が海を正面に望むオーシャンビュー＆露天風呂付きという贅沢な大人の隠れ宿「壺中の天 宿○文（こちゅうのてん やくももん）」。客室のテラスに備えられたプライベート露天風呂からは、穏やかな弓ヶ浜の白波と刻々と茜色から群青色へと移ろう海と空のドラマチックな景色を一望できます。お湯はもちろん良質な天然温泉。波の音を子守唄に、誰にも邪魔されない至福の湯浴みを24時間楽しめます。夕食は駿河湾・相模湾の新鮮な海の幸を主役にした創作海鮮料理。初冬の主役である活伊勢海老のお造りや、大ぶりの地金目鯛のしゃぶしゃぶ、鮑の踊り焼きなど、高級海鮮が贅沢に並びます。夕暮れどきにグラスを傾けながら海を眺める大人のリゾートステイに最適です。",
              roomTip: "全室オーシャンフロントの露天風呂付き客室。初冬の心地よい潮風を感じながら、テラスの湯船から海に浮かぶ伊豆諸島の島影を望めます。",
              gourmetTip: "「活伊勢海老姿造りと地金目鯛しゃぶしゃぶ会席」。薄切りにした金目鯛の身を昆布出汁にサッとくぐらせ、自家製ポン酢でさっぱりといただく絶品。",
              highlights: [
                "全室オーシャンビュー＆客室露天風呂付きの贅沢な大人の隠れ家リゾート",
                "活伊勢海老姿造りと地金目鯛しゃぶしゃぶ＆プライベートテラスでの至福",
                "弓ヶ浜の白波と夕景を一望＆24時間いつでも好きな時に入れる客室露天"
              ]
            },
            {
              id: 4,
              name: "ホテル河内屋　伊豆下賀茂温泉　１００％源泉かけ流しの湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/27984/27984.jpg",
              rating: 4.23,
              reviews: 524,
              price: "¥4,400〜",
              access: "伊豆急下田駅/東名高速沼津IC・新東名長泉沼津ＩＣより車で９０ｋｍ",
              special: "【伊豆で初の温泉冷却装置導入！100％源泉掛け流し】金目鯛の煮付や伊勢海老など伊豆の海の幸をご堪能！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27984%2F27984.html",
              story: "下賀茂温泉の源泉が勢いよく立ちのぼる温泉街の中心に佇み、100%源泉かけ流しの豊富な湯量を誇る歴史ある温泉旅館「ホテル河内屋 伊豆下賀茂温泉」。敷地内から噴き出す自家源泉は泉温100℃に近く、大浴場や開放感あふれる庭園露天風呂には一切の加水・循環を行わないピュアな温泉が絶え間なく注がれています。塩分をたっぷり含んだ湯は、体を芯から温めて湯冷めを防ぎ、神経痛や冷え性を癒やす効能に優れています。夕食は地元の漁港から届く新鮮な魚介と旬の味覚をふんだんに盛り込んだ海鮮会席。伊勢海老のお造りや金目鯛の姿煮、サザエのつぼ焼きなど、伊豆ならではの定番ご馳走がリーズナブルな価格で堪能できるコスパの高さが大きな魅力です。",
              roomTip: "落ち着いた純和室。窓からは下賀茂温泉の立ち上る白い湯煙と山並みが望め、昔ながらの温泉情緒を満喫できます。",
              gourmetTip: "「伊豆海鮮会席と金目鯛姿煮」。こっくりと甘辛く煮付けた金目鯛の煮汁をご飯にかけていただくのが通の楽しみ方。",
              highlights: [
                "100%源泉かけ流しの高温良質塩化物泉＆広々とした庭園露天風呂",
                "下賀茂温泉街の立ち上る湯煙風情＆伊豆海鮮会席の高いコストパフォーマンス",
                "伊豆急下田駅からバス20分の温泉街中心＆湯治気分でのんびり滞在"
              ]
            },
            {
              id: 5,
              name: "休暇村南伊豆",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67271/67271.jpg",
              rating: 4.54,
              reviews: 626,
              price: "¥12,500〜",
              access: "伊豆急下田駅前、東海バス４番乗り場から休暇村経由石廊崎オーシャンパーク行に乗車して約２５分。休暇村バス停下車すぐ目の前。",
              special: "季節の会席料理やビュッフェのご当地グルメも楽しみ♪庭園露天風呂で癒しも感じる！温泉宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67271%2F67271.html",
              story: "日本の渚百選・弓ヶ浜まで徒歩数分、松林に囲まれた広大な敷地に位置し、充実したリゾート設備と温泉を満喫できる国立公園内の人気宿「休暇村南伊豆」。館内最上階には弓ヶ浜を一望する展望温泉大浴場があり、初冬の澄み渡る青空と群青の太平洋のパノラマを眺めながらゆったりと入浴できます。塩化物泉の温もりは格別で、日頃の疲れをすっきりとリフレッシュしてくれます。夕食は南伊豆の美味を思う存分味わえる豪華ビュッフェ。握り寿司や揚げたて天ぷらはもちろん、冬の特別フェアとして提供される金目鯛料理や伊勢海老料理、地元産冬野菜のグリルなど、多彩なメニューを好きなだけ楽しめます。ファミリーからシニアまで安心して快適に過ごせる充実のホスピタリティが魅力です。",
              roomTip: "松林と弓ヶ浜の風情を感じる広々とした和室または洋室。清潔感あふれる空間で、夜は潮騒を聞きながら心地よい休息をとることができます。",
              gourmetTip: "「南伊豆プレミアム海鮮ビュッフェ」。職人が目の前で捌く地魚の握り寿司や熱々の金目鯛料理、名物スイーツまで大満足のディナー。",
              highlights: [
                "弓ヶ浜を望む最上階展望温泉大浴場＆充実の豪華南伊豆海鮮ビュッフェ",
                "国立公園内の豊かな自然環境＆ファミリーからカップルまで快適な施設設備",
                "爪木崎水仙まつりや石廊崎観光の拠点＆海辺の散策路でのウォーキング"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-900 leading-relaxed font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <header className="bg-gradient-to-r from-teal-950 via-cyan-950 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wide border border-teal-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            11月・12月初冬の南伊豆避寒＆伊勢海老・金目鯛特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {metadata.title as string}
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
            黒潮が運ぶ温暖な気候と、弓ヶ浜の白砂青松・下賀茂の立ちのぼる湯煙。
            初冬に甘みと旨味が凝縮する本場伊勢海老の姿造り、地金目鯛の姿煮、300万本の水仙が香る避寒リゾートへ。
          </p>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-4">
          <div className="flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide">
            <Sun className="w-4 h-4 text-teal-700" />
            冬でも温暖な避寒地・南伊豆と高温自噴の名湯
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            日本列島が冬の冷え込みに包まれる11月から12月、伊豆半島の南端に位置する「南伊豆・下賀茂温泉＆弓ヶ浜」は、沖合を流れる黒潮の恩恵により最高気温が15〜20℃近くまで上がるポカポカとした別世界が広がります。青野川沿いのそこかしこから純白の湯煙がもくもくと立ちのぼり、ソテツやヤシの木が揺れる南国情緒と、情緒あふれる和の温泉街が見事に調和しています。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            下賀茂温泉の最大の自慢は、約100℃の熱湯が勢いよく自噴する豊富な湯量と、塩分を濃密に含んだ塩化物温泉。お湯に身を沈めれば、塩分が肌の表面に膜を形成して汗の蒸発を防ぎ、海風に吹かれても湯冷めせず、体の芯からポカポカとした温熱効果が長く持続します。弓ヶ浜の波音を聞きながら入る露天風呂は、日頃のストレスや冷えを洗い流す極上のリフレッシュです。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            そして初冬の南伊豆を語る上で欠かせないのが、海の幸の王様「伊勢海老」と「地金目鯛」。10月から12月にかけて最盛期を迎える伊勢海老は、引き締まった身の甘みと濃厚なミソが溢れ出し、姿造りや鬼殻焼きで贅沢に味わえます。さらに冬に最も脂が乗りコクを増す下田港・須崎港水揚げの地金目鯛姿煮、温泉熱で育つ甘いマスクメロン、12月中旬から爪木崎で咲き乱れる300万本の水仙まつりなど、初冬の南伊豆には心躍る感動が詰まっています。
          </p>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <Landmark className="w-4 h-4 text-teal-800" />
              厳選5名宿のご案内
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              温暖避寒の名湯と旬の伊勢海老・地金目鯛を堪能する南伊豆の名宿
            </h2>
          </div>

          <div className="space-y-8">
            {hotelCards.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200 transition hover:shadow-md duration-300"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Hotel Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <span className="inline-block text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full mb-1">
                        第{hotel.id}選
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                        {hotel.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center text-amber-500 font-bold text-sm">
                        <Star className="w-4 h-4 fill-current mr-1" />
                        <span>{hotel.rating}</span>
                        <span className="text-stone-400 text-xs ml-1">({hotel.reviews}件)</span>
                      </div>
                      <span className="text-sm sm:text-base font-extrabold text-teal-800">
                        {hotel.price}
                      </span>
                    </div>
                  </div>

                  {/* Image & Description Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-5 relative h-56 md:h-auto min-h-[220px] rounded-2xl overflow-hidden bg-stone-100">
                      <img 
                        src={hotel.img} 
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="md:col-span-7 space-y-4">
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {hotel.story}
                      </p>
                      
                      <div className="bg-stone-50 rounded-xl p-3.5 space-y-2 text-xs border border-stone-100">
                        <div className="flex items-start gap-2">
                          <Eye className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                          <span className="text-stone-700"><strong>客室の魅力：</strong>{hotel.roomTip}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Utensils className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                          <span className="text-stone-700"><strong>初冬の美食：</strong>{hotel.gourmetTip}</span>
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        {hotel.highlights.map((hl: string, idx: number) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Access & Booking Link */}
                  <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-stone-500">
                      <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span>{hotel.access}</span>
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-bold rounded-xl transition shadow-xs"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Model Itinerary Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-teal-800" />
              1泊2日モデルコース
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              特急踊り子で行く！温暖な南伊豆・水仙まつりと伊勢海老周遊ルート
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-teal-900 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-teal-700" />
                【1日目】東京からサフィール踊り子で下田へ＆石廊崎の青い海
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>11:00 東京駅から特急「踊り子」または「サフィール踊り子」乗車：</strong>相模湾のきらめく海を車窓に眺めながら下田へ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>13:30 伊豆急下田駅に到着＆金目鯛ランチ：</strong>下田港近くで肉厚な地金目鯛の煮付け定食や海鮮丼をいただく。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>14:45 石廊崎オーシャンパーク見学：</strong>伊豆半島最南端の白亜の灯台と、雄大な太平洋の断崖絶壁パノラマを体感。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>16:00 弓ヶ浜または下賀茂温泉の宿へチェックイン：</strong>夕陽に染まる海を眺めながら塩化物泉の露天風呂で温まる。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>18:30 本場伊勢海老姿造り＆金目鯛ディナー：</strong>ぷりぷりの伊勢海老の甘みと濃厚な金目鯛の姿煮、地酒で乾杯。</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-teal-900 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-teal-700" />
                【2日目】爪木崎の水仙まつり＆温泉メロンパフェ
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>07:30 弓ヶ浜の朝散策と朝風呂：</strong>白砂の海岸に打ち寄せる波を眺め、朝の露天風呂でリフレッシュ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>08:30 濃厚な伊勢海老鬼殻汁の朝食：</strong>前夜の伊勢海老の頭から出汁をとった熱々のお味噌汁で贅沢な朝の始まり。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>10:00 爪木崎「水仙まつり」へ（12月中旬〜）：</strong>岬一面に咲き誇る300万本の純白野水仙と、青い海が織りなす絶景の香りを堪能。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>12:30 下賀茂温泉熱スイーツ：</strong>カフェ「扇屋製菓」で温泉熱栽培の完熟メロンを使った絶品メロンパフェを味わう。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>14:30 伊豆急下田駅から特急踊り子乗車：</strong>夕暮れの海岸線を眺めながら心地よい余韻とともに帰路へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-teal-800" />
              初冬の南伊豆・おみやげ＆立ち寄り散策手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              南伊豆で手に入れたい初冬の特産銘品＆立ち寄りスポット
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Flower2 className="w-4 h-4 text-teal-700" />
                下賀茂温泉熱栽培の完熟メロン＆扇屋製菓のメロンパフェ
              </h3>
              <p>
                下賀茂温泉街を代表する老舗和洋菓子店「扇屋製菓」では、100℃の温泉熱ハウスで大切に育てられた最高級マスクメロンを使った贅沢スイーツが楽しめます。看板メニューの「温泉メロンパフェ」や「メロンロールケーキ」「メロン最中」は、濃厚な果汁と豊かな香りが凝縮した逸品。併設カフェでのイートインやお土産のテイクアウトにおすすめです。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Shell className="w-4 h-4 text-teal-700" />
                石廊崎オーシャンパークと南伊豆干物直売所・手作り天草ところてん
              </h3>
              <p>
                伊豆半島最南端の「石廊崎オーシャンパーク」は、断崖絶壁と太平洋の大海原を見渡す絶景テラスや遊覧船乗り場が整備された人気拠点。売店では南伊豆の海女が採取した天然天草で作るコシの強い「ところてん」や、須崎・下田港直送の金目鯛干物、伊勢海老せんべいが購入できます。海岸線を走る国道136号沿いにも老舗干物店が点在しています。
              </p>
            </div>
          </div>
        </section>

        {/* Climate & Access Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <Shield className="w-4 h-4 text-teal-800" />
              11月・12月の気候・服装・快適アクセス案内
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の南伊豆旅行のポイントと温暖避寒・移動のコツ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sun className="w-4 h-4 text-teal-700" />
                本州屈指の温暖避寒地と初冬の快適な服装
              </h3>
              <p>
                南伊豆は冬でも温暖で、日中は晴れていれば15〜18℃近くまで上がり春先のような陽気になります。重いダウンジャケットよりも、脱ぎ着しやすいウールコートやジャケット、薄手のニットの重ね着がベスト。ただし石廊崎や爪木崎などの岬の突端は海風が強いため、風を通さないウインドブレーカーやストールを1枚持参すると快適に観光できます。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-teal-700" />
                特急サフィール踊り子直通と伊豆縦貫道ドライブルート
              </h3>
              <p>
                東京駅から伊豆急下田駅までは全席グリーン席のプレミアム特急「サフィール踊り子」または「踊り子」で乗り換えなし約2時間30分〜45分。車窓に広がる相模湾の景色を楽しみながら快適にアクセスできます。車の場合も伊豆縦貫道や修善寺道路の開通により東名沼津ICから南伊豆まで約90〜100分とスムーズ。海岸線の絶景ドライブを存分に満喫できます。
              </p>
            </div>
          </div>
        </section>

        {/* Local Gourmet Deep Dive */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <Utensils className="w-4 h-4 text-teal-800" />
              名物グルメ＆特産の深掘り
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の南伊豆を彩る3大極上美食
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-3">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                <Shell className="w-4 h-4 text-rose-600" />
                南伊豆の活伊勢海老
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                黒潮が直撃する南伊豆の岩礁地帯は、プランクトンや海藻が豊富で伊勢海老の最高の生息地。秋から初冬にかけて水揚げされる伊勢海老は身が引き締まり、透き通る身の弾力と上品な甘み、そして芳醇な海老味噌のコクが格別の美味しさを誇ります。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-3">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                <Fish className="w-4 h-4 text-amber-600" />
                地金目鯛の姿煮・しゃぶしゃぶ
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                伊豆諸島近海で日帰り漁により一本釣りされる最高級ブランド「地金目鯛（じきんめ）」。冬に最も脂が乗り、真っ赤な皮と純白の身が美しい逸品です。甘辛い秘伝のタレでふっくら煮付けた姿煮や、サッと出汁に通すしゃぶしゃぶで至福の舌触りを堪能できます。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-3">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                <Flower2 className="w-4 h-4 text-emerald-600" />
                下賀茂の温泉メロン
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                下賀茂温泉の地下から湧き出る100℃の豊富な温泉熱を利用して温室栽培されるマスクメロン。一年中安定した地熱で育てられるため、果汁が滴るほどジューシーで高い糖度を誇ります。温泉街のスイーツ店で味わうパフェや生ジュースは旅の隠れた名物です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-teal-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の南伊豆＆下賀茂温泉旅行・よくある質問（FAQ）
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-teal-700 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links / Related Features Section */}
        <section className="bg-gradient-to-br from-stone-100 to-teal-50/50 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">
              静岡・伊豆半島エリアのあわせて読みたい人気温泉特集
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              南伊豆温泉とあわせて巡りたい、伊豆屈指の絶景名湯と冬の美味特集をご紹介します。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/winter-shizuoka-izunagaoka-onsen-fujiview-kinmedai-izugyu-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200 hover:border-teal-500 hover:shadow-xs transition group space-y-2"
            >
              <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">静岡・伊豆長岡温泉</span>
              <h4 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-teal-700 transition line-clamp-2">
                富士山眺望と碧テラス絶景・伊豆牛ステーキと古奈の名湯
              </h4>
            </Link>

            <Link
              href="/winter-shizuoka-atami-onsen-winter-fireworks-kinmedai-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200 hover:border-teal-500 hover:shadow-xs transition group space-y-2"
            >
              <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">静岡・熱海温泉</span>
              <h4 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-teal-700 transition line-clamp-2">
                熱海冬花火のパノラマ絶景露天風呂と金目鯛しゃぶしゃぶ
              </h4>
            </Link>

            <Link
              href="/winter-shizuoka-inatori-onsen-kinmedai-oceanview-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200 hover:border-teal-500 hover:shadow-xs transition group space-y-2"
            >
              <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">静岡・稲取温泉</span>
              <h4 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-teal-700 transition line-clamp-2">
                稲取港の初冬名物・地金目鯛の姿煮と太平洋オーシャンビュー
              </h4>
            </Link>

            <Link
              href="/winter-shizuoka-nishiizu-dogashima-onsen-sunset-fuji-takaashigani-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200 hover:border-teal-500 hover:shadow-xs transition group space-y-2"
            >
              <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">静岡・西伊豆堂ヶ島温泉</span>
              <h4 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-teal-700 transition line-clamp-2">
                夕陽百選のリアス式海岸絶景と世界最大の高足ガニ会席
              </h4>
            </Link>

            <Link
              href="/winter-shizuoka-shuzenji-late-momiji-bamboo-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200 hover:border-teal-500 hover:shadow-xs transition group space-y-2"
            >
              <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">静岡・修善寺温泉</span>
              <h4 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-teal-700 transition line-clamp-2">
                竹林の小径と伊豆最古の湯・初冬の紅葉ライトアップ散策
              </h4>
            </Link>

            <Link
              href="/features"
              className="bg-white p-4 rounded-2xl border border-stone-200 hover:border-teal-500 hover:shadow-xs transition group space-y-2 flex flex-col justify-center items-center text-center"
            >
              <span className="text-xs font-bold text-teal-700">全国の旬の温泉特集一覧へ</span>
              <span className="text-[11px] text-stone-500">11月・12月おすすめの厳選特集</span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-shizuoka-minamiizu-shimogamo-onsen-iseebi-kinmedai-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
