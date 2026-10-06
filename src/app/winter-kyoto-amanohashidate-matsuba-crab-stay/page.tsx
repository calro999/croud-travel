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
  title: '【11・12月天橋立】寒ブリしゃぶしゃぶ！名宿5選',
  description: '日本三景の筆頭・京都府丹後天橋立。11月6日の冬のズワイガニ漁解禁とともに美食の最高峰シーズンが開幕。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '天橋立 宿泊 11月 12月, 天橋立 カニ 解禁, 間人ガニ 旅館 天橋立, 松葉ガニ カニ刺し 天橋立, 天橋立温泉 文珠荘 北野屋, 天橋立 冬 雪景色 飛龍観, 寒ブリしゃぶしゃぶ 丹後',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kyoto-amanohashidate-matsuba-crab-stay/",
  },
  openGraph: {
    title: '【11・12月天橋立】寒ブリしゃぶしゃぶ！名宿5選',
    description: '日本三景の筆頭・京都府丹後天橋立。11月6日の冬のズワイガニ漁解禁とともに美食の最高峰シーズンが開幕。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-kyoto-amanohashidate-matsuba-crab-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月天橋立の白砂青松雪景色とカニ漁解禁】日本三景を望む冬の美肌湯・幻の間人ガニ＆寒ブリしゃぶしゃぶの宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月天橋立の白砂青松雪景色とカニ漁解禁】日本三景を望む冬の美肌湯・幻の間人ガニ＆寒ブリしゃぶしゃぶの宿5選",
    description: "日本三景の筆頭・京都府丹後天橋立。11月6日の冬のズワイガニ漁解禁とともに美食の最高峰シーズンが開幕。松並木にうっすらと初雪が降り積もる「白砂青松の幻雪景」、地下1,500mから湧き出る茶褐色の美肌湯「天橋立温泉」、そして幻の極上「間人ガニ（たいざがに）」や丹後若狭湾の寒ブリしゃぶしゃぶを味わう至高の冬名宿ガイド。",
  }
};

