import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月京都湯の花温泉の幻想的な亀岡霧雲海と名物ぼたん鍋】初冬の京奥座敷露天・最高級丹波牛ステーキ＆丹波黒豆会席の隠れ宿5選",
  description: "11月から12月にかけて京都の奥座敷・亀岡盆地は、冷え込みとともに盆地全体が真っ白な霧の海に沈む幻想的な「丹波霧（かめおか雲海）」のシーズンを迎えます。戦国武将も刀傷を癒やしたと伝わる万病の薬湯・湯の花温泉の露天風呂、初冬の里山に囲まれた静寂のプライベート空間、冬の丹波を代表する名物「本場猪肉のぼたん鍋」、きめ細やかな霜降りと深いコクを誇る「丹波牛」の鉄板焼きや陶板ステーキ、丹波黒豆や聖護院大根など旬の京野菜会席を堪能する大人の隠れ名宿5選を徹底解説。",
  keywords: '湯の花温泉 宿泊, 京都 亀岡 温泉, 湯の花温泉 ぼたん鍋, すみや亀峰菴, 京都 烟河, 松園荘 保津川亭, 翠泉, 渓山閣, 丹波霧 雲海, 丹波牛, 京都 冬 温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kyoto-yunohana-onsen-unkai-botan-nabe-stay/",
  },
  openGraph: {
    title: "【11・12月京都湯の花温泉の幻想的な亀岡霧雲海と名物ぼたん鍋】初冬の京奥座敷露天・最高級丹波牛ステーキ＆丹波黒豆会席の隠れ宿5選",
    description: "11月から12月にかけて京都の奥座敷・亀岡盆地は、冷え込みとともに盆地全体が真っ白な霧の海に沈む幻想的な「丹波霧（かめおか雲海）」のシーズンを迎えます。戦国武将も刀傷を癒やしたと伝わる万病の薬湯・湯の花温泉の露天風呂、初冬の里山に囲まれた静寂のプライベート空間、冬の丹波を代表する名物「本場猪肉のぼたん鍋」、きめ細やかな霜降りと深いコクを誇る「丹波牛」の鉄板焼きや陶板ステーキ、丹波黒豆や聖護院大根など旬の京野菜会席を堪能する大人の隠れ名宿5選を徹底解説。",
    url: 'https://croud-travel.com/winter-kyoto-yunohana-onsen-unkai-botan-nabe-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月京都湯の花温泉の幻想的な亀岡霧雲海と名物ぼたん鍋】初冬の京奥座敷露天・最高級丹波牛ステーキ＆丹波黒豆会席の隠れ宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月京都湯の花温泉の幻想的な亀岡霧雲海と名物ぼたん鍋】初冬の京奥座敷露天・最高級丹波牛ステーキ＆丹波黒豆会席の隠れ宿5選",
    description: "11月から12月にかけて京都の奥座敷・亀岡盆地は、冷え込みとともに盆地全体が真っ白な霧の海に沈む幻想的な「丹波霧（かめおか雲海）」のシーズンを迎えます。戦国武将も刀傷を癒やしたと伝わる万病の薬湯・湯の花温泉の露天風呂、初冬の里山に囲まれた静寂のプライベート空間、冬の丹波を代表する名物「本場猪肉のぼたん鍋」、きめ細やかな霜降りと深いコクを誇る「丹波牛」の鉄板焼きや陶板ステーキ、丹波黒豆や聖護院大根など旬の京野菜会席を堪能する大人の隠れ名宿5選を徹底解説。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'],
  }
};

