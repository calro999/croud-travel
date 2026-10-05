import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月皆生温泉の大山雪景色とカニ漁解禁】日本海の美肌塩湯・11月解禁境港活松葉ガニ＆鳥取和牛の宿5選",
  description: "日本海美保湾と秀峰・大山の白銀雪景色を望む「海の温泉」鳥取県・皆生温泉。11月6日のズワイガニ漁解禁とともに、隣接する境港から直送される一級品のタグ付き活松葉ガニ会席が開幕。ミネラル豊富な塩化物泉の美肌湯と、鳥取和牛オレイン55を堪能する冬の山陰美食宿ガイド。",
  keywords: '皆生温泉 宿泊 11月 12月, 皆生温泉 カニ 解禁, 境港 松葉ガニ 旅館 皆生, 皆生游月, 華水亭 皆生温泉, 大山 雪景色 皆生温泉, 鳥取和牛 オレイン55, 海の温泉 塩化物泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-tottori-kaike-onsen-matsuba-crab-stay/",
  },
  openGraph: {
    title: "【11・12月皆生温泉の大山雪景色とカニ漁解禁】日本海の美肌塩湯・11月解禁境港活松葉ガニ＆鳥取和牛の宿5選",
    description: "日本海美保湾と秀峰・大山の白銀雪景色を望む「海の温泉」鳥取県・皆生温泉。11月6日のズワイガニ漁解禁とともに、隣接する境港から直送される一級品のタグ付き活松葉ガニ会席が開幕。ミネラル豊富な塩化物泉の美肌湯と、鳥取和牛オレイン55を堪能する冬の山陰美食宿ガイド。",
    url: 'https://croud-travel.com/winter-tottori-kaike-onsen-matsuba-crab-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月皆生温泉の大山雪景色とカニ漁解禁】日本海の美肌塩湯・11月解禁境港活松葉ガニ＆鳥取和牛の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月皆生温泉の大山雪景色とカニ漁解禁】日本海の美肌塩湯・11月解禁境港活松葉ガニ＆鳥取和牛の宿5選",
    description: "日本海美保湾と秀峰・大山の白銀雪景色を望む「海の温泉」鳥取県・皆生温泉。11月6日のズワイガニ漁解禁とともに、隣接する境港から直送される一級品のタグ付き活松葉ガニ会席が開幕。ミネラル豊富な塩化物泉の美肌湯と、鳥取和牛オレイン55を堪能する冬の山陰美食宿ガイド。",
  }
};

  const faqList = [
    {
      q: "鳥取・境港のズワイガニ（松葉ガニ）漁解禁日と旬の時期は？",
      a: "鳥取県境港を含む山陰沖のズワイガニ（雄の松葉ガニ）漁は、毎年『11月6日』に一斉解禁されます。解禁直後の11月中旬から12月下旬は、身入りが良くみずみずしい極上の活松葉ガニが水揚げされるベストシーズンです。鳥取県で水揚げされた高品質な松葉ガニには産地証明の『青色タグ』が付けられ、全国の高級料亭や皆生温泉の各旅館へ毎日直送されます。また、雌ガニ（親ガニ・セコガニ）の内子・外子を味わえるのも年内の12月末までとなっています。"
    },
    {
      q: "『海の温泉』と呼ばれる皆生温泉の泉質と特徴は？",
      a: "皆生温泉は1900年、日本海の海中から湧き出ている湯を漁師が発見したことに始まります。泉質はナトリウム・カルシウム-塩化物泉（含塩化土類食塩泉）で、海水由来の豊富な塩分とミネラルを含みます。入浴すると塩分が毛穴を引き締め、肌の表面に膜を作って熱を逃がさないため、冬の寒さでも湯冷めしにくく『温まりの湯』『美肌の塩湯』として女性にも大人気です。タラソテラピー（海洋療法）効果も期待できます。"
    },
    {
      q: "皆生温泉から大山の雪景色はどのように見えますか？",
      a: "皆生温泉は弓ヶ浜海岸に位置し、東側を仰ぐと『伯耆富士（ほうきふじ）』と呼ばれる名峰・大山（標高1,729m）を真正面に望むことができます。11月下旬になると大山山頂に初冠雪が記録され、12月には山全体が純白の雪に覆われます。日本海の青い海と砂浜、そして背後にそびえ立つ大山の白銀の雪景色のコントラストは、山陰を代表する冬の絶景パノラマです。"
    },
    {
      q: "米子駅や米子鬼太郎空港からのアクセス方法は？",
      a: "JR山陰本線・伯備線の米子駅からは、皆生温泉行きの路線バス（日本交通・日ノ丸バス）が約15〜20分間隔で運行しており所要約20分です。米子鬼太郎空港（羽田からANAが毎日6往復）からは空港連絡バスまたはタクシーで約20分と至便です。お車の場合は米子自動車道・米子ICより約10分。12月中旬以降に大山観光やお車でお越しの際は、山間部で降雪・凍結があるためスタッドレスタイヤの装着が必須です。"
    }
  ];

