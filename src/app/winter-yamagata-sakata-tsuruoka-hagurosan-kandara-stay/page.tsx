import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Mountain, Waves, ShieldCheck, Snowflake, Footprints, Flame, Landmark, AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月山形：出羽三山神社の雪の初詣と山居倉庫雪景色！名宿5選',
  description: '白銀の静寂に包まれる国宝羽黒山五重塔と出羽三山神社三神合祭殿での厳かな雪の初詣。酒田の象徴・山居倉庫の雪化粧ケヤキ並木や。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '出羽三山 初詣, 羽黒山 五重塔 冬, 寒鱈どんがら汁, 湯野浜温泉 宿, 酒田 山居倉庫 雪景色, 鶴岡 旅館, 萬国屋, 九兵衛旅館, 庄内牛, 11月 12月 1月 山形 旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-yamagata-sakata-tsuruoka-hagurosan-kandara-stay/"
  },
  openGraph: {
    title: '11・12・1月山形：出羽三山神社の雪の初詣と山居倉庫雪景色！名宿5選',
    description: '白銀の静寂に包まれる国宝羽黒山五重塔と出羽三山神社三神合祭殿での厳かな雪の初詣。酒田の象徴・山居倉庫の雪化粧ケヤキ並木や。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-yamagata-sakata-tsuruoka-hagurosan-kandara-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/56286/56286.jpg",
      width: 1200,
      height: 630,
      alt: '冬の羽黒山五重塔の雪景色と庄内浜の寒鱈どんがら汁'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月山形：酒田＆鶴岡・羽黒山！出羽三山神社の雪の初詣と山居倉庫雪景色・冬の日本海名物「寒鱈どんがら汁」＆名湯5選",
    description: "白銀の静寂に包まれる国宝羽黒山五重塔と出羽三山神社三神合祭殿での厳かな雪の初詣。酒田の象徴・山居倉庫の雪化粧ケヤキ並木や、荒海日本海が育む冬の至宝「寒鱈どんがら汁」の濃厚な旨味。ユネスコ食文化創造都市・鶴岡の伝統郷土料理と庄内牛、日本海を望む湯野浜温泉や名湯湯田川・温海温泉の雪見露天に癒やされる厳選宿5選を徹底特集します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/56286/56286.jpg"]
  }
};

export const dynamic = 'force-static';

