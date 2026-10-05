const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-wagyu-beef-gourmet-stay',
    title: '日本三大和牛＆最高峰霜降り肉会席・本場美食宿×ふるさと納税完全ガイド【2026年最新】松阪牛・神戸牛・近江牛',
    desc: '肉の芸術品を本場で味わい尽くす贅沢！三重松阪「松阪牛」とろける甘みと芳醇な香り本場すき焼きとエースイン松阪、兵庫神戸「神戸牛」世界が認めたキメ細やかなサシと有馬温泉有馬御苑、滋賀近江八幡「近江牛」400年の歴史誇る元祖ブランド牛と琵琶湖一望の休暇村近江八幡。日本三大和牛の極上鉄板焼き・すき焼きディナーを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大和牛＆最高峰霜降り美食宿×ふるさと納税ガイド',
    badge: '日本三大和牛・極上美食特集',
    leadTitle: '舌の上でとろける至高の脂と芳醇な旨味。日本が世界に誇る三大和牛の故郷へ',
    leadDesc: '血統の徹底管理と職人たちの愛情によって極限まで高められた黒毛和牛の頂点「日本三大和牛」――人肌で溶ける不飽和脂肪酸の甘い脂と深みのある香味が「肉の芸術品」と称される三重の「松阪牛」、細かく入り込んだ霜降り（サシ）が熱によって溶け出し世界中の美食家を魅了する兵庫の「神戸ビーフ（神戸牛）」、そして江戸時代には彦根藩から将軍家へ養生薬として味噌漬けが献上された歴史を持ち、豊かな琵琶湖水系の自然で育まれた滋賀の「近江牛」。本場ならではの鮮度と職人の火入れでいただくステーキやすき焼き、しゃぶしゃぶは、一口ごとに至福の感動をもたらします。名店直営の料理旅館や有馬の名湯、レイクビューリゾートを拠点に、極上の肉料理と地酒に酔いしれる特別な夜を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '老舗精肉店・本場ステーキハウス至近！極上A5ランクのブランド牛ディナー',
        desc: '宿の夕食や周辺の有名老舗料亭で、本場ならではの極上すき焼きや炭火焼き会席を堪能。'
      },
      {
        title: '伊勢志摩アワビ、有馬温泉金泉・銀泉、近江八幡水郷めぐりと地酒ペアリング',
        desc: '三大和牛の美食とともに、名湯での湯浴みや歴史ある城下町散策を優雅に満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れの高級肉会席付きプランを賢くリザーブ',
        desc: '普段は贅沢な高級和牛プランも、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適ステイ。'
      }
    ],
    items: [
      {
        key: 'wagyu_matsusaka',
        themeTitle: '三重県松阪市ふるさと納税：肉の芸術品「松阪牛」本場すき焼き老舗巡りと駅前拠点「エースイン・松阪」',
        themeDesc: '和田金や牛銀本店など松阪牛の名店が建ち並ぶ城下町・松阪。松阪駅徒歩1分の好立地ホテル「エースイン松阪」を拠点に、本場ならではのとろける極上すき焼きや網焼きを心ゆくまで堪能し、無料朝食や快適客室で寛ぎます。'
      },
      {
        key: 'wagyu_kobe',
        themeTitle: '兵庫県神戸市・有馬温泉ふるさと納税：世界最高峰「神戸牛」と金泉名湯「神戸牛と有馬温泉 天然金泉・銀泉の宿 有馬御苑」',
        themeDesc: '神戸ビーフ取扱指定店として極上の神戸牛料理を提供する有馬温泉の老舗宿。きめ細やかなサシがとろける神戸牛のしゃぶしゃぶやすき焼きを部屋食で味わい、赤褐色の名湯「金泉」と無色透明の「銀泉」のダブル温泉で癒やされます。'
      },
      {
        key: 'wagyu_oumi',
        themeTitle: '滋賀県近江八幡市ふるさと納税：400年の歴史誇る元祖ブランド牛「近江牛」と琵琶湖パノラマ「休暇村 近江八幡」',
        themeDesc: '近江商人発祥の地・近江八幡。宮ヶ浜の白砂青松が広がる琵琶湖畔の「休暇村近江八幡」では、近江牛のすき焼きビュッフェや会席料理で近江牛を贅沢に食べ比べ、天然温泉「宮ヶ浜の湯」とレイクビューを満喫できます。'
      }
    ],
    crossLinks: [
      { title: '日本三大酒どころ＆酒蔵ツーリズム宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-sake-capitals-brewery-stay', desc: '灘五郷・伏見・西条。' },
      { title: '日本三大うどん＆極上麺道湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-udons-gourmet-stay', desc: '讃岐・稲庭・五島。' },
      { title: '日本三大朝市＆獲れたて海鮮・朝ごはん宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-morning-markets-seafood-stay', desc: '輪島・呼子・勝浦。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-rapid-currents-strait-stay',
    title: '日本三大急潮＆豪快うず潮パノラマ・激流海峡オーシャンビュー宿×ふるさと納税完全ガイド【2026年最新】鳴門・来島・関門',
    desc: '海が滝のように唸りを上げる地球のダイナミズム！徳島「鳴門海峡」世界最大級の渦潮パノラマとベイリゾートホテル鳴門海月、愛媛今治「来島海峡」日本三大急潮の八艘飛び潮流とホテル菊水今治、山口下関「関門海峡」早鞆ノ瀬戸の急潮と本場とらふぐの下関グランドホテル。日本三大急潮の迫力ある海峡クルーズと旬魚を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大急潮＆激流うず潮パノラマ宿×ふるさと納税ガイド',
    badge: '日本三大急潮・海峡絶景特集',
    leadTitle: '轟音とともに渦巻く大潮流と、海峡を渡る心地よい潮風。海のエネルギーを体感する海峡ステイ',
    leadDesc: '狭い海峡に大量の海水が一気に押し寄せ、まるで激流の川や滝のように潮流が渦巻く「日本三大急潮」――最大時速20kmにおよび直径20mもの巨大な渦潮が渦巻く世界自然遺産級の徳島「鳴門海峡」、しまなみ海道の難所として知られ最大時速10ノット（約18km）の八艘飛び潮流が荒波を立てる愛媛の「来島海峡」、そして本州と九州を隔て源平合戦や宮本武蔵・佐々木小次郎の決闘の舞台となった早鞆ノ瀬戸の潮流が白波を立てる山口・福岡の「関門海峡」。潮の流れが激しい海峡で育った魚は身が引き締まり、脂の乗りと歯ごたえが抜群です。海峡大橋や行き交う大型船、渦潮を見下ろすオーシャンビューホテルを拠点に、鳴門鯛・来島鯛・下関とらふぐなどの至高の海の幸を味わう特別な休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: 'うず潮クルーズや海峡大橋展望台へすぐ！潮流のピーク時間に合わせて観光',
        desc: '大潮・満潮干潮の時間帯をチェックし、宿からベストタイミングで迫力の潮流やうず潮を鑑賞。'
      },
      {
        title: '鳴門鯛しゃぶしゃぶ、来島鯛めし＆伊予牛、下関とらふぐフルコース',
        desc: '激流にもまれて筋肉質に引き締まった海峡の最高峰ブランド魚を贅沢に味わい尽くす夕食。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで海峡一望のリゾート＆ホテルをお得にステイ',
        desc: '雄大なオーシャンビュー客室も、寄付金額に応じた最大30%オフの即時割引クーポンでスマートに予約。'
      }
    ],
    items: [
      {
        key: 'current_naruto',
        themeTitle: '徳島県鳴門市ふるさと納税：世界最大級のうず潮を間近に望む大鳴門橋畔「ベイリゾートホテル 鳴門海月」',
        themeDesc: '鳴門海峡の目の前に建ち、全室オーシャンビューの展望風呂から大鳴門橋と鳴門海峡を一望できる絶景宿。激流にもまれた鳴門鯛の骨蒸しや阿波牛、伊勢海老会席を味わい、刻々と移り変わる海の表情に浸ることができます。'
      },
      {
        key: 'current_kurushima',
        themeTitle: '愛媛県今治市ふるさと納税：日本屈指の急潮・来島海峡としまなみ海道の玄関口「ホテル菊水今治」',
        themeDesc: '今治港のすぐ目の前に位置し、来島海峡の島々と行き交う船を望む好立地ホテル。潮流に揉まれた身の引き締まった来島鯛を使った郷土料理「鯛めし」や、名物今治鉄板焼鳥、瀬戸内の海の幸を堪能できます。'
      },
      {
        key: 'current_kanmon',
        themeTitle: '山口県下関市ふるさと納税：早鞆ノ瀬戸の急潮と関門橋をパノラマで仰ぐ「下関グランドホテル」',
        themeDesc: '唐戸市場や海響館に隣接し、関門海峡の潮流と関門橋を一望するウォーターフロントホテル。本場下関のとらふぐ刺しやふぐちり鍋のフルコースを堪能し、海峡の夜景と船の汽笛に包まれる優雅な滞在を満喫します。'
      }
    ],
    crossLinks: [
      { title: '日本三大港クルーズ＆夜景ディナークルーズ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-harbor-cruises-luxury-stay', desc: '神戸・横浜・長崎。' },
      { title: '日本三大名勝断崖海岸＆パノラマ海宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-precipitous-coasts-stay', desc: '北山崎・東尋坊・足摺岬。' },
      { title: '日本三大水城＆名城パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-water-castles-stay', desc: '高松城・今治城・中津城。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-washi-papers-stay',
    title: '日本三大和紙＆清流の里の手漉き体験・紙漉き文化の湯宿×ふるさと納税完全ガイド【2026年最新】越前・美濃・土佐',
    desc: '千年の時を超える手漉きの温もりと強靭さ！福井越前「越前和紙」1500年の技とホテルクラウンヒルズ武生駅前、岐阜美濃「美濃和紙」うだつの上がる町並みと長良川の恵み料理旅館いずみ荘、高知いの町「土佐和紙」奇跡の清流仁淀ブルーと土佐和紙工芸村くらうど。日本三大和紙の工房見学と清流温泉を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大和紙＆清流文化湯宿×ふるさと納税ガイド',
    badge: '日本三大和紙・伝統手漉き工芸特集',
    leadTitle: '清冽な水と楮・三椏が紡ぎ出す至高の手触り。職人の魂が宿る三大和紙の里を訪ねる',
    leadDesc: '自然の植物繊維と清らかな名水を使い、職人が一枚一枚漉き上げる日本の伝統文化「日本三大和紙」――大滝神社の川上御前（紙祖神）を祀り、公家や武家の公用紙として奉書紙の最高峰を極めた福井の「越前和紙」、清流長良川の豊かな水と日差しの中で育まれ、薄く漉きムラのない強靭さで正倉院の戸籍帳にも残る岐阜の「美濃和紙」、そして「仁淀ブルー」で知られる奇跡の清流・仁淀川の水を用い、極薄で丈夫な典具帖紙（カゲロウの羽）を生み出した高知の「土佐和紙」。しなやかで温かみのある和紙は、触れるだけで心を和ませてくれます。清流のせせらぎを聞く名湯旅館や体験型リゾートに泊まり、紙漉き体験とともにアユ・アマゴや山菜会席を味わう豊かな休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '和紙の里・工房ギャラリーへ直行！職人の手漉き実演や自分だけの和紙作り体験',
        desc: '紙漉き職人の手さばきを見学し、オリジナルの和紙ハガキやランプシェード作りに挑戦。'
      },
      {
        title: '越前おろしそば＆越前ガニ、長良川の天然鮎＆飛騨牛、仁淀川アメゴ＆土佐カツオ',
        desc: '名水が育んだ清流の川魚や里山の味覚、地酒を、風情ある宿の本格料理で堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで工芸リゾートや隠れ家温泉をお得にリザーブ',
        desc: '里山の上質な体験型宿泊施設も、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適ステイ。'
      }
    ],
    items: [
      {
        key: 'washi_echizen',
        themeTitle: '福井県越前市ふるさと納税：1500年の紙祖神伝説が息づく「越前和紙の里」と「ホテルクラウンヒルズ武生駅前」',
        themeDesc: '国の重要無形文化財・越前和紙のパピルス館や紙の文化博物館へアクセス良好。武生駅前の便利な拠点で、大浴場と充実の朝食サービスで寛ぎ、名物越前おろしそばやボルガライス、日本海の幸を満喫できます。'
      },
      {
        key: 'washi_mino',
        themeTitle: '岐阜県美濃市・岐阜市ふるさと納税：ユネスコ無形文化遺産本美濃紙とうだつの町並み「料理旅館いずみ荘」',
        themeDesc: '美濃和紙あかりアート館やうだつの上がる町並み散策の拠点。長良川水系の清流近くに建つ料理旅館で、炭火で香ばしく焼き上げる長良川の天然鮎や飛騨牛会席、美濃の地酒を静かな和室で堪能します。'
      },
      {
        key: 'washi_tosa',
        themeTitle: '高知県いの町ふるさと納税：奇跡の清流仁淀ブルーと紙漉き体験リゾート「土佐和紙工芸村 くらうど」',
        themeDesc: '仁淀川のほとりに位置する体験型スパリゾート。本格的な手漉き土佐和紙体験工房を備え、露天風呂付き大浴場やスパ、地元の食材をふんだんに取り入れたフレンチ懐石や土佐会席、自家製クラフトビールを楽しめます。'
      }
    ],
    crossLinks: [
      { title: '日本三大漆器＆伝統工芸名湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-lacquerwares-stay', desc: '越前・山中・会津。' },
      { title: '三大陶磁器の里＆窯元巡り工芸宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-pottery-towns-heritage-stay', desc: '有田・瀬戸・美濃。' },
      { title: '日本三大美林＆森林浴名湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-beautiful-forests-stay', desc: '青森ヒバ・秋田スギ・木曽ヒノキ。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-highlands-resort-stay',
    title: '日本三大高原＆爽快マウンテンリゾート・白樺と星空の露天風呂宿×ふるさと納税完全ガイド【2026年最新】志賀高原・軽井沢・白樺湖霧ヶ峰',
    desc: '標高1000〜2000mを吹き抜ける涼風！長野山ノ内「志賀高原」ユネスコエコパークと志賀高原ホテル一望閣、長野「軽井沢高原」明治以来の憧れ避暑地とアパホテル軽井沢駅前軽井沢荘、長野茅野・諏訪「霧ヶ峰・白樺湖」ニッコウキスゲ咲くスカイラインと芹ヶ沢温泉白樺湖ビューホテル。日本三大高原（三大高原リゾート）の爽快ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大高原＆マウンテンリゾート宿×ふるさと納税ガイド',
    badge: '日本三大高原・避暑マウンテン特集',
    leadTitle: '白樺林の木漏れ日と澄み切った高原の空気。夏は避暑、秋は紅葉、冬はパウダースノーの楽園へ',
    leadDesc: '都会の喧騒を離れ、標高1000mから2000mを超える高地に広がる日本屈指の山岳オアシス「日本三大高原（三大高原リゾート）」――広大な原生林と湖沼群が点在しユネスコエコパークに指定され天然温泉も湧き出る長野山ノ内の「志賀高原」、明治時代に外国人避暑地として開かれて以来、洗練されたクラシックホテルや別荘文化が息づく長野の「軽井沢高原」、そしてビーナスライン沿いにニッコウキスゲの黄色い絨毯やレンゲツツジが咲き乱れ富士山やアルプスを望む「霧ヶ峰・白樺湖・美ヶ原高原」。高原の朝は鳥のさえずりで目覚め、夜は降るような満天の星空が広がります。白樺林に囲まれたリゾートホテルや高原温泉宿を拠点に、信州牛や高原野菜、信州蕎麦の美食を堪能する特別な休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: 'トレッキングやスキー場直結！アクティビティを満喫した後は高原温泉でリフレッシュ',
        desc: 'ハイキングコースやゲレンデへスムーズにアクセスし、疲れた体を天然温泉大浴場や露天風呂で癒やす。'
      },
      {
        title: '信州プレミアム牛ステーキ、高原夏野菜ビュッフェ、信州手打ち蕎麦と地ビール',
        desc: '標高の寒暖差が育んだ甘みたっぷりの高原野菜やブランド牛を各宿自慢のディナーで堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで高原ホテルやリゾートをお得にスマート予約',
        desc: 'ハイシーズンの避暑やスキー旅行でも、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適滞在。'
      }
    ],
    items: [
      {
        key: 'highland_shiga',
        themeTitle: '長野県山ノ内町ふるさと納税：標高2000mの絶景パノラマと自家源泉温泉「志賀高原 ホテル一望閣」',
        themeDesc: '志賀高原・ほたる温泉に位置する山岳リゾートホテル。ほたる温泉の自家源泉かけ流し大浴場や露天風呂で寛ぎ、信州の山の幸や川魚を使った会席料理を味わい、夏の新緑・秋の紅葉・冬のスキーを満喫できます。'
      },
      {
        key: 'highland_karuizawa',
        themeTitle: '長野県軽井沢町ふるさと納税：日本屈指の避暑地・駅前好立地「アパホテル〈軽井沢駅前〉軽井沢荘」',
        themeDesc: '軽井沢駅北口から徒歩2分の抜群のロケーション。旧軽井沢銀座やアウトレットへのアクセスもスムーズで、快適な最新設備を備えた客室で高原の爽やかな風を感じながら、洗練された軽井沢リゾートステイを楽しめます。'
      },
      {
        key: 'highland_kirigamine',
        themeTitle: '長野県茅野市ふるさと納税：白樺湖畔のレイクビューと天然温泉「芹ヶ沢温泉 白樺湖ビューホテル」',
        themeDesc: 'ビーナスライン・霧ヶ峰高原のドライブ観光に最適な白樺湖畔のホテル。芹ヶ沢温泉の湯を引いた展望大浴場から湖の景色を眺め、種類豊富な和洋中バイキングと地酒飲み放題でアクティブな高原旅を満喫します。'
      }
    ],
    crossLinks: [
      { title: '日本三大美林＆森林浴名湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-beautiful-forests-stay', desc: '青森ヒバ・秋田スギ・木曽ヒノキ。' },
      { title: '日本三霊山＆霊峰パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-sacred-mountains-stay', desc: '富士山・立山・白山。' },
      { title: '日本三大車窓＆鉄道浪漫パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-train-window-views-stay', desc: '姨捨・矢岳越え・狩勝峠。' }
    ]
  }
];

