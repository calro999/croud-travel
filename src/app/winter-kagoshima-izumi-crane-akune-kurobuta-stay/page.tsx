import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Feather, Landmark, Flame, Footprints, Sun, AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月鹿児島：世界屈指のツル渡来地「一万羽！名宿5選',
  description: 'シベリアから1万羽を超えるツルが越冬飛来する世界屈指の冬の奇跡「出水のツル渡来地」。薩摩武士の気風を今に伝える重要伝統的建造物群「出水麓武家。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '出水のツル 渡来地, 出水麓武家屋敷群 初詣, 阿久根 華アジ, かごしま黒豚, 宮之城温泉 手塚ryokan, 紫尾温泉 しび荘, 出水赤鶏, 11月 12月 1月 鹿児島 旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kagoshima-izumi-crane-akune-kurobuta-stay/"
  },
  openGraph: {
    title: '11・12・1月鹿児島：世界屈指のツル渡来地「一万羽！名宿5選',
    description: 'シベリアから1万羽を超えるツルが越冬飛来する世界屈指の冬の奇跡「出水のツル渡来地」。薩摩武士の気風を今に伝える重要伝統的建造物群「出水麓武家。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-kagoshima-izumi-crane-akune-kurobuta-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/196041/196041.jpg",
      width: 1200,
      height: 630,
      alt: '冬の出水のツル渡来地と阿久根の華アジ・さつま黒豚'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月鹿児島：出水＆阿久根・さつま！世界屈指のツル渡来地「一万羽のツル」と出水麓武家屋敷初詣・阿久根の華アジ＆さつま黒豚名宿5選",
    description: "シベリアから1万羽を超えるツルが越冬飛来する世界屈指の冬の奇跡「出水のツル渡来地」。薩摩武士の気風を今に伝える重要伝統的建造物群「出水麓武家屋敷群」での雪の初詣。東シナ海・阿久根港が誇る冬のブランド魚「華アジ」や天然ウニ、かごしま黒豚と出水赤鶏。紫尾神社の拝殿下から湧く名湯「神の湯」や宮之城温泉の極上美肌露天に癒やされる厳選宿5選を徹底特集します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/196041/196041.jpg"]
  }
};

export const dynamic = 'force-static';

