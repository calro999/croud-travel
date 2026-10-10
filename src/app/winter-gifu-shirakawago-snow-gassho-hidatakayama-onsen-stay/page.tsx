import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, Flame, Landmark, Snowflake, ShieldCheck, Mountain, TreePine, Footprints, Bus
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月岐阜：奥飛騨雪見露天と極上飛騨牛会席の！名宿5選',
  description: '冬の飛騨路は、日本の原風景が雪化粧に包まれる年間最高の旅情シーズン。世界遺産・白川郷合掌造り集落の白銀の絶景。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '白川郷 ホテル, 飛騨高山 旅館, 奥飛騨温泉郷 雪見露天風呂, 白川郷 ライトアップ, 飛騨牛 会席, 本陣平野屋 花兆庵, 深山桜庵, 高山グリーンホテル, 飛騨亭 花扇, 11月 12月 1月 岐阜 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-gifu-shirakawago-snow-gassho-hidatakayama-onsen-stay/"
  },
  openGraph: {
    title: '11・12・1月岐阜：奥飛騨雪見露天と極上飛騨牛会席の！名宿5選',
    description: '冬の飛騨路は、日本の原風景が雪化粧に包まれる年間最高の旅情シーズン。世界遺産・白川郷合掌造り集落の白銀の絶景。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-gifu-shirakawago-snow-gassho-hidatakayama-onsen-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/8327/8327.jpg",
      width: 1200,
      height: 630,
      alt: '冬の世界遺産白川郷合掌造り雪景色と奥飛騨雪見露天風呂'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月岐阜：世界遺産白川郷雪景色＆飛騨高山古い町並み！奥飛騨雪見露天と極上飛騨牛会席の名宿5選",
    description: "冬の飛騨路は、日本の原風景が雪化粧に包まれる年間最高の旅情シーズン。世界遺産・白川郷合掌造り集落の白銀の絶景、新酒の杉玉が掲げられる飛騨高山の風情ある「古い町並み」、そして奥飛騨温泉郷の原生林に抱かれた雪見露天風呂。とろける極上A5飛騨牛の炭火焼きや朴葉味噌とともに、冬の日本の美を極める旅へ。楽天APIから最新取得した本陣平野屋、深山桜庵など厳選宿5選を徹底特集します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/8327/8327.jpg"]
  }
};

