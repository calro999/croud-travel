import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Fish, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Snowflake, Sparkle, Map
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月静岡・熱川温泉＆東伊豆の湯けむりと水平線日の出露天】名物地金目鯛姿煮＆伊豆牛石焼きステーキを満喫するオーシャンビュー名宿5選",
  description: "11月から12月にかけて、伊豆半島東海岸の熱川温泉（あたがわおんせん）は、約100度の高温泉が吹き出す温泉櫓（やぐら）から白い湯けむりが温泉街一面に立ち上り、初冬の温泉情緒が最高潮を迎えます。相模灘と正面に浮かぶ伊豆大島の水平線から昇る劇的な日の出を望む絶景露天風呂、南国情緒と温もりあふれる熱川バナナワニ園や温泉玉子作り体験。そして冬に向けて最も脂が乗り旨味が凝縮する名物「地金目鯛」のこってり甘辛姿煮やしゃぶしゃぶ、ジューシーな伊豆牛ステーキ、伊勢海老を味わう厳選オーシャンビュー名宿5選を徹底解説します。",
  keywords: '熱川温泉 宿泊, 熱川プリンスホテル, 熱川館, ホテルカターラ, 熱川ハイツ, 吉祥CAREN, 地金目鯛姿煮, 水平線日の出 11月 12月, 伊豆牛, 東伊豆',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-shizuoka-atagawa-onsen-ocean-sunrise-kinmedai-stay/"
  },
  openGraph: {
    title: "【11・12月静岡・熱川温泉＆東伊豆の湯けむりと水平線日の出露天】名物地金目鯛姿煮＆伊豆牛石焼きステーキを満喫するオーシャンビュー名宿5選",
    description: "11月から12月にかけて、伊豆半島東海岸の熱川温泉（あたがわおんせん）は、約100度の高温泉が吹き出す温泉櫓（やぐら）から白い湯けむりが温泉街一面に立ち上り、初冬の温泉情緒が最高潮を迎えます。相模灘と正面に浮かぶ伊豆大島の水平線から昇る劇的な日の出を望む絶景露天風呂、南国情緒と温もりあふれる熱川バナナワニ園や温泉玉子作り体験。そして冬に向けて最も脂が乗り旨味が凝縮する名物「地金目鯛」のこってり甘辛姿煮やしゃぶしゃぶ、ジューシーな伊豆牛ステーキ、伊勢海老を味わう厳選オーシャンビュー名宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-shizuoka-atagawa-onsen-ocean-sunrise-kinmedai-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の熱川温泉湯けむりと相模灘水平線の日の出露天風呂・地金目鯛姿煮'
      }
    ]
  }
};

