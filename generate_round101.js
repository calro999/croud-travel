const fs = require('fs');
const path = require('path');

const round101Hotels = JSON.parse(fs.readFileSync('round101_hotels.json', 'utf8'));

// Convert to lookup map
const allHotels = {};
for (const [slug, arr] of Object.entries(round101Hotels)) {
  allHotels[slug] = {};
  for (const item of arr) {
    allHotels[slug][item.key] = item.hotel;
  }
}

const articles = [
  {
    slug: 'furusato-tax-toya-onsen-lake-view-fireworks-stay',
    title: '【洞爺湖温泉×ふるさと納税】全室レイクビュー＆ロングラン花火！湖畔絶景リゾート宿特集｜乃の風リゾート・サンパレス・洞爺観光ホテル',
    desc: '支笏洞爺国立公園の美しいカルデラ湖・北海道洞爺湖温泉を楽天ふるさと納税でお得に満喫！屋上天空パノラマ露天風呂の最高峰「乃の風リゾート」、湖と一体化するインフィニティ露天風呂「洞爺サンパレス」、湖畔特等席と洞窟風呂の老舗「洞爺観光ホテル」を徹底比較。洞爺湖町トラベルクーポン活用術を網羅。',
    keywords: '洞爺湖温泉 ふるさと納税,乃の風リゾート クーポン,洞爺サンパレス ふるさと納税,洞爺湖 花火 見える宿,洞爺湖町 ふるさと納税 宿泊',
    targetCity: '北海道洞爺湖町',
    leadTitle: '青く澄み渡るカルデラ湖と夜空を染めるロングラン花火——湖と空に溶け込むインフィニティ温泉で過ごす至高のリゾートステイ',
    leadP1: '北海道虻田郡洞爺湖町・有珠郡壮瞥町にまたがる洞爺湖（とうやこ）温泉。明治43年（1910年）の有珠山寄生火山の噴火によって誕生した、日本有数の活火山温泉リゾートです。カルデラ湖である洞爺湖は真冬でも凍らない「不凍湖」として知られ、中央に浮かぶ中島、後方にそびえる秀峰・羊蹄山（蝦夷富士）、そして現在も白煙を上げる有珠山と昭和新山の大迫力の火山景観が広がります。',
    leadP2: '洞爺湖温泉の最大のハイライトは、4月下旬から10月末まで毎夜開催される「洞爺湖ロングラン花火大会」。移動する船から湖上に打ち上げられる大輪の花火を、客室や露天風呂、湖畔遊歩道から間近に鑑賞する体験はまさに非日常の極みです。北海道産の旬魚や十勝牛、近郊の豊浦ポークや地元新鮮野菜を取り入れた本格会席や豪華ビュッフェも大人気。北海道洞爺湖町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れのレイクビュー名宿へお得に宿泊でき、特別な思い出が残る北海道旅行が叶います。',
    hotelsKey: 'furusato-tax-toya-onsen-lake-view-fireworks-stay',
    hotelItems: [
      {
        key: 'toya_nonokaze',
        tagline: '全客室レイクビュー＆最上階の天空パノラマ露天風呂「TENQOO」！洞爺湖ロングラン花火を特等席で望む最高峰リゾート',
        detailTitle: 'ザ レイクビュー TOYA 乃の風リゾート —— 湖と一体化する美学。パノラマの絶景と洗練された大人のリゾートライフ',
        features: [
          { title: '最上階の天空パノラマ露天風呂「TENQOO」と展望大浴場', desc: '屋上に設けられたインフィニティ露天風呂。湯船に浸かると洞爺湖の湖面と空がシームレスに繋がり、まるで湖の上に浮かんでいるような圧倒的な開放感を味わえます。' },
          { title: '全客室が洞爺湖に面した贅沢なオーシャン＆レイクフロント設計', desc: '大きなピクチャーウィンドウから中島や羊蹄山を一望。夜には客室の窓からダイナミックなロングラン花火を目の前に鑑賞できます。' },
          { title: 'ライブキッチンで仕上げる北海道食材のプレミアムビュッフェ', desc: 'シェフが目の前で焼き上げるステーキや出来立てパスタ、新鮮な海の幸や自家製スイーツがずらりと並ぶ人気レストラン「レ・ボア」。フレンチ懐石も選べます。' }
        ],
        reviewPoints: '楽天トラベル評価4.49点、口コミ4200件超。「屋上露天風呂からの景色が言葉を失うほど美しく、部屋からの花火も最高」「ビュッフェが北海道一美味しい」と絶賛の嵐。'
      },
      {
        key: 'toya_sunpalace',
        tagline: '湖に浮かぶようなインフィニティ露天風呂！巨大造波プール「ウォーターランド」併設の一大温泉エンターテインメント',
        detailTitle: '洞爺サンパレス リゾート＆スパ —— 家族三世代からカップルまで。立ち湯露天風呂と豪華ビュッフェダイニング',
        features: [
          { title: '湖面との境目が消えるインフィニティ設計の露天風呂と立ち湯', desc: '段差を設けた露天風呂からは、遮るもののない洞爺湖の大パノラマ。深さのある立ち湯に身を委ね、爽やかな湖風を感じながら名湯を満喫できます。' },
          { title: '南国リゾート気分を満喫できる巨大屋内プール「ウォーターランド」', desc: '波の出るプールやウォータースライダー、キッズエリア完備。雨の日や冬でも一年中家族みんなでアクティブに楽しめます。' },
          { title: '季節の道産素材が並ぶビュッフェレストラン「パレシオリエント」', desc: '広々としたモダンダイニングで味わう出来立て料理。北海道の海の幸や揚げたて天ぷら、グリル料理を心ゆくまで味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.33点、口コミ5800件超。「露天風呂からの洞爺湖の景色が素晴らしく立ち湯が最高」「プールで子供が大喜びし、ビュッフェも美味しかった」と高評価。'
      },
      {
        key: 'toya_kanko',
        tagline: '洞爺湖畔のど真ん中に建つ老舗旅館！洞窟風呂とパノラマ大浴場、花火を部屋から眺める絶好ロケーション',
        detailTitle: '洞爺湖温泉 洞爺観光ホテル —— 温泉情緒あふれる名宿。ユニークな洞窟風呂と温かいおもてなし',
        features: [
          { title: '天然鉱石を配した幻想的な「洞窟風呂」と湖一望のパノラマ大浴場', desc: '岩肌を模したユニークな洞窟風呂や、洞爺湖を見晴らす露天風呂。異なる趣の湯船で洞爺の良質なナトリウム・カルシウム塩化物泉を堪能できます。' },
          { title: '湖畔の遊歩道に直結する観光・花火鑑賞に最高のロケーション', desc: '花火鑑賞船乗り場や温泉街の飲食店へ徒歩すぐ。夕暮れの湖畔散歩や、部屋の窓から見下ろす花火をゆったりと楽しめます。' },
          { title: '北海道の山海の幸を盛り込んだ落ち着いた和食会席料理', desc: '噴火湾のホタテや道産牛、旬の野菜をバランスよく取り入れた会席料理。お部屋食プランも選べ、家族やグループで寛げます。' }
        ],
        reviewPoints: '楽天トラベル評価4.25点、口コミ2300件超。「部屋の目の前で花火が上がって感動した」「洞窟風呂が面白く、スタッフの対応も温かかった」と親しまれています。'
      }
    ],
    areaGuide: {
      title: '洞爺湖温泉・有珠山ジオパーク＆中島巡りガイド',
      points: [
        { name: '有珠山ロープウェイと昭和新山の迫力ジオパーク', text: '現在も白い噴煙を上げ続ける昭和新山のすぐ隣から、有珠山山頂へ登るロープウェイ。山頂のテラス「有珠山テラス」からは、洞爺湖と羊蹄山、太平洋を一望する雄大なパノラマが広がります。' },
        { name: '洞爺湖汽船（遊覧船）での中島上陸と森林散策', text: '中世の古城のような遊覧船「エスポアール」で湖上クルーズ。中島には野生のエゾシカが生息し、巨木の森が広がる遊歩道を散策できます。' },
        { name: 'サイロ展望台からの洞爺湖パノラマ絶景と名物スイーツ', text: '洞爺湖の西岸、高台に位置する絶景ビュースポット。中島や有珠山を見渡すダイナミックな景観と、展望台限定の「洞爺湖キャラメルプリン」が人気です。' }
      ]
    },
    furusatoStepTitle: '北海道洞爺湖町ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「北海道洞爺湖町」クーポンを獲得', desc: '楽天ふるさと納税で洞爺湖町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 新千歳空港やJR札幌駅からJR特急北斗または道南バスでアクセス', desc: '新千歳空港からJR特急で洞爺駅まで約1時間30分、駅から路線バスで約20分。3年間の有効期間内で、ロングラン花火期間（4月〜10月）や冬の静寂に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '乃の風リゾート、洞爺サンパレス、洞爺観光ホテルなどのレイクビュー客室プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-beppu-onsen-suginoi-jigoku-stay',
    title: '【別府温泉×ふるさと納税】湧出量日本一・別府地獄めぐり＆メガリゾート！名宿特集｜杉乃井ホテル・潮騒の宿晴海・山荘神和苑',
    desc: '日本一の湧出量を誇る温泉パラダイス・大分県別府温泉郷を楽天ふるさと納税でお得に贅沢ステイ！五段の棚田露天風呂「棚湯」が話題のメガリゾート「杉乃井ホテル」、全室客室露天風呂付きオーシャンリゾート「潮騒の宿 晴海」、鉄輪の高台に佇む能舞台の格式名門「山荘 神和苑」を徹底比較。別府市トラベルクーポン活用術を網羅。',
    keywords: '別府温泉 ふるさと納税,杉乃井ホテル クーポン,潮騒の宿 晴海 ふるさと納税,山荘 神和苑 宿泊,別府市 ふるさと納税 旅行',
    targetCity: '大分県別府市',
    leadTitle: '街のいたるところから立ち上る湯けむりと圧倒的な湯量——別府八湯の多彩な泉質と絶景温泉リゾートを極める旅',
    leadP1: '大分県別府市、鶴見岳と伽藍岳の麓から別府湾に向かって広がる別府温泉郷。毎分約8万3,000リットルという日本一の温泉湧出量を誇り、世界中から温泉ファンが訪れる世界屈指の温泉都市です。「別府八湯（べっぷはっとう）」と呼ばれる八つの温泉エリア（別府、鉄輪、観海寺、明礬、柴石、亀川、堀田、浜脇）からなり、地球上に存在する全10種類の泉質のうち実に7種類が揃うという、まさに生きた地球の博物館です。',
    leadP2: '青い海地獄や赤い血の池地獄をめぐる「別府地獄めぐり」や、名物「地獄蒸し料理」、関アジ・関サバ、豊後牛の贅沢会席など、別府ならではの食と体験は尽きることがありません。山の手から別府湾を見下ろす展望露天風呂や、海辺の波打ち際で楽しむ客室露天風呂など、宿の個性も豊か。大分県別府市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの名門ホテルへお得に宿泊でき、家族旅行や記念日旅行が最高の思い出になります。',
    hotelsKey: 'furusato-tax-beppu-onsen-suginoi-jigoku-stay',
    hotelItems: [
      {
        key: 'beppu_suginoi',
        tagline: '五段の棚田状大展望露天風呂「棚湯」と大噴水ショー！西日本最大級の温泉エンターテインメントリゾート',
        detailTitle: '別府温泉 杉乃井ホテル（オリックスホテルズ＆リゾーツ） —— 別府のシンボルリゾート。宙館の最上階展望露天と豪華ビュッフェ',
        features: [
          { title: '別府湾と街並みを見下ろす五段の棚田露天風呂「棚湯」と宙館「宙湯」', desc: '圧倒的な開放感を誇る名物露天風呂。標高250メートルの最上階から別府湾を一望し、晴れた日には四国佐田岬まで見渡せる絶景パノラマが広がります。' },
          { title: '水着で楽しむ温泉プール「アクアガーデン」と光と噴水のショー', desc: '幻想的な音と光と水が躍動する大迫力の噴水アートショー。家族連れやカップルで夜空の下、感動のエンターテインメントを体験できます。' },
          { title: 'シェフが目の前で腕を振るう豪華プレミアムビュッフェ', desc: '和洋中の出来立て料理や刺身、ステーキ、デザートが並ぶ圧巻のビュッフェレストラン「TERRACE & DINING SORA」。全世代が大満足できる美食空間です。' }
        ],
        reviewPoints: '楽天トラベル評価4.60点、口コミ11000件超という異次元の圧倒的実績。「棚湯からの別府湾の眺めが最高」「噴水ショーもビュッフェもすべてが桁違いに楽しかった」と絶大な人気。'
      },
      {
        key: 'beppu_termes',
        tagline: '全客室が海に面した源泉掛け流し客室露天風呂付き！別府湾の波打ち際に佇む大人のモダンラグジュアリー',
        detailTitle: 'AMANE RESORT SEIKAI（潮騒の宿 晴海） —— 海景と名湯の静寂。波の音を聞くプライベート温泉と極上会席',
        features: [
          { title: '全客室テラスに備えられた別府湾を望む温泉露天風呂', desc: '海風を感じながら24時間好きな時に浸かれるプライベート露天風呂。朝日に染まる水平線や夜の月の光を眺める贅沢な湯浴みが叶います。' },
          { title: '海抜ゼロメートルの波打ち際露天風呂「潮騒の湯」', desc: 'まるで海に浸かっているかのような感覚を味わえる一階大浴場。最上階の展望大浴場「昇陽の湯」とともに二つの絶景温泉を満喫できます。' },
          { title: '関アジ・関サバやおおいた和牛を味わう三つのシグネチャーダイニング', desc: '日本料理「玄」、海鮮料理「えいたろう」、ビストロ「BAN-YA」から好みに合わせて選べる洗練されたディナーコース。' }
        ],
        reviewPoints: '楽天トラベル評価4.66点、口コミ2600件超。「全室露天風呂付きで海が目の前、スタッフの接客も料理も超一流」「大人の贅沢ステイにこれ以上の宿はない」と絶賛。'
      },
      {
        key: 'beppu_kannawa',
        tagline: '鉄輪温泉の高台に佇む名門！能舞台と千坪の日本庭園、自家源泉掛け流しの湯を誇る大人の隠れ家料亭旅館',
        detailTitle: '別府鉄輪温泉 山荘 神和苑（かんなわえん） —— 日本建築の粋を集めた最高峰。庭園の滝と本格懐石料理の宿',
        features: [
          { title: '能舞台や茶室が配された千坪の美しい池泉回遊式庭園', desc: '滝が流れ、四季折々の木々や花々が彩る格式高い庭園。夜には美しくライトアップされ、幽玄な日本の伝統美を体感できます。' },
          { title: '鉄輪の高温良質な自家源泉を100％掛け流しで湛える大浴場', desc: '青みを帯びた神秘的なメタけい酸豊富な美肌温泉。客室露天風呂付きプランでは、名湯を誰にも邪魔されず独り占めできます。' },
          { title: '豊後牛や瀬戸内の高級魚介を極めた伝統の京風懐石・鉄板焼き', desc: '熟練の料理人が一皿一皿魂を込めて仕立てる料理。器の美しさと繊細な味付けが特別な日を最高に演出します。' }
        ],
        reviewPoints: '楽天トラベル評価4.70点の超高スコア。「庭園と能舞台の雰囲気が圧巻で別世界」「温泉もお料理も素晴らしく、最高の記念日になった」と高い評価を得ています。'
      }
    ],
    areaGuide: {
      title: '別府温泉郷・地獄めぐり＆鉄輪湯けむり展望台ガイド',
      points: [
        { name: '別府地獄めぐり（海地獄・血の池地獄・白池地獄など七地獄）', text: '千年以上前から噴気や熱泥、熱湯が噴出していたことから「地獄」と呼ばれた景勝地。コバルトブルーの「海地獄」や真っ赤な「血の池地獄」など、地球のエネルギーを五感で体感できます。' },
        { name: '湯けむり展望台からの夜景（日本夜景遺産）', text: '鉄輪温泉街から立ち上る無数の湯けむりと、後方の鶴見岳、別府湾を一望するビュースポット。夜には湯けむりがライトアップされ、幻想的な夜景が広がります。' },
        { name: '鉄輪温泉街での「地獄蒸し工房」体験', text: '温泉から噴き出る高温の蒸気熱を利用して、野菜や魚介、卵などを蒸し上げる伝統調理法「地獄蒸し」。素材本来の甘みと旨味が凝縮されたヘルシーな郷土料理を体験できます。' }
      ]
    },
    furusatoStepTitle: '大分県別府市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「大分県別府市」クーポンを獲得', desc: '楽天ふるさと納税で別府市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 大分空港やJR特急ソニック・にちりんで別府へアクセス', desc: '大分空港から空港特急バスで約45分、博多駅から特急ソニックで約2時間。3年間の有効期間内で、四季折々のイベントに合わせてゆったり計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '杉乃井ホテル、潮騒の宿晴海、山荘神和苑などの対象宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-kurokawa-onsen-satoyama-roten-stay',
    title: '【黒川温泉×ふるさと納税】渓谷の秘湯・入湯手形で巡る露天風呂＆あか牛会席！風情名宿特集｜お宿のし湯・旅館山河・黒川荘',
    desc: 'ミシュラン二つ星の里山秘湯・熊本県黒川温泉を楽天ふるさと納税でお得に贅沢ステイ！雑木林に佇む大人の隠れ家「お宿 のし湯」、三千坪の森に二つの自家源泉を誇る「旅館 山河」、びょうぶ岩望むエメラルドグリーンの湯「黒川荘」を徹底比較。入湯手形やあか牛料理、南小国町トラベルクーポン活用術を網羅。',
    keywords: '黒川温泉 ふるさと納税,黒川温泉 露天風呂 ふるさと納税,お宿のし湯 クーポン,旅館山河 ふるさと納税,南小国町 ふるさと納税 宿泊',
    targetCity: '熊本県南小国町',
    leadTitle: '田の原川のせせらぎと茅葺き屋根の情緒——杉木立の小径を入湯手形で巡る至高の里山リトリート',
    leadP1: '熊本県阿蘇郡南小国町、阿蘇カルデラの北側、標高約700メートルの山間に湧き出る黒川（くろかわ）温泉。「街全体が一つの宿、通りは廊下、旅館は客室」という景観づくりの哲学のもと、派手な看板を排し、黒を基調とした木造建築と豊かな雑木林が調和した日本屈指の美しい里山温泉地です。ミシュラン・グリーンガイド・ジャポンでも二つ星を獲得し、国内外の温泉ファンから「一度は訪れたい憧れの秘湯」として熱狂的な支持を集めています。',
    leadP2: '黒川温泉の名物といえば、地元産小国杉で作られた木製の「入湯手形」。加盟旅館の多彩な露天風呂の中から好きな3箇所を自由にめぐることができ、川沿いの野天風呂や竹林風呂、洞窟風呂など、大自然と一体化する湯浴みを楽しめます。夕食には阿蘇の雄大な草原で育ったヘルシーで旨味豊かなブランド牛「あか牛」のステーキや炭火焼き、山菜や川魚を取り入れた山里会席を堪能。熊本県南小国町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの隠れ宿へお得に宿泊でき、心洗われる休日が叶います。',
    hotelsKey: 'furusato-tax-kurokawa-onsen-satoyama-roten-stay',
    hotelItems: [
      {
        key: 'kurokawa_noshiyu',
        tagline: '雑木林の中に点在する離れと野趣あふれる大野天風呂！木々のぬくもりと静寂に包まれる全十一室の隠れ家',
        detailTitle: '黒川温泉 お宿 のし湯 —— 木立の中に佇む大人の隠れ宿。茅葺き門をくぐると広がる安らぎの異空間',
        features: [
          { title: '木漏れ日が揺れる大野天風呂「野天風呂」と趣異なる貸切風呂', desc: '雑木林に囲まれた開放感抜群の野天風呂。自然石を配した湯船に浸かりながら、鳥のさえずりと風の音に包まれる至福の湯浴みを体験できます。' },
          { title: '古木や自然素材を活かした温もりあふれる離れ客室', desc: '過度な装飾のない落ち着いた和モダン空間。日常の喧騒を離れ、静かに読書をしたりお茶を楽しんだり、大人のプライベート時間を満喫できます。' },
          { title: '阿蘇あか牛や地元の旬野菜を取り入れた素朴で上質な会席料理', desc: '手作りの温かみが伝わる創作山里料理。素材本来の甘みと旨味を引き出した料理が旅情を心地よく深めてくれます。' }
        ],
        reviewPoints: '楽天トラベル評価4.66点、口コミ800件超。「雑木林の雰囲気が素晴らしくお風呂も最高」「接客が親切で料理も美味しく、本当にリラックスできた」と熱烈な支持。'
      },
      {
        key: 'kurokawa_sanga',
        tagline: '三千坪の原生林に佇む秘湯の一軒宿！「薬師の湯」と「美肌の湯」の二つの自家源泉を引く名門',
        detailTitle: '黒川温泉 旅館 山河（さんが） —— 渓流のほとりに佇む静寂の宿。二大自家源泉と四季折々の自然美',
        features: [
          { title: '性質の異なる二本の自家源泉（単純硫黄泉と炭酸水素塩泉）', desc: '飲泉もできる胃腸に良い「薬師の湯」と、肌をしっとり整える「美肌の湯」。露天風呂「もやいの湯」や貸切風呂で贅沢な掛け流しの湯巡りが叶います。' },
          { title: '三千坪の広大な森に囲まれた木造旅館の落ち着き', desc: '田の原川の支流沿いに建ち、春の新緑、夏のホタル、秋の紅葉、冬の雪景色と、手つかずの自然の中で静かに寛ぐことができます。' },
          { title: '肥後あか牛や山菜、ヤマメを炭火や会席で味わう山里料理', desc: '料理長が自ら吟味した地元熊本の食材。個室の食事処で、温かいものは温かいうちに一品一品丁寧に運ばれます。' }
        ],
        reviewPoints: '楽天トラベル評価4.68点、口コミ1300件超。「二種類の源泉がどちらも素晴らしく森の中の露天風呂が最高」「スタッフの温かさと美味しいあか牛に大満足」と絶賛。'
      },
      {
        key: 'kurokawa_yumoto',
        tagline: '田の原川の巨岩「びょうぶ岩」を望む名物露天風呂！淡いエメラルドグリーンの名湯と離れ客室の贅',
        detailTitle: '黒川温泉 黒川荘 —— 巨岩の渓谷美を仰ぐ特等席。びょうぶ岩露天風呂と茅葺きの歴史空間',
        features: [
          { title: 'そそり立つ「びょうぶ岩」を真正面に望む大露天風呂', desc: '自然のダイナミズムを間近に感じる大露天風呂。白濁から淡いグリーンへと色を変える良質な弱酸性温泉に浸かりながら、迫力の渓谷美を仰げます。' },
          { title: '茅葺き屋根の古民家を移築した重厚な離れ「温飩芽（うどんめ）」', desc: '歴史の風格が漂う専用風呂付きの離れ客室。プライベートな空間で、家族や大切な人とゆったりとした時間を過ごせます。' },
          { title: '肥後あか牛の溶岩焼きや馬刺しなど熊本の名物を極めた会席', desc: '新鮮な特選馬刺しや柔らかいあか牛のステーキ、地元野菜の煮物など、熊本の豊かな山海の幸を存分に堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.63点、口コミ1100件超。「びょうぶ岩を眺めながら入る露天風呂が圧巻」「お部屋の雰囲気も食事も素晴らしく黒川で最高の宿」と高評価。'
      }
    ],
    areaGuide: {
      title: '黒川温泉・入湯手形散策＆平野台展望所ガイド',
      points: [
        { name: '入湯手形での温泉街露天風呂めぐりと足湯散歩', text: '1枚で3カ所の露天風呂に入れる名物「入湯手形」。川沿いの風情ある小径を浴衣姿で歩き、個性豊かな露天風呂や「顔湯」「足湯」を楽しむのが定番です。' },
        { name: '平野台高原展望所（恋人の聖地）からの阿蘇パノラマビュー', text: '黒川温泉街から車で約5分。阿蘇五岳や祖母連山を一望する大展望台。夕暮れどきには茜色に染まる阿蘇の大草原が息を呑む絶景を作り出します。' },
        { name: '温泉街の食べ歩きスイーツ（どらどらバーガー・シュークリーム）', text: '「どら焼き家 どらどら」の名物どらドラバーガーや、「パティスリー麓」のサクサク極上シュークリームなど、湯上がりに食べたい絶品スイーツが満載です。' }
      ]
    },
    furusatoStepTitle: '熊本県南小国町ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「熊本県南小国町」クーポンを獲得', desc: '楽天ふるさと納税で南小国町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 阿蘇くまもと空港や福岡・博多からの直行高速バスでアクセス', desc: '阿蘇くまもと空港から特急バス「やまびこ号」または熊本・博多からの直行バスでアクセス。3年間の有効期間内で、新緑や紅葉、冬の「湯あかり」に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: 'お宿のし湯、旅館山河、黒川荘などの対象宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-manza-onsen-cloud-sulfur-stay',
    title: '【万座温泉×ふるさと納税】日本一濃厚な白濁硫黄泉＆標高1,800m雲上の星空露天！名湯宿特集｜日進舘・万座プリンス・万座高原ホテル',
    desc: '日本一の硫黄含有量を誇る標高1,800mの雲上温泉・群馬県万座温泉を楽天ふるさと納税でお得に満喫！九つの天然温泉と健康湯治の聖地「日進舘」、絶景露天風呂「こまくさの湯」を誇る「万座プリンスホテル」、名物石庭露天風呂で四色の源泉を巡る「万座高原ホテル」を徹底比較。嬬恋村トラベルクーポン活用術を網羅。',
    keywords: '万座温泉 ふるさと納税,万座温泉 日進舘 クーポン,万座プリンスホテル ふるさと納税,万座高原ホテル 宿泊,嬬恋村 ふるさと納税 旅行',
    targetCity: '群馬県嬬恋村',
    leadTitle: '硫黄の香りと乳白色の霊泉——標高千八百メートルの雲上に湧く日本一の濃厚硫黄泉で体験する心身再生の湯治ステイ',
    leadP1: '群馬県吾妻郡嬬恋村、上信越高原国立公園内・標高1,800メートルの高山地帯に位置する万座（まんざ）温泉。「星に一番近い温泉」「雲上の名湯」と称され、日本で最も標高の高い通年車で行ける温泉郷の一つです。万座温泉の最大の誇りは、日本一を誇る圧倒的な硫黄含有量。乳白色や青白く濁る強酸性の含硫黄ナトリウム塩化物硫酸塩温泉は、殺菌力と血行促進作用が極めて高く、古くから難病をも治す「万病に効く湯治場」として全国の湯治客や登山愛好家に愛されてきました。',
    leadP2: '万座の魅力は、手を伸ばせば届きそうな満天の星空を仰ぐ露天風呂体験。夏の冷涼な避暑、秋の全山を黄金色に染めるカラマツの紅葉、冬のパウダースノーと白銀の雪見風呂など、季節ごとの大自然のドラマは圧巻です。夕食には名産の嬬恋キャベツや上州牛、上州麦豚、高原野菜を使った手作り料理に舌鼓。群馬県嬬恋村へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより名門温泉宿へお得に宿泊でき、本物の名湯のパワーを全身で実感できます。',
    hotelsKey: 'furusato-tax-manza-onsen-cloud-sulfur-stay',
    hotelItems: [
      {
        key: 'manza_nisshinkan',
        tagline: '創業以来の名湯湯治宿！日本一の濃厚白濁硫黄泉を九つの天然湯船で巡る「健康長寿の聖地」',
        detailTitle: '万座温泉 日進舘（にっしんかん） —— 標高千八百メートルの奇跡。総天然木造り大浴場「苦湯」と名物露天「極楽湯」',
        features: [
          { title: '総天然木造りの大浴場「長寿の湯」と絶景露天風呂「極楽湯」', desc: '杉や檜が香る大浴場に六つの湯船、そして山並みを一望する展望露天風呂「極楽湯」。乳白色の濃厚な硫黄泉に浸かり、本格的な湯治体験が叶います。' },
          { title: '毎晩開催される「フロアショー」と健康を気遣うおもてなし', desc: '歌や伝統芸能が楽しめる宿泊者向けナイトショー。長逗留の湯治客にも優しい温かいアットホームな接客が評判です。' },
          { title: '健康と安全にこだわった四十種類以上の和洋バイキング', desc: '地元の契約農家から届く新鮮野菜や名物キャベツ、発酵食品を取り入れた身体に優しいバイキング。心身ともに健康になれる料理です。' }
        ],
        reviewPoints: '楽天トラベル評価4.33点、口コミ3400件超。「極楽湯から見た星空と白濁したお湯が人生最高」「お湯の薬効がすごくて体の痛みが消えた」と圧倒的なリピート率。'
      },
      {
        key: 'manza_prince',
        tagline: '標高千八百メートルの山並みを見晴らす展望露天風呂「こまくさの湯」！雲上の開放感と洗練されたホテルステイ',
        detailTitle: '万座温泉 万座プリンスホテル —— 空と山に抱かれるリゾート。絶景パノラマ露天風呂と本格フランス料理・和洋ビュッフェ',
        features: [
          { title: '雄大な山々を一望する混浴・女性専用の絶景露天風呂「こまくさの湯」', desc: '標高1,800mの稜線を見渡すパノラマ露天風呂。白濁した名湯に浸かりながら、朝の雲海や夕焼け、満天の星空を眺める非日常の湯浴みが人気です。' },
          { title: 'プリンスホテルならではの清潔で洗練された快適客室', desc: '広々とした客室からは万座の自然林や山並みを一望。高原リゾートらしい落ち着いた空間で快適に過ごせます。' },
          { title: '上州の恵みをふんだんに取り入れたディナービュッフェまたは洋食コース', desc: 'オープンキッチンで焼き上げるローストビーフや地元食材を使った料理。ワインとともに優雅なディナータイムを楽しめます。' }
        ],
        reviewPoints: '楽天トラベル評価4.24点、口コミ3100件超。「こまくさの湯からの眺めが絶景で雲の上にいるよう」「お湯が真っ白で硫黄の香りが心地よく、また来たい」と好評。'
      },
      {
        key: 'manza_kogen',
        tagline: '名物「石庭露天風呂」に八つの湯船！黄色・透明・白濁など四色の異なる源泉を巡る温泉天国',
        detailTitle: '万座温泉 万座高原ホテル —— 四色の源泉を入り比べ。渓流沿いの巨大露天風呂とアットホームな高原滞在',
        features: [
          { title: '万座川の渓流沿いに広がる名物「石庭露天風呂」の八つの湯船', desc: '白濁の湯、エメラルドグリーンの湯、黄色がかった湯など、四種類の自家源泉を引き込んだ巨大露天風呂。混浴と女性専用エリアがあり、家族やカップルで湯巡りができます。' },
          { title: '万座プリンスホテルの大浴場も利用できる嬉しい無料湯巡り特典', desc: '宿泊者は姉妹館「万座プリンスホテル」の展望露天風呂も無料で利用可能。二つのホテルで万座の湯を心ゆくまで堪能できます。' },
          { title: '嬬恋キャベツや上州豚を味わうカジュアルなディナーバイキング', desc: '地元の旬素材をふんだんに使った手作り料理が並ぶバイキング。気兼ねなく美味しい食事を満喫できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.31点、口コミ2700件超。「石庭露天風呂の種類の多さと広さに大興奮」「色とりどりのお湯に入れてプリンスホテルのお風呂も行けて最高」と高評価。'
      }
    ],
    areaGuide: {
      title: '万座温泉・志賀草津高原ルート＆嬬恋パノラマライン観光ガイド',
      points: [
        { name: '志賀草津高原ルート（国道292号日本最高地点）ドライブ', text: '標高2,172メートルの国道最高地点を通る絶景山岳ドライブウェイ。白根山や北アルプスの大パノラマを見下ろしながら走る爽快なルートです。' },
        { name: '万座空吹（からぶき）の火山性ガス噴出口', text: '昔の火口跡から今なお白い水蒸気と火山性ガスが吹き出す迫力のスポット。万座プリンスホテルや温泉街の遊歩道から間近に観察できます。' },
        { name: '愛妻の丘（嬬恋パノラマライン）と浅間山絶景', text: '見渡す限りの広大なキャベツ畑の中に佇む展望台。浅間山の雄姿を一望でき、「妻に愛を叫ぶ」名所としてフォトジェニックな人気を誇ります。' }
      ]
    },
    furusatoStepTitle: '群馬県嬬恋村ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「群馬県嬬恋村」クーポンを獲得', desc: '楽天ふるさと納税で嬬恋村を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 北陸新幹線軽井沢駅またはJR吾妻線万座・鹿沢口駅からバスでアクセス', desc: '軽井沢駅から西武観光バスで約1時間40分。3年間の有効期間内で、夏の爽涼な避暑や秋の紅葉、冬のスキーシーズンに合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '日進舘、万座プリンスホテル、万座高原ホテルなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  }
];

function generateArticlePage(art) {
  const hotelObj = allHotels[art.hotelsKey] || {};

  const hotelCardsCode = art.hotelItems.map((h, idx) => {
    const data = hotelObj[h.key] || {};
    const hotelName = data.hotelName || '名門温泉旅館';
    const imgUrl = data.hotelImageUrl || 'https://placehold.co/800x500/e2e8f0/1e293b?text=Hotel+Photo';
    const rating = data.reviewAverage || 4.5;
    const revCount = data.reviewCount || 100;
    const chargeStr = data.hotelMinCharge ? ('¥' + Number(data.hotelMinCharge).toLocaleString() + '〜') : '要問い合わせ';
    const address = (data.address1 || '') + ' ' + (data.address2 || '');
    const affiliateUrl = data.hotelInformationUrl || 'https://travel.rakuten.co.jp/';
    const hotelNo = data.hotelNo || '';

    const featuresCode = h.features.map(f => {
      return `
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ${f.title}
                    </h5>
                    <p className="text-stone-600 leading-relaxed">${f.desc}</p>
                  </div>`;
    }).join('');

    return `
          {/* ホテル ${idx + 1} */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="${imgUrl}"
                alt="${hotelName}"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第${idx + 1}選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ ${rating}（口コミ ${revCount}件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">${art.targetCity}</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ${hotelName}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  ${h.tagline}
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ${h.detailTitle}
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  ${featuresCode}
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">${h.reviewPoints}</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>${address}</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>${chargeStr} /人</div>
                ${hotelNo ? `<div><span className="font-semibold text-stone-700">楽天施設ID：</span>${hotelNo}</div>` : ''}
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="${affiliateUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】${hotelName} の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>`;
  }).join('\n');

  const areaPointsCode = art.areaGuide.points.map((pt, idx) => {
    return `
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">${idx + 1}</span>
                ${pt.name}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                ${pt.text}
              </p>
            </div>`;
  }).join('');

  const stepsCode = art.furusatoSteps.map((st, idx) => {
    return `
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                ${st.step}
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                ${st.desc}
              </p>
            </div>`;
  }).join('');

  return `import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${art.title.replace(/'/g, "\\'")}',
  description: '${art.desc.replace(/'/g, "\\'")}',
  keywords: '${art.keywords.replace(/'/g, "\\'")}',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/${art.slug}',
  },
  openGraph: {
    title: '${art.title.replace(/'/g, "\\'")}',
    description: '${art.desc.replace(/'/g, "\\'")}',
    url: 'https://croud-travel.pages.dev/${art.slug}',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '${art.title.replace(/'/g, "\\'")}',
    description: '${art.desc.replace(/'/g, "\\'")}',
    author: {
      '@type': 'Organization',
      name: 'クラウドトラベル 観光・ふるさと納税調査班',
      url: 'https://croud-travel.pages.dev/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラウドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png',
      },
    },
    datePublished: '2026-09-10T17:10:00+09:00',
    dateModified: '2026-09-10T17:10:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/${art.slug}',
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 antialiased font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-1.5">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span>/</span>
        <Link href="/travel-savings-guide" className="hover:underline">ふるさと納税旅行ガイド</Link>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">${art.title}</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>${art.targetCity} ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          ${art.title}
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          ${art.desc}
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            ${art.leadTitle}
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ${art.leadP1}
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ${art.leadP2}
          </p>
        </section>

        {/* 比較サマリー表 */}
        <section className="bg-amber-50/50 rounded-3xl p-6 sm:p-8 border border-amber-100/80 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            今回ご紹介する厳選3名宿の比較サマリー
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white rounded-xl shadow-xs">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-100/70 text-stone-700">
                  <th className="p-3 font-bold">宿名</th>
                  <th className="p-3 font-bold">評価</th>
                  <th className="p-3 font-bold">最大の特徴</th>
                  <th className="p-3 font-bold">おすすめの過ごし方</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                ${art.hotelItems.map((h, idx) => {
                  const data = hotelObj[h.key] || {};
                  const hotelName = data.hotelName || '名門温泉旅館';
                  const rating = data.reviewAverage || 4.5;
                  return `
                <tr>
                  <td className="p-3 font-bold text-amber-900">${hotelName}</td>
                  <td className="p-3 font-bold">★ ${rating}</td>
                  <td className="p-3 text-stone-600">${h.tagline}</td>
                  <td className="p-3 text-stone-600">${idx === 0 ? '最高峰の絶景・憧れのステイ' : idx === 1 ? '充実の施設・アクティブ寛ぎ' : '落ち着いた風情・アットホーム旅'}</td>
                </tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>
        </section>

        {/* ホテル詳細カード一覧 */}
        <section className="space-y-8">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🏆</span> 厳選3宿の詳細レビュー＆ふるさと納税活用ガイド
          </h2>
${hotelCardsCode}
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> ${art.areaGuide.title}
          </h2>
          <div className="grid gap-4">
${areaPointsCode}
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              ${art.furusatoStepTitle}
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">
${stepsCode}
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-amber-500 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg hover:opacity-95 transition"
            >
              <span>楽天ふるさと納税トラベルクーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* 内部リンク・ハブ導線 */}
        <section className="border-t border-stone-200 pt-8 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            関連するふるさと納税トラベル特集
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-600">
            <li>
              <Link href="/travel-savings-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> ふるさと納税×旅行 完全攻略ハブページトップ
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-after-booking-discount-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 予約済みでも間に合う！楽天トラベル「あとから適用」ガイド
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-jozankei-onsen-keikoku-retreat-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 定山渓温泉 豊平峡渓谷美＆源泉かけ流しリゾート特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-shuzenji-onsen-bamboo-heritage-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 修善寺温泉 伊豆最古の名湯・竹林の小径＆文化財宿特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
`;
}

for (const art of articles) {
  const dir = path.join(__dirname, 'src/app', art.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const content = generateArticlePage(art);
  const filePath = path.join(dir, 'page.tsx');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Generated: ${filePath} (${content.length} chars)`);
}
