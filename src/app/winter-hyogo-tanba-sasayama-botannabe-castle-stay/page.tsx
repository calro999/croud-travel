import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Snowflake, Waves, Sun, Flame, Mountain, Building, Coffee, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月兵庫】冬本番！丹波篠山の本場「ぼたん鍋」発祥の味＆雪化粧の篠山城下町・丹波篠山牛を堪能する名宿5選",
  description: "11月15日の狩猟解禁とともに冬本番を迎える兵庫県・丹波篠山。丹波の深い山々で木の実を食べて育った天然猪肉は、冬の寒さとともに上質な白脂を蓄え、最も美味とされる旬を迎えます。白味噌ベースの秘伝出汁に根菜を煮込み、牡丹の花に見立てて美しく盛り付けられた本場の「ぼたん鍋」は、身体の芯から温まる冬の日本最高峰の鍋料理です。徳川家康が築城した篠山城跡の雪景色、重要伝統的建造物群保存地区に指定された河原町妻入商家群の風情、丹波焼の器、幻の銘牛「丹波篠山牛」。歴史薫る古民家宿や料理旅館で過ごす至高の冬旅名宿5選を徹底解説します。",
  keywords: '丹波篠山 ぼたん鍋, ぼたん鍋 発祥 宿, 篠山城下町 ホテル, 丹波篠山 冬 旅行, 篠山城下町ホテル NIPPONIA, 丹波篠山 近又, 豆家, 丹波篠山牛, 11月 12月 1月 兵庫 観光',
  alternates: {
    canonical: 'https://croud-travel.com/winter-hyogo-tanba-sasayama-botannabe-castle-stay'
  },
  openGraph: {
    title: "【11・12・1月兵庫】冬本番！丹波篠山の本場「ぼたん鍋」発祥の味＆雪化粧の篠山城下町・丹波篠山牛を堪能する名宿5選",
    description: "11月15日の狩猟解禁とともに冬本番を迎える兵庫県・丹波篠山。丹波の深い山々で木の実を食べて育った天然猪肉は、冬の寒さとともに上質な白脂を蓄え、最も美味とされる旬を迎えます。白味噌ベースの秘伝出汁に根菜を煮込み、牡丹の花に見立てて美しく盛り付けられた本場の「ぼたん鍋」は、身体の芯から温まる冬の日本最高峰の鍋料理です。徳川家康が築城した篠山城跡の雪景色、重要伝統的建造物群保存地区に指定された河原町妻入商家群の風情、丹波焼の器、幻の銘牛「丹波篠山牛」。歴史薫る古民家宿や料理旅館で過ごす至高の冬旅名宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-hyogo-tanba-sasayama-botannabe-castle-stay',
    type: 'article',
    images: [{ url: 'https://img.travel.rakuten.co.jp/share/HOTEL/149449/149449.jpg', width: 1200, height: 630, alt: '丹波篠山ぼたん鍋と城下町名宿' }]
  }
};

