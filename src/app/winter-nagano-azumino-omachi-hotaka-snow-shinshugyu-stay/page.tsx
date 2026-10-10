import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Mountain, ShieldCheck, Snowflake, Footprints, Lightbulb, Coffee, Sun, AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月長野】雪見露天！名宿5選',
  description: '冠雪した北アルプス後立山連峰（爺ヶ岳・鹿島槍ヶ岳・常念岳）が紺碧の冬空に映える11〜1月の安曇野・大町エリア。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '安曇野 イルミネーション, 大町温泉郷 宿, 穂高神社 初詣, アルプスあづみの公園, 信州サーモン, 信州プレミアム牛, 大町温泉郷 露天風呂, 白馬 パウダースノー, 11月 12月 1月 長野 旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-nagano-azumino-omachi-hotaka-snow-shinshugyu-stay/"
  },
  openGraph: {
    title: '【11・12・1月長野】雪見露天！名宿5選',
    description: '冠雪した北アルプス後立山連峰（爺ヶ岳・鹿島槍ヶ岳・常念岳）が紺碧の冬空に映える11〜1月の安曇野・大町エリア。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-nagano-azumino-omachi-hotaka-snow-shinshugyu-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/7149/7149.jpg",
      width: 1200,
      height: 630,
      alt: '冬の北アルプス後立山連峰と大町温泉郷の雪見露天風呂'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月長野】安曇野＆大町温泉郷！白銀の北アルプス後立山連峰と穂高神社初詣・光のイルミネーション＆雪見露天名宿5選",
    description: "冠雪した北アルプス後立山連峰（爺ヶ岳・鹿島槍ヶ岳・常念岳）が紺碧の冬空に映える11〜1月の安曇野・大町エリア。信濃国三之宮・穂高神社での雪の初詣や、国営アルプスあづみの公園を彩る県内最大級の光のイルミネーション。高瀬渓谷・葛温泉の名湯を引き込む大町温泉郷＆穂高温泉郷の雪見露天風呂、そして信州サーモンや信州プレミアム牛肉を堪能できる厳選名宿5選を徹底特集します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/7149/7149.jpg"]
  }
};

export const dynamic = 'force-static';

