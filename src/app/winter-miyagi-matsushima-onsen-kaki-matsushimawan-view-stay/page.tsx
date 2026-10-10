import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, SunMedium, Anchor
} from 'lucide-react';

export const metadata: Metadata = {
  title: '松島温泉で過ごす冬の旅（11・12月）！日本三景日の出パノラマ展望露天！名宿5選',
  description: '11月から12月にかけて、日本三景の一つに数えられる宮城県・松島湾は、初冬の澄み切った冷涼な空気によって260余りの島々が最も鮮やかに浮かび。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '松島温泉 宿泊, 宮城 温泉 11月 12月, 松島一の坊, ホテル松島大観荘, 小松館 好風亭, 松島センチュリーホテル, ホテル絶景の館, 松島牡蠣 宿, 仙台牛 会席, 日本三景 日の出 露天風呂',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-miyagi-matsushima-onsen-kaki-matsushimawan-view-stay/"
  },
  openGraph: {
    title: '松島温泉で過ごす冬の旅（11・12月）！日本三景日の出パノラマ展望露天！名宿5選',
    description: '11月から12月にかけて、日本三景の一つに数えられる宮城県・松島湾は、初冬の澄み切った冷涼な空気によって260余りの島々が最も鮮やかに浮かび。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-miyagi-matsushima-onsen-kaki-matsushimawan-view-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の松島湾絶景と松島温泉展望露天風呂'
      }
    ]
  }
};

const faqList = [
  {
    "q": "松島の11月・12月の気温や気候、冬の観光に適した服装は？",
    "a": "宮城県松島町は太平洋沿岸に位置するため、東北地方の中では比較的雪が少なく穏やかな海洋性気候です。11月の平均最高気温は13〜15℃、最低気温は4〜6℃前後で、日中は秋晴れの爽やかな気候が広がりますが、朝夕は冷え込みます。12月に入ると最高気温は8〜10℃、最低気温は0〜2℃程度まで下がり、海沿い特有の冷たい浜風が吹き付けます。積雪で道が通行止めになることは稀ですが、散策や展望台巡り、松島湾遊覧船のデッキに出る際は、風を通さない厚手のダウンジャケット、マフラー、手袋、ニット帽などの防寒具が必須となります。"
  },
  {
    "q": "11月・12月に松島で旬を迎える「松島牡蠣」の特徴と美味しい食べ方は？",
    "a": "松島湾は周囲の豊かな森林から注ぎ込む清流によって植物プランクトンが豊富に育ち、日本有数の牡蠣の産地として名高いエリアです。10月下旬に牡蠣漁が解禁され、海水温がぐっと下がる11月から12月にかけては、身が一段と引き締まり、濃厚なグリコーゲンと磯の香りを蓄えた最盛期を迎えます。おすすめの食べ方は、炭火や鉄板で蒸し焼きにして濃厚なミルキーさを味わう「焼き牡蠣」、レモンを絞っていただく「生牡蠣」、外はサクサク中はジューシーな「カキフライ」、そして出汁の旨味がご飯一粒一粒に染み渡る「牡蠣釜飯」です。多くの温泉宿で冬限定の牡蠣尽くし会席が提供されます。"
  },
  {
    "q": "松島温泉の泉質や効能、肌への効果は？",
    "a": "松島温泉は2008年に開湯した比較的新しい天然温泉で、地下1500メートルの太古の地層から湧出しています。泉質は主に「アルカリ性単純温泉」や「低張性アルカリ性高温泉」で、pH値が8.2〜8.5と高く、無色透明でとろりとした化粧水のような肌触りが特徴です。古い角質をやさしく落として肌をなめらかに整えるクレンジング効果があることから、「絹肌の湯」「美肌の湯」として親しまれています。湯冷めしにくく身体の芯から温まるため、冬の寒さで冷えた身体の血行促進や疲労回復、筋肉痛の緩和にも優れた効果を発揮します。"
  },
  {
    "q": "仙台駅から松島へのアクセス方法と移動時間は？",
    "a": "仙台駅から松島へのアクセスは鉄道の利用が最も便利でスピーディーです。JR仙石線（せんせきせん）を利用すれば、仙台駅から「松島海岸駅」まで各駅停車で約40分、快速なら約30分で直通アクセスできます。松島海岸駅からは主要な観光スポット（五大堂、円通院、瑞巌寺、遊覧船乗り場）が徒歩5〜10分圏内に集まっており、多くの温泉旅館では無料送迎バスも運行しています。車の場合は三陸自動車道を経由して「松島海岸IC」まで仙台市内から約35分ですが、週末の昼前後は国道45号線沿いが混雑することがあるため、初冬は電車の利用が快適です。"
  },
  {
    "q": "11月・12月の松島で巡るべきおすすめ観光スポットや見どころは？",
    "a": "初冬の松島は見どころが豊富です。まず訪れたいのは伊達政宗公の菩提寺であり国宝に指定されている「瑞巌寺（ずいがんじ）」。荘厳な本堂と杉並木の参道は冬の澄んだ大気の中で神聖な静寂を漂わせます。隣接する「円通院」は11月中旬まで紅葉のライトアップで賑わい、12月には苔庭と枯山水の静謐な風情が楽しめます。また、海に突き出た「五大堂」の透かし橋を渡って眺める松島湾の絶景や、朱塗りの「福浦橋」を渡って島全体が県立自然公園になっている福浦島を巡る散策路も冬の爽快な散歩に最適です。"
  }
];

