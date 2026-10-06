import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, 
  Award, Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Info, Heart 
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月米沢牛すき焼きと小野川温泉】小野小町ゆかりの美肌名湯とかまくら雪見宿5選",
  description: "11月下旬から里山が白銀の静寂に包まれる山形・米沢の奥座敷「小野川温泉」。平安の美女・小野小町が病を癒やしたと伝わる美肌の硫黄泉露天風呂と、とろける甘みの日本三大和牛「米沢牛すき焼き」、温泉熱で育つ冬限定のシャキシャキ小野川豆もやしを堪能する温もり旅。",
  keywords: '小野川温泉 旅館, 米沢牛 すき焼き 宿, 山形 温泉 宿泊, 米沢 温泉 ホテル, 小野川温泉 かまくら, 冬の山形旅行, 小野川 豆もやし',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-yamagata-onogawa-yonezawa-beef-stay/",
  },
  openGraph: {
    title: "【11・12月米沢牛すき焼きと小野川温泉】小野小町ゆかりの美肌名湯とかまくら雪見宿5選",
    description: "11月下旬から里山が白銀の静寂に包まれる山形・米沢の奥座敷「小野川温泉」。平安の美女・小野小町が病を癒やしたと伝わる美肌の硫黄泉露天風呂と、とろける甘みの日本三大和牛「米沢牛すき焼き」、温泉熱で育つ冬限定のシャキシャキ小野川豆もやしを堪能する温もり旅。",
    url: 'https://croud-travel.pages.dev/winter-yamagata-onogawa-yonezawa-beef-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月米沢牛すき焼きと小野川温泉】小野小町ゆかりの美肌名湯とかまくら雪見宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月米沢牛すき焼きと小野川温泉】小野小町ゆかりの美肌名湯とかまくら雪見宿5選",
    description: "11月下旬から里山が白銀の静寂に包まれる山形・米沢の奥座敷「小野川温泉」。平安の美女・小野小町が病を癒やしたと伝わる美肌の硫黄泉露天風呂と、とろける甘みの日本三大和牛「米沢牛すき焼き」、温泉熱で育つ冬限定のシャキシャキ小野川豆もやしを堪能する温もり旅。",
  }
};

