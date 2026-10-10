import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, 
  Award, Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Info, Heart, Clock, Footprints, ShoppingBag
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月下呂温泉の冬花火ミュージカル】日本三名泉の美肌湯ととろける飛騨牛会席宿5選",
  description: "12月の毎週土曜夜に冬空を華麗に染める「下呂温泉花火ミュージカル冬公演」。日本三名泉が誇るpH9超えのとろとろ美肌の湯に浸かり、冬の飛騨川のせせらぎを聴きながら最高ランクの飛騨牛朴葉味噌焼きや会席料理に舌鼓を打つ、心温まる冬の岐阜温泉旅。",
  keywords: '下呂温泉 花火 宿泊, 下呂温泉 冬 旅館 12月, 飛騨牛 温泉 宿, 下呂温泉 美肌の湯 冬旅, 岐阜 冬温泉, 下呂温泉 花火ミュージカル, 下呂温泉 モデルコース',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-gifu-gero-onsen-fireworks-hida-beef-stay/",
  },
  openGraph: {
    title: "【11・12月下呂温泉の冬花火ミュージカル】日本三名泉の美肌湯ととろける飛騨牛会席宿5選",
    description: "12月の毎週土曜夜に冬空を華麗に染める「下呂温泉花火ミュージカル冬公演」。日本三名泉が誇るpH9超えのとろとろ美肌の湯に浸かり、冬の飛騨川のせせらぎを聴きながら最高ランクの飛騨牛朴葉味噌焼きや会席料理に舌鼓を打つ、心温まる冬の岐阜温泉旅。",
    url: 'https://croud-travel.pages.dev/winter-gifu-gero-onsen-fireworks-hida-beef-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月下呂温泉の冬花火ミュージカル】日本三名泉の美肌湯ととろける飛騨牛会席宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月下呂温泉の冬花火ミュージカル】日本三名泉の美肌湯ととろける飛騨牛会席宿5選",
    description: "12月の毎週土曜夜に冬空を華麗に染める「下呂温泉花火ミュージカル冬公演」。日本三名泉が誇るpH9超えのとろとろ美肌の湯に浸かり、冬の飛騨川のせせらぎを聴きながら最高ランクの飛騨牛朴葉味噌焼きや会席料理に舌鼓を打つ、心温まる冬の岐阜温泉旅。",
  }
};

