const fs = require('fs');
const path = require('path');

const historyConfigs = [
  {
    slug: 'japan-national-treasure-castle-heritage-stay',
    badge: 'NATIONAL TREASURE CASTLE GUIDE',
    title: '【国宝五城＆現存十二天守を巡る宿】姫路城・松本城・犬山城・彦根城・松江城 完全ガイド',
    metaDesc: '江戸時代の天守がそのまま現存する奇跡の城郭めぐり完全特化！世界遺産「白鷺城・姫路城」、漆黒の国宝「松本城」、木曽川にそびえる最古の天守「犬山城」、琵琶湖畔の「彦根城」、宍道湖畔の「千鳥城・松江城」と城郭ビュー名宿を徹底解説。',
    heroDesc: '幾多の戦火や天災を乗り越え、江戸の威容を今に伝える「現存十二天守」と「国宝五城」。白漆喰総塗籠の白鷺城・姫路城、北アルプスを背負う漆黒の松本城。天守のライトアップを客室や展望ラウンジから愛でる歴史浪漫の旅へ。',
    categoryKey: 'japan-national-treasure-castle-heritage-stay',
    areaGuides: [
      {
        key: 'himeji_matsumoto_castle_stay',
        title: '1. 世界遺産・姫路城＆国宝・松本城（白鷺と烏の対比！白漆喰と黒漆塗り天守）',
        timing: '通年（春の城郭桜まつり・秋の好古園紅葉ライトアップ）',
        desc: '日本初の世界文化遺産に登録された「姫路城（白鷺城）」。五層六階の大天守と三つの小天守が渡櫓で結ばれた連立式天守。北アルプスを背景に漆黒の姿を堀の水面に映す「松本城（烏城）」。城郭を望む高層ホテルでの滞在。',
        spots: '姫路城（大天守・百間廊下・お菊井戸）、好古園（日本庭園）、国宝松本城（埋橋・月見櫓）、松本縄手通り・中町通り',
        access: 'JR山陽新幹線「姫路駅」徒歩約15分、JR篠ノ井線「松本駅」徒歩約15分。',
        tip: '松本城には戦国期の大天守に加えて平和な江戸初期に増築された開放的な「月見櫓」があり、武骨と優美が同居する唯一無二の構造です。'
      },
      {
        key: 'inuyama_hikone_castle_stay',
        title: '2. 国宝・犬山城＆国宝・彦根城（木曽川の断崖と琵琶湖を望む名城）',
        timing: '通年（犬山城下町の食べ歩き・彦根城玄宮園の虫聞き）',
        desc: '木曽川沿いの小高い山に建つ日本最古の木造天守「犬山城（白帝城）」。最上階の廻縁から望む木曽川と濃尾平野の大パノラマ。井伊家三十五万石の居城「彦根城」と、天守を借景にした大名庭園「玄宮園」。',
        spots: '国宝犬山城（天守・望楼・犬山城下町）、有楽苑（国宝茶室如庵）、国宝彦根城（天守・天秤櫓・玄宮園）、夢京橋キャッスルロード',
        access: '名鉄「犬山駅」徒歩約15分、JR東海道本線「彦根駅」徒歩約15分。',
        tip: '犬山城下町では、国の登録有形文化財の町家をリノベーションしたカフェや食べ歩きスイーツ店が並び、着物姿での散策に最適です。'
      },
      {
        key: 'matsue_maruoka_heritage_castle_stay',
        title: '3. 国宝・松江城＆現存天守群（堀川めぐりの遊覧船と宍道湖の夕陽）',
        timing: '通年（春の桜とお城まつり・冬のこたつ遊覧船）',
        desc: '千鳥が羽を広げたような千鳥破風が美しい「松江城（千鳥城）」。お城を囲む堀を小舟でめぐる「ぐるっと松江堀川めぐり」。現存最古級の野面積み石垣を持つ福井の「丸岡城」。松江しんじ湖温泉や芦原温泉での至福の湯浴み。',
        spots: '国宝松江城（天守閣・祈祷札）、ぐるっと松江堀川めぐり、塩見縄手（武家屋敷・小泉八雲旧居）、丸岡城（日本最古級天守）',
        access: 'JR山陰本線「松江駅」よりバス約10分、JR北陸新幹線「芦原温泉駅」よりバス。',
        tip: '松江城の堀川遊覧船は、低い橋をくぐる際に屋根が自動で下がるアトラクション性があり、冬は船内に「豆炭こたつ」が設置されます。'
      }
    ]
  },
  {
    slug: 'japan-post-town-nakasendo-edo-highway-stay',
    badge: 'POST TOWN & NAKASENDO GUIDE',
    title: '【中山道・木曽路の宿場町＆旧街道宿】妻籠宿・馬籠宿・奈良井宿・大内宿 完全ガイド',
    metaDesc: '江戸時代の街道情緒にタイムスリップ！中山道木曽路の「妻籠宿」「馬籠宿」「奈良井宿（千軒宿）」、福島会津の茅葺き宿場「大内宿」、歴史ある本陣・脇本陣、出桁造りの古民家宿・木曽ひのき風呂を徹底解説。',
    heroDesc: '石畳の坂道に並ぶ格子戸の旅籠、軒先に吊るされた行灯の揺らめく灯り。日本で最初に伝統的建造物群保存地区に選定された「妻籠宿」、島崎藤村の故郷「馬籠宿」、日本最長の宿場「奈良井宿」。江戸の旅人気分で浸かる木曽路の旅へ。',
    categoryKey: 'japan-post-town-nakasendo-edo-highway-stay',
    areaGuides: [
      {
        key: 'tsumago_magome_kiso_stay',
        title: '1. 木曽路・妻籠宿＆馬籠宿（電線も車もない本物の江戸の町並みと石畳坂）',
        timing: '通年（秋の紅葉シーズン・冬の雪景色と囲炉裏）',
        desc: '中山道42番目の宿場「妻籠宿（つまごじゅく）」。「売らない・貸さない・壊さない」の三原則で守られた江戸時代の景観。石畳の急坂に水車や茶屋が並ぶ「馬籠宿（まごめじゅく）」。木曽名物の五平餅や朴葉味噌。',
        spots: '妻籠宿本陣・脇本陣奥谷（重要文化財・斜光の光芒）、馬籠宿（藤村記念館・水車小屋・見晴らし台）、馬籠峠（ハイキング道）',
        access: 'JR中央本線「南木曽駅」または「中津川駅」より路線バス約20分。',
        tip: '妻籠宿の「脇本陣奥谷」では、冬期（11月〜2月）の晴れた正午頃、格子窓から囲炉裏の煙の中に差し込む一条の斜光（光芒）が息を呑む美しさです。'
      },
      {
        key: 'naraijuku_kiso_timber_stay',
        title: '2. 木曽十一宿・奈良井宿〜木曽福島（「奈良井千軒」と称された日本最長の宿場町）',
        timing: '通年（初夏の新緑・秋の木曽漆器まつり）',
        desc: '難所・鳥居峠の麓に位置し、約1kmにわたって出桁造り（いでげたづくり）の町家が連なる「奈良井宿」。木曽漆器や曲げわっぱの木工文化。築200年の造り酒屋を再生したラグジュアリーホテル「BYAKU Narai」の極上ステイ。',
        spots: '奈良井宿（木曽の大橋・鎮神社・手塚家住宅）、福島関所跡、山村代官屋敷、木曽平沢（漆器の町）',
        access: 'JR中央本線「奈良井駅」下車徒歩約3分。長野道「塩尻IC」より約35分。',
        tip: '奈良井宿の「木曽の大橋」は、樹齢数百年の木曽ひのきで造られた総檜造りの太鼓橋で、橋脚を持たない木造橋として日本屈指の美しさを誇ります。'
      },
      {
        key: 'ouchijuku_aizu_thatched_stay',
        title: '3. 福島会津・大内宿〜湯野上温泉（茅葺き屋根が整然と並ぶ下野街道の宿場）',
        timing: '通年（2月の大内宿雪まつり・秋の新そばシーズン）',
        desc: '会津若松と日光今市を結ぶ下野街道の宿場町「大内宿」。約30軒の茅葺き民家が整然と並ぶ圧巻の景観。見晴台から見下ろす宿場全景。日本唯一の茅葺き屋根の駅舎「湯野上温泉駅」と、渓谷美の温泉旅館。',
        spots: '大内宿（見晴台・大内宿町並み展示館・三澤屋）、湯野上温泉駅（足湯・茅葺き駅舎）、塔のへつり',
        access: '会津鉄道「湯野上温泉駅」より車・周遊バス「猿游号」で約15分。',
        tip: '大内宿名物の「高遠そば（ねぎそば）」は、箸の代わりに丸ごと一本の生の長ネギを使ってそばをすくい、薬味としてネギをかじりながら食べる伝統の味です。'
      }
    ]
  },
  {
    slug: 'japan-sacred-pilgrimage-koyasan-shukubo-stay',
    badge: 'SACRED PILGRIMAGE & SHUKUBO GUIDE',
    title: '【世界遺産・霊場巡り＆宿坊体験宿】高野山宿坊・熊野古道・比叡山延暦寺 完全ガイド',
    metaDesc: '千年の祈りと静寂に包まれる聖地巡礼完全特化！弘法大師空海が開いた天空の宗教都市「高野山宿坊（精進料理・阿字観・朝のお勤め）」、神々が宿る「熊野三山＆熊野古道歩き」、天台宗総本山「比叡山延暦寺 延暦寺会館」を徹底解説。',
    heroDesc: '樹齢数百年の杉木立に霧が立ち込める神聖な祈りの道「世界遺産・霊場」。高野山の宿坊で味わう五味五色の美しい精進料理と朝の勤行、写経体験。熊野古道の中辺路を歩き、名湯・湯の峰温泉のつぼ湯に浸かる心の浄化の旅へ。',
    categoryKey: 'japan-sacred-pilgrimage-koyasan-shukubo-stay',
    areaGuides: [
      {
        key: 'koyasan_shukubo_temple_stay',
        title: '1. 高野山〜奥之院・壇上伽藍（弘法大師が瞑想を続ける天空の仏教都市）',
        timing: '通年（秋の紅葉回廊・春の桜・冬の静寂の雪景色）',
        desc: '標高約800mの山上に開かれた真言密教の聖地「高野山」。約20万基の墓石や供養塔が杉木立の中に並ぶ「奥之院」。根本大塔がそびえる「壇上伽藍」。数百年続く名門宿坊に宿泊し、僧侶による朝のお勤め（勤行）や阿字観瞑想。',
        spots: '高野山奥之院（御廟・燈籠堂・杉木立）、壇上伽藍（根本大塔・金堂）、金剛峯寺（蟠龍庭）、大門',
        access: '南海高野線「極楽橋駅」より高野山ケーブルで約5分、南海りんかんバスで各寺院へ。',
        tip: '奥之院の早朝散策（朝6時頃）は参拝客がほとんどおらず、鳥のさえずりと杉の香りに包まれる最も神聖な時間を体験できます。'
      },
      {
        key: 'kumano_kodo_yunomine_stay',
        title: '2. 熊野三山〜熊野古道・湯の峰温泉（神々が鎮座する蘇りの聖地と世界遺産の温泉）',
        timing: '通年（春〜秋のトレッキングシーズン・中辺路歩き）',
        desc: '熊野本宮大社・熊野速玉大社・熊野那智大社の「熊野三山」を結ぶ巡礼道「熊野古道」。開湯1800年、参詣者が身を清めた日本最古の共同浴場「湯の峰温泉 つぼ湯（世界遺産）」。川底から温泉が湧く川湯温泉の仙人風呂。',
        spots: '熊野本宮大社（大斎原・大鳥居）、熊野古道中辺路（発心門王子〜本宮大社）、湯の峰温泉（つぼ湯・湯筒）、川湯温泉',
        access: 'JR紀勢本線「新宮駅」または「紀伊田辺駅」より路線バス運行。',
        tip: '湯の峰温泉の「湯筒」では、90度の源泉に生卵や野菜を浸して、美味しい温泉たまごを自分で茹でて食べることができます。'
      },
      {
        key: 'hieizan_enryakuji_lake_stay',
        title: '3. 比叡山延暦寺〜延暦寺会館（千二百年間灯り続ける不滅の法灯と琵琶湖ビュー）',
        timing: '通年（東塔・西塔・横川の三塔巡礼）',
        desc: '伝教大師最澄が開創した天台宗の総本山「比叡山延暦寺」。国宝・根本中堂に1200年間燃え続ける「不滅の法灯」。延暦寺境内に位置する宿坊施設「延暦寺会館」。客室やレストランから見下ろす琵琶湖の日の出パノラマ。',
        spots: '比叡山延暦寺（東塔根本中堂・西塔釈迦堂・横川中堂）、比叡山ドライブウェイ、ガーデンミュージアム比叡',
        access: '比叡山坂本ケーブル「ケーブル延暦寺駅」徒歩約8分。京都駅より比叡山ドライブバス運行。',
        tip: '延暦寺会館に宿泊すると、一般拝観時間外の早朝に根本中堂で行われる「朝のお勤め（国宝堂内での読経と法話）」に特別参加できます。'
      }
    ]
  },
  {
    slug: 'japan-bakumatsu-ishin-samurai-history-stay',
    badge: 'BAKUMATSU & SAMURAI GUIDE',
    title: '【幕末維新の歴史浪漫宿】萩・会津若松・高知・薩摩・龍馬ゆかりの宿 完全ガイド',
    metaDesc: '幕末の志士たちが駆け抜けた激動の歴史舞台完全特化！明治維新胎動の地「山口・萩城下町＆松下村塾」、会津藩の誇り「福島・会津若松城＆東山温泉」、坂本龍馬の故郷「高知・桂浜」、西郷隆盛・大久保利通の「鹿児島・城山」を徹底解説。',
    heroDesc: '日本の夜明けを夢見た若き志士たちの足跡をたどる「幕末維新の歴史旅」。吉田松陰の松下村塾、白虎隊の悲話が伝わる飯盛山、龍馬が愛した名湯や会津の武家屋敷。激動の時代に思いを馳せながら、地元の名酒と郷土料理を味わう宿へ。',
    categoryKey: 'japan-bakumatsu-ishin-samurai-history-stay',
    areaGuides: [
      {
        key: 'hagi_meiji_revolution_stay',
        title: '1. 山口・萩城下町〜松下村塾（高杉晋作・伊藤博文らを輩出した維新の源流）',
        timing: '通年（春の萩往還梅まつり・秋の萩城跡紅葉）',
        desc: '白壁となまこ壁が美しい世界遺産「萩城下町」。吉田松陰が教えを説いたわずか8畳の「松下村塾」。高杉晋作や木戸孝允の生家。萩焼の器で楽しむ日本海の活魚や見蘭牛。肌になめらかな萩温泉郷の露天風呂。',
        spots: '世界遺産 松下村塾（松陰神社・至誠館）、萩城下町（菊屋家住宅・木戸孝允旧宅）、萩城跡指月公園、笠山',
        access: 'JR山陰本線「東萩駅」下車。新山口駅（新幹線）より特急バス「はぎ号」で約70分。',
        tip: '萩城下町では、夏みかんの黄色い実が白壁の土塀から顔をのぞかせる独特の景観があり、夏みかんソフトや夏みかんピールがお土産に最適です。'
      },
      {
        key: 'aizu_samurai_higashiyama_stay',
        title: '2. 福島・会津若松〜鶴ヶ城・東山温泉（義に生きた会津藩の誇りと白虎隊の記憶）',
        timing: '通年（春の鶴ヶ城千本桜・秋の紅葉・冬の雪景色）',
        desc: '幕末の戊辰戦争で一ヶ月に及ぶ籠城戦に耐えた名城「鶴ヶ城（若松城）」。日本唯一の赤瓦天守。白虎隊自刃の地「飯盛山」と不思議な二重螺旋建築「さざえ堂」。開湯1300年、土方歳三も傷を癒やした名湯「会津東山温泉」。',
        spots: '鶴ヶ城（天守閣・茶室麟閣）、飯盛山（白虎隊士の墓・円通三匝堂さざえ堂）、会津武家屋敷、七日町通り',
        access: 'JR磐越西線「会津若松駅」よりまちなか周遊バス「あかべぇ・ハイカラさん」運行。',
        tip: '東山温泉の渓流沿い旅館では、川のせせらぎを聞きながら入る露天風呂と、会津の郷土料理「こづゆ」や名物「馬刺し」が絶品です。'
      },
      {
        key: 'kochi_ryoma_katsurahama_stay',
        title: '3. 高知・桂浜〜高知城（太平洋を望む坂本龍馬像と南海の名城）',
        timing: '通年（初夏〜秋のカツオシーズン・よさこい祭り）',
        desc: '雄大な太平洋を望む月の名所「桂浜」。海を見つめる巨大な「坂本龍馬像」。山内一豊が築き天守と本丸御殿が両方現存する唯一の城「高知城」。巨大な大皿に旬の海の幸・山の幸を豪快に盛る伝統宴会料理「皿鉢（さわち）料理」。',
        spots: '桂浜（坂本龍馬像・坂本龍馬記念館・桂浜水族館）、高知城（追手門・天守閣）、ひろめ市場、日曜市',
        access: 'JR土讃線「高知駅」下車。高知龍馬空港より連絡バス約30分。',
        tip: '「ひろめ市場」では、名物「明神丸」の藁焼きカツオのタタキを塩とニンニクスライスで注文し、地元客と相席で土佐鶴を酌み交わすのが最高の醍醐味です。'
      }
    ]
  },
  {
    slug: 'japan-traditional-townscape-preservation-stay',
    badge: 'TRADITIONAL TOWNSCAPE GUIDE',
    title: '【重要伝統的建造物群保存地区（重伝建）の町並み宿】角館・近江八幡・飛騨高山・美馬 完全ガイド',
    metaDesc: '日本の美しい原風景と匠の技が息づく町並み完全特化！みちのくの小京都「秋田・角館武家屋敷」、八幡堀と白壁土蔵「滋賀・近江八幡」、陣屋と出格子「岐阜・飛騨高山」、うだつの上がる町並み「徳島・美馬」、重伝建エリアの歴史的旅館・古民家宿を徹底解説。',
    heroDesc: '黒板塀にしだれ桜が揺れる武家屋敷、水運で栄えた八幡堀をゆく和舟、商人たちの富の象徴「うだつ」。国が選定した「重要伝統的建造物群保存地区（重伝建）」。職人の息遣いが残る歴史的建造物に泊まり、日本の美意識に浸る上質な休日。',
    categoryKey: 'japan-traditional-townscape-preservation-stay',
    areaGuides: [
      {
        key: 'kakunodate_samurai_mansion_stay',
        title: '1. 秋田・角館武家屋敷通り（みちのくの小京都！黒板塀と樹齢300年のしだれ桜）',
        timing: '通年（4月下旬の武家屋敷しだれ桜・秋の紅葉ライトアップ）',
        desc: '佐竹北家の城下町として栄えた「角館武家屋敷通り」。国の重要伝統的建造物群保存地区。青柳家や石黒家など江戸時代上級武士の屋敷群。山桜の樹皮を使った伝統工芸「樺細工（かばざいく）」。日本三大地鶏「比内地鶏」のきりたんぽ鍋。',
        spots: '角館武家屋敷通り（角館歴史村青柳家・石黒家・岩橋家）、桧木内川堤の桜並木、安藤醸造（煉瓦造蔵）',
        access: 'JR秋田新幹線「角館駅」下車徒歩約15分。',
        tip: '「石黒家」では、現存する角館最古の武家屋敷の内部を直系の子孫や専任ガイドの解説付きで見学できます。'
      },
      {
        key: 'omihachiman_canal_kura_stay',
        title: '2. 滋賀・近江八幡〜八幡堀・新町通り（近江商人の本拠地と水運の白壁土蔵）',
        timing: '通年（春の八幡堀桜まつり・八幡堀まつり灯りの回廊）',
        desc: '豊臣秀次が築いた八幡山城の城下町「近江八幡」。白壁土蔵や旧西川家住宅が並ぶ新町通り。水郷をめぐる「八幡堀めぐり和舟」。建築家ウィリアム・メレル・ヴォーリズの洋風建築群。日本三大和牛「近江牛」のすき焼き。',
        spots: '八幡堀（和船めぐり・白壁土蔵群）、新町通り（旧西川家住宅・郷土資料館）、日牟禮八幡宮、ラ コリーナ近江八幡',
        access: 'JR琵琶湖線「近江八幡駅」よりバス約7分。',
        tip: '「ラ コリーナ近江八幡」は、草屋根のメインショップが美しい有名スイーツパークで、焼きたてバームクーヘンが楽しめます。'
      },
      {
        key: 'takayama_mima_heritage_stay',
        title: '3. 岐阜・飛騨高山＆徳島・美馬（出格子の古い町並みとうだつの上がる商家）',
        timing: '通年（春・秋の高山祭・美馬のうだつライトアップ）',
        desc: '江戸時代の商家が軒を連ねる飛騨高山「三町伝統的建造物群保存地区（さんまち通り）」。地酒の杉玉が下がる造り酒屋巡り。藍染めと繭の集散地として栄えた徳島県美馬市脇町の「うだつの上がる町並み（防火壁うだつ）」。',
        spots: '飛騨高山 三町通り（上三之町・船坂酒造店・古い町並み）、高山陣屋、美馬市脇町うだつの町並み（吉田家住宅・オデオン座）',
        access: 'JR高山本線「高山駅」徒歩約10分、JR徳島線「穴吹駅」より車約10分。',
        tip: '飛騨高山の古い町並みでは、コインを入れて地酒をお猪口で試飲できるセルフサーバーを設置した造り酒屋が多く、飲み歩きに最適です。'
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

export default function HistoryHeritageHubPage() {
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

      {/* テーマ別徹底ガイド＆おすすめ宿 */}
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
              {/* テーマ見出し */}
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

              {/* 歴史見どころ・アクセス・旅のコツ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要史跡＆名所</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 歴史探訪を深めるコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの歴史・名門宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    歴史探訪プラン
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

for (const cfg of historyConfigs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated history heritage hub page: /${cfg.slug}`);
}
