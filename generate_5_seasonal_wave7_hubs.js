const fs = require('fs');
const path = require('path');

const wave7Configs = [
  {
    slug: 'winter-snowshoe-frozen-waterfall',
    badge: 'SNOWSHOE & FROZEN WATERFALL',
    title: '【冬の自然探検】白銀の氷瀑＆スノーシュートレッキング宿 完全ガイド',
    metaDesc: '青く輝く巨大氷瀑とパウダースノー！青森・奥入瀬渓流氷瀑ツアー、福島・裏磐梯イエローフォール、栃木・奥日光戦場ヶ原、長野・志賀高原など、初心者でも楽しめる冬のアウトドア体験と名湯宿を徹底解説。',
    heroDesc: '時が止まったかのように凍りつく巨大な滝「氷瀑（ひょうばく）」。スノーシューを履いて白銀の森を踏みしめ、大自然の神秘に出逢う感動のアクティビティ。探検の後は源泉かけ流しの温泉で体を温める極上の冬旅へ。',
    categoryKey: 'winter-snowshoe-frozen-waterfall',
    areaGuides: [
      {
        key: 'oirase_ice_fall',
        title: '1. 青森・奥入瀬渓流（青く凍りつく巨大氷柱と渓流露天風呂リゾート）',
        timing: 'シーズン：1月上旬〜3月上旬（氷瀑の見頃）',
        desc: '千筋の滝や雲井の滝が巨大な青い氷柱へと姿を変える奥入瀬渓流。ネイチャーガイドと歩く氷瀑スノーシューツアーや夜間のライトアップツアーが人気。星野リゾート奥入瀬渓流ホテルなどで贅沢ステイ。',
        spots: '奥入瀬渓流（銚子大滝・雲井の滝・阿修羅の流れ）、十和田湖畔、蔦沼、八甲田山',
        access: 'JR八戸駅・青森駅より無料送迎バス（星野リゾート等）またはJRバス。',
        tip: 'ホテルの「氷瀑の湯（露天風呂に本物の氷瀑を再現）」に浸かりながらの入浴は一生に一度の体験です。'
      },
      {
        key: 'bandai_yellow_fall',
        title: '2. 福島・裏磐梯＆磐梯山（幻の黄金氷瀑「イエローフォール」スノーシュートレッキング）',
        timing: 'シーズン：1月下旬〜2月下旬（厳冬期限定の奇観）',
        desc: '磐梯山の火口壁に現れる、硫黄分を含んだ巨大な黄色い氷瀑「イエローフォール」。裏磐梯スキー場からリフトとスノーシューで目指す絶景アドベンチャー。裏磐梯高原温泉の白濁湯でリフレッシュ。',
        spots: '磐梯山火口イエローフォール、五色沼湖沼群（雪景色）、裏磐梯スキー場、桧原湖（ワカサギ釣り）',
        access: 'JR磐越西線「猪苗代駅」より路線バス・送迎バス約30分。磐越道猪苗代磐梯高原IC約25分。',
        tip: 'ガイド付きスノーシューツアーに参加すると、安全に火口原の絶景ポイントまで案内してもらえます。'
      },
      {
        key: 'senjogahara_snowshoe',
        title: '3. 栃木・奥日光戦場ヶ原＆小田代原（白銀の湿原クロスカントリー＆日光湯元温泉）',
        timing: 'シーズン：12月下旬〜3月上旬',
        desc: '標高1,400m、一面の銀世界となった戦場ヶ原や小田代原の貴婦人（白樺の木）。平坦な木道や雪原をスノーシューで歩き、野生のシカや野鳥を観察。日光湯元温泉の濃厚な乳白色硫黄泉で温まります。',
        spots: '戦場ヶ原、小田代原、庵滝（いおりのたき・青い氷瀑）、湯滝、日光湯元温泉',
        access: '東武日光駅・JR日光駅より東武バス「湯元温泉行き」で約60〜70分。',
        tip: '冬期限定で出現する奥日光の秘瀑「庵滝（いおり滝）」の巨大氷柱群ツアーが近年大注目を集めています。'
      },
      {
        key: 'shigakogen_snowshoe',
        title: '4. 長野・志賀高原＆地獄谷（白樺原生林のパウダースノーとスノーモンキー）',
        timing: 'シーズン：12月中旬〜4月上旬',
        desc: '上信越高原国立公園の広大な原生林。パウダースノーを踏みしめて原生林を歩くスノーシューツアーや、温泉に入る野生のニホンザル（スノーモンキー）で世界的に有名な地獄谷野猿公苑を巡る冬旅。',
        spots: '地獄谷野猿公苑、志賀高原大沼池、一の瀬・焼額山、湯田中渋温泉郷',
        access: '北陸新幹線「長野駅」より急行バス「志賀高原線」で約70分。',
        tip: 'スノーシューの後は、麓の渋温泉で厄除九湯めぐりや名物温泉まんじゅうを楽しむのが王道ルートです。'
      }
    ]
  },
  {
    slug: 'autumn-winter-traditional-craft-pottery',
    badge: 'JAPANESE POTTERY & CRAFTS',
    title: '【用の美】伝統工芸・陶芸の里めぐり＆美肌温泉旅館 完全ガイド',
    metaDesc: '土の温もりと職人の粋！栃木・益子焼、石川・加賀九谷焼＆山中漆器、佐賀・有田焼波佐見焼、福井・越前焼＆あわら温泉など、窯元めぐり・絵付け体験と美しい器で味わう極上会席宿を徹底解説。',
    heroDesc: '手になじむ陶器の質感、鮮やかな色彩の絵付け、何百年も受け継がれてきた職人技。ギャラリーや窯元をのんびり歩いて自分だけの一器と出逢い、夜は美しい器に盛り付けられた郷土会席と温泉に酔いしれる旅。',
    categoryKey: 'autumn-winter-traditional-craft-pottery',
    areaGuides: [
      {
        key: 'mashiko_pottery',
        title: '1. 栃木・益子（用の美が息づく益子焼の里と古民家カフェ・温泉ステイ）',
        timing: '通年（秋の益子秋の陶器市：11月上旬開催）',
        desc: '濱田庄司らによって民藝運動の拠点となった益子町。城内坂通りに約50軒の陶器店やギャラリーが並び、作陶体験やカフェ巡りが楽しめます。近隣の真岡や宇都宮・喜連川温泉と組み合わせたステイ。',
        spots: '益子城内坂通り、益子陶芸美術館、濱田庄司記念益子参考館、道の駅ましこ',
        access: '真岡鐵道「益子駅」下車。JR宇都宮駅より東野バスで約60分。北関東道真岡ICより車約20分。',
        tip: '「道の駅ましこ」では地元作家の器や益子野菜を使ったランチが楽しめ、お土産探しに最適です。'
      },
      {
        key: 'kutani_yamanaka',
        title: '2. 石川・加賀山中＆山代温泉（華麗な九谷焼と山中漆器の器で味わう加賀会席）',
        timing: '通年（秋の鶴仙渓紅葉・冬の加能ガニ）',
        desc: '五彩の鮮やかな絵付けが特徴の「九谷焼」と、木目の美しさを活かす「山中漆器」。魯山人ゆかりの山代温泉や鶴仙渓が美しい山中温泉の老舗宿では、美術品のような器に盛られた加賀懐石を堪能。',
        spots: '九谷焼窯跡展示館、山中温泉鶴仙渓（川床・あやとりはし）、魯山人寓居跡いろは草庵、ゆのくにの森',
        access: '北陸新幹線「加賀温泉駅」より周遊バス「キャン・バス」または各旅館送迎バス約15分。',
        tip: '鶴仙渓遊歩道を散策し、川床で道場六三郎レシピのスイーツを味わうのが山中温泉の風流な過ごし方です。'
      },
      {
        key: 'arita_pottery',
        title: '3. 佐賀・有田＆嬉野・武雄温泉（日本磁器発祥の有田焼と日本三大美肌の湯）',
        timing: '通年（秋の有田陶磁器まつり：11月中旬）',
        desc: '400年の歴史を誇る有田焼や、モダンなデザインで人気の波佐見焼。トンバイ塀のある裏通りや泉山磁石場を散策し、日本三大美肌の湯・嬉野温泉で名物「温泉湯どうふ」と佐賀牛に舌鼓。',
        spots: '有田内山地区（トンバイ塀のある裏通り）、陶山神社（磁器の鳥居）、嬉野温泉シーボルトの湯、武雄神社大楠',
        access: 'JR西九州新幹線「武雄温泉駅」「嬉野温泉駅」下車。長崎空港・佐賀空港よりレンタカー。',
        tip: '嬉野温泉の名物「とろける温泉湯どうふ」は、弱アルカリ性のお湯で豆腐がとろけて豆乳鍋のようになり絶品です。'
      },
      {
        key: 'echizen_craft',
        title: '4. 福井・あわら温泉＆越前（越前焼・越前和紙・越前打刃物のものづくり巡り）',
        timing: '通年（冬の越前ガニ解禁シーズンが最高潮）',
        desc: '日本六古窯の一つ「越前焼」や1500年の歴史を持つ「越前和紙」、世界が称賛する「越前打刃物」。関西の奥座敷・あわら温泉の庭園露天風呂付き宿に宿泊し、越前漆器で味わう冬の越前ガニ会席を満喫。',
        spots: '越前陶芸村、越前和紙の里（パピルス館）、タケフナイフビレッジ、東尋坊、あわら温泉屋台村',
        access: '北陸新幹線「芦原温泉駅」下車。金沢駅から新幹線で約20分。',
        tip: '「タケフナイフビレッジ」ではガラス張りの工房で職人の鍛造作業を間近で見学でき、包丁づくり体験も人気です。'
      }
    ]
  },
  {
    slug: 'autumn-winter-all-inclusive-luxury',
    badge: 'ALL-INCLUSIVE RESORT',
    title: '【贅沢フリーフロー】お財布フリー！秋・冬の極上オールインクルーシブ宿 完全ガイド',
    metaDesc: '滞在中の飲食・アクティビティがすべて無料！神奈川・箱根、栃木・那須高原、静岡・東伊豆、宮城・作並秋保温泉など、生ビールや地酒、暖炉ラウンジの軽食を心ゆくまで堪能できる人気宿を徹底解説。',
    heroDesc: 'チェックインした瞬間から始まるストレスフリーな極上時間。ウェルカムスイーツ、湯上がりの生ビール、バーラウンジの銘酒、豪華ディナーのドリンクまですべて宿泊代金込み。大人のおこもり贅沢ステイへ。',
    categoryKey: 'autumn-winter-all-inclusive-luxury',
    areaGuides: [
      {
        key: 'hakone_all_inclusive',
        title: '1. 神奈川・箱根温泉郷（プレミアムラウンジで地酒・ワインと名湯を味わい尽くす）',
        timing: '通年（秋の紅葉・冬の温泉シーズン）',
        desc: '都心からロマンスカーで気軽に行ける箱根。暖炉のあるラウンジでワインやクラフトビール、フィンガーフードがフリー。客室露天風呂で温まった後は、バーで特製カクテルを傾ける贅沢な夜。',
        spots: '箱根登山鉄道、彫刻の森美術館、大涌谷、芦ノ湖スカイライン',
        access: '箱根登山鉄道強羅駅・箱根湯本駅より送迎あり。新宿から約85分。',
        tip: '夕食前のアペリティフ（食前酒タイム）からディナーのペアリング、食後のナイトバーまでフル活用するのがコツです。'
      },
      {
        key: 'nasu_all_inclusive',
        title: '2. 栃木・那須高原（北欧風暖炉ラウンジ＆高原マルシェの極上インクルーシブ）',
        timing: '通年（秋の紅葉狩り・冬の雪見焚き火）',
        desc: '那須の森林に囲まれたリゾートホテル。パチパチ薪が燃える暖炉を囲み、栃木の地ビールや厳選ワイン、焼きマシュマロを満喫。ビュッフェでは那須名物牛ステーキや地元産チーズが食べ飲み放題。',
        spots: '那須高原展望台、那須どうぶつ王国、那須ステンドグラス美術館、殺生石',
        access: '東北新幹線「那須塩原駅」より無料シャトルバス・車で約30分。',
        tip: '湯上がり処のアイスキャンディーやご当地牛乳、夜食の特製ラーメンサービスなど宿ごとの無料特典が充実しています。'
      },
      {
        key: 'izu_all_inclusive',
        title: '3. 静岡・東伊豆＆伊豆高原（海を望む絶景バー＆伊豆海の幸ディナーフリーフロー）',
        timing: '通年（冬も温暖なオーシャンビューリゾート）',
        desc: '相模湾を一望するテラスラウンジ。水平線を眺めながら生ビールやスパークリングワインを楽しみ、夕食時は金目鯛や伊勢海老料理とともに地酒やカクテルを好きなだけ味わえる海辺のリトリート。',
        spots: '城ヶ崎海岸門脇吊橋、大室山、伊豆シャボテン動物公園、稲取細野高原',
        access: '伊豆急行線「伊豆高原駅」「伊豆熱川駅」下車。特急踊り子号利用。',
        tip: '早朝の「日の出タイム」にラウンジで提供される挽きたて珈琲を片手に、海から昇る朝日を眺める時間が至福です。'
      },
      {
        key: 'miyagi_all_inclusive',
        title: '4. 宮城・作並＆秋保温泉（渓流を望む湯上がりビールバーと宮城の地酒飲み比べ）',
        timing: '通年（秋の宮城峡紅葉・冬の雪見風呂）',
        desc: '仙台の奥座敷・作並温泉の「一の坊」など、オールインクルーシブを極めた名宿。ニッカウヰスキー宮城峡蒸溜所に近く、本格ウイスキーや宮城の純米酒が飲み放題。広瀬川の渓流露天風呂で心身を解放。',
        spots: 'ニッカウヰスキー宮城峡蒸溜所、鳳鳴四十八滝、秋保大滝、定義如来西方寺（三角油揚げ）',
        access: 'JR仙山線「作並駅」より無料送迎バス約5分。JR仙台駅より車・バス約40分。',
        tip: '敷地内のサイクリングバイシクルレンタルやヨガ体験、コンサートなどのアクティビティもすべて無料で楽しめます。'
      }
    ]
  },
  {
    slug: 'autumn-winter-strawberry-picking-resort',
    badge: 'STRAWBERRY PICKING & SPA',
    title: '【もぎたて完熟】冬・春いちご狩り＆温泉リゾートホテル 完全ガイド',
    metaDesc: '甘くてジューシーな完熟いちご食べ放題！栃木（とちおとめ＆スカイベリー）、静岡伊豆（紅ほっぺ）、千葉南房総、福岡（あまおう）など、観光農園でのいちご狩りと極上温泉をセットで楽しむ冬旅宿を徹底解説。',
    heroDesc: '12月から春にかけて最盛期を迎えるいちご狩り。大粒で真っ赤に実った完熟いちごをその場で頬張る幸せ。いちご狩り農園へのアクセスが良く、温泉やご当地スイーツを楽しめる人気ホテルへ。',
    categoryKey: 'autumn-winter-strawberry-picking-resort',
    areaGuides: [
      {
        key: 'tochigi_strawberry',
        title: '1. 栃木・宇都宮＆日光（いちご王国！とちおとめ・スカイベリー・とちあいか食べ比べ）',
        timing: 'シーズン：12月上旬〜5月上旬（1月〜2月が最も甘い）',
        desc: 'いちご収穫量日本一を誇る栃木県。高級品種「スカイベリー」やハート形の断面が可愛い「とちあいか」を農園で食べ放題。日光東照宮参拝や鬼怒川温泉・宇都宮餃子グルメと組み合わせた王道プラン。',
        spots: '日光ストロベリーパーク、宇都宮みんみん（餃子）、日光東照宮、鬼怒川温泉街',
        access: '東北新幹線「宇都宮駅」または東武特急「東武日光駅・鬼怒川温泉駅」。',
        tip: 'いちご狩りは午前中（特に開園直後）が果実が冷えていて最も甘みを感じられおすすめです。'
      },
      {
        key: 'izu_strawberry',
        title: '2. 静岡・伊豆の国＆伊豆長岡温泉（大粒の紅ほっぺ狩りと歴史ある名湯ステイ）',
        timing: 'シーズン：12月中旬〜5月上旬',
        desc: '伊豆最大級のいちご狩りエリア・伊豆の国市。甘みと酸味のバランスが絶妙な「紅ほっぺ」や「きらぴ香」を味わい、伊豆長岡温泉のアルカリ性単純温泉でつるつる美肌を実感する週末ドライブ旅。',
        spots: '伊豆の国パノラマリゾート（碧テラス）、江間いちご狩りセンター、韮山反射炉（世界遺産）',
        access: '伊豆箱根鉄道駿豆線「伊豆長岡駅」下車。新東名長泉沼津ICより伊豆縦貫道経由約25分。',
        tip: '「碧テラス」から富士山と駿河湾のパノラマを眺め、いちご大福やソフトクリームを味わうのが定番です。'
      },
      {
        key: 'chiba_strawberry',
        title: '3. 千葉・南房総＆館山（冬も温暖な房総半島で楽しむ早春のいちご狩り＆花摘み）',
        timing: 'シーズン：1月上旬〜5月上旬（菜の花畑と同時に楽しめる）',
        desc: '都心からアクアラインで気軽に行ける南房総。ハウス栽培の甘いいちご狩りとポピー・菜の花摘みを楽しんだ後は、館山や白浜のオーシャンビュー温泉ホテルで房総の地魚舟盛りディナーを満喫。',
        spots: '館山いちご狩りセンター、道の駅とみうら枇杷倶楽部、房総フラワーライン、野島埼灯台',
        access: '富津館山道路富浦ICより車約5分。JR内房線館山駅下車。東京駅から高速バスあり。',
        tip: '道の駅とみうら枇杷倶楽部の「プレミアム苺パフェ」や完熟びわソフトクリームが大人気です。'
      },
      {
        key: 'fukuoka_strawberry',
        title: '4. 福岡・久留米＆原鶴温泉（あかい・まるい・おおきい・うまい！本場あまおう狩り）',
        timing: 'シーズン：12月下旬〜4月下旬',
        desc: 'いちごの王様「博多あまおう」の本場・筑後川流域。広大な観光農園で完熟あまおうを心ゆくまで味わい、「ダブル美肌の湯」として名高い原鶴温泉・筑後川温泉の源泉かけ流し湯で癒やされます。',
        spots: '原鶴温泉街、道の駅うきは、筑後川鵜飼い（夏）／フルーツ狩り街道、水縄連山',
        access: '大分自動車道杷木ICより車で約5分。JR久大本線「筑後吉井駅」より車約10分。',
        tip: '原鶴温泉は「硫黄泉」と「弱アルカリ性単純泉」が合わさった珍しい泉質で、古い角質を落として肌をしっとり整えてくれます。'
      }
    ]
  },
  {
    slug: 'autumn-winter-sacred-power-spot',
    badge: 'SACRED RETREAT & POWER SPOT',
    title: '【心洗われる神域】開運パワースポット＆歴史の宿坊・温泉宿 完全ガイド',
    metaDesc: '新年の開運・心の浄化！和歌山・高野山（宿坊ステイ＆精進料理）、長野・戸隠神社（白銀の杉並木）、島根・出雲大社（玉造温泉）、和歌山・熊野三山（那智の滝）など、静寂の聖地と名湯宿を徹底解説。',
    heroDesc: '澄み渡る神聖な空気に包まれ、日頃の雑踏から離れて自分自身と向き合うリトリート。歴史ある寺院宿坊での朝勤行や護摩焚き体験、神話の息づく古社参拝と美肌温泉で心身を清める極上の旅へ。',
    categoryKey: 'autumn-winter-sacred-power-spot',
    areaGuides: [
      {
        key: 'koyasan_shukubo',
        title: '1. 和歌山・世界遺産高野山（1200年の聖地！宿坊で精進料理＆朝の勤行・瞑想体験）',
        timing: '通年（秋の紅葉・冬の白銀に包まれる壇上伽藍）',
        desc: '弘法大師空海が開いた天空の聖地。50箇所以上ある寺院宿坊に宿泊し、庭園を眺めながら伝統の精進料理を味わい、早朝の勤行（おつとめ）や阿字観（瞑想）、写経で心を整える唯一無二の体験。',
        spots: '奥之院（弘法大師御廟・杉木立）、壇上伽藍（根本大塔・金堂）、金剛峯寺、大門',
        access: '南海高野線「極楽橋駅」より高野山ケーブルカーで約5分、南海りんかんバス接続。',
        tip: '宿坊の多くには本格的な大浴場や枯山水庭園が備わっており、初めての宿坊泊でも快適に過ごせます。'
      },
      {
        key: 'togakushi_shrine',
        title: '2. 長野・信州戸隠神社（樹齢400年を超える白銀の奥社杉並木と戸隠手打ち蕎麦）',
        timing: '通年（秋の紅葉鏡池・冬の雪化粧杉並木）',
        desc: '天照大御神の天岩戸伝説が残る霊山・戸隠。奥社参道に連なる樹齢400年以上の巨大な杉並木は圧巻のパワースポット。宿坊や温泉旅館で名物の戸隠手打ち蕎麦（ぼっち盛り）と信州牛を堪能。',
        spots: '戸隠神社五社（奥社・中社・宝光社・九頭龍社・火之御子社）、鏡池、戸隠民俗館',
        access: 'JR長野駅善光寺口よりアルピコ交通バス「戸隠線」で約60〜70分。',
        tip: '冬の奥社参道は雪道となるため長靴やスノーブーツのレンタルを活用しましょう。鏡池の紅葉リフレクションも絶景。'
      },
      {
        key: 'izumo_taisha',
        title: '3. 島根・出雲大社＆玉造温泉（全国の神々が集う縁結びの聖地と日本最古の美肌温泉）',
        timing: '通年（旧暦10月の神在月・年末年始の初詣）',
        desc: '大国主大神を祀る日本屈指の大社。巨大な大注連縄（しめなわ）が迎える神楽殿で良縁を祈願し、車で約40分の玉造温泉へ。『出雲国風土記』に「一度洗えば容貌が端正になり」と記された奇跡の化粧水温泉を満喫。',
        spots: '出雲大社（本殿・神楽殿・勢溜の鳥居）、稲佐の浜（神迎えの浜）、玉造温泉街（足湯・玉作湯神社）、宍道湖夕日',
        access: '一畑電車「出雲大社前駅」下車。出雲縁結び空港より連絡バス。JR玉造温泉駅接続。',
        tip: '玉作湯神社で「叶い石」を授かり、境内の願い石に重ねて自分だけのお守りを作る参拝が女性やカップルに大人気です。'
      },
      {
        key: 'kumano_kodo',
        title: '4. 和歌山・熊野三山＆南紀勝浦温泉（世界遺産熊野古道・那智の滝と大洞窟温泉「忘帰洞」）',
        timing: '通年（冬の澄んだ滝飛沫と海景色）',
        desc: '黄泉がえりの聖地・熊野。落差133mの名瀑「那智の滝」や熊野那智大社を参拝し、南紀勝浦温泉の海食洞窟風呂「忘帰洞」へ。太平洋の荒波が打ち寄せる大洞窟露天風呂で心身を清める極上の旅。',
        spots: '那智の滝（飛瀧神社）、熊野那智大社、青岸渡寺（三重塔）、熊野古道大門坂、勝浦港（生マグロ市場）',
        access: 'JR特急くろしおで新大阪駅から紀伊勝浦駅まで約3時間30分。南紀白浜空港よりバス・レンタカー。',
        tip: '勝浦港は生鮮マグロの水揚げ日本一。宿で冷凍していない本物の「生マグロ会席」を味わうのが最高の贅沢です。'
      }
    ]
  }
];

function generatePageTsx(config) {
  return `import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "${config.title} ｜ 日本全国・旅宿クラウド",
  description: "${config.metaDesc}",
  keywords: ["${config.slug}", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["${config.categoryKey}"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for ${config.categoryKey}", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = ${JSON.stringify(config.areaGuides, null, 2)};

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ${config.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            ${config.title}
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            ${config.heroDesc}
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-emerald-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 観光・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめ見どころ・スポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 満足度を高める滞在のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}周辺のおすすめ厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-950/5">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">
                              ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                            </span>
                          )}
                        </div>

                        <div className="p-4 space-y-2">
                          {hotel.reviewAverage > 0 && (
                            <div className="flex items-center justify-between text-[9px] font-bold text-amber-600">
                              <span>⭐ {hotel.reviewAverage}点（{hotel.reviewCount}件）</span>
                            </div>
                          )}
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-emerald-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-emerald-950/70 line-clamp-2 font-medium">
                              {hotel.hotelSpecial}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="p-4 pt-0">
                        <a
                          href={hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで宿泊プラン・空室を見る
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 47都道府県トップへのリンク */}
      <div className="text-center pt-8">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
`;
}

for (const cfg of wave7Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated seasonal hub page: /${cfg.slug}`);
}
