import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Wine, Train
} from 'lucide-react';

export const metadata: Metadata = {
  title: '越後湯沢温泉で過ごす冬の旅（11・12月）！川端康成ゆかりの名湯！名宿5選',
  description: '東京から新幹線で最速約70分、川端康成の小説『雪国』の舞台として名高い新潟・越後湯沢温泉。11月の収穫期を祝う日本一の南魚沼産コシヒカリ新米。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '越後湯沢 宿泊 11月 12月, 越後湯沢 温泉 旅館, 南魚沼 コシヒカリ 新米 温泉, 越後湯沢 ぽんしゅ館 地酒, 越後湯沢 雪景色 露天風呂, 越後もち豚 温泉 宿, 越後湯沢 冬 モデルコース',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-niigata-echigo-yuzawa-snow-sake-stay/",
  },
  openGraph: {
    title: '越後湯沢温泉で過ごす冬の旅（11・12月）！川端康成ゆかりの名湯！名宿5選',
    description: '東京から新幹線で最速約70分、川端康成の小説『雪国』の舞台として名高い新潟・越後湯沢温泉。11月の収穫期を祝う日本一の南魚沼産コシヒカリ新米。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-niigata-echigo-yuzawa-snow-sake-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月越後湯沢温泉の雪国情緒と地酒巡り】川端康成ゆかりの名湯・南魚沼産コシヒカリ新米と越後もち豚会席の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "越後湯沢温泉の雪国情緒と地酒巡りで過ごす冬の旅（11・12月）！川端康成ゆかりの名湯・南魚沼産コシヒカリ新米と越後もち豚会席の宿5選",
    description: "東京から新幹線で最速約70分、川端康成の小説『雪国』の舞台として名高い新潟・越後湯沢温泉。11月の収穫期を祝う日本一の南魚沼産コシヒカリ新米と新酒の季節、12月に入ると始まる息をのむ白銀の雪国世界。越後地酒の利き酒や名物日本酒風呂、越後もち豚しゃぶしゃぶに舌鼓を打つ極上の初冬温泉旅ガイド。",
  }
};

