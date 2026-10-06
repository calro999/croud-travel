import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, Flame, Landmark, Snowflake, ShieldCheck, Footprints, Coffee, Car
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月京都】雪の貴船神社積雪日限定ライトアップ！名宿5選',
  description: '冬の京都で最も幽玄な美しさを放つ洛北の奥座敷・貴船、鞍馬、大原。しんしんと降り積もる白銀の雪と。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '貴船 旅館, 大原 温泉, 貴船神社 積雪ライトアップ, ぼたん鍋 京都, 貴船ふじや, お宿 芹生, 料理旅館 右源太, 大原の里, 11月 12月 1月 京都 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kyoto-kibune-kurama-snow-lightup-botannabe-stay/"
  },
  openGraph: {
    title: '【11・12・1月京都】雪の貴船神社積雪日限定ライトアップ！名宿5選',
    description: '冬の京都で最も幽玄な美しさを放つ洛北の奥座敷・貴船、鞍馬、大原。しんしんと降り積もる白銀の雪と。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-kyoto-kibune-kurama-snow-lightup-botannabe-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/143368/143368.jpg",
      width: 1200,
      height: 630,
      alt: '雪の貴船神社積雪ライトアップと洛北奥座敷の老舗料理旅館'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月京都】雪の貴船神社積雪日限定ライトアップ＆奥座敷冬情趣！名物ぼたん鍋と名湯京懐石の隠れ家名宿5選",
    description: "冬の京都で最も幽玄な美しさを放つ洛北の奥座敷・貴船、鞍馬、大原。しんしんと降り積もる白銀の雪と、貴船神社の石段を照らす朱塗りの春日灯籠が織りなす「積雪日限定ライトアップ」は息を呑む奇跡の絶景。静寂に包まれた三千院の庭園や鞍馬寺の凛とした空気、囲炉裏端で味わう熱々の名物「ぼたん鍋（猪肉の白味噌仕立て）」や大原温泉の雪見露天風呂に癒やされる冬の京都隠れ家トリップ。楽天APIから最新取得した洛北奥座敷の極上料理旅館＆温泉宿5選を徹底特集します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/143368/143368.jpg"]
  }
};

