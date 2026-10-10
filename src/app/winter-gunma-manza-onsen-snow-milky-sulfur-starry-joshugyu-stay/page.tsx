import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, Flame, Landmark, Snowflake, ShieldCheck, Footprints, Coffee, Camera, Sun, Mountain, Gift
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【12・1月群馬】標高1800m極上白濁にごり！名宿5選',
  description: '標高1,800mの上信越高原国立公園に位置する「星に一番近い温泉郷」万座温泉。日本一を誇る超高濃度硫黄泉の乳白色にごり湯は。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '万座温泉 ホテル, 万座温泉 露天風呂, 万座プリンスホテル, 万座高原ホテル, 万座ホテルジュラク, 日進舘, 万座亭, 雪見温泉 にごり湯, 12月 1月 群馬 温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-gunma-manza-onsen-snow-milky-sulfur-starry-joshugyu-stay/"
  },
  openGraph: {
    title: '【12・1月群馬】標高1800m極上白濁にごり！名宿5選',
    description: '標高1,800mの上信越高原国立公園に位置する「星に一番近い温泉郷」万座温泉。日本一を誇る超高濃度硫黄泉の乳白色にごり湯は。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-gunma-manza-onsen-snow-milky-sulfur-starry-joshugyu-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/30739/30739.jpg",
      width: 1200,
      height: 630,
      alt: '標高1800m万座温泉の極上白濁にごり湯雪見露天風呂'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【12・1月群馬】万座温泉＆嬬恋！標高1800m極上白濁にごり湯雪見露天と満天の星空・上州牛すき焼きを堪能する名宿5選",
    description: "標高1,800mの上信越高原国立公園に位置する「星に一番近い温泉郷」万座温泉。日本一を誇る超高濃度硫黄泉の乳白色にごり湯は、氷点下10度を下回る厳冬の雪景色の中で体の芯から温まる至福の雪見露天風呂へと旅人を誘います。頭上には光害のない満天の冬の銀河、目の前には万座温泉スキー場の極上パウダースノー。冷えた体に染み渡る上州牛すき焼きや嬬恋名物料理。楽天APIから最新取得した万座温泉屈指の温泉名宿5選を徹底解説します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/30739/30739.jpg"]
  }
};

