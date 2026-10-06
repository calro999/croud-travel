import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月静岡】厄除け大本山「法多山尊永寺」新春初詣と掛川城木造天守！「可睡齋」日本最大級ひなまつり＆遠州夢咲牛名宿5選",
  description: "遠州三山を代表する厄除けの名刹「法多山尊永寺（はったさん）」が約100万人を超える初詣客で賑わう11〜1月の冬旅特集。神聖な杉木立の参道と名物「厄除団子」、曹洞宗の名刹「可睡齋」の冬室内ぼたんと日本最大級32段1,200体の雛人形、日本初の本格木造復元天守「掛川城」の凛とした佇まい、全国和牛共進会で最高賞を受賞した幻の黒毛和牛「遠州夢咲牛」と掛川深蒸し茶。掛川・袋井の滞在拠点に最適な厳選ホテル・名宿5選を徹底解説します。",
  keywords: '法多山 初詣, 法多山 厄除団子, 可睡齋 ひなまつり, 掛川城 冬, 遠州夢咲牛, ドーミーイン掛川, くれたけイン袋井, 遠州三山 冬, 静岡 初詣 温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-shizuoka-kakegawa-fukuroi-hattasan-hatsumode-yumesakigyu-stay/"
  },
  openGraph: {
    title: "【11・12・1月静岡】厄除け大本山「法多山尊永寺」新春初詣と掛川城木造天守！「可睡齋」日本最大級ひなまつり＆遠州夢咲牛名宿5選",
    description: "遠州三山を代表する厄除けの名刹「法多山尊永寺（はったさん）」が約100万人を超える初詣客で賑わう11〜1月の冬旅特集。神聖な杉木立の参道と名物「厄除団子」、曹洞宗の名刹「可睡齋」の冬室内ぼたんと日本最大級32段1,200体の雛人形、日本初の本格木造復元天守「掛川城」の凛とした佇まい、全国和牛共進会で最高賞を受賞した幻の黒毛和牛「遠州夢咲牛」と掛川深蒸し茶。掛川・袋井の滞在拠点に最適な厳選ホテル・名宿5選を徹底解説します。",
    url: 'https://croud-travel.pages.dev/winter-shizuoka-kakegawa-fukuroi-hattasan-hatsumode-yumesakigyu-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の掛川城天守と法多山尊永寺の参道情景'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月静岡】厄除け大本山「法多山尊永寺」新春初詣と掛川城木造天守！「可睡齋」日本最大級ひなまつり＆遠州夢咲牛名宿5選",
    description: "遠州三山を代表する厄除けの名刹「法多山尊永寺（はったさん）」が約100万人を超える初詣客で賑わう11〜1月の冬旅特集。神聖な杉木立の参道と名物「厄除団子」、曹洞宗の名刹「可睡齋」の冬室内ぼたんと日本最大級32段1,200体の雛人形、日本初の本格木造復元天守「掛川城」の凛とした佇まい、全国和牛共進会で最高賞を受賞した幻の黒毛和牛「遠州夢咲牛」と掛川深蒸し茶。掛川・袋井の滞在拠点に最適な厳選ホテル・名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export const dynamic = 'force-static';

export default function ShizuokaKakegawaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月静岡】厄除け大本山「法多山尊永寺」新春初詣と掛川城木造天守！「可睡齋」日本最大級ひなまつり＆遠州夢咲牛名宿5選",
    "description": "遠州三山を代表する厄除けの名刹「法多山尊永寺（はったさん）」が約100万人を超える初詣客で賑わう11〜1月の冬旅特集。神聖な杉木立の参道と名物「厄除団子」、曹洞宗の名刹「可睡齋」の冬室内ぼたんと日本最大級32段1,200体の雛人形、日本初の本格木造復元天守「掛川城」の凛とした佇まい、全国和牛共進会で最高賞を受賞した幻の黒毛和牛「遠州夢咲牛」と掛川深蒸し茶。掛川・袋井の滞在拠点に最適な厳選ホテル・名宿5選を徹底解説します。",
    "image": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&h=630&q=80",
    "datePublished": "2026-10-05T12:00:00+09:00",
    "dateModified": "2026-10-05T12:00:00+09:00",
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
      "@id": "https://croud-travel.pages.dev/winter-shizuoka-kakegawa-fukuroi-hattasan-hatsumode-yumesakigyu-stay"
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
        "name": "静岡・掛川＆袋井 冬特集",
        "item": "https://croud-travel.pages.dev/winter-shizuoka-kakegawa-fukuroi-hattasan-hatsumode-yumesakigyu-stay"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "冬（11・12・1月）の「法多山尊永寺（はったさん）」新春初詣の混雑と名物「厄除団子」の買い方は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "法多山尊永寺は神亀2年（725年）行基菩薩開山と伝わる高野山真言宗の別格本山で、正月三が日には約100万人を超える初詣参拝客が訪れます。名物の「厄除団子」は江戸時代に十三代将軍家定へ献上され「くし団子」と名付けられた伝統菓子で、5本の串に刺さった団子は手足と頭の五体を現し、厄を祓う縁起物として絶大な人気を誇ります。初詣期間中は境内のだんご茶屋に行列ができますが、持ち帰り用窓口と店内飲食窓口が分かれており回転は比較的早めです。混雑回避には、三が日の早朝（午前7〜9時）または夕方16時以降の参拝がおすすめです。"
        }
      },
      {
        "@type": "Question",
        "name": "曹洞宗の名刹「可睡齋（かすいさい）」の冬の見どころ「室内ぼたん園」と「ひなまつり」とは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "袋井市にある可睡齋は徳川家康ゆかりの古刹です。11月下旬〜1月中旬にかけては、冷え込む冬に色鮮やかな大輪を咲かせる「冬咲きぼたん・室内ぼたん園」が開催され、雪除けの藁ぼっちの中で可憐に咲くボタンの花を鑑賞できます。さらに1月1日からは日本最大級の規模を誇る「可睡齋ひなまつり」が開幕。国登録有形文化財の大広間に飾られる高さ約3メートルの巨大な32段飾り・1,200体のおひな様は圧巻の美しさで、新春の風物詩として必見です。"
        }
      },
      {
        "@type": "Question",
        "name": "静岡の誇るブランド黒毛和牛「遠州夢咲牛（えんしゅうゆめさきぎゅう）」の特徴は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "遠州夢咲牛は、御前崎・菊川・掛川などの遠州地域で厳選された素牛を独自の飼料と温暖な気候でじっくり肥育した黒毛和牛です。第8回全国和牛能力共進会（和牛のオリンピック）において内閣総理大臣賞を受賞し日本一に輝いた実績を持ちます。きめ細やかな肉質と融点の低い上質な霜降り脂、噛むほどに広がる赤身の深いコクが特徴で、冬はステーキや陶板焼き、割下仕立てのすき焼き鍋で味わうのが格別です。"
        }
      },
      {
        "@type": "Question",
        "name": "日本初の本格木造復元天守「掛川城」の冬の見どころと見学所要時間は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "掛川城は平成6年（1994年）に日本で初めて戦国時代の工法そのままに木造で復元された名城です。樹齢数百年の青森ヒバなど本物の木材の香りとぬくもりが漂う天守内は、冬の冷たい外気の中でも木の温もりを感じられます。天守最上階からは遠州平野や富士山、天気が良ければ太平洋まで見渡せます。国の重要文化財に指定されている現存の「二の丸御殿」と合わせた見学所要時間は約1時間〜1時間半が目安です。"
        }
      },
      {
        "@type": "Question",
        "name": "東海道新幹線や車を利用した、法多山・可睡齋・掛川城の効率的な冬の周遊アクセスは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "掛川駅は東海道新幹線の停車駅であり、東京・名古屋の両方面から約1時間〜1時間半でダイレクトにアクセスできます。車の場合は東名高速道路「掛川IC」または「袋井IC」を利用します。初詣シーズンのモデルルートとしては、掛川駅を起点にまず掛川城を見学、車または袋井駅からの臨時バスで法多山尊永寺へ向かい初詣と厄除団子を堪能。続いて可睡齋の室内ぼたんとひなまつりを鑑賞し、掛川または袋井の駅前ホテルに宿泊するルートが最も効率的です。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "天然温泉　茶月の湯　ドーミーインＥＸＰＲＥＳＳ掛川（ドーミーイン・御宿野乃　ホテルズグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/141597/141597.jpg",
              rating: 4.46,
              reviews: 1971,
              price: "¥4,987〜",
              access: "ＪＲ　掛川駅より徒歩にて９分",
              special: "お茶とお城の街≪掛川≫　掛川城を望む天然温泉≪茶月の湯≫",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F141597%2F141597.html",
              story: "JR掛川駅北口から徒歩約9分、掛川城の天守を間近に望む好立地に佇む「天然温泉 茶月の湯 ドーミーインEXPRESS掛川」。最上階の13階には掛川市内唯一の天然温泉展望大浴場と高温ドライサウナ・水風呂を完備。澄み渡る冬の夜空の下、ライトアップされた掛川城を露天風呂から見上げる湯浴みは息を呑む贅沢です。客室はシモンズ社製ベッドと加湿空気清浄機を標準装備し、冬の乾燥対策も万全。夜鳴きそばの無料サービスや、掛川名物「茶飯」や深蒸し茶を使った特製朝食小鉢バイキングも宿泊者から絶大な支持を集めています。",
              roomTip: "最上階フロアの掛川城ビュー客室。窓の外に白銀の瓦が輝く掛川城天守の雄姿を独り占めできます。",
              gourmetTip: "「ご当地朝食バイキング」。掛川茶飯に熱々のお出汁をかける茶漬けや、地元野菜の煮物小鉢が朝の体を温めます。",
              highlights: [
                "掛川城を望む最上階天然温泉展望露天風呂＆高温サウナ・夜鳴きそば無料" ,
                "掛川茶飯茶漬けが人気の朝食小鉢バイキング・シモンズベッド完備の上質空間" ,
                "掛川城まで徒歩圏内・冬の城下町散策と法多山初詣のダブル拠点として最高"
              ]
            },
            {
              id: 2,
              name: "掛川グランドホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7752/7752.jpg",
              rating: 3.89,
              reviews: 1543,
              price: "¥4,010〜",
              access: "☆ＪＲ掛川駅南口徒歩１分☆東名高速掛川ICより車５分☆富士山静岡空港より車30分☆エコパより車で15分☆",
              special: "『掛川駅』徒歩1分、『東名掛川IC』車5分、無料駐車場あり。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7752%2F7752.html",
              story: "JR掛川駅南口から徒歩わずか1分、新幹線改札を出てすぐのロータリーに面した「掛川グランドホテル」。シティホテルの気品と充実した設備を誇り、遠州三山巡りや法多山への初詣ドライブの拠点として抜群の信頼を集めています。客室はエレガントで広々とした設計で、静寂の中で上質な睡眠を約束。館内には本格的な日本料理レストラン「掛川桔梗亭」や中国料理「四川飯店」を備え、冬の味覚である遠州夢咲牛の会席料理や旬魚のディナーを優雅に堪能できます。",
              roomTip: "デラックスツイン。ゆとりあるリビングスペースで冬の厚手のコートや参拝の手荷物もゆったり整理。",
              gourmetTip: "「遠州夢咲牛の陶板焼き会席」。上品な甘みのサシがとろける極上肉と、遠州の地酒「開運」のペアリングが至高。",
              highlights: [
                "掛川駅南口徒歩1分・上質なシティホテルで味わう遠州夢咲牛ディナーと地酒「開運」" ,
                "新幹線直結の圧倒的利便性・落ち着いた客室と本格レストラン併設" ,
                "法多山・可睡齋・油山寺の遠州三山ドライブ周遊に最もスムーズな立地"
              ]
            },
            {
              id: 3,
              name: "パレスホテル掛川（ＢＢＨホテルグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13970/13970.jpg",
              rating: 3.83,
              reviews: 673,
              price: "¥6,700〜",
              access: "JR東海道線「掛川駅」より徒歩５分 / 東名高速道路 掛川ICより車で３分　/　エコパ、つま恋より車約10分",
              special: "掛川駅徒歩5分！大浴場（男女入替制）有り！選べる貸出用枕有り！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13970%2F13970.html",
              story: "JR掛川駅南口から徒歩約3分、静かな住宅街の入口に佇む「パレスホテル掛川（BBHホテルグループ）」。最上階には男女別の展望大浴場とサウナを備えており、冬の法多山参拝や掛川城散策で冷え切った身体を手足を伸ばして温められます。無料のマッサージチェアコーナーや充実のウェルカムドリンクサービスも旅人の心を和ませます。全室に無料Wi-Fi、個別空調を完備し、出張から夫婦・家族旅行まで幅広く快適にサポートします。",
              roomTip: "展望風呂と同じフロアの上層階客室。湯上がりにすぐお部屋でリラックスできる動線の良さが魅力。",
              gourmetTip: "「和洋朝食バイキング」。温かいお味噌汁と焼きたてパン、静岡名物のしらすや地卵で元気な朝のスタート。",
              highlights: [
                "最上階展望大浴場＆サウナ完備・無料マッサージチェアで参拝の疲れを癒やす" ,
                "無料ウェルカムドリンクサービス・自家用車でも安心の大型駐車場対応" ,
                "リーズナブルな料金で大浴場とサウナが楽しめる安心のBBHグループ"
              ]
            },
            {
              id: 4,
              name: "くれたけインプレミアム袋井駅前",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/179279/179279.jpg",
              rating: 4.28,
              reviews: 951,
              price: "¥4,900〜",
              access: "ＪＲ袋井駅北口から徒歩にて約1分",
              special: "ＪＲ袋井駅北口から徒歩1分☆朝食バイキング無料・男女別浴場あり",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179279%2F179279.html",
              story: "JR袋井駅北口から徒歩わずか1分、法多山尊永寺や可睡齋への参拝アクセスが最もスムーズな「くれたけインプレミアム袋井駅前」。機能美にあふれるスタイリッシュな館内には、旅の疲れを解きほぐす男女別露天風呂付き大浴場を完備。夕方には嬉しい「ハッピーアワー（アルコールやソフトドリンクの無料サービス）」が開催され、冬の夕暮れを優雅に楽しめます。選べる快眠枕サービスやベッドの快適さも評判で、新春の初詣に備えてしっかりと休息をとることができます。",
              roomTip: "コンフォートダブル。幅広ベッドでゆったり寛げ、冬のカップル旅行や一人旅の参拝拠点に最適。",
              gourmetTip: "「充実の無料朝食ビュッフェ」。日替わりの温かい手作り総菜と炊きたてご飯、具だくさんスープで活力十分。",
              highlights: [
                "袋井駅北口徒歩1分・法多山や可睡齋への直通アクセス抜群＆露天付き大浴場完備" ,
                "夕方のハッピーアワードリンク無料サービス・選べる快眠枕で充実のステイ" ,
                "袋井駅前発の法多山臨時バス停にも近く初詣渋滞を回避しやすい"
              ]
            },
            {
              id: 5,
              name: "ホテル玄　掛川",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/37470/37470.jpg",
              rating: 4.50,
              reviews: 2326,
              price: "¥3,040〜",
              access: "掛川駅(JR新幹線、東海道本線、天竜浜名湖鉄道)より徒歩3分／東名高速道路 掛川ICより車で約5分",
              special: "朝食・駐車場・ランドリー・マンガコーナーなど無料サービス多彩！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37470%2F37470.html",
              story: "JR掛川駅南口から徒歩約1分、無料朝食とこだわりの設備で高評価レビューを誇る「ホテル玄 掛川」。全室にエアウィーヴ製マットレスパッドを導入しており、冬の長距離移動や石段の多い寺社参拝の疲労を朝までにすっきりと癒やしてくれます。朝食には地元契約農家から届く新鮮卵や炊きたてのご飯、温かいお惣菜が毎日手作りで提供され、出立前の活力を充填。フロントでの親切な周辺観光・初詣ルート案内も好評です。",
              roomTip: "シングルまたはダブルルーム。エアウィーヴの包み込まれるような寝心地で朝まで熟睡を約束。",
              gourmetTip: "「毎朝手作りの温かい朝食」。温かいお味噌汁と手作り煮物、名物卵かけご飯で冬の朝を活動的にスタート。",
              highlights: [
                "全室エアウィーヴ導入で極上の睡眠環境・手作り無料朝食と親切なフロント対応" ,
                "掛川駅南口徒歩1分・コストパフォーマンス抜群で一人旅から夫婦旅まで大人気" ,
                "清潔感あふれる快適客室と温かいおもてなしで高評価レビュー多数"
              ]
            }
  ];

  const faqsData = [
    {
      q: "冬（11・12・1月）の「法多山尊永寺（はったさん）」新春初詣の混雑と名物「厄除団子」の買い方は？",
      a: "法多山尊永寺は神亀2年（725年）行基菩薩開山と伝わる高野山真言宗の別格本山で、正月三が日には約100万人を超える初詣参拝客が訪れます。名物の「厄除団子」は江戸時代に十三代将軍家定へ献上され「くし団子」と名付けられた伝統菓子で、5本の串に刺さった団子は手足と頭の五体を現し、厄を祓う縁起物として絶大な人気を誇ります。初詣期間中は境内のだんご茶屋に行列ができますが、持ち帰り用窓口と店内飲食窓口が分かれており回転は比較的早めです。混雑回避には、三が日の早朝（午前7〜9時）または夕方16時以降の参拝がおすすめです。"
    },
    {
      q: "曹洞宗の名刹「可睡齋（かすいさい）」の冬の見どころ「室内ぼたん園」と「ひなまつり」とは？",
      a: "袋井市にある可睡齋は徳川家康ゆかりの古刹です。11月下旬〜1月中旬にかけては、冷え込む冬に色鮮やかな大輪を咲かせる「冬咲きぼたん・室内ぼたん園」が開催され、雪除けの藁ぼっちの中で可憐に咲くボタンの花を鑑賞できます。さらに1月1日からは日本最大級の規模を誇る「可睡齋ひなまつり」が開幕。国登録有形文化財の大広間に飾られる高さ約3メートルの巨大な32段飾り・1,200体のおひな様は圧巻の美しさで、新春の風物詩として必見です。"
    },
    {
      q: "静岡の誇るブランド黒毛和牛「遠州夢咲牛（えんしゅうゆめさきぎゅう）」の特徴は？",
      a: "遠州夢咲牛は、御前崎・菊川・掛川などの遠州地域で厳選された素牛を独自の飼料と温暖な気候でじっくり肥育した黒毛和牛です。第8回全国和牛能力共進会（和牛のオリンピック）において内閣総理大臣賞を受賞し日本一に輝いた実績を持ちます。きめ細やかな肉質と融点の低い上質な霜降り脂、噛むほどに広がる赤身の深いコクが特徴で、冬はステーキや陶板焼き、割下仕立てのすき焼き鍋で味わうのが格別です。"
    },
    {
      q: "日本初の本格木造復元天守「掛川城」の冬の見どころと見学所要時間は？",
      a: "掛川城は平成6年（1994年）に日本で初めて戦国時代の工法そのままに木造で復元された名城です。樹齢数百年の青森ヒバなど本物の木材の香りとぬくもりが漂う天守内は、冬の冷たい外気の中でも木の温もりを感じられます。天守最上階からは遠州平野や富士山、天気が良ければ太平洋まで見渡せます。国の重要文化財に指定されている現存の「二の丸御殿」と合わせた見学所要時間は約1時間〜1時間半が目安です。"
    },
    {
      q: "東海道新幹線や車を利用した、法多山・可睡齋・掛川城の効率的な冬の周遊アクセスは？",
      a: "掛川駅は東海道新幹線の停車駅であり、東京・名古屋の両方面から約1時間〜1時間半でダイレクトにアクセスできます。車の場合は東名高速道路「掛川IC」または「袋井IC」を利用します。初詣シーズンのモデルルートとしては、掛川駅を起点にまず掛川城を見学、車または袋井駅からの臨時バスで法多山尊永寺へ向かい初詣と厄除団子を堪能。続いて可睡齋の室内ぼたんとひなまつりを鑑賞し、掛川または袋井の駅前ホテルに宿泊するルートが最も効率的です。"
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
      <header className="relative bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-800 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-emerald-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Sunrise className="w-4 h-4 text-emerald-300" />
            <span>遠州・静岡 冬の特別紀行（11月・12月・1月）</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 font-journal-serif">
            厄除け大本山「法多山尊永寺」新春初詣と掛川城木造天守<br className="hidden md:inline" />
            可睡齋ひなまつり＆幻の黒毛和牛「遠州夢咲牛」名宿
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mb-6">
            温暖な気候と豊かな自然に恵まれた東海道の要衝・掛川と袋井。遠州三山筆頭「法多山尊永寺」に100万人を超える参拝者が集う11月〜1月の新春シーズン、名物厄除団子の湯気と凛とした杉並木が旅人を迎えます。日本初の木造復元天守・掛川城の気品ある佇まい、可睡齋の日本最大級ひなまつり、そして日本一に輝いた黒毛和牛「遠州夢咲牛」と掛川深蒸し茶の滋味。心晴れやかな新春の遠州旅をご案内します。
          </p>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-slate-200">
            <span className="bg-emerald-900/60 border border-emerald-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-400" /> 法多山尊永寺（厄除け初詣＆厄除団子）
            </span>
            <span className="bg-emerald-900/60 border border-emerald-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Flower2 className="w-4 h-4 text-emerald-400" /> 可睡齋（室内ぼたん＆32段1200体雛人形）
            </span>
            <span className="bg-emerald-900/60 border border-emerald-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-emerald-400" /> 遠州夢咲牛＆掛川深蒸し茶
            </span>
          </div>
        </div>
      </header>

      {/* Summary Box */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0" />
            <span>本特集でわかること（11・12・1月の掛川・袋井旅行の要点）</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
              <span className="font-bold text-emerald-950 block mb-1">① 法多山尊永寺 厄除け初詣</span>
              三が日100万人が集う遠州随一の聖地。五体の厄を祓う名物「厄除団子」の味わい方と混雑を避ける早朝参拝のポイント。
            </div>
            <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
              <span className="font-bold text-emerald-950 block mb-1">② 可睡齋ひなまつり＆冬牡丹</span>
              徳川家康ゆかりの古刹・可睡齋。日本最大級32段1,200体の雛人形と、藁ぼっちに包まれた冬咲きぼたんの可憐な庭園美。
            </div>
            <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
              <span className="font-bold text-emerald-950 block mb-1">③ 木造天守掛川城＆遠州夢咲牛</span>
              日本初の本格木造復元天守・掛川城のヒバの温もり。和牛オリンピック日本一に輝いた「遠州夢咲牛」と掛川深蒸し茶の滋味。
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 py-4 text-xs text-slate-500 flex items-center gap-2">
        <Link href="/" className="hover:text-emerald-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/features" className="hover:text-emerald-800 transition">特集一覧</Link>
        <span>/</span>
        <span className="text-slate-700 font-medium">静岡・掛川＆袋井 冬特集</span>
      </nav>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">

        {/* Section 1: Overview and Atmosphere */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-emerald-100 text-emerald-900 rounded-xl">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block">ENSHU SPIRIT & HERITAGE</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                千古の古刹に新春の鐘が響き、東海の名城が冬空に白銀の天守を誇る
              </h2>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              静岡県の西部に位置する遠州地方は、冬期でも日照時間が全国トップクラスを誇り、澄み切った青空「遠州晴れ」が広がる穏やかな風土に恵まれています。その中で掛川と袋井は、東海道五十三次の宿場町・城下町として古くから東西の往来と文化が栄えた歴史の十字路です。
            </p>
            <p>
              11月から1月にかけてのハイライトは、なんといっても「遠州三山（法多山尊永寺・萬松山可睡齋・医王山油山寺）」の新春厄除け祈願です。神亀2年（725年）に行基菩薩が開山した法多山尊永寺の深い杉木立を抜けて本堂へと向かう参道は、厳かな冷気配が心地よく、五本の串に刺さった名物「厄除団子」を頬張れば、新たな一年への勇気と活力が湧いてきます。また、袋井の古刹・可睡齋では可憐な冬咲きぼたんと、新春から始まる日本最大級32段1,200体の絢爛豪華なひな飾りが旅人の目を奪います。
            </p>
            <p>
              新幹線停車駅・掛川駅を拠点に、木造復元天守の掛川城と温泉、極上和牛を満喫する冬の遠州路は、新年の始まりにふさわしい清々しさに満ちています。富士山を遠望しながら名刹を巡り、歴史ある城下町の情趣に身を委ねる時間は、都会の喧騒を忘れさせてくれる至福のひとときです。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100">
              <h3 className="font-bold text-emerald-950 text-sm mb-1 flex items-center gap-1.5">
                <Sunrise className="w-4 h-4 text-emerald-700" /> 法多山 厄除け新春初詣
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                厄除け観音として全国に知られる名刹。荘厳な本堂への参拝と、蒸したて名物厄除団子の味わいは格別。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100">
              <h3 className="font-bold text-emerald-950 text-sm mb-1 flex items-center gap-1.5">
                <Flower2 className="w-4 h-4 text-emerald-700" /> 可睡齋 室内ぼたん＆雛祭り
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                徳川家康ゆかりの曹洞宗名刹。藁ぼっちに守られた冬咲きぼたんと、大広間を埋め尽くす圧巻の雛人形。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100">
              <h3 className="font-bold text-emerald-950 text-sm mb-1 flex items-center gap-1.5">
                <Building className="w-4 h-4 text-emerald-700" /> 掛川城 本格木造復元天守
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                日本初の本格木造復元天守。青森ヒバの香りが漂う城内と、最上階から見渡す富士山と遠州平野の冬絶景。
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
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">LOCAL GASTRONOMY</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                日本一の栄冠「遠州夢咲牛」と、濃厚な甘みを醸す「掛川深蒸し茶」
              </h2>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              遠州夢咲牛は、第8回全国和牛能力共進会において全国の並み居る有名ブランド牛を抑え、最高位の内閣総理大臣賞を獲得した静岡が誇る最高峰の黒毛和牛です。遠州の温暖な気候とストレスフリーな環境で大切に肥育され、融点が低くサラリとした甘みのある脂身、力強い肉の旨味を宿す赤身の調和が絶品。冬はサッと火を通した陶板焼きステーキやすき焼き鍋で、極上の肉汁と芳醇な香りを口いっぱいに楽しめます。
            </p>
            <p>
              通常の緑茶よりも2〜3倍長く蒸すことで、茶葉の芯まで熱を通す掛川独自の伝統製法「深蒸し茶」。濃い緑色の水色と、渋みが少なくまろやかで奥深い甘みが特徴です。カテキンやビタミンが豊富に含まれ、冬の風邪予防にも最適。寺社参拝で冷え込んだ体に淹れたての熱い掛川深蒸し茶を注げば、芳醇な茶の香りが鼻腔をくすぐり、芯から温まる贅沢なひとときを味わえます。
            </p>
            <p>
              また、東海道の宿場町として古くから旅人の胃袋を満たしてきたのが、冬に旬を迎える「自然薯（じねんじょ）とろろ汁」です。粘り強い自然薯を出汁と味噌で伸ばし、麦ご飯にかけて豪快にかき込む伝統の味は、滋養に満ちて冬の長旅の疲労を吹き飛ばしてくれます。
            </p>
          </div>
        </section>

        {/* Section 3: Sightseeing Spots & Winter Attractions */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-emerald-100 text-emerald-900 rounded-xl">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block">HISTORIC EXPLORATION</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                城下町の風情残る掛川城と、目の霊山・油山寺の静寂
              </h2>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              掛川城は、戦国時代に山内一豊が城主となり大規模な大改修を行った東海の名城です。平成6年に日本で初めて本格木造復元された天守は、釘を極力使わない伝統工法と青森ヒバの香りが満ちており、冬の澄んだ空気の中で白漆喰の壁が一層の輝きを放ちます。隣接する「二の丸御殿」は全国でも現存4棟しかない貴重な御殿建築（重要文化財）で、書院造りの畳敷きの部屋や庭園を静かに見学できます。
            </p>
            <p>
              城下町散策の合間には、掛川城公園内にある「二の丸茶室」へ立ち寄るのがおすすめ。数寄屋造りの本格的な茶室で、冬の美しい日本庭園を眺めながら、掛川深蒸し茶と季節の生菓子を一服いただく時間は格別です。
            </p>
            <p>
              遠州三山のひとつ「医王山油山寺（ゆさんじ）」も冬の必見スポットです。孝謙天皇の眼病平癒の故事から「目の仏様」として信仰を集め、国の重要文化財である山門や三重塔が木立の中に静かに佇みます。冬枯れの凛とした静寂に包まれた境内を歩き、瑠璃の滝のせせらぎに耳を澄ませば、心洗われる平穏な時間が流れます。
            </p>
          </div>
        </section>

        {/* Section 4: Travel Practical Tips */}
        <section className="bg-slate-100/80 rounded-2xl p-6 md:p-8 border border-slate-200 space-y-4">
          <h2 className="text-base md:text-lg font-bold text-slate-900 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span>冬の掛川・袋井 旅の実践アドバイス（気候・服装・新幹線アクセス）</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-slate-700">
            <div>
              <strong className="block text-slate-900 font-bold mb-1">【気候と防寒】</strong>
              遠州地方は雪が積もることは極めて稀ですが、「遠州のからっ風」と呼ばれる西寄りの強い季節風が吹きます。体感温度がぐっと下がるため、風を通しにくいウインドブレーカーやダウンジャケット、マフラーが役立ちます。法多山の参道は長い階段があるため、歩きやすい靴を選びましょう。
            </div>
            <div>
              <strong className="block text-slate-900 font-bold mb-1">【新幹線と初詣交通】</strong>
              JR掛川駅は東海道新幹線「こだま」の停車駅で、東京から約1時間40分、名古屋から約1時間と好アクセスです。法多山の正月三が日は周辺駐車場が満車になりやすいため、JR袋井駅から発着する直通臨時路線バスの利用が渋滞回避に非常に効果的です。
            </div>
          </div>
        </section>

        {/* Section 5: Verified Hotels */}
        <section className="space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-black text-emerald-800 uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full inline-block">
              SELECTED ACCOMMODATIONS
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 font-journal-serif">
              法多山初詣＆掛川城を満喫する厳選名宿5選
            </h2>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              楽天トラベルAPIより最新の空室・料金・レビュー情報を取得。掛川城を望む展望天然温泉ホテルから、新幹線駅直結シティホテル、袋井駅前の大浴場付きホテルまで厳選しました。
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image */}
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{hotel.rating}</span>
                      <span className="text-slate-300">({hotel.reviews}件)</span>
                    </div>
                  </div>

                  {/* Hotel Content */}
                  <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                          厳選宿 #{hotel.id}
                        </span>
                        <span className="text-sm font-black text-amber-600">
                          参考宿泊料: {hotel.price}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-black text-slate-900 hover:text-emerald-800 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                          {hotel.name}
                        </a>
                      </h3>

                      <p className="text-xs text-slate-500 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{hotel.access}</span>
                      </p>

                      <p className="text-slate-700 text-xs md:text-sm leading-relaxed">
                        {hotel.story}
                      </p>

                      {/* Tips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <strong className="block text-slate-900 font-bold mb-1 text-[11px] uppercase tracking-wider text-emerald-800">
                            🛌 客室選びのヒント
                          </strong>
                          <span className="text-slate-600">{hotel.roomTip}</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <strong className="block text-slate-900 font-bold mb-1 text-[11px] uppercase tracking-wider text-amber-800">
                            🥢 冬の特選グルメ
                          </strong>
                          <span className="text-slate-600">{hotel.gourmetTip}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-1.5 pt-2 text-xs text-slate-600">
                        {hotel.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Booking Button */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-400">楽天トラベル公認リンク</span>
                      <a 
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black text-xs md:text-sm rounded-xl shadow-md hover:shadow-lg transition transform active:scale-95"
                      >
                        <span>プラン詳細・空室確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: 1-Night 2-Days Model Course */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-emerald-100 text-emerald-900 rounded-xl">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block">MODEL ITINERARY</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                掛川城＆法多山初詣・可睡齋 1泊2日冬の黄金モデルコース
              </h2>
            </div>
          </div>

          <div className="space-y-6 text-xs md:text-sm">
            {/* Day 1 */}
            <div className="border-l-2 border-emerald-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-xs">1日目</span>
                掛川城木造天守を見学し、展望温泉と遠州夢咲牛を堪能
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>11:30 東海道新幹線・掛川駅に到着</strong><br />
                駅周辺の名物店で、自然薯とろろ汁と遠州夢咲牛のステーキ重ランチを堪能。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>13:00 日本初の本格木造復元天守「掛川城」見学</strong><br />
                青森ヒバの香る木造天守を登閣。最上階から遠州平野と富士山を眺望。続いて重要文化財「二の丸御殿」を見学し、二の丸茶室で掛川深蒸し茶と上生菓子を一服。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>16:00 ホテルにチェックイン＆天然温泉へ</strong><br />
                ドーミーインEXPRESS掛川などの展望露天風呂に浸かり、ライトアップされた掛川城を眺めながらリフレッシュ。夕食は駅前割烹で遠州の地酒「開運」と旬魚・遠州夢咲牛を味わう。
              </p>
            </div>

            {/* Day 2 */}
            <div className="border-l-2 border-amber-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-amber-600 text-white px-2 py-0.5 rounded text-xs">2日目</span>
                法多山尊永寺で厄除け初詣、可睡齋の雛祭りと室内ぼたんへ
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>08:30 ホテルを出発、法多山尊永寺へ</strong><br />
                朝の清々しい杉並木を歩き本堂へ参拝。一年の無病息災・厄除けを祈願した後、茶屋で蒸したての名物「厄除団子」をいただく。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>11:00 曹洞宗の名刹「可睡齋」へ</strong><br />
                冬咲きぼたんの可憐な姿を愛で、32段1,200体の日本最大級ひなまつりを見学。精進料理をいただくか、袋井名物のたまごふわふわを昼食に。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>14:00 袋井駅または掛川駅から東海道新幹線で帰路へ</strong><br />
                掛川深蒸し茶や厄除団子のお土産を買い、快適な新幹線で東京・名古屋方面へ。
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-purple-100 text-purple-900 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-800 uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                掛川・袋井 冬の旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div key={idx} className="border border-slate-100 rounded-xl p-4 md:p-5 bg-slate-50/50">
                <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2 flex items-start gap-2">
                  <span className="text-emerald-600 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link CTA */}
        <section className="bg-gradient-to-r from-emerald-950 to-slate-900 text-white rounded-2xl p-8 text-center space-y-4">
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
              className="px-6 py-3 bg-emerald-800 hover:bg-emerald-700 text-white font-black text-xs md:text-sm rounded-xl border border-emerald-600 transition"
            >
              トップページへ戻る
            </Link>
          
      <HubRelatedPosts currentSlug="winter-shizuoka-kakegawa-fukuroi-hattasan-hatsumode-yumesakigyu-stay" />
</div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 text-center text-xs border-t border-slate-800 mt-16">
        <p>© 2026 旅宿クラウド (croud-travel.pages.dev). All rights reserved.</p>
        <p className="mt-2 text-slate-500">掲載の宿泊料金や施設情報は楽天トラベルAPIより取得した参考データです。最新のプラン内容は各宿泊施設ページをご確認ください。</p>
      </footer>
    </article>
  );
}
