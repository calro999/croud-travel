// scripts/upgrade_20_killer_jsons_and_fix_notes.js
const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');
const ROOT_DIR = path.join(__dirname, '..');

// Load all 4 live data files
const live1 = JSON.parse(fs.readFileSync(path.join(__dirname, '5_killer_articles_live_data.json'), 'utf8'));
const live2 = JSON.parse(fs.readFileSync(path.join(__dirname, 'new_5_killer_articles_live_data.json'), 'utf8'));
const live3 = JSON.parse(fs.readFileSync(path.join(__dirname, 'batch_276_280_live_data.json'), 'utf8'));
const live4 = JSON.parse(fs.readFileSync(path.join(__dirname, 'batch_281_285_live_data.json'), 'utf8'));

const combinedLive = { ...live1, ...live2, ...live3, ...live4 };

// Metadata enrichment for the 20 killer articles
const metaEnrich = {
  "autumn-saga-balloon-karatsukunchi-hotels-guide": {
    recommended_for: ["アジア最大級の熱気球大会「佐賀インターナショナルバルーンフェスタ」で早朝6時半の一斉離陸を見たい方", "ユネスコ無形文化遺産「唐津くんち」の14台の曳山巡行と玄界灘の活イカ・佐賀牛を堪能したい方", "古湯温泉の「ぬる湯」や嬉野温泉の「日本三大美肌の湯」で秋旅の疲れを癒やしたい方"],
    nearby_tourist_spots: ["嘉瀬川河川敷（バルーンさが駅）", "唐津神社・唐津城", "吉野ヶ里歴史公園", "祐徳稲荷神社"],
    nearby_gourmet: ["A5等級佐賀牛ステーキ・しゃぶしゃぶ", "呼子の活イカ造り・玄界灘クエ鍋", "嬉野温泉湯どうふ・シシリアンライス"],
    hot_spring_info: "古湯温泉の38度前後のぬる湯源泉、唐津湾を望む天然温泉、武雄・嬉野の美肌重曹泉を完備",
    parking_info: "バルーンフェスタ・唐津くんち期間中は会場周辺の交通規制が厳しいため、佐賀駅・唐津駅・温泉宿に車を預けてJR移動が鉄則",
    meal_availability: "1泊2食付き（佐賀牛会席・玄界灘海鮮会席・和洋ビュッフェ）または朝食付き",
    family_friendly: "キッズスペースや大浴場、砂浜・松原直結のリゾートホテルがあり家族連れからカップルまで快適",
    editor_tip: "佐賀バルーンフェスタの午前の競技（7:00開始）は、風が穏やかな早朝ほど開催確率が高まります。佐賀駅前のホテルから朝6時台のJR長崎本線に乗り、臨時駅「バルーンさが駅」で降りるのが渋滞知らずの最短ルートです。"
  },
  "autumn-winter-chichibu-yomatsuri-nagatoro-hotels-guide": {
    recommended_for: ["11月の「長瀞紅葉まつり（月の石もみじ公園ライトアップ）」と12月2日・3日の「秩父夜祭」を満喫したい方", "荒川ライン下りの岩畳や宝登山神社、三峯神社の紅葉ドライブを楽しみたい方", "秩父の古民家・農家屋敷での囲炉裏料理や、荒川渓谷を望む露天風呂に浸かりたい方"],
    nearby_tourist_spots: ["長瀞岩畳・月の石もみじ公園", "秩父神社・秩父まつり会館", "宝登山神社・三峯神社", "秩父ミューズパーク"],
    nearby_gourmet: ["秩父名物わらじかつ丼・豚みそ丼", "くるみ汁そば・おっきりこみ", "長瀞鮎めし・囲炉裏ちゃんこ鍋"],
    hot_spring_info: "秩父温泉郷の美肌湯、貸切露天風呂・五右衛門風呂、長瀞渓谷を望む展望大浴場を完備",
    parking_info: "長瀞紅葉まつりや秩父夜祭当日は市内が混雑するため、宿の無料駐車場に車を預けて秩父鉄道・徒歩での移動が快適",
    meal_availability: "1泊2食付き（秩父里山会席・囲炉裏炭火焼き会席・ちゃんこ鍋）",
    family_friendly: "全館貸切風呂無料の農家屋敷宿や長瀞駅徒歩3分の老舗宿があり、三世代・子連れ旅行に最適",
    editor_tip: "長瀞の「月の石もみじ公園」ライトアップ（16:00〜21:00）と「宝登山神社」の紅葉ライトアップは同じ日にハシゴ可能です。夕暮れ時に月の石もみじ公園を歩き、その後に宝登山神社へ向かうと幻想的な社殿紅葉を楽しめます。"
  },
  "winter-crab-season-matsuba-echizen-onsen-hotels-guide": {
    recommended_for: ["11月6日に漁が解禁される「黄色タグ付き越前ガニ」と「青タグ・緑タグ付き活松葉ガニ」を本場の料理宿で味わいたい方", "12月末までの約2ヶ月間しか漁期がない希少な雌ガニ「せいこがに（セコガニ）」の内子・外子を堪能したい方", "城崎温泉の7つの外湯めぐりや、あわら・三国・皆生温泉の日本海展望露天風呂を楽しみたい方"],
    nearby_tourist_spots: ["城崎温泉七つの外湯・玄武洞", "東尋坊・曹洞宗大本山永平寺", "水木しげるロード・大山・足立美術館"],
    nearby_gourmet: ["活松葉ガニ・越前ガニフルコース（刺し・焼き・茹で・鍋）", "せいこがに（香箱ガニ・親ガニ）甲羅盛り", "但馬牛・若狭牛・のどぐろ"],
    hot_spring_info: "開湯1300年の城崎温泉、福井あわら・三国温泉の日本海夕日露天、鳥取皆生温泉の塩化物泉（美肌の湯）",
    parking_info: "11月は山陰・北陸ともに積雪リスクがほぼなく、ノーマルタイヤで快適にアクセス可能（各宿に無料駐車場＆駅送迎あり）",
    meal_availability: "1泊2食付き（タグ付きブランド活ガニフルコース・蟹＆和牛食べ比べ会席）",
    family_friendly: "外湯めぐりパス付きの宿やラウンジサービス充実の大型旅館があり、夫婦・記念日・家族旅行に最適",
    editor_tip: "11月6日の解禁直後から12月上旬までは、本格的な雪が降る前にノーマルタイヤで山陰・北陸の港へ行き、初セリ直後の活きの良い松葉ガニ・越前ガニと紅葉（永平寺や大山など）を同時に楽しめる年間最高のタイミングです。"
  },
  "autumn-kyoto-momiji-lightup-eikando-kiyomizu-hotels-guide": {
    recommended_for: ["「秋はもみじの永観堂」と称される永観堂（禅林寺）の約3,000本の紅葉ライトアップや清水寺の夜間特別拝観を巡りたい方", "南禅寺・天授庵・高台寺など東山エリアの紅葉名所へ地下鉄や徒歩でスマートにアクセスしたい方", "紅葉散策で歩いた後に、京都市内の天然温泉・大浴場や老舗の京懐石でゆっくり疲れを癒やしたい方"],
    nearby_tourist_spots: ["永観堂禅林寺・南禅寺・哲学の道", "清水寺・高台寺・圓徳院", "嵐山・天龍寺・渡月橋", "東福寺・通天橋"],
    nearby_gourmet: ["南禅寺順正の湯豆腐・京懐石", "錦市場食べ歩き・宇治抹茶パフェ", "京のおばんざい・生湯葉料理"],
    hot_spring_info: "京都駅・四条・嵐山エリアの天然温泉大浴場、貸切露天風呂、サウナ付きホテルを厳選",
    parking_info: "11月の京都市内は道路・駐車場ともに大混雑するため、京都駅または地下鉄駅直結・徒歩圏のホテルに荷物を預けて電車＋徒歩移動が鉄則",
    meal_availability: "1泊2食付き（本格京懐石・おばんざいビュッフェ）または和洋朝食ビュッフェ",
    family_friendly: "京都駅八条口からの無料送迎バスや地下鉄駅直結のホテルはベビーカー・シニア同伴でも移動がスムーズ",
    editor_tip: "永観堂や清水寺の夜間特別拝観は、開門直後（17:30〜18:30）が最も混み合います。先にホテル周辺で夕食を済ませ、19:30以降に現地へ向かうと入場待ちの列が短くなり、静かな夜の紅葉を堪能できます。"
  },
  "autumn-winter-shirakawago-okuhida-takayama-hotels-guide": {
    recommended_for: ["11月上旬〜中旬の世界遺産「白川郷」の合掌造り紅葉や、例年11月初旬に行われる「一斉放水」を見学したい方", "2階建てゴンドラ「新穂高ロープウェイ」から初冠雪の北アルプスと山腹の紅葉が織りなす『三段紅葉』を眺めたい方", "日本一の露天風呂数を誇る「奥飛騨温泉郷」の源泉掛け流し湯と、本場のA5等級「飛騨牛」朴葉味噌焼きを味わいたい方"],
    nearby_tourist_spots: ["白川郷合掌造り集落・城山天守閣展望台", "飛騨高山（さんまち通り・高山陣屋・宮川朝市）", "新穂高ロープウェイ・平湯大滝"],
    nearby_gourmet: ["A5等級飛騨牛ステーキ・朴葉味噌焼き・飛騨牛握り寿司", "高山ラーメン・五平餅・すったて汁", "奥飛騨の川魚（岩魚・ヤマメ）囲炉裏焼き"],
    hot_spring_info: "奥飛騨温泉郷（平湯・新平湯・新穂高）の豊富な源泉掛け流し大露天風呂、飛騨高山温泉の美肌湯・貸切風呂",
    parking_info: "高山・奥飛騨ともに各宿に無料駐車場完備。白川郷へは朝8時〜9時前のせせらぎ公園駐車場到着で渋滞回避",
    meal_availability: "1泊2食付き（A5飛騨牛づくし会席・囲炉裏炭火焼き・和洋ビュッフェ）",
    family_friendly: "貸切露天風呂無料の隠れ宿から大庭園を持つ高山グリーンホテルまで、カップル・家族全員が満足できるラインナップ",
    editor_tip: "飛騨高山から白川郷までは東海北陸道（飛騨清見IC〜白川郷IC）を使えば車で約50分です。高山の温泉宿に前泊し、翌朝7時台に出発して白川郷へ向かえば、観光バスが到着する前の朝靄の合掌造り集落を独り占めできます。"
  },
  "winter-mie-nabana-no-sato-illumination-nagashima-hotels-guide": {
    recommended_for: ["11月中旬〜12月上旬だけの絶景「鏡池の紅葉ライトアップ×200mの光のトンネル」をなばなの里で体験したい方", "オフィシャルホテルの宿泊特典（なばなの里入場券＆湯あみの島パス）を使ってVIP待遇でリゾートを満喫したい方", "桑名名物の「天然はまぐり」や松阪牛、大自然露天風呂「湯あみの島」を堪能したい方"],
    nearby_tourist_spots: ["なばなの里（光のトンネル・鏡池・ベゴニアガーデン）", "ナガシマスパーランド・湯あみの島", "三井アウトレットパーク ジャズドリーム長島", "六華苑・桑名城跡"],
    nearby_gourmet: ["桑名名物・天然はまぐりしゃぶしゃぶ＆焼き蛤", "A5松阪牛・伊勢海老・しぐれ茶漬け", "安永餅・アイスまんじゅう"],
    hot_spring_info: "日本最大級33,000平米の大自然露天風呂「長島温泉 湯あみの島」およびオフィシャルホテル専用温泉大浴場",
    parking_info: "オフィシャルホテル宿泊者はホテル専用駐車場と「なばなの里」直通無料バスを利用できるため渋滞・駐車料金の心配なし",
    meal_availability: "1泊2食付き（桑名蛤＆松阪牛会席・和洋中豪華ビュッフェ）または朝食付き",
    family_friendly: "遊園地・アウトレット・巨大温泉・イルミネーションがすべて揃い、カップルから三世代家族まで圧倒的な人気",
    editor_tip: "なばなの里の「鏡池（かがみいけ）」では、11月中旬〜12月上旬にかけて約300本のモミジが真っ赤に染まり、風のない夜には水面に一点の曇りもなく逆さ紅葉が映り込みます。イルミネーションと一緒に紅葉も見られる11月が年間ベストシーズンです。"
  },
  "autumn-winter-atami-kaijo-hanabi-momiji-onsen-hotels-guide": {
    recommended_for: ["11月・12月にも開催される「熱海海上花火大会」を、混雑知らずで客室バルコニーや展望露天風呂から観覧したい方", "「日本で最も遅い紅葉」として名高い『熱海梅園もみじまつり（11月中旬〜12月上旬）』を散策したい方", "首都圏から新幹線で約45分の熱海で、相模湾の金目鯛・伊勢海老とインフィニティ露天風呂を満喫したい方"],
    nearby_tourist_spots: ["熱海サンビーチ・熱海海上花火大会会場", "熱海梅園（もみじまつり・足湯）", "來宮神社（樹齢2100年大楠ライトアップ）", "MOA美術館"],
    nearby_gourmet: ["伊豆近海産・金目鯛の煮付け＆活造り", "駿河湾・相模湾の伊勢海老・鮑踊り焼き", "熱海プリン・温泉まんじゅう・干物"],
    hot_spring_info: "日本三大古泉「走り湯」を含む熱海温泉の美肌塩化物泉、海と一体化するインフィニティ露天風呂「オーシャンスパ Fuua」",
    parking_info: "花火大会開催日は熱海市内の道路・コインパーキングが満車になるため、15時までに宿の駐車場へ入れるか新幹線＋送迎バスが鉄則",
    meal_availability: "1泊2食付き（金目鯛＆海鮮会席・オーシャンビュービュッフェ・フレンチ）",
    family_friendly: "全室オーシャンビューの花火特等席ホテルから大人専用の隠れ家リゾートまで多彩",
    editor_tip: "熱海梅園の「もみじまつり」期間中は、園内の約380本のカエデが11月下旬〜12月上旬にピークを迎え、夜間（16:30〜21:00）にはライトアップも実施されます。早咲きの梅が11月末からほころび始め、『紅葉と梅の同時鑑賞』ができるのも熱海だけです。"
  },
  "autumn-winter-ashikaga-flower-park-illumination-hotels-guide": {
    recommended_for: ["イルミネーションアワード全国1位・日本三大イルミネーション「あしかがフラワーパーク・光の花の庭」を見に行きたい方", "日本最古の学校「史跡足利学校」や国宝「鑁阿寺（ばんなじ）」の大イチョウ紅葉を合わせて巡りたい方", "佐野プレミアム・アウトレットでの買い物や本場「佐野ラーメン」と天然温泉・サウナをセットで楽しみたい方"],
    nearby_tourist_spots: ["あしかがフラワーパーク（光の花の庭）", "鑁阿寺（大イチョウ）・史跡足利学校・織姫神社", "佐野プレミアム・アウトレット・佐野厄除け大師"],
    nearby_gourmet: ["青竹手打ち・佐野ラーメン＆佐野黒から揚げ", "足利シュウマイ・いもフライ・足利そば", "とちぎ和牛・ココファームワイナリー新酒"],
    hot_spring_info: "最上階展望露天風呂（スカイスパ）＆オートロウリュサウナ、天然温泉「秀郷の湯」などを完備",
    parking_info: "フラワーパーク周辺は16時半〜18時に渋滞するため、足利市駅・足利駅または佐野IC周辺のホテルに泊まりJR両毛線または19時以降の入場が快適",
    meal_availability: "朝食ビュッフェまたは1泊2食付き（とちぎ和牛＆和食会席）",
    family_friendly: "駅から徒歩10秒〜5分の好立地ホテルやアウトレット徒歩圏ホテルが揃い、ドライブ旅にも電車旅にも最適",
    editor_tip: "11月中旬の足利では、毎年「ココ・ファーム・ワイナリー」の収穫祭や新酒ワイン解禁、さらに国宝・鑁阿寺の樹齢約650年の大イチョウ黄葉が見頃を迎えます。昼は足利の紅葉とワイナリー、夜はフラワーパークの『光の花の庭』という黄金コースが組めます。"
  },
  "autumn-winter-matsumoto-castle-night-illumination-onsen-hotels-guide": {
    recommended_for: ["国宝「松本城」の漆黒の天守と紅葉、北アルプスの冠雪が重なる絶景や冬のレーザーマッピングを見たい方", "11月に解禁される信州の「秋の新そば（十割そば）」を食べ歩き、城下町・縄手通りや中町通りを散策したい方", "松本の奥座敷「浅間温泉」や「美ヶ原温泉」の源泉掛け流し湯と信州プレミアム牛肉で温まりたい方"],
    nearby_tourist_spots: ["国宝 松本城・松本市美術館（草間彌生展示）", "縄手通り・中町通り（蔵の街並み）", "旧開智学校・四柱神社・安曇野大王わさび農場"],
    nearby_gourmet: ["信州新そば（とうじそば・手打ち十割そば）", "信州プレミアム牛肉・松本名物山賊焼き", "信州サーモン・馬刺し・信州りんごスイーツ"],
    hot_spring_info: "1300年の歴史を誇る浅間温泉・美ヶ原温泉の弱アルカリ性単純泉（展望露天・貸切風呂・源泉掛け流し）",
    parking_info: "松本城周辺の駐車場は週末混雑するため、城徒歩圏ホテルまたは温泉宿からの送迎・路線バス活用がスムーズ",
    meal_availability: "1泊2食付き（信州牛＆手打ちそば会席・創作フレンチ）または信州郷土料理朝食ビュッフェ",
    family_friendly: "松本駅徒歩4分の天然温泉ホテルから創業300年の老舗旅館まで、一人旅・カップル・家族に対応",
    editor_tip: "松本城の天守と紅葉・北アルプスが内堀の水面に映り込む『水鏡（リフレクション）』は、風が吹く前の朝7:00〜8:30頃が最も美しく撮影できます。外堀（西側〜北側）は早朝でも無料で歩けるため、朝食前の散歩にぜひ足を運んでみてください。"
  },
  "autumn-koto-sanzan-eigenji-momiji-ogoto-onsen-hotels-guide": {
    recommended_for: ["京都の隣でありながら圧倒的な紅葉スケールを誇る滋賀「湖東三山（西明寺・金剛輪寺・百済寺）」と「永源寺」を巡りたい方", "メタセコイア並木や鶏足寺の「敷きもみじ」、教林坊の竹林ライトアップなど近江の紅葉名所を制覇したい方", "比叡山の麓・琵琶湖岸に湧く美肌の湯「おごと温泉」で、琵琶湖の絶景露天風呂とA5等級「近江牛」を堪能したい方"],
    nearby_tourist_spots: ["湖東三山（西明寺・金剛輪寺・百済寺）", "臨済宗永源寺派大本山 永源寺・教林坊", "比叡山延暦寺・日吉大社・近江八幡水郷めぐり"],
    nearby_gourmet: ["日本三大和牛・A5等級「近江牛」すき焼き＆ステーキ", "琵琶湖の湖魚料理・鴨鍋（近江鴨）", "永源寺こんにゃく・たねや＆クラブハリエ（ラ コリーナ近江八幡）"],
    hot_spring_info: "開湯1200年のおごと温泉（pH9.0の高アルカリ性単純温泉・美肌の湯）と琵琶湖一望の展望露天風呂",
    parking_info: "京都市内からJR湖西線でわずか20分のおごと温泉、または名神高速（八日市IC・湖東三山スマートIC）から車で快適にアクセス可能",
    meal_availability: "1泊2食付き（認定近江牛会席・近江牛しゃぶしゃぶ・季節の京風会席）",
    family_friendly: "琵琶湖を一望する露天風呂付き客室や貸切風呂が充実しており、三世代旅行や記念日ステイに最適",
    editor_tip: "湖東三山のひとつ「西明寺（さいみょうじ）」では、11月の紅葉とともに年に数ヶ月間だけ咲く天然記念物『不断桜（ふだんざくら）』が満開を迎え、「満開の桜と真っ赤なモミジが同時に見られる」奇跡の風景に出会えます。"
  },
  "autumn-fuji-kawaguchiko-momiji-festival-lake-view-onsen-hotels-guide": {
    recommended_for: ["11月1日〜30日開催の「富士河口湖紅葉まつり（もみじ回廊ライトアップ）」へ宿から歩いて出かけたい方", "客室や露天風呂から、白く冠雪した富士山と湖面に映る『逆さ富士』を正面に眺めたい方", "甲州牛やほうとう、勝沼の新酒ワインなど山梨の秋の味覚をフルコースで味わいたい方"],
    nearby_tourist_spots: ["河口湖もみじ回廊（梨川）・もみじトンネル", "大石公園・富士山パノラマロープウェイ", "新倉山浅間公園（忠霊塔）・忍野八海"],
    nearby_gourmet: ["甲州牛・甲州ワインビーフ溶岩焼き", "名物ほうとう・吉田のうどん・ワカサギ天ぷら", "山梨ヌーボー（甲州新酒ワイン）・シャインマスカット＆巨峰スイーツ"],
    hot_spring_info: "富士河口湖温泉郷の富士山展望大浴場・霊水露天風呂・貸切露天・足湯テラス",
    parking_info: "紅葉まつり期間中の日中は湖畔道路が渋滞するため、北岸の宿に車を停めて徒歩でもみじ回廊へ向かうのが最大の攻略法",
    meal_availability: "1泊2食付き（甲州牛会席・創作フレンチ・和洋ビュッフェ）",
    family_friendly: "露天風呂付き客室や足湯付き客室、湯上がり生ビール無料サービスなどカップル・家族に嬉しい設備が充実",
    editor_tip: "河口湖のさらに奥（西側）にある「もみじトンネル（大石公園の先）」は、道路の両側から張り出したカエデの枝が額縁のようになり、その真ん中に富士山と河口湖が収まる絶景フォトスポットです。朝7時〜8時台なら車を停めてゆっくり撮影できます。"
  },
  "winter-sendai-hikari-no-pageant-akiu-onsen-hotels-guide": {
    recommended_for: ["定禅寺通のケヤキ並木が黄金の光に包まれる「SENDAI光のページェント」や松島・秋保の晩秋ライトアップを楽しみたい方", "仙台の奥座敷「秋保（あきう）温泉」で、磊々峡の渓谷美とオールインクルーシブや豪華ビュッフェ・仙台牛を満喫したい方", "仙台駅直結・徒歩圏のハイクラスホテルで夜景ディナーと牛タン・せり鍋を味わいたい方"],
    nearby_tourist_spots: ["定禅寺通（SENDAI光のページェント）・仙台城跡", "秋保大滝・磊々峡（覗橋ハート）・秋保ワイナリー", "日本三景・松島（円通院・瑞巌寺）"],
    nearby_gourmet: ["極厚炭火焼き仙台牛タン・A5仙台牛", "仙台名物「せり鍋（根っこまで味わう秋冬限定鍋）」", "三陸産カキ・はらこ飯・ずんだ餅"],
    hot_spring_info: "日本三御湯に数えられる名湯「秋保温泉」の庭園露天風呂・渓流露天風呂・貸切風呂",
    parking_info: "秋保温泉の各宿は無料大駐車場完備＆仙台駅からの無料送迎バス（要予約）が運行されておりアクセス抜群",
    meal_availability: "1泊2食付き（仙台牛＆三陸海鮮ビュッフェ・本格和会席・オールインクルーシブ）または朝食付き",
    family_friendly: "ホテル瑞鳳や佐勘、篝火の湯 緑水亭は広大な大浴場や屋内プール・ラウンジを備えファミリーにもカップルにも大人気",
    editor_tip: "11月から仙台で本格シーズンを迎えるご当地グルメが『仙台せり鍋』です！鴨肉や鶏肉の出汁に、シャキシャキとした食感と強い香りを持つ「せりの根っこ」まで入れてさっと火を通して食べる鍋は、一度食べると病みつきになる美味しさです。"
  },
  "autumn-winter-aomori-oirase-hyobaku-towada-hakkoda-onsen-hotels-guide": {
    recommended_for: ["十和田湖・奥入瀬渓流の晩秋から初冬の苔と滝の造形美や、冬季の「奥入瀬渓流氷瀑ライトアップ」を体験したい方", "八甲田山の樹氷・雪景色と、映画の舞台にもなった木造湯治宿や一軒宿の濃厚な秘湯（酸ヶ湯・蔦・谷地温泉）に浸かりたい方", "青森の旬である大間のマグロ、陸奥湾ホタテ、八戸せんべい汁、青森りんごを使ったグルメを堪能したい方"],
    nearby_tourist_spots: ["奥入瀬渓流（銚子大滝・阿修羅の流れ）・十和田湖", "八甲田ロープウェー・城ヶ倉大橋", "十和田市現代美術館・ねぶたの家 ワ・ラッセ"],
    nearby_gourmet: ["青森りんごキッチン・十和田バラ焼き・ひめます料理", "大間産本マグロ・陸奥湾活ホタテ・八戸せんべい汁", "青森シャモロック鍋・嶽きみスイーツ"],
    hot_spring_info: "奥入瀬渓流沿いの絶景露天風呂、八甲田・十和田の源泉掛け流し硫黄泉・単純泉（日本三秘湯・谷地温泉など）",
    parking_info: "青森駅・八戸駅から宿の無料送迎バスが充実。11月中旬以降にマイカー・レンタカーで八甲田・十和田へ行く場合は冬用タイヤ必須",
    meal_availability: "1泊2食付き（りんごビュッフェ・青森郷土会席・フレンチ）",
    family_friendly: "星野リゾート 奥入瀬渓流ホテルのネイチャーツアーや渓流ラウンジはあらゆる世代に一生モノの感動を提供",
    editor_tip: "11月中旬〜下旬の奥入瀬渓流は、紅葉のピークが過ぎて観光客がぐっと落ち着き、約300種類の青々とした『苔（コケ）』と清流、そしてうっすらと舞う初雪が織りなす静謐な水墨画の世界を楽しめる通好みの季節です。"
  },
  "autumn-hiroshima-miyajima-momijidani-itsukushima-onsen-hotels-guide": {
    recommended_for: ["世界遺産・安芸の宮島で、約700本のモミジが染まる「紅葉谷公園ライトアップ」と夜の厳島神社を静かに歩きたい方", "11月に身が太り旨味がピークに達する本場の「宮島牡蠣・広島牡蠣」を、焼き牡蠣・生牡蠣・土手鍋で味わい尽くしたい方", "宮島島内の老舗宿や、対岸の宮浜温泉・瀬戸内オーシャンビューの露天風呂でゆったり寛ぎたい方"],
    nearby_tourist_spots: ["厳島神社・大鳥居・五重塔・豊国神社（千畳閣）", "紅葉谷公園・弥山ロープウエー", "平和記念公園・錦帯橋（山口県岩国市）"],
    nearby_gourmet: ["宮島産大粒牡蠣（焼き・フライ・土手鍋・釜飯）", "宮島名物あなごめし・広島牛ステーキ", "焼きたてもみじ饅頭・揚げもみじ"],
    hot_spring_info: "宮島島内の天然温泉（有もと・錦水館）および対岸・宮浜温泉の瀬戸内海一望露天風呂",
    parking_info: "宮島島内へは車を渡さず、宮島口周辺の駐車場または対岸宿の無料駐車場に停めてフェリー（10分）で渡るのが鉄則",
    meal_availability: "1泊2食付き（旬の牡蠣＆瀬戸内活魚会席・宿毛湾＆広島食材の和洋折衷ディナー）",
    family_friendly: "桟橋からの送迎バスや海辺のテラス・貸切風呂が充実しており、三世代旅行やカップルの記念日に最適",
    editor_tip: "厳島神社のすぐ隣にある豊国神社（通称・千畳閣）は、畳857枚分の吹き抜け木造大経堂のすぐ横に巨大なイチョウの木が立っており、11月中旬〜下旬には黄金色のイチョウが床板に映り込む宮島屈指の絶景フォトスポットになります。"
  },
  "autumn-kagawa-ritsurin-garden-lightup-kotohira-onsen-hotels-guide": {
    recommended_for: ["ミシュラン・グリーンガイド三つ星の名園「特別名勝 栗林公園」の秋の夜間ライトアップと和船舟遊びを体験したい方", "「こんぴらさん（金刀比羅宮）」の紅葉参道を登り、麓のこんぴら温泉郷のバラ風呂・露天風呂で足の疲れを癒やしたい方", "讃岐うどん巡りやオリーブ牛、骨付鳥、瀬戸内海の旬魚など香川の美食を堪能したい方"],
    nearby_tourist_spots: ["特別名勝 栗林公園（掬月亭・南湖和船）", "金刀比羅宮（御本宮・奥社・資生堂パーラー神椿）", "父母ヶ浜（日本のウユニ塩湖）・屋島・丸亀城"],
    nearby_gourmet: ["本場讃岐うどん・骨付鳥（一鶴など）", "香川ブランド「オリーブ牛」・オリーブハマチ", "灸まん・おいりソフト・和三盆スイーツ"],
    hot_spring_info: "こんぴら温泉郷の展望露天風呂・華の湯（バラ風呂）・貸切露天風呂",
    parking_info: "高松駅前ホテルや琴平の温泉宿に車を預けて、ことでん（高松築港〜栗林公園〜琴電琴平）や徒歩で巡るのも快適",
    meal_availability: "1泊2食付き（オリーブ牛＆瀬戸内海鮮会席・実演キッチンバイキング）または朝食付き",
    family_friendly: "参道入口すぐの老舗旅館から高松駅徒歩1分のシティホテルまで揃い、金刀比羅宮参拝の荷物預けにも便利",
    editor_tip: "栗林公園の秋のライトアップ期間中に運航される『南湖（なんこ）の夜間和船』は、船頭さんの解説を聞きながら水面に映るカエデと松のライトアップを水面目線で眺められる最高の体験です（事前予約または当日乗船券を早めに確保しましょう）。"
  },
  "autumn-nikko-momiji-lightup-toshogu-onsen-hotels-guide": {
    recommended_for: ["世界遺産「日光の社寺（輪王寺逍遥園・東照宮・二荒山神社）」の紅葉と夜間ライトアップを徒歩圏の宿から満喫したい方", "いろは坂の渋滞をスマートに回避して中禅寺湖や華厳滝、奥日光・湯元の濃厚な白濁硫黄泉を楽しみたい方", "日本最古のクラシックホテル「日光金谷ホテル」や渓谷美の「鬼怒川金谷ホテル」で一生モノの美食ステイを体験したい方"],
    nearby_tourist_spots: ["日光東照宮・日光山輪王寺（逍遥園）・日光二荒山神社", "神橋・中禅寺湖・華厳滝・竜頭ノ滝", "江戸ワンダーランド日光江戸村・鬼怒川ライン下り"],
    nearby_gourmet: ["日光名物・引き上げ湯波（ゆば）懐石・揚げゆばまんじゅう", "A5とちぎ和牛・日光虹鱒の百年ライスカレー", "日光天然氷のかき氷・チーズケーキ"],
    hot_spring_info: "日光温泉のアルカリ性美肌湯、奥日光湯元温泉の濃厚乳白色硫黄泉、鬼怒川温泉の渓谷露天風呂",
    parking_info: "東照宮・神橋近くの宿（千姫物語・金谷ホテル・星の宿）なら無料駐車場に車を預けたまま世界遺産エリアと夜間ライトアップを徒歩で回遊可能",
    meal_availability: "1泊2食付き（引き上げ湯波懐石・伝統の金谷フレンチ・和敬洋讃会席）",
    family_friendly: "格式高いクラシックホテルから大浴場充実の和風旅館まで揃い、記念日や三世代の紅葉旅に最適",
    editor_tip: "日光の「神橋（しんきょう）」から東照宮へ向かう国道119号は11月の週末日中に渋滞しますが、JR・東武日光駅から神橋・東照宮までは上り坂でも徒歩約20〜25分（大谷川沿いの遊歩道あり）です。駅または宿から歩く方が車の3倍早く着きます。"
  },
  "autumn-saga-arita-touki-mifuneyama-lightup-ureshino-takeo-onsen-hotels-guide": {
    recommended_for: ["日本最大級の紅葉ライトアップ（15万坪の大庭園）「御船山楽園・たまゆらの夕べ」を武雄・嬉野温泉とセットで満喫したい方", "11月後半に開催される「秋の有田陶磁器まつり」で器巡りと樹齢1,000年の大公孫樹（イチョウ）を楽しみたい方", "日本三大美肌の湯「嬉野温泉」のトロトロ源泉と名物『温泉湯どうふ』・A5佐賀牛を堪能したい方"],
    nearby_tourist_spots: ["御船山楽園（紅葉まつり・チームラボ）・武雄神社（武雄の大楠）", "有田内山重要伝統的建造物群保存地区・泉山磁石場（大イチョウ）", "嬉野温泉街（シーボルトの足湯）・祐徳稲荷神社"],
    nearby_gourmet: ["嬉野名物・とろける温泉湯どうふ", "A5等級佐賀牛・若楠ポークしゃぶしゃぶ", "有田焼五膳・嬉野茶スイーツ"],
    hot_spring_info: "日本三大美肌の湯「嬉野温泉」および1300年の歴史を持つ「武雄温泉」のなめらかな重曹泉（ナトリウム-炭酸水素塩・塩化物泉）",
    parking_info: "御船山楽園の夜間ライトアップ時は、武雄温泉駅周辺の宿からタクシーまたは徒歩、あるいは嬉野温泉から19時以降の来場がスムーズ",
    meal_availability: "1泊2食付き（佐賀牛＆温泉湯どうふ会席・創作懐石）",
    family_friendly: "全館畳敷きの和風旅館やバリアフリー対応の老舗宿が多く、カップルからシニア・家族連れまで安心",
    editor_tip: "秋の有田陶磁器まつり期間中、国の天然記念物『有田の大公孫樹（おおいちょう・樹齢約1,000年）』が黄金色のピークを迎えます。有田焼の窯元通り（トンバイ塀のある裏通り）を歩きながら黄金の大イチョウを見上げるコースは11月下旬だけの特権です。"
  },
  "autumn-shuzenji-momiji-festival-bamboo-lightup-izu-onsen-hotels-guide": {
    recommended_for: ["1,000本のモミジが群生する「修善寺自然公園もみじ林」と、修善寺温泉街の「竹林の小径ライトアップ」を両方楽しみたい方", "芥川龍之介や横山大観が愛した文化財建築の老舗や、1万5千坪の庭園を持つ絶景旅館に泊まりたい方", "駿河湾の金目鯛・伊勢海老・高足ガニや、天城の本わさび・伊豆牛など秋の伊豆グルメを堪能したい方"],
    nearby_tourist_spots: ["修善寺自然公園もみじ林・修禅寺・日枝神社", "竹林の小径・桂橋（恋の橋めぐり）", "浄蓮の滝・天城越え・恋人岬"],
    nearby_gourmet: ["天城産・擦りたて生わさび丼＆修善寺黒米餅", "駿河湾産・金目鯛姿煮・伊勢海老・鮑", "伊豆牛ステーキ・しいたけそば"],
    hot_spring_info: "弘法大師が開いた伊豆最古の「修善寺温泉」および夕日と富士山を望む西伊豆・土肥温泉の源泉掛け流し・露天風呂",
    parking_info: "修善寺温泉街の宿に車を預ければ、修禅寺・竹林の小径・桂川の紅葉スポットはすべて徒歩5〜10分圏内で回遊可能",
    meal_availability: "1泊2食付き（伊豆山海懐石・部屋食・オールインクルーシブ）",
    family_friendly: "登録有形文化財の「新井旅館」や大庭園の「宙 SORA」、オールインクルーシブの「桂川」など旅の目的に合わせて選べる名宿揃い",
    editor_tip: "修善寺の総鎮守「修禅寺」では、例年11月下旬〜12月上旬の紅葉ピーク期間中のみ、普段は非公開の方丈庭園『東海第一園（とうかいだいいちえん）』が特別公開されます。錦に染まる達磨石と庭園美は必見です。"
  },
  "autumn-winter-kanazawa-kenrokuen-yukitsuri-crab-kaiseki-onsen-hotels-guide": {
    recommended_for: ["11月1日から始まる金沢「兼六園の雪吊り」と、紅葉ライトアップ『金沢城・兼六園四季物語（秋の段）』を鑑賞したい方", "11月6日に漁が解禁される石川県産「加能ガニ（雄ズワイガニ）」と「香箱ガニ（雌ズワイガニ）」の本場蟹会席を味わいたい方", "金沢の奥座敷「湯涌温泉」や加賀温泉郷（山代・山中・粟津）の名旅館でのどぐろと名湯に浸りたい方"],
    nearby_tourist_spots: ["特別名勝 兼六園・金沢城公園・金沢21世紀美術館", "ひがし茶屋街・近江町市場・長町武家屋敷跡", "那谷寺（奇岩遊仙境の紅葉）・鶴仙渓（こおろぎ橋）"],
    nearby_gourmet: ["青タグ付き加能ガニ・香箱ガニ（カニ面おでん・香箱丼）", "日本海の赤い宝石「のどぐろ（アカムツ）」塩焼き・炙り", "A5能登牛・治部煮・加賀野菜"],
    hot_spring_info: "金沢湯涌温泉、山代温泉（魯山人ゆかりの湯）、山中温泉（鶴仙渓沿いの湯）、金沢市内の黒湯天然温泉",
    parking_info: "金沢市内観光は兼六園徒歩圏ホテルまたはバス・徒歩が便利。湯涌・山代・山中温泉の各宿は金沢駅または加賀温泉駅からの無料送迎あり",
    meal_availability: "1泊2食付き（活加能ガニ＆香箱ガニ会席・のどぐろ＆能登牛懐石）または海鮮朝食ビュッフェ",
    family_friendly: "貸切露天風呂やクラブラウンジ、大庭園露天風呂を備えた北陸最高峰の旅館・ホテルを厳選",
    editor_tip: "金沢の冬おでんの代名詞である『カニ面（香箱ガニの甲羅に内子・外子・蟹身をぎっしり詰めておでん出汁で炊いたもの）』は、11月6日の漁解禁〜12月末までの期間限定メニューです。この時期に金沢を訪れるなら絶対に外せません。"
  },
  "autumn-winter-karuizawa-kumobaike-illumination-resort-hotels-guide": {
    recommended_for: ["水面に真っ赤なモミジとカラマツが映り込む軽井沢「雲場池」の晩秋紅葉と、11月下旬から始まる「軽井沢高原教会 星降る森のクリスマス」を体験したい方", "ハルニレテラスの「やどりぎイルミネーション」やトンボの湯、白糸の滝ライトアップを楽しみたい方", "クラシック名門「万平ホテル」や天然温泉付きのラグジュアリーリゾートで暖炉と信州フレンチを満喫したい方"],
    nearby_tourist_spots: ["雲場池（スワンレイク）・旧軽井沢銀座通り", "軽井沢星野エリア（ハルニレテラス・軽井沢高原教会・石の教会）", "白糸の滝・軽井沢プリンスショッピングプラザ"],
    nearby_gourmet: ["信州プレミアム牛・熟成フレンチ・ジビエ料理", "川上庵のくるみだれせいろ蕎麦・ベーカリー沢村のモーニング", "ミカド珈琲のモカソフト・信州シードル＆ワイン"],
    hot_spring_info: "小瀬温泉・塩沢温泉・矢ヶ崎温泉などの天然温泉大浴場・露天風呂・スパを備えた軽井沢リゾートを厳選",
    parking_info: "雲場池周辺には一般駐車場がないため、旧軽井沢周辺の宿に車を置いて徒歩またはレンタサイクルで朝一番に向かうのが鉄則",
    meal_availability: "1泊2食付き（本格フレンチフルコース・信州旬菜イタリアン＆和食）または高原朝食付き",
    family_friendly: "アウトレット直結のプリンスホテルから静かな森の隠れ家リゾートまで、カップル・夫婦・ファミリーすべてに対応",
    editor_tip: "11月上旬〜中旬の軽井沢は、真っ赤なモミジの後に標高1,000m一帯の『カラマツ林』が黄金色に染まる「黄金の軽井沢（カラマツ黄葉）」の季節です。さらに11月下旬からは高原教会のランタンキャンドルナイトが始まり、ロマンチックな冬の幕開けを味わえます。"
  }
};

