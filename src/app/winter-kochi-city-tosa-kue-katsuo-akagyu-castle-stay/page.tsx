import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Flame, Waves, Sun, Landmark, Building, Fish, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月高知：冬の幻の高級魚「天然クエ鍋」！名宿5選',
  description: '11月から1月、南国土佐・高知は、荒波の太平洋が育む幻の高級魚「天然クエ（九絵）」の濃厚な旨みと、脂の乗り切った戻り鰹の藁焼き塩タタキ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '高知 クエ鍋, 高知 鰹タタキ, 高知城 冬 ライトアップ, 城西館, 高知 三翠園, 土佐御苑, ドーミーイン高知, 土佐あかうし, 11月 12月 1月 高知旅行, 桂浜 初日の出',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kochi-city-tosa-kue-katsuo-akagyu-castle-stay/"
  },
  openGraph: {
    title: '11・12・1月高知：冬の幻の高級魚「天然クエ鍋」！名宿5選',
    description: '11月から1月、南国土佐・高知は、荒波の太平洋が育む幻の高級魚「天然クエ（九絵）」の濃厚な旨みと、脂の乗り切った戻り鰹の藁焼き塩タタキ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-kochi-city-tosa-kue-katsuo-akagyu-castle-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の高知城と桂浜の太平洋絶景'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月高知：冬の幻の高級魚「天然クエ鍋」と脂の乗る戻り鰹・土佐あかうし＆高知城冬ライトアップ・桂浜初日の出・天然温泉宿5選",
    description: "11月から1月、南国土佐・高知は、荒波の太平洋が育む幻の高級魚「天然クエ（九絵）」の濃厚な旨みと、脂の乗り切った戻り鰹の藁焼き塩タタキ、赤身の芸術「土佐あかうし」が集う冬の美食天国となります。美しくライトアップされる現存天守・高知城の夜景やひろめ市場の熱気、桂浜から望む太平洋の雄大な初日の出。高知城下の歴史ある天然温泉や老舗旅館、海辺のリゾートで土佐の豪快な郷土料理と酒文化に酔いしれる厳選名宿5選を徹底ガイドします。",
    images: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function KochiCityTosaKueWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "11・12・1月高知：冬の幻の高級魚「天然クエ鍋」と脂の乗る戻り鰹・土佐あかうし＆高知城冬ライトアップ・桂浜初日の出・天然温泉宿5選",
    description: "11月から1月、南国土佐・高知は、荒波の太平洋が育む幻の高級魚「天然クエ（九絵）」の濃厚な旨みと、脂の乗り切った戻り鰹の藁焼き塩タタキ、赤身の芸術「土佐あかうし」が集う冬の美食天国となります。美しくライトアップされる現存天守・高知城の夜景やひろめ市場の熱気、桂浜から望む太平洋の雄大な初日の出。高知城下の歴史ある天然温泉や老舗旅館、海辺のリゾートで土佐の豪快な郷土料理と酒文化に酔いしれる厳選名宿5選を徹底ガイドします。",
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
      '@id': 'https://croud-travel.pages.dev/winter-kochi-city-tosa-kue-katsuo-akagyu-castle-stay'
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
        name: '高知・冬の天然クエ鍋＆高知城ライトアップ特集',
        item: 'https://croud-travel.pages.dev/winter-kochi-city-tosa-kue-katsuo-akagyu-castle-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "高知の冬の味覚の王様「天然クエ（九絵）」とはどんな魚ですか？旬の時期は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "クエ（九絵）は「クエを食ったら他の魚は食えん」と食通に言わしめるハタ科の最高級白身魚です。水深の深い岩礁に単独で生息し、漁獲量が極めて少ないことから「幻の高級魚」と呼ばれます。高知沖の黒潮で育つ天然クエは、寒さが本格化する11月から1月、2月にかけて極上の脂を蓄えます。フグの淡白な歯ごたえとアンコウの濃厚なゼラチン質（コラーゲン）を併せ持ち、火を通すとホロリとほどける白身と、皮と身の間のトロッとしたゼラチン質が絶品です。昆布出汁でシンプルに煮立てる「クエ鍋（クエちり）」は、骨やアラから極上のスープが溶け出し、最後の雑炊までため息が出るほどの美味です。"
        }
      },
      {
        '@type': 'Question',
        name: "冬（11月〜1月）でも高知名物の「鰹（カツオ）のタタキ」は美味しいですか？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "はい、実は冬の初め（11月頃）は、北の海から丸々と太って南下してきた「戻り鰹（もどりガツオ）」の最高潮の時期です。春の初鰹があっさりとした赤身であるのに対し、戻り鰹はトロのように脂が乗っており、皮目を藁（わら）の強火で一気に香ばしく焼き上げた「塩タタキ」でいただくと、濃厚な脂の甘みと藁の燻香が口いっぱいに広がります。12月〜1月の真冬でも高知市内の老舗旅館や居酒屋、ひろめ市場では毎日新鮮な鰹が藁焼きで提供されており、ニンニクスライスやミョウガ、スダチ・柚子果汁とともに年中最高の状態で味わえます。"
        }
      },
      {
        '@type': 'Question',
        name: "高知城の冬の夜間イベントやライトアップ、見どころは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "高知城は全国で唯一、本丸の建造物群がほぼ完全に現存する江戸時代の名城です。冬期には毎年、城内を幻想的な光とデジタルアートで彩る夜間イベント（冬の光の祭、プロジェクションマッピング等）が開催され、白壁と木造天守が夜空に荘厳に浮かび上がります。また、追手門と天守閣が1枚の写真に収まる日本唯一の撮影スポットも冬の澄んだ夜空でひときわ映えます。天守最上階からは360度高知市街を見渡せ、高知城歴史博物館と合わせた歴史探訪がおすすめです。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の「桂浜（かつらはま）」観光と初日の出の魅力は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "桂浜は、弓状に広がる白砂青松の海岸と雄大な太平洋の荒波が織りなす高知屈指の名勝です。小高い丘の上に立つ巨大な「坂本龍馬像」は太平洋の彼方を見据え、冬の澄み渡る青空と群青の海との対比が圧巻です。また桂浜は本州・四国でも屈指の初日の出スポットとして知られ、元旦の早朝には水平線から真っ赤な太陽が昇る感動的な瞬間を拝もうと多くの参拝客で賑わいます。近年リニューアルされた商業施設「桂浜 竜宮浜横丁」では冬の海鮮グルメや龍馬グッズのお土産選びも楽しめます。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の高知旅行の気候と服装、移動手段のアドバイスは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "高知県は南国と呼ばれる通り、太平洋側気候のため日照時間が長く、冬でも平野部の日中は12℃〜15℃前後まで上がり穏やかな晴天が多いです。雪が降ることは極めて稀で、積雪の心配はほとんどありません。ただし朝晩や海沿いは浜風で冷え込むため、厚手のコートやダウンジャケット、風を通さない防寒着が必要です。高知市街地の観光（高知城・ひろめ市場・日曜市）は路面電車（とさでん交通）や徒歩で快適に周遊可能。桂浜や龍河洞、南国・物部川方面へは路線バスやレンタカーの利用がスムーズです。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "城西館（じょうせいかん）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8075/8075.jpg",
              rating: 4.64,
              reviews: 3662,
              price: "¥12,999〜",
              access: "路面電車上町1丁目電停目の前。ＪＲ高知駅よりお車で７分、高知ＩＣよりお車で２０分",
              special: "２０１９年４月リニューアルオープン！明治７年創業の老舗宿。展望露天風呂と鰹の藁焼きタタキ工房が自慢♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8075%2F8075.html",
              story: "創業明治7年（1874年）、皇族方や多くの文人墨客をお迎えしてきた高知屈指の老舗格式旅館「城西館」。高知城下町を一望できる最上階の展望露天風呂付き大浴場からは、冬の澄んだ夜空に浮かび上がるライトアップされた高知城の雄姿を眺めながら、極上の湯浴みを愉しめます。自慢の料理は土佐の海山の至宝を結集した特選皿鉢・会席料理。11月から1月にかけては、土佐沖で揚がった天然クエを使った贅沢な小鍋仕立てや、藁焼き職人が目前で豪快に焼き上げる本場戻り鰹の塩タタキ、柔らかな土佐あかうしのステーキなど、代々受け継がれた割烹の技が光る逸品が並びます。温かな土佐流のおもてなしに心満たされる宿です。",
              roomTip: "最上階プレミアムフロアまたは展望和洋室。大きなピクチャーウィンドウから高知城の天守閣と市街地の夜景を正面に望む特別な空間です。",
              gourmetTip: "「冬の土佐贅沢会席・極み」。天然クエ鍋の滋味あふれる出汁と、藁の香りが香ばしい戻り鰹の塩タタキ、極上土佐あかうしの陶板焼きを一度に。",
              highlights: [
                "明治7年創業の皇族御用達宿・高知城を望む展望露天風呂と最高峰の割烹料理",
                "冬の土佐贅沢会席・天然クエ鍋小鍋仕立てと藁焼き戻り鰹・土佐あかうしの極上饗宴",
                "高知城冬のライトアップや日曜市へ徒歩圏内・細やかで温かな土佐流のおもてなし"
              ]
            },
            {
              id: 2,
              name: "高知城下の天然温泉　三翠園（さんすいえん）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/17777/17777.jpg",
              rating: 4.31,
              reviews: 2548,
              price: "¥6,700〜",
              access: "ＪＲ土讃線高知駅から車で１０分／高知自動車道高知ＩＣから１５分",
              special: "昭和24年創業。天然温泉の露天風呂と総料理長厳選の土佐の旬でおもてなし。高知城まで徒歩10分。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17777%2F17777.html",
              story: "土佐藩主山内家の下屋敷跡に建ち、約1万坪の敷地に広大な日本庭園と重要文化財「長屋門」を抱える「高知城下の天然温泉 三翠園」。高知市街地の中心にありながら、敷地内から湧出する効能豊かな本格天然温泉を備える唯一無二の名宿です。日本庭園を望む露天風呂では、冬の冷気の中で湯けむりに包まれる至福のひとときを過ごせます。夕食は土佐伝統の皿鉢（さわち）料理や会席。冬は脂が乗り切った天然クエ鍋や、名物の鰹タタキ、清流四万十川の恵み、高知特産の冬野菜が食卓を彩ります。ひろめ市場や高知城へも徒歩圏内で、冬の高知観光の拠点として最高峰の立地を誇ります。",
              roomTip: "日本庭園側和室。手入れの行き届いた名園の冬景色と歴史ある長屋門を見下ろす、静寂と風情に満ちた客室です。",
              gourmetTip: "「冬の味覚満喫・天然クエ鍋と土佐会席」。プルプルのゼラチン質と濃厚な脂が溶け出すクエ鍋を中心に、冬の土佐の幸が勢揃いします。",
              highlights: [
                "山内家下屋敷跡の歴史薫る1万坪名園と高知市街随一の天然温泉露天風呂",
                "伝統の土佐皿鉢料理と熱々天然クエ鍋・清流四万十川と黒潮がもたらす冬の味覚",
                "国指定重要文化財「長屋門」と日本庭園散策・高知城とひろめ市場への抜群の立地"
              ]
            },
            {
              id: 3,
              name: "土佐御苑(とさぎょえん)",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10680/10680.jpg",
              rating: 4.22,
              reviews: 2175,
              price: "¥11,550〜",
              access: "高知ICよりお車で１０分　高知駅より徒歩５分　高知空港よりお車で３０分　",
              special: "プロが選ぶ日本のホテル旅館100選料理部門連続受賞中|高知駅徒歩5分の鰹料理とおもてなしの宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10680%2F10680.html",
              story: "JR高知駅から徒歩約5分、伝統の土佐もてなしの心息づく料理自慢の宿「土佐御苑」。館内には開放的な露天風呂や広々とした大浴場、高温サウナを備え、冬の観光で歩き疲れた体を心地よく癒やしてくれます。プロが選ぶ日本のホテル・旅館100選「料理部門」に連続入選する美食へのこだわりは圧巻。名物の鰹藁焼きタタキは、専用の焼き場で注文ごとに藁の強火で一気に炙り、温かいまま特製ポン酢や天日塩で提供されます。冬期には土佐湾直送の天然クエ会席や、土佐あかうしのしゃぶしゃぶプランが登場。土佐の地酒とともに味わう贅沢な晩餐は忘れられない旅の記憶となります。",
              roomTip: "和モダンベッドルーム「花見遊山」。畳の寛ぎとシモンズ製ベッドの快適性を両立し、カップルや一人旅にも好評です。",
              gourmetTip: "「冬の土佐旬彩会席」。焼き立ての鰹藁焼きタタキと、脂の乗ったクエ薄造り＆ちり鍋、土佐あかうしすき焼きを味わう美食プランです。",
              highlights: [
                "料理100選連続入選・藁焼き工房で焼き上げる本場鰹タタキと天然クエ会席",
                "注文ごとに焼き上げる香ばしい藁焼き鰹タタキと土佐あかうしすき焼き・厳選地酒",
                "和モダンな客室と広々大浴場・地酒利き酒コーナーで楽しむ土佐の酒文化体験"
              ]
            },
            {
              id: 4,
              name: "天然温泉　紺碧の湯　ドーミーイン高知（ドーミーイン・御宿野乃　ホテルズグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/165939/165939.jpg",
              rating: 4.42,
              reviews: 2215,
              price: "¥8,475〜",
              access: "JR「高知駅南口」より徒歩12分/とさでん交通「堀詰電停」より徒歩2分「蓮池町通り電停」より徒歩5分",
              special: "2名泊まれるセミダブル販売開始♪サウナ付天然温泉大浴場が夜通し利用可能♪アイスと乳酸菌飲料も無料！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165939%2F165939.html",
              story: "高知一の繁華街・帯屋町アーケード内に直結し、ひろめ市場へも徒歩約5分という抜群のアクセスを誇る「天然温泉 紺碧の湯 ドーミーイン高知」。最上階には自家源泉を引いた天然温泉大浴場や露天風呂、本格ドライサウナ、水風呂を完備し、旅の疲れを極上の温浴でリセットできます。大好評のご当地朝食バイキングでは、毎朝目の前で焼き上げる鰹のタタキ丼や、高知名物の芋天、日替わりの土佐郷土小鉢がずらりと並びます。夜はひろめ市場で天然クエや屋台餃子、地酒を満喫し、宿に戻って名物の「夜鳴きそば」をすする、気ままで充実した冬の高知ステイが叶います。",
              roomTip: "クイーンルームまたは和風ダブル。サータ社製ベッドと個別エアコン完備で、機能的かつ快適な眠りをサポートします。",
              gourmetTip: "「ご当地朝食バイキング」。朝から名物鰹のタタキが食べ放題。炊きたての高知県産米にたっぷりの薬味とタタキを乗せた特製丼が絶品。",
              highlights: [
                "ひろめ市場徒歩5分・最上階天然温泉＆サウナ完備と豪華鰹タタキ朝食バイキング",
                "朝食バイキングで味わう炊きたてご飯と鰹タタキ丼・名物夜鳴きそばの無料サービス",
                "帯屋町アーケード直結で雨風を気にせずひろめ市場の屋台めぐりや夜の街散策を満喫"
              ]
            },
            {
              id: 5,
              name: "リゾートホテル海辺の果樹園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13721/13721.jpg",
              rating: 4.08,
              reviews: 674,
              price: "¥7,300〜",
              access: "高知空港より車１５分／高知東部自動車道高知龍馬空港ICから１５分／夜須駅より車で3分",
              special: "【海抜50mの小高い丘から太平洋を一望】全室40平米以上の客室！ファミリー・カップルご利用にご好評♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13721%2F13721.html",
              story: "高知市街から東へ車で約30分、太平洋と果樹園を見下ろす高台に建つ南欧風リゾートホテル「リゾートホテル海辺の果樹園」。温暖な手結（てい）の海風が心地よく、冬でも明るい南国の陽光が降り注ぎます。客室は全室オーシャンビューで、冬の澄んだ水平線から昇る息を呑む朝陽をベッドから眺めることができます。夕食は黒潮の恵みをふんだんに取り入れた和洋創作コースや土佐皿鉢料理。近海で獲れた新鮮な魚介のお造りや、冬のクエ小鍋、土佐あかうしのステーキなど、太平洋の絶景とともにリゾートならではの開放感あふれる美食を堪能できます。屋内温水プールやサウナも完備しています。",
              roomTip: "オーシャンビューデラックスツイン。太平洋の水平線をパノラマで見渡す広々としたテラス付きで、リゾート気分満点です。",
              gourmetTip: "「黒潮冬の味覚ディナー」。土佐湾の鮮魚盛り合わせや天然クエのブイヤベース、土佐あかうしのローストを贅沢に味わえます。",
              highlights: [
                "太平洋を一望する高台の南欧風リゾート・全室オーシャンビュー＆水平線サンライズ",
                "太平洋の朝獲れ魚介と土佐あかうしステーキ・南国フルーツを取り入れた冬ディナー",
                "太平洋の波音と満天の星空に包まれるリゾートステイ・桂浜や龍河洞へのドライブ拠点"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "高知の冬の味覚の王様「天然クエ（九絵）」とはどんな魚ですか？旬の時期は？",
    "a": "クエ（九絵）は「クエを食ったら他の魚は食えん」と食通に言わしめるハタ科の最高級白身魚です。水深の深い岩礁に単独で生息し、漁獲量が極めて少ないことから「幻の高級魚」と呼ばれます。高知沖の黒潮で育つ天然クエは、寒さが本格化する11月から1月、2月にかけて極上の脂を蓄えます。フグの淡白な歯ごたえとアンコウの濃厚なゼラチン質（コラーゲン）を併せ持ち、火を通すとホロリとほどける白身と、皮と身の間のトロッとしたゼラチン質が絶品です。昆布出汁でシンプルに煮立てる「クエ鍋（クエちり）」は、骨やアラから極上のスープが溶け出し、最後の雑炊までため息が出るほどの美味です。"
  },
  {
    "q": "冬（11月〜1月）でも高知名物の「鰹（カツオ）のタタキ」は美味しいですか？",
    "a": "はい、実は冬の初め（11月頃）は、北の海から丸々と太って南下してきた「戻り鰹（もどりガツオ）」の最高潮の時期です。春の初鰹があっさりとした赤身であるのに対し、戻り鰹はトロのように脂が乗っており、皮目を藁（わら）の強火で一気に香ばしく焼き上げた「塩タタキ」でいただくと、濃厚な脂の甘みと藁の燻香が口いっぱいに広がります。12月〜1月の真冬でも高知市内の老舗旅館や居酒屋、ひろめ市場では毎日新鮮な鰹が藁焼きで提供されており、ニンニクスライスやミョウガ、スダチ・柚子果汁とともに年中最高の状態で味わえます。"
  },
  {
    "q": "高知城の冬の夜間イベントやライトアップ、見どころは？",
    "a": "高知城は全国で唯一、本丸の建造物群がほぼ完全に現存する江戸時代の名城です。冬期には毎年、城内を幻想的な光とデジタルアートで彩る夜間イベント（冬の光の祭、プロジェクションマッピング等）が開催され、白壁と木造天守が夜空に荘厳に浮かび上がります。また、追手門と天守閣が1枚の写真に収まる日本唯一の撮影スポットも冬の澄んだ夜空でひときわ映えます。天守最上階からは360度高知市街を見渡せ、高知城歴史博物館と合わせた歴史探訪がおすすめです。"
  },
  {
    "q": "冬の「桂浜（かつらはま）」観光と初日の出の魅力は？",
    "a": "桂浜は、弓状に広がる白砂青松の海岸と雄大な太平洋の荒波が織りなす高知屈指の名勝です。小高い丘の上に立つ巨大な「坂本龍馬像」は太平洋の彼方を見据え、冬の澄み渡る青空と群青の海との対比が圧巻です。また桂浜は本州・四国でも屈指の初日の出スポットとして知られ、元旦の早朝には水平線から真っ赤な太陽が昇る感動的な瞬間を拝もうと多くの参拝客で賑わいます。近年リニューアルされた商業施設「桂浜 竜宮浜横丁」では冬の海鮮グルメや龍馬グッズのお土産選びも楽しめます。"
  },
  {
    "q": "冬の高知旅行の気候と服装、移動手段のアドバイスは？",
    "a": "高知県は南国と呼ばれる通り、太平洋側気候のため日照時間が長く、冬でも平野部の日中は12℃〜15℃前後まで上がり穏やかな晴天が多いです。雪が降ることは極めて稀で、積雪の心配はほとんどありません。ただし朝晩や海沿いは浜風で冷え込むため、厚手のコートやダウンジャケット、風を通さない防寒着が必要です。高知市街地の観光（高知城・ひろめ市場・日曜市）は路面電車（とさでん交通）や徒歩で快適に周遊可能。桂浜や龍河洞、南国・物部川方面へは路線バスやレンタカーの利用がスムーズです。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-red-100 selection:text-red-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の高知城と土佐湾の荒波" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-red-900/80 backdrop-blur-md text-red-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-red-400/30">
            <Calendar className="w-4 h-4 text-red-300" />
            11月・12月・1月 冬の南国土佐・天然クエ鍋＆高知城ライトアップ特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">「11・12・1月高知」冬の幻の高級魚「天然クエ鍋」と脂の乗る戻り鰹・土佐あかうし＆高知城冬ライトアップ・桂浜初日の出・天然温泉宿5選</h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            荒れ狂う黒潮が育む白身魚の最高峰「天然クエ」。骨から溶け出す濃厚なコラーゲンスープと極上の白身、藁の強火で香ばしく炙る戻り鰹の塩タタキ、幻の和牛・土佐あかうし。夜空に照らされる現存天守・高知城のライトアップやひろめ市場の賑わい、城下の名湯に浸かる至福の冬旅をお届けします。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-red-400" /> 旬の時期：11月中旬〜1月下旬（クエ最盛期）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-red-400" /> エリア：高知県高知市・南国市・桂浜・手結海岸</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-red-400" /> 旬グルメ：天然クエ鍋・戻り鰹藁焼き・土佐あかうし・屋台餃子</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-red-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Introduction</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の黒潮がもたらす深海の覇者「天然クエ」と、熱き土佐の酒宴「おきゃく」文化
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              冬の太平洋・土佐湾は、雄大な黒潮が豊かな海洋生態系を育む日本屈指の好漁場です。11月から1月にかけて寒風が吹きすさぶ中、土佐の漁師たちが命がけで挑むのが、水深数十メートルから百メートルの険しい岩礁に潜む幻の巨大魚「天然クエ（九絵）」です。数年間から十数年もの歳月をかけて荒波の中で育つ天然クエは、冬の産卵期に向けて極限まで脂を蓄え、その身は純白に輝きます。
            </p>
            <p>
              「クエを食ったら他の魚は食えん」と食通たちに絶賛される理由は、フグのような上品で弾力ある白身と、皮と身の間にぎっしり詰まったプルプルのコラーゲン、そして骨やアラから染み出す濃厚な旨みの完璧な調和にあります。昆布と水だけでコトコトと煮立てる「クエちり鍋」は、スープが白濁するほど濃厚なエキスが溢れ出し、高知特産の香り高い柚子ポン酢でいただく一口は筆舌に尽くしがたい多幸感をもたらします。さらに初冬に脂が最高潮に達する戻り鰹の藁焼き塩タタキ、赤身の旨みが凝縮された幻の和牛「土佐あかうし」が加わり、冬の高知の食卓は豪快そのものです。
            </p>
            <p>
              食後には夜空に荘厳にライトアップされる現存天守・高知城を散策し、屋台村「ひろめ市場」へ。老若男女や観光客が円卓を囲んで土佐の銘酒を酌み交わす「おきゃく（宴会）」の温かなもてなしに触れ、高知城下の歴史ある天然温泉露天風呂で温まる。南国土佐ならではの情熱と冬の滋味に満たされる旅がここにあります。
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-red-50/50 rounded-2xl p-4 border border-red-100 space-y-2">
              <div className="flex items-center gap-2 text-red-950 font-bold text-sm">
                <Fish className="w-4 h-4 text-red-700" />
                幻の深海魚「天然クエ鍋」
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                黒潮の岩礁深くで獲れる最高級魚。コラーゲンたっぷりの皮と芳醇な出汁、締めの雑炊まで至高。
              </p>
            </div>
            <div className="bg-red-50/50 rounded-2xl p-4 border border-red-100 space-y-2">
              <div className="flex items-center gap-2 text-red-950 font-bold text-sm">
                <Landmark className="w-4 h-4 text-red-700" />
                高知城ライトアップ＆ひろめ市場
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                全国唯一の本丸建造物群現存城。幻想的な冬の夜間開園と屋台村の熱気あふれる酒宴文化。
              </p>
            </div>
            <div className="bg-red-50/50 rounded-2xl p-4 border border-red-100 space-y-2">
              <div className="flex items-center gap-2 text-red-950 font-bold text-sm">
                <Sun className="w-4 h-4 text-red-700" />
                温暖な南国気候と桂浜初日の出
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                冬でも日中はポカポカと暖かい陽光。坂本龍馬像が見守る桂浜の雄大な太平洋サンライズ。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-red-950 font-bold text-sm tracking-wide bg-red-100/60 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4 text-red-800" />
              楽天トラベル公式連携・厳選宿
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 mt-2">
              天然クエ鍋と高知城下町を満喫する名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              ※表示料金は楽天トラベルAPIより取得した参考最低価格です。時期や宿泊プランにより変動します。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200 hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {/* Hotel Image */}
                <div className="w-full relative aspect-[16/9] sm:aspect-[21/9]">
                  <img 
                    src={hotel.img} 
                    alt={hotel.name}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    厳選宿 {hotel.id}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-stone-900 text-xs font-bold px-3 py-1 rounded-lg shadow-xs flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    {hotel.rating} <span className="text-stone-400 font-normal">({hotel.reviews}件)</span>
                  </div>
                </div>

                {/* Hotel Details */}
                <div className="p-6 md:p-8 w-full flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-red-700" />
                        {hotel.access}
                      </span>
                      <span className="text-red-800 font-extrabold text-base sm:text-lg">
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
                          <CheckCircle2 className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Room & Gourmet tips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="bg-red-50/40 p-3 rounded-xl border border-red-100/60">
                        <span className="font-bold text-red-950 block mb-1">【客室の選び方】</span>
                        <p className="text-stone-600 leading-relaxed">{hotel.roomTip}</p>
                      </div>
                      <div className="bg-amber-50/40 p-3 rounded-xl border border-amber-100/60">
                        <span className="font-bold text-amber-950 block mb-1">【冬の味覚おすすめ】</span>
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
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-800 to-slate-900 hover:from-red-900 hover:to-black text-white font-bold py-3.5 px-6 rounded-2xl shadow-sm hover:shadow transition text-sm tracking-wide"
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
            <span className="text-red-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Route</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の高知・土佐 2泊3日王道モデルコース
            </h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-stone-700">
            {/* Day 1 */}
            <div className="relative pl-6 border-l-2 border-red-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-red-700" />
              <h3 className="font-bold text-stone-900 text-base">
                1日目：高知龍馬空港到着・日曜市散策とひろめ市場鰹タタキ＆高知城冬ライトアップ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                高知龍馬空港またはJR高知駅に到着後、高知市街へ。日曜日の場合は江戸時代から続く名物「日曜市」を散策し、名物の揚げたて芋天やつきたて田舎寿司をつまみ食い。昼は「ひろめ市場」のやいろ亭や明神丸で、豪快な藁焼き塩タタキランチ。午後は高知城歴史博物館を見学し、夕方に高知城下の温泉宿へチェックイン。夜は幻想的な光に彩られる高知城冬ライトアップを散策し、夕食には熱々の天然クエ鍋会席に酔いしれます。
              </p>
            </div>

            {/* Day 2 */}
            <div className="relative pl-6 border-l-2 border-red-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-red-700" />
              <h3 className="font-bold text-stone-900 text-base">
                2日目：桂浜の太平洋サンライズ・坂本龍馬記念館と牧野植物園＆老舗割烹ディナー
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                早朝、車または路線バスで桂浜へ。水平線から昇る神々しい朝陽と坂本龍馬像の雄姿を拝み、リニューアルした桂浜海のテラスで朝の海風を満喫。高知県立坂本龍馬記念館で幕末の情熱に触れた後、五台山へ移動して四国霊場第31番札所・竹林寺参拝と高知県立牧野植物園の温室を鑑賞。夜は老舗割烹旅館で、土佐あかうしのすき焼きや天然クエの薄造り、辛口の土佐地酒を味わい尽くします。
              </p>
            </div>

            {/* Day 3 */}
            <div className="relative pl-6 border-l-2 border-red-700 space-y-2">
              <div className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-red-700" />
              <h3 className="font-bold text-stone-900 text-base">
                3日目：神秘の鍾乳洞・龍河洞探検と南国果樹園ドライブ＆お土産調達
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                最終日は香美市にある国指定天然記念物・史跡「龍河洞」へ。冬でも洞内は年間を通じて約15℃と暖かく、悠久の時が創り出した鍾乳石と神の壺の神秘美を探検。昼食は南国市の手結港周辺で海を見下ろしながら土佐の海鮮ランチ。銘菓かんざしやミレービスケット、土佐地酒をお土産に購入し、高知龍馬空港から帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Local Winter Practical Tips */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-red-300 font-bold text-xs sm:text-sm tracking-wider uppercase">
            <ThermometerSun className="w-4 h-4 text-red-300" />
            現地リアルアドバイス
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">
            冬の高知・土佐を快適に巡るための気候・服装・移動手段アドバイス
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-200 leading-relaxed pt-2">
            <div className="space-y-2 bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
              <span className="font-bold text-white block">【気候と服装：南国の強い日差しと海風の寒暖差】</span>
              <p>
                高知は冬でも晴天率が高く、日中は日差しがポカポカと暖かく感じられます。ただし日が落ちると急激に冷え込み、桂浜などの海沿いでは太平洋からの強い浜風が吹きつけるため体感温度がぐっと下がります。脱ぎ着しやすいウールコートや軽量ダウンジャケット、防風ストールを準備してください。
              </p>
            </div>
            <div className="space-y-2 bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
              <span className="font-bold text-white block">【交通アクセス：市街地路面電車とレンタカー使い分け】</span>
              <p>
                高知市街地（高知城・ひろめ市場・日曜市・はりまや橋）は、日本最古の現役路面電車「とさでん交通」で便利に周遊できます。一方、桂浜や龍河洞、南国市、仁淀川方面へ足を伸ばすならレンタカーが圧倒的に快適。平野部は積雪の心配がほぼないため、快適な冬ドライブが楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-red-950 font-bold text-sm tracking-wide bg-red-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-red-800" />
              土佐・高知の冬名物＆厳選おみやげ手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              黒潮の恵みと豊かな太陽が育んだ土佐の名産品
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-red-700" />
                辛口土佐地酒のしぼりたて新酒（司牡丹・酔鯨・美丈夫）
              </h3>
              <p>
                淡麗辛口の代名詞である土佐の日本酒。11月下旬から1月にかけては、新米で仕込まれた「しぼりたて生原酒」や「活性にごり酒」が続々と蔵出しされます。キリッと引き締まった酸味と米の旨みは、脂の乗った天然クエ鍋や鰹タタキの脂をスッと洗い流し、最高の食中酒として旅の夜を彩ります。
              </p>
            </div>
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-red-700" />
                野根まんじゅう・芋けんぴ・馬路村のゆずぽん酢
              </h3>
              <p>
                高知の冬の定番お土産といえば、室戸の伝統銘菓「野根まんじゅう」や、黄金色に揚げられたカリカリの「芋けんぴ」。さらに日本一の柚子の産地・高知ならではの無添加ゆず果汁やゆずぽん酢「ゆずの村」は、自宅での鍋料理の味を格段に引き上げる万能調味料として大人気です。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-red-950 font-bold text-sm tracking-wide bg-red-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-red-800" />
              土佐食文化ディープダイブ
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ高知で「皿鉢料理」が生まれ、酒宴を「おきゃく」と尊ぶのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-stone-100 shadow-2xs">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Flame className="w-4 h-4 text-red-700" />
                女性も一緒に楽しむための知恵から生まれた大皿「皿鉢（さわち）」
              </h3>
              <p>
                有田焼や九谷焼の直径数十センチの大皿に、旬の刺身、タタキ、煮物、寿司、羊羹や果物まで彩り豊かに豪快に盛り付ける「皿鉢料理」。これは宴会の席で台所に立つ女性たちが何度も料理を運ぶ手間を省き、最初から全員が揃って車座になり酒宴を楽しめるようにという平等の精神から生まれました。身分の分け隔てなく客人を心から歓迎する土佐人の温かな気質が凝縮されています。
              </p>
            </div>

            <div className="space-y-2 bg-white p-5 rounded-2xl border border-stone-100 shadow-2xs">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Fish className="w-4 h-4 text-red-700" />
                天然クエの一本釣り：海中深くの主と漁師の命がけの駆け引き
              </h3>
              <p>
                クエは縄張り意識が極めて強く、普段は海底の岩穴に潜んでじっと獲物を待ち伏せしています。太いテグスに生きたサバやイカを仕掛け、アタリがあった瞬間に一気に根から引き剥がす一本釣り。わずか数秒の遅れで岩穴に潜り込まれ、仕掛けを切られてしまう極限の勝負です。荒れる冬の黒潮に耐え、釣り上げられた一本の天然クエには、漁師の誇りと土佐の海の生命力が宿っています。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-red-950 font-bold text-sm tracking-wide bg-red-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-red-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬・厳冬期の高知・土佐旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-red-700 font-extrabold">Q.</span>
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
          <div className="flex items-center gap-2 text-red-950 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-red-800" />
            あわせて読みたい四国・瀬戸内の冬温泉＆味覚特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-kochi-ashizuri-onsen-ocean-starry-katsuo-tosa-beef-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-red-700 font-bold block text-[10px]">高知・足摺岬温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">四国最南端の満天の星空と黒潮の鰹・土佐牛を味わう絶景温泉宿</p>
            </Link>
            <Link 
              href="/winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-red-700 font-bold block text-[10px]">愛媛・道後温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">全館営業再開の道後温泉本館と冬の寒鯛めし・伊予牛会席の名宿</p>
            </Link>
            <Link 
              href="/winter-kagawa-kotohira-onsen-konpira-olive-beef-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-red-700 font-bold block text-[10px]">香川・こんぴら温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">金刀比羅宮の冬参宮とオリーブ牛・名湯こんぴら温泉郷の極上宿</p>
            </Link>
            <Link 
              href="/winter-tokushima-iya-valley-onsen-hikyo-awa-beef-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-red-700 font-bold block text-[10px]">徳島・祖谷渓温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">日本三大秘境の雪見ケーブルカー露天風呂と阿波牛・祖谷そばの宿</p>
            </Link>
            <Link 
              href="/winter-wakayama-nanki-shirahama-kue-hotspring-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-red-700 font-bold block text-[10px]">和歌山・南紀白浜温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">冬の名物本クエ鍋と白良浜の絶景・日本三古湯の名泉を巡る名宿</p>
            </Link>
            <Link 
              href="/winter-okayama-hinase-ushimado-oyster-kakioko-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-red-700 font-bold block text-[10px]">岡山・日生＆牛窓</span>
              <p className="font-bold text-stone-800 line-clamp-2">大粒の日生牡蠣カキオコと牛窓オリーブ園夕陽・日本のエーゲ海宿</p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-kochi-city-tosa-kue-katsuo-akagyu-castle-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
