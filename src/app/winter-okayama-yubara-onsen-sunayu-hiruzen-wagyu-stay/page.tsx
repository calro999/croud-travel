import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, SunMedium, Anchor
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月岡山・湯原温泉】pH9.3アルカリ美肌天然自噴泉！名宿5選',
  description: '11月から12月にかけて、岡山県北部の旭川上流に佇む名湯「湯原温泉（ゆばらおんせん）」は、美作三湯の筆頭として。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '湯原温泉 宿泊, 岡山 温泉 11月 12月, 湯原温泉 八景, 我無らん, ゆばらの宿 米屋, 菊之湯, 輝乃湯, 湯原 砂湯, 蒜山ジャージー牛, 美作三湯 宿',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-okayama-yubara-onsen-sunayu-hiruzen-wagyu-stay/"
  },
  openGraph: {
    title: '【11・12月岡山・湯原温泉】pH9.3アルカリ美肌天然自噴泉！名宿5選',
    description: '11月から12月にかけて、岡山県北部の旭川上流に佇む名湯「湯原温泉（ゆばらおんせん）」は、美作三湯の筆頭として。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-okayama-yubara-onsen-sunayu-hiruzen-wagyu-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の湯原温泉旭川渓谷と名物露天風呂砂湯'
      }
    ]
  }
};

const faqList = [
  {
    "q": "湯原温泉の11月・12月の気候や気温、積雪状況と冬のアクセス時の服装は？",
    "a": "岡山県北部に位置する湯原温泉は中国山地に抱かれた高原気候に近く、冬期は朝晩の冷え込みが厳しくなります。11月の平均最高気温は13〜15℃、最低気温は3〜5℃前後で日中は秋晴れの快適な気候ですが、12月に入ると最高気温は8〜10℃、最低気温は氷点下1〜3℃程度まで下がり、山沿いでは初雪が舞います。車で訪れる場合、米子自動車道（湯原IC周辺）や国道313号線は12月以降に積雪や路面凍結が発生することがあるため、スタッドレスタイヤの装着またはチェーン携行が推奨されます。服装は厚手の防寒コート、マフラー、手袋をご用意ください。"
  },
  {
    "q": "全国露天風呂番付で「西の横綱」に選ばれた名物露天風呂「砂湯」の利用マナーは？",
    "a": "「砂湯（すなゆ）」は、湯原ダムの足元、旭川の川底から自噴する温泉を巨岩で囲んだ天然の大露天風呂で、全国露天風呂番付で西の横綱に選定された湯原温泉のシンボルです。24時間無料で開放されており、温度の異なる「美人の湯」「子宝の湯」「長寿の湯」の3つの湯船があります。混浴ですが、女性や観光客が安心して利用できるよう、水着の着用や専用の「湯浴み着（ゆあみぎ・周辺旅館や観光案内所でレンタル・販売あり）。」の着用が推奨・歓迎されています。旭川の清流と初冬の渓谷美を間近に眺める湯浴みは唯一無二の体験です。"
  },
  {
    "q": "湯原温泉の泉質と美肌効果、効能の特徴は？",
    "a": "湯原温泉は毎分6,000リットル以上という驚異的な湧出量を誇り、温泉街の各施設に豊富に供給されています。泉質は「アルカリ性単純温泉（低張性アルカリ性高温泉）。」で、特筆すべきはpH9.3という全国屈指の高アルカリ度です。入浴すると肌の古い角質をやさしく溶かして滑らかに整える「石鹸のようなクレンジング作用」があり、湯船の中で肌を撫でるとツルツルとした心地よいとろみが実感できます。無色透明で無味無臭の柔らかな湯は刺激が少なく、赤ちゃんからお年寄りまで安心して浸かることができ、疲労回復や神経痛、冷え性改善に優れた効果を発揮します。"
  },
  {
    "q": "岡山駅や米子・大阪方面からのアクセス方法は？",
    "a": "車を利用する場合、米子自動車道「湯原IC」から温泉街までわずか約5分と高速道路からのアクセスが抜群です。大阪・神戸方面からは中国自動車道経由（落合JCTで米子道へ）で約2時間30分〜3時間、岡山ICからは約1時間15分、米子ICからは約40分で到着します。公共交通機関を利用する場合は、JR岡山駅から湯原温泉行きの高速バス「勝山・湯原温泉号」が運行しているほか、JR津山線・姫新線経由で「中国勝山駅」まで向かい、そこから真庭市コミュニティバス（まにわくん）で約35分です。"
  },
  {
    "q": "11月・12月の湯原温泉周辺で訪れるべきおすすめ観光スポットは？",
    "a": "初冬の湯原温泉周辺は見どころが豊富です。まず立ち寄りたいのが、車で約20分の距離に広がる雄大な「蒜山（ひるぜん）高原」。初冬の澄んだ空気の下、雄大な蒜山三座を望みながら「ひるぜんジャージーランド」で濃厚なジャージー牛乳やチーズフォンデュを堪能できます。また、旭川沿いのレトロな町並みが残る「勝山町並み保存地区」では、各家の軒先を彩る個性豊かな草木染めの「暖簾（のれん）」巡りや、老舗酒蔵「御前酒蔵元 辻本店」での冬の新酒利き酒が楽しめます。"
  }
];

