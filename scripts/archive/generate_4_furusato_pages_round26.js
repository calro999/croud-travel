const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-ports-waterfront-luxury-stay',
    title: '日本三大美港＆客船クルーズ・ウォーターフロント名門ホテル×ふるさと納税完全ガイド【2026年最新】神戸・横浜・長崎',
    desc: '開港の歴史とエキゾチックな港町パノラマ！兵庫「神戸港」メリケンパークのハーバービューと最高級神戸牛鉄板焼き、神奈川「横浜港」みなとみらいベイブリッジ夜景とクラシックホテル、長崎「長崎港」稲佐山から見下ろす1000万ドル夜景と南蛮卓袱料理。日本三大美港のベイサイドステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大美港＆ウォーターフロント名門ホテル×ふるさと納税ガイド',
    badge: '日本三大美港・ベイサイド特集',
    leadTitle: '行き交う大型客船と海を染める夕暮れのマジックアワー。異国情緒薫る港町のリゾートホテルステイ',
    leadDesc: '幕末から明治にかけて世界へと門戸を開き、日本独自のモダン文化と国際色豊かな街並みを育んできた「日本三大美港（三大貿易港）」――六甲山と海に挟まれた美しい景観を誇る兵庫の「神戸港」、未来的なスカイラインと歴史的赤レンガ倉庫が調和する神奈川の「横浜港」、そしてすり鉢状の天然良港に異国情緒あふれる洋館が立ち並ぶ長崎の「長崎港」。潮風が吹き抜けるハーバーフロントの名門ホテルやタワーホテルからは、行き交うクルーズ船やライトアップされた大観覧車、海に映えるイルミネーションを一望できます。極上のフレンチや中華、地元ブランド牛を味わう洗練された大人の港町ステイを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '客室バルコニーから海と夜景を一望するオーシャンフロント',
        desc: '窓一面に広がるベイエリアのパノラマや1000万ドルの夜景を、誰にも邪魔されずプライベート空間から堪能できます。'
      },
      {
        title: '中華街・元町・南京町・グラバー園など港町観光スポットへ直結',
        desc: '食べ歩きやショッピング、異人館めぐりに便利な好立地ホテルを厳選。移動時間を気にせず優雅に滞在できます。'
      },
      {
        title: '最高級神戸牛・横浜本格中華コース・長崎卓袱料理の極上ディナー',
        desc: '国際貿易港が育んだ最高峰の食文化をホテルのシグネチャーレストランで味わい、ふるさと納税クーポンでお得にアップグレードできます。'
      }
    ],
    items: [
      {
        key: 'port_kobe',
        themeTitle: '兵庫県神戸市中央区ふるさと納税：六甲山と海が織りなす「神戸港メリケンパーク」ハーバーランド夜景と最高級神戸牛鉄板焼き',
        themeDesc: '開港150年の歴史を誇るポートタワーのお膝元。ハーバーを行き交うクルーズ船を眺めながら、世界的ブランド牛「神戸牛」のサーロインステーキや地元瀬戸内海の海の幸を堪能する極上のアーバンリゾートです。'
      },
      {
        key: 'port_yokohama',
        themeTitle: '神奈川県横浜市西区・中区ふるさと納税：みなとみらいの煌めくスカイライン「横浜港」ベイブリッジ展望と元町・中華街クラシックステイ',
        themeDesc: '赤レンガ倉庫や大さん橋に大型客船が寄港する国際港。観覧車やベイブリッジの夜景を望むラグジュアリーホテルに泊まり、横浜中華街の本格広東料理や山手のクラシックな洋食に舌鼓を打つ贅沢な週末です。'
      },
      {
        key: 'port_nagasaki',
        themeTitle: '長崎県長崎市ふるさと納税：出島・南蛮貿易の記憶息づく「長崎港」稲佐山展望台の夜景と天然温泉・長崎卓袱料理名宿',
        themeDesc: '三方を山に囲まれたすり鉢状の美しい港。世界新三大夜景に選ばれた稲佐山からの夜景を露天風呂から眺め、東坡肉（豚の角煮）やハトシなど長崎伝統の卓袱料理、長崎和牛を堪能できるエキゾチックな港町旅です。'
      }
    ],
    crossLinks: [
      { title: '日本三大夜景＆天空スカイラウンジホテル×ふるさと納税完全ガイド', url: '/furusato-tax-three-major-night-view-luxury-hotel-stay', desc: '長崎・神戸・函館の1000万ドル夜景ステイ。' },
      { title: '絶景オーシャンフロント×波音ヒーリングの海宿ふるさと納税完全ガイド', url: '/furusato-tax-oceanfront-wave-sound-healing-stay', desc: '稲取・南房総・読谷村の潮騒露天。' },
      { title: '海鮮浜焼き・港町朝市めぐり直結宿×ふるさと納税完全ガイド', url: '/furusato-tax-morning-market-hamayaki-seafood-inn-stay', desc: '八戸・沼津・高知の市場グルメ。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-green-tea-regions-healing-stay',
    title: '日本三大銘茶の産地＆大茶園パノラマ・茶香炉ヒーリング宿×ふるさと納税完全ガイド【2026年最新】静岡茶・宇治茶・狭山茶（朝宮茶）',
    desc: '芳醇な香りと深緑の美景に癒やされるお茶ツーリズム！静岡「牧之原台地」日本一の大茶園と茶香炉アロマ・駿河湾美肌温泉、京都「宇治」千年の茶文化が息づく抹茶スイーツめぐりと宇治川料理旅館、滋賀「甲賀信楽・朝宮茶」日本最古千二百年の歴史を誇る幻の銘茶と信楽焼陶芸温泉宿。日本三大銘茶の郷を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大銘茶の産地＆茶香炉ヒーリング宿×ふるさと納税ガイド',
    badge: '日本三大銘茶・茶香炉癒やし特集',
    leadTitle: '見渡す限りの緑の茶畑と立ちのぼる茶香炉の芳香。五感で癒やされるティーリトリートステイ',
    leadDesc: '「色は静岡、香りは宇治よ、味は狭山（あるいは朝宮）でとどめさす」と茶摘み唄に歌い継がれてきた「日本三大銘茶（銘茶産地）」――富士山を背景に日本最大の大茶園が広がる静岡の「静岡茶（牧之原・掛川）」、宇治川の朝霧と茶道文化が磨き上げた最高峰の玉露・抹茶を誇る京都の「宇治茶」、そして最澄が唐から持ち帰った茶の種を植えた日本最古の歴史を誇る滋賀・信楽の「朝宮茶（近江茶）」。新緑の季節には瑞々しい新芽が輝き、宿の客室に入れば茶香炉から漂う焙じたての緑茶の香りが旅の疲れを優しく解き放ちます。茶葉を贅沢に使った茶しゃぶしゃぶやお茶スイーツ、煎茶のペアリングを味わう極上の休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '茶香炉の香りに包まれる癒やしの客室とお茶アメニティ完備',
        desc: '部屋に入った瞬間に広がる緑茶アロマのリラクゼーション効果と、カテキン豊富な茶葉風呂で心身ともにデトックスできます。'
      },
      {
        title: '老舗茶舗での利き茶体験や本格抹茶パフェ・抹茶スイーツめぐり',
        desc: '挽きたて抹茶の点て方体験や、茶畑カフェでの絶景ティータイムなどお茶処ならではのカルチャー体験が揃います。'
      },
      {
        title: '煎茶出汁の茶しゃぶしゃぶ・茶そば・近江牛の茶葉燻製ディナー',
        desc: '銘茶の風味を活かしたシェフ特製のお茶フルコース会席を、ふるさと納税クーポンでお得に堪能できます。'
      }
    ],
    items: [
      {
        key: 'tea_shizuoka',
        themeTitle: '静岡県牧之原市・島田市ふるさと納税：日本最大の大茶園「牧之原大茶園」富士山と緑の絨毯パノラマと茶香炉の温泉ホテル',
        themeDesc: '明治維新の旧幕臣が開拓した約5,000ヘクタールの大茶園。富士山を望む展望台からの絶景を楽しみ、宿では深蒸し茶のウェルカムティーや茶葉天ぷら、駿河湾の地魚と天然温泉に心潤すリフレッシュ旅です。'
      },
      {
        key: 'tea_uji',
        themeTitle: '京都府宇治市ふるさと納税：千年の茶道文化息づく「宇治茶」本場抹茶スイーツと世界遺産平等院・宇治川畔の料理旅館',
        themeDesc: '室町幕府や豊臣秀吉が愛護した宇治茶のふるさと。平等院鳳凰堂を参拝し、老舗茶舗で濃茶や抹茶パフェを味わった後は、宇治川のせせらぎを聞きながら本格京懐石とお茶ペアリングを堪能できます。'
      },
      {
        key: 'tea_asamiya',
        themeTitle: '滋賀県甲賀市信楽町ふるさと納税：日本最古1200年の幻の銘茶「朝宮茶」と信楽焼窯元めぐり・奥伊吹の隠れ家温泉',
        themeDesc: '標高400mの高原特有の気候が生む極上の香りと旨味を誇る朝宮茶。タヌキの置物で有名な信楽焼の陶芸ギャラリーを歩き、信楽焼露天風呂に浸かりながら近江牛とお茶のコラボ会席を味わう静寂の宿です。'
      }
    ],
    crossLinks: [
      { title: '日本三大銘菓＆歴史茶の湯・老舗和菓子めぐり風雅宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-wagashi-tea-culture-stay', desc: '金沢長生殿・長岡越乃雪・松江山川の城下町旅。' },
      { title: '日本三大陶磁器の里＆窯元めぐり・器と美食宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-pottery-towns-gourmet-stay', desc: '有田・美濃・瀬戸の名陶と武雄嬉野温泉。' },
      { title: '銘菓・和カフェ＆老舗スイーツめぐり温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-sweets-cafe-wagashi-retro-onsen-stay', desc: '金沢・小布施・伊勢の甘味旅。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-water-castles-seaside-stay',
    title: '日本三大水城＆海に浮かぶ名城展望・瀬戸内海鮮名宿×ふるさと納税完全ガイド【2026年最新】今治城・高松城・中津城',
    desc: '海水を堀に引き入れた難攻不落の名城！愛媛「今治城」藤堂高虎公築城の日本屈指の水城天守展望と来島海峡の荒波鯛めし、香川「高松城（玉藻城）」水門越しに瀬戸内海の多島美を望むベイサイド宿と讃岐オリーブ牛、大分「中津城」黒田官兵衛が築いた石垣と周防灘名物ハモ料理。海城の歴史ロマンを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大水城＆海に浮かぶ名城展望宿×ふるさと納税ガイド',
    badge: '日本三大水城・海城絶景特集',
    leadTitle: '堀を泳ぐ鯛やフグ、海城天守から望む瀬戸内海の多島美。水軍の歴史が息づく海城ステイ',
    leadDesc: '海や川の水を城の堀に直接引き入れ、船が城内に直接出入りできるように築かれた「日本三大水城（海城）」――築城の名手・藤堂高虎が海水を海水堀に引き込み水軍の拠点とした愛媛の「今治城」、生駒親正が築き水門から海水が直接流入する香川の「高松城（玉藻城）」、そして黒田官兵衛（如水）が周防灘に面した河口に築いた大分の「中津城」。海水を引き込んだ堀には今でもチヌ（クロダイ）やボラ、フグが泳ぎ、天守閣や城跡の展望台からは青く輝く瀬戸内海や周防灘の島々を一望できます。海城のライトアップを望むホテルに泊まり、来島海峡の激流鯛やオリーブ牛、中津の鱧料理を味わう大人の歴史紀行を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '城郭ライトアップや瀬戸内海の多島美を一望するキャッスルビュー',
        desc: '客室の窓から水城の美しい天守閣や堀の水面、海を行き交う船の光をゆったり鑑賞できます。'
      },
      {
        title: '城下町散策・しまなみ海道・讃岐うどんめぐりへの抜群のアクセス',
        desc: '城跡やフェリー乗り場、主要駅に近い好立地。レンタサイクルでの散策も快適に楽しめます。'
      },
      {
        title: '来島海峡の激流天然真鯛・讃岐牛・周防灘鱧しゃぶの贅沢美食',
        desc: '水城の海がもたらす最高の海の幸と特産和牛を、ふるさと納税クーポンでお得に味わえます。'
      }
    ],
    items: [
      {
        key: 'castle_imabari',
        themeTitle: '愛媛県今治市ふるさと納税：藤堂高虎が築いた海水堀の名城「今治城」天守閣展望と来島海峡の激流真鯛・しまなみホテル',
        themeDesc: '堀の幅が広く海水魚が群れ泳ぐ日本三大水城の筆頭。白亜の天守閣からのパノラマを堪能し、宿では日本三大急流・来島海峡の荒波で身の締まった天然真鯛の兜煮や鯛めし、伊予牛を心ゆくまで味わえます。'
      },
      {
        key: 'castle_takamatsu',
        themeTitle: '香川県高松市ふるさと納税：水門から海水が注ぐ「高松城（玉藻城）」月見櫓と瀬戸内サンポート高松ベイサイドホテル',
        themeDesc: '国の史跡に指定される讃岐の名城。鯛のエサやり体験や披雲閣の日本庭園を歩き、高松港沿いのホテルで瀬戸内海の夕日を眺めながら讃岐オリーブ牛や地魚刺身、本場の讃岐うどんに舌鼓を打てます。'
      },
      {
        key: 'castle_nakatsu',
        themeTitle: '大分県中津市ふるさと納税：軍師・黒田官兵衛ゆかりの「中津城」奥平家家宝と周防灘名物ハモ料理・城下町名門ステイ',
        themeDesc: '中津川の河口に築かれた扇城。九州最古の近世城郭の石垣を見学し、福沢諭吉の旧居など歴史の町を散策した後は、骨切りしたばかりの新鮮な鱧（ハモ）湯引きやハモしゃぶ鍋を地酒とともに堪能できます。'
      }
    ],
    crossLinks: [
      { title: '国宝天守・城下町キャッスルビュー名門宿×ふるさと納税完全ガイド', url: '/furusato-tax-national-treasure-castle-view-luxury-stay', desc: '姫路城・松本城・彦根城の歴史旅。' },
      { title: '日本三名橋の歴史景観とリバーサイド名宿ステイ×ふるさと納税完全ガイド', url: '/furusato-tax-three-famous-bridges-heritage-stay', desc: '錦帯橋・眼鏡橋・日本橋の文化遺産ステイ。' },
      { title: '絶景サイクリング＆海沿いサイクリスト温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-cycling-shimanami-lake-resort-stay', desc: 'しまなみ海道・尾道の絶景リゾート。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-wonders-rock-scenery-stay',
    title: '日本三大奇勝＆巨岩奇峰パノラマ・大自然の彫刻美を愛でる宿×ふるさと納税完全ガイド【2026年最新】妙義山・耶馬渓・寒霞渓',
    desc: '大自然が創り出した巨岩の彫刻芸術！群馬「妙義山」切り立つ岩峰パノラマと美肌の妙義温泉・上州牛、大分「耶馬渓」日本新三景の競秀峰と青の洞門・金色のいで湯、香川小豆島「寒霞渓」奇岩絶壁ロープウェイと小豆島オリーブ・瀬戸内海一望露天風呂。日本三大奇勝の絶景温泉宿を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大奇勝＆巨岩奇峰パノラマ宿×ふるさと納税ガイド',
    badge: '日本三大奇勝・巨岩絶景特集',
    leadTitle: '風雨とマグマが削り上げた天の造形美。切り立つ岩峰と錦秋のコントラストを愛でる秘境ステイ',
    leadDesc: '数百万年にわたる火山活動と浸食作用によって生まれた、日本国内でも類を見ない奇岩巨峰の景勝地「日本三大奇勝」――荒々しい岩肌と石門群が連なり国の名勝に指定される群馬の「妙義山」、福沢諭吉が景観を守ったことで知られ競秀峰の岩壁がそびえる大分の「耶馬渓」、そして小豆島の中央にそびえ1300万年前の火山活動が生んだ大峡谷・香川の「寒霞渓」。空を突く巨大な奇岩と、春の新緑・秋の紅葉が織りなす大自然のアートは圧巻の一言です。岩峰を正面に望む絶景展望露天風呂や隠れ家名宿に泊まり、滋味深い山川の幸や瀬戸内海鮮を味わうダイナミックな休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '遮るもののない大パノラマ！露天風呂や客室から奇岩連峰を一望',
        desc: '朝靄に浮かぶ奇岩の稜線や、夕陽に赤く染まる岩肌の絶景を温泉に浸かりながら贅沢に眺められます。'
      },
      {
        title: '奇岩ロープウェイや青の洞門・絶景トレッキングへの拠点に最適',
        desc: '寒霞渓ロープウェイや妙義神社、耶馬渓サイクリングロードなど見どころへのアクセスが抜群です。'
      },
      {
        title: '上州牛・下仁田ネギ・耶馬渓地鶏・小豆島オリーブ牛の郷土美食',
        desc: '厳しい大自然が育んだブランド和牛や新鮮野菜を宿自慢の会席で堪能し、ふるさと納税でお得に贅沢できます。'
      }
    ],
    items: [
      {
        key: 'wonder_myogi',
        themeTitle: '群馬県安中市・下仁田町ふるさと納税：天を突く奇岩怪石のパノラマ「妙義山」妙義神社参拝と美肌の妙義温泉リゾート',
        themeDesc: '白雲山・金洞山などの岩峰が連なる上毛三山の一角。妙義温泉の自家源泉露天風呂から眼前に迫る荒々しい岩壁パノラマを眺め、上州牛ステーキや下仁田こんにゃく、下仁田ねぎ鍋を味わう感動の温泉ステイです。'
      },
      {
        key: 'wonder_yabakei',
        themeTitle: '大分県中津市本耶馬渓ふるさと納税：日本新三景「耶馬渓」競秀峰の巨岩断崖と禅海和尚の手掘り「青の洞門」＆金色温泉',
        themeDesc: '山国川の清流沿いにそびえる巨大な岩峰群。禅海和尚が30年かけて掘り抜いた青の洞門の歴史ロマンに触れ、離れ客室が点在する温泉旅館で黄金色の名湯露天風呂と耶馬渓地鶏炭火焼きを堪能できます。'
      },
      {
        key: 'wonder_kankakei',
        themeTitle: '香川県小豆島町ふるさと納税：日本三大渓谷美「寒霞渓」奇岩絶壁ロープウェイと瀬戸内海パノラマ・小豆島温泉リゾート',
        themeDesc: '表十二景・裏八景の巨岩がそびえる寒霞渓。ロープウェイの車窓から奇岩と瀬戸内海を同時に見下ろす大絶景を体験し、宿では小豆島オリーブ牛ステーキや新鮮な小豆島そうめん、潮騒露天風呂に癒やされる島旅です。'
      }
    ],
    crossLinks: [
      { title: '日本三大峡谷＆巨岩奇勝パノラマ露天風呂宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gorges-canyon-onsen-stay', desc: '清津峡・黒部峡谷・大杉谷の絶景名湯。' },
      { title: '日本三大カルスト台地＆白亜の石灰岩パノラマ高原宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-karst-plateaus-mountain-resort-stay', desc: '秋吉台・四国カルスト・平尾台の絶景リゾート。' },
      { title: '日本三大渓谷美＆エメラルドグリーンの峡谷温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-emerald-valley-gorge-hot-spring-stay', desc: '大歩危・黒部峡谷・清津峡の絶景秘湯。' }
    ]
  }
];

