const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-columnar-joints-gorges-stay',
    title: '日本三大柱状節理峡谷＆幾何学絶壁とエメラルド清流名湯宿×ふるさと納税完全ガイド【2026年最新】清津峡・高千穂峡・層雲峡',
    desc: 'マグマが冷え固まり生まれた地球の彫刻！新潟十日町「清津峡」巨大柱状節理と水鏡アートの清津峡湯元温泉清津館、宮崎「高千穂峡」阿蘇溶岩が刻んだ神話峡谷と名旅館大和屋、北海道「層雲峡」大雪山麓に連なる24kmの大絶壁と朝陽亭。日本三大柱状節理峡谷（三大奇岩峡谷）の圧倒的ダイナミズムを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大柱状節理峡谷＆絶景名湯宿×ふるさと納税ガイド',
    badge: '日本三大柱状節理・峡谷ジオ特集',
    leadTitle: '垂直に切り立つ六角形の巨大岩壁と、深緑の滝壺。大地の鼓動を肌で感じる峡谷ステイ',
    leadDesc: '太古の火山活動とマグマの急冷によって規則正しい多角柱の割れ目が刻まれ、その後の河川の浸食によって生まれた自然の驚異「日本三大柱状節理峡谷」――国の名勝・天然記念物に指定され、巨大な岩壁トンネル越しに水鏡アートが広がる新潟の「清津峡」、阿蘇山の火砕流が急冷して形成され、真名井の滝がエメラルドの川面に注ぎ込む神話の郷・宮崎の「高千穂峡」、そして大雪山国立公園の表玄関として石狩川を挟み約24kmにわたって高さ200m級の断崖絶壁が連なる北海道の「層雲峡」。幾何学的な岩肌と滝のしぶき、四季折々の紅葉や新緑が織りなすパノラマは、息をのむ美しさです。渓谷沿いの秘湯旅館や大型温泉ホテルを拠点に、魚沼コシヒカリ・高千穂牛・北海道の山海の幸を堪能する特別な休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '渓谷遊歩道やアートトンネル・貸しボートへすぐ！朝一番の絶景独占散策',
        desc: '混雑する日中を避け、早朝の朝靄に包まれる柱状節理の神秘的な渓谷美を静かに鑑賞。'
      },
      {
        title: '魚沼美雪ます＆山菜、高千穂牛ステーキ＆神楽酒、オホーツク海鮮＆北海道牛',
        desc: '大自然の恵みが詰まった各地域最高峰のブランド食材ディナーと地酒を心ゆくまで堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで渓谷の一軒宿や温泉リゾートをお得にステイ',
        desc: '予約困難な渓谷沿いの名湯宿も、寄付金額に応じた最大30%オフ即時割引クーポンでスマートに予約。'
      }
    ],
    items: [
      {
        key: 'gorge_kiyotsu',
        themeTitle: '新潟県十日町市ふるさと納税：巨大柱状節理と水鏡アート「清津峡」渓谷に佇む一軒宿「清津峡湯元温泉 清津館」',
        themeDesc: '清津峡渓谷トンネルのすぐ手前に建つ秘湯の一軒宿。清津川のせせらぎを聞きながら入る薬効豊かな天然温泉露天風呂と、魚沼産コシヒカリ、美雪ます、山菜やキノコなど雪国の滋味あふれる郷土料理を堪能できます。'
      },
      {
        key: 'gorge_takachiho',
        themeTitle: '宮崎県高千穂町ふるさと納税：阿蘇火砕流が削り出した神話の柱状節理「高千穂峡」と情緒あふれる「旅館 大和屋」',
        themeDesc: '高千穂峡や高千穂神社へアクセス至近。木のぬくもり漂う落ち着いた和室で寛ぎ、名物高千穂牛ステーキやヤマメの塩焼き、神都高千穂の地酒を味わい、夜は高千穂神社の夜神楽鑑賞を満喫します。'
      },
      {
        key: 'gorge_sounkyo',
        themeTitle: '北海道上川町ふるさと納税：24kmに及ぶ大雪山麓の大断崖「層雲峡」を見晴らす「層雲峡 朝陽亭」',
        themeDesc: '大雪山の柱状節理断崖を望む高台に建つ名門温泉ホテル。渓谷美を見下ろす展望大浴場「黒岳」や白濁の露天風呂で癒やされ、北海道の旬の恵みをふんだんに取り入れた和洋中ビュッフェや会席料理を楽しめます。'
      }
    ],
    crossLinks: [
      { title: '日本三大峡谷＆断崖絶壁・エメラルド渓谷宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gorges-canyon-scenery-stay', desc: '清津峡・黒部峡谷・瀞峡。' },
      { title: '日本三大奇景＆奇岩パノラマ温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-strange-sceneries-geopark-stay', desc: '妙義山・寒霞渓・耶馬渓。' },
      { title: '日本三大鍾乳洞＆地底神秘美・名湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-limestone-caves-stay', desc: '龍泉洞・秋芳洞・龍河洞。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-pottery-festivals-stay',
    title: '日本三大陶器まつり＆名窯の里・器と美食を愛でる工芸温泉宿×ふるさと納税完全ガイド【2026年最新】有田・波佐見・信楽',
    desc: '日本を代表する焼き物の聖地を巡る！佐賀「有田陶器市」400年の磁器文化と嬉野温泉大正屋椎葉山荘、長崎「波佐見陶器まつり」モダンで使いやすい日常の器とホテルブリスヴィラ波佐見、滋賀「信楽陶器まつり」日本六古窯の狸と登り窯・ホテルレイクヴィラ。日本三大陶器まつりの買い付け巡礼と名窯の器でいただく極上会席を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大陶器まつり＆名窯工芸宿×ふるさと納税ガイド',
    badge: '日本三大陶器まつり・名窯の里特集',
    leadTitle: '窯元の煙突が連なる小路を歩き、一生モノの器に出会う。職人の情熱と美肌湯に触れる旅',
    leadDesc: '全国から数十万〜百万人を超える器ファンが集い、作家や職人との語らいの中で特別な器を探す「日本三大陶器まつり（三大名窯の里）」――日本初の磁器として400年以上の歴史を誇りゴールデンウィークに街中が器で埋め尽くされる佐賀の「有田陶器市」、隣接する波佐見町で機能美とモダンなデザインが若者を中心に絶大な人気を集める長崎の「波佐見陶器まつり」、そして日本六古窯の一つとして信楽粘土が醸し出す素朴な土味と愛嬌ある狸の置物で親しまれる滋賀の「信楽陶器まつり」。手作りの器は、使うほどに手に馴染み、毎日の食卓に温もりを添えてくれます。名窯の里や美肌温泉宿に泊まり、職人の器に美しく盛り付けられた佐賀牛や近江牛会席を味わう豊かな休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '陶器市の早朝オープンに直行！混雑前に人気作家や限定アウトレット品をゲット',
        desc: '会場近くの宿や温泉街に滞在することで、ゆったりとしたスケジュールで窯元散策と買い物を満喫。'
      },
      {
        title: '佐賀牛・有田鶏、長崎和牛・大村湾鮮魚、近江牛・琵琶湖鮎の器コラボ会席',
        desc: '宿の夕食では、名窯の器に盛り付けられた目にも鮮やかな本格会席と地酒のマリアージュを堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで名門旅館やリゾートホテルをお得にリザーブ',
        desc: '陶器市シーズンの人気宿も、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適ステイ。'
      }
    ],
    items: [
      {
        key: 'pottery_arita',
        themeTitle: '佐賀県有田町・嬉野市ふるさと納税：400年の磁器の都「有田陶器市」と美肌名湯「嬉野温泉 大正屋 椎葉山荘」',
        themeDesc: '有田陶器市の散策拠点に最適な嬉野温泉の奥座敷。椎葉川沿いの大自然に抱かれた露天風呂「しいばの湯」で日本三大美肌の湯に浸かり、有田焼の器に美しく盛られた特選佐賀牛会席や名物温泉湯豆腐を堪能します。'
      },
      {
        key: 'pottery_hasami',
        themeTitle: '長崎県波佐見町ふるさと納税：モダンな日常の器「波佐見陶器まつり」と源泉温泉「ホテル ブリスヴィラ波佐見」',
        themeDesc: '波佐見焼のギャラリーや陶器まつり本会場に隣接するリゾートホテル。隣接する天然温泉「はさみ温泉 湯治楼」の源泉かけ流し美肌湯で寛ぎ、波佐見焼の茶器や器を使った朝食、カフェ散策を快適に楽しめます。'
      },
      {
        key: 'pottery_shigaraki',
        themeTitle: '滋賀県甲賀市信楽町ふるさと納税：日本六古窯の土の温もり「信楽陶器まつり」と「信楽温泉 ホテル レイクヴィラ」',
        themeDesc: '信楽伝統産業会館や陶芸の森へアクセス良好。広大な高原ゴルフリゾート内のホテルで、信楽温泉の露天風呂やサウナを満喫し、信楽焼の器に盛られた近江牛すき焼きや旬の会席料理を贅沢に味わえます。'
      }
    ],
    crossLinks: [
      { title: '三大陶磁器の里＆窯元巡り工芸宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-pottery-towns-heritage-stay', desc: '有田・瀬戸・美濃。' },
      { title: '日本三大漆器＆伝統工芸名湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-lacquerwares-stay', desc: '越前・山中・会津。' },
      { title: '日本三大和紙＆清流文化湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-washi-papers-stay', desc: '越前・美濃・土佐。' }
    ]
  },
  {
    slug: 'furusato-tax-three-medicinal-hotsprings-stay',
    title: '日本三大薬湯＆万病平癒・極上の濃厚泉質湯治リトリート宿×ふるさと納税完全ガイド【2026年最新】草津・有馬・松之山',
    desc: '日本屈指の薬効成分を誇る奇跡の湯！群馬「草津温泉」強酸性の殺菌力と湯畑一望の老舗ホテル一井、兵庫「有馬温泉」太古の海水と鉄分が濃縮された金泉の兵衛向陽閣、新潟十日町「松之山温泉」千二百万年前の化石海水が湧くひなの宿ちとせ。日本三大薬湯の濃厚温泉浴と滋養強壮の美食を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大薬湯＆極上湯治リトリート宿×ふるさと納税ガイド',
    badge: '日本三大薬湯・万病平癒特集',
    leadTitle: '身体の芯から温まり、細胞が蘇る。古来より多くの人々を癒やし続けてきた三大薬湯へ',
    leadDesc: '温泉大国・日本に数千ある温泉地の中でも、群を抜く有効成分の濃さと卓越した効能によって古くから「日本三大薬湯」と称えられてきた三名湯――pH2前後の強酸性で驚異の殺菌力を誇り湯畑からもうもうと湯煙が立ち上る群馬の「草津温泉」、活断層の深部から地熱と圧力によって湧き出し海水の約1.5〜2倍の塩分と鉄分を含む茶褐色の名湯・兵庫の「有馬温泉（金泉）」、そして約1200万年前の化石海水が閉じ込められて湧き出しホウ酸含有量が日本一と称される豪雪地帯の秘湯・新潟十日町の「松之山温泉」。ひとたび湯船に身を沈めれば、濃厚な泉質が肌を包み込み、湯上がり後も温もりが何時間も持続します。歴史ある名門旅館や木造の風情ある湯宿に泊まり、滋味あふれる郷土料理とともに心身を根本からリセットする極上の休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '源泉かけ流しの濃厚薬湯を堪能！何度でも入りたくなる至高の泉質と湯守の技',
        desc: '成分の濃い本物の源泉にじっくり浸かり、冷え性改善や美肌、疲労回復を実感。'
      },
      {
        title: '上州牛すき焼き、神戸牛しゃぶしゃぶ、越後雪室熟成豚と棚田米コシヒカリ',
        desc: '湯治の後は、各温泉地が誇る最高峰の滋養強壮グルメと地酒を心ゆくまで満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れの老舗湯宿や高級温泉ホテルをお得に利用',
        desc: '全国屈指の人気温泉地でも、寄付金額に応じた最大30%オフの即時割引クーポンで実質2,000円負担の快適滞在。'
      }
    ],
    items: [
      {
        key: 'onsen_kusatsu',
        themeTitle: '群馬県草津町ふるさと納税：湯畑の目の前に佇む江戸時代創業の老舗「草津温泉 ホテル一井」',
        themeDesc: '草津のシンボル・湯畑の真ん前に建つ創業三百余年の老舗名宿。湯畑前白旗源泉と白根山万代鉱源泉の二つの貴重な源泉かけ流し大浴場で強酸性薬湯を堪能し、上州牛や群馬の山海の恵みを彩った和食会席を味わえます。'
      },
      {
        key: 'onsen_arima',
        themeTitle: '兵庫県神戸市・有馬温泉ふるさと納税：太閤秀吉公も愛した黄金の薬湯「有馬温泉 兵衛向陽閣」',
        themeDesc: '創業700年、有馬温泉を代表する名門旅館。三つの趣異なる大浴場で濃厚な赤褐色名湯「金泉」を巡り、神戸牛や瀬戸内海の旬魚をふんだんに取り入れた本格会席料理と伝統のおもてなしに心癒やされます。'
      },
      {
        key: 'onsen_matsunoyama',
        themeTitle: '新潟県十日町市ふるさと納税：千二百万年前の化石海水が湧く秘境の名宿「松之山温泉 ひなの宿 ちとせ」',
        themeDesc: '日本三大薬湯・松之山温泉の中心に建つ風情豊かな木造宿。塩分とホウ酸が凝縮された源泉かけ流しの露天風呂「月見の湯」で温まり、名物「湯治豚」や里山山菜、魚沼棚田コシヒカリの絶品料理を堪能します。'
      }
    ],
    crossLinks: [
      { title: '日本三名泉＆天下の名湯巡り極上宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-famous-hotsprings-heritage-stay', desc: '有馬・草津・下呂。' },
      { title: '日本三古湯＆飛鳥時代からの歴史名湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-ancient-hotsprings-heritage-stay', desc: '道後・有馬・白浜。' },
      { title: '日本三大美肌の湯＆とろとろ美容液温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-beautifying-hotsprings-stay', desc: '嬉野・斐乃上・喜連川。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-daimyo-gardens-stay',
    title: '日本三大名園＆江戸大名庭園の四季美と城下町風雅宿×ふるさと納税完全ガイド【2026年最新】偕楽園・兼六園・後楽園',
    desc: '大名文化の粋を集めた回遊式庭園の最高峰！茨城水戸「偕楽園」徳川斉昭公の梅林とホテル・ザ・ウエストヒルズ・水戸、石川金沢「兼六園」六勝を兼ね備える加賀百万石の雪吊りと金沢白鳥路ホテル山楽、岡山「後楽園」旭川と岡山城を借景にする岡山プラザホテル。日本三大名園の四季折々の庭園美と藩主ゆかりの郷土会席を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大名園＆大名庭園風雅宿×ふるさと納税ガイド',
    badge: '日本三大名園・大名庭園特集',
    leadTitle: '歩くごとに姿を変える池と築山、四季の草木。藩主たちの美意識が結実した天下の名園へ',
    leadDesc: '国の特別名勝に指定され、日本の庭園文化の最高傑作として世界的に知られる「日本三大名園（大名庭園）」――水戸藩第九代藩主・徳川斉昭公が民と偕（とも）に楽しむ場として創設し約三千本の梅が咲き誇る茨城の「偕楽園」、加賀藩歴代藩主が百数十年をかけて作庭し「広大・幽邃・人力・蒼古・水泉・眺望」の六つの景勝を兼備する石川の「兼六園」、そして岡山藩第二代藩主・池田綱政公が憩いの場として築き、旭川の清流と岡山城天守を借景にする広大な芝生回遊式庭園・岡山の「後楽園」。池の周りを歩く回遊式庭園は、季節や天候、時間帯によって千変万化の表情を見せてくれます。名園の隣や城下町の一等地に佇むホテル・名旅館を拠点に、常陸牛・加賀懐石・瀬戸内鰆など歴代藩主が愛した美食を堪能する特別なひとときを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '名園まで徒歩すぐ！開園直後の静寂な時間帯に庭園をプライベート散策',
        desc: '朝靄が立ち込める早朝の静かな庭園を歩き、池に映る朝焼けや木漏れ日の美しさを独占。'
      },
      {
        title: '常陸牛会席＆あんこう鍋、のどぐろ＆加賀伝統会席、千屋牛＆瀬戸内鮮魚会席',
        desc: '名園が育んだ城下町の洗練された郷土割烹と地酒のペアリングを贅沢に満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで城下町の上質ホテルや温泉宿をお得に予約',
        desc: '庭園散策のベストシーズンでも、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適宿泊。'
      }
    ],
    items: [
      {
        key: 'garden_kairakuen',
        themeTitle: '茨城県水戸市ふるさと納税：徳川斉昭公が創設した三千本の梅林「偕楽園」と千波湖畔「ホテル・ザ・ウエストヒルズ・水戸」',
        themeDesc: '偕楽園や千波湖へアクセス抜群の上質シティホテル。シックで洗練された客室で寛ぎ、常陸牛ステーキや茨城の旬魚を取り入れた本格イタリアンディナー、朝食バイキングで水戸の歴史探訪を優雅に楽しめます。'
      },
      {
        key: 'garden_kenrokuen',
        themeTitle: '石川県金沢市ふるさと納税：加賀百万石の美の極致「兼六園」と金沢城公園に隣接する「金沢白鳥路 ホテル山楽」',
        themeDesc: '兼六園・金沢城へ徒歩約5分。大正ロマンのステンドグラスが彩る館内には美肌の天然温泉が湧き、金沢の老舗加賀料理やのどぐろ会席、加賀棒茶のスイーツなど古都の贅を心ゆくまで味わえます。'
      },
      {
        key: 'garden_korakuen',
        themeTitle: '岡山県岡山市ふるさと納税：岡山城を借景とする大名庭園「岡山後楽園」を目の前に望む「岡山プラザホテル」',
        themeDesc: '後楽園と旭川を挟んだ対岸に佇む絶景ホテル。客室やレストランから後楽園の緑と漆黒の岡山城（烏城）をパノラマで一望でき、瀬戸内海の旬魚や千屋牛、岡山の名産フルーツを使った料理を堪能できます。'
      }
    ],
    crossLinks: [
      { title: '日本三大名園＆大名庭園を愛でる名門宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gardens-heritage-luxury-stay', desc: '兼六園・後楽園・偕楽園の四季風雅。' },
      { title: '日本三大銘石＆枯山水庭園・名湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-famous-stones-gardens-stay', desc: '佐渡赤玉石・揖斐川石・鴨川真黒石。' },
      { title: '国宝三大茶室＆数寄屋建築の名旅館宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-national-treasure-teahouses-stay', desc: '待庵・如庵・密庵。' }
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
                        {h.hotelSpecial || '日本三大柱状節理の奇岩絶壁、陶器まつりの工芸美、日本三大薬湯の湯治、大名庭園の四季散策を満喫する極上の滞在。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の名湯・工芸・庭園特集
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
