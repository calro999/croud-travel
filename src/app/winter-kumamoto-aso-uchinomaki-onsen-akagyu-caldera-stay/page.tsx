import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Fish, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月熊本・阿蘇内牧温泉の初冬阿蘇五岳絶景と名物あか牛】名湯掛け流し湯巡り＆極上あか牛溶岩焼きと特選馬刺しを味わう厳選宿5選",
  description: "11月から12月にかけて、世界最大級のカルデラに抱かれた熊本県「阿蘇内牧（うちのまき）温泉」は、広大な草原が黄金色のススキから白銀の初霜・初雪へと移ろい、澄み切った大気の中に阿蘇五岳の涅槃像（ねはんぞう）が荘厳に浮かび上がる初冬の絶景シーズンを迎えます。約80ヶ所もの豊富な源泉から湧き出る天然温泉は、多くの文豪も愛した名湯掛け流し。冷えた身体を湯浴みで芯から温めた後は、赤身の旨味が凝縮した熊本名物「あか牛」の溶岩焼きステーキやすき焼き、鮮度抜群の特選霜降り馬刺しを味わい尽くす厳選名宿5選を徹底解説します。",
  keywords: '阿蘇内牧温泉 宿泊, 阿蘇 温泉 11月 12月, 阿蘇 あか牛 溶岩焼き, 熊本 馬刺し 温泉, 阿蘇五岳 涅槃像, 蘇山郷, 阿蘇プラザホテル, 湯巡追荘, ホテル角萬, 親和苑',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kumamoto-aso-uchinomaki-onsen-akagyu-caldera-stay/"
  },
  openGraph: {
    title: "【11・12月熊本・阿蘇内牧温泉の初冬阿蘇五岳絶景と名物あか牛】名湯掛け流し湯巡り＆極上あか牛溶岩焼きと特選馬刺しを味わう厳選宿5選",
    description: "11月から12月にかけて、世界最大級のカルデラに抱かれた熊本県「阿蘇内牧（うちのまき）温泉」は、広大な草原が黄金色のススキから白銀の初霜・初雪へと移ろい、澄み切った大気の中に阿蘇五岳の涅槃像（ねはんぞう）が荘厳に浮かび上がる初冬の絶景シーズンを迎えます。約80ヶ所もの豊富な源泉から湧き出る天然温泉は、多くの文豪も愛した名湯掛け流し。冷えた身体を湯浴みで芯から温めた後は、赤身の旨味が凝縮した熊本名物「あか牛」の溶岩焼きステーキやすき焼き、鮮度抜群の特選霜降り馬刺しを味わい尽くす厳選名宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-kumamoto-aso-uchinomaki-onsen-akagyu-caldera-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の阿蘇五岳と内牧温泉の絶景'
      }
    ]
  }
};