export default function KagoshimaIzumiAkunePage() {
  const hotels = [
            {
              id: 1,
              name: "ホテル泉國邸",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/196041/196041.jpg",
              rating: 5.00,
              reviews: 95,
              price: "¥33,000〜",
              access: "出水駅より車で約８分、南九州西回り自動車道水俣ＩＣより約３０分",
              special: "鶴の飛来地として知られる鹿児島県出水市。気品あるヨーロピアン風の佇まいが別世界へと誘ってくれるホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196041%2F196041.html",
              story: "出水駅のほど近くに佇み、優雅なヨーロッパ調の意匠と広々とした客室で上質なステイを提供する隠れ家ラグジュアリーホテル「ホテル泉國邸（せんこくてい）」。館内に一歩足を踏み入れると、アンティーク調の家具や調度品が配された落ち着いた空間が広がり、日常の喧騒を忘れさせてくれます。冬期は世界的なツル渡来地として名高い出水ツル観察センターや、出水麓武家屋敷群へのアクセス拠点として絶好のロケーション。客室は全室がゆったりとした設計で、冬の冷えた身体を癒やす大型バスルームや最高級ベッドを完備。夕食には北薩摩の誇るブランド牛「さつま福永牛」や出水特産の赤鶏、近海鮮魚を華やかな洋食コースで堪能でき、大人の特別な冬の旅行にふさわしい贅沢な一夜が叶います。",
              roomTip: "エグゼクティブ・スイートまたはデラックスツイン。ヨーロッパの邸宅のような高い天井と広々としたリビングで、優雅な読書やワイン時間を愉しめます。",
              gourmetTip: "「北薩摩厳選ディナーコース」。柔らかくジューシーなさつま黒毛和牛のグリルと、出水産赤鶏、冬の近海魚介のカルパッチョを味わう本格コース。",
              highlights: [
                "ヨーロッパ調ラグジュアリー空間・全室広々設計と出水の美食コース",
                "さつま福永牛ステーキと出水赤鶏・近海鮮魚の本格洋食ディナー",
                "出水駅至近・ツル観察センターや出水麓武家屋敷観光の特等席"
              ]
            },
            {
              id: 2,
              name: "ＨＯＴＥＬ　ＫＩＮＧ（ホテル　キング）＜鹿児島県＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/50525/50525.jpg",
              rating: 3.66,
              reviews: 480,
              price: "¥2,762〜",
              access: "出水駅から車で約5分／鹿児島空港より空港連絡バス、出水本町下車、徒歩約5分／九州西回り自動車道・水俣ICから車で約35分",
              special: "新型コロナウィルス感染拡大防止のため天然温泉大浴場は臨時休業中です。ご迷惑をおかけしております",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50525%2F50525.html",
              story: "出水市街の中心に位置し、観光やビジネスの拠点として半世紀にわたり愛され続ける信頼のシティホテル「ＨＯＴＥＬ ＫＩＮＧ（ホテル キング）」。最上階の展望レストランからは、冬晴れの出水平野や遠く不知火海（八代海）、そして朝夕に空を舞うツルの群れの姿を遠望できます。館内には大浴場が完備されており、冬のツル観察の早朝撮影や武家屋敷の散策で冷えた身体を温かい湯でじんわりと癒やすことができます。料理は鹿児島の郷土料理に定評があり、名物「黒豚しゃぶしゃぶ」や「出水赤鶏の炭火焼き」、近海で獲れたキビナゴや地魚のお造りなど、鹿児島の豊かな食文化を地酒「さつま島美人」とともに心ゆくまで味わえます。",
              roomTip: "高層階ツインルーム。出水の街並みと冬空を広く見渡せ、清潔で機能的な空間で旅の疲れを心地よくリフレッシュできます。",
              gourmetTip: "「かごしま黒豚しゃぶしゃぶ＆出水赤鶏会席」。甘みある脂が極上の黒豚を特製出汁でくぐらせ、名物の赤鶏のタタキや炭火焼きとともに堪能。",
              highlights: [
                "出水市街中心・展望レストランからツルの飛翔遠望＆大浴場完備",
                "名物かごしま黒豚しゃぶしゃぶ＆出水赤鶏炭火焼き・地酒島美人",
                "ツル早朝撮影の拠点に最適・無料駐車場完備と安心の老舗シティ"
              ]
            },
            {
              id: 3,
              name: "宮之城温泉　手塚ｒｙｏｋａｎ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13948/13948.jpg",
              rating: 4.76,
              reviews: 389,
              price: "¥16,600〜",
              access: "九州新幹線 出水駅よりバス利用 宮之城バス停より車で１０分 / 九州縦貫道 人吉ICより１時間20分　横川ICより４０分",
              special: "【静寂に包まれた緑豊かな隠れ家ryokan】上質な寛ぎ◆露天風呂や地元の味覚を堪能ー大人の贅沢時間ー",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13948%2F13948.html",
              story: "清流・川内川のほとり、竹林と雑木林に囲まれた静寂の敷地に佇む、北薩摩を代表する最高峰の大人の隠れ家「宮之城温泉 手塚ｒｙｏｋａｎ（てづかりょかん）。」。暖炉のあるモダンなロビーや、読書に没頭できるライブラリーラウンジなど、館内全体に大人のための静謐な時間が流れます。宿の自慢は、加水も加温も一切行わない「源泉100%掛け流し」の単純硫黄泉。エメラルドグリーンに輝く滑らかな美肌の湯が内湯や竹林露天風呂に溢れ、冬の冷たい大気の中で竹の葉が擦れ合う音を聞きながら浸かる湯浴みはまさに極楽。夕食は地産地消にこだわった創作会席で、かごしま黒豚の柔らか煮や黒毛和牛のステーキ、地元さつま町の旬野菜が器の上に美しく咲き誇ります。",
              roomTip: "露天風呂付き和洋室。プライベートな専用ウッドデッキに源泉掛け流しの湯船が備わり、満天の星空を眺めながら時間を気にせず何度でも名湯を楽しめます。",
              gourmetTip: "「黒毛和牛＆かごしま黒豚贅沢創作会席」。きめ細やかな霜降り和牛ステーキと、出汁にこだわる黒豚の小鍋仕立て。自家製デザートまで至福の連続。",
              highlights: [
                "北薩摩最高峰のリトリート・竹林に佇む源泉100%掛け流し硫黄泉",
                "黒毛和牛ステーキとかごしま黒豚小鍋・暖炉ラウンジの寛ぎ",
                "露天風呂付き客室完備・川内川のせせらぎを聞く静寂のステイ"
              ]
            },
            {
              id: 4,
              name: "紫尾温泉　旅籠しび荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/128452/128452.jpg",
              rating: 4.34,
              reviews: 380,
              price: "¥7,450〜",
              access: "車：九州自動車道横川ICより45分/JR：出水駅→南国交通空港シャトルバス（30分）→宮之城駅バス停→タクシーで15分。",
              special: "大人だけの隠れ宿。「神の湯」と呼ばれるとろ〜り美肌の湯★2つの源泉で愉しめるのは当館だけ。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128452%2F128452.html",
              story: "「神の湯」と称される紫尾神社の拝殿下から源泉が自然湧出する神秘の霊泉・紫尾温泉に佇む名湯の宿「紫尾温泉 旅籠しび荘（はたごしびそう）」。温泉通の間で九州屈指の名湯として知られ、エメラルドグリーンから白濁へと天候によって色を変える強アルカリ性硫黄泉（pH9.4）は、とろりとした化粧水のような極上の肌触り。冬の寒さを忘れさせる圧倒的な保温効果を誇ります。夕食は主人が心を込めて手作りする素朴で滋味あふれる里山料理。地元の清流で育った川魚の塩焼きや、特産のさつま黒豚の鍋、さつま町特産のタケノコや山菜、手打ち蕎麦など、身体に染み渡る温もりある手料理と名酒「紫尾の露」を堪能できます。",
              roomTip: "渓流沿いの純和風客室。静かに流れる川のせせらぎと鳥のさえずりに耳を傾け、どこか懐かしい日本の里山の原風景に心洗われる滞在。",
              gourmetTip: "「里山冬の恵み会席」。自家源泉の温泉水で仕込む温泉湯豆腐や、ジューシーな黒豚鍋、旬の根菜の煮物など素材の持ち味が生きる心温まる料理。",
              highlights: [
                "紫尾神社拝殿下から湧く「神の湯」・とろとろ極上美肌泉と里山料理",
                "温泉水で仕込む温泉湯豆腐と川魚塩焼き・名酒紫尾の露ペアリング",
                "九州屈指の美肌名湯・エメラルドグリーンに輝く神秘の湯船"
              ]
            },
            {
              id: 5,
              name: "お宿みどこい",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/179195/179195.jpg",
              rating: 3.95,
              reviews: 140,
              price: "¥4,000〜",
              access: "車…国道3号線広域医療センター入口交差点から1分（無料駐車場30台完備）　徒歩…肥薩おれんじ鉄道阿久根駅から徒歩4分",
              special: "スマフォでかんたん予約、チェックイン！宿泊特化型スマートホテル『お宿みどこい』",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179195%2F179195.html",
              story: "東シナ海に面した港町・阿久根の漁港近くに佇み、阿久根港直送の獲れたて魚介を驚くべきボリュームと鮮度で提供する大人気の海鮮宿「お宿みどこい」。冬の阿久根といえば、全国屈指の潮流が育むブランドアジ「華アジ（はなあじ）」や、濃厚な甘みが詰まった天然紫ウニ、そして冬に甘みを増すタカエビやキビナゴ。宿では仲買人の目利きにより、その日の朝に水揚げされた最高の海の幸がそのまま食卓に並びます。シンプルで清潔感ある客室は温かい家庭的なおもてなしに満ち、出水のツル観察センターや阿久根温泉街へも車で好アクセス。新鮮な海の幸をとことん味わいたい旅人にとって、これ以上ない美食の隠れ家です。",
              roomTip: "和モダン洋室または和室。一人旅からカップル、家族連れまで気兼ねなく寛げるアットホームな空間。清潔なリネンと心地よい静けさ。",
              gourmetTip: "「阿久根港直送・冬の極上海鮮づくしプラン」。身が引き締まった華アジの活造りをはじめ、冬の天然ウニや伊勢海老、旬魚の煮付けが並ぶ圧巻の海鮮パレード。",
              highlights: [
                "阿久根港直結の海鮮宿・ブランド華アジと天然ウニの圧倒的ボリューム",
                "朝獲れ鮮魚の活造りパレード・仲買人直営の圧倒的な鮮度とコスパ",
                "東シナ海の夕日ドライブや阿久根温泉散策に便利な立地"
              ]
            }
  ];

  const faqs = [
  {
    "q": "出水のツル渡来地の見頃時期と一日の観察おすすめ時間帯は？",
    "a": "出水のツル渡来地（出水市ツル観察センター周辺）には、例年10月中旬からシベリアよりツルが渡来し始め、11月中旬から1月下旬にかけて約1万羽以上のナベヅルやマナヅルが集結して冬のピークを迎えます。一日のうちで最もドラマチックな時間帯は「早朝の日の出前後（朝6:30〜7:30頃）。」です。ねぐらから一斉に飛び立ち、朝日に照らされながら空を舞う数千羽のツルの姿と鳴き声のハーモニーは世界屈指の自然の絶景です。日中は水田で餌をついばむ家族連れの微笑ましい姿を間近で観察できます。"
  },
  {
    "q": "出水麓武家屋敷群の見どころと初詣おすすめスポットは？",
    "a": "出水麓（いずみふもと）は、薩摩藩の国境警備のために造られた「外城（とじょう）」の中で最も規模が大きく、国の重要伝統的建造物群保存地区に選定されています。丸石を積み上げた美しい玉石垣や武家門、手入れされた生垣が続く町並みは、江戸時代の薩摩武士の気風をそのまま残しています。冬の初詣スポットとしては、島津家初代忠久公が創建した日本最古の禅寺「感応寺（かんのうじ）」や、薩摩国二宮として崇敬される「加紫久利神社（かしくりじんじゃ）」が有名で、静寂の中で厳かな新年参拝を行えます。"
  },
  {
    "q": "阿久根の冬の味覚「華アジ」と天然ウニの特徴は？",
    "a": "阿久根港で水揚げされる「華アジ（はなあじ）」は、東シナ海の激しい潮流と豊かな餌場で育った瀬付きの真アジです。回遊せず一箇所に定住するため、全身にきめ細かく上質な脂が乗り、刺身で食べるとコリコリとした弾力と上品な甘みが口いっぱいに広がります。また、冬から早春にかけて旬を迎える阿久根の「天然紫ウニ」は、磯の香りと濃厚なコクが特徴で、添加物を一切使わない生ウニ丼は絶品です。"
  },
  {
    "q": "紫尾温泉の「神の湯」と呼ばれる理由と泉質の特徴は？",
    "a": "紫尾温泉（しびおんせん）は、温泉街の中心にある「紫尾神社」の拝殿真下から源泉が自然湧出していることから、古くから「神の湯」と尊ばれてきました。泉質は「単純硫黄温泉（低張性・アルカリ性・高温泉）。」で、pH値が9.4前後と非常に高く、とろりとした化粧水のような極上の肌触りを誇ります。角質を優しく落とし、保湿成分を届けるため「美肌の湯」として名高く、冬の乾燥肌を滑らかに潤してくれます。"
  },
  {
    "q": "鹿児島空港や九州新幹線出水駅からのアクセス方法は？",
    "a": "新幹線をご利用の場合、博多駅から九州新幹線で出水駅まで最速約1時間10分、熊本駅から約30分、鹿児島中央駅から約25分と抜群のアクセスを誇ります。出水駅からはツル観察センターや出水麓武家屋敷群へ周遊バス（出水ツル観光周遊バス・冬期運行）やタクシーが利用可能です。飛行機をご利用の場合は、鹿児島空港から空港連絡バスまたはレンタカーで出水・さつま方面へ約1時間〜1時間15分です。周辺の温泉や阿久根海岸を周遊するにはレンタカーの利用が最もスムーズです。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-kagoshima-izumi-crane-akune-kurobuta-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-kagoshima-izumi-crane-akune-kurobuta-stay"
        },
        "headline": "【11・12・1月鹿児島】出水＆阿久根・さつま！世界屈指のツル渡来地「一万羽のツル」と出水麓武家屋敷初詣・阿久根の華アジ＆さつま黒豚名宿5選",
        "description": "シベリアから1万羽を超えるツルが越冬飛来する世界屈指の冬の奇跡「出水のツル渡来地」。薩摩武士の気風を今に伝える重要伝統的建造物群「出水麓武家屋敷群」での雪の初詣。東シナ海・阿久根港が誇る冬のブランド魚「華アジ」や天然ウニ、かごしま黒豚と出水赤鶏。紫尾神社の拝殿下から湧く名湯「神の湯」や宮之城温泉の極上美肌露天に癒やされる厳選宿5選を徹底特集します。",
        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/196041/196041.jpg",
        "datePublished": "T21:00:00+09:00",
        "dateModified": "T21:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "地域の宿探訪",
          "url": "https://croud-travel.pages.dev",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-kagoshima-izumi-crane-akune-kurobuta-stay"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-kagoshima-izumi-crane-akune-kurobuta-stay#breadcrumb",
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
            "name": "出水＆阿久根・さつまツル渡来地と黒豚名宿",
            "item": "https://croud-travel.pages.dev/winter-kagoshima-izumi-crane-akune-kurobuta-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-kagoshima-izumi-crane-akune-kurobuta-stay#faq",
        "mainEntity": faqs.map(f => ({
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
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 py-4 text-xs font-semibold text-stone-500 flex items-center gap-2">
        <Link href="/" className="hover:text-red-700 transition">ホーム</Link>
        <span>/</span>
        <Link href="/features" className="hover:text-red-700 transition">特集一覧</Link>
        <span>/</span>
        <span className="text-stone-800">鹿児島・出水＆阿久根・ツル渡来地と黒豚名宿</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="relative bg-gradient-to-b from-stone-900 via-stone-800 to-rose-950 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 text-xs font-bold tracking-wide">
            <Feather className="w-3.5 h-3.5 text-rose-400" />
            11月〜1月限定・北薩摩の冬の奇跡＆極上温泉特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight md:leading-snug text-balance">「11・12・1月鹿児島」出水＆阿久根・さつま！世界屈指のツル渡来地「一万羽のツル」と出水麓武家屋敷初詣・阿久根の華アジ＆さつま黒豚名宿5選</h1>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            冬の空を埋め尽くす1万羽のツルの壮大な飛翔。薩摩武士の面影を残す出水麓武家屋敷群での初詣と、東シナ海が育む極上ブランド「華アジ」＆かごしま黒豚。紫尾神社の拝殿下から湧く奇跡の「神の湯」や宮之城温泉の極上美肌露天へご案内します。
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-3 text-xs text-rose-200">
            <span className="flex items-center gap-1.5"><Feather className="w-4 h-4" /> 特別天然記念物・一万羽のツル</span>
            <span className="flex items-center gap-1.5"><Landmark className="w-4 h-4" /> 出水麓武家屋敷群初詣</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4" /> 阿久根華アジ＆かごしま黒豚</span>
            <span className="flex items-center gap-1.5"><Flame className="w-4 h-4" /> 紫尾温泉「神の湯」美肌露天</span>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">

        {/* イントロダクション解説 */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-xs font-bold text-rose-700 tracking-wider uppercase">Winter Highlights</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              冬の北薩摩が旅人を惹きつける理由：天を舞う一万羽のツルと武士の誇りが息づく古都
            </h2>
          </div>
          <div className="prose text-stone-700 text-sm md:text-base leading-relaxed space-y-4">
            <p>
              鹿児島県北西部に広がる北薩（ほくさつ）地域——出水市、阿久根市、さつま町。豊かな水田地帯と不知火海、そして川内川の清流に恵まれたこの地は、11月から1月にかけて世界的にも唯一無二の冬のスペクタクルが繰り広げられます。その筆頭が、国の特別天然記念物に指定されている「出水のツル渡来地」です。シベリアから越冬のために飛来するナベヅルやマナヅルの数は実に一万羽を超え、ツルの渡来数としては日本一、世界でも屈指の規模を誇ります。朝霧に包まれた冬の夜明け、朝日に照らされて一斉に大空へと舞い上がる無数のツルの優美な群舞は、まさに息を呑む感動の光景です。
            </p>
            <p>
              歴史情緒を味わうなら、薩摩藩最大の外城として栄えた「出水麓武家屋敷群」へ。丸石を積んだ美しい石垣とイヌマキの生垣が整然と並び、400年前の武家社会の風情を今に伝えます。島津家ゆかりの古寺「感応寺」や薩摩国二宮「加紫久利神社」での初詣は、新年を迎える心に凛とした清々しさを届けてくれます。
            </p>
            <p>
              美食の面でも北薩摩は宝庫です。東シナ海の荒波にもまれて身が締まり脂が乗った阿久根のブランド魚「華アジ」や冬の天然ウニ、旨味豊かな「出水赤鶏」、そしてサツマイモを食べて育つ本場「かごしま黒豚」のしゃぶしゃぶは格別の美味。温泉地には、紫尾神社の拝殿真下から湧出する神秘の美肌湯「紫尾温泉（神の湯）」や、川内川沿いの竹林露天が風流な名湯「宮之城温泉」があり、冬の冷えた身体をとろとろの美肌湯が優しく包み込みます。
            </p>
          </div>
        </section>

        {/* 厳選ホテル5選 */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-rose-700 tracking-wider uppercase">Selected Ryokan & Hotels</span>
            <h2 className="text-2xl md:text-3xl font-black text-stone-900">
              出水＆阿久根・さつま！ツル観察と極上美肌湯・黒豚を堪能する名宿5選
            </h2>
            <p className="text-stone-600 text-xs md:text-sm">
              楽天トラベルで卓越した評価を獲得し、ツル観察拠点や神の湯・阿久根鮮魚を誇る宿を厳選
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((hotel) => (
              <article key={hotel.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition">
                <div className="p-6 md:p-8 space-y-6">
                  {/* ヘッダー情報 */}
                  <div className="flex flex-col md:items-center justify-between gap-4 border-b border-stone-100 pb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="bg-rose-600 text-white text-xs font-black px-2.5 py-0.5 rounded-full">
                          第{hotel.id}選
                        </span>
                        <div className="flex items-center text-amber-500 text-xs font-bold">
                          <Star className="w-3.5 h-3.5 fill-current mr-1" />
                          <span>{hotel.rating}</span>
                          <span className="text-stone-400 ml-1">({hotel.reviews}件)</span>
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-stone-900 font-journal-serif">
                        {hotel.name}
                      </h3>
                      <p className="text-xs text-stone-500 flex items-center gap-1.5 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
                        {hotel.access}
                      </p>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="text-xs text-stone-400 block">参考宿泊料金（1名）</span>
                      <span className="text-lg md:text-xl font-black text-rose-700">{hotel.price}</span>
                    </div>
                  </div>

                  {/* 宿の詳細ストーリー */}
                  <div className="prose text-stone-700 text-sm md:text-base leading-relaxed">
                    <p>{hotel.story}</p>
                  </div>

                  {/* ハイライト3点 */}
                  <div className="bg-rose-50/50 rounded-2xl p-4 md:p-5 border border-rose-100 space-y-2.5">
                    <h4 className="text-xs font-black text-rose-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                      この宿の注目ポイント＆こだわり
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs text-stone-700">
                      {hotel.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 mt-0.5 flex-shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 客室・グルメのアドバイス */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60">
                      <span className="font-bold text-stone-900 flex items-center gap-1 mb-1">
                        <Building className="w-3.5 h-3.5 text-rose-700" /> おすすめ客室
                      </span>
                      <p className="text-stone-600 leading-relaxed">{hotel.roomTip}</p>
                    </div>
                    <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60">
                      <span className="font-bold text-stone-900 flex items-center gap-1 mb-1">
                        <Utensils className="w-3.5 h-3.5 text-rose-700" /> 冬の美食プラン
                      </span>
                      <p className="text-stone-600 leading-relaxed">{hotel.gourmetTip}</p>
                    </div>
                  </div>

                  {/* 予約リンク */}
                  <div className="pt-2 text-center md:text-right">
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 text-white font-bold text-xs md:text-sm hover:from-rose-700 hover:to-rose-800 shadow-sm hover:shadow transition"
                    >
                      楽天トラベルで空室・プラン詳細を見る
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 冬の北薩摩を味わう三大美味＆文化セクション */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-xs font-bold text-rose-700 tracking-wider uppercase">Local Food & Culture</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              冬の北薩摩で絶対に味わうべき三大味覚：阿久根華アジ・かごしま黒豚・出水赤鶏
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-stone-700">
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-3">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                東シナ海の至宝「阿久根華アジ」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                阿久根沖の激しい潮流にもまれて育つ瀬付きのアジ。全身に細やかな霜降りの脂が乗り、獲れたてのお造りはコリコリとした歯ごたえと甘みが秀逸。さらに冬が旬の天然紫ウニやタカエビとともに味わう海鮮料理は全国の魚好きを虜にしています。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-3">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                本場「かごしま黒豚しゃぶしゃぶ」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                サツマイモを餌に与えて育てられる鹿児島の黒豚（バークシャー種）。融点が高くべたつかない白身（脂身）の甘みと、繊維が細かく柔らかい赤身が極上。冬は昆布出汁や蕎麦つゆにくぐらせる熱々のしゃぶしゃぶで、肉本来の旨味を心ゆくまで堪能できます。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-3">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                出水特産「出水赤鶏」と本格芋焼酎
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                出水市の澄んだ空気と清流で平飼い飼育される銘柄鶏「出水赤鶏」。適度な歯ごたえとコクのある赤身肉は、炭火焼きやタタキ、親子丼で本領を発揮。地元阿久根・出水の代表的な芋焼酎「さつま島美人」や「紫尾の露」のお湯割りとの相性は抜群です。
              </p>
            </div>
          </div>
        </section>

        {/* 出水麓武士道教育とツル保護400年の絆コラム */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-xs font-bold text-rose-700 tracking-wider uppercase">History & Heritage</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              薩摩武士の誇り「郷中教育」と、地元農家が400年守り継ぐツルの絆
            </h2>
          </div>
          <div className="prose text-stone-700 text-sm md:text-base leading-relaxed space-y-4">
            <p>
              肥後国（熊本）との国境に位置した出水は、薩摩藩主・島津氏にとって最も警戒を要する重要拠点でした。出水麓に住む郷士たちは「郷中教育（ごじゅうちょういく）」と呼ばれる独自の自治教育を受け、年長者が年少者を厳しく育てる質実剛健の武士道を培いました。西郷隆盛や大久保利通など明治維新を牽引した薩摩の英傑たちの精神的バックボーンは、この出水麓の教育システムから受け継がれたと言われています。
            </p>
            <p>
              また、出水にツルが渡来するようになったのは江戸時代初期からと記録されています。冬の水田を荒らすツルを追い払うのではなく、地元の農家や藩主が「吉鳥」「天からの授かりもの」として大切に見守り、餌を与えて保護してきた歴史があります。近代になっても市民ボランティアや児童生徒による早朝の餌やりが続けられており、人と野生のツルが共生する温かい絆が、世界一の越冬地を今に支えています。
            </p>
          </div>
        </section>

        {/* 11・12・1月モデルコース */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-xs font-bold text-rose-700 tracking-wider uppercase">Model Itinerary</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              【1泊2日】出水のツル大群舞と武家屋敷初詣・神の湯と黒豚満喫コース
            </h2>
          </div>

          <div className="space-y-6 text-sm text-stone-700">
            <div className="relative pl-6 border-l-2 border-rose-200 space-y-4">
              <div className="relative">
                <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-rose-600 border-2 border-white" />
                <h4 className="font-bold text-stone-900 text-base">1日目：歴史の街並み散歩と紫尾温泉の極上美肌湯</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  午前、九州新幹線出水駅よりレンタカーで出発。まずは国の重要伝統的建造物群保存地区「出水麓武家屋敷群」へ。美しい玉石垣の通りを歩き、公開武家屋敷「税所邸」「竹添邸」を見学。続いて島津家初代ゆかりの古刹「感応寺」にて厳かな雪の初詣。昼食は市内で出水名物「いずみ親子丼（出水赤鶏と卵）」を味わう。午後は阿久根海岸へ移動し、冬の東シナ海の絶景をドライブ。夕刻、紫尾温泉または宮之城温泉の宿へチェックイン。紫尾神社の拝殿下から湧くエメラルドグリーンの「神の湯」で肌をしっとり潤し、夜は熱々のかごしま黒豚しゃぶしゃぶと地酒に舌鼓。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-rose-600 border-2 border-white" />
                <h4 className="font-bold text-stone-900 text-base">2日目：早朝の一万羽ツル飛び立ち観察と阿久根の華アジ</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  早朝、日の出前に出発して「出水市ツル観察センター」へ。朝焼けに染まる空へ一万羽を超えるツルの大群が一斉に舞い上がる感動の瞬間を体感。鳴き声が響き渡る圧巻のパノラマをカメラに収める。宿へ戻って温かい朝食と朝風呂を満喫後、チェックアウト。阿久根港の海鮮市場に立ち寄り、冬が旬の「華アジ」の刺身や海鮮丼を堪能。特産のみかんやさつま揚げ、地酒「紫尾の露」「島美人」をお土産に購入し、出水駅より帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 冬のアクセス＆ツル観察マナーガイド */}
        <section className="bg-rose-50/60 rounded-3xl p-6 md:p-10 border border-rose-200/80 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-rose-900 font-bold text-base">
            <AlertTriangle className="w-5 h-5 text-rose-700 shrink-0" />
            <span>冬の北薩摩旅行・ツル観察マナー＆防寒ガイド</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700 leading-relaxed">
            <div className="space-y-2">
              <strong className="text-stone-900 block font-bold">早朝ツル観察の厳重防寒と静寂マナー</strong>
              <p>
                ツルの飛び立ちが見られる早朝（朝6:30〜7:30）は、平野部でも気温が氷点下近くまで下がります。厚手の防寒コート、手袋、耳当て、カイロを用意してください。ツルは非常に警戒心が強いため、観察所周辺では大声を出さず、フラッシュ撮影やドローン飛行は固く禁止されています。
              </p>
            </div>
            <div className="space-y-2">
              <strong className="text-stone-900 block font-bold">鳥インフルエンザ防疫対策の徹底</strong>
              <p>
                ツル渡来地へ出入りする道路には、車両消毒ポイントや靴底消毒マットが設置されています。生態系とツルの保護のため、指示に従って必ず消毒を受けてください。また、観察エリア外の水田やあぜ道への無断立ち入りはご遠慮ください。
              </p>
            </div>
          </div>
        </section>

        {/* よくある質問（FAQ） */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-xs font-bold text-rose-700 tracking-wider uppercase">Frequently Asked Questions</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              冬の出水・阿久根・さつま旅行に関するよくある質問
            </h2>
          </div>

          <div className="divide-y divide-stone-100">
            {faqs.map((f, idx) => (
              <div key={idx} className="py-4 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm md:text-base flex items-start gap-2">
                  <span className="text-rose-600 font-black">Q.</span>
                  <span>{f.q}</span>
                </h3>
                <p className="text-xs md:text-sm text-stone-600 pl-6 leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 内部リンク・関連特集 */}
        <section className="bg-stone-100 rounded-3xl p-6 md:p-8 space-y-4">
          <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
            あわせて読みたい！九州の冬旅＆名湯特集
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <Link href="/winter-kagoshima-kirishima-onsen-ryoma-black-pork-stay" className="p-3 bg-white rounded-xl hover:text-rose-700 shadow-xs transition">
              ♨️ 霧島温泉郷！霧島神宮初詣と黒豚しゃぶしゃぶ名宿
            </Link>
            <Link href="/winter-kagoshima-ibusuki-onsen-sunamushi-black-pork-stay" className="p-3 bg-white rounded-xl hover:text-rose-700 shadow-xs transition">
              🏖️ 指宿温泉！天然砂むし温泉と開聞岳絶景・黒豚ステイ
            </Link>
            <Link href="/winter-kumamoto-hitoyoshi-onsen-kumagawa-mist-wagyu-ayu-stay" className="p-3 bg-white rounded-xl hover:text-rose-700 shadow-xs transition">
              ⛰️ 人吉温泉＆球磨川の朝霧・国宝青井阿蘇神社初詣
            </Link>
            <Link href="/winter-kumamoto-kurokawa-onsen-yuakari-stay" className="p-3 bg-white rounded-xl hover:text-rose-700 shadow-xs transition">
              🏮 黒川温泉湯あかり！竹灯籠イルミネーションと露天巡り
            </Link>
            <Link href="/campaigns" className="p-3 bg-white rounded-xl hover:text-rose-700 shadow-xs transition">
              🍁 全国の旬の味覚＆極上温泉宿特集まとめ
            </Link>
          </div>
        </section>

      </main>
    
      <HubRelatedPosts currentSlug="winter-kagoshima-izumi-crane-akune-kurobuta-stay" />
</div>
  );
}
