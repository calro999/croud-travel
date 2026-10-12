import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Anchor, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月高知：冬が旬の「宿毛寒ブリ！名宿5選',
  description: '冬の澄み切った大気と水平線が織りなす奇跡の光景を巡る11〜1月の高知西南・宿毛＆四万十特集。冬の宿毛湾を真っ赤に染め上げる蜃気楼の絶景「だる。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '宿毛 だるま夕日, 宿毛 寒ブリ 宿, 四万十川 冬 観光, 宿毛リゾート 椰子の湯, 宿毛 本マグロ, 四万十牛 宿, 沈下橋 ドライブ, 高知 冬 旅行, 四万十市 ホテル',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kochi-sukumo-daruma-sunset-shimanto-stay/"
  },
  openGraph: {
    title: '11・12・1月高知：冬が旬の「宿毛寒ブリ！名宿5選',
    description: '冬の澄み切った大気と水平線が織りなす奇跡の光景を巡る11〜1月の高知西南・宿毛＆四万十特集。冬の宿毛湾を真っ赤に染め上げる蜃気楼の絶景「だる。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-kochi-sukumo-daruma-sunset-shimanto-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の高知・宿毛湾だるま夕日と四万十川の絶景'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月高知：宿毛湾の奇跡「だるま夕日」と四万十川の冬旅！冬が旬の「宿毛寒ブリ・本マグロ・四万十牛」と太平洋一望のリゾート温泉名宿5選",
    description: "冬の澄み切った大気と水平線が織りなす奇跡の光景を巡る11〜1月の高知西南・宿毛＆四万十特集。冬の宿毛湾を真っ赤に染め上げる蜃気楼の絶景「だるま夕日」や、静寂に包まれる日本最後の清流「四万十川」の沈下橋。豊後水道の荒波が育む脂の乗った「宿毛寒ブリ」、養殖本マグロ、幻の「四万十牛」すき焼き。太平洋の絶景パノラマを望む温泉リゾートなど厳選名宿5選を徹底ガイドします。",
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function KochiSukumoShimantoWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "【11・12・1月高知】宿毛湾の奇跡「だるま夕日」と四万十川の冬旅！冬が旬の「宿毛寒ブリ・本マグロ・四万十牛」と太平洋一望のリゾート温泉名宿5選",
        "description": "冬の澄み切った大気と水平線が織りなす奇跡の光景を巡る11〜1月の高知西南・宿毛＆四万十特集。冬の宿毛湾を真っ赤に染め上げる蜃気楼の絶景「だるま夕日」や、静寂に包まれる日本最後の清流「四万十川」の沈下橋。豊後水道の荒波が育む脂の乗った「宿毛寒ブリ」、養殖本マグロ、幻の「四万十牛」すき焼き。太平洋の絶景パノラマを望む温泉リゾートなど厳選名宿5選を徹底ガイドします。",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80",
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
          "@id": "https://croud-travel.pages.dev/winter-kochi-sukumo-daruma-sunset-shimanto-stay"
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
            "name": "高知・宿毛だるま夕日＆四万十川・寒ブリ名宿",
            "item": "https://croud-travel.pages.dev/winter-kochi-sukumo-daruma-sunset-shimanto-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "冬の宿毛湾の奇跡「だるま夕日」とは？見頃の時期や時間帯・鑑賞スポットは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「だるま夕日（だるま太陽）」とは、夕日が水平線に沈む直前、大気と海水温の大きな温度差によって下層の大気層で光が屈折し、海面からもうひとつの太陽がせり上がってダルマのようにくびれた二重の形に見える蜃気楼現象の一種です。日本の夕陽百選にも選ばれた宿毛湾は全国屈指の出現地として知られ、見頃は11月中旬から2月上旬にかけて。澄み切った晴天で、冷え込みが強く風の穏やかな日の日没時（17時前後）に発生確率が高まります。宿毛湾の大島・咸陽島（かんようとう）公園や道の駅すくもサニーサイドパーク、高台の「椰子の湯」露天風呂などが絶好の撮影・鑑賞スポットです。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の「宿毛寒ブリ」と「宿毛産本マグロ」が特に絶品とされる理由は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "宿毛湾は、暖流である黒潮と瀬戸内海から流れ込む豊後水道の荒波が激しくぶつかり合う日本有数の豊かな漁場です。潮流が非常に速いため、回遊する魚は身が引き締まり、冬の冷たい水温によって脂の乗りが最高潮に達します。冬の宿毛寒ブリは、マグロのトロにも匹敵する上品で甘い脂を蓄えており、刺身やしゃぶしゃぶで味わうと口の中でとろけます。また、宿毛湾の清浄な深海で丹精込めて育てられる養殖本マグロ（クロマグロ）は、全国の高級料亭や寿司店から高い評価を受ける極上品で、赤身の濃厚な旨味と大トロの芳醇な甘みが特徴です。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の「四万十川」観光の魅力と沈下橋巡りのポイントは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「日本最後の清流」と称される四万十川は、夏のアクティビティで有名ですが、冬は観光客が落ち着き、川のせせらぎと鳥の声だけが響く静寂に包まれます。冬期は川の水位が安定して透明度が格段に増し、川底の小石までくっきりと見える神秘的なエメラルドグリーンの水面を楽しめます。川の増水時に水面下に沈むよう欄干を設けていない「沈下橋」は、最下流の「佐田沈下橋（今成橋）」や映画の舞台にもなった「勝間沈下橋」などが代表的。冬の澄んだ青空と周囲の山々、青い清流が織りなす素朴で美しい日本の原風景をのんびりとドライブしながら巡ることができます。"
            }
          },
          {
            "@type": "Question",
            "name": "高知西南（宿毛・四万十）への冬のアクセスと道路状況・気候は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "高知西南地域は黒潮の影響を受けるため、四国の中でも極めて温暖な太平洋側気候です。平野部や海岸沿いでは冬でも氷点下になることはほとんどなく、雪が積もる心配も通常はありません。高知龍馬空港または高知市内からは、高知自動車道および国道56号線を経由して車で約2時間〜2時間30分。高規格道路の延伸が進んでおり快適にドライブできます。ただし、朝晩の山間部や日没後の海岸沿いでは冷たい風が吹き抜けるため、防風性のあるジャケットやコートを用意しておくと安心です。"
            }
          },
          {
            "@type": "Question",
            "name": "宿毛湾だるま夕日と四万十川を巡る冬の1泊2日おすすめモデルコースは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "【1日目】高知市内または高知空港を出発 → 高知道を西へ進み窪川で名物仁井田米豚丼のランチ → 四万十市中村へ移動し「佐田沈下橋」で冬の清流美を鑑賞 → 国道56号を西進して宿毛市へ（車約40分） → 16:30頃に宿毛湾の咸陽島公園または「椰子の湯」露天風呂で奇跡の「だるま夕日」を待機・鑑賞 → 絶景露天風呂の温泉リゾートにチェックイン → 夕食に「極上宿毛寒ブリしゃぶしゃぶ＆宿毛産本マグロ・四万十牛会席。」を堪能。【2日目】穏やかな宿毛湾の朝景を眺めながら朝食 → 四万十川河口から勝間沈下橋・岩間沈下橋へドライブ → 四万十の物産館でお土産購入（青のり、四万十栗菓子、土佐の地酒） → 黒潮町の海岸線ドライブを楽しんで帰路へ。"
            }
          }
        ]
      }
    ]
  };

  const hotelsList = [
            {
              id: 1,
              name: "宿毛リゾート椰子の湯（旧：国民宿舎椰子）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/153227/153227.jpg",
              rating: 4.45,
              reviews: 406,
              price: "¥14,520〜",
              access: "宿毛駅よりお車にて約７分",
              special: "【四国八十八景選出】宿毛市大島の絶景を臨む全室オーシャンビューの宿。四国初・棚田状露天風呂を完備！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153227%2F153227.html",
              story: "宿毛湾を見下ろす大島半島の高台に位置し、大パノラマのオーシャンビューと「日本の夕陽百選」に選ばれた宿毛湾の絶景を心ゆくまで堪能できる極上の温泉リゾート「宿毛リゾート椰子の湯（旧：国民宿舎椰子）。」。宿の最大の自慢は、太平洋に向かって棚田状にせり出すように造られた絶景露天風呂です。11月中旬から1月にかけての冬期には、海水温と外気温の寒暖差によって生まれる光の屈折現象「だるま夕日」が露天風呂の正面に沈みゆく奇跡的な瞬間に巡り合えることも。黄金色から深紅へと刻一刻と表情を変える夕焼け空と、水平線が織りなす大自然のドラマは息を呑むほどの美しさです。露天風呂にはアルカリ性の天然温泉が満たされており、トロリとした湯触りが冷えや旅の疲れを優しく解きほぐします。夕食は、豊後水道と太平洋の黒潮がぶつかり合う宿毛湾で水揚げされた新鮮な海の幸が主役。冬に身が締まり極上の脂を蓄えた「宿毛寒ブリ」のお造りやしゃぶしゃぶ、地元で養殖される高級「宿毛産本マグロ」の握り、さらに高知県産の黒毛和牛陶板焼きなど、土佐南西郷の豊かな恵みを贅沢に味わい尽くせます。",
              roomTip: "オーシャンビュー展望和洋室。大きなピクチャーウィンドウから宿毛湾の穏やかな島々と茜色の夕日をプライベート空間で満喫できます。",
              gourmetTip: "「冬の宿毛湾会席＆寒ブリしゃぶしゃぶ」。脂の乗った寒ブリをサッと出汁にくぐらせて自家製ポン酢でいただく贅沢鍋と本マグロ三昧。",
              highlights: [
                "宿毛湾を見下ろす棚田状の絶景露天風呂・正面に沈むだるま夕日の奇跡",
                "宿毛湾直送の活寒ブリしゃぶしゃぶ＆極上本マグロ・高知牛陶板焼き",
                "日本の夕陽百選・全室オーシャンビュー展望バルコニー付き"
              ]
            },
            {
              id: 2,
              name: "ホテルアバン宿毛",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/17785/17785.jpg",
              rating: 4.24,
              reviews: 1256,
              price: "¥3,500〜",
              access: "土佐くろしお鉄道『宿毛駅』より徒歩１２分。国道３２１号線沿、国道５６号線との交差点から西へ１５０ｍ。",
              special: "■□★全館Wi-Fi接続無料★□■ビジネスや巡拝、また『大月・足摺・四万十川』への観光の拠点に最適♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17785%2F17785.html",
              story: "宿毛市の中心街に位置し、観光やビジネス、四国西南エリアの周遊ドライブの拠点として抜群の機能性を誇る「ホテルアバン宿毛」。清潔感あふれる館内と温かいホスピタリティが旅人を心地よく迎えます。広々とした客室にはシモンズ製ベッドを導入し、加湿空気清浄機や無料高速Wi-Fiを完備しており、冬のドライブ旅行でもぐっすりと快眠できます。宿毛湾のだるま夕日鑑賞スポットである咸陽島（かんようとう）公園や大島へも車でスムーズにアクセス可能。ホテル周辺には宿毛港直送の新鮮な魚介を提供する居酒屋や郷土料理店が多数点在しており、冬の名物である寒ブリやキビナゴ、カツオの藁焼きタタキなどを地元の銘酒とともに気軽に楽しむことができます。翌朝は和洋取り揃えたバランスの良い朝食でエネルギーを補給できます。",
              roomTip: "デラックスシングル・ツイン。ゆったりとしたベッドサイズと静かな客室設計で、長距離ドライブの疲れをしっかりリフレッシュ。",
              gourmetTip: "「朝食和洋バイキング」。地元宿毛のお米や高知名物のお惣菜、温かいお味噌汁が並び、朝からしっかり元気がチャージできます。",
              highlights: [
                "宿毛市街中心部の快適ホテル・シモンズベッド完備＆咸陽島公園至近",
                "地元宿毛米と高知名物お惣菜の朝食バイキング・周辺に地魚居酒屋多数",
                "だるま夕日撮影の拠点に最適・ビジネスから観光まで安心"
              ]
            },
            {
              id: 3,
              name: "新ロイヤルホテル四万十",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9419/9419.jpg",
              rating: 4.12,
              reviews: 1320,
              price: "¥6,800〜",
              access: "高知市内より車で約2時間/JR(特急)にて1時間40分、土佐くろしお鉄道『中村駅』下車、お車にて約5分",
              special: "中村の繁華街まで徒歩約１分★周囲は飲食店多数の好立地！大浴場温泉有♪（時間帯で男女入替有）",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9419%2F9419.html",
              story: "四万十川の河口近く、土佐の小京都として栄えた中村の中心街に佇む本格的シティリゾートホテル「新ロイヤルホテル四万十」。四万十川観光や宿毛湾ドライブの結節点として最高の立地を誇ります。館内にはサウナを備えた開放的な大浴場があり、四万十川の清流の恵みを感じながら手足を伸ばして冬の冷えをしっかりと癒やすことができます。レストランでは、四万十川が育む伝統の川の幸と、黒潮がもたらす海の幸を融合させた極上の会席料理を提供。冬の四万十名物である濃厚な出汁が出る「天然ツガニ（モクズガニ）汁」や、四万十川流域の澄んだ水と自然で育てられた幻の黒毛和牛「四万十牛」のすき焼き、そして豪快なカツオのタタキなど、土佐の冬の美食が旅人の舌を唸らせます。",
              roomTip: "スーペリアツインルーム。落ち着いたインテリアと上質なリネンが揃い、四万十の静かな夜をゆったりと過ごせます。",
              gourmetTip: "「四万十郷土美食会席」。希少な四万十牛のすき焼き鍋と、冬の天然ツガニ汁、宿毛直送の鮮魚お造りが揃う贅沢御膳。",
              highlights: [
                "中村中心街のシティリゾート・サウナ付き大浴場完備＆四万十郷土会席",
                "幻の四万十牛すき焼き＆冬の天然ツガニ汁・宿毛直送鮮魚の贅沢膳",
                "佐田沈下橋や勝間沈下橋へのアクセス良好・四万十川観光の拠点"
              ]
            },
            {
              id: 4,
              name: "ホテルサンリバー四万十",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/165910/165910.jpg",
              rating: 4.48,
              reviews: 1696,
              price: "¥4,020〜",
              access: "中村駅より徒歩にて約8分",
              special: "２０１８年４月グランドオープン！中村駅より徒歩5分。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165910%2F165910.html",
              story: "土佐くろしお鉄道中村駅から徒歩約8分、国道56号線沿いに位置し、広大な敷地に充実した物産館「物産館サンリバー四万十」を併設する大型ホテル「ホテルサンリバー四万十」。モダンで洗練された館内には全室禁煙の快適な客室が揃い、シモンズ製ベッドと個別空調、加湿空気清浄機が完備されています。敷地内の物産館には、四万十川の青のりや栗スイーツ、宿毛湾の干物や高知の地酒など、西南高知のあらゆる特産品がずらりと並んでおり、お土産選びにも困りません。近隣には地元食材を炭火焼きで提供するレストランもあり、冬の四万十牛や宿毛の地魚をカジュアルに味わえます。広々とした無料駐車場を備えているため、レンタカーでの四国西南周遊に最適です。",
              roomTip: "ハリウッドツインルーム。広々とした動線とゆとりのあるデスクスペースを備え、ファミリーからカップルまで快適に滞在可能。",
              gourmetTip: "「和洋朝食ビュッフェ」。炊きたての地元産仁井田米に、四万十川の海苔佃煮や高知名物じゃこ天を合わせた絶品朝ごはん。",
              highlights: [
                "大型物産館併設・全室禁煙シモンズベッド＆四万十土産の宝庫",
                "仁井田米と四万十川海苔佃煮の和洋朝食・無料駐車場完備",
                "レンタカードライブに便利な好立地・清潔でモダンな客室"
              ]
            },
            {
              id: 5,
              name: "四万十の宿",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16245/16245.jpg",
              rating: 4.21,
              reviews: 740,
              price: "¥9,900〜",
              access: "高知自動車道・四万十町中央ICより、国道56号線にて中村方面へ60分／中村駅よりタクシーまたはバスにて約15分",
              special: "四万十川の隠れ温泉宿。地獲れの幸と自慢の露天風呂でおもてなし",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16245%2F16245.html",
              story: "四万十川河口の雄大な自然に抱かれ、天然温泉と本格的な癒やしの空間を提供する滞在型リゾートホテル「四万十の宿」。木と漆喰、土佐和紙など自然素材を贅沢に使った館内は、どこか懐かしく温かな安らぎに満ちています。自慢の風呂は、海水と薬草をブレンドした露天風呂や、天然の温泉大浴場。冬の澄んだ夜空に輝く満天の星を仰ぎ見ながら、潮風と木々の香りに包まれて浸かる湯浴みは、五感を優しく解き放ってくれます。夕食は、四万十の四季の恵みを現代風に昇華させた「四万十風創作料理」。炭火で香ばしく焼き上げる四万十牛や宿毛湾の鮮魚、四万十川のアオサ海苔の天ぷらなど、素材本来の旨味を最大限に引き出した美食の数々が特別な夜を彩ります。",
              roomTip: "テラス付き和洋室。自然素材の温もりに包まれた空間で、テラスからは四万十川河口の豊かな木々と冬の星空を眺められます。",
              gourmetTip: "「土佐の旬味・四万十創作会席」。幻のブランド牛「四万十牛」の炭火焼きステーキと、宿毛湾直送の寒魚カルパッチョの饗宴。",
              highlights: [
                "四万十川河口の自然派隠れ家リゾート・露天風呂と満天の星空",
                "四万十牛炭火焼きステーキ＆宿毛湾地魚・土佐和紙の温もり空間",
                "自然素材をふんだんに使用した大人の癒やし空間・カップルや一人旅にも人気"
              ]
            }
  ];

  const faqs = [
    {
      q: "冬の宿毛湾の奇跡「だるま夕日」とは？見頃の時期や時間帯・鑑賞スポットは？",
      a: "「だるま夕日（だるま太陽）」とは、夕日が水平線に沈む直前、大気と海水温の大きな温度差によって下層の大気層で光が屈折し、海面からもうひとつの太陽がせり上がってダルマのようにくびれた二重の形に見える蜃気楼現象の一種です。日本の夕陽百選にも選ばれた宿毛湾は全国屈指の出現地として知られ、見頃は11月中旬から2月上旬にかけて。澄み切った晴天で、冷え込みが強く風の穏やかな日の日没時（17時前後）に発生確率が高まります。宿毛湾の大島・咸陽島（かんようとう）公園や道の駅すくもサニーサイドパーク、高台の「椰子の湯」露天風呂などが絶好の撮影・鑑賞スポットです。"
    },
    {
      q: "冬の「宿毛寒ブリ」と「宿毛産本マグロ」が特に絶品とされる理由は？",
      a: "宿毛湾は、暖流である黒潮と瀬戸内海から流れ込む豊後水道の荒波が激しくぶつかり合う日本有数の豊かな漁場です。潮流が非常に速いため、回遊する魚は身が引き締まり、冬の冷たい水温によって脂の乗りが最高潮に達します。冬の宿毛寒ブリは、マグロのトロにも匹敵する上品で甘い脂を蓄えており、刺身やしゃぶしゃぶで味わうと口の中でとろけます。また、宿毛湾の清浄な深海で丹精込めて育てられる養殖本マグロ（クロマグロ）は、全国の高級料亭や寿司店から高い評価を受ける極上品で、赤身の濃厚な旨味と大トロの芳醇な甘みが特徴です。"
    },
    {
      q: "冬の「四万十川」観光の魅力と沈下橋巡りのポイントは？",
      a: "「日本最後の清流」と称される四万十川は、夏のアクティビティで有名ですが、冬は観光客が落ち着き、川のせせらぎと鳥の声だけが響く静寂に包まれます。冬期は川の水位が安定して透明度が格段に増し、川底の小石までくっきりと見える神秘的なエメラルドグリーンの水面を楽しめます。川の増水時に水面下に沈むよう欄干を設けていない「沈下橋」は、最下流の「佐田沈下橋（今成橋）」や映画の舞台にもなった「勝間沈下橋」などが代表的。冬の澄んだ青空と周囲の山々、青い清流が織りなす素朴で美しい日本の原風景をのんびりとドライブしながら巡ることができます。"
    },
    {
      q: "高知西南（宿毛・四万十）への冬のアクセスと道路状況・気候は？",
      a: "高知西南地域は黒潮の影響を受けるため、四国の中でも極めて温暖な太平洋側気候です。平野部や海岸沿いでは冬でも氷点下になることはほとんどなく、雪が積もる心配も通常はありません。高知龍馬空港または高知市内からは、高知自動車道および国道56号線を経由して車で約2時間〜2時間30分。高規格道路の延伸が進んでおり快適にドライブできます。ただし、朝晩の山間部や日没後の海岸沿いでは冷たい風が吹き抜けるため、防風性のあるジャケットやコートを用意しておくと安心です。"
    },
    {
      q: "宿毛湾だるま夕日と四万十川を巡る冬の1泊2日おすすめモデルコースは？",
      a: "【1日目】高知市内または高知空港を出発 → 高知道を西へ進み窪川で名物仁井田米豚丼のランチ → 四万十市中村へ移動し「佐田沈下橋」で冬の清流美を鑑賞 → 国道56号を西進して宿毛市へ（車約40分） → 16:30頃に宿毛湾の咸陽島公園または「椰子の湯」露天風呂で奇跡の「だるま夕日」を待機・鑑賞 → 絶景露天風呂の温泉リゾートにチェックイン → 夕食に「極上宿毛寒ブリしゃぶしゃぶ＆宿毛産本マグロ・四万十牛会席。」を堪能。【2日目】穏やかな宿毛湾の朝景を眺めながら朝食 → 四万十川河口から勝間沈下橋・岩間沈下橋へドライブ → 四万十の物産館でお土産購入（青のり、四万十栗菓子、土佐の地酒） → 黒潮町の海岸線ドライブを楽しんで帰路へ。"
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
            <span className="text-slate-900 font-semibold">高知・宿毛だるま夕日＆四万十川・寒ブリ名宿</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-orange-950 via-rose-950 to-indigo-950 text-white py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/30 border border-orange-300/40 text-orange-200 text-xs md:text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>11月・12月・1月冬の四国旅情特集</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 text-white drop-shadow-md">高知・宿毛＆四万十<br className="hidden sm:inline" /> 奇跡の絶景「宿毛湾だるま夕日」と四万十川の冬情趣<br className="hidden sm:inline" /> 冬が旬の「宿毛寒ブリ・本マグロ・四万十牛」＆絶景名宿5選</h1>
            <p className="max-w-3xl mx-auto text-sm md:text-lg text-orange-100 leading-relaxed drop-shadow">
              冬の冷気と海水温が生み出す奇跡の蜃気楼現象「宿毛湾のだるま夕日」。エメラルドグリーンに澄み渡る清流・四万十川の沈下橋を巡り、豊後水道の荒波が育んだ極上の「宿毛寒ブリ」と本マグロ、幻の四万十牛に舌鼓を打つ冬の土佐西南の贅沢旅。
            </p>
          </div>
        </header>

        {/* Article Summary Box */}
        <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
              <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
              <span>本特集でわかること（11・12・1月の高知西南旅行の要点）</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
              <div className="bg-orange-50/60 p-4 rounded-xl border border-orange-100">
                <span className="font-bold text-orange-900 block mb-1">① 宿毛湾のだるま夕日</span>
                日本の夕陽百選。海水温と大気の温度差によって夕日が二重にくびれる冬期限定の奇跡の蜃気楼絶景。
              </div>
              <div className="bg-rose-50/60 p-4 rounded-xl border border-rose-100">
                <span className="font-bold text-rose-900 block mb-1">② 豊後水道が育む冬の二大美味</span>
                脂が乗り切った「宿毛寒ブリ」のしゃぶしゃぶと、全国に名を馳せる高級「宿毛産本マグロ」の極上寿司。
              </div>
              <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
                <span className="font-bold text-emerald-900 block mb-1">③ 四万十川の冬の静寂美</span>
                透明度が増す冬の清流・四万十川と佐田沈下橋ドライブ。幻の黒毛和牛「四万十牛」と天然ツガニ汁。
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
          
          {/* Section 1: 宿毛湾のだるま夕日と冬の奇跡 */}
          <section className="space-y-6">
            <div className="border-l-4 border-orange-600 pl-4">
              <span className="text-orange-600 font-bold text-sm tracking-wider uppercase">Natural Miracles</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                冬の宿毛湾を真っ赤に染める奇跡の自然現象「だるま夕日」
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>
                高知県西南端に位置する宿毛市（すくもし）は、豊後水道に面した風光明媚な港町です。この宿毛湾で冬の11月中旬から2月上旬にかけて見られるのが、全国の写真愛好家や旅人を魅了してやまない奇跡の自然現象「だるま夕日（だるま太陽）」です。
              </p>
              <p>
                太陽が水平線に沈みゆく瞬間、まるで海からもう一つの太陽が立ち上がってくるかのように海面と繋がり、くびれたダルマの形を描き出します。この現象は、冬の冷たい外気と暖かい黒潮が流れ込む海水温との間に急激な温度差が生じることで、光が下層大気で屈折して発生する上位蜃気楼の一種です。空気が極めて澄み渡り、水平線上に雲がなく、風が穏やかであるといういくつもの気象条件が完璧に揃った冬の夕暮れにしか姿を現さないため、「幸運を呼ぶ夕日」としても親しまれています。古くから地元では、だるま夕日を目にすると厄が落ちて翌年に幸運が訪れると言い伝えられてきました。
              </p>
              <p>
                宿毛湾の大島半島に位置する「咸陽島（かんようとう）公園」や道の駅すくも、そして高台に佇む「宿毛リゾート椰子の湯」の展望露天風呂は、だるま夕日を正面に捉える絶好の鑑賞スポットです。咸陽島は、大潮の干潮時に海の中から一本の砂の道が現れて歩いて島へと渡ることができる「タイダル・アイランド（海の道）」としても知られ、夕日と潮の満ち引きが織りなす絶景は息を呑むほどの幻想美を誇ります。空と海が茜色から深紅、そして宵闇の藍色へとグラデーションを変えていく劇的な時間は、日常の慌ただしさを忘れさせ、自然の雄大さに包まれる感動をもたらしてくれます。
              </p>
              <p>
                日没前後のマジックアワーには、水平線の向こうに浮かぶ沖の島や鵜来島（うぐるしま）の島影が切り絵のように浮かび上がり、宿毛湾特有の多島美と夕景が融合した圧巻のパノラマが広がります。カメラ愛好家のみならず、カップルの記念日旅行や一人旅のリトリートとしても心に深く刻まれる光景です。
              </p>
            </div>
          </section>

          {/* Section 2: 宿毛寒ブリ・本マグロと四万十川の恵み */}
          <section className="space-y-6">
            <div className="border-l-4 border-rose-600 pl-4">
              <span className="text-rose-600 font-bold text-sm tracking-wider uppercase">Winter Ocean & River Gourmet</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                豊後水道が育む「宿毛寒ブリ・本マグロ」と清流の幻の和牛「四万十牛」
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>
                宿毛湾は、太平洋を流れる温暖な黒潮と、瀬戸内海から栄養塩を運ぶ豊後水道の荒波が交錯する国内屈指の天然の良港です。激しい海流にもまれて泳ぐ魚は身が引き締まり、冬の水温低下に合わせて極上の脂を身に蓄えます。
              </p>
              <p>
                その代表格が「宿毛寒ブリ」です。11月から1月にかけて最旬を迎える寒ブリは、背側から腹側まで上質な脂がたっぷりと回り、刺身で口に運ぶと上品な甘みがふわりと広がります。熱々の昆布出汁にサッとくぐらせる「寒ブリしゃぶしゃぶ」は、余分な脂が落ちて旨味が凝縮する冬ならではの贅沢な味わい方です。また、宿毛湾の穏やかな水域で育てられる「宿毛産本マグロ」は、全国の寿司職人から絶賛される最高峰の養殖マグロで、きめ細やかなサシが入った大トロや中トロの濃厚なコクが絶品です。
              </p>
              <p>
                宿毛から車で約30分東へ走れば、日本最後の清流「四万十川」が待っています。冬の四万十川は水量が落ち着き、どこまでも透き通るエメラルドグリーンの美しい水面を見せてくれます。四万十川流域の澄んだ空気と清流水で肥育される幻の黒毛和牛「四万十牛」は、年間出荷頭数が約100頭と極めて希少。柔らかな肉質と芳醇な赤身の香りが特徴で、すき焼きや陶板焼きで味わうとその深い旨味に魅了されます。
              </p>
              <p>
                さらに、冬の清流の珍味「天然ツガニ（モクズガニ）汁」も見逃せません。秋から冬にかけて身に味噌をたっぷり蓄えたツガニを殻ごと石臼ですり潰し、裏ごしして煮立てる伝統のツガニ汁は、濃厚なカニの出汁とフワフワとした蟹肉の塊が汁一面に広がり、冷えた身体を芯から温めてくれます。地元産の仁井田米（にいだまい）で炊いたご飯や、四万十特産の栗焼酎「ダバダ火振」との相性も抜群で、土佐西南ならではの贅沢な宵を堪能できます。
              </p>
            </div>
          </section>

          {/* Section 3: 厳選宿泊施設5選 */}
          <section className="space-y-8">
            <div className="border-l-4 border-orange-600 pl-4">
              <span className="text-orange-600 font-bold text-sm tracking-wider uppercase">Featured Accommodations</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                宿毛湾だるま夕日と四万十川を満喫する厳選名宿5選
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                楽天トラベルAPIより最新の空室情報・適正宿泊料金・評価スコアを取得。夕日展望露天風呂からリゾートホテルまで厳選。
              </p>
            </div>

            <div className="space-y-8">
              {hotelsList.map((hotel) => (
                <article key={hotel.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col p-5 sm:p-7 md:p-8 gap-5">
                    <div className="md:col-span-5 flex flex-col justify-between">
                      <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100 mb-4">
                        <img
                          src={hotel.img}
                          alt={hotel.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                          第{hotel.id}位 厳選名宿
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center text-amber-500">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            <span className="ml-1 font-bold text-slate-900 text-sm">{hotel.rating}</span>
                          </div>
                          <span className="text-xs text-slate-500">({hotel.reviews}件のクチコミ)</span>
                          <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                            {hotel.price}
                          </span>
                        </div>
                        <div className="text-xs text-slate-600 flex items-start gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                          <span>{hotel.access}</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 leading-snug mb-2">
                          {hotel.name}
                        </h3>
                        <p className="text-xs text-orange-800 bg-orange-50 px-3 py-1.5 rounded-lg font-medium mb-3 inline-block">
                          {hotel.special}
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mb-4">
                          {hotel.story}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                            <span className="font-bold text-slate-900 block mb-1 flex items-center gap-1">
                              <Building className="w-3.5 h-3.5 text-blue-600" />
                              客室選びのコツ
                            </span>
                            <span className="text-slate-600">{hotel.roomTip}</span>
                          </div>
                          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                            <span className="font-bold text-slate-900 block mb-1 flex items-center gap-1">
                              <Utensils className="w-3.5 h-3.5 text-amber-600" />
                              美食のおすすめ
                            </span>
                            <span className="text-slate-600">{hotel.gourmetTip}</span>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          {hotel.highlights.map((item: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs text-slate-500">※楽天トラベル公式提携プラン</span>
                        <a
                          href={hotel.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-700 hover:to-rose-700 text-white font-bold text-xs md:text-sm px-5 py-2.5 rounded-xl shadow transition-all transform hover:-translate-y-0.5"
                        >
                          <span>空室・料金プランを確認</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section 4: 1泊2日モデルコース */}
          <section className="space-y-6">
            <div className="border-l-4 border-orange-600 pl-4">
              <span className="text-orange-600 font-bold text-sm tracking-wider uppercase">Travel Itinerary</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                だるま夕日と四万十川の冬絶景を堪能する1泊2日王道モデルコース
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">1日目</span>
                  <h3 className="font-bold text-slate-900 text-base md:text-lg">四万十川の沈下橋ドライブと宿毛湾だるま夕日</h3>
                </div>
                <div className="pl-4 border-l-2 border-orange-200 space-y-3 text-sm text-slate-700">
                  <p><strong>10:30 高知空港・高知市内を出発</strong> - 高知自動車道を西進し、太平洋の海岸線をドライブ。</p>
                  <p><strong>12:30 四万十市中村に到着・ランチ</strong> - 四万十名物の天然ウナギ重やカツオの藁焼きタタキ定食を味わう。</p>
                  <p><strong>13:30 四万十川・佐田沈下橋散策</strong> - 冬の澄み渡るエメラルドグリーンの水面と青空を背景に沈下橋を歩く。</p>
                  <p><strong>15:30 宿毛市へ移動</strong> - 国道56号を経由して宿毛湾の大島半島へ（車約40分）。</p>
                  <p><strong>16:30 咸陽島公園または宿の展望風呂でだるま夕日待機</strong> - 17時前後に水平線へ沈む神秘的な「だるま夕日」を鑑賞。</p>
                  <p><strong>18:30 夕食に宿毛寒ブリしゃぶしゃぶ＆四万十牛</strong> - 豊後水道直送の脂の乗った寒ブリと四万十牛の贅沢会席に舌鼓。</p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full">2日目</span>
                  <h3 className="font-bold text-slate-900 text-base md:text-lg">宿毛湾の朝景と四万十の物産館でお土産めぐり</h3>
                </div>
                <div className="pl-4 border-l-2 border-rose-200 space-y-3 text-sm text-slate-700">
                  <p><strong>07:30 朝の海を眺める展望露天風呂</strong> - 穏やかな宿毛湾の島々と冬の澄んだ海風を感じながらの贅沢な朝湯。</p>
                  <p><strong>09:00 宿を出発・道の駅すくもサニーサイドパークへ</strong> - 宿毛湾のパノラマを望み、地元柑橘（小夏・文旦）を購入。</p>
                  <p><strong>11:00 四万十川中流・勝間沈下橋へ</strong> - 迫力ある川幅と山々の静寂を感じながら写真撮影。</p>
                  <p><strong>12:30 物産館サンリバー四万十でランチ＆お買い物</strong> - 四万十牛バーガーや青のり蕎麦を味わい、四万十川の海苔佃煮や地酒を購入。</p>
                  <p><strong>15:30 高知自動車道経由で帰路へ</strong> - 快適な四国西南周遊ドライブを締めくくり。</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: 冬のアクセス＆注意点 */}
          <section className="space-y-6">
            <div className="border-l-4 border-orange-600 pl-4">
              <span className="text-orange-600 font-bold text-sm tracking-wider uppercase">Travel Tips & Weather</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                冬の四国西南（宿毛・四万十）旅行の気候・服装と交通アクセスのアドバイス
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-slate-200 space-y-4 text-slate-700 text-sm md:text-base leading-relaxed">
              <div className="flex items-start gap-3">
                <Sunrise className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">温暖な太平洋気候と日没時の海風対策</h3>
                  <p className="text-slate-600 text-sm">
                    高知西南エリアは温暖で日中は日差しがあればポカポカと過ごしやすい気候です。ただし、だるま夕日の鑑賞スポットである海岸沿いや展望台では、日没時に急激に気温が下がり冷たい海風が吹き抜けます。撮影や鑑賞で屋外に待機する際は、防風性のあるアウターや手袋、使い捨てカイロを用意しておくと安心です。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <AlertTriangle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">道路状況とドライブのポイント</h3>
                  <p className="text-slate-600 text-sm">
                    国道56号線や主要道路は平年積雪や凍結の心配はほとんどありません。四万十川沿いの県道や沈下橋を渡る際は道幅が狭い場所がありますので、対向車に配慮した安全運転を心がけてください。沈下橋の上では歩行者に注意し、無理な車の侵入は避けましょう。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: FAQ Section */}
          <section className="space-y-6">
            <div className="border-l-4 border-orange-600 pl-4">
              <span className="text-orange-600 font-bold text-sm tracking-wider uppercase">Frequently Asked Questions</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
                高知・宿毛だるま夕日＆四万十冬旅行に関するよくある質問
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
                    <span className="text-orange-600 font-black">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed pl-6 border-l-2 border-orange-100">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: 内部リンク＆関連特集 */}
          <section className="bg-gradient-to-br from-slate-900 to-orange-950 rounded-3xl p-8 text-white space-y-6 shadow-xl">
            <div>
              <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">Related Destinations</span>
              <h2 className="text-xl md:text-2xl font-bold mt-1">
                あわせて読みたい四国・冬の厳選旅特集
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/winter-kochi-ashizuri-onsen-ocean-starry-katsuo-tosa-beef-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-amber-400 text-xs font-bold block mb-1">高知特集</span>
                <span className="font-bold text-sm block mb-1">足摺岬＆足摺温泉！冬の満天星空と鰹タタキ・土佐牛名宿</span>
                <span className="text-xs text-slate-300">四国最南端の雄大な絶景と冬の星空温泉…</span>
              </Link>
              <Link
                href="/winter-tokushima-minamiawa-yakuouji-hatsumode-iseebi-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-cyan-400 text-xs font-bold block mb-1">徳島特集</span>
                <span className="font-bold text-sm block mb-1">美波＆海陽町！薬王寺初詣と天然伊勢海老・絶景温泉名宿</span>
                <span className="text-xs text-slate-300">南阿波の冬の太平洋水平線と厄除け初詣…</span>
              </Link>
              <Link
                href="/winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-emerald-400 text-xs font-bold block mb-1">愛媛特集</span>
                <span className="font-bold text-sm block mb-1">道後温泉本館！冬の鯛めしと伊予牛・松山名湯名宿</span>
                <span className="text-xs text-slate-300">本館リニューアル完了の道後温泉と愛媛の美食…</span>
              </Link>
              <Link
                href="/winter-kagawa-zentsuji-marugame-castle-udon-stay"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-rose-400 text-xs font-bold block mb-1">香川特集</span>
                <span className="font-bold text-sm block mb-1">善通寺＆丸亀城！空海生誕地初詣としっぽくうどん名宿</span>
                <span className="text-xs text-slate-300">讃岐冬の名物うどんと歴史ある名刹巡り…</span>
              </Link>
              <Link
                href="/features"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-purple-400 text-xs font-bold block mb-1">特集一覧</span>
                <span className="font-bold text-sm block mb-1">全国の冬シーズン・年末年始旅行特集一覧</span>
                <span className="text-xs text-slate-300">全国各地の厳選温泉・初詣・冬の味覚特集を網羅…</span>
              </Link>
              <Link
                href="/"
                className="bg-white/10 hover:bg-white/20 p-4 rounded-xl border border-white/10 transition-colors block"
              >
                <span className="text-blue-400 text-xs font-bold block mb-1">トップページ</span>
                <span className="font-bold text-sm block mb-1">旅クラウド | 国内旅行・ホテル予約比較</span>
                <span className="text-xs text-slate-300">楽天トラベルAPIと連携した安心の宿泊予約ポータル…</span>
              </Link>
            </div>
          </section>

        </main>
      
      <HubRelatedPosts currentSlug="winter-kochi-sukumo-daruma-sunset-shimanto-stay" />
</div>
    </>
  );
}
