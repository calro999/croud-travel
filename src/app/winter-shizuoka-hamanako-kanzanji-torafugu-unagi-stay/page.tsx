import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Flame, Snowflake, Waves, ThermometerSun, ShoppingBag, Mountain, Landmark, Camera, Ship, Fish, Sun
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月静岡】冬限定「遠州灘天然とらふぐ」！名宿5選',
  description: '11月から1月、静岡県・浜名湖＆舘山寺（かんざんじ）温泉は、遠州灘の荒波が育む幻の「天然とらふぐ」と、冬眠前に脂が極限まで乗る名物「浜名湖うなぎ」。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '浜名湖 うなぎ 温泉宿, 遠州灘 天然とらふぐ 宿, 舘山寺温泉 ホテル, ウェルシーズン浜名湖, ホテル鞠水亭, 浜名湖レークサイドプラザ, THE SCENE hamanako, ホテルグリーンプラザ浜名湖, 11月 12月 1月 静岡旅行, 牡蠣カバ丼 三ヶ日みかん風呂',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-shizuoka-hamanako-kanzanji-torafugu-unagi-stay/"
  },
  openGraph: {
    title: '【11・12・1月静岡】冬限定「遠州灘天然とらふぐ」！名宿5選',
    description: '11月から1月、静岡県・浜名湖＆舘山寺（かんざんじ）温泉は、遠州灘の荒波が育む幻の「天然とらふぐ」と、冬眠前に脂が極限まで乗る名物「浜名湖うなぎ」。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-shizuoka-hamanako-kanzanji-torafugu-unagi-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の浜名湖と舘山寺温泉のレイクビュー'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月静岡】冬限定「遠州灘天然とらふぐ」＆脂の乗る冬の浜名湖うなぎ・牡蠣カバ丼・三ヶ日みかん風呂とレイクビュー名宿5選",
    description: "11月から1月、静岡県・浜名湖＆舘山寺（かんざんじ）温泉は、遠州灘の荒波が育む幻の「天然とらふぐ」と、冬眠前に脂が極限まで乗る名物「浜名湖うなぎ」、冬限定のご当地グルメ「牡蠣カバ丼」が勢揃いする年間最大の美食期を迎えます。甘い香りに包まれる名物「三ヶ日みかん風呂」や、大草山展望台から望む澄み切った青空に輝く冠雪の富士山、弁天島の鳥居に沈む茜色の夕日。東京・名古屋からのアクセスも抜群な浜名湖畔で、湖一望の絶景露天風呂と冬の贅沢グルメに酔いしれる厳選5宿を徹底ガイドします。",
    images: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function ShizuokaHamanakoKanzanjiWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【11・12・1月静岡】冬限定「遠州灘天然とらふぐ」＆脂の乗る冬の浜名湖うなぎ・牡蠣カバ丼・三ヶ日みかん風呂とレイクビュー名宿5選",
    description: "11月から1月、静岡県・浜名湖＆舘山寺（かんざんじ）温泉は、遠州灘の荒波が育む幻の「天然とらふぐ」と、冬眠前に脂が極限まで乗る名物「浜名湖うなぎ」、冬限定のご当地グルメ「牡蠣カバ丼」が勢揃いする年間最大の美食期を迎えます。甘い香りに包まれる名物「三ヶ日みかん風呂」や、大草山展望台から望む澄み切った青空に輝く冠雪の富士山、弁天島の鳥居に沈む茜色の夕日。東京・名古屋からのアクセスも抜群な浜名湖畔で、湖一望の絶景露天風呂と冬の贅沢グルメに酔いしれる厳選5宿を徹底ガイドします。",
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    datePublished: '',
    dateModified: '',
    author: {
      '@type': 'Organization',
      name: 'クラドトラベル編集部',
      url: 'https://croud-travel.pages.dev'
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.pages.dev/winter-shizuoka-hamanako-kanzanji-torafugu-unagi-stay'
    }
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://croud-travel.pages.dev'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '冬の特集一覧',
        item: 'https://croud-travel.pages.dev/features'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '浜名湖・舘山寺温泉のとらふぐ＆うなぎ名宿',
        item: 'https://croud-travel.pages.dev/winter-shizuoka-hamanako-kanzanji-torafugu-unagi-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "「遠州灘天然とらふぐ」とはどんなフグですか？いつが美味しい旬ですか？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "遠州灘（静岡県浜名湖沖〜愛知県境）は、日本でも屈指の天然トラフグの好漁場として知られています。舞阪（まいさか）漁港で水揚げされる「遠州灘天然とらふぐ」は、黒潮が流れ込む外海の荒波にもまれて育つため、筋肉が極限まで引き締まり、天然ものならではの力強い歯ごたえと芳醇な旨みを持ちます。旬は毎年10月解禁から翌年2月頃までで、特に水温が低下して脂が乗る11月〜1月が最高潮。舘山寺温泉や舞阪の老舗料亭・温泉宿では、薄造りのてっさ、ふっくらした唐揚げ、出汁が絶品のてっちり、香ばしいひれ酒など、下関にも引けを取らない最高級の天然とらふぐをリーズナブルに味わうことができます。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の「浜名湖うなぎ」や「牡蠣カバ丼」が美味しいと言われる理由は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "うなぎは一般的に夏のイメージがありますが、本来最も脂が乗って美味しくなるのは、水温が下がり冬眠に備えて栄養を蓄える「晩秋から冬（寒うなぎ）」です。浜名湖はうなぎ養殖発祥の地として100年以上の歴史を持ち、ミネラル豊富な地下水と温暖な気候で育つうなぎは、冬になると皮が柔らかく身はふっくらトロトロの食感になります。また、11月〜2月限定の浜名湖新名物「牡蠣カバ丼」は、浜名湖特産の大粒牡蠣をボイルした後にうなぎの蒲焼きタレで香ばしく焼き上げ、玉ねぎや遠州海苔、三ヶ日みかんの皮を添えた絶品ご当地丼で、冬の浜名湖観光の必食グルメです。"
        }
      },
      {
        '@type': 'Question',
        name: "「三ヶ日みかん風呂」とは何ですか？どの旅館で体験できますか？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "「三ヶ日みかん風呂」は、全国的なみかんのブランド産地である浜名湖北岸・三ヶ日町の特産「三ヶ日みかん」を丸ごと湯船に浮かべた冬の風物詩です。柑橘類の皮に含まれるリモネンなどの精油成分が血行を促進し、体の芯までポカポカに温まり湯冷めしにくくなるほか、ビタミンCによる美肌効果やリラックス効果が期待できます。「三ヶ日温泉 浜名湖レークサイドプラザ」など奥浜名湖の温泉宿で11月〜1月の冬期に実施されており、爽やかな柑橘の甘い香りに包まれながら入浴できる特別な癒やし体験です。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の浜名湖周辺（舘山寺・弁天島など）のおすすめ観光や富士山のビュースポットは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "冬は空気が非常に澄み渡るため、浜名湖周辺から冠雪した美しい「富士山」を眺める絶好のシーズンです。特におすすめは、日本唯一の湖上を渡る「かんざんじロープウェイ」で登る「大草山（おおくさやま）展望台」。360度の大パノラマで浜名湖と遠くにそびえる白銀の富士山を一望できます。また、弁天島海浜公園では、冬の夕暮れ時に湖中の赤い大鳥居の中に夕日が沈む幻想的な「鳥居の夕日」が有名です。さらに「はままつフラワーパーク」の冬のフラワーイルミネーションも必見です。"
        }
      },
      {
        '@type': 'Question',
        name: "東京や大阪・名古屋から浜名湖・舘山寺温泉へのアクセスや冬の気候は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "東海道新幹線を利用する場合、東京駅から浜松駅まで「ひかり」で約1時間15分、名古屋駅からは約30分、新大阪駅からは約1時間15分と非常に好アクセスです。浜松駅北口バスターミナルからは遠鉄バスで舘山寺温泉まで約45分。車の場合は、東名高速道路「舘山寺スマートIC（ETC専用）」が直結しており、ICから各宿まで約5分で到着できます。冬の浜名湖は雪はほとんど降りませんが、「遠州のからっ風」と呼ばれる強くて冷たい北西の季節風が吹くため、体感温度は低くなります。風を通さない防風ダウンジャケットやマフラーをご用意ください。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "ホテル　ウェルシーズン浜名湖",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/3112/3112.jpg",
              rating: 4.54,
              reviews: 3557,
              price: "¥11,550〜",
              access: "■東名高速道路『舘山寺スマートIC』より約5分 ■JR浜松駅より路線バスで約45分",
              special: "【ウェルカムベビーのお宿】お子様大歓迎のホテルです！／華咲の湯＆遊園地入場無料（休業日除く）",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F3112%2F3112.html",
              story: "浜名湖かんざんじ温泉の中心に位置し、県下最大級の天然温泉温浴施設「華咲の湯」を併設する人気リゾート「ホテル ウェルシーズン浜名湖」。広大な敷地内には庭園露天風呂や檜風呂など多彩な湯船が揃い、茶褐色の自家源泉が冬の冷えた体を芯から温めてくれます。夕食は楽天トラベルでも屈指の人気を誇るバイキングレストラン「ル・シエール」。シェフが目の前で焼き上げる熱々の浜名湖うなぎ蒲焼きや、静岡そだち牛ステーキ、冬獲れの新鮮魚介、三ヶ日みかんを使った特製スイーツなど、豪華絢爛な料理が並び、家族連れからカップルまで至福の笑顔が広がります。",
              roomTip: "スカイコート和モダンツイン。清潔感あふれる明るい客室で、大きな窓から遊園地パルパルや舘山寺の街並みを一望できます。",
              gourmetTip: "「実演バイキング・冬の味覚フェア」。炭火の香ばしいうなぎ蒲焼きと冬の揚げたて天ぷら、静岡の地場野菜を心ゆくまで堪能できます。",
              highlights: [
                "県下最大級の温泉華咲の湯を無料利用＆炭火うなぎ蒲焼きの実演ディナービュッフェ",
                "オープンキッチンで焼き上げる香ばしいうなぎ・静岡そだち牛ステーキと旬スイーツ",
                "浜名湖パルパル直結＆ファミリーやカップルに圧倒的人気のハイグレード宿"
              ]
            },
            {
              id: 2,
              name: "浜名湖かんざんじ温泉　ホテル鞠水亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2092/2092.jpg",
              rating: 4.37,
              reviews: 842,
              price: "¥8,250〜",
              access: "ＪＲ浜松駅より路線バスで４５分（舘山寺温泉行き）　東名高速、舘山寺スマートＩＣより約５分",
              special: "浜名湖内浦湾と大草山を一望できる湖畔の宿。石造りと御殿風檜造りの2種類の展望露天風呂が自慢です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2092%2F2092.html",
              story: "浜名湖の入江に面して建ち、全客室および最上階の展望露天風呂から静かな湖面を一望できる純和風の美食旅館「浜名湖かんざんじ温泉 ホテル鞠水亭（きくすいてい）。」。屋上の露天風呂「星の湯」「月の湯」からは、昼は穏やかな湖の輝き、夕暮れには湖面を茜色に染めるマジックアワー、夜には満天の星が楽しめます。料理は浜名湖ならではの美味を極めた会席。冬は舞阪漁港で揚がる遠州灘天然とらふぐのてっさやちり鍋、香ばしく焼き上げた名物浜名湖うなぎの蒲焼き、冬限定の浜名湖牡蠣料理など、湖畔の情緒とともに贅沢な味覚を味わえます。",
              roomTip: "レイクビュー特別室。角部屋ならではのワイドな二面採光で、刻々と表情を変える浜名湖のパノラマビューを独占できます。",
              gourmetTip: "「冬の遠州灘とらふぐ＆浜名湖うなぎ会席」。プリプリのふぐ刺し、熱々のふぐ鍋に、香ばしいうなぎ蒲焼きが付く冬の極上会席です。",
              highlights: [
                "全室レイクビュー＆屋上展望露天風呂から望む浜名湖夕景マジックアワー",
                "冬の遠州灘天然とらふぐ会席・プリプリてっさと熱々ちり鍋・浜名湖うなぎ重",
                "純和風の落ち着いたもてなしと静けさ・大人の記念日やご夫婦旅行に最適"
              ]
            },
            {
              id: 3,
              name: "三ヶ日温泉　浜名湖レークサイドプラザ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9198/9198.jpg",
              rating: 3.75,
              reviews: 1118,
              price: "¥9,900〜",
              access: "★東名高速『三ヶ日IC』より10分★無料大駐車場完備！／JR東海道線「新所原駅」→天浜線「奥浜名湖駅」徒歩5分",
              special: "浜名湖の絶景×レイクビュー★露天風呂・サウナ・プール完備で三世代で楽しめる総合リゾート",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9198%2F9198.html",
              story: "奥浜名湖の静寂な湖畔に広がる約3万坪の広大なリゾート「三ヶ日温泉 浜名湖レークサイドプラザ」。全国的に有名な「三ヶ日みかん」の産地に位置し、冬期には大浴場露天風呂に本物の三ヶ日みかんを浮かべた名物「三ヶ日みかん風呂」を開催。柑橘の爽やかな香りとビタミンC、アルカリ性単純温泉の相乗効果で、お肌がつるつるになると大評判です。夕食は奥浜名湖の絶景を望むレストランでのバイキングまたは和食会席。三ヶ日牛のローストビーフや浜名湖のうなぎご飯、冬の近海鮮魚など、遠州の豊かなテロワールを五感で堪能できます。",
              roomTip: "レイクサイドツインまたは和洋室。バルコニー付きのゆったりした間取りで、穏やかな奥浜名湖の湖面とパームツリーの南国風情を楽しめます。",
              gourmetTip: "「冬の三ヶ日みかん風呂＆三ヶ日牛ディナー」。名物みかん風呂で温まった後、ジューシーな三ヶ日牛ステーキとうなぎ料理を満喫。",
              highlights: [
                "冬限定の本物三ヶ日みかんが浮かぶ名物みかん風呂＆3万坪の湖畔リゾート",
                "奥浜名湖の味覚三ヶ日牛ローストビーフとうなぎ釜飯・遠州灘の新鮮魚介",
                "三ヶ日みかん狩りや天竜浜名湖鉄道散策・広大な敷地でゆったり滞在"
              ]
            },
            {
              id: 4,
              name: "ＴＨＥ　ＳＣＥＮＥ　ｈａｍａｎａｋｏ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/182098/182098.jpg",
              rating: 4.70,
              reviews: 347,
              price: "¥13,750〜",
              access: "東都筑駅から徒歩8分",
              special: "自然に囲まれ歴史的にも興味深い浜松・浜名湖の目の前に位置する愛犬と泊まれるリゾートホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182098%2F182098.html",
              story: "浜名湖の湖畔に寄り添うように佇み、愛犬とも一緒に泊まれる上質なラグジュアリーリゾートホテルとして高い評価を受ける「THE SCENE hamanako」。館内全体が洗練されたモダンデザインで統一され、すべての客室から遮るもののない浜名湖のパノラマレイクビューが広がります。自家源泉の天然温泉大浴場や露天風呂からも湖を望むことができ、冬の澄んだ湖面と夕陽のグラデーションに心癒やされます。夕食は静岡の厳選食材とイタリアン・フレンチの技法を融合させた極上の創作コース。地元の新鮮な魚介や遠州のブランド肉をスタイリッシュに楽しめます。",
              roomTip: "オーシャンビューデラックスルーム。大きなガラス窓の向こうに浜名湖の絶景が広がり、上質なインテリアの中で大人の休息を約束します。",
              gourmetTip: "「遠州のテロワールを味わう冬の創作ディナー。」。旬の魚介や遠州夢咲牛をシェフの卓越した感性で仕立てた芸術的なコースです。",
              highlights: [
                "全室パノラマレイクビューの洗練モダン空間＆地元食材の極上創作イタリアン",
                "遠州夢咲牛や浜名湖の魚介を彩り豊かに仕立てた冬の創作ガストロノミー",
                "愛犬同伴可能なハイエンドリゾート・ドッグランやプライベート空間が充実"
              ]
            },
            {
              id: 5,
              name: "ホテルグリーンプラザ浜名湖",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/11013/11013.jpg",
              rating: 3.96,
              reviews: 2396,
              price: "¥9,100〜",
              access: "車）東名高速三ヶ日ＩＣより約７分　電車）ＪＲ浜松駅より遠鉄バス三ケ日行きで約70分、佐久米西バス停下車徒歩5分",
              special: "目前で焼き上げる「鰻の蒲焼」食べ放題。◆ゆったりと心浸りつくす”湖畔の絶景リゾート”全室浜名湖ビュー",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F11013%2F11013.html",
              story: "奥浜名湖の風光明媚な高台に建ち、ホテルのどこからでも浜名湖のパノラマ絶景を見下ろす「ホテルグリーンプラザ浜名湖」。自家源泉の露天風呂からは、青く広がる湖と天竜浜名湖鉄道のレトロな列車が走る情緒ある風景を一望できます。夕食は約50種以上が並ぶ豪華和洋バイキング。冬は浜名湖名物のうなぎ蒲焼きをはじめ、冬の味覚フェアとして獲れたてのズワイガニ食べ放題や握り寿司、熱々の陶板焼きなどが登場。コストパフォーマンスの高さと絶景露天風呂の開放感が多くのリピーターを惹きつけています。",
              roomTip: "湖側和洋室。窓一面に広がる奥浜名湖の雄大なパノラマビューを眺めながら、畳スペースとベッドで快適に寛げます。",
              gourmetTip: "「冬のバイキング・カニ＆うなぎ食べ放題フェア。」。香ばしいうなぎと冬のカニ、地魚のお造りを好きなだけ楽しめる満足度の高いプランです。",
              highlights: [
                "奥浜名湖を見下ろす絶景露天風呂＆冬のカニ・うなぎ満喫バイキングディナー",
                "冬の味覚フェアで味わうズワイガニ・うなぎ蒲焼き・握り寿司の食べ放題",
                "天浜線のレトロ列車を眺める湖畔ステイ・抜群のコスパと開放的な露天風呂"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "「遠州灘天然とらふぐ」とはどんなフグですか？いつが美味しい旬ですか？",
    "a": "遠州灘（静岡県浜名湖沖〜愛知県境）は、日本でも屈指の天然トラフグの好漁場として知られています。舞阪（まいさか）漁港で水揚げされる「遠州灘天然とらふぐ」は、黒潮が流れ込む外海の荒波にもまれて育つため、筋肉が極限まで引き締まり、天然ものならではの力強い歯ごたえと芳醇な旨みを持ちます。旬は毎年10月解禁から翌年2月頃までで、特に水温が低下して脂が乗る11月〜1月が最高潮。舘山寺温泉や舞阪の老舗料亭・温泉宿では、薄造りのてっさ、ふっくらした唐揚げ、出汁が絶品のてっちり、香ばしいひれ酒など、下関にも引けを取らない最高級の天然とらふぐをリーズナブルに味わうことができます。"
  },
  {
    "q": "冬の「浜名湖うなぎ」や「牡蠣カバ丼」が美味しいと言われる理由は？",
    "a": "うなぎは一般的に夏のイメージがありますが、本来最も脂が乗って美味しくなるのは、水温が下がり冬眠に備えて栄養を蓄える「晩秋から冬（寒うなぎ）」です。浜名湖はうなぎ養殖発祥の地として100年以上の歴史を持ち、ミネラル豊富な地下水と温暖な気候で育つうなぎは、冬になると皮が柔らかく身はふっくらトロトロの食感になります。また、11月〜2月限定の浜名湖新名物「牡蠣カバ丼」は、浜名湖特産の大粒牡蠣をボイルした後にうなぎの蒲焼きタレで香ばしく焼き上げ、玉ねぎや遠州海苔、三ヶ日みかんの皮を添えた絶品ご当地丼で、冬の浜名湖観光の必食グルメです。"
  },
  {
    "q": "「三ヶ日みかん風呂」とは何ですか？どの旅館で体験できますか？",
    "a": "「三ヶ日みかん風呂」は、全国的なみかんのブランド産地である浜名湖北岸・三ヶ日町の特産「三ヶ日みかん」を丸ごと湯船に浮かべた冬の風物詩です。柑橘類の皮に含まれるリモネンなどの精油成分が血行を促進し、体の芯までポカポカに温まり湯冷めしにくくなるほか、ビタミンCによる美肌効果やリラックス効果が期待できます。「三ヶ日温泉 浜名湖レークサイドプラザ」など奥浜名湖の温泉宿で11月〜1月の冬期に実施されており、爽やかな柑橘の甘い香りに包まれながら入浴できる特別な癒やし体験です。"
  },
  {
    "q": "冬の浜名湖周辺（舘山寺・弁天島など）のおすすめ観光や富士山のビュースポットは？",
    "a": "冬は空気が非常に澄み渡るため、浜名湖周辺から冠雪した美しい「富士山」を眺める絶好のシーズンです。特におすすめは、日本唯一の湖上を渡る「かんざんじロープウェイ」で登る「大草山（おおくさやま）展望台」。360度の大パノラマで浜名湖と遠くにそびえる白銀の富士山を一望できます。また、弁天島海浜公園では、冬の夕暮れ時に湖中の赤い大鳥居の中に夕日が沈む幻想的な「鳥居の夕日」が有名です。さらに「はままつフラワーパーク」の冬のフラワーイルミネーションも必見です。"
  },
  {
    "q": "東京や大阪・名古屋から浜名湖・舘山寺温泉へのアクセスや冬の気候は？",
    "a": "東海道新幹線を利用する場合、東京駅から浜松駅まで「ひかり」で約1時間15分、名古屋駅からは約30分、新大阪駅からは約1時間15分と非常に好アクセスです。浜松駅北口バスターミナルからは遠鉄バスで舘山寺温泉まで約45分。車の場合は、東名高速道路「舘山寺スマートIC（ETC専用）」が直結しており、ICから各宿まで約5分で到着できます。冬の浜名湖は雪はほとんど降りませんが、「遠州のからっ風」と呼ばれる強くて冷たい北西の季節風が吹くため、体感温度は低くなります。風を通さない防風ダウンジャケットやマフラーをご用意ください。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-100 selection:text-amber-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の浜名湖と舘山寺温泉の風景" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-amber-950/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-amber-800/80 backdrop-blur-md text-amber-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-amber-400/30">
            <Sun className="w-4 h-4 text-amber-300" />
            11月・12月・1月 冬の遠州灘・天然とらふぐ＆浜名湖うなぎ美食特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月静岡】冬限定「遠州灘天然とらふぐ」＆脂の乗る冬の浜名湖うなぎ・牡蠣カバ丼・三ヶ日みかん風呂とレイクビュー名宿5選
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            遠州灘の荒波が育む幻の「天然とらふぐ」と、冬眠前に脂が極限まで乗る本場「浜名湖うなぎ」、冬限定名物「牡蠣カバ丼」。甘い香りに癒やされる名物「三ヶ日みかん風呂」と、大草山から望む冠雪富士山の絶景パノラマ。東京・名古屋から抜群のアクセスを誇る浜名湖畔の極上温泉宿を厳選ガイドします。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 旬の時期：11月中旬〜1月下旬</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> エリア：静岡県浜松市（舘山寺温泉・奥浜名湖・三ヶ日・弁天島）</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-amber-400" /> 旬グルメ：遠州灘天然とらふぐ・冬うなぎ蒲焼き・牡蠣カバ丼・三ヶ日牛</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Introduction</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              黒潮の恵み「遠州灘天然とらふぐ」と、冬にこそ脂が最高潮に達する「浜名湖うなぎ」の真髄
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              空気が澄み渡り、遠くに白銀の富士山がくっきりと姿を現す11月から1月、静岡県・浜名湖沿岸は一年で最も贅沢な美味が集う黄金期を迎えます。あまり知られていませんが、実は浜名湖の南に広がる遠州灘は、下関など全国へ出荷される天然トラフグの屈指の好漁場。舞阪漁港で水揚げされる「遠州灘天然とらふぐ」は、黒潮が洗う激しい海流にもまれて育つため、身の弾力が極めて強く、噛みしめるほどに上品で濃厚な甘みが広がります。
            </p>
            <p>
              透き通るような天然てっさの歯ごたえ、香ばしい唐揚げ、熱々の出汁が胃袋に染みるてっちり、そしてヒレ酒の芳香。さらに、浜名湖が誇る代名詞「うなぎ」も、実は水温が下がる冬こそが最も脂が乗る「寒うなぎ」の季節。ふっくらとした肉厚の身に秘伝の甘辛タレが絡み、炭火で香ばしく焼き上げられた蒲焼きは、夏のうなぎを遥かに凌ぐ濃厚な旨みを誇ります。
            </p>
            <p>
              また冬限定の地元名物「牡蠣カバ丼」や、柑橘の甘酸っぱい香りに包まれる名物「三ヶ日みかん風呂」、浜名湖かんざんじロープウェイから望むパノラマビュー、そして夕暮れの弁天島鳥居の絶景など、見どころも満載。新幹線でも車でも首都圏・中京・関西からアクセスしやすい浜名湖で、心身を解きほぐす至極の冬旅をお届けします。
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-amber-50/50 rounded-2xl p-4 border border-amber-100 space-y-2">
              <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
                <Fish className="w-4 h-4 text-amber-700" />
                遠州灘「天然とらふぐ」の弾力
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                舞阪港直送の天然トラフグ。引き締まったてっさ、ふっくら唐揚げ、極上出汁のてっちりを堪能。
              </p>
            </div>
            <div className="bg-amber-50/50 rounded-2xl p-4 border border-amber-100 space-y-2">
              <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
                <Flame className="w-4 h-4 text-amber-700" />
                脂の乗る冬の「浜名湖うなぎ」
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                寒さに備えて脂を蓄える冬のうなぎ。香ばしい炭火蒲焼きや冬限定の「牡蠣カバ丼」が絶品。
              </p>
            </div>
            <div className="bg-amber-50/50 rounded-2xl p-4 border border-amber-100 space-y-2">
              <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
                <Sun className="w-4 h-4 text-amber-700" />
                名物「三ヶ日みかん風呂」と名湯
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                本物の三ヶ日みかんを浮かべた香り豊かな湯舟。レイクビュー露天から冬の浜名湖と富士山を望む。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4 text-amber-800" />
              楽天トラベル公式連携・厳選宿
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 mt-2">
              浜名湖・舘山寺・三ヶ日の冬絶景と美食を満喫する名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              ※表示料金は楽天トラベルAPIより取得した参考最低価格です。時期や宿泊プランにより変動します。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row"
              >
                {/* Hotel Image */}
                <div className="md:w-2/5 relative min-h-[260px] md:min-h-full bg-stone-100 overflow-hidden">
                  <img 
                    src={hotel.img} 
                    alt={hotel.name}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    厳選宿 {hotel.id}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-stone-900 text-xs font-bold px-3 py-1 rounded-lg shadow-xs flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    {hotel.rating} <span className="text-stone-400 font-normal">({hotel.reviews}件)</span>
                  </div>
                </div>

                {/* Hotel Details */}
                <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-700" />
                        {hotel.access}
                      </span>
                      <span className="text-amber-800 font-extrabold text-base sm:text-lg">
                        {hotel.price} <span className="text-xs font-normal text-stone-500">（税込目安）</span>
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-2xl font-bold text-stone-900 leading-snug">
                      {hotel.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {hotel.story}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 bg-stone-50 rounded-2xl p-4 border border-stone-100">
                      {hotel.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Room & Gourmet tips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="bg-amber-50/40 p-3 rounded-xl border border-amber-100/60">
                        <span className="font-bold text-amber-950 block mb-1">【客室の選び方】</span>
                        <p className="text-stone-600 leading-relaxed">{hotel.roomTip}</p>
                      </div>
                      <div className="bg-orange-50/40 p-3 rounded-xl border border-orange-100/60">
                        <span className="font-bold text-orange-950 block mb-1">【冬の味覚おすすめ】</span>
                        <p className="text-stone-600 leading-relaxed">{hotel.gourmetTip}</p>
                      </div>
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="pt-2">
                    <a 
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-700 to-amber-950 hover:from-amber-800 hover:to-black text-white font-bold py-3.5 px-6 rounded-2xl shadow-sm hover:shadow transition text-sm tracking-wide"
                    >
                      <span>楽天トラベルで空室・冬限定プランを見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2-Day Winter Model Course Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Route</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の浜名湖・舘山寺・三ヶ日 2泊3日美食モデルコース
            </h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-stone-700">
            {/* Day 1 */}
            <div className="relative pl-6 border-l-2 border-amber-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-amber-700" />
              <h3 className="font-bold text-stone-900 text-base">
                1日目：新幹線で浜松駅へ・老舗うなぎ重と舘山寺温泉レイクビュー宿
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                東京または名古屋から東海道新幹線で浜松駅へ到着。レンタカーまたはバスで浜名湖へ向かい、まずは名店でふっくら香ばしい「冬の浜名湖うなぎ重」を昼食に堪能。午後は「かんざんじロープウェイ」で大草山展望台へ登り、澄んだ冬空に輝く富士山と浜名湖のパノラマビューを鑑賞。夕暮れには舘山寺温泉の宿へチェックイン。最上階展望露天風呂から茜色に染まる浜名湖を眺め、夜は遠州灘天然とらふぐ会席に舌鼓を打ちます。
              </p>
            </div>

            {/* Day 2 */}
            <div className="relative pl-6 border-l-2 border-amber-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-amber-700" />
              <h3 className="font-bold text-stone-900 text-base">
                2日目：三ヶ日みかん狩り＆名物みかん風呂と弁天島赤鳥居の夕日
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                朝の温泉を満喫後、奥浜名湖・三ヶ日へドライブ。冬の風物詩である三ヶ日みかん狩り体験で甘いみかんをもぎたてで味わいます。昼食は浜名湖名物「牡蠣カバ丼」に舌鼓。午後は奥浜名湖の温泉リゾートへ。本物の三ヶ日みかんがプカプカ浮かぶ名物「三ヶ日みかん風呂」でリラックス。夕暮れには弁天島海浜公園を訪れ、湖中に立つシンボルの赤鳥居の中に夕日が沈む奇跡のマジックアワーを撮影します。
              </p>
            </div>

            {/* Day 3 */}
            <div className="relative pl-6 border-l-2 border-amber-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-amber-700" />
              <h3 className="font-bold text-stone-900 text-base">
                3日目：はままつフラワーパーク・うなぎパイファクトリーとお土産調達
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                朝食後、「はままつフラワーパーク」の大温室で冬咲きチューリップや熱帯植物を鑑賞。続いて浜松名菓の製造現場を見学できる「うなぎパイファクトリー」へ立ち寄り、焼きたてうなぎパイの香りを体感。浜松市街へ戻り、ランチはパリッと香ばしい名物「浜松餃子」を食べ比べ。浜松駅前で三ヶ日みかんバウムクーヘンやうなぎ白焼きを購入し、新幹線で帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Local Winter Practical Tips */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-amber-300 font-bold text-xs sm:text-sm tracking-wider uppercase">
            <ThermometerSun className="w-4 h-4 text-amber-300" />
            現地リアルアドバイス
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">
            冬の浜名湖を快適にドライブするための気候・風対策
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-200 leading-relaxed pt-2">
            <div className="space-y-2 bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
              <span className="font-bold text-white block">【気候と服装：遠州の「からっ風」に注意】</span>
              <p>
                浜名湖周辺は温暖で雪が降ることは極めて稀ですが、冬は北西から「遠州のからっ風」と呼ばれる強い季節風が吹き荒れます。湖岸や弁天島、展望台では体感温度がぐっと下がるため、防風性能の高いウィンドブレーカーやダウンジャケット、ストール、ニット帽を準備してください。
              </p>
            </div>
            <div className="space-y-2 bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
              <span className="font-bold text-white block">【車でのアクセス：舘山寺スマートICが便利】</span>
              <p>
                東名高速道路の「舘山寺スマートIC（ETC車専用）」を利用すれば、高速を下りてから舘山寺温泉の各宿までわずか約5分で到着できます。降雪・路面凍結の心配は通常ありませんが、雨天後の早朝の橋梁部などでは念のためスピードを控えめにした安全運転を心がけましょう。
              </p>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-amber-800" />
              浜名湖・浜松の冬名物＆厳選おみやげ手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              名産みかんと湖の恵み・伝統が息づくご当地逸品
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-700" />
                三ヶ日みかんと「治一郎」のしっとりバウムクーヘン
              </h3>
              <p>
                糖度が高くコクのある酸味で知られる「三ヶ日みかん（青島みかん）」。冬に旬を迎える箱詰めみかんはもちろん、みかん果汁を練り込んだゼリーやジュースも大人気。また、浜松発祥の全国的洋菓子ブランド「治一郎（じいちろう）」の極上バウムクーヘンは、飲み物が要らないほどしっとりとした口溶けで手土産の定番です。
              </p>
            </div>
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-700" />
                浜名湖産うなぎの白焼き・春華堂「うなぎパイ」
              </h3>
              <p>
                「夜のお菓子」として全国に名を馳せる春華堂の「うなぎパイ」。フレッシュバターとうなぎエキス、ガーリックを絶妙に調合したサクサクパイは誰からも愛される銘菓。さらに、浜名湖養魚漁協や老舗鰻屋の真空パック入り「うなぎ白焼き」は、ワサビ醤油でいただくと冬の脂の甘みが際立つ最高級のギフトになります。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-amber-800" />
              浜名湖と遠州灘ディープダイブ解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ浜名湖は汽水湖となり、遠州灘は天然トラフグの一大産地となったのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-stone-100 shadow-2xs">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Landmark className="w-4 h-4 text-amber-700" />
                明応の大地震がつなげた海と湖：今切口（いまぎれぐち）の誕生
              </h3>
              <p>
                もともと淡水湖だった浜名湖が海とつながったのは、室町時代の明応7年（1498年）の大地震と大津波によるものです。海と湖を隔てていた砂州が決壊して「今切口」が開き、太平洋の海水が流入。これにより淡水と海水が混ざり合う日本屈指の「汽水湖」へと変貌しました。海水魚と淡水魚、プランクトンが豊富に混在する類まれな生態系が生まれ、うなぎ養殖や海苔養殖、牡蠣養殖が発展する土台となったのです。
              </p>
            </div>

            <div className="space-y-2 bg-white p-5 rounded-2xl border border-stone-100 shadow-2xs">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Fish className="w-4 h-4 text-amber-700" />
                黒潮と水深数百メートルの大陸棚が育む天然トラフグの宝庫
              </h3>
              <p>
                遠州灘は太平洋を流れる黒潮の暖流と、南アルプスを源流とする天竜川の豊かな真水がぶつかり合う栄養豊かな海域です。水深100〜200メートルの広大な大陸棚には、トラフグの主食となるエビやカニ、小魚が豊富に生息。外海の激しい潮流の中で揉まれて育つため、身の筋肉が緻密で上質なアミノ酸を蓄えます。舞阪漁港では延縄（はえなわ）漁で一匹一匹丁寧に釣り上げられ、極上の状態で食卓へと届けられます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-amber-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬・厳冬期の浜名湖・舘山寺・三ヶ日旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-amber-700 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
          <div className="flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-amber-800" />
            あわせて読みたい東海・東日本の冬温泉＆味覚特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-aichi-irago-onsen-torafugu-atsumigyu-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-amber-700 font-bold block text-[10px]">愛知・伊良湖温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">遠州灘と三河湾の天然とらふぐ＆渥美牛・海絶景露天風呂を堪能する名宿</p>
            </Link>
            <Link 
              href="/winter-shizuoka-nishiizu-toi-onsen-sunset-kinmedai-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-amber-700 font-bold block text-[10px]">静岡・西伊豆土肥温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">駿河湾の黄金夕陽と冬の極上金目鯛・海辺の雪見露天風呂を満喫する名宿</p>
            </Link>
            <Link 
              href="/winter-shizuoka-atami-onsen-winter-fireworks-kinmedai-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-amber-700 font-bold block text-[10px]">静岡・熱海温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">冬の熱海海上花火大会と金目鯛煮付け・相模湾を一望する老舗温泉宿</p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-shizuoka-hamanako-kanzanji-torafugu-unagi-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
