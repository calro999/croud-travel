const fs = require('fs');
const path = require('path');

const sakeTourismConfigs = [
  {
    slug: 'japan-sake-brewery-auberge-pairing-stay',
    badge: 'SAKE AUBERGE & PAIRING GUIDE',
    title: '【酒蔵オーベルジュ＆日本酒ペアリング宿】蔵元直営・極上和食マリアージュ 完全ガイド',
    metaDesc: '酒蔵に泊まる至福！全国の酒蔵直営オーベルジュ＆極上日本酒ペアリング宿完全特化！長野諏訪、福島会津、秋田、京都伏見、兵庫灘、搾りたて生原酒と会席料理の至高のマリアージュ、酒蔵見学・テイスティング付き名宿を徹底解説。',
    heroDesc: '酒造りの歴史と息吹が息づく酒蔵の敷地で目覚める「酒蔵オーベルジュ」。熟練の杜氏が丹精込めて醸した限定酒や搾りたて生酒を、料理長が腕を振るう一皿一皿に合わせて味わうペアリングディナー。芳醇な吟醸香と伝統の木造建築に抱かれる大人の極上ステイへ。',
    categoryKey: 'japan-sake-brewery-auberge-pairing-stay',
    areaGuides: [
      {
        key: 'shinshu_suwa_sake_auberge',
        title: '1. 長野・諏訪五蔵〜上諏訪温泉（甲州街道わずか500mに並ぶ5つの名醸蔵）',
        timing: '通年（秋のひやおろし・春の蔵開き・諏訪湖の花火）',
        desc: '甲州街道沿いわずか500mの間に「真澄・横笛・本金・麗人・舞姫」の5軒の銘醸酒蔵が密集する全国唯一の酒処「諏訪五蔵」。「ごくらくセット（専用グラス＆ポーチ）」を片手に各蔵をめぐる贅沢な呑み歩き。諏訪湖を望む上諏訪温泉の老舗湯宿。',
        spots: '諏訪五蔵（宮坂醸造・真澄、伊東酒造、酒ぬのや本金酒造、麗人酒造、舞姫）、片倉館（千人風呂）、諏訪大社上社・下社、諏訪湖間欠泉センター',
        access: 'JR中央本線「上諏訪駅」下車徒歩約5〜10分。中央道「諏訪IC」より約15分。',
        tip: '上諏訪駅構内には珍しい「足湯」が設置されており、電車を待ちながら諏訪湖の天然温泉に浸かってほろ酔い気分を冷ますことができます。'
      },
      {
        key: 'aizu_sake_craft_inn',
        title: '2. 福島・会津若松〜東山温泉・芦ノ牧温泉（全国新酒鑑評会金賞数日本一の聖地）',
        timing: '通年（冬の初しぼり・秋のひやおろし・桜咲く鶴ヶ城）',
        desc: '全国新酒鑑評会で金賞受賞数日本一を連続達成した「美酒王国ふくしま」の中心地・会津若松。「飛露喜」「写楽」「会津中将」「末廣」など全国の日本酒ファンが垂涎する銘酒が勢ぞろい。開湯1300年の歴史を誇る東山温泉の数寄屋造り料亭旅館。',
        spots: '末廣酒造 嘉永蔵（蔵見学＆カフェ）、鶴ヶ城（会津若松城）、東山温泉（向瀧・御宿東鳳）、七日町通り（酒蔵・白壁土蔵）',
        access: 'JR磐越西線「会津若松駅」より周遊バス「あかべぇ」または「ハイカラさん」で約15分。',
        tip: '末廣酒造の嘉永蔵では、木造三階建ての歴史的酒蔵を見学できるほか、仕込み水で淹れた珈琲や酒粕プリンをクラシックな喫茶室で楽しめます。'
      },
      {
        key: 'akita_sake_auberge_retreat',
        title: '3. 秋田・美酒王国あきた〜横手・湯沢・大曲（新政・雪の茅舎と極上比内地鶏）',
        timing: '通年（冬の雪見酒・秋の新米新酒・初夏のきりたんぽ鍋）',
        desc: '寒冷な気候ときれいな雪解け水、卓越した山内杜氏の技が生む秋田の銘酒。「新政」「雪の茅舎」「両関」「山本」など先鋭的かつ芳醇な地酒の数々。きりたんぽ鍋や比内地鶏、ハタハタのしょっつる鍋との完璧な相性を楽しむ山岳リゾートステイ。',
        spots: '秋田酒類製造、両関酒造（国の登録有形文化財）、日の丸醸造、角館武家屋敷通り、乳頭温泉郷',
        access: '秋田新幹線「秋田駅」「大曲駅」「角館駅」接続。秋田空港よりレンタカー。',
        tip: '秋田の酒蔵直営レストランでは、酒粕を使った自家製チーズや味噌漬けなど、日本酒との相性を極限まで突き詰めたペアリングプレートが提供されます。'
      }
    ]
  },
  {
    slug: 'all-inclusive-sake-free-flow-tasting-bar-stay',
    badge: 'SAKE FREE FLOW & TASTING BAR GUIDE',
    title: '【日本酒飲み放題＆利き酒Bar完備温泉宿】インクルーシブ・銘酒ラウンジ 完全ガイド',
    metaDesc: '追加料金なしで全国の銘酒を心ゆくまで！日本酒インクルーシブ＆利き酒バー完備温泉宿完全特化！新潟越後湯沢、山形天童、群馬草津、石川加賀温泉、厳選10〜30種の地酒サーバー、湯上がりラウンジ酒、おつまみペアリングを徹底解説。',
    heroDesc: '湯上がりの火照った身体に、冷えた大吟醸をクイッと一杯。館内ラウンジにズラリと並ぶ銘酒サーバーや利き酒Bar。「日本酒飲み放題＆オールインクルーシブ温泉宿」。財布を気にせず、各地の純米大吟醸や季節のひやおろしを心ゆくまで飲み比べ。贅沢な大人の湯浴みへ。',
    categoryKey: 'all-inclusive-sake-free-flow-tasting-bar-stay',
    areaGuides: [
      {
        key: 'echigo_yuzawa_sake_server_stay',
        title: '1. 新潟・越後湯沢〜ぽんしゅ館・地酒サーバー宿（米どころ新潟の純米酒天国）',
        timing: '通年（冬の雪見露天酒・初秋の新米新酒）',
        desc: '上越新幹線で東京から約70分の温泉地「越後湯沢」。駅構内の「ぽんしゅ館」には県内約90蔵・100種類以上の利き酒マシンがズラリ。宿泊施設でもラウンジに日本酒サーバーが設置され、「八海山」「久保田」「鶴齢」などが無料で心ゆくまで楽しめる宿が充実。',
        spots: '越後湯沢駅 ぽんしゅ館（唎酒番所・酒風呂「湯の沢」）、湯沢温泉街、白瀧酒造（上善如水）、魚沼の里',
        access: '上越新幹線「越後湯沢駅」下車すぐ。関越道「湯沢IC」より約5分。',
        tip: 'ぽんしゅ館では500円でコイン5枚とお猪口をもらい、壁一面のサーバーから好きな銘柄を試飲でき、全国各地の塩や味噌もおつまみとして選べます。'
      },
      {
        key: 'yamagata_tendo_sake_tasting_bar',
        title: '2. 山形・天童温泉〜出羽桜・十四代利き酒ラウンジ（吟醸王国山形の銘酒バー）',
        timing: '通年（春の桜・秋の芋煮会・冬の将棋まつり）',
        desc: '将棋駒の生産日本一と名湯で知られる「天童温泉」。吟醸酒のパイオニア「出羽桜酒造」のお膝元。天童温泉のハイクラス宿では、山形県産地酒30種以上が揃うバーラウンジや、夕食時の日本酒フリーフロープランが大好評。',
        spots: '出羽桜酒造 出羽桜美術館、天童温泉街（足湯・手湯）、山寺（宝珠山立石寺）、道の駅天童温泉',
        access: '山形新幹線「天童駅」よりタクシー約5分。山形空港より車約10分。',
        tip: '出羽桜美術館では、李朝の陶磁器や近代工芸品とともに、登録有形文化財の蔵造りの建物と美しい日本庭園を鑑賞できます。'
      },
      {
        key: 'kaga_onsen_sake_lounge_stay',
        title: '3. 石川・加賀温泉郷（山代・山中）〜北陸銘酒フリーフロー（九谷焼のお猪口で乾杯）',
        timing: '通年（冬のズワイガニ・秋ののどぐろ会席）',
        desc: '開湯1300年の名湯「山代温泉」「山中温泉」。加賀百万石の文化が育んだ銘酒「菊姫」「手取川」「天狗舞」「常きげん」。色鮮やかな九谷焼や山中塗のお猪口を選んで楽しむ利き酒ラウンジ。名物・治部煮や海の幸会席との極上マリアージュ。',
        spots: '山代温泉 古総湯、山中温泉 鶴仙渓遊歩道、鹿野酒造（常きげん）、九谷焼窯跡展示館',
        access: '北陸新幹線「加賀温泉駅」より周遊バス「キャン・バス」で約10〜15分。',
        tip: '山代温泉のシンボル「古総湯」は明治時代の総湯を忠実に復元した木造建築で、ステンドグラスと九谷焼のタイルに囲まれた風情ある空間で源泉かけ流しを味わえます。'
      }
    ]
  },
  {
    slug: 'pure-spring-water-sake-brewing-source-onsen-stay',
    badge: 'SAKE BREWING SPRING WATER ONSEN GUIDE',
    title: '【名水百選・酒の仕込み水が湧く秘湯宿】清流と伏流水・美肌温泉 完全ガイド',
    metaDesc: '名酒が生まれる土地には奇跡の名水と極上温泉がある！全国の日本名水百選・酒造りの仕込み水と美肌温泉宿完全特化！富山黒部・立山連峰伏流水、静岡富士山伏流水、島根奥出雲、熊本阿蘇名水、清冽な天然水風呂と美肌湯を徹底解説。',
    heroDesc: '銘酒の命である「清冽な仕込み水」。雪解け水が幾重もの地層で磨かれた日本名水百選の湧水地には、奇跡のように豊かな温泉が湧き出します。口に含むと甘やかな伏流水で喉を潤し、名水で仕込まれた極上の地酒を嗜み、肌を包み込む柔らかな源泉に浸かる至高の癒やし旅へ。',
    categoryKey: 'pure-spring-water-sake-brewing-source-onsen-stay',
    areaGuides: [
      {
        key: 'tateyama_kurobe_pure_water_stay',
        title: '1. 富山・黒部＆立山連峰〜宇奈月温泉（北アルプスの雪解け天然水と銘酒銀盤）',
        timing: '通年（春の新緑・夏の黒部峡谷・秋の紅葉）',
        desc: '北アルプス3,000m級の山々から湧き出る清冽な雪解け水「黒部川扇状地湧水群（名水百選）」。その伏流水で醸される「銀盤」「皇国晴（幻の瀧）」。弱アルカリ性単純泉で日本有数の透明度を誇る宇奈月温泉の湯。',
        spots: '黒部川扇状地湧水群、生地（いくじ）の湧水（清水）めぐり、皇国晴酒造、宇奈月温泉やまびこ遊歩道',
        access: '北陸新幹線「黒部宇奈月温泉駅」より富山地方鉄道乗り換え約25分。',
        tip: '黒部市生地地区では「清水（しょうず）」と呼ばれる自噴湧水が街の各所に湧き出ており、湧水巡り用のマイボトルを持って散策するのがおすすめです。'
      },
      {
        key: 'fuji_spring_water_sake_stay',
        title: '2. 静岡＆山梨・富士山麓〜忍野八海・富士宮（数百年磨かれた溶岩伏流水の恵み）',
        timing: '通年（澄んだ冬の富士山展望・秋の紅葉）',
        desc: '富士山に降った雪や雨が溶岩層で数十年〜数百年かけて濾過された「忍野八海」と富士宮の湧水。その名水で醸される「高砂」「白隠正宗」「初亀」のキレ味。富士山を目の前に望む絶景露天風呂と伏流水の水風呂。',
        spots: '忍野八海（国の天然記念物）、富士山本宮浅間大社 湧玉池、富士高砂酒造、富士山パノラマ温泉',
        access: '東名高速「富士IC」または中央道「河口湖IC」より車約20分。',
        tip: '富士山本宮浅間大社の境内にある「湧玉池」は特別天然記念物に指定されており、毎秒3.6トンもの富士山伏流水が年中一定の水温（約13℃）で湧き出ています。'
      },
      {
        key: 'shimane_okuizumo_sake_spring_stay',
        title: '3. 島根・奥出雲＆玉造温泉〜日本酒発祥の地（斐伊川の清流と神話の美肌湯）',
        timing: '通年（秋の新米収穫期・冬の松葉ガニ）',
        desc: '『古事記』のスサノオノミコトが八岐大蛇を退治する際に酒を醸したと伝わる「日本酒発祥の地・島根」。「仁多米」の産地・奥出雲の酒蔵「奥出雲酒造」。1300年前から「神の湯」と称えられた玉造温泉の硫酸塩・塩化物泉。',
        spots: '佐香神社（酒造りの神・松尾神社）、玉造温泉街（湯薬師広場・足湯）、奥出雲酒造、出雲大社',
        access: 'JR山陰本線「玉造温泉駅」より車約5分。出雲空港より車約30分。',
        tip: '玉造温泉の源泉は温泉水自体が高級化粧水並みの成分バランスを持っており、温泉街の美肌スポットで専用ボトルに源泉を詰めて持ち帰ることができます。'
      }
    ]
  },
  {
    slug: 'sake-lees-bath-fermentation-beauty-detox-stay',
    badge: 'SAKE LEES BATH & FERMENTATION GUIDE',
    title: '【酒粕風呂・日本酒風呂＆発酵美肌デトックス宿】杜氏の手の白さ・糀スパ 完全ガイド',
    metaDesc: '杜氏の手の美しさの秘密！酒粕風呂・日本酒風呂＆発酵料理デトックス宿完全特化！新潟松之山、京都丹後、栃木日光、純米酒の天然アミノ酸とコウジ酸がもたらす全身しっとり美肌体験、塩糀・甘酒の発酵朝食バイキング、温活スパを徹底解説。',
    heroDesc: '「酒造りに携わる杜氏の手は、なぜ白くすべすべなのか」。その秘密は、米と糀が醸し出す天然アミノ酸とコウジ酸。湯船にたっぷりと注がれる純米酒や、酒粕を溶かしたミルキーな酒粕風呂。身体の芯から温まり、発酵美食で体内から美しく整うデトックスステイへ。',
    categoryKey: 'sake-lees-bath-fermentation-beauty-detox-stay',
    areaGuides: [
      {
        key: 'matsunoyama_sake_bath_stay',
        title: '1. 新潟・松之山温泉＆十日町〜日本三大薬湯（純米酒投入風呂と発酵薬膳）',
        timing: '通年（冬の豪雪雪見風呂・春の新緑棚田）',
        desc: '草津・有馬と並ぶ日本三大薬湯「松之山温泉」。約1200万年前の化石海水分が湧き出る超濃厚な塩化物泉。地元の銘酒「松乃井」「雪男」の純米原酒を贅沢に湯船に注ぎ入れる日本酒風呂。山菜や発酵調味料を使った里山薬膳料理。',
        spots: '松之山温泉街（里山ビジターセンター）、美人林（樹齢約100年のブナ林）、星峠の棚田、十日町銘醸（松乃井酒造場）',
        access: '北越急行ほくほく線「まつだい駅」よりバス約20分。関越道「塩沢石打IC」より約45分。',
        tip: '松之山温泉の泉温は90℃以上あり、温泉熱を利用した「低温調理」で作られる温泉卵や、地元の山菜を発酵熟成させた里山料理が絶品です。'
      },
      {
        key: 'kyoto_tango_sake_ferment_stay',
        title: '2. 京都・丹後＆夕日ヶ浦温泉〜木下酒造「玉川」（英国人杜氏の酒粕美肌エステ）',
        timing: '通年（冬の松葉ガニ・初夏の夕日パノラマ）',
        desc: '日本酒界で話題の英国人杜氏フィリップ・ハーパー氏が醸す銘酒「玉川（木下酒造）」のふるさと丹後。純米酵母と酒粕をふんだんに使った酒粕トリートメントや酒風呂。夕日ヶ浦温泉の弱アルカリ性美人の湯と丹後海鮮発酵会席。',
        spots: '木下酒造（玉川の酒蔵見学）、夕日ヶ浦温泉（夕日の丘・ビーチブランコゆらり）、天橋立、伊根の舟屋',
        access: '京都丹後鉄道「夕日ヶ浦木津温泉駅」下車。京都縦貫道「与謝天橋立IC」より約40分。',
        tip: '木下酒造では、昔ながらの「生酛（きもと）造り」による力強い純米酒のほか、夏限定の「アイスブレーカー」など個性豊かな地酒を蔵元限定で購入できます。'
      },
      {
        key: 'nikko_tochigi_sake_spa_stay',
        title: '3. 栃木・日光＆鬼怒川温泉〜地酒の湯＆湯波発酵モーニング（日光連山の名水仕込み）',
        timing: '通年（秋の紅葉・冬の雪見風呂・世界遺産参拝）',
        desc: '世界遺産・日光の社寺の門前町。男体山の伏流水で仕込まれる名酒「日光誉」「四季桜」。鬼怒川温泉の渓谷美を望む露天風呂での日本酒投入風呂。日光名物「日光湯波」や自家製米糀の甘酒、塩糀漬け魚の発酵朝食。',
        spots: '日光東照宮・日光二荒山神社、渡邊佐平商店（酒蔵見学・日光誉）、鬼怒川温泉郷、中禅寺湖',
        access: '東武特急スペーシア「東武日光駅」「鬼怒川温泉駅」直通約110分。',
        tip: '渡邊佐平商店では、江戸時代末期の創業以来受け継がれてきた仕込み蔵の見学と、純米酒のきき酒体験が無料で楽しめます（要事前確認）。'
      }
    ]
  },
  {
    slug: 'japan-historic-sake-highway-brewery-walk-stay',
    badge: 'HISTORIC SAKE HIGHWAY GUIDE',
    title: '【日本銘酒街道・酒蔵の町並み巡り宿】灘・西条・伏見・魚沼・諏訪街道 完全ガイド',
    metaDesc: '白壁土蔵と杉玉が揺れる歴史の酒蔵通り！日本屈指の銘酒街道巡り＆温泉宿完全特化！兵庫灘五郷（有馬温泉）、広島西条酒蔵通り、京都伏見酒蔵水辺散策、新潟魚沼銘酒街道、長野諏訪甲州街道、歴史的蔵元見学と門前町ステイを徹底解説。',
    heroDesc: '軒先に掲げられた青々とした「杉玉」、黒板塀と白壁土蔵、赤レンガの煙突が連なる「酒蔵の町並み」。江戸時代から日本の酒造りを牽引してきた灘五郷、赤瓦の酒蔵が並ぶ西条、十石舟が往く京都伏見。歴史ある酒蔵をそぞろ歩き、名湯の宿で酔いしれる旅へ。',
    categoryKey: 'japan-historic-sake-highway-brewery-walk-stay',
    areaGuides: [
      {
        key: 'nada_gogou_arima_onsen_stay',
        title: '1. 兵庫・灘五郷〜有馬温泉（日本最大の酒処と日本最古の名湯）',
        timing: '通年（蔵開きシーズン：1月〜3月・秋の灘の酒まつり）',
        desc: '全国の清酒生産量の約25%を誇る日本最大の酒処「灘五郷（西郷・御影郷・魚崎郷・西宮郷・今津郷）」。宮水と山田錦、六甲おろしが生む「灘の男酒」。「白鶴酒造資料館」や「菊正宗酒造記念館」。六甲山を越えた先にある日本最古の温泉・有馬温泉の金泉銀泉。',
        spots: '白鶴酒造資料館、菊正宗酒造記念館、沢の鶴資料館、神戸酒心館（福寿）、有馬温泉（金の湯・銀の湯）',
        access: '阪神電車各駅（御影駅・住吉駅・魚崎駅等）徒歩圏内。有馬温泉へは六甲有馬ロープウェーまたはバスで約30分。',
        tip: '灘五郷の酒蔵記念館では、昔の酒造り道具の展示だけでなく、蔵元限定の生原酒の試飲や酒スイーツ（酒粕ソフトクリーム）が楽しめます。'
      },
      {
        key: 'hiroshima_saijo_sake_town_stay',
        title: '2. 広島・西条酒蔵通り〜東広島（赤瓦と白壁・赤レンガ煙突が続く日本三大酒処）',
        timing: '通年（10月上旬の「酒まつり」・冬の新酒造り）',
        desc: '灘・伏見と並び称される日本三大酒処のひとつ「西条」。「酒都西条」を象徴する赤レンガ煙突と白壁なまこ壁の酒蔵がJR西条駅周辺に7軒立ち並ぶ「西条酒蔵通り」。「賀茂鶴」「白牡丹」「福美人」。「美酒鍋（びしゅなべ）」を味わう旅。',
        spots: '西条酒蔵通り（賀茂鶴酒造・福美人酒造・白牡丹酒造等7蔵）、くぐり門、西条酒蔵通り観光案内所、仏並温泉',
        access: 'JR山陽本線「西条駅」南口すぐ。広島空港よりリムジンバス・連絡バスで約25分。',
        tip: '各酒蔵の前には「仕込み水（名水）」を自由に汲める水汲み場が設けられており、蔵ごとに硬度や味わいが微妙に異なる名水を飲み比べできます。'
      },
      {
        key: 'kyoto_fushimi_sake_canal_stay',
        title: '3. 京都・伏見酒蔵水辺散策〜十石舟・名水伏水（柳並木と白壁土蔵の風情）',
        timing: '通年（春の十石舟桜クルーズ・新緑・秋の紅葉）',
        desc: '宇治川派流の運河沿いに黒板塀と白壁土蔵が連なる「伏見酒蔵の町並み」。桃山丘陵から湧き出る「伏水（中軟水）」が生むまろやかな「伏見の女酒」。「月桂冠大倉記念館」「キザクラカッパカントリー」。川沿いをゆったり進む観光船「十石舟」。',
        spots: '月桂冠大倉記念館、キザクラカッパカントリー、十石舟乗船場、伏見十名水（御香宮神社の御香水）、寺田屋',
        access: '京阪本線「中書島駅」または「伏見桃山駅」より徒歩約5〜10分。',
        tip: '春と秋に運航される「十石舟」は、柳が揺れる濠川を酒蔵を眺めながら進む風情満点の水上散策で、事前予約がおすすめです。'
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
  keywords: ["${config.slug}", "日本酒旅行", "酒蔵巡り", "地酒ペアリング", "温泉宿", "楽天トラベル"],
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

export default function SakeTourismHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = ${JSON.stringify(config.areaGuides, null, 2)};

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-950 via-stone-900 to-emerald-950 text-white p-8 md:p-14 shadow-xl border border-amber-300/30">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-400 to-yellow-300 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
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

      {/* テーマ別徹底ガイド＆厳選宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-amber-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-amber-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    🍶 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-amber-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめ酒蔵＆見どころ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
                  <span className="font-bold text-stone-950 block text-[11px]">🚅 アクセス＆蔵巡り目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1.5">
                  <span className="font-bold text-emerald-950 block text-[11px]">💡 地酒体験を満喫するコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-amber-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-amber-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                    銘酒厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-amber-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-amber-50/50 border-b border-amber-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-amber-800/40 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-stone-900 line-clamp-2">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-700 to-stone-800 hover:from-amber-600 hover:to-stone-700 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-amber-950 bg-white hover:bg-amber-50 border border-amber-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
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

for (const cfg of sakeTourismConfigs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated sake tourism hub page: /${cfg.slug}`);
}
