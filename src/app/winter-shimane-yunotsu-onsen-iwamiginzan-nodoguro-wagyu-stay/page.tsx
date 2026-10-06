import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map, History
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月島根・温泉津温泉＆有福温泉】世界遺産石見銀山の港町・開湯1300年薬師湯の奇跡の自噴赤湯と日本海初冬の極上のどぐろ・しまね和牛に心奪われる名宿5選",
  description: "11月中旬から初冬の島根・石見地方に位置する温泉津温泉（ゆのつおんせん）と有福温泉（ありふくおんせん）は、日本海からの心地よい潮風と静かな初冬の空気が古い石畳の坂道を包み込み、まるで時が止まったかのような深い歴史旅情を漂わせます。世界遺産「石見銀山遺跡とその文化的景観」の一部として、温泉街として日本で唯一、国の「重要伝統的建造物群保存地区」に選定されている温泉津。大正から昭和初期の木造旅館が軒を連ねる街並みに湧く外湯「薬師湯」は、日本温泉協会の審査で最高評価「オール5」を獲得した奇跡の自然湧出源泉。地下から直接湧き出る超濃厚な含土類強食塩泉は、黄褐色に濁り、身体の芯まで驚異的な温もりを行き渡らせます。そして初冬の食卓を彩るのは、冬の日本海の荒波にもまれて脂の乗りが最高潮に達する白身のトロ「のどぐろ（赤むつ）」の一本丸ごと塩焼きや煮付け、11月に解禁を迎える山陰の「松葉ガニ」、そして内閣総理大臣賞を受賞した最高峰「しまね和牛」の極上すき焼き会席。本物の名湯力と歴史の静寂に抱かれる厳選名宿5選を徹底解説します。",
  keywords: '温泉津温泉 宿泊, 有福温泉 旅館, 薬師湯 オール5, 輝雲荘, のがわや旅館, ますや 温泉津, のどぐろ 塩焼き, しまね和牛, 石見銀山 温泉宿, 11月 12月 島根旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-shimane-yunotsu-onsen-iwamiginzan-nodoguro-wagyu-stay/"
  },
  openGraph: {
    title: "【11・12月島根・温泉津温泉＆有福温泉】世界遺産石見銀山の港町・開湯1300年薬師湯の奇跡の自噴赤湯と日本海初冬の極上のどぐろ・しまね和牛に心奪われる名宿5選",
    description: "11月中旬から初冬の島根・石見地方に位置する温泉津温泉（ゆのつおんせん）と有福温泉（ありふくおんせん）は、日本海からの心地よい潮風と静かな初冬の空気が古い石畳の坂道を包み込み、まるで時が止まったかのような深い歴史旅情を漂わせます。世界遺産「石見銀山遺跡とその文化的景観」の一部として、温泉街として日本で唯一、国の「重要伝統的建造物群保存地区」に選定されている温泉津。大正から昭和初期の木造旅館が軒を連ねる街並みに湧く外湯「薬師湯」は、日本温泉協会の審査で最高評価「オール5」を獲得した奇跡の自然湧出源泉。地下から直接湧き出る超濃厚な含土類強食塩泉は、黄褐色に濁り、身体の芯まで驚異的な温もりを行き渡らせます。そして初冬の食卓を彩るのは、冬の日本海の荒波にもまれて脂の乗りが最高潮に達する白身のトロ「のどぐろ（赤むつ）」の一本丸ごと塩焼きや煮付け、11月に解禁を迎える山陰の「松葉ガニ」、そして内閣総理大臣賞を受賞した最高峰「しまね和牛」の極上すき焼き会席。本物の名湯力と歴史の静寂に抱かれる厳選名宿5選を徹底解説します。",
    url: 'https://croud-travel.pages.dev/winter-shimane-yunotsu-onsen-iwamiginzan-nodoguro-wagyu-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の島根温泉津温泉重要伝統的建造物群保存地区の木造街並み'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月島根・温泉津温泉＆有福温泉】世界遺産石見銀山の港町・開湯1300年薬師湯の奇跡の自噴赤湯と日本海初冬の極上のどぐろ・しまね和牛に心奪われる名宿5選",
    description: "11月中旬から初冬の島根・石見地方に位置する温泉津温泉（ゆのつおんせん）と有福温泉（ありふくおんせん）は、日本海からの心地よい潮風と静かな初冬の空気が古い石畳の坂道を包み込み、まるで時が止まったかのような深い歴史旅情を漂わせます。世界遺産「石見銀山遺跡とその文化的景観」の一部として、温泉街として日本で唯一、国の「重要伝統的建造物群保存地区」に選定されている温泉津。大正から昭和初期の木造旅館が軒を連ねる街並みに湧く外湯「薬師湯」は、日本温泉協会の審査で最高評価「オール5」を獲得した奇跡の自然湧出源泉。地下から直接湧き出る超濃厚な含土類強食塩泉は、黄褐色に濁り、身体の芯まで驚異的な温もりを行き渡らせます。そして初冬の食卓を彩るのは、冬の日本海の荒波にもまれて脂の乗りが最高潮に達する白身のトロ「のどぐろ（赤むつ）」の一本丸ごと塩焼きや煮付け、11月に解禁を迎える山陰の「松葉ガニ」、そして内閣総理大臣賞を受賞した最高峰「しまね和牛」の極上すき焼き会席。本物の名湯力と歴史の静寂に抱かれる厳選名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function ShimaneYunotsuWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-shimane-yunotsu-onsen-iwamiginzan-nodoguro-wagyu-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.pages.dev/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.pages.dev/"
        },
        "headline": "【11・12月島根・温泉津温泉＆有福温泉】世界遺産石見銀山の港町・開湯1300年薬師湯の奇跡の自噴赤湯と日本海初冬の極上のどぐろ・しまね和牛に心奪われる名宿5選",
        "description": "11月中旬から初冬の島根・石見地方に位置する温泉津温泉（ゆのつおんせん）と有福温泉（ありふくおんせん）は、日本海からの心地よい潮風と静かな初冬の空気が古い石畳の坂道を包み込み、まるで時が止まったかのような深い歴史旅情を漂わせます。世界遺産「石見銀山遺跡とその文化的景観」の一部として、温泉街として日本で唯一、国の「重要伝統的建造物群保存地区」に選定されている温泉津。大正から昭和初期の木造旅館が軒を連ねる街並みに湧く外湯「薬師湯」は、日本温泉協会の審査で最高評価「オール5」を獲得した奇跡の自然湧出源泉。地下から直接湧き出る超濃厚な含土類強食塩泉は、黄褐色に濁り、身体の芯まで驚異的な温もりを行き渡らせます。そして初冬の食卓を彩るのは、冬の日本海の荒波にもまれて脂の乗りが最高潮に達する白身のトロ「のどぐろ（赤むつ）」の一本丸ごと塩焼きや煮付け、11月に解禁を迎える山陰の「松葉ガニ」、そして内閣総理大臣賞を受賞した最高峰「しまね和牛」の極上すき焼き会席。本物の名湯力と歴史の静寂に抱かれる厳選名宿5選を徹底解説します。",
        "datePublished": "2026-09-30T00:00:00+09:00",
        "dateModified": "2026-09-30T00:00:00+09:00",
        "inLanguage": "ja",
        "mainEntityOfPage": "https://croud-travel.pages.dev/winter-shimane-yunotsu-onsen-iwamiginzan-nodoguro-wagyu-stay",
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
              "name": "寛ぎの宿　輝雲荘",
              "description": "温泉津温泉のレトロな温泉街中央に佇み、木造の温もりと現代の快適性が心地よく調和する料理自慢の隠れ宿「寛ぎの宿 輝雲荘（きうんそう）」。館内には温泉津の名湯を贅沢に引き込んだ大浴場と、信楽焼の湯船を配した風情あふれる貸切露天風呂を完備。高濃度の塩分とミネラルを含んだ濁り湯は、初冬の冷気で強張った筋肉をじんわりと解きほぐし、湯上がり後も全身をポカポカとした温もりで包み込みます。この宿の最大の誇りは、石見の旬を惜しみなく盛り込んだ豪華海鮮会席。初冬の日本海で揚がる高級魚「のどぐろ」は、脂の甘みが滴る塩焼きや特製出汁で煮付けた姿煮で供され、そのとろけるような食感は感動的。さらに山陰の冬の味覚である松葉ガニ料理、そして島根が誇るブランド牛「しまね和牛」の陶板焼きなど、滋味豊かな山海の恵みが膳を彩ります。宿から外湯の「薬師湯」や「元湯泉薬湯」へも徒歩数分という湯巡りに最適なロケーションも魅力です。",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1417%2F1417.html",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.44",
                "reviewCount": 904
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Hotel",
              "name": "温泉津温泉　のがわや旅館",
              "description": "江戸時代末期の創業以来、温泉津の湯治文化を今に受け継ぐ創業100有余年の木造老舗旅館「温泉津温泉 のがわや旅館」。館内に足を踏み入れると、磨き上げられた飴色の廊下や格子戸、風情ある坪庭が出迎え、まるで映画の舞台に迷い込んだかのようなノスタルジーに包まれます。宿の地下から湧き出る自家源泉を引いた内湯と中庭の貸切風呂には、成分が濃厚に結晶化した本物の名湯が掛け流され、浴槽の縁には長い年月をかけて形成された温泉の析出物が美しく堆積しています。料理は地産地消にこだわり抜いた石見郷土会席。地元・和江港や温泉津港から直接仕入れる新鮮な地魚の姿造りをはじめ、冬の味覚である肉厚なのどぐろの煮付け、ズワイガニ料理、地元契約農家から届く冬野菜、そしてしまね和牛のすき焼きなど、一品一品に職人の温かい心が宿る美食を心ゆくまで堪能できます。",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13692%2F13692.html",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.57",
                "reviewCount": 310
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Hotel",
              "name": "温泉津温泉　旅館　ますや",
              "description": "大正時代の面影をそのまま残す国登録有形文化財級の木造三階建て建築がひときわ目を引く、温泉津屈指のクラシック旅館「温泉津温泉 旅館 ますや」。大正ロマンの風情漂うステンドグラスや格子窓、重厚な木造の梁が旅情を刺激します。宿の自慢は、名湯「薬師湯」と同じ源泉脈から直接引湯された濃厚な天然温泉。湯船に身を委ねると、鉄分とカルシウム、炭酸水素塩が凝縮された黄褐色の湯が肌を包み込み、体の深部までじっくりと熱が浸透していきます。夕食は日本海の海の幸をメインにした贅沢な会席料理。初冬の荒波が育んだのどぐろの塩焼きを筆頭に、朝獲れの白身魚やイカの刺身盛り、冬の味覚カニ料理、そして島根県産黒毛和牛のステーキなど、歴史ある個室食事処でゆったりと味わう時間は特別な旅の思い出になります。",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19445%2F19445.html",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.36",
                "reviewCount": 350
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Hotel",
              "name": "有福温泉　自家源泉の宿・よしだや",
              "description": "温泉津から車で約30分、山あいの谷あいに白壁の街並みが広がる名湯「有福温泉」の最奥に位置する隠れ家「自家源泉の宿・よしだや」。有福温泉は「白狐が傷を癒やした」という伝説を持つ開湯1350年の古湯で、透き通るような無色透明の単純温泉はアルカリ度が高く「美肌の湯」として名高い名泉です。よしだやは敷地内に独自の自家源泉を保有し、加水・加温一切なしの100%源泉掛け流しで湯船を満たしています。とろりとした湯ざわりはまるで化粧水のようで、初冬の乾燥した肌をみずみずしく潤してくれます。夕食は石見の山海の味覚を繊細に盛り込んだ里山会席。近海産ののどぐろや甘鯛の焼き物、地元・江津産のブランド豚「まる姫ポーク」やしまね和牛のしゃぶしゃぶ小鍋など、山里の温もりあふれる美食が並び、心も身体も芯から癒やされます。",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109027%2F109027.html",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4",
                "reviewCount": 80
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Hotel",
              "name": "Ｓｈｏｗｃａｓｅ　Ｈｏｔｅｌ　ＫＡＳＡＮＥ　有福温泉",
              "description": "有福温泉の歴史ある街並みの中に誕生し、築70年の伝統建築を現代アートと融合させた注目のブティックホテル「Showcase Hotel KASANE 有福温泉」。レトロな石段街に調和する外観と、ミニマルで洗練されたデザイナーズ客室のコントラストが新鮮な感動を与えてくれます。宿泊者は有福温泉のシンボルである外湯「御前湯」「さつき湯」「やよい湯」の湯巡りを自由に楽しめ、美肌の湯を様々な趣で堪能できます。食事は石見地方の豊かな風土を五感で味わうモダンローカルガストロノミー。日本海で獲れた新鮮なのどぐろの低温ローストや、しまね和牛の備長炭グリル、地元農家が育てる無農薬の冬根菜など、伝統の食材をフレンチやイタリアンの技法で再構築した革新的な一皿が並びます。感性を刺激する上質な大人の初冬ごもりにふさわしい名宿です。",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184206%2F184206.html",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.65",
                "reviewCount": 53
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
            "name": "温泉津温泉の「薬師湯」が日本温泉協会で最高評価「オール5」を獲得した理由とは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "温泉津温泉のシンボル「薬師湯」は、日本温泉協会の天然温泉審査において、全国でもごく僅かしかない「全項目オール5（自然湧出、源泉温度、湧出量、泉質、利用形態など最高評価）」を獲得した名湯です。地下から湧き出たばかりの超濃厚なナトリウム・塩化物・炭酸水素塩温泉が、一切の加水・加温・循環ろ過を行わずに湯船に直接掛け流されています。湯船には何層にも重なる湯の花の結晶（析出物）が付着しており、身体の芯まで驚異的な温もりを行き渡らせることから「万病に効く奇跡の霊泉」と称えられています。"
            }
          },
          {
            "@type": "Question",
            "name": "温泉津温泉が「世界遺産」と「重要伝統的建造物群保存地区」に選定されている理由は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "温泉津は、戦国時代から江戸時代にかけて栄えた世界遺産「石見銀山」で採掘された銀を積み出す重要な積出港（港町）として栄えました。同時に、銀山で働く鉱夫や商人たちが湯治に訪れた宿場町でもあり、山と海に挟まれた狭い谷あいに、大正から昭和初期の木造町家や旅館、赤瓦の家々が今もほぼ完全な形で残されています。温泉街として国の「重要伝統的建造物群保存地区」に選定されているのは全国で温泉津だけであり、当時の風情をそのまま体感できる極めて貴重な文化遺産です。"
            }
          },
          {
            "@type": "Question",
            "name": "初冬の島根・石見地方で味わうべき「のどぐろ」と「しまね和牛」の特徴は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「白身のトロ」と称される最高級魚「のどぐろ（アカムツ）」は、日本海の荒波にもまれる11月・12月に最も上質な脂をたっぷりと蓄えます。皮目を強火でサッと炙った一本塩焼きは、箸を入れた瞬間に透明な脂がジュワッと溢れ出し、甘辛い煮付けでは身がふっくらととろけます。また「しまね和牛」は、全国和牛能力共進会で最高賞を受賞した実績を誇る黒毛和牛で、オレイン酸を豊富に含み、脂の口溶けが良く胃もたれしない芳醇な旨味が特徴です。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の温泉津・石見エリアの気候と雪や道路の状況は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "温泉津や有福温泉は日本海沿岸部に位置し、11月の平均気温は約11〜15℃、12月は約6〜10℃です。11月中に雪が積もることは稀ですが、日本海からの北風（季節風）や時折の時雨（しぐれ）があるため、体感温度は低くなります。12月中旬以降は寒波の襲来によって一時的な積雪や朝晩の路面凍結が発生することがあるため、12月に車で訪れる場合はスタッドレスタイヤの装着が推奨されます。防風性のある暖かいコートやマフラーをご用意ください。"
            }
          },
          {
            "@type": "Question",
            "name": "広島・出雲縁結び空港・萩方面からのアクセスルートは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "出雲縁結び空港からはレンタカーで山陰自動車道を経由し約70〜80分。またはJR出雲市駅からJR山陰本線特急で「大田市駅」または「温泉津駅」まで約40〜50分です。広島方面からは、中国自動車道〜浜田自動車道を経由して江津・温泉津まで車で約2時間と、中国地方の南北縦断ルートも整備されています。世界遺産の石見銀山（大森銀山地区）へは温泉津から車で約20〜25分でアクセスできます。"
            }
          }
        ]
      }
    ]
  };

  const faqList = [
  {
    "q": "温泉津温泉の「薬師湯」が日本温泉協会で最高評価「オール5」を獲得した理由とは？",
    "a": "温泉津温泉のシンボル「薬師湯」は、日本温泉協会の天然温泉審査において、全国でもごく僅かしかない「全項目オール5（自然湧出、源泉温度、湧出量、泉質、利用形態など最高評価）」を獲得した名湯です。地下から湧き出たばかりの超濃厚なナトリウム・塩化物・炭酸水素塩温泉が、一切の加水・加温・循環ろ過を行わずに湯船に直接掛け流されています。湯船には何層にも重なる湯の花の結晶（析出物）が付着しており、身体の芯まで驚異的な温もりを行き渡らせることから「万病に効く奇跡の霊泉」と称えられています。"
  },
  {
    "q": "温泉津温泉が「世界遺産」と「重要伝統的建造物群保存地区」に選定されている理由は？",
    "a": "温泉津は、戦国時代から江戸時代にかけて栄えた世界遺産「石見銀山」で採掘された銀を積み出す重要な積出港（港町）として栄えました。同時に、銀山で働く鉱夫や商人たちが湯治に訪れた宿場町でもあり、山と海に挟まれた狭い谷あいに、大正から昭和初期の木造町家や旅館、赤瓦の家々が今もほぼ完全な形で残されています。温泉街として国の「重要伝統的建造物群保存地区」に選定されているのは全国で温泉津だけであり、当時の風情をそのまま体感できる極めて貴重な文化遺産です。"
  },
  {
    "q": "初冬の島根・石見地方で味わうべき「のどぐろ」と「しまね和牛」の特徴は？",
    "a": "「白身のトロ」と称される最高級魚「のどぐろ（アカムツ）」は、日本海の荒波にもまれる11月・12月に最も上質な脂をたっぷりと蓄えます。皮目を強火でサッと炙った一本塩焼きは、箸を入れた瞬間に透明な脂がジュワッと溢れ出し、甘辛い煮付けでは身がふっくらととろけます。また「しまね和牛」は、全国和牛能力共進会で最高賞を受賞した実績を誇る黒毛和牛で、オレイン酸を豊富に含み、脂の口溶けが良く胃もたれしない芳醇な旨味が特徴です。"
  },
  {
    "q": "11月・12月の温泉津・石見エリアの気候と雪や道路の状況は？",
    "a": "温泉津や有福温泉は日本海沿岸部に位置し、11月の平均気温は約11〜15℃、12月は約6〜10℃です。11月中に雪が積もることは稀ですが、日本海からの北風（季節風）や時折の時雨（しぐれ）があるため、体感温度は低くなります。12月中旬以降は寒波の襲来によって一時的な積雪や朝晩の路面凍結が発生することがあるため、12月に車で訪れる場合はスタッドレスタイヤの装着が推奨されます。防風性のある暖かいコートやマフラーをご用意ください。"
  },
  {
    "q": "広島・出雲縁結び空港・萩方面からのアクセスルートは？",
    "a": "出雲縁結び空港からはレンタカーで山陰自動車道を経由し約70〜80分。またはJR出雲市駅からJR山陰本線特急で「大田市駅」または「温泉津駅」まで約40〜50分です。広島方面からは、中国自動車道〜浜田自動車道を経由して江津・温泉津まで車で約2時間と、中国地方の南北縦断ルートも整備されています。世界遺産の石見銀山（大森銀山地区）へは温泉津から車で約20〜25分でアクセスできます。"
  }
];

  const hotelList = [
            {
              id: 1,
              name: "寛ぎの宿　輝雲荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1417/1417.jpg",
              rating: 4.44,
              reviews: 904,
              price: "¥7,700〜",
              access: "ＪＲ温泉津駅下車",
              special: "1300年の歴史がある温泉の昔の趣を持つ温泉街にある真心込めたおもてなしで落ちつける宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1417%2F1417.html",
              story: "温泉津温泉のレトロな温泉街中央に佇み、木造の温もりと現代の快適性が心地よく調和する料理自慢の隠れ宿「寛ぎの宿 輝雲荘（きうんそう）」。館内には温泉津の名湯を贅沢に引き込んだ大浴場と、信楽焼の湯船を配した風情あふれる貸切露天風呂を完備。高濃度の塩分とミネラルを含んだ濁り湯は、初冬の冷気で強張った筋肉をじんわりと解きほぐし、湯上がり後も全身をポカポカとした温もりで包み込みます。この宿の最大の誇りは、石見の旬を惜しみなく盛り込んだ豪華海鮮会席。初冬の日本海で揚がる高級魚「のどぐろ」は、脂の甘みが滴る塩焼きや特製出汁で煮付けた姿煮で供され、そのとろけるような食感は感動的。さらに山陰の冬の味覚である松葉ガニ料理、そして島根が誇るブランド牛「しまね和牛」の陶板焼きなど、滋味豊かな山海の恵みが膳を彩ります。宿から外湯の「薬師湯」や「元湯泉薬湯」へも徒歩数分という湯巡りに最適なロケーションも魅力です。",
              roomTip: "木の香りに癒やされる和モダン客室または純和風本館和室。静まり返った温泉街の風情を窓外に眺めながら、ゆっくりと読書や湯治の時間を楽しめます。",
              gourmetTip: "「のどぐろ一本塩焼き＆しまね和牛陶板焼き会席」。滴る脂が香ばしい極上のどぐろ、とろけるしまね和牛の肉汁、石見の銘酒「開春」との相性が抜群。",
              highlights: [
                "温泉街中心の好立地＆信楽焼貸切露天風呂と名物のどぐろ一本塩焼き・しまね和牛",
                "外湯「薬師湯」まで徒歩すぐ＆高濃度ミネラル濁り湯と石見銘酒の晩酌",
                "世界遺産石見銀山観光の拠点に最適＆家族連れから一人旅まで心地よい滞在"
              ]
            },
            {
              id: 2,
              name: "温泉津温泉　のがわや旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13692/13692.jpg",
              rating: 4.57,
              reviews: 310,
              price: "¥9,800〜",
              access: "JR山陰本線 温泉津駅よりバス5分 / 浜田自動車道 浜田ICより東へ45分 / 米子自動車道 宍道ICより西へ80分",
              special: "世界遺産の一角、温泉津 情緒豊かなおもてなしの宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13692%2F13692.html",
              story: "江戸時代末期の創業以来、温泉津の湯治文化を今に受け継ぐ創業100有余年の木造老舗旅館「温泉津温泉 のがわや旅館」。館内に足を踏み入れると、磨き上げられた飴色の廊下や格子戸、風情ある坪庭が出迎え、まるで映画の舞台に迷い込んだかのようなノスタルジーに包まれます。宿の地下から湧き出る自家源泉を引いた内湯と中庭の貸切風呂には、成分が濃厚に結晶化した本物の名湯が掛け流され、浴槽の縁には長い年月をかけて形成された温泉の析出物が美しく堆積しています。料理は地産地消にこだわり抜いた石見郷土会席。地元・和江港や温泉津港から直接仕入れる新鮮な地魚の姿造りをはじめ、冬の味覚である肉厚なのどぐろの煮付け、ズワイガニ料理、地元契約農家から届く冬野菜、そしてしまね和牛のすき焼きなど、一品一品に職人の温かい心が宿る美食を心ゆくまで堪能できます。",
              roomTip: "坪庭を望む情緒ある純和風客室。歴史ある木造建築ならではの静けさと落ち着きに包まれ、夜には心地よい温泉街の静寂の中で深い眠りにつけます。",
              gourmetTip: "「のがわや名物 のどぐろ煮付け＆しまね和牛すき焼き会席」。上品な甘辛出汁が染みたふわふわののどぐろの身、濃厚な卵を絡めて味わうしまね和牛が絶品。",
              highlights: [
                "創業百余年の木造老舗旅館＆自噴掛け流し内湯と職人技が光るのどぐろ煮付け会席",
                "温泉成分の結晶が刻まれた歴史の浴槽＆心温まる女将のもてなしと坪庭和室",
                "全国の温泉通が通う本物の湯治宿＆どこか懐かしい日本の原風景に包まれる旅"
              ]
            },
            {
              id: 3,
              name: "温泉津温泉　旅館　ますや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/19445/19445.jpg",
              rating: 4.36,
              reviews: 350,
              price: "¥9,800〜",
              access: "ＪＲ山陰本線　温泉津駅（バスチケット有）／山陰道（ゆのつ出口） 3分／出雲大社より40分／石見銀山より15分",
              special: "創業百年、木造三階建て旅館、総天然物にこだわったオリジナル会席料理は部屋出し、一品出し。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19445%2F19445.html",
              story: "大正時代の面影をそのまま残す国登録有形文化財級の木造三階建て建築がひときわ目を引く、温泉津屈指のクラシック旅館「温泉津温泉 旅館 ますや」。大正ロマンの風情漂うステンドグラスや格子窓、重厚な木造の梁が旅情を刺激します。宿の自慢は、名湯「薬師湯」と同じ源泉脈から直接引湯された濃厚な天然温泉。湯船に身を委ねると、鉄分とカルシウム、炭酸水素塩が凝縮された黄褐色の湯が肌を包み込み、体の深部までじっくりと熱が浸透していきます。夕食は日本海の海の幸をメインにした贅沢な会席料理。初冬の荒波が育んだのどぐろの塩焼きを筆頭に、朝獲れの白身魚やイカの刺身盛り、冬の味覚カニ料理、そして島根県産黒毛和牛のステーキなど、歴史ある個室食事処でゆったりと味わう時間は特別な旅の思い出になります。",
              roomTip: "大正ロマンの雰囲気を色濃く残す木造本館和室。格子窓から温泉街の石畳を見下ろせば、かつて銀を運んだ商人や湯治客たちの足音が聞こえてきそうな情緒です。",
              gourmetTip: "「特大のどぐろ塩焼き＆石見海鮮・しまね和牛陶板膳」。皮目はパリッと身はふっくらジューシーなのどぐろの塩焼きと、旨味濃厚なしまね和牛のステーキ。",
              highlights: [
                "大正ロマンの木造三階建て建築＆薬師湯同源泉の濃厚赤湯と日本海鮮魚・しまね和牛",
                "ステンドグラス輝くクラシック空間＆特大のどぐろ塩焼きとしまね和牛陶板焼き",
                "有形文化財級の趣を愛でる大人の休日＆大正・昭和の面影残す木造本館ステイ"
              ]
            },
            {
              id: 4,
              name: "有福温泉　自家源泉の宿・よしだや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/109027/109027.jpg",
              rating: 4.00,
              reviews: 80,
              price: "¥8,470〜",
              access: "ＪＲ山陰本線　波子駅からお車で10分（一部の特急列車も停車）・浜田駅から車で25分",
              special: "創業300余年の老舗旅館。100%自家源泉かけ流し、本物のお湯に浸かってください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109027%2F109027.html",
              story: "温泉津から車で約30分、山あいの谷あいに白壁の街並みが広がる名湯「有福温泉」の最奥に位置する隠れ家「自家源泉の宿・よしだや」。有福温泉は「白狐が傷を癒やした」という伝説を持つ開湯1350年の古湯で、透き通るような無色透明の単純温泉はアルカリ度が高く「美肌の湯」として名高い名泉です。よしだやは敷地内に独自の自家源泉を保有し、加水・加温一切なしの100%源泉掛け流しで湯船を満たしています。とろりとした湯ざわりはまるで化粧水のようで、初冬の乾燥した肌をみずみずしく潤してくれます。夕食は石見の山海の味覚を繊細に盛り込んだ里山会席。近海産ののどぐろや甘鯛の焼き物、地元・江津産のブランド豚「まる姫ポーク」やしまね和牛のしゃぶしゃぶ小鍋など、山里の温もりあふれる美食が並び、心も身体も芯から癒やされます。",
              roomTip: "有福の渓流と緑を望む落ち着いた和室。窓を開ければせせらぎの音と澄んだ初冬の山風が心地よく、静かな時間を過ごしたい大人の旅に最適です。",
              gourmetTip: "「しまね和牛出汁しゃぶしゃぶ＆日本海のどぐろ塩焼き会席」。美肌湯上がりに味わう上質なしまね和牛の旨味と、香ばしく焼き上げたのどぐろの深いコク。",
              highlights: [
                "有福温泉の奥座敷＆自家源泉100%掛け流しの化粧水美肌白湯と山里会席",
                "アルカリ度抜群のとろりとした肌触り＆まる姫ポークと日本海のどぐろの饗宴",
                "静寂を愛する大人の湯治ステイ＆山あいのせせらぎに包まれる心洗われる休日"
              ]
            },
            {
              id: 5,
              name: "Ｓｈｏｗｃａｓｅ　Ｈｏｔｅｌ　ＫＡＳＡＮＥ　有福温泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/184206/184206.jpg",
              rating: 4.65,
              reviews: 53,
              price: "¥10,890〜",
              access: "山陰本線浜田駅、江津駅より路線バスで約30分、山陰道浜田東ICより車で約20分、江津西ICより車で約15分",
              special: "島根の秘湯、有福温泉！建築・家具・ファブリックなどの「てしごと」が詰まった5部屋のショーケースホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184206%2F184206.html",
              story: "有福温泉の歴史ある街並みの中に誕生し、築70年の伝統建築を現代アートと融合させた注目のブティックホテル「Showcase Hotel KASANE 有福温泉」。レトロな石段街に調和する外観と、ミニマルで洗練されたデザイナーズ客室のコントラストが新鮮な感動を与えてくれます。宿泊者は有福温泉のシンボルである外湯「御前湯」「さつき湯」「やよい湯」の湯巡りを自由に楽しめ、美肌の湯を様々な趣で堪能できます。食事は石見地方の豊かな風土を五感で味わうモダンローカルガストロノミー。日本海で獲れた新鮮なのどぐろの低温ローストや、しまね和牛の備長炭グリル、地元農家が育てる無農薬の冬根菜など、伝統の食材をフレンチやイタリアンの技法で再構築した革新的な一皿が並びます。感性を刺激する上質な大人の初冬ごもりにふさわしい名宿です。",
              roomTip: "アートが彩るスタイリッシュなデザイナーズ客室。上質なベッドと厳選されたアメニティが備わり、古き良き温泉街の中でモダンな寛ぎを享受できます。",
              gourmetTip: "「石見のどぐろ＆しまね和牛のモダンローカルディナー」。絶妙な火入れで素材の持ち味を極限まで引き出したのどぐろとしまね和牛、厳選された自然派ワイン。",
              highlights: [
                "伝統建築を再生したデザイナーズホテル＆有福温泉外湯巡りと創作ローカルガストロノミー",
                "アートとミニマルが調和する上質客室＆のどぐろ備長炭グリルと自然派ワイン",
                "洗練された感性を刺激するモダンステイ＆有福のレトロな石段街散策"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-900 leading-relaxed font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <header className="relative bg-gradient-to-b from-emerald-950 via-stone-900 to-amber-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider border border-emerald-400/30">
            <History className="w-4 h-4 text-emerald-300" />
            11月・12月 山陰の冬温泉特集 ｜ 世界遺産石見銀山・温泉津温泉＆有福温泉
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            世界遺産石見銀山の港町・薬師湯オール5自噴赤湯<br />
            日本海初冬の極上のどぐろ＆しまね和牛名宿
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed pt-2">
            全国唯一の重伝建温泉街。奇跡の自然湧出源泉「薬師湯」の超濃厚掛け流し赤湯と、脂の乗った極上のどぐろ、しまね和牛に心奪われる厳選名宿5選。
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5"><Flame className="w-4 h-4 text-amber-400" /> 薬師湯オール5の自噴赤湯</span>
            <span className="flex items-center gap-1.5"><History className="w-4 h-4 text-emerald-400" /> 重要伝統的建造物群保存地区</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-rose-400" /> 極上のどぐろ一本焼き＆しまね和牛</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-12">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-emerald-900 text-xs sm:text-sm font-bold bg-emerald-50 px-3 py-1 rounded-full">
              <History className="w-4 h-4" />
              銀の積出港が育んだ、時を超える木造湯治街のぬくもり
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
              初冬の温泉津・有福温泉が旅人を魅了する3つの理由
            </h2>
          </div>
          <div className="text-stone-700 text-sm sm:text-base space-y-4 leading-relaxed">
            <p>
              島根県大田市に位置する温泉津温泉（ゆのつおんせん）は、開湯約1300年の歴史を誇る古湯です。戦国時代から江戸時代にかけて、世界遺産「石見銀山」から採掘された銀を積み出す港町として繁栄し、同時に鉱夫や商人たちが湯治に訪れた歴史を持ちます。温泉街として日本で唯一、国の「重要伝統的建造物群保存地区」に選定されており、狭い谷あいに沿って石畳の坂道と大正から昭和初期の木造旅館が立ち並ぶ風景は、まるでタイムスリップしたかのような風情を漂わせます。
            </p>
            <p>
              温泉津の象徴である外湯「薬師湯」は、日本温泉協会の審査で全国でも数少ない「オール5」の最高評価を獲得した本物の奇跡の湯。地下から直接自然湧出する濃厚な黄褐色の強食塩泉は、身体の芯まで熱を行き渡らせ、冬の寒さを一瞬で忘れさせてくれます。そして11月から12月にかけての初冬、日本海で水揚げされる「のどぐろ（アカムツ）」は、脂の乗りがピークを迎え、芳醇な旨味が口いっぱいに広がる至極の味覚。さらに、松葉ガニや「しまね和牛」が並び、山陰ならではの豊かな美食に心から満たされます。
            </p>
            <p>
              温泉津から車で約30分山あいに入った「有福温泉」では、白壁の町並みと化粧水のような美肌白湯が旅人を迎えます。温泉津の濃厚な赤湯と、有福の清らかな白湯を入り比べる贅沢な湯巡りは、初冬の島根旅行ならではの最高の体験。どこか懐かしい日本の原風景に身を委ね、静かに自分と向き合う上質な時間をお過ごしください。
            </p>
            <p>
              夜になると温泉街の石畳にガス灯風の街灯が灯り、木造建築の窓から漏れる温かい灯りが幻想的な陰影を描き出します。初冬の澄んだ夜空を見上げれば満天の星が瞬き、心洗われる静寂が広がっています。
            </p>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-emerald-900 font-bold text-xs sm:text-sm tracking-wider uppercase bg-emerald-100/60 px-3 py-1 rounded-full">
              SELECTED ACCOMMODATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              温泉津＆有福温泉で泊まりたい至高の名宿5選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm max-w-xl mx-auto">
              温泉街中心の料理宿から百余年の木造老舗旅館、大正ロマンの宿、美肌白湯のブティックホテルまで
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div className="md:col-span-5 relative min-h-[260px] md:min-h-full">
                    <img
                      src={hotel.img}
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      {hotel.rating} ({hotel.reviews}件)
                    </div>
                  </div>

                  <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-stone-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                          {hotel.access}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition">
                        {hotel.name}
                      </h3>
                      <p className="text-xs text-emerald-900 font-medium">
                        {hotel.special}
                      </p>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
                        {hotel.story}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2 border-t border-stone-100">
                      <div className="bg-stone-50 p-3 rounded-xl space-y-1.5 text-xs text-stone-600">
                        <div className="font-semibold text-stone-800 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          宿の魅力・滞在ポイント
                        </div>
                        <ul className="list-disc list-inside space-y-1 pl-1 text-[11px] sm:text-xs">
                          {hotel.highlights.map((hl: string, hIdx: number) => (
                            <li key={hIdx} className="leading-snug">{hl}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] sm:text-xs text-stone-600">
                        <div className="bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100/50">
                          <span className="font-bold text-emerald-900 block mb-0.5">客室の選び方</span>
                          {hotel.roomTip}
                        </div>
                        <div className="bg-amber-50/50 p-2.5 rounded-lg border border-amber-100/50">
                          <span className="font-bold text-amber-900 block mb-0.5">冬の美食の極意</span>
                          {hotel.gourmetTip}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div>
                          <span className="text-[10px] text-stone-500 block">参考宿泊料金（2名1室/1名様）</span>
                          <span className="text-base sm:text-lg font-bold text-stone-900">{hotel.price}</span>
                        </div>
                        <a
                          href={hotel.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition shadow-xs"
                        >
                          プラン一覧を見る
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local Gourmet Section */}
        <section className="bg-gradient-to-br from-stone-900 via-emerald-950 to-amber-950 text-white rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-emerald-300 text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Utensils className="w-4 h-4 text-emerald-300" />
            初冬の石見美食手帖
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            11月・12月の温泉津で味わい尽くす白身のトロのどぐろとしまね和牛
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-emerald-400" />
                日本海の至宝「極上のどぐろ一本焼き」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                日本海の荒波にもまれ、11月から12月に最も上質な脂を蓄える「のどぐろ（アカムツ）」。皮目をパリッと焼き上げた塩焼きは、箸を入れると透明な脂がジュワッと溢れ出し、白身とは思えない濃厚なコクと甘みが口いっぱいに広がります。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-emerald-400" />
                内閣総理大臣賞の栄誉「しまね和牛」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                全国和牛能力共進会で最高賞に輝いた実績を誇る「しまね和牛」。オレイン酸を豊富に含み、融点が低いため後味がさっぱりとしていて胃もたれしません。すき焼き鍋や陶板ステーキでいただけば、芳醇な肉の香りと深い甘みに心奪われます。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Wine className="w-4 h-4 text-emerald-400" />
                石見の銘酒「開春」「死神」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                温泉津町にある老舗蔵元「若林酒造」が醸す銘酒「開春」。日本海の新鮮な海の幸やのどぐろの脂をスパッと流してくれる力強い米の旨味とキレ味が特徴。冬の熱燗でいただく地酒は、名湯上がりの贅沢なひとときを完璧に彩ります。
              </p>
            </div>
          </div>
        </section>

        {/* 1 Night 2 Days Itinerary Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-emerald-900 text-sm font-bold bg-emerald-50 px-3 py-1 rounded-full">
            <Footprints className="w-4 h-4" />
            おすすめ滞在プラン
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            世界遺産石見銀山と温泉津湯治を満喫する1泊2日モデルコース
          </h2>
          <div className="space-y-6 pt-2">
            <div className="border-l-2 border-emerald-600 pl-4 sm:pl-6 space-y-2">
              <div className="inline-block bg-emerald-100 text-emerald-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                1日目：石見銀山の大森散策から温泉津へ・外湯薬師湯と極上のどぐろの夜
              </div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                銀山坑道跡を見学し、重伝建の木造街並み散策とオール5自噴赤湯に浸かる
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                午後、出雲空港または出雲市駅からレンタカーで世界遺産「石見銀山」の大森地区へ。龍源寺間歩や武家屋敷が並ぶ町並みを散策します。車で約20分移動して温泉津温泉へチェックイン。まずは外湯「薬師湯」へ向かい、大正洋館の浴場でオール5の濃厚自噴赤湯に浸かり、身体の深部まで熱を行き渡らせます。夕食にはのどぐろ一本塩焼きやしまね和牛陶板焼き、冬のカニ料理を堪能。
              </p>
            </div>

            <div className="border-l-2 border-emerald-600 pl-4 sm:pl-6 space-y-2">
              <div className="inline-block bg-emerald-100 text-emerald-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                2日目：温泉津港の朝散歩から有福温泉の美肌白湯めぐり
              </div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                銀の積出港の波音を聴き、山あいの名湯有福温泉で化粧水風呂を体験
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                早朝、銀の積出港であった温泉津港まで朝の散策。穏やかな入江の風景と初冬の澄んだ空気を味わいます。朝食後は車で約30分の「有福温泉」へ。レトロな洋風共同浴場「御前湯」で化粧水のようなアルカリ性美肌白湯を満喫。赤湯と白湯の泉質の違いを楽しみ、石見焼の窯元に立ち寄って出雲空港または広島方面へ帰路につきます。
              </p>
            </div>
          </div>
        </section>

        {/* Climate & Access Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-stone-800 text-sm font-bold bg-stone-100 px-3 py-1 rounded-full">
            <Sun className="w-4 h-4" />
            11月・12月の気候・服装・快適アクセス案内
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の石見地方（温泉津・有福）旅行のポイントと寒さ対策
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-emerald-800" />
                日本海からの北風としぐれ対策
              </h3>
              <p>
                温泉津は沿岸部のため11月中の積雪は稀ですが、最高気温は12〜16℃、12月に入ると8〜12℃まで低下します。日本海特有の時雨（急な雨）や冷たい海風が吹き付けるため、折りたたみ傘と防風・防水性のあるダウンジャケット、マフラーなどの防寒装備を用意しましょう。12月中旬以降の車移動は念のためスタッドレスタイヤが安心です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-emerald-800" />
                出雲空港および広島方面からのアクセス
              </h3>
              <p>
                出雲縁結び空港から山陰道経由でレンタカー約75分。またはJR山陰本線温泉津駅より路線バス約5分です。広島方面からは浜田道経由で約2時間と、高速道路の整備により中国地方南北の移動もスムーズ。世界遺産石見銀山（大森地区）へも車で約20分と観光の組み合わせに最高の立地です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-emerald-900 text-sm font-bold bg-emerald-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の島根・温泉津温泉旅行 FAQ
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 flex items-start gap-2">
                  <span className="text-emerald-800 shrink-0 font-black">Q.</span>
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
        <section className="bg-gradient-to-br from-stone-950 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-emerald-300" />
              あわせて読みたい山陰の冬名湯・松葉ガニ特集
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200">
              歴史ある名湯と日本海初冬の冬の味覚を堪能する山陰厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-shimane-tamatsukuri-onsen-kamiarizuki-matsuba-crab-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-emerald-300 bg-emerald-400/20 px-2 py-0.5 rounded-full inline-block">島根・玉造温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-emerald-200 transition line-clamp-2">
                出雲神在月美肌湯＆山陰松葉がにとしまね和牛名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                日本最古の美肌温泉と出雲大社初冬参拝、解禁された松葉ガニを味わう旅。
              </p>
            </Link>

            <Link 
              href="/winter-tottori-misasa-onsen-matsuba-crab-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-emerald-300 bg-emerald-400/20 px-2 py-0.5 rounded-full inline-block">鳥取・三朝温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-emerald-200 transition line-clamp-2">
                鳥取タグ付き松葉ガニ＆世界屈指のラジウム三朝温泉名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                三徳山三仏寺の霊泉と三朝川の露天風呂、極上タグ付き松葉ガニフルコース。
              </p>
            </Link>

            <Link 
              href="/winter-yamaguchi-nagato-yumoto-onsen-fugu-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-emerald-300 bg-emerald-400/20 px-2 py-0.5 rounded-full inline-block">山口・長門湯本温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-emerald-200 transition line-clamp-2">
                音信川冬灯り＆下関直送本とらふぐとやまぐち和牛名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                清流音信川の飛び石と立ち寄り湯、下関直送の本場とらふぐを堪能する冬旅。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-shimane-yunotsu-onsen-iwamiginzan-nodoguro-wagyu-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
