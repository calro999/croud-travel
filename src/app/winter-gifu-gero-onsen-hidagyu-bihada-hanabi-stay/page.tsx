import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Sparkle, Map
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月岐阜・下呂温泉】名物飛騨牛すき焼き！名宿5選',
  description: '11月から12月にかけて、室町時代の儒学者・万里集九や江戸時代の儒学者・林羅山によって有馬・草津と並ぶ「日本三名泉」に称えられた岐阜県の下呂。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '下呂温泉 宿泊, 下呂温泉 水明館, 湯之島館, 小川屋, 紗々羅, みやこ, 飛騨牛 すき焼き, 朴葉味噌, 冬花火 下呂温泉, 美肌の湯, 11月 12月 下呂温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-gifu-gero-onsen-hidagyu-bihada-hanabi-stay/"
  },
  openGraph: {
    title: '【11・12月岐阜・下呂温泉】名物飛騨牛すき焼き！名宿5選',
    description: '11月から12月にかけて、室町時代の儒学者・万里集九や江戸時代の儒学者・林羅山によって有馬・草津と並ぶ「日本三名泉」に称えられた岐阜県の下呂。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-gifu-gero-onsen-hidagyu-bihada-hanabi-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '岐阜下呂温泉の冬景色と飛騨川のいで湯'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月岐阜・下呂温泉の日本三名泉と冬花火物語】名物飛騨牛すき焼き＆朴葉味噌・極上の美肌ぬめり湯を堪能する老舗名宿5選",
    description: "11月から12月にかけて、室町時代の儒学者・万里集九や江戸時代の儒学者・林羅山によって有馬・草津と並ぶ「日本三名泉」に称えられた岐阜県の下呂温泉（げろおんせん）は、澄み切った初冬の空気と幻想的な温泉街の明かりが旅情をそそる最高の季節を迎えます。pH9.2前後のアルカリ性単純温泉は、入浴した瞬間に肌がツルツルと滑らかになる天然の石鹸効果を誇る「美肌の湯」。12月に入ると飛騨川河畔で毎週土曜日に「下呂温泉花火物語（冬花火）」が開催され、冬の夜空に大輪の華が咲き誇ります。夕食にはきめ細やかなサシと芳醇な香りがとろける最高級「飛騨牛」のすき焼きや陶板焼き、香ばしい「朴葉味噌（ほおばみそ）」焼き。初冬の飛騨路で極上のぬくもりに浸る厳選名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function WinterGifuGeroOnsenPage() {
  const hotels = [
            {
              id: 1,
              name: "下呂温泉　水明館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8886/8886.jpg",
              rating: 4.36,
              reviews: 6345,
              price: "¥8,250〜",
              access: "ＪＲ高山本線下呂駅より徒歩３分【下呂駅まで随時送迎バス有】／中央自動車道 中津川ＩＣよりＲ２５７で約６０分",
              special: "趣のことなる三箇所の大浴場と充実した設備が自慢です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8886%2F8886.html",
              story: "飛騨川の清流沿いに広がる一万坪の広大な敷地に、青嵐荘・白雲閣・臨川閣・山水閣の趣異なる4つの館を構える下呂屈指の老舗迎賓館「下呂温泉 水明館（すいめいかん）」。宿の自慢は、それぞれ異なる情緒を満喫できる3つの大浴場。巨岩を配した野趣あふれる「野天風呂」、最上階から飛騨川と下呂の街並みを見渡す「展望大浴場」、そして銘木ヒノキの香りに包まれる「下留の湯（しもるのゆ）」と、館内にいながらにして日本三名泉の極上湯を巡ることができます。12月の土曜日には客室やロビーラウンジから冬花火を特等席で鑑賞可能。夕食は飛騨の旬食材を極めた日本料理・欧風料理・中国料理から選択でき、きめ細やかな霜降り飛騨牛のステーキやすき焼きはとろけるような極上の舌触りです。",
              roomTip: "臨川閣の飛騨川ビュー客室（室内温泉風呂付き）。バルコニーから飛騨の山並みと清流を一望でき、プライベート温泉で源泉美肌湯を心ゆくまで堪能。",
              gourmetTip: "「飛騨牛極み会席」。A5ランク飛騨牛のサーロインステーキ、飛騨牛の炙り握り寿司、朴葉味噌焼き、地場野菜の炊き合わせ、飛騨特産米の釜炊きご飯。",
              highlights: [
                "一万坪の敷地に3つの名物大浴場＆飛騨川一望の展望露天と極上飛騨牛料理",
                "野天風呂・展望大浴場・下留の湯の3大湯めぐり＆12月毎週土曜の冬花火特等席",
                "皇族も迎えた下呂屈指の格式と圧倒的おもてなし＆多彩な客室タイプ完備"
              ]
            },
            {
              id: 2,
              name: "下呂温泉　湯之島館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15967/15967.jpg",
              rating: 4.51,
              reviews: 729,
              price: "¥20,790〜",
              access: "下呂駅よりお車にて約５分／中津川ＩＣより国道２５７号線約６０分",
              special: "創業昭和６年。下呂温泉の町並みを眼下に望む敷地５万坪の木立に佇む、登録有形文化財の古格の宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15967%2F15967.html",
              story: "昭和六（1931）年創業、下呂温泉街を見下ろす山腹の五万坪におよぶ広大な自然林に抱かれた登録有形文化財の名旅館「湯之島館（ゆのしまかん）」。当時の名匠たちが贅を尽くして建てた木造三階建て本館は、近代和風建築の最高峰として国の登録有形文化財に指定されています。館内随所に施されたアールデコ調の洋館意匠や格天井、美しい欄間彫刻は、まるで昭和初期にタイムスリップしたかのような優雅な気品を漂わせます。創業以来こんこんと湧き出る自家源泉は、全館の客室風呂にまで贅沢に引かれており、展望露天風呂からは初雪をいただく山々と下呂の夜景が一望できます。夕食は数寄屋造りの個室でいただく月替わりの本格会席。飛騨牛の石焼きや川魚の塩焼きなど、伝統と技が冴える極上のもてなしを堪能できます。",
              roomTip: "本館または景山荘の源泉かけ流し客室風呂付き和室。昭和の職人技が息づく登録有形文化財の風情と、いつでもプライベートに楽しめる名湯の贅沢。",
              gourmetTip: "「有形文化財で味わう飛騨牛会席」。A5飛騨牛の溶岩石焼き、飛騨岩魚の塩焼き、飛騨地鶏の治部煮風小鍋、旬の根菜の白和え、厳選地酒のペアリング。",
              highlights: [
                "国の登録有形文化財の木造建築美＆全室源泉引き込みと昭和レトロの風格",
                "五万坪の自然林に抱かれた木造近代和風建築＆客室露天で味わう源泉贅沢",
                "アールデコ調洋館ダンスホールやサロン＆文化財に泊まる唯一無二の感動"
              ]
            },
            {
              id: 3,
              name: "下呂温泉　小川屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10716/10716.jpg",
              rating: 4.41,
              reviews: 4980,
              price: "¥8,800〜",
              access: "ＪＲ高山線下呂駅下車(徒歩８分／中央道中津川ＩＣよりＲ２５７で５０ｋｍ　",
              special: "楽天トラベルアワード金賞受賞！東海最大級100帖空間畳風呂と朝ごはん2年連続日本一受賞の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10716%2F10716.html",
              story: "飛騨川のほとりに位置し、宿の象徴である「100帖空間の畳風呂」で全国的に知られる温泉旅館「下呂温泉 小川屋（おがわや）」。大浴場の洗い場から湯船の周囲まで特殊な防水畳が敷き詰められた名物畳風呂は、冬の冷え込みでも足元が温かく、滑りにくいため小さな子どもから年配の方まで安心して寛げます。畳の柔らかな感触に癒やされながら、pH9.2の下呂のアルカリ性美肌泉に肩まで浸かれば、日頃の疲れがすっと溶け出していきます。2020年代にはホワイトイオンバスや炭酸泉を備えたモダンスパフロアも新設され、温泉リラクゼーションの魅力がいっそう充実。夕食は飛騨の恵みをふんだんに盛り込んだモダン会席。とろける飛騨牛の食べ比べやすき焼き、地元特産の納豆喰豚（なっとくとん）の料理など、多彩な美食を満喫できます。",
              roomTip: "飛騨川を望むリノベーション和洋室「ろっかん」またはスイート。川のせせらぎを聞きながら素足で気持ちよく過ごせるモダンなデザイン空間。",
              gourmetTip: "「飛騨牛三昧会席」。飛騨牛のしゃぶしゃぶ小鍋、飛騨牛の炙り焼き、飛騨牛ローストビーフ、下呂特産朴葉味噌仕立て、飛騨コシヒカリ。",
              highlights: [
                "名物100帖の畳風呂＆冬でも足元ぽかぽかの美肌ぬめり湯と飛騨牛食べ比べ",
                "新設のホワイトイオンバス＆飛騨川を臨むリノベーション和洋室で快適滞在",
                "下呂駅から徒歩数分の好立地＆ファミリーやグループ旅行にも抜群の満足度"
              ]
            },
            {
              id: 4,
              name: "下呂温泉　紗々羅",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15392/15392.jpg",
              rating: 4.15,
              reviews: 1140,
              price: "¥10,120〜",
              access: "JR高山本線「下呂駅」よりタクシーで3分（タクシー代は当社持ち）。中央道　中津川ICよりR257経由で60分。",
              special: "【受賞歴多数！温泉宿・ホテル総選挙女子旅部門1位】源泉かけ流しの美人の湯を堪能。大人の贅沢滞在。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15392%2F15392.html",
              story: "高台の閑静な丘の上に佇み、アンティーク家具やアートが彩るお洒落な隠れ家ホテル「アートと香りの宿 紗々羅（ささら）」。館内に足を踏み入れると、アンティークステンドグラスやヨーロッパ直輸入の家具が配され、女性客やカップルから絶大な人気を集めています。最上階に位置する展望露天風呂やヒノキ・陶器の貸切露天風呂からは、下呂温泉街の夜景と初冬の山々がパノラマで広がり、12月の土曜日には花火が夜空を染める絶景を堪能できます。下呂のトロリとした美肌湯は美白・保湿効果抜群。夕食は厳選されたA5ランク最高級飛騨牛を中心とする創作会席料理。特製の朴葉味噌で香ばしく焼き上げる飛騨牛ステーキや、新鮮な旬魚、飛騨高山の契約農家から届く有機冬野菜など、目にも鮮やかな料理がテーブルを華やかに彩ります。",
              roomTip: "露天風呂付き客室「森の館」または「紗々羅館」特別室。部屋にいながらにして下呂のパノラマ夜景と良質な美肌温泉を独占できる極上のプライベート空間。",
              gourmetTip: "「A5飛騨牛と旬魚の紗々羅創作会席」。A5飛騨牛の朴葉味噌焼き、飛騨牛の握り、旬の鮮魚のお造り、下呂産トマトを使った創作小鉢、地場産スイーツ。",
              highlights: [
                "アートとアンティークの隠れ宿＆高台展望露天から望む冬花火とA5飛騨牛",
                "女性やカップルに人気のアンティーク空間＆特製朴葉味噌ステーキ会席",
                "色浴衣の無料貸出サービス＆夜景を独占するプライベート貸切風呂が人気"
              ]
            },
            {
              id: 5,
              name: "下呂温泉　こころをなでる静寂　みやこ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5606/5606.jpg",
              rating: 4.63,
              reviews: 793,
              price: "¥25,300〜",
              access: "中央道中津川ＩＣを降りＲ２５７で高山方面へ１時間。ＪＲ高山本線下呂駅下車。送迎有",
              special: "下呂温泉の高台に位置し客室18室の隠れ家的宿、露天風呂付き客室や離れ、貸切露天風呂などが人気。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5606%2F5606.html",
              story: "下呂の温泉街から少し離れた閑静な高台、木々に囲まれた約二千坪の敷地にわずか十九室のみを設けた大人の隠れ家「こころをなでる静寂 みやこ」。宿のコンセプトは「大人のための極上の癒やしと静寂」。竹林に囲まれた離れ客室や、アンティークと和が美しく調和した客室には、すべて趣の異なる意匠が施されています。庭園を望む大浴場や露天風呂、そして野趣あふれる陶器の貸切風呂には下呂の名湯が掛け流され、トロトロの湯ざわりが肌をしっとりと包み込みます。夕食は料理長が一品一品心を込めて仕立てる本格的な飛騨牛懐石。飛騨牛の炭火焼きや旬の素材を活かした繊細な前菜、炊きたての飛騨米など、静かな個室ダイニングで誰にも邪魔されず極上の美味に酔いしれることができます。",
              roomTip: "露天風呂付き離れ客室。専用の庭園と源泉露天風呂を備え、静寂の中で初冬の冷気と名湯の温もりを心ゆくまで味わう贅沢な大人の滞在。",
              gourmetTip: "「みやこ特選 飛騨牛懐石」。厳選A5飛騨牛の炭火ステーキ、飛騨川の清流魚の塩焼き、季節の吹き寄せ前菜、朴葉味噌仕立ての小鍋、自家製デザート。",
              highlights: [
                "全19室の大人の隠れ家＆静寂の離れ露天風呂とプライベート個室懐石",
                "竹林に包まれた離れ客室＆料理長が丹精込める厳選飛騨牛炭火焼き会席",
                "日常の喧騒を離れる静謐な時間＆大切な記念日やご褒美旅行に最高峰の格式"
              ]
            }
  ];

  const faqList = [
  {
    "q": "11月・12月の下呂温泉の気候や雪、冬花火の開催時期について教えてください。",
    "a": "下呂温泉は岐阜県の飛騨地方南部に位置し、標高約380m前後の山あいにあります。11月は紅葉の名残と初冬の澄んだ空気が心地よく、最高気温13〜16℃、最低気温3〜7℃前後です。12月に入るとぐっと冷え込みが強まり、最高気温8〜11℃、最低気温-2〜3℃前後となり、時折初雪が舞う白銀の風情が楽しめます。また、例年12月の毎週土曜日（およびクリスマス時期）には飛騨川河畔で「下呂温泉花火物語（冬花火）」が開催され、約10分間にわたり冬の澄み渡る夜空に色鮮やかな花火が打ち上がります。防寒ダウンコートや手袋、マフラーを着用して温かい格好でお出かけください。"
  },
  {
    "q": "名古屋や高山からのアクセス方法と冬道運転の注意点は？スタッドレスタイヤは必要ですか？",
    "a": "名古屋駅からはJR高山本線の特急「ひだ」を利用して下呂駅まで約1時間40分と、乗り換えなしで非常にスムーズに直行できます。高山駅からも特急ひだで約45分です。冬期の雪道運転が不安な方は、特急列車の利用が最も安心でおすすめです。車で訪れる場合は、中央自動車道・中津川ICより国道257号で約60分、または東海環状道・富加関ICより県道・国道41号で約70分です。11月下旬以降は峠道や橋の上で路面凍結（ブラックアイスバーン）や降雪が発生するため、冬用スタッドレスタイヤの装着が必須となります。"
  },
  {
    "q": "下呂温泉の泉質や「美肌の湯」と呼ばれる理由、足湯めぐりについて教えてください。",
    "a": "下呂温泉の泉質は「アルカリ性単純温泉（pH9.2前後）」で、無色透明でほのかな硫黄の香りが漂います。アルカリ性の湯は肌の古い角質をやさしく落とす「天然の石鹸効果」があり、入浴した瞬間に肌がツルツル、ぬめり感のある心地よい感触に包まれることから「美肌の湯」「美人の湯」として日本三名泉の筆頭に数えられています。温泉街には無料の足湯が10箇所以上点在しており、「鷺の足湯」や「ヴィーナスの足湯」など、散策途中に気軽に足湯めぐりが楽しめるのも下呂ならではの魅力です。"
  },
  {
    "q": "11月・12月に下呂温泉で堪能できる冬の味覚や郷土料理は何ですか？",
    "a": "下呂温泉の冬の主役は、全国的なブランド牛の最高峰「飛騨牛（ひだぎゅう）」です。きめ細やかな霜降りと融点の低い上質な脂が特徴で、すき焼き、しゃぶしゃぶ、陶板ステーキ、炙り握り寿司など多彩な調理法で至福の旨味を堪能できます。また、飛騨の伝統郷土料理「朴葉味噌（ほおばみそ）」は、乾燥させた朴の葉の上に特製味噌、ネギ、飛騨牛やキノコを乗せて炭火で香ばしく焼き上げる名物。香ばしい香りが立ち上り、ご飯にも地酒にも相性抜群です。さらに納豆を飼料に育つ「納豆喰豚（なっとくとん）」や下呂特産の温かいトマト丼も人気です。"
  },
  {
    "q": "下呂温泉周辺の初冬のおすすめ観光スポットや見どころは？",
    "a": "白川郷などから移築された国指定重要文化財の合掌造り家屋が立ち並ぶ「下呂温泉合掌村」では、日本の原風景とともに陶芸や和紙漉き体験が楽しめます。また、温泉街の中心にある「温泉寺」は173段の石段を登った高台に位置し、下呂の街並みと冬の山々を一望できる絶景スポット。夜間のライトアップも幽玄です。さらに、江戸時代の豪商の面影を残す温泉街のそぞろ歩きや、飛騨川にかかるいでゆ大橋からの山並みの眺望など、初冬の澄んだ空気の中で風情ある温泉情緒を満喫できます。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://croud-travel.pages.dev/winter-gifu-gero-onsen-hidagyu-bihada-hanabi-stay#article',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://croud-travel.pages.dev/#website',
          'name': 'クラドトラベル',
          'url': 'https://croud-travel.pages.dev/'
        },
        'headline': "【11・12月岐阜・下呂温泉の日本三名泉と冬花火物語】名物飛騨牛すき焼き＆朴葉味噌・極上の美肌ぬめり湯を堪能する老舗名宿5選",
        'description': "11月から12月にかけて、室町時代の儒学者・万里集九や江戸時代の儒学者・林羅山によって有馬・草津と並ぶ「日本三名泉」に称えられた岐阜県の下呂温泉（げろおんせん）は、澄み切った初冬の空気と幻想的な温泉街の明かりが旅情をそそる最高の季節を迎えます。pH9.2前後のアルカリ性単純温泉は、入浴した瞬間に肌がツルツルと滑らかになる天然の石鹸効果を誇る「美肌の湯」。12月に入ると飛騨川河畔で毎週土曜日に「下呂温泉花火物語（冬花火）」が開催され、冬の夜空に大輪の華が咲き誇ります。夕食にはきめ細やかなサシと芳醇な香りがとろける最高級「飛騨牛」のすき焼きや陶板焼き、香ばしい「朴葉味噌（ほおばみそ）」焼き。初冬の飛騨路で極上のぬくもりに浸る厳選名宿5選を徹底解説します。",
        'inLanguage': 'ja',
        'mainEntityOfPage': 'https://croud-travel.pages.dev/winter-gifu-gero-onsen-hidagyu-bihada-hanabi-stay',
        'datePublished': 'T00:00:00+09:00',
        'dateModified': 'T00:00:00+09:00',
        'publisher': {
          '@type': 'Organization',
          'name': 'クラドトラベル編集部',
          'url': 'https://croud-travel.pages.dev/'
        }
      },
      {
        '@type': 'TouristDestination',
        '@id': 'https://croud-travel.pages.dev/winter-gifu-gero-onsen-hidagyu-bihada-hanabi-stay#destination',
        'name': '岐阜・下呂温泉',
        'description': '日本三名泉の一つに数えられる岐阜県の名湯。pH9.2のアルカリ性美肌ぬめり湯、冬花火物語、極上飛騨牛が魅力。',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 35.8087,
          'longitude': 137.2424
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://croud-travel.pages.dev/winter-gifu-gero-onsen-hidagyu-bihada-hanabi-stay#faq',
        'mainEntity': faqList.map((f) => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.a
          }
        }))
      },
      {
        '@type': 'ItemList',
        '@id': 'https://croud-travel.pages.dev/winter-gifu-gero-onsen-hidagyu-bihada-hanabi-stay#hotellist',
        'name': '岐阜下呂温泉のおすすめ名宿5選',
        'itemListElement': hotels.map((h, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': h.name,
          'url': h.url
        }))
      }
    ]
  };


  return (
    <article className="min-h-screen bg-gradient-to-b from-stone-50 via-amber-50/20 to-stone-50 text-stone-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-stone-900 via-zinc-900 to-amber-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-amber-200">
            <Link href="/" className="hover:underline hover:text-white transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:underline hover:text-white transition">特集一覧</Link>
            <span>/</span>
            <span className="text-white font-medium">岐阜・下呂温泉</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-amber-300" />
            11月・12月 日本三名泉＆冬花火・極上飛騨牛すき焼き特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月岐阜・下呂温泉】日本三名泉と冬花火物語
            <span className="block text-amber-300 text-lg sm:text-2xl mt-3 font-normal">
              名物飛騨牛すき焼き＆朴葉味噌・極上の美肌ぬめり湯を堪能する老舗名宿5選
            </span>
          </h1>

          <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-4xl">
            11月から12月にかけて、室町時代の儒学者・万里集九や江戸時代の儒学者・林羅山によって有馬・草津と並ぶ「日本三名泉」に称えられた岐阜県の下呂温泉（げろおんせん）は、澄み切った初冬の空気と幻想的な温泉街の明かりが旅情をそそる最高の季節を迎えます。pH9.2前後のアルカリ性単純温泉は、入浴した瞬間に肌がツルツルと滑らかになる天然の石鹸効果を誇る「美肌の湯」。12月に入ると飛騨川河畔で毎週土曜日に「下呂温泉花火物語（冬花火）」が開催され、冬の夜空に大輪の華が咲き誇ります。夕食にはきめ細やかなサシと芳醇な香りがとろける最高級「飛騨牛」のすき焼きや陶板焼き、香ばしい「朴葉味噌（ほおばみそ）」焼き。初冬の飛騨路で極上のぬくもりに浸る厳選名宿5選を徹底解説します。
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-amber-200">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>ベストシーズン: 11月中旬〜12月下旬（12月毎週土曜の冬花火物語＆美肌湯）</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Utensils className="w-4 h-4 text-amber-300" />
              <span>旬の味覚: 最高ランクA5飛騨牛すき焼き・朴葉味噌・納豆喰豚・飛騨清流魚</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>泉質: アルカリ性単純温泉（pH9.2前後・無色透明・天然石鹸効果の美肌湯）</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月岐阜・下呂温泉】名物飛騨牛すき焼き！名宿5選","item":"https://croud-travel.pages.dev/winter-gifu-gero-onsen-hidagyu-bihada-hanabi-stay"}]}) }}
      />
        
        {/* Intro Highlight Box */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                天下の三名泉・下呂温泉が初冬の旅人に選ばれ続ける理由
              </h2>
              <p className="text-xs sm:text-sm text-stone-500">
                林羅山が絶賛した名湯、トロリとした絹のような美肌湯、冬の夜空を焦がす冬花火
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            飛騨川の清流を中心に、木造の老舗旅館や近代的な温泉リゾートが調和する下呂温泉。千年以上の歴史を誇り、徳川将軍家の儒官・林羅山が「草津、有馬とともに天下の三名泉」と書き記した由緒正しきいで湯です。源泉温度は最高84℃、泉質は滑らかなアルカリ性単純温泉で、湯船に浸かると肌にまとわりつくようなシルキーなとろみがあり、湯上がりは驚くほど肌がもっちりと潤います。11月・12月には山々の木々が凛とした冬景色へと移り変わり、温泉街の夜は湯けむりと温かなガス灯風の街灯が幻想的な風情を醸し出します。12月の週末には澄み切った星空に色鮮やかな花火が打ち上がり、名物の飛騨牛グルメとともに五感すべてを潤す至福のひとときが約束されています。
          </p>
        </section>

        {/* Hotel List */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              厳選5宿の徹底比較
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              初冬の下呂温泉を満喫するおすすめ名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 max-w-2xl mx-auto">
              楽天トラベル最新APIから取得したリアルタイムの宿泊料金・客室情報・アクセス・料理プランを基に、独自の視点で徹底解説します。
            </p>
          </div>

          <div className="space-y-12">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200 hover:shadow-md transition duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image & Quick Specs */}
                  <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] bg-stone-100 overflow-hidden">
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      名宿 #{hotel.id}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="font-extrabold text-stone-900 text-sm">{hotel.rating}</span>
                        <span className="text-[11px] text-stone-500">({hotel.reviews}件)</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-stone-500 block">参考料金 (1名)</span>
                        <span className="font-extrabold text-amber-800 text-sm sm:text-base">{hotel.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-bold text-amber-800 tracking-wide uppercase">
                          {hotel.special}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1 leading-snug">
                          {hotel.name}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {hotel.story}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 bg-stone-50 p-4 rounded-2xl border border-stone-100">
                        <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                          宿泊の魅力とおすすめポイント
                        </span>
                        <div className="grid grid-cols-1 gap-1.5 text-xs text-stone-700">
                          {hotel.highlights.map((hl, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Detailed Tips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="bg-amber-50/50 p-3 rounded-xl border border-amber-100">
                          <span className="font-bold text-amber-900 flex items-center gap-1 mb-1">
                            <Eye className="w-3.5 h-3.5 text-amber-700" />
                            客室選びのヒント
                          </span>
                          <p className="text-stone-600 text-[11px] leading-relaxed">
                            {hotel.roomTip}
                          </p>
                        </div>
                        <div className="bg-red-50/50 p-3 rounded-xl border border-red-100">
                          <span className="font-bold text-red-900 flex items-center gap-1 mb-1">
                            <Utensils className="w-3.5 h-3.5 text-red-700" />
                            冬の美食ガイド
                          </span>
                          <p className="text-stone-600 text-[11px] leading-relaxed">
                            {hotel.gourmetTip}
                          </p>
                        </div>
                      </div>

                      {/* Access info */}
                      <div className="text-[11px] text-stone-500 flex items-start gap-1.5 pt-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                        <span>アクセス: {hotel.access}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="text-xs text-stone-500">
                        ※最新の空室状況や冬期限定プランは楽天トラベルでご確認ください
                      </div>
                      <a 
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-700 to-stone-900 hover:from-amber-800 hover:to-black text-white px-6 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-xs hover:shadow transition duration-200"
                      >
                        <span>楽天トラベルで宿泊プランを見る</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1泊2日モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <Footprints className="w-4 h-4" />
            冬の1泊2日 満喫モデルコース
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            日本三名泉のぬめり湯と飛騨牛・冬花火を満喫する下呂温泉旅
          </h2>
          <div className="space-y-4 border-l-2 border-amber-200 pl-4 sm:pl-6 ml-2 sm:ml-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">1日目</span>
                特急ひだ号で下呂駅へ・足湯めぐりと温泉街散策＆夜空を彩る冬花火物語
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-stone-600">
                12:00 名古屋駅からJR特急「ワイドビューひだ」に乗り込み、木曽川や飛騨川の渓谷美を眺めながら下呂駅へ到着。駅前のいでゆ大橋を渡り、温泉街へ。名物の「鷺の足湯」や「白鷺の湯」周辺を散策し、温かい下呂プリンや飛騨牛温玉握り寿司をテイクアウト。15:00に宿へチェックインし、名物の大浴場や露天風呂でpH9.2のトロトロの美肌湯をじっくり満喫。夕食はとろける霜降り飛騨牛のすき焼きと香ばしい朴葉味噌焼きに舌鼓。20:30からは飛騨川河畔で打ち上がる「下呂温泉花火物語（12月土曜開催）」を鑑賞し、冬の澄んだ夜空に咲く花火の感動に包まれます。
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">2日目</span>
                清流を望む朝風呂・下呂温泉合掌村の初冬風景と飛騨の地酒・朴葉味噌土産
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-stone-600">
                翌朝は飛騨川の川霧が晴れていく清々しい朝露天風呂へ。飛騨コシヒカリと朴葉味噌、温泉卵が並ぶ朝食を楽しみ、10:00にチェックアウト。タクシーまたはバスで「下呂温泉合掌村」へ向かい、白川郷から移築された国指定重要文化財の合掌造り民家と初冬の山里風景を見学。温泉寺の173段の石段を登って下呂の街並みをパノラマで一望。駅前の土産物店で特製朴葉味噌や地酒「天領」「奥飛騨」、飛騨牛しぐれ煮を購入し、午後の特急ひだ号でゆったりと帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Gourmet Section */}
        <section className="bg-gradient-to-br from-stone-900 to-amber-950 text-white rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-300 text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Flame className="w-4 h-4" />
            下呂・飛騨冬の味覚図鑑
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            飛騨の山里が育む三大至宝「飛騨牛」「朴葉味噌」「納豆喰豚」
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-stone-200 text-xs sm:text-sm leading-relaxed">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-amber-400" />
                最高峰の肉質「特選 飛騨牛」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                飛騨の清らかな水と澄んだ空気、職人の熱意によって育てられるブランド黒毛和牛。きめ細やかなサシが網目状に入り、低温でもサッととろける上質な脂と濃厚な赤身の旨味が特徴。冬のすき焼きや陶板ステーキで最高の甘みを楽しめます。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                飛騨の伝統郷土料理「朴葉味噌」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                乾燥させた朴の木の葉に、自家製味噌、刻みネギ、キノコ、飛騨牛を乗せて炭火で焼く冬の伝統料理。熱が加わることで朴の葉の芳しい香りと焦げた味噌の香ばしさが立ち上り、炊きたてのご飯が進んで止まらなくなる飛騨路の味です。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                下呂のブランド豚「納豆喰豚」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                納豆の粉末を飼料に配合して健康に育てられた下呂特産の銘柄豚（なっとくとん）。豚肉特有の臭みが全くなく、柔らかくジューシーな赤身とさっぱりとした甘みのある脂身が絶品。しゃぶしゃぶや角煮、陶板焼きで高い人気を誇ります。
              </p>
            </div>
          </div>
        </section>

        {/* Access & Travel Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <Compass className="w-4 h-4" />
            旅の計画ガイド
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            11月・12月の下呂温泉 交通アクセス＆冬旅のアドバイス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-700" />
                JR特急ひだ号・車でのアクセス
              </h3>
              <p>
                名古屋駅からはJR特急ひだ号で約1時間40分。高山方面からも特急で約45分と、列車でのアクセスが非常に便利で冬道運転の心配もありません。
              </p>
              <p>
                車の場合は中津川ICまたは富加関ICから約60〜70分。11月下旬以降は山間部の路面凍結や積雪の恐れがあるため、必ずスタッドレスタイヤを装着して通行してください。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-amber-700" />
                美肌湯の入浴法と冬花火観賞の防寒
              </h3>
              <p>
                下呂の湯はアルカリ性が強いため、石鹸でゴシゴシ洗わなくても皮脂汚れが落ちます。湯上がり後はシャワーで洗い流さずそのまま上がることで、保湿成分が肌に留まります。
              </p>
              <p>
                12月の夜間に開催される冬花火物語を河畔や屋外で鑑賞する際は、気温が氷点下近くまで下がるため、厚手のダウンコートやカイロを準備して防寒を徹底してください。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の岐阜下呂温泉旅行 FAQ
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 flex items-start gap-2">
                  <span className="text-amber-800 shrink-0 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link Section */}
        <section className="bg-gradient-to-br from-stone-900 to-amber-950 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-amber-300" />
              あわせて読みたい東海・甲信越の冬温泉特集
            </h3>
            <p className="text-xs sm:text-sm text-amber-200">
              歴史ある名湯とブランド牛・冬の絶景を巡る中部エリアの厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-shirakawago-gassho-snow-illumination-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">岐阜・白川郷</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                白川郷合掌造り集落の白銀ライトアップと飛騨牛
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                世界遺産白川郷の雪景色と幻想的な夜間照明、囲炉裏端で味わう飛騨の美味。
              </p>
            </Link>

            <Link 
              href="/winter-nagano-achimura-hirugami-starry-sky-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">長野・昼神温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                阿智村昼神温泉の日本一の星空ナイトツアーと美肌湯
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                冬の澄み渡る夜空に輝く満天の星と信州屈指の強アルカリ美肌温泉。
              </p>
            </Link>

            <Link 
              href="/winter-hyogo-arima-onsen-kinsen-kobe-beef-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">兵庫・有馬温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                有馬温泉の金泉・銀泉と神戸牛すき焼き名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                下呂と並ぶ日本三名泉の金泉・銀泉と極上神戸牛を味わう極楽の旅。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-gifu-gero-onsen-hidagyu-bihada-hanabi-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
