const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-bridges-history-stay',
    title: '日本三大名橋＆伝統建築美を渡る歴史街道宿×ふるさと納税完全ガイド【2026年最新】錦帯橋・眼鏡橋・日本橋',
    desc: '幾星霜の歴史を刻む日本の名架橋！山口岩国「錦帯橋」五連の木造アーチ美と錦帯橋温泉岩国国際観光ホテル、長崎「眼鏡橋」日本最古の国重文アーチ石橋と異国情緒漂うホテルモントレ長崎、東京中央区「日本橋」五街道の起点たる石造二連アーチと三井ガーデンホテル日本橋プレミア。日本三大名橋の建築美と老舗グルメを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大名橋＆歴史街道宿×ふるさと納税ガイド',
    badge: '日本三大名橋・伝統架橋建築特集',
    leadTitle: '清流に架かる木と石の幾何学美。街道の起点を歩き、数百年受け継がれた匠の技に息をのむ',
    leadDesc: '日本各地の街道や城下町、交易の要所を支えてきた橋梁の最高峰「日本三大名橋」――錦川の清流に描かれる五連の優美な木造アーチが釘を一本も使わぬ木組みの精緻さを誇る山口岩国の「錦帯橋」、興福寺の黙子如定禅師によって架橋された日本最古の国重要文化財アーチ石橋であり水面に映る円環が幻想的な長崎の「眼鏡橋」、そして徳川家康による開府以来、五街道の起点として日本の近代化と物流の中心を担ってきた東京都中央区の石造二連アーチ「日本橋」。古人の知恵と土木工学の粋が結集したこれらの名橋は、四季折々の水辺の景色とともに訪れる者をタイムトラベルへと誘います。名橋を間近に望む老舗料理旅館やラグジュアリーホテルを拠点に、郷土会席や老舗の味を堪能する特別なひとときを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '名橋のたもとや城下町・都心好立地！朝夕の静かな時間帯に名橋を独占散策',
        desc: '観光客で賑わう日中を避け、早朝の朝靄や夕暮れのライトアップに浮かび上がる名橋のシルエットを優雅に鑑賞。'
      },
      {
        title: '岩国寿司・アユ会席、長崎卓袱料理、日本橋江戸前割烹と地酒のペアリング',
        desc: '名橋が育んだ街道と河川・港湾の豊かな食材を、各宿自慢の本格会席や伝統レストランで贅沢に堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れの名門ホテル＆温泉宿を実質2,000円で予約',
        desc: '歴史的観光地の一等地ホテルでも、寄付金額に応じた最大30%オフ即時割引クーポンでスマートにお得旅。'
      }
    ],
    items: [
      {
        key: 'bridge_kintaikyo',
        themeTitle: '山口県岩国市ふるさと納税：五連の優美な木造アーチ名橋「錦帯橋」と岩国城を望む「錦帯橋温泉 岩国国際観光ホテル」',
        themeDesc: '錦川にかかる国指定名勝・錦帯橋のすぐ目の前に佇む名門ホテル。展望露天風呂「いつつばしの湯」からは錦帯橋と岩国城をパノラマで一望でき、夕食には郷土料理「岩国寿司」や清流の鮎料理、山口名産のふぐ会席に舌鼓を打ちます。'
      },
      {
        key: 'bridge_meganebashi',
        themeTitle: '長崎県長崎市ふるさと納税：中島川に架かる日本最古の石造二連アーチ「眼鏡橋」と南欧情緒「ホテルモントレ長崎」',
        themeDesc: '寛永11年（1634年）架橋の国重要文化財・眼鏡橋へアクセス抜群。ポルトガルの伝統意匠を取り入れた瀟洒な館内で寛ぎ、長崎卓袱料理や長崎和牛、名物ちゃんぽんなど和華蘭文化の美食を心ゆくまで味わいます。'
      },
      {
        key: 'bridge_nihonbashi',
        themeTitle: '東京都中央区ふるさと納税：日本の道路原標を守る名橋「日本橋」と老舗街の洗練「三井ガーデンホテル日本橋プレミア」',
        themeDesc: '1911年架橋の重厚な石造アーチ日本橋から徒歩圏内。江戸の粋と現代のモダンが調和した上質空間で、最上階の大浴場「湯心」で旅の疲れを癒やし、老舗百貨店や江戸前寿司・うなぎ割烹の名店巡りを楽しむ大人の都心ステイです。'
      }
    ],
    crossLinks: [
      { title: '国宝五城＆名城天守を望む城下町宿×ふるさと納税完全ガイド', url: '/furusato-tax-five-national-treasure-castles-stay', desc: '姫路・松本・犬山・彦根・松江。' },
      { title: '日本三名瀑＆飛瀑の轟音に癒やされる温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-waterfalls-hotsprings-stay', desc: '那智・華厳・袋田。' },
      { title: '日本三大奇祭＆情熱の神事体験宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-peculiar-festivals-stay', desc: '御柱・吉田の火祭・なまはげ。' }
    ]
  },
  {
    slug: 'furusato-tax-three-famous-confections-historic-town-stay',
    title: '日本三大銘菓＆城下町の伝統茶寮・老舗和菓子文化宿×ふるさと納税完全ガイド【2026年最新】金沢・長岡・京都',
    desc: '茶道文化と職人技が生んだ和菓子の最高峰！石川金沢「長生殿」加賀前田家の茶の湯と山中温泉吉祥やまなか、新潟長岡「越乃雪」越後藩主を癒やした淡雪の口どけと蓬平温泉和泉屋、京都「京銘菓文化」御所御用達の至高の甘美と京都祇園料理旅館花楽。日本三大銘菓の城下町と名湯を巡る大人の甘美ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大銘菓＆城下町茶寮宿×ふるさと納税ガイド',
    badge: '日本三大銘菓・伝統和菓子文化特集',
    leadTitle: '舌の上でふわりと消える和三盆と、凛と澄んだ薄茶の一碗。茶の湯が育んだ老舗銘菓の街を訪ねる',
    leadDesc: '千利休以来の茶の湯の精神が受け継がれ、各大名家の庇護のもとで独自の発展を遂げた「日本三大銘菓」の街――加賀前田家の豊かな文化政策のもと、森八の三代目八幡太郎道清が創案した落雁の王様「長生殿」を誇る石川の城下町「金沢」、長岡藩三代藩主・牧野忠辰の病を平癒させたことから名付けられた越後特産の餅粉と和三盆が織りなす「越乃雪」の大和屋が息づく新潟「長岡」、そして平安遷都以来の公家文化と禅寺の茶礼が融合し、亀末廣の京のよすがや鍵善良房のくずきりなど無数の名菓を紡ぎ出してきた古都「京都」。名水と厳選素材、職人の研ぎ澄まされた感性によって作られる銘菓は、旅のひとときに格別の深みを与えてくれます。茶室や庭園を備えた格式ある料理旅館や名湯宿を拠点に、お茶と和菓子のマリアージュと郷土懐石に心洗われる贅沢なひとときを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '老舗和菓子店や名勝庭園・茶寮へ徒歩至近！出来立ての生菓子を堪能',
        desc: '午前中の静かな茶房でいただく点てたてのお抹茶と季節の上生菓子は、旅人だけに許された格別の贅沢。'
      },
      {
        title: '加賀懐石・越後地酒と雪国山菜・京会席料理！美食の粋を集めた夕食',
        desc: '茶の湯文化と表裏一体である「茶懐石」の美学が息づく極上の料理を、落ち着いた個室や部屋食でゆったり満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで伝統旅館の特別室や温泉宿をお得にリザーブ',
        desc: '予約困難なハイグレード料理旅館も、寄付額に応じた即時割引クーポンを活用して賢くラグジュアリーに滞在。'
      }
    ],
    items: [
      {
        key: 'sweets_kanazawa',
        themeTitle: '石川県金沢市・加賀市ふるさと納税：落雁の最高峰「長生殿」と加賀茶の湯文化息づく「山中温泉 吉祥やまなか」',
        themeDesc: '加賀前田家が愛した名菓「長生殿（森八）」を生んだ金沢の奥座敷。鶴仙渓の絶景を望む名宿「吉祥やまなか」では、加賀棒茶のウェルカムサービスや山中漆器に盛られた本格加賀懐石、天然温泉の露天風呂で至福の湯浴みを満喫します。'
      },
      {
        key: 'sweets_nagaoka',
        themeTitle: '新潟県長岡市ふるさと納税：越後銘菓の頂点に君臨する口どけの至宝「越乃雪」と隠れ里「よもぎひら温泉 和泉屋」',
        themeDesc: '240余年の歴史を紡ぐ「越乃雪（大和屋）」の城下町・長岡。霊峰高龍神社のお膝元、山懐に湧くよもぎひら温泉の和泉屋で、肌に滑らかなとろとろの美肌湯と、越後もち豚・山菜・長岡コシヒカリの絶品料理を堪能します。'
      },
      {
        key: 'sweets_kyoto',
        themeTitle: '京都府京都市東山区ふるさと納税：千年の茶道文化を紡ぐ京銘菓の聖地と八坂神社至近の「京都祇園 料理旅館 花楽」',
        themeDesc: '鍵善良房やくずきり、老舗茶寮が建ち並ぶ祇園の真ん中。八坂神社や高台寺へ徒歩数分の好立地に佇む「花楽」で、旬の京野菜をふんだんに取り入れた京懐石と、中庭を望む情緒豊かな和室で古都の奥深さに浸ります。'
      }
    ],
    crossLinks: [
      { title: '日本三大茶室＆侘び寂び数寄屋建築宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-national-treasure-teahouses-stay', desc: '待庵・如庵・密庵。' },
      { title: '日本三名園＆四季の大名庭園散策宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gardens-heritage-stay', desc: '兼六園・後楽園・偕楽園。' },
      { title: '三大陶磁器の里＆窯元巡り工芸宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-pottery-towns-heritage-stay', desc: '有田・瀬戸・美濃。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-limestone-caves-stay',
    title: '日本三大鍾乳洞＆地底の神秘美・涼感アドベンチャー宿×ふるさと納税完全ガイド【2026年最新】龍泉洞・秋芳洞・龍河洞',
    desc: '一億年の時が育んだ大自然の造形美！岩手「龍泉洞」世界有数の透明度を誇るドラゴンブルーの地底湖と浄土ヶ浜パークホテル、山口「秋芳洞」百枚皿と傘づくしの巨大カルスト洞窟と長門湯本温泉大谷山荘、高知「龍河洞」弥生人の神壺遺構と土佐の美食を誇る名門城西館。日本三大鍾乳洞の神秘的な地底空間と天然温泉を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大鍾乳洞＆地底神秘美・名湯宿×ふるさと納税ガイド',
    badge: '日本三大鍾乳洞・地底ジオアドベンチャー特集',
    leadTitle: '年間を通じて10℃前後の天然クーラー。エメラルドブルーの地底湖と鍾乳石が織りなす神秘の世界へ',
    leadDesc: '悠久の歳月をかけて地下水が石灰岩を溶かし、奇跡のような地底宮殿を形作った「日本三大鍾乳洞」――世界有数の透明度を誇るドラゴンブルーの地底湖が吸い込まれそうな青のグラデーションを描く岩手岩泉の「龍泉洞」、日本最大級のカルスト台地・秋吉台の地下100mに広がり無数の皿状石灰段丘「百枚皿」や黄金柱が圧巻のスケールを誇る山口美祢の「秋芳洞」、そして一億年の鍾乳石とともに太古の弥生人が暮らした痕跡「神壺（土器が鍾乳石と一体化した世界唯一の遺構）」が残る高知香美の「龍河洞」。洞内は年中ひんやりとした清涼な空気が漂い、夏は涼しく冬は暖かく、冒険心をくすぐる別世界が広がります。地底探検の後は、三陸・長門湯本・土佐の贅を尽くした温泉宿でゆったりと湯に浸かり、ご当地の山海の幸を味わう贅沢なひとときを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '洞窟探検の興奮をそのままに！名湯露天風呂とプライベート空間でリフレッシュ',
        desc: '地底の神秘を体感した後は、天然温泉大浴場や清流露天風呂で心地よい疲労感をじっくりと癒やします。'
      },
      {
        title: '三陸のウニ・アワビ、長州黒かしわ・ふぐ、土佐のカツオ藁焼きタタキ',
        desc: '大自然の恵みが詰まった各地域最高峰のブランド食材ディナーと地酒を心ゆくまで堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンでハイグレード温泉旅館を賢くお得にリザーブ',
        desc: '家族旅行やカップルの記念日旅行でも、寄付金額に応じた即時割引クーポンで負担を抑えて上質な宿泊が実現。'
      }
    ],
    items: [
      {
        key: 'cave_ryusendo',
        themeTitle: '岩手県岩泉町・宮古市ふるさと納税：ドラゴンブルーに輝く奇跡の地底湖「龍泉洞」と三陸名勝「浄土ヶ浜パークホテル」',
        themeDesc: '水深98mに達する第3地底湖の透明度と幻想的な青の世界。探検の後は、三陸復興国立公園・名勝浄土ヶ浜の高台に建つ「浄土ヶ浜パークホテル」で、アカマツ林越しに宮古湾を望み、獲れたて三陸海鮮ビュッフェや会席を贅沢に味わいます。'
      },
      {
        key: 'cave_akiyoshido',
        themeTitle: '山口県美祢市・長門市ふるさと納税：東洋一の大鍾乳洞「秋芳洞」百枚皿の絶景と名湯「長門湯本温泉 大谷山荘」',
        themeDesc: '秋吉台の地底深くに広がる大空間と百枚皿の造形美。車で約30分の老舗温泉街・長門湯本温泉の最高峰「大谷山荘」に滞在し、音信川のせせらぎを聞きながら露天風呂に浸かり、長州牛やふぐ・日本海の旬魚会席に心奪われる贅沢を堪能します。'
      },
      {
        key: 'cave_ryugado',
        themeTitle: '高知県香美市・高知市ふるさと納税：一億年のタイムカプセル「龍河洞」弥生の神壺と土佐の老舗旅館「城西館」',
        themeDesc: '世界的にも珍しい弥生土器が鍾乳石に包まれた「神壺」や迫力の鍾乳石群。見学後は、明治7年創業・皇族方をお迎えしてきた高知屈指の老舗名門「城西館」で、最上階の展望露天風呂と、名物カツオの藁焼きタタキや皿鉢料理を満喫します。'
      }
    ],
    crossLinks: [
      { title: '日本三大カルスト台地＆天空パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-karst-highlands-stay', desc: '秋吉台・四国カルスト・平尾台。' },
      { title: '日本三大名勝断崖海岸＆パノラマ海宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-precipitous-coasts-stay', desc: '北山崎・東尋坊・足摺岬。' },
      { title: '日本三大渓谷美＆清流リトリート温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gorges-scenic-stay', desc: '黒部峡谷・清津峡・大杉谷。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-beautiful-forests-stay',
    title: '日本三大美林＆巨木の薫香に癒やされる森林浴リトリート温泉宿×ふるさと納税完全ガイド【2026年最新】青森ヒバ・秋田スギ・木曽ヒノキ',
    desc: '数百年を生き抜く巨木たちの生命力！青森下北「青森ヒバ」清冽な芳香と耐朽性を誇る天然美林とむつグランドホテル斗南温泉、秋田能代・大館「秋田スギ」曲げわっぱを生んだ天を衝く美木と大館ぽかぽか温泉ホテル、長野木曽路「木曽ヒノキ」伊勢神宮式年遷宮の御神木を育む樹林と街道浪漫おん宿蔦屋。日本三大美林のフィトンチッドと名湯を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大美林＆森林浴名湯宿×ふるさと納税ガイド',
    badge: '日本三大美林・森林セラピー特集',
    leadTitle: '深呼吸するたび、心身が解き放たれる。天然林のフィトンチッドと木のぬくもりに包まれる極上休日',
    leadDesc: '厳しい自然環境の中で数百年の星霜を重ね、日本建築や伝統工芸の最高峰を支えてきた「日本三大美林」――特有のヒノキチオール成分による強い抗菌力と清々しい芳香を放ち、下北半島や津軽の森を覆う「青森ヒバ（天然美林）」、年輪が緻密で木目が美しく、名工たちの「秋田杉曲げわっぱ」を生み出した出羽山地の「秋田スギ（天然美林）」、そして尾張徳川家による「木一本、首一つ」の厳重な保護令によって守り抜かれ、伊勢神宮の式年遷宮の御神木として用いられる木曽谷の「木曽ヒノキ（天然美林）」。深い緑の森に一歩足を踏み入れれば、天然アロマのような森林浴効果と木漏れ日が日々の疲れを心地よく解きほぐします。木造建築の美学が息づく宿や総ヒノキ・ヒバ造りの湯船に身を委ね、ご当地の山川の味覚を味わう至高のリトリートを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '天然ヒバ風呂・総ヒノキ露天風呂で極上の湯浴み！木のアロマに包まれる癒やし',
        desc: '湯船に注がれる名湯と木の芳香成分が溶け合い、五感を研ぎ澄ます最高のリラクゼーションを体感。'
      },
      {
        title: '下北の海鮮＆馬肉料理、秋田比内地鶏きりたんぽ鍋、信州牛＆木曽蕎麦会席',
        desc: '豊かな美林が育んだ清流と土壌の恵み。山菜や川魚、ブランド肉など郷土の味覚を贅沢に味わい尽くす夕食。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで自然豊かな秘湯・名門旅館をお得に満喫',
        desc: '喧騒を離れた森の隠れ宿も、寄付額に応じた即時割引クーポンを活用して実質2,000円負担でスマートにステイ。'
      }
    ],
    items: [
      {
        key: 'forest_aomori_hiba',
        themeTitle: '青森県むつ市・下北半島ふるさと納税：清冽な芳香と耐朽性を誇る「青森ヒバ天然林」と美肌の「むつグランドホテル 斗南温泉」',
        themeDesc: '下北半島の薬研渓流や川内川渓谷に広がるヒバの原生林。むつ市街の高台に位置する「むつグランドホテル」では、下北の雄大な自然を望み、美肌効果抜群の天然温泉「斗南温泉 美人の湯」と、陸奥湾のホタテや下北の旬魚会席を心ゆくまで味わいます。'
      },
      {
        key: 'forest_akita_sugi',
        themeTitle: '秋田県大館市・能代市ふるさと納税：伝統工芸曲げわっぱの故郷「秋田スギ美林」と自家源泉の「大館ぽかぽか温泉ホテル」',
        themeDesc: '仁鮒水沢スギ植物群落保護林など天を衝く巨木が連なる秋田スギの聖地。大館駅からも至近の「大館ぽかぽか温泉ホテル」は、天然温泉かけ流しの大浴場とサウナを備え、本場大館の比内地鶏やきりたんぽ鍋のグルメを堪能する快適な拠点です。'
      },
      {
        key: 'forest_kiso_hinoki',
        themeTitle: '長野県木曽町・上松町ふるさと納税：伊勢神宮御神木を育む「木曽ヒノキ赤沢自然休養林」と中山道宿場町「街道浪漫 おん宿 蔦屋」',
        themeDesc: '森林浴発祥の地・赤沢自然休養林のヒノキ美林。木曽福島宿の清流・木曽川沿いに建つ創業300余年の老舗旅館「おん宿 蔦屋」では、木曽ヒノキの香り漂う露天風呂や、信州プレミアム牛肉・岩魚・名物木曽蕎麦を並べた創作会席を堪能します。'
      }
    ],
    crossLinks: [
      { title: '日本三大名瀑＆飛瀑の轟音に癒やされる温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-waterfalls-hotsprings-stay', desc: '那智・華厳・袋田。' },
      { title: '日本三大銘石庭園＆巨石美に触れる宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-famous-stones-gardens-stay', desc: '佐渡赤玉石・揖斐川石・鴨川真黒石。' },
      { title: '日本三大秘境＆仙境温泉リトリート宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-hidden-unexplored-regions-stay', desc: '祖谷・白川郷・椎葉村。' }
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
    const minCharge = raw.hotelMinCharge ? raw.hotelMinCharge.toLocaleString() : '8,000';
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
                        {h.hotelSpecial || '歴史ある名橋や城下町、鍾乳洞、美林の自然探訪に最適な上質拠点。四季折々の美味と温かなおもてなしでお寛ぎください。'}
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
                宿泊当日は通常通りチェックイン。割引されたお得な価格で、名湯や美食、歴史情緒溢れる極上滞在を満喫できます。
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
            あわせて読みたい日本の伝統美・絶景特集
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

pagesConfig.forEach(cfg => {
  const dirPath = path.join(__dirname, 'src/app', cfg.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  const code = generatePageCode(cfg);
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), code, 'utf8');
  console.log(`Generated: src/app/${cfg.slug}/page.tsx`);
});
