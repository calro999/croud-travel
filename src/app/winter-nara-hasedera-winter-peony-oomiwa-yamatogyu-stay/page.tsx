import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, Sparkles, Calendar, Utensils, Compass, ExternalLink, Snowflake, Flame, Building, Coffee, ThermometerSun } from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月奈良：極上大和牛を味わう！名宿5選',
  description: '11月から1月、古都・奈良の大和路は凛とした冬の澄んだ空気に包まれ、神話と歴史が息づく静謐な祈りの季節を迎えます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '長谷寺 冬牡丹 寒牡丹 見頃, 大神神社 初詣 三輪山, 橿原神宮 初詣 混雑, 大和牛 すき焼き 宿, 長谷寺 温泉 井谷屋, 多武峰観光ホテル, カンデオホテルズ 奈良橿原, グランドメルキュール奈良橿原, ホテル奈良さくらいの郷, 11月 12月 1月 奈良旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-nara-hasedera-winter-peony-oomiwa-yamatogyu-stay/"
  },
  openGraph: {
    title: '11・12・1月奈良：極上大和牛を味わう！名宿5選',
    description: '11月から1月、古都・奈良の大和路は凛とした冬の澄んだ空気に包まれ、神話と歴史が息づく静謐な祈りの季節を迎えます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-nara-hasedera-winter-peony-oomiwa-yamatogyu-stay',
    type: 'article',
    images: [{ url: 'https://img.travel.rakuten.co.jp/share/HOTEL/8550/8550.jpg', width: 1200, height: 630, alt: '長谷寺冬牡丹と大神神社初詣名宿' }]
  }
};

