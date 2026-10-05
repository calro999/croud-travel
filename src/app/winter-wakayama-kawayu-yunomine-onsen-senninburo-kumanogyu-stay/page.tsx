import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map, Heart, ShoppingBag, Shield
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月熊野本宮】冬の風物詩・大塔川仙人風呂オープンと世界遺産つぼ湯・熊野牛会席＆名物温泉粥・熊野三山を巡る名宿5選",
  description: "11月中旬から12月の初冬、世界遺産・熊野古道の聖地に抱かれた和歌山県田辺市本宮町は、霊峰熊野の山々が静けさに包まれ、清流大塔川から白い湯煙が立ちのぼる格別の季節を迎えます。毎年12月1日にオープンする冬の風物詩「仙人風呂」は、川底から湧き出る70℃以上の天然温泉を大塔川の清流で温度調整した、川そのものが広大な混浴大露天風呂。澄み渡る初冬の青空の下、また夜には満天の星を仰ぎながら水着や湯浴み着で浸かる開放感は日本屈指の体験です。さらに車で5分ほどの湯の峰温泉には、日本最古の湯として世界遺産に登録された「つぼ湯」が鎮座し、日に七度色が変わると伝わる神秘の白濁硫黄泉が旅人を魅了します。夕食には紀州の大自然が育んだ極上の霜降りブランド牛「熊野牛」のすき焼きや陶板ステーキ、朝食には源泉でじっくり炊き上げた滋味あふれる「名物温泉粥」。初冬の熊野本宮大社・大斎原参拝と合わせ、心洗われる神秘の温泉リトリートを約束する厳選5宿を徹底ガイドします。",
  keywords: '川湯温泉 仙人風呂, 湯の峰温泉 つぼ湯 宿泊, 熊野本宮 温泉 旅館, 熊野牛 すき焼き, 温泉粥 湯の峰, 世界遺産 熊野古道 温泉, わたらせ温泉 露天風呂, 11月 12月 和歌山旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-wakayama-kawayu-yunomine-onsen-senninburo-kumanogyu-stay/"
  },
  openGraph: {
    title: "【11・12月熊野本宮】冬の風物詩・大塔川仙人風呂オープンと世界遺産つぼ湯・熊野牛会席＆名物温泉粥・熊野三山を巡る名宿5選",
    description: "11月中旬から12月の初冬、世界遺産・熊野古道の聖地に抱かれた和歌山県田辺市本宮町は、霊峰熊野の山々が静けさに包まれ、清流大塔川から白い湯煙が立ちのぼる格別の季節を迎えます。毎年12月1日にオープンする冬の風物詩「仙人風呂」は、川底から湧き出る70℃以上の天然温泉を大塔川の清流で温度調整した、川そのものが広大な混浴大露天風呂。澄み渡る初冬の青空の下、また夜には満天の星を仰ぎながら水着や湯浴み着で浸かる開放感は日本屈指の体験です。さらに車で5分ほどの湯の峰温泉には、日本最古の湯として世界遺産に登録された「つぼ湯」が鎮座し、日に七度色が変わると伝わる神秘の白濁硫黄泉が旅人を魅了します。夕食には紀州の大自然が育んだ極上の霜降りブランド牛「熊野牛」のすき焼きや陶板ステーキ、朝食には源泉でじっくり炊き上げた滋味あふれる「名物温泉粥」。初冬の熊野本宮大社・大斎原参拝と合わせ、心洗われる神秘の温泉リトリートを約束する厳選5宿を徹底ガイドします。",
    url: 'https://croud-travel.com/winter-wakayama-kawayu-yunomine-onsen-senninburo-kumanogyu-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '大塔川仙人風呂と熊野本宮の初冬温泉風景'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月熊野本宮】冬の風物詩・大塔川仙人風呂オープンと世界遺産つぼ湯・熊野牛会席＆名物温泉粥・熊野三山を巡る名宿5選",
    description: "11月中旬から12月の初冬、世界遺産・熊野古道の聖地に抱かれた和歌山県田辺市本宮町は、霊峰熊野の山々が静けさに包まれ、清流大塔川から白い湯煙が立ちのぼる格別の季節を迎えます。毎年12月1日にオープンする冬の風物詩「仙人風呂」は、川底から湧き出る70℃以上の天然温泉を大塔川の清流で温度調整した、川そのものが広大な混浴大露天風呂。澄み渡る初冬の青空の下、また夜には満天の星を仰ぎながら水着や湯浴み着で浸かる開放感は日本屈指の体験です。さらに車で5分ほどの湯の峰温泉には、日本最古の湯として世界遺産に登録された「つぼ湯」が鎮座し、日に七度色が変わると伝わる神秘の白濁硫黄泉が旅人を魅了します。夕食には紀州の大自然が育んだ極上の霜降りブランド牛「熊野牛」のすき焼きや陶板ステーキ、朝食には源泉でじっくり炊き上げた滋味あふれる「名物温泉粥」。初冬の熊野本宮大社・大斎原参拝と合わせ、心洗われる神秘の温泉リトリートを約束する厳選5宿を徹底ガイドします。",
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function WakayamaKawayuYunomineWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-wakayama-kawayu-yunomine-onsen-senninburo-kumanogyu-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.com/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.com/"
        },
        "headline": "【11・12月熊野本宮】冬の風物詩・大塔川仙人風呂オープンと世界遺産つぼ湯・熊野牛会席＆名物温泉粥・熊野三山を巡る名宿5選",
        "description": "11月中旬から12月の初冬、世界遺産・熊野古道の聖地に抱かれた和歌山県田辺市本宮町は、霊峰熊野の山々が静けさに包まれ、清流大塔川から白い湯煙が立ちのぼる格別の季節を迎えます。毎年12月1日にオープンする冬の風物詩「仙人風呂」は、川底から湧き出る70℃以上の天然温泉を大塔川の清流で温度調整した、川そのものが広大な混浴大露天風呂。澄み渡る初冬の青空の下、また夜には満天の星を仰ぎながら水着や湯浴み着で浸かる開放感は日本屈指の体験です。さらに車で5分ほどの湯の峰温泉には、日本最古の湯として世界遺産に登録された「つぼ湯」が鎮座し、日に七度色が変わると伝わる神秘の白濁硫黄泉が旅人を魅了します。夕食には紀州の大自然が育んだ極上の霜降りブランド牛「熊野牛」のすき焼きや陶板ステーキ、朝食には源泉でじっくり炊き上げた滋味あふれる「名物温泉粥」。初冬の熊野本宮大社・大斎原参拝と合わせ、心洗われる神秘の温泉リトリートを約束する厳選5宿を徹底ガイドします。",
        "datePublished": "2026-09-30T00:00:00+09:00",
        "dateModified": "2026-09-30T00:00:00+09:00",
        "inLanguage": "ja",
        "mainEntityOfPage": "https://croud-travel.com/winter-wakayama-kawayu-yunomine-onsen-senninburo-kumanogyu-stay",
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
              "name": "川湯温泉　冨士屋",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/1256/1256.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1256%2F1256.html",
              "priceRange": "¥15,000〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "和歌山県",
                "addressLocality": "田辺市本宮町",
                "streetAddress": "田辺市本宮町川湯1452",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.45",
                "reviewCount": 126
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Hotel",
              "name": "川湯温泉　山水館　川湯みどりや",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/38558/38558.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38558%2F38558.html",
              "priceRange": "¥16,500〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "和歌山県",
                "addressLocality": "田辺市本宮町",
                "streetAddress": "田辺市本宮町川湯13",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.20",
                "reviewCount": 1110
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Hotel",
              "name": "旅館あづまや　＜和歌山県＞",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/129554/129554.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129554%2F129554.html",
              "priceRange": "¥10,890〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "和歌山県",
                "addressLocality": "田辺市本宮町",
                "streetAddress": "田辺市本宮町湯峰122",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.47",
                "reviewCount": 152
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Hotel",
              "name": "湯の峰温泉　　湯の峯荘",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/7873/7873.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7873%2F7873.html",
              "priceRange": "¥14,300〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "和歌山県",
                "addressLocality": "田辺市本宮町",
                "streetAddress": "田辺市本宮町下湯川437",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.53",
                "reviewCount": 580
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Hotel",
              "name": "わたらせ温泉　ホテルささゆり",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/18768/18768.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18768%2F18768.html",
              "priceRange": "¥20,350〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "和歌山県",
                "addressLocality": "田辺市本宮町",
                "streetAddress": "田辺市本宮町渡瀬45-1",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.60",
                "reviewCount": 303
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
            "name": "川湯温泉の「仙人風呂」はいつからオープンし、入浴時の服装や持ち物のルールは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "川湯温泉の冬の風物詩「仙人風呂」は、毎年12月1日から翌年2月末日まで開設されます（天候や河川増水により休止の場合あり）。利用時間は朝6時30分から夜22時までで、利用料金は無料です。混浴露天風呂のため、水着や湯浴み着（ゆあみぎ）、Tシャツ・短パンの着用が必須です。川底は砂利や小石が多いため、脱ぎ履きしやすいウォーターシューズやサンダルを持参すると歩きやすく安心です。夜間は足元が暗くなるため、小型の懐中電灯やスマホのライトがあると便利です。"
            }
          },
          {
            "@type": "Question",
            "name": "世界遺産「湯の峰温泉 つぼ湯」の利用方法と待ち時間、七度変わる泉質の特徴は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「つぼ湯」は世界遺産に登録された世界唯一の入浴できる温泉です。事前予約はできず、湯の峰温泉公衆浴場の番台で受付を行い、受付順に番号札を受け取って利用します。1グループあたり30分交代制です。11月・12月の週末や連休は人気が高く、1〜2時間程度の待ち時間が発生することもあります。泉質は含硫黄-ナトリウム-炭酸水素塩・塩化物泉。日によって、また時間帯によって透明、青白、乳白、エメラルドグリーンなど七度色が変わると言われ、小栗判官が病を癒やしたとされる伝説の奇跡の湯です。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の熊野本宮・川湯・湯の峰エリアの気候と道路状況、スタッドレスタイヤは必要？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "紀伊半島の南部に位置するため、平野部は比較的温暖ですが、川湯・湯の峰エリアは山間部に位置するため11月中旬以降は朝晩の冷え込みが厳しくなり、最低気温が0℃〜5℃程度まで下がります。12月中旬以降、高野龍神スカイラインや十津川経由の山岳ルート（国道168号線・311号線の峠付近）を通る場合は積雪や路面凍結のおそれがあるため、スタッドレスタイヤ（冬用タイヤ）の装着またはチェーン携行が推奨されます。海岸線沿いの白浜・田辺方面から本宮へアクセスする国道311号線は比較的平坦で積雪は少ないですが、早朝や深夜の運転には十分注意してください。"
            }
          },
          {
            "@type": "Question",
            "name": "熊野本宮エリアの名物グルメ「熊野牛」や「温泉粥」の特徴とは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「熊野牛」は、和歌山県特有の豊かな自然と清らかな伏流水で丹精込めて育てられた高級黒毛和牛です。肉質は非常にきめ細やかで、脂の融点が低いため口に含んだ瞬間に上品な甘みと芳醇な香りが広がります。すき焼きやしゃぶしゃぶ、ステーキで味わうのが醍醐味です。また、湯の峰温泉や川湯温泉のアルカリ性単純硫黄泉は飲泉可能で、この新鮮な源泉で白米をじっくり炊き上げた「温泉粥」は、ほんのりとした硫黄の香りとまろやかな塩気、とろりとした食感が特徴で、弱った胃腸を優しく整えてくれます。"
            }
          },
          {
            "@type": "Question",
            "name": "新大阪や名古屋方面からの公共交通機関・車でのアクセス方法と所要時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "電車の場合は、JR新大阪駅から特急「くろしお」でJR紀伊田辺駅まで約2時間10分。田辺駅前から龍神バス（本宮大社行き）に乗車し、約1時間20分〜1時間30分で川湯温泉または湯の峰温泉に到着します。また、名古屋方面からはJR特急「南紀」で新宮駅まで約3時間20分、新宮駅から熊野御坊南海バスで約60分です。車の場合は、阪和自動車道「上富田IC」から国道311号線を経由して約50分。熊野本宮大社を中心に、川湯温泉・湯の峰温泉・わたらせ温泉はいずれも車で5〜10分圏内に集まっており湯めぐりも容易です。"
            }
          }
        ]
      }
    ]
  };

  const faqListItems = [
  {
    "q": "川湯温泉の「仙人風呂」はいつからオープンし、入浴時の服装や持ち物のルールは？",
    "a": "川湯温泉の冬の風物詩「仙人風呂」は、毎年12月1日から翌年2月末日まで開設されます（天候や河川増水により休止の場合あり）。利用時間は朝6時30分から夜22時までで、利用料金は無料です。混浴露天風呂のため、水着や湯浴み着（ゆあみぎ）、Tシャツ・短パンの着用が必須です。川底は砂利や小石が多いため、脱ぎ履きしやすいウォーターシューズやサンダルを持参すると歩きやすく安心です。夜間は足元が暗くなるため、小型の懐中電灯やスマホのライトがあると便利です。"
  },
  {
    "q": "世界遺産「湯の峰温泉 つぼ湯」の利用方法と待ち時間、七度変わる泉質の特徴は？",
    "a": "「つぼ湯」は世界遺産に登録された世界唯一の入浴できる温泉です。事前予約はできず、湯の峰温泉公衆浴場の番台で受付を行い、受付順に番号札を受け取って利用します。1グループあたり30分交代制です。11月・12月の週末や連休は人気が高く、1〜2時間程度の待ち時間が発生することもあります。泉質は含硫黄-ナトリウム-炭酸水素塩・塩化物泉。日によって、また時間帯によって透明、青白、乳白、エメラルドグリーンなど七度色が変わると言われ、小栗判官が病を癒やしたとされる伝説の奇跡の湯です。"
  },
  {
    "q": "11月・12月の熊野本宮・川湯・湯の峰エリアの気候と道路状況、スタッドレスタイヤは必要？",
    "a": "紀伊半島の南部に位置するため、平野部は比較的温暖ですが、川湯・湯の峰エリアは山間部に位置するため11月中旬以降は朝晩の冷え込みが厳しくなり、最低気温が0℃〜5℃程度まで下がります。12月中旬以降、高野龍神スカイラインや十津川経由の山岳ルート（国道168号線・311号線の峠付近）を通る場合は積雪や路面凍結のおそれがあるため、スタッドレスタイヤ（冬用タイヤ）の装着またはチェーン携行が推奨されます。海岸線沿いの白浜・田辺方面から本宮へアクセスする国道311号線は比較的平坦で積雪は少ないですが、早朝や深夜の運転には十分注意してください。"
  },
  {
    "q": "熊野本宮エリアの名物グルメ「熊野牛」や「温泉粥」の特徴とは？",
    "a": "「熊野牛」は、和歌山県特有の豊かな自然と清らかな伏流水で丹精込めて育てられた高級黒毛和牛です。肉質は非常にきめ細やかで、脂の融点が低いため口に含んだ瞬間に上品な甘みと芳醇な香りが広がります。すき焼きやしゃぶしゃぶ、ステーキで味わうのが醍醐味です。また、湯の峰温泉や川湯温泉のアルカリ性単純硫黄泉は飲泉可能で、この新鮮な源泉で白米をじっくり炊き上げた「温泉粥」は、ほんのりとした硫黄の香りとまろやかな塩気、とろりとした食感が特徴で、弱った胃腸を優しく整えてくれます。"
  },
  {
    "q": "新大阪や名古屋方面からの公共交通機関・車でのアクセス方法と所要時間は？",
    "a": "電車の場合は、JR新大阪駅から特急「くろしお」でJR紀伊田辺駅まで約2時間10分。田辺駅前から龍神バス（本宮大社行き）に乗車し、約1時間20分〜1時間30分で川湯温泉または湯の峰温泉に到着します。また、名古屋方面からはJR特急「南紀」で新宮駅まで約3時間20分、新宮駅から熊野御坊南海バスで約60分です。車の場合は、阪和自動車道「上富田IC」から国道311号線を経由して約50分。熊野本宮大社を中心に、川湯温泉・湯の峰温泉・わたらせ温泉はいずれも車で5〜10分圏内に集まっており湯めぐりも容易です。"
  }
];

  const hotelCards = [
            {
              id: 1,
              name: "川湯温泉　冨士屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1256/1256.jpg",
              rating: 4.45,
              reviews: 126,
              price: "¥18,700〜",
              access: "JR新宮駅よりバス1時間。JR紀伊田辺駅からもバス便あり。（ふじや前下車。）名古屋方面　紀勢道大宮大台IC開通しました！",
              special: "河原を掘ればお湯が湧く！世界遺産・熊野古道歩きのお疲れを山野草の中で癒して下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1256%2F1256.html",
              story: "清流大塔川のほとりに佇み、創業以来「日本の宿のぬくもり」を守り続ける川湯温泉の老舗格式宿「川湯温泉 冨士屋」。冬の仙人風呂へは宿から徒歩すぐという絶好のロケーションを誇ります。客室からはエメラルドグリーンに輝く大塔川と対岸の豊かな山並みが広がり、初冬の澄んだ冷気の中で川霧が揺らめく幻想的な光景に出会えます。自家源泉から引くナトリウム-炭酸水素塩・塩化物泉は、肌あたりが柔らかく「美肌の湯」として評判。初冬の夕食には、きめ細やかな霜降りと上品な脂の甘みが際立つ最高ランク「熊野牛」のしゃぶしゃぶやステーキをメインに、紀伊山地の清流が育んだ川魚の塩焼きや手作りの郷土会席が並びます。川のせせらぎに耳を傾けながら、心からほどける贅沢なひとときを過ごせます。",
              roomTip: "清流大塔川を一望する和室または和モダン客室。窓辺の広縁から川向こうの初冬木立と立ち上る湯煙を眺めながら静かな読書や寛ぎに浸れます。",
              gourmetTip: "「特選熊野牛しゃぶしゃぶ会席」。熱々の昆布出汁にサッとくぐらせる極上熊野牛の甘みと、香り高い紀州ポン酢のハーモニーが絶品です。",
              highlights: [
                "大塔川仙人風呂まで徒歩至近＆創業以来の伝統を受け継ぐ格式ある純和風建築",
                "特選霜降り熊野牛しゃぶしゃぶ会席＆大塔川のせせらぎに癒やされるリバービュー客室",
                "熊野本宮大社まで車で約10分＆初冬の川霧と静寂を楽しむ大人の休日"
              ]
            },
            {
              id: 2,
              name: "川湯温泉　山水館　川湯みどりや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38558/38558.jpg",
              rating: 4.20,
              reviews: 1110,
              price: "¥16,500〜",
              access: "大阪から阪和道「南紀田辺IC」経由で約3時間／JR「新宮駅」よりバスで約60分／JR「紀伊田辺駅」よりバスで約120分",
              special: "サウナ付きの源泉かけ流し露天風呂付客室が誕生！心身を癒す上質なひと時をお過ごしください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38558%2F38558.html",
              story: "大塔川の河原に面した広大な混浴露天風呂（女性専用時間帯あり）と、自家源泉かけ流しの内湯を誇る名宿「川湯温泉 山水館 川湯みどりや」。宿の専用露天風呂からそのまま川のせせらぎを間近に感じることができ、12月の仙人風呂シーズンには冬の野趣あふれる湯浴みを存分に楽しめます。温泉はメタケイ酸を豊富に含む弱アルカリ性単純温泉で、湯上がりの肌がしっとりすべすべになると女性客にも絶大な支持を得ています。食事は、紀州の味覚を心ゆくまで堪能できる「ハーフビュッフェ＋特選和食会席」。とろける旨味の熊野牛陶板焼きや熊野鮎、勝浦港直送の新鮮な生まぐろのお造りなど、山海の贅が惜しみなく並びます。宿スタッフの温かな熊野案内も旅の満足度を高めてくれます。",
              roomTip: "川側眺望の清流リバービュー客室。冬の澄んだ夜空にきらめく満天の星と川音に包まれる贅沢なプライベート空間です。",
              gourmetTip: "「熊野牛陶板ステーキ＆勝浦直送生まぐろ会席」。口の中でじゅわりと広がる肉汁と、紀州勝浦の鮮烈な赤身まぐろの贅沢な競演。",
              highlights: [
                "大塔川を望む専用混浴露天風呂＆熊野牛陶板ステーキと勝浦直送生まぐろ",
                "メタケイ酸豊富なしっとり美肌温泉＆ハーフビュッフェで楽しむ和歌山の山海美食",
                "ファミリーやカップルに人気の川沿いロケーション＆親切なスタッフの熊野案内"
              ]
            },
            {
              id: 3,
              name: "旅館あづまや　＜和歌山県＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/129554/129554.jpg",
              rating: 4.47,
              reviews: 152,
              price: "¥10,890〜",
              access: "紀伊田辺駅よりバス・タクシーで約９０分/新宮駅よりバス、タクシーで６０分「湯峰温泉」下車すぐ/南紀田辺ＩＣから車で70分",
              special: "名湯と温泉料理の宿で知られている当館。熊野古道のメッカ、本宮に在り、つぼ湯が目印です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129554%2F129554.html",
              story: "開湯1800年、日本最古の温泉地として知られる湯の峰温泉の中心に佇み、大正・昭和の文人墨客にも愛された純和風の木造老舗旅館「旅館あづまや」。江戸時代創業の風格ある佇まいと、手入れの行き届いた数寄屋造りの館内は一歩足を踏み入れた瞬間に旅人を非日常へと誘います。宿の真骨頂は、加水も加温も一切行わない100%源泉かけ流しの含硫黄-ナトリウム-炭酸水素塩・塩化物泉。名物の「槙風呂（まきぶろ）」や「蒸し風呂」には乳白色の濃密な湯の花が舞い、立ち上る硫黄の香りが温泉旅情を極限まで高めます。世界遺産の「つぼ湯」へも徒歩2分。夕食は熊野の地美恵（ジビエ）や熊野牛、山菜をふんだんに取り入れた伝統の本格会席で、翌朝の源泉で炊いた熱々の「温泉粥」は胃腸に染み渡る極上の優しさです。",
              roomTip: "湯の峰の温泉街に面した情緒あふれる木造数寄屋客室。窓の外から漂う硫黄の湯煙と下駄の音が初冬の旅情を深く彩ります。",
              gourmetTip: "「熊野牛の温泉しゃぶしゃぶ＆朝の源泉粥」。飲むこともできる上質なアルカリ源泉で肉や野菜を煮込み、滋味あふれる出汁をそのまま味わう至高の膳。",
              highlights: [
                "世界遺産つぼ湯徒歩2分＆完全かけ流しの極上白濁硫黄泉槙風呂と源泉蒸し風呂",
                "飲む温泉で作る熱々名物温泉粥＆江戸創業の風情漂う文化財級の数寄屋建築",
                "文人墨客が愛した歴史の息吹＆朝一番の神秘的なつぼ湯入浴に最も便利な立地"
              ]
            },
            {
              id: 4,
              name: "湯の峰温泉　　湯の峯荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7873/7873.jpg",
              rating: 4.53,
              reviews: 580,
              price: "¥14,300〜",
              access: "ＪＲ紀伊田辺駅／JR新宮駅／路線バス有り／海南湯浅道 紀伊田辺ICより車で90分／新宮より車で40分",
              special: "日本最古の温泉は泉質が抜群。貸切風呂も無料でご利用頂けます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7873%2F7873.html",
              story: "湯の峰温泉の高台に位置し、見晴らしの良い開放感と薬効豊かな自家源泉が自慢の「湯の峰温泉 湯の峯荘」。湧き出たばかりの新鮮な硫黄泉は空気に触れることで青白く濁り、美肌成分メタケイ酸と硫黄成分が乾燥した冬の肌を絹のようになめらかに包み込みます。広々とした大浴場と岩造りの露天風呂に加え、空いていればいつでも無料で利用できる2つの家族貸切風呂が完備されており、カップルや家族連れのプライベートな湯浴みにも最適。夕食には、料理長が腕を振るう「熊野牛の水晶プレート焼き会席」や、清流の鮎の塩焼き、季節の煮物など滋味豊かな和食が並びます。朝食の温泉粥は、ほんのりとした塩気と硫黄の風味が米の甘みを引き立て、何杯でもおかわりしたくなる逸品です。",
              roomTip: "静けさに包まれた山側和室。初冬の山風が木々を揺らす音を聞きながら、日常の喧騒を完全に忘れて心身をリセットできます。",
              gourmetTip: "「極上熊野牛の水晶焼き膳」。煙が出ず肉本来のジューシーな旨味を閉じ込める水晶プレートで、霜降り熊野牛の柔らかさを堪能。",
              highlights: [
                "空いていれば何度でも無料の家族貸切風呂＆青白く濁る薬効濃厚な美肌源泉",
                "ジューシーな熊野牛水晶プレート焼き＆高台からの静かな初冬山並みパノラマ",
                "一人旅・カップル歓迎の温かなもてなし＆湯治場の情緒を満喫する休息"
              ]
            },
            {
              id: 5,
              name: "わたらせ温泉　ホテルささゆり",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/18768/18768.jpg",
              rating: 4.60,
              reviews: 303,
              price: "¥20,350〜",
              access: "無料送迎バス有【JR白浜駅】お迎え 13：00／お送り 10：30　※前日までの要予約",
              special: "日本屈指の大露天風呂と貸切露天風呂で大自然の中天然の湯の香りに包まれ日頃の疲れを癒して下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18768%2F18768.html",
              story: "川湯温泉から車で約5分、四村川の渓流沿いに広がる西日本最大級のスケールを誇る温泉リゾート「わたらせ温泉 ホテルささゆり」。宿最大の名物は、一度に数百人が入れる圧倒的な広さを誇る大露天風呂と、日本最大級の広さを誇る源泉かけ流しの貸切大露天風呂（4箇所完備・宿泊者無料）。初冬の澄み渡る夜空の下、ライトアップされた幻想的な湯船に浸かりながら冬のオリオン座や天の川を見上げる星空露天は圧巻の一言です。湯量は毎分数百リットルを誇る贅沢なかけ流し。夕食には、紀州のブランド肉「熊野牛」のすき焼き鍋や鉄板焼き、南紀の新鮮な魚介を散りばめた華やかな会席料理が提供され、広大な敷地と上質なサービスで優雅な初冬の熊野旅を満喫できます。",
              roomTip: "四季の庭園や四村川を望むゆったりとしたバルコニー付き和洋室。贅沢な広さと清潔感を兼ね備え、シニアや家族連れにも安心です。",
              gourmetTip: "「熊野牛すき焼き鍋と南紀海の幸会席」。甘辛い割り下に熊野牛の濃厚な脂が溶け込み、地元産の新鮮卵に絡めていただく贅沢な味わい。",
              highlights: [
                "日本最大級の広さを誇る大露天風呂＆ライトアップされた満天星空貸切風呂",
                "熊野牛すき焼き鍋と南紀旬魚の贅沢会席＆広大な敷地を誇る上質リゾートステイ",
                "四村川の清流沿いの優雅な庭園＆熊野古道ウォーキングの疲れを癒やす極上湯浴み"
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
      <header className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wide border border-emerald-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            11月・12月初冬の熊野本宮・仙人風呂＆聖地温泉特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {metadata.title as string}
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
            川底から滾々と湧く大塔川仙人風呂の圧倒的開放感と、世界遺産つぼ湯が醸し出す1800年の神秘。
            芳醇な霜降り熊野牛の会席と、胃腸を優しく癒やす名物温泉粥に酔いしれる初冬の熊野本宮へ。
          </p>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-4">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm tracking-wide">
            <Flame className="w-4 h-4 text-emerald-700" />
            大塔川の川底から湧く奇跡の湯と世界遺産最古の湯治場
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            11月下旬から12月にかけて、世界遺産「紀伊山地の霊場と参詣道」の中枢である熊野本宮は、紅葉が静かに散り落ち、凛とした清浄な冷気が山あいを包み込みます。この季節、温泉ファンが熱い視線を注ぐのが、大塔川（おおとうがわ）の河原をそのまま巨大な湯船にした冬の風物詩「仙人風呂（せんにんぶろ）」です。毎年12月1日にオープンするこの天然露天風呂は、川底をスコップで掘れば70℃以上の熱湯が湧き出る川湯温泉ならではの奇跡。川の水を引き込んで適温に調整された広大な青空湯船に水着で身を沈めれば、川のせせらぎと初冬の澄んだ青空、夜にはこぼれ落ちそうな満天の星が頭上に広がります。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            川湯から車でわずか5分の距離にある湯の峰温泉（ゆのみねおんせん）は、開湯約1800年を誇る日本最古の温泉地。谷あいに昔ながらの木造宿が連なり、川沿いの「つぼ湯」は世界遺産に登録された世界唯一の入浴可能な公衆浴場です。日に七度色が変わると伝わる乳白色やエメラルドグリーンの濃厚な硫黄泉は、小栗判官が蘇生した伝説の通り、冷えた体を芯から温め驚くほどの活力を与えてくれます。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            そして冬の熊野の醍醐味は、この豊かな霊峰の自然が育んだ極上グルメ。紀州が誇る最高峰の黒毛和牛「熊野牛」のすき焼きや陶板焼きは、きめ細やかなサシと芳醇な肉汁が絶品。翌朝には、飲むこともできる良質なアルカリ源泉でじっくり炊き上げた「名物温泉粥」が、旅で疲れた胃腸を優しく労わってくれます。初冬の熊野本宮大社や大斎原の厳かな参拝とともに、心身を浄化する特別な冬宿5選をご紹介します。
          </p>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-emerald-900 font-bold text-sm tracking-wide bg-emerald-100/60 px-3 py-1 rounded-full">
              <Landmark className="w-4 h-4 text-emerald-800" />
              厳選5名宿のご案内
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の川湯仙人風呂・湯の峰つぼ湯を満喫する極上温泉宿
            </h2>
          </div>

          <div className="space-y-8">
            {hotelCards.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl border border-stone-200 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-5/12 relative aspect-16/10 md:aspect-auto overflow-hidden bg-stone-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={hotel.img} 
                    alt={hotel.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-emerald-950/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>第{hotel.id}選</span>
                  </div>
                </div>

                <div className="p-6 md:w-7/12 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span className="flex items-center gap-1 text-emerald-800 font-medium">
                        <MapPin className="w-3.5 h-3.5" />
                        和歌山県熊野本宮温泉郷
                      </span>
                      <span className="flex items-center gap-1 font-bold text-amber-600">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        {hotel.rating} ({hotel.reviews}件)
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                      {hotel.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {hotel.story}
                    </p>
                  </div>

                  <div className="space-y-2 bg-stone-50 rounded-2xl p-3 text-xs text-stone-600">
                    <div className="font-semibold text-emerald-950 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                      宿の注目ポイント
                    </div>
                    <ul className="space-y-1">
                      {hotel.highlights.map((h: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-stone-100 pt-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base sm:text-lg font-black text-emerald-900">{hotel.price}</span>
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-xs hover:shadow transition-all"
                    >
                      楽天トラベルでプランを見る
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1泊2日モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-emerald-900 font-bold text-sm tracking-wide bg-emerald-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-emerald-800" />
              1泊2日モデルコース
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の熊野本宮・仙人風呂＆世界遺産つぼ湯を巡る周遊ルート
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-emerald-900 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-emerald-700" />
                【1日目】熊野本宮大社参拝と大塔川仙人風呂体験
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>11:30 紀伊田辺駅または新宮駅を出発：</strong>レンタカーまたは路線バスで国道311号線／168号線を走り熊野本宮へ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>13:00 熊野本宮大社＆大斎原（おおゆのはら）参拝：</strong>神聖な檜皮葺きの社殿を拝礼し、日本一の大鳥居がそびえる旧社地大斎原で厳かな静寂を体感。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>15:00 川湯温泉の宿へチェックイン：</strong>荷物を置き、水着や湯浴み着に着替えて大塔川の河原へ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>15:30 仙人風呂へ入湯：</strong>川のせせらぎを聞きながら青空の下で広大な露天風呂を満喫。川底から湧き出る温泉の温もりを直に感じる。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>18:30 特選熊野牛ディナー＆夜の星空仙人風呂：</strong>霜降り熊野牛のすき焼きに舌鼓を打ち、夜は満天の星空を仰ぎながら幻想的なナイトバス。</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-emerald-900 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-emerald-700" />
                【2日目】世界遺産つぼ湯と源泉温泉粥モーニング
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>07:00 湯の峰温泉へ移動＆「つぼ湯」朝一番入浴：</strong>公衆浴場番台で札を取り、神秘の白濁硫黄泉に身を浸して心身を蘇生。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>08:30 宿で名物温泉粥モーニング：</strong>アルカリ源泉で炊いた滋味深い熱々のお粥と紀州南高梅で朝の元気をチャージ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>10:00 湯の峰温泉「湯筒」で温泉たまご体験：</strong>約90℃の源泉が湧く湯筒で、卵やさつまいもを茹でて楽しむ温泉街散策。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>11:30 わたらせ温泉の大露天風呂立ち寄り：</strong>四村川沿いの開放的な日本屈指の大露天風呂で初冬の湯めぐりを締めくくり。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>13:00 紀州めはり寿司ランチ＆帰路へ：</strong>高菜の浅漬けで包んだ郷土のめはり寿司を頬張り、白浜・田辺方面へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-emerald-900 font-bold text-sm tracking-wide bg-emerald-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-emerald-800" />
              初冬の熊野本宮・おみやげ＆立ち寄り散策手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              温泉街で手に入れたい初冬の紀州銘品と立ち寄りスポット
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                湯筒で作る温泉たまごと温泉コーヒー
              </h3>
              <p>
                湯の峰温泉の中心を流れる川沿いには、約90度の熱湯が湧き出る「湯筒（ゆづつ）」があります。近くの売店でネット入りの生卵や野菜を購入し、湯筒に10〜12分ほど浸けておくだけで、ほんのり硫黄の風味が薫る極上の半熟温泉たまごが完成します。また、温泉街の茶屋では飲泉可能なアルカリ源泉でドリップした「温泉コーヒー」が提供されており、まろやかで雑味のない深い味わいが冬の散策で冷えた喉を温めてくれます。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-emerald-700" />
                伝統の郷土食「めはり寿司」と本場紀州南高梅
              </h3>
              <p>
                熊野古道の旅人に親しまれてきた名物「めはり寿司」は、炊きたてのご飯に刻んだ高菜を混ぜ、大きな塩漬け高菜の葉で包み込んだ素朴ながら奥深い郷土の味覚。「目をみはるほど美味しい」「目を見張るほど大きい」ことからその名がついたとされ、初冬の澄んだ空気の中で頬張る味は格別です。また本宮大社前の参道では、果肉が柔らかく芳醇な香りを誇る本場紀州の完熟南高梅や、熊野の地酒「黒牛」「太平洋」が揃い、お土産選びに最適です。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-emerald-900 font-bold text-sm tracking-wide bg-emerald-100/60 px-3 py-1 rounded-full">
              <ThermometerSun className="w-4 h-4 text-emerald-800" />
              初冬の熊野本宮温泉郷・泉質と気候の徹底解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ11月・12月の熊野温泉は「蘇生の湯」と呼ばれるのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <Waves className="w-4 h-4 text-emerald-700" />
              川底から直接湧き出す熱湯と大塔川の清流が生む奇跡のバランス
            </h3>
            <p>
              川湯温泉の最大の特徴は、河原を掘ればどこからでも73℃のナトリウム-炭酸水素塩・塩化物泉が湧き出すという類稀な地質構造にあります。夏場は川遊びとともに手掘りのマイ露天風呂を楽しむ人々で賑わいますが、水量が安定し川の水温が下がる初冬（12月1日）になると、重機を使って大塔川をせき止め、幅数十メートルに及ぶ日本最大級の天然混浴大露天風呂「仙人風呂」が完成します。周囲は遮るもののない川の谷間。昼は初冬の青空と原生林のコントラストを、夜は湯煙越しに瞬く冬の星空を眺めながら、大自然と完全に一体となる湯浴みが体験できます。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Landmark className="w-4 h-4 text-emerald-700" />
              世界遺産つぼ湯の薬効とアルカリ温泉粥のデトックス効果
            </h3>
            <p>
              湯の峰温泉の主泉質は、含硫黄-ナトリウム-炭酸水素塩・塩化物泉（含弱放射能-硫黄-ナトリウム-炭酸水素塩泉）。硫黄成分が血管を拡張して血行を促進し、炭酸水素塩成分が肌の角質を柔らかく溶かすため、「美肌の湯」「若返りの湯」として平安時代から歴代の上皇や貴族が熊野詣の際に湯垢離（ゆごり＝身を清める儀式）を行ってきました。また、この源泉は重曹成分を多く含む弱アルカリ性のため、飲泉すると胃酸を中和し胃腸の調子を整える働きがあります。源泉で炊いた温泉粥は、米のデンプンがアルカリによって滑らかに糊化し、甘みと栄養が最大限に引き出される理想的な冬の養生食です。
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-emerald-900 font-bold text-sm tracking-wide bg-emerald-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-emerald-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の熊野本宮・川湯・湯の峰温泉旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-emerald-700 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-emerald-800" />
            あわせて読みたい初冬の全国名湯・美食特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-mie-toba-osaatsu-onsen-seafood-torasawara-matsusaka-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-emerald-700 font-bold block text-[10px]">三重・鳥羽相差</span>
              <p className="font-bold text-stone-800 line-clamp-2">伊勢志摩の冬の恵み・答志島トロサワラ＆極上松阪牛と美肌露天風呂</p>
            </Link>
            <Link 
              href="/winter-shizuoka-minamiizu-shimogamo-onsen-iseebi-kinmedai-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-emerald-700 font-bold block text-[10px]">静岡・南伊豆</span>
              <p className="font-bold text-stone-800 line-clamp-2">温暖な避寒リゾートと湯煙南国情緒・旬の伊勢海老＆地金目鯛姿煮名宿</p>
            </Link>
            <Link 
              href="/winter-miyagi-togatta-onsen-zao-snow-sendaigyu-kamonabe-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-emerald-700 font-bold block text-[10px]">宮城・遠刈田温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">初冠雪の蔵王連峰を望む開湯400年の名湯・仙台牛＆蔵王鴨せり鍋名宿</p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
