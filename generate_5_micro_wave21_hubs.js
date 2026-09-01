const fs = require('fs');
const path = require('path');

const microWave21Configs = [
  {
    slug: 'yamagata-tsuruoka-hagurosan-dewasanzan-stay',
    badge: 'DEWA SANZAN & HAGURO GUIDE',
    title: '【山形・鶴岡＆羽黒山・出羽三山】国宝羽黒山五重塔・杉並木＆精進料理・庄内浜宿 完全ガイド',
    metaDesc: '生まれ変わりの旅・出羽三山（羽黒山・月山・湯殿山）＆鶴岡エリア完全特化！国宝「羽黒山五重塔」、樹齢1000年爺杉と2446段石段杉並木、羽黒修験の伝統「精進料理」、湯野浜温泉、名物「庄内浜海の幸宿」を徹底解説。',
    heroDesc: '現世の幸せを祈る「羽黒山」、過去を清める「月山」、未来の生まれ変わりを願う「湯殿山」の出羽三山。樹齢数百年の杉並木と国宝五重塔。修験僧が受け継いできた精進料理のごま豆腐や山菜。日本海の絶景夕陽を望む湯野浜温泉と庄内美食の旅。',
    categoryKey: 'yamagata-tsuruoka-hagurosan-dewasanzan-stay',
    areaGuides: [
      {
        key: 'hagurosan_shukubo_onsen_stay',
        title: '1. 羽黒山〜国宝五重塔・爺杉・2446段石段（ミシュラン三ツ星の巨樹回廊）',
        timing: '通年（新緑の5〜6月・秋の紅葉・冬の雪中参拝）',
        desc: '約1400年の歴史を持つ修験道の霊場。随神門をくぐると続く約1.7km・2446段の石段と樹齢300〜500年の杉並木（国の特別天然記念物）。東北最古の「国宝 羽黒山五重塔」。樹齢1000年の巨木「爺杉」。山頂の三神合祭殿。',
        spots: '国宝 羽黒山五重塔、羽黒山杉並木・石段、爺杉、三神合祭殿（国の重要文化財）、手向（とうげ）宿坊街',
        access: 'JR鶴岡駅より庄内交通バス「羽黒山頂行」で約40〜50分。庄内空港より車約40分。',
        tip: '羽黒山の石段には盃やひょうたんなど33個の彫刻が彫られており、すべて見つけると願いが叶うと言われています。'
      },
      {
        key: 'tsuruoka_gastronomy_stay',
        title: '2. 日本初ユネスコ食文化創造都市・鶴岡〜致道館・加茂水族館（クラゲドリーム館）',
        timing: '通年（世界一のクラゲ展示・庄内映画村）',
        desc: '日本で初めてユネスコ食文化創造都市に認定された鶴岡市。約80種類のクラゲを展示する「加茂水族館（クラゲドリーム館）」。庄内藩主酒井家の旧致道館。鶴岡カトリック教会天主堂。日本海の海岸美・由良海岸。',
        spots: '加茂水族館（クラゲドリームシアター）、庄内藩校 致道館、鶴岡カトリック教会、由良海岸（白山島）',
        access: 'JR鶴岡駅周辺・加茂港。',
        tip: '加茂水族館の直径5mの円形水槽「クラゲドリームシアター」は約1万匹のミズクラゲが浮遊し、幻想的な癒やしのフォトスポットです。'
      },
      {
        key: 'haguro_shojin_seafood_stay',
        title: '3. 出羽三山「精進料理」＆庄内浜の海の幸（山伏の知恵と日本海の旬魚）',
        timing: '通年（春の山菜・夏の岩ガキ・秋の庄内柿・冬の寒鱈汁）',
        desc: '羽黒山伏の修行食から生まれた伝統の「精進料理」。吉野葛と炒り胡麻を丁寧に練り上げた「ごま豆腐」や月山筍、山菜料理。庄内浜の冷たい海で獲れるズワイガニ、のどぐろ、冬の名物「寒鱈汁（どんがら汁）」。',
        spots: '斎館（羽黒山頂の精進料理食事処）、手向宿坊の郷土料理、湯野浜温泉の割烹旅館',
        access: '鶴岡市・湯野浜温泉・羽黒町。',
        tip: '羽黒山頂の「斎館」では、月山や羽黒山の豊かな伏流水と野山で採れた山菜・キノコを使った本格的な精進料理を完全予約制でいただけます。'
      }
    ]
  },
  {
    slug: 'chiba-tateyama-shirahama-nojimazaki-stay',
    badge: 'TATEYAMA & NOJIMAZAKI GUIDE',
    title: '【千葉・館山＆白浜・野島崎】房総最南端白亜の灯台・フラワーライン＆伊勢海老宿 完全ガイド',
    metaDesc: '黒潮の恵みと温暖な楽園・南房総館山＆白浜エリア完全特化！房総半島最南端「野島埼灯台（ラバーズベンチ）」、日本の道百選「房総フラワーライン」、館山城（城山公園）、名物「房総伊勢海老・アワビ・地魚寿司宿」を徹底解説。',
    heroDesc: 'どこまでも青い太平洋と黒潮の温暖な気候「南房総・館山＆白浜」。房総半島最南端にそびえる白亜の「野島埼灯台」。夕陽と富士山を同時に望む絶景ラバーズベンチ。冬から春に咲き乱れる菜の花とポピー。獲れたての房総伊勢海老とアワビを味わうシーサイドの旅。',
    categoryKey: 'chiba-tateyama-shirahama-nojimazaki-stay',
    areaGuides: [
      {
        key: 'nojimazaki_shirahama_ocean_stay',
        title: '1. 野島埼灯台〜白浜海岸（房総半島最南端の岬と朝日・夕陽のベンチ）',
        timing: '通年（年間を通じて温暖・冬のスイセンロード）',
        desc: '明治2年に点灯した日本最古の洋式灯台のひとつ「野島埼灯台（白亜の八角形灯台）」。岩礁の上に設置された「ラバーズベンチ（朝日と夕陽が見えるベンチ）」。太平洋の荒波が打ち寄せる海岸遊歩道。白浜温泉郷。',
        spots: '野島埼灯台（灯台資料展示室・展望デッキ）、最南端の碑・ラバーズベンチ、白浜海洋美術館、白浜フラワーパーク',
        access: 'JR内房線「館山駅」より路線バス「安房白浜行」で約40分。富津館山道路「富浦IC」より約30分。',
        tip: '野島崎のラバーズベンチは、東から昇る朝日と西へ沈む夕陽の両方を同じ場所から見られる日本屈指の絶景ロケーションです。'
      },
      {
        key: 'tateyama_flower_sunset_stay',
        title: '2. 館山〜房総フラワーライン・館山城・沖ノ島（富士山を望む花のドライブ）',
        timing: '通年（1月〜4月の菜の花・ポピー満開シーズン）',
        desc: '日本の道百選に選ばれた約46kmの「房総フラワーライン」。南総里見八犬伝ゆかりの「館山城（城山公園・天守閣から館山湾一望）」。砂州で陸続きになった無人島「沖ノ島（シュノーケリング・洞窟探検）」。北条海岸の夕陽。',
        spots: '房総フラワーライン、館山城（八犬伝博物館・城山公園）、沖ノ島、館山夕日桟橋、アロハガーデンたてやま',
        access: 'JR館山駅周辺。高速バス「なのはな号」で東京駅より約100分。',
        tip: '館山湾（別名・鏡ヶ浦）沿いの北条海岸からは、空気の澄んだ日に海越しに富士山のシルエットがくっきりと浮かび上がる絶景が楽しめます。'
      },
      {
        key: 'boso_iseebi_abalone_sushi_stay',
        title: '3. 房総名物「伊勢海老」＆アワビ・地魚寿司（黒潮が育む最高峰の磯の味）',
        timing: '通年（8月〜10月の伊勢海老漁解禁・初夏〜夏のアワビ）',
        desc: '全国屈指の水揚げ量を誇る千葉県産「房総伊勢海老」。プリプリの刺身と頭を入れた熱々の鬼殻焼きや味噌汁。肉厚な黒アワビの踊り焼き。館山港で水揚げされた地魚を使った「館山炙り海鮮丼」や郷土寿司「なめろう」「さんが焼き」。',
        spots: '漁師料理たてやま、渚の駅たてやま（みなとオアシス）、白浜・千倉の海鮮会席宿',
        access: '館山市・南房総市沿岸部。',
        tip: '秋の房総は伊勢海老まつりが各所で開催され、宿泊施設でも伊勢海老が丸ごと1尾付く贅沢プランがリーズナブルに楽しめます。'
      }
    ]
  },
  {
    slug: 'nagano-hakuba-tsugaike-alps-stay',
    badge: 'HAKUBA & TSUGAIKE GUIDE',
    title: '【長野・白馬＆小谷・栂池高原】北アルプス白馬三山パノラマ・テラス＆信州そば宿 完全ガイド',
    metaDesc: '世界水準のマウンテンリゾート・信州白馬＆栂池エリア完全特化！白馬岩岳「白馬マウンテンハーバー（絶景テラス）」、栂池自然園高層湿原、八方尾根トレッキング、白馬八方温泉（日本屈指の高アルカリ温泉）、名物「信州そば・信州牛宿」を徹底解説。',
    heroDesc: '残雪と新緑、錦秋の三段紅葉が輝く北アルプス白馬連峰「白馬＆小谷・栂池高原」。白馬岩岳山頂の絶景テラス「HAKUBA MOUNTAIN HARBOR」。標高2,000mの高層湿原「栂池自然園」。pH11を超える美肌の白馬八方温泉と信州グルメを味わう山岳リゾートの旅。',
    categoryKey: 'nagano-hakuba-tsugaike-alps-stay',
    areaGuides: [
      {
        key: 'hakuba_mountain_resort_stay',
        title: '1. 白馬岩岳〜白馬マウンテンハーバー・八方尾根（北アルプス絶景天空テラス）',
        timing: '通年（グリーンシーズン：4月下旬〜11月中旬・冬期：スキーリゾート）',
        desc: '標高1,289mの白馬岩岳山頂に張り出す絶景テラス「HAKUBA MOUNTAIN HARBOR」。白馬三山（白馬岳・杓子岳・白馬鑓ヶ岳）の大パノラマ。巨大ブランコ「ヤッホー！スウィング」。八方尾根ゴンドラで行く八方池トレッキング。',
        spots: '白馬マウンテンハーバー（THE CITY BAKERY）、八方尾根（八方池・うさぎ平）、白馬ジャンプ競技場、白馬八方温泉（みみずくの湯・八方の湯）',
        access: 'JR大糸線「白馬駅」よりバス・車約10分。長野駅より特急バス「白馬線」で約70分。',
        tip: '八方尾根の「八方池（標高2,060m）」は、無風の早朝に訪れると、池の水面に逆さ白馬連峰が映し出される息を呑む絶景が広がります。'
      },
      {
        key: 'tsugaike_otari_onsen_stay',
        title: '2. 栂池自然園〜栂池パノラマウェイ（高山植物の楽園と秘湯小谷温泉）',
        timing: 'グリーンシーズン：6月中旬〜10月下旬（初夏のミズバショウ・秋の紅葉）',
        desc: 'ゴンドラとロープウェイを乗り継ぐ「栂池パノラマウェイ」で行く標高2,000mの「栂池自然園（日本有数の高層湿原）」。木道が整備された園内に咲く数百種類の高山植物。武田信玄の隠し湯と伝わる秘湯「小谷（おたり）温泉」。',
        spots: '栂池自然園（ミズバショウ湿原・浮島湿原・展望湿原）、栂池パノラマウェイ、小谷温泉（熱泉荘・山田旅館）',
        access: '白根・白馬駅より路線バス約25〜30分。',
        tip: '栂池自然園の最奥「展望湿原」からは、白馬大雪渓を目の前に望む圧倒的な迫力の山岳パノラマが楽しめます。'
      },
      {
        key: 'hakuba_shinshu_soba_wagyu_stay',
        title: '3. 信州名物「手打ちそば」＆信州プレミアム牛（北アルプスの雪解け水が育む美味）',
        timing: '通年（秋の新そば・冬の熱々そばがき鍋）',
        desc: '北アルプスの清らかな雪解け水で締める風味豊かな「信州手打ちそば」。長野県が誇るブランド黒毛和牛「信州プレミアム牛」の陶板焼き。小谷村名物の「雪中キャベツ」や天然イワナの塩焼き、地酒「大雪渓」。',
        spots: '白馬村・小谷村の手打ちそば店（りき・利根川）、道の駅小谷、山岳オーベルジュ',
        access: '白馬・小谷エリア。',
        tip: '道の駅小谷では、源泉かけ流しの天然温泉「深山の湯」が併設されており、かまど炊きのご飯と信州そばのセットがドライブ客に大人気です。'
      }
    ]
  },
  {
    slug: 'hyogo-takeda-castle-asago-ikuno-stay',
    badge: 'TAKEDA CASTLE & ASAGO GUIDE',
    title: '【兵庫・竹田城跡＆朝来・生野銀山】雲海に浮かぶ天空の城・生野鉱山坑道＆但馬牛宿 完全ガイド',
    metaDesc: '日本のマチュピチュ・天空の城跡と産業遺産・兵庫朝来エリア完全特化！国史跡「竹田城跡（雲海展望台・立雲峡）」、日本遺産「生野銀山（観光坑道・鉱山町）」、あさご芸術の森、名物「但馬牛・岩津ねぎ宿」を徹底解説。',
    heroDesc: '標高353mの古城山山頂に広がる石垣遺構「国史跡・天空の城 竹田城跡」。秋の早朝、濃密な朝霧に包まれて雲海に浮かぶ幻想の姿。戦国時代から昭和まで稼働した「生野銀山」の地下鉱山探検。日本三大和牛のルーツ但馬牛と日本三大葱・岩津ねぎを味わう旅。',
    categoryKey: 'hyogo-takeda-castle-asago-ikuno-stay',
    areaGuides: [
      {
        key: 'takeda_castle_view_inn_stay',
        title: '1. 竹田城跡〜立雲峡（日本のマチュピチュ！雲海に浮かぶ天空の城）',
        timing: '通年（雲海シーズン：9月下旬〜12月上旬の早朝、特に10月〜11月）',
        desc: '完存する山城石垣としては全国屈指の規模を誇る「竹田城跡（国の史跡・虎臥城）」。対岸の朝来山中腹にある「立雲峡（りつうんきょう）」展望台から望む、円山川の朝もや（雲海）に浮かぶ竹田城の絶景。城下町の寺町通り。',
        spots: '竹田城跡（天守台・南千畳・本丸）、立雲峡（第1〜第3展望台）、竹田城下町（寺町通り・竹田まちなかの館）',
        access: 'JR播但線「竹田駅」下車。北近畿豊岡道「和田山IC」より車約10分。',
        tip: '雲海が発生しやすい条件は「前日と当日の寒暖差が大きい晴天の早朝（日の出〜朝8時頃）」で、立雲峡第1展望台へは登山口から徒歩約30分で到達できます。'
      },
      {
        key: 'ikuno_silver_mine_heritage_stay',
        title: '2. 生野銀山〜鉱山町・あさご芸術の森（800年の歴史を誇る巨大地下迷宮）',
        timing: '通年（坑道内は年間を通じて約13℃と夏でも涼しい）',
        desc: '織田信長・豊臣秀吉・徳川家康の直轄鉱山として栄えた「史跡 生野銀山」。全長約350kmに及ぶ坑道のうち約1kmを歩く観光坑道（近代鉱山・江戸時代手掘りゾーン）。赤瓦と生野石の鉱山町情景。巨大ダム湖畔のあさご芸術の森。',
        spots: '史跡 生野銀山（観光坑道・鉱山資料館・超スーパー地下アイドルGIN48）、生野鉱山町（甲社宅・志村喬記念館）、あさご芸術の森美術館',
        access: 'JR播但線「生野駅」よりバス・タクシー約10分。播但連絡道「生野IC」より約10分。',
        tip: '生野銀山の観光坑道内にはマネキン人形の鉱夫たち「GIN48」が配置されており、それぞれのプロフィールや歌がSNSで話題を呼んでいます。'
      },
      {
        key: 'tajima_beef_iwatsu_negi_stay',
        title: '3. 日本三大和牛の素牛「但馬牛」＆幻の「岩津ねぎ」（冬の極上鍋とステーキ）',
        timing: '通年（岩津ねぎ販売期間：11月下旬〜3月下旬）',
        desc: '神戸牛や松阪牛・近江牛など全国のブランド和牛のルーツである最高峰黒毛和牛「但馬牛（たじまぎゅう）」。甘みととろけるような柔らかさが自慢の日本三大葱「岩津ねぎ」。但馬牛と岩津ねぎをたっぷりと使ったすき焼き。',
        spots: '道の駅但馬のまほろば（朝来の特産品販売）、竹田城下町の町家フレンチ・和食処',
        access: '朝来市全域。',
        tip: '岩津ねぎは青葉から白根まで余すところなく食べられ、加熱するとトロリとした甘みが増すため、但馬牛とのすき焼きは冬の究極の贅沢です。'
      }
    ]
  },
  {
    slug: 'nagasaki-goto-islands-fukue-church-stay',
    badge: 'GOTO ISLANDS & HERITAGE GUIDE',
    title: '【長崎・五島列島（福江島＆上五島）】世界遺産潜伏キリシタン教会群・高浜ビーチ＆五島うどん宿 完全ガイド',
    metaDesc: '西海の祈りと碧き海・長崎五島列島エリア完全特化！世界遺産「長崎と天草地方の潜伏キリシタン関連遺産（頭ヶ島天主堂・江上天主堂・堂崎天主堂）」、日本一美しい白砂「高浜海水浴場」、名物「五島うどん・幻の五島牛宿」を徹底解説。',
    heroDesc: 'エメラルドグリーンの東シナ海に浮かぶ祈りの島々「五島列島（福江島・上五島）」。海辺や岬に佇む美しいレンガ造り・石造りの教会群。日本一の美しさを誇る高浜ビーチ。椿油を練り込んだ喉越しの良い日本三大うどん「五島手延うどん」と幻の五島牛を味わう旅。',
    categoryKey: 'nagasaki-goto-islands-fukue-church-stay',
    areaGuides: [
      {
        key: 'fukue_goto_resort_hotel_stay',
        title: '1. 福江島〜堂崎天主堂・高浜海水浴場・鬼岳（祈りの歴史とエメラルドの海）',
        timing: '通年（夏の海水浴・春〜秋の教会巡りドライブ）',
        desc: '五島列島最大の島「福江島」。赤レンガ造りの美しい「堂崎天主堂」。日本一美しい白砂とエメラルドグリーンの遠浅グラデーションが広がる「高浜海水浴場」。芝生に覆われた臼状の火山「鬼岳（おんだけ・満天の星空）」。大瀬崎断崖と灯台。',
        spots: '堂崎天主堂、高浜海水浴場（日本の渚百選）、鬼岳（鬼岳天文台）、大瀬崎灯台（日本の夕陽百選）、武家屋敷通り',
        access: '長崎空港または福岡空港より飛行機で約30〜40分（五島つばき空港）。長崎港よりジェットフォイルで約85分。',
        tip: '「大瀬崎灯台」の展望デッキから望む東シナ海に沈む夕陽は、断崖絶壁に打ち寄せる白波と相まって息を呑む絶景です。'
      },
      {
        key: 'kamigoto_church_bay_stay',
        title: '2. 上五島（新上五島町）〜頭ヶ島天主堂・青砂ヶ浦天主堂（世界遺産の石造り教会）',
        timing: '通年（教会見学は事前連絡・マナー遵守）',
        desc: '世界文化遺産に登録された全国的にも珍しい石造りの「頭ヶ島（かしらがしま）天主堂（花の御堂）」。国指定重要文化財「青砂ヶ浦天主堂」。教会が立ち並ぶ穏やかな入江。矢堅目の奇岩と東シナ海の塩作り。',
        spots: '世界遺産 頭ヶ島天主堂、青砂ヶ浦天主堂、矢堅目公園（矢堅目の塩本舗）、奈良尾のアコウ樹（国天然記念物）',
        access: '福江港より高速船で約30〜45分（奈良尾港・有川港）、または長崎港・佐世保港よりフェリー・高速船。',
        tip: '頭ヶ島天主堂の内部には五島特産の椿の花をモチーフにした彫刻（花十字紋）が無数に施されており、可憐で温かな祈りの空間が広がります。'
      },
      {
        key: 'goto_udon_beef_seafood_stay',
        title: '3. 日本三大うどん「五島手延うどん」＆幻の五島牛（椿油とあごだしの伝統）',
        timing: '通年（冬の熱々地獄炊き・夏の冷やしぶっかけ）',
        desc: '五島特産の椿油を塗って熟成させながら延ばす細麺の「五島手延うどん」。茹でたての麺を大鍋から直接すくい、焼きあご（トビウオ）出汁のつゆや生卵で食べる「地獄炊き」。年間出荷頭数が少なく幻と呼ばれる「五島牛」ステーキ。',
        spots: 'うどん茶屋 遊麺（有川）、五島牛指定焼肉店、五島市内の割烹・寿司店',
        access: '五島列島全域。',
        tip: '「地獄炊きうどん」は椿油が練り込まれているため煮崩れせず、ツルツルとした喉越しとコシの強さがあご出汁と完璧にマッチします。'
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

for (const cfg of microWave21Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated micro tourist hub page: /${cfg.slug}`);
}
