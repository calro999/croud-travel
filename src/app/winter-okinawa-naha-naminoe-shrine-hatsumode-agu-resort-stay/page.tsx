import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Snowflake, Flame, Mountain, Building, ThermometerSun, Waves, Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月沖縄那覇：新春波上宮初詣！名宿5選',
  description: '本土が厳しい寒さに震える11月・12月・1月、平均気温18℃前後の温暖な陽光が注ぐ沖縄・那覇エリアは極上の「避冬（ひとう）リゾート」。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '那覇 ホテル, 波上宮 初詣, 首里城 見せる復興, 瀬長島ホテル, ロワジールホテル那覇, ハイアットリージェンシー那覇, 国際通り あぐー豚, 11月 12月 1月 沖縄 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-okinawa-naha-naminoe-shrine-hatsumode-agu-resort-stay/"
  },
  openGraph: {
    title: '11・12・1月沖縄那覇：新春波上宮初詣！名宿5選',
    description: '本土が厳しい寒さに震える11月・12月・1月、平均気温18℃前後の温暖な陽光が注ぐ沖縄・那覇エリアは極上の「避冬（ひとう）リゾート」。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-okinawa-naha-naminoe-shrine-hatsumode-agu-resort-stay',
    type: 'article',
    images: [{ url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80' }]
  }
};

export default function OkinawaNahaWinterPage() {
  const hotels = [
            {
              id: 1,
              name: "琉球温泉　瀬長島ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/139989/139989.jpg",
              rating: 4.47,
              reviews: 1295,
              price: "¥9,630〜",
              access: "那覇空港よりお車にて約15分/ 路線バスで約20分　那覇空港‐赤嶺駅‐瀬長島ホテル前",
              special: "那覇空港より一番近い離島”瀬長島”に天然温泉誕生！露天風呂付客室では源泉を楽しめます！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139989%2F139989.html",
              story: "那覇空港から車でわずか約10〜15分、青い海に浮かぶ離島・瀬長島に佇む絶景リゾート「琉球温泉 瀬長島ホテル」。目の前には白亜のショップが連なるウミカジテラスが広がり、地中海のリゾートを思わせる開放感に包まれます。最大の自慢は、地下1,000mから湧き出る天然温泉「龍神の湯」。深さ120cmの立ち湯露天風呂からは、慶良間諸島に沈むドラマチックな冬の夕日と、那覇空港へ滑り込む飛行機のダイナミックな離発着パノラマを一度に望めます。冬でも心地よい潮風を感じながら芯まで温まる至福の湯浴みが叶います。",
              roomTip: "客室露天風呂付き和洋室。専用テラスに天然温泉の露天風呂を備え、刻々と茜色に染まる水平線をプライベートに独占できる極上空間。",
              gourmetTip: "「風庭（かじなー）の琉球和創作ディナー」。沖縄県産黒毛和牛やあぐー豚、近海マグロを沖縄のハーブや島野菜とともに華やかに仕立てた会席。",
              highlights: [
                "瀬長島ウミカジテラス直結・絶景立ち湯露天「龍神の湯」天然温泉完備・夕日と飛行機ビュー",
                "那覇空港車15分の好立地・客室露天風呂付きプラン・慶良間諸島に沈む冬夕日を独占",
                "冬でも温暖な海風に癒やされる島時間・カップルや記念日旅行に圧倒的人気の温泉宿"
              ]
            },
            {
              id: 2,
              name: "ロワジールホテル那覇",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16443/16443.jpg",
              rating: 3.94,
              reviews: 1944,
              price: "¥5,350〜",
              access: "【車】那覇空港より約7分（那覇うみそらトンネル～西海岸道路経由）　【ゆいレール】「旭橋」駅下車、徒歩約15分",
              special: "空港から車で約7分。天然温泉大浴場、室内外プールと館内施設が充実♪■楽天認定プレミアムホテル■",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16443%2F16443.html",
              story: "那覇港のウォーターフロントに位置し、沖縄本島でも極めて貴重な本格天然温泉を有する大型シティリゾート「ロワジールホテル 那覇」。地下500mから湧出する「三重城温泉（みえぐすくおんせん）」は、約800万年前の化石海水を源泉とする含ヨウ素ナトリウム塩化物泉。食塩泉特有の高い保温・保湿効果で、冬の体を芯から温めてくれます。広々とした内湯とサウナを備え、リラクゼーション環境が充実。国際通りや波上宮へも車やタクシーですぐの好アクセスで、快適な那覇ステイを約束します。",
              roomTip: "デラックスツイン。港を行き交う船や那覇の街並みを眺められるゆとりある空間。加湿空気清浄機完備で冬の連泊もストレスフリー。",
              gourmetTip: "「オールデイダイニング フォンテーヌ」。シェフが焼き上げるステーキや沖縄の郷土料理、島野菜のサラダが並ぶ豪華ディナー＆朝食ビュッフェ。",
              highlights: [
                "那覇港一望・化石海水を源泉とする天然温泉「三重城温泉」＆サウナ完備・大型リゾート",
                "保温効果抜群の強塩泉で冬もポカポカ・多彩なレストランとファミリーに優しい設備",
                "波上宮新春初詣へタクシー約5分・レンタカー駐車場完備で本島南部周遊に最適"
              ]
            },
            {
              id: 3,
              name: "ハイアットリージェンシー那覇沖縄",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/148000/148000.jpg",
              rating: 4.43,
              reviews: 822,
              price: "¥10,530〜",
              access: "那覇空港から車で約20分、ゆいレール「牧志駅」から徒歩8分 、国際通りまで徒歩3分",
              special: "国際通り徒歩圏内、洗練された空間と心地よいおもてなしで上質な滞在を",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F148000%2F148000.html",
              story: "国際通りから徒歩わずか3分、伝統工芸が息づく「壺屋やちむん通り」に隣接する最高級ラグジュアリーホテル「ハイアット リージェンシー 那覇 沖縄」。館内は琉球の伝統工芸とモダンな洗練が見事に調和し、静謐で上質な大人の隠れ家空間が広がります。最上階18階の「the bar」からは那覇の美しい夜景を一望でき、地元泡盛やカクテルを片手に優雅な冬の宵を堪能。朝食は開放的な吹き抜けダイニング「sakurazaka」で、厳選された旬の沖縄食材と洋食の贅沢なビュッフェを楽しめます。",
              roomTip: "クラブツイン。最上階の専用クラブラウンジアクセス付き。ティータイムやカクテルタイムに上質なフィンガーフードと銘酒を優雅に満喫。",
              gourmetTip: "「sakurazaka朝食ビュッフェ」。目の前で仕上げるオムレツや、あぐー豚のソーセージ、焼きたてブレッド、沖縄そばが揃うホテル屈指の美食朝食。",
              highlights: [
                "国際通り徒歩3分・壺屋やちむん通り隣接・最上階バーからの夜景とクラブラウンジ",
                "ハイアットの上質なおもてなし・美ら海の恵みとあぐー豚を取り入れたsakurazaka朝食",
                "静穏な大人のホテルステイ・ゆいレール牧志駅徒歩圏で免税店や首里城へも軽快アクセス"
              ]
            },
            {
              id: 4,
              name: "ホテルコレクティブ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/172986/172986.jpg",
              rating: 4.62,
              reviews: 197,
              price: "¥14,600〜",
              access: "ゆいレール　県庁前駅より徒歩約７分",
              special: "★★　国際通りの真ん中　★★　ハートのオブジェが目印　★★",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172986%2F172986.html",
              story: "那覇の目抜き通り「国際通り」のほぼ中央に位置し、観光とショッピングの圧倒的な機動力を誇るフルスペックシティホテル「ホテル コレクティブ」。全室30平米以上の贅沢な間取りには大型テレビ、快適なシモンズ社製ベッド、洗い場付きの広々としたバスルームを完備。館内にはサウナ付き大浴場やフィットネス、本格中華・鉄板焼レストランが揃い、冬の那覇滞在を華やかに格上げしてくれます。波上宮への初詣や公設市場散策も徒歩圏内でスマートに楽しめます。",
              roomTip: "スーペリアツイン（30平米以上）。洗練されたインテリアと最新設備。独立洗面台と深めのバスタブで冬の観光後も極上の寛ぎ。",
              gourmetTip: "「本格中国料理・居易園（きょいえん）」。本場台湾のシェフが腕を振るう小籠包や冬の特製フカヒレ煮込み、点心が楽しめる極上ディナー。",
              highlights: [
                "国際通りのほぼ中央・全室30平米以上のラグジュアリー仕様・大浴場サウナ＆屋外プール",
                "本格中国料理や鉄板焼・洗い場付きバスルーム・ショッピングや初詣に最高峰の立地",
                "口コミ高評価4.62の信頼宿・国際通りの喧騒を感じさせない高い遮音性と清潔感"
              ]
            },
            {
              id: 5,
              name: "Ｓｏｕｔｈｗｅｓｔ　Ｇｒａｎｄ　Ｈｏｔｅｌ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/184913/184913.jpg",
              rating: 4.44,
              reviews: 83,
              price: "¥14,910〜",
              access: "・ゆいレールご利用：「県庁前」駅から徒歩約8～10分　・タクシーご利用：那覇空港から約12分",
              special: "国際通りから徒歩1分 那覇の街を一望できるシティリゾートホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184913%2F184913.html",
              story: "国際通りから徒歩1分、県庁前駅にもほど近い絶好のロケーションに建つハイセンスなライフスタイルホテル「Southwest Grand Hotel（サウスウエストグランドホテル）。」。ミッドセンチュリーの家具と南国の陽光が溶け合う館内は、洗練された大人のリゾート空間。最上階には那覇の街を一望する屋内温水プールとジェットバス、サウナを完備し、冬でも快適にリフレッシュできます。鉄板焼やイタリアンなど多彩なレストランを備え、非日常の洗練された避冬リトリートを叶えてくれます。",
              roomTip: "グランドツイン（45平米）。開放的なバルコニーと贅沢なリビングスペース。こだわりの調度品に囲まれて過ごす上質なホテルステイ。",
              gourmetTip: "「オールデイダイニング A LONG VACATION。」。沖縄の新鮮な食材を取り入れたイタリアンやグリル料理、焼き立てのペストリーが並ぶ朝食。",
              highlights: [
                "国際通り徒歩1分・最上階インドア温水プール＆サウナ完備・ミッドセンチュリー美空間",
                "広々45平米以上の贅沢客室・ハイセンスな家具と上質アメニティ・大人の避冬リトリート",
                "洗練されたダイニングとバー・都会的なオアシスで過ごす極上の沖縄バケーション"
              ]
            }
  ];

  const faqData = [
  {
    "q": "冬（11月〜1月）の沖縄・那覇の気温や服装・過ごしやすさは？",
    "a": "沖縄の冬（11月〜1月）は、平均気温が17〜20℃前後と本州の初秋から春先のような過ごしやすい温暖な気候です。本州のように氷点下になることは一切なく、日差しがある日中は半袖や長袖シャツ1枚で快適に過ごせます。ただし、12月〜1月は北東からの海風が吹く日があり、体感温度が下がることがあるため、薄手のカーディガン、ウィンドブレーカー、ライトダウンジャケットなどの羽織るものが1枚あると重宝します。コートやマフラーの重装備から解放される「避冬旅行」として絶大な人気を誇ります。"
  },
  {
    "q": "琉球八社最高位「波上宮（なみのうえぐう）」の新春初詣（1月）の特徴や見どころは？",
    "a": "波上宮（なみのうえぐう）は、那覇港を望む隆起サンゴ礁の断崖の上に鎮座する琉球八社の最上位の格式を誇る神社です。地元では「ナンミンさん」と親しまれ、朱塗りの鮮やかな琉球瓦の社殿と青い海、断崖が織りなす景観は唯一無二の神々しさを放ちます。新春三が日の初詣参拝客数は沖縄県内最多の約15万人以上に達し、開運厄除・航海安全・家内安全・商売繁盛を祈願します。元旦の早朝参拝や、参拝後に波の上ビーチから望む初日の出は冬の沖縄ならではの特別な体験です。"
  },
  {
    "q": "首里城公園の現在の見どころ「見せる復興」とはどのような体験ですか？",
    "a": "首里城公園では、2019年の火災からの正殿復元工事が着々と進められており、2026年秋の完成を目指しています。現在は復元の過程そのものを間近で公開する「見せる復興」が実施されており、木材加工場や原寸小屋、正殿の素屋根内部で宮大工が沖縄県産オキナワウラジロガシや国産ヒノキを組み上げる伝統木造建築技術をガラス越しに見学できます。火災を乗り越えて蘇る首里城の力強い息吹を感じられる今しか見られない貴重な歴史の現場です。"
  },
  {
    "q": "冬の那覇で味わうべきグルメ「あぐー豚しゃぶしゃぶ」の魅力と名店の選び方は？",
    "a": "冬の沖縄で最もおすすめしたいグルメが「あぐー豚のしゃぶしゃぶ」です。沖縄固有の貴重な黒豚・あぐー豚は、一般的な豚肉に比べて旨味成分であるグルタミン酸が約3倍、コレステロール値が4分の1と非常にヘルシー。脂身の融点が低いため、出汁にさっとくぐらせるだけで甘い脂がとろけ、さっぱりとした後味が広がります。シークヮーサーポン酢や島胡椒（ピパーチ）、海ぶどうとともに味わう鍋は冬の体に染み渡ります。国際通りや久茂地周辺に専門の名店が集まっています。"
  },
  {
    "q": "瀬長島ウミカジテラスや那覇市内の移動手段（ゆいレール・レンタカー）のポイントは？",
    "a": "那覇市内（国際通り・首里城・牧志公設市場・壺屋やちむん通り）の観光は、那覇空港から首里・てだこ浦西までを結ぶモノレール「ゆいレール」が非常に便利で、渋滞に巻き込まれずに移動できます。一方、瀬長島ウミカジテラスや波上宮、本島南部の斎場御嶽（せーふぁうたき）やひめゆりの塔へ足を伸ばす場合は、那覇空港や市内ホテル発着の路線バス・タクシー、またはレンタカーを利用するのが快適です。冬は台風の心配がほとんどなく、道路も夏休みに比べて走りやすいためドライブに最適です。"
  }
];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://croud-travel.pages.dev/winter-okinawa-naha-naminoe-shrine-hatsumode-agu-resort-stay#webpage",
        "url": "https://croud-travel.pages.dev/winter-okinawa-naha-naminoe-shrine-hatsumode-agu-resort-stay",
        "name": "【11・12・1月沖縄那覇】新春波上宮初詣＆首里城復興見学！国際通り・あぐー豚しゃぶしゃぶとあったか避冬ホテル5選",
        "description": "本土が厳しい寒さに震える11月・12月・1月、平均気温18℃前後の温暖な陽光が注ぐ沖縄・那覇エリアは極上の「避冬（ひとう）リゾート」。琉球八社の最高位・波上宮（なみのうえぐう）の新春開運初詣、2026年正殿復元に向けて活気あふれる首里城「見せる復興」の見学、活気あふれる国際通りや壺屋やちむん通り散策を満喫。甘みたっぷりの純血あぐー豚しゃぶしゃぶや沖縄そばに舌鼓を打ち、地下から湧く琉球天然温泉やハイセンスなホテルで寛ぐ大人の冬旅。楽天APIから最新取得した那覇の信頼の名宿5選を徹底特集します。",
        "inLanguage": "ja",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.pages.dev/#website",
          "url": "https://croud-travel.pages.dev/",
          "name": "くらうどトラベル"
        }
      },
      {
        "@type": "BreadcrumbList",
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
            "name": "那覇波上宮初詣＆避冬リゾート宿",
            "item": "https://croud-travel.pages.dev/winter-okinawa-naha-naminoe-shrine-hatsumode-agu-resort-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      },
      {
        "@type": "TouristDestination",
        "name": "沖縄県那覇市・豊見城市（波上宮・首里城・瀬長島ウミカジテラス・国際通り）",
        "description": "琉球八社最高位・波上宮の新春開運初詣、首里城正殿復元工事見学、あぐー豚しゃぶしゃぶや琉球天然温泉に寛ぐ温暖な冬の沖縄避冬旅。",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "沖縄県",
          "addressLocality": "那覇市",
          "addressCountry": "JP"
        }
      }
    ]
  };


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月沖縄那覇】新春波上宮初詣＆首里城復興見学！国際通り・あぐー豚しゃぶしゃぶとあったか避冬ホテル5選",
    "description": "本土が厳しい寒さに震える11月・12月・1月、平均気温18℃前後の温暖な陽光が注ぐ沖縄・那覇エリアは極上の「避冬（ひとう）リゾート」。琉球八社の最高位・波上宮（なみのうえぐう）の新春開運初詣、2026年正殿復元に向けて活気あふれる首里城「見せる復興」の見学、活気あふれる国際通りや壺屋やちむん通り散策を満喫。甘みたっぷりの純血あぐー豚しゃぶしゃぶや沖縄そばに舌鼓を打ち、地下から湧く琉球天然温泉やハイセンスなホテルで寛ぐ大人の冬旅。楽天APIから最新取得した那覇の信頼の名宿5選を徹底特集します。",
    "url": "https://croud-travel.pages.dev/winter-okinawa-naha-naminoe-shrine-hatsumode-agu-resort-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【11・12・1月沖縄那覇】新春波上宮初詣＆首里城復興見学！国際通り・あぐー豚しゃぶしゃぶとあったか避冬ホテル5選", "item": "https://croud-travel.pages.dev/winter-okinawa-naha-naminoe-shrine-hatsumode-agu-resort-stay/" }
    ]
  };

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-cyan-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-950 text-white overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-semibold tracking-wide">
            <ThermometerSun className="w-4 h-4 text-cyan-300 animate-pulse" />
            <span>11月・12月・1月冬の沖縄避冬特選ガイド｜那覇・首里・瀬長島</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">新春波上宮初詣＆首里城復興見学！<br className="hidden sm:inline" /> 国際通り・あぐー豚しゃぶしゃぶとあったか避冬ホテル5選</h1>

          <p className="max-w-4xl text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal">
            平均気温18℃の温暖な冬の沖縄。隆起サンゴ礁の断崖に佇む琉球八社最高位・波上宮での新春初詣、2026年正殿復元を迎える首里城の躍動する木造工事見学。甘み濃厚な極上あぐー豚しゃぶしゃぶと島野菜、地下深くから湧く天然温泉に浸かる至高の冬籠もりへご案内します。
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Compass className="w-4 h-4 text-cyan-400" /> 国際通り・波上宮・首里城・瀬長島
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Utensils className="w-4 h-4 text-amber-400" /> あぐー豚しゃぶしゃぶ・首里そば・島野菜
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Calendar className="w-4 h-4 text-sky-400" /> 探訪期：11月上旬〜1月下旬
            </span>
          </div>
        </div>
      </header>

      {/* Navigation Breadcrumbs */}
      <nav aria-label="パンくずリスト" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-500">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-cyan-600 transition">ホーム</Link></li>
          <li><span>/</span></li>
          <li><Link href="/features" className="hover:text-cyan-600 transition">特集一覧</Link></li>
          <li><span>/</span></li>
          <li className="text-slate-800 font-medium truncate">冬の那覇・波上宮初詣＆避冬リゾート特集</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-16">
        {/* Deep Dive Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-cyan-500 pl-4">
            <span className="text-cyan-700 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Deep Dive Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              重いコートを脱ぎ捨てて南国へ！温暖な陽光と琉球の聖地に祈る冬の旅
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              平均気温18℃の避冬リゾート、琉球王国最高の聖域、そして蘇る首里城正殿
            </p>
          </div>

          <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
            <p>
              日本列島が氷点下の寒波や白雪に覆われる11月から1月にかけて、沖縄本島・那覇は平均気温17〜20℃前後という、まるで春先のような穏やかな陽光に包まれます。厚手のコートやダウンジャケット、手袋やマフラーの重装備から解放され、軽やかな装いで南国の風を感じながら歩く爽快感は、この時期に沖縄を訪れる人だけが味わえる至福の特権です。台風の心配がほとんどなく、夏の強い紫外線や熱帯夜に悩まされることもない冬こそ、文化や歴史、美食をじっくり味わう大人の沖縄旅に最適な季節と言えます。
            </p>
            <p>
              新春の祈りの舞台となるのが、那覇港を望む隆起サンゴ礁の断崖絶壁に鎮座する「波上宮（なみのうえぐう）」です。琉球王朝時代に王府から特別な崇敬を受けた「琉球八社」の最上位に位置し、地元の人々からは親しみを込めて「ナンミンさん」と呼ばれています。青い東シナ海と空を背景に、鮮やかな朱塗りの琉球赤瓦の社殿が崖の上に聳え立つ姿は唯一無二の神々しさ。正月三が日には約15万人以上の初詣客が訪れ、開運厄除、航海安全、家内安全を祈願します。参拝後に波の上ビーチへ降り立ち、冬の心地よい潮風を浴びながら水平線から昇る初日の出を仰ぐひとときは、新しい一年の清らかな活力を吹き込んでくれます。
            </p>
            <p>
              さらに見逃せないのが、2019年の火災から2026年秋の完成を目指して復元が進む「首里城公園」の躍動です。現在は正殿の木造復元工事を間近で公開する「見せる復興」が実施されており、沖縄県産オキナワウラジロガシや国産ヒノキを組み上げる宮大工の卓越した技を素屋根内部のガラス越しに見学できます。火災を乗り越えて蘇る首里城正殿の力強い息吹は、今しか出会えない歴史の証言。守礼門や歓会門をくぐり、樹齢300年の大アカギが立つ「金城町石畳道」へと足を伸ばせば、琉球王朝の雅な歴史風情が色濃く蘇ります。
            </p>
            <p>
              冬の那覇の夜を温めてくれるのは、滋味あふれる沖縄の鍋料理。その頂点に立つのが「純血あぐー豚のしゃぶしゃぶ」です。沖縄固有の貴重な黒豚・あぐー豚は、一般の豚肉に比べて旨味成分のグルタミン酸が約3倍と濃厚で、コレステロール値が低いヘルシーな逸品。出汁にさっとくぐらせるだけで甘い脂身がとろけ、島野菜やもずく、シークヮーサーポン酢とともに味わう一口は至高の歓びです。瀬長島や那覇港の地下深くから湧く「琉球天然温泉」に身を委ね、慶良間諸島に沈む夕日や飛行機の離発着を眺めながら過ごす時間は、心身の疲れを解き放つ最高の避冬リゾート体験となります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs sm:text-sm">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="font-bold text-cyan-700 block mb-1">波上宮新春開運初詣</span>
              <p className="text-slate-600">断崖絶壁に佇む琉球八社最高位の聖地。朱の社殿と海が織りなす荘厳な祈りとビーチの初日の出。</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="font-bold text-cyan-700 block mb-1">首里城「見せる復興」見学</span>
              <p className="text-slate-600">2026年正殿復元へ進む木造建築の現場。金城町石畳道の散策と琉球王朝の雅な歴史探訪。</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="font-bold text-cyan-700 block mb-1">あぐー豚しゃぶしゃぶ＆琉球温泉</span>
              <p className="text-slate-600">甘み濃厚なあぐー豚鍋。瀬長島「龍神の湯」や那覇の天然温泉で夕日を望む至福のリラクゼーション。</p>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase">Handpicked Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              冬の那覇・瀬長島を満喫する厳選名宿5選
            </h2>
            <p className="text-sm text-slate-600">
              楽天トラベルAPIから最新取得した、絶景天然温泉・国際通り至近・最高峰クラブラウンジ完備の信頼宿
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
              >
                {/* Hotel Image */}
                <div className="relative md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100 overflow-hidden">
                  <img
                    src={hotel.img}
                    alt={hotel.name}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{hotel.rating}</span>
                    <span className="text-slate-300 font-normal">({hotel.reviews}件)</span>
                  </div>
                </div>

                {/* Hotel Info */}
                <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-medium text-cyan-800 bg-cyan-50 px-3 py-1 rounded-lg w-fit">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{hotel.access}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                      {hotel.name}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {hotel.story}
                    </p>

                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700">
                      <div>
                        <span className="font-bold text-slate-900">客室の魅力：</span> {hotel.roomTip}
                      </div>
                      <div>
                        <span className="font-bold text-slate-900">冬の食体験：</span> {hotel.gourmetTip}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-2">
                      {hotel.highlights.map((item: string, hIdx: number) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-slate-500 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-2xl font-extrabold text-cyan-600">{hotel.price}</span>
                    </div>

                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-bold text-sm shadow-md hover:from-cyan-500 hover:to-teal-500 hover:shadow-lg transition-all"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1泊2日モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-cyan-500 pl-4">
            <span className="text-cyan-700 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Winter Schedule</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の那覇・瀬長島を満喫する1泊2日王道モデルコース
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              首里城復興見学、波上宮初詣、あぐー豚しゃぶしゃぶ、ウミカジテラス絶景温泉を巡る避冬プラン
            </p>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-cyan-100">
            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-cyan-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 10:30】那覇空港到着＆ゆいレールで首里城公園へ</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                那覇空港に到着後、重いコートをコインロッカーに預けて身軽に出発。モノレール「ゆいレール」で首里駅へ。首里城公園の「見せる復興」エリアで、2026年秋の完成へ向けて組み上がる正殿の力強い木造復元工事を見学し、歓会門や守礼門を散策。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-cyan-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 12:30】金城町石畳道散策＆老舗「首里そば」ランチ</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                琉球王朝の面影を残す「金城町石畳道」を下り、大アカギを参拝。首里の老舗店で、澄んだ上品な鰹出汁とコシのある手打ち麺、柔らかい三枚肉が絶品の「首里そば」をじゅうしぃ（炊き込みご飯）とともに堪能します。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-cyan-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 14:30】壺屋やちむん通り散策＆「波上宮」新春初詣</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                ゆいレールで牧志駅へ戻り、焼き物の店が連なる「壺屋やちむん通り」でお気に入りの器を探訪。その後、タクシーで隆起サンゴ礁の断崖に建つ「波上宮」へ。朱の社殿で開運を祈願し、隣接する波の上ビーチから青い海を眺めます。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-cyan-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【1日目 17:30】厳選ホテルチェックイン＆「あぐー豚しゃぶしゃぶ」ディナー</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                瀬長島ホテルやハイアットリージェンシー那覇へチェックイン。大浴場や天然温泉でリフレッシュした後、国際通りや久茂地エリアの名店へ。甘み豊かな純血あぐー豚のしゃぶしゃぶを島野菜とともに味わい、泡盛古酒で贅沢な宵を過ごします。
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-cyan-600 border-4 border-white shadow-sm" />
              <h4 className="text-base font-bold text-slate-900 mb-1">【2日目 10:00】瀬長島ウミカジテラス散策＆国際通りでお土産選び</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                2日目は瀬長島ウミカジテラスで海風を感じながらオーシャンビューのカフェを満喫。頭上を通過するダイナミックな飛行機を鑑賞。国際通りでお土産（ちんすこう、紅芋タルト、泡盛）を購入し、空港から暖かい思い出とともに帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Local Winter Experience Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8">
          <div className="border-l-4 border-cyan-500 pl-4">
            <span className="text-cyan-700 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Travel Strategy</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の那覇完全攻略：波上宮初詣・首里城復興・あぐー豚グルメの極意
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                波上宮新春初詣と初日の出のベストポイント
              </h3>
              <p className="leading-relaxed">
                波上宮は元旦から三が日にかけて大勢の参拝者で賑わいます。早朝7時〜8時の参拝であれば混雑を避けて厳かな空気の中で祈ることができます。参拝後はすぐ隣の波の上ビーチに足を伸ばせば、冬の朝の澄み切った海風を浴びながら新年の清らかな誓いを立てられます。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Building className="w-5 h-5 text-indigo-500" />
                首里城公園「見せる復興」と金城町石畳道
              </h3>
              <p className="leading-relaxed">
                正殿復元エリアでは、木材の組み立て作業や伝統儀礼の展示をリアルタイムで見学。守礼門や歓会門をくぐり、首里城の歴史に触れた後は、樹齢300年の大アカギが立つ「金城町石畳道」へ。琉球王朝時代の風情が残る古道散策は、冬の涼しい気候だからこそ汗をかかずに楽しめます。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-rose-500" />
                あぐー豚しゃぶしゃぶと島野菜の絶品鍋
              </h3>
              <p className="leading-relaxed">
                冬の夜のメインディッシュは「あぐー豚のしゃぶしゃぶ」。甘みのある脂身が極上の昆布出汁に溶け出し、レタスやハンダマ、島豆腐とともにシークヮーサーポン酢で味わう一口は至高の美味。国際通り周辺の老舗店やホテル内ダイニングで、泡盛の古酒（クース）と合わせて堪能しましょう。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Waves className="w-5 h-5 text-teal-500" />
                瀬長島ウミカジテラスの夕日と天然温泉
              </h3>
              <p className="leading-relaxed">
                那覇空港近くの瀬長島ウミカジテラスは、白い街並みがお洒落な人気スポット。夕方には慶良間諸島に沈む夕日を眺めながらカフェタイム。その後は瀬長島ホテルの「龍神の湯」で、海を眺める立ち湯露天風呂に浸かり、飛行機のライトが流れる夜景を眺める時間は格別の贅沢です。
              </p>
            </div>
          </div>
        </section>

        {/* Climate and Access */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-cyan-500 pl-4">
            <span className="text-cyan-700 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Travel Advice</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の沖縄・那覇：気候・服装・移動のアドバイス
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-cyan-500" />
                快適な避冬気候と海風対策
              </h4>
              <p>
                平均気温18℃と温暖ですが、曇りの日や風の強い日は体感温度が下がります。日中は長袖シャツやカットソーで十分ですが、朝夕や海辺を歩く時は風を通さないウィンドブレーカーや薄手のジャケットを着用しましょう。
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <Building className="w-4 h-4 text-indigo-500" />
                ゆいレールとバス・タクシーの活用
              </h4>
              <p>
                那覇空港から国際通り、首里城までは「ゆいレール」が直結。渋滞を気にせず移動できます。瀬長島や南部観光には路線バス、タクシー、または空港周辺でレンタカーを手配すると自由に行動できます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-cyan-500 pl-4">
            <span className="text-cyan-700 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">FAQ & Local Insights</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              冬の沖縄・那覇観光・初詣・グルメ よくある質問
            </h2>
          </div>

          <div className="space-y-6 divide-y divide-slate-100">
            {faqData.map((faq, index) => (
              <div key={index} className="pt-5 first:pt-0">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-start gap-2">
                  <span className="text-cyan-600 font-black">Q{index + 1}.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 内部リンク関連特集 */}
        <section className="bg-slate-100 rounded-3xl p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            合わせて読みたい冬のリゾート＆温泉特集
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <Link 
              href="/winter-okinawa-onna-motobu-whalewatching-agu-resort-stay"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-cyan-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【沖縄・恩納本部】冬のホエールウォッチング＆高級ビーチリゾート</span>
              <span className="text-xs text-slate-500">冬の美ら海で出会うザトウクジラとあぐー豚・オーシャンビューホテル</span>
            </Link>
            <Link 
              href="/winter-okinawa-ishigaki-kabilabay-starrysky-beef-resort-stay"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-cyan-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【沖縄・石垣島】冬の川平湾エメラルド絶景＆南十字星星空名宿</span>
              <span className="text-xs text-slate-500">日本一の星空保護区と幻の石垣牛・極上リゾートステイ</span>
            </Link>
            <Link 
              href="/winter-miyazaki-nichinan-udo-shrine-hatsumode-iseebi-wagyu-stay"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-cyan-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【宮崎・日南】鵜戸神宮新春開運初詣＆日南海岸伊勢海老名宿</span>
              <span className="text-xs text-slate-500">冬でも温暖な日南フェニックスロードと本場伊勢海老・宮崎牛</span>
            </Link>
            <Link 
              href="/features"
              className="bg-white p-5 rounded-2xl shadow-xs hover:border-cyan-400 border border-slate-200 transition-all flex flex-col justify-between"
            >
              <span className="font-bold text-slate-900 mb-1">【全国】冬の厳選温泉＆旬グルメ特集一覧へ</span>
              <span className="text-xs text-slate-500">11月・12月・1月に訪れたい日本各地の名宿・絶景旅ガイド</span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-okinawa-naha-naminoe-shrine-hatsumode-agu-resort-stay" />
</div>
        </section>
      </main>
    </article>
  );
}
