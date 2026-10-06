import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye, Theater
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月兵庫】武田尾温泉の秘湯雪見露天！名宿5選',
  description: '夢の舞台が華やぐ宝塚大劇場と、武庫川渓谷の奥深くに隠された秘湯・武田尾温泉を巡る11〜1月の冬紀行。「火の神・台所の神」として関西一円から信。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '宝塚大劇場 冬, 清荒神 初詣, 中山寺 初詣, 武田尾温泉 紅葉舘別庭あざれ, 宝塚ホテル, ホテル若水, 三田牛, 宝塚温泉, 兵庫 冬旅行, 隈研吾 温泉',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-hyogo-takarazuka-kiyoshikojin-hatsumode-takedao-onsen-sandagyu-stay'
  },
  openGraph: {
    title: '【11・12・1月兵庫】武田尾温泉の秘湯雪見露天！名宿5選',
    description: '夢の舞台が華やぐ宝塚大劇場と、武庫川渓谷の奥深くに隠された秘湯・武田尾温泉を巡る11〜1月の冬紀行。「火の神・台所の神」として関西一円から信。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-hyogo-takarazuka-kiyoshikojin-hatsumode-takedao-onsen-sandagyu-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の武庫川渓谷に佇む武田尾温泉の湯けむりと宝塚大劇場の優雅な佇まい'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月兵庫】宝塚大劇場冬公演と「清荒神清澄寺」新春初詣！武田尾温泉の秘湯雪見露天＆極上「三田牛」厳選名宿5選",
    description: "夢の舞台が華やぐ宝塚大劇場と、武庫川渓谷の奥深くに隠された秘湯・武田尾温泉を巡る11〜1月の冬紀行。「火の神・台所の神」として関西一円から信仰を集める清荒神清澄寺や聖徳太子創建の中山寺で迎える厳かな新春初詣。隈研吾氏設計の離れで味わう武田尾温泉の自家源泉ラドン露天風呂、大劇場オフィシャルホテルの気品あふれる滞在。兵庫県最高峰のブランド黒毛和牛「三田牛」のすき焼きや冬のぼたん鍋を堪能する厳選名宿5選を徹底特集。",
    images: ['https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export const dynamic = 'force-static';

export default function HyogoTakarazukaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月兵庫】宝塚大劇場冬公演と「清荒神清澄寺」新春初詣！武田尾温泉の秘湯雪見露天＆極上「三田牛」厳選名宿5選",
    "description": "夢の舞台が華やぐ宝塚大劇場と、武庫川渓谷の奥深くに隠された秘湯・武田尾温泉を巡る11〜1月の冬紀行。「火の神・台所の神」として関西一円から信仰を集める清荒神清澄寺や聖徳太子創建の中山寺で迎える厳かな新春初詣。隈研吾氏設計の離れで味わう武田尾温泉の自家源泉ラドン露天風呂、大劇場オフィシャルホテルの気品あふれる滞在。兵庫県最高峰のブランド黒毛和牛「三田牛」のすき焼きや冬のぼたん鍋を堪能する厳選名宿5選を徹底特集。",
    "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&h=630&q=80",
    "datePublished": "2026-10-06T00:00:00+09:00",
    "dateModified": "2026-10-06T00:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "旅宿クラウド 編集部",
      "url": "https://croud-travel.pages.dev"
    },
    "publisher": {
      "@type": "Organization",
      "name": "旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.pages.dev/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.pages.dev/winter-hyogo-takarazuka-kiyoshikojin-hatsumode-takedao-onsen-sandagyu-stay"
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
        "name": "兵庫・宝塚＆武田尾温泉 冬特集",
        "item": "https://croud-travel.pages.dev/winter-hyogo-takarazuka-kiyoshikojin-hatsumode-takedao-onsen-sandagyu-stay"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "冬（11・12・1月）の宝塚大劇場観劇と周辺の散策ポイントは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宝塚大劇場は宝塚歌劇団の本拠地であり、年間を通じて華麗な舞台が上演されています。11〜1月の冬期は劇場前の「花のみち」が冬の落ち着いた並木道となり、劇場内のショップやキャトルレーヴでの限定グッズ購入、宝塚ホテルの優雅なラウンジティータイムと合わせて一日中楽しめます。冬の公演チケットは非常に人気が高いため、早期の公式ファンクラブ先行や一般前売り日の確認が必須です。また、手塚治虫記念館や武庫川河川敷の冬散歩もおすすめの立ち寄りスポットです。"
        }
      },
      {
        "@type": "Question",
        "name": "「清荒神清澄寺」と「中山寺」の新春初詣の見どころ・御利益は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "清荒神清澄寺（きよしこうじんせいちょうじ）は平安初期（896年）創祀で、「火の神・台所の神（かまどの神）」として商売繁盛・家内安全・厄除けに絶大な信仰を集めます。正月三が日や1月27・28日の初荒神には数十万人の参拝客で参道商店街が賑わい、名物の明石焼きや露店グルメが並びます。一方の中山寺は聖徳太子創建の日本最初の観音霊場（西国三十三所第24番札所）で、豊臣秀吉が祈願して秀頼を授かった故事から「子授け・安産祈願」の霊場として有名です。エスカレーターが完備された近代的な境内には壮麗な青い五重塔が聳えます。"
        }
      },
      {
        "@type": "Question",
        "name": "武庫川渓谷に佇む「武田尾温泉」の泉質と冬の魅力は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "武田尾温泉（たけだおおんせん）は寛永18年（1641年）に豊臣方の落ち武者・武田尾直蔵によって発見されたと伝わる隠れ秘湯です。泉質は含弱放射能-ナトリウム・カルシウム-塩化物泉で、関西有数の高濃度ラドンを含有。微温浴でも身体の深部体温を高め、冬の冷えや関節痛を和らげます。大阪・神戸から電車でわずか約40分とは思えないV字谷の断崖絶壁にあり、冬は川面から立ち上る川霧や雪景色を露天風呂から眺める贅沢な静寂を味わえます。"
        }
      },
      {
        "@type": "Question",
        "name": "兵庫県が誇る幻の高級和牛「三田牛（さんだぎゅう）」の特徴と味わいは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "三田牛は、神戸ビーフと同じ但馬牛の血統を引く素牛を、北摂・三田の寒暖差が大きい豊かな自然の中で熟練の肥育農家が手塩にかけて育て上げたプレミアム黒毛和牛です。流通量が少なく「幻の和牛」とも称され、融点の低い上質な脂の甘みと、噛むほどに旨味が溢れる濃密な赤身が特徴です。冬は熱々のすき焼き鍋や、肉本来の香りをダイレクトに味わうステーキ、または特製出汁のしゃぶしゃぶで至高の美味しさを発揮します。"
        }
      },
      {
        "@type": "Question",
        "name": "冬の宝塚・武田尾へのアクセスと冬道運転の心配は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "宝塚市街地（宝塚駅・清荒神・中山寺）は瀬戸内気候で比較的温暖であり、平野部での積雪は極めて稀です。電車でのアクセスはJR宝塚線・阪急宝塚線で大阪（梅田）から約25〜30分、三宮からも約35分と抜群です。武田尾温泉へもJR武田尾駅下車すぐでアクセスできます。ただし、車で武田尾温泉や北摂・三田の山間部へアクセスする場合、真冬の早朝・深夜や強い寒波が到来した際には路面凍結の可能性があるため、冬用タイヤの装着が推奨されます。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "武田尾温泉　紅葉舘　別庭　あざれ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/76395/76395.jpg",
              rating: 4.44,
              reviews: 305,
              price: "¥19,000〜",
              access: "ＪＲ大阪駅より３５分　武田尾駅徒歩で５分(駅まで送迎可。当日要連絡）　車の場合　新名神宝塚北SAスマートICより約５分",
              special: "渓流沿い離れ戸建、源泉かけ流し眺望半露天風呂付、全室テラス付、食事は茶寮「心」にて",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76395%2F76395.html",
              story: "JR武田尾駅から武庫川の吊り橋を渡ってすぐ、渓谷の絶壁に佇み世界的な建築家・隈研吾氏が設計を手掛けた全室離れの隠れ宿「武田尾温泉 紅葉舘 別庭 あざれ」。全室に源泉かけ流しの半露天風呂を備え、関西随一のラドン含有量を誇る名湯が冬の疲れた心身を芯から解きほぐします。冬期は武庫川渓谷の切り立った岩肌と雪景色を湯舟から一望。夕食は神田川俊郎氏プロデュースの創作会席で、特選三田牛のサーロインや猪鍋、冬の丹波の山の幸が美しい器を彩ります。建築美と自然の静寂が融合した至高のリトリート空間です。",
              roomTip: "武庫川渓流側・半露天風呂付き離れ客室。木の温もりあふれるモダン空間で、冬の川音と鳥の声に包まれる至高のプライベートステイ。加湿器完備。",
              gourmetTip: "「特選三田牛すき焼き会席」または「丹波ぼたん鍋コース」。きめ細やかなサシが入った三田牛の甘みを出汁と卵で味わう至福の贅沢。",
              highlights: [
                "隈研吾氏設計の全室離れ宿・全室に源泉かけ流し半露天風呂とラドン名湯を完備" ,
                "武庫川渓谷の絶壁に佇む隠れ家・神田川俊郎氏プロデュースの特選三田牛会席" ,
                "JR武田尾駅徒歩すぐの非日常秘境体験・冬の雪見露天風呂と静寂の渓谷美"
              ]
            },
            {
              id: 2,
              name: "宝塚ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/172001/172001.jpg",
              rating: 4.64,
              reviews: 873,
              price: "¥6,400〜",
              access: "阪急宝塚線「宝塚駅」から徒歩約4分、JR宝塚線「宝塚駅」から徒歩約7分",
              special: "【宝塚大劇場オフィシャルホテル】街のシンボルとして地域の方に愛され続けている正統派クラシックホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172001%2F172001.html",
              story: "宝塚大劇場の西隣に移転開業し、大正時代から続く伝統の赤絨毯や華麗なシャンデリアを受け継ぐオフィシャルホテル「宝塚ホテル」。館内には歴代トップスターの舞台衣装や小道具の展示ギャラリーが設けられ、劇場を訪れた観劇ファンにとって夢の延長線上に位置する憧れの空間です。客室は優雅なクラシックデザインで統一され、女性に嬉しいアメニティも充実。冬の公演鑑賞の前後に利用すれば、特別な記念日や母娘旅が一生の思い出に昇華します。",
              roomTip: "大劇場側シアタービューデラックスツイン。窓から大劇場の瀟洒な外観や武庫川の冬景色を望む、夢と気品に満ちた客室。調度品も一級品。",
              gourmetTip: "日本料理「彩羽」の冬の特選会席、またはビュッフェ＆カフェレストラン「アンサンブル」の冬限定アフタヌーンティー。",
              highlights: [
                "宝塚大劇場オフィシャルホテル・大正浪漫漂うクラシックスタイルの夢空間" ,
                "劇場直結の至便アクセス・館内に宝塚スター衣装ギャラリーを併設" ,
                "優雅なアフタヌーンティーやバー・観劇の余韻に浸る至高のステイ"
              ]
            },
            {
              id: 3,
              name: "宝塚温泉　ホテル若水",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/24567/24567.jpg",
              rating: 4.57,
              reviews: 527,
              price: "¥12,100〜",
              access: "大阪、神戸から３０分のＪＲまたは阪急宝塚駅より徒歩約５分／中国自動車道宝塚ＩＣよりＲ１７６号経由／中山寺へ車で約15分",
              special: "【露天風呂付客室】など和モダンスイート客室／神戸牛会席／貸切風呂が人気。大阪や神戸から約30分",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F24567%2F24567.html",
              story: "宝塚駅から徒歩約5分、武庫川の清流を目の前に望み、明治開湯の歴史を誇る名門宿「宝塚温泉 ホテル若水」。最上階8階の展望大浴場「宝甲の御湯」からは、冬の澄んだ空気の中に広がる宝塚の街並みと六甲山系の稜線を一望できます。月曜・土曜限定の女性露天風呂「バラ風呂」は生花が浮かぶ優雅さで大人気。夕食には神戸ビーフや三田牛、明石鯛など兵庫五国の厳選食材をふんだんに盛り込んだ本格京風会席が提供され、お部屋食プランも充実しています。",
              roomTip: "武庫川リバービュー和洋室または露天風呂付き客室。川のせせらぎを聞きながら、落ち着きある数寄屋造りの風情に寛ぐ上質空間。",
              gourmetTip: "「神戸牛・三田牛食べ比べ会席」。兵庫県が誇る二大銘柄牛の旨味の違いを鉄板焼きやしゃぶしゃぶで堪能する贅沢な夕食膳。",
              highlights: [
                "武庫川を望む創業明治の老舗温泉宿・最上階展望露天風呂と名物バラ風呂" ,
                "部屋食プラン充実・神戸ビーフや三田牛と明石海の幸の本格京風会席" ,
                "宝塚駅徒歩5分の抜群ロケーション・武庫川のせせらぎと温かなおもてなし"
              ]
            },
            {
              id: 4,
              name: "ＡＮＡホリデイ・イン神戸三田（旧　ザ・セレクトンプレミア　神戸三田ホテル）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7598/7598.jpg",
              rating: 4.08,
              reviews: 2840,
              price: "¥4,410〜",
              access: "神戸電鉄ウッディタウン中央駅徒歩1分、JR新三田駅より車で約5分、神戸三田ICより約5分",
              special: "全室禁煙＆シモンズベッドを配した客室で寛ぎのひとときを。種類豊富な朝食バイキングが人気です♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7598%2F7598.html",
              story: "北摂・三田の豊かな緑に囲まれ、有馬温泉や宝塚・武田尾へのアクセス拠点として機能するハイクラスホテル「ＡＮＡホリデイ・イン神戸三田（旧 神戸三田ホテル）」。広々とした客室と開放的なアトリウムロビーが特徴で、ゆったりとしたリゾートライフを提供しています。館内には鉄板焼き「三田」、中国料理、ブッフェレストランが揃い、地元の名産である「三田牛」を一流シェフの技で焼き上げるステーキディナーは記念日にも最適です。",
              roomTip: "エグゼクティブツインまたはプレミアムコーナーツイン。高層階から北摂の冬の山並みや夜景をゆったり見渡す開放的な空間。",
              gourmetTip: "鉄板焼「三田」の特選三田牛ステーキディナー。目の前の鉄板でフランベされる極上肉の芳醇な香りとジューシーな肉汁を満喫。",
              highlights: [
                "北摂の自然に囲まれたハイクラスリゾート・鉄板焼きで味わう特選三田牛ステーキ" ,
                "広々とした客室とアトリウムロビー・有馬温泉や宝塚・三田のアウトレット拠点" ,
                "高品質なANAホリデイ・インブランド・コスパに優れた贅沢ディナーステイ"
              ]
            },
            {
              id: 5,
              name: "都ホテル　尼崎",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/198/198.jpg",
              rating: 4.12,
              reviews: 3116,
              price: "¥6,300〜",
              access: "梅田駅より阪神電鉄で約7分。阪神尼崎駅より徒歩約6分。",
              special: "最寄り阪神尼崎駅より梅田まで8分、甲子園球場まで７分、ユニバーサルシティまで約２０分。アクセス抜群！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F198%2F198.html",
              story: "大阪・梅田から電車で約7分、宝塚へも阪神線・JR線で直結する利便性を誇る「都ホテル 尼崎」。地上22階のランドマークホテルとして、格式高いサービスと充実のホテル設備を兼ね備えています。全室にシモンズ製ベッドを完備し、高層階からの大阪湾や六甲山系の冬の夜景が格別の美しさ。清荒神や中山寺への新春初詣、宝塚大劇場での観劇と、大阪市内のグルメ・イルミネーションを合わせた冬の関西旅の拠点として高い評価を集めています。",
              roomTip: "高層階スーペリアツイン。冬の澄んだ大気越しに広がる神戸・六甲山から大阪ベイエリアまでのワイドなパノラマ夜景。",
              gourmetTip: "日本料理「つのくに」の冬の味覚会席。瀬戸内海の旬魚のお造り、黒毛和牛の小鍋仕立て、季節の炊き込みご飯が彩る上品な和の美。",
              highlights: [
                "地上22階のランドマーク・六甲山と大阪湾の夜景を一望する洗練シティホテル" ,
                "JR・阪神線至近・清荒神や中山寺初詣と大阪・神戸観光をスマートに両立" ,
                "シモンズ製ベッド完備で快適睡眠・大人の初詣旅行やビジネスにも最適"
              ]
            }
  ];

  const faqsData = [
    {
      q: "冬（11・12・1月）の宝塚大劇場観劇と周辺の散策ポイントは？",
      a: "宝塚大劇場は宝塚歌劇団の本拠地であり、年間を通じて華麗な舞台が上演されています。11〜1月の冬期は劇場前の「花のみち」が冬の落ち着いた並木道となり、劇場内のショップやキャトルレーヴでの限定グッズ購入、宝塚ホテルの優雅なラウンジティータイムと合わせて一日中楽しめます。冬の公演チケットは非常に人気が高いため、早期の公式ファンクラブ先行や一般前売り日の確認が必須です。また、手塚治虫記念館や武庫川河川敷の冬散歩もおすすめの立ち寄りスポットです。"
    },
    {
      q: "「清荒神清澄寺」と「中山寺」の新春初詣の見どころ・御利益は？",
      a: "清荒神清澄寺（きよしこうじんせいちょうじ）は平安初期（896年）創祀で、「火の神・台所の神（かまどの神）」として商売繁盛・家内安全・厄除けに絶大な信仰を集めます。正月三が日や1月27・28日の初荒神には数十万人の参拝客で参道商店街が賑わい、名物の明石焼きや露店グルメが並びます。一方の中山寺は聖徳太子創建の日本最初の観音霊場（西国三十三所第24番札所）で、豊臣秀吉が祈願して秀頼を授かった故事から「子授け・安産祈願」の霊場として有名です。エスカレーターが完備された近代的な境内には壮麗な青い五重塔が聳えます。"
    },
    {
      q: "武庫川渓谷に佇む「武田尾温泉」の泉質と冬の魅力は？",
      a: "武田尾温泉（たけだおおんせん）は寛永18年（1641年）に豊臣方の落ち武者・武田尾直蔵によって発見されたと伝わる隠れ秘湯です。泉質は含弱放射能-ナトリウム・カルシウム-塩化物泉で、関西有数の高濃度ラドンを含有。微温浴でも身体の深部体温を高め、冬の冷えや関節痛を和らげます。大阪・神戸から電車でわずか約40分とは思えないV字谷の断崖絶壁にあり、冬は川面から立ち上る川霧や雪景色を露天風呂から眺める贅沢な静寂を味わえます。"
    },
    {
      q: "兵庫県が誇る幻の高級和牛「三田牛（さんだぎゅう）」の特徴と味わいは？",
      a: "三田牛は、神戸ビーフと同じ但馬牛の血統を引く素牛を、北摂・三田の寒暖差が大きい豊かな自然の中で熟練の肥育農家が手塩にかけて育て上げたプレミアム黒毛和牛です。流通量が少なく「幻の和牛」とも称され、融点の低い上質な脂の甘みと、噛むほどに旨味が溢れる濃密な赤身が特徴です。冬は熱々のすき焼き鍋や、肉本来の香りをダイレクトに味わうステーキ、または特製出汁のしゃぶしゃぶで至高の美味しさを発揮します。"
    },
    {
      q: "冬の宝塚・武田尾へのアクセスと冬道運転の心配は？",
      a: "宝塚市街地（宝塚駅・清荒神・中山寺）は瀬戸内気候で比較的温暖であり、平野部での積雪は極めて稀です。電車でのアクセスはJR宝塚線・阪急宝塚線で大阪（梅田）から約25〜30分、三宮からも約35分と抜群です。武田尾温泉へもJR武田尾駅下車すぐでアクセスできます。ただし、車で武田尾温泉や北摂・三田の山間部へアクセスする場合、真冬の早朝・深夜や強い寒波が到来した際には路面凍結の可能性があるため、冬用タイヤの装着が推奨されます。"
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
      <header className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-rose-950 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-rose-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Snowflake className="w-4 h-4 text-rose-300" />
            <span>関西・兵庫 阪神・北摂 冬の特別紀行（11月・12月・1月）</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 font-journal-serif">
            宝塚大劇場冬公演と「清荒神清澄寺」新春初詣！<br className="hidden md:inline" />
            武田尾温泉の秘湯雪見露天＆極上「三田牛」厳選名宿5選
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mb-6">
            大阪・梅田から電車でわずか約30分。華麗なる歌劇の殿堂・宝塚大劇場が放つ夢とロマンの光彩、そして武庫川の上流へと分け入ると広がる武田尾温泉の静謐な深山幽谷。関西屈指の厄除け信仰を誇る「清荒神清澄寺」や聖徳太子開創の「中山寺」で迎える厳かな新春初詣。隈研吾氏が設計したモダン離れで味わう自家源泉ラドン温泉の雪見露天、大劇場オフィシャルホテルの気品あふれる滞在。幻の黒毛和牛「三田牛」と冬のぼたん鍋に舌鼓を打つ極上の冬旅をお届けします。
          </p>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-slate-200">
            <span className="bg-rose-950/70 border border-rose-800/60 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Theater className="w-4 h-4 text-rose-400" /> 宝塚大劇場冬公演＆花のみちの冬情緒
            </span>
            <span className="bg-rose-950/70 border border-rose-800/60 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-rose-400" /> 清荒神清澄寺（かまどの神新春初詣・厄除開運）
            </span>
            <span className="bg-rose-950/70 border border-rose-800/60 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-rose-400" /> 武田尾温泉ラドン雪見露天＆特選三田牛会席
            </span>
          </div>
        </div>
      </header>

      {/* Summary Box */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
          <div className="flex items-center gap-2 text-rose-700 font-bold text-lg mb-4">
            <Sparkles className="w-5 h-5 text-rose-600" />
            <h2>宝塚＆武田尾温泉 冬旅のハイライト（11・12・1月）</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm leading-relaxed text-slate-600">
            <div className="border-l-2 border-rose-500 pl-4">
              <h3 className="font-bold text-slate-900 mb-1">夢の舞台・宝塚大劇場冬公演</h3>
              <p>華麗なレビューと情熱的なドラマが繰り広げられる聖地。大劇場オフィシャル「宝塚ホテル」に泊まり、夢の余韻に浸る特別な観劇旅が叶います。</p>
            </div>
            <div className="border-l-2 border-amber-500 pl-4">
              <h3 className="font-bold text-slate-900 mb-1">清荒神＆中山寺の新春初詣</h3>
              <p>台所の神様として親しまれる清荒神清澄寺の初荒神と、安産・子宝の観音霊場中山寺。参道に立ち並ぶ露店の賑わいと新春の祈願が冬を彩ります。</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-bold text-slate-900 mb-1">武田尾の隠れ秘湯と三田牛</h3>
              <p>隈研吾氏設計の離れ宿「紅葉舘 別庭 あざれ」をはじめ、武庫川渓谷のラドン温泉。幻の黒毛和牛「三田牛」や熱々のぼたん鍋で温まります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Guide Section 1 */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-10">
          <span className="text-rose-600 font-bold text-sm tracking-widest uppercase">THEATRE & SHRINE CULTURE</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1 mb-4 font-journal-serif">
            華麗なる歌劇の街と古刹が織りなす新春の祈り
          </h2>
          <div className="w-16 h-1 bg-rose-500 rounded-full mb-6" />
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base md:text-lg space-y-6">
          <p>
            兵庫県南東部、武庫川の清流沿いに広がる宝塚市。大正3年（1914年）の初公演以来、100年以上にわたり日本中の人々を魅了し続けてきた「宝塚歌劇団」の本拠地として知られる文化都市です。花組・月組・雪組・星組・宙組の5組が繰り広げる華麗なミュージカルとレビューは、オーケストラの重厚な生演奏、象徴的な大階段や銀橋、そして豪華絢爛な衣装が一体となり、観る者を日常から夢の世界へと誘います。冬になると劇場前の遊歩道「花のみち」は凛とした冬枯れの落ち着いた風情を湛え、冬公演に向かう観劇客の華やかな熱気と美しいコントラストを描き出します。観劇の拠点となる「宝塚ホテル」は、大劇場の西隣に佇む瀟洒なオフィシャルホテルで、大正浪漫の気品漂うシャンデリアやスターギャラリーが非日常の旅情を盛り上げます。
          </p>
          <p>
            そして宝塚は、古くからの名刹が息づく祈りの街でもあります。「清荒神清澄寺（きよしこうじんせいちょうじ）」は、平安初期の寛平8年（896年）に宇多天皇の勅願によって創建された名刹。火の神・台所の神である三宝荒神を祀り、「荒神さん」の愛称で関西一円から親しまれています。正月三が日から1月下旬の「初荒神」にかけては、無病息災・商売繁盛・厄除けを祈る人々で参道が埋め尽くされ、露店から立ち上る湯気と威勢のいい掛け声が冬の寒さを吹き飛ばします。境内には画聖・富岡鉄斎の作品を収蔵する鉄斎美術館や、静かな瀧の流れる龍王滝があり、信仰と芸術の深さに触れることができます。
          </p>
          <p>
            さらに隣駅に位置する「中山寺」は、聖徳太子が創建したと伝わる日本最初の観音霊場（西国三十三所第24番）。豊臣秀吉が祈願して秀頼を授かった故事から、安産祈願・子授けの霊場として全国にその名を知られています。新春には青く輝く壮麗な五重塔が冬晴れの空に映え、多くの家族連れや参拝者が新しい年の無事と実りを祈ります。境内にはエスカレーターも設置されており、三世代での新春旅行でも安心して参拝できます。
          </p>
        </div>
      </section>

      {/* Detailed Guide Section 2: Gourmet & Hot Spring */}
      <section className="bg-slate-100 py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-amber-600 font-bold text-sm tracking-widest uppercase">SECRET ONSEN & WAGYU</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1 mb-4 font-journal-serif">
              武庫川渓谷の秘湯「武田尾温泉」と幻の三田牛
            </h2>
            <div className="w-16 h-1 bg-amber-500 rounded-full mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700 leading-relaxed">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-lg mb-3">
                <Waves className="w-5 h-5 text-rose-600" />
                <h3>断崖絶壁に湧く名湯「武田尾温泉」の静寂</h3>
              </div>
              <p className="text-sm md:text-base mb-4">
                宝塚駅からJR福知山線の快速でわずか8分、山深き渓谷に忽然と現れるのが「武田尾温泉」です。江戸時代初期に発見されたと伝わる隠れ里で、武庫川の切り立った奇岩と冬の清流が織りなす大自然が広がります。かつての国鉄福知山線廃線跡のハイキングコースでも有名です。
              </p>
              <p className="text-sm md:text-base">
                泉質は関西トップクラスのラドンを含有する塩化物泉。身体の深部をじんわりと温め、免疫力を高める湯として愛されてきました。隈研吾氏設計の「紅葉舘 別庭 あざれ」では、客室の半露天風呂から冬の渓谷美を独り占めしながら、極上の雪見風呂を満喫できます。夜の静けさの中、川音だけが響く湯舟でのひとときは究極の贅沢です。
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-lg mb-3">
                <Utensils className="w-5 h-5 text-amber-600" />
                <h3>幻の最高峰黒毛和牛「三田牛」と冬の味覚</h3>
              </div>
              <p className="text-sm md:text-base mb-4">
                神戸ビーフと同じ但馬牛の血統を継ぎ、北摂・三田の豊かな山水と熟練農家の愛情で育まれる「三田牛（さんだぎゅう）」。肉質のきめ細やかさと上品な甘みのサシは、日本最高峰の肉質と称賛されています。
              </p>
              <p className="text-sm md:text-base">
                冬の会席では、熱々の特製割り下で煮込む「三田牛すき焼き」や、職人が目の前で焼き上げる鉄板焼きステーキが絶品。さらに冬の丹波・北摂の山野を駆け巡った天然猪肉を用いた「ぼたん鍋」も揃い、冬ならではの野趣あふれる美食を堪能できます。宝塚銘菓のパリッと香ばしい「炭酸せんべい」をつまむのも旅の嬉しい楽しみです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Course Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-10">
          <span className="text-rose-600 font-bold text-sm tracking-widest uppercase">WINTER ITINERARY</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1 mb-4 font-journal-serif">
            宝塚観劇＆武田尾秘湯 1泊2日 満喫モデルコース
          </h2>
          <div className="w-16 h-1 bg-rose-500 rounded-full mb-6" />
        </div>

        <div className="relative border-l-2 border-rose-200 ml-4 md:ml-6 pl-6 md:pl-8 space-y-8 text-sm md:text-base">
          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-rose-600 tracking-wider">DAY 1 / 10:30</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">宝塚駅到着＆花のみち散策・カフェランチ</h3>
            <p className="text-slate-600 mt-1">
              阪急またはJRで宝塚駅へ。冬の「花のみち」を散策し、宝塚ホテルのラウンジまたは劇場周辺のカフェで観劇前のランチやスイーツを楽しむ。キャトルレーヴで公演プログラムを購入。
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-rose-600 tracking-wider">DAY 1 / 13:00</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">宝塚大劇場冬公演 夢のステージ観劇</h3>
            <p className="text-slate-600 mt-1">
              大劇場へ入場。大階段を降りるスターの華麗な姿、煌びやかな衣装、圧倒的な歌声とオーケストラの生演奏に酔いしれる3時間の夢舞台を堪能。
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-rose-600 tracking-wider">DAY 1 / 16:30</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">武田尾温泉または宝塚温泉へチェックイン</h3>
            <p className="text-slate-600 mt-1">
              JRで武田尾温泉へ（約8分）。隈研吾氏設計「紅葉舘 別庭 あざれ」または「宝塚ホテル」「ホテル若水」へチェックイン。ラドン温泉の雪見露天風呂に浸かり、夕食には極上三田牛すき焼き会席に舌鼓。
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-rose-600 tracking-wider">DAY 2 / 09:30</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">清荒神清澄寺へ新春初詣＆参道商店街</h3>
            <p className="text-slate-600 mt-1">
              朝湯と朝食を堪能後、阪急清荒神駅へ。緩やかな坂道が続く参道商店街を歩き、清荒神清澄寺へ参拝。火の神・台所の神に厄除けと家内安全を祈り、名物の明石焼きや煎餅をつまむ。
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-rose-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-rose-600 tracking-wider">DAY 2 / 13:00</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">中山寺参拝＆宝塚銘菓・炭酸せんべい購入</h3>
            <p className="text-slate-600 mt-1">
              阪急中山観音駅の中山寺へ移動。青の五重塔を拝観。宝塚温泉名物のパリッと香ばしい「炭酸せんべい」をお土産に買い求め、心満たされて帰路へ。
            </p>
          </div>
        </div>
      </section>

      {/* Hotel Recommendation Section */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-rose-400 font-bold text-sm tracking-widest uppercase">HOTEL & RYOKAN SELECTION</span>
            <h2 className="text-2xl md:text-4xl font-black mt-2 mb-4 font-journal-serif">
              宝塚観劇・武田尾秘湯に選ばれる厳選名宿5選
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              楽天トラベルAPIから最新の空室状況・宿泊プラン・宿泊者評価を直接取得。隈研吾氏設計の絶景離れ宿から大劇場オフィシャルホテル、老舗温泉宿まで厳選しました。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 md:p-8 backdrop-blur shadow-2xl hover:border-rose-500/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Hotel Image & Basic Specs */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="relative rounded-xl overflow-hidden mb-4 aspect-[4/3] bg-slate-950">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={hotel.img} 
                          alt={hotel.name} 
                          className="w-full h-full object-cover hover:scale-105 transition duration-500" 
                        />
                        <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-rose-400 border border-rose-400/30">
                          厳選宿 #{hotel.id}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
                        <span className="flex items-center gap-1 text-amber-400 font-bold">
                          <Star className="w-4 h-4 fill-amber-400" /> {hotel.rating}
                        </span>
                        <span>クチコミ {hotel.reviews.toLocaleString()}件</span>
                        <span className="text-rose-300 font-bold">{hotel.price}</span>
                      </div>
                      <p className="text-xs text-slate-400 flex items-start gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                        <span>{hotel.access}</span>
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-700/60 hidden lg:block">
                      <a 
                        href={hotel.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold py-3 px-4 rounded-xl text-center block transition shadow-lg shadow-rose-900/30 text-sm"
                      >
                        楽天トラベルで空室・プランを見る <ExternalLink className="w-4 h-4 inline-block ml-1" />
                      </a>
                    </div>
                  </div>

                  {/* Hotel Details */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-white mb-3 font-journal-serif">
                        {hotel.name}
                      </h3>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-5">
                        {hotel.story}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-5">
                        {hotel.highlights.map((hl: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tips Boxes */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                        <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-700/50">
                          <span className="text-rose-400 font-bold block mb-1">【客室の選び方】</span>
                          <span className="text-slate-300 leading-normal">{hotel.roomTip}</span>
                        </div>
                        <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-700/50">
                          <span className="text-amber-400 font-bold block mb-1">【料理のこだわり】</span>
                          <span className="text-slate-300 leading-normal">{hotel.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 block lg:hidden">
                      <a 
                        href={hotel.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold py-3 px-4 rounded-xl text-center block transition shadow-lg shadow-rose-900/30 text-sm"
                      >
                        楽天トラベルで空室・プランを見る <ExternalLink className="w-4 h-4 inline-block ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-10 text-center">
          <span className="text-rose-600 font-bold text-sm tracking-widest uppercase">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1 mb-3 font-journal-serif">
            冬の宝塚・武田尾温泉旅行 よくある質問
          </h2>
          <div className="w-16 h-1 bg-rose-500 rounded-full mx-auto" />
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqsData.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
                <span className="bg-rose-100 text-rose-800 text-xs px-2 py-1 rounded font-black shrink-0 mt-0.5">Q</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Navigation & Related Links */}
      <section className="bg-slate-100 py-12 px-4 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-slate-500 font-bold text-xs tracking-widest uppercase">RELATED WINTER FEATURES</span>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
              あわせて読みたい冬の厳選旅行特集
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-8">
            <Link 
              href="/winter-hyogo-arima-onsen-kinsen-kobe-beef-stay"
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-rose-500 transition hover:shadow-md group block"
            >
              <div className="text-rose-600 font-bold text-xs mb-1">兵庫・有馬温泉＆六甲山</div>
              <div className="font-bold text-slate-900 group-hover:text-rose-600 transition mb-2">
                日本三古湯・有馬の金泉銀泉と六甲山1000万ドルの冬夜景・神戸牛会席
              </div>
              <p className="text-xs text-slate-500 line-clamp-2">
                宝塚から車やバスでアクセス至近の名湯・有馬温泉。赤褐色の金泉と無色透明の銀泉、最高峰神戸牛を味わう特集。
              </p>
            </Link>

            <Link 
              href="/winter-hyogo-tanba-sasayama-botannabe-castle-stay"
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-rose-500 transition hover:shadow-md group block"
            >
              <div className="text-rose-600 font-bold text-xs mb-1">兵庫・丹波篠山</div>
              <div className="font-bold text-slate-900 group-hover:text-rose-600 transition mb-2">
                丹波篠山城下町の冬散歩と元祖ぼたん鍋・冬の丹波黒豆＆丹波篠山牛
              </div>
              <p className="text-xs text-slate-500 line-clamp-2">
                武田尾から北へ足を延ばす丹波路。猪鍋発祥の地で味わう味噌仕立ての極上ぼたん鍋と歴史情緒漂う城下町。
              </p>
            </Link>

            <Link 
              href="/winter-osaka-city-sumiyoshi-taisha-hatsumode-illumination-fugu-stay"
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-rose-500 transition hover:shadow-md group block"
            >
              <div className="text-rose-600 font-bold text-xs mb-1">大阪・住吉大社＆キタ</div>
              <div className="font-bold text-slate-900 group-hover:text-rose-600 transition mb-2">
                摂津国一之宮「住吉大社」新春初詣と御堂筋イルミネーション・天然とらふぐ
              </div>
              <p className="text-xs text-slate-500 line-clamp-2">
                阪神間・大阪キタの冬景色。太鼓橋が有名な住吉大社の初詣と冬の味覚てっちり・天然ふぐを満喫する大阪紀行。
              </p>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-600">
            <Link href="/" className="hover:text-rose-600 underline">ホーム</Link>
            <span>•</span>
            <Link href="/features" className="hover:text-rose-600 underline">特集一覧</Link>
            <span>•</span>
            <Link href="/posts" className="hover:text-rose-600 underline">記事一覧カタログ</Link>
          </div>
        
      <HubRelatedPosts currentSlug="winter-hyogo-takarazuka-kiyoshikojin-hatsumode-takedao-onsen-sandagyu-stay" />
</div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-4 text-center text-xs">
        <p>© 2026 旅宿クラウド (croud-travel.pages.dev). All rights reserved.</p>
        <p className="mt-1 text-slate-500">
          ※本記事に掲載している宿泊施設情報、価格、評価、公演スケジュール等は、楽天トラベルAPIおよび公式サイトの最新データに基づいています。冬期の初詣参拝時間や劇場の休演日は変更となる場合がありますので、お出かけ前にご確認ください。
        </p>
      </footer>
    </article>
  );
}