export default function OkayamaYubaraWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-okayama-yubara-onsen-sunayu-hiruzen-wagyu-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-okayama-yubara-onsen-sunayu-hiruzen-wagyu-stay"
        },
        "headline": "【11・12月岡山・湯原温泉の初冬渓谷美と美作三湯・名物砂湯】pH9.3アルカリ美肌天然自噴泉＆蒜山ジャージー牛・冬ジビエ会席の宿5選",
        "description": "11月から12月にかけて、岡山県北部の旭川上流に佇む名湯「湯原温泉（ゆばらおんせん）」は、美作三湯の筆頭として、また全国露天風呂番付で「西の横綱」に輝く名物露天風呂「砂湯」を中心に、初冬の澄んだ渓谷美と情緒あふれる湯けむりに包まれます。川底から毎分6,000リットルもの湯が自噴するアルカリ性単純温泉は、pH9.3という全国屈指の高アルカリ度を誇り、肌に吸い付くようなとろみで古い角質を落とす奇跡の「美肌の湯」。初冬の澄み渡る寒気の中、旭川のせせらぎを聞きながら露天風呂に浸かり、夕食には近隣の蒜山高原が育む極上の「蒜山ジャージー牛」や冬の滋味「天然猪鍋（ぼたん鍋）」を味わう厳選名旅館・ホテル5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "T09:00:00+09:00",
        "dateModified": "T09:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "Croud Travel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "author": {
          "@type": "Organization",
          "name": "Croud Travel 中国地方山里名湯・美作美食取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-okayama-yubara-onsen-sunayu-hiruzen-wagyu-stay#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.pages.dev/"
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
            "name": "岡山・湯原温泉 初冬渓谷美と美作三湯名物砂湯・蒜山和牛の宿",
            "item": "https://croud-travel.pages.dev/winter-okayama-yubara-onsen-sunayu-hiruzen-wagyu-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-okayama-yubara-onsen-sunayu-hiruzen-wagyu-stay#faq",
        "mainEntity": faqList.map(f => ({
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

  const hotels = [
            {
              id: 1,
              name: "八景",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/177949/177949.jpg",
              rating: 4.48,
              reviews: 182,
              price: "¥7,040〜",
              access: "岡山駅からお車で1時間20分、中国自動車道落合JCTから米子自動車道へ　【湯原温泉IC】下車、10分",
              special: "リピーター様に愛される宿。料理の鉄人で活躍した料理長が腕を振るう！会席一品一品は【最高級の家庭料理】",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177949%2F177949.html",
              story: "清流・旭川の畔に佇み、温かなおもてなしと滋味あふれる里山料理で全国の温泉通から絶大な支持を集める極上の料理宿「八景（はっけい）」。名物露天風呂「砂湯」の対岸という絶好のロケーションに建ち、旭川の清流と初冬の渓谷美を間近に感じることができます。八景の代名詞は「山里の恵みを丁寧に紡いだ50品目のおもてなし会席。」。近隣の契約農家から毎朝届く新鮮な冬野菜や蒜山高原の恵み、清流川魚を熟練の職人が一品一品心を込めて仕立てます。川のせせらぎを聞きながら浸かる展望風呂や貸切露天風呂では、pH9.3のやわらかな源泉が冬の肌をやさしく潤してくれます。",
              roomTip: "旭川のせせらぎを望むリバービュー客室または和モダン客室。大きな窓から旭川の渓流と初冬の山並みを眺め、鳥のさえずりに耳を澄ます静かな時間。",
              gourmetTip: "「八景名物・冬の山里ごちそう会席」。蒜山ジャージー牛の特製陶板焼き、天然猪肉の滋味深いぼたん小鍋、50品目以上の冬野菜を彩り豊かに味わう逸品。",
              highlights: [
                "名物露天風呂「砂湯」の正面に佇む絶好の立地＆旭川のせせらぎを聞く展望露天風呂",
                "山里の旬素材50品目を味わう美食会席＆蒜山ジャージー牛陶板焼きと天然猪鍋",
                "全国の温泉ファンが絶賛する温かなおもてなし＆静謐な渓流美に抱かれる大人の隠れ宿"
              ]
            },
            {
              id: 2,
              name: "湯原温泉　我無らん　－ＧＡＭＥＬＡＮ－",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/56699/56699.jpg",
              rating: 4.65,
              reviews: 343,
              price: "¥11,000〜",
              access: "米子自動車道≪湯原ＩＣ≫を出て、国道３１３号線を湯原温泉方面へ約５分",
              special: "【全客室で24時間天然温泉】「源泉100％掛け流し」全室異なるバリステイストのプライベート空間",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56699%2F56699.html",
              story: "湯原温泉街の路地にひっそりと佇み、アジアの洗練されたリゾート空間と和の温もりが融合した大人のための隠れ家旅館「湯原温泉 我無らん（がむらん）」。わずか全客室に源泉掛け流しのプライベート温泉風呂が備わっており、24時間いつでも好きな時にpH9.3の名湯を独り占めできます。館内にはガムランの心地よい調べが流れ、バリ島直輸入のアジアン家具と柔らかな間接照明が非日常の癒やしを演出。夕食は地元の旬素材を活かした創作和会席で、蒜山ジャージー牛のステーキや美作の地酒とのマリアージュを個室ダイニングで贅沢に楽しめます。",
              roomTip: "全室源泉掛け流し風呂付きのデザイナーズルーム。バリ風の天蓋付きベッドや信楽焼の湯船を備え、カップルや大人のご褒美旅に最適。",
              gourmetTip: "「我無らん・冬の極上創作会席」。旨味濃厚な蒜山ジャージー牛のサーロインステーキ、美作産冬野菜の前菜盛り合わせ、旬の日本海直送鮮魚のお造り。",
              highlights: [
                "全室に源泉掛け流し風呂完備＆バリ島直輸入のアジアン家具が彩る大人の隠れ家リゾート",
                "個室ダイニングで味わう極上創作和会席＆蒜山ジャージー牛サーロインと美作地酒",
                "プライベート感を極めた贅沢空間＆ガムランの癒やしの音楽に包まれるカップルステイ"
              ]
            },
            {
              id: 3,
              name: "湯原温泉　ゆばらの宿　米屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8858/8858.jpg",
              rating: 4.10,
              reviews: 905,
              price: "¥7,590〜",
              access: "米子自動車道湯原ICから５分",
              special: "白壁と格子窓、なまこ壁が連なる宿場町風日本旅館。ロマンチック街道沿い、グルメ自慢の和風モダンなお宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8858%2F8858.html",
              story: "旭川沿いの温泉街に佇み、純和風の落ち着いた佇まいときめ細やかな料理でリピーターを魅了する料理自慢の名宿「湯原温泉 ゆばらの宿 米屋」。自家源泉から引く天然温泉は、加水・加温なしの贅沢な源泉掛け流しで、檜の香りが清々しい内湯や開放感あふれる岩露天風呂で心ゆくまで堪能できます。名物の夕食は、美作地方の郷土の味を現代風に昇華させた会席料理。11月・12月には脂が乗った天然猪肉を使った「ぼたん鍋」や、岡山県産の厳選黒毛和牛、冬の川魚の塩焼きが並び、地元の造り酒屋から仕入れた新酒の地酒とともに格別の宵を過ごせます。",
              roomTip: "落ち着いた情緒漂う純和室。窓を開けると旭川の爽やかな川風が吹き抜け、川のせせらぎをBGMに畳の上でゆったりと手足を伸ばせる空間。",
              gourmetTip: "「美作冬の味覚・天然猪肉ぼたん鍋と岡山牛会席。」。コク深い特製味噌で煮込む猪鍋、岡山県産黒毛和牛の陶板焼き、ふっくら焼き上げたアマゴの塩焼き。",
              highlights: [
                "加水加温一切なしの上質源泉掛け流し＆檜の香る内湯と旭川沿いの風情あふれる岩露天",
                "職人の技が光る本格郷土会席＆コク深い天然猪肉のぼたん鍋と岡山県産黒毛和牛",
                "湯原ICから車で5分のアクセス＆純和風の落ち着きある空間で楽しむ本格湯治旅"
              ]
            },
            {
              id: 4,
              name: "湯原温泉　湯原国際観光ホテル　菊之湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4776/4776.jpg",
              rating: 3.90,
              reviews: 1330,
              price: "¥6,380〜",
              access: "米子自動車道の湯原I.Cより車で5分",
              special: "露天風呂西の横綱「砂湯」まで徒歩約3分！ペット同伴可能な客室が5タイプ6室ございます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4776%2F4776.html",
              story: "創業百余年の伝統を誇り、湯原温泉街の中心に堂々たる威容を誇る老舗旅館「湯原温泉 湯原国際観光ホテル 菊之湯」。屋上に設けられた展望露天風呂からは、旭川の渓流と湯原ダム、温泉街の湯けむりが一望でき、初冬の澄んだ青空や夜の満天の星を眺めながらの湯浴みは爽快そのものです。毎分豊富な湯量を誇る自家源泉を大浴場や露天風呂に掛け流しで使用。夕食は料理長が厳選した旬の素材を惜しみなく盛り込んだ本格和食会席で、蒜山高原の乳製品や牛肉、季節の鍋料理など、岡山・美作の豊かな風土を味わい尽くすことができます。",
              roomTip: "旭川を見下ろす広々とした和室または和洋室。歴史ある老舗ならではの行き届いたおもてなしと、ゆったりとした広縁で過ごす優雅な休日。",
              gourmetTip: "「菊之湯伝統・美作味覚満喫会席」。蒜山ジャージー牛のすき焼き、冬の旬魚の薄造り、美作産黒豆を使った手作りデザートと季節の釜飯。",
              highlights: [
                "創業百余年の老舗旅館＆屋上パノラマ展望露天風呂から見晴らす旭川渓谷と湯原ダム",
                "美作の自然の恵みを網羅した伝統会席＆蒜山ジャージー牛すき焼きと冬のアマゴ塩焼き",
                "湯原温泉街の中心に位置し散策に便利＆老舗ならではの風格と細やかな気配り"
              ]
            },
            {
              id: 5,
              name: "大江戸温泉物語　輝乃湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30063/30063.jpg",
              rating: 3.81,
              reviews: 1434,
              price: "¥10,500〜",
              access: "JR姫新線中国勝山駅より路線バスで３０分//米子道湯原ＩＣよりＲ３１３経由車で約５分",
              special: "自然に囲まれた庭園露天風呂で湯原の良泉を満喫できる温泉宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30063%2F30063.html",
              story: "湯原温泉の豊かな自然に抱かれ、広大な庭園露天風呂と充実したエンターテインメント施設で幅広い世代に親しまれる大型温泉ホテル「大江戸温泉物語 輝乃湯（てるのゆ）」。旭川の清流を望む日本庭園の中にある広々とした露天風呂では、滾々と湧き出るpH9.3のアルカリ美肌湯に浸かりながら、初冬の澄んだ空気と山々の彩りを満喫できます。夕食は約60種類以上もの多彩なメニューが並ぶ豪華バイキングで、季節のフェア料理や握り寿司、揚げたて天ぷら、地元岡山の郷土料理が食べ放題。高いコストパフォーマンスで気兼ねなく楽しめる宿です。",
              roomTip: "明るく清潔感あふれる和室またはツインルーム。窓から緑豊かな庭園や山並みを望み、ファミリーやグループでも気兼ねなく寛げる安心の設備。",
              gourmetTip: "「冬の創作バイキング＆地元グルメフェア」。目の前で焼き上げる熱々ステーキ、新鮮なお刺身バイキング、岡山名物蒜山焼きそばや季節のスイーツ。",
              highlights: [
                "広大な日本庭園露天風呂の圧倒的な開放感＆約60種類の手作り創作ディナーバイキング",
                "シェフが目の前で焼く熱々ステーキや握り寿司食べ放題＆リーズナブルな高コスパ温泉旅",
                "卓球場やカラオケなど充実の館内施設＆三世代ファミリーやグループ旅行にも最適"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <header className="relative w-full h-[360px] sm:h-[480px] flex items-end justify-center bg-slate-900 text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
          alt="初冬の湯原温泉と旭川の清流"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold">
            <Flame className="w-4 h-4" />
            11月・12月 冬の渓谷美＆美肌名湯特集｜岡山・湯原温泉
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            初冬渓谷美と美作三湯・名物「砂湯」<br className="hidden sm:inline" />
            pH9.3アルカリ美肌自噴泉＆蒜山ジャージー牛会席の宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            全国露天風呂番付西の横綱「砂湯」。旭川の清流が織りなす初冬の静寂と、肌に吸い付く高アルカリ天然温泉・蒜山ジャージー牛を味わう極上ステイ。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-amber-400" /> 11月〜12月が初冬の旬</span>
            <span className="flex items-center gap-1"><Waves className="w-4 h-4 text-amber-400" /> pH9.3高アルカリ天然自噴泉</span>
            <span className="flex items-center gap-1"><Utensils className="w-4 h-4 text-amber-400" /> 蒜山ジャージー牛＆天然猪鍋</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Section 1: Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <SunMedium className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Valley Heritage & Natural River Bath</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                美作三湯の筆頭・湯原温泉が魅せる初冬の風情｜11月・12月に訪れる理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              岡山県北部の緑深い山々と、旭川（あさひがわ）の清らかな水流が育んだ「湯原温泉（ゆばらおんせん）」。奥津温泉、湯郷温泉とともに「美作三湯（みまさかさんとう）」と称され、古くは出雲街道の宿場町・湯治場として栄えた千数百年の歴史を誇る名湯です。
            </p>
            <p>
              11月から12月にかけて、中国山地が晩秋の錦秋から初冬の静謐な季節へと移り変わる頃、湯原温泉街は川沿いに立ち上る白い湯けむりと冷涼な空気に包まれます。旭川の川底から毎分6,000リットルもの湯が自然自噴し、その圧倒的な湯量を誇る川原の天然大露天風呂「砂湯」は、かつて全国露天風呂番付で「西の横綱」に格付けされた日本屈指の名勝露天風呂です。
            </p>
            <p>
              冷たい冬の風を頬に感じながら、滾々と湧き出る源泉に身を沈めれば、旭川の清流のせせらぎが心地よい子守唄のように響きます。近隣の蒜山高原がもたらす極上の乳牛「蒜山ジャージー牛」や、冬の里山の滋味「天然猪鍋（ぼたん鍋）」など、この地ならではの濃厚な美食が揃う初冬こそ、湯原温泉の真髄を味わえる絶好のシーズンです。
            </p>
          </div>
        </section>

        {/* Section 2: Onsen Features */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">High-Alkaline Pure Spring</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                pH9.3の圧倒的とろみ肌｜湯原温泉の天然自噴泉と美肌効果
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              湯原温泉の源泉は、旭川の川底の岩盤の割れ目から自噴しており、一切の動力揚水や加水を行わない自然の恵みそのままの純粋な温泉です。
            </p>
            <p>
              泉質は「アルカリ性単純温泉（低張性アルカリ性高温泉）。」で、泉温は約45〜50℃前後と入浴に極めて適した絶妙な温度です。最大の特徴は、pH9.3という全国的にも珍しいほどの高いアルカリ度を誇る点です。アルカリ性温泉は、皮膚の表面にある余分な皮脂や古い角質を石鹸のようにやさしく乳化させて洗い流す作用があり、湯船に浸かった瞬間から肌がツルツル、スベスベになる感触がはっきりと実感できます。
            </p>
            <p>
              無色透明で硫黄臭などの癖がなく、肌への刺激が非常に少ないため、「美人の湯」「美肌の湯」として古くから女性や湯治客に深く愛されてきました。入浴後は肌がしっとりと潤い、冬の乾燥から肌を守りながら、血行促進によって手足の末端までぽかぽかと温めてくれます。
            </p>
          </div>
        </section>

        {/* Section 3: Winter Gourmet */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Hiruzen Beef & Winter Gibier</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                蒜山ジャージー牛の芳醇と冬の味覚「天然猪鍋（ぼたん鍋）」
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              湯原温泉の食卓を華やかに彩るのは、北に隣接する日本屈指の高原リゾート・蒜山（ひるぜん）高原の大自然が育んだ至高の恵みです。
            </p>
            <p>
              その代表格が「蒜山ジャージー牛」です。一般的な乳牛用として知られるジャージー種ですが、赤身肉の旨味が驚くほど濃厚で、適度に入った上質な脂の甘みが肉通を唸らせます。香ばしく焼き上げるステーキや陶板焼き、またはすき焼きで味わえば、噛むほどに肉本来の野趣あふれるジューシーな旨味が口中に広がり、一般的な黒毛和牛とは一味違う深いコクを堪能できます。
            </p>
            <p>
              そして11月から12月にかけて解禁となる冬の風物詩が「天然猪肉（ぼたん肉）」です。中国山地の自然の中でドングリや栗をたっぷり食べて丸々と太った野生の猪は、臭みが全くなく、脂身に独特の甘みと弾力があります。地元・真庭産の特製味噌と地酒、冬野菜をたっぷり使って煮込む「ぼたん鍋」は、スープのコクと猪肉の旨味が溶け合い、身体の底から活力が湧き出る冬の究極の鍋料理です。美作の地酒「御前酒」の新酒とともに味わえば、至福の晩餐が完成します。
            </p>
          </div>
        </section>

        {/* Section 3.5: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Yubara Winter Scenic Course</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の湯原・蒜山1泊2日ドライブモデルコース｜西の横綱砂湯と高原スイーツ・名湯旅
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              <strong>【1日目】</strong><br />
              米子自動車道「湯原IC」を降り、まずは車で約20分の「蒜山（ひるぜん）高原」へ。初冬の澄み渡る空気の中、雄大な蒜山三座を望む「ひるぜんジャージーランド」で、濃厚なジャージーヨーグルトやソフトクリームを味わいます。お昼は名物・蒜山焼きそばや高原野菜のランチ。
            </p>
            <p>
              午後は湯原温泉街へ戻り、旭川沿いの遊歩道を散策しながら名物露天風呂「砂湯」へ。湯原ダムを見上げる大迫力のロケーションと、川底からプクプクと湧き出る自噴泉の足湯を体験します。15時に温泉旅館へチェックイン。pH9.3のアルカリ美肌湯にゆっくり浸かり、旅の疲れを完全に浄化。夕食には名物・蒜山ジャージー牛のステーキと天然猪肉のぼたん鍋を堪能し、美作の銘酒とともに寛ぎます。
            </p>
            <p>
              <strong>【2日目】</strong><br />
              旭川のせせらぎを聞きながら朝湯を浴びた後、チェックアウト。車で約25分の「勝山町並み保存地区」へ立ち寄り、白壁と格子窓が続く美しい街道を散策。老舗酒蔵「辻本店（御前酒）」で初冬のしぼりたて新酒をお土産に買い求め、充実した思い出とともに帰路につきます。
            </p>
          </div>
        </section>

        {/* Section 4: 5 Selected Inns */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Featured Yubara Onsen Ryokan</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              pH9.3名湯と美作の美食に癒やされる｜湯原温泉の厳選宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              すべて楽天トラベルで高い評価を獲得し、自慢のアルカリ美肌天然温泉や蒜山ジャージー牛・猪鍋会席を誇る本物の宿を厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-5/12 relative h-64 md:h-auto min-h-[260px] bg-slate-100 flex-shrink-0">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                    <span className="text-amber-400 font-extrabold">#{h.id}</span>
                    <span>湯原の名宿</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    目安料金: {h.price}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {h.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-amber-50 text-amber-900 px-2.5 py-1 rounded-full text-xs font-semibold border border-amber-200/60">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{h.rating}</span>
                        <span className="text-slate-500 font-normal">({h.reviews}件)</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-amber-900 flex items-center gap-1.5">
                          <Landmark className="w-3.5 h-3.5 text-amber-700" />
                          客室・滞在のこだわり
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {h.roomTip}
                        </p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-sky-900 flex items-center gap-1.5">
                          <Utensils className="w-3.5 h-3.5 text-sky-700" />
                          旬の極上グルメ
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {h.gourmetTip}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                        この宿のおすすめポイント
                      </div>
                      <ul className="space-y-1.5">
                        {h.highlights.map((item, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-[11px] text-slate-500">
                      <span>交通: {h.access}</span>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-sm hover:shadow transition group flex-shrink-0"
                    >
                      <span>楽天トラベルでプランを見る</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Travel Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Seasonal Advice</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の湯原温泉旅行｜渓谷の冷え込みと砂湯の湯浴み着マナー
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-amber-800" />
                山間部の寒暖差と暖かい重ね着
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                湯原温泉は旭川沿いの谷あいに位置するため、朝晩は放射冷却でぐっと冷え込みます。昼間は日差しがあれば暖かい日も多いですが、夕暮れ以降や早朝に川沿いを散策する際は、風を通さない厚手のコートやダウン、マフラー、手袋を着用してください。湯上がり後の湯冷めを防ぐためにも防寒対策は大切です。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-amber-800" />
                名物「砂湯」の利用と湯浴み着レンタル
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                24時間無料で入れる天然露天風呂「砂湯」は混浴ですが、女性でも気兼ねなく楽しめるよう、湯原温泉街の各旅館や観光案内所で「湯浴み着（レンタルまたは販売）」が用意されています。水着の着用も可能です。脱衣所も整備されており、マナーを守って爽快な川原露天の絶景を楽しみましょう。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                岡山・湯原温泉冬旅のよくある質問（FAQ）
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-amber-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Internal Links */}
        <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Related Western Japan & Onsen Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい中国地方・西日本の冬名湯＆山里美食特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の冬の味覚、ラジウム温泉、美肌名湯をめぐる人気特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-tottori-misasa-onsen-snow-radium-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">鳥取・三朝温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">高濃度ラジウム泉と11月解禁松葉ガニ・初冬の河原風呂の宿</h3>
            </Link>
            <Link 
              href="/winter-shimane-tamatsukuri-onsen-cosmetic-water-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">島根・玉造温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">日本最古の美肌温泉と冬の山陰松葉ガニ・玉湯川散策の宿</h3>
            </Link>
            <Link 
              href="/winter-yamaguchi-shimonoseki-kawatana-onsen-torafugu-kawarasoba-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">山口・下関と川棚温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">本場とらふぐ解禁美食と元祖瓦そば・開湯八百年ラジウム泉の宿</h3>
            </Link>
            <Link 
              href="/winter-hyogo-kinosaki-onsen-snow-7-baths-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">兵庫・城崎温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">志賀直哉ゆかりの外湯めぐりと冬の津居山ガニフルコースの宿</h3>
            </Link>
            <Link 
              href="/winter-shiga-ogoto-onsen-biwako-omigyu-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">滋賀・おごと温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">初冬びわ湖景観と開湯千二百年美肌霊泉・特選近江牛の宿</h3>
            </Link>
            <Link 
              href="/winter-ehime-dogo-onsen-snow-botan-taimeshi-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">愛媛・道後温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">日本最古の名湯本館と宇和海鯛めし・湯菜美肌の宿</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-okayama-yubara-onsen-sunayu-hiruzen-wagyu-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
