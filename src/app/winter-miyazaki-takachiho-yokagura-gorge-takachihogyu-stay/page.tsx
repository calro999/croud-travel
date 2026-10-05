import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Fish, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Snowflake, Sparkle, Map
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月宮崎・神話の里高千穂の冬の夜神楽と真名井の滝】名物A5高千穂牛ステーキ＆かっぽ鶏・竹筒かっぽ酒を味わうパワースポット名宿5選",
  description: "11月中旬から翌年2月にかけて、日本神話「天孫降臨」の舞台である宮崎県高千穂町では、国の重要無形民俗文化財である冬の風物詩「高千穂の夜神楽（よかぐら）」が奉納され、神々の息吹が町全体を包み込みます。初冬の凛とした冷気の中でエメラルドグリーンに澄み渡る高千穂峡・真名井の滝や、天照大神がお隠れになった天安河原の神秘的な佇まい。夕食には日本一の和牛宮崎牛の中でも最高峰と称される「極上A5ランク高千穂牛ステーキ」や、竹筒で地鶏と野菜を蒸し焼きにする「かっぽ鶏」、青竹で燗をつける伝統の「かっぽ酒」。神話の里で心身を清め、至福の美食と温泉に浸る厳選名宿5選を徹底解説します。",
  keywords: '高千穂 宿泊, 旅館神仙, 離れの宿神隠れ, ホテル高千穂, ソレスト高千穂ホテル, 旅館大和屋, 高千穂の夜神楽, 高千穂峡 真名井の滝, 高千穂牛, かっぽ鶏, かっぽ酒, 11月 12月 高千穂',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-miyazaki-takachiho-yokagura-gorge-takachihogyu-stay/"
  },
  openGraph: {
    title: "【11・12月宮崎・神話の里高千穂の冬の夜神楽と真名井の滝】名物A5高千穂牛ステーキ＆かっぽ鶏・竹筒かっぽ酒を味わうパワースポット名宿5選",
    description: "11月中旬から翌年2月にかけて、日本神話「天孫降臨」の舞台である宮崎県高千穂町では、国の重要無形民俗文化財である冬の風物詩「高千穂の夜神楽（よかぐら）」が奉納され、神々の息吹が町全体を包み込みます。初冬の凛とした冷気の中でエメラルドグリーンに澄み渡る高千穂峡・真名井の滝や、天照大神がお隠れになった天安河原の神秘的な佇まい。夕食には日本一の和牛宮崎牛の中でも最高峰と称される「極上A5ランク高千穂牛ステーキ」や、竹筒で地鶏と野菜を蒸し焼きにする「かっぽ鶏」、青竹で燗をつける伝統の「かっぽ酒」。神話の里で心身を清め、至福の美食と温泉に浸る厳選名宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-miyazaki-takachiho-yokagura-gorge-takachihogyu-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '神話の里高千穂の冬の夜神楽と真名井の滝名宿'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月宮崎・神話の里高千穂の冬の夜神楽と真名井の滝】名物A5高千穂牛ステーキ＆かっぽ鶏・竹筒かっぽ酒を味わうパワースポット名宿5選",
    description: "11月中旬から翌年2月にかけて、日本神話「天孫降臨」の舞台である宮崎県高千穂町では、国の重要無形民俗文化財である冬の風物詩「高千穂の夜神楽（よかぐら）」が奉納され、神々の息吹が町全体を包み込みます。初冬の凛とした冷気の中でエメラルドグリーンに澄み渡る高千穂峡・真名井の滝や、天照大神がお隠れになった天安河原の神秘的な佇まい。夕食には日本一の和牛宮崎牛の中でも最高峰と称される「極上A5ランク高千穂牛ステーキ」や、竹筒で地鶏と野菜を蒸し焼きにする「かっぽ鶏」、青竹で燗をつける伝統の「かっぽ酒」。神話の里で心身を清め、至福の美食と温泉に浸る厳選名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function WinterMiyazakiTakachihoPage() {
  const hotels = [
            {
              id: 1,
              name: "高千穂　旅館　神仙",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30082/30082.jpg",
              rating: 4.80,
              reviews: 245,
              price: "¥49,500〜",
              access: "高千穂バスセンターよりタクシーで５分／九州自動車道　松橋ＩＣより車で約１００分",
              special: "＜クチコミ総合4.8＞最高の心のおもてなしと至福のひと時",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30082%2F30082.html",
              story: "神々の住まう里・高千穂に佇み、全国の名だたる美食家や要人がお忍びで訪れる最高峰の料亭旅館「高千穂 旅館 神仙」。端正な日本庭園を囲むように配された館内には、心地よいお香の香りが漂い、数寄屋造りの贅を尽くした空間が広がります。全客室には総檜造りの内風呂や半露天風呂が備えられ、プライベートな静寂の中で心身を解きほぐす湯浴みが叶います。夕食は全国和牛能力共進会で最高賞を受賞し続ける宮崎牛の頂点「高千穂牛」を主役に据えた京風懐石。A5ランクのサーロインやフィレ肉を炭火で絶妙に焼き上げ、地元高千穂の清流で育った川魚、山里の恵みとともに、器や盛り付けの細部にまで美意識を宿した至高のコースが供されます。女将や仲居の温かく極上の所作とおもてなしは、一生の思い出に残る格別な宿泊体験を約束します。",
              roomTip: "離れ・神仙スイート（または本館露天風呂付き客室）。手入れの行き届いたプライベート日本庭園を眺め、総檜風呂で極上の寛ぎを堪能できる最高峰の和室空間。",
              gourmetTip: "「料亭旅館の至高懐石・A5高千穂牛炭火焼き」。極上A5高千穂牛の炭火ステーキ、高千穂清流山女魚の塩焼き、旬の山菜と地野菜の焚き合わせ、高千穂産新米コシヒカリ。",
              highlights: [
                "全国屈指の格式誇る最高峰料亭旅館＆全室総檜内風呂と神仙庭園・至高の京風高千穂牛懐石",
                "炭火で焼く極上A5高千穂牛サーロインと清流山女魚＆五感震わす繊細な器と料理の美",
                "皇族や要人も利用する最高級ホスピタリティ＆特別な記念日や人生の節目を彩る贅沢ステイ"
              ]
            },
            {
              id: 2,
              name: "高千穂　離れの宿　神隠れ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/146124/146124.jpg",
              rating: 4.78,
              reviews: 233,
              price: "¥29,700〜",
              access: "延岡駅より車にて約5０分",
              special: "【総合★4.8】華鳥風月を映した和モダン客室と、高千穂の旬食材を堪能できる特別な宿で心安らぐ時間を。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F146124%2F146124.html",
              story: "高千穂神社からほど近い御神木の森の懐に抱かれ、全8室すべてが趣の異なる離れ形式の隠れ宿「高千穂 離れの宿 神隠れ」。宿の敷地内には樹齢数百年の木々が静かにそびえ、鳥のさえずりと風の音だけが響く大人のためのプライベート空間が広がります。すべての離れには、木や石を贅沢にあしらった専用風呂が完備され、初冬の澄んだ冷気を感じながらいつでも好きな時に至福の湯浴みが楽しめます。夕食は個室食事処でいただく創作郷土会席。とろけるような肉質のA5ランク高千穂牛の陶板焼きをはじめ、宮崎の伝統郷土料理である「かっぽ鶏（青竹の筒で地鶏と椎茸を蒸し焼きにした料理）」や、竹筒で燗をつけた「かっぽ酒」など、神話の里ならではの野趣と洗練が調和した美食の数々に酔いしれます。",
              roomTip: "離れ和洋室「神仙の森側客室」。専用の檜風呂または御影石風呂を備え、畳の落ち着きとベッドの快適性が融合した二人旅に最適なプライベート離れ。",
              gourmetTip: "「神隠れ特選創作会席＆元祖かっぽ鶏」。とろけるA5高千穂牛の陶板焼き、青竹の香りが染みわたる名物かっぽ鶏、ヤマメの幽庵焼き、竹筒で温める熱々のかっぽ酒。",
              highlights: [
                "御神木の森に抱かれる全8室完全離れの隠れ家＆木と石の専用風呂とA5高千穂牛創作会席",
                "香ばしい青竹のかっぽ鶏とA5高千穂牛陶板焼き＆竹筒で温める熱々のかっぽ酒",
                "大人のための静謐なプライベート空間＆神話の里の静けさに包まれる極上のご褒美旅"
              ]
            },
            {
              id: 3,
              name: "ホテル高千穂",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67935/67935.jpg",
              rating: 4.43,
              reviews: 809,
              price: "¥10,500〜",
              access: "熊本ICから南阿蘇経由で１時間半。阿蘇～高千穂周遊もおすすめ！延岡ICから４５分　高千穂峡から徒歩13分",
              special: "つい、大自然に声をかけたくなるホテル♪　ひとり旅の女性やお子様連れのご家族も安心して御宿泊できます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67935%2F67935.html",
              story: "高千穂神社まで徒歩約5分という絶好のロケーションに建ち、冬の風物詩である「高千穂の夜神楽（観光夜神楽）」拝観の拠点として圧倒的な利便性を誇る「ホテル高千穂」。高千穂峡を見下ろす高台に位置し、初冬の澄み切った朝には深山を覆う朝霧や幻想的な峡谷美を望むことができます。広々とした大浴場には人工温泉（トゴール鉱石温泉）が導入され、高千穂散策や冷え込む夜神楽鑑賞で冷えた身体を芯からポカポカに温めてくれます。夕食は高千穂の郷土色豊かな和食会席。メインにはきめ細やかなサシが美しい高千穂牛のすき焼き小鍋や陶板焼きが供され、地元特産の椎茸や旬の根菜、宮崎県産米のふっくらご飯とともに心温まる滋味を満喫できます。夜の神楽拝観への送迎や案内など細やかな気配りも評判の宿です。",
              roomTip: "高千穂峡側和室（または洋室ツイン）。窓から雄大な深山の山並みを見渡し、畳の上で足を伸ばしてのんびりと寛げる落ち着いたお部屋。",
              gourmetTip: "「高千穂美味会席・高千穂牛すき焼き膳」。上質な霜降りの高千穂牛すき焼き小鍋、清流鮎の塩焼き、高千穂産原木椎茸の天ぷら、郷土の小鉢料理、高千穂銘酒の晩酌。",
              highlights: [
                "高千穂神社徒歩5分・夜神楽鑑賞拠点に抜群＆高千穂峡見下ろす展望大浴場と高千穂牛すき焼き",
                "霜降り高千穂牛すき焼き小鍋と清流鮎塩焼き＆高千穂産原木椎茸と郷土小鉢の滋味",
                "高千穂観光夜神楽の送迎・案内完備＆一人旅から夫婦・グループまで安心の充実設備"
              ]
            },
            {
              id: 4,
              name: "ソレスト高千穂ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/165619/165619.jpg",
              rating: 4.04,
              reviews: 312,
              price: "¥14,160〜",
              access: "■高千穂神社まで徒歩約5分。高千穂バスセンターより徒歩約8分。延岡駅よりお車にて約１時間",
              special: "高千穂の山々に囲まれた自然なエッセンスを取り入れお客様へ上質なくつろぎの空間をご提供致します。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165619%2F165619.html",
              story: "高千穂神社の参道近く、神話の里の街並みに美しく溶け込む洗練されたデザイナーズホテル「ソレスト高千穂ホテル」。館内は白と木目を基調としたモダンで開放的な吹き抜けロビーが広がり、現代的な快適性と神話の厳かさが調和した心地よい空間が出迎えてくれます。客室は全室シモンズ社製ベッドを完備し、旅の疲れを深く癒す快眠環境を追求。夕食は館内レストランでのディナービュッフェ、または厳選された食材で仕立てる和洋コース。地元高千穂産の新鮮野菜や宮崎県産ブランドポーク、高千穂牛を取り入れたシェフこだわりの料理をカジュアルかつスマートに楽しめます。夜神楽へのアクセスも徒歩数分と抜群で、一人旅からカップル、女子旅まで幅広く支持されています。",
              roomTip: "モデレートツイン（またはデラックスツイン）。大きな窓から高千穂の山並みを望み、高品質なベッドと広々としたバスルームを備えたスタイリッシュな空間。",
              gourmetTip: "「シェフ特製ディナー＆高千穂牛ステーキ」。地元契約農家の冬野菜サラダ、宮崎県産食材の彩り前菜、絶妙な火入れの特選高千穂牛ステーキ、パティシエ特製デザート。",
              highlights: [
                "スタイリッシュなモダンデザイン＆全室シモンズベッドと地元食材ディナービュッフェ",
                "高千穂牛ステーキと契約農家の冬野菜＆彩り豊かな創作ディナーコースとワイン",
                "参道徒歩圏の好立地と洗練された居心地＆女子旅やカップル旅行に人気のモダンホテル"
              ]
            },
            {
              id: 5,
              name: "旅館　大和屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14067/14067.jpg",
              rating: 4.31,
              reviews: 372,
              price: "¥19,800〜",
              access: "高千穂バスセンターより徒歩５分　延岡駅より車で１時間（２１８号経由）　熊本空港より車で１時間半（５７～３２５号線経由）",
              special: "高千穂神社まで徒歩10分　約105年続く田舎料理が自慢のお宿です",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14067%2F14067.html",
              story: "高千穂神社の参道から徒歩約10分、高千穂の地で100年以上にわたり旅人を迎え続けてきた温かな歴史の湯宿「旅館 大和屋」。家族経営ならではの真心こもったおもてなしと、女将の手作りにこだわる本格郷土料理が、全国のリピーターを惹きつけてやみません。館内にはアットホームな昭和の落ち着きが漂い、旅の緊張を優しく解きほぐしてくれます。夕食は創業以来守り継がれる「元祖かっぽ料理」。青竹の筒に地鶏と野菜を詰め込んで直火で豪快に焼き上げるかっぽ鶏は、竹の天然エキスと鶏の旨味が凝縮した唯一無二の絶品。さらに青竹に注いだ地酒を炭火にかざして温める「かっぽ酒」を竹のお猪口で傾ければ、竹の爽やかな香りと酒の芳醇な旨味が口中に広がり、夜神楽へと向かう夜を最高に演出してくれます。",
              roomTip: "純和風本館和室。木の温もりを感じるどこか懐かしい畳のお部屋で、静寂の中で旅の風情を味わいながらゆっくりと休息できる心温まる空間。",
              gourmetTip: "「元祖かっぽ料理と高千穂牛陶板焼き会席」。青竹で香ばしく蒸し焼きにする名物かっぽ鶏、竹筒で燗をつけるかっぽ酒、A5高千穂牛の陶板焼き、名物だご汁。",
              highlights: [
                "創業100余年・心温まるおもてなしの老舗＆青竹で焼き上げる元祖かっぽ鶏とかっぽ酒",
                "元祖かっぽ鶏とA5高千穂牛陶板焼き＆手作りだご汁と女将自慢の温もり郷土料理",
                "アットホームな老舗の温もりと良心的な価格設定＆高千穂の歴史と人情に触れる旅"
              ]
            }
  ];

  const faqList = [
  {
    "q": "高千穂の冬の伝統神事「夜神楽（よかぐら）」とは？開催時期や見学方法は？",
    "a": "高千穂の夜神楽は、秋の収穫への感謝と翌年の豊作を祈願し、毎年11月中旬から翌年2月上旬にかけて町内約20の集落で夜を徹して奉納される国の重要無形民俗文化財です。民家や公民館を「神楽宿」とし、三十三番の神楽が夕方から翌朝まで舞い続けられます。一般の旅行者もマナーを守れば拝観可能です。また、高千穂神社の神楽殿では、年間を通じて毎晩20時〜21時に「高千穂観光夜神楽」が開催されており、三十三番の中から代表的な4番（手力雄の舞・鈿女の舞・戸取の舞・御神体の舞）を約1時間で手軽に鑑賞できます（要事前予約・有料）。冬の夜は冷え込みますので厚手の防寒具をご持参ください。"
  },
  {
    "q": "11月・12月の高千穂の気候や気温、朝の雲海の見頃時期は？",
    "a": "高千穂町は九州山地の中央部に位置する山間地のため、宮崎市街地など沿岸部よりも大幅に気温が低く、初冬の寒さは本格的です。11月の平均気温は最高14〜17℃、最低3〜7℃。12月に入ると最高気温は8〜12℃、最低気温は-2〜3℃前後まで冷え込み、朝晩は氷点下に達することもあります。また、11月から12月上旬にかけては「国見ヶ丘（標高513m）」からの雲海発生率が非常に高く、晴天で風がなく寒暖差の大きい早朝（日の出前の6時半〜7時半頃）には、高千穂盆地を覆い尽くす幻想的な雲海の大パノラマが出現します。"
  },
  {
    "q": "名物「高千穂牛」の特徴と、伝統料理「かっぽ鶏」「かっぽ酒」とは？",
    "a": "「高千穂牛」は、全国和牛能力共進会（和牛オリンピック）で日本一を連覇した宮崎牛の中でも、高千穂地区で丹精込めて肥育されたA4・A5ランクの厳選黒毛和牛です。脂の融点が低く、口に入れた瞬間にとろけるような柔らかさと芳醇な香りが広がります。また「かっぽ鶏」は、切り出した青竹の節をくり抜いた筒の中に、地鶏や椎茸、ネギ、特製タレを詰め、炭火で直火焼きにする郷土料理。竹から染み出る天然の水分と油で蒸し焼きにされ、驚くほど柔らかく香り高く仕上がります。「かっぽ酒」は同じく青竹に日本酒を入れ、炭火で燗をつけたもので、お酒を注ぐ際に「カッポ、カッポ」と心地よい音が鳴ることから名付けられました。"
  },
  {
    "q": "初冬の高千穂峡・真名井の滝の見どころと貸しボートの運行状況は？",
    "a": "阿蘇山の火山活動による火砕流が急激に冷却されてできた柱状節理の断崖が続く「高千穂峡」。初冬は空気が澄み渡り、日本の滝百選に選ばれた落差約17mの「真名井の滝」がエメラルドグリーンの川面に白糸を引く姿は息を呑む美しさです。遊歩道からの眺めはもちろん、川面から見上げる「貸しボート」も人気です。冬期も営業していますが、水位の上昇や点検等で運休する場合があるため、公式サイトでの事前予約と運航確認を推奨します。日没後は峡谷が幻想的にライトアップされる季節もあります。"
  },
  {
    "q": "福岡・熊本・宮崎方面からの高千穂へのアクセス方法は？",
    "a": "飛行機を利用する場合は「阿蘇くまもと空港」が最も便利です。熊本空港から高千穂までは特急バス「たかちほ号」で約1時間50分、レンタカーなら国道57号・325号経由で約1時間半です。博多方面からは高速バス「ごかせ号」で高千穂バスセンターまで直通約3時間半。宮崎方面からはJR日豊本線で「延岡駅」へ向かい、延岡駅前から宮崎交通の路線バスで約1時間20分です。町内の主要観光地（高千穂神社、高千穂峡、天岩戸神社など）は高千穂バスセンター周辺から回遊バスやタクシーでスムーズに移動可能です。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://croud-travel.com/winter-miyazaki-takachiho-yokagura-gorge-takachihogyu-stay#article',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://croud-travel.com/#website',
          'name': 'クラドトラベル',
          'url': 'https://croud-travel.com/'
        },
        'headline': "【11・12月宮崎・神話の里高千穂の冬の夜神楽と真名井の滝】名物A5高千穂牛ステーキ＆かっぽ鶏・竹筒かっぽ酒を味わうパワースポット名宿5選",
        'description': "11月中旬から翌年2月にかけて、日本神話「天孫降臨」の舞台である宮崎県高千穂町では、国の重要無形民俗文化財である冬の風物詩「高千穂の夜神楽（よかぐら）」が奉納され、神々の息吹が町全体を包み込みます。初冬の凛とした冷気の中でエメラルドグリーンに澄み渡る高千穂峡・真名井の滝や、天照大神がお隠れになった天安河原の神秘的な佇まい。夕食には日本一の和牛宮崎牛の中でも最高峰と称される「極上A5ランク高千穂牛ステーキ」や、竹筒で地鶏と野菜を蒸し焼きにする「かっぽ鶏」、青竹で燗をつける伝統の「かっぽ酒」。神話の里で心身を清め、至福の美食と温泉に浸る厳選名宿5選を徹底解説します。",
        'inLanguage': 'ja',
        'mainEntityOfPage': 'https://croud-travel.com/winter-miyazaki-takachiho-yokagura-gorge-takachihogyu-stay',
        'datePublished': '2026-09-28T00:00:00+09:00',
        'dateModified': '2026-09-28T00:00:00+09:00',
        'publisher': {
          '@type': 'Organization',
          'name': 'クラドトラベル編集部',
          'url': 'https://croud-travel.com/'
        }
      },
      {
        '@type': 'TouristDestination',
        '@id': 'https://croud-travel.com/winter-miyazaki-takachiho-yokagura-gorge-takachihogyu-stay#destination',
        'name': '宮崎・神話の里高千穂',
        'description': '天孫降臨の舞台として知られる神話の里。冬の伝統夜神楽と高千穂峡真名井の滝、極上A5高千穂牛ステーキが魅力。',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 32.7118,
          'longitude': 131.3082
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://croud-travel.com/winter-miyazaki-takachiho-yokagura-gorge-takachihogyu-stay#faq',
        'mainEntity': faqList.map((f) => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.a
          }
        }))
      },
      {
        '@type': 'ItemList',
        '@id': 'https://croud-travel.com/winter-miyazaki-takachiho-yokagura-gorge-takachihogyu-stay#hotellist',
        'name': '神話の里高千穂のおすすめ名宿5選',
        'itemListElement': hotels.map((h, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': h.name,
          'url': h.url
        }))
      }
    ]
  };


  return (
    <article className="min-h-screen bg-gradient-to-b from-emerald-50/40 via-stone-50 to-emerald-50/30 text-stone-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-emerald-950 via-teal-950 to-stone-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-emerald-200">
            <Link href="/" className="hover:underline hover:text-white transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:underline hover:text-white transition">特集一覧</Link>
            <span>/</span>
            <span className="text-white font-medium">宮崎・神話の里高千穂</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-emerald-300" />
            11月・12月 冬の伝統高千穂夜神楽＆神話パワースポット特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月宮崎・神話の里高千穂】冬の夜神楽と真名井の滝
            <span className="block text-emerald-300 text-lg sm:text-2xl mt-3 font-normal">
              名物A5高千穂牛ステーキ＆かっぽ鶏・竹筒かっぽ酒を味わうパワースポット名宿5選
            </span>
          </h1>

          <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-4xl">
            11月中旬から翌年2月にかけて、日本神話「天孫降臨」の舞台である宮崎県高千穂町では、国の重要無形民俗文化財である冬の風物詩「高千穂の夜神楽（よかぐら）」が奉納され、神々の息吹が町全体を包み込みます。初冬の凛とした冷気の中でエメラルドグリーンに澄み渡る高千穂峡・真名井の滝や、天照大神がお隠れになった天安河原の神秘的な佇まい。夕食には日本一の和牛宮崎牛の中でも最高峰と称される「極上A5ランク高千穂牛ステーキ」や、竹筒で地鶏と野菜を蒸し焼きにする「かっぽ鶏」、青竹で燗をつける伝統の「かっぽ酒」。神話の里で心身を清め、至福の美食と温泉に浸る厳選名宿5選を徹底解説します。
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-emerald-200">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>ベストシーズン: 11月中旬〜12月下旬（高千穂夜神楽奉納期＆澄み切る峡谷）</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Utensils className="w-4 h-4 text-emerald-300" />
              <span>旬の味覚: 極上A5高千穂牛ステーキ・元祖かっぽ鶏・青竹かっぽ酒</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>体験: 高千穂神社観光夜神楽・国見ヶ丘早朝雲海・真名井の滝ボート</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-emerald-800 text-sm font-bold bg-emerald-50 px-3 py-1 rounded-full">
            <Landmark className="w-4 h-4" />
            神話の里高千穂 初冬の厳かな情景
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-stone-900 leading-snug">
            夜を徹して舞う神々の祈りと澄み渡る峡谷の清水。太古の神話が息づく冬のパワースポット
          </h2>
          <div className="text-sm sm:text-base text-stone-600 leading-relaxed space-y-4">
            <p>
              宮崎県北西端、九州山地の中央に位置する「高千穂（たかちほ）」。天孫降臨や天岩戸開きなど、日本神話の最も劇的な物語の舞台として知られ、町全体が霊験あらたかな気に満ち溢れています。
            </p>
            <p>
              高千穂の冬の最大の魅力は、毎年11月中旬から翌年2月上旬にかけて各集落で奉納される「高千穂の夜神楽」です。秋の収穫に感謝し、新しい年の豊穣と厄除けを祈る三十三番の舞は、夕暮れから翌朝まで夜を徹して繰り広げられます。笛や太鼓の素朴な調べとともに、鬼や神々の面をつけた舞い手が舞う姿は、観る者の魂を揺さぶる荘厳さに満ちています。高千穂神社では毎晩20時から代表的な神楽が演じられ、誰でも気軽に本物の伝統文化に触れることができます。
            </p>
            <p>
              さらに初冬の高千穂峡は、夏の喧騒が去り、澄み切った冷気の中でエメラルドグリーンの川水と真名井の滝の白糸が息を呑むほどの静けさを湛えます。早朝の「国見ヶ丘」では高千穂盆地を覆い尽くす幻想的な雲海に出逢い、夜には炭火で炙る「かっぽ鶏」と青竹燗の「かっぽ酒」、そして日本一の宮崎牛の頂点「高千穂牛」に舌鼓。神話の里ならではの霊性と滋味が、訪れる人の心と身体を深く癒してくれます。
            </p>
          </div>
        </section>

        {/* 3 Pillars Section */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              11月・12月の高千穂を満喫する3つの醍醐味
            </h2>
            <p className="text-sm text-stone-500">
              冬の夜神楽の厳かさと神話の自然、最高峰和牛の美食を巡る
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                冬の伝統「高千穂の夜神楽」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                国重要無形民俗文化財の夜神楽。高千穂神社神楽殿で毎晩舞われる観光夜神楽と、町内各集落で徹夜で奉納される三十三番の神事。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                澄み渡る真名井の滝＆国見ヶ丘雲海
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                初冬の柱状節理とエメラルドの水面が美しい高千穂峡。寒暖差の大きい早朝に国見ヶ丘から見下ろす幻想的な雲海の大パノラマ。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                A5高千穂牛ステーキ＆元祖かっぽ鶏
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                日本一宮崎牛の最高峰A5高千穂牛。青竹筒で地鶏を蒸し焼きにする名物かっぽ鶏と、炭火で燗をつけた香り高き竹筒かっぽ酒。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-10">
          <div className="border-l-4 border-emerald-800 pl-4 space-y-1">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-800 uppercase">
              Selected Accommodations
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900">
              宮崎・神話の里高千穂の厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              楽天トラベル最新APIから取得した実在データに基づく、確かな評価と魅力を誇る厳選宿泊施設
            </p>
          </div>

          <div className="space-y-12">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id}
                id={'hotel-' + hotel.id}
                className="bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image */}
                  <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] bg-stone-100 overflow-hidden">
                    <img
                      src={hotel.img}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-emerald-950/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-xs flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      厳選名宿 第{hotel.id}位
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-stone-950/75 text-white p-3 rounded-xl backdrop-blur-xs text-xs space-y-1">
                      <div className="flex items-center gap-1 text-emerald-300 font-semibold">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="line-clamp-1">{hotel.access}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hotel Details */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-1 text-amber-500 text-sm font-bold">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span>{hotel.rating}</span>
                          <span className="text-stone-400 text-xs font-normal">({hotel.reviews}件のクチコミ)</span>
                        </div>
                        <div className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-900 rounded-md">
                          参考最安値: {hotel.price}
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug hover:text-emerald-800 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                          {hotel.name}
                          <ExternalLink className="w-4 h-4 text-stone-400 inline" />
                        </a>
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {hotel.story}
                      </p>
                    </div>

                    {/* Room & Gourmet Highlights */}
                    <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200/60 space-y-3 text-xs sm:text-sm">
                      <div className="space-y-1">
                        <span className="font-bold text-stone-900 flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-emerald-700" />
                          おすすめ客室＆眺望
                        </span>
                        <p className="text-stone-600 pl-5 text-xs leading-relaxed">{hotel.roomTip}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="font-bold text-stone-900 flex items-center gap-1.5">
                          <Utensils className="w-3.5 h-3.5 text-emerald-700" />
                          名物料理＆夕食の醍醐味
                        </span>
                        <p className="text-stone-600 pl-5 text-xs leading-relaxed">{hotel.gourmetTip}</p>
                      </div>
                    </div>

                    {/* Bullet Highlights */}
                    <ul className="space-y-1.5 text-xs text-stone-600">
                      {hotel.highlights.map((hl: string, hIdx: number) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Booking Action Button */}
                    <div className="pt-2">
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-800 to-teal-950 text-white text-xs sm:text-sm font-bold shadow-md hover:from-emerald-900 hover:to-stone-950 hover:shadow-lg transition-all gap-2"
                      >
                        <span>楽天トラベルでプラン・空室・最新料金を見る</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1 Night 2 Days Itinerary Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <Compass className="w-6 h-6 text-emerald-800" />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              初冬の宮崎・高千穂を満喫する1泊2日おすすめモデルコース
            </h2>
          </div>
          <div className="space-y-6 text-stone-700">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">1日目</span>
                熊本空港から神話の里へ＆高千穂峡・真名井の滝とA5高千穂牛・高千穂夜神楽拝観
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-stone-600">
                阿蘇くまもと空港からレンタカーまたは特急バス「たかちほ号」を利用して高千穂へ（約1時間半）。まずは日本神話の原点・高千穂峡へ向かい、柱状節理のそそり立つ断崖と日本の滝百選「真名井の滝」が織りなす荘厳な絶景を遊歩道から散策。水鏡のように澄み渡るエメラルドグリーンの川面に息を呑みます。続いて天照大神がお隠れになった洞窟・天岩戸神社や天安河原を参拝し、無数に積まれた祈りの石積みと清流の気に心洗われます。16:00に神話の里の名宿へチェックイン。夕食は日本一宮崎牛の頂点「極上A5ランク高千穂牛ステーキ」や、青竹で香ばしく蒸し焼きにする元祖かっぽ鶏、竹筒で温めたかっぽ酒を堪能。20:00からは高千穂神社神楽殿で毎晩奉納される「高千穂観光夜神楽」を拝観し、笛と太鼓の音色に合わせて神々が舞う幽玄な世界に浸ります。
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">2日目</span>
                国見ヶ丘の早朝雲海パノラマ・棚田米朝食と神話神社巡り
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-stone-600">
                早朝6:30、標高513mの「国見ヶ丘」へ。晩秋から初冬にかけての寒暖差が大きい晴天の朝にだけ現れる、高千穂盆地を純白の雲が埋め尽くす「奇跡の雲海」を拝観。阿蘇五岳がお釈迦様の涅槃像のように浮かび上がる神々しい光景を満喫します。宿に戻り、総檜風呂で冷えた身体を温めた後、高千穂産新米コシヒカリと地元野菜の朝食を味わって10:00にチェックアウト。芸能と縁結びの神様・荒立神社やくし触神社を巡り、道の駅高千穂で名物のチキン南蛮や高千穂牛コロッケを味わって、神話のパワーを身体いっぱいに満たして帰路へ向かいます。
              </p>
            </div>
          </div>
        </section>

        {/* Local Cuisine Deep Dive */}
        <section className="bg-gradient-to-br from-emerald-950 via-stone-900 to-teal-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="inline-flex items-center gap-2 text-emerald-300 text-xs sm:text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Utensils className="w-4 h-4" />
            神々の里が誇る美食の極み
          </div>
          <h2 className="text-xl sm:text-3xl font-bold leading-snug">
            日本一の和牛と青竹香る伝統の技。初冬の高千穂で味わい尽くす郷土の贅
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-emerald-300 text-base flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-amber-300" />
                最高峰ブランド「A5高千穂牛」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                日本一の宮崎牛の中でも最高ランクを誇る高千穂牛。澄んだ空気と清流水で育まれた肉質は、美しいサシと上品な甘みを湛え、ステーキや陶板焼きで香ばしく焼き上げれば、とろけるような肉汁が溢れます。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-emerald-300 text-base flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-emerald-400" />
                青竹直火焼き「元祖かっぽ鶏」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                切り出した青竹の筒に地鶏や椎茸を詰め、炭火で直火蒸し焼きにする高千穂の伝統料理。竹のエキスと地鶏の脂が溶け合い、驚くほどふっくらジューシーな旨味と爽やかな竹の香りが口中に広がります。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-emerald-300 text-base flex items-center gap-1.5">
                <Wine className="w-4 h-4 text-rose-300" />
                青竹燗で味わう「かっぽ酒」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                青竹筒に注いだ辛口地酒を炭火にかざして温める伝統の燗酒。注ぐときに「カッポ、カッポ」と小気味よい音が鳴り、竹の油分が溶け込んだまろやかな風味は、冷えた夜神楽の夜に格別の温もりを与えてくれます。
              </p>
            </div>
          </div>
        </section>

        {/* Access & Travel Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-emerald-800 text-sm font-bold bg-emerald-50 px-3 py-1 rounded-full">
            <Compass className="w-4 h-4" />
            旅の計画ガイド
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            11月・12月の高千穂 交通アクセス＆夜神楽鑑賞のアドバイス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-emerald-700" />
                空港・新幹線からのアクセス方法
              </h3>
              <p>
                飛行機を利用する場合は熊本空港が最も便利で、レンタカーまたは特急バス「たかちほ号」で約1時間半〜2時間です。延岡駅からは宮崎交通の路線バスで約1時間20分でアクセスできます。
              </p>
              <p>
                町内の主要観光地（高千穂神社、高千穂峡、天岩戸神社など）は高千穂バスセンターから回遊バスやタクシーで手軽に移動可能です。冬のドライブも通常タイヤで走行できる日が大半です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-amber-700" />
                夜神楽鑑賞時の厳しい寒さと防寒対策
              </h3>
              <p>
                12月の高千穂は夜間の気温が氷点下近くまで冷え込みます。高千穂神社の神楽殿や集落の神楽宿は板敷きのため、足元から底冷えします。厚手のダウンコート、ひざ掛け、貼るカイロ、厚手の靴下をご持参ください。
              </p>
              <p>
                早朝の国見ヶ丘での雲海鑑賞（6時30分〜7時30分頃）も冷気が厳しい時間帯です。手袋やニット帽を着用し、暖かい服装でお出かけください。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-emerald-800 text-sm font-bold bg-emerald-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の宮崎・高千穂旅行 FAQ
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
        <section className="bg-gradient-to-br from-emerald-950 to-stone-950 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-emerald-300" />
              あわせて読みたい九州の冬名湯・冬グルメ特集
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200">
              冬の味覚や雪見露天、ブランド和牛を堪能する九州各地の厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-miyazaki-aoshima-onsen-miyazakigyu-iseebi-resort-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">宮崎・青島温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                青島温泉の宮崎牛＆伊勢海老リゾートステイ
              </h4>
              <p className="text-[11px] text-emerald-100 line-clamp-2">
                鬼の洗濯板と太平洋パノラマ・宮崎牛鉄板焼きを満喫。
              </p>
            </Link>

            <Link 
              href="/winter-oita-nagayu-onsen-carbonated-spring-kuju-snow-bungogyu-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">大分・竹田長湯温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                長湯温泉の世界屈指天然炭酸泉と豊後牛会席
              </h4>
              <p className="text-[11px] text-emerald-100 line-clamp-2">
                くじゅう初雪絶景と銀色泡の炭酸泉・清流エノハ料理を堪能。
              </p>
            </Link>

            <Link 
              href="/winter-kumamoto-kurokawa-onsen-yuakari-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">熊本・黒川温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                黒川温泉の竹灯籠湯あかりライトアップと露天風呂巡り
              </h4>
              <p className="text-[11px] text-emerald-100 line-clamp-2">
                冬の渓流に灯る竹あかりと肥後あか牛会席の極上宿。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-miyazaki-takachiho-yokagura-gorge-takachihogyu-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
