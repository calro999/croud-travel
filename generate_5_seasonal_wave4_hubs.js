const fs = require('fs');
const path = require('path');

const wave4Configs = [
  {
    slug: 'winter-snow-drift-ice-cruise',
    badge: 'DRIFT ICE & WILDLIFE',
    title: '【冬のオホーツク】流氷クルーズ＆知床世界遺産ホテル 完全ガイド',
    metaDesc: '白銀のオホーツク海を覆い尽くす流氷の絶景！網走「おーろら号」、紋別「ガリンコ号」、知床ウトロの流氷ウォーク、阿寒湖の丹頂鶴など、冬の北海道東部でしか体験できない極上流氷ステイを徹底解説。',
    heroDesc: 'ロシアのアムール川から南下し、海一面を真っ白に埋め尽くす大自然のスペクタクル「流氷」。砕氷船から眺める大迫力の流氷原、オホーツクの海鮮バイキング、流氷を望む展望露天風呂へ。',
    categoryKey: 'winter-snow-drift-ice-cruise',
    areaGuides: [
      {
        key: 'abashiri_drift_ice',
        title: '1. 北海道・網走（流氷砕氷船おーろら号＆オホーツク海鮮ビュッフェ）',
        timing: '流氷シーズン：1月下旬〜3月中旬（ベスト：2月）',
        desc: '大型流氷砕氷船「おーろら号」が氷を割りながら進む大迫力のクルーズ。オホーツク海を見下ろす高台のリゾート温泉ホテルに宿泊し、網走湖のワカサギ釣りやオホーツクサーモン・タラバガニを堪能。',
        spots: '網走流氷観光砕氷船おーろら、博物館網走監獄、オホーツク流氷館、能取岬',
        access: '女満別空港より連絡バスで網走市内まで約30分。JR石北本線網走駅下車。',
        tip: '流氷砕氷船は天候・流氷の接岸状況により運航が変わるため、事前予約と当日の運航状況確認が必須です。'
      },
      {
        key: 'shiretoko_winter',
        title: '2. 北海道・知床ウトロ温泉（世界自然遺産！流氷ウォークと天然温泉）',
        timing: '流氷シーズン：2月上旬〜3月下旬',
        desc: 'ドライスーツを着用して流氷の上を歩く「流氷ウォーク」が大人気。知床半島の断崖に建つ温泉ホテルでは、客室や露天風呂から海一面に広がる流氷原と夕日のコラボレーションを楽しめます。',
        spots: '知床五湖（冬期ガイドツアー）、フレペの滝（乙女の涙）、オシンコシンの滝、プユニ岬',
        access: '女満別空港より知床エアポートライナーで約2時間（冬期運行）。網走駅から車・バス約90分。',
        tip: '流氷ウォークツアー（ガイド同行）付きの宿泊プランがおすすめ。運が良ければオオワシやアザラシに出会えます。'
      },
      {
        key: 'monbetsu_drift_ice',
        title: '3. 北海道・紋別（ドリルで流氷を砕くガリンコ号＆本場カニ尽くし）',
        timing: '流氷シーズン：1月下旬〜3月上旬',
        desc: 'スクリュー型の巨大ドリルで流氷をガリガリ砕きながら突き進む「ガリンコ号Ⅲ・IMERU」。紋別港周辺の温泉ホテルでは、オホーツク海で獲れた本ズワイガニやホタテを贅沢に使った料理を堪能できます。',
        spots: '流氷砕氷船ガリンコ号Ⅲ、オホーツクタワー（海底自然観測室）、アザラシシーパラダイス、カニの爪オブジェ',
        access: 'オホーツク紋別空港より無料連絡バスで市内へ約15分（羽田から直行便あり）。旭川駅から特急バス約3時間。',
        tip: 'サンライズクルーズに乗船すると、真っ赤に染まる朝焼けの海と流氷の神秘的なグラデーションを拝めます。'
      },
      {
        key: 'kushiro_cranes',
        title: '4. 北海道・釧路＆阿寒湖温泉（白銀の湿原を舞う特別天然記念物タンチョウ鶴）',
        timing: '観賞シーズン：12月〜3月（雪原に映える求愛ダンス）',
        desc: '白銀の釧路湿原で優雅に舞うタンチョウ鶴の姿を観察。夜は阿寒湖温泉のアイヌコタンを散策し、湖畔の露天風呂から冬の星空を眺め、釧路名物「炉端焼き」や勝手丼を味わう冬の道東周遊旅。',
        spots: '鶴見台・阿寒国際ツルセンター、阿寒湖アイヌコタン、釧路湿原展望台、和商市場（勝手丼）',
        access: 'たんちょう釧路空港より車・空港連絡バス。JR釧路駅より阿寒湖温泉まで直行バス約110分。',
        tip: '釧路の「炉端焼き発祥の店」で炭火で焼くキンキやホタテ、地酒福司を味わうのが冬の醍醐味です。'
      }
    ]
  },
  {
    slug: 'autumn-winter-brewery-sake-tour',
    badge: 'SAKE & BREWERY TOUR',
    title: '【新酒の季節】日本酒酒蔵めぐり＆地酒飲み比べ温泉宿 完全ガイド',
    metaDesc: '秋のひやおろしから冬の搾りたて新酒まで！新潟越後湯沢（ぽんしゅ館）、福島会津東山温泉、京都伏見酒蔵通り、広島西条酒蔵通りなど、名門酒蔵めぐりと地酒ペアリング会席を堪能する極上温泉宿を徹底解説。',
    heroDesc: '新米で仕込んだ出来立ての新酒や、ひと夏寝かせてまろやかになった秋の「ひやおろし」。歴史ある白壁の酒蔵通りを歩き、夜は厳選された銘酒と郷土料理のマリアージュに酔いしれる大人の旅。',
    categoryKey: 'autumn-winter-brewery-sake-tour',
    areaGuides: [
      {
        key: 'niigata_sake',
        title: '1. 新潟・越後湯沢＆南魚沼（ぽんしゅ館で全蔵利き酒＆酒風呂温泉）',
        timing: '通年（冬の新酒・しぼりたてシーズンが最高峰）',
        desc: '米どころ越後。越後湯沢駅直結の「ぽんしゅ館」では新潟県内全酒蔵（約90蔵）の日本酒コインサーバーで飲み比べが可能。純米酒を注いだ天然温泉「酒風呂」や八海山・八海醸造の魚沼の里を巡る贅沢ステイ。',
        spots: 'ぽんしゅ館（越後湯沢駅構内）、魚沼の里（八海山酒蔵）、八海山ロープウェー、塩沢宿牧之通り',
        access: '上越新幹線「越後湯沢駅」直結。東京駅から新幹線で約70分。',
        tip: '温泉旅館の夕食で「新潟地酒3種飲み比べセット」を注文し、南魚沼産コシヒカリの新米と合わせるのが至高です。'
      },
      {
        key: 'aizu_sake',
        title: '2. 福島・会津若松＆会津東山温泉（全国新酒鑑評会・金賞最多受賞の銘酒郷）',
        timing: '通年（秋のひやおろし・冬の寒仕込み）',
        desc: '全国新酒鑑評会で金賞受賞数日本一の記録を持つ福島・会津。「末廣酒造」「宮泉銘醸」など歴史ある蔵元を巡り、会津東山温泉の渓流沿い旅館で会津郷土料理（こづゆ・桜肉・にしん山椒漬け）と銘酒を堪能。',
        spots: '末廣酒造嘉永蔵、鶴ヶ城（会津若松城）、会津東山温泉街、七日町通り（蔵造りの町並み）',
        access: 'JR磐越西線「会津若松駅」より市内周遊バス「あかべぇ」で東山温泉へ約15分。郡山駅から快速約60分。',
        tip: '末廣酒造のカフェ「杏」で味わう仕込み水で淹れた珈琲や酒粕スイーツが散策の休憩に大人気です。'
      },
      {
        key: 'fushimi_sake',
        title: '3. 京都・伏見酒蔵通り＆東山（名水「伏水」が育む月桂冠・黄桜の城下町）',
        timing: '通年（秋の新米仕込み〜冬の新酒まつり）',
        desc: '白壁土蔵と赤レンガの煙突が連なる伏見酒蔵通り。十石舟が浮かぶ宇治川派流を散策し、「伏水酒蔵小路」で伏見18蔵のきき酒セットを体験。町家を改装したブティックホテルや温泉宿で京の夜を満喫。',
        spots: '伏見酒蔵通り（月桂冠大倉記念館・キザクラカッパカントリー）、伏水酒蔵小路、伏見稲荷大社、十石舟',
        access: '京阪本線「伏見桃山駅」「中書島駅」、近鉄「桃山御陵前駅」下車。京都駅から約15分。',
        tip: '「伏水酒蔵小路」の名物「粋酔（十八蔵利き酒セット）」は圧巻の迫力。おばんざいとともに少しずつ味わえます。'
      },
      {
        key: 'saijo_sake',
        title: '4. 広島・東広島西条酒蔵通り（白壁・なまこ壁と赤瓦の煙突が並ぶ吟醸酒の街）',
        timing: '通年（10月上旬の西条酒まつり・冬の新酒シーズン）',
        desc: '灘・伏見と並ぶ日本三大酒処の一つ「西条」。JR西条駅周辺の徒歩圏内に7つの蔵元（賀茂鶴・白牡丹・福美人など）が集まり、仕込み水の飲み比べや酒蔵見学を楽しめます。名物「美酒鍋（びしゅなべ）」も絶品。',
        spots: '西条酒蔵通り（煙突・なまこ壁風景）、賀茂鶴酒造見学室、宮島・厳島神社（電車で約50分）',
        access: 'JR山陽本線「西条駅」下車徒歩すぐ。山陽新幹線東広島駅より車約10分。広島空港より車約25分。',
        tip: '日本酒で豚肉や野菜を煮込む西条名物「美酒鍋」はアルコールが飛んで旨味だけが残り、お酒が弱い方でも美味しくいただけます。'
      }
    ]
  },
  {
    slug: 'winter-warm-island-escape',
    badge: 'WARM WINTER ESCAPE',
    title: '【冬の避寒リゾート】寒さ知らず！沖縄・奄美大島ぽかぽか旅 完全ガイド',
    metaDesc: '真冬でも気温20度前後！沖縄本島（那覇・恩納村）、奄美大島、石垣島・宮古島など、本州の厳しい寒さを抜け出して暖かな南国でゆったり過ごす大人の冬旅リゾートを徹底解説。',
    heroDesc: 'コートを脱ぎ捨てて、心地よい南風が吹き抜ける楽園へ。冬の沖縄・奄美は観光のオフシーズンで混雑がなく、ホテル料金もお得。静寂のプライベートリゾートで極上のリフレッシュを。',
    categoryKey: 'winter-warm-island-escape',
    areaGuides: [
      {
        key: 'naha_warm_stay',
        title: '1. 沖縄・那覇＆糸満（冬の街歩き・琉球グルメ＆天然温泉ホテル）',
        timing: 'おすすめ時期：11月〜3月（平均気温18〜22℃で快適）',
        desc: '夏の猛暑では歩けない国際通りややちむん通り（陶器街）の散策に最適な冬の那覇。美ら海の恵みを含む「琉球温泉」や天然温泉大浴場を備えたシティリゾートで、あぐー豚しゃぶしゃぶや泡盛を堪能。',
        spots: '国際通り、首里城公園、壺屋やちむん通り、瀬長島ウミカジテラス（天然温泉龍神の湯）',
        access: '那覇空港直結ゆいレールで県庁前駅・牧志駅まで約15分。',
        tip: '瀬長島ウミカジテラスの温泉露天風呂からは、青い海と那覇空港へ離着陸する飛行機を大迫力で眺められます。'
      },
      {
        key: 'amami_resort',
        title: '2. 鹿児島・東洋のガラパゴス奄美大島（冬のマングローブ原生林カヤック）',
        timing: 'おすすめ時期：11月〜3月（ホエールウォッチングは1月〜3月）',
        desc: '世界自然遺産の島・奄美大島。冬でも温暖な気候の中、金作原原生林ウォーキングやマングローブカヤックを楽しめます。海沿いのプライベートヴィラに宿泊し、名物「鶏飯（けいはん）」と黒糖焼酎を満喫。',
        spots: 'マングローブ原生林、金作原（きんさくばる）原生林、あやまる岬、ハートロック',
        access: '羽田・成田・関空・福岡・鹿児島から奄美空港へ直行便運航。',
        tip: '1月〜3月はザトウクジラが出産・子育てのために来遊する「ホエールウォッチング」のベストシーズンです。'
      },
      {
        key: 'yaeyama_warm',
        title: '3. 沖縄・石垣島＆竹富島（静寂に包まれる冬の離島リゾート＆水牛車散策）',
        timing: 'おすすめ時期：11月〜3月（混雑ゼロで過ごしやすい）',
        desc: '夏休みの大混雑が嘘のように静まり返る冬の八重山。赤瓦の集落が残る竹富島を水牛車でのんびり巡り、石垣牛の鉄板焼きディナーと南十字星が輝く夜空を満喫する大人の隠れ家リゾートステイ。',
        spots: '竹富島（コンドイビーチ・カイジ浜）、川平湾（グラスボート）、平久保崎灯台、ユーグレナモール',
        access: '石垣空港より市内・リゾートエリアへ直行バス・レンタカーで約20〜30分。',
        tip: '冬の石垣島は風が心地よく、日差しを気にせず快適に島内ドライブやサイクリングを楽しめます。'
      },
      {
        key: 'miyako_warm',
        title: '4. 沖縄・宮古島＆伊良部島（冬の澄み渡る宮古ブルーと贅沢オールインクルーシブ）',
        timing: 'おすすめ時期：11月〜3月（海の透明度が年間最高レベル）',
        desc: '冬はプランクトンが減少し「宮古ブルー」の透明度が最高潮に達する季節。飲食やアクティビティがすべて宿泊費に含まれる「オールインクルーシブ」リゾートで、贅沢な南国ステイを満喫できます。',
        spots: '与那覇前浜ビーチ、伊良部大橋（全長3,540m）、東平安名崎、砂山ビーチ',
        access: '羽田・関空・名古屋から宮古空港・下地島空港へ直行便運航。',
        tip: '伊良部大橋を渡る爽快ドライブと、ホテル内の温水インフィニティプールや温水ジャグジーでのリラックスが至福です。'
      }
    ]
  },
  {
    slug: 'autumn-temple-garden-lightup',
    badge: 'AUTUMN ILLUMINATED GARDEN',
    title: '【錦秋の光の芸術】紅葉庭園ライトアップ＆夜間特別拝観の宿 完全ガイド',
    metaDesc: '幻想的な闇に浮かび上がる紅葉の美！京都東山（清水寺・高台寺）、東京目白（ホテル椿山荘東京の雲海庭園）、金沢兼六園（雪吊りライトアップ）、宮城松島円通院など、夜間ライトアップを満喫できる極上宿を徹底解説。',
    heroDesc: '昼間の鮮やかな紅葉とは一変し、漆黒の夜空と鏡のような池の水面に映し出される光の芸術。門前宿や庭園自慢のホテルに宿泊し、夜間特別拝観の感動をそのまま客室へ持ち帰る贅沢な秋の旅。',
    categoryKey: 'autumn-temple-garden-lightup',
    areaGuides: [
      {
        key: 'kyoto_temple_lightup',
        title: '1. 京都・東山＆嵐山（高台寺のプロジェクションマッピングと清水の舞台）',
        timing: '開催期間：10月下旬〜12月上旬（夜間特別拝観）',
        desc: '高台寺の波心庭で行われる最新プロジェクションマッピングや、清水寺の舞台から放たれる青い一筋の光（観音様の慈悲）。東山周辺の京旅館に泊まれば、閉門間際まで夜桜・紅葉の幻想空間を堪能できます。',
        spots: '高台寺（臥龍池の紅葉リフレクション）、清水寺、東福寺、永観堂禅林寺（みかえり阿弥陀）、宝厳院（嵐山）',
        access: 'JR京都駅から市バスで祇園・清水道まで約15分。京阪祇園四条駅・清水五条駅徒歩圏内。',
        tip: '夜間拝観の入場待ち列を避けるため、閉門1時間前の20時〜20時半頃に入場すると比較的スムーズに鑑賞できます。'
      },
      {
        key: 'rikugien_tokyo',
        title: '2. 東京・目白＆文京（ホテル椿山荘東京の「東京雲海」と六義園夜間特別観賞）',
        timing: '開催期間：11月中旬〜12月上旬',
        desc: '広大な日本庭園に人工の霧を発生させるホテル椿山荘東京の「東京雲海×紅葉ライトアップ」は圧巻。大名庭園・六義園の「夜間特別観賞」と合わせて、都心にいながら圧倒的な自然美と名門ホテルステイを満喫。',
        spots: 'ホテル椿山荘東京庭園（東京雲海・三重塔）、六義園（回遊式築山泉水庭園）、旧古河庭園',
        access: '地下鉄有楽町線「江戸川橋駅」より徒歩約10分。JR目白駅よりバス約10分。',
        tip: '椿山荘のガーデンビュー客室を予約すると、お部屋の窓からライトアップされた雲海庭園をプライベートに独占できます。'
      },
      {
        key: 'kenrokuen_lightup',
        title: '3. 石川・金沢兼六園＆金沢城公園（冬の風物詩「雪吊り」と紅葉のライトアップ）',
        timing: '開催期間：10月下旬〜11月下旬（金沢城・兼六園四季物語 秋の段）',
        desc: '唐崎松の雪吊りと色鮮やかな紅葉が霞ヶ池に映り込む絶景。金沢城公園の菱櫓・石垣ライトアップとともに無料で夜間開放されます。兼六園周辺のホテルや茶屋街の町家宿で加賀料理に舌鼓。',
        spots: '兼六園（霞ヶ池・徽軫灯籠・唐崎松）、金沢城公園、玉泉院丸庭園、金沢21世紀美術館',
        access: 'JR金沢駅東口より路線バスで兼六園下・広坂まで約15分。',
        tip: '玉泉院丸庭園では、音楽に合わせて光の演出が変わる夜間ライトアップが行われており必見です。'
      },
      {
        key: 'matsushima_lightup',
        title: '4. 宮城・日本三景松島＆円通院（心字池に映る奇跡の紅葉リフレクション）',
        timing: '開催期間：10月下旬〜11月下旬（松島紅葉ライトアップ）',
        desc: '国指定重要文化財「円通院」の庭園。風のない夜、心字池の水面が完全な鏡となり、ライトアップされたモミジを上下対称に映し出す光景は息をのむ美しさ。松島湾を一望する温泉リゾートホテルが人気です。',
        spots: '円通院（三慧殿・心字池）、瑞巌寺、五大堂、松島遊覧船、松島さかな市場',
        access: 'JR仙石線「松島海岸駅」下車徒歩約5分。JR東北本線「松島駅」下車。仙台駅から約30分。',
        tip: '秋の松島湾で獲れる旬の「松島牡蠣（焼き牡蠣・牡蠣鍋）」と宮城の地酒を温泉宿で味わうのが至高です。'
      }
    ]
  },
  {
    slug: 'autumn-winter-onsen-with-pet',
    badge: 'PET FRIENDLY RESORT',
    title: '【愛犬と一緒】秋・冬のドッグラン＆ペット同伴温泉宿 完全ガイド',
    metaDesc: '愛犬も家族の一員！静岡伊豆高原、栃木那須高原、長野軽井沢、滋賀琵琶湖など、客室同伴OK、専用ドッグラン、愛犬用温泉・コース料理を完備した全国の極上ペットフレンドリー宿を徹底解説。',
    heroDesc: '色鮮やかな落ち葉を踏みしめながらの紅葉散歩や、澄んだ空気の広大なドッグラン。愛犬と一緒に客室でくつろぎ、一緒にレストランで食事を楽しめる、ワンちゃんファーストの極上温泉リゾートへ。',
    categoryKey: 'autumn-winter-onsen-with-pet',
    areaGuides: [
      {
        key: 'izu_pet_hotel',
        title: '1. 静岡・伊豆高原（愛犬同伴温泉宿のメッカ！専用足湯＆ドッグスパ）',
        timing: '通年（秋の気候良好・冬も温暖）',
        desc: '日本一ペットに優しいリゾート地・伊豆高原。愛犬専用の天然温泉バスタブ付き客室や、芝生の広大なアジリティドッグラン、獣医師監修の愛犬専用フレンチコースが揃ったホテルが多数点在します。',
        spots: '伊豆シャボテン動物公園（ペット同伴可）、大室山（リフト同伴可）、城ヶ崎海岸、愛犬の駅',
        access: '東海道新幹線熱海駅より伊豆急行線で伊豆高原駅まで約45分。小田原厚木道路経由。',
        tip: '「愛犬の駅」は室内・屋外ドッグランや愛犬カフェ、お土産が揃う伊豆ドライブの必寄りスポットです。'
      },
      {
        key: 'nasu_pet_resort',
        title: '2. 栃木・那須高原（北欧風の森で楽しむ広大なドッグパーク＆愛犬同室フレンチ）',
        timing: '通年（秋の紅葉ハイキング・冬の雪遊び）',
        desc: '豊かな自然に囲まれたロイヤルリゾート那須。数千坪の敷地に森のアジリティドッグランや室内プレイルームを完備。客室のテラスで愛犬と焚き火を囲んだり、愛犬と一緒に温泉を楽しめます。',
        spots: '那須どうぶつ王国（一部ドッグパークあり）、那須ハイランドパーク、那須ガーデンアウトレット',
        access: '東北新幹線「那須塩原駅」より車・レンタカーで約25分。東北自動車道那須ICより約15分。',
        tip: '愛犬同伴レストランでは、ワンちゃん用のアニバーサリーケーキ手配が可能なプランが記念日旅行に大人気です。'
      },
      {
        key: 'karuizawa_pet_hotel',
        title: '3. 長野・軽井沢（おしゃれなテラスカフェと森のドッグフレンドリーコテージ）',
        timing: '通年（秋の旧軽井沢散策・冬の白銀ドッグラン）',
        desc: 'ハルニレテラスやプリンスショッピングプラザなど愛犬同伴スポットが充実した軽井沢。独立型プライベートコテージなら、周りを気にせず愛犬とのびのび宿泊でき、専用庭付きヴィラも人気です。',
        spots: '軽井沢プリンスショッピングプラザ（ドッグランあり）、ハルニレテラス、雲場池、旧軽井沢銀座',
        access: '北陸新幹線「軽井沢駅」下車。上信越自動車道碓氷軽井沢ICより車約20分。',
        tip: 'ハルニレテラスの清流沿いデッキテラスは全店ペット同伴可能（一部テラス席）。愛犬とのカフェタイムに最適です。'
      },
      {
        key: 'biwako_pet_resort',
        title: '4. 滋賀・びわ湖畔＆おごと温泉（湖畔の散歩道と愛犬専用露天風呂付きヴィラ）',
        timing: '通年（琵琶湖のレイクビューリゾート）',
        desc: '琵琶湖の爽やかな風を感じるレイクサイドリゾート。客室専用のプライベートドッグランや愛犬専用露天風呂を備えたラグジュアリーヴィラで、近江牛ディナーを愛犬と一緒に客室でゆったり楽しめます。',
        spots: 'びわ湖バレイ（ドッグランあり・テラス同伴可）、白髭神社、近江八幡水郷散策',
        access: 'JR京都駅から湖西線で約20〜30分。名神高速京都東ICより湖西道路経由約25分。',
        tip: '京都観光の宿泊先としても便利。日中は京都で紅葉を散策し、夜は琵琶湖畔の静かなペット宿でくつろげます。'
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

for (const cfg of wave4Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated seasonal hub page: /${cfg.slug}`);
}
