const fs = require('fs');
const path = require('path');

const seasonalHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

// 4記事の詳細データ定義 (Round 77 - 300記事突破！)
const articleConfigs = [
  {
    slug: 'furusato-tax-japanese-garden-view-luxury-ryokan-stay',
    componentName: 'FurusatoJapaneseGardenViewStayPage',
    tag: '名園を愛でる日本庭園ビュー名門温泉宿特集',
    title: '客室から名園を愛でる贅沢！日本庭園ビュー＆伝統数寄屋造り名門温泉旅館×ふるさと納税完全ガイド【2026年最新】島根玉造・佐賀武雄・石川加賀',
    metaTitle: '客室から名園を愛でる贅沢！日本庭園ビュー＆伝統数寄屋造り名門温泉旅館×ふるさと納税完全ガイド【2026年最新】島根玉造・佐賀武雄・石川加賀',
    shortTitle: '日本庭園ビュー＆名門数寄屋造り温泉宿特集',
    description: '苔むした庭石、錦鯉が泳ぐ池、四季折々に色づく名木。日本の美意識の結晶である名庭園を望む名旅館を厳選！足立美術館にも通じる端正な名庭園と美肌温泉「玉造温泉 佳翠苑 皆美」、国登録記念物・御船山楽園五十万平米の庭園とチームラボの常設アートが融合する「武雄温泉 御船山楽園ホテル」、加賀百万石の伝統庭園と三つの大浴場十八湯めぐり「山代温泉 ゆのくに天祥」。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '名園を愛でる日本庭園ビュー名門温泉宿特集',
    leadTitle: '障子を開ければ、そこは一幅の山水画。木々の擦れ合う音と水のせせらぎに心洗われる庭園名宿の極みへ',
    leadText: '手入れの行き届いた青々とした苔、優雅に水面を揺らす錦鯉、春の桜、初夏の新緑、秋の紅葉、そして冬の雪吊り――日本の美意識と四季の移ろいが凝縮された「日本庭園」。客室の広縁に腰掛け、温かいお茶を片手に窓枠を一輪の額縁に見立てて名園を眺める時間は、慌ただしい現代社会を生きる私たちにとって、心の平穏を取り戻す最高の贅沢です。アメリカの庭園専門誌で長年日本一に輝く足立美術館の庭園美にも通じる、出雲の伝統と格式を誇る「玉造温泉 佳翠苑 皆美」、佐賀・武雄のシンボル御船山の断崖を借景に広がる五十万平米もの壮大な国登録記念物庭園と、アート集団チームラボによる幻想的な森の展示が世界中から称賛される「武雄温泉 御船山楽園ホテル」、そして加賀百万石の雅な文化を継承し、緑豊かな庭園と自家源泉の多彩な湯処を誇る石川県「山代温泉 ゆのくに天祥」。庭園美と伝統の数寄屋建築、美肌の名湯が一体となった至高の名旅館を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質自己負担2,000円で賢く予約し、日本の粋と静寂を愛でる旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '窓枠が一幅の日本画に！部屋やロビーから四季折々の名庭園を心ゆくまで鑑賞',
        body: '石組、築山、枯山水、池泉回遊式など、名作庭家が意匠を凝らした庭園美。朝靄が立ち込める静寂の朝から、夕暮れのライトアップまで、時間の移ろいとともに変化する表情を特等席で独占できます。'
      },
      {
        num: '02',
        title: '庭園散策で浴びるマイナスイオン！鳥のさえずりと澄んだ空気でリフレッシュ',
        body: '草木が放つ豊かなフィトンチッドを感じながら、朝の清々しい空気の中で庭園をそぞろ歩き。砂利を踏みしめる音や木漏れ日の揺らめきが、日頃のストレスや脳疲労を綺麗に洗い流してくれます。'
      },
      {
        num: '03',
        title: '加賀懐石、出雲郷土料理、佐賀牛！庭園を眺めながら味わう四季の美食会席',
        body: '九谷焼や有田焼、島根の漆器など、美しい伝統工芸の器に盛り付けられた目にも鮮やかな会席料理。旬の海の幸と厳選されたブランド和牛が、五感を満たす至福の晩餐を演出します。'
      }
    ],
    hotelDetails: [
      {
        key: 'shimane_garden',
        badge: '島根県松江市・足立美術館至近！米庭園ランキング上位常連の皆美館伝統を継ぐ名門宿',
        rank: '厳選名宿 第1選',
        desc: '日本最古の美肌温泉として名高い玉造温泉に位置し、米国の庭園専門誌ランキングで常に上位に選ばれる松江「皆美館」の伝統を受け継ぐ格式高い名門旅館。館内に一歩足を踏み入れると、白砂青松の美しい日本庭園が広がり、訪れる人々を格調高い和の美意識で迎えます。出雲風土記に「ひとたび濯げば容姿端正になり、再び浴すれば万病ことごとく癒ゆ」と記された神の湯を大浴場や露天風呂で堪能。夕食には日本海の獲れたて松葉蟹やのどぐろ、しまね和牛など山陰の山海の恵みを散りばめた華やかな会席料理をお楽しみいただけます。'
      },
      {
        key: 'saga_garden',
        badge: '佐賀県武雄市・国登録記念物・御船山楽園五十万平米の壮大庭園とチームラボ常設展示',
        rank: '厳選名宿 第2選',
        desc: '武雄領第28代領主・鍋島茂義公が約3年をかけて造園した五十万平米もの広大無辺な国登録記念物「御船山楽園」の麓に佇む唯一無二のホテル。御船山のダイナミックな岩肌を背景に、春の桜とツツジ、秋の錦秋の紅葉など息をのむ絶景が広がります。ロビーに足を踏み入れると、世界的アート集団チームラボによる常設ランプアート作品が幻想的な光で迎えてくれます。武雄温泉の柔らかな名湯大浴場「らかんの湯」はサウナシュラン殿堂入りのサウナを備え、世界基準のアート・庭園・サウナリトリートを体験できます。'
      },
      {
        key: 'ishikawa_garden',
        badge: '石川県加賀市・加賀百万石の情緒！美しき日本庭園と三つの大浴場十八湯めぐりの名宿',
        rank: '厳選名宿 第3選',
        desc: '開湯千三百年を誇る名湯・山代温泉の中心に位置し、広大な敷地に見事な日本庭園を抱く北陸を代表する名旅館。敷地内に自家源泉を持ち、趣の異なる3つの大浴場と露天風呂で「十八湯めぐり」を心ゆくまで満喫できます。季節ごとに表情を変える中庭の緑を望みながらいただく会席料理は、日本海の新鮮な海の幸や加賀野菜、能登牛を取り入れ、伝統工芸・九谷焼や山中塗の器で華麗に供されます。行き届いた温かなおもてなしと充実した温泉施設で、家族旅行から夫婦の記念日旅まで最高峰の満足度を誇ります。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-three-great-daimyo-gardens-stay', title: '【日本三大名園・大名庭園×ふるさと納税】兼六園・後楽園・偕楽園の名宿' },
      { slug: 'furusato-tax-art-museum-architecture-luxury-hotel-stay', title: '【美術館ホテル＆現代アートリゾート×ふるさと納税】直島・箱根・青森' },
      { slug: 'furusato-tax-tangible-cultural-property-architectural-ryokan-stay', title: '【登録有形文化財の宿×ふるさと納税】匠の建築美と歴史を味わう名門旅館' },
      { slug: 'furusato-tax-private-room-open-air-bath-luxury-stay', title: '【客室露天風呂付き客室×ふるさと納税】修善寺・箱根・嵐山の大人の隠れ宿' }
    ]
  },
  {
    slug: 'furusato-tax-night-sky-cocktail-bar-lounge-hotel-stay',
    componentName: 'FurusatoNightSkyBarLoungeStayPage',
    tag: '天空スカイバー＆クラブラウンジ夜景ホテル特集',
    title: '地上数十階から望む宝石の夜景パノラマ＆天空スカイバー・クラブラウンジ名門ホテル×ふるさと納税完全ガイド【2026年最新】横浜・長崎・大阪',
    metaTitle: '地上数十階から望む宝石の夜景パノラマ＆天空スカイバー・クラブラウンジ名門ホテル×ふるさと納税完全ガイド【2026年最新】横浜・長崎・大阪',
    shortTitle: '天空スカイバー＆クラブラウンジ夜景ホテル特集',
    description: 'きらめく摩天楼の夜景と上質なカクテルに酔いしれる大人の夜！大観覧車が目の前に輝くバルコニーとバーを誇る「横浜ベイホテル東急」、世界新三大夜景のすり鉢状パノラマを望むクラブラウンジ「ガーデンテラス長崎ホテル＆リゾート」、地上200m大阪中之島の夜景と現代アートが融合する天空ホテル「コンラッド大阪」。極上のナイトビューバー体験を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '天空スカイバー＆クラブラウンジ夜景ホテル特集',
    leadTitle: 'グラスの中で揺れる氷の音、眼下に広がる無数の光の絨毯。日常の遥か上空で過ごす、艶やかな大人のナイトタイムへ',
    leadText: 'エレベーターで一気に高層階へ昇ると、そこに広がるのは息を呑むほどドラマチックな夜景パノラマ。街の喧騒が静寂へと変わり、眼下に広がる宝石箱のような都市の灯りや港の漁火を眺めながら、バーテンダーが作る極上のカクテルや上質なシャンパンを傾ける――「天空スカイバー＆クラブラウンジ付きホテル」での滞在は、大切な人との記念日やプロポーズ、自分へのご褒美にふさわしい最高峰のロマンチックな体験です。横浜みなとみらいの中心に位置し大観覧車のイルミネーションを目の前に望むバー「ジャックス」やバルコニー付き客室を備える「横浜ベイホテル東急」、稲佐山の中腹に建ち世界新三大夜景に選ばれた長崎の港夜景を一望する全室クラブフロア仕様の「ガーデンテラス長崎ホテル＆リゾート」、そして中之島フェスティバルタワーの最上層に位置し地上200mから大阪の摩天楼を見下ろすラグジュアリーホテル「コンラッド大阪」。特別な夜をさらに輝かせる絶景ホテルを、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して実質自己負担2,000円で賢く予約し、大人の贅沢な夜景ステイへ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '地上数百メートルからの圧倒的パノラマ！宝石を散りばめたような夜景を一望',
        body: '視界を遮るもののない大パノラマウィンドウ越しに広がる大都市や港町の夜景。夕暮れのマジックアワーから漆黒の夜へと移り変わるドラマチックな光景は、時間を忘れて見惚れる美しさです。'
      },
      {
        num: '02',
        title: 'クラブラウンジで楽しむ無料のシャンパン＆オードブル！至福のイブニングカクテル',
        body: '専用クラブラウンジでは、アフタヌーンティーから夕方のカクテルタイムまで上質なドリンクや一口オードブルが無料で楽しめる特典も。プライベート感あふれる空間でゆったりと大人の時間を過ごせます。'
      },
      {
        num: '03',
        title: 'トップバーテンダーが創るオリジナルカクテルと、贅を尽くしたディナー',
        body: '土地の銘酒や旬のフルーツを使ったオリジナルカクテル、ウイスキーの希少ボトル。美しい夜景を眺めながらいただく本格フレンチや鉄板焼きディナーが、特別な夜を生涯の思い出へと昇華させます。'
      }
    ],
    hotelDetails: [
      {
        key: 'yokohama_sky_bar',
        badge: '神奈川県横浜市・大観覧車コスモクロックが目の前！バルコニー付き客室と歴史あるメインバー',
        rank: '厳選名宿 第1選',
        desc: '横浜みなとみらいの中心「クイーンズスクエア横浜」内に位置し、横浜港と大観覧車「コスモクロック21」を目前に望む名門ホテル。みなとみらい地区で唯一バルコニーを擁する客室からは、潮風を感じながら輝く夜景を間近に独占できます。館内には横浜の社交場として歴史を刻むシックなメインバー「ジャックス」や、フレンチの名店「クイーン・アリス」を完備。きらびやかな夜景を眺めながらトップバーテンダーが創るカクテルを味わう、ロマンチックな大人の横浜ステイが叶います。'
      },
      {
        key: 'nagasaki_sky_bar',
        badge: '長崎県長崎市・世界新三大夜景を望む稲佐山中腹！全室クラブフロア仕様のラグジュアリーリゾート',
        rank: '厳選名宿 第2選',
        desc: '世界新三大夜景に選ばれた長崎港のすり鉢状の夜景を一望する稲佐山の中腹に佇む、建築家・隈研吾氏設計によるスタイリッシュなデザイナーズリゾート。全客室が広々としたオーシャン＆夜景ビューのテラス付きで、宿泊者は専用クラブラウンジでシャンパンや長崎銘菓を自由に楽しめます。最上階の天空バーや創作鉄板焼きレストランからは、宝石箱をひっくり返したかのような長崎1000万ドルの夜景が広がり、日常のすべてを忘れさせる非日常の贅沢に包まれます。'
      },
      {
        key: 'osaka_sky_bar',
        badge: '大阪府大阪市・地上200mから大阪の摩天楼を一望！現代アートと天空ラウンジが織りなす最高峰ホテル',
        rank: '厳選名宿 第3選',
        desc: '大阪・中之島フェスティバルタワー・ウエストの最高層階（33〜40階）に位置する、ヒルトングループ最高峰のラグジュアリーホテル。地上200mに位置する40階ロビーに降り立つと、空に浮かんでいるかのような圧倒的なパノラマビューが広がります。人気バーラウンジ「40スカイバー＆ラウンジ」では、美しい夜景とともに生演奏やシグネチャーカクテルを堪能。全客室が50平米以上の贅沢な空間で、スタイリッシュなインテリアと最新設備に囲まれた極上の都会派バカンスを満喫できます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-three-major-night-view-luxury-hotel-stay', title: '【日本三大夜景ホテル×ふるさと納税】函館・神戸・長崎の宝石パノラマ名宿' },
      { slug: 'furusato-tax-anniversary-luxury-suite-villa-stay', title: '【記念日・スイートヴィラ×ふるさと納税】一棟貸切と絶景露天の特別ステイ' },
      { slug: 'furusato-tax-resort-infinity-pool-luxury-hotel-stay', title: '【極上インフィニティプール×ふるさと納税】熱海・恩納村・別府リゾート' },
      { slug: 'furusato-tax-art-museum-architecture-luxury-hotel-stay', title: '【美術館ホテル＆現代アート×ふるさと納税】直島・箱根強羅・青森の名宿' }
    ]
  },
  {
    slug: 'furusato-tax-hanabi-fireworks-view-room-hotel-stay',
    componentName: 'FurusatoHanabiFireworksViewStayPage',
    tag: '部屋から花火鑑賞＆特等席花火ビューホテル特集',
    title: '混雑ゼロで大迫力の花火を独占！部屋から花火が見える特等席客室ホテル×ふるさと納税完全ガイド【2026年最新】熱海・洞爺湖・諏訪湖',
    metaTitle: '混雑ゼロで大迫力の花火を独占！部屋から花火が見える特等席客室ホテル×ふるさと納税完全ガイド【2026年最新】熱海・洞爺湖・諏訪湖',
    shortTitle: '部屋から花火が見える特等席客室ホテル特集',
    description: '夜空に咲き乱れる大輪の光を、お風呂上がりやベッドの上から特等席で！年間十数回開催される熱海海上花火大会が目前の全室オーシャンビュー「熱海後楽園ホテル」、4月〜10月の毎夜打ち上がるロングラン花火を全室レイクビュー客室から鑑賞「洞爺サンパレス リゾート＆スパ」、諏訪湖祭湖上花火を望む二つの源泉の名宿「信州上諏訪温泉 諏訪別邸 朱白」。混雑を回避して楽しむ花火ビュー温泉旅を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '部屋から花火鑑賞＆特等席花火ビューホテル特集',
    leadTitle: '夜空を切り裂く轟音、窓いっぱいに広がる大輪の光のシャワー。誰にも邪魔されずグラス片手に花火を仰ぐ感動ステイへ',
    leadText: '日本の夏の風物詩であり、近年はオールシーズンで開催されることも多い「花火大会」。しかし、現地までの大混雑や帰りの満員電車、場所取りの苦労に疲れてしまうことも少なくありません。そんな悩みを完全に解消してくれるのが「客室やホテル専用テラスから花火が見える花火ビューホテル」での宿泊です。浴衣に着替え、お風呂上がりに冷たいビールやシャンパンを片手に、部屋の窓やバルコニーから夜空一面に広がる大輪の花火を見上げる贅沢――混雑とは完全に無縁のプライベート空間で、身体の芯にまで響く重低音と眩い光の競演を独占できる感動は、何ものにも代えがたい一生の思い出になります。すり鉢状の地形が生み出す天然のスタジアム音響と年間十数回の海上花火大会を目前で鑑賞できる「熱海後楽園ホテル」、4月下旬から10月末まで毎夜欠かさず湖上に花火が打ち上げられる「洞爺サンパレス リゾート＆スパ」、そして全国屈指の規模を誇る諏訪湖の花火を目の前で望み二つの名湯源泉を誇る「信州上諏訪温泉 諏訪別邸 朱白」。花火シーズンの争奪戦となる特等席宿を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して実質自己負担2,000円で賢く予約し、極上の花火温泉旅行へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '混雑ゼロ＆場所取り不要！人混みを避けて自分たちの部屋でゆったり花火鑑賞',
        body: '帰りの電車や駐車場の渋滞を一切気にすることなく、花火の打ち上げギリギリまで部屋で寛ぐことが可能。小さなお子様やご年配の方も安心して迫力満点の花火を鑑賞できます。'
      },
      {
        num: '02',
        title: '露天風呂に浸かりながらの花火鑑賞！湯船から見上げる大輪の光のアート',
        body: '温泉に肩まで浸かりながら、夜空に打ち上がる花火と湖面・海面に反射するきらめきを眺める至高の湯浴み。温かい温泉と爽快な夜風が織りなす感動体験が待っています。'
      },
      {
        num: '03',
        title: '花火の余韻に浸りながら味わう豪華ディナーと冷たい地酒・ビール',
        body: '伊豆の金目鯛や北海道の海の幸、信州牛など、花火の前後にいただく贅沢な会席やビュッフェ。感動的な花火の思い出とともに乾杯するひとときは格別の美味しさです。'
      }
    ],
    hotelDetails: [
      {
        key: 'atami_hanabi_room',
        badge: '静岡県熱海市・熱海海上花火大会の特等席！目の前の海から打ち上がる大迫力オーシャンビュー',
        rank: '厳選名宿 第1選',
        desc: '熱海港の突端に位置し、熱海名物の海上花火大会の打ち上げ場所に最も近い抜群のロケーションを誇る名門リゾートホテル。全客室が海に面しており、客室の窓やバルコニーからは夜空と海面を埋め尽くす大迫力のスターマインやフィナーレの「大空中ナイアガラ」を真正面から鑑賞できます。山に囲まれた熱海ならではの重低音の反響が客室にまで心地よく響き渡り、大迫力の臨場感を体感。敷地内の絶景露天風呂やインフィニティ温泉「オーシャンスパ Fuua」とともに、年間を通じて感動の花火ステイが叶います。'
      },
      {
        key: 'toya_hanabi_room',
        badge: '北海道壮瞥町・4月〜10月毎夜開催！洞爺湖ロングラン花火大会を全室レイクビュー客室から鑑賞',
        rank: '厳選名宿 第2選',
        desc: '支笏洞爺国立公園の美しい洞爺湖畔に建ち、道内最大級の屋内プール「Water Land」と絶景温泉大浴場を誇る大型リゾートホテル。4月下旬から10月末まで毎夜湖上を移動しながら打ち上がる「洞爺湖ロングラン花火大会」を、全室レイクビューの客室や湖畔テラスから目の前に鑑賞できます。湖面に鮮やかに映り込む花火の光と静かな波音がロマンチックな夜を演出。夕食には北海道の豊かな海と山の幸を取り入れた豪華ビュッフェが並び、子どもから大人まで笑顔になれる花火リゾートバカンスを満喫できます。'
      },
      {
        key: 'suwa_hanabi_room',
        badge: '長野県諏訪市・諏訪湖の花火を目前に望む湖畔の特等席！朱の泉と白の泉の二つの源泉を持つ名宿',
        rank: '厳選名宿 第3選',
        desc: '信州屈指の景勝地・諏訪湖の湖畔通りに佇み、諏訪湖祭湖上花火大会や夏の毎夜花火を目前で鑑賞できる絶好のロケーションを誇る温泉宿。客室の大きな窓からは諏訪湖の穏やかな水面と対岸のアルプスの山並みが広がり、夜には湖上花火が夜空を幻想的に染め上げます。宿の最大の自慢は、茶褐色の「朱の泉」と無色透明の「白の泉」という二つの異なる自家源泉を引いた展望大浴場。信州サーモンや信州牛を取り入れた手作り会席料理とともに、心温まる信州の花火湯治をお過ごしいただけます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-three-great-fireworks-resort-stay', title: '【日本三大花火大会×ふるさと納税】大曲・土浦・長岡を特等席で観る名宿' },
      { slug: 'furusato-tax-lakeview-onsen-resort-hotel-stay', title: '【絶景レイクビュー温泉リゾート×ふるさと納税】琵琶湖・洞爺湖・箱根芦ノ湖' },
      { slug: 'furusato-tax-oceanfront-wave-sound-healing-stay', title: '【オーシャンフロント波音の宿×ふるさと納税】海と温泉が一体化する極上宿' },
      { slug: 'furusato-tax-resort-infinity-pool-luxury-hotel-stay', title: '【極上インフィニティプール×ふるさと納税】熱海・恩納村・別府リゾート' }
    ]
  },
  {
    slug: 'furusato-tax-footbath-cafe-ashiyu-terrace-onsen-stay',
    componentName: 'FurusatoFootbathCafeAshiyuStayPage',
    tag: '清流足湯カフェ＆癒やしのベーカリーテラス宿特集',
    title: '清流のせせらぎと温もり足湯カフェ！ベーカリーテラス＆足湯散策リゾート温泉宿×ふるさと納税完全ガイド【2026年最新】伊豆吉奈・黒川温泉・上高地',
    metaTitle: '清流のせせらぎと温もり足湯カフェ！ベーカリーテラス＆足湯散策リゾート温泉宿×ふるさと納税完全ガイド【2026年最新】伊豆吉奈・黒川温泉・上高地',
    shortTitle: '足湯カフェ＆癒やしのベーカリーテラス名宿特集',
    description: '服を着たまま気軽に名湯の温もりと絶景を愉しむ！吉奈温泉の清流沿いに広がる名物足湯カフェ＆焼きたてベーカリー「東府や Resort＆Spa-Izu」、田の原川のせせらぎを望む足湯と大露天風呂仙人風呂「黒川温泉 やまびこ旅館」、北アルプスの絶景を仰ぐ樽風呂足湯と自家源泉かけ流し「上高地温泉ホテル」。美味しいスイーツやパンとともに癒やされる特別な休日を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '清流足湯カフェ＆癒やしのベーカリーテラス宿特集',
    leadTitle: '足先からじんわり広がる名湯のぬくもり、清流のせせらぎ、香ばしい焼きたてパンの薫り。五感で癒やされる足湯リゾートへ',
    leadText: '大浴場まで行かなくても、服を着たまま靴下を脱ぐだけで、気軽に温泉の温もりと効能を体感できる「足湯（あしゆ）」。近年、その足湯と洗練されたカフェやテラスが融合した「足湯カフェ＆ベーカリーテラス」が、女性旅やカップル、ファミリーの温泉旅行先として絶大な人気を集めています。足先を温かい名湯に浸しながら、目の前を流れる清流や豊かな森を眺め、自家製酵母で焼き上げた香ばしいパンや淹れたてのハンドドリップ珈琲、季節のスイーツを味わう時間は、まさに心身がとろけるような至福のひとときです。伊豆最古の温泉郷・吉奈の清流沿いに広がる三万六千坪の敷地に名物「ベーカリー＆カフェ足湯テラス」を擁する極上リゾート「東府や Resort＆Spa-Izu」、阿蘇・黒川温泉で田の原川のせせらぎを望む足湯と名物「仙人風呂」で温泉情緒を味わい尽くす「やまびこ旅館」、そして特別名勝・上高地の大自然の中で梓川の清流と北アルプスの山並みを望む屋外樽風呂足湯を備えた「上高地温泉ホテル」。日常の疲れを優しく解きほぐす癒やしの足湯テラス宿を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質自己負担2,000円で賢く予約し、爽やかな休日へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '服を着たまま気軽にリフレッシュ！足元から全身の血流が巡る「足湯」の温浴効果',
        body: '「第二の心臓」と呼ばれる足を温めることで、全身の血行が劇的に促進され、歩き疲れや冷え、むくみがすっきりと解消。メイクを落とさず何度でも気軽に名湯を楽しめる手軽さも魅力です。'
      },
      {
        num: '02',
        title: '焼きたてパンやご当地スイーツ！清流テラスで味わう格別のカフェタイム',
        body: 'ホテル専属ベーカーが焼き上げる芳醇なパンやサンドイッチ、地元素材のジェラートやクラフトドリンク。川の音と鳥のさえずりをBGMにいただくテラスでの朝食やランチは格別の美味しさです。'
      },
      {
        num: '03',
        title: '大自然に抱かれる本格露天風呂と、地産地消の厳選ディナーで完璧な一日を',
        body: 'カフェタイムの後は、宿自慢の源泉かけ流し大浴場や露天風呂で本格的な湯浴み。伊豆牛や阿蘇あか牛、信州サーモンなど各地の滋味を凝縮した贅沢な会席料理が旅の夜を豊かに彩ります。'
      }
    ],
    hotelDetails: [
      {
        key: 'izu_ashiyu',
        badge: '静岡県伊豆市・三万六千坪の清流リゾート！大人気「足湯カフェ＆ベーカリー」と自家源泉掛け流し',
        rank: '厳選名宿 第1選',
        desc: '中伊豆・吉奈温泉の清流・吉奈川沿いに三万六千坪もの広大な敷地を誇る、日本の伝統美とモダンリゾートが融合した名宿。敷地内にある「Bakery & Table 東府や」の足湯テラス席は全国から観光客が訪れる大人気スポットで、清流を眺めながら足湯に浸かり、米粉のカレーパンや自家製スイーツを堪能できます。全客室が川沿いやヴィラタイプで温泉内風呂や露天風呂を完備。男女別の大浴場や貸切露天風呂では徳川家康の側室・お万の方ゆかりの「子宝の湯」として名高い名湯を満喫でき、伊豆の四季の味覚を彩る和会席とともに大人の優雅な休日をお過ごしいただけます。'
      },
      {
        key: 'kurokawa_ashiyu',
        badge: '熊本県南小国町・黒川温泉随一の広さを誇る仙人風呂！田の原川沿いの足湯と肥後あか牛会席',
        rank: '厳選名宿 第2選',
        desc: '黒川温泉を流れる田の原川の渓流沿いに佇み、茅葺き屋根の門をくぐると看板犬が温かく出迎えてくれる風情豊かな名旅館。川沿いには誰でも気軽に立ち寄れる足湯が設けられており、川のせせらぎに耳を澄ませながら足元からポカポカと温まることができます。宿の名物は黒川温泉で一番の広さを誇る大露天風呂「仙人風呂」や立ち湯、プライベートな貸切風呂。夕食には熊本名物の馬刺しや肥後あか牛のステーキ、地元小国の高原野菜を使った心尽くしの会席料理が並び、温かな九州の温泉情緒に包まれます。'
      },
      {
        key: 'nagano_ashiyu',
        badge: '長野県松本市・特別名勝上高地！梓川の絶景を望む樽風呂足湯と三つの自家源泉かけ流し',
        rank: '厳選名宿 第3選',
        desc: '神々が降り立つ地と称される北アルプスの特別名勝・上高地の奥に位置し、開湯百四十余年の歴史を誇る老舗温泉リゾートホテル。梓川の清流と霞沢岳を仰ぐウッドデッキには趣ある木製の「樽風呂足湯」が設置され、上高地トレッキングで疲れた足を心地よい名湯で癒やせます。上高地で唯一の3本の自家源泉を持ち、加水・加温一切なしの源泉かけ流し露天風呂を完備。夕食には信州牛や岩魚、安曇野の採れたて野菜を使った手作り和食会席を味わえ、手つかずの大自然と名湯に身を委ねる極上の山岳リトリートが叶います。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-mountain-stream-open-air-bath-healing-stay', title: '【清流せせらぎ渓流露天風呂×ふるさと納税】奥入瀬・黒川・塩原の絶景癒やし宿' },
      { slug: 'furusato-tax-sweets-cafe-wagashi-retro-onsen-stay', title: '【名物和菓子＆カフェ巡り温泉宿×ふるさと納税】甘味と名湯のレトロ旅' },
      { slug: 'furusato-tax-retro-onsen-town-yukata-walk-stay', title: '【レトロ温泉街＆浴衣散策×ふるさと納税】石段街と湯煙情話の名宿' },
      { slug: 'furusato-tax-sotoyu-meguri-historic-onsen-town-stay', title: '【伝統の外湯めぐり＆浴衣下駄散策×ふるさと納税】城崎・野沢温泉・渋温泉' }
    ]
  }
];

