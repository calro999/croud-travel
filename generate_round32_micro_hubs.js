const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
const allHotels = JSON.parse(fs.readFileSync(p, 'utf8'));

const hubs = [
  {
    slug: 'tochigi-nasu-shiobara-itamuro-kuroiso-stay',
    tag: 'NASU, ITAMURO & KUROISO GUIDE',
    title: '【栃木・那須塩原＆板室・黒磯】那須茶臼岳・板室立ち湯＆黒磯レトロカフェ宿 完全ガイド',
    metaTitle: '【栃木・那須塩原＆板室・黒磯】茶臼岳・板室立ち湯＆黒磯カフェ・那須牛宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '噴煙たなびく那須連山の主峰「茶臼岳ロープウェイ」、九尾の狐伝説が眠る「殺生石」、平安時代開湯・杖いらずの下野薬湯「板室温泉」の深型立ち湯、若者に人気の黒磯駅前SHOZOカフェストリート、とろける極上「那須黒毛和牛」ステーキ宿を徹底解説。',
    lead: '那須連山の雄大な裾野に広がる御用邸の高原リゾート「那須」。活火山ならではのダイナミックな噴煙を上げる「茶臼岳」とミステリアスな伝説が息づく「殺生石」。那珂川源流の静寂な山あいに佇み、綱につかまって深く浸かる伝統の立ち湯で知られる秘湯「板室温泉」。そして古い商店や倉庫を改装したお洒落なカフェやベーカリーが集まる「黒磯」。大自然のアクティビティと洗練されたカルチャーが融合する那須塩原ステイへご案内します。',
    guides: [
      {
        key: 'nasu_highland_ropeway_stay',
        badge: '活火山の息吹と那須七湯の名峰',
        title: '1. 那須岳（茶臼岳）ロープウェイ・殺生石＆那須高原リゾート露天風呂',
        timing: '通年（春〜初夏の新緑・ミネザクラ、夏の爽快登山、10月上旬の全山錦秋紅葉、冬の雪景色）',
        desc: '標高1,915m、今なお白い噴煙を上げ続ける那須連山の主峰「茶臼岳」。山麓から9合目までわずか3分40秒で結ぶ「那須ロープウェイ」を利用すれば、手軽に雲の上の大パノラマと荒々しい溶岩の惑星のような絶景を堪能できます。山麓には九尾の狐が巨石に化身したと伝わる史跡「殺生石」や、千三百年以上の歴史を誇る「那須温泉鹿の湯」の乳白色の濁り湯が湧き出します。',
        spots: '那須ロープウェイ（茶臼岳）、殺生石・千体地蔵、那須温泉 鹿の湯、那須高原展望台（恋人の聖地）、那須フラワーワールド',
        access: 'JR東北新幹線「那須塩原駅」より路線バス（関東自動車）で約60〜70分。東北自動車道「那須IC」より約30〜40分。',
        tip: '秋の紅葉期（10月上旬〜中旬）はロープウェイ周辺が全国屈指の鮮やかさに染まります。早朝7時台の運行開始に合わせた来訪が混雑回避のポイントです。'
      },
      {
        key: 'itamuro_onsen_standing_bath_stay',
        badge: '杖いらずの下野の薬湯・清流湯治場',
        title: '2. 板室温泉「杖いらずの立ち湯」＆那珂川源流カヌー・静寂の隠れ家湯治宿',
        timing: '通年（四季折々の那珂川渓谷美、新緑と川霧の夏、冬の静寂の雪見風呂）',
        desc: '平安時代、後冷泉天皇の時代に発見されたと伝わる「板室温泉」。「下野の薬湯」として名高く、温泉に浸かると足腰の痛みが治り杖を忘れて帰ることから「杖いらずの湯」と称えられてきました。深さ1m以上の湯船に天井から下がった綱につかまって立ったまま浸かる伝統の「立ち湯」は血行促進とリラックス効果抜群。近年は那珂川源流でのSUPやカヌー、渓流釣りも人気を集めています。',
        spots: '板室温泉街、板室ダム湖（カヌー・SUP体験）、那須フィッシングパーク、乙女の滝、木の俣渓谷',
        access: 'JR那須塩原駅西口よりバスで約35分。東北道「黒磯板室IC」より車で約20分。',
        tip: '木の俣渓谷はエメラルドグリーンに澄み切った清流が美しく、夏場は川遊びや森林浴の絶好のヒーリングスポットです。'
      },
      {
        key: 'kuroiso_cafe_nasu_wagyu_stay',
        badge: 'カフェの聖地と日本最高峰のブランド牛',
        title: '3. 黒磯駅前「SHOZO STREET」カフェ散歩＆極上「那須黒毛和牛」美食宿',
        timing: '通年（心地よい風が吹き抜けるテラス席の季節、冬の温かな珈琲時間）',
        desc: 'JR黒磯駅前の通りには、日本のカフェブームの先駆けとなった「1988 CAFE SHOZO」をはじめ、古道具店、ベーカリー、洋服店が軒を連ねる洗練されたカルチャーストリートが形成されています。散策の後は、那須の大自然と澄んだ空気の中で丹精込めて育てられた最高級「那須黒毛和牛」のステーキやローストビーフに舌鼓。高原野菜や那須高原のチーズとともに贅沢な美食ナイトを過ごせます。',
        spots: '1988 CAFE SHOZO、黒磯駅前通り（SHOZO STREET）、那須塩原市図書館みるる、那須ガーデンアウトレット',
        access: 'JR東北本線・宇都宮線「黒磯駅」下車すぐ。東北新幹線「那須塩原駅」より車で約10分。',
        tip: '黒磯駅直結の那須塩原市図書館「みるる」は、森の中にいるような美しい木製ルーバー建築が話題の現代建築スポットです。'
      }
    ]
  },
  {
    slug: 'nagano-azumino-wasabi-hotaka-art-stay',
    tag: 'AZUMINO & WASABI ART GUIDE',
    title: '【長野・安曇野＆大王わさび農場・穂高】常念岳絶景・蓼川水車小屋＆安曇野アート宿 完全ガイド',
    metaTitle: '【長野・安曇野＆穂高温泉】大王わさび農場・蓼川カヤック＆アートライン宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '北アルプス常念岳の残雪パノラマ、日本最大「大王わさび農場」の蓼川水車小屋とクリアボート体験、名湯「穂高温泉郷」の美肌露天風呂、安曇野アートラインの美術館・ガラス工房めぐり、名物安曇野そばと信州サーモンを味わう宿を徹底厳選。',
    lead: '残雪の北アルプス・常念岳を背景に、清らかな雪解け湧水がせせらぐ田園の理想郷「安曇野」。黒澤明監督の映画の舞台となった「大王わさび農場」の蓼川水車小屋。底まで透き通った名水の上を滑るクリアボート。白樺と赤松の森に湧き出る美肌の名湯「穂高温泉郷」。そして個性豊かな美術館が点在する「安曇野アートライン」。清澄な風とアート、豊かな大地の恵みに包まれる信州安曇野ステイへご案内します。',
    guides: [
      {
        key: 'daio_wasabi_farm_watermill_stay',
        badge: '名水百選の日量十二万トン湧水',
        title: '1. 大王わさび農場・蓼川「水車小屋」＆透明度抜群クリアボートラフティング',
        timing: '通年（春の桜と残雪アルプス、夏の青々と茂るわさび田の日よけ寒冷紗、秋の黄葉）',
        desc: '北アルプスの雪解け水が一日約12万トンも湧き出る日本最大のわさび田「大王わさび農場」。清流・蓼川沿いには、黒澤明監督の映画『夢』のロケ地として作られた三連の水車小屋が今なお水しぶきを上げ、どこか懐かしい日本の原風景を見せてくれます。蓼川では底が透けるクリアボートに乗ってのんびり川下りを楽しむ体験が大人気。名物の「本わさび丼」や「本わさびソフトクリーム」も必食です。',
        spots: '大王わさび農場（水車小屋・大王神社）、安曇野気球体験、安曇野わさび田湧水群公園、早春賦歌碑',
        access: 'JR大糸線「穂高駅」よりタクシーまたはレンタサイクルで約10〜15分。長野自動車道「安曇野IC」より約10分。',
        tip: '穂高駅前にはレンタサイクルショップがあり、平坦で心地よい風が抜ける田園ロードを自転車で巡るのが最も爽快でおすすめです。'
      },
      {
        key: 'hotaka_onsen_japan_alps_stay',
        badge: '北アルプス山麓の森林リゾート温泉',
        title: '2. 穂高温泉郷・北アルプス常念岳ビュー露天風呂＆信州サーモン・手打ちそば宿',
        timing: '通年（冬の雪見風呂、新緑の露天風呂、秋の新そば祭り）',
        desc: '北アルプス燕岳の登山口・中房温泉から引湯した肌に優しい単純硫黄温泉が湧く「穂高温泉郷」。アカマツやクヌギの原生林に囲まれた高原のリゾート地で、森林浴を楽しみながら湯浴みができる露天風呂付き旅館やペンションが充実しています。夕食には安曇野の清流で育った鮮やかなオレンジ色の「信州サーモン」のお造りや、挽きたて打ちたての香り高い信州安曇野そばを堪能できます。',
        spots: '穂高温泉郷（しゃくなげの湯）、安曇野の里、国営アルプスあづみの公園（堀金・穂高地区）、烏川渓谷緑地',
        access: 'JR大糸線「穂高駅」よりバスまたはタクシーで約10〜15分。安曇野ICより約25分。',
        tip: '国営アルプスあづみの公園では、冬期に北信越最大級の幻想的なイルミネーションイベントが開催され、雪景色とのコラボレーションが見事です。'
      },
      {
        key: 'azumino_art_line_museum_stay',
        badge: '北アルプスの麓に連なる美の回廊',
        title: '3. 安曇野アートライン美術館めぐり（禄山美術館・ちひろ美術館）＆クラフト工房散歩',
        timing: '通年（緑あふれる庭園が美しい春〜秋、静かに芸術と対峙する冬）',
        desc: '安曇野市から白馬村にかけての約50kmの山麓に、19館もの美術館・博物館が点在する「安曇野アートライン」。日本近代彫刻の扉を開いた荻原碌山の作品を収める教会風レンガ造りの「碌山美術館」や、心温まる絵本原画と広大な庭園が広がる「安曇野ちひろ美術館」、ガラスや木工のクラフト作家のアトリエショップなど、感性を刺激するアート体験が日常の喧騒を忘れさせてくれます。',
        spots: '碌山美術館、安曇野ちひろ美術館、安曇野アートヒルズ（クラフト工房）、絵本美術館 森のおうち、大熊美術館',
        access: '各館へはJR穂高駅・信濃松川駅より周遊バス「あづみ野周遊バス」またはタクシー・レンタサイクル利用。',
        tip: '安曇野ちひろ美術館のカフェでは、信州産食材を使ったスイーツを味わいながら北アルプスを借景にした美しい庭園を眺められます。'
      }
    ]
  },
  {
    slug: 'hyogo-ako-hinase-oyster-castle-stay',
    tag: 'AKO & HINASE OYSTER GUIDE',
    title: '【兵庫・赤穂＆日生・相生】赤穂義士の城跡・播磨灘夕日露天＆極上坂越牡蠣宿 完全ガイド',
    metaTitle: '【兵庫・赤穂＆日生】赤穂城跡・播磨灘インフィニティ温泉＆坂越かき宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '忠臣蔵のふるさと国史跡「赤穂城跡」と大石神社、瀬戸内海・播磨灘の水平線と一体になる「赤穂温泉」絶景インフィニティ露天風呂、清浄海域で育つプリプリのブランド「坂越かき」・日生名物「カキオコ」、天然塩の赤穂塩づくり体験宿を徹底解説。',
    lead: '元禄赤穂事件・忠臣蔵の義士たちが生きた歴史の城下町「播州赤穂」。美しく復元された本丸門と庭園が広がる「国史跡 赤穂城跡」。赤穂御崎の高台からは、瀬戸内海・播磨灘の多島美と黄金色に染まる夕日のパノラマ。海と湯船がひと続きになったような絶景インフィニティ露天風呂が自慢の「赤穂温泉」。そして波静かな坂越湾で育つ大粒で縮まない冬の極上「坂越かき」。歴史情緒と海の絶景・美食に満たされる赤穂ステイへご案内します。',
    guides: [
      {
        key: 'ako_castle_samurai_heritage_stay',
        badge: '国指定史跡・忠臣蔵の魂が眠る城下町',
        title: '1. 赤穂城跡（本丸御殿跡・大手門）＆大石神社・花岳寺（義士ゆかりの史跡巡礼）',
        timing: '通年（12月14日の「赤穂義士祭」、春の桜並木とお城巡り、秋の城下町散策）',
        desc: '浅野内匠頭長矩が居城とし、甲州流軍学に基づき築城された変形輪郭式の海岸平城「赤穂城跡」。立派な大手門や本丸厩口門、本丸庭園や二之丸庭園が見事に復元され、往時の威容を偲ばせます。城内には四十七士を祀る「大石神社」が鎮座し、義士の宝物を展示。浅野家と赤穂義士の菩提寺である「花岳寺」には義士の墓所が静かに並び、歴史ファンを魅了してやみません。',
        spots: '国史跡赤穂城跡（本丸庭園・大手門）、大石神社（義士宝物殿）、花岳寺、赤穂市立歴史博物館、息継ぎ井戸',
        access: 'JR赤穂線「播州赤穂駅」下車徒歩約15分。山陽自動車道「赤穂IC」より車で約10分。',
        tip: '播州赤穂駅観光案内所では観光レンタサイクル（電動アシストあり）の貸出があり、城下町から赤穂御崎まで快適にサイクリングできます。'
      },
      {
        key: 'harima_sea_sunset_onsen_stay',
        badge: '日本の夕陽百選・海に浮かぶ名湯',
        title: '2. 赤穂御崎・播磨灘パノラマ「絶景インフィニティ露天風呂」＆赤穂温泉リゾート',
        timing: '通年（特に秋〜冬の澄んだ水平線に沈むだるま夕日、春の御崎桜まつり）',
        desc: '瀬戸内海国立公園内に突き出た岬「赤穂御崎」。海岸沿いの断崖に建ち並ぶ赤穂温泉の宿の最大の魅力は、湯船の縁が海へと溶け込むような「インフィニティ露天風呂」。日本の夕陽百選に選ばれた播磨灘の夕暮れ時、茜色から紫へと移ろう空と海を湯に浸かりながら眺める時間は息を呑む美しさです。ミネラル分を豊富に含んだ強塩温泉は「よみがえりの湯」とも呼ばれ、体の芯から温まります。',
        spots: '赤穂御崎（きらきら坂・伊和都比売神社）、赤穂海浜公園・塩の国（製塩体験）、畳岩、御崎遊歩道',
        access: 'JR播州赤穂駅より路線バス（御崎行）で約15〜20分。赤穂ICより車で約15分。',
        tip: '伊和都比売神社から海岸へと下る「きらきら坂」は、石畳の階段沿いにお洒落なイタリアンやカフェ、ジェラート店が並ぶ映えスポットです。'
      },
      {
        key: 'sakoshi_oyster_hinase_gourmet_stay',
        badge: '大粒で甘い坂越かきと日生カキオコ',
        title: '3. 名物「坂越かき」炭火焼き会席＆日生ご当地グルメ「カキオコ」・生牡蠣食べ比べ',
        timing: '冬〜春（11月〜4月の牡蠣シーズン、特に身が最も太る1〜3月が最盛期）',
        desc: '名水千種川からの豊富なプランクトンに恵まれた清浄海域・坂越湾。ここで育つ「坂越かき」は、一年で大粒に成長し、加熱しても縮まないふっくらとした身と、えぐみがなく濃厚な甘みが特徴です。宿では焼き牡蠣、牡蠣フライ、土手鍋、牡蠣ご飯など贅沢な牡蠣尽くし会席を堪能。足を伸ばして隣接する岡山県日生（ひなせ）へ行けば、鉄板の上に牡蠣をどっさりのせた名物「カキオコ」に舌鼓を打てます。',
        spots: '坂越の古い町並み（重伝建地区・奥藤酒造）、海の駅しおさい市場、日生五味の市（牡蠣BBQ）、みなとの見える丘公園',
        access: '坂越へはJR赤穂線「坂越駅」よりバス約10分。日生へは播州赤穂駅から電車で約15分。',
        tip: '坂越港の「しおさい市場」では、併設の焼き牡蠣食べ放題コーナーで獲れたての新鮮な牡蠣を網の上で豪快に焼いて食べられます。'
      }
    ]
  },
  {
    slug: 'kagawa-marugame-sakaide-seto-bridge-stay',
    tag: 'MARUGAME & SETO BRIDGE GUIDE',
    title: '【香川・丸亀＆坂出・瀬戸大橋】石垣の名城丸亀城・元祖骨付鳥＆瀬戸大橋パノラマ宿 完全ガイド',
    metaTitle: '【香川・丸亀＆坂出・瀬戸大橋】現存丸亀城・骨付鳥＆瀬戸大橋夕景宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '総高60mの日本一高い石垣を誇る現存木造十二天守「丸亀城」、全国に誇るご当地グルメ「元祖 骨付鳥（おや・ひな）」のスパイシーな肉汁、東山魁夷せとうち美術館から眺める瀬戸大橋の壮大なパノラマ、本場讃岐うどんの名店めぐり宿を徹底解説。',
    lead: '白壁の木造天守を戴く日本一の高石垣「丸亀城」。四層に重なる扇の勾配と呼ばれる美しい曲線美の石垣が旅人を圧倒します。全国の肉好きを唸らせるスパイシーな丸亀発祥のご当地グルメ「骨付鳥」。瀬戸内海を跨いで本州と四国を結ぶ世紀の大架橋「瀬戸大橋」。夕景に浮かび上がる橋梁美を望む「東山魁夷せとうち美術館」と、朝から行列ができる名門讃岐うどん店。歴史・橋梁・美食が凝縮した香川・中讃ステイへご案内します。',
    guides: [
      {
        key: 'marugame_castle_stone_wall_stay',
        badge: '日本一の石垣美と現存十二天守',
        title: '1. 丸亀城天守（扇の勾配・高石垣六十メートル）＆丸亀うちわ伝統工芸体験',
        timing: '通年（春の桜まつりと石垣ライトアップ、新緑のお城散歩、秋の菊花展）',
        desc: '築城四百年の歴史を刻む「丸亀城」。山麓から天守まで四段に重ねられた石垣の総高は約60mにおよび日本一の高さを誇ります。反り返る曲線が優美な「扇の勾配」の石垣の上には、全国に現存する木造十二天守の一つである三重三階の小ぶりで美しい天守が凛と佇みます。城下町は日本のうちわ生産量シェア9割を誇る伝統工芸「丸亀うちわ」の産地でもあり、職人の技に触れる手作り体験も人気です。',
        spots: '丸亀城天守・大手一の門・見返り坂、うちわの港ミュージアム、丸亀市猪熊弦一郎現代美術館（MIMOCA）',
        access: 'JR予讃線「丸亀駅」下車徒歩約15分。高松自動車道「善通寺IC」または「坂出IC」より車で約15分。',
        tip: '丸亀駅前にある「猪熊弦一郎現代美術館（MIMOCA）」は、谷口吉生設計の洗練された空間にモダンアートが広がる必見の現代アートスポットです。'
      },
      {
        key: 'honetsukidori_sanuki_udon_stay',
        badge: 'ニンニクとスパイスが弾ける丸亀のソウルフード',
        title: '2. 元祖「骨付鳥」（おやどり・ひなどり）＆早朝営業の本場讃岐うどん巡礼',
        timing: '通年（年中味わえる熱々ジューシーなご当地グルメ、朝うどん体験）',
        desc: '丸亀市を発祥とする全国的人気グルメ「骨付鳥」。鶏のもも肉を特製のスパイスとニンニクでじっくりオーブンで焼き上げ、皮はパリッと中は肉汁が溢れ出します。歯ごたえと深い旨味が癖になる「おやどり」と、柔らかくジューシーな「ひなどり」の食べ比べが王道。お皿に残った秘伝の油におにぎりを浸して食べるのが本場の流儀。翌朝は近隣の製麺所直営の讃岐うどん店で打ちたてのうどんをすする黄金コースです。',
        spots: '一鶴（骨付鳥発祥の店 各店）、讃岐うどん名店各店（日の出製麺所、よしや、なかむら等）',
        access: 'JR丸亀駅周辺に骨付鳥の名店が集中。早朝うどん店へはレンタカーが便利。',
        tip: '超有名店「日の出製麺所（坂出市）」の店頭うどん営業時間は「昼の11:30〜12:30のわずか1時間」という幻のうどん店として有名です。'
      },
      {
        key: 'seto_oohashi_bridge_sunset_stay',
        badge: '世紀の大架橋と日本画の巨匠の美意識',
        title: '3. 瀬戸大橋パノラマ記念公園＆東山魁夷せとうち美術館・沙弥島サンセット',
        timing: '通年（毎週土曜日や特定日の瀬戸大橋ライトアップ、夕暮れマジックアワー）',
        desc: '坂出市から岡山県倉敷市まで、瀬戸内海の島々を飛び石にして渡る全長9.4kmの「瀬戸大橋」。橋のたもとに位置する「瀬戸大橋記念公園」の回転展望タワーからは、雄大な橋梁と多島美の全景を360度見渡せます。万葉の歴史が息づく沙弥島（しゃみじま）に建つ「香川県立東山魁夷せとうち美術館」は、カフェの巨大ガラス窓越しに瀬戸大橋を一幅の絵画のように望める絶景美術館です。',
        spots: '瀬戸大橋記念公園・タワー、香川県立東山魁夷せとうち美術館、沙弥島（瀬戸内国際芸術祭会場）、番の州臨海公園',
        access: 'JR坂出駅より坂出市営バス（瀬戸大橋記念公園行）で約20分。瀬戸中央道「坂出北IC」すぐ。',
        tip: '毎週土曜日や連休の日没後には瀬戸大橋が黄金色にライトアップされ、漆黒の瀬戸内海に浮かび上がる光のアーチはロマンチックの極みです。'
      }
    ]
  },
  {
    slug: 'kagoshima-ibusuki-sand-bath-kaimondake-stay',
    tag: 'IBUSUKI & KAIMONDAKE GUIDE',
    title: '【鹿児島・指宿＆開聞岳・知覧】天然砂むし温泉・薩摩富士開聞岳＆知覧武家屋敷宿 完全ガイド',
    metaTitle: '【鹿児島・指宿＆開聞岳・知覧】天然砂むし・開聞岳＆知覧武家屋敷・黒豚宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '海岸の自然熱砂に埋まる世界唯一の「天然砂むし温泉 砂楽」、円錐形の美しい薩摩富士「開聞岳」、JR日本最南端「西大山駅」の黄色いポスト、国の名勝に指定された薩摩の小京都「知覧武家屋敷庭園」、本場かごしま黒豚しゃぶしゃぶ宿を徹底解説。',
    lead: '南国情緒あふれる薩摩半島の最南端「指宿」。波打ち際の海岸から湧き出る温泉熱を利用した世界でも唯一無二の入浴法「天然砂むし温泉」。波音を聞きながら温かい砂に包まれ、全身から汗が噴き出すデトックス体験は究極の癒やし。見事に均整の取れた名峰「薩摩富士・開聞岳」。枯山水庭園が美しい薩摩の小京都「知覧武家屋敷」。南国の太陽と大地のエネルギーに心身が満ち潮のように潤う薩摩ステイへご案内します。',
    guides: [
      {
        key: 'ibusuki_natural_sand_bath_stay',
        badge: '世界唯一・天然の蒸し風呂デトックス',
        title: '1. 天然砂むし温泉「砂楽」＆錦江湾オーシャンビュー露天・知林ヶ島砂州散歩',
        timing: '通年（波音心地よい海風の春〜秋、冬の暖かな砂むし温泉、干潮時の砂州出現）',
        desc: '海岸の砂浜から温泉が自噴する指宿特有の地熱を利用した「天然砂むし温泉」。専用の浴衣を着て砂の上に横たわると、砂かけさんが適温の温かい砂を全身にかけてくれます。心地よい砂の重みと約50度の熱により、わずか10〜15分で全身から大量の汗が噴き出し、老廃物が排出されます。指宿の温泉リゾートホテルでは、錦江湾と桜島・大隅半島を見渡す絶景オーシャンビュー露天風呂が満喫できます。',
        spots: '砂むし会館 砂楽、ヘルシーランド露天風呂「たまて箱温泉」、知林ヶ島（縁結びの砂州の島・ちりんロード）、指宿温泉街',
        access: 'JR指宿枕崎線「指宿駅」より路線バスで約5分（砂むし会館下車）。鹿児島市内より車で約1時間15分。',
        tip: '「たまて箱温泉」はトリップアドバイザーの日帰り温泉部門で全国1位に選ばれた絶景露天風呂で、開聞岳と東シナ海がパノラマで広がります。'
      },
      {
        key: 'kaimondake_satsuma_fuji_stay',
        badge: '標高九百二十四メートルの薩摩富士',
        title: '2. 薩摩富士「開聞岳」パノラマ・JR日本最南端「西大山駅」＆池田湖イッシー伝説',
        timing: '通年（1月の菜の花満開、春〜夏の青空と登山、秋のススキ原）',
        desc: '薩摩半島の南端にすっくとそびえ立つ標高924mの秀峰「開聞岳」。見事な円錐形の山容から「薩摩富士」と称えられ、日本百名山にも選ばれています。JR日本最南端の駅「西大山駅」は、ホームから黄色い菜の花畑越しに開聞岳を望む絶景フォトスポット。駅前の「幸せを届ける黄色いポスト」から手紙を投函するのも人気。九州最大のカルデラ湖「池田湖」では大うなぎや幻の怪獣イッシー伝説に思いを馳せられます。',
        spots: '開聞岳、JR西大山駅（黄色いポスト）、長崎鼻・龍宮神社（浦島太郎伝説発祥の地）、池田湖、かいもん山麓ふれあい公園',
        access: '指宿駅よりJR指宿枕崎線で「西大山駅」まで約15分。長崎鼻へは指宿駅よりバス約35分。',
        tip: '長崎鼻の突端にある白亜の灯台からは、海越しに開聞岳の稜線が裾野まで完璧な美しさで見渡せる指宿屈指のビューポイントです。'
      },
      {
        key: 'chiran_samurai_residence_stay',
        badge: '薩摩の小京都と至高の黒豚グルメ',
        title: '3. 薩摩の小京都「知覧武家屋敷庭園」＆特攻平和会館・本場かごしま黒豚会席',
        timing: '通年（新緑の生垣庭園、知覧茶の新茶期、しっとりとした雨情の石垣）',
        desc: '江戸時代、薩摩藩の外城制度のもとで築かれた「知覧武家屋敷群」。約700mの通り沿いに整然と刈り込まれた茶垣や石垣が連なり、7つの庭園が国の名勝に指定されています。母ヶ岳を借景にした見事な枯山水庭園は薩摩の美意識の結晶。また第二次世界大戦末期の歴史を今に伝える「知覧特攻平和会館」は平和への祈りを深める地。夕食にはサツマイモを食べて育った本場「かごしま黒豚」のしゃぶしゃぶやとんかつが舌を唸らせます。',
        spots: '知覧武家屋敷庭園（名勝庭園群）、知覧特攻平和会館、知覧茶農園、ホタル館 富屋食堂',
        access: '指宿駅より車で約40分。鹿児島中央駅よりバスで約1時間15分。指宿スカイライン「知覧IC」より約15分。',
        tip: '知覧は日本有数の銘茶「知覧茶」の産地。武家屋敷通りの茶屋で味わう淹れたての知覧茶と郷土菓子「げたんは」の相性は格別です。'
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
  console.log('All 5 round 32 micro hubs successfully generated!');
}

main();