export default function AmanohashidateWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-kyoto-amanohashidate-matsuba-crab-stay#article",
        "headline": "【11・12月天橋立の白砂青松雪景色とカニ漁解禁】日本三景を望む冬の美肌湯・幻の間人ガニ＆寒ブリしゃぶしゃぶの宿5選",
        "description": "日本三景の筆頭・京都府丹後天橋立。11月6日の冬のズワイガニ漁解禁とともに美食の最高峰シーズンが開幕。松並木にうっすらと初雪が降り積もる「白砂青松の幻雪景」、地下1,500mから湧き出る茶褐色の美肌湯「天橋立温泉」、そして幻の極上「間人ガニ（たいざがに）」や丹後若狭湾の寒ブリしゃぶしゃぶを味わう至高の冬名宿ガイド。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
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
          "@id": "https://croud-travel.pages.dev/winter-kyoto-amanohashidate-matsuba-crab-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-kyoto-amanohashidate-matsuba-crab-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "丹後・天橋立の冬のズワイガニ漁解禁日と旬の時期は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "京都府丹後地方や日本海側のズワイガニ漁は、毎年『11月6日0時』に一斉に解禁されます。11月上旬から翌年3月下旬までが松葉ガニのシーズンですが、特に11月中旬〜12月下旬はカニの身入りが良く、雌ガニ（コッペガニ・セコガニ）の内子・外子を味わえる貴重な時期です。京都府間人（たいざ）港で水揚げされる幻の『間人ガニ（緑タグ）』や舞鶴港の『津居山ガニ』など、極上のブランドガニが各宿の会席を彩ります。"
            }
          },
          {
            "@type": "Question",
            "name": "天橋立の雪景色（白砂青松の幻雪景）はいつ頃見られますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "天橋立で雪景色が見られるのは、例年12月上旬から2月にかけてです。約5,000本の松並木にうっすらと純白の雪が降り積もり、青い海と白い砂浜、雪をかぶった緑の松が織りなす光景は『幻雪の天橋立』と呼ばれ、日本三景の中でも屈指の幽玄な美しさを誇ります。天橋立ビューランド（南側・飛龍観）や傘松公園（北側・昇龍観）の展望台から見下ろす雪のパノラマは息をのむ絶景です。"
            }
          },
          {
            "@type": "Question",
            "name": "京都駅や大阪駅からのアクセス方法と所要時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "JR京都駅からは特急『はしだて』号で乗り換えなし約2時間5分で天橋立駅に到着します。JR新大阪駅・大阪駅からは特急『こうのとり』で福知山駅乗り換え、京都丹後鉄道で約2時間15分です。お車の場合は京都縦貫自動車道が全線開通しているため、京都市内から約1時間30分〜2時間、大阪市内から約2時間とドライブも快適。12月中旬以降にお車でお越しの際はスタッドレスタイヤの装着をおすすめします。"
            }
          },
          {
            "@type": "Question",
            "name": "天橋立温泉の泉質と特徴は何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "天橋立温泉は1999年に地下1,500メートルから湧出した比較的新しい名湯で、『神妙の湯』の別名を持ちます。泉質は含塩化土類食塩泉（ナトリウム-塩化物泉）で、空気に触れると微かに茶褐色を帯びるのが特徴です。海水のミネラルと塩分を豊富に含み、とろりとした湯ざわりで肌がしっとりすべすべになる『美肌の湯』として知られます。塩分が膜を作るため保温効果が極めて高く、冬でも湯冷めしません。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-kyoto-amanohashidate-matsuba-crab-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "天橋立温泉　和のリゾート　文珠荘",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76913%2F76913.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "天橋立温泉　ホテル北野屋",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6010%2F6010.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "天橋立温泉　対橋楼",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F80800%2F80800.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "天橋立温泉　天橋立ホテル",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16816%2F16816.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "天橋立温泉　料理旅館　鳥喜",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13915%2F13915.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "天橋立温泉　和のリゾート　文珠荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/76913/76913.jpg",
              rating: 4.51,
              reviews: 547,
              price: "¥18,700〜",
              access: "京都丹後鉄道　天橋立駅より徒歩3分",
              special: "日本三景天橋立の運河に佇む宿。2023年春サウナ付大浴場誕生。新しい和のリゾートをお楽しみください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76913%2F76913.html",
              story: "日本三景・天橋立の運河沿い、智恩寺文殊堂のすぐ隣に佇む数寄屋造りの名門旅館「和のリゾート 文珠荘」。日本近代建築の巨匠・吉村順三氏が手掛けた低層の和風建築は、全客室が天橋立運河と緑豊かな松並木に面し、庭と部屋が一体となる洗練された空間美を誇ります。自慢の大浴場「天の原」と露天風呂には、地下1,500メートルから湧出する天橋立温泉「神妙の湯（ナトリウム-塩化物泉）」が注がれ、茶褐色を帯びたとろみのあるお湯が肌にしっとりと吸い付きます。11月下旬から12月にかけて、運河沿いの松に雪が舞い散る風情を眺めながらの湯あみは息をのむ美しさ。茶の湯の精神が息づく心尽くしのおもてなしが、大人の休日に極上の安らぎをもたらします。",
              roomTip: "天橋立運河を目の前に望むテラス付き客室や、露天風呂付き特別室。縁側に腰掛ければ、松並木を行き交う遊覧船や初冬の静寂な運河の景観を独占できます。",
              gourmetTip: "石窯を配した食事処「MON」でいただくカニ会席。11月解禁の活ズワイガニ（松葉ガニ）や丹後の最高峰「間人ガニ」を、カニ刺し、炭火焼き、甲羅味噌焼き、カニすき鍋で贅沢にフルコース。石窯でふっくら焼き上げるカニの香ばしさは別格です。",
              highlights: [
                "巨匠・吉村順三設計の数寄屋リゾート＆天橋立運河の松並木を目前に望む絶好の立地",
                "地下1,500mから湧く茶褐色の美肌湯「神妙の湯」＆石窯を備えた上質なダイニング",
                "活松葉ガニ石窯焼き＆間人ガニ会席とカニ刺し・甲羅味噌焼きの極上ディナー"
              ]
            },
            {
              id: 2,
              name: "天橋立温泉　ホテル北野屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/6010/6010.jpg",
              rating: 4.50,
              reviews: 488,
              price: "¥14,256〜",
              access: "京都丹後鉄道「天橋立」駅下車、徒歩7分",
              special: "【貸切温泉露天風呂やプライベートサウナ有】全室より日本三景・天橋立が望める立地、露天風呂付客室も有！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6010%2F6010.html",
              story: "天橋立駅からも近く、高台から天橋立の全景と阿蘇海・宮津湾を見晴らす絶好のロケーションを誇る「天橋立温泉 ホテル北野屋」。すべての客室がオーシャンビューで、窓いっぱいに広がる白砂青松の天橋立パノラマを堪能できます。宿の自慢は、木々に囲まれた庭園露天風呂「森林の湯」。天橋立温泉の源泉が掛け流されており、初冬の澄んだ夜空に輝く星々と海風を感じながらの湯あみは格別です。さらに、プライベートな時間を大切にしたい旅行者向けに、天橋立を一望できる露天風呂付き客室や貸切露天風呂も充実。雄大な冬の日本三景を眺めながら、心温まるホスピタリティに包まれる上質なひとときが過ごせます。",
              roomTip: "客室露天風呂付きの和洋室がおすすめ。湯船に浸かりながら、朝日に輝く天橋立の松並木や、雪化粧した宮津湾の絶景を心ゆくまで満喫できます。",
              gourmetTip: "冬の丹後味覚会席。タグ付き活松葉ガニの炭火焼きやカニ刺しはもちろん、丹後若狭湾名物の「寒ブリしゃぶしゃぶ」や丹後牛ステーキが並び、海の京都の冬の美味を余すところなく味わえます。",
              highlights: [
                "全室オーシャンビュー＆天橋立全景を見晴らす高台の庭園露天風呂「森林の湯」",
                "天橋立温泉の源泉かけ流し＆プライベートな露天風呂付き客室や貸切露天が充実",
                "タグ付き活松葉ガニ炭火焼き＆丹後若狭湾名物「寒ブリしゃぶしゃぶ」の贅沢会席"
              ]
            },
            {
              id: 3,
              name: "天橋立温泉　対橋楼",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/80800/80800.jpg",
              rating: 4.56,
              reviews: 528,
              price: "¥18,700〜",
              access: "お車：京都縦貫自動車道宮津天橋立ＩＣより約７分　　電車：京都丹後鉄道　天橋立駅より徒歩約3分です。天橋立の入り口。",
              special: "天橋立に１番近い宿。天橋立廻旋橋が目の前にあり、静かに流れる天橋立運河を眺める絶好のロケーション。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F80800%2F80800.html",
              story: "天橋立と文珠水道にかかる名物「廻旋橋（かいせんきょう）」のたもとに建ち、明治の歌人・与謝野晶子や寛がこよなく愛した歴史ある文豪宿「対橋楼（たいきょうろう）」。船が通るたびに90度回転する廻旋橋を窓のすぐ下に見下ろす絶好の立地で、温泉街情緒が色濃く漂います。館内には与謝野晶子の自筆の歌や直筆原稿が展示され、文学散歩の拠点としても最適。大浴場と露天風呂には、美肌効果抜群の天橋立温泉が満たされており、運河のせせらぎを聞きながら優雅な湯あみを愉しめます。客室数二十数室の小ぢんまりとした隠れ家的な宿だからこそ行き届く、女将をはじめとする温かなもてなしが旅人の心を和ませます。",
              roomTip: "廻旋橋と運河を真正面に見下ろす和室「晶子の間」やレトロモダン客室。回る橋と初冬の雪景色を眺めながら、文豪の気分で静かに寛げます。",
              gourmetTip: "料理長自らが丹後の港で目利きする新鮮なカニ会席。活松葉ガニの甘みたっぷりのカニ刺しや甲羅味噌焼き、冬の地魚姿造り、秘伝の出汁でいただくカニちり鍋が絶品です。",
              highlights: [
                "与謝野晶子ゆかりの文豪宿＆回転する名物「廻旋橋」のたもとに佇む情緒あふれる隠れ家",
                "文学散歩の拠点＆文珠水道のせせらぎを聞く美肌大浴場と心温まるおもてなし",
                "目利き厳選の活ガニ刺し＆秘伝出汁のカニちり鍋と冬の日本海地魚姿造り"
              ]
            },
            {
              id: 4,
              name: "天橋立温泉　天橋立ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16816/16816.jpg",
              rating: 4.34,
              reviews: 1073,
              price: "¥11,550〜",
              access: "天橋立駅より徒歩1分／宮津天橋立I.C.より約10分",
              special: "客室・大浴場・露天風呂より天橋立を一望していただける天然温泉のお宿：天橋立駅より徒歩1分",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16816%2F16816.html",
              story: "日本三景・天橋立を宮津湾越しに真正面に望むオーシャンフロントのリゾート旅館「天橋立ホテル」。JR天橋立駅から徒歩1分という抜群のアクセスを誇り、冬の鉄道旅にも至便です。宿の最大のハイライトは、海に迫り出すように造られた大浴場と露天風呂。天橋立温泉の源泉が注がれる湯船に肩まで浸かると、目の前には約3.6kmにわたって海を渡る天橋立の松並木が一直線に広がり、海と一体になるようなインフィニティ感覚を味わえます。初冬の朝、松並木から昇る幻想的な朝日を湯船から眺める体験は圧巻。隣接する「智恵の湯」や本格的なサウナ、エステも完備され、充実のリゾートステイが約束されます。",
              roomTip: "天橋立側の上層階客室。ピクチャーウィンドウから宮津湾と天橋立の全景が見晴らせ、刻一刻と移ろう冬の海の表情を楽しめます。",
              gourmetTip: "冬の日本海カニ尽くし会席。タグ付きズワイガニの姿茹で、焼きガニ、カニ天ぷら、カニ鍋、そして〆のカニ雑炊まで、一人につき数杯分のカニを惜しみなく使用したボリューム満点のコースです。",
              highlights: [
                "JR天橋立駅徒歩1分＆宮津湾と天橋立松並木を海から一望するインフィニティ露天風呂",
                "天橋立を真横から望む圧倒的パノラマ＆朝日に染まる冬景色の露天風呂",
                "タグ付きズワイガニ姿茹で・焼きガニ・カニ鍋・カニ雑炊の贅沢フルコース"
              ]
            },
            {
              id: 5,
              name: "天橋立温泉　料理旅館　鳥喜",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13915/13915.jpg",
              rating: 4.75,
              reviews: 458,
              price: "¥17,600〜",
              access: "京都丹後鉄道(ＫＴＲ)「天橋立駅」より徒歩２分 / 宮津天橋立ICより１０分",
              special: "「一度食べたら本物だとわかる」天然にこだわる四季折々の旨いもんを堪能する天橋立の料理旅館",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13915%2F13915.html",
              story: "天橋立文珠地区の老舗料理旅館として、地元の漁港から水揚げされる獲れたての海の幸に徹底してこだわる「料理旅館 鳥喜（とりき）」。客室数わずか数室の贅沢な隠れ宿であり、食通やリピーターが冬のカニを目当てに全国から集まります。自慢は、宮津港や伊根港、舞鶴港から直接仕入れる一級品の丹後松葉ガニや幻の「間人ガニ（たいざがに）」。生け簀から直前に引き上げられた活ガニを手早く捌くため、繊維がピンと立ったカニ刺しの甘みや、炭火でジュウジュウと香ばしく焼き上がる焼きガニの香りは格別です。家庭的で丁寧なおもてなしと、天橋立温泉の良質な湯に浸かりながら、至極のカニ料理に浸る冬の美食旅が叶います。",
              roomTip: "静かで清潔感あふれる純和風客室。プライベートが保たれた空間で、誰にも気兼ねなく美味しい食事と温泉を楽しめます。",
              gourmetTip: "店主が目利きする極上ズワイガニのフルコース。濃厚なカニ味噌を炭火でぐつぐつと煮立てて地酒を注ぐ「甲羅酒」や、伊根の極上寒ブリしゃぶしゃぶとの贅沢コラボレーションが堪能できます。",
              highlights: [
                "客室数わずか数室の料理旅館＆漁港直送の一級品活松葉ガニと幻の間人ガニに特化",
                "生け簀から直前に捌く極上鮮度＆静かな和室で味わう至高のカニづくし会席",
                "濃厚カニ味噌で愉しむ名物「甲羅酒」＆伊根の極上寒ブリと活ガニの饗宴"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-teal-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85"
          alt="初冬の日本三景天橋立・雪化粧した白砂青松の松並木と宮津湾の雄大な雪景色"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-950/90 text-teal-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-teal-800/50">
            <Eye className="w-4 h-4 text-teal-300" />
            <span>11月・12月限定 日本三景白砂青松と丹後松葉ガニ解禁・寒ブリ会席特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月天橋立の白砂青松雪景色とカニ漁解禁】<br className="hidden sm:inline" />
            日本三景を望む冬の美肌湯・幻の間人ガニ＆寒ブリしゃぶしゃぶの宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            11月6日、日本海のズワイガニ漁解禁で美食の最盛期を迎える「海の京都・丹後天橋立」。雪化粧した約5,000本の松並木が海を渡る奇跡の絶景。茶褐色のとろみある天橋立温泉に癒やされ、幻の間人ガニと極上寒ブリに酔いしれる冬の至高旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-teal-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-teal-400" /> 京都府宮津市字文珠（天橋立温泉）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月天橋立】寒ブリしゃぶしゃぶ！名宿5選","item":"https://croud-travel.pages.dev/winter-kyoto-amanohashidate-matsuba-crab-stay"}]}) }}
      />
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Nihon Sankei Sea Kyoto Legacy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                雪の白砂青松が描く天の架け橋。11月6日解禁、丹後の冬の王様「松葉ガニ」
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            陸奥の松島、安芸の宮島と並び、古来より人々を魅了し続けてきた日本三景の一つ、京都府丹後地方の「天橋立（あまのはしだて）」。宮津湾と内海の阿蘇海を隔てる全長約3.6キロメートルに及ぶ砂嘴（さし）には、約5,000本もの青松が生い茂り、まるで天に架かる緑の橋のように海を渡ります。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            天橋立の冬が特別なのは、11月6日の「ズワイガニ漁解禁」とともに、日本海屈指の美食シーズンが一斉に幕を開けるからです。近海の京都府間人（たいざ）港で日帰り操業される小型漁船から水揚げされる「間人ガニ（緑色のタグ）」は、水揚げ量の少なさとその圧倒的な鮮度・甘みから「幻のカニ」と称され、全国の美食家がこの味を求めて丹後を訪れます。さらに、伊根の舟屋周辺で水揚げされる冬の味覚「寒ブリ（伊根ブリ）」の脂の乗ったブリしゃぶしゃぶ、香ばしい甲羅酒など、冬の日本海の至福の味覚が揃い踏みします。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月下旬から12月、初冬の日本海から吹き寄せる冷気によって、松並木や宮津湾の岩肌に純白の雪が降り積もります。天橋立ビューランド（南側）から望む「飛龍観」や、傘松公園（北側）から望む「昇龍観」から見下ろす雪の天橋立は、まるで墨絵の中に青い海が浮かび上がるかのような幽玄のパノラマ。そして冷え切った身体を包んでくれるのが、地下1,500mから湧く茶褐色の「天橋立温泉・神妙の湯」。高い塩分と天然ミネラルが芯まで温め、肌をつるつるに磨き上げてくれます。
          </p>
          
          <div className="bg-teal-50/70 rounded-2xl p-5 border border-teal-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-teal-700" />
                11月・12月天橋立 旅のハイライト
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                11月6日カニ解禁！幻の間人ガニ＆丹後松葉ガニ・伊根の寒ブリしゃぶ・雪の天橋立展望・天橋立温泉
              </p>
            </div>
            <a
              href="#hotels"
              className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              名宿5選を見る
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-stone-100/80 rounded-2xl p-6 border border-stone-200">
          <h2 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-teal-700" />
            目次・インデックス
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-stone-700">
            <a href="#crab-season" className="hover:text-teal-700 hover:underline flex items-center gap-1.5">
              <span>1. 11月6日カニ解禁！幻の間人ガニと丹後松葉ガニの真髄</span>
            </a>
            <a href="#snow-views" className="hover:text-teal-700 hover:underline flex items-center gap-1.5">
              <span>2. 飛龍観と昇龍観：冬の雪化粧した白砂青松の絶景</span>
            </a>
            <a href="#hotels" className="hover:text-teal-700 hover:underline flex items-center gap-1.5">
              <span>3. 天橋立温泉 11・12月に泊まりたい名宿厳選5選</span>
            </a>
            <a href="#gourmet" className="hover:text-teal-700 hover:underline flex items-center gap-1.5">
              <span>4. 丹後冬の二大味覚：極上松葉ガニと伊根の寒ブリしゃぶ</span>
            </a>
            <a href="#itinerary" className="hover:text-teal-700 hover:underline flex items-center gap-1.5">
              <span>5. 1泊2日 王道モデルコース（智恩寺文殊堂と伊根の舟屋）</span>
            </a>
            <a href="#faq" className="hover:text-teal-700 hover:underline flex items-center gap-1.5">
              <span>6. よくある質問（FAQ）とアクセス情報</span>
            </a>
          </nav>
        </section>

        {/* Crab Season Section */}
        <section id="crab-season" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-teal-50 text-teal-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              11月6日解禁！丹後が誇る「間人ガニ」とブランド松葉ガニの魅力
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600">
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-teal-600" />
                幻の間人ガニ（たいざがに）とは？
              </h3>
              <p className="leading-relaxed">
                丹後半島の北端にある間人港。わずか5隻前後の小型底引き網漁船が日帰り操業を行うため、獲れたてのカニがその日の夕方に生きたまま港へ帰着します。鮮度が一切落ちない状態で競りにかけられるため、身の引き締まりと甘みが桁違い。緑色のタグがその最高品質の証です。
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-teal-600" />
                11月・12月限定のセコガニ（雌ガニ）の珍味
              </h3>
              <p className="leading-relaxed">
                ズワイガニの雌「セコガニ（コッペガニ）」の漁期は、資源保護のため11月6日から12月末までのわずか約2ヶ月間のみ。甲羅の中に詰まったプチプチとした「外子」と、濃厚なオレンジ色の「内子」、そして旨味が凝縮したカニ味噌の贅沢なハーモニーはこの時期しか味わえない逸品です。
              </p>
            </div>
          </div>
        </section>

        {/* Snow Views */}
        <section id="snow-views" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-800">
              <Snowflake className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              飛龍観と昇龍観：冬の澄んだ空気で望む「白砂青松の幻雪景」
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600">
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-teal-600" />
                天橋立ビューランド「飛龍観（ひりゅうかん）」
              </h3>
              <p className="leading-relaxed">
                文珠山山頂から南側を望む展望所。股のぞきをすると、天橋立が天に舞い上がる龍の姿に見えることから「飛龍観」と呼ばれます。初冬の晴天時には、紺碧の海と白雪をかぶった松並木のコントラストが一際鮮明に浮かび上がります。
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                <Waves className="w-4 h-4 text-teal-600" />
                傘松公園「昇龍観（しょうりゅうかん）」
              </h3>
              <p className="leading-relaxed">
                北側の成相山中腹にある展望台。天橋立が昇り龍のように見える景観で、股のぞき発祥の地として知られます。ケーブルカーやリフトで登ると、阿蘇海と宮津湾を分ける雪の架け橋が雄大に広がり、冬ならではの厳かなパノラマを堪能できます。
              </p>
            </div>
          </div>
        </section>

        {/* Hotels List */}
        <section id="hotels" className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Rakuten Travel Verified Tango Inns</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              11・12月天橋立温泉 泊まりたい名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              日本三景の眺望、天橋立温泉の泉質、間人ガニ・松葉ガニの料理のクオリティを誇る最高峰の宿を厳選。
            </p>
          </div>

          <div className="space-y-10">
            {hotelList.map((h) => (
              <div
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/90 hover:shadow-md transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image Column */}
                  <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[280px] bg-stone-100">
                    <Image
                      src={h.img}
                      alt={h.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                      <span className="w-2 h-2 rounded-full bg-teal-400" />
                      厳選第{h.id}位
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-amber-500">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm font-bold text-stone-900">{h.rating}</span>
                          <span className="text-xs text-stone-400">（{h.reviews}件のクチコミ）</span>
                        </div>
                        <span className="text-xs font-medium px-2.5 py-1 bg-stone-100 text-stone-600 rounded-lg">
                          目安: {h.price} / 泊
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {h.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        {h.access}
                      </p>

                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-stone-50/80 p-3.5 rounded-xl border border-stone-100">
                        {h.special}
                      </p>

                      <div className="pt-2 space-y-2">
                        <h4 className="text-xs font-bold text-stone-900 tracking-wider uppercase flex items-center gap-1.5 text-teal-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                          宿の魅力と客室・温泉・美食のこだわり
                        </h4>
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                          {h.story}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
                        <div className="p-2.5 rounded-xl bg-teal-50/50 border border-teal-100 text-teal-950">
                          <span className="font-bold block text-teal-800 mb-0.5">客室の選び方：</span>
                          {h.roomTip}
                        </div>
                        <div className="p-2.5 rounded-xl bg-amber-50/50 border border-amber-100 text-amber-950">
                          <span className="font-bold block text-amber-800 mb-0.5">料理長のこだわり：</span>
                          {h.gourmetTip}
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-2">
                        {h.highlights.map((hl, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="text-xs text-stone-400">
                        ※最新の空室状況・限定プランは楽天トラベル公式でご確認ください
                      </div>
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200"
                      >
                        <span>空室・料金プランを確認</span>
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
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Utensils className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の味覚の頂点：活ズワイガニ会席と伊根の寒ブリしゃぶしゃぶ
            </h2>
          </div>
          
          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              丹後天橋立の冬は、美食家にとっての一大祝祭です。11月6日のズワイガニ漁解禁を迎えると、港から宿の厨房へと生きたまま運ばれる極上の活ガニが、多彩な調理法でテーブルを華やかに彩ります。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-teal-600" />
                  活ガニ刺し・炭火焼き・甲羅酒の贅沢三昧
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  氷水で花を咲かせた活カニ刺しは、ぷりぷりとした弾力と上品な甘みが口いっぱいに広がります。炭火で殻ごと香ばしく焼き上げる焼きガニは、旨味が濃縮され芳醇な香りが漂います。さらに、濃厚なカニ味噌を炭火でぐつぐつと温め、丹後の辛口熱燗を注ぎ入れる「甲羅酒」は、冬の海の京都でしか味わえない究極の贅沢です。
                </p>
              </div>
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-teal-600" />
                  伊根湾の荒波が育む脂の乗った「寒ブリしゃぶ」
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  舟屋で有名な丹後伊根湾で水揚げされる「伊根ブリ」。冬の厳しい寒さで身がキュッと引き締まり、上質な脂をたっぷりと蓄えています。熱々の昆布出汁にサッとくぐらせ、表面が白く霜降りになった瞬間を特製ポン酢で味わう「ブリしゃぶ」は、口の中でとろけるような極上の食感です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Model Course */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-teal-50 text-teal-800">
              <Clock className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              1泊2日 理想の冬のモデルコース：日本三景の雪景色と極上カニ尽くし会席
            </h2>
          </div>

          <div className="space-y-6">
            <div className="border-l-2 border-teal-500 pl-4 sm:pl-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-teal-100 text-teal-800 font-bold text-xs rounded-md">
                  1日目
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  特急はしだて号で天橋立へ・智恩寺参拝と天橋立ビューランド・カニ会席
                </h3>
              </div>
              <ul className="text-xs sm:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li><strong>12:00 京都駅より特急はしだて号で天橋立駅到着：</strong>乗り換えなし約2時間で到着。駅前の食事処で名物のアサリ丼や丹後ばら寿司ランチ。</li>
                <li><strong>13:00 智恩寺文殊堂参拝＆廻旋橋散策：</strong>「三人寄れば文殊の知恵」で名高い智恩寺へ。船が通るたびに回転する廻旋橋を渡り、松並木を少し散策。</li>
                <li><strong>14:30 天橋立ビューランドで飛龍観：</strong>リフトまたはモノレールで展望台へ。股のぞきで天を舞う龍のような雪の白砂青松パノラマを堪能。</li>
                <li><strong>16:00 宿にチェックイン：</strong>天橋立温泉の茶褐色のお湯に浸かり、冷えた体を芯から温める。</li>
                <li><strong>18:30 活松葉ガニフルコースディナー：</strong>カニ刺し、炭火焼きガニ、甲羅酒、カニすき鍋、〆のカニ雑炊に丹後の地酒を合わせて至福の晩餐。</li>
              </ul>
            </div>

            <div className="border-l-2 border-teal-500 pl-4 sm:pl-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-teal-100 text-teal-800 font-bold text-xs rounded-md">
                  2日目
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  観光船で対岸へ・傘松公園の昇龍観＆重要伝統的建造物群「伊根の舟屋」へ
                </h3>
              </div>
              <ul className="text-xs sm:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li><strong>08:00 朝の宮津湾を望む朝風呂＆和朝食：</strong>カニの身が入った味噌汁や焼き魚など丹後の海山の朝食。</li>
                <li><strong>09:30 天橋立観光船で一の宮桟橋へ：</strong>カモメが飛び交う宮津湾を船で渡り対岸へ。ケーブルカーで「傘松公園」へ登り、昇龍観を鑑賞。</li>
                <li><strong>11:30 路線バスまたはタクシーで「伊根の舟屋」へ：</strong>海にせり出す約230軒の舟屋群を海上遊覧船から見学。舟屋のカフェでひと休み。</li>
                <li><strong>13:30 伊根の寒ブリ丼ランチ：</strong>旬の寒ブリのお刺身やブリしゃぶランチを海沿いの食事処で堪能。</li>
                <li><strong>16:00 天橋立駅より特急はしだて号で京都・大阪へ：</strong>カニの余韻に浸りながら帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        

        {/* Related Features & Internal Links */}
        <section className="bg-stone-100/80 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-teal-700" />
              あわせて読みたい関西・日本海のカニ・冬特集
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              冬の味覚、名湯露天風呂、雪景色を楽しむ日本全国の厳選特集記事。旅の目的に合わせてぜひご覧ください。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 text-xs sm:text-sm">
            <Link
              href="/winter-hyogo-kinosaki-onsen-matsuba-crab-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-teal-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-teal-700 mb-1">
                城崎温泉の七田外湯めぐりと松葉ガニ特集
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                浴衣と下駄で巡る外湯めぐりと津居山ガニ。大谿川の柳並木に舞う雪景色。
              </p>
            </Link>

            <Link
              href="/winter-tottori-misasa-onsen-matsuba-crab-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-teal-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-teal-700 mb-1">
                鳥取・三朝温泉の高濃度ラジウム泉と松葉ガニ
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                世界屈指のラドン温泉・三朝温泉。冬の境港直送・極上松葉ガニ会席。
              </p>
            </Link>

            <Link
              href="/winter-ishikawa-kaga-yamashiro-kano-crab-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-teal-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-teal-700 mb-1">
                加賀温泉郷の加能ガニ解禁と九谷焼会席特集
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                山代・山中温泉の名湯と青タグの加能ガニ・香箱ガニを名窯の器で堪能。
              </p>
            </Link>

            <Link
              href="/winter-kyoto-arashiyama-onsen-yudofu-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-teal-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-teal-700 mb-1">
                京都・嵐山温泉の湯豆腐と渡月橋雪景色
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                冬の静寂に包まれる嵐山・嵯峨野。渡月橋の雪景色と老舗湯豆腐・京会席。
              </p>
            </Link>

            <Link
              href="/winter-hyogo-arima-onsen-kinsen-kobe-beef-stay"
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 hover:border-teal-500 hover:shadow-sm transition-all group"
            >
              <div className="font-bold text-stone-900 group-hover:text-teal-700 mb-1">
                有馬温泉の金泉銀泉と六甲山夜景・神戸牛会席
              </div>
              <p className="text-xs text-stone-500 line-clamp-2">
                日本最古の名湯・有馬温泉。冬の湯冷め知らずの金泉と最高峰神戸牛会席。
              </p>
            </Link>

            <Link
              href="/features"
              className="p-3.5 bg-teal-50/70 rounded-xl border border-teal-200 hover:bg-teal-100/70 transition-all flex flex-col justify-center items-center text-center group"
            >
              <div className="font-bold text-teal-900 mb-1">
                全国の旅・特集記事一覧へ →
              </div>
              <p className="text-xs text-teal-700">
                春夏秋冬の旬の旅、美食・絶景・名湯の厳選ガイドをチェック
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-kyoto-amanohashidate-matsuba-crab-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