export default function NaganoAzuminoOmachiPage() {
  const hotels = [
            {
              id: 1,
              name: "穂高温泉郷　安曇野穂高ビューホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7149/7149.jpg",
              rating: 4.26,
              reviews: 1348,
              price: "¥13,680〜",
              access: "長野自動車道【安曇野IC】よりお車で約25分。【松本IC】よりお車で約40分／JR大糸線穂高駅よりバスで約15分　",
              special: "松本エリアから車で約40分★口コミ朝食４．7 心癒す旅を",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7149%2F7149.html",
              story: "穂高山麓の深い赤松と唐松の原生林に抱かれ、ヨーロッパの山岳リゾートを思わせるクラシカルな気品が漂う名門リゾートホテル「穂高温泉郷 安曇野穂高ビューホテル」。冬になると木立に純白の雪が降り積もり、ホテル周辺は静寂と凛とした空気に包まれます。自慢の天然温泉大浴場と露天風呂には、中房渓谷から引き湯されたアルカリ性単純温泉が湛えられ、湯船に身を沈めれば頭上に広がる雪化粧の木立と満天の星空を眺めながら優雅な雪見風呂を満喫できます。夕食は長野県産食材の旬を繊細な技で昇華させた本格フレンチ、または旬の味覚を散りばめた和会席から選択可能。信州安曇野の清流で育まれた信州サーモンのポワレや、とろけるような信州プレミアム牛肉のグリル、安曇野名水仕込みの地ワインとの極上マリアージュが特別な夜を彩ります。",
              roomTip: "フォレストビュー・ツインまたはスーペリア和洋室。大きな窓の外に広がる雪の森を絵画のように鑑賞でき、暖かな室内で極上のリゾート時間を過ごせます。",
              gourmetTip: "「信州プレミアム牛ステーキ＆信州サーモン贅沢フレンチコース。」。柔らかな肉質と芳醇な甘みの信州牛をメインに、地場冬野菜の旨味を凝縮した絶品料理。",
              highlights: [
                "穂高の原生林に佇む山岳クラシックホテル・星空と雪見露天風呂の贅沢",
                "信州プレミアム牛ステーキ＆安曇野野菜を活かした極上フレンチ",
                "アルプスあづみの公園イルミネーションや穂高神社初詣に好アクセス"
              ]
            },
            {
              id: 2,
              name: "休暇村リトリート安曇野ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/173116/173116.jpg",
              rating: 4.54,
              reviews: 460,
              price: "¥26,200〜",
              access: "穂高駅よりお車にて約15分、【松本IC】よりお車で約40分",
              special: "穂高温泉郷に位置し、旬の食材を堪能できる隠れ家のようなホテル。信州観光の拠点としてご利用ください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F173116%2F173116.html",
              story: "赤松とカラマツの静かな森に溶け込むように佇み、「安曇野の自然の恵みで心と身体を調和させる。」をコンセプトにした上質なリトリート空間「休暇村リトリート安曇野ホテル」。全室が木目を基調とした温もりあるモダンなデザインで統一され、暖炉の火が揺らめく宿泊者専用ラウンジでは、挽きたての珈琲や信州のお茶を片手に読書や語らいの時間を愉しめます。大浴場「ホットスプリング」の内湯と露天風呂には穂高温泉郷の柔らかな単純温泉が注がれ、雪降る森の澄んだ大気を感じながらの湯浴みは日頃の疲れを洗い流す極上の癒やし。夕食は安曇野の豊かな風土を味わう会席料理で、名水仕込みの十割安曇野蕎麦や信州サーモン、厳選された信州牛の陶板焼きなど、素材本来の力強い美味しさを五感で堪能できます。",
              roomTip: "プレミアム和洋室（バルコニー付き）。森の静寂に寄り添う落ち着いた空間で、シモンズ製特注ベッドと畳リビングが心地よい休息を約束。",
              gourmetTip: "「安曇野の四季を彩る安曇野里山会席」。信州アルプス牛のすき焼き小鍋仕立てと、冬に甘みを増す根菜や安曇野わさびを添えた新鮮お造り。",
              highlights: [
                "森のリトリート空間・暖炉ラウンジとシモンズベッドの上質休息",
                "十割安曇野蕎麦と信州アルプス牛・素材の力を味わう里山会席",
                "無料ラウンジサービス＆静寂を愛する大人のための滞在型リゾート"
              ]
            },
            {
              id: 3,
              name: "大町温泉郷　黒部ビューホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5130/5130.jpg",
              rating: 4.13,
              reviews: 690,
              price: "¥9,800〜",
              access: "ＪＲ大糸線「信濃大町」駅下車・路線バス２０分「大町温泉郷」下車　マイクロ送迎、車:豊科ＩＣより４０分",
              special: "和洋中信州の郷土の味覚を楽しめる朝食バイキングとバラエティ豊かな料理をお愉しみ下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5130%2F5130.html",
              story: "大町温泉郷の中心に位置し、鹿島槍ヶ岳や爺ヶ岳など北アルプスの名峰を望む広大な日本庭園が自慢の大型和風旅館「大町温泉郷 黒部ビューホテル」。冬になると約5,000坪の庭園が一面の白銀世界へと姿を変え、雪化粧した松や岩が息を呑むような和の美を演出します。名湯・葛温泉から引き湯された大浴場と庭園露天風呂「からまつ野」は、無色透明で肌に優しい弱アルカリ性単純温泉。湯煙越しに眺める雪の庭園と北アルプスのシルエットは格別で、夜には庭園がライトアップされて幽玄な雪景色が広がります。料理は北アルプスの雪解け水で育まれた信州の山の幸と、日本海・糸魚川から直送される新鮮な海の幸が融合した会席料理。郷土の温もりあふれるおもてなしに心和む滞在が叶います。",
              roomTip: "庭園側和室（高層階）。窓一面に広がる白銀の日本庭園と、遠くに聳える北アルプスの雪嶺を望む絶景ビュー。ゆったりした12畳以上の広さ。",
              gourmetTip: "「信州牛と寒ブリの冬の饗宴会席」。香ばしく焼き上げる信州牛の朴葉味噌焼きと、日本海から届く脂の乗った寒ブリのお造りを贅沢に味わえます。",
              highlights: [
                "約5,000坪の白銀日本庭園・ライトアップされた雪見露天風呂",
                "名物信州牛朴葉味噌焼き＆日本海直送鮮魚が彩る和風会席",
                "名湯葛温泉引湯・刺激の少ないまろやかな泉質で湯冷め知らず"
              ]
            },
            {
              id: 4,
              name: "大町温泉郷　緑翠亭　景水",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/3116/3116.jpg",
              rating: 4.22,
              reviews: 980,
              price: "¥7,600〜",
              access: "長野I.C.より約75分。安曇野I.Cより約40分。信濃大町駅（要予約）、大町温泉郷バス停まで送迎あり。",
              special: "【おもてなしは一杯の湧き水から】料理も客室も自家源泉天然水★人気は雪解けの川を臨む露天風呂付き客室",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F3116%2F3116.html",
              story: "「水と緑と風」をテーマに、日本の伝統的な数寄屋造りの風情と現代的な洗練が融合した大町温泉郷屈指のハイクラス旅館「大町温泉郷 緑翠亭 景水（けいすい）」。館内に足を踏み入れると、滝が流れる吹き抜けのロビーと優雅な和の空間が旅人を迎えます。温泉の充実度は地域屈指で、信州ヒノキの香りに包まれる庭園大浴場や、巨石を配した雪見露天風呂「かわせみの湯」、さらにプライベートに雪景色を楽しめる庭園露天風呂付き客室も完備。夕食は季節の移ろいを器の上に表現する本格京風会席で、信州プレミアム牛肉のしゃぶしゃぶや、冬の味覚を彩る信州サーモンの燻製仕立て、地酒の利き酒セットなど、一品一品に料理長の繊細な技とこだわりが光ります。",
              roomTip: "露天風呂付き客室「茜音（あかね）」。客室専用の湯船に葛温泉の名湯が満たされ、雪が舞う北アルプスの山麓で誰にも邪魔されない至福の湯浴みを満喫。",
              gourmetTip: "「信州プレミアム牛食べ比べ会席」。A5ランク信州牛のステーキとしゃぶしゃぶを同時に味わい、大町産コシヒカリの炊きたてご飯で締めくくる至高の膳。",
              highlights: [
                "数寄屋造りの風格・露天風呂付き客室と本格京風会席の最高峰",
                "A5ランク信州プレミアム牛しゃぶしゃぶ・地酒ペアリング",
                "檜大浴場「かわせみの湯」・きめ細やかな仲居さんのおもてなし"
              ]
            },
            {
              id: 5,
              name: "大町温泉郷　立山プリンスホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2786/2786.jpg",
              rating: 4.09,
              reviews: 1204,
              price: "¥8,800〜",
              access: "安曇野ICから車で40分、信濃大町駅から車で15分、アルペンルート入口まで車で20分",
              special: "立山黒部アルペンルート扇沢まで車で20分！白馬・安曇野・松本への観光にも最適！温泉自慢の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2786%2F2786.html",
              story: "北アルプス山麓の壮大な自然に囲まれ、北信濃最大級のスケールを誇る庭園露天風呂が人気の温泉リゾート「大町温泉郷 立山プリンスホテル」。敷地内に広がる大露天風呂は、男女合わせて多彩な湯船が用意され、冬には湯船の周りにこんもりと雪が積もる本格的な「雪見風呂」を心ゆくまで堪能できます。無色透明で刺激の少ない単純温泉は、体の芯からポカポカと温めて湯冷めしにくく、冬の冷えた身体に染み渡る優しさです。夕食は信州郷土の味覚をふんだんに取り入れた会席料理、または季節の和洋バイキング。名物の信州そばをはじめ、ジューシーな信州豚鍋や旬魚の天ぷらなど、家族連れからカップルまで誰もが満足できる多彩なメニューが揃っています。",
              roomTip: "本館最上階パノラマ和洋室。北アルプスの雄大な山並みと大町温泉郷の雪景色をワイドに見渡せ、ゆったりとした広さで寛げます。",
              gourmetTip: "「信州味めぐり和食会席」。信州牛の陶板焼きをメインに、安曇野わさびを使った小鉢や信州味噌仕立ての温かい鍋料理が冷えた体を温めます。",
              highlights: [
                "北信濃最大級の露天風呂・豊富な湯量の単純温泉でポカポカ雪見風呂",
                "信州豚鍋と打ちたて信州そば・ファミリーからカップルまで満足",
                "広大な大町温泉郷の中心・鹿島槍や白馬スキー場へのアクセス拠点"
              ]
            }
  ];

  const faqs = [
  {
    "q": "冬の安曇野・大町温泉郷の雪道事情とスタッドレスタイヤの必要性は？",
    "a": "11月下旬から山麓部で降雪が始まり、12月中旬から1月にかけては安曇野平野部でも本格的な積雪や朝夕の路面凍結が発生します。特に大町温泉郷や穂高温泉郷は標高が約700〜800mに位置するため、平地よりも気温が4〜5度低く、圧雪道路やブラックアイスバーンになる確率が非常に高くなります。車で訪れる場合は必ずスタッドレスタイヤ（冬用タイヤ）の装着が必須であり、降雪予報時にはタイヤチェーンの携行も推奨されます。電車をご利用の場合は、JR大糸線の信濃大町駅や穂高駅から各宿への路線バスやタクシーが便利です。"
  },
  {
    "q": "国営アルプスあづみの公園の冬のイルミネーションの見どころと期間は？",
    "a": "国営アルプスあづみの公園のイルミネーション（Twin Alps Illumination）は、例年11月初旬から翌年1月中旬頃まで「堀金・穂高地区」および「大町・松川地区」の2エリアで開催される長野県最大規模の光の祭典です。数十万球のLEDが広大な園内の自然林や水辺を華やかに彩り、北アルプスの清らかな空気の中で幻想的な光の世界が広がります。開園時間は日没後の16:30〜21:00頃まで。夜間は氷点下に達するため、ダウンコート、手袋、マフラー、滑りにくいスノーブーツなどの厳重な防寒具をご用意ください。"
  },
  {
    "q": "穂高神社の初詣の見どころと御利益について教えてください。",
    "a": "穂高神社（ほたかじんじゃ）は、信濃国三之宮であり「日本アルプスの総鎮守」として崇敬を集める古社です。御祭神の穂高見命（ほたかみのみこと）は海神・綿津見神の子であり、交通安全、産業振興、開運厄除の守護神として知られています。正月三が日の初詣には県内外から多くの参拝者が訪れ、白雪を被った厳かな社殿や樹齢500年を超える大杉に囲まれた神域は神聖な気に満ちています。境内では名物の「健康長寿御守」や交通安全ステッカーが授与され、新年のスタートを切るのに最適なパワースポットです。"
  },
  {
    "q": "大町温泉郷の泉質と特徴、葛温泉からの引湯について教えてください。",
    "a": "大町温泉郷は、北アルプス高瀬渓谷の奥深くに湧き出る秘湯「葛温泉（くずおんせん）」から引き湯された豊富な源泉を使用しています。泉質は「単純温泉（低張性・弱アルカリ性・高温泉）。」で、無色透明で匂いも少なく、肌への刺激が非常に穏やかなのが特徴です。「美肌の湯」としても知られ、乳幼児からお年寄りまで安心して長湯を楽しめます。高温泉のため冬の冷え切った身体の芯までポカポカと温まり、湯上がり後も温かさが長く持続します。"
  },
  {
    "q": "冬の安曇野で絶対に味わうべき地元グルメは何ですか？",
    "a": "冬の安曇野で特におすすめなのが「信州サーモン」と「信州プレミアム牛肉」、そして「冬の新そば」です。信州サーモンは長野県水産試験場が開発したブランド魚で、きめ細やかな肉質と適度な脂の乗り、とろけるような舌触りが特徴で、刺身でも加熱しても絶品です。また、長野県独自の美味しさ基準（オレイン酸含有率）をクリアした信州プレミアム牛は、ステーキやすき焼きで甘みある脂の旨味を堪能できます。さらに、11月以降に味わえる名水手打ちの「信州安曇野新そば」は香り高く、温かい「とうじ蕎麦」や「鴨南蛮」で味わうのも冬の醍醐味です。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-nagano-azumino-omachi-hotaka-snow-shinshugyu-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-nagano-azumino-omachi-hotaka-snow-shinshugyu-stay"
        },
        "headline": "【11・12・1月長野】安曇野＆大町温泉郷！白銀の北アルプス後立山連峰と穂高神社初詣・光のイルミネーション＆雪見露天名宿5選",
        "description": "冠雪した北アルプス後立山連峰（爺ヶ岳・鹿島槍ヶ岳・常念岳）が紺碧の冬空に映える11〜1月の安曇野・大町エリア。信濃国三之宮・穂高神社での雪の初詣や、国営アルプスあづみの公園を彩る県内最大級の光のイルミネーション。高瀬渓谷・葛温泉の名湯を引き込む大町温泉郷＆穂高温泉郷の雪見露天風呂、そして信州サーモンや信州プレミアム牛肉を堪能できる厳選名宿5選を徹底特集します。",
        "image": "https://img.travel.rakuten.co.jp/share/HOTEL/7149/7149.jpg",
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
          "@id": "https://croud-travel.pages.dev/winter-nagano-azumino-omachi-hotaka-snow-shinshugyu-stay"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-nagano-azumino-omachi-hotaka-snow-shinshugyu-stay#breadcrumb",
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
            "name": "安曇野＆大町温泉郷・白馬アルプス山麓名宿",
            "item": "https://croud-travel.pages.dev/winter-nagano-azumino-omachi-hotaka-snow-shinshugyu-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-nagano-azumino-omachi-hotaka-snow-shinshugyu-stay#faq",
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
        <Link href="/" className="hover:text-emerald-700 transition">ホーム</Link>
        <span>/</span>
        <Link href="/features" className="hover:text-emerald-700 transition">特集一覧</Link>
        <span>/</span>
        <span className="text-stone-800">長野・安曇野＆大町温泉郷・アルプス山麓名宿</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="relative bg-gradient-to-b from-stone-900 via-stone-800 to-emerald-950 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold tracking-wide">
            <Snowflake className="w-3.5 h-3.5 text-emerald-400" />
            11月〜1月限定・白銀の北アルプス冬特集
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight md:leading-snug text-balance">
            【11・12・1月長野】安曇野＆大町温泉郷！白銀の北アルプス後立山連峰と穂高神社初詣・光のイルミネーション＆雪見露天名宿5選
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            白銀に冠雪した北アルプスの山並みが広がる安曇野平野。信濃国三之宮・穂高神社での初詣と、満天の星空の下で輝く県内最大級のあづみの公園イルミネーション。葛温泉の名湯を引き込む大町温泉郷の雪見露天と信州牛グルメを満喫する冬の休日へ。
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-3 text-xs text-emerald-200">
            <span className="flex items-center gap-1.5"><Mountain className="w-4 h-4" /> 北アルプス後立山連峰</span>
            <span className="flex items-center gap-1.5"><Lightbulb className="w-4 h-4" /> あづみの公園光の祭典</span>
            <span className="flex items-center gap-1.5"><Snowflake className="w-4 h-4" /> 葛温泉引湯雪見露天風呂</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4" /> 信州サーモン＆信州牛</span>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">

        {/* イントロダクション解説 */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-6">
          <div className="border-l-4 border-emerald-600 pl-4">
            <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase">Winter Highlights</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              冬の安曇野・大町が選ばれる理由：純白のアルプス連峰と澄んだ名水が育む癒やしの森
            </h2>
          </div>
          <div className="prose text-stone-700 text-sm md:text-base leading-relaxed space-y-4">
            <p>
              長野県中西部に広がる安曇野と、黒部ダムの長野側玄関口として知られる信濃大町。11月から1月にかけての冬期は、澄み切った冬晴れの空のもと、爺ヶ岳、鹿島槍ヶ岳、白馬三山、常念岳といった標高3,000メートル級の北アルプス後立山連峰が真っ白な雪帽子を戴き、圧倒的なパノラマを描き出します。朝日に染まるモルゲンロート（朝焼けの赤い峰）や、夕暮れの残照に浮かぶ青白い雪嶺の稜線は、この地域に滞在する者だけに許された特別な絶景です。
            </p>
            <p>
              冬の安曇野を代表する風物詩が、国営アルプスあづみの公園で開催される長野県最大規模のイルミネーションです。広大な公園の自然林を舞台に数十万球の光が瞬き、白銀の雪景色と溶け合って息を呑むファンタジー空間を生み出します。また、新年の幕開けには、日本アルプスの総鎮守・信濃国三之宮として崇敬される「穂高神社」への初詣がおすすめ。荘厳な神木と静寂の雪に包まれた境内を参拝し、一年の交通安全や開運を祈願する時間は心洗われるひとときです。
            </p>
            <p>
              旅の拠点は、北アルプスの秘湯・葛温泉から引き湯された名湯が満ちる「大町温泉郷」や、安曇野の赤松林に佇む「穂高温泉郷」。弱アルカリ性の柔らかな単純温泉は、冬の冷えた手足をじんわりと包み込み、雪が舞い散る露天風呂からアルプスの峰を望む湯浴みは至福の極み。夕食には清流仕込みの「信州サーモン」、名水で打たれた「新そば」、そしてオレイン酸豊富な「信州プレミアム牛肉」を地ワインとともに味わう、豊かな冬の美食の旅が完成します。
            </p>
          </div>
        </section>

        {/* 厳選ホテル5選 */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase">Selected Ryokan & Hotels</span>
            <h2 className="text-2xl md:text-3xl font-black text-stone-900">
              安曇野＆大町温泉郷！白銀のアルプス絶景と極上温泉を満喫する名宿5選
            </h2>
            <p className="text-stone-600 text-xs md:text-sm">
              楽天トラベルで高評価を誇り、雪見露天風呂と信州の美味を堪能できるリゾート＆温泉旅館
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((hotel) => (
              <article key={hotel.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition">
                <div className="p-6 md:p-8 space-y-6">
                  {/* ヘッダー情報 */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="bg-emerald-600 text-white text-xs font-black px-2.5 py-0.5 rounded-full">
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
                      <span className="text-lg md:text-xl font-black text-emerald-700">{hotel.price}</span>
                    </div>
                  </div>

                  {/* 宿の詳細ストーリー */}
                  <div className="prose text-stone-700 text-sm md:text-base leading-relaxed">
                    <p>{hotel.story}</p>
                  </div>

                  {/* ハイライト3点 */}
                  <div className="bg-emerald-50/50 rounded-2xl p-4 md:p-5 border border-emerald-100 space-y-2.5">
                    <h4 className="text-xs font-black text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      この宿の注目ポイント＆こだわり
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs text-stone-700">
                      {hotel.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 客室・グルメのアドバイス */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60">
                      <span className="font-bold text-stone-900 flex items-center gap-1 mb-1">
                        <Building className="w-3.5 h-3.5 text-emerald-700" /> おすすめ客室
                      </span>
                      <p className="text-stone-600 leading-relaxed">{hotel.roomTip}</p>
                    </div>
                    <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60">
                      <span className="font-bold text-stone-900 flex items-center gap-1 mb-1">
                        <Utensils className="w-3.5 h-3.5 text-emerald-700" /> 冬の美食プラン
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
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold text-xs md:text-sm hover:from-emerald-700 hover:to-emerald-800 shadow-sm hover:shadow transition"
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

        {/* 冬の信州を味わう三大美味＆文化セクション */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="border-l-4 border-emerald-600 pl-4">
            <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase">Local Food & Culture</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              冬の安曇野・大町で絶対に味わうべき三大味覚：信州サーモン・信州プレミアム牛・新そば
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-stone-700">
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-3">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                清流仕込みの「信州サーモン」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                北アルプスの雪解け湧水で約10年の歳月をかけて開発された長野県オリジナルの高級魚。銀毛に輝く魚体はきめ細やかな赤身肉で、臭みが全くなく、上品でとろけるような脂の甘みが特徴です。お造りはもちろん、冬野菜とともに香ばしくソテーやポワレに仕立てても絶品です。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-3">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                とろける旨味「信州プレミアム牛」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                長野県独自の美味しさ基準（脂肪中のオレイン酸含有率55%以上）をクリアした極上の黒毛和牛。人肌でサッと溶ける良質な脂と、芳醇な肉の甘みが特徴。冬の冷えた夜に、地元の朴葉味噌で焼くステーキやすき焼き小鍋で味わえば、至福の余韻が口いっぱいに広がります。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-3">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                名水手打ちの「冬の新そば」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                名水百選に選ばれる安曇野の清冽な湧水で手打ちされる安曇野そば。11月以降は秋に収穫された香り高い「新そば」が出揃います。冬は投じ籠（とうじかご）にそばを入れ、熱々の山菜やキノコ、鴨肉の出汁にくぐらせて食べる信州伝統の「とうじ蕎麦」が身体を芯から温めます。
              </p>
            </div>
          </div>
        </section>

        {/* 安曇野の山岳信仰と大町の名水・酒造りコラム */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="border-l-4 border-emerald-600 pl-4">
            <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase">History & Heritage</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              古代安曇族の海神信仰と、信濃大町が誇る名水「男清水・女清水」の酒造り
            </h2>
          </div>
          <div className="prose text-stone-700 text-sm md:text-base leading-relaxed space-y-4">
            <p>
              山国である信州・安曇野に、なぜ海の神を祀る穂高神社が鎮座しているのか。その背景には、古代に北九州から日本海を経てこの地へ移住したとされる海洋民族「安曇族（あずみぞく）」のロマンあふれる歴史があります。彼らは北アルプスの雪解け水が伏流水となって湧き出る扇状地を開拓し、高度な農耕技術と山岳信仰を根付かせました。穂高神社奥宮が上高地の明神池に鎮座することからも、アルプスの山々と水への深い祈りが受け継がれてきたことがわかります。
            </p>
            <p>
              また、信濃大町の市街地には、東西で水源の異なる「男清水（おとこみず・白馬岳水系）」と「女清水（おんなみず・居谷里湿原水系）」という珍しい二つの名水が湧いています。冬期はこの清冽な水を用いて「白馬錦」や「北安大国」などの蔵元が寒仕込みの新酒造りに励みます。大町温泉郷の宿で味わう搾りたての新酒原酒は、フルーティーで力強い香りを放ち、信州の冬の宴を格別に盛り上げてくれます。
            </p>
          </div>
        </section>

        {/* 11・12・1月モデルコース */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="border-l-4 border-emerald-600 pl-4">
            <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase">Model Itinerary</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              【1泊2日】安曇野穂高神社初詣と大町温泉郷雪見露天・イルミネーション周遊プラン
            </h2>
          </div>

          <div className="space-y-6 text-sm text-stone-700">
            <div className="relative pl-6 border-l-2 border-emerald-200 space-y-4">
              <div className="relative">
                <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white" />
                <h4 className="font-bold text-stone-900 text-base">1日目：冬の清流アートと光り輝くあづみの公園</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  午前、長野自動車道安曇野ICより車でスタート。まずは「大王わさび農場」を訪れ、冬でも清らかに澄んだ湧水が流れる蓼川の水車小屋と、白銀の北アルプスの借景を写真に収める。昼食は安曇野市内の名店で名水手打ちの「安曇野新そば」とわさび丼を堪能。午後は安曇野アートラインの美術館を巡り、夕刻には「国営アルプスあづみの公園」へ。長野県最大規模の幻想的なウインターイルミネーションを鑑賞し、澄んだ夜空に瞬く光の海に心を奪われる。大町温泉郷の宿へ向かい、葛温泉の雪見露天風呂で冷えた身体を温め、信州牛と信州サーモンの会席を堪能。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white" />
                <h4 className="font-bold text-stone-900 text-base">2日目：総鎮守・穂高神社の雪の初詣と地酒蔵巡り</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  朝、雪山を望む露天風呂で爽快な朝湯を愉しみ、信州米と郷土料理の朝食をいただく。チェックアウト後、日本アルプスの総鎮守「穂高神社」へ向かい、雪化粧した神聖な境内で新年の初詣。健康長寿と交通安全の御守を拝受。続いて大町市内の「酒蔵・北安大国」や「白馬錦」の蔵元に立ち寄り、北アルプスの雪解け水で醸された新酒しぼりたて原酒をお土産に購入。信濃大町のレトロな商店街でご当地グルメ「黒部ダムカレー」を味わい、白銀の後立山連峰を背に帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 冬のアクセス＆雪道・防寒対策ガイド */}
        <section className="bg-emerald-50/60 rounded-3xl p-6 md:p-10 border border-emerald-200/80 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
            <AlertTriangle className="w-5 h-5 text-emerald-700 shrink-0" />
            <span>冬の安曇野・大町旅行・安全ドライブ＆防寒ガイド</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700 leading-relaxed">
            <div className="space-y-2">
              <strong className="text-stone-900 block font-bold">標高800mの冷え込みとスタッドレス必須</strong>
              <p>
                大町温泉郷や穂高温泉郷は北アルプスの麓、標高700〜800mの高地に位置します。平野部に雪がない場合でも、山麓部は圧雪道路やブラックアイスバーン（凍結路面）になることが日常的です。車で訪れる場合は必ずスタッドレスタイヤを装着し、車間距離を広く取った安全運転を心がけてください。
              </p>
            </div>
            <div className="space-y-2">
              <strong className="text-stone-900 block font-bold">氷点下イルミネーション鑑賞の防寒対策</strong>
              <p>
                国営アルプスあづみの公園のイルミネーションや夜間の温泉街散策では、気温が氷点下まで下がります。厚手のダウンコート、ニット帽、ネックウォーマー、手袋、カイロを常備してください。靴は底に滑り止めが付いた防水スノーブーツが最適です。
              </p>
            </div>
          </div>
        </section>

        {/* よくある質問（FAQ） */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="border-l-4 border-emerald-600 pl-4">
            <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase">Frequently Asked Questions</span>
            <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
              冬の安曇野・大町温泉郷旅行に関するよくある質問
            </h2>
          </div>

          <div className="divide-y divide-stone-100">
            {faqs.map((f, idx) => (
              <div key={idx} className="py-4 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm md:text-base flex items-start gap-2">
                  <span className="text-emerald-600 font-black">Q.</span>
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
            あわせて読みたい！冬の信州＆雪見露天特集
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <Link href="/winter-nagano-hakuba-onsen-powder-snow-alps-shinshu-beef-stay" className="p-3 bg-white rounded-xl hover:text-emerald-700 shadow-xs transition">
              ⛷️ 白馬バレー！世界最高峰パウダースノー＆アルプス雪見宿
            </Link>
            <Link href="/winter-nagano-togakushi-zenkoji-hatsumode-snow-soba-beef-stay" className="p-3 bg-white rounded-xl hover:text-emerald-700 shadow-xs transition">
              ⛩️ 善光寺＆戸隠神社初詣・冬の手打ち蕎麦と信州牛名宿
            </Link>
            <Link href="/winter-nagano-shirahone-onsen-milky-snow-stay" className="p-3 bg-white rounded-xl hover:text-emerald-700 shadow-xs transition">
              ♨️ 白骨温泉！乳白色の秘湯雪見露天風呂と信州美食宿
            </Link>
            <Link href="/winter-nagano-karuizawa-hoshino-illumination-tonbonoyu-shinshugyu-stay" className="p-3 bg-white rounded-xl hover:text-emerald-700 shadow-xs transition">
              ✨ 軽井沢星野イルミネーション＆トンボの湯リゾートステイ
            </Link>
            <Link href="/campaigns/autumn-gourmet-travel" className="p-3 bg-white rounded-xl hover:text-emerald-700 shadow-xs transition">
              🍁 全国の旬の味覚＆極上温泉宿特集まとめ
            </Link>
          </div>
        </section>

      </main>
    
      <HubRelatedPosts currentSlug="winter-nagano-azumino-omachi-hotaka-snow-shinshugyu-stay" />
</div>
  );
}