export default function ShirakawagoHidaTakayamaWinterPage() {
  const hotelsData = [
            {
              id: 1,
              name: "飛騨高山　本陣平野屋　花兆庵",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8327/8327.jpg",
              rating: 4.89,
              reviews: 837,
              price: "¥30,360〜",
              access: "高山駅より徒歩10分　駅まで無料送迎：随時　車：東海北陸　高山ＩＣ～10分・中央道　松本ＩＣ～120分",
              special: "【高山陣屋】【古い町並】に最も近い宿。上質なおもてなしでさりげなく満たされる極上の時間をゆっくりと…",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8327%2F8327.html",
              story: "飛騨高山の観光の象徴「古い町並み」や「高山陣屋」まで徒歩わずか1分、宮川にかかる中橋のたもとに佇む最高峰の料亭旅館「飛騨高山 本陣平野屋 花兆庵」。女性の一人旅から記念日のご夫婦まで絶大な支持を誇る宿で、館内に足を踏み入れると畳敷きの温もりと格式ある飛騨の木工家具が出迎えます。客室は数寄屋造りの洗練された和室で、障子の向こうに冬の高山の静かな佇まいを感じられます。宿の真骨頂は、個室料亭でいただく夕食の飛騨牛づくし会席。料理長が選び抜いたA5等級の極上飛騨牛を、陶板焼きや握り寿司、冬ならではの小鍋仕立てで提供。細やかな専任客室係のおもてなしと、本陣大浴場や別館の展望露天風呂での湯巡りが、冬の飛騨ステイを至高の思い出にしてくれます。",
              roomTip: "特別室または次の間付和室。窓外に宮川の冬景色や高山陣屋前を望む。檜風呂付客室ではプライベートな湯浴みも満喫。",
              gourmetTip: "「飛騨牛づくし会席」。きめ細やかなサシが入ったA5ランク飛騨牛の石焼きステーキと、口の中でとろける飛騨牛炙り寿司。",
              highlights: [
                "古い町並み徒歩1分・宮川中橋すぐ・高山最高峰の料亭旅館で味わう個室飛騨牛会席",
                "専任客室係の細やかなおもてなし・本陣大浴場や別館展望風呂での温泉三昧",
                "高山陣屋前朝市へも至近・冬の古い町並み散策の拠点として最高峰の立地"
              ]
            },
            {
              id: 2,
              name: "匠の宿　深山桜庵（共立リゾート）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/65440/65440.jpg",
              rating: 4.27,
              reviews: 1767,
              price: "¥32,500〜",
              access: "■ＪＲ高山駅よりバスで約６０分「平湯温泉」下車、徒歩約７分　■長野道松本ICよりR158で約７０分。",
              special: "★2025年春リニューアル★北アルプスを望む露天風呂で湯浴みの休日★ご夕食は飛騨牛を堪能！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F65440%2F65440.html",
              story: "北アルプスの大自然に抱かれた奥飛騨温泉郷・平湯温泉に佇む、共立リゾート屈指の名旅館「匠の宿 深山桜庵」。標高約1,250mの高原に位置し、冬は一面の深いパウダースノーに包まれます。飛騨の古民家を移築・再生した重厚な梁や木組みが印象的な館内には、自家源泉から引く豊富な掛け流しの温泉が注がれています。冬のハイライトは何と言っても大露天風呂や趣の異なる貸切露天風呂。しんしんと降り積もる雪と、湯けむりの向こうにそびえる雪化粧の笠ヶ岳を眺めながらの雪見風呂はまさに極楽のひととき。夕食は囲炉裏を囲む食事処で、飛騨牛の炭火焼きと季節の郷土会席を堪能。湯上がり処の牛乳や夜鳴きそばの無料サービスも大好評です。",
              roomTip: "別館・抄月庵（温泉風呂付客室）。客室の内湯または半露天風呂に源泉が引かれ、白銀の原生林を眺めながら24時間好きな時に湯浴み。",
              gourmetTip: "食事処「遊食処 白樺」。炭火の網の上でじゅわっと脂が弾けるA5飛騨牛の炭火焼きと、飛騨名物の朴葉味噌焼き。",
              highlights: [
                "奥飛騨平湯温泉・標高1250mの雪見大露天風呂と無料貸切露天・囲炉裏炭火焼き",
                "源泉かけ流しの濃厚温泉・湯上がり牛乳＆夜鳴きそばサービス・古民家再生の美",
                "白川郷や新穂高ロープウェイ観光の拠点・奥飛騨の雪深さを五感で体感"
              ]
            },
            {
              id: 3,
              name: "ヒルトン高山リゾート（旧：ホテルアソシア高山リゾート）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13444/13444.jpg",
              rating: 4.43,
              reviews: 1867,
              price: "¥13,538〜",
              access: "JR高山駅より車で8分（無料シャトルバスあり※運行時刻はホテルへお問い合わせください）中部縦貫自動車道高山ICより10分",
              special: "雄大な北アルプスを望む露天風呂。ゆったりとした客室。最上のリラクセーションで皆様をお迎えいたします。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13444%2F13444.html",
              story: "高山市街を一望する高台に広がる北欧調の本格リゾートホテル「ヒルトン高山リゾート（旧：ホテルアソシア高山リゾート）。」。館内最上階エリアに設けられた展望温泉フロア「天望の湯」は飛騨随一のスケールを誇り、内湯やジャグジー、そして開放的な露天風呂からは、雪煙を上げる冬の北アルプス連峰と高山市街のパノラマが一望できます。特に朝風呂の時間帯、白銀の峰々が朝日に照らされて黄金色に染まる「モルゲンロート」の絶景は感動的。広々とした客室はモダンで機能的、冬の澄んだ大気を取り込む大きな窓が特徴です。和食・洋食のレストランや飛騨のお土産が揃うショップも充実し、世界基準の快適さで冬の飛騨を満喫できます。",
              roomTip: "パークウィング・パノラマビュールーム。高層階から冬の北アルプス冠雪山脈と高山盆地の大パノラマを絵画のように鑑賞。",
              gourmetTip: "日本料理「華雲」。飛騨牛のしゃぶしゃぶや会席料理。洋食レストラン「ロジェ・ダ・ムール」での冬のフレンチコースも選べます。",
              highlights: [
                "高台から北アルプス連峰を望む展望露天風呂「天望の湯」・世界基準の快適リゾート",
                "朝日に輝く白銀の山並みモルゲンロート・多彩な和洋レストランと快適な客室",
                "広々とした客室設計・冬の北アルプスドライブやバス旅行の安心拠点"
              ]
            },
            {
              id: 4,
              name: "飛騨高山温泉　高山グリーンホテル（京王グループホテルズ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8626/8626.jpg",
              rating: 4.57,
              reviews: 4733,
              price: "¥15,884〜",
              access: "ＪＲ高山駅（西口）より徒歩６分（送迎あり） ◇ 中部縦貫道 高山ＩＣから７分・長野自動車道 松本ＩＣから９０分",
              special: "好評！地産地消「高山ブッフェ」◆自家源泉「天領の湯」で温泉満喫！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8626%2F8626.html",
              story: "JR高山駅から無料シャトルバスで約3分、広大な敷地に日本庭園と飛騨最大級の物産館を擁する名門「飛騨高山温泉 高山グリーンホテル」。自慢の自家源泉温泉大浴場「本陣大浴場」は、庭園を囲むガラス張りの広々とした空間。庭園露天風呂に出ると、冬の雪吊りが施された木々と白銀の日本庭園がライトアップされ、幻想的な雪見風呂を心ゆくまで愉しめます。新館「桜凛閣」の客室は飛騨の伝統工芸や天然木を贅沢にあしらった和モダンな意匠。敷地内の「飛騨物産館」には7,000点以上のお土産や地酒が揃い、地酒の試飲や冬の特産品ショッピングを館内だけで楽しめます。多彩なレストランから飛騨牛料理や郷土料理を選べる点も魅力です。",
              roomTip: "桜凛閣・プレミアツイン。飛騨の木工家具と格子が美しい上質な和モダン空間。靴を脱いで寛げる素足の心地よさが好評。",
              gourmetTip: "ダイニング「Dining 穀雨」または郷土料理「白川郷」。炭火でじっくり焼き上げる飛騨牛ステーキや、冬の郷土鍋料理。",
              highlights: [
                "日本庭園雪見露天風呂・新館「桜凛閣」の和モダン客室・7000点揃う飛騨物産館併設",
                "自家源泉掛け流しの大浴場・多彩な郷土レストラン・高山駅無料送迎バス運行",
                "地酒の試飲コーナーやお土産選びが館内で完結・ファミリーやご夫婦にも最適"
              ]
            },
            {
              id: 5,
              name: "飛騨亭　花扇",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4711/4711.jpg",
              rating: 4.86,
              reviews: 659,
              price: "¥30,800〜",
              access: "ＪＲ高山駅より車で10分。東海北陸自動車道　高山ICより5分。長野自動車道　松本ICより90分。バス送迎有要予約。",
              special: "天然温泉で神代欅をあしらった落ち着きの有る和風旅館",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4711%2F4711.html",
              story: "高山市街の静かな川沿いに佇み、樹齢数百年の神代欅（じんだいけやき）や神代杉の銘木を惜しみなく用いて建てられた純和風旅館「飛騨亭 花扇」。館内は全館畳敷きで、冬でも素足で歩く心地よさに心がほどけます。宿の最大の自慢は、敷地内の自家源泉から湧き出る「美容液のようなトロトロの重曹泉」。肌にまとわりつくような極上の泉質で、露天風呂に浸かりながら冬の庭園の雪景色を眺めれば、体の芯まで温まりお肌もつるつるになります。夕食はプライベートが保たれた個室食事処で、最高等級A5ランクの飛騨牛を自家製タレで味わうステーキやしゃぶしゃぶ。木の温もりと本物の温泉、美食に癒やされる冬の隠れ宿です。",
              roomTip: "温泉露天風呂付客室。神代木の風情あるテラスに備わる専用露天風呂で、トロトロの名湯と降り積もる雪景色を心ゆくまで独占。",
              gourmetTip: "個室食事処での「極上飛騨牛会席」。最高ランクA5等級飛騨牛のステーキと、冬の飛騨蕎麦、地野菜を贅沢に取り入れた料理長特製膳。",
              highlights: [
                "神代欅の木組みが香る全館畳敷き・自家源泉トロトロ美肌温泉・個室で味わうA5飛騨牛",
                "客室専用温泉露天風呂プラン充実・木の温もりに包まれる冬の極上プライベートステイ",
                "口コミ高評価4.8点台の超名宿・極上飛騨牛ステーキと地野菜の絶品会席料理"
              ]
            }
  ];

  const faqData = [
  {
    "q": "白川郷の雪景色や合掌造り集落の見頃時期とライトアップについて教えてください。",
    "a": "白川郷の雪景色は、例年12月中旬頃から雪が積もり始め、1月〜2月にかけて豪雪のピークを迎えます。茅葺き屋根の上に数十センチ〜1メートル以上の純白の雪がこんもりと積もる姿は、まさに日本の昔話の世界です。また、1月中旬〜2月中旬にかけて完全予約制で開催される「白川郷ライトアップ」は、集落全体が温かなオレンジ色の光で照らし出され幻想的な光景が広がります。展望台への立ち入りや駐車場利用には事前予約・チケットが必須となりますのでご注意ください。"
  },
  {
    "q": "冬の高山から白川郷へのアクセス方法と濃飛バスの利用方法は？",
    "a": "JR高山駅前の「高山濃飛バスターミナル」から、白川郷行きの高速バス（濃飛バス・北陸鉄道バス等）が毎日定期運行しています。所要時間は高速道路（東海北陸道）を経由して約50分です。冬期は路面凍結や積雪が多いため、レンタカーよりも定期高速バスの利用が圧倒的に安全で確実です。午前便や週末便は満席になりやすいため、濃飛バスの公式予約サイト等で事前の座席予約をおすすめします。"
  },
  {
    "q": "冬の飛騨高山・古い町並みの見どころと酒蔵巡り（杉玉と新酒）の楽しみ方は？",
    "a": "国の重要伝統的建造物群保存地区に選定されている上三之町・上二之町などの「古い町並み」は、格子戸が連なる町家に雪が積もる冬こそ最も風情が増します。特に11月下旬〜1月は新酒の仕込み時期にあたり、酒蔵の軒先に青々とした新しい「杉玉（酒林）」が掲げられます。「船坂酒造店」「舩坂酒造」「原田酒造場」などの老舗蔵元では、コイン式サーバーや店頭で出来立ての新酒しぼりたて地酒の試飲が楽しめます。また、焼き立てのみたらし団子や飛騨牛にぎり寿司の食べ歩きも冬の名物です。"
  },
  {
    "q": "冬の飛騨（高山・白川郷・奥飛騨）を訪れる際の服装・靴・防寒対策は？",
    "a": "飛騨地方は標高が高く、12月〜1月の気温は氷点下（マイナス5度〜マイナス10度近く）まで冷え込みます。しっかりとした防寒ダウンジャケット、裏起毛のインナー、マフラー、耳当て付きニット帽、厚手の手袋が必須です。特に白川郷や古い町並みは雪道や圧雪路、凍結路を歩くため、防水機能と深い溝の滑り止めがついたスノーブーツ（防寒靴）を必ず履いてください。使い捨てカイロを手足やポケットに複数用意しておくと安心です。"
  },
  {
    "q": "白川郷と飛騨高山、奥飛騨温泉郷を巡る1泊2日の王道モデルコースは？",
    "a": "1日目の午前に高山駅に到着後、古い町並みや高山陣屋を散策し、ランチに本場の高山ラーメンや飛騨牛串焼きを堪能。午後の濃飛バスで白川郷へ移動し、荻町城跡展望台や和田家を見学して夕方に高山または奥飛騨温泉郷へ宿泊。宿で雪見露天風呂と極上飛騨牛の夕食を満喫。2日目は午前中に宮川朝市で地元のおばあちゃん達と触れ合いながら赤かぶ漬けなどのお土産を購入し、奥飛騨の新穂高ロープウェイで白銀の北アルプス大パノラマを展望して帰路につくコースが冬の王道ルートです。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-gifu-shirakawago-snow-gassho-hidatakayama-onsen-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-gifu-shirakawago-snow-gassho-hidatakayama-onsen-stay"
        },
        "headline": "【11・12・1月岐阜】世界遺産白川郷雪景色＆飛騨高山古い町並み！奥飛騨雪見露天と極上飛騨牛会席の名宿5選",
        "description": "冬の飛騨路は、日本の原風景が雪化粧に包まれる年間最高の旅情シーズン。世界遺産・白川郷合掌造り集落の白銀の絶景、新酒の杉玉が掲げられる飛騨高山の風情ある「古い町並み」、そして奥飛騨温泉郷の原生林に抱かれた雪見露天風呂。とろける極上A5飛騨牛の炭火焼きや朴葉味噌とともに、冬の日本の美を極める旅へ。楽天APIから最新取得した本陣平野屋、深山桜庵など厳選宿5選を徹底特集します。",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
        "inLanguage": "ja",
        "publisher": {
          "@type": "Organization",
          "name": "地域の宿探訪",
          "url": "https://croud-travel.pages.dev"
        }
      },
      {
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
            "name": "白川郷・飛騨高山 冬特集",
            "item": "https://croud-travel.pages.dev/winter-gifu-shirakawago-snow-gassho-hidatakayama-onsen-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map((f: any) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  };


  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-amber-500 selection:text-white pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <header className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-amber-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-400 via-emerald-600 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
            <Snowflake className="w-4 h-4 text-cyan-300" />
            <span>11月・12月・1月冬の飛騨路絶景特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-6">世界遺産白川郷雪景色＆飛騨高山古い町並み！<br className="hidden sm:inline" /> 奥飛騨雪見露天と極上飛騨牛会席の名宿5選</h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            初雪が舞い始める11月下旬から純白の豪雪に包まれる1月にかけて、飛騨路は日本昔話のような白銀の絶景が広がります。世界文化遺産・白川郷合掌造り集落の静寂、新酒の杉玉が青々と掲げられる飛騨高山の風情ある古い町並み、そして北アルプスの原生林に抱かれた奥飛騨温泉郷の雪見露天風呂。とろける最高峰A5飛騨牛の炭火焼きとともに味わう、日本の原風景への贅沢な旅へご案内します。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-200 border-t border-slate-700/60 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
              <span>雪景色：12月中旬〜1月下旬</span>
            </div>
            <div className="flex items-center gap-2">
              <Landmark className="w-4 h-4 text-amber-400 shrink-0" />
              <span>世界遺産・白川郷合掌集落</span>
            </div>
            <div className="flex items-center gap-2">
              <Waves className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>奥飛騨の原生林雪見露天</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-amber-400 shrink-0" />
              <span>極上A5飛騨牛＆新酒地酒</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Section 1: エリア解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Alpine Heritage Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Mountain className="w-6 h-6 text-amber-500 shrink-0" />
              白銀の白川郷と飛騨高山・奥飛騨温泉郷が織りなす冬の幽玄美
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              岐阜県の北部に広がる飛騨地方。3,000m級の北アルプス連峰に囲まれたこの地は、冬を迎えると一面の銀世界へと姿を変えます。1995年にユネスコ世界文化遺産に登録された「白川郷・荻町合掌造り集落」は、急勾配の茅葺き屋根に純白の雪が降り積もり、青空や夕暮れの雪原に浮かび上がる光景は息を呑むほどの美しさです。国指定重要文化財の「和田家」や「神田家」の囲炉裏の煙、荻町城跡展望台から見渡す集落の全景は、日本の原風景そのものです。
            </p>
            <p>
              白川郷から車や高速バスで約50分の「飛騨高山」は、江戸時代の城下町・商人の町の面影を今に伝える「古い町並み（上三之町・上二之町）」が最大の魅力。冬になると黒塗りの出格子の町家に雪が薄っすらと積もり、しっとりとした情緒を醸し出します。特に11月下旬から1月にかけては、老舗の蔵元で新酒が仕込まれる季節。軒先には鮮やかな緑色の「杉玉（酒林）」が掲げられ、香ばしい酒粕の香りと絞りたての新酒の試飲が旅人を迎えます。
            </p>
            <p>
              そして旅の疲れを極上の温もりで癒やしてくれるのが「奥飛騨温泉郷（平湯、福地、新平湯、栃尾、新穂高）。」です。標高1,000mを超える高地に位置し、日本屈指の豊富な湯量を誇る天然温泉が湧き出しています。氷点下に冷え込む冬の夜、原生林に囲まれた大露天風呂に身を沈め、舞い散る粉雪と立ち上る湯けむりの向こうに雪山を望む「雪見露天風呂」は、まさに温泉好きの憧れの極致。きめ細やかなサシが入った極上A5等級の飛騨牛を朴葉味噌や炭火でじっくりと焼き上げ、冬の地酒とともに味わう贅沢は、他の追随を許さない飛騨路の真髄です。
            </p>
            <p>
              白川郷の合掌造り家屋は、豪雪の重みに耐えるため約60度という急勾配の茅葺き屋根を持ち、釘を一本も使わずに縄とネソ（マンサクの若木）で組み上げられています。かつて養蚕を営むために3〜4階建ての広大な屋根裏空間が作られ、集落の人々が総出で屋根の葺き替えを行う「結（ゆい）」と呼ばれる相互扶助の絆が今なお息づいています。白銀の雪景色の奥に宿る、過酷な自然と共生してきた人々の温かな歴史が、訪れる旅人の心を強く打ちます。
            </p>
            <p>
              さらに足を延ばせば、日本唯一の2階建てゴンドラが運行する「新穂高ロープウェイ」へ。標高2,156mの西穂高口駅展望台からは、槍ヶ岳や笠ヶ岳、西穂高岳など北アルプスの白銀の巨峰群が360度の大パノラマで迫り、樹氷が白く輝く「雪の回廊」の散策も冬限定の息を呑む絶景体験です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-amber-600" />
                <span>世界遺産・白川郷合掌造り</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                茅葺き屋根にこんもりと積もる純白の雪と展望台からのパノラマ。日本の昔話の世界に迷い込んだかのような圧倒的冬景色。
              </p>
            </div>
            <div className="bg-emerald-50/60 rounded-xl p-5 border border-emerald-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Building className="w-5 h-5 text-emerald-600" />
                <span>高山古い町並み＆新酒蔵巡り</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                出格子が連なる古い町並みに掲げられる青い杉玉。老舗酒蔵での新酒しぼりたて試飲や宮川朝市の温かな交流。
              </p>
            </div>
            <div className="bg-cyan-50/60 rounded-xl p-5 border border-cyan-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Waves className="w-5 h-5 text-cyan-600" />
                <span>奥飛騨の雄大雪見露天</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                標高1,000m超の白銀の山々に抱かれた源泉掛け流しの名湯。冷え切った体を芯から温める極上の雪見風呂体験。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: 厳選ホテル紹介 */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-wider uppercase">Masterpiece Ryokan</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              白川郷＆飛騨高山・奥飛騨で冬を極める名宿5選
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              楽天トラベルAPIより最新の空室・料金・口コミデータをリアルタイム取得。冬の飛騨旅行を極上の美食と温泉で彩る名宿を厳選しました。
            </p>
          </div>

          <div className="space-y-12">
            {hotelsData.map((h: any) => (
              <div key={h.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow">
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Hotel Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-100 pb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
                          厳選宿 #{h.id}
                        </span>
                        <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-amber-600" />
                          {h.access}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-amber-600 transition-colors">
                        <a href={h.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                          {h.name}
                          <ExternalLink className="w-4 h-4 text-slate-400" />
                        </a>
                      </h3>
                      <p className="text-xs sm:text-sm text-amber-700 font-medium">{h.special}</p>
                    </div>

                    <div className="flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center shrink-0 bg-slate-50 sm:bg-transparent p-3 sm:p-0 rounded-xl">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="text-base sm:text-lg font-extrabold text-slate-900">{h.rating}</span>
                        <span className="text-xs text-slate-500">（{h.reviews}件）</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-500 block">参考宿泊料金（目安）</span>
                        <span className="text-lg sm:text-xl font-bold text-rose-600">{h.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hotel Image and Story Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-5 relative group overflow-hidden rounded-xl bg-slate-100 min-h-[240px]">
                      <img 
                        src={h.img} 
                        alt={h.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    <div className="lg:col-span-7 space-y-4 text-slate-600 text-sm leading-relaxed">
                      <p>{h.story}</p>
                      
                      <div className="bg-slate-50 rounded-xl p-4 space-y-2 border border-slate-150">
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-amber-600" />
                          <span>おすすめ客室：</span>
                          <span className="font-normal text-slate-700">{h.roomTip}</span>
                        </div>
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <Utensils className="w-4 h-4 text-rose-600" />
                          <span>冬の絶品美食：</span>
                          <span className="font-normal text-slate-700">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="border-t border-slate-100 pt-5">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">この宿の注目ポイント</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      {h.highlights.map((hl: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-1.5 text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2 text-right">
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-sm hover:shadow transition-all w-full sm:w-auto"
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

        {/* Section 3: 黄金のモデルコース */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-6 h-6 text-amber-500 shrink-0" />
              1泊2日！冬の白川郷合掌集落＆高山古い町並み・雪見温泉 満喫モデルコース
            </h2>
          </div>

          <div className="relative border-l-2 border-amber-200 ml-4 pl-6 space-y-8 my-4">
            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-amber-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">1日目 10:30</span>
              <h3 className="text-base font-bold text-slate-900">JR高山駅到着・古い町並み散策＆熱々みたらし団子</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                JR特急ひだ号で高山駅へ到着。荷物を宿に預け、上三之町へ。格子戸に積もる雪景色を眺めながら、香ばしい醤油だれのみたらし団子を頬張ります。
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-amber-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">1日目 11:45</span>
              <h3 className="text-base font-bold text-slate-900">老舗蔵元での新酒試飲＆極上飛騨牛にぎり寿司ランチ</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                青い杉玉が掲げられた酒蔵で搾りたての新酒地酒を試飲。煎餅のお皿に乗った口溶け豊かなA5飛騨牛のにぎり寿司と高山中華そばを堪能。
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-amber-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">1日目 13:20</span>
              <h3 className="text-base font-bold text-slate-900">濃飛高速バスで白川郷へ移動（約50分）</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                高山濃飛バスターミナルから予約制の高速バスに乗車。白銀の山あいを抜けて世界文化遺産・白川郷合掌造り集落へ直行。
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-amber-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">1日目 14:30</span>
              <h3 className="text-base font-bold text-slate-900">荻町城跡展望台から白銀の合掌集落パノラマ＆和田家見学</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                シャトルバスまたは徒歩で展望台へ登り、絵画のような合掌造りの雪景色を一望。重文・和田家で囲炉裏の温もりに触れます。
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-amber-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">1日目 17:30</span>
              <h3 className="text-base font-bold text-slate-900">宿にチェックイン・至福の雪見露天風呂と飛騨牛会席</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                高山または奥飛騨の宿へ戻り、粉雪が舞う露天風呂に浸かって芯からポカポカに。夕食はとろけるA5飛騨牛ステーキや朴葉味噌焼きに舌鼓。
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-amber-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">2日目 08:30</span>
              <h3 className="text-base font-bold text-slate-900">宮川沿いの「宮川朝市」で地元のおばあちゃんとふれあい</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                日本三大朝市の一つ、宮川朝市へ。白い息を吐きながら、手作りの赤かぶ漬け、林檎、朴葉味噌、温かい甘酒を買い求めます。
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-amber-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">2日目 10:30</span>
              <h3 className="text-base font-bold text-slate-900">高山陣屋を見学・歴史の威厳に浸る</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                日本で唯一現存する江戸幕府の代官・郡代役所である高山陣屋を見学。広大な大広間や白州、雪景色に映える中庭の風情を鑑賞。
              </p>
            </div>

            <div className="relative space-y-1">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-amber-600 border-4 border-white shadow-sm" />
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">2日目 13:00</span>
              <h3 className="text-base font-bold text-slate-900">飛騨木工の工芸品選びとお土産購入・高山駅から帰路へ</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                飛騨の匠の技が息づく一位一刀彫や木製食器、銘酒をお土産に購入し、大満足の笑顔で特急ひだ号に乗り込みます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: 実用ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Travel Advice</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-amber-500 shrink-0" />
              冬の飛騨路旅行！防寒具・スノーブーツ・雪道交通の注意点
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600">
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Footprints className="w-5 h-5 text-amber-600" />
                防寒着と滑り止めスノーブーツの準備
              </h3>
              <p className="leading-relaxed">
                白川郷や奥飛騨は豪雪地帯であり、12月〜1月の最低気温は氷点下8度以下に達することも珍しくありません。風を通さない本格的な厚手ダウンジャケット、ヒートテック、ニット帽、マフラー、手袋は必携です。
              </p>
              <p className="leading-relaxed">
                最も大切なのは足元です。白川郷の未舗装の雪道や展望台のスロープ、古い町並みの石畳は圧雪や凍結で非常に滑りやすくなります。必ず底に深い溝がある防寒スノーブーツを着用してください。
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Bus className="w-5 h-5 text-amber-600" />
                レンタカー運転を避け高速バスを活用する
              </h3>
              <p className="leading-relaxed">
                冬期（12月〜3月）の飛騨路は豪雪と路面凍結が日常茶飯事です。東海北陸自動車道や国道158号線、平湯峠周辺はチェーン規制やスリップ事故が多発するため、冬道運転に極めて熟練していない限りレンタカーは危険です。
              </p>
              <p className="leading-relaxed">
                高山駅と白川郷、奥飛騨温泉郷を結ぶ「濃飛バス」は熟練プロドライバーが安全に運行しており、定期便も充実しています。事前予約をして高速バスを活用するのが最も安心で確実な選択肢です。
              </p>
            </div>

            <div className="space-y-3 md:col-span-2 bg-slate-50 p-4 rounded-xl border border-slate-150">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
                氷点下でのカメラ・スマホのバッテリー管理と集落マナー
              </h3>
              <p className="leading-relaxed">
                氷点下の寒冷地では、スマートフォンやデジタルカメラのリチウムイオンバッテリーが急激に電圧低下を起こし、突然シャットダウンすることがあります。予備バッテリーを衣服の内ポケットなど体温で温まる場所に保管し、使用直前に装着するのが鉄則です。また、白川郷の合掌造り集落は木造と茅葺きの極めて火気に弱い世界遺産であり、住民の方々が実際に日常生活を営んでいる集落です。指定場所以外での喫煙は厳禁であり、私有地（田畑や住居の庭）への立ち入り禁止を固く遵守してください。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: よくある質問 FAQ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-amber-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の白川郷・飛騨高山観光 よくある質問
            </h2>
          </div>

          <div className="divide-y divide-slate-100 space-y-4">
            {faqData.map((item: any, idx: number) => (
              <div key={idx} className="pt-4 first:pt-0 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded-md shrink-0 font-extrabold mt-0.5">Q</span>
                  <span>{item.q}</span>
                </h3>
                <div className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: 関連内部リンク */}
        <section className="bg-gradient-to-br from-slate-950 to-amber-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            あわせて読みたい！冬の人気特集記事
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            当サイトでは、全国の冬の温泉・雪景色・グルメ・初詣を徹底特集しています。冬の旅行計画にお役立てください。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <Link 
              href="/winter-gifu-gero-onsen-hidagyu-bihada-hanabi-stay" 
              className="bg-white/10 hover:bg-white/20 p-3.5 rounded-xl border border-white/10 transition-colors text-xs sm:text-sm font-medium flex items-center justify-between"
            >
              <span>下呂温泉花火物語＆美肌の湯！飛騨牛と冬の温泉街名宿</span>
              <span className="text-amber-300">→</span>
            </Link>
            <Link 
              href="/winter-ishikawa-kanazawa-city-kenrokuen-yukizuri-koubako-crab-stay" 
              className="bg-white/10 hover:bg-white/20 p-3.5 rounded-xl border border-white/10 transition-colors text-xs sm:text-sm font-medium flex items-center justify-between"
            >
              <span>金沢兼六園雪吊り＆香箱ガニ！冬の加賀百万石グルメ宿</span>
              <span className="text-amber-300">→</span>
            </Link>
            <Link 
              href="/winter-nagano-hakuba-onsen-powder-snow-alps-shinshu-beef-stay" 
              className="bg-white/10 hover:bg-white/20 p-3.5 rounded-xl border border-white/10 transition-colors text-xs sm:text-sm font-medium flex items-center justify-between"
            >
              <span>白馬パウダースノー＆美肌温泉！北アルプス雪景色と信州牛宿</span>
              <span className="text-amber-300">→</span>
            </Link>
            <Link 
              href="/winter-toyama-amaharashi-shinminato-tateyama-crab-stay" 
              className="bg-white/10 hover:bg-white/20 p-3.5 rounded-xl border border-white/10 transition-colors text-xs sm:text-sm font-medium flex items-center justify-between"
            >
              <span>雨晴海岸から望む立山連峰＆新湊カニ！富山湾冬の絶景名宿</span>
              <span className="text-amber-300">→</span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-gifu-shirakawago-snow-gassho-hidatakayama-onsen-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