export default function GeroWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-gifu-gero-onsen-fireworks-hida-beef-stay#article",
        "headline": "【11・12月下呂温泉の冬花火ミュージカル】日本三名泉の美肌湯ととろける飛騨牛会席宿5選",
        "description": "12月の毎週土曜夜に冬空を華麗に染める「下呂温泉花火ミュージカル冬公演」。日本三名泉が誇るpH9超えのとろとろ美肌の湯に浸かり、冬の飛騨川のせせらぎを聴きながら最高ランクの飛騨牛朴葉味噌焼きや会席料理に舌鼓を打つ、心温まる冬の岐阜温泉旅。",
        "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
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
          "@id": "https://croud-travel.pages.dev/winter-gifu-gero-onsen-fireworks-hida-beef-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-gifu-gero-onsen-fireworks-hida-beef-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "下呂温泉の「冬花火ミュージカル」の開催時期と鑑賞スポットは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "下呂温泉花火ミュージカル冬公演は、例年12月の毎週土曜日（および年末特別公演）に開催されます。午後8時頃から約15分間、最新の音楽とレーザー光線に合わせて飛騨川の河川敷から色鮮やかな花火が打ち上げられます。下呂大橋周辺の川沿い歩道から間近に観覧できるほか、高台に位置する宿や飛騨川沿いの客室・展望露天風呂からも混雑を避けて優雅に楽しめます。"
            }
          },
          {
            "@type": "Question",
            "name": "下呂温泉の泉質と美肌効果について教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "下呂温泉の泉質はアルカリ性単純温泉（pH9.18〜9.3）で、無色透明でほのかな温泉香があります。古い角質を落として肌をなめらかに整えるクレンジング効果があり、「天然の石鹸水」「美肌の湯」として草津・有馬と並ぶ日本三名泉に数えられています。入浴後は肌が吸い付くようにしっとりとし、体の芯まで温まります。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の下呂温泉で味わうべき名物料理は何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "冬の飛騨路を代表する味覚は、なんといっても全国屈指のブランド和牛「飛騨牛」です。朴葉（ほおば）の上に甘辛い特製味噌と飛騨牛、ネギやキノコを乗せて焼く「朴葉味噌焼き」やすき焼き、ステーキが王道。さらに清流で育った岩魚や鮎の塩焼き、飛騨の郷土料理「鶏ちゃん（けいちゃん）」、寒造りの地酒「天領」も絶品です。"
            }
          },
          {
            "@type": "Question",
            "name": "名古屋や関西からの冬のアクセスと雪の影響は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "名古屋駅からJR特急「ひだ」を利用すれば直通約1時間40分で下呂駅に到着します。車の場合、11月下旬〜12月は下呂市街地の平地では頻繁な積雪は少ないものの、峠道や早朝・夜間の路面凍結があるためスタッドレスタイヤの装着が推奨されます。降雪予報が出ている場合は電車利用が確実で安心です。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-gifu-gero-onsen-fireworks-hida-beef-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "下呂温泉　ホテルくさかべアルメリア",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56778%2F56778.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "桜　Ｒｉｖｅｒ　Ｓｉｄｅ　Ｓｔａｙ　下呂温泉",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181693%2F181693.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "オテル・ド・マロニエ　下呂温泉",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38938%2F38938.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "下呂温泉　ゆらぎの里　ひだ山荘",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16163%2F16163.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "下呂温泉　山形屋",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9627%2F9627.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "下呂温泉　ホテルくさかべアルメリア",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/56778/56778.jpg",
              rating: 4.20,
              reviews: 4750,
              price: "¥7,920〜",
              access: "ＪＲ高山線　下呂駅より車で３分（無料送迎バス有り）/東海環状道富加関ＩＣより７０分又は中央道中津川ＩＣより６０分",
              special: "下呂市街を一望出来る展望露天風呂！和洋中50種を超えるバイキングや飛騨牛を使用したフルコース会席！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56778%2F56778.html",
              story: "下呂温泉街を見下ろす高台に堂々と聳え立つビッグスケールの温泉リゾート「ホテルくさかべアルメリア」。宿の自慢はなんといっても総ヒノキ造りの大展望露天風呂で、湯船に浸かりながら下呂市街の夜景と飛騨川の流れを一望できます。12月の土曜日に開催される「花火ミュージカル冬公演」の夜には、打ち上げ花火が真正面の夜空に花開き、まるで目の前で大輪の光が炸裂するかのような圧倒的な特等席となります。夕食はローストビーフや握り寿司、ズワイガニなどが並ぶ豪華ディナービュッフェや、とろける飛騨牛付きの贅沢会席など多彩なプランが揃い、カップルからファミリーまで冬の温泉旅行を華やかに盛り上げてくれます。",
              roomTip: "花火を客室から楽しみたいなら「街側（飛騨川側）眺望確約客室」の予約が必須。冬の寒さを気にせず温かいお部屋から夜景と大輪の華を満喫できます。",
              gourmetTip: "飛騨牛のすき焼きや陶板焼き付きプランが人気。オープンキッチンから焼き立て・出来立てが供されるバイキングも質・量ともにクチコミで高評価。",
              highlights: [
                "高台の総檜大展望露天風呂から下呂夜景と冬花火を一望",
                "飛騨牛付き贅沢会席や豪華ディナーバイキングなど多彩なプラン",
                "クチコミ評価の高いエンタメ施設や館内施設で充実の冬滞在"
              ]
            },
            {
              id: 2,
              name: "桜　Ｒｉｖｅｒ　Ｓｉｄｅ　Ｓｔａｙ　下呂温泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/181693/181693.jpg",
              rating: 3.54,
              reviews: 94,
              price: "¥5,700〜",
              access: "JR下呂駅より徒歩9分",
              special: "【食事4.2】源泉かけ流しを超える100%純生貸切温泉は体験型！源泉を使用し全身セルフエステ感覚に！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181693%2F181693.html",
              story: "飛騨川のほとりに位置し、自由でスタイリッシュな滞在を叶える「桜 River Side Stay 下呂温泉。」。川沿いの絶好のロケーションに建ち、全室にシモンズ製ベッドや広々としたリビングスペースを配したモダンな客室が特徴です。大きなガラス窓からは穏やかに流れる飛騨川の冬景色が広がり、夜には川面に映り込む温泉街の明かりが旅情を誘います。温泉街の各外湯や飲食店へも歩いてアクセスできる好立地で、老舗居酒屋で飛騨牛や地酒「天領」を楽しんだり、下呂名物の足湯を巡ったりと、気ままな大人の冬旅スタイルにぴったりの湯宿です。",
              roomTip: "リバービューのバルコニー付き客室がおすすめ。澄んだ冬の朝、川面を渡る清涼な風と朝霧を眺めながらのモーニングコーヒーは格別です。",
              gourmetTip: "素泊まりや朝食付きプランをベースに、温泉街の名店で自分好みの飛騨牛料理や郷土料理「鶏ちゃん（けいちゃん）」を開拓する楽しみが広がります。",
              highlights: [
                "飛騨川沿いのスタイリッシュなモダン客室＆温泉街徒歩圏内の自由旅",
                "シモンズ製ベッド完備の快適空間＆下呂名物足湯めぐりの好拠点",
                "地元の老舗居酒屋や飛騨牛グルメを巡るスマートな旅に最適"
              ]
            },
            {
              id: 3,
              name: "オテル・ド・マロニエ　下呂温泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38938/38938.jpg",
              rating: 3.98,
              reviews: 426,
              price: "¥8,650〜",
              access: "JR　高山本線　下呂駅／中央自動車道　中津川ICより国道２５７線を下呂方面へ　",
              special: "天然温泉付会員制リゾートホテルでのんびり。下呂を眼下に望む眺望と料理人の技を楽しむ料理の品々も大好評",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38938%2F38938.html",
              story: "下呂の自然美に包まれた静寂のロケーションに建つ「オテル・ド・マロニエ 下呂温泉」。落ち着いたリゾートホテルの趣を持ち、会員制リゾートならではの上質なホスピタリティとゆったりとした時の流れが心地よい宿です。最上階に位置する大浴場・展望露天風呂からは、冬枯れの山々と飛騨川の雄大なパノラマが広がり、日本三名泉の名湯が惜しみなく注がれています。お湯は驚くほどまろやかで、肌をなでるとツルツルとした感触が手のひらに伝わる天然の化粧水そのもの。湯上がりには広々としたラウンジで冬の山並みを眺めながら寛ぎのひとときを過ごせます。",
              roomTip: "上層階のリバービュー和洋室は開放感抜群。広々とした窓から冬の夕暮れや星空を静かに見下ろすプライベートな滞在が叶います。",
              gourmetTip: "夕食は飛騨の旬食材を上品に仕立てた季節の和食会席。香ばしい香りが食欲をそそる飛騨牛の朴葉味噌焼きや、清流の川魚料理をじっくりと堪能できます。",
              highlights: [
                "最上階展望風呂からの山河パノラマ＆まろやかなpH9超え美肌湯",
                "会員制リゾートの上質な空間とおもてなし＆広々としたラウンジ",
                "飛騨牛朴葉味噌焼きと地元の冬の味覚を散りばめた和食会席"
              ]
            },
            {
              id: 4,
              name: "下呂温泉　ゆらぎの里　ひだ山荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16163/16163.jpg",
              rating: 4.35,
              reviews: 385,
              price: "¥8,200〜",
              access: "【鉄道】JR高山線・下呂駅下車、徒歩15分（車で3分）／【車】中央道・中津川ICより国道257号経由、約90分",
              special: "源泉かけ流しの温泉、絶品の飛騨牛、全室夜景ビュー…下呂の魅力をすべて味わえる宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16163%2F16163.html",
              story: "下呂温泉街から少し坂を上がった山腹にひっそりと佇む、全18室の大人の隠れ宿「ゆらぎの里 ひだ山荘」。高台ならではの遮るもののない眺望が魅力で、全客室の窓から下呂の街並みと飛騨川をパノラマで一望できます。館内の大浴場には総檜造りの湯船が設えられ、木の爽やかな芳香と柔らかな下呂温泉のとろみ湯が心身の凝りを解きほぐします。客室数を抑えているため館内は常に静かで落ち着きがあり、行き届いた細やかな接客も評判。冬の夜、街の灯りがキラキラと輝くのを眺めながら、贅沢なプライベート温泉時間を満喫できます。",
              roomTip: "最上階の和洋室からは下呂市街の全景と夜空がワイドに広がり、12月の花火開催日には特等席として最高の夜を演出してくれます。",
              gourmetTip: "料理評価が極めて高い宿。極上の飛騨牛を炭火焼きやすき焼き、朴葉焼きで味わえるほか、地元契約農家から届く新鮮野菜や飛騨コシヒカリの美味しさが際立ちます。",
              highlights: [
                "全室街側パノラマビュー＆総檜風呂で源泉かけ流しの隠れ家ステイ",
                "全18室限定の落ち着いた大人の空間＆クチコミ高評価の飛騨牛料理",
                "下呂市街の灯りと夜空の花火を見下ろす圧倒的な絶景ロケーション"
              ]
            },
            {
              id: 5,
              name: "下呂温泉　山形屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9627/9627.jpg",
              rating: 4.10,
              reviews: 2120,
              price: "¥10,450〜",
              access: "※下呂駅からの送迎方法はお問合せくださいませ。中央道　中津川ＩＣよりお車にて６０分。",
              special: "江戸時代からつづく、寛ぎの宿。時代のなかで培われてきたくつろぎの空間",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9627%2F9627.html",
              story: "江戸時代文化・文政年間の創業と伝えられる、下呂温泉を代表する名門老舗旅館「山形屋」。飛騨川のせせらぎがすぐ足元に迫る絶好のロケーションに佇み、幾世代にもわたって受け継がれてきた伝統のおもてなしが息づいています。川のせせらぎが間近に響く露天風呂「吉野の湯」では、清冽な冬の空気を感じながら、とろりとした美肌温泉にゆったりと身を委ねることができます。館内には本格的な茶室や日本庭園が配され、古き良き日本の旅館文化の風情が色濃く漂います。下呂駅からの無料送迎もあり、雪の季節でも安心して訪れることができます。",
              roomTip: "飛騨川に面した数寄屋造りの和室からは、冬の水鳥が羽を休める穏やかな川面と山並みが一望でき、純和風の落ち着きに浸れます。",
              gourmetTip: "老舗ならではの出汁の利いた本格京風会席。メインには厳選されたA5等級の飛騨牛ステーキや飛騨牛陶板焼きが供され、部屋食対応のプランも充実しています。",
              highlights: [
                "創業200余年の老舗旅館＆飛騨川を臨む露天風呂と本格部屋食会席",
                "数寄屋造りの格調高い和室と飛騨の伝統が息づく細やかなおもてなし",
                "A5等級の極上飛騨牛ステーキや朴葉焼きと飛騨銘酒の贅沢なマリアージュ"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-700 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-900">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85"
          alt="冬の下呂温泉・飛騨川の夜景と夜空に咲く冬花火ミュージカル"
          fill
          priority
          className="object-cover object-center opacity-45 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-800/90 text-amber-100 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-amber-600/40">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>11月・12月限定 冬の東海名湯特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月下呂温泉の冬花火ミュージカル】<br className="hidden sm:inline" />
            日本三名泉の美肌湯ととろける飛騨牛会席宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            凛とした冬空に音楽とともに舞い上がる色鮮やかな大輪の華。日本三名泉の誉れ高きpH9のとろとろ美肌湯に身を委ね、香ばしい朴葉味噌とA5飛騨牛の旨味に酔いしれる至福の冬宵へ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> 岐阜県下呂市（下呂温泉・飛騨川畔）</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月下呂温泉の冬花火ミュージカル】日本三名泉の美肌湯ととろける飛騨牛会席宿5選","item":"https://croud-travel.pages.dev/winter-gifu-gero-onsen-fireworks-hida-beef-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-700">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Winter Fireworks & Hot Spring</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                澄み渡る冬の夜空に響く調べと、肌を包む至高の絹の湯
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            有馬・草津と並び、室町時代の儒学者・万里集九や江戸時代の儒学者・林羅山によって「日本三名泉」と称えられた下呂温泉。岐阜県の豊かな山懐を流れる飛騨川のほとりに広がるこの温泉地は、11月の紅葉の終わりから12月にかけて、冬ならではの特別な情緒と高揚感に包まれます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            下呂温泉の冬を決定づける一大イベントが、12月の毎週土曜日に開催される「下呂温泉花火ミュージカル冬公演」です。冬の冷涼で澄み切った大気は光の透過率が非常に高く、夏の花火とは比較にならないほど鮮やかでクッキリとした色彩を放ちます。リズミカルな音楽とレーザー演出に連動して次々と打ち上がるスターマインが、飛騨川の水面を七色に照らし出す光景は圧巻のひと言。温泉街の橋の上や、宿の展望風呂・客室の窓辺から眺める冬花火は、一生忘れられないロマンチックな思い出を刻んでくれます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして、下呂温泉最大の誇りがその湯ざわりです。泉質はpH9.18を超える高アルカリ性単純温泉。湯船に体を沈めた瞬間、まるで美容液や化粧水の中に浸かっているかのようなトロリとした感触が肌を優しくコーティングします。古い角質を洗い流し、入浴後には指先が吸い付くようなしっとり肌へと導くことから「美人の湯」として女性にも大人気。湯上がりの夕食には、朴葉の上で味噌を焦がしながら香ばしく焼き上げる「飛騨牛の朴葉味噌焼き」やすき焼き。甘い脂の香りと地酒の芳醇な余韻が、冬の旅を完璧に締めくくってくれます。
          </p>
          <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-700" />
                12月の土曜日は予約争奪戦！早めの確保を
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                花火ミュージカル開催日の川側客室や高台の展望客室は毎年早期に満室となります。11月中の予約手配が冬の下呂旅を成功させる鍵です。
              </p>
            </div>
            <a 
              href="#hotel-list" 
              className="px-5 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-sm transition-all"
            >
              厳選の下呂名宿5選を見る ↓
            </a>
          </div>
        </section>

        {/* 3 Core Highlights */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Winter Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              11月・12月の冬の下呂温泉で心奪われる3つの瞬間
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-stone-900">澄天に咲く花火ミュージカル</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                12月の毎週土曜夜、音楽に合わせて飛騨川から打ち上がる約7,000発以上の花火。冬の澄んだ夜空に響く重低音と光のスペクタクルは鳥肌モノ。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-stone-900">日本三名泉の「とろとろ美肌湯」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                pH9超のアルカリ性単純温泉が古い角質をやさしく落とし、湯上がりは絹のように滑らか。冷えた体を芯からポカポカに温め続けます。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-stone-900">極上A5飛騨牛の朴葉味噌焼き</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                枯朴葉の上で特製味噌と飛騨牛がじゅうじゅうと音を立てる郷土の味。とろける肉汁と焦げた味噌の芳香が、白いご飯と地酒を無限に進めます。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section id="hotel-list" className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Recommended Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              11月・12月に泊まりたい下呂温泉の厳選宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              楽天トラベルの最新空室状況・宿泊プランと連携。花火が見える高台リゾートから川沿いの老舗旅館までを厳選。
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel, index) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Hotel Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-stone-100">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold text-xs">
                          第{index + 1}選
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span>{hotel.rating}</span>
                          <span className="text-stone-400">({hotel.reviews}件のクチコミ)</span>
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                        {hotel.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        {hotel.access}
                      </p>
                    </div>
                    <div className="text-left sm:text-right shrink-0">
                      <span className="text-xs text-stone-400 block">宿泊料金の目安（1名あたり）</span>
                      <span className="text-2xl font-extrabold text-amber-700">{hotel.price}</span>
                    </div>
                  </div>

                  {/* Image & Story Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-5 relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
                      <Image
                        src={hotel.img}
                        alt={hotel.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        {hotel.story}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/70">
                          <h4 className="text-xs font-bold text-amber-800 flex items-center gap-1.5 mb-1">
                            <Coffee className="w-3.5 h-3.5" /> 客室選びのポイント
                          </h4>
                          <p className="text-xs text-stone-600 leading-relaxed">
                            {hotel.roomTip}
                          </p>
                        </div>
                        <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/70">
                          <h4 className="text-xs font-bold text-rose-800 flex items-center gap-1.5 mb-1">
                            <Utensils className="w-3.5 h-3.5" /> 冬の料理・グルメのこだわり
                          </h4>
                          <p className="text-xs text-stone-600 leading-relaxed">
                            {hotel.gourmetTip}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="bg-amber-50/50 rounded-2xl p-4 sm:p-5 border border-amber-100/80 space-y-2.5">
                    <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-600" />
                      この宿のおすすめポイント
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {hotel.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-stone-700">
                          <span className="text-amber-600 font-bold">✓</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <span className="text-xs text-stone-500 italic">
                      ※冬の花火開催日や週末は予約が集中するため、空室が見つかり次第の早期確保が安心です。
                    </span>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                    >
                      <span>楽天トラベルでプラン・空室を見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1泊2日 冬花火＆飛騨牛満喫モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-700">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                初冬の下呂を満喫する「1泊2日 冬花火＆美肌湯モデルコース」
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
            {/* Day 1 */}
            <div className="space-y-4 bg-stone-50 p-6 rounded-2xl border border-stone-200/80">
              <div className="flex items-center gap-2 pb-2 border-b border-amber-200">
                <span className="px-3 py-1 rounded-full bg-amber-800 text-white font-bold text-xs">1日目</span>
                <h3 className="font-bold text-stone-900 text-base">特急ひだの渓谷美＆冬花火ミュージカル</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">13:30</span>
                  <div>
                    <strong>名古屋駅から特急「ひだ」で下呂駅へ</strong>
                    <p className="text-stone-500 text-xs mt-0.5">ワイドビューの窓越しに飛騨川の渓谷美を眺めながら約1時間40分。冬の澄んだ木々を抜けて下呂温泉へ到着。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">14:15</span>
                  <div>
                    <strong>下呂温泉街の足湯めぐり＆ご当地スイーツ</strong>
                    <p className="text-stone-500 text-xs mt-0.5">「鷺の足湯」や「さるの足湯」で足を温めながら、名物「下呂プリン」や温泉卵をのせた「温玉ソフト」を食べ歩き。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">15:30</span>
                  <div>
                    <strong>チェックイン＆pH9超え「絹肌の湯」を内湯で堪能</strong>
                    <p className="text-stone-500 text-xs mt-0.5">お部屋に荷物を置き、日本三名泉の源泉大浴場へ。とろりとした化粧水のようなお湯が散策の疲れを瞬時にほぐします。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">18:00</span>
                  <div>
                    <strong>最高ランク飛騨牛の朴葉味噌焼き会席</strong>
                    <p className="text-stone-500 text-xs mt-0.5">枯朴葉の上で香ばしく焼ける特製味噌と、とろけるA5飛騨牛。飛騨の地酒「天領」とともに贅沢なディナーを堪能。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">20:00</span>
                  <div>
                    <strong>下呂温泉花火ミュージカル冬公演 観賞</strong>
                    <p className="text-stone-500 text-xs mt-0.5">音楽に合わせて飛騨川から次々と打ち上がる約7,000発の華麗な花火。宿の展望テラスや川沿いから大迫力の音と光を体感。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">21:00</span>
                  <div>
                    <strong>湯冷め知らずの夜露天風呂</strong>
                    <p className="text-stone-500 text-xs mt-0.5">花火観賞で少し冷えた身体を、飛騨川のせせらぎを聴きながら入る露天風呂で温め直します。</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="space-y-4 bg-stone-50 p-6 rounded-2xl border border-stone-200/80">
              <div className="flex items-center gap-2 pb-2 border-b border-amber-200">
                <span className="px-3 py-1 rounded-full bg-amber-800 text-white font-bold text-xs">2日目</span>
                <h3 className="font-bold text-stone-900 text-base">下呂温泉合掌村の冬情景と飛騨牛ランチ</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">07:30</span>
                  <div>
                    <strong>朝の清冽な飛騨川沿い散策＆朝風呂</strong>
                    <p className="text-stone-500 text-xs mt-0.5">川霧が立ち込める早朝の飛騨川を散策後、朝の柔らかな日差しの中で美肌湯に浸かる爽快なスタート。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">08:30</span>
                  <div>
                    <strong>飛騨名物「朴葉味噌」の朝食膳</strong>
                    <p className="text-stone-500 text-xs mt-0.5">コンロで温める熱々の朴葉味噌をほかほかの飛騨コシヒカリに乗せて。ご飯が何杯でも進む郷土の朝の味。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">10:00</span>
                  <div>
                    <strong>「下呂温泉合掌村」で冬の白川郷情緒を体感</strong>
                    <p className="text-stone-500 text-xs mt-0.5">国指定重要文化財「旧大戸家住宅」など10棟の合掌造りが建ち並ぶ博物館。冬の木立と茅葺き屋根の雪化粧が風情満点。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">12:00</span>
                  <div>
                    <strong>温泉街で名物「飛騨牛トマト丼」ランチ</strong>
                    <p className="text-stone-500 text-xs mt-0.5">甘辛く煮た飛騨牛と地元産トマトの爽やかな酸味が絶妙にマッチする下呂発祥のB級グルメを満喫。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-amber-800 shrink-0">13:30</span>
                  <div>
                    <strong>飛騨銘菓「しらさぎ物語」をお土産に帰路へ</strong>
                    <p className="text-stone-500 text-xs mt-0.5">駅前のお土産処で銘菓や地酒を買い揃え、特急ひだで快適に名古屋・関西方面へ。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 泉質・温泉医学＆スキンケア */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-700">
              <Footprints className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Onsen Science & Beauty</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                下呂温泉のpH9高アルカリ泉の秘密と冬の美肌入浴法
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-600" />
                天然の石鹸効果「アルカリ性単純温泉」
              </h3>
              <p>
                下呂温泉の泉質はpH9.18〜9.3を誇るアルカリ性単純温泉です。この高いアルカリ性が皮脂の汚れや古い角質を石鹸のようにやさしく乳化して洗い流し、お肌をすべすべ・つるつるにリセットしてくれます。
              </p>
              <p>
                無色透明でほのかな温泉特有の香りがあり、肌への刺激が少ないため、赤ちゃんからご年配の方まで安心して長湯を楽しめる名湯です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                湯上がり10分以内の保湿が美肌を完成させる
              </h3>
              <p>
                アルカリ性温泉は高いクレンジング効果を持つ反面、角質が落ちた直後の素肌は水分が蒸発しやすい状態になります。
              </p>
              <p>
                浴室から出たらタオルで優しく水気を押さえ、10分以内に化粧水や乳液で保湿ケアを行うことで、下呂温泉の美肌効果を最大限に持続させることができます。
              </p>
            </div>
          </div>
        </section>

        {/* お土産・ご当地スイーツ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-700">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Souvenirs & Delights</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬の下呂温泉で手に入れたい厳選名物土産＆冬スイーツ
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/70 space-y-2">
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[11px]">定番銘菓</span>
              <h3 className="font-bold text-stone-900">しらさぎ物語</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                欧風せんべいにホワイトクリームをサンドした飛騨路のロングセラー銘菓。サクサクの香ばしさと優しい甘さが世代を超えて愛されています。
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/70 space-y-2">
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[11px]">冬スイーツ</span>
              <h3 className="font-bold text-stone-900">下呂プリン（温玉ソフト）</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                地元下呂牛乳とマダガスカル産バニラビーンズを使用した濃厚なめらかプリン。カエルのキャラクターが可愛い瓶入りで散策のお供に大人気。
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/70 space-y-2">
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[11px]">飛騨銘酒</span>
              <h3 className="font-bold text-stone-900">天領酒造・純米大吟醸</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                飛騨の清冽な伏流水と酒米「ひだほまれ」で醸す名蔵。冷涼な冬に仕込まれる新酒は芳醇な香りとキレを持ち、飛騨牛料理に完璧に合います。
              </p>
            </div>
          </div>
        </section>

        {/* Practical Guide / Walking Map */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-700">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Local Guide & Walking Tips</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                下呂温泉街の足湯めぐりと冬の散策ポイント
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-600" />
                温泉街に点在する無料足湯スポット巡り
              </h3>
              <p>
                下呂温泉街には「鷺の足湯」「さるの足湯」「ビーナスの足湯」など、誰でも無料で利用できる足湯が10箇所以上点在しています。冬の冷たい空気の中、散策途中にサッと靴下を脱いで温かい源泉に足を浸せば、わずか5分で全身がポカポカと温まります。
              </p>
              <p>
                散策には小さなハンドタオルを1枚ポケットに入れておくと大変重宝します。下呂プリンや温泉温玉ソフトなど、地元の冬スイーツを食べ歩きながらの散策がおすすめです。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                冬の服装とアクセスのアドバイス
              </h3>
              <p>
                下呂市街地は標高約380mに位置し、11月下旬からは朝晩の冷え込みが厳しくなります。12月の平均最高気温は約8℃、最低気温は氷点下近くまで下がるため、厚手のコートやダウンジャケット、手袋、マフラーが必須です。
              </p>
              <p>
                名古屋駅からはJR高山本線の特急「ひだ」が約1時間40分で結んでおり、雪道の運転が心配な冬期でも極めて快適・安全にアクセスできます。駅からは各旅館の送迎バスが充実しています。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-700">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                11月・12月の下呂温泉旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-amber-700 font-extrabold">Q.</span>
                花火ミュージカル冬公演は何時からどこで打ち上げられますか？雨や雪でも開催されますか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                例年12月の毎週土曜日の20:00から約15分間、飛騨川下呂大橋上流の河川敷から打ち上げられます。原則として雨天や降雪時でも開催されますが、強風等の荒天時は順延や中止となる場合があります。冬は空気が澄んでいるため、非常に鮮やかで迫力ある光景が楽しめます。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-amber-700 font-extrabold">Q.</span>
                下呂温泉のお湯の特徴は？なぜ「美人の湯」と呼ばれるのですか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                下呂温泉の源泉はpH9.18〜9.3のアルカリ性単純温泉で、肌の古い角質を落とすクレンジング作用があります。石鹸を使わなくても肌がスベスベになるため「美人の湯」「天然の石鹸」と称されています。刺激が少なく湯あたりしにくいため、1日に何度も入浴できるのも特徴です。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-amber-700 font-extrabold">Q.</span>
                冬の車での訪問時、スタッドレスタイヤやチェーンは必要ですか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                下呂市街中心部では大雪になる頻度はそれほど高くありませんが、11月下旬以降は朝晩の放射冷却で橋の上や日陰が凍結します。また、名古屋方面や高山方面からの峠越えルートでは積雪があるため、冬期の車利用には必ずスタッドレスタイヤを装着してください。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-amber-700 font-extrabold">Q.</span>
                下呂温泉合掌村など冬の周辺観光スポットのおすすめは？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                白川郷などから移築された国指定重要文化財を含む合掌造り集落「下呂温泉合掌村」は、冬の雪化粧が美しく必見です。村内では陶芸体験や和紙すき体験ができるほか、食事処で岩魚の塩焼きや団子を楽しめます。また温泉神社や温泉寺の石段からの下呂市街パノラマも人気です。
              </p>
            </div>
          </div>
        </section>

        {/* 内部リンク網羅（GEOリンク＆関連冬特集） */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Related Guides & Areas</span>
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
              href="/winter-shirakawago-gassho-snow-illumination-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-amber-50/60 border border-stone-200 hover:border-amber-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-sky-800 bg-sky-100/80 px-2 py-0.5 rounded">岐阜冬特集</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-amber-900 transition-colors">
                白川郷合掌造りライトアップと飛騨高山温泉宿
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                世界遺産白川郷の幻想的な雪景色ライトアップと小京都・高山の町並み。
              </p>
            </Link>

            <Link 
              href="/winter-mie-nabana-no-sato-illumination-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-amber-50/60 border border-stone-200 hover:border-amber-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-rose-800 bg-rose-100/80 px-2 py-0.5 rounded">東海イルミ特集</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-rose-900 transition-colors">
                なばなの里イルミネーションと長島温泉の贅沢宿
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                日本最大級の光のトンネルと大パノラマイルミネーション、広大な庭園露天風呂。
              </p>
            </Link>

            <Link 
              href="/winter-atami-fireworks-ocean-view-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-amber-50/60 border border-stone-200 hover:border-amber-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded">冬花火特集</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-teal-900 transition-colors">
                熱海海上花火大会とオーシャンビュー温泉ホテル
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                冬の夜空と相模湾を染める名物海上花火と海を望む絶景展望温泉。
              </p>
            </Link>
          </div>

          {/* 都道府県GEOリンク */}
          <div className="pt-4 border-t border-stone-100 space-y-3">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              岐阜県および中部・東海エリアのおすすめ温泉宿一覧
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link href="/prefectures/gifu" className="px-3 py-1.5 bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 rounded-lg transition-colors font-medium">岐阜県の宿一覧</Link>
              <Link href="/prefectures/aichi" className="px-3 py-1.5 bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 rounded-lg transition-colors font-medium">愛知県の宿一覧</Link>
              <Link href="/prefectures/mie" className="px-3 py-1.5 bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 rounded-lg transition-colors font-medium">三重県の宿一覧</Link>
              <Link href="/prefectures/nagano" className="px-3 py-1.5 bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 rounded-lg transition-colors font-medium">長野県の宿一覧</Link>
              <Link href="/prefectures/shizuoka" className="px-3 py-1.5 bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 rounded-lg transition-colors font-medium">静岡県の宿一覧</Link>
              <Link href="/prefectures/ishikawa" className="px-3 py-1.5 bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 rounded-lg transition-colors font-medium">石川県の宿一覧</Link>
            </div>
          
      <HubRelatedPosts currentSlug="winter-gifu-gero-onsen-fireworks-hida-beef-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
