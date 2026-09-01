const fs = require('fs');
const path = require('path');

const railwayConfigs = [
  {
    slug: 'japan-steam-locomotive-sl-retro-train-stay',
    badge: 'STEAM LOCOMOTIVE GUIDE',
    title: '【SL蒸気機関車＆レトロ列車旅】大井川鐵道・SLばんえつ物語＆温泉宿 完全ガイド',
    metaDesc: '汽笛と白煙のノスタルジー！全国の現役SL（蒸気機関車）運行路線＆駅近温泉宿完全特化！静岡「大井川鐵道（きかんしゃトーマス号）」、福島＆新潟「SLばんえつ物語」、秩父鉄道「SLパレオエクスプレス」、寸又峡温泉・東山温泉宿を徹底解説。',
    heroDesc: '勇壮な汽笛を響かせ、モクモクと煙を上げて力強く走る「SL蒸気機関車」。昭和レトロな木造客車に揺られ、車窓に流れる茶畑や渓谷。大井川鐵道のきかんしゃトーマス号や磐越西線の貴婦人。終着駅の温泉街で湯に浸かる鉄道浪漫の旅へ。',
    categoryKey: 'japan-steam-locomotive-sl-retro-train-stay',
    areaGuides: [
      {
        key: 'oigawa_railway_sl_thomas_stay',
        title: '1. 静岡・大井川鐵道〜川根温泉・寸又峡（日本一のSL動態保存路線）',
        timing: '通年（きかんしゃトーマス号運行時期・新茶の春・紅葉の秋）',
        desc: '年間300日以上SLが走る日本屈指の動態保存鉄道「大井川鐵道」。大人気「きかんしゃトーマス号」。大井川第一橋梁を渡るSLの勇姿。線路沿いの露天風呂からSLに手を振れる「川根温泉ふれあいの泉」。エメラルドグリーンの夢の吊橋が有名な寸又峡温泉。',
        spots: '新金谷駅（SL転車台・プラザロコ）、川根温泉笹間渡駅、千頭駅（トーマスフェア）、寸又峡温泉（夢の吊橋）',
        access: 'JR東海道線「金谷駅」乗り換え。新東名「島田金谷IC」より約10分。',
        tip: '新金谷駅では出発前にSLの整備点検作業や石炭の投入風景、転車台（ターンテーブル）で方向転換する迫力のシーンを間近で見学できます。'
      },
      {
        key: 'sl_banetsu_aizu_higashiyama_stay',
        title: '2. 福島＆新潟・SLばんえつ物語〜磐越西線・会津若松（森と水とロマンの鉄道）',
        timing: '運転日：4月〜11月の土休日中心（紅葉の10月下旬〜11月上旬は絶景）',
        desc: '「貴婦人」の愛称で親しまれるC57 180号機が牽引する「SLばんえつ物語（新津〜会津若松）」。阿賀野川沿いの深い渓谷美。グリーン車展望パノラマ室やオコジョ展望車。終着の会津若松城下町と開湯1300年の東山温泉。',
        spots: '会津若松駅、東山温泉（御宿東鳳・向瀧）、芦ノ牧温泉、阿賀野川深戸橋梁（有名撮影地）、津川駅（給水・点検）',
        access: 'JR磐越西線。磐越道「会津若松IC」より。',
        tip: '津川駅では約15分間の停車時間があり、機関士が給水や点検を行う様子をホームから記念撮影できる人気のシャッターチャンスです。'
      },
      {
        key: 'chichibu_sl_paleo_express_stay',
        title: '3. 埼玉・秩父鉄道 SLパレオエクスプレス〜長瀞（都心から一番近い蒸気機関車）',
        timing: '運転日：3月下旬〜12月上旬の土休日中心',
        desc: '熊谷〜三峰口間を約2時間40分かけてのんびり走る「SLパレオエクスプレス（C58 363号機）」。荒川橋梁を渡る大迫力の光景。名勝「長瀞ラインくだり」や天然氷のかき氷。秩父の豊かな自然に包まれた温泉旅館。',
        spots: '長瀞岩畳、三峰口駅（SL転車台公園）、秩父神社、秩父温泉、長瀞ラインくだり',
        access: '西武秩父駅またはJR熊谷駅より秩父鉄道。関越道「花園IC」より約30分。',
        tip: '終点の三峰口駅隣接「SL転車台公園」では、SLが転車台で回転する様子や機関車のメカニズムを解説付きで間近に見学できます。'
      }
    ]
  },
  {
    slug: 'scenic-open-air-trolley-train-resort-stay',
    badge: 'TROLLEY TRAIN GUIDE',
    title: '【絶景観光トロッコ列車＆オープン客車】黒部峡谷・嵯峨野・南阿蘇＆名湯 完全ガイド',
    metaDesc: '窓のない爽快オープンデッキで風を感じる！全国の人気観光トロッコ列車＆渓谷温泉宿完全特化！富山「黒部峡谷トロッコ電車」、京都嵐山「嵯峨野トロッコ列車」、熊本「南阿蘇鉄道ゆうすげ号」、宇奈月温泉・嵐山温泉宿を徹底解説。',
    heroDesc: '窓ガラスのないオープン客車に吹き抜ける心地よい渓谷の風！「絶景観光トロッコ列車」。険しいV字峡谷を縫うように走る黒部峡谷鉄道、保津川の絶壁を望む京都嵯峨野トロッコ、阿蘇の大カルデラを横断する南阿蘇トロッコ。大自然と秘湯を巡る旅へ。',
    categoryKey: 'scenic-open-air-trolley-train-resort-stay',
    areaGuides: [
      {
        key: 'kurobe_gorge_trolley_unazuki_stay',
        title: '1. 富山・黒部峡谷鉄道トロッコ電車〜宇奈月温泉・欅平（日本一深いV字峡谷）',
        timing: '運行期間：4月中旬〜11月30日（新緑の初夏・紅葉の10月中旬〜11月上旬）',
        desc: '宇奈月駅から欅平駅まで約20.1km（片道約80分）を走る「黒部峡谷鉄道」。真紅の山彦橋、仏石、黒薙温泉の後曳橋、終点欅平の猿飛峡や足湯。黒部川沿いに広がる宇奈月温泉の無色透明な美肌湯。',
        spots: '黒部峡谷トロッコ電車（宇奈月〜黒薙〜鐘釣〜欅平）、欅平（猿飛峡・奥鐘橋・足湯）、宇奈月温泉（やまびこ遊歩道）',
        access: '北陸新幹線「黒部宇奈月温泉駅」より富山地方鉄道乗り換え「宇奈月温泉駅」すぐ。',
        tip: 'トロッコ電車は進行方向右側の座席（宇奈月発・下り列車の場合）に座ると、エメラルドグリーンの黒部川と大渓谷の絶景を間近で楽しめます。'
      },
      {
        key: 'sagano_scenic_railway_arashiyama',
        title: '2. 京都・嵯峨野トロッコ列車〜保津川下り・嵐山（レトロなクラシカル列車）',
        timing: '通年運行（水曜定休・春の桜トンネル・夏の青もみじ・秋の錦秋ライトアップ）',
        desc: 'トロッコ嵯峨駅からトロッコ亀岡駅まで保津川沿い約7.3kmを走る「嵯峨野トロッコ列車（全席指定）」。窓ガラスがないオープン車両「ザ・リッチ号（5号車）」。帰りはスリル満点の「保津川下り」で船で戻る黄金ルート。',
        spots: 'トロッコ嵯峨駅（19世紀ホール・ジオラマ京都JAPAN）、保津峡駅（吊り橋・タヌキの置物）、保津川下り（亀岡〜嵐山）、渡月橋',
        access: 'JR山陰本線（嵯峨野線）「嵯峨嵐山駅」隣接。',
        tip: '風をダイレクトに感じる5号車「ザ・リッチ号」は当日券または事前予約で大人気のため、旅程が決まったら早めの座席確保がおすすめです。'
      },
      {
        key: 'minamiaso_railway_trolley_stay',
        title: '3. 熊本・南阿蘇鉄道トロッコ列車「ゆうすげ号」〜白川水源（全線復旧の阿蘇パノラマ）',
        timing: '運行日：3月中旬〜11月下旬の土日祝日中心（夏休み毎日運行）',
        desc: '熊本地震から完全復旧を果たした「南阿蘇鉄道（立野〜高森）」。阿蘇五岳と外輪山に抱かれた南阿蘇をのんびり走る「トロッコ列車ゆうすげ号」。高さ60mの第一白川橋梁からの絶景。毎分60トンの名水が湧き出る「白川水源」。',
        spots: '高森駅（サニー号トレイン・ONE PIECE像）、第一白川橋梁、白川水源、阿蘇パノラマライン、南阿蘇温泉郷',
        access: 'JR豊肥本線「立野駅」接続。熊本空港より車約40分。',
        tip: '第一白川橋梁では列車が橋の上で徐行・一時停止し、車掌さんの楽しいガイドとともに足下に広がる深い渓谷を見下ろせます。'
      }
    ]
  },
  {
    slug: 'panoramic-ropeway-mountain-terrace-resort-stay',
    badge: 'ROPEWAY & MOUNTAIN TERRACE GUIDE',
    title: '【絶景ロープウェイ＆山頂テラス宿】びわ湖バレイ・蔵王・富士山パノラマ 完全ガイド',
    metaDesc: '空へと駆け上がる感動の空中散歩！絶景ロープウェイ＆山頂天空テラス宿完全特化！滋賀「びわ湖バレイ（びわ湖テラス）」、山形「蔵王ロープウェイ（樹氷原）」、長野「竜王ソラテラス（雲海）」、静岡「碧テラス（伊豆パノラマパーク）」を徹底解説。',
    heroDesc: 'ゴンドラに乗り込み、一気に雲の上へ！「絶景ロープウェイ＆山頂天空テラス」。琵琶湖を眼下に望むインフィニティウッドデッキ、北アルプスの雲海を見下ろすサンセット、冬の巨大な樹氷モンスター。山頂カフェで贅沢なドリンクを片手に過ごす休日へ。',
    categoryKey: 'panoramic-ropeway-mountain-terrace-resort-stay',
    areaGuides: [
      {
        key: 'biwako_valley_terrace_resort_stay',
        title: '1. 滋賀・びわ湖バレイ〜びわ湖テラス（日本最速ロープウェイで行く天空の特等席）',
        timing: 'グリーンシーズン：4月〜11月（澄み渡る秋の青空は格別）',
        desc: '秒速12m（日本最速）の最新鋭キャビンで標高1,100mの打見山山頂へ登る「びわ湖バレイロープウェイ」。三段構造のウッドデッキが広がる「びわ湖テラス（The Main）」。青い水盤の向こうに広がる雄大な琵琶湖のパノラマ。',
        spots: 'びわ湖テラス（Grand Terrace・Cafe 360）、びわ湖バレイ（ジップライン）、おごと温泉（美肌のアルカリ性単純泉）',
        access: 'JR湖西線「志賀駅」より路線バス約10分。名神高速「京都東IC」より西武道路経由約40分。',
        tip: 'リフトでさらに登る「Cafe 360」からは、琵琶湖の南北360度だけでなく、天気が良ければ遠く北アルプスや御嶽山まで見渡せます。'
      },
      {
        key: 'zao_ropeway_frost_terrace_stay',
        title: '2. 山形・蔵王ロープウェイ〜地蔵山頂テラス（世界が息を呑む樹氷原と高山植物）',
        timing: '通年（冬の樹氷ライトアップ：12月下旬〜2月・秋の三段紅葉：9月下旬〜10月中旬）',
        desc: '蔵王山麓駅から樹氷高原駅を経て地蔵山頂駅（標高1,661m）を結ぶ「蔵王ロープウェイ」。冬期に広がる世界的な奇観「スノーモンスター（樹氷原）」。山頂レストランの展望テラス。開湯1900年の強酸性・白濁の蔵王温泉。',
        spots: '蔵王ロープウェイ（山麓線・山頂線）、地蔵山頂駅（開運蔵王地蔵尊）、蔵王温泉大露天風呂、蔵王山頂テラス',
        access: 'JR山形駅より山交バス「蔵王温泉行」で約45分。山形道「山形蔵王IC」より約30分。',
        tip: '冬の夜間に運行する「ナイトクルーザー号（暖房付き特殊雪上車）」で行く樹氷ライトアップツアーは、幻想的な色彩に照らされた樹氷群を間近で鑑賞できます。'
      },
      {
        key: 'ryuo_sora_terrace_sea_of_clouds',
        title: '3. 長野・SORA terrace（竜王マウンテンリゾート）〜雲海サンセット（遭遇率60%超）',
        timing: '営業期間：4月下旬〜11月上旬（夕暮れの雲海サンセットタイムは絶景）',
        desc: '166人乗り世界最大級のロープウェイで登る標高1,770mの「SORA terrace（ソラテラス）」。眼下に広がる広大な雲海と北信五岳に沈む夕陽。雲の上に浮かぶようなSORA terrace cafeでの雲海スフレや雲海マシュマロコーヒー。',
        spots: 'SORA terrace、SORA terrace cafe、竜王マウンテンリゾート、湯田中渋温泉郷（九湯巡り）',
        access: '長野電鉄「湯田中駅」より無料シャトルバス運行。上信越道「信州中野IC」より約30分。',
        tip: '雲海は「早朝」だけでなく「夕方」にも発生しやすく、夕陽が雲海を黄金色から茜色に染め上げるマジックアワーは感動的な美しさです。'
      }
    ]
  },
  {
    slug: 'japan-long-cruise-ferry-ocean-journey-stay',
    badge: 'LUXURY CRUISE & FERRY GUIDE',
    title: '【優雅な船旅・長距離カーフェリー＆離島航路】太平洋・日本海クルーズ 完全ガイド',
    metaDesc: '海上の動く洋上ホテル！長距離フェリー＆離島航路完全特化！太平洋フェリー（名古屋〜仙台〜苫小牧・いしかり）、新日本海フェリー（新潟・敦賀〜小樽）、佐渡汽船ジェットフォイル、フェリー発着港至近の温泉ホテルを徹底解説。',
    heroDesc: '大海原を滑るように進み、海上の大浴場から水平線を眺める「優雅な長距離フェリー旅」。展望レストランでのバイキングディナー、生演奏ピアノラウンジ、プライベートバルコニー付きスイートルーム。港町の極上海鮮と温泉宿で迎える至福の船旅へ。',
    categoryKey: 'japan-long-cruise-ferry-ocean-journey-stay',
    areaGuides: [
      {
        key: 'taiheiyo_ferry_sendai_tomakomai',
        title: '1. 太平洋フェリー（名古屋〜仙台〜苫小牧）〜名船「いしかり・きそ」（洋上の豪華ホテル）',
        timing: '通年（穏やかな太平洋クルーズ・満天の洋上星空）',
        desc: 'クルーズシップ・オブ・ザ・イヤーのフェリー部門で連続第1位を獲得し続ける「太平洋フェリー（いしかり・きそ・きたかみ）」。3層吹き抜けのエントランスロビー、展望大浴場、毎夜開催されるラウンジショー。仙台港や苫小牧港至近の温泉ホテル。',
        spots: '仙台港フェリーターミナル、三井アウトレットパーク仙台港、苫小牧西港フェリーターミナル、登別温泉',
        access: 'JR仙石線「中野栄駅」よりバス約10分。',
        tip: '太平洋フェリーの「特等室」や「スイートルーム」にはプライベートバルコニーがあり、海風を感じながら淹れたてのコーヒーを楽しむ贅沢な時間を過ごせます。'
      },
      {
        key: 'shin_nihonkai_ferry_otaru_niigata',
        title: '2. 新日本海フェリー（舞鶴・敦賀・新潟〜小樽・苫小牧）〜高速日本海クルーズ（露天風呂付き）',
        timing: '通年（日本海の夕陽と荒波・冬の雪見航路）',
        desc: '日本最速クラスの航海速力で本州と北海道を結ぶ「新日本海フェリー（らべんだあ・あざれあ等）」。船尾に設置された洋上オープンエア露天風呂。大型スクリーンでの船内映画上映。小樽運河のガス灯散策と小樽温泉郷。',
        spots: '小樽港フェリーターミナル、小樽運河、新潟港山の下埠頭、敦賀港、小樽朝里川温泉',
        access: 'JR小樽駅よりバス・車約10分。',
        tip: '日本海フェリーの船尾露天風呂からは、航跡波の白いラインと夕陽が水平線に沈んでいくパノラマを湯船に浸かりながら独占できます。'
      },
      {
        key: 'sado_steamship_niigata_ryotsu',
        title: '3. 佐渡汽船（新潟〜両津・直江津〜小木）〜ジェットフォイル＆カーフェリー（世界遺産佐渡へ）',
        timing: '通年（ジェットフォイルは約67分で新潟〜佐渡間を結ぶ）',
        desc: '海の上に浮上して時速約80kmで疾走する「ジェットフォイル（ぎんが・つばさ・すいせい）」と、カモメのエサやりが楽しい大型カーフェリー「おけさ丸・ときわ丸」。朱鷺（トキ）の舞う佐渡島。両津港周辺の椎崎温泉。',
        spots: '新潟港佐渡汽船ターミナル、両津港ターミナル、佐渡金山、たらい舟力屋観光汽船、椎崎温泉',
        access: 'JR新潟駅より路線バス約15分。',
        tip: 'カーフェリーの展望デッキでは、新潟港出航後にウミネコが船の周りを併走するため、専用のかっぱえびせんを手から直接あげる体験が大人気です。'
      }
    ]
  },
  {
    slug: 'glamping-outdoor-barrel-sauna-resort-stay',
    badge: 'GLAMPING & BARREL SAUNA GUIDE',
    title: '【グランピング＆バレルサウナ体験宿】北欧テント・星空BBQ＆ととのい 完全ガイド',
    metaDesc: '大自然の中で極上のととのい体験！本格バレルサウナ＆グランピングリゾート宿完全特化！富士山麓、白馬、千葉房総、淡路島、薪サウナ・天然水風呂・外気浴インフィニティチェア、豪華BBQディナー宿を徹底解説。',
    heroDesc: '心地よい木の香りとセルフロウリュの熱波に包まれる「バレルサウナ＆グランピング」。天然の地下水風呂で身体を引き締め、満天の星空の下でインフィニティチェアに身を委ねる究極のととのい。焚き火の炎と極上グランピングBBQへ。',
    categoryKey: 'glamping-outdoor-barrel-sauna-resort-stay',
    areaGuides: [
      {
        key: 'fuji_barrel_sauna_glamping',
        title: '1. 山梨・富士五湖（河口湖・山中湖）〜富士山ビューバレルサウナ（絶景外気浴）',
        timing: '通年（冬の澄んだ空気と富士山サウナは最高の贅沢）',
        desc: '客室専用デッキに設置されたエストニア製バレルサウナ。窓越しに雄大な富士山を眺めながらのアロマ水セルフロウリュ。富士の伏流水を使った天然水風呂。ラグジュアリードームテントと甲州牛ステーキBBQ。',
        spots: '河口湖畔、山中湖パノラマ台、忍野八海、富士急ハイランド',
        access: '中央道「河口湖IC」または東富士五湖道路「山中湖IC」より車約10〜15分。',
        tip: '富士山麓のグランピングサウナでは、冬期には外気浴中にマイナス気温の澄み切った冷気で一気にクールダウンでき、未体験のディープリラックスが得られます。'
      },
      {
        key: 'boso_chiba_sauna_retreat_stay',
        title: '2. 千葉・房総（いすみ・木更津）〜里山サウナ＆プライベートプール（都心から90分）',
        timing: '通年（年間を通じて温暖・緑に囲まれたアウトドア）',
        desc: '竹林や広大な芝生ガーデンに佇むプライベートサウナリゾート。薪ストーブでじっくり温める本格フィンランド式サウナ。プールに飛び込むダイナミックなクールダウン。夜は満天の星空の下での焚き火とスモア体験。',
        spots: '養老渓谷、ポッポの丘、木更津アウトレット、マザー牧場',
        access: 'アクアライン経由で都心より車約60〜90分。',
        tip: '薪サウナは電気ストーブサウナよりも熱が柔らかく、パチパチとはぜる薪の音と木の香りに包まれる極上のリラクゼーションが味わえます。'
      },
      {
        key: 'kansai_awaji_barrel_sauna_stay',
        title: '3. 兵庫・淡路島〜シーサイドバレルサウナ（夕陽と潮風のととのい空間）',
        timing: '通年（海に沈む夕陽を眺めながらのサンセットサウナ）',
        desc: '瀬戸内海を正面に望むオーシャンフロントサウナ。丸いガラス窓から夕陽を眺めながら汗を流す至福。海風を感じる外気浴デッキ。淡路島玉ねぎや淡路牛、近海鮮魚の豪華グランピングBBQ。',
        spots: '淡路島サンセットライン、ニジゲンノモリ、あわじ花さじき、慶野松原',
        access: '神戸淡路鳴門道「淡路IC」または「北淡IC」より車。',
        tip: 'サウナ後のディナーでは、淡路島産の甘い完熟玉ねぎを丸ごとホイル焼きにしたBBQメニューがサウナ後の身体に染み渡る美味しさです。'
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
  keywords: ["${config.slug}", "鉄道旅行", "乗り物旅", "絶景体験", "温泉宿", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["${config.categoryKey}"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for ${config.categoryKey}", e);
  }
  return {};
}

export default function RailwayActivityHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = ${JSON.stringify(config.areaGuides, null, 2)};

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-950 via-indigo-950 to-stone-900 text-white p-8 md:p-14 shadow-xl border border-cyan-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-cyan-400 to-blue-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            ${config.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            ${config.title}
          </h1>
          <p className="text-xs md:text-sm text-cyan-100/90 leading-relaxed">
            ${config.heroDesc}
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆厳選宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-blue-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-blue-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-blue-800 bg-blue-50 border border-blue-200 px-3 py-0.5 rounded-full uppercase">
                    🚂 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-blue-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1.5">
                  <span className="font-bold text-blue-950 block text-[11px]">📍 おすすめスポット＆見どころ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-200 space-y-1.5">
                  <span className="font-bold text-cyan-950 block text-[11px]">🚅 アクセス＆乗車ポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">💡 体験を満喫するコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-blue-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-blue-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                    厳選ステイ
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-blue-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-blue-50 border-b border-blue-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-blue-300 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-cyan-300 px-2 py-0.5 rounded border border-cyan-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-blue-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-stone-600 line-clamp-2 font-medium">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-blue-950 bg-white hover:bg-blue-50 border border-blue-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
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

for (const cfg of railwayConfigs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated railway activity hub page: /${cfg.slug}`);
}
