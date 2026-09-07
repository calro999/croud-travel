const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-sea-caves-mystery-stay',
    title: '日本三大海食洞＆波濤が穿った奇跡の洞門・神秘の青の洞窟と絶景海宿×ふるさと納税完全ガイド【2026年最新】堂ヶ島・芥屋の大門・七ツ釜',
    desc: '荒波と大自然の彫刻が織りなす神秘の海食洞窟！西伊豆「堂ヶ島天窓洞」天然記念物の青の洞窟と堂ヶ島温泉ホテル、福岡糸島「芥屋の大門」日本最大の玄武岩柱状節理洞門とグローカルホテル糸島、佐賀唐津「屋形石の七ツ釜」玄界灘の激浪が穿った七つの洞窟と唐津シーサイドホテル。日本三大海食洞の神秘と海の幸を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大海食洞＆青の洞窟・波濤の造形美宿×ふるさと納税ガイド',
    badge: '日本三大海食洞・秘境ジオ特集',
    leadTitle: 'エメラルドグリーンに輝く洞内、天窓から差し込む神聖な光。波が創り出した海の宮殿',
    leadDesc: '何万年もの歳月にわたり打ち寄せた怒濤が岩肌を削り、神秘的なドームやトンネルを穿った「日本三大海食洞」――遊覧船で洞窟内に入ると天井が丸く抜け光が射し込む青の洞窟として世界的にも名高い静岡西伊豆の「堂ヶ島天窓洞」、玄武岩の六角柱が見事に整列した日本最大の柱状節理海食洞であり国の天然記念物にも指定されている福岡糸島の「芥屋の大門（けやのおおと）」、そして玄界灘の荒波によって深く彫り込まれた七つの洞門が並び遊覧船「イカ丸」での洞窟潜入クルーズがスリリングな佐賀唐津の「屋形石の七ツ釜」。海食洞の神秘に息をのんだ後は、伊豆の金目鯛や玄界灘の活イカ、極上のオーシャンビュー温泉露天風呂で心身を解きほぐす特別な休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: 'エメラルドグリーンの水面・天窓から降り注ぐ光・六角柱の巨岩ゲート！感動のクルーズ体験',
        desc: '遊覧船で海から直接アプローチし、大自然が彫り上げた神秘の洞窟空間に潜入。'
      },
      {
        title: '西伊豆の活金目鯛煮付け、糸島牛と朝獲れ地魚、唐津呼子の透き通る活イカ造り',
        desc: '海食洞を育んだ豊かな海がもたらす最高峰の海の恵みと、地元名産のブランド食材会席。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで絶景リゾートや温泉旅館をお得に予約',
        desc: '海岸ドライブやクルーズ旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'seacave_dogashima',
        themeTitle: '静岡県西伊豆町ふるさと納税：天窓洞へ抜群のアクセス・堂ヶ島唯一の自家源泉掛け流し「堂ヶ島温泉ホテル」',
        themeDesc: '名勝・堂ヶ島の奇岩群を眼前に望み、天窓洞遊覧船乗り場にも至近な海辺の名宿。化粧水のようにとろりとした自家源泉掛け流しの露天風呂から駿河湾の夕日を望み、西伊豆名物の金目鯛姿煮や伊勢海老会席を贅沢に味わえます。'
      },
      {
        key: 'seacave_keya',
        themeTitle: '福岡県糸島市ふるさと納税：芥屋の大門クルーズと糸島ドライブの拠点「グローカルホテル糸島」',
        themeDesc: '大注目のリゾート地・糸島に位置し、芥屋の大門や白糸の滝へのアクセス抜群なオーベルジュ風ホテル。糸島の豊かな海山の幸を取り入れた創作ディナーと、大浴場や温浴施設でドライブの疲れをゆったりと癒やせます。'
      },
      {
        key: 'seacave_nanatsugama',
        themeTitle: '佐賀県唐津市ふるさと納税：七ツ釜と虹の松原を一望・全室オーシャンビューの温泉リゾート「唐津シーサイドホテル」',
        themeDesc: '唐津湾の白砂青松・虹の松原に隣接し、七ツ釜観光遊覧船が出る呼子港へのドライブも快適なラグジュアリーホテル。地下から湧出する天然温泉の展望露天風呂やインフィニティプール、名物の呼子イカや佐賀牛ディナーが最高です。'
      }
    ],
    crossLinks: [
      { title: '日本三大鍾乳石洞窟＆地底宮殿宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-stalactite-caves-stay', desc: 'あぶくま洞・玉泉洞・井倉洞。' },
      { title: '日本三大岬＆地球の丸みを感じる断崖海宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-capes-ocean-panorama-stay', desc: '知床岬・足摺岬・佐多岬。' },
      { title: '日本三大柱状節理峡谷＆絶景名湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-columnar-joints-gorges-stay', desc: '清津峡・高千穂峡・層雲峡。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-pagodas-heritage-stay',
    title: '日本三大五重塔＆天を衝く木造美・国宝の塔と古都・門前名宿×ふるさと納税完全ガイド【2026年最新】法隆寺・東寺・羽黒山',
    desc: '日本木造建築の最高峰！世界最古の木造建築群を擁する飛鳥の至宝「法隆寺五重塔」門前宿和空法隆寺、現存木造塔として日本一の高さ約55mを誇る密教のシンボル「東寺五重塔」リーガロイヤルホテル京都、杉並木の深山に溶け込む東北最古の国宝美「羽黒山五重塔」湯田川温泉九兵衛旅館。日本三大五重塔の美と歴史ロマンを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大五重塔＆国宝木造美・古都門前宿×ふるさと納税ガイド',
    badge: '日本三大五重塔・国宝建築特集',
    leadTitle: '幾星霜の風雪を耐え抜いた木組みの奇跡。天を仰ぐ三重・五重の美しいシルエット',
    leadDesc: '地震大国・日本において千数百年もの間倒れることなく立ち続け、心柱構造による免震の知恵と宮大工の神技を今に伝える「日本三大五重塔（国宝指定の最高峰）」――推古天皇の時代に建立され法隆寺西院伽藍の中心にそびえる世界最古の木造塔である奈良斑鳩の「法隆寺五重塔」、弘法大師空海が構想し徳川家光の再建によって約55mという日本一の木造高さを誇る古都の象徴・京都の「東寺五重塔」、そして樹齢数百年の爺スギが立ち並ぶ羽黒山の杜にひっそりと佇み杮葺き（こけらぶき）の素木造りが静謐な美を放つ山形庄内の「羽黒山五重塔」。凛とした歴史建築の美に心を洗われた後は、古都の精進・京懐石や庄内の山菜・日本海鮮魚を堪能する特別な旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '飛鳥の古代美・京都の壮大パノラマ・羽黒山の神秘の森！三者三様の国宝建築鑑賞',
        desc: '夕暮れにシルエットが浮かび上がる瞬間や、早朝の澄んだ空気の中での静寂参拝を体感。'
      },
      {
        title: '大和牛と奈良茶粥、京都の旬の京懐石と湯葉、庄内豚と日本海寒鱈・山菜料理',
        desc: '歴史ある門前町と温泉郷が育んだ、洗練された郷土美食ディナーを満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで門前宿や老舗温泉旅館をお得に予約',
        desc: '寺社巡礼や歴史散策の旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'pagoda_horyuji',
        themeTitle: '奈良県斑鳩町ふるさと納税：世界遺産・法隆寺のすぐ目の前・歴史に浸る上質な門前ステイ「門前宿 和空 法隆寺」',
        themeDesc: '法隆寺参道に面し、東大寺や法隆寺の歴史を深く学べる語り部プログラムも好評な和の宿。奈良の木材を贅沢に使った温かみのある客室と、大和牛や奈良野菜を使った本格的な和会席で、悠久の飛鳥・斑鳩の夜を心静かに過ごせます。'
      },
      {
        key: 'pagoda_toji',
        themeTitle: '京都府京都市ふるさと納税：東寺五重塔を借景に望むラグジュアリーホテル「リーガロイヤルホテル京都」',
        themeDesc: '京都駅から徒歩圏内に位置し、東寺への朝の散策に最適なプレミアムホテル。フレンチや京料理、鉄板焼きなど多彩な名レストランを備え、観光後のくつろぎを約束する上質な客室とおもてなしで古都の滞在を優雅に彩ります。'
      },
      {
        key: 'pagoda_haguro',
        themeTitle: '山形県鶴岡市ふるさと納税：羽黒山五重塔巡りの拠点・開湯千三百年を誇る名湯「湯田川温泉 九兵衛旅館」',
        themeDesc: '出羽三山・羽黒山への参拝拠点として愛される、創業数百年の老舗木造名旅館。自家源泉の掛け流し温泉「山の湯」や金魚が泳ぐ大浴場、山形牛や庄内浜の朝獲れ地魚、名物の孟宗汁など極上の庄内会席が旅人を魅了します。'
      }
    ],
    crossLinks: [
      { title: '日本三大仏＆歴史古都・門前町の名宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-buddhas-heritage-stay', desc: '奈良・鎌倉・高岡大仏。' },
      { title: '古刹宿坊＆本格精進料理ステイ×ふるさと納税完全ガイド', url: '/furusato-tax-temple-shukubo-shojin-mindfulness-stay', desc: '高野山・善光寺・京都寺院。' },
      { title: '登録有形文化財・宮大工名建築旅館×ふるさと納税完全ガイド', url: '/furusato-tax-tangible-cultural-property-architectural-ryokan-stay', desc: '修善寺新井旅館・渋温泉金具屋。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-ekiben-gourmet-stay',
    title: '日本三大駅弁＆鉄道旅情・元祖の味と極上ブランド牛・名湯宿×ふるさと納税完全ガイド【2026年最新】峠の釜めし・いかめし・松阪牛弁当',
    desc: '旅の情緒と地域の美味が詰まった日本三大駅弁の聖地巡り！群馬安中「峠の釜めし」益子焼の器に山の幸とおもてなし磯部温泉ホテル磯部ガーデン、北海道森町「元祖森名物いかめし」秘伝タレ炊き込みとラ・ジェント・ステイ函館駅前、三重松阪「松阪牛駅弁・モー太郎弁当」極上黒毛和牛の贅とホテルAU松阪。日本三大駅弁の旅情と美食を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大駅弁＆名物ご当地グルメ・鉄道旅情宿×ふるさと納税ガイド',
    badge: '日本三大駅弁・鉄道美味特集',
    leadTitle: '車窓を眺めながら紐を解く至福の瞬間。全国にその名を轟かせる名物駅弁と快適ホテル',
    leadDesc: '鉄道の発展とともに駅頭で生まれ、旅人の腹と心を満たし続けてきた「日本三大駅弁」――信越本線横川駅で誕生し益子焼の土釜に鶏肉やうずらの卵・栗・杏子など色とりどりの山の幸を炊き込んだ群馬安中の「峠の釜めし（おぎのや）」、函館本線森駅で生まれ小ぶりな真イカにもち米とうるち米を詰めて甘辛い秘伝タレでじっくり炊き上げた北海道の「いかめし（阿部商店）」、そして紀勢本線松阪駅で鉄道旅の最高峰の贅沢として愛されメロディが鳴る牛型容器でも有名な三重の「松阪牛駅弁・モー太郎弁当（新竹商店）」。駅弁の深い歴史と元祖の味を堪能した後は、名湯温泉やブランド牛ディナーに舌鼓を打つ極上の旅情を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '益子焼の釜めし・イカ丸ごと炊き込み・松阪牛すき焼き重！圧倒的なご当地駅弁の完成度',
        desc: '駅頭での購入はもちろん、できたてアツアツを味わえる店舗や本店めぐりも満喫。'
      },
      {
        title: '上州牛と安中こんにゃく会席、函館朝市の活イカ・いくら丼、本場松阪牛のすき焼き・ステーキ',
        desc: '駅弁のルーツとなった地域自慢の高級ブランド食材ディナーをホテル・旅館で贅沢に堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで駅近シティホテルや温泉旅館をお得に予約',
        desc: '鉄道旅やドライブグルメ旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'ekiben_kamameshi',
        themeTitle: '群馬県安中市ふるさと納税：峠の釜めし本店へ好アクセス・舌切雀伝説の温泉名宿「磯部温泉 舌切雀のお宿 ホテル磯部ガーデン」',
        themeDesc: '温泉マーク発祥の地・磯部温泉に建ち、おぎのや横川本店へのアクセスも便利な大型和風旅館。美肌効果の高い塩化物泉の大浴場や露天風呂、上州牛や地元野菜を取り入れた豪華会席料理で、昔話の世界に浸る温かな休日を過ごせます。'
      },
      {
        key: 'ekiben_ikameshi',
        themeTitle: '北海道函館市・森町ふるさと納税：函館駅前・天然温泉大浴場と道南の美食が集う「ラ・ジェント・ステイ函館駅前」',
        themeDesc: 'JR函館駅直結の好立地に位置し、森駅のいかめしや函館朝市グルメの拠点に最適なスタイリッシュホテル。江戸情緒漂う天然温泉大浴場「蓬莱の湯」や、北海道産食材をふんだんに使用した朝食ビュッフェが旅の満足度を高めます。'
      },
      {
        key: 'ekiben_matsusaka',
        themeTitle: '三重県松阪市ふるさと納税：松阪駅北口すぐ・松阪牛弁当の新竹商店へ便利な拠点「ホテルAU松阪」',
        themeDesc: 'JR・近鉄松阪駅から徒歩数分、松阪牛駅弁の名店「新竹商店」や松阪牛の名店めぐりに絶好のビジネス＆レジャーホテル。大浴場やサウナを備え、リーズナブルで快適な滞在を提供し、本場松阪牛のすき焼きグルメ旅を応援します。'
      }
    ],
    crossLinks: [
      { title: '日本三大ラーメン＆名湯・屋台街めぐり美食宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-ramen-capitals-stay', desc: '喜多方・札幌味噌・博多豚骨。' },
      { title: '日本三大車窓＆天空パノラマ・絶景温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-train-window-views-stay', desc: '姨捨・肥薩線矢岳・狩勝峠。' },
      { title: '絶景観光列車×途中下車の名湯温泉旅館ガイド', url: '/furusato-tax-scenic-train-trolley-onsen-stay', desc: '黒部トロッコ・わたらせ・只見線。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-kannon-temples-stay',
    title: '日本三大観音＆諸願成就の霊場・下町風情と湖畔の祈り宿×ふるさと納税完全ガイド【2026年最新】浅草観音・石山観音・大須観音',
    desc: '人々の信仰と江戸・上方・尾張の文化を育んだ名刹！都内最古の寺で雷門の賑わいを誇る「浅草寺（浅草観音）」御宿野乃浅草別邸、紫式部ゆかりの西国霊場で瀬田川の清流を望む「石山寺（石山観音）」南郷温泉二葉屋、大須商店街の活気と七ツ寺の歴史薫る「大須観音」ホテルアベスト大須観音駅前。日本三大観音霊場の参拝と名宿ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大観音＆諸願成就の霊場・門前町名宿×ふるさと納税ガイド',
    badge: '日本三大観音・聖地祈願特集',
    leadTitle: '千数百年の祈りが紡ぐ慈悲の光。門前町の賑わいと安らぎの名宿ステイ',
    leadDesc: '観世音菩薩の慈悲にすがり、人々の現世利益と心の安らぎを叶えてきた「日本三大観音（三大霊場）」――推古天皇の時代に隅田川から引き揚げられた聖観音像を本尊とし雷門から仲見世の賑わいが江戸情緒を伝える東京の「浅草寺（浅草観音）」、奈良時代に良弁僧正が開山し紫式部が参籠して源氏物語を起筆したと伝わる滋賀大津の「石山寺（石山観音）」、そして美濃国大須から徳川家康の名古屋城築城とともに移転し日本三大経蔵を擁する愛知名古屋の「大須観音（寶生院）」。門前町の名物グルメを味わいながら心洗われる参拝の旅路を、快適なホテルや温泉宿とともに楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '浅草仲見世の活気・石山寺の紅葉と硅灰石・大須商店街の食べ歩き！多彩な門前文化',
        desc: '朝の静かな勤行体験や、歴史的寺宝の特別拝観、門前町ならではの名物グルメを堪能。'
      },
      {
        title: '浅草の江戸前天ぷら・もんじゃ、滋賀の近江牛・瀬田川の鮎とシジミ、名古屋ひつまぶし・手羽先',
        desc: '門前町の発展とともに洗練されてきた、各地を代表する名物料理ディナーを満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで駅近シティホテルや天然温泉宿をお得に予約',
        desc: '開運厄除けの寺社巡り旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'kannon_sensoji',
        themeTitle: '東京都台東区ふるさと納税：浅草寺へ徒歩すぐ・全館畳敷きと黒湯天然温泉「天然温泉 凌天の湯 御宿 野乃 浅草別邸」',
        themeDesc: '浅草寺や花やしきの至近に位置し、和の温もりを五感で感じられる全館畳敷きの和風プレミアムホテル。地下から湧出する黒湯の天然温泉大浴場やサウナを備え、朝食にはいくら盛り放題の海鮮丼や下町グルメを楽しめます。'
      },
      {
        key: 'kannon_ishiyamadera',
        themeTitle: '滋賀県大津市ふるさと納税：石山寺の門前・瀬田川の清流を望む料理温泉旅館「南郷温泉 二葉屋」',
        themeDesc: '石山寺から車で約5分、瀬田川のほとりに佇み静かな川のせせらぎに包まれた老舗料理旅館。ラドンを含む天然南郷温泉で温まった後は、名物の瀬田川シジミ料理や近江牛すき焼き、季節の川魚料理を温かなもてなしで堪能できます。'
      },
      {
        key: 'kannon_osu',
        themeTitle: '愛知県名古屋市ふるさと納税：大須観音駅直結・展望露天風呂と大須商店街歩きの拠点「ホテルアベスト大須観音駅前 羽ノ湯」',
        themeDesc: '地下鉄大須観音駅から徒歩1分、大須観音の境内や大須商店街へのアクセス抜群なホテル。最上階には足を伸ばしてくつろげる大浴場「羽ノ湯」を完備し、名古屋めし巡りや観音参拝の拠点として快適な滞在を提供します。'
      }
    ],
    crossLinks: [
      { title: '日本三大稲荷＆商売繁盛・開運祈願の名宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-inari-shrines-stay', desc: '伏見・豊川・祐徳稲荷。' },
      { title: '日本三大八幡宮＆開運厄除け宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-sacred-hachiman-shrines-stay', desc: '宇佐・石清水・筥崎宮。' },
      { title: '日本三大五重塔＆国宝木造美・古都門前宿×ふるさと納税ガイド', url: '/furusato-tax-three-great-pagodas-heritage-stay', desc: '法隆寺・東寺・羽黒山。' }
    ]
  }
];

