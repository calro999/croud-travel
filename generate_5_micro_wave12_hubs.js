const fs = require('fs');
const path = require('path');

const microWave12Configs = [
  {
    slug: 'tottori-kaike-onsen-daisen-stay',
    badge: 'KAIKE ONSEN & DAISEN GUIDE',
    title: '【鳥取・皆生温泉＆伯耆大山】海の温泉・美保湾パノラマ＆境港松葉ガニ宿 完全ガイド',
    metaDesc: '山陰屈指の海辺リゾート鳥取皆生温泉＆伯耆富士大山エリア完全特化！日本海の砂浜から湧く「海の温泉（塩化物泉）」、名峰大山の絶景ドライブ、境港直送の松葉ガニ・境港サーモン・鳥取和牛会席宿を徹底解説。',
    heroDesc: '弓ヶ浜の白砂青松と雄大な「伯耆富士・大山」を望む「皆生温泉」。海中から湧き出す塩化物泉の温まりの湯。境港で水揚げされた極上の松葉ガニや紅ズワイガニ、鳥取和牛オレイン55に舌鼓を打つ山陰の極上ステイ。',
    categoryKey: 'tottori-kaike-onsen-daisen-stay',
    areaGuides: [
      {
        key: 'kaike_ocean_view_onsen',
        title: '1. 皆生温泉海岸〜弓ヶ浜（日本海から湧き出すミネラル豊富な美肌の塩湯）',
        timing: '通年（夏の皆生海水浴場・冬の荒波日本海と雪景色）',
        desc: '明治時代に地元の漁師が海中に湧き出る温泉を発見したのが始まりの「皆生（かいけ）温泉」。ナトリウム・カルシウム塩化物泉は保温効果と保湿効果が抜群。白砂青松の弓ヶ浜海岸散策と海辺の足湯。',
        spots: '皆生温泉海浜公園（足湯・夕日スポット）、皆生つるや、日帰り温泉おーゆ・ランド、米子水鳥公園',
        access: 'JR山陰本線「米子駅」より路線バスで約20分。米子鬼太郎空港より車約20分。',
        tip: '皆生温泉の海岸沿い遊歩道は「日本の夕陽百選」に選ばれており、日本海に沈む夕日と夕焼け空が絶景です。'
      },
      {
        key: 'daisen_highland_nature_stay',
        title: '2. 伯耆大山〜大山寺・鍵掛峠（西日本最高峰のブナ原生林と南壁パノラマ）',
        timing: '通年（春〜夏の新緑ハイキング・秋の紅葉・冬の大山スキー）',
        desc: '標高1,729m、神の山として崇められてきた「伯耆大山（ほうきだいせん）」。日本屈指の広さを誇るブナの原生林。大山南壁の荒々しい岩肌と紅葉が広がる「鍵掛峠（かぎかけとうげ）」。名刹「大山寺」と大山まきばみるくの里。',
        spots: '大山寺・大神山神社奥宮、鍵掛峠展望台、大山まきばみるくの里（特濃ソフトクリーム）、植田正治写真美術館',
        access: '米子市街・皆生温泉より車で約30〜40分。',
        tip: '「植田正治写真美術館」では、館内のスリット窓から大山が逆さに映り込む帽子モニュメントのフォトジェニックな写真が撮れます。'
      },
      {
        key: 'sakaiminato_crab_gourmet',
        title: '3. 境港直送「松葉ガニ」＆鳥取和牛（日本海のカニ王国と極上オレイン牛）',
        timing: '秋〜冬期（9月〜紅ズワイガニ、11月〜3月の松葉ガニ解禁）',
        desc: '日本屈指の水揚げ量を誇る「境港」。タグ付きのブランド松葉ガニを丸ごと茹で・焼き・刺身・カニ鍋で味わうフルコース。肉質の55%以上がオレイン酸でとろけるような口溶けの「鳥取和牛オレイン55」。',
        spots: '境港水産物直売センター、水木しげるロード（妖怪ブロンズ像・妖怪神社）、境港大漁市場なかうら',
        access: '皆生温泉より車で約25分（境港エリア）。',
        tip: '水木しげるロードは夜になると妖怪たちの影絵が歩道にライトアップされ、昼とは全く異なる幻想的な雰囲気を楽しめます。'
      }
    ]
  },
  {
    slug: 'fukushima-aizu-ashinomaki-ouchijuku-stay',
    badge: 'AIZU WAKAMATSU & OUCHIJUKU GUIDE',
    title: '【福島・会津若松＆芦ノ牧温泉】鶴ヶ城・大内宿ねぎそば＆渓谷露天・ねこ駅長宿 完全ガイド',
    metaDesc: '会津の歴史と渓谷美・福島会津若松＆芦ノ牧温泉エリア完全特化！赤瓦の「鶴ヶ城」、江戸時代の宿場町「大内宿」の一本ねぎそば、芦ノ牧温泉駅の「ねこ駅長」、大川渓谷を望む絶景露天風呂と会津馬刺し・地酒宿を徹底解説。',
    heroDesc: '幕末の歴史が息づく会津の城下町と、阿賀川（大川）が削り出した深い渓谷「芦ノ牧温泉」。江戸の面影を色濃く残す茅葺き屋根の宿場町「大内宿」。会津地鶏や会津馬刺し、日本屈指の銘酒の数々に酔いしれる歴史旅。',
    categoryKey: 'fukushima-aizu-ashinomaki-ouchijuku-stay',
    areaGuides: [
      {
        key: 'ashinomaki_valley_view_onsen',
        title: '1. 芦ノ牧温泉〜大川羽鳥県立自然公園（大川渓谷の絶壁に佇む秘境温泉郷）',
        timing: '通年（春の新緑・秋の紅葉渓谷・冬の雪見風呂）',
        desc: '約1,200年前に弘法大師が開湯したと伝わる「芦ノ牧温泉」。大川の断崖絶壁に沿って旅館が立ち並び、渓流のせせらぎを聞きながら入浴できる「棚田風露天風呂」。会津鉄道「芦ノ牧温泉駅」の愛らしい「ねこ駅長」。',
        spots: '大川渓谷遊歩道、芦ノ牧温泉駅（ねこ駅長ばす・らぶ）、芦ノ牧ドライブ温泉足湯、塔のへつり（奇岩断崖）',
        access: '会津鉄道「芦ノ牧温泉駅」より各宿送迎バスで約5分。会津若松市街より車で約25分。',
        tip: '「塔のへつり」は100万年の歳月をかけて侵食された奇岩怪石の景勝地で、吊り橋を渡って岩窟へ入るスリルが人気です。'
      },
      {
        key: 'aizu_tsurugajo_higashiyama',
        title: '2. 鶴ヶ城〜大内宿（赤瓦の天守閣と江戸の茅葺き屋根一本ねぎそば）',
        timing: '通年（春の鶴ヶ城桜まつり・冬の大内宿雪まつり）',
        desc: '日本で唯一の赤瓦の天守閣「鶴ヶ城（会津若松城）」と白虎隊の眠る飯盛山。街道沿いに約50軒の茅葺き民家が並ぶ国重要伝統的建造物群保存地区「大内宿」。箸の代わりに一本の長ネギを使って食べる名物「ねぎそば」。',
        spots: '鶴ヶ城（天守閣・茶室麟閣）、大内宿（見晴台・三澤屋）、飯盛山（さざえ堂・白虎隊墓所）、七日町通り（蔵造り商店街）',
        access: 'JR磐越西線「会津若松駅」下車。大内宿まで車・バスで約40分。',
        tip: '大内宿の「一本ねぎそば」は、ネギをかじりながら薬味代わりに蕎麦をすくい上げる独特の体験が楽しめます。'
      },
      {
        key: 'ouchijuku_negisoba_stay',
        title: '3. 会津の美食文化（極上桜肉会津馬刺し・こづゆ＆全国新酒鑑評会金賞の地酒）',
        timing: '通年（全国新酒鑑評会で金賞受賞数日本一を誇る日本酒王国）',
        desc: '脂身が少なく赤身の旨味が凝縮された「会津馬刺し」を辛子味噌醤油で。武家料理から生まれた具だくさんの汁物「こづゆ」、会津地鶏の炭火焼きや岩魚の塩焼き。末廣、飛露喜、写楽など全国屈指の会津地酒とのペアリング。',
        spots: '末廣酒造 嘉永蔵（酒蔵見学・カフェ）、会津郷土料理店、七日町カフェ',
        access: '会津若松・東山温泉・芦ノ牧温泉。',
        tip: '会津の馬刺しはニンニク醤油ではなく、会津伝統の「特製辛子味噌」を醤油に溶いて食べるのが本場の極上スタイルです。'
      }
    ]
  },
  {
    slug: 'gifu-gero-onsen-heritage-stay',
    badge: 'GERO ONSEN HERITAGE GUIDE',
    title: '【岐阜・下呂温泉】日本三名泉・美肌の湯＆飛騨牛トマト丼・温泉街湯めぐり 完全ガイド',
    metaDesc: '日本三名泉・岐阜下呂温泉エリア完全特化！草津・有馬と並ぶpH9.2の「つるつる美肌湯」、湯めぐり手形での名旅館外湯めぐり、飛騨川の噴泉池、名物飛騨牛トマト丼・温玉ソフトと飛騨牛朴葉味噌会席宿を徹底解説。',
    heroDesc: '有馬・草津と並び称される日本三名泉「下呂温泉」。pH9.2を誇る天然の石鹸のようなとろりとした美肌湯。飛騨川のせせらぎを聞きながら歩く温泉街の足湯めぐりと、飛騨牛朴葉味噌焼きの香ばしい香りに包まれる休日。',
    categoryKey: 'gifu-gero-onsen-heritage-stay',
    areaGuides: [
      {
        key: 'gero_bihada_onsen_walk',
        title: '1. 下呂温泉街〜飛騨川沿い（日本三名泉・つるつる美肌湯と足湯めぐり）',
        timing: '通年（冬の澄んだ空気と雪見風呂・春の桜並木）',
        desc: '室町時代の僧・万里集九や江戸時代の儒学者・林羅山が「日本三名泉」と称えた下呂温泉。アルカリ性単純温泉の湯は、絹のように滑らかで肌を包み込む「美人の湯」。「湯めぐり手形」で加盟旅館の銘湯をめぐる旅。',
        spots: '噴泉池（飛騨川河川敷）、下呂発温泉博物館、足湯各所（さるぼぼ七福神社足湯・加恵瑠神社）、温泉寺（173段の石段）',
        access: 'JR高山本線「下呂駅」下車すぐ。名古屋駅から特急「ワイドビューひだ」で直通約1時間40分。',
        tip: '「温泉寺」の石段を登りきった境内からは、下呂温泉街と飛騨川を一望するパノラマ夜景が広がります。'
      },
      {
        key: 'gero_gassho_village_stay',
        title: '2. 下呂温泉合掌村〜いでゆ朝市（白川郷から移築された合掌造りと足湯）',
        timing: '通年（合掌造りの四季・秋の紅葉・森の滑り台）',
        desc: '世界遺産・白川郷などから移築された10棟の合掌造り民家が並ぶ野外博物館「下呂温泉合掌村」。国指定重要文化財「旧大戸家住宅」や陶芸・和紙漉き体験。175mのローラースライダー「森の滑り台」。',
        spots: '下呂温泉合掌村（旧大戸家・影絵劇しらさぎ座）、いでゆ朝市（地場産野菜・地酒）、いでゆ通り',
        access: '下呂駅より濃飛バス合掌村線で約6分。温泉街より徒歩約15分。',
        tip: '合掌村内の「市倉」では、炭火でじっくり焼いたイワナ・アユの塩焼きや五平餅を囲炉裏端でいただけます。'
      },
      {
        key: 'gero_hidagyu_tomato_gourmet',
        title: '3. A5飛騨牛朴葉味噌焼き＆温玉ソフト（下呂ご当地グルメの饗宴）',
        timing: '通年（香ばしい朴葉味噌ととろける極上霜降り肉）',
        desc: '自家製味噌にキノコやネギを乗せ、最高ランクA5飛騨牛とともに朴葉の上で香ばしく焼く「飛騨牛朴葉味噌焼き」。特産トマトと飛騨牛を合わせたご当地丼「飛騨牛トマト丼」。下呂温泉の源泉で作る温泉卵を乗せた「温玉ソフト」。',
        spots: 'ゆあみ屋（ほんわかプリン・足湯カフェ）、GEROGEROバタースタンド、飛騨牛料理専門店',
        access: '下呂温泉街中心部。',
        tip: '「ゆあみ屋」の足湯に浸かりながら食べる「温玉ソフト」は、温泉卵とソフトクリームを混ぜると濃厚カスタードのような味わいになります。'
      }
    ]
  },
  {
    slug: 'shizuoka-izu-ito-jogasaki-stay',
    badge: 'IZU ITO & JOGASAKI GUIDE',
    title: '【静岡・伊豆伊東＆城ヶ崎海岸】門脇つり橋・大室山リフト＆東海館・地魚海鮮宿 完全ガイド',
    metaDesc: '東伊豆の歴史と絶景・伊東温泉＆城ヶ崎海岸エリア完全特化！スリル満点の「門脇つり橋」、すり鉢状火口の「大室山リフト」、国登録有形文化財「東海館」、毎分3万リットルの湯量を誇る伊東温泉と伊豆地魚会席宿を徹底解説。',
    heroDesc: '毎分3万リットル以上の豊富な湧出量を誇る歴史の温泉地「伊東温泉」。溶岩が削り出した断崖絶壁と海にかかる「城ヶ崎海岸・門脇つり橋」。抹茶碗を伏せたような美しい山容の「大室山」と、伊豆近海の伊勢海老・地魚に癒やされる旅。',
    categoryKey: 'shizuoka-izu-ito-jogasaki-stay',
    areaGuides: [
      {
        key: 'ito_onsen_tokainkan_walk',
        title: '1. 松川遊歩道〜東海館（昭和レトロな木造建築美と豊富な自家源泉）',
        timing: '通年（春の松川沿い桜並木・初夏の伊東祐親まつり・冬の温泉）',
        desc: '伊東温泉の中心を流れる松川沿いに佇む、昭和3年創業の木造3階建て温泉旅館「東海館（市指定有形文化財）」。職人の見事な木彫り細工や望楼。毎分3万リットルを超える全国屈指の湧出量を誇る弱食塩泉・単純温泉。',
        spots: '東海館（見学・日帰り入浴・喫茶）、松川遊歩道（竹あかりライトアップ）、音無神社、伊東オレンジビーチ',
        access: 'JR伊東線・伊豆急行線「伊東駅」下車徒歩約7〜10分。東京駅から特急「踊り子」直通約1時間40分。',
        tip: '「東海館」の最上階にある望楼からは、伊東市街と天城連山、相模湾を一望できます。'
      },
      {
        key: 'jogasaki_omuroyama_view',
        title: '2. 城ヶ崎海岸・門脇つり橋〜大室山（大自然が造り出した断崖絶壁と火口空中散歩）',
        timing: '通年（春の山焼き・新緑の大室山・城ヶ崎の雄大な白波）',
        desc: '約4000年前の大室山噴火でできた溶岩海岸「城ヶ崎海岸」。高さ23m、長さ48mの断崖に架かるスリル満点の「門脇つり橋」。リフトで登る「大室山（標高580m）」の火口一周お鉢巡りと富士山パノラマ。',
        spots: '城ヶ崎海岸（門脇つり橋・門脇埼灯台・ピクニカルコース）、大室山（登山リフト・火口アーチェリー）、伊豆シャボテン動物公園',
        access: '伊東駅より車で約25分、または伊豆高原駅よりバス。',
        tip: '大室山は全山がカヤで覆われており、山頂お鉢めぐり（約1km）では360度の大パノラマ（伊豆七島・富士山）が広がります。'
      },
      {
        key: 'ito_iseebi_local_fish_gourmet',
        title: '3. 伊東港直送「朝獲れ地魚」＆伊豆牛（贅沢な海の幸と山海の恵み）',
        timing: '通年（秋〜冬の伊勢海老漁解禁・春の鯵や金目鯛）',
        desc: '伊東港で毎朝競り落とされる新鮮な地魚の舟盛り。活きたまま鉄板で焼く「アワビの踊り焼き」やプリプリの「伊勢海老のお造り・鬼殻焼き」。幻のブランド牛「伊豆牛」のステーキと伊豆わさび。',
        spots: '道の駅伊東マリンタウン（日帰り温泉・遊覧船・海鮮丼）、伊東市中央商店街',
        access: '伊東市街地・伊東港周辺。',
        tip: '「道の駅 伊東マリンタウン」のカラフルな建物群には、海を見渡す足湯や海鮮レストラン、お土産処が充実しています。'
      }
    ]
  },
  {
    slug: 'niigata-echigo-yuzawa-snow-sake-stay',
    badge: 'ECHIGO YUZAWA SAKE & SNOW GUIDE',
    title: '【新潟・越後湯沢＆魚沼】川端康成雪国・ぽんしゅ館利き酒＆魚沼産コシヒカリ極上宿 完全ガイド',
    metaDesc: '川端康成『雪国』の舞台・新潟越後湯沢＆南魚沼エリア完全特化！新幹線駅直結「ぽんしゅ館」の県内全蔵元利き酒＆酒風呂、日本一の「魚沼産コシヒカリ」釜炊きご飯、冬のスノーリゾート、秋のドラゴンドラ紅葉宿を徹底解説。',
    heroDesc: '「国境の長いトンネルを抜けると雪国であった」。川端康成の名作『雪国』が生まれた歴史ある湯治場「越後湯沢温泉」。越後全蔵の銘酒を味わうぽんしゅ館、炊きたて魚沼産コシヒカリの甘み、極上の雪見露天風呂へ。',
    categoryKey: 'niigata-echigo-yuzawa-snow-sake-stay',
    areaGuides: [
      {
        key: 'yuzawa_snow_onsen_sake',
        title: '1. 越後湯沢温泉街〜ぽんしゅ館（新幹線直結の利き酒ミュージアムと雪見温泉）',
        timing: '通年（冬の白銀雪見風呂・春の新緑・秋の新米シーズン）',
        desc: '東京から上越新幹線で最速約70分の「越後湯沢温泉」。越後湯沢駅構内「ぽんしゅ館」では、新潟県内全酒蔵の銘酒約100種類を500円でコイン利き酒体験。天然温泉に純米酒を注いだ「酒風呂 湯の沢」での血行促進美肌浴。',
        spots: '越後湯沢駅ぽんしゅ館（唎酒番所・酒風呂・爆弾おにぎり）、歴史の宿 高半（川端康成執筆の部屋「かすみの間」）、湯沢高原パノラマパーク',
        access: '上越新幹線「越後湯沢駅」下車すぐ。東京駅から直通約70分。',
        tip: 'ぽんしゅ館の「爆弾おにぎり」は、南魚沼産コシヒカリ1合分を炊きたてで握る超人気名物です。'
      },
      {
        key: 'dragondola_nature_resort',
        title: '2. 苗場ドラゴンドラ〜湯沢高原（日本最長5.5kmの空中散歩とパノラマテラス）',
        timing: '秋（10月中旬〜11月上旬のドラゴンドラ紅葉）、冬（12月〜4月のスキーシーズン）',
        desc: '苗場高原と田代高原を結ぶ日本最長5,481mのロープウェイ「苗場ドラゴンドラ」。エメラルドグリーンの二居湖（ふたいこ）を見下ろす大パノラマ空中散歩。世界最大級166人乗り「湯沢高原ロープウェイ」で行く雲の上のテラス。',
        spots: '苗場ドラゴンドラ、湯沢高原パノラマパーク（パノラマステーション・ジップライン）、清津峡渓谷トンネル（アートフォトスポット）',
        access: '越後湯沢駅よりシャトルバスで約20〜40分。',
        tip: '日本三大峡谷「清津峡（きよつきょう）渓谷トンネル」の最奥パノラマステーションは、水鏡に渓谷美が映り込む世界的人気スポットです。'
      },
      {
        key: 'minamiuonuma_koshihikari_gourmet',
        title: '3. 本場「魚沼産コシヒカリ」＆にいがた和牛（土鍋釜炊きご飯の圧倒的な甘み）',
        timing: '通年（9月下旬〜の新米シーズンは特に絶品）',
        desc: '豪雪地帯のミネラル豊富な雪解け水と昼夜の寒暖差が育む日本一の米「魚沼産コシヒカリ」。土鍋や羽釜で一組ごとに炊き上げるつややかなご飯。新潟の豊かな自然で育った「にいがた和牛」のサーロインや、日本海ののどぐろ塩焼き。',
        spots: '魚沼の里（八海山雪室・そば屋 長森・菓子処 菜花）、越後湯沢温泉街の和食処',
        access: '南魚沼・越後湯沢エリア。',
        tip: '「魚沼の里」にある八海醸造の「八海山雪室」では、1,000トンの雪で冷やされた貯蔵庫見学や限定日本酒の購入が楽しめます。'
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

for (const cfg of microWave12Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated micro tourist hub page: /${cfg.slug}`);
}