export default function MiyagiMatsushimaWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-miyagi-matsushima-onsen-kaki-matsushimawan-view-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-miyagi-matsushima-onsen-kaki-matsushimawan-view-stay"
        },
        "headline": "【11・12月宮城・松島温泉の初冬松島湾絶景と解禁・極上松島牡蠣】日本三景日の出パノラマ展望露天＆仙台牛会席の宿5選",
        "description": "11月から12月にかけて、日本三景の一つに数えられる宮城県・松島湾は、初冬の澄み切った冷涼な空気によって260余りの島々が最も鮮やかに浮かび上がる絶景シーズンを迎えます。この時期の松島を象徴するのが、秋から冬にかけて水揚げが本格解禁される名物「松島牡蠣（かき）」。豊かな三陸の山々から流れ込むミネラルをたっぷり吸収した牡蠣は、ぷりぷりと大粒で甘みと濃厚なコクが凝縮しています。さらに宮城が誇る最高峰ブランド「仙台牛」や三陸直送の海の幸、地下深層から湧き出る「絹肌の湯」こと松島温泉が旅人を迎えます。太平洋の水平線から昇る神々しい朝焼けを客室や展望露天風呂から独占する、初冬の松島おすすめ名旅館・ホテル5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "T09:00:00+09:00",
        "dateModified": "T09:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "Croud Travel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "author": {
          "@type": "Organization",
          "name": "Croud Travel 東北名湯・三陸海鮮紀行取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-miyagi-matsushima-onsen-kaki-matsushimawan-view-stay#breadcrumb",
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
            "name": "宮城・松島温泉 初冬の松島湾絶景と解禁松島牡蠣・仙台牛の宿",
            "item": "https://croud-travel.pages.dev/winter-miyagi-matsushima-onsen-kaki-matsushimawan-view-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-miyagi-matsushima-onsen-kaki-matsushimawan-view-stay#faq",
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
              name: "松島温泉　松島一の坊",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29234/29234.jpg",
              rating: 4.60,
              reviews: 1398,
              price: "¥41,800〜",
              access: "ＪＲ東北本線松島駅またはＪＲ仙石線松島海岸駅より無料送迎サービスあり／三陸道　松島海岸ＩＣより15分",
              special: "オールインクルーシブ温泉リゾート。無料でアクティビティやドリンク、スイーツをお好きなだけどうぞ。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29234%2F29234.html",
              story: "松島湾を目前に望む広大な水上庭園と、贅沢なオールインクルーシブスタイルで圧倒的な支持を集める極上リゾート「松島温泉 松島一の坊」。最上階に位置する展望露天風呂「八百八島（はちじゅうはちしま）」に身を浸せば、海と空と湯面が一体化するインフィニティの絶景が広がり、11月・12月の澄明な大気の中、朝焼けに染まる島々のシルエットが息を呑むほど美しく輝きます。食事は料理人が目の前で腕を振るうオーダービュッフェ形式で、炭火で焼き上げる仙台牛ステーキや、初冬の旬を迎えた松島牡蠣の殻焼き、三陸直送の鮮魚刺身が心ゆくまで楽しめます。ラウンジでの生演奏や厳選ワイン・地酒もすべて宿泊料金に含まれる大人のプレミアムな滞在です。",
              roomTip: "水上庭園と松島湾を望む温泉露天風呂付き客室または和モダンツイン。静寂に包まれたプライベートバルコニーで、朝の澄んだ潮風と海景を満喫。",
              gourmetTip: "「料理人がカウンターで仕立てる冬のごちそうオーダービュッフェ。」。目の前で焼き上げる旬の松島焼き牡蠣、仙台牛サーロイン、三陸産生本マグロの握り。",
              highlights: [
                "海と湯面が繋がる最上階インフィニティ露天風呂「八百八島」から望む朝焼けパノラマ",
                "宮城の厳選地酒やワインも飲み放題のオールインクルーシブ＆目の前で焼く仙台牛と松島牡蠣",
                "松島海岸駅から無料送迎＆広大な水上庭園を散策する大人のプレミアムリゾート"
              ]
            },
            {
              id: 2,
              name: "ホテル松島大観荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7748/7748.jpg",
              rating: 4.51,
              reviews: 3609,
              price: "¥15,180〜",
              access: "仙台駅よりJR仙石線乗車、松島海岸駅下車、ホテル無料シャトルバスで3分　　車は三陸道松島海岸ICより5分",
              special: "■料理自慢の宿が提供する選べる2種のバイキング！■日本三景松島を一望！海と緑に囲まれたリゾートホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7748%2F7748.html",
              story: "松島湾を見下ろす緑豊かな高台に佇み、雄大な松島のパノラマビューを誇る大型リゾート旅館「ホテル松島大観荘」。高台ならではの視座から望む260余島の眺望は壮観の一言で、初冬の早朝には水平線から昇る太陽が湾内の海面を黄金色に染め上げる瞬間を展望露天風呂から目撃できます。館内には海を望む大浴場「潮騒の湯」のほか、和食・フレンチ・中国料理の各専門レストランが揃い、冬の味覚プランでは松島産牡蠣の土手鍋や焼き牡蠣、仙台牛の陶板焼きが豪華に振る舞われます。広々としたラウンジやエステも充実し、三世代ファミリーからカップルまで快適に過ごせます。",
              roomTip: "海側に面したパノラマツインまたは和室。窓いっぱいに広がる松島湾の島々を見晴らし、刻一刻と表情を変える空と海の移ろいを堪能。",
              gourmetTip: "「三陸冬の味覚・松島牡蠣と仙台牛の特選和食会席。」。ふっくらと濃厚な松島牡蠣のせいろ蒸し、仙台牛のすき焼き、金華サバの押し寿司。",
              highlights: [
                "高台ならではの壮大な松島260島見晴らし＆水平線から昇る初冬の日の出ビュー",
                "和食・フレンチ・中華の多彩な美食レストラン＆松島牡蠣土手鍋と仙台牛陶板焼き会席",
                "大型リゾートならではの充実した館内施設＆三世代家族や記念日旅行にも安心の設備"
              ]
            },
            {
              id: 3,
              name: "松島温泉　小松館　好風亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4675/4675.jpg",
              rating: 4.63,
              reviews: 1156,
              price: "¥11,000〜",
              access: "JR仙台駅より仙石線・東北本線で40分。仙石線松島海岸駅・東北本線松島駅より車で５分",
              special: "貸切露天風呂が大人気　　松島で一番海に近い宿/最高の料理といい景色と天然温泉",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4675%2F4675.html",
              story: "松島海岸の岬の突端、海に最も近い特等席に佇み、全客室から日本三景の絶景を間近に感じられる純和風料理旅館「松島温泉 小松館 好風亭」。屋上にある貸切露天風呂「潮彩の湯」や足湯からは、手が届きそうなほど間近に迫る島々と波の揺らめきを眺めながら、源泉掛け流しのやわらかな温泉をプライベートに堪能できます。夕食は宮城の旬を詰め込んだ個室料亭での炭火焼き会席。冬の炭火でパチパチと香ばしく焼き上げる大粒の松島牡蠣や三陸アワビ、霜降り仙台牛のジューシーな旨味は感動的な味わいです。きめ細やかなおもてなしが心を満たす上質な隠れ宿です。",
              roomTip: "松島湾を一望するオーシャンフロント和洋室。寄せては返す静かな波音を聞きながら、畳の温もりとシモンズ製ベッドで極上の安らぎ。",
              gourmetTip: "「名物・海鮮炭火焼き会席」。炭火の遠赤外線で旨味を閉じ込めた大粒松島牡蠣、肉汁あふれる仙台牛ヒレ肉、三陸産アナゴの白焼き。",
              highlights: [
                "海まで数メートルの岬に建つ特等席＆屋上貸切露天風呂「潮彩の湯」の贅沢なプライベート湯浴み",
                "炭火でじっくり焼き上げる大粒松島牡蠣とA5ランク仙台牛の極上海鮮炭火焼きコース",
                "全館に行き届くきめ細やかなもてなし＆静謐な波音に癒やされる料理自慢の隠れ宿"
              ]
            },
            {
              id: 4,
              name: "松島温泉　松島センチュリーホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4964/4964.jpg",
              rating: 4.44,
              reviews: 1985,
              price: "¥14,630〜",
              access: "ＪＲ仙石線松島海岸駅下車徒歩10分、ＪＲ東北本線松島駅下車徒歩15分",
              special: "日本三景松島の中心部に位置し、主な観光施設へは徒歩圏内。目の前に広がる松島湾の風景は最高の贅沢。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4964%2F4964.html",
              story: "JR松島海岸駅から徒歩約10分、国宝・瑞巌寺や五大堂へも徒歩圏の観光至便なロケーションに位置する「松島温泉 松島センチュリーホテル」。地下1500メートルから湧き出る自家源泉「絹肌の湯」は、お肌にしっとりと吸い付くような高アルカリ性の天然温泉で、冬の冷えや旅の疲れを芯から癒やしてくれます。食事は宮城の食材を熟知した職人が手がけるオープンキッチンスタジアムでのビュッフェ、または落ち着いた和食会席。11月・12月にはぷりぷりの松島産牡蠣フライや牡蠣鍋、仙台牛のローストビーフが並び、ライブ感あふれる美食体験が楽しめます。",
              roomTip: "バルコニー付きのオーシャンビュー客室。松島湾と福浦橋の赤い欄干を眼下に眺め、夜にはライトアップされた福浦橋の幻想的な夜景を鑑賞。",
              gourmetTip: "「初冬の三陸恵みビュッフェ＆和会席」。揚げたてサクサクの大粒松島カキフライ、アツアツの牡蠣土手鍋、仙台名物牛タン焼き。",
              highlights: [
                "地下1500m湧出の自家源泉「絹肌の湯」＆瑞巌寺・五大堂へも徒歩でアクセス可能な好立地",
                "ライブキッチンで揚げる熱々サクサクの大粒カキフライ＆宮城の山海の幸ビュッフェ",
                "駅徒歩圏で周辺散策に最適＆お肌がつるつるになる高アルカリ性天然温泉大浴場"
              ]
            },
            {
              id: 5,
              name: "松島温泉　ホテル絶景の館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29538/29538.jpg",
              rating: 4.51,
              reviews: 1697,
              price: "¥7,600〜",
              access: "仙石線 松島海岸駅・東北本線　松島駅　（15：00～21：00まで送迎有・予約不可）／三陸道松島ICより１０分",
              special: "お部屋から刻々変化する180°のパノラマを体験しませんか",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29538%2F29538.html",
              story: "松島湾に架かる朱塗りの「福浦橋」と小島群を真正面に望む抜群の立地を誇る老舗旅館「松島温泉 ホテル絶景の館」。その名の通り全客室から日本三景のパノラマが一望でき、檜の香りが漂う展望露天風呂からも雄大な松島湾と島々の風景を独占できます。特に11月・12月は空気が澄み、福浦島の緑と海の青、そして初冬の朝日のコントラストが絵画のような美しさです。夕食には地元松島港や三陸沖で獲れた新鮮な魚介と、冬の名物である松島牡蠣づくしの会席料理を良心的な価格で提供しており、高いコストパフォーマンスも魅力です。",
              roomTip: "海側に面した10畳以上の純和室。窓辺の広縁に座り、福浦島へと渡る朱塗りの橋と行き交う観光船をのんびり眺める贅沢な休日。",
              gourmetTip: "「冬の松島牡蠣づくし＆三陸海鮮会席」。新鮮な生牡蠣ポン酢、香ばしい焼き牡蠣、出汁が染み渡る牡蠣釜飯、三陸鮮魚の盛り合わせ。",
              highlights: [
                "全室オーシャンビュー＆朱塗りの福浦橋と松島湾の小島群を正面に望む抜群のロケーション",
                "地元松島港直送の新鮮魚介と生牡蠣・焼き牡蠣・牡蠣釜飯を網羅した高コスパ会席",
                "福浦島遊歩道への散策拠点に最適＆窓辺の広縁から行き交う遊覧船を眺める風情ある時間"
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
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
          alt="初冬の松島湾と日本三景の島々"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold">
            <Anchor className="w-4 h-4" />
            11月・12月 冬の絶景＆極上海鮮特集｜宮城・松島温泉
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">初冬の松島湾絶景と解禁・極上松島牡蠣<br className="hidden sm:inline" /> 日の出パノラマ露天＆仙台牛会席の極上宿5選</h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            澄み渡る初冬の青空に浮かぶ260余島のシルエット。11・12月に最盛期を迎える濃厚な松島牡蠣と「絹肌の湯」を心ゆくまで堪能する旅。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-amber-400" /> 11月〜12月がベストシーズン</span>
            <span className="flex items-center gap-1"><Waves className="w-4 h-4 text-amber-400" /> 太古天泉「絹肌の湯」</span>
            <span className="flex items-center gap-1"><Utensils className="w-4 h-4 text-amber-400" /> 松島牡蠣＆最高峰仙台牛</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Section 1: Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <SunMedium className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Winter Coastal Splendor</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の松島湾が魅せる澄明な美しさ｜大気が澄む11月・12月こそ訪れたい理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              日本三景の一つとして古来より多くの文人墨客を魅了してきた宮城県・松島。江戸時代に松尾芭蕉が『おくのほそ道』で「松島の月まづ心にかかりて」とその美しさを称え、伊達政宗公が愛したこの地は、11月から12月にかけて一年の中で最も大気が澄み渡る奇跡の季節を迎えます。
            </p>
            <p>
              夏場の湿った空気とは対照的に、初冬の乾燥した北風がもたらす澄明な視界は、松島湾に浮かぶ260余りの緑の松の島々と紺碧の海とのコントラストを際立たせます。特に息を呑むのが、早朝の日の出の瞬間です。水平線からゆっくりと昇る真紅の朝日が、穏やかな湾内を黄金色に染め上げ、島々の影が水面に伸びていく光景は、まさに神話の世界に迷い込んだかのような神秘的な美しさを誇ります。
            </p>
            <p>
              また、観光シーズンとしての松島は、夏の喧騒が落ち着き、ゆったりとした静寂の中で国宝・瑞巌寺や五大堂の歴史情緒を味わうことができます。冷え込んだ身体を包み込む柔らかな松島温泉のぬくもりと、初冬に解禁される豊かな海の幸が揃うこの季節こそ、大人の上質な旅にふさわしい至福の時期と言えます。
            </p>
          </div>
        </section>

        {/* Section 2: Onsen Features */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Natural Spring & Spa</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                太古の地層から湧き出る「絹肌の湯」｜松島温泉の泉質と美肌効果
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              日本三景・松島に天然温泉が誕生したのは2008年のこと。地下1500メートルの太古の地層深くに眠っていた地熱水が掘削によって湧出し、「太古天泉 松島温泉」として開湯しました。海沿いに位置しながらも塩分濃度が強すぎず、非常に肌当たりのまろやかな泉質が特徴です。
            </p>
            <p>
              泉質は主に「アルカリ性単純温泉」で、pH値は8.2〜8.5前後の弱アルカリ性。この泉質は肌表面の余分な古い角質や皮脂をやさしく落とすクレンジング作用を持っており、湯に浸かった瞬間に肌がツルツルと滑らかになる感触から「絹肌の湯」と称賛されています。
            </p>
            <p>
              湯上がり後は肌がしっとりと潤い、天然の保湿化粧水を浴びたかのような保湿感が持続します。さらに、適度に含まれるミネラル成分が血行を促進し、冬の寒風で冷え切った手足や腰を芯からじっくりと温めてくれます。波穏やかな松島湾を行き交う遊覧船やカモメを眺めながら露天風呂に身を沈めれば、日常のストレスや疲労が一気に解消されることでしょう。
            </p>
          </div>
        </section>

        {/* Section 3: Winter Gourmet */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Winter Delicacies & Wagyu</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11・12月が最盛期「松島牡蠣」と最高峰「仙台牛」の豪華競演
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              冬の宮城を旅する最大の醍醐味は、何と言っても10月下旬から水揚げが解禁される名物「松島牡蠣」です。奥羽山脈の森林からミネラルをたっぷり含んだ地下水が川となって松島湾へ注ぎ込み、良質な植物プランクトンが豊富に育つため、松島の牡蠣は小粒ながらも身がぎっしりと詰まり、濃厚でクリーミーな旨味が凝縮しています。
            </p>
            <p>
              11月から12月にかけて海水温がぐっと下がると、牡蠣は越冬のためにグリコーゲンをたっぷりと蓄え、甘みとコクが最高潮に達します。殻ごと炭火で香ばしく焼き上げる「焼き牡蠣」は、口に含んだ瞬間に磯の香りと濃厚なミルクのようなエキスが溢れ出します。さらに、出汁の効いた特製味噌で煮込む「牡蠣土手鍋」や、外側をカリッと揚げて旨味を閉じ込めた「カキフライ」、ふっくら炊き上げた「牡蠣釜飯」など、多彩な調理法でその魅力を堪能できます。
            </p>
            <p>
              そして、海の王者・牡蠣と並ぶ宮城の誇りが「仙台牛」です。全国で唯一、肉質等級が最高の「A5」「B5」のみに限定して呼称が許される超高級ブランド牛で、きめ細やかな霜降りと人肌でとろける上質な脂の甘みが特徴です。香ばしく焼き上げたサーロインステーキやすき焼きで味わえば、初冬の旅路を彩る至高の口福に包まれます。
            </p>
          </div>
        </section>

        {/* Section 3.5: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Matsushima Winter Model Course</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の松島1泊2日モデルコース｜日本三景絶景と歴史文化・美食めぐり
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              <strong>【1日目】</strong><br />
              午前中にJR仙台駅から仙石線で「松島海岸駅」へ到着。まずは徒歩5分の「五大堂」へ向かい、足元に海が見える透かし橋を渡って堂宇と松島湾の風景を拝観します。続いて伊達家の菩提寺である国宝「瑞巌寺」へ。杉並木が続く参道の清冽な空気を胸いっぱいに吸い込み、本堂の絢爛豪華な金箔障壁画や彫刻に伊達文化の粋を感じます。お昼は松島海岸通り沿いの食事処で、旬を迎えた焼き牡蠣と海鮮丼のランチ。
            </p>
            <p>
              午後は松島港から定期遊覧船に乗船し、仁王島や鐘島など奇岩が連なる松島湾を約50分かけてクルーズ。澄み渡る冬の海風を感じながら島々の造形美を間近に鑑賞します。下船後は縁結びの寺として知られる「円通院」の枯山水庭園を静かに散策。15時過ぎに松島温泉の宿へチェックインし、夕暮れに茜色へと染まる松島湾を展望露天風呂から眺めます。夕食には松島牡蠣と仙台牛の贅を尽くした会席料理に舌鼓。
            </p>
            <p>
              <strong>【2日目】</strong><br />
              日の出の時刻に合わせて早起きし、客室や露天風呂から水平線から昇る神々しい朝日を拝みます。朝食後にチェックアウトした後は、全長252メートルの朱塗りの橋「福浦橋（出会い橋）」を渡って自然豊かな福浦島をウォーキング。松島魚市場でお土産の笹かまぼこや海産物を買い求め、大満足で仙台方面へ向かいます。
            </p>
          </div>
        </section>

        {/* Section 4: 5 Selected Inns */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Featured Matsushima Onsen Ryokan & Resorts</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              松島湾の絶景と美食に癒やされる｜松島温泉の厳選宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              すべて楽天トラベルで高評価を獲得し、初冬の松島牡蠣や仙台牛、絶景展望露天風呂を誇る本物の名宿を厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-5/12 relative h-64 md:h-auto min-h-[260px] bg-slate-100 flex-shrink-0">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                    <span className="text-amber-400 font-extrabold">#{h.id}</span>
                    <span>松島の名宿</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    目安料金: {h.price}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {h.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-amber-50 text-amber-900 px-2.5 py-1 rounded-full text-xs font-semibold border border-amber-200/60">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{h.rating}</span>
                        <span className="text-slate-500 font-normal">({h.reviews}件)</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-amber-900 flex items-center gap-1.5">
                          <Landmark className="w-3.5 h-3.5 text-amber-700" />
                          客室・滞在のこだわり
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {h.roomTip}
                        </p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-sky-900 flex items-center gap-1.5">
                          <Utensils className="w-3.5 h-3.5 text-sky-700" />
                          旬の極上グルメ
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {h.gourmetTip}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                        この宿のおすすめポイント
                      </div>
                      <ul className="space-y-1.5">
                        {h.highlights.map((item, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-[11px] text-slate-500">
                      <span>交通: {h.access}</span>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-sm hover:shadow transition group flex-shrink-0"
                    >
                      <span>楽天トラベルでプランを見る</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Travel Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Seasonal Advice</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の松島旅行｜防寒対策と日の出鑑賞のポイント
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-amber-800" />
                海風を防ぐ防寒と快適なレイヤード
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                松島は太平洋側のため大雪の心配は少ないものの、海沿い特有の冷たい潮風が吹き抜けます。特に遊覧船の展望デッキや岬の展望台では体感温度がぐっと下がるため、風を遮る防風アウターやマフラー、カイロを用意しておくと安心です。室内や温泉旅館内は暖房が効いているため、脱ぎ着しやすい重ね着がおすすめです。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-amber-800" />
                冬の日の出時刻と東向き展望台の活用
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                11月・12月の松島湾の日の出は午前6時20分〜6時50分頃です。空が白み始める30分前から朝焼けのマジックアワーが始まります。宿の東向き展望露天風呂やバルコニーはもちろん、西行戻しの松公園や双観山などの高台展望台からも息を呑む絶景が望めます。早起きして朝湯に浸かりながら拝む日の出は一生の思い出になります。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                宮城・松島温泉冬旅のよくある質問（FAQ）
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-amber-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Internal Links */}
        <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Related Tohoku & Winter Gourmet Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい東北・東日本の冬名湯＆極上グルメ特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の冬の味覚、雪見風呂、絶景オーシャンビュー露天をめぐる厳選特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-oyster-seafood-gourmet"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">全国冬の味覚特集</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">冬に食べたい極上牡蠣＆海鮮グルメ温泉旅館ランキング</h3>
            </Link>
            <Link 
              href="/winter-yamagata-akayu-onsen-yonezawa-beef-wine-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">山形・赤湯温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">開湯九百年赤湯温泉と最高峰米沢牛・初冬雪見露天の宿</h3>
            </Link>
            <Link 
              href="/winter-miyagi-naruko-onsen-yukimi-sendai-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">宮城・鳴子温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">多彩な泉質めぐりと雪景色・名湯湯治の宿</h3>
            </Link>
            <Link 
              href="/winter-aomori-asamushi-onsen-mutsu-bay-maguro-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">青森・浅虫温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">陸奥湾の初冬夕景と肉厚ホタテ・津軽三味線ライブの宿</h3>
            </Link>
            <Link 
              href="/winter-iwate-hanamaki-onsen-yukimi-maesawa-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">岩手・花巻温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">初冬渓流雪見露天と前沢牛ステーキ・宮沢賢治ゆかりの名宿</h3>
            </Link>
            <Link 
              href="/winter-chiba-minamiboso-onsen-ise-ebi-oceanview-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">千葉・南房総温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">温暖避寒旅と旬の房州伊勢海老・太平洋パノラマ露天の宿</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-miyagi-matsushima-onsen-kaki-matsushimawan-view-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
