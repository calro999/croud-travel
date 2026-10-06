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
  title: '【11・12月愛媛・道後温泉】名物宇和島鯛めし！名宿5選',
  description: '11月から12月にかけて、三千年の歴史を誇り『日本書紀』や『万葉集』にも記された日本三古湯の筆頭「愛媛・道後温泉（どうごおんせん）」は。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '道後温泉 宿泊, 茶玻瑠, 道後舘, ふなや, 大和屋本店, 古湧園遥, 宇和島鯛めし, 伊予牛, 道後温泉本館 全館営業再開, 11月 12月 道後温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay/"
  },
  openGraph: {
    title: '【11・12月愛媛・道後温泉】名物宇和島鯛めし！名宿5選',
    description: '11月から12月にかけて、三千年の歴史を誇り『日本書紀』や『万葉集』にも記された日本三古湯の筆頭「愛媛・道後温泉（どうごおんせん）」は。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '愛媛道後温泉本館の冬景色とレトロな温泉街'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月愛媛・道後温泉の日本三古湯と冬の瀬戸内味覚】名物宇和島鯛めし＆伊予牛・本館全館営業再開の名湯を巡る名宿5選",
    description: "11月から12月にかけて、三千年の歴史を誇り『日本書紀』や『万葉集』にも記された日本三古湯の筆頭「愛媛・道後温泉（どうごおんせん）」は、保存修理工事を終えて約5年半ぶりに全館営業を再開した「道後温泉本館」を中心に、冬ならではの落ち着いた情緒と美食のハイシーズンを迎えます。源泉温度42〜51度のアルカリ性単純温泉は、肌に刺激の少ない滑らかな泉質で、湯冷めしにくく冬の身体をやさしく温めてくれます。11月・12月は瀬戸内海で潮流に揉まれた真鯛が最も脂を蓄える旬。名物の「宇和島風鯛めし」や香ばしい「松山鯛めし」、とろけるような肉質の「伊予牛（いよぎゅう）」、みかん果汁を飼料に育つ「みかん鰤」。レトロな坊っちゃん列車や松山城城下町の冬散策とともに至福の滞在を叶える厳選名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function WinterEhimeDogoOnsenPage() {
  const hotels = [
            {
              id: 1,
              name: "道後温泉　茶玻瑠",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/17668/17668.jpg",
              rating: 4.08,
              reviews: 2839,
              price: "¥9,900〜",
              access: "私鉄伊予鉄道線道後温泉下車徒歩５分／ＪＲ予讃線松山駅下車タクシー１５分／松山空港から車で３０分",
              special: "道後温泉徒歩1分の好立地！露天風呂からの眺めが自慢",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17668%2F17668.html",
              story: "道後温泉本館のすぐ裏手に位置し、スタイリッシュな和モダンデザインと屋上露天風呂が人気の温泉リゾート「道後温泉 茶玻瑠（ちゃはる）」。宿の最大の自慢は、最上階の10階に設けられた屋上露天風呂「月の湯」「星の湯」。初冬の澄み渡る夜空の下、眼下にライトアップされた道後温泉本館の屋根や松山市街地の夜景、遠く松山城のライトアップをパノラマで一望しながら、道後の名湯に浸かる贅沢はこの上ない感動です。女性風呂にはバラの花びらを浮かべた優雅なバラ風呂も実施。夕食はオープンキッチンを備えたメインダイニングでの創作和洋会席。初冬の瀬戸内海で水揚げされた新鮮な真鯛や伊予牛、地元愛媛の採れたて冬野菜を、フレンチのエッセンスを取り入れた目にも鮮やかな料理で堪能できます。",
              roomTip: "本館ビューのエグゼクティブツインまたは温泉露天風呂付き客室。窓から道後温泉本館を真下に見下ろす唯一無二の絶景ロケーションで贅沢な休日を演出。",
              gourmetTip: "「茶玻瑠 瀬戸内創作会席」。瀬戸内真鯛のカルパッチョ仕立て、伊予牛のグリル特製赤ワインソース、宇和島風鯛めし小鉢、愛媛県産柑橘デザート。",
              highlights: [
                "道後温泉本館徒歩1分＆屋上露天風呂から望む松山夜景と創作和洋会席",
                "女性に人気のバラ露天風呂＆オープンキッチンで仕上げる伊予牛と冬の瀬戸内真鯛",
                "本館ビュー客室からの贅沢な眺望＆カップルや女子旅に大人気のモダンリゾート"
              ]
            },
            {
              id: 2,
              name: "道後温泉　道後舘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10788/10788.jpg",
              rating: 4.66,
              reviews: 2077,
              price: "¥17,050〜",
              access: "◆道後温泉本館まで徒歩５分◆飛鳥乃湯泉は坂道降りてすぐ徒歩３分◆道後温泉駅徒歩７分◆",
              special: "巨匠・黒川紀章が全館を設計。懐しく新しい近代和風空間と本物のおもてなしで、心からの満足をお約束します",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10788%2F10788.html",
              story: "世界的建築家・黒川紀章氏が設計を手掛け、江戸情緒と現代建築のモダンな美が見事に融合した名門旅館「道後温泉 道後舘（どうごかん）」。館内に一歩足を踏み入れると、ロビーを流れる清らかなせせらぎや滝、木と石の温もりあふれる空間美が旅人を温かく出迎えます。大浴場と露天風呂には道後温泉の100%引き込み天然温泉が滔々と注がれ、数寄屋造りの東屋風露天風呂や打たせ湯、寝湯など多彩な湯船で湯浴みを楽しめます。冬の冷たい外気の中で楽しむ露天風呂は、アルカリ性の優しい泉質が肌をしっとりと包み込みます。夕食は料理長が素材を吟味した伝統的な日本料理会席。潮流の速い来島海峡で育った真鯛の兜煮や薄造り、愛媛の誇る黒毛和牛「伊予牛 絹の味」の陶板焼きなど、瀬戸内の至宝を味わい尽くせます。",
              roomTip: "数寄屋造りの純和風客室またはベッドを備えたモダン和洋室。黒川紀章氏の美学が細部に宿る落ち着いた設えで、静寂の中で優雅な時間を過ごせます。",
              gourmetTip: "「道後舘 特選瀬戸内会席」。来島海峡産真鯛の姿造り、伊予牛の朴葉味噌焼き、冬の松山郷土鯛めし、伊予美人（里芋）の揚げ出し、地酒のペアリング。",
              highlights: [
                "黒川紀章氏設計の現代和風建築美＆100%引き込み天然温泉と瀬戸内真鯛会席",
                "数寄屋風露天風呂や寝湯の湯浴み＆来島海峡の真鯛兜煮と伊予牛朴葉味噌焼き",
                "川の流れるロビーラウンジの風情＆大切な家族旅行や記念日に最適な名旅館"
              ]
            },
            {
              id: 3,
              name: "道後温泉　ふなや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/11332/11332.jpg",
              rating: 4.73,
              reviews: 2040,
              price: "¥19,635〜",
              access: "道後温泉駅から徒歩3分 松山ＩＣより車で25分 ＪＲ松山駅前から市内電車で30分 空港からリムジンバスで35分",
              special: "★文人ゆかりの宿・道後一の老舗★　日本庭園には、自然の川が流れ四季折々の風情がお楽しみいただけます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F11332%2F11332.html",
              story: "創業約三九〇余年、寛永四（1627）年の歴史を刻み、夏目漱石や正岡子規、与謝野晶子、そして昭和天皇をはじめとする皇族方をお迎えしてきた道後屈指の最古参名宿「道後温泉 ふなや」。宿の中心には約千五百坪におよぶ広大な自然庭園「詠風庭（えいふうてい）」が広がり、清らかな御手洗川のせせらぎと四季折々の樹木が息を呑む景観を創り出しています。大浴場「道後湯報の湯」「碑めぐりの湯」には、古代檜を使った湯船や野趣あふれる露天風呂が備えられ、アルカリ性単純温泉の柔らかな湯が旅の疲れを優しく解きほぐします。夕食は創業三九〇年の伝統を受け継ぐ正統派の和食会席、または本格フレンチ。旬の真鯛や伊予牛、冬野菜を熟練の料理人が芸術的な一皿に仕立て、庭園の初冬景色を眺めながら優雅に堪能できます。",
              roomTip: "庭園を望む数寄屋造り客室または離れ。歴史ある詠風庭の緑や初冬の木立を間近に眺めながら、皇族や文豪たちが愛した最高峰の格式を肌で実感。",
              gourmetTip: "「ふなや伝統の冬会席」。瀬戸内真鯛と旬鮮魚の五種盛り、伊予牛のフィレステーキ、特製宇和島鯛めし、河豚のたたき小鉢、愛媛特産紅まどんなゼリー。",
              highlights: [
                "創業三九〇余年・夏目漱石や皇族を迎えた格式＆千五百坪の自然庭園と伝統会席",
                "御手洗川が流れる詠風庭散策＆熟練の板前が仕立てる最高峰の伊予牛冬会席",
                "日本最古の歴史が育んだ細やかなおもてなし＆大人の静かなご褒美冬旅に最高峰"
              ]
            },
            {
              id: 4,
              name: "道後温泉　大和屋本店",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13429/13429.jpg",
              rating: 4.61,
              reviews: 2321,
              price: "¥22,324〜",
              access: "ＪＲ『松山駅』より車で約20分・松山ＩＣより車で約２０分／松山空港より車で約３０分",
              special: "慶応4年創業、道後温泉本館徒歩すぐの老舗宿。能舞台「千寿殿」や名物鯛めしの朝食で格式ある滞在を。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13429%2F13429.html",
              story: "創業慶応四（1868）年、道後温泉本館に隣接する一角に佇み、日本の伝統文化を五感で体感できる数寄屋造りの格式ある名旅館「道後温泉 大和屋本店（やまとやほんてん）」。宿の最大の象徴は、館内に本格的な能舞台「千寿殿（せんじゅでん）」を備えていること。毎夕能楽の舞や雅な伝統芸能が披露され、日本文化の奥深さに触れることができます。数寄屋風の情緒あふれる大浴場には、良質な道後の湯が贅沢に注がれ、岩風呂や檜の香り漂う露天風呂で心地よい湯浴みが満喫できます。湯上がり処には道後麦酒（地ビール）や冷茶の無料サービスも用意。夕食は創業百五十余年の伝統が息づく日本料理、フレンチ、中国料理の3つの名匠が腕を振るう贅沢なコース。冬の鯛や伊予牛を使った本格和食会席は、素材の輪郭が際立つ逸品揃いです。",
              roomTip: "数寄屋造りの広々とした本館和室または貴賓室。日本の伝統建築美と現代の快適性が調和し、床の間の掛け軸や障子越しに差し込む柔らかな光に心が安らぎます。",
              gourmetTip: "「大和屋冬の饗宴会席」。瀬戸内海の旬魚お造り、伊予牛ロースのすき焼き仕立て、名物鯛釜飯、甘鯛の道明寺蒸し、松山銘菓タルトを添えた甘味。",
              highlights: [
                "創業慶応四年・館内に本格能舞台完備＆数寄屋造りの趣と道後麦酒サービス",
                "夕刻の能舞台実演＆和洋中3つの名料理人が競演する選べる極上ディナー",
                "道後温泉本館まで徒歩すぐの好立地＆伝統芸能と日本の美意識に浸る文化ステイ"
              ]
            },
            {
              id: 5,
              name: "道後温泉　ホテル古湧園　遥",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/176808/176808.jpg",
              rating: 4.67,
              reviews: 778,
              price: "¥10,890〜",
              access: "道後温泉駅より徒歩にて約５分",
              special: "２０１９年１０月グランドオープン♪『人と環境に優しいホテル』をコンセプトに快適な滞在をご提供します。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176808%2F176808.html",
              story: "「人と環境に優しい」をコンセプトに、道後初のグランドホテルとして生まれ変わったモダンホテル「道後温泉 ホテル古湧園 遥（こわくえん はるか）」。道後温泉本館から徒歩わずか3分、高台の緑に囲まれたロケーションに建ち、屋上階の展望大浴場「遥の湯」からは眼下に道後温泉本館の全景や松山市街地の町並み、遠く瀬戸内海へと続く山並みが広がります。露天風呂には道後温泉の引き込み湯が使用され、風が心地よいスカイビューとともに心身ともにリフレッシュできます。夕食は瀬戸内海の海の幸と愛媛の大地の恵みをふんだんに取り入れたビュッフェ、またはプライベートなダイニングでの季節会席。できたての宇和島鯛めしや伊予牛料理、新鮮な旬魚の舟盛りなど、愛媛の美味しさを余すことなく楽しめます。",
              roomTip: "道後温泉本館を望むパークビューツインまたは露天風呂付き特別室。ワイドな窓からレトロな本館の屋根を見下ろす贅沢なプライベートパノラマビュー。",
              gourmetTip: "「瀬戸内プレミアムビュッフェ＆会席」。名物宇和島風鯛めしの実演コーナー、伊予牛の鉄板焼き、みかん鰤のカルパッチョ、愛媛みかんのスイーツ各種。",
              highlights: [
                "本館を見下ろす展望露天風呂＆人と環境に優しい最新グランドホテルの快適性",
                "全室Wi-Fi完備の洗練された客室＆宇和島鯛めし実演ビュッフェと伊予牛ステーキ",
                "道後散策の拠点として抜群のロケーション＆グループや一人旅にも快適な滞在"
              ]
            }
  ];

  const faqList = [
  {
    "q": "11月・12月の道後温泉の気候や気温、冬の服装のアドバイスは？雪は降りますか？",
    "a": "道後温泉のある愛媛県松山市は瀬戸内海特有の温暖な気候に恵まれており、真冬でも平野部で大雪が積もることは極めて稀です。11月の最高気温は15〜18℃、最低気温は7〜10℃前後と非常に過ごしやすく、快適に温泉街散策が楽しめます。12月に入ると最高気温10〜13℃、最低気温3〜6℃前後となり、朝晩は海風で冷え込みを感じる日が増えます。厚手のウールコートやライトダウンジャケット、マフラーがあれば十分快適に過ごせます。雪道運転の心配もほとんどなく、冬の旅行先として非常にアクセスしやすいエリアです。"
  },
  {
    "q": "松山空港やJR松山駅からのアクセス方法と道後温泉街の移動手段は？",
    "a": "松山空港からは道後温泉駅直行のリムジンバスが運行されており、約40分（大人950円）でアクセス可能です。JR松山駅からは伊予鉄道の市内電車（路面電車）を利用して道後温泉駅まで約25分（またはタクシーで約15分）。道後温泉駅からはレトロな「坊っちゃん列車」も運行されています。道後温泉街はコンパクトにまとまっており、道後温泉本館、飛鳥乃温泉、椿の湯、各ホテルや商店街（道後ハイカラ通り）はすべて徒歩数分〜10分圏内で移動できるため、車がなくても快適に観光を満喫できます。"
  },
  {
    "q": "保存修理工事が完了した「道後温泉本館」と外湯めぐりの楽しみ方を教えてください。",
    "a": "約5年半におよぶ保存修理工事を経て、2024年7月に待望の全館営業再開を果たした重要文化財「道後温泉本館」。11月・12月には初冬の澄んだ空気の中に明治の木造建築が美しく浮かび上がります。本館の「神の湯」「霊の湯」に加えて、飛鳥時代の建築様式を取り入れた「飛鳥乃温泉（あすかのゆ）」、地元の人々に愛される「椿の湯」の3つの外湯をめぐるのが道後の王道スタイル。宿泊先の浴衣と下駄を履いて湯かごを手にそぞろ歩き、温泉街の足湯（放生園など）に立ち寄るのが最高の旅情です。"
  },
  {
    "q": "11月・12月に愛媛・道後温泉で味わうべき冬の味覚やご当地グルメは？",
    "a": "愛媛の冬の味覚の代名詞は「鯛（たい）」です。潮流の激しい来島海峡や宇和海で育った冬の真鯛は脂が乗り、身が引き締まっています。愛媛には二大鯛めしがあり、昆布出汁で丸ごと炊き込む温かい「松山鯛めし（中予風）」と、新鮮な鯛の刺身を生卵・特製タレ・薬味と共にご飯にかける「宇和島鯛めし（南予風）」の両方を食べ比べるのがおすすめ。さらに、キメ細やかな霜降りと柔らかな肉質が自慢の黒毛和牛「伊予牛 絹の味」、愛媛みかんの皮を食べて育つ「みかん鰤（ぶり）」、甘みたっぷりの高級柑橘「紅まどんな」など、冬の愛媛は美食が満載です。"
  },
  {
    "q": "道後温泉周辺の初冬のおすすめ観光・散策スポットは？",
    "a": "温泉街の目の前にある「道後ハイカラ通り（道後商店街）」では、焼きたての坊っちゃん団子やみかんジュースの蛇口体験、今治タオルの専門店巡りが楽しめます。また、ロープウェイまたはリフトで登る「松山城」は、現存十二天守の一つで、天守閣から初冬の松山市街地や瀬戸内海を一望できる絶景スポット。文豪ゆかりの「坂の上の雲ミュージアム」や、国の重要文化財「萬翠荘（ばんすいそう）」など、歴史と文化が息づく城下町散策も初冬の道後旅行にぴったりです。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://croud-travel.pages.dev/winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay#article',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://croud-travel.pages.dev/#website',
          'name': 'クラドトラベル',
          'url': 'https://croud-travel.pages.dev/'
        },
        'headline': "【11・12月愛媛・道後温泉の日本三古湯と冬の瀬戸内味覚】名物宇和島鯛めし＆伊予牛・本館全館営業再開の名湯を巡る名宿5選",
        'description': "11月から12月にかけて、三千年の歴史を誇り『日本書紀』や『万葉集』にも記された日本三古湯の筆頭「愛媛・道後温泉（どうごおんせん）」は、保存修理工事を終えて約5年半ぶりに全館営業を再開した「道後温泉本館」を中心に、冬ならではの落ち着いた情緒と美食のハイシーズンを迎えます。源泉温度42〜51度のアルカリ性単純温泉は、肌に刺激の少ない滑らかな泉質で、湯冷めしにくく冬の身体をやさしく温めてくれます。11月・12月は瀬戸内海で潮流に揉まれた真鯛が最も脂を蓄える旬。名物の「宇和島風鯛めし」や香ばしい「松山鯛めし」、とろけるような肉質の「伊予牛（いよぎゅう）」、みかん果汁を飼料に育つ「みかん鰤」。レトロな坊っちゃん列車や松山城城下町の冬散策とともに至福の滞在を叶える厳選名宿5選を徹底解説します。",
        'inLanguage': 'ja',
        'mainEntityOfPage': 'https://croud-travel.pages.dev/winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay',
        'datePublished': '2026-09-29T00:00:00+09:00',
        'dateModified': '2026-09-29T00:00:00+09:00',
        'publisher': {
          '@type': 'Organization',
          'name': 'クラドトラベル編集部',
          'url': 'https://croud-travel.pages.dev/'
        }
      },
      {
        '@type': 'TouristDestination',
        '@id': 'https://croud-travel.pages.dev/winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay#destination',
        'name': '愛媛・道後温泉',
        'description': '日本三古湯の筆頭。保存修理が完了した道後温泉本館、名物宇和島鯛めし、伊予牛、刺激の少ない美肌名湯が魅力。',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 33.8521,
          'longitude': 132.7865
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://croud-travel.pages.dev/winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay#faq',
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
        '@id': 'https://croud-travel.pages.dev/winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay#hotellist',
        'name': '愛媛道後温泉のおすすめ名宿5選',
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
    <article className="min-h-screen bg-gradient-to-b from-stone-50 via-orange-50/20 to-stone-50 text-stone-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-stone-900 via-neutral-900 to-orange-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-orange-200">
            <Link href="/" className="hover:underline hover:text-white transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:underline hover:text-white transition">特集一覧</Link>
            <span>/</span>
            <span className="text-white font-medium">愛媛・道後温泉</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-200 text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-orange-300" />
            11月・12月 日本三古湯・本館全館営業再開＆宇和島鯛めし特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月愛媛・道後温泉】日本三古湯と冬の瀬戸内味覚
            <span className="block text-orange-300 text-lg sm:text-2xl mt-3 font-normal">
              名物宇和島鯛めし＆伊予牛・本館全館営業再開の名湯を巡る名宿5選
            </span>
          </h1>

          <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-4xl">
            11月から12月にかけて、三千年の歴史を誇り『日本書紀』や『万葉集』にも記された日本三古湯の筆頭「愛媛・道後温泉（どうごおんせん）」は、保存修理工事を終えて約5年半ぶりに全館営業を再開した「道後温泉本館」を中心に、冬ならではの落ち着いた情緒と美食のハイシーズンを迎えます。源泉温度42〜51度のアルカリ性単純温泉は、肌に刺激の少ない滑らかな泉質で、湯冷めしにくく冬の身体をやさしく温めてくれます。11月・12月は瀬戸内海で潮流に揉まれた真鯛が最も脂を蓄える旬。名物の「宇和島風鯛めし」や香ばしい「松山鯛めし」、とろけるような肉質の「伊予牛（いよぎゅう）」、みかん果汁を飼料に育つ「みかん鰤」。レトロな坊っちゃん列車や松山城城下町の冬散策とともに至福の滞在を叶える厳選名宿5選を徹底解説します。
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-orange-200">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Calendar className="w-4 h-4 text-orange-300" />
              <span>ベストシーズン: 11月中旬〜12月下旬（本館全館再開の輝き＆旬の真鯛と紅まどんな）</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Utensils className="w-4 h-4 text-orange-300" />
              <span>旬の味覚: 宇和島鯛めし・松山鯛めし・伊予牛・みかん鰤・愛媛かんきつ</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-orange-300" />
              <span>泉質: アルカリ性単純温泉（無加温・無加水・肌に優しいまろやかな美肌湯）</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Intro Highlight Box */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-orange-50 text-orange-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                本館全館営業再開で輝きを増す！初冬の道後温泉が旅情をそそる理由
              </h2>
              <p className="text-xs sm:text-sm text-stone-500">
                3000年の歴史が息づく名湯、冬の瀬戸内海の旬魚、温暖な気候で楽しむ城下町歩き
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            白鷺が傷を癒やした伝説に始まる道後温泉は、有馬温泉や白浜温泉と並ぶ日本三古湯の一つ。国の重要文化財である「道後温泉本館」は約5年半におよぶ保存修理工事を経て2024年7月に全館営業再開を果たし、初冬の夜にはライトアップされた木造三層楼の美しいシルエットが温泉街の中心で幻想的な輝きを放ちます。冬の道後は瀬戸内特有の穏やかな気候に恵まれ、寒さが厳しすぎないため浴衣と下駄での温泉街散策に最適。本館・飛鳥乃温泉・椿の湯の3つの外湯を巡り、湯上がりに名物の坊っちゃん団子やみかんジュースを味わう時間はまさに至福。さらに冬の瀬戸内海が育む脂の乗った真鯛や黒毛和牛・伊予牛など、舌鼓を打つ極上の郷土美食が旅人を心から満たしてくれます。
          </p>
        </section>

        {/* Hotel List */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              厳選5宿の徹底比較
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              初冬の道後温泉を満喫するおすすめ名宿5選
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
                      <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
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
                        <span className="font-extrabold text-orange-800 text-sm sm:text-base">{hotel.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-bold text-orange-800 tracking-wide uppercase">
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
                              <CheckCircle2 className="w-3.5 h-3.5 text-orange-800 shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Detailed Tips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="bg-orange-50/50 p-3 rounded-xl border border-orange-100">
                          <span className="font-bold text-orange-900 flex items-center gap-1 mb-1">
                            <Eye className="w-3.5 h-3.5 text-orange-700" />
                            客室選びのヒント
                          </span>
                          <p className="text-stone-600 text-[11px] leading-relaxed">
                            {hotel.roomTip}
                          </p>
                        </div>
                        <div className="bg-amber-50/50 p-3 rounded-xl border border-amber-100">
                          <span className="font-bold text-amber-900 flex items-center gap-1 mb-1">
                            <Utensils className="w-3.5 h-3.5 text-amber-700" />
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
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-700 to-stone-900 hover:from-orange-800 hover:to-black text-white px-6 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-xs hover:shadow transition duration-200"
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
          <div className="inline-flex items-center gap-2 text-orange-800 text-sm font-bold bg-orange-50 px-3 py-1 rounded-full">
            <Footprints className="w-4 h-4" />
            冬の1泊2日 満喫モデルコース
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            道後本館の湯めぐりと瀬戸内真鯛・伊予牛を味わう冬の愛媛旅
          </h2>
          <div className="space-y-4 border-l-2 border-orange-200 pl-4 sm:pl-6 ml-2 sm:ml-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold">1日目</span>
                松山空港・JR松山駅から道後温泉へ・道後温泉本館の外湯入浴＆夜景と宇和島鯛めし
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-stone-600">
                12:30 松山空港またはJR松山駅からリムジンバスまたは市内電車で道後温泉駅に到着。駅前のからくり時計と放生園の足湯を見学し、レトロな道後ハイカラ通りを散策。15:00に宿へチェックインし、宿の浴衣に着替えて湯かごを持ち、再開したばかりの「道後温泉本館」へ。保存修理を終えた美しい神の湯で歴史ある名湯を満喫。夕食は宿の個室やレストランで、脂の乗った瀬戸内真鯛のお造りや特製タレと生卵でいただく「宇和島鯛めし」、極上伊予牛ステーキに舌鼓。夜は宿の展望露天風呂からライトアップされた道後本館と松山夜景を眺め、至福の宵を過ごします。
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold">2日目</span>
                朝風呂＆飛鳥乃温泉・松山城のロープウェイ登城と名物みかんスイーツ巡り
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-stone-600">
                翌朝は澄んだ空気の中で朝露天風呂を満喫。朝食後は新名所「飛鳥乃温泉」の開放的な大浴場へ朝湯巡り。10:00にチェックアウト後、市内電車で大街道へ移動し、ロープウェイまたはリフトで松山城へ。現存十二天守の壮大な天守閣から、初冬の瀬戸内海と島々をパノラマで一望。城下町で蛇口から出るみかんジュースを体験し、高級柑橘「紅まどんな」や一六タルト、今治タオルのお土産を購入して帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Gourmet Section */}
        <section className="bg-gradient-to-br from-stone-900 to-orange-950 text-white rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-orange-300 text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Flame className="w-4 h-4" />
            愛媛・伊予冬の味覚図鑑
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            瀬戸内海と四国山地が育む三大至宝「冬の真鯛」「伊予牛」「紅まどんな」
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-stone-200 text-xs sm:text-sm leading-relaxed">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-orange-400" />
                愛媛が誇る二大名物「冬真鯛と鯛めし」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                来島海峡の激流に揉まれて育つ愛媛の真鯛。冬は脂の乗りが最高潮に達し、コリコリとした歯ごたえと甘みが格別です。出汁で炊き上げる伝統の「松山鯛めし」と、新鮮な刺身を生卵・特製醤油ダレに絡めてご飯にのせる「宇和島鯛めし」は必食の美味です。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400" />
                とろける極上の舌触り「伊予牛 絹の味」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                愛媛の温暖な気候と清らかな名水で丹精込めて育てられる黒毛和牛。その名の通り絹のようになめらかな肉質ときめ細やかなサシが特徴で、口に含むと上質な脂がふわりととろけ、赤身の芳醇な旨味が広がります。すき焼きやステーキで至福の味を堪能できます。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-400" />
                ゼリーのような果肉「高級柑橘 紅まどんな」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                11月下旬から12月にかけてのわずか約1ヶ月間しか出回らない愛媛の奇跡の柑橘。外皮が非常に薄く、ゼリーのようにぷるぷるの果肉から果汁が溢れ出します。甘みが極めて強く酸味が穏やかで、冬の道後旅行のデザートや贈答品として圧倒的な人気を誇ります。
              </p>
            </div>
          </div>
        </section>

        {/* Access & Travel Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-orange-800 text-sm font-bold bg-orange-50 px-3 py-1 rounded-full">
            <Compass className="w-4 h-4" />
            旅の計画ガイド
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            11月・12月の道後温泉 交通アクセス＆外湯めぐりのアドバイス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-orange-700" />
                空港・駅からのアクセスと移動の利便性
              </h3>
              <p>
                松山空港からは道後温泉駅直行のリムジンバスで約40分。JR松山駅からも市内電車（路面電車）で約25分と、公共交通機関でのアクセスが極めてスムーズです。
              </p>
              <p>
                温泉街の中心部は道後温泉駅を中心に徒歩で回れるコンパクトな広さのため、レンタカーがなくても一切不自由なく観光を楽しめます。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-orange-700" />
                外湯めぐりと冬の気候・服装
              </h3>
              <p>
                道後温泉は温暖ですが、夜間の湯めぐり時は冷え込みます。宿に用意されている羽織や足袋靴下を着用し、首元にストールを巻いて出かけましょう。
              </p>
              <p>
                道後温泉本館は混雑が予想されるため、午前中の早い時間や夕食直前の時間帯を狙って訪れると比較的スムーズに入浴できます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-orange-800 text-sm font-bold bg-orange-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の愛媛道後温泉旅行 FAQ
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 flex items-start gap-2">
                  <span className="text-orange-800 shrink-0 font-black">Q.</span>
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
        <section className="bg-gradient-to-br from-stone-900 to-orange-950 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-orange-300" />
              あわせて読みたい四国・瀬戸内の冬温泉特集
            </h3>
            <p className="text-xs sm:text-sm text-orange-200">
              歴史ある名湯と瀬戸内の旬魚・ブランド牛を巡る四国各地の厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-kagawa-kotohira-onsen-konpira-olive-beef-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-orange-300 bg-orange-400/20 px-2 py-0.5 rounded-full inline-block">香川・琴平</span>
              <h4 className="text-xs font-bold text-white group-hover:text-orange-200 transition line-clamp-2">
                こんぴら温泉郷の石段参拝とオリーブ牛会席
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                金刀比羅宮の初冬参拝と讃岐の美肌温泉、香川県産オリーブ牛を味わう旅。
              </p>
            </Link>

            <Link 
              href="/winter-tokushima-naruto-onsen-uzushio-naruto-tai-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-orange-300 bg-orange-400/20 px-2 py-0.5 rounded-full inline-block">徳島・鳴門</span>
              <h4 className="text-xs font-bold text-white group-hover:text-orange-200 transition line-clamp-2">
                鳴門温泉の渦潮絶景露天と鳴門鯛・阿波牛
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                大鳴門橋と鳴門海峡を望むオーシャンビュー温泉と名物鳴門鯛のフルコース。
              </p>
            </Link>

            <Link 
              href="/winter-kochi-ashizuri-onsen-ocean-starry-katsuo-tosa-beef-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-orange-300 bg-orange-400/20 px-2 py-0.5 rounded-full inline-block">高知・あしずり温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-orange-200 transition line-clamp-2">
                足摺岬の太平洋パノラマ絶景と戻り鰹・土佐あかうし
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                四国最南端の暖かな冬リゾートと黒潮の絶景露天、極上の土佐グルメ。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-ehime-dogo-onsen-honkan-taimeshi-iyogyu-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
