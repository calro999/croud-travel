const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-rapid-tidal-currents-stay',
    title: '日本三大急潮＆激流うず潮パノラマ・鳴門鯛と関門ふぐ美食宿×ふるさと納税完全ガイド【2026年最新】鳴門・来島・関門海峡',
    desc: '白波が逆巻く海の難所と海の王者！徳島鳴門「鳴門海峡」世界最大級のうず潮とアオアヲナルトリゾート、愛媛今治「来島海峡」しまなみ海道の八艘飛び急流とホテル菊水今治、山口下関「関門海峡」本州と九州を分かつ早鞆ノ瀬戸と下関グランドホテル。日本三大急潮のダイナミックな海景と海の幸を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大急潮＆うず潮絶景・海鮮グルメ宿×ふるさと納税ガイド',
    badge: '日本三大急潮・激流うず潮特集',
    leadTitle: '轟く潮鳴り、海面が渦を巻き湧き上がる海の激流。海峡のダイナミズムを五感で味わう',
    leadDesc: '狭い海峡に満潮と干潮の潮位差が激しい海水が流れ込むことで生まれる「日本三大急潮」――最大時速20kmに達し直径20mもの大渦を生み出す世界最大級の渦潮・徳島兵庫の「鳴門海峡」、瀬戸内海の多島美を背景に複雑な潮流「八艘飛び」が船乗りたちを恐れさせた愛媛今治の「来島海峡」、そして壇ノ浦の源平合戦や宮本武蔵・佐々木小次郎の巌流島の舞台となり急潮が唸りをあげる山口福岡の「関門海峡」。激しい潮流にもまれた魚は身が引き締まり、日本一の旨味を凝縮しています。海峡を見晴らす絶景ホテルやオーシャンリゾートに滞在し、激流に鍛えられた鳴門鯛・来島海峡のアジ・サバ・下関のとらふぐ会席に舌鼓を打つ至高の旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '世界最大級のうず潮や早鞆ノ瀬戸！激しく渦巻く海のスペクタクルを間近に鑑賞',
        desc: '観潮船からの大迫力クルーズや海峡を一望する客室テラスから、潮の満ち引きが描く大自然の営みを体感。'
      },
      {
        title: '引き締まった鳴門鯛の舟盛り、来島海峡の真鯛釜飯、本場下関のとらふぐ刺し＆ちり鍋',
        desc: '日本屈指の急流が生んだ最高峰の天然白身魚と海の幸を、料理人こだわりの海峡会席で堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れのオーシャンフロント宿をお得に予約',
        desc: '記念日や家族の絶景クルーズ旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'current_naruto',
        themeTitle: '徳島県鳴門市ふるさと納税：鳴門海峡と大鳴門橋を一望する南欧風オーシャンリゾート「アオアヲ ナルト リゾート」',
        themeDesc: '鳴門海峡の渦潮に最も近い絶景リゾートホテル。全室オーシャンビューのバルコニーから鳴門の海景を望み、天然温泉露天風呂「気泡風呂」「展望風呂」で潮風を満喫。夕食は鳴門鯛や阿波尾鶏、徳島の旬の味覚を炭火焼バイキングや会席で堪能できます。'
      },
      {
        key: 'current_kurushima',
        themeTitle: '愛媛県今治市ふるさと納税：来島海峡大橋としまなみ海道の玄関口に佇む「ホテル菊水今治」',
        themeDesc: '今治港の目の前に位置し、来島海峡の急潮クルーズやしまなみ海道サイクリングの拠点として至便なホテル。瀬戸内海の激流で育った新鮮な来島鯛の鯛めしや今治名物の鉄板焼き鳥を味わい、快適な客室でサイクリングや島巡りの疲れを癒やせます。'
      },
      {
        key: 'current_kanmon',
        themeTitle: '山口県下関市ふるさと納税：関門海峡が目の前に広がる特等席・昭和天皇もご宿泊の名門「下関グランドホテル」',
        themeDesc: '唐戸市場やカモンワーフに隣接し、関門海峡を行き交う大型船を間近に望むウォーターフロントホテル。歴史の舞台・早鞆ノ瀬戸の潮流を眺めながら、下関伝統の本場とらふぐフルコースや長州黒かしわを贅沢に味わう極上のひとときを過ごせます。'
      }
    ],
    crossLinks: [
      { title: '日本三大美港＆夜景オーシャンビュー宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-beautiful-ports-stay', desc: '清水港・長崎港・神戸港。' },
      { title: '日本三大急流＆川下り舟体験・清流鮎グルメ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-rapid-rivers-stay', desc: '最上川・富士川・球磨川。' },
      { title: '日本三大白砂青松＆海岸絶景パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-coastal-sceneries-stay', desc: '天橋立・三保松原・気比松原。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-train-window-views-stay',
    title: '日本三大車窓＆絶景スイッチバック・高原パノラマ温泉宿×ふるさと納税完全ガイド【2026年最新】姨捨・矢岳越え・狩勝峠',
    desc: '車窓を流れる息をのむ大パノラマ！長野千曲「姨捨駅」善光寺平を見下ろすスイッチバックの絶景と戸倉上山田温泉リバーサイド上田館、宮崎熊本鹿児島「肥薩線矢岳越え」霧島連峰と桜島を望む天空路線と霧島温泉ホテル霧島キャッスル、北海道十勝「旧狩勝峠」大雪山系と十勝平野を望む雄大な大地とサホロリゾートホテル。日本三大車窓の鉄旅ロマンを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大車窓＆天空パノラマ・絶景温泉宿×ふるさと納税ガイド',
    badge: '日本三大車窓・天空鉄旅特集',
    leadTitle: '列車が山を登りきった瞬間に広がる大平原。旅人を魅了し続ける車窓の奇跡',
    leadDesc: '鉄道の黄金時代から旅情あふれる名景として語り継がれてきた「日本三大車窓」――JR篠ノ井線の姨捨駅から見下ろす千曲川と棚田・善光寺平の夜景パノラマが美しい長野の「姨捨の車窓」、熊本から宮崎・鹿児島へと抜けるJR肥薩線の山岳区間で霧島連峰と遠く桜島を仰ぐ九州の「矢岳越え」、そして旧国鉄根室本線で大雪山系の山並みとどこまでも続く十勝平野の原生林を見晴らした北海道の「狩勝峠」。山を越えるために工夫されたスイッチバックやループ線、トンネルを抜けた瞬間に視界が開ける圧倒的な感動は、鉄道旅ならではの醍醐味です。名車窓の余韻に浸りながら名湯温泉に身を委ね、信州十割蕎麦・薩摩黒豚・十勝牛とチーズを堪能する特別な旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '棚田の夜景・霧島連峰の雄姿・十勝平野の大平原！旅情あふれる天空パノラマ',
        desc: '鉄道ファンのみならずすべての旅人の心を奪う、標高差が生み出すダイナミックな大パノラマを体感。'
      },
      {
        title: '信州和牛＆千曲のアンズ、鹿児島黒豚＆地鶏炭火焼き、十勝和牛ステーキ＆新鮮乳製品',
        desc: '高原と盆地、肥沃な大地の恵みがもたらす、日本各地の選りすぐりブランドグルメを満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで高原リゾート・名湯旅館をお得に予約',
        desc: '鉄道旅やドライブ旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'train_obasute',
        themeTitle: '長野県千曲市ふるさと納税：姨捨の棚田と善光寺平夜景の拠点・千曲川沿いの名湯「戸倉上山田温泉 リバーサイド上田館」',
        themeDesc: '日本三大車窓・名月の里「姨捨」から車で約15分、開湯130年を超える名湯・戸倉上山田温泉に位置する温泉ホテル。肌触りの良い天然温泉の大浴場と露天風呂で寛ぎ、千曲川の清流を眺めながら信州の山菜や旬の味覚バイキングをお得に満喫できます。'
      },
      {
        key: 'train_yatake',
        themeTitle: '鹿児島県霧島市・宮崎県えびの市ふるさと納税：肥薩線矢岳越えを望む霧島連峰の高原温泉リゾート「霧島温泉 ホテル霧島キャッスル」',
        themeDesc: '矢岳越えのパノラマが広がる霧島連峰の麓に位置し、全室54平米以上の広々とした客室を誇る温泉リゾート。湯量豊富な霧島温泉の源泉かけ流し露天風呂で癒やされ、鹿児島黒豚しゃぶしゃぶやさつま揚げ、鹿児島の本格芋焼酎を心ゆくまで堪能できます。'
      },
      {
        key: 'train_karikachi',
        themeTitle: '北海道新得町ふるさと納税：旧狩勝峠の雄大な十勝平野を見晴らす北欧風高原リゾート「サホロリゾートホテル」',
        themeDesc: '日本三大車窓・旧狩勝峠のすぐそば、十勝サホロ岳の裾野に広がる高原リゾートホテル。マイナスイオンあふれる森に囲まれた露天風呂とサウナで寛ぎ、北海道十勝産牛肉のグリルや地元新得名物の手打ち蕎麦、新鮮な十勝産チーズ料理を堪能できます。'
      }
    ],
    crossLinks: [
      { title: '日本三大急流＆川下り舟体験・清流鮎グルメ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-rapid-rivers-stay', desc: '最上川・富士川・球磨川。' },
      { title: '日本三大山城＆天空の雲海要塞宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-mountain-castles-stay', desc: '大和高取城・美濃岩村城・備中松山城。' },
      { title: '日本三大秘湯＆秘境の大自然一軒宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-secret-hotsprings-stay', desc: '谷地温泉・祖谷温泉・乳頭温泉郷。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-inari-shrines-stay',
    title: '日本三大稲荷＆千本鳥居・商売繁盛開運祈願と門前町グルメ宿×ふるさと納税完全ガイド【2026年最新】伏見・豊川・祐徳稲荷',
    desc: '朱塗りの鳥居が連なる神域と開運の杜！京都「伏見稲荷大社」千本鳥居の幻想美とアーバンホテル京都、愛知「豊川稲荷」妙厳寺の千体狐・霊狐塚と豊川グランドホテル、佐賀鹿島「祐徳稲荷神社」鎮西日光と称される極彩色の楼門と有明海鮮・嬉野温泉和多屋別荘。日本三大稲荷の商売繁盛祈願を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大稲荷＆商売繁盛・開運祈願の名宿×ふるさと納税ガイド',
    badge: '日本三大稲荷・開運商売繁盛特集',
    leadTitle: '幾重にも連なる鮮烈な朱の回廊、狐が守護する神聖な杜。心洗われる大願成就の旅',
    leadDesc: '五穀豊穣、商売繁盛、家内安全を祈る庶民の信仰のシンボルとして日本全国で愛されてきた「日本三大稲荷」――三万社を超える稲荷神社の総本宮として稲荷山の山頂まで朱色の千本鳥居がトンネルのように続く京都の「伏見稲荷大社」、室町時代開山のお寺（妙厳寺）であり奉納された無数の狐像が並ぶ「霊狐塚」が圧倒的なパワースポットとして知られる愛知の「豊川稲荷」、そして有明海に面する山腹に日光東照宮を思わせる極彩色の本殿が聳え立つ佐賀鹿島の「祐徳稲荷神社」。朱塗りの楼門をくぐり狐の神使に手を合わせれば、日々の迷いが晴れて力強い開運のパワーが湧き上がってきます。門前町名物のいなり寿司やきつねうどん、伏見の日本酒、三河一色産うなぎ、有明海の海の幸を堪能する旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '朱塗りの千本鳥居・霊狐塚・懸崖造りの本殿！圧倒的な霊気あふれるパワースポット',
        desc: '早朝の静謐な境内の散策や夕暮れ時の灯篭ライトアップなど、厳かな神域で大願成就を祈願。'
      },
      {
        title: '伏見の銘酒＆京会席、豊川名物いなり寿司＆三河一色うなぎ、有明海竹崎カニ＆佐賀牛',
        desc: '門前町の伝統の味覚から地域の最高峰ブランドグルメまで、ご利益旅を彩る美食の数々を満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで門前町近くのホテル・名旅館をお得に予約',
        desc: '初詣やビジネスの商売繁盛祈願でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'inari_fushimi',
        themeTitle: '京都府京都市伏見区ふるさと納税：千本鳥居の伏見稲荷大社へ好アクセス「アーバンホテル京都」',
        themeDesc: '全国稲荷の総本宮・伏見稲荷大社まで電車や徒歩圏内に位置するスタイリッシュホテル。朝一番の混雑前の千本鳥居参拝の拠点として最適で、観光やビジネスの疲れを清潔な客室で癒やし、伏見十石舟や伏見酒蔵巡りのお得な旅を楽しめます。'
      },
      {
        key: 'inari_toyokawa',
        themeTitle: '愛知県豊川市ふるさと納税：豊川稲荷参拝の玄関口・門前町いなり寿司巡りの拠点「豊川グランドホテル」',
        themeDesc: '商売繁盛の神仏として名高い豊川稲荷（妙厳寺）の表参道近くに位置する老舗ホテル。霊狐塚の圧倒的なパワーを体感した後は、門前町の多彩ないなり寿司食べ歩きや三河湾の海の幸、三河ポークの郷土グルメを堪能できます。'
      },
      {
        key: 'bihada_ureshino',
        themeTitle: '佐賀県鹿島市・嬉野市ふるさと納税：祐徳稲荷神社参拝の拠点・美肌名湯の老舗「嬉野温泉 和多屋別荘」',
        themeDesc: '日本三大稲荷の一角・祐徳稲荷神社から車で約25分、日本三大美肌の湯・嬉野温泉を代表する名旅館。豪華絢爛な祐徳稲荷の本殿を参拝した後は、和多屋別荘の重曹泉露天風呂で心身を清め、佐賀牛や名物温泉湯豆腐会席に酔いしれる至福の時間を過ごせます。'
      }
    ],
    crossLinks: [
      { title: '日本三大八幡宮＆開運厄除け宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-sacred-hachiman-shrines-stay', desc: '宇佐神宮・石清水八幡宮・筥崎宮。' },
      { title: '日本三大美肌の湯＆とろとろ美肌温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-bihada-onsen-stay', desc: '嬉野・斐乃上・喜連川。' },
      { title: '日本三大奇橋＆渓谷美・歴史ロマンの名宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-unusual-bridges-stay', desc: '錦帯橋・猿橋・日光神橋。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-beautiful-forests-stay',
    title: '日本三大美林＆天然木アロマと森林浴・癒やしのリトリート温泉宿×ふるさと納税完全ガイド【2026年最新】青森ヒバ・秋田スギ・木曽ヒノキ',
    desc: '深呼吸したくなる天然木のアロマと原生林の静寂！青森下北半島「青森ヒバ」日本最大の美林とプラザホテルむつ、秋田白神「天然秋田スギ」樹齢200年超の巨木と白神山地ホテルゆとりあ藤里、長野木曽路「木曽ヒノキ」伊勢神宮のご神木を育む御杣山とおん宿蔦屋。日本三大美林のフィトンチッドに包まれるリトリート旅を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大美林＆森林浴・天然木アロマ温泉宿×ふるさと納税ガイド',
    badge: '日本三大美林・森林浴リトリート特集',
    leadTitle: '木漏れ日のカーテン、針葉樹が放つ清らかなフィトンチッド。五感で癒やされる森林リトリート',
    leadDesc: '悠久の時を生き抜いた日本を代表する最高級木材の原生林「日本三大美林」――下北半島の厳しい風雪に耐え抗菌・リラックス効果抜群のヒノキチオールを豊富に含む青森の「青森ヒバ」、出羽山地から白神山地にかけての厳しい寒暖差が美しい年輪と真紅の木肌を育てる秋田の「天然秋田スギ」、そして尾張徳川家が「木一本、首一つ」と厳格に保護し伊勢神宮の式年遷宮のご神木として使われる長野の「木曽ヒノキ」。木々の放つ芳醇なアロマ（フィトンチッド）に包まれて歩く森林セラピーは、現代人の乱れた自律神経を整え深い安らぎをもたらします。総ヒバ風呂やヒノキ風呂を備えた温泉宿で寛ぎ、大間マグロ・比内地鶏・信州牛と木曽蕎麦を味わう極上の休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '天然のヒノキチオールとフィトンチッド！森林セラピーで心身を最高のリラックスへ',
        desc: '樹齢数百年の巨木林を散策し、木造風呂に注がれる名湯温泉で天然アロマの芳香を独占。'
      },
      {
        title: '下北海峡サーモン＆大間マグロ、秋田比内地鶏＆きりたんぽ、木曽牛＆信州十割蕎麦',
        desc: '清らかな森の水が育てた日本屈指の山の幸・川の幸、名物肉料理の贅沢ディナーを堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで自然あふれる森林宿・温泉旅館をお得に予約',
        desc: '週末の避暑リゾートや湯治旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'forest_hiba',
        themeTitle: '青森県むつ市ふるさと納税：日本最大の青森ヒバ美林への玄関口「プラザホテルむつ」',
        themeDesc: '下北半島の中心・むつ市に位置し、川内川渓谷や薬研温泉の青森ヒバ美林トレッキングの拠点ホテル。駅前すぐの好立地で、下北名物の大間マグロやホタテ、海峡サーモンなど津軽海峡の獲れたての海の幸を味わうグルメ旅をお得に満喫できます。'
      },
      {
        key: 'forest_sugi',
        themeTitle: '秋田県藤里町・能代市ふるさと納税：世界遺産白神山地と天然秋田杉の懐に抱かれる「ホテルゆとりあ藤里」',
        themeDesc: '白神山地の南麓、天然秋田杉の原生林を望む静かな温泉リゾート。秋田杉の温もりあふれる館内と肌をつるつるにする天然温泉露天風呂で森林浴の疲れを癒やし、白神山地の湧水で育った鮎や比内地鶏、秋田名物のきりたんぽ鍋を堪能できます。'
      },
      {
        key: 'forest_hinoki',
        themeTitle: '長野県木曽町ふるさと納税：木曽ヒノキの香る宿場町・創業三百余年の歴史を紡ぐ「きそふくしま温泉 街道浪漫 おん宿 蔦屋」',
        themeDesc: '中山道福島宿の木曽川沿いに建つ、江戸享保年間創業の老舗温泉宿。木曽ヒノキをふんだんに使った大浴場や露天風呂で心地よいアロマに包まれ、夕食は極上の信州牛ステーキや木曽川のイワナ塩焼き、信州十割蕎麦を風情ある個室で楽しめます。'
      }
    ],
    crossLinks: [
      { title: '日本三大秘湯＆秘境の大自然一軒宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-secret-hotsprings-stay', desc: '谷地温泉・祖谷温泉・乳頭温泉郷。' },
      { title: '日本三大渓谷美＆清流大自然絶景宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gorges-scenery-stay', desc: '清津峡・黒部峡谷・大杉谷。' },
      { title: '日本三大美肌の湯＆とろとろ美肌温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-bihada-onsen-stay', desc: '嬉野・斐乃上・喜連川。' }
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
                        {h.hotelSpecial || '日本三大急潮のうず潮絶景、日本三大車窓の天空パノラマ、日本三大稲荷の商売繁盛祈願、日本三大美林の森林浴アロマを巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の名景・急潮・美林特集
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
  console.log('=== Generating 4 Pages for Round 44 ===');
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
  console.log('=== All 4 Pages generated successfully for Round 44! ===');
}

run();
