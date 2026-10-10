import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Footprints, Flame, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye, Sun, Palmtree
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【秋の志摩スペイン村パルケエスパーニャ】情熱のハロウィーンフィエスタ！フォトジェニックなカボチャ広場・限定パレード＆伊勢志摩温泉リゾート厳選名宿5選",
  description: "陽光あふれる情熱の国スペインを再現したテーマパーク「志摩スペイン村パルケエスパーニャ」。秋にはパーク全体がオレンジ色に染まる「ハロウィーンフィエスタ」が開幕！マヨール広場に登場する巨大な「モンスターパンプキン」のフォトスポットや、ハロウィーン限定衣装をまとったドンキホーテや仲間たちとのグリーティング、陽気なフラメンコショーが繰り広げられます。異国情緒あふれる白壁の街並みで味わう本場パエリャやチュロス、そしてパーク隣接の南欧風リゾートホテルや英虞湾の絶景を望む極上天然温泉名宿5選を徹底特集。",
  keywords: '志摩スペイン村 ハロウィン, パルケエスパーニャ ハロウィーンフィエスタ, ホテル志摩スペイン村, 都リゾート奥志摩アクアフォレスト, グランドメルキュール伊勢志摩, 汀渚ばさら邸, ひまわりの湯, 伊勢志摩 温泉 旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/autumn-mie-shima-spain-village-halloween-fiesta-resort-hotels-stay'
  },
  openGraph: {
    title: "【秋の志摩スペイン村パルケエスパーニャ】情熱のハロウィーンフィエスタ！フォトジェニックなカボチャ広場・限定パレード＆伊勢志摩温泉リゾート厳選名宿5選",
    description: "陽光あふれる情熱の国スペインを再現したテーマパーク「志摩スペイン村パルケエスパーニャ」。秋にはパーク全体がオレンジ色に染まる「ハロウィーンフィエスタ」が開幕！マヨール広場に登場する巨大な「モンスターパンプキン」のフォトスポットや、ハロウィーン限定衣装をまとったドンキホーテや仲間たちとのグリーティング、陽気なフラメンコショーが繰り広げられます。異国情緒あふれる白壁の街並みで味わう本場パエリャやチュロス、そしてパーク隣接の南欧風リゾートホテルや英虞湾の絶景を望む極上天然温泉名宿5選を徹底特集。",
    url: 'https://croud-travel.pages.dev/autumn-mie-shima-spain-village-halloween-fiesta-resort-hotels-stay',
    siteName: 'クラドトラベル',
    type: 'article',
    locale: 'ja_JP',
    images: [{
      url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
      width: 1200,
      height: 630,
      alt: '秋の志摩スペイン村 パルケエスパーニャと白壁の街並み'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【秋の志摩スペイン村パルケエスパーニャ】情熱のハロウィーンフィエスタ！フォトジェニックなカボチャ広場・限定パレード＆伊勢志摩温泉リゾート厳選名宿5選",
    description: "陽光あふれる情熱の国スペインを再現したテーマパーク「志摩スペイン村パルケエスパーニャ」。秋にはパーク全体がオレンジ色に染まる「ハロウィーンフィエスタ」が開幕！マヨール広場に登場する巨大な「モンスターパンプキン」のフォトスポットや、ハロウィーン限定衣装をまとったドンキホーテや仲間たちとのグリーティング、陽気なフラメンコショーが繰り広げられます。異国情緒あふれる白壁の街並みで味わう本場パエリャやチュロス、そしてパーク隣接の南欧風リゾートホテルや英虞湾の絶景を望む極上天然温泉名宿5選を徹底特集。",
    images: ['https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function ShimaSpanishHalloweenFeaturePage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【秋の志摩スペイン村パルケエスパーニャ】情熱のハロウィーンフィエスタ！フォトジェニックなカボチャ広場・限定パレード＆伊勢志摩温泉リゾート厳選名宿5選",
    "description": "陽光あふれる情熱の国スペインを再現したテーマパーク「志摩スペイン村パルケエスパーニャ」。秋にはパーク全体がオレンジ色に染まる「ハロウィーンフィエスタ」が開幕！マヨール広場に登場する巨大な「モンスターパンプキン」のフォトスポットや、ハロウィーン限定衣装をまとったドンキホーテや仲間たちとのグリーティング、陽気なフラメンコショーが繰り広げられます。異国情緒あふれる白壁の街並みで味わう本場パエリャやチュロス、そしてパーク隣接の南欧風リゾートホテルや英虞湾の絶景を望む極上天然温泉名宿5選を徹底特集。",
    "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "T10:00:00+09:00",
    "dateModified": "T10:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "クラドトラベル編集部 南欧リゾート・温泉取材班"
    },
    "publisher": {
      "@type": "Organization",
      "name": "クラドトラベル",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.pages.dev/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.pages.dev/autumn-mie-shima-spain-village-halloween-fiesta-resort-hotels-stay"
    }
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://croud-travel.pages.dev/"
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
        "name": "志摩スペイン村・ハロウィーンフィエスタ特集",
        "item": "https://croud-travel.pages.dev/autumn-mie-shima-spain-village-halloween-fiesta-resort-hotels-stay"
      }
    ]
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "志摩スペイン村「ハロウィーンフィエスタ」の開催時期と主なイベント内容は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "志摩スペイン村の「ハロウィーンフィエスタ」は、例年9月上旬から10月31日まで開催されます。見どころは、マヨール広場に登場する高さ約4mの巨大モニュメント「モンスターパンプキン」や、広場を彩るハロウィーン仕様のフラッグやランタンです。ドンキホーテやサンチョたちキャラクターがハロウィーン限定コスチュームで登場するストリートグリーティング、陽気な音楽とダンスが楽しいパレード「エスパーニャカーニバル “ブエン ビアヘ”。」など、明るく陽気なスペインの秋を満喫できます。"
        }
      },
      {
        "@type": "Question",
        "name": "隣接するオフィシャルホテル「ホテル志摩スペイン村」に泊まるメリットは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "オフィシャルホテルに宿泊すると、ホテル直通の専用連絡通路からパークへ数分で入場できるほか、宿泊者限定で通常価格より大幅にお得な「ホテル2DAYパスポート」を購入できます。また、館内の天然温泉「ひまわりの湯」に宿泊当日と翌日の何度でも無料で入浴可能。パークで遊んだ合間にホテルへ戻って温泉で休憩したり、着替えをして再びパークへ戻るなど、オフィシャルならではの自由で快適な過ごし方が可能です。"
        }
      },
      {
        "@type": "Question",
        "name": "パーク内で味わえるハロウィーン限定グルメやスペイン名物は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "秋のスペイン村では、大鍋で豪快に炊き上げる「魚の幸パエリャ」をはじめ、秋の味覚を取り入れたハロウィーン限定パンプキンピッツァ、揚げたてサクサクの「シナモンチュロス」やパンプキンパフェが人気です。カフェ「トレンタ」やレストラン「アルハンブラ」では、スペイン産生ハム（ハモン・セラーノ）やワイン、サングリアも堪能できます。"
        }
      },
      {
        "@type": "Question",
        "name": "秋（9・10月）の志摩スペイン村・伊勢志摩エリアの服装と気候は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "伊勢志摩エリアは海洋性気候で比較的温暖ですが、9月下旬から10月にかけては朝晩と日中の寒暖差が大きくなります。日中は半袖や薄手の長袖で快適に過ごせますが、夕暮れ時から海風が冷たくなるため、パーカーやカーディガン、ストールなどの羽織りものが必須です。石畳の坂道やアトラクション間を歩くため、スニーカーを着用してください。"
        }
      },
      {
        "@type": "Question",
        "name": "志摩スペイン村へのアクセス方法と伊勢神宮との周遊モデルは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "近鉄特急を利用すれば、近鉄名古屋駅から鵜方駅まで約2時間、大阪難波駅から約2時間20分、京都駅から約2時間40分で直通アクセス可能です。鵜方駅からは直通三重交通バスで約13分。車の場合は伊勢二見鳥羽ライン・第二伊勢道路経由でアクセスできます。1日目に志摩スペイン村を遊び尽くして温泉宿に泊まり、2日目の朝に伊勢神宮（内宮・おはらい町・おかげ横丁）へ参拝する1泊2日の王道ルートが大変人気です。"
        }
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "ホテル志摩スペイン村",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7770/7770.jpg",
              rating: 4.53,
              reviews: 2658,
              price: "¥8,000〜",
              access: "伊勢自動車道伊勢西ICより約40分／近鉄鵜方駅より三交バスにて約13分",
              special: "南スペインの優雅な雰囲気が漂うリゾートホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7770%2F7770.html",
              story: "志摩スペイン村に隣接し、アンダルシア地方の白壁の街並みをそのまま再現した異国情緒あふれるオフィシャルホテル「ホテル志摩スペイン村」。宿泊者専用の連絡通路を通ってパークへダイレクトにアクセスでき、2DAYパスポートを特別割引で購入できるなど特典が満載です。最大の自慢は、敷地内に湧出する天然温泉「ひまわりの湯」（アルカリ性単純温泉）。露天風呂からは伊雑ノ浦の穏やかな入江と夕景を一望でき、PH8.6の美肌の湯がパーク歩きの疲れを優しく解きほぐします。中庭にはパティオやスペイン直輸入の絵タイルが輝き、本場スペインのホテルに滞在しているかのような非日常感を味わえます。",
              roomTip: "ファミリールームまたはスーペリアツイン。スペイン風の温かみあるインテリアと、伊雑ノ浦の入江を望むリゾート空間。",
              gourmetTip: "スペイン料理「ヒラソル」の秋限定ハロウィーンディナーコース。大鍋仕立ての魚介パエリャやイベリコ豚のグリル、特製サングリア。",
              highlights: [
                "志摩スペイン村直結・連絡通路でスムーズ入園＆天然温泉ひまわりの湯完備" ,
                "pH8.6美肌の湯から伊雑ノ浦の夕景一望・大鍋魚介パエリャとスペインワイン" ,
                "宿泊者限定の格安パスポート購入特典・アンダルシア風パティオが美しい館内"
              ]
            },
            {
              id: 2,
              name: "都リゾート　奥志摩　アクアフォレスト",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67941/67941.jpg",
              rating: 4.25,
              reviews: 3111,
              price: "¥10,600〜",
              access: "近鉄賢島駅よりシャトルバスで25分／伊勢神宮から車で50分／志摩スペイン村オフィシャルホテル★プレミアムパス有★車25分",
              special: "豊かな大自然と美しい英虞湾に囲まれたシーサイドリゾート　天然温泉、天文館　わんちゃん宿泊可コテージ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67941%2F67941.html",
              story: "英虞湾を望む大自然の岬に位置し、約25万平米もの広大な敷地を誇る総合リゾート「都リゾート 奥志摩 アクアフォレスト」。敷地内には天然温泉「ともやまの湯」をはじめ、25mの室内温水アミューズメントプール「アクアパレス」や本格的な天文館（大型天体望遠鏡）を完備。秋の澄み切った夜空に輝く満天の星空観賞は感動的な思い出になります。客室は本館ツインのほか、豊かな森に囲まれた独立型コテージも選択可能。夕食バイキングでは、伊勢志摩の新鮮な海の幸や実演ステーキを存分に味わえ、アクティブ派から家族連れまで大満足の滞在が叶います。",
              roomTip: "オーシャンビュー客室または森のヴィラコテージ。プライベート感あふれるコテージで秋の自然音に包まれるリトリート。",
              gourmetTip: "レストラン「イル・マーレ」の伊勢志摩ディナーブッフェ。地魚のお造りやサザエのつぼ焼き、揚げたて天ぷら。",
              highlights: [
                "英虞湾岬の広大25万平米リゾート・天文館の大型望遠鏡で満天星空観賞" ,
                "温水プールアクアパレス＆天然温泉ともやまの湯・自然コテージ宿泊も可能" ,
                "家族連れやグループに大人気・伊勢志摩の海の幸食べ放題バイキング"
              ]
            },
            {
              id: 3,
              name: "グランドメルキュール伊勢志摩リゾート＆スパ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13971/13971.jpg",
              rating: 3.93,
              reviews: 4338,
              price: "¥5,120〜",
              access: "近鉄 鵜方駅より定時シャトルバス約15分(予約不要　定時運行　公式HP参照)／伊勢西ＩＣよりお車約45分",
              special: "心と身体が満たされる、海と森に抱かれる贅沢なひととき",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13971%2F13971.html",
              story: "的矢湾を見下ろす高台に聳え、全室オーシャンビューの開放感を誇る「グランドメルキュール伊勢志摩リゾート＆スパ。」。洗練されたオールインクルーシブスタイルを導入しており、滞在中のアルコールを含むドリンクやラウンジアクセス、温泉スパを気兼ねなく心ゆくまで満喫できます。天然温泉大浴場と露天風呂からは的矢湾の穏やかな波を眺めながら湯浴みが楽しめ、サウナも完備。客室はモダンで広々としており、志摩スペイン村へも車で約5分と至近。リゾート感とコスパの高さを高次元で両立した人気宿です。",
              roomTip: "クラシックオーシャンツインまたは和洋室。的矢湾の島々と真珠養殖いかだが浮かぶ情緒豊かなパノラマビュー。",
              gourmetTip: "ビュッフェレストランの「エレガントディナー」。伊勢志摩の豊かな海の幸や地元食材をフレンチと和の技法で仕立てた華やかな料理。",
              highlights: [
                "全室オーシャンビュー＆オールインクルーシブ導入・的矢湾一望の展望温泉" ,
                "ラウンジドリンク無料・志摩スペイン村まで車約5分の抜群ロケーション" ,
                "抜群のコストパフォーマンス・モダンでゆったりとした和洋室"
              ]
            },
            {
              id: 4,
              name: "汀渚　ばさら邸",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108260/108260.jpg",
              rating: 4.62,
              reviews: 306,
              price: "¥51,700〜",
              access: "賢島駅よりお車にて５分。賢島駅まで無料送迎を行っております。電車でお越しのお客様はご利用くださいませ。",
              special: "英虞湾を見渡す高台でゆらり気まま旅。旅のわがまま叶えてくれる、特別な一日。それが「汀渚　ばさら邸」。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108260%2F108260.html",
              story: "英虞湾の入江、汀（みぎわ）に静かに佇むわずか全室離れの最高級大人の隠れ宿「汀渚 ばさら邸」。敷地面積5000坪に広がる静寂の空間には、すべての客室に天然温泉露天風呂が備えられ、英虞湾の夕暮れや朝凪を独占できます。さらに敷地内には広大な3つの貸切露天風呂（天の鏡など）が点在し、鳥のさえずりと潮騒に包まれる極上の湯浴み体験を提供。料理は「伊勢志摩の海の恵みと伊勢牛」を中心とした至高の和懐石。喧騒を離れ、洗練を極めた大人の秋旅にこれ以上ない極上の舞台です。",
              roomTip: "海里離れまたは別邸「海刻」客室。英虞湾を真正面に望む客室専用露天風呂と、専用デッキ付きの圧倒的プライベート空間。",
              gourmetTip: "ダイニング「さかなへん」の伊勢海老・鮑・伊勢牛特選懐石。料理長が腕を振るう旬の伊勢海老お造りと極上伊勢牛炭火焼き。",
              highlights: [
                "全室離れ露天風呂付き・5000坪に広がる大人の隠れ宿＆伊勢海老・伊勢牛懐石" ,
                "広大な貸切露天風呂「天の鏡」・喧騒ゼロの静寂に抱かれる究極のリトリート" ,
                "楽天トラベル高評価4.6超え・記念日やご褒美旅行にふさわしい最高峰ステイ"
              ]
            },
            {
              id: 5,
              name: "都リゾート　志摩　ベイサイドテラス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/27737/27737.jpg",
              rating: 4.55,
              reviews: 1116,
              price: "¥10,250〜",
              access: "近鉄「賢島駅」よりシャトルバスで約７分（無料）／伊勢神宮（内宮）から車で約35分／志摩スペイン村から車で約15分",
              special: "英虞湾の絶景を望む、南欧風リゾート　海辺のオーベルジュ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27737%2F27737.html",
              story: "英虞湾を見下ろす高台に広がる、白壁とオレンジ瓦が印象的な南欧リゾート「都リゾート 志摩 ベイサイドテラス」。地中海沿岸のリゾートを訪れたかのような異国情緒が漂い、美しいアーチを描く回廊や中庭の噴水、プールサイドはどこを切り取っても絵になるフォトスポットです。客室は全室テラス付きで、英虞湾の穏やかな青い海と夕景をゆったりと鑑賞。館内には本格フレンチと和食のレストランを備え、伊勢志摩サミットでも評価された質の高いホスピタリティと優雅なリゾート時間を堪能できます。",
              roomTip: "オーシャンビューツイン（バルコニー付き）またはメゾネットルーム。地中海リゾートの風が吹き抜ける優雅なバルコニー付き客室。",
              gourmetTip: "フレンチレストラン「アシュドール」の秋の伊勢志摩フレンチ。伊勢海老や松阪牛を贅沢に取り入れたシェフ渾身のフルコース。",
              highlights: [
                "英虞湾見下ろす南欧地中海風リゾート・全室テラス付きと洗練フレンチコース" ,
                "プールサイドや白壁アーチのフォトジェニック空間・伊勢志摩サミット評価のおもてなし" ,
                "テラスから眺める夕暮れグラデーション・優雅で落ち着いた大人のハロウィーン"
              ]
            }
  ];

  const faqList = (jsonLdFaq.mainEntity as any[]).map(e => ({ q: e.name, a: e.acceptedAnswer.text }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-600 selection:text-white">
        {/* Breadcrumb Bar */}
        <nav aria-label="パンくずリスト" className="bg-white border-b border-stone-200 text-xs text-stone-500 py-3 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto flex items-center space-x-2">
            <Link href="/" className="hover:text-amber-600 transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:text-amber-600 transition">特集一覧</Link>
            <span>/</span>
            <Link href="/prefectures/mie" className="hover:text-amber-600 transition">三重県</Link>
            <span>/</span>
            <span className="text-stone-800 font-medium">志摩スペイン村ハロウィーン特集</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-b from-amber-950 via-stone-900 to-stone-950 text-white py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs sm:text-sm font-semibold mb-6">
              <Sun className="w-4 h-4 text-amber-400" />
              9月・10月情熱の南欧ハロウィーン＆美肌温泉スペシャル
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              【秋の志摩スペイン村パルケエスパーニャ】<br className="hidden sm:inline" />
              情熱のハロウィーンフィエスタ＆巨大モンスターパンプキン！<br />
              白壁の街並み・本場パエリャ＆伊勢志摩天然温泉名宿5選
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              青い空と白い壁が広がる陽光の国スペインの世界へ。秋の志摩スペイン村は、オレンジ色のカボチャで彩られる陽気でエネルギッシュな「ハロウィーンフィエスタ」が開幕します。マヨール広場の巨大モンスターパンプキン、限定衣装のキャラクターパレード、そして本場大鍋パエリャや揚げたてチュロス。パーク直通のアンダルシア風オフィシャルホテルや、英虞湾の絶景を望む美肌天然温泉宿に憩う至福の秋旅をご案内します。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-stone-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-amber-400" /> 期間: 9月上旬〜10月31日
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-amber-400" /> エリア: 三重県志摩市磯部町・阿児町
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Palmtree className="w-4 h-4 text-amber-400" /> 見どころ: ハロウィーンフィエスタ・ひまわりの湯・英虞湾夕景
              </span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          
          {/* Section 1: ハロウィーンフィエスタの魅力 */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Fiesta de Halloween</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                マヨール広場を埋め尽くすカボチャ！陽気な「ハロウィーンフィエスタ」
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                志摩スペイン村のハロウィーンは、怖さよりも「楽しさ・陽気さ・写真映え」が満載のスペイン風フィエスタ（お祭り）。メイン会場のマヨール広場には、高さ約4mもの巨大な「モンスターパンプキン」が登場し、訪れるゲストを笑顔で出迎えます。カボチャの口の中に座って記念撮影ができるなど、インスタ映え抜群のフォトスポットとして大人気です。
              </p>
              <p>
                広場やサンタクルス通りなど白壁の街並みには、オレンジや黒のフラッグ、カボチャランタンが飾られ、異国情緒あふれる風景と見事に融合。ドンキホーテやダルシネアたちも、マントや帽子をまとった愛らしいハロウィーン限定コスチュームで登場し、ハイタッチや記念撮影で子どもから大人まで心を掴みます。
              </p>
              <p>
                キャラクターたちが繰り広げるパレード「エスパーニャカーニバル “ブエン ビアヘ”。」では、陽気なスパニッシュミュージックに合わせてフロートが進み、ダンサーたちの笑顔と手拍子が青空の下に響き渡ります。家族連れや友人同士で一体となって踊る時間は、心の底からの元気と笑顔をもたらしてくれます。
              </p>
            </div>
          </section>

          {/* Section 2: スペイングルメ＆フラメンコ */}
          <section className="mb-16">
            <div className="border-l-4 border-rose-600 pl-4 mb-6">
              <span className="text-xs font-bold text-rose-600 tracking-wider uppercase">Authentic Spanish Gourmet</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                大鍋で炊き上げる絶品魚介パエリャ＆本場フラメンコショー
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                スペイン村を訪れたなら絶対に外せないのが、レストラン「アルハンブラ」などで味わう本場仕込みのパエリャです。エビ、ムール貝、アサリ、イカなどの海の幸の旨味が、サフラン香るお米一粒一粒にぎゅっと凝縮され、底にできた香ばしい「おこげ」まで美味しくいただけます。
              </p>
              <p>
                また、カルメンホールで上演される本場スペイン人ダンサーによる本格フラメンコショーは圧巻の迫力。魂を揺さぶるステップと情熱的なギターの音色が、日常を忘れさせてくれます。歩き疲れたら、外はカリッ、中はモチッとした揚げたてシナモンチュロスを頬張り、秋の甘いひとときを過ごせます。
              </p>
            </div>
          </section>

          {/* Section 3: 英虞湾の絶景と伊勢志摩の美食文化 */}
          <section className="mb-16">
            <div className="border-l-4 border-teal-600 pl-4 mb-6">
              <span className="text-xs font-bold text-teal-600 tracking-wider uppercase">Ago Bay Scenic & Luxury Gastronomy</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                リアス海岸の美景「英虞湾」と伊勢海老・松阪牛が彩る秋の極上リトリート
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                志摩エリアの最大の魅力は、テーマパークの興奮と大自然の静寂が隣り合っている点です。英虞湾（あごわん）を見下ろす「横山展望台」からは、大小60以上の島々と真珠養殖いかだが浮かぶ穏やかなリアス海岸の大パノラマが一望でき、天空カフェ「ミラドールしま」で心地よい秋風を感じながらコーヒーを味わう時間は至福のひとときです。
              </p>
              <p>
                さらに秋は、伊勢志摩の味覚の王様「伊勢海老」の漁が解禁される黄金期。お造りの透明感ある甘み、炭火で香ばしく焼き上げた鬼殻焼き、そして濃厚な味噌汁。三重が誇る世界最高峰の黒毛和牛「松阪牛」のすき焼きやステーキとともに味わう会席料理は、旅の満足度を最高潮へと高めてくれます。
              </p>
            </div>
          </section>

          {/* Section 3.5: 美肌天然温泉「ひまわりの湯」と温泉リラクゼーション */}
          <section className="mb-16">
            <div className="border-l-4 border-orange-500 pl-4 mb-6">
              <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">Healing Hot Spring</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                pH8.6の美肌湯！伊雑ノ浦の夕景を望む「ひまわりの湯」の極上温浴
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                ホテル志摩スペイン村に併設された天然温泉「ひまわりの湯」は、アルカリ性単純温泉（pH8.6）の良質な自家源泉。無色透明でとろみのあるお湯は、古い角質を優しく落として肌をつるつるに整える「美肌の湯」として高い評価を得ています。
              </p>
              <p>
                開放感あふれる露天風呂からは、伊雑ノ浦（いぞうのうら）の穏やかな水面と、夕暮れ時に茜色に染まる山並みを一望。秋風が心地よく吹き抜ける中、湯船に身を委ねて目を閉じれば、パークのアトラクションやパレードで心地よく疲れた身体が芯から解きほぐされていきます。サウナや水風呂、泡風呂も完備されており、温活リフレッシュに最高の環境が整っています。
              </p>
              <p>
                湯上がりには、スペイン風の落ち着いたラウンジや中庭のパティオで夕涼みをするのが贅沢な過ごし方。夜にはアンダルシア調の白壁が温かなライトアップに照らし出され、星空を見上げながらゆったりと流れる時間に身を浸すことができます。
              </p>
            </div>
          </section>

          {/* Section 4: 厳選名宿5選 */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-8">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Verified Hotels via Rakuten API</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【楽天トラベル実データ連携】ホテル志摩スペイン村＆伊勢志摩温泉厳選名宿5選
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                ※公式リアルタイムAPIから取得した宿泊料金目安・レビュー評価・アクセス情報を掲載しています。
              </p>
            </div>

            <div className="space-y-8">
              {hotels.map((h) => (
                <div key={h.id} className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="p-5 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded bg-amber-50 text-amber-700 border border-amber-200">
                        厳選第{h.id}位
                      </span>
                      <div className="flex items-center gap-3 text-xs sm:text-sm">
                        <span className="flex items-center text-amber-500 font-bold">
                          <Star className="w-4 h-4 fill-amber-400 stroke-amber-400 mr-1" />
                          {h.rating}
                        </span>
                        <span className="text-stone-400">({h.reviews.toLocaleString()}件)</span>
                        <span className="text-amber-600 font-black text-sm sm:text-base">
                          {h.price}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                      {h.name}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{h.access}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                      {h.story}
                    </p>

                    <div className="bg-stone-50 rounded-lg p-3.5 space-y-2 mb-5 text-xs text-stone-600">
                      <div>
                        <strong className="text-stone-800 font-semibold mr-1">客室の魅力:</strong>
                        {h.roomTip}
                      </div>
                      <div>
                        <strong className="text-stone-800 font-semibold mr-1">秋の味覚＆ディナー:</strong>
                        {h.gourmetTip}
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                        宿泊ポイント・魅力
                      </h4>
                      <ul className="grid grid-cols-1 gap-1.5">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-sm transition"
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

          {/* Section 5: 1泊2日モデルコース */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Fiesta Itinerary</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【1泊2日モデルコース】スペイン村ハロウィーン・ひまわりの湯＆伊勢神宮参拝ルート
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold">1</span>
                  1日目：近鉄特急で志摩へ・ハロウィーンフィエスタ＆温泉ひまわりの湯
                </h3>
                <ol className="relative border-l border-stone-200 ml-3 space-y-4 text-xs sm:text-sm text-stone-600">
                  <li className="pl-4">
                    <strong className="text-stone-800">10:30 近鉄鵜方駅から直通バスで志摩スペイン村到着</strong><br />
                    ホテル志摩スペイン村に荷物を預け、宿泊者専用連絡通路からパークへダイレクト入場。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">11:30 マヨール広場の巨大モンスターパンプキンで記念撮影</strong><br />
                    ハロウィーン装飾で彩られた広場で撮影。レストラン「アルハンブラ」で魚介パエリャランチ。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">13:30 キャラクターパレード＆本格フラメンコショー鑑賞</strong><br />
                    陽気なパレード「ブエン ビアヘ」で手拍子！カルメンホールで情熱のフラメンコを体感。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">16:30 ホテルへ戻り天然温泉「ひまわりの湯」で夕景露天風呂</strong><br />
                    pH8.6の美肌の湯に浸かり、伊雑ノ浦の入江に沈む夕日を眺めながら極上のリラクゼーション。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">18:30 スペイン料理ディナー＆中庭パティオのライトアップ散歩</strong><br />
                    イベリコ豚のローストや地魚タパス、サングリアに舌鼓。アンダルシア風の夜風を満喫。
                  </li>
                </ol>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold">2</span>
                  2日目：英虞湾パノラマ・伊勢神宮（内宮）参拝＆おはらい町食べ歩き
                </h3>
                <ol className="relative border-l border-stone-200 ml-3 space-y-4 text-xs sm:text-sm text-stone-600">
                  <li className="pl-4">
                    <strong className="text-stone-800">08:00 ホテル朝食バイキング＆横山展望台で英虞湾絶景</strong><br />
                    リアス海岸の美しい島々を見渡す天空カフェ「ミラドールしま」で爽快な絶景を堪能。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">11:00 伊勢神宮（内宮）新秋参拝＆宇治橋渡橋</strong><br />
                    五十鈴川の清流で身を清め、神宮の神聖な杉木立の下で感謝と祈りを捧げる。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">13:00 おはらい町・おかげ横丁で伊勢うどん＆赤福餅</strong><br />
                    熱々モチモチの伊勢うどんや松阪牛コロッケ、焼きたて赤福餅を味わい帰路へ。
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section 6: 注意点 */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-500 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Travel Tips</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                志摩スペイン村を快適に楽しむためのポイント
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  ホテル2DAYパスポートの活用
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  オフィシャルホテル宿泊者は、通常より大幅にお得な専用2DAYパスポートが購入できます。チェックイン前にホテルフロントで受け取り可能です。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <Flame className="w-4 h-4 text-rose-500" />
                  フラメンコショーの事前予約
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  本場ダンサーによるカルメンホールのフラメンコショーは座席数限定です。入園後すぐにチケット（ワンドリンク付き）を確保しましょう。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <Sunrise className="w-4 h-4 text-amber-500" />
                  ひまわりの湯の営業時間
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  ひまわりの湯は日帰り客も利用するため夕方17時〜18時は混雑します。宿泊者はチェックイン直後（15時台）または夕食後の遅い時間がゆったり入れます。
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: FAQセクション */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                志摩スペイン村ハロウィーン よくある質問（FAQ）
              </h2>
            </div>

            <div className="space-y-4">
              {faqList.map((f, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                  <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                    <span className="text-amber-600 font-black">Q.</span>
                    <span>{f.q}</span>
                  </h3>
                  <div className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5 border-l-2 border-amber-100 mt-2">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: まとめ＆内部リンク */}
          <section className="border-t border-stone-200 pt-10 text-center">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-4">
              情熱のスペイン風情と英虞湾の絶景温泉が待つ伊勢志摩へ
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
              白壁の街並みに映えるモンスターパンプキン、陽気な音楽とパエリャの美味、そして美肌天然温泉ひまわりの湯。笑顔と温もりに包まれる秋の南欧リゾート旅へ出かけてみませんか。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              <Link href="/features" className="px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition">
                ← 特集一覧に戻る
              </Link>
              <Link href="/prefectures/mie" className="px-4 py-2 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-700 font-semibold transition">
                三重県の旅行ガイド・名宿一覧
              </Link>
              <Link href="/winter-mie-iga-ueno-castle-akame-48waterfalls-hyobaku-igagyu-stay" className="px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition">
                伊賀上野城＆赤目四十八滝特集
              </Link>
              <Link href="/" className="px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition">
                クラドトラベル トップページ
              </Link>
            </div>
          </section>

        </main>
      </article>
    </>
  );
}
