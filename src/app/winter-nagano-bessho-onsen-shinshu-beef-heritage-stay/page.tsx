import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Mountain, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Church
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月信州 別所温泉】極上信州プレミアム牛！名宿5選',
  description: '11月から12月にかけて、信州最古の温泉地として「信州の鎌倉」と称される長野県上田市の「別所温泉」は、山並みに初雪が冠し。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '別所温泉 宿泊, 信州 温泉 11月 12月, 七草の湯, かしわや本店, 上松や, 玉屋旅館, 中松屋, 北向観音 参拝, 信州プレミアム牛, 源泉掛け流し 硫黄泉, 信州の鎌倉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-nagano-bessho-onsen-shinshu-beef-heritage-stay/"
  },
  openGraph: {
    title: '【11・12月信州 別所温泉】極上信州プレミアム牛！名宿5選',
    description: '11月から12月にかけて、信州最古の温泉地として「信州の鎌倉」と称される長野県上田市の「別所温泉」は、山並みに初雪が冠し。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-nagano-bessho-onsen-shinshu-beef-heritage-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の信州別所温泉と北向観音・名湯掛け流し露天風呂'
      }
    ]
  }
};

const faqList = [
  {
    "q": "別所温泉の11月・12月の気候や気温、雪の心配やスタッドレスタイヤは必要ですか？",
    "a": "長野県上田市に位置する別所温泉は、内陸性気候のため降水量が少なく冬でも晴天率が高い地域です。11月の最高気温は12〜15℃、最低気温は2〜5℃前後で、朝晩は手袋やマフラーが必要な冷え込みになります。12月に入ると最高気温は6〜9℃、最低気温は氷点下（マイナス2〜4℃）まで下がります。豪雪地帯ではありませんが、11月下旬から12月にかけて初雪が降ることがあり、朝夕の冷え込みによる路面凍結（ブラックアイスバーン）のリスクがあります。車で訪れる場合は、12月以降はスタッドレスタイヤ（冬用タイヤ）の装着が必須です。公共交通機関利用の場合は、上田駅から上田電鉄別所線で約30分と安全快適にアクセスできます。"
  },
  {
    "q": "別所温泉の泉質や効能、美肌効果の特徴は？",
    "a": "別所温泉は「信州最古の温泉」と伝えられ、その主たる泉質は「弱アルカリ性単純硫黄温泉」です。弱アルカリ性の性質が肌の古い角質を優しく軟化させて洗い流し、硫黄成分が肌のキメを整えてメラニンを分解する働きを促すため、古くから「美肌の湯」「美人の湯」として女性を中心に親しまれてきました。また、ほのかな硫黄の香りが自律神経をリラックスさせ、末梢血管を広げて血行を促進するため、慢性的な冷え性や神経痛、疲労回復、筋肉痛に優れた効果を発揮します。"
  },
  {
    "q": "北向観音への参拝と「両参り（りょうまいり）」の風習とは何ですか？",
    "a": "別所温泉の中心に鎮座する「北向観音（きたむきかんのん）」は、天長2年（825年）に慈覚大師円仁によって開創された厄除け霊場です。通常、寺院の本堂は南を向いて建てられますが、北向観音は北を向いて建立されています。これは北にある長野市の「善光寺」と向かい合っているためです。古くから「善光寺は極楽往生（来世の利益）を願い、北向観音は現世利益（現在の幸福）を願う」とされ、両方をお参りして初めて願いが成就する「両参り」の信仰が受け継がれています。初冬の凛とした空気の中で行う北向観音参詣は、一年の厄を払い新年を迎えるのに最もふさわしい体験です。"
  },
  {
    "q": "11月・12月に別所温泉で味わえる信州グルメの魅力は？",
    "a": "信州の初冬は、実りの秋から冬へと移り変わる極上の食材が集まる季節です。長野県独自の厳しい基準をクリアした最高峰黒毛和牛「信州プレミアム牛肉」は、オレイン酸を豊富に含み、とろけるような口どけと芳醇な香りが特徴です。すき焼きや石焼き、陶板焼きでその真価を発揮します。また、千曲川の清らかな雪解け水で育つ「信州サーモン」は、脂が上品で臭みがなく、お造りや昆布締めで絶品。さらに11月から12月は、蜜がたっぷり詰まった信州特産の「サンふじ林檎」の収穫最盛期であり、香り高い信州手打ち蕎麦とともに楽しめます。"
  },
  {
    "q": "初冬の別所温泉周辺で立ち寄るべき歴史スポットや観光名所は？",
    "a": "「信州の鎌倉」と呼ばれる別所温泉には、徒歩圏内に貴重な文化財が凝縮しています。まずは日本で唯一の木造八角塔であり国宝に指定されている「安楽寺 八角三重塔」。初冬の静かな杉木立の中に佇むその幾何学的な美しさは圧巻です。また、比叡山延暦寺の別院として栄えた「常楽寺」の茅葺き屋根の本堂や重要文化財の石造多宝塔も見逃せません。温泉街には「大師の湯」「石湯」「大湯」という3つの共同浴場が点在し、入浴料200円前後で外湯巡りを楽しめます。車で約25分の場所には、大河ドラマでも有名な「上田城跡公園」があり、歴史散策を満喫できます。"
  }
];

