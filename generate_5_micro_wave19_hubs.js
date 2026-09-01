const fs = require('fs');
const path = require('path');

const microWave19Configs = [
  {
    slug: 'iwate-sanriku-miyako-jodogahama-stay',
    badge: 'MIYAKO & JODOGAHAMA GUIDE',
    title: '【岩手・三陸宮古＆浄土ヶ浜】極楽浄土の白い奇岩・青の洞窟＆名物「瓶ドン」宿 完全ガイド',
    metaDesc: '三陸復興国立公園の白砂と青松の絶景・岩手宮古エリア完全特化！国の名勝「浄土ヶ浜」、さっぱ船で行く「青の洞窟（八戸穴）」、三陸鉄道リアス線、三陸の海の幸を牛乳瓶に詰めた名物「瓶ドン」、宮古トラウトサーモン宿を徹底解説。',
    heroDesc: 'まるで極楽浄土のような白流紋岩の奇岩と透明な海「浄土ヶ浜」。小型さっぱ船で潜入する神秘の青の洞窟。三陸鉄道リアス線の絶景オーシャンビュー車窓。ウニ・イクラ・サーモンがぎっしり詰まった名物「瓶ドン」を味わう三陸海岸の旅。',
    categoryKey: 'iwate-sanriku-miyako-jodogahama-stay',
    areaGuides: [
      {
        key: 'jodogahama_ocean_resort',
        title: '1. 浄土ヶ浜〜青の洞窟・さっぱ船（白流紋岩と緑の松が織りなす極楽浄土）',
        timing: '通年（夏の海水浴・春〜秋のさっぱ船遊覧・冬の澄んだ海）',
        desc: '天和年間に霊鏡和尚が「さながら極楽浄土のごとし」と感嘆した国の名勝「浄土ヶ浜」。透き通る入り江にそびえる白い巨岩群。小型の「さっぱ船」に乗ってヘルメット着用で入る「青の洞窟（八戸穴）」のエメラルドグリーンの輝き。',
        spots: '浄土ヶ浜（浄土ヶ浜ビジターセンター・奥浄土ヶ浜）、青の洞窟（さっぱ船遊覧）、みやこ浄土ヶ浜遊覧船「うみねこ丸」、御台場展望台',
        access: 'JR山田線・三陸鉄道「宮古駅」より路線バスで約20分。盛岡駅より特急バス「106急行」で約2時間。',
        tip: '浄土ヶ浜マリンハウスから出航する「さっぱ船」では、ウミネコに餌をあげながら青の洞窟へ向かい、洞窟内の水面がコバルトブルーに輝く神秘的な光景を間近で見られます。'
      },
      {
        key: 'miyako_port_seafood_stay',
        title: '2. 宮古港〜三陸鉄道リアス線（本州最東端の岬と復興のローカル線）',
        timing: '通年（三陸鉄道イベント列車や紅葉シーズン）',
        desc: '本州最東端に位置する「魹ヶ崎（とどがさき）灯台」。太平洋の水平線を望む三陸海岸の絶景。三陸鉄道リアス線（盛〜久慈間）の宮古駅。宮古港魚市場に水揚げされる新鮮な真鱈・毛ガニ・キチジ（キンキ）の贅沢な味わい。',
        spots: '魹ヶ崎灯台（本州最東端の碑）、三陸鉄道宮古駅、宮古市魚市場、道の駅みやこ（シートピアなあど）',
        access: '宮古市内。',
        tip: '本州最東端の「魹ヶ崎」へは、姉吉キャンプ場から自然歩道を約1時間歩くトレッキングルートで、到達すると本州最東端訪問証明書が発行されます。'
      },
      {
        key: 'sanriku_bindon_salmon_stay',
        title: '3. 元祖ご当地名物「瓶ドン」＆宮古トラウトサーモン（自分でご飯にかける海の宝石箱）',
        timing: '通年（ウニ・イクラ・めかぶ・サーモンなど季節の魚介）',
        desc: '牛乳瓶の中にウニ・イクラ・めかぶ・宮古トラウトサーモンを層状に詰め込んだ宮古発祥の新名物「瓶ドン」。ホカホカのご飯の上に自分で豪快に回しかけて食べる楽しさ。上品な脂が乗った宮古産トラウトサーモンのお造り。',
        spots: '蛇の目本店（寿司割烹）、魚正、浄土ヶ浜レストハウス、宮古市内の郷土料理宿',
        access: '宮古市全域。',
        tip: '瓶ドンは店ごとに具材の組み合わせが異なり、春は焼きウニ、秋は生イクラ、冬はタラコなど、季節ごとの旬の味覚を楽しめます。'
      }
    ]
  },
  {
    slug: 'nagano-togakushi-shrine-soba-stay',
    badge: 'TOGAKUSHI & JINJA GUIDE',
    title: '【長野・戸隠＆飯綱高原】戸隠神社五社巡り・奥社杉並木＆日本三大戸隠そば宿 完全ガイド',
    metaDesc: '神話と巨樹の霊山・長野戸隠エリア完全特化！天照大御神の岩戸伝説息づく「戸隠神社五社（奥社・中社・宝光社・九頭龍社・火之御子社）」、樹齢400年奥社杉並木、日本三大そば「戸隠そば（ぼっち盛り）」、戸隠温泉・宿坊旅館を徹底解説。',
    heroDesc: '天手力雄命が投げ飛ばした天の岩戸が落ちてできたと伝わる霊峰「戸隠山」。樹齢400年を超える杉並木が続く戸隠神社奥社参道。一本のソバを丁寧に束ねる「ぼっち盛り」の日本三大戸隠そば。歴史ある宿坊や高原リゾートで心洗われる休日へ。',
    categoryKey: 'nagano-togakushi-shrine-soba-stay',
    areaGuides: [
      {
        key: 'togakushi_shrine_shukubo_stay',
        title: '1. 戸隠神社奥社〜杉並木参道・中社（樹齢400年の巨樹回廊と五社巡り）',
        timing: '通年（春〜秋の参拝・紅葉の10月中旬・冬の静寂の雪参道）',
        desc: '2,000年以上の歴史を誇る聖地「戸隠神社」。奥社参道の随神門をくぐると現れる約500mに及ぶ樹齢400年の巨大な杉並木（国の天然記念物）。天八意思兼命を祀る中社。歴史ある宿坊での朝拝や精進料理の体験。',
        spots: '戸隠神社（奥社・中社・宝光社・九頭龍社・火之御子社）、奥社参道杉並木、鏡池（戸隠連峰を映す池）',
        access: 'JR長野駅（北陸新幹線）より路線バス「戸隠線」で約60〜70分。上信越道「信濃町IC」より約30分。',
        tip: '「鏡池」は風のない早朝に訪れると、水面が完全に鏡となり、険しい戸隠連峰と鮮やかな紅葉がシンメトリーに映り込む絶景が楽しめます。'
      },
      {
        key: 'iizuna_highland_resort_stay',
        title: '2. 飯綱高原〜チビッ子忍者村・戸隠森林植物園（忍者からくり屋敷と水芭蕉の湿原）',
        timing: 'グリーンシーズン：4月下旬〜11月上旬（初夏の水芭蕉・秋の紅葉）',
        desc: '戸隠流忍術の発祥地。「忍法資料館・からくり屋敷」や子どもから大人まで楽しめる「チビッ子忍者村」。初夏に数十万本の水芭蕉が咲き乱れる「戸隠森林植物園（八十二森のまなびや）」。飯綱高原の静寂な湖畔キャンプ＆ロッジ。',
        spots: '戸隠流忍法資料館・からくり屋敷、チビッ子忍者村、戸隠森林植物園（みどりが池・水芭蕉園）、大座法師池',
        access: '長野駅より車・バスで約30〜40分。',
        tip: '「からくり屋敷」は大人でも出口を見つけるのが難しい本格的な隠し扉や抜け道が満載で、知的好奇心を刺激される大人気スポットです。'
      },
      {
        key: 'togakushi_soba_soba_gourmet',
        title: '3. 日本三大そば「戸隠そば」＆ぼっち盛り（挽きぐるみ粉と円形ざるの伝統）',
        timing: '通年（11月上旬の戸隠そば祭り・新そばシーズンは格別）',
        desc: 'わんこそば・出雲そばと並ぶ日本三大そば「戸隠そば」。甘皮を取らずに挽く風味豊かな蕎麦。一口大に束ねて5つ盛る伝統の「ぼっち盛り（戸隠五社に由来）」。辛味大根の絞り汁や戸隠特産のクルミつゆで味わう絶品。',
        spots: 'うずら家（行列の絶えない名店）、極楽坊、そば処 よつかど、戸隠そば博物館とんくるりん（手打ち体験）',
        access: '戸隠中社周辺・そば街道。',
        tip: '戸隠そばの名店「うずら家」は早朝から記帳台が出されるため、朝一番に名前を書いてから戸隠神社を参拝するとスムーズに名店の味を堪能できます。'
      }
    ]
  },
  {
    slug: 'gifu-shirakawago-gokayama-gassho-stay',
    badge: 'SHIRAKAWAGO & GASSHO GUIDE',
    title: '【岐阜・白川郷＆五箇山】世界遺産合掌造り集落・荻町展望台＆飛騨牛・すったて汁宿 完全ガイド',
    metaDesc: '日本の原風景が残るユネスコ世界文化遺産・白川郷＆五箇山エリア完全特化！荻町城跡展望台からの合掌造りパノラマ、和田家・神田家内部見学、富山県五箇山（菅沼・相倉集落）、白川郷合掌造り民家園、名物「飛騨牛・すったて汁宿」を徹底解説。',
    heroDesc: '豪雪地帯に生まれた急勾配の茅葺き屋根「世界遺産・白川郷合掌造り集落」。荻町城跡展望台から見下ろす田園とおとぎ話のような家並み。合掌造り民家に実際に泊まる貴重な体験。名物飛騨牛の朴葉味噌焼きと素朴な郷土料理を味わう旅。',
    categoryKey: 'gifu-shirakawago-gokayama-gassho-stay',
    areaGuides: [
      {
        key: 'shirakawago_gassho_inn_stay',
        title: '1. 白川郷・荻町合掌造り集落〜和田家・荻町城跡展望台（世界文化遺産の原風景）',
        timing: '通年（春の桜・夏の青田・秋の紅葉・冬の雪景色とライトアップ）',
        desc: '大小100棟余りの合掌造りが現存する世界文化遺産「白川郷・荻町集落」。国指定重要文化財「和田家」「神田家」の養蚕に使われた屋根裏見学。集落を一望する「荻町城跡展望台（天守閣展望台）」。であい橋を渡る風の心地よさ。',
        spots: '和田家・神田家・長瀬家、荻町城跡展望台、であい橋、白川郷合掌造り民家園、明善寺郷土館',
        access: 'JR高山駅または金沢駅・富山駅より高速濃飛バス・北陸鉄道バスで約50〜85分。東海北陸道「白川郷IC」すぐ。',
        tip: '荻町城跡展望台へはシャトルバスも運行していますが、集落内の緩やかな遊歩道を歩いて登ると、少しずつ合掌造りの屋根が広がっていく絶景を体感できます。'
      },
      {
        key: 'gokayama_suganuma_ainokura_stay',
        title: '2. 富山・五箇山〜相倉合掌造り集落・菅沼集落（観光地化されない素朴な山村美）',
        timing: '通年（白川郷と合わせた世界遺産合掌集落ダブル巡り）',
        desc: '白川郷と同じく世界遺産に登録された富山県南砺市の「五箇山（相倉・菅沼集落）」。山あいに寄り添うように建つ合掌造り。五箇山和紙の手すき体験や、日本最古の民謡「こきりこ節」のささら踊り。重厚な五箇山豆腐。',
        spots: '相倉合掌造り集落（全20棟・相倉伝統産業館）、菅沼合掌造り集落（全9棟・塩硝の館）、五箇山和紙の里',
        access: '白川郷ICより車で約15〜25分。高岡駅・城端駅より加越能バス「世界遺産バス」運行。',
        tip: '相倉集落の高台にある全景撮影スポットからは、周囲の深いブナ林と段々畑に抱かれた美しい合掌集落が一枚の絵画のように収まります。'
      },
      {
        key: 'shirakawago_hida_beef_gourmet',
        title: '3. 郷土の味「飛騨牛」＆すったて汁（大豆をすりつぶした伝統の祝い汁）',
        timing: '通年（冬の雪見酒と熱々のすったて鍋は格別）',
        desc: '自家製味噌の上に極上飛騨牛とネギを乗せて炭火で焼く「飛騨牛の朴葉味噌焼き」。茹でた大豆を石臼ですりつぶし、味噌や醤油の出汁と合わせた白川郷伝統の「すったて汁」。清流庄川で獲れる岩魚（イワナ）の塩焼きや山菜天ぷら。',
        spots: '白川郷のお食事処（白水園・いろり）、道の駅白川郷、合掌造り温泉民宿',
        access: '白川郷・五箇山エリア。',
        tip: '「すったて汁」はクリーミーで大豆の甘みと旨味が凝縮されており、近年ではすったてラーメンやすったて鍋としてご当地グルメの主役に進化しています。'
      }
    ]
  },
  {
    slug: 'wakayama-kudoyama-sanada-koyasan-stay',
    badge: 'KUDOYAMA & SANADA GUIDE',
    title: '【和歌山・高野山山麓＆九度山】真田幸村蟄居の地・善名称院＆世界遺産慈尊院・富有柿宿 完全ガイド',
    metaDesc: '戦国最後の英雄・真田幸村が14年間過ごした隠れ里・和歌山九度山エリア完全特化！真田屋敷跡「善名称院（真田庵）」、九度山・真田ミュージアム、世界遺産「慈尊院・丹生官省符神社」、高野参詣道町石道、名産「九度山の富有柿宿」を徹底解説。',
    heroDesc: '関ヶ原の戦い後、真田昌幸・幸村父子が再起を期して雌伏の時を過ごした「紀州・九度山」。六文銭の旗印が掲げられる真田庵とミュージアム。弘法大師の母が眠る女人高野「慈尊院」。高野山への表参道町石道を歩き、日本一の富有柿と紀州グルメを味わう旅。',
    categoryKey: 'wakayama-kudoyama-sanada-koyasan-stay',
    areaGuides: [
      {
        key: 'kudoyama_sanada_heritage_stay',
        title: '1. 真田庵（善名称院）〜九度山・真田ミュージアム（真田昌幸・幸村父子の足跡）',
        timing: '通年（5月4・5日の真田まつり武者行列・秋の柿収穫期）',
        desc: '関ヶ原の合戦後に蟄居を命じられた真田昌幸・幸村が14年間暮らした屋敷跡「善名称院（真田庵）」。真田の抜け穴伝説が残る古墳。「九度山・真田ミュージアム」での大坂の陣シアター展示。南海高野線「九度山駅」の真田装飾。',
        spots: '真田庵（善名称院・真田昌幸の墓・真田宝物資料館）、九度山・真田ミュージアム、真田のみち（商店街）、道の駅柿の郷くどやま',
        access: '南海高野線「九度山駅」下車徒歩約10分。難波駅から急行で約50分。',
        tip: '南海電鉄「九度山駅」の駅舎内には「おむすびスタンド くど」があり、地元産のお米をかまどで炊き上げた絶品おむすびが朝食に大人気です。'
      },
      {
        key: 'jisonin_koyasan_gateway_stay',
        title: '2. 世界遺産・慈尊院〜丹生官省符神社・町石道（女人高野と高野山への表参道）',
        timing: '通年（春の桜・初夏の新緑・秋の紅葉）',
        desc: '弘法大師空海の母公が暮らしたことから「女人高野」と呼ばれる世界遺産「慈尊院（乳癌平癒・安産祈願）」。高野山開創の地主神を祀る世界遺産「丹生官省符神社」。慈尊院から高野山壇上伽藍まで続く約24kmの祈りの古道「高野参詣道 町石道」。',
        spots: '世界遺産 慈尊院（弥勒堂・多宝塔）、世界遺産 丹生官省符神社（朱塗り大鳥居）、町石道（一町ごとに立つ五輪卒塔婆）',
        access: '九度山駅より徒歩約20分。',
        tip: '慈尊院は女性の健康と子授け・安産祈願の寺院として有名で、境内には手作りの「乳房型絵馬」が無数に奉納されている全国的にも珍しい聖地です。'
      },
      {
        key: 'kudoyama_persimmon_kisyu_gourmet',
        title: '3. 日本一の味「九度山の富有柿」＆柿の葉すし（紀ノ川の陽光が育む甘み）',
        timing: '秋〜冬期（10月下旬〜12月中旬は富有柿の最盛期）',
        desc: '昼夜の寒暖差と排水の良い赤土が育む最高峰の甘柿「九度山の富有柿」。シャキッとした歯ごたえと極上の糖度。柿の葉でサバや鮭を包んだ伝統の「柿の葉すし」。紀の川の鮎料理や和歌山特産の「熊野牛」。',
        spots: '道の駅柿の郷くどやま（産直市場・ベーカリー）、柿の葉すし九和楽、紀の川沿い割烹',
        access: '九度山町・橋本市エリア。',
        tip: '秋のシーズンには、道の駅柿の郷くどやまに朝獲れの完熟富有柿がずらりと並び、全国から柿を求める人々で賑わいます。'
      }
    ]
  },
  {
    slug: 'kumamoto-amakusa-islands-sakitsu-stay',
    badge: 'AMAKUSA ISLANDS & SAKITSU GUIDE',
    title: '【熊本・天草諸島＆三角】世界遺産﨑津集落・イルカウォッチング＆天草大王・車海老宿 完全ガイド',
    metaDesc: '天草五橋で結ばれる島々と潜伏キリシタンの祈り・熊本天草エリア完全特化！世界遺産「﨑津集落（﨑津教会・海の天主堂）」、通詞島沖の「野生イルカウォッチング」、天草五橋ドライブ、三角西港、名物「天草大王・幻の車海老宿」を徹底解説。',
    heroDesc: '紺碧の有明海と八代海を跨ぐ「天草五橋」を渡り、120余の島々へ。世界遺産に登録された潜伏キリシタンの漁村「﨑津集落」とゴシック様式の教会。約200頭の野生イルカと出会うクルーズ。幻の地鶏・天草大王と踊り食い車海老を味わう楽園の旅。',
    categoryKey: 'kumamoto-amakusa-islands-sakitsu-stay',
    areaGuides: [
      {
        key: 'sakitsu_church_heritage_stay',
        title: '1. 世界遺産・﨑津集落〜﨑津教会・下田温泉（漁村に溶け込む畳敷きのゴシック教会）',
        timing: '通年（東シナ海に沈む「下田温泉の夕陽」は日本の夕陽百選）',
        desc: '世界文化遺産「長崎と天草地方の潜伏キリシタン関連遺産」の構成資産「﨑津集落」。穏やかな羊角湾に面して建つ「﨑津教会（海の天主堂・堂内は珍しい畳敷き）」。開湯700年、白鷺が傷を癒やしたと伝わる国民保養温泉地「下田温泉」。',
        spots: '世界遺産 﨑津集落（﨑津教会・﨑津資料館みなと屋・トウヤ）、大江教会、下田温泉（足湯・夕陽展望台）',
        access: '天草空港より車で約40分。熊本駅より特急バス「あまくさ号」運行。',
        tip: '﨑津集落の路地「トウヤ（海へと続く細い小径）」を歩くと、民家の間から穏やかな海が顔を覗かせる独特の漁村風景に出会えます。'
      },
      {
        key: 'amakusa_dolphin_resort_stay',
        title: '2. 通詞島沖イルカウォッチング〜天草五橋ドライブ（遭遇率98%の野生イルカ）',
        timing: '通年（一年中約200頭のミナミハンドウイルカが定住）',
        desc: '天草下島北端の通詞島（つうじしま）沖に定住する野生のミナミハンドウイルカ。船のすぐ横を群れで泳ぎジャンプする姿を間近で観察。九州本土と天草諸島を結ぶ天草五橋（パールライン）の絶景シーサイドドライブ。',
        spots: '天草イルカウォッチング（五和町二江港出航）、天草五橋（1号橋〜5号橋）、松島温泉、リゾラテラス天草',
        access: '熊本市内より車で約90分（三角大矢野道路経由）。',
        tip: '天草のイルカウォッチングは外洋ではなく波が穏やかな海域で行われるため、船酔いが心配な方や小さなお子様連れでも安心して楽しめます。'
      },
      {
        key: 'amakusa_daio_kurumaebi_stay',
        title: '3. 幻の巨大地鶏「天草大王」＆極上「天草車海老」（養殖発祥の地が誇る海の幸）',
        timing: '通年（冬の車海老・春〜夏の生ウニ・秋冬の伊勢海老）',
        desc: '一度絶滅したものの復元された日本最大級の幻の地鶏「天草大王」。弾力ある歯ごたえとコク深い肉汁。車海老養殖発祥の地・天草で味わうピチピチ跳ねる「活き車海老の踊り食い」や塩焼き。濃厚な天草生ウニ丼。',
        spots: '天草大王料理指定店、車海老料理旅館、道の駅有明（リップルランド・巨大タコモニュメント）',
        access: '天草諸島全域。',
        tip: '天草の車海老は、殻を剥いた瞬間に甘みが舌の上に広がり、頭の味噌まで香ばしく焼き上げて丸ごと食べられるのが贅沢です。'
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
  keywords: ["${config.slug}", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
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

export default function MicroTouristHubPage() {
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

for (const cfg of microWave19Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated micro tourist hub page: /${cfg.slug}`);
}