export default function NaraHasederaOomiwaPage() {
  const hotelsData = [
            {
              id: 1,
              name: "長谷寺　湯元　井谷屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8550/8550.jpg",
              rating: 4.42,
              reviews: 189,
              price: "¥9,240〜",
              access: "名阪国道　針ＩＣ→Ｒ３６９→Ｒ１６５→長谷寺参道（針ＩＣより２０分）",
              special: "長谷寺まで徒歩5分！自家源泉「長谷寺温泉」を持つ創業160年の老舗旅館",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8550%2F8550.html",
              story: "長谷寺の門前町に佇み、幕末の文久元年（1861年）創業から160年余りの歴史を刻む老舗温泉旅館「長谷寺 湯元 井谷屋」。長谷寺の仁王門まで徒歩約5分という参拝至近の立地にあり、かつて伊勢参宮本街道の宿場町として賑わった旅籠の情緒を今に伝えます。館内には長谷寺周辺で唯一湧出する天然温泉の大浴場と風情ある岩露天風呂を備え、冬の散策で冷えた身体を柔らかに包み込みます。夕食には歴史ある大和の銘柄牛「大和牛」のすき焼きや、名物の猪肉を使ったぼたん鍋、吉野葛料理など、滋味あふれる郷土会席を堪能できます。",
              roomTip: "清流初瀬川を望む純和風客室。川のせせらぎと冬の山並みを眺めながら、昔ながらの心温まるおもてなしに浸れます。",
              gourmetTip: "「厳選・大和牛すき焼き会席」。上品な脂の甘みと赤身のコクが際立つ大和牛を特製割り下で煮立て、吉野葛や地元野菜とともに味わう名物鍋。",
              highlights: [
                "長谷寺仁王門まで徒歩5分の創業160年老舗・門前唯一の自家源泉天然温泉岩風呂",
                "特製割り下で仕立てる伝統の大和牛すき焼き・冬限定の猪肉ぼたん鍋会席",
                "初瀬川沿いの純和風客室・冬牡丹の咲く長谷寺早朝参拝に最高の拠点"
              ]
            },
            {
              id: 2,
              name: "多武峰観光ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14788/14788.jpg",
              rating: 4.44,
              reviews: 135,
              price: "¥12,500〜",
              access: "近鉄JR桜井駅より車で15分（事前予約で送迎応相談）、またはバスで25分→徒歩3分　天理IC、美原JCTより車約45分",
              special: "飛鳥・大和散策の拠点として最適の宿。名物「義経鍋」もご賞味あれ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14788%2F14788.html",
              story: "藤原鎌足を祀る名刹・談山神社の門前に位置し、四季折々の美しい山懐に抱かれた山宿「多武峰（とうのみね）観光ホテル」。冬には周囲の山々が静まり返り、世界唯一の木造十三重塔が白銀の雪景色に浮かび上がる神秘的なパノラマが広がります。館内の展望大浴場からは大和の自然を一望でき、日頃の喧騒を完全に忘れさせてくれます。名物の夕食は、源義経が吉野落ちの際に武具の兜を使って野鳥や山菜を煮て食べたという故事に由来する「名物・義経鍋」。中央で野菜を茹で、周囲の鉄板で大和牛や合鴨を焼いて味わう独特の鍋料理が絶品です。",
              roomTip: "談山神社側和洋室。障子を開けると窓いっぱいに大和の山並みと社叢が広がり、凛とした冬の静けさを満喫できます。",
              gourmetTip: "「多武峰名物・義経鍋会席」。特注の兜型鉄鍋で味わう大和牛、合鴨肉、新鮮な季節野菜の焼き・茹でを一度に楽しむ秘伝の味。",
              highlights: [
                "世界唯一の十三重塔を望む談山神社門前・故事にちなむ名物「義経鍋」と展望大浴場",
                "兜型特注鍋で大和牛と合鴨を焼いて茹でる名物義経鍋・滋味あふれる山の恵み",
                "白銀の山懐に抱かれる静寂のひととき・静かに過ごしたい大人の冬旅に最適"
              ]
            },
            {
              id: 3,
              name: "ＣＡＮＤＥＯ　ＨＯＴＥＬＳ（カンデオホテルズ）奈良橿原",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/165797/165797.jpg",
              rating: 4.49,
              reviews: 1881,
              price: "¥6,600〜",
              access: "【大和八木駅より徒歩3分】＜近鉄難波駅より特急で35分・京都駅より特急で50分＞吉野の紅葉まで特急で約50分♪",
              special: "最上階に大展望風呂を備えるジャパンクールデザインホテル／全室禁煙",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165797%2F165797.html",
              story: "近鉄大和八木駅より徒歩約3分、橿原神宮や大神神社へのアクセス拠点として抜群の利便性を誇る唯一無二のスタイリッシュホテル「CANDEO HOTELS（カンデオホテルズ）奈良橿原。」。最上階（9階）には露天風呂・内湯・サウナを備えた「スカイスパ」を完備し、大和三山（香久山・畝傍山・耳成山）や古都の冬景色、満天の星空を見渡しながら極上の温浴体験が叶います。機能的で洗練された客室にはシモンズ社製ベッドと小上がりソファを備え、一人旅からカップル、ファミリーまで上質な癒やしを提供します。",
              roomTip: "エグゼクティブツイン。最上階スカイスパへのアクセスも良く、広々とした小上がりソファから大和盆地の夜景をゆったり眺められます。",
              gourmetTip: "「健康朝食ビュッフェ」。奈良県産のお米や地元豆腐、旬の和総菜を多彩に揃えた身体に優しい朝のエネルギーチャージ。",
              highlights: [
                "最上階展望露天風呂「スカイスパ」完備・大和三山を見渡すスタイリッシュ空間",
                "シモンズ製上質ベッドと小上がりソファ・出張から観光まで圧倒的人気の快適ステイ",
                "大和八木駅徒歩3分で大神神社・橿原神宮へ好アクセス・コスパ抜群の滞在"
              ]
            },
            {
              id: 4,
              name: "グランドメルキュール奈良橿原",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9221/9221.jpg",
              rating: 4.23,
              reviews: 3792,
              price: "¥5,395〜",
              access: "近鉄 橿原神宮前駅東口より徒歩約１分／南阪奈道・葛城ICより車約1５分／大阪より車約４０分／京都より電車約１時間",
              special: "橿原神宮前駅東口から徒歩約1分｜大阪から電車40分、京都から電車60分｜近くて便利、観光拠点にも◎",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9221%2F9221.html",
              story: "近鉄橿原神宮前駅東口から徒歩わずか1分、神武天皇を祀る橿原神宮の広大な神域まで徒歩圏内に位置する「グランドメルキュール奈良橿原（旧THE KASHIHARA）。」。地下1階には橿原温泉を引く広々とした温泉大浴場を備え、冬の初詣や古都巡りの疲れを心地よく癒やします。客室は落ち着いたトーンの広々とした空間で、窓からは歴史ある飛鳥の風情を遠望。夕食ビュッフェでは地元奈良の食材を活かした和洋中の創作メニューやライブキッチンの出来立て料理が並び、オールインクルーシブ感覚で優雅な冬の滞在を満喫できます。",
              roomTip: "クラシックツインルーム。ゆとりのある客室設計で、駅前とは思えない静けさの中で心地よい快眠が約束されます。",
              gourmetTip: "「冬のディナービュッフェ」。地元の伝統野菜や大和ポーク、季節の海鮮を取り入れたシェフ特製の多彩なグリル＆温菜料理。",
              highlights: [
                "近鉄橿原神宮前駅徒歩1分の好立地・広々とした温泉大浴場と充実のディナービュッフェ",
                "地元奈良の食材を散りばめたビュッフェ・橿原神宮への初詣参拝が至近でスムーズ",
                "広々とした客室設計と駅前至便なアクセス・家族連れやグループ旅にも安心"
              ]
            },
            {
              id: 5,
              name: "ホテル奈良さくらいの郷",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/184470/184470.jpg",
              rating: 4.46,
              reviews: 138,
              price: "¥9,900〜",
              access: "近鉄・JR「桜井駅」よりお車にて約10分、近鉄「橿原神宮前駅」よりお車にて約15分",
              special: "奈良の有名な寺社仏閣など歴史巡りに最適県内中央東南部に位置する特別な絶景に出会う旅",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184470%2F184470.html",
              story: "神宿る三輪山の麓、豊かな田園と緑に囲まれた複合リゾート施設「ホテル奈良さくらいの郷」。大和三山や大和盆地を見渡す小高い丘に位置し、大神神社や長谷寺への参拝拠点として絶好のロケーションです。木をふんだんに使った温かみのある客室は全室テラス付きで、冬の澄んだ大和の原風景をプライベートに楽しめます。夕食は奈良県産の旬の野菜や伝統の大和牛を贅沢に仕立てた創作コース。地元ワイナリーのワインや三輪の地酒とともに、奈良のテロワールを五感で味わう至福のオーベルジュステイが叶います。",
              roomTip: "テラス付きスーペリアツイン。広々としたバルコニーから三輪山や大和の山並みを望み、朝の清々しい空気を深呼吸できます。",
              gourmetTip: "「大和テロワール・冬の創作ディナー」。極上大和牛の炭火ローストと三輪手延べそうめん、奈良の冬根菜を美しく盛り付けたコース。",
              highlights: [
                "三輪山の麓に佇む丘の上の隠れ家リゾート・全室テラス付きで大和盆地を一望",
                "奈良の旬食材と大和牛を味わう創作コース・地元ワイナリーのワインとともに",
                "三輪神社や長谷寺への観光拠点・静寂な里山の空気の中で深呼吸する休日"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "長谷寺の「冬牡丹（寒牡丹）」の開花時期と見頃、冬の拝観ポイントは？",
    "a": "長谷寺では例年12月上旬から1月下旬にかけて「冬牡丹」が見頃を迎えます。雪や寒風から花を守るために設置された「藁囲い（わらづと）」の中で、赤・白・ピンクの大輪の花が健気に咲く姿は、冬の長谷寺を象徴する風物詩です。国宝本堂へと続く屋根付きの「登廊（のぼりろう・399段）」の石段沿いや境内の随所に配置され、雪が降った日には雪と藁と牡丹のコントラストが息を呑む美しさを見せます。冬期は朝9時から開門しており、朝の光に照らされる牡丹の鑑賞がおすすめです。"
  },
  {
    "q": "日本最古の神社「大神神社（おおみわじんじゃ）」の冬初詣の特徴と参拝方法は？",
    "a": "奈良県桜井市に鎮座する大神神社は、本殿を持たず背後の「三輪山」をご神体とする日本最古の神社です。主祭神は大物主大神（オオモノヌシノオオカミ）で、国造りの神、厄除け・延命長寿・商売繁盛・酒造りの神として篤く崇敬されています。正月三が日には約50万人以上の初詣客が参拝します。境内には白蛇が棲むとされるご神木「巳の神杉（みのかみすぎ）」があり、卵やお酒をお供えして祈願する参拝者が絶えません。拝殿手前の「三ツ鳥居」の神聖な空気は冬の張り詰めた大気の中でより一層際立ちます。"
  },
  {
    "q": "冬の大和路グルメ「大和牛」と冬に味わう温かい「三輪にゅうめん」とは？",
    "a": "大和牛（やまとうし）は鎌倉時代からの歴史を持ち、上質な黒毛和牛として奈良の豊かな水と自然で育てられた極上のブランド牛です。きめ細やかなサシと芳醇な香りが特徴で、寒い冬にはすき焼き鍋やしゃぶしゃぶで味わうのが格別です。また、大神神社の門前町は「手延べそうめん発祥の地」として名高い三輪地区。冬には熱々の特製出汁で煮込んだ「にゅうめん」が定番で、椎茸や三つ葉、柚子の香りが効いた温かい一杯が参拝で冷えた身体を芯から温めてくれます。"
  },
  {
    "q": "橿原神宮の新春初詣の混雑状況と見どころは？",
    "a": "橿原神宮は第一代神武天皇が即位した宮址に明治時代に創建された神宮で、正月三が日には約100万人もの初詣参拝客が訪れます。広大な神域を誇り、畝傍山（うねびやま）を背景にした壮大な「外拝殿」と大鳥居は圧巻のスケールです。元日の0時からは大勢の参拝者で賑わいますが、境内が非常に広々としているため、長谷寺や大神神社に比べて歩行規制による混雑のストレスが比較的少ないのが特徴です。新春の開運絵馬や干支の巨大絵馬も必見です。"
  },
  {
    "q": "冬の奈良・桜井・橿原エリアを巡る交通アクセスと移動のコツは？",
    "a": "京都・大阪（難波・天王寺）から近鉄電車（特急・急行）を利用すれば、大和八木駅や橿原神宮前駅、桜井駅まで約40分〜1時間で直通アクセス可能です。桜井駅から長谷寺へは近鉄大阪線で約6分（長谷寺駅下車、徒歩約15分）、大神神社へはJR桜井線（万葉まほろば線）で三輪駅下車（徒歩約5分）と、電車での移動が極めてスムーズです。車を利用する場合、年末年始は三輪駅周辺や橿原神宮周辺で交通規制が敷かれるため、駅前ホテルの駐車場に車を止めて近鉄電車で回るパーク＆ライドが最も快適です。"
  }
];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    name: "【11・12・1月奈良】花の御寺・長谷寺の「冬牡丹（寒牡丹）」と日本最古の三輪山・大神神社初詣＆極上大和牛を味わう名宿5選",
    description: "11月から1月、古都・奈良の大和路は凛とした冬の澄んだ空気に包まれ、神話と歴史が息づく静謐な祈りの季節を迎えます。「花の御寺」と称される長谷寺では、藁囲い（わらづと）に守られ雪中に艶やかに咲き誇る可憐な「冬牡丹（寒牡丹）」が見頃を迎え、国宝本堂へと続く399段の登廊が静寂の美を放ちます。さらに三輪山をご神体とする日本最古の神社「大神神社」や「橿原神宮」での新春開運初詣、温かい三輪にゅうめん、きめ細やかなサシがとろける伝統の銘柄牛「大和牛」のすき焼き。心洗われる大和路の冬を五感で癒やす厳選名宿5選をご紹介します。",
    url: 'https://croud-travel.pages.dev/winter-nara-hasedera-winter-peony-oomiwa-yamatogyu-stay',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://croud-travel.pages.dev/' },
        { '@type': 'ListItem', position: 2, name: '冬の特集一覧', item: 'https://croud-travel.pages.dev/features/' },
        { '@type': 'ListItem', position: 3, name: '長谷寺冬牡丹＆大神神社・大和牛ステイ', item: 'https://croud-travel.pages.dev/winter-nara-hasedera-winter-peony-oomiwa-yamatogyu-stay' }
      ]
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: hotelsData.map((h, idx) => ({
        '@type': 'Hotel',
        position: idx + 1,
        name: h.name,
        image: h.img,
        priceRange: h.price,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: h.rating,
          reviewCount: h.reviews
        },
        address: {
          '@type': 'PostalAddress',
          addressRegion: '奈良県',
          addressLocality: idx === 0 || idx === 1 || idx === 4 ? '桜井市' : '橿原市'
        }
      }))
    }
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqListItems.map((item: { q: string; a: string }) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  };


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月奈良】花の御寺・長谷寺の「冬牡丹（寒牡丹）」と日本最古の三輪山・大神神社初詣＆極上大和牛を味わう名宿5選",
    "description": "11月から1月、古都・奈良の大和路は凛とした冬の澄んだ空気に包まれ、神話と歴史が息づく静謐な祈りの季節を迎えます。「花の御寺」と称される長谷寺では、藁囲い（わらづと）に守られ雪中に艶やかに咲き誇る可憐な「冬牡丹（寒牡丹）」が見頃を迎え、国宝本堂へと続く399段の登廊が静寂の美を放ちます。さらに三輪山をご神体とする日本最古の神社「大神神社」や「橿原神宮」での新春開運初詣、温かい三輪にゅうめん、きめ細やかなサシがとろける伝統の銘柄牛「大和牛」のすき焼き。心洗われる大和路の冬を五感で癒やす厳選名宿5選をご紹介します。",
    "url": "https://croud-travel.pages.dev/winter-nara-hasedera-winter-peony-oomiwa-yamatogyu-stay/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev" },
      { "@type": "ListItem", "position": 2, "name": "【11・12・1月奈良】花の御寺・長谷寺の「冬牡丹（寒牡丹）」と日本最古の三輪山・大神神社初詣＆極上大和牛を味わう名宿5選", "item": "https://croud-travel.pages.dev/winter-nara-hasedera-winter-peony-oomiwa-yamatogyu-stay/" }
    ]
  };

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-purple-100 selection:text-purple-900 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-white overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#9333ea_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs sm:text-sm font-semibold tracking-wide">
            <Snowflake className="w-4 h-4 text-purple-300" />
            11月・12月・1月 冬の古都花めぐり・日本最古神社初詣＆大和牛特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-snug text-stone-100 font-serif">藁囲いに咲く雪中の花と神宿る三輪山の静謐<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-amber-200"> 長谷寺「冬牡丹」と日本最古大神神社初詣・極上大和牛の名宿 </span></h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-light">
            花の御寺・長谷寺の屋根付き登廊に咲く可憐な藁囲いの「冬牡丹」。三輪山をご神体とする日本最古の聖地「大神神社」と建国の神威あふれる「橿原神宮」の新春初詣。熱々の三輪にゅうめんと伝統の極上霜降り「大和牛」のすき焼き、古都の静寂を望む名湯に心癒やされる至福の冬旅へご案内します。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Calendar className="w-4 h-4 text-purple-400" /> 旬の時期：11月〜1月
            </span>
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Utensils className="w-4 h-4 text-purple-400" /> 大和牛すき焼き・三輪にゅうめん
            </span>
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Flame className="w-4 h-4 text-purple-400" /> 長谷寺温泉・スカイスパ露天
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Feature Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-purple-600 pl-4">
            <span className="text-purple-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              大和路の冬が誘う神聖な静寂、可憐な冬牡丹と日本最古の祈り
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              雪化粧の登廊に咲く凛とした冬の花と、古代日本の原風景が広がる聖地巡礼
            </p>
          </div>

          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              奈良盆地の南東部に位置する桜井・橿原エリアは、日本の古代神話と歴史が黎明を迎えた「まほろばの里」です。冬の訪れとともに山裾が冷涼な空気に包まれる11月から1月、花の御寺として名高い「長谷寺」では、冬限定の奇跡のような絶景「冬牡丹（寒牡丹）」が境内を彩ります。寒風や積雪から花を守るために一つひとつ丁寧に編まれた「藁囲い（わらづと）」の中で、雪を背に鮮やかに咲き誇る牡丹の花々は、息を呑むほどに可憐で神聖な気品を放ちます。国宝・本堂へと続く399段の登廊を登れば、舞台造りから見渡す白銀の渓谷美が目の前に広がります。
            </p>
            <p>
              長谷寺からほど近く、神話の時代から続く「大神神社（おおみわじんじゃ）」は、三輪山そのものをご神体とする日本最古の神社です。本殿を持たず、清らかな拝殿の奥に佇む三ツ鳥居を通じて御山を拝む古代の祭祀の形が今も厳かに守り継がれています。正月三が日には新年の健康と繁栄を祈る数十万人の初詣客で賑わい、境内の「巳の神杉」に手を合わせる人々の姿が絶えません。さらに南へ足を延ばせば、神武天皇を祀る橿原神宮の広大な外拝殿と畝傍山の雄大な冬姿が旅人を圧倒します。
            </p>
            <p>
              冬の大和路のもう一つの至福が、冷えた身体を内側から芯まで温めてくれる滋味あふれる郷土グルメです。鎌倉時代から続く銘柄牛「大和牛」は、柔らかな肉質と芳醇なサシの甘みが格別で、特製出汁で仕立てるすき焼き鍋は冬の最高の贅沢。大神神社の門前で古くから愛される熱々の「三輪にゅうめん」や吉野本葛料理、そして門前町の歴史ある温泉旅館や展望露天風呂での宿泊が、心身を清める極上の冬の休日を叶えてくれます。
            </p>
          </div>

          {/* Highlights 3-column Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-purple-50/50 border border-purple-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-stone-900 text-base">藁囲いに咲く長谷寺の冬牡丹</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                寒風に耐え凛と咲く約千株の冬牡丹。国宝・登廊の399段石段と本堂舞台造りから望む静謐な雪景色。
              </p>
            </div>

            <div className="bg-purple-50/50 border border-purple-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-stone-900 text-base">日本最古の大神神社＆橿原初詣</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                三輪山を拝む古代の信仰。巳の神杉や橿原神宮の広大な神域で一年の息災と開運を願う新春初詣。
              </p>
            </div>

            <div className="bg-purple-50/50 border border-purple-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-stone-900 text-base">大和牛すき焼き＆温泉宿</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                とろけるサシと濃厚な旨味の大和牛鍋。三輪にゅうめんと門前の天然温泉・スカイスパ露天風呂の極上癒やし。
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Timeline Model Course Section */}
        <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-stone-800 pb-4">
            <span className="text-purple-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">
              【1泊2日】古代の祈りと冬牡丹・大和牛美食を巡る聖地黄金モデルコース
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm mt-1">
              近鉄電車で京都・大阪から直通。神話の山裾と名刹を静かに巡る冬の休日。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-purple-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-purple-400 tracking-wider uppercase">DAY 1 午前〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  10:45 三輪駅到着 ➔ 日本最古「大神神社」新春参拝＆熱々「三輪にゅうめん」ランチ
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  JR桜井線三輪駅へ到着。杉木立に囲まれた参道を歩き大神神社の拝殿へ。三ツ鳥居を通じてご神体の三輪山に祈りを捧げ、巳の神杉を参拝。門前の老舗茶屋で、冬限定の温かい出汁が染み渡る手延べ「三輪にゅうめん」と名物柿の葉すしを味わいます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-purple-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-purple-400 tracking-wider uppercase">DAY 1 午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  13:30 橿原神宮の広大な神域を参拝 ➔ 長谷寺門前の温泉宿またはホテルへチェックイン
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  近鉄電車で橿原神宮前へ。神武天皇を祀る壮大な外拝殿と畝傍山の冬景色を仰ぎ、新年の開運を祈願。午後は長谷寺門前の歴史ある温泉旅館や橿原のホテルへチェックイン。天然温泉やスカイスパの展望露天風呂で冷えた身体を芯から解きほぐします。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-purple-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-purple-400 tracking-wider uppercase">DAY 1 夕刻〜夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  18:30 伝統の銘柄牛「大和牛すき焼き」または名物「義経鍋」会席ディナー
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  宿自慢の夕食膳。きめ細やかなサシがとろける極上大和牛のすき焼き鍋や、兜型の鉄鍋で味わう多武峰名物の義経鍋を堪能。奈良の地酒「みむろ杉」や「春鹿」とともに、歴史の深みに抱かれる静かな冬の夜をゆったりと過ごします。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-purple-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-purple-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  09:00 花の御寺・長谷寺開門 ➔ 藁囲いの「冬牡丹」鑑賞＆国宝登廊・本堂舞台へ
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  朝の澄んだ光の中、長谷寺の仁王門へ。藁囲いの中で赤や白の大輪を咲かせる冬牡丹を愛でながら、399段の登廊を登りつめ国宝の本堂へ。舞台造りから見渡す白銀の初瀬渓谷を一望し、十一面観世音菩薩に参拝。門前町で名物の焼き立て草餅を味わい帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Gastronomy & Culture Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-purple-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Gastronomy & Culture</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              鎌倉時代から続く銘柄牛「大和牛」と、三輪手延べそうめんの歴史
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-purple-700" />
                歴史書にも名を残す幻の極上黒毛和牛「大和牛」
              </h3>
              <p>
                大和牛の起源は鎌倉時代に遡り、名牛を描いた絵巻『国牛十図（こくぎゅうじゅうず）』にもその名が刻まれる歴史ある銘柄牛です。奈良の清らかな地下水と良質な飼料で丹精込めて育てられた肉質は、融点が低く上品な甘みを持つサシと、噛むほどに旨味が溢れる赤身のバランスが秀逸。寒い冬には、特製の割り下で吉野本葛や地元の大和野菜とともに煮立てるすき焼きが一番の贅沢です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Coffee className="w-4 h-4 text-purple-700" />
                そうめん発祥の地・三輪が誇る冬の「温かいにゅうめん」
              </h3>
              <p>
                大神神社の周辺は、約1200年前の奈良時代に手延べそうめんが初めて作られた「そうめん発祥の地」。寒風が吹き下ろす冬に極細の手延べ製法で作られる三輪そうめんは、強いコシと小麦の豊かな風味が特徴です。冬には鰹と昆布の熱々出汁で仕立てる「にゅうめん」として親しまれ、柚子の皮や椎茸、生姜を添えて冷えた身体を芯から優しく温めてくれます。
              </p>
            </div>
          </div>
        </section>

        {/* Selected Hotels Section */}
        <section className="space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-purple-700 font-bold text-xs sm:text-sm tracking-wider uppercase block">
              Handpicked Accommodations
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-serif">
              長谷寺冬牡丹＆大神神社・大和牛を愉しむ厳選名宿5選
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm">
              公式楽天トラベルAPIより取得した最新の宿泊データ・クチコミ・最低料金を掲載
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((hotel: any) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-3xl border border-stone-200/90 shadow-xs overflow-hidden transition-all duration-300 hover:border-purple-400 hover:shadow-md"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Hotel Header Badge & Title */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/70 text-purple-800 text-xs font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                        厳選名宿 No.{hotel.id}
                      </span>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="flex items-center gap-1 text-purple-600 font-bold">
                          <Star className="w-4 h-4 fill-purple-400 text-purple-400" />
                          {hotel.rating}
                        </span>
                        <span className="text-stone-400">({hotel.reviews}件のクチコミ)</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group">
                      <a 
                        href={hotel.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-purple-700 transition-colors inline-flex items-center gap-2"
                      >
                        {hotel.name}
                        <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-purple-700 inline" />
                      </a>
                    </h3>

                    <p className="text-stone-500 text-xs sm:text-sm flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-purple-600 shrink-0" />
                      {hotel.access}
                    </p>
                  </div>

                  {/* Hotel Image & Price Banner */}
                  <div className="relative rounded-2xl overflow-hidden aspect-video sm:aspect-21/9 bg-stone-100">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 right-3 bg-stone-900/85 backdrop-blur-xs text-white px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold shadow-md">
                      参考宿泊料金：<span className="text-purple-300 font-bold">{hotel.price}</span> / 名
                    </div>
                  </div>

                  {/* Editorial Story */}
                  <div className="space-y-3 bg-stone-50/70 rounded-2xl p-4 sm:p-5 border border-stone-200/60">
                    <h4 className="text-xs sm:text-sm font-bold text-purple-900 flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-purple-600" />
                      宿の魅力と冬の滞在ストーリー
                    </h4>
                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                      {hotel.story}
                    </p>
                  </div>

                  {/* Tips 2-col */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="bg-purple-50/30 border border-purple-100 rounded-xl p-3.5 space-y-1">
                      <span className="font-bold text-purple-900 flex items-center gap-1">
                        <ThermometerSun className="w-3.5 h-3.5 text-purple-700" /> おすすめの客室
                      </span>
                      <p className="text-stone-600 text-xs leading-relaxed">{hotel.roomTip}</p>
                    </div>
                    <div className="bg-purple-50/30 border border-purple-100 rounded-xl p-3.5 space-y-1">
                      <span className="font-bold text-purple-900 flex items-center gap-1">
                        <Utensils className="w-3.5 h-3.5 text-purple-700" /> 冬の自慢グルメ
                      </span>
                      <p className="text-stone-600 text-xs leading-relaxed">{hotel.gourmetTip}</p>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                      Key Highlights
                    </span>
                    <ul className="space-y-1.5">
                      {hotel.highlights.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200"
                    >
                      楽天トラベルで空室・冬の宿泊プランを確認する
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Tips Section */}
        <section className="bg-purple-50/60 rounded-3xl p-6 sm:p-10 border border-purple-200/60 space-y-6">
          <div className="border-b border-purple-200/80 pb-4">
            <span className="text-purple-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Traveler Tips</span>
            <h2 className="text-xl sm:text-2xl font-bold text-purple-950 font-serif">
              長谷寺冬牡丹＆大神神社・橿原神宮を快適に巡るための実践アドバイス
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-purple-950">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-purple-700" />
                長谷寺の399段登廊と歩きやすい履物
              </div>
              <p className="leading-relaxed text-stone-700">
                長谷寺の仁王門から本堂へと続く国宝・登廊は、段差が緩やかながら399段の石段が続きます。冬期は石段が冷たく湿っていることもあるため、滑りにくく歩きやすいスニーカーやウォーキングシューズが必須です。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-purple-700" />
                大和盆地の「底冷え」と防寒対策
              </div>
              <p className="leading-relaxed text-stone-700">
                奈良盆地は内陸特有の気候のため、12月〜1月の朝晩は足元からシンシンと冷え込みます。ヒートテックインナーや厚手の靴下、手袋、首元を温めるストールを用意して参拝に臨みましょう。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-purple-700" />
                大神神社の初詣混雑回避と電車移動
              </div>
              <p className="leading-relaxed text-stone-700">
                大神神社は正月三が日に周辺道路が激しく混雑します。JR桜井線（万葉まほろば線）の三輪駅を利用するか、近鉄桜井駅や大和八木駅周辺の宿を拠点にして公共交通機関で移動するのが最も確実です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-purple-600 pl-4">
            <span className="text-purple-700 font-bold text-xs uppercase tracking-wider block">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              長谷寺冬牡丹＆大神神社・大和牛グルメに関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-purple-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-purple-700 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    Q
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-3 pl-9">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links Section */}
        <section className="border-t border-stone-200 pt-10 space-y-6">
          <div className="space-y-1">
            <span className="text-purple-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              あわせて読みたい関西・全国の聖地・初詣・名湯特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-nara-dorogawa-onsen-snow-botannabe-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-purple-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-purple-700 font-bold text-xs block mb-1">奈良・洞川温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-purple-800 transition-colors line-clamp-2">
                ノスタルジックな行者宿の雪景色と名物極上ぼたん鍋名宿
              </span>
            </Link>

            <Link 
              href="/winter-wakayama-koyasan-shukubo-okunoin-snow-shojin-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-purple-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-purple-700 font-bold text-xs block mb-1">和歌山・高野山</span>
              <span className="text-stone-900 font-bold group-hover:text-purple-800 transition-colors line-clamp-2">
                世界遺産高野山の白銀壇上伽藍＆宿坊阿字観体験・精進料理名宿
              </span>
            </Link>

            <Link 
              href="/winter-mie-ise-jingu-hatsumode-okageyokocho-iseebi-matsusaka-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-purple-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-purple-700 font-bold text-xs block mb-1">三重・伊勢神宮</span>
              <span className="text-stone-900 font-bold group-hover:text-purple-800 transition-colors line-clamp-2">
                新春の伊勢神宮初詣とおかげ横丁・伊勢海老＆松阪牛会席名宿
              </span>
            </Link>

            <Link 
              href="/winter-kyoto-kifune-kurama-snow-lightup-botannabe-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-purple-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-purple-700 font-bold text-xs block mb-1">京都・貴船＆鞍馬</span>
              <span className="text-stone-900 font-bold group-hover:text-purple-800 transition-colors line-clamp-2">
                貴船神社積雪日限定ライトアップと本場ぼたん鍋名宿
              </span>
            </Link>

            <Link 
              href="/winter-shiga-omihachiman-hikone-snow-castle-omigyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-purple-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-purple-700 font-bold text-xs block mb-1">滋賀・近江八幡＆彦根</span>
              <span className="text-stone-900 font-bold group-hover:text-purple-800 transition-colors line-clamp-2">
                国宝彦根城雪景色と八幡堀水郷・極上近江牛すき焼き名宿
              </span>
            </Link>

            <Link 
              href="/winter-okayama-kurashiki-bikan-yakei-kibitsu-chiyagyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-purple-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-purple-700 font-bold text-xs block mb-1">岡山・倉敷＆吉備津</span>
              <span className="text-stone-900 font-bold group-hover:text-purple-800 transition-colors line-clamp-2">
                白壁倉敷美観地区冬夜景と吉備津神社初詣・千屋牛会席名宿
              </span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-nara-hasedera-winter-peony-oomiwa-yamatogyu-stay" />
</div>
        </section>
      </main>
    </article>
  );
}
