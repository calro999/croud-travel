import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Anchor, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月徳島】美波＆牟岐・海陽町！四国霊場第23番札所・厄除け大師「薬王寺」初詣＆冬が旬の「天然伊勢海老・アオリイカ・阿波尾鶏」と太平洋絶景温泉宿5選",
  description: "冬の黒潮が育む南阿波の絶景と豊かな冬の恵みを巡る11〜1月の徳島南部・美波町＆海陽町特集。四国霊場第23番札所として名高い厄除け大師「薬王寺」での初詣や、冬の澄み渡る太平洋を望む日和佐大浜海岸・日和佐城。冬に甘みと身詰まりが最高潮を迎える「天然伊勢海老」やアオリイカ、名地鶏「阿波尾鶏」の贅沢会席。そして太平洋の水平線を望む美肌温泉に癒やされる厳選名宿5選を完全ガイドします。",
  keywords: '薬王寺 初詣, 徳島 厄除け 温泉, 美波町 観光, 南阿波 伊勢海老 宿, 海陽町 宍喰温泉, 徳島 冬 旅行, 日和佐 大浜海岸, アオリイカ 徳島, 阿波尾鶏 宿',
  alternates: {
    canonical: 'https://croud-travel.com/winter-tokushima-minamiawa-yakuouji-hatsumode-iseebi-stay'
  },
  openGraph: {
    title: "【11・12・1月徳島】美波＆牟岐・海陽町！四国霊場第23番札所・厄除け大師「薬王寺」初詣＆冬が旬の「天然伊勢海老・アオリイカ・阿波尾鶏」と太平洋絶景温泉宿5選",
    description: "冬の黒潮が育む南阿波の絶景と豊かな冬の恵みを巡る11〜1月の徳島南部・美波町＆海陽町特集。四国霊場第23番札所として名高い厄除け大師「薬王寺」での初詣や、冬の澄み渡る太平洋を望む日和佐大浜海岸・日和佐城。冬に甘みと身詰まりが最高潮を迎える「天然伊勢海老」やアオリイカ、名地鶏「阿波尾鶏」の贅沢会席。そして太平洋の水平線を望む美肌温泉に癒やされる厳選名宿5選を完全ガイドします。",
    url: 'https://croud-travel.com/winter-tokushima-minamiawa-yakuouji-hatsumode-iseebi-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の徳島・南阿波太平洋絶景と薬王寺初詣'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月徳島】美波＆牟岐・海陽町！四国霊場第23番札所・厄除け大師「薬王寺」初詣＆冬が旬の「天然伊勢海老・アオリイカ・阿波尾鶏」と太平洋絶景温泉宿5選",
    description: "冬の黒潮が育む南阿波の絶景と豊かな冬の恵みを巡る11〜1月の徳島南部・美波町＆海陽町特集。四国霊場第23番札所として名高い厄除け大師「薬王寺」での初詣や、冬の澄み渡る太平洋を望む日和佐大浜海岸・日和佐城。冬に甘みと身詰まりが最高潮を迎える「天然伊勢海老」やアオリイカ、名地鶏「阿波尾鶏」の贅沢会席。そして太平洋の水平線を望む美肌温泉に癒やされる厳選名宿5選を完全ガイドします。",
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function TokushimaMinamiawaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "【11・12・1月徳島】美波＆牟岐・海陽町！四国霊場第23番札所・厄除け大師「薬王寺」初詣＆冬が旬の「天然伊勢海老・アオリイカ・阿波尾鶏」と太平洋絶景温泉宿5選",
        "description": "冬の黒潮が育む南阿波の絶景と豊かな冬の恵みを巡る11〜1月の徳島南部・美波町＆海陽町特集。四国霊場第23番札所として名高い厄除け大師「薬王寺」での初詣や、冬の澄み渡る太平洋を望む日和佐大浜海岸・日和佐城。冬に甘みと身詰まりが最高潮を迎える「天然伊勢海老」やアオリイカ、名地鶏「阿波尾鶏」の贅沢会席。そして太平洋の水平線を望む美肌温泉に癒やされる厳選名宿5選を完全ガイドします。",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-10-05T00:00:00+09:00",
        "dateModified": "2026-10-05T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "旅クラウド編集部",
          "url": "https://croud-travel.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "旅クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-tokushima-minamiawa-yakuouji-hatsumode-iseebi-stay"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "冬の旅特集一覧",
            "item": "https://croud-travel.com/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "徳島・美波＆海陽町 薬王寺初詣と南阿波伊勢海老名宿",
            "item": "https://croud-travel.com/winter-tokushima-minamiawa-yakuouji-hatsumode-iseebi-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "四国霊場第23番札所・薬王寺の初詣の見どころと「厄坂」の参拝作法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "徳島県美波町に鎮座する「薬王寺（やくおうじ）」は、行基菩薩が開基し弘法大師空海が厄除けの薬師如来像を刻んで安置した四国随一の厄除け根本道場です。正月三が日には全国から数十万人の初詣客が訪れます。薬王寺の象徴である「厄坂」には、女厄坂（33段）と男厄坂（42段）、さらに本堂から瑜祇塔へと続く還暦厄坂（61段）があります。参拝者はそれぞれの石段に1円玉などのお賽銭を1枚ずつ置きながら一段ずつ心を込めて登ることで厄を落とす独特の風習があります。本堂前の瑜祇塔からは日和佐の町並みと冬の太平洋が一望できます。"
            }
          },
          {
            "@type": "Question",
            "name": "南阿波の「天然伊勢海老」と「アオリイカ」が冬に特に美味しい理由は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "徳島県南部（美波町・牟岐町・海陽町）の沿岸は、太平洋の黒潮が直接流れ込む激しい潮流と岩礁地帯が広がり、豊富な海藻を食べて育つ伊勢海老の全国有数の好漁場です。伊勢海老漁は秋に解禁され、水温が下がる11月から1月にかけて身が引き締まり、甘み成分であるグリシンやグルタミン酸が凝縮して最も美味しくなります。また、この時期に旬を迎えるアオリイカは「イカの王様」と呼ばれ、肉厚でねっとりとした極上の甘みが特徴です。地元の宿ではこれらを刺身、焼き物、鍋で豪快に味わえます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の徳島南部（美波・海陽・室戸方面）へ車でアクセスする際の道路状況は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "徳島市街から美波町・海陽町へは国道55号および徳島南部自動車道（一部開通区間）を利用します。徳島南部は太平洋沿岸の温暖な気候のため、平野部や海岸線沿いでの積雪は極めて稀です。ただし、12月下旬から1月の厳冬期に寒波が襲来した際、峠道（日和佐トンネル周辺や山間部の接続道路）では早朝・深夜に路面凍結が発生することがあります。冬期に車で訪れる場合は、念のため天気予報を確認し、冷え込みが厳しい日は速度を控えめにした慎重な運転を心がけてください。"
            }
          },
          {
            "@type": "Question",
            "name": "美波町日和佐周辺で冬に立ち寄るべきおすすめ観光スポットは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "薬王寺のすぐ近くには、アカウミガメの産卵地として国の天然記念物に指定されている「大浜海岸」があり、冬の澄んだ空気の中で白砂青松と荒波の壮大な景色を楽しめます。また、大浜海岸のすぐ隣にある「日和佐うみがめ博物館カレッタ」では、世界中のウミガメの生態を間近で観察できます。さらに、高さ約30メートルの断崖に荒波が穿った洞窟「えびす洞」や、城山展望台から太平洋を一望できる「日和佐城」も冬の散策に最適な絶景スポットです。"
            }
          },
          {
            "@type": "Question",
            "name": "徳島南部を巡る冬のおすすめドライブ＆観光モデルコースは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "【1日目】徳島市内または徳島阿波おどり空港を出発 → 国道55号を南下 → 阿南市で名物徳島ラーメンのランチ → 美波町へ移動し四国霊場第23番札所「薬王寺」で厄除け初詣・厄坂参拝 → 大浜海岸と日和佐城から冬の太平洋を眺望 → 海陽町の温泉宿にチェックイン → 絶景露天風呂と南阿波天然伊勢海老フルコースを堪能。【2日目】宿から望む水平線の初日の出鑑賞 → 海陽町宍喰海岸や室戸阿南海岸国定公園の奇岩絶景ドライブ → 道の駅日和佐で名産品（阿波尾鶏燻製やすだち加工品）のお土産購入 → 帰路へ。"
            }
          }
        ]
      }
    ]
  };

  const hotelsList = [
            {
              id: 1,
              name: "宍喰温泉　ホテルリビエラししくい",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8721/8721.jpg",
              rating: 4.22,
              reviews: 291,
              price: "¥5,480〜",
              access: "徳島市より国道55号線を室戸方面に約2時間",
              special: "絶景の太平洋が目の前！とろとろの展望温泉・新鮮海の幸・全室オーシャンビューのお部屋でお寛ぎください♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8721%2F8721.html",
              story: "徳島県最南端の海陽町・宍喰海岸に佇み、全室オーシャンビューの客室からどこまでも広がる雄大な太平洋と水平線を一望できる南阿波屈指のリゾート温泉ホテル「宍喰温泉 ホテルリビエラししくい」。地下1,000メートルの深層からこんこんと湧き出る天然温泉は、pH9.2という高いアルカリ度を誇るナトリウム―炭酸水素塩温泉。湯船に身体を沈めた瞬間、まるで美容液に浸かっているかのようなとろりとした滑らかな湯触りが肌を包み込み、冬の乾燥や旅の疲れを優しく癒やしてくれます。展望大浴場や露天風呂からは、冬の澄んだ冷涼な空気の中、水平線から昇る息を呑むほど神々しい初日の出や、夜空に煌めく満天の冬の星座を眺めながら極上の湯浴みが愉しめます。夕食の主役は、黒潮の激しい潮流にもまれて育った南阿波名物の「天然活伊勢海老」。注文を受けてから生簀から引き揚げる活ガニならぬ活伊勢海老は鮮度抜群で、プリプリと弾けるような肉厚な身と濃厚な甘みが口いっぱいに広がるお造り、香ばしい磯の香りが立ち上る鬼殻焼き、そして頭の濃厚な味噌から出汁をとった熱々の赤出汁まで、冬ならではの海の恵みを存分に味わい尽くせます。",
              roomTip: "太平洋を一望するバルコニー付きオーシャンビュー和洋室。冬の早朝には水平線から昇る感動的な初日の出を温かい客室内から独り占めできます。",
              gourmetTip: "「南阿波冬の伊勢海老＆黒潮海鮮会席」。新鮮な活伊勢海老のお造りに加え、阿波尾鶏の陶板焼きや徳島県産阿波牛を組み合わせた贅沢膳。",
              highlights: [
                "全室オーシャンビュー＆水平線から昇る初日の出を望むpH9.2天然温泉",
                "南阿波産活伊勢海老のお造り＆鬼殻焼き・阿波牛と阿波尾鶏の豪華会席",
                "道の駅宍喰温泉隣接・室戸阿南海岸国定公園のドライブ拠点"
              ]
            },
            {
              id: 2,
              name: "ふれあいの宿　遊遊ＮＡＳＡ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/128443/128443.jpg",
              rating: 3.99,
              reviews: 155,
              price: "¥4,850〜",
              access: "【車】徳島市中心部より、車で約120分　【電車】JR牟岐線 海南駅より、車で約10分",
              special: "【徳島南部の旅行・出張に】新鮮な海の幸、太平洋を望む天然温泉、全室オーシャンビューの宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128443%2F128443.html",
              story: "海陽町の緑豊かな高台に位置し、室戸阿南海岸国定公園のリアス海岸美と太平洋の大パノラマを見下ろす癒やしのリゾート宿「ふれあいの宿 遊遊ＮＡＳＡ」。全室オーシャンビューの客室からは、冬の澄み渡る紺碧の海と沖合に浮かぶ島々が見渡せ、夜には街灯りの少ない静寂の中で満天の冬の星座が頭上に煌めきます。宿自慢の天然温泉展望風呂は、身体の芯までポカポカに温めるミネラル豊富な泉質で、湯上がり後も温もりが長時間持続します。料理長が腕を振るう夕食には、南阿波の冬の三大味覚である「天然伊勢海老」「アオリイカ」「阿波尾鶏」をふんだんに取り入れた郷土創作会席が並びます。特に「イカの王様」と称されるアオリイカのお造りは、ねっとりとした濃厚な甘みとコリコリとした歯ごたえが絶品。コクと旨味が凝縮された阿波尾鶏の鍋仕立てや、冬が旬の寒ブリしゃぶしゃぶなど、地元の漁港や契約農家から毎朝直送される新鮮な食材を使った料理の数々が旅人の舌を魅了します。",
              roomTip: "海側最上階洋室ツイン。パノラマウィンドウから室戸阿南海岸国定公園のリアス海岸美と水平線を見下ろす開放的な空間。",
              gourmetTip: "「冬の南阿波三昧会席」。伊勢海老の造りと鬼瓦焼き、脂の乗った寒ブリのしゃぶしゃぶ、地酒「鳴門鯛」との絶妙なペアリング。",
              highlights: [
                "太平洋パノラマを見下ろす高台リゾート・満天の冬星空と天然温泉展望風呂",
                "冬の三大美味「伊勢海老・アオリイカ・阿波尾鶏」郷土創作会席",
                "室戸岬方面への観光アクセス良好・静かな大人の隠れ家リゾート"
              ]
            },
            {
              id: 3,
              name: "えびす洞温泉　ホテル　白い燈台",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4799/4799.jpg",
              rating: 4.20,
              reviews: 554,
              price: "¥7,040〜",
              access: "神戸淡路鳴門道鳴門ＩＣ下車国道５５を南へ９０分。ＪＲ牟岐線日和佐駅下車、車で５分。",
              special: "眺望抜群！太平洋を望む露天風呂が自慢★全室オーシャンビュー！猫ちゃんワンちゃん大歓迎のホテル♪♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4799%2F4799.html",
              story: "美波町日和佐浦、荒波が穿った景勝地「えびす洞」のすぐそばに佇み、海に突き出た断崖の上から雄大な太平洋を見下ろす絶景の一軒宿「えびす洞温泉 ホテル 白い燈台」。四国霊場第23番札所・薬王寺から車で約5分という初詣に絶好のロケーションにあり、海にせり出した名物露天風呂「波打ち際の湯」からは、眼下に激しく砕け散る白波と水平線の大パノラマを体感できます。泉質はミネラルを豊富に含んだ天然温泉で、潮風を肌に感じながら浸かると日頃のストレスや冷えが一気に吹き飛びます。夕食は、日和佐港に水揚げされたばかりの新鮮な伊勢海老やアオリイカ、冬の寒魚を豪快に盛り込んだ海鮮料理。伊勢海老やサザエ、大アサリを炭火で香ばしく焼き上げる名物「海賊焼き」は、磯の香りと凝縮された旨味が口いっぱいに広がる圧巻の美味しさ。アットホームで心温まるおもてなしとともに、南阿波の冬の旅情を深く味わえる名宿です。",
              roomTip: "太平洋正面展望和室。眼下に打ち寄せる白波と海鳥の群れを眺められ、潮騒の子守唄に包まれてぐっすり眠れます。",
              gourmetTip: "「伊勢海老付き海賊焼・磯会席」。新鮮な伊勢海老、サザエ、大アサリを炭火で豪快に焼き上げる海賊焼きと旬魚の舟盛りが圧巻。",
              highlights: [
                "薬王寺初詣まで車約5分・断崖から荒波を見下ろす露天風呂と豪快海賊焼き",
                "日和佐港直送の新鮮伊勢海老・サザエ炭火焼きと旬魚豪快舟盛り",
                "景勝地えびす洞至近・潮騒に包まれるアットホームな海辺の宿"
              ]
            },
            {
              id: 4,
              name: "天然温泉　光まちの湯　スーパーホテル阿南・富岡",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/172821/172821.jpg",
              rating: 4.43,
              reviews: 542,
              price: "¥4,650〜",
              access: "【無料平面駐車場あり(大型車可)】JR阿南駅からタクシーで約5分☆橘湾発電所まで車で約15分！",
              special: "ウェルカムバーや健康朝食と天然温泉も無料でご提供☆ランドリー＆駐車場完備！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172821%2F172821.html",
              story: "阿南市中心部に位置し、南阿波観光や薬王寺初詣の拠点として抜群の機能性と快適さを誇る「天然温泉 光まちの湯 スーパーホテル阿南・富岡」。館内には男女別の天然温泉「光まちの湯」を完備しており、弱アルカリ性のまろやかな天然温泉が旅の長距離移動や観光で歩き疲れた身体を優しく解きほぐします。毎朝焼き上げるサクサクの焼きたてパンや、徳島県産食材をふんだんに取り入れた健康朝食ビュッフェが無料で楽しめるのも大きな魅力。夕方から夜にかけてはウェルカムバーがオープンし、徳島名産のすだち酒や地酒、各種ソフトドリンクを無料で提供しており、ゆったりとした寛ぎの夜を過ごせます。清潔感溢れる客室にはシモンズ製特注ベッドと加湿空気清浄機、選べる快眠枕が揃い、快適な冬のドライブ旅を力強くサポートします。",
              roomTip: "ワイドベッド完備のエクストラルーム。シモンズ製ベッドと選べる枕でぐっすり快適な睡眠環境が整っています。",
              gourmetTip: "「健康朝食ビュッフェ」。徳島県産すだちドレッシングの新鮮サラダ、徳島名物フィッシュカツや阿波尾鶏の鶏飯が朝から味わえます。",
              highlights: [
                "男女別天然温泉「光まちの湯」完備・焼きたてパン無料朝食とウェルカムバー",
                "徳島すだち＆フィッシュカツ健康朝食・シモンズ製ベッドで快眠",
                "駐車場無料完備・阿南駅徒歩圏内でビジネス＆観光に最適"
              ]
            },
            {
              id: 5,
              name: "ロイヤルガーデンホテル＜徳島県＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13939/13939.jpg",
              rating: 3.48,
              reviews: 405,
              price: "¥4,200〜",
              access: "阿南駅から徒歩10分／徳島空港から車で70分",
              special: "【★2024年11月より約1000冊の漫画コーナー新設★】",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13939%2F13939.html",
              story: "阿南市の中心街に位置し、洗練されたシティホテルの佇まいと落ち着いたホスピタリティで多くのリピーターに親しまれている「ロイヤルガーデンホテル＜徳島県＞」。南阿波・美波町エリアへも車でスムーズにアクセスできる好立地にあり、冬の薬王寺初詣や南阿波海岸ドライブの拠点に最適です。広々とした客室はモダンで清潔感に溢れ、ビジネスからファミリー旅行まで幅広く対応。ホテル内のレストランでは、阿波牛や阿波尾鶏、鳴門鯛など徳島が全国に誇るブランド食材を使った本格的な和洋折衷料理が堪能できます。きめ細やかなサービスとゆとりある空間で、心地よい冬の滞在を約束してくれます。",
              roomTip: "デラックスツインルーム。ゆったりとした広さと寛ぎのソファスペースを備え、荷物の多い冬の観光旅行でも快適に過ごせます。",
              gourmetTip: "「阿波の幸ディナーコース」。徳島県産阿波牛のフィレステーキや鳴門鯛のカルパッチョなど、地産地消にこだわった上質な美食。",
              highlights: [
                "阿南中心部の落ち着いたシティホテル・阿波牛＆阿波尾鶏の本格ディナー",
                "広々としたデラックス客室・薬王寺や室戸方面へのドライブ拠点好立地",
                "きめ細やかなホスピタリティ・ファミリーやグループ旅行にも安心"
              ]
            }
  ];

  const faqs = [
    {
      q: "四国霊場第23番札所・薬王寺の初詣の見どころと「厄坂」の参拝作法は？",
      a: "徳島県美波町に鎮座する「薬王寺（やくおうじ）」は、行基菩薩が開基し弘法大師空海が厄除けの薬師如来像を刻んで安置した四国随一の厄除け根本道場です。正月三が日には全国から数十万人の初詣客が訪れます。薬王寺の象徴である「厄坂」には、女厄坂（33段）と男厄坂（42段）、さらに本堂から瑜祇塔へと続く還暦厄坂（61段）があります。参拝者はそれぞれの石段に1円玉などのお賽銭を1枚ずつ置きながら一段ずつ心を込めて登ることで厄を落とす独特の風習があります。本堂前の瑜祇塔からは日和佐の町並みと冬の太平洋が一望できます。"
    },
    {
      q: "南阿波の「天然伊勢海老」と「アオリイカ」が冬に特に美味しい理由は？",
      a: "徳島県南部（美波町・牟岐町・海陽町）の沿岸は、太平洋の黒潮が直接流れ込む激しい潮流と岩礁地帯が広がり、豊富な海藻を食べて育つ伊勢海老の全国有数の好漁場です。伊勢海老漁は秋に解禁され、水温が下がる11月から1月にかけて身が引き締まり、甘み成分であるグリシンやグルタミン酸が凝縮して最も美味しくなります。また、この時期に旬を迎えるアオリイカは「イカの王様」と呼ばれ、肉厚でねっとりとした極上の甘みが特徴です。地元の宿ではこれらを刺身、焼き物、鍋で豪快に味わえます。"
    },
    {
      q: "冬の徳島南部（美波・海陽・室戸方面）へ車でアクセスする際の道路状況は？",
      a: "徳島市街から美波町・海陽町へは国道55号および徳島南部自動車道（一部開通区間）を利用します。徳島南部は太平洋沿岸の温暖な気候のため、平野部や海岸線沿いでの積雪は極めて稀です。ただし、12月下旬から1月の厳冬期に寒波が襲来した際、峠道（日和佐トンネル周辺や山間部の接続道路）では早朝・深夜に路面凍結が発生することがあります。冬期に車で訪れる場合は、念のため天気予報を確認し、冷え込みが厳しい日は速度を控えめにした慎重な運転を心がけてください。"
    },
    {
      q: "美波町日和佐周辺で冬に立ち寄るべきおすすめ観光スポットは？",
      a: "薬王寺のすぐ近くには、アカウミガメの産卵地として国の天然記念物に指定されている「大浜海岸」があり、冬の澄んだ空気の中で白砂青松と荒波の壮大な景色を楽しめます。また、大浜海岸のすぐ隣にある「日和佐うみがめ博物館カレッタ」では、世界中のウミガメの生態を間近で観察できます。さらに、高さ約30メートルの断崖に荒波が穿った洞窟「えびす洞」や、城山展望台から太平洋を一望できる「日和佐城」も冬の散策に最適な絶景スポットです。"
    },
    {
      q: "徳島南部を巡る冬のおすすめドライブ＆観光モデルコースは？",
      a: "【1日目】徳島市内または徳島阿波おどり空港を出発 → 国道55号を南下 → 阿南市で名物徳島ラーメンのランチ → 美波町へ移動し四国霊場第23番札所「薬王寺」で厄除け初詣・厄坂参拝 → 大浜海岸と日和佐城から冬の太平洋を眺望 → 海陽町の温泉宿にチェックイン → 絶景露天風呂と南阿波天然伊勢海老フルコースを堪能。【2日目】宿から望む水平線の初日の出鑑賞 → 海陽町宍喰海岸や室戸阿南海岸国定公園の奇岩絶景ドライブ → 道の駅日和佐で名産品（阿波尾鶏燻製やすだち加工品）のお土産購入 → 帰路へ。"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-800">
        {/* Breadcrumb Navigation */}
        <nav aria-label="パンくずリスト" className="bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-3 text-xs md:text-sm text-slate-600 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-blue-600">ホーム</Link>
            <span>&gt;</span>
            <Link href="/features" className="hover:text-blue-600">特集一覧</Link>
            <span>&gt;</span>
            <span className="text-slate-900 font-semibold">徳島・美波＆海陽町 薬王寺初詣＆伊勢海老名宿</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-cyan-900 text-white py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/30 border border-blue-300/40 text-blue-200 text-xs md:text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>11月・12月・1月冬の四国旅情特集</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 text-white drop-shadow-md">
              徳島・美波＆牟岐・海陽町<br className="hidden sm:inline" />
              四国霊場第23番札所「薬王寺」厄除け初詣と<br className="hidden sm:inline" />
              冬が最旬の天然伊勢海老・太平洋絶景温泉宿5選
            </h1>
            <p className="max-w-3xl mx-auto text-sm md:text-lg text-blue-100 leading-relaxed drop-shadow">
              冬の黒潮が打ち寄せる雄大な太平洋の水平線と、四国屈指の厄除け根本道場「薬王寺」での新春祈願。甘みと旨味が凝縮した獲れたての天然伊勢海老やアオリイカ、阿波尾鶏に舌鼓を打ち、極上の美肌温泉で心身を解きほぐす冬の南阿波の旅をお届けします。
            </p>
          </div>
        </header>

        {/* Article Summary Box */}
        <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>本特集でわかること（11・12・1月の徳島南部旅行の要点）</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
              <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100">
                <span className="font-bold text-blue-900 block mb-1">① 薬王寺の厄除け初詣</span>
                女厄坂・男厄坂にお賽銭を一段ずつ置きながら登る古来の厄落とし参拝と、瑜祇塔からの太平洋パノラマ絶景。
              </div>
              <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
                <span className="font-bold text-amber-900 block mb-1">② 冬の南阿波三大美食</span>
                11〜1月に旨味が極まる天然伊勢海老のお造り・鬼殻焼き、肉厚なアオリイカ、コク深い名地鶏「阿波尾鶏」。
              </div>
              <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
                <span className="font-bold text-emerald-900 block mb-1">③ 太平洋を望む絶景温泉</span>
                pH9.2の超滑らかな宍喰温泉や日和佐温泉など、水平線から昇る初日の出を望む厳選名宿の湯浴み体験。
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
          
          {/* Section 1: 薬王寺初詣と南阿波の冬の魅力 */}
          <section className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">Spiritual & Scenic Highlights</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                四国随一の厄除け大師「薬王寺」初詣と冬の太平洋が織りなす絶景
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>
                徳島県南部に位置する美波町日和佐は、四国八十八ヶ所霊場第23番札所「医王山 薬王寺（やくおうじ）」の門前町として千三百年余の歴史を紡いできた聖地です。神亀3年（726年）に行基菩薩によって開基され、弘法大師空海が厄除けの薬師如来像を自ら刻んで安置したと伝えられる由緒を持ちます。四国霊場の中でも「発心の道場」と呼ばれる阿波（徳島）の掉尾を飾る関門であり、古くから全国の善男善女が厄難消除と開運招福を願って巡礼に訪れてきました。
              </p>
              <p>
                特に12月下旬から1月の年末年始・新春初詣シーズンには、阿波一円はもちろん、関西や四国各地から数十万人もの参拝客が押し寄せます。薬王寺の象徴となっているのが、境内へと続く「厄坂（やくざか）」と呼ばれる石段です。山門をくぐると現れる「女厄坂（33段）」、本堂へと続く「男厄坂（42段）」、そして本堂の奥にそびえる瑜祇塔（ゆぎとう）へと続く「還暦厄坂（61段）」があり、参拝者がそれぞれの段に1円玉などのお賽銭を1枚ずつ丁寧に置きながら、一歩一歩心を込めて登ることで自らの厄を落とすという独特の信仰儀礼が脈々と受け継がれています。
              </p>
              <p>
                石段を登りきった境内最上部に建つ瑜祇塔の前からは、冬の澄み渡る日和佐の美しい瓦屋根の町並みと、アカウミガメの産卵地として世界的に有名な大浜海岸、そしてどこまでも青く広がる雄大な太平洋の水平線が一望できます。凛とした新春の冷気の中で潮風を受けながら眺めるこの大パノラマは、新年の清々しい決意を胸に刻むのにこれ以上ない感動をもたらしてくれます。
              </p>
              <p>
                参拝後は、薬王寺のすぐ足元に広がる日和佐浦の町並みを歩いたり、国の天然記念物に指定されている大浜海岸の白砂青松を散策するのがおすすめです。さらに、高さ約30メートルの断崖絶壁に太平洋の激しい荒波が穿った海食洞「えびす洞」や、山頂から日和佐港と海岸線を一望できる「日和佐城」など、冬の澄んだ空気ならではのダイナミックな景勝地が点在しています。
              </p>
            </div>
          </section>

          {/* Section 2: 冬の南阿波グルメ（伊勢海老・アオリイカ・阿波尾鶏） */}
          <section className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-4">
              <span className="text-amber-600 font-bold text-sm tracking-wider uppercase">Winter Local Gourmet</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                黒潮の恵み！冬に最旬を迎える「天然活伊勢海老」と阿波の極上美味
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>
                南阿波の冬の旅において、歴史ある古刹参拝と並ぶ最大のハイライトが、黒潮が育む豊かな海の幸です。徳島県南部（美波町・牟岐町・海陽町）の沿岸部は、太平洋の暖流・黒潮が直接打ち寄せる荒波の海域。複雑に入り組んだリアス海岸と岩礁地帯には良質な海藻が豊富に繁茂し、これを主食として育つ「南阿波の天然伊勢海老」は、全国でも最高級の品質と身詰まりを誇ります。
              </p>
              <p>
                伊勢海老漁は秋の9月中旬に解禁されますが、水温がぐっと下がる11月から1月にかけての厳冬期は、伊勢海老が越冬のために体内にグリシンやグルタミン酸などの旨味・甘み成分をたっぷりと蓄えます。そのため、身がキュッと引き締まり、年間を通じて最も濃厚な甘みと歯ごたえが楽しめるゴールデンシーズンとなります。
              </p>
              <p>
                地元の老舗旅館や温泉宿で供される伊勢海老料理は、まさに至福の極み。生簀から揚げたばかりの活き活きとした身を花咲かせた「活伊勢海老のお造り」は、噛み締めるほどに上品で濃厚な甘みが舌の上でとろけます。さらに、炭火で殻ごと香ばしく焼き上げた「鬼殻焼き」は芳醇な磯の香りが立ち上り、頭や殻の濃厚なミソから出汁をとった熱々の「伊勢海老赤出汁」は、冬の冷えた身体の隅々にまで染み渡る極上の味わいです。
              </p>
              <p>
                伊勢海老と並び称される冬の南阿波の特産が「アオリイカ（水イカ）」です。肉厚でねっとりとした極上の甘みを誇り、「イカの王様」として刺身や天ぷらで絶賛されます。さらに、黒潮で育った脂の乗った寒ブリ、徳島が全国に誇る最高峰の地鶏「阿波尾鶏（あわおどり）」のジューシーな炭火焼きや陶板焼き、名物すだちをたっぷり絞って味わう郷土鍋など、海の幸と山の幸が競演する南阿波の美食は、旅人の五感を深く満たしてくれます。
              </p>
            </div>
          </section>

          {/* Section 3: 厳選宿5選 */}
          <section className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">Recommended Accommodations</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                薬王寺初詣と天然伊勢海老・太平洋絶景を愉しむ厳選名宿5選
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                楽天トラベルAPIから最新の空室状況・宿泊プラン・宿泊者レビューをリアルタイム取得して厳選紹介しています。
              </p>
            </div>

            <div className="space-y-8">
              {hotelsList.map((hotel) => (
                <div 
                  key={hotel.id}
                  className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6 md:p-8 space-y-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                            宿 {hotel.id}
                          </span>
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            {hotel.access.split('、')[0]}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                          {hotel.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-amber-500 justify-end">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            <span className="font-bold text-slate-800 text-sm md:text-base">{hotel.rating}</span>
                          </div>
                          <span className="text-xs text-slate-500">（{hotel.reviews}件のクチコミ）</span>
                        </div>
                        <div className="bg-blue-50 text-blue-900 px-3 py-1.5 rounded-xl border border-blue-100 text-right">
                          <span className="text-[10px] block text-blue-600 font-semibold">参考目安</span>
                          <span className="font-bold text-sm md:text-base">{hotel.price}</span>
                        </div>
                      </div>
                    </div>

                    {/* Story & Description */}
                    <div className="text-slate-700 text-sm md:text-base leading-relaxed">
                      {hotel.story}
                    </div>

                    {/* Highlights */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                      <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                        <span>この宿の特長・おすすめポイント</span>
                      </h4>
                      <ul className="space-y-1.5">
                        {hotel.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="text-xs md:text-sm text-slate-700 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Room & Gourmet Tips */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                      <div className="bg-blue-50/50 p-3.5 rounded-xl border border-blue-100">
                        <span className="font-bold text-blue-900 block mb-1 flex items-center gap-1">
                          <Building className="w-3.5 h-3.5 text-blue-600" />
                          おすすめ客室タイプ
                        </span>
                        <p className="text-slate-700">{hotel.roomTip}</p>
                      </div>
                      <div className="bg-amber-50/50 p-3.5 rounded-xl border border-amber-100">
                        <span className="font-bold text-amber-900 block mb-1 flex items-center gap-1">
                          <Utensils className="w-3.5 h-3.5 text-amber-600" />
                          おすすめ夕食プラン
                        </span>
                        <p className="text-slate-700">{hotel.gourmetTip}</p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2 flex justify-end">
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-sm md:text-base px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                      >
                        <span>楽天トラベルでプラン・空室を確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: 11〜1月冬の1泊2日モデルコース */}
          <section className="space-y-6">
            <div className="border-l-4 border-indigo-600 pl-4">
              <span className="text-indigo-600 font-bold text-sm tracking-wider uppercase">Itinerary Guide</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                冬の徳島南部を満喫する1泊2日王道モデルコース
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-slate-200 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">1日目</span>
                  <h3 className="font-bold text-slate-900 text-base md:text-lg">厄除け根本道場「薬王寺」初詣と南阿波絶景ドライブ</h3>
                </div>
                <div className="pl-4 border-l-2 border-indigo-200 space-y-3 text-sm text-slate-700">
                  <p><strong>10:00 徳島市内または徳島阿波おどり空港を出発</strong> - レンタカーで国道55号または徳島南部自動車道を利用して南下ドライブ。車窓に広がる阿南海岸の景色を満喫。</p>
                  <p><strong>11:30 阿南市周辺でランチ</strong> - 地元で愛される徳島ラーメンの名店や、阿波尾鶏の炭火焼き親子丼ランチを堪能。</p>
                  <p><strong>13:30 美波町「薬王寺」に到着・厄除け初詣</strong> - 女厄坂・男厄坂に1円玉を1枚ずつ置きながら本堂へ参拝。瑜祇塔から冬の太平洋と日和佐の町並みを一望。</p>
                  <p><strong>15:30 大浜海岸＆えびす洞散策</strong> - ウミガメの浜として名高い大浜海岸の砂浜を歩き、荒波が穿った巨大な海食洞・えびす洞の雄大な自然美を見学。</p>
                  <p><strong>17:00 海陽町・宍喰温泉の宿にチェックイン</strong> - pH9.2の滑らかな天然温泉露天風呂で身体を芯から温めた後、天然活伊勢海老のお造りや鬼殻焼き、地酒「鳴門鯛」の贅沢な夕食を満喫。</p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full">2日目</span>
                  <h3 className="font-bold text-slate-900 text-base md:text-lg">水平線の初日の出と室戸阿南海岸国定公園の奇岩巡り</h3>
                </div>
                <div className="pl-4 border-l-2 border-cyan-200 space-y-3 text-sm text-slate-700">
                  <p><strong>07:00 水平線から昇る朝日を鑑賞</strong> - 冬の澄み渡る太平洋から昇る神々しい日の出を、客室のバルコニーや朝風呂の露天風呂から拝む。</p>
                  <p><strong>09:00 朝食後に出発・宍喰海岸ドライブ</strong> - 奇岩と白波が連続する室戸阿南海岸国定公園の美しいシーサイドラインを快適にドライブ。</p>
                  <p><strong>11:00 日和佐うみがめ博物館カレッタ見学</strong> - 世界のウミガメの生態や保護活動を学び、悠々と泳ぐウミガメの姿に心癒やされる。</p>
                  <p><strong>12:30 道の駅日和佐でショッピング＆ランチ</strong> - 阿波尾鶏の唐揚げ定食やアオリイカ丼を味わい、すだち加工品や阿波尾鶏燻製、徳島銘菓のお土産を購入。</p>
                  <p><strong>15:30 徳島市内・空港へ帰着</strong> - 快適な四国周遊ドライブを締めくくり。</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: 冬のアクセス＆注意点 */}
          <section className="space-y-6">
            <div className="border-l-4 border-cyan-600 pl-4">
              <span className="text-cyan-600 font-bold text-sm tracking-wider uppercase">Travel Tips & Weather</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                冬の徳島南部旅行の気候・服装と交通アクセスのアドバイス
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-slate-200 space-y-4 text-slate-700 text-sm md:text-base leading-relaxed">
              <div className="flex items-start gap-3">
                <Sunrise className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">温暖な太平洋気候と海風対策</h3>
                  <p className="text-slate-600 text-sm">
                    南阿波エリアは太平洋の暖流・黒潮の影響を受けるため、四国内でも冬期は比較的温暖で晴天率が高い地域です。日中は日差しがあればポカポカと過ごしやすい日が多いですが、海岸沿いや高台の薬王寺境内では冬の強い海風が吹き抜けます。防風性のあるアウターやマフラー、手袋などの防寒具を用意しておくと安心です。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <AlertTriangle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">冬の道路凍結と交通情報</h3>
                  <p className="text-slate-600 text-sm">
                    海岸沿いの国道55号は平年ほとんど積雪はありませんが、寒波襲来時の深夜から早朝にかけては、山沿いのトンネル出入口や橋梁部で路面凍結が発生する場合があります。冬期に車で訪れる場合は、念のため天気予報を確認し、冷え込みが厳しい日は速度を控えめにした慎重な運転を心がけてください。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: FAQ Section */}
          <section className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">Frequently Asked Questions</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                徳島南部・薬王寺初詣＆冬の旅行に関するよくある質問
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
                    <span className="text-blue-600 font-black">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed pl-6 border-l-2 border-blue-100">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: 内部リンク＆関連特集 */}
          <section className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 text-white space-y-6 shadow-xl">
            <div>
              <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Related Destinations</span>
              <h2 className="text-xl md:text-2xl font-bold mt-1">
                あわせて読みたい四国・冬の厳選旅特集
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/winter-kagawa-zentsuji-marugame-castle-udon-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-amber-400 text-xs font-bold block mb-1">香川特集</span>
                <span className="font-bold text-sm block mb-1">善通寺＆丸亀城！空海生誕地初詣としっぽくうどん名宿</span>
                <span className="text-xs text-slate-300">弘法大師生誕の総本山善通寺と讃岐冬うどん巡り…</span>
              </Link>
              <Link
                href="/features"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-cyan-400 text-xs font-bold block mb-1">特集一覧</span>
                <span className="font-bold text-sm block mb-1">全国の冬シーズン・年末年始旅行特集一覧</span>
                <span className="text-xs text-slate-300">全国47都道府県の厳選温泉・初詣・冬の味覚特集を網羅…</span>
              </Link>
              <Link
                href="/"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-emerald-400 text-xs font-bold block mb-1">トップページ</span>
                <span className="font-bold text-sm block mb-1">旅クラウド | 国内旅行・ホテル予約比較</span>
                <span className="text-xs text-slate-300">楽天トラベルAPIと連携した安心の宿泊予約ポータル…</span>
              </Link>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
