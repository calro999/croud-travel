import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map, Anchor, Heart
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月鞆の浦温泉】瀬戸内海初冬の夕暮れと潮待ちの港情緒！名宿5選',
  description: '11月中旬から12月の初冬、瀬戸内海の穏やかな潮風に包まれる広島県福山市・鞆の浦（とものうら）は、一年で最も空気が澄み渡り。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '鞆の浦温泉 宿泊, 鞆の浦 旅館, 寒真鯛 鯛めし, 峠下牛 広島牛, 保命酒 鞆の浦, 遠音近音 漣亭 鴎風亭, 潮待ちの港 日本遺産, 常夜燈 仙酔島, 11月 12月 瀬戸内海旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-hiroshima-tomonoura-onsen-setouchi-taimeshi-taoshitagyu-stay/"
  },
  openGraph: {
    title: '【11・12月鞆の浦温泉】瀬戸内海初冬の夕暮れと潮待ちの港情緒！名宿5選',
    description: '11月中旬から12月の初冬、瀬戸内海の穏やかな潮風に包まれる広島県福山市・鞆の浦（とものうら）は、一年で最も空気が澄み渡り。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-hiroshima-tomonoura-onsen-setouchi-taimeshi-taoshitagyu-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の鞆の浦常夜燈と夕暮れの穏やかな瀬戸内海'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月鞆の浦温泉】瀬戸内海初冬の夕暮れと潮待ちの港情緒・名物寒真鯛の鯛めし＆地魚姿造り・幻の峠下牛と保命酒を味わう名宿5選",
    description: "11月中旬から12月の初冬、瀬戸内海の穏やかな潮風に包まれる広島県福山市・鞆の浦（とものうら）は、一年で最も空気が澄み渡り、仙酔島や弁天島を茜色に染め上げる夕暮れのグラデーションが息をのむ美しさを放つ季節を迎えます。万葉の時代から「潮待ちの港」として栄え、坂本龍馬のいろは丸事件ゆかりの地としても名高いこの港町は、江戸時代の常夜燈や石造りの雁木、格子戸の町家が奇跡的に残る日本遺産の街。冷え込む初冬の旅人を温めるのは、ラジウムを豊富に含む天然鞆の浦温泉の湯浴みと、瀬戸内海の豊かな海が育んだ冬の美食の数々です。荒波で身を引き締めた初冬の「寒真鯛」を香ばしく炊き上げた名物「鯛めし」や熱々の出汁をかける「鯛茶漬け」、ネブトやチヌなど朝獲れ小魚の姿造り、そして広島県竹原の豊かな自然が育んだ幻の黒毛和牛「峠下牛（たおしたぎゅう）」の陶板ステーキ。さらに江戸初期より伝わる十六種の和漢薬草酒「保命酒（ほうめいしゅ）」の滋養まで、瀬戸内初冬の贅を味わい尽くす厳選名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function HiroshimaTomonouraWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-hiroshima-tomonoura-onsen-setouchi-taimeshi-taoshitagyu-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.pages.dev/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.pages.dev/"
        },
        "headline": "【11・12月鞆の浦温泉】瀬戸内海初冬の夕暮れと潮待ちの港情緒・名物寒真鯛の鯛めし＆地魚姿造り・幻の峠下牛と保命酒を味わう名宿5選",
        "description": "11月中旬から12月の初冬、瀬戸内海の穏やかな潮風に包まれる広島県福山市・鞆の浦（とものうら）は、一年で最も空気が澄み渡り、仙酔島や弁天島を茜色に染め上げる夕暮れのグラデーションが息をのむ美しさを放つ季節を迎えます。万葉の時代から「潮待ちの港」として栄え、坂本龍馬のいろは丸事件ゆかりの地としても名高いこの港町は、江戸時代の常夜燈や石造りの雁木、格子戸の町家が奇跡的に残る日本遺産の街。冷え込む初冬の旅人を温めるのは、ラジウムを豊富に含む天然鞆の浦温泉の湯浴みと、瀬戸内海の豊かな海が育んだ冬の美食の数々です。荒波で身を引き締めた初冬の「寒真鯛」を香ばしく炊き上げた名物「鯛めし」や熱々の出汁をかける「鯛茶漬け」、ネブトやチヌなど朝獲れ小魚の姿造り、そして広島県竹原の豊かな自然が育んだ幻の黒毛和牛「峠下牛（たおしたぎゅう）」の陶板ステーキ。さらに江戸初期より伝わる十六種の和漢薬草酒「保命酒（ほうめいしゅ）」の滋養まで、瀬戸内初冬の贅を味わい尽くす厳選名宿5選を徹底解説します。",
        "datePublished": "2026-09-30T00:00:00+09:00",
        "dateModified": "2026-09-30T00:00:00+09:00",
        "inLanguage": "ja",
        "mainEntityOfPage": "https://croud-travel.pages.dev/winter-hiroshima-tomonoura-onsen-setouchi-taimeshi-taoshitagyu-stay",
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
              "name": "鞆の浦温泉　汀邸　遠音近音（みぎわてい　をちこち）",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/111259/111259.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F111259%2F111259.html",
              "priceRange": "¥38,500〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "広島県",
                "addressLocality": "福山市鞆町",
                "streetAddress": "福山市鞆町鞆629",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.45",
                "reviewCount": 368
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Hotel",
              "name": "鞆の浦温泉　景勝館　漣亭",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/7099/7099.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7099%2F7099.html",
              "priceRange": "¥16,500〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "広島県",
                "addressLocality": "福山市鞆町",
                "streetAddress": "福山市鞆町鞆421",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.17",
                "reviewCount": 978
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Hotel",
              "name": "鞆の浦温泉　ホテル鴎風亭",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/74580/74580.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F74580%2F74580.html",
              "priceRange": "¥22,000〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "広島県",
                "addressLocality": "福山市鞆町",
                "streetAddress": "福山市鞆町鞆136",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.54",
                "reviewCount": 898
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Hotel",
              "name": "ＮＩＰＰＯＮＩＡ　鞆　港町",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/188880/188880.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188880%2F188880.html",
              "priceRange": "¥19,640〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "広島県",
                "addressLocality": "福山市鞆町",
                "streetAddress": "福山市鞆町鞆595",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.63",
                "reviewCount": 8
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Hotel",
              "name": "潮待ちホテル　Ｓｈｉｏｍａｃｈｉ　ＨＯＴＥＬ",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/177742/177742.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177742%2F177742.html",
              "priceRange": "¥16,500〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "広島県",
                "addressLocality": "福山市鞆町",
                "streetAddress": "福山市鞆町鞆879-1",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.68",
                "reviewCount": 122
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
            "name": "鞆の浦が「潮待ちの港」と呼ばれる理由と歴史的な見どころは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "瀬戸内海の中央部に位置する鞆の浦は、満潮時に東西から流れ込む潮流がこの地でぶつかり、干潮時には東西へと分かれて流れ出すという特殊な地理的条件にあります。帆船の時代、船乗りたちは潮の流れが変わるのを待つために必ず鞆の浦に船を寄せたことから「潮待ちの港」と呼ばれるようになりました。安政6年（1859年）に建てられた港のシンボル「常夜燈」をはじめ、船を着ける石段「雁木（がんぎ）」、坂本龍馬率いる海援隊のいろは丸事件の談判跡など、江戸時代の港湾施設と町並みが完全な形で現存する日本唯一の港町として日本遺産に認定されています。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の鞆の浦で味わうべき名物グルメ「寒真鯛」と「保命酒」とは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "瀬戸内海の激しい潮流にもまれて育つ真鯛は、初冬の11月から12月にかけて越冬に備えてたっぷりと脂を蓄え、「寒真鯛（かんまだい）」として最も美味しい旬を迎えます。ふっくらと炊き上げた「鯛めし」や、ゴマだれで和えた刺身に熱々の鯛出汁を注ぐ「鯛茶漬け」、甘辛く炊いた「鯛の兜煮」は絶品です。また「保命酒（ほうめいしゅ）」は、もち米と麹で造る甘い原酒に丁子や高麗人参など十六種の和漢薬草を漬け込んだ鞆の浦発祥の伝統薬味酒。冷え込む初冬の体を芯から温めてくれる滋養酒として親しまれています。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の鞆の浦の気候・気温とおすすめの服装は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "鞆の浦は温暖な瀬戸内海式気候に属し、雨や雪が少なく晴天率が高いのが特徴です。11月の平均気温は約12〜16℃、12月は約7〜11℃と、冬でも比較的穏やかで過ごしやすい気候です。ただし海沿いの港町のため、夕暮れ時や夜間、早朝の散策時には海風が冷たく感じられます。風を通さないトレンチコートや軽めのダウンジャケット、首元を温めるストールを用意しておくと、快適に港町の散策や露天風呂を楽しめます。"
            }
          },
          {
            "@type": "Question",
            "name": "福山駅からのアクセス方法と周辺観光の回り方は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "JR山陽新幹線・山陽本線の「福山駅」南口から、鞆鉄バス（鞆港行き）で約30分（運賃560円・日中約15分間隔で運行）。車の場合は山陽自動車道「福山西IC」または「福山東IC」から約30〜35分です。鞆の浦の港町は歩いて回れるコンパクトな広さのため、徒歩での散策が最も適しています。常夜燈、太田家住宅、福禅寺対潮楼（窓枠が額縁のようになる絶景）、そして市営渡船で約5分のパワースポット「仙酔島」へのミニクルーズを組み合わせるのがおすすめです。"
            }
          },
          {
            "@type": "Question",
            "name": "初冬の鞆の浦温泉のお湯の特徴や泉質・効能は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "鞆の浦温泉は、ラドン（放射能泉）を豊富に含む単純弱放射能冷鉱泉です。無色透明でさらりとした肌触りながら、入浴するとラドンが血行を強力に促進し、新陳代謝を活性化して神経痛や筋肉痛、冷え性を和らげてくれます。湯上がり後も体が芯からぽかぽかと温まり、湯冷めしにくいのが初冬の季節にぴったりの特徴です。"
            }
          }
        ]
      }
    ]
  };

  const faqList = [
  {
    "q": "鞆の浦が「潮待ちの港」と呼ばれる理由と歴史的な見どころは？",
    "a": "瀬戸内海の中央部に位置する鞆の浦は、満潮時に東西から流れ込む潮流がこの地でぶつかり、干潮時には東西へと分かれて流れ出すという特殊な地理的条件にあります。帆船の時代、船乗りたちは潮の流れが変わるのを待つために必ず鞆の浦に船を寄せたことから「潮待ちの港」と呼ばれるようになりました。安政6年（1859年）に建てられた港のシンボル「常夜燈」をはじめ、船を着ける石段「雁木（がんぎ）」、坂本龍馬率いる海援隊のいろは丸事件の談判跡など、江戸時代の港湾施設と町並みが完全な形で現存する日本唯一の港町として日本遺産に認定されています。"
  },
  {
    "q": "11月・12月の鞆の浦で味わうべき名物グルメ「寒真鯛」と「保命酒」とは？",
    "a": "瀬戸内海の激しい潮流にもまれて育つ真鯛は、初冬の11月から12月にかけて越冬に備えてたっぷりと脂を蓄え、「寒真鯛（かんまだい）」として最も美味しい旬を迎えます。ふっくらと炊き上げた「鯛めし」や、ゴマだれで和えた刺身に熱々の鯛出汁を注ぐ「鯛茶漬け」、甘辛く炊いた「鯛の兜煮」は絶品です。また「保命酒（ほうめいしゅ）」は、もち米と麹で造る甘い原酒に丁子や高麗人参など十六種の和漢薬草を漬け込んだ鞆の浦発祥の伝統薬味酒。冷え込む初冬の体を芯から温めてくれる滋養酒として親しまれています。"
  },
  {
    "q": "11月・12月の鞆の浦の気候・気温とおすすめの服装は？",
    "a": "鞆の浦は温暖な瀬戸内海式気候に属し、雨や雪が少なく晴天率が高いのが特徴です。11月の平均気温は約12〜16℃、12月は約7〜11℃と、冬でも比較的穏やかで過ごしやすい気候です。ただし海沿いの港町のため、夕暮れ時や夜間、早朝の散策時には海風が冷たく感じられます。風を通さないトレンチコートや軽めのダウンジャケット、首元を温めるストールを用意しておくと、快適に港町の散策や露天風呂を楽しめます。"
  },
  {
    "q": "福山駅からのアクセス方法と周辺観光の回り方は？",
    "a": "JR山陽新幹線・山陽本線の「福山駅」南口から、鞆鉄バス（鞆港行き）で約30分（運賃560円・日中約15分間隔で運行）。車の場合は山陽自動車道「福山西IC」または「福山東IC」から約30〜35分です。鞆の浦の港町は歩いて回れるコンパクトな広さのため、徒歩での散策が最も適しています。常夜燈、太田家住宅、福禅寺対潮楼（窓枠が額縁のようになる絶景）、そして市営渡船で約5分のパワースポット「仙酔島」へのミニクルーズを組み合わせるのがおすすめです。"
  },
  {
    "q": "初冬の鞆の浦温泉のお湯の特徴や泉質・効能は？",
    "a": "鞆の浦温泉は、ラドン（放射能泉）を豊富に含む単純弱放射能冷鉱泉です。無色透明でさらりとした肌触りながら、入浴するとラドンが血行を強力に促進し、新陳代謝を活性化して神経痛や筋肉痛、冷え性を和らげてくれます。湯上がり後も体が芯からぽかぽかと温まり、湯冷めしにくいのが初冬の季節にぴったりの特徴です。"
  }
];

  const hotelCards = [
            {
              id: 1,
              name: "鞆の浦温泉　汀邸　遠音近音（みぎわてい　をちこち）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/111259/111259.jpg",
              rating: 4.45,
              reviews: 368,
              price: "¥38,500〜",
              access: "福山駅よりバス又はタクシーにて30分。広島空港より車で約60分。山陽自動車道福山東ＩＣより車で約40分。",
              special: "全室オーシャンビューの温泉露天風呂付客室で贅沢なひとときをお過ごし下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F111259%2F111259.html",
              story: "鞆の浦の海辺に静かに佇み、全室に温泉露天風呂を備えた大人のための極上リゾート旅館「汀邸 遠音近音（みぎわてい をちこち）」。かつてシーボルトや十返舎一九も宿泊した歴史ある宿の跡地に建ち、江戸時代の趣を残す梁や格子と、洗練されたモダンラグジュアリーが見事に融合しています。客室のテラスに設けられた客室露天風呂からは、穏やかにさざめく波音とともに初冬の海を望み、時間とともに移ろう仙酔島の陰影を独占する贅沢な湯浴みが叶います。夕食は瀬戸内の旬の味覚を極めた創作和会席。鞆の浦名物の鯛料理を中心に、脂が乗り切った寒真鯛のお造りや潮汁、そして香ばしい土鍋鯛めしが供されます。さらに柔らかくジューシーな広島牛や峠下牛の炭火焼きが華を添え、五感を刺激する至福の美食時間を演出してくれます。",
              roomTip: "瀬戸内海を正面に望むオーシャンビュー温泉露天風呂付き客室。初冬の朝、海靄の向こうから昇る柔らかな朝日の光に包まれる時間は至福のひとときです。",
              gourmetTip: "「初冬の厳選鯛会席＆ブランド牛ステーキ」。鯛の骨から丁寧に取った出汁で炊き上げる土鍋鯛めしは、おこげの芳ばしさと鯛のふっくらした甘みが絶品。",
              highlights: [
                "全室オーシャンビュー温泉露天風呂付き＆波音に包まれる上質な大人の隠れ家リゾート",
                "土鍋で炊き上げる名物寒真鯛の鯛めし＆厳選ブランド牛ステーキの極上ペアリング",
                "シーボルトゆかりの歴史ある地に佇む宿＆初冬の海靄を眺める優雅な朝露天"
              ]
            },
            {
              id: 2,
              name: "鞆の浦温泉　景勝館　漣亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7099/7099.jpg",
              rating: 4.17,
              reviews: 978,
              price: "¥16,500〜",
              access: "福山駅～予約制シャトルバス1日3便12：00／14：45／16：15　福山東IC・福山西IC共に車で30分",
              special: "【2024年3月全館リニューアルオープン】鞆の浦散策に最適な場所に立地する、料理とおもてなし自慢の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7099%2F7099.html",
              story: "「潮待ちの港」のシンボルである弁天島を目の前に望み、温もりあるおもてなしと絶景露天風呂で愛される海辺の湯宿「景勝館 漣亭（さざなみてい）」。ロビーに一歩足を踏み入れると、大きなガラス窓いっぱいに瀬戸内海の多島美が広がり、旅の疲れを一瞬で忘れさせてくれます。展望大浴場や露天風呂からは、初冬の夕暮れ時に空と海が紫から茜色へと移り変わる奇跡のマジックアワーを心ゆくまで堪能できます。夕食は創業以来こだわり抜かれた地魚料理会席。鞆の浦港で水揚げされた新鮮な小魚のお造りや唐揚げをはじめ、冬に旨味が増す寒真鯛の兜煮、そして広島が誇るブランド牛の陶板焼きなど、滋味豊かな海と山の幸がテーブルを彩ります。夕食後に振る舞われる特製保命酒のサービスも、旅情を心地よく深めてくれます。",
              roomTip: "海側に面した和室または和モダン客室。窓辺の椅子に腰掛け、行き交う連絡船やかもめの姿を眺めながら静かな時間を過ごせます。",
              gourmetTip: "「名物鯛荒炊きと瀬戸内地魚姿造り会席」。甘辛い秘伝のタレでふっくら照り煮にした鯛の兜煮は、ご飯もお酒も進む伝統の逸品。",
              highlights: [
                "弁天島を目の前に望む絶景展望露天風呂＆名物鯛の兜煮と朝獲れ地魚会席の温かいおもてなし",
                "茜色に染まる瀬戸内海マジックアワー鑑賞＆食後の伝統薬草酒「保命酒」サービス",
                "仙酔島行き渡船場まで徒歩すぐ＆温もりあふれる接客と行き届いた心地よさ"
              ]
            },
            {
              id: 3,
              name: "鞆の浦温泉　ホテル鴎風亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/74580/74580.jpg",
              rating: 4.54,
              reviews: 898,
              price: "¥22,000〜",
              access: "福山駅南口～予約制シャトルバス1日3便12：00／14：45／16：15　福山東IC・福山西IC共に車で30分",
              special: "2022年3月　「2タイプのスイートルーム」　「プレミアムラウンジ」がOPEN！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F74580%2F74580.html",
              story: "鞆の浦の海を眼下に望む高台に建ち、エリア随一のパノラマビューを誇る格式高き名宿「ホテル鴎風亭」。最上階の屋上に設けられた展望露天風呂「波の上の湯船」は、まるで瀬戸内海と一体になったかのような圧倒的なインフィニティ体験を提供します。澄み渡る初冬の冷気の中、心地よいラジウム温泉に肩まで浸かり、遠く四国の山並みや仙酔島の大パノラマを見渡す時間はまさに極楽。料理自慢の宿としても名高く、料理人が伝統の技で仕立てる会席料理は華やかそのもの。瀬戸内寒真鯛の薄造りや鯛しゃぶしゃぶ、サザエのつぼ焼き、さらにきめ細やかなサシが入った峠下牛ステーキなど、一品一品に妥協のない美食の饗宴が繰り広げられます。広々としたラウンジでの生演奏やエステ施設も充実し、特別な記念日旅行にも最適です。",
              roomTip: "最上階展望フロアのプレミアム客室。遮るもののない瀬戸内海の180度パノラマビューと、初冬の星空を眺めながら贅沢な休日を過ごせます。",
              gourmetTip: "「寒真鯛尽くし会席＆峠下牛陶板焼き」。透き通る鯛の薄造りを特製ポン酢で味わい、出汁にサッとくぐらせる鯛しゃぶの甘みは冬の醍醐味。",
              highlights: [
                "屋上インフィニティ露天風呂から瀬戸内海の多島美パノラマ＆料理長特選の寒真鯛尽くし会席",
                "透き通る寒真鯛薄造りと鯛しゃぶ鍋＆峠下牛陶板焼きの贅沢な美食ディナー",
                "波の上の露天風呂で味わう非日常体験＆記念日やご褒美旅行に最適な格式"
              ]
            },
            {
              id: 4,
              name: "ＮＩＰＰＯＮＩＡ　鞆　港町",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/188880/188880.jpg",
              rating: 4.63,
              reviews: 8,
              price: "¥19,640〜",
              access: "ＪＲ　福山駅南口から５番バスのりば 「鞆の浦」又は、「鞆港」で下車。 どちらのバス停からもフロントまでは徒歩約５分。",
              special: "「なつかしくて、あたらしい」そんな鞆の暮らしを感じられる宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188880%2F188880.html",
              story: "江戸時代から昭和初期にかけて建てられた歴史的商家や町家を、現代の快適性を備えて再生させた分散型ブティックホテル「ＮＩＰＰＯＮＩＡ 鞆 港町」。街全体を一つのホテルに見立て、チェックイン後は石畳の路地を歩いてそれぞれの町家棟へと向かいます。重厚な梁や土壁、格子窓など往時の職人技を色濃く残しながらも、シモンズ製ベッドや上質なヒノキ風呂が設えられ、まるで歴史の登場人物になったかのような静謐な宿泊体験が叶います。夕食は提携する町の名料亭やレストランで味わう地産地消の特別ディナー。初冬の鞆の浦で獲れた旬魚や広島牛を、ワインや地酒とともにゆっくりと堪能できます。観光客が引けた夕暮れ時や早朝の静寂な港町を散策できるのも、この宿ならではの特別な特権です。",
              roomTip: "江戸末期の町家をリノベーションしたメゾネット客室。天井高く吹き抜ける古材の梁と、障子越しに差し込む柔らかな光が格別の風情を醸し出します。",
              gourmetTip: "「鞆の浦港町割烹ディナー」。朝獲れの地魚のお造りや旬の焼き魚、厳選広島牛のグリルなど、職人が目の前で腕を振るう至極のコース。",
              highlights: [
                "日本遺産の歴史的町家を再生した分散型ホテル＆江戸の風情薫るプライベート上質ステイ",
                "職人技が光る梁や格子窓の美空間＆提携名割烹で味わう地産地消ディナー",
                "観光客が去った静寂の夜の港町散策＆ヒノキ風呂で癒やされる大人の休日"
              ]
            },
            {
              id: 5,
              name: "潮待ちホテル　Ｓｈｉｏｍａｃｈｉ　ＨＯＴＥＬ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/177742/177742.jpg",
              rating: 4.68,
              reviews: 122,
              price: "¥16,500〜",
              access: "福山駅南口～予約制シャトルバス1日3便12：00／14：45／16：15　福山東IC・福山西IC共に車で30分",
              special: "◎2025年12月新棟オープン◎港町鞆の浦に佇む歴史的商家や町屋を再生した分散型リノベーションホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177742%2F177742.html",
              story: "鞆の浦の港町に点在する複数の歴史的建物をリノベーションし、「海と歴史と人が交差するサロン」をコンセプトに誕生した「潮待ちホテル Ｓｈｉｏｍａｃｈｉ ＨＯＴＥＬ」。明治期の商家や昭和の洋館など、個性あふれる建物ごとに異なるストーリーが息づいています。客室は木の温もりと洗練されたインテリアが調和し、プライベート感あふれる落ち着いた空間が広がります。夕食は瀬戸内の素材を知り尽くしたシェフが手がける創作イタリアンや地魚和会席。地元の漁師から直接仕入れる新鮮な寒真鯛や小魚のカルパッチョ、峠下牛の炭火ローストなど、現代的なアプローチで素材本来の旨味を最大限に引き出しています。港の常夜燈まで徒歩数分という絶好の立地で、初冬の夜景散歩も心ゆくまで楽しめます。",
              roomTip: "歴史的町並みを見下ろす広々としたスイートルーム。アンティーク家具に囲まれ、レコードの音色に耳を傾けながら大人の夜を過ごせます。",
              gourmetTip: "「瀬戸内初冬の旬魚と峠下牛のスペシャリテ」。素材の鮮度を生かした地魚料理と、旨味の濃い峠下牛のローストが織りなす絶品マリアージュ。",
              highlights: [
                "港の常夜燈至近＆個性豊かなリノベーション建築と瀬戸内旬魚・峠下牛のモダンキュイジーヌ",
                "アンティークに囲まれた洗練スイート＆朝獲れ地魚と峠下牛ローストの贅沢な夕べ",
                "アートと歴史が響き合うサロン空間＆常夜燈のライトアップ散策への抜群アクセス"
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
      <header className="bg-gradient-to-r from-sky-950 via-indigo-950 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold tracking-wide border border-sky-400/30">
            <Anchor className="w-3.5 h-3.5" />
            11月・12月初冬の瀬戸内名湯＆海幸特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {metadata.title as string}
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
            潮待ちの港に佇む江戸の常夜燈と、夕暮れに染まる仙酔島の静寂。
            越冬の脂を蓄えた極上の寒真鯛、土鍋鯛めしと幻の峠下牛ステーキ、伝統薬草酒「保命酒」に心ほどける初冬の旅。
          </p>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月鞆の浦温泉】瀬戸内海初冬の夕暮れと潮待ちの港情緒！名宿5選","item":"https://croud-travel.pages.dev/winter-hiroshima-tomonoura-onsen-setouchi-taimeshi-taoshitagyu-stay"}]}) }}
      />

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-4">
          <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm tracking-wide">
            <Anchor className="w-4 h-4 text-indigo-700" />
            潮待ちの港町が魅せる初冬の静寂と歴史情緒
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            初冬の澄んだ大気に包まれる11月中旬から12月、瀬戸内海のほぼ中央に位置する広島県福山市の「鞆の浦（とものうら）」は、一年の中で最も美しい夕景と落ち着いた風情に出会える季節を迎えます。万葉集の歌人・大伴旅人が歌に詠み、江戸時代には潮の流れを待つ北前船や朝鮮通信使で賑わったこの港町には、高さ5.5メートルのシンボル「常夜燈」や波止場、格子戸の古い町家が当時の姿のまま残されています。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            初冬の鞆の浦の魅力は、観光客で賑わう昼間が過ぎ去った夕暮れ時から始まります。穏やかな海原の向こうに浮かぶ仙酔島が夕陽の茜色に染まり、港の石畳に灯籠の明かりが灯るマジックアワーは、時が止まったかのような幻想的な美しさ。冷えた体を温めるのは、ラジウムを豊富に含み体の芯まで温めてくれる鞆の浦温泉の展望露天風呂です。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            そして冬の旅のハイライトは、瀬戸内海が育んだ滋味あふれる美食の数々。急流で身を引き締め、初冬に最も脂が乗る「寒真鯛」を香ばしく炊き上げた名物「鯛めし」や濃厚な潮汁、ネブトやサヨリなど朝獲れ小魚の姿造り、さらに広島県竹原の自然が育む幻の黒毛和牛「峠下牛（たおしたぎゅう）」のステーキ。江戸初期から伝わる十六種の和漢生薬を漬け込んだ滋養の酒「保命酒」とともに、心まで温まる瀬戸内の初冬旅をご案内します。
          </p>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-indigo-900 font-bold text-sm tracking-wide bg-indigo-100/60 px-3 py-1 rounded-full">
              <Landmark className="w-4 h-4 text-indigo-800" />
              厳選5名宿のご案内
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              夕暮れの瀬戸内絶景と寒真鯛・峠下牛を味わう鞆の浦の名宿
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
                      <span className="inline-block text-xs font-bold text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded-full mb-1">
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
                      <span className="text-sm sm:text-base font-extrabold text-indigo-900">
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

                      <div className="space-y-2 pt-2 border-t border-stone-100">
                        <div className="text-xs text-stone-700 bg-stone-50 p-2.5 rounded-xl">
                          <span className="font-bold text-indigo-950 block mb-0.5">客室滞在のポイント：</span>
                          {hotel.roomTip}
                        </div>
                        <div className="text-xs text-stone-700 bg-indigo-50/50 p-2.5 rounded-xl border border-indigo-100/50">
                          <span className="font-bold text-indigo-950 block mb-0.5">初冬の味覚おすすめ：</span>
                          {hotel.gourmetTip}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-1.5 pt-2">
                    <h4 className="text-xs font-bold text-stone-800 tracking-wider">
                      この宿の初冬ステイおすすめポイント
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                      {hotel.highlights.map((hl, hlIdx) => (
                        <li key={hlIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA & Access */}
                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-[11px] text-stone-500 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span>{hotel.access}</span>
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-indigo-900 hover:bg-indigo-950 text-white text-xs sm:text-sm font-bold rounded-xl transition duration-200 shadow-xs"
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

        {/* Local Gourmet Section */}
        <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-sky-950 text-white rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-sky-300 text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Utensils className="w-4 h-4 text-sky-300" />
            初冬の鞆の浦美食手帖
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            11月・12月の鞆の浦で味わい尽くす寒真鯛・峠下牛・伝統保命酒
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Waves className="w-4 h-4 text-sky-400" />
                越冬の脂が乗る「寒真鯛」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                初冬の瀬戸内海で揉まれた真鯛は、脂乗りと身の締まりが最高潮に達します。土鍋でふっくら炊き上げる鯛めし、香ばしい皮目を味わう焼き霜造り、そして鯛の頭を甘辛く炊いた伝統の兜煮は現地ならではの贅沢です。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-sky-400" />
                幻の黒毛和牛「峠下牛」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                広島県竹原の豊かな自然と清流で育てられる「峠下牛（たおしたぎゅう）」。雌牛のみを長期肥育することで、融点の低い上質な脂と赤身本来の深い甘みを実現。ステーキや陶板焼きでその芳醇な旨味が際立ちます。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Wine className="w-4 h-4 text-sky-400" />
                伝統薬味酒「保命酒」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                江戸時代初期、大阪の医師・中村吉兵衛が鞆の浦で造り始めた薬味酒。十六種の和漢植物エキスが溶け込んだ自然な甘みとスパイシーな香りが特徴。冷え込む初冬の体を内側からポカポカと温めてくれます。
              </p>
            </div>
          </div>
        </section>

        {/* 1 Night 2 Days Itinerary Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-indigo-900 text-sm font-bold bg-indigo-50 px-3 py-1 rounded-full">
            <Footprints className="w-4 h-4" />
            おすすめ滞在プラン
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の潮待ち港町と温泉を満喫する1泊2日モデルコース
          </h2>
          <div className="space-y-6 pt-2">
            <div className="border-l-2 border-indigo-600 pl-4 sm:pl-6 space-y-2">
              <div className="inline-block bg-indigo-100 text-indigo-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                1日目：福山駅到着から古い町並み散策・夕暮れの仙酔島絶景と鯛料理宴
              </div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                常夜燈と対潮楼を巡り、茜色に染まる海を眺めながら温泉と鯛づくし会席を満喫
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                正午前に山陽新幹線福山駅に到着。駅前から路線バスで鞆の浦へ。まずは福禅寺「対潮楼」を訪れ、座敷から額縁のように広がる弁天島と仙酔島のパノラマに息を呑みます。名物の鯛茶漬けで昼食をとった後、江戸時代の面影を残す石畳の路地や保命酒の蔵元を散策。15時に温泉宿へチェックイン。ラジウム泉の露天風呂に浸かりながら、夕暮れの海が茜色から深い藍色へと移ろう絶景を鑑賞。夕食は寒真鯛の薄造り、鯛の兜煮、土鍋鯛めし、そして峠下牛ステーキに舌鼓を打ちます。
              </p>
            </div>

            <div className="border-l-2 border-indigo-600 pl-4 sm:pl-6 space-y-2">
              <div className="inline-block bg-indigo-100 text-indigo-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                2日目：常夜燈の静かな朝散歩・市営渡船でパワースポット仙酔島へ
              </div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                朝日に輝く港町の朝風呂を堪能し、五色岩が続く神秘の島で自然の息吹を感じる
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                早朝、観光客のいない静寂な港へ出かけ、朝日に照らされる常夜燈と石段の雁木を散歩。宿に戻って朝風呂に入り、鯛のアラで出汁をとった熱々の味噌汁と和朝食をいただきます。チェックアウト後、市営渡船「平成いろは丸」に乗ってわずか5分の仙酔島へ。日本で唯一といわれる「五色岩」が連なる海岸遊歩道を歩き、初冬の澄んだ瀬戸内海の風と自然のエネルギーをチャージ。鞆の浦に戻り、保命酒や鯛味噌のお土産を購入して帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-indigo-900 text-sm font-bold bg-indigo-50 px-3 py-1 rounded-full">
            <Anchor className="w-4 h-4" />
            初冬の鞆の浦・おみやげ＆港町散策手帖
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            歴史薫る港町で手に入れたい初冬の特産品と名物みやげ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Wine className="w-4 h-4 text-indigo-600" />
                伝統の保命酒蔵元めぐりと保命酒スイーツ
              </h3>
              <p>
                鞆の浦の古い町並みには、江戸時代から続く保命酒（ほうめいしゅ）の蔵元が現在も4軒残っています。重厚な格子戸の店先では、各蔵元ごとに微妙に異なる和漢薬草の風味や甘みの試飲ができ、お気に入りの一本を選ぶのが旅の楽しみ。また、保命酒の原酒を使ったパウンドケーキや保命酒飴、保命酒ジェラートなど、旅の途中に手軽に楽しめるご当地スイーツも豊富に揃っています。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Waves className="w-4 h-4 text-indigo-600" />
                名物「鯛味噌」と朝獲れ小魚の練り物「ガス天」
              </h3>
              <p>
                鞆の浦の家庭で古くから愛されてきた「鯛味噌」は、ほぐした鯛の身を甘口の味噌とみりんでじっくり練り上げた逸品。熱々のご飯に乗せたり焼きおにぎりに塗ると香ばしい鯛の風味が広がります。さらに、瀬戸内海の小魚（ネブトなど）を骨ごとすり身にして揚げた名物「ガス天」や「鯛ちくわ」は、プリプリとした歯ごたえと魚本来の濃厚な旨味が詰まった最高のおつまみです。
              </p>
            </div>
          </div>
        </section>

        {/* Climate & Access Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-sky-900 text-sm font-bold bg-sky-50 px-3 py-1 rounded-full">
            <Sun className="w-4 h-4" />
            11月・12月の気候・服装・快適アクセス案内
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の鞆の浦旅行のポイントと防寒・移動のコツ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-indigo-600" />
                温暖な瀬戸内気候と海風対策
              </h3>
              <p>
                鞆の浦は冬でも比較的暖かく雪の心配はほとんどありませんが、海辺に面しているため夕方から朝にかけては冷たい海風が吹き抜けます。日中はセーターやジャケットで過ごせますが、朝夕の港散策や船のデッキでは風を通さないウィンドブレーカーやダウン、ストールが重宝します。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-indigo-600" />
                新幹線福山駅からの公共交通アクセス
              </h3>
              <p>
                新幹線「のぞみ」や「さくら」が停車するJR福山駅南口から鞆鉄バスで約30分。日中は1時間に3〜4本運行しておりアクセスは極めて良好です。鞆の浦の歴史的町並みは道路が狭いため、車よりもバスでの移動がスムーズ。温泉街内は徒歩で隅々まで観光できます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-indigo-900 text-sm font-bold bg-indigo-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の鞆の浦温泉旅行 FAQ
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 flex items-start gap-2">
                  <span className="text-indigo-800 shrink-0 font-black">Q.</span>
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
        <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-sky-300" />
              あわせて読みたい瀬戸内・山陽の冬海幸・温泉特集
            </h3>
            <p className="text-xs sm:text-sm text-sky-200">
              冬の味覚と絶景オーシャンビュー露天風呂を堪能する厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-hiroshima-miyajima-onsen-kaki-oyster-seto-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-sky-300 bg-sky-400/20 px-2 py-0.5 rounded-full inline-block">広島・安芸宮島</span>
              <h4 className="text-xs font-bold text-white group-hover:text-sky-200 transition line-clamp-2">
                厳島神社初冬夕暮れ＆極上焼き牡蠣・宮島温泉名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                大鳥居の荘厳な佇まいと旬を迎える大粒広島牡蠣、厳島神社ライトアップを満喫する旅。
              </p>
            </Link>

            <Link 
              href="/winter-tokushima-naruto-onsen-uzushio-naruto-tai-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-sky-300 bg-sky-400/20 px-2 py-0.5 rounded-full inline-block">徳島・鳴門海峡</span>
              <h4 className="text-xs font-bold text-white group-hover:text-sky-200 transition line-clamp-2">
                鳴門海峡渦潮絶景＆鳴門真鯛・鳴門わかめ名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                鳴門海峡を望むオーシャンビュー展望露天風呂と、激流で引き締まった名物鳴門鯛を味わう冬旅。
              </p>
            </Link>

            <Link 
              href="/winter-okayama-yubara-onsen-sunayu-hiruzen-wagyu-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-sky-300 bg-sky-400/20 px-2 py-0.5 rounded-full inline-block">岡山・美作三湯</span>
              <h4 className="text-xs font-bold text-white group-hover:text-sky-200 transition line-clamp-2">
                湯原温泉 砂湯露天＆蒜山高原和牛・冬野菜名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                西の横綱と称される天然自噴露天風呂「砂湯」と、初冬の蒜山高原・極上千屋牛を味わう秘湯旅。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-hiroshima-tomonoura-onsen-setouchi-taimeshi-taoshitagyu-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
