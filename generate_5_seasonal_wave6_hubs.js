const fs = require('fs');
const path = require('path');

const wave6Configs = [
  {
    slug: 'autumn-winter-private-bath-ryokan',
    badge: 'PRIVATE BATH & IN-ROOM DINING',
    title: '【おこもり贅沢】貸切露天風呂＆お部屋食の極上温泉旅館 完全ガイド',
    metaDesc: '誰にも気兼ねしない二人だけの至福の時間。箱根強羅、伊豆修善寺、熊本黒川温泉、京都嵯峨嵐山など、無料貸切露天風呂や贅沢な部屋食会席プランを備えた秋・冬のおこもり人気宿を徹底解説。',
    heroDesc: '湯けむり立ち上るプライベートな貸切露天風呂で手足を伸ばし、夜は誰にも邪魔されず客室でいただく出来立ての贅沢会席。カップルやご夫婦、記念日旅行に最適な極上のおこもり温泉旅館へ。',
    categoryKey: 'autumn-winter-private-bath-ryokan',
    areaGuides: [
      {
        key: 'hakone_private_bath',
        title: '1. 神奈川・箱根強羅温泉（美肌の白濁湯を独占！絶景貸切露天とお部屋食会席）',
        timing: '通年（秋の紅葉・冬の雪見風呂が最高）',
        desc: '大涌谷から引湯する乳白色の酸性硫酸塩泉。複数の貸切露天風呂を無料で巡ることができる宿や、相模湾の地魚と足柄牛のすき焼きをお部屋でゆっくり味わえる名門旅館が揃っています。',
        spots: '箱根強羅公園（クラフトハウス）、箱根美術館（名勝庭園・苔庭）、早雲山（cu―mo箱根足湯）',
        access: '箱根登山鉄道「強羅駅」下車。小田急ロマンスカー箱根湯本駅から登山電車で約35分。',
        tip: '早めにチェックインして貸切風呂の予約枠を確保し、夕暮れ時のマジックアワーに入浴するのが最もおすすめです。'
      },
      {
        key: 'izu_private_bath',
        title: '2. 静岡・伊豆修善寺温泉（桂川のせせらぎと竹林の小径に佇む隠れ家旅館）',
        timing: '通年（秋の修善寺紅葉・冬の静寂）',
        desc: '伊豆最古の歴史を誇る修善寺温泉。桂川沿いの老舗旅館では、竹林を望む風情ある貸切露天風呂や、伊豆名物の本わさびを使った伊豆牛ステーキ・金目鯛姿煮をお部屋食で堪能できます。',
        spots: '竹林の小径、修禅寺、独鈷の湯（足湯）、修善寺虹の郷、指月殿',
        access: '伊豆箱根鉄道駿豆線「修善寺駅」より路線バスで約8分。東名沼津ICより伊豆縦貫道経由約30分。',
        tip: '浴衣に着替えて夕暮れの竹林の小径ライトアップを散策した後、部屋に戻って温かい鍋料理をいただくのが至福です。'
      },
      {
        key: 'kurokawa_private_bath',
        title: '3. 熊本・黒川温泉（渓流を望む貸切野天風呂と肥後牛炭火焼きおこもりステイ）',
        timing: '通年（冬の湯あかりイベント開催）',
        desc: '山あいに佇む木造旅館の情緒。渓流のせせらぎがBGMの貸切野天風呂に浸かり、熊本名物の特選馬刺しや肥後牛の炭火焼きを個室や客室でゆったり楽しむ大人の隠れ家リトリート。',
        spots: '黒川温泉川端通り、べっちん館、平野台親水公園（恋人の聖地展望台）、夫婦滝',
        access: '熊本空港より車・直行バスで約80分。博多駅より直行高速バスあり。',
        tip: '冬限定の竹灯籠イベント「湯あかり」を鑑賞した後は、宿の貸切風呂で冷えた体をじっくり温めましょう。'
      },
      {
        key: 'arashiyama_private_bath',
        title: '4. 京都・嵯峨嵐山温泉（渡月橋のすぐそば！天然温泉貸切風呂と京の伝統会席）',
        timing: '通年（秋の嵐山紅葉・冬の嵐山花灯路）',
        desc: '風光明媚な嵐山に湧く弱アルカリ性の美肌温泉「嵐山温泉」。人混みの多い日中の嵐山観光から戻り、静寂の貸切風呂で疲れを癒やして、伝統の京野菜と旬の素材を活かした京懐石をお部屋で。',
        spots: '渡月橋、天龍寺（曹源池庭園）、竹林の小径、嵐山モンキーパークいわたやま',
        access: '阪急嵐山線「嵐山駅」徒歩約5分。JR嵯峨野線「嵯峨嵐山駅」徒歩約15分。',
        tip: '早朝の静かな渡月橋散策と、夜の客室露天風呂・部屋食を組み合わせると、混雑を避けて優雅な京都旅が叶います。'
      }
    ]
  },
  {
    slug: 'winter-clear-air-fuji-view-hotels',
    badge: 'CLEAR AIR FUJI VIEW',
    title: '【白銀の霊峰】冠雪富士山を望む！冬の富士ビュー絶景ホテル 完全ガイド',
    metaDesc: '空気が澄み渡る冬こそ富士山鑑賞の最高峰！山梨・河口湖畔（逆さ富士）、神奈川・箱根仙石原芦ノ湖、静岡・日本平三保松原、山梨・山中湖（紅富士）など、客室や露天風呂から白銀の富士山を仰ぐ人気宿を徹底解説。',
    heroDesc: '雪化粧をまとった神々しい富士山の姿。朝日に赤く染まる「紅富士」、湖面に映り込む「逆さ富士」、夜空に浮かぶシルエット。冬の澄み切った空気の中でしか出逢えない奇跡の富士山ビューホテルへ。',
    categoryKey: 'winter-clear-air-fuji-view-hotels',
    areaGuides: [
      {
        key: 'kawaguchiko_fuji_view',
        title: '1. 山梨・河口湖畔（波静かな湖面に映る「逆さ富士」と展望露天風呂）',
        timing: 'ベストシーズン：11月〜3月（年間で最も富士山が見える確率が高い）',
        desc: '河口湖北岸のホテル街からは、正面に雄大な富士山と河口湖のパノラマが広がります。全室富士山ビューの客室や、湯船に浸かりながら富士山を眺められる展望露天風呂が魅力。甲州ワインビーフディナーも。',
        spots: '大石公園、河口湖もみじ回廊、河口湖〜富士山パノラマロープウェイ、新倉山浅間公園',
        access: '中央自動車道河口湖ICより約10〜15分。新宿から直通バス・JR特急富士回遊で約100分。',
        tip: '早朝の風がない時間帯に湖畔へ出ると、完全なリフレクションを描く奇跡の「逆さ富士」を撮影できます。'
      },
      {
        key: 'hakone_fuji_view',
        title: '2. 神奈川・箱根仙石原＆芦ノ湖（芦ノ湖の青と白銀の富士山が織りなす大パノラマ）',
        timing: 'ベストシーズン：11月〜2月',
        desc: '芦ノ湖畔や仙石原の高台に建つリゾートホテル。大涌谷の温泉と、遊覧船が行き交う芦ノ湖越しに望む雄大な富士山の共演。箱根ロープウェイの大涌谷空中散歩や美術館巡りと合わせて楽しめます。',
        spots: '芦ノ湖（箱根海賊船）、箱根神社（平和の鳥居）、大涌谷、仙石原すすき草原',
        access: '小田急ロマンスカー箱根湯本駅より箱根登山バスで芦ノ湖・仙石原方面へ約35〜45分。',
        tip: '芦ノ湖畔の成川美術館展望ラウンジからの富士山パノラマは、日本画の巨匠たちも愛した絶景構図です。'
      },
      {
        key: 'nihondaira_fuji_view',
        title: '3. 静岡・日本平＆三保松原（駿河湾と夜景越しに浮かび上がる霊峰富士）',
        timing: 'ベストシーズン：11月〜3月',
        desc: '標高307mの日本平山頂。隈研吾設計の「日本平夢テラス」や日本平ホテルからは、駿河湾、清水港の夜景、三保松原、そして富士山を一望する「風景美術館」と称される圧倒的なパノラマが広がります。',
        spots: '日本平夢テラス、三保松原（世界遺産富士山構成資産）、久能山東照宮（ロープウェイ接続）、エスパルスドリームプラザ',
        access: '東海道新幹線「静岡駅」より路線バス・タクシーで約25〜30分。東名静岡IC・清水IC。',
        tip: '日本平ホテルの芝生庭園から眺める夕暮れ時のグラデーションと、眼下に広がる清水の工場・港の夜景は息をのむ美しさです。'
      },
      {
        key: 'yamanakako_fuji_view',
        title: '4. 山梨・山中湖畔（朝日に真っ赤に染まる「紅富士」と富士山溶岩温泉）',
        timing: 'ベストシーズン：12月〜2月（朝6時半〜7時頃の紅富士）',
        desc: '富士五湖の中で最も富士山に近く、標高約1,000mに位置する山中湖。冬の晴れた早朝、雪をかぶった山肌が朝日で紅色に輝く「紅富士（べにふじ）」は圧巻。富士山溶岩を配した温泉露天風呂で温まります。',
        spots: '山中湖パノラマ台、長池親水公園、忍野八海、花の都公園（冬のイルミネーション）',
        access: '東富士五湖道路山中湖ICより車で約5〜10分。バスタ新宿より直行高速バス約120分。',
        tip: '2月上旬〜中旬には山中湖で富士山頂に太陽が沈む「ダイヤモンド富士」の観測イベントが開催されます。'
      }
    ]
  },
  {
    slug: 'autumn-winter-traditional-ryokan-retro',
    badge: 'HERITAGE & TAISHO ROMAN',
    title: '【大正ロマンの宿】文化財建築美と木造意匠！老舗名門旅館 完全ガイド',
    metaDesc: '時を超えて愛される日本の美。山形・銀山温泉、長野・渋温泉金具屋、静岡・伊東温泉、兵庫・城崎温泉など、国の登録有形文化財や宮大工の粋が息づく木造建築旅館を徹底解説。',
    heroDesc: '飴色に磨かれた木の廊下、精緻な組子細工の障子、職人の技が光る格天井。どこか懐かしく温かい大正ロマンの風情に包まれ、何代にもわたって受け継がれてきた名湯とおもてなしに浸る特別な旅。',
    categoryKey: 'autumn-winter-traditional-ryokan-retro',
    areaGuides: [
      {
        key: 'ginzan_cultural_ryokan',
        title: '1. 山形・銀山温泉（ガス灯が灯る大正ロマンの木造多層建築街）',
        timing: '通年（特に冬の雪景色と夜景が最高峰）',
        desc: '銀山川の両岸に大正から昭和初期に建てられた3層4層の木造旅館が立ち並ぶ奇跡の温泉街。外壁の鏝絵（こてえ）や雪を照らすガス灯の温かい光。名物の尾花沢牛や鴨鍋を味わいながらタイムスリップ気分を。',
        spots: '銀山温泉街（白銀の滝・疎水坑道）、野天風呂しろがね湯、カリーパンはいからさん通り',
        access: '山形新幹線「大石田駅」より路線バス「銀山線」で約40分。',
        tip: '冬の夕暮れ時、ガス灯が一斉に点灯する瞬間（16:30〜17:00頃）の温泉街散策が最もドラマチックです。'
      },
      {
        key: 'shibu_kanaguya_ryokan',
        title: '2. 長野・信州渋温泉 金具屋（国の登録有形文化財！宮大工の粋が宿る斉月楼）',
        timing: '通年（昭和初期の木造建築と九湯めぐり）',
        desc: '昭和11年に完成した木造4階建ての「斉月楼」と「大広間」が国登録有形文化財。館内には8つの異なる源泉と個性的な風呂が点在し、毎夕開催される館内歴史ツアー（金具屋文化財巡り）が大人気です。',
        spots: '金具屋（斉月楼・大広間）、渋温泉街（石畳の小路）、地獄谷野猿公苑、渋高薬師',
        access: '長野電鉄特急で湯田中駅まで約45分、バス・タクシー約5分。',
        tip: '金具屋宿泊者限定の「文化財見学ツアー」に参加すると、宮大工の遊び心ある建築意匠の解説を聞くことができます。'
      },
      {
        key: 'ito_tokai_ryokan',
        title: '3. 静岡・伊東温泉（木造建築の最高峰「東海館」の意匠を受け継ぐ老舗名門宿）',
        timing: '通年（伊東の豊富な湯量と海の幸）',
        desc: '松川沿いに建つ伊東温泉のシンボル「東海館（木造三階建て有形文化財）」。その周辺に佇む数寄屋造りの老舗旅館では、自家源泉かけ流しの豊富な温泉と、相模湾で獲れた新鮮な金目鯛や伊勢海老会席を堪能。',
        spots: '伊東温泉東海館、松川遊歩道（竹あかり）、音無神社、伊東オレンジビーチ',
        access: 'JR伊東線・伊豆急行線「伊東駅」下車。特急踊り子号で東京から直通約100分。',
        tip: '松川沿いの遊歩道で行われる「伊東温泉 竹あかり」を浴衣で散策するのが夜のおすすめコースです。'
      },
      {
        key: 'kinosaki_classic_ryokan',
        title: '4. 兵庫・城崎温泉（文豪・志賀直哉ゆかりの木造老舗宿と七田外湯めぐり）',
        timing: '通年（冬の松葉ガニシーズンが最高潮）',
        desc: '志賀直哉が短編小説『城の崎にて』を執筆した名門旅館「三木屋（国登録有形文化財）」をはじめ、太鼓橋と柳並木が美しい城崎温泉。下駄の音を響かせながら7つの外湯を巡り、冬は絶品の松葉ガニに舌鼓。',
        spots: '城崎温泉外湯めぐり（一の湯・御所の湯等）、柳並木と大谿川、城崎文芸館、城崎ロープウェイ',
        access: 'JR山陰本線特急「こうのとり・きのさき」で大阪・京都から城崎温泉駅まで約2時間40分。',
        tip: '外湯めぐり券「デジタル外湯券」を使って、庭園露天風呂が自慢の「御所の湯」や洞窟風呂の「一の湯」を制覇しましょう。'
      }
    ]
  },
  {
    slug: 'winter-snow-fireworks-festivals',
    badge: 'WINTER FIREWORKS',
    title: '【夜空の芸術】冬の雪上花火＆湖畔温泉ホテル 完全ガイド',
    metaDesc: '澄んだ冬空に響く大迫力の轟音！山梨・河口湖冬花火、静岡・熱海海上花火大会（冬の部）、岐阜・下呂温泉花火ミュージカル、栃木・奥日光中禅寺湖など、客室や露天風呂から花火を仰ぐ人気宿を徹底解説。',
    heroDesc: '湿度が低くチリの少ない冬の夜空は、夏以上に花火が鮮明に輝く絶好の季節。雪山や湖畔を鮮やかに染める大輪の華を、温かい温泉露天風呂やお部屋の特等席から眺めるロマンチックな冬の夜。',
    categoryKey: 'winter-snow-fireworks-festivals',
    areaGuides: [
      {
        key: 'lake_kawaguchi_winter_fireworks',
        title: '1. 山梨・河口湖畔（富士山と冬花火の共演！湖畔に広がる光のファンタジー）',
        timing: '開催期間：1月中旬〜2月中旬の毎週末（約20分間の打ち上げ）',
        desc: '雪化粧の富士山を背景に、河口湖の大池公園・畳岩・八木崎公園の3箇所から一斉に打ち上がる冬花火。湖畔の温泉旅館なら、客室の窓や展望露天風呂から真正面に大輪の花火を鑑賞できます。',
        spots: '河口湖大池公園（メイン観覧席）、八木崎公園、河口湖オルゴールの森、富士急ハイランド',
        access: '中央自動車道河口湖ICより約10分。新宿駅から直通バス・JR特急富士回遊。',
        tip: '花火の打ち上げ開始は20:00から。夕食を18:00スタートにして、食後に部屋のベランダや露天風呂から鑑賞するのがベストです。'
      },
      {
        key: 'atami_winter_fireworks',
        title: '2. 静岡・熱海温泉（すり鉢状の熱海湾に響く！大迫力の熱海海上冬花火）',
        timing: '開催期間：12月・1月・2月の特定日（歴史ある名物花火）',
        desc: '三方を山に囲まれた熱海湾の地形が天然のスタジアム音響を生み出す熱海海上花火大会。フィナーレを飾る「大空中ナイアガラ」は銀色の閃光が夜空と海面を埋め尽くす圧巻のスケール。',
        spots: '熱海サンビーチ、親水公園ムーンテラス、熱海城（展望台）、来宮神社',
        access: '東海道新幹線で東京駅から熱海駅まで直通約45分。',
        tip: '熱海サンビーチ沿いのオーシャンビューホテルを予約すれば、大混雑の海岸に出ることなくお部屋から大迫力の花火を独占できます。'
      },
      {
        key: 'gero_winter_fireworks',
        title: '3. 岐阜・下呂温泉（音楽と光のシンクロ！冬の下呂温泉花火ミュージカル）',
        timing: '開催期間：12月〜3月の毎週土曜日（冬花火物語）',
        desc: '日本三名泉・下呂温泉の益田川河川敷で打ち上がる冬花火。最新ヒット曲やクリスマスソングに合わせて打ち上がる花火ミュージカルは感動的。飛騨牛料理と美肌の湯を堪能しながら冬の夜を満喫。',
        spots: '益田川河川敷（花火打ち上げ場所）、下呂温泉合掌村、噴泉池（足湯）、いでゆ朝市',
        access: 'JR高山本線特急「ひだ」で名古屋駅から下呂駅まで約1時間40分。',
        tip: '益田川沿いに建つ老舗旅館の川側客室なら、温かいお部屋にいながら音楽とともに打ち上がる花火を特等席で楽しめます。'
      },
      {
        key: 'lake_chuzenji_winter_fireworks',
        title: '4. 栃木・奥日光中禅寺湖＆湯元温泉（静寂の雪原と湖畔に打ち上がる幻想冬花火）',
        timing: '開催期間：1月下旬〜2月上旬（奥日光湯元温泉雪まつり冬花火）',
        desc: '標高1,200mを超える奥日光。凍てつく静寂の中、中禅寺湖や湯元温泉の雪原から夜空へ放たれる冬花火。乳白色の濃厚な硫黄泉で温まり、名物の湯波（ゆば）料理を味わう奥日光の冬籠り。',
        spots: '中禅寺湖畔、華厳の滝（冬の氷瀑）、湯ノ湖、日光湯元ビジターセンター',
        access: 'JR日光駅・東武日光駅より東武バス「湯元温泉行き」で約75分。',
        tip: '湯元温泉街のかまくら雪あかりと冬花火の組み合わせが幻想的。道路が凍結するため冬用タイヤまたは路線バスが必須です。'
      }
    ]
  },
  {
    slug: 'autumn-winter-workation-hot-spring',
    badge: 'HOT SPRING WORKATION',
    title: '【温泉ワーケーション】高速Wi-Fi＆名湯！大人のリトリート宿 完全ガイド',
    metaDesc: '仕事も旅も妥協しない！長野・軽井沢、静岡・熱海温泉、神奈川・箱根湯本、京都・烏丸御池など、コワーキングラウンジ、高速Wi-Fi、デスク環境と極上天然温泉を備えた秋・冬の温泉ワーケーションホテルを徹底解説。',
    heroDesc: '午前中は集中してリモートワーク、午後は澄んだ空気の中を散策し、夜は効能豊かな名湯露天風呂と美味しい地酒でリフレッシュ。日常を離れて生産性とウェルビーイングを高める温泉ワーケーションへ。',
    categoryKey: 'autumn-winter-workation-hot-spring',
    areaGuides: [
      {
        key: 'karuizawa_workation',
        title: '1. 長野・軽井沢（森のコワーキングスペースと源泉かけ流しリゾート）',
        timing: '通年（秋の紅葉・冬の静寂ワーケーション）',
        desc: '新幹線で東京から約65分。広大な森の中に開放的なコワーキングカフェや個室ブースを備えたリゾートホテルが充実。仕事の合間にハルニレテラスを散策し、美肌のトンボの湯でリフレッシュ。',
        spots: 'ハルニレテラス、軽井沢星野エリア（星野温泉トンボの湯）、雲場池、旧軽井沢銀座',
        access: '北陸新幹線「軽井沢駅」下車。',
        tip: '平日の連泊プランを活用すると、週末よりも大幅にお得な料金で長期滞在ワーケーションが可能です。'
      },
      {
        key: 'atami_workation',
        title: '2. 静岡・熱海温泉（都心45分！青い海を望むデスクとオーシャンビュー温泉）',
        timing: '通年（冬も温暖で仕事が捗る）',
        desc: '新幹線でわずか45分の近さ。客室の窓から相模湾を見下ろすワークデスクや、Wi-Fi完備のオーシャンビューラウンジ。仕事終わりには海風を感じる露天風呂と熱海の地魚寿司を堪能。',
        spots: '熱海サンビーチ、ACAO FOREST、起雲閣、熱海銀座商店街（レトロ喫茶）',
        access: '東海道新幹線で東京駅から熱海駅まで直通約45分。',
        tip: '熱海駅前の商店街で温泉まんじゅうをテイクアウトして、ラウンジでの作業のお供にするのが人気です。'
      },
      {
        key: 'hakone_workation',
        title: '3. 神奈川・箱根湯本（ブックカフェラウンジ＆清流を望む温泉リトリート）',
        timing: '通年（都心からロマンスカー直通）',
        desc: '数千冊の本が並ぶブックラウンジや、電源・高速Wi-Fi完備のオープンラウンジを備えた温泉ホテル。早川のせせらぎを聞きながら作業し、疲れたら弱アルカリ性の箱根の名湯に飛び込めます。',
        spots: '箱根湯本駅前商店街、早川渓流遊歩道、玉簾の滝、フォレストアドベンチャー箱根',
        access: '新宿駅から小田急ロマンスカーで箱根湯本駅まで直通約85分。',
        tip: 'チェックイン前やチェックアウト後も利用できるコワーキングラウンジ付きプランを選ぶと、1日中無駄なく仕事ができます。'
      },
      {
        key: 'kyoto_workation',
        title: '4. 京都・烏丸御池＆四条（大浴場付きデザインホテルと町家カフェワーク）',
        timing: '通年（秋の寺院散策・冬の文化体験）',
        desc: '京都の中心部・烏丸御池周辺。広々としたワークデスクや大浴場を備えたモダンホテルに宿泊。朝は鴨川沿いを散歩し、日中は町家カフェで仕事、夜は先斗町でおばんざいを味わう理想のデュアルライフ。',
        spots: '京都国際マンガミュージアム、錦市場、鴨川遊歩道、先斗町、京都御所',
        access: '地下鉄烏丸線・東西線「烏丸御池駅」「四条駅」下車。JR京都駅から地下鉄約5分。',
        tip: '京都御所や二条城周辺の静かな緑地でテイクアウト珈琲を飲みながらのリモートワークも爽快です。'
      }
    ]
  }
];

function generatePageTsx(config) {
  return `import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "${config.title} ｜ 日本全国・旅宿クラウド",
  description: "${config.metaDesc}",
  keywords: ["${config.slug}", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["${config.categoryKey}"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for ${config.categoryKey}", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = ${JSON.stringify(config.areaGuides, null, 2)};

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ${config.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            ${config.title}
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            ${config.heroDesc}
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-emerald-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 観光・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめ見どころ・スポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 満足度を高める滞在のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}周辺のおすすめ厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-950/5">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">
                              ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                            </span>
                          )}
                        </div>

                        <div className="p-4 space-y-2">
                          {hotel.reviewAverage > 0 && (
                            <div className="flex items-center justify-between text-[9px] font-bold text-amber-600">
                              <span>⭐ {hotel.reviewAverage}点（{hotel.reviewCount}件）</span>
                            </div>
                          )}
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-emerald-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-emerald-950/70 line-clamp-2 font-medium">
                              {hotel.hotelSpecial}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="p-4 pt-0">
                        <a
                          href={hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで宿泊プラン・空室を見る
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 47都道府県トップへのリンク */}
      <div className="text-center pt-8">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
`;
}

for (const cfg of wave6Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated seasonal hub page: /${cfg.slug}`);
}
