const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-tanabata-festivals-stay',
    title: '日本三大七夕まつり＆星空短冊のアーケード散策ホテル宿×ふるさと納税完全ガイド【2026年最新】仙台・平塚・一宮',
    desc: '夏の夜空に揺れる色鮮やかな和紙の笹飾り！宮城「仙台七夕まつり」伊達政宗公の伝統と天然温泉スーパーホテル仙台駅東口、神奈川「湘南ひらつか七夕まつり」関東屈指の電飾竹飾りとホテルリブマックス平塚駅前、愛知「一宮七夕まつり」織物の神への感謝とアパホテル尾張一宮駅前。日本三大七夕まつりのロマンチックな夏旅を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大七夕まつり＆星空短冊散策宿×ふるさと納税ガイド',
    badge: '日本三大七夕まつり・夏の星空特集',
    leadTitle: '風にそよぐ千羽鶴と巨大な和紙の吹き流し。短冊に願いを込めて歩く夏のアーケードステイ',
    leadDesc: '日本古来の星祭り信仰と職人たちの伝統工芸技術が融合し、夏の風物詩として全国から数百万人を魅了する「日本三大七夕まつり」――伊達政宗公の時代から受け継がれ、豪華絢爛な手作りの和紙くす玉や吹き流しが商店街を覆い尽くす宮城の「仙台七夕まつり」、巨大な電飾仕掛けの竹飾りが昼夜を問わず華やかにきらめく神奈川湘南の「湘南ひらつか七夕まつり」、そして日本有数の繊維の街として織物の神・萬幡豊秋津師比売命に感謝を捧げる愛知の「一宮七夕まつり」。色彩豊かな笹飾りのトンネルをくぐり抜け、ご当地屋台グルメや銘菓を買い食いする時間は、まさに日本の夏の原風景。駅前ホテルや温泉宿を拠点に、夜桜ならぬ「夜七夕」のライトアップを満喫する特別な休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '七夕通りまで徒歩すぐ！混雑を気にせず昼夜の飾り付けを完全制覇',
        desc: '昼の風情と夜のライトアップの両方を満喫し、疲れたらすぐに客室でひと休みできる駅前好立地。'
      },
      {
        title: '仙台牛・厚切り牛たん、湘南しらす、名古屋コーチンなど名物ディナー',
        desc: '祭り散策の後は、各都市を代表するブランドグルメと地酒のペアリングを贅沢に堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンでハイシーズンの宿泊費をスマートに節約',
        desc: '予約が混み合う七夕まつり期間でも、寄付額に応じた即時割引で実質2,000円負担で快適宿泊。'
      }
    ],
    items: [
      {
        key: 'tanabata_sendai',
        themeTitle: '宮城県仙台市青葉区ふるさと納税：豪華絢爛な和紙の笹飾り「仙台七夕まつり」と天然温泉スーパーホテル仙台駅東口',
        themeDesc: '200万人以上が訪れる東北の夏の風物詩。五色短冊や紙衣が揺れるアーケードを散策した後は、仙台駅徒歩圏の「スーパーホテル仙台駅東口」で、美肌の天然温泉大浴場と名物牛たん・地酒を味わい旅の疲れを癒やします。'
      },
      {
        key: 'tanabata_hiratsuka',
        themeTitle: '神奈川県平塚市ふるさと納税：躍動感あふれる光と大型竹飾り「湘南ひらつか七夕まつり」とホテルリブマックス平塚駅前',
        themeDesc: '中心街に約500本の大型飾りが連なる湘南の夏祭り。夜の電飾ライトアップを楽しんだ後は、平塚駅北口至近の快適ホテルを拠点に、相模湾の獲れたて生しらす丼や湘南地ビールを心ゆくまで満喫します。'
      },
      {
        key: 'tanabata_ichinomiya',
        themeTitle: '愛知県一宮市ふるさと納税：織物の神に捧げる色鮮やかな吹き流し「一宮七夕まつり」とアパホテル尾張一宮駅前',
        themeDesc: '真清田神社の門前町を華やかに彩る一宮七夕。パレードや盆踊りの熱気に触れた後は、一宮駅直結至近の「アパホテル尾張一宮駅前」で、名物ひつまぶしや手羽先、愛知の郷土料理と地酒に舌鼓を打ちます。'
      }
    ],
    crossLinks: [
      { title: '日本三大盆踊り＆伝統文化・城下町宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-bon-dances-heritage-stay', desc: '西馬音内・郡上おどり・阿波おどり。' },
      { title: '日本三大花火大会＆リバーサイド展望宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-fireworks-riverside-stay', desc: '長岡・大曲・土浦。' },
      { title: '日本三大火祭り＆燃え盛る情熱伝統宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-fire-festivals-passion-stay', desc: '那智・野沢温泉・鞍馬。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-precipitous-coasts-stay',
    title: '日本三大名勝海岸＆断崖絶壁ジオパーク・絶叫パノラマ温泉宿×ふるさと納税完全ガイド【2026年最新】北山崎・東尋坊・足摺岬',
    desc: '荒波が削り出した地球のダイナミズム！岩手「北山崎」高さ200mの海のアルプスと全室オーシャンビューホテル羅賀荘、福井「東尋坊」国の天然記念物柱状節理と三国温泉三国オーシャンリゾート＆ホテル、高知「足摺岬」黒潮打ち寄せる四国最南端の絶壁と足摺サニーサイドホテル。日本三大名勝海岸（三大断崖海岸）の絶叫絶景ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大名勝断崖海岸＆パノラマ海宿×ふるさと納税ガイド',
    badge: '日本三大断崖海岸・ジオパーク特集',
    leadTitle: '足元に砕け散る白波と見渡す限りの水平線。地球の雄大な鼓動を体感する断崖リゾート',
    leadDesc: '日本列島を取り巻く外海の荒波と風雨が数百万年の歳月をかけて岩盤を削り出し、息をのむような断崖絶壁の景観美を創り出した「日本三大名勝海岸（三大断崖・奇岩海岸）」――高さ200mもの大絶壁が約8kmにわたって連なり「海のアルプス」と称賛される三陸復興国立公園・岩手の「北山崎」、輝石安山岩の巨大な五角形・六角形の柱状節理が海にそそり立つ世界三大奇勝の一つ・福井の「東尋坊」、そして黒潮打ち寄せる四国最南端に位置し270度の大パノラマで地球の丸さを実感できる高知の「足摺岬」。展望台から見下ろす吸い込まれそうな海景と、海鳥たちが飛び交う雄大な自然美は圧巻。断崖を望む温泉露天風呂に浸かり、名産のウニ・アワビ・越前ガニ・戻り鰹を味わう至高の旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '客室や露天風呂から水平線と断崖を一望！大迫力のオーシャンフロント',
        desc: '部屋にいながらにして打ち寄せる荒波と夕暮れのマジックアワーをパノラマで満喫。'
      },
      {
        title: '三陸あわび・越前ズワイガニ・土佐のカツオ塩たたき極上海鮮フルコース',
        desc: '日本屈指の豊かな漁場が育んだ獲れたてピチピチの旬の海の幸を贅沢に堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れの絶景オーシャンホテルをお得に予約',
        desc: '宿泊代金が即時割引され、実質負担2,000円で一生モノの絶景断崖ステイを実現。'
      }
    ],
    items: [
      {
        key: 'coast_kitayamazaki',
        themeTitle: '岩手県田野畑村ふるさと納税：高さ200mの海のアルプス「北山崎」大断崖パノラマと全室海側・ホテル羅賀荘',
        themeDesc: '日本交通公社全国観光資源評価「自然の部」最高ランク特A級の北山崎。サッパ船アドベンチャークルーズを楽しんだ後は、全室オーシャンビューの「ホテル羅賀荘」で、三陸のウニ・ホタテ・三陸アワビ会席に酔いしれます。'
      },
      {
        key: 'coast_tojinbo',
        themeTitle: '福井県坂井市三国町ふるさと納税：世界的三大奇勝の柱状節理「東尋坊」と三国オーシャンリゾート＆ホテル',
        themeDesc: '国の名勝・天然記念物に指定される東尋坊の巨岩美。遊覧船で海から断崖を見上げた後は、高台から日本海を見下ろす「三国オーシャンリゾート＆ホテル」で、東尋坊温泉の展望風呂と越前ガニ・若狭牛会席を堪能します。'
      },
      {
        key: 'coast_ashizuri',
        themeTitle: '高知県土佐清水市ふるさと納税：黒潮洗う四国最南端「足摺岬」地球が丸く見える展望台と足摺サニーサイドホテル',
        themeDesc: '紺碧の太平洋に突き出た足摺岬灯台。白山洞門や遊歩道を散策した後は、全室太平洋向きの「あしずり温泉郷 足摺サニーサイドホテル」で、名湯あしずり温泉露天風呂と土佐名物カツオの藁焼きタタキを満喫します。'
      }
    ],
    crossLinks: [
      { title: '絶景オーシャンフロント×波音ヒーリング宿ふるさと納税完全ガイド', url: '/furusato-tax-oceanfront-wave-sound-healing-stay', desc: '海を間近に感じる名宿。' },
      { title: '日本三大奇勝＆巨岩奇峰パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-wonders-rock-scenery-stay', desc: '妙義山・耶馬渓・寒霞渓。' },
      { title: '日本三大松原・海岸グランピング宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-coastal-pine-glamping-resort-stay', desc: '虹の松原・気比松原・三保松原。' }
    ]
  },
  {
    slug: 'furusato-tax-three-national-treasure-teahouses-stay',
    title: '国宝三大茶室＆本格茶道体験・数寄屋建築の極み名門旅館×ふるさと納税完全ガイド【2026年最新】待庵・如庵・密庵（忘筌）',
    desc: '侘び寂びの精神が極まる日本建築の最高峰！京都「妙喜庵・待庵」千利休唯一現存の国宝茶室とホテル京都エミナース、愛知「有楽苑・如庵」織田有楽斎の美学とホテルインディゴ犬山有楽苑、京都「嵐山・数寄屋名宿」小堀遠州の美意識と割烹旅館城山。国宝三大茶室の静謐な世界を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '国宝三大茶室＆数寄屋建築の名旅館宿×ふるさと納税ガイド',
    badge: '国宝三大茶室・数寄屋侘び寂び特集',
    leadTitle: '二畳の極小空間に広がる無限の宇宙。利休と有楽斎の美学を受け継ぐ数寄屋ステイ',
    leadDesc: '戦国武将たちが命を懸けた時代の最中に、心の平穏と究極の美意識を求めて極められた日本建築の宝庫「国宝三大茶室」――千利休が築き、わずか二畳の藁すさ壁の中に緊張感と侘びの真髄を凝縮した京都大山崎の「妙喜庵・待庵」、織田信長の実弟・織田有楽斎が武士の気品と自由な遊び心を込めて造営した愛知犬山の「有楽苑・如庵」、そして大徳寺龍光院に現存する密庵席や小堀遠州ゆかりの孤篷庵・忘筌。無駄を極限まで削ぎ落とした露地や躙口（にじりぐち）、床の間の掛け軸を愛でる時間は、忙しい日常でささくれ立った心を優しく整えてくれます。名門旅館の本格茶室でのお抹茶体験や、洗練された茶懐石・京料理を味わう優雅な旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '名工の技が息づく本格数寄屋造りの客室と静寂の日本庭園',
        desc: '障子を通した柔らかい光と畳の香り、手入れの行き届いた坪庭を眺める心静かな時間。'
      },
      {
        title: '旬の素材を五感で味わう本格茶懐石ディナーと薄茶のおもてなし',
        desc: '茶道の精神に基づき、季節の移ろいと器の美しさを愛でながら味わう至極の和会席。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れのラグジュアリー数寄屋宿をお得に',
        desc: 'ホテルインディゴ犬山有楽苑など国宝隣接の最新名門ホテルを、実質2,000円負担で予約可能。'
      }
    ],
    items: [
      {
        key: 'teahouse_taian',
        themeTitle: '京都府大山崎町ふるさと納税：千利休唯一現存の国宝茶室「妙喜庵・待庵」とホテル京都エミナース',
        themeDesc: '茶の湯の聖地・山崎の地。天王山やサントリー山崎蒸溜所を巡った後は、天然温泉「京都竹の郷温泉 万葉の湯」を備えるホテル京都エミナースで、二種類の自家源泉温泉と京都牛・京野菜会席に癒やされます。'
      },
      {
        key: 'teahouse_nyoan',
        themeTitle: '愛知県犬山市ふるさと納税：織田有楽斎の傑作・国宝茶室「如庵」隣接のホテルインディゴ犬山有楽苑',
        themeDesc: '国宝犬山城と有楽苑に抱かれたライフスタイルブティックホテル。如庵の美しい建築意匠をモチーフにしたスタイリッシュな空間で、犬山温泉「白帝の湯」と地元愛知・岐阜の旬菜フレンチを贅沢に堪能します。'
      },
      {
        key: 'teahouse_kyoto',
        themeTitle: '京都府京都市右京区嵐山ふるさと納税：小堀遠州の美意識息づく嵐山の風情と割烹旅館城山ステイ',
        themeDesc: '渡月橋のすぐそば、嵐山の自然に包まれる老舗「割烹旅館 城山」。静寂の日本庭園を愛でながら、料理長が毎朝市場で厳選する京地魚や湯豆腐、旬の京会席を味わう風雅な古都の休日です。'
      }
    ],
    crossLinks: [
      { title: '日本三大和紙の里＆工芸温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-washi-craft-heritage-stay', desc: '越前和紙・美濃和紙・小川和紙。' },
      { title: '日本三大名園＆大名庭園を愛でる名門宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gardens-heritage-luxury-stay', desc: '兼六園・後楽園・偕楽園。' },
      { title: '職人技が光る伝統工芸＆数寄屋大工の名旅館ふるさと納税完全ガイド', url: '/tangible-cultural-property-sukiya-carpenter-ryokan-stay', desc: '匠の技が息づく建築宿。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-famous-stones-gardens-stay',
    title: '日本三大銘石＆枯山水名庭園を彩る巨石美・名湯温泉宿×ふるさと納税完全ガイド【2026年最新】佐渡赤玉石・揖斐川石・鴨川真黒石',
    desc: '大自然の悠久の造形、日本庭園を格上げする奇跡の銘石！新潟「佐渡赤玉石」世界遺産佐渡金山と旅館かもめ荘、岐阜「揖斐川石」菊花石や水石の最高峰と養老温泉滝元館遊季の里、京都「鴨川真黒石」枯山水の侘び寂びと嵐山温泉彩四季の宿花筏。日本三大銘石が魅せる石と庭の美学を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大銘石＆枯山水庭園・名湯宿×ふるさと納税ガイド',
    badge: '日本三大銘石・庭園芸術特集',
    leadTitle: '大地が数千万年かけて研ぎ澄ました色と艶。名庭園の巨石に心奪われる風雅リトリート',
    leadDesc: '日本の伝統的な名庭園において、景色を引き締め神仏の依代（よりしろ）として古くから珍重されてきた「日本三大銘石」――佐渡の清流が磨き上げた鮮烈な朱赤と硬度を誇り「赤石の王」として皇居や名園に配される新潟の「佐渡赤玉石」、母岩の中に天然の花模様が咲き誇る菊花石や複雑な山水景観を宿す水石の最高峰・岐阜の「揖斐川石」、そして鴨川の上流で産出し濡れると漆黒の妖艶な光沢を放つ京都の「鴨川真黒石（まぐろいし）」。名工たちが配置した石庭を眺めながら静かに茶をいただく時間は、心の奥底から雑念を洗い流してくれる特別なひととき。巨石を配した野趣あふれる庭園露天風呂に浸かり、地域の恵みを味わう上質な旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '見事な銘石を配した日本庭園や巨石露天風呂を完備した名門宿',
        desc: '庭園鑑賞や水石の美学に浸り、自然石の持つ圧倒的な存在感とパワーに癒やされる休日。'
      },
      {
        title: '佐渡寒ブリ・飛騨飛騨牛・丹後旬魚など銘石産地が誇る特産グルメ会席',
        desc: '豊かな山河と海がもたらす最高峰の地元食材を、宿自慢の洗練された料理で堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで名庭園の隠れ家温泉宿をお得に予約',
        desc: '遊季の里や花筏など人気宿の宿泊代金を即時控除し、実質2,000円負担で極上のひとときを。'
      }
    ],
    items: [
      {
        key: 'stone_sado',
        themeTitle: '新潟県佐渡市ふるさと納税：深紅の貴石「佐渡赤玉石」と佐渡金山世界遺産・小木温泉旅館かもめ荘',
        themeDesc: '磨くほどに深い朱色を放つ佐渡赤玉石。天然記念物の原産地や佐渡金山を巡った後は、小木港近くの「旅館かもめ荘」で、お肌つるつるの小木温泉と、日本海で水揚げされた活アワビや紅ズワイガニ会席を満喫します。'
      },
      {
        key: 'stone_ibi',
        themeTitle: '岐阜県揖斐川町・養老町ふるさと納税：水石の王「揖斐川石・菊花石」と濃尾平野パノラマ・養老温泉滝元館遊季の里',
        themeDesc: '揖斐川の急流が育んだ奇石の数々。谷汲山華厳寺の門前を訪ねた後は、養老の滝の近くに佇む「養老温泉 滝元館 遊季の里」で、濃尾平野の夜景を一望する露天風呂と最高級飛騨牛しゃぶしゃぶに舌鼓を打ちます。'
      },
      {
        key: 'stone_kamogawa',
        themeTitle: '京都府京都市右京区嵐山ふるさと納税：濡れると漆黒の艶を放つ「鴨川真黒石」と嵐山温泉彩四季の宿花筏',
        themeDesc: '枯山水庭園の最高峰に据えられる真黒石。嵐山の竹林の小径や天龍寺の曹源池庭園を散策した後は、渡月橋南詰の「彩四季の宿 花筏」で、展望露天風呂から嵐山を望み、名物の手作り豆腐と京懐石料理を堪能します。'
      }
    ],
    crossLinks: [
      { title: '日本三大陶磁器の郷＆焼き物窯元めぐり宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-pottery-towns-art-stay', desc: '有田焼・美濃焼・瀬戸焼。' },
      { title: '日本三大名園＆大名庭園を愛でる名門宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gardens-heritage-luxury-stay', desc: '兼六園・後楽園・偕楽園。' },
      { title: '日本三大名水＆清冽な湧水仕込み宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-famous-waters-culinary-stay', desc: '南阿蘇・八ヶ岳・京都伏見。' }
    ]
  }
];