const faqList = [
  {
    "q": "阿蘇内牧温泉の歴史や泉質、特徴について教えてください。",
    "a": "阿蘇内牧（うちのまき）温泉は、阿蘇カルデラ内最大の温泉地であり、約百三十年以上の歴史を誇る名湯です。阿蘇外輪山と阿蘇五岳に囲まれた平野部に位置し、町内には約80ヶ所もの泉源が存在します。そのため宿ごとに自家源泉を持ち、その多くが加水・循環なしの「源泉掛け流し」で提供されているのが最大の特徴です。泉質はナトリウム・カルシウム・マグネシウム-硫酸塩・炭酸水素塩泉（中性〜弱アルカリ性）が多く、肌の角質をやさしく落としてしっとり潤す「美肌の湯」として親しまれています。かつて夏目漱石や与謝野鉄幹・晶子夫妻ら文豪も訪れ、その情緒を作品に残しています。"
  },
  {
    "q": "11月・12月の阿蘇の気候や気温、草千里の初冬風景は？",
    "a": "阿蘇地域は標高が高いため、九州でありながら冬の寒さは本格的です。11月の最高気温は12〜15℃、最低気温は3〜6℃前後ですが、朝晩は0℃近くまで冷え込む日があります。12月に入ると最高気温は7〜10℃、最低気温は氷点下（-2〜-5℃）まで下がり、阿蘇五岳の山頂付近や草千里ヶ浜では初霜や初雪が見られるようになります。広大な草千里ヶ浜は、初冬の澄み切った青空の下、霜が降りた白い草原と凍結した池が織りなす幻想的な冬景色が広がります。観光の際は厚手のダウンコート、手袋、マフラーなどのしっかりとした防寒着をご用意ください。峠越えをする場合はスタッドレスタイヤが必要です。"
  },
  {
    "q": "阿蘇名物「あか牛（褐毛和種）」の美味しさの秘密とは？",
    "a": "熊本の誇る「くまもとあか牛」は、阿蘇の広大な大草原で放牧され、清らかな名水と野草を食べてのびのびと育つ褐毛（あかげ）和種です。一般的な黒毛和牛に比べて余分な脂肪分が少なく、赤身肉の割合が高いのが最大の特徴。肉本来の力強い旨味と濃厚なアミノ酸が凝縮されており、脂っぽさがなくヘルシーでいくらでも美味しく食べられます。阿蘇溶岩プレートで香ばしく焼き上げる溶岩焼きステーキ、すき焼き、あか牛丼など、噛むほどに溢れ出すジューシーな肉汁は感動的な美味しさです。"
  },
  {
    "q": "本場熊本の「特選馬刺し」と郷土料理の魅力について教えてください。",
    "a": "熊本は日本一の馬肉消費量と生産量を誇る馬肉の本場です。阿蘇内牧温泉の宿で提供される馬刺しは、鮮度抜群で鮮やかな赤身と極上のサシが入った「霜降り馬刺し」。口に含むと体温でとろけるような甘みがあり、おろし生姜やおろしニンニクを添えて甘口の九州醤油で味わうのが本場のスタイルです。さらに、レンコンの穴に和辛子と味噌を詰めて揚げた「辛子蓮根」や、小麦粉のだんごを季節の野菜と煮込んだ郷土汁「だご汁」、ピリッとした辛味と旨味が絶妙な「阿蘇高菜飯」など、心温まる郷土の味が揃っています。"
  },
  {
    "q": "熊本駅・阿蘇くまもと空港から内牧温泉へのアクセス方法は？",
    "a": "阿蘇くまもと空港からは、レンタカーまたはタクシーで国道57号経由で約40分です。公共交通機関の場合は、空港ライナーでJR肥後大津駅へ出て、JR豊肥本線で「阿蘇駅」まで約35分。阿蘇駅からは産交バス（内牧温泉行き）で約10〜15分、またはタクシーで約10分で各温泉宿に到着します。JR熊本駅からは、特急「あそぼーい！」「九州横断特急」で阿蘇駅まで直通約1時間15分です。車の場合は、九州自動車道「熊本IC」より国道57号（北側復旧道路・阿蘇大橋）経由で約50分と道路アクセスも良好です。"
  }
];

export default function KumamotoAsoUchinomakiWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-kumamoto-aso-uchinomaki-onsen-akagyu-caldera-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-kumamoto-aso-uchinomaki-onsen-akagyu-caldera-stay"
        },
        "headline": "【11・12月熊本・阿蘇内牧温泉の初冬阿蘇五岳絶景と名物あか牛】名湯掛け流し湯巡り＆極上あか牛溶岩焼きと特選馬刺しを味わう厳選宿5選",
        "description": "11月から12月にかけて、世界最大級のカルデラに抱かれた熊本県「阿蘇内牧（うちのまき）温泉」は、広大な草原が黄金色のススキから白銀の初霜・初雪へと移ろい、澄み切った大気の中に阿蘇五岳の涅槃像（ねはんぞう）が荘厳に浮かび上がる初冬の絶景シーズンを迎えます。約80ヶ所もの豊富な源泉から湧き出る天然温泉は、多くの文豪も愛した名湯掛け流し。冷えた身体を湯浴みで芯から温めた後は、赤身の旨味が凝縮した熊本名物「あか牛」の溶岩焼きステーキやすき焼き、鮮度抜群の特選霜降り馬刺しを味わい尽くす厳選名宿5選を徹底解説します。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T12:00:00+09:00",
        "dateModified": "2026-09-28T12:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "Croud Travel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "author": {
          "@type": "Organization",
          "name": "Croud Travel 九州・大自然名湯取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.com/winter-kumamoto-aso-uchinomaki-onsen-akagyu-caldera-stay#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "特集一覧",
            "item": "https://croud-travel.com/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "熊本・阿蘇内牧温泉 初冬阿蘇五岳絶景と名物あか牛の宿",
            "item": "https://croud-travel.com/winter-kumamoto-aso-uchinomaki-onsen-akagyu-caldera-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-kumamoto-aso-uchinomaki-onsen-akagyu-caldera-stay#faq",
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
              name: "蘇る山と故郷　阿蘇内牧温泉　蘇山郷",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/31687/31687.jpg",
              rating: 4.47,
              reviews: 644,
              price: "¥13,200〜",
              access: "【車】熊本IC⇒R57⇒北側復旧ルート経由⇒内牧温泉　【公共機関】JR阿蘇駅⇒内牧温泉行きバス⇒商工会前バス停⇒徒歩2分",
              special: "源泉かけ流し温泉24時間入浴可『大浴場』『貸切風呂』『露天付客室』あり。阿蘇のあか牛と郷土会席が自慢",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31687%2F31687.html",
              story: "昭和初期、文豪・与謝野鉄幹と晶子夫妻が滞在し短歌を詠んだ歴史を誇り、阿蘇五岳の絶景と掛け流しの湯を静かに愛でる名門旅館「蘇る山と故郷 阿蘇内牧温泉 蘇山郷（そざんきょう）」。館内はどこか懐かしく温かな和モダンテイストで統一され、大人の上質な旅情を誘います。自家源泉から注がれる温泉は、加水・加温・循環一切なしの完全掛け流し100%の弱アルカリ性単純温泉。やわらかな肌触りで、入るほどに旅の疲れをほぐしてくれます。屋上には阿蘇五岳の涅槃像を360度パノラマで見渡す「星空BAR」が設けられ、初冬の澄んだ夜空に輝く満天の星と地酒を楽しめます。夕食は熊本・阿蘇の恵みを五感で味わう創作会席。阿蘇の草原で育った「あか牛」の阿蘇溶岩プレート焼き、朝採れの地元高原野菜、極上霜降り馬刺しなど、郷土愛あふれる料理が贅沢に並びます。",
              roomTip: "阿蘇五岳を望むテラス付き和モダンツインまたは温泉半露天付き客室。初冬の朝、凛とした空気の中で茜色に染まる阿蘇の山並みを眺める至高の目覚め。",
              gourmetTip: "「料理長特選・冬の阿蘇味覚会席」。阿蘇溶岩プレートで香ばしく焼くあか牛サーロイン、特選極上霜降り馬刺し、自家製辛子蓮根、阿蘇高菜と土鍋炊きご飯。",
              highlights: [
                "文豪・与謝野夫妻逗留の歴史ある名宿＆屋上星空BARから望む阿蘇五岳とあか牛溶岩焼き",
                "完全源泉掛け流し100%の弱アルカリ性美肌湯＆阿蘇溶岩プレートで焼き上げる極上あか牛",
                "全館に漂う洗練された和モダン情緒＆大人の記念日旅行や一人旅にも選ばれる上質な空間"
              ]
            },
            {
              id: 2,
              name: "阿蘇内牧温泉　阿蘇プラザホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/44868/44868.jpg",
              rating: 3.98,
              reviews: 545,
              price: "¥7,000〜",
              access: "ＪＲ阿蘇駅よりバスにて１０分",
              special: "人気の展望露天風呂から阿蘇のパノラマビューを満喫！旬の会席を堪能♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44868%2F44868.html",
              story: "内牧温泉の高台に位置し、阿蘇五岳の全景を真正面に捉える大自然パノラマビューが圧巻の大型リゾート旅館「阿蘇内牧温泉 阿蘇プラザホテル」。ホテルの最大の自慢は、本館最上階（7階）に設けられた展望露天風呂「昇龍の手湯・空峰の湯」です。湯船の縁に身を乗り出すと、眼下には初冬の内牧の田園風景が広がり、正面には釈迦の涅槃像に例えられる阿蘇五岳の雄姿がくっきりと迫ります。朝霧が立ち込める早朝の雲海や、夕暮れに赤く染まるマジックアワーの湯浴みは息を呑む美しさ。夕食はお食事処にて味わう阿蘇の郷土会席。阿蘇名物「あか牛」の陶板焼きステーキをはじめ、熊本直送の新鮮な馬刺し、季節の小鍋料理など、ボリュームと美味しさを兼ね備えたメニューが揃います。",
              roomTip: "阿蘇五岳を真正面に望むマウンテンビュー和洋室。大きな窓一面に広がる大カルデラの初冬風景を眺めながら、心洗われる贅沢なひととき。",
              gourmetTip: "「阿蘇五岳満喫・あか牛と馬刺しの贅沢会席」。ジューシーなあか牛の陶板焼き、とろける特選馬刺し三種盛り、肥後野菜の炊き合わせ、阿蘇名物だご汁。",
              highlights: [
                "最上階展望露天風呂「空峰の湯」から阿蘇五岳涅槃像を一望＆あか牛と馬刺しの贅沢会席",
                "大カルデラを見晴らすパノラマビュー＆早朝の雲海や夕暮れのマジックアワーを堪能",
                "大自然のスケール感を味わえる大型リゾート＆阿蘇観光の拠点に最適なロケーション"
              ]
            },
            {
              id: 3,
              name: "阿蘇内牧温泉　湯巡追荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/52819/52819.jpg",
              rating: 4.27,
              reviews: 1517,
              price: "¥7,150〜",
              access: "ＪＲ阿蘇駅より車で１５分",
              special: "15種の貸切家族風呂！食べ放題×飲み放題のバイキング！家族みんなで楽しめるオールインクルーシブの宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52819%2F52819.html",
              story: "「温泉をとことん楽しむ」をテーマに、趣の異なる多彩な無料貸切家族風呂やエンターテインメント性あふれる館内施設で圧倒的な人気を誇る「阿蘇内牧温泉 湯巡追荘（ゆめぐいそう）」。敷地内に湧く豊富な天然温泉はすべて掛け流しで、10室以上ある貸切家族風呂は宿泊者なら何度でも無料で利用可能。初冬の澄んだ夜風を感じながら、カップルやファミリーで気兼ねなく湯巡りを満喫できます。さらに湯巡追荘の名物といえば、ライブ感あふれる豪華バイキング。鉄板で焼き上げる熊本県産あか牛のステーキや特選霜降り肉、新鮮な握り寿司、揚げたて天ぷらが食べ放題で提供され、アルコールを含むドリンク類も飲み放題。心ゆくまで阿蘇の美味を満喫したい旅人にぴったりの宿です。",
              roomTip: "露天風呂付きモダン和洋室。自分たち専用の湯船でいつでも掛け流しの湯を楽しめ、湯上がり後は畳リビングでゆったりとくつろげる快適な空間。",
              gourmetTip: "「名物・あか牛ステーキ＆国産牛食べ放題豪華ディナーバイキング」。シェフが目の前で焼くあか牛ステーキ、熊本名物馬刺し、旬の海鮮寿司、ドリンク飲み放題付き。",
              highlights: [
                "多彩な無料貸切家族風呂が使い放題＆あか牛ステーキ食べ放題バイキングと飲み放題",
                "源泉掛け流し客室露天風呂＆ファミリーやカップルで気兼ねなく楽しめるエンタメ満載",
                "宿泊者満足度の高い充実の無料サービス＆温泉好きを唸らせる多彩な浴槽巡り"
              ]
            },
            {
              id: 4,
              name: "阿蘇内牧温泉　ホテル角萬（ＢＢＨホテルグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/75244/75244.jpg",
              rating: 4.10,
              reviews: 1279,
              price: "¥9,000〜",
              access: "九州道熊本ＩＣより車約50分、ＪＲ豊肥線阿蘇駅よりタクシー約7分、阿蘇熊本空港より車約40分。",
              special: "阿蘇五岳を一望。 源泉かけ流しが誇る、至福の湯宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75244%2F75244.html",
              story: "阿蘇内牧温泉の静かな中心街に佇み、阿蘇五岳を仰ぎ見る開放的な庭園露天風呂と広々とした客室が魅力の名門「阿蘇内牧温泉 ホテル角萬（ＢＢＨホテルグループ）」。敷地内から湧き出る良質な自家源泉は、湯量豊富で源泉掛け流し。広々とした大浴場や野趣あふれる岩造りの庭園露天風呂では、初冬の冷たく澄んだ阿蘇の空気を感じながら、体の芯までじっくりと温まることができます。夕食は熊本の味覚を贅沢に味わう和食膳またはディナービュッフェ。ヘルシーで噛むほどに旨味が溢れる「あか牛ステーキ」付きプランや、本場熊本の特選馬刺し、郷土料理のだご汁など、旅人の期待を裏切らない充実したお料理が並びます。リーズナブルな価格設定で満足度の高い滞在が叶います。",
              roomTip: "庭園または阿蘇の山並みを望む落ち着いた和室または和洋室。足を伸ばしてリラックスできる広さがあり、家族旅行やグループ旅行にも最適。",
              gourmetTip: "「あか牛ステーキ付き・冬の特選和食膳」。柔らかなあか牛の鉄板ステーキ、鮮度抜群の熊本馬刺し、季節の小鉢、阿蘇高菜ご飯と温かいだご汁。",
              highlights: [
                "庭園露天風呂と自家源泉掛け流し湯＆あか牛ステーキ付き御膳と広々とした和室ステイ",
                "阿蘇の自然に囲まれた静かな立地＆コスパ抜群で楽しむ本場熊本の郷土味覚",
                "阿蘇内牧温泉街の散策に便利＆温かなホスピタリティで寛げるアットホームな宿"
              ]
            },
            {
              id: 5,
              name: "阿蘇内牧温泉　御料理旅館　親和苑",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38542/38542.jpg",
              rating: 4.52,
              reviews: 196,
              price: "¥14,100〜",
              access: "肥後豊肥線　阿蘇駅より車で１５分程／肥後豊肥線　内牧駅より車で１５分程",
              special: "料理長が贈る美味しい芸術！【源泉掛け流し】露天風呂（男女別）／貸切家族風呂／離れ露天風呂付客室あり",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38542%2F38542.html",
              story: "内牧温泉の奥座敷、美しい日本庭園と田園風景に囲まれたわずか10室のみの隠れ家「阿蘇内牧温泉 御料理旅館 親和苑（しんわえん）」。その名の通り「料理」に情熱を注ぐ館主が、自家菜園で無農薬・有機栽培された約30種類の新鮮野菜やハーブ、阿蘇の清らかな湧水を使って極上の創作料理を紡ぎ出します。自家源泉の掛け流し温泉は、露天風呂「かくれの湯」や趣ある貸切風呂で楽しめ、弱アルカリ性の柔らかな湯が肌をしっとりと包み込みます。夕食は旬の山川の恵みを凝縮した手作り会席。あか牛の炭火ローストビーフ、阿蘇名水で育ったヤマメの塩焼き、採れたて冬野菜のせいろ蒸しなど、一品一品に料理人の真心と職人技が宿る至福の美食体験を約束してくれます。",
              roomTip: "日本庭園に面した離れ客室または露天風呂付き客室。初冬の静まり返る里山の風情に抱かれ、誰にも邪魔されない極上のプライベートステイ。",
              gourmetTip: "「親和苑名物・冬の自家菜園野菜とあか牛創作会席」。あか牛の自家製ローストビーフ、採れたて冬野菜の炭火焼き、山女魚の塩焼き、季節の特製手打ち蕎麦。",
              highlights: [
                "わずか10室の大人の料理隠れ宿＆自家菜園の無農薬野菜とあか牛・ヤマメ創作会席",
                "離れ客室で過ごす静寂の里山時間＆料理長の手作り料理と美肌の掛け流し露天風呂",
                "全国の美食家がリピートする高い評価＆心温まるおもてなしが息づく隠れ宿"
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
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
          alt="初冬の阿蘇五岳と内牧温泉の絶景"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/20 backdrop-blur-md border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-semibold">
            <Mountain className="w-4 h-4" />
            11月・12月 阿蘇五岳絶景＆名物あか牛特集｜熊本・阿蘇内牧温泉
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            初冬阿蘇五岳絶景と名物あか牛<br className="hidden sm:inline" />
            名湯掛け流し湯巡り＆極上あか牛溶岩焼きと特選馬刺しを味わう厳選宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            初雪冠する阿蘇五岳・涅槃像と草千里ヶ浜の白銀。文豪が愛した豊富な源泉掛け流し湯で温まり、赤身の旨味が凝縮したあか牛溶岩焼きと極上霜降り馬刺しに舌鼓を打つ冬の熊本旅。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-rose-400" /> 11月〜12月が草千里初冬絶景の旬</span>
            <span className="flex items-center gap-1"><Waves className="w-4 h-4 text-rose-400" /> 約80の泉源誇る美肌の掛け流し名湯</span>
            <span className="flex items-center gap-1"><Utensils className="w-4 h-4 text-rose-400" /> 名物あか牛溶岩焼き＆特選霜降り馬刺し</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Section 1: Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-100">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-800">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Caldera Majesty & Akagyu Beef</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の大カルデラと豊かな湧水温泉｜11月・12月に阿蘇内牧温泉を訪れるべき理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              世界屈指の規模を誇る阿蘇カルデラ。そのカルデラ底の広大な平野部に位置し、阿蘇地方最大の温泉郷として古くから親しまれてきたのが「阿蘇内牧（うちのまき）温泉」です。初冬の11月から12月にかけて、広大な阿蘇の外輪山や草原は、秋の黄金色のススキから初霜・初雪が降りる静謐な白銀の世界へとドラマチックに移り変わります。澄み切った冷気の中、北側から望む阿蘇五岳は、お釈迦様が仰向けに寝ている姿に見える「涅槃像（ねはんぞう）」として神秘的なシルエットを浮かび上がらせます。
            </p>
            <p>
              内牧温泉の真の魅力は、その圧倒的な湯量と源泉の豊富さにあります。温泉街一帯に約80ヶ所もの泉源が点在し、各旅館が独自の自家源泉を保有。そのほとんどが加水や循環を行わない「本物の源泉掛け流し」で注がれています。中性から弱アルカリ性のやわらかな湯は、カルシウムや硫酸塩、炭酸水素塩をバランスよく含み、冬の冷たい外気でこわばった筋肉をやさしくほぐし、肌をつるつるに整えてくれます。
            </p>
            <p>
              そして阿蘇の夜を極上の時間に昇華させるのが、大自然の恵みが詰まった名物グルメ。阿蘇の大草原で育った褐毛和種「くまもとあか牛」は、赤身の豊かなコクとヘルシーな旨味が際立ち、熱々の阿蘇溶岩プレートで焼き上げるステーキは噛むほどに芳醇な肉汁が溢れます。さらに本場熊本の鮮度抜群な極上霜降り馬刺し、自家製辛子蓮根、阿蘇名水で仕込んだ地酒など、冬の熊本旅ならではの贅沢な美味が五感を満たしてくれます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-rose-900 text-sm">
                <Mountain className="w-4 h-4 text-rose-600" />
                阿蘇五岳涅槃像の初冬絶景
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                澄んだ初冬の青空に浮かぶ阿蘇五岳涅槃像。大観峰や展望露天風呂から望む感動的なカルデラパノラマ。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-rose-900 text-sm">
                <Waves className="w-4 h-4 text-rose-600" />
                約80の泉源・自家源泉掛け流し
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                文豪も愛した名湯。豊富な湯量を誇る弱アルカリ性美肌泉が、冬の冷えた身体を芯まで温める。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-rose-900 text-sm">
                <Utensils className="w-4 h-4 text-rose-600" />
                名物あか牛溶岩焼き＆特選馬刺し
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                赤身の旨味が凝縮したあか牛の溶岩ステーキと、口の中でとろける極上霜降り馬刺しの贅沢会席。
              </p>
            </div>
          </div>
        </section>

        {/* Section 1.5: Caldera Landscape & Mythological Geography */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-100">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-800">
              <Mountain className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Caldera & Mythological Vistas</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                南北25kmの外輪山が抱く大カルデラと初冬の雲海に浮かぶ涅槃像
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              阿蘇カルデラは、約27万年前から9万年前にかけて発生した4度の大規模火砕流噴火によって大地が陥没して誕生した、東西約18km、南北約25kmにおよぶ世界最大級の窪地です。そのカルデラの中央にそびえる高岳、中岳、根子岳、烏帽子岳、杵島岳の「阿蘇五岳」は、北側の内牧温泉から眺めると、まさに巨大な釈迦が胸の上に手を組んで静かに横たわっているかのような神秘的なシルエットを描きます。
            </p>
            <p>
              11月から12月にかけての初冬、夜間の放射冷却によってカルデラ底に冷気が溜まると、早朝に雲海が発生しやすくなります。外輪山の大観峰から見下ろすと、真っ白な雲海原の海原から阿蘇五岳の頂だけが島のように突き出す光景は、息を呑むほど神々しい神話の世界そのものです。
            </p>
          </div>
        </section>

        {/* Section 2: Hotel Cards */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-rose-700 tracking-wider uppercase">Selected Onsen Ryokan</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              【阿蘇内牧温泉】初冬の絶景とあか牛・名湯掛け流しを堪能する厳選宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
              文豪ゆかりの名宿、最上階パノラマ露天風呂、貸切風呂巡り、美食料理旅館など厳選して詳しく紹介します。
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((h) => (
              <div 
                key={h.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-all flex flex-col md:flex-row"
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    第{h.id}位
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 bg-rose-50 text-rose-800 rounded-md">
                        {h.special}
                      </span>
                      <div className="flex items-center gap-1 text-rose-500 font-bold text-sm">
                        <Star className="w-4 h-4 fill-rose-400 text-rose-400" />
                        <span>{h.rating}</span>
                        <span className="text-slate-400 text-xs font-normal">({h.reviews.toLocaleString()}件)</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-rose-700 transition-colors">
                      <a href={h.url} target="_blank" rel="noopener noreferrer">
                        {h.name}
                      </a>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100">
                        <span className="font-bold text-rose-900 block mb-1">【客室のこだわり】</span>
                        <p className="text-slate-600">{h.roomTip}</p>
                      </div>
                      <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-100">
                        <span className="font-bold text-amber-900 block mb-1">【冬の味覚プラン】</span>
                        <p className="text-slate-600">{h.gourmetTip}</p>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2">
                      <span className="text-xs font-bold text-slate-700 block">おすすめのハイライト：</span>
                      {h.highlights.map((hl: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <span className="text-[11px] text-slate-400 block">参考宿泊料金（2名1室時・1名あたり）</span>
                      <div className="text-xl font-extrabold text-rose-700">{h.price}</div>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-sm hover:shadow transition-all"
                    >
                      楽天トラベルで空室・プランを見る
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2.5: Gourmet & Hot Spring Science */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-100">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-800">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Gourmet & Thermal Science</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                阿蘇溶岩プレートの遠赤外線効果とあか牛の赤身肉イノシン酸
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              阿蘇名物「あか牛の溶岩焼き」は、単なる鉄板焼きとは異なる科学的な美味しさの秘密があります。使用される天然の阿蘇溶岩石プレートは、加熱すると強力な遠赤外線を放射します。これにより、強い直火で肉の表面だけを焦がすことなく、肉の内部まで均一に素早く熱を通し、旨味成分である肉汁（イノシン酸やグルタミン酸）を肉の繊維内にぎゅっと閉じ込めます。外側は香ばしくカリッと、内側はしっとりジューシーな最高の焼き加減に仕上がります。
            </p>
            <p>
              また、本場熊本の特選馬刺しは、グリコーゲン含有量が牛肉の約3倍と豊富で、上品な甘みとあっさりとした後味が特徴。低カロリー・高タンパクでミネラル豊富な馬刺しと、掛け流し温泉による代謝促進効果が組み合わさることで、身体の内外からエネルギーが満ち溢れる極上の健康美食体験が完成します。
            </p>
          </div>
        </section>

        {/* Section 3: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-8">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-100">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                【1泊2日モデルコース】初冬の阿蘇大観峰雲海とあか牛溶岩焼き＆内牧名湯巡りの休日
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 space-y-4">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-base pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-rose-600" />
                【1日目】大観峰パノラマ絶景と掛け流し露天・あか牛溶岩焼き
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold text-xs shrink-0 mt-0.5">12:00</span>
                  <span><strong>阿蘇駅到着＆あか牛丼ランチ：</strong>駅前の人気店で、レアに焼き上げたあか牛がぎっしり載った名物「あか牛丼」を堪能。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold text-xs shrink-0 mt-0.5">13:30</span>
                  <span><strong>大観峰から阿蘇五岳涅槃像を眺望：</strong>ミルクロードをドライブし、標高936mの大観峰展望所から大カルデラを一望。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold text-xs shrink-0 mt-0.5">15:30</span>
                  <span><strong>内牧温泉へチェックイン＆名湯湯巡り：</strong>宿の自家源泉掛け流し露天風呂に浸かり、初冬の澄んだ空気の中でリラックス。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold text-xs shrink-0 mt-0.5">18:30</span>
                  <span><strong>あか牛溶岩焼き＆極上霜降り馬刺し会席：</strong>熱々の溶岩プレートで焼くあか牛サーロインと、とろける馬刺しを熊本の地酒とともに。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold text-xs shrink-0 mt-0.5">20:30</span>
                  <span><strong>屋上星空BARまたは夜の温泉街散策：</strong>街明かりの少ない阿蘇ならではの満天の星空を眺め、静寂の夜を過ごす。</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 space-y-4">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-base pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-rose-600" />
                【2日目】草千里ヶ浜の初冬散策と阿蘇神社門前町水基巡り
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold text-xs shrink-0 mt-0.5">07:00</span>
                  <span><strong>早朝の展望露天風呂：</strong>朝霧が晴れゆく阿蘇五岳を眺めながらの朝風呂。阿蘇高菜と温かいだご汁の朝食を味わう。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold text-xs shrink-0 mt-0.5">09:00</span>
                  <span><strong>草千里ヶ浜へドライブ：</strong>霜が降りた広大な草原と凍結した池を散策。噴煙を上げる中岳火口を見上げる大自然を体感。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold text-xs shrink-0 mt-0.5">11:00</span>
                  <span><strong>阿蘇神社参拝＆門前町通り散策：</strong>楼門が復興した阿蘇神社を参拝し、門前町で湧水珈琲や名物「馬ロッケ」を食べ歩き。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold text-xs shrink-0 mt-0.5">12:30</span>
                  <span><strong>道の駅阿蘇でお土産調達：</strong>阿蘇ミルクチーズや本場高菜漬け、辛子蓮根を購入し、阿蘇くまもと空港へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Travel Tips & Highlights */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-100">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Travel Advice & Highlights</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の阿蘇旅行を安全＆快適に満喫するための4大秘訣
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="bg-rose-50/40 rounded-2xl p-5 border border-rose-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ThermometerSun className="w-5 h-5 text-rose-600" />
                九州とは思えない冷え込み！真冬並みの防寒着を
              </h3>
              <p className="leading-relaxed">
                標高が高い阿蘇地域は、11月下旬以降朝晩の気温が氷点下まで下がります。特に風が吹き抜ける大観峰や草千里ヶ浜では体感温度が著しく低下するため、厚手ダウン、手袋、マフラー、ニット帽を必ず着用して観光しましょう。
              </p>
            </div>

            <div className="bg-rose-50/40 rounded-2xl p-5 border border-rose-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Mountain className="w-5 h-5 text-rose-600" />
                早朝の雲海狙いは「湿度高め＆無風の晴朝」が条件
              </h3>
              <p className="leading-relaxed">
                大観峰やミルクロードからの雲海は、前日に雨が降り湿度が高く、翌朝が放射冷却で晴れて風がない日に高確率で発生します。早朝6時30分〜7時30分頃の日の出前後を狙って訪れると、息を呑む絶景に出会えます。
              </p>
            </div>

            <div className="bg-rose-50/40 rounded-2xl p-5 border border-rose-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Compass className="w-5 h-5 text-rose-600" />
                峠道や山間部の凍結に備えてスタッドレスを
              </h3>
              <p className="leading-relaxed">
                12月に入るとミルクロードや阿蘇パノラマラインなどの山道で初雪や路面凍結が発生することがあります。レンタカーを借りる際はスタッドレスタイヤ装着車を指定し、日没後の無理な山道運転は控えましょう。
              </p>
            </div>

            <div className="bg-rose-50/40 rounded-2xl p-5 border border-rose-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Wine className="w-5 h-5 text-rose-600" />
                熊本の地酒「れいざん」や球磨焼酎との晩酌
              </h3>
              <p className="leading-relaxed">
                阿蘇高森の銘酒「れいざん」は、阿蘇の清冽な湧水で仕込まれた辛口でキレのある地酒。あか牛の脂をさっぱりと包み込み、馬刺しの甘みを最大限に引き出してくれます。米焼酎の球磨焼酎もお湯割りで美味しくいただけます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-100">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                阿蘇内牧温泉の初冬旅行に関するよくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-200/60 space-y-2">
                <h3 className="text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-rose-800 font-extrabold shrink-0">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Internal Links */}
        <section className="bg-gradient-to-br from-slate-900 to-rose-950 text-white rounded-3xl p-8 sm:p-10 space-y-6 shadow-md">
          <div className="space-y-2">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい！九州の冬温泉＆美食特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              熊本・大分・九州各地の厳選された名湯や極上和牛の特集記事もぜひあわせてチェックしてください。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <Link 
              href="/winter-kumamoto-kurokawa-onsen-yuakari-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-amber-500/40 text-amber-200 font-bold text-[10px]">黒川・湯あかり幻想</span>
              <h3 className="font-bold text-white text-sm">黒川温泉・冬の湯あかり竹灯籠と渓流雪見露天・肥後牛の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">竹灯籠が渓流を照らす幻想的な冬の夜と入湯手形での名湯巡り。</p>
            </Link>

            <Link 
              href="/winter-kumamoto-hirayama-onsen-sulfur-bihada-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-rose-500/40 text-rose-200 font-bold text-[10px]">平山・極上硫黄泉</span>
              <h3 className="font-bold text-white text-sm">平山温泉・とろとろ美肌の硫黄泉掛け流しと馬刺し・肥後牛の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">化粧水のようなとろみの極上美肌湯と隠れ家風の静かな湯宿。</p>
            </Link>

            <Link 
              href="/winter-oita-yufuin-onsen-kinrinko-asamiri-bungo-beef-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-emerald-500/40 text-emerald-200 font-bold text-[10px]">由布院・金鱗湖朝霧</span>
              <h3 className="font-bold text-white text-sm">由布院温泉・金鱗湖の冬朝霧と由布岳展望露天・豊後牛の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">湖面から立ち上る幻想的な朝霧と由布岳を望む上質な大人の離れ宿。</p>
            </Link>

            <Link 
              href="/winter-fukuoka-harazuru-onsen-w-bihada-hakata-beef-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-orange-500/40 text-orange-200 font-bold text-[10px]">原鶴・W美肌の湯</span>
              <h3 className="font-bold text-white text-sm">原鶴温泉・筑後川の初冬情緒とダブル美肌の湯・博多和牛の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">弱アルカリ性と硫黄泉のダブル美肌効果と博多和牛すき焼き。</p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-kumamoto-aso-uchinomaki-onsen-akagyu-caldera-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