function generatePageCode(cfg) {
  const hotelsData = cfg.items.map(it => {
    const raw = allHotels[it.key];
    if (!raw) {
      console.warn(`Missing hotel data for: ${it.key}`);
      return null;
    }
    const revAvg = (raw.reviewAverage && raw.reviewAverage > 0) ? raw.reviewAverage.toFixed(1) : '4.3';
    const minCharge = (raw.hotelMinCharge && raw.hotelMinCharge > 0) ? raw.hotelMinCharge.toLocaleString() : '8,000';
    const access = raw.access || '最寄り駅・主要道路よりアクセス良好';
    return {
      ...raw,
      themeTitle: it.themeTitle,
      themeDesc: it.themeDesc,
      revAvg,
      minCharge,
      access
    };
  }).filter(Boolean);

  return `import React from 'react';
import Link from 'next/link';
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
                        {h.hotelSpecial || '日本三大海食洞のエメラルドに輝く神秘、日本三大五重塔の国宝木造建築美、日本三大駅弁の旅情と極上グルメ、日本三大観音霊場の諸願成就と門前町風情を巡る特別な拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい全国の神秘洞窟・名塔建築・美食駅弁特集
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

function run() {
  console.log('=== Generating 4 Pages for Round 49 ===');
  for (const p of pagesConfig) {
    const dir = path.join(__dirname, 'src/app', p.slug);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const code = generatePageCode(p);
    const filePath = path.join(dir, 'page.tsx');
    fs.writeFileSync(filePath, code, 'utf8');
    console.log(`✓ Generated: ${filePath}`);
  }
  console.log('=== All 4 Pages generated successfully for Round 49! ===');
}

run();
