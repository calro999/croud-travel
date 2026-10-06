import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月鳥取】白銀に染まる「鳥取砂丘」雪景！名宿5選',
  description: '山陰の冬が魅せる奇跡の絶景・鳥取砂丘と神話の里の11〜1月冬紀行。冬の寒波がもたらす白銀の雪砂丘と風が描く風紋のアート。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '鳥取砂丘 雪景色, 白兎神社 初詣, 鳥取松葉がに, モサエビ, 鳥取温泉 宿泊, 観水庭こぜにや, ホテルモナーク鳥取, 白兎会館, 鳥取和牛, 山陰 冬旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-tottori-sakyu-snow-hakuto-shrine-hatsumode-matsubagani-onsen-stay/'
  },
  openGraph: {
    title: '【11・12・1月鳥取】白銀に染まる「鳥取砂丘」雪景！名宿5選',
    description: '山陰の冬が魅せる奇跡の絶景・鳥取砂丘と神話の里の11〜1月冬紀行。冬の寒波がもたらす白銀の雪砂丘と風が描く風紋のアート。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-tottori-sakyu-snow-hakuto-shrine-hatsumode-matsubagani-onsen-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '白銀の雪に包まれる冬の鳥取砂丘と日本海の白波'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月鳥取】白銀に染まる「鳥取砂丘」雪景色と因幡の白兎「白兎神社」新春縁結び初詣！冬旬「鳥取松葉がに」＆鳥取温泉名宿5選",
    description: "山陰の冬が魅せる奇跡の絶景・鳥取砂丘と神話の里の11〜1月冬紀行。冬の寒波がもたらす白銀の雪砂丘と風が描く風紋のアート、日本最古のラブストーリー「因幡の白兎」伝説が息づく白兎神社で迎える新春縁結び初詣。11月解禁の冬の味覚の絶対王者「鳥取松葉がに」の茹で蟹・焼き蟹・蟹刺し、地元でしか出回らない幻の「モサエビ」、肉質日本一に輝いた「鳥取和牛」。県庁所在地に湧き出る全国屈指の天然名湯「鳥取温泉」と厳選名宿5選を徹底紹介。",
    images: ['https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export const dynamic = 'force-static';

export default function TottoriSakyuWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月鳥取】白銀に染まる「鳥取砂丘」雪景色と因幡の白兎「白兎神社」新春縁結び初詣！冬旬「鳥取松葉がに」＆鳥取温泉名宿5選",
    "description": "山陰の冬が魅せる奇跡の絶景・鳥取砂丘と神話の里の11〜1月冬紀行。冬の寒波がもたらす白銀の雪砂丘と風が描く風紋のアート、日本最古のラブストーリー「因幡の白兎」伝説が息づく白兎神社で迎える新春縁結び初詣。11月解禁の冬の味覚の絶対王者「鳥取松葉がに」の茹で蟹・焼き蟹・蟹刺し、地元でしか出回らない幻の「モサエビ」、肉質日本一に輝いた「鳥取和牛」。県庁所在地に湧き出る全国屈指の天然名湯「鳥取温泉」と厳選名宿5選を徹底紹介。",
    "image": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&h=630&q=80",
    "datePublished": "2026-10-05T18:00:00+09:00",
    "dateModified": "2026-10-05T18:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "旅宿クラウド 編集部",
      "url": "https://croud-travel.pages.dev"
    },
    "publisher": {
      "@type": "Organization",
      "name": "旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.pages.dev/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.pages.dev/winter-tottori-sakyu-snow-hakuto-shrine-hatsumode-matsubagani-onsen-stay"
    }
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://croud-travel.pages.dev"
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
        "name": "鳥取・鳥取砂丘＆白兎海岸 冬特集",
        "item": "https://croud-travel.pages.dev/winter-tottori-sakyu-snow-hakuto-shrine-hatsumode-matsubagani-onsen-stay"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "冬（11・12・1月）の「鳥取砂丘」雪景色の見どころと散策の注意点は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "鳥取砂丘は日本海からの強い季節風と寒波により、冬期には一面が真っ白な雪に覆われる「雪砂丘（ゆきさきゅう）」へと姿を変えます。砂の上に雪が積もり、風によって雪の風紋が刻まれる光景は、山陰の冬ならではの幻想的な絶景です。砂丘の最高地点「馬の背（標高約47m）」からは、荒れ狂う日本海の白い波頭と白銀の砂丘のコントラストが一望できます。長靴の無料レンタルがある施設もありますが、足元は防水・防寒ブーツが必須で、海風が非常に強いため耳あてや手袋、フード付きの防寒着をご用意ください。"
        }
      },
      {
        "@type": "Question",
        "name": "神話「因幡の白兎」ゆかりの「白兎神社（はくとじんじゃ）」新春初詣とご利益は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "白兎神社は『古事記』に記された神話「因幡の白兎」の舞台であり、大国主命（おおくにぬしのみこと）と八上姫（やかみひめ）の婚姻を取り持ったことから、「日本最古の縁結びの神様」として篤く信仰されています。また、白兎が傷を癒やしたとされる「不身洗池（みたらしのいけ）」が境内にあり、皮膚病平癒や火傷平癒の神としても知られます。参道には愛らしい白うさぎの石像が並び、白い小石「結び石」を鳥居の上に投げて願掛けをする風習があります。元旦から正月三が日にかけて良縁祈願の初詣客で賑わいます。"
        }
      },
      {
        "@type": "Question",
        "name": "11月解禁の冬の味覚の王者「鳥取松葉がに」と幻の「モサエビ」の美味しさの秘密は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "松葉がには山陰沖で水揚げされるオスのズワイガニの呼称で、毎年11月6日に漁が解禁されます。鳥取県では大きさ・重さ・身入りのすべてが最高峰のものをブランド蟹「五輝星（いつきぼし）」として認定。冷たい日本海の深海で育つため、脚肉の甘みとぎっしり詰まった濃厚な蟹味噌が絶品です。また「モサエビ（クロザコエビ）」は、鮮度落ちが早く県外に出回らない幻のエビで、甘エビ以上の強い甘みとプリプリした弾力が特徴。冬の鳥取では刺身や塩焼き、味噌汁で味わうことができます。"
        }
      },
      {
        "@type": "Question",
        "name": "全国でも珍しい県庁所在地市街地に湧く「鳥取温泉」の特徴は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "鳥取温泉は、JR鳥取駅北側の市街地中心部に湧き出る天然温泉で、県庁所在地で温泉街が形成されているのは全国的にも極めて稀です。明治時代に温泉掘削に成功して以来、約120年の歴史を誇ります。泉質はナトリウム-硫酸塩・塩化物泉で、弱アルカリ性の柔らかな湯ざわり。美肌効果が高く、入浴後も身体がポカポカと温まり続けるため、冬の寒風にさらされた身体を芯から癒やしてくれます。老舗旅館から大浴場付きホテルまで多彩な宿で楽しめます。"
        }
      },
      {
        "@type": "Question",
        "name": "関西・岡山・東京から鳥取への冬のアクセスと雪道対策は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "関西方面からは大阪・京都から特急「スーパーはくと」で乗り換えなし約2時間30分、岡山方面からは特急「スーパーいなば」で約1時間50分と、特急列車でのアクセスが非常に快適です。東京からは羽田空港から「鳥取砂丘コナン空港」まで飛行機で約75分、空港から鳥取駅までは連絡バスで約20分です。車の場合は鳥取自動車道（無料区間多数）を利用できますが、山陰地方の山間部や峠越えでは12月〜1月に積雪や凍結が発生するため、冬用タイヤ（スタッドレスタイヤ）の装着が必須です。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "鳥取温泉　観水庭こぜにや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14072/14072.jpg",
              rating: 4.76,
              reviews: 1484,
              price: "¥7,000〜",
              access: "鳥取駅より徒歩10分・無料送迎バス有 / 中国道佐用JCT経由鳥取ＩＣより車８分　鳥取砂丘へ車２０分　コンビニ徒歩2分",
              special: "鳥取市街地にありながら天然温泉かけ流しの湯を満喫できる閑静な佇まいの小宿。◆WIFI全室対応◆",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14072%2F14072.html",
              story: "鳥取駅から徒歩約10分、街の喧騒から隔絶された閑静な敷地に広大な池泉回遊式日本庭園を抱く老舗湯宿「鳥取温泉 観水庭こぜにや」。敷地内に2本の自家源泉を有し、加水・加温・循環一切なしの完全源泉掛け流し天然温泉を大浴場や露天風呂、無料の貸切風呂で満喫できます。冬の夕暮れ、湯煙の向こうに鯉が泳ぐ雪化粧の日本庭園を眺める時間は格別の風情。夕食には鳥取港から直送される最高級の「鳥取松葉がに」を丸ごと一杯使ったフルコースや、鳥取和牛のすき焼き・ステーキが並び、山陰屈指の贅沢なもてなしが旅人を迎えます。",
              roomTip: "庭園側和室「白露亭」または和洋室。手入れの行き届いた日本庭園の冬景色を障子越しに眺めながら、静かに寛げる極上空間。",
              gourmetTip: "「活鳥取松葉がにフルコース会席」。刺身の花咲く甘み、炭火焼きの香ばしさ、濃厚な甲羅味噌焼きと茹で蟹の全てを堪能。",
              highlights: [
                "自家源泉2本掛け流しの名湯・雪化粧の日本庭園を望む露天風呂と活松葉ガニフルコース" ,
                "鳥取市街地唯一の純和風名旅館・焼きガニや甲羅味噌の芳醇な香りに包まれる至高の夜" ,
                "無料貸切風呂完備・冬の白兎神社初詣や砂丘散策で冷えた身体を芯から解きほぐす"
              ]
            },
            {
              id: 2,
              name: "鳥取温泉　ホテルモナーク鳥取",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/591/591.jpg",
              rating: 4.18,
              reviews: 2259,
              price: "¥6,800〜",
              access: "ＪＲ鳥取駅北口出口より徒歩5分 / 鳥取自動車道鳥取ICより車で10分 / コンビニへ徒歩1分 / 鳥取砂丘へ車で20分",
              special: "鳥取温泉繁華街に位置。自家源泉大浴場を完備したシティーホテル。地産食材を活かした朝食ブッフェが自慢",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F591%2F591.html",
              story: "ヨーロッパのクラシカルな気品と山陰の温もりが融合したシティリゾートホテル「鳥取温泉 ホテルモナーク鳥取」。ロビーには吹き抜けのアトリウムが広がり、館内地下には鳥取温泉の自家源泉を引いた広々とした大浴場とサウナを完備。ビジネス街の中心にありながら、本格的な天然温泉で真冬の冷えた身体を芯まで温めることができます。夕食には日本海で水揚げされた新鮮な松葉ガニやモサエビ、鳥取和牛を取り入れた和食会席や洋食コースが揃い、スマートで上質な冬の鳥取滞在を約束します。鳥取砂丘への路線バス乗り場へも至近です。",
              roomTip: "デラックスツインまたはコーナーダブル。広々としたデスクと上質な羽毛布団を備え、冬の観光やワーケーションにも快適。",
              gourmetTip: "「山陰の冬旬彩会席」。冬の味覚松葉ガニや幻のモサエビの造り、鳥取和牛の陶板焼きを地酒「日置桜」とともに味わう贅沢。",
              highlights: [
                "自家源泉天然温泉大浴場＆サウナ完備・ヨーロッパ調の気品あふれるシティリゾート" ,
                "鳥取砂丘行きバス停至近・幻のモサエビや鳥取和牛を味わう上質な和洋レストラン" ,
                "全室Wi-Fi＆快適デスク・冬の観光拠点から上質なビジネスステイまで幅広く対応"
              ]
            },
            {
              id: 3,
              name: "鳥取温泉　白兎会館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/18911/18911.jpg",
              rating: 4.29,
              reviews: 747,
              price: "¥4,100〜",
              access: "ＪＲ鳥取駅よりバス５分→生協病院前　徒歩2分 JR鳥取駅より徒歩15分",
              special: "☆刺激が少なく肌に優しい　源泉かけ流しの湯☆　ビジネス・観光に最適！　無料駐車場完備",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18911%2F18911.html",
              story: "神話「因幡の白兎」にゆかりの深い名を冠し、鳥取温泉街の落ち着いた一角に佇む「鳥取温泉 白兎会館」。清潔感あふれる和洋の客室とともに、無色透明で肌触りの柔らかな天然温泉大浴場を備え、旅の疲れを優しく解きほぐします。宿の自慢は、鳥取の旬食材を知り尽くした料理長が手掛ける季節の会席料理。冬限定の松葉ガニ会席では、姿茹でやカニすき鍋が手頃な価格で楽しめるコストパフォーマンスの高さが評判です。白兎神社への参拝や鳥取砂丘観光の拠点として、家族連れや夫婦旅に親しまれています。",
              roomTip: "落ち着いた和室10畳またはツイン。畳の香りに包まれて足を伸ばし、冬の旅の思い出を語り合う温かなひととき。",
              gourmetTip: "「松葉がに鍋会席」。旨味あふれるカニすき鍋で身体を温め、〆にカニの出汁を吸った濃厚な雑炊を味わう至福の冬膳。",
              highlights: [
                "白兎神社にちなむ名湯の宿・天然温泉大浴場と手頃な価格で味わえる松葉ガニ会席" ,
                "鳥取温泉の優しい泉質でしっとり潤う美肌湯・家族連れや夫婦旅にも安心の和室設計" ,
                "神話の里・白兎海岸へのアクセス軽快・新春の縁結び開運祈願旅行にぴったりの湯宿"
              ]
            },
            {
              id: 4,
              name: "ホテルニューオータニ鳥取",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5623/5623.jpg",
              rating: 3.94,
              reviews: 1282,
              price: "¥5,050〜",
              access: "JR/ＪＲ鳥取駅から徒歩３分。 車/鳥取ＩＣより車で７分。",
              special: "鳥取駅前に位置しており、ビジネス・観光の拠点として非常に便利。全客室ＷｉＦｉ利用可能です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5623%2F5623.html",
              story: "JR鳥取駅北口正面に位置し、鳥取のランドマークとして国内外のVIPを迎えてきた格式高い名門ホテル「ホテルニューオータニ鳥取」。一流ホテルならではの洗練されたホスピタリティと上質な客室空間が、冬の山陰旅行に最高峰の安心感を提供します。館内レストランでは、ニューオータニ伝統の美食技術と鳥取県産の極上食材が融合。冬の鳥取港から届く新鮮な松葉ガニや、口の中でとろける最高級鳥取和牛「オレイン55」、地元契約農家の冬野菜を贅沢に使った料理を堪能できます。白兎神社や砂丘へのアクセスも抜群です。",
              roomTip: "スーペリアツインまたはスイートルーム。高層階からは冬の鳥取市街地や久松山（鳥取城跡）の雪景色を遠望できます。",
              gourmetTip: "「鳥取和牛＆冬の日本海ディナー」。ニューオータニのシェフが焼き上げる極上鳥取和牛フィレ肉と、冬魚のポワレの饗宴。",
              highlights: [
                "JR鳥取駅北口正面のランドマーク・最高峰のホスピタリティと鳥取和牛・海鮮ディナー" ,
                "ニューオータニの伝統技が光る創作料理・冬の久松山や鳥取市街地を一望する上質客室" ,
                "VIPも愛用する格式と安心感・鳥取砂丘コナン空港からのアクセスも軽快な名門ホテル"
              ]
            },
            {
              id: 5,
              name: "グリーンリッチホテル鳥取駅前　人工温泉・二股湯の華",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/176748/176748.jpg",
              rating: 4.19,
              reviews: 906,
              price: "¥5,200〜",
              access: "ＪＲ鳥取駅北口より徒歩にて約３分、鳥取自動車道 鳥取ＩＣより国道53号線を鳥取市方面へ車で14分",
              special: "星と砂をイメージしたデザイナーズホテル♪ＪＲ鳥取駅北口徒歩3分■男女別大浴場完備（男性サウナ付）",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176748%2F176748.html",
              story: "JR鳥取駅北口から徒歩わずか3分、繁華街にも隣接する抜群のロケーションに建つ「グリーンリッチホテル鳥取駅前 人工温泉・二股湯の華」。北海道の長万部から運ばれる天然鉱石「二股炭酸カルシウム温泉」を利用した大浴場と男性高温サウナを完備し、真冬の移動や砂丘散策で冷え切った身体を手足を伸ばして温め直すことができます。客室には肩こりや腰痛を和らげる高反発マットレスを導入。周辺には松葉ガニやモサエビ、地酒を提供する居酒屋や名店が密集し、気ままな冬のグルメ一人旅に最適です。",
              roomTip: "コンフォートシングルまたはダブル。清潔なベッドと明るい室内照明で、冬の夜長も快適にリラックスして過ごせます。",
              gourmetTip: "「和洋朝食バイキング＆駅前居酒屋巡り」。朝は健康的な和洋惣菜、夜は駅前の名店で旬の松葉ガニ料理や焼きガニを満喫。",
              highlights: [
                "JR鳥取駅徒歩3分・二股炭酸カルシウム温泉大浴場＆サウナ完備で駅前名店グルメも満喫" ,
                "高反発マットレスで快眠サポート・周辺に松葉ガニや郷土料理の名居酒屋が多数集結" ,
                "抜群のコストパフォーマンス・冬の山陰一人旅や自由気ままなグルメ旅に強い味方"
              ]
            }
  ];

  const faqsData = [
    {
      q: "冬（11・12・1月）の「鳥取砂丘」雪景色の見どころと散策の注意点は？",
      a: "鳥取砂丘は日本海からの強い季節風と寒波により、冬期には一面が真っ白な雪に覆われる「雪砂丘（ゆきさきゅう）」へと姿を変えます。砂の上に雪が積もり、風によって雪の風紋が刻まれる光景は、山陰の冬ならではの幻想的な絶景です。砂丘の最高地点「馬の背（標高約47m）」からは、荒れ狂う日本海の白い波頭と白銀の砂丘のコントラストが一望できます。長靴の無料レンタルがある施設もありますが、足元は防水・防寒ブーツが必須で、海風が非常に強いため耳あてや手袋、フード付きの防寒着をご用意ください。"
    },
    {
      q: "神話「因幡の白兎」ゆかりの「白兎神社（はくとじんじゃ）」新春初詣とご利益は？",
      a: "白兎神社は『古事記』に記された神話「因幡の白兎」の舞台であり、大国主命（おおくにぬしのみこと）と八上姫（やかみひめ）の婚姻を取り持ったことから、「日本最古の縁結びの神様」として篤く信仰されています。また、白兎が傷を癒やしたとされる「不身洗池（みたらしのいけ）」が境内にあり、皮膚病平癒や火傷平癒の神としても知られます。参道には愛らしい白うさぎの石像が並び、白い小石「結び石」を鳥居の上に投げて願掛けをする風習があります。元旦から正月三が日にかけて良縁祈願の初詣客で賑わいます。"
    },
    {
      q: "11月解禁の冬の味覚の王者「鳥取松葉がに」と幻の「モサエビ」の美味しさの秘密は？",
      a: "松葉がには山陰沖で水揚げされるオスのズワイガニの呼称で、毎年11月6日に漁が解禁されます。鳥取県では大きさ・重さ・身入りのすべてが最高峰のものをブランド蟹「五輝星（いつきぼし）」として認定。冷たい日本海の深海で育つため、脚肉の甘みとぎっしり詰まった濃厚な蟹味噌が絶品です。また「モサエビ（クロザコエビ）」は、鮮度落ちが早く県外に出回らない幻のエビで、甘エビ以上の強い甘みとプリプリした弾力が特徴。冬の鳥取では刺身や塩焼き、味噌汁で味わうことができます。"
    },
    {
      q: "全国でも珍しい県庁所在地市街地に湧く「鳥取温泉」の特徴は？",
      a: "鳥取温泉は、JR鳥取駅北側の市街地中心部に湧き出る天然温泉で、県庁所在地で温泉街が形成されているのは全国的にも極めて稀です。明治時代に温泉掘削に成功して以来、約120年の歴史を誇ります。泉質はナトリウム-硫酸塩・塩化物泉で、弱アルカリ性の柔らかな湯ざわり。美肌効果が高く、入浴後も身体がポカポカと温まり続けるため、冬の寒風にさらされた身体を芯から癒やしてくれます。老舗旅館から大浴場付きホテルまで多彩な宿で楽しめます。"
    },
    {
      q: "関西・岡山・東京から鳥取への冬のアクセスと雪道対策は？",
      a: "関西方面からは大阪・京都から特急「スーパーはくと」で乗り換えなし約2時間30分、岡山方面からは特急「スーパーいなば」で約1時間50分と、特急列車でのアクセスが非常に快適です。東京からは羽田空港から「鳥取砂丘コナン空港」まで飛行機で約75分、空港から鳥取駅までは連絡バスで約20分です。車の場合は鳥取自動車道（無料区間多数）を利用できますが、山陰地方の山間部や峠越えでは12月〜1月に積雪や凍結が発生するため、冬用タイヤ（スタッドレスタイヤ）の装着が必須です。"
    }
  ];


  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-blue-950 via-slate-900 to-slate-800 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Snowflake className="w-4 h-4 text-blue-300" />
            <span>中国・鳥取 因幡路 冬の特別紀行（11月・12月・1月）</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 font-journal-serif">
            白銀に染まる「鳥取砂丘」雪景色と因幡の白兎「白兎神社」新春縁結び初詣<br className="hidden md:inline" />
            冬旬「鳥取松葉がに」・幻のモサエビ＆鳥取温泉名宿5選
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mb-6">
            日本海の荒波が運ぶ冬の寒波によって、黄金の砂山が一面純白の雪原へと変貌を遂げる鳥取砂丘。風が雪面に刻む神秘的な風紋と、荒れ狂う日本海の青と白のコントラストは、この季節にしか出逢えない奇跡の絶景です。神話「因幡の白兎」の舞台・白兎神社で迎える清々しい新春縁結び初詣、11月に解禁され冬に旨味の頂点を極める「鳥取松葉がに」と地元限定の幻の深海エビ「モサエビ」。冷えた身体を優しく包み込む県庁所在地の自家源泉「鳥取温泉」の温もりに浸る、山陰屈指の至福の冬旅へご案内します。
          </p>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-slate-200">
            <span className="bg-blue-900/60 border border-blue-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Snowflake className="w-4 h-4 text-blue-400" /> 鳥取砂丘（白銀の雪砂丘・風紋アート）
            </span>
            <span className="bg-blue-900/60 border border-blue-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-blue-400" /> 白兎神社（日本最古の縁結び神話・新春初詣）
            </span>
            <span className="bg-blue-900/60 border border-blue-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-blue-400" /> 鳥取松葉がに＆幻のモサエビ・鳥取温泉
            </span>
          </div>
        </div>
      </header>

      {/* Summary Box */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-blue-600" />
            11・12・1月の鳥取・因幡 冬旅ハイライト
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div className="space-y-2 border-l-2 border-blue-500 pl-4">
              <h3 className="font-bold text-slate-900">白銀に染まる鳥取砂丘</h3>
              <p className="text-xs md:text-sm leading-relaxed">
                冬の雪が積もることで現れる「雪砂丘」。日本海の白波と雪に覆われた「馬の背」の雄大な稜線、冬の強風が雪面に刻む風紋のアートはまさに唯一無二の冬景色です。
              </p>
            </div>
            <div className="space-y-2 border-l-2 border-blue-500 pl-4">
              <h3 className="font-bold text-slate-900">神話の杜・白兎神社初詣</h3>
              <p className="text-xs md:text-sm leading-relaxed">
                『古事記』に描かれた日本最古のラブストーリー。大国主命と八上姫の結縁を導いた白兎を祀る社で、新年の良縁成就・家庭円満・無病息災を祈る清らかな初詣。
              </p>
            </div>
            <div className="space-y-2 border-l-2 border-blue-500 pl-4">
              <h3 className="font-bold text-slate-900">松葉がにと鳥取温泉の癒やし</h3>
              <p className="text-xs md:text-sm leading-relaxed">
                11月6日解禁の鳥取松葉がにの贅沢フルコース。濃厚な蟹味噌、甘い脚肉、幻のモサエビに舌鼓。市街地に湧く美肌の天然鳥取温泉で芯から温まる極上の夜。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">

        {/* Section 1: Deep Regional Culture & Geography */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-blue-100 text-blue-800 rounded-xl">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">NATURE ART & MYTHOLOGY</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                千年の風が創る風紋と神話の海：白銀の鳥取砂丘と因幡の白兎伝説
              </h2>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm md:text-base space-y-4">
            <p>
              山陰地方東部に位置する鳥取市は、日本海に面した雄大な海岸線と、中国山地から流れ出る千代川が育んだ因幡国の中心地です。その海岸線に広がる「鳥取砂丘」は、東西約16km、南北約2.4kmに及ぶ日本屈指の海岸砂丘で、国の天然記念物および山陰海岸ジオパークの中核に指定されています。千代川が運んだ花崗岩質の砂と日本海の潮流、そして吹き寄せる季節風が十万年以上の歳月をかけて創り上げた大自然の彫刻です。
            </p>
            <p>
              多くの観光客が訪れる春から秋の賑わいが去った11月から1月、鳥取砂丘は息をのむような静寂に包まれます。初冬の冷たい北西の季節風が吹き荒れると、乾燥した砂の表面に優美な幾何学模様「風紋（ふうもん）」が幾重にも刻まれます。さらに冬将軍が到来し雪が舞い降りると、黄金の砂丘は一晩にして広大な白銀の雪原へと姿を変えます。雪が砂と混ざり合いながら風によって削り出される風景は、極地の氷河や別世界を思わせる厳粛な美しさを湛え、砂丘最高所の「馬の背」に立てば、鉛色の空の下で白波を立てて砕ける日本海の激流が眼前に迫ります。
            </p>
            <p>
              砂丘から海岸線を西へ進むと、白砂青松の「白兎海岸」が広がります。『古事記』の上巻に記された日本最古の神話「因幡の白兎」の舞台であり、サメを騙して皮を剥がれた兎が、大国主命の慈悲深い教えによって蒲（がま）の穂綿で傷を癒やし、八上姫との婚姻を予言したという物語が伝わります。海岸の小高い丘に鎮座する「白兎神社」は、この白兎を「白兎神」として祀る古社で、日本最古の縁結びの聖地として新春の初詣に多くの人々が訪れます。境内には兎が体を洗ったとされる不身洗池があり、冬の澄んだ空気の中で良縁と無病息災を祈る時間は、古代神話の温かなロマンに包まれます。
            </p>
          </div>
        </section>

        {/* Section 2: Winter Food & Onsen */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-blue-100 text-blue-800 rounded-xl">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">GOURMET & THERMAL SPRINGS</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                冬の日本海の至宝「鳥取松葉がに」と幻のモサエビ、市街地に湧く鳥取温泉
              </h2>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm md:text-base space-y-4">
            <p>
              鳥取の冬を語る上で欠かせないのが、11月6日に漁が解禁される冬の味覚の王者「鳥取松葉がに」です。山陰沖の冷涼な深海（水深200〜400m）で育つオスのズワイガニは、厳しい荒波に揉まれることで身が極限まで引き締まり、繊維の一本一本に芳醇な甘みと旨味が凝縮しています。特に鳥取県では、甲羅幅13.5cm以上、重量1.2kg以上、身入りや形状の最高条件を満たした最高峰の松葉ガニを「五輝星（いつきぼし）」としてブランド化しており、初競りでは数百万の値がつくほどの全国的なステイタスを誇ります。
            </p>
            <p>
              宿や割烹でいただく松葉ガニ料理は、職人が絶妙な塩加減で茹で上げた「姿茹で」をはじめ、炭火で焼くことで香ばしい甘みが立ち上る「焼きガニ」、氷水で締めて花を咲かせた透き通る「カニ刺し」、濃厚な蟹味噌を甲羅の上でぐつぐつと炙る「甲羅味噌焼き」、そして出汁に旨味が溶け出す「カニすき鍋」と〆の雑炊に至るまで、贅を尽くした至福のフルコースが提供されます。さらに地元でしか味わえない幻の深海エビ「モサエビ（クロザコエビ）」は、鮮度の落ちやすさゆえに県外不出とされる逸品で、甘エビ以上の強い甘みと弾力ある食感が旅人を驚かせます。
            </p>
            <p>
              白銀の砂丘散策で冷え切った身体を温めてくれるのが、県庁所在地である鳥取市の中心街に湧く「鳥取温泉」です。全国でも極めて珍しい市街地の温泉街で、硫酸塩・塩化物泉の源泉は湯冷めしにくく、肌をしっとりと包み込む美肌効果を持ちます。池泉回遊式庭園を眺めながら自家源泉掛け流しの湯船に浸かり、湯上がりに鳥取の銘酒「日置桜」や「鷹勇」の熱燗を傾けるひとときは、冬の山陰旅の醍醐味そのものです。
            </p>
          </div>
        </section>

        {/* Section 3: Verified 5 Hotels */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              HOTEL SELECTION BY RAKUTEN API
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 font-journal-serif">
              雪砂丘・白兎神社初詣と松葉がにを満喫する厳選名宿5選
            </h2>
            <p className="text-slate-600 text-xs md:text-sm max-w-2xl mx-auto">
              楽天トラベルAPIより最新の空室状況・宿泊評価・公式写真を取得。自家源泉の天然温泉、活松葉ガニフルコース、鳥取砂丘や駅へのアクセスに優れた屈指の宿を厳選しました。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden hover:shadow-md transition duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-5/12 relative aspect-[4/3] md:aspect-auto">
                  <img 
                    src={hotel.img} 
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-md">
                    第{hotel.id}位
                  </div>
                </div>

                <div className="md:w-7/12 p-6 md:p-8 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                        {hotel.access}
                      </span>
                      <div className="flex items-center gap-1 text-blue-600 text-sm font-black">
                        <Star className="w-4 h-4 fill-blue-500 text-blue-500" />
                        <span>{hotel.rating}</span>
                        <span className="text-slate-400 text-xs font-normal">({hotel.reviews}件)</span>
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-black text-slate-900 leading-snug mb-2 font-journal-serif">
                      {hotel.name}
                    </h3>
                    <p className="text-xs text-slate-500 mb-3 line-clamp-2">
                      {hotel.special}
                    </p>

                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
                      {hotel.story}
                    </p>

                    <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 space-y-2 mb-4 text-xs">
                      <div>
                        <strong className="text-blue-900 font-bold">客室のこだわり：</strong>
                        <span className="text-slate-600 ml-1">{hotel.roomTip}</span>
                      </div>
                      <div>
                        <strong className="text-blue-900 font-bold">美食の極意：</strong>
                        <span className="text-slate-600 ml-1">{hotel.gourmetTip}</span>
                      </div>
                    </div>

                    <ul className="space-y-1.5 mb-4 text-xs text-slate-600">
                      {hotel.highlights.map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <span className="text-xs text-slate-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base md:text-lg font-black text-blue-700">{hotel.price}</span>
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-xs md:text-sm rounded-xl shadow-sm transition"
                    >
                      <span>楽天トラベルでプランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: 2 Days 1 Night Model Course */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-blue-100 text-blue-800 rounded-xl">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">SUGGESTED ITINERARY</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                1泊2日 白銀の鳥取砂丘＆白兎神社縁結び初詣・松葉がに堪能モデルコース
              </h2>
            </div>
          </div>

          <div className="space-y-6 text-xs md:text-sm">
            {/* Day 1 */}
            <div className="border-l-2 border-blue-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs">1日目</span>
                特急スーパーはくとで鳥取到着、鳥取砂丘の冬絶景と砂の美術館、鳥取温泉
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>11:30 JR特急「スーパーはくと」にて鳥取駅に到着</strong><br />
                大阪・京都から快適に到着。ホテルに荷物を預け、駅前バスターミナルから路線バスで鳥取砂丘へ向かう（約20分）。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>12:30 白銀の「鳥取砂丘」散策と冬の風紋鑑賞</strong><br />
                防寒ブーツを履いて砂丘へ。雪と砂が織りなす白銀のパノラマを歩き、「馬の背」の頂上から冬の日本海の荒波を見渡す感動のひととき。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>14:30 世界初の砂の彫刻美術館「砂の美術館」見学</strong><br />
                砂丘すぐそばの砂の美術館へ。砂と水だけで作られた圧倒的スケールの砂像彫刻の傑作群を屋内でじっくり鑑賞。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>16:30 鳥取温泉の宿にチェックイン、自家源泉掛け流しの名湯で芯から温まる</strong><br />
                冷えた身体を弱アルカリ性の天然温泉でじっくり癒やす。夕食には冬の主役「鳥取松葉がに」の姿茹でや焼きガニ、幻のモサエビを地酒とともに味わい尽くす。
              </p>
            </div>

            {/* Day 2 */}
            <div className="border-l-2 border-emerald-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-xs">2日目</span>
                神話の杜「白兎神社」で新春縁結び初詣、鳥取港海鮮市場でお土産調達
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>08:30 宿で地元食材の和朝食をいただきチェックアウト</strong><br />
                澄み渡る朝の空気の中を出発。車または路線バスで白兎海岸へ移動（約20分）。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>09:15 「白兎神社」へ参拝、うさぎの砂像と新春の良縁祈願</strong><br />
                日本最古の縁結びの神様に新年の開運祈願。鳥居の上へ「結び石」を乗せる願掛けを行い、白兎海岸の冬の青い海を眺める。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>11:30 「鳥取港海鮮市場 かろいち」で冬の買い出し＆海鮮丼ランチ</strong><br />
                鳥取港近くの海鮮市場「かろいち」へ。生け簀に並ぶ活松葉ガニやセコガニ（親ガニ）、ハタハタ、モサエビをお土産に調達。市場の食事処で熱々のカニ汁と海鮮丼を堪能。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>14:30 鳥取駅または鳥取砂丘コナン空港より帰路へ</strong><br />
                白銀の絶景と神話の祈り、冬の至高の蟹の余韻に浸りながら、大満足の山陰冬紀行を締めくくる。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-blue-100 text-blue-800 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                鳥取・鳥取砂丘＆白兎海岸 冬の旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div key={idx} className="border border-slate-100 rounded-xl p-4 md:p-5 bg-slate-50/50">
                <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2 flex items-start gap-2">
                  <span className="text-blue-600 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Internal Links / Related Winter Guides */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-sky-100 text-sky-800 rounded-xl">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest block">RELATED WINTER FEATURES</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                あわせて読みたい！山陰・西日本の厳選「冬の初詣＆松葉ガニ・名湯特集」
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
            <Link 
              href="/winter-tottori-misasa-onsen-matsuba-crab-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition block space-y-1"
            >
              <span className="font-bold text-blue-950 block">【鳥取】世界屈指のラジウム三朝温泉と松葉ガニ名宿</span>
              <span className="text-slate-500 text-xs">三徳山三佛寺投入堂の冬静寂と三朝温泉の湯治、極上松葉がに会席。</span>
            </Link>

            <Link 
              href="/winter-tottori-kaike-onsen-matsuba-crab-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition block space-y-1"
            >
              <span className="font-bold text-blue-950 block">【鳥取】米子皆生温泉と大山雪景色・境港松葉ガニ名宿</span>
              <span className="text-slate-500 text-xs">伯耆富士・大山の白銀パノラマと境港水揚げの新鮮な松葉ガニづくし。</span>
            </Link>

            <Link 
              href="/winter-shimane-izumo-taisha-kamiarizuki-shimane-wagyu-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition block space-y-1"
            >
              <span className="font-bold text-blue-950 block">【島根】出雲大社新春初詣と玉造温泉・しまね和牛名宿</span>
              <span className="text-slate-500 text-xs">日本一の大注連縄と八百万の神々が集う聖地、美肌温泉の贅沢ステイ。</span>
            </Link>

            <Link 
              href="/winter-hyogo-kinosaki-onsen-matsuba-crab-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition block space-y-1"
            >
              <span className="font-bold text-blue-950 block">【兵庫】城崎温泉七田外湯めぐりと津居山がに名宿</span>
              <span className="text-slate-500 text-xs">柳並木と太鼓橋の雪景色、下駄を鳴らして巡る外湯と青タグ津居山蟹。</span>
            </Link>
          </div>
        </section>

        {/* Internal Link CTA */}
        <section className="bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-black font-journal-serif">
            冬の日本全国・厳選特集をチェック
          </h2>
          <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto">
            11月・12月・1月が旬の温泉郷、新春初詣、冬の味覚、雪景色を特集したオリジナル旅行ガイドを多数公開中。次の旅の目的地を見つけてください。
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link 
              href="/features" 
              className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-black text-xs md:text-sm rounded-xl shadow transition"
            >
              特集記事一覧を見る
            </Link>
            <Link 
              href="/" 
              className="px-6 py-3 bg-blue-800 hover:bg-blue-700 text-white font-black text-xs md:text-sm rounded-xl border border-blue-600 transition"
            >
              トップページへ戻る
            </Link>
          
      <HubRelatedPosts currentSlug="winter-tottori-sakyu-snow-hakuto-shrine-hatsumode-matsubagani-onsen-stay" />
</div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 text-center text-xs border-t border-slate-800 mt-16">
        <p>© 2026 旅宿クラウド (croud-travel.pages.dev). All rights reserved.</p>
        <p className="mt-2 text-slate-500">掲載の宿泊料金や施設情報は楽天トラベルAPIより取得した参考データです。最新のプラン内容は各宿泊施設ページをご確認ください。</p>
      </footer>
    </article>
  );
}