const faqList = [
  {
    "q": "湯の花温泉の11月・12月の気候と『丹波霧（かめおか雲海）』を見るポイントは？",
    "a": "亀岡市は周囲を山に囲まれた盆地地形のため、晩秋から冬（11月〜12月）にかけて放射冷却により強い冷え込みが発生し、盆地全体を覆い尽くす濃密な『丹波霧（かめおか雲海）』が発生します。早朝、宿の周辺や亀岡市内の『かめおか霧のテラス（標高約400m）』に登ると、足元一面に真っ白な雲海が広がり、朝日に照らされて黄金色に輝く奇跡の絶景を見ることができます。気温は京都市内より約3℃〜5℃低く、12月の朝晩は氷点下に近くなるため、厚手コートや手袋などの防寒対策を万全にしてください。"
  },
  {
    "q": "冬の京都・丹波名物『ぼたん鍋』とはどのような料理ですか？",
    "a": "ぼたん鍋とは、冬の丹波篠山・亀岡エリアの山々で獲れた天然の猪肉を、薄切りにして大皿に牡丹の花のように美しく盛り付け、牛蒡や白菜、白葱、豆腐、キノコなどの冬野菜とともに特製の味噌出汁でじっくり煮込んでいただく伝統鍋料理です。冬の猪肉は越冬のために良質な脂をたっぷりと蓄えており、豚肉や牛肉よりもコラーゲンが豊富でヘルシー。煮込むほどに柔らかく肉の甘みが増し、味噌出汁と溶け合って格別の美味しさとなります。"
  },
  {
    "q": "湯の花温泉の泉質や歴史、効能の特徴は？",
    "a": "湯の花温泉は京都府内屈指の歴史を誇る名湯で、戦国時代には明智光秀など戦国武士が刀傷を癒やしに訪れたという伝説が残る『薬湯』です。泉質は主に『単純弱放射能温泉（低張性弱アルカリ性低温泉）』で、微量のラドン成分を含みます。新陳代謝を促進し、血流を改善して痛風や神経痛、関節痛、冷え性に優れた効能を発揮します。肌当たりが非常に柔らかく刺激が少ないため、湯治のように何度でもゆったりと浸かれる優しいお湯です。"
  },
  {
    "q": "京都市内（京都駅・嵐山）から湯の花温泉へのアクセスは？",
    "a": "アクセスは非常に便利です。JR京都駅からJR山陰本線（嵯峨野線）の快速で亀岡駅までわずか約20分。JR嵯峨嵐山駅からは約10分で亀岡駅に到着します。亀岡駅からは各旅館が無料送迎バス（約15〜20分、要予約）を運行しているため、電車利用でのアクセスが快適です。お車の場合は京都縦貫自動車道『亀岡IC』より約10分です。京都市内観光を楽しんだ後、夕方に人混みを離れて静かな温泉宿で泊まるプランに最適です。"
  },
  {
    "q": "初冬の亀岡・湯の花温泉周辺でおすすめの観光スポットは？",
    "a": "明智光秀ゆかりの丹波亀山城跡や、出雲大社の分院とされる古社『出雲大神宮（丹波国一之宮）』は初冬の静寂な参拝におすすめのパワースポットです。また、亀岡から嵐山へと下る冬の『保津川下り』は暖房船が運航され、初冬の渓谷美を間近に楽しめます。嵯峨野トロッコ列車も12月下旬まで運行されており、保津峡の自然美を車窓から満喫できます。"
  }
];

