const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-rapids-river-activity-stay',
    title: '日本三大急流＆爽快川下り・リバーアクティビティ名宿×ふるさと納税完全ガイド【2026年最新】最上川・富士川・球磨川',
    desc: '日本三大急流の大迫力！山形「最上川」芭蕉ゆかりの舟下りと峡谷温泉旅館、山梨・静岡「富士川」爽快ラフティングと名湯下部温泉、熊本「球磨川」豪快な川下りと美肌の人吉温泉＆球磨焼酎。清流の息吹と絶景リバーサイドステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大急流＆爽快川下り・リバーアクティビティ名宿×ふるさと納税ガイド',
    badge: '日本三大急流・爽快リバーサイド特集',
    leadTitle: '怒涛の白波と雄大な峡谷美。大地を削る清流の力強さに癒やされるウォーターフロントステイ',
    leadDesc: '日本列島の中央や山岳地帯を豪快に駆け抜ける「日本三大急流」――山形の最上川、山梨・静岡を流れる富士川、そして熊本の人吉盆地を潤す球磨川。古くは舟運の大動脈として歴史を育み、松尾芭蕉が名句を詠んだ景勝地は、現代ではスリリングな川下りやラフティング、SUPなどのリバースポーツの聖地として愛されています。川のせせらぎを眼下に望む露天風呂と、獲れたてのアユやイワナなどの川魚料理、地元の旬の恵みを味わう上質な温泉宿を楽天ふるさと納税で予約すれば、日々の喧騒を忘れ、自然の生命力に包まれる特別な旅が叶います。',
    merits: [
      {
        title: '窓を開ければ広がる清流パノラマ！川のせせらぎに包まれる極上ヒーリング',
        desc: '客室や露天風呂から三大急流の雄大な流れを望み、心地よい水音をBGMに心身ともに解放されるリトリート滞在が楽しめます。'
      },
      {
        title: '川下り舟・ラフティング乗船場至近！移動ストレスゼロのアクティブトリップ',
        desc: '舟下りの発着所やアクティビティ集合場所から至近の宿を厳選。早朝の澄んだ川霧や夕暮れ時の絶景も余すことなく体験できます。'
      },
      {
        title: '清流が育む天然鮎やイワナ、名水仕込みの地酒・球磨焼酎を堪能',
        desc: '澄んだ清流がもたらす極上の川魚塩焼き、山菜、そして名水で醸された地酒を贅沢に味わい、ふるさと納税クーポンで賢く旅費を還元できます。'
      }
    ],
    items: [
      {
        key: 'rapid_mogami',
        themeTitle: '山形県戸沢村・大蔵村ふるさと納税：松尾芭蕉が愛した「最上川舟下り」と雄大な峡谷美を望む温泉旅館',
        themeDesc: '「五月雨をあつめて早し最上川」の名句で知られる名勝。船頭の唄う舟唄に耳を傾けながら四季折々の峡谷美を愛でる風雅な舟下りを体験し、最上川を眼下に望む展望露天風呂と山形の山海の幸に舌鼓を打つ極上の時間です。'
      },
      {
        key: 'rapid_fuji',
        themeTitle: '山梨県身延町・富士川町ふるさと納税：日本一の急流美「富士川ラフティング」と信玄公ゆかりの名湯・下部温泉',
        themeDesc: '南アルプスと八ヶ岳の水を集め駿河湾へと注ぐ富士川。大迫力の白波を乗り越える爽快ラフティングを満喫した後は、武田信玄の隠し湯として知られる名湯・下部温泉の源泉ぬる湯でじっくりと筋肉の疲れを癒やすリフレッシュ旅です。'
      },
      {
        key: 'rapid_kuma',
        themeTitle: '熊本県人吉市ふるさと納税：豪快な「球磨川下り」と清流沿いに佇む美肌の名湯・人吉温泉＆球磨焼酎名宿',
        themeDesc: '九州山地から八代海へと流れ出る球磨川。伝統の木造船で激流を縫うように下る豪快な体験の後は、ph値が高くトロリとした肌触りの人吉温泉に浸かり、500年の歴史を誇る球磨焼酎と極上の鮎料理を味わい尽くせます。'
      }
    ],
    crossLinks: [
      { title: '日本三大清流（四万十川・長良川・柿田川）リバーサイド宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-clear-rivers-riverside-stay', desc: '日本が誇る奇跡の透明度を誇る清流宿。' },
      { title: '全国名瀑・日本三大名瀑とマイナスイオン温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-famous-waterfalls-hot-spring-stay', desc: '那智の滝・袋田の滝・華厳の滝の絶景癒やし旅。' },
      { title: '日本三大峡谷（清津峡・黒部峡谷・瀞峡）絶景秘湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-canyons-hot-spring-stay', desc: '大自然の造形美と渓谷美を愛でる秘境ステイ。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-festivals-heritage-stay',
    title: '日本三大美祭＆伝統工芸・山鉾の街の老舗旅館×ふるさと納税完全ガイド【2026年最新】高山祭・秩父夜祭・祇園祭',
    desc: '日本が世界に誇る絢爛豪華な伝統美！岐阜「高山祭」屋台のからくり人形と飛騨牛会席、埼玉「秩父夜祭」冬の夜空を焦がす笠鉾・屋台と奥秩父温泉、京都「祇園祭」石畳の路地に佇む京町家旅館と京懐石。ユネスコ無形文化遺産の歴史絵巻を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大美祭＆伝統工芸・山鉾の街の老舗旅館×ふるさと納税ガイド',
    badge: '日本三大美祭・山鉾の街特集',
    leadTitle: '幾百年受け継がれる宮大工の魂と絢爛豪華な屋台。日本の美意識が結晶した歴史の街に泊まる',
    leadDesc: '日本三大美祭――春・秋の飛騨高山を彩る「高山祭」、秩父神社の例祭として師走の寒空を熱狂で包む「秩父夜祭」、そして千百年の歴史を誇る夏の京都の風物詩「祇園祭」。いずれも精緻を極めた漆塗り、金箔、木彫刻の技が息づく山鉾や屋台が街を巡行し、国の重要無形民俗文化財およびユネスコ無形文化遺産にも登録されています。伝統の職人技が今なお息づく古い町並みや石畳の小路に佇む老舗旅館や上質町家宿に泊まり、地域の伝統料理と美酒を味わいながら、日本の美の神髄に触れる贅沢なひとときを楽天ふるさと納税で叶えましょう。',
    merits: [
      {
        title: '祭り会場や歴史的街並みへ徒歩圏！混雑を避けて優雅に散策',
        desc: '祭りの熱気と静寂の両方を味わえる好立地宿を厳選。早朝やライトアップされた夜の屋台・山鉾を人混みを避けてゆったり鑑賞できます。'
      },
      {
        title: '飛騨牛・秩父ジビエ・旬の京懐石！歴史が育んだ本物の郷土美食',
        desc: '伝統の職人が育んだ食文化を宿の個室食事処で堪能。地元の極上牛や新鮮野菜、名水で仕込んだ地酒とのペアリングを満喫できます。'
      },
      {
        title: '歴史ある数寄屋造りや登録有形文化財の風情に憩う贅沢ステイ',
        desc: '匠の技が光る建築意匠、坪庭、檜風呂など、宿そのものが美術品のような空間で過ごす特別な非日常をふるさと納税でお得に実現できます。'
      }
    ],
    items: [
      {
        key: 'festival_takayama',
        themeTitle: '岐阜県高山市ふるさと納税：飛騨の匠の技が息づく「高山祭」と江戸の風情残る古い町並み・飛騨牛温泉名宿',
        themeDesc: '動く陽明門とも称される絢爛豪華な祭屋台とからくり奉納。飛騨の木工技術が息づく格子戸の町並みを歩き、宿ではとろけるような最高ランクの飛騨牛会席と天然温泉を心ゆくまで堪能する旅です。'
      },
      {
        key: 'festival_chichibu',
        themeTitle: '埼玉県秩父市ふるさと納税：冬の夜空に響く秩父屋台囃子「秩父夜祭」と冬花火・奥秩父の名湯隠れ家宿',
        themeDesc: '三百年以上の歴史を誇る秩父神社の例大祭。提灯の灯りが揺れる重厚な笠鉾・屋台が急坂を引き上げられる大迫力のクライマックスと冬花火を体感し、静寂に包まれた秩父の隠れ家温泉で芯から温まる冬の極上旅です。'
      },
      {
        key: 'festival_kyoto',
        themeTitle: '京都府京都市東山区ふるさと納税：千百年の伝統「京都祇園祭」と八坂神社のお膝元・石畳の祇園京町家旅館',
        themeDesc: 'コンチキチンの祇園囃子が古都に響き渡る夏の名祭。山鉾巡行や宵山で賑わう祇園や四条の熱気を感じつつ、暖簾をくぐれば静寂が広がる料理旅館で、鱧や賀茂茄子など夏の京料理と行き届いたおもてなしに浸れます。'
      }
    ],
    crossLinks: [
      { title: '日本三名橋の歴史景観とリバーサイド名宿ステイ×ふるさと納税完全ガイド', url: '/furusato-tax-three-famous-bridges-heritage-stay', desc: '錦帯橋・眼鏡橋・日本橋の文化遺産ステイ。' },
      { title: '小江戸・小京都の風情ある城下町老舗旅館×ふるさと納税完全ガイド', url: '/furusato-tax-little-edo-kyoto-castle-town-stay', desc: '川越・金沢・萩の伝統美を味わう大人旅。' },
      { title: '日本三名園と国宝天守・城下町散策ステイ×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gardens-heritage-stay', desc: '兼六園・後楽園・偕楽園の四季と名門ホテル。' }
    ]
  },
  {
    slug: 'furusato-tax-rare-wagyu-tankaku-akagyu-gourmet-stay',
    title: '幻の極上赤身肉「短角牛・あか牛」美食温泉宿×ふるさと納税完全ガイド【2026年最新】岩手・熊本阿蘇・高知土佐',
    desc: '肉本来の濃厚な旨味とヘルシーな赤身！岩手久慈「いわて短角牛」の極上ステーキと奥羽のいで湯、熊本「くまもとあか牛」阿蘇の草原が育む炭火焼きと名湯巡り、高知「土佐あかうし」年間数百頭の幻の和牛会席。黒毛和牛とは一線を画す赤身肉の頂点を楽天ふるさと納税宿泊クーポンでお得に味わう完全ガイド。',
    h1: '幻の極上赤身肉「短角牛・あか牛」美食温泉宿×ふるさと納税ガイド',
    badge: '短角牛・あか牛・希少和牛美食特集',
    leadTitle: '噛みしめるほどに溢れ出す芳醇な肉汁。健康志向の美食家が辿り着く「本物の赤身和牛」ステイ',
    leadDesc: '日本国内に流通する和牛のほとんどを黒毛和種が占める中、わずか数パーセントしか存在しない日本の固有種「褐毛和種（あか牛）」と「日本短角種（短角牛）」。広大な牧草地での放牧によって自然の草を食み、ストレスなく育ったこれらの和牛は、脂肪分が控えめでアミノ酸やグルタミン酸が豊富に含まれた濃厚な赤身肉が最大の特徴です。一口噛めばジュワッと溢れ出す滋味深い旨味は、霜降りの脂が重く感じる大人世代に圧倒的な支持を得ています。産地ならではの熟成ステーキや炭火焼きを名湯旅館で味わう至高の美食ステイを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '産地直結！熟成サーロイン・ランプ・ヒレの贅沢食べ比べ',
        desc: '流通量が少なく都市部では滅多に出合えない希少部位を、現地の料理長が最高の火入れで提供する極上肉ディナーを堪能できます。'
      },
      {
        title: '赤身肉に豊富に含まれる旨味成分タウリン＆鉄分で身体の中から元気に',
        desc: '高タンパク低カロリーで疲労回復効果の高い極上赤身肉と、名湯の温浴効果により、身体の内外からエネルギーを満たすヘルシー旅が叶います。'
      },
      {
        title: 'ふるさと納税で高単価な和牛会席プランをスマートに賢く還元',
        desc: '普段は敷居の高い高級和牛フルコース付きのプレミアム宿泊プランも、楽天ふるさと納税の宿泊クーポンを活用すれば最大30%オフでお得に満喫できます。'
      }
    ],
    items: [
      {
        key: 'beef_tankaku',
        themeTitle: '岩手県久慈市・岩手町ふるさと納税：大自然の放牧が育む赤身の最高峰「いわて短角牛」ステーキと北東北の名湯',
        themeDesc: '北上山地の雄大な草原でのびのびと育つ日本短角種。赤身肉の旨味が極限まで凝縮されたフィレ肉やランプ肉の薪火焼き・ステーキを味わい、豊かな森に囲まれた温泉宿でゆったりと癒やしの夜を過ごせます。'
      },
      {
        key: 'beef_akagyu_aso',
        themeTitle: '熊本県阿蘇市・南阿蘇村ふるさと納税：阿蘇の大パノラマと野草を食む健康美「くまもとあか牛」溶岩焼き＆黒川・内牧温泉',
        themeDesc: '阿蘇カルデラの千古の自然が生み出した「くまもとあか牛」。きめ細やかな赤身に適度なサシが入り、阿蘇の溶岩プレートや炭火で香ばしく焼き上げたステーキは絶品。大観峰の絶景や湯量豊富な名湯露天風呂とともに堪能できます。'
      },
      {
        key: 'beef_tosa_aka',
        themeTitle: '高知県土佐町・大豊町ふるさと納税：年間出荷数百頭の奇跡の和牛「土佐あかうし」と四国山地の隠れ家名宿',
        themeDesc: '高知県内のみで改良・飼育され「幻の和牛」と呼ばれる土佐褐毛牛。赤身のコクと後味さっぱりの上質なサシが黄金比で調和したローストビーフや陶板焼きを、高知の地酒とともに心ゆくまで味わう贅沢な美食体験です。'
      }
    ],
    crossLinks: [
      { title: '日本三大和牛（松阪・神戸・近江）極上すき焼き宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-wagyu-beef-sukiyaki-stay', desc: '日本を代表する最高峰黒毛和牛の至高ステイ。' },
      { title: '日本海獲れたて活本松葉ガニ・越前ガニ会席宿×ふるさと納税完全ガイド', url: '/furusato-tax-echizen-matsuba-crab-onsen-stay', desc: '冬の日本海が誇る極上ブランド蟹フルコース。' },
      { title: '天然クエ鍋＆幻の高級魚グルメ宿×ふるさと納税完全ガイド', url: '/furusato-tax-kue-gourmet-luxury-fish-stay', desc: '南紀白浜・五島列島・高知室戸の本クエ会席。' }
    ]
  },
  {
    slug: 'furusato-tax-starry-sky-open-air-bath-observatory-stay',
    title: '満天の星空露天風呂＆天体ドーム天文台リゾート×ふるさと納税完全ガイド【2026年最新】長野阿智村・岡山美星町・沖縄石垣島',
    desc: '夜空を埋め尽くす天然のプラネタリウム！長野「阿智村」環境省認定・日本一の星空ナイトツアーと昼神温泉美肌の湯、岡山「美星町」光害防止条例が守る満天の星と天文台の郷宿、沖縄「石垣島」国際ダークスカイ認定・星空保護区のラグジュアリーリゾート。息をのむ星空と極上ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '満天の星空露天風呂＆天体ドーム天文台リゾート×ふるさと納税ガイド',
    badge: '星空露天風呂・天文台リゾート特集',
    leadTitle: '見上げれば降るような満天の天の川。宇宙の神秘に包まれるナイトリトリートステイ',
    leadDesc: '人工の街明かりから離れ、澄んだ空気と高い標高、あるいは街ぐるみで光害防止に取り組む地域にだけ広がる奇跡の夜空。長野県阿智村の「日本一の星空ナイトツアー」、日本初の光害防止条例を制定した岡山県美星町、そしてアジアでも屈指の美しさを誇り国際ダークスカイ協会に「星空保護区」として認定された沖縄県八重山・石垣島。天体望遠鏡を備えた専用ドームや、湯船に浸かりながら星の瞬きを眺める星空露天風呂、星空ガイドによる星空観賞会など、夜を楽しむコンテンツが満載の厳選ホテルを楽天ふるさと納税でお得に予約し、神秘的な星空の旅へ出かけましょう。',
    merits: [
      {
        title: '照明を落とした専用デッキや星空露天風呂から天の川を独り占め',
        desc: '宿の敷地内から肉眼で天の川や流れ星を鑑賞可能。温かい温泉に浸かりながら贅沢に夜空を見上げる贅沢な時間が流れます。'
      },
      {
        title: '本格天体望遠鏡や専門ガイドによる星空解説アクティビティが充実',
        desc: '土星の輪や月のクレーターを観察できる本格的な望遠鏡や、星空準案内人による星座の生解説など、知的好奇心を満たす体験が揃っています。'
      },
      {
        title: '新月期や流星群の時期に合わせてふるさと納税クーポンでスマート予約',
        desc: 'ペルセウス座流星群やふたご座流星群、天の川が最も濃い季節を狙って、ふるさと納税クーポンで賢くお得にプレミアムステイを楽しめます。'
      }
    ],
    items: [
      {
        key: 'star_achi',
        themeTitle: '長野県阿智村ふるさと納税：環境省認定「日本一の星空」ナイトツアーと美肌効果抜群の昼神温泉露天風呂',
        themeDesc: '標高1400mのヘブンスそのはらでゴンドラに乗り、山頂の明かりが一斉に消える瞬間の感動体験。宿ではとろとろの美肌の湯・昼神温泉露天風呂から夜空を眺め、信州プレミアム牛や岩魚の塩焼きを味わう極上の山岳リゾートです。'
      },
      {
        key: 'star_bisei',
        themeTitle: '岡山県井原市美星町ふるさと納税：星空を守る条例の街「美星天文台」と吉備高原の澄んだ空気に抱かれる隠れ家宿',
        themeDesc: '美しい星空を守るため日本で最初に光害防止条例を定めた美星町。国内最大級の一般公開望遠鏡を備える美星天文台で宇宙の深淵を覗き、高原の清らかな恵みと吉備の旬の味覚を心ゆくまで堪能できます。'
      },
      {
        key: 'star_ishigaki',
        themeTitle: '沖縄県石垣市ふるさと納税：国内初「星空保護区」認定・南十字星が瞬く八重山諸島のオーシャンビューラグジュアリー',
        themeDesc: '全天88星座中84星座を観測できる奇跡の島・石垣島。波の音をBGMにプライベートビーチやプールサイドから眺める南十字星と天の川は圧巻。八重山郷土料理と石垣牛を堪能し、南国の心地よい潮風に包まれる非日常ステイです。'
      }
    ],
    crossLinks: [
      { title: '日本三大星空・天体観測リゾート×ふるさと納税完全ガイド', url: '/furusato-tax-starry-sky-astronomy-retreat-stay', desc: '阿智村・八ヶ岳・大山の星空リトリート。' },
      { title: '日本三大夜景＆天空スカイラウンジホテル×ふるさと納税完全ガイド', url: '/furusato-tax-three-major-night-view-luxury-hotel-stay', desc: '長崎・神戸・函館の1000万ドル夜景ステイ。' },
      { title: '日本三大秘境温泉＆隠れ家名宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-hidden-hot-springs-retreat-stay', desc: '祖谷・椎葉・白川郷の秘境湯治ステイ。' }
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
