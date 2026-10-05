import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月福井】北陸道総鎮守「氣比神宮」新春初詣と三方五湖の冬静寂！黄色タグ「越前がに」・「若狭ふぐ」極上会席＆敦賀名宿5選",
  description: "北陸新幹線敦賀開業で首都圏・関西からのアクセスが飛躍的に進化した福井・若狭路の11〜1月冬紀行。北陸道総鎮守「氣比神宮」で迎える厳粛な新春初詣、日本三大松原・気比の松原の冬景色、神秘の五色湖「三方五湖」の静寂。11月6日解禁の黄色タグ「越前がに」や極上セイコガニ、若狭湾の寒波が身を極限まで引き締める「若狭ふぐ（とらふぐ）」のてっさ・てっちり。冬の味覚の二大巨頭を味わい尽くす厳選名宿5選と旅の極意を徹底紹介。",
  keywords: '氣比神宮 初詣, 敦賀 越前がに, 若狭ふぐ てっさ, 三方五湖 冬, 敦賀マンテンホテル駅前, 水月花, 福井 冬旅行, 越前蟹 名宿',
  alternates: {
    canonical: 'https://croud-travel.com/winter-fukui-tsuruga-kehi-jingu-mikata-goko-echizengani-wakasa-fugu-stay'
  },
  openGraph: {
    title: "【11・12・1月福井】北陸道総鎮守「氣比神宮」新春初詣と三方五湖の冬静寂！黄色タグ「越前がに」・「若狭ふぐ」極上会席＆敦賀名宿5選",
    description: "北陸新幹線敦賀開業で首都圏・関西からのアクセスが飛躍的に進化した福井・若狭路の11〜1月冬紀行。北陸道総鎮守「氣比神宮」で迎える厳粛な新春初詣、日本三大松原・気比の松原の冬景色、神秘の五色湖「三方五湖」の静寂。11月6日解禁の黄色タグ「越前がに」や極上セイコガニ、若狭湾の寒波が身を極限まで引き締める「若狭ふぐ（とらふぐ）」のてっさ・てっちり。冬の味覚の二大巨頭を味わい尽くす厳選名宿5選と旅の極意を徹底紹介。",
    url: 'https://croud-travel.com/winter-fukui-tsuruga-kehi-jingu-mikata-goko-echizengani-wakasa-fugu-stay',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の氣比神宮大鳥居と三方五湖の静寂雪景色'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月福井】北陸道総鎮守「氣比神宮」新春初詣と三方五湖の冬静寂！黄色タグ「越前がに」・「若狭ふぐ」極上会席＆敦賀名宿5選",
    description: "北陸新幹線敦賀開業で首都圏・関西からのアクセスが飛躍的に進化した福井・若狭路の11〜1月冬紀行。北陸道総鎮守「氣比神宮」で迎える厳粛な新春初詣、日本三大松原・気比の松原の冬景色、神秘の五色湖「三方五湖」の静寂。11月6日解禁の黄色タグ「越前がに」や極上セイコガニ、若狭湾の寒波が身を極限まで引き締める「若狭ふぐ（とらふぐ）」のてっさ・てっちり。冬の味覚の二大巨頭を味わい尽くす厳選名宿5選と旅の極意を徹底紹介。",
    images: ['https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export const dynamic = 'force-static';

export default function FukuiTsurugaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月福井】北陸道総鎮守「氣比神宮」新春初詣と三方五湖の冬静寂！黄色タグ「越前がに」・「若狭ふぐ」極上会席＆敦賀名宿5選",
    "description": "北陸新幹線敦賀開業で首都圏・関西からのアクセスが飛躍的に進化した福井・若狭路の11〜1月冬紀行。北陸道総鎮守「氣比神宮」で迎える厳粛な新春初詣、日本三大松原・気比の松原の冬景色、神秘の五色湖「三方五湖」の静寂。11月6日解禁の黄色タグ「越前がに」や極上セイコガニ、若狭湾の寒波が身を極限まで引き締める「若狭ふぐ（とらふぐ）」のてっさ・てっちり。冬の味覚の二大巨頭を味わい尽くす厳選名宿5選と旅の極意を徹底紹介。",
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
      "@id": "https://croud-travel.com/winter-fukui-tsuruga-kehi-jingu-mikata-goko-echizengani-wakasa-fugu-stay"
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
        "name": "福井・敦賀＆若狭 冬特集",
        "item": "https://croud-travel.com/winter-fukui-tsuruga-kehi-jingu-mikata-goko-echizengani-wakasa-fugu-stay"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "冬（11・12・1月）の氣比神宮（けひじんぐう）初詣の由緒と見どころは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "氣比神宮は越前国一ノ宮であり、「北陸道総鎮守」として二千有余年の歴史を誇る古社です。御祭神の伊奢沙別命（いざさわけのみこと）は衣食住・海上安全・交通安全の守護神として篤く信仰されています。境内に聳える大鳥居は春日大社・厳島神社と並ぶ「日本三大木造鳥居」の一つで国指定重要文化財です。新春初詣には三が日で10万人以上が訪れ、境内にある「長命水」で延命長寿を祈り、雪をかぶった神門をくぐる参拝は大変清々しく厳かです。初詣の混雑を避けるには元旦早朝や夕方以降の参拝がおすすめです。"
        }
      },
      {
        "@type": "Question",
        "name": "冬の福井で旬を迎える「越前がに」と「若狭ふぐ」の美味しさの秘密は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "越前がには福井県内の漁港（三国・越前・敦賀・小浜）で水揚げされるオスのズワイガニで、全国で唯一皇室に献上されるブランド蟹です。脚に巻かれた黄色いタグが品質の証で、11月6日に漁が解禁されます。日本海の冷たい海水と複雑な海底地形で育ち、甘く繊細な脚肉と濃厚な蟹味噌が絶品です。一方、若狭湾の三方五湖周辺で養殖される「若狭ふぐ」は日本最北限のトラフグ養殖地。冬の極寒の海水温に耐えるため、身が極限まで引き締まり、天然物に匹敵する歯ごたえと甘みが生まれます。"
        }
      },
      {
        "@type": "Question",
        "name": "冬の三方五湖（みかたごこ）の見どころと観光道路の状況は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "三方五湖は三方湖・水月湖・菅湖・久々子湖・日向湖の5つの湖からなり、それぞれ塩分濃度や水深が異なるため「五色の湖」と呼ばれラムサール条約湿地に登録されています。11〜1月は水月湖などに多くの水鳥が飛来し、水墨画のような静謐な湖畔美が広がります。梅丈岳山頂へ続く「三方五湖レインボーライン」からは五湖と日本海が一望できますが、冬季は積雪や路面凍結による営業時間短縮や臨時休業があるため、事前に最新道路情報を確認の上、スタッドレスタイヤ装着でお出かけください。"
        }
      },
      {
        "@type": "Question",
        "name": "北陸新幹線敦賀開業後の東京・大阪・名古屋からのアクセス所要時間は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "北陸新幹線の敦賀延伸により、東京駅からは「かがやき」で乗り換えなし約3時間8分で直通アクセス可能になりました。関西方面からは特急「サンダーバード」で京都駅から約50分、大阪駅から約1時間20分、名古屋方面からは特急「しらさぎ」で約1時間35分で敦賀駅に到着します。敦賀駅での在来線特急と新幹線の乗り換えも同一駅舎内の立体移動でスムーズに行えます。"
        }
      },
      {
        "@type": "Question",
        "name": "敦賀の冬の気候と雪道運転・防寒対策の注意点は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "敦賀は日本海側気候のため、12月中旬から1月にかけて雪が降る日が増えます。海沿いは積雪が比較的少ない日もありますが、気温が氷点下近くまで下がる夜間や早朝、三方五湖周辺の峠道では路面凍結（ブラックアイスバーン）が発生しやすくなります。車を利用する場合はスタッドレスタイヤの装着が必須です。また日本海からの冷たい季節風が強いため、防風・防水性のあるダウンジャケット、滑り止め付きの防水ブーツ、手袋やカイロをご用意ください。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "敦賀マンテンホテル駅前（マンテンホテルグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/128494/128494.jpg",
              rating: 4.17,
              reviews: 1549,
              price: "¥4,900〜",
              access: "ＪＲ敦賀駅西口より徒歩約１分　／　敦賀ＩＣより車で５分",
              special: "ＪＲ敦賀駅西口徒歩１分・男女別大浴場・シモンズベッド・個別エアコン・温便座シャワートイレ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128494%2F128494.html",
              story: "JR敦賀駅西口から徒歩わずか1分、北陸新幹線敦賀駅開業に伴い利便性が一段と高まった「敦賀マンテンホテル駅前」。館内には旅人の冷えた体を優しく包み込む男性高温サウナ・女性スチームサウナ付きの大浴場を完備し、ビジネスホテルの枠を超えた快適な癒やしを提供します。客室はシモンズ社製ベッドと加湿空気清浄機を備え、冬の静かな睡眠を約束。朝食バイキングでは、福井名物「へしこ」や「厚揚げ焼き」、名水仕込みの炊きたてコシヒカリ、温かい郷土汁など北陸の冬の滋味がずらりと並びます。氣比神宮への初詣や敦賀港散策の拠点として機動力抜群です。",
              roomTip: "セミダブルまたはツインルーム。高層階からは新幹線の高架や冬の敦賀の街並み、敦賀富士と称される野坂岳の雪化粧を遠望できます。",
              gourmetTip: "「名物朝食バイキング」。炙りへしこの芳醇な塩気とお茶漬け、温かい越前そば、地元豆腐店のふっくら厚揚げが朝の活力を引き出します。",
              highlights: [
                "サウナ付き大浴場完備・JR敦賀駅西口徒歩1分の好立地で冬の寒さも即座に解消" ,
                "朝食バイキングで味わう福井名物「へしこ」茶漬けと名水コシヒカリの絶品コンビ" ,
                "氣比神宮まで徒歩約15分・新春初詣や敦賀赤レンガ倉庫観光の拠点に最適"
              ]
            },
            {
              id: 2,
              name: "ホテルグランビナリオＴＳＵＲＵＧＡ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/184200/184200.jpg",
              rating: 4.45,
              reviews: 937,
              price: "¥6,500〜",
              access: "JR敦賀駅西口より徒歩1分です。",
              special: "余裕の広さを誇る客室と最新の設備、最上級のホスピタリティで快適なご滞在をお約束いたします。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184200%2F184200.html",
              story: "JR敦賀駅西口駅前広場に直結し、気品ある洗練されたホスピタリティで迎える「ホテルグランビナリオTSURUGA」。敦賀の玄関口に相応しいモダンで上質なデザインが施され、全室に洗い場付き独立バスルーム（一部客室除く）とシモンズ製最高級マットレスを導入。真冬の滞在でも自宅のようにゆったりと温まることができます。館内レストランでは日本海で獲れた新鮮な魚介や福井県産ブランド食材を使用した創作和洋食が提供され、地酒「黒龍」や「梵」とのペアリングも秀逸。敦賀新時代の象徴としてカップルや家族連れ、上質な一人旅に選ばれています。",
              roomTip: "スーペリアツインまたはエグゼクティブルーム。広々としたリビングスペースと独立洗面台で冬の防寒着や荷物の整理も快適。",
              gourmetTip: "「福井の旬彩朝食膳」。地元の契約農家が育てる福井米に、焼き鯖、若狭カレイの一夜干し、蟹真丈の吸い物が添えられた贅沢な膳。",
              highlights: [
                "敦賀駅直結のハイグレードホテル・独立バスルーム＆シモンズ最高峰ベッドで贅沢ステイ" ,
                "福井の地酒「黒龍」「梵」を取り揃えた館内レストラン＆地元食材の創作和洋食" ,
                "カップルや記念日にも選ばれる洗練空間・北陸新幹線延伸で東京からも直通アクセス"
              ]
            },
            {
              id: 3,
              name: "ホテルルートイン敦賀駅前",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/70274/70274.jpg",
              rating: 3.98,
              reviews: 1628,
              price: "¥5,650〜",
              access: "JR北陸本線敦賀駅西口より約200m徒歩で2分、北陸自動車道敦賀ICより約3.0km車で約5分",
              special: "◆無料朝食バイキング6:00～9:00（本館1階）　◆男女別大浴場　◆Ｗｉ-Ｆｉ完備",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70274%2F70274.html",
              story: "敦賀駅西口から徒歩約2分の好立地に位置し、機能性と安心感を兼ね備えた全国ブランドの旗艦店「ホテルルートイン敦賀駅前」。館内1階にはラジウム人工温泉大浴場「旅人の湯」があり、冬の日本海からの冷たい浜風を浴びた後でも手足を伸ばして芯から温まることができます。全室でWOWOW無料視聴やWi-Fi利用が可能で、冬の夜長も退屈しません。ヨーロッパ直輸入のヨーロピアンブレッドと日替わりの温かい和洋おかずが揃う無料朝食バイキングは、朝早くから氣比神宮へ初詣に出かける旅行者に大好評です。",
              roomTip: "コンフォートルーム。エアウィーヴマットレス導入室を選べば、長距離移動の疲れも翌朝にはすっきり解消されます。",
              gourmetTip: "「無料和洋朝食バイキング」。冬の朝に嬉しい熱々コーンスープやポトフ、出汁の効いた味噌汁と焼き魚でしっかり腹ごしらえ。",
              highlights: [
                "ラジウム人工温泉「旅人の湯」完備・ヨーロッパ直輸入パンと和洋朝食バイキング無料" ,
                "全室加湿機能付き空気清浄機完備・真冬の乾燥も防ぎ快適な安眠をサポート" ,
                "平面駐車場完備・若狭湾ドライブや三方五湖への冬の周遊レンタカー旅にも便利"
              ]
            },
            {
              id: 4,
              name: "若狭みかた　きらら温泉　水月花",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/72715/72715.jpg",
              rating: 3.92,
              reviews: 829,
              price: "¥8,800〜",
              access: "ＪＲ：三方駅よりお車で20分。車：舞鶴若狭自動車道 若狭三方ＩＣで降りて20分。",
              special: "目の前に三方五湖。美しい自然に囲まれた優雅な休日を満喫♪モーニングクルーズも人気☆全館WiFi完備☆",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72715%2F72715.html",
              story: "三方五湖の一つ「水月湖」の湖畔に静かに佇み、全客室および露天風呂から神秘的な湖面景観を一望できる温泉リゾート「若狭みかた きらら温泉 水月花」。天然温泉「きらら温泉」は弱アルカリ性単純温泉で、湯上がりの肌が滑らかになると評判です。冬の澄み渡る空気の中、湯船から水鳥が羽休めする雪の湖面を眺める時間は格別の贅沢。夕食には冬の若狭湾が誇る極上「若狭ふぐ（とらふぐ）」のフルコース（てっさ、てっちり、唐揚げ、ひれ酒）や、福井が世界に誇る黄色タグ付き「越前がに」の姿茹でが並び、若狭の冬の美食を心ゆくまで堪能できます。",
              roomTip: "水月湖を正面に望む湖側和室または和洋室。朝霧が立ち込める早朝の湖面と冬枯れの山々が織りなす水墨画のような絶景は必見。",
              gourmetTip: "「若狭ふぐ尽くし会席＆越前がにプラン」。薄造りてっさのコリコリとした歯ごたえ、旨味凝縮のふぐちり鍋、〆の雑炊が冬の至高。",
              highlights: [
                "水月湖の湖畔に建つ天然温泉露天・若狭ふぐフルコースと越前がに姿茹での極上会席" ,
                "全室レイクビュー・冬の朝霧漂う水月湖の雪景色を部屋から眺める非日常の静寂" ,
                "若狭湾の寒波で身が引き締まった冬限定「若狭とらふぐ」のてっさ＆てっちり鍋"
              ]
            },
            {
              id: 5,
              name: "東横ＩＮＮ敦賀駅前",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108381/108381.jpg",
              rating: 4.05,
              reviews: 794,
              price: "¥5,408〜",
              access: "JR 敦賀駅より徒歩２分",
              special: "JR 敦賀駅から徒歩２分で朝食・小学生以下添い寝無料のホテル！気比神宮まで車/バスで５分",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108381%2F108381.html",
              story: "JR敦賀駅前ロータリーに面し、新幹線改札から徒歩1分という圧倒的なアクセス性を誇る「東横ＩＮＮ敦賀駅前」。清潔で合理的な客室設計と手厚い無料サービスが定評で、急な雪道運転を避け公共交通機関で身軽に敦賀を訪れたいスマートな冬旅に最適です。全客室に加湿器、個別エアコン、清潔な羽毛布団を完備。朝食には地元のお母さんたちが手作りする温かいおにぎりや具だくさん味噌汁が無料で振る舞われます。気比神宮大鳥居へも徒歩約15分、敦賀駅前商店街のアーケードを抜けてのんびり散策できます。",
              roomTip: "シングルまたはデラックスシングル。ワイドデスクと明るい照明が配置され、冬の旅の記録や翌日の観光計画を練るのにも最適。",
              gourmetTip: "「無料健康朝食」。福井県産コシヒカリで握ったおにぎりと、福井特産のお漬物、熱々の味噌汁で身体を温めて元気にスタート。",
              highlights: [
                "JR敦賀駅前徒歩1分・手作りおにぎりと温かい味噌汁の無料朝食で身軽な冬の初詣旅" ,
                "個別空調と清潔な羽毛布団・氣比神宮参道商店街へも徒歩でアクセス可能な利便性" ,
                "コストパフォーマンス抜群・北陸新幹線敦賀駅発着の初詣周遊旅行に強い味方"
              ]
            }
  ];

  const faqsData = [
    {
      q: "冬（11・12・1月）の氣比神宮（けひじんぐう）初詣の由緒と見どころは？",
      a: "氣比神宮は越前国一ノ宮であり、「北陸道総鎮守」として二千有余年の歴史を誇る古社です。御祭神の伊奢沙別命（いざさわけのみこと）は衣食住・海上安全・交通安全の守護神として篤く信仰されています。境内に聳える大鳥居は春日大社・厳島神社と並ぶ「日本三大木造鳥居」の一つで国指定重要文化財です。新春初詣には三が日で10万人以上が訪れ、境内にある「長命水」で延命長寿を祈り、雪をかぶった神門をくぐる参拝は大変清々しく厳かです。初詣の混雑を避けるには元旦早朝や夕方以降の参拝がおすすめです。"
    },
    {
      q: "冬の福井で旬を迎える「越前がに」と「若狭ふぐ」の美味しさの秘密は？",
      a: "越前がには福井県内の漁港（三国・越前・敦賀・小浜）で水揚げされるオスのズワイガニで、全国で唯一皇室に献上されるブランド蟹です。脚に巻かれた黄色いタグが品質の証で、11月6日に漁が解禁されます。日本海の冷たい海水と複雑な海底地形で育ち、甘く繊細な脚肉と濃厚な蟹味噌が絶品です。一方、若狭湾の三方五湖周辺で養殖される「若狭ふぐ」は日本最北限のトラフグ養殖地。冬の極寒の海水温に耐えるため、身が極限まで引き締まり、天然物に匹敵する歯ごたえと甘みが生まれます。"
    },
    {
      q: "冬の三方五湖（みかたごこ）の見どころと観光道路の状況は？",
      a: "三方五湖は三方湖・水月湖・菅湖・久々子湖・日向湖の5つの湖からなり、それぞれ塩分濃度や水深が異なるため「五色の湖」と呼ばれラムサール条約湿地に登録されています。11〜1月は水月湖などに多くの水鳥が飛来し、水墨画のような静謐な湖畔美が広がります。梅丈岳山頂へ続く「三方五湖レインボーライン」からは五湖と日本海が一望できますが、冬季は積雪や路面凍結による営業時間短縮や臨時休業があるため、事前に最新道路情報を確認の上、スタッドレスタイヤ装着でお出かけください。"
    },
    {
      q: "北陸新幹線敦賀開業後の東京・大阪・名古屋からのアクセス所要時間は？",
      a: "北陸新幹線の敦賀延伸により、東京駅からは「かがやき」で乗り換えなし約3時間8分で直通アクセス可能になりました。関西方面からは特急「サンダーバード」で京都駅から約50分、大阪駅から約1時間20分、名古屋方面からは特急「しらさぎ」で約1時間35分で敦賀駅に到着します。敦賀駅での在来線特急と新幹線の乗り換えも同一駅舎内の立体移動でスムーズに行えます。"
    },
    {
      q: "敦賀の冬の気候と雪道運転・防寒対策の注意点は？",
      a: "敦賀は日本海側気候のため、12月中旬から1月にかけて雪が降る日が増えます。海沿いは積雪が比較的少ない日もありますが、気温が氷点下近くまで下がる夜間や早朝、三方五湖周辺の峠道では路面凍結（ブラックアイスバーン）が発生しやすくなります。車を利用する場合はスタッドレスタイヤの装着が必須です。また日本海からの冷たい季節風が強いため、防風・防水性のあるダウンジャケット、滑り止め付きの防水ブーツ、手袋やカイロをご用意ください。"
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
      <header className="relative bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-800 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-indigo-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
            <Snowflake className="w-4 h-4 text-indigo-300" />
            <span>北陸・福井 若狭路 冬の特別紀行（11月・12月・1月）</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 font-journal-serif">
            北陸道総鎮守「氣比神宮」新春初詣と三方五湖の冬静寂<br className="hidden md:inline" />
            黄色タグ「越前がに」・「若狭ふぐ」極上会席＆敦賀名宿5選
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mb-6">
            北陸新幹線の敦賀開業により、いま最も熱い注目を集める福井県敦賀・若狭エリア。日本三大木造鳥居が雪をまとう北陸道総鎮守「氣比神宮」で迎える厳かな新春、ラムサール条約湿地「三方五湖」の水墨画のような静寂。そして11月に解禁される黄色タグの王者「越前がに」と、厳寒の若狭湾で極限まで身を引き締めた「若狭ふぐ（とらふぐ）」の饗宴。冬の味覚と祈りが交差する至高の旅路へご案内します。
          </p>

          <div className="flex flex-wrap gap-3 text-xs md:text-sm text-slate-200">
            <span className="bg-indigo-900/60 border border-indigo-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-400" /> 氣比神宮（国重文大鳥居・新春初詣）
            </span>
            <span className="bg-indigo-900/60 border border-indigo-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Waves className="w-4 h-4 text-indigo-400" /> 三方五湖（五色の湖・水月湖冬景色）
            </span>
            <span className="bg-indigo-900/60 border border-indigo-700/50 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-indigo-400" /> 黄色タグ越前がに＆若狭ふぐてっさ
            </span>
          </div>
        </div>
      </header>

      {/* Summary Box */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 border-b pb-3">
            <CheckCircle2 className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span>本特集でわかること（11・12・1月の福井・敦賀＆若狭旅行の要点）</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="bg-indigo-50/60 p-4 rounded-xl border border-indigo-100">
              <span className="font-bold text-indigo-950 block mb-1">① 氣比神宮 新春初詣と長命水</span>
              二千年超の歴史を誇る北陸道総鎮守。日本三大木造鳥居をくぐり、無病息災の霊水「長命水」で清める格式高い新年の祈り。
            </div>
            <div className="bg-indigo-50/60 p-4 rounded-xl border border-indigo-100">
              <span className="font-bold text-indigo-950 block mb-1">② 越前がに＆若狭ふぐの二大美味</span>
              11月6日解禁の黄色タグ「越前がに」の濃厚な蟹味噌と甘美な脚肉。日本最北限の養殖が生むプリプリの「若狭ふぐ」てっさ・てっちり。
            </div>
            <div className="bg-indigo-50/60 p-4 rounded-xl border border-indigo-100">
              <span className="font-bold text-indigo-950 block mb-1">③ 敦賀新幹線延伸と三方五湖静寂</span>
              東京から直通3時間8分、関西から1時間20分。駅前高機能ホテルと水月湖畔の絶景露天温泉宿を巡る冬の極上ステイ。
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 py-4 text-xs text-slate-500 flex items-center gap-2">
        <Link href="/" className="hover:text-indigo-700 transition">ホーム</Link>
        <span>/</span>
        <Link href="/features" className="hover:text-indigo-700 transition">特集一覧</Link>
        <span>/</span>
        <span className="text-slate-700 font-medium">福井・敦賀＆若狭 冬特集</span>
      </nav>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">

        {/* Section 1: Overview and Atmosphere */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="p-2.5 bg-indigo-100 text-indigo-800 rounded-xl">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest block">AREA ATMOSPHERE & GEO OVERVIEW</span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 font-journal-serif">
                古の海運の要衝・敦賀と、白銀の若狭湾が紡ぐ冬の静謐
              </h2>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              日本海に突き出た敦賀半島と、天然の良港として古代から大陸交易や北前船の拠点として栄えてきた敦賀（つるが）。そして西に連なるリアス式海岸の若狭湾と、五つの異なる表情を見せる「三方五湖（みかたごこ）」。11月から1月にかけてのこの地域は、日本海からの寒気がもたらす雪雲が低く垂れ込め、凛とした冷涼な空気が大地を満たします。雪化粧した敦賀富士（野坂岳）の山並みと、深い藍色を湛える若狭湾のコントラストは、冬の日本海ならではの息を呑む情景です。
            </p>
            <p>
              越前国一ノ宮であり、北陸道総鎮守の威容を誇る「氣比神宮」に足を踏み入れると、朱塗りの大鳥居が白雪の中に鮮やかに浮かび上がります。元旦から松の内にかけた新春初詣には、地元福井県内はもちろん、関西や中京、そして北陸新幹線で駆けつけた関東からの参拝客が列をなし、新年の平穏と家内安全を祈願します。境内には無病息災・延命長寿の御神水「長命水」が湧き出で、厳冬期の澄み渡る大気の中でいただく一杯は、旅人の心身の隅々まで染み渡ります。
            </p>
            <p>
              車を少し西へ走らせれば、三方湖、水月湖、菅湖、久々子湖、日向湖が複雑に入り組む「三方五湖」へと至ります。冬の水月湖畔では、渡り鳥の羽ばたきと湖面の波音だけが響く静寂が広がり、水墨画の世界に迷い込んだかのような幻想的なひとときを味わうことができます。新幹線の延伸によって劇的に身近になったこの地は、日常の喧騒を離れて精神を研ぎ澄まし、本物の冬の美味に溺れるのにこれ以上ない舞台です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100">
              <h3 className="font-bold text-indigo-950 text-sm mb-1 flex items-center gap-1.5">
                <Footprints className="w-4 h-4 text-indigo-700" /> 日本三大木造鳥居・氣比神宮
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                正保2年（1645年）建立の国重要文化財。高さ約11メートルの荘厳な朱塗り鳥居が雪景色に映え、参拝者を圧倒します。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100">
              <h3 className="font-bold text-indigo-950 text-sm mb-1 flex items-center gap-1.5">
                <Waves className="w-4 h-4 text-indigo-700" /> 神秘の五色湖・三方五湖
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                淡水・汽水・海水と塩分濃度が異なる5つの湖。冬は水鳥が集い、水月湖の年縞博物館など知的好奇心を刺激する名所も点在。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100">
              <h3 className="font-bold text-indigo-950 text-sm mb-1 flex items-center gap-1.5">
                <Building className="w-4 h-4 text-indigo-700" /> 敦賀赤レンガ倉庫＆人道の港
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                明治の面影を残す赤レンガ倉庫には日本最大級の鉄道ジオラマ。港町敦賀が辿った国際海運の歴史ロマンに触れられます。
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
                黄色タグ「越前がに」と極寒の恵み「若狭ふぐ」、福井が誇る冬の二大王者
              </h2>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              11月6日、日本海のカニ漁解禁とともに福井の冬は幕を開けます。福井県内の港で水揚げされたオスのズワイガニにのみ付けられる黄色いタグは、全国で唯一の皇室献上蟹としての誇りと揺るぎない品質の証です。敦賀港や越前港に水揚げされた越前がには、荒れ狂う日本海の冷水と急深な海底地形が生み出す豊かなプランクトンによって育まれ、脚肉には繊細かつ濃密な甘みが凝縮されています。甲羅の中にたっぷりと詰まった漆黒の蟹味噌は、磯の芳香とクリーミーなコクが調和した至極の味わいです。
            </p>
            <p>
              また、11月から12月にかけての短い期間だけ味わえるメスのズワイガニ「セイコガニ」も見逃せません。小ぶりな甲羅の中には、プチプチと弾ける外子（卵）と、朱色に輝く濃厚な内子（未成熟卵）がぎっしりと詰まっており、熱燗の甲羅酒とともにいただく瞬間は、冬の福井を訪れた者だけに許された無上の喜びです。
            </p>
            <p>
              そしてもう一つの主役が、三方五湖周辺の若狭湾で育まれる「若狭ふぐ（とらふぐ）」です。日本海側の最北限に位置する養殖場では、真冬の厳しい海水温に揉まれることでフグの身が極限まで引き締まり、天然物に一歩も引けを取らない強靭な歯ごたえと上品な旨味が生まれます。大皿に菊花のように美しく引かれた「てっさ（薄造り）」に自家製ポン酢と安曇川の小ねぎを添えて食せば、噛むほどに広がる淡麗な旨味に感嘆せずにはいられません。熱々の「てっちり鍋」や香ばしい「ひれ酒」で身体を芯から温める体験は、冬の寒さを忘れさせてくれる至高の贅沢です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-100">
              <h3 className="font-bold text-amber-950 text-sm mb-2 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-700" /> 黄色タグ・越前がにの味わい方
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                <li>・<strong>茹でガニ：</strong>絶妙な塩加減で職人が大釜で茹で上げた、身の甘みと味噌の濃厚さが際立つ王道。</li>
                <li>・<strong>焼きガニ：</strong>炭火の遠赤外線で香ばしい薫香をまとわせ、甘い肉汁を閉じ込めた逸品。</li>
                <li>・<strong>甲羅味噌焼き：</strong>濃厚な蟹味噌にほぐし身を絡め、地酒を注いで香ばしく炙る大人の贅沢。</li>
              </ul>
            </div>
            <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-100">
              <h3 className="font-bold text-amber-950 text-sm mb-2 flex items-center gap-1.5">
                <Wine className="w-4 h-4 text-amber-700" /> 若狭ふぐフルコースの醍醐味
              </h3>
              <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                <li>・<strong>てっさ（薄造り）：</strong>透き通る身の弾力と噛むほどに溢れる上品な甘み。自家製ポン酢で。</li>
                <li>・<strong>てっちり（ふぐ鍋）：</strong>昆布出汁にふぐのアラと冬野菜を煮込み、コラーゲンたっぷりのスープ。</li>
                <li>・<strong>ふぐ雑炊＆ひれ酒：</strong>ふぐの出汁を吸った極上雑炊と、炙りひれの香ばしい熱燗で至福の締めくくり。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Hotel Showcase */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest block">RECOMMENDED ACCOMMODATIONS</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 font-journal-serif">
              氣比神宮初詣＆越前若狭冬美食を満喫する厳選名宿5選
            </h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              楽天トラベルAPIから最新の空室状況・評価を取得。新幹線直結の高機能ホテルから水月湖畔の絶景温泉宿まで厳選。
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
                    <div className="absolute top-3 left-3 bg-indigo-900/90 text-white text-xs font-black px-2.5 py-1 rounded-md shadow">
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
                        <div className="text-xs font-bold text-indigo-900 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
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
                          <strong className="text-indigo-950 font-bold">客室の寛ぎ：</strong> {hotel.roomTip}
                        </div>
                        <div className="text-slate-700">
                          <strong className="text-indigo-950 font-bold">美食のポイント：</strong> {hotel.gourmetTip}
                        </div>
                      </div>
                    </div>

                    <div>
                      <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4 text-xs text-slate-600">
                        {hotel.highlights.map((hl, hIdx) => (
                          <li key={hIdx} className="bg-indigo-50/40 p-2 rounded-lg border border-indigo-100/60 flex items-start gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-700 flex-shrink-0 mt-0.5" />
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
                          className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-indigo-900 hover:bg-indigo-800 text-white font-bold text-xs rounded-xl shadow transition"
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
                11・12・1月を満喫する「氣比神宮初詣と三方五湖・越前がに」1泊2日黄金コース
              </h2>
            </div>
          </div>

          <div className="space-y-6 text-xs md:text-sm">
            {/* Day 1 */}
            <div className="border-l-2 border-indigo-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-indigo-600 text-white px-2 py-0.5 rounded text-xs">1日目</span>
                北陸新幹線で敦賀へ到着、氣比神宮初詣と敦賀赤レンガ倉庫巡り
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>10:30 北陸新幹線にてJR敦賀駅に到着</strong><br />
                東京駅から最速3時間8分、関西・中京からも特急で快適に到着。駅前コインロッカーやホテルに荷物を預け、市内観光へ出発。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>11:00 北陸道総鎮守「氣比神宮」へ新春初詣</strong><br />
                雪化粧した朱塗りの大鳥居をくぐり、清冽な空気が流れる境内へ。長命水で清め、御本殿にて新年の幸福と安全を祈願。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>13:00 敦賀港エリア「敦賀赤レンガ倉庫」と港町ランチ</strong><br />
                日本海に面した赤レンガ倉庫を見学。港近くの食事処で、冬の日本海で揚がったばかりのセイコガニ丼や越前そばに舌鼓。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>15:30 敦賀駅前ホテルまたは三方五湖の温泉宿にチェックイン</strong><br />
                大浴場や湖畔露天風呂で冷えた身体をじっくり温める。夕食には黄色タグ付き越前がにの姿茹でや、若狭ふぐのてっさ・てっちり鍋を満喫。
              </p>
            </div>

            {/* Day 2 */}
            <div className="border-l-2 border-emerald-500 pl-4 space-y-3">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-xs">2日目</span>
                三方五湖の神秘的な冬静寂と日本海ドライブ、お土産調達
              </h3>
              <p className="text-slate-600 leading-relaxed">
                <strong>09:00 水月湖畔・年縞博物館を見学</strong><br />
                奇跡の堆積物「年縞」が世界標準時計となった水月湖。静まり返った湖畔の景観と地球の歴史に思いを馳せる知的な朝散策。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>11:30 日本海沿岸を巡り「日本海さかな街」へ</strong><br />
                日本海側最大級の海鮮市場「日本海さかな街」で、越前がに、若狭ガレイの一夜干し、鯖のへしこなどの特産品をお買い物。
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>14:00 敦賀駅より新幹線・特急に乗車、帰路へ</strong><br />
                新幹線ホームから冬の敦賀の山々を見送り、心洗われる冬旅の余韻に浸る。
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
                福井・敦賀＆若狭 冬の旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div key={idx} className="border border-slate-100 rounded-xl p-4 md:p-5 bg-slate-50/50">
                <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2 flex items-start gap-2">
                  <span className="text-indigo-600 font-black">Q.</span>
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
                あわせて読みたい！全国の厳選「冬の初詣＆名湯・カニグルメ特集」
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
            <Link 
              href="/winter-ishikawa-hakusan-shirayamahime-hatsumode-tatsunokuchi-onsen-kanougani-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/30 transition block space-y-1"
            >
              <span className="font-bold text-indigo-950 block">【石川】白山比咩神社初詣と辰口温泉・加能ガニ名宿</span>
              <span className="text-slate-500 text-xs">北陸の総鎮守と開湯1400年の名湯、青タグ加能ガニと加賀丸いもを巡る極上冬旅。</span>
            </Link>

            <Link 
              href="/winter-kyoto-tango-amanohashidate-ine-funaya-taizagani-kanburi-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/30 transition block space-y-1"
            >
              <span className="font-bold text-indigo-950 block">【京都】天橋立雪景色と伊根の舟屋・幻の間人ガニ名宿</span>
              <span className="text-slate-500 text-xs">日本三景の幻雪飛龍観と伊根の寒ブリ、間人港水揚げの幻の蟹を味わう丹後紀行。</span>
            </Link>

            <Link 
              href="/winter-toyama-takaoka-zuiryuji-hatsumode-himi-kanburi-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/30 transition block space-y-1"
            >
              <span className="font-bold text-indigo-950 block">【富山】国宝瑞龍寺初詣と氷見の寒ブリ名宿</span>
              <span className="text-slate-500 text-xs">加賀前田家ゆかりの格式高い国宝寺院と富山湾の冬の王者・氷見寒ブリづくし。</span>
            </Link>

            <Link 
              href="/winter-mie-iseshima-jingu-hatsumode-toba-matoya-oyster-ise-ebi-stay"
              className="p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/30 transition block space-y-1"
            >
              <span className="font-bold text-indigo-950 block">【三重】伊勢神宮新春初詣と冬旬的矢かき・伊勢海老名宿</span>
              <span className="text-slate-500 text-xs">二千年の祈りと宇治橋大鳥居の冬日の出、極上の的矢かきと松阪牛会席。</span>
            </Link>
          </div>
        </section>

        {/* Internal Link CTA */}
        <section className="bg-gradient-to-r from-indigo-950 to-slate-900 text-white rounded-2xl p-8 text-center space-y-4">
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
              className="px-6 py-3 bg-indigo-800 hover:bg-indigo-700 text-white font-black text-xs md:text-sm rounded-xl border border-indigo-600 transition"
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
