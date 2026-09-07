const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-sand-dunes-stay',
    title: '日本三大砂丘＆雄大な風紋美と夕日オーシャンビュー宿×ふるさと納税完全ガイド【2026年最新】鳥取砂丘・中田島砂丘・吹上浜',
    desc: '海と風が描く奇跡の造形美！鳥取「鳥取砂丘」日本海の夕日と自家源泉の鳥取温泉観水庭こぜにや、静岡浜松「中田島砂丘」遠州灘の風紋と天然温泉スーパーホテル浜松出世の湯、鹿児島薩摩半島「吹上浜」47km続く日本最長の白砂青松と砂むし温泉指宿白水館。日本三大砂丘の絶景と温泉を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大砂丘＆絶景オーシャンビュー温泉宿×ふるさと納税ガイド',
    badge: '日本三大砂丘・風紋絶景特集',
    leadTitle: '風が描く一期一会の風紋と、地平線に沈む黄金の夕日。雄大な砂の王国へ',
    leadDesc: '海風と大地が何万年もの歳月をかけて織り成した「日本三大砂丘」――山陰の海岸線に広がり、日本海の碧と砂のコントラストが息をのむ美しさを誇る鳥取の「鳥取砂丘」、遠州灘の強風「遠州のからっ風」が美しい幾何学的な風紋を描きウミガメの産卵地としても知られる静岡浜松の「中田島砂丘」、そして薩摩半島の西岸を47kmにわたって白砂青松が続く日本最長の砂丘・鹿児島の「吹上浜」。砂丘の稜線に立ち、海へと沈む夕日と刻々と表情を変える風紋を眺める時間は、日常を完全に忘れさせてくれる贅沢なひとときです。砂丘散策を楽しんだ後は、名湯温泉で砂と旅の疲れを洗い流し、鳥取松葉ガニ・浜松うなぎ・薩摩黒豚と海の幸を堪能する特別な旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '大地と風のアート「風紋」と日本海・太平洋・東シナ海の絶景サンセット',
        desc: '早朝の足跡のない清らかな風紋や、夕暮れ時に黄金色に染まる壮大な砂丘パノラマを体感。'
      },
      {
        title: '鳥取松葉ガニ＆白イカ、浜名湖うなぎ＆遠州灘鮮魚、薩摩黒豚＆本格芋焼酎',
        desc: '砂丘の背後に広がる豊かな海と大地が育んだ、全国屈指のブランド美味を心ゆくまで堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れの温泉旅館・ホテルをお得に予約',
        desc: '絶景ドライブや家族旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'dune_tottori',
        themeTitle: '鳥取県鳥取市ふるさと納税：鳥取砂丘の観光拠点・二つの源泉かけ流しを誇る老舗湯宿「鳥取温泉 観水庭こぜにや」',
        themeDesc: '鳥取砂丘から車で約15分、鳥取市街地に湧く天然温泉の静かな隠れ宿。完全源泉かけ流しの貸切風呂や庭園露天風呂で砂丘歩きの疲れを芯から癒やし、日本海直送の白イカや冬の味覚の王様・松葉ガニ、鳥取和牛を贅沢に味わえます。'
      },
      {
        key: 'dune_nakatajima',
        themeTitle: '静岡県浜松市ふるさと納税：中田島砂丘の風紋巡り拠点・自家源泉の天然温泉「スーパーホテル浜松 出世の湯」',
        themeDesc: '遠州灘の海岸線に広がる中田島砂丘へのアクセス抜群な快適ホテル。敷地内に湧出する弱アルカリ性の天然温泉「出世の湯」で旅の疲れをリフレッシュ。夜は浜松市街で本場の浜名湖うなぎや名物浜松餃子を味わうグルメ旅の拠点に最適です。'
      },
      {
        key: 'dune_fukiagehama',
        themeTitle: '鹿児島県日置市・指宿市ふるさと納税：日本最長の砂丘・吹上浜と名物砂むし温泉の最高峰「指宿白水館」',
        themeDesc: '47km続く吹上浜のドライブを満喫した後に訪れたい、錦江湾に面した元禄風呂と名物砂むし温泉を擁する名門旅館。砂丘と海がもたらす大地の温もりを砂むし温泉で全身に浴び、極上の鹿児島県産黒毛和牛や黒豚しゃぶしゃぶ、薩摩の地焼酎に酔いしれます。'
      }
    ],
    crossLinks: [
      { title: '日本三大白砂青松＆海岸絶景パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-coastal-sceneries-stay', desc: '天橋立・三保松原・気比の松原。' },
      { title: '日本三大美港＆夜景オーシャンビュー宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-beautiful-ports-stay', desc: '清水港・長崎港・神戸港。' },
      { title: '日本三大奇景＆奇岩絶壁パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-major-strange-sceneries-stay', desc: '妙義山・寒霞渓・耶馬渓。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-unusual-bridges-stay',
    title: '日本三大奇橋＆木造アーチ・断崖渓谷の刎橋と名湯宿×ふるさと納税完全ガイド【2026年最新】錦帯橋・猿橋・日光神橋',
    desc: '釘を使わない驚異の木造建築美！山口岩国「錦帯橋」五連の木造アーチと宮浜温泉湯の宿宮浜グランドホテル、山梨大月「甲斐の猿橋」桂川渓谷に橋脚なしで架かる刎橋と東横INN富士山大月駅、栃木日光「日光神橋」世界遺産二社一寺の玄関口と名門日光金谷ホテル。日本三大奇橋の歴史ロマンと渓谷美を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大奇橋＆渓谷美・歴史ロマンの名宿×ふるさと納税ガイド',
    badge: '日本三大奇橋・木造建築美特集',
    leadTitle: '川床に橋脚を立てず宙に張り出す知恵。先人の驚異的な技術が息づく奇橋巡礼',
    leadDesc: '急峻な渓谷や激流を越えるため、江戸時代以前の匠たちが知恵を絞って築き上げた「日本三大奇橋」――清流錦川に優美な五連の木造アーチを描き、釘を一本も使わずに組み上げられた山口岩国の「錦帯橋」、桂川の深い断崖絶壁の両岸から斜めに木材を突き出して橋を支える「刎橋（はねばし）」構造で歌川広重の浮世絵にも描かれた山梨の「甲斐の猿橋」、そして世界遺産・日光の社寺への神聖な入り口として大谷川の急流に鮮やかな朱色で架かる「日光神橋」。四季折々の新緑や紅葉、雪景色に映えるその姿は、まさに生きた芸術品です。歴史ある名橋を渡り匠の技に圧倒された後は、周辺の名湯宿で名物鮎料理や岩国寿司、甲州ワインビーフ、伝統の西洋料理を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '釘を使わない精巧な木組みや断崖に張り出す刎橋構造！唯一無二の建築美',
        desc: '写真映え抜群の優美なアーチや渓谷の岩肌と調和した木造美を、橋上と川岸の両面から鑑賞。'
      },
      {
        title: '岩国寿司＆瀬戸内小魚会席、甲州ワインビーフ＆ほうとう、日光伝統フランス料理',
        desc: '街道と城下町、門前町が育んだ伝統の食文化を、老舗宿や名門ホテルでゆったり堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで歴史薫る名宿・リゾートをお得に予約',
        desc: '文化財巡りや週末のドライブ旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'bridge_kintaikyo',
        themeTitle: '山口県岩国市・広島県廿日市市ふるさと納税：錦帯橋と宮島を望む温泉宿「宮浜温泉 湯の宿 宮浜グランドホテル」',
        themeDesc: '五連木造アーチの名橋・錦帯橋から車でアクセス良好な宮浜温泉の名宿。瀬戸内海と宮島を一望する露天風呂「マルミエロテン」で癒やされ、夕食は瀬戸内の旬の地魚や広島牛、郷土の岩国寿司を取り入れた会席料理を贅沢に堪能できます。'
      },
      {
        key: 'bridge_saruhashi',
        themeTitle: '山梨県大月市ふるさと納税：名勝・甲斐の猿橋観光の玄関口「東横INN富士山大月駅」',
        themeDesc: '桂川の断崖絶壁に架かる奇橋・猿橋まで車で約10分、JR大月駅前すぐの抜群の立地。清潔で機能的な客室と無料の朝食サービスで快適に滞在でき、甲州街道の宿場町の面影や富士山・桂川渓谷のアクティビティの拠点として最適です。'
      },
      {
        key: 'bridge_shinkyo',
        themeTitle: '栃木県日光市ふるさと納税：日光神橋すぐ・世界遺産の玄関口に佇む現存日本最古のクラシックホテル「日光金谷ホテル」',
        themeDesc: '朱塗りの日光神橋を渡ってすぐの高台に建ち、アインシュタインやヘレン・ケラーなど世界の賓客を迎えてきた名門ホテル。登録有形文化財の重厚な空間で寛ぎ、伝統の百年ライスカレーや本格フランス料理コースを優雅に味わえます。'
      }
    ],
    crossLinks: [
      { title: '日本三大山城＆天空の雲海要塞宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-mountain-castles-stay', desc: '大和高取城・美濃岩村城・備中松山城。' },
      { title: '日本三大名瀑＆豪快な滝見温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-waterfalls-resort-stay', desc: '華厳の滝・那智の滝・袋田の滝。' },
      { title: '日本三大渓谷美＆清流大自然絶景宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gorges-scenery-stay', desc: '清津峡・黒部峡谷・大杉谷。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-rapid-rivers-stay',
    title: '日本三大急流＆爽快川下り舟と清流鮎グルメ宿×ふるさと納税完全ガイド【2026年最新】最上川・富士川・球磨川',
    desc: '激流を駆け抜ける大迫力の川下りと清流の恵み！山形「最上川」芭蕉ゆかりの舟下りと全室リバービュー高見屋最上川別邸紅、静岡「富士川」富士山を仰ぐ日本屈指の急流とホテルルートイン富士中央公園東、熊本「球磨川」球磨川下りと天然アユ・球磨焼酎を味わう登録有形文化財の宿人吉温泉芳野旅館。日本三大急流の豪快な自然美を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大急流＆川下り舟体験・清流鮎グルメ宿×ふるさと納税ガイド',
    badge: '日本三大急流・川下り特集',
    leadTitle: '水しぶきをあげて白波を越える爽快感。大地の生命線たる三大急流の息吹を感じる',
    leadDesc: '日本の険しい山々から海へと一気に駆け下る激流「日本三大急流」――出羽三山と庄内平野を潤し松尾芭蕉が「五月雨を あつめて早し 最上川」と詠んだ山形の「最上川」、南アルプスと富士山の間を猛烈な勢いで南下し駿河湾へ注ぐ静岡の「富士川」、そして九州山地を深く穿ちラフティングや伝統の木造川下り舟で名高い熊本の「球磨川」。急流が削り出した深いV字谷や奇岩の景色、船頭さんの巧みな竿さばきと舟唄に耳を傾けるひとときは、旅の最高のハイライトです。川のせせらぎを聞きながら名湯露天風呂に浸かり、清流が育んだ天然アユの塩焼きや山形牛、富士宮やきそば、球磨焼酎に酔いしれる旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '大迫力の舟下りやラフティング！白波をかき分ける日本最高峰のリバーアクティビティ',
        desc: '船頭さんの舟唄を聞きながらの風流な舟下りや、スリル満点の急流下りで自然のダイナミズムを体感。'
      },
      {
        title: '最上川の寒鱈汁＆山形牛、富士川の桜えび＆富士宮グルメ、球磨川の天然鮎＆球磨焼酎',
        desc: 'ミネラル豊富な急流の水がもたらす絶品の清流魚と、流域の大地が育んだ極上グルメを満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンでリバーサイドの温泉旅館・ホテルをお得に予約',
        desc: 'アクティビティ旅や温泉癒やし旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'river_mogami',
        themeTitle: '山形県戸沢村ふるさと納税：最上川舟下りの乗船場すぐ・全室リバービューの湯宿「高見屋 最上川別邸 紅」',
        themeDesc: '雄大な最上川のほとりに佇み、客室や露天風呂から四季折々に移ろう川面を望む隠れ宿。芭蕉ライン舟下りの拠点に最適で、山形牛のすき焼きや最上川の清流が育んだ川魚、山形の旬菜会席を地酒とともにゆったりと楽しめます。'
      },
      {
        key: 'river_fujikawa',
        themeTitle: '静岡県富士市ふるさと納税：富士川の急流と雄大な富士山を望む拠点「ホテルルートイン富士中央公園東」',
        themeDesc: '富士川河口近く、富士山を一望する中央公園東に位置する快適ホテル。男女別大浴場「旅人の湯」で疲れを癒やし、バイキング朝食を無料提供。近隣の富士川楽座や由比港の桜えび、富士宮やきそばの食べ歩き拠点として抜群のロケーションです。'
      },
      {
        key: 'river_kumagawa',
        themeTitle: '熊本県人吉市ふるさと納税：球磨川下りと天然アユの里・大正モダン薫る国登録有形文化財「人吉温泉 芳野旅館」',
        themeDesc: '人吉城下町の中心に位置し、大正時代から続く国登録有形文化財の老舗温泉宿。球磨川の激流が育んだ極上の天然アユ塩焼きや馬刺し、黒毛和牛会席を味わい、美肌の湯として名高い源泉かけ流しの人吉温泉と球磨焼酎の古酒を心ゆくまで堪能できます。'
      }
    ],
    crossLinks: [
      { title: '日本三大渓谷美＆清流大自然絶景宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gorges-scenery-stay', desc: '清津峡・黒部峡谷・大杉谷。' },
      { title: '日本三大鍾乳洞＆地底探検・大自然パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-stalactite-caves-stay', desc: 'あぶくま洞・玉泉洞・井倉洞。' },
      { title: '日本三大名瀑＆豪快な滝見温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-waterfalls-resort-stay', desc: '華厳の滝・那智の滝・袋田の滝。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-night-cherry-blossoms-stay',
    title: '日本三大夜桜＆幻想ライトアップと春爛漫ホテル宿×ふるさと納税完全ガイド【2026年最新】弘前公園・高田城址公園・上野恩賜公園',
    desc: '息をのむ桜のトンネルと水面に映る幽玄の灯り！青森弘前「弘前公園」2600本の桜とお濠の花筏ライトアップとアートホテル弘前シティ、新潟上越「高田城址公園」4000本の夜桜と三重櫓のぼんぼり点灯とアートホテル上越、東京台東区「上野恩賜公園」江戸時代からの名所とホテルクラウンヒルズ上野プレミア。日本三大夜桜の夢幻ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大夜桜＆幽玄のライトアップ宿×ふるさと納税ガイド',
    badge: '日本三大夜桜・春爛漫特集',
    leadTitle: '夜空を染める薄紅色の雲海、お濠の水鏡に映る城郭と行灯の揺らめき。春の宵の夢心地',
    leadDesc: '日本全国数千のお花見スポットの中でも、夜間ライトアップの規模と美しさにおいて別格の評価を受ける「日本三大夜桜」――天守とお濠の水面を桜の花びらが埋め尽くす「花筏（はないかだ）」が世界的な絶景として称賛される青森の「弘前公園」、四千本もの桜が三千個以上のボンボリに照らし出され復元された三重櫓とともに東洋一の夜桜と讃えられる新潟上越の「高田城址公園」、そして寛永寺の境内として江戸庶民に愛され現代も不忍池の夜景とともに華やぐ東京の「上野恩賜公園」。闇夜に浮かび上がる満開の桜並木をそぞろ歩き、春の夜風を感じる時間は、一年にわずか数日しか許されない特別な贅沢です。名所近くのホテルを拠点に、青森りんご＆倉石牛、新潟雪室熟成肉＆地酒、東京下町グルメを味わうお花見旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '数千本の桜がライトアップされる圧巻のスケール！お濠の水鏡と三重櫓のコラボレーション',
        desc: '昼間の青空に映える桜とは一変、ぼんぼりや投光器に照らされて幽玄に輝く夜桜の絶景を満喫。'
      },
      {
        title: '青森倉石牛＆地酒、越後上越の日本酒飲み比べ＆海の幸、東京下町老舗の味',
        desc: '花見の宴を彩る地域色豊かな特産グルメと銘酒を、ホテルのレストランや周辺の名店で堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンでお花見シーズンの人気ホテルをお得に予約',
        desc: '予約が殺到する春の観光ピーク時でも、寄付金額に応じた最大30%オフの即時割引クーポンで賢くお得ステイ。'
      }
    ],
    items: [
      {
        key: 'sakura_hirosaki',
        themeTitle: '青森県弘前市ふるさと納税：弘前城・弘前公園の夜桜散策拠点・駅直結の上質シティホテル「アートホテル弘前シティ」',
        themeDesc: '弘前駅前に位置し、弘前さくらまつり会場の弘前公園へのシャトルバスやアクセスに最適なハイグレードホテル。スタイリッシュな客室で寛ぎ、朝食ビュッフェでは青森県産りんごジュースの飲み比べや郷土料理「けの汁」、津軽の旬の美味を存分に堪能できます。'
      },
      {
        key: 'sakura_takada',
        themeTitle: '新潟県上越市ふるさと納税：東洋一の夜桜・高田城址公園のお膝元「アートホテル上越」',
        themeDesc: '高田城百万人観桜会のメイン会場である高田城址公園へ車や直行アクセス至便なシティホテル。三重櫓と4000本の夜桜ライトアップを心ゆくまで鑑賞した後は、新潟自慢のコシヒカリと日本海の新鮮な魚介、越後の銘酒を取り揃えた和食・洋食ディナーを楽しめます。'
      },
      {
        key: 'sakura_ueno',
        themeTitle: '東京都台東区ふるさと納税：上野恩賜公園・不忍池の夜桜至近・高層階からの東京パノラマ「ホテルクラウンヒルズ上野プレミア」',
        themeDesc: '上野恩賜公園のさくら通りや不忍池まで徒歩すぐの好立地ホテル。高層階に位置する客室からは上野の夜景を一望でき、大浴場も完備。江戸情緒あふれる夜桜見物を満喫した後は、上野アメ横や浅草の下町グルメ巡りをお得に楽しめます。'
      }
    ],
    crossLinks: [
      { title: '日本三大名園＆大名庭園風雅宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-daimyo-gardens-stay', desc: '偕楽園・兼六園・後楽園。' },
      { title: '日本三大美港＆夜景オーシャンビュー宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-beautiful-ports-stay', desc: '清水港・長崎港・神戸港。' },
      { title: '日本三大砂丘＆絶景オーシャンビュー温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-sand-dunes-stay', desc: '鳥取砂丘・中田島砂丘・吹上浜。' }
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
                        {h.hotelSpecial || '日本三大砂丘の風紋絶景、木造建築の奇跡を伝える日本三大奇橋、豪快な川下り舟が走る日本三大急流、お濠と夜空を染める日本三大夜桜を巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の絶景・名橋・急流特集
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
  console.log('=== Generating 4 Pages for Round 43 ===');
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
  console.log('=== All 4 Pages generated successfully for Round 43! ===');
}

run();