function generatePageCode(cfg) {
  return `'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const officialFurusatoAffUrl = "${officialFurusatoAffUrl}";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-rose-500 selection:text-white pb-24">
      {/* Hero Section */}
      <header className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
            <span className="inline-block w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            ${cfg.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            ${cfg.h1}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            ${cfg.desc}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={officialFurusatoAffUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-rose-500 via-red-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-bold rounded-2xl shadow-xl shadow-rose-950/40 transition duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 text-base md:text-lg"
            >
              <span>🏮 楽天ふるさと納税トラベル特設ページを見る</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 space-y-16">
        {/* Intro Lead */}
        <section className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 border-l-4 border-rose-500 pl-4">
            ${cfg.leadTitle}
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            ${cfg.leadDesc}
          </p>
        </section>

        {/* 3 Key Merits */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              ふるさと納税トラベルで巡る3つの至高メリット
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">実質自己負担2,000円で憧れの名旅館＆特産グルメをアップグレード</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${cfg.merits.map((m, i) => `
            <div key="${i}" className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold flex items-center justify-center mb-4">
                0${i + 1}
              </div>
              <h3 className="font-bold text-white text-lg mb-2">${m.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">${m.desc}</p>
            </div>`).join('')}
          </div>
        </section>

        {/* Featured Hotels & Regions */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              厳選名所＆楽天トラベル提携おすすめ名宿
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1">楽天ふるさと納税宿泊クーポンが利用可能な極上宿</p>
          </div>

          <div className="space-y-12">
            ${cfg.items.map((item, idx) => {
              const h = allHotels[item.key] || {};
              const name = h.hotelName || 'おすすめ温泉旅館';
              const minCharge = h.hotelMinCharge ? h.hotelMinCharge.toLocaleString() : '15,000';
              const img = h.hotelImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80';
              const rating = (h.reviewAverage && h.reviewAverage > 0) ? h.reviewAverage.toFixed(1) : (typeof h.userReview === 'number' ? h.userReview.toFixed(1) : '4.6');
              const reviewCount = h.reviewCount || 300;
              const affLink = h.affiliateUrl || officialFurusatoAffUrl;
              const special = h.hotelSpecial || '贅沢な美食と名湯、極上の空間で非日常の休日をお楽しみいただけます。';
              const address = (h.address1 || '') + (h.address2 || '');

              return `
            {/* Spot Card ${idx + 1} */}
            <article key="${idx}" className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700/80 transition duration-300 shadow-xl">
              <div className="p-6 sm:p-8 border-b border-slate-800/80">
                <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-semibold rounded-full mb-3">
                  厳選スポット 0${idx + 1}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  ${item.themeTitle}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  ${item.themeDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center bg-slate-950/40">
                <div className="lg:col-span-5 relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-800">
                  <Image
                    src="${img}"
                    alt="${name}"
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                    unoptimized
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-lg text-xs font-bold text-amber-400 border border-amber-400/30">
                    ★ ${rating}（${reviewCount}件）
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                      ${name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mb-3 flex items-center gap-1">
                      <span>📍</span>
                      <span>${address || '現地周辺'}</span>
                    </p>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/60">
                      ${special}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="text-xs text-slate-400">参考最安料金（1名あたり）</div>
                      <div className="text-lg sm:text-xl font-black text-rose-400">
                        ${minCharge}円〜
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href="${affLink}"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold rounded-xl transition border border-slate-700"
                      >
                        宿泊詳細を見る
                      </a>
                      <a
                        href={officialFurusatoAffUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-bold rounded-xl transition shadow-lg shadow-rose-950/40"
                      >
                        ふるさと納税で予約
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>`;
            }).join('')}
          </div>
        </section>

        {/* Official Banner CTA */}
        <section className="bg-gradient-to-r from-rose-950/60 via-red-900/40 to-amber-950/60 border border-rose-500/30 rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            楽天ふるさと納税トラベルで、今すぐ賢く旅に出よう
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base mb-8 leading-relaxed">
            寄付翌日から最大3年間使える宿泊クーポンで、行きたかった憧れの名宿を今すぐお得にリザーブ。実質2,000円負担で極上の日本再発見の旅へ。
          </p>
          <a
            href={officialFurusatoAffUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white text-base sm:text-lg font-extrabold rounded-2xl shadow-xl transition duration-300 transform hover:-translate-y-0.5"
          >
            <span>🏮 楽天ふるさと納税トラベル公式特設ページへ</span>
          </a>
        </section>

        {/* Cross Link Section */}
        <section className="border-t border-slate-800/80 pt-12 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            あわせて読みたい関連特集ガイド
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${cfg.crossLinks.map((cl, i) => `
            <Link
              key="${i}"
              href="${cl.url}"
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition flex flex-col justify-between group"
            >
              <div>
                <h3 className="font-bold text-white text-base group-hover:text-rose-400 transition mb-2">
                  ${cl.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  ${cl.desc}
                </p>
              </div>
              <div className="mt-4 text-xs font-semibold text-rose-400 flex items-center gap-1">
                <span>記事を読む</span>
                <span>→</span>
              </div>
            </Link>`).join('')}
          </div>
        </section>
      </main>
    </div>
  );
}
`;
}

for (const cfg of pagesConfig) {
  const targetDir = path.join(__dirname, 'src/app', cfg.slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const filePath = path.join(targetDir, 'page.tsx');
  fs.writeFileSync(filePath, generatePageCode(cfg), 'utf8');
  console.log(`✓ Generated ${filePath}`);
}

console.log('All 4 pages generated successfully for Round 34.');