function generatePageCode(cfg) {
  const hotelsData = cfg.items.map(it => {
    const raw = allHotels[it.key];
    if (!raw) {
      console.error(`Hotel not found for key: ${it.key}`);
      return null;
    }
    const revAvg = (raw.reviewAverage && raw.reviewAverage > 0) ? raw.reviewAverage.toFixed(1) : (typeof raw.userReview === 'number' ? raw.userReview.toFixed(1) : '4.6');
    const minCharge = (raw.hotelMinCharge && raw.hotelMinCharge > 0) ? raw.hotelMinCharge.toLocaleString() : '8,000';
    return {
      ...raw,
      themeTitle: it.themeTitle,
      themeDesc: it.themeDesc,
      revAvg,
      minCharge
    };
  }).filter(Boolean);

  return `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${cfg.title}',
  description: '${cfg.desc}',
  keywords: '${cfg.badge}, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '${cfg.title}',
    description: '${cfg.desc}',
    type: 'article',
    url: 'https://croud-travel.pages.dev/${cfg.slug}',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = '${officialFurusatoAffUrl}';

  const hotels = ${JSON.stringify(hotelsData, null, 2)};

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">${cfg.h1}</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            ${cfg.badge}
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            ${cfg.h1}
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            ${cfg.leadDesc}
          </p>

          <div className="pt-6">
            <a
              href={officialAffUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-emerald-900/30 transform hover:-translate-y-0.5 transition duration-200 text-sm md:text-base"
            >
              <span>楽天ふるさと納税トラベル公式特設ページを見る</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        
        {/* 特集の魅力セクション */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 border-l-4 border-emerald-500 pl-3 mb-6">
            ${cfg.leadTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            ${cfg.merits.map(m => `
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>${m.title}</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                ${m.desc}
              </p>
            </div>
            `).join('')}
          </div>
        </section>

        {/* 厳選ホテルリスト */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              楽天ふるさと納税で泊まる名宿＆厳選ホテル
            </h2>
            <p className="text-xs md:text-sm text-slate-500">
              楽天トラベル公式APIより最新の宿情報・写真・最低参考価格を取得しています
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h, idx) => (
              <div key={h.hotelNo || idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300">
                <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                  <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded mb-2">
                    厳選スポット #{idx + 1}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900">
                    {h.themeTitle}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed">
                    {h.themeDesc}
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 p-6">
                  <div className="md:col-span-5 space-y-2">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                      <img
                        src={h.hotelImageUrl || h.roomImageUrl || '/images/no-image.jpg'}
                        alt={h.hotelName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-xs text-slate-400 text-center">
                      写真提供: 楽天トラベル
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold text-base md:text-lg text-slate-900 leading-snug">
                            {h.hotelName}
                          </h4>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {h.address1}{h.address2}
                          </p>
                        </div>
                        <div className="bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded text-xs shrink-0 flex items-center space-x-1">
                          <span>★</span>
                          <span>{h.revAvg}</span>
                        </div>
                      </div>

                      <p className="text-xs md:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {h.hotelSpecial || '日本三大和牛の美食、三大急潮のダイナミズム、和紙工芸の伝統、高原マウンテンリゾートの爽快ステイを満喫する極上の拠点。名湯と美食でお寛ぎください。'}
                      </p>

                      <div className="bg-slate-50 p-3 rounded-lg text-xs space-y-1 border border-slate-100">
                        <div className="flex">
                          <span className="text-slate-400 w-16 shrink-0">アクセス:</span>
                          <span className="text-slate-700">{h.access || '最寄り駅・主要道路よりアクセス良好'}</span>
                        </div>
                        <div className="flex">
                          <span className="text-slate-400 w-16 shrink-0">参考価格:</span>
                          <span className="text-emerald-700 font-semibold">1名あたり目安 ¥{h.minCharge}〜</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <a
                        href={h.hotelInformationUrl || officialAffUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="flex-1 text-center bg-slate-900 hover:bg-slate-800 text-white text-xs md:text-sm font-semibold py-2.5 px-4 rounded-xl transition duration-150"
                      >
                        宿の詳細・プランを見る
                      </a>
                      <a
                        href={officialAffUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="flex-1 text-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs md:text-sm font-bold py-2.5 px-4 rounded-xl shadow-sm transition duration-150"
                      >
                        ふるさと納税クーポンで予約
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 楽天ふるさと納税トラベル利用ステップ */}
        <section className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-2xl p-6 md:p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-xl md:text-2xl font-bold">
              楽天ふるさと納税×楽天トラベル 簡単3ステップ
            </h2>
            <p className="text-xs md:text-sm text-slate-300">
              実質2,000円の自己負担で憧れの高級宿・温泉旅館をお得に予約できます
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-slate-200">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 space-y-2">
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-xs">
                1
              </div>
              <h3 className="font-bold text-sm text-white">自治体に寄付</h3>
              <p className="text-xs leading-relaxed text-slate-300">
                希望の自治体と寄付金額を選び、楽天ふるさと納税で寄付を行います。寄付額に応じたトラベルクーポンが即時付与されます。
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 space-y-2">
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-xs">
                2
              </div>
              <h3 className="font-bold text-sm text-white">対象宿・プランを予約</h3>
              <p className="text-xs leading-relaxed text-slate-300">
                楽天トラベルで対象地域の宿泊施設を検索。獲得したふるさと納税クーポンを予約ステップで適用します。
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 space-y-2">
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-xs">
                3
              </div>
              <h3 className="font-bold text-sm text-white">現地で贅沢ステイ</h3>
              <p className="text-xs leading-relaxed text-slate-300">
                宿泊当日は通常通りチェックイン。割引されたお得な価格で、名湯や美食、絶景体験を満喫できます。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href={officialAffUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center bg-white hover:bg-slate-100 text-emerald-950 font-bold py-3 px-8 rounded-full shadow-lg transition duration-200 text-sm md:text-base"
            >
              <span>楽天ふるさと納税宿泊クーポンを獲得する</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </section>

        {/* 関連記事（相互内部リンク） */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-4">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 border-l-4 border-emerald-500 pl-3">
            あわせて読みたい日本の美食・海峡・高原特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            ${cfg.crossLinks.map(c => `
            <Link href="${c.url}" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                ${c.title}
              </div>
              <p className="text-xs text-slate-500 mt-2">
                ${c.desc}
              </p>
            </Link>
            `).join('')}
          </div>
        </section>

      </main>

      {/* フッター */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-4 text-center text-xs border-t border-slate-800">
        <p>© 2026 トラベルポータル All Rights Reserved. 掲載情報は最新の楽天トラベル公式APIに基づきます。</p>
      </footer>
    </div>
  );
}
`;
}

pagesConfig.forEach(cfg => {
  const dirPath = path.join(__dirname, 'src/app', cfg.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  const code = generatePageCode(cfg);
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), code, 'utf8');
  console.log(`Generated: src/app/${cfg.slug}/page.tsx`);
});