export default function YamagataSakataTsuruokaPage() {
  const hotels = [
            {
              id: 1,
              name: "ＫＡＭＥＹＡ　ＨＯＴＥＬ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/56286/56286.jpg",
              rating: 4.37,
              reviews: 1303,
              price: "¥9,350〜",
              access: "ＪＲ　鶴岡駅より車で２5分、定期バスで４０分／庄内空港より車で１０分",
              special: "水平線に沈む絶景の夕陽を全てのお部屋から。 庄内の豊かな海の幸、山の幸を生かした極上の美食宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56286%2F56286.html",
              story: "創業文化十年（1813年）、二百年以上の長きにわたり文人墨客や皇族を迎えてきた湯野浜温泉随一の老舗迎賓館「ＫＡＭＥＹＡ ＨＯＴＥＬ（旧・亀や）」。日本海の白砂青松が広がる海岸線に建ち、冬の凛とした空気の中、全室から雄大な日本海の白波と水平線を一望できます。宿の象徴である大浴場と露天風呂には、海辺から湧く美肌の塩化物泉がこんこんと注がれ、湯船に身を沈めながら冬の日本海の荒波が織りなすドラマチックな夕景を眺める時間は格別の贅沢。料理はユネスコ食文化創造都市鶴岡の誇りを凝縮した創作和食会席で、冬の庄内浜で水揚げされる寒鱈を白子や肝とともに仕立てた逸品や、庄内豚、最高級庄内牛の陶板焼きなど、伝統と革新が美しく融合した至福の美食体験を約束します。",
              roomTip: "オーシャンビュープレミアム客室。床から天井まで広がるワイドな窓越しに冬の日本海の躍動を眺め、シモンズ社製特注ベッドで深い眠りに浸れます。",
              gourmetTip: "「庄内冬の美味極み会席」。冬旬の寒鱈料理と厳選庄内牛のステーキ、鶴岡の在来冬野菜を取り入れた料理長渾身の特選コース。",
              highlights: [
                "創業二百年の老舗迎賓館・全室オーシャンビューと日本海の夕景露天",
                "ユネスコ食文化創造都市の技・寒鱈白子料理と最高級庄内牛ステーキ",
                "開湯千年の名湯塩化物泉・羽黒山初詣や加茂水族館へのアクセス拠点"
              ]
            },
            {
              id: 2,
              name: "湯野浜温泉　游水亭　いさごや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67149/67149.jpg",
              rating: 4.43,
              reviews: 724,
              price: "¥17,424〜",
              access: "ＪＲ羽越線　鶴岡駅より庄内交通バス湯野浜温泉行き乗車で約４０分／車で約２０分（終点下車）",
              special: "客室露天付き絶景スイートルーム♪ 『食の都・庄内』で旬の美味と絶景の夕日に心癒される宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67149%2F67149.html",
              story: "「数寄屋造りの贅と和の情緒」を重んじ、海を眺めながら優雅な湯浴みと山形庄内の美味を堪能できる名門料理旅館「湯野浜温泉 游水亭 いさごや（いさごや）。」。館内には季節の生花が飾られ、ほのかなお香の香りが旅人を非日常へと誘います。宿自慢の展望大浴場「吟水」や露天風呂は、冬の冷たい海風を遮りながらも日本海の波音と水平線の眺望を楽しめる設計。冬の献立は、庄内浜の漁師から直接買い付ける日本海の冬の王様「寒鱈」のフルコースが圧巻で、濃厚な白子（アブラタラ）の天ぷらや、骨や肝から出汁を取った名物「どんがら汁」、さらに活ズワイガニや鮑の踊り焼きまで、日本海の荒波が育んだ極上の海の幸が並びます。細やかな仲居さんの心配りに心解ける大人の隠れ宿です。",
              roomTip: "海側次の間付き数寄屋和室。畳の香る純和風の空間で、夕暮れ時に茜色から群青色へと刻一刻と変化する日本海の冬の表情を独占。",
              gourmetTip: "「庄内浜寒鱈＆活蟹の冬贅沢膳」。濃厚な寒鱈の白子焼きと熱々のどんがら汁、さらに甘みたっぷりの蟹料理を一度に堪能できる冬の最高峰プラン。",
              highlights: [
                "数寄屋造りの和情緒・海一望の展望風呂「吟水」と細やかなもてなし",
                "庄内浜直送の特大寒鱈どんがら汁・活ズワイガニの贅沢冬膳",
                "プライベート感あふれる寛ぎ・冬の日本海の波音に癒やされる一夜"
              ]
            },
            {
              id: 3,
              name: "湯田川温泉　九兵衛旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12536/12536.jpg",
              rating: 4.81,
              reviews: 740,
              price: "¥9,020〜",
              access: "ＪＲ羽越線鶴岡駅よりバス25分／庄内空港よりタクシー30分／山形自動車道鶴岡ＩＣより15分",
              special: "13室の小さな湯宿♪珠玉の手づくりできたて料理を朝夕個室で堪能♪温泉は源泉かけ流しで露天、無料貸切♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12536%2F12536.html",
              story: "出羽三山信仰の精進落としの湯として古くから親しまれ、国民保養温泉地に指定されている湯田川温泉の最高峰「湯田川温泉 九兵衛旅館（くへえりょかん）。」。静かな山あいの竹林に囲まれた木造の宿は、民芸調の温かみとモダンな意匠が美しく調和しています。宿の温泉は「毎分約千リットル」自噴する源泉を贅沢に掛け流しにしており、天然の硫酸塩泉は生まれたてのように清らかで、冬の乾燥した肌をしっとりと包み込みます。料理に対する評価は県内でも突出して高く、鶴岡の豊かな風土が育む旬の食材を一つ一つ丁寧に調理。冬は地元酒蔵の新酒粕を使った寒鱈粕汁や、幻の孟宗竹の郷土料理、山形牛のローストビーフなど、心温まる絶品料理が並びます。",
              roomTip: "竹林を望む半露天風呂付き客室。窓の外に広がる静寂の竹林に舞い落ちる白雪を眺めながら、誰にも邪魔されずに源泉掛け流しの湯を愉しめます。",
              gourmetTip: "「庄内郷土会席・冬の膳」。寒鱈や庄内浜の地魚のお造り、厳選山形牛のしゃぶしゃぶなど、手作りの温もりが宿る感動のコース。",
              highlights: [
                "湯田川温泉の最高峰・源泉毎分千リットル掛け流しと絶賛の創作会席",
                "山形牛ローストビーフ＆寒鱈粕汁・手作りの温もり宿る美食",
                "国民保養温泉地の静寂・竹林に舞い散る雪を眺める半露天風呂"
              ]
            },
            {
              id: 4,
              name: "温海温泉　萬国屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12577/12577.jpg",
              rating: 4.58,
              reviews: 2683,
              price: "¥12,100〜",
              access: "日本海東北自動車道 あつみ温泉ICから車5分/ＪＲ羽越本線 あつみ温泉駅からタクシー５分/庄内空港から車40分",
              special: "山里のどこか懐かしい風情とおもてなしの心に癒される老舗旅館。所々に飾られた生花が心を和ませてくれます",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12577%2F12577.html",
              story: "開湯千三百年余、庄内の奥座敷として歴代の旅人に愛されてきた温海温泉（あつみおんせん）を代表する老舗名旅館「温海温泉 萬国屋（ばんこくや）」。日本経済新聞や各種ランキングで「プロが選ぶ日本のホテル・旅館100選」に連続入選する格式を誇ります。温海川の渓流沿いに建ち、冬の白銀に包まれた山里の情景は一幅の水墨画のよう。自慢の大浴場「桃源山水」と庭園露天風呂には、湯量豊富な自家源泉が溢れ、雪が積もる巨石や樹木を眺めながらの雪見風呂はまさに極楽の心地。夕食は庄内浜の冬魚介と山形の最高峰ブランド「山形牛」をメインに据えた雅やかな会席料理。伝統の味と至高のおもてなしが特別な冬の記念日を華やかに彩ります。",
              roomTip: "温海川を望む特別フロア和洋室。清流のせせらぎと雪景色を眺めながら、広々としたリビングとベッドで贅沢な寛ぎを満喫。",
              gourmetTip: "「山形牛ステーキ＆庄内浜冬魚介の特選会席」。とろけるような山形牛の陶板ステーキと、冬の日本海で獲れる新鮮な平目や寒ブリのお造り。",
              highlights: [
                "日本のホテル旅館百選連続入選・温海川を望む名湯庭園露天風呂",
                "最高峰山形牛ステーキと庄内浜の冬魚介会席・豪華な宴",
                "三世代旅行から記念日ステイまで安心の風格とおもてなし"
              ]
            },
            {
              id: 5,
              name: "ホテルリッチ＆ガーデン酒田",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4623/4623.jpg",
              rating: 4.19,
              reviews: 1736,
              price: "¥4,700〜",
              access: "■庄内空港よりバス30分　庄内空港行きはホテル道路沿いより運行　■■酒田駅　車で６分■■酒田ＩＣ　１０分",
              special: "北欧テイストの上質なホテル。地元色を追求した美味しい朝食が自慢。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4623%2F4623.html",
              story: "酒田の街並みを一望する高台に位置し、北欧風の洗練されたインテリアと港町・酒田の美食をスマートに愉しめるシティリゾート「ホテルリッチ＆ガーデン酒田」。冬の酒田観光の拠点として抜群のロケーションを誇り、名所「山居倉庫」や日和山公園、本間家旧本邸へもアクセス至便です。客室からは雄大な鳥海山の白銀の稜線や、夕陽に染まる酒田港を見渡せます。館内レストランでは、冬の名物「酒田の寒鱈フェスティバル」に合わせた特製どんがら汁や、庄内平野のつや姫・雪若丸の炊きたてご飯、庄内豚のグリルなど、地元食材をふんだんに取り入れた和洋料理を提供。ビジネスから観光まで快適で機能的な冬の酒田滞在を支えます。",
              roomTip: "鳥海山ビュー・スーペリアツイン。天気が良ければ朝日に白く輝く「出羽富士」鳥海山の神々しい冬姿を客室から展望。",
              gourmetTip: "「庄内の恵み朝食ビュッフェ＆冬の特製ディナー。」。名物の寒鱈汁仕立ての温かいスープや、山形名物玉こんにゃく、庄内産新米の食べ比べが好評。",
              highlights: [
                "山居倉庫観光に好立地・北欧風デザインと鳥海山雪景色の眺望",
                "庄内産つや姫の炊きたてご飯と郷土の温かい朝食ビュッフェ",
                "酒田市街の高台に位置・機能的な客室と無料駐車場完備"
              ]
            }
  ];

  const faqs = [
  {
    "q": "冬の羽黒山（出羽三山神社）初詣の参拝ルートと雪道対策は？",
    "a": "羽黒山山頂の「三神合祭殿（月山・羽黒山・湯殿山の三神を祀る大社殿）。」へは、冬期でも山頂直下まで有料道路（羽黒山有料道路）または路線バスで登ることができます。ただし、国宝の羽黒山五重塔を参拝する場合は、麓の随神門から石段を約15分ほど歩く必要があります。この石段は冬期に雪が積もり凍結して大変滑りやすくなるため、長靴やスノーブーツ、簡易アイゼン（滑り止め）の携行が必須です。随神門の授与所等で長靴の貸出が行われることもあります。冬期は夕方16時を過ぎると急激に暗くなるため、初詣や参拝は午前中から日中の早い時間帯がおすすめです。"
  },
  {
    "q": "山形の冬の名物「寒鱈どんがら汁」とはどのような料理ですか？",
    "a": "「寒鱈どんがら汁（かんだらどんがらじる）」は、厳冬の12月から1月にかけて日本海で産卵のために脂が乗り切った大型のマダラ（寒鱈）を、頭から骨、内臓（肝や胃袋）、身、そして濃厚なオスの白子（庄内ではアブラタラと呼ぶ）まで余すところなくブツ切りにして大鍋で豪快に煮込んだ山形・庄内地方の代表的な郷土料理です。味付けは味噌仕立てで、たっぷりの岩海苔や刻みネギを散らして熱々をいただきます。毎年1月中旬には酒田市や鶴岡市で「寒鱈まつり」が開催され、多くの人で賑わいます。"
  },
  {
    "q": "冬の酒田・山居倉庫の見どころと散策のポイントは？",
    "a": "山居倉庫（さんきょそうこ）は、1893年（明治26年）に建てられた酒田米穀取引所の米保管倉庫で、国の史跡に指定されています。冬の見どころは、裏手に立ち並ぶ樹齢150年以上のケヤキ並木が白銀に雪化粧した風景と、黒塗りの板壁の土蔵群が織りなすモノトーンの美しいコントラストです。敷地内には酒田の物産館「酒田夢の倶楽」が併設されており、庄内の地酒や銘菓、つや姫関連商品、寒鱈加工品などの購入や温かい甘酒を楽しむことができます。"
  },
  {
    "q": "庄内空港や酒田・鶴岡駅からのアクセスや冬の移動手段は？",
    "a": "庄内エリアへは、羽田空港から庄内空港までANA便で約1時間と首都圏からのアクセスが極めて良好です。庄内空港からは酒田駅方面や鶴岡駅方面へ連絡バスが運行しています。鉄道の場合は、新潟駅から特急いなほ（羽越本線）で酒田・鶴岡へ結ばれています。冬期の観光地巡りはレンタカーが便利ですが、日本海側の地吹雪（ホワイトアウト）や路面凍結があるため、スタッドレスタイヤ装着のうえ速度を落とした慎重な運転が必要です。雪道運転に不安がある場合は、観光タクシーや定期路線バスの利用をおすすめします。"
  },
  {
    "q": "冬の加茂水族館（クラゲドリーム館）は冬でも楽しめますか？",
    "a": "鶴岡市立加茂水族館（クラゲドリーム館）は全館屋内施設のため、雪や寒風の厳しい冬でも快適に観光を満喫できる庄内随一の人気スポットです。直径5メートルの円形水槽「クラゲドリームシアター」に約1万匹のミズクラゲが浮遊する光景は圧巻の美しさで、冬は観光客が比較的落ち着いており、ゆったりと神秘的なクラゲの世界に浸ることができます。湯野浜温泉街から車で約10分と非常に近い好立地です。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-yamagata-sakata-tsuruoka-hagurosan-kandara-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-yamagata-sakata-tsuruoka-hagurosan-kandara-stay"
        },
        "headline": "【11・12・1月山形】酒田＆鶴岡・羽黒山！出羽三山神社の雪の初詣と山居倉庫雪景色・冬の日本海名物「寒鱈どんがら汁」＆名湯5選",
        "description": "白銀の静寂に包まれる国宝羽黒山五重塔と出羽三山神社三神合祭殿での厳かな雪の初詣。酒田の象徴・山居倉庫の雪化粧ケヤキ並木や、荒海日本海が育む冬の至宝「寒鱈どんがら汁」の濃厚な旨味。ユネスコ食文化創造都市・鶴岡の伝統郷土料理と庄内牛、日本海を望む湯野浜温泉や名湯湯田川・温海温泉の雪見露天に癒やされる厳選宿5選を徹底特集します。",
        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/56286/56286.jpg",
        "datePublished": "T21:00:00+09:00",
        "dateModified": "T21:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "地域の宿探訪",
          "url": "https://croud-travel.pages.dev",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-yamagata-sakata-tsuruoka-hagurosan-kandara-stay"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-yamagata-sakata-tsuruoka-hagurosan-kandara-stay#breadcrumb",
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
            "name": "酒田＆鶴岡・羽黒山初詣と寒鱈どんがら汁名宿",
            "item": "https://croud-travel.pages.dev/winter-yamagata-sakata-tsuruoka-hagurosan-kandara-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-yamagata-sakata-tsuruoka-hagurosan-kandara-stay#faq",
        "mainEntity": faqs.map(f => ({
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


  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 py-4 text-xs font-semibold text-stone-500 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-700 transition">ホーム</Link>
        <span>/</span>
        <Link href="/features" className="hover:text-blue-700 transition">特集一覧</Link>
        <span>/</span>
        <span className="text-stone-800">山形・酒田＆鶴岡・羽黒山初詣と寒鱈名宿</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="relative bg-gradient-to-b from-stone-900 via-stone-800 to-sky-950 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-bold tracking-wide">
            <Snowflake className="w-3.5 h-3.5 text-sky-400" />
            11月〜1月限定・庄内の冬の神域＆極上味覚特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight md:leading-snug text-balance">「11・12・1月山形」酒田＆鶴岡・羽黒山！出羽三山神社の雪の初詣と山居倉庫雪景色・冬の日本海名物「寒鱈どんがら汁」＆名湯5選</h1>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            白銀の静寂に佇む国宝羽黒山五重塔と出羽三山神社の雪の初詣。酒田・山居倉庫の雪化粧ケヤキ並木と、冬の日本海の王者「寒鱈」を白子・肝ごと豪快に味わう熱々どんがら汁。湯野浜・湯田川・温海温泉の極上雪見露天へご案内します。
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-3 text-xs text-sky-200">
            <span className="flex items-center gap-1.5"><Landmark className="w-4 h-4" /> 出羽三山神社雪の初詣</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4" /> 庄内浜寒鱈どんがら汁</span>
            <span className="flex items-center gap-1.5"><Snowflake className="w-4 h-4" /> 山居倉庫雪化粧ケヤキ並木</span>
            <span className="flex items-center gap-1.5"><Waves className="w-4 h-4" /> 湯野浜温泉日本海一望露天</span>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">

        {/* イントロダクション解説 */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-6">
          <div className="border-l-4 border-sky-600 pl-4">
            <span className="text-xs font-bold text-sky-700 tracking-wider uppercase">Winter Highlights</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              冬の庄内・羽黒山が放つ唯一無二の神秘：雪の修験道と寒風が生む至高の海鮮
            </h2>
          </div>
          <div className="prose text-stone-700 text-sm md:text-base leading-relaxed space-y-4">
            <p>
              山形県北西部に位置する庄内平野（酒田市・鶴岡市）。霊峰・出羽三山と鳥海山に抱かれ、西側を日本海の荒波に洗われるこの地域は、冬になると別世界のような神聖な静寂と豊かな食の喜びに満たされます。その象徴が出羽三山の主峰・羽黒山です。ミシュラン・グリーンガイド・ジャポンで三ツ星を獲得した杉並木の参道は、冬になると純白の雪に包まれ、杉木立の間に佇む国宝「羽黒山五重塔」は息を呑むような厳かさを放ちます。山頂の三神合祭殿で行われる新年の初詣は、修験道の聖地ならではの澄み切った霊気に満ち、一年の再生と開運を願う人々の信仰を集めています。
            </p>
            <p>
              そして、冬の庄内を訪れたなら絶対に味わうべき究極の郷土料理が、12月から1月にかけて最盛期を迎える「寒鱈どんがら汁」です。産卵のために荒波の日本海を回遊する丸々と太った真鱈（寒鱈）は、身の引き締まりはもちろん、濃厚な肝（アブラ）とクリーミーな白子（アブラタラ）が格別。頭や骨、皮に至るまで豪快にぶつ切りにし、丸ごと味噌仕立てで煮込んだどんがら汁は、濃厚なコクと磯の香りが身体の芯まで染み渡り、冬の寒さを一瞬で忘れさせてくれます。
            </p>
            <p>
              港町・酒田では、明治の米蔵である「山居倉庫」のケヤキ並木が雪化粧し、水墨画のような情緒を醸し出します。宿泊拠点には、日本海の荒波と夕陽を望む開湯千年の「湯野浜温泉」、竹林の静寂と毎分1,000リットルの自噴泉を誇る「湯田川温泉」、渓流沿いの風格ある「温海温泉」など名湯が揃い、雪見露天風呂と庄内の銘酒「初孫」「楯野川」を楽しむ贅沢な夜が待っています。
            </p>
          </div>
        </section>

        {/* 厳選ホテル5選 */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-sky-700 tracking-wider uppercase">Selected Ryokan & Hotels</span>
            <h2 className="text-2xl md:text-3xl font-black text-stone-900">
              酒田＆鶴岡・羽黒山！冬の庄内味覚と名湯を満喫する厳選宿5選
            </h2>
            <p className="text-stone-600 text-xs md:text-sm">
              楽天トラベルで卓越した評価を集め、寒鱈や庄内牛の美食と雪見露天風呂を愉しめる宿を厳選
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((hotel) => (
              <article key={hotel.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition">
                <div className="p-6 md:p-8 space-y-6">
                  {/* ヘッダー情報 */}
                  <div className="flex flex-col md:items-center justify-between gap-4 border-b border-stone-100 pb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="bg-sky-600 text-white text-xs font-black px-2.5 py-0.5 rounded-full">
                          第{hotel.id}選
                        </span>
                        <div className="flex items-center text-amber-500 text-xs font-bold">
                          <Star className="w-3.5 h-3.5 fill-current mr-1" />
                          <span>{hotel.rating}</span>
                          <span className="text-stone-400 ml-1">({hotel.reviews}件)</span>
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-stone-900 font-journal-serif">
                        {hotel.name}
                      </h3>
                      <p className="text-xs text-stone-500 flex items-center gap-1.5 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
                        {hotel.access}
                      </p>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="text-xs text-stone-400 block">参考宿泊料金（1名）</span>
                      <span className="text-lg md:text-xl font-black text-sky-700">{hotel.price}</span>
                    </div>
                  </div>

                  {/* 宿の詳細ストーリー */}
                  <div className="prose text-stone-700 text-sm md:text-base leading-relaxed">
                    <p>{hotel.story}</p>
                  </div>

                  {/* ハイライト3点 */}
                  <div className="bg-sky-50/50 rounded-2xl p-4 md:p-5 border border-sky-100 space-y-2.5">
                    <h4 className="text-xs font-black text-sky-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                      この宿の注目ポイント＆こだわり
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs text-stone-700">
                      {hotel.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 mt-0.5 flex-shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 客室・グルメのアドバイス */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60">
                      <span className="font-bold text-stone-900 flex items-center gap-1 mb-1">
                        <Building className="w-3.5 h-3.5 text-sky-700" /> おすすめ客室
                      </span>
                      <p className="text-stone-600 leading-relaxed">{hotel.roomTip}</p>
                    </div>
                    <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60">
                      <span className="font-bold text-stone-900 flex items-center gap-1 mb-1">
                        <Utensils className="w-3.5 h-3.5 text-sky-700" /> 冬の美食プラン
                      </span>
                      <p className="text-stone-600 leading-relaxed">{hotel.gourmetTip}</p>
                    </div>
                  </div>

                  {/* 予約リンク */}
                  <div className="pt-2 text-center md:text-right">
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 text-white font-bold text-xs md:text-sm hover:from-sky-700 hover:to-sky-800 shadow-sm hover:shadow transition"
                    >
                      楽天トラベルで空室・プラン詳細を見る
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 冬の庄内を味わう三大美味＆文化セクション */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="border-l-4 border-sky-600 pl-4">
            <span className="text-xs font-bold text-sky-700 tracking-wider uppercase">Local Food & Culture</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              冬の庄内で絶対に味わうべき三大味覚：寒鱈どんがら汁・庄内牛・酒田ラーメン
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-stone-700">
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-3">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-600" />
                日本海の至宝「寒鱈どんがら汁」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                丸ごと一匹の寒鱈の頭、骨、内臓（アブラ）、身を味噌仕立ての大鍋で煮込む庄内冬の代表格。特にオスの白子（アブラタラ）はトロリと濃厚で、冬の厳寒を忘れさせる滋味溢れる味わい。仕上げに岩海苔とネギをたっぷり乗せていただくのが本場の流儀です。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-3">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-600" />
                ユネスコ食文化の誇り「庄内牛」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                日本初のユネスコ食文化創造都市に認定された鶴岡市をはじめ、肥沃な庄内平野の稲わらと清冽な伏流水で育つ「庄内牛」。きめ細かいサシと甘みのある赤身のバランスが抜群で、冬野菜を添えたすき焼きや陶板ステーキで極上の柔らかさを楽しめます。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-3">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-600" />
                自家製極薄ワンタン「酒田ラーメン」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                焼きアゴ（トビウオ）や煮干し、昆布などの澄んだ魚介出汁スープと、雲を呑むように滑らかな極薄ワンタンが特徴のご当地麺。寒い冬の散策途中にすする熱々の一杯は身体の芯から温まり、酒田の食文化の奥深さを実感させてくれます。
              </p>
            </div>
          </div>
        </section>

        {/* 北前船の繁栄と出羽三山「生まれ変わりの旅」コラム */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="border-l-4 border-sky-600 pl-4">
            <span className="text-xs font-bold text-sky-700 tracking-wider uppercase">History & Heritage</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              北前船がもたらした雅な上方文化と、出羽三山「生まれ変わりの旅」
            </h2>
          </div>
          <div className="prose text-stone-700 text-sm md:text-base leading-relaxed space-y-4">
            <p>
              江戸時代、日本海海運の要衝として「西の堺、東の酒田」と称されるほど繁栄を極めた港町・酒田。最上川を下流に集まった良質な庄内米は、北前船によって大坂や京都へと運ばれ、帰りの船には雛人形や京友禅、上方の洗練された料理文化がもたらされました。酒田の舞娘文化や料亭文化、山居倉庫の美しい景観は、この巨大な交易の歴史の賜物です。
            </p>
            <p>
              一方、鶴岡の出羽三山信仰には「生まれ変わりの旅」という奥深い自然観が宿っています。羽黒山（現在・現世の利益）、月山（過去・死後の安らぎ）、湯殿山（未来・新しい命の再生）を巡ることで、人は魂を浄化し再生すると信じられてきました。月山・湯殿山が雪に閉ざされる冬は、羽黒山の三神合祭殿にすべての神仏が集うとされ、冬の初詣は三山すべての神徳を一身に授かることができる特別な巡礼となります。
            </p>
          </div>
        </section>

        {/* 11・12・1月モデルコース */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="border-l-4 border-sky-600 pl-4">
            <span className="text-xs font-bold text-sky-700 tracking-wider uppercase">Model Itinerary</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              【1泊2日】羽黒山雪の初詣と酒田山居倉庫・寒鱈どんがら汁満喫コース
            </h2>
          </div>

          <div className="space-y-6 text-sm text-stone-700">
            <div className="relative pl-6 border-l-2 border-sky-200 space-y-4">
              <div className="relative">
                <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-sky-600 border-2 border-white" />
                <h4 className="font-bold text-stone-900 text-base">1日目：出羽三山羽黒山の雪の初詣と湯野浜温泉の波打ち際露天</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  午前、庄内空港または鶴岡駅よりスタート。まずは出羽三山神社（羽黒山）へ向かい、白銀の杉並木を歩いて国宝・羽黒山五重塔を参拝。山頂の三神合祭殿にて厳かな初詣を行い、新年の無病息災を祈願。昼食は鶴岡市内で郷土料理「麦切り」や寒鱈汁を味わう。午後は「加茂水族館」へ立ち寄り、直径5メートルの円形大水槽で優雅に漂うクラゲの幻想的な姿に癒やされる。夕刻、日本海に面した湯野浜温泉の宿へチェックイン。冬の波しぶきと夕日を望む露天風呂で温まり、夜は熱々の寒鱈どんがら汁と庄内牛ステーキに舌鼓。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-sky-600 border-2 border-white" />
                <h4 className="font-bold text-stone-900 text-base">2日目：酒田の歴史情緒・山居倉庫雪景色と本間家旧本邸</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  朝、海からの潮騒を聞きながら爽快な朝風呂と、つや姫炊きたてご飯の朝食を堪能。チェックアウト後、車で酒田市街へ。国の史跡「山居倉庫」を訪れ、樹齢150年のケヤキ並木が雪化粧した風情ある景色を散策。「酒田夢の倶楽」で地酒や寒鱈加工品、つや姫スイーツをお土産に購入。続いて豪商・本間家の歴史を伝える「本間家旧本邸」を見学。昼食は酒田港の海鮮市場で新鮮な冬魚介の海鮮丼や酒田ラーメンを味わい、満足の帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 冬のアクセス＆雪道・防寒対策ガイド */}
        <section className="bg-sky-50/60 rounded-3xl p-6 md:p-10 border border-sky-200/80 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-sky-900 font-bold text-base">
            <AlertTriangle className="w-5 h-5 text-sky-700 shrink-0" />
            <span>冬の庄内・羽黒山旅行・安全ドライブ＆防寒ガイド</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700 leading-relaxed">
            <div className="space-y-2">
              <strong className="text-stone-900 block font-bold">地吹雪（ホワイトアウト）とスタッドレス必須</strong>
              <p>
                庄内平野は日本海からの強い季節風が吹き抜け、冬期には吹雪による地吹雪（視界ゼロのホワイトアウト）が発生することがあります。車で訪れる場合は必ずスタッドレスタイヤを装着し、防雪柵沿いに注意深く運転してください。悪天候時は無理をせず休憩施設で待機しましょう。
              </p>
            </div>
            <div className="space-y-2">
              <strong className="text-stone-900 block font-bold">羽黒山参拝時の滑り止め長靴・アイゼン</strong>
              <p>
                羽黒山五重塔へ向かう参道の石段は、雪が踏み固められて凍結していることが多く大変滑りやすいです。スニーカーやヒールは危険なため、溝の深い防寒スノーブーツや長靴、着脱可能な簡易スパイク（アイゼン）をご用意ください。随神門授与所で貸出長靴がある場合もあります。
              </p>
            </div>
          </div>
        </section>

        {/* よくある質問（FAQ） */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="border-l-4 border-sky-600 pl-4">
            <span className="text-xs font-bold text-sky-700 tracking-wider uppercase">Frequently Asked Questions</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              冬の酒田・鶴岡・羽黒山旅行に関するよくある質問
            </h2>
          </div>

          <div className="divide-y divide-stone-100">
            {faqs.map((f, idx) => (
              <div key={idx} className="py-4 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm md:text-base flex items-start gap-2">
                  <span className="text-sky-600 font-black">Q.</span>
                  <span>{f.q}</span>
                </h3>
                <p className="text-xs md:text-sm text-stone-600 pl-6 leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 内部リンク・関連特集 */}
        <section className="bg-stone-100 rounded-3xl p-6 md:p-8 space-y-4">
          <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
            あわせて読みたい！東北の冬景色＆温泉特集
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <Link href="/winter-yamagata-zao-onsen-snow-jyuhyo-beef-stay" className="p-3 bg-white rounded-xl hover:text-sky-700 shadow-xs transition">
              ❄️ 蔵王温泉＆スノーモンスター樹氷・米沢牛名宿
            </Link>
            <Link href="/winter-yamagata-ginzan-onsen-snow-taisho-stay" className="p-3 bg-white rounded-xl hover:text-sky-700 shadow-xs transition">
              🏮 銀山温泉！大正ロマンの雪景色とガス灯・山形牛
            </Link>
            <Link href="/winter-akita-yokote-kamakura-oyasukyo-shigakko-inaniwa-stay" className="p-3 bg-white rounded-xl hover:text-sky-700 shadow-xs transition">
              ⛄ 横手のかまくら雪まつり＆小安峡巨大氷柱名宿
            </Link>
            <Link href="/winter-niigata-senami-onsen-sunset-ocean-salmon-murakami-beef-stay" className="p-3 bg-white rounded-xl hover:text-sky-700 shadow-xs transition">
              🌊 瀬波温泉！日本海夕日と塩引き鮭・村上牛名宿
            </Link>
            <Link href="/campaigns" className="p-3 bg-white rounded-xl hover:text-sky-700 shadow-xs transition">
              🍁 全国の旬の味覚＆極上温泉宿特集まとめ
            </Link>
          </div>
        </section>

      </main>
    
      <HubRelatedPosts currentSlug="winter-yamagata-sakata-tsuruoka-hagurosan-kandara-stay" />
</div>
  );
}
