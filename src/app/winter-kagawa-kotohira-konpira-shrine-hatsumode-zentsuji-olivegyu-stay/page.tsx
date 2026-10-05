import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月香川】四国随一の初詣「金刀比羅宮」785段石段と弘法大師誕生の地「善通寺」新春祈願！讃岐オリーブ牛＆こんぴら温泉郷名宿5選",
  description: "四国屈指のパワースポット「こんぴらさん」で迎える11〜1月の冬紀行。古くから「一生に一度はこんぴら参り」と親しまれる金刀比羅宮御本宮785段・奥社1368段の石段参拝と新春初詣、弘法大師空海御誕生の地・総本山善通寺の厳かな祈願。冬の讃岐平野に映える讃岐富士（飯野山）の絶景。冷えた身体を芯から解きほぐす「こんぴら温泉郷」の名湯露天風呂と、冬に脂の甘みが極まる讃岐オリーブ牛、本場の熱々讃岐うどん、骨付鳥を味わい尽くす厳選名宿5選を徹底解説。",
  keywords: '金刀比羅宮 初詣, こんぴらさん 温泉, 善通寺 初詣, こんぴら温泉郷 名宿, 讃岐オリーブ牛, 紅梅亭, 琴参閣, 敷島館, 香川 冬旅行, 琴平温泉 露天風呂',
  alternates: {
    canonical: 'https://croud-travel.com/winter-kagawa-kotohira-konpira-shrine-hatsumode-zentsuji-olivegyu-stay'
  },
  openGraph: {
    title: "【11・12・1月香川】四国随一の初詣「金刀比羅宮」785段石段と弘法大師誕生の地「善通寺」新春祈願！讃岐オリーブ牛＆こんぴら温泉郷名宿5選",
    description: "四国屈指のパワースポット「こんぴらさん」で迎える11〜1月の冬紀行。古くから「一生に一度はこんぴら参り」と親しまれる金刀比羅宮御本宮785段・奥社1368段の石段参拝と新春初詣、弘法大師空海御誕生の地・総本山善通寺の厳かな祈願。冬の讃岐平野に映える讃岐富士（飯野山）の絶景。冷えた身体を芯から解きほぐす「こんぴら温泉郷」の名湯露天風呂と、冬に脂の甘みが極まる讃岐オリーブ牛、本場の熱々讃岐うどん、骨付鳥を味わい尽くす厳選名宿5選を徹底解説。",
    url: 'https://croud-travel.com/winter-kagawa-kotohira-konpira-shrine-hatsumode-zentsuji-olivegyu-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の金刀比羅宮本宮石段と讃岐富士を望むこんぴら温泉郷'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月香川】四国随一の初詣「金刀比羅宮」785段石段と弘法大師誕生の地「善通寺」新春祈願！讃岐オリーブ牛＆こんぴら温泉郷名宿5選",
    description: "四国屈指のパワースポット「こんぴらさん」で迎える11〜1月の冬紀行。古くから「一生に一度はこんぴら参り」と親しまれる金刀比羅宮御本宮785段・奥社1368段の石段参拝と新春初詣、弘法大師空海御誕生の地・総本山善通寺の厳かな祈願。冬の讃岐平野に映える讃岐富士（飯野山）の絶景。冷えた身体を芯から解きほぐす「こんぴら温泉郷」の名湯露天風呂と、冬に脂の甘みが極まる讃岐オリーブ牛、本場の熱々讃岐うどん、骨付鳥を味わい尽くす厳選名宿5選を徹底解説。",
    images: ['https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export const dynamic = 'force-static';

export default function KagawaKotohiraWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月香川】四国随一の初詣「金刀比羅宮」785段石段と弘法大師誕生の地「善通寺」新春祈願！讃岐オリーブ牛＆こんぴら温泉郷名宿5選",
    "description": "四国屈指のパワースポット「こんぴらさん」で迎える11〜1月の冬紀行。古くから「一生に一度はこんぴら参り」と親しまれる金刀比羅宮御本宮785段・奥社1368段の石段参拝と新春初詣、弘法大師空海御誕生の地・総本山善通寺の厳かな祈願。冬の讃岐平野に映える讃岐富士（飯野山）の絶景。冷えた身体を芯から解きほぐす「こんぴら温泉郷」の名湯露天風呂と、冬に脂の甘みが極まる讃岐オリーブ牛、本場の熱々讃岐うどん、骨付鳥を味わい尽くす厳選名宿5選を徹底解説。",
    "image": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80",
    "datePublished": "2026-10-05T18:00:00+09:00",
    "dateModified": "2026-10-05T18:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "旅宿クラウド 編集部",
      "url": "https://croud-travel.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.com/winter-kagawa-kotohira-konpira-shrine-hatsumode-zentsuji-olivegyu-stay"
    }
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
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
        "name": "特集一覧",
        "item": "https://croud-travel.com/features"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "香川・琴平＆善通寺 冬特集",
        "item": "https://croud-travel.com/winter-kagawa-kotohira-konpira-shrine-hatsumode-zentsuji-olivegyu-stay"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "冬（11・12・1月）のこんぴらさん（金刀比羅宮）初詣の石段段数と参拝所要時間は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "金刀比羅宮は海の守護神「大物主神（おおものぬしのかみ）」を祀る古社で、表参道から御本宮までは785段、さらに奥社の厳魂神社（いづたまじんじゃ）までは1368段の石段が続きます。御本宮までの往復所要時間は大人の足で約1時間30分〜2時間、奥社まで足を伸ばす場合は約2時間30分〜3時間程度が目安です。11月は紅葉の名残と澄んだ冬晴れ、正月三が日は四国屈指の初詣客で賑わいます。冬は冷え込みますが階段を登ると汗をかくため、着脱しやすい防寒着と歩きやすいスニーカーの着用が必須です。"
        }
      },
      {
        "@type": "Question",
        "name": "金刀比羅宮とあわせて巡りたい「総本山善通寺」の新春初詣の見どころは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "善通寺は弘法大師空海御誕生の地であり、京都の東寺・高野山金剛峯寺と並ぶ弘法大師三大霊跡の一つ、四国八十八ヶ所霊場第75番札所です。琴平町から車で約15分、電車（JR土讃線）でも約10分と至近にあります。広大な境内は東院（伽藍）と西院（誕生院）に分かれ、国宝の金銅釈迦如来像や高さ43mの五重塔、大師堂の地下約100mを暗闇の中で進む「戒壇めぐり（かいだんめぐり）」が有名です。新年の心願成就や交通安全・厄除け祈願に多くの参拝者が訪れます。"
        }
      },
      {
        "@type": "Question",
        "name": "冬の香川・讃岐旅行で絶対に食べたい名物グルメは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "冬の香川では、オリーブの搾り果実を与えて育てた「讃岐オリーブ牛」が脂の甘みと赤身の旨味のピークを迎えます。また、冬の讃岐うどんは熱々の「釜揚げうどん」や、いりこ出汁が香る「かけうどん」、根菜たっぷりの冬限定「しっぽくうどん」が格別です。さらに香川県民のソウルフードであるスパイシーな「骨付鳥（若どり・親どり）」や、冬の瀬戸内海で獲れる寒鰆（さわら）、オリーブハマチなど、冬ならではの濃密な美食が揃っています。"
        }
      },
      {
        "@type": "Question",
        "name": "冬のこんぴら温泉郷の泉質と温泉街の風情は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "こんぴら温泉郷は比較的新しい温泉地ながら、ナトリウム・カルシウム-塩化物・炭酸水素塩泉や単純弱放射能冷鉱泉など複数の良質な源泉を有しています。保温効果が高く湯冷めしにくいため、石段参拝で疲労した足腰や冷えた身体を温めるのに最適です。表参道周辺には昔ながらの土産物店、地酒「金陵」の酒蔵を改修した資料館、灸まんや船々せんべいのお店が並び、夕暮れ時には提灯の灯りが門前町を情緒豊かに彩ります。"
        }
      },
      {
        "@type": "Question",
        "name": "冬の琴平・善通寺へのアクセスと雪道運転の心配は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "琴平・善通寺周辺は瀬戸内海式気候に属し、冬期でも平野部での積雪は年に数回程度と極めて稀で、比較的温暖です。本州からは瀬戸大橋（瀬戸中央自動車道）経由で善通寺ICまで直結、高松空港からも琴平行きリムジンバスで約45分、JR岡山駅からは特急「南風」で琴平駅まで約1時間と、公共交通機関でのアクセスも抜群です。ただし寒波来襲時や早朝の峠道では路面凍結の可能性があるため、天気予報を確認してお出かけください。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "湯元こんぴら温泉華の湯　紅梅亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5901/5901.jpg",
              rating: 4.58,
              reviews: 1791,
              price: "¥13,200〜",
              access: "ＪＲ琴平駅下車、徒歩5分（無料送迎有・要予約）。車：道善通寺ＩＣ下車約15分。高松空港より約40分",
              special: "露天風呂付スイートOPEN◆2種の源泉を楽しむ＜3箇所15種類の湯処＞でのんびり湯巡り",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5901%2F5901.html",
              story: "金刀比羅宮の参道口まで徒歩約5分、温泉街の中心に佇み華やかな和モダン空間が広がる「湯元こんぴら温泉華の湯 紅梅亭」。敷地内には2種類の源泉を有し、男性大浴場・女性大浴場を合わせて多彩な趣の露天風呂や庭園風呂、割烹ダイニングを完備。冬の参拝帰りの冷えた足を優しく温める露天風呂は格別の心地よさです。夕食には香川県が世界に誇るプレミアム黒毛和牛「讃岐オリーブ牛」の鉄板焼きやしゃぶしゃぶ、冬の瀬戸内海で水揚げされた活魚の造りが並び、讃岐の冬の味覚を心ゆくまで堪能できます。",
              roomTip: "露天風呂付き客室「花の間」または和洋室。冬の澄んだ空気の中、客室にいながらにして琴平の静寂と名湯を独り占めできる至福の空間。",
              gourmetTip: "「讃岐オリーブ牛と旬魚の極上会席」。オリーブ飼料で育ったオリーブ牛のきめ細やかな霜降りと上品な甘みが口いっぱいに広がります。",
              highlights: [
                "2種類の自家源泉と多彩な庭園露天風呂・金刀比羅宮参道口まで徒歩約5分の極上温泉宿" ,
                "香川が誇るブランド黒毛和牛「讃岐オリーブ牛」鉄板焼き＆瀬戸内鮮魚の極上会席" ,
                "露天風呂付き客室やプライベートサウナ・冬の初詣後の冷えた身体を芯から癒やす湯処"
              ]
            },
            {
              id: 2,
              name: "ことひら温泉　琴参閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14833/14833.jpg",
              rating: 4.37,
              reviews: 3216,
              price: "¥11,000〜",
              access: "ＪＲ琴平駅より徒歩５分／善通寺ＩＣより車で１５分",
              special: "風雅な寛ぎと古き良き日本の心。男女６種の浴槽を持つ讃水館大浴場と飛天館宿泊者専用展望風呂を堪能下さい",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14833%2F14833.html",
              story: "JR琴平駅から徒歩約5分、参道へも徒歩圏内に位置する「ことひら温泉 琴参閣」。風格漂う高級別館「飛天館」と、広々とした造りで家族連れにも人気の本館「讃水館」から成る琴平温泉郷屈指の大型名旅館です。自慢は四国最大級の規模を誇る大浴場。金比羅歌舞伎の舞台を思わせる吹き抜けの庭園露天風呂や船の形をした名物「八塩の湯」など、多彩な湯舟で湯巡りを満喫できます。毎朝職人が手打ちする讃岐うどんの実演朝食や、冬の讃岐の郷土料理が彩る贅沢な夕食膳も評判です。",
              roomTip: "飛天館専用展望風呂付き和洋室。高層階からは象頭山に抱かれた琴平の門前町や讃岐平野の冬景色が一望できます。",
              gourmetTip: "「讃岐三彩会席」。冬の讃岐で脂がのった寒鰆やハマチの刺身、オリーブ牛の陶板焼き、打ちたて茹でたての讃岐うどんを堪能。",
              highlights: [
                "四国最大級のスケールを誇る大浴場＆船型風呂・手打ち讃岐うどん実演朝食バイキング" ,
                "琴平温泉郷の象徴・飛天館と讃水館の2棟編成で幅広い旅行スタイルに対応" ,
                "JR琴平駅から徒歩5分の好アクセス・門前町の散策や善通寺・丸亀への観光拠点に最適"
              ]
            },
            {
              id: 3,
              name: "御宿　敷島館（共立リゾート）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/176626/176626.jpg",
              rating: 4.56,
              reviews: 1787,
              price: "¥13,700〜",
              access: "ＪＲ琴平駅より徒歩にて約８分◆お車ナビには目的地：香川県仲多度郡琴平町８５１ー１（駐車場）経由地：琴平小学校を設定下さい",
              special: "おかげさまで開業7周年★貸切風呂や夜食など無料のサービスが充実！近隣にペット預かり施設もあり★",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176626%2F176626.html",
              story: "金刀比羅宮の表参道沿いに堂々と佇み、国の登録有形文化財であった名旅館の佇まいを現代に復元した共立リゾートの湯宿「御宿 敷島館」。唐破風の威厳ある玄関をくぐると、全館畳敷きの温もりあふれる和の空間が広がります。館内には男女別大浴場のほか、趣の異なる4つの無料貸切風呂（檜・岩・陶器など）があり、真冬でも空いていれば何度でもプライベートに湯浴みを楽しめます。お夜食の無料サービス「夜鳴きそば」や、参道すぐという立地を活かした早朝の新春初詣参拝が大きな魅力です。",
              roomTip: "表参道側和洋室。格子窓越しに情緒ある門前町の石畳や冬の参道の賑わいを眺めながら、ゆったりと寛げます。",
              gourmetTip: "「季節の和会席＆名物夜鳴きそば」。瀬戸内の海の幸と讃岐の山の幸を贅沢に盛り込んだ会席料理のあと、夜の特製醤油ラーメンで心も温まる。",
              highlights: [
                "表参道沿いに佇む登録有形文化財復元の格式・4つの無料貸切風呂と名物夜鳴きそば" ,
                "全館畳敷きの温もり・早朝の金刀比羅宮本宮参拝へのアクセスが最も軽快な好立地" ,
                "共立リゾートならではの細やかな湯上がりアイスやおもてなしサービスが充実"
              ]
            },
            {
              id: 4,
              name: "こんぴら温泉　琴平グランドホテル　桜の抄",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5900/5900.jpg",
              rating: 4.59,
              reviews: 2046,
              price: "¥14,850〜",
              access: "全室Wi-Fi無料/ＪＲ琴平駅下車、徒歩約15分（無料送迎有・要予約）。車/善通寺ＩＣより約15分　高松空港より約40分",
              special: "金刀比羅宮に続く参道まで徒歩1分で参拝に便利な温泉宿。和洋約50種類の朝食バイキング好評。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5900%2F5900.html",
              story: "金刀比羅宮の参道22段目に位置し、参拝へのアクセスにおいて随一の利便性を誇る「こんぴら温泉 琴平グランドホテル 桜の抄」。女性大浴場にはバラの花びらを浮かべた優雅な「華風呂」、露天風呂からは象頭山の冬の木々や琴平の町並みを望むことができます。参道の賑わいを感じながらも館内は落ち着きに満ちた洗練されたリゾートホテル仕様。夕食には讃岐牛をはじめとする四国の山海の恵みをオープンキッチンから出来立てで届けるコースが人気で、カップルや女性旅、初詣旅に絶大な支持を集めています。",
              roomTip: "展望露天風呂付き客室「ゆらく」。プライベート露天風呂から冬の満天の星空と門前町の灯りを眺める贅沢な夜を過ごせます。",
              gourmetTip: "「和洋特選会席」。厳選された讃岐オリーブ牛のフィレステーキや、冬の旬魚の握り寿司など、料理長こだわりの創作美食。",
              highlights: [
                "参道22段目に位置する抜群の参拝利便性・女性に喜ばれる華風呂と展望露天風呂" ,
                "オープンキッチンから届く熱々の讃岐牛料理＆象頭山を望む絶景プライベート露天" ,
                "カップルや記念日旅行に人気・象頭山の冬の木々を望みながら味わう優雅なひととき"
              ]
            },
            {
              id: 5,
              name: "こんぴら温泉　琴平花壇",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7247/7247.jpg",
              rating: 4.60,
              reviews: 1058,
              price: "¥11,710〜",
              access: "電車:JR・琴電琴平駅より徒歩15分（無料送迎バス有）／車:善通寺ICより15分・高松空港より35分",
              special: "創業400年、名だたる文人墨客も逗留した四季薫る庭園の温泉宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7247%2F7247.html",
              story: "創業400余年、森鴎外や北原白秋など名だたる文人墨客が投宿した歴史を紡ぐ琴平屈指の老舗料亭旅館「こんぴら温泉 琴平花壇」。象頭山の豊かな自然林に囲まれた広大な日本庭園を有し、数寄屋造りの離れや近代的な和洋室が美しく調和しています。庭園を望む露天風呂からは、冬の澄んだ青空と讃岐富士（飯野山）の優美な稜線を一望。長年培われた料亭の技が光る本格会席料理と、琴平の歴史そのものを体現する静謐なおもてなしは、新年の特別な旅路にふさわしい最高峰の体験を約束します。",
              roomTip: "数寄屋造り離れまたは庭園側和洋室。四季の移ろいを映す名園と琴平の風情を間近に感じる、プライベート感あふれる極上の静寂。",
              gourmetTip: "「料亭花壇の伝統会席」。厳選した讃岐牛、瀬戸内の冬真鯛や伊勢海老を、熟練の職人が出汁と火入れにこだわり抜いて仕立てる伝統の味。",
              highlights: [
                "創業400余年の老舗料亭旅館・文人墨客ゆかりの日本庭園と讃岐富士を望む露天風呂" ,
                "名園に佇む数寄屋造りの離れ客室・料理長が伝統の出汁で仕立てる最高峰の和食会席" ,
                "四国屈指のステイタスを誇る名門宿・新春の特別な記念日やお祝い旅行に選ばれる名宿"
              ]
            }
  ];

  const faqsData = [
    {
      q: "冬（11・12・1月）のこんぴらさん（金刀比羅宮）初詣の石段段数と参拝所要時間は？",
      a: "金刀比羅宮は海の守護神「大物主神（おおものぬしのかみ）」を祀る古社で、表参道から御本宮までは785段、さらに奥社の厳魂神社（いづたまじんじゃ）までは1368段の石段が続きます。御本宮までの往復所要時間は大人の足で約1時間30分〜2時間、奥社まで足を伸ばす場合は約2時間30分〜3時間程度が目安です。11月は紅葉の名残と澄んだ冬晴れ、正月三が日は四国屈指の初詣客で賑わいます。冬は冷え込みますが階段を登ると汗をかくため、着脱しやすい防寒着と歩きやすいスニーカーの着用が必須です。"
    },
    {
      q: "金刀比羅宮とあわせて巡りたい「総本山善通寺」の新春初詣の見どころは？",
      a: "善通寺は弘法大師空海御誕生の地であり、京都の東寺・高野山金剛峯寺と並ぶ弘法大師三大霊跡の一つ、四国八十八ヶ所霊場第75番札所です。琴平町から車で約15分、電車（JR土讃線）でも約10分と至近にあります。広大な境内は東院（伽藍）と西院（誕生院）に分かれ、国宝の金銅釈迦如来像や高さ43mの五重塔、大師堂の地下約100mを暗闇の中で進む「戒壇めぐり（かいだんめぐり）」が有名です。新年の心願成就や交通安全・厄除け祈願に多くの参拝者が訪れます。"
    },
    {
      q: "冬の香川・讃岐旅行で絶対に食べたい名物グルメは？",
      a: "冬の香川では、オリーブの搾り果実を与えて育てた「讃岐オリーブ牛」が脂の甘みと赤身の旨味のピークを迎えます。また、冬の讃岐うどんは熱々の「釜揚げうどん」や、いりこ出汁が香る「かけうどん」、根菜たっぷりの冬限定「しっぽくうどん」が格別です。さらに香川県民のソウルフードであるスパイシーな「骨付鳥（若どり・親どり）」や、冬の瀬戸内海で獲れる寒鰆（さわら）、オリーブハマチなど、冬ならではの濃密な美食が揃っています。"
    },
    {
      q: "冬のこんぴら温泉郷の泉質と温泉街の風情は？",
      a: "こんぴら温泉郷は比較的新しい温泉地ながら、ナトリウム・カルシウム-塩化物・炭酸水素塩泉や単純弱放射能冷鉱泉など複数の良質な源泉を有しています。保温効果が高く湯冷めしにくいため、石段参拝で疲労した足腰や冷えた身体を温めるのに最適です。表参道周辺には昔ながらの土産物店、地酒「金陵」の酒蔵を改修した資料館、灸まんや船々せんべいのお店が並び、夕暮れ時には提灯の灯りが門前町を情緒豊かに彩ります。"
    },
    {
      q: "冬の琴平・善通寺へのアクセスと雪道運転の心配は？",
      a: "琴平・善通寺周辺は瀬戸内海式気候に属し、冬期でも平野部での積雪は年に数回程度と極めて稀で、比較的温暖です。本州からは瀬戸大橋（瀬戸中央自動車道）経由で善通寺ICまで直結、高松空港からも琴平行きリムジンバスで約45分、JR岡山駅からは特急「南風」で琴平駅まで約1時間と、公共交通機関でのアクセスも抜群です。ただし寒波来襲時や早朝の峠道では路面凍結の可能性があるため、天気予報を確認してお出かけください。"
    }
  ];

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-amber-950 via-slate-900 to-slate-800 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-amber-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Flame className="w-4 h-4 text-amber-300" />
            <span>四国・香川 讃岐路 冬の特別紀行（11月・12月・1月）</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 font-journal-serif">
            四国随一の初詣「金刀比羅宮」785段石段と弘法大師誕生の地「善通寺」新春祈願<br className="hidden md:inline" />
            讃岐オリーブ牛＆こんぴら温泉郷 名湯露天風呂宿5選
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mb-6">
            古くから「一生に一度はこんぴら参り」と日本人の憧れを集めてきた金刀比羅宮。冬の澄み渡る大気の中、象頭山の中腹へと続く785段の石段を踏みしめて迎える新春の祈願は、四国随一の神聖な力を放ちます。さらに弘法大師空海の生誕地・総本山善通寺の厳かな伽藍巡り、冬の讃岐平野に凛とそびえる讃岐富士（飯野山）。参拝の心地よい疲労を極上の自家源泉露天風呂が優しく包み込み、冬に旨味が凝縮する「讃岐オリーブ牛」や熱々の本場讃岐うどん、骨付鳥が旅の夜を満たします。新年の開運と心身の再生を叶える贅沢な冬旅へご案内します。
          </p>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-slate-200">
            <span className="bg-amber-900/60 border border-amber-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" /> 金刀比羅宮（御本宮785段・奥社1368段初詣）
            </span>
            <span className="bg-amber-900/60 border border-amber-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Building className="w-4 h-4 text-amber-400" /> 総本山善通寺（弘法大師誕生地・戒壇めぐり）
            </span>
            <span className="bg-amber-900/60 border border-amber-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-amber-400" /> 讃岐オリーブ牛＆冬の本場手打ち讃岐うどん
            </span>
          </div>
        </div>
      </header>

      {/* Summary Box */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-amber-600" />
            11・12・1月の琴平・善通寺 冬旅ハイライト
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div className="space-y-2 border-l-2 border-amber-500 pl-4">
              <h3 className="font-bold text-slate-900">一生に一度のこんぴら初詣</h3>
              <p className="text-xs md:text-sm leading-relaxed">
                海の守護神・大物主神を祀る金刀比羅宮。785段の石段を登り切った御本宮展望台からは、冬晴れの讃岐平野と讃岐富士（飯野山）、瀬戸内海の青い水平線まで一望。新年の誓いを立てる最高のパノラマが広がります。
              </p>
            </div>
            <div className="space-y-2 border-l-2 border-amber-500 pl-4">
              <h3 className="font-bold text-slate-900">空海生誕の地・善通寺の静寂</h3>
              <p className="text-xs md:text-sm leading-relaxed">
                四国八十八ヶ所第75番札所であり弘法大師三大霊跡の総本山善通寺。樹齢千数百年の大楠、高さ43mの国重文五重塔、一寸先も見えない暗闇の中で自己を見つめ直す大師堂地下「戒壇めぐり」で深い精神的充足を体験。
              </p>
            </div>
            <div className="space-y-2 border-l-2 border-amber-500 pl-4">
              <h3 className="font-bold text-slate-900">こんぴら温泉郷と讃岐美食</h3>
              <p className="text-xs md:text-sm leading-relaxed">
                保温効果抜群のこんぴら温泉の露天風呂で冷えた足を解きほぐす至福。小豆島オリーブの搾り果実で育ち旨味成分が詰まった「讃岐オリーブ牛」、熱々の釜揚げうどん、香ばしい骨付鳥が冬の夜を贅沢に彩ります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">

        {/* Section 1: Deep Regional Culture & Geography */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">HISTORICAL & CULTURAL JOURNEY</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                祈りの道が紡ぐ二千年の歴史：金刀比羅宮の信仰と善通寺の曼荼羅世界
              </h2>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm md:text-base space-y-4">
            <p>
              香川県中西部に位置する琴平町は、象頭山（ぞうずさん・標高538m）の東山麓に広がる門前町です。金刀比羅宮の創建は神代に遡り、主祭神の大物主神は農業・殖産・医薬、そして古来より瀬戸内海を行き交う船人たちの守護神として篤く崇敬されてきました。江戸時代には「伊勢参り」と並び「こんぴら参り」が庶民の二大憧れとなり、旅が許されなかった時代にも飼い主の代わりに犬が参拝する「こんぴら狗（いぬ）」の伝説が生まれるほど、その信仰は全国津々浦々に浸透しました。
            </p>
            <p>
              冬の11月から1月にかけての参道は、夏場の蒸し暑さが嘘のように清涼な風が吹き抜け、研ぎ澄まされた凛冽な空気に満たされます。表参道の大門（365段）までは活気ある土産物店が連なり、大門をくぐると神域の厳粛な静寂へと空気が一変します。特別名勝の書院には円山応挙の障壁画（重文）が遺され、御本宮（785段）の広場に立つと、冬の乾いた風の中に讃岐富士や瀬戸大橋のシルエットが鮮やかに浮かび上がります。さらに体力の許す旅人は、白峰神社を経て険しい山道を登り、奥社「厳魂神社」（1368段）の断崖絶壁に祀られた天狗の彫刻を拝し、究極の達成感と新年の清浄な気を受け取ることができます。
            </p>
            <p>
              琴平から車でわずか15分、隣接する善通寺市にある「総本山善通寺」は、真言宗善通寺派の総本山であり、平安初期の延暦23年（774年）に弘法大師空海がこの地に誕生した聖地です。敷地面積約4万5千平方メートルに及ぶ境内は、空海が父・佐伯善通の寄進を受けて建立した東院「伽藍」と、誕生屋敷跡に建つ西院「誕生院」で構成されています。冬の善通寺は初詣客で賑わう御影堂（大師堂）の地下で、長さ約100mの漆黒の回廊を手探りで進む「戒壇めぐり」が行われ、自らの感覚を研ぎ澄まして弘法大師と結縁する唯一無二の信仰体験が旅人の心を深く揺さぶります。
            </p>
          </div>
        </section>

        {/* Section 2: Winter Food & Onsen */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">GOURMET & THERMAL SPRINGS</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                冬の讃岐が誇る至高の滋味：讃岐オリーブ牛と熱々うどん、名湯こんぴら温泉
              </h2>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm md:text-base space-y-4">
            <p>
              冬の讃岐路を旅する醍醐味は、祈りの旅の後に待ち受ける極上の美食にあります。その筆頭が「讃岐オリーブ牛」です。日本のオリーブ栽培発祥の地である香川県小豆島で、オイル搾油後のオリーブ果実を乾燥させて飼料として育てた讃岐牛は、オリーブに含まれる豊富なオレイン酸と抗酸化成分によって、脂身の融点が低く驚くほどさっぱりとした口当たりを誇ります。冬の会席料理で提供されるオリーブ牛の陶板焼きやしゃぶしゃぶは、一口噛むごとに上質な肉汁と甘みが溢れ出し、重さを感じさせずに赤身の深いコクを堪能できます。
            </p>
            <p>
              そして香川の代名詞である「讃岐うどん」。冬の讃岐うどんの主役は、茹で上げた麺を水で締めずに熱湯ごと丼に移し、熱い濃口のいりこ出汁につけて食べる「釜揚げうどん」です。小麦の香りとモチモチした強いコシがダイレクトに伝わり、冷えた身体を一瞬で芯から温めてくれます。さらに冬期限定で地元の人々に親しまれる「しっぽくうどん」は、大根、人参、里芋、豆腐、油揚げなどの冬野菜をいりこ出汁で煮込み、茹でたうどんにたっぷりと掛けた郷土の知恵が詰まった逸品です。
            </p>
            <p>
              785段以上の石段を登り降りした足腰を癒やすのが、1997年に湧出した「こんぴら温泉郷」の名湯です。保温効果が高く肌をしっとりと潤す塩化物泉や炭酸水素塩泉が引かれ、庭園を望む露天風呂に浸かれば、心地よい筋肉の疲れとともに日頃の喧騒が静かに溶け去っていきます。門前町の宿ならではの雅やかなおもてなしと、讃岐の銘酒「金陵」の搾りたて新酒の芳醇な香りが、冬の特別な一夜を完璧なものへと導きます。
            </p>
          </div>
        </section>

        {/* Section 3: Verified 5 Hotels */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              HOTEL SELECTION BY RAKUTEN API
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 font-journal-serif">
              金刀比羅宮初詣と讃岐美食を満喫する厳選名宿5選
            </h2>
            <p className="text-slate-600 text-xs md:text-sm max-w-2xl mx-auto">
              楽天トラベルAPIより最新の空室状況・宿泊評価・公式写真を取得。立地、温泉、料理、サービスのすべてにおいて高い評価を獲得する屈指の名宿を厳選しました。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden hover:shadow-md transition duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-5/12 relative aspect-[4/3] md:aspect-auto">
                  <img 
                    src={hotel.img} 
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-md">
                    第{hotel.id}位
                  </div>
                </div>

                <div className="md:w-7/12 p-6 md:p-8 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                        {hotel.access}
                      </span>
                      <div className="flex items-center gap-1 text-amber-600 text-sm font-black">
                        <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                        <span>{hotel.rating}</span>
                        <span className="text-slate-400 text-xs font-normal">({hotel.reviews}件)</span>
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-black text-slate-900 leading-snug mb-2 font-journal-serif">
                      {hotel.name}
                    </h3>
                    <p className="text-xs text-slate-500 mb-3 line-clamp-2">
                      {hotel.special}
                    </p>

                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
                      {hotel.story}
                    </p>

                    <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 space-y-2 mb-4 text-xs">
                      <div>
                        <strong className="text-amber-900 font-bold">客室のこだわり：</strong>
                        <span className="text-slate-600 ml-1">{hotel.roomTip}</span>
                      </div>
                      <div>
                        <strong className="text-amber-900 font-bold">美食の極意：</strong>
                        <span className="text-slate-600 ml-1">{hotel.gourmetTip}</span>
                      </div>
                    </div>

                    <ul className="space-y-1.5 mb-4 text-xs text-slate-600">
                      {hotel.highlights.map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <span className="text-xs text-slate-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base md:text-lg font-black text-amber-700">{hotel.price}</span>
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-xs md:text-sm rounded-xl shadow-sm transition"
                    >
                      <span>楽天トラベルでプランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: 2 Days 1 Night Model Course */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">SUGGESTED ITINERARY</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                1泊2日 金刀比羅宮新春初詣＆善通寺・讃岐美食 満喫モデルコース
              </h2>
            </div>
          </div>

          <div className="space-y-6 text-xs md:text-sm">
            {/* Day 1 */}
            <div className="border-l-2 border-amber-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-amber-600 text-white px-2 py-0.5 rounded text-xs">1日目</span>
                琴平到着、金刀比羅宮785段石段参拝と門前町散策、名湯で癒やしの夜
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>11:30 JR琴平駅または高松空港からリムジンバスで琴平到着</strong><br />
                宿泊する宿に荷物を預け、表参道へ向かう前に名物讃岐うどん店で熱々の「釜揚げうどん」を一杯。冬の参拝に向け腹ごしらえ。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>12:30 表参道から金刀比羅宮・御本宮（785段）へ新春初詣</strong><br />
                石段沿いの土産店を眺めながら大門（365段）をくぐり神域へ。御本宮にて新年祈願を行い、讃岐平野を一望する展望台で絶景を堪能。体力に余裕があれば奥社（1368段）へチャレンジ。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>15:30 参道を下り、門前町の酒蔵「金陵の郷」や灸まん本舗を散策</strong><br />
                参道で名物の熱々「灸まん」やお抹茶で一服。江戸時代の酒蔵を復元した資料館で新酒の利き酒やお土産探しを楽しむ。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>16:30 こんぴら温泉の宿にチェックイン、名湯露天風呂でリフレッシュ</strong><br />
                石段参拝で頑張った足腰を自家源泉の露天風呂でじっくり温める。夕食はとろける「讃岐オリーブ牛」の鉄板焼きや瀬戸内の冬魚を地酒とともに堪能。
              </p>
            </div>

            {/* Day 2 */}
            <div className="border-l-2 border-emerald-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-xs">2日目</span>
                弘法大師生誕地「総本山善通寺」参拝と戒壇めぐり、丸亀城の石垣美
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>08:30 宿で手打ち讃岐うどんや地産和朝食をいただきチェックアウト</strong><br />
                朝の清々しい空気の中を出発。車または土讃線で隣町の善通寺市へ移動（所要約15分）。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>09:15 総本山善通寺へ参拝、神秘の「戒壇めぐり」体験</strong><br />
                御影堂地下の漆黒の空間を進む戒壇めぐりで大師と結縁。東院の五重塔や樹齢千数百年の大楠を仰ぎ、新年の厄除けと心願成就を祈願。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>12:00 丸亀へ足を伸ばし「骨付鳥」ランチ＆日本一の石垣「丸亀城」見学</strong><br />
                丸亀名物のスパイシーな「骨付鳥」でエナジー補給。現存十二天守の一つ・丸亀城の美しい扇の勾配の石垣と天守からの冬パノラマを見学。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>14:30 JR丸亀駅または坂出駅より瀬戸大橋線で帰路へ</strong><br />
                車窓から冬の瀬戸内海の多島美を眺め、開運と充実感に満ちた讃岐冬紀行の余韻に浸る。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                香川・琴平＆善通寺 冬の旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div key={idx} className="border border-slate-100 rounded-xl p-4 md:p-5 bg-slate-50/50">
                <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2 flex items-start gap-2">
                  <span className="text-amber-600 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Internal Links / Related Winter Guides */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-sky-100 text-sky-800 rounded-xl">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest block">RELATED WINTER FEATURES</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                あわせて読みたい！全国の厳選「冬の初詣＆開運・名湯グルメ特集」
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
            <Link 
              href="/winter-kagawa-takamatsu-tamura-shrine-hatsumode-shionoe-onsen-olivegyu-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 transition block space-y-1"
            >
              <span className="font-bold text-amber-950 block">【香川】讃岐国一ノ宮田村神社初詣と塩江温泉・オリーブ牛名宿</span>
              <span className="text-slate-500 text-xs">龍神伝説が息づく古社と高松の奥座敷・塩江温泉郷の冬静寂。</span>
            </Link>

            <Link 
              href="/winter-tokushima-city-oasashiko-shrine-hatsumode-awaodori-awagyu-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 transition block space-y-1"
            >
              <span className="font-bold text-amber-950 block">【徳島】阿波国一ノ宮大麻比古神社初詣と阿波牛名宿</span>
              <span className="text-slate-500 text-xs">樹齢千年の大楠と鳴門の渦潮・冬の阿波尾鶏＆阿波牛美食。</span>
            </Link>

            <Link 
              href="/winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 transition block space-y-1"
            >
              <span className="font-bold text-amber-950 block">【愛媛】道後温泉本館全館営業再開と松山城・鯛めし名宿</span>
              <span className="text-slate-500 text-xs">日本最古の温泉と伊予牛、冬の宇和海真鯛を堪能する四国名湯旅。</span>
            </Link>

            <Link 
              href="/winter-mie-iseshima-jingu-hatsumode-toba-matoya-oyster-ise-ebi-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 transition block space-y-1"
            >
              <span className="font-bold text-amber-950 block">【三重】伊勢神宮新春初詣と冬旬的矢かき・伊勢海老名宿</span>
              <span className="text-slate-500 text-xs">二千年の祈りと宇治橋大鳥居の冬日の出、極上の的矢かきと松阪牛会席。</span>
            </Link>
          </div>
        </section>

        {/* Internal Link CTA */}
        <section className="bg-gradient-to-r from-amber-950 to-slate-900 text-white rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-black font-journal-serif">
            冬の日本全国・厳選特集をチェック
          </h2>
          <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto">
            11月・12月・1月が旬の温泉郷、新春初詣、冬の味覚、雪景色を特集したオリジナル旅行ガイドを多数公開中。次の旅の目的地を見つけてください。
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link 
              href="/features" 
              className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-black text-xs md:text-sm rounded-xl shadow transition"
            >
              特集記事一覧を見る
            </Link>
            <Link 
              href="/" 
              className="px-6 py-3 bg-amber-800 hover:bg-amber-700 text-white font-black text-xs md:text-sm rounded-xl border border-amber-600 transition"
            >
              トップページへ戻る
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 text-center text-xs border-t border-slate-800 mt-16">
        <p>© 2026 旅宿クラウド (croud-travel.com). All rights reserved.</p>
        <p className="mt-2 text-slate-500">掲載の宿泊料金や施設情報は楽天トラベルAPIより取得した参考データです。最新のプラン内容は各宿泊施設ページをご確認ください。</p>
      </footer>
    </article>
  );
}
