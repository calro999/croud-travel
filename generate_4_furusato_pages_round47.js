const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-soba-noodles-stay',
    title: '日本三大そば＆打ち立て蕎麦の芳香・名水と門前宿×ふるさと納税完全ガイド【2026年最新】戸隠・出雲・盛岡',
    desc: '日本三大そば（長野戸隠そば・島根出雲そば・岩手盛岡わんこそば）の極上グルメ旅！霊山戸隠の清らかな水と一本棒丸延ばし「手打ちそばの宿石田屋」、出雲大社門前と三段朱塗り割子そば「玉造温泉佳翠苑皆美」、掛け声響くおもてなしの食文化「ダイワロイネットホテル盛岡」。打ち立て挽きたての香りと名湯宿を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大そば＆名水宿坊・温泉郷の美食旅×ふるさと納税ガイド',
    badge: '日本三大そば・名水美食特集',
    leadTitle: '神仏の祈りと豊かな名水が磨き上げた、日本三大そばの極みと風情ある名宿ステイ',
    leadDesc: '日本古来の滋養と伝統を宿し、各地の自然と信仰の歴史に深く結びついて発展してきた「日本三大そば」――戸隠連峰の清らかな雪解け水で打たれ、一本棒で丸く延ばし五つの束に盛り分ける「ぼっち盛り」が美しい長野の「戸隠そば」、挽きぐるみと呼ばれる玄そばの実を丸ごと挽き込み三段の朱塗り器に薬味と濃い出汁を直接かけて味わう島根の「出雲割子そば」、そして給仕の元気な掛け声とともに一口ずつお椀に投げ入れられるおもてなしの宴席料理から生まれた岩手の「盛岡わんこそば」。それぞれの風土が醸す奥深い香りと喉越しを堪能した後は、老舗宿坊の静寂や美肌の名湯に癒やされる贅沢な休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '神話と霊山の名水が育む打ち立て挽きたて十割・二八そばの圧倒的風味',
        desc: '戸隠の霧下そば、出雲の野趣あふれる黒い玄そば、盛岡のモチモチとした喉越しと薬味の饗宴。'
      },
      {
        title: '信州牛・奥出雲和牛・前沢牛の贅沢肉料理と山海川の郷土会席',
        desc: '名物そばだけでなく、各地のブランド牛や採れたて山菜、三陸・山陰の獲れたて魚介を同時に満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで門前宿や温泉旅館をお得に予約',
        desc: '美食探訪や聖地巡礼の旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'soba_togakushi',
        themeTitle: '長野県長野市ふるさと納税：戸隠神社門前・自家製粉の手打ち戸隠そばと家庭的な温もり「手打ちそばの宿 石田屋」',
        themeDesc: '戸隠神社の参道近くに佇み、館主自ら打つ香り高い本場戸隠そばを堪能できる名物宿。戸隠の清らかな名水で締められたぼっち盛りそばと信州の山の幸、郷土料理を味わい、静けさに包まれた高原の心地よいひとときを過ごせます。'
      },
      {
        key: 'soba_izumo',
        themeTitle: '島根県松江市・出雲市ふるさと納税：出雲割子そばと神話の湯・庭園美を誇る老舗名館「玉造温泉 佳翠苑 皆美」',
        themeDesc: '出雲大社への参拝拠点としても名高く、日本三大美肌の湯・玉造温泉を代表する純和風旅館。伝統の皆美家伝料理や出雲そばの味覚、手入れの行き届いた日本庭園と展望露天風呂で最上級の日本情緒を体感できます。'
      },
      {
        key: 'soba_wanko',
        themeTitle: '岩手県盛岡市ふるさと納税：名物わんこそばの老舗東家至近・盛岡大通りの快適ステイ「ダイワロイネットホテル盛岡」',
        themeDesc: '盛岡の繁華街大通りに面し、東家や直利庵などわんこそばの有名老舗へのアクセス抜群。洗練された客室とアメニティを備え、わんこそば挑戦後のリフレッシュや三陸の海の幸、前沢牛グルメを巡る北東北の旅路に最適です。'
      }
    ],
    crossLinks: [
      { title: '日本三大うどん＆極上出汁・麺匠の技が光る名宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-udons-gourmet-stay', desc: '讃岐うどん・稲庭うどん・水沢うどん。' },
      { title: '日本三大そうめん＆手延べ麺道宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-somen-noodles-stay', desc: '三輪・播州・小豆島の手延べ麺。' },
      { title: '日本三大名水＆湧水水源地・清流酒蔵美食宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-spring-waters-stay', desc: '黒部湧水・白州尾白川・南阿蘇白川水源。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-historic-canals-stay',
    title: '日本三大運河＆水郷レトロ・白壁の蔵屋敷と舟流し情趣の名宿×ふるさと納税完全ガイド【2026年最新】小樽・倉敷・近江八幡',
    desc: '水運と商人の繁栄が息づく美しい水辺景観！北海道「小樽運河」ガス燈揺れる石造倉庫群と運河の宿おたるふる川、岡山「倉敷川・倉敷美観地区」白壁と柳並木の舟流しとあぶと倉敷館、滋賀「近江八幡・八幡堀」近江商人発祥の水郷と休暇村近江八幡。日本三大運河のノスタルジックな風景と歴史ある名宿を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大運河＆水郷レトロ・舟流し情趣の名宿×ふるさと納税ガイド',
    badge: '日本三大運河・水郷風情特集',
    leadTitle: '水面に揺れるガス燈、白壁の蔵屋敷。悠久の水運史が息づく麗しき水郷情緒',
    leadDesc: '海や湖と町を繋ぎ、物資の集散と商人の繁栄を支えてきた「日本三大運河・水郷」――日本海航路の北前船がもたらした富を象徴し夕暮れ時に63基のガス燈が石造倉庫を照らし出す北海道の「小樽運河」、天領の代官所が置かれ白壁土蔵の屋敷と柳並木が倉敷川の水面に映える舟流しが風雅な岡山の「倉敷美観地区・倉敷川」、そして豊臣秀次が築き八幡商人の屋敷群と四季折々の桜や新緑に包まれ時代劇の舞台としても名高い滋賀の「近江八幡・八幡堀」。情緒ある水辺の散策を楽しんだ後は、港町の獲れたて海鮮や瀬戸内海の旬魚、三大和牛・近江牛のすき焼きに舌鼓を打つ極上の旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '夕暮れのマジックアワーや朝霧の静寂に包まれるノスタルジック水辺散歩',
        desc: '小樽のレトロなガス燈、倉敷の川舟流し、八幡堀の和船めぐりなど、水上からの景観を堪能。'
      },
      {
        title: '小樽前浜の生ウニと握り寿司、瀬戸内真鯛と下津井タコ、近江牛の極上すき焼き',
        desc: '運河が運んできた豊かな食材と食文化。各地域最高峰の美食ディナーを堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで運河沿いホテルや老舗料理旅館をお得に予約',
        desc: '歴史散策や写真撮影旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'canal_otaru',
        themeTitle: '北海道小樽市ふるさと納税：小樽運河の目の前・ノスタルジックな石造り情緒と天然温泉「運河の宿 おたる ふる川」',
        themeDesc: '小樽運河沿いに佇み、明治・大正期の商家を思わせる落ち着いた木造の温もりに包まれた名宿。運河を一望する客室や光ラウンジ、小樽軟石を使った天然温泉大浴場、後志・北海道の旬の幸を散りばめた創作和食会席が至高の夜を演出します。'
      },
      {
        key: 'canal_kurashiki',
        themeTitle: '岡山県倉敷市ふるさと納税：倉敷美観地区の白壁風景に溶け込む贅沢な料理旅館「あぶと倉敷館」',
        themeDesc: '美観地区の倉敷川畔にほど近く、瀬戸内の新鮮な海の幸を贅沢に味わえる純和風の料理宿。名物の鯛料理や鰆のたたき、千屋牛料理を心ゆくまで堪能し、白壁の蔵屋敷と柳並木がライトアップされる幻想的な夜の散策を楽しめます。'
      },
      {
        key: 'canal_omihachiman',
        themeTitle: '滋賀県近江八幡市ふるさと納税：八幡堀と琵琶湖を望むリゾート・名物近江牛会席「休暇村 近江八幡」',
        themeDesc: '近江商人の町並みや八幡堀へのアクセス至便、琵琶湖の美しい宮ヶ浜の目の前に位置する温泉リゾート。天然温泉「宮ヶ浜の湯」からは湖と沖島を一望でき、認定近江牛のすき焼き会席やビュッフェで滋賀の美食を心ゆくまで満喫できます。'
      }
    ],
    crossLinks: [
      { title: '日本三大水郷＆美しき川辺の名宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-water-towns-riverside-stay', desc: '柳川・佐原・近江八幡。' },
      { title: '日本三大美港＆夜景オーシャンビュー宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-beautiful-ports-stay', desc: '清水港・長崎港・神戸港。' },
      { title: '登録有形文化財・宮大工名建築旅館×ふるさと納税完全ガイド', url: '/furusato-tax-tangible-cultural-property-architectural-ryokan-stay', desc: '修善寺新井旅館・渋温泉金具屋。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-ramen-capitals-stay',
    title: '日本三大ラーメン＆ご当地麺文化・名湯と屋台街の美食宿×ふるさと納税完全ガイド【2026年最新】喜多方・札幌・博多',
    desc: '日本三大ご当地ラーメンの聖地巡礼！福島「喜多方ラーメン」飯豊山の伏流水が育む多加水熟成縮れ麺と会津芦ノ牧温泉丸峰観光ホテル、北海道「札幌味噌ラーメン」濃厚ラードと炒め野菜の黄色い縮れ麺とプレミアホテル中島公園札幌、福岡「博多長浜ラーメン」極細ストレート麺と濃厚白濁豚骨スープに屋台街直結エスペリアホテル博多。日本三大ラーメンの旅を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大ラーメン＆名湯・屋台街めぐり美食宿×ふるさと納税ガイド',
    badge: '日本三大ラーメン・ご当地麺特集',
    leadTitle: '朝ラーから深夜の〆まで！日本を代表する三大ラーメンの聖地で味わう熱き一杯と快適ホテル',
    leadDesc: '日本全国津々浦々にあるご当地麺のなかでも、圧倒的な知名度と歴史的背景を誇る「日本三大ラーメン」――飯豊山のまろやかな伏流水を使い「朝ラー」文化が定着した平打ち熟成多加水麺に澄んだ豚骨醤油スープが絶品の福島の「喜多方ラーメン」、極寒の北国で冷めないよう熱々のラードを張り香ばしい炒め野菜と濃厚味噌が絡み合う黄色い縮れ卵麺が特徴の北海道の「札幌味噌ラーメン」、そして替玉発祥の地として知られ白濁するまで強火で炊き出した豚骨スープに極細ストレート麺を合わせ中洲の屋台文化とともに愛される福岡の「博多ラーメン」。麺巡りの合間には美肌の温泉に浸かり、ご当地ブランド牛や市場の海鮮も味わう満腹美食旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '喜多方の朝ラー・札幌すすきのの深夜味噌・博多中洲の屋台ハシゴ麺巡り',
        desc: '有名店から地元民御用達の名店まで、行列に並んででも食べたいご当地本場の味を完全制覇。'
      },
      {
        title: '会津地鶏と馬刺し、北海道ジンギスカンと毛ガニ、博多もつ鍋と水炊き',
        desc: 'ラーメンだけにとどまらない、各都市が誇る名物郷土料理と地酒のペアリングを満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで駅前シティホテルや名湯旅館をお得に予約',
        desc: '食べ歩きやグルメ旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'ramen_kitakata',
        themeTitle: '福島県喜多方市・会津若松市ふるさと納税：喜多方朝ラー巡り拠点・渓流露天風呂と会津馳走「会津芦ノ牧温泉 丸峰観光ホテル」',
        themeDesc: '喜多方の蔵の町から車で快適にアクセスでき、阿賀川の渓谷美を見下ろす老舗温泉リゾート。自家源泉の渓流露天風呂や広々とした大浴場でリフレッシュした後は、会津牛や岩魚、手打ち蕎麦など会津の豊かな山河の恵み会席を堪能できます。'
      },
      {
        key: 'ramen_sapporo',
        themeTitle: '北海道札幌市ふるさと納税：すすきのラーメン横丁へ徒歩圏内・中島公園の緑を望むシティホテル「プレミアホテル 中島公園 札幌」',
        themeDesc: 'すすきののラーメン名店街や地下鉄駅へ近く、豊平館を望む中島公園の静寂に包まれたハイグレードホテル。高層階からの札幌夜景、北海道産食材を贅沢に取り入れた和洋朝食ビュッフェで、快適な麺巡りステイを楽しめます。'
      },
      {
        key: 'ramen_hakata',
        themeTitle: '福岡県福岡市ふるさと納税：博多駅・中洲屋台街の絶好拠点・洗練された大人の隠れ家「エスペリアホテル博多」',
        themeDesc: 'JR博多駅博多口から徒歩数分、中洲の屋台街やキャナルシティへもアクセス抜群なスタイリッシュホテル。全室独立型のバス・トイレ・洗面台を完備し、博多ラーメンのハシゴ旅やもつ鍋・明太子グルメを味わい尽くす旅に最適です。'
      }
    ],
    crossLinks: [
      { title: '日本三大そば＆打ち立て蕎麦の芳香・名水と門前宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-soba-noodles-stay', desc: '戸隠・出雲・盛岡。' },
      { title: '日本三大うどん＆極上出汁・麺匠の技が光る名宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-udons-gourmet-stay', desc: '讃岐うどん・稲庭うどん・水沢うどん。' },
      { title: '朝食日本一受賞・究極の朝ごはんホテル×ふるさと納税完全ガイド', url: '/furusato-tax-award-winning-breakfast-gourmet-hotel-stay', desc: '函館・神戸・金沢の贅沢朝食。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-glass-craft-towns-stay',
    title: '日本三大ガラス工芸の町＆光の芸術・切子の輝きと風雅名宿×ふるさと納税完全ガイド【2026年最新】小樽・東京・鹿児島',
    desc: '光と色彩が織りなす工芸の最高峰！北海道「小樽切子・北一硝子」ランプ揺れる運河の街とオーセントホテル小樽、東京「江戸切子」繊細なカットが生む下町の技と浅草ビューホテルアネックス六区、鹿児島「薩摩切子」重厚なクリスタルと紅・藍のグラデーションに城山ホテル鹿児島。日本三大ガラス工芸の町を巡り、伝統の美と洗練されたホテルステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大ガラス工芸の町＆切子の輝きと名宿×ふるさと納税ガイド',
    badge: '日本三大ガラス工芸・伝統美特集',
    leadTitle: '灯りと色彩が奏でるクリスタルの小宇宙。日本三大ガラス工芸の町と優雅な宿',
    leadDesc: '卓越した職人技によってガラスに命を吹き込み、光の屈折と鮮やかな色彩で人々を魅了し続ける「日本三大ガラス工芸の町」――ニシン漁の浮き玉や石油ランプ製造から発展しレトロな洋館にガラスショップや工房が立ち並ぶ北海道の「小樽ガラス（小樽切子・北一硝子）」、江戸時代末期に発祥し十数種類の伝統文様を透明な色ガラスに精緻に刻み込む東京下町の「江戸切子」、そして薩摩藩主・島津斉彬が集成館事業で興し厚い色ガラスにグラデーションを施す「ぼかし」の技術で世界に誇る美を確立した鹿児島の「薩摩切子」。工房での吹きガラス体験やギャラリー鑑賞を堪能した後は、地域の美酒を切子のグラスで傾け、名湯露天風呂と郷土会席に酔いしれる上質な旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '小樽硝子のランプ灯・江戸切子のシャープな輝き・薩摩切子の幽玄なぼかし美',
        desc: '日本が誇る三大ガラスの美意識と、工房見学・切子制作体験で伝統工芸の真髄に触れる旅。'
      },
      {
        title: '切子グラスでいただく地酒・銘醸ワイン、蝦夷前握り寿司・黒豚しゃぶしゃぶ',
        desc: 'ガラスの町ならではの器へのこだわり。美しいカットグラスで味わうご当地ディナーを満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンでクラシックホテルや温泉宿をお得に予約',
        desc: 'クラフト体験や美術館巡りの旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'glass_otaru',
        themeTitle: '北海道小樽市ふるさと納税：北一硝子やオルゴール堂へアクセス良好・小樽の気品漂うクラシック「オーセントホテル小樽」',
        themeDesc: '小樽市街の中心に位置し、堺町通りのガラス工芸館巡りや小樽運河散策の拠点に最適な本格シティホテル。落ち着いた英国調のインテリアと広々とした客室、天然ラジウム人工温泉サウナ付き大浴場、小樽近海の海の幸と道産牛フレンチ・和食会席が魅力です。'
      },
      {
        key: 'glass_edo',
        themeTitle: '東京都台東区・墨田区ふるさと納税：江戸切子の町・墨田浅草の下町文化と粋を体感「浅草ビューホテル アネックス 六区」',
        themeDesc: '江戸切子の工房が集まる墨田・浅草エリアに位置し、伝統芸能とモダンが融合した和のホテル。江戸の粋を感じさせる客室や、浅草六区の伝統文化を体験できるラウンジを備え、下町の切子ギャラリー巡りや東京スカイツリー観光の拠点にぴったりです。'
      },
      {
        key: 'glass_satsuma',
        themeTitle: '鹿児島県鹿児島市ふるさと納税：薩摩切子の美意識と桜島一望の絶景展望露天風呂「SHIROYAMA HOTEL kagoshima（城山ホテル鹿児島）」',
        themeDesc: '仙巌園の薩摩切子ギャラリーや磯工芸館へのアクセス至便、城山の高台から桜島と錦江湾を正面に望む名門ホテル。地下1,000mから湧き出る展望露天温泉「さつま乃湯」や、鹿児島県産黒豚・黒毛和牛会席、薩摩切子で味わう本格芋焼酎バーが至福の夜を約束します。'
      }
    ],
    crossLinks: [
      { title: '日本三大陶器まつり＆名窯工芸宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-pottery-festivals-stay', desc: '有田・波佐見・信楽。' },
      { title: '日本三大瓦の町＆伝統美・いぶし瓦情趣の名宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-roof-tile-towns-stay', desc: '淡路瓦・三州瓦・石州瓦。' },
      { title: '日本三大和紙＆清流文化湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-washi-papers-stay', desc: '越前・美濃・土佐和紙。' }
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
                        {h.hotelSpecial || '日本三大そばの打ち立ての香り、日本三大運河のレトロな水郷風景、日本三大ラーメンの熱気溢れる極上スープ、日本三大ガラス工芸の町の繊細な輝きを巡る特別な拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい全国の麺文化・水辺・工芸名宿特集
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
  console.log('=== Generating 4 Pages for Round 47 ===');
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
  console.log('=== All 4 Pages generated successfully for Round 47! ===');
}

run();
