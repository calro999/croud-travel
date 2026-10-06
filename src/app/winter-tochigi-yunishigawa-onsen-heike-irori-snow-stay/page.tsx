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
  title: '【11・12月栃木・日光湯西川温泉】とちぎ和牛！名宿5選',
  description: '11月から12月にかけて、栃木県日光市の深山幽谷に抱かれた「湯西川温泉」は、広葉樹の紅葉が散り落ちるとともに白銀の初雪が舞い始め。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '湯西川温泉 宿泊, 本家伴久, 彩り湯かしき 花と華, 平の高房, 揚羽, ホテル湯西川, 囲炉裏料理, 平家狩場焼, とちぎ和牛, 雪見露天, 11月 12月 湯西川',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-tochigi-yunishigawa-onsen-heike-irori-snow-stay/"
  },
  openGraph: {
    title: '【11・12月栃木・日光湯西川温泉】とちぎ和牛！名宿5選',
    description: '11月から12月にかけて、栃木県日光市の深山幽谷に抱かれた「湯西川温泉」は、広葉樹の紅葉が散り落ちるとともに白銀の初雪が舞い始め。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-tochigi-yunishigawa-onsen-heike-irori-snow-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '日光湯西川温泉の初雪渓谷美と囲炉裏料理名宿'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月栃木・日光湯西川温泉の初雪渓谷美と平家落人伝説】名物囲炉裏会席・平家狩場焼＆とちぎ和牛・源泉かけ流し雪見露天名宿5選",
    description: "11月から12月にかけて、栃木県日光市の深山幽谷に抱かれた「湯西川温泉」は、広葉樹の紅葉が散り落ちるとともに白銀の初雪が舞い始め、茅葺き屋根の古民家や湯西川渓谷が静謐な冬景色に包まれます。壇ノ浦の戦いに敗れた平家の落人たちが落ち延び、河原の炭火で野鳥や川魚を焼いたことに端を発する伝統の「本場囲炉裏（いろり）料理」平家狩場焼、山椒香るばんだい餅、とろける霜降りの「とちぎ和牛」、香ばしいイワナの骨酒。そして湯守が守り継ぐpH9前後の柔らかな源泉かけ流し雪見露天風呂。深山に佇む平家伝承の厳選名宿5選を徹底解説します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function WinterTochigiYunishigawaPage() {
  const hotels = [
            {
              id: 1,
              name: "湯西川温泉　本家伴久　～時空を渡るかずら橋～",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/50216/50216.jpg",
              rating: 4.00,
              reviews: 579,
              price: "¥23,000〜",
              access: "東武鉄道会津鬼怒川線　湯西川温泉駅下車後バスで20分、本家伴久旅館前下車（注：終点より１つ手前の湯西川温泉街中心地）",
              special: "“かずら橋”を渡り、隠れ館での囲炉裏会席。民芸調のお部屋と清流沿いの露天も自慢！湯西川温泉　本家伴久",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50216%2F50216.html",
              story: "壇ノ浦の合戦から逃れた平家落人の直系二十五代目が継承し、創業寛永4（1627）年という350年超の悠久の歴史を誇る老舗旅館「本家伴久（ほんけばんきゅう）」。湯西川の清流に架けられた宿の名物「時空（とき）を渡るかずら橋」を一歩渡ると、そこには囲炉裏の炭火が赤々と灯る幻想的な食事処「平家隠れ館」が広がります。夕食は銘木に囲まれた囲炉裏を囲み、竹串に刺した山魚や野鳥、特製の味噌を塗ったばんだい餅をじっくり炙る伝統の狩場焼と、地元契約農家から届く深山野菜、極上のとちぎ和牛を堪能。湯西川の渓流に面した巨石露天風呂や館内の木風呂には、加水・加温一切なしの自家源泉がこんこんと注がれ、舞い散る初雪を眺めながら極上の雪見風呂を満喫できます。歴史の重みと温かな木造建築の情緒が、非日常の旅情を極限まで高めてくれます。",
              roomTip: "清流館・渓流沿い和室（または本館露天風呂付き客室）。窓を開けると湯西川のせせらぎと白銀に染まりゆく渓谷美が目の前に広がり、川のせせらぎに包まれながら贅沢な静寂に浸れます。",
              gourmetTip: "「名物本家伴久・平家狩場焼囲炉裏会席」。炭火の熾火でじっくり焼き上げる岩魚の塩焼き、特製味噌のばんだい餅、鹿肉や鶏つくねの串焼き、とちぎ和牛の陶板焼き、熱々のイワナ骨酒。",
              highlights: [
                "平家直系25代目が守る創業寛永4年の老舗＆かずら橋を渡る囲炉裏処「平家隠れ館」",
                "炭火でじっくり焼く岩魚塩焼きと平家狩場焼＆とちぎ和牛と香り高き竹筒イワナ骨酒",
                "初冬の静寂に包まれる木造宿の風情＆大切な記念日や大人の隠れ家旅行に最高峰の格式"
              ]
            },
            {
              id: 2,
              name: "湯西川温泉　彩り湯かしき　花と華",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2338/2338.jpg",
              rating: 4.07,
              reviews: 1749,
              price: "¥16,800〜",
              access: "東武鉄道・野岩鉄道にて湯西川温泉駅下車。路線バスにて20分。（1日1回無料送迎バス運行有※要事前電話予約）",
              special: "深山の里の「美肌の湯」で湯めぐりを☆伝統の囲炉裏料理「平家お狩場焼」に舌鼓",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2338%2F2338.html",
              story: "湯西川の豊かな自然林に包まれ、新旧の和の意匠が見事に調和した心安らぐ温泉旅館「彩り湯かしき 花と華」。宿の最大の自慢は、敷地内に湧き出る泉質の異なる多彩な湯舟を巡る贅沢な温泉体験です。アルカリ性単純温泉の柔らかな自家源辰の湯は、肌の角質をやさしく洗い流し湯上がりは絹のように滑らかな肌触りになると女性客からも高い支持を集めています。湯西川渓谷を望む広々とした岩露天風呂では、初冬の澄み切った冷気を感じつつ、湯けむりの向こうに雪化粧した山肌を望む風流な雪見浴が楽しめます。夕食は専用の囲炉裏処で味わう「平家お狩場焼会席」、または旬の味覚を彩り豊かに盛り込んだ京風会席。とちぎ和牛のステーキや日光名物の引き上げ生ゆば、山菜やきのこなど、栃木と湯西川の豊かな恵みが炭火の香りとともにテーブルを華やかに彩ります。",
              roomTip: "花風亭（または華府）の渓谷側和洋室。落ち着いた現代的なベッドルームと純和風のリビングが一体となり、大きなピクチャーウィンドウから初雪の山並みを快適に望めます。",
              gourmetTip: "「彩り平家囲炉裏会席」。香ばしく炙る一升べら（鶏肉と山芋のつくね串）やばんだい餅、霜降りとちぎ和牛の鉄板ステーキ、日光名産の刺身ゆば、滋味深い山菜鍋。",
              highlights: [
                "自家源泉を含む多彩な湯巡り＆湯西川渓谷望む絶景雪見露天と平家お狩場焼会席",
                "一升べら炭火串焼きと日光生ゆば＆霜降りとちぎ和牛ステーキを堪能する極上膳",
                "渓谷美を望む快適な和洋室＆女子旅や夫婦旅に嬉しい美肌温泉と細やかなもてなし"
              ]
            },
            {
              id: 3,
              name: "いろり会席と源泉１００％秘湯の宿　湯西川温泉　上屋敷　平の高房",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/32086/32086.jpg",
              rating: 4.54,
              reviews: 587,
              price: "¥15,300〜",
              access: "会津鬼怒川線　湯西川温泉駅→バス（約２５分）湯西川温泉→徒歩（２０分）／日光宇都宮道路　今市ＩＣ→121号線経由約６０分",
              special: "湯西川温泉の最も奥にある木造りの秘湯の宿。源泉掛け流しの美肌の湯が自慢。サウナ付き客室もございます！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32086%2F32086.html",
              story: "湯西川温泉街の最奥、標高約750mの高台に位置し、平家の武家屋敷を思わせる重厚な佇まいが旅情をかき立てる「上屋敷 平の高房（たいらのたかふさ）」。白壁と茅葺きの門をくぐると、囲炉裏の煙と木の香りが漂い、まるで昔話の世界に迷い込んだかのような静けさが広がります。日本秘湯を守る会にも加盟していた名宿であり、宿のすべての湯舟に注がれるのは敷地内から自然湧出する100%源泉掛け流しの天然温泉。無色透明でまろやかなアルカリ性の湯は、湯冷めしにくく身体の芯までぽかぽかに温めてくれます。露天風呂からは手つかずの自然林と初雪に覆われた山肌が一望でき、夜には満天の星空と雪の反射が織りなす神秘的な絶景が広がります。夕食は全席個室の囲炉裏処でいただく「平家ゆかりの狩場焼」。直火でじっくり焼き上げる川魚や野趣あふれるジビエ料理は格別の味わいです。",
              roomTip: "本館または離れ客室。囲炉裏の間や木造の梁がむき出しになった武家屋敷風の造りで、静寂に包まれながらプライベートな時間を心ゆくまで堪能できます。",
              gourmetTip: "「源泉宿の特選本陣囲炉裏膳」。炭火でじっくり火を入れる奥日光・湯西川産の川魚塩焼き、鹿肉ロースの陶板焼き、名物ばんだい餅、地元産手打ち蕎麦、熱燗の地酒。",
              highlights: [
                "標高750mの自然林に抱かれる武家屋敷＆自然湧出100%源泉掛け流し秘湯と個室囲炉裏膳",
                "奥日光清流魚の塩焼きと鹿肉陶板焼き＆香ばしいばんだい餅と手打ち蕎麦の滋味",
                "静謐な山奥で過ごす静かな時間＆秘湯ファンを唸らせる上質な湯ざわりと野趣の贅"
              ]
            },
            {
              id: 4,
              name: "湯西川温泉　桓武平氏ゆかりの宿　揚羽～ＡＧＥＨＡ～",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108937/108937.jpg",
              rating: 4.27,
              reviews: 5788,
              price: "¥6,050〜",
              access: "東武鉄道会津鬼怒川線湯西川温泉駅～バス20分（桓武平氏ゆかりの宿揚羽前）東北道宇都宮IC～日光宇都宮道路今市IC～50分",
              special: "売上高No1日本最大の宿泊予約サイト楽天トラベル【ゴールドアワード3年連続受賞】栃木県No1の人気宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108937%2F108937.html",
              story: "古民家や武家屋敷の古材を日本全国から集めて移築し、館内至る所に骨董品や時代箪笥が配された異国情緒すら漂うノスタルジック宿「桓武平氏ゆかりの宿 揚羽～ＡＧＥＨＡ～」。一歩足を踏み入れると、行灯の柔らかな灯りと囲炉裏の炭の香りが迎えてくれ、非日常のタイムトリップへと誘われます。宿自慢の渓流沿い露天風呂「武家風呂」からは、湯西川の清流と対岸の自然林が目前に迫り、初雪の季節には水面から立ち上る川霧と雪景色が水墨画のような美しさを描き出します。夕食は全国でも珍しい「囲炉裏炭火焼きビュッフェ（武家料理バイキング）」。串に刺さった山女魚や鶏つくね、五平餅を自らの手で囲炉裏の炭火にかざして炙る体験は旅の最高の思い出に。湯西川の郷土料理や地酒とともに、リーズナブルながら本格的な落人情緒を堪能できます。",
              roomTip: "清流側和室。湯西川のせせらぎが心地よく響き、アンティーク調の家具や古布の装飾が落ち着いた雰囲気を醸し出すレトロモダンなお部屋。",
              gourmetTip: "「囲炉裏炭火焼き＆武家料理ビュッフェ」。囲炉裏で自由に炙る川魚の串焼きやつくね串、郷土の煮物、日光ゆば料理、揚げたて天ぷら、湯西川仕込みの味噌汁。",
              highlights: [
                "古民家移築のレトロモダン武家宿＆自分で炙る囲炉裏炭火焼きビュッフェと清流露天",
                "囲炉裏で炙る山女魚とつくね串＆日光名物ゆばと素朴な郷土料理を味わう美食体験",
                "行灯揺れる幻想的なノスタルジー空間＆気兼ねなく楽しめるカジュアルな価格設定"
              ]
            },
            {
              id: 5,
              name: "湯西川温泉　ホテル湯西川（伊東園ホテルズ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/149268/149268.jpg",
              rating: 4.05,
              reviews: 954,
              price: "¥6,248〜",
              access: "湯西川温泉駅よりバスにて約20分（ホテル湯西川前下車）",
              special: "平家の落人伝説の残る温泉地。Ph9.2のアルカリ性単純泉『美肌の湯』と言われています。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149268%2F149268.html",
              story: "湯西川の清流を望む高台に建ち、雄大な深山渓谷のパノラマと充実した温泉施設を圧倒的なコストパフォーマンスで提供する「ホテル湯西川（伊東園ホテルズ）」。広々とした大浴場と開放感あふれる露天風呂には、湯西川の豊かな源泉がたっぷりと注がれ、冬の澄み切った冷気を感じながら手足を伸ばしてのんびりと湯浴みを楽しめます。露天風呂から見晴らす対岸の山々は、11月下旬から12月にかけて白銀の初雪に覆われ、刻一刻と表情を変える雪見の情景は圧巻。夕食は約40種類以上の和洋中メニューが揃う季節のバイキングスタイル。日光・栃木ならではの季節の鍋料理や郷土料理に加え、アルコール飲み放題が標準で含まれている点も旅の嬉しいポイントです。気兼ねなくグループや家族連れで湯西川の冬旅を満喫するのに最適な拠点宿です。",
              roomTip: "渓谷側和洋室（または広々和室）。窓一面に湯西川の雄大な渓谷と雪景色が広がり、畳スペースとベッドを兼ね備えた寛ぎの空間。",
              gourmetTip: "「冬の季節バイキング＆アルコール飲み放題」。旬の熱々小鍋仕立てや刺身、揚げたて天ぷら、日光名物ゆば料理、地元栃木の銘酒やビールを心ゆくまで堪能。",
              highlights: [
                "湯西川渓谷を見晴らす大パノラマ露天風呂＆40種季節バイキングとアルコール飲み放題",
                "冬の熱々小鍋仕立てと日光ゆば料理＆栃木の地酒やビールが飲み放題の充実夕食",
                "広々とした客室と開放的な大浴場＆ファミリーやグループ旅行に抜群のコスパ"
              ]
            }
  ];

  const faqList = [
  {
    "q": "11月・12月の湯西川温泉の気候や積雪状況、初雪の時期はいつ頃ですか？",
    "a": "湯西川温泉は標高約700〜800mの深山に位置するため、日光市街や鬼怒川温泉よりも気温が4〜5℃低くなります。例年11月上旬〜中旬は晩秋の冷え込み（朝晩は氷点下近くまで低下）となり、11月下旬から12月上旬にかけて初雪が降ります。12月中旬を過ぎると本格的な積雪期に入り、茅葺き屋根や木々に雪が積もる白銀の世界となります。最高気温は11月で8〜13℃、12月で3〜7℃、最低気温は-3〜-8℃前後まで冷え込みますので、厚手のダウンコートや手袋、滑りにくい冬用ブーツなどの万全な防寒対策が必要です。"
  },
  {
    "q": "湯西川温泉への冬のアクセスと車の運転注意点、スタッドレスタイヤは必須ですか？",
    "a": "車で向かう場合、日光宇都宮道路の今市ICから国道121号・県道249号を経由して約60分です。11月中旬以降は朝晩の冷え込みにより路面凍結（ブラックアイスバーン）が発生しやすく、11月下旬以降は積雪路面となるため、冬用タイヤ（スタッドレスタイヤ）の装着が必須です。山道にはトンネルや日陰のカーブが多いため、急ブレーキや急ハンドルを避けた安全運転を心がけてください。雪道運転に不安がある場合は、鬼怒川温泉駅または湯西川温泉駅から発着する路線バスの利用を強くおすすめします。"
  },
  {
    "q": "電車や路線バスを利用して湯西川温泉へ行く場合のアクセス方法は？",
    "a": "東武鉄道・野岩鉄道会津鬼怒川線の「湯西川温泉駅」が最寄り駅です。浅草駅や新宿駅から特急リバティ・スペーシアを利用すれば、直通または下今市駅・鬼怒川温泉駅乗り換えで湯西川温泉駅まで約2時間半〜3時間でアクセスできます。湯西川温泉駅前からは、日光交通の路線バス（湯西川温泉行き）が運行しており、終点の湯西川温泉街（各旅館近くのバス停）まで約20〜30分で到着します。冬期も定時運行されているため、最も安全で快適な移動手段です。"
  },
  {
    "q": "湯西川温泉名物の「囲炉裏料理」「平家狩場焼」とはどんな料理ですか？",
    "a": "平家狩場焼（へいけかりばやき）とは、壇ノ浦の戦いに敗れて湯西川の山奥に逃れた平家の武人たちが、追手の目を逃れるために音を立てず、河原の焚き火や囲炉裏の炭火で山鳥や清流魚、山菜などを串に刺して炙り食べたことに由来する伝統の食文化です。竹串に刺した新鮮なイワナやヤマメの塩焼き、鶏肉に山芋や味噌を練り込んで木べらに塗りつけた「一升べら」、うるち米を潰して丸めた団子に特製山椒味噌を塗った「ばんだい餅」、とちぎ和牛や鹿肉などを炭火を囲んでじっくり味わいます。竹筒に地酒とイワナを入れて炙る「骨酒」も冬の夜の至福の逸品です。"
  },
  {
    "q": "平家落人の隠れ里としての歴史や湯西川温泉の独特の風習とは？",
    "a": "湯西川温泉には、治承・寿永の乱（源平合戦）で敗れた平忠実（平清盛の弟である平忠度の甥など）をはじめとする平家一門が落ち延びて隠れ住んだという伝説が色濃く残っています。追手に居場所を悟られないよう、「鶏を飼わない（朝に鳴いて居場所が知れるのを防ぐ）」「鯉のぼりを揚げない（目立つため）」「焚き火の煙を高く上げない」といった厳格な掟が何百年にもわたって受け継がれてきました。現在でも集落内には平家落人ゆかりの古民家や平家の里があり、歴史ロマンあふれる独特の静けさと文化が保たれています。"
  }
];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': 'https://croud-travel.pages.dev/winter-tochigi-yunishigawa-onsen-heike-irori-snow-stay#article',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://croud-travel.pages.dev/#website',
          'name': 'クラドトラベル',
          'url': 'https://croud-travel.pages.dev/'
        },
        'headline': "【11・12月栃木・日光湯西川温泉の初雪渓谷美と平家落人伝説】名物囲炉裏会席・平家狩場焼＆とちぎ和牛・源泉かけ流し雪見露天名宿5選",
        'description': "11月から12月にかけて、栃木県日光市の深山幽谷に抱かれた「湯西川温泉」は、広葉樹の紅葉が散り落ちるとともに白銀の初雪が舞い始め、茅葺き屋根の古民家や湯西川渓谷が静謐な冬景色に包まれます。壇ノ浦の戦いに敗れた平家の落人たちが落ち延び、河原の炭火で野鳥や川魚を焼いたことに端を発する伝統の「本場囲炉裏（いろり）料理」平家狩場焼、山椒香るばんだい餅、とろける霜降りの「とちぎ和牛」、香ばしいイワナの骨酒。そして湯守が守り継ぐpH9前後の柔らかな源泉かけ流し雪見露天風呂。深山に佇む平家伝承の厳選名宿5選を徹底解説します。",
        'inLanguage': 'ja',
        'mainEntityOfPage': 'https://croud-travel.pages.dev/winter-tochigi-yunishigawa-onsen-heike-irori-snow-stay',
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
        '@id': 'https://croud-travel.pages.dev/winter-tochigi-yunishigawa-onsen-heike-irori-snow-stay#destination',
        'name': '日光・湯西川温泉',
        'description': '日光国立公園の最奥に位置する平家落人の隠れ里。初雪の渓谷美と名物囲炉裏狩場焼、源泉かけ流し雪見露天風呂が魅力。',
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 36.9634,
          'longitude': 139.6385
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://croud-travel.pages.dev/winter-tochigi-yunishigawa-onsen-heike-irori-snow-stay#faq',
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
        '@id': 'https://croud-travel.pages.dev/winter-tochigi-yunishigawa-onsen-heike-irori-snow-stay#hotellist',
        'name': '日光湯西川温泉のおすすめ名宿5選',
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
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-5xl mx-auto space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-amber-200">
            <Link href="/" className="hover:underline hover:text-white transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:underline hover:text-white transition">特集一覧</Link>
            <span>/</span>
            <span className="text-white font-medium">日光・湯西川温泉</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs sm:text-sm font-semibold tracking-wide">
            <Flame className="w-4 h-4 text-amber-300" />
            11月・12月 平家落人の隠れ里＆本場囲炉裏料理特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月栃木・日光湯西川温泉】初雪渓谷美と平家落人伝説
            <span className="block text-amber-300 text-lg sm:text-2xl mt-3 font-normal">
              名物囲炉裏会席・平家狩場焼＆とちぎ和牛・源泉かけ流し雪見露天名宿5選
            </span>
          </h1>

          <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-4xl">
            11月から12月にかけて、栃木県日光市の深山幽谷に抱かれた「湯西川温泉」は、広葉樹の紅葉が散り落ちるとともに白銀の初雪が舞い始め、茅葺き屋根の古民家や湯西川渓谷が静謐な冬景色に包まれます。壇ノ浦の戦いに敗れた平家の落人たちが落ち延び、河原の炭火で野鳥や川魚を焼いたことに端を発する伝統の「本場囲炉裏（いろり）料理」平家狩場焼、山椒香るばんだい餅、とろける霜降りの「とちぎ和牛」、香ばしいイワナの骨酒。そして湯守が守り継ぐpH9前後の柔らかな源泉かけ流し雪見露天風呂。深山に佇む平家伝承の厳選名宿5選を徹底解説します。
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm text-amber-200">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>ベストシーズン: 11月中旬〜12月下旬（初雪と静寂の雪見風呂）</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Utensils className="w-4 h-4 text-amber-300" />
              <span>旬の味覚: 平家狩場焼・清流イワナ骨酒・とちぎ和牛・日光ゆば</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>泉質: アルカリ性単純温泉（pH9前後・無色透明・肌に優しい美肌の湯）</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-800 text-sm font-bold bg-amber-50 px-3 py-1 rounded-full">
            <Landmark className="w-4 h-4" />
            日光・湯西川温泉 初冬の深山情景
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-stone-900 leading-snug">
            800年の歴史息づく平家落人の隠れ里。赤々と燃える囲炉裏の炭火と初雪舞う渓谷の静謐
          </h2>
          <div className="text-sm sm:text-base text-stone-600 leading-relaxed space-y-4">
            <p>
              栃木県北西部、日光国立公園の奥深き山峡に沿って細長く広がる「湯西川温泉（ゆにしがわおんせん）」。文治元（1185）年の壇ノ浦の合戦で源氏に敗れた平家一門が、追手の追撃を逃れてこの険しい山深き地に隠れ住み、河原に湧き出る温泉を見つけて傷を癒したという伝説が今なお息づく、日本を代表する落人の隠れ里です。
            </p>
            <p>
              標高約700〜800mに位置する湯西川は、11月に入ると急激に冷え込みが進みます。山々を彩った紅葉が散り急ぎ、11月下旬を迎えると空からちらちらと初雪が舞い降りてきます。黒光りする梁や茅葺き屋根に白雪が積もり、清流・湯西川の水音がしんしんと冷え切った空気に響き渡る初冬の光景は、都会の喧騒とは隔絶された幽玄な美しさを湛えています。
            </p>
            <p>
              冷えた身体を芯から解きほぐしてくれるのが、湯西川の各宿に引かれた無色透明でまろやかなアルカリ性単純温泉です。pH9前後の柔らかな湯ざわりは肌にすっと馴染み、雪見露天風呂に肩まで浸かれば、立ち上る湯けむりと対岸の雪景色が一体となった至福の湯浴みが楽しめます。そして夜の帳が下りる頃、パチパチと音を立てる囲炉裏の熾火を囲み、竹串に刺した川魚や山鳥、とちぎ和牛を炙りながら呑む熱々のイワナ骨酒。落人たちの素朴な知恵と現代の洗練されたおもてなしが融合した、極上の冬旅がここにあります。
            </p>
          </div>
        </section>

        {/* 3 Pillars Section */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              11月・12月の湯西川温泉を満喫する3つの醍醐味
            </h2>
            <p className="text-sm text-stone-500">
              平家伝承の食文化と雪見の秘湯、奥日光深山の静寂を五感で堪能する
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                本場囲炉裏会席・平家狩場焼
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                炭火で香ばしく炙る清流イワナの塩焼き、一升べら、ばんだい餅。霜降りとちぎ和牛ステーキや熱々イワナ骨酒の深いコク。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600">
                <Snowflake className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                湯西川渓谷の初雪と雪見露天風呂
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                11月下旬からの初雪景色。pH9前後の肌触り優しい源泉かけ流し天然温泉に浸かりながら望む、白銀の渓流パノラマ。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition space-y-3">
              <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                平家落人800年の歴史ロマン
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                鶏を飼わず鯉のぼりを揚げない落人の掟。茅葺き古民家や「平家の里」に息づく、静寂に満ちた山里の文化遺産。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-10">
          <div className="border-l-4 border-amber-800 pl-4 space-y-1">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-amber-800 uppercase">
              Selected Accommodations
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900">
              日光湯西川温泉 平家伝承と囲炉裏料理の名宿厳選5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              楽天トラベル最新APIから取得した実在データに基づく、確かな評価と魅力を誇る厳選宿泊施設
            </p>
          </div>

          <div className="space-y-12">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id}
                id={'hotel-' + hotel.id}
                className="bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Hotel Image */}
                  <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] bg-stone-100 overflow-hidden">
                    <img
                      src={hotel.img}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-amber-950/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-xs flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      厳選名宿 第{hotel.id}位
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-stone-950/75 text-white p-3 rounded-xl backdrop-blur-xs text-xs space-y-1">
                      <div className="flex items-center gap-1 text-amber-300 font-semibold">
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
                          <span className="text-stone-400 text-xs font-normal">({hotel.reviews}件のクチコミ)</span>
                        </div>
                        <div className="text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-900 rounded-md">
                          参考最安値: {hotel.price}
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug hover:text-amber-800 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                          {hotel.name}
                          <ExternalLink className="w-4 h-4 text-stone-400 inline" />
                        </a>
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {hotel.story}
                      </p>
                    </div>

                    {/* Room & Gourmet Highlights */}
                    <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200/60 space-y-3 text-xs sm:text-sm">
                      <div className="space-y-1">
                        <span className="font-bold text-amber-950 flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-amber-700" />
                          おすすめ客室＆眺望
                        </span>
                        <p className="text-stone-600 pl-5 text-xs leading-relaxed">{hotel.roomTip}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="font-bold text-amber-950 flex items-center gap-1.5">
                          <Utensils className="w-3.5 h-3.5 text-amber-700" />
                          名物料理＆夕食の醍醐味
                        </span>
                        <p className="text-stone-600 pl-5 text-xs leading-relaxed">{hotel.gourmetTip}</p>
                      </div>
                    </div>

                    {/* Bullet Highlights */}
                    <ul className="space-y-1.5 text-xs text-stone-600">
                      {hotel.highlights.map((hl: string, hIdx: number) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
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
                        className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-700 to-amber-900 text-white text-xs sm:text-sm font-bold shadow-md hover:from-amber-800 hover:to-amber-950 hover:shadow-lg transition-all gap-2"
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
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <Compass className="w-6 h-6 text-amber-800" />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              初冬の日光湯西川温泉を満喫する1泊2日おすすめモデルコース
            </h2>
          </div>
          <div className="space-y-6 text-stone-700">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">1日目</span>
                都内から東武特急で深山へ＆平家の里散策と本場囲炉裏狩場焼・雪見露天
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-stone-600">
                浅草駅や新宿駅から東武特急リバティ・スペーシアに乗車し、車窓の山並みが雪化粧を始めるのを眺めながら野岩鉄道・湯西川温泉駅へ（約2時間半）。駅前より日光交通の路線バスに乗り換え、清流沿いの山道を登って湯西川温泉街へ。まずは平家落人の生活文化を今に伝える「平家の里」を訪れ、茅葺き屋根の古民家や水車小屋、初雪に彩られた渓谷の風情を静かに散策します。15:30に平家伝承の老舗名宿へチェックイン。湯守が守り継ぐpH9前後の柔らかな自家源泉に浸かり、湯西川渓谷に舞い散る初雪を眺める至福の雪見露天風呂を満喫します。夜は赤々と燃える囲炉裏を囲み、香ばしいイワナの塩焼きや一升べら、ばんだい餅、極上とちぎ和牛を熱々のイワナ骨酒とともに心ゆくまで味わいます。
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm sm:text-base">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">2日目</span>
                清流の朝霧雪見風呂・湯西川水の郷と日光ゆば・手打ち蕎麦の昼食
              </div>
              <p className="leading-relaxed text-xs sm:text-sm text-stone-600">
                翌朝は湯西川の川面に立ち上る幻想的な朝霧を眺めながら清々しい雪見朝風呂へ。日光名物の引き上げ生ゆばや温泉粥、山菜小鉢が並ぶ滋味豊かな朝食を堪能し、10:00にチェックアウト。集落内の歴史あるかずら橋や慈光寺を巡り、「湯西川水の郷」へ移動。地元名物の打ちたて手打ち蕎麦や熱々のばんだい餅に舌鼓を打ちます。売店で特産の栃餅や山椒味噌、日光地酒をお土産に購入した後は、湯西川温泉駅直結の道の駅で足湯に浸かって温まり、東武特急で夕暮れの車窓を楽しみながら快適に帰路へと向かいます。
              </p>
            </div>
          </div>
        </section>

        {/* Local Cuisine Deep Dive */}
        <section className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-300 text-xs sm:text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Utensils className="w-4 h-4" />
            深山と平家の食文化
          </div>
          <h2 className="text-xl sm:text-3xl font-bold leading-snug">
            炭火の香ばしさと極上の旨味。初冬の湯西川で味わい尽くす郷土の贅
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-amber-300 text-base flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-400" />
                伝統の平家狩場焼＆ばんだい餅
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                落人たちが炭火で炙ったことに始まる狩場焼。竹串に刺した岩魚の塩焼きや、鶏ひき肉と山芋を練り合わせた「一升べら」、特製山椒味噌を塗って香ばしく焼き上げる「ばんだい餅」の素朴で力強い美味しさ。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-amber-300 text-base flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-amber-400" />
                とろける霜降り「とちぎ和牛」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                栃木の豊かな自然と良質な水で育まれた「とちぎ和牛」。きめ細やかな霜降りと上品な甘みが特徴で、囲炉裏の炭火陶板焼きや熱々のすき焼き鍋で味わえば、口の中でとろけるような贅沢な肉汁が溢れます。
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-2">
              <h3 className="font-bold text-amber-300 text-base flex items-center gap-1.5">
                <Wine className="w-4 h-4 text-amber-400" />
                香ばしい清流イワナの骨酒
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                じっくり素焼きにした新鮮なイワナを青竹や特製徳利に入れ、熱々の辛口地酒を注ぎ込んで出汁を抽出する「骨酒」。魚の旨味と香ばしさが溶け出した琥珀色の酒は、初冬の冷えた身体を芯から温めます。
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
            11月・12月の湯西川温泉 交通アクセス＆冬道運転のアドバイス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-700" />
                車・電車・バスでのアクセス方法
              </h3>
              <p>
                車の場合は、日光宇都宮道路今市ICより国道121号・県道249号経由で約60分です。11月下旬以降は路面凍結や積雪が発生するため、スタッドレスタイヤの装着が必須となります。
              </p>
              <p>
                公共交通機関の場合は、野岩鉄道湯西川温泉駅より日光交通の路線バス「湯西川温泉行き」で約20〜30分。東武特急リバティ・スペーシアを利用すれば都内から乗り換え少なく安全に到着できます。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-amber-700" />
                気候と防寒・散策時の注意事項
              </h3>
              <p>
                12月の湯西川温泉は朝晩の気温が-5℃前後に達します。厚手のダウンコート、ニット帽、手袋、マフラーに加え、雪道でも滑りにくい溝の深い防寒スノーブーツをご用意ください。
              </p>
              <p>
                集落内や平家の里の散策路は日陰に雪や氷が残りやすいため、足元には十分ご注意ください。夜間のかずら橋や露天風呂への移動時も暖かい上着を羽織ることを推奨します。
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
            初冬の日光湯西川温泉旅行 FAQ
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
              あわせて読みたい栃木・北関東の雪見温泉・冬グルメ特集
            </h3>
            <p className="text-xs sm:text-sm text-amber-200">
              冬の雪景色や名湯、ブランド牛を堪能する栃木・北関東各地の厳選旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-tochigi-kinugawa-onsen-valley-snow-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">栃木・鬼怒川温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                鬼怒川温泉の渓谷雪見露天と老舗旅館ステイ
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                鬼怒川渓谷のパノラマ絶景と名湯、日光ゆば会席を満喫する名宿。
              </p>
            </Link>

            <Link 
              href="/winter-tochigi-okunikko-chuzenji-lake-onsen-snow-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">栃木・奥日光中禅寺湖</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                奥日光中禅寺湖の初雪レイクビューと乳白色硫黄泉
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                白銀の男体山を望むレイクサイドリゾートと濃厚な源泉かけ流し。
              </p>
            </Link>

            <Link 
              href="/winter-tochigi-shiobara-onsen-yukimi-tochigi-beef-radish-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block">栃木・那須塩原温泉</span>
              <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
                塩原十一湯の渓流雪見露天ととちぎ和牛すき焼き宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                箒川渓谷の雪景色と名物塩原高原大根・とちぎ和牛を堪能。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-tochigi-yunishigawa-onsen-heike-irori-snow-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
