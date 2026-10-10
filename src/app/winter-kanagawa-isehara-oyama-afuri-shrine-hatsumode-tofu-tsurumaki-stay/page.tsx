import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月神奈川】「大山阿夫利神社」新春初詣と！名宿5選',
  description: '江戸時代から庶民の信仰を集め日本遺産にも認定された「大山詣り」。11〜1月の冬シーズンは空気が研ぎ澄まされ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '大山阿夫利神社 初詣, 大山詣り, 大山豆腐, 鶴巻温泉 元湯陣屋, 七沢温泉 福元館, 七扇, 玉翠楼, ルートイン伊勢原, ミシュラン 相模湾 絶景, 神奈川 冬温泉',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-kanagawa-isehara-oyama-afuri-shrine-hatsumode-tofu-tsurumaki-stay'
  },
  openGraph: {
    title: '【11・12・1月神奈川】「大山阿夫利神社」新春初詣と！名宿5選',
    description: '江戸時代から庶民の信仰を集め日本遺産にも認定された「大山詣り」。11〜1月の冬シーズンは空気が研ぎ澄まされ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-kanagawa-isehara-oyama-afuri-shrine-hatsumode-tofu-tsurumaki-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の大山阿夫利神社境内から見下ろす澄んだ相模湾と江の島のパノラマ'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月神奈川】「大山阿夫利神社」新春初詣と相模湾冬パノラマ！名水大山豆腐料理＆名湯「鶴巻・七沢温泉」厳選名宿5選",
    description: "江戸時代から庶民の信仰を集め日本遺産にも認定された「大山詣り」。11〜1月の冬シーズンは空気が研ぎ澄まされ、大山阿夫利神社下社境内からミシュラン二つ星に輝く相模湾・江の島・房総半島までの絶景パノラマが広がります。標高1,252mの霊峰で迎える厳かな新春初詣と大山寺の静寂。参道で味わう名水仕込みの熱々大山豆腐会席や名物猪鍋。冷えた身体を芯から解きほぐす世界屈指のカルシウム含有量を誇る「鶴巻温泉」や東丹沢の秘湯「七沢温泉」の厳選名宿5選を徹底特集。",
    images: ['https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export const dynamic = 'force-static';

export default function KanagawaOyamaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月神奈川】「大山阿夫利神社」新春初詣と相模湾冬パノラマ！名水大山豆腐料理＆名湯「鶴巻・七沢温泉」厳選名宿5選",
    "description": "江戸時代から庶民の信仰を集め日本遺産にも認定された「大山詣り」。11〜1月の冬シーズンは空気が研ぎ澄まされ、大山阿夫利神社下社境内からミシュラン二つ星に輝く相模湾・江の島・房総半島までの絶景パノラマが広がります。標高1,252mの霊峰で迎える厳かな新春初詣と大山寺の静寂。参道で味わう名水仕込みの熱々大山豆腐会席や名物猪鍋。冷えた身体を芯から解きほぐす世界屈指のカルシウム含有量を誇る「鶴巻温泉」や東丹沢の秘湯「七沢温泉」の厳選名宿5選を徹底特集。",
    "image": "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80",
    "datePublished": "T00:00:00+09:00",
    "dateModified": "T00:00:00+09:00",
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
      "@id": "https://croud-travel.pages.dev/winter-kanagawa-isehara-oyama-afuri-shrine-hatsumode-tofu-tsurumaki-stay"
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
        "name": "神奈川・大山＆伊勢原 冬特集",
        "item": "https://croud-travel.pages.dev/winter-kanagawa-isehara-oyama-afuri-shrine-hatsumode-tofu-tsurumaki-stay"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "冬（11・12・1月）の大山阿夫利神社参拝のアクセス方法とケーブルカー運行は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "大山へのアクセスは、小田急小田原線「伊勢原駅」北口から神奈川中央交通バス「大山ケーブル行き」に乗車し終点まで約30分。終点バス停から江戸情緒残るこま参道を徒歩約15分登ると「大山ケーブル駅」に到着します。大山ケーブルカーを利用すれば約6分で標高約700mの「阿夫利神社駅（下社）」に到着できます。正月三が日は早朝から特別運行が行われ、初日の出参拝にも対応しています。下社から山頂本社（標高1,252m）までは約90分の本格的な登山道となるため、山頂を目指す場合はアイゼンや防寒登山装備が必要です。"
        }
      },
      {
        "@type": "Question",
        "name": "大山阿夫利神社下社からの冬の眺望「ミシュラン二つ星」の見どころは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "大山阿夫利神社下社の境内展望デッキからの眺望は、『ミシュラン・グリーンガイド・ジャポン』で二つ星（寄り道する価値がある）として評価されています。冬場は空気が非常に澄み渡り、眼下に広がる相模平野から相模湾、江の島、三浦半島、さらには遠く房総半島や伊豆大島までを一望するパノラマが広がります。特に早朝の初日の出や、夕暮れ時に茜色に染まる相模湾の海原は息を呑む絶景です。"
        }
      },
      {
        "@type": "Question",
        "name": "大山名物の「大山豆腐」が美味しい理由とおすすめの食べ方は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "大山は古くから雨乞いの山として信仰され、山中にはミネラル分を豊富に含んだ清冽な伏流水が湧き出ています。この良質な名水と厳選大豆を用いて作られたのが「大山豆腐」です。大山詣りの宿坊で参拝客に振る舞われた精進料理が起源で、きめ細やかで大豆本来の甘みが強いのが特徴。冬は昆布出汁でシンプルに温める「湯豆腐」や、豆乳仕立ての鍋、香ばしい焼き田楽、手作り生湯葉が絶品です。こま参道沿いや門前町に名店が点在しています。"
        }
      },
      {
        "@type": "Question",
        "name": "大山参拝の後に立ち寄れる「鶴巻温泉」「七沢温泉」の特徴と泉質の違いは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "大山の南東麓に位置する「鶴巻温泉」は、カルシウムイオンの含有量が極めて多く、世界有数のカルシウム含有温泉として知られています。湯冷めしにくく保温効果が持続するため、冬の冷え性や神経痛の緩和に優れています。一方、大山東麓の渓谷に位置する「七沢温泉・広沢寺温泉」は、pH9.5〜10を超える全国トップクラスの強アルカリ性温泉。とろりとした化粧水のような肌触りで古い角質を落とす「日本屈指の美肌の湯」として女性や温泉ファンに絶大な支持を得ています。"
        }
      },
      {
        "@type": "Question",
        "name": "冬の大山詣り・初詣の服装とマイカー利用時の注意点は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "大山阿夫利神社下社周辺は標高約700mあり、平野部（伊勢原駅周辺）よりも気温が約4〜5度低くなります。冬の防寒対策として風を通さないアウター、マフラー、手袋の着用が必須です。こま参道は362段の階段が続くため、歩きやすいスニーカーを選んでください。マイカーでアクセスする場合、東名厚木ICや新東名伊勢原大山ICが便利ですが、初詣期間のこま参道周辺駐車場（市営第1・第2駐車場）は早朝から満車になります。伊勢原駅周辺のコインパーキングに駐車し、路線バスを利用するパーク＆ライドが賢明です。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "元湯　陣屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/192432/192432.jpg",
              rating: 4.73,
              reviews: 11,
              price: "¥75,000〜",
              access: "電車で新宿から約６０分鶴巻温泉駅から徒歩約５分 新東名高速道路 伊勢原大山ＩＣより約１２分",
              special: "１万坪の広大な敷地に客室数１６部屋　静寂の中でお過ごしいただける非日常を是非体感ください",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F192432%2F192432.html",
              story: "小田急線鶴巻温泉駅から徒歩4分、一万坪に及ぶ広大な日本庭園に抱かれた名門宿「元湯 陣屋」。将棋や囲碁の名人戦・竜王戦など数々の世紀の対局舞台として歴史を刻んできた格式高い温泉旅館です。敷地内に自噴する源泉はカルシウム含有量が極めて高く、冬の冷えた身体の芯まで熱を届け、肌をなめらかに整えます。冬の会席料理は、料理長自らが厳選した相模湾の冬魚や幻の黒毛和牛、丹沢の冬野菜を贅沢に仕立て、庭園の雪景色や冬木立を望む客室で至高の寛ぎを約束します。",
              roomTip: "露天風呂付き離れ客室「松風」または庭園ビュー和洋室。檜の香るプライベート露天風呂で誰にも邪魔されない至福の冬籠り。",
              gourmetTip: "「陣屋特選 会席料理」。冬の相模湾で獲れた寒平目のお造り、特選黒毛和牛の炭火焼き、名水仕立ての滋味あふれる季節の鍋。",
              highlights: [
                "一万坪の名園と将棋名人戦舞台の格式・カルシウム世界有数の名湯「鶴巻温泉」" ,
                "客室露天風呂付き離れで至極のプライベートステイ・相模湾鮮魚と黒毛和牛会席" ,
                "小田急線鶴巻温泉駅徒歩4分の至便なアクセス・都会の喧騒を忘れさせる別天地"
              ]
            },
            {
              id: 2,
              name: "ホテルルートイン伊勢原大山インター　－国道２４６号－",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/148996/148996.jpg",
              rating: 4.07,
              reviews: 1595,
              price: "¥4,200〜",
              access: "新東名伊勢原大山ICより車で5分/東名厚木ICより車で18分/小田急線「伊勢原駅北口」鶴巻温泉駅行バス8分「神戸」下車",
              special: "ラジウム人工温泉大浴場・ランドリー完備■朝食バイキング・駐車場無料■WOWOW全室視聴無料■",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F148996%2F148996.html",
              story: "新東名高速道路・伊勢原大山ICから車で約5分、国道246号沿いに位置し、大山へのアクセス拠点として抜群の機動力を誇る「ホテルルートイン伊勢原大山インター」。大山ケーブルカー駅行きの神奈川中央交通バス乗り場へのアクセスもスムーズです。館内にはラジウム人工温泉大浴殿「旅人の湯」を完備し、大山登山や初詣の疲労を足を伸ばして癒やすことができます。全室無料Wi-Fiや空気清浄機、無料バイキング朝食が備わり、清潔感と機能性を求める旅行者に選ばれています。",
              roomTip: "コンフォートルーム（ダブルまたはツイン）。エアウィーヴマットレスを導入し、参拝前後の良質な睡眠をサポートする快適客室。",
              gourmetTip: "無料バイキング朝食の焼きたてクロワッサンや温かいお味噌汁、夕食には館内レストラン「花々亭」で味わう温かい麺類や定食。",
              highlights: [
                "新東名伊勢原大山IC車5分の抜群アクセス・大山初詣やドライブ登山に最適な好立地" ,
                "ラジウム人工温泉大浴場完備・無料バイキング朝食と清潔な客室で抜群のコスパ" ,
                "全室Wi-Fi＆加湿空気清浄機完備・身軽な参拝やソロ旅・ビジネスにもジャストフィット"
              ]
            },
            {
              id: 3,
              name: "七沢温泉　福元館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/141309/141309.jpg",
              rating: 3.63,
              reviews: 230,
              price: "¥15,950〜",
              access: "小田急線本厚木駅よりお車で約30分（バス：広沢寺温泉行にて約３０分「高旗観音バス停」下車すぐ）",
              special: "【ご予約好評受付中】名湯100選！美肌の湯が人気★ｐH9.9【福元館】",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F141309%2F141309.html",
              story: "東丹沢・七沢温泉の奥静かな渓流沿いに佇み、創業160年を超える老舗旅館「七沢温泉 福元館」。文豪・川端康成や作家・小林多喜二が逗留して筆を執った文学ゆかりの名宿としても知られています。強アルカリ性（pH約9.8）を誇る天然温泉は「美肌の湯」として名高く、とろりとした湯ざわりが冬の乾燥した肌をしっとり潤します。冬の名物は丹沢の山々が育んだ天然猪肉を用いた「ぼたん鍋」。特製味噌と根菜の出汁で煮込む熱々の鍋が、旅情を温かく彩ります。",
              roomTip: "大正浪漫の面影を残す和室「川端康成逗留の部屋」ゆかりの客室。障子越しに冬の清流・玉川のせせらぎを聞きながら過ごす静謐な時間。",
              gourmetTip: "「名物ぼたん鍋会席」。臭みのない上質な丹沢産猪肉を赤味噌ベースの秘伝出汁で煮込み、冬の山菜や地酒とともに味わう郷土の極み。",
              highlights: [
                "創業160年文豪川端康成ゆかりの宿・pH約9.8の強アルカリ美肌温泉と名物ぼたん鍋" ,
                "清流玉川沿いの情緒ある純和風客室・臭みのない丹沢産猪肉を煮込む極上味噌鍋" ,
                "文学の香りが漂うレトロな館内・冬の丹沢の自然林に抱かれた素朴で温かなもてなし"
              ]
            },
            {
              id: 4,
              name: "七扇　ｎａｎａｏｕｇｉ（旧：盛楽苑）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/129624/129624.jpg",
              rating: 4.39,
              reviews: 304,
              price: "¥17,000〜",
              access: "本厚木駅より徒歩３分→厚木バスセンター。９番線七沢行きにて約２５分→七沢病院入り口。徒歩約７分→七扇。",
              special: "大切な人と、特別な時間を・・・　全８部屋　露天風呂付きデザイナーズ客室と美肌湯。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129624%2F129624.html",
              story: "七沢温泉の高台に位置し、和モダンなデザイナーズ空間と源泉かけ流しの露天風呂が調和する上質宿「七扇 nanaougi（旧：盛楽苑）」。全室が洗練された設えで、静寂とプライベート感を最優先した大人の隠れ家リゾートです。美肌成分を豊富に含む強アルカリ温泉を、趣異なる貸切露天風呂や客室露天風呂で心ゆくまで堪能。夕食には地元神奈川のやまゆり牛や相模湾の新鮮な魚介、採れたての丹沢野菜を活かした創作和会席が並び、新年の記念日旅行に格別の彩りを添えます。",
              roomTip: "露天風呂付き和洋室。冬の澄んだ夜空の星々を眺めながら、自分たちだけのプライベートな源泉かけ流し湯を味わう贅沢空間。",
              gourmetTip: "「季節のモダン創作会席」。神奈川県産やまゆり牛のローストや、冬旬の地魚のカルパッチョ、丹沢名水仕込みの繊細な前菜盛り合わせ。",
              highlights: [
                "和モダンのデザイナーズ空間・客室露天風呂や貸切露天で満喫する源泉かけ流し" ,
                "神奈川県産やまゆり牛と相模湾海の幸の創作料理・大人の記念日旅に選ばれる隠れ家" ,
                "全館が静けさに包まれたラグジュアリーな時間・冬の澄んだ星空を眺める湯浴み"
              ]
            },
            {
              id: 5,
              name: "玉翠楼",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/53230/53230.jpg",
              rating: 4.40,
              reviews: 7,
              price: "¥16,500〜",
              access: "小田急線　本厚木駅から神奈中バス９番線より「七沢・広沢寺温泉行」終点下車。",
              special: "秘伝熟味名物猪鍋の宿。肌ざわり滑らかな強アルカリ美人の湯・子宝の湯を湛える癒し隠れ里の純日本風一軒宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53230%2F53230.html",
              story: "大山の東麓、広沢寺温泉の最奥に一軒宿として佇む「玉翠楼（ぎょくすいろう）」。七沢温泉郷の中でもとりわけ高い強アルカリ性（pH10以上）を誇る名湯を有し、その圧倒的なトロトロ感から「東丹沢の秘湯」「化粧水のような湯」と絶賛されています。冬の時期には野趣あふれる露天風呂の湯けむりが山肌に立ち上り、渓谷の冬景色を望む野趣あふれる湯浴みが楽しめます。名物の猪鍋をはじめ、大山名水豆腐や鮎料理など、丹沢の素朴で力強い旬の味覚を心行くまで堪能できます。",
              roomTip: "渓流沿いの純和風客室。窓の外に広がる冬の丹沢の自然林と清流の音に包まれ、日常の喧騒から完全に解き放たれる隠れ家空間。",
              gourmetTip: "「元祖・猪鍋と大山名水豆腐料理」。自家製の特製ブレンド味噌で煮込む猪鍋と、大山の清らかな湧水で作られた濃厚な豆腐料理の共演。",
              highlights: [
                "大山東麓の静寂に抱かれる一軒宿・pH10超の東丹沢屈指の強アルカリとろみ湯" ,
                "野趣あふれる渓谷露天風呂・大山名水豆腐と特製味噌仕立ての元祖猪鍋を堪能" ,
                "丹沢の山深く佇む本物の秘湯体験・日常の疲労を芯から洗い流す名湯の滋味"
              ]
            }
  ];

  const faqsData = [
    {
      q: "冬（11・12・1月）の大山阿夫利神社参拝のアクセス方法とケーブルカー運行は？",
      a: "大山へのアクセスは、小田急小田原線「伊勢原駅」北口から神奈川中央交通バス「大山ケーブル行き」に乗車し終点まで約30分。終点バス停から江戸情緒残るこま参道を徒歩約15分登ると「大山ケーブル駅」に到着します。大山ケーブルカーを利用すれば約6分で標高約700mの「阿夫利神社駅（下社）」に到着できます。正月三が日は早朝から特別運行が行われ、初日の出参拝にも対応しています。下社から山頂本社（標高1,252m）までは約90分の本格的な登山道となるため、山頂を目指す場合はアイゼンや防寒登山装備が必要です。"
    },
    {
      q: "大山阿夫利神社下社からの冬の眺望「ミシュラン二つ星」の見どころは？",
      a: "大山阿夫利神社下社の境内展望デッキからの眺望は、『ミシュラン・グリーンガイド・ジャポン』で二つ星（寄り道する価値がある）として評価されています。冬場は空気が非常に澄み渡り、眼下に広がる相模平野から相模湾、江の島、三浦半島、さらには遠く房総半島や伊豆大島までを一望するパノラマが広がります。特に早朝の初日の出や、夕暮れ時に茜色に染まる相模湾の海原は息を呑む絶景です。"
    },
    {
      q: "大山名物の「大山豆腐」が美味しい理由とおすすめの食べ方は？",
      a: "大山は古くから雨乞いの山として信仰され、山中にはミネラル分を豊富に含んだ清冽な伏流水が湧き出ています。この良質な名水と厳選大豆を用いて作られたのが「大山豆腐」です。大山詣りの宿坊で参拝客に振る舞われた精進料理が起源で、きめ細やかで大豆本来の甘みが強いのが特徴。冬は昆布出汁でシンプルに温める「湯豆腐」や、豆乳仕立ての鍋、香ばしい焼き田楽、手作り生湯葉が絶品です。こま参道沿いや門前町に名店が点在しています。"
    },
    {
      q: "大山参拝の後に立ち寄れる「鶴巻温泉」「七沢温泉」の特徴と泉質の違いは？",
      a: "大山の南東麓に位置する「鶴巻温泉」は、カルシウムイオンの含有量が極めて多く、世界有数のカルシウム含有温泉として知られています。湯冷めしにくく保温効果が持続するため、冬の冷え性や神経痛の緩和に優れています。一方、大山東麓の渓谷に位置する「七沢温泉・広沢寺温泉」は、pH9.5〜10を超える全国トップクラスの強アルカリ性温泉。とろりとした化粧水のような肌触りで古い角質を落とす「日本屈指の美肌の湯」として女性や温泉ファンに絶大な支持を得ています。"
    },
    {
      q: "冬の大山詣り・初詣の服装とマイカー利用時の注意点は？",
      a: "大山阿夫利神社下社周辺は標高約700mあり、平野部（伊勢原駅周辺）よりも気温が約4〜5度低くなります。冬の防寒対策として風を通さないアウター、マフラー、手袋の着用が必須です。こま参道は362段の階段が続くため、歩きやすいスニーカーを選んでください。マイカーでアクセスする場合、東名厚木ICや新東名伊勢原大山ICが便利ですが、初詣期間のこま参道周辺駐車場（市営第1・第2駐車場）は早朝から満車になります。伊勢原駅周辺のコインパーキングに駐車し、路線バスを利用するパーク＆ライドが賢明です。"
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
      <header className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-teal-950 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-teal-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Snowflake className="w-4 h-4 text-teal-300" />
            <span>関東・神奈川 湘南・東丹沢 冬の特別紀行（11月・12月・1月）</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 font-journal-serif">
            「大山阿夫利神社」新春初詣と相模湾冬パノラマ！<br className="hidden md:inline" />
            名水大山豆腐料理＆名湯「鶴巻・七沢温泉」厳選名宿5選
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mb-6">
            新宿駅から小田急ロマンスカーで伊勢原まで約50分。古代より「雨降山（あふりやま）」として水の神・山の神を祀り、江戸時代には庶民の爆発的なブームとなった日本遺産「大山詣り」。11〜1月の冬期は、大気中の湿度が劇的に下がり、阿夫利神社下社から見渡す相模湾・江の島・三浦半島・房総半島の大パノラマがミシュラン二つ星の輝きを放ちます。名水で仕立てる熱々大山豆腐会席、丹沢の野趣あふれるぼたん鍋。そして世界屈指の名湯・鶴巻温泉や東丹沢屈指のとろみ湯・七沢温泉の名旅館へご案内します。
          </p>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-slate-200">
            <span className="bg-teal-950/70 border border-teal-800/60 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Mountain className="w-4 h-4 text-teal-400" /> 大山阿夫利神社（日本遺産・相模湾一望の新春初詣）
            </span>
            <span className="bg-teal-950/70 border border-teal-800/60 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Sunrise className="w-4 h-4 text-teal-400" /> ミシュラン二つ星の眺望＆江の島・相模湾パノラマ
            </span>
            <span className="bg-teal-950/70 border border-teal-800/60 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-teal-400" /> 大山名水豆腐会席＆鶴巻・七沢温泉の極上美肌湯
            </span>
          </div>
        </div>
      </header>

      {/* Summary Box */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
          <div className="flex items-center gap-2 text-teal-700 font-bold text-lg mb-4">
            <Sparkles className="w-5 h-5 text-teal-600" />
            <h2>大山・伊勢原・丹沢 冬旅のハイライト（11・12・1月）</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm leading-relaxed text-slate-600">
            <div className="border-l-2 border-teal-500 pl-4">
              <h3 className="font-bold text-slate-900 mb-1">大山阿夫利神社の新春初詣</h3>
              <p>崇神天皇の御代（紀元前97年）創祀とされる古社。下社境内から見下ろす相模平野と相模湾の水平線、冬の澄んだ大気の中で新年の開運・厄除けを祈願できます。</p>
            </div>
            <div className="border-l-2 border-amber-500 pl-4">
              <h3 className="font-bold text-slate-900 mb-1">大山名水仕込みの極上豆腐料理</h3>
              <p>大山の清冽な伏流水が大豆の甘みを引き出す伝統豆腐。冬の熱々湯豆腐や湯葉、ごま豆腐、さらに丹沢の山野で獲れた猪肉のぼたん鍋で身体を芯から温めます。</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4">
              <h3 className="font-bold text-slate-900 mb-1">鶴巻・七沢の名湯で湯治ステイ</h3>
              <p>カルシウム豊富な名湯・鶴巻温泉「元湯 陣屋」や、pH9.8超の強アルカリとろとろ美肌湯・七沢温泉。冬の冷えた身体を贅沢に包み込む極上の湯浴みが待っています。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Guide Section 1 */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-10">
          <span className="text-teal-600 font-bold text-sm tracking-widest uppercase">HERITAGE & VIEWS</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1 mb-4 font-journal-serif">
            江戸庶民を魅了した「大山詣り」と冬の絶景パノラマ
          </h2>
          <div className="w-16 h-1 bg-teal-500 rounded-full mb-6" />
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base md:text-lg space-y-6">
          <p>
            丹沢大山国定公園の東端に凛と聳える霊峰・大山（標高1,252m）。三角形の美しい山容は遠く相模湾を航行する船からも望むことができ、古代より航海安全の目印や雨乞いの神として崇められてきました。江戸時代には「大山詣り」として講（こう）を結成した江戸庶民がこぞって参拝し、巨大な木太刀（きだち）を担いで登る風習は落語の演目にもなるほどの賑わいを見せました。その歴史文化は現在「日本遺産」にも認定されています。
          </p>
          <p>
            大山の中腹（標高約700m）に鎮座する「大山阿夫利神社下社」は、大山ケーブルカーを利用して手軽に参拝できる聖地です。下社の境内から南東方向を望むパノラマは、国際的な旅行ガイド『ミシュラン・グリーンガイド・ジャポン』において二つ星を獲得した屈指の絶景。特に空気が澄み切る11月下旬から1月の真冬は、相模平野の街並みはもちろん、陽光に輝く相模湾の水平線、江の島のシルエット、三浦半島、さらには遠く房総半島の山並みまでが鮮やかに見渡せます。元旦には水平線から昇る初日の出を拝むため多くの参拝者が集い、厳かな光に包まれます。
          </p>
          <p>
            下社本殿の地下からは、大山名水の源泉である御神水「神泉（しんせん）」がこんこんと湧き出しており、参拝者はこの清らかな名水を汲んで持ち帰ることができます。また境内には絶景カフェ「茶寮 石尊（さりょう せきそん）」が併設され、ミシュラン二つ星の海景色を眺めながら、大山名水で丁寧に淹れたドリップコーヒーや特製升ティラミスを堪能できる憩いの空間として絶大な人気を誇ります。
          </p>
          <p>
            また、大山ケーブルカーの中間駅近くには、関東三大不動の一つに数えられる「雨降山 大山寺」が佇みます。奈良時代（755年）に良弁僧正によって開山された古刹で、本尊の国重要文化財「鉄造不動明王」の迫力ある尊容は一見の価値があります。冬になると参道の石段は凛とした静寂に包まれ、木肌の隙間から差し込む冬の日差しが古刹の佇まいを幻想的に照らし出します。
          </p>
        </div>
      </section>

      {/* Detailed Guide Section 2: Gourmet & Hot Spring */}
      <section className="bg-slate-100 py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-amber-600 font-bold text-sm tracking-widest uppercase">FOOD & SPA CULTURE</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1 mb-4 font-journal-serif">
              名水が育む大山豆腐と丹沢温泉郷の極上湯浴み
            </h2>
            <div className="w-16 h-1 bg-amber-500 rounded-full mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700 leading-relaxed">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-lg mb-3">
                <Utensils className="w-5 h-5 text-amber-600" />
                <h3>大山名水豆腐会席と冬のぼたん鍋</h3>
              </div>
              <p className="text-sm md:text-base mb-4">
                大山山麓に点在する宿坊や料亭で受け継がれてきた「大山豆腐」。大山から湧き出るミネラル豊富な清冽な伏流水と良質な国産大豆、天然にがりを用いて丁寧に仕立てられます。
              </p>
              <p className="text-sm md:text-base">
                冬の看板料理は、昆布出汁の湯気の中で大豆の甘みがふくよかに広がる熱々の「湯豆腐」。自家製ポン酢や薬味とともに味わうと、大豆本来の滋味深さが身体中に染み渡ります。さらに、東丹沢の山林で獲れた良質な猪肉を使った「ぼたん鍋」も冬の定番。特製ブレンド味噌とゴボウ・長ネギなどの根菜が猪肉の甘い脂を引き立て、心までぽかぽかに温めてくれます。
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 text-teal-700 font-bold text-lg mb-3">
                <Waves className="w-5 h-5 text-teal-600" />
                <h3>世界有数のカルシウム泉・鶴巻と美肌の七沢温泉</h3>
              </div>
              <p className="text-sm md:text-base mb-4">
                大山参拝の後に必ず立ち寄りたいのが、山麓に湧く名湯の数々です。鶴巻温泉は、国内のみならず世界的にも稀有なカルシウムイオン含有量を誇る名湯。湯に浸かると体の芯まで熱が伝わり、湯上がり後も長時間ポカポカが持続します。
              </p>
              <p className="text-sm md:text-base">
                一方、大山東麓の深い緑に抱かれた七沢温泉・広沢寺温泉は、pH9.5〜10を超える驚異の強アルカリ性温泉。石鹸のように滑らかな湯が肌の古い角質を洗い流し、しっとりすべすべの素肌へ導きます。冬の冷涼な空気の中、露天風呂から丹沢の渓流や木立を望む湯浴みは、都会のストレスを一瞬で忘れさせてくれます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Course Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-10">
          <span className="text-teal-600 font-bold text-sm tracking-widest uppercase">RECOMMENDED ITINERARY</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1 mb-4 font-journal-serif">
            大山新春初詣＆名湯名宿 1泊2日 モデルコース
          </h2>
          <div className="w-16 h-1 bg-teal-500 rounded-full mb-6" />
        </div>

        <div className="relative border-l-2 border-teal-200 ml-4 md:ml-6 pl-6 md:pl-8 space-y-8 text-sm md:text-base">
          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-teal-600 tracking-wider">DAY 1 / 10:00</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">小田急伊勢原駅到着＆こま参道散策</h3>
            <p className="text-slate-600 mt-1">
              ロマンスカーで伊勢原駅に到着後、路線バスで大山ケーブルバス停へ。362段の階段が続く情緒あふれる「こま参道」を散策。名物の大山こまやきゃらぶき、豆腐菓子を眺めながら大山ケーブル駅へ。
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-teal-600 tracking-wider">DAY 1 / 11:30</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">大山阿夫利神社下社で初詣＆ミシュラン二つ星絶景</h3>
            <p className="text-slate-600 mt-1">
              ケーブルカーで下社へ。本殿で新年の心願成就を祈願。境内展望デッキから冬晴れの相模湾・江の島パノラマを堪能。境内カフェ「茶寮 石尊」で名水抹茶やスイーツを味わいながら絶景を一服。
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-teal-600 tracking-wider">DAY 1 / 13:30</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">大山寺参拝と門前町の大山豆腐ランチ</h3>
            <p className="text-slate-600 mt-1">
              ケーブルカーまたは男坂・女坂経由で大山寺へ。重厚な鉄造不動明王を拝観。下山後、門前町の老舗料亭で名水「大山豆腐会席」の湯豆腐や生湯葉を堪能。
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-teal-600 tracking-wider">DAY 1 / 16:00</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">鶴巻温泉「元湯 陣屋」または七沢温泉チェックイン</h3>
            <p className="text-slate-600 mt-1">
              車またはバス・電車で鶴巻温泉または七沢温泉へ。名門「元湯 陣屋」の広大な日本庭園や、「七扇」「福元館」の露天風呂で至極の美肌湯に浸かる。夕食は相模湾の冬魚や丹沢名物ぼたん鍋に舌鼓。
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-sm" />
            <span className="text-xs font-bold text-teal-600 tracking-wider">DAY 2 / 10:00</span>
            <h3 className="font-bold text-slate-900 text-lg mt-0.5">東丹沢の渓谷散策＆地酒・名産品巡り</h3>
            <p className="text-slate-600 mt-1">
              朝の清々しい温泉を愉しんだ後、広沢寺温泉周辺の渓谷を冬散歩。伊勢原や秦野の酒蔵、直売所で丹沢名水仕込みの地酒や採れたて冬野菜、大山豆腐をお土産に購入して帰路へ。
            </p>
          </div>
        </div>
      </section>

      {/* Hotel Recommendation Section */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-teal-400 font-bold text-sm tracking-widest uppercase">HOTEL & RYOKAN SELECTION</span>
            <h2 className="text-2xl md:text-4xl font-black mt-2 mb-4 font-journal-serif">
              大山初詣・丹沢冬旅に選ばれる厳選名宿5選
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              楽天トラベルAPIから最新の空室状況・宿泊プラン・宿泊者評価を直接取得。将棋名人戦舞台の老舗名門旅館から東丹沢の秘湯、インター直結の機能派ホテルまで厳選しました。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 md:p-8 backdrop-blur shadow-2xl hover:border-teal-500/50 transition-all duration-300"
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
                        <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-teal-400 border border-teal-400/30">
                          厳選宿 #{hotel.id}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
                        <span className="flex items-center gap-1 text-amber-400 font-bold">
                          <Star className="w-4 h-4 fill-amber-400" /> {hotel.rating}
                        </span>
                        <span>クチコミ {hotel.reviews.toLocaleString()}件</span>
                        <span className="text-teal-300 font-bold">{hotel.price}</span>
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
                        className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-center block transition shadow-lg shadow-teal-900/30 text-sm"
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
                            <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tips Boxes */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                        <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-700/50">
                          <span className="text-teal-400 font-bold block mb-1">【客室の選び方】</span>
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
                        className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-center block transition shadow-lg shadow-teal-900/30 text-sm"
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
          <span className="text-teal-600 font-bold text-sm tracking-widest uppercase">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1 mb-3 font-journal-serif">
            冬の大山初詣・丹沢温泉 よくある質問
          </h2>
          <div className="w-16 h-1 bg-teal-500 rounded-full mx-auto" />
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqsData.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-start gap-2">
                <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded font-black shrink-0 mt-0.5">Q</span>
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
              href="/winter-tokyo-takao-yakuoin-shrine-hatsumode-fuji-tororo-soba-stay"
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-teal-500 transition hover:shadow-md group block"
            >
              <div className="text-teal-600 font-bold text-xs mb-1">東京・高尾山＆八王子</div>
              <div className="font-bold text-slate-900 group-hover:text-teal-600 transition mb-2">
                高尾山薬王院新春初詣とダイヤモンド富士・自然薯とろろそば＆極楽湯
              </div>
              <p className="text-xs text-slate-500 line-clamp-2">
                大山と並び立つ関東屈指の霊峰・高尾山。冬至前後のダイヤモンド富士と天狗信仰、名物とろろそばと温泉を満喫。
              </p>
            </Link>

            <Link 
              href="/winter-kanagawa-kamakura-enoshima-jewel-shrine-fuji-stay"
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-teal-500 transition hover:shadow-md group block"
            >
              <div className="text-teal-600 font-bold text-xs mb-1">神奈川・鎌倉＆江の島</div>
              <div className="font-bold text-slate-900 group-hover:text-teal-600 transition mb-2">
                鶴岡八幡宮初詣と江の島「湘南の宝石」イルミネーション・葉山牛名宿
              </div>
              <p className="text-xs text-slate-500 line-clamp-2">
                大山山頂からも望む相模湾の宝石・江の島と古都鎌倉。冬の澄んだ光のアートと新春の祈願を巡る定番特集。
              </p>
            </Link>

            <Link 
              href="/winter-kanagawa-hakone-yumoto-ashinoko-shrine-fuji-stay"
              className="bg-white p-4 rounded-xl border border-slate-200 hover:border-teal-500 transition hover:shadow-md group block"
            >
              <div className="text-teal-600 font-bold text-xs mb-1">神奈川・箱根＆芦ノ湖</div>
              <div className="font-bold text-slate-900 group-hover:text-teal-600 transition mb-2">
                箱根神社新春初詣と芦ノ湖の冬富士・湯本温泉名湯と極上会席
              </div>
              <p className="text-xs text-slate-500 line-clamp-2">
                小田急線沿線のもう一つの大聖地・箱根。芦ノ湖に浮かぶ平和の鳥居と富士の絶景、名湯温泉街を味わい尽くす。
              </p>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-600">
            <Link href="/" className="hover:text-teal-600 underline">ホーム</Link>
            <span>•</span>
            <Link href="/features" className="hover:text-teal-600 underline">特集一覧</Link>
            <span>•</span>
            <Link href="/posts" className="hover:text-teal-600 underline">記事一覧カタログ</Link>
          </div>
        
      <HubRelatedPosts currentSlug="winter-kanagawa-isehara-oyama-afuri-shrine-hatsumode-tofu-tsurumaki-stay" />
</div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-4 text-center text-xs">
        <p>© 2026 旅宿クラウド (croud-travel.pages.dev). All rights reserved.</p>
        <p className="mt-1 text-slate-500">
          ※本記事に掲載している宿泊施設情報、価格、評価、ケーブルカー運行情報等は、楽天トラベルAPIおよび公式サイトの最新データに基づいています。冬期の参拝時間やケーブルカー運行ダイヤは変更となる場合がありますので、お出かけ前にご確認ください。
        </p>
      </footer>
    </article>
  );
}
