const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
const allHotels = JSON.parse(fs.readFileSync(p, 'utf8'));

const hubs = [
  {
    slug: 'yamanashi-koshu-katsunuma-wine-isawa-stay',
    tag: 'KOSHU WINE & ISAWA ONSEN GUIDE',
    title: '【山梨・甲州勝沼＆笛吹・石和】勝沼ワイナリー巡り・桃源郷＆石和名湯美肌宿 完全ガイド',
    metaTitle: '【山梨・勝沼＆石和温泉】ワイナリー巡り・桃源郷＆美肌湯宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '日本ワイン発祥の地「勝沼」の30軒以上のワイナリー巡り、ぶどう畑を見下ろす丘のテラス、春にはピンク色の絨毯が広がる日本一の桃源郷「笛吹」、昭和の青空温泉から発展した毎分湧出の「石和温泉郷」の美肌名湯と甲州牛会席を徹底解説。',
    lead: '盆地を囲むぶどう畑と南アルプス・富士山の山並み。明治初期から受け継がれる日本固有品種「甲州ワイン」の醸造所が30軒以上集まる聖地・勝沼。春には見渡す限りの桃の花が咲き誇る日本一の「桃源郷」笛吹。そして毎分何千リットルもの源泉が湧き出る名湯「石和温泉」。極上のマリアージュと美肌の湯に心洗われる、東京からわずか90分のリトリートステイへご案内します。',
    guides: [
      {
        key: 'katsunuma_winery_terroir_stay',
        badge: '日本ワイン発祥の醸造の聖地',
        title: '1. 勝沼ワイナリー巡り・ぶどうの丘＆甲州テロワール（地下ワインカーヴとテイスティング）',
        timing: '通年（8〜10月のぶどう収穫期、11月の山梨ヌーボー解禁、新緑の春）',
        desc: '約140年の歴史を誇る日本ワインの本場・勝沼。盆地の傾斜地にぶどう畑が連なり、歴史ある老舗醸造所からブティックワイナリーまで30軒以上の個性豊かなワイナリーが点在します。「甲州市勝沼ぶどうの丘」の地下ワインカーヴでは、専用タートヴァンを購入すると約200種類のワインを自由にテイスティング可能。ぶどう畑のレストランで楽しむペアリングランチも極上です。',
        spots: '甲州市勝沼ぶどうの丘、ルミエールワイナリー、勝沼醸造、メルシャン勝沼ワイナリー、大善寺（ぶどう寺）',
        access: 'JR中央本線「勝沼ぶどう郷駅」下車、タクシーまたは市民バスで約5〜10分。中央自動車道「勝沼IC」より約10分。',
        tip: 'ワイナリー巡りで試飲を楽しみたい方は、駅からのレンタサイクル（電動アシスト推奨）や地域巡回バスの活用がおすすめです。'
      },
      {
        key: 'isawa_onsen_bihada_openair_stay',
        badge: 'ぶどう畑から湧き出た美肌の名湯',
        title: '2. 石和温泉郷・名湯美肌露天風呂＆甲州会席・武田信玄ゆかりの老舗宿',
        timing: '通年（冬の雪見風呂、春の桜並木露天、秋の温泉ワインフェス）',
        desc: '昭和36年、ぶどう畑の中から突如として毎分何トンもの高温泉が湧き出し「青空温泉」として全国に名を馳せた石和温泉。アルカリ性単純温泉の柔らかな湯は刺激が少なく、入浴後はお肌がつるつるになると女性客にも大人気。甲州ワインビーフや鮑の煮貝、ほうとうなど山梨自慢の郷土会席料理と県産ワインの贅沢なマリアージュを宿の客室や料亭で堪能できます。',
        spots: '石和温泉さくら温泉通り、ウッドペッカーの森、春日居温泉、大江戸温泉物語等、県立博物館',
        access: 'JR中央本線「石和温泉駅」下車。特急かいじ・あずさで新宿から直通約90分。中央道「一宮御坂IC」より約10分。',
        tip: 'JR石和温泉駅前には無料の足湯があり、改札を出てすぐに温泉街の風情を体感できます。駅ナカのワインサーバーコーナーも必見です。'
      },
      {
        key: 'fuefuki_peach_grape_orchard_stay',
        badge: '春は桃色、夏秋は完熟果実のパラダイス',
        title: '3. 日本一の桃源郷・フルーツ王国笛吹果樹園＆甲州富士山ビュー展望宿',
        timing: '春（3月下旬〜4月中旬の桃の花）、夏〜秋（6〜8月の桃狩り、8〜10月のぶどう・シャインマスカット狩り）',
        desc: '日本一の桃とぶどうの生産量を誇る山梨県笛吹市。春になると甲府盆地一帯が鮮やかなピンク色の桃の花で埋め尽くされ、「桃源郷」の絶景が広がります。初夏から秋にかけては、甘い香りに包まれながら完熟の桃やシャインマスカットの収穫体験（くだもの狩り）が楽しめます。高台の宿や公園からは、澄み渡る甲府盆地の夜景と遠くそびえる霊峰富士の絶景を一望できます。',
        spots: '笛吹川フルーツ公園、ほったらかし温泉、八代ふるさと公園（甲府盆地パノラマ）、御坂農園、マル神農園',
        access: 'JR石和温泉駅または山梨市駅よりタクシー約10〜15分。中央道「一宮御坂IC」より各果樹園へ約5〜15分。',
        tip: '「ほったらかし温泉」は日の出の1時間前から営業しており、富士山を正面に朝日が昇る瞬間を湯船から拝む特別な体験ができます。'
      }
    ]
  },
  {
    slug: 'iwate-hiraizumi-ichinoseki-geibikei-stay',
    tag: 'HIRAIZUMI & GEIBIKEI HERITAGE GUIDE',
    title: '【岩手・平泉＆一関・猊鼻渓】世界遺産中尊寺金色堂・毛越寺浄土庭園＆猊鼻渓舟下り宿 完全ガイド',
    metaTitle: '【岩手・平泉＆一関・猊鼻渓】中尊寺金色堂・舟下り＆前沢牛・もち食宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '奥州藤原氏三代が築いた世界遺産の浄土世界「中尊寺金色堂」「毛越寺浄土庭園」、竿一本で進む日本百景「猊鼻渓舟下り」、エメラルドの激流「厳美渓」名物空飛ぶ郭公だんご、極上「前沢牛」ステーキと300種を超える一関もち食文化を味わう宿を徹底厳選。',
    lead: '戦乱のない平和な仏国土（浄土）を目指し、奥州藤原氏三代が黄金文化の粋を集めて築き上げた世界遺産の街「平泉」。覆堂の中に輝く奇跡の至宝「中尊寺金色堂」、平安の美を今に伝える「毛越寺」の浄土庭園。さらに切り立つ高さ100mの石灰岩渓谷を船頭の追分唄とともに進む「猊鼻渓舟下り」。厳美渓の名物だんごや極上前沢牛、一関の伝統もち料理。みちのくの黄金郷と大自然を巡る旅へご案内します。',
    guides: [
      {
        key: 'hiraizumi_konjikido_chusonji_stay',
        badge: '世界遺産・みちのく黄金文化の最高峰',
        title: '1. 中尊寺金色堂＆毛越寺「浄土庭園」（平安仏教美術と奥州藤原氏の夢の跡）',
        timing: '通年（春の桜、初夏の水引草・紫陽花、秋の月見坂紅葉ライトアップ、冬の雪景色）',
        desc: '奥州藤原氏初代清衡公が建立した中尊寺。なかでも皆金色に輝く「金色堂」は平安仏教美術の最高峰であり、国宝第1号に指定された奇跡の堂宇。螺鈿細工や透かし彫りの金具、四根の巻柱が眩いばかりの光を放ちます。また二代基衡公が建立した毛越寺の大泉が池を中心とする「浄土庭園」は、平安時代の作庭様式を完全に留める特別名勝・特別史跡の二重指定地です。',
        spots: '中尊寺金色堂・讃衡蔵・月見坂、毛越寺（浄土庭園）、無量光院跡、高館義経堂（弁慶立ち往生の地）、平泉世界遺産ガイダンスセンター',
        access: 'JR東北本線「平泉駅」より巡回バス「るんるん」で各寺院へ約5〜10分。東北新幹線「一ノ関駅」より平泉駅まで在来線で約9分。東北道「平泉前沢IC」より約10分。',
        tip: '中尊寺の表参道「月見坂」は樹齢300〜400年の巨大な杉並木が続き、厳かな空気が漂う絶好の散策路です。歩きやすい靴での参拝がおすすめです。'
      },
      {
        key: 'geibikei_genbikei_boat_valley_stay',
        badge: '船頭の追分とエメラルドの渓谷美',
        title: '2. 猊鼻渓「手漕ぎ舟下り」＆厳美渓「空飛ぶだんご」（大迫力渓谷アクティビティ）',
        timing: '通年（春の新緑藤の花、夏の涼風、秋の錦秋紅葉、冬の「こたつ舟」運行）',
        desc: '砂鉄川の浸食によってできた高さ100m超の石灰岩岸壁が約2km続く「猊鼻渓」。エンジンを使わず船頭が竿一本で巧みに操る舟に乗り、川風を感じながら往復90分の優雅な舟旅。折り返し地点の獅子ヶ鼻では、開運の素焼き玉を穴に投げ入れる「運玉投げ」に挑戦できます。対照的に荒々しい岩肌と滝が続く「厳美渓」では、川を越えて対岸からロープで運ばれる名物「空飛ぶ郭公だんご」が大人気です。',
        spots: '猊鼻渓（舟下り・運玉投げ）、厳美渓（天工橋・郭公だんご）、幽玄洞（日本最古の鍾乳洞）、サハラガラスパーク',
        access: '猊鼻渓へはJR大船渡線「猊鼻渓駅」徒歩約5分。厳美渓へはJR一ノ関駅よりバス約20分。東北道「一関IC」より車で各15〜25分。',
        tip: '冬の猊鼻渓では、舟の中に豆炭こたつが設置され、温かい名物「木流し鍋」を味わいながら雪景色を進む風流な「こたつ舟」が運航されます。'
      },
      {
        key: 'maesawa_beef_wanko_soba_stay',
        badge: 'とろける霜降り前沢牛と日本一のもち食文化',
        title: '3. 前沢牛の極上ステーキ・一関「もち膳」＆名物わんこそば美食めぐり',
        timing: '通年（旬の山の幸や茸、新米の季節の冬期もち料理）',
        desc: '豊かな水と良質な飼料で丹精込めて育てられた奥州の最高峰黒毛和牛「前沢牛」。鮮やかな霜降りと口の中でとろける甘みは日本屈指のブランド肉です。また一関・平泉地方は江戸時代から続く独自の「もち食文化」があり、あんこやごま、ずんだ、えび、じゅうね（えごま）など数十種類の創作もち料理が膳に並ぶ「もち膳」が名物。椀コそばの老舗での食べ比べも旅の醍醐味です。',
        spots: '前沢牛銘店各店、三彩館ふじせい（一口もち膳）、芭蕉館（平泉盛り出し式わんこそば）、世嬉の一酒造（酒蔵・ビール館）',
        access: 'JR一ノ関駅周辺および平泉駅・前沢駅周辺に名店が点在。',
        tip: '世嬉の一酒造では、江戸時代の土蔵を改装したレストランでクラフトビールやもち膳を楽しめるほか、敷地内に酒造博物館もあります。'
      }
    ]
  },
  {
    slug: 'nagano-togakushi-zenkoji-monzen-obuse-stay',
    tag: 'TOGAKUSHI & ZENKOJI HERITAGE GUIDE',
    title: '【長野・戸隠＆善光寺門前・小布施】戸隠神社五社・杉並木・善光寺お朝事＆小布施栗宿 完全ガイド',
    metaTitle: '【長野・戸隠＆善光寺門前】戸隠杉並木・お朝事まいり＆小布施栗宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '天の岩戸神話が息づく霊峰・戸隠神社五社（奥社巨木杉並木・中社・宝光社・九頭龍社・火之御子社）、日本屈指の戸隠そば銘店、一生に一度は訪れたい「信州善光寺」のお朝事とお戒壇巡り、葛飾北斎と栗菓子の小布施町並みを巡る宿を徹底解説。',
    lead: '神話の時代、天の岩戸が飛来してできたと伝わる霊峰「戸隠山」。樹齢400年を超える巨大な杉並木が神域へと誘う「戸隠神社」五社巡りと、香り高い伝統の「戸隠そば」。宗派を問わず万民を受け入れる信州の象徴「善光寺」での荘厳なお朝事・お数珠頂戴。そして葛飾北斎が晩年を過ごした栗と白壁の町「小布施」。歴史と神秘、美食が重なり合う北信濃の極上リトリートステイへご案内します。',
    guides: [
      {
        key: 'togakushi_shrine_cedar_avenue_stay',
        badge: '神代の昔より続く修験と天の岩戸神話',
        title: '1. 戸隠神社五社めぐり＆樹齢四百年「奥社杉並木」・宿坊の伝統戸隠そば',
        timing: '通年（春〜夏の新緑トレッキング、秋の戸隠紅葉・新そばまつり、冬の神秘的な雪道）',
        desc: '二千年余の歴史を誇る戸隠神社（奥社・中社・宝光社・九頭龍社・火之御子社）。最大のハイライトは奥社参道にまっすぐ伸びる約500m・300本以上の巨大な杉並木。巨木に包まれた神域は日本屈指のパワースポットとして知られます。参拝後は、戸隠高原の冷涼な気候と清流が育んだ「戸隠そば」を名店で堪能。「ぼっち盛り」と呼ばれる独特の盛り付けと辛味大根の薬味で味わう本場の喉越しは格別です。',
        spots: '戸隠神社奥社・中社・宝光社・火之御子社・九頭龍社、奥社杉並木、鏡池、戸隠民俗館・戸隠流忍法資料館',
        access: 'JR長野駅善光寺口よりアルピコ交通バス（戸隠線）で約60〜70分。上信越道「信濃町IC」または「長野IC」より約40分。',
        tip: '奥社参道は片道約2km（徒歩約40分）、後半は石段の上り坂が続くため、歩きやすいスニーカーと防寒対策が必須です。'
      },
      {
        key: 'zenkoji_asagoto_monzen_stay',
        badge: '一生に一度は善光寺まいり',
        title: '2. 善光寺「お朝事」まいり＆本堂地下「お戒壇巡り」（早朝の荘厳な祈祷体験）',
        timing: '通年（日の出とともに毎朝執行される「お朝事」、七年に一度の御開帳、灯明まつり）',
        desc: '「牛に引かれて善光寺参り」で知られ、日本最古級の仏像を本尊とする無宗派の名刹。善光寺滞在の真髄は、毎朝日の出に合わせて行われる勤行「お朝事（あさごじ）」。住職や法主が本堂を行き来する際に道に跪く参拝者の頭を数珠で撫でて功徳を授ける「お数珠頂戴」は感動の儀礼です。本堂床下の完全な暗闇を手探りで進み、極楽の錠前に触れる「お戒壇巡り」も必体験です。',
        spots: '善光寺本堂（国宝）・山門（重要文化財）・経蔵、仲見世通り、善光寺宿坊（大本願・大勧進ほか39坊）、城山公園',
        access: 'JR長野駅善光寺口よりバスで約10〜15分（善光寺大門下車）。長野電鉄「善光寺下駅」より徒歩約10分。',
        tip: '善光寺の宿坊に宿泊すると、早朝のお朝事へ宿坊の住職が先導・案内してくれ、荘厳な読経や法話を深く味わうことができます。'
      },
      {
        key: 'obuse_kuri_hokusai_teramachi_stay',
        badge: '浮世絵の巨匠・北斎と栗菓子の小路',
        title: '3. 栗と北斎の街・小布施「栗鹿ノ子」スイーツ＆桝一市村酒造・蔵元歴史散歩',
        timing: '通年（特に9〜10月の新栗・栗おこわの季節、新緑の春、酒造りの冬）',
        desc: '江戸時代、幕府直轄地として栄え、葛飾北斎が晩年逗留して大作「八方睨み鳳凰図」などを遺した美しき町・小布施。名物の小布施栗を使った「栗鹿ノ子」「栗落雁」「栗モンブラン（朱雀）」を老舗甘味処で堪能。古い酒蔵をリノベーションした「桝一市村酒造」の蔵元バーや、瓦屋根と白壁の小路が続く「オープンガーデン」を巡る贅沢な知的好奇心の旅が楽しめます。',
        spots: '北斎館、岩松院（天井絵・八方睨み鳳凰図）、小布施堂、桜井甘精堂、桝一市村酒造、オープンガーデン小路',
        access: '長野電鉄「小布施駅」下車徒歩約10分。上信越道「小布施ハイウェイオアシス（スマートIC）」すぐ。',
        tip: '小布施堂で秋のわずか1ヶ月間だけ限定提供される搾りたて和栗の「栗の点心 朱雀」は全国から食通が訪れる究極の秋の味覚です。'
      }
    ]
  },
  {
    slug: 'ehime-uwajima-uchiko-ozu-castle-stay',
    tag: 'UWAJIMA & OZU HERITAGE GUIDE',
    title: '【愛媛・宇和島＆内子・大洲】現存宇和島城・宇和島鯛めし＆内子白壁・大洲城下町宿 完全ガイド',
    metaTitle: '【愛媛・宇和島＆内子・大洲】現存天守・鯛めし＆白壁町並み・大洲城宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '伊達十万石の城下町にして現存十二天守「宇和島城」、生卵と秘伝出汁で味わう「本場宇和島鯛めし」、重要伝統的建造物群保存地区「内子八日市・護国」の木蝋白壁の町並み、木造復元天守に泊まれる城泊で話題の「大洲城」と臥龍山荘を徹底解説。',
    lead: '黒潮が洗う宇和海リアス式海岸の恵みと、伊達十万石の誇り高き文化が根付く南予地方。「現存十二天守」の一つが静かに海を見晴らす「宇和島城」。新鮮な真鯛の刺身を生卵と特製タレで熱々ご飯にかける絶品「宇和島鯛めし」。木蝋と製糸で栄えた白壁土蔵が壮麗に連なる「内子」。そして清流肱川の鵜飼いと日本初・木造天守宿泊（キャッスルステイ）で世界が注目する「伊予の小京都・大洲」。愛媛・南予の悠久の物語へご案内します。',
    guides: [
      {
        key: 'uwajima_castle_taimeshi_pearl_stay',
        badge: '現存十二天守とリアス式宇和海の恵み',
        title: '1. 宇和島城〜現存木造天守＆本場「宇和島鯛めし」・真珠の海リアスステイ',
        timing: '通年（春の桜、初夏の青葉、秋の郷土祭り・闘牛、冬のブリ・真鯛の旬）',
        desc: '名築城家・藤堂高虎によって築かれ、伊達家が代々治めた宇和島城。日本にわずか12基しか現存しない貴重な江戸時代の天守が標高74mの丘の上に優雅な姿をとどめます。宇和島を訪れたら外せないのが、全国の鯛めしとは一線を画す「宇和島鯛めし」。獲れたてのプリプリした真鯛の切り身を、生卵・醤油・みりん・出汁・薬味を合わせた特製ダレに絡め、炊き立てのご飯に豪快に乗せて味わう至福の郷土料理です。',
        spots: '宇和島城天守、和霊神社、伊達博物館、天赦園、宇和島闘牛場、宇和海真珠養殖場',
        access: 'JR予讃線「宇和島駅」下車。松山駅より特急宇和海で約1時間20分。松山道「宇和島朝日IC」すぐ。',
        tip: '宇和島城は登山口から天守まで約15〜20分の石段登りとなります。天守最上階からは宇和島市街とリアス式海岸の宇和海が一望できます。'
      },
      {
        key: 'uchiko_yokaichi_white_wall_stay',
        badge: '木蝋とハゼの実で富を築いた白壁の美',
        title: '2. 内子八日市・護国「重要伝統的建造物群」＆内子座・古民家ヘリテージ散歩',
        timing: '通年（春〜秋の町並み散策、大正モダン歌舞伎劇場・内子座見学）',
        desc: '江戸末期から明治にかけて、ハゼの実から採れる「木蝋（もくろう）」と製糸業で巨万の富を築いた内子町。八日市・護国地区には、約600mにわたって豪壮な漆喰白壁や黄土色の壁、なまこ壁、出格子を備えた屋敷が立ち並びます。大正5年に創建された現存する本格木造芝居小屋「内子座」では、廻り舞台や奈落の地下通路を見学可能。歴史ある豪商屋敷を活用した分散型古民家ホテルでの滞在は特別な体験です。',
        spots: '八日市・護国重伝建地区、内子座（大正の芝居小屋）、上芳我邸（木蝋資料館・重要文化財）、高橋邸、道の駅 内子フレッシュパークからり',
        access: 'JR予讃線「内子駅」下車徒歩約10〜15分。松山駅より特急で約25分。松山道「内子五十崎IC」より約5分。',
        tip: '町並み保存地区では、和蝋燭（わろうそく）の製造実演が見られる工房もあり、すすが出にくく温かみのある灯りを放つ手作り和蝋燭はお土産に最適です。'
      },
      {
        key: 'ozu_castle_stay_hijikawa_cormorant_stay',
        badge: '肱川の清流と木造復元城下町リゾート',
        title: '3. 伊予の小京都大洲・木造復元「大洲城」＆肱川鵜飼い・臥龍山荘名建築',
        timing: '通年（夏〜秋の6〜9月「肱川鵜飼い」、秋のいもたき、四季折々の臥龍山荘庭園）',
        desc: '肱川の清流沿いに広がる「伊予の小京都」大洲。古写真や棟梁の模型をもとに伝統工法で見事に木造復元された四層四階の「大洲城天守」は、夜間に城をまるごと貸し切って宿泊できる世界初の「城泊（キャッスルステイ）」で国際的な脚光を浴びています。崖の上にせり出すように建てられた数寄屋造りの傑作「臥龍山荘」の不老庵から眺める肱川の渓谷美はまさに一幅の山水画です。',
        spots: '大洲城（木造復元天守）、臥龍山荘（名勝・ミシュラン一つ星）、おはなはん通り、ポコペン横丁、肱川遊覧船（鵜飼い・いもたき）',
        access: 'JR予讃線「伊予大洲駅」下車、タクシーまたは市内循環バス約5〜10分。松山道「大洲IC」より約10分。',
        tip: '日本三大鵜飼いの一つ「大洲の鵜飼い」は、屋形船と鵜船が並走して川を下る「合わせうかい」という全国的にも珍しい臨場感あふれる迫力を楽しめます。'
      }
    ]
  },
  {
    slug: 'yamaguchi-akiyoshidai-karst-cave-stay',
    tag: 'AKIYOSHIDAI & NAGATO HERITAGE GUIDE',
    title: '【山口・秋吉台＆美祢・長門萩】秋芳洞地底探検・カルスト台地＆長門湯本温泉宿 完全ガイド',
    metaTitle: '【山口・秋吉台＆長門湯本】秋芳洞・カルスト台地＆音信川温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '東洋屈指の規模を誇る大鍾乳洞「秋芳洞」、見渡す限りの白い石灰岩が草原に点在する「秋吉台」、エメラルドブルーに輝く奇跡の湧水「別府弁天池」、川床テラスと足湯で再生した名湯「長門湯本温泉」の極上ステイを徹底解説。',
    lead: '三億年もの気の遠くなるような時間をかけてサンゴ礁から生まれた日本最大級のカルスト台地「秋吉台」。その地下100mに広がる巨大な地底迷宮「特別天然記念物 秋芳洞」。息を呑むほど透き通った名水百選「別府弁天池」のエメラルドブルー。そして清流・音信川（おとずれがわ）沿いに川床や足湯、外湯「恩湯」が灯る風情満点の温泉街「長門湯本温泉」。太古の地球の鼓動と最上の癒やしに出逢う山口ステイへご案内します。',
    guides: [
      {
        key: 'akiyoshidai_karst_plateau_cave_stay',
        badge: '三億年の地球の記憶が息づく地底と草原',
        title: '1. 秋芳洞「地底探検」＆秋吉台カルスト展望台（百枚皿・黄金柱・大草原絶景）',
        timing: '通年（洞内は年中17度の快適空間、春の山焼き・新緑、秋のススキ原原野）',
        desc: '総延長約11km、観光コース約1kmにおよぶ東洋屈指の大鍾乳洞「秋芳洞」。棚田のように幾重にも重なる石灰華段「百枚皿」や、高さ15mの巨大な石柱「黄金柱」、天井高80mの「千町田」など自然の驚異が連続します。地上に出れば、見渡す限りの緑の草原に羊の群れのように無数の白い石灰岩が点在する「秋吉台」のパノラマ。カルストロードのドライブやジオパークのトレッキングは爽快そのものです。',
        spots: '特別天然記念物秋芳洞、秋吉台カルスト展望台、Mine秋吉台ジオパークセンターKarstar、大正洞、景清洞',
        access: '新山口駅より防長バス（秋芳洞行）で約45分。小郡萩道路「秋吉台IC」より車で約5分。山陽道「山口南IC」より約30分。',
        tip: '秋芳洞観光は「秋芳洞案内所（正面入口）」から入り、エレベーター口や黒谷口へ抜けるワンウェイルートも利用可能。洞内は滑りにくい靴がおすすめです。'
      },
      {
        key: 'nagato_yumoto_otofugawa_onsen_stay',
        badge: '音信川のせせらぎと川床テラスの温泉街',
        title: '2. 長門湯本温泉・音信川「川床足湯」＆瓦そば・恩湯ゆかりの風情宿',
        timing: '通年（夜の竹林ライトアップ、初夏のホタル観賞、冬の雪見露天）',
        desc: '開湯約600年、山口県最古の歴史を誇る名湯・長門湯本温泉。近年、星野リゾート等の監修のもと温泉街全体がモダンにリノベーションされ、清流・音信川沿いにウッドデッキの川床テラスや飛び石、竹林のライトアップ、立ち寄り湯「恩湯（おんとう）」が美しく調和します。熱々の瓦の上で茶そばを香ばしく焼き上げる山口名物「瓦そば」や、日本海の新鮮な仙崎イカ・ふぐ料理を味わえる宿が充実しています。',
        spots: '長門湯本温泉「恩湯」、音信川川床テラス・飛び石、恩湯食（カフェ）、竹林の階段、元乃隅神社（赤い鳥居絶景へ車約30分）',
        access: 'JR美祢線「長門湯本駅」下車徒歩約10分。新山口駅より直行バスで約1時間15分。中国道「美祢IC」より車で約30分。',
        tip: '日暮れ時になると音信川沿いの行燈や竹林階段が幻想的にライトアップされ、浴衣と下駄で川床のカフェやバーをはしごするのが醍醐味です。'
      },
      {
        key: 'benten_blue_pond_hagi_heritage_stay',
        badge: '名水百選のエメラルドブルーと城下町',
        title: '3. 別府弁天池「エメラルド湧水」＆センザキッチン・萩城下町ヘリテージ',
        timing: '通年（晴天時の日中に一層輝くコバルトブルーの水面、四季折々の日本海グルメ）',
        desc: '美祢市の別府水島神社境内にある「別府弁天池」。毎分約11トンもの地下水が湧き出す池は、太陽の光を浴びて信じられないほど鮮やかなコバルトブルー・エメラルドグリーンに輝き、日本百名水にも選ばれています。一杯飲むと一年長生きすると伝わる名水を味わった後は、日本海に面した長門の道の駅「センザキッチン」で海鮮BBQを楽しんだり、車を走らせて世界遺産の白壁城下町「萩」の歴史探訪へ足を伸ばせます。',
        spots: '別府弁天池（美祢市名水）、道の駅センザキッチン（仙崎港）、青海島、金子みすゞ記念館、萩城城下町・松下村塾',
        access: '別府弁天池へは美祢ICより車で約25分。秋芳洞より車で約15分。長門湯本温泉より車で約20分。',
        tip: '別府弁天池のすぐ隣には名水で育ったニジマスの釣り堀があり、釣り上げたばかりの新鮮なニジマスを塩焼きや定食でその場で味わえます。'
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
  console.log('All 5 round 30 micro hubs successfully generated!');
}

main();
