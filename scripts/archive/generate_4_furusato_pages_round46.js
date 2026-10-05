const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-high-mountain-passes-stay',
    title: '日本三大急坂・天空峠道＆雲海パノラマ・絶景ドライブ温泉宿×ふるさと納税完全ガイド【2026年最新】渋峠・富士山スカイライン・温見峠',
    desc: '天空を突き抜けるワインディングロードと雲海パノラマ！群馬長野「渋峠」国道最高地点標高2172mと万座温泉日進舘、静岡「富士山スカイライン」表富士五合目へ駆け上がる天空道路とレンブラントプレミアム富士御殿場、岐阜福井「温見峠ルート」清流根尾谷と亀屋旅館。日本三大急坂・天空峠道の絶景ドライブと温泉ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大急坂・天空峠道＆雲海パノラマ温泉宿×ふるさと納税ガイド',
    badge: '日本三大急坂峠道・天空絶景特集',
    leadTitle: '雲を眼下に見下ろす標高2,000m超の天空路。愛車と駆け抜ける至高のドライブ旅',
    leadDesc: '険しい日本列島の山岳を越えるため、天空へと九十九折の急坂が続く「日本三大急坂・天空峠道」――志賀草津高原ルートの最高峰にして国道標高日本一（2,172m）を誇り朝日に輝く雲海と芳ヶ平湿原を見下ろす群馬長野の「渋峠」、富士山表口五合目（標高2,400m）へ向けて森林限界を抜け雲上ドライブが楽しめる静岡の「富士山スカイライン」、そして白山連峰の南端を越え深い原生林と清流根尾谷の秘境を貫く岐阜福井の「温見峠ルート」。息をのむ大パノラマを駆け抜けた後は、乳白色の硫黄泉や富士山一望の露天風呂に浸かり、上州牛・駿河湾海の幸・奥美濃の山菜会席を堪能する特別な休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '雲海と北アルプス・富士山を望む日本最高峰のワインディングパノラマ',
        desc: '早朝の澄んだ空気の中で広がる大雲海や、夕暮れのグラデーションに染まる山並みを独占鑑賞。'
      },
      {
        title: '万座温泉の名物湯治会席、御殿場高原ワイン＆静岡そだち和牛、奥美濃の飛騨牛と清流魚',
        desc: '標高差が生み出す極上の高原野菜と全国屈指の銘柄肉ディナーを、リゾートホテルや老舗旅館で堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで山岳リゾート・名湯ホテルをお得に予約',
        desc: 'ドライブ旅行やツーリング旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'pass_shibutoge',
        themeTitle: '群馬県草津町・嬬恋村ふるさと納税：渋峠の雲海ドライブ拠点・日本最高峰の硫黄濃度を誇る名湯「万座温泉 日進舘」',
        themeDesc: '標高1,800mに位置し、国道最高地点・渋峠への絶好のアクセス拠点を誇る名門湯宿。乳白色の天然硫黄泉を満喫できる展望露天風呂「極楽湯」からは満天の星空や山並みを望み、体に優しい四十種類の健康和洋バイキングを楽しめます。'
      },
      {
        key: 'pass_fuji',
        themeTitle: '静岡県御殿場市ふるさと納税：富士山スカイラインの出発点・富士山を正面に望む絶景リゾート「レンブラントプレミアム富士御殿場」',
        themeDesc: '富士山スカイライン入口に近く、富士山頂から裾野までを正面に見晴らすラグジュアリーホテル。富士の天然水を使った大浴場やサウナでドライブの疲れを癒やし、静岡県産食材と駿河湾の魚介を活かした極上フレンチ・ジャポネを堪能できます。'
      },
      {
        key: 'pass_nukumi',
        themeTitle: '岐阜県本巣市ふるさと納税：温見峠への玄関口・清流根尾川のほとりに佇む老舗「亀屋旅館」',
        themeDesc: '淡墨桜で有名な根尾谷に位置し、秘境峠・温見峠へのツーリングやドライブ拠点として親しまれる温もりあふれる宿。根尾川の清流で獲れた天然アユやアマゴの塩焼き、奥美濃の山菜や飛騨牛料理を家庭的なおもてなしで味わえます。'
      }
    ],
    crossLinks: [
      { title: '日本三大急流＆川下り舟体験・清流鮎グルメ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-rapid-rivers-stay', desc: '最上川・富士川・球磨川。' },
      { title: '日本三大美林渓流＆原生林マイナスイオン宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-clear-stream-valleys-stay', desc: '奥入瀬・抱返り・阿寺渓谷。' },
      { title: '日本三大車窓＆天空パノラマ・絶景温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-train-window-views-stay', desc: '姨捨・肥薩線矢岳・狩勝峠。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-terraced-rice-fields-stay',
    title: '日本三大美田・棚田百選＆水鏡と黄金色の日本の原風景・農村リトリート宿×ふるさと納税完全ガイド【2026年最新】星峠・白米千枚田・丸山千枚田',
    desc: '四季折々に輝く日本の原風景と大地の彫刻！新潟十日町「星峠の棚田」雲海と水鏡の幻想世界・まつだい芝峠温泉雲海、石川奥能登「白米千枚田」日本海へ傾斜する千枚の田とホテルルートイン輪島、三重熊野「丸山千枚田」千三百枚の精巧な石垣群と入鹿温泉ホテル瀞流荘。日本三大棚田の壮大な美景と郷土の恵みを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大美田・棚田百選＆日本の原風景リトリート宿×ふるさと納税ガイド',
    badge: '日本三大棚田・日本の原風景特集',
    leadTitle: '斜面を幾重にも刻む幾何学模様のあぜ道、水鏡に映る朝焼け。心震える大地のシンフォニー',
    leadDesc: '先人たちが山あいの急斜面を切り拓き、石を積み上げて築き上げてきた「日本三大美田（棚田百選の最高峰）」――魚沼コシヒカリの産地で早朝の雲海と棚田の水鏡が織りなす息をのむ美しさで知られる新潟十日町の「星峠の棚田」、日本海の青い水平線をバックに小さな田が幾重にも重なり夕暮れ時のイルミネーション（あぜのきらめき）が幻想的な石川能登の「白米千枚田」、そして千三百枚もの石積みが山肌一面を覆い「一枚足りないと思ったら笠の下にあった」と言われるほどの壮大さを誇る三重熊野の「丸山千枚田」。春の水鏡、初夏の新緑、秋の黄金色の稲穂、冬の雪景色と、訪れるたびに日本の美しさを再発見させてくれます。棚田を見渡す温泉宿で寛ぎ、魚沼コシヒカリ・能登牛・熊野地鶏を味わう特別な旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '雲海に浮かぶ水鏡・日本海一望の海辺棚田・千三百枚の石積み！圧倒的な景観美',
        desc: '夜明けの朝霧や夕日が水面を染めるマジックアワーなど、写真愛好家を魅了する奇跡の瞬間を体感。'
      },
      {
        title: '魚沼産棚田米コシヒカリ、能登牛＆輪島朝市の海の幸、熊野地鶏＆瀞峡の鮎',
        desc: '清らかな山水と豊かな大地が育んだ最高峰のブランド米と、地域自慢の郷土美食を満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで絶景の温泉旅館・ホテルをお得に予約',
        desc: '写真撮影旅や日本の原風景を巡る癒やし旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'tanada_hoshitoge',
        themeTitle: '新潟県十日町市ふるさと納税：星峠の棚田観光の特等席・雲海を見下ろす露天風呂「まつだい芝峠温泉 雲海」',
        themeDesc: '峠の頂に建ち、露天風呂から魚沼の山並みと広大な雲海を一望できる絶景温泉宿。星峠の棚田への早朝撮影に最適な立地で、ナトリウムー塩化物温泉で温まった後は、極上の魚沼産コシヒカリと山菜、地元越後の味覚会席を堪能できます。'
      },
      {
        key: 'tanada_shiroyone',
        themeTitle: '石川県輪島市ふるさと納税：世界農業遺産・白米千枚田への拠点「輪島天然温泉 旅人の湯 ホテルルートイン輪島」',
        themeDesc: '輪島市街の中心、輪島朝市や白米千枚田へのドライブアクセス抜群なホテル。自家源泉の天然温泉大浴場を備え、旅の疲れをリフレッシュ。能登の復興を応援しながら、輪島ならではの新鮮な海の幸や能登牛グルメの旅を楽しめます。'
      },
      {
        key: 'tanada_maruyama',
        themeTitle: '三重県熊野市ふるさと納税：丸山千枚田と瀞峡巡りの拠点・トロッコで行く秘湯「入鹿温泉ホテル瀞流荘」',
        themeDesc: '千三百枚の棚田が広がる丸山千枚田から車で約15分、北山川の清流を望む温泉宿。名物トロッコ電車で行く湯ノ口温泉の湯巡りも楽しめ、熊野地鶏や美熊野牛、清流アユを取り入れた贅沢な会席料理を心ゆくまで味わえます。'
      }
    ],
    crossLinks: [
      { title: '日本三大美林渓流＆原生林マイナスイオン宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-clear-stream-valleys-stay', desc: '奥入瀬・抱返り・阿寺渓谷。' },
      { title: '日本三大山城＆天空の雲海要塞宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-mountain-castles-stay', desc: '大和高取城・美濃岩村城・備中松山城。' },
      { title: '日本三大名水＆湧水水源地・清流酒蔵美食宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-spring-waters-stay', desc: '黒部湧水・白州尾白川・南阿蘇白川水源。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-strange-festivals-stay',
    title: '日本三大奇祭＆天下の奇祭・熱狂の伝統文化と歴史名宿×ふるさと納税完全ガイド【2026年最新】諏訪御柱祭・国府宮はだか祭・男鹿ナマハゲ',
    desc: '魂を揺さぶる熱狂と千年の祈り！長野諏訪「諏訪大社御柱祭」巨木落としの勇壮と上諏訪天然温泉ホテルルートイン上諏訪、愛知稲沢「国府宮はだか祭」数千の裸男がもみ合う厄除神事とお宿和陽館、秋田男鹿「男鹿のナマハゲ」ユネスコ無形文化遺産・荒ぶる神の咆哮と男鹿温泉セイコーグランドホテル。日本三大奇祭の迫力と伝統を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大奇祭＆熱気と伝統の文化体験宿×ふるさと納税ガイド',
    badge: '日本三大奇祭・伝統文化特集',
    leadTitle: '大地を揺るがす木遣りの声、吹き荒れる熱気と咆哮。日本人の魂が躍動する奇祭巡礼',
    leadDesc: '日本各地の風土と信仰が育み、常識を超えたスケールと迫力で人々を圧倒する「日本三大奇祭」――七年に一度、樹齢数百年の巨木を山から引き倒し急坂を滑り落ちる木落としで天下に知られる長野の「諏訪大社御柱祭」、極寒の旧暦正月に数千人の裸男たちが厄落としのため神男に群がり揉み合う愛知稲沢の「国府宮はだか祭」、そして大晦日の夜に鬼の面を着けた神の化身が家々を巡り悪疫退散と怠惰を戒めるユネスコ無形文化遺産・秋田男鹿の「ナマハゲ」。五穀豊穣や無病息災を願う人々の純粋な熱気は、見る者の魂を激しく揺さぶります。祭りの歴史を伝える資料館や神社仏閣を巡り、上諏訪温泉や男鹿温泉の名湯に浸かって信州そば・尾張郷土料理・秋田名物石焼料理を堪能する旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '御柱の木落とし・数千人の裸もみ合い・ナマハゲの咆哮！唯一無二の伝統神事',
        desc: '全国から観衆が集まる熱狂の現場や、常設展示館での迫真の体験を通じて日本文化の深淵を体感。'
      },
      {
        title: '信州諏訪のわかさぎ＆地酒、尾張の名古屋めし＆三河ポーク、男鹿名物天然真鯛の石焼料理',
        desc: '祭りの熱気とともに受け継がれてきた、地域色豊かな豪快グルメと地酒の数々を堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで歴史薫る温泉旅館・ホテルをお得に予約',
        desc: 'お祭り鑑賞や文化探訪の旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'matsuri_onbashira',
        themeTitle: '長野県諏訪市ふるさと納税：諏訪大社上社・下社巡礼の拠点・天然温泉「ホテルルートイン上諏訪」',
        themeDesc: '諏訪湖のほとりに位置し、御柱祭の舞台である諏訪大社へのアクセス良好なホテル。敷地内から湧出する上諏訪天然温泉大浴場で寛ぎ、無料の健康バイキング朝食付き。夜は諏訪五蔵の銘酒巡りや諏訪湖の夜景散策を楽しめます。'
      },
      {
        key: 'matsuri_hadaka',
        themeTitle: '愛知県稲沢市・一宮市ふるさと納税：国府宮神社参拝の拠点・純和風の温もり「お宿 和陽館」',
        themeDesc: '天下の奇祭・国府宮はだか祭が執り行われる尾張大国霊神社（国府宮）のお膝元、一宮市街に位置する老舗旅館。真心を込めた手作りの和食会席と静かな和室で寛ぎ、尾張の伝統文化とグルメを満喫できます。'
      },
      {
        key: 'matsuri_namahage',
        themeTitle: '秋田県男鹿市ふるさと納税：男鹿ナマハゲ伝承館至近・名物石焼料理と名湯「男鹿温泉 湯けむりリゾート セイコーグランドホテル」',
        themeDesc: 'ナマハゲ発祥の地・男鹿半島の温泉リゾート。男鹿温泉郷の源泉かけ流し大浴場と露天風呂で温まり、夕食は真っ赤に焼けた溶岩石を桶に投入して一瞬で煮立てる名物「男鹿名物石焼料理」や日本海の新鮮な海の幸を豪快に堪能できます。'
      }
    ],
    crossLinks: [
      { title: '日本三大八幡宮＆開運厄除け宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-sacred-hachiman-shrines-stay', desc: '宇佐神宮・石清水八幡宮・筥崎宮。' },
      { title: '日本三大稲荷＆商売繁盛・開運祈願の名宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-inari-shrines-stay', desc: '伏見・豊川・祐徳稲荷。' },
      { title: '日本三大仏＆歴史古都・門前町の名宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-buddhas-heritage-stay', desc: '奈良大仏・鎌倉大仏・高岡大仏。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-roof-tile-towns-stay',
    title: '日本三大瓦の町＆美しいいぶし銀の街並み・赤瓦景観と名湯美食宿×ふるさと納税完全ガイド【2026年最新】淡路瓦・三州瓦・石州瓦',
    desc: '日本の屋根を守り抜いた匠の技と伝統の景観！兵庫「淡路瓦」いぶし銀の風情と淡路牛・あわかん釣りと家族の体験型旅館、愛知「三州瓦」日本一の瓦産地・刈谷エースイン刈谷、島根「石州瓦」日本海の夕日に輝く赤瓦の町並みとMASCOS HOTEL。日本三大瓦の町を巡る工芸と美食の旅を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大瓦の町＆伝統美・窯元めぐり宿×ふるさと納税ガイド',
    badge: '日本三大瓦の町・伝統窯元特集',
    leadTitle: '青空に映えるいぶし銀の輝き、夕暮れを染める赤瓦。日本の風景を形作る瓦の町へ',
    leadDesc: '台風や豪雪、塩害など厳しい日本の気候風土から家々を守り、独特の街並み景観を生み出してきた「日本三大瓦（日本三大瓦産地）」――400年の歴史を誇りキメ細やかな粘土で焼かれる美しいいぶし銀の輝きが特徴の兵庫の「淡路瓦」、三河湾の良質な土と一大窯業地帯として日本一の生産シェアを誇る愛知高浜の「三州瓦」、そして来待釉薬を使って約1300度の高温で焼かれ日本海の夕日に映える独特の赤褐色が美しい島根石見の「石州瓦」。瓦粘土を使った体験工房や歴史ある窯元の小路を散策すれば、伝統工芸の奥深さと職人たちの誇りが伝わってきます。瓦の町周辺の温泉宿を拠点に、淡路島名物の淡路牛や鯛料理、三河湾の海の幸、山陰の日本海鮮魚を堪能する旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: 'いぶし銀の甍（いらか）波や赤瓦の美しい景観！日本の伝統建築を支える匠の技',
        desc: '瓦の歴史を学ぶミュージアムや窯元散策、手作り瓦の粘土細工体験など充実の文化探訪。'
      },
      {
        title: '淡路島名物淡路牛＆宝楽焼き、三河一色うなぎ＆大あさり、山陰のどぐろ＆松葉ガニ',
        desc: '海と窯業の町が育んできた、地元ならではの極上ご当地グルメと地酒ディナーを満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで工芸の町近くの温泉旅館・ホテルをお得に予約',
        desc: '窯元巡りやクラフト旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'tile_awaji',
        themeTitle: '兵庫県洲本市・南あわじ市ふるさと納税：淡路瓦の里に程近いオーシャンフロント体験型旅館「あわかん」',
        themeDesc: '南あわじの淡路瓦窯元エリアへのアクセス良好な洲本温泉の名宿。プライベート釣り場や海一望の大浴場で寛ぎ、淡路島が誇るブランド牛「淡路牛」の鉄板焼きや、鯛・伊勢海老を豪快に焼き上げる名物宝楽焼きを家族で堪能できます。'
      },
      {
        key: 'tile_sanshu',
        themeTitle: '愛知県高浜市・刈谷市ふるさと納税：三州瓦の窯元めぐり拠点・JR刈谷駅前「エースイン刈谷」',
        themeDesc: '日本最大の瓦産地・高浜市や碧南市に隣接する刈谷駅前の快適ホテル。かわら美術館や窯元小路の散策拠点として便利で、全室無料の健康朝食バイキング付き。夜は三河湾の海の幸や愛知名物の味噌カツ、ひつまぶしを味わえます。'
      },
      {
        key: 'tile_sekishu',
        themeTitle: '島根県江津市・益田市ふるさと納税：赤瓦が美しい石州街道のモダン温泉ホテル「MASCOS HOTEL（マスコスホテル）」',
        themeDesc: '赤瓦が街並みを彩る石見地方に位置し、石州瓦や地元木材、伝統工芸を取り入れたデザインホテル。地下から湧き出る天然温泉大浴場を備え、山陰日本海直送の極上のどぐろや石見ポークを活かしたクラフトダイニングを楽しめます。'
      }
    ],
    crossLinks: [
      { title: '日本三大陶器まつり＆名窯工芸宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-pottery-festivals-stay', desc: '有田・波佐見・信楽。' },
      { title: '日本三大美港＆夜景オーシャンビュー宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-beautiful-ports-stay', desc: '清水港・長崎港・神戸港。' },
      { title: '日本三大松原＆白砂青松オーシャンビュー宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-pine-groves-stay', desc: '三保松原・虹の松原・気比松原。' }
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
                        {h.hotelSpecial || '日本三大急坂峠道の雲海パノラマ、日本三大棚田の黄金色に輝く原風景、日本三大奇祭の熱気と伝統、日本三大瓦の町の美しい街並みを巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の峠道・棚田・奇祭特集
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
  console.log('=== Generating 4 Pages for Round 46 ===');
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
  console.log('=== All 4 Pages generated successfully for Round 46! ===');
}

run();