export default function GunmaManzaWinterPage() {
  const hotelsData = [
            {
              id: 1,
              name: "万座温泉　万座プリンスホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30739/30739.jpg",
              rating: 3.78,
              reviews: 2197,
              price: "¥3,893〜",
              access: "北陸新幹線「軽井沢駅南口」より送迎バスあり（約９０分：要事前予約）／上信越自動車道「碓氷軽井沢IC」より約６４km",
              special: "極上にごり湯と、標高1800ｍの絶景。地元食材を取り入れたバラエティ豊かなブッフェを堪能。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30739%2F30739.html",
              story: "標高1,800mの高嶺に佇む「万座温泉 万座プリンスホテル」。ゲレンデ直結のスキーリゾートでありながら、日本屈指の絶景雪見露天風呂「こまくさの湯」を擁する万座温泉屈指の大型リゾートホテルです。白銀に輝く山々を見渡すオープンスタイルの展望露天風呂は、男女別露天に加えて混浴露天スペース（専用湯浴み着またはバスタオル巻き着用）も完備。乳白色に濁る硫黄泉に浸かりながら、冬の澄みきった青空と雪山パノラマ、夜には零れ落ちそうな満天の星空を眺める時間は格別です。館内には暖炉のあるラウンジや温かなレストランが揃い、スキーやスノーボードを思う存分楽しんだ後も極上のリラックスを提供。夕食は和洋中ブッフェまたは会席で、群馬県産上州牛の鉄板焼きや温かな鍋料理を味わえます。",
              roomTip: "東館・南館ツインルーム（ゲレンデ・山側眺望）。窓の外に広がる白銀の世界と雪景色を眺めながら静かに寛げる人気フロア。",
              gourmetTip: "メインダイニングルーム。冬期限定の上州牛ロース肉のグリルや地元野菜の温かいポトフなど、冷えた体を温めるシェフ特製コース料理。",
              highlights: [
                "ゲレンデ直結・絶景展望雪見露天「こまくさの湯」・混浴＆女性専用あり",
                "標高1800mの満天星空鑑賞・冬の上州牛ディナー・多彩なリゾート設備",
                "スキー＆スノーボード直結・雲上のリゾートステイ・軽井沢駅送迎バスあり"
              ]
            },
            {
              id: 2,
              name: "万座温泉　万座高原ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67057/67057.jpg",
              rating: 4.04,
              reviews: 2084,
              price: "¥2,961〜",
              access: "ＪＲ吾妻線万座鹿沢口駅からバスで４０分、タクシーで３５分。／軽井沢ＩＣから鬼押、万座ハイウェー（有料道路）経由で６４ｋｍ",
              special: "4種の源泉、8つの浴槽からなる露天風呂をお楽しみください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67057%2F67057.html",
              story: "万座プリンスホテルの姉妹館であり、万座温泉最大の名物露天風呂「石庭露天風呂」を誇る「万座温泉 万座高原ホテル」。渓流沿いに広がる石庭露天風呂には、白濁の湯・黄色・透明など泉質や温度が異なる複数の源泉が引かれており、圧巻の湯巡りを宿にいながら満喫できます。8つの浴槽のうち7つが混浴（専用湯浴み着着用で安心）、1つが女性専用となっており、カップルやファミリーが一緒に白銀の渓谷雪景色を眺めながら湯浴みを楽しめるのが最大の魅力です。宿泊者は万座プリンスホテルの展望風呂も無料で利用可能。夕食ブッフェ「白根」では、地元嬬恋の新鮮な食材や具だくさんの郷土汁、揚げたて天ぷらなど素朴で力強い高原料理が並びます。",
              roomTip: "しゃくなげ館和室。雪見露天風呂へのアクセスが良好で、畳の温もりを感じながら雪景色を楽しめる寛ぎの和空間。",
              gourmetTip: "レストラン「白根」の高原ビュッフェ。熱々の上州豚しゃぶしゃぶや根菜汁、冬の嬬恋高原野菜を使った創作料理を好きなだけ。",
              highlights: [
                "名物「石庭露天風呂」8つの源泉湯巡り・プリンスホテル展望風呂も利用可",
                "家族やカップルで楽しめる混浴雪見露天・郷土色豊かなバイキング",
                "コストパフォーマンス抜群・源泉かけ流しの極上湯・雪景色の渓流美"
              ]
            },
            {
              id: 3,
              name: "万座温泉　万座ホテルジュラク",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9154/9154.jpg",
              rating: 4.41,
              reviews: 2848,
              price: "¥17,500〜",
              access: "「車」渋川より約76km（約120分）軽井沢より約64km（約90分）「電車バス」万座鹿沢口駅～路線バス（40分）",
              special: "乳白色の露天風呂「空噴（からぶき）」を望む圧倒的な開放感！オールインクルーシブで優雅な温泉ステイ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9154%2F9154.html",
              story: "標高1,800mの絶壁に建ち、万座名物「空吹（からぶき）」の噴煙パノラマを一望できる「万座温泉 万座ホテルジュラク」。自家源泉「法性の湯」は毎分数百リットルの豊富な湧出量を誇り、高濃度硫黄成分が溶け込んだ乳白色の天然温泉が源泉かけ流しで注がれます。標高差を活かした展望露天風呂「雲海の湯」からは、荒涼とした岩肌から白い噴煙が立ち上る空吹と、雪化粧した山並みが織りなす雄大な景観を正面から鑑賞。夜には周囲に一切の街灯がないため、降るような星空が頭上に広がります。館内は「オールインクルーシブ」スタイルを導入しており、滞在中のドリンクやラウンジサービス、夕食時のアルコールまでフリーフローで心置きなく満喫できます。",
              roomTip: "空吹眺望和洋室。窓際の広縁から白い噴煙が立ち上る名勝「空吹」と冬の雪山をダイナミックに眺められる特等席。",
              gourmetTip: "自然派ビュッフェレストラン。目の前で仕上げる上州牛ステーキや地元産高原野菜の天ぷら、地酒やワインのフリーフローとの極上マリアージュ。",
              highlights: [
                "オールインクルーシブ導入・自家源泉「法性の湯」・名勝空吹パノラマ",
                "ラウンジアルコールフリーフロー・自然派ビュッフェの上州牛ステーキ",
                "展望露天「雲海の湯」からの噴煙夜景・手ぶらで楽しめる快適ステイ"
              ]
            },
            {
              id: 4,
              name: "万座温泉　日進舘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/3033/3033.jpg",
              rating: 4.22,
              reviews: 2536,
              price: "¥7,970〜",
              access: "上信越自動車道碓氷軽井沢ＩＣより車で９０分。",
              special: "標高1800ｍ万座温泉の老舗宿『日進舘』＜エントリーで最大ポイント15倍！得旅キャンペーン実施中！＞",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F3033%2F3033.html",
              story: "万座温泉の歴史を今に伝える湯治の聖地「万座温泉 日進舘（旧万座温泉ホテル）」。万座最古の木造湯小屋「極楽湯」をはじめ、館内には「長寿の湯」「万天の湯」など合計9種類もの浴槽が点在し、硫黄含有量日本屈指の乳白色のにごり湯をとことん堪能できます。標高1,800mの屋外に突き出すように作られた展望露天「極楽湯」は、冬になれば周囲が白銀の雪壁に囲まれ、まるで雲上の秘湯に迷い込んだかのような圧倒的な情緒を醸し出します。古くから多くの湯治客の体を癒やしてきた名湯は、冷え性や美肌、疲労回復に抜群の効能を発揮。毎晩ロビーで開催される手作りコンサートや健康講話など、温かなおもてなしも日進舘ならではの魅力です。",
              roomTip: "本館または別館和室。木の温もりと畳の香りが心地よく、温泉情緒に浸りながらゆったりと連泊したくなる素朴な落ち着き。",
              gourmetTip: "健康バイキング。旬の地場産野菜や玄米、手作りおばんざい、熱々の郷土鍋など、体の内側から健やかになれる体に優しい料理が勢揃い。",
              highlights: [
                "万座最古の湯小屋「極楽湯」・9種の多彩な浴槽・歴史ある本格湯治宿",
                "硫黄含有量日本一の圧倒的濁り湯・心温まるロビーコンサートと健康料理",
                "湯治文化の真髄・冷えた体を芯から温める薬湯・リピーター多数の安心感"
              ]
            },
            {
              id: 5,
              name: "万座温泉　万座亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8658/8658.jpg",
              rating: 4.40,
              reviews: 941,
              price: "¥5,500〜",
              access: "関越自動車道渋川伊香保ICより120分。国道292号線・県道牧干俣線は冬期通行止。",
              special: "大人気★ログ風の露天風呂＆乳白色の効能豊かな名湯で心と体の保養！貸切風呂も人気♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8658%2F8658.html",
              story: "万座温泉の高台にひっそりと佇み、落ち着いた大人の寛ぎを提供する数寄屋造りの隠れ家宿「万座温泉 万座亭」。名物の野天風呂「白鐵（はくてつ）の湯」は、地元産のヒバの木で組まれた美しい湯屋と乳白色の極上硫黄泉が見事に調和した風情あふれる空間です。冬になると湯船の周囲にしんしんと雪が降り積もり、立ち上る白い湯煙と木造りのぬくもりが極上の雪見露天を演出します。内湯にも丸太をあしらった野趣あふれる浴槽があり、体の芯までじっくりと温まることができます。客室は清潔感あふれる和室やログハウス調の部屋があり、万座の静寂な夜を満喫。夕食は上州牛のすき焼きや陶板焼きをメインに、山菜や川魚を取り入れた滋味豊かな会席料理をお部屋や食事処で楽しめます。",
              roomTip: "本館和室またはヒバ風呂付き客室。雪山の静寂に包まれ、木の香りに癒やされながら極上のプライベート時間を過ごせます。",
              gourmetTip: "季節の山里会席。霜降りの上州牛すき焼き鍋や岩魚の塩焼き、手打ちそばなど、素朴ながら一つ一つ丁寧に仕込まれた絶品料理。",
              highlights: [
                "ヒバ造りの名湯「白鐵の湯」・数寄屋造りの大人の隠れ宿・静寂の雪景色",
                "上州牛すき焼き会席・山里の恵み会席・木のぬくもり溢れる落ち着いた空間",
                "静かな大人旅に最適・プライベート感あふれる良質宿・肌に優しい硫黄泉"
              ]
            }
  ];

  const faqData = [
  {
    "q": "万座温泉の冬の道路状況とアクセス時のチェーン・スタッドレスタイヤの必要性は？",
    "a": "万座温泉は標高1,800mの豪雪地帯に位置するため、11月中旬から4月下旬までは完全な雪道・凍結路面となります。車で訪れる場合は必ず「高性能スタッドレスタイヤ装着」が必須であり、急勾配に備えてタイヤチェーンを携行することが強く推奨されます。運転に不安がある方は、JR軽井沢駅からのホテル宿泊者専用無料送迎バス（万座プリンス・万座高原ホテル等）や、万座・鹿沢口駅からの路線バス（西武観光バス）の利用が最も安全で安心です。なお、志賀草津高原ルート（国道292号）は冬期全面通行止めとなるため、アクセスは万座ハイウェー（有料道路）経由のみとなります。"
  },
  {
    "q": "万座温泉の泉質の特徴と、硫黄泉に入浴する際の注意点は？",
    "a": "万座温泉は硫黄含有量が日本一とされ、pH2〜3前後の酸性硫黄泉（硫化水素型）です。白濁した濃い濁り湯が特徴で、血行促進、冷え性改善、美肌効果、疲労回復に優れた効能があります。高濃度の酸性泉のため、肌が敏感な方は長湯を避け、入浴後は上がり湯をするのがおすすめです。また、硫黄成分が銀や貴金属を瞬時に変色させるため、ネックレスや指輪、腕時計などの金属製アクセサリーは必ず外して入浴してください。"
  },
  {
    "q": "冬の万座温泉の気温とおすすめの防寒着・靴の選び方は？",
    "a": "12月〜1月の万座温泉は日中でも氷点下、夜間や早朝にはマイナス10℃〜マイナス15℃近くまで冷え込みます。風を通さない本格的なダウンジャケットやスキーウェアと同等の防寒アウター、ヒートテック等の保温インナー、厚手のフリースやセーター、ニット帽、手袋、マフラーが必須です。足元は圧雪や凍結路面で非常に滑りやすいため、スニーカーやヒールは厳禁で、滑り止めの効いたスノーブーツや防寒防水トレッキングシューズを必ずご用意ください。"
  },
  {
    "q": "「混浴露天風呂」に入る際のマナーや湯浴み着のレンタルはありますか？",
    "a": "万座プリンスホテルの「こまくさの湯」や万座高原ホテルの「石庭露天風呂」などでは、カップルやご家族が一緒に雪景色を楽しめる混浴エリアが設けられています。すべての混浴浴槽では「専用湯浴み着の着用」または「バスタオル巻き」が義務付けられており、売店での湯浴み着の販売・レンタルが用意されていますので、女性や混浴が初めての方でも安心して利用できます。脱衣所は男女完全に別々になっています。"
  },
  {
    "q": "冬の万座温泉でスキーやスノーボードをしない場合の楽しみ方は？",
    "a": "スキーをされない方でも、万座温泉は冬の魅力が満載です。宿にいながら複数の源泉を巡る「雪見にごり湯めぐり」は最高のリラクゼーション。また、標高1,800mの澄んだ大気は日本屈指の天体観測スポットであり、晴れた夜には満天の天の川や流れ星を鑑賞できます。さらにスノーシューを履いて雪原や「空吹」の噴煙を眺めるスノーウォーキングや、暖炉のあるラウンジで信州・上州の地酒や温かいお茶を楽しむ贅沢な山籠りステイを満喫できます。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-gunma-manza-onsen-snow-milky-sulfur-starry-joshugyu-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-gunma-manza-onsen-snow-milky-sulfur-starry-joshugyu-stay"
        },
        "headline": "【12・1月群馬】万座温泉＆嬬恋！標高1800m極上白濁にごり湯雪見露天と満天の星空・上州牛すき焼きを堪能する名宿5選",
        "description": "標高1,800mの上信越高原国立公園に位置する「星に一番近い温泉郷」万座温泉。日本一を誇る超高濃度硫黄泉の乳白色にごり湯は、氷点下10度を下回る厳冬の雪景色の中で体の芯から温まる至福の雪見露天風呂へと旅人を誘います。頭上には光害のない満天の冬の銀河、目の前には万座温泉スキー場の極上パウダースノー。冷えた体に染み渡る上州牛すき焼きや嬬恋名物料理。楽天APIから最新取得した万座温泉屈指の温泉名宿5選を徹底解説します。",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
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
            "name": "万座温泉＆嬬恋冬特集",
            "item": "https://croud-travel.pages.dev/winter-gunma-manza-onsen-snow-milky-sulfur-starry-joshugyu-stay"
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
      <header className="relative bg-gradient-to-br from-cyan-950 via-slate-900 to-sky-950 text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.25),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-medium">
            <Snowflake className="w-4 h-4 text-cyan-300" />
            <span>12月・1月冬の標高1,800m極上にごり湯＆雪見温泉特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-6">
            万座温泉＆嬬恋！<br className="hidden sm:inline" />
            標高1800m極上白濁にごり湯雪見露天と満天の星空・上州牛すき焼きを堪能する名宿5選
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            日本一の超高濃度硫黄泉を誇る乳白色のにごり湯と、氷点下10度の白銀世界。標高1,800mの上信越高原国立公園に湧く万座温泉は、「星に一番近い温泉郷」として知られる冬の聖地です。冷え切った体をじんわりと芯から温める雪見露天風呂、万座温泉スキー場のさらさらパウダースノー、頭上に降り注ぐ満天の冬銀河。とろける上州牛すき焼きと素朴な高原料理を味わう極上の冬旅をお届けします。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-200 border-t border-slate-700/60 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>シーズン：12月上旬〜4月上旬</span>
            </div>
            <div className="flex items-center gap-2">
              <Waves className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>日本一の超濃厚白濁硫黄泉</span>
            </div>
            <div className="flex items-center gap-2">
              <Mountain className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>標高1,800m雲上の雪見露天</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>光害ゼロ！満天の冬星空</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Section 1: エリア解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Highland Onsen Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Waves className="w-6 h-6 text-cyan-500 shrink-0" />
              雲上の別天地！万座温泉が誇る圧倒的な硫黄泉と白銀の雪見情趣
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              群馬県と長野県の県境近く、上信越高原国立公園の懐深く標高1,800mの高嶺に位置する万座温泉。通年自家用車やバスでアクセス可能な温泉地としては日本最高所に位置し、冬になると深い雪に包まれる孤高の雲上温泉郷です。万座温泉の最大の誇りは、1リットル中300mg以上という日本一の硫黄含有量を誇る濃厚な酸性硫黄泉。源泉から湧き出た無色透明の湯が大気に触れることでエメラルドグリーンから乳白色へと変化し、濃厚な硫黄の香りと湯の花が湯船いっぱいに広がります。
            </p>
            <p>
              外気温がマイナス10度を下回る真冬、湯船に身を沈めると、ピリッとした肌への刺激とともに体の奥底までじんわりと温もりが浸透していきます。眼前には雪をかぶった白根山系の雄峰と、荒涼とした岩肌から轟音とともに白い硫黄ガスを噴き上げる名勝「空吹（からぶき）」。雪壁に囲まれた露天風呂から見上げる景色は、まさに大自然と一体になる神秘的な体験です。標高1,800mの高地気候は平地よりも気圧が低いため、新陳代謝が活性化され、濃厚な薬湯との相乗効果で極上のデトックスと疲労回復効果をもたらします。
            </p>
            <p>
              冬のアクティビティとして見逃せないのが「万座温泉スキー場」です。内陸の高地かつ厳寒の気候が生み出す天然雪は、水分をほとんど含まない超ドライな粉雪「パウダースノー」。ゲレンデトップからは浅間山や北アルプスの白銀パノラマを望み、初心者からエキスパート向けの非圧雪コースまで爽快なダウンヒルを楽しめます。滑走を楽しんだ後は、宿に戻ってそのまま温かいにごり湯へ直行できる「スキー＆温泉直結」の至福がここにあります。
            </p>
            <p>
              夜になると、街の灯りが一切届かない標高1,800mの空には、まるで手を伸ばせば届きそうなほどの満天の星が瞬きます。吐く息の白さと湯煙の向こうに瞬く冬のダイヤモンド（オリオン座やシリウス）を眺めながらの雪見露天は、生涯忘れられない旅の記憶となるはずです。
            </p>
          </div>
        </section>

        {/* Section 2: 厳選5ホテル詳細 */}
        <section className="space-y-8">
          <div className="border-l-4 border-cyan-600 pl-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Verified Accommodations</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              極上の雪見にごり湯と星空を味わう万座温泉の名宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              楽天トラベルAPIより最新の空室・プラン情報、クチコミ評価を取得。泉質・露天風呂の眺望・料理に優れた宿を厳選
            </p>
          </div>

          <div className="space-y-12">
            {hotelsData.map((h) => (
              <article 
                key={h.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 flex flex-col lg:flex-row"
              >
                <div className="lg:w-2/5 relative min-h-[260px] lg:min-h-full">
                  <img 
                    src={h.img} 
                    alt={h.name}
                    className="w-full h-full object-cover absolute inset-0"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-cyan-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    第{h.id}位 厳選名宿
                  </div>
                </div>

                <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <span className="text-xs font-semibold text-cyan-600 block mb-0.5">{h.access}</span>
                        <h3 className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug">
                          {h.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="font-extrabold text-amber-900 text-sm">{h.rating}</span>
                        <span className="text-xs text-amber-700">({h.reviews.toLocaleString()}件)</span>
                      </div>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {h.story}
                    </p>

                    <div className="bg-slate-50 rounded-xl p-4 space-y-2 border border-slate-100 text-xs sm:text-sm">
                      <div className="flex items-start gap-2">
                        <Waves className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-800">温泉・客室の魅力：</strong>
                          <span className="text-slate-600">{h.roomTip}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Utensils className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-800">美食ポイント：</strong>
                          <span className="text-slate-600">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-slate-700 block">宿の注目ハイライト：</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                        {h.highlights.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-slate-400 block">参考宿泊料金（目安）</span>
                      <span className="text-lg sm:text-xl font-black text-cyan-950">{h.price}</span>
                      <span className="text-[10px] text-slate-400 ml-1">/ 1名あたり（2名1室利用時）</span>
                    </div>

                    <div className="w-full sm:w-auto">
                      <a 
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white font-bold text-sm shadow-sm hover:shadow transition-all text-center"
                      >
                        <span>楽天トラベルで宿泊プランを確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 3: 気候・アクセス・服装ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Climate & Access Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Snowflake className="w-6 h-6 text-cyan-500 shrink-0" />
              12月・1月の気温推移と万座温泉の雪道アクセス・防寒装備ガイド
            </h2>
          </div>

          <div className="text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              標高1,800mの万座温泉は、北海道旭川市に匹敵する厳しい寒冷気候です。平地とは全く異なる極寒環境となるため、装備とアクセスルートの確認が旅の安全に直結します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-cyan-950 text-base flex items-center justify-between">
                <span>12月上旬〜中旬</span>
                <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded">平均 -2℃ / 最低 -8℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                初雪が積もり、ゲレンデがオープンする時期。万座ハイウェーは完全な圧雪・凍結路面になります。厚手のダウンジャケットと防寒防水ブーツを着用し、車はスタッドレスタイヤ必須です。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-cyan-950 text-base flex items-center justify-between">
                <span>12月下旬（年末年始）</span>
                <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded">平均 -5℃ / 最低 -12℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                本格的な豪雪期に入り、積雪は1〜2mに達します。露天風呂への移動時にも羽織れる厚手の丹前やベンチコートがあると快適。耳あて付きニット帽と厚手グローブが手放せません。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-cyan-950 text-base flex items-center justify-between">
                <span>1月（厳冬期・トップシーズン）</span>
                <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded">平均 -7℃ / 最低 -16℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                極上のパウダースノーが完成する反面、朝晩はマイナス15度を下回る極寒。スキーウェア同等の完全防寒が必要。雪道運転に不安がある方は軽井沢駅からの送迎バス利用を強く推奨します。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: 星空＆雪見フォトスポット攻略 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Photography Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Camera className="w-6 h-6 text-cyan-500 shrink-0" />
              雲上の奇跡を撮る！万座温泉の雪見露天・空吹噴煙・満天星空撮影攻略
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600">
            <div className="border border-slate-200 rounded-xl p-5 space-y-2.5 bg-slate-50/50">
              <h3 className="font-bold text-cyan-950 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-600" />
                名勝「空吹」の白い噴煙と白銀
              </h3>
              <p className="leading-relaxed">
                午前中の順光の時間帯がベスト。青空と雪山、そして荒涼とした岩肌から立ち上る白い噴煙のコントラストを広角で捉えると、大自然の荒々しい息吹が際立ちます。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-2.5 bg-slate-50/50">
              <h3 className="font-bold text-cyan-950 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-600" />
                満天の冬星空・天の川撮影
              </h3>
              <p className="leading-relaxed">
                新月前後の晴天夜が狙い目。標高1,800mは光害がゼロに近いため、スマートフォンでも夜景モードや長時間露光（三脚固定）で無数の星々やオリオン座が鮮明に写ります。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-2.5 bg-slate-50/50">
              <h3 className="font-bold text-cyan-950 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-600" />
                乳白色のにごり湯と雪壁の湯煙
              </h3>
              <p className="leading-relaxed">
                早朝の露天風呂では、氷点下の澄んだ冷気に立ち上る湯煙と木造りの湯小屋が幻想的な情緒を醸し出します。湯船に映り込む雪景色のリフレクションも必見です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: 冬の美食＆嬬恋お土産ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Gourmet & Souvenirs</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-cyan-500 shrink-0" />
              万座の山懐で味わう冬の温もり美食＆嬬恋高原の厳選お土産
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600">
            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-cyan-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                群馬が誇る黒毛和牛「上州牛」の熱々すき焼き
              </h3>
              <p className="leading-relaxed">
                豊かな自然と清らかな利根川水系の伏流水で育まれた「上州牛」。きめ細やかなサシと赤身の深いコクが特徴で、冬の冷えた体に熱々のすき焼き鍋が染み渡ります。地元下仁田ネギや舞茸、手作りこんにゃくとともに鉄鍋でぐつぐつと煮込み、濃厚な地卵にくぐらせて口に運べば、とろけるような至福の旨味が広がります。
              </p>
            </div>

            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-cyan-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                嬬恋花豆甘納豆＆群馬銘酒の雪見土産
              </h3>
              <p className="leading-relaxed">
                寒暖差の大きい嬬恋高原で育った大粒の「高原花豆」を使った甘納豆や煮豆は、ほくほくとした上品な甘みでお茶請けに大人気。さらに、群馬の蔵元が醸す銘酒「水芭蕉」の純米吟醸や、万座の温泉水を使った美肌フェイスパックなど、心温まる高原土産が揃っています。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: 1泊2日モデルコース */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-cyan-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-3xl font-bold text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-cyan-400 shrink-0" />
              標高1800mの白銀世界を満喫する1泊2日雪見湯治モデルコース
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-cyan-300 text-lg">
                <span className="bg-cyan-600 text-white text-xs px-2.5 py-1 rounded-md">Day 1</span>
                <span>白銀の万座ハイウェーを登り、白濁雪見露天と満天星空鑑賞</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>11:30</strong> 北陸新幹線・軽井沢駅に到着。駅直結のアウトレットで温かいランチを楽しんだ後、ホテルの無料送迎バスに乗車。
                </p>
                <p>
                  <strong>14:00</strong> 万座ハイウェーの雪景色を車窓に眺めながら標高1,800mの万座温泉へ到着。チェックイン。
                </p>
                <p>
                  <strong>15:00</strong> 宿自慢の展望雪見露天風呂へ。夕暮れに染まる白銀の雪山と名勝「空吹」の噴煙を眺めながら、極上の乳白色硫黄泉に浸かる。
                </p>
                <p>
                  <strong>18:30</strong> 上州牛すき焼きや地元高原野菜をふんだんに使った冬の味覚ディナーを堪能。
                </p>
                <p>
                  <strong>21:00</strong> 夜の露天風呂へ再び。湯煙越しに頭上に広がる満天の星空と冬の星座を仰ぎ見る。
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-cyan-300 text-lg">
                <span className="bg-cyan-600 text-white text-xs px-2.5 py-1 rounded-md">Day 2</span>
                <span>朝の爽快な雪見風呂＆パウダースノー散策から帰路へ</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>07:00</strong> 朝日に輝く白銀の山々を眺めながら朝風呂。凛とした冷気と熱いにごり湯のコントラストで目覚める。
                </p>
                <p>
                  <strong>08:00</strong> 地元の新鮮野菜や具だくさん郷土汁が並ぶ朝食バイキングでエネルギーチャージ。
                </p>
                <p>
                  <strong>09:30</strong> 万座温泉スキー場で極上のさらさらパウダースノーを楽しむか、スノーシューで雪原散策。
                </p>
                <p>
                  <strong>12:30</strong> チェックアウト後、送迎バスで軽井沢駅へ。軽井沢プリンスショッピングプラザで冬のお土産を購入して帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-cyan-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              冬の万座温泉旅行 よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-5 bg-slate-50/30 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-cyan-600 font-extrabold shrink-0">Q.</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: 周遊内部リンク */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-cyan-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              あわせて楽しむ！群馬・信州の人気雪見温泉＆冬特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <Link 
              href="/winter-gunma-kusatsu-onsen-yubatake-joshu-beef-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-cyan-400 block mb-1">群馬・草津温泉冬特集</span>
              <span className="font-bold text-white block">草津湯畑ライトアップと熱湯雪見風呂！上州牛すき焼き名宿</span>
            </Link>

            <Link 
              href="/winter-gunma-ikaho-stone-steps-joshu-beef-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-cyan-400 block mb-1">群馬・伊香保温泉冬特集</span>
              <span className="font-bold text-white block">石段街365段の雪灯りと黄金の湯！榛名湖イルミと上州牛名宿</span>
            </Link>

            <Link 
              href="/winter-nagano-karuizawa-hoshino-illumination-tonbonoyu-shinshugyu-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-cyan-400 block mb-1">長野・軽井沢冬特集</span>
              <span className="font-bold text-white block">軽井沢高原教会イルミ＆ケラ池スケート！星野温泉と信州牛名宿</span>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer Navigation */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200 mt-16 text-center text-xs text-slate-500">
        <p>© 2026 地域の宿探訪 - 日本の四季と極上ホテル・旅館を巡る旅</p>
      </footer>
    
      <HubRelatedPosts currentSlug="winter-gunma-manza-onsen-snow-milky-sulfur-starry-joshugyu-stay" />
</div>
  );
}