export default function HyogoTanbaSasayamaPage() {
  const hotelsData = [
            {
              id: 1,
              name: "篠山城下町ホテルＮＩＰＰＯＮＩＡ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/149449/149449.jpg",
              rating: 4.36,
              reviews: 213,
              price: "¥22,795〜",
              access: "【電車＋無料送迎】大阪より70分／東京より4時間【お車】大阪神戸市内より60分／京都市内より90分",
              special: "400年の城下町に点在する日本初の「分散型ホテル」。城下町の風情と篠山の美食を愉しむ旅を",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149449%2F149449.html",
              story: "篠山城下町に点在する築100年超の歴史的建造物をリノベーションした日本初の分散型古民家ホテル「篠山城下町ホテル ＮＩＰＰＯＮＩＡ」。重厚な梁や土壁、職人の木工細工など城下町の面影を色濃く残しながら、シモンズ製ベッドや現代の快適性を美しく融合させています。冬の冷え込みが厳しい夜、暖炉や檜風呂で温まった後は、元銀行蔵や元製茶問屋を改装したダイニングでフレンチ仕立ての冬の会席を満喫。冬限定のジビエや丹波篠山牛、契約農家の冬根菜を繊細な技法で昇華させた料理は、ここでしか味わえない特別な冬の美食体験を演出してくれます。",
              roomTip: "蔵や武家屋敷を改装した離れ客室。プライベートな庭園雪景色を眺めながら、歴史の重みとモダンな寛ぎに包まれる上質なひととき。",
              gourmetTip: "「フレンチ×丹波篠山冬の恵みディナー」。旬の天然猪肉の繊細なローストや丹波篠山牛フィレ肉、黒豆や山の芋のポタージュ。",
              highlights: [
                "築100年超の城下町建築を改装した分散型ホテル・国重伝建地区の町並みに泊まる贅沢",
                "フレンチ技法で再構築した冬ジビエディナー・丹波篠山牛と旬の冬根菜のマリアージュ",
                "シモンズ製ベッドと現代的な水回り・歴史の情緒と極上の快適性を両立"
              ]
            },
            {
              id: 2,
              name: "丹波篠山　近又",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8534/8534.jpg",
              rating: 4.42,
              reviews: 88,
              price: "¥15,600〜",
              access: "舞鶴若狭自動車道「丹南篠山口I.C」より3km/JR福知山線「篠山口」駅よりバス約15分",
              special: "リニューアルOPEN│2026年10月以降の予約受付中■天皇陛下もご賞味！拘りの名物ぼたん鍋発祥の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8534%2F8534.html",
              story: "創業慶長14年（1609年）、篠山城築城と時を同じくして400余年の歴史を紡ぐ老舗料理旅館「丹波篠山 近又（きんまた）」。かつて篠山藩主や明治の文豪、皇族も足を運んだ名門であり、「ぼたん鍋」を現代の洗練された郷土料理へと昇華させた発祥の宿として全国に名を馳せます。純和風の客室からは雪吊りの施された日本庭園が望め、静謐な冬の風情が漂います。看板料理のぼたん鍋は、厳選された雌の天然猪肉のみを使用。自家製合わせ味噌と出汁が極上猪肉の甘みと旨みを引き出し、山椒の爽やかな香りが食欲を刺激する唯一無二の味わいです。",
              roomTip: "庭園を望む数寄屋造りの本館客室。雪化粧の日本庭園を眺めながら、歴史ある木造建築の温もりと静けさを肌で感じられます。",
              gourmetTip: "「元祖・本場天然ぼたん鍋会席」。牡丹の花に見立てた極上天然猪肉と篠山特産の山の芋、丹波黒豆煮、丹波篠山牛の逸品料理。",
              highlights: [
                "創業慶長14年・400年の歴史誇る老舗料理旅館・ぼたん鍋を全国に広めた発祥の味",
                "秘伝の合わせ味噌出汁で煮込む極上天然猪肉・牡丹の花びらのように美しい盛り付け",
                "雪吊りが美しい日本庭園を望む数寄屋客室・篠山城跡や大書院まで徒歩すぐ"
              ]
            },
            {
              id: 3,
              name: "豆家",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/196237/196237.jpg",
              rating: 4.50,
              reviews: 18,
              price: "¥40,900〜",
              access: "篠山口駅よりお車で約１３分、舞鶴若狭自動車道丹南篠山口ＩＣより約１１分",
              special: "十件の文化財と灯る石庭に包まれ過ごす一棟宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196237%2F196237.html",
              story: "篠山城下町の武家屋敷街に佇む、国登録有形文化財を含む壮麗な建築美を誇る一棟貸しの上質宿「豆家（まめや）」。10件もの文化財指定を受けた歴史遺構と、手入れの行き届いた石庭が雪に覆われる冬、静寂に包まれたプライベートな空間を贅沢に独占できます。広々とした土間や格調高い和室には最新の床暖房や快適な寝具が完備され、冬の底冷えを感じさせません。夕食は出張料理人による特製ぼたん鍋やすき焼きの手配が可能。家族や気心知れた仲間とともに、城下町の歴史に浸る特別な冬の夜を静かに紡ぎ出せます。",
              roomTip: "石庭を正面に望む主座敷。雪が静かに降り積もる庭園を雪見障子越しに眺め、贅沢なプライベートステイを堪能できます。",
              gourmetTip: "「地元名店仕込みの特製ぼたん鍋セット」。丹波篠山産の厳選天然猪肉と地元冬野菜を土鍋で囲む、プライベート空間での温かな宴。",
              highlights: [
                "国登録有形文化財を含む十件の文化財に囲まれた一棟宿・静寂の石庭を独占",
                "出張料理人や老舗連携による特製ぼたん鍋・完全プライベート空間で味わう贅沢",
                "床暖房完備で冬も快適・歴史的意匠とモダンアメニティが融合した邸宅空間"
              ]
            },
            {
              id: 4,
              name: "丹波の宿　恵泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/41839/41839.jpg",
              rating: 4.40,
              reviews: 155,
              price: "¥7,000〜",
              access: "ＪＲ福知山線　黒井駅より徒歩１０分(事前連絡いただければ車送迎します）／舞鶴若狭自動車道　春日ＩＣより車で５分",
              special: "静けさという贅沢…都会ではできない当館の立地を活かした贅沢です。ほっとひと息、心落ち着く宿です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41839%2F41839.html",
              story: "丹波篠山の豊かな田園風景と山並みに抱かれた心温まる宿「丹波の宿 恵泉（けいせん）」。都会の喧騒から離れ、里山の清らかな空気と静けさに包まれる癒やしの空間です。冬には丹波の澄み切った星空が広がり、夜の静寂が旅情を深めます。丹波の地元農家から直接仕入れる新鮮な冬野菜や自家製米、そして丹波篠山名物のぼたん鍋や丹波牛のすき焼きなど、素朴ながらも素材本来の滋味を引き出した手作り会席が自慢。家族経営ならではの温かなもてなしと細やかな心配りが、冬の寒さで冷えた身体と心を優しく解きほぐしてくれます。",
              roomTip: "里山ビューの和室。朝霧や雪化粧に包まれる丹波の山並みを眺めながら、畳の香りに包まれてゆったりとした休息を過ごせます。",
              gourmetTip: "「手作り丹波の味覚会席」。地元産猪肉を使った熱々のぼたん鍋や、丹波牛の陶板焼き、ふっくら炊き上げた丹波産コシヒカリ。",
              highlights: [
                "里山の温もりと手作り会席・都会の喧騒を忘れる静寂のロケーション",
                "手作り合わせ味噌の熱々ぼたん鍋と丹波牛陶板焼き・自家製米コシヒカリのご飯",
                "家族連れやグループにも優しい温かな接客・冬の星空を眺める静寂ステイ"
              ]
            },
            {
              id: 5,
              name: "丹波ささやまホロンピアホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/80532/80532.jpg",
              rating: 4.08,
              reviews: 771,
              price: "¥5,060〜",
              access: "ＪＲ福知山線　篠山口駅より徒歩にて５分。舞鶴若狭道　丹南篠山口ＩＣより車で1分。",
              special: "ＪＲ篠山口駅より徒歩５分。丹南篠山口ＩＣより車で1分。篠山市唯一のビジネスホテルです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F80532%2F80532.html",
              story: "JR福知山線・篠山口駅から徒歩約5分、舞鶴若狭自動車道・丹南篠山口ICからも約1分という抜群のアクセスを誇る「丹波ささやまホロンピアホテル」。丹波篠山の冬観光や城下町散策の拠点として極めて便利なホテルです。機能的で清潔感あふれる客室には快適なベッドが配され、ビジネスから観光まで幅広い旅行者に親しまれています。館内には丹波篠山の特産品コーナーが設けられ、名物の黒豆茶や丹波栗スイーツが人気。城下町の老舗ぼたん鍋料理店へ足を伸ばす冬のアクティブな旅にも最適なステイ先です。",
              roomTip: "デラックスツインルーム。広めのデスクとゆったりとしたソファスペースを備え、冬の観光帰りの荷物整理や休息も快適。",
              gourmetTip: "「丹波特産黒豆モーニング＆周辺名店連携」。丹波黒豆をふんだんに使った朝食と、近隣の老舗ぼたん鍋店での極上夕食プラン。",
              highlights: [
                "篠山口駅徒歩5分・丹南篠山口IC車1分の好アクセス・城下町散策の拠点ホテル",
                "館内特産品コーナー完備・周辺の老舗ぼたん鍋料理店巡りにも最適な立地",
                "リーズナブルな価格設定・無料大駐車場完備で冬のマイカー・レンタカー旅に便利"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "丹波篠山の「ぼたん鍋」の旬（美味しい時期）はいつですか？豚肉の鍋との違いは？",
    "a": "ぼたん鍋の最大の旬は、狩猟が解禁される11月15日から2月頃までの厳冬期です。この時期の天然猪は、秋にドングリや栗、松茸などを豊富に食べて冬眠に備えるため、真っ白な上質の脂（白身）をたっぷりと蓄えます。猪肉の脂は豚肉や牛肉と異なり、融点が低くコラーゲンが豊富で、煮込むほどに身が柔らかくなり甘みとコクが増します。アクが少なく独特の獣臭さがないのが本場丹波篠山の天然猪肉の大きな特徴です。"
  },
  {
    "q": "ぼたん鍋の食べ方や味付けの特徴、地元ならではの薬味は？",
    "a": "丹波篠山のぼたん鍋は、地元醸造の白味噌や赤味噌を独自にブレンドした秘伝の味噌出汁で煮込むのが伝統です。具材には煮崩れしにくいゴボウ、山の芋、白菜、焼き豆腐、エノキ、セリなどが使われます。最初に肉を入れて出汁に脂の旨みを移し、じっくり火を通します。取り鉢に取った後、粉山椒（朝倉山椒など）を振って食べるのが篠山流で、山椒の爽やかな辛みが味噌の濃厚なコクと脂の甘みを引き締めて絶品です。"
  },
  {
    "q": "冬の丹波篠山（11月〜1月）の気温や積雪状況、道路の運転注意点は？",
    "a": "丹波篠山は四方を山に囲まれた盆地気候のため、冬の朝晩の冷え込みは非常に厳しく、12月〜1月は氷点下まで下がり「丹波霧」と呼ばれる濃霧が発生します。積雪は年に数回程度ですが、日陰の道路や橋の上、高速道路の出入口周辺は夜間から早朝にかけて凍結（ブラックアイスバーン）することがあります。車で訪れる際はスタッドレスタイヤの装着が推奨されます。"
  },
  {
    "q": "大阪・神戸・京都から丹波篠山へのアクセス方法は？日帰りと宿泊どちらがおすすめ？",
    "a": "大阪駅からはJR福知山線（丹波路快速）で直通約70分、神戸からは車で約60分、京都からも京都縦貫道経由で約90分と関西主要都市からのアクセスは極めて良好です。ただし、冬の丹波篠山は夕暮れ時の城下町の提灯の灯りや雪景色、そして夜にじっくりとお酒とともにぼたん鍋を味わい、朝霧立ち込める篠山城跡を散策する時間こそが最大の醍醐味であるため、1泊2日の宿泊滞在を強くおすすめします。"
  },
  {
    "q": "篠山城下町周辺で冬に訪れるべきおすすめ観光スポットは？",
    "a": "徳川家康が築城した篠山城跡の「大書院（木造復元された壮麗な御殿）」、国の重要伝統的建造物群保存地区に指定された「河原町妻入商家群（約600m続く江戸の町家通り）」、大正ロマン漂う洋館「大正ロマン館」、日本六古窯の一つ「丹波焼（立杭焼）」の窯元巡り、そして新春初詣で賑わう「篠山神社」や「春日神社」が外せない見どころです。"
  }
];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    name: "【11・12・1月兵庫】冬本番！丹波篠山の本場「ぼたん鍋」発祥の味＆雪化粧の篠山城下町・丹波篠山牛を堪能する名宿5選",
    description: "11月15日の狩猟解禁とともに冬本番を迎える兵庫県・丹波篠山。丹波の深い山々で木の実を食べて育った天然猪肉は、冬の寒さとともに上質な白脂を蓄え、最も美味とされる旬を迎えます。白味噌ベースの秘伝出汁に根菜を煮込み、牡丹の花に見立てて美しく盛り付けられた本場の「ぼたん鍋」は、身体の芯から温まる冬の日本最高峰の鍋料理です。徳川家康が築城した篠山城跡の雪景色、重要伝統的建造物群保存地区に指定された河原町妻入商家群の風情、丹波焼の器、幻の銘牛「丹波篠山牛」。歴史薫る古民家宿や料理旅館で過ごす至高の冬旅名宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-hyogo-tanba-sasayama-botannabe-castle-stay',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://croud-travel.com/' },
        { '@type': 'ListItem', position: 2, name: '冬の特集一覧', item: 'https://croud-travel.com/features/' },
        { '@type': 'ListItem', position: 3, name: '丹波篠山・本場ぼたん鍋＆城下町ステイ', item: 'https://croud-travel.com/winter-hyogo-tanba-sasayama-botannabe-castle-stay' }
      ]
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: hotelsData.map((h, idx) => ({
        '@type': 'Hotel',
        position: idx + 1,
        name: h.name,
        image: h.img,
        priceRange: h.price,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: h.rating,
          reviewCount: h.reviews
        },
        address: {
          '@type': 'PostalAddress',
          addressRegion: '兵庫県',
          addressLocality: '丹波篠山市'
        }
      }))
    }
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqListItems.map((item: { q: string; a: string }) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  };

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-rose-100 selection:text-rose-900 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-white overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-semibold tracking-wide">
            <Snowflake className="w-4 h-4 text-rose-300" />
            11月・12月・1月 冬の日本味覚＆城下町雪景色特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-snug text-stone-100 font-serif">
            白銀の篠山城下町と秘伝味噌仕立ての極上猪肉<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-300 to-amber-200">
              冬本番！丹波篠山「本場ぼたん鍋」発祥の味＆丹波篠山牛の名宿
            </span>
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-light">
            11月中旬の狩猟解禁とともに、日本の鍋料理の頂点を極める季節が訪れます。丹波の山野で木の実を食んで育った天然猪の芳醇な旨みと、牡丹の花咲くごとく盛り付けられた本場「ぼたん鍋」。白雪をまとう篠山城跡の大書院、重伝建の妻入商家群、そして歴史ある古民家や老舗料理旅館で味わう至高の冬宵をご案内します。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Calendar className="w-4 h-4 text-rose-400" /> 旬の時期：11月中旬〜1月（厳冬期）
            </span>
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Utensils className="w-4 h-4 text-rose-400" /> 天然ぼたん鍋・丹波篠山牛
            </span>
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Flame className="w-4 h-4 text-rose-400" /> 篠山城跡・重伝建古民家ステイ
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Feature Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              なぜ丹波篠山の冬は特別なのか？天然猪肉が織りなす「滋味の極み」
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              11月15日の猟解禁から始まる、日本の冬を代表する伝統ジビエ文化の深層
            </p>
          </div>

          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              四方を丹波高地の山々に囲まれた兵庫県・丹波篠山盆地。昼夜の寒暖差が激しいこの地は、秋には名産の丹波黒豆や丹波栗、松茸が実り、冬には名物「丹波霧」と呼ばれる深い朝霧が街を包み込みます。そして11月15日、全国的に狩猟が解禁されると、丹波篠山は一年で最も活気づく美食の季節を迎えます。古くから「日本三大猟場」の一つとして知られる丹波の山々で育った野生の猪は、良質なドングリや木の実を豊富に食べて冬眠に備えるため、真っ白で厚みのある極上の脂を蓄えています。
            </p>
            <p>
              皿の上に薄紅色の猪肉を一枚一枚重ね、大輪の牡丹の花のように美しく咲かせた「ぼたん鍋」。明治時代、篠山に駐留していた陸軍歩兵第70連隊の兵士たちが、捕獲した猪肉を味噌汁に入れて食したのが始まりとされ、それを城下町の料理旅館「近又」などの料理人たちが洗練された鍋料理へと仕立て上げました。白味噌と赤味噌を絶妙に調合した秘伝出汁で、ゴボウや山の芋、セリとともに煮込むと、猪肉の脂が溶け出してスープに驚くべきコクと甘みを与えます。煮るほどに柔らかくなり、臭みが全くないその味わいは、一度口にすれば従来のジビエの概念を覆す感動をもたらします。
            </p>
            <p>
              食事とともに旅人を魅了するのが、慶長14年（1609年）に徳川家康の命による天下普請で築かれた篠山城の城下町です。白雪が舞い散る中、木造復元された大書院の堂々たる姿や、国の重要伝統的建造物群保存地区に指定された「河原町妻入商家群」の千本格子が連なる町並みは、まるで江戸時代の雪景色にタイムスリップしたかのような静けさを湛えています。夜には歴史ある町家を改装した宿で暖炉や檜風呂に浸かり、名産の丹波篠山牛や地酒とともに熱々のぼたん鍋を囲む。都会からわずか1時間余りで辿り着ける、格別の冬の逃避行がここにあります。
            </p>
          </div>

          {/* Highlights 3-column Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-rose-50/50 border border-rose-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-stone-900 text-base">本場発祥の天然ぼたん鍋</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                木の実を食べて育った極上天然猪肉の甘い脂。秘伝合わせ味噌出汁と粉山椒が醸し出す唯一無二の冬の滋味。
              </p>
            </div>

            <div className="bg-rose-50/50 border border-rose-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-stone-900 text-base">雪化粧の篠山城跡と重伝建町並み</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                徳川家康天下普請の篠山城大書院と、妻入商家が連なる河原町通りの白銀風景。江戸の面影が色濃く残る静寂の散策。
              </p>
            </div>

            <div className="bg-rose-50/50 border border-rose-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-stone-900 text-base">歴史的町家・文化財古民家ステイ</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                築100年超の商家や武家屋敷を改装した分散型ホテルや一棟貸し宿。暖炉や床暖房、名湯で温まる贅沢な冬の一夜。
              </p>
            </div>
          </div>
        </section>

        {/* Local Gastronomy & Culture Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Gastronomy & Culture</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              丹波篠山の冬を彩る「食と工芸」の奥深い伝統美
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-rose-700" />
                日本三大猟場が育む天然猪肉と「ぼたん鍋」発祥の歴史
              </h3>
              <p>
                丹波篠山の山野は、古くから奥羽山脈や天城山と並ぶ「日本三大猟場」として知られてきました。この地で獲れる猪は、秋にドングリやシイの実、栗、松茸などをたっぷり食べて冬眠に備えるため、真っ白で上質な脂を蓄えます。明治時代に陸軍歩兵第70連隊が丹波篠山に駐屯した際、猪肉を使った味噌汁を歌った「デカンショ節」の一節とともに全国へ広まりました。城下町の料理旅館「近又」の主人が薄切り肉を牡丹の花に見立てて盛り付けたことで「ぼたん鍋」の名が定着。根菜とともに煮込むほどに脂の甘みが味噌出汁へ溶け出し、山椒の風味が引き締める究極の鍋料理となりました。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-rose-700" />
                日本六古窯「丹波焼」800年の登り窯と幻の極上黒毛和牛「丹波篠山牛」
              </h3>
              <p>
                丹波篠山市今田町周辺に広がる「丹波焼（立杭焼）」は、平安時代末期から800年以上の歴史を誇る日本六古窯の一つです。山の斜面を利用した長大な「登り窯」で焼成される器は、灰被り（自然釉）による素朴で温かみのある風合いが特徴で、冬の熱々の鍋料理や地酒を味わう器として格別の温もりを与えてくれます。また、肥沃な大地と清流で丹精込めて肥育される「丹波篠山牛」は、神戸牛の素牛（但馬牛血統）としても名高く、融点の低い極上の霜降りと力強い赤身の旨みが冬の鉄板焼きやすき焼きで極限まで開花します。
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Timeline Model Course Section */}
        <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-stone-800 pb-4">
            <span className="text-rose-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">
              【1泊2日】雪化粧の城下町散策と本場ぼたん鍋・丹波焼を巡る黄金モデルコース
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm mt-1">
              大阪・神戸から快速で直通約70分。混雑を離れて歴史と美食に浸る冬の旅路。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-rose-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-rose-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-rose-400 tracking-wider uppercase">DAY 1 午前〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  10:30 JR篠山口駅到着 ➔ 篠山城跡「大書院」雪景色見学＆名物黒豆ランチ
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  JR大阪駅から丹波路快速に乗車し、約70分で篠山口駅へ。バスで城下町中心部へ向かい、まずは徳川家康天下普請の「篠山城跡」へ。木造復元された壮麗な「大書院」の広間から、白雪をまとった石垣と冬の丹波の山並みを一望します。昼食は城下の名店で熱々の黒豆うどんや、焼き立ての丹波栗を頬張ります。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-rose-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-rose-400 tracking-wider uppercase">DAY 1 午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  13:30 重伝建「河原町妻入商家群」散策 ➔ 古民家ホテルへチェックイン
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  国の重要伝統的建造物群保存地区に指定された「河原町妻入商家群」へ。千本格子や袖壁が連なる江戸期の町並みをのんびり歩き、古民家カフェで自家焙煎珈琲と丹波黒豆スイーツを味わいます。夕方に城下町ホテルNIPPONIAや老舗旅館近又へチェックイン。暖炉や檜風呂で冷えた身体を温めます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-rose-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-rose-400 tracking-wider uppercase">DAY 1 夕刻〜夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  18:30 本場「天然ぼたん鍋」と丹波篠山牛・地酒に酔いしれる極上の宴
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  大輪の牡丹の花のように美しく盛り付けられた天然猪肉。秘伝の合わせ味噌出汁がぐつぐつと煮え立つ土鍋で、ゴボウや山の芋とともにじっくり煮込みます。山椒の香りをまとわせた極上猪肉の甘い脂はまさに絶品。地酒「鳳鳴」や「小鼓」とともに、冬の夜の贅沢を心ゆくまで堪能します。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-rose-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-rose-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  08:30 幻想的な「丹波霧」の城下町散歩 ➔ 日本六古窯「立杭丹波焼」の郷へ
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  早朝、名物の深い朝霧が立ち込める幻想的な城下町を散策。炊きたての丹波産コシヒカリと黒豆納豆の朝食を楽しんだ後、車で立杭へ移動し、800年の歴史を持つ日本最古の登り窯を見学。窯元巡りでお気に入りの器を選び、「大正ロマン館」で黒豆パンや山の芋を買い求めて帰路へつきます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotels Section */}
        <section className="space-y-8">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              丹波篠山の冬を味わい尽くす厳選名宿5選
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              本場ぼたん鍋と丹波篠山牛、城下町の情緒を心ゆくまで堪能できる宿を厳選
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Hotel Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-stone-100 pb-5">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center text-xs font-bold">
                          {hotel.id}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800">
                          厳選名宿
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
                        {hotel.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-500 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
                        {hotel.access}
                      </p>
                    </div>

                    <div className="text-right sm:shrink-0 bg-rose-50/50 p-3 sm:p-4 rounded-2xl border border-rose-100">
                      <div className="flex items-center sm:justify-end gap-1 text-rose-600 font-bold text-sm sm:text-base">
                        <Star className="w-4 h-4 fill-current text-rose-500" />
                        <span>{hotel.rating}</span>
                        <span className="text-stone-400 text-xs font-normal">（{hotel.reviews}件）</span>
                      </div>
                      <div className="text-xs text-stone-500 mt-1">宿泊目安（1名/税込）</div>
                      <div className="text-lg sm:text-xl font-black text-rose-700">{hotel.price}</div>
                    </div>
                  </div>

                  {/* Hotel Story Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={hotel.img} 
                        alt={hotel.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                        {hotel.story}
                      </p>

                      <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200/60 space-y-2 text-xs sm:text-sm">
                        <div className="flex items-start gap-2">
                          <Building className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                          <div><strong className="text-stone-900">客室の魅力：</strong><span className="text-stone-600">{hotel.roomTip}</span></div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Utensils className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                          <div><strong className="text-stone-900">冬の極上美食：</strong><span className="text-stone-600">{hotel.gourmetTip}</span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="bg-stone-50/70 rounded-2xl p-4 sm:p-5 border border-stone-200/60">
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">おすすめのポイント</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-stone-700">
                      {hotel.highlights.map((item: string, hIdx: number) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="pt-2 text-center sm:text-right">
                    <a 
                      href={hotel.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-rose-600/20 hover:shadow-lg transition-all w-full sm:w-auto"
                    >
                      <span>楽天トラベルでプランと空室を見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Winter Travel Tips */}
        <section className="bg-rose-50/60 rounded-3xl p-6 sm:p-10 border border-rose-200/80 space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-rose-800 font-bold text-xs uppercase tracking-wider block">Winter Travel Advice</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              冬の丹波篠山旅行で知っておきたい気候・服装・アクセス注意点
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-stone-700">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-rose-700" />
                盆地特有の底冷えと防寒対策
              </div>
              <p className="leading-relaxed">
                丹波篠山は典型的な盆地気候のため、12月〜1月の朝晩は氷点下に達します。厚手のダウンコート、手袋、マフラー、滑りにくい靴底のブーツを準備し、足元からの底冷え対策を万全にしてください。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-rose-700" />
                濃霧「丹波霧」と道路の凍結注意
              </div>
              <p className="leading-relaxed">
                晩秋から冬の早朝は深い霧で視界が狭まることがあります。また、日陰や橋の上ではブラックアイスバーンが発生しやすいため、車で移動する際はスタッドレスタイヤの装着が安心です。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Utensils className="w-4 h-4 text-rose-700" />
                ぼたん鍋の事前予約のススメ
              </div>
              <p className="leading-relaxed">
                天然猪肉の仕入れや下準備に時間を要するため、名門料理店や宿のぼたん鍋プランは完全予約制が基本です。特に12月〜1月の週末は混み合うため、早めの予約確保が肝要です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-rose-700 font-bold text-xs uppercase tracking-wider block">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              丹波篠山の冬旅行・ぼたん鍋に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-rose-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-rose-700 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    Q
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-3 pl-9">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links Section */}
        <section className="border-t border-stone-200 pt-10 space-y-6">
          <div className="space-y-1">
            <span className="text-rose-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              あわせて読みたい全国の冬景色・名湯・極上鍋特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-hyogo-arima-onsen-kinsen-kobe-beef-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-rose-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-rose-700 font-bold text-xs block mb-1">兵庫・有馬温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-rose-800 transition-colors line-clamp-2">
                日本三古湯の金泉・銀泉と極上神戸牛会席を堪能する名宿
              </span>
            </Link>

            <Link 
              href="/winter-hyogo-kinosaki-onsen-matsuba-crab-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-rose-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-rose-700 font-bold text-xs block mb-1">兵庫・城崎温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-rose-800 transition-colors line-clamp-2">
                外湯めぐりと冬の日本海が誇る本場松葉ガニ会席の贅沢ステイ
              </span>
            </Link>

            <Link 
              href="/winter-kyoto-yunohana-onsen-unkai-botan-nabe-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-rose-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-rose-700 font-bold text-xs block mb-1">京都・湯の花温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-rose-800 transition-colors line-clamp-2">
                亀岡霧の雲海露天風呂と冬の名物ぼたん鍋を味わう隠れ家名宿
              </span>
            </Link>

            <Link 
              href="/winter-nara-dorogawa-onsen-snow-botannabe-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-rose-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-rose-700 font-bold text-xs block mb-1">奈良・洞川温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-rose-800 transition-colors line-clamp-2">
                白銀の大峯山麓と名物名水ぼたん鍋・縁側ノスタルジー名宿
              </span>
            </Link>

            <Link 
              href="/winter-shiga-nagahama-taiko-onsen-biwako-kamonabe-omigyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-rose-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-rose-700 font-bold text-xs block mb-1">滋賀・長浜太閤温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-rose-800 transition-colors line-clamp-2">
                琵琶湖雪景色と天然真鴨の鴨鍋・極上近江牛を味わう名宿
              </span>
            </Link>

            <Link 
              href="/winter-hyogo-awajishima-sumoto-3year-torafugu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-rose-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-rose-700 font-bold text-xs block mb-1">兵庫・淡路島洲本</span>
              <span className="text-stone-900 font-bold group-hover:text-rose-800 transition-colors line-clamp-2">
                冬の鳴門海峡育ち淡路島3年とらふぐ尽くしとオーシャン名宿
              </span>
            </Link>
          </div>
        </section>
      </main>
    </article>
  );
}
