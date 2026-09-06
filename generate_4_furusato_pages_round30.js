const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-primeval-forests-nature-stay',
    title: '日本三大原生林・原生花園＆世界自然遺産エコリゾート宿×ふるさと納税完全ガイド【2026年最新】知床・屋久島・白神山地',
    desc: '人類の至宝、太古の息吹が宿る手つかずの森！北海道「知床原生林」オホーツク海を一望する知床第一ホテル、鹿児島「屋久島」樹齢数千年の縄文杉と白谷雲水峡・屋久島いわさきホテル、青森「白神山地」世界最大級のブナ原生林と日本海波打ち際の黄金崎不老ふ死温泉。日本三大原生林（世界自然遺産）の神秘を楽天ふるさと納税宿泊クーポンでお得に体感する完全ガイド。',
    h1: '日本三大原生林＆世界遺産ネイチャーリゾート×ふるさと納税ガイド',
    badge: '日本三大原生林・世界遺産特集',
    leadTitle: '神々が宿る深き森の静寂と清冽な源流のせせらぎ。地球の原初の記憶に包まれるウェルネス旅',
    leadDesc: '人の手がほとんど加わらず、数千年から数万年にわたり独自の生態系を紡いできた「日本三大原生林（三大世界自然遺産）」――海と森が連鎖しヒグマやエゾシカ、オオワシが共生する北海道の「知床原生林」、花崗岩の巨岩と苔むす森に数千年の樹齢を誇る屋久杉が聳える鹿児島の「屋久島・白谷雲水峡」、そして東アジア最大級の原生的なブナ林が広がりコバルトブルーの十二湖・青池を抱く青森・秋田の「白神山地」。森の奥深くへと足を踏み入れれば、フィトンチッドに満ちた澄んだ空気と生命の鼓動が五感を研ぎ澄ましてくれます。トレッキングの後は、オホーツク海の海鮮バイキングや屋久島トビウオ、日本海の夕日露天風呂を味わう至高の旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '世界自然遺産の真髄へ直結！ネイチャーガイドツアー付きの安心滞在',
        desc: '専門ガイドによる森の生態系解説やトレッキングサポートを受けながら、安全かつ深く原生林を体験。'
      },
      {
        title: '知床のいくら・エゾシカ、屋久島首折れサバ、津軽アワビの自然美食',
        desc: '手つかずの大自然と豊かな海がもたらす最高峰の天然食材を、宿のシェフ特製会席で堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れのエコリゾートをお得に予約',
        desc: '知床第一ホテルや黄金崎不老ふ死温泉など憧れの名宿の宿泊代金を即時割引し、実質2,000円負担で一生モノの旅へ。'
      }
    ],
    items: [
      {
        key: 'forest_shiretoko',
        themeTitle: '北海道斜里町ふるさと納税：知床五湖の原生林とオホーツク海の絶景パノラマ・知床第一ホテル',
        themeDesc: '世界自然遺産・知床の玄関口ウトロ温泉。オホーツク海に沈む夕日を一望する「知床第一ホテル」で、名物マルスコイの80種天然海鮮バイキングと、美肌の天然温泉を満喫する感動の北の大地リゾートです。'
      },
      {
        key: 'forest_yakushima',
        themeTitle: '鹿児島県屋久島町ふるさと納税：苔むすもののけの森「白谷雲水峡」とモッチョム岳を仰ぐ屋久島いわさきホテル',
        themeDesc: '東洋のガラパゴスと称される太古の島。白谷雲水峡やヤクスギランドを散策した後は、雄大なモッチョム岳を背に建つ「屋久島いわさきホテル」で、屋久杉の香る館内と首折れサバ・飛魚会席に酔いしれます。'
      },
      {
        key: 'forest_shirakami',
        themeTitle: '青森県深浦町ふるさと納税：世界最大級のブナ林「白神山地・十二湖青池」と波打ち際の名湯・黄金崎不老ふ死温泉',
        themeDesc: '神秘のコバルトブルーに輝く青池のブナ原生林。マイナスイオンを浴びて森林浴を楽しんだ後は、日本海の波打ち際に沸く赤褐色の露天風呂「黄金崎不老ふ死温泉」で、海に沈む夕日と深浦マグロ・鮑を味わいます。'
      }
    ],
    crossLinks: [
      { title: '日本三大急流＆舟下り・リバーサイド宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-rapids-river-boat-stay', desc: '最上川・富士川・球磨川の清流。' },
      { title: '日本三大峡谷＆断崖絶壁・エメラルド渓谷宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gorges-canyon-scenery-stay', desc: '清津峡・黒部峡谷・瀞峡の大自然。' },
      { title: '日本三大鍾乳洞＆神秘の地底美宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-limestone-caves-mystery-stay', desc: '龍泉洞・龍河洞・秋芳洞の奇跡。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-sand-dunes-coastal-stay',
    title: '日本三大砂丘＆風紋パノラマ・オーシャンビュー砂漠リゾートホテル×ふるさと納税完全ガイド【2026年最新】鳥取・吹上浜・中田島',
    desc: '日本離れした雄大な砂の世界！鳥取「鳥取砂丘」ラクダ遊歩と日本海パノラマ・鳥取温泉ホテルモナーク鳥取、鹿児島「吹上浜」47km続く白砂青松の砂丘美と吹上砂丘荘、静岡「中田島砂丘」遠州灘の潮風と美しい風紋アート・ホテルルートイン浜名湖。日本三大砂丘の非日常リゾートステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大砂丘＆風紋パノラマ・海宿×ふるさと納税ガイド',
    badge: '日本三大砂丘・砂漠パノラマ特集',
    leadTitle: '見渡す限りの黄金の砂丘と紺碧の海。風が刻む一期一会の風紋アートに癒やされる非日常ステイ',
    leadDesc: '日本列島の沿岸部に風と波の力によって何万年もの歳月をかけて形成された「日本三大砂丘」――最大高低差90メートルの「馬の背」から日本海を一望しラクダ乗りやサンドボードが楽しめる鳥取の「鳥取砂丘」、薩摩半島の西岸に約47kmにわたって連なり日本有数のウミガメ産卵地や砂の祭典で知られる鹿児島の「吹上浜」、そして遠州灘の強いからっ風によって砂浜に美しい風紋（砂の波模様）が描かれる静岡の「中田島砂丘」。足元に広がるサラサラの砂を踏みしめ、夕暮れに赤く染まる砂丘の稜線を眺める時間はまるで異国の砂漠に迷い込んだかのような神秘的な静寂に包まれます。地元の新鮮な魚介と美肌温泉を味わう砂丘ツーリズムを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: 'パラグライダー・ラクダ遊歩・ファットバイクなどアクティビティ満載',
        desc: '広大な砂丘を舞台にしたここでしか体験できない大自然のアクティビティを家族や友人と満喫。'
      },
      {
        title: '松葉ガニ・鳥取和牛、薩摩黒豚、浜名湖うなぎなど沿岸ご当地グルメ',
        desc: '砂丘の気候と豊かな海がもたらす最高級のごちそうディナーを宿のレストランで贅沢に味わう。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れのシティホテルや温泉宿をお得に予約',
        desc: '宿泊代金が即時控除され、実質自己負担2,000円で砂丘観光の拠点となる名宿にステイ可能。'
      }
    ],
    items: [
      {
        key: 'dune_tottori',
        themeTitle: '鳥取県鳥取市ふるさと納税：大迫力の馬の背と日本海の絶景「鳥取砂丘」と自家源泉の天然温泉・ホテルモナーク鳥取',
        themeDesc: '山陰海岸ジオパークの象徴・鳥取砂丘。砂の美術館で砂像アートを鑑賞した後は、鳥取市街に佇むヨーロッパ調ホテル「モナーク鳥取」で、美肌の自家源泉温泉大浴場と鳥取和牛・日本海の海鮮会席を堪能します。'
      },
      {
        key: 'dune_fukiage',
        themeTitle: '鹿児島県日置市・南さつま市ふるさと納税：47kmの白砂青松が続く日本一の砂丘「吹上浜」と天然温泉・吹上砂丘荘',
        themeDesc: '東シナ海に面した白砂青松の大砂丘。ウミガメが上陸する美しい海岸線を散策した後は、松林の中に佇む公共の宿「吹上砂丘荘」で、湯量豊富な天然温泉と鹿児島名物の黒豚しゃぶしゃぶ・本格薩摩焼酎を満喫します。'
      },
      {
        key: 'dune_nakatajima',
        themeTitle: '静岡県浜松市ふるさと納税：遠州のからっ風が描く芸術「中田島砂丘」の風紋とホテルルートイン浜名湖ステイ',
        themeDesc: 'ウミガメの産卵地としても有名な中田島砂丘。早朝の澄んだ空気の中で見事な風紋を鑑賞した後は、浜名湖畔に位置するホテルルートイン浜名湖で、名物浜名湖うなぎや遠州餃子を味わい旅の疲れを癒やします。'
      }
    ],
    crossLinks: [
      { title: '日本三大松原・砂州＆白砂青松オーシャンビュー宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-pine-groves-sandbar-stay', desc: '天橋立・気比松原・三保松原。' },
      { title: '日本三大カルスト台地＆絶景スカイドライブ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-karsts-highland-drive-stay', desc: '秋吉台・四国カルスト・平尾台。' },
      { title: '日本三大奇勝＆巨岩奇峰パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-wonders-rock-scenery-stay', desc: '妙義山・耶馬渓・寒霞渓の奇勝。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-buddhas-heritage-stay',
    title: '日本三大仏＆歴史と祈りの古都クラシックホテル・名旅館×ふるさと納税完全ガイド【2026年最新】奈良・鎌倉・高岡',
    desc: '千年の祈りと威厳に満ちた巨像美！奈良「東大寺大仏」盧舎那仏と若草山の鹿・いろはグランホテル近鉄奈良駅前、神奈川「鎌倉大仏」高徳院の青空大仏と相模湾・鎌倉プリンスホテル、富山「高岡大仏」日本一の美男大仏と大仏旅館。日本三大仏の歴史散策と古都の情緒あふれるホテルステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大仏＆古都クラシック宿×ふるさと納税ガイド',
    badge: '日本三大仏・歴史探訪特集',
    leadTitle: '静かに佇む慈悲の眼差しと受け継がれる職人の技。心を洗い流す古都のヒーリングステイ',
    leadDesc: '人々の安寧や国の平和を願い、時代を代表する最高の技術と情熱を結集して建立された「日本三大仏」――聖武天皇の勅願により造立された世界最大の木造建築・大仏殿に鎮座する奈良の「東大寺大仏（盧舎那仏）」、台座を含め約13メートルの堂々たる青銅製坐像が青空の下に佇む神奈川の「鎌倉大仏（高徳院阿弥陀如来）」、そして四百年の歴史を誇る銅器・鋳物の町で市民の力によって完成した日本一の美男と名高い富山の「高岡大仏」。大仏様の優しい表情を見上げながら手を合わせれば、日々の喧騒を忘れ心が洗われるような静寂が広がります。古都の老舗旅館やクラシックホテルで精進料理や郷土会席を味わう優雅な休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '早朝の参拝で混雑を回避！大仏様と一対一で向き合える贅沢な静寂',
        desc: '観光客で賑わう前の朝一番に参拝し、澄み切った空気の中で心洗われる祈りの時間を独占。'
      },
      {
        title: '大和牛・三輪そうめん、湘南しらす・葉山牛、富山湾の白エビ名物ディナー',
        desc: '歴史ある門前町や城下町が育んだ伝統の味覚を、名門ホテルのレストランで堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで古都の人気ホテルを賢くお得に予約',
        desc: '鎌倉プリンスホテルや奈良のホテルなど人気宿の宿泊代金を即時控除し、実質2,000円負担で宿泊。'
      }
    ],
    items: [
      {
        key: 'buddha_nara',
        themeTitle: '奈良県奈良市ふるさと納税：世界遺産・東大寺の盧舎那仏「奈良の大仏」と駅近快適ないろはグランホテル近鉄奈良駅前',
        themeDesc: '天平文化の最高峰・東大寺大仏。奈良公園の鹿と触れ合い、ならまちを散策した後は、近鉄奈良駅徒歩2分の「いろはグランホテル近鉄奈良駅前」を拠点に、大和野菜や大和牛の鉄板焼き、老舗の茶粥朝食を満喫します。'
      },
      {
        key: 'buddha_kamakura',
        themeTitle: '神奈川県鎌倉市ふるさと納税：国宝・露座の青銅巨仏「鎌倉大仏」と七里ヶ浜海岸を望む鎌倉プリンスホテル',
        themeDesc: '青空を背景に佇む高徳院の大仏様。江ノ電に揺られて長谷寺や由比ヶ浜を巡った後は、全室オーシャンビューの「鎌倉プリンスホテル」で、相模湾の潮騒を聞きながら湘南フレンチと極上の夕景リゾートを満喫します。'
      },
      {
        key: 'buddha_takaoka',
        themeTitle: '富山県高岡市ふるさと納税：鋳物の町が生んだ端正な美男仏「高岡大仏」とお膝元に佇む老舗・大仏旅館',
        themeDesc: '与謝野晶子が「美男」と称えた高岡大仏。金屋町の石畳通りで銅器制作体験を楽しんだ後は、大仏のすぐ目の前に位置する創業百年の「大仏旅館」で、富山湾の朝獲れ魚介やホタルイカ、氷見うどんの家庭的な美食に癒やされます。'
      }
    ],
    crossLinks: [
      { title: '日本三大名園＆大名庭園を愛でる名門宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gardens-heritage-luxury-stay', desc: '兼六園・後楽園・偕楽園の四季。' },
      { title: '日本三大和紙の里＆工芸温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-washi-craft-heritage-stay', desc: '越前和紙・美濃和紙・小川和紙。' },
      { title: '日本三大刃物の里＆職人クラフト宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-cutlery-towns-craft-stay', desc: '関・越前・堺の名刀と包丁。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-night-cherry-blossoms-stay',
    title: '日本三大夜桜＆ライトアップ桜回廊・名城お花見ホテル温泉宿×ふるさと納税完全ガイド【2026年最新】弘前・高田城・高遠城址',
    desc: '夜空を染める幻想的な桜吹雪！青森「弘前公園」二千六百本の夜桜とお堀一面の花筏・ドーミーイン弘前、新潟「高田城址公園」四千本のぼんぼりと三重櫓・スーパーホテル上越妙高、長野「高遠城址公園」天下第一の桜と南アルプス・高遠さくらホテル。日本三大夜桜の圧倒的な幽玄美を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大夜桜＆お花見ライトアップ宿×ふるさと納税ガイド',
    badge: '日本三大夜桜・お花見特集',
    leadTitle: '水面に映る無数のぼんぼりと満開の桜花。春の夜だけに出会える息をのむような桜幻郷の旅',
    leadDesc: '日本の春を象徴する桜の中でも、夜間のライトアップによって幻想的な美しさが極まることから「日本三大夜桜」と称えられてきた三つの聖地――お堀の水面をピンクに染め上げる花筏（はないかだ）と弘前城天守の共演が涙を誘う青森の「弘前公園」、約四千本のぼんぼりが三重櫓とお堀を黄金色に照らし出す新潟の「高田城址公園」、そして赤みを帯びた小ぶりで可憐なタカトオコヒガンザクラが城跡を埋め尽くす長野の「高遠城址公園」。冷涼な春の夜風を感じながら見上げる満開の夜桜は、言葉を失うほどの圧倒的な幽玄美。お花見の後は、ぽかぽかと温まる名湯温泉で花冷えの身体を温め、春告げ魚や山菜、春の銘酒を味わう最高の贅沢を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '混雑を避けて夜桜を満喫！ライトアップ会場至近の厳選ホテルステイ',
        desc: '夜遅くまでお花見と屋台グルメを心ゆくまで堪能し、徒歩や短時間で宿へ帰れる快適アクセス。'
      },
      {
        title: '花冷えの夜を癒やす天然温泉露天風呂と春の旬菜ディナー会席',
        desc: '露天風呂で温まりながら春の訪れを感じ、タラの芽やフキノトウ、桜鱒など季節の美食に舌鼓。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで桜ハイシーズンの宿泊費を大幅カット',
        desc: '予約が集中するお花見シーズンでも、寄付額に応じた宿泊代金控除で賢くお得に予約可能。'
      }
    ],
    items: [
      {
        key: 'cherry_hirosaki',
        themeTitle: '青森県弘前市ふるさと納税：お堀を埋め尽くす奇跡の花筏「弘前公園の夜桜」と天然温泉岩木桜の湯・ドーミーイン弘前',
        themeDesc: '日本一の桜の名所・弘前公園。天守と枝垂れ桜のライトアップを楽しんだ後は、最上階に天然温泉大浴場を備える「ドーミーイン弘前」で、岩木山を望む露天風呂と名物せんべい汁、夜泣きそばを満喫します。'
      },
      {
        key: 'cherry_takada',
        themeTitle: '新潟県上越市ふるさと納税：四千本のぼんぼりと三重櫓が水鏡に映える「高田城址公園の夜桜」とスーパーホテル上越妙高',
        themeDesc: '約4,000本のソメイヨシノが咲き誇る高田城址公園。さくらロードの幻想的な光のトンネルを歩いた後は、天然温泉「関山の湯」完備のスーパーホテル上越妙高駅西口で、越後地酒や新潟コシヒカリの健康朝食を堪能します。'
      },
      {
        key: 'cherry_takato',
        themeTitle: '長野県伊那市ふるさと納税：天下第一の桜と称される濃いピンク「高遠城址公園の夜桜」と高遠さくらホテル',
        themeDesc: '固有種タカトオコヒガンザクラ約1,500本が咲き乱れる高遠城跡。桜雲橋のライトアップに息をのんだ後は、白樺湖や南アルプスの大自然に囲まれた「高遠さくらホテル」で、美肌の高遠温泉と信州サーモン会席に癒やされます。'
      }
    ],
    crossLinks: [
      { title: '日本三大盆踊り＆伝統文化・城下町宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-bon-dances-heritage-stay', desc: '西馬音内・郡上おどり・阿波おどり。' },
      { title: '日本三大名園＆大名庭園を愛でる名門宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gardens-heritage-luxury-stay', desc: '兼六園・後楽園・偕楽園の庭園。' },
      { title: '日本三大美港＆ウォーターフロントホテル×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-ports-waterfront-luxury-stay', desc: '神戸・横浜・長崎の夜景。' }
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

console.log('All 4 pages generated successfully for Round 30.');
