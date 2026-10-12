import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月滋賀：極上近江牛すき焼き！名宿5選',
  description: '近江商人の誇りが息づく重伝建の町並みと琵琶湖の冬景色！11〜1月は白壁土蔵や八幡堀の石垣が静寂な冬の空気に包まれ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '近江八幡 水郷めぐり, こたつ舟 近江八幡, 日牟禮八幡宮 初詣, 八幡山ロープウェー, 近江牛 すき焼き, 宮ヶ浜温泉, 休暇村 近江八幡, ホテルニューオウミ, たねやつぶら餅, 滋賀 冬 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-shiga-omihachiman-suigo-himure-shrine-hatsumode-omigyu-stay'
  },
  openGraph: {
    title: '11・12・1月滋賀：極上近江牛すき焼き！名宿5選',
    description: '近江商人の誇りが息づく重伝建の町並みと琵琶湖の冬景色！11〜1月は白壁土蔵や八幡堀の石垣が静寂な冬の空気に包まれ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-shiga-omihachiman-suigo-himure-shrine-hatsumode-omigyu-stay',
    siteName: 'クラドトラベル',
    type: 'article',
    locale: 'ja_JP',
    images: [{
      url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      width: 1200,
      height: 630,
      alt: '冬の近江八幡 水郷のこたつ舟と日牟禮八幡宮の白壁雪景色'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月滋賀：白壁土蔵が佇む「近江八幡水郷めぐり」冬のこたつ舟！千年の古社「日牟禮八幡宮」新春初詣・極上近江牛すき焼き＆長命寺温泉厳選名宿5選",
    description: "近江商人の誇りが息づく重伝建の町並みと琵琶湖の冬景色！11〜1月は白壁土蔵や八幡堀の石垣が静寂な冬の空気に包まれ、重要文化的景観「近江八幡の水郷」では冬限定のこたつ舟に揺られながら枯葦の情緒豊かな水路を進みます。近江商人信仰の総本山「日牟禮八幡宮」での商売繁盛・新春初詣と、八幡山ロープウェーから見晴らす白銀の比良山系と琵琶湖の絶景。きめ細やかな霜降り極まる最高峰「近江牛すき焼き」や赤こんにゃく・丁字麩の郷土美食を味わい、琵琶湖畔の温泉宿や近江八幡のハイクオリティ名宿5選を徹底特集。",
    images: ['https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function ShigaOmihachimanWinterFeaturePage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月滋賀】白壁土蔵が佇む「近江八幡水郷めぐり」冬のこたつ舟！千年の古社「日牟禮八幡宮」新春初詣・極上近江牛すき焼き＆長命寺温泉厳選名宿5選",
    "description": "近江商人の誇りが息づく重伝建の町並みと琵琶湖の冬景色！11〜1月は白壁土蔵や八幡堀の石垣が静寂な冬の空気に包まれ、重要文化的景観「近江八幡の水郷」では冬限定のこたつ舟に揺られながら枯葦の情緒豊かな水路を進みます。近江商人信仰の総本山「日牟禮八幡宮」での商売繁盛・新春初詣と、八幡山ロープウェーから見晴らす白銀の比良山系と琵琶湖の絶景。きめ細やかな霜降り極まる最高峰「近江牛すき焼き」や赤こんにゃく・丁字麩の郷土美食を味わい、琵琶湖畔の温泉宿や近江八幡のハイクオリティ名宿5選を徹底特集。",
    "image": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "T06:00:00+09:00",
    "dateModified": "T06:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "クラドトラベル編集部 温泉・神社仏閣取材班"
    },
    "publisher": {
      "@type": "Organization",
      "name": "クラドトラベル",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.pages.dev/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.pages.dev/winter-shiga-omihachiman-suigo-himure-shrine-hatsumode-omigyu-stay"
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
        "name": "滋賀・近江八幡 冬のこたつ舟と日牟禮八幡宮初詣",
        "item": "https://croud-travel.pages.dev/winter-shiga-omihachiman-suigo-himure-shrine-hatsumode-omigyu-stay"
      }
    ]
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "冬の「近江八幡水郷めぐり」で体験できる「こたつ舟」の運行期間と魅力は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "国の重要文化的景観第1号に選定された「近江八幡の水郷」。網の目のように広がる水路を舟でめぐる水郷めぐりは、春の桜や青葦が有名ですが、12月〜3月上旬の冬期には舟の中に練炭こたつや電気こたつを設置した「こたつ舟」が運行されます。乗船者はぬくぬくのこたつに足を入れて温まりながら、船頭さんが竿一本で操る手漕ぎ舟に揺られます。黄金色に枯れた葦原の迷路のような水路、冬鳥たちの群れ、時折舞い散る粉雪の静寂は、冬の近江八幡ならではの風流極まる体験です。運行会社（元祖近江八幡水郷めぐり等）によって事前予約が必要な場合があるため、乗船前の確認をおすすめします。"
        }
      },
      {
        "@type": "Question",
        "name": "近江商人の守護神「日牟禮八幡宮」の新春初詣の見どころと名物「つぶら餅」とは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "日牟禮八幡宮（ひむれはちまんぐう）は、一条天皇の正暦2年（991年）に創建されたと伝わる古社で、近江商人の守護神として全国の商人から篤い信仰を集めてきました。御祭神は誉田別尊（応神天皇）ら三神。新春には商売繁盛、家内安全、厄除開運を祈願する大勢の参拝客が訪れます。巨木が茂る清浄な鎮守の森を抜けて朱塗りの楼門をくぐると、格式ある本殿が迎えてくれます。参拝後は鳥居前にある「たねや 日牟禮の舎」に立ち寄るのが定番。店頭の焼き台で職人が焼き上げる「つぶら餅」は、外はカリッと香ばしく中はもっちり、上品な粒あんが熱々で、冬の参拝客に愛される名物甘味です。"
        }
      },
      {
        "@type": "Question",
        "name": "八幡山ロープウェーから望む冬の絶景と八幡山城跡の歴史は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "日牟禮八幡宮のすぐ隣から発着する「八幡山ロープウェー」。標高271mの八幡山山頂までは約4分の空中散歩です。山頂は安土城落城後、豊臣秀次が築いた「八幡山城」の跡地であり、現在は本丸跡に秀次菩提寺の村雲御所瑞龍寺門跡が建ちます。冬の展望館からは、眼下に広がる近江八幡の碁盤目状の町並み、西の湖の水郷、白銀に輝く琵琶湖の雄大なパノラマ、そして雪化粧をまとった比良山系や伊吹山まで360度の大絶景が広がります。"
        }
      },
      {
        "@type": "Question",
        "name": "本場で味わう最高峰「近江牛」の歴史と、冬に美味しいおすすめ料理は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "近江牛（おうみぎゅう）は、松阪牛・神戸牛と並ぶ日本三大和牛の一つで、約400年という日本で最も長い歴史を持つブランド和牛です。琵琶湖畔の豊かな水と肥沃な大地で育まれた牛は、きめ細かな霜降りと融点の低い良質な脂、芳醇な香りが特徴。冬の寒さの中で味わうなら、名店「千成亭」や「まるたけ近江西川」などでいただく「近江牛すき焼き」が最高峰です。近江八幡特産の「赤こんにゃく（三二酸化鉄で赤く染めた鉄分豊富なこんにゃく）。」や「丁字麩（四角い車麩）」とともに濃厚な割り下で煮込み、とろけるような肉の甘みと旨味を堪能できます。"
        }
      },
      {
        "@type": "Question",
        "name": "琵琶湖畔の「宮ヶ浜温泉」の泉質・効能と冬の入浴の魅力は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宮ヶ浜温泉（みやがはまおんせん）は、国民休暇村近江八幡に湧出する天然温泉。泉質は単純温泉（低張性・弱アルカリ性・低温泉）で、無色透明の肌に優しい柔らかなお湯です。刺激が少ないため子供から高齢者まで安心して長湯を楽しめ、神経痛・筋肉痛・疲労回復に優れた効果を発揮します。冬の展望露天風呂からは、朝日に照らされる琵琶湖の白波や、琵琶湖唯一の有人島「沖島」の冬景色を眺めながら贅沢な湯浴みが楽しめます。"
        }
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "休暇村　近江八幡",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/76886/76886.jpg",
              rating: 4.33,
              reviews: 816,
              price: "¥13,000〜",
              access: "JR　近江八幡駅より近江鉄道バス休暇村行きにて約43分　※近江鉄道バス休暇村行き、土日祝日運休",
              special: "目の前は琵琶湖です。近江牛や郷土料理に舌鼓。温泉に入りながら琵琶湖を眺めるひとときをお楽しみ下さい",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76886%2F76886.html",
              story: "琵琶湖国定公園の美しい湖岸、宮ヶ浜に佇むリゾート名宿「休暇村 近江八幡」。東館と西館を備え、全客室や展望露天風呂から白銀に輝く琵琶湖の雄大な水面と沖島をパノラマで望みます。館内の天然温泉「宮ヶ浜の湯」は、柔らかな単純温泉で身体を芯から温め、冬の湖風で冷えた身体をじんわりと癒やします。自慢の夕食は、日本三大和牛・近江牛のすき焼き・しゃぶしゃぶ・ステーキ食べ比べやプレミアムビュッフェ。水郷めぐりの乗船場や日牟禮八幡宮へのアクセスも良好で、冬の湖東の自然と美食を存分に堪能できる名宿です。",
              roomTip: "東館レイクビュー和洋室。朝の琵琶湖から昇る朝光と、沖島越しに広がる静謐な冬の湖面を部屋から一望。",
              gourmetTip: "「近江牛会席」または近江牛ディナービュッフェ。目の前で焼き上げるA4・A5ランク近江牛ステーキと濃厚なすき焼き鍋。",
              highlights: [
                "全室琵琶湖ビュー・宮ヶ浜温泉の展望露天風呂から冬の沖島と水面パノラマを一望" ,
                "極上近江牛すき焼き・ステーキ食べ比べ・地元食材あふれる豪華ビュッフェが自慢" ,
                "水郷めぐり乗船場至近・静寂な琵琶湖の自然に癒やされる冬のリゾートステイ"
              ]
            },
            {
              id: 2,
              name: "ホテルニューオウミ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4679/4679.jpg",
              rating: 4.31,
              reviews: 1469,
              price: "¥5,900〜",
              access: "ＪＲ近江八幡駅／近江鉄道 近江八幡駅より徒歩2分、名神高速竜王Ｉ．Ｃより１５分。",
              special: "ＪＲ近江八幡駅より徒歩2分！三井アウトレット滋賀竜王まで無料送迎",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4679%2F4679.html",
              story: "JR近江八幡駅南口から徒歩わずか2分、クラシカルな気品と上質なホスピタリティを誇るシティホテル「ホテルニューオウミ」。ゆったりとした広さの客室と充実した設備を整え、観光からビジネスまで快適なステイを提供します。館内には日本料理・中国料理・鉄板焼レストランを完備しており、料理長が腕を振るう冬の本格近江牛料理は地元でも屈指の評判。八幡堀や新町通りの重要伝統的建造物群保存地区へのアクセス拠点として、ワンランク上の寛ぎを求める旅人に愛されています。",
              roomTip: "スーペリアツインまたはエグゼクティブダブル。洗練されたインテリアと広めのライティングデスクで優雅な寛ぎを約束。",
              gourmetTip: "鉄板焼「伊吹」の近江牛フィレステーキコース。芳醇な香りととろけるような肉質をカウンター席のライブ感とともに堪能。",
              highlights: [
                "近江八幡駅徒歩2分の格式あるシティホテル・本格近江牛レストランと洗練空間" ,
                "八幡堀や日牟禮八幡宮へ車約10分・鉄板焼伊吹の近江牛ライブ調理が極上" ,
                "広々とした客室設計・記念日や新年旅行にふさわしい贅沢な時間を提供"
              ]
            },
            {
              id: 3,
              name: "ＡＢホテル近江八幡",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/167698/167698.jpg",
              rating: 4.09,
              reviews: 1407,
              price: "¥3,000〜",
              access: "近江八幡駅より徒歩にて約２分",
              special: "近江八幡駅より徒歩２分！和洋バイキング無料朝食！男女別大浴場完備♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167698%2F167698.html",
              story: "JR近江八幡駅南口から徒歩約2分の駅前好立地に位置する「ＡＢホテル近江八幡」。男女別の大浴場を完備しており、一日の旅の疲れ足を伸ばしてゆったりと癒やすことができます。全室に加湿空気清浄機とシモンズ社製ベッドを導入し、健康無料朝食バイキングや無料Wi-Fiなどコストパフォーマンスに優れたサービスが満載。駅前レンタカーや路線バスを利用して、日牟禮八幡宮や近江商人屋敷を軽快に巡りたいアクティブな旅行者に最適です。",
              roomTip: "シングルまたはデラックスツイン。無駄のないクリーンな客室レイアウトで、冬の防寒ギアの整理も快適。",
              gourmetTip: "無料朝食バイキングの日替わり和洋メニュー。温かいお味噌汁と滋賀県産米のご飯で清々しい朝のスタートを。",
              highlights: [
                "駅前徒歩2分の好立地・男女別大浴場完備とシモンズベッドでコスパ抜群" ,
                "無料和洋朝食バイキング・加湿空気清浄機完備で冬の乾燥対策も万全" ,
                "手荷物預かり対応・身軽に近江商人屋敷やヴォーリズ建築を散策可能"
              ]
            },
            {
              id: 4,
              name: "コンフォートイン近江八幡",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/158836/158836.jpg",
              rating: 3.74,
              reviews: 1159,
              price: "¥3,600〜",
              access: "ＪＲ近江八幡駅より徒歩約２分◆名神高速「竜王」ICより約２０分・「八日市」ICより約３０分◆JRで大阪６０分・京都３０分",
              special: "JR近江八幡駅徒歩2分◆京都駅まで30分◆近江牛カレーが楽しめる朝食ビュッフェ◆小学生まで添い寝無料",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158836%2F158836.html",
              story: "JR近江八幡駅南口から徒歩約2分、世界共通の快適スタンダードを提供する「コンフォートイン近江八幡」。全室禁煙のクリーンな客室には、快眠を追求したオリジナル寝具「チョイスピロー」を配備し、質の高い睡眠をサポートします。焼き立てパンや温かいスープが楽しめる無料朝食サービスや、ウェルカムコーヒーなど嬉しいサービスが充実。駐車場も完備しており、マイカーやレンタカーで水郷めぐりや湖岸ドライブを楽しみたい旅人にも快適な拠点です。",
              roomTip: "ダブルエコノミーまたはツインスタンダード。シンプルで機能的な空間設計で、手荷物の多い冬旅でも広々と利用可能。",
              gourmetTip: "近江八幡駅周辺の老舗すき焼き店で味わう、秘伝の割り下と赤こんにゃく・丁字麩が入った本場近江牛すき焼きディナー。",
              highlights: [
                "全室禁煙＆チョイスピロー導入・無料朝食サービスと快適な機能美" ,
                "焼き立てパン朝食とウェルカムコーヒー・マイカー観光に便利な駐車場完備" ,
                "機能的なレイアウト・リーズナブルに楽しむ冬の近江牛グルメ探訪拠点"
              ]
            },
            {
              id: 5,
              name: "アズイン東近江能登川駅前",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/106091/106091.jpg",
              rating: 4.19,
              reviews: 1617,
              price: "¥4,700〜",
              access: "新快速も停車する、ＪＲ能登川駅西口より徒歩０分！ 無料駐車場",
              special: "50品目以上を取揃えた無料和洋朝食バイキング！能登川駅から徒歩０分の立地で駐車場無料！大浴場完備！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106091%2F106091.html",
              story: "JR琵琶湖線能登川駅西口から徒歩わずか1分、近江八幡駅へも電車で1駅（約5分）の軽快アクセスを誇る「アズイン東近江能登川駅前」。男女別の大浴場とサウナ（男性用）を完備し、旅の汗と冬の冷えをしっかりと洗い流せます。全室にシモンズ社製ベッドと個別空調を備え、種類豊富な無料和洋朝食バイキングを提供。近江八幡だけでなく彦根や長浜への周遊にも抜群の立地を誇り、湖東エリアの神社仏閣巡りを広域で楽しみたい旅行者に高い支持を得ています。",
              roomTip: "スタンダードシングルまたはコーナーツイン。駅前ロータリーに面しながら静粛性に優れ、深い安らぎを提供。",
              gourmetTip: "大浴場上がりに楽しむ館内無料朝食。地元野菜を使用したお惣菜と炊きたて近江米ご飯で元気をチャージ。",
              highlights: [
                "能登川駅徒歩1分・男女別大浴場＆男性サウナ完備、近江八幡へ1駅のアクセス" ,
                "種類豊富な無料和洋朝食・彦根や長浜への広域観光にも最適な鉄道結節点" ,
                "清潔感あふれるモダン空間・丁寧な接客とアメニティで連泊も安心"
              ]
            }
  ];

  const faqList = [
  {
    "q": "冬の「近江八幡水郷めぐり」で体験できる「こたつ舟」の運行期間と魅力は？",
    "a": "国の重要文化的景観第1号に選定された「近江八幡の水郷」。網の目のように広がる水路を舟でめぐる水郷めぐりは、春の桜や青葦が有名ですが、12月〜3月上旬の冬期には舟の中に練炭こたつや電気こたつを設置した「こたつ舟」が運行されます。乗船者はぬくぬくのこたつに足を入れて温まりながら、船頭さんが竿一本で操る手漕ぎ舟に揺られます。黄金色に枯れた葦原の迷路のような水路、冬鳥たちの群れ、時折舞い散る粉雪の静寂は、冬の近江八幡ならではの風流極まる体験です。運行会社（元祖近江八幡水郷めぐり等）によって事前予約が必要な場合があるため、乗船前の確認をおすすめします。"
  },
  {
    "q": "近江商人の守護神「日牟禮八幡宮」の新春初詣の見どころと名物「つぶら餅」とは？",
    "a": "日牟禮八幡宮（ひむれはちまんぐう）は、一条天皇の正暦2年（991年）に創建されたと伝わる古社で、近江商人の守護神として全国の商人から篤い信仰を集めてきました。御祭神は誉田別尊（応神天皇）ら三神。新春には商売繁盛、家内安全、厄除開運を祈願する大勢の参拝客が訪れます。巨木が茂る清浄な鎮守の森を抜けて朱塗りの楼門をくぐると、格式ある本殿が迎えてくれます。参拝後は鳥居前にある「たねや 日牟禮の舎」に立ち寄るのが定番。店頭の焼き台で職人が焼き上げる「つぶら餅」は、外はカリッと香ばしく中はもっちり、上品な粒あんが熱々で、冬の参拝客に愛される名物甘味です。"
  },
  {
    "q": "八幡山ロープウェーから望む冬の絶景と八幡山城跡の歴史は？",
    "a": "日牟禮八幡宮のすぐ隣から発着する「八幡山ロープウェー」。標高271mの八幡山山頂までは約4分の空中散歩です。山頂は安土城落城後、豊臣秀次が築いた「八幡山城」の跡地であり、現在は本丸跡に秀次菩提寺の村雲御所瑞龍寺門跡が建ちます。冬の展望館からは、眼下に広がる近江八幡の碁盤目状の町並み、西の湖の水郷、白銀に輝く琵琶湖の雄大なパノラマ、そして雪化粧をまとった比良山系や伊吹山まで360度の大絶景が広がります。"
  },
  {
    "q": "本場で味わう最高峰「近江牛」の歴史と、冬に美味しいおすすめ料理は？",
    "a": "近江牛（おうみぎゅう）は、松阪牛・神戸牛と並ぶ日本三大和牛の一つで、約400年という日本で最も長い歴史を持つブランド和牛です。琵琶湖畔の豊かな水と肥沃な大地で育まれた牛は、きめ細かな霜降りと融点の低い良質な脂、芳醇な香りが特徴。冬の寒さの中で味わうなら、名店「千成亭」や「まるたけ近江西川」などでいただく「近江牛すき焼き」が最高峰です。近江八幡特産の「赤こんにゃく（三二酸化鉄で赤く染めた鉄分豊富なこんにゃく）。」や「丁字麩（四角い車麩）」とともに濃厚な割り下で煮込み、とろけるような肉の甘みと旨味を堪能できます。"
  },
  {
    "q": "琵琶湖畔の「宮ヶ浜温泉」の泉質・効能と冬の入浴の魅力は？",
    "a": "宮ヶ浜温泉（みやがはまおんせん）は、国民休暇村近江八幡に湧出する天然温泉。泉質は単純温泉（低張性・弱アルカリ性・低温泉）で、無色透明の肌に優しい柔らかなお湯です。刺激が少ないため子供から高齢者まで安心して長湯を楽しめ、神経痛・筋肉痛・疲労回復に優れた効果を発揮します。冬の展望露天風呂からは、朝日に照らされる琵琶湖の白波や、琵琶湖唯一の有人島「沖島」の冬景色を眺めながら贅沢な湯浴みが楽しめます。"
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

      <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-600 selection:text-white">
        {/* Breadcrumb Bar */}
        <nav aria-label="パンくずリスト" className="bg-white border-b border-stone-200 text-xs text-stone-500 py-3 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto flex items-center space-x-2">
            <Link href="/" className="hover:text-amber-600 transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:text-amber-600 transition">特集一覧</Link>
            <span>/</span>
            <span className="text-stone-800 font-medium">滋賀・近江八幡 冬のこたつ舟と日牟禮八幡宮初詣</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-b from-stone-900 via-amber-950 to-stone-900 text-white py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs sm:text-sm font-semibold mb-6">
              <Snowflake className="w-4 h-4 text-amber-400" />
              11月・12月・1月冬の近江湖東探訪スペシャル
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">「滋賀・近江八幡」<br className="hidden sm:inline" /> 白壁土蔵佇む「近江八幡水郷めぐり」冬のこたつ舟！<br /> 千年の古社「日牟禮八幡宮」新春初詣・極上近江牛＆名宿</h1>
            <p className="text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              近江商人の誇りと美意識が息づく重要伝統的建造物群保存地区。重要文化的景観第1号に輝く「近江八幡の水郷」で、冬限定のこたつ舟に温もりながら枯葦の迷路をめぐる風流なひととき。商売繁盛を願う近江商人信仰の総本山「日牟禮八幡宮」新春初詣と、八幡山から望む白銀の琵琶湖・比良山系大パノラマ。本場ならではのとろける「近江牛すき焼き」と、琵琶湖畔の宮ヶ浜温泉名宿へご案内します。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-stone-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-amber-400" /> 最適期: 11月中旬〜1月下旬
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-amber-400" /> エリア: 滋賀県近江八幡市・湖東・琵琶湖東岸
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Waves className="w-4 h-4 text-amber-400" /> 温泉: 宮ヶ浜温泉（単純温泉）
              </span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          
          {/* Section 1: 近江八幡水郷のこたつ舟 */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Cultural Landscape & Kotatsu Boat</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                重要文化的景観第1号「近江八幡の水郷」冬限定のこたつ舟でめぐる枯葦の静寂
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                琵琶湖の東岸に広がる「近江八幡の水郷」は、国の重要文化的景観第1号に選定された日本の原風景です。網の目のように縦横に巡る水路とヨシ原は、かつて豊臣秀次が城下町を開いた際、琵琶湖を行き交う船を八幡堀へと引き入れる運河として整備された歴史を持ちます。春の桜や新緑の青ヨシの美しさもさることながら、11月から1月にかけての冬シーズンは、旅情をそそる静寂の美が極まります。
              </p>
              <p>
                冬の水郷めぐりの最大の醍醐味は、12月から3月上旬にかけて運航される「こたつ舟」。木造の手漕ぎ和船の中にポカポカの練炭こたつや電気こたつが設置され、乗船客はこたつ布団に潜り込んで温まりながら水路を進みます。船頭さんが巧みに操る一本の竿が水を切る音だけが静かに響き、両岸には背丈を超える黄金色の枯葦が揺れます。西の湖周辺のヨシ原は、古くからヨシ簾や松明、茅葺き屋根の材料として人々の暮らしと生業を支えてきた共生のシンボルであり、冬に行われる「葦刈り（ヨシ刈り）」の作業風景も冬の風物詩です。
              </p>
              <p>
                時折、枯葦の陰からカモやカイツブリなどの渡り鳥たちが飛び立ち、遠く雪化粧した西の湖の山々が水面に映り込みます。冷たく澄み切った冬の大気と、こたつの優しい温もりの心地よい対比。日常の喧騒から隔絶された水上の静けさに身を浸す時間は、冬の近江路ならではの贅沢な癒やしです。
              </p>
            </div>
          </section>

          {/* Section 2: 日牟禮八幡宮と八幡山城跡の冬景色 */}
          <section className="mb-16">
            <div className="border-l-4 border-red-600 pl-4 mb-6">
              <span className="text-xs font-bold text-red-600 tracking-wider uppercase">Historic Shrine & Castle View</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                近江商人信仰の総本山「日牟禮八幡宮」新春商売繁盛祈願と八幡山からの琵琶湖絶景
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                水郷から八幡堀を渡った八幡山の麓に鎮座する「日牟禮八幡宮（ひむれはちまんぐう）」。正暦2年（991年）に創建されたと伝わる千年の古社で、全国へと雄飛した近江商人（八幡商人）たちが守護神として深く崇敬してきた神社です。「売り手よし、買い手よし、世間よし」という「三方よし」の近江商人精神の根底には、日牟禮八幡宮への篤い信仰と感謝の念がありました。誉田別尊（応神天皇）を主祭神とし、新春初詣には商売繁盛、社運隆昌、家内安全を願う参拝客で境内が活気に満ちあふれます。
              </p>
              <p>
                厳かな参拝を終えた後は、神社のすぐ脇から運行する「八幡山ロープウェー」で山頂へ。標高271mの八幡山山頂は、豊臣秀次が築城した八幡山城の本丸跡。冬の澄み渡る展望台からは、眼下に広がる白壁土蔵の町並みや碁盤目状の城下町、西の湖の水郷、そして北西に広がる雄大な琵琶湖の湖面が一望のもとに広がります。天気の良い冬晴れの日には、雪を冠した比良山系や伊吹山がくっきりと浮かび上がり、近江の国の壮大なスケールに圧倒されます。
              </p>
              <p>
                参道へ戻ったら、和菓子の名店「たねや 日牟禮の舎」へ。茅葺き屋根の風情ある茶屋の店頭で、職人が手際よく焼き上げる名物「つぶら餅」は必食です。カリッとした皮の中に熱々の瑞々しい粒あんが詰まった一口サイズの焼き餅は、冬の参拝客の心と身体を優しく温めてくれます。周辺の新町通りには国の重要文化財・旧西川家住宅など豪壮な近江商人屋敷が保存され、大正・昭和初期に建築家ウィリアム・メレル・ヴォーリズが遺した名建築群（旧八幡郵便局等）の冬のノスタルジーも堪能できます。
              </p>
            </div>
          </section>

          {/* Section 3: 近江牛すき焼き＆郷土の美味 */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-700 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-700 tracking-wider uppercase">Legendary Omi Beef & Local Delicacies</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                とろける霜降り「本場・近江牛すき焼き」と赤こんにゃく・丁字麩の美食の饗宴
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                近江八幡の夜を彩る最大の主役が、日本三大和牛の一つ「近江牛（おうみぎゅう）」。約400年前の江戸時代、彦根藩が将軍家や各大名へ養生薬（味噌漬け肉）として献上したことに始まる、日本で最も長い歴史を誇るブランド牛です。鈴鹿山脈や伊吹山からの清らかな伏流水と良質な稲藁で丹精込めて育てられた近江牛は、極めてきめ細やかなサシ（霜降り）が特徴で、脂の融点が約24度と人の体温よりも低いため、口に入れた瞬間にとろけるような舌触りを生み出します。
              </p>
              <p>
                冬の寒い夜、鉄鍋で焼き上げる「近江牛すき焼き」は格別の美味。まず牛脂を引いた鉄鍋に上質な牛肉を広げ、砂糖と醤油の割り下でさっと焼き付けてそのまま食す贅沢。芳醇な香りと甘みが口中に溢れます。続いて鍋に合わせるのが、近江八幡ならではの郷土食材。織田信長が派手好きゆえに赤く染めさせたと伝わる鉄分豊富な「赤こんにゃく」、城下町の道筋を表す四角い形に焼き上げられた「丁字麩（ちょうじふ）」、地元産の甘い白ネギ。近江牛の上質な旨味と脂をたっぷり吸い込んだ丁字麩のジューシーな味わいは、本場でしか出逢えない冬の至福です。また、冬の琵琶湖の伝統漁で獲れる高級淡水魚「ホンモロコの素焼き」や「小鮎の飴炊き」も、地酒との相性抜群の湖国の滋味です。
              </p>
              <p>
                食事の後は、琵琶湖畔に湧出する「宮ヶ浜温泉」へ。肌に優しい柔らかな単純温泉に身を委ね、冬の静かな湖面を眺めながら湯浴みを満喫すれば、近江の歴史と自然、美食が織りなす極上の余韻に浸ることができます。
              </p>
            </div>
          </section>

          {/* Section 4: 厳選名宿5選 */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-8">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Verified Hotels via Rakuten API</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【楽天トラベル実データ連携】近江八幡・琵琶湖周辺の厳選名宿5選
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
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200">
                        厳選第{h.id}位
                      </span>
                      <div className="flex items-center gap-3 text-xs sm:text-sm">
                        <span className="flex items-center text-amber-500 font-bold">
                          <Star className="w-4 h-4 fill-amber-400 stroke-amber-400 mr-1" />
                          {h.rating}
                        </span>
                        <span className="text-stone-400">({h.reviews.toLocaleString()}件)</span>
                        <span className="text-amber-700 font-black text-sm sm:text-base">
                          {h.price}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                      {h.name}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
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
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
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
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition shadow-sm"
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

          {/* Section 5: 冬の近江八幡1泊2日モデルコース */}
          <section className="mb-16">
            <div className="border-l-4 border-stone-700 pl-4 mb-6">
              <span className="text-xs font-bold text-stone-600 tracking-wider uppercase">Model Itinerary</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【1泊2日】水郷こたつ舟と日牟禮八幡宮初詣・近江牛を満喫するモデルコース
              </h2>
            </div>
            <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-stone-800 text-white text-xs font-bold rounded">DAY 1</span>
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                    近江商人屋敷散策と水郷こたつ舟体験・琵琶湖畔温泉で近江牛ディナー
                  </h3>
                </div>
                <ul className="border-l-2 border-stone-200 ml-3 pl-4 space-y-3 text-xs sm:text-sm text-stone-600">
                  <li>
                    <strong className="text-stone-800">10:30</strong> JR近江八幡駅に到着。路線バスで「新町通り」へ向かい、白壁土蔵が連なる重要伝統的建造物群保存地区を散策。
                  </li>
                  <li>
                    <strong className="text-stone-800">12:00</strong> 老舗「千成亭」で本場近江牛の牛鍋や牛握り寿司の贅沢ランチ。
                  </li>
                  <li>
                    <strong className="text-stone-800">13:30</strong> 水郷めぐり乗船場へ移動。冬限定の「こたつ舟」に乗り込み、温まりながら枯葦の水路を巡る風流な舟旅を満喫。
                  </li>
                  <li>
                    <strong className="text-stone-800">15:30</strong> 琵琶湖岸の「休暇村 近江八幡」へチェックイン。
                  </li>
                  <li>
                    <strong className="text-stone-800">16:30</strong> 宮ヶ浜温泉の展望露天風呂に浸かり、夕日に染まる冬の琵琶湖と沖島を鑑賞。
                  </li>
                  <li>
                    <strong className="text-stone-800">18:30</strong> A4・A5ランク近江牛すき焼きと地元旬菜の豪華会席に舌鼓。
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-amber-600 text-white text-xs font-bold rounded">DAY 2</span>
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                    日牟禮八幡宮新春初詣と八幡山城跡展望・たねや焼き立てつぶら餅
                  </h3>
                </div>
                <ul className="border-l-2 border-stone-200 ml-3 pl-4 space-y-3 text-xs sm:text-sm text-stone-600">
                  <li>
                    <strong className="text-stone-800">08:30</strong> レイクビューレストランで近江米と地元惣菜の朝食をいただきチェックアウト。
                  </li>
                  <li>
                    <strong className="text-stone-800">09:30</strong> 「日牟禮八幡宮」で商売繁盛と新春の開運祈願。
                  </li>
                  <li>
                    <strong className="text-stone-800">10:30</strong> 八幡山ロープウェーで山頂へ。冬晴れの琵琶湖と比良山系、城下町のパノラマビューを堪能。
                  </li>
                  <li>
                    <strong className="text-stone-800">11:45</strong> 「たねや 日牟禮の舎」で名物「つぶら餅」を味わい、八幡堀沿いの白壁雪景色を写真に収める。
                  </li>
                  <li>
                    <strong className="text-stone-800">13:30</strong> 駅前でお土産に近江牛味噌漬けや赤こんにゃく、丁字麩を購入して帰路へ。
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: FAQ Section */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                冬の近江八幡旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-4">
              {faqList.map((f, i) => (
                <div key={i} className="bg-white border border-stone-200 rounded-xl p-5">
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base mb-2 flex items-start gap-2">
                    <span className="text-amber-600 font-black">Q.</span>
                    <span>{f.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5 border-l-2 border-amber-100">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: 内部リンク & 関連記事クロスナビゲーション */}
          <section className="border-t border-stone-200 pt-10">
            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-600" />
              RELATED WINTER FEATURES（冬の注目特集一覧）
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <Link 
                href="/winter-shiga-nagahama-taiko-onsen-biwako-kamonabe-omigyu-stay"
                className="p-3 bg-white border border-stone-200 rounded-lg hover:border-amber-400 hover:shadow-sm transition"
              >
                <div className="font-bold text-stone-800 mb-1">【滋賀】長浜・太閤温泉＆湖北の冬旅</div>
                <p className="text-stone-500">湖北の冬の風物詩「天然真鴨鍋」と竹生島クルーズ・長浜黒壁スクエア名宿</p>
              </Link>
              <Link 
                href="/winter-shiga-hieizan-enryakuji-ogoto-onsen-omigyu-stay"
                className="p-3 bg-white border border-stone-200 rounded-lg hover:border-amber-400 hover:shadow-sm transition"
              >
                <div className="font-bold text-stone-800 mb-1">【滋賀】比叡山延暦寺＆おごと温泉</div>
                <p className="text-stone-500">世界遺産・不滅の法灯新春初詣と琵琶湖一望の美肌露天・近江牛会席名宿</p>
              </Link>
              <Link 
                href="/winter-kyoto-arashiyama-onsen-yudofu-stay"
                className="p-3 bg-white border border-stone-200 rounded-lg hover:border-amber-400 hover:shadow-sm transition"
              >
                <div className="font-bold text-stone-800 mb-1">【京都】嵐山温泉＆名物湯豆腐の冬散策</div>
                <p className="text-stone-500">渡月橋雪景色と嵯峨野竹林の小径・老舗湯豆腐と嵐山天然温泉名宿</p>
              </Link>
              <Link 
                href="/winter-fukui-tsuruga-kehi-jingu-mikata-goko-echizengani-wakasa-fugu-stay"
                className="p-3 bg-white border border-stone-200 rounded-lg hover:border-amber-400 hover:shadow-sm transition"
              >
                <div className="font-bold text-stone-800 mb-1">【福井】敦賀・気比神宮初詣＆越前蟹</div>
                <p className="text-stone-500">北陸新幹線延伸の敦賀！北陸道総鎮守新春祈願と冬旬越前がに・若狭ふぐ名宿</p>
              </Link>
            </div>
            <div className="mt-6 text-center">
              <Link 
                href="/features"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition"
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
