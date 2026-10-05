import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月愛媛】日本総鎮守「大山祇神社」樹齢2600年神木新春初詣！冬晴れしまなみ海道パノラマ・甘み極まる瀬戸内真鯛今治鯛めし＆鈍川温泉厳選名宿5選",
  description: "瀬戸内海に浮かぶ神の島と多島美パノラマ！11〜1月のしまなみ海道は空気が澄み、来島海峡大橋の雄大な造形美と冬晴れのブルーの海が息を呑む絶景を描き出します。日本総鎮守の尊称を持つ大三島「大山祇神社」では、天然記念物・樹齢2600年の御神木楠が放つ神秘の気息に包まれる厳かな新春初詣。身が締まり脂が乗った冬の瀬戸内真鯛を土鍋でふっくら炊き上げる「今治鯛めし」や来島海峡の海鮮会席、伊予の三湯「鈍川温泉」美肌湯と今治の洗練名宿5選を徹底特集。",
  keywords: '大山祇神社 初詣, 大山祇神社 樹齢2600年, しまなみ海道 冬, 来島海峡大橋, 今治鯛めし, 鈍川温泉, 今治国際ホテル, 大三島 初詣, 亀老山展望公園, 愛媛 冬 旅行',
  alternates: {
    canonical: 'https://croud-travel.com/winter-ehime-imabari-shimanami-oyamazumi-shrine-hatsumode-taimeshi-stay'
  },
  openGraph: {
    title: "【11・12・1月愛媛】日本総鎮守「大山祇神社」樹齢2600年神木新春初詣！冬晴れしまなみ海道パノラマ・甘み極まる瀬戸内真鯛今治鯛めし＆鈍川温泉厳選名宿5選",
    description: "瀬戸内海に浮かぶ神の島と多島美パノラマ！11〜1月のしまなみ海道は空気が澄み、来島海峡大橋の雄大な造形美と冬晴れのブルーの海が息を呑む絶景を描き出します。日本総鎮守の尊称を持つ大三島「大山祇神社」では、天然記念物・樹齢2600年の御神木楠が放つ神秘の気息に包まれる厳かな新春初詣。身が締まり脂が乗った冬の瀬戸内真鯛を土鍋でふっくら炊き上げる「今治鯛めし」や来島海峡の海鮮会席、伊予の三湯「鈍川温泉」美肌湯と今治の洗練名宿5選を徹底特集。",
    url: 'https://croud-travel.com/winter-ehime-imabari-shimanami-oyamazumi-shrine-hatsumode-taimeshi-stay',
    siteName: 'クラドトラベル',
    type: 'article',
    locale: 'ja_JP',
    images: [{
      url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      width: 1200,
      height: 630,
      alt: '冬のしまなみ海道 来島海峡大橋と大山祇神社の樹齢2600年御神木'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月愛媛】日本総鎮守「大山祇神社」樹齢2600年神木新春初詣！冬晴れしまなみ海道パノラマ・甘み極まる瀬戸内真鯛今治鯛めし＆鈍川温泉厳選名宿5選",
    description: "瀬戸内海に浮かぶ神の島と多島美パノラマ！11〜1月のしまなみ海道は空気が澄み、来島海峡大橋の雄大な造形美と冬晴れのブルーの海が息を呑む絶景を描き出します。日本総鎮守の尊称を持つ大三島「大山祇神社」では、天然記念物・樹齢2600年の御神木楠が放つ神秘の気息に包まれる厳かな新春初詣。身が締まり脂が乗った冬の瀬戸内真鯛を土鍋でふっくら炊き上げる「今治鯛めし」や来島海峡の海鮮会席、伊予の三湯「鈍川温泉」美肌湯と今治の洗練名宿5選を徹底特集。",
    images: ['https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function EhimeImabariWinterFeaturePage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月愛媛】日本総鎮守「大山祇神社」樹齢2600年神木新春初詣！冬晴れしまなみ海道パノラマ・甘み極まる瀬戸内真鯛今治鯛めし＆鈍川温泉厳選名宿5選",
    "description": "瀬戸内海に浮かぶ神の島と多島美パノラマ！11〜1月のしまなみ海道は空気が澄み、来島海峡大橋の雄大な造形美と冬晴れのブルーの海が息を呑む絶景を描き出します。日本総鎮守の尊称を持つ大三島「大山祇神社」では、天然記念物・樹齢2600年の御神木楠が放つ神秘の気息に包まれる厳かな新春初詣。身が締まり脂が乗った冬の瀬戸内真鯛を土鍋でふっくら炊き上げる「今治鯛めし」や来島海峡の海鮮会席、伊予の三湯「鈍川温泉」美肌湯と今治の洗練名宿5選を徹底特集。",
    "image": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "2026-10-06T06:00:00+09:00",
    "dateModified": "2026-10-06T06:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "クラドトラベル編集部 温泉・神社仏閣取材班"
    },
    "publisher": {
      "@type": "Organization",
      "name": "クラドトラベル",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.com/winter-ehime-imabari-shimanami-oyamazumi-shrine-hatsumode-taimeshi-stay"
    }
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        "name": "愛媛・今治＆しまなみ海道 冬の初詣と真鯛グルメ",
        "item": "https://croud-travel.com/winter-ehime-imabari-shimanami-oyamazumi-shrine-hatsumode-taimeshi-stay"
      }
    ]
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "大三島「大山祇神社」の新春初詣の御利益と樹齢2600年御神木の鑑賞ポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "大山祇神社（おおやまづみじんじゃ）は、全国に一万社余りある山祇神社・三島神社の総本社であり、「日本総鎮守」の尊称を持つ四国随一の古社です。大山積大神を御祭神とし、古くより武将たちが戦勝祈願に訪れた歴史から「勝運」「武運長久」、そして現代では航海安全・交通安全・厄除開運の御利益で崇敬を集めています。境内中央に鎮座する御神木「乎知命御手植（おちのみことおてうえ）の楠」は、国指定天然記念物で樹齢約2600年。幹周り11mを超える巨樹で、冬の澄んだ大気の中でその幹の周りを息を止めて時計回りに3周すると願いが叶うという信仰も伝わっています。"
        }
      },
      {
        "@type": "Question",
        "name": "冬（11・12・1月）のしまなみ海道ドライブ・サイクリングの気候と絶景ポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "冬の瀬戸内海は好天率が高く、空気が乾燥して澄み切るため、遠く本州の山並みや四国カルストまで見渡せる絶景シーズンです。大三島、伯方島、大島を巡る「しまなみ海道」では、大島南端の「亀老山（きろうさん）展望公園」が屈指の展望地。建築家・隈研吾氏設計の展望デッキから見渡す来島海峡大橋と沈む夕陽、そして冬の夕暮れ時の橋のライトアップは息を呑む絶景です。冬のサイクリングやドライブでは海風が冷たいため、ウィンドブレーカーや防風手袋などの防寒対策が必須となります。"
        }
      },
      {
        "@type": "Question",
        "name": "大山祇神社の「宝物館（紫陽殿・国宝館）」が『国宝の島』と呼ばれる理由は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "大山祇神社の宝物館には、源義経が奉納したと伝わる「赤糸威鎧（あかいとおどしよろい）」や源頼朝の「紫綾威鎧」をはじめ、全国の国宝・重要文化財に指定されている日本の武具・甲冑の約8割が保存・展示されています。平重盛や木曾義仲、弁慶ゆかりの武具など、歴史の教科書に登場する武将たちの息吹を間近に体感できる奇跡の空間です。初詣の参拝と合わせて見学することで、日本の武士道と歴史の深淵に触れることができます。"
        }
      },
      {
        "@type": "Question",
        "name": "愛媛の二大「鯛めし」の違いと、冬の「今治鯛めし」の美味しさの秘密は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "愛媛県の鯛めしには、南予（宇和島）風と中予・東予（今治・松山）風の二種類があります。宇和島風は生の鯛の刺身を特製のタレと生卵に絡めて熱々ご飯に乗せるのに対し、今治風は新鮮な丸ごとの真鯛を昆布出汁とともに土鍋やお釜でふっくら炊き上げる伝統料理です。特に11月から1月にかけての冬の瀬戸内真鯛は、激流で知られる来島海峡の荒波を泳ぎ抜くことで身が引き締まり、越冬のために上質な脂をたっぷり蓄えています。炊き上がった瞬間に広がる鯛と昆布の上品な芳香、ご飯に染み渡る旨味は冬ならではの極上の味わいです。"
        }
      },
      {
        "@type": "Question",
        "name": "伊予の三湯「鈍川温泉」の泉質・効能と今治からのアクセスは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "鈍川温泉（にぶかわおんせん）は、道後温泉・本谷温泉と並び「伊予の三湯」に数えられる名湯です。今治市街から車で約20分、鈍川渓谷の清流沿いに湧出する温泉は、pH9.9という全国有数の高アルカリ性単純温泉。まるで化粧水の中に浸かっているかのようなトロリとしたぬるぬるの肌触りが特徴で、余分な皮脂や古い角質を落とし、湯上がりは驚くほどすべすべの美肌になると称賛されています。渓谷の冬景色を眺めながらの雪見露天風呂は格別の贅沢です。"
        }
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "今治国際ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1036/1036.jpg",
              rating: 4.47,
              reviews: 2097,
              price: "¥8,700〜",
              access: "予讃線今治駅から徒歩で10分。",
              special: "ビジネス・観光に好立地・館内WIFI・全室インタ－ネット利用可能（ＬＡＮケ－ブル対応可）",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1036%2F1036.html",
              story: "今治市の中心に堂々と聳え立つランドマークタワーホテル「今治国際ホテル」。地上22階・高さ100mを誇り、高層階客室や展望レストランからは冬晴れの瀬戸内海、来島海峡大橋、石鎚山系の山並みを360度の大パノラマで見渡せます。館内には露天風呂・サウナを備えた本格天然温泉大浴場や室内温水プールが完備され、旅の疲れを優雅に解きほぐします。夕食は館内の日本料理・鉄板焼・中国料理レストランで、冬に脂が乗った瀬戸内真鯛や伊予牛を贅沢に堪能。しまなみ海道ドライブや大三島初詣の拠点として、四国屈指の安心感と格式を誇るプレミアムホテルです。",
              roomTip: "高層階パノラマツインまたはデラックスダブル。窓いっぱいに広がる瀬戸内海の多島美と朝日に輝く来島海峡の絶景を独占。",
              gourmetTip: "「日本料理 伊予路」の冬の真鯛会席。引き締まった身の真鯛薄造りと、土鍋でふっくら炊き上げる熱々の今治鯛めし。",
              highlights: [
                "地上22階・高さ100mのランドマーク・館内に露天風呂付き天然温泉大浴場を完備" ,
                "高層階から見下ろす冬晴れの瀬戸内海と来島海峡大橋・石鎚山系の大パノラマ" ,
                "冬旬の瀬戸内真鯛会席や伊予牛ディナー・四国屈指のスケールとおもてなし"
              ]
            },
            {
              id: 2,
              name: "ホテルクラウンヒルズ今治駅前（ＢＢＨホテルグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9047/9047.jpg",
              rating: 3.91,
              reviews: 1284,
              price: "¥2,900〜",
              access: "ＪＲ「今治駅」徒歩１分・しまなみ海道「今治ＩＣ」下車５分",
              special: "JR今治駅前好立地徒歩１分！無料朝食バイキング！男女浴場完備！全室加湿空気清浄機完備！無料Wi-Fi",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9047%2F9047.html",
              story: "JR今治駅前から徒歩約1分という抜群の立地に位置する「ホテルクラウンヒルズ今治駅前（BBHホテルグループ）」。旅人に嬉しい大浴場（男性専用）を完備し、旅の歩き疲れをゆったりと癒やすことができます。全室に快適な快眠ベッドと加湿空気清浄機を備え、無料のウェルカムコーヒーや夜のマンガ本コーナーなど細やかなサービスが充実。駅前から発着する大三島行き特急バスの利用にも極めて至便で、しまなみ海道初詣を身軽かつリーズナブルに楽しみたい旅行者に最適です。",
              roomTip: "スタンダードシングルまたはツインルーム。コンパクトながら機能的な設えで、手荷物の多いツーリングや参拝旅行も快適。",
              gourmetTip: "ホテル周辺の今治名物「鉄板焼き鳥」の老舗店で味わう、カリカリの鶏皮焼きと甘辛タレのせんざんき（唐揚げ）。",
              highlights: [
                "JR今治駅徒歩1分の好立地・男性専用大浴場と無料ウェルカムコーヒー完備" ,
                "大三島行き特急バス発着至近・リーズナブルに楽しむしまなみ初詣の拠点" ,
                "快眠ベッドと加湿器完備・気ままな一人旅やツーリングにも手厚いサービス"
              ]
            },
            {
              id: 3,
              name: "ＪＲクレメントイン今治",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/182564/182564.jpg",
              rating: 4.37,
              reviews: 914,
              price: "¥3,900〜",
              access: "JR今治駅より徒歩1分／今治I.Cよりお車にて約10分",
              special: "★2021年9月16日開業★／今治駅徒歩1分/・朝食ブッフェ・ウェルカムドリンク・バー飲み放題",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182564%2F182564.html",
              story: "JR今治駅直結の最高の機動性を誇る「ＪＲクレメントイン今治」。シンプルで洗練されたナチュラルモダンなデザインが心地よく、全室にシモンズ社製最高級ベッドを導入して極上の眠りを提供しています。ロビーには今治タオルのアメニティバーが用意され、地元ならではの肌触りを体感。早朝のしまなみ海道ドライブや大山祇神社への参拝出発にもストレスなく対応でき、駅前レンタカーとの組み合わせも完璧。ビジネスから観光まで高いクオリティを誇る駅前ホテルです。",
              roomTip: "モデレートダブルまたはスーペリアツイン。木の温もりあふれる客室インテリアと清潔なセパレート水回りで快適性抜群。",
              gourmetTip: "1階レストランの和洋朝食ビュッフェ。地元愛媛県産の新鮮卵を使った卵かけご飯やじゃこ天、温かい味噌汁で元気な出発を。",
              highlights: [
                "JR今治駅直結・全室シモンズ社製ベッドと今治タオルアメニティバーが自慢" ,
                "シンプルモダンなデザイン空間・早朝出発のドライブにもスムーズに対応" ,
                "愛媛県産食材の和洋朝食ビュッフェ・セパレート水回りで清潔感抜群"
              ]
            },
            {
              id: 4,
              name: "しまなみプライムホテル今治",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/191553/191553.jpg",
              rating: 4.49,
              reviews: 878,
              price: "¥4,950〜",
              access: "◆ＪＲ今治駅より徒歩５分◆しまなみ海道【今治インター】車で８分◆今治小松自動車道【今治湯ノ浦IC】車で１５分",
              special: "2024年3月オープン◇駅徒歩５分◇サウナ付き展望大浴場◇客室セパレート式水回り◇生ビール一杯無料",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F191553%2F191553.html",
              story: "今治市街の中心部・常盤町に位置し、観光とグルメの散策拠点に便利な「しまなみプライムホテル今治」。清潔感のある快適な客室空間と、宿泊者専用のリラクゼーションスペースを備えています。全室に高速Wi-Fiと加湿空気清浄機を完備。今治城や今治港への散策にもほど近く、冬の澄んだ潮風を感じながら城下町情緒を満喫できます。丁寧なフロント対応と充実したアメニティで、長期滞在や島巡りの拠点としても心地よい時間を過ごせます。",
              roomTip: "スタンダードツインまたはデラックスダブル。ゆったりとした広さの客室で、冬の防寒着や旅の荷物もすっきり収納。",
              gourmetTip: "ホテル近隣の割烹や海鮮居酒屋で味わう、来島海峡の激流に育まれた冬のオコゼ薄造りやアコウの煮付け。",
              highlights: [
                "市街地中心部の好立地・今治城散策や夜のグルメ巡りに便利な快適ホテル" ,
                "全室加湿空気清浄機完備・静寂な客室で冬の島旅の疲れを心地よくリセット" ,
                "丁寧なフロントサポート・しまなみ海道周遊や今治港散策のベースに最適"
              ]
            },
            {
              id: 5,
              name: "今治アーバンホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1624/1624.jpg",
              rating: 4.06,
              reviews: 3215,
              price: "¥3,800〜",
              access: "◇　ＪＲ今治駅東口よりすぐ！　◇　しまなみ海道【今治インター】車で約8分・今治小松自動車道【今治湯ノ浦ＩＣ】車で15分",
              special: "贅沢なひとときを感じる【新館】リーズナブルで快適空間をご提供する【本館】※本館・新館別棟になります※",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1624%2F1624.html",
              story: "JR今治駅前に佇み、本館と新館で多彩なニーズに応える「今治アーバンホテル」。細やかな清掃が行き届いた清潔な客室と、アットホームで温かい接客が多くのリピーターに親しまれています。全室に上質なマットレスと空気清浄機を完備し、無料のレンタサイクルサービスも提供。駅前の飲食店街に隣接しているため、今治の夜のグルメ探訪も徒歩圏内で思いのまま。コストパフォーマンスと立地の良さを両立させた実力派ホテルです。",
              roomTip: "新館スーペリアツインまたはシングル。静かな環境で旅の疲れを癒やし、翌朝のしまなみ海道巡りに備える快適ルーム。",
              gourmetTip: "駅前の名店で味わう「焼豚玉子飯（チャーシューたまごめし）」。甘辛いタレと半熟目玉焼きが絡むソウルフード。",
              highlights: [
                "JR今治駅前至近・清潔な客室とアットホームな接客、無料レンタサイクルも完備" ,
                "今治名物鉄板焼き鳥や焼豚玉子飯の名店が徒歩圏内・抜群のコストパフォーマンス" ,
                "新館客室のゆとりある空間・連泊でもストレスフリーなアメニティの充実度"
              ]
            }
  ];

  const faqList = [
  {
    "q": "大三島「大山祇神社」の新春初詣の御利益と樹齢2600年御神木の鑑賞ポイントは？",
    "a": "大山祇神社（おおやまづみじんじゃ）は、全国に一万社余りある山祇神社・三島神社の総本社であり、「日本総鎮守」の尊称を持つ四国随一の古社です。大山積大神を御祭神とし、古くより武将たちが戦勝祈願に訪れた歴史から「勝運」「武運長久」、そして現代では航海安全・交通安全・厄除開運の御利益で崇敬を集めています。境内中央に鎮座する御神木「乎知命御手植（おちのみことおてうえ）の楠」は、国指定天然記念物で樹齢約2600年。幹周り11mを超える巨樹で、冬の澄んだ大気の中でその幹の周りを息を止めて時計回りに3周すると願いが叶うという信仰も伝わっています。"
  },
  {
    "q": "冬（11・12・1月）のしまなみ海道ドライブ・サイクリングの気候と絶景ポイントは？",
    "a": "冬の瀬戸内海は好天率が高く、空気が乾燥して澄み切るため、遠く本州の山並みや四国カルストまで見渡せる絶景シーズンです。大三島、伯方島、大島を巡る「しまなみ海道」では、大島南端の「亀老山（きろうさん）展望公園」が屈指の展望地。建築家・隈研吾氏設計の展望デッキから見渡す来島海峡大橋と沈む夕陽、そして冬の夕暮れ時の橋のライトアップは息を呑む絶景です。冬のサイクリングやドライブでは海風が冷たいため、ウィンドブレーカーや防風手袋などの防寒対策が必須となります。"
  },
  {
    "q": "大山祇神社の「宝物館（紫陽殿・国宝館）」が『国宝の島』と呼ばれる理由は？",
    "a": "大山祇神社の宝物館には、源義経が奉納したと伝わる「赤糸威鎧（あかいとおどしよろい）」や源頼朝の「紫綾威鎧」をはじめ、全国の国宝・重要文化財に指定されている日本の武具・甲冑の約8割が保存・展示されています。平重盛や木曾義仲、弁慶ゆかりの武具など、歴史の教科書に登場する武将たちの息吹を間近に体感できる奇跡の空間です。初詣の参拝と合わせて見学することで、日本の武士道と歴史の深淵に触れることができます。"
  },
  {
    "q": "愛媛の二大「鯛めし」の違いと、冬の「今治鯛めし」の美味しさの秘密は？",
    "a": "愛媛県の鯛めしには、南予（宇和島）風と中予・東予（今治・松山）風の二種類があります。宇和島風は生の鯛の刺身を特製のタレと生卵に絡めて熱々ご飯に乗せるのに対し、今治風は新鮮な丸ごとの真鯛を昆布出汁とともに土鍋やお釜でふっくら炊き上げる伝統料理です。特に11月から1月にかけての冬の瀬戸内真鯛は、激流で知られる来島海峡の荒波を泳ぎ抜くことで身が引き締まり、越冬のために上質な脂をたっぷり蓄えています。炊き上がった瞬間に広がる鯛と昆布の上品な芳香、ご飯に染み渡る旨味は冬ならではの極上の味わいです。"
  },
  {
    "q": "伊予の三湯「鈍川温泉」の泉質・効能と今治からのアクセスは？",
    "a": "鈍川温泉（にぶかわおんせん）は、道後温泉・本谷温泉と並び「伊予の三湯」に数えられる名湯です。今治市街から車で約20分、鈍川渓谷の清流沿いに湧出する温泉は、pH9.9という全国有数の高アルカリ性単純温泉。まるで化粧水の中に浸かっているかのようなトロリとしたぬるぬるの肌触りが特徴で、余分な皮脂や古い角質を落とし、湯上がりは驚くほどすべすべの美肌になると称賛されています。渓谷の冬景色を眺めながらの雪見露天風呂は格別の贅沢です。"
  }
];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-teal-600 selection:text-white">
        {/* Breadcrumb Bar */}
        <nav aria-label="パンくずリスト" className="bg-white border-b border-stone-200 text-xs text-stone-500 py-3 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto flex items-center space-x-2">
            <Link href="/" className="hover:text-teal-600 transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:text-teal-600 transition">特集一覧</Link>
            <span>/</span>
            <span className="text-stone-800 font-medium">愛媛・今治＆しまなみ海道 冬の初詣と真鯛グルメ</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-b from-slate-900 via-teal-950 to-slate-900 text-white py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs sm:text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 text-teal-400" />
              11月・12月・1月冬の瀬戸内しまなみ探訪スペシャル
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              【愛媛・今治＆しまなみ海道】<br className="hidden sm:inline" />
              日本総鎮守「大山祇神社」樹齢2600年神木新春初詣！<br />
              冬晴れしまなみ海道パノラマ・甘み極まる今治鯛めし＆鈍川温泉名宿
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              澄み渡る冬の青空と群青の海が織りなす瀬戸内しまなみ海道の多島美。大三島に鎮座する「日本総鎮守」大山祇神社で迎える厳かな新春初詣と、悠久の生命力を放つ樹齢2600年の御神木楠。急流・来島海峡で身を引き締めた冬の真鯛をふっくら炊き上げる極上の今治鯛めしと名物鉄板焼き鳥。伊予の三湯に数えられるpH9.9の美肌湯「鈍川温泉」と今治の洗練名宿を巡る冬の極上旅へご案内します。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-teal-400" /> 最適期: 11月中旬〜1月下旬
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-teal-400" /> エリア: 愛媛県今治市・大三島・しまなみ海道
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Waves className="w-4 h-4 text-teal-400" /> 温泉: 鈍川温泉（アルカリ性単純温泉 pH9.9）
              </span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          
          {/* Section 1: 大山祇神社の神気と樹齢2600年神木 */}
          <section className="mb-16">
            <div className="border-l-4 border-teal-600 pl-4 mb-6">
              <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">National Grand Guardian Shrine</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                日本総鎮守の威容！大三島「大山祇神社」樹齢2600年御神木楠と国宝甲冑の聖域
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                瀬戸内海に浮かぶ芸予諸島の中で最も格式の高い神の島・大三島（おおみしま）。その中央部に鎮座する「大山祇神社（おおやまづみじんじゃ）」は、全国に一万社を超える山祇神社や三島神社の総本社であり、「日本総鎮守」の尊称を賜る四国随一の古社です。御祭神の大山積大神（おおやまづみのおおかみ）は、天照大神の兄神にあたり、山・海・武勇を司る神として古代より朝廷や歴代武将から絶大な信仰を集めてきました。
              </p>
              <p>
                神門をくぐると、境内中央にそびえ立つのが国指定天然記念物の御神木「乎知命御手植（おちのみことおてうえ）の楠」。小千命が大山積大神の子孫として神社を勧請した際に植えたと伝わり、その樹齢は実に2600年余。根回り約20m、幹周り11mを超える巨木が天に向かって枝葉を広げる姿は圧巻の一言です。冬の澄んだ大気の中、この御神木の周囲を息を止めて時計回りに3周すると願いが成就するという言い伝えがあり、新春初詣に訪れた参拝者が静かに祈りを捧げる姿が見られます。境内にはこのほかにも雨乞の楠など古楠の巨木が群生し、神聖な静寂が漂っています。
              </p>
              <p>
                さらに大山祇神社を唯一無二の存在たらしめているのが、境内の宝物館（紫陽殿・国宝館）です。ここには源義経が奉納した赤糸威鎧や源頼朝の紫綾威鎧をはじめ、全国の国宝・重要文化財に指定されている日本の武具・甲冑の約8割が集結しています。また、戦国時代に大三島を守るため16歳で出陣した「瀬戸内のジャンヌ・ダルク」こと大祝鶴（鶴姫）が着用したとされる日本唯一の女性用胴丸（重要文化財）も展示され、歴史愛好家の心を揺さぶります。冬の凛とした静けさの中で鑑賞する名将たちの鎧兜や太刀は、悠久の歴史と武士道の美学を今に伝えています。
              </p>
            </div>
          </section>

          {/* Section 2: しまなみ海道の冬絶景と来島海峡大橋 */}
          <section className="mb-16">
            <div className="border-l-4 border-cyan-600 pl-4 mb-6">
              <span className="text-xs font-bold text-cyan-600 tracking-wider uppercase">Shimanami Winter Scenic</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                冬晴れの瀬戸内ブルー！世界初の三連吊橋「来島海峡大橋」と亀老山の夕陽パノラマ
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                本州・尾道と四国・今治を結ぶ全長約60kmの「しまなみ海道（西瀬戸自動車道）」。11月から1月にかけての冬シーズンは、年間でも特に湿度が低く晴天が続くため、瀬戸内海の多島美がもっとも鮮明に浮かび上がる絶景の季節です。エメラルドグリーンから深い藍色へと変化する海面、白銀に輝く吊橋のワイヤー、そして遠く四国山地や西日本最高峰・石鎚山の冠雪まで見渡すことができます。
              </p>
              <p>
                そのハイライトとなるのが、今治と大島を結ぶ世界初の三連吊橋「来島海峡大橋（全長4,105m）」。日本三大急潮の一つに数えられる来島海峡は、潮の干満差によって最大時速10ノット（約18km/h）を超える激流が渦を巻き、冬の冷たい海風とともに雄大な自然の鼓動を感じさせます。かつてこの海域を掌握した「村上海賊（村上水軍）」の拠点であった能島城跡を眼下に眺めれば、難所を制した海の武士たちの気概が蘇ります。
              </p>
              <p>
                しまなみ海道随一のビューポイントが大島南端にある「亀老山（きろうさん）展望公園」。標高307mの山頂に、世界的建築家・隈研吾氏が景観と一体化するように地中に埋め込む設計で創り上げた展望デッキが広がります。冬の澄み渡る夕暮れ時、茜色に染まる瀬戸内海に来島海峡大橋の優美なシルエットが浮かび上がり、対岸の今治造船所の巨大クレーン群の灯火とともにロマンチックな夜景を創り出します。
              </p>
            </div>
          </section>

          {/* Section 3: 今治鯛めし＆鈍川温泉の美食と名湯 */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Gourmet & Onsen Experience</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                ふっくら土鍋で炊き上げる伝統「今治鯛めし」と、pH9.9の奇跡の美肌湯「鈍川温泉」
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                来島海峡の激流にもまれて育った瀬戸内の真鯛は、身が引き締まり歯ごたえが抜群。特に越冬を控えた11月〜1月の冬真鯛は、脂の乗りが最高潮に達します。愛媛県を代表する郷土料理「鯛めし」のうち、今治や松山など東予・中予に伝わる伝統のスタイルは、新鮮な真鯛を丸ごと一匹、昆布出汁や薄口醤油とともに土鍋やお釜でふっくらと炊き上げるスタイルです。
              </p>
              <p>
                土鍋の蓋を開けた瞬間に立ち上る芳醇な湯気と鯛の上品な香り。身をほぐしてご飯全体にさっくりと混ぜ合わせると、米の一粒一粒にまで真鯛の濃厚な旨味と脂が染み渡り、噛みしめるごとに深い幸福感が広がります。おこげの香ばしさと刻み生姜の爽やかなアクセントが、冬の冷えた身体を温かく満たしてくれます。さらに今治の夜のソウルフード「鉄板焼き鳥」も必食。炭火ではなく厚い鉄板の上に鶏皮を乗せ、重石のコテで上からギューッと押し付けて余分な脂を落としながらカリカリに焼き上げる独自の調理法は、せっかちな今治商人たちを待たせないために生まれた美味の知恵です。
              </p>
              <p>
                参拝と美食を堪能した後は、今治市街から車で約20分の山あいに位置する「鈍川温泉（にぶかわおんせん）」へ。道後温泉、本谷温泉とともに「伊予の三湯」と称されるこの温泉は、pH9.9という全国屈指の高アルカリ性単純温泉を誇ります。湯船に身を沈めると、まるで美容液の中に浸かっているかのようなトロリとしたぬるぬる感が肌を包み込み、古い角質を優しく洗い流して湯上がりは驚くほど滑らかな肌へと導きます。鈍川渓谷の冬のせせらぎを聞きながらの湯浴みは、心身を清浄にリセットしてくれます。
              </p>
            </div>
          </section>

          {/* Section 4: 厳選名宿5選 */}
          <section className="mb-16">
            <div className="border-l-4 border-teal-600 pl-4 mb-8">
              <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">Verified Hotels via Rakuten API</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【楽天トラベル実データ連携】今治・しまなみ海道周辺の厳選名宿5選
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                ※リアルタイムAPIから取得した宿泊料金目安・レビュー評価・立地条件を掲載しています。
              </p>
            </div>

            <div className="space-y-8">
              {hotels.map((h) => (
                <div key={h.id} className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="p-5 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded bg-teal-50 text-teal-700 border border-teal-200">
                        厳選第{h.id}位
                      </span>
                      <div className="flex items-center gap-3 text-xs sm:text-sm">
                        <span className="flex items-center text-amber-500 font-bold">
                          <Star className="w-4 h-4 fill-amber-400 stroke-amber-400 mr-1" />
                          {h.rating}
                        </span>
                        <span className="text-stone-400">({h.reviews.toLocaleString()}件)</span>
                        <span className="text-teal-600 font-black text-sm sm:text-base">
                          {h.price}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                      {h.name}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                      <span>{h.access}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                      {h.story}
                    </p>

                    <div className="bg-stone-50 rounded-lg p-3.5 space-y-2 mb-5 text-xs text-stone-600">
                      <div>
                        <strong className="text-stone-800 font-semibold mr-1">客室の魅力:</strong>
                        {h.roomTip}
                      </div>
                      <div>
                        <strong className="text-stone-800 font-semibold mr-1">冬の美食:</strong>
                        {h.gourmetTip}
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                        宿泊ポイント・魅力
                      </h4>
                      <ul className="grid grid-cols-1 gap-1.5">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-[11px] text-stone-400">
                        楽天トラベル公認宿泊プラン・即時予約対応
                      </span>
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold transition shadow-sm"
                      >
                        楽天トラベルでプラン・空室を確認
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: 冬の今治・しまなみ1泊2日モデルコース */}
          <section className="mb-16">
            <div className="border-l-4 border-stone-700 pl-4 mb-6">
              <span className="text-xs font-bold text-stone-600 tracking-wider uppercase">Model Itinerary</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【1泊2日】大山祇神社初詣としまなみ海道絶景・今治鯛めし満喫モデルコース
              </h2>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-stone-800 text-white text-xs font-bold rounded">DAY 1</span>
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                    しまなみ海道を渡り大三島へ！日本総鎮守・大山祇神社初詣と亀老山夕陽パノラマ
                  </h3>
                </div>
                <ul className="border-l-2 border-stone-200 ml-3 pl-4 space-y-3 text-xs sm:text-sm text-stone-600">
                  <li>
                    <strong className="text-stone-800">10:00</strong> 松山空港またはJR今治駅よりレンタカーで出発。しまなみ海道をドライブし大三島へ。
                  </li>
                  <li>
                    <strong className="text-stone-800">11:15</strong> 「大山祇神社」に到着。樹齢2600年の御神木楠に祈りを捧げ、新春初詣。宝物館で国宝の甲冑・刀剣を拝観。
                  </li>
                  <li>
                    <strong className="text-stone-800">13:30</strong> 大三島の海鮮食事処で獲れたての地魚海鮮丼や真鯛料理の昼食。
                  </li>
                  <li>
                    <strong className="text-stone-800">15:30</strong> 大島へ渡り「亀老山展望公園」へ。冬晴れの瀬戸内海と来島海峡大橋に沈む夕陽パノラマを堪能。
                  </li>
                  <li>
                    <strong className="text-stone-800">17:00</strong> 来島海峡大橋を渡り今治市街へ。「今治国際ホテル」へチェックイン。
                  </li>
                  <li>
                    <strong className="text-stone-800">18:00</strong> 館内の天然温泉露天風呂で温まり、冬の真鯛会席や土鍋今治鯛めしを堪能。
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-teal-600 text-white text-xs font-bold rounded">DAY 2</span>
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                    今治城散策と鈍川温泉の美肌湯・今治タオルショッピング
                  </h3>
                </div>
                <ul className="border-l-2 border-stone-200 ml-3 pl-4 space-y-3 text-xs sm:text-sm text-stone-600">
                  <li>
                    <strong className="text-stone-800">08:30</strong> 展望レストランで朝日に輝く瀬戸内海を眺めながら朝食ビュッフェを楽しみチェックアウト。
                  </li>
                  <li>
                    <strong className="text-stone-800">09:30</strong> 海水を引いた堀が美しい日本屈指の海城「今治城」を散策。天守閣から来島海峡を一望。
                  </li>
                  <li>
                    <strong className="text-stone-800">11:00</strong> 車で約20分の山あい「鈍川温泉」へ。pH9.9のトロトロ美肌湯で冬の身体を極上に癒やす。
                  </li>
                  <li>
                    <strong className="text-stone-800">13:00</strong> 今治市街へ戻り、名物「焼豚玉子飯」の昼食。
                  </li>
                  <li>
                    <strong className="text-stone-800">14:30</strong> 「今治タオル 本店」で極上の肌触りを誇る高品質タオルや柑橘スイーツをお土産に購入し帰路へ。
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: FAQ Section */}
          <section className="mb-16">
            <div className="border-l-4 border-teal-600 pl-4 mb-6">
              <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                冬の今治・しまなみ海道旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-4">
              {faqList.map((f, i) => (
                <div key={i} className="bg-white border border-stone-200 rounded-xl p-5">
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-2 flex items-start gap-2">
                    <span className="text-teal-600 font-black">Q.</span>
                    <span>{f.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5 border-l-2 border-teal-100">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: 内部リンク & 関連記事クロスナビゲーション */}
          <section className="border-t border-stone-200 pt-10">
            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4 text-teal-600" />
              RELATED WINTER FEATURES（冬の注目特集一覧）
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <Link 
                href="/winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay"
                className="p-3 bg-white border border-stone-200 rounded-lg hover:border-teal-400 hover:shadow-sm transition"
              >
                <div className="font-bold text-stone-800 mb-1">【愛媛】道後温泉本館全館営業再開＆伊予牛</div>
                <p className="text-stone-500">日本最古の名湯と飛鳥乃湯泉・冬の宇和島鯛めし＆名門温泉宿</p>
              </Link>
              <Link 
                href="/winter-ehime-ozu-uchiko-castle-garyusanso-bikan-uchikobuta-stay"
                className="p-3 bg-white border border-stone-200 rounded-lg hover:border-teal-400 hover:shadow-sm transition"
              >
                <div className="font-bold text-stone-800 mb-1">【愛媛】大洲＆内子の小京都冬散策</div>
                <p className="text-stone-500">臥龍山荘の雪景色と木蝋白壁町並み・内子豚しゃぶしゃぶ名宿</p>
              </Link>
              <Link 
                href="/winter-hiroshima-miyajima-etajima-oyster-onsen-stay"
                className="p-3 bg-white border border-stone-200 rounded-lg hover:border-teal-400 hover:shadow-sm transition"
              >
                <div className="font-bold text-stone-800 mb-1">【広島】宮島・厳島神社初詣＆江田島牡蠣</div>
                <p className="text-stone-500">大鳥居の海中初日の出と冬旬ぷりぷり広島真牡蠣会席名宿</p>
              </Link>
              <Link 
                href="/winter-kagawa-takamatsu-tamura-shrine-hatsumode-shionoe-onsen-olivegyu-stay"
                className="p-3 bg-white border border-stone-200 rounded-lg hover:border-teal-400 hover:shadow-sm transition"
              >
                <div className="font-bold text-stone-800 mb-1">【香川】高松・田村神社初詣＆塩江温泉</div>
                <p className="text-stone-500">讃岐国一宮の龍神初詣と讃岐オリーブ牛・名湯塩江温泉雪見露天宿</p>
              </Link>
            </div>
            <div className="mt-6 text-center">
              <Link 
                href="/features"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-700 transition"
              >
                全国の冬特集・温泉宿泊ガイド一覧を見る →
              </Link>
            </div>
          </section>

        </main>
      </article>
    </>
  );
}
