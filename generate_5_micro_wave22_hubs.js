const fs = require('fs');
const path = require('path');

const microWave22Configs = [
  {
    slug: 'aomori-shimokita-osorezan-oma-stay',
    badge: 'SHIMOKITA & OMA GUIDE',
    title: '【青森・下北半島＆恐山・大間】本州最北端大間マグロ・日本三大霊場恐山宿 完全ガイド',
    metaDesc: '本州最果ての秘境と黒いダイヤモンド・青森下北半島エリア完全特化！日本三大霊場「恐山（宇曽利湖・恐山温泉）」、本州最北端「大間崎・大間まぐろ一本釣り」、国の名勝「仏ヶ浦」、白濁硫黄泉「下風呂温泉郷宿」を徹底解説。',
    heroDesc: '荒々しい津軽海峡の波頭と極楽浄土の白砂が交差する「下北半島」。硫黄の香りと風車が回る日本屈指の霊場・恐山。マグロ一本釣りの聖地・本州最北端大間崎。巨大な白緑色凝灰岩が連なる仏ヶ浦。名湯下風呂温泉で味わう本場大間マグロの旅。',
    categoryKey: 'aomori-shimokita-osorezan-oma-stay',
    areaGuides: [
      {
        key: 'osorezan_shimofuro_onsen_stay',
        title: '1. 日本三大霊場・恐山〜宇曽利山湖・下風呂温泉（地獄と極楽が隣り合う聖地）',
        timing: '恐山開山期間：5月1日〜10月31日（7月恐山大祭・秋の紅葉）',
        desc: '比叡山・高野山と並ぶ日本三大霊場「恐山菩提寺」。荒涼とした岩肌から硫黄ガスが噴き出す「地獄めぐり」と、エメラルドグリーンの宇曽利山湖の「極楽浜」。境内にある4つの無料温泉浴場。文豪・井上靖が愛した名湯「下風呂温泉郷」。',
        spots: '恐山菩提寺（地獄谷・極楽浜・三途の川・太鼓橋）、恐山境内温泉、下風呂温泉郷（海峡の湯・幻の大間鉄道アーチ橋）',
        access: 'JR大湊線「下北駅」より下北交通バス「恐山行」で約45分。',
        tip: '恐山境内にある4つの温泉（薬師の湯・古滝の湯・冷鉱泉・花染の湯）は参拝者なら誰でも入浴でき、強い硫黄の香りと効能豊かな源泉を体感できます。'
      },
      {
        key: 'oma_tuna_cape_stay',
        title: '2. 本州最北端・大間崎〜大間マグロ一本釣り（津軽海峡の黒いダイヤモンド）',
        timing: '通年（大間マグロの旬：8月〜1月、特に秋冬の脂乗りは最高峰）',
        desc: '本州最北端の碑とマグロモニュメントが立つ「大間崎」。津軽海峡を挟んで約17.5km先に北海道函館の山並みを望む絶景。荒波の中で命がけで行われる伝統の「一本釣り漁法」。赤身・中トロ・大トロが贅沢に盛られた本場の大間マグロ丼。',
        spots: '大間崎（本州最北端の碑・大間マグロ一本釣りの町モニュメント）、大間埼灯台（弁天島）、大間温泉海峡保養センター',
        access: '下北駅より車約60分、または函館港より津軽海峡フェリーで約90分。',
        tip: '大間崎周辺のお食事処では、冷凍されていない一度も凍らせていない「生の大間マグロ」を味わうことができ、口の中でとろける甘みと深い旨味は格別です。'
      },
      {
        key: 'hotokegaura_mutsu_stay',
        title: '3. 国の名勝・仏ヶ浦〜観光遊覧船（2kmにわたり林立する白緑色の巨岩群）',
        timing: '定期観光船運行：4月中旬〜10月下旬',
        desc: '津軽海峡の荒波と風雨が削り出した白緑色凝灰岩の奇岩が約2kmにわたって連なる国の名勝・天然記念物「仏ヶ浦（ほとけがうら）」。如来の首、五百羅漢、極楽浜などの名が付けられた巨岩。牛滝港や佐井港から出航するグラスボート遊覧船。',
        spots: '仏ヶ浦（仏ヶ浦展望台・遊歩道・観光遊覧船）、佐井村アルサス、むつ市釜臥山展望台（光のアゲハ蝶夜景）',
        access: '佐井港より観光遊覧船で約30分。むつ市街より車約90分。',
        tip: '仏ヶ浦へは道路沿いの展望台から階段で降りることも可能ですが、佐井港からの観光船に乗ると海上から巨岩群の全体像と透明な海を大迫力で鑑賞できます。'
      }
    ]
  },
  {
    slug: 'miyagi-naruko-onsen-gorge-stay',
    badge: 'NARUKO ONSEN & GORGE GUIDE',
    title: '【宮城・鳴子温泉郷＆鳴子峡】日本屈指の多彩な泉質・紅葉深雪橋＆栗だんご宿 完全ガイド',
    metaDesc: '奥州三名湯・国内屈指の泉質の宝庫・宮城鳴子温泉郷エリア完全特化！東北屈指の紅葉名所「鳴子峡（大深沢橋）」、鳴子こけしの里散策、多彩な源泉（重曹泉・硫黄泉・食塩泉）、名物「元祖栗だんご・鳴子温泉旅館」を徹底解説。',
    heroDesc: '日本に存在する10種類の泉質のうち、なんと8種類が集まる奇跡の温泉郷「鳴子温泉郷」。深さ100mの大渓谷が錦秋に染まる「鳴子峡」と大深沢橋の絶景。カランコロンと下駄の音が響くこけしの温泉街。熱々のみたらし餡が絡む名物栗だんごを味わう旅。',
    categoryKey: 'miyagi-naruko-onsen-gorge-stay',
    areaGuides: [
      {
        key: 'naruko_onsen_kyo_heritage_stay',
        title: '1. 鳴子温泉街〜湯めぐり・鳴子こけし通り（下駄の音が響く伝統温泉街）',
        timing: '通年（共同浴場「滝の湯」の白濁湯・春〜秋の湯めぐり）',
        desc: '承和4年（837年）の鳥谷ヶ坂大噴火で湧出したと伝わる古湯。白濁した酸性硫黄泉の共同浴場「滝の湯」。首を回すとキュッキュと音が鳴る伝統工芸「鳴子こけし」の工房が軒を連ねる駅前通り。「湯めぐりシール」で楽しむ多彩な源泉巡り。',
        spots: '共同浴場 滝の湯、鳴子こけし通り、日本こけし館、手湯・足湯ポケットパーク、早稲田桟敷湯',
        access: 'JR陸羽東線（奥の細道湯けむりライン）「鳴子温泉駅」下車すぐ。東北道「古川IC」より約40分。',
        tip: '鳴子温泉のシンボル「滝の湯」は総ヒバ造りの風情ある浴舎で、樋（とい）から打たせ湯のように注がれる濃厚な白濁湯を味わえます。'
      },
      {
        key: 'narukokyo_gorge_autumn_stay',
        title: '2. 鳴子峡〜大深沢橋・中山平温泉（東北屈指のV字大渓谷と紅葉パノラマ）',
        timing: '紅葉シーズン：10月中旬〜11月上旬（息を呑む絶景）',
        desc: '大谷川の浸食によってできた深さ約100mの断崖絶壁が約2.6km続く「鳴子峡」。奇岩と赤・黄に色づく木々の中に架かる「大深沢橋」の絶景。橋の上をJR陸羽東線の列車が通過する瞬間。「うなぎ湯」と呼ばれる中山平温泉のとろとろ美肌湯。',
        spots: '鳴子峡レストハウス展望台、大深沢遊歩道、見晴台、中山平温泉郷（しんとろの湯・名号館）',
        access: '鳴子温泉駅より臨時バス「紅葉号」で約15分。',
        tip: '鳴子峡レストハウスの見晴台からは、大深沢橋と色鮮やかな紅葉、そしてタイミングが合えば渓谷のトンネルを出入りする列車を一望できます。'
      },
      {
        key: 'naruko_kuridango_miyagi_beef_stay',
        title: '3. 鳴子名物「元祖 栗だんご」＆仙台牛会席（大粒の栗をまるごと包んだ甘美な味）',
        timing: '通年（できたて熱々の栗だんごはイートイン推奨）',
        desc: 'ふっくら蒸し上げた大粒の栗をもちもちのお餅で丸ごと包み、特製のみたらし餡をたっぷりと絡めた鳴子名物「栗だんご（深瀬）」。宮城が誇る最高ランクのブランド牛「仙台牛」の陶板焼きやすき焼き。地元の山菜料理。',
        spots: '餅処 深瀬（元祖栗だんご）、鳴子温泉郷の老舗料亭旅館、道の駅あ・ら・伊達な道の駅',
        access: '鳴子温泉駅前・大崎市鳴子温泉エリア。',
        tip: '「深瀬」の栗だんごは、店内の喫茶スペースで注文すると、出来立て熱々の湯気が立ち上る状態で供され、お餅のとろける柔らかさが味わえます。'
      }
    ]
  },
  {
    slug: 'yamanashi-minobu-shimobe-onsen-stay',
    badge: 'MINOBU & SHIMOBE GUIDE',
    title: '【山梨・身延山＆下部温泉】日蓮宗総本山久遠寺しだれ桜・信玄隠し湯宿 完全ガイド',
    metaDesc: '祈りの霊峰と武田信玄公の隠し湯・山梨身延＆下部エリア完全特化！日蓮宗総本山「身延山久遠寺（樹齢400年しだれ桜・菩提梯287段）」、身延山ロープウェイ奥之院、日本の名湯百選「下部温泉（ぬる湯治）」、名物「身延まんじゅう宿」を徹底解説。',
    heroDesc: '日蓮聖人が開いた祈りの聖山「身延山久遠寺」。春に境内を覆い尽くす樹齢400年の巨木しだれ桜と、287段の石段・菩提梯。川中島の戦いで傷を癒やしたと伝わる武田信玄公の隠し湯「下部温泉」。ぬる湯と熱湯を交互に楽しむ極上の湯治ステイへ。',
    categoryKey: 'yamanashi-minobu-shimobe-onsen-stay',
    areaGuides: [
      {
        key: 'shimobe_onsen_shingen_stay',
        title: '1. 下部温泉郷〜武田信玄公の隠し湯（30℃前後の極上「ぬる湯」交互浴）',
        timing: '通年（疲労回復・長湯が心地よい夏のぬる湯治）',
        desc: '開湯1200年、武田信玄公が傷を癒やした古湯「下部（しもべ）温泉」。約30℃前後の冷鉱泉（アルカリ性単純温泉）と加温した熱湯を交互に入る「交互入浴法」。自律神経を整え、何時間でも浸かっていられる奇跡の名湯。',
        spots: '下部温泉郷（下部ホテル・古湯坊源泉館・裕貴屋）、しもべ黄金の足湯、下部川渓流散策路',
        access: 'JR身延線「下部温泉駅」下車すぐ。中部横断道「下部温泉早川IC」より約5分。',
        tip: '下部温泉のぬる湯は、浸かって数分経つと体温と一体化するような不思議な感覚になり、副交感神経が優位になって極上のリラックスが得られます。'
      },
      {
        key: 'minobusan_kuonji_shukubo_stay',
        title: '2. 身延山久遠寺〜奥之院思親閣・身延山ロープウェイ（日蓮宗総本山の桜と絶景）',
        timing: '春期：3月下旬〜4月上旬のしだれ桜・秋の紅葉・冬のダイヤモンド富士',
        desc: '鎌倉時代に日蓮聖人によって開創された「身延山久遠寺」。本堂前に枝を広げる国の天然記念物「樹齢400年のしだれ桜」。三門から本堂へと続く287段の急勾配な石段「菩提梯（ぼだいてい）」。ロープウェイで登る標高1,153mの山頂奥之院。',
        spots: '身延山久遠寺（本堂・五重塔・しだれ桜・菩提梯）、身延山ロープウェイ、奥之院思親閣（御来光・富士山パノラマ）、門前町',
        access: 'JR身延線「身延駅」より山梨交通バス「身延山行」で約12分。',
        tip: '身延山山頂の展望台からは、東に富士山、南に駿河湾、西に七面山、北に南アルプス八ヶ岳連峰を望む大パノラマが広がります。'
      },
      {
        key: 'minobu_yuba_koshu_beef_stay',
        title: '3. 身延特産「身延ゆば」＆身延まんじゅう（大豆の濃厚な甘みと門前スイーツ）',
        timing: '通年（参拝帰りのできたて身延まんじゅうは必食）',
        desc: '日蓮聖人に弟子が栄養価の高い食事として捧げたのが始まりとされる「身延ゆば（湯葉）」。何層にも巻き上げた角ゆばや生ゆばのお造り。小麦粉の生地に甘さ控えめのこし餡を包んで蒸し上げた名物「身延まんじゅう（栄昇堂）」。',
        spots: '栄昇堂（身延駅前の名店）、ゆばの里、身延門前町のゆば料理店、下部温泉の会席旅館',
        access: '身延駅前・身延山門前町。',
        tip: 'アニメ『ゆるキャン△』でも登場した身延駅前の「栄昇堂」の身延まんじゅうは、富士川の河川敷ベンチに座って川風を感じながら食べるのがファンの定番です。'
      }
    ]
  },
  {
    slug: 'tottori-misasa-onsen-mitokusan-stay',
    badge: 'MISASA ONSEN & MITOKUSAN GUIDE',
    title: '【鳥取・三朝温泉＆三徳山三仏寺】世界屈指のラジウム温泉・国宝投入堂宿 完全ガイド',
    metaDesc: '日本遺産第1号・六根清浄と六感治癒・鳥取三朝エリア完全特化！世界屈指の高濃度ラジウム温泉「三朝温泉（河原風呂・株湯）」、日本一危険な国宝「三徳山三仏寺 投入堂（なげいれどう）」、名物「とち餅・鳥取和牛宿」を徹底解説。',
    heroDesc: '「三度朝を迎えると病が治る」と伝わる奇跡の湯治場「三朝（みささ）温泉」。高濃度ラドンが細胞を活性化させるホルミシス効果。断崖絶壁の窪みに建つ日本一危険な国宝建築「三徳山三仏寺 投入堂」。三徳川のせせらぎと鳥取和牛を味わう癒やしの旅。',
    categoryKey: 'tottori-misasa-onsen-mitokusan-stay',
    areaGuides: [
      {
        key: 'misasa_radium_onsen_ryokan_stay',
        title: '1. 三朝温泉街〜三朝橋・河原風呂・株湯（世界屈指のラジウム泉と温泉街情緒）',
        timing: '通年（吸って・飲んで・浸かる「三朝の吸入・飲泉・入浴」療法）',
        desc: '世界有数の高濃度ラドンを含有する「三朝温泉」。三朝橋のたもとにある開放的な混浴露天風呂「河原風呂」。源泉発見の地「株湯」。ラドンガスを吸入する「熱気浴」。昭和レトロな温泉本通り（射的・駄菓子屋・和紙灯り）。',
        spots: '河原風呂、株湯（元湯）、三朝橋（登録有形文化財）、温泉本通り（陣所の館・射的場）、三朝バイオリン美術館',
        access: 'JR山陰本線「倉吉駅」より日ノ丸バスで約20分。米子道「湯原IC」より約50分。',
        tip: '三朝温泉のお湯は飲むことも可能（飲泉場あり）で、ミネラルとラドンが胃腸の働きを整えてくれるため、入浴と飲泉のダブル効果が期待できます。'
      },
      {
        key: 'mitokusan_nageiredou_stay',
        title: '2. 三徳山三仏寺〜国宝 投入堂（断崖絶壁に建つ日本一危険な国宝）',
        timing: '参拝登山期間：4月〜11月（冬期・悪天候時は入山禁止）',
        desc: '役行者が法力で岩窟に投げ入れたと伝わる「三徳山三仏寺 投入堂（国宝）」。木の根や鎖をよじ登る険しい修行道を登った者だけが拝める奇跡の建築。文殊堂の縁側から望む絶景パノラマ。宿坊での本格精進料理。',
        spots: '三徳山三仏寺（本堂・文殊堂・地蔵堂・鐘楼堂・国宝投入堂）、三徳山宿坊（皆成院・輪光院）',
        access: '三朝温泉より車・バスで約15分。',
        tip: '投入堂への登山は「2人以上での入山」「滑りにくい登山靴または藁草履の着用」が必須条件となっており、本堂裏の登山事務所で靴底チェックが行われます。'
      },
      {
        key: 'tottori_wagyu_tochimochi_stay',
        title: '3. 鳥取和牛「オレイン55」＆とち餅・松葉ガニ（山陰最高峰の美味と甘味）',
        timing: '通年（冬期：11月上旬〜3月下旬は松葉ガニシーズン）',
        desc: 'オレイン酸を55%以上含む上質な脂と赤身の旨味が際立つ「鳥取和牛オレイン55」。三徳山の栃の実を灰汁抜きして搗き込んだ素朴で香ばしい銘菓「とち餅」。冬期に水揚げされる山陰の冬の味覚の王者「松葉ガニ（ズワイガニ）」。',
        spots: 'とち餅本舗 つのだ、三朝温泉街の老舗旅館・割烹処、倉吉白壁土蔵群のお食事処',
        access: '三朝町・倉吉市エリア。',
        tip: '「とち餅」は独特の香ばしい栃の風味と上品なこし餡の甘みが絶妙で、お茶請けや三朝温泉のお土産として一番人気を誇ります。'
      }
    ]
  },
  {
    slug: 'ehime-uwajima-ainan-nametoko-stay',
    badge: 'UWAJIMA & NAMETOKO GUIDE',
    title: '【愛媛・宇和島＆愛南・滑床渓谷】現存天守宇和島城・滑床キャニオニング＆宇和島鯛めし宿 完全ガイド',
    metaDesc: '伊達十万石の城下町とキャニオニングの聖地・愛媛宇和島＆南予エリア完全特化！現存十二天守「宇和島城」、日本の滝百選「雪輪の滝・滑床渓谷」、真珠の海「宇和海」、名物「宇和島鯛めし・愛南びやびやかつお宿」を徹底解説。',
    heroDesc: '伊達政宗の長子・秀宗が入封した南予の城下町「宇和島」。天守が現存する貴重な名城「宇和島城」。巨大な一枚岩の滑らかな川床が続く「滑床渓谷」と雪輪の滝。宇和海で育まれた日本一の真珠と、生卵と出汁で食べる絶品「宇和島鯛めし」を味わう旅。',
    categoryKey: 'ehime-uwajima-ainan-nametoko-stay',
    areaGuides: [
      {
        key: 'uwajima_castle_hotel_stay',
        title: '1. 宇和島城〜天赦園・市立伊達博物館（現存十二天守と名園）',
        timing: '通年（春の桜・藤の花・秋の紅葉）',
        desc: '築城の名手・藤堂高虎が創建し、伊達氏が改修した「現存十二天守・宇和島城（国の重要文化財）」。海城の面影を残す天守からの宇和島湾パノラマ。伊達家の回遊式庭園「天赦園（白玉藤）」。真珠養殖日本一の宇和海。',
        spots: '宇和島城（天守・上り立ち門）、名勝 天赦園、宇和島市立伊達博物館、道の駅みなとオアシスうわじま きさいや広場',
        access: 'JR予讃線「宇和島駅」下車徒歩約15分。松山空港より特急列車・バスで約80分。',
        tip: '宇和島城の石垣は「不等辺五角形」という珍しい縄張りで造られており、四角形に見せかけて敵を惑わす高虎の巧みな防衛技術が見どころです。'
      },
      {
        key: 'nametoko_gorge_nature_stay',
        title: '2. 滑床渓谷〜雪輪の滝（日本屈指のキャニオニング聖地と花崗岩滑床）',
        timing: 'グリーンシーズン：4月下旬〜11月中旬（夏のキャニオニング・秋の紅葉）',
        desc: '足摺宇和海国立公園に位置する延長約12kmの大渓谷「滑床（なめとこ）渓谷」。巨大な一枚の花崗岩の滑らかな川床。日本の滝百選「雪輪の滝（落差80m）」。天然のウォータースライダーを滑り降りるキャニオニング体験。',
        spots: '滑床渓谷（雪輪の滝・落合深渕・鳥居岩）、水際のロッジ、森の国ぽっぽ温泉（松野町）',
        access: 'JR予土線「松丸駅」より車約25分。松山道「三間IC」より約40分。',
        tip: '滑床渓谷のキャニオニングは、雪輪の滝の滑らかな一枚岩をガイドと一緒に天然スライダーとして滑り降りる日本屈指の爽快アクティビティです。'
      },
      {
        key: 'uwajima_taimeshi_seafood_stay',
        title: '3. 宇和島名物「元祖 宇和島鯛めし」＆じゃこ天（生鯛と生卵の至高のハーモニー）',
        timing: '通年（新鮮な真鯛・初夏の愛南びやびやかつお）',
        desc: '炊き込みではなく、新鮮な真鯛の薄切り刺身を生卵・特製タレ・薬味（胡麻・海苔・大葉）と混ぜ、アツアツのご飯にかけて食べる「宇和島鯛めし」。宇和海の小魚を骨ごとすり身にして揚げた熱々の「宇和島じゃこ天」「ふくめん」。',
        spots: 'ほづみ亭、かどや、きさいや広場（ロイズソフトクリーム・真珠販売）、愛南町深浦港',
        access: '宇和島市内・愛南町。',
        tip: '「きさいや広場」では、揚げたて熱々の宇和島じゃこ天をその場でテイクアウトして食べ歩きでき、魚本来の旨味と香ばしさをダイレクトに味わえます。'
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

for (const cfg of microWave22Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated micro tourist hub page: /${cfg.slug}`);
}