export default function KyotoKibuneKuramaWinterPage() {
  const hotelsData = [
            {
              id: 1,
              name: "大原温泉湯元　旬味草菜　お宿　芹生",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/143368/143368.jpg",
              rating: 4.78,
              reviews: 41,
              price: "¥38,582〜",
              access: "地下鉄　国際会館駅よりバスにて２５分",
              special: "大原三千院畔、大原温泉の料理旅館。美しい庭園と山菜、地野菜、川魚など。自然食材を活かしたお料理が自慢",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F143368%2F143368.html",
              story: "京都大原・三千院の山門前という絶好のロケーションに佇む名門料理旅館「大原温泉湯元 旬味草菜 お宿 芹生」。手入れの行き届いた日本庭園を囲むように数寄屋造りの客室が配され、冬には白銀の雪をまとった庭園の風情を客室から心ゆくまで愛でることができます。宿の自慢は大原の地下深くから湧き出る自家源泉「大原温泉」。肌に吸い付くようななめらかなアルカリ性単純温泉で、雪景色を望む露天風呂での雪見湯は極楽のひとときです。夕食は主人が心を込めて仕立てる「草菜料理」。契約農家から毎朝届く大原の冬野菜や旬の川魚、冬限定の丹波猪肉を用いた小鍋など、京都洛北の滋味深さを五感で味わう至高の会席料理が供されます。静まり返った早朝に誰よりも早く三千院へ参拝できる贅沢な特権も宿ならではの魅力。雪をかぶった苔庭を有清園で独り占めする朝の時間は、他では決して味わえない一生の思い出になります。",
              roomTip: "庭園露天風呂付客室「さくら」または「もみじ」。専用の露天風呂から白銀に染まる大原の庭園を眺めながら、24時間好きな時に名湯を満喫。",
              gourmetTip: "名物「草菜会席」。大原の寒締め冬野菜の天ぷらや、特製出汁で煮込む熱々の小鍋仕立て。地酒とともにじっくり味わう冬の贅沢膳。",
              highlights: [
                "三千院門前徒歩1分・自家源泉かけ流し大原温泉の雪見露天・草菜料理と旬小鍋",
                "美しい日本庭園を囲む数寄屋造り客室・露天風呂付き客室完備・静寂の逗留",
                "大原の朝採れ冬野菜会席・静寂に包まれた朝の三千院散策・極上の隠れ家リゾート"
              ]
            },
            {
              id: 2,
              name: "京都“元祖川床”発祥の老舗料理旅館　貴船ふじや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67265/67265.jpg",
              rating: 4.69,
              reviews: 147,
              price: "¥33,100〜",
              access: "叡山電車鞍馬線　貴船口駅より徒歩２０分（送迎有り・事前予約不要。当日お電話いただければお迎えに参ります。）",
              special: "貴船・川床の元祖【創業天保年間】貴船神社門前に佇み、洛北の四季を盛り込んだ川魚生簀料理が自慢。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67265%2F67265.html",
              story: "貴船神社の二の鳥居前、貴船川の清流沿いに創業天保年間の歴史を誇る老舗中の老舗「京都“元祖川床”発祥の老舗料理旅館 貴船ふじや」。夏の川床発祥の宿としても名高い当宿は、冬になると「元祖ぼたん鍋」の名宿として全国の美食家を魅了します。雪化粧をした貴船神社の鳥居や参道を目前に望む客室は、木の温もりと静寂に包まれた純和風空間。名物ぼたん鍋は、厳選された上質な天然猪肉を薄切りにし、牡丹の花のように美しく盛り付け、門外不出の特製白味噌出汁で煮込む逸品。臭みが一切なく、噛むほどに甘みと旨味が溢れ出す極上の猪肉と、冬の京野菜の絶妙な調和は、一度味わえば忘れられない冬の記憶となります。貴船神社の積雪ライトアップ鑑賞にもこれ以上ない最高峰の立地を誇り、冷えた体をすぐに温かい客室と名物鍋で温めることができます。",
              roomTip: "貴船川渓流側和室。せせらぎの音と雪をまとった木々を眺めながら、貴船神社の神聖な空気感に包まれる特別な和の空間。",
              gourmetTip: "「元祖ぼたん鍋会席」。創業以来受け継がれる秘伝の白味噌出汁で煮込む天然猪肉。川魚の塩焼きや山菜料理とともに味わう究極の冬鍋。",
              highlights: [
                "貴船神社二の鳥居前・天保年間創業の川床発祥宿・元祖ぼたん鍋の極上白味噌仕立て",
                "清流沿いの純和風客室・臭みのない最高峰天然猪肉・貴船神社冬詣に至近",
                "天保から受け継ぐ秘伝出汁・貴船の雪景色を目前に望む贅沢な部屋食"
              ]
            },
            {
              id: 3,
              name: "料理旅館　右源太",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/70674/70674.jpg",
              rating: 4.85,
              reviews: 10,
              price: "¥42,000〜",
              access: "叡山電鉄　貴船口駅より徒歩約30分。無料送迎サービスがありますので当日は出町柳駅から乗車前にお電話ください。",
              special: "客室はメゾネットタイプ。露天風呂・暖炉又は囲炉裏・書斎を完備。夏は川床料理、冬は氣生根鍋が名物。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70674%2F70674.html",
              story: "貴船川の最上流、貴船神社奥宮の手前に佇む大人のための隠れ家料理旅館「料理旅館 右源太」。豊かな自然と清冽な水に抱かれたこの地で、静寂と贅を極めた滞在を提供しています。わずか数室のみの客室はいずれもゆったりとした設えで、冬の雪山と渓流を見渡すプライベートな空間が広がります。右源太の冬の名物料理は、特製の「気包鍋（きほうなべ）」や極上の「ぼたん鍋」。料理長が厳選した丹波産の上質な猪肉と、京都の地豆腐、九条ネギ、聖護院大根などを特製スープでじっくり煮込み、冷えた体を芯から温めてくれます。客室の展望風呂からは貴船の雪深い大自然を一望でき、細部まで行き届いたおもてなしと静けさが約束された、至高の京都奥座敷ステイ。日常の喧騒から完全に解き放たれ、雪と清流の音だけに包まれる至福の時間をお過ごしいただけます。",
              roomTip: "離れ客室（展望檜風呂付き）。貴船の雪景色と清流を眼下に望みながら、檜の香りに包まれて優雅なプライベートバスタイムを独占。",
              gourmetTip: "右源太特製「極上ぼたん鍋」。脂の乗った上質な丹波猪肉を特製合わせ味噌で仕立てる冬の看板料理。洗練された先付や向付とともに堪能。",
              highlights: [
                "貴船川最上流の隠れ家・丹波産天然猪肉の極上ぼたん鍋・客室展望檜風呂",
                "わずか数室の限定プライベート空間・細やかなもてなし・雪山渓谷の絶景",
                "名物気包鍋・京都の地酒厳選ペアリング・大人の記念日旅行に最高のロケーション"
              ]
            },
            {
              id: 4,
              name: "京・貴船　ひろや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/44006/44006.jpg",
              rating: 4.60,
              reviews: 28,
              price: "¥36,000〜",
              access: "叡山電鉄　 貴船口駅より２ｋｍ（送迎有り要ＴＥＬ）",
              special: "貴船川に面した昔ながらの料理旅館。季節京会席が自慢で、特に貴船川の川床は夏の風物詩として好評。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44006%2F44006.html",
              story: "貴船神社の参道沿い、貴船川のせせらぎに寄り添うように立つ名門料理旅館「京・貴船 ひろや」。四季折々の自然の美しさをそのまま宿の佇まいに映し出し、冬には白銀の雪景色と暖かな行灯の灯りが訪れる人々を優しく迎え入れます。全室が貴船川に面しており、窓を開ければ雪をかぶった巨木と澄んだ渓流のせせらぎが心地よく響きます。ひろやが誇る冬の京料理は、彩り豊かな前菜から始まり、冬の味覚である寒鰤や甘鯛、上質な和牛や猪肉の鍋物まで、一品一品に職人の精緻な技が光る芸術的な懐石料理。温かいおもてなしとともに、京都の奥深い冬の情緒を心ゆくまで堪能できます。雪の貴船神社参拝の拠点としても最適な静けさを誇ります。",
              roomTip: "川沿い本館和室。雪景色に染まる貴船の自然をパノラマで望む落ち着いた空間。床の間の季節のしつらえが和の美を演出。",
              gourmetTip: "冬の「特選京懐石」。料理長が毎朝仕入れる旬の厳選素材を活かした温かい蒸し物や焼き物、上品な出汁が香る冬の椀物を部屋食または個室で。",
              highlights: [
                "全室貴船川ビュー・川のせせらぎと雪景色の調和・職人技が光る珠玉の冬京懐石",
                "格式ある老舗料理旅館・冬の寒鰤や甘鯛の贅沢膳・心温まるおもてなし",
                "貴船神社積雪ライトアップ鑑賞拠点・温かい蒸し物と上品な出汁の冬懐石"
              ]
            },
            {
              id: 5,
              name: "京都大原の民宿～１００年続く希少味噌～大原温泉　大原の里",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14574/14574.jpg",
              rating: 4.19,
              reviews: 506,
              price: "¥8,800〜",
              access: "JR京都駅より京都バス 大原行きで「大原」下車 徒歩１２分★「四条河原町」～「大原」はバスで約５０分♪",
              special: "大原温泉湯元。露天・五右衛門風呂がある大原名物「味噌鍋」本家の民宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14574%2F14574.html",
              story: "京都大原ののどかな田園風景の中に佇み、100年以上受け継がれる自家製熟成味噌が自慢の温泉民宿「大原温泉 大原の里」。大原の自然豊かな里山の恵みと、名湯「大原温泉」をリーズナブルかつ温かなもてなしで楽しめる大人気の宿です。館内の露天風呂は、昔懐かしい五右衛門風呂や檜風呂を備え、冬には雪が舞う庭園を眺めながらの雪見風呂が楽しめます。夕食の看板メニューは「名物 味噌鍋」。大原の澄んだ空気と水でじっくり仕込まれた無添加の味噌出汁に、新鮮な地鶏や豚肉、大原の朝採れ冬野菜がたっぷり入った熱々鍋は、体の芯までポカポカに温まる素朴で贅沢な冬のご馳走です。炬燵で暖まりながら過ごす里山時間は格別の癒やしで、都会の疲れを一瞬で忘れさせてくれます。",
              roomTip: "和室（庭園側）。畳の香りとこたつが用意された温かみのある空間で、冬の里山の雪景色を眺めながらのんびりと寛げます。",
              gourmetTip: "「名物 地鶏味噌鍋」。100年伝承の無添加熟成味噌の濃厚なコクと地鶏の旨味が溶け合う絶品スープ。〆のうどんや雑炊まで絶品。",
              highlights: [
                "100年伝承の無添加自家製味噌鍋・五右衛門雪見露天風呂・里山こたつで温まる癒やし",
                "大原温泉の良質なアルカリ性単純泉・アットホームな居心地・抜群のコストパフォーマンス",
                "地鶏と大原野菜の旨味が溶け出す絶品鍋・雪見露天で手足を伸ばす里山体験"
              ]
            }
  ];

  const faqData = [
  {
    "q": "貴船神社の「積雪日限定ライトアップ」の開催日程と開催確認方法は？",
    "a": "例年1月中旬から2月中旬の土曜日限定で実施されます。当日の積雪状況（適度な積雪があること）を神社側が判断し、開催される場合は当日の15:00頃に貴船神社公式Webサイトや公式SNS（X/Twitter、Instagram）にて正式告知されます。点灯時間は夕暮れ（17:00頃）から20:00頃までとなり、白銀の雪と朱色の春日灯籠の光の対比は冬の京都随一の奇跡の絶景です。"
  },
  {
    "q": "冬の貴船・鞍馬・大原へのアクセス方法と冬道運転の注意点は？",
    "a": "貴船・鞍馬へは京阪電車出町柳駅から叡山電鉄に乗車し、「貴船口駅」または「鞍馬駅」へ（約30分）。貴船口駅からは京都バスまたは宿泊旅館の送迎バスを利用します。大原へは京都駅や地下鉄国際会館駅から京都バス（大原行き）が運行しています。12月〜2月の洛北エリアは京都市内中心部より気温が3〜5度低く、道路が凍結・積雪するため、レンタカーや自家用車の場合はスタッドレスタイヤ装着が必須です。公共交通機関の利用を強くおすすめします。"
  },
  {
    "q": "冬の京都奥座敷（貴船・大原）での服装と靴選びの注意点は？",
    "a": "山あいに位置する洛北は底冷えが厳しく、日中でも気温が5度以下、朝晩は氷点下に達します。厚手のダウンコート、保温インナー、マフラー、手袋、ニット帽の完全防寒が基本です。特に靴は、貴船神社の石段や大原三千院の庭園が雪や凍結で滑りやすくなるため、滑り止めの溝が深いスノーブーツや防水トレッキングシューズを必ず着用してください。"
  },
  {
    "q": "冬の名物「ぼたん鍋」の特徴とおすすめの味わい方は？",
    "a": "「ぼたん鍋」は冬のジビエの王様である天然猪肉を使った鍋料理です。冬の猪は木の実を蓄えて脂が乗り、豚肉以上にコクがありながらも脂身があっさりしているのが特徴です。貴船や大原では、伝統の白味噌や熟成合わせ味噌を出汁に溶かし、九条ネギやゴボウ、椎茸などの京野菜とともに煮込みます。煮込むほどに柔らかく旨味が増す猪肉を、山椒や七味を添えて熱々でいただくのが通の味わい方です。"
  },
  {
    "q": "大原三千院や貴船神社を巡る冬の散策の見どころと混雑具合は？",
    "a": "冬の洛北は春の桜や秋の紅葉シーズンに比べて観光客が落ち着き、静寂の中で本来の京都の風情を味わえるのが最大の魅力です。三千院の庭園「有清園」では、杉木立と青苔にうっすらと雪が積もり、小さな「わらべ地蔵」が雪帽子をかぶる愛らしい姿に出会えます。朝一番（9:00前）に訪れれば、誰の足跡もついていない静寂の雪庭を独占できます。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-kyoto-kibune-kurama-snow-lightup-botannabe-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-kyoto-kibune-kurama-snow-lightup-botannabe-stay"
        },
        "headline": "【11・12・1月京都】雪の貴船神社積雪日限定ライトアップ＆奥座敷冬情趣！名物ぼたん鍋と名湯京懐石の隠れ家名宿5選",
        "description": "冬の京都で最も幽玄な美しさを放つ洛北の奥座敷・貴船、鞍馬、大原。しんしんと降り積もる白銀の雪と、貴船神社の石段を照らす朱塗りの春日灯籠が織りなす「積雪日限定ライトアップ」は息を呑む奇跡の絶景。静寂に包まれた三千院の庭園や鞍馬寺の凛とした空気、囲炉裏端で味わう熱々の名物「ぼたん鍋（猪肉の白味噌仕立て）」や大原温泉の雪見露天風呂に癒やされる冬の京都隠れ家トリップ。楽天APIから最新取得した洛北奥座敷の極上料理旅館＆温泉宿5選を徹底特集します。",
        "datePublished": "2026-10-04T00:00:00+09:00",
        "dateModified": "2026-10-04T00:00:00+09:00",
        "inLanguage": "ja",
        "publisher": {
          "@type": "Organization",
          "name": "地域の宿探訪",
          "url": "https://croud-travel.pages.dev"
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
            "name": "特集一覧",
            "item": "https://croud-travel.pages.dev/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "京都・貴船＆大原冬特集",
            "item": "https://croud-travel.pages.dev/winter-kyoto-kibune-kurama-snow-lightup-botannabe-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };


  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-teal-950 to-emerald-950 text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(20,184,166,0.18),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-medium">
            <Snowflake className="w-4 h-4 text-teal-300" />
            <span>11月・12月・1月冬の京都奥座敷＆名湯隠れ家特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-6">
            雪の貴船神社積雪日限定ライトアップ＆奥座敷冬情趣！<br className="hidden sm:inline" />
            名物ぼたん鍋と名湯京懐石の隠れ家名宿5選
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            しんしんと降り積もる白銀の雪と、貴船神社の石段を照らし出す朱塗りの春日灯籠。大原三千院の静まり返った雪庭、囲炉裏端でグツグツと煮立つ秘伝白味噌仕立ての天然ぼたん鍋、そして大原温泉の雪見露天風呂。冬だからこそ出会える、静寂と極上の温もりに満ちた京都奥座敷の旅へご案内します。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-200 border-t border-slate-700/60 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-teal-400 shrink-0" />
              <span>期間：11月下旬〜1月下旬</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
              <span>貴船神社積雪ライトアップ</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-teal-400 shrink-0" />
              <span>元祖天然ぼたん鍋</span>
            </div>
            <div className="flex items-center gap-2">
              <Waves className="w-4 h-4 text-teal-400 shrink-0" />
              <span>大原温泉源泉雪見露天</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Section 1: エリア解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-teal-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Destination Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Snowflake className="w-6 h-6 text-teal-500 shrink-0" />
              冬の洛北・貴船＆大原が魅せる幽玄な静寂の美
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              京都市街の喧騒から北へ電車やバスでわずか40〜50分。洛北の山あいに広がる「貴船」と「大原」は、冬を迎えると一面の水墨画のような静寂に包まれます。万物の命の源である水の神を祀る「貴船神社」では、1月中旬から2月中旬にかけての土曜日に積雪があった日限定で「積雪日限定ライトアップ」が開催されます。白銀の雪をかぶった80段の参道石段と、そこに立ち並ぶ朱塗りの春日灯籠に灯りがともる光景は、息を呑むほど幽玄で神聖な冬の京都の極みです。
            </p>
            <p>
              貴船川のせせらぎに沿って奥宮へと続く道は、清冽な冷気に包まれ、訪れる人の心を洗うような静けさがあります。また、隣接する「鞍馬寺」では、義経伝説が残る霊峰・鞍馬山に雪が舞い降り、仁王門から本殿金堂へと続く九十九折の参道が凛とした神聖な空気に満たされます。
            </p>
            <p>
              東の山あいに位置する「大原」は、天台声明の聖地として知られる三千院や寂光院が佇む山里。冬の朝、誰の足跡もついていない三千院の庭園「有清園」には薄らと雪が積もり、杉木立の間から差し込む柔らかな冬の陽光と、雪帽子をかぶった可愛らしい「わらべ地蔵」が訪れる人の心を優しく解きほぐします。
            </p>
            <p>
              冷えた体を待っているのは、洛北ならではの冬の美食。冬の猪は木の実をたっぷり食べて良質な脂を蓄え、最も美味しくなると言われます。創業天保年間から受け継がれる老舗料理旅館の特製白味噌出汁で煮込む「ぼたん鍋」や、大原の100年伝承の無添加熟成味噌鍋は、噛み締めるほどに深い旨味が広がる冬の至宝。そして湯量豊富な大原温泉の雪見露天風呂に浸かれば、京都の冬の深淵を味わい尽くす感動が胸を満たします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="bg-teal-50/60 rounded-xl p-5 border border-teal-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-teal-600" />
                <span>奇跡の積雪日ライトアップ</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                積雪日限定で開催される貴船神社の夜間灯り。朱色の灯籠と純白の雪が織りなす幻想的な参道。
              </p>
            </div>
            <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-amber-600" />
                <span>天然猪肉の元祖ぼたん鍋</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                秘伝の白味噌出汁と上質な丹波産猪肉、甘みたっぷりの冬京野菜が織りなす、体温まる冬の極上鍋。
              </p>
            </div>
            <div className="bg-emerald-50/60 rounded-xl p-5 border border-emerald-100">
              <div className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <Waves className="w-5 h-5 text-emerald-600" />
                <span>大原温泉の雪見露天風呂</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                肌に優しいアルカリ性単純温泉の自家源泉。雪景色の日本庭園を眺めながらゆったり芯から温まる湯浴み。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: 厳選ホテル紹介 */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-teal-600 font-bold text-xs sm:text-sm tracking-wider uppercase">Verified Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              冬の洛北・貴船＆大原を味わう厳選隠れ家料理旅館5選
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              楽天APIからリアルタイム取得した最新宿泊料金・クチコミ評価点に基づき、貴船神社至近・三千院門前・元祖ぼたん鍋・雪見露天風呂を兼ね備えた名宿を厳選紹介。
            </p>
          </div>

          <div className="space-y-12">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id}
                id={`hotel-${hotel.id}`}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image */}
                  <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      <Building className="w-3.5 h-3.5 text-teal-400" />
                      <span>奥座敷名宿 #{hotel.id}</span>
                    </div>
                  </div>

                  {/* Hotel Info */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-1.5 text-amber-500">
                          <Star className="w-4 h-4 fill-amber-400" />
                          <span className="font-extrabold text-slate-900 text-sm sm:text-base">{hotel.rating}</span>
                          <span className="text-xs text-slate-500">（{hotel.reviews.toLocaleString()}件）</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-slate-600 block">参考宿泊料金（1名）</span>
                          <span className="text-lg sm:text-2xl font-black text-teal-600">{hotel.price}</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                        {hotel.name}
                      </h3>

                      <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <MapPin className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                        <span>{hotel.access}</span>
                      </div>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {hotel.story}
                      </p>

                      {/* Highlights */}
                      <div className="bg-slate-50 rounded-xl p-4 space-y-2 border border-slate-100">
                        <span className="text-xs font-bold text-slate-700 block">冬の宿泊注目ポイント</span>
                        <ul className="text-xs text-slate-600 space-y-1.5">
                          {hotel.highlights.map((h, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="bg-teal-50/50 p-3 rounded-lg border border-teal-100/60">
                          <span className="font-bold text-teal-950 block mb-1">客室選びのヒント</span>
                          <p className="text-slate-600">{hotel.roomTip}</p>
                        </div>
                        <div className="bg-amber-50/50 p-3 rounded-lg border border-amber-100/60">
                          <span className="font-bold text-amber-950 block mb-1">美食・ぼたん鍋の魅力</span>
                          <p className="text-slate-600">{hotel.gourmetTip}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md shadow-teal-600/20 group"
                      >
                        <span>楽天トラベルで空室・冬限定プランを見る</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2.5: 洛北名物ぼたん鍋と里山味覚 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-teal-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Botannabe & Local Dining</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-teal-500 shrink-0" />
              冬のジビエの最高峰！元祖ぼたん鍋と大原100年熟成味噌鍋の深み
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              京都洛北の冬の食文化を語る上で欠かせないのが「ぼたん鍋」です。丹波や京都の山々で育った天然猪は、ドングリや栗をたっぷり食べて上質な脂をまといます。その肉を牡丹の花弁のように大皿に美しく並べ、昆布と鰹の上品な出汁に伝統の白味噌を溶いた鍋にくぐらせます。猪肉は煮込むほどに柔らかく、脂身が甘く溶け出すのが特徴。九条ネギ、聖護院大根、京水菜、しめじなどの冬野菜とともに味わうと、体の中からじんわりと温まります。
            </p>
            <p>
              また大原エリアでは、清らかな地下水と澄んだ寒気の中で100年以上受け継がれる「無添加熟成味噌」を用いた味噌鍋が名物。地鶏や季節の野菜から出た旨味と、奥深い味噌のコクが絶妙に調和し、旅人の心とお腹を満たしてくれます。食後には大原特産の赤紫蘇を使った香り高い紫蘇茶でほっと一息つくのも里山ならではの贅沢です。
            </p>
            <p>
              さらに、冬の京都洛北を訪れたらぜひ味わいたいのが、寒の水で作られる老舗の「湯豆腐」や「生湯葉」。冷え切った冬の京都の朝や昼に、出汁の効いた熱々の湯豆腐を特製の生姜や刻み九条ネギとともに口に運ぶ瞬間は、素材本来の素朴な甘みが口いっぱいに広がり、京都の精神文化に触れるような静かな喜びに包まれます。
            </p>
          </div>
        </section>

        {/* Section 3: 気候・服装ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-teal-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Climate & Packing</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Snowflake className="w-6 h-6 text-teal-500 shrink-0" />
              11月・12月・1月の気温と京都奥座敷の防寒・滑り止め靴対策
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-teal-900 text-base flex items-center justify-between">
                <span>11月下旬（名残の紅葉〜初冬）</span>
                <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded">平均 9℃ / 最低 4℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                山あいの冷気が厳しくなり始めます。厚手のウールコートやインナーダウン、ストールを準備しましょう。朝晩の冷え込みに備えて手袋もあると安心です。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-teal-900 text-base flex items-center justify-between">
                <span>12月（初雪の候）</span>
                <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded">平均 5℃ / 最低 0℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                山間部では初雪が舞う季節。底冷えが厳しいため、厚手のロングダウン、ヒートテック、裏起毛パンツを着用。石段が濡れて滑りやすいため滑り止めの効く靴が必須です。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-teal-900 text-base flex items-center justify-between">
                <span>1月（積雪・厳冬期）</span>
                <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded">平均 2℃ / 最低 -3℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                貴船神社の積雪ライトアップが期待できる真冬。氷点下の寒さになるため、防水スノーブーツ、防風ダウン、耳当て、手袋、カイロを完全装備して参拝に臨みましょう。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: モデルコース */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-teal-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Suggested Itinerary</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Compass className="w-6 h-6 text-teal-500 shrink-0" />
              1泊2日 貴船雪のライトアップ＆大原三千院冬の隠れ家モデルコース
            </h2>
          </div>

          <div className="space-y-6">
            <div className="border-l-2 border-teal-500 pl-4 sm:pl-6 space-y-4">
              <div className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs px-2.5 py-1 rounded-md">Day 1</span>
                <span>出町柳から叡山電鉄、貴船神社冬詣＆名物ぼたん鍋</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong>11:30</strong> 京阪出町柳駅から叡山電鉄に乗車。車窓から洛北の雪景色を眺めながら貴船口駅へ（約30分）。
                </p>
                <p>
                  <strong>12:30</strong> 貴船の料理旅館にチェックイン手続きと荷物預け。
                </p>
                <p>
                  <strong>13:30</strong> 貴船神社本宮から奥宮、結社（ゆいのやしろ）をゆっくり冬詣。絵馬発祥の社で新年の祈願。
                </p>
                <p>
                  <strong>15:30</strong> 旅館に戻り、窓外の雪景色を眺めながら温かいお茶と季節の主菓子で一服。
                </p>
                <p>
                  <strong>17:00</strong> 夕暮れ時、貴船神社の春日灯籠に明かりが灯る。雪の参道石段の幻想的なライトアップを鑑賞。
                </p>
                <p>
                  <strong>18:30</strong> 旅館のお部屋または食事処で、秘伝白味噌仕立ての「元祖天然ぼたん鍋」と京懐石を堪能。
                </p>
              </div>
            </div>

            <div className="border-l-2 border-emerald-500 pl-4 sm:pl-6 space-y-4">
              <div className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2">
                <span className="bg-emerald-600 text-white text-xs px-2.5 py-1 rounded-md">Day 2</span>
                <span>大原三千院の静寂の雪庭から大原温泉雪見露天風呂へ</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong>08:00</strong> 宿特製の朝粥や湯豆腐が並ぶ体に優しい和朝食をゆっくりいただく。
                </p>
                <p>
                  <strong>09:30</strong> チェックアウト後、バスで大原へ移動（国際会館経由）。
                </p>
                <p>
                  <strong>10:30</strong> 「三千院」へ。白銀の雪帽子をかぶったわらべ地蔵と、静まり返った有清園の苔庭を鑑賞。
                </p>
                <p>
                  <strong>12:30</strong> 大原の里山で名物の手作り赤紫蘇茶や大原野菜の天ぷらランチを楽しむ。
                </p>
                <p>
                  <strong>14:00</strong> 大原温泉の足湯カフェや日帰り露天風呂で冷えた足を温め、京都駅へ戻り帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-teal-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              冬の貴船・鞍馬・大原旅行 よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-5 bg-slate-50/30 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-teal-600 font-extrabold shrink-0">Q.</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: 周遊内部リンク */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-teal-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              あわせて楽しむ！冬の京都＆関西名湯名所特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <Link 
              href="/winter-kyoto-gion-higashiyama-yasaka-shrine-hatsumode-kiyomizu-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-teal-400 block mb-1">祇園・東山冬特集</span>
              <span className="font-bold text-white block">八坂神社初詣＆雪の清水寺！冬の祇園白川と老舗京懐石の名宿</span>
            </Link>

            <Link 
              href="/winter-kyoto-arashiyama-onsen-yudofu-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-teal-400 block mb-1">嵐山冬特集</span>
              <span className="font-bold text-white block">冬の嵐山渡月橋雪景色と竹林の小径！名物湯豆腐と嵐山温泉の名宿</span>
            </Link>

            <Link 
              href="/winter-shiga-hieizan-enryakuji-ogoto-onsen-omigyu-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-teal-400 block mb-1">比叡山・おごと温泉冬特集</span>
              <span className="font-bold text-white block">比叡山延暦寺の冬景色とおごと温泉！近江牛と琵琶湖を望む名宿</span>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer Navigation */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200 mt-16 text-center text-xs text-slate-500">
        <p>© 2026 地域の宿探訪 - 日本の四季と極上ホテル・旅館を巡る旅</p>
      </footer>
    
      <HubRelatedPosts currentSlug="winter-kyoto-kibune-kurama-snow-lightup-botannabe-stay" />
</div>
  );
}
