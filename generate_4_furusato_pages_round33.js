const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-thatched-roof-villages-heritage-stay',
    title: '日本三大茅葺きの里＆日本の原風景ノスタルジー古民家温泉宿×ふるさと納税完全ガイド【2026年最新】美山・大内宿・白川郷',
    desc: '日本人の心のふるさと、茅葺き屋根が連なる奇跡の風景！京都「美山かやぶきの里」清流美山川と料理旅館枕川楼、福島「大内宿」江戸の宿場町とねぎそば・会津湯野上温泉ホテル大坂屋、岐阜「白川郷合掌造り集落」世界遺産の豪雪集落と天然温泉白川郷の湯。日本三大茅葺きの里（三大合掌・茅葺き集落）の温もりを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大茅葺きの里＆原風景ノスタルジー宿×ふるさと納税ガイド',
    badge: '日本三大茅葺きの里・古民家遺産特集',
    leadTitle: '青空に映える茅葺きの屋根と立ちのぼる囲炉裏の煙。時が止まったかのような日本の原風景ステイ',
    leadDesc: '先人たちの助け合いの精神「結（ゆい）」によって数百年もの風雪に耐え、今なお人々が暮らしを営み続ける「日本三大茅葺きの里（三大茅葺き・合掌造り集落）」――北山杉の山々に抱かれ美しい入母屋造りの民家群が清流沿いに残る京都南丹の「美山かやぶきの里」、江戸時代の会津西街道の宿場町として茅葺き屋根の長屋が街道沿いに整然と立ち並ぶ福島の「大内宿」、そして豪雪に耐える急勾配の屋根が美しい世界文化遺産・岐阜飛騨の「白川郷合掌造り集落」。囲炉裏の炭火でじっくり焼いた川魚や山菜、地元の名物料理を味わい、夜には満天の星空と虫の音に包まれる時間は、現代人が忘れかけていた深い癒やしを与えてくれます。心温まる原風景ステイを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '集落内や至近に宿泊！朝靄と夕暮れの人影のない静寂を独占散策',
        desc: '日帰り観光客が立ち去った後の静謐な茅葺き集落を、朝夕の澄み切った空気の中でゆっくりと散策。'
      },
      {
        title: '大内宿一本ねぎそば・美山地鶏・飛騨牛ステーキなど素朴で贅沢な郷土会席',
        desc: '囲炉裏端で焼き上げる鮎やイワナ、滋味豊かな地野菜と銘柄和牛のディナーに舌鼓。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れの文化遺産宿を賢くお得に予約',
        desc: '白川郷の湯や大坂屋など人気の温泉旅館の宿泊代金を即時割引し、実質2,000円負担で宿泊可能。'
      }
    ],
    items: [
      {
        key: 'village_miyama',
        themeTitle: '京都府南丹市美山町ふるさと納税：清流美山川と約40棟の茅葺き民家「美山かやぶきの里」と料理旅館枕川楼',
        themeDesc: '国の重要伝統的建造物群保存地区。のどかな日本の原風景を散策した後は、美山川の畔に佇む創業百年の「料理旅館 枕川楼」で、名物天然鮎の塩焼きや美山京地鶏のすき焼き、ぼたん鍋を堪能します。'
      },
      {
        key: 'village_ouchijuku',
        themeTitle: '福島県下郷町・会津若松市ふるさと納税：江戸時代の宿場町景観「大内宿」ねぎそばと会津湯野上温泉ホテル大坂屋',
        themeDesc: '寄棟造りの茅葺き民家が街道を埋め尽くす大内宿。名物の一本ねぎで食べる高遠そばを味わった後は、全館畳敷きと源泉100%掛け流しが自慢の「会津湯野上温泉 ホテル大坂屋」で、渓谷露天風呂と会津地酒に酔いしれます。'
      },
      {
        key: 'village_shirakawago',
        themeTitle: '岐阜県白川村ふるさと納税：世界遺産の合掌造りと白山連峰パノラマ「白川郷」と天然温泉白川郷の湯ステイ',
        themeDesc: '国の宝・世界遺産白川郷荻町集落。展望台から集落全景を見渡した後は、白川郷内で唯一の天然温泉宿「白川郷の湯」で、庄川のせせらぎを聞く露天風呂と最高級A5ランク飛騨牛ステーキ会席を満喫します。'
      }
    ],
    crossLinks: [
      { title: '日本三大美林＆天然木アロマ温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-beautiful-forests-wood-stay', desc: '青森ヒバ・秋田スギ・木曽ヒノキ。' },
      { title: '日本三大和紙の里＆工芸温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-washi-craft-heritage-stay', desc: '越前和紙・美濃和紙・小川和紙。' },
      { title: '職人技が光る伝統工芸＆数寄屋建築の名旅館ふるさと納税完全ガイド', url: '/tangible-cultural-property-sukiya-carpenter-ryokan-stay', desc: '有形文化財の名旅館。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-subterranean-waterfalls-caves-stay',
    title: '日本三大地底滝鍾乳洞＆神秘の清冽アンダーワールド温泉宿×ふるさと納税完全ガイド【2026年最新】井倉洞・あぶくま洞・日原鍾乳洞',
    desc: '洞窟内に轟く大滝と数千万年の鍾乳石アート！岡山「井倉洞」高さ50mの地底滝と新見グランドホテルみよしや、福島「あぶくま洞」滝根御殿と東洋一の鍾乳石・磐梯熱海温泉ホテル華の湯、東京「日原鍾乳洞」奥多摩の巨大地下宮殿と奥多摩の風はとのす荘。日本三大地底滝鍾乳洞の冒険と名湯を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大地底滝鍾乳洞＆地底アドベンチャー宿×ふるさと納税ガイド',
    badge: '日本三大地底滝・地下宮殿特集',
    leadTitle: '暗闇の奥から響く地鳴りのような瀑布の轟音。地球の胎内を旅するウォーターアドベンチャー',
    leadDesc: '気の遠くなるような歳月をかけて地下水が石灰岩を穿ち、洞窟の内部にダイナミックな滝を出現させた「日本三大地底滝鍾乳洞」――高さ240mにおよぶ高梁川の絶壁内部に全長1,200mの空間が広がり落差50mの地底滝が白煙を上げる岡山の「井倉洞」、三千万年もの歳月をかけて地下水が育んだ天井高29mの巨大ホール「滝根御殿」と石柱が林立する福島の「あぶくま洞」、そして東京都内にありながら白衣観音や死出の山など迷宮のような巨大地下空間を誇る奥多摩の「日原鍾乳洞」。ひんやりと冷涼な空洞を進み、暗闇の奥から現れる神秘の地底滝を目の当たりにしたときの感動は言葉を失うほど。探検の後は、清流リバーサイドの温泉宿でご当地和牛や清流川魚を味わう休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '真夏も10度前後の別世界！迫力ある地底滝とイルミネーションライトアップ',
        desc: '猛暑を忘れさせる大自然の天然クーラーの中で、地球のダイナミズムを間近に体感。'
      },
      {
        title: '岡山千屋牛・福島銘柄豚・奥多摩わさびヤマメなど山麓の絶品ごちそう',
        desc: '鍾乳洞を生み出したミネラル豊富な清流水が育む最高峰の農畜産物と旬菜を堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで秘境の温泉リゾートをお得にリザーブ',
        desc: 'ホテル華の湯やはとのす荘など人気宿の宿泊代金を即時控除し、実質2,000円負担で宿泊。'
      }
    ],
    items: [
      {
        key: 'cave_ikurado',
        themeTitle: '岡山県新見市ふるさと納税：高さ50mの地底滝「井倉洞」と日本最古の蔓牛・新見グランドホテルみよしや',
        themeDesc: '高梁川の断崖に穿たれた全長1,200mの巨大洞窟。地底の大滝や水簾観音の威容に驚嘆した後は、新見駅前の快適ホテル「グランドホテルみよしや」で、和牛のルーツ千屋牛ステーキと地酒三光正宗を満喫します。'
      },
      {
        key: 'cave_abukumado',
        themeTitle: '福島県田村市ふるさと納税：三千万年の奇跡「あぶくま洞・滝根御殿」と三十種の湯舎・磐梯熱海温泉ホテル華の湯',
        themeDesc: '東洋一の種類と数を誇る鍾乳石の回廊。幻想的なライトアップを楽しんだ後は、美肌の湯として名高い磐梯熱海温泉「ホテル華の湯」で、30種類の湯舎めぐりと福島牛・旬の創作ビュッフェを心ゆくまで堪能します。'
      },
      {
        key: 'cave_nippara',
        themeTitle: '東京都奥多摩町ふるさと納税：関東随一のスケール「日原鍾乳洞」と鳩ノ巣渓谷を望む奥多摩の風はとのす荘',
        themeDesc: '巨岩が連なる荘厳な日原鍾乳洞。神秘的な鍾乳石を巡った後は、鳩ノ巣渓谷沿いに佇むデザイナーズ温泉宿「奥多摩の風 はとのす荘」で、自家源泉の美肌温泉と奥多摩ヤマメ・本格イタリアンフルコースに癒やされます。'
      }
    ],
    crossLinks: [
      { title: '日本三大鍾乳洞＆神秘の地底美宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-limestone-caves-mystery-stay', desc: '龍泉洞・龍河洞・秋芳洞。' },
      { title: '日本三大氷穴・洞窟探検宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-caves-ice-adventure-stay', desc: '富岳風穴・玉泉洞・昇竜洞。' },
      { title: '日本三大峡谷＆断崖絶壁・エメラルド渓谷宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gorges-canyon-scenery-stay', desc: '清津峡・黒部峡谷・瀞峡。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-harbor-cruises-luxury-stay',
    title: '日本三大美港クルーズ＆夜景ディナークルーズ直結ホテル×ふるさと納税完全ガイド【2026年最新】神戸・横浜・長崎',
    desc: '洋上から望む1000万ドルのスカイライン！兵庫「神戸港クルーズ」コンチェルト＆ルミナス神戸2とホテルラ・スイート神戸ハーバーランド、神奈川「横浜港クルーズ」マリーンルージュと横浜ベイホテル東急、長崎「長崎港クルーズ」軍艦島上陸船とホテルモントレ長崎。日本三大クルーズ港の洋上贅沢ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大港クルーズ＆夜景ディナークルーズ宿×ふるさと納税ガイド',
    badge: '日本三大クルーズ港・洋上夜景特集',
    leadTitle: '汽笛を鳴らして大海原へと滑り出す豪華客船。海風に吹かれながら味わうフレンチと極上ホテル',
    leadDesc: '海から陸を眺めることで初めて出会える圧倒的なパノラマと贅沢な時間「日本三大港クルーズ」――六甲山の山並みとポートタワー、神戸海洋博物館が夕日に染まるハーバービューを眺めながら鉄板焼きフレンチを味わう兵庫の「神戸港クルーズ（コンチェルト・ルミナス神戸2）」、横浜ベイブリッジや大さん橋、みなとみらいの超高層ビル群のイルミネーションを海から見上げる神奈川の「横浜港クルーズ（マリーンルージュ）」、そして長崎港を出航し世界文化遺産の端島を巡る「軍艦島クルーズ」や稲佐山夜景を望む長崎のクルーズ船。乗船場直結や至近のラグジュアリーホテルに泊まり、潮風薫るバルコニーで余韻に浸る洗練された大人の港町旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: 'クルーズ乗船場まで徒歩すぐ！時間を気にせず優雅に夜景クルーズを満喫',
        desc: 'ディナーやトワイライトクルーズでワインを楽しんだ後も、歩いてすぐに上質な客室へ戻れる好立地。'
      },
      {
        title: '最高級神戸ビーフ・横浜本格フレンチ・長崎卓袱料理のシグネチャーディナー',
        desc: '港町が育んだ最高峰の食文化と銘酒を、船上やホテルのメインダイニングで贅沢に堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れのベイサイドホテルをお得にリザーブ',
        desc: 'ラ・スイート神戸や横浜ベイホテル東急など名門ホテルの宿泊代金を即時割引し、実質2,000円負担で宿泊。'
      }
    ],
    items: [
      {
        key: 'cruise_kobe',
        themeTitle: '兵庫県神戸市中央区ふるさと納税：ルミナス神戸2とモザイク夜景「神戸港クルーズ」とホテルラ・スイート神戸ハーバーランド',
        themeDesc: '全室オーシャンビュー＆テラス・大型ジャグジー付きの極上スモールラグジュアリーホテル「ラ・スイート神戸」。コンチェルトでのティークルーズや夜景ディナークルーズを満喫した後は、神戸牛鉄板焼きと極上の朝食パンを堪能します。'
      },
      {
        key: 'cruise_yokohama',
        themeTitle: '神奈川県横浜市西区ふるさと納税：マリーンルージュとベイブリッジの煌めき「横浜港クルーズ」と横浜ベイホテル東急',
        themeDesc: '大観覧車コスモクロック21の目の前に佇む「横浜ベイホテル東急」。大さん橋からのマリーンルージュディナークルーズを楽しんだ後は、バルコニー付き客室からみなとみらいの夜景を独占し、至高のフレンチに酔いしれます。'
      },
      {
        key: 'cruise_nagasaki',
        themeTitle: '長崎県長崎市ふるさと納税：世界遺産への船出「軍艦島上陸クルーズ」と南蛮情緒漂うホテルモントレ長崎',
        themeDesc: '大波止ターミナルから出航する軍艦島クルーズ。海底炭鉱の巨大廃墟に圧倒された後は、ポルトガルの館をイメージした異国情緒あふれる「ホテルモントレ長崎」で、長崎牛ステーキや地元海鮮イタリアンを満喫します。'
      }
    ],
    crossLinks: [
      { title: '日本三大美港＆ウォーターフロントホテル×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-ports-waterfront-luxury-stay', desc: '神戸・横浜・長崎の港町。' },
      { title: '日本三大夜景＆天空スカイラウンジホテル×ふるさと納税完全ガイド', url: '/furusato-tax-three-major-night-view-luxury-hotel-stay', desc: '長崎・神戸・函館の夜景。' },
      { title: '絶景オーシャンフロント×波音ヒーリング宿ふるさと納税完全ガイド', url: '/furusato-tax-oceanfront-wave-sound-healing-stay', desc: '海を間近に感じる名宿。' }
    ]
  },
  {
    slug: 'furusato-tax-three-coastal-pine-glamping-resort-stay',
    title: '日本三大松原・美しき白砂青松シーサイドグランピング＆リゾート宿×ふるさと納税完全ガイド【2026年最新】虹の松原・気比の松原・三保松原',
    desc: '潮風と松の香りに包まれる極上アウトドアリゾート！佐賀「虹の松原」玄界灘オーシャンビューと唐津シーサイドホテル、福井「気比の松原」敦賀湾の白砂青松とホテルルートイン敦賀駅前、静岡「三保松原」富士山を仰ぐ風景美術館日本平ホテル。日本三大松原の海岸リゾート＆グランピングステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大松原・海岸グランピング宿×ふるさと納税ガイド',
    badge: '日本三大松原・海岸リゾート特集',
    leadTitle: '青い海と緑の松林が織りなす白砂青松の絶景。波音を聞きながら過ごす至高のコースタルステイ',
    leadDesc: '古代の萬葉集から浮世絵に至るまで、日本人が最も愛してきた海岸美の象徴「日本三大松原」――約100万本の黒松が虹のような弧を描いて広がる佐賀唐津の「虹の松原」、敦賀湾の穏やかな波打ち際に白砂と青松が弓なりに続く福井若狭の「気比の松原」、そして青い駿河湾越しに雪化粧した霊峰富士を望み世界文化遺産に登録された静岡の「三保の松原」。松林を通り抜ける爽快な風を感じながらビーチサイクリングを楽しみ、夜には波の音を聞きながら豪華な地魚BBQやご当地グルメに舌鼓を打つ時間は、都会の喧騒を忘れさせてくれる贅沢そのもの。海と松林のコントラストが美しいリゾートホテルやグランピングを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '松原と海を望む絶景ロケーション！朝夕の白砂青松の美しい光を独占',
        desc: '窓を開ければ目の前に広がる松林と青い海。波音ヒーリングとマイナスイオンに包まれる滞在。'
      },
      {
        title: '佐賀牛BBQ・越前若狭ふぐ・駿河湾桜えびなど沿岸最高峰の味覚',
        desc: '海辺リゾートならではの獲れたて新鮮魚介やブランド和牛ディナーを贅沢に満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンでコースタルリゾートをお得にリザーブ',
        desc: '唐津シーサイドホテルや日本平ホテルなど憧れのリゾートホテル宿泊代金を即時控除し賢く予約。'
      }
    ],
    items: [
      {
        key: 'glamp_matsubara_karatsu',
        themeTitle: '佐賀県唐津市ふるさと納税：玄界灘に広がる100万本の松林「虹の松原」と唐津シーサイドホテル',
        themeDesc: '国の特別名勝・虹の松原に隣接する「唐津シーサイドホテル」。全室オーシャンビューのバルコニーから玄界灘を一望し、天然温泉の展望露天風呂と、極上の佐賀牛ステーキや呼子直送イカ活造りに舌鼓を打ちます。'
      },
      {
        key: 'glamp_matsubara_tsuruga',
        themeTitle: '福井県敦賀市ふるさと納税：敦賀湾の美しき白砂青松「気比の松原」とホテルルートイン敦賀駅前ステイ',
        themeDesc: '長さ約1.5kmに及ぶ名勝・気比の松原。松林ウォーキングを楽しんだ後は、北陸新幹線敦賀駅前の「ホテルルートイン敦賀駅前」の大浴場で寛ぎ、敦賀名物のヨーロッパ軒ソースカツ丼や若狭ふぐ、越前ガニを堪能します。'
      },
      {
        key: 'glamp_matsubara_shimizu',
        themeTitle: '静岡県静岡市清水区ふるさと納税：世界遺産富士山と駿河湾を一望する「三保の松原」と日本平ホテル',
        themeDesc: '羽衣伝説の舞台・三保松原。松林の先に見える富士山の偉容に感動した後は、「風景美術館」として名高い日本平ホテルで、広大な芝生ガーデンと駿河湾の新鮮な海の幸フレンチを味わう極上のリゾートステイです。'
      }
    ],
    crossLinks: [
      { title: '日本三大松原・砂州＆白砂青松オーシャンビュー宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-pine-groves-sandbar-stay', desc: '天橋立・気比松原・三保松原。' },
      { title: '日本三大砂丘＆風紋パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-sand-dunes-coastal-stay', desc: '鳥取砂丘・吹上浜・中田島砂丘。' },
      { title: '絶景オーシャンフロント×波音ヒーリング宿ふるさと納税完全ガイド', url: '/furusato-tax-oceanfront-wave-sound-healing-stay', desc: '海を間近に感じる名宿。' }
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

console.log('All 4 pages generated successfully for Round 33.');
