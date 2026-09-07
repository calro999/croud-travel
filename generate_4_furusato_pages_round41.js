const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-beautiful-ports-stay',
    title: '日本三大美港＆世界遺産富士山と夜景パノラマ・ウォーターフロント宿×ふるさと納税完全ガイド【2026年最新】清水港・長崎港・神戸港',
    desc: '海と都市が織りなす絶景美港！静岡「清水港」霊峰富士と駿河湾を望む風景美術館日本平ホテル、長崎「長崎港」世界新三大夜景のすり鉢状パノラマとホテルニュー長崎、兵庫「神戸港」開港150年のハイカラ文化と全室バルコニー神戸メリケンパークオリエンタルホテル。日本三大美港の汽笛とライトアップに包まれる上質ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大美港＆夜景オーシャンビュー宿×ふるさと納税ガイド',
    badge: '日本三大美港・ベイサイド夜景特集',
    leadTitle: '青い海に浮かぶ白亜の大型客船と、宝石を散りばめたような港の夜景。海風薫る三大美港へ',
    leadDesc: '天然の良港として古くから海外交易の表玄関を担い、自然美と都市景観が見事に融合した「日本三大美港」――駿河湾越しに仰ぎ見る世界文化遺産・富士山と三保松原の絶景を擁し日本一の深さを誇る静岡の「清水港」、すり鉢状の丘陵地に広がる家々の灯りが海面に映り込み「1000万ドルの夜景」と称される長崎の「長崎港」、そして六甲山を背にポートタワーや海洋博物館が美しくライトアップされる国際貿易港・兵庫の「神戸港」。昼は大型客船の優美な船影を眺め、夜は海風を感じながらテラスでワインを傾ける時間は、至高の贅沢です。港を一望するハイグレードホテルを拠点に、清水マグロ・長崎卓袱料理・神戸牛ディナーを堪能する特別な休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '客室バルコニーから港の夜景を一望！刻々と移り変わるベイサイドパノラマ',
        desc: '夕暮れ時のトワイライトから煌めく夜景、朝の清々しい港の目覚めまでをプライベート空間で独占鑑賞。'
      },
      {
        title: '清水港直送天然南マグロ、長崎活イカ＆長崎和牛、神戸ビーフ鉄板焼き',
        desc: '港町ならではの新鮮な魚介と最高峰ブランド牛を、ホテルの展望レストランで贅沢に満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れのウォーターフロントホテルをお得に予約',
        desc: '記念日や特別な旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'port_shimizu',
        themeTitle: '静岡県静岡市清水区ふるさと納税：清水港と富士山パノラマを見晴らす風景美術館「日本平ホテル」',
        themeDesc: '日本平山頂から清水港と富士山、駿河湾を絵画のように一望するラグジュアリーホテル。広大な芝生庭園を散策し、清水港水揚げの極上マグロや駿河湾の海の幸を取り入れた本格フレンチ・和食会席を優雅に堪能できます。'
      },
      {
        key: 'port_nagasaki',
        themeTitle: '長崎県長崎市ふるさと納税：世界新三大夜景の長崎港と出島への拠点「ホテルニュー長崎」',
        themeDesc: '長崎駅に直結し、長崎港やグラバー園への観光に抜群のロケーション。シックで上質な客室で寛ぎ、長崎名物卓袱料理や長崎和牛ステーキ、錦糸卵が彩る角煮など伝統と革新が融合した和華蘭グルメを満喫します。'
      },
      {
        key: 'port_kobe',
        themeTitle: '兵庫県神戸市中央区ふるさと納税：三方を海に囲まれた神戸港の特等席「神戸メリケンパークオリエンタルホテル」',
        themeDesc: 'メリケンパークの突端に位置し、まるで豪華客船に乗っているかのような全室ウッドデッキバルコニー付きホテル。汽笛を聞きながら潮風を感じ、最上階のステーキハウスで極上神戸牛と神戸港の煌めく夜景に酔いしれます。'
      }
    ],
    crossLinks: [
      { title: '日本三大港クルーズ＆夜景ディナークルーズ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-harbor-cruises-luxury-stay', desc: '神戸・横浜・長崎。' },
      { title: '日本三大白砂青松＆海岸絶景パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-coastal-sceneries-stay', desc: '天橋立・三保松原・気比松原。' },
      { title: '日本三大夜景＆天空スカイパノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-new-three-major-night-views-sky-stay', desc: '皿倉山・若草山・フルーツ公園。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-mountain-castles-stay',
    title: '日本三大山城＆天空の要塞・雲海に浮かぶ石垣美ホテル宿×ふるさと納税完全ガイド【2026年最新】大和高取城・美濃岩村城・備中松山城',
    desc: '雲海に浮かぶ天空の要塞！奈良「大和高取城」日本一の比高390mとカンデオホテルズ奈良橿原、岐阜恵那「美濃岩村城」標高717m日本一高い山城と天然温泉岩寿荘、岡山高梁「備中松山城」現存天守唯一の山城と吉備高原リゾートホテル。日本三大山城の壮大な石垣群と雲海パノラマを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大山城＆天空の雲海要塞宿×ふるさと納税ガイド',
    badge: '日本三大山城・天空の要塞特集',
    leadTitle: '朝霧の彼方にそびえ立つ白亜の天守と無数の巨石垣。難攻不落を誇った三大山城へ',
    leadDesc: '戦国から江戸初期にかけて標高数百メートルの山上に築かれ、天険の要害と驚異の石垣土木技術を今に伝える「日本三大山城」――城下町との比高が約390mと日本一を誇り「南郷に雪降るかと見れば雪ではござらぬ高取の城」と謳われた奈良の「大和高取城」、標高717mに位置し日本一高い場所にある山城として六段壁の石垣美と女城主の哀話が残る岐阜恵那の「美濃岩村城」、そして標高430mの臥牛山頂に現存12天守の中で唯一現存する山城天守を持ち秋冬の早朝には見事な雲海に浮かぶ岡山の「備中松山城」。鬱蒼とした森の中に突然現れる巨大な石垣の遺構は、中世武士たちの執念とロマンを肌で感じさせます。山麓のホテルや隠れ家温泉旅館を拠点に、早朝の雲海展望台アタックや飛鳥・美濃・備中の郷土料理を味わう特別な休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '雲海展望台や登城口へ早朝アクセス抜群！朝靄に浮かぶ天空の城を激写',
        desc: '天候の条件が揃った朝、宿からスムーズに展望地へ向かい、幻想的な雲海の絶景を鑑賞。'
      },
      {
        title: '大和牛＆飛鳥鍋、飛騨牛＆恵那山菜川魚会席、千屋牛ステーキ＆備中郷土料理',
        desc: '山城の歴史が息づく城下町ならではの伝統の味覚を、宿の本格ディナーで堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンでスカイスパホテルや温泉宿をお得にリザーブ',
        desc: '山城探訪のベストシーズンでも、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適宿泊。'
      }
    ],
    items: [
      {
        key: 'castle_takatori',
        themeTitle: '奈良県高取町・橿原市ふるさと納税：比高日本一の巨大山城「大和高取城」と最上階スカイスパ「カンデオホテルズ奈良橿原」',
        themeDesc: '日本屈指の山城・高取城址の散策拠点。大和八木駅前の「カンデオホテルズ奈良橿原」は、最上階に大和三山を一望する露天風呂付きスカイスパとサウナを備え、歴史探訪の疲れを癒やすスタイリッシュな滞在を満喫できます。'
      },
      {
        key: 'castle_iwamura',
        themeTitle: '岐阜県恵那市ふるさと納税：標高717m日本一の山城「美濃岩村城」と秘湯「山×星×川の温泉宿 岩寿荘」',
        themeDesc: '六段壁の石垣が圧巻の岩村城跡と城下町散策の拠点。山懐の静寂に佇む「岩寿荘」では、ラジウム温泉の貸切風呂で寛ぎ、恵那名産の松茸や飛騨牛、地元の清流川魚を使った里山会席に舌鼓を打ちます。'
      },
      {
        key: 'castle_bitchumatsuyama',
        themeTitle: '岡山県高梁市・吉備中央町ふるさと納税：現存天守唯一の天空の山城「備中松山城」と「吉備高原リゾートホテル」',
        themeDesc: '雲海に浮かぶ備中松山城展望台へのアクセスに便利な高原リゾート。緑豊かな自然に囲まれた広い客室で寛ぎ、岡山名物のブランド牛「千屋牛」や吉備高原の新鮮野菜を使ったディナーを堪能できます。'
      }
    ],
    crossLinks: [
      { title: '国宝五城＆名城天守を望む城下町宿×ふるさと納税完全ガイド', url: '/furusato-tax-five-national-treasure-castles-stay', desc: '姫路・松本・犬山・彦根・松江。' },
      { title: '日本三大水城＆名城パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-water-castles-stay', desc: '高松城・今治城・中津城。' },
      { title: '日本三大名橋＆歴史街道宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-bridges-history-stay', desc: '錦帯橋・眼鏡橋・日本橋。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-somen-noodles-stay',
    title: '日本三大そうめん＆手延べ極細麺の伝統技・名水と古都の湯宿×ふるさと納税完全ガイド【2026年最新】三輪・播州・小豆島',
    desc: '糸のように細く強いコシ！日本の麺の原点！奈良桜井「三輪そうめん」手延べそうめん発祥の地の大和橿原シティホテル、兵庫たつの「播州手延そうめん揖保乃糸」清流揖保川と瀬戸内オーシャンビューHOTEL万葉岬、香川小豆島「小豆島そうめん」ごま油が香る400年の島伝統とアクアホテル小豆島リゾート。日本三大そうめんの麺道と郷土の恵みを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大そうめん＆手延べ麺道宿×ふるさと納税ガイド',
    badge: '日本三大そうめん・伝統手延べ特集',
    leadTitle: '箸ですくい上げれば白糸の輝き。職人が極限まで引き延ばした至高の喉ごしを求めて',
    leadDesc: '千数百年の歴史を持ち、良質な小麦粉・名水・塩、そして油を用いて手作業で熟成を繰り返しながら細く延ばしていく「日本三大そうめん」――大神神社の神話に起源を持ち1200余年の歴史を誇る手延べそうめんの発祥地・奈良桜井の「三輪そうめん」、清流揖保川の恵みと播磨の熟練職人ネットワークによって国内シェアトップを誇る兵庫たつのの「播州手延そうめん（揖保乃糸）」、そしてお伊勢参りの旅人が伝えた技法をごま油を塗って熟成させることで独特の風味ともちもちのコシを生み出した香川の「小豆島そうめん」。茹で時間わずか数十秒、冷水でキュッと締めた一本は、小麦本来の甘みと清涼感あふれる喉ごしを運んでくれます。そうめんの故郷の温泉旅館やシーサイドリゾートに泊まり、冷製そうめんやにゅうめん、地元のブランド牛・海の幸を味わう特別な休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '老舗製麺所やそうめん処へ直行！できたて手延べ麺と食べ比べを満喫',
        desc: '熟成期間や細さ（緒環・神舞・特級・ひね）の違いを本場の名店でじっくり味わい尽くす贅沢。'
      },
      {
        title: '大和牛会席、播磨灘の穴子・牡蠣・瀬戸内海鮮、小豆島オリーブ牛ディナー',
        desc: '手延べそうめんと合わせて、各地域が誇る海と大地の恵みを宿の本格会席で堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで古都の宿やオーシャンビューリゾートをお得にステイ',
        desc: '麺巡礼の旅でも、寄付金額に応じた最大30%オフの即時割引クーポンで実質2,000円負担の快適宿泊。'
      }
    ],
    items: [
      {
        key: 'somen_miwa',
        themeTitle: '奈良県桜井市・橿原市ふるさと納税：そうめん発祥の地「三輪そうめん」と大神神社参拝の拠点「大和橿原シティホテル」',
        themeDesc: '三輪そうめんの里・三輪山大神神社へ電車で数分。大和八木駅近くの便利な拠点で、清潔な客室と温かなサービスで寛ぎ、三輪そうめんの名店散策や大和牛・飛鳥の郷土料理巡りを満喫できます。'
      },
      {
        key: 'somen_ibonoito',
        themeTitle: '兵庫県たつの市ふるさと納税：清流揖保川の至宝「揖保乃糸」の故郷と瀬戸内パノラマ「ＨＯＴＥＬ 万葉岬」',
        themeDesc: '揖保乃糸資料館「そうめんの里」見学と合わせて訪れたい万葉岬の隠れ家ホテル。瀬戸内海を270度パノラマで見渡す絶景客室や展望風呂で癒やされ、播磨灘の獲れたて鮮魚や牡蠣料理、揖保乃糸料理を堪能します。'
      },
      {
        key: 'somen_shodoshima',
        themeTitle: '香川県小豆島町・土庄町ふるさと納税：ごま油香る島伝統「小豆島手延そうめん」と「アクアホテル小豆島リゾート」',
        themeDesc: '400年の手延べそうめん文化息づく小豆島。島巡りに便利なアクアホテル小豆島リゾートに滞在し、小豆島そうめんの食べ比べやオリーブ牛、瀬戸内海の夕日を眺めながら島時間をゆったり満喫できます。'
      }
    ],
    crossLinks: [
      { title: '日本三大うどん＆極上麺道湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-udons-gourmet-stay', desc: '讃岐・稲庭・五島。' },
      { title: '日本三大銘菓＆城下町茶寮・老舗和菓子文化宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-famous-confections-historic-town-stay', desc: '長生殿・越乃雪・京銘菓。' },
      { title: '日本三大酒どころ＆酒蔵ツーリズム宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-sake-capitals-brewery-stay', desc: '灘五郷・伏見・西条。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-stalactite-caves-stay',
    title: '日本三大鍾乳石洞窟＆無数の石筍が創る地底宮殿・ジオアドベンチャー名湯宿×ふるさと納税完全ガイド【2026年最新】あぶくま洞・玉泉洞・井倉洞',
    desc: '数十万年の滴が創り上げた天然のシャンデリア！福島「あぶくま洞」東洋一の鍾乳石種類と磐梯熱海温泉ホテル華の湯、沖縄南城「玉泉洞」100万本の石筍とサザンビーチホテル＆リゾート沖縄、岡山新見「井倉洞」高さ240m絶壁と地底滝の奇観・新見グランドホテルみよしや。日本三大鍾乳石洞窟の神秘の地底美を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大鍾乳石洞窟＆地底宮殿宿×ふるさと納税ガイド',
    badge: '日本三大鍾乳石・地底アート特集',
    leadTitle: '天井から垂れ下がる無数の鍾乳石と、天へと伸びる石筍。一滴の雫が紡いだ地底宮殿へ',
    leadDesc: '石灰岩台地の地下で炭酸ガスを含んだ地下水が数十万年もの歳月をかけて溶かし、再結晶化させることで形成された「日本三大鍾乳石洞窟（三大鍾乳洞窟美）」――鍾乳石の種類と密度の豊富さで東洋一と称され「滝根御殿」や「月の世界」のイルミネーションが輝く福島の「あぶくま洞」、全長5000mにおよび30万年の歳月が創り出した100万本以上の鍾乳石が林立する国内最大級の沖縄の「玉泉洞（おきなわワールド）」、そして高さ240mのカルスト絶壁の裂け目に広がり落差50mの地底の滝が轟音を立てる岡山の「井倉洞」。年間を通して一定の気温に保たれた洞内は、夏は涼しく冬は暖かく、一歩踏み入れれば自然が創り出した現代アートのような美しさに圧倒されます。洞窟探検の後は、名湯露天風呂やリゾートホテルでゆったり寛ぎ、福島牛・沖縄黒豚・千屋牛を味わう特別な休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '洞窟アドベンチャーコースに挑戦！非日常の神秘体験の後は極上温泉でリラックス',
        desc: '探検服をレンタルして狭い隙間を進む探検コースを体験し、疲れた体を天然温泉で温める爽快感。'
      },
      {
        title: '福島牛＆川魚会席、あぐー豚＆沖縄海鮮ディナー、千屋牛ステーキ会席',
        desc: '大自然の力強さを感じた後は、各地域のブランド肉や郷土の滋味を贅沢に堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで温泉旅館やビーチリゾートをお得に利用',
        desc: '家族旅行やカップルの記念日旅行でも、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適ステイ。'
      }
    ],
    items: [
      {
        key: 'cave_abukuma',
        themeTitle: '福島県田村市ふるさと納税：東洋一の鍾乳石の種類を誇る「あぶくま洞」と名湯「磐梯熱海温泉 ホテル華の湯」',
        themeDesc: 'あぶくま洞の滝根御殿を満喫した後は、車でアクセスの良い名湯・磐梯熱海温泉へ。三十種類もの多彩な湯舟で湯巡りができる「ホテル華の湯」で、肌をなめらかにする美肌の湯と、福島牛や旬の会席ビュッフェを心ゆくまで堪能します。'
      },
      {
        key: 'cave_gyokusendo',
        themeTitle: '沖縄県南城市・糸満市ふるさと納税：100万本の鍾乳石が創る「玉泉洞」とオーシャンビュー「サザンビーチホテル＆リゾート沖縄」',
        themeDesc: 'おきなわワールド内の巨大鍾乳洞・玉泉洞を探検。美々ビーチいとまんの目の前に建つリゾートホテル「サザンビーチホテル」に滞在し、オーシャンビューの客室やプール、沖縄県産食材をふんだんに使ったブッフェディナーを楽しめます。'
      },
      {
        key: 'cave_ikurado',
        themeTitle: '岡山県新見市ふるさと納税：高さ240mの絶壁に開く地底滝の洞窟「井倉洞」と「新見 グランドホテルみよしや」',
        themeDesc: '高梁川上流の巨大絶壁に開口する井倉洞・絹掛の滝の観光拠点。新見市街に位置するグランドホテルみよしやで寛ぎ、日本最古の蔓牛の血統を引く最高級ブランド黒毛和牛「千屋牛」のすき焼きやステーキを贅沢に味わえます。'
      }
    ],
    crossLinks: [
      { title: '日本三大鍾乳洞＆地底神秘美・名湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-limestone-caves-stay', desc: '龍泉洞・秋芳洞・龍河洞。' },
      { title: '日本三大地底滝鍾乳洞＆地底アドベンチャー宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-subterranean-waterfalls-caves-stay', desc: '井倉洞・あぶくま洞・日原鍾乳洞。' },
      { title: '日本三大柱状節理峡谷＆絶景名湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-columnar-joints-gorges-stay', desc: '清津峡・高千穂峡・層雲峡。' }
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
                        {h.hotelSpecial || '日本三大美港の夜景、天空の山城の石垣美、手延べそうめんの伝統技、鍾乳石洞窟の地底宮殿を巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の名城・麺道・絶景特集
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