export default function OnogawaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-yamagata-onogawa-yonezawa-beef-stay#article",
        "headline": "【11・12月米沢牛すき焼きと小野川温泉】小野小町ゆかりの美肌名湯とかまくら雪見宿5選",
        "description": "11月下旬から里山が白銀の静寂に包まれる山形・米沢の奥座敷「小野川温泉」。平安の美女・小野小町が病を癒やしたと伝わる美肌の硫黄泉露天風呂と、とろける甘みの日本三大和牛「米沢牛すき焼き」、温泉熱で育つ冬限定のシャキシャキ小野川豆もやしを堪能する温もり旅。",
        "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
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
          "@id": "https://croud-travel.pages.dev/winter-yamagata-onogawa-yonezawa-beef-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-yamagata-onogawa-yonezawa-beef-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "小野川温泉への冬のアクセス方法と雪道運転の注意点は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "山形新幹線「米沢駅」から小野川温泉行きの山交バスで約25分です。新幹線を利用すれば東京駅から米沢駅まで約2時間10分で到着できます。11月下旬以降は米沢市内および山間部で積雪や凍結路面が発生するため、お車の場合はスタッドレスタイヤが必須です。雪道運転に不慣れな方は新幹線と路線バスまたはタクシーの利用を推奨します。"
            }
          },
          {
            "@type": "Question",
            "name": "小野川温泉の泉質や美肌効果について教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "小野川温泉は開湯1200年の歴史を持ち、平安の美女・小野小町が父を探す旅の途中で病を癒やしたと伝えられる名湯です。泉質は含硫黄-ナトリウム・カルシウム-塩化物泉で、ラジウムも含有しています。塩分が汗の蒸発を防ぐため湯冷めしにくく、豊富なメタケイ酸が肌の角質を滑らかにして潤いを与えるため「美人をつくる美肌の湯」として名高いです。"
            }
          },
          {
            "@type": "Question",
            "name": "米沢牛すき焼きの美味しさの秘密とは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "米沢牛は吾妻連峰の清らかな伏流水と、置賜盆地特有の厳しい寒暖差の中で32ヶ月以上丹精込めて長期肥育された黒毛和牛です。融点が低いきめ細やかな霜降り脂は人肌で溶けるほどで、特製の醤油ダレでさっと煮ると口いっぱいに上品な甘みとコクが広がります。冬の寒さの中でいただく熱々のすき焼きは日本最高峰の肉料理です。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の名物「小野川豆もやし」やかまくら体験とは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "小野川豆もやしは、温泉熱と温泉水のみを利用して室（むろ）で育てる300年以上の歴史を持つ冬の伝統野菜です。長さ30cm以上あり、豆の香ばしさとシャキシャキとした驚くべき歯ごたえが特徴。例年冬期には温泉街に職人が雪で作る巨大なかまくらが設置され、かまくらの中で温かい豆もやしラーメンを食べる名物体験が楽しめます。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-yamagata-onogawa-yonezawa-beef-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "小野川温泉　やな川屋旅館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27912%2F27912.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "小野川温泉　鈴の宿　登府屋旅館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4890%2F4890.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "小野川温泉　扇屋旅館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27908%2F27908.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "小野川温泉　うめや旅館＜山形県＞",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109154%2F109154.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "小野川温泉　湯杜　匠味庵　山川　ｙｕｍｏｒｉ－ｓｈｏｍｉａｎ　ＹＡＭＡＫＡＷＡ",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14534%2F14534.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "小野川温泉　やな川屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/27912/27912.jpg",
              rating: 4.00,
              reviews: 84,
              price: "¥6,600〜",
              access: "ＪＲ米沢駅よりバスで30分／福島飯坂ＩＣ⇒Ｒ13号、Ｒ121号⇒小野川温泉／会津若松ＩＣ⇒Ｒ121号⇒小野川温泉へ",
              special: "屋上露天風呂の五ツ星源泉宿、「生の源泉」をそのまま注いだ100％源泉かけ流しの湯をお楽しみください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27912%2F27912.html",
              story: "小野川温泉街の中心に位置し、大正浪漫の面影を漂わせる老舗旅館。宿の最上階に設けられた展望露天風呂からは、雪化粧した温泉街の瓦屋根と湯けむり、そして遠くに連なる吾妻連峰の白銀パノラマが一望できます。湧出温度の異なる2本の自家源泉を絶妙にブレンドした湯は、含硫黄-ナトリウム・カルシウム-塩化物温泉。硫黄の香りとまろやかな塩分が肌をベールのように包み込み、湯上がり後もポカポカが持続します。冬の夜、雪がしんしんと降り積もる中で浸かる展望露天風呂の風情は格別です。",
              roomTip: "落ち着いた純和風客室は二重サッシ完備で冬でも暖かく、障子を開ければ雪化粧した山里の静かな景色が広がります。",
              gourmetTip: "夕食の主役は米沢牛の最高ランクA5・A4ランクを贅沢に使った「米沢牛すき焼き会席」。特製の甘辛タレと絡み合う霜降り肉の濃厚な旨味は感動の美味しさです。",
              highlights: [
                "温泉街を一望する最上階展望露天風呂＆自家源泉100%かけ流し",
                "大正浪漫の薫る落ち着いた館内とA5ランク米沢牛すき焼き会席",
                "2本の源泉ブレンドによる極上の保温効果と雪国の静寂な夜"
              ]
            },
            {
              id: 2,
              name: "小野川温泉　鈴の宿　登府屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4890/4890.jpg",
              rating: 4.45,
              reviews: 241,
              price: "¥9,300〜",
              access: "山形新幹線 米沢駅より路線バスで26分。東北自動車道 飯坂ICより60分　小野川温泉の中心に位置する宿です。",
              special: "■ご家族で”親孝行たび”をお考えの方へ♪バリアフリーで車イスもラクラク安心♪掛け流し温泉&amp;サウナ有り",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4890%2F4890.html",
              story: "「誰もが安心して寛げる温泉宿」をコンセプトに、車椅子対応のバリアフリールームや貸切風呂を完備した人に優しい名宿。小野川温泉の源泉かけ流しの湯を心ゆくまで堪能できる広々とした大浴場に加え、車椅子のまま入浴できるリフト付き貸切家族風呂も大好評。さらに、落語好きの館主による寄席イベントや、地元山形の名酒を取り揃えた地酒バーなど、滞在を楽しく彩る工夫が随所に散りばめられています。温かい笑顔のおもてなしと清潔な館内が、三世代家族やご夫婦旅行に絶大な信頼を得ています。",
              roomTip: "段差のないバリアフリー和洋室はシモンズベッドを導入。足腰に不安のあるシニア世代でも安心して快適な雪見温泉旅行を楽しめます。",
              gourmetTip: "米沢牛の「すき焼き・ステーキ・しゃぶしゃぶ」から好みの調理法を選べる特選プランが大人気。冬の温泉熱で育つ名物「小野川豆もやし」との相性も抜群です。",
              highlights: [
                "全館バリアフリー対応＆源泉かけ流しリフト付き貸切家族風呂完備",
                "落語寄席や山形地酒バーを併設＆米沢牛選べる調理法プラン",
                "三世代旅行やシニアご夫婦にも安心の段差なし快適ステイ"
              ]
            },
            {
              id: 3,
              name: "小野川温泉　扇屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/27908/27908.jpg",
              rating: 4.40,
              reviews: 154,
              price: "¥11,000〜",
              access: "ＪＲ米沢駅より白布温泉行バスで３０分（小野川温泉降車）　東北中央自動車道米沢中央ICより車で２０分",
              special: "全客室天然温泉付(一部露天風呂付客室)　A5ランク米沢牛　源泉100%かけ流し　Wi-Fi完備",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27908%2F27908.html",
              story: "小野川温泉のシンボルである共同浴場「尼湯」のすぐそばに佇む、温泉情緒あふれるアットホームな老舗宿。小野川温泉名物の「豆もやしラーメン」を世に生み出した元祖の宿としても全国の麺好きに知られています。自家源泉から引く新鮮な温泉は飲泉も可能で、胃腸の調子を整える効果も。冬場には、温泉街の職人が手作りする名物「巨大かまくら」が宿の目の前に登場し、かまくらの中で熱々の出前ラーメンを食べられる冬期限定の体験が旅行者の心を掴んでいます。",
              roomTip: "昔ながらの風情を残す温もりある和室。コタツに入って雪景色を眺めながら、名物の温泉卵をいただくノスタルジックな時間が流れます。",
              gourmetTip: "名物「米沢牛すき焼き」と元祖「豆もやしラーメン」を一度に堪能できる贅沢な献立。長さ30cm以上にもなるシャキシャキの豆もやしの食感は冬限定の絶品です。",
              highlights: [
                "元祖「豆もやしラーメン」の老舗宿＆飲泉可能な新鮮温泉とかまくら体験",
                "共同浴場「尼湯」すぐの好立地と巨大かまくらでの出前ラーメン",
                "名物温泉卵作り体験やノスタルジックなコタツ付き和室の寛ぎ"
              ]
            },
            {
              id: 4,
              name: "小野川温泉　うめや旅館＜山形県＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/109154/109154.jpg",
              rating: 4.53,
              reviews: 110,
              price: "¥8,960〜",
              access: "米沢駅よりお車にて２０分",
              special: "ただの源泉100％かけ流しではない！入った人しか解らない！～沸かさない／循環しない／水で薄めない～",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109154%2F109154.html",
              story: "全館の床下に大量の竹炭を敷き詰めた「癒やしと健康」がテーマの隠れ家旅館。マイナスイオンに満ちた館内は心地よい清涼感に溢れ、アレルギーをお持ちの方でも安心して深呼吸できます。大浴場には竹炭を沈めたオリジナルの「炭風呂」があり、小野川温泉の豊かな美肌成分と炭の遠赤外線効果が相乗効果を生み、驚くほどの保温・発汗作用をもたらします。雪見露天風呂では、白銀の木々を間近に眺めながら静謐な湯浴みが楽しめます。",
              roomTip: "竹炭の消臭・調湿効果により澄み切った空気の客室。お布団には羽毛布団を使用し、真冬の米沢でも朝までぐっすり温かく眠ることができます。",
              gourmetTip: "囲炉裏の風情漂う食事処でいただく「米沢牛炭火焼き会席」。炭火で香ばしく炙られた米沢牛から溢れ出るジューシーな肉汁と、地元の冬野菜が絶妙なハーモニーを奏でます。",
              highlights: [
                "全館竹炭敷き詰めのマイナスイオン空間＆炭風呂と雪見露天の相乗効果",
                "囲炉裏風の食事処で味わう米沢牛炭火焼きと地元山形の冬野菜",
                "澄んだ空気の中で熟睡できる羽毛布団と健康志向の温かいもてなし"
              ]
            },
            {
              id: 5,
              name: "小野川温泉　湯杜　匠味庵　山川　ｙｕｍｏｒｉ－ｓｈｏｍｉａｎ　ＹＡＭＡＫＡＷＡ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14534/14534.jpg",
              rating: 4.17,
              reviews: 975,
              price: "¥8,250〜",
              access: "【山形新幹線】米沢駅より市内バスで小野川温泉へ約２５分【東北中央自動車道】米沢中央ICよりR１２１で約２０分",
              special: "～名湯一門　高見屋～★ 湯×味 ★ 「美人の湯」で癒されて、ここでしか味わえない美食の時間♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14534%2F14534.html",
              story: "「湯杜（ゆもり）」の名を冠し、伝統の木造建築にモダンな現代美を融合させた小野川温泉を代表するハイクラス宿。館内は和モダンなラウンジやライブラリーが配され、落ち着いた大人の時間が流れます。大浴場「滝風呂」と露天風呂「ほたるの湯」には、開湯1200年の薬湯が贅沢に源泉かけ流し。小野小町の伝説に違わぬ高い美肌効果を肌で実感できます。料理人が一品一皿に魂を込めて仕立てる創作懐石は、米沢牛の魅力を多角的に引き出した芸術的な仕上がりです。",
              roomTip: "デザイナーズ和洋室や露天風呂付き客室は、洗練された調度品と柔らかな間接照明が心地よく、特別な記念日ステイに最適です。",
              gourmetTip: "山形の旬食材と米沢牛を融合させた「匠味創作懐石」。口の中でとろける米沢牛のローストビーフやフィレステーキ、冬の郷土料理「芋煮」の上品な仕立てが絶賛されています。",
              highlights: [
                "モダンにリノベーションされた洗練空間＆匠が腕を振るう米沢牛創作懐石",
                "美肌の湯を堪能する広々大浴場とデザイナーズ露天風呂付き客室",
                "記念日やご褒美旅行に最適な贅沢空間と極上ローストビーフ"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-rose-700 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-900">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85"
          alt="山形米沢・小野川温泉の雪景色と立ち込める湯けむり"
          fill
          priority
          className="object-cover object-center opacity-45 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-900/90 text-rose-100 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-rose-700/40">
            <Flame className="w-4 h-4 text-amber-300" />
            <span>11月・12月限定 みちのく美肌温泉＆肉会席</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月米沢牛すき焼きと小野川温泉】<br className="hidden sm:inline" />
            小野小町ゆかりの美肌名湯とかまくら雪見宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            白銀の里山に立ち上る湯けむりと、平安の美女・小野小町を癒やした奇跡の美肌硫黄泉。日本三大和牛「米沢牛」のとろける極上すき焼きと冬限定の豆もやしに心まで温まる贅沢旅へ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-rose-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-400" /> 山形県米沢市（小野川温泉・米沢駅前）</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-100">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-700">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-700 uppercase tracking-widest">Heritage & Gastronomy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                1200年の歴史が息づく美肌の湯と、冬こそ輝く米沢牛の真髄
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            山形県南部、置賜（おきたま）盆地の山懐に抱かれた「小野川温泉」。西暦836年、平安時代の絶世の美女・小野小町が父を探す旅路の途中で病に倒れ、この地に湧く温泉に浸かって快復したという伝説が残る、みちのく屈指の古湯です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月下旬を迎えると、山々から初雪の便りが届き、温泉街は一気に白銀の風情へと染め上げられます。毎分千数百リットルという豊富な湧出量を誇る温泉水は、冬場は道路の消雪パイプにも使われ、立ち込める硫黄の湯けむりがノスタルジックな温泉街を幻想的に包み込みます。冷気で引き締まった澄んだ空気の中、雪見露天風呂に身を沈めれば、トロリとした湯ざわりが乾燥した冬の肌を優しく潤し、芯から温めてくれます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして冬の小野川温泉滞在で最大の歓喜をもたらすのが、日本三大和牛のひとつ「米沢牛」の極上会席です。置賜盆地の厳しい冬の寒暖差と澄んだ水でじっくりと肥育された黒毛和牛は、きめ細やかな霜降りと人肌で溶ける脂の軽やかさが特徴。熱々の鉄鍋でさっと焼き、秘伝の割下で煮立てる「米沢牛すき焼き」を溶き卵に潜らせて頬張る瞬間は、まさに至福の境地です。さらに温泉熱で栽培される冬の伝統野菜「小野川豆もやし」のシャキシャキとした食感が、肉の旨味をどこまでも引き立てます。
          </p>
          <div className="bg-rose-50/70 rounded-2xl p-5 border border-rose-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-rose-700" />
                新幹線からバス直行！雪国ビギナーにも優しい温泉街
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                東京から山形新幹線で米沢駅まで直通約2時間10分。駅前から路線バスで約25分と、雪道運転なしで快適にアクセスできます。
              </p>
            </div>
            <a 
              href="#hotel-list" 
              className="px-5 py-2.5 rounded-xl bg-rose-800 hover:bg-rose-900 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-sm transition-all"
            >
              小野川温泉の名宿5選を見る ↓
            </a>
          </div>
        </section>

        {/* 3 Core Highlights */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-widest">Winter Delights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の小野川温泉・米沢で絶対に外せない3つの魅力
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-stone-900">極上A5ランク！本場米沢牛すき焼き</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                人肌でとろける上質な脂と濃厚な赤身のコク。冬の寒さを一瞬で吹き飛ばす熱々すき焼きや陶板ステーキは感動の美味しさです。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-stone-900">小野小町ゆかりの美肌硫黄泉</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                塩化物泉と硫黄泉が合わさった贅沢な泉質。塩のベールが熱を逃さず、豊富なメタケイ酸が冬の乾燥肌をつるつるに保ちます。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-stone-900">冬限定！巨大かまくら＆豆もやし</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                温泉街に出現するかまくらで出前ラーメンを味わうユニークな体験。温泉熱で育つ30cm超のシャキシャキ豆もやしも必食。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section id="hotel-list" className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-widest">Recommended Inns</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              米沢牛と小野川の名湯を堪能する厳選温泉旅館5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              楽天トラベルで高評価を誇る小野川温泉の名宿。源泉かけ流しの雪見風呂、米沢牛の調理法へのこだわり、心温まるもてなしで厳選しました。
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-stone-200 hover:border-rose-400 transition-all duration-300 flex flex-col lg:flex-row"
              >
                {/* Hotel Image Container */}
                <div className="lg:w-2/5 relative min-h-[280px] lg:min-h-full">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Award className="w-3.5 h-3.5 text-rose-400" />
                    <span>厳選 #{hotel.id}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-stone-950/90 via-stone-950/60 to-transparent p-3 rounded-2xl text-white text-xs">
                    <p className="font-semibold flex items-center gap-1 text-rose-300">
                      <Star className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
                      評価 {hotel.rating} / 5.0
                    </p>
                    <p className="text-[11px] text-stone-300 line-clamp-1">{hotel.access}</p>
                  </div>
                </div>

                {/* Hotel Content */}
                <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
                        {hotel.special}
                      </span>
                      <span className="text-xs font-semibold text-stone-500">
                        宿泊目安: <strong className="text-stone-900 text-sm">{hotel.price}</strong> /名
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug hover:text-rose-800 transition-colors">
                      <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                        {hotel.name}
                      </a>
                    </h3>

                    <p className="text-stone-700 text-sm leading-relaxed">
                      {hotel.story}
                    </p>

                    {/* Room & Gourmet Tips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/70 text-xs space-y-1">
                        <strong className="text-rose-900 flex items-center gap-1 font-bold">
                          <Coffee className="w-3.5 h-3.5 text-rose-700" /> お部屋・滞在の快適さ
                        </strong>
                        <p className="text-stone-600 leading-relaxed">{hotel.roomTip}</p>
                      </div>
                      <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/70 text-xs space-y-1">
                        <strong className="text-rose-900 flex items-center gap-1 font-bold">
                          <Utensils className="w-3.5 h-3.5 text-rose-700" /> 米沢牛・冬の美食
                        </strong>
                        <p className="text-stone-600 leading-relaxed">{hotel.gourmetTip}</p>
                      </div>
                    </div>

                    {/* Highlights Badges */}
                    <div className="space-y-1.5 pt-1">
                      {hotel.highlights.map((hl, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-stone-500 text-center sm:text-left">
                      ※ 11・12月は米沢牛グルメと雪見温泉需要で週末を中心に満室傾向です。
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-rose-800 hover:bg-rose-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-98"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1泊2日おすすめモデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-widest">Suggested Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              【1泊2日】米沢牛と小野川美肌温泉を満喫する冬の温もり旅モデルコース
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              山形新幹線でスマートにアクセス！上杉神社の冬景色、小野川温泉街そぞろ歩き、米沢牛すき焼きを心ゆくまで堪能するスケジュール。
            </p>
          </div>

          <div className="relative border-l-2 border-rose-200 ml-4 pl-6 space-y-8">
            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-rose-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded">1日目 12:00</span>
              <h3 className="text-base font-bold text-stone-900">山形新幹線で米沢駅到着 〜 本場米沢牛ランチ</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                東京駅から山形新幹線つばさ号で約2時間10分、米沢駅に到着。駅前の名店でまずは米沢牛の牛鍋や牛丼ランチを堪能。観光案内所でバス時刻を確認。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-rose-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded">1日目 13:30</span>
              <h3 className="text-base font-bold text-stone-900">上杉神社参拝 〜 初冬の松が岬公園散策</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                上杉謙信公を祀る上杉神社へ。お堀の水面に雪化粧した木々が映り、凛とした静寂に包まれます。稽照殿で直江兼続の「愛」の前立て甲冑など名宝を見学。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-rose-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded">1日目 15:30</span>
              <h3 className="text-base font-bold text-stone-900">路線バスで小野川温泉へ 〜 チェックイン＆温泉卵作り</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                バスで山あいの小野川温泉へ。湯けむり立ち上る温泉街の共同湯「尼湯」前で温泉卵作り（源泉に約12分浸けるだけで半熟とろとろに！）。宿へチェックイン。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-rose-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded">1日目 16:30</span>
              <h3 className="text-base font-bold text-stone-900">小野小町ゆかりの美肌硫黄泉露天風呂で温浴</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                白銀の里山を望む雪見露天風呂へ。まろやかな硫黄の香りと塩化物泉の温もりで、冷え切った身体が芯からじんわりと解けていきます。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-rose-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded">1日目 18:30</span>
              <h3 className="text-base font-bold text-stone-900">夕食：極上A5ランク米沢牛すき焼きフル会席</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                見事なサシが入った米沢牛を甘辛の割り下でサッと煮込み、地元の新鮮卵に絡めて一口。山形の銘酒「十四代」「東光」とともに夢見心地の美食時間。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-rose-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded">2日目 08:00</span>
              <h3 className="text-base font-bold text-stone-900">朝の雪見風呂＆つや姫と小野川豆もやしの朝食</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                朝の清々しい雪景色を眺めながらの朝風呂。山形が誇るブランド米「つや姫」の炊きたてご飯と、シャキシャキの豆もやしのおひたし、自家製温泉卵の贅沢朝食。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-rose-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded">2日目 10:30</span>
              <h3 className="text-base font-bold text-stone-900">酒蔵見学「東光の酒蔵」 〜 米沢銘菓のお土産探し</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                米沢市内に戻り、江戸時代の仕込み蔵を復元した「東光の酒蔵」へ。冬の新酒の試飲を楽しみ、米沢牛の味噌漬けや地酒をお土産に購入して新幹線で帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* 旬の山形・米沢名物グルメガイド */}
        <section className="bg-stone-100/70 rounded-3xl p-6 sm:p-10 border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-rose-800 text-white">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Gourmet Guide</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                11月・12月の米沢・小野川温泉で味わうべき至福の味覚4選
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-rose-700">●</span> 日本三大和牛「米沢牛すき焼き」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                人肌でとろける良質な脂と、深い甘みを持つ霜降り肉。冬の寒さの中、甘辛の割り下がグツグツと煮える鉄鍋を囲む時間は至福の極みです。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-rose-700">●</span> 冬限定の伝統野菜「小野川豆もやし」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                温泉熱と温泉水のみで栽培される300年の歴史を持つ名産品。長さ30cm以上あり、大豆の芳ばしいコクと驚きのシャキシャキ感が魅力。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-rose-700">●</span> 温泉街名物「ラジウム温泉卵」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                小野川温泉の高温泉に浸けて作られる温泉卵。白身はプリンのようにプルプル、黄身は濃厚な半熟に仕上がり、ほんのり香る硫黄が絶妙なアクセント。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-rose-700">●</span> 寒仕込みの地酒「東光・雅山流」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                吾妻連峰の伏流水と山形県産酒造好適米で醸される米沢の地酒。11月〜12月は新酒の絞りたてが登場し、芳醇な旨味が米沢牛の脂をすっきりと流します。
              </p>
            </div>
          </div>
        </section>

        {/* よくある質問 (FAQ) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-rose-100 text-rose-800">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-700 uppercase tracking-widest">Q&A Guide</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬の小野川温泉・米沢旅行 よくある質問と交通ガイド
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-rose-700 font-extrabold">Q.</span>
                11月・12月の米沢や小野川温泉の雪の状況はどうですか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                例年11月中旬から下旬にかけて初雪が観測され、12月中旬以降は本格的な雪景色（積雪30〜50cm以上）となります。温泉街の道路には温泉水を利用した消雪パイプが敷設されているため道路上の雪は溶けやすいですが、朝晩の冷え込みによる路面凍結があります。車でお越しの際は必ずスタッドレスタイヤを装着してください。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-rose-700 font-extrabold">Q.</span>
                車がなくても小野川温泉へ行けますか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                非常に快適に行けます。山形新幹線「米沢駅」西口のバス停から、山交バス「白布温泉・小野川温泉行き」が定期運行しており、約25分（運賃約580円）で小野川温泉街の目の前まで直通します。雪道運転に慣れていない首都圏からの旅行者には新幹線＋バスのルートが圧倒的におすすめです。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-rose-700 font-extrabold">Q.</span>
                冬の服装や必要な防寒グッズは何ですか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                12月の米沢は最高気温でも2〜4℃、朝晩はマイナス数度まで下がります。ロング丈の厚手ダウンジャケット、ヒートテック等の保温インナー、手袋、マフラー、ニット帽をご用意ください。また、道路には消雪パイプから水が出ているため、靴は撥水・防水機能があり滑り止めがついたスノーブーツや長靴が最適です。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-rose-700 font-extrabold">Q.</span>
                名物「巨大かまくら」はいつから体験できますか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                例年、十分な積雪が確保される1月中旬から2月下旬頃まで温泉街にかまくらが登場します。11月・12月はかまくら設営前の初冬シーズンとなりますが、その分混雑が少なく、名湯をゆっくり独占でき、旬の初物「小野川豆もやし」や極上の米沢牛すき焼きを落ち着いて味わえる絶好の時期です。
              </p>
            </div>
          </div>
        </section>

        {/* 内部リンク網羅（GEOリンク＆関連冬特集） */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-widest">Related Guides & Areas</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の旅をさらに広げる関連特集＆エリア別ガイド
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              日本全国・旅宿クラウドが厳選する、11月・12月の冬旅行特集や近隣エリアの温泉宿ガイドをチェック。
            </p>
          </div>

          {/* 関連特集リンクカード */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link 
              href="/winter-zao-snow-monster-ice-tree-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-rose-50/60 border border-stone-200 hover:border-rose-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-cyan-800 bg-cyan-100/80 px-2 py-0.5 rounded">山形冬の絶景</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-cyan-900 transition-colors">
                蔵王樹氷スノーモンスターと蔵王強酸性温泉宿
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                世界的奇観「樹氷ライトアップ」と強酸性硫黄泉の極上雪見露天風呂。
              </p>
            </Link>

            <Link 
              href="/winter-aomori-sukayu-hakkoda-yukimi-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-rose-50/60 border border-stone-200 hover:border-rose-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded">東北豪雪名湯</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-teal-900 transition-colors">
                青森酸ヶ湯温泉の千人風呂と八甲田雪見宿
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                日本屈指の豪雪地帯！ヒバ千人風呂の白濁硫黄泉と津軽の滋味鍋。
              </p>
            </Link>

            <Link 
              href="/winter-iwate-appi-kogen-snow-resort-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-rose-50/60 border border-stone-200 hover:border-rose-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded">東北スノーリゾート</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-amber-900 transition-colors">
                安比高原シルキースノーと白樺美肌温泉宿
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                東北屈指のロングゲレンデと白樺の湯、前沢牛ディナーリゾート。
              </p>
            </Link>
          </div>

          {/* 都道府県GEOリンク */}
          <div className="pt-4 border-t border-stone-100 space-y-3">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              東北・全国の都道府県別おすすめ宿
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link href="/prefectures/yamagata" className="px-3 py-1.5 bg-stone-100 hover:bg-rose-100 text-stone-700 hover:text-rose-900 rounded-lg transition-colors font-medium">山形県の宿一覧</Link>
              <Link href="/prefectures/miyagi" className="px-3 py-1.5 bg-stone-100 hover:bg-rose-100 text-stone-700 hover:text-rose-900 rounded-lg transition-colors font-medium">宮城県の宿一覧</Link>
              <Link href="/prefectures/fukushima" className="px-3 py-1.5 bg-stone-100 hover:bg-rose-100 text-stone-700 hover:text-rose-900 rounded-lg transition-colors font-medium">福島県の宿一覧</Link>
              <Link href="/prefectures/akita" className="px-3 py-1.5 bg-stone-100 hover:bg-rose-100 text-stone-700 hover:text-rose-900 rounded-lg transition-colors font-medium">秋田県の宿一覧</Link>
              <Link href="/prefectures/iwate" className="px-3 py-1.5 bg-stone-100 hover:bg-rose-100 text-stone-700 hover:text-rose-900 rounded-lg transition-colors font-medium">岩手県の宿一覧</Link>
              <Link href="/prefectures/aomori" className="px-3 py-1.5 bg-stone-100 hover:bg-rose-100 text-stone-700 hover:text-rose-900 rounded-lg transition-colors font-medium">青森県の宿一覧</Link>
              <Link href="/prefectures/niigata" className="px-3 py-1.5 bg-stone-100 hover:bg-rose-100 text-stone-700 hover:text-rose-900 rounded-lg transition-colors font-medium">新潟県の宿一覧</Link>
            </div>
          
      <HubRelatedPosts currentSlug="winter-yamagata-onogawa-yonezawa-beef-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