export default function YunohanaOnsenWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-kyoto-yunohana-onsen-unkai-botan-nabe-stay#article",
        "headline": "【11・12月京都湯の花温泉の幻想的な亀岡霧雲海と名物ぼたん鍋】初冬の京奥座敷露天・最高級丹波牛ステーキ＆丹波黒豆会席の隠れ宿5選",
        "description": "11月から12月にかけて京都の奥座敷・亀岡盆地は、冷え込みとともに盆地全体が真っ白な霧の海に沈む幻想的な「丹波霧（かめおか雲海）」のシーズンを迎えます。戦国武将も刀傷を癒やしたと伝わる万病の薬湯・湯の花温泉の露天風呂、初冬の里山に囲まれた静寂のプライベート空間、冬の丹波を代表する名物「本場猪肉のぼたん鍋」、きめ細やかな霜降りと深いコクを誇る「丹波牛」の鉄板焼きや陶板ステーキ、丹波黒豆や聖護院大根など旬の京野菜会席を堪能する大人の隠れ名宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-28T00:00:00+09:00",
        "dateModified": "2026-09-28T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド 編集部",
          "url": "https://croud-travel.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-kyoto-yunohana-onsen-unkai-botan-nabe-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-kyoto-yunohana-onsen-unkai-botan-nabe-stay#faq",
        "mainEntity": faqList.map(item => ({
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

  const hotels = [
            {
              id: 1,
              name: "京都　湯の花温泉　すみや亀峰菴",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9696/9696.jpg",
              rating: 4.38,
              reviews: 279,
              price: "¥24,200〜",
              access: "JR亀岡駅より車で２０分/京都縦貫道亀岡ICよりR372で約１０分/阪神高速池田線木部ICよりR423で約４０分",
              special: "京都の旅館ならではの日本の伝統美と現代アートの空間で四季折々の京懐石とオーストリアワインを愉しむ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9696%2F9696.html",
              story: "亀岡の豊かな山里に佇み、茅葺きの門をくぐると洗練された和の美意識とオーストリアワインの香りが迎えてくれる極上の隠れ宿「京都 湯の花温泉 すみや亀峰菴（きほうあん）」。館内には木と土壁の温もりが溢れ、現代アーティストの作品がさりげなく配された空間はまさに大人のためのリトリート。宿の自慢は、木立の小道を抜けた先にあるプライベート貸切露天風呂「山の隠れ湯」。初冬の静まり返った森の空気の中、湯の花温泉の柔らかな名湯に浸かりながら、色づいた紅葉の名残と初雪の気配を感じる贅沢な湯浴みが叶います。",
              roomTip: "客室露天風呂付き和洋室「亀峰菴」または特別室。源泉掛け流しの専用露天風呂と開放感あるテラスを備え、初冬の丹波の山並みを眺めながら何もしない贅沢を堪能できます。",
              gourmetTip: "食事処「旬膳 蔵」でいただく丹波の季節会席。冬の名物・特選丹波猪肉のぼたん鍋をはじめ、極上丹波牛の炭火焼き、朝採れの京都伝統野菜を料理人が繊細な出汁で仕立てた至極の逸品。",
              highlights: [
                "茅葺き門をくぐる大人の隠れ宿＆オーストリアワインと山の隠れ湯貸切露天",
                "現代アートと木の温もりが調和するモダン和洋室＆森の小道のプライベート露天",
                "特選丹波猪肉のぼたん鍋と極上丹波牛炭火焼き・朝採れ京野菜の季節懐石"
              ]
            },
            {
              id: 2,
              name: "里山の休日　京都・烟河（けぶりかわ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/27783/27783.jpg",
              rating: 4.48,
              reviews: 1483,
              price: "¥13,900〜",
              access: "JR嵯峨野線 亀岡駅より京阪京都交通バスで２０分、高芝下車徒歩３分／京阪神からお車で約６０分",
              special: "奥京都・湯の花温泉にある京都・烟河。自家農園によるこだわり野菜が味わえる里山情緒豊かな宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27783%2F27783.html",
              story: "里山ののどかな田園風景に囲まれ、約3万坪の広大な敷地に自家農園「烟河ファーム」を擁する温泉リゾート「里山の休日 京都・烟河（けぶりかわ）」。冬になると亀岡盆地特有の朝霧が田畑を優しく包み込み、幻想的な日本の原風景が広がります。館内の天然温泉露天風呂は、里山の澄んだ冬空と山並みを望む開放的な造りで、単純弱放射能温泉（ラジウム泉）のまろやかな湯が疲れた心身を芯から温めます。夕食時のドリンクやラウンジのサービスが楽しめるオールインクルーシブスタイルも大人気です。",
              roomTip: "露天風呂付き客室「里山ビュー」または広々とした和洋室。自家農園と冬の里山を望むプライベートデッキで、澄んだ初冬の空気を吸い込みながら寛ぎのひとときを。",
              gourmetTip: "石窯ダイニング「はなりの」での里山馳走会席。自社農園の冬野菜を焼き上げる石窯料理をはじめ、丹波牛の陶板ステーキ、丹波黒豆ご飯など、滋味あふれる大地の恵み。",
              highlights: [
                "3万坪の自家農園「烟河ファーム」＆里山ビュー露天風呂とオールインクルーシブ",
                "自家製石窯で焼き上げる旬野菜と開放感抜群の里山テラスラウンジ",
                "石窯ダイニング「はなりの」でいただく丹波牛ステーキと自家製冬野菜会席"
              ]
            },
            {
              id: 3,
              name: "松園荘　保津川亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9181/9181.jpg",
              rating: 3.98,
              reviews: 376,
              price: "¥8,085〜",
              access: "JR京都駅より嵯峨野線にて30分。亀岡駅下車、送迎有り/お車の場合R9より京都縦貫道、亀岡インターより15分",
              special: "当館はリラクゼーション・バリアフリーに配慮し、設備・お食事共に寛ぎと安心を重視しております。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9181%2F9181.html",
              story: "保津川の渓流に抱かれた静かな地に建ち、館内随所に配された美しい生け花と数寄屋造りの佇まいが心和ませる名旅館「松園荘 保津川亭」。広々とした大浴場には、木漏れ日露天風呂やジャグジー、薬草風呂など多彩な湯船が揃い、湯の花温泉の名湯を思う存分満喫できます。11月から12月にかけて、保津峡の山々が初冬の静けさに包まれる中、温かい湯煙の中でゆったりと手足を伸ばす時間は旅の至福。京都・嵐山からのアクセスも良く、観光と静かな宿泊を両立させたい旅人に愛されています。",
              roomTip: "温泉露天風呂付き特別室または渓流側和室。専用露天風呂から初冬の山景色を眺め、湯上がりには畳の香る広い和室で静かに流れる贅沢な時間を楽しめます。",
              gourmetTip: "料理長特選の丹波牛会席または冬限定の特選ぼたん鍋会席。味噌仕立ての濃厚な秘伝出汁で煮込む丹波篠山産の猪肉は、脂の甘みが際立つ冬一番の郷土名物。",
              highlights: [
                "生け花が彩る数寄屋造りの名宿＆木漏れ日露天風呂と多彩な湯船の温泉三昧",
                "京都・嵐山から電車で約20分の好立地＆静寂の保津川渓流沿いの佇まい",
                "秘伝の特製味噌で炊き上げる名物ぼたん鍋会席と丹波牛の陶板焼き"
              ]
            },
            {
              id: 4,
              name: "京ＹＵＮＯＨＡＮＡ　ＲＥＳＯＲＴ　翠泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/141382/141382.jpg",
              rating: 5.00,
              reviews: 110,
              price: "¥38,950〜",
              access: "電車の場合：ＪＲ亀岡駅よりバスにて約20分",
              special: "“特別なおもてなし”と“繊細な飾りあふれる膳に心躍る”そんな『上質の大人のひととき』をごゆるりと",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F141382%2F141382.html",
              story: "「京の奥座敷で静寂と美食に浸る」をコンセプトに、中学生未満の宿泊を制限した全13室の大人のスモールラグジュアリー旅館「京ＹＵＮＯＨＡＮＡ ＲＥＳＯＲＴ 翠泉（すいせん）」。館内は全館畳敷きで、洗練された数寄屋モダン建築と坪庭の美しさが際立ちます。客室露天風呂や大浴場露天風呂には、湯の花温泉の柔らかな弱アルカリ性単純泉が注がれ、湯船からは初冬の竹林や苔庭の風情を一望。夕食は全室個室の食事処で、全国から厳選された食材と丹波の旬味を融合させた珠玉の京懐石が供されます。",
              roomTip: "翠泉スイートまたは露天風呂付き和洋室。広々としたテラスにプライベート温泉露天風呂が備わり、静寂に包まれた竹林と初冬の冷気を感じながら極上のプライベートタイムを約束。",
              gourmetTip: "個室食事処で供される本格京懐石ディナー。最高峰丹波牛のフィレステーキや、聖護院大根と寒ブリの炊き合わせ、冬の蟹真丈など、料理人の確かな技が光る芸術的な料理。",
              highlights: [
                "全13室・大人のための全館畳敷きスモールラグジュアリー＆客室専用露天風呂",
                "静寂に包まれた竹林と坪庭の美＆全室個室食事処で味わう極上プライベート",
                "料理人の繊細な出汁が際立つ本格京懐石ディナーと最高峰丹波牛フィレステーキ"
              ]
            },
            {
              id: 5,
              name: "おもてなしの宿　渓山閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67464/67464.jpg",
              rating: 3.98,
              reviews: 449,
              price: "¥12,100〜",
              access: "ＪＲ嵯峨嵐山線　亀岡駅から当館無料送迎バス有り（要事前予約）",
              special: "まったり温泉、たっぷり会席で非日常を。【プロが選ぶ日本の旅館100選】料理・もてなしの達人入選！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67464%2F67464.html",
              story: "「プロが選ぶ日本のホテル・旅館100選」の料理部門に連続入選し、丹波の味覚と真心のこもったおもてなしで高い評価を受ける名宿「おもてなしの宿 渓山閣（けいざんかく）」。自慢の温泉大浴場「渓山乃湯」には、庭園を望む広々とした岩露天風呂や檜風呂があり、戦国時代に傷ついた武士が体を癒やしたという湯の花温泉の伝説を思わせる名湯が溢れています。冬の訪れとともに炭火の香りが漂う館内で、京都丹波が誇る極上の牛肉や冬野菜を心ゆくまで味わう伝統的な温泉旅館の贅沢が味わえます。",
              roomTip: "最上階フロアの特別室またはゆったりとした次の間付き和室。冬の澄んだ空気の中に広がる丹波の里山の山並みを窓から見渡し、ゆったりとした和の空間で寛げます。",
              gourmetTip: "料理自慢の渓山閣が誇る特選丹波牛ステーキ会席、または冬の滋味あふれる名物ぼたん鍋会席。特製ブレンド味噌と猪肉の脂が絶妙に絡み合い、身体の芯から温まる極上の美味。",
              highlights: [
                "「料理100選」連続入選の実力派旅館＆庭園岩露天風呂と炭火の香り",
                "戦国武将の刀傷を癒やした湯の花伝説の名湯「渓山乃湯」と広々とした和室",
                "料理自慢の宿が誇る丹波牛ステーキ会席と身体の芯から温まる冬の猪鍋"
              ]
            }
  ];

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-rose-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 text-white overflow-hidden py-16 sm:py-24 border-b border-rose-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.15),transparent_50%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-rose-400" />
            <span>11月・12月 冬の京都・亀岡 湯の花温泉特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月京都湯の花温泉の幻想的な亀岡霧雲海と名物ぼたん鍋】初冬の京奥座敷露天・最高級丹波牛ステーキ＆丹波黒豆会席の隠れ宿5選
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-4xl">
            11月から12月にかけて京都の奥座敷・亀岡盆地は、厳しい冷え込みによって街全体が真っ白な霧に沈む幻想的な「丹波霧（かめおか雲海）」の季節を迎えます。戦国武将も刀傷を癒やしたと伝わる万病の薬湯・湯の花温泉の露天風呂、静寂に包まれた里山に佇む上質な隠れ宿、冬の丹波を代表する名物「本場猪肉のぼたん鍋」、きめ細やかな霜降りと芳醇な旨味を誇る「丹波牛」のステーキ、丹波黒豆や聖護院大根など旬の京野菜会席を堪能する、大人のための至福の冬旅をお届けします。
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-rose-400" /> 11月〜12月が雲海と旬鍋の季節</span>
            <span className="flex items-center gap-1.5"><Mountain className="w-4 h-4 text-rose-400" /> 丹波霧雲海＆里山風景</span>
            <span className="flex items-center gap-1.5"><Waves className="w-4 h-4 text-rose-400" /> 単純弱放射能薬湯</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-rose-400" /> 本場ぼたん鍋・丹波牛</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* Section 1: Intro Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-100">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Seasonal Highlights</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の京都奥座敷・湯の花温泉が大人に選ばれる理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              京都市街の喧騒からJR快速でわずか20分。丹波高地に囲まれた亀岡市に湧き出る「湯の花温泉」は、のどかな里山の風景と上質な和の静寂が広がる京都の奥座敷です。11月から12月にかけて、この盆地特有の放射冷却によって発生する「丹波霧」は、街全体を乳白色の雲海で包み込みます。早朝、「かめおか霧のテラス」などから見渡す雲海パノラマは、まるで水墨画の世界に迷い込んだかのような神秘的な美しさを誇ります。
            </p>
            <p>
              冬の湯の花温泉で最大の楽しみは、この地が本場として名高い「ぼたん鍋」です。丹波の豊かな山林で木の実を食べて育った天然猪の肉は、冬になると上質な脂をたっぷりと蓄えます。鮮やかな赤身と白い脂身がまるで牡丹の花のように並べられた猪肉を、特製の合わせ味噌出汁で煮込むと、脂の甘みが出汁に溶け出し、驚くほど臭みのない濃厚な旨味が口いっぱいに広がります。また、幻の銘柄黒毛和牛「丹波牛」の炭火焼きステーキや、甘みたっぷりの丹波黒豆、旬を迎えた聖護院大根などの京野菜が織りなす冬の会席料理は、舌の肥えた食通をも唸らせます。
            </p>
            <p>
              温泉の泉質は「単純弱放射能温泉（ラジウム泉）」。かつて戦国武将が傷を癒やしたと伝えられる伝説の薬湯で、ホルミシス効果により血流が促進され、身体の芯からじわじわと温まります。湯上がり後も温もりが長時間持続するため、冷え込んだ冬の夜長を過ごすのに最適です。京都・嵐山観光の後に人混みを離れ、静寂の里山で極上の温泉と美食を堪能する大人の贅沢がここにあります。
            </p>
          </div>
        </section>

        {/* Section 2: Deep Dive into Onsen Chemistry & Gastronomy */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-100">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Kyoto Mountain Wellness & Gastronomy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                戦国武将を癒やしたラジウム薬湯と、丹波ぼたん鍋・丹波牛の美味構造
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Flame className="w-4 h-4 text-rose-700" />
              <span>微量放射能が生み出す「ホルミシス効果」と万病を癒やす鎮静作用</span>
            </h3>
            <p>
              湯の花温泉の最大の特徴は、微量のラドンガスを含有する「単純弱放射能温泉（ラジウム温泉）」である点です。放射能泉と聞くと驚かれるかもしれませんが、自然界に存在するごく微量の放射線は、生体にとって有益な刺激をもたらす「放射線ホルミシス効果」を発揮します。
            </p>
            <p>
              入浴時に皮膚や呼吸を通じて微量のラドンが体内に取り込まれると、抗酸化酵素（SOD）の活性が高まり、細胞の修復や免疫機能の向上が促されます。古く戦国時代に傷ついた武士たちが刀傷を癒やしに隠れ湯として通ったという伝説も、この優れた細胞活性化と鎮痛・消炎作用に裏打ちされたものです。刺激が極めて少なく肌当たりが柔らかいため、病後回復や神経痛、冬場の冷え性に絶大な効果をもたらします。
            </p>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 pt-2">
              <Utensils className="w-4 h-4 text-rose-700" />
              <span>丹波猪肉の「白脂」と秘伝味噌出汁、幻の丹波牛が奏でる極上冬鍋</span>
            </h3>
            <p>
              冬の丹波を代表する名物「ぼたん鍋」の真髄は、猪肉の脂身（白脂＝しろあぶら）の質にあります。秋に丹波の豊かな山々で実った栗やドングリ、キノコを豊富に食べて越冬準備に入った天然猪は、11月から12月にかけて真っ白で分厚い良質な脂をまといます。この脂は人間の体温に近い融点を持ち、豚肉のようにギトギトせず、噛むほどに上品な甘みとナッツのような香ばしさが溢れ出します。
            </p>
            <p>
              旅館ごとに代々受け継がれる秘伝の味噌出汁は、赤味噌と白味噌を絶妙にブレンドし、山椒や地酒、鰹と昆布の一番出汁を合わせたもの。猪肉を煮込むほどに出汁に甘い脂が溶け込み、地元の朝採れ聖護院大根、白葱、牛蒡に旨味が染み渡ります。さらに、丹波の清らかな水と気候で丹精込めて育てられた黒毛和牛「丹波牛」は、サシがきめ細かく赤身のコクが強いため、炭火焼きや陶板焼きで塩や山葵を添えていただくと、猪鍋の野趣とは対照的な洗練された牛肉の極みを堪能できます。
            </p>
          </div>
        </section>

        {/* Section 3: Hotel Cards */}
        <section className="space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-semibold">
              <Star className="w-3.5 h-3.5 fill-rose-700 text-rose-700" />
              <span>Rakuten Travel Verified Kyoto Retreats</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              11月・12月におすすめの京都湯の花温泉・厳選名宿5選
            </h2>
            <p className="text-sm text-slate-600">
              楽天トラベルの最新APIデータに基づき、里山の静寂な露天風呂、本場ぼたん鍋・丹波牛の料理評価、おもてなしの満足度が高い宿を厳選しました。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200/80 flex flex-col md:flex-row group"
              >
                {/* Image */}
                <div className="relative md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100 overflow-hidden">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    第{h.id}選
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/95 text-slate-900 text-xs font-extrabold px-3 py-1.5 rounded-xl shadow-sm backdrop-blur-sm flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{h.rating}</span>
                    <span className="text-slate-400 font-normal">({h.reviews}件)</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-rose-700 transition-colors">
                        {h.name}
                      </h3>
                    </div>
                    <p className="text-xs text-rose-800 font-semibold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                      <span>{h.special}</span>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {h.story}
                    </p>

                    {/* Room & Gourmet Tips */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <span className="font-bold text-slate-800">おすすめの客室：</span>
                        <span>{h.roomTip}</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <span className="font-bold text-slate-800">注目の冬グルメ：</span>
                        <span>{h.gourmetTip}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="grid grid-cols-1 gap-1.5 pt-1 text-xs text-slate-700">
                      {h.highlights.map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer & CTA */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] text-slate-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base sm:text-lg font-extrabold text-slate-900">
                        {h.price}
                      </span>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-700 to-rose-800 hover:from-rose-800 hover:to-slate-900 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all group/btn"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Winter Model Itinerary */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-100">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                京都奥座敷で雲海とぼたん鍋を満喫する1泊2日モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-4 text-slate-700 text-sm sm:text-base">
            <div className="border-l-2 border-rose-800 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-rose-800 text-white px-2 py-0.5 rounded">1日目 午前〜午後</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">京都駅・嵐山散策〜嵯峨野線で亀岡へ＆出雲大神宮参拝</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                京都駅から嵯峨野線に乗車し、まずは嵐山の渡月宮や竹林の小径で初冬の風情を散策。午後は快速電車で約10分の亀岡駅へ移動し、古くから縁結びと長寿の神として崇敬される「出雲大神宮」に参拝。御神体の御影山から湧き出る名水「真名井の水」で喉を潤した後、湯の花温泉の宿へチェックイン。
              </p>
            </div>

            <div className="border-l-2 border-rose-800 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-rose-800 text-white px-2 py-0.5 rounded">1日目 夕方〜夜</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">武将ゆかりの薬湯露天風呂〜本場ぼたん鍋と丹波牛ディナー</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                チェックイン後は静寂の里山に囲まれた露天風呂へ。柔らかなラジウム泉に包まれ、冷えた身体を芯からほぐします。夕食には冬の主役である名物「ぼたん鍋」または極上「丹波牛ステーキ」会席を堪能。芳醇な特製味噌出汁と猪肉の甘み、京野菜の滋味を丹波の地酒とともに味わう贅沢な宵を過ごします。
              </p>
            </div>

            <div className="border-l-2 border-rose-800 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-rose-800 text-white px-2 py-0.5 rounded">2日目 早朝〜午前</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">かめおか霧のテラスで幻想的な雲海鑑賞〜保津峡の自然美</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                早朝、冷え込んだ晴れた日には宿から車で約15分の「かめおか霧のテラス」へ。眼下一面に広がる真っ白な「丹波霧の雲海」と朝日の輝きを眺める感動体験。宿に戻って温かい朝食を味わった後は、保津川渓谷の冬景色を望むトロッコ列車や暖房船での保津川下りを楽しみます。
              </p>
            </div>

            <div className="border-l-2 border-rose-800 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-rose-800 text-white px-2 py-0.5 rounded">2日目 午後</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">丹波黒豆スイーツと京漬物のお土産選び〜京都駅へ</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                亀岡市内の菓子舗で丹波黒豆パウンドケーキや焼き栗スイーツを購入し、京漬物の名店へ。亀岡駅から嵯峨野線快速でわずか20分で京都駅へ戻り、新幹線で心地よい余韻に浸りながら帰路へ就きます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Travel Preparation */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-100">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-800">
              <ThermometerSun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Travel Preparation</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の気候・おすすめの服装・アクセス対策
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-rose-700" />
                <span>亀岡盆地の底冷えと服装の工夫</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                亀岡盆地は「底冷え」と呼ばれる独特の厳しい寒さがあり、京都市内よりも気温が3℃〜5℃低くなります。11月下旬からは朝晩の気温が0℃〜5℃近くまで冷え込み、濃い霧によって湿気を含んだ冷気が身に染みます。早朝の雲海鑑賞や夜間の散策には、風を通さない厚手のダウンコート、マフラー、手袋、カイロをご用意ください。
              </p>
            </div>
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-rose-700" />
                <span>濃霧時の運転と電車・無料送迎</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                11月・12月の早朝は丹波霧によって視界が数十メートル程度まで狭まることがあります。車を運転される際はフォグランプを点灯し、十分な車間距離を確保してください。京都駅からJR山陰本線快速で亀岡駅までわずか約20分、各宿が亀岡駅から無料送迎バスを運行しているため、電車利用が非常に安全で快適です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-100">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                よくある質問（FAQ）と湯の花温泉の冬旅アドバイス
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-rose-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Internal Links */}
        <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">Related Kansai & Gourmet Winter Hotspring Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい近畿の冬名湯＆全国の味覚会席特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月ならではの冬の味覚や情緒ある温泉街を味わう人気の厳選特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-kyoto-arashiyama-onsen-yudofu-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-rose-300 font-semibold block mb-1">京都・嵐山温泉</span>
              <h3 className="text-sm font-bold group-hover:text-rose-200 transition">嵐山初冬の渡月橋と名物湯豆腐・京懐石を楽しむ風雅な宿</h3>
            </Link>
            <Link 
              href="/winter-hyogo-arima-onsen-kinsen-kobe-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-rose-300 font-semibold block mb-1">兵庫・有馬温泉</span>
              <h3 className="text-sm font-bold group-hover:text-rose-200 transition">日本最古の名湯金泉・銀泉と最高級神戸牛すき焼きの宿</h3>
            </Link>
            <Link 
              href="/winter-kyoto-amanohashidate-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-rose-300 font-semibold block mb-1">京都・天橋立温泉</span>
              <h3 className="text-sm font-bold group-hover:text-rose-200 transition">雪化粧の日本三景天橋立と解禁本場松葉ガニフルコースの宿</h3>
            </Link>
            <Link 
              href="/winter-hyogo-kinosaki-onsen-matsuba-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-rose-300 font-semibold block mb-1">兵庫・城崎温泉</span>
              <h3 className="text-sm font-bold group-hover:text-rose-200 transition">冬の外湯めぐりと解禁津居山ガニ・但馬牛を堪能する名宿</h3>
            </Link>
            <Link 
              href="/winter-hot-pot-gibier-wild-game-satoyama-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-rose-300 font-semibold block mb-1">全国ジビエ鍋特集</span>
              <h3 className="text-sm font-bold group-hover:text-rose-200 transition">冬のジビエ・天然猪鍋＆熊鍋を味わう里山秘湯温泉の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-rose-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-rose-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