export default function KaikeWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-tottori-kaike-onsen-matsuba-crab-stay#article",
        "headline": "【11・12月皆生温泉の大山雪景色とカニ漁解禁】日本海の美肌塩湯・11月解禁境港活松葉ガニ＆鳥取和牛の宿5選",
        "description": "日本海美保湾と秀峰・大山の白銀雪景色を望む「海の温泉」鳥取県・皆生温泉。11月6日のズワイガニ漁解禁とともに、隣接する境港から直送される一級品のタグ付き活松葉ガニ会席が開幕。ミネラル豊富な塩化物泉の美肌湯と、鳥取和牛オレイン55を堪能する冬の山陰美食宿ガイド。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-27T00:00:00+09:00",
        "dateModified": "2026-09-27T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド 編集部",
          "url": "https://croud-travel.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-tottori-kaike-onsen-matsuba-crab-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-tottori-kaike-onsen-matsuba-crab-stay#faq",
        "mainEntity": faqList.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.com/winter-tottori-kaike-onsen-matsuba-crab-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "皆生游月",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168732%2F168732.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "皆生温泉　華水亭",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2038%2F2038.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "皆生温泉　皆生菊乃家",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12677%2F12677.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "皆生温泉　湯喜望　白扇",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13895%2F13895.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "皆生温泉　皆生つるや　四季を奏でるさらさの宿",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12537%2F12537.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "皆生游月",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/168732/168732.jpg",
              rating: 4.74,
              reviews: 1634,
              price: "¥15,950〜",
              access: "お車で米子自動車道米子ICより車10分。JR米子駅より公共バス・タクシー利用で15分、米子空港よりタクシー利用で20分。",
              special: "絶景インフィニティ天空露天風呂が大人気！全室《温泉》露天風呂付",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168732%2F168732.html",
              story: "弓ヶ浜の海岸線に面して建ち、全室に日本海を一望する客室露天風呂を備えた山陰屈指のハイクラスリゾート旅館「皆生游月（かいけゆうげつ）」。宿の最大の魅力は、地上28メートルに位置するインフィニティ天空露天風呂「潮騒の湯」。湯船に身を沈めると、温泉の水面と初冬の日本海がシームレスに繋がり、まるで海に浮かんでいるかのような神秘的な浮遊感を味わえます。11月・12月には、白く冠雪した名峰・大山（伯耆富士）の雄姿と日本海からの心地よい潮風を感じながらの湯あみが格別。モダンで洗練された和の意匠と贅沢なプライベート空間が、極上の冬の休日を叶えてくれます。",
              roomTip: "全室オーシャンビュー＆テラス露天風呂付き客室。初冬の朝、日本海から昇る幻想的な朝陽を客室の湯船から独り占めできる特等席です。",
              gourmetTip: "オープンキッチンのダイニングで味わう冬の創作会席。11月解禁の境港直送「活松葉ガニ」を、繊細なカニ刺し、香ばしい炭火焼きガニ、濃厚な甲羅味噌焼きで贅沢に。さらに鳥取県が誇るブランド牛「鳥取和牛オレイン55」のローストも絶品です。",
              highlights: [
                "全室オーシャンビュー客室露天風呂完備＆海と繋がるインフィニティ天空露天風呂",
                "地上28mのインフィニティ温泉「潮騒の湯」＆名峰・大山（伯耆富士）の初冬冠雪を眺望",
                "境港直送活松葉ガニ創作コース＆鳥取和牛オレイン55ローストの贅沢マリアージュ"
              ]
            },
            {
              id: 2,
              name: "皆生温泉　華水亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2038/2038.jpg",
              rating: 4.60,
              reviews: 942,
              price: "¥8,800〜",
              access: "ＪＲ米子駅より車で１５分、米子空港より車で２０分、米子自動車道米子ＩＣより車で１０分",
              special: "2026年7月18日お食事処リニューアルオープン♪日本海の眺望と季節の会席が愉しめる自家源泉の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2038%2F2038.html",
              story: "日本海の波打ち際に佇み、数寄屋造りの格調高い建築美と日本庭園が迎えてくれる皆生屈指の純和風高級旅館「皆生温泉 華水亭（かすいてい）」。敷地内に自家源泉「宝生の泉」を所有し、豊富な湯量を誇る大浴場や露天風呂、海を望むプライベートな貸切風呂で、美肌効果抜群の弱アルカリ性塩化物泉を心ゆくまで堪能できます。館内の随所に季節の生け花や伝統工芸が飾られ、初冬の日本海を望むロビーラウンジでは優雅な琴の音が響きます。お部屋係の細やかな心遣いと、静寂に包まれた和の空間が、大人の旅情を深く満たしてくれます。",
              roomTip: "日本海と白砂青松の海岸線をパノラマで望む「碧水亭」客室や露天風呂付き客室。初冬の海と遠くの大山の冠雪美を静かに眺めながら過ごせます。",
              gourmetTip: "熟練の料理人が腕を振るう冬の松葉ガニフルコース会席。タグ付き活松葉ガニを贅沢にお一人につき1.5〜2杯使用し、花咲くカニ刺し、茹で姿ガニ、熱々のカニすき鍋、カニ雑炊まで、本場の冬の味覚を余すところなく味わえます。",
              highlights: [
                "自家源泉「宝生の泉」を所有する数寄屋の名門＆日本海と大山雪景色を望む絶好の立地",
                "弱アルカリ性塩化物泉の源泉かけ流し＆海を望む贅沢な貸切風呂と日本庭園",
                "タグ付き活松葉ガニ姿茹で・カニ刺し・カニすき鍋・カニ雑炊の極上フルコース"
              ]
            },
            {
              id: 3,
              name: "皆生温泉　皆生菊乃家",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12677/12677.jpg",
              rating: 4.45,
              reviews: 1415,
              price: "¥6,600〜",
              access: "ＪＲ米子駅よりタクシーで約15分/米子ＩＣ下車、境港方面へ５ｋｍ/米子空港よりタクシーで約20分",
              special: "【部屋食・個室食確約プラン有】部屋から日本海一望♪又行きたくなる宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12677%2F12677.html",
              story: "日本海の目の前に位置し、女将やスタッフの温かな笑顔と心のこもったもてなしでリピーターが絶えない老舗宿「皆生温泉 皆生菊乃家（きくのや）」。館内に入ると、名物の女将による書や温もりあふれる民芸調の装飾が旅人を迎えます。宿自慢の展望露天風呂からは、初冬の日本海の水平線と弓ヶ浜の海岸線が一望でき、塩分を豊富に含んだ「海の温泉」が体の芯までぽかぽかに温めてくれます。毎晩ロビーで開催される民謡や館内イベントも好評で、アットホームで心温まる冬の温泉旅を愉しみたい方に最適の宿です。",
              roomTip: "海側に面した和室やモダンなベッド付き和洋室。寄せては返す初冬の波音をBGMに、畳の上で足を伸ばしてのんびりと寛ぐことができます。",
              gourmetTip: "料理長厳選の「松葉ガニづくし会席」。境港で水揚げされた新鮮なズワイガニの炭火焼きやカニ天ぷら、濃厚なカニ味噌甲羅焼き、そして鳥取牛の陶板焼きなど、山陰の冬の恵みがぎっしり詰まったボリューム満点の料理です。",
              highlights: [
                "心温まるおもてなしと民芸調の癒やし宿＆日本海を一望する展望露天風呂",
                "美肌効果抜群の海の温泉＆毎夜開催のロビーイベントとアットホームな滞在",
                "松葉ガニ炭火焼き＆カニ甲羅味噌焼きと鳥取牛陶板焼きのボリューム満点会席"
              ]
            },
            {
              id: 4,
              name: "皆生温泉　湯喜望　白扇",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13895/13895.jpg",
              rating: 4.28,
              reviews: 1945,
              price: "¥6,050〜",
              access: "米子自動車道『米子IC』より15分／岡山駅より特急やくもで約2時間『米子駅』からバスで15分／バス停より約500ｍ",
              special: "【絶景オーシャンビュー】皆生の老舗旅館で心安らぐひとときをお過ごしください",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13895%2F13895.html",
              story: "全館がすべて畳敷きという贅沢な造りで、館内用スリッパを使わずに素足で畳の温もりを感じながら過ごせる癒やしの宿「皆生温泉 湯喜望 白扇（はくせん）」。全客室がオーシャンビューで、窓を開ければ日本海の雄大な大海原と初冬の潮風が広がります。展望大浴場や露天風呂からも日本海のパノラマを一望でき、海中から湧き出すミネラルたっぷりのナトリウム・カルシウム塩化物泉が肌をすべすべに磨き上げてくれます。素足で歩く心地よさと、海を間近に感じる静かな環境が、旅の疲れを優しく解き放ってくれます。",
              roomTip: "展望ジャグジーや客室露天風呂を備えた最上階の和洋室。刻一刻と表情を変える冬の日本海の波飛沫と夕暮れを、湯船から誰にも邪魔されずに楽しめます。",
              gourmetTip: "冬の山陰美食膳。境港直送のタグ付き活松葉ガニを使用したカニ鍋やカニ刺し、鳥取の豊かな自然が育んだ鳥取和牛のしゃぶしゃぶなど、贅沢な冬の二大味覚を満喫できます。",
              highlights: [
                "全館畳敷きの贅沢な素足空間＆全室オーシャンビューと波音を聞く展望大浴場",
                "ミネラル豊富な塩化物泉の温浴効果＆プライベートな客室展望風呂の充実",
                "境港直送活松葉ガニ鍋＆鳥取和牛しゃぶしゃぶの冬の二大味覚プレミアム会席"
              ]
            },
            {
              id: 5,
              name: "皆生温泉　皆生つるや　四季を奏でるさらさの宿",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12537/12537.jpg",
              rating: 4.43,
              reviews: 1179,
              price: "¥7,260〜",
              access: "ICより431号直進15分、空港から車、タクシー20分。米子駅から車で15分、バス25分。勝田神社まで車15分",
              special: "大山と日本海を遠望できる東館、庭園を眺める風情ある南館など多彩な客室を有する、料理自慢の温泉宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12537%2F12537.html",
              story: "昭和の文人墨客や多くの著名人に愛されてきた伝統を誇り、池を配した風情豊かな日本庭園に囲まれた名門旅館「皆生つるや 四季を奏でるさらさの宿」。館内には格調高い日本画や調度品が飾られ、落ち着いた数寄屋の佇まいが旅人を優雅な非日常へと誘います。庭園を望む大浴場と露天風呂には、皆生温泉の源泉がたっぷりと注がれ、良質な塩化物泉の温浴効果で湯冷め知らず。つるやならではの伝統的な会席料理と、付かず離れずの洗練されたおもてなしが、静かで贅沢な大人の冬旅を約束してくれます。",
              roomTip: "美しい日本庭園を望む数寄屋造りの和室や、ベッドを配したモダンな和洋室。障子を開けると手入れされた木々と初冬の澄んだ庭園風景が広がります。",
              gourmetTip: "四季の彩りを映す本格京風会席。冬は境港直送の活松葉ガニを使ったカニ会席が主役。カニ刺しや焼きガニ、カニすきはもちろん、鳥取和牛のすき焼きや日本海で獲れた旬の白身魚のお造りなど、一品一品に職人の技が光ります。",
              highlights: [
                "昭和の文人が愛した日本庭園の宿＆数寄屋建築と名湯露天風呂で過ごす優雅な休日",
                "庭園露天風呂の良質な湯浴み＆伝統を受け継ぐ洗練されたおもてなしの心",
                "伝統京風カニ会席＆境港活松葉ガニと鳥取和牛すき焼きの上品な味わい"
              ]
            }
  ];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-blue-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="皆生温泉・初冬の日本海美保湾と雪化粧した大山の絶景露天風呂"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/90 text-blue-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-blue-800/50">
            <Eye className="w-4 h-4 text-blue-300" />
            <span>11月・12月限定 山陰松葉ガニ解禁＆大山雪景色・美肌塩湯特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月皆生温泉の大山雪景色とカニ漁解禁】<br className="hidden sm:inline" />
            日本海の美肌塩湯・11月解禁境港活松葉ガニ＆鳥取和牛の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            11月6日、日本海屈指のカニ水揚げを誇る境港で冬の松葉ガニ漁が一斉解禁。弓ヶ浜の波打ち際から湧く美肌の塩化物泉。白銀に輝く秀峰・大山の冠雪パノラマを望み、青タグ付き極上活松葉ガニと鳥取和牛オレイン55に酔いしれる冬の山陰旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-blue-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-blue-400" /> 鳥取県米子市皆生温泉</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-blue-100">
            <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">Sanin Sea Hot Spring Legacy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                海中から湧く美肌の塩湯と大山の冠雪。11月6日、冬の王様「松葉ガニ」解禁
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            鳥取県西部に位置する「皆生温泉（かいけおんせん）」は、弓ヶ浜の白砂青松の海岸線に沿って旅館街が広がる、山陰を代表する海辺の温泉郷です。明治33年（1900年）、浅瀬の海中から泡を立てて湧き出ている熱湯を地元の漁師が偶然発見したことから始まり、「海の温泉」「東の熱海、西の皆生」と称えられてきました。背後には中国地方最高峰の名峰・大山（だいせん、標高1,729m）がそびえ、海と山の雄大な自然美を同時に堪能できる日本屈指のロケーションを誇ります。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            皆生温泉の冬の幕開けを告げるのが、毎年「11月6日」に一斉解禁される山陰のズワイガニ（松葉ガニ）漁です。温泉街から車でわずか20分の距離にある境港は、全国屈指のズワイガニ・ベニズワイガニの水揚げ量を誇る日本海の一大漁業拠点。水揚げされたばかりの活きの良い松葉ガニが毎日市場から直接届くため、鮮度・身入り・甘みのすべてが最高峰。鳥取県が認定する青いタグの付いた活松葉ガニは、冬の山陰グルメの頂点として全国の旅人を魅了します。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月下旬になると大山が初雪をまとい、12月には山頂から山麓までが白銀世界へと変わります。海辺の露天風呂から眺める、冬の荒々しい日本海の青と、白く輝く大山の雪景色のコントラストは息をのむ美しさ。そして海中湧出ならではの塩化物泉は、豊富な塩分とミネラルが肌をベールのように包み込み、体の芯までじっくりと温めて冬の冷えを解消してくれます。
          </p>
          
          <div className="bg-blue-50/70 rounded-2xl p-5 border border-blue-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-blue-700" />
                11月・12月皆生温泉 旅のハイライト
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                11月6日解禁境港青タグ活松葉ガニ・大山白銀雪景色パノラマ・海の美肌塩湯・鳥取和牛オレイン55
              </p>
            </div>
            <a
              href="#hotels"
              className="px-5 py-2.5 bg-blue-800 hover:bg-blue-900 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              厳選名宿5選を見る
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-stone-100/80 rounded-2xl p-6 border border-stone-200">
          <h2 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-blue-700" />
            目次・インデックス
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-stone-700">
            <a href="#crab-feast" className="hover:text-blue-700 hover:underline flex items-center gap-1.5">
              <span>1. 11月6日境港松葉ガニ漁解禁：青タグ活ガニの極上フルコース</span>
            </a>
            <a href="#ocean-salt" className="hover:text-blue-700 hover:underline flex items-center gap-1.5">
              <span>2. 海中湧出の美肌塩湯：タラソテラピー効果と温まりの効能</span>
            </a>
            <a href="#daisen-heritage" className="hover:text-blue-700 hover:underline flex items-center gap-1.5">
              <span>3. 秀峰・大山の初冠雪と12月限定「親ガニ」の秘密</span>
            </a>
            <a href="#hotels" className="hover:text-blue-700 hover:underline flex items-center gap-1.5">
              <span>4. 11・12月に泊まりたい皆生温泉の名宿厳選5選</span>
            </a>
            <a href="#gourmet" className="hover:text-blue-700 hover:underline flex items-center gap-1.5">
              <span>5. 山陰冬の贅の極み：活松葉ガニとブランド牛「鳥取和牛」</span>
            </a>
            <a href="#itinerary" className="hover:text-blue-700 hover:underline flex items-center gap-1.5">
              <span>6. 1泊2日 王道モデルコース（境港水木しげるロードと皆生温泉）</span>
            </a>
            <a href="#faq" className="hover:text-blue-700 hover:underline flex items-center gap-1.5">
              <span>7. よくある質問（FAQ）と米子空港・駅からのアクセス</span>
            </a>
          </nav>
        </section>

        {/* Crab Feast Section */}
        <section id="crab-feast" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">King of Sanin Winter Crab</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                11月6日境港松葉ガニ漁解禁：青タグ活ガニの極上フルコース
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            山陰の冬の風物詩であるズワイガニ漁。鳥取県境港で水揚げされる雄のズワイガニは「松葉ガニ」と呼ばれ、厳しい基準を満たした一級品には鳥取県産を証明する「青色のブランドタグ」が装着されます。皆生温泉は境港の目と鼻の先に位置するため、競り落とされたばかりの活ガニを生け簀から直接仕入れることができます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            氷水で締めて花を咲かせた「カニ刺し」は、繊維が立ち上がり驚くほどの透明感と濃厚な甘みが広がります。炭火の上で香ばしい煙を上げて焼き上がる「焼きガニ」、濃厚なカニ味噌をぐつぐつと煮詰めて地酒を注ぐ「甲羅酒」、そしてカニの旨味が凝縮された出汁でいただく「カニすき鍋」と〆の「カニ雑炊」。一人につき1杯から2杯分の松葉ガニを贅沢に味わい尽くす冬の夜は、まさに至福の時間です。
          </p>
        </section>

        {/* Ocean Salt Section */}
        <section id="ocean-salt" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-800">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">Healing Ocean Salt Spring</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                海中湧出の美肌塩湯：タラソテラピー効果と温まりの効能
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            皆生温泉の泉質は、ナトリウム・カルシウム-塩化物泉（高張性中性高温泉）です。湧出温度は60℃〜83℃と非常に高温で、毎分4,400リットルを超える豊かな湯量を誇ります。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            海水のミネラルと高濃度の塩分を含んだお湯は、入浴することで肌の表面のタンパク質と結合して保護膜を形成。入浴後も熱が逃げず、体の芯までポカポカとしたぬくもりが長時間持続します。また、豊富に含まれるカルシウムイオンが肌を引き締め、新陳代謝を促進するため「美肌の塩湯」としても評判。冬の乾燥した肌をしっとりと潤し、日頃の疲労や神経痛を和らげてくれます。
          </p>
        </section>

        
        {/* Daisen Heritage Section */}
        <section id="daisen-heritage" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-800">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">Sacred Mountain & Winter Peak</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                秀峰・大山（伯耆富士）の白銀初冠雪と山陰の冬を彩る「親ガニ」の秘密
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            皆生温泉の海岸から弓ヶ浜越しに仰ぎ見る名峰「大山（だいせん）」は、標高1,729メートルを誇る中国地方の最高峰です。西側から眺めると富士山のように均整の取れた優美な山容を見せることから「伯耆富士（ほうきふじ）」と称され、古くから神仏が宿る霊山として人々の崇敬を集めてきました。開山1300年を超える名刹「大山寺」や、日本一長い石畳の参道を持つ「大神山神社奥宮」が山麓に鎮座し、初冬には荘厳な静寂に包まれます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月下旬になると大山山頂に純白の初雪が降り積もり、12月には山全体が雪化粧をまといます。皆生温泉の露天風呂から望む、冬の荒々しい日本海のコバルトブルーと、白銀に輝く大山のコントラストは、山陰の冬旅を象徴する無二の絶景パノラマです。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            また、11月6日のカニ解禁で絶対に味わいたいのが、雌のズワイガニである「親ガニ（セコガニ・コッペガニ）」です。雄の松葉ガニに比べて小ぶりですが、甲羅の内側にある鮮やかなオレンジ色の「内子（うちこ）」と、腹に抱えたプチプチ食感の「外子（そとこ）」、そして濃厚なカニ味噌が凝縮された冬の宝箱。資源保護のため漁期が12月末までの約2ヶ月間と極めて短く、地元の名物「親ガニ汁」や甲羅盛りとして、初冬の皆生温泉を訪れる美食家だけが味わえる至高の季節限定品です。
          </p>
        </section>

        {/* Hotel List Section */}
        <section id="hotels" className="space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold">
              <Flame className="w-3.5 h-3.5" />
              <span>Rakuten Travel Official API Verified Selection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              11・12月に泊まりたい皆生温泉の名宿厳選5選
            </h2>
            <p className="text-stone-600 text-sm max-w-2xl mx-auto">
              楽天トラベルAPIから最新の口コミ評価・宿泊料金・空室情報を取得。日本海と大山雪景色の絶景露天風呂と、境港直送活松葉ガニ＆鳥取和牛を堪能できる名宿5軒をご紹介します。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/90 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image Container */}
                  <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-stone-100">
                    <Image
                      src={hotel.img}
                      alt={hotel.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-md">
                      厳選名宿 No.{hotel.id}
                    </div>
                  </div>

                  {/* Hotel Content */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                        <span className="text-xs font-semibold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                          {hotel.access}
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2 py-0.5 rounded-md">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="font-bold text-sm text-stone-800">{hotel.rating}</span>
                          <span className="text-xs text-stone-400">({hotel.reviews}件)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug mb-3">
                        {hotel.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 mb-4 italic">
                        「{hotel.special}」
                      </p>

                      <p className="text-stone-700 text-sm leading-relaxed mb-5">
                        {hotel.story}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 bg-stone-50 p-4 rounded-2xl border border-stone-200/70 mb-5">
                        <h4 className="text-xs font-bold text-stone-900 flex items-center gap-1.5 uppercase tracking-wide">
                          <CheckCircle2 className="w-4 h-4 text-blue-700" />
                          冬の滞在おすすめポイント
                        </h4>
                        <ul className="text-xs text-stone-600 space-y-1.5 pl-1">
                          {hotel.highlights.map((hl: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-blue-700 font-bold">•</span>
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                          <span className="font-bold text-blue-900 block mb-1 flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5" /> 客室の選び方
                          </span>
                          <p className="text-stone-600">{hotel.roomTip}</p>
                        </div>
                        <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                          <span className="font-bold text-blue-900 block mb-1 flex items-center gap-1">
                            <Utensils className="w-3.5 h-3.5" /> 冬の料理長おすすめ
                          </span>
                          <p className="text-stone-600">{hotel.gourmetTip}</p>
                        </div>
                      </div>
                    </div>

                    {/* Booking Footer */}
                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-stone-500 block">参考宿泊料金（1泊2食付／2名1室時1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-extrabold text-blue-900">
                          {hotel.price}
                        </span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white font-bold rounded-xl shadow-md transition-all duration-200 text-sm hover:scale-[1.02]"
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
            <div className="p-2 rounded-xl bg-blue-50 text-blue-800">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">Winter Delicacies</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                山陰冬の贅の極み：境港タグ付き活松葉ガニとブランド牛「鳥取和牛」
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-stone-700">
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-700" />
                境港直送「青タグ活松葉ガニ」
              </h3>
              <p className="leading-relaxed text-sm">
                日本海深海で栄養豊富なプランクトンを食べて育った松葉ガニ。境港に水揚げされる活松葉ガニは、太い脚にぎっしりと身が詰まり、上品な甘みとみずみずしさが際立ちます。花が咲いたようなカニ刺し、甲羅に炭火を当てて香ばしく焼き上げる焼きガニ、熱々のカニすき鍋、そしてカニ味噌を余すことなく味わう甲羅酒まで、本場ならではの贅を尽くしたコースを堪能できます。
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-700" />
                鳥取の至宝「鳥取和牛オレイン55」
              </h3>
              <p className="leading-relaxed text-sm">
                江戸時代からの伝統を誇る名牛の産地・鳥取県。オリーブオイルの主成分でもある「オレイン酸」を55%以上含む厳選された黒毛和牛「鳥取和牛オレイン55」は、融点が16℃と極めて低く、口に入れた瞬間にとろけるような滑らかな舌触りと上品な赤身の香りが広がります。冬の松葉ガニとともにステーキやすき焼きで味わうプランは絶品です。
              </p>
            </div>
          </div>
        </section>

        {/* Itinerary Section */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-800">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">Recommended 2-Day Tour</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                1泊2日 王道モデルコース：境港水木しげるロードと皆生温泉・大山雪景色の旅
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-blue-800 pl-4 sm:pl-6 space-y-2">
              <span className="text-xs font-extrabold text-blue-800 uppercase tracking-wider">【1日目】米子到着〜境港でカニ三昧と皆生温泉ステイ</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                11:00 米子鬼太郎空港（またはJR米子駅）到着 → 境港「水木しげるロード」へ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                妖怪ブロンズ像が並ぶ水木しげるロードを散策。境港水産物直売センターで新鮮なカニや海鮮丼のランチ。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                14:00 弓ヶ浜海岸をドライブ → 皆生温泉へ到着
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                海岸線越しにそびえる大山の初冬冠雪を眺望。温泉街に到着しチェックイン。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                15:30 海を望む露天風呂で塩化物泉を満喫
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                日本海の潮騒を聞きながら温まりの塩湯に浸かる。夕食は境港直送の青タグ活松葉ガニフルコースに舌鼓。
              </p>
            </div>

            <div className="border-l-2 border-stone-300 pl-4 sm:pl-6 space-y-2 pt-2">
              <span className="text-xs font-extrabold text-stone-500 uppercase tracking-wider">【2日目】朝の海風呂〜大山山麓散策とご当地土産へ</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                08:00 日本海から昇る朝陽を望む展望風呂 → 地元食材の和朝食
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                爽快な朝の海風を感じる入浴。鳥取県産コシヒカリと宍道湖のしじみ汁、地魚干物の朝食。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                10:00 大山山麓の「大山まきばみるくの里」へ（または米子城跡展望台へ）
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                雪化粧した大山の雄姿を間近に鑑賞し、名物の濃厚ソフトクリームを堪能。米子駅でお土産を購入し帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-800">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">Traveler's FAQ</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                よくある質問（FAQ）と初冬の旅のアドバイス
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-blue-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links / Related Guides */}
        <section className="bg-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">Related Winter Crab & Onsen Guides</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい山陰・冬のカニ温泉特集
            </h2>
            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
              11月・12月ならではの絶景や旬の松葉ガニを堪能できる全国各地の名湯ガイドを多数公開中。次の旅の計画にぜひお役立てください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-tottori-misasa-onsen-matsuba-crab-stay"
              className="bg-blue-900/80 hover:bg-blue-900 p-4 rounded-2xl transition border border-blue-800/50 block group"
            >
              <span className="text-xs text-blue-300 font-semibold block mb-1">鳥取・三朝</span>
              <h3 className="text-sm font-bold group-hover:text-blue-200 transition">三朝温泉 世界屈指のラジウム泉と活松葉ガニの宿</h3>
            </Link>
            <Link 
              href="/winter-hyogo-kinosaki-onsen-matsuba-crab-stay"
              className="bg-blue-900/80 hover:bg-blue-900 p-4 rounded-2xl transition border border-blue-800/50 block group"
            >
              <span className="text-xs text-blue-300 font-semibold block mb-1">兵庫・城崎</span>
              <h3 className="text-sm font-bold group-hover:text-blue-200 transition">城崎温泉 七つの外湯めぐりと津居山カニの宿</h3>
            </Link>
            <Link 
              href="/winter-kyoto-amanohashidate-matsuba-crab-stay"
              className="bg-blue-900/80 hover:bg-blue-900 p-4 rounded-2xl transition border border-blue-800/50 block group"
            >
              <span className="text-xs text-blue-300 font-semibold block mb-1">京都・天橋立</span>
              <h3 className="text-sm font-bold group-hover:text-blue-200 transition">天橋立温泉 白砂青松雪景色とカニ解禁・寒ブリの宿</h3>
            </Link>
            <Link 
              href="/winter-ishikawa-kaga-yamashiro-kano-crab-stay"
              className="bg-blue-900/80 hover:bg-blue-900 p-4 rounded-2xl transition border border-blue-800/50 block group"
            >
              <span className="text-xs text-blue-300 font-semibold block mb-1">石川・加賀</span>
              <h3 className="text-sm font-bold group-hover:text-blue-200 transition">山代温泉 加能ガニ解禁と九谷焼・名湯露天の宿</h3>
            </Link>
            <Link 
              href="/winter-wakayama-nanki-shirahama-kue-hotspring-stay"
              className="bg-blue-900/80 hover:bg-blue-900 p-4 rounded-2xl transition border border-blue-800/50 block group"
            >
              <span className="text-xs text-blue-300 font-semibold block mb-1">和歌山・白浜</span>
              <h3 className="text-sm font-bold group-hover:text-blue-200 transition">南紀白浜温泉 太平洋夕陽と幻の紀州本クエ鍋の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-blue-900/80 hover:bg-blue-900 p-4 rounded-2xl transition border border-blue-800/50 block group"
            >
              <span className="text-xs text-blue-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-blue-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
