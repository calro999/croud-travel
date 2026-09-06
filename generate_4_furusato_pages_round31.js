const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-beautiful-forests-wood-stay',
    title: '日本三大美林＆天然木アロマ香る癒やしの森林セラピー温泉宿×ふるさと納税完全ガイド【2026年最新】青森ヒバ・秋田スギ・木曽ヒノキ',
    desc: '清々しい木の香りに包まれる極上の森林浴ステイ！青森「青森ヒバ」日本一の耐久性と芳香・むつグランドホテル斗南温泉、秋田「秋田スギ」樹齢二百年の巨木と大館曲げわっぱ・大館ぽかぽか温泉ホテル、長野「木曽ヒノキ」伊勢神宮御用達の銘木と木曽路宿場町・きそふくしま温泉おん宿蔦屋。日本三大美林の清冽な癒やしと銘木風呂を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大美林＆天然木アロマ温泉宿×ふるさと納税ガイド',
    badge: '日本三大美林・森林セラピー特集',
    leadTitle: '深く息を吸い込めば満たされる清冽なフィトンチッド。五感で銘木の生命力を味わう森林リトリート',
    leadDesc: '日本古来の建築や暮らしを支え、その圧倒的な美しさと耐久性、清らかな香りで「日本三大美林」と称えられてきた三つの銘木産地――ヒノキチオールを豊富に含み防腐・殺菌効果と芳醇な香りを放つ青森下北の「青森ヒバ」、まっすぐに伸びる美しい木目と香りが曲げわっぱなどの工芸品に受け継がれる秋田の「秋田スギ」、そして伊勢神宮の式年遷宮に用いられる御神木を何百年も大切に育て守り継いできた長野の「木曽ヒノキ」。木漏れ日が降り注ぐ天然林を歩く森林セラピー体験と、湯船から壁一面に銘木が惜しみなく使われた温泉風呂に浸かる時間は至福の極み。銘木アロマに包まれながら地元の山菜やブランド牛を味わう癒やしの休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '客室や大浴場に総ヒバ・総ヒノキを採用！天然のアロマテラピー効果',
        desc: '湯気に乗って立ちのぼる天然木の芳香が自律神経を整え、深い睡眠と心身のリフレッシュをもたらします。'
      },
      {
        title: '大館曲げわっぱ・木曽漆器・津軽ヒバなど伝統工芸体験やお土産探し',
        desc: '職人の技を間近で見学し、手になじむ一生モノの木工芸品を旅の思い出として持ち帰る喜び。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで銘木リゾートを賢くお得にリザーブ',
        desc: '寄付額に応じて宿泊代金が即時控除され、実質負担2,000円で憧れの森林リトリート宿に宿泊可能。'
      }
    ],
    items: [
      {
        key: 'forest_hiba',
        themeTitle: '青森県むつ市ふるさと納税：日本屈指の耐朽性と癒やしの香り「青森ヒバの美林」とむつグランドホテル斗南温泉',
        themeDesc: '下北半島の雄大な自然に育まれた青森ヒバ。釜臥山を望む丘の上に佇む「むつグランドホテル」で、美肌の「斗南温泉 美人の湯」と、陸奥湾ホタテや大間マグロ、津軽の旬彩を味わう極上の北国ステイです。'
      },
      {
        key: 'forest_sugi',
        themeTitle: '秋田県大館市ふるさと納税：樹齢二百年の巨木が息づく「秋田スギ」伝統工芸曲げわっぱと大館ぽかぽか温泉ホテル',
        themeDesc: '天然秋田スギの美林が広がる大館・能代。本場の大館曲げわっぱ制作体験を楽しんだ後は、効能豊かな自家源泉掛け流しの「大館ぽかぽか温泉ホテル」で、比内地鶏のきりたんぽ鍋に舌鼓を打ちます。'
      },
      {
        key: 'forest_hinoki',
        themeTitle: '長野県木曽町ふるさと納税：伊勢神宮の御神木を育む「木曽ヒノキ」中山道妻籠宿とおん宿蔦屋ステイ',
        themeDesc: '木曽五木の筆頭として保護されてきた木曽ヒノキ。木曽路の歴史ある宿場町を散策した後は、創業三百有余年の老舗「きそふくしま温泉 おん宿 蔦屋」で、木曽ヒノキの香り漂う薬用風呂と信州牛・手打ち蕎麦を満喫します。'
      }
    ],
    crossLinks: [
      { title: '日本三大原生林＆世界自然遺産宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-primeval-forests-nature-stay', desc: '知床・屋久島・白神山地。' },
      { title: '日本三大和紙の里＆工芸温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-washi-craft-heritage-stay', desc: '越前和紙・美濃和紙・小川和紙。' },
      { title: '日本三大銘茶の産地＆茶香炉ヒーリング宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-green-tea-regions-healing-stay', desc: '静岡茶・宇治茶・朝宮茶。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-curious-bridges-canyon-stay',
    title: '日本三奇橋＆スリル満点の名橋・渓谷リバーサイド温泉宿×ふるさと納税完全ガイド【2026年最新】錦帯橋・猿橋・祖谷かずら橋',
    desc: '先人たちの驚異的な木造建築美！山口「錦帯橋」五連の木造アーチ橋とアパホテル山口岩国駅前西、山梨「甲斐の猿橋」橋脚を使わない刎橋構造と石和温泉ホテル平安、徳島「祖谷のかずら橋」足元が透けるスリルと秘境の新祖谷温泉ホテルかずら橋。日本三奇橋の絶景と渓谷美を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三奇橋＆スリル満点の名橋・渓谷宿×ふるさと納税ガイド',
    badge: '日本三奇橋・建築と渓谷美特集',
    leadTitle: '釘を使わずに組み上げられた奇跡の構造美。激流と断崖を渡る歴史ロマンと清流温泉の旅',
    leadDesc: '険しい日本の山河を渡るため、現代の工学をも驚かせる知恵と技で造り上げられた「日本三奇橋（日本三大名橋/奇橋）」――清流錦川に優美な波のように連なる五連の木造アーチが圧巻の山口「錦帯橋」、桂川の深い渓谷に橋脚を一切立てず両岸の岩盤から張り出した刎木（はねぎ）で支える山梨の「甲斐の猿橋」、そして平家の落人が追手の進入を防ぐためにシラクチカズラを編んで架けたと伝わる秘境徳島の「祖谷のかずら橋」。一歩踏み出せば、ギシギシと揺れるスリルと眼下に広がる清流パノラマに息をのみます。名橋を渡った後は、渓谷沿いの絶景露天風呂や山川の幸を味わうドラマチックな休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '歩いて渡れる感動体験！四季折々の桜・新緑・紅葉に映える木造名橋',
        desc: '写真映え抜群の歴史的建造物を間近で観察し、橋上から見下ろす清流の美景を体感。'
      },
      {
        title: '岩国寿司・甲州富士桜ポーク・祖谷名物あゆ塩焼きなど郷土ごちそう会席',
        desc: '渓谷の歴史と風土が育んだ郷土色豊かな料理を、ふるさと納税クーポンで贅沢にアップグレード。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで秘境の名湯温泉をお得にリザーブ',
        desc: 'ケーブルカーで行く露天風呂付き宿など憧れの温泉宿を、実質自己負担2,000円で賢く予約。'
      }
    ],
    items: [
      {
        key: 'bridge_kintaikyo',
        themeTitle: '山口県岩国市ふるさと納税：清流錦川に架かる五連木造アーチの奇跡「錦帯橋」とアパホテル山口岩国駅前西',
        themeDesc: '延宝元年に創建された世界的木造名橋・錦帯橋。岩国城ロープウェイからの大パノラマを楽しんだ後は、岩国駅前の快適ホテルを拠点に、名物押し寿司「岩国寿司」やレンコン料理、地酒獺祭を満喫します。'
      },
      {
        key: 'bridge_saruhashi',
        themeTitle: '山梨県大月市・笛吹市ふるさと納税：歌川広重も描いた刎橋の構造美「甲斐の猿橋」と石和温泉ホテル平安',
        themeDesc: '深い桂川渓谷を跨ぐ奇想の橋・猿橋。国の名勝に指定された絶壁の眺めを堪能した後は、山梨屈指の名湯・石和温泉「ホテル平安」で、毎分湧出する自慢の美肌温泉と甲州牛会席料理に癒やされます。'
      },
      {
        key: 'bridge_kazurabashi',
        themeTitle: '徳島県三好市祖谷渓ふるさと納税：足元がすくむスリル満点の吊り橋「祖谷のかずら橋」と新祖谷温泉ホテルかずら橋',
        themeDesc: '国の重要有形民俗文化財・祖谷のかずら橋。敷板の隙間から谷底を見下ろすスリルを味わった後は、専用ケーブルカーで登る天空露天風呂が自慢の「新祖谷温泉 ホテルかずら橋」で、阿波尾鶏や祖谷そばを味わいます。'
      }
    ],
    crossLinks: [
      { title: '日本三大名橋＆清流リバーサイド宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-bridges-riverside-stay', desc: '錦帯橋・眼鏡橋・猿橋。' },
      { title: '日本三大峡谷＆断崖絶壁・エメラルド渓谷宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gorges-canyon-scenery-stay', desc: '清津峡・黒部峡谷・瀞峡。' },
      { title: '日本三大急流＆舟下り・リバーサイド宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-rapids-river-boat-stay', desc: '最上川・富士川・球磨川。' }
    ]
  },
  {
    slug: 'furusato-tax-new-three-major-night-views-sky-stay',
    title: '新日本三大夜景＆天空きらめくパノラマ・極上スカイラウンジホテル×ふるさと納税完全ガイド【2026年最新】皿倉山・若草山・フルーツ公園',
    desc: '宝石箱をひっくり返したような感動のパノラマ！福岡「皿倉山」100億ドルの夜景とホテルルートイン苅田駅前、山梨「笛吹川フルーツ公園」甲府盆地の星屑パノラマとホテルルートインコート甲府石和、奈良「若草山山頂」古都奈良の静寂と灯火・ホテルニューわかさ。新日本三大夜景の感動的な夜景ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '新日本三大夜景＆天空スカイパノラマ宿×ふるさと納税ガイド',
    badge: '新日本三大夜景・天空パノラマ特集',
    leadTitle: '地平線まで広がる光の絨毯と澄み切った星空。ロマンチックな夜を彩る天空リゾートの休日',
    leadDesc: '夜景愛好家たちの投票によって選定され、圧倒的な視野の広さと独自の大パノラマで絶賛される「新日本三大夜景」――標高622mの山頂から北九州市街や洞海湾を視野180度以上で見渡し「100億ドルの夜景」と称される福岡の「皿倉山」、甲府盆地の扇状地に広がる街灯りと富士山のシルエットが息をのむ美しさを生む山梨の「笛吹川フルーツ公園」、そして東大寺大仏殿や興福寺の五重塔がライトアップされ古都の静謐な灯りが広がる奈良の「若草山山頂」。ケーブルカーやドライブウェイで登る山頂展望台からの眺めは、大切な人と過ごす時間を忘れられない思い出にしてくれます。夜景を堪能した後は、名湯温泉と地元ブランド食材のディナーを味わう特別な旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '客室や展望露天風呂から夜景を一望！非日常のロマンチックステイ',
        desc: '誰にも邪魔されないプライベート空間から、夕暮れのマジックアワーと輝く夜景を独占鑑賞。'
      },
      {
        title: '玄界灘海鮮・甲州ワインビーフ・大和牛会席などご当地最高峰グルメ',
        desc: 'きらめく夜景の余韻とともに味わうシェフ特製の地元食材ディナーと地酒・甲州ワイン。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れの夜景ホテルをお得にリザーブ',
        desc: '寄付額に応じた即時割引クーポンを活用し、実質2,000円の自己負担で記念日旅行をお得にアップグレード。'
      }
    ],
    items: [
      {
        key: 'night_sarakurayama',
        themeTitle: '福岡県北九州市八幡東区ふるさと納税：視野180度・100億ドルの夜景「皿倉山」とホテルルートイン苅田駅前',
        themeDesc: 'ケーブルカーとスロープカーを乗り継ぐ標高622mの山頂。恋人の聖地としても知られる皿倉山の大パノラマを体感した後は、天然温泉大浴場を備えたホテルルートイン苅田駅前を拠点に、小倉牛やもつ鍋、玄界灘の旬魚を堪能します。'
      },
      {
        key: 'night_fruitspark',
        themeTitle: '山梨県山梨市・笛吹市ふるさと納税：甲府盆地を埋め尽くす星屑の夜景「笛吹川フルーツ公園」とホテルルートインコート甲府石和',
        themeDesc: 'ガラスドームが幻想的に輝くフルーツ公園。甲府盆地一面の光の海を見下ろした後は、石和温泉のホテルルートインコート甲府石和で、名湯の天然温泉に浸かり、名物ほうとうや甲州ワイン牛ディナーに舌鼓を打ちます。'
      },
      {
        key: 'night_wakakusayama',
        themeTitle: '奈良県奈良市ふるさと納税：古都奈良の歴史を照らす幻想的な夜景「若草山山頂」とホテルニューわかさステイ',
        themeDesc: '新若草山ドライブウェイで行く山頂展望台。大仏殿や大和三山を見晴らす夜景を楽しんだ後は、東大寺大仏殿まで徒歩圏の「ホテルニューわかさ」で、屋上テラスからの古都パノラマと、大和牛すき焼き・大和懐石を味わいます。'
      }
    ],
    crossLinks: [
      { title: '日本三大夜景＆天空スカイラウンジホテル×ふるさと納税完全ガイド', url: '/furusato-tax-three-major-night-view-luxury-hotel-stay', desc: '長崎・神戸・函館の夜景。' },
      { title: '日本三大美港＆ウォーターフロントホテル×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-ports-waterfront-luxury-stay', desc: '神戸・横浜・長崎の港町。' },
      { title: '日本三大名園＆大名庭園を愛でる名門宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gardens-heritage-luxury-stay', desc: '兼六園・後楽園・偕楽園。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-fire-festivals-passion-stay',
    title: '日本三大火祭り＆燃え盛る炎と魂の躍動・伝統情熱温泉宿×ふるさと納税完全ガイド【2026年最新】那智・野沢温泉・鞍馬',
    desc: '夜空を焦がす大松明と飛び散る火の粉！和歌山「那智の火祭」世界遺産熊野那智大社の大松明と南紀勝浦温泉ホテル浦島、長野「野沢温泉の道祖神祭り」天下の奇祭と名門河一屋旅館、京都「鞍馬の火祭」街道を埋め尽くす炎の乱舞とザ・プリンス京都宝ヶ池。日本三大火祭りの圧倒的な迫力と熱気を楽天ふるさと納税宿泊クーポンでお得に体験する完全ガイド。',
    h1: '日本三大火祭り＆燃え盛る情熱の伝統宿×ふるさと納税ガイド',
    badge: '日本三大火祭り・魂の炎特集',
    leadTitle: 'パチパチと爆ぜる大松明の火柱と男たちの勇壮な掛け声。厄を払い神仏と一体になる熱狂の祭り旅',
    leadDesc: '古来より火には穢れを祓い清める強大な霊力が宿ると信じられ、数多の人々の祈りとともに受け継がれてきた「日本三大火祭り」――熊野那智大社の扇立祭として重さ50kg以上の大松明12本が那智の滝へと炎の列をなす和歌山の「那智の火祭」、国の重要無形民俗文化財に指定され社殿を巡る激しい攻防戦と巨大な火柱が夜空を焦がす長野の「野沢温泉の道祖神祭り」、そして「サイレイ、サイリョウ」の掛け声とともに燃え盛る巨大松明が鞍馬の街並みを埋め尽くす京都洛北の「鞍馬の火祭」。飛び散る火の粉の熱風と人々の熱狂を肌で感じる体験は一生の記憶に残る感動です。祭りの後は、名湯温泉で身体を温め、地域の伝統美食を味わう旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '祭りの熱狂と興奮を間近で体感！会場アクセスに優れた好立地宿',
        desc: '夜遅くまで続く神事や迫力の火の粉を安全かつ間近で鑑賞し、スムーズに宿へ戻れる快適滞在。'
      },
      {
        title: '紀州勝浦マグロ・信州牛すき焼き・京会席など各県自慢の極上グルメ',
        desc: '祭り当日の感動を語り合いながら味わう、地元の旬の素材を贅沢に使ったお料理と銘酒。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンでハイシーズンの宿泊予約を賢く割引',
        desc: '予約が困難な火祭り当日や前後の宿泊代金が即時控除され、実質負担2,000円で宿泊可能。'
      }
    ],
    items: [
      {
        key: 'fire_nachi',
        themeTitle: '和歌山県那智勝浦町ふるさと納税：熊野那智大社の大松明と那智の滝「那智の火祭」と南紀勝浦温泉ホテル浦島',
        themeDesc: '世界遺産・熊野古道の聖地で行われる扇祭り。12本の大松明が石段を駆け上がる勇壮な神事を見届けた後は、専用船で渡る名門「ホテル浦島」で、太平洋を望む天然大洞窟風呂「忘帰洞」と勝浦生マグロ食べ放題を満喫します。'
      },
      {
        key: 'fire_nozawa',
        themeTitle: '長野県野沢温泉村ふるさと納税：火の粉飛び散る国指定重要無形民俗文化財「道祖神祭り」と野沢温泉河一屋旅館',
        themeDesc: '真冬の雪の中で繰り広げられる日本を代表する火祭り。巨大な社殿をめぐる激しい火の攻防を体感した後は、創業百余年の「河一屋旅館」で、源泉掛け流しの温泉湯巡りと信州牛のステーキ会席に心も身体も温まります。'
      },
      {
        key: 'fire_kurama',
        themeTitle: '京都府京都市左京区ふるさと納税：由岐神社の街道を焦がす炎の乱舞「鞍馬の火祭」とザ・プリンス京都宝ヶ池',
        themeDesc: '平安時代からの歴史を刻む京都三大奇祭の一つ。巨大な松明が洛北の夜空を染め上げる光景に息をのんだ後は、村野藤吾設計の円形名建築「ザ・プリンス 京都宝ヶ池」で、緑豊かな洛北の静寂と本格京会席・フレンチを味わいます。'
      }
    ],
    crossLinks: [
      { title: '日本三大盆踊り＆伝統文化・城下町宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-bon-dances-heritage-stay', desc: '西馬音内・郡上おどり・阿波おどり。' },
      { title: '日本三大薬湯＆濃厚生薬湯治宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-medicinal-springs-healing-stay', desc: '松之山温泉・草津温泉・有馬温泉。' },
      { title: '日本三大名湯＆歴史息づく老舗旅館ふるさと納税完全ガイド', url: '/furusato-tax-three-major-hot-springs-heritage-stay', desc: '草津・有馬・下呂の名湯。' }
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

console.log('All 4 pages generated successfully for Round 31.');
