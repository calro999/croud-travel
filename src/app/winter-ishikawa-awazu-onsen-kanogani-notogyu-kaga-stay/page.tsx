import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月石川・粟津温泉＆加賀温泉郷】開湯1300年の白山霊泉・解禁加能ガニ＆香箱ガニと能登牛を味わう名宿5選",
  description: "11月上旬、日本海に冬の訪れを告げる青いタグ付きブランドズワイガニ「加能ガニ」と、濃厚な内子と外子を抱えたメスガニ「香箱ガニ」の漁が解禁されると、石川県小松市・加賀温泉郷の古湯「粟津温泉（あわづおんせん）」は美食の熱気に包まれます。奈良時代、霊峰白山を開山した高僧・泰澄大師によって養老2年（718年）に開湯された粟津温泉は、1300年を超える歴史を誇り、温泉街のすべての宿がそれぞれ独自の自家堀り源泉を所有している全国的にも極めて稀有な名湯地です。純度100%の無色透明なナトリウム-硫酸塩・塩化物泉は、浸かれば肌がしっとりと潤い、身体の芯まで熱が染み渡る「温まりの湯」。夕食には解禁されたばかりのタグ付き加能ガニの花咲く洗い、香ばしい焼きガニ、甲羅味噌焼き、そして濃厚な内子を味わう香箱ガニの甲羅盛り、さらにきめ細やかな肉質の特選「能登牛」の網焼き。九谷焼や山中漆器の絢爛豪華な器とともに、初冬の北陸の贅を尽くす厳選名宿5選を詳しく紹介します。",
  keywords: '粟津温泉 旅館, 加賀温泉郷 宿泊, 粟津温泉 法師, のとや, 満天ノ 辻のや, 喜多八, 加能ガニ, 香箱ガニ, 能登牛, 11月 12月 石川温泉',
  alternates: {
    canonical: 'https://croud-travel.com/winter-ishikawa-awazu-onsen-kanogani-notogyu-kaga-stay'
  },
  openGraph: {
    title: "【11・12月石川・粟津温泉＆加賀温泉郷】開湯1300年の白山霊泉・解禁加能ガニ＆香箱ガニと能登牛を味わう名宿5選",
    description: "11月上旬、日本海に冬の訪れを告げる青いタグ付きブランドズワイガニ「加能ガニ」と、濃厚な内子と外子を抱えたメスガニ「香箱ガニ」の漁が解禁されると、石川県小松市・加賀温泉郷の古湯「粟津温泉（あわづおんせん）」は美食の熱気に包まれます。奈良時代、霊峰白山を開山した高僧・泰澄大師によって養老2年（718年）に開湯された粟津温泉は、1300年を超える歴史を誇り、温泉街のすべての宿がそれぞれ独自の自家堀り源泉を所有している全国的にも極めて稀有な名湯地です。純度100%の無色透明なナトリウム-硫酸塩・塩化物泉は、浸かれば肌がしっとりと潤い、身体の芯まで熱が染み渡る「温まりの湯」。夕食には解禁されたばかりのタグ付き加能ガニの花咲く洗い、香ばしい焼きガニ、甲羅味噌焼き、そして濃厚な内子を味わう香箱ガニの甲羅盛り、さらにきめ細やかな肉質の特選「能登牛」の網焼き。九谷焼や山中漆器の絢爛豪華な器とともに、初冬の北陸の贅を尽くす厳選名宿5選を詳しく紹介します。",
    url: 'https://croud-travel.com/winter-ishikawa-awazu-onsen-kanogani-notogyu-kaga-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の粟津温泉と日本庭園の雪吊り'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月石川・粟津温泉＆加賀温泉郷】開湯1300年の白山霊泉・解禁加能ガニ＆香箱ガニと能登牛を味わう名宿5選",
    description: "11月上旬、日本海に冬の訪れを告げる青いタグ付きブランドズワイガニ「加能ガニ」と、濃厚な内子と外子を抱えたメスガニ「香箱ガニ」の漁が解禁されると、石川県小松市・加賀温泉郷の古湯「粟津温泉（あわづおんせん）」は美食の熱気に包まれます。奈良時代、霊峰白山を開山した高僧・泰澄大師によって養老2年（718年）に開湯された粟津温泉は、1300年を超える歴史を誇り、温泉街のすべての宿がそれぞれ独自の自家堀り源泉を所有している全国的にも極めて稀有な名湯地です。純度100%の無色透明なナトリウム-硫酸塩・塩化物泉は、浸かれば肌がしっとりと潤い、身体の芯まで熱が染み渡る「温まりの湯」。夕食には解禁されたばかりのタグ付き加能ガニの花咲く洗い、香ばしい焼きガニ、甲羅味噌焼き、そして濃厚な内子を味わう香箱ガニの甲羅盛り、さらにきめ細やかな肉質の特選「能登牛」の網焼き。九谷焼や山中漆器の絢爛豪華な器とともに、初冬の北陸の贅を尽くす厳選名宿5選を詳しく紹介します。",
    images: ['https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function WinterIshikawaAwazuPage() {
  const hotels = [
            {
              id: 1,
              name: "粟津温泉　法師",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28073/28073.jpg",
              rating: 4.08,
              reviews: 1778,
              price: "¥8,938〜",
              access: "加賀温泉駅・粟津駅無料送迎有（要事前予約）／北陸自動車道 加賀ＩＣより２０分",
              special: "養老二年開湯！伝承一千三百年の歴史ある日本の宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28073%2F28073.html",
              story: "養老2年（718年）の開湯以来、一子相伝で46代・1300年にわたり旅人を迎え続けてきた世界屈指の歴史を誇る老舗旅館「法師（ほうし）」。白山を開山した泰澄大師のお告げにより、木こりの雅真（がしん）が湯守となったことに始まる伝説の宿です。館内の中央には、加賀三代藩主・前田利常公ゆかりの小堀遠州好みの雄大な日本庭園が広がり、初冬には金沢の兼六園と同じく美しい雪吊りが施され、苔むした庭園と松の緑が静謐な美を醸し出します。自家源泉から引く無色透明の硫酸塩泉は、純度100%の掛け流し。総檜造りの大浴場や庭園を望む露天風呂に身を沈めれば、1300年の長きにわたり受け継がれてきた霊泉の温もりが身体の奥深くまで染み渡ります。夕食は伝統の技を受け継ぐ料理人が一品一品丁寧に仕立てる本格加賀会席。11月6日のカニ漁解禁とともに、石川県産タグ付き加能ガニの姿茹でや、濃厚な内子と外子が詰まった香箱ガニの甲羅盛り、さらにA5ランク能登牛の陶板焼きが九谷焼の器を彩り、歴史の重みとおもてなしの心に深く酔いしれる滞在が叶います。",
              roomTip: "名園を間近に臨む「延景亭」または登録有形文化財の趣を残す数寄屋和室。雪吊りが施された庭園の静けさと池に映る初冬の夕暮れを、心ゆくまで眺めながら寛げます。",
              gourmetTip: "「冬の極み・加能ガニ＆能登牛会席」。地元橋立港直送のタグ付き加能ガニ姿茹で、香箱ガニの甲羅盛り、A5能登牛の陶板ステーキ、加賀蓮根の蓮蒸し、地酒「天狗舞」。",
              highlights: [
                "46代1300年続く世界最古級の歴史宿＆小堀遠州好みの名園と初冬雪吊りの美景",
                "泰澄大師が開いた伝説の白山霊泉＆自家源泉掛け流しの総檜大浴場と庭園露天",
                "タグ付きブランド加能ガニ姿茹で＆A5ランク能登牛を彩る九谷焼の豪華な器"
              ]
            },
            {
              id: 2,
              name: "粟津温泉　旅亭懐石　のとや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14380/14380.jpg",
              rating: 4.31,
              reviews: 6396,
              price: "¥14,014〜",
              access: "北陸道加賀ＩＣより２５分　加賀温泉駅・粟津駅・小松空港までの送迎もお問い合わせください",
              special: "伝統と現代の融合、700年こんこんと湧き続ける純生の湯の老舗宿！活蟹プラン販売中！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14380%2F14380.html",
              story: "創業七百有余年の歴史を紡ぎ、加賀百万石の伝統美と全国屈指の料理旅館として名高い「旅亭懐石 のとや」。敷地内から滾々と自噴する自家源泉を贅沢に掛け流す大浴場と、四季の自然林に包まれた露天風呂が自慢です。無色透明でまろやかな硫酸塩泉は、肌の古い角質を落としつつしっとりと保湿してくれる「美肌と美髪の湯」。さらに趣の異なる複数の無料貸切露天風呂も完備され、プライベートな雪見風呂を心ゆくまで満喫できます。のとやの代名詞ともいえるのが、料理長が毎朝近隣の橋立漁港や金沢中央卸売市場へ足を運び、目利きした極上鮮魚を仕立てる「旅亭懐石」。11月・12月はまさにカニ尽くしの黄金期。繊細な甘みが引き立つ加能ガニの刺身、炭火で香ばしく焼き上げる焼きガニ、カニすき鍋、そしてカニ味噌を贅沢に絡めた雑炊まで、一切妥協のないカニのフルコースが堪能できます。極上の能登牛ステーキとの饗宴は、美食を愛する旅人にとって至福の極みです。",
              roomTip: "源泉露天風呂付き客室または和モダンツイン。上質な畳とベッドが融合した快適な空間で、誰にも気兼ねなく自家源泉の湯浴みと贅沢な時間を堪能できます。",
              gourmetTip: "「活加能ガニフルコース懐石」。花咲くカニ刺し、香ばしい炭火焼きガニ、濃厚カニ味噌甲羅焼き、熱々のカニすき鍋、極上雑炊、能登牛の網焼き。",
              highlights: [
                "創業七百年の老舗料亭旅館＆朝獲れ橋立港直送の活加能ガニフルコース",
                "美肌・美髪を促す自家堀り硫酸塩泉＆多彩な無料貸切露天風呂で雪見湯浴み",
                "露天風呂付き客室で過ごす記念日ステイ＆極上能登牛ステーキとの贅沢コラボ"
              ]
            },
            {
              id: 3,
              name: "満天ノ　辻のや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/182807/182807.jpg",
              rating: 4.29,
              reviews: 235,
              price: "¥12,500〜",
              access: "電車：加賀温泉駅より無料送迎バスにて約20分　お車：小松ICより一般道にて約20分　飛行機：小松空港よりお車約20分",
              special: "25,000坪の回遊式庭園と自家源泉の名湯を愉しむ、加賀の美食宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182807%2F182807.html",
              story: "粟津温泉の高台に位置し、広大な自家日本庭園と巨石を配した野趣あふれる露天風呂が自慢の名旅館「満天ノ 辻のや」。館内に一歩足を踏み入れると、伝統的な数寄屋造りの意匠と開放感あふれるロビーが旅人を迎えます。自慢の大浴場「滝見露天風呂」と広々とした大浴殿には、自家堀りの新鮮な硫酸塩泉が並々と注ぎ込まれています。初冬の冷たい空気の中、庭園の木々に積もり始めた雪と滝のせせらぎを眺めながら湯に浸かれば、日々の疲れが一気に溶け出してゆくようです。夕食は北陸の海の幸と加賀野菜をふんだんに盛り込んだ季節の会席料理。11月・12月の主役である日本海ズワイガニの姿盛りや、きめ細やかなサシが入った能登牛のすき焼き、加賀伝統の鴨治部煮（じぶに）など、郷土の味覚を彩り豊かに表現した料理の数々がテーブルを華やかに彩ります。広々とした客室と充実の館内施設は、夫婦の記念日旅行からファミリーまで幅広く支持されています。",
              roomTip: "日本庭園を一望する本館和室または広々とした和洋室。手入れの行き届いた庭園の雪景色を眺めながら、ゆったりと静かな時間を過ごすことができます。",
              gourmetTip: "「冬の味覚・ズワイガニと能登牛の饗宴会席」。日本海産ズワイガニの足刺しと甲羅盛り、能登牛のすき焼き小鍋、加賀治部煮、旬魚のお造り盛り合わせ。",
              highlights: [
                "高台に佇む広大な自家庭園＆滝見露天風呂と加賀野菜・能登牛の饗宴会席",
                "大浴場「滝見の湯」の圧倒的開放感＆充実した館内施設と快適な和洋室",
                "小松空港や北陸新幹線小松駅からの好アクセス＆家族三世代旅行にも安心"
              ]
            },
            {
              id: 4,
              name: "粟津温泉　喜多八＜石川県＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28601/28601.jpg",
              rating: 4.25,
              reviews: 1017,
              price: "¥8,910〜",
              access: "JR金沢駅より車で約45分／JR加賀温泉駅より車で20分（送迎有・要予約）／北陸道・加賀IC又は小松ICより約25分",
              special: "自家掘り源泉と旬魚を満喫。2026年リニューアル客室で上質な寛ぎと心ほどける癒し。喜び多き宿。喜多八",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28601%2F28601.html",
              story: "創業以来、「お客様の笑顔と美味しい料理」を追求し、温かな家庭的おもてなしで高いリピート率を誇る純和風旅館「喜多八（きたはち）」。大型旅館にはないきめ細やかな心配りと、板前が心を込めて手作りする本格会席が評判の宿です。自家源泉から引く弱アルカリ性の硫酸塩泉は、肌あたりが非常に柔らかく、身体の芯までじっくりと温まります。清潔感あふれる大浴場と檜が香る露天風呂は24時間入浴可能で、初冬の澄んだ星空を仰ぎながらの深夜や早朝の湯浴みは格別の心地よさ。夕食は旬の地元食材に徹底してこだわった「加賀手作り会席」。11月上旬から12月末にかけては、冬の味覚の王様・加能ガニや香箱ガニをメインに据えた特別プランが登場。甘みたっぷりのカニ身と濃厚なカニ味噌を余すところなく味わえるほか、地元小松産のブランド野菜や能登豚の小鍋など、心尽くしのご馳走が旅人の胃袋を掴みます。",
              roomTip: "落ち着きのある純和風和室。畳の香りと障子越しに差し込む柔らかな光が心地よく、のんびりと寛ぎたい大人の温泉旅にうってつけの静けさです。",
              gourmetTip: "「旬菜カニ会席」。石川県産茹でズワイガニ、香箱ガニの内子外子盛り、旬の寒ブリと白身魚のお造り、加賀丸いもの揚げ出し、石川の地酒飲み比べ。",
              highlights: [
                "創業以来の温かな心配り＆24時間入浴可能な自家源泉と旬菜カニ会席",
                "手作りにこだわる板前の本格会席＆冬限定の香箱ガニ甲羅盛りと地酒",
                "アットホームな居心地の良さ＆リーズナブルに楽しむ本物の加賀温泉滞在"
              ]
            },
            {
              id: 5,
              name: "昭和湯治の宿　緑華苑",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/13964/13964.jpg",
              rating: 4.34,
              reviews: 91,
              price: "¥5,720〜",
              access: "車：北陸自動車道加賀ＩＣより国道８号線→金沢・小松方面へ車で２５分／車以外：路線バス、粟津駅口より乗車→粟津温泉北口下車",
              special: "自家源泉・天然温泉かけ流し「温泉と向き合う静かな湯治宿」",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13964%2F13964.html",
              story: "粟津温泉街の路地に佇み、昭和レトロな湯治情緒と驚きのコストパフォーマンスで温泉ファンから熱い支持を集める隠れ家「昭和湯治の宿 緑華苑」。飾り気のない素朴な外観ながら、一歩足を踏み入れれば昭和の良き時代にタイムスリップしたような懐かしさと温もりに包まれます。宿の最大の自慢は、加水も循環ろ過も一切行わない純度100%の自家源泉掛け流しの内湯。湯口から注がれる新鮮な源泉は湯の花が舞い、独特の温泉臭と濃厚なミネラル成分が身体を包み込みます。初冬の冷え切った身体で湯船に身を沈めると、ピリッとした熱さのあとに極上の温もりが全身を満たし、入浴後も汗が引かないほどの抜群の保温力を実感できます。食事は気取らない家庭的な手作り料理。地元の日本海で揚がった旬の魚の煮付けや、熱々の鍋物、炊きたての石川県産米など、実家に帰ってきたかのような安心感のある食事が身体に染み渡ります。本物の掛け流し温泉と静かな湯治滞在を愛する旅人に心からおすすめできる一軒です。",
              roomTip: "昔ながらの落ち着いた和室。過剰な設備はありませんが清潔に整えられており、静かに温泉と向き合う一人旅や湯治逗留にぴったりです。",
              gourmetTip: "「素朴な湯治手作り膳」。日本海の旬魚の塩焼き、季節の野菜鍋、小松名物うどん、自家製漬物と熱々のご飯、地酒の一合徳利。",
              highlights: [
                "加水循環一切なしの自家源泉100%掛け流し＆昭和レトロな湯治情緒と高コスパ",
                "ピリッと熱めの名湯で抜群の保温効果＆実家のように寛げる素朴な手作り料理",
                "温泉ファンのリピーター多数＆飾らない一人旅や気ままな長期湯治に最適"
              ]
            }
  ];

  const faqList = [
  {
    "q": "粟津温泉の「全宿自家堀り源泉」とはどういう意味ですか？泉質と効能の特徴は？",
    "a": "全国の多くの温泉地では集中管理された源泉を各旅館に配湯していますが、粟津温泉ではすべての旅館が敷地内に独自の井戸（自家堀り源泉）を所有しています。そのため他宿と源泉を共有せず、地下から湧き出る新鮮な温泉を直接浴槽へ引き込んでいます。泉質は無色透明のナトリウム-硫酸塩・塩化物泉（弱アルカリ性）。硫酸塩泉は「美肌の湯」「傷の湯」として古くから知られ、肌の古い角質を軟化させてしっとりと保湿し、塩化物泉の保温効果によって入浴後も身体の芯から温もりが持続します。"
  },
  {
    "q": "11月・12月に解禁される「加能ガニ」と「香箱ガニ」の違いや特徴は何ですか？",
    "a": "「加能ガニ（かのうがに）」は、石川県の日本海沖で水揚げされる雄のズワイガニのブランド名で、水揚げ港を示す青いタグが付けられます。ぎっしり詰まった繊細な肉質と上品な甘み、濃厚なカニ味噌が特徴です。一方、「香箱ガニ（こうばこがに）」は雌（メス）のズワイガニのことで、資源保護のため11月6日の解禁から12月末までのわずか約2ヶ月間しか漁が行われません。小ぶりながら、お腹の外側に抱えるプチプチとした「外子（そとこ）」と、甲羅の内側にある鮮やかな朱色の未受精卵「内子（うちこ）」、そして濃厚な味噌が絶品で、地元の冬の風物詩として愛されています。"
  },
  {
    "q": "北陸新幹線の延伸に伴う粟津温泉へのアクセス方法と冬期の注意点は？",
    "a": "2024年の北陸新幹線金沢〜敦賀間延伸により、最寄り駅となる「小松駅」または「加賀温泉駅」まで新幹線で直通できるようになりました。東京駅からは北陸新幹線「かがやき」「はくたか」で小松駅まで約2時間30分〜2時間40分。小松駅からは路線バスまたはタクシーで約15〜20分で粟津温泉へ到着します。また小松空港からも車で約20分と極めて好立地です。11月下旬から12月にかけては北陸特有の「時雨（しぐれ）」や降雪が始まるため、車で訪れる場合は必ずスタッドレスタイヤを装着してください。"
  },
  {
    "q": "粟津温泉の周辺観光や立ち寄りスポットのおすすめはどこですか？",
    "a": "粟津温泉のすぐ近くには、江戸時代の加賀藩の古民家を集め、伝統工芸（加賀友禅、九谷焼、金箔貼りなど）を体験できる「加賀伝統工芸村 ゆのくにの森」があります。初冬の雪化粧をした木造茅葺き民家は息を呑む美しさです。また、粟津温泉の中心にある総湯（共同浴場）前には「おっしょべ公園」があり、恋人の聖地として知られています。さらに車で約20分の「那谷寺（なたでら）」は、ミシュラン・グリーンガイド・ジャポンで1つ星を獲得した名刹で、奇岩霊石が織りなす白山信仰の幽玄な雪景色を堪能できます。"
  },
  {
    "q": "11月・12月の加賀・小松エリアの気温と服装のアドバイスは？",
    "a": "11月の加賀エリアは日中12〜16℃前後ですが、朝晩は5〜8℃近くまで冷え込みます。12月に入ると最高気温も7〜10℃、最低気温は1〜4℃まで低下し、日本海からの冷たい北風とみぞれや雪が舞う日が増えます。湿度が高いため体感温度は数字以上に寒く感じられます。防寒性の高いダウンジャケットや厚手のウールコート、マフラーや手袋などの防寒具を準備してください。また、雪解け水で足元が濡れやすいため、防水仕様の滑りにくいブーツやスニーカーでの旅行が安心です。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://croud-travel.com/winter-ishikawa-awazu-onsen-kanogani-notogyu-kaga-stay#article',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://croud-travel.com/#website',
          'name': 'クラドトラベル',
          'url': 'https://croud-travel.com/'
        },
        'headline': "【11・12月石川・粟津温泉＆加賀温泉郷】開湯1300年の白山霊泉・解禁加能ガニ＆香箱ガニと能登牛を味わう名宿5選",
        'description': "11月上旬、日本海に冬の訪れを告げる青いタグ付きブランドズワイガニ「加能ガニ」と、濃厚な内子と外子を抱えたメスガニ「香箱ガニ」の漁が解禁されると、石川県小松市・加賀温泉郷の古湯「粟津温泉（あわづおんせん）」は美食の熱気に包まれます。奈良時代、霊峰白山を開山した高僧・泰澄大師によって養老2年（718年）に開湯された粟津温泉は、1300年を超える歴史を誇り、温泉街のすべての宿がそれぞれ独自の自家堀り源泉を所有している全国的にも極めて稀有な名湯地です。純度100%の無色透明なナトリウム-硫酸塩・塩化物泉は、浸かれば肌がしっとりと潤い、身体の芯まで熱が染み渡る「温まりの湯」。夕食には解禁されたばかりのタグ付き加能ガニの花咲く洗い、香ばしい焼きガニ、甲羅味噌焼き、そして濃厚な内子を味わう香箱ガニの甲羅盛り、さらにきめ細やかな肉質の特選「能登牛」の網焼き。九谷焼や山中漆器の絢爛豪華な器とともに、初冬の北陸の贅を尽くす厳選名宿5選を詳しく紹介します。",
        'inLanguage': 'ja',
        'mainEntityOfPage': 'https://croud-travel.com/winter-ishikawa-awazu-onsen-kanogani-notogyu-kaga-stay',
        'datePublished': '2026-09-29T00:00:00+09:00',
        'dateModified': '2026-09-29T00:00:00+09:00',
        'publisher': {
          '@type': 'Organization',
          'name': 'クラドトラベル編集部',
          'url': 'https://croud-travel.com/'
        }
      },
      {
        '@type': 'TouristDestination',
        '@id': 'https://croud-travel.com/winter-ishikawa-awazu-onsen-kanogani-notogyu-kaga-stay#destination',
        'name': '石川・粟津温泉＆加賀温泉郷',
        'description': '石川県小松市に位置する開湯1300年の名湯。全宿が自家堀り源泉を所有し、11月解禁の加能ガニ・香箱ガニと極上能登牛を九谷焼の器で味わう初冬の美食名所。',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 36.3267,
          'longitude': 136.4389
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://croud-travel.com/winter-ishikawa-awazu-onsen-kanogani-notogyu-kaga-stay#faq',
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
        '@id': 'https://croud-travel.com/winter-ishikawa-awazu-onsen-kanogani-notogyu-kaga-stay#hotellist',
        'name': '石川・粟津温泉＆加賀温泉郷のおすすめ名宿5選',
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
    <article className="min-h-screen bg-gradient-to-b from-stone-50 via-teal-50/20 to-stone-50 text-stone-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-r from-slate-950 via-stone-900 to-teal-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-teal-200">
            <Link href="/" className="hover:underline hover:text-white transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:underline hover:text-white transition">特集一覧</Link>
            <span>/</span>
            <span className="text-white font-medium">石川・粟津温泉＆加賀温泉郷</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-xs sm:text-sm font-semibold tracking-wide">
            <Snowflake className="w-4 h-4 text-teal-300" />
            11月・12月 開湯1300年霊泉と解禁加能ガニ・香箱ガニ特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月石川・粟津温泉＆加賀温泉郷】白山霊泉と冬の美食
            <span className="block text-teal-300 text-lg sm:text-2xl mt-3 font-normal">
              全宿自家堀り源泉の純度100%硫酸塩泉・解禁加能ガニ＆香箱ガニと能登牛を味わう名宿5選
            </span>
          </h1>

          <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-4xl">
            11月上旬、日本海に冬の訪れを告げる青いタグ付きブランドズワイガニ「加能ガニ」と、濃厚な内子と外子を抱えたメスガニ「香箱ガニ」の漁が解禁されると、石川県小松市・加賀温泉郷の古湯「粟津温泉（あわづおんせん）」は美食の熱気に包まれます。奈良時代、霊峰白山を開山した高僧・泰澄大師によって養老2年（718年）に開湯された粟津温泉は、1300年を超える歴史を誇り、温泉街のすべての宿がそれぞれ独自の自家堀り源泉を所有している全国的にも極めて稀有な名湯地です。純度100%の無色透明なナトリウム-硫酸塩・塩化物泉は、浸かれば肌がしっとりと潤い、身体の芯まで熱が染み渡る「温まりの湯」。夕食には解禁されたばかりのタグ付き加能ガニの花咲く洗い、香ばしい焼きガニ、甲羅味噌焼き、そして濃厚な内子を味わう香箱ガニの甲羅盛り、さらにきめ細やかな肉質の特選「能登牛」の網焼き。九谷焼や山中漆器の絢爛豪華な器とともに、初冬の北陸の贅を尽くす厳選名宿5選を詳しく紹介します。
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-teal-200">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Calendar className="w-4 h-4 text-teal-300" />
              <span>ベストシーズン: 11月6日解禁〜12月下旬（加能ガニ・香箱ガニの旬と兼六園・名園の雪吊り）</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Utensils className="w-4 h-4 text-teal-300" />
              <span>旬の味覚: 橋立港直送タグ付き加能ガニ・香箱ガニ甲羅盛り・能登牛ステーキ・寒ブリ・加賀治部煮</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Waves className="w-4 h-4 text-teal-300" />
              <span>泉質: ナトリウム-硫酸塩・塩化物泉（全宿独自の自家堀り源泉・純度100%美肌温まりの湯）</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-800 text-sm font-bold bg-teal-50 px-3 py-1 rounded-full">
            <Sparkles className="w-4 h-4" />
            11月・12月の加賀粟津の旅情
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            泰澄大師が開いた霊峰白山の霊泉・全宿が誇る自家堀り源泉と冬の味覚の王者たち
          </h2>
          <div className="text-stone-600 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              金沢駅から北陸新幹線または特急で約20分、小松空港からも車で約20分。霊峰白山を望む加賀平野の南部に位置する「粟津温泉」は、山代、山中、片山津とともに加賀温泉郷を構成する四大温泉のひとつです。その歴史は極めて古く、養老2年（718年）、白山を開山した高僧・泰澄大師が白山大権現の神託を受け、この地に湧く霊泉を掘り当てて病に苦しむ人々を救ったのが始まりとされています。温泉街の各宿には今も泰澄の精神が息づき、世界最古級の宿として名高い「法師」をはじめ、数百年の伝統を誇る名門宿が軒を連ねています。
            </p>
            <p>
              粟津温泉が全国の温泉通から格別の敬意を払われる最大の理由、それは「全旅館が自家堀りの専用源泉を持っている」という点にあります。他の宿と湯を分け合うことなく、地下深くから自噴する生まれたての源泉を直接自宿の浴槽へ引き込むため、酸化されていない極めてピュアな硫酸塩泉に浸かることができます。かすかに芒硝（ぼうしょう）の香りが漂う無色透明の湯は、肌触りが柔らかく、湯に入った瞬間に肌がしっとりと吸い付くような潤いを感じられます。硫酸塩泉の優れた角質軟化作用と塩化物泉の保温効果が融合し、初冬の厳しい寒さで縮こまった身体の隅々まで熱を行き渡らせてくれます。
            </p>
            <p>
              そして粟津温泉の冬の旅情を決定づけるのが、毎年11月6日に一斉に解禁される日本海のズワイガニ漁です。石川県で水揚げされる雄のズワイガニ「加能ガニ」は、青いタグが付けられた確かな品質の証。太い脚にぎっしりと詰まった繊維は、噛むほどに芳醇な甘みが溢れ出します。さらに見逃せないのが、12月末までのわずか2ヶ月間しか味わえない雌のズワイガニ「香箱ガニ（こうばこがに）」。甲羅の中にぎっしりと詰まった濃厚なカニ味噌と、鮮やかな朱色の未受精卵「内子（うちこ）」、腹に抱えるプチプチとした「外子（そとこ）」の三位一体の美味は、北陸の冬だけが許された至高の贅沢です。
            </p>
            <p>
              夕食の膳には、解禁されたばかりの加能ガニの刺身や炭火焼き、香箱ガニの甲羅盛りに加え、石川県が誇る黒毛和牛「能登牛」の網焼きステーキ、脂の乗った寒ブリ、加賀伝統の治部煮が並びます。それらを彩るのは、色鮮やかな九谷焼の磁器と優美な山中漆器の器。名酒「天狗舞」や「菊姫」「手取川」など加賀・能登の銘酒とともにいただく一献は、旅の記憶に深く刻まれることでしょう。
            </p>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-teal-800 text-sm font-bold bg-teal-50 px-3 py-1 rounded-full">
              <Mountain className="w-4 h-4" />
              厳選宿泊施設
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              石川・粟津温泉＆加賀温泉郷 11月・12月に泊まるべき名宿5選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              全宿自家堀り源泉掛け流し、解禁加能ガニ・香箱ガニ、能登牛会席を備えた本物の宿を厳選
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200 transition hover:shadow-md"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image */}
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
                    <img
                      src={h.img}
                      alt={h.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>★ {h.rating}</span>
                      <span className="text-stone-300">({h.reviews}件)</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-stone-950/90 via-stone-950/60 to-transparent p-3 rounded-xl text-white">
                      <p className="text-xs text-teal-200 font-semibold">参考最低料金（1名あたり）</p>
                      <p className="text-lg font-black text-amber-300">{h.price}</p>
                    </div>
                  </div>

                  {/* Hotel Content */}
                  <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md inline-block mb-2">
                          厳選第{h.id}位
                        </span>
                        <h3 className="text-lg sm:text-2xl font-bold text-stone-900 leading-snug">
                          {h.name}
                        </h3>
                        <p className="text-xs text-stone-500 flex items-center gap-1 mt-1.5">
                          <MapPin className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                          <span>{h.access}</span>
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {h.story}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 bg-stone-50 p-4 rounded-2xl border border-stone-100">
                        <p className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-teal-700" />
                          この宿の注目ポイント
                        </p>
                        <ul className="text-xs text-stone-600 space-y-1 pl-5 list-disc">
                          {h.highlights.map((hl, hlIdx) => (
                            <li key={hlIdx}>{hl}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Tips */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="bg-teal-50/50 p-3 rounded-xl border border-teal-100 space-y-1">
                          <p className="font-bold text-teal-900 flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5 text-teal-700" />
                            おすすめ客室
                          </p>
                          <p className="text-stone-600">{h.roomTip}</p>
                        </div>
                        <div className="bg-amber-50/50 p-3 rounded-xl border border-amber-100 space-y-1">
                          <p className="font-bold text-amber-900 flex items-center gap-1">
                            <Utensils className="w-3.5 h-3.5 text-amber-700" />
                            名物グルメ
                          </p>
                          <p className="text-stone-600">{h.gourmetTip}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-teal-800 to-slate-900 hover:from-teal-900 hover:to-slate-950 text-white font-bold text-sm rounded-xl shadow-xs hover:shadow-md transition duration-200"
                      >
                        <span>空室状況・宿泊プランを楽天トラベルで確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local Gourmet Section */}
        <section className="bg-gradient-to-br from-stone-900 to-teal-950 text-white rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-300 text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Utensils className="w-4 h-4 text-teal-300" />
            初冬の加賀美食手帖
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            11月・12月の加賀・小松で味わい尽くす冬の味覚の饗宴
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-teal-400" />
                青タグ付き雄ズワイ「加能ガニ」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                11月6日に解禁される石川県産ズワイガニの最高峰。橋立港や金沢港で水揚げされた活ガニは、繊細な身の甘みとぎっしり詰まった繊維質、そして芳醇なカニ味噌が特徴。焼きガニやカニ刺し、カニ鍋でその真価を発揮します。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-400" />
                冬限定の宝珠「香箱ガニ（雌ガニ）」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                11月・12月のわずか約2ヶ月間のみ味わえる雌のズワイガニ。甲羅の中に詰まった鮮やかな朱色の「内子」と、お腹の外側に抱えるプチプチの「外子」、そして濃厚なカニ味噌の旨味が一体となった甲羅盛りは悶絶級の美味です。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-teal-400" />
                幻の銘柄黒毛和牛「能登牛」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                能登の澄んだ空気と清らかな水で丹精込めて育てられる極上牛。オレイン酸の含有率が極めて高く、人肌でとろける上質な脂と赤身の深い旨味が特徴。陶板焼きやすき焼きで、カニ会席に華を添える最高の贅沢です。
              </p>
            </div>
          </div>
        </section>

        {/* Access & Travel Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-800 text-sm font-bold bg-teal-50 px-3 py-1 rounded-full">
            <Compass className="w-4 h-4" />
            旅の計画ガイド
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            11月・12月の粟津温泉 交通アクセス＆冬道・観光アドバイス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-teal-700" />
                北陸新幹線小松駅＆小松空港からの快適アクセス
              </h3>
              <p>
                北陸新幹線の延伸により、JR小松駅または加賀温泉駅から路線バスやタクシーで約15〜20分とアクセスが飛躍的に向上しました。羽田空港から小松空港を利用すれば、フライト約1時間＋車で約20分と最短で到着可能です。
              </p>
              <p>
                11月下旬以降は北陸特有の天候変化が激しく、雨雪が降りやすくなります。レンタカーを利用する場合は必ずスタッドレスタイヤ装着車を手配し、早めの宿チェックインをおすすめします。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-teal-700" />
                自家源泉の硫酸塩泉を120%味わう入浴法
              </h3>
              <p>
                粟津温泉の硫酸塩泉は無色透明ですが、天然の保湿成分と塩分を豊富に含んでいます。湯上がり後はシャワーで洗い流さずそのままタオルで軽く拭き取ることで、肌表面に温泉成分の被膜が形成され、長時間の保温・保湿効果が持続します。
              </p>
              <p>
                露天風呂での雪見入浴時は、頭部に濡らした温タオルを乗せることで、冷気による血管の急激な収縮を防ぎ、安全に長湯を楽しむことができます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-800 text-sm font-bold bg-teal-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の石川・粟津温泉＆加賀旅行 FAQ
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 flex items-start gap-2">
                  <span className="text-teal-800 shrink-0 font-black">Q.</span>
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
        <section className="bg-gradient-to-br from-stone-900 to-teal-950 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-teal-300" />
              あわせて読みたい北陸の冬雪見温泉＆カニ旅特集
            </h3>
            <p className="text-xs sm:text-sm text-teal-200">
              日本海の冬の王者を味わい尽くす石川・富山・福井の極上温泉リゾートガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-ishikawa-noto-wakura-onsen-kanburi-kanogani-ocean-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-300 bg-teal-400/20 px-2 py-0.5 rounded-full inline-block">石川・和倉温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-teal-200 transition line-clamp-2">
                七尾湾の絶景露天風呂と寒ブリ・加能ガニ
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                能登の名湯・和倉の塩化物泉と初冬の日本海オーシャンビュー、海の幸尽くし。
              </p>
            </Link>

            <Link 
              href="/winter-ishikawa-yamanaka-onsen-kakusenkei-kano-crab-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-300 bg-teal-400/20 px-2 py-0.5 rounded-full inline-block">石川・山中温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-teal-200 transition line-clamp-2">
                鶴仙渓の初冬雪景色と山中漆器の器美・加能ガニ
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                芭蕉も絶賛した名湯山中温泉と渓谷美、解禁されたばかりのズワイガニ会席。
              </p>
            </Link>

            <Link 
              href="/winter-toyama-himi-onsen-kanburi-tateyama-himi-beef-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-300 bg-teal-400/20 px-2 py-0.5 rounded-full inline-block">富山・氷見温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-teal-200 transition line-clamp-2">
                富山湾越しに望む冠雪立山連峰と氷見の寒ブリ
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                冬の日本海の王者・氷見寒ブリづくしと海沿いの絶景露天風呂を巡る名宿。
              </p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
