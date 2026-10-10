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
  title: '三重・志摩賢島温泉で過ごす冬の旅（11・12月）！本場伊勢海老！名宿5選',
  description: '11月から12月にかけて、伊勢志摩国立公園の真珠の海「英虞湾（あごわん）」に浮かぶ賢島（かしこじま）周辺は、澄み渡る初冬の青空の下。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '志摩 賢島 温泉 宿泊, 志摩観光ホテル ザ クラシック, 賢島宝生苑, 汀渚 ばさら邸, 都リゾート 志摩 ベイサイドテラス, 志摩観光ホテル ザ ベイスイート, 伊勢海老, あのりふぐ, 的矢かき, 松阪牛, 11月 12月 伊勢志摩',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-mie-shima-kashikojima-onsen-iseebi-anorifugu-matsusaka-stay/"
  },
  openGraph: {
    title: '三重・志摩賢島温泉で過ごす冬の旅（11・12月）！本場伊勢海老！名宿5選',
    description: '11月から12月にかけて、伊勢志摩国立公園の真珠の海「英虞湾（あごわん）」に浮かぶ賢島（かしこじま）周辺は、澄み渡る初冬の青空の下。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-mie-shima-kashikojima-onsen-iseebi-anorifugu-matsusaka-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '三重志摩賢島温泉の英虞湾夕日と伊勢海老名宿'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "三重・志摩賢島温泉の英虞湾夕日と冬の伊勢志摩美食で過ごす冬の旅（11・12月）！本場伊勢海老＆幻のあのりふぐ・極上松阪牛・真珠の海を望む絶景宿5選",
    description: "11月から12月にかけて、伊勢志摩国立公園の真珠の海「英虞湾（あごわん）」に浮かぶ賢島（かしこじま）周辺は、澄み渡る初冬の青空の下、無数の真珠養殖筏が織りなすリアス海岸が夕陽に黄金色へと染まり、1年で最もドラマチックな美しさを放ちます。G7伊勢志摩サミットの舞台となった世界的名門ホテルをはじめ、海を一望する絶景温泉旅館が立ち並ぶ賢島温泉。10月に解禁され冬に甘みとプリプリの食感が極まる「伊勢海老」の姿造りや鬼殻焼き、志摩半島安乗沖で獲れる天然トラフグの最高峰「あのりふぐ」、クリーミーな「的矢かき」、世界の美食家を唸らせる極上の「松阪牛」。英虞湾の穏やかな波音と満天の星空に抱かれ、至高の美味と名湯に酔いしれる厳選宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function WinterMieKashikojimaPage() {
  const hotels = [
            {
              id: 1,
              name: "志摩観光ホテル　ザ　クラシック",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1150/1150.jpg",
              rating: 4.72,
              reviews: 954,
              price: "¥16,005〜",
              access: "近鉄「賢島駅」から徒歩約5分、シャトルバス2分。（定時運行・予約不要）",
              special: "伊勢志摩サミット開催ホテル。落ち着いた空間で時を過ごせるリゾートホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1150%2F1150.html",
              story: "昭和二十六（1951）年の開業以来、昭和天皇をはじめとする皇室の方々や世界の賓客をお迎えし、2016年「G7伊勢志摩サミット」の主会場として世界にその名を轟かせた歴史的リゾート「志摩観光ホテル ザ クラシック」。建築家・村野藤吾氏の手による端正で温かみのあるモダニズム建築と、窓一面に広がる英虞湾のパノラマビューが旅人を優雅に迎えます。夕暮れ時、宿泊者専用ラウンジのテラスから眺める英虞湾の夕景は、海面と真珠筏が茜色から紫紺へと移ろう息をのむ美しさ。そして夕食は、半世紀以上にわたり受け継がれる伝説の「海の幸フランス料理」。濃厚な旨味と香りが凝縮された「伊勢海老アメリカンソース」や、柔らかなアワビのステーキ、極上松阪牛のフィレ肉など、伝統と革新が融合した至高のフルコースは、人生の記念日にふさわしい感動をもたらします。",
              roomTip: "英虞湾を一望するクラシックツイン（リアスウイング）。大きな窓から真珠筏が浮かぶ穏やかな入江と冬のサンセットを優雅に独占できる上質な空間。",
              gourmetTip: "「伝統の海の幸フランス料理・冬の特別コース。」。伊勢海老アメリカンソース、鮑のステーキ焦がしバターソース、松阪牛フィレ肉のポワレ、ソムリエ厳選ワインペアリング。",
              highlights: [
                "G7サミット主会場の歴史と格式＆英虞湾夕日を一望するラウンジと伝説の海の幸フレンチ",
                "名物伊勢海老アメリカンソース＆鮑ステーキと松阪牛フィレ肉の伝統フルコース",
                "近鉄観光特急しまかぜ終点賢島駅至近＆大人の記念日や一生の思い出に選ばれる名門"
              ]
            },
            {
              id: 2,
              name: "賢島宝生苑",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15716/15716.jpg",
              rating: 4.47,
              reviews: 2596,
              price: "¥14,500〜",
              access: "近鉄賢島駅下車　徒歩7分、無料送迎バス3分／伊勢自動車道　伊勢西ＩＣより約４０分",
              special: "海を一望する絶景の天然温泉が好評＆全室オーシャンビュー！志摩スペイン村へはお車で約１５分",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15716%2F15716.html",
              story: "英虞湾の波打ち際に寄り添うように建ち、滝の流れる広大なアトリウムロビーと和の気品にあふれる伊勢志摩屈指の大型温泉旅館「賢島宝生苑（ほうじょうえん）」。宿の最大の誇りは、朝なぎ・夕なぎと名付けられた庭園露天風呂。地下約1,800mから湧き出る自家源泉「朝なぎの湯」は、三重県下でも希少な良質のナトリウム-塩化物泉で、肌になめらかに馴染む美肌効果とともに、身体の芯までポカポカと温めてくれます。露天風呂の湯船の向こうには静かな英虞湾と真珠筏が広がり、夕暮れ時には海と空が茜色に溶け合う絶景の湯浴み絵巻が展開します。夕食は伊勢志摩の豊かな海の幸を贅沢に盛り込んだ本格和会席。ぷりぷりの活伊勢海老のお造りや香ばしい宝楽焼き、冬に旬を迎える的矢かき、そして霜降りの松阪牛すき焼きなど、伊勢志摩の美味の粋を余すところなく堪能できます。",
              roomTip: "華陽棟の海側和室または露天風呂付き客室。高層階から英虞湾の雄大なリアス海岸のパノラマを見晴らすことができ、朝日のきらめきから夕景まで絶景三昧。",
              gourmetTip: "「冬の伊勢志摩味覚三昧会席」。活伊勢海老の姿造り、伊勢海老具足煮、焼き鮑、的矢かきの陶板焼き、とろける松阪牛すき焼き小鍋、伊勢海老出汁の味噌汁。",
              highlights: [
                "英虞湾に面した庭園露天風呂「朝なぎ・夕なぎの湯」＆活伊勢海老と松阪牛の本格和会席",
                "ぷりぷり活伊勢海老姿造り＆焼き鮑と的矢かき・霜降り松阪牛すき焼きの贅沢",
                "真珠筏が浮かぶ絶景庭園露天風呂＆ファミリーや三世代旅行に安心の和風大型旅館"
              ]
            },
            {
              id: 3,
              name: "汀渚　ばさら邸",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108260/108260.jpg",
              rating: 4.63,
              reviews: 304,
              price: "¥44,000〜",
              access: "賢島駅よりお車にて５分。賢島駅まで無料送迎を行っております。電車でお越しのお客様はご利用くださいませ。",
              special: "英虞湾を見渡す高台でゆらり気まま旅。旅のわがまま叶えてくれる、特別な一日。それが「汀渚　ばさら邸」。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108260%2F108260.html",
              story: "英虞湾を望む四千坪もの広大な高台の敷地に、わずか全二十室の離れ客室のみを配した究極のプライベートヴィラ＆温泉リゾート「汀渚 ばさら邸（ていしょ ばさらてい）」。宿の全客室には、客室専用の広々とした露天風呂が完備され、英虞湾の静かな入り江や風にそよぐ木々を眺めながら、誰にも邪魔されない完全なプライベート湯浴みが叶います。さらに敷地内には海にせり出すような絶景貸切露天風呂「天の鏡」をはじめとする趣異なる三つの貸切風呂が点在。夕食は個室ダイニング「漣（さざなみ）」でいただく、志摩の恵みを極限まで昇華させた「志摩遊食会席」。伊勢湾・熊野灘の漁港から毎朝水揚げされる新鮮な伊勢海老や天然魚、冬の幻の美味「あのりふぐ」、志摩産の旬野菜、そして最高ランクの松阪牛を贅沢に織り交ぜた料理は、美食通の感性を刺激してやみません。",
              roomTip: "海里離れまたは別邸「海」の露天風呂付き客室。広いウッドテラスに源泉露天風呂とデイベッドが備わり、英虞湾のさざ波を聞きながら至高の時を過ごせます。",
              gourmetTip: "「ばさら極み冬会席」。活伊勢海老の薄造り、冬のあのりふぐ鉄刺・唐揚げ、炭火焼き鮑、最高峰A5松阪牛サーロインステーキ、自家製デザート。",
              highlights: [
                "4000坪の敷地に全室露天風呂付き離れ客室＆海を望む貸切露天「天の鏡」と志摩遊食会席",
                "活伊勢海老薄造りと冬の天然あのりふぐ鉄刺＆極上A5松阪牛サーロインステーキ",
                "誰にも邪魔されない完全プライベート空間＆大切な人と静かに過ごす最高峰の離れ宿"
              ]
            },
            {
              id: 4,
              name: "都リゾート　志摩　ベイサイドテラス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/27737/27737.jpg",
              rating: 4.56,
              reviews: 1109,
              price: "¥8,385〜",
              access: "近鉄「賢島駅」よりシャトルバスで約７分（無料）／伊勢神宮（内宮）から車で約35分／志摩スペイン村から車で約15分",
              special: "英虞湾の絶景を望む、南欧風リゾート　海辺のオーベルジュ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27737%2F27737.html",
              story: "英虞湾を見下ろす丘の上に建ち、白壁の回廊と青い海、色鮮やかな瓦屋根がまるでスペイン・アンダルシア地方の海辺のリゾートを彷彿とさせる南欧風ホテル「都リゾート 志摩 ベイサイドテラス」。日本にいながら地中海のリゾートにトリップしたかのような異国情緒あふれる優美な空間が広がり、カップルや女子旅に絶大な人気を誇ります。敷地内にはテラス付きの客室や屋外プール、エステサロンが揃い、大浴場には伊勢志摩温泉が引かれ、旅の疲れを心地よく癒やしてくれます。夕食は英虞湾を望むフレンチレストラン「アシュドール」で味わうエレガントなディナーコース。冬が旬の伊勢海老や新鮮な魚介、地元三重の厳選野菜、松阪牛をフレンチの洗練された技法で美しく仕立てたプレートは、目にも舌にも鮮やかな喜びをもたらします。異国情緒と温泉、絶景が一つになった贅沢な滞在が楽しめます。",
              roomTip: "オーシャンビューツインまたはメゾネット客室。バルコニーから英虞湾のパノラマが一望でき、南欧調の上品なインテリアが非日常のリゾート気分を高めます。",
              gourmetTip: "「伊勢志摩フレンチコース」。伊勢海老のポワレ・柑橘のソース、的矢かきと冬野菜のエチュベ、松阪牛のグリル赤ワインソース、パティシエ特製季節デセール。",
              highlights: [
                "地中海アンダルシア調の異国情緒リゾート＆英虞湾一望テラスと華やかな伊勢志摩フレンチ",
                "伊勢海老ポワレと的矢かきエチュベ＆松阪牛赤ワインソースが奏でる洗練の一皿",
                "白壁と青い海が広がるリゾート空間＆女子旅やカップルステイに人気の南欧風ホテル"
              ]
            },
            {
              id: 5,
              name: "志摩観光ホテル　ザ　ベイスイート",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/105964/105964.jpg",
              rating: 4.87,
              reviews: 298,
              price: "¥25,509〜",
              access: "近鉄「賢島駅」まで個別送迎にて約3分（電車の到着時間をご連絡ください）、徒歩約10分。",
              special: "伊勢志摩サミット開催ホテル。すべてのお部屋がスイートルーム。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F105964%2F105964.html",
              story: "英虞湾の入り江を望む絶好の岬に位置し、全五十室すべてが百平米を超える広々としたスイートルーム仕立てという贅の極みを追求した最高峰ホテル「志摩観光ホテル ザ ベイスイート」。チェックインからチェックアウトまで、洗練されたコンシェルジュによる上質なホスピタリティが約束され、大人のための静謐な時間が流れます。最上階の屋上庭園やクラブラウンジからは、英虞湾の島々と真珠筏、夕暮れに黄金色へと染まる海原のパノラマが一望のもと。夕食はフレンチレストラン「ラ・メール」で供されるミシュラン星付きの美食。伊勢志摩の豊かな海の恵みを知り尽くしたシェフが紡ぎ出す伊勢海老のビスクや鮑料理、松阪牛のポワレは、日本が世界に誇る至高のガストロノミー。記念日や人生の節目を彩る、これ以上ない極上の冬旅がここにあります。",
              roomTip: "コーナースイートまたはベイスイート。ゆったりとしたリビングとバルコニーを備え、大きなピクチャーウィンドウから英虞湾の夕日絵巻を贅沢に眺望。",
              gourmetTip: "「ラ・メール 至高の冬のガストロノミー」。伊勢海老の濃厚ビスク、伊勢志摩産鮑のステーキ・トリュフソース、極上松阪牛フィレ肉のロティ、グラン・クリュワイン。",
              highlights: [
                "全室100平米超スイートルーム仕立て＆最上階からのパノラマ絶景と至高のフレンチ「ラ・メール」",
                "濃厚伊勢海老ビスク＆伊勢志摩産鮑のトリュフソースと松阪牛ロティの世界的美食",
                "全室スイートの圧倒的ラグジュアリー＆世界標準のホスピタリティに包まれる特別な旅"
              ]
            }
  ];

  const faqList = [
  {
    "q": "11月・12月の志摩・賢島温泉の気候や気温、英虞湾の夕日の見どころは？",
    "a": "志摩地方は黒潮の影響を受ける温暖な海洋性気候のため、冬でも雪が降ることは極めて稀で、日中は比較的過ごしやすいのが特徴です。11月の最高気温は15〜19℃、最低気温は7〜11℃。12月でも最高気温は11〜15℃、最低気温は2〜6℃前後です。特に11月から12月は空気が澄み渡り、英虞湾に沈む夕日が1年で最も鮮やかに輝く季節。真珠養殖筏のシルエットと穏やかな水面が真紅や黄金色に染まるマジックアワーは感動的です。ただし夕暮れ以降は海風で肌寒くなるため、風を通しにくいコートやストール、マフラーをご用意ください。"
  },
  {
    "q": "大阪・名古屋・京都方面から賢島温泉へのアクセス方法は？観光特急「しまかぜ」とは？",
    "a": "賢島への旅情を格段に高めてくれるのが、近鉄が誇るプレミアム観光特急「しまかぜ」です。大阪難波駅、近鉄名古屋駅、京都駅から賢島駅まで直通で運行されており、本革シートのプレミアムシートやサロン席、カフェ車両で沿線のスイーツや地ビールを楽しみながら約2時間〜2時間半でアクセスできます。終点の賢島駅からは各旅館の送迎バスが運行しており、徒歩圏内の宿も多数あります。車の場合は伊勢自動車道「伊勢西IC」より伊勢道路（県道32号）経由で約40分。冬期も凍結の心配はほぼなく、快適なドライブが楽しめます。"
  },
  {
    "q": "冬の伊勢志摩・賢島で味わうべき四大グルメ（伊勢海老・あのりふぐ・的矢かき・松阪牛）とは？",
    "a": "伊勢志摩の冬は日本有数の食材の宝庫です。①「伊勢海老」：10月に漁が解禁され、水温が下がる11〜12月は身が引き締まり甘みが凝縮。透き通る活造り、香ばしい鬼殻焼き、出汁の効いた味噌汁で堪能できます。②「あのりふぐ」：志摩半島の安乗岬沖で獲れる1kg以上の天然トラフグで、冬限定の極上グルメ。弾力ある身の歯ごたえと上品な旨味は下関ふぐにも引けを取りません。③「的矢かき」：紫外線殺菌浄化技術で生食できる極上牡蠣で、渋みがなく甘みとコクが際立ちます。④「松阪牛」：言わずと知れた三重の最高峰黒毛和牛。すき焼きや陶板ステーキ、フレンチのメインで口の中で至福にとろけます。"
  },
  {
    "q": "賢島温泉の泉質や特徴、美肌効果について教えてください。",
    "a": "賢島温泉（伊勢志摩温泉）の源泉は、地下約1,800mから湧き出る「ナトリウム-塩化物温泉（低張性・弱アルカリ性・高温泉）。」などです。海に近い温泉ならではの豊富な塩分成分が特徴で、入浴すると肌の表面に塩分の薄い膜が形成されて水分の蒸発を防ぎます。抜群の保温効果と保湿効果を誇り、「温まりの湯」「美肌の湯」として親しまれています。冷え性、神経痛、筋肉痛、慢性皮膚病、疲労回復に優れた効能があり、冬の潮風を感じながら露天風呂に浸かると、身体の芯から温まり旅の疲れを優しく解き放ちます。"
  },
  {
    "q": "賢島温泉周辺の初冬のおすすめ観光スポットやモデルコースは？",
    "a": "まず外せないのが、英虞湾を一望する標高140mの「横山展望台（天空カフェテラス）」。木製デッキから見下ろすリアス海岸のパノラマ絶景は圧巻です。また、賢島港から出航する「賢島エスパーニャクルーズ」では、帆船型の船で真珠養殖筏が連なる美しい海を優雅に巡ることができます。フォトジェニックな白壁の街並みが広がる「志摩地中海村」や、車で約40分の「伊勢神宮（内宮・外宮）」でのおかげ横丁散策・初冬参拝と組み合わせるのが王道のモデルコースです。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://croud-travel.pages.dev/winter-mie-shima-kashikojima-onsen-iseebi-anorifugu-matsusaka-stay#article',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://croud-travel.pages.dev/#website',
          'name': 'クラドトラベル',
          'url': 'https://croud-travel.pages.dev/'
        },
        'headline': "【11・12月三重・志摩賢島温泉の英虞湾夕日と冬の伊勢志摩美食】本場伊勢海老＆幻のあのりふぐ・極上松阪牛・真珠の海を望む絶景宿5選",
        'description': "11月から12月にかけて、伊勢志摩国立公園の真珠の海「英虞湾（あごわん）」に浮かぶ賢島（かしこじま）周辺は、澄み渡る初冬の青空の下、無数の真珠養殖筏が織りなすリアス海岸が夕陽に黄金色へと染まり、1年で最もドラマチックな美しさを放ちます。G7伊勢志摩サミットの舞台となった世界的名門ホテルをはじめ、海を一望する絶景温泉旅館が立ち並ぶ賢島温泉。10月に解禁され冬に甘みとプリプリの食感が極まる「伊勢海老」の姿造りや鬼殻焼き、志摩半島安乗沖で獲れる天然トラフグの最高峰「あのりふぐ」、クリーミーな「的矢かき」、世界の美食家を唸らせる極上の「松阪牛」。英虞湾の穏やかな波音と満天の星空に抱かれ、至高の美味と名湯に酔いしれる厳選宿5選を徹底解説します。",
        'inLanguage': 'ja',
        'mainEntityOfPage': 'https://croud-travel.pages.dev/winter-mie-shima-kashikojima-onsen-iseebi-anorifugu-matsusaka-stay',
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
        '@id': 'https://croud-travel.pages.dev/winter-mie-shima-kashikojima-onsen-iseebi-anorifugu-matsusaka-stay#destination',
        'name': '三重・志摩賢島温泉（英虞湾）',
        'description': '伊勢志摩国立公園・英虞湾に浮かぶ真珠の島。夕日百選のリアス海岸絶景と伊勢海老、あのりふぐ、的矢かき、松阪牛が魅力。',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 34.3092,
          'longitude': 136.8181
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://croud-travel.pages.dev/winter-mie-shima-kashikojima-onsen-iseebi-anorifugu-matsusaka-stay#faq',
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
        '@id': 'https://croud-travel.pages.dev/winter-mie-shima-kashikojima-onsen-iseebi-anorifugu-matsusaka-stay#hotellist',
        'name': '三重志摩賢島温泉のおすすめ名宿5選',
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
      <header className="relative bg-gradient-to-r from-stone-900 via-neutral-900 to-amber-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-amber-200">
            <Link href="/" className="hover:underline hover:text-white transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:underline hover:text-white transition">特集一覧</Link>
            <span>/</span>
            <span className="text-white font-medium">三重・志摩賢島温泉</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs sm:text-sm font-semibold tracking-wide">
            <Sun className="w-4 h-4 text-amber-300" />
            11月・12月 英虞湾夕日絶景＆冬の伊勢海老・松阪牛特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">三重・志摩賢島温泉で過ごす冬の旅（11・12月）！英虞湾夕日と冬の伊勢志摩美食 <span className="block text-amber-300 text-lg sm:text-2xl mt-3 font-normal"> 本場伊勢海老＆幻のあのりふぐ・極上松阪牛・真珠の海を望む絶景宿5選 </span></h1>

          <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-4xl">
            11月から12月にかけて、伊勢志摩国立公園の真珠の海「英虞湾（あごわん）」に浮かぶ賢島（かしこじま）周辺は、澄み渡る初冬の青空の下、無数の真珠養殖筏が織りなすリアス海岸が夕陽に黄金色へと染まり、1年で最もドラマチックな美しさを放ちます。G7伊勢志摩サミットの舞台となった世界的名門ホテルをはじめ、海を一望する絶景温泉旅館が立ち並ぶ賢島温泉。10月に解禁され冬に甘みとプリプリの食感が極まる「伊勢海老」の姿造りや鬼殻焼き、志摩半島安乗沖で獲れる天然トラフグの最高峰「あのりふぐ」、クリーミーな「的矢かき」、世界の美食家を唸らせる極上の「松阪牛」。英虞湾の穏やかな波音と満天の星空に抱かれ、至高の美味と名湯に酔いしれる厳選宿5選を徹底解説します。
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-amber-200">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>ベストシーズン: 11月中旬〜12月下旬（冬の伊勢海老・あのりふぐ最盛期＆夕日絶景）</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Utensils className="w-4 h-4 text-amber-300" />
              <span>旬の味覚: 活伊勢海老・天然あのりふぐ・的矢かき・極上松阪牛</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>泉質: ナトリウム-塩化物泉（伊勢志摩温泉・保湿持続の美肌湯）</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月三重・志摩賢島温泉】本場伊勢海老！名宿5選","item":"https://croud-travel.pages.dev/winter-mie-shima-kashikojima-onsen-iseebi-anorifugu-matsusaka-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <Waves className="w-4 h-4" />
            初冬の伊勢志摩・英虞湾の旅情
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
            夕陽に染まる真珠筏のシルエットと名湯、海の幸と松阪牛が織りなす至高の休日
          </h2>
          <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            <p>
              近鉄の観光特急「しまかぜ」に揺られ、終点の賢島駅に降り立つと、そこには潮風と針葉樹の香りが混ざり合う穏やかなリゾートの空気が満ちています。リアス海岸の入り江が複雑に入り組む英虞湾は、かつて世界で初めて真珠の養殖に成功した「真珠の海」。青い水面には無数の真珠筏が規則正しく並び、まるで一幅の絵画のような静けさを湛えています。
            </p>
            <p>
              特に11月から12月にかけての初冬は、大気中の湿度が下がり空が澄み渡るため、夕暮れ時の「マジックアワー」の美しさが年間で最も際立ちます。西の空がオレンジから真紅、そして深い藍色へと刻一刻と変化し、波静かな水面に筏の黒いシルエットが浮かび上がる情景は、息をのむほどの感動を与えてくれます。
            </p>
            <p>
              温泉に浸かりながらこの夕景を愛でた後は、日本屈指の食の宝庫・伊勢志摩が誇る冬の美食の祝宴。秋に解禁された伊勢海老は初冬の水温低下とともに甘みと引き締まりが頂点に達し、ぷりぷりの活造りや香ばしい鬼殻焼きで堪能できます。さらに志摩安乗沖の天然トラフグ「あのりふぐ」、的矢湾の濃厚な「的矢かき」、そして世界の美食家が憧れる「松阪牛」。歴史ある名門フレンチから贅を尽くした和会席まで、冬の志摩賢島には五感を震わせる至福の時間が流れています。
            </p>
          </div>
        </section>

        {/* 3 Pillars Section */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              11月・12月の志摩賢島を満喫する3つの醍醐味
            </h2>
            <p className="text-sm text-stone-500">
              日本の夕日百選、冬の伊勢海老・あのりふぐ、名門リゾートの贅
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                英虞湾の夕日絵巻＆真珠筏の情景
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                空気が澄む初冬こそが最も美しい夕暮れ。真珠養殖筏が連なる波静かな海面が茜色から黄金色へと輝く息をのむ絶景パノラマ。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-700">
                <Fish className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                本場伊勢海老・あのりふぐ・極上松阪牛
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                冬に甘みが極まる活伊勢海老の姿造りや鬼殻焼き、安乗沖の天然トラフグ「あのりふぐ」、的矢かき、とろける極上松阪牛の饗宴。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                サミットの舞台＆伊勢志摩温泉の癒やし
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                G7主会場となった志摩観光ホテルなど名門ホテルの至福のもてなし。冷え切った身体を包む良質な塩化物泉の展望露天風呂。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-10">
          <div className="border-b border-stone-200 pb-4">
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              志摩賢島温泉で11月・12月に泊まりたい名湯宿5選
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
                    <div className="absolute top-4 left-4 bg-amber-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs flex items-center gap-1.5 shadow-xs">
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
                          <span className="text-base sm:text-lg font-bold text-amber-900">{h.price}</span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-2xl font-bold text-stone-900 hover:text-amber-800 transition">
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
                        <Sparkle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-stone-800">おすすめの客室・滞在スタイル: </span>
                          <span className="text-stone-600">{h.roomTip}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Utensils className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
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
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
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
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition shadow-xs hover:shadow-md shrink-0"
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
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <Compass className="w-6 h-6 text-amber-800" />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              初冬の志摩賢島を満喫する1泊2日おすすめモデルコース
            </h2>
          </div>
          <div className="space-y-6 text-stone-700">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">1日目</span>
                観光特急しまかぜで賢島へ＆英虞湾クルーズ・黄金の夕日と伊勢海老・松阪牛ディナー
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-stone-600">
                大阪難波、近鉄名古屋、京都駅から近鉄観光特急「しまかぜ」に乗車。プレミアムシートで快適な列車旅を楽しみ、終点の賢島駅へ（約2時間〜2時間半）。賢島港から「賢島エスパーニャクルーズ」に乗船し、真珠養殖筏が連なる美しい英虞湾を海上から優雅に遊覧します。さらに標高140mの横山展望台へ立ち寄り、天空カフェテラスからリアス海岸の大パノラマを一望。15:30に海辺の名旅館・リゾートホテルへチェックイン。温泉露天風呂や宿泊者ラウンジのテラスから、海面と空が茜色に染まる夕日絵巻を鑑賞します。夕食は本場伊勢海老の姿造りや鬼殻焼き、幻の天然あのりふぐ、的矢かき、とろける極上松阪牛の会席料理または伝統の海の幸フレンチを堪能します。
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">2日目</span>
                穏やかな英虞湾の朝風呂・志摩地中海村とお伊勢参り（伊勢神宮内宮散策）
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-stone-600">
                朝日にきらめく英虞湾の水面を眺めながら優雅な朝風呂と美味しい朝食を楽しんだ後、10:00にチェックアウト。白壁とモザイクタイルの街並みがフォトジェニックな「志摩地中海村」を散策し、カフェでゆったりとした時間を過ごします。午後からは車または近鉄特急で伊勢神宮（内宮）へ移動し、初冬の澄み渡る神域を参拝。門前の「おかげ横丁」で名物の赤福ぜんざいや松阪牛握り、伊勢うどんを味わい、伊勢市駅または宇治山田駅より特急列車で充実の帰路に就きます。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Gourmet Section */}
        <section className="bg-gradient-to-br from-stone-900 to-amber-950 text-white rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-300 text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Utensils className="w-4 h-4" />
            伊勢志摩 冬の味覚図鑑
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            真珠の海が育む「伊勢海老」「あのりふぐ」「的矢かき」と「松阪牛」
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-stone-200 text-xs sm:text-sm leading-relaxed">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Waves className="w-4 h-4 text-amber-400" />
                海の王様「伊勢海老」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                10月に漁が解禁され、水温が下がる11〜12月に身の締まりと甘みが最高潮に。半透明のプリプリした活造り、香ばしい殻の香りが食欲をそそる鬼殻焼き、味噌のコクが溶け出す具足煮など、本場ならではの鮮度と圧倒的な美味しさを誇ります。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Fish className="w-4 h-4 text-amber-400" />
                天然トラフグの最高峰「あのりふぐ」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                遠州灘から熊野灘にかけて一本釣りされる体重1kg以上の極上天然トラフグ「あのりふぐ」。冬の荒波で揉まれた身肉は強い弾力と深い甘みを持ち、透き通るてっさや唐揚げ、てっちり鍋で味わう冬の伊勢志摩屈指のプレミアムな味覚です。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                世界の至宝「極上松阪牛」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                伊勢平野の豊かな風土で丹精込めて育てられる黒毛和牛の最高峰「松阪牛」。不飽和脂肪酸が多く含まれるため人の体温で融け出すほど融点が低く、芳醇な和牛香と上品な甘みが口いっぱいに広がります。すき焼きやステーキで至福の瞬間を演出。
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
            11月・12月の志摩賢島 交通アクセス＆冬旅のアドバイス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-700" />
                近鉄特急・車でのアクセス方法
              </h3>
              <p>
                近鉄観光特急「しまかぜ」または「伊勢志摩ライナー」を利用すれば、大阪難波・近鉄名古屋・京都各駅から賢島駅まで乗り換えなしで快適にアクセスできます。各ホテルへは駅より無料送迎バスが運行。
              </p>
              <p>
                車の場合は伊勢道伊勢西ICより伊勢道路経由で約40分。冬期も平地での降雪や積雪は極めて稀で、ノーマルタイヤでも安心して快適なドライブを楽しめます。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-amber-700" />
                気候と防寒・夕日観賞のポイント
              </h3>
              <p>
                海洋性気候のため日中は日差しがあれば比較的温暖ですが、海沿いのため夕方以降は冷たい浜風が吹き込みます。防風性のあるアウターやストールをご用意ください。
              </p>
              <p>
                11月〜12月の英虞湾の日の入り時刻は16時40分〜17時00分頃です。夕日を満喫するために、16時30分前にはチェックインを済ませてテラスや露天風呂にスタンバイすることをおすすめします。
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
            初冬の三重志摩賢島温泉旅行 FAQ
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
              あわせて読みたい東海・三重の冬伊勢海老・冬イルミ特集
            </h3>
            <p className="text-xs sm:text-sm text-amber-200">
              冬の伊勢海老や絶景温泉、イルミネーションを満喫する三重・東海各地の厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-mie-toba-onsen-ise-ebi-matoya-oyster-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">三重・鳥羽温泉郷</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                鳥羽温泉郷の冬の伊勢湾オーシャンビューと伊勢海老会席
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                鳥羽湾を望む絶景露天風呂と解禁直後の伊勢海老・的矢かきを味わう海辺の宿。
              </p>
            </Link>

            <Link 
              href="/winter-mie-nabana-no-sato-illumination-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">三重・桑名</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                なばなの里国内最大級冬イルミネーションと長島温泉
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                光のトンネルと大スケールのイルミ絶景、天然温泉で温まるロマンチック冬旅。
              </p>
            </Link>

            <Link 
              href="/winter-mie-yunoyama-onsen-gozaisho-snow-sohei-nabe-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">三重・湯の山温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                御在所岳の樹氷ロープウェイと湯の山温泉僧兵鍋ステイ
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                白銀の鈴鹿山脈の樹氷と開湯1300年の名湯、名物熱々僧兵鍋を堪能。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-mie-shima-kashikojima-onsen-iseebi-anorifugu-matsusaka-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