function generateFullPageCode(cfg) {
  const pageHotels = seasonalHotels[cfg.slug] || {};

  const threePointsHtml = cfg.threePoints.map(pt => `
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  ${pt.num}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  ${pt.title}
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                ${pt.body}
              </p>
            </div>
  `).join('\n');

  const hotelCardsHtml = cfg.hotelDetails.map((det, idx) => {
    const h = pageHotels[det.key] || {};
    const hotelName = h.hotelName || '提携名門ホテル・旅館';
    const hotelImg = h.hotelImageUrl || 'https://img.travel.rakuten.co.jp/share/HOTEL/18848/18848.jpg';
    const reviewAvg = h.reviewAverage || '4.50';
    const reviewCount = h.reviewCount || '100';
    const address = (h.address1 || '') + (h.address2 || '');
    const access = h.access || '最寄り駅・インターチェンジより車または無料送迎あり';
    const minCharge = h.hotelMinCharge ? Number(h.hotelMinCharge).toLocaleString() : '15,000';
    const planUrl = h.affiliateUrl || `https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F${h.hotelNo}%2F${h.hotelNo}.html`;

    const cleanText = (h.userReview || '')
      .replace(/<[^>]*>/g, '')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/[\\`$"{}]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    const userReview = cleanText
      ? ('「' + cleanText.slice(0, 120) + '…」')
      : '訪れるすべてのお客様に心安らぐ贅沢な寛ぎの時間を提供し、高い評価を獲得している極上宿です。';

    return `
            {/* ホテルカード ${idx + 1} */}
            <article className="bg-white rounded-3xl shadow-lg border border-stone-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src="${hotelImg}"
                  alt="${hotelName}"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  ${det.rank}
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ ${reviewAvg} (${reviewCount}件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    ${det.badge}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    ${hotelName}
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    ${det.desc}
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    ${userReview}
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> ${address}</div>
                    <div><strong>アクセス:</strong> ${access}</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約${minCharge}円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="${planUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition shadow-sm"
                  >
                    楽天トラベルで空室・プランを見る ➔
                  </a>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm transition"
                  >
                    ふるさと納税クーポンを使う
                  </a>
                </div>
              </div>
            </article>
    `;
  }).join('\n');

  const relatedListHtml = cfg.relatedArticles.map(rel => `
              <li key="${rel.slug}">
                <Link href="/${rel.slug}" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">${rel.title}</span>
                </Link>
              </li>
  `).join('\n');

  return `import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '${cfg.metaTitle}',
  description: '${cfg.description}',
  keywords: [
    '${cfg.heroTag}',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '温泉旅館 予約',
    '絶景露天風呂 クーポン',
    '旬の味覚 宿泊割引'
  ],
  alternates: { canonical: baseUrl + '/${cfg.slug}' },
  openGraph: {
    title: '${cfg.metaTitle}',
    description: '${cfg.description}',
    url: baseUrl + '/${cfg.slug}',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function ${cfg.componentName}() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '${cfg.shortTitle}', item: baseUrl + '/${cfg.slug}' },
    ],
  };

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <Link href="/travel-savings-guide" className="hover:text-stone-900 underline transition">旅行節約ハブ</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">${cfg.shortTitle}</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            ${cfg.heroTag}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            ${cfg.title}
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            ${cfg.leadText}
          </p>
          <div className="flex flex-wrap gap-4 pt-4 border-t border-amber-900/50 text-xs text-amber-200/90 font-medium">
            <span>✓ 寄付額の最大30％相当が宿泊クーポンに</span>
            <span>✓ クーポン有効期限は発行からゆとりの3年間</span>
            <span>✓ すでに予約済みの宿泊にも「あとから割引」可能</span>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-sm md:text-base border border-amber-400/30"
            >
              楽天ふるさと納税トラベルクーポンを獲得する →
            </a>
            <Link
              href="/furusato-tax-travel-beginners-complete-guide"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-amber-200 font-bold px-5 py-3 rounded-2xl border border-amber-300/20 text-xs sm:text-sm transition"
            >
              📖 初めての方向け完全マニュアル
            </Link>
          </div>
        </header>

        {/* 3つの醍醐味セクション */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-6 flex items-center gap-3">
            <span className="text-amber-600 text-xl md:text-2xl">◆</span>
            この旅で体感したい3つの醍醐味
          </h2>
          <div className="grid gap-6">
${threePointsHtml}
          </div>
        </section>

        {/* 厳選名宿セクション */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-3 flex items-center gap-3">
              <span className="text-amber-600 text-xl md:text-2xl">◆</span>
              ふるさと納税で泊まる厳選名宿
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              楽天トラベルAPIから最新の実在宿データを取得。対象自治体のふるさと納税クーポンを利用して実質2,000円で泊まれる名宿です。
            </p>
          </div>

          <div className="space-y-8">
${hotelCardsHtml}
          </div>
        </section>

        {/* ふるさと納税クーポン使い方ステップ */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/80 shadow-sm mb-16">
          <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-800 mb-6 text-center">
            ふるさと納税トラベルクーポンの簡単3ステップ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">1</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">旅行先自治体に寄付</h3>
              <p className="text-xs text-stone-600 leading-relaxed">楽天ふるさと納税で泊まりたい宿がある市町村のトラベルクーポンを選んで寄付します。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">2</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">クーポンが付与される</h3>
              <p className="text-xs text-stone-600 leading-relaxed">寄付完了後、楽天トラベルのマイクーポンに即時〜数日で付与（有効期間は3年間）。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">3</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">予約時に割引適用</h3>
              <p className="text-xs text-stone-600 leading-relaxed">宿泊予約画面でクーポンを選択。すでに予約済みの宿でも「あとから適用」が可能です。</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/furusato-tax-travel-beginners-complete-guide"
              className="text-amber-800 font-bold text-xs sm:text-sm hover:underline"
            >
              👉 詳しいお金の流れやワンストップ特例の手順はこちらの完全マニュアルへ
            </Link>
          </div>
        </section>

        {/* 関連特集クロスリンク */}
        <section className="bg-stone-50 rounded-3xl p-8 border border-stone-200/80 mb-16">
          <h2 className="text-lg md:text-xl font-bold font-serif text-stone-800 mb-4">
            あわせて読みたい関連特集
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2">
${relatedListHtml}
          </ul>
        </section>

        {/* ハブページへの誘導フッター */}
        <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-amber-900/40 text-center mb-12">
          <h2 className="text-xl sm:text-2xl font-bold font-serif mb-3 text-amber-50">
            もっとお得に旅を楽しむためのハブページへ
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
            全国のテーマ別宿特集や、旅行費を最大30％安くする裏ワザを網羅した総合ガイドを公開中。
          </p>
          <Link
            href="/travel-savings-guide"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition text-sm"
          >
            🏨 旅行節約総合ハブページを見る ➔
          </Link>
        </div>

        {/* フッター */}
        <footer className="text-center text-xs text-stone-400 pt-6 border-t border-stone-200">
          <p>※表示内容は2026年9月時点の情報です。最新の宿泊プラン・クーポン対象施設は楽天トラベルにてご確認ください。</p>
          <p className="mt-2">
            <Link href="/" className="text-stone-500 hover:text-stone-800 underline transition">旅宿クラウド トップページへ</Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
`;
}

// 4記事のファイルを書き出し
for (const cfg of articleConfigs) {
  const targetDir = path.join(__dirname, 'src/app', cfg.slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const code = generateFullPageCode(cfg);
  fs.writeFileSync(path.join(targetDir, 'page.tsx'), code, 'utf8');
  console.log(`Generated: ${cfg.slug}/page.tsx (Chars: ${code.length})`);
}

console.log('Finished generating all 4 articles for Round 77 (303 articles total)!');