// Broken link replacements inside HTML review
const hrefReplacements = [
  ['/autumn-kagawa-ritsurin-garden-lightup-kotohira-onsen-hotels-guide/', '/posts/autumn-kagawa-ritsurin-garden-lightup-kotohira-onsen-hotels-guide/'],
  ['/autumn-fuji-kawaguchiko-momiji-festival-lake-view-onsen-hotels-guide/', '/posts/autumn-fuji-kawaguchiko-momiji-festival-lake-view-onsen-hotels-guide/'],
  ['/autumn-winter-aomori-oirase-hyobaku-towada-hakkoda-onsen-hotels-guide/', '/posts/autumn-winter-aomori-oirase-hyobaku-towada-hakkoda-onsen-hotels-guide/'],
  ['/akyu-onsen-sendai-family-buffet-hotels-guide', '/posts/akyu-onsen-sendai-family-buffet-hotels-guide/'],
  ['/takamatsu-city-ritsuringarden-hotels-guide', '/posts/takamatsu-city-ritsuringarden-hotels-guide/'],
  ['/miyajima-famous-things-gourmet-hotels-guide', '/posts/miyajima-famous-things-gourmet-hotels-guide/'],
  ['/posts/winter-youth-mie-ise-shima-resort-guide', '/posts/winter-mie-nabana-no-sato-illumination-nagashima-hotels-guide/'],
  ['/posts/kinosaki-onsen-ranking-hotels-guide', '/posts/autumn-november-kinosaki-awara-crab-yamanakako-kyoto-higashiyama-onsen-guide/'],
  ['/posts/chichibu-hotsprings-guide', '/posts/autumn-november-nagatoro-shuzenji-kasumi-crab-miyajima-onsen-guide/'],
  ['/posts/takeo-mifuneyama-guide', '/posts/autumn-saga-arita-touki-mifuneyama-lightup-ureshino-takeo-onsen-hotels-guide/'],
  ['/furusato-tax-three-major-medicinal-baths-onsen-stay/', '/posts/autumn-november-nagano-ebisukou-fireworks-ikaho-kajikabashi-misasa-crab-guide/'],
  ['/autumn-winter-atami-fireworks-ocean-view-onsen-hotels-guide/', '/posts/autumn-winter-atami-kaijo-hanabi-momiji-onsen-hotels-guide/'],
  ['/furusato-tax-private-villa-retreat-japan/', '/posts/autumn-november-kawaguchiko-momiji-nikko-arashiyama-takachiho-kagura-guide/'],
  ['/furusato-tax-onsen-ryokan-kyushu-selection/', '/posts/autumn-november-karatsu-kunchi-kenrokuen-shodoshima-kankakei-shimabara-guide/'],
  ['/furusato-tax-kanto-private-bath-luxury-ryokan/', '/posts/autumn-november-jingu-gaien-icho-yorokeikoku-yabakei-unzen-onsen-guide/'],
  ['/autumn-ashikaga-flower-park-illumination-onsen-hotels-guide/', '/posts/autumn-winter-ashikaga-flower-park-illumination-hotels-guide/'],
  ['/autumn-winter-matsumoto-castle-lightup-onsen-hotels-guide/', '/posts/autumn-winter-matsumoto-castle-night-illumination-onsen-hotels-guide/'],
  ['/furusato-tax-hokuriku-onsen-crab-kaiseki/', '/posts/winter-crab-season-matsuba-echizen-onsen-hotels-guide/']
];

