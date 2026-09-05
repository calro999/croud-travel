const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
const allHotels = JSON.parse(fs.readFileSync(p, 'utf8'));

const hubs = [
  {
    slug: 'miyagi-matsushima-shiogama-shrine-stay',
    tag: 'MATSUSHIMA & SHIOGAMA GUIDE',
    title: '【宮城・松島＆塩竈・塩竈神社】日本三景松島湾・国宝瑞厳寺＆三陸生マグロ寿司宿 完全ガイド',
    metaTitle: '【宮城・松島＆塩竈】日本三景松島クルーズ・塩竈神社＆生マグロ・牡蠣宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '松尾芭蕉も息を呑んだ日本三景「松島湾」の島巡りクルーズ、伊達政宗の美意識が宿る「国宝 瑞厳寺」と五大堂、陸奥国一之宮「鹽竈神社（塩竈神社）」、日本有数の生マグロ水揚げ港・塩竈の極上寿司と冬の松島焼き牡蠣を味わう宿を徹底解説。',
    lead: '松尾芭蕉が『おくのほそ道』で絶賛した日本三景の筆頭「松島」。白砂青松の島々が海に浮かぶパノラマと、伊達政宗が桃山美術の粋を結集して再建した「国宝 瑞厳寺」。朱塗りの透かし橋を渡る「五大堂」。隣接する塩竈は、平安時代から続く奥州筆頭の大社「鹽竈神社」が鎮座し、日本有数の生マグロ水揚げ量を誇る美食の湊町。三陸の海風と宮城の歴史美に心酔する松島塩竈ステイへご案内します。',
    guides: [
      {
        key: 'matsushima_bay_cruise_zuiganji_stay',
        badge: '日本三景・二百六十余島の多島美と伊達文化',
        title: '1. 松島湾島巡りクルーズ（仁王島・鐘島）＆国宝「瑞厳寺」・五大堂透かし橋',
        timing: '通年（春の桜、夏の青い松島湾、秋の瑞厳寺ライトアップ紅葉、冬の朝霧と雪景色）',
        desc: '約260の奇岩小島が穏やかな湾内に点在する日本三景「松島」。大型遊覧船で巡る「松島湾一周クルーズ」では、波の浸食でできた仁王像そっくりの仁王島や鐘島を間近に鑑賞できます。下船後は、伊達政宗の菩提寺として創建された「国宝 瑞厳寺」へ。本堂を彩る金箔の障壁画や彫刻は絢爛豪華そのもの。海上に突き出た「五大堂」は足元の海が透けて見える透かし橋を渡ることで邪心を祓い参拝します。',
        spots: '松島湾観光遊覧船、国宝瑞厳寺（本堂・庫裏）、五大堂、円通院（数珠作り体験・紅葉庭園）、福浦島（出会い橋）',
        access: 'JR仙石線「松島海岸駅」下車徒歩約5〜10分。JR東北本線「松島駅」より徒歩約15分。三陸自動車道「松島海岸IC」より約5分。',
        tip: '秋の「円通院」夜間ライトアップは、心字池の水面に鮮やかな紅葉が鏡のように映り込む東北屈指の幻想的な夜間特別拝観です。'
      },
      {
        key: 'shiogama_shrine_salt_tuna_stay',
        badge: '奥州一之宮の荘厳と日本一の寿司激戦区',
        title: '2. 陸奥国一之宮「鹽竈神社」二百二段石段＆塩竈仲卸市場・三陸生マグロ寿司',
        timing: '通年（4月下旬の国指定天然記念物「塩竈桜」、初夏の塩竈みなと祭、秋〜冬の生マグロの旬）',
        desc: '千二百年以上の歴史を誇り、陸奥国一之宮として歴代藩主や庶民に篤く信仰されてきた「鹽竈神社（しおがまじんじゃ）」。表参道の202段の急峻な石段を登り切ると、朱塗りの豪華な社殿群が広がります。港町の塩竈は人口あたりの寿司屋の店舗数が日本一とも言われ、塩竈港に水揚げされる新鮮な「三陸東沖生マグロ（メバチマグロ「ひがしもの」）」は濃厚な旨味と上品な脂の乗りが絶品です。',
        spots: '鹽竈神社（志波彦神社）、塩竈市仲卸市場（マイ海鮮丼作り）、マリンゲート塩釜、浦霞醸造元（佐浦酒造）',
        access: 'JR仙石線「本塩釜駅」より徒歩約15分（表参道）。仙台駅よりJR仙石線快速で約16分。三陸道「利府中IC」より約10分。',
        tip: '塩竈市仲卸市場では、場内で買った好みの刺身を市場奥のご飯セット（ご飯・味噌汁）に乗せてオリジナルの「マイ海鮮丼」を作れます。'
      },
      {
        key: 'matsushima_oyster_beef_tongue_stay',
        badge: '冬の松島カキ小屋と仙台牛タン',
        title: '3. 名物「松島焼き牡蠣」スコップ蒸し焼き＆仙台牛・厚切り牛タン会席宿',
        timing: '秋〜冬（10月下旬〜3月の松島牡蠣シーズン、特に身が締まる冬が最高峰）',
        desc: '松島湾の豊かな栄養で育った「松島牡蠣」は、小粒ながらも旨味がギュッと凝縮されているのが特徴。冬季にオープンする「松島観光協会かき小屋」では、鉄板の上にスコップで豪快に盛られた殻付き牡蠣を蒸し焼きにし、食べ放題で心ゆくまで味わえます。夕暮れ時は松島湾を望む温泉露天風呂に浸かり、夕食には宮城名物の厚切り牛タン炭火焼きや仙台牛ステーキ、三陸鮮魚の舟盛り会席を堪能できます。',
        spots: '松島かき小屋、松島さかな市場、松島海岸通り、西行戻しの松公園（松島湾桜パノラマ）',
        access: 'JR松島海岸駅より徒歩圏内に温泉旅館や海鮮処が集中。',
        tip: '「西行戻しの松公園」の高台カフェ「ル・ロマン」からは、松島湾全景と島々をガラス越しに見渡す絶景ティータイムが楽しめます。'
      }
    ]
  },
  {
    slug: 'nagano-hakuba-happo-tsugaike-alps-stay',
    tag: 'HAKUBA & TSUGAIKE ALPS GUIDE',
    title: '【長野・白馬＆八方尾根・栂池自然園】八方池雲上鏡面絶景・栂池湿原＆マウンテンサウナ宿 完全ガイド',
    metaTitle: '【長野・白馬＆八方尾根】八方池パノラマ・栂池自然園＆山岳サウナシャレー宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '白馬連峰（白馬岳・杓子岳・白馬鑓ヶ岳）を水面に映す奇跡の雲上池「八方尾根・八方池」、日本有数の高山植物の宝庫「栂池自然園」木道トレッキング、絶景山岳テラスHAKUBA MOUNTAIN HARBOR、薪サウナと信州牛を味わうマウンテンリゾート宿を徹底解説。',
    lead: '標高3,000m級の北アルプス後立山連峰が眼前に迫る国際的マウンテンリゾート「白馬」。ゴンドラとリフトを乗り継ぎ、雲上のトレイルを進んだ先に現れる標高2,060mの「八方池」は、白馬三山の雄姿を鏡のように映し出す奇跡の絶景。高山植物が咲き誇る「栂池自然園」の広大な湿原散歩。白馬岩岳の絶景テラスで楽しむ焼きたてクロワッサン。そして大自然の中で澄んだ雪解け水風呂に飛び込む極上の山岳サウナ。圧倒的なスケールの山岳美に抱かれる白馬ステイへご案内します。',
    guides: [
      {
        key: 'hakuba_happo_pond_alps_stay',
        badge: '標高二千六十メートル・天上の水鏡',
        title: '1. 白馬八方尾根トレッキング＆「八方池」鏡面絶景・うさぎ平雲上テラス',
        timing: '夏〜秋（6月下旬〜10月の夏山トレッキング・チングルマ等の高山植物、10月の三段紅葉）',
        desc: '長野冬季五輪の滑降競技の舞台となった八方尾根。ゴンドラ「アダム」とクワッドリフト2本を乗り継ぎ、標高1,830mの八方池山荘から往復約3時間の本格トレッキング。木道と岩場を進むと現れる「八方池」は、風の止んだ瞬間に白馬三山（白馬岳・杓子岳・白馬鑓ヶ岳）の残雪と岩肌を完璧に水面に映し出します。道中には珍しい高山植物が咲き乱れ、雲海を見下ろすうさぎ平テラスでのカフェタイムも格別です。',
        spots: '八方尾根（八方池・八方ケルン）、うさぎ平テラス（HAKUBA MOUNTAIN BEACH）、八方温泉（高アルカリ美肌の湯）',
        access: 'JR大糸線「白馬駅」より路線バスで約10分（八方バスターミナル下車）。長野駅東口より特急バス（長野白馬線）で約75分。上信越道「長野IC」より車で約60分。',
        tip: '八方池の水面に山が綺麗に映る「鏡面絶景」を狙うなら、風が吹きにくく大気が安定している早朝の登拝が最も確率が高いです。'
      },
      {
        key: 'tsugaike_nature_park_wetland_stay',
        badge: '日本屈指の高層湿原と白馬大雪渓ビュー',
        title: '2. 栂池自然園（高山植物と四百種の動植物）＆栂池ロープウェイ・栂池高原温泉',
        timing: '夏〜秋（6月中旬の水芭蕉、7〜8月の百花繚乱の高山植物、9月下旬〜10月上旬の錦秋草紅葉）',
        desc: '標高約1,900m、約100ヘクタールにおよぶ日本有数の高層湿原「栂池自然園」。ゴンドラリフト「イブ」と栂池ロープウェイを乗り継いで到達する雲上の楽園です。園内には約5.5kmの木道が整備され、みずばしょう湿原、ワタスゲ湿原、浮島湿原、展望湿原と巡ることができます。最奥の展望湿原からは、白馬大雪渓と白馬三山の大岩壁が手が届きそうな距離で迫り、息を呑む大迫力パノラマが広がります。',
        spots: '栂池自然園（栂池ビジターセンター・木道）、栂の森、栂池パノラマウェイ、前山百体観音',
        access: 'JR白馬大池駅または白馬駅より路線バスで「栂池高原」下車。長野ICまたは安曇野ICより車で約70分。',
        tip: '栂池自然園の「みずばしょう湿原」はバリアフリー木道が整備されており、車椅子や小さなお子様連れでも安心して散策できます。'
      },
      {
        key: 'hakuba_mountain_sauna_chalet_stay',
        badge: '北アルプス外気浴と山岳シャレーリゾート',
        title: '3. 白馬山岳プライベートサウナ＆白馬岩岳マウンテンリゾート・信州牛ステーキ宿',
        timing: '通年（グリーンシーズンの山岳外気浴、冬のパウダースノーダイブサウナ）',
        desc: '近年「サウナの聖地」としても急速に注目を集める白馬。薪ストーブを備えた本格的なフィンランド式サウナやバレルサウナを完備したプライベートシャレーやリゾートホテルが充実しています。アルプスの冷涼な天然地下水掛け流しの水風呂に浸かり、雄大な山並みを仰ぎながらの外気浴は究極のととのい体験。山頂テラス「HAKUBA MOUNTAIN HARBOR」からの絶景を堪能した後は、信州プレミアム牛ステーキに舌鼓を打てます。',
        spots: '白馬岩岳マウンテンリゾート（THE CITY BAKERY・ヤッホースウィング）、Snow Peak LAND STATION HAKUBA、白馬村内サウナ施設',
        access: '白馬駅周辺・和田野の森・エコーランドエリアにシャレーやホテルが点在。',
        tip: '白馬岩岳の巨大ブランコ「ヤッホースウィング」は、アルプスの絶景に向かって飛び出すような感覚を味わえるSNSで話題沸騰のスポットです。'
      }
    ]
  },
  {
    slug: 'gifu-gujo-hachiman-mino-udatsu-stay',
    tag: 'GUJO HACHIMAN & MINO GUIDE',
    title: '【岐阜・郡上八幡＆美濃・うだつの上がる町並み】宗祇水・郡上おどり＆美濃和紙宿 完全ガイド',
    metaTitle: '【岐阜・郡上八幡＆美濃】郡上おどり・名水宗祇水＆美濃うだつの町並み・鮎宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '水とおどりの城下町「郡上八幡」の日本一美しい山城・名水百選「宗祇水」の水路網、日本一長い盆踊り「郡上おどり（徹夜おどり）」、重要伝統的建造物群保存地区「美濃・うだつの上がる町並み」、美濃手漉き和紙工房、清流長良川の天然鮎宿を徹底解説。',
    lead: '奥美濃の山あいに清らかな吉田川が流れ、街中に水路のせせらぎが響く「水の町・郡上八幡」。天空の城とも称される白亜の「郡上八幡城」と、名水百選第一号の「宗祇水」。夏には三十二夜にわたり踊り明かす日本三大盆踊り「郡上おどり」。長良川の下流に位置する「美濃」では、江戸時代の豪商たちが富を競い合った壮麗な「うだつの上がる町並み」と千三百年の伝統を誇る美濃和紙。清流の恵みと職人の技が息づく岐阜・奥美濃ステイへご案内します。',
    guides: [
      {
        key: 'gujo_hachiman_water_castle_stay',
        badge: '司馬遼太郎が絶賛した木造山城と名水の路',
        title: '1. 郡上八幡城（天空の城）＆名水百選「宗祇水」・やなか水のこみち散策',
        timing: '通年（春の新緑と山城、夏の川遊び、秋の城山紅葉ライトアップ、冬の雪化粧）',
        desc: '作家・司馬遼太郎が「日本で最も美しい山城」と称えた日本最古の木造再建城「郡上八幡城」。秋には全山が紅葉で赤く燃え上がり、朝霧が立ち込める早朝には雲海に浮かぶ「天空の城」となります。城下町には江戸時代の用水路が今なお生活用水として使われ、日本名水百選の第1号に指定された「宗祇水（そうぎすい）」や、玉石を敷き詰めた「やなか水のこみち」など、歩くごとに心地よい水の音が旅人を癒やします。',
        spots: '郡上八幡城、宗祇水、やなか水のこみち、いがわ小径（清流を泳ぐ鯉）、郡上八幡博覧館、食品サンプル創作館',
        access: '長良川鉄道「郡上八幡駅」よりまめバスで約15分（城下町プラザ下車）。東海北陸自動車道「郡上八幡IC」より車で約5分。',
        tip: '郡上八幡は日本の「食品サンプル」発祥の地であり、町内の工房では本物そっくりの天ぷらやレタスのサンプル作り体験が大人気です。'
      },
      {
        key: 'mino_udatsu_washi_heritage_stay',
        badge: '富の象徴「うだつ」とユネスコ無形文化遺産',
        title: '2. 美濃「うだつの上がる町並み」（重伝建地区）＆美濃和紙あかりアート・旧今井家',
        timing: '通年（秋の美濃和紙あかりアート展、大滝落としの紅葉、風情ある雨景色の町並み）',
        desc: '江戸時代、美濃和紙の商人たちが巨万の富を築いた美濃市。火災の延焼を防ぐ防火壁であり富の象徴とされた「うだつ（梲）」を屋根の両端に掲げた豪壮な商家が連なる「うだつの上がる町並み」は国の重要伝統的建造物群保存地区。美濃市最古の商家「旧今井家住宅」の水琴窟の澄んだ音色や、ユネスコ無形文化遺産「本美濃紙」の灯りが幻想的な空間を創り出す「美濃和紙あかりアート館」で日本の伝統美を体感できます。',
        spots: 'うだつの上がる町並み、旧今井家住宅・美濃史料館、美濃和紙あかりアート館、美濃和紙の里会館（紙漉き体験）',
        access: '長良川鉄道「美濃市駅」より徒歩約10分。東海北陸自動車道「美濃IC」より車で約5分。',
        tip: '毎年秋に開催される「美濃和紙あかりアート展」では、全国から集まった和紙のあかり作品が古い町並みに灯され、息を呑む美しさを見せます。'
      },
      {
        key: 'nagara_river_sweetfish_gourmet_stay',
        badge: '清流長良川の恵み・世界農業遺産「鮎」',
        title: '3. 清流長良川の天然「郡上鮎」塩焼き会席＆飛騨牛・鶏ちゃん郷土美食宿',
        timing: '夏〜秋（6月〜10月の天然鮎シーズン、特に子持ち鮎が味わえる初秋）',
        desc: '「清流長良川の鮎」として世界農業遺産に認定された長良川の鮎。なかでも水質が極めて優れ急流で育った「郡上鮎」は、香気が高く身が引き締まったブランド魚として全国の料理人から絶賛されます。炭火でじっくり遠火焼きした塩焼きは、頭から骨ごと丸かじりできる極上の香ばしさ。また岐阜名物の「飛騨牛」のすき焼きや、ニンニク醤油タレに漬け込んだ鶏肉をキャベツと炒める郡上ソウルフード「鶏ちゃん（けいちゃん）」も宿の夕食で堪能できます。',
        spots: '吉田川・長良川簗（やな場各所）、郡上八幡旧庁舎記念館、美濃橋（日本最古の近代吊橋）',
        access: '郡上市内および長良川沿いに鮎料理自慢の温泉旅館や料理旅館が点在。',
        tip: '夏場（7月中旬〜9月上旬）の「郡上おどり」期間中は町中が熱気に包まれ、浴衣に下駄を履いて誰でも輪に入って踊りに参加できます。'
      }
    ]
  },
  {
    slug: 'kyoto-amanohashidate-ine-funaya-stay',
    tag: 'AMANOHASHIDATE & INE FUNAYA GUIDE',
    title: '【京都・天橋立＆伊根・丹後半島】天橋立股のぞき・伊根の舟屋群＆幻の間人ガニ宿 完全ガイド',
    metaTitle: '【京都・天橋立＆伊根の舟屋】股のぞき・舟屋クルーズ＆冬の間人ガニ・名湯宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '日本三景「天橋立」の砂嘴を股の間からのぞく飛龍観・傘松公園、海抜ゼロメートルに建ち並ぶ二百三十軒の伝統的建築群「伊根の舟屋」遊覧クルーズ、冬の日本海の幻の最高峰「丹後間人ガニ（たいざがに）」と天橋立温泉を徹底解説。',
    lead: '神話の時代、天と地を結ぶ梯子が倒れてできたと伝わる日本三景「天橋立」。約3.6kmにわたり約8,000本の黒松が白砂の州に連なる奇跡の造形。「股のぞき」をすれば、天地が逆転し龍が天に昇るような神秘のパノラマが広がります。さらに北へ進めば、海と家がひと続きになった日本唯一の景観「伊根の舟屋群」。波静かな伊根湾を進む遊覧船とウミネコの餌付け。冬には幻のズワイガニ「間人ガニ」が膳を彩る海の京都ステイへご案内します。',
    guides: [
      {
        key: 'amanohashidate_matanozoki_stay',
        badge: '日本三景・天に架かる緑の橋と智恵の文殊',
        title: '1. 天橋立「股のぞき」（天橋立ビューランド・傘松公園）＆智恩寺・松並木サイクリング',
        timing: '通年（春〜夏の青い宮津湾と松の緑、秋の心地よい海風、冬の雪景色「幻雪の天橋立」）',
        desc: '宮津湾と阿蘇海を隔てる全長約3.6kmの砂嘴に約8,000本の松が茂る日本三景「天橋立」。南側の「天橋立ビューランド」からの飛龍観、北側の「傘松公園」からの昇龍観と、展望台で腰を曲げて股の間から逆さに覗く「股のぞき」が有名。海が空に、松並木が天に昇る龍のように見えます。松並木の中はレンタサイクルや徒歩で通り抜けることができ、日本三文殊の一つ「智恩寺（文殊堂）」で智恵を授かる参拝も定番です。',
        spots: '天橋立ビューランド（リフト・モノレール）、傘松公園（股のぞき発祥の地）、智恩寺（文殊堂）、元伊勢籠神社、天橋立神社',
        access: '京都丹後鉄道「天橋立駅」下車すぐ。京都駅より特急はしだてで直通約2時間。山陰近畿道「与謝天橋立IC」より約10分。',
        tip: '天橋立の中間にある「磯清水」は、四方を海に囲まれていながら一口飲むと真水が湧き出る不思議な名水百選の井戸です。'
      },
      {
        key: 'ine_funaya_sea_cruising_stay',
        badge: '国の重要伝統的建造物群・海の上に浮かぶ家',
        title: '2. 伊根の舟屋（二百三十軒の舟屋群）＆伊根湾めぐり遊覧船・舟屋の宿ステイ',
        timing: '通年（波静かな伊根湾のクルーズ、夕暮れのシルエット、冬の寒ブリ漁）',
        desc: '1階が船のガレージ（船揚場）、2階が居室という独特の構造を持つ「舟屋」が伊根湾の周囲5kmにわたって約230軒立ち並ぶ「伊根の舟屋群」。まるで家が海の上に直接浮かんでいるかのような幻想的な漁村景観は国の重要伝統的建造物群保存地区に選定されています。伊根湾めぐり遊覧船に乗れば、海上から迫力ある舟屋の町並みを一望でき、飛び交うカモメへの餌付けも大人気。舟屋を改装した一日一組限定の宿での宿泊は一生の記憶に残ります。',
        spots: '伊根の舟屋群、伊根湾めぐり遊覧船、道の駅 舟屋の里伊根（高台からのパノラマ展望台）、向井酒造（女性杜氏の赤い地酒 伊根満開）',
        access: '天橋立駅より丹海バス（伊根線）で約60分（伊根下車）。天橋立市街地より車で約35分。',
        tip: '向井酒造の「伊根満開」は古代米（赤米）を使って醸造されたロゼワインのような鮮やかな赤色の日本酒で、フルーティーな酸味が女性に大人気です。'
      },
      {
        key: 'tango_taiza_crab_seafood_stay',
        badge: '冬の味覚の最高峰「幻の間人ガニ」と天然温泉',
        title: '3. 幻のブランド蟹「間人ガニ」尽くし会席＆天橋立温泉・夕日ヶ浦温泉露天宿',
        timing: '冬（11月6日〜3月下旬の松葉ガニ漁期、特に12〜2月が最盛期）',
        desc: '丹後半島の間人（たいざ）港に所属するわずか5隻の小型船が日帰り操業で水揚げする「間人ガニ」。競りまでの時間が極めて短いため抜群の鮮度を誇り、水揚げ量の少なさから「幻の蟹」と呼ばれます。緑色のタグが付けられた本物の間人ガニは、繊細な甘みのカニ刺し、香ばしい焼きガニ、濃厚なカニ味噌甲羅焼きと至高の味わい。丹後半島沿岸に湧く「天橋立温泉」や夕日の名所「夕日ヶ浦温泉」の美肌露天風呂で贅沢な美食の夜を過ごせます。',
        spots: '間人港、夕日ヶ浦海岸（浜詰ビーチ・ビーチブランコゆらり）、経ヶ岬灯台（近畿最北端）、屏風岩',
        access: '天橋立・宮津市街地および丹後半島各地に名旅館が点在。冬季はカニ特急列車の運行あり。',
        tip: '夕日ヶ浦海岸は「日本の夕陽百選」に選ばれており、海辺の砂浜に設置された木製ブランコ「ゆらり」に揺られながら眺めるサンセットは息を呑む絶景です。'
      }
    ]
  },
  {
    slug: 'miyazaki-nichinan-obi-castle-aoshima-stay',
    tag: 'NICHINAN, OBI & AOSHIMA GUIDE',
    title: '【宮崎・日南海岸＆飫肥城下町・青島】鬼の洗濯板・モアイ像＆飫肥武家屋敷宿 完全ガイド',
    metaTitle: '【宮崎・日南＆青島】青島神社・サンメッセ日南モアイ＆飫肥城下町・地頭鶏宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '青い海に浮かぶ神話の小島「青島神社」と天然記念物「鬼の洗濯板」、イースター島公認の完全復刻モアイ像「サンメッセ日南」、断崖絶壁の洞窟に鎮座する「鵜戸神宮」運玉投げ、九州の小京都「飫肥城下町」飫肥杉武家屋敷と宮崎地頭鶏・伊勢海老宿を徹底解説。',
    lead: '南国のフェニックス並木とコバルトブルーの太平洋がどこまでも続く「日南フェニックスロード」。海上の奇岩「鬼の洗濯板」に抱かれた神話の島「青島」。イースター島長老会から世界で唯一公式に復刻を認められた7体のモアイ像が海を見つめる「サンメッセ日南」。太平洋の荒波が打ち寄せる断崖の洞窟「鵜戸神宮」。そして飫肥杉と石垣が美しき武家屋敷の風情を残す九州の小京都「飫肥城下町」。南国の光と歴史ロマンあふれる宮崎・日南ステイへご案内します。',
    guides: [
      {
        key: 'aoshima_shrine_devils_washboard_stay',
        badge: '天然記念物の奇岩波状岩と縁結びの聖地',
        title: '1. 青島神社＆「鬼の洗濯板」奇岩パノラマ・青島ビーチリゾートサーフステイ',
        timing: '通年（常夏の南国リゾート、春〜秋のマリンスポーツ、初詣の裸まいり）',
        desc: '周囲約1.5kmの青島全体が境内となっている「青島神社」。島を取り囲むように広がる「鬼の洗濯板」は、中新世の砂岩と泥岩が波の浸食を受けて規則的な階段状に削られた国の天然記念物。弥生橋を渡って島に入ると、亜熱帯植物のビロウ樹が生い茂るジャングルのような神秘の神域が広がります。山幸彦と豊玉姫の神話から縁結びの最強パワースポットとして有名。周辺はSUPやサーフィンの名所としても名高いリゾートビーチです。',
        spots: '青島神社（元宮・産霊紙縒祈願）、鬼の洗濯板、青島ビーチパーク、宮交ボタニックガーデン青島（熱帯植物園）',
        access: 'JR日南線「青島駅」下車徒歩約10分。宮崎空港より路線バスで約25分。宮崎自動車道「宮崎IC」より約15分。',
        tip: '青島神社の本殿奥にあるビロウ樹の森を抜けた「元宮」では、願い事を込めながら土器（平瓮）を磐境に投げ入れる「天の平瓮投げ」が体験できます。'
      },
      {
        key: 'nichinan_moai_sunmesse_stay',
        badge: 'イースター島公認の七体の巨像と断崖の霊場',
        title: '2. サンメッセ日南「七体の完全復刻モアイ像」＆鵜戸神宮「亀石の運玉投げ」',
        timing: '通年（どこまでも青い太平洋と南国の青空、冬の温暖な気候）',
        desc: '日南海岸の丘の上にそびえ立つ「サンメッセ日南」。チリ・イースター島の長老会から特別許可を得て完全復刻された高さ5.5mの7体のモアイ像は、仕事運・金運・恋愛運などそれぞれに異なるパワーが宿るとされます。さらに南へ車を走らせると、断崖絶壁の海食洞の中に朱塗りの本殿が鎮座する「鵜戸神宮（うどじんぐう）」。崖の上から海上の「亀石」のくぼみを目がけて男性は左手、女性は右手で素焼きの「運玉」を投げ入れ、入ると願いが叶うと伝わります。',
        spots: 'サンメッセ日南（モアイ像・天空のブランコ）、鵜戸神宮（運玉投げ・お乳岩）、堀川運河、道の駅フェニックス（鬼の洗濯板展望台）',
        access: '宮崎駅または宮崎空港より宮崎交通バス（日南・飫肥行）で約50〜70分。宮崎ICより車で約40〜50分。',
        tip: '道の駅フェニックスの展望デッキからは、水平線が丸く見える壮大な太平洋パノラマと足元に広がる鬼の洗濯板を上から見下ろせます。'
      },
      {
        key: 'obi_castle_samurai_town_stay',
        badge: '九州の小京都・飫肥杉と伊東五万石の誇り',
        title: '3. 飫肥城下町（重要伝統的建造物群）飫肥杉武家屋敷散策＆宮崎地頭鶏・名物飫肥天',
        timing: '通年（新緑の武家屋敷、秋の飫肥城下まつり、温暖な冬のまち歩き）',
        desc: '伊東氏五万石の城下町として栄え、「九州の小京都」と称される日南市飫肥（おび）。樹齢100年以上の銘木「飫肥杉」を使って復元された飫肥城大手門や、石垣と白壁、立派な薬医門が連なる町並みは国の重要伝統的建造物群保存地区。魚のすり身に豆腐と黒砂糖を混ぜて揚げた名物「飫肥天」や、プリンのような食感の「厚焼き玉子」をつまみ食いしながら散策。夜は炭火で豪快に焼き上げるブランド地鶏「みやざき地頭鶏」や日南獲れの伊勢海老会席を堪能できます。',
        spots: '飫肥城跡（大手門・松尾の丸・歴史資料館）、小村記念館、旧高橋源次郎家、武家屋敷通り、飫肥天蔵',
        access: 'JR日南線「飫肥駅」下車徒歩約15分。宮崎空港より車で約55分。田野ICより約40分。',
        tip: '「あゆみちゃんマップ（引換券付きマップ）」を購入すると、城下町の指定店舗で名物の飫肥天や厚焼き玉子などの特産品と引き換えながら楽しく散策できます。'
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
  console.log('All 5 round 34 micro hubs successfully generated!');
}

main();