export default function WinterShizuokaAtagawaPage() {
  const hotels = [
            {
              id: 1,
              name: "熱川温泉　熱川プリンスホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1222/1222.jpg",
              rating: 4.49,
              reviews: 1277,
              price: "¥9,900〜",
              access: "東京駅から乗換なしでスムーズ♪直通電車「踊り子号」を利用すれば、最短1時間40分で到着！伊豆熱川駅徒歩10分。送迎有",
              special: "【星4.5】個性豊かな12の湯船と天空露天風呂、 空と海との一体感が味わえる魅力が光る贅沢宿！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1222%2F1222.html",
              story: "熱川温泉街の爽快な高台に建ち、屋上に広がる天空露天風呂からのパノラマ絶景で絶大な人気を誇る屈指の名門旅館「熱川温泉 熱川プリンスホテル」。宿の最大のハイライトは、屋上（地上約20m）に設えられた天空露天風呂「薫風」と「ほほえみの湯」。初冬の澄み渡る早朝、目の前の水平線から伊豆大島を茜色に染めて昇る神々しい日の出を、湯船に浸かりながら特等席で見届けることができます。湧き出る自家源泉は湯量豊富な塩化物・硫酸塩泉で、湯冷めしにくく美肌効果も抜群。夕食は東伊豆の美味を贅沢に盛り込んだ会席料理。ふっくらと煮付けられた名物の地金目鯛の姿煮、香ばしい伊勢海老、柔らかな静岡県産牛ステーキなど、海沿いの宿ならではの極上グルメを優雅に堪能できます。",
              roomTip: "オーシャンビュー温泉露天風呂付き客室。初冬の朝日に輝く相模灘と伊豆大島のパノラマをテラスの専用露天風呂から独り占めできる至福のプライベート空間。",
              gourmetTip: "「熱川プリンス特選・金目鯛と伊勢海老会席」。肉厚な地金目鯛のまるごと姿煮、伊勢海老のお造り、静岡県産牛の陶板焼き、季節の釜飯とデザート。",
              highlights: [
                "屋上地上20mの天空露天風呂から望む相模灘の神々しい日の出＆自家源泉美肌の湯",
                "丸ごと地金目鯛姿煮と伊勢海老・静岡県産牛の贅沢会席＆高台からのパノラマ眺望",
                "伊豆熱川駅徒歩圏・送迎あり＆客室露天風呂付き特別室で過ごす至福の記念日旅行"
              ]
            },
            {
              id: 2,
              name: "伊豆大島を正面に臨む　眺望絶佳の宿　熱川館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29161/29161.jpg",
              rating: 4.32,
              reviews: 963,
              price: "¥9,800〜",
              access: "伊豆急行線・伊豆熱川駅／小田原厚木道路・西湖バイパス・石橋ＩＣ～熱海経由～Ｒ１３５号線を６５ｋｍ",
              special: "【蜜を避けた完全部屋食の宿】眺望絶佳の温泉宿で波音と共にお過ごし下さい。！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29161%2F29161.html",
              story: "熱川海岸の波打ち際、海までわずか数十メートルの特等席に佇み、全客室が伊豆大島を正面に望むオーシャンフロントを誇る眺望自慢の純和風老舗旅館「伊豆大島を正面に臨む 眺望絶佳の宿 熱川館」。客室の大きな窓を開ければ、心地よい潮騒と磯の香りが広がり、朝には海から昇る朝陽の光の道（サンロード）が客室へと真っ直ぐ伸びる息を呑む絶景が広がります。館内の大浴場や露天風呂、そして4つの無料貸切風呂にも熱川自慢の高温泉が惜しみなく注がれています。そして熱川館の最大の魅力が、朝夕ともに周りを気にせず寛げる「贅沢な部屋食」。伊豆近海で獲れた肉厚な地金目鯛の姿煮をはじめ、アワビの踊り焼きや地魚の舟盛りなど、料理人が腕を振るった出来立ての会席料理をお部屋でゆっくり味わえます。",
              roomTip: "海正面・10畳〜12.5畳純和風客室。窓の外に広がる遮るもののない相模灘の絶景と伊豆大島を眺め、波音をBGMに畳の上で足を伸ばして寛げる贅沢な空間。",
              gourmetTip: "「お部屋食・熱川館名物金目鯛姿煮と鮑会席」。秘伝のタレでこってり照り煮にした丸ごと金目鯛姿煮、活鮑の踊り焼き、近海鮮魚の舟盛り、地野菜の煮物。",
              highlights: [
                "波打ち際に佇む全室オーシャンフロント宿＆お部屋でゆっくり味わう名物金目鯛姿煮",
                "活鮑踊り焼きと地魚舟盛り＆4つの無料貸切風呂で過ごす水入らずの温泉時間",
                "客室の窓いっぱいに広がるサンロード＆心温まる純和風のおもてなしと静けさ"
              ]
            },
            {
              id: 3,
              name: "伊豆熱川温泉　ホテルカターラ　RESORT＆SPA",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7023/7023.jpg",
              rating: 4.07,
              reviews: 1635,
              price: "¥21,000〜",
              access: "伊豆熱川駅より無料送迎あり（13:00～16:30随時運行、予約不要）",
              special: "一年中遊べる屋内プールに夏は徒歩５分でビーチ。秋冬はほっこり温泉で伊豆一の泉質を味わえます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7023%2F7023.html",
              story: "熱川の海岸沿いに位置し、南国ハワイアンリゾートの陽気な雰囲気と良質な天然温泉を融合させた大型エンターテインメントホテル「伊豆熱川温泉 ホテルカターラ RESORT＆SPA」。宿の自慢は、水着で一年中楽しめる全天候型の屋内温泉プールと、古代の熱帯雨林を模した天然温泉ジャングルスパ。さらに海を一望する大浴場「月あかり」や露天風呂からは、初冬の澄んだ相模灘と星空を見渡す開放感抜群の湯浴みが楽しめます。夕食は豪華絢爛な海鮮バイキングまたは和食会席。キッズスペースや充実した館内施設が整い、冬休みのファミリー旅行や三世代旅行、カップル旅行まで、誰もが笑顔になれる充実したリゾートステイを提供しています。",
              roomTip: "オーシャンビュー和洋室。水平線を見渡すバルコニーを備え、広々としたリビングとベッドでリゾート気分を満喫できる快適なお部屋。",
              gourmetTip: "「冬の伊豆海鮮ディナーバイキング」。シェフが焼き上げる牛ステーキ、近海地魚のお刺身コーナー、金目鯛料理、熱々天ぷら、充実のデザートバー。",
              highlights: [
                "全天候型温泉プール＆天然温泉ジャングルスパと海見露天風呂の充実リゾート",
                "シェフ実演ステーキや地魚刺身バイキング＆三世代家族やカップルにも安心の設備",
                "熱川バナナワニ園へ至近＆全室オーシャンビューの開放的なバルコニー客室"
              ]
            },
            {
              id: 4,
              name: "熱川温泉　熱川ハイツ（伊東園ホテルズ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/173101/173101.jpg",
              rating: 3.95,
              reviews: 477,
              price: "¥6,798〜",
              access: "伊豆熱川駅よりお車にて約６分　　駅からの送迎あり※詳しくはホテルまでお問い合わせください。",
              special: "熱川の高台に位置する、景観自慢の温泉宿。絶景をお部屋でも望める、露天付き客室がオススメです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F173101%2F173101.html",
              story: "熱川温泉街を見下ろす緑豊かな高台に建ち、相模灘と伊豆大島の大パノラマをリーズナブルに楽しめる伊東園ホテルズグループの温泉ホテル「熱川温泉 熱川ハイツ」。高台ならではの抜群の見晴らしが自慢で、晴れた日には伊豆七島の島々までくっきりと望むことができます。自家源泉から引く天然温泉は広々とした大浴場や開放的な露天風呂を満たし、初冬の澄んだ外気を感じながらのんびりと名湯を堪能できます。夕食は季節のバイキングに加え、生ビールや地酒などのアルコール類が無料で飲み放題という抜群のコストパフォーマンス。気兼ねなく楽しめるフリースタイルの旅を求める旅行者や、温泉三昧を気軽に満喫したい一人旅・グループ旅行に厚い支持を得ています。",
              roomTip: "海側和室。高台からの壮大なオーシャンビューを眼下に眺めながら、リーズナブルにゆったりと寛げる清潔で機能的な客室。",
              gourmetTip: "「季節の和洋中バイキング＆アルコール飲み放題」。季節替わりの海鮮料理、握り寿司、揚げたて天ぷら、生ビール・日本酒・サワー飲み放題、特製ソフトクリーム。",
              highlights: [
                "高台からの相模灘・伊豆七島大パノラマ展望＆季節バイキングとアルコール無料飲み放題",
                "リーズナブルに楽しむ天然温泉ステイ＆伊東園ホテルズならではの安心コスパ",
                "伊豆急行熱川駅からの送迎あり＆気兼ねなく楽しめる一人旅・自由旅の拠点"
              ]
            },
            {
              id: 5,
              name: "伊豆北川温泉　お祝いの宿　吉祥ＣＡＲＥＮ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38120/38120.jpg",
              rating: 4.59,
              reviews: 555,
              price: "¥26,500〜",
              access: "伊豆熱川駅より送迎有り（13:30～16:00）",
              special: "大自然の中のかけ流し天然温泉と極上のスパトリートメントにフレンチ懐石。身体と心に安らぎのご褒美を。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38120%2F38120.html",
              story: "熱川温泉のすぐ隣、東伊豆・北川（ほっかわ）温泉の海岸沿い高台に佇み、相模灘を一望する絶景インフィニティ露天風呂と極上のフレンチ懐石で名高い最高級スモールラグジュアリー旅館「伊豆北川温泉 お祝いの宿 吉祥ＣＡＲＥＮ（カレン）」。館内は和の優雅さと洋の快適性が美しく調和した大人の隠れ家。宿の代名詞である空中露天風呂「碧海」や「望海」は、海と空に溶け込むかのようなインフィニティ設計で、初冬の海原を黄金色に染めるサンライズや月夜のムーンロードは言葉を失う美しさです。夕食は伊豆の海山の幸を繊細なフレンチの手法で昇華させた「フレンチ懐石」。伊豆名物の金目鯛や伊勢海老、天城鹿肉や黒毛和牛が芸術的なコース仕立てで運ばれ、記念日や大人の贅沢旅に最高峰の評価を得ています。",
              roomTip: "展望風呂付き客室またはコーナースイート。プライベートバルコニーから相模灘の水平線を一望し、アロマ香る極上の空間で大人のリラクゼーションを堪能。",
              gourmetTip: "「吉祥フレンチ懐石・冬の贅」。伊豆近海産地金目鯛のポワレ・サフランソース、伊勢海老のグリル、黒毛和牛ロース肉のロティ、冬の伊豆柑橘デザート。",
              highlights: [
                "海と空に溶け込むインフィニティ空中露天風呂＆大人のためのフレンチ懐石美学",
                "金目鯛ポワレと黒毛和牛の極上フレンチ懐石＆記念日や夫婦旅に最高峰の評価",
                "相模灘のムーンロード絶景鑑賞＆アロマ香る洗練された空間とアフタヌーンティー"
              ]
            }
  ];

  const faqList = [
  {
    "q": "熱川温泉の街並みの特徴や「湯けむり」「温泉櫓（やぐら）」の風景とは？",
    "a": "熱川温泉は、約100度前後の高温な自家源泉が地下から自噴する日本でも有数の高温泉地です。温泉街の各所に木製や鉄骨の「温泉櫓（やぐら）」が立ち並び、初冬の冷たい外気に触れて白い湯けむりがモクモクと立ち上る情景は、熱川温泉ならではの風物詩です。伊豆急行「伊豆熱川駅」の駅前には無料の足湯「熱川湯の華ぱぁーく」が整備されており、源泉で茹でる「温泉玉子作り体験（売店で卵を購入）」が観光客に大人気。初冬の散策途中にホカホカの温泉玉子を味わい、足湯で温まるのが熱川流の楽しみ方です。"
  },
  {
    "q": "11月・12月の熱川温泉の気候や気温、おすすめの服装は？",
    "a": "伊豆半島の東海岸に位置する熱川温泉は、黒潮の温暖な海流に面しているため、同緯度の内陸部に比べて冬でも非常に温暖です。11月の平均気温は13〜16℃前後で、日中はポカポカとした小春日和の日が多く、散策に最適です。12月に入っても最高気温は12〜15℃、最低気温は6〜8℃程度と、氷点下になることはほとんどありません。ただし、海沿いの遊歩道や高台の展望台では初冬の海風が吹くと肌寒く感じられるため、中厚手のウールコートやジャケット、風を防ぐストールを持参すると快適に過ごせます。"
  },
  {
    "q": "熱川温泉の泉質や効能、客室露天風呂の魅力は？",
    "a": "熱川温泉の主な泉質は「ナトリウム-塩化物・硫酸塩温泉（弱アルカリ性・高温泉）」です。メタケイ酸などの美肌成分を豊富に含み、肌触りは柔らかくしっとりとしています。塩化物泉の特性により、入浴後は塩分が肌をベールのように包み込んで熱を逃がさないため、湯冷めしにくく「温まりの湯」「美肌の湯」として親しまれています。海に面した旅館が多く、客室専用の露天風呂や大浴場から、初冬の澄み渡る相模灘の水平線や朝陽、夜空の月を眺めながら長湯を楽しめるのが最大の魅力です。"
  },
  {
    "q": "冬の熱川・東伊豆で旬を迎える名物グルメは何ですか？",
    "a": "東伊豆の冬の美食の代表格は、なんと言っても「地金目鯛（じきんめだい）」です。11月から12月にかけて、伊豆近海の水深200〜500mで獲れる金目鯛は最も脂を蓄え、とろけるような甘みがあります。熱川の宿で振る舞われる丸ごと一本の「金目鯛の姿煮」は、秘伝の甘辛い濃厚ダレで煮付けられ、ご飯やお酒が進む逸品です。また、薄造りの身を出汁にくぐらせる「金目鯛のしゃぶしゃぶ」、甘く引き締まった「伊勢海老のお造り」、香ばしい「鮑の踊り焼き」、そして柔らかな肉質の「伊豆牛ステーキ」など贅沢な山海の幸が揃います。"
  },
  {
    "q": "東京方面から熱川温泉へのアクセス方法や電車の所要時間は？",
    "a": "電車を利用する場合、東京駅からJR東海道線・伊東線直通の特急「踊り子号」または「サフィール踊り子」に乗車すれば、乗り換えなしで「伊豆熱川駅」まで約2時間15分で快適に直通します。車の場合は、東名高速道路・厚木ICから小田原厚木道路、真鶴道路、国道135号（東伊豆海岸線）を経由して約2時間〜2時間30分です。初冬の東伊豆海岸線は青い海と伊豆大島を横目に眺める爽快な絶景ドライブルートとして知られています。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://croud-travel.com/winter-shizuoka-atagawa-onsen-ocean-sunrise-kinmedai-stay#article',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://croud-travel.com/#website',
          'name': 'クラドトラベル',
          'url': 'https://croud-travel.com/'
        },
        'headline': "【11・12月静岡・熱川温泉＆東伊豆の湯けむりと水平線日の出露天】名物地金目鯛姿煮＆伊豆牛石焼きステーキを満喫するオーシャンビュー名宿5選",
        'description': "11月から12月にかけて、伊豆半島東海岸の熱川温泉（あたがわおんせん）は、約100度の高温泉が吹き出す温泉櫓（やぐら）から白い湯けむりが温泉街一面に立ち上り、初冬の温泉情緒が最高潮を迎えます。相模灘と正面に浮かぶ伊豆大島の水平線から昇る劇的な日の出を望む絶景露天風呂、南国情緒と温もりあふれる熱川バナナワニ園や温泉玉子作り体験。そして冬に向けて最も脂が乗り旨味が凝縮する名物「地金目鯛」のこってり甘辛姿煮やしゃぶしゃぶ、ジューシーな伊豆牛ステーキ、伊勢海老を味わう厳選オーシャンビュー名宿5選を徹底解説します。",
        'inLanguage': 'ja',
        'mainEntityOfPage': 'https://croud-travel.com/winter-shizuoka-atagawa-onsen-ocean-sunrise-kinmedai-stay',
        'datePublished': '2026-09-28T00:00:00+09:00',
        'dateModified': '2026-09-28T00:00:00+09:00',
        'publisher': {
          '@type': 'Organization',
          'name': 'クラドトラベル編集部',
          'url': 'https://croud-travel.com/'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://croud-travel.com/winter-shizuoka-atagawa-onsen-ocean-sunrise-kinmedai-stay#faq',
        'mainEntity': faqList.map((f) => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.a
          }
        }))
      }
    ]
  };


  return (
    <article className="min-h-screen bg-gradient-to-b from-slate-50 via-teal-50/20 to-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-teal-900 via-sky-900 to-indigo-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-teal-200">
            <Link href="/" className="hover:underline hover:text-white transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:underline hover:text-white transition">特集一覧</Link>
            <span>/</span>
            <span className="text-white font-medium">静岡・熱川温泉＆東伊豆</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-xs sm:text-sm font-semibold tracking-wide">
            <Flame className="w-4 h-4 text-amber-300" />
            11月・12月 湯けむり＆日の出オーシャンビュー特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月静岡・熱川温泉】湯けむりと水平線日の出露天
            <span className="block text-teal-300 text-lg sm:text-2xl mt-3 font-normal">
              名物地金目鯛姿煮＆伊豆牛石焼きステーキを満喫するオーシャンビュー名宿5選
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl">
            11月から12月にかけて、東伊豆の熱川温泉は約100度の高温泉が噴き出す温泉櫓から白い湯けむりが街一面に立ち込める初冬の温泉情緒に包まれます。相模灘と伊豆大島の水平線から昇る神々しい日の出を望む絶景露天風呂、温泉玉子作りや足湯散策。そして脂が乗り切った東伊豆名物「地金目鯛」のこってり姿煮やしゃぶしゃぶ、伊豆牛ステーキを心ゆくまで堪能する厳選オーシャンビュー名宿5選を徹底解説します。
          </p>

          <div className="flex flex-wrap gap-4 pt-4 text-xs sm:text-sm text-teal-100">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <Calendar className="w-4 h-4 text-teal-300" />
              <span>ベストシーズン: 11月上旬〜12月下旬</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <Sun className="w-4 h-4 text-amber-300" />
              <span>水平線日の出＆サンロード絶景</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <Fish className="w-4 h-4 text-sky-300" />
              <span>極上地金目鯛姿煮＆伊豆牛</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Section 1: Season Context & Highlights */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <Sparkle className="w-6 h-6 text-teal-700" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              立ち上る湯けむりと水平線の輝き｜11月・12月に熱川温泉を訪れるべき理由
            </h2>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              伊豆半島の東海岸、相模灘を正面に望む斜面に広がる熱川（あたがわ）温泉。室町時代の武将・太田道灌が狩りの途中に湯浴みする傷ついた猿を見て発見したと伝わる名湯です。地下深くに熱源を持つ熱川は、約100度前後の自噴泉が湧き出す日本屈指の高温泉地であり、初冬の冷たい空気が流れ込む11月から12月にかけて、温泉街の随所にそびえ立つ木造・鉄骨の「温泉櫓（やぐら）」からモクモクと真っ白な湯けむりが立ち上る、最も情緒あふれる風景に出会えます。
            </p>
            <p>
              太平洋の黒潮に面した東伊豆は、冬でも日中は小春日和の温かな陽光に恵まれ、寒さに震えることなく快適な海辺のリゾートステイを楽しめるのが大きな魅力です。朝、東の水平線と伊豆大島の島影から昇る神々しい日の出は息を呑む絶景。海沿いの宿の露天風呂に浸かりながら、海原にまっすぐと伸びる黄金色の光の道「サンロード」を眺める朝風呂の時間は、日常の疲れを一瞬で忘れさせてくれます。
            </p>
            <p>
              そして、冬の熱川温泉を語る上で欠かせないのが「地金目鯛」の至高の美味です。初冬に向けて身に脂をたっぷりと蓄えた近海の金目鯛は、丸ごと一本を秘伝の濃厚な甘辛ダレでふっくら照り煮にした姿煮が真骨頂。口の中でとろけるような白身と旨味、さらに年間わずかしか出荷されない幻の伊豆牛の石焼きステーキや活鮑の踊り焼き。街歩きでは駅前の足湯「熱川湯の華ぱぁーく」でホカホカの温泉玉子作りに興じ、冬でも暖かな熱川バナナワニ園の温室で珍しい熱帯植物を愛でるなど、心も体も芯から温まる冬旅が約束されています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-teal-900 text-sm">
                <Flame className="w-4 h-4 text-teal-600" />
                約100度の源泉櫓と白い湯けむり
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                街のあちこちから立ち上る初冬の湯けむり情景。駅前足湯での温泉玉子作り体験や温泉街散策が楽しい情緒豊かな温泉地。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-teal-900 text-sm">
                <Sun className="w-4 h-4 text-teal-600" />
                伊豆大島を望む水平線日の出露天
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                相模灘の水平線から昇る神々しい朝日と黄金のサンロード。保温効果の高い塩化物泉に浸かりながら独占する至福の眺望。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-teal-900 text-sm">
                <Fish className="w-4 h-4 text-teal-600" />
                脂乗り最高の地金目鯛姿煮＆伊豆牛
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                秘伝ダレで煮付ける肉厚金目鯛の姿煮、伊勢海老のお造り、幻の伊豆牛ステーキ。海沿いならではの贅沢会席ディナー。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Hotel Cards */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs sm:text-sm font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Selected 5 Oceanfront Accommodations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              初冬の熱川温泉＆東伊豆を満喫する厳選名宿5選
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              屋上天空露天風呂からの日の出絶景宿から、波打ち際のお部屋食旅館、インフィニティ空中露天風呂の大人の宿まで、至福の伊豆旅を約束する5軒を厳選。
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((h) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-200/80 flex flex-col lg:flex-row"
              >
                {/* Hotel Image */}
                <div className="lg:w-2/5 relative min-h-[260px] lg:min-h-full">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 left-4 bg-teal-900/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    第{h.id}選
                  </div>
                </div>

                {/* Hotel Info */}
                <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-amber-500 text-sm font-bold">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span>{h.rating}</span>
                        <span className="text-xs text-slate-400 font-normal">（{h.reviews.toLocaleString()}件の口コミ）</span>
                      </div>
                      <span className="text-sm font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                        {h.price}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                      {h.name}
                    </h3>

                    <p className="text-xs text-slate-500 flex items-start gap-1">
                      <MapPin className="w-3.5 h-3.5 text-teal-700 flex-shrink-0 mt-0.5" />
                      <span>{h.access}</span>
                    </p>

                    <p className="text-sm text-slate-700 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2 text-xs sm:text-sm">
                      <div className="flex items-start gap-2">
                        <Eye className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 font-semibold">おすすめ客室＆眺望: </strong>
                          <span className="text-slate-700">{h.roomTip}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Utensils className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 font-semibold">冬の特選美食: </strong>
                          <span className="text-slate-700">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-slate-900 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        この宿の注目ポイント
                      </span>
                      <ul className="grid grid-cols-1 gap-1 text-xs text-slate-600">
                        {h.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 flex-shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-sm font-bold shadow-sm hover:shadow transition duration-200"
                    >
                      <span>楽天トラベルでプラン・空室を確認</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: 1泊2日のおすすめモデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Map className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                【11月・12月】熱川の湯けむりと水平線日の出・地金目鯛を満喫する1泊2日モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6 text-sm text-slate-700">
            <div className="border-l-2 border-teal-600 pl-4 sm:pl-6 space-y-3">
              <div className="font-bold text-teal-900 text-base flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">1日目</span>
                東京から特急踊り子号で熱川へ・バナナワニ園と温泉玉子作り・金目鯛姿煮
              </div>
              <p className="leading-relaxed text-xs sm:text-sm">
                午前中に東京駅から特急「踊り子号」に乗車し、乗り換えなし約2時間15分で伊豆熱川駅に到着。駅前の足湯「熱川湯の華ぱぁーく」で、売店で買った生卵を温泉櫓の源泉に浸けて名物のホカホカ温泉玉子作りを体験。昼食は駅前食事処で地魚刺身定食やアジのたたき丼を味わった後、世界中のワニや熱帯植物、愛らしいマナティに出会える「熱川バナナワニ園」を見学。15時半頃に海沿いの温泉旅館へチェックイン。相模灘と伊豆大島を一望する露天風呂で約100度の自家源泉の温もりに浸かり、夕食には脂が乗った肉厚な地金目鯛の丸ごと姿煮、伊勢海老のお造り、伊豆牛ステーキをお部屋食または食事処でじっくり堪能します。
              </p>
            </div>
            <div className="border-l-2 border-teal-600 pl-4 sm:pl-6 space-y-3">
              <div className="font-bold text-teal-900 text-base flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">2日目</span>
                水平線から昇る感動のサンライズ朝風呂・海岸線散歩と東伊豆みかん狩り
              </div>
              <p className="leading-relaxed text-xs sm:text-sm">
                早朝、水平線から昇る神々しい日の出の光を眺めながら屋上天空露天風呂で至福の朝湯。金目鯛の釜飯やアジの干物が並ぶ朝食を味わった後、10時にチェックアウト。熱川海岸の海辺の遊歩道を散策し、心地よい潮風を感じながら東伊豆名産の初冬のみかん狩り園へ。温暖な気候で甘みを凝縮させた完熟みかんを味わい、直売所で金目鯛の干物やわさび漬けをお土産に購入。午後、再び特急踊り子号に乗車し、車窓の海を眺めながら快適に帰路へ就きます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Winter Gourmet Guide */}
        <section className="bg-gradient-to-br from-teal-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-700/60">
            <Utensils className="w-6 h-6 text-amber-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              熱川・東伊豆の初冬グルメ完全ガイド！地金目鯛・伊豆牛・伊勢海老
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-200">
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Fish className="w-4 h-4 text-amber-300" />
                名物・地金目鯛の姿煮
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                東伊豆で水揚げされる地金目鯛は、脂の乗りと身の甘みが最高峰。甘辛い秘伝のタレで骨まで旨味を行き渡らせた姿煮は、ふっくらとした肉厚の白身と濃厚な煮汁が絡み合う至福のごちそうです。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-orange-300" />
                伊豆牛ステーキ＆活鮑踊り焼き
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                伊豆半島の自然の中で年間約150頭しか出荷されない幻のブランド牛「伊豆牛」。キメが細かく赤身の旨味が濃厚で、熱々の石焼きステーキでジューシーに楽しめます。また目の前で焼く活鮑も絶品です。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-teal-300 text-base flex items-center gap-1.5">
                <Waves className="w-4 h-4 text-sky-300" />
                伊勢海老のお造り＆鬼殻焼き
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                秋に解禁を迎えた伊豆の伊勢海老は、初冬に一層甘みが増します。プリプリと弾けるお造りや、香ばしい鬼殻焼き、翌朝の朝食に供される濃厚な伊勢海老の味噌汁は、旅の記憶を鮮やかに彩ります。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Travel Tips / Climate & Clothing */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <Footprints className="w-6 h-6 text-teal-800" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              11月・12月の熱川観光！気候・服装・散策のアドバイス
            </h2>
          </div>
          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              熱川温泉は南向きの海岸線に位置し、黒潮の恩恵を受けるため、冬でも非常に温暖な気候です。11月は平均最高気温16〜18℃で、晴れた日はセーター一枚でも快適に散策できます。12月も最高気温12〜15℃、最低気温6〜8℃程度で、雪が降ることは極めて稀です。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                  <ThermometerSun className="w-4 h-4 text-teal-700" />
                  海風に対応できる軽めのアウター
                </h4>
                <p className="text-slate-600">
                  日中は日差しが温かいですが、早朝の日の出観賞や夜の露天風呂・散策時には海風で冷え込むため、トレンチコートや軽めのダウン、ストールを用意すると重宝します。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-700" />
                  足湯や温泉街散策に便利なタオル
                </h4>
                <p className="text-slate-600">
                  駅前の「熱川湯の華ぱぁーく」など無料の足湯が点在しているため、すぐに足を拭ける小さなハンドタオルを鞄に入れておくと散策をより一層楽しめます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Area Access & Transportation */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <Map className="w-6 h-6 text-teal-800" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              熱川温泉へのアクセス情報
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-teal-800 block text-sm">東京駅から（特急踊り子号）</span>
              <p className="text-slate-600 leading-relaxed">
                特急「踊り子号」「サフィール踊り子」で乗り換えなし直通約2時間15分。車窓に広がる相模灘を眺めながら快適に到着します。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-teal-800 block text-sm">伊豆熱川駅から温泉街へ</span>
              <p className="text-slate-600 leading-relaxed">
                駅を出るとすぐ目の前に温泉櫓と足湯が広がり、温泉街の各宿へは徒歩約5〜8分。高台の宿へは無料送迎バスが運行しています。
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="font-bold text-teal-800 block text-sm">車でのアクセス（海岸ドライブ）</span>
              <p className="text-slate-600 leading-relaxed">
                東名厚木ICから小田原厚木道路・国道135号経由で約2時間〜2時間30分。初冬の青い海を望む爽快なシーサイドロードです。
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <HelpCircle className="w-6 h-6 text-teal-800" />
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の熱川温泉旅行 よくある質問
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-teal-700 font-extrabold flex-shrink-0">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Related Links / Mesh */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <Compass className="w-6 h-6 text-teal-800" />
            <h2 className="text-xl font-bold text-slate-900">
              あわせて読みたい！伊豆の冬名湯＆金目鯛特集
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/winter-shizuoka-shimoda-onsen-kinmedai-ocean-view-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-full inline-block">静岡・下田</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-teal-800 transition line-clamp-2">
                下田温泉の水揚げ日本一地金目鯛姿煮と海絶景露天宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                爪木崎水仙まつりと伊豆半島南端のオーシャンビューを満喫。
              </p>
            </Link>
            <Link 
              href="/winter-shizuoka-inatori-onsen-kinmedai-oceanview-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-full inline-block">静岡・稲取</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-teal-800 transition line-clamp-2">
                稲取温泉の稲取キンメ姿煮と海一望インフィニティ露天宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                ブランド稲取金目鯛の極上会席と雛のつるし飾り発祥の地。
              </p>
            </Link>
            <Link 
              href="/winter-shizuoka-atami-onsen-winter-fireworks-kinmedai-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-full inline-block">静岡・熱海</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-teal-800 transition line-clamp-2">
                熱海温泉の冬海上花火大会と夜景オーシャンビュー露天宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                澄み渡る夜空に咲く冬の花火と老舗の名湯・近海鮮魚会席。
              </p>
            </Link>
            <Link 
              href="/winter-shizuoka-shuzenji-late-momiji-bamboo-stay"
              className="group p-4 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-100 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-full inline-block">静岡・修善寺</span>
              <h4 className="text-xs font-bold text-slate-800 group-hover:text-teal-800 transition line-clamp-2">
                修善寺温泉の竹林の小径と伊豆最古の美肌名湯宿
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                伊豆の小京都・桂川のせせらぎと歴史ある静寂の温泉街。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-shizuoka-atagawa-onsen-ocean-sunrise-kinmedai-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