console.log('--- Step 1: Upgrading 20 Killer Production JSONs ---');
for (const [slug, meta] of Object.entries(metaEnrich)) {
  const jsonPath = path.join(POSTS_DIR, `${slug}.json`);
  if (!fs.existsSync(jsonPath)) {
    console.warn(`Missing ${jsonPath}`);
    continue;
  }
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const liveHotels = combinedLive[slug]?.hotels || [];

  if (liveHotels.length > 0) {
    data.featured_hotels = liveHotels.map(h => ({
      name: String(h.hotelName || '').replace(/\uFFFD+/g, '').trim(),
      rating: String(h.reviewAverage || 4.5),
      price: `¥${Number(h.hotelMinCharge || 15000).toLocaleString()}〜`,
      url: h.affiliateUrl
    }));
  }

  Object.assign(data, meta);

  let rev = data.review || '';
  for (const [oldHref, newHref] of hrefReplacements) {
    rev = rev.split(`href="${oldHref}"`).join(`href="${newHref}"`);
  }
  data.review = rev;
  data.content = rev;

  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Upgraded ${slug}.json (featured_hotels: ${data.featured_hotels?.length || 0})`);
}

// Step 2: Fix note-213.md to note-265.md broken /note-XXX links and missing production links
console.log('\n--- Step 2: Fixing note-213.md to note-265.md Production Links ---');
const noteSlugMap = {
  213: "autumn-november-special-events-hotels-guide",
  214: "autumn-november-balloon-fireworks-crab-guide",
  215: "autumn-november-traditional-festivals-wine-guide",
  216: "autumn-hiroshima-miyajima-momijidani-itsukushima-onsen-hotels-guide",
  217: "autumn-november-kanazawa-yukitsuri-kobako-guide",
  218: "autumn-november-nikko-kinugawa-lightup-guide",
  219: "autumn-november-kawaguchiko-momiji-nikko-arashiyama-takachiho-kagura-guide",
  220: "autumn-november-yamanakako-diamond-fuji-guide",
  221: "autumn-november-osaka-midosuji-lightup-guide",
  222: "autumn-november-shinshu-soba-matsumoto-guide",
  223: "autumn-november-shirahama-kue-onsen-guide",
  224: "autumn-november-dogo-onsen-matsuyama-guide",
  225: "autumn-november-matsushima-entuuin-kaki-guide",
  226: "autumn-november-hakata-lightup-walk-guide",
  227: "autumn-november-shirakawago-fire-drill-guide",
  228: "autumn-kyoto-momiji-lightup-eikando-kiyomizu-hotels-guide",
  229: "autumn-winter-aomori-oirase-hyobaku-towada-hakkoda-onsen-hotels-guide",
  230: "autumn-fuji-kawaguchiko-momiji-festival-lake-view-onsen-hotels-guide",
  231: "autumn-november-izumo-kamiarisai-togakushi-soba-arashiyama-onsen-guide",
  232: "autumn-shuzenji-momiji-festival-bamboo-lightup-izu-onsen-hotels-guide",
  233: "autumn-winter-kanazawa-kenrokuen-yukitsuri-crab-kaiseki-onsen-hotels-guide",
  234: "autumn-november-nagano-ebisukou-fireworks-ikaho-kajikabashi-misasa-crab-guide",
  235: "autumn-november-kinosaki-awara-crab-yamanakako-kyoto-higashiyama-onsen-guide",
  236: "autumn-winter-ashikaga-flower-park-illumination-hotels-guide",
  237: "autumn-november-akizuki-castle-tsukioka-kaminoyama-yufuin-onsen-guide",
  238: "autumn-nikko-momiji-lightup-toshogu-onsen-hotels-guide",
  239: "autumn-november-izumo-tamatsukuri-iya-kazurabashi-ohara-sanzenin-chichibu-guide",
  240: "autumn-winter-chichibu-yomatsuri-nagatoro-hotels-guide",
  241: "autumn-november-jingu-gaien-icho-yorokeikoku-yabakei-unzen-onsen-guide",
  242: "autumn-november-karatsu-kunchi-kenrokuen-shodoshima-kankakei-shimabara-guide",
  243: "autumn-winter-karuizawa-kumobaike-illumination-resort-hotels-guide",
  244: "autumn-fuji-kawaguchiko-momiji-festival-lake-view-onsen-hotels-guide",
  245: "autumn-november-nagano-ebisukou-fireworks-ikaho-kajikabashi-misasa-crab-guide",
  246: "autumn-koto-sanzan-eigenji-momiji-ogoto-onsen-hotels-guide",
  247: "autumn-november-akizuki-castle-tsukioka-kaminoyama-yufuin-onsen-guide",
  248: "winter-crab-season-matsuba-echizen-onsen-hotels-guide",
  249: "autumn-november-kawaguchiko-momiji-nikko-arashiyama-takachiho-kagura-guide",
  250: "autumn-november-jingu-gaien-icho-yorokeikoku-yabakei-unzen-onsen-guide",
  251: "autumn-koto-sanzan-eigenji-momiji-ogoto-onsen-hotels-guide",
  252: "autumn-kagawa-ritsurin-garden-lightup-kotohira-onsen-hotels-guide",
  253: "autumn-november-akizuki-castle-tsukioka-kaminoyama-yufuin-onsen-guide",
  254: "autumn-saga-arita-touki-mifuneyama-lightup-ureshino-takeo-onsen-hotels-guide",
  255: "autumn-winter-aomori-oirase-hyobaku-towada-hakkoda-onsen-hotels-guide",
  256: "winter-crab-season-matsuba-echizen-onsen-hotels-guide",
  257: "autumn-hiroshima-miyajima-momijidani-itsukushima-onsen-hotels-guide",
  258: "autumn-november-nagano-ebisukou-fireworks-ikaho-kajikabashi-misasa-crab-guide",
  259: "autumn-november-kawaguchiko-momiji-nikko-arashiyama-takachiho-kagura-guide",
  260: "autumn-november-izumo-tamatsukuri-iya-kazurabashi-ohara-sanzenin-chichibu-guide",
  261: "autumn-shuzenji-momiji-festival-bamboo-lightup-izu-onsen-hotels-guide",
  262: "autumn-november-nagatoro-shuzenji-kasumi-crab-miyajima-onsen-guide",
  263: "autumn-november-kinosaki-awara-crab-yamanakako-kyoto-higashiyama-onsen-guide",
  264: "autumn-november-jingu-gaien-icho-yorokeikoku-yabakei-unzen-onsen-guide",
  265: "autumn-saga-arita-touki-mifuneyama-lightup-ureshino-takeo-onsen-hotels-guide"
};

for (let n = 213; n <= 265; n++) {
  const noteFile = path.join(ROOT_DIR, `note-${n}.md`);
  if (!fs.existsSync(noteFile)) continue;
  const slug = noteSlugMap[n];
  const prodUrl = `https://croud-travel.pages.dev/posts/${slug}/`;
  let txt = fs.readFileSync(noteFile, 'utf8');

  if (n <= 249) {
    // Replace broken /note-XXX links with valid production URL
    txt = txt.replace(new RegExp(`https://croud-travel\\.pages\\.dev/note-${n}/?`, 'g'), prodUrl);
  } else {
    // Add intro and bottom production links to note-250..265
    if (!txt.includes('croud-travel.pages.dev')) {
      const titleMatch = txt.match(/title:\s*"([^"]+)"/) || txt.match(/^#\s+(.+)$/m);
      const title = titleMatch ? titleMatch[1] : "11月特選ガイド";
      const firstHr = txt.indexOf('\n---\n', 20);
      if (firstHr !== -1) {
        const introCta = `\n> 💡 **写真付きの完全版比較表・渋滞回避マップ・1泊2日モデルコースはWebサイト本編でも公開中です！**  \n> 👉 [【完全版WEBガイド】${title} の詳細ページを見る](${prodUrl})\n`;
        txt = txt.slice(0, firstHr) + introCta + txt.slice(firstHr);
      }
      const bottomCta = `\n\n---\n\n## 🌐 さらに詳しい宿比較表・周辺スポット写真はWeb本編へ！\n\n本記事でご紹介した名宿の客室写真・スペック比較表や、周辺の立ち寄りグルメ・駐車場攻略を含む完全版ガイドは以下のWebサイトでご覧いただけます。旅の計画にぜひお役立てください！\n\n👉 **[【完全版WEBガイド】${title} を読む](${prodUrl})**\n`;
      txt = txt.trimEnd() + bottomCta;
    }
  }

  fs.writeFileSync(noteFile, txt, 'utf8');
}
console.log('Fixed all note-213.md to note-265.md links!');