export default function YuzawaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-niigata-echigo-yuzawa-snow-sake-stay#article",
        "headline": "【11・12月越後湯沢温泉の雪国情緒と地酒巡り】川端康成ゆかりの名湯・南魚沼産コシヒカリ新米と越後もち豚会席の宿5選",
        "description": "東京から新幹線で最速約70分、川端康成の小説『雪国』の舞台として名高い新潟・越後湯沢温泉。11月の収穫期を祝う日本一の南魚沼産コシヒカリ新米と新酒の季節、12月に入ると始まる息をのむ白銀の雪国世界。越後地酒の利き酒や名物日本酒風呂、越後もち豚しゃぶしゃぶに舌鼓を打つ極上の初冬温泉旅ガイド。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
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
          "@id": "https://croud-travel.pages.dev/winter-niigata-echigo-yuzawa-snow-sake-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-niigata-echigo-yuzawa-snow-sake-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "越後湯沢の11月・12月の雪の降り始めと積雪量は？新幹線の運行状況は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "越後湯沢では、例年11月中旬〜下旬に谷川連峰や周囲の山々に初冠雪を観測し、12月上旬〜中旬にかけて温泉街でも本格的な降雪と積雪が始まります。12月下旬の年末には街中でも50cm〜1m以上の積雪となる豪雪地帯です。しかし上越新幹線は日本屈指の強力なスプリンクラー消雪設備と高架構造を備えているため、豪雪時でもほとんど遅延や運休がなく極めて安定して運行されます。お車の場合は関越自動車道で冬用タイヤ規制やチェーン規制が頻繁にかかるため、スタッドレスタイヤの装着が必須となります。"
            }
          },
          {
            "@type": "Question",
            "name": "越後湯沢駅の「ぽんしゅ館」とはどんな施設ですか？楽しみ方は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "越後湯沢駅構内（改札外のがんぎ通り）にある新潟の食と酒のテーマパークです。名物の『利き酒番所』では、受付で500円を支払うとお猪口と専用メダル5枚が渡され、壁一面に並ぶ新潟県内全90蔵以上・100種類以上の地酒自販機から好きな銘柄を選んでテイスティングできます。塩や味噌の無料おつまみコーナーもあり味比べが楽しめます。さらに日本酒を贅沢にブレンドした名物『酒風呂 湯の沢』や、南魚沼産コシヒカリ1合を使った巨大な『爆弾おにぎり』も大人気です。"
            }
          },
          {
            "@type": "Question",
            "name": "南魚沼産コシヒカリの「新米」はいつから宿で食べられますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "南魚沼産コシヒカリの収穫は例年9月下旬〜10月上旬に行われ、10月中旬以降から各旅館の夕食・朝食に新米として登場します。11月から12月にかけては、ツヤ、粘り、甘みが最も際立つ新米のまさにゴールデンシーズンです。ふっくら炊き上げた土鍋ご飯や釜飯で味わう新米の美味しさは感動的で、お米本来の深い旨味を堪能できます。"
            }
          },
          {
            "@type": "Question",
            "name": "越後湯沢で味わうべき冬の地元名物グルメは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "日本一のブランド米『南魚沼産コシヒカリ新米』、きめ細やかで脂の甘い新潟銘柄豚『越後もち豚』のしゃぶしゃぶや角煮、布海苔（つなぎの海藻）を使った喉越しの良い『へぎそば』、日本海の冬の王様『のどぐろ』の塩焼き、新潟の郷土汁『のっぺ汁』や『から汁』が代表的です。各旅館ではこれらを組み合わせた贅沢な会席料理が提供されます。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-niigata-echigo-yuzawa-snow-sake-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "越後湯沢温泉　松泉閣花月",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40019%2F40019.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "越後湯沢温泉　水が織りなす越後の宿　双葉",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8401%2F8401.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "越後湯沢温泉　湯沢グランドホテル＜新潟県＞",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38764%2F38764.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "越後湯沢温泉　越後のお宿　いなもと",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F55869%2F55869.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "越後湯沢温泉　一望千里　御湯宿　中屋",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28757%2F28757.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "越後湯沢温泉　松泉閣花月",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40019/40019.jpg",
              rating: 4.56,
              reviews: 431,
              price: "¥10,890〜",
              access: "越後湯沢駅から徒歩約５分。越後湯沢駅への送迎も可能です。（要事前連絡）・お車で湯沢IC～１０分",
              special: "「お帰りなさいませ「「いってらっしゃいませ」が花月の合言葉　故郷に帰ってきたようにお過ごしください",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40019%2F40019.html",
              story: "越後湯沢駅から徒歩5分、静かな温泉街の一角に広がる日本庭園と木造りの温もりに癒される老舗宿「松泉閣花月」。館内に一歩足を踏み入れると、囲炉裏の切られたロビーと畳敷きの空間が広がり、雪国の旅情を優しく迎えてくれます。自慢は四季折々の自然を愛でる庭園露天風呂と、木肌の優しい大浴場。肌あたりが柔らかく湯冷めしにくいアルカリ性単純温泉が満ち、11月下旬の初雪や12月の雪景色を眺めながら芯まで温まります。おもてなしの心が行き届いた細やかなサービスと落ち着いた佇まいは、大人の夫婦旅や一人旅にも抜群の安心感をもたらします。雪見酒を傾けながら過ごす静かな夜は格別です。",
              roomTip: "日本庭園を見下ろす数寄屋風の和室や、専用の露天風呂を備えた特別室がおすすめ。障子を開ければ、しんしんと降る雪に包まれる庭園の白銀美と、雪吊りの施された松の木々を独り占めできます。",
              gourmetTip: "夕食は魚沼の里山と日本海の幸を贅沢に盛り込んだ極上会席。最高峰「南魚沼産コシヒカリ」の炊きたて新米ご飯を主役に、きめ細やかな肉質の「越後もち豚」のしゃぶしゃぶ、日本海直送の鮮魚や魚沼の根菜が並びます。",
              highlights: [
                "美しい日本庭園と木造りの温もり＆囲炉裏ロビーが迎える老舗の気品",
                "湯冷めしにくいアルカリ性単純泉庭園露天風呂＆雪見の極楽入浴",
                "最高峰南魚沼産コシヒカリ新米ご飯＆越後もち豚しゃぶしゃぶ会席"
              ]
            },
            {
              id: 2,
              name: "越後湯沢温泉　水が織りなす越後の宿　双葉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8401/8401.jpg",
              rating: 4.34,
              reviews: 1043,
              price: "¥14,300〜",
              access: "上越新幹線、越後湯沢駅下車徒歩７分。関越自動車道、湯沢ＩＣより車で５分。",
              special: "花水木をテーマに四季折々に花々がお待ちしております。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8401%2F8401.html",
              story: "「水が織りなす越後の宿」の名の通り、館内に二十八もの多彩なお風呂を揃える一大湯処旅館「ホテル双葉」。最上階の展望大浴場「空の湯」や庭園露天風呂「山の湯」など、フロアごとに異なる風情で湯めぐりが楽しめます。特に初冬の澄み渡る空気の中、展望露天風呂から見晴らす谷川連峰や越後三山の冠雪した雄大なパノラマは息をのむ絶景。湯沢の名湯に身を浸しながら、刻々と夕暮れに染まる白銀の峰々を眺める入浴は、冬の越後湯沢ならではの至高の贅沢です。多彩なジャグジーやサウナも完備され、心ゆくまで温泉を満喫できます。",
              roomTip: "高層階のパノラマ和洋室が人気。窓一面に広がる雪化粧した谷川連峰の雄大な稜線が、朝夕でドラマチックに色彩を変える絶景を堪能できます。",
              gourmetTip: "料理人が目の前で腕を振るうオープンキッチンや料亭個室で味わう旬彩会席。越後牛のステーキ、のどぐろの一夜干し塩焼き、新米コシヒカリの釜飯など、新潟が誇る山海の美食が次々と運ばれます。",
              highlights: [
                "館内28もの多彩な湯処＆最上階展望露天「空の湯」から望む冠雪連峰",
                "谷川連峰の雄大な白銀パノラマを独占するインフィニティ天空温泉",
                "越後牛ステーキや日本海のどぐろ塩焼き・新米釜飯の贅沢会席"
              ]
            },
            {
              id: 3,
              name: "越後湯沢温泉　湯沢グランドホテル＜新潟県＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38764/38764.jpg",
              rating: 4.53,
              reviews: 2470,
              price: "¥9,680〜",
              access: "駅から徒歩3分＆湯沢ＩＣから5分！入口はセブンイレブンが目印！※ホテル前の坂道は急なので遠慮なく送迎をご依頼ください。",
              special: "★楽天シルバーアワード3年連続受賞★湯沢旅館部門売上1位★出来立ての美味しさが自慢のバイキング★",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38764%2F38764.html",
              story: "越後湯沢駅西口から徒歩約2分の抜群の好立地を誇りながら、庭園を望む広々とした岩露天風呂と極上のリゾート空間を備える「湯沢グランドホテル」。自慢は滝が流れ落ちる庭園露天風呂「季里の湯」と、開放感あふれる大浴場です。11月・12月の夜には庭園が温かな明かりでライトアップされ、雪が舞い散る湯面と幻想的な光のコントラストに包まれます。館内には広々としたラウンジやエステサロン、地酒バーも完備されており、新幹線を降りてすぐ手ぶらで寛ぎの休日へシフトできるスマートな旅が叶います。冬のスキーや観光拠点としてもこれ以上ない利便性を誇ります。",
              roomTip: "モダンなインテリアで統一された和洋室やツインルームが快適。シモンズ製高級ベッドが導入され、湯上がりの心地よい眠りを約束します。",
              gourmetTip: "新潟の郷土料理と本格洋食が融合した豪華ビュッフェまたは会席コース。目の前で揚げる熱々の天ぷら、握りたての日本海寿司、越後もち豚の角煮、そして魚沼産コシヒカリの食べ比べが絶賛されています。",
              highlights: [
                "越後湯沢駅西口徒歩2分の抜群アクセス＆ライトアップされる滝の庭園露天",
                "雪が舞う庭園露天風呂「季里の湯」＆シモンズベッドの上質モダンステイ",
                "揚げたて天ぷら・握り寿司・越後もち豚角煮が並ぶ豪華ビュッフェ"
              ]
            },
            {
              id: 4,
              name: "越後湯沢温泉　越後のお宿　いなもと",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/55869/55869.jpg",
              rating: 4.38,
              reviews: 437,
              price: "¥9,925〜",
              access: "越後湯沢駅西口より徒歩2分！湯沢インターより車で5分とアクセス抜群♪東京から新幹線最短で90分です♪",
              special: "大切な人と過ごす、和らいだ上質なひととき。掛け流しの温泉と本場の魚沼産こしひかり。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F55869%2F55869.html",
              story: "自家源泉100％の天然温泉を贅沢にかけ流しで楽しめる温泉情緒豊かな老舗宿「越後のお宿 いなもと」。湯沢温泉街の中心部に位置し、木の香りが漂う大浴場と檜露天風呂には、湯量豊富な自家源泉が惜しげもなく注がれています。無色透明で肌に吸い付くような柔らかな湯ざわりは美肌効果が高く、冷え切った手足の先までぽかぽかに温めてくれます。素朴でありながら隅々まで清潔に整えられた純和風の空間は、肩肘張らずにのんびりと雪国の湯宿ステイを満喫したい旅人にぴったりです。客室のこたつに入って味わう地酒の味は冬ならではの旅情です。",
              roomTip: "落ち着いた純和風客室。静かな館内からは温泉街の雪景色を望み、温かいこたつに入ってのんびりとお茶や地酒を楽しめます。",
              gourmetTip: "魚沼の郷土料理を中心とした心温まるお膳。越後もち豚の豆乳鍋やすき焼き、日本海の旬魚のお造り、自家製味噌を使った小鉢など、素材本来の素直な旨味が際立ちます。",
              highlights: [
                "自家源泉100％の天然温泉完全かけ流し＆檜露天風呂の極上美肌湯",
                "肌に吸い付くような柔らかな自家源泉＆肩肘張らない純和風の寛ぎ空間",
                "魚沼の素朴な山里の恵みと越後もち豚豆乳鍋・郷土の温もり膳"
              ]
            },
            {
              id: 5,
              name: "越後湯沢温泉　一望千里　御湯宿　中屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28757/28757.jpg",
              rating: 4.45,
              reviews: 441,
              price: "¥11,550〜",
              access: "越後湯沢駅西口よりお車で約3分・徒歩約20分／湯沢IC→国道17号線約10分　★駅から送迎あり（要連絡20時迄）",
              special: "【温泉口コミ4.68】源泉かけ流し露天風呂の眺望は絶景。人気の露天風呂付客室で季節の旬の味を堪能！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28757%2F28757.html",
              story: "越後湯沢温泉街の高台に位置し、「一望千里」の屋号が示す通り湯沢の町並みと谷川連峰のパノラマを一望する眺望自慢の宿「御湯宿 中屋」。創業江戸初期という400年の歴史を受け継ぐ老舗でありながら、高台ならではの静寂と雄大な雪国パノラマが最大の魅力です。名物の展望露天風呂は源泉100％かけ流し。遮るもののない高台から、眼下に広がる白銀の町並みと、新幹線が雪煙を上げて走り抜ける光景を眺めながらの入浴は、旅情をこの上なくかき立てます。雪国ならではの厚みあるおもてなしが心地よい宿です。",
              roomTip: "谷川連峰と湯沢の夜景を見晴らす高層階和室がおすすめ。夜になると雪景色の中に町の灯りがきらめき、静かなロマンチックな時間を演出します。",
              gourmetTip: "魚沼の厳選食材と旬の日本海の味覚を組み合わせた会席料理。契約農家から直接仕入れる一等米の南魚沼産コシヒカリと、越後もち豚の陶板焼き、地酒とのペアリングが絶品です。",
              highlights: [
                "創業400年の老舗高台宿＆一望千里の絶景展望露天風呂と源泉かけ流し",
                "雪煙を上げる上越新幹線と白銀の町並みを見下ろす圧倒的な眺望美",
                "契約農家の特A南魚沼新米コシヒカリ＆越後もち豚陶板焼き会席"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-indigo-900 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="冬の越後湯沢温泉・谷川連峰の冠雪と白銀の雪国情緒、湯けむり立ち上る露天風呂"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/90 text-indigo-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-indigo-800/50">
            <Snowflake className="w-4 h-4 text-indigo-300" />
            <span>11月・12月限定 雪国名湯・新米コシヒカリと地酒巡り特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">越後湯沢温泉の雪国情緒と地酒巡りで過ごす冬の旅（11・12月）！<br className="hidden sm:inline" /> 川端康成ゆかりの名湯・南魚沼産コシヒカリ新米と越後もち豚会席の宿5選</h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            「国境の長いトンネルを抜けると雪国であった。」。東京から新幹線で最速約70分。谷川連峰を越えた先に広がる純白の白銀世界。日本一の南魚沼産コシヒカリ新米の甘み、ぽんしゅ館の地酒呑み比べ、柔らかな湯が芯まで温める至福の冬旅へ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-indigo-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-indigo-400" /> 新潟県南魚沼郡湯沢町（越後湯沢温泉）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月越後湯沢温泉】川端康成ゆかりの名湯！名宿5選","item":"https://croud-travel.pages.dev/winter-niigata-echigo-yuzawa-snow-sake-stay"}]}) }}
      />
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Wine className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Literary Romance & Winter Harvest</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                文豪が愛した雪国の温もり。新米と新酒、純白の銀世界が広がる越後の特等席
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            ノーベル文学賞作家・川端康成が逗留し、名作小説『雪国』を執筆したことで世界中にその名を知られる新潟県・越後湯沢温泉。上越新幹線の開通により東京駅から最速69分という圧倒的な好アクセスを誇りながら、谷川岳を貫く清水トンネルを抜けた瞬間に広がる一面の雪景色は、今も昔も旅人の胸を強く揺さぶる感動に満ちています。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月は、黄金色に輝いた稲刈りを終えた魚沼盆地に、穫れたてピカピカの「南魚沼産コシヒカリ新米」と、県内各地の酒蔵から届く出来立ての「新酒」が出揃う一年で最も食が輝く季節です。そして12月に入ると、谷川連峰から吹き下ろす冷涼な気流とともに本格的な雪が降り始め、温泉街は一晩にして純白の静寂に包まれます。屋根や木々にこんもりと積もる新雪、消雪パイプから水が噴き出すアスファルトの道、もうもうと立ち上る白い温泉の湯気。これぞまさに日本人が心に思い描く原風景としての「雪国」そのものの情緒です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            越後湯沢の温泉は、弱アルカリ性単純温泉や塩化物泉が中心。無色透明でさらりとした肌あたりでありながら、保温効果が非常に高く、冷えた身体を指先からつま先までじんわりと解きほぐしてくれます。雪見露天風呂で雪の舞う空を見上げ、湯上がりには駅構内の「ぽんしゅ館」で越後の地酒を利き酒し、夜は甘み豊かな「越後もち豚」のしゃぶしゃぶやすき焼きと、土鍋で炊き上げた新米コシヒカリを頬張る。これ以上の贅沢が冬の旅にあるでしょうか。
          </p>
          
          <div className="bg-indigo-50/70 rounded-2xl p-5 border border-indigo-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Wine className="w-5 h-5 text-indigo-800" />
                <span>越後湯沢駅直結「ぽんしゅ館」の利き酒番所</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                コイン5枚（500円）で新潟全蔵元90蔵・100種類以上の地酒自販機から試飲できる大人気スポット。電車の待ち時間に気軽に立ち寄れます。
              </p>
            </div>
            <div className="px-4 py-2 bg-indigo-800 text-white rounded-xl text-xs font-bold whitespace-nowrap shadow-sm">
              営業時間: 9:00〜19:00
            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-black text-xl">
              1
            </div>
            <h3 className="font-bold text-stone-900 text-base">日本一の南魚沼産コシヒカリ新米の贅</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              11月〜12月は穫れたての新米シーズン。土鍋や羽釜でふっくら炊き上げた銀シャリの圧倒的なツヤと甘み、粘りに誰もが感動。
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-800 flex items-center justify-center font-black text-xl">
              2
            </div>
            <h3 className="font-bold text-stone-900 text-base">東京から新幹線最速69分の白銀アクセス</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              首都圏から新幹線でひとっ飛び。駅を降りればそこは雪国。豪雪にも極めて強い上越新幹線なら冬の雪道運転の不安もゼロ。
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-800 flex items-center justify-center font-black text-xl">
              3
            </div>
            <h3 className="font-bold text-stone-900 text-base">越後もち豚しゃぶしゃぶ＆新潟地酒巡り</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              脂身まで甘く柔らかいブランド豚「越後もち豚」の鍋料理、日本海直送のどぐろ塩焼き、そして淡麗辛口の越後美酒とのマリアージュ。
            </p>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200">
              Selected 5 Ryokan & Hotels
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              【11・12月】越後湯沢で泊まりたい極上名旅館5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              駅チカの便利な老舗宿から、冠雪の谷川連峰を見晴らす展望露天、源泉かけ流し自慢の宿まで、越後湯沢の冬を味わい尽くす名宿をご紹介。
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row group"
              >
                {/* Image Box */}
                <div className="lg:w-5/12 relative min-h-[300px] lg:min-h-[420px] overflow-hidden bg-stone-100">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                    厳選宿 #{hotel.id}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-stone-950/90 via-stone-950/60 to-transparent p-3 rounded-2xl text-white text-xs">
                    <span className="font-semibold block text-stone-200 mb-0.5">参考宿泊料金目安:</span>
                    <span className="text-lg font-black text-amber-300">{hotel.price}</span>
                    <span className="text-stone-300 text-[11px] ml-1">（2名1室利用時・1名あたり/消費税込）</span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                      <span className="text-xs font-bold text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-lg">
                        {hotel.access}
                      </span>
                      <div className="flex items-center gap-1.5 text-stone-700 text-xs sm:text-sm font-bold">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-stone-900 font-extrabold text-base">{hotel.rating}</span>
                        <span className="text-stone-400 font-normal">（{hotel.reviews}件のクチコミ）</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-indigo-800 transition">
                      {hotel.name}
                    </h3>

                    <p className="text-stone-700 leading-relaxed text-sm">
                      {hotel.story}
                    </p>

                    {/* Room & Gourmet Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="bg-stone-50 rounded-2xl p-3.5 border border-stone-200/70">
                        <span className="text-[11px] font-extrabold text-stone-500 uppercase tracking-wider block mb-1">
                          客室のこだわり
                        </span>
                        <p className="text-xs text-stone-700 leading-relaxed">
                          {hotel.roomTip}
                        </p>
                      </div>

                      <div className="bg-amber-50/60 rounded-2xl p-3.5 border border-amber-200/70">
                        <span className="text-[11px] font-extrabold text-amber-800 uppercase tracking-wider block mb-1">
                          冬の美食会席
                        </span>
                        <p className="text-xs text-stone-700 leading-relaxed">
                          {hotel.gourmetTip}
                        </p>
                      </div>
                    </div>

                    {/* Highlights bullets */}
                    <div className="space-y-1.5 pt-1">
                      {hotel.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-indigo-700 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA */}
                  <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div className="text-xs text-stone-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-indigo-700" />
                      <span>楽天トラベル公式連携・最低価格保証プランあり</span>
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-indigo-800 hover:bg-indigo-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                    >
                      <span>宿泊プラン・空室を確認する</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-8">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                【1泊2日】初冬の越後湯沢 雪国文学＆新米地酒満喫モデルコース
              </h2>
            </div>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-200 space-y-8">
            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-indigo-700 ring-4 ring-indigo-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-indigo-800 tracking-wider">1日目 11:30</span>
                <h3 className="text-base font-bold text-stone-900">東京駅から上越新幹線で越後湯沢駅へ到着＆名物へぎそばランチ</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  新幹線でトンネルを抜け、雪国越後湯沢駅へ。駅前の老舗そば処で、布海苔をつなぎに使ったツルツルとコシの強い名物「へぎそば」とサクサクの舞茸天ぷらを堪能。地元の辛子味噌を薬味に添えて美味しくいただきます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-indigo-700 ring-4 ring-indigo-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-indigo-800 tracking-wider">1日目 13:00</span>
                <h3 className="text-base font-bold text-stone-900">駅ナカ「ぽんしゅ館」で越後の地酒利き酒体験</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  改札すぐのぽんしゅ館・利き酒番所へ。専用コインを投入し、八海山や久保田、鶴齢など新潟が誇る名酒を少しずつお猪口でテイスティング。全国から集められた数十種類の塩とともに、お気に入りの銘柄を見つけます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-indigo-700 ring-4 ring-indigo-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-indigo-800 tracking-wider">1日目 15:00</span>
                <h3 className="text-base font-bold text-stone-900">宿へチェックイン・雪見庭園露天風呂で温まる</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  温泉街の宿へチェックイン。肌触りの優しいアルカリ性単純泉に浸かり、雪の舞う庭園や冠雪した山々を眺めながらのんびり湯浴み。湯冷めしにくい名湯の力を実感し、手足の先までぽかぽかに温まります。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-indigo-700 ring-4 ring-indigo-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-indigo-800 tracking-wider">1日目 18:30</span>
                <h3 className="text-base font-bold text-stone-900">夕食・南魚沼産コシヒカリ新米と越後もち豚しゃぶしゃぶ</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  個室食事処で夕食。ピカピカに輝く炊きたての南魚沼産コシヒカリ新米ご飯、脂の甘い越後もち豚しゃぶしゃぶ、日本海のどぐろ塩焼きを新潟の銘酒とともに心ゆくまで味わいます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-indigo-700 ring-4 ring-indigo-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-indigo-800 tracking-wider">2日目 08:00</span>
                <h3 className="text-base font-bold text-stone-900">朝の雪景色パノラマ露天風呂＆贅沢な魚沼朝ごはん</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  朝日を浴びる白銀の山々を眺めながら朝風呂へ。朝食には釜炊きコシヒカリご飯に、筋子や温泉卵、手作り味噌の汁など、ご飯が進む新潟のおかずが並びます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-indigo-700 ring-4 ring-indigo-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-indigo-800 tracking-wider">2日目 10:30</span>
                <h3 className="text-base font-bold text-stone-900">湯沢町歴史民俗資料館「雪国館」見学とお土産探し</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  川端康成の小説『雪国』のヒロイン・駒子の部屋を再現した雪国館を見学し、豪雪地帯の伝統の暮らしを学びます。駅前通りで銘酒や魚沼産コシヒカリをお土産に購入して帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Q & A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                越後湯沢温泉の初冬旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-indigo-800 font-extrabold">Q.</span>
                <span>越後湯沢の11月・12月の雪の降り始めと積雪量は？新幹線の運行状況は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                越後湯沢では、例年11月中旬〜下旬に谷川連峰や周囲の山々に初冠雪を観測し、12月上旬〜中旬にかけて温泉街でも本格的な降雪と積雪が始まります。12月下旬の年末には街中でも50cm〜1m以上の積雪となる豪雪地帯です。しかし上越新幹線は日本屈指の強力なスプリンクラー消雪設備と高架構造を備えているため、豪雪時でもほとんど遅延や運休がなく極めて安定して運行されます。お車の場合は関越自動車道で冬用タイヤ規制やチェーン規制が頻繁にかかるため、スタッドレスタイヤの装着が必須となります。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-indigo-800 font-extrabold">Q.</span>
                <span>越後湯沢駅の「ぽんしゅ館」とはどんな施設ですか？楽しみ方は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                越後湯沢駅構内（改札外のがんぎ通り）にある新潟の食と酒のテーマパークです。名物の『利き酒番所』では、受付で500円を支払うとお猪口と専用メダル5枚が渡され、壁一面に並ぶ新潟県内全90蔵以上・100種類以上の地酒自販機から好きな銘柄を選んでテイスティングできます。塩や味噌の無料おつまみコーナーもあり味比べが楽しめます。さらに日本酒を贅沢にブレンドした名物『酒風呂 湯の沢』や、南魚沼産コシヒカリ1合を使った巨大な『爆弾おにぎり』も大人気です。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-indigo-800 font-extrabold">Q.</span>
                <span>南魚沼産コシヒカリの「新米」はいつから宿で食べられますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                南魚沼産コシヒカリの収穫は例年9月下旬〜10月上旬に行われ、10月中旬以降から各旅館の夕食・朝食に新米として登場します。11月から12月にかけては、ツヤ、粘り、甘みが最も際立つ新米のまさにゴールデンシーズンです。ふっくら炊き上げた土鍋ご飯や釜飯で味わう新米の美味しさは感動的で、お米本来の深い旨味を堪能できます。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-indigo-800 font-extrabold">Q.</span>
                <span>越後湯沢で味わうべき冬の地元名物グルメは何ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                日本一のブランド米『南魚沼産コシヒカリ新米』、きめ細やかで脂の甘い新潟銘柄豚『越後もち豚』のしゃぶしゃぶや角煮、布海苔（つなぎの海藻）を使った喉越しの良い『へぎそば』、日本海の冬の王様『のどぐろ』の塩焼き、新潟の郷土汁『のっぺ汁』や『から汁』が代表的です。各旅館ではこれらを組み合わせた贅沢な会席料理が提供されます。
              </p>
            </div>
          </div>
        </section>

        {/* Internal Link Mesh */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-indigo-800 uppercase tracking-widest block">EXPLORE MORE WINTER DESTINATIONS</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい！11月・12月の冬特集＆甲信越・北陸名湯ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              href="/winter-nagano-nozawa-onsen-powder-snow-sotoyu-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-indigo-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-indigo-800 uppercase block mb-1">信州の白銀名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-indigo-800 transition line-clamp-2">
                【野沢温泉】極上パウダースノーと十三外湯めぐり・信州牛郷土会席
              </h3>
            </Link>

            <Link 
              href="/winter-yamagata-onogawa-yonezawa-beef-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-indigo-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-indigo-800 uppercase block mb-1">東北の米沢牛名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-indigo-800 transition line-clamp-2">
                【小野川温泉】かまくら村と極上米沢牛すき焼き・美肌の硫黄泉宿
              </h3>
            </Link>

            <Link 
              href="/winter-gunma-ikaho-stone-steps-joshu-beef-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-indigo-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-indigo-800 uppercase block mb-1">関越沿線の名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-indigo-800 transition line-clamp-2">
                【伊香保温泉】365段の石段街と黄金の湯・上州牛会席を味わう名旅館
              </h3>
            </Link>

            <Link 
              href="/winter-fukushima-aizu-higashiyama-snow-heritage-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-indigo-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-indigo-800 uppercase block mb-1">会津の初雪名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-indigo-800 transition line-clamp-2">
                【会津東山温泉】雪化粧の湯川渓谷露天と会津地鶏・極上馬刺し会席の宿
              </h3>
            </Link>

            <Link 
              href="/winter-yamanashi-isawa-onsen-wine-koshu-beef-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-indigo-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-indigo-800 uppercase block mb-1">甲州の新酒ワイン名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-indigo-800 transition line-clamp-2">
                【石和温泉】山梨ヌーボー解禁と美肌湯・甲州牛ステーキ＆ほうとう宿
              </h3>
            </Link>

            <Link 
              href="/winter-tochigi-okunikko-yumoto-snow-onsen-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-indigo-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-indigo-800 uppercase block mb-1">北関東の雪見秘湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-indigo-800 transition line-clamp-2">
                【奥日光湯元温泉】乳白色のにごり湯と白銀の静寂・雪見露天宿
              </h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-niigata-echigo-yuzawa-snow-sake-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
