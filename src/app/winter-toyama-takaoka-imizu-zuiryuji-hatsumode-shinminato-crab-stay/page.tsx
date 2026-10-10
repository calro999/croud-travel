import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Anchor, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月富山】国宝「高岡瑞龍寺」初詣と雨晴海岸の気嵐絶景！名宿5選',
  description: '北陸富山の歴史遺産と冬の富山湾の味覚に酔いしれる11〜1月の冬旅ガイド。加賀前田家ゆかりの国宝「高岡瑞龍寺」の新春初詣や日本三大仏「高岡大仏」。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '国宝 瑞龍寺 初詣, 雨晴海岸 気嵐 立山連峰, 新湊 紅ズワイガニ 昼セリ, 富山湾 寒ブリ, 雨晴温泉 磯はなび, 高岡マンテンホテル, ホテルニューオータニ高岡, 第一イン新湊, 富山 冬 旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-toyama-takaoka-imizu-zuiryuji-hatsumode-shinminato-crab-stay/"
  },
  openGraph: {
    title: '【11・12・1月富山】国宝「高岡瑞龍寺」初詣と雨晴海岸の気嵐絶景！名宿5選',
    description: '北陸富山の歴史遺産と冬の富山湾の味覚に酔いしれる11〜1月の冬旅ガイド。加賀前田家ゆかりの国宝「高岡瑞龍寺」の新春初詣や日本三大仏「高岡大仏」。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-toyama-takaoka-imizu-zuiryuji-hatsumode-shinminato-crab-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の富山・雨晴海岸の気嵐と海越しに望む白銀の立山連峰'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月富山】国宝「高岡瑞龍寺」初詣と雨晴海岸の気嵐絶景！新湊紅ズワイガニ＆高岡名宿5選",
    description: "北陸富山の歴史遺産と冬の富山湾の味覚に酔いしれる11〜1月の冬旅ガイド。加賀前田家ゆかりの国宝「高岡瑞龍寺」の新春初詣や日本三大仏「高岡大仏」、海越しに冠雪の立山連峰を望む雨晴海岸の幻想的な「気嵐（けあらし）」絶景。新湊漁港の昼セリで競り落とされる茹でたてアツアツの「新湊紅ズワイガニ」や、真冬が旬の「富山湾寒ブリ」「白えび」。高岡・射水・雨晴の厳選ホテル・温泉宿5選を詳しくご紹介します。",
    images: ['https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function ToyamaTakaokaImizuWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "【11・12・1月富山】国宝「高岡瑞龍寺」初詣と雨晴海岸の気嵐絶景！新湊紅ズワイガニ＆高岡名宿5選",
        "description": "北陸富山の歴史遺産と冬の富山湾の味覚に酔いしれる11〜1月の冬旅ガイド。加賀前田家ゆかりの国宝「高岡瑞龍寺」の新春初詣や日本三大仏「高岡大仏」、海越しに冠雪の立山連峰を望む雨晴海岸の幻想的な「気嵐（けあらし）」絶景。新湊漁港の昼セリで競り落とされる茹でたてアツアツの「新湊紅ズワイガニ」や、真冬が旬の「富山湾寒ブリ」「白えび」。高岡・射水・雨晴の厳選ホテル・温泉宿5選を詳しくご紹介します。",
        "image": "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "旅クラウド編集部",
          "url": "https://croud-travel.pages.dev"
        },
        "publisher": {
          "@type": "Organization",
          "name": "旅クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-toyama-takaoka-imizu-zuiryuji-hatsumode-shinminato-crab-stay"
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
            "name": "冬の旅特集一覧",
            "item": "https://croud-travel.pages.dev/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "富山・高岡瑞龍寺初詣＆雨晴気嵐・新湊カニ名宿",
            "item": "https://croud-travel.pages.dev/winter-toyama-takaoka-imizu-zuiryuji-hatsumode-shinminato-crab-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "加賀前田家ゆかりの国宝「高岡瑞龍寺（ずいりゅうじ）」の新春初詣の見どころは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "高岡瑞龍寺は、加賀藩二代当主・前田利長公の菩提を弔うため、三代当主・前田利常公が約20年の歳月をかけて建立した曹洞宗の名刹です。富山県唯一の国宝に指定されており、総門・山門・仏殿・法堂が一直線に並び、周囲を回廊が美しく取り囲む壮麗な「禅宗様伽藍配置」が完璧な形で現存しています。冬の瑞龍寺は、白雪をまとった回廊や屋根の反り、白砂と玉砂利が織りなすモノトーンの美しさが際立ちます。正月三が日には新春初詣客で賑わい、烏瑟沙摩明王（うすさまみょうおう：不浄を清める神）が祀られる法堂で開運厄除けや心身清浄を祈願するのが習わしです。"
            }
          },
          {
            "@type": "Question",
            "name": "雨晴海岸（あまはらしかいがん）の冬の奇跡「気嵐（けあらし）」と立山連峰の絶景条件は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "雨晴海岸は、海越しに標高3,000m級の立山連峰を望むことができる世界でも極めて珍しい景勝地です。特に11月〜1月の真冬の晴天の早朝（日の出前後）、海水温に対して放射冷却で放射された冷たい大気（氷点下近く）が流れ込むことで、海面から水蒸気が湯気のように立ち上る「気嵐（けあらし）」が発生します。黄金色の朝日に照らされた気嵐が海面を覆い、その奥に白銀に輝く立山連峰と義経岩のシルエットが浮かび上がる光景は、息を呑むほどの神々しさです。気嵐の発生条件は「前夜が快晴」「放射冷却で氷点下前後に冷え込む」「風が弱い早朝」です。"
            }
          },
          {
            "@type": "Question",
            "name": "新湊漁港名物の「昼セリ」と「新湊紅ズワイガニ」の特徴は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "通常、全国の漁港での競りは未明から早朝に行われますが、新湊漁港では全国的にも極めて珍しい「昼セリ（13時〜）」が行われています。これは、富山湾特有の「あいがめ」と呼ばれる急峻な海底谷が港から至近にあるため、午前中に出漁した船が獲れたてピチピチのカニを午後すぐに水揚げできるためです。床一面に敷き詰められた真っ赤な紅ズワイガニが威勢よく競り落とされる光景は見学デッキから見学可能。セリ落とされたばかりの紅ズワイガニはすぐに大釜で茹で上げられ、隣接するカニ小屋や宿で熱々の甘い蟹肉と濃厚なカニミソを味わえます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の富山湾の味覚「寒ブリ」と「富山湾鮨」の魅力は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "冬の富山湾は「天然の生け簀」と呼ばれ、11月下旬から1月にかけて産卵のために北海道から南下してくるブリが能登半島に沿って富山湾に迷い込みます。荒波を乗り越え脂が乗った「富山湾の寒ブリ（ひみ寒ぶり等）」は、身が引き締まりながらもとろけるような脂の甘みが絶品です。刺身はもちろん、出汁にさっとくぐらせる「ブリしゃぶ」や、大根に旨味が染み渡る「ブリ大根」は冬の至福。また、県内の加盟店で提供される「富山湾鮨」は、寒ブリ、紅ズワイガニ、白えびなど富山湾の朝獲れ極上地魚だけで握る特別なセットで、冬の富山を訪れたら必食の美食です。"
            }
          },
          {
            "@type": "Question",
            "name": "高岡・射水・雨晴海岸を巡る1泊2日の冬の王道モデルコースを教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "【1日目】北陸新幹線新高岡駅または高岡駅に到着 → 国宝「高岡瑞龍寺」で新春初詣＆美しい禅宗伽藍見学 → 高岡大仏参拝と金屋町の石畳通りで高岡銅器・錫クラフト散策 → 射水市へ移動し「日本のベニス」内川のノスタルジックな港町散歩 → 新湊漁港で迫力の「昼セリ」見学＆茹でたて紅ズワイガニのランチ → 雨晴温泉（磯はなび等）にチェックイン → 露天風呂から富山湾と立山連峰の夕景を望む → 夕食に「富山湾寒ブリ＆紅ズワイガニ会席」を満喫。【2日目】早朝、雨晴海岸で「気嵐」と白銀の立山連峰の奇跡の日の出絶景を鑑賞 → 朝風呂と朝食 → 道の駅雨晴でお土産購入 → 高岡駅でお土産（ます寿し、白えびせんべい）を購入して帰路へ。"
            }
          }
        ]
      }
    ]
  };

  const hotelsList = [
            {
              id: 1,
              name: "雨晴温泉　磯はなび",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108675/108675.jpg",
              rating: 4.27,
              reviews: 1076,
              price: "¥11,000〜",
              access: "あいの風とやま鉄道高岡駅よりJR氷見線に乗換えてJR雨晴駅で下車（無料送迎有／要連絡）",
              special: "富山湾でとれた海の幸と北陸随一を誇る雨晴の絶景をお楽しみください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108675%2F108675.html",
              story: "富山湾を見下ろす太田雨晴の高台に建ち、全客室や露天風呂から海越しに冠雪の立山連峰を一望できる北陸屈指の絶景温泉宿「雨晴温泉 磯はなび」。冬（11〜1月）の冷え込んだ晴天の朝には、富山湾の海水温と氷点下の外気温の差によって海面から白い湯気が立ち上る神秘の自然現象「気嵐（けあらし）」が発生し、その向こうにそびえる白銀の立山連峰が朝日に染まる奇跡のパノラマを湯船から堪能できます。宿自慢の露天風呂はナトリウム・カルシウム―塩化物泉で、肌をしっとり潤し身体を芯まで温める名湯。夕食には、富山湾の冬の王者「寒ブリ」のしゃぶしゃぶや刺身、新湊漁港直送の茹でたて紅ズワイガニ、白えびなど、冬の北陸の贅を尽くした海鮮会席が振る舞われます。",
              roomTip: "海側パノラマ和室または展望露天風呂付き客室。窓の外に広がる富山湾の碧い海と立山連峰の雄大な冬景色を独り占め。",
              gourmetTip: "「冬の富山湾会席・寒ブリ＆紅ズワイガニ」。脂の乗った寒ブリの刺身と熱々ブリしゃぶ、丸ごと一杯の紅ズワイガニを堪能。",
              highlights: [
                "富山湾と冠雪立山連峰を望む絶景露天風呂・冬の気嵐パノラマ" ,
                "冬が最旬の寒ブリしゃぶしゃぶ＆新湊紅ズワイガニ極上海鮮会席" ,
                "雨晴海岸や義経岩まで車ですぐ・海と山の二重絶景を堪能"
              ]
            },
            {
              id: 2,
              name: "高岡マンテンホテル駅前（マンテンホテルグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/20569/20569.jpg",
              rating: 4.28,
              reviews: 3178,
              price: "¥4,200〜",
              access: "◆高岡駅古城公園口より徒歩１分◆新高岡駅よりバスで約８分◆高岡ＩＣよりお車で約１０分",
              special: "◆高岡駅＆大駐車場【徒歩１分】　大浴場　◆全２３３室　【全室禁煙】　◆全室Wi-Fi、有線LAN接続",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20569%2F20569.html",
              story: "あいの風とやま鉄道およびJR城端線・氷見線のターミナル「高岡駅」古城公園口にペデストリアンデッキで直結する「高岡マンテンホテル駅前（マンテンホテルグループ）。」。雨や雪の多い冬の北陸でも濡れずにスムーズにチェックインできる利便性が抜群です。館内には男性・女性専用の人工ラジウム温泉大浴場と高温サウナ・水風呂を完備。足を伸ばして温まることで、冬の史跡巡りの疲れを心地よく癒やせます。朝食はマンテンホテル自慢の「北陸の味覚バイキング」。富山名産の白えびかき揚げ、ホタルイカの沖漬け、富山県産コシヒカリの炊きたてご飯、具だくさんの豚汁など、地元の郷土料理が所狭しと並びます。",
              roomTip: "高層階のプレミアムシングルまたはツインルーム。晴れた日には遠く立山連峰の稜線を望む落ち着いた空間。",
              gourmetTip: "「富山郷土の味覚朝食ビュッフェ」。白えびのサクサクかき揚げや富山名物の昆布締め、ます寿しなど朝から富山グルメ三昧。",
              highlights: [
                "高岡駅古城公園口直結・雨雪知らずの好立地＆サウナ付き大浴場" ,
                "白えびかき揚げや富山名物ます寿しが並ぶ豪華朝食ビュッフェ" ,
                "氷見線・城端線の乗り換え便利・ビジネスから観光まで安心快適"
              ]
            },
            {
              id: 3,
              name: "ホテルニューオータニ高岡",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5573/5573.jpg",
              rating: 4.33,
              reviews: 2050,
              price: "¥4,900〜",
              access: "■徒歩５分（JR高岡駅から）※富山空港からJR高岡駅まで車で４０分■車-小杉ICから20分　高岡ICから15分",
              special: "高岡市唯一の都市型ホテル。駅より徒歩5分。ホテル周辺は飲食店も充実。コンビニも近くに有り。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5573%2F5573.html",
              story: "高岡市街の中心部、前田利長公が築いた高岡古城公園や高岡大仏にほど近い場所に位置する格式あるシティホテル「ホテルニューオータニ高岡」。洗練されたホスピタリティとゆとりある客室空間が魅力で、国宝・瑞龍寺の新春初詣や金屋町の鋳物・クラフト散策の拠点として高い人気を誇ります。館内には日本料理「都万麻（つまま）」をはじめ、鉄板焼やバーなど上質なレストランが揃い、冬の富山湾で獲れた寒ブリや紅ズワイガニ、氷見牛の極上ステーキを落ち着いた雰囲気の中で堪能できます。ニューオータニならではの細やかなサービスが、大人の冬の旅を格調高く演出してくれます。",
              roomTip: "エグゼクティブツインまたはスイートルーム。広々としたリビングスペースと上質なベッドで冬の連泊滞在にも最適。",
              gourmetTip: "「日本料理 都万麻の冬会席」。職人が腕を振るう富山湾の旬魚の造りや寒ブリ大根、氷見牛フィレ肉のステーキ。",
              highlights: [
                "高岡大仏・古城公園至近・ニューオータニの洗練されたおもてなし" ,
                "日本料理都万麻で味わう富山湾の旬魚造りと氷見牛ステーキ" ,
                "高岡銅器や錫クラフトのギャラリー巡りにも便利な市街地中心"
              ]
            },
            {
              id: 4,
              name: "第一イン新湊",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/184683/184683.jpg",
              rating: 4.58,
              reviews: 142,
              price: "¥4,400〜",
              access: "万葉線「第一イン新湊　クロスベイ前」駅より徒歩3分",
              special: "全室シモンズベッド導入！＆シングル17.6㎡～とゆったり♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184683%2F184683.html",
              story: "「日本のベニス」と称される風情ある運河の街・射水市内川や、富山湾有数の水揚げを誇る新湊漁港に隣接する「第一イン新湊」。新湊漁港で行われる名物「昼セリ」の見学や、カニ小屋での茹でたて紅ズワイガニの食べ放題へアクセスするのに最も便利な宿泊拠点です。客室はシンプルで機能的、館内レストランでは富山湾直送の新鮮な海の幸をふんだんに使った和食御膳が楽しめます。ホテルの目の前には運河が流れ、映画のロケ地にもなった趣深い橋や船が係留されたノスタルジックな港町風景を、冬の静寂の中で散策できるのも大きな魅力です。",
              roomTip: "リバービューツインルーム。内川の運河を行き交う小舟や港町の情緒を窓辺から静かに眺められます。",
              gourmetTip: "「新湊港直送・紅ズワイガニ御膳」。朝・昼に水揚げされたばかりの紅ズワイガニの甘みと旨味をぎゅっと凝縮した海鮮御膳。",
              highlights: [
                "日本のベニス内川・新湊漁港至近・名物昼セリ見学のベスト拠点" ,
                "新湊港直送の紅ズワイガニ海鮮御膳＆ノスタルジックな港町散策" ,
                "新湊大橋の冬景色と内川運河クルーズ・海の味覚を味わい尽くす"
              ]
            },
            {
              id: 5,
              name: "ホテルルートイン高岡駅前",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/161065/161065.jpg",
              rating: 4.27,
              reviews: 753,
              price: "¥6,150〜",
              access: "あいの風とやま鉄道高岡駅より徒歩にて約2分",
              special: "ＷＯＷＯＷ全室で無料視聴可■VODルームシアター無料視聴可能(一般映画のみ）（コンフォート特典）",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161065%2F161065.html",
              story: "高岡駅瑞龍寺口（南口）から徒歩約1分、国宝・瑞龍寺への参道入り口に最も近いロケーションに建つ「ホテルルートイン高岡駅前」。国宝瑞龍寺の早朝初詣や新春祈願へ徒歩で気軽に出かけられるのが最大の強みです。館内には男女別のラジウム人工温泉大浴場「旅人の湯」を完備し、旅の冷えた身体を手足を伸ばして温められます。全室に加湿機能付き空気清浄機や大型液晶テレビを備え、冬の乾燥対策も万全。ヨーロッパ直輸入の焼きたてパンや和洋のお惣菜が並ぶ無料朝食バイキングで、朝のエネルギーをしっかり補給して観光へ出発できます。",
              roomTip: "コンフォートシングルまたはダブルルーム。ベッド幅が広く、駅近でありながら静粛性に優れた快眠空間。",
              gourmetTip: "「無料和洋朝食バイキング」。あつあつのスクランブルエッグや焼き魚、北陸ならではの煮物や温かいお味噌汁が好評。",
              highlights: [
                "国宝瑞龍寺口徒歩1分・早朝参拝に最適＆ラジウム温泉大浴場" ,
                "ヨーロッパ直輸入パン無料朝食バイキング＆加湿空気清浄機完備" ,
                "瑞龍寺新春初詣の拠点に最適・リーズナブルで快適なルートイン品質"
              ]
            }
  ];

  const faqs = [
    {
      q: "加賀前田家ゆかりの国宝「高岡瑞龍寺（ずいりゅうじ）」の新春初詣の見どころは？",
      a: "高岡瑞龍寺は、加賀藩二代当主・前田利長公の菩提を弔うため、三代当主・前田利常公が約20年の歳月をかけて建立した曹洞宗の名刹です。富山県唯一の国宝に指定されており、総門・山門・仏殿・法堂が一直線に並び、周囲を回廊が美しく取り囲む壮麗な「禅宗様伽藍配置」が完璧な形で現存しています。冬の瑞龍寺は、白雪をまとった回廊や屋根の反り、白砂と玉砂利が織りなすモノトーンの美しさが際立ちます。正月三が日には新春初詣客で賑わい、烏瑟沙摩明王（うすさまみょうおう：不浄を清める神）が祀られる法堂で開運厄除けや心身清浄を祈願するのが習わしです。"
    },
    {
      q: "雨晴海岸（あまはらしかいがん）の冬の奇跡「気嵐（けあらし）」と立山連峰の絶景条件は？",
      a: "雨晴海岸は、海越しに標高3,000m級の立山連峰を望むことができる世界でも極めて珍しい景勝地です。特に11月〜1月の真冬の晴天の早朝（日の出前後）、海水温に対して放射冷却で放射された冷たい大気（氷点下近く）が流れ込むことで、海面から水蒸気が湯気のように立ち上る「気嵐（けあらし）」が発生します。黄金色の朝日に照らされた気嵐が海面を覆い、その奥に白銀に輝く立山連峰と義経岩のシルエットが浮かび上がる光景は、息を呑むほどの神々しさです。気嵐の発生条件は「前夜が快晴」「放射冷却で氷点下前後に冷え込む」「風が弱い早朝」です。"
    },
    {
      q: "新湊漁港名物の「昼セリ」と「新湊紅ズワイガニ」の特徴は？",
      a: "通常、全国の漁港での競りは未明から早朝に行われますが、新湊漁港では全国的にも極めて珍しい「昼セリ（13時〜）」が行われています。これは、富山湾特有の「あいがめ」と呼ばれる急峻な海底谷が港から至近にあるため、午前中に出漁した船が獲れたてピチピチのカニを午後すぐに水揚げできるためです。床一面に敷き詰められた真っ赤な紅ズワイガニが威勢よく競り落とされる光景は見学デッキから見学可能。セリ落とされたばかりの紅ズワイガニはすぐに大釜で茹で上げられ、隣接するカニ小屋や宿で熱々の甘い蟹肉と濃厚なカニミソを味わえます。"
    },
    {
      q: "冬の富山湾の味覚「寒ブリ」と「富山湾鮨」の魅力は？",
      a: "冬の富山湾は「天然の生け簀」と呼ばれ、11月下旬から1月にかけて産卵のために北海道から南下してくるブリが能登半島に沿って富山湾に迷い込みます。荒波を乗り越え脂が乗った「富山湾の寒ブリ（ひみ寒ぶり等）」は、身が引き締まりながらもとろけるような脂の甘みが絶品です。刺身はもちろん、出汁にさっとくぐらせる「ブリしゃぶ」や、大根に旨味が染み渡る「ブリ大根」は冬の至福。また、県内の加盟店で提供される「富山湾鮨」は、寒ブリ、紅ズワイガニ、白えびなど富山湾の朝獲れ極上地魚だけで握る特別なセットで、冬の富山を訪れたら必食の美食です。"
    },
    {
      q: "高岡・射水・雨晴海岸を巡る1泊2日の冬の王道モデルコースを教えてください。",
      a: "【1日目】北陸新幹線新高岡駅または高岡駅に到着 → 国宝「高岡瑞龍寺」で新春初詣＆美しい禅宗伽藍見学 → 高岡大仏参拝と金屋町の石畳通りで高岡銅器・錫クラフト散策 → 射水市へ移動し「日本のベニス」内川のノスタルジックな港町散歩 → 新湊漁港で迫力の「昼セリ」見学＆茹でたて紅ズワイガニのランチ → 雨晴温泉（磯はなび等）にチェックイン → 露天風呂から富山湾と立山連峰の夕景を望む → 夕食に「富山湾寒ブリ＆紅ズワイガニ会席」を満喫。【2日目】早朝、雨晴海岸で「気嵐」と白銀の立山連峰の奇跡の日の出絶景を鑑賞 → 朝風呂と朝食 → 道の駅雨晴でお土産購入 → 高岡駅でお土産（ます寿し、白えびせんべい）を購入して帰路へ。"
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
            <span className="text-slate-900 font-semibold">富山・高岡瑞龍寺初詣＆雨晴気嵐・新湊カニ名宿</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-cyan-950 via-blue-950 to-slate-900 text-white py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/30 border border-blue-300/40 text-blue-200 text-xs md:text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-300" />
              <span>11月・12月・1月冬の越中富山旅情特集</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 text-white drop-shadow-md">
              富山・高岡＆射水・新湊・雨晴<br className="hidden sm:inline" />
              国宝「高岡瑞龍寺」新春初詣＆雨晴海岸の気嵐絶景！<br className="hidden sm:inline" />
              新湊紅ズワイガニ・富山湾寒ブリ＆高岡名宿5選
            </h1>
            <p className="max-w-3xl mx-auto text-sm md:text-lg text-blue-100 leading-relaxed drop-shadow">
              前田利長公の菩提を弔う壮麗な国宝・瑞龍寺の冬景色と新春祈願。富山湾の海面から湯気が立ち上る冬の奇跡「雨晴海岸の気嵐」と冠雪の立山連峰。新湊名物「昼セリ」直送の甘い紅ズワイガニと寒ブリを堪能する、北陸富山の冬の極上紀行。
            </p>
          </div>
        </header>

        {/* Article Summary Box */}
        <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>本特集でわかること（11・12・1月の富山・高岡＆射水旅行の要点）</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
              <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100">
                <span className="font-bold text-blue-900 block mb-1">① 国宝瑞龍寺初詣＆高岡大仏</span>
                富山県唯一の国宝寺院。雪をまとった禅宗様伽藍の回廊美と烏瑟沙摩明王の祈祷。銅器の街・高岡大仏の威容。
              </div>
              <div className="bg-cyan-50/60 p-4 rounded-xl border border-cyan-100">
                <span className="font-bold text-cyan-900 block mb-1">② 雨晴海岸の気嵐＆立山連峰</span>
                冬の早朝、海から湯気が沸き立つ幻想の「気嵐」。海越しに標高3,000m級の白い立山連峰を望む世界無二の絶景。
              </div>
              <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-100">
                <span className="font-bold text-rose-900 block mb-1">③ 新湊紅ズワイガニ昼セリ＆寒ブリ</span>
                全国唯一の「昼セリ」で競り落とされる茹でたて紅ズワイガニ。富山湾の冬の王者・脂が乗った寒ブリと白えび。
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Regional Editorial Section */}
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
          <section className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">TOYAMA BAY & TAKAOKA ESSENCE</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                なぜ11〜1月の高岡・雨晴・新湊なのか？国宝の静寂と奇跡の自然現象
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                富山県西部に位置する高岡市と射水市は、加賀前田家が築いた重厚な歴史文化と、世界で最も美しい湾クラブにも加盟する富山湾の恵みが凝縮されたエリアです。11月から1月にかけての冬期は、北陸ならではの雪と海が共鳴し、他の季節では決して見ることのできない神々しい絶景と最高の美味が一堂に会する奇跡の季節です。
              </p>
              <p>
                高岡の誇る「瑞龍寺」は、加賀藩二代当主・前田利長公を弔うために三代利常公が建立した名刹で、富山県で唯一の「国宝」に指定されています。総門、山門、仏殿、法堂が一直線に並び、これらを左右の回廊が結ぶ整然たる禅宗様建築は、雪が降る冬にこそ真骨頂を発揮します。屋根に白雪が積もり、白砂の庭と玉砂利が静まり返るモノトーンの境内は、凛とした静寂に包まれ、新春の初詣で訪れる人々の心を厳かに浄化してくれます。
              </p>
              <p>
                城下町・高岡は、加賀前田家が七人の鋳物師を招いて興した「高岡銅器」と「高岡漆器」の職人町としても400年余の歴史を誇ります。千本格子の町家が連なる金屋町の石畳通りには、今も銅器や錫（すず）の工房が軒を連ね、錫製のぐい呑みや酒器の手作り体験が人気です。冬の冷涼な空気の中で職人の手仕事に触れ、マイ酒器で富山の地酒をいただく旅は、大人ならではの贅沢な文化体験と言えるでしょう。
              </p>
              <p>
                そして冬の富山湾を語る上で欠かせないのが「雨晴海岸の気嵐（けあらし）」です。真冬の冷え込んだ晴天の朝、氷点下の大気が海面に流れ込むことで水蒸気が一気に霧となって立ち上り、まるで海が湯気を立てて沸騰しているかのような幻想的な光景が広がります。その気嵐のヴェールの向こう側、群青色の富山湾を挟んで3,000メートル級の白銀の立山連峰が聳え立つ姿は、万葉の歌人・大伴家持も讃えた有磯海の真のクライマックスです。
              </p>
              <p>
                さらに食においては、新湊漁港で全国的にも珍しい「昼セリ」が行われ、午後に水揚げされたばかりの新鮮な「新湊紅ズワイガニ」がその場で大釜で茹で上げられます。身がぎっしり詰まり、甘みの強い蟹肉と濃厚なカニミソを熱々で味わう贅沢は新湊ならでは。富山湾の定置網で獲れる脂がのりきった「寒ブリ」の刺身やブリしゃぶ、宝石と称される「白えび」など、日本一と称される冬の富山湾の海の幸を心ゆくまで堪能できます。
              </p>
            </div>
          </section>

          {/* Section: Spots to visit */}
          <section className="bg-slate-100 rounded-3xl p-6 md:p-10 space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-6 h-6 text-blue-600" />
              <span>冬の高岡＆射水・新湊で絶対に巡りたい名所</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-base text-blue-900 flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-blue-600" />
                  <span>国宝・高岡瑞龍寺と高岡大仏</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  前田利長公の菩提寺。冬の雪をまとった仏殿と回廊の美しさは息を呑むほど。新春初詣では烏瑟沙摩明王の祈祷やお札を受ける参拝客で賑わいます。近くの高岡大仏は日本三大仏に数えられ、端正な顔立ちで知られます。
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-base text-cyan-900 flex items-center gap-1.5">
                  <Sunrise className="w-4 h-4 text-cyan-600" />
                  <span>雨晴海岸・義経岩と冬の気嵐</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  源義経が奥州へ落ち延びる際に雨宿りをした伝説が残る義経岩。11月〜1月の早朝、海から立ち上る気嵐と、冠雪した立山連峰から昇る朝日の光景は、日本屈指の冬の絶景写真スポットです。
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-base text-rose-900 flex items-center gap-1.5">
                  <Anchor className="w-4 h-4 text-rose-600" />
                  <span>新湊漁港「昼セリ」とカニ小屋</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  午後13時から始まる全国屈指の活気ある昼セリ。床一面に並ぶ紅ズワイガニの赤とセリ人の熱気を2階見学通路から体感。すぐ隣のカニ小屋では、茹でたてのジューシーな熱々紅ズワイガニを豪快に味わえます。
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-base text-teal-900 flex items-center gap-1.5">
                  <Waves className="w-4 h-4 text-teal-600" />
                  <span>射水・内川の運河風景（日本のベニス）</span>
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  東西に流れる内川沿いに民家が立ち並び、漁船が係留される風情ある港町。スペインの建築家がデザインした東橋をはじめ個性的な橋が架かり、雪降る冬の夕暮れは映画のワンシーンのようなノスタルジーを醸し出します。
                </p>
              </div>
            </div>
          </section>

          {/* Hotel List Section */}
          <section className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">FEATURED ACCOMMODATIONS</span>
              <h2 className="text-xl md:text-3xl font-black text-slate-900">
                高岡＆射水・新湊・雨晴を満喫する厳選ホテル・宿5選
              </h2>
              <p className="text-xs md:text-sm text-slate-500 mt-1">
                ※楽天トラベルAPIより最新の空室状況・料金・レビュー情報を取得して掲載しています。
              </p>
            </div>

            <div className="space-y-8">
              {hotelsList.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition flex flex-col md:flex-row">
                  <div className="md:w-5/12 relative h-64 md:h-auto min-h-[240px]">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-blue-700/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      厳選宿 #{hotel.id}
                    </div>
                  </div>
                  <div className="md:w-7/12 p-6 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center text-amber-500 font-bold text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" />
                          <span>{hotel.rating}</span>
                        </div>
                        <span className="text-xs text-slate-400">（口コミ {hotel.reviews}件）</span>
                        <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded ml-auto">
                          目安: {hotel.price}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 leading-snug">
                        {hotel.name}
                      </h3>
                      <p className="text-xs text-slate-500 mb-3 flex items-start gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span>{hotel.access}</span>
                      </p>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
                        {hotel.story}
                      </p>
                      <div className="space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700">
                        {hotel.highlights.map((hl: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <div className="text-xs text-slate-500">
                        <span className="font-semibold text-slate-700 block">おすすめ客室:</span>
                        {hotel.roomTip}
                      </div>
                      <a 
                        href={hotel.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs md:text-sm px-4 py-2.5 rounded-xl transition shadow-sm flex-shrink-0 ml-3"
                      >
                        <span>プラン詳細・予約</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Model Course Section */}
          <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">RECOMMENDED ITINERARY</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">
                1泊2日！国宝瑞龍寺初詣と雨晴気嵐・新湊カニ尽くしを巡る冬の王道モデルコース
              </h3>
            </div>
            
            <div className="relative border-l-2 border-blue-200 ml-4 pl-6 space-y-8 text-sm">
              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-blue-700 block mb-1">1日目 10:00 | 高岡に到着</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">国宝「高岡瑞龍寺」で新春初詣＆高岡大仏参拝</h4>
                <p className="text-slate-600 leading-relaxed">
                  北陸新幹線新高岡駅または高岡駅に到着後、国宝瑞龍寺へ。雪をかぶった美しい禅宗様建築と回廊を巡り、法堂で新年の厄除け祈祷。高岡大仏を参拝し、金屋町で鋳物クラフトを見学。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-blue-700 block mb-1">1日目 12:45 | 射水・新湊漁港へ移動</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">名物「新湊昼セリ」見学＆カニ小屋で茹でたて紅ズワイガニ</h4>
                <p className="text-slate-600 leading-relaxed">
                  車または万葉線で新湊へ。13時からの迫力ある昼セリを見学。セリ落とされたばかりの真っ赤な紅ズワイガニを大釜で茹で上げ、熱々を丸ごと一杯いただく至福のランチ。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-blue-700 block mb-1">1日目 16:30 | 雨晴温泉にチェックイン</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">海と立山連峰を望む絶景露天風呂＆富山湾寒ブリ会席</h4>
                <p className="text-slate-600 leading-relaxed">
                  太田雨晴の高台に建つ「雨晴温泉 磯はなび」にチェックイン。夕暮れの富山湾を見下ろす露天風呂で温まる。夕食は脂の乗った寒ブリの刺身とブリしゃぶ、白えびを富山の銘酒とともに堪能。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-blue-700 block mb-1">2日目 06:45 | 雨晴海岸の朝</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">海面が湯気立つ「気嵐」と白銀の立山連峰・奇跡の日の出</h4>
                <p className="text-slate-600 leading-relaxed">
                  防寒具を着込み雨晴海岸へ。冷涼な空気の中、富山湾から立ち上る幻想的な気嵐と、海越しにそびえる純白の立山連峰から昇る朝日の奇跡の絶景を目に焼き付ける。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow"></span>
                <span className="text-xs font-bold text-blue-700 block mb-1">2日目 11:00 | 内川散策＆お土産購入</span>
                <h4 className="font-bold text-slate-900 text-base mb-1">日本のベニス内川散策と名物「ます寿し」買い出し</h4>
                <p className="text-slate-600 leading-relaxed">
                  内川運河のノスタルジックな港町を散歩。高岡駅や新高岡駅でお土産に富山名物の鱒寿司、白えびせんべい、高岡錫製酒器を購入して満足の帰路へ。
                </p>
              </div>
            </div>
          </section>

          {/* Winter Travel Tips */}
          <section className="bg-amber-50/70 border border-amber-200 rounded-3xl p-6 md:p-8 space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-amber-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span>冬（11・12・1月）の富山・高岡＆射水旅行・お役立ちTips</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-amber-950">
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・雨晴海岸の気嵐鑑賞時の防寒対策</strong>
                気嵐は氷点下近くまで冷え込む晴天の早朝に発生します。海岸沿いは海風が吹き抜けるため、体感温度は氷点下5度以下に感じられます。ロングダウン、防風パンツ、手袋、耳当て、カイロの万全な防寒が必須です。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・北陸の積雪とスタッドレスタイヤ</strong>
                富山県は豪雪地帯です。国道や幹線道路は消雪パイプが整備されていますが、寒波の襲来時は短時間で大雪になることがあります。レンタカー利用時は必ずスタッドレスタイヤを装着し、余裕をもった旅程を組みましょう。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・新湊昼セリの見学予約</strong>
                新湊漁港の昼セリ見学（カニ小屋含む）は、事前の見学予約が必要な場合があります。また水曜や日曜、海上のシケで出漁できない日はセリが休みになるため、事前に運行カレンダーを確認してください。
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-amber-100">
                <strong className="block mb-1 text-amber-900 font-bold">・万葉線（路面電車）の活用</strong>
                高岡駅から新湊（越ノ潟）までは、路面電車「万葉線」が運行しています。冬の雪道運転が不安な方でも、車を使わずに高岡大仏や内川、新湊エリアをのんびり観光できる便利な公共交通です。
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">
                高岡＆射水・新湊・雨晴の冬旅に関するよくある質問
              </h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                    <span className="text-blue-600 font-black">Q.</span>
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links Section */}
          <section className="bg-slate-100 rounded-3xl p-6 md:p-8 space-y-4">
            <h3 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span>富山および北陸甲信越の冬の厳選温泉・カニ特集</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <Link href="/winter-toyama-unazuki-onsen-kurobe-snow-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-400 transition font-medium text-slate-700">
                ♨️ 宇奈月温泉と黒部峡谷雪景色名宿
              </Link>
              <Link href="/winter-toyama-shogawa-onsen-snow-cruise-crab-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-400 transition font-medium text-slate-700">
                🚢 庄川峡雪見クルーズと温泉名宿
              </Link>
              <Link href="/winter-ishikawa-kanazawa-city-kenrokuen-yukizuri-koubako-crab-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-400 transition font-medium text-slate-700">
                🦀 金沢兼六園雪吊りと香箱ガニ名宿
              </Link>
              <Link href="/winter-fukui-echizen-coast-suisen-crab-misaki-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-400 transition font-medium text-slate-700">
                🦀 越前海岸水仙まつりと越前がに名宿
              </Link>
              <Link href="/winter-niigata-myoko-akakura-onsen-snow-nodoguro-stay" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-400 transition font-medium text-slate-700">
                🎿 妙高赤倉温泉雪見露天とのどぐろ名宿
              </Link>
              <Link href="/features" className="p-3 bg-blue-700 text-white rounded-xl font-bold hover:bg-blue-800 transition text-center flex items-center justify-center">
                ❄️ 全国の冬の厳選特集一覧を見る →
              </Link>
            </div>
          </section>
        </main>
      
      <HubRelatedPosts currentSlug="winter-toyama-takaoka-imizu-zuiryuji-hatsumode-shinminato-crab-stay" />
</div>
    </>
  );
}
