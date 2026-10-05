const fs = require('fs');
const path = require('path');

const microWave23Configs = [
  {
    slug: 'akita-oga-peninsula-namahage-nyudozaki-stay',
    badge: 'OGA & NAMAHAGE GUIDE',
    title: '【秋田・男鹿半島＆なまはげ・入道崎】北緯40度白黒灯台・名物石焼料理宿 完全ガイド',
    metaDesc: 'ユネスコ無形文化遺産なまはげの郷・秋田男鹿半島エリア完全特化！入道崎（北緯40度白黒モニュメント）、なまはげ館・男鹿真山伝承館、ゴジラ岩、男鹿温泉郷の伝統「豪快石焼料理宿」を徹底解説。',
    heroDesc: '荒波の日本海に突き出た信仰と伝説の半島「秋田・男鹿半島」。北緯40度線上にそびえる白黒縞模様の「入道崎灯台」。大晦日の夜に雄叫びを上げるユネスコ無形文化遺産「なまはげ」。真っ赤に熱した小石を桶の出汁に放り込む男鹿伝統の「石焼料理」を味わう旅。',
    categoryKey: 'akita-oga-peninsula-namahage-nyudozaki-stay',
    areaGuides: [
      {
        key: 'oga_onsen_ishiyaki_stay',
        title: '1. 男鹿温泉郷〜名物「石焼料理」・潮瀬崎ゴジラ岩（真っ赤な溶岩が生む豪快漁師飯）',
        timing: '通年（冬のハタハタ・夏のウニ・夕暮れの日本海）',
        desc: '約千年の歴史を誇る「男鹿温泉郷（ナトリウム塩化物泉）」。木桶に味噌ベースの出汁と新鮮な魚介を入れ、炭火で約800℃に熱した男鹿特産の溶結凝灰岩を一気に放り込む豪快な「石焼料理」。潮瀬崎の奇岩「ゴジラ岩」の夕陽シルエット。',
        spots: '男鹿温泉郷、潮瀬崎（ゴジラ岩・ガメラ岩）、男鹿水族館GAO（ホッキョクグマ）、寒風山回転展望台',
        access: 'JR男鹿線「男鹿駅」より路線バスまたは予約制乗り合いタクシーで約30〜40分。秋田市内より車約60分。',
        tip: '石焼料理は小石を入れた瞬間に激しい蒸気とグツグツという轟音が立ち上り、目の前で魚介が一瞬で煮上がる大迫力の演出が楽しめます。'
      },
      {
        key: 'nyudozaki_cape_view_stay',
        title: '2. 入道崎〜北緯40度モニュメント・白黒灯台（日本海の荒波と夕陽の大パノラマ）',
        timing: '通年（日本の夕陽百選・初夏の緑の芝生台地）',
        desc: '男鹿半島の最北端に位置する「入道崎」。緑の芝生台地の向こうに広がる青い日本海。日本の灯台50選に選ばれた白黒縞模様の「入道崎灯台（登れる灯台）」。北緯40度線上に並ぶ安山岩のモニュメント。海鮮食堂で味わう獲れたてウニ・サザエ丼。',
        spots: '入道崎灯台（灯台資料展示室）、北緯40度モニュメント、入道崎海底透視船（グラスボート）、畠泉海岸',
        access: '男鹿温泉郷より車約15分。',
        tip: '入道崎灯台は全国に16基しかない「登れる灯台」のひとつで、上部デッキからは男鹿半島の海岸線と日本海水平線の360度パノラマが広がります。'
      },
      {
        key: 'namahage_shizan_heritage_stay',
        title: '3. なまはげ館＆男鹿真山伝承館〜真山神社（泣く子はいねが！ユネスコ無形文化遺産）',
        timing: '通年（大晦日のなまはげ行事・2月のなまはげ柴灯まつり）',
        desc: '神仏習合の霊山・真山（しんざん）の麓に佇む「なまはげ館」。男鹿市内各地で実際に使われた150枚以上の個性豊かななまはげ面が並ぶ圧巻の展示。隣接する「男鹿真山伝承館」での本物のなまはげの実演問答体験。古社・真山神社の杉木立。',
        spots: 'なまはげ館、男鹿真山伝承館、真山神社、里暮らし体験塾',
        access: '男鹿駅より車約20分。',
        tip: '男鹿真山伝承館の実演では、曲がり家の囲炉裏端になまはげが荒々しく乱入し、家長との緊迫感あふれるユーモラスな問答を間近で体感できます。'
      }
    ]
  },
  {
    slug: 'nagano-kiso-fukushima-nezamenotoko-stay',
    badge: 'KISO FUKUSHIMA & ONTAKE GUIDE',
    title: '【長野・木曽福島＆寝覚の床・御嶽山】中山道関所宿場町・木曽そば＆五平餅宿 完全ガイド',
    metaDesc: '中山道木曽路の中心・木曽福島＆寝覚の床エリア完全特化！日本四大関所「木曽福島関所」、浦島太郎伝説の名勝「寝覚の床」、霊峰御嶽山、木曽川の清流と名物「木曽手打ちそば・五平餅・朴葉巻き宿」を徹底解説。',
    heroDesc: '島崎藤村の『夜明け前』の舞台、深い木曽谷の歴史薫る宿場町「木曽福島」。中山道を取り締まった「福島関所」と崖家造りの町並み。木曽川のエメラルドグリーンの激流が花崗岩を削り出した奇勝「寝覚の床」。冷涼な木曽谷の天然温泉と信州手打ちそばの旅。',
    categoryKey: 'nagano-kiso-fukushima-nezamenotoko-stay',
    areaGuides: [
      {
        key: 'kiso_fukushima_post_town_stay',
        title: '1. 木曽福島宿場町〜福島関所・上の段通り（崖家造りと木曽川の清流）',
        timing: '通年（新緑の5〜6月・秋の紅葉・夏の避暑）',
        desc: '中山道六十九次のほぼ中間に位置する交通と政治の要衝「木曽福島」。箱根・碓氷・新居と並ぶ日本四大関所「木曽福島関所跡」。木曽川の断崖にせり出すように建てられた独特の「崖家造り（がけやつくり）」。上の段通りの水路と格子戸の町並み。',
        spots: '木曽福島関所資料館、上の段通り、山村代官屋敷、興禅寺（木曽義仲公の墓・東洋一の枯山水庭園）、木曽川親水公園足湯',
        access: 'JR中央本線（特急しなの）「木曽福島駅」下車すぐ。中央道「伊那IC」より権兵衛トンネル経由約30分。',
        tip: '木曽福島駅前の観光案内所では、宿場町散策用の絵図（マップ）が手に入り、歴史解説を聞きながら上の段通りの名水巡りが楽しめます。'
      },
      {
        key: 'nezamenotoko_agetsu_nature_stay',
        title: '2. 寝覚の床〜臨川寺（木曽川のエメラルド激流が削り出した国の名勝奇岩）',
        timing: '通年（秋の木曽谷紅葉・新緑の渓谷美）',
        desc: '竜宮城から戻った浦島太郎が玉手箱を開けた場所と伝わる国の名勝「寝覚の床（ねざめのとこ）」。木曽川の激流が巨大な白い花崗岩を square 状に削り出した自然の彫刻美。中央の岩礁に建つ「浦島堂」。崖の上に建つ臨川寺からの見下ろし絶景。',
        spots: '寝覚の床（浦島堂・奇岩群）、臨川寺（弁才天・宝物館）、ねざめ亭、赤沢自然休養林（森林鉄道）',
        access: 'JR中央本線「上松駅」より車・バス約5分、または木曽福島駅より車約15分。',
        tip: '寝覚の床の巨岩群の上を歩いて浦島堂へ渡るルートは岩肌が滑りやすいため、スニーカーなど歩きやすい靴での散策が必須です。'
      },
      {
        key: 'ontake_kiso_soba_inn_stay',
        title: '3. 木曽名物「手打ちそば」＆五平餅・朴葉巻き（冷涼な木曽谷の郷土の味）',
        timing: '通年（秋の新そば・初夏の朴葉巻き・冬のすんきそば）',
        desc: '昼夜の寒暖差が大きい開田高原のそば粉と清らかな湧水で打つコシの強い「木曽そば」。クルミと胡麻の甘辛タレをたっぷり塗って香ばしく焼き上げたわらじ型の「五平餅」。塩を使わずに乳酸菌発酵させた冬限定の健康食「すんき漬け・すんきそば」。',
        spots: 'くるまや本店（木曽そば名店）、道の駅木曽福島、開田高原アイスクリーム工房、木曽谷の老舗料理旅館',
        access: '木曽町・上松町・開田高原。',
        tip: '「すんきそば」は長野県木曽地方でしか作られない無塩乳酸発酵の赤かぶ菜が入った郷土そばで、独特の爽やかな酸味が温かい出汁と絶妙に調和します。'
      }
    ]
  },
  {
    slug: 'toyama-himi-amaharashi-tateyama-stay',
    badge: 'HIMI & AMAHARASHI GUIDE',
    title: '【富山・氷見＆雨晴海岸・立山連峰】海越しに望む3000m立山連峰・氷見寒ブリ宿 完全ガイド',
    metaDesc: '世界屈指の絶景・海越しにそびえる立山連峰と海の幸王国・富山氷見エリア完全特化！義経伝説の雨晴海岸（女岩）、氷見漁港直送「氷見寒ブリ・白えび」、ひみ番屋街、氷見温泉郷のオーシャンビュー美肌宿を徹底解説。',
    heroDesc: '富山湾の青い海の向こうに、標高3,000m級の北アルプス立山連峰が白銀に輝く奇跡のパノラマ「雨晴海岸」。冬の日本海の王者「氷見寒ブリ」の極上刺身とブリしゃぶ。潮風を感じる氷見温泉郷のナトリウム塩化物泉。富山湾のキトキトな美味に酔いしれる旅。',
    categoryKey: 'toyama-himi-amaharashi-tateyama-stay',
    areaGuides: [
      {
        key: 'himi_winter_yellowtail_inn_stay',
        title: '1. 氷見漁港〜氷見寒ブリ・氷見うどん（富山湾の冬の王者を味わい尽くす）',
        timing: '冬期（11月下旬〜2月の「ひみ寒ぶり宣言」期間は極上）',
        desc: '日本屈指の好漁場・富山湾の定置網で水揚げされる「ひみ寒ぶり」。丸々と太り、脂が乗りに乗った大トロの刺身、熱々のブリしゃぶ、旨味が染み渡るブリ大根。手延べならではの強いコシと滑らかな喉越しが特徴の「氷見うどん」。',
        spots: 'ひみ番屋街（氷見漁港場外市場）、氷見漁港魚市場食堂（朝獲れ海鮮丼）、氷見温泉郷総湯、氷見牛専門店',
        access: 'JR氷見線「氷見駅」よりバス約5分。能越自動車道「氷見IC」より約8分。',
        tip: '「ひみ寒ぶり宣言」が出された期間の寒ブリは、重さや形、脂の乗りなど厳しい基準をクリアした証明書が付けられ、日本一と称される極上の旨味を誇ります。'
      },
      {
        key: 'amaharashi_tateyama_view_stay',
        title: '2. 雨晴海岸〜女岩・義経岩（海越しに3000m立山連峰を望む奇跡のパノラマ）',
        timing: '通年（特に空気が澄んで立山連峰が白銀に染まる12月〜2月の早朝は神々しい美しさ）',
        desc: '白い砂浜と松林が続く「日本の渚百選・雨晴（あまはらし）海岸」。富山湾に浮かぶ小島「女岩」の背後に、標高3,000m級の立山連峰が壁のようにそびえ立つ世界でも数ヶ所しかない絶景。源義経がにわか雨の晴れるのを待った「義経岩」。',
        spots: '道の駅雨晴（展望デッキ・カフェ）、雨晴海岸（女岩・義経岩）、JR氷見線（海沿いを走るローカル列車）',
        access: 'JR氷見線「雨晴駅」下車徒歩約5分。能越道「高岡北IC」より車約15分。',
        tip: '道の駅雨晴の2階・3階展望デッキからは、JR氷見線のレトロな列車が海岸線と立山連峰をバックに駆け抜ける絶好の撮影スポットとなっています。'
      },
      {
        key: 'himi_banyagai_gourmet_stay',
        title: '3. 氷見温泉郷〜富山湾一望の塩湯＆白えび・氷見牛（潮風薫る美肌の湯）',
        timing: '通年（春のシロエビ漁解禁・夏の岩ガキ・秋ののどぐろ）',
        desc: '約1500万年前の化石海水分が湧き出る「氷見温泉郷」。富山湾の水平線と朝日を望む露天風呂。富山湾の宝石と呼ばれる「白えび」の刺身や天ぷら。中山間地で育まれた上質な肉質のブランド黒毛和牛「氷見牛」。',
        spots: '氷見温泉郷（海辺の露天風呂宿）、潮風通り（藤子不二雄Aまんがロード）、光禅寺',
        access: '氷見市内・海岸線沿い。',
        tip: '氷見温泉の源泉は塩分を多く含むため保温効果が非常に高く、湯冷めしにくいため「熱の湯」「子宝の湯」として親しまれています。'
      }
    ]
  },
  {
    slug: 'kochi-shimanto-river-chinkabashi-ashizuri-stay',
    badge: 'SHIMANTO & ASHIZURI GUIDE',
    title: '【高知・四万十川＆沈下橋・足摺岬】日本最後の清流カヌー・天然うなぎ＆カツオ宿 完全ガイド',
    metaDesc: '最後の清流と四国最南端・高知四万十＆足摺エリア完全特化！欄干のない「佐田の沈下橋・岩間沈下橋」、四万十川カヌー・屋形船遊覧、足摺岬灯台・金剛福寺、名物「天然鮎・四万十うなぎ・初鰹タタキ宿」を徹底解説。',
    heroDesc: '大自然の原風景がそのまま息づく日本最後の清流「四万十川」。増水時に川底に沈むように設計された欄干のない「沈下橋」。清流を滑るように進むカヌーや帆掛け舟。四国最南端・足摺岬の断崖絶壁と太平洋の大海原。極上の天然うなぎとカツオの藁焼きを味わう旅。',
    categoryKey: 'kochi-shimanto-river-chinkabashi-ashizuri-stay',
    areaGuides: [
      {
        key: 'shimanto_river_chinkabashi_inn',
        title: '1. 四万十川沈下橋めぐり〜佐田沈下橋・屋形船（日本最後の清流と原風景）',
        timing: '通年（4月〜10月のカヌー・SUP・川遊び・新緑）',
        desc: '本流に大規模なダムがない「日本最後の清流 四万十川（全長196km）」。最下流に位置し最も長く親しまれている「佐田の沈下橋（今成橋）」。ポスターでおなじみの「岩間沈下橋」。エンジン付きの伝統屋形船や、風を受けて進む帆掛け舟での遊覧。',
        spots: '佐田沈下橋、三里沈下橋、岩間沈下橋、四万十の碧（屋形船遊覧）、四万十カヌーとキャンプの里 かわらっこ',
        access: '土佐くろしお鉄道「中村駅」より車約15分。高知道「四万十町中央IC」より約60分。',
        tip: '佐田の沈下橋はレンタサイクルで渡ることができ、欄干のない橋の上からエメラルドグリーンの川面を真下に見下ろすスリルと開放感が味わえます。'
      },
      {
        key: 'ashizurimisaki_ocean_onsen_stay',
        title: '2. 足摺岬〜あしずり温泉郷（四国最南端の白亜の灯台と弘法大師の霊場）',
        timing: '通年（年間を通じて温暖・冬の椿まつり・満天の星空）',
        desc: '黒潮が直接打ち寄せる四国最南端の岬「足摺岬（あしずりみさき）」。高さ約80mの断崖絶壁に立つ白亜の「足摺岬灯台」。四国八十八ヶ所第38番札所「金剛福寺」。弘法大師ゆかりの足摺七不思議。雄大な太平洋の水平線アーチを望む温泉露天風呂。',
        spots: '足摺岬展望台・灯台、金剛福寺、白山洞門（日本最大級の花崗岩洞門）、あしずり温泉郷、足摺海底館',
        access: '中村駅より高知西南交通バス「足摺岬行」で約100分。',
        tip: '足摺岬展望台からは、視界270度に広がる水平線が丸くカーブして見え、地球が丸いことを肉眼で実感できる壮大なスケールが体験できます。'
      },
      {
        key: 'shimanto_unagi_katsuo_stay',
        title: '3. 四万十名物「天然うなぎ」＆カツオの藁焼きタタキ（大自然が育む至高の美味）',
        timing: '通年（うなぎ漁期：4月〜11月・初夏と秋の戻り鰹）',
        desc: '清流四万十川で獲れる希少な「四万十天然うなぎ」。身が引き締まり、天然ならではの爽やかな川魚の香りと上質な脂の旨味。四万十川の青のりや川エビの唐揚げ。土佐名物・豪快な火柱で一気に焼き上げるカツオの塩タタキ。',
        spots: '四万十屋（うなぎ専門店）、味劇場 ちか（郷土料理居酒屋）、中村駅周辺の老舗料理旅館',
        access: '四万十市中村エリア・四万十川沿い。',
        tip: '「四万十屋」では四万十川のせせらぎを眺めながら、炭火で香ばしく焼き上げた天然うな重を特製の秘伝タレで贅沢に堪能できます。'
      }
    ]
  },
  {
    slug: 'kagoshima-yakushima-shiratani-jomon-sugi-stay',
    badge: 'YAKUSHIMA & WORLD HERITAGE GUIDE',
    title: '【鹿児島・屋久島＆白谷雲水峡・縄文杉】世界自然遺産・苔むす森トレッキング＆首折れ鯖宿 完全ガイド',
    metaDesc: '洋上のアルプス・世界自然遺産屋久島エリア完全特化！太古の巨木「縄文杉トレッキング」、映画の舞台「白谷雲水峡（苔むす森）」、大川の滝、名物「首折れ鯖・トビウオ料理・屋久島温泉リゾート」を徹底解説。',
    heroDesc: '樹齢数千年の巨木が呼吸する世界自然遺産の島「屋久島」。生命の神秘をたたえる「縄文杉」への巡礼。どこまでも深い緑の絨毯が広がる「白谷雲水峡・苔むす森」。屋久島近海で獲れる新鮮な「首折れ鯖」のお造りとトビウオのから揚げ。悠久の時を体感する大人の大自然旅。',
    categoryKey: 'kagoshima-yakushima-shiratani-jomon-sugi-stay',
    areaGuides: [
      {
        key: 'yakushima_luxury_resort_stay',
        title: '1. 世界自然遺産・屋久島ネイチャーステイ〜尾之間温泉・平内海中温泉',
        timing: '通年（春〜秋の登山シーズン・初夏のウミガメ産卵）',
        desc: '日本で初めて世界自然遺産に登録された屋久島。九州最高峰・宮之浦岳（1,936m）をはじめとする洋上のアルプス。海岸沿いに湧き出る源泉かけ流しの「尾之間温泉」や、干潮時のみ入浴できる波打ち際の「平内海中温泉」。大自然に抱かれたリゾートホテル。',
        spots: '大川（おおこ）の滝（日本の滝百選）、千尋（せんぴろ）の滝、平内海中温泉、尾之間温泉、屋久島環境文化村センター',
        access: '鹿児島空港より飛行機約40分（屋久島空港）、または鹿児島本港より高速船トッピーで約110〜150分。',
        tip: '平内海中温泉は1日2回の干潮前後の約2時間だけ海の中から現れる野趣あふれる天然混浴露天風呂で、満天の星空の下の入浴は格別です（水着不可・バスタオル巻き可）。'
      },
      {
        key: 'shiratani_unsuikyo_trekking_stay',
        title: '2. 白谷雲水峡〜苔むす森・太鼓岩（スタジオジブリ映画の舞台となった原生林）',
        timing: '通年（雨上がりの霧に包まれた苔の森は息を呑む美しさ）',
        desc: '標高600〜1,050mに広がるヤクスギ原生林「白谷雲水峡」。花崗岩の巨石と清流、数百種類のコケが岩や倒木を覆い尽くす「苔むす森（もののけの森）」。巨岩の頂・太鼓岩から見下ろす宮之浦岳と広大な屋久杉の森の大パノラマ。',
        spots: '白谷雲水峡（苔むす森・太鼓岩・弥生杉・飛流おとし）、宮之浦港、屋久神社',
        access: '宮之浦港より路線バスで約30〜35分。',
        tip: '白谷雲水峡は半日コース（約3〜4時間）で気軽に太鼓岩まで往復でき、縄文杉トレッキングよりも体力的なハードルが低く初心者にもおすすめです。'
      },
      {
        key: 'yakushima_mackerel_flyingfish_stay',
        title: '3. 屋久島名物「首折れ鯖」＆トビウオひつまぶし（黒潮が育む驚きの鮮度）',
        timing: '通年（首折れ鯖：旬は春〜秋・トビウオ料理は通年）',
        desc: '屋久島近海の一本釣りで獲れたゴマサバを、船上で首を折って即座に血抜き・氷締めする「首折れ鯖（くびおれさば）」。生臭さが一切なく、ブリブリとした弾力と上品な脂の甘み。羽を広げた姿揚げが名物の「トビウオのから揚げ」。',
        spots: '潮騒（宮之浦の人気店）、いその香り（安房）、屋久島ヴィータキッチン、安房港周辺の居酒屋',
        access: '安房港・宮之浦港周辺。',
        tip: '首折れ鯖のお造りは、屋久島特有の甘口醤油とすりおろし生姜でいただくのが地元流で、刺身の概念が変わるほどの驚異的な歯ごたえが楽しめます。'
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
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-emerald-950 to-teal-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ${config.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            ${config.title}
          </h1>
          <p className="text-xs md:text-sm text-emerald-100/90 leading-relaxed">
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
                  <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-teal-700 to-emerald-800 hover:from-teal-600 hover:to-emerald-700 rounded-xl shadow transition"
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

for (const cfg of microWave23Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated micro tourist hub page: /${cfg.slug}`);
}
