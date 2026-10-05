import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月宮城】陸奥総鎮守「鹽竈神社」新春初詣と日本三景「松島」雪景色！冬旬「三陸松島かき」・極上ひがしもの鮪＆松島温泉名宿5選",
  description: "芭蕉も心奪われた日本三景・松島と、千二百年の歴史を刻む陸奥国一ノ宮・塩竈を巡る11〜1月の冬紀行。伊達政宗ゆかりの国宝「瑞巌寺」や五大堂が白雪をまとう静寂の松島湾、表坂202段の石段を登り迎える「志波彦神社・鹽竈神社」荘厳な新春初詣。真冬に最も身が太り濃厚なミルキーさを極める「三陸松島かき」、塩竈港水揚げの奇跡のブランド鮪「三陸塩竈ひがしもの」、極上仙台牛。太古の地層から湧く松島温泉「美肌の湯」に癒やされる厳選名宿5選を徹底解説します。",
  keywords: '鹽竈神社 初詣, 松島 雪景色, 松島かき 冬, 塩竈ひがしもの 鮪, 瑞巌寺 雪, 松島一の坊, 松島大観荘, 松島温泉 絶景宿, 宮城 冬旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-miyagi-matsushima-shiogama-shrine-hatsumode-sanriku-oyster-higashimono-stay/"
  },
  openGraph: {
    title: "【11・12・1月宮城】陸奥総鎮守「鹽竈神社」新春初詣と日本三景「松島」雪景色！冬旬「三陸松島かき」・極上ひがしもの鮪＆松島温泉名宿5選",
    description: "芭蕉も心奪われた日本三景・松島と、千二百年の歴史を刻む陸奥国一ノ宮・塩竈を巡る11〜1月の冬紀行。伊達政宗ゆかりの国宝「瑞巌寺」や五大堂が白雪をまとう静寂の松島湾、表坂202段の石段を登り迎える「志波彦神社・鹽竈神社」荘厳な新春初詣。真冬に最も身が太り濃厚なミルキーさを極める「三陸松島かき」、塩竈港水揚げの奇跡のブランド鮪「三陸塩竈ひがしもの」、極上仙台牛。太古の地層から湧く松島温泉「美肌の湯」に癒やされる厳選名宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-miyagi-matsushima-shiogama-shrine-hatsumode-sanriku-oyster-higashimono-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '日本三景松島の冬景色と鹽竈神社の新春初詣'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月宮城】陸奥総鎮守「鹽竈神社」新春初詣と日本三景「松島」雪景色！冬旬「三陸松島かき」・極上ひがしもの鮪＆松島温泉名宿5選",
    description: "芭蕉も心奪われた日本三景・松島と、千二百年の歴史を刻む陸奥国一ノ宮・塩竈を巡る11〜1月の冬紀行。伊達政宗ゆかりの国宝「瑞巌寺」や五大堂が白雪をまとう静寂の松島湾、表坂202段の石段を登り迎える「志波彦神社・鹽竈神社」荘厳な新春初詣。真冬に最も身が太り濃厚なミルキーさを極める「三陸松島かき」、塩竈港水揚げの奇跡のブランド鮪「三陸塩竈ひがしもの」、極上仙台牛。太古の地層から湧く松島温泉「美肌の湯」に癒やされる厳選名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export const dynamic = 'force-static';

export default function MiyagiMatsushimaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月宮城】陸奥総鎮守「鹽竈神社」新春初詣と日本三景「松島」雪景色！冬旬「三陸松島かき」・極上ひがしもの鮪＆松島温泉名宿5選",
    "description": "芭蕉も心奪われた日本三景・松島と、千二百年の歴史を刻む陸奥国一ノ宮・塩竈を巡る11〜1月の冬紀行。伊達政宗ゆかりの国宝「瑞巌寺」や五大堂が白雪をまとう静寂の松島湾、表坂202段の石段を登り迎える「志波彦神社・鹽竈神社」荘厳な新春初詣。真冬に最も身が太り濃厚なミルキーさを極める「三陸松島かき」、塩竈港水揚げの奇跡のブランド鮪「三陸塩竈ひがしもの」、極上仙台牛。太古の地層から湧く松島温泉「美肌の湯」に癒やされる厳選名宿5選を徹底解説します。",
    "image": "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80",
    "datePublished": "2026-10-05T15:00:00+09:00",
    "dateModified": "2026-10-05T15:00:00+09:00",
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
      "@id": "https://croud-travel.com/winter-miyagi-matsushima-shiogama-shrine-hatsumode-sanriku-oyster-higashimono-stay"
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
        "name": "宮城・松島＆塩竈 冬特集",
        "item": "https://croud-travel.com/winter-miyagi-matsushima-shiogama-shrine-hatsumode-sanriku-oyster-higashimono-stay"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "冬（11・12・1月）の鹽竈神社（しおがまじんじゃ）・志波彦神社初詣の由緒と見どころは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "鹽竈神社は陸奥国一ノ宮であり、東北鎮護・陸奥総鎮守として千二百年以上の歴史を誇る名社です。主祭神の塩土老翁神（しおつちおじのかみ）は人々に製塩や漁業を教えた神とされ、安産・延命長寿・海上安全・交通安全の御神徳で篤く信仰されています。新春初詣のハイライトは、表参道（表坂）に連なる202段の急峻な石段です。澄み切った冬空に向かって石段を一歩一歩登り詰め、雪化粧した国重文の唐門をくぐると、丹塗りの社殿が荘厳に佇みます。正月三が日には約40万人の参拝客で賑わい、隣接する志波彦神社とあわせ東北屈指の新春パワースポットとなっています。"
        }
      },
      {
        "@type": "Question",
        "name": "冬の「松島かき（真牡蠣）」の旬と美味しさの秘密、おすすめの食べ方は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "松島湾は山々からの豊かなミネラルが注ぎ込む穏やかな内湾で、古くから牡蠣養殖が盛んな日本有数の牡蠣の産地です。松島の真牡蠣は10月下旬頃から水揚げが始まり、水温が下がる12月から1月、2月にかけて最も身が大きく肥え太り、グリコーゲンと旨味が凝縮します。小ぶりながらも身が引き締まり、濃厚なクリーミーさと深い磯の甘みが際立ちます。海岸通り周辺の「かき小屋」で豪快に鉄板で蒸し焼きにする焼き牡蠣や、仙台味噌仕立ての牡蠣鍋、サクサクのカキフライなど、冬ならではの熱々グルメは必食です。"
        }
      },
      {
        "@type": "Question",
        "name": "塩竈港水揚げのブランド鮪「三陸塩竈ひがしもの」とは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "「三陸塩竈ひがしもの」とは、9月〜12月にかけて三陸東沖の親潮と黒潮が交わる良質な漁場で獲れ、塩竈市営魚市場に水揚げされた生メバチマグロのうち、仲買人の厳しい目利きによって「鮮度」「色艶」「脂乗り」「旨味」のすべてにおいて最高ランクと認められた極上マグロにのみ与えられる称号です。100本に1本程度しか認定されない希少品で、冬のメバチマグロならではの鮮やかな赤身の深みと、上質な中トロのとろける甘みは本マグロに勝るとも劣らない絶品です。"
        }
      },
      {
        "@type": "Question",
        "name": "国宝・瑞巌寺（ずいがんじ）や五大堂の冬の見どころと雪景色のベストタイムは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "瑞巌寺は平安初期に慈覚大師円仁が開山し、慶長14年（1609年）に伊達政宗公が桃山美術の粋を集めて再建した名刹で、本堂や庫裏が国宝に指定されています。冬は参道の杉並木や本堂の屋根に雪が薄く積もり、静まり返った境内には厳かな空気が満ちます。また松島湾の小島に建つ「五大堂」は、足元が透けて見える「すかし橋」を渡って参拝するシンボル。冬の午前中は空気が澄み、雪の小島と青い海、朱塗りの橋が織りなすコントラストが最も美しく輝きます。"
        }
      },
      {
        "@type": "Question",
        "name": "仙台駅からのアクセスと冬の気候・雪道対策は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "仙台駅からJR仙石線快速・普通列車で松島海岸駅まで約40分、本塩釜駅まで約30分と公共交通機関でのアクセスが極めて優れています。東北本線を利用すれば仙台駅から松島駅まで約25分です。宮城県沿岸部の松島・塩竈エリアは東北地方の中では比較的積雪が少なく温暖ですが、12月〜1月の朝晩は氷点下に下がる日が多く、日陰の凍結（ブラックアイスバーン）に注意が必要です。車で訪れる場合は必ずスタッドレスタイヤを装着し、海風を通さない厚手の防寒具や手袋、滑りにくい靴を用意してください。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "松島温泉　松島一の坊",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29234/29234.jpg",
              rating: 4.59,
              reviews: 1403,
              price: "¥44,000〜",
              access: "ＪＲ東北本線松島駅またはＪＲ仙石線松島海岸駅より無料送迎サービスあり／三陸道　松島海岸ＩＣより15分",
              special: "オールインクルーシブ温泉リゾート。無料でアクティビティやドリンク、スイーツをお好きなだけどうぞ。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29234%2F29234.html",
              story: "松島湾を正面に望む広大な水上庭園を抱き、上質な大人の休息を約束するオールインクルーシブ温泉リゾート「松島温泉 松島一の坊」。チェックインからチェックアウトまで、静かなラウンジでの生演奏やビール・ワイン、挽きたて珈琲、ジェラートなどがすべて宿泊料金に含まれています。最上階の展望露天風呂「八百八島」からは、朝日に黄金色に染まる松島湾の島々を一望。肌を滑らかに包み込む天然温泉「太古天泉」の湯浴みは至福そのものです。夕食は料理人が目の前で一皿ずつ仕上げる「オーダービュッフェ」スタイルで、三陸の冬牡蠣や仙台牛、三陸寒魚の握り寿司を出来立て熱々で堪能できます。",
              roomTip: "海側和モダンツインまたは展望露天風呂付き客室。松島湾に浮かぶ小島と行き交う観光船を絵画のように切り取るピクチャーウィンドウ。",
              gourmetTip: "「料理人が目の前で仕上げるディナービュッフェ」。ふっくら蒸し上げた三陸産牡蠣、香ばしい仙台牛ステーキ、職人が握る新鮮なトロ握りが絶品。",
              highlights: [
                "水上庭園と松島湾一望・ラウンジや温泉が全て楽しめる贅沢オールインクルーシブ" ,
                "最上階展望露天風呂「八百八島」・朝日に染まる冬の松島パノラマとオーダービュッフェ" ,
                "生演奏響くサロンラウンジ・大人のおこもり冬旅に選ばれる最高峰ホスピタリティ"
              ]
            },
            {
              id: 2,
              name: "松島温泉　ホテル絶景の館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29538/29538.jpg",
              rating: 4.51,
              reviews: 1711,
              price: "¥9,000〜",
              access: "仙石線 松島海岸駅・東北本線　松島駅　（15：00～21：00まで送迎有・予約不可）／三陸道松島ICより１０分",
              special: "お部屋から刻々変化する180°のパノラマを体験しませんか",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29538%2F29538.html",
              story: "松島海岸の朱塗りの橋「福浦橋」と出会い橋、そして松島湾の島々を正面の特等席から見晴らす絶景旅館「松島温泉 ホテル絶景の館」。その名の通り、すべての客室および露天風呂から日本三景・松島の圧倒的なオーシャンビューが広がります。地下1,500メートルから湧き出る松島温泉は「美肌の湯」として知られるアルカリ性単純温泉で、冬の冷えた体を芯から温めてお肌をすべすべに整えてくれます。夕食には三陸の旬の恵みが豪快に並び、冬名物の焼き牡蠣やカキ鍋、三陸のアワビやフカヒレなど、宮城の海の幸を心ゆくまで味わい尽くせます。",
              roomTip: "海側全室パノラマビュー客室。夜にはライトアップされた福浦橋の幻想的な朱色と冬の星空が窓外に広がります。",
              gourmetTip: "「冬の三陸海鮮・牡蠣尽くし会席」。大粒の松島牡蠣の陶板焼き、カキフライ、出汁香る牡蠣釜飯が冬の胃袋を贅沢に満たします。",
              highlights: [
                "福浦橋と松島湾の絶景特等席・全室オーシャンビューと自家源泉美肌の湯" ,
                "地下1500m湧出の天然温泉露天・大粒の松島焼き牡蠣と三陸海鮮会席" ,
                "福浦島ライトアップ夜景を部屋から鑑賞・コストパフォーマンス抜群の温泉ステイ"
              ]
            },
            {
              id: 3,
              name: "ホテル松島大観荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7748/7748.jpg",
              rating: 4.51,
              reviews: 3622,
              price: "¥15,730〜",
              access: "仙台駅よりJR仙石線乗車、松島海岸駅下車、ホテル無料シャトルバスで3分　　車は三陸道松島海岸ICより5分",
              special: "■料理自慢の宿が提供する選べる2種のバイキング！■日本三景松島を一望！海と緑に囲まれたリゾートホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7748%2F7748.html",
              story: "松島湾を見下ろす緑豊かな高台に堂々と建ち、充実した施設と雄大なパノラマビューで圧倒的な支持を集める大型リゾート「ホテル松島大観荘」。ホテル最上階の展望大浴場や露天風呂からは、松島湾260余島が織りなす大パノラマが一望でき、冬の朝霧に浮かぶ島影は息を呑むほどの美しさです。大浴場はゆったりとした造りで、雪が舞う露天風呂での雪見湯浴みも格別。和食・洋食・中華の専門シェフが腕を振るう豪華ディナーバイキングでは、三陸産の海の幸やステーキ、地元の郷土料理が食べ放題。カップルから家族三世代まで快適に過ごせる名門ホテルです。",
              roomTip: "松島湾一望のオーシャンビュー和洋室。高台ならではの雄大な視界から、水平線から昇る冬の力強い朝日を観賞。",
              gourmetTip: "「海鮮バイキングまたは和風本格会席」。冬の三陸産真牡蠣の蒸し焼きや、職人が目の前で焼き上げる牛タン焼き、握り寿司が自慢。",
              highlights: [
                "松島湾260余島を見渡す高台パノラマ・和洋中シェフの豪華ディナーバイキング" ,
                "松島随一のスケールと温かなサービス・三世代家族旅行にも安心の充実設備" ,
                "水平線から昇る神々しい冬日の出・大型無料駐車場完備でドライブ旅行にも至便"
              ]
            },
            {
              id: 4,
              name: "松島温泉　小松館　好風亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4675/4675.jpg",
              rating: 4.64,
              reviews: 1158,
              price: "¥11,000〜",
              access: "JR仙台駅より仙石線・東北本線で40分。仙石線松島海岸駅・東北本線松島駅より車で５分",
              special: "貸切露天風呂が大人気　　松島で一番海に近い宿/最高の料理といい景色と天然温泉",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4675%2F4675.html",
              story: "松島海岸の岬に静かに佇み、行き届いた細やかなもてなしと情緒あふれる空間が旅人を癒やす純和風旅館「松島温泉 小松館 好風亭」。館内随所から松島湾の海景色が望め、貸切露天風呂「潮音の湯」や足湯テラスからは波のせせらぎが心地よく響きます。客室は和の伝統とモダンな快適性が調和した設え。夕食は宮城の四季の美味を丁寧に紡ぎ出す本格炭火焼会席で、冬は三陸産の肉厚な牡蠣を炭火で香ばしく焼き上げ、塩竈港水揚げの極上マグロや仙台牛とともに味わう極上の美食体験が待っています。記念日や大切な人との冬旅に選ばれ続ける名宿です。",
              roomTip: "展望風呂付き特別室または海側モダン和室。松島の静かな波音に包まれながら、畳の上で心静かに過ごすプライベートな時間。",
              gourmetTip: "「炭火焼会席・冬の三陸味覚プラン」。炭火でじっくり火を通す大粒牡蠣の芳醇な旨味エキスと、とろける仙台牛の炭火焼きが至高。",
              highlights: [
                "岬に佇む老舗の気品・貸切露天風呂「潮音の湯」と三陸炭火焼会席" ,
                "きめ細やかなおもてなし・三陸牡蠣と塩竈港マグロ・仙台牛の炭火焼き美食" ,
                "大切な記念日や夫婦旅に最適・静寂な波音に癒やされる隠れ家リゾート"
              ]
            },
            {
              id: 5,
              name: "松島温泉　松島センチュリーホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4964/4964.jpg",
              rating: 4.44,
              reviews: 1993,
              price: "¥16,500〜",
              access: "ＪＲ仙石線松島海岸駅下車徒歩10分、ＪＲ東北本線松島駅下車徒歩15分",
              special: "日本三景松島の中心部に位置し、主な観光施設へは徒歩圏内。目の前に広がる松島湾の風景は最高の贅沢。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4964%2F4964.html",
              story: "JR松島海岸駅から徒歩約10分、日本三景碑や五大堂、遊覧船乗り場へも徒歩圏内という観光のベストポジションに位置する「松島温泉 松島センチュリーホテル」。館内に引かれた天然温泉「絹肌の湯」はとろりとした湯触りが特徴のアルカリ性単純温泉で、湯上がりの肌がシルクのように滑らかになると評判です。白を基調とした明るく洗練された客室はゆったりとした広さで、快適なベッドと個別空調を完備。夕食には地元松島の旬の食材を活かした創作和食会席が振る舞われ、朝食ビュッフェでは温かい牛タンカレーや宮城の郷土料理が並びます。",
              roomTip: "海側ツインまたはバルコニー付き和洋室。冬の澄んだ空気の中、テラスに出て松島湾の爽快な潮風と朝日を感じる心地よい朝。",
              gourmetTip: "「冬の味覚・松島会席」。地元水揚げの松島牡蠣の土手鍋や、三陸鮮魚のお造り、宮城のブランド米「ひとめぼれ」の炊きたてご飯。",
              highlights: [
                "松島海岸駅徒歩圏・とろみのある美肌温泉「絹肌の湯」と五大堂散策に便利な好立地" ,
                "明るく洗練された客室空間・冬の牡蠣鍋と宮城名物牛タン朝食ビュッフェ" ,
                "五大堂・瑞巌寺・円通院へ徒歩でアクセス可能・松島観光の拠点として抜群"
              ]
            }
  ];

  const faqsData = [
    {
      q: "冬（11・12・1月）の鹽竈神社（しおがまじんじゃ）・志波彦神社初詣の由緒と見どころは？",
      a: "鹽竈神社は陸奥国一ノ宮であり、東北鎮護・陸奥総鎮守として千二百年以上の歴史を誇る名社です。主祭神の塩土老翁神（しおつちおじのかみ）は人々に製塩や漁業を教えた神とされ、安産・延命長寿・海上安全・交通安全の御神徳で篤く信仰されています。新春初詣のハイライトは、表参道（表坂）に連なる202段の急峻な石段です。澄み切った冬空に向かって石段を一歩一歩登り詰め、雪化粧した国重文の唐門をくぐると、丹塗りの社殿が荘厳に佇みます。正月三が日には約40万人の参拝客で賑わい、隣接する志波彦神社とあわせ東北屈指の新春パワースポットとなっています。"
    },
    {
      q: "冬の「松島かき（真牡蠣）」の旬と美味しさの秘密、おすすめの食べ方は？",
      a: "松島湾は山々からの豊かなミネラルが注ぎ込む穏やかな内湾で、古くから牡蠣養殖が盛んな日本有数の牡蠣の産地です。松島の真牡蠣は10月下旬頃から水揚げが始まり、水温が下がる12月から1月、2月にかけて最も身が大きく肥え太り、グリコーゲンと旨味が凝縮します。小ぶりながらも身が引き締まり、濃厚なクリーミーさと深い磯の甘みが際立ちます。海岸通り周辺の「かき小屋」で豪快に鉄板で蒸し焼きにする焼き牡蠣や、仙台味噌仕立ての牡蠣鍋、サクサクのカキフライなど、冬ならではの熱々グルメは必食です。"
    },
    {
      q: "塩竈港水揚げのブランド鮪「三陸塩竈ひがしもの」とは？",
      a: "「三陸塩竈ひがしもの」とは、9月〜12月にかけて三陸東沖の親潮と黒潮が交わる良質な漁場で獲れ、塩竈市営魚市場に水揚げされた生メバチマグロのうち、仲買人の厳しい目利きによって「鮮度」「色艶」「脂乗り」「旨味」のすべてにおいて最高ランクと認められた極上マグロにのみ与えられる称号です。100本に1本程度しか認定されない希少品で、冬のメバチマグロならではの鮮やかな赤身の深みと、上質な中トロのとろける甘みは本マグロに勝るとも劣らない絶品です。"
    },
    {
      q: "国宝・瑞巌寺（ずいがんじ）や五大堂の冬の見どころと雪景色のベストタイムは？",
      a: "瑞巌寺は平安初期に慈覚大師円仁が開山し、慶長14年（1609年）に伊達政宗公が桃山美術の粋を集めて再建した名刹で、本堂や庫裏が国宝に指定されています。冬は参道の杉並木や本堂の屋根に雪が薄く積もり、静まり返った境内には厳かな空気が満ちます。また松島湾の小島に建つ「五大堂」は、足元が透けて見える「すかし橋」を渡って参拝するシンボル。冬の午前中は空気が澄み、雪の小島と青い海、朱塗りの橋が織りなすコントラストが最も美しく輝きます。"
    },
    {
      q: "仙台駅からのアクセスと冬の気候・雪道対策は？",
      a: "仙台駅からJR仙石線快速・普通列車で松島海岸駅まで約40分、本塩釜駅まで約30分と公共交通機関でのアクセスが極めて優れています。東北本線を利用すれば仙台駅から松島駅まで約25分です。宮城県沿岸部の松島・塩竈エリアは東北地方の中では比較的積雪が少なく温暖ですが、12月〜1月の朝晩は氷点下に下がる日が多く、日陰の凍結（ブラックアイスバーン）に注意が必要です。車で訪れる場合は必ずスタッドレスタイヤを装着し、海風を通さない厚手の防寒具や手袋、滑りにくい靴を用意してください。"
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
      <header className="relative bg-gradient-to-b from-slate-950 via-cyan-950 to-slate-900 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-cyan-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Snowflake className="w-4 h-4 text-cyan-300" />
            <span>東北・宮城 松島湾 冬の特別紀行（11月・12月・1月）</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 font-journal-serif">
            陸奥総鎮守「鹽竈神社」新春初詣と日本三景「松島」雪景色<br className="hidden md:inline" />
            冬旬「三陸松島かき」・極上ひがしもの鮪＆松島温泉名宿5選
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mb-6">
            松尾芭蕉が『おくのほそ道』で絶賛した日本三景・松島と、千二百余年の格式を誇る陸奥国一ノ宮・塩竈。伊達政宗公が再建した国宝「瑞巌寺」や五大堂の島々が白雪に染まる11月から1月、大気は澄み渡り、松島湾260余島は神々しい静寂に包まれます。表坂202段の石段を登る鹽竈神社の新春初詣。そして冬に身が太る濃厚な「三陸松島かき」と、塩竈港水揚げの奇跡のブランド鮪「三陸塩竈ひがしもの」、極上仙台牛。太古天泉・松島温泉の湯煙とともに、心洗われるみちのくの冬をご案内します。
          </p>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-slate-200">
            <span className="bg-cyan-900/60 border border-cyan-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" /> 鹽竈神社・志波彦神社（陸奥国一ノ宮新春初詣）
            </span>
            <span className="bg-cyan-900/60 border border-cyan-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Waves className="w-4 h-4 text-cyan-400" /> 日本三景 松島雪景色（瑞巌寺・五大堂・福浦橋）
            </span>
            <span className="bg-cyan-900/60 border border-cyan-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-cyan-400" /> 三陸松島かき＆塩竈ひがしもの鮪・仙台牛
            </span>
          </div>
        </div>
      </header>

      {/* Summary Box */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
            <CheckCircle2 className="w-5 h-5 text-cyan-700 flex-shrink-0" />
            <span>本特集でわかること（11・12・1月の宮城・松島＆塩竈旅行の要点）</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="bg-cyan-50/60 p-4 rounded-xl border border-cyan-100">
              <span className="font-bold text-cyan-950 block mb-1">① 鹽竈神社202段表坂と新春祈祷</span>
              陸奥総鎮守の威容。急峻な石段を登りつめ、丹塗りの国重文社殿で迎える厳粛な新年の祈りと海上安全・延命長寿の御神徳。
            </div>
            <div className="bg-cyan-50/60 p-4 rounded-xl border border-cyan-100">
              <span className="font-bold text-cyan-950 block mb-1">② 三陸松島かき＆極上ひがしもの</span>
              冬の内湾でグリコーゲンを蓄えたクリーミーな真牡蠣と、100本に1本の選ばれし極上メバチマグロ「ひがしもの」、仙台牛ステーキ。
            </div>
            <div className="bg-cyan-50/60 p-4 rounded-xl border border-cyan-100">
              <span className="font-bold text-cyan-950 block mb-1">③ 松島温泉「太古天泉」雪見風呂</span>
              太古の地層から湧出するアルカリ性美肌温泉。松島湾を一望する展望露天やオールインクルーシブ名宿での上質な冬のリゾート滞在。
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 py-4 text-xs text-slate-500 flex items-center gap-2">
        <Link href="/" className="hover:text-cyan-700 transition">ホーム</Link>
        <span>/</span>
        <Link href="/features" className="hover:text-cyan-700 transition">特集一覧</Link>
        <span>/</span>
        <span className="text-slate-700 font-medium">宮城・松島＆塩竈 冬特集</span>
      </nav>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">

        {/* Section 1: Overview and Atmosphere */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-cyan-100 text-cyan-800 rounded-xl">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest block">AREA ATMOSPHERE & GEO OVERVIEW</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                千年の歌枕・松島湾の雪化粧と、奥州一ノ宮が放つ新春の神気
              </h2>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              京都の天橋立、広島の宮島とともに日本三景の一角を成す宮城県「松島」。大小260余りの緑の島々が穏やかな内湾に浮かぶその景観は、古くから西行法師や松尾芭蕉をはじめ、無数の文人墨客を虜にしてきました。11月から1月にかけての冬、東北特有の澄み切った冷涼な大気が松島湾を包み込み、海面は鏡のように静まり返ります。ひとたび雪が舞い散れば、松の緑と奇岩の白壁に純白の雪が降り積もり、まるで水墨画の名画の中に迷い込んだかのような神秘的な絶景が姿を現します。
            </p>
            <p>
              松島からJR仙石線でわずか10分ほどの港町・塩竈（しおがま）には、陸奥国一ノ宮「志波彦神社・鹽竈神社」が鎮座します。鹽竈神社の表参道に聳える202段の急峻な石段「表坂」を見上げれば、杉木立を抜ける冬の朝光が石段を照らし、背筋が自然と伸びる神聖さに満たされます。石段を登り切った先にある朱塗りの本殿で迎える新春の祈祷は、東北の厳しい寒さを乗り越える勇気と活力を与えてくれます。
            </p>
            <p>
              神域で心を整えた後は、松島海岸の散策へ。伊達政宗公が再建した国宝「瑞巌寺」の荘厳な本堂、松島湾に突き出た小島に佇む「五大堂」のすかし橋。そして夕刻には、太古の地層から湧き出た松島温泉の柔らかな湯に身を沈め、水平線から昇る朝日を待つ——心身の芯まで癒やされる、東北の至福の冬時間がここにあります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-cyan-50/70 border border-cyan-100">
              <h3 className="font-bold text-cyan-950 text-sm mb-1 flex items-center gap-1.5">
                <Footprints className="w-4 h-4 text-cyan-700" /> 陸奥総鎮守 鹽竈神社 表坂202段
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                千二百年の歴史を誇る奥州一ノ宮。表坂の石段を登り詰め迎える新春初詣は東北屈指の格式と威厳。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-cyan-50/70 border border-cyan-100">
              <h3 className="font-bold text-cyan-950 text-sm mb-1 flex items-center gap-1.5">
                <Building className="w-4 h-4 text-cyan-700" /> 国宝 瑞巌寺と五大堂すかし橋
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                伊達政宗公の美意識が宿る桃山美術の傑作。雪の杉並木回廊と海に浮かぶ五大堂の冬景色。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-cyan-50/70 border border-cyan-100">
              <h3 className="font-bold text-cyan-950 text-sm mb-1 flex items-center gap-1.5">
                <Waves className="w-4 h-4 text-cyan-700" /> 松島温泉「太古天泉」美肌の湯
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                地下1,500mから湧出するアルカリ性単純温泉。とろりとした湯触りで冬の冷えと乾燥肌を優しく癒やします。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Winter Gourmet Focus */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-amber-100 text-amber-900 rounded-xl">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">WINTER LOCAL GASTRONOMY</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                冬に身が太る濃厚「三陸松島かき」と奇跡の鮪「塩竈ひがしもの」、仙台牛の饗宴
              </h2>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              日本有数のリアス式海岸と豊かな森からの栄養塩が注ぎ込む三陸の海。その南端に位置する松島湾は、古くから日本を代表する真牡蠣（マガキ）の養殖場として知られています。松島の牡蠣漁は秋に始まりますが、海水温が下がり本格的な冬を迎える12月から1月、2月にかけて、牡蠣の身はグリコーゲンをたっぷりと蓄えて丸々と太り、旨味のピークに達します。
            </p>
            <p>
              松島海岸の「かき小屋」で鉄板の上に山盛りにされた殻付き牡蠣をスコップで豪快に蒸し焼きにすれば、殻が開いた瞬間に磯の香りの白い湯気が立ち込めます。熱々の殻からプリプリの身を取り出し口に運べば、濃厚なエキスのジュースが弾け、芳醇な海のミルクの甘みが口いっぱいに広がります。炭火焼きや熱々の牡蠣鍋、牡蠣フライ、牡蠣ご飯と、冬の松島はまさに牡蠣好きの天国です。
            </p>
            <p>
              さらに見逃せないのが、塩竈魚市場に水揚げされる冬の最高峰ブランド鮪「三陸塩竈ひがしもの」です。親潮と黒潮がぶつかる三陸東沖で獲れた生メバチマグロのうち、ベテラン仲買人の目利きをパスした上位わずか1%未満の極上マグロだけに許される称号。鮮やかなルビー色の赤身の力強い旨味と、きめ細やかな脂が乗った中トロのとろける口溶けは本マグロを凌ぐとも評されます。そして宮城が誇る極上「仙台牛」の霜降りステーキが加われば、これ以上ない極上の冬の美食紀行が完成します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-100">
              <h3 className="font-bold text-amber-950 text-sm mb-2 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-700" /> 松島牡蠣の冬の贅沢
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                <li>・<strong>蒸し焼き牡蠣：</strong>鉄板の蒸気で旨味を閉じ込めたプリプリの身。レモン汁でシンプルに。</li>
                <li>・<strong>仙台味噌牡蠣鍋：</strong>コク深い仙台赤味噌と牡蠣のエキスが根菜に染み渡る熱々鍋。</li>
                <li>・<strong>牡蠣釜飯：</strong>宮城米「ひとめぼれ」に牡蠣の出汁が染み込んだ至福の炊き込みご飯。</li>
              </ul>
            </div>
            <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-100">
              <h3 className="font-bold text-amber-950 text-sm mb-2 flex items-center gap-1.5">
                <Wine className="w-4 h-4 text-amber-700" /> 塩竈ひがしもの＆仙台牛の調和
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                <li>・<strong>三陸塩竈ひがしもの握り：</strong>ねっとりとした極上中トロと赤身の食べ比べ寿司。</li>
                <li>・<strong>仙台牛A5ステーキ：</strong>香ばしく焼き上げた最高級霜降りとワサビ醤油の絶品コンビ。</li>
                <li>・<strong>宮城の銘酒ペアリング：</strong>塩竈の地酒「浦霞」「一ノ蔵」のキレのある辛口とともに。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Hotel Showcase */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest block">RECOMMENDED ACCOMMODATIONS</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 font-journal-serif">
              松島雪景色＆鹽竈神社初詣・三陸牡蠣を満喫する厳選名宿5選
            </h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              楽天トラベルAPIから最新の空室状況・評価を取得。水上庭園のオールインクルーシブから福浦橋望む絶景宿、駅近温泉ホテルまで網羅。
            </p>
          </div>

          <div className="space-y-6">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-2xl shadow-sm border border-slate-200/90 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image Column */}
                  <div className="lg:col-span-5 relative min-h-[240px] lg:min-h-full bg-slate-100">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover absolute inset-0"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-cyan-900/90 text-white text-xs font-black px-2.5 py-1 rounded-md shadow">
                      第{hotel.id}選
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5 text-amber-500 font-black text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span>{hotel.rating}</span>
                          <span className="text-xs text-slate-400 font-normal">（{hotel.reviews}件のクチコミ）</span>
                        </div>
                        <div className="text-xs font-bold text-cyan-900 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-100">
                          参考最安料金: {hotel.price}
                        </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 font-journal-serif">
                        {hotel.name}
                      </h3>

                      <p className="text-xs text-slate-500 flex items-center gap-1 mb-3">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        <span>{hotel.access}</span>
                      </p>

                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed mb-4">
                        {hotel.story}
                      </p>

                      <div className="space-y-2 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs">
                        <div className="text-slate-700">
                          <strong className="text-cyan-950 font-bold">客室の寛ぎ：</strong> {hotel.roomTip}
                        </div>
                        <div className="text-slate-700">
                          <strong className="text-cyan-950 font-bold">美食のポイント：</strong> {hotel.gourmetTip}
                        </div>
                      </div>
                    </div>

                    <div>
                      <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4 text-xs text-slate-600">
                        {hotel.highlights.map((hl, hIdx) => (
                          <li key={hIdx} className="bg-cyan-50/40 p-2 rounded-lg border border-cyan-100/60 flex items-start gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-700 flex-shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs text-slate-400">楽天トラベル公式プラン詳細</span>
                        <a 
                          href={hotel.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-cyan-900 hover:bg-cyan-800 text-white font-bold text-xs rounded-xl shadow transition"
                        >
                          <span>宿泊プラン・空室を確認</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Model Itinerary */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block">SUGGESTED ITINERARY</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                11・12・1月を満喫する「鹽竈神社初詣と松島雪景色・三陸かき」1泊2日黄金コース
              </h2>
            </div>
          </div>

          <div className="space-y-6 text-xs md:text-sm">
            {/* Day 1 */}
            <div className="border-l-2 border-cyan-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-cyan-600 text-white px-2 py-0.5 rounded text-xs">1日目</span>
                仙台駅から本塩釜へ、鹽竈神社新春初詣と塩竈魚市場ランチ、松島温泉へ
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>10:00 仙台駅よりJR仙石線にて「本塩釜駅」へ到着</strong><br />
                電車で約30分。駅前からタクシーまたは徒歩で鹽竈神社表参道へ向かう。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>10:30 陸奥国一ノ宮「志波彦神社・鹽竈神社」新春初詣</strong><br />
                表坂202段の石段を登り、澄み渡る空気の中で新年の開運と安全を祈願。国重文の丹塗り社殿と塩竈港の遠景を眺望。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>12:30 塩竈港周辺で極上「三陸塩竈ひがしもの」鮪ランチ</strong><br />
                日本有数の寿司激戦区・塩竈の名店で、冬が旬の「ひがしもの」マグロ握りや海鮮丼に舌鼓。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>15:30 松島温泉の名宿にチェックイン</strong><br />
                松島湾を見渡す展望露天風呂で冷えた身体を温める。夕食には三陸松島かきや仙台牛、三陸寒魚会席を満喫。
              </p>
            </div>

            {/* Day 2 */}
            <div className="border-l-2 border-emerald-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-xs">2日目</span>
                松島湾冬の日の出、国宝瑞巌寺参拝と松島遊覧船クルーズ
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>07:00 部屋や露天風呂から松島湾の神々しい日の出を鑑賞</strong><br />
                島々の合間から昇る冬の朝日に照らされ、黄金色に輝く海面と雪の小島を目に焼き付ける。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>09:30 国宝「瑞巌寺」と「五大堂」参拝</strong><br />
                雪の杉並木回廊を歩き瑞巌寺本堂へ。すかし橋を渡って五大堂へ参拝し、冬晴れの松島湾をバックに記念撮影。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>11:30 松島海岸「かき小屋」で熱々の焼き牡蠣ランチ</strong><br />
                鉄板で豪快に蒸し焼きにした大粒の松島牡蠣をハフハフと頬張る冬の醍醐味。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>14:00 松島海岸駅より仙石線に乗車、仙台駅経由で帰路へ</strong><br />
                日本三景の美しき冬景色と冬の味覚の余韻に浸りながら旅を締めくくる。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-purple-100 text-purple-900 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-800 uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                宮城・松島＆塩竈 冬の旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div key={idx} className="border border-slate-100 rounded-xl p-4 md:p-5 bg-slate-50/50">
                <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2 flex items-start gap-2">
                  <span className="text-cyan-600 font-black">Q.</span>
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
                あわせて読みたい！東北＆日本三景の厳選「冬の初詣＆絶景・美食特集」
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
            <Link 
              href="/winter-yamagata-shonai-hagurosan-sakata-kandarajiru-yunohama-onsen-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/30 transition block space-y-1"
            >
              <span className="font-bold text-cyan-950 block">【山形】羽黒山国宝五重塔雪景色と酒田山居倉庫・寒鱈汁名宿</span>
              <span className="text-slate-500 text-xs">出羽三山の老杉回廊と国宝五重塔の神秘、冬名物「寒鱈どんがら汁」と湯野浜・あつみ温泉。</span>
            </Link>

            <Link 
              href="/winter-kyoto-tango-amanohashidate-ine-funaya-taizagani-kanburi-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/30 transition block space-y-1"
            >
              <span className="font-bold text-cyan-950 block">【京都】天橋立幻雪飛龍観と伊根の舟屋・幻の間人ガニ名宿</span>
              <span className="text-slate-500 text-xs">日本三景天橋立の冬景色と伊根の舟屋雪化粧、元伊勢籠神社初詣と幻の緑タグ間人ガニ。</span>
            </Link>

            <Link 
              href="/winter-iwate-sanriku-miyako-jodogahama-hatsumode-donguri-oyster-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/30 transition block space-y-1"
            >
              <span className="font-bold text-cyan-950 block">【岩手】三陸宮古・浄土ヶ浜冬景色と三陸毛ガニ・名湯名宿</span>
              <span className="text-slate-500 text-xs">白緑の巨岩と白雪のコントラスト、三陸の濃厚な毛ガニと焼き牡蠣・アワビの贅。</span>
            </Link>

            <Link 
              href="/winter-gunma-kiryu-houtokuji-hatsumode-himokawa-udon-joshugyu-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/30 transition block space-y-1"
            >
              <span className="font-bold text-cyan-950 block">【群馬】宝徳寺冬の床もみじ初詣と熱々ひもかわうどん名宿</span>
              <span className="text-slate-500 text-xs">漆床に映える雪景色の新春特別祈願、幅広ひもかわうどんと上州牛すき焼きの温もり。</span>
            </Link>
          </div>
        </section>

        {/* Internal Link CTA */}
        <section className="bg-gradient-to-r from-cyan-950 to-slate-900 text-white rounded-2xl p-8 text-center space-y-4">
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
              className="px-6 py-3 bg-cyan-800 hover:bg-cyan-700 text-white font-black text-xs md:text-sm rounded-xl border border-cyan-600 transition"
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
