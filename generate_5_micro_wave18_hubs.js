const fs = require('fs');
const path = require('path');

const microWave18Configs = [
  {
    slug: 'nagano-azumino-wasabi-hotaka-stay',
    badge: 'AZUMINO & WASABI GUIDE',
    title: '【長野・安曇野＆穂高温泉郷】大王わさび農場・水車小屋＆信州サーモン・わさび丼宿 完全ガイド',
    metaDesc: '北アルプスの清らかな湧水とアートの田園郷・長野安曇野エリア完全特化！日本最大級「大王わさび農場」、蓼川の水車小屋、安曇野アートラインの美術館巡り、弱アルカリ性美肌の穂高温泉郷、名物「本わさび丼・信州サーモン宿」を徹底解説。',
    heroDesc: '北アルプスの雪解け水が湧き出る安曇野の清流と、のどかな田園風景。日本一のわさび田「大王わさび農場」の水車小屋。安曇野アートラインの美術館巡り。穂高温泉郷のやわらかな湯に浸かり、すりたて本わさびと信州サーモンを味わう旅。',
    categoryKey: 'nagano-azumino-wasabi-hotaka-stay',
    areaGuides: [
      {
        key: 'azumino_hotaka_onsen_stay',
        title: '1. 穂高温泉郷〜烏川渓谷（北アルプス中房温泉からの引き湯と白樺の森）',
        timing: '通年（新緑の5月・紅葉の10月・冬の雪見露天）',
        desc: '北アルプス燕岳の登山口・中房温泉から引湯する「穂高温泉郷」。pH8.5前後のアルカリ性単純温泉で、肌がつるつるになる「美肌の湯」。白樺や赤松の林に囲まれた静かな温泉旅館街。早朝の烏川渓谷緑地散策。',
        spots: '穂高温泉郷（足湯「八面大王足湯」）、烏川渓谷緑地、穂高神社（日本アルプスの総鎮守・御船祭）、碌山美術館',
        access: 'JR大糸線「穂高駅」より路線バス・タクシー約10分。長野道「安曇野IC」より約20分。',
        tip: '穂高駅前でレンタサイクルを借りると、わさび田や美術館が点在する安曇野ののどかな田園地帯を爽快にサイクリングできます。'
      },
      {
        key: 'wasabi_farm_art_resort',
        title: '2. 大王わさび農場〜安曇野アートライン（蓼川の水車小屋と清冽な湧水群）',
        timing: '通年（日量12万トンの湧水が流れる北アルプスの恵み）',
        desc: '日本最大級のわさび畑が広がる「大王わさび農場」。黒澤明監督映画『夢』のロケ地となった蓼川の三連水車小屋。クリアボートでの川下り。絵本美術館やガラス工房など個性豊かな美術館が連なる「安曇野アートライン」。',
        spots: '大王わさび農場（水車小屋・わさびソフトクリーム・クリアボート）、安曇野ちひろ美術館、安曇野アートヒルズ跡',
        access: 'JR穂高駅より車で約10分。あづみ野周遊バス運行。',
        tip: '大王わさび農場の「本わさびソフトクリーム」は、ツンとした辛味とミルクの甘みが絶妙にマッチした大人気ご当地スイーツです。'
      },
      {
        key: 'azumino_wasabi_salmon_stay',
        title: '3. すりたて「本わさび丼」＆信州サーモン（安曇野の清流が生んだ極上美味）',
        timing: '通年（信州プレミアム牛肉やすばらしい手打ち信州そば）',
        desc: '炊きたてのご飯にかつお節を敷き、自分ですりおろした新鮮な本わさびをたっぷり乗せて醤油を垂らす「本わさび丼」。安曇野の湧水で育つ美しいサーモンピンクの「信州サーモン」のお造り。りんごを食べて育つ「信州牛」。',
        spots: '大王庵（本わさび丼）、安曇野手打ちそば街道、信州サーモン料理指定店',
        access: '安曇野市内各所。',
        tip: '本わさびは茎の方から円を描くように優しくすりおろすと、辛味成分が揮発せず芳醇な香りと甘みが最も引き立ちます。'
      }
    ]
  },
  {
    slug: 'mie-kumano-owase-onigajo-stay',
    badge: 'KUMANO & OWASE GUIDE',
    title: '【三重・熊野＆尾鷲・鬼ヶ城】世界遺産鬼ヶ城・獅子岩＆熊野古道伊勢路・尾鷲ガスエビ宿 完全ガイド',
    metaDesc: '荒波が削った奇岩巨岩と世界遺産の祈りの道・三重熊野＆尾鷲エリア完全特化！世界遺産「鬼ヶ城・獅子岩」、熊野古道「松本峠・馬越峠」、七里御浜海岸、尾鷲港水揚げの幻の「ガスエビ」、名物「めはり寿司・熊野牛宿」を徹底解説。',
    heroDesc: '熊野灘の荒波と風雨が刻んだ大自然の彫刻「世界遺産・鬼ヶ城」と、天に向かって咆哮する「獅子岩」。石畳の苔が美しい熊野古道伊勢路。日本一長い砂礫海岸「七里御浜」。幻の深海エビ「ガスエビ」と熊野地鶏・めはり寿司を味わう旅。',
    categoryKey: 'mie-kumano-owase-onigajo-stay',
    areaGuides: [
      {
        key: 'kumano_onigajo_shishi_stay',
        title: '1. 鬼ヶ城〜獅子岩・七里御浜（世界遺産！波食崖の巨岩トンネルと22kmの海岸線）',
        timing: '通年（8月17日の熊野大花火大会は日本屈指の迫力）',
        desc: '国の名勝・世界遺産「鬼ヶ城（おにがじょう）」。約1.2kmにわたって続く海食洞窟と蜂の巣状の奇岩歩道。太平洋に向かって吠える高さ25mの「獅子岩」。玉砂利が敷き詰められた日本一長い砂礫海岸「七里御浜（日本の渚百選）」。',
        spots: '世界遺産 鬼ヶ城（鬼ヶ城センター・千畳敷・奥の木戸）、世界遺産 獅子岩、七里御浜海岸、花の窟神社（日本最古の神社）',
        access: 'JR紀勢本線「熊野市駅」より路線バス約5分。熊野尾鷲道路「熊野大泊IC」すぐ。',
        tip: '鬼ヶ城の遊歩道は海の上にせり出すように作られており、足元に打ち寄せる黒潮の白波と頭上に迫る巨岩のオーバーハングが大迫力です。'
      },
      {
        key: 'owase_port_seafood_stay',
        title: '2. 尾鷲港〜馬越峠（日本屈指の多雨地帯が育む深い森と深海魚の宝庫）',
        timing: '通年（冬〜春は深海魚まつり・底引き網漁期）',
        desc: '黒潮の恵みを受ける良港「尾鷲（おわせ）港」。水揚げ直後しか食べられない甘み抜群の幻の深海エビ「ガスエビ（ヒゲナガエビ）」やトロバコ魚。熊野古道伊勢路の中で最も美しい石畳とヒノキ林が続く「馬越峠（まごせとうげ）」。',
        spots: '尾鷲魚市場おとと、馬越峠（夜泣き地蔵・天狗倉山）、夢古道おわせ（海洋深層水風呂）、三木里海岸',
        access: 'JR紀勢本線「尾鷲駅」下車。',
        tip: '「夢古道おわせ」では、尾鷲沖の清浄な海洋深層水を汲み上げた露天風呂があり、湯上がり肌がしっとりすべすべになります。'
      },
      {
        key: 'kumano_kodo_isaji_gourmet_stay',
        title: '3. 郷土の味「めはり寿司」＆熊野地鶏（高菜漬けで包む山林労働者の伝統弁当）',
        timing: '通年（熊野牛ステーキとの贅沢な組み合わせ）',
        desc: '炊きたてご飯を特製タレに漬けた高菜の葉で丸ごと包み込む郷土料理「めはり寿司（目をみはるほど美味しいのが語源）」。「熊野地鶏」の香ばしい炭火焼き、赤身の旨味が濃厚な「熊野牛」。地酒・太平洋とともに味わう至福。',
        spots: 'めはり寿司発祥店、熊野地鶏専門店、松本峠（鉄砲傷の残る地蔵）',
        access: '熊野市・尾鷲市エリア。',
        tip: 'めはり寿司は一口かじると高菜のシャキシャキ感と出汁の染みたご飯の旨味が広がり、熊野古道トレッキングの行動食に最高です。'
      }
    ]
  },
  {
    slug: 'tokushima-iya-valley-oboke-kazurabashi-stay',
    badge: 'IYA VALLEY & OBOKE GUIDE',
    title: '【徳島・祖谷渓＆大歩危・かずら橋】日本三大秘境・スリルのかずら橋＆大歩危峡舟下り・祖谷そば宿 完全ガイド',
    metaDesc: '切り立つ断崖とエメラルドグリーンの清流・徳島祖谷渓＆大歩危峡エリア完全特化！国指定重要有形民俗文化財「祖谷のかずら橋」、断崖絶壁に立つ「小便小僧」、大歩危峡遊覧船、渓谷ケーブルカーで行く祖谷温泉、名物「祖谷そば・鮎の塩焼き宿」を徹底解説。',
    heroDesc: '平家落人伝説が息づく日本三大秘境「徳島・祖谷渓＆大歩危峡」。シラクチカズラで編まれたスリル満点の「祖谷のかずら橋」。200mの断崖を見下ろす小便小僧。専用ケーブルカーで渓谷底へ下る秘境の露天風呂と、素朴な祖谷そばを味わう旅。',
    categoryKey: 'tokushima-iya-valley-oboke-kazurabashi-stay',
    areaGuides: [
      {
        key: 'iya_kazurabashi_secret_onsen',
        title: '1. 祖谷のかずら橋〜祖谷渓・小便小僧（平家落人の悲話を伝える吊り橋と断崖絶壁）',
        timing: '通年（新緑の5月・紅葉の11月上旬〜中旬は錦秋の絶景）',
        desc: '自生するシラクチカズラを編んで作られた長さ45mの吊り橋「祖谷のかずら橋（国指定重要有形民俗文化財）」。足元の隙間から見える祖谷川の急流。祖谷街道の断崖絶壁に立つ「小便小僧」。ケーブルカーで下る秘湯・祖谷温泉。',
        spots: '祖谷のかずら橋（夜間ライトアップ・びわの滝）、祖谷渓の小便小僧（高さ200m断崖）、新祖谷温泉 ホテルかずら橋（天空露天風呂スロープカー）',
        access: 'JR土讃線「大歩危駅」より路線バスで約20〜30分。井川池田ICより約50分。',
        tip: '「和の宿 ホテル祖谷温泉」では、傾斜角42度の専用ケーブルカーで約170m下の谷底へ下り、祖谷川のせせらぎを聞きながら入る自噴源泉かけ流し露天風呂が最高です。'
      },
      {
        key: 'oboke_koboke_gorge_stay',
        title: '2. 大歩危峡・小歩危峡〜大歩危峡観光遊覧船（2億年の歳月が削った結晶片岩の回廊）',
        timing: '通年（春の鯉のぼり・ラフティングの夏・紅葉の秋）',
        desc: '吉野川の激流が結晶片岩を削り出してできた約8kmの渓谷「大歩危（おおぼけ）・小歩危（こぼけ）」。国指定天然記念物。「大歩危峡観光遊覧船」に乗り、船頭のガイドを聞きながら間近で仰ぐ奇岩怪石。大歩危温泉での癒やし。',
        spots: '大歩危峡観光遊覧船（レストラン・妖怪屋敷）、道の駅大歩危、小歩危峡（吉野川ラフティングの世界的聖地）',
        access: 'JR土讃線「大歩危駅」下車徒歩約20分。',
        tip: '春（3月下旬〜5月末）には、大歩危峡の川の上に無数の鯉のぼりが風になびく「大歩危峡鯉のぼり」が開催され、船上からの眺めが圧巻です。'
      },
      {
        key: 'iya_soba_ayu_gourmet_stay',
        title: '3. 秘境の味「祖谷そば」＆でこまわし（つなぎを使わない太くて短い十割蕎麦）',
        timing: '通年（秋の新そばシーズン・冬のしし鍋）',
        desc: '昼夜の寒暖差が大きい祖谷地方で育つ香り高いソバ。つなぎをほとんど使わず太くて切れやすい素朴な「祖谷そば」。味噌を塗った豆腐や里芋を囲炉裏で回しながら焼く郷土料理「でこまわし」。徳島の地鶏「阿波尾鶏」と清流の鮎。',
        spots: '祖谷そば処、祖谷のかずら橋周辺茶屋、祖谷の里山料理宿',
        access: '三好市祖谷・大歩危エリア。',
        tip: '祖谷そばは、すするのではなくお出汁と一緒にレンゲやスプーンですくって食べるのが伝統で、素朴なソバ本来の甘みが口いっぱいに広がります。'
      }
    ]
  },
  {
    slug: 'niigata-sado-island-gold-mine-stay',
    badge: 'SADO ISLAND & GOLD MINE GUIDE',
    title: '【新潟・佐渡島＆相川金山】世界遺産佐渡金山・たらい舟＆尖閣湾・佐渡寒ブリ宿 完全ガイド',
    metaDesc: '世界遺産登録の黄金の島・新潟佐渡島エリア完全特化！世界遺産「佐渡島の金山（道遊の割戸・北沢浮遊選鉱場）」、小木海岸の「たらい舟体験」、国の名勝「尖閣湾」、朱鷺の保護センター、名物「佐渡寒ブリ・佐渡牛宿」を徹底解説。',
    heroDesc: '日本の歴史を動かした黄金の島「佐渡島」。世界遺産に登録された佐渡金山の割戸と、緑に覆われたラピュタのような北沢浮遊選鉱場。小木の海をゆく伝統のたらい舟。日本海の荒波が育む佐渡寒ブリと佐渡牛を味わう離島リゾートへ。',
    categoryKey: 'niigata-sado-island-gold-mine-stay',
    areaGuides: [
      {
        key: 'sado_gold_mine_heritage_stay',
        title: '1. 世界遺産・佐渡島の金山〜相川・北沢浮遊選鉱場（400年の金銀採掘歴史と産業遺産）',
        timing: '通年（新緑・夏のライトアップ・秋の日本海サンセット）',
        desc: '世界文化遺産に登録された「佐渡島の金山」。山がV字に割れた象徴「道遊の割戸（どうゆうのわりと）」。江戸初期の手掘り坑道「宗太夫坑」と明治以降の「道遊坑」。緑の苔に覆われ「東洋一の選鉱場」と呼ばれた北沢浮遊選鉱場。',
        spots: '世界遺産 史跡佐渡金山（道遊の割戸・宗太夫坑）、北沢浮遊選鉱場跡（夜間ライトアップ）、相川京町通り、奉行所跡',
        access: '両津港より車で約50分。路線バス運行。',
        tip: '「北沢浮遊選鉱場」は日没から夜間ライトアップが行われ、幻想的な光に浮かび上がる姿はまるでスタジオジブリの世界に入り込んだかのようです。'
      },
      {
        key: 'sado_tarai_bune_resort',
        title: '2. 小木海岸・たらい舟〜宿根木・尖閣湾（透明な海をゆく伝統舟と重要伝統的町並み）',
        timing: '通年（たらい舟乗船：通年運航）',
        desc: 'サザエやワカメを獲るために考案された佐渡の伝統舟「たらい舟（矢島・経島体験）」。船板を利用した板壁の民家が密集する重伝建の港町「宿根木（しゅくねぎ）」。高さ30mの断崖が連なる国の名勝「尖閣湾揚島遊園」。',
        spots: '力屋観光汽船・矢島体験交流館（たらい舟）、宿根木（三角家・石畳の小路）、尖閣湾揚島遊園（海中透視船・あげしま水族館）、トキの森公園',
        access: '両津港より車で約50〜60分。',
        tip: '矢島・経島のたらい舟乗り場では、海中が透けて見えるほど透明度が高く、朱塗りの太鼓橋を背景にした記念写真が撮れます。'
      },
      {
        key: 'sado_beef_kanburi_gourmet_stay',
        title: '3. 日本海の至宝「佐渡寒ブリ」＆幻の「佐渡牛」（ミネラル豊富な潮風が育む極上美味）',
        timing: '冬期（11月〜2月は寒ブリ・紅ズワイガニの最盛期）',
        desc: '佐渡沖の激流に揉まれて丸々と太った「佐渡寒ブリ」。脂の乗った寒ブリ刺しやブリしゃぶ。年間数十頭しか出荷されない幻の黒毛和牛「佐渡牛」。佐渡名産のおけさ柿、地酒・北雪や真野鶴とのマリアージュ。',
        spots: '両津港・相川の海鮮料理店、北雪酒造（超音波熟成酒）、尾畑酒造（真野鶴・学校蔵）',
        access: '佐渡島全域。',
        tip: '佐渡島は島内に5つの酒蔵があり、新潟県内でも屈指の銘酒の産地として知られ、宿の夕食で地酒飲み比べセットを楽しむのがおすすめです。'
      }
    ]
  },
  {
    slug: 'hokkaido-akan-mashu-kussharo-lake-stay',
    badge: 'AKAN & MASHU CRATER LAKE GUIDE',
    title: '【北海道・阿寒湖＆摩周湖・屈斜路湖】神秘のカルデラ三湖・阿寒アイヌコタン＆まりも・硫黄山温泉宿 完全ガイド',
    metaDesc: '阿寒摩周国立公園の神秘の湖めぐり完全特化！特別天然記念物「阿寒湖のマリモ」、北海道最大のアイヌ集落「阿寒湖アイヌコタン」、奇跡の透明度「摩周ブルー・摩周湖」、日本最大のカルデラ湖「屈斜路湖・砂湯」、阿寒湖温泉・川湯温泉宿を徹底解説。',
    heroDesc: '世界屈指の透明度を誇る「摩周湖」と、特別天然記念物マリモが眠る「阿寒湖」、砂を掘れば温泉が湧く「屈斜路湖」。阿寒湖アイヌコタンの伝統舞踊と木彫り文化。川湯温泉の強酸性硫黄泉に浸かり、道東の大自然とオホーツクの海鮮を味わう旅。',
    categoryKey: 'hokkaido-akan-mashu-kussharo-lake-stay',
    areaGuides: [
      {
        key: 'akan_lake_onsen_marimo_stay',
        title: '1. 阿寒湖〜阿寒湖アイヌコタン・マリモ展示（雄阿寒岳を望む湖畔温泉と先住民族文化）',
        timing: '通年（秋の紅葉・冬の阿寒湖氷上フェスティバル「冬華美」）',
        desc: '球状の集合体を形成する国の特別天然記念物「阿寒湖のマリモ」。阿寒湖遊覧船で訪れるチュウルイ島マリモ展示観察センター。北海道最大級のアイヌ集落「阿寒湖アイヌコタン（伝統舞踊・木彫り民芸品）」。阿寒湖温泉のインフィニティ展望露天風呂。',
        spots: '阿寒湖遊覧船、チュウルイ島（マリモ展示観察センター）、阿寒湖アイヌコタン（アイヌシアター「イコロ」）、ボッケ（泥火山遊歩道）',
        access: 'たんちょう釧路空港より車・バスで約60分。JR釧路駅より阿寒バス運行。',
        tip: '「阿寒湖アイヌシアター イコロ」で上演される「ロストカムイ」は、現代舞踊とデジタルアート、アイヌ古式舞踊が融合した圧巻の舞台です。'
      },
      {
        key: 'mashu_kussharo_crater_stay',
        title: '2. 摩周湖〜屈斜路湖・硫黄山・川湯温泉（「霧の摩周湖」摩周ブルーと日本最大のカルデラ湖）',
        timing: '通年（6月〜8月の早朝雲海・秋の紅葉・冬の白鳥飛来）',
        desc: 'バイカル湖に次ぐ世界第2位の透明度を誇る「摩周湖（摩周ブルー）」。周囲約57kmの日本最大のカルデラ湖「屈斜路湖」。湖畔の砂を掘ると温泉が湧く「砂湯」や「コタン露天風呂」。噴煙が上がる「硫黄山（アトサヌプリ）」と川湯温泉。',
        spots: '摩周湖（第1・第3展望台・カムイテラス）、屈斜路湖（砂湯・美幌峠・コタン温泉）、硫黄山（アトサヌプリ）、川湯温泉街',
        access: 'JR釧網本線「摩周駅」または「川湯温泉駅」より車・バス。女満別空港より車約60分。',
        tip: '美幌峠（びほろとうげ）展望台からの屈斜路湖の眺望は「天下の絶景」と称され、ぐるりと湖を見渡す大パノラマが広がります。'
      },
      {
        key: 'doto_seafood_jibie_gourmet',
        title: '3. 道東グルメ・オホーツク毛ガニ＆エゾシカ肉（豊かな森と海がもたらす大自然の恵み）',
        timing: '通年（冬のオホーツク海明け毛ガニ・秋のエゾシカ）',
        desc: '身がぎっしり詰まり濃厚なカニ味噌が絶品の「オホーツク海産毛ガニ」。肉質が柔らかくヘルシーな「エゾシカ肉（ジビエ）」のローストやすき焼き。阿寒湖名物の「ヒメマス（チップ）」「ワカサギ天ぷら」。道東の大地の恵み。',
        spots: '阿寒湖・川湯温泉の割烹旅館、弟子屈ラーメン総本店、道の駅摩周温泉',
        access: '阿寒・弟子屈・川湯エリア。',
        tip: '「弟子屈ラーメン」は、摩周湖の清らかな水と北海道産素材をじっくり煮込んだ特製スープが特徴で、全国にファンを持つ名店です。'
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

for (const cfg of microWave18Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated micro tourist hub page: /${cfg.slug}`);
}
