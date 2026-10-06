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
  title: "【11・12月佐賀・唐津呼子温泉の冬の玄界灘と呼子活イカ】極上佐賀牛ステーキ＆唐津城パノラマ・唐津焼の器で味わう海辺美食名宿5選",
  description: "11月から12月にかけて、佐賀県北西部に位置する城下町・唐津と港町・呼子は、玄界灘の冬の荒波が育む極上の海の幸と、唐津城や名勝「虹の松原」を望む絶景が旅人を魅了します。初冬の透き通る身の甘みとコリコリの歯ごたえがたまらない名物「呼子の活イカ（アオリイカ・ヤリイカ）」の透明な姿造りや後造りのサクサク天ぷら、日本屈指のサシの美しさを誇るブランド黒毛和牛「佐賀牛」のステーキ。伝統の「唐津焼」の温もりあふれる器に盛られる料理の数々と、唐津湾の汐湯や天然温泉露天風呂。冬の味覚と歴史・文化が息づく厳選名宿5選を徹底解説します。",
  keywords: '唐津 宿泊, 呼子 宿泊, 唐津シーサイドホテル, 洋々閣, 観光ホテル大望閣, 渚館きむら唐津茶屋, 旅館綿屋, 呼子の活イカ, 佐賀牛, 唐津焼, 唐津城, 11月 12月 唐津',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-saga-karatsu-onsen-yobuko-ika-sagagyu-genkai-stay/"
  },
  openGraph: {
    title: "【11・12月佐賀・唐津呼子温泉の冬の玄界灘と呼子活イカ】極上佐賀牛ステーキ＆唐津城パノラマ・唐津焼の器で味わう海辺美食名宿5選",
    description: "11月から12月にかけて、佐賀県北西部に位置する城下町・唐津と港町・呼子は、玄界灘の冬の荒波が育む極上の海の幸と、唐津城や名勝「虹の松原」を望む絶景が旅人を魅了します。初冬の透き通る身の甘みとコリコリの歯ごたえがたまらない名物「呼子の活イカ（アオリイカ・ヤリイカ）」の透明な姿造りや後造りのサクサク天ぷら、日本屈指のサシの美しさを誇るブランド黒毛和牛「佐賀牛」のステーキ。伝統の「唐津焼」の温もりあふれる器に盛られる料理の数々と、唐津湾の汐湯や天然温泉露天風呂。冬の味覚と歴史・文化が息づく厳選名宿5選を徹底解説します。",
    url: 'https://croud-travel.pages.dev/winter-saga-karatsu-onsen-yobuko-ika-sagagyu-genkai-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '佐賀・唐津呼子温泉の冬の玄界灘と呼子活イカ名宿'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月佐賀・唐津呼子温泉の冬の玄界灘と呼子活イカ】極上佐賀牛ステーキ＆唐津城パノラマ・唐津焼の器で味わう海辺美食名宿5選",
    description: "11月から12月にかけて、佐賀県北西部に位置する城下町・唐津と港町・呼子は、玄界灘の冬の荒波が育む極上の海の幸と、唐津城や名勝「虹の松原」を望む絶景が旅人を魅了します。初冬の透き通る身の甘みとコリコリの歯ごたえがたまらない名物「呼子の活イカ（アオリイカ・ヤリイカ）」の透明な姿造りや後造りのサクサク天ぷら、日本屈指のサシの美しさを誇るブランド黒毛和牛「佐賀牛」のステーキ。伝統の「唐津焼」の温もりあふれる器に盛られる料理の数々と、唐津湾の汐湯や天然温泉露天風呂。冬の味覚と歴史・文化が息づく厳選名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function WinterSagaKaratsuPage() {
  const hotels = [
            {
              id: 1,
              name: "唐津シーサイドホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/52129/52129.jpg",
              rating: 4.59,
              reviews: 2521,
              price: "¥10,300〜",
              access: "ＪＲ　東唐津駅より車にて約３分",
              special: "唐津湾と虹の松原に囲まれた景色と海の幸・山の幸。天然温泉で心身ともにリラックス！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52129%2F52129.html",
              story: "日本三大松原の一つ「虹の松原」に隣接し、唐津湾の雄大な白砂青松の海岸線を独り占めする唐津屈指のハイエンドリゾート「唐津シーサイドホテル」。東館と西館からなる館内は洗練された開放感に満ち、東館最上階のルーフトップには海と空が一体化するインフィニティ温泉露天風呂が広がります。地下深くから湧き出る天然温泉に浸かりながら望む冬の唐津湾は、茜色の夕暮れから満天の星空、朝日にきらめく水平線まで息を呑む絶景の連続です。夕食は鉄板焼き「ファンタジア」または日本料理「松風」。呼子港直送の透明な活イカ姿造りはもちろん、全国の銘柄牛の中でも極めて厳しい基準をクリアした最高峰「佐賀牛」のサーロインやフィレ肉を、シェフが目の前で華麗に焼き上げる至高のディナーに舌鼓を打てます。",
              roomTip: "東館オーシャンビュー客室（クラブフロアまたはバルコニー付きツイン）。大きなガラス窓の向こうに唐津湾と虹の松原が広がり、波音を聴きながら上質な時間を過ごせる特等席。",
              gourmetTip: "「鉄板焼きディナー・極上佐賀牛＆呼子活イカコース」。呼子直送活イカの姿造り、A5佐賀牛ステーキの鉄板焼き、玄界灘産活アワビのグリル、後造りイカ天ぷら、ガーリックライス。",
              highlights: [
                "虹の松原隣接オーシャンフロント＆屋上インフィニティ天然温泉と極上佐賀牛鉄板焼き",
                "透き通る呼子活イカ姿造りとA5佐賀牛ステーキ＆活アワビと後造りイカ天ぷらの贅沢",
                "唐津湾と松原の壮大なパノラマ＆カップルや家族旅行に大人気のハイエンドリゾート"
              ]
            },
            {
              id: 2,
              name: "洋々閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54215/54215.jpg",
              rating: 4.71,
              reviews: 157,
              price: "¥13,200〜",
              access: "JR筑肥・唐津線　唐津駅より車で7分　東唐津駅より車で4分",
              special: "大正の面影に現代建築の美を調和させた木造２階建ての純和風旅館。夕食は玄界灘の新鮮な魚介類の会席。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54215%2F54215.html",
              story: "明治26（1893）年創業、大正期に建てられた木造2階建ての数寄屋造り建築が国の登録有形文化財にも匹敵する風格を湛える名門純和風旅館「洋々閣（ようようかく）」。松林が連なる静かな住宅街に佇み、樹齢数百年の黒松が枝を広げる見事な日本庭園を囲むように廊下が巡らされています。宿の最大の特徴は、唐津焼の人間国宝・中里無庵（十二代中里太郎右衛門）をはじめとする唐津焼の巨匠たちの器が惜しげもなく料理に使われている点です。夕食は純和風の客室でいただく本格会席。玄界灘の冬の荒波で身の締まった天然真鯛やヒラメのお造り、呼子の活イカ、そして極上の佐賀牛のしゃぶしゃぶやステーキが、土味豊かな唐津焼の皿や鉢に美しく盛り付けられ、料理と器の響き合いという日本の美の極致を体験させてくれます。",
              roomTip: "庭園側二階和室。窓の障子を開けると見事な黒松の庭園を見下ろし、磨き込まれた銘木の床柱や欄間の意匠に包まれて日本の伝統美に浸れる名客室。",
              gourmetTip: "「唐津焼の器で愛でる・佐賀牛しゃぶしゃぶ会席」。とろける佐賀牛リブロースのしゃぶしゃぶ、玄界灘天然白身魚の造り、呼子イカの天ぷら、唐津郷土の蒸し物、手作り水菓子。",
              highlights: [
                "明治26年創業数寄屋造り名旅館＆中里太郎右衛門の唐津焼の器で味わう佐賀牛と玄界灘の幸",
                "とろける佐賀牛しゃぶしゃぶと天然白身魚＆土味あふれる唐津焼と響き合う美食の極致",
                "文化人にも愛された静寂と品格＆人生の特別な記念日や本物を知る大人のご褒美旅"
              ]
            },
            {
              id: 3,
              name: "観光ホテル　大望閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40300/40300.jpg",
              rating: 4.38,
              reviews: 562,
              price: "¥22,550〜",
              access: "JR筑肥線西唐津駅下車バスで約30分※呼子バス停より送迎有西九州自動車道二丈バイパス唐津から呼子方面へ名護屋大橋側",
              special: "2023年リニューアル、『呼子のイカ』究極の鮮度で、忘れられない味わいを体感。特別なひとときを",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40300%2F40300.html",
              story: "呼子港を見下ろす緑豊かな高台に建ち、玄界灘の水平線と呼子大橋のドラマチックな造形美をパノラマで望む割烹旅館「観光ホテル 大望閣（たいぼうかく）」。宿の最大の誇りは、館内に備えられた巨大な活魚水槽から直行する本場呼子のイカ料理です。板前が注文を受けてから素早く捌く活イカの姿造りは、皿の上でまだ透き通って色を変え、口に運べば吸盤が舌に吸い付くほどの鮮度。コリコリとした独特の歯ごたえの後に、上品で濃厚な甘みが口いっぱいに広がります。刺身を堪能した後は、耳やゲソをサクサクの天ぷらや香ばしい塩焼きにする「後造り」を熱々で提供。玄界灘を一望する展望大浴場で初冬の海風を感じながら温まった後は、佐賀牛や玄界灘の旬魚介とともに、呼子ならではの豪快な海の恵みを満喫できます。",
              roomTip: "海側展望和室（または和モダン客室）。窓一面に広がる呼子湾と玄界灘の夕景、夜には呼子大橋のライトアップを眺めながらゆったり寛げるお部屋。",
              gourmetTip: "「本場呼子・活イカ会席＆佐賀牛陶板焼き」。透き通る呼子活イカの姿造り、後造りの揚げたてイカ天ぷら、A5佐賀牛の陶板焼き、玄界灘旬魚の荒炊き、名物イカしゅうまい。",
              highlights: [
                "呼子港を見下ろす絶景割烹ホテル＆巨大活魚水槽から直行する本場呼子の透明活イカ会席",
                "皿の上で動く鮮度抜群の呼子活イカ＆サクサク後造り天ぷらと手作りイカしゅうまい",
                "呼子大橋の夜景と広大な水平線＆本場のイカをとことん味わいたい旅人に最高のロケーション"
              ]
            },
            {
              id: 4,
              name: "渚館きむら　唐津茶屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/151309/151309.jpg",
              rating: 4.26,
              reviews: 183,
              price: "¥12,000〜",
              access: "唐津駅よりお車にて約５分",
              special: "明治27年創業。斉藤茂吉・青木繁ゆかりの海辺の宿。唐津名物イカ活造りや玄海の海幸をご用意しております",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F151309%2F151309.html",
              story: "唐津湾に突き出た満島山にそびえる「唐津城（舞鶴城）」を川向こうに望む絶好のリバーサイド＆シーサイドに佇む料理宿「渚館きむら 唐津茶屋」。もともと料理店として創業した歴史を持ち、食通の地元客からも長年親しまれる本格割烹料理が自慢です。館内の大浴場や露天風呂からは、唐津城の堂々たる天守閣と川面に映る城のライトアップが一望。夕食は創業以来の目利きが光る豪華な海鮮会席です。呼子直送の透き通る活イカ姿造りを筆頭に、玄界灘で獲れる寒ビラメや真鯛、脂の乗った寒ブリ、名物手作りのイカしゅうまい、そして肉質柔らかな佐賀牛のステーキなど、佐賀の美味を惜しみなく詰め込んだ贅沢な御膳が旅の夜を豊かに彩ります。",
              roomTip: "唐津城ビュー客室。窓からライトアップされた唐津城の天守と水面に反射する城影を特等席で眺められるロマンチックな和室空間。",
              gourmetTip: "「唐津茶屋名物・呼子活イカ会席＆佐賀牛ステーキ」。透明な呼子活イカ姿造り、ふわふわ手作りイカしゅうまい、佐賀牛サーロインステーキ、旬魚の煮付け、後造り天ぷら。",
              highlights: [
                "唐津城天守閣を正面に望む料理宿＆老舗料亭直営ならではの新鮮活イカと佐賀牛ステーキ",
                "呼子活イカとA5佐賀牛サーロイン＆玄界灘の寒ビラメ・真鯛を堪能する豪華会席",
                "水面に映る唐津城ライトアップ＆観光と美食をバランスよく愉しむアットホームステイ"
              ]
            },
            {
              id: 5,
              name: "からつ温泉　かぐや姫の湯　旅館　綿屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14889/14889.jpg",
              rating: 3.63,
              reviews: 284,
              price: "¥18,340〜",
              access: "福岡空港、JR博多駅よりＪＲ唐津行唐津駅下車、車３分　徒歩１5分／長崎自動車道多久ＩＣより４０分",
              special: "天然温泉と陶芸コーナー新設の和風老舗旅館",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14889%2F14889.html",
              story: "明治9（1876）年創業、唐津城下町の静かな一角に佇み、初代佐賀県知事や文人墨客が定宿とした歴史ある数寄屋造りの老舗旅館「からつ温泉 かぐや姫の湯 旅館 綿屋」。門をくぐると、丹念に手入れされた苔むす日本庭園が広がり、古き良き日本の風情が旅人を優しく包み込みます。宿の名湯「かぐや姫の湯」は、竹林から湧き出たという伝説に由来する天然温泉で、肌にしっとりと吸い付くような柔らかな湯ざわりが特徴。檜の香る大浴場や庭園露天風呂で初冬の冷気に包まれながら温まる時間は至福の極みです。料理は季節の食材を吟味した本格茶懐石風会席。呼子の新鮮なイカをはじめ、玄界灘の白身魚、極上の佐賀牛陶板焼きなど、出汁の旨味を効かせた上品な味付けが老舗ならではの品格を漂わせます。",
              roomTip: "庭園ビュー数寄屋和室。美しい日本庭園の四季の移ろいを縁側から眺め、昭和の名工が手掛けた聚楽壁や障子の細工に囲まれて静かに寛げる歴史あるお部屋。",
              gourmetTip: "「綿屋伝統・季節の懐石膳」。呼子直送イカの活き造り、極上佐賀牛の陶板焼き、玄界灘鮮魚のお造り、手打ち蕎麦、綿屋特製胡麻豆腐、季節の炊き込みご飯。",
              highlights: [
                "明治9年創業の唐津城下町名門旅館＆名湯かぐや姫の湯と日本庭園望む伝統茶懐石膳",
                "活イカ姿造りと極上佐賀牛陶板焼き＆綿屋伝統の出汁香る季節懐石と手打ち蕎麦",
                "歴史息づく名工の数寄屋建築＆日本庭園の静けさと温かな名湯に癒される歴史旅"
              ]
            }
  ];

  const faqList = [
  {
    "q": "呼子の名物「活イカ（活き造り）」とは？冬の11月・12月に味わえるイカの種類は？",
    "a": "呼子の活イカは、玄界灘で一本釣りされたイカを生簀（いけす）で泳がせ、注文を受けてから職人が数分で捌くため、皿の上でも身が透き通り、ピクピクと動く抜群の鮮度で提供されます。呼子では季節によってイカの種類が変わり、11月から12月にかけては「アオリイカ（水イカ）」や冬の「ヤリイカ（ササイカ）」が旬を迎えます。特にアオリイカは「イカの王様」と称され、身が厚く濃厚な甘みと旨味が凝縮しています。透き通る刺身を堪能した後は、残ったゲソやエンペラを塩焼きや揚げたての天ぷら（後造り）にして二度美味しく味わえるのが呼子の醍醐味です。"
  },
  {
    "q": "日本屈指の黒毛和牛「佐賀牛」の特徴と基準の厳しさとは？",
    "a": "「佐賀牛」は、JAグループ佐賀管内の肥育農家で育てられた黒毛和牛のうち、日本食肉格付協会の肉質等級で最高ランクの「5等級」または「4等級」、かつBMS（霜降りの度合い）が「7以上（最大12）」という極めて厳しい基準をクリアしたものだけに許されるブランド名です。全国に数ある銘柄牛の中でもトップクラスの厳格さを誇り、鮮やかな赤身の中にきめ細かく散りばめられた「艶さし（つやさし）」と呼ばれる美しい霜降りが特徴。口に含むと体温で脂が溶け出し、芳醇な香りと上品な甘みが広がります。"
  },
  {
    "q": "11月・12月の唐津・呼子の気候と服装、冬の玄界灘の海風について",
    "a": "唐津市・呼子町は玄界灘に面しているため、11月から12月にかけては北西の季節風が吹き付け、海沿いでは体感温度がぐっと下がります。11月の平均気温は最高16〜19℃、最低8〜12℃前後。12月に入ると最高気温11〜14℃、最低4〜7℃前後となります。雪が積もることは稀ですが、唐津城の天守閣や呼子大橋、波戸岬などの海辺の観光スポットでは冷たい潮風が強いため、風を通さない厚手のコートやダウンジャケット、マフラーをご用意ください。"
  },
  {
    "q": "唐津の歴史と「唐津焼」の魅力とは？宿で唐津焼を体験できる？",
    "a": "唐津は古くから大陸への玄関口として栄え、豊臣秀吉ゆかりの名護屋城跡や、唐津藩の城下町としての歴史が息づく町です。「一楽二萩三唐津」と茶道の世界で称される「唐津焼」は、約400年の歴史を持つ伝統工芸品で、土の素朴な温もりと力強い筆使いの絵唐津、斑唐津、朝鮮唐津などの多彩な釉薬が魅力です。唐津の名門旅館（特に洋々閣など）では、人間国宝をはじめとする有名窯元の唐津焼の器に季節の料理が美しく盛られて提供され、実際に手で触れながら料理を味わうという贅沢な文化体験が楽しめます。"
  },
  {
    "q": "福岡（博多・福岡空港）からの唐津・呼子へのアクセス方法は？",
    "a": "福岡からのアクセスは非常に良好です。福岡空港駅または博多駅から地下鉄空港線に乗車すると、JR筑肥線へ相互直通運転している電車があり、乗り換えなしで「唐津駅」まで約1時間15〜20分でアクセスできます。また、博多バスターミナル・天神から唐津大手口バスセンター行きの高速バス「からつ号」も頻繁に運行されています（約1時間10分）。唐津駅から呼子までは路線バス（昭和バス）で約30分、車なら約25分です。車の場合は、西九州自動車道（前原道路・かもめロード）を利用すれば福岡市内から唐津まで約1時間です。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://croud-travel.pages.dev/winter-saga-karatsu-onsen-yobuko-ika-sagagyu-genkai-stay#article',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://croud-travel.pages.dev/#website',
          'name': 'クラドトラベル',
          'url': 'https://croud-travel.pages.dev/'
        },
        'headline': "【11・12月佐賀・唐津呼子温泉の冬の玄界灘と呼子活イカ】極上佐賀牛ステーキ＆唐津城パノラマ・唐津焼の器で味わう海辺美食名宿5選",
        'description': "11月から12月にかけて、佐賀県北西部に位置する城下町・唐津と港町・呼子は、玄界灘の冬の荒波が育む極上の海の幸と、唐津城や名勝「虹の松原」を望む絶景が旅人を魅了します。初冬の透き通る身の甘みとコリコリの歯ごたえがたまらない名物「呼子の活イカ（アオリイカ・ヤリイカ）」の透明な姿造りや後造りのサクサク天ぷら、日本屈指のサシの美しさを誇るブランド黒毛和牛「佐賀牛」のステーキ。伝統の「唐津焼」の温もりあふれる器に盛られる料理の数々と、唐津湾の汐湯や天然温泉露天風呂。冬の味覚と歴史・文化が息づく厳選名宿5選を徹底解説します。",
        'inLanguage': 'ja',
        'mainEntityOfPage': 'https://croud-travel.pages.dev/winter-saga-karatsu-onsen-yobuko-ika-sagagyu-genkai-stay',
        'datePublished': '2026-09-28T00:00:00+09:00',
        'dateModified': '2026-09-28T00:00:00+09:00',
        'publisher': {
          '@type': 'Organization',
          'name': 'クラドトラベル編集部',
          'url': 'https://croud-travel.pages.dev/'
        }
      },
      {
        '@type': 'TouristDestination',
        '@id': 'https://croud-travel.pages.dev/winter-saga-karatsu-onsen-yobuko-ika-sagagyu-genkai-stay#destination',
        'name': '佐賀・唐津呼子温泉',
        'description': '玄界灘を望む城下町と港町。透明な呼子の活イカ姿造りと最高峰佐賀牛ステーキ、唐津焼の器と美肌温泉が魅力。',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 33.4502,
          'longitude': 129.9686
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://croud-travel.pages.dev/winter-saga-karatsu-onsen-yobuko-ika-sagagyu-genkai-stay#faq',
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
        '@id': 'https://croud-travel.pages.dev/winter-saga-karatsu-onsen-yobuko-ika-sagagyu-genkai-stay#hotellist',
        'name': '佐賀・唐津呼子温泉のおすすめ名宿5選',
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
    <article className="min-h-screen bg-gradient-to-b from-blue-50/40 via-slate-50 to-blue-50/30 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-sky-200">
            <Link href="/" className="hover:underline hover:text-white transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:underline hover:text-white transition">特集一覧</Link>
            <span>/</span>
            <span className="text-white font-medium">佐賀・唐津呼子温泉</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-sky-200 text-xs sm:text-sm font-semibold tracking-wide">
            <Waves className="w-4 h-4 text-sky-300" />
            11月・12月 冬の玄界灘・呼子活イカ＆佐賀牛美食特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月佐賀・唐津呼子温泉】冬の玄界灘と呼子活イカ
            <span className="block text-sky-300 text-lg sm:text-2xl mt-3 font-normal">
              極上佐賀牛ステーキ＆唐津城パノラマ・唐津焼の器で味わう海辺美食名宿5選
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl">
            11月から12月にかけて、佐賀県北西部に位置する城下町・唐津と港町・呼子は、玄界灘の冬の荒波が育む極上の海の幸と、唐津城や名勝「虹の松原」を望む絶景が旅人を魅了します。初冬の透き通る身の甘みとコリコリの歯ごたえがたまらない名物「呼子の活イカ（アオリイカ・ヤリイカ）」の透明な姿造りや後造りのサクサク天ぷら、日本屈指のサシの美しさを誇るブランド黒毛和牛「佐賀牛」のステーキ。伝統の「唐津焼」の温もりあふれる器に盛られる料理の数々と、唐津湾の汐湯や天然温泉露天風呂。冬の味覚と歴史・文化が息づく厳選名宿5選を徹底解説します。
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-sky-200">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>ベストシーズン: 11月上旬〜12月下旬（冬のアオリイカ・ヤリイカ旬期）</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Utensils className="w-4 h-4 text-teal-300" />
              <span>旬の味覚: 呼子透明活イカ姿造り・A5佐賀牛ステーキ・唐津焼会席</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-sky-300" />
              <span>泉質: ナトリウム・カルシウム塩化物泉・汐湯（温まりの名湯）</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-slate-100 space-y-6">
          <div className="inline-flex items-center gap-2 text-blue-800 text-sm font-bold bg-blue-50 px-3 py-1 rounded-full">
            <Landmark className="w-4 h-4" />
            唐津・呼子 初冬の歴史と海の情景
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-slate-900 leading-snug">
            玄界灘の白波と唐津城の威容。透き通る活イカと佐賀牛を伝統の器で愛でる冬の旅
          </h2>
          <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-4">
            <p>
              佐賀県の北西端、玄界灘の豊かな海原に面した「唐津（からつ）」と「呼子（よぶこ）」。古くは松浦党の根拠地として、江戸時代には唐津藩六万石の城下町として繁栄し、風光明媚な海岸線と格式ある文化が今に息づいています。
            </p>
            <p>
              初冬の唐津を彩る最大の主役は、日本屈指の透明度と鮮度を誇る名物「呼子の活イカ」です。11月から12月にかけては、身が厚く濃厚な甘みを持つ「アオリイカ」や、上品な旨味が際立つ「ヤリイカ」が水揚げされます。生簀から引き揚げて直ちに捌かれたイカは、透き通る身が光を反射し、コリコリとした小気味よい歯ごたえと噛むほどに溢れる甘みは一度味わうと忘れられない感動をもたらします。
            </p>
            <p>
              さらに、全国のブランド牛コンテストで常にトップクラスに君臨する最高峰の黒毛和牛「佐賀牛」の霜降りステーキ、人間国宝をはじめとする陶芸家たちが土と炎で創り上げた伝統工芸「唐津焼」の器。そして唐津湾や松原を一望する海辺の露天風呂や老舗数寄屋宿の温もり。冬の玄界灘の力強い恵みと、歴史ある城下町の上質なもてなしが、旅人の五感を深く満たしてくれます。
            </p>
          </div>
        </section>

        {/* 3 Pillars Section */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              11月・12月の唐津・呼子を満喫する3つの醍醐味
            </h2>
            <p className="text-sm text-slate-500">
              冬の玄界灘の活魚と最高峰黒毛和牛、名工の器と海辺の絶景温泉
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                透き通る本場呼子の活イカ姿造り
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                冬に甘みが増すアオリイカとヤリイカ。コリコリの食感と後造りの熱々サクサク天ぷら、名物イカしゅうまいの至高の美味。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                最高峰ブランド「佐賀牛」＆唐津焼
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                極めて厳しい基準をクリアしたA5佐賀牛ステーキ。中里太郎右衛門窯など400年の歴史を誇る名陶・唐津焼の器で愛でる会席。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                虹の松原・唐津城パノラマ絶景露天
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                屋上インフィニティ温泉露天風呂や唐津城の天守を見晴らす客室。冬の澄み渡る玄界灘と夕暮れの海景に癒されるひととき。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-10">
          <div className="border-l-4 border-blue-800 pl-4 space-y-1">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-blue-800 uppercase">
              Selected Accommodations
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900">
              佐賀・唐津呼子温泉の海辺名宿厳選5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              楽天トラベル最新APIから取得した実在データに基づく、確かな評価と魅力を誇る厳選宿泊施設
            </p>
          </div>

          <div className="space-y-12">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id}
                id={'hotel-' + hotel.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image */}
                  <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] bg-slate-100 overflow-hidden">
                    <img
                      src={hotel.img}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-blue-950/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-xs flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      厳選名宿 第{hotel.id}位
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-950/75 text-white p-3 rounded-xl backdrop-blur-xs text-xs space-y-1">
                      <div className="flex items-center gap-1 text-sky-300 font-semibold">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="line-clamp-1">{hotel.access}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hotel Details */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-1 text-amber-500 text-sm font-bold">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span>{hotel.rating}</span>
                          <span className="text-slate-400 text-xs font-normal">({hotel.reviews}件のクチコミ)</span>
                        </div>
                        <div className="text-xs font-semibold px-2.5 py-1 bg-blue-100 text-blue-900 rounded-md">
                          参考最安値: {hotel.price}
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug hover:text-blue-800 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                          {hotel.name}
                          <ExternalLink className="w-4 h-4 text-slate-400 inline" />
                        </a>
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {hotel.story}
                      </p>
                    </div>

                    {/* Room & Gourmet Highlights */}
                    <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-100 space-y-3 text-xs sm:text-sm">
                      <div className="space-y-1">
                        <span className="font-bold text-slate-900 flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-blue-700" />
                          おすすめ客室＆眺望
                        </span>
                        <p className="text-slate-600 pl-5 text-xs leading-relaxed">{hotel.roomTip}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="font-bold text-slate-900 flex items-center gap-1.5">
                          <Utensils className="w-3.5 h-3.5 text-blue-700" />
                          名物料理＆夕食の醍醐味
                        </span>
                        <p className="text-slate-600 pl-5 text-xs leading-relaxed">{hotel.gourmetTip}</p>
                      </div>
                    </div>

                    {/* Bullet Highlights */}
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {hotel.highlights.map((hl: string, hIdx: number) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Booking Action Button */}
                    <div className="pt-2">
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-900 text-white text-xs sm:text-sm font-bold shadow-md hover:from-blue-800 hover:to-indigo-950 hover:shadow-lg transition-all gap-2"
                      >
                        <span>楽天トラベルでプラン・空室・最新料金を見る</span>
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
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-blue-100">
            <Compass className="w-6 h-6 text-blue-800" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              初冬の佐賀・唐津呼子温泉を満喫する1泊2日おすすめモデルコース
            </h2>
          </div>
          <div className="space-y-6 text-slate-700">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">1日目</span>
                福岡から直通電車で唐津・呼子へ＆波戸岬と本場呼子活イカ・虹の松原・佐賀牛会席
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-slate-600">
                福岡空港駅または博多駅から地下鉄直通JR筑肥線に乗車し、美しい玄界灘の車窓を眺めながら唐津駅へ（約1時間15分）。レンタカーまたは路線バスで港町・呼子へ向かい、まずはハートのモニュメントが立つ恋人の聖地「波戸岬」で玄界灘の冬の雄大な荒波を体感。昼食は呼子名物の割烹店で、皿の上で透き通って動く「呼子の活イカ姿造り」と揚げたてサクサクの後造り天ぷらに舌鼓。午後は日本三大松原「虹の松原」の白砂青松ドライブを楽しみ、唐津城（舞鶴城）天守閣へ。天守から唐津湾と松原のパノラマ絶景を見晴らします。16:00に海辺の名宿へチェックイン。唐津湾を一望する展望露天風呂や汐湯に浸かり、夕食は中里太郎右衛門窯などの唐津焼の器で愛でるA5佐賀牛ステーキや玄界灘鮮魚会席を贅沢に堪能します。
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">2日目</span>
                唐津湾の朝日風呂・旧唐津銀行近代建築巡りと唐津焼窯元ギャラリー
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-slate-600">
                朝は唐津湾の心地よい波音と水平線から昇る朝日に包まれながら目覚めの朝風呂へ。名物イカしゅうまいや嬉野茶粥、佐賀の海苔を味わう朝食をいただいた後、10:00にチェックアウト。城下町唐津の歴史遺産巡りへ出発。東京駅の設計者・辰野金吾が監修した赤レンガの近代洋風建築「旧唐津銀行」や、炭鉱王が建てた豪壮な数寄屋建築「旧高取邸」を見学。続いて唐津焼の窯元ギャラリーが立ち並ぶ坊主町周辺を散策し、旅の記念にお気に入りの唐津焼の酒器や小皿を選びます。唐津駅前でお土産に名物「松露饅頭」や佐賀牛加工品を買い込み、直通電車で快適に福岡方面へ帰路につきます。
              </p>
            </div>
          </div>
        </section>

        {/* Local Cuisine Deep Dive */}
        <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="inline-flex items-center gap-2 text-sky-300 text-xs sm:text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Utensils className="w-4 h-4" />
            玄界灘と城下町が誇る美食
          </div>
          <h2 className="text-xl sm:text-3xl font-bold leading-snug">
            透明な甘みととろける霜降り。初冬の唐津・呼子で味わい尽くす二大味覚
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-sky-300 text-base flex items-center gap-1.5">
                <Waves className="w-4 h-4 text-sky-300" />
                呼子名物・透明活イカ姿造り
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                生簀から直行する鮮度抜群の活イカ。ガラス細工のように透き通る身のコリコリとした歯ごたえと濃厚な甘み。残ったゲソや耳は揚げたて熱々の天ぷらにして、素材の旨味を余すところなく味わえます。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-sky-300 text-base flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-amber-300" />
                最高峰ブランド「佐賀牛」ステーキ
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                全国屈指の厳しい基準を誇る佐賀牛。きめ細やかな霜降り「艶さし」と柔らかな赤身が特徴で、鉄板焼きや陶板焼きで香ばしく焼き上げると、上品な甘みと豊かな肉汁が口いっぱいに広がります。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-sky-300 text-base flex items-center gap-1.5">
                <Landmark className="w-4 h-4 text-teal-300" />
                唐津焼の器で愛でる会席美
              </h3>
              <p className="text-xs leading-relaxed text-slate-300">
                「料理は器の着物」と北大路魯山人が語ったように、土の温もりと力強い筆致を持つ唐津焼は料理を最高に引き立てます。名工の器に盛られた玄界灘の海の幸を五感で楽しむ贅沢な食体験です。
              </p>
            </div>
          </div>
        </section>

        {/* Access & Travel Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-slate-100 space-y-6">
          <div className="inline-flex items-center gap-2 text-blue-800 text-sm font-bold bg-blue-50 px-3 py-1 rounded-full">
            <Compass className="w-4 h-4" />
            旅の計画ガイド
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            11月・12月の唐津・呼子 交通アクセス＆散策のポイント
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-blue-600" />
                福岡（博多・天神・空港）からのスムーズなアクセス
              </h3>
              <p>
                福岡空港駅または博多駅から地下鉄空港線・JR筑肥線直通電車で唐津駅まで約1時間15〜20分。博多・天神発の高速バス「からつ号」なら約1時間10分です。
              </p>
              <p>
                車の場合は、福岡市内から西九州自動車道経由で約1時間。唐津から呼子までは車で約25分（路線バスで約30分）です。冬期も平坦な道路のため通常タイヤで走行可能です。
              </p>
            </div>

            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-amber-600" />
                玄界灘の冬の海風とおすすめ観光順路
              </h3>
              <p>
                冬の玄界灘は北西の季節風が吹くため、海沿いや呼子大橋、波戸岬、唐津城天守周辺では風を通さないダウンジャケットやウインドブレーカーの着用がおすすめです。
              </p>
              <p>
                午前中に呼子の朝市や呼子大橋を巡って昼食に活イカを堪能し、午後は唐津城や旧唐津銀行、唐津焼の窯元散策を楽しんで海辺の名宿へチェックインするコースが理想的です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-slate-100 space-y-6">
          <div className="inline-flex items-center gap-2 text-blue-800 text-sm font-bold bg-blue-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            初冬の佐賀・唐津呼子旅行 FAQ
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-blue-700 shrink-0 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link Section */}
        <section className="bg-gradient-to-br from-blue-950 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-sky-300" />
              あわせて読みたい九州の冬名湯・冬グルメ特集
            </h3>
            <p className="text-xs sm:text-sm text-sky-200">
              冬の味覚や名湯、ブランド牛を堪能する九州各地の厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-saga-takeo-onsen-romon-saga-beef-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">佐賀・武雄温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                武雄温泉の朱塗り楼門と佐賀牛ステーキ名宿
              </h4>
              <p className="text-[11px] text-sky-100 line-clamp-2">
                国重文の楼門と1300年の名湯・佐賀牛会席を満喫。
              </p>
            </Link>

            <Link 
              href="/winter-saga-ureshino-onsen-bihada-yudofu-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">佐賀・嬉野温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                嬉野温泉の日本三大美肌の湯と温泉湯豆腐宿
              </h4>
              <p className="text-[11px] text-sky-100 line-clamp-2">
                とろける温泉湯どうふと重曹泉の滑らかな湯ざわり。
              </p>
            </Link>

            <Link 
              href="/winter-fukuoka-yanagawa-onsen-kotatsubune-unagi-seiromushi-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">福岡・水郷柳川</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                柳川の冬のこたつ舟川下りと元祖うなぎせいろ蒸し
              </h4>
              <p className="text-[11px] text-sky-100 line-clamp-2">
                冬の掘割巡りと城下町名宿・博多和牛会席を堪能。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-saga-karatsu-onsen-yobuko-ika-sagagyu-genkai-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
