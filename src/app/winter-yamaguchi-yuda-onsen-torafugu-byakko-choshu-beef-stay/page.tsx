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
  title: '【11・12月山口・湯田温泉】やまぐち和牛燦！名宿5選',
  description: '11月から12月にかけて、室町時代の雅な大内文化と幕末維新の胎動が息づく山口県山口市の「湯田温泉（ゆだおんせん）」は。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '湯田温泉 宿泊, 湯田温泉 古稀庵, 松田屋ホテル, 西の雅 常盤, ユウベルホテル松政, 防長苑, 下関 とらふぐ, やまぐち和牛 燦, 瑠璃光寺五重塔, 白狐の湯, 11月 12月 湯田温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-yamaguchi-yuda-onsen-torafugu-byakko-choshu-beef-stay/"
  },
  openGraph: {
    title: '【11・12月山口・湯田温泉】やまぐち和牛燦！名宿5選',
    description: '11月から12月にかけて、室町時代の雅な大内文化と幕末維新の胎動が息づく山口県山口市の「湯田温泉（ゆだおんせん）」は。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-yamaguchi-yuda-onsen-torafugu-byakko-choshu-beef-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '山口湯田温泉の白狐の湯ととらふぐ名宿'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月山口・湯田温泉の白狐の湯と国宝瑠璃光寺散策】本場下関直送とらふぐフルコース＆やまぐち和牛燦・毎分2000L源泉の名宿5選",
    description: "11月から12月にかけて、室町時代の雅な大内文化と幕末維新の胎動が息づく山口県山口市の「湯田温泉（ゆだおんせん）」は、冬の美食の最高峰「とらふぐ」が旬を迎え、白狐伝説に彩られた名湯がいっそう恋しくなる季節を迎えます。白狐が毎夜傷を癒やしたと伝わる湯田の湯は、1日2000トン・毎分約2000リットルという西日本屈指の湧出量を誇るpH9.1のアルカリ性単純温泉。柔らかく肌になじむアルカリ泉が古い角質をやさしく洗い流し、つるつるの美肌へ導きます。夕食には本場・下関南風泊港から直送される透き通るような「とらふぐ刺し（てっさ）」や熱々の「ふぐちり鍋」、香ばしい「ふぐヒレ酒」、山口の誇る黒毛和牛「やまぐち和牛 燦（きらめき）」。国宝・瑠璃光寺五重塔の初冬風景とともに至福の滞在を約束する厳選名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function WinterYamaguchiYudaPage() {
  const hotels = [
            {
              id: 1,
              name: "やまぐち・湯田温泉　古稀庵",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/109362/109362.jpg",
              rating: 4.64,
              reviews: 196,
              price: "¥34,100〜",
              access: "湯田温泉駅から徒歩で１０分／お車で３分",
              special: "お部屋は露天風呂付和洋室。お料理は地産地味にこだわった“旬菜”会席をお楽しみ下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109362%2F109362.html",
              story: "湯田温泉街の中心にありながら、水庭と四季の木々に囲まれた約二千坪の敷地に全十六室のみを配した至高の隠れ家宿「やまぐち・湯田温泉 古稀庵（こきあん）」。客室はすべて源泉掛け流しの専用露天風呂と開放的なテラスを備え、木漏れ日や水面の揺らぎを感じながら極上のプライベートステイを満喫できます。客室の露天風呂に注がれるのは、湯田の豊かな自家源泉。湯冷めしにくく柔らかな肌触りの湯に浸かりながら、初冬の澄んだ夜空を見上げる時間はまさに至福です。夕食は山口県内外の美食家を魅了する季節の創作会席。冬に最盛期を迎える本場直送のとらふぐ刺しやちり鍋はもちろん、山口県産黒毛和牛の最高峰「やまぐち和牛 燦」の炭火焼き、仙崎や萩の港から届く新鮮な旬魚など、一皿ごとに料理長の繊細な美意識と技が宿ります。大人の記念日や特別な冬旅にこれ以上ない贅沢を約束してくれる最高峰の宿です。",
              roomTip: "水庭に面した「蛍葛」または「紫陽花」など、テラス付き露天風呂付き客室。水庭の静かな水面を眺めながら、好きな時に源泉掛け流しの名湯に浸かる贅沢。",
              gourmetTip: "「冬の特選・極上とらふぐ会席」。職人技が光る薄造りのとらふぐ刺し、熱々ふぐちり鍋、香ばしいふぐ唐揚げ、やまぐち和牛燦のフィレステーキ、熱燗ひれ酒。",
              highlights: [
                "全室テラス付き源泉掛け流し露天風呂完備＆水庭に抱かれる大人の最高峰隠れ宿",
                "極上とらふぐ刺し＆やまぐち和牛燦フィレステーキと熱燗ひれ酒のマリアージュ",
                "完全プライベートなテラス露天＆記念日や特別なご褒美旅行に西日本最高峰の満足度"
              ]
            },
            {
              id: 2,
              name: "湯田温泉　松田屋ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67283/67283.jpg",
              rating: 4.72,
              reviews: 464,
              price: "¥15,632〜",
              access: "ＪＲ山口線　湯田温泉駅から徒歩約１０分／中国自動車道　小郡ＩＣより湯田市街へ１５分",
              special: "維新志士も集いし創業350年の歴史を受け継ぐ宿　～5つ星認定宿～",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67283%2F67283.html",
              story: "創業寛文十五（1675）年、三百四十余年もの悠久の歴史を刻み、西郷隆盛、木戸孝允、坂本龍馬、大久保利通ら幕末の志士たちが密議を凝らした由緒ある名門老舗旅館「松田屋ホテル」。敷地内に広がる回遊式日本庭園には、志士たちが語り合った「維新の湯」や西郷・木戸会見所が今なお当時の姿をとどめ、歴史ファン垂涎の風情が漂います。大浴場や露天風呂、そして歴史の舞台となった名湯には湯田の天然温泉が絶え間なく注がれ、肌にしっとりと吸い付くような上質のアルカリ泉が身体の芯まで温めてくれます。夕食は長州・山口の歴史と伝統が息づく雅な京風会席。冬本番のとらふぐを贅沢に使ったふぐ料理を中心に、萩の甘鯛や萩焼の器に盛られた美しい前菜、山口のブランド牛など、一品一品がまるで芸術品のように美しく仕立てられています。歴史の深淵に思いを馳せながら過ごす冬の夜は格別です。",
              roomTip: "日本庭園を一望する本館または新館和室。窓越しに雪化粧をまとった灯籠や池の錦鯉を眺め、維新の志士たちも愛でた歴史ある庭園美を心ゆくまで堪能。",
              gourmetTip: "「松田屋伝統・冬のとらふぐ会席」。下関直送とらふぐ刺しの大皿盛り、名物ふぐちり鍋、ふぐ皮湯引き、やまぐち和牛の陶板焼き、老舗蔵元「東洋美人」の銘酒。",
              highlights: [
                "創業1675年・維新の志士が集った回遊式庭園＆歴史ある「維新の湯」と京風ふぐ会席",
                "下関直送とらふぐ刺し大皿盛り＆名物ふぐちり鍋と老舗銘酒「東洋美人」の共宴",
                "西郷・木戸・龍馬の歴史ロマン＆雪化粧の日本庭園を眺めて過ごす大人の文化旅"
              ]
            },
            {
              id: 3,
              name: "湯田温泉　西の雅　常盤",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15771/15771.jpg",
              rating: 3.89,
              reviews: 3607,
              price: "¥8,470〜",
              access: "ＪＲ山口線湯田温泉駅より徒歩約10分／中国自動車道小郡ＩＣより約10km（約12分）/宇部空港よりバスで60分",
              special: "おかげさまで創業90周年♪　TVで話題の【女将劇場】連日開催中！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15771%2F15771.html",
              story: "湯田温泉の中心に位置し、名物女将が毎日自ら舞台に立って披露する名物「女将劇場」と、館内に点在する六つの趣異なる湯舟巡りで全国的な人気を誇る温泉旅館「西の雅 常盤（ときわ）」。宿の最大の自慢は、館内に湧き出る豊かな源泉を活かした多彩な温泉施設。竹林に囲まれた露天風呂「竹林の手湯・足湯」や、広々とした大浴場「維新黎明の湯」など、湯田の美肌湯を飽きることなく巡ることができます。夕食は山口の冬の代名詞である「とらふぐフルコース」や、地元長州の美味をふんだんに取り入れた郷土会席。ふぐ刺し、ふぐちり鍋、唐揚げ、ふぐ雑炊と、とらふぐの旨味を余すところなく堪能できます。夜には太鼓演奏やマジックなど熱気あふれる女将劇場が開催され、温泉の癒やしと笑顔が融合した、他では絶対に味わえない温かな思い出が刻まれます。",
              roomTip: "落ち着いた和洋室または広々とした純和風客室。温泉街の情緒を感じながらゆったりと足を伸ばして寛げる居心地の良い空間。",
              gourmetTip: "「とらふぐフルコース＆長州郷土膳」。本場とらふぐ刺し、とらふぐちり小鍋、ふぐ唐揚げ、名物ふぐ雑炊、長州黒かしわの陶板焼き。",
              highlights: [
                "毎夜開催の名物「女将劇場」＆館内6つの多彩な湯巡りと下関とらふぐフルコース",
                "透き通るとらふぐ刺しとふぐちり鍋＆長州黒かしわ陶板焼きとふぐ雑炊の満腹会席",
                "笑いと感動の女将劇場＆グループや家族三世代旅行で忘れられない楽しい思い出"
              ]
            },
            {
              id: 4,
              name: "湯田温泉　ユウベルホテル松政",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/18990/18990.jpg",
              rating: 4.41,
              reviews: 2695,
              price: "¥4,422〜",
              access: "ＪＲ山口線湯田温泉駅より徒歩約１０分／中国自動車道小郡ＩＣより約１０分／ローソンまで徒歩３分",
              special: "贅沢な自家源泉を使用した天然温泉と人気のふぐ会席をお楽しみ下さい。楽天トラベルアワード6年連続受賞！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18990%2F18990.html",
              story: "漂白の俳人・種田山頭火がこよなく愛した温泉の跡地に建ち、山頭火ゆかりの露天風呂「千人湯」で知られる名湯宿「ユウベルホテル松政（まつまさ）」。広々とした大浴場と露天風呂には、湯田温泉の源泉が100%掛け流しでたっぷりと注ぎ込まれ、無色透明の柔らかな湯ざわりと豊かな湯量が温泉通を唸らせます。湯船から立ち上る湯煙とともに、肌が吸い付くように滑らかになる泉質の素晴らしさを全身で実感できます。夕食は料理長が腕によりをかけた本格和会席。冬の味覚である下関直送のとらふぐ刺しはもちろん、山口県産黒毛和牛のすき焼きやステーキ、瀬戸内海と日本海に挟まれた山口県ならではの多彩な鮮魚のお造りなど、ボリューム・味わいともに大満足の献立。リーズナブルなプランから本格ふぐ尽くしまで多彩に揃い、幅広い旅のスタイルに応えてくれます。",
              roomTip: "東館モダン和洋室またはスーペリア和室。機能的なベッドスペースと寛ぎの畳リビングが調和し、清潔感あふれる快適な滞在を提供。",
              gourmetTip: "「冬のふく会席」。職人が美しく菊盛りに引いたとらふぐ刺し、熱々のふぐ鍋、サクサクのふぐ唐揚げ、山口県産牛のすき焼き、地場産米の炊きたてご飯。",
              highlights: [
                "種田山頭火ゆかりの露天風呂「千人湯」＆源泉100%掛け流しの名湯とふぐ刺し会席",
                "職人技の菊盛りふぐ刺し＆サクサクふぐ唐揚げと山口県産牛すき焼きの贅沢膳",
                "モダン和洋室と名湯掛け流し＆カップルや一人旅にも選ばれる安心の老舗ホテル"
              ]
            },
            {
              id: 5,
              name: "湯田温泉　防長苑",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/84548/84548.jpg",
              rating: 3.92,
              reviews: 231,
              price: "¥6,400〜",
              access: "★NEW2025年6月OPEN【こんこんパーク】に最も近い宿泊施設 ～徒歩4分～",
              special: "山陽路屈指の名湯を誇る湯田温泉の美肌の湯。そして真心こもったおもてなしで寛ぐ宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F84548%2F84548.html",
              story: "湯田温泉街の一角、約二千坪の広大な敷地に美しい日本庭園を抱き、静けさとコストパフォーマンスの高さを兼ね備えた隠れた名宿「防長苑（ぼうちょうえん）」。公立共済が運営する宿ならではの行き届いた清潔感と広々とした客室、そして庭園を眺めながらゆったりと入浴できる開放的な大浴場が魅力です。湯船にはもちろん湯田温泉の天然温泉が注がれ、身体の芯までぽかぽかに温まる良質な湯浴みが楽しめます。夕食は旬の素材を大切にした手作りの和食会席。冬期には本場山口ならではのとらふぐ刺しやふぐ鍋が手頃な料金で堪能できるプランが用意され、地元の銘酒とともに気兼ねなく美食に舌鼓を打てます。家族連れやグループ旅行、ビジネスを兼ねた一人旅など、あらゆるシーンで安心して利用できる信頼の温泉宿です。",
              roomTip: "庭園側の広々とした和室（12畳〜）。大きな窓から雪化粧した手入れの行き届いた日本庭園を一望でき、静寂の中でゆったりとした夜を過ごせます。",
              gourmetTip: "「冬の味覚ふぐ御膳」。とらふぐ刺し、ふぐちり小鍋、ふぐ唐揚げ、季節のお造り、茶碗蒸し、山口県産コシヒカリのふぐ雑炊。",
              highlights: [
                "2000坪の庭園を望む静寂な大浴場＆リーズナブルに味わう本場とらふぐ料理と旬膳",
                "本場下関直送とらふぐ刺し＆ふぐちり小鍋と出汁香るふぐ雑炊をお手頃価格で満喫",
                "手入れの行き届いた庭園と清潔な客室＆ビジネス併用の温泉旅やコスパ派に最適"
              ]
            }
  ];

  const faqList = [
  {
    "q": "11月・12月の湯田温泉の気候や気温、服装の注意点は？雪は降りますか？",
    "a": "山口市は内陸寄りの盆地地形のため、冬期は比較的朝晩の冷え込みが強くなります。11月の最高気温は14〜18℃、最低気温は4〜8℃前後ですが、12月に入ると最高気温は9〜12℃、最低気温は0〜3℃近くまで下がります。年によっては12月中旬以降に初雪が降ることがありますが、豪雪地帯のように積もることは稀です。ただし朝晩の冷え込みはしっかりあるため、厚手のコートやダウンジャケット、マフラーなどをご用意ください。温泉街には無料の足湯が多数点在しているため、靴下を脱ぎやすく足拭きタオルを携帯すると足湯巡りを快適に楽しめます。"
  },
  {
    "q": "新山口駅や山口宇部空港からの湯田温泉へのアクセス方法は？",
    "a": "山陽新幹線が停車する「新山口駅」からのアクセスが非常に良好です。新山口駅在来線口から防長バス（湯田温泉・山口大学・県庁前方面行き）に乗れば約20分（運賃約450円）で湯田温泉通りの各停留所に到着します。またJR山口線に乗り換えれば湯田温泉駅まで約20分、駅から温泉街中心部までは徒歩約8〜10分です。山口宇部空港を利用する場合は、湯田温泉直行のリムジンバスが航空便に合わせて運行されており、約40分で温泉街に到着するため、全国各地からのアクセスが極めてスムーズです。"
  },
  {
    "q": "冬の湯田温泉で味わう「本場とらふぐ（ふく）」の旬や特徴、料理内容は？",
    "a": "山口県では福を呼ぶ魚として親しみを込めて「ふく」と呼ばれます。全国のとらふぐが集まる下関南風泊（はえどまり）港から毎日直送される新鮮なとらふぐは、寒さが本格化する11月から2月にかけて最も身が引き締まり、旨味成分のアミノ酸が凝縮されます。職人が大皿に薄く引いた透き通るような「ふぐ刺し（てっさ）」は、自家製ポン酢と安岡ネギ、もみじおろしでいただく至福の味。さらに昆布出汁でふぐのアラと旬野菜を炊く「ふぐちり鍋」、サクサクジューシーな「ふぐ唐揚げ」、炙ったヒレを熱々の日本酒に浸す「ふぐヒレ酒」、旨味が溶け出した出汁で作る締めの「ふぐ雑炊」まで、フルコースで味わうのが醍醐味です。"
  },
  {
    "q": "湯田温泉の泉質や美肌効果、「白狐伝説」の由来について教えてください。",
    "a": "湯田温泉の泉質は「アルカリ性単純温泉（無色透明・低張性アルカリ性高温泉）」で、pHは9.1と非常に高いアルカリ度を誇ります。肌の余分な皮脂や古い角質をやさしく溶かすクレンジング効果があり、入浴後は肌が吸い付くように滑らかになることから「美肌の湯」として名高いです。毎分約2000Lという西日本屈指の湧出量があり、源泉温度は約60〜70℃。室町時代、傷を負った白狐が毎晩寺の池に足を浸して完治したのを見た住職が池を掘ったところ、こんとんと温かい湯が湧き出たという「白狐伝説」が今も温泉街のシンボルとして親しまれています。"
  },
  {
    "q": "湯田温泉周辺の初冬のおすすめ観光・散策スポットは？",
    "a": "最もおすすめの観光スポットは、温泉街から車で約10分の香山公園にある「国宝・瑠璃光寺五重塔」です。室町時代の大内文化の最高傑作であり、京都の醍醐寺、奈良の法隆寺と並ぶ日本三名塔の一つに数えられます。初冬の澄んだ青空や冬木立に映える美しい檜皮葺きの屋根は必見です。また、温泉街の中央には山口市出身の天才詩人「中原中也記念館」や、幕末に志士たちが通った井上馨の生家跡である「井上公園（何遠亭）」があり、歴史と文学の薫り高い散策が楽しめます。街中に6箇所ある無料足湯巡りも湯田ならではの楽しみです。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://croud-travel.pages.dev/winter-yamaguchi-yuda-onsen-torafugu-byakko-choshu-beef-stay#article',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://croud-travel.pages.dev/#website',
          'name': 'クラドトラベル',
          'url': 'https://croud-travel.pages.dev/'
        },
        'headline': "【11・12月山口・湯田温泉の白狐の湯と国宝瑠璃光寺散策】本場下関直送とらふぐフルコース＆やまぐち和牛燦・毎分2000L源泉の名宿5選",
        'description': "11月から12月にかけて、室町時代の雅な大内文化と幕末維新の胎動が息づく山口県山口市の「湯田温泉（ゆだおんせん）」は、冬の美食の最高峰「とらふぐ」が旬を迎え、白狐伝説に彩られた名湯がいっそう恋しくなる季節を迎えます。白狐が毎夜傷を癒やしたと伝わる湯田の湯は、1日2000トン・毎分約2000リットルという西日本屈指の湧出量を誇るpH9.1のアルカリ性単純温泉。柔らかく肌になじむアルカリ泉が古い角質をやさしく洗い流し、つるつるの美肌へ導きます。夕食には本場・下関南風泊港から直送される透き通るような「とらふぐ刺し（てっさ）」や熱々の「ふぐちり鍋」、香ばしい「ふぐヒレ酒」、山口の誇る黒毛和牛「やまぐち和牛 燦（きらめき）」。国宝・瑠璃光寺五重塔の初冬風景とともに至福の滞在を約束する厳選名宿5選を徹底解説します。",
        'inLanguage': 'ja',
        'mainEntityOfPage': 'https://croud-travel.pages.dev/winter-yamaguchi-yuda-onsen-torafugu-byakko-choshu-beef-stay',
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
        '@id': 'https://croud-travel.pages.dev/winter-yamaguchi-yuda-onsen-torafugu-byakko-choshu-beef-stay#destination',
        'name': '山口・湯田温泉',
        'description': '西日本屈指の毎分2000L湧出を誇る白狐伝説の名湯。本場下関直送とらふぐ、やまぐち和牛燦、国宝瑠璃光寺五重塔が魅力。',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 34.1627,
          'longitude': 131.4589
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://croud-travel.pages.dev/winter-yamaguchi-yuda-onsen-torafugu-byakko-choshu-beef-stay#faq',
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
        '@id': 'https://croud-travel.pages.dev/winter-yamaguchi-yuda-onsen-torafugu-byakko-choshu-beef-stay#hotellist',
        'name': '山口湯田温泉のおすすめ名宿5選',
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
    <article className="min-h-screen bg-gradient-to-b from-stone-50 via-rose-50/20 to-stone-50 text-stone-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-stone-900 via-neutral-900 to-rose-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-rose-200">
            <Link href="/" className="hover:underline hover:text-white transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:underline hover:text-white transition">特集一覧</Link>
            <span>/</span>
            <span className="text-white font-medium">山口・湯田温泉</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-200 text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-rose-300" />
            11月・12月 白狐の湯＆本場下関直送とらふぐ特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月山口・湯田温泉】白狐の湯と国宝瑠璃光寺散策
            <span className="block text-rose-300 text-lg sm:text-2xl mt-3 font-normal">
              本場下関直送とらふぐフルコース＆やまぐち和牛燦・毎分2000L源泉の名宿5選
            </span>
          </h1>

          <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-4xl">
            11月から12月にかけて、室町時代の雅な大内文化と幕末維新の胎動が息づく山口県山口市の「湯田温泉（ゆだおんせん）」は、冬の美食の最高峰「とらふぐ」が旬を迎え、白狐伝説に彩られた名湯がいっそう恋しくなる季節を迎えます。白狐が毎夜傷を癒やしたと伝わる湯田の湯は、1日2000トン・毎分約2000リットルという西日本屈指の湧出量を誇るpH9.1のアルカリ性単純温泉。柔らかく肌になじむアルカリ泉が古い角質をやさしく洗い流し、つるつるの美肌へ導きます。夕食には本場・下関南風泊港から直送される透き通るような「とらふぐ刺し（てっさ）」や熱々の「ふぐちり鍋」、香ばしい「ふぐヒレ酒」、山口の誇る黒毛和牛「やまぐち和牛 燦（きらめき）」。国宝・瑠璃光寺五重塔の初冬風景とともに至福の滞在を約束する厳選名宿5選を徹底解説します。
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-rose-200">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Calendar className="w-4 h-4 text-rose-300" />
              <span>ベストシーズン: 11月中旬〜12月下旬（とらふぐ旬本番＆足湯散策の好季）</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Utensils className="w-4 h-4 text-rose-300" />
              <span>旬の味覚: 下関直送とらふぐ刺し・ふぐちり鍋・ひれ酒・やまぐち和牛燦</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-rose-300" />
              <span>泉質: アルカリ性単純温泉（pH9.1・毎分2000L湧出・美肌クレンジング湯）</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月山口・湯田温泉】やまぐち和牛燦！名宿5選","item":"https://croud-travel.pages.dev/winter-yamaguchi-yuda-onsen-torafugu-byakko-choshu-beef-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-rose-800 text-sm font-bold bg-rose-50 px-3 py-1 rounded-full">
            <Landmark className="w-4 h-4" />
            初冬の維新の里・湯田温泉の旅情
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
            白狐が導いた美肌の名湯と維新の歴史、下関とらふぐが奏でる冬の祝宴
          </h2>
          <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            <p>
              新山口駅から電車やバスでわずか20分ほど。山口市の市街地にありながら、どこか落ち着いた風情と湯けむりが漂う湯田温泉は、約800年前に傷を負った白狐が池で傷を癒やしていたことから発見されたと伝わる「白狐の湯」です。街のあちこちに愛らしい白狐のモニュメントや6つの無料足湯が整備され、訪れる旅人を温かく迎えてくれます。
            </p>
            <p>
              湯田温泉の誇りは、西日本でもトップクラスを誇る1日2000トン・毎分約2000リットルの豊富な湧出量と、pH9.1という高いアルカリ性を誇る泉質。無色透明でまろやかな湯は、肌表面の皮脂汚れや角質をやさしく落とすクレンジング作用があり、湯上がりは驚くほど肌がしっとりと潤います。幕末には西郷隆盛や木戸孝允、坂本龍馬ら志士たちが集い、明治の日本を夢見ながらこの名湯に浸かりました。
            </p>
            <p>
              そして11月から12月にかけて、湯田温泉の膳を彩る主役はなんといっても「本場下関のとらふぐ」。全国から最高級の天然・養殖ふぐが集結する下関南風泊港から車で1時間圏内という地の利を活かし、活きの良い極上とらふぐが毎朝旅館へと届けられます。熟練の板前が引く美しい「てっさ」、出汁の旨味が染み渡る「てっちり」、香ばしい「ふぐ唐揚げ」や「ひれ酒」。さらに山口の誇る黒毛和牛「やまぐち和牛 燦」のステーキとともに味わう贅沢は、冬の山口旅の最高のハイライトです。
            </p>
          </div>
        </section>

        {/* 3 Pillars Section */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              11月・12月の湯田温泉を満喫する3つの醍醐味
            </h2>
            <p className="text-sm text-stone-500">
              本場とらふぐの極楽、毎分2000Lの白狐美肌湯、幕末の歴史探訪
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-700">
                <Fish className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                本場下関直送「とらふぐフルコース＆ひれ酒」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                冬に旨味が凝縮されるとらふぐ。透き通るてっさ、旨味染み渡るてっちり、サクサク唐揚げ、香ばしい熱燗ひれ酒とふぐ雑炊の贅。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                毎分2000L湧出・pH9.1の白狐美肌湯
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                白狐が傷を癒やした伝説の天然温泉。古い角質を落として肌をしっとり整える高アルカリ泉と、温泉街6箇所の無料足湯巡り。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                国宝瑠璃光寺五重塔＆維新の志士史跡
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                日本三名塔に数えられる大内文化の傑作・瑠璃光寺五重塔。西郷・木戸・龍馬が密議を凝らした松田屋ホテルの庭園など歴史探訪。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-10">
          <div className="border-b border-stone-200 pb-4">
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              湯田温泉で11月・12月に泊まりたい名湯宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-2">
              楽天トラベルAPIより最新の宿データ・宿泊プラン・評価情報を取得して掲載しています
            </p>
          </div>

          <div className="space-y-12">
            {hotels.map((h) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] bg-stone-100">
                    <Image
                      src={h.img}
                      alt={h.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute top-4 left-4 bg-rose-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs flex items-center gap-1.5 shadow-xs">
                      <span>第{h.id}選</span>
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="flex items-center gap-1 text-amber-500 font-bold text-sm bg-amber-50 px-2.5 py-1 rounded-md">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            {h.rating}
                          </span>
                          <span className="text-xs text-stone-500">
                            ({h.reviews.toLocaleString()}件のクチコミ)
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-stone-400 block">参考宿泊料金（1名）</span>
                          <span className="text-base sm:text-lg font-bold text-rose-900">{h.price}</span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-2xl font-bold text-stone-900 hover:text-rose-800 transition">
                        <a href={h.url} target="_blank" rel="noopener noreferrer">
                          {h.name}
                        </a>
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {h.story}
                      </p>
                    </div>

                    <div className="space-y-3 bg-stone-50 p-4 rounded-2xl border border-stone-100 text-xs sm:text-sm">
                      <div className="flex items-start gap-2">
                        <Sparkle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-stone-800">おすすめの客室・滞在スタイル: </span>
                          <span className="text-stone-600">{h.roomTip}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Utensils className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-stone-800">冬の極上グルメ体験: </span>
                          <span className="text-stone-600">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-bold text-stone-700">宿の注目ポイント:</div>
                      <ul className="grid grid-cols-1 gap-1.5 text-xs text-stone-600">
                        {h.highlights.map((hl, hlIdx) => (
                          <li key={hlIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-100">
                      <div className="flex items-center gap-1.5 text-xs text-stone-500 w-full sm:w-auto">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <span className="truncate">{h.access.slice(0, 38)}…</span>
                      </div>
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-rose-800 hover:bg-rose-900 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition shadow-xs hover:shadow-md shrink-0"
                      >
                        <span>空室・料金プランを見る</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1 Night 2 Days Itinerary Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-100">
            <Compass className="w-6 h-6 text-rose-800" />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              初冬の山口湯田温泉を満喫する1泊2日おすすめモデルコース
            </h2>
          </div>
          <div className="space-y-6 text-stone-700">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">1日目</span>
                新山口から直行＆国宝瑠璃光寺五重塔と足湯散策・本場とらふぐ会席
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-stone-600">
                山陽新幹線「新山口駅」より路線バスで約20分、湯田温泉へ到着。まずはタクシーまたはバスで香山公園へ向かい、室町時代の大内文化を象徴する日本三名塔「国宝・瑠璃光寺五重塔」を見学。初冬の澄んだ青空に映える檜皮葺きの美しい屋根を鑑賞します。温泉街へ戻り、詩人・中原中也記念館を訪れた後は、足湯「湯の香通り足湯」や「狐の足あと」でカフェを楽しみながら足湯でリフレッシュ。15:00に老舗温泉旅館へチェックイン。pH9.1の白狐美肌湯に身を委ね、古い角質を洗い流してつるつるの肌触りを実感します。夕食は下関南風泊港直送のとらふぐ刺し、熱々のふぐちり鍋、香ばしいふぐ唐揚げ、やまぐち和牛燦を、芳醇なひれ酒や山口の銘酒「獺祭」とともに満喫します。
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">2日目</span>
                朝霧の露天風呂・井上公園と湯田温泉駅前白狐モニュメント
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-stone-600">
                翌朝は湯煙立ち上る露天風呂で清々しい朝湯へ。ふぐの旨味が溶け出したふぐ雑炊や山口の郷土料理を味わい、10:00にチェックアウト。維新の志士たちが密議を交わした何遠亭がある「井上公園」を静かに散策し、湯田温泉駅前の巨大な白狐「ゆう太」モニュメント（高さ約8m）で記念撮影。名物のお土産「ういろう」や地酒を購入し、新山口駅より山陽新幹線で快適な帰路へと向かいます。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Gourmet Section */}
        <section className="bg-gradient-to-br from-stone-900 to-rose-950 text-white rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-rose-300 text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Fish className="w-4 h-4" />
            山口・長州 冬の味覚図鑑
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            冬の味覚の王様「下関直送とらふぐ」と最高峰銘柄牛「やまぐち和牛燦」
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-stone-200 text-xs sm:text-sm leading-relaxed">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Fish className="w-4 h-4 text-rose-400" />
                本場直送「とらふぐ刺し＆ちり鍋」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                冬に脂と旨味が最高潮に達するとらふぐ。有田焼や萩焼の絵皿が透けて見えるほど薄く引かれた「てっさ」の繊細な歯ごたえ、ゼラチン質たっぷりのアラと冬野菜を煮込む「てっちり」、熱燗に香ばしく炙ったヒレを浮かべる「ひれ酒」は冬の極楽です。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-rose-400" />
                山口県産最高峰「やまぐち和牛 燦」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                山口県の豊かな自然と清流で丹精込めて肥育された黒毛和牛の中でも、肉質等級4等級以上の厳格な基準を満たした最高峰ブランド「燦（きらめき）」。きめ細やかなサシが口の中でふわりと溶け、芳醇なコクと甘みが広がります。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Wine className="w-4 h-4 text-rose-400" />
                世界を魅了する山口の銘酒たち
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                旭酒造の「獺祭（だっさい）」をはじめ、澄川酒造場の「東洋美人」、八百新酒造の「雁木」など、全国屈指の酒処である山口県。フルーティーで香り高い純米大吟醸やキレのある辛口の地酒が、とらふぐ料理の繊細な旨味を最高潮に引き立てます。
              </p>
            </div>
          </div>
        </section>

        {/* Access & Travel Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-rose-800 text-sm font-bold bg-rose-50 px-3 py-1 rounded-full">
            <Compass className="w-4 h-4" />
            旅の計画ガイド
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            11月・12月の湯田温泉 交通アクセス＆冬旅のアドバイス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-rose-700" />
                新幹線・飛行機・バスでのアクセス
              </h3>
              <p>
                山陽新幹線「新山口駅」より防長路線バスで湯田温泉通まで約20分、またはJR山口線で湯田温泉駅まで約20分。山口宇部空港からは直行リムジンバスで約40分と全国からスムーズに直行可能です。
              </p>
              <p>
                車の場合は中国自動車道小郡ICより国道9号経由で約10分。平野部のため冬期も路面積雪は稀ですが、山間部（萩・秋吉台方面）へ向かう場合は凍結に注意してください。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-rose-700" />
                気候と防寒・足湯巡りのコツ
              </h3>
              <p>
                山口盆地は冬の朝晩の冷え込みが強く、12月は最低気温が0℃近くまで下がります。コートやマフラーなどの防寒対策を整えてお出かけください。
              </p>
              <p>
                湯田温泉街には6箇所もの無料足湯があり、散策途中に気軽に利用できます。タオルをバッグに1枚用意しておくと、足元からぽかぽか温まる快適な街歩きが楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-rose-800 text-sm font-bold bg-rose-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の山口湯田温泉旅行 FAQ
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 flex items-start gap-2">
                  <span className="text-rose-800 shrink-0 font-black">Q.</span>
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
        <section className="bg-gradient-to-br from-stone-900 to-rose-950 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-rose-300" />
              あわせて読みたい山陰山陽・山口の冬ふぐ・名湯特集
            </h3>
            <p className="text-xs sm:text-sm text-rose-200">
              冬のとらふぐや歴史情緒、絶景温泉を堪能する山口・山陰山陽各地の厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-yamaguchi-hagi-onsen-fugu-choshu-beef-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-rose-300 bg-rose-400/20 px-2 py-0.5 rounded-full inline-block">山口・萩温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-rose-200 transition line-clamp-2">
                萩温泉郷の城下町冬散策と日本海とらふぐ・長州牛会席
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                白壁となまこ壁が続く世界遺産の城下町と、冬の日本海地魚・名湯を味わう旅。
              </p>
            </Link>

            <Link 
              href="/winter-yamaguchi-nagato-yumoto-onsen-fugu-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-rose-300 bg-rose-400/20 px-2 py-0.5 rounded-full inline-block">山口・長門湯本温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-rose-200 transition line-clamp-2">
                長門湯本温泉の音信川うたかたの冬宵と立ち寄り温泉街
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                リノベーションされた美しい川沿い温泉街と名物恩湯、冬のとらふぐ会席。
              </p>
            </Link>

            <Link 
              href="/winter-yamaguchi-shimonoseki-kawatana-onsen-torafugu-kawarasoba-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-rose-300 bg-rose-400/20 px-2 py-0.5 rounded-full inline-block">山口・下関川棚温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-rose-200 transition line-clamp-2">
                下関川棚温泉の本場とらふぐと熱々名物瓦そばステイ
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                熱した瓦で焼く元祖瓦そばと下関ふく料理、毛利侯ゆかりの青龍伝説の湯。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-yamaguchi-yuda-onsen-torafugu-byakko-choshu-beef-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