export default function NaganoBesshoWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-nagano-bessho-onsen-shinshu-beef-heritage-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-nagano-bessho-onsen-shinshu-beef-heritage-stay"
        },
        "headline": "【11・12月長野・信州 別所温泉の古湯情緒と北向観音初冬参拝】極上信州プレミアム牛＆名湯掛け流し硫黄泉で寛ぐ老舗旅館5選",
        "description": "11月から12月にかけて、信州最古の温泉地として「信州の鎌倉」と称される長野県上田市の「別所温泉」は、山並みに初雪が冠し、石畳の小路に白い湯けむりが立ち込める風情豊かな初冬を迎えます。善光寺と向かい合う厄除けの名刹「北向観音堂」への初冬参拝や、日本唯一の国宝八角三重塔を抱く安楽寺の静寂。ほのかに硫黄が香る源泉掛け流しの名湯で芯から温まり、霜降りがとろける極上「信州プレミアム牛」や千曲川の清流が育む信州サーモン、旬のサンふじ林檎を堪能する名門旅館5選を詳しく解説します。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T11:00:00+09:00",
        "dateModified": "2026-09-28T11:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "Croud Travel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "author": {
          "@type": "Organization",
          "name": "Croud Travel 信州古湯・歴史街道取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-nagano-bessho-onsen-shinshu-beef-heritage-stay#breadcrumb",
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
            "name": "長野・信州 別所温泉 信州牛会席と北向観音参詣の宿",
            "item": "https://croud-travel.pages.dev/winter-nagano-bessho-onsen-shinshu-beef-heritage-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-nagano-bessho-onsen-shinshu-beef-heritage-stay#faq",
        "mainEntity": faqList.map(f => ({
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

  const hotels = [
            {
              id: 1,
              name: "別所温泉　七草の湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/109186/109186.jpg",
              rating: 4.74,
              reviews: 316,
              price: "¥16,500〜",
              access: "上信越道上田菅平ICから約30分／北陸新幹線上田駅からタクシーで約20分／しなの鉄道別所温泉駅から徒歩10分",
              special: "全16室 素朴なおもてなしを大切に 個室で愉しむ創作会席　日常を離れ心と体を癒す小さな温泉宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109186%2F109186.html",
              story: "別所温泉街の高台に位置し、全館に畳が敷き詰められた優美な和の設えと、最上階の展望風呂からの大パノラマで名高い「別所温泉 七草の湯」。館内は素足で歩ける心地よさに満ち、初冬の冷気の中でも足元から温もりを感じられます。最上階に設けられた展望大浴場や露天風呂からは、初雪を戴く浅間山連峰や塩田平の広大な風景を一望。別所特有のほのかな硫黄香を漂わせる弱アルカリ性単純硫黄泉が注がれ、湯上がりは驚くほど肌が滑らかになります。夕食は信州の豊かな大地が育んだ恵みを繊細に仕立てた創作和会席。最高ランクの「信州プレミアム牛肉」の石焼きやしゃぶしゃぶ、信州サーモンのお造り、地元の契約農家から届く冬野菜を、信州銘酒とともに味わえます。",
              roomTip: "最上階または高層階の浅間連峰を望む和モダンツイン。朝には澄み切った青空に輝く雪山、夜には塩田平の素朴な夜景を部屋から一望できます。",
              gourmetTip: "「信州美味尽くし・プレミアム牛石焼き会席」。厳しい基準をクリアした信州プレミアム牛肉の芳醇な旨味、脂が乗った信州サーモンの薄造り、香り高い手打ち蕎麦。",
              highlights: [
                "全館心地よい畳敷き空間＆最上階展望風呂から見晴らす初冬の浅間山連峰パノラマ",
                "信州プレミアム牛石焼き＆脂が乗った信州サーモンと手打ち蕎麦の創作会席",
                "弱アルカリ性単純硫黄泉による抜群の美肌効果＆別所温泉駅からの無料送迎でアクセス快適"
              ]
            },
            {
              id: 2,
              name: "別所温泉　観音様となりの宿　かしわや本店",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67488/67488.jpg",
              rating: 4.71,
              reviews: 228,
              price: "¥27,500〜",
              access: "上田交通　別所温泉駅より無料シャトルバスが運行",
              special: "～創業百余年。美肌温泉と館内全て畳敷きの情緒漂う歴史感じるやすらぎの宿～",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67488%2F67488.html",
              story: "厄除け観音として名高い「北向観音堂」のすぐ隣に佇み、創業100余年の歴史を誇る別所温泉屈指の格式高い名旅館「別所温泉 観音様となりの宿 かしわや本店」。本館は数寄屋造りの風格ある木造建築で、全館に畳が敷かれた純和風の空間に、心地よいお香の香りが漂います。宿の自慢は、加水・加温・循環を一切行わない「純度100％の源泉掛け流し」温泉。檜造りの露天風呂や岩風呂には、湯口から新鮮な硫黄泉が注がれ、湯の花が舞う極上の湯浴みが叶います。夕食はお部屋または個室料亭にて、月替わりの本格会席料理を堪能。信州牛のすき焼きや旬の川魚料理、地元の旬の素材を一品一品丹念に仕立てた料理は全国の温泉通から絶賛されています。",
              roomTip: "歴史ある数寄屋造りの純和室または温泉露天風呂付き特別室。北向観音の境内林を借景に、静寂に包まれた初冬の風情をゆったり味わえます。",
              gourmetTip: "「かしわや伝統・信州牛すき焼き会席」。秘伝の割り下で煮込むとろける信州牛、出汁の効いた旬菜の椀物、信州特産の林檎を使ったデザート。",
              highlights: [
                "北向観音堂すぐ隣の創業100余年老舗＆加水加温一切なしの純度100％源泉掛け流し",
                "秘伝の割り下で味わう極上信州牛すき焼き＆朝夕お部屋食でゆったり過ごす大人の時間",
                "白濁湯の花が舞う本物の温泉浴＆静寂に包まれた境内林の借景を楽しむ至高の休日"
              ]
            },
            {
              id: 3,
              name: "信州別所温泉　旅宿　上松や",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/6064/6064.jpg",
              rating: 4.52,
              reviews: 1522,
              price: "¥9,817〜",
              access: "JR北陸新幹線上田駅にて上田電鉄別所線に乗換、終点別所温泉駅より徒歩10分。",
              special: "楽天トラベルアワード7年連続受賞！（2025 シルバーアワード）",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6064%2F6064.html",
              story: "戦国武将・真田幸村公の隠し湯としての伝承を大切に受け継ぎ、一人旅から家族旅行まで心温まるもてなしで高い支持を得る「信州別所温泉 旅宿 上松や（かみまつや）」。真田家の家紋である六文銭をモチーフにした落ち着いた館内には、信州の歴史ロマンが息づいています。大浴場や開放的な石造りの露天風呂には、名湯・別所の硫黄泉が滾々と掛け流されており、肌の角質を優しく落とす美肌効果と疲労回復効果を実感できます。夕食は信州上田の風土を活かした郷土会席。地元の契約農家が育てる新鮮な冬野菜や、信州牛の陶板焼き、信州サーモンなど、地産地消にこだわった滋味豊かな手料理を気兼ねなく楽しめます。",
              roomTip: "一人旅専用の快適なシングル和モダンルームや広々としたファミリールーム。畳の上にローベッドを配し、プライベートな寛ぎを追求した設計。",
              gourmetTip: "「真田の郷・信州牛と冬の味覚会席」。柔らかく甘みのある信州牛の陶板焼き、信州名物のおやき風蒸し物、香り豊かな地酒の飲み比べセット。",
              highlights: [
                "真田幸村ゆかりの歴史ロマン＆一人旅から家族旅まで温かく迎えるおもてなしの宿",
                "信州牛陶板焼きと旬野菜の郷土会席＆地酒飲み比べが楽しめる居心地の良い食事処",
                "コストパフォーマンス抜群の宿泊プラン＆一人旅専用和モダン客室の充実した設備"
              ]
            },
            {
              id: 4,
              name: "信州別所温泉　玉屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15864/15864.jpg",
              rating: 4.77,
              reviews: 667,
              price: "¥30,800〜",
              access: "北陸新幹線上田駅乗り換え、別所温泉駅より徒歩7分（14時～17時は無料送迎バス有）、上信越道「上田菅平IC」から車30分",
              special: "湯のまちの美食宿。和モダンに設えた和洋室と信州プレミアム牛肉の会席料理。源泉掛け流しの美人の湯を堪能",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15864%2F15864.html",
              story: "明治元年の創業以来、皇族や多くの文化人に愛されてきた別所温泉を代表する老舗宿「信州別所温泉 玉屋旅館」。館内は数寄屋造りの格調高い意匠で統一され、随所に飾られた野の花や手入れの行き届いた坪庭が訪れる者を温かく迎えます。宿の地下から湧出する良質な単純硫黄泉は、大浴場や総檜造りの露天風呂に掛け流されており、肌にしっとりと吸い付くような上質な湯ざわりが自慢です。玉屋旅館が最も誇りとするのが、全国の旅館料理コンテストでも高評価を得る本格懐石料理。11月・12月には、信州プレミアム牛肉のヒレステーキや、旬の冬魚、上田特産の松茸（晩秋期）や信州蕎麦など、美しさと美味しさを極めた逸品が並びます。",
              roomTip: "数寄屋建築の粋を集めた純和風客室またはテラス付き和洋室。障子を開ければ、初冬の冷気の中に佇む静かな庭園や別所の山並みを鑑賞できます。",
              gourmetTip: "「玉屋名物・信州プレミアム牛懐石」。口の中でとろける極上信州牛の炭火焼き、信州サーモンの昆布締め、出汁の香りが際立つ季節の炊き合わせ。",
              highlights: [
                "明治元年創業の格式高き数寄屋造り＆全国コンテスト高評価の信州プレミアム牛懐石",
                "料理長が腕を振るう芸術的な信州懐石＆総檜露天風呂で味わう上質な硫黄香る名湯",
                "皇族や文化人御用達の格式高い安心感＆細やかな気配りが行き届いた極上サービス"
              ]
            },
            {
              id: 5,
              name: "別所温泉　旅館　中松屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/31713/31713.jpg",
              rating: 4.75,
              reviews: 680,
              price: "¥12,700〜",
              access: "新幹線上田駅より別所線別所温泉駅まで30分。駅前から巡回バス有／上信越自動車道上田ICより50分。北向観音まで徒歩1分。",
              special: "楽天トラベルブロンズアワード2年連続受賞！全館畳敷き＆貸切風呂が好評♪3世代旅行にも◎",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31713%2F31713.html",
              story: "創業150余年、木造七階建ての堂々たる威容を誇り、全館畳敷きの和の温もりとおもてなしの心で旅人を迎える「別所温泉 旅館 中松屋」。スリッパを使わずに畳の感触を素足で楽しめる館内は、清潔感にあふれシニアから子供連れまで快適に過ごせます。最上階の7階に設けられた展望大浴場と露天風呂からは、北向観音の杜や信州の山々、塩田平の街並みを見渡すパノラマビューが広がり、朝夕の刻々と移ろう光景を眺めながらの名湯浴みは爽快そのもの。夕食は信州の豊かな山海の幸を盛り込んだ月替わりの会席料理。信州アルプス牛の朴葉味噌焼きや、旬の信州野菜を贅沢に使った鍋料理など、心温まる郷土の味を個室でゆっくり味わえます。",
              roomTip: "最上階展望フロアの和室または温泉風呂付き客室。窓の外に広がる塩田平のパノラマと、夜には澄み切った信州の星空を眺める贅沢な時間。",
              gourmetTip: "「中松屋伝統・信州アルプス牛の朴葉味噌焼き会席」。特製味噌の香ばしさと柔らかな牛肉の脂が溶け合う名物料理、信州手打ち蕎麦、冬野菜の天ぷら。",
              highlights: [
                "創業150余年の全館畳敷き木造旅館＆7階最上階展望露天風呂から見渡す塩田平の絶景",
                "信州アルプス牛の香ばしい朴葉味噌焼き＆個室で味わう地産地消の月替わり郷土会席",
                "全館素足で過ごせる清潔で温かな空間＆シニアや三世代旅行にも安心のバリアフリー"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <header className="relative w-full h-[360px] sm:h-[480px] flex items-end justify-center bg-slate-900 text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
          alt="塩田平と初冬の別所温泉街パノラマ"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/20 backdrop-blur-md border border-violet-400/30 text-violet-300 text-xs sm:text-sm font-semibold">
            <Landmark className="w-4 h-4" />
            11月・12月 信州最古の古湯＆厄除け北向観音特集｜長野・別所温泉
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            古湯情緒と北向観音初冬参拝<br className="hidden sm:inline" />
            極上信州プレミアム牛＆名湯掛け流し硫黄泉で寛ぐ老舗旅館5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            「信州の鎌倉」に佇む開湯1400年の古湯。ほのかに硫黄が香る掛け流しの湯に浸かり、善光寺と向かい合う北向観音で厄を払い、霜降り極上の信州プレミアム牛と信州サーモンに舌鼓を打つ大人の温泉旅。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-violet-400" /> 11月〜12月初冬の厄除け参詣</span>
            <span className="flex items-center gap-1"><Waves className="w-4 h-4 text-violet-400" /> 美肌の弱アルカリ性硫黄泉</span>
            <span className="flex items-center gap-1"><Utensils className="w-4 h-4 text-violet-400" /> 極上信州プレミアム牛肉</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Section 1: Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-violet-100">
            <div className="p-2.5 rounded-2xl bg-violet-50 text-violet-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-violet-800 uppercase tracking-widest">Heritage of Shinshu</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                千四百年の時を紡ぐ古湯と厄除け信仰｜11月・12月に信州別所温泉を訪れるべき理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              長野県東部、千曲川が流れる上田盆地の西端に位置する「別所温泉」。日本武尊が東征の折に発見したとも伝わる信州最古の温泉地であり、平安時代には清少納言の『枕草子』にも「湯は七久里の湯」として謳われた歴史ある名湯です。鎌倉時代には北条氏の庇護を受け、数多くの寺院や仏教建築が建立されたことから「信州の鎌倉」の異名を持ちます。11月から12月にかけては、周囲の塩田平の紅葉が落ち着きを見せ、山肌に初雪がうっすらと白く輝く初冬の風情が広がります。石畳の小路沿いに佇む老舗旅館の軒先からは白い湯けむりがもうもうと立ち上り、どこか懐かしい日本の原風景が迎えてくれます。
            </p>
            <p>
              この時期の別所温泉を訪れる最大のハイライトが、温泉街の中心に堂々と建つ「北向観音堂」への初冬参詣です。北向観音は現世の利益を司り、北に向かって本堂が建てられているのは長野市の善光寺（来世の利益）と向かい合うため。古くから「善光寺と北向観音の双方をお参りしなければ片参りになる」と伝えられ、一年の無事を感謝し新年の厄除けを祈願する参詣者が絶えません。初冬の凛とした澄み切った冷気の中で聞く本堂の鐘の音は、日々の喧騒を忘れさせ、心を深く整えてくれます。
            </p>
            <p>
              そして冷えた身体を包み込むのは、ほんのりとした硫黄の香りとまろやかな湯触りが心地よい「弱アルカリ性単純硫黄泉」。加水や循環を行わない源泉掛け流しの湯宿が多く、肌の角質を優しく整える高い美肌作用と、入浴後も湯冷めしにくい温まり効果を誇ります。夕食には、長野県が誇るブランド牛の頂点「信州プレミアム牛肉」のすき焼きや石焼き、清流が育む信州サーモン、そして初冬に甘みが凝縮するサンふじ林檎を使った料理など、信州の大自然の恵みを心ゆくまで堪能できます。
            </p>
          </div>
        </section>

        {/* Section 1.5: Detailed Winter Landscape & Heritage */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-violet-100">
            <div className="p-2.5 rounded-2xl bg-violet-50 text-violet-800">
              <Mountain className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-violet-800 uppercase tracking-widest">Shioda Plain & Snowy Peaks</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冠雪の浅間山連峰と塩田平の静寂｜信州の鎌倉が織りなす冬の陰影
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              別所温泉の背後に連なる山々から塩田平を見下ろすと、東の彼方には初雪を被った活火山・浅間山が噴煙をたなびかせ、北には菅平高原や志賀高原の白い連峰が青空にくっきりと浮かび上がります。内陸性気候特有のカラリと晴れ渡る冬空は、信州ならではの清々しさを旅人にもたらします。
            </p>
            <p>
              温泉街から徒歩10分ほどの山裾に佇む国宝「安楽寺 八角三重塔」は、初冬の静寂の中でその真価を現します。鎌倉時代末期に建てられた日本唯一の木造八角塔で、宋朝禅宗様の精緻な組物と、苔むした屋根に舞い落ちる初雪のコントラストは息を呑む静謐さ。また、常楽寺の茅葺き本堂や北向観音の境内に漂う線香の煙が、冬の冷たい大気と溶け合い、心の奥深くまで洗われるような深い安らぎを与えてくれます。
            </p>
          </div>
        </section>

        {/* Section 2: Hotel Cards */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-violet-800 uppercase tracking-widest">Timeless Heritage Inns</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              【11・12月厳選】別所温泉の美食と掛け流し名湯に浸る名旅館5選
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              北向観音の隣に佇む老舗から、全館畳敷きの展望風呂自慢、数寄屋造りの贅を尽くした料理旅館まで、極上の5宿を厳選。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {hotels.map((h) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow flex flex-col md:flex-row"
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    {h.rating} ({h.reviews}件)
                  </div>
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-violet-600 text-white text-xs font-bold">
                    No.{h.id} おすすめ宿
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {h.name}
                      </h3>
                      <span className="text-lg sm:text-xl font-extrabold text-violet-800">
                        {h.price} <span className="text-xs font-normal text-slate-500">/人〜</span>
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-violet-600 shrink-0" />
                      {h.access}
                    </p>

                    <p className="text-sm text-slate-700 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="bg-violet-50/60 rounded-2xl p-4 border border-violet-100/80 space-y-2 text-xs sm:text-sm">
                      <div className="flex items-start gap-2 text-slate-700">
                        <Eye className="w-4 h-4 text-violet-800 shrink-0 mt-0.5" />
                        <div><strong className="text-slate-900">客室の選び方：</strong>{h.roomTip}</div>
                      </div>
                      <div className="flex items-start gap-2 text-slate-700">
                        <Utensils className="w-4 h-4 text-violet-800 shrink-0 mt-0.5" />
                        <div><strong className="text-slate-900">冬の極上グルメ：</strong>{h.gourmetTip}</div>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      {h.highlights.map((hl: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-violet-500 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-slate-500 font-medium">
                      ※表示料金は楽天トラベルの最新目安料金です
                    </span>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-violet-700 text-white font-bold text-sm shadow-md hover:from-violet-700 hover:to-violet-800 transition-all"
                    >
                      楽天トラベルでプランを見る
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2.5: Gourmet & Hot Spring Science */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-violet-100">
            <div className="p-2.5 rounded-2xl bg-violet-50 text-violet-800">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-violet-800 uppercase tracking-widest">Gourmet & Thermal Science</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                信州プレミアム牛の芳醇オレイン酸と単純硫黄泉の美肌メカニズム
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              長野県が誇る「信州プレミアム牛肉」は、長野県独自の衛生基準を満たした農場で、リンゴ粕などを配合した飼料で大切に肥育された黒毛和種。最大の特長は、肉の風味や口どけを左右する「オレイン酸」の含有率を科学的に測定し、一定の基準をクリアした肉のみが認定される点です。融点が低いため舌の上でサラリと溶け、脂っこさを感じさせない上品な甘みと赤身の深いコクが際立ちます。冬のすき焼きや陶板焼きでは、立ち上る甘い香りと肉汁の旨味が箸を止めさせません。
            </p>
            <p>
              別所温泉の湯は、弱アルカリ性単純硫黄泉（低張性弱アルカリ性高温泉）。肌の古い角質を落とすクレンジング作用と、硫黄成分によるメラニン色素の代謝促進、抗酸化作用が相まって「すべすべ美肌」へと導きます。さらに、ほのかな硫黄香に含まれる硫化水素ガスが末梢血管を穏やかに拡張し、血圧を安定させながら手足の先までポカポカに温めてくれるため、初冬の冷え性改善や疲労回復に最高の効能を発揮します。
            </p>
          </div>
        </section>

        {/* Section 3: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-8">
          <div className="flex items-center gap-3 pb-3 border-b border-violet-100">
            <div className="p-2.5 rounded-2xl bg-violet-50 text-violet-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-violet-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                【1泊2日モデルコース】初冬の別所温泉・北向観音参詣と国宝三重塔・信州牛を巡る歴史散歩
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 space-y-4">
              <div className="flex items-center gap-2 text-violet-800 font-bold text-base pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-violet-600" />
                【1日目】レトロな別所線で行く古湯・北向観音参詣と信州牛の宴
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-violet-100 text-violet-800 font-bold text-xs shrink-0 mt-0.5">12:00</span>
                  <span><strong>北陸新幹線上田駅到着＆ランチ：</strong>駅周辺の名店で名物「信州手打ち蕎麦」や信州地鶏定食を堪能。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-violet-100 text-violet-800 font-bold text-xs shrink-0 mt-0.5">13:30</span>
                  <span><strong>上田電鉄別所線に乗車：</strong>レトロな丸窓電車に揺られながら塩田平の田園風景を抜け、終点・別所温泉駅へ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-violet-100 text-violet-800 font-bold text-xs shrink-0 mt-0.5">14:30</span>
                  <span><strong>厄除け「北向観音堂」初冬参拝：</strong>石段を登り本堂へ。清らかな線香の香りと初冬の澄んだ空気の中で現世の平穏と厄除けを祈願。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-violet-100 text-violet-800 font-bold text-xs shrink-0 mt-0.5">15:45</span>
                  <span><strong>老舗旅館へチェックイン：</strong>全館畳敷きの温もりに癒やされ、硫黄香る源泉掛け流し露天風呂で身体の芯から温まる。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-violet-100 text-violet-800 font-bold text-xs shrink-0 mt-0.5">18:30</span>
                  <span><strong>極上の信州牛会席：</strong>とろける信州プレミアム牛肉のすき焼き、清流信州サーモン、地酒「真田丸」や「大信州」に酔いしれる。</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 space-y-4">
              <div className="flex items-center gap-2 text-violet-800 font-bold text-base pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-violet-600" />
                【2日目】国宝安楽寺の八角三重塔と共同浴場外湯巡り
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-violet-100 text-violet-800 font-bold text-xs shrink-0 mt-0.5">07:30</span>
                  <span><strong>朝風呂＆信州野菜の朝食：</strong>朝陽に照らされる浅間山を望む展望風呂で目覚めの湯浴み。信州味噌仕立ての温かい味噌汁を味わう。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-violet-100 text-violet-800 font-bold text-xs shrink-0 mt-0.5">09:30</span>
                  <span><strong>国宝「安楽寺 八角三重塔」拝観：</strong>静謐な杉並木を歩き、日本唯一の木造八角塔を拝観。鎌倉時代の禅宗建築の極致に心打たれる。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-violet-100 text-violet-800 font-bold text-xs shrink-0 mt-0.5">11:00</span>
                  <span><strong>外湯「大師の湯」または足湯「ななくり」：</strong>温泉街の共同浴場で慈覚大師ゆかりの名湯を肌で体感。お土産に蜜入りサンふじ林檎を購入。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-violet-100 text-violet-800 font-bold text-xs shrink-0 mt-0.5">13:00</span>
                  <span><strong>上田城跡公園へ立ち寄り：</strong>上田駅経由で真田氏ゆかりの城跡を散策し、新幹線で帰路へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Seasonal Highlights */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-violet-100">
            <div className="p-2.5 rounded-2xl bg-violet-50 text-violet-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-violet-800 uppercase tracking-widest">Local Travel Tips</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の別所温泉旅行を深める3つの心得
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-slate-700">
            <div className="bg-violet-50/40 rounded-2xl p-5 border border-violet-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Landmark className="w-5 h-5 text-violet-600" />
                「両参り」で満願成就
              </h3>
              <p className="leading-relaxed">
                善光寺と北向観音は向かい合う関係。長野新幹線を利用すれば長野駅の善光寺と上田駅の別所温泉は1時間圏内。両方を参詣することで現世と来世の完全なご利益が得られます。
              </p>
            </div>

            <div className="bg-violet-50/40 rounded-2xl p-5 border border-violet-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Waves className="w-5 h-5 text-violet-600" />
                3つの外湯めぐり
              </h3>
              <p className="leading-relaxed">
                別所温泉街には「石湯（真田幸村隠しの湯）」「大師の湯（慈覚大師）」「大湯（木曽義仲ゆかり）」の3つの公衆浴場があり、地元の人々と語らいながらの湯巡りもおすすめです。
              </p>
            </div>

            <div className="bg-violet-50/40 rounded-2xl p-5 border border-violet-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Wine className="w-5 h-5 text-violet-600" />
                蜜入りサンふじの最盛期
              </h3>
              <p className="leading-relaxed">
                信州上田・塩田平周辺は全国屈指のりんご産地。11月中旬から12月にかけて収穫される「完熟サンふじ」は蜜がたっぷりと入り、シャキシャキの歯ごたえとお土産に最高の人気を誇ります。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-violet-100">
            <div className="p-2.5 rounded-2xl bg-violet-50 text-violet-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-violet-800 uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                信州別所温泉の初冬旅行に関するよくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-200/60 space-y-2">
                <h3 className="text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-violet-800 font-extrabold shrink-0">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Internal Links */}
        <section className="bg-gradient-to-br from-slate-900 to-violet-950 text-white rounded-3xl p-8 sm:p-10 space-y-6 shadow-md">
          <div className="space-y-2">
            <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい！甲信越・信州の冬美食＆名湯温泉特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              長野・群馬・山梨の雪見露天・和牛会席・歴史情緒を巡る、厳選特集記事もぜひチェックしてください。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <Link 
              href="/winter-nagano-suwa-onsen-lake-view-shinshu-beef-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-blue-500/40 text-blue-200 font-bold text-[10px]">諏訪湖・冬レイクビュー</span>
              <h3 className="font-bold text-white text-sm">上諏訪温泉・諏訪湖一望の展望露天と信州牛すき焼きの宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">湯量豊富な自家源泉と澄み切った諏訪湖の初冬パノラマ。</p>
            </Link>

            <Link 
              href="/winter-nagano-shibu-onsen-nine-sotoyu-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-amber-500/40 text-amber-200 font-bold text-[10px]">渋温泉・九湯めぐり</span>
              <h3 className="font-bold text-white text-sm">渋温泉・石畳の九湯めぐりと信州牛会席のレトロ宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">下駄の音が響く石畳の温泉街と厄除け巡浴の旅。</p>
            </Link>

            <Link 
              href="/winter-gunma-ikaho-stone-steps-joshu-beef-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-rose-500/40 text-rose-200 font-bold text-[10px]">伊香保・石段街の黄金の湯</span>
              <h3 className="font-bold text-white text-sm">伊香保温泉・365段の石段街と黄金の湯・上州牛会席の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">鉄分を含む茶褐色の名湯と上州黒毛和牛の贅沢会席。</p>
            </Link>

            <Link 
              href="/winter-yamanashi-kawaguchiko-onsen-fuji-view-koshu-beef-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-emerald-500/40 text-emerald-200 font-bold text-[10px]">河口湖・富士山絶景露天</span>
              <h3 className="font-bold text-white text-sm">富士河口湖温泉・冠雪の富士山一望露天と甲州牛の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">初冬の澄み渡る空気の中で眺める逆さ富士と極上ワイン。</p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-nagano-bessho-onsen-shinshu-beef-heritage-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
