const fs = require('fs');
const path = require('path');

const hotelsData = JSON.parse(fs.readFileSync('batch2_hotels.json', 'utf8'));

const articles = [
  {
    slug: 'kyoto-solo-retreat-temple-modern-stay',
    categoryName: '京都・おひとりさま寺社＆和モダン宿特集',
    title: '【京都ひとり旅・静寂おこもり】朝のお勤め・枯山水庭園・祇園の隠れ家！大人が心洗われる極上和モダン宿 厳選3選',
    desc: '「賑やかな観光地から一歩離れて、静かに京都の美意識に浸りたい」「朝の静寂なお寺散策や写経で心をリセットしたい」。大人のソロトラベラーへ。建仁寺・祇園の風情に溶け込む「ホテル ザ セレスティン京都祇園」、500年の歴史を誇る名刹に泊まる「三井ガーデンホテル京都河原町浄教寺」、ラウンジの無料お茶漬けや大浴場が嬉しい「ホテルインターゲート京都 四条新町」を徹底特集。',
    keywords: '京都 一人旅 ホテル おすすめ,京都 おこもり宿 一人,京都 寺 泊まる,ホテル ザ セレスティン京都祇園 一人,三井ガーデンホテル京都河原町浄教寺 宿泊',
    targetAudience: '京都の歴史や文化を静かに味わいたい大人の女性・男性ソロトラベラー',
    leadTitle: '石畳の路地に響く下駄の音、朝の読経と線香の薫香——日常のノイズを脱ぎ捨てて古都の静寂に溶け込む大人の京都ひとり旅',
    leadP1: '誰かと訪れる京都も楽しいものですが、京都の真髄である「静寂」「幽玄」「わびさび」を肌で味わうなら、ひとり旅に勝るものはありません。早朝、まだ誰もいない寺院の境内を歩き、清らかな空気を胸いっぱいに吸い込む。枯山水の石庭の前にただ腰を下ろし、風に揺れる竹林の葉音に耳を澄ませる。自分のペースで気ままに町家カフェへ立ち寄り、夕暮れの鴨川沿いを歩く時間は、何ものにも代えがたい心のデトックスです。',
    leadP2: 'そんな大人の京都滞在を決定づけるのが、拠点となる宿のクオリティです。現代的な快適性を備えながらも、京都の伝統美や寺院文化を肌で感じられる上質な和モダンホテル。今回は、おひとりさまでも気兼ねなく過ごせ、大浴場やこだわりの朝食、静寂なロケーションを誇る厳選3宿をご紹介します。',
    hotelItems: [
      {
        idx: 0,
        tagline: '八坂通・建仁寺のすぐそば！祇園の風情漂う閑静な立地と名店「八坂圓堂」監修の揚げたて天ぷら朝食',
        detailTitle: 'ホテル ザ セレスティン京都祇園 —— 東山の趣に包まれる上質な隠れ家。大浴場とゲスト専用ラウンジで味わう極上の寛ぎ',
        features: [
          { title: '祇園・花見小路・清水寺へ徒歩圏内ながら驚くほど静穏なロケーション', desc: '八坂通沿いに佇む低層の上質な佇まい。早朝の祇園の石畳や八坂の塔周辺を、混雑なしで独り占め散歩できます。' },
          { title: '京都の老舗天ぷら「八坂圓堂」が手がける贅沢すぎる朝食ビュッフェ', desc: '目の前で職人が揚げるアツアツの天ぷらや、旬の京野菜をふんだんに取り入れたおばんざい。朝から五感を刺激する至福の食体験です。' },
          { title: '坪庭を望む落ち着いた地下大浴場と24時間利用可能なゲストラウンジ', desc: '歩き疲れた足を癒やす清潔な大浴場。ラウンジでは祇園辻利のお茶やコーヒーを片手に、優雅な読書タイムを過ごせます。' }
        ],
        reviewPoints: '楽天トラベル評価4.67点。「一人旅で利用しましたが、エントランスから漂うお香の香りとスタッフの気品ある対応に感動しました」「圓堂の天ぷら朝食が絶品で、夜も静かでぐっすり眠れました」と大人ソロ旅から大絶賛。'
      },
      {
        idx: 1,
        tagline: '寺院とホテルが一体化した奇跡の空間！朝の「お勤め体験」とミシュラン掲載店監修の精進和朝食',
        detailTitle: '三井ガーデンホテル京都河原町浄教寺 —— 500年の歴史を持つ寺院の跡地に誕生。大浴場と墨絵のアートが彩る唯一無二の寺ホテル',
        features: [
          { title: '毎朝本堂で行われる住職の「朝のお勤め（読経・法話）」に宿泊者限定で参加可能', desc: '清々しい朝の光が差し込む本堂で、心洗われる読経体験。雑念が消え去り、心がスッと整う貴重な体験ができます。' },
          { title: '四条河原町駅徒歩1分の最強立地ながら、館内は墨と白の静寂な空間', desc: '寺院の古木や装飾を再利用した洗練のデザイン。河原町の繁華街にありながら、一歩足を踏み入れれば別世界のような静けさです。' },
          { title: '手足を伸ばせる大浴場とミシュランガイド掲載店「僧伽小野」の朝食御膳', desc: 'お寺の雰囲気に合わせた幻想的な大浴場。朝食は彩り豊かな小鉢が並ぶ本格的な和御膳で、身体の内側から浄化されます。' }
        ],
        reviewPoints: '楽天トラベル評価4.65点。「朝のお勤め体験が本当に素晴らしく、心が洗われました」「四条河原町すぐで買い物にも便利なのに、お寺の静けさと大浴場があって最高でした」と一人旅のリピーター続出。'
      },
      {
        idx: 2,
        tagline: '烏丸駅・四条駅徒歩すぐ！大浴場＆時間帯ごとの無料ラウンジサービス（ワイン・お茶漬けバイキング）が大好評',
        detailTitle: 'ホテルインターゲート京都 四条新町 —— 伝統工芸と現代デザインの融合。京都の朝を五感で楽しむ贅沢ステイ',
        features: [
          { title: '時間帯で楽しめる宿泊者無料のラウンジサービス（ハッピーアワー＆夜食お茶漬け）', desc: '夕方にはワインやオリジナルカクテル、夜には出汁が効いたお茶漬けバイキングを無料提供。一人でも気軽に利用できます。' },
          { title: '旅の疲れを優しく解きほぐす清潔な癒やしの大浴場を完備', desc: '足を伸ばしてリフレッシュできる広々とした浴槽。女性浴場はセキュリティキー付きで一人旅でも安心して入浴できます。' },
          { title: '錦市場や二条城へもアクセス抜群の落ち着いた新町通エリア', desc: '京町家が残る趣ある通りに面し、周辺には隠れ家のような名店カフェやビストロが点在。大人の京都散策に最適です。' }
        ],
        reviewPoints: '楽天トラベル評価4.52点。「ラウンジでお酒やお茶漬けをいただけるのが最高でした」「大浴場があって一人でも居心地がよく、スタッフさんの笑顔に癒やされました」とコスパと快適性を両立した名宿。'
      }
    ],
    areaGuide: {
      title: '混雑を避けて京都を味わい尽くす「朝活ひとり旅」のススメ',
      points: [
        { name: '1. 午前6:00〜7:30の清水寺・伏見稲荷・八坂神社参拝', text: '昼間は観光客で溢れる人気スポットも、早朝なら静まり返り神秘的な本来の姿を見せてくれます。写真撮影も周囲を気にせず楽しめます。' },
        { name: '2. 鴨川の飛び石とモーニングカフェ巡り', text: '朝の鴨川沿いを散策しながら、老舗喫茶店（イノダコーヒや前田珈琲など）で味わうネルドリップ珈琲と厚切りトーストは京都の定番の幸せです。' },
        { name: '3. 午後はホテルのラウンジや大浴場で「中休み」', text: '一番混雑する午後の時間帯はあえてホテルへ戻り、ラウンジで読書や大浴場でのんびり。夕暮れから再び夜の先斗町やライトアップへ出かけるのが賢い巡り方です。' }
      ]
    },
    faqList: [
      { q: '女性一人旅でも安全に宿泊できますか？', a: 'ご紹介したホテルはすべて24時間フロント対応、カードキーによるエレベーターセキュリティ、女性専用セキュリティ付き大浴場などを備えており、女性おひとりさまでも非常に安心して宿泊できます。' },
      { q: '一人での夕食はどこで取るのがおすすめですか？', a: 'ホテルの周辺（祇園・四条河原町・烏丸）にはカウンター席中心の割烹、おばんざいバル、町家カフェが多数あり、一人客を快く歓迎してくれます。フロントのコンシェルジュにおすすめを聞くのもおすすめです。' }
    ]
  },
  {
    slug: 'osaka-solo-business-sky-sauna-retreat-stay',
    categoryName: '大阪・梅田出張＆スカイスパ特集',
    title: '【大阪出張・梅田ご褒美泊】地上130mスカイスパ・展望サウナ・夜景クラブラウンジ完備！ビジネス＆ソロステイ 厳選3選',
    desc: '西日本のビジネス中心地・大阪で、仕事の疲れを極限まで吹き飛ばし最高のインスピレーションを得る。「日本一高いインフィニティスカイスパ」を備えた最新ランドマーク「カンデオホテルズ大阪ザ・タワー」、全室高層階・英国調ラグジュアリーの極致「ホテル阪急インターナショナル」、難波のど真ん中で天然温泉とサウナを満喫する「ドーミーインPREMIUMなんばANNEX」を徹底特集。',
    keywords: '大阪 出張 ホテル サウナ,梅田 ビジネスホテル 大浴場,カンデオホテルズ大阪ザタワー サウナ,ホテル阪急インターナショナル 一人,大阪 高級ホテル 一人ステイ',
    targetAudience: '出張で訪れるビジネスパーソン・サウナ好き・大阪でワンランク上のソロステイをしたい方',
    leadTitle: '地上数十階から見下ろす水都・大阪の夜景と、吹き抜ける夜風でととのう天空サウナ——出張を最高のリフレッシュに変える「大阪極上ステイ」',
    leadP1: '新大阪駅や伊丹・関空からのアクセスが良く、西日本ビジネスの心臓部である大阪。連日の打ち合わせやイベント出展、商談で1日中歩き回った後は、心身ともに深い疲労が残ります。ただシャワーを浴びて寝るだけの出張では、翌日のプレゼンや判断力に十分な集中力を発揮できません。「大阪出張の夜だからこそ、圧倒的な夜景を眺めながらサウナで整いたい」「上質なベッドと静かなデスクで仕事を片付けたい」。',
    leadP2: '近年、大阪中心部には従来のビジネスホテルの枠を大きく超えた「展望露天風呂」「本格サウナ」「高層クラブラウンジ」を備えた進化系ホテルが続々と登場しています。今回は、仕事のモチベーションを高め、極上の休息を約束してくれる梅田・中之島・難波の厳選3ホテルをご紹介します。',
    hotelItems: [
      {
        idx: 0,
        tagline: '地上約135m・日本一の高さを誇るインフィニティ天空スパ！オートロウリュサウナと大阪一望のパノラマビュー',
        detailTitle: 'CANDEO HOTELS（カンデオホテルズ）大阪ザ・タワー —— 堂島浜に誕生した新ランドマーク。空に浮かぶ露天風呂とサウナシュラン仕様の極上空間',
        features: [
          { title: '最上階31階に位置する日本最高層のインフィニティ露天風呂「スカイスパ」', desc: '夜空と大阪市街の摩天楼が溶け合う圧巻の眺望。まるで空に浮かんでいるかのような非日常の浮遊感を体験できます。' },
          { title: 'サウナシュラン常連の本格タワーサウナ＆広々とした水風呂・外気浴スペース', desc: 'オートロウリュ付きの高温ドライサウナ。地上130mを吹き抜ける風を浴びながらのととのい体験は唯一無二です。' },
          { title: '淀屋橋・梅田・北新地が徒歩圏内！ビジネス・会食に最高の好立地', desc: '主要ビジネス街へのアクセス抜群。夜は北新地での会食後も歩いてすぐにホテルへ帰還できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.49点。「天空露天風呂からの夜景とサウナが異次元の素晴らしさ」「出張で利用しましたが、ここ数年で一番感動したホテルでした」とサウナー・ビジネスマンから絶賛の嵐。'
      },
      {
        idx: 1,
        tagline: '全客室が26階以上の超高層ラグジュアリー！16世紀イタリア貴族の館を思わせる気品と大阪駅徒歩すぐの利便性',
        detailTitle: 'ホテル阪急インターナショナル —— 梅田・茶屋町のランドマーク。天井高の優雅な客室と夜景を見下ろす大理石バス',
        features: [
          { title: '全室が高層階（26〜34階）に位置し、窓一面に広がる宝石箱のようなパノラマ夜景', desc: '大阪市街から淀川、神戸方面の煌めく夜景を一望。ゆったりとした広さの客室で優雅なひとり時間を過ごせます。' },
          { title: 'ガラス張りのシャワーブースと深めの円形大理石バスタブ', desc: '夜景を眺めながら優雅なバスタイム。最高級のバスアメニティとともに、出張の疲れをラグジュアリーにリセットできます。' },
          { title: '阪急大阪梅田駅徒歩3分・JR大阪駅徒歩約10分の好アクセス', desc: '商業施設や劇場が立ち並ぶ茶屋町エリア。周辺には落ち着いたレストランやカフェが多く、一人でも食事に困りません。' }
        ],
        reviewPoints: '楽天トラベル評価4.66点。「お部屋からの夜景が素晴らしく、ベッドの寝心地も最高でした」「スタッフの方々のホスピタリティが完璧で、自分への最高のご褒美出張になりました」と感動の声多数。'
      },
      {
        idx: 2,
        tagline: '道頓堀・日本橋すぐ！都会のオアシス天然温泉大浴場と高温サウナ・夜鳴きそば完備の安心ステイ',
        detailTitle: '天然温泉 朝霧の湯 ドーミーインPREMIUMなんばANNEX —— 難波・心斎橋エリアの出張拠点。本格天然温泉と名物ご当地朝食',
        features: [
          { title: '手足を伸ばして寛げる天然温泉大浴場「朝霧の湯」＆水風呂付きサウナ', desc: '神経痛や疲労回復に効果的な天然温泉。サウナでしっかり汗を流して一日の緊張をリセットできます。' },
          { title: '名物あっさり醤油ラーメン「夜鳴きそば」や湯上がりアイスの無料サービス', desc: '夜の小腹を満たすドーミーイン伝統の温かいおもてなし。出張族に圧倒的人気を誇る理由が詰まっています。' },
          { title: '大阪名物を取り入れたいくら・海鮮・郷土料理の豪華朝食バイキング', desc: '朝から活力満点の美味しい食事。一日の仕事を最高のエネルギーでスタートすることができます。' }
        ],
        reviewPoints: '楽天トラベル評価4.40点。「なんば周辺の出張で定宿にしています。温泉とサウナで疲れが取れて、夜鳴きそばも美味しい」「部屋が綺麗で静かで快適」と高い信頼を獲得。'
      }
    ],
    areaGuide: {
      title: '大阪出張で仕事とリフレッシュを両立する3つのテクニック',
      points: [
        { name: '1. 新大阪駅到着後すぐに荷物をホテルへ預ける（コインロッカー不要）', text: '御堂筋線を使えば新大阪から梅田・なんばへ直通。身軽になって商談先へ直行するのがスマートです。' },
        { name: '2. 会食後の「夜サウナ」でアルコールと疲労をスッキリ', text: '深酒を避け、水分をしっかり補給してから入るサウナは翌朝の目覚めを劇的に変えてくれます（飲酒直後の入浴は避け、十分に時間を空けてください）。' },
        { name: '3. 翌朝は少し早起きして中之島リバーサイド散策', text: '中央公会堂やバラ園が広がる中之島の水辺は朝の散歩に最適。心地よい風を感じながら頭をスッキリ整理できます。' }
      ]
    },
    faqList: [
      { q: 'チェックインが深夜（24時以降）になっても大丈夫ですか？', a: 'はい、ご紹介した3ホテルはすべて24時間フロントが常駐しており、事前連絡を入れておけば深夜の到着でもスムーズにチェックイン可能です。' },
      { q: '部屋でテレワークやPC作業は快適に行えますか？', a: '全館高速Wi-Fiを完備しており、デスクや座り心地の良いチェアが設置されているため、長時間のオンラインミーティングや資料作成も快適に行えます。' }
    ]
  },
  {
    slug: 'nagoya-dome-live-expedition-comfort-stay',
    categoryName: '名古屋・ドーム遠征＆高層パノラマ特集',
    title: '【バンテリンドーム・Zepp名古屋遠征泊】名駅直結＆トレインビュー！終演後もスムーズに休める快適拠点ホテル 厳選3選',
    desc: 'バンテリンドーム ナゴヤ（ナゴヤドーム）、Zepp Nagoya、Aichi Sky Expo（愛知県国際展示場）へのコンサート・ライブ・舞台遠征へ！地上31階以上からの絶景「名古屋プリンスホテル スカイタワー」、名古屋駅直結で新幹線改札から直行できる「名鉄グランドホテル」、皇室も愛する歴史と格式のクラシック宿「名古屋観光ホテル」を徹底比較。',
    keywords: 'バンテリンドーム 遠征 ホテル,名古屋 ライブ ホテル おすすめ,名古屋プリンスホテル スカイタワー 遠征,名駅 直結 ホテル,Zepp Nagoya 宿泊',
    targetAudience: '全国から名古屋へライブ・コンサート・イベント・フェス遠征に訪れるファン・推し活層',
    leadTitle: '夜空に煌めく名駅のビル群と、トレインビューのパノラマ——終演後の大混雑を避けて優雅に余韻に浸る「名古屋スマート遠征」',
    leadP1: '5大ドームツアーの重要拠点である「バンテリンドーム ナゴヤ」や、数々の熱いライブが繰り広げられる「Zepp Nagoya」。名古屋への遠征は新幹線のアクセスも良く大人気ですが、最大の課題となるのが「終演後の地下鉄東山線・名城線の大混雑」です。約5万人の観客が一斉に駅へ殺到するため、改札口に入るまでに何十分も待たされることも珍しくありません。',
    leadP2: 'だからこそ、名古屋遠征では「名古屋駅周辺（名駅エリア）」または「会場へのアクセスが良く、終演後に荷物をすぐピックアップできるホテル」を抑えるのが鉄則です。新幹線で到着してすぐに荷物を預け、ライブ後は駅近の快適な客室でペンライトやうちわを広げて余韻に浸る。今回は遠征の満足度を最高レベルに引き上げる、名駅・伏見エリアの厳選3宿をご紹介します。',
    hotelItems: [
      {
        idx: 0,
        tagline: '全客室が地上31〜36階の高層階！Zepp Nagoya徒歩すぐ・あおなみ線ささしまライブ駅直結の天空パノラマホテル',
        detailTitle: '名古屋プリンスホテル スカイタワー —— 地上140mからのトレインビューと摩天楼。Zepp Nagoya遠征の最高峰拠点',
        features: [
          { title: 'Zepp Nagoya（ゼップ名古屋）から徒歩わずか数分の圧倒的近さ', desc: 'ライブ前後にすぐ部屋へ戻れる夢のロケーション。グッズ販売待機や着替えの拠点としても完璧です。' },
          { title: '眼下に無数の列車が行き交う大迫力の「トレインビュー」と夜景パノラマ', desc: '新幹線、JR各線、近鉄、あおなみ線を見下ろす特等席。遠征の高揚感をそのままに夜景を満喫できます。' },
          { title: '広々とした客室設計と天井高の開放的なバスルーム', desc: '大型スーツケースも余裕で広げられるゆとり。清潔なバスタブでライブの立ちっぱなしの脚を心地よく癒やせます。' }
        ],
        reviewPoints: '楽天トラベル評価4.62点。「Zeppのライブ参戦で利用しました。ライブ後すぐに部屋に戻れて、窓からの夜景が綺麗すぎて感動しました」「お部屋が広くて綺麗で、遠征の疲れが完全に取れました」とライブ遠征組から絶賛。'
      },
      {
        idx: 1,
        tagline: '中部圏随一の伝統と格式！1936年開業の老舗グランドホテルで味わう最高峰のおもてなしと洗練された客室',
        detailTitle: '名古屋観光ホテル —— 地下鉄伏見駅徒歩2分。名駅と栄の中間に位置し、ドームへもアクセス抜群の上質クラシックホテル',
        features: [
          { title: '名古屋駅と栄の間に位置する伏見エリアで、バンテリンドームへ地下鉄で直行可能', desc: '地下鉄東山線・鶴舞線「伏見駅」からすぐ。ドーム方面へのアクセスが良く、終演後の混雑分散にも最適です。' },
          { title: '歴史ある名門ホテルならではの重厚感と細やかで行き届いたホスピタリティ', desc: '静けさと品格に満ちたロビー空間。遠征先でも騒がしさを忘れ、落ち着いた大人の時間を過ごせます。' },
          { title: '上質なリネンと深めのバスタブ、ブルガリなどの厳選アメニティ', desc: 'ふかふかのベッドが心地よい眠りをサポート。翌朝のチェックアウトまで優雅にリフレッシュできます。' }
        ],
        reviewPoints: '楽天トラベル評価4.55点。「伝統あるホテルだけあってスタッフの方々の気配りが素晴らしく、安心して泊まれました」「ドーム遠征で利用しましたが、立地も良くとても静かで大満足です」と大好評。'
      },
      {
        idx: 2,
        tagline: '名鉄名古屋駅・JR名古屋駅桜通口から直結！新幹線改札から雨に濡れずにチェックインできる抜群の機動力',
        detailTitle: '名鉄グランドホテル —— 名古屋駅前の老舗シティホテル。遠征の荷物預けや新幹線乗り継ぎに最強のアクセス',
        features: [
          { title: '名鉄百貨店の上層階に位置し、駅直結で移動のストレスがゼロ', desc: '新幹線を降りたら地下街経由でそのままフロントへ。雨の日やキャリーケースを引いての移動も楽々です。' },
          { title: '名鉄バスセンター直結で空港リムジンバスや各地への高速バスも発着', desc: '中部国際空港（セントレア）からのアクセスも抜群。遠方からの飛行機遠征組にとってもこれ以上ない利便性です。' },
          { title: 'チェックイン前・後の荷物預かり対応で身軽にドームへ直行可能', desc: '大きな荷物を預けてすぐに地下鉄でバンテリンドームへ。終演後も駅前ですぐ荷物をピックアップできます。' }
        ],
        reviewPoints: '楽天トラベル評価4.07点。「何より駅直結で立地が最強。新幹線ギリギリまで部屋でゆっくりできました」「ライブ遠征の荷物が多くても移動が本当に楽でした」と利便性重視派に大人気。'
      }
    ],
    areaGuide: {
      title: 'バンテリンドーム ナゴヤ遠征をスマートに乗り切る3つの極意',
      points: [
        { name: '1. 帰りは「大曽根駅」まで徒歩約15分歩いてJR中央線を使う', text: '最寄りの地下鉄「ナゴヤドーム前矢田駅」は大混雑します。少し歩いて大曽根駅からJR中央線快速に乗れば、約12分で名古屋駅へスムーズに戻れます。' },
        { name: '2. 遠征メシは名駅地下街「エスカ」の名古屋めし', text: 'ひつまぶし、味噌カツ、手羽先、台湾ラーメンなど、名古屋駅地下街には名店が密集。遠征の合間にご当地グルメを効率よく制覇できます。' },
        { name: '3. ペンライトの予備電池と双眼鏡の事前点検', text: 'ドーム規模の会場では5階席やスタンド上段になることも。防振双眼鏡や明るいレンズの双眼鏡、替えの単4電池は遠征前のマストアイテムです。' }
      ]
    },
    faqList: [
      { q: '遠征グッズ（うちわ・ペンライト）をホテルで受け取ることはできますか？', a: '事前に通販で購入したグッズをホテル気付で送付する場合、宿泊代表者氏名と宿泊日を明記しておけばフロントで預かってもらえるホテルがほとんどです（事前連絡推奨）。' },
      { q: 'チェックアウト後に新幹線の時間まで荷物を預けられますか？', a: 'はい、ご紹介した3ホテルとも宿泊当日のチェックアウト後、新幹線の出発時刻まで無料でクロークにて荷物を預かってくれます。' }
    ]
  },
  {
    slug: 'fukuoka-hakata-tenjin-solo-onsen-gourmet-stay',
    categoryName: '福岡・博多出張＆温泉スパ特集',
    title: '【福岡・博多出張＆ご褒美ソロ旅】博多駅直結・屋上温泉スパ・名物もつ鍋朝食！美食とサウナを満喫する極上宿 厳選3選',
    desc: '福岡空港から地下鉄でわずか約5分のメガシティ・博多＆天神！「屋上に天然温泉アウトドアスパ＆プール」を擁するランドマーク「都ホテル 博多」、キャナルシティ直結で天然温泉と豪華海鮮丼朝食が自慢の「ドーミーインPREMIUM博多・キャナルシティ前」、天神のど真ん中でスカイスパを誇る「カンデオホテルズ福岡天神」を徹底比較。',
    keywords: '博多 出張 ホテル 温泉,福岡 一人旅 ホテル おすすめ,都ホテル博多 温泉,ドーミーインPREMIUM博多 宿泊,天神 サウナ ホテル',
    targetAudience: '出張で訪れるビジネスパーソン・福岡の屋台やもつ鍋を楽しみたい大人の一人旅',
    leadTitle: '空港からわずか5分で広がる美食の街と、屋上の天然温泉スパ——仕事も観光も食も妥協しない「福岡・博多パーフェクトステイ」',
    leadP1: '全国の都市の中でも圧倒的なアクセスの良さを誇る福岡・博多。福岡空港から地下鉄に乗ればわずか5分で博多駅、11分で天神駅へ到着します。ビジネスの拠点としての利便性はもちろん、夜には中洲や天神の屋台、もつ鍋、水炊き、博多ラーメン、玄界灘の新鮮なゴマサバなど、日本有数の美食文化が凝縮しています。',
    leadP2: 'そんな魅力あふれる福岡での滞在をさらに贅沢にしてくれるのが、本格的な「天然温泉」や「屋上ルーフトップスパ」を備えた最新ホテルです。仕事を終えて屋上の温水スパに浸かり、福岡の夜景を眺めながらリフレッシュ。翌朝は明太子やもつ鍋が並ぶ名物朝食で活力をチャージする。出張や一人旅を劇的にアップグレードする厳選3宿をご紹介します。',
    hotelItems: [
      {
        idx: 0,
        tagline: 'JR博多駅筑紫口直結！最上階13階に広がる屋外温泉スパ・プールと滝の流れるガラス張りのラグジュアリー',
        detailTitle: '都ホテル 博多 —— 博多駅直結のランドマーク。天然温泉のルーフトップスパと全室30㎡以上のゆとりあるモダン空間',
        features: [
          { title: '最上階13階に位置する宿泊者専用のアウトドア温泉スパ＆内湯温泉', desc: '敷地内から湧出する天然温泉。ガラス張りのプールやジェットバスから飛行機が行き交う福岡の空を一望できます。' },
          { title: 'JR博多駅筑紫口から地下通路で直結！雨の日も傘いらずでチェックイン', desc: '新幹線改札からも徒歩ですぐ。地下鉄空港線にも直結しており、空港や天神へのフットワークが抜群です。' },
          { title: '全客室が30㎡以上の広々空間＆洗い場付きの独立バスルーム', desc: 'シモンズ製の特注ベッドや大型スマートTVを完備。一人でも最高に贅沢で開放的なプライベートタイムを過ごせます。' }
        ],
        reviewPoints: '楽天トラベル評価4.62点。「屋上の温泉スパが最高に気持ちよく、博多駅直結でこれ以上ない立地」「お部屋も広くて綺麗で、自分へのご褒美出張にぴったりでした」と絶賛の声多数。'
      },
      {
        idx: 1,
        tagline: 'キャナルシティ博多のすぐ隣！天然温泉大浴場とサウナ・名物「博多もつ鍋」＆海鮮丼が並ぶ大人気朝食',
        detailTitle: '天然温泉 袖湊の湯 ドーミーインPREMIUM博多・キャナルシティ前 —— 中洲の屋台街も徒歩圏内。温泉と美食で満たされる王道ビジホ',
        features: [
          { title: '地下から湧く本格的な天然温泉「袖湊の湯」＆高温サウナ・水風呂完備', desc: '旅や出張の疲れをじっくり癒やす大浴場。サウナでしっかりととのってから中洲の街へ繰り出す贅沢が叶います。' },
          { title: '名物「水炊き」や「もつ鍋」、イクラなどを盛り付ける豪華朝食バイキング', desc: '福岡の郷土料理を余すことなく味わえる朝の食体験。出張の朝からご当地グルメを満喫できます。' },
          { title: '夜鳴きそばや湯上がりアイス、乳酸菌飲料の無料サービスも充実', desc: '呑んだ後のシメに嬉しいあっさり醤油ラーメン。おひとりさまでもリラックスして過ごせるサービスが満載です。' }
        ],
        reviewPoints: '楽天トラベル評価4.47点。「キャナルシティの真横で中洲の屋台にも歩いてすぐ。温泉とサウナが気持ちよく朝食も最高でした」「一人出張の定宿です」とリピーターが絶えない名宿。'
      },
      {
        idx: 2,
        tagline: '天神・南天神のショッピング街すぐ！最上階の展望露天風呂「スカイスパ」と開放的な星空外気浴',
        detailTitle: 'CANDEO HOTELS（カンデオホテルズ）福岡天神 —— 繁華街の真ん中で味わう静寂。天神の夜空を見上げるスカイスパ',
        features: [
          { title: '最上階に位置する開放的な展望露天風呂とサウナ・水風呂', desc: '都会の真ん中で夜風に吹かれながら星空を見上げる外気浴。一日の仕事やショッピングの疲れを洗い流せます。' },
          { title: '天神地下街や西鉄福岡（天神）駅へ徒歩数分の好ロケーション', desc: '屋台通りや人気ラーメン店、カフェがひしめくエリア。夜遅くまで博多の夜を満喫しても歩いて帰れます。' },
          { title: '窓際に広々とした小上がりソファ「シモンズ社製ベッド」を配した快適客室', desc: '靴を脱いで寛げるリラックス空間。デスクワークも読書も快適にこなすことができます。' }
        ],
        reviewPoints: '楽天トラベル評価4.09点。「天神の中心にありながら最上階の露天風呂とサウナが最高」「ベッドの寝心地が良く、一人旅の拠点にとても便利でした」と好評。'
      }
    ],
    areaGuide: {
      title: '博多・天神の夜をひとり旅で満喫するスマートガイド',
      points: [
        { name: '1. 屋台は「天神エリア」か「渡辺通エリア」が地元民にも人気で入りやすい', text: '中洲の屋台は観光客で混み合いますが、天神や渡辺通の屋台は常連客や一人客も多く、大将や隣の人と気軽に会話を楽しめます。' },
        { name: '2. 居酒屋ではまず「ごまさば」と「酢もつ」をオーダー', text: '玄界灘の新鮮なサバを特製ゴマダレで和えたごまさばは博多のソウルフード。地酒「田中六五」や「若波」との相性も抜群です。' },
        { name: '3. 翌朝は櫛田神社へ参拝して博多の総鎮守に祈願', text: '博多祇園山笠のフィナーレが繰り広げられる歴史ある神社。早朝の境内には荘厳な空気が漂い、お散歩コースに最適です。' }
      ]
    },
    faqList: [
      { q: '福岡空港からホテルまではタクシーでも近いですか？', a: 'はい、博多駅まではタクシーで約15分（1,500円前後）と驚くほど近く、荷物が多い場合や深夜の到着でもタクシーで快適に移動できます。' },
      { q: '屋上の温泉スパには水着が必要ですか？', a: '都ホテル博多の屋外スパエリアは水着着用（レンタルあり）ですが、男女別の内湯・サウナエリアは通常の温泉大浴場と同様に裸で入浴できます。' }
    ]
  },
  {
    slug: 'sapporo-solo-onsen-sauna-gourmet-stay',
    categoryName: '札幌・登別温泉直送＆シメパフェ特集',
    title: '【札幌ひとり旅・ご褒美泊】登別カルルス温泉直送・本格ロウリュサウナ・シメパフェ巡り！大人のリフレッシュ宿 厳選3選',
    desc: '「北の大地で美味いものを食べ、静かに雪や緑を眺めながら温泉に浸かりたい」。一人旅や出張で訪れる大人の札幌ステイへ。大通公園近くで登別カルルス温泉を引く和の旅館「ONSEN RYOKAN 由縁 札幌」、北海道庁旧本庁舎（赤れんが）を望む優雅な「ソラリア西鉄ホテル札幌」、ススキノ至近でセルフロウリュサウナが自慢の「天然温泉 プレミアホテル-CABIN-札幌」を徹底特集。',
    keywords: '札幌 一人旅 ホテル おすすめ,札幌 温泉 サウナ ホテル,由縁 札幌 宿泊,ソラリア西鉄ホテル札幌 大浴場,プレミアホテルキャビン札幌 サウナ',
    targetAudience: '北海道の美食・自然・温泉サウナをマイペースに楽しみたい大人のソロトラベラー',
    leadTitle: '登別の名湯のぬくもりと、セルフロウリュの心地よい蒸気——すすきのの夜景とシメパフェを味わう「大人の札幌おこもりステイ」',
    leadP1: '四季折々の表情を見せる大通公園、歴史ある赤れんが庁舎、そして全国の食通を唸らせる海の幸やラーメン、スープカレー、そして夜の文化「シメパフェ」。札幌はひとり旅の目的地として国内屈指の魅力を誇ります。街がコンパクトにまとまっており、地下街が発達しているため、雨や雪の日でも傘をささずに快適に名所やグルメ店を巡ることができます。',
    leadP2: 'そして札幌ステイの醍醐味は、都会にいながら本格的な「天然温泉」や「サウナ」を満喫できるハイレベルなホテルが揃っていること。名湯・登別カルルス温泉から毎日タンクローリーで運ばれる湯に浸かり、本格的なセルフロウリュサウナで汗を流す。湯上がりにはアイスや北海道クラフトビールを味わい、夜のパフェバーへ繰り出す……そんな贅沢すぎる大人の休日を叶える厳選3宿をご紹介します。',
    hotelItems: [
      {
        idx: 0,
        tagline: '植物園の緑を望む静寂の和モダン空間！名湯「登別カルルス温泉」を運ぶ露天風呂とサウナ完備の現代旅館',
        detailTitle: 'ONSEN RYOKAN 由縁 札幌 —— 大通公園徒歩すぐ。旅館の温もりとホテルの利便性が融合した大人の隠れ家',
        features: [
          { title: '北海道屈指の名湯「登別カルルス温泉」から毎日運湯される本格天然温泉', desc: '美肌と保温効果に優れた名湯。外気を感じる露天風呂や落ち着いた間接照明の内湯で、極上の湯浴みを楽しめます。' },
          { title: '木と石の温もりが心地よい和風客室（靴を脱いで寛ぐ畳敷きの空間）', desc: '北海道の自然素材を取り入れたミニマルで美しいデザイン。一人でも落ち着きと安らぎを感じられる設計です。' },
          { title: '北海道の旬素材を丁寧に焼き上げる「夏下冬上 札幌」の和朝食御膳', desc: '道産米の炊きたてご飯と焼き魚、出汁の効いた味噌汁。身体が喜ぶ丁寧な朝食が旅の朝を豊かに彩ります。' }
        ],
        reviewPoints: '楽天トラベル評価4.52点。「札幌の街中にいることを忘れるほど静かで、登別の温泉とサウナが最高でした」「スタッフさんの気配りも素晴らしく、一人で贅沢な時間を過ごせました」と高評価。'
      },
      {
        idx: 1,
        tagline: 'JR札幌駅徒歩約5分！道庁旧本庁舎（赤れんが）を望む絶景ロケーションと広々大浴場・フレンチ朝食ビュッフェ',
        detailTitle: 'ソラリア西鉄ホテル札幌 —— 駅近の上質シティホテル。庭園風呂大浴場と北海道産食材を味わうライブキッチン',
        features: [
          { title: '窓から北海道庁旧本庁舎の庭園の緑や紅葉、雪景色を一望できる好立地', desc: '歴史ある赤れんが庁舎を眼下に眺める贅沢。札幌駅からも地下通路経由でアクセスしやすく冬でも安心です。' },
          { title: '地下1階に広がる宿泊者専用のスタイリッシュな大浴場（内湯・外気浴）', desc: '庭園を眺めながらゆったり足を伸ばせる大浴場。旅や出張の疲れを心地よくリフレッシュできます。' },
          { title: '道産牛のローストビーフや海鮮丼が並ぶ大人気の朝食ビュッフェ', desc: 'フレンチシェフが腕を振るうこだわりのモーニング。北海道の豊かな食の恵みを朝から存分に堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.49点。「札幌駅から近くて道庁の景色が綺麗、大浴場も清潔で言うことなし」「朝食のレベルが非常に高く、一人でも落ち着いて食べられました」と定評。'
      },
      {
        idx: 2,
        tagline: 'すすきの徒歩すぐ！天然温泉100％の「すすきの天然温泉」とサウナー垂涎のセルフロウリュサウナ・地下水水風呂',
        detailTitle: '天然温泉 プレミアホテル-CABIN-札幌 —— 自家源泉の本格天然温泉。サウナシュラン仕様の本格ととのい空間',
        features: [
          { title: '地下から湧き出る鉄分豊富な良質な自家源泉天然温泉大浴場', desc: '体の芯から温まる塩化物泉。露天風呂や気泡風呂など多彩な浴槽で湯巡り気分を楽しめます。' },
          { title: '白樺のアロマ水でセルフロウリュができる本格フィンランドサウナ', desc: 'サウナー絶賛の本格サウナ室。キンキンに冷えた地下水かけ流しの水風呂と屋上気分の外気浴でディープにととのえます。' },
          { title: 'すすきのの繁華街・ラーメン横丁・パフェバーへ徒歩すぐの好アクセス', desc: '夜遅くまでジンギスカンやシメパフェを楽しんでも、すぐに歩いてホテルへ戻り温泉に入れます。' }
        ],
        reviewPoints: '楽天トラベル評価4.20点。「サウナのクオリティが札幌トップクラス。セルフロウリュと水風呂が最高でした」「すすきのの飲み歩きの拠点として最強の温泉宿」とサウナファン・一人旅に大人気。'
      }
    ],
    areaGuide: {
      title: '札幌の夜文化「シメパフェ」をひとり旅で楽しむ3つのコツ',
      points: [
        { name: '1. 狙い目は開店直後（18:00〜19:00）または深夜23:00以降', text: '飲み会終わりの21:00〜22:30頃は行列がピークになります。少し時間をずらすと待ち時間なしでスムーズに入店できます。' },
        { name: '2. 季節の北海道産フルーツとお酒（ウイスキー・リキュール）のペアリング', text: 'シメパフェ専門店ではパフェとお酒のマリアージュが定番。余市ウイスキーやクラフトジンを合わせると大人の味を楽しめます。' },
        { name: '3. ホテルに戻ったら大浴場でしっかり体を温めて就寝', text: '冷たいパフェを食べた後は、ホテルの温泉や大浴場で温まってからふかふかのベッドへ。最高の睡眠が得られます。' }
      ]
    },
    faqList: [
      { q: '冬の時期は雪道でスーツケースを引くのが大変ですか？', a: '札幌駅〜大通〜すすきの間は「チ・カ・ホ（札幌駅前通地下歩行空間）」や地下街「ポールタウン」が直結しており、真冬の吹雪や積雪時でも地上に出ずに移動できます。' },
      { q: '一人でジンギスカンやスープカレーのお店に入りやすいですか？', a: '札幌のスープカレー店や人気ジンギスカン店（だるま等）はカウンター席が充実しており、一人客の割合が非常に高いので気兼ねなく美味しい食事を楽しめます。' }
    ]
  }
];

function generatePageTsx(art) {
  const currentHotels = hotelsData[art.slug];

  return `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${art.title.replace(/'/g, "\\'")}',
  description: '${art.desc.replace(/'/g, "\\'")}',
  keywords: '${art.keywords.replace(/'/g, "\\'")}',
  openGraph: {
    title: '${art.title.replace(/'/g, "\\'")}',
    description: '${art.desc.replace(/'/g, "\\'")}',
    url: 'https://croud-travel.pages.dev/${art.slug}',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '${art.title.replace(/'/g, "\\'")}',
    description: '${art.desc.replace(/'/g, "\\'")}',
    author: {
      '@type': 'Organization',
      name: 'クラウドトラベル ひとり旅・ホテル調査班',
      url: 'https://croud-travel.pages.dev/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラウドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png',
      },
    },
    datePublished: '2026-09-11T02:30:00+09:00',
    dateModified: '2026-09-11T02:30:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/${art.slug}',
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 antialiased font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span>/</span>
        <span className="text-stone-700 font-medium">${art.categoryName}</span>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">${art.title}</span>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-950 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-amber-300/80 shadow-xs">
          <span>✨</span>
          <span>${art.categoryName}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          ${art.title}
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
          ${art.desc}
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-950 border-b border-amber-100 pb-3">
            ${art.leadTitle}
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ${art.leadP1}
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ${art.leadP2}
          </p>
        </section>

        {/* 厳選ホテルリスト */}
        <div className="space-y-10">
          <div className="border-l-4 border-amber-800 pl-4 py-1">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900">
              編集部が厳選！おすすめの極上宿・ホテル詳細
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              楽天トラベルの最新APIデータを反映。口コミ高評価＆こだわり設備を徹底チェック
            </p>
          </div>

          ${art.hotelItems.map((item, idx) => {
            const h = currentHotels[item.idx];
            return `
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <div className="relative h-64 sm:h-80 w-full bg-stone-100 overflow-hidden">
              <Image
                src="${h.hotelImageUrl}"
                alt="${h.hotelName}"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full">
                第${idx + 1}選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-1 rounded-md shadow-xs">
                楽天総合評価 ★ ${h.reviewAverage} 点（${h.reviewCount}件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-wide mb-1">
                  ${item.tagline}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ${item.detailTitle}
                </h3>
              </div>

              <div className="space-y-3 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  注目のポイント＆魅力
                </h4>
                <div className="grid gap-3 sm:grid-cols-3">
                  ${item.features.map(f => `
                  <div className="bg-white p-3.5 rounded-xl border border-stone-200/60 space-y-1">
                    <p className="text-xs font-bold text-amber-950">${f.title}</p>
                    <p className="text-xs text-stone-600 leading-relaxed">${f.desc}</p>
                  </div>
                  `).join('')}
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-stone-600 bg-amber-50/50 p-4 rounded-xl border border-amber-100/60">
                <p className="font-semibold text-amber-900">📝 宿泊者の生の声・評判：</p>
                <p className="leading-relaxed text-stone-700">${item.reviewPoints}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100">
                <div className="text-xs text-stone-500 space-y-0.5 text-center sm:text-left">
                  <p>📍 ${h.address1}${h.address2}</p>
                  <p>🚆 ${h.access}</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="${h.affiliateUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-200"
                  >
                    楽天トラベルで空室・プランを見る →
                  </a>
                </div>
              </div>
            </div>
          </article>
            `;
          }).join('')}
        </div>

        {/* ガイド・ノウハウセクション */}
        <section className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <div className="inline-block bg-amber-500 text-stone-950 font-bold text-xs px-2.5 py-1 rounded-md">
              TIPS & GUIDE
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
              ${art.areaGuide.title}
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            ${art.areaGuide.points.map(p => `
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700/60 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">
                ${p.name}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                ${p.text}
              </p>
            </div>
            `).join('')}
          </div>
        </section>

        {/* よくある質問 FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-6">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-stone-900 border-b border-stone-200 pb-3">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            ${art.faqList.map(faq => `
            <div className="space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-stone-900 flex items-start gap-2">
                <span className="text-amber-800 font-extrabold">Q.</span>
                <span>${faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                ${faq.a}
              </p>
            </div>
            `).join('')}
          </div>
        </section>

        {/* 関連リンク・ナビゲーション */}
        <div className="text-center pt-8 border-t border-stone-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 font-medium transition-colors"
          >
            ← クラウドトラベル トップページへ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
`;
}

function run() {
  for (const art of articles) {
    const targetDir = path.join(__dirname, 'src/app', art.slug);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const pagePath = path.join(targetDir, 'page.tsx');
    const content = generatePageTsx(art);
    fs.writeFileSync(pagePath, content, 'utf8');
    console.log(`Generated page: ${pagePath}`);
  }
  console.log('\nAll 5 batch2 article pages created successfully!');
}

run();
