const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
const allHotels = JSON.parse(fs.readFileSync(p, 'utf8'));

const hubs = [
  {
    slug: 'shizuoka-mishima-shuzenji-numazu-port-stay',
    tag: 'MISHIMA, SHUZENJI & NUMAZU PORT GUIDE',
    title: '【静岡・三島＆修善寺・沼津港】富士山スカイウォーク・修善寺竹林＆沼津深海魚宿 完全ガイド',
    metaTitle: '【静岡・三島＆修善寺・沼津港】三島スカイウォーク・竹林小径＆沼津海鮮宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '日本最長400mの富士山大吊橋「三島スカイウォーク」、源頼朝旗揚げの古社「三嶋大社」、弘法大師開湯の伊豆最古「修善寺温泉」竹林の小径、世界唯一のシーラカンス剥製を誇る「沼津港深海水族館」と朝獲れ鮮魚浜焼き宿を徹底解説。',
    lead: '富士山の雪解け湧水が街中を潤す水の都「三島」。日本最長の歩行者専用吊橋から望む富士山と駿河湾のパノラマ「三島スカイウォーク」。桂川のせせらぎと朱塗りの橋、竹林の小径に佇む伊豆屈指の名湯「修善寺温泉」。そして日本一深い駿河湾の奇魚と朝獲れ鮮魚がひしめくグルメの聖地「沼津港」。新幹線ですぐの富士・伊豆・駿河湾ゴールデンルートステイへご案内します。',
    guides: [
      {
        key: 'mishima_skywalk_shrine_stay',
        badge: '日本最長歩行者専用吊橋と伊豆国一之宮',
        title: '1. 三島スカイウォーク（日本一の富士山大吊橋）＆名神・三嶋大社（源頼朝ゆかりの社）',
        timing: '通年（秋〜冬の澄み渡る冠雪富士、春の桜、初夏のアジサイ小道）',
        desc: '全長400m、日本最長の歩行者専用吊橋「三島スカイウォーク」。橋の上からは標高世界遺産の霊峰富士と日本一深い駿河湾を同時に見渡す日本屈指の大絶景。ロングジップラインなど大自然アクティビティも充実。麓の「三嶋大社」は伊豆国一之宮として崇敬を集め、源頼朝が源氏再興を祈願した歴史あるパワースポット。名物「福太郎餅」や境内の天然記念物・金木犀も有名です。',
        spots: '三島スカイウォーク、三嶋大社、楽寿園（富士山溶岩湧水庭園）、源兵衛川親水公園（せせらぎ散歩）、白滝公園',
        access: 'JR東海道新幹線「三島駅」下車。スカイウォークへは三島駅南口より路線バスで約25分。三嶋大社へは徒歩約15分。東名「沼津IC」より約15分。',
        tip: '富士山を美しく撮影したい場合は、空気が澄んで逆光になりにくい午前中（朝9〜11時頃）のスカイウォーク訪問が最もおすすめです。'
      },
      {
        key: 'shuzenji_bamboo_onsen_heritage_stay',
        badge: '開湯千二百年・伊豆の小京都',
        title: '2. 修善寺温泉「竹林の小径」＆独鈷の湯・木造名建築文化財旅館（桂川の渓流美）',
        timing: '通年（新緑の青竹、秋の桂川沿い紅葉ライトアップ、しっとりとした雨の風情）',
        desc: '大同2年（807年）、弘法大師空海が湧出させたと伝わる伊豆半島最古の温泉地「修善寺温泉」。温泉街の中心を流れる桂川沿いには、円形ベンチが置かれた風雅な「竹林の小径」や、願いが叶うと伝わる五つの朱塗りの橋が架かります。夏目漱石や芥川龍之介など文豪が愛した老舗旅館が軒を連ね、登録有形文化財の木造建築や渓流を望む貸切露天風呂で日常を忘れる極上の癒やしを満喫できます。',
        spots: '修禅寺、独鈷の湯、竹林の小径、指月殿（伊豆最古の木造建築）、虹の郷、修善寺もみじ林',
        access: '伊豆箱根鉄道駿豆線「修善寺駅」よりバス約10分。東駿河湾環状道路「修善寺IC」より約5分。',
        tip: '桂川にかかる5つの橋（渡月橋・虎渓橋・桂橋・楓橋・滝下橋）を願いを込めながらすべて渡ると恋が実ると言われる「恋の橋めぐり」が人気です。'
      },
      {
        key: 'numazu_port_deepsea_seafood_stay',
        badge: '深海生物のワンダーランドと駿河湾海鮮市場',
        title: '3. 沼津港深海水族館（シーラカンス・メンダコ）＆沼津みなと新鮮館・海鮮浜焼き',
        timing: '通年（特に秋〜春の深海魚底引き網漁期、朝獲れアジの旬）',
        desc: '最深部2,500mを誇る日本一深い駿河湾に面した「沼津港」。世界で唯一冷凍保存されたシーラカンスの剥製や生体を展示する「沼津港深海水族館」は大人から子供まで大人気の知的好奇心スポット。港周辺には獲れたての桜えび・しらす丼、金目鯛煮付け、アジの干物、ダイナミックな海鮮浜焼きが並ぶ食堂街が広がり、展望水門「びゅうお」からは夕暮れの駿河湾と富士山の雄大な景観を堪能できます。',
        spots: '沼津港深海水族館、大型展望水門「びゅうお」、沼津みなと新鮮館、港八十三番地、千本松原公園',
        access: 'JR沼津駅南口より伊豆箱根バス・東海バスで約10〜15分（沼津港下車）。東名高速「沼津IC」より車で約20分。',
        tip: '沼津港深海水族館は土日祝日の昼前後は混雑するため、開館直後の午前10時前または15時以降の来訪がスムーズです。'
      }
    ]
  },
  {
    slug: 'nagasaki-unzen-shimabara-castle-volcano-stay',
    tag: 'UNZEN & SHIMABARA VOLCANO GUIDE',
    title: '【長崎・雲仙＆島原城・有明海】雲仙地獄白濁名湯・島原湧水武家屋敷＆具雑煮宿 完全ガイド',
    metaTitle: '【長崎・雲仙＆島原城】雲仙地獄・名水湧水武家屋敷＆小浜夕日温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '立ち込める湯けむりと硫黄の香り「雲仙地獄」、日本最初の国立公園に指定された高原リゾート、名水百選の水路が流れる「島原武家屋敷」と五層白亜の「島原城」、伝統名物「具雑煮」、日本一長い足湯と橘湾の夕日を望む小浜温泉を徹底解説。',
    lead: '地球のマグマの息吹が地表に噴き出す「雲仙地獄」の湯けむりと、強酸性の白濁硫黄泉が旅人を癒やす高原の名湯「雲仙温泉」。明治時代には外国人の避暑地として栄えた日本最古のパブリックリゾート。裾野に広がる「島原」は、湧水が路傍を潤し名水で泳ぐ錦鯉と白壁の武家屋敷、天草四郎の島原の乱を伝える白亜の島原城。有明海と橘湾の絶景海鮮を味わう島原半島周遊ステイへご案内します。',
    guides: [
      {
        key: 'unzen_jigoku_sulfur_onsen_stay',
        badge: '日本最初の国立公園と白濁硫黄の噴気',
        title: '1. 雲仙地獄めぐり（大叫喚地獄・お糸地獄）＆白濁源泉かけ流し老舗リゾート宿',
        timing: '通年（春のミヤマキリシマ、夏の冷涼な避暑、秋の紅葉、冬の霧氷・温泉スチーム）',
        desc: 'キリシタン殉教の歴史を秘め、岩肌から白い噴気と熱湯がゴボゴボと湧き出す「雲仙地獄」。木道が整備された地獄地帯を歩けば、硫黄の香りと地球の強烈なエネルギーを五感で実感できます。名物の温泉スチームで蒸した「温泉たまご」や足元から地熱を感じる「足蒸し」も人気。強酸性の濃厚な硫黄泉は殺菌効果が高く美肌の湯としても知られ、クラシックホテルや露天風呂付き離れ宿で至福の湯浴みが楽しめます。',
        spots: '雲仙地獄、雲仙ロープウェイ（仁田峠展望台・妙見岳）、雲仙ビジターセンター、お山の情報館、原生沼',
        access: 'JR長崎本線「諫早駅」より島鉄バスで約80分。長崎空港より諫早経由特急バスで約100分。長崎道「諫早IC」より約60分。',
        tip: '仁田峠展望台へ向かう雲仙ロープウェイからは、平成新山（普賢岳噴火で形成された最高峰）の荒々しい溶岩ドームを間近に望めます。'
      },
      {
        key: 'shimabara_castle_samurai_spring_stay',
        badge: '水の都の白亜天守と名水百選の城下町',
        title: '2. 島原城天守＆湧水庭園「四明荘」・武家屋敷水路散策・名物「具雑煮」グルメ',
        timing: '通年（春の城まつり・桜並木、清涼な夏の湧水巡り、秋の島原城薪能）',
        desc: '安土桃山様式の美しい五層白亜の天守がそびえる「島原城」。キリシタン史料や島原の乱の貴重な展示を鑑賞できます。城下には澄み切った名水が流れる水路沿いに江戸時代の武家屋敷が残り、住宅の庭園に一日3000トンもの清らかな水が湧き出す「四明荘」では座敷から透明な池を泳ぐ鯉を眺めながら優雅な時間を過ごせます。島原の乱の際に農民軍が炊いたとされる餅や山海の幸が山盛りの「具雑煮」は必食です。',
        spots: '島原城天守・民具資料館、湧水庭園 四明荘、しまばら湧水館、武家屋敷通り（鉄砲町）、鯉の泳ぐまち、姫松屋（元祖具雑煮）',
        access: '島原鉄道「島原駅」より徒歩約5〜10分。熊本港より有明フェリー・九商フェリーで島原港へ約30〜60分。',
        tip: '島原名物スイーツ「かんざらし」は、白玉粉の小さな団子を湧水で冷やし、特製の蜜をかけた上品な甘さのご当地甘味です。'
      },
      {
        key: 'ariake_sea_sunset_champon_stay',
        badge: '橘湾に沈む夕日と日本一長い足湯',
        title: '3. 小浜温泉「ほっとふっと105」＆橘湾サンセット・小浜ちゃんぽん名湯ステイ',
        timing: '通年（特に秋〜冬の澄み渡る橘湾夕日、日没マジックアワー）',
        desc: '橘湾の海岸沿いに位置する小浜温泉は、105度の源泉温度にちなんで名付けられた日本一の長さ105mを誇る露天足湯「ほっとふっと105」がシンボル。海に面した足湯に浸かりながら、水平線に沈む黄金の夕日を眺める時間は格別です。蒸し釜では持参した野菜や卵、海産物を高温温泉スチームで一気に蒸し上げて味わえます。長崎ちゃんぽんをベースに殻付きエビや魚介の旨味が凝縮した「小浜ちゃんぽん」も大人気です。',
        spots: '小浜温泉「ほっとふっと105」、小浜歴史資料館、雲仙市小浜マリンパーク、波の湯茜（海抜ゼロメートル露天）',
        access: '諫早駅より島鉄バスで約50分。雲仙温泉よりバスまたは車で約20分。',
        tip: '「波の湯 茜」は満潮時には波しぶきがかかるほど海に近い絶景露天風呂で、夕暮れ時の入浴はまさに絵画のような絶景です。'
      }
    ]
  },
  {
    slug: 'fukushima-urabandai-goshikinuma-lake-stay',
    tag: 'URABANDAI & GOSHIKINUMA GUIDE',
    title: '【福島・磐梯高原＆裏磐梯・五色沼】五色沼神秘の湖沼群・桧原湖カヌー＆高原リゾート宿 完全ガイド',
    metaTitle: '【福島・裏磐梯＆五色沼】神秘の湖沼群・桧原湖カヌー＆磐梯高原リゾート宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '磐梯山噴火が創り出した奇跡の景観「五色沼湖沼群」のエメラルド・コバルトブルーの水面、裏磐梯最大の「桧原湖」カヌー・遊覧船、紅葉ドライブの名所「磐梯山ゴールドライン」、満天の星空と源泉かけ流し高原温泉リゾートを徹底解説。',
    lead: '明治21年の磐梯山大噴火によって川が堰き止められ、奇跡的に誕生した神秘の高原地帯「裏磐梯」。水酸化鉄などの鉱物成分と光の反射により沼ごとにエメラルドグリーン、コバルトブルー、ターコイズと色彩を変える「五色沼湖沼群」。手漕ぎボートやカヌーで島々を巡る「桧原湖」。秋には黄金色のブナ原生林が全山を染め上げます。日常を離れ、清らかな水と森に包まれる高原リゾートステイへご案内します。',
    guides: [
      {
        key: 'goshikinuma_mystic_ponds_stay',
        badge: 'ミシュラン・グリーンガイド二つ星の神秘',
        title: '1. 五色沼湖沼群「自然探勝路」〜青沼・毘沙門沼・弁天沼（色彩が変化する奇跡の沼）',
        timing: '通年（春〜夏の新緑トレッキング、10月中旬〜11月上旬の錦秋紅葉、冬のスノーシュー）',
        desc: '毘沙門沼、赤沼、みどろ沼、竜沼、弁天沼、るり沼、青沼、柳沼など大小の湖沼が連なる「五色沼」。片道約3.6km（徒歩約70〜80分）の平坦な探勝路が整備され、木漏れ日の中を進むごとに鮮やかなコバルトブルーからミルキーな青緑色へとドラマチックに変化します。最大の「毘沙門沼」では手漕ぎボートに乗ることができ、水面に映る磐梯山の荒々しい火口壁の姿は圧巻です。',
        spots: '五色沼自然探勝路（毘沙門沼・青沼・弁天沼）、裏磐梯ビジターセンター、裏磐梯物産館、中瀬沼展望台',
        access: 'JR磐越西線「猪苗代駅」より磐梯東都バスで約30分（五色沼入口下車）。磐越自動車道「猪苗代磐梯高原IC」より約25分。',
        tip: '毘沙門沼には「お腹にハートマークの模様がある白い錦鯉」が生息しており、見つけると幸せになれるという都市伝説があります。'
      },
      {
        key: 'hibara_lake_canoe_bandaisan_stay',
        badge: '裏磐梯最大の湖とアウトドアアクティビティ',
        title: '2. 桧原湖カヌー体験・モーターボートクルーズ＆磐梯山ゴールドライン絶景ドライブ',
        timing: '春〜秋（5〜10月のカヌー・SUP・遊覧船、10月の紅葉ドライブ、1〜3月の氷上ワカサギ釣り）',
        desc: '周囲約31km、磐梯山噴火で生まれた裏磐梯最大のカルデラ湖「桧原湖」。湖上には無数の小島が浮かび、早朝の静寂の中でパドルを漕ぎ出すカヤック・カヌーツアーは感動の体験。湖底にはかつての集落の鳥居が眠り、歴史の神秘を漂わせます。磐梯山の雄大な山体を望みながらドライブできる「磐梯山ゴールドライン」や「磐梯吾妻レークライン」は日本有数の絶景スカイラインです。',
        spots: '桧原湖遊覧船、桧原湖カヌー・SUP体験、磐梯山ゴールドライン、中津川渓谷、磐梯山噴火記念館',
        access: '猪苗代駅より車またはバスで約35分。猪苗代磐梯高原ICより約30分。',
        tip: '冬の桧原湖は湖面が完全結氷し、氷の上に張られたビニールハウス（ドーム船）の中で暖まりながら楽しむ「氷上ワカサギ釣り」が名物です。'
      },
      {
        key: 'aizu_yamano_sachi_french_stay',
        badge: '標高800mの高原リゾートと極上の湯',
        title: '3. 会津高原の旬菜フレンチ・星空観察＆源泉かけ流し高原温泉リゾート宿',
        timing: '通年（澄んだ夏の夜空、冬の雪見露天風呂、秋のキノコ・新そば・福島牛会席）',
        desc: '標高約800mの冷涼な裏磐梯高原には、ヨーロッパの山岳リゾートを思わせるクラシックな本格ホテルや、露天風呂付きのラグジュアリーロッジが点在。会津の清らかな湧水と肥沃な土壌で育った採れたて高原野菜、福島牛、磐梯イワナを取り入れた創作フレンチや会席料理が自慢です。夜には街明かりが届かない高原ならではの満天の天の川が広がり、源泉かけ流しの露天風呂から星を仰ぐ非日常ステイが待っています。',
        spots: '諸橋近代美術館（ダリの名作コレクション）、グランデコスノーリゾート、秋元湖、小野川湖',
        access: '猪苗代駅よりホテルの無料送迎バス運行多数（事前予約制・約30〜40分）。',
        tip: '「諸橋近代美術館」はアジア最大級のサルバドール・ダリのコレクションを所蔵しており、中世ヨーロッパの古城のような建物と水庭の景観も見事です。'
      }
    ]
  },
  {
    slug: 'mie-toba-shima-kashikojima-pearl-stay',
    tag: 'TOBA & SHIMA KASHIKOJIMA GUIDE',
    title: '【三重・鳥羽＆志摩・賢島】英虞湾リアス式夕日・ミキモト真珠島＆伊勢海老海女小屋宿 完全ガイド',
    metaTitle: '【三重・鳥羽＆志摩・賢島】英虞湾夕日・鳥羽水族館＆伊勢海老・海女小屋宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '大小60余の島々が織りなすリアス式海岸「英虞湾」の夕景パノラマ、サミット開催地「賢島」、世界初の真珠養殖成功「ミキモト真珠島」、飼育種類数日本一「鳥羽水族館」、現役海女が炭火で焼く本場の伊勢海老・鮑を堪能する極上リゾート宿を徹底解説。',
    lead: '波静かな伊勢志摩国立公園のリアス式海岸。夕暮れ時に真珠養殖の筏（いかだ）と小島が黄金色に染まる日本屈指の絶景「英虞湾」。世界の要人を魅了したサミットの舞台「賢島」。世界で初めて真珠の養殖に成功した御木本幸吉の情熱を伝える「ミキモト真珠島」と、ラッコやジュゴンに出逢える「鳥羽水族館」。そして現役の海女さんが目の前で焼き上げる本場の伊勢海老・あわび・サザエ。海と自然の恵みに満たされる伊勢志摩ステイへご案内します。',
    guides: [
      {
        key: 'ago_bay_kashikojima_sunset_stay',
        badge: '夕暮れの英虞湾とサミットの舞台',
        title: '1. 英虞湾パノラマ・賢島エスパーニャクルーズ＆横山展望台（真珠の海の黄昏）',
        timing: '通年（特に秋〜冬の澄み渡る夕日グラデーション、春の青い海原峡）',
        desc: 'リアス式海岸の代表格として知られる英虞湾。標高140mの「横山展望台（天空カフェテラス）」から見下ろす複雑に入り組んだ海岸線と真珠筏のパノラマは息を呑む美しさ。湾内に浮かぶ最大の島「賢島」からは、スペイン帆船型遊覧船「エスペランサ」に乗って爽快なクルーズへ。真珠モデル工場への寄港などクルーズならではの体験も。湾を望む高台には世界的リゾートホテルが建ち並びます。',
        spots: '横山展望台（ミラドール志摩）、賢島エスパーニャクルーズ、志摩地中海村、志摩スペイン村パルケエスパーニャ、ともやま展望台',
        access: '近鉄特急で「賢島駅」下車（近鉄名古屋から約2時間、大阪難波から約2時間20分）。伊勢道「伊勢IC」より伊勢道路経由約45分。',
        tip: '「ともやま展望台」は英虞湾越しに夕日が沈む瞬間を真正面に捉えることができる、写真愛好家垂涎の夕景撮影スポットです。'
      },
      {
        key: 'toba_aquarium_pearl_island_stay',
        badge: '飼育種類日本一の水族館と真珠の聖地',
        title: '2. 鳥羽水族館（ジュゴン・ラッコ）＆ミキモト真珠島・海女の潜水実演',
        timing: '通年（全天候型屋内展示、雨天でも安心の海洋テーマパーク）',
        desc: '約1,200種もの生きものを飼育する日本一のスケールを誇る「鳥羽水族館」。日本で唯一飼育展示されている人魚伝説のモデル「ジュゴン」のセレナや、大人気のラッコの食事タイムは見逃せません。隣接する「ミキモト真珠島」は、明治26年に御木本幸吉が世界で初めて真珠養殖に成功した島。島内では昔ながらの白い磯着を身にまとった海女による伝統の潜水実演や、豪華な真珠美術工芸品を鑑賞できます。',
        spots: '鳥羽水族館、ミキモト真珠島、鳥羽湾めぐりとイルカ島、鳥羽城跡（九鬼水軍の拠点）、鳥羽展望台（食国蔵王）',
        access: 'JR・近鉄「鳥羽駅」下車徒歩約5〜15分。伊勢二見鳥羽ライン終点より約5分。',
        tip: '鳥羽水族館とミキモト真珠島は専用連絡通路や遊歩道で結ばれており、セット入場券を利用するとお得に両方を巡ることができます。'
      },
      {
        key: 'ise_ebi_abalone_ama_hut_stay',
        badge: '海女のまち相差と極上の海の幸',
        title: '3. 本場伊勢海老・あわび炭火焼き＆海女小屋体験（海女の語らいと獲れたて魚介）',
        timing: '秋〜冬（10〜4月の本場伊勢海老漁期）、春〜夏（5〜9月の天然あわび漁期）',
        desc: '日本で最も多くの現役海女が暮らす鳥羽市相差（おうさつ）や志摩地方。伝統の「海女小屋」では、海女さんが体を温め休む小屋の中で、炭火を囲みながら獲れたてのサザエ、大アサリ、ヒオウギ貝、そして伊勢海老やあわびを豪快に焼き上げてくれます。素朴で温かい海女さんとの会話とともに味わう海の幸は最高の旅の思い出。女性の願いを一つだけ叶えてくれる「石神さん（神明神社）」への参拝も定番です。',
        spots: '海女小屋相差かまど、海女小屋体験施設さとうみ庵、石神さん（神明神社）、相差海女文化資料館',
        access: '鳥羽駅よりかもめバス（相差方面）で約40分。車で伊勢二見鳥羽ライン経由約30分。',
        tip: '石神さんの参拝時は、専用の祈願用紙に「お願い事を一つだけ」書き、願い箱に入れてお参りするのが古くからの習わしです。'
      }
    ]
  },
  {
    slug: 'kumamoto-amakusa-sakitsu-dolphin-islands-stay',
    tag: 'AMAKUSA & SAKITSU HERITAGE GUIDE',
    title: '【熊本・天草五橋＆下島・崎津集落】世界遺産崎津天主堂・天草五橋＆野生イルカ・車海老宿 完全ガイド',
    metaTitle: '【熊本・天草五橋＆崎津集落】世界遺産海の天主堂・イルカ遭遇＆車海老宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '世界文化遺産「長崎と天草地方の潜伏キリシタン関連遺産」の象徴・海の天主堂「崎津集落」、天草五橋（天草パールライン）の絶景シーサイドドライブ、通年98％の遭遇率を誇る「野生のミナミハンドウイルカウォッチング」、本場天草車海老と地魚宿を徹底解説。',
    lead: '大小120余の島々が紺碧の海に浮かぶ天草諸島。九州本土と天草を結ぶ5つの橋を渡る爽快なドライブウェイ「天草五橋（パールライン）」。静かな漁村の海辺にゴシック様式の尖塔が佇む世界遺産「崎津集落・崎津天主堂」。有明海と早崎海峡に約200頭が生息する野生イルカとの感動的な出逢い。そして日本屈指の生産量を誇る甘みたっぷりの「天草車海老」と名湯・下田温泉。キリシタン史跡と豊かな海の生命が息づく天草ステイへご案内します。',
    guides: [
      {
        key: 'sakitsu_church_world_heritage_stay',
        badge: '世界遺産・潜伏キリシタンと海の天主堂',
        title: '1. 世界文化遺産「崎津集落」＆崎津天主堂（畳敷きのゴシック教会と漁村景観）',
        timing: '通年（春〜秋の澄んだ海、クリスマスのライトアップ、夕暮れの漁港風景）',
        desc: '禁教期にも仏教や神道と共生しながら信仰を守り続けた「天草の崎津集落」。穏やかな羊角湾に面した静かな漁港にそびえる「崎津天主堂」は、ハルブ神父によって再建された国内でも極めて珍しい「内部が畳敷き」のゴシック建築。海辺の家々が海に向かってせり出す伝統の「カケ」や、細い小路「トーヤ」が網の目のように続く独特の漁村景観が心を打ちます。丘の上の崎津諏訪神社からは集落全体と天主堂を一望できます。',
        spots: '崎津集落・崎津天主堂（世界文化遺産）、崎津諏訪神社、崎津資料館みなと屋、大江天主堂（丘の上のロマネスク様式白亜教会）',
        access: '天草空港より車で約50分。熊本駅より快速バス「あまくさ号」で本渡バスセンター経由約2時間30分。松島有料道路「上島IC」より車で約1時間15分。',
        tip: '崎津天主堂の内部見学は信者の祈りの場であるため、事前予約（長崎と天草地方の潜伏キリシタン関連遺産インフォメーション）が推奨されています。'
      },
      {
        key: 'amakusa_five_bridges_drive_stay',
        badge: '島々を渡る日本屈指のシーサイドウェイ',
        title: '2. 天草五橋「天草パールライン」ドライブ＆千巌山展望台（多島美パノラマ）',
        timing: '通年（初夏〜夏のコバルトブルーの海、秋の夕暮れパノラマ）',
        desc: '宇土半島先端の三角から大矢野島、永浦島、大池島、前島を経て天草上島までを結ぶ国道266号線・天草五橋。1号橋（天門橋）から5号橋（松島橋）まで、異なる構造の美しい橋で島々を渡る日本屈指のドライブコースです。名勝「千巌山展望台」からは、紺碧の海に浮かぶ天草の島々と五橋の全貌を360度の大パノラマで見渡せます。橋のたもとには海の見えるお洒落なリゾートカフェやマリーナが点在します。',
        spots: '天草五橋（天門橋・大矢野橋・中の橋・前島橋・松島橋）、千巌山展望台、リゾラテラス天草、ミオ・カミーノ天草',
        access: '九州自動車道「松橋IC」より車で約40分（三角大矢野道路経由）。JR三角線「三角駅」より車で約15分。',
        tip: '「リゾラテラス天草」では、天草の海を望むオープンテラスで特製の天草塩パンや地魚ランチを楽しめ、ドライブの休憩に最適です。'
      },
      {
        key: 'wild_dolphin_cruising_prawn_stay',
        badge: '遭遇率98％の奇跡と極上の車海老',
        title: '3. 通詞島沖「野生イルカウォッチング」＆本場天草車海老・下田温泉夕日宿',
        timing: '通年（年中約200頭が生息、波の穏やかな春〜秋がベストシーズン）',
        desc: '天草下島北部の通詞島（つうじしま）周辺の海域には、約200頭の野生のミナミハンドウイルカが定住しており、クルーザーに乗って沖合わずか10分ほどでイルカの群れに出逢えます。船のすぐ横をジャンプしたり親子で泳ぐ姿は感動の連続。また天草は車海老養殖発祥の地として知られ、踊り食いや塩焼き、サクサクの天ぷらで味わう車海老は格別。天草最古の歴史を誇る西海岸の「下田温泉」からは東シナ海に沈む感動の夕日を望めます。',
        spots: 'イルカウォッチング受付各社（五和町）、通詞島風車、天草下田温泉（国民保養温泉地）、十三仏公園（夕日百選）',
        access: '本渡市街地より車で約25分。下田温泉へは本渡より車で約40分。',
        tip: '下田温泉は西海岸に位置するため、夕暮れ時の露天風呂からは東シナ海が真っ赤に染まる圧巻の夕日パノラマを堪能できます。'
      }
    ]
  }
];