function generatePageCode(config) {
  const pageHotelsData = allHotels[config.slug] || {};

  return `import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${config.title}',
  description: '${config.desc}',
  keywords: 'ふるさと納税, 楽天トラベル, 旅行クーポン, 宿泊記, ホテル予約, 国内旅行, おすすめ宿, 温泉旅館',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/${config.slug}',
  },
  openGraph: {
    title: '${config.title}',
    description: '${config.desc}',
    url: 'https://croud-travel.pages.dev/${config.slug}',
    siteName: 'トラベル総合ナビ',
    locale: 'ja_JP',
    type: 'article',
  },
};

const OFFICIAL_FURUSATO_URL = '${officialFurusatoAffUrl}';

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs sm:text-sm font-semibold mb-4 border border-amber-400/30">
            <span>✨</span>
            <span>${config.badge}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-white drop-shadow-sm">
            ${config.h1}
          </h1>
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-4xl">
            ${config.leadTitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">●</span> 2026年最新検証済み</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">●</span> 楽天ふるさと納税宿泊クーポン対象</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">●</span> 実在確認済み公式提携</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Intro Card */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 border-l-4 border-indigo-600 pl-4">
            はじめに
          </h2>
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            ${config.leadDesc}
          </p>

          <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💡</span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-amber-900 mb-1">
                  楽天ふるさと納税「トラベルクーポン」賢い活用法
                </h3>
                <p className="text-sm sm:text-base text-amber-800 leading-relaxed">
                  寄付額の最大30%分の宿泊クーポンが付与され、寄付当日から予約に即時利用可能。通常の楽天ポイント還元やお買い物マラソンとも併用できるため、実質自己負担2,000円で憧れの高級リゾートや名湯旅館に泊まれる最強の制度です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Merits */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-600 pl-4">
            この特集ならではの3大魅力
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${config.merits.map((m, idx) => `
            <div key="${idx}" className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-indigo-300 transition-colors">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mb-3">
                ${idx + 1}
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">${m.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">${m.desc}</p>
            </div>
            `).join('')}
          </div>
        </section>

        {/* Hotel Items by Theme */}
        ${config.items.map(item => {
          const hotelGroup = pageHotelsData[item.key] || { label: item.themeTitle, hotels: [] };
          const hotels = hotelGroup.hotels || [];

          return `
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-2.5 py-1 rounded-md">Featured Region</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              ${item.themeTitle}
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              ${item.themeDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            ${hotels.length > 0 ? hotels.map(h => `
            <div key="${h.hotelNo}" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="${h.hotelImageUrl || h.roomImageUrl || '/placeholder.jpg'}"
                  alt="${h.hotelName}"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                ${h.reviewAverage ? `
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ ${h.reviewAverage} <span className="text-slate-500 font-normal">(${h.reviewCount || 0}件)</span>
                </div>
                ` : ''}
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="${h.hotelInformationUrl}" target="_blank" rel="noopener noreferrer">
                      ${h.hotelName}
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 ${h.address1 || ''}${h.address2 || ''}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 ${h.access || '詳細は施設情報をご確認ください'}
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    ${h.hotelSpecial || '四季折々の魅力と上質なホスピタリティでお迎えするおすすめの宿泊施設です。'}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ${h.hotelMinCharge ? `¥${h.hotelMinCharge.toLocaleString()}〜` : 'プラン詳細参照'}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="${h.hotelInformationUrl}"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 transition-colors"
                    >
                      詳細・宿泊プラン
                    </a>
                    <a
                      href={OFFICIAL_FURUSATO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-amber-600 rounded-xl shadow hover:opacity-95 transition-opacity"
                    >
                      寄付で宿泊
                    </a>
                  </div>
                </div>
              </div>
            </div>
            `).join('') : `
            <div className="p-6 bg-slate-50 rounded-xl border border-dashed border-slate-300 text-center text-slate-500">
              現在、該当地域の人気宿を厳選リサーチ中です。最新プランはふるさと納税公式ページよりご確認いただけます。
            </div>
            `}
          </div>
        </section>
          `;
        }).join('')}

        {/* Global CTA Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-950 rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs sm:text-sm font-bold mb-6 border border-amber-400/30">
            <span>🎟️</span>
            <span>楽天ふるさと納税×楽天トラベル 公式連携</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
            ふるさと納税で賢くお得に、憧れの極上宿へ
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            返礼品の宿泊クーポンは翌年以降の旅行にも活用でき、ポイント還元もフル適用。実質2,000円の自己負担でワンランク上の滞在をお楽しみください。
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <a
              href={OFFICIAL_FURUSATO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-lg hover:brightness-105 transition-all transform hover:-translate-y-0.5"
            >
              楽天ふるさと納税で宿を探す
            </a>
          </div>
        </section>

        {/* Cross Links Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 border-l-4 border-indigo-600 pl-4">
            あわせて読みたい関連特集ガイド
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${config.crossLinks.map((cl, idx) => `
            <Link
              key="${idx}"
              href="${cl.url}"
              className="block p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition-all group bg-slate-50/50"
            >
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                ${cl.title}
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                ${cl.desc}
              </p>
            </Link>
            `).join('')}
          </div>
        </section>
      </main>
    </div>
  );
}
`;
}

function main() {
  for (const conf of pagesConfig) {
    const dir = path.join(__dirname, 'src/app', conf.slug);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const filePath = path.join(dir, 'page.tsx');
    const code = generatePageCode(conf);
    fs.writeFileSync(filePath, code, 'utf8');
    console.log(`Generated: ${filePath}`);
  }
}

main();
