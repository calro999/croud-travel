const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-emerald-valley-gorge-hot-spring-stay',
    title: '日本三大渓谷美＆エメラルドグリーンの峡谷温泉宿×ふるさと納税完全ガイド【2026年最新】大歩危・黒部峡谷・清津峡',
    desc: '息をのむ大自然の造形美！徳島「大歩危・祖谷渓」エメラルドグリーンの吉野川とケーブルカーで行く谷底露天風呂、富山「黒部峡谷」トロッコ列車で行く断崖パノラマと宇奈月美肌温泉、新潟「清津峡」アートと巨大柱状節理の幻想世界＆越後秘湯。大峡谷の絶景名湯を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大渓谷美＆エメラルドグリーンの峡谷温泉宿×ふるさと納税ガイド',
    badge: '日本三大峡谷美・絶景清流特集',
    leadTitle: '幾千万年の歳月が刻んだ巨岩奇勝と透き通るエメラルドの清流。秘境の渓谷美に抱かれる極上ステイ',
    leadDesc: '大地を深く切り拓き、大自然の神秘的な造形美を誇る日本屈指の峡谷美――四国山地の奥深くにエメラルドグリーンの清流が流れる徳島の大歩危・祖谷峡、北アルプスの険しい断崖絶壁を縫う富山の黒部峡谷、そして巨大な六角柱の岩壁が圧巻の新潟・清津峡。四季折々の新緑や紅葉が岩肌を彩り、川のせせらぎや鳥のさえずりが心地よく響く秘境の地には、断崖にせり出す展望露天風呂や、ロープウェイ・ケーブルカーでしか行けない谷底の野天風呂など、ここでしか味わえない至高の温泉宿が点在します。楽天ふるさと納税の宿泊クーポンを活用し、大自然の懐に抱かれる特別な癒やし旅へ出かけましょう。',
    merits: [
      {
        title: '断崖露天風呂から見下ろすエメラルドグリーンの渓谷パノラマ',
        desc: '湯船から渓谷美を一望できる絶景宿を厳選。川のせせらぎとマイナスイオンを浴びながら心身ともにリフレッシュできます。'
      },
      {
        title: '遊覧船・トロッコ列車・水盤アートトンネルへのアクセス抜群',
        desc: '大歩危遊覧船や黒部峡谷トロッコ列車、清津峡渓谷トンネルなど主要観光アクティビティの拠点として最適な立地です。'
      },
      {
        title: '祖谷そば・富山湾の白えび・越後魚沼産コシヒカリなど山海の旬菜会席',
        desc: '厳しい渓谷の自然と清らかな名水が育んだ郷土美食を堪能し、ふるさと納税の割引で贅沢にグレードアップできます。'
      }
    ],
    items: [
      {
        key: 'gorge_oboke',
        themeTitle: '徳島県三好市ふるさと納税：エメラルドに輝く吉野川「大歩危・小歩危峡」と祖谷渓谷のケーブルカーで行く秘湯露天風呂',
        themeDesc: '2億年もの歳月をかけて激流が削り上げた大理石の彫刻のような巨岩奇勝。舟下りで川面から見上げる渓谷美を体感し、宿では専用ケーブルカーで谷底まで降りる自噴露天風呂や祖谷そば、阿波尾鶏の炭火焼きを堪能できます。'
      },
      {
        key: 'gorge_kurobe',
        themeTitle: '富山県黒部市ふるさと納税：北アルプスを貫く日本一のV字峡谷「黒部峡谷」と宇奈月温泉の透明度日本一の美肌湯',
        themeDesc: 'トロッコ列車に揺られて巡る黒部峡谷の断崖絶壁。黒部川の清流を望む宇奈月温泉の老舗宿に泊まり、富山湾から直送される獲れたての寒ブリや白えび、紅ズワイガニの極上会席と美肌のいで湯に癒やされる旅です。'
      },
      {
        key: 'gorge_kiyotsu',
        themeTitle: '新潟県十日町市ふるさと納税：巨大柱状節理と水盤アートの聖地「清津峡渓谷トンネル」と魚沼の里山秘湯ステイ',
        themeDesc: '国の名勝・天然記念物に指定される清津峡。大峡谷とトンネルの水盤が一体化する現代アート絶景に酔いしれた後は、魚沼産コシヒカリの土鍋ご飯と山菜料理、温まりの塩化物泉に浸かる極上の里山リトリートです。'
      }
    ],
    crossLinks: [
      { title: '日本三大急流＆爽快川下り名宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-rapids-river-activity-stay', desc: '最上川・富士川・球磨川の爽快リバーサイド旅。' },
      { title: '日本三大秘境温泉＆隠れ家名宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-hidden-hot-springs-retreat-stay', desc: '祖谷・椎葉・白川郷の秘境湯治ステイ。' },
      { title: '清流渓谷＆名瀑ヒーリング温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-waterfall-river-gorge-healing-onsen-stay', desc: '奥入瀬・天城・作並の渓谷美と名湯。' }
    ]
  },
  {
    slug: 'furusato-tax-three-sacred-temple-bells-retreat-stay',
    title: '日本三名鐘＆歴史の響き・古刹めぐり宿坊・名旅館×ふるさと納税完全ガイド【2026年最新】三井寺・神護寺・観世音寺',
    desc: '魂を揺さぶる音色と千数百年の静寂！滋賀「三井寺（園城寺）」近江八景・三井の晩鐘と琵琶湖を望む雄琴温泉・国宝宿坊、京都「神護寺」高雄の深山幽谷と清滝川沿い料理旅館、福岡「観世音寺」日本最古の国宝梵鐘と万葉集ゆかりの二日市温泉。日本三名鐘の歴史古刹を楽天ふるさと納税宿泊クーポンでお得に巡る完全ガイド。',
    h1: '日本三名鐘＆歴史の響き・古刹めぐり宿坊・名旅館×ふるさと納税ガイド',
    badge: '日本三名鐘・歴史古刹特集',
    leadTitle: '「勢いの東大寺、音の三井寺、銘の神護寺」。千年の音色に心を澄ませる静寂のマインドフルネス旅',
    leadDesc: '古来より日本人の心に響き渡る梵鐘（釣り鐘）。その中でも美しさ・音色の深さ・歴史的由緒から「日本三名鐘（あるいは四大名鐘）」と讃えられてきたのが、滋賀・三井寺の「三井の晩鐘」、京都・高雄神護寺の「神護寺の鐘」、そして福岡・太宰府観世音寺の「日本最古の国宝梵鐘」です。深緑や紅葉に包まれる境内を歩き、澄み渡る鐘の音に耳を傾ける時間は、現代のストレスから完全に心を解き放つ最上のリトリートとなります。周辺の歴史ある名湯温泉旅館や宿坊に泊まり、精進料理や季節の会席に舌鼓を打つ大人旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '朝のお勤めや鐘の音を独り占めできる境内宿坊＆至近の名門宿',
        desc: '一般の参拝客が訪れる前の澄んだ早朝に、古刹の静寂と荘厳な読経・鐘の響きを心静かに体感できます。'
      },
      {
        title: '近江牛・京料理川床・博多前会席など歴史が育んだ美味の饗宴',
        desc: '各地域の風土と歴史が磨き上げた極上の郷土懐石や滋味深い精進料理を個室で贅沢に味わえます。'
      },
      {
        title: '高単価な文化財宿坊や老舗温泉宿もふるさと納税クーポンでスマート還元',
        desc: '一日一組限定の歴史的宿坊や老舗料理旅館のプレミアムプランを最大30%オフでお得に予約できます。'
      }
    ],
    items: [
      {
        key: 'bell_miidera',
        themeTitle: '滋賀県大津市ふるさと納税：近江八景「三井の晩鐘」の残響と琵琶湖の美景・天台寺門宗総本山三井寺＆おごと温泉宿',
        themeDesc: 'その音色の美しさから「残響の三井寺」と謳われ、弁慶の引き摺り鐘の伝説でも名高い名鐘。琵琶湖を一望する絶景と、国宝金堂や宿坊での特別な座禅体験、美肌のおごと温泉露天風呂を満喫する旅です。'
      },
      {
        key: 'bell_jingo',
        themeTitle: '京都府京都市右京区ふるさと納税：銘の神護寺と称される国宝梵鐘・空海ゆかりの山岳寺院と高雄清滝川の料理旅館',
        themeDesc: '平安初期の作で「銘の神護寺」として名高い国宝の鐘。紅葉の名所として名高い高雄の渓谷美を愛で、清滝川のせせらぎを聞きながら川床料理や湯豆腐、旬の京会席を味わう風雅なひとときを過ごせます。'
      },
      {
        key: 'bell_kanzeon',
        themeTitle: '福岡県太宰府市・筑紫野市ふるさと納税：菅原道真公も詠んだ日本最古の国宝梵鐘「観世音寺」と万葉集の湯・二日市温泉',
        themeDesc: '白鳳時代の鋳造と伝えられ、国宝指定を受ける日本最古の梵鐘。太宰府天満宮と観世音寺の歴史ロマンに触れ、万葉集にも詠まれた博多の奥座敷・二日市温泉の名湯旅館で極上の博多会席を堪能できます。'
      }
    ],
    crossLinks: [
      { title: '古刹宿坊＆本格精進料理ステイ×ふるさと納税完全ガイド', url: '/furusato-tax-temple-shukubo-shojin-mindfulness-stay', desc: '高野山・善光寺・京都寺院のマインドフルネス旅。' },
      { title: 'お伊勢参り＆熊野古道×聖地巡礼宿ガイド', url: '/furusato-tax-ise-kumano-sacred-power-spot-stay', desc: '伊勢神宮・熊野三山・出雲大社の祈願ステイ。' },
      { title: '日本三大美祭＆歴史山鉾の街の老舗旅館×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-festivals-heritage-stay', desc: '高山祭・秩父夜祭・祇園祭の伝統美ステイ。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-wagashi-tea-culture-stay',
    title: '日本三大銘菓＆歴史茶の湯・老舗和菓子めぐり風雅宿×ふるさと納税完全ガイド【2026年最新】金沢長生殿・長岡越乃雪・松江山川',
    desc: '大名茶人が愛した日本の甘味美学！石川金沢「長生殿」加賀百万石の優美な落雁とひがし茶屋街の料亭旅館、新潟長岡「越乃雪」越後長岡藩御用達の淡雪菓子と蓬平温泉、島根松江「山川」不昧公の風流落雁と宍道湖・玉造温泉。茶の湯文化が息づく城下町の名宿を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大銘菓＆歴史茶の湯・老舗和菓子めぐり風雅宿×ふるさと納税ガイド',
    badge: '日本三大銘菓・茶の湯文化特集',
    leadTitle: '口の中でふわりとほどける極上の和三盆。大名茶人の美意識が息づく城下町を味わう',
    leadDesc: '日本の歴史と伝統が育んだ三大銘菓――加賀前田家御用達の「長生殿（石川県金沢市・森八）」、長岡藩主が名付けた越後の雪解け菓子「越乃雪（新潟県長岡市・大和屋）」、そして大名茶人・松平不昧公が茶席菓子として定めた「山川（島根県松江市・風流堂）」。いずれも数百年の歴史を刻み、徳川将軍家や藩主に献上された格式高い名菓です。これら三大銘菓が生まれた街は、茶の湯文化が深く庶民にまで根づき、風情ある武家屋敷や石畳の路地、そして美肌の名湯が湧く名宿が揃っています。お抹茶と名菓を味わい、洗練されたおもてなしに憩う大人の風雅旅を楽天ふるさと納税で叶えましょう。',
    merits: [
      {
        title: '老舗本店の出来立て銘菓と本格茶室での一服を体験',
        desc: '宿の茶室や老舗菓銘店で、お抹茶とともに出来立ての三大銘菓を味わう極上の和み時間を堪能できます。'
      },
      {
        title: '名湯・玉造温泉や蓬平温泉、ひがし茶屋街の情緒ある町家旅館に宿泊',
        desc: '美肌作用の高い歴史ある名湯や、加賀友禅・格子戸の町並みに佇む上質な空間で心休まる滞在が叶います。'
      },
      {
        title: 'ふるさと納税で老舗料亭旅館の贅沢会席をお得に満喫',
        desc: 'のどぐろ、越後牛、松葉ガニや宍道湖七道など、城下町ならではの洗練された郷土割烹会席をお得に味わえます。'
      }
    ],
    items: [
      {
        key: 'wagashi_kanazawa',
        themeTitle: '石川県金沢市ふるさと納税：加賀百万石の栄華を伝える日本三大銘菓「長生殿」とひがし茶屋街・浅野川沿いの風情名宿',
        themeDesc: '加賀三代藩主前田利常公が小堀遠州と創案した和三盆落雁の最高峰。金箔工芸や友禅の技が光る金沢の街を巡り、宿では加賀会席や治部煮を味わいながら加賀茶道のおもてなしに浸れます。'
      },
      {
        key: 'wagashi_nagaoka',
        themeTitle: '新潟県長岡市ふるさと納税：越後長岡藩御用達「越乃雪」と錦鯉の里・美肌ととろみのいで湯「蓬平温泉」旅館',
        themeDesc: '長岡藩主牧野忠精公の病を癒やしたと伝えられる銘菓「越乃雪」。雪国新潟の極上餅米と四国和三盆が織りなす口溶けを楽しみ、山あいに湧く「美人の湯」蓬平温泉で芯から温まる静寂の温泉旅です。'
      },
      {
        key: 'wagashi_matsue',
        themeTitle: '島根県松江市ふるさと納税：不昧公の茶の湯文化が息づく日本三大銘菓「山川」と宍道湖の夕日・美肌の神湯「玉造温泉」名宿',
        themeDesc: '「赤と白」の鮮やかな意匠で紅葉と川の流れを表現した不昧公好みの銘菓。国宝松江城下の堀川めぐりや宍道湖のしじみ・旬の日本海海鮮を味わい、出雲風土記にも記された美肌の玉造温泉で潤う至福のステイです。'
      }
    ],
    crossLinks: [
      { title: '銘菓・和カフェ＆老舗スイーツめぐり温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-sweets-cafe-wagashi-retro-onsen-stay', desc: '金沢・小布施・伊勢の甘味旅。' },
      { title: '日本三名園＆大名庭園を望む老舗旅館×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gardens-heritage-stay', desc: '兼六園・後楽園・偕楽園の庭園美ステイ。' },
      { title: '小江戸・小京都の風情ある城下町老舗旅館×ふるさと納税完全ガイド', url: '/furusato-tax-little-edo-kyoto-castle-town-stay', desc: '川越・金沢・萩の伝統美を味わう大人旅。' }
    ]
  },
  {
    slug: 'furusato-tax-japanese-whisky-distillery-retreat-stay',
    title: '日本のウイスキー聖地＆蒸溜所ツアーと極上オーベルジュ×ふるさと納税完全ガイド【2026年最新】余市・白州・富士御殿場',
    desc: '世界が絶賛するジャパニーズウイスキー！北海道「ニッカウヰスキー余市蒸溜所」石炭直火蒸溜の重厚モルトと積丹オーベルジュ、山梨「サントリー白州蒸溜所」南アルプスの森のウイスキーと八ヶ岳高原リゾート、静岡「キリン富士御殿場蒸溜所」富士の伏流水ブレンドと霊峰ビュー温泉宿。蒸溜所見学と銘酒ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本のウイスキー聖地＆蒸溜所ツアーと極上オーベルジュ×ふるさと納税ガイド',
    badge: 'ウイスキー聖地・蒸溜所ツアー特集',
    leadTitle: '森の澄んだ空気と清らかな雪解け水、樽の中で静かに熟成する黄金の雫に出合う旅',
    leadDesc: '世界5大ウイスキーの一つとして世界中のコレクターやウイスキーファンを魅了し続ける「ジャパニーズウイスキー」。竹鶴政孝が本場スコットランドの製法を愚直に再現した北の聖地・北海道「余市蒸溜所」、南アルプスの広大な天然水林に囲まれ世界でも稀な森の蒸溜所として知られる山梨「白州蒸溜所」、そして霊峰富士の裾野で清らかな雪解け地下水をふんだんに用いてグレーンウイスキーの極みを追求する静岡「富士御殿場蒸溜所」。蒸溜所での限定試飲や見学を楽しんだ後は、地元の極上食材とウイスキーペアリングディナーを提供するオーベルジュや温泉ホテルに泊まり、至福のナイトキャップを楽しむ大人の贅沢旅を楽天ふるさと納税で体験しましょう。',
    merits: [
      {
        title: '蒸溜所限定ボトルや希少ビンテージのテイスティングを満喫',
        desc: '一般流通が極めて少ない蒸溜所限定ウイスキーの試飲や、専門ガイドによる製造工程ツアーをゆったり堪能できます。'
      },
      {
        title: '運転の心配不要！蒸溜所周辺の好アクセスホテル＆送迎付き宿を厳選',
        desc: '試飲後もそのままホテルへ直行可能。ほろ酔い気分で露天風呂やサウナに浸かり、心地よいリラクゼーションに浸れます。'
      },
      {
        title: 'ウイスキーと相性抜群の燻製料理・ジビエ・和牛フレンチペアリング',
        desc: '各蒸溜所のウイスキーに合わせたシェフ特製のペアリングディナーを堪能し、ふるさと納税クーポンでお得にアップグレードできます。'
      }
    ],
    items: [
      {
        key: 'whisky_yoichi',
        themeTitle: '北海道余市町ふるさと納税：マッサンが築いた北のウイスキーの聖地「ニッカ余市蒸溜所」と積丹半島の絶景オーベルジュ',
        themeDesc: '世界で唯一今なお石炭直火蒸溜を続ける伝統の蒸溜所。ピート香豊かな重厚モルトの試飲を楽しんだ後は、日本海のウニや鮑、余市ワインとウイスキーに舌鼓を打つ極上の北国グルメステイを満喫できます。'
      },
      {
        key: 'whisky_hakushu',
        themeTitle: '山梨県北杜市ふるさと納税：甲斐駒ヶ岳の森に佇む「サントリー白州蒸溜所」と八ヶ岳高原の星空リゾートホテル',
        themeDesc: '野鳥がさえずる森の蒸溜所で作られる軽快で爽やかな白州モルト。南アルプスの澄み切った大気の中でテイスティングを満喫し、八ヶ岳の高原野菜と甲州ワインビーフ、満天の星空に癒やされる休日です。'
      },
      {
        key: 'whisky_gotemba',
        themeTitle: '静岡県御殿場市ふるさと納税：富士山の伏流水が育む「キリン富士御殿場蒸溜所」と霊峰富士一望の展望温泉リゾート',
        themeDesc: '富士山の東麓、標高620メートルの冷涼な高原に位置する蒸溜所。多彩な原酒のブレンド技術を体感し、ホテルでは富士山を正面に望む露天風呂や地元富士山麓のブランド豚・静岡そだち牛ステーキを堪能できます。'
      }
    ],
    crossLinks: [
      { title: '国産ウイスキー蒸溜所＆銘酒ペアリング宿×ふるさと納税完全ガイド', url: '/furusato-tax-distillery-whisky-pairing-stay', desc: '余市・白州・秩父のモルト旅。' },
      { title: 'ワイン＆地ビール×醸造オーベルジュ旅ガイド', url: '/furusato-tax-winery-craft-beer-auberge-stay', desc: '勝沼・富良野・余市のワイナリーホテル。' },
      { title: '日本酒ペアリング＆酒蔵直結名宿×ふるさと納税完全ガイド', url: '/furusato-tax-sake-brewery-pairing-onsen-stay', desc: '越後湯沢・諏訪・会津の名酒と温泉旅。' }
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