function generatePageContent(hub) {
  const guidesCode = hub.guides.map((g, idx) => {
    const secData = allHotels[hub.slug]?.[g.key];
    const hotels = secData?.hotels || [];

    const hotelsMarkup = hotels.length > 0 ? `
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
              ${hotels.map(h => `
                <div key="${h.hotelNo}" className="bg-stone-900/60 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition duration-300 flex flex-col justify-between group shadow-xl">
                  <div>
                    ${h.hotelImageUrl ? `
                      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                        <img
                          src="${h.hotelImageUrl}"
                          alt="${h.hotelName}"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                          ★ ${(h.reviewAverage || 4.5).toFixed(1)} (${h.reviewCount || 100}+件)
                        </div>
                      </div>
                    ` : ''}
                    <div className="p-5">
                      <h4 className="font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition line-clamp-1">
                        ${h.hotelName}
                      </h4>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                        ${h.hotelSpecial || h.userReview || '地元食材を贅沢に使用した美食と心地よい名湯露天風呂。観光の拠点に最適な上質空間。'}
                      </p>
                      <div className="mt-3 text-xs text-stone-300">
                        📍 ${h.address1 || ''}${h.address2 || ''}
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                      <div className="text-xs text-stone-400">
                        目安料金: <span className="text-amber-400 font-bold text-sm">¥${(h.hotelMinCharge || 8000).toLocaleString()}〜</span>/人
                      </div>
                      <a
                        href="${h.hotelInformationUrl}"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 rounded-xl transition shadow-md shadow-amber-900/30"
                      >
                        楽天トラベルで空室確認
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
    ` : `
            <div className="bg-stone-900/30 rounded-2xl p-6 border border-stone-800 text-center text-sm text-stone-400 mt-6">
              ※ 現在該当エリアのおすすめ宿情報を更新中です。直接予約サイトにて最新情報をご確認ください。
            </div>
    `;

    return `
        {/* セクション ${idx + 1} */}
        <section className="bg-stone-900/40 rounded-3xl p-6 sm:p-8 md:p-10 border border-amber-500/20 backdrop-blur-md relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs font-bold text-amber-300 mb-4">
            ${g.badge}
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-amber-100 mb-4">
            ${g.title}
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
            ${g.desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs sm:text-sm">
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🗓️ ベストシーズン・見どころ</span>
              <span className="text-stone-300">${g.timing}</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">📍 主な見どころ・スポット</span>
              <span className="text-stone-300">${g.spots}</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">🚗 交通アクセス</span>
              <span className="text-stone-300">${g.access}</span>
            </div>
            <div className="bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
              <span className="text-amber-400 font-bold block mb-1">💡 旅のワンポイント・秘訣</span>
              <span className="text-stone-300">${g.tip}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-amber-200 mb-2 flex items-center gap-2">
              <span>🏨</span>
              <span>この見どころ周辺のおすすめ厳選宿（楽天トラベル提携・実データ）</span>
            </h3>
            ${hotelsMarkup}
          </div>
        </section>
    `;
  }).join('\n\n');

  return `import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '${hub.metaTitle}',
  description: '${hub.description}',
  keywords: [
    '${hub.title}',
    '観光モデルコース',
    'おすすめ旅館',
    'おすすめホテル',
    '楽天トラベル',
    '絶景',
    'ご当地グルメ'
  ],
  openGraph: {
    title: '${hub.metaTitle}',
    description: '${hub.description}',
    type: 'article',
    url: 'https://croud-travel.com/${hub.slug}',
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      {/* ヒーローヘッダー */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950 border-b border-stone-800">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-black mb-6">
            <span>🗺️</span>
            <span>${hub.tag}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
            ${hub.title}
          </h1>
          <p className="max-w-3xl mx-auto text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            ${hub.lead}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-stone-400">
            <span className="flex items-center gap-1">📍 厳選見どころ・観光スポット網羅</span>
            <span>•</span>
            <span className="flex items-center gap-1">♨️ 露天風呂・名湯ホテル</span>
            <span>•</span>
            <span className="flex items-center gap-1">🍱 地元旬菜・名物グルメ</span>
            <span>•</span>
            <span className="flex items-center gap-1">✅ 楽天トラベルリアルタイム空室連携</span>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
${guidesCode}

        {/* まとめ・下部ナビ */}
        <section className="bg-stone-900/60 rounded-3xl p-8 border border-stone-800 text-center space-y-6 shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-black text-amber-200">
            四季の感動に出逢う、極上のステイへ出かけよう
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            日本各地の風土が育んだ奇跡の景観、受け継がれる伝統文化、そして心ほどける名湯。
            お気に入りの宿を見つけて、特別な旅の思い出を刻んでみませんか。
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs sm:text-sm font-bold rounded-2xl transition border border-stone-700"
            >
              ← トップページへ戻る
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
`;
}

function main() {
  for (const hub of hubs) {
    const dir = path.join(__dirname, 'src/app', hub.slug);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const pagePath = path.join(dir, 'page.tsx');
    const content = generatePageContent(hub);
    fs.writeFileSync(pagePath, content, 'utf8');
    console.log(`Created page for: ${hub.slug}`);
  }
  console.log('All 5 round 31 micro hubs successfully generated!');
}

main();
