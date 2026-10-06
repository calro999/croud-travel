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
  title: '【11・12月石川・能登和倉温泉】名物能登寒ぶり！名宿5選',
  description: '11月から12月にかけて、能登半島の優美な内海「七尾湾」に抱かれた名湯「和倉温泉（わくらおんせん）」は、冬の日本海がもたらす最高峰の美食と。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '和倉温泉 宿泊, 和倉温泉 のと楽, 美湾荘, ホテル海望, 宝仙閣, 宿守屋寿苑, 能登寒ぶり, 加能ガニ, 香箱ガニ, 能登牛, 11月 12月 和倉温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-ishikawa-noto-wakura-onsen-kanburi-kanogani-ocean-stay/"
  },
  openGraph: {
    title: '【11・12月石川・能登和倉温泉】名物能登寒ぶり！名宿5選',
    description: '11月から12月にかけて、能登半島の優美な内海「七尾湾」に抱かれた名湯「和倉温泉（わくらおんせん）」は、冬の日本海がもたらす最高峰の美食と。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-ishikawa-noto-wakura-onsen-kanburi-kanogani-ocean-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '石川能登和倉温泉の七尾湾冬景色と名湯老舗旅館'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月石川・能登和倉温泉の七尾湾冬景色と寒の味覚】名物能登寒ぶり＆加能ガニ・極上能登牛・開湯1200年の海のいで湯を愉しむ海辺名宿5選",
    description: "11月から12月にかけて、能登半島の優美な内海「七尾湾」に抱かれた名湯「和倉温泉（わくらおんせん）」は、冬の日本海がもたらす最高峰の美食と、波静かなオーシャンビューに初雪が舞い散る風情豊かな季節を迎えます。開湯約1200年、海中から湧き出た白鷺伝説に由来する塩化物泉は、国内屈指の高温泉にして豊かな塩分が身体を芯から温める「海のいで湯」。11月6日に解禁される石川県産ブランドズワイガニ「加能ガニ」や内子・外子が詰まった「香箱ガニ」、初冬の寒風に揉まれて脂が乗り切った「能登寒ぶり」のブリしゃぶ、希少な極上「能登牛」。波穏やかな七尾湾と能登島大橋を望む絶景露天風呂とともに、心温まる北陸の贅を尽くす厳選名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function WinterIshikawaWakuraPage() {
  const hotels = [
            {
              id: 1,
              name: "和倉温泉　日本の宿　のと楽",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/39556/39556.jpg",
              rating: 4.26,
              reviews: 574,
              price: "¥7,700〜",
              access: "ＪＲ　和倉温泉駅より車で５分／能越道和倉ＩＣより車で約７分",
              special: "波静かな七尾湾を望む露天風呂で檜の香りを満喫。海の見えるお部屋で能登の旬をごゆっくりご堪能下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39556%2F39556.html",
              story: "七尾湾の雄大なパノラマを一望する絶好のロケーションに建ち、能登の豊かな自然と伝統工芸の粋を集めた大規模温泉リゾート「日本の宿 のと楽」。宿の自慢は、海にせり出すように造られた展望露天風呂「滝の湯」と、開放的な大浴場。目の前に広がる穏やかな七尾湾の水面と能登島を眺めながら、開湯1200年の海の恵みである良質なナトリウム・カルシウム塩化物泉に身を委ねれば、日常の疲れが一気にほどけていきます。11月下旬から12月には、海上に舞う初雪と海霧が織りなす幻想的な景色が広がり、冬ならではの雪見露天を堪能できます。夕食は能登の冬の贅を尽くした海鮮会席。冬に最盛期を迎える「能登寒ぶり」のとろける刺身やブリしゃぶ、石川県産「加能ガニ」の茹でガニ、そしてオレイン酸豊富で旨味際立つ「能登牛」の陶板焼きなど、北陸・能登の極上食材を存分に堪能できる名宿です。",
              roomTip: "海側高層階の和室（または露天風呂付き和洋室）。窓一面に波静かな七尾湾と能登島大橋が広がり、刻一刻と表情を変える冬の海のサンライズや夕暮れを優雅に一望。",
              gourmetTip: "「冬の能登味覚極み会席」。脂の乗った能登寒ぶりの刺身としゃぶしゃぶ、石川県産加能ガニの姿盛り、能登牛の陶板ステーキ、能登コシヒカリと郷土汁。",
              highlights: [
                "七尾湾一望の展望露天風呂「滝の湯」＆能登寒ぶりしゃぶと加能ガニ・能登牛会席",
                "脂の乗った能登寒ぶり薄造り＆石川県産加能ガニ姿盛りと能登牛陶板ステーキ",
                "海側高層階から望む冬の七尾湾パノラマ＆大規模館内で安心の温泉リゾートステイ"
              ]
            },
            {
              id: 2,
              name: "和倉温泉　ゆけむりの宿美湾荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/11144/11144.jpg",
              rating: 4.53,
              reviews: 2738,
              price: "¥5,225〜",
              access: "北陸自動車道金沢森本ICよりのと里山海道経由約60分間◆駐車場無料◆JR和倉温泉駅無料送迎あり（要予約）",
              special: "露天風呂からは海が目の前！和倉の美しい景観とゆったりとした客室で極上のひとときをお過ごしください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F11144%2F11144.html",
              story: "創業明治三十七（1904）年、七尾湾の波打ち際に寄り添うように建ち、客室やロビーから海との一体感を存分に味わえる老舗旅館「ゆけむりの宿 美湾荘（びわんそう）」。館内に足を踏み入れると、輪島塗や九谷焼、加賀友禅といった石川県が世界に誇る伝統美術品が優雅に配され、気品ある和の情緒が旅人を包み込みます。宿の象徴である大浴場「真珠風呂」や海を間近に臨む露天風呂には、和倉の源泉が絶え間なく注がれ、湯船に浸かるとまるで七尾湾の水面に浮かんでいるかのような至福の浮遊感に浸れます。夕食は旬の海の幸を知り尽くした料理長が手掛ける本格会席。解禁されたばかりの加能ガニや濃厚な旨味の香箱ガニ、荒波で身の締まった寒ヒラメやアオリイカ、冬の寒ブリなど、七尾港直送の新鮮な魚介が並び、能登の美酒とともに贅沢な宵を過ごせます。",
              roomTip: "七尾湾一望の海側純和風客室。静かな波の音を聞きながら、初雪に煙る湾内の絶景を眺めて過ごす静謐な大人の時間。",
              gourmetTip: "「能登前冬会席」。七尾港直送の鮮魚盛り合わせ、能登寒ぶり大根小鍋、香箱ガニの甲羅盛り、能登豚や能登牛の季節料理、石川の地酒飲み比べ。",
              highlights: [
                "創業1904年・輪島塗や友禅が彩る館内＆海を間近に臨む大浴場「真珠風呂」と能登前冬会席",
                "七尾港直送の鮮魚盛り合わせ＆香箱ガニ甲羅盛りと能登寒ぶり大根小鍋の贅",
                "波静かな水面を目前にする贅沢空間＆夫婦旅や大人のご褒美旅行に最高峰の格式"
              ]
            },
            {
              id: 3,
              name: "和倉温泉　ホテル海望",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14395/14395.jpg",
              rating: 4.51,
              reviews: 1065,
              price: "¥9,900〜",
              access: "JR和倉温泉駅から当館無料送迎バスで5分。金沢から「のと里山海道」徳田大津JCT、和倉IC経由、車で約1時間。",
              special: "お客様に愛され続けて創業130余年。海を望むという名である理由、感動を一度ご体感ください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14395%2F14395.html",
              story: "創業百二十余年、七尾西湾の最前列に位置し、和倉温泉の中でも屈指のパノラマ絶景を誇る名門宿「ホテル海望（かいぼう）」。その名の通り、すべての客室や大浴場から七尾湾の雄大な海景を見晴らすことができ、海から立ち上る朝日の美しさは格別の感動を与えてくれます。海に面した展望大浴場と露天風呂「海望の湯」は、和倉特有の良質な塩化物泉が身体の芯までぽかぽかに温めてくれ、湯冷めしにくい泉質が冬旅に嬉しいポイント。冬の冷気を感じつつ、海面を優雅に飛翔する海鳥や波のきらめきを眺める露天浴はまさに至福です。夕食は能登里山里海の豊かな恵みを凝縮した和食会席。冬の味覚の王様・加能ガニの炭火焼きや茹で上げ、脂がたっぷりと乗った寒ぶりの照り焼きや刺身、滋味深い能登野菜の煮物など、素材本来の力強い旨味を引き出した料理が舌を喜ばせます。",
              roomTip: "海側和洋室または最上階パノラマ客室。ワイドな窓から七尾湾が一望でき、海を眺めながらゆったり寛げるツインベッドと畳スペースを完備。",
              gourmetTip: "「冬の七尾湾海鮮会席」。炭火で香ばしく焼き上げる加能ガニ、能登寒ぶりの薄造り、能登牛のすき焼き小鍋、能登島産冬野菜の炊き合わせ、金沢の老舗醤油仕立て。",
              highlights: [
                "七尾西湾の最前列・全室オーシャンビュー＆朝日に染まる絶景露天風呂と炭火焼きガニ",
                "炭火で香ばしく焼く加能ガニ＆能登牛すき焼き小鍋と能登島産冬野菜の炊き合わせ",
                "ツインベッド完備のモダン和洋室＆カップルや三世代旅行に人気のオーシャンビュー"
              ]
            },
            {
              id: 4,
              name: "和倉温泉　味な宿　宝仙閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14026/14026.jpg",
              rating: 4.15,
              reviews: 379,
              price: "¥6,600〜",
              access: "北陸道金沢森本IC・のと里山海道・能越道利用 和倉ICより５分 / JR七尾線「和倉温泉駅」より無料送迎あり（要連絡）",
              special: "能登半島の旬の幸と良質の温泉で至福の時間が過ごせる家庭的な宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14026%2F14026.html",
              story: "和倉温泉街の落ち着いた一角に佇み、「味な宿」の名にふさわしい料理自慢の隠れ家的な老舗旅館「宝仙閣（ほうせんかく）」。過度な華美さを排し、旅人一人ひとりに寄り添う温かなおもてなしと、能登の旬魚介を贅沢に盛り込んだ手作りの会席料理がリピーターから絶大な支持を集めています。館内のお風呂には良質な和倉の天然温泉が引かれ、海水の成分に近い豊かなミネラルを含む塩化物泉が疲れた身体を心地よく包み込み、肌をしっとりすべすべに整えてくれます。夕食は料理長が毎朝能登の漁港や市場へ足を運び、自らの目で厳選した海の幸を中心とした極上膳。冬の日本海が育んだ能登寒ぶりのお造りやカブト煮、ズワイガニの甲羅焼き、アツアツの鍋料理など、手間暇を惜しまず仕込まれた逸品が次々と並びます。落ち着いた空間で静かに美食と温泉に浸りたい大人の冬旅に最適な一軒です。",
              roomTip: "落ち着いた純和風客室。静けさに包まれた空間で畳の温もりに寛ぎ、美味しい料理と名湯を心ゆくまで堪能できます。",
              gourmetTip: "「味な宿特選・冬の能登づくし会席」。旬の能登寒ぶりの刺身と照り焼き、ズワイガニの姿茹で、能登牛の陶板焼き、名物郷土料理いしる鍋、能登米の炊きたてご飯。",
              highlights: [
                "料理自慢の隠れ家老舗旅館＆板長が厳選する能登寒ぶりやズワイガニの本格手作り膳",
                "旬の能登寒ぶりカブト煮＆ズワイガニ甲羅焼きと伝統のいしる鍋を味わう極楽膳",
                "アットホームで心温まる細やかなもてなし＆静かに温泉と美食を楽しむ隠れ家旅"
              ]
            },
            {
              id: 5,
              name: "和倉温泉　宿守屋寿苑",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9707/9707.jpg",
              rating: 3.69,
              reviews: 769,
              price: "¥6,600〜",
              access: "JR七尾線『和倉温泉駅』下車、旅館送迎バスで５分/北陸道金沢森本IC下車～のと里山海道経由能越道『和倉IC』下車１０分",
              special: "当宿は全室、海眺望の客室です。【月の雫フロア ２０２３年春リニューアル】",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9707%2F9707.html",
              story: "七尾湾の穏やかな波打ち際に堂々と建ち、全客室から海を一望できる絶好のロケーションが魅力の大型温泉旅館「宿守屋寿苑（やどもりやじゅえん）」。広々とした館内は開放感にあふれ、海を臨むロビーラウンジからは静かに揺れる七尾湾の水面が絵画のように広がります。宿の自慢である大浴場と海沿いの露天風呂には、和倉の名湯が滔々と注がれ、寄せては返すさざ波の音に耳を傾けながら、心洗われるような湯浴みが楽しめます。11月・12月の初冬には、凛と澄んだ空気の中で遠くの能登の山々や能登島大橋を望む絶景露天風呂が格別の心地よさ。夕食は日本海の海の幸を豪快に盛り込んだ舟盛り付き会席や、ズワイガニ・寒ぶり・能登牛を組み合わせた贅沢なプランが充実。リーズナブルな価格設定ながら充実した設備と温かなもてなしが揃い、家族旅行やグループ旅行にも抜群の安心感を誇ります。",
              roomTip: "全室オーシャンビューの広々和室。窓いっぱいに広がる七尾湾の水平線を眺めながら、開放的なリゾート気分でのんびりと寛げます。",
              gourmetTip: "「冬の味覚舟盛り会席」。日本海の旬魚を豪快に盛り込んだ舟盛り、能登寒ぶりの小鍋仕立て、ズワイガニの炭火焼き、能登牛陶板焼き、地場産コシヒカリ。",
              highlights: [
                "七尾湾沿いの全室オーシャンビュー客室＆日本海の豪快舟盛りとズワイガニ炭火焼き",
                "日本海旬魚の豪華舟盛り＆能登寒ぶり小鍋と能登牛陶板焼きの贅沢ボリューム",
                "広々とした客室と開放的な大浴場＆グループやファミリー旅行に抜群のコスパ"
              ]
            }
  ];

  const faqList = [
  {
    "q": "11月・12月の和倉温泉の気候や積雪、初雪の時期はいつ頃ですか？",
    "a": "和倉温泉は能登半島の中央部、波穏やかな七尾湾（内海）に面しています。外浦（輪島など）に比べると海風は穏やかですが、11月中旬以降は北陸特有の時雨（しぐれ）や冷え込みが強まります。11月の気温は最高13〜17℃、最低5〜9℃程度ですが、11月下旬から12月上旬にかけて初雪が降ることがあります。12月に入ると最高気温は8〜11℃、最低気温は1〜4℃前後となり、時折雪が舞う白銀の情景が広がります。厚手の防寒コート、マフラー、手袋に加え、急な雨や雪に対応できる折りたたみ傘や滑りにくい靴をご用意ください。"
  },
  {
    "q": "金沢や能登空港からのアクセス方法と冬道運転の注意点は？スタッドレスタイヤは必要？",
    "a": "金沢駅からはJR七尾線の特急能登かがり火号または観光列車「花嫁のれん」を利用して和倉温泉駅まで約60分と、列車でのアクセスが非常に快適です。のと里山空港からは「ふるさとタクシー（乗合タクシー・要予約）」で約50分です。車の場合は、のと里山海道を利用して金沢方面から約70分ですが、11月下旬以降は路面凍結や降雪が発生するため、スタッドレスタイヤの装着が必須となります。特にのと里山海道の山間部や早朝・夜間の橋の上などはブラックアイスバーンになりやすいため、慎重な運転を心がけてください。"
  },
  {
    "q": "11月・12月に和倉温泉で解禁される「冬の味覚」にはどんなものがありますか？",
    "a": "11月から12月は、能登の美食が1年で最も豪華に揃うゴールデンシーズンです。まず毎年11月6日にズワイガニ漁が解禁され、石川県産のオスのズワイガニ「加能ガニ（青タグが目印）」の上品な甘みとぎっしり詰まった身肉、メスの「香箱ガニ（こうばこがに）」の濃厚な内子・外子・カニ味噌を味わえます。さらに11月下旬からは日本海の荒波で鍛えられ脂がたっぷり乗った「能登寒ぶり」が登場。刺身はもちろん、サッと出汁にくぐらせる「ブリしゃぶ」や「ぶり大根」は言葉を失う美味です。希少な黒毛和牛「能登牛」や能登の伝統発酵調味料「いしる」を使った郷土料理も必食です。"
  },
  {
    "q": "和倉温泉の泉質や特徴、開湯の歴史について教えてください。",
    "a": "和倉温泉は開湯約1200年、平安時代に漁師が七尾湾の海上で傷を癒やす一羽の白鷺を見て温泉の湧出を発見したという「白鷺伝説」が伝わる海のいで湯です。泉質は「ナトリウム・カルシウム-塩化物泉（高温泉）」で、源泉温度は約80〜90℃と非常に高温。海水とほぼ同じ濃度の塩分を含んでおり、毛穴を引き締めて水分の蒸発を防ぐため抜群の保湿・保温効果を発揮し、「温まりの湯」「美肌の湯」として親しまれています。神経痛、リウマチ、胃腸病、婦人病に効能があり、飲泉所では適量を含有成分豊かな健康湯として飲むこともできます。"
  },
  {
    "q": "和倉温泉周辺の初冬のおすすめ観光・散策スポットは？",
    "a": "温泉街には湯元の「和倉温泉総湯（共同浴場）」や七尾湾を望む「湯っ足りパーク（妻恋舟の湯・足湯）」があり、海風を感じながらの足湯散策が楽しめます。また、七尾湾に架かる全長1,050mの「能登島大橋」を渡れば、能登島水族館やガラス美術館があり、冬のドライブコースとしても人気です。七尾市街地では国の重要伝統的建造物群保存地区である一本杉通りや、新鮮な能登の鮮魚や干物が並ぶ「能登食祭市場」でのお土産探しがおすすめ。初冬の澄んだ空気の中で、心洗われる北陸の旅情を満喫できます。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://croud-travel.pages.dev/winter-ishikawa-noto-wakura-onsen-kanburi-kanogani-ocean-stay#article',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://croud-travel.pages.dev/#website',
          'name': 'クラドトラベル',
          'url': 'https://croud-travel.pages.dev/'
        },
        'headline': "【11・12月石川・能登和倉温泉の七尾湾冬景色と寒の味覚】名物能登寒ぶり＆加能ガニ・極上能登牛・開湯1200年の海のいで湯を愉しむ海辺名宿5選",
        'description': "11月から12月にかけて、能登半島の優美な内海「七尾湾」に抱かれた名湯「和倉温泉（わくらおんせん）」は、冬の日本海がもたらす最高峰の美食と、波静かなオーシャンビューに初雪が舞い散る風情豊かな季節を迎えます。開湯約1200年、海中から湧き出た白鷺伝説に由来する塩化物泉は、国内屈指の高温泉にして豊かな塩分が身体を芯から温める「海のいで湯」。11月6日に解禁される石川県産ブランドズワイガニ「加能ガニ」や内子・外子が詰まった「香箱ガニ」、初冬の寒風に揉まれて脂が乗り切った「能登寒ぶり」のブリしゃぶ、希少な極上「能登牛」。波穏やかな七尾湾と能登島大橋を望む絶景露天風呂とともに、心温まる北陸の贅を尽くす厳選名宿5選を徹底解説します。",
        'inLanguage': 'ja',
        'mainEntityOfPage': 'https://croud-travel.pages.dev/winter-ishikawa-noto-wakura-onsen-kanburi-kanogani-ocean-stay',
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
        '@id': 'https://croud-travel.pages.dev/winter-ishikawa-noto-wakura-onsen-kanburi-kanogani-ocean-stay#destination',
        'name': '石川・能登和倉温泉',
        'description': '能登半島・七尾湾に面した開湯約1200年の海のいで湯。冬の能登寒ぶり、加能ガニ、能登牛と絶景オーシャンビュー露天が魅力。',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 37.0874,
          'longitude': 136.9189
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://croud-travel.pages.dev/winter-ishikawa-noto-wakura-onsen-kanburi-kanogani-ocean-stay#faq',
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
        '@id': 'https://croud-travel.pages.dev/winter-ishikawa-noto-wakura-onsen-kanburi-kanogani-ocean-stay#hotellist',
        'name': '石川能登和倉温泉のおすすめ名宿5選',
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
      <header className="relative bg-gradient-to-r from-stone-900 via-slate-900 to-teal-950 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-teal-200">
            <Link href="/" className="hover:underline hover:text-white transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:underline hover:text-white transition">特集一覧</Link>
            <span>/</span>
            <span className="text-white font-medium">石川・能登和倉温泉</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-xs sm:text-sm font-semibold tracking-wide">
            <Fish className="w-4 h-4 text-teal-300" />
            11月・12月 能登寒ぶり＆加能ガニ・七尾湾海辺の温泉特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月石川・能登和倉温泉】七尾湾冬景色と寒の味覚
            <span className="block text-teal-300 text-lg sm:text-2xl mt-3 font-normal">
              名物能登寒ぶり＆加能ガニ・極上能登牛・開湯1200年の海のいで湯を愉しむ海辺名宿5選
            </span>
          </h1>

          <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-4xl">
            11月から12月にかけて、能登半島の優美な内海「七尾湾」に抱かれた名湯「和倉温泉（わくらおんせん）」は、冬の日本海がもたらす最高峰の美食と、波静かなオーシャンビューに初雪が舞い散る風情豊かな季節を迎えます。開湯約1200年、海中から湧き出た白鷺伝説に由来する塩化物泉は、国内屈指の高温泉にして豊かな塩分が身体を芯から温める「海のいで湯」。11月6日に解禁される石川県産ブランドズワイガニ「加能ガニ」や内子・外子が詰まった「香箱ガニ」、初冬の寒風に揉まれて脂が乗り切った「能登寒ぶり」のブリしゃぶ、希少な極上「能登牛」。波穏やかな七尾湾と能登島大橋を望む絶景露天風呂とともに、心温まる北陸の贅を尽くす厳選名宿5選を徹底解説します。
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-teal-200">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Calendar className="w-4 h-4 text-teal-300" />
              <span>ベストシーズン: 11月中旬〜12月下旬（加能ガニ解禁＆寒ぶり最盛期）</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Utensils className="w-4 h-4 text-teal-300" />
              <span>旬の味覚: 能登寒ぶり・加能ガニ・香箱ガニ・能登牛・能登野菜</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-teal-300" />
              <span>泉質: ナトリウム・カルシウム-塩化物泉（高温泉・海の保温美肌湯）</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月石川・能登和倉温泉】名物能登寒ぶり！名宿5選","item":"https://croud-travel.pages.dev/winter-ishikawa-noto-wakura-onsen-kanburi-kanogani-ocean-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-800 text-sm font-bold bg-teal-50 px-3 py-1 rounded-full">
            <Waves className="w-4 h-4" />
            初冬の能登和倉・七尾湾の旅情
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
            波静かな内海の冬情景と湯煙、日本海屈指の寒の美味を五感で堪能する旅
          </h2>
          <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            <p>
              能登半島の懐に抱かれた七尾湾は、荒波が打ち寄せる外浦とは対照的に、湖のように穏やかな水面が広がる天然の良港です。その波打ち際に沿って、全国に名を馳せる名旅館が立ち並ぶ和倉温泉。11月から12月にかけて、北陸の空は時折雪が舞い散る初冬の装いへと変わり、海面から立ち上る湯けむりと海霧が、幻想的な風情を醸し出します。
            </p>
            <p>
              和倉の湯の歴史は古く、約1200年前の平安時代、海中から湧き出た湯で傷を癒やす白鷺を漁師が見つけたことに始まります。地下深くから湧き出す源泉は80℃を超える高温泉で、海水とほぼ同じミネラルと塩分を含有。湯船に浸かると肌にしっとりと塩分が密着し、湯上がり後も驚くほどポカポカとした温もりが持続します。海風を受けながら七尾湾を眺める露天風呂は、冬の寒さを完全に忘れさせてくれる極楽のひとときです。
            </p>
            <p>
              そして何より、11月から12月は「能登の冬の味覚」が最高潮に達する奇跡の季節。11月6日に解禁を迎える青タグ付きの石川県産ズワイガニ「加能ガニ」と、メスの「香箱ガニ」。さらに北からの冷たい海流に乗って南下し、七尾湾の定置網に水揚げされる「能登寒ぶり」は、身全体に霜降りのように脂が回り、刺身やしゃぶしゃぶで至高の美味を奏でます。希少な能登牛とともに地酒「宗玄」や「手取川」で味わう夜は、北陸の旅の最高の記憶となります。
            </p>
          </div>
        </section>

        {/* 3 Pillars Section */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              11月・12月の和倉温泉を満喫する3つの醍醐味
            </h2>
            <p className="text-sm text-stone-500">
              海の恵みあふれる高温泉と冬蟹・寒ぶり、七尾湾の静寂美
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700">
                <Fish className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                解禁「加能ガニ・香箱ガニ」＆「能登寒ぶり」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                11月6日解禁の青タグ加能ガニの甘みと香箱ガニの濃厚内子。荒波で鍛えられた能登寒ぶりの極上ブリしゃぶと希少な能登牛。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                七尾湾一望のオーシャンビュー雪見露天
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                海中から湧き出た約80℃の高温泉塩化物泉。身体の芯から温まる湯船から望む、冬の波静かな七尾湾と能登島大橋の絶景。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                名湯総湯と能登の伝統美術・食祭市場
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                和倉温泉総湯での温泉たまご体験や湯っ足りパークの足湯。輪島塗や九谷焼が彩る名旅館の空間と、能登食祭市場の賑わい。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-10">
          <div className="border-b border-stone-200 pb-4">
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              和倉温泉で11月・12月に泊まりたい名湯宿5選
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
                    <div className="absolute top-4 left-4 bg-teal-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs flex items-center gap-1.5 shadow-xs">
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
                          <span className="text-base sm:text-lg font-bold text-teal-900">{h.price}</span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-2xl font-bold text-stone-900 hover:text-teal-800 transition">
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
                        <Sparkle className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-stone-800">おすすめの客室・滞在スタイル: </span>
                          <span className="text-stone-600">{h.roomTip}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Utensils className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
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
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
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
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition shadow-xs hover:shadow-md shrink-0"
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
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <Compass className="w-6 h-6 text-teal-800" />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              初冬の能登和倉温泉を満喫する1泊2日おすすめモデルコース
            </h2>
          </div>
          <div className="space-y-6 text-stone-700">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">1日目</span>
                金沢から特急で能登路へ＆七尾湾足湯散策と加能ガニ・能登寒ぶり会席
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-stone-600">
                金沢駅よりJR七尾線特急「能登かがり火」に乗車し、のどかな能登の田園風景を眺めながら和倉温泉駅へ（約60分）。旅館の送迎バスで温泉街へ向かい、まずは「湯っ足りパーク」の無料足湯「妻恋舟の湯」へ。七尾湾のさざ波を目前に足を浸し、潮風を感じながらひと息つきます。「和倉温泉総湯」の広場で源泉で作る温泉たまごを味わった後、15:00に海辺の名旅館へチェックイン。海と一体になれる絶景露天風呂に浸かり、初雪舞う七尾湾と能登島大橋の情景を堪能します。夕食は解禁直後の加能ガニ姿盛りや香箱ガニ、脂の乗った能登寒ぶりのブリしゃぶ、能登牛の陶板焼きを、能登杜氏が醸す地酒「宗玄」とともに贅沢に味わいます。
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">2日目</span>
                七尾湾の朝日に輝く朝風呂・能登食祭市場と一本杉通りの老舗巡り
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-stone-600">
                翌朝は七尾湾の水平線から昇る神々しい朝日を眺めながら露天朝風呂へ。能登コシヒカリと新鮮な焼き魚、郷土の小鉢が並ぶ朝食を楽しみ、10:00にチェックアウト。タクシーまたはバスで七尾市街地へ移動し、新鮮な寒ブリや干物、珍味が並ぶ「能登食祭市場」でお土産を購入。さらに国の登録有形文化財の商家が連なる「一本杉通り」を散策し、銘菓や昆布の老舗を巡ります。七尾駅から再び特急列車に乗り、冬の金沢観光と組み合わせて豊かな北陸の旅を締めくくります。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Gourmet Section */}
        <section className="bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-300 text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Fish className="w-4 h-4" />
            能登和倉 冬の味覚図鑑
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            冬の日本海が育む三大至宝「能登寒ぶり」「加能ガニ」「能登牛」
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-stone-200 text-xs sm:text-sm leading-relaxed">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Waves className="w-4 h-4 text-teal-400" />
                脂の乗り極限「能登寒ぶり」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                11月下旬から七尾湾や能登沖の定置網に入る寒ぶり。冷たい荒波で身が引き締まり、白く輝くような美しいサシが入ります。熱々の昆布出汁にサッとくぐらせる「ブリしゃぶ」や、香ばしい照り焼き、大根の煮物は冬の至福の味覚です。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-teal-400" />
                冬の日本海の王様「加能ガニ＆香箱ガニ」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                11月6日に解禁される石川県産ズワイガニ。オスの「加能ガニ」はぎっしり詰まった太い脚と濃厚な味噌が自慢。メスの「香箱ガニ」は甲羅に詰まった赤い内子（卵巣）とプチプチの外子の食感が絶品で、北陸の冬にしか出会えない贅沢です。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-400" />
                幻のブランド黒毛和牛「能登牛」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                能登の清らかな空気と名水で丹精込めて肥育される「能登牛」。出荷頭数が少なく希少価値の高い幻の銘柄牛で、オレイン酸を豊富に含み、口に入れた瞬間に上品な香りと甘みがふわっと溶け出します。ステーキや陶板焼きで絶品です。
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
            11月・12月の和倉温泉 交通アクセス＆冬旅のアドバイス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-teal-700" />
                特急列車・車でのアクセス方法
              </h3>
              <p>
                鉄道の場合は、金沢駅よりJR七尾線特急「能登かがり火」で和倉温泉駅まで約60分。各旅館の無料送迎バスを利用すれば、雪道運転の心配なく安全に直行できます。
              </p>
              <p>
                車の場合は金沢方面からのと里山海道経由で約70分。11月下旬以降は路面凍結や積雪の恐れがあるため、スタッドレスタイヤの装着が必須となります。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-teal-700" />
                気候と防寒・海辺散策の注意点
              </h3>
              <p>
                12月の和倉温泉は海風により体感温度が低く、急な雨や雪（北陸の時雨）が降ることがあります。防風・防水性のあるダウンコートや傘をご用意ください。
              </p>
              <p>
                海沿いの遊歩道や湯っ足りパーク（足湯）周辺は波しぶきや凍結で滑りやすくなる場合があるため、歩きやすい靴での散策をおすすめします。
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
            初冬の石川能登和倉温泉旅行 FAQ
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
              あわせて読みたい北陸・石川の冬蟹・冬温泉特集
            </h3>
            <p className="text-xs sm:text-sm text-teal-200">
              冬の味覚の王様・ズワイガニや雪見露天を堪能する北陸各地の厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-kanazawa-kenrokuen-yukizuri-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-300 bg-teal-400/20 px-2 py-0.5 rounded-full inline-block">石川・金沢</span>
              <h4 className="text-xs font-bold text-white group-hover:text-teal-200 transition line-clamp-2">
                金沢兼六園の雪吊りと近江町市場カニ三昧ステイ
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                兼六園の初冬の風物詩「雪吊り」と近江町市場の香箱ガニ・加能ガニを堪能。
              </p>
            </Link>

            <Link 
              href="/winter-ishikawa-kaga-yamashiro-kano-crab-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-300 bg-teal-400/20 px-2 py-0.5 rounded-full inline-block">石川・加賀山代温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-teal-200 transition line-clamp-2">
                加賀山代温泉の総湯情緒と加能ガニフルコース
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                赤瓦の古総湯を囲む温泉街と開湯1300年の名湯、極上のズワイガニ会席。
              </p>
            </Link>

            <Link 
              href="/winter-fukui-awara-onsen-echizen-crab-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-300 bg-teal-400/20 px-2 py-0.5 rounded-full inline-block">福井・あわら温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-teal-200 transition line-clamp-2">
                あわら温泉の本場越前ガニと関西の奥座敷名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                黄色いタグの越前ガニと多彩な源泉、数寄屋造りの庭園名宿で味わう至高の冬。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-ishikawa-noto-wakura-onsen-kanburi-kanogani-ocean-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
