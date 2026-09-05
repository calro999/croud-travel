const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
const allHotels = JSON.parse(fs.readFileSync(p, 'utf8'));

const hubs = [
  {
    slug: 'nagano-kamikochi-norikura-alps-stay',
    tag: 'KAMIKOCHI & NORIKURA GUIDE',
    title: '【長野・上高地＆乗鞍高原・白骨】河童橋・大正池・乳白色秘湯＆穂高連峰山岳宿 完全ガイド',
    metaTitle: '【長野・上高地＆乗鞍・白骨】河童橋・大正池・乳白色秘湯宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '神降地と称される北アルプスの聖地「上高地（河童橋・大正池・明神池）」、乗鞍岳麓のすずらん温泉「乗鞍高原」、三日入れば三年風邪を引かぬ名湯「白骨温泉」を徹底解説。絶景山岳ホテルや乳白色濁り湯の秘湯旅館を厳選。',
    lead: 'エメラルドグリーンの梓川と、鏡のように穂高連峰を映す大正池・河童橋の神々しい絶景「上高地」。マイカー規制により守られた静寂の山岳リゾートから、乗鞍岳の雄大な裾野に広がる乗鞍高原、そして乳白色の霊泉が湧く山間の秘湯・白骨温泉へ。日常を忘れ、清冽なアルプスの大自然と極上のいで湯に包まれる旅をお届けします。',
    guides: [
      {
        key: 'kamikochi_kappabashi_stay',
        title: '1. 上高地〜河童橋・大正池・明神池（穂高連峰を仰ぐ日本屈指の山岳景勝地）',
        timing: '開山期間（4月中旬〜11月15日／新緑の5月下旬〜6月、高山植物の夏、黄金のカラマツ黄葉の10月中旬〜下旬）',
        desc: '標高約1500mの平坦な谷あいに広がる奇跡の山岳景観。立ち枯れの木々と焼岳が湖面に映える「大正池」から、梓川沿いの木道を歩いてシンボル「河童橋」へ。さらに針葉樹林を抜けて静寂の「明神池」へ至る遊歩道は、どこを切り取っても絵画のような美しさです。',
        spots: '河童橋、大正池、明神池（穂高神社奥宮）、田代池・田代湿原、上高地帝国ホテル、ウェストン碑',
        access: '通年マイカー規制。さわんどバスターミナル（長野側）または平湯バスターミナル（岐阜側）よりシャトルバスで約30分。松本駅より直通バスもあり。',
        tip: '上高地内のホテルに宿泊すると、観光客が押し寄せる前の早朝6時台に、朝霧たなびく静寂の河童橋や大正池を独り占めできます。'
      },
      {
        key: 'norikura_milky_onsen_stay',
        title: '2. 乗鞍高原〜すずらん温泉＆善五郎の滝（乗鞍岳の恵み・乳白色の硫黄泉）',
        timing: '通年（夏の避暑・高山植物、秋の乗鞍エコーライン紅葉、冬のパウダースノーと雪見温泉）',
        desc: '標高3026mの乗鞍岳東麓に広がる広大な高原リゾート。乗鞍岳の地下深くから湧き出す乗鞍高原温泉は、強い硫黄の香りと青みを帯びた乳白色のにごり湯が特徴。豪快な水しぶきを上げる「善五郎の滝」や「三本滝」、のどかな一の瀬園地などネイチャーウォークも充実しています。',
        spots: '乗鞍高原温泉、善五郎の滝、三本滝（日本の滝百選）、一の瀬園地（まいめの池）、乗鞍岳畳平（標高2702mご来光バス）',
        access: '長野道「松本IC」より国道158号・県道経由で約60分。アルピコ交通上高地線「新島々駅」より路線バスで約50分。',
        tip: '日本一標高の高いバス停「乗鞍岳畳平」へ登るシャトルバス（夏秋運行）に乗れば、本格的な登山装備なしでも雲上の高山植物や絶景を体感できます。'
      },
      {
        key: 'shirahone_onsen_hotspring_stay',
        title: '3. 白骨温泉〜三日入れば三年風邪を引かぬ名湯（湯川渓谷に佇む白濁の秘湯）',
        timing: '通年（新緑の露天風呂、秋の渓谷紅葉、冬の深い雪景色と湯けむり）',
        desc: '湯川の深い渓谷にひっそりと宿が寄り添う、開湯600年の秘湯「白骨（しらほね）温泉」。弱酸性硫黄泉の湯は、空気に触れることでミルクのように白濁し、湯船の縁には炭酸カルシウムの結晶（湯の花）が鍾乳石のように堆積。古くから胃腸病の名湯として湯治客に愛され続けています。',
        spots: '泡の湯旅館（名物の大野天風呂）、白船荘新宅旅館、湯元齋藤旅館、白骨温泉野天風呂、冠呼坂',
        access: '松本ICより車で約70分。新島々駅より路線バスで約60分（季節運行）。上高地や乗鞍高原からも車で約30〜40分。',
        tip: '白骨温泉の源泉で作る「温泉粥」は名物朝食。胃腸に優しく、温泉のほのかな塩分と硫黄の風味が体に染み渡ります。'
      }
    ]
  },
  {
    slug: 'gifu-gero-onsen-hida-river-stay',
    tag: 'GERO ONSEN & HIDA RIVER GUIDE',
    title: '【岐阜・下呂温泉＆飛騨川・馬瀬川】日本三名泉美肌の湯・飛騨牛懐石＆合掌の里宿 完全ガイド',
    metaTitle: '【岐阜・下呂温泉＆馬瀬川】日本三名泉美肌の湯・飛騨牛宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '有馬・草津と並ぶ日本三名泉「下呂温泉」の絹のような美肌湯、飛騨川沿いの温泉街そぞろ歩き、最高級A5等級飛騨牛の極上懐石、清流馬瀬川の天然鮎と合掌造りを徹底解説。老舗名旅館や展望露天風呂宿を厳選。',
    lead: '室町時代の儒学者・万里集九や江戸幕府の儒官・林羅山によって「日本三名泉」と称えられた天下の名湯「下呂温泉」。pH9を超えるアルカリ性単純温泉は、浸かった瞬間に肌がツルツルになる天然の石鹸のような美肌効果を誇ります。飛騨川のせせらぎ、湯けむり立ち上る足湯巡り、そして舌の上でとろける飛騨牛の贅を味わう至高の岐阜ステイへご案内します。',
    guides: [
      {
        key: 'gero_three_famous_spring_stay',
        badge: '日本三名泉の極上美肌湯',
        title: '1. 下呂温泉街〜飛騨川・噴泉池＆足湯巡り（とろりと肌を包み込む美肌の湯）',
        timing: '通年（冬の雪景色と花火ミュージカル、春の桜並木、秋の紅葉散策）',
        desc: '飛騨川を中心に広がる風情ある下呂温泉街。アルカリ性のまろやかな泉質は角質を取り除き、湯上がり後は吸い付くような潤い肌に。温泉街には無料の足湯が点在し、飛騨川の河原にあるシンボル「噴泉池」や、白鷺伝説に由来する白鷺の湯など、浴衣姿での散策が醍醐味です。',
        spots: '飛騨川河川敷・噴泉池、白鷺の湯、足湯めぐり（さるぼぼ黄金足湯・モリの足湯等）、下呂温泉神社、医王霊山温泉寺',
        access: 'JR高山本線「下呂駅」下車徒歩すぐ（名古屋駅より特急ワイドビューひだで約1時間40分）。中央道「中津川IC」より約60分。',
        tip: '加盟旅館の湯を3箇所巡ることができる「湯めぐり手形」を使えば、名門旅館の個性豊かな大浴場や展望露天風呂をお得に堪能できます。'
      },
      {
        key: 'gero_hida_beef_gourmet_stay',
        badge: 'とろけるA5飛騨牛の極み',
        title: '2. 飛騨牛づくし会席＆朴葉味噌焼き（霜降りの甘みと郷土の香ばしい味覚）',
        timing: '通年（冬の飛騨牛すき焼き・しゃぶしゃぶ、春〜秋の炭火ステーキ）',
        desc: 'きめ細やかな霜降りと芳醇な香りを誇る岐阜が誇るブランド牛「飛騨牛」。下呂の宿では、A5等級のサーロインステーキ、口の中でとろける握り寿司、そして乾燥した朴の葉に自家製味噌と飛騨牛・キノコを乗せて炭火で焼く郷土料理「朴葉味噌焼き」など、至高の美食が並びます。',
        spots: '各料亭旅館の個室食事処、湯島庵（飛騨牛霜降りにぎり寿司）、下呂プリン、千寿堂（栃の実せんべい）',
        access: '下呂温泉街中心部。',
        tip: '下呂温泉街で食べ歩きできる「飛騨牛にぎり寿司」は、お皿代わりの海老せんべいに乗せて提供され、手軽に贅沢な味を楽しめます。'
      },
      {
        key: 'maze_river_clear_stream_stay',
        badge: '日本屈指の清流と合掌の情景',
        title: '3. 馬瀬川の清流・天然鮎＆下呂温泉合掌の里（里山の原風景と伝統木造美）',
        timing: '通年（初夏〜秋の馬瀬川天然鮎・友釣り、合掌の里の四季折々の草花）',
        desc: '「日本で最も美しい村」連合に加盟する下呂市馬瀬（まぜ）。清流・馬瀬川で育つ天然鮎は日本一の香りと味と評されます。また白川郷などから移築された合掌造り民家が並ぶ「下呂温泉合掌の里」では、国の重要文化財・旧大戸家住宅の見学や陶芸・和紙絵すき体験が楽しめます。',
        spots: '下呂温泉合掌の里（旧大戸家住宅・影絵劇場しらさぎ座）、馬瀬川清流ロード、美輝の里（馬瀬温泉）、飛騨金山巨石群',
        access: '合掌の里へは下呂駅よりバスで約6分。馬瀬エリアへは下呂駅より車で約25分。',
        tip: '合掌の里内の合掌造り休憩処「市倉」では、炭火でじっくり焼いた川魚の塩焼きや五平餅を囲炉裏端で味わえます。'
      }
    ]
  },
  {
    slug: 'fukui-tojinbo-awara-onsen-crab-stay',
    tag: 'TOJINBO & AWARA ONSEN GUIDE',
    title: '【福井・東尋坊＆あわら温泉・三国】日本海柱状節理断崖・黄色タグ越前ガニ宿 完全ガイド',
    metaTitle: '【福井・東尋坊＆あわら温泉】日本海断崖絶壁・越前ガニ宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '世界三大奇勝・国の天然記念物「東尋坊」の柱状節理断崖絶壁パノラマ、関西の奥座敷「あわら温泉」の74本もの源泉湯巡り、北陸最高峰の冬の味覚・三国港直送の黄色タグ付き「越前ガニ」を徹底解説。名門温泉旅館や海鮮美食宿を厳選。',
    lead: '日本海の荒波が削り出した巨大な柱状節理の断崖が1kmにわたって続く世界的景勝地「東尋坊」。夕暮れ時に日本海へと沈む息をのむような夕陽と、明治期より関西の文人墨客に「奥座敷」として愛された名湯「あわら温泉」。冬には福井県が誇る最高峰ブランド・三国港水揚げの「越前ガニ」の贅を味わい尽くす、北陸・福井の極上旅へご案内します。',
    guides: [
      {
        key: 'tojinbo_cliff_sunset_stay',
        badge: '世界三大奇勝の断崖パノラマ',
        title: '1. 東尋坊〜輝石安山岩の柱状節理＆夕陽（高さ20mの断崖絶壁と遊覧船）',
        timing: '通年（波穏やかな春〜夏の遊覧船クルーズ、茜色の夕陽が沈む秋、日本海の荒波と白波が打ち寄せる冬の日本海）',
        desc: '地質学的にも極めて貴重な世界的奇勝「東尋坊」。垂直に切り立った巨大な柱状の岩肌が眼下に迫る断崖はスリル満点。東尋坊タワーからの360度展望や、海上から岩の造形美（ライオン岩やハチの巣岩）を間近に見上げる観光遊覧船、そして「日本の夕陽百選」に選ばれた落日は圧巻です。',
        spots: '東尋坊断崖遊歩道、東尋坊観光遊覧船、東尋坊タワー、雄島（朱塗りの大橋）、三国サンセットビーチ',
        access: 'えちぜん鉄道「三国港駅」より京福バスで約10分。北陸新幹線「芦原温泉駅」より車・バスで約30分。北陸道「金津IC」より約25分。',
        tip: '遊覧船は波の状況により運航されるため、事前に当日の運航状況を確認するのがおすすめです。海上から見上げる断崖は陸上以上の迫力です。'
      },
      {
        key: 'awara_onsen_footbath_stay',
        badge: '74の源泉が湧く関西の奥座敷',
        title: '2. あわら温泉〜芦原温泉街・あわら湯のまち湯けむり横丁（屋台村と多彩な泉質）',
        timing: '通年（新幹線開業でアクセス抜群、春の桜、冬の雪見風呂とカニ懐石）',
        desc: '明治16年開湯。あわら温泉の大きな特徴は、各旅館がそれぞれ敷地内に自家源泉（計74本）を保有していること。宿ごとに少しずつ異なる泉質や効能を楽しめます。あわら湯のまち駅前には総ヒノキ造りの無料足湯施設「芦湯」や、赤ちょうちんが揺れる屋台村「湯けむり横丁」があり、夜のそぞろ歩きも魅力です。',
        spots: 'あわら温泉足湯「芦湯」（5つの浴槽）、あわら湯けむり横丁（屋台グルメ村）、金津創作の森、伝統旅館街',
        access: '北陸新幹線「芦原温泉駅」より各宿の無料送迎バスで約10〜15分、またはえちぜん鉄道「あわら湯のまち駅」下車。',
        tip: '足湯「芦湯」は大正ロマン風の総ヒノキ建築で、ステンドグラスや福井県産笏谷石が使われており、夜のライトアップも幻想的です。'
      },
      {
        key: 'echizen_crab_seafood_stay',
        badge: '皇室献上ガニの故郷・黄色タグの証',
        title: '3. 三国港水揚げ「越前ガニ」フルコース（茹でたてアツアツと濃厚なカニ味噌）',
        timing: '冬季限定（11月6日の漁解禁〜翌年3月20日頃まで）',
        desc: '全国のズワイガニの中で唯一、皇室へ献上される最高峰のブランド「越前ガニ」。福井県内の港で水揚げされた証である「黄色いタグ」が付けられます。三国港のセリから直行した新鮮なカニを大きな釜で絶妙な塩加減で茹で上げた「茹でガニ」、透き通る身の「カニ刺し」、香ばしい「焼きガニ」は冬の至福です。',
        spots: '三国港市場周辺、あわら温泉の老舗カニ料理旅館群、三国湊きたまえ通り（レトロ商家街）',
        access: 'あわら温泉・三国港エリア各所。',
        tip: '脱皮直後の「水ガニ（ズボガニ）」は地元で親しまれるリーズナブルでジューシーな冬の裏名物。食べ比べてみるのも一興です。'
      }
    ]
  },
  {
    slug: 'hiroshima-miyajima-itsukushima-shrine-stay',
    tag: 'MIYAJIMA & ITSUKUSHIMA GUIDE',
    title: '【広島・宮島＆嚴島神社】世界遺産海上大鳥居・弥山ロープウエー＆あなごめし宿 完全ガイド',
    metaTitle: '【広島・宮島＆嚴島神社】海上大鳥居・弥山＆あなごめし宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '世界遺産「嚴島神社」の海に浮かぶ朱色の大鳥居、潮の満ち引きが織りなす絶景、原始林が息づく霊峰「弥山」パノラマ、宮島名物「あなごめし」や焼き牡蠣を徹底解説。島内温泉旅館や対岸オーシャンビューホテルを厳選。',
    lead: '日本三景の一つにして世界文化遺産、神が宿る島「宮島（厳島）」。満潮時にはまるで海に浮かんでいるかのように佇む嚴島神社の廻廊と朱色の大鳥居。干潮時には歩いて鳥居の足元まで近づける神秘的な潮の満ち引き。瀬戸内海の多島美を一望する霊峰・弥山、そして香ばしい秘伝タレのあなごめしと焼きたて牡蠣。歴史と自然の祈りが息づく安芸の宮島ステイへご案内します。',
    guides: [
      {
        key: 'itsukushima_floating_torii_stay',
        badge: '海に浮かぶ世界遺産の神殿',
        title: '1. 嚴島神社〜海上大鳥居・朱塗り廻廊（満潮の浮遊感と干潮の砂浜歩き）',
        timing: '通年（満潮・干潮の時間を潮見表で確認して訪れるのが必須。秋の紅葉谷公園、冬の澄んだ夜空ライトアップ）',
        desc: '推古天皇元年に創建、平清盛が現在の規模に整えた海上社殿「嚴島神社」。国宝の本社本殿や海を渡る朱塗りの廻廊、海中にそびえる高さ約16mの主柱クスノキ大鳥居。満潮時には海面に浮かぶ極楽浄土のような光景となり、干潮時には水が引いて大鳥居の真下まで歩いて触れることができます。',
        spots: '嚴島神社社殿（国宝・廻廊）、大鳥居、大願寺、千畳閣（豊国神社）・五重塔、紅葉谷公園',
        access: 'JR山陽本線「宮島口駅」よりフェリー乗り場へ徒歩5分、JR西日本宮島フェリーまたは宮島松大汽船で約10分。',
        tip: '宮島島内の宿に宿泊すれば、最終フェリー後の観光客が引き揚げた静寂の夜に、黄金色にライトアップされた大鳥居をゆっくり鑑賞できます。'
      },
      {
        key: 'misen_ropeway_panorama_stay',
        badge: '弘法大師開山の霊峰パノラマ',
        title: '2. 弥山原始林＆宮島ロープウエー（瀬戸内海360度多島美と不滅の霊火）',
        timing: '通年（晴天時の青い瀬戸内海、春の山桜、秋のモミジの紅葉グラデーション）',
        desc: '標高535m、天然記念物の原始林に覆われた宮島の最高峰「弥山（みせん）」。宮島ロープウエーを乗り継いで獅子岩展望台へ登れば、青い瀬戸内海に点在する島々や四国山地まで見渡す360度の大パノラマ。山頂付近には弘法大師空海が開創し、1200年間燃え続ける「消えずの火」を守る霊火堂が佇みます。',
        spots: '宮島ロープウエー（紅葉谷線・獅子岩線）、獅子岩展望台、弥山山頂・巨石群、霊火堂（消えずの火）、くぐり岩',
        access: '嚴島神社裏手より紅葉谷公園を通ってロープウエー紅葉谷駅まで徒歩約20分（無料送迎バスあり）。',
        tip: '霊火堂の「消えずの火」で沸かした大茶釜の霊水は、万病に効くご利益があるとされ、参拝者が自由に飲むことができます。'
      },
      {
        key: 'miyajima_oyster_anago_stay',
        badge: '宮島二大名物グルメを制覇',
        title: '3. 宮島名物「あなごめし」＆大粒焼き牡蠣（秘伝ダレの香ばしさと海のミルク）',
        timing: '通年（牡蠣の旬は11月〜3月頃、あなごめしは通年絶品）',
        desc: 'アナゴの骨から取った濃厚な出汁で炊き込んだ醤油ご飯の上に、香ばしく焼き上げたアナゴをぎっしり敷き詰めた宮島名物「あなごめし」。瀬戸内海の豊かな潮流が育んだ大粒でぷりっぷりの「広島牡蠣」の殻付き浜焼き。さらに表参道商店街で味わう揚げもみじ饅頭など、食べ歩きも最高の楽しみです。',
        spots: 'うえの（宮島口のあなごめし元祖）、表参道商店街（牡蠣祝・紅葉堂・やまだ屋）、町家通り',
        access: '宮島桟橋から嚴島神社へ続く表参道商店街および宮島口周辺。',
        tip: '宮島口の「うえの」のあなごめし弁当は事前予約が可能。フェリーに乗る前に受け取って島内の絶景スポットで食べるのも通の楽しみ方です。'
      }
    ]
  },
  {
    slug: 'oita-yufuin-kinrin-lake-retreat-stay',
    tag: 'YUFUIN & KINRIN LAKE GUIDE',
    title: '【大分・由布院＆金鱗湖】朝霧の湖畔・由布岳望む離れ客室露天風呂＆湯の坪街道宿 完全ガイド',
    metaTitle: '【大分・由布院＆金鱗湖】朝霧の湖・離れ客室露天宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '湯布院のシンボル「金鱗湖」の幻想的な冬の朝霧、豊後富士「由布岳」を仰ぐ大自然、お洒落なショップやアートカフェが連なる「湯の坪街道」、全室離れ・客室露天風呂付きの隠れ家高級旅館を徹底解説。憧れの由布院ステイを厳選。',
    lead: '豊後富士と呼ばれる秀峰・由布岳の裾野に広がる日本屈指の温泉保養地「由布院（湯布院）」。清水と温泉が同時に湧き出る不思議な「金鱗湖」に立ちこめる幻想的な朝霧。木立の中に静かに佇む数奇屋造りの離れ宿、鳥のさえずりと共に楽しむ客室専用露天風呂、そして湯の坪街道のアート散策。大人が心から寛げる洗練された隠れ家リゾートへご案内します。',
    guides: [
      {
        key: 'kinrin_lake_morning_mist_stay',
        badge: '湖面から立ち上る奇跡の朝霧',
        title: '1. 金鱗湖〜朝霧の幻想風景＆天祖神社（清水と温泉が湧き出す神秘の湖）',
        timing: '通年（秋〜冬の早朝（10月〜2月）に発生する「朝霧」は必見。春の新緑、秋の紅葉も格別）',
        desc: '湖底から清水と熱い温泉が同時に湧き出ているため、秋から冬にかけての早朝、外気温との温度差によって湖面から白い霧が立ち上る奇跡の絶景「金鱗湖の朝霧」。湖畔に佇む天祖神社の水中鳥居や、藁葺き屋根のカフェが朝霧のベールに包まれる光景は息をのむ美しさです。',
        spots: '金鱗湖、天祖神社（湖上の水中鳥居）、マルク・シャガールゆふいん金鱗湖美術館、カフェ・ラ・リューシュ',
        access: 'JR久大本線「由布院駅」より徒歩約20分（タクシーで約5分）。大分道「湯布院IC」より約10分。',
        tip: '朝霧を見るなら日の出直後から午前8時頃までの冷え込んだ風のない早朝が狙い目。湖畔のカフェで温かい珈琲を片手に眺めるのが極上です。'
      },
      {
        key: 'yunotsubo_street_retreat_stay',
        badge: 'クラフト・アートとお洒落カフェ',
        title: '2. 湯の坪街道＆COMICO ART MUSEUM（由布岳を仰ぐモダンレトロな散策路）',
        timing: '通年（四季折々の山並みとスイーツ巡り・アート鑑賞）',
        desc: '由布院駅から金鱗湖へと続くメインストリート「湯の坪街道」。名物の金賞コロッケ、ロールケーキ（B-speak）、プリンどら焼きなどのご当地スイーツ店や、木工・竹細工のクラフトショップが軒を連ねます。世界的建築家・隈研吾が設計した「COMICO ART MUSEUM YUFUIN」など現代アートスポットも充実。',
        spots: '湯の坪街道、COMICO ART MUSEUM YUFUIN、湯布院フローラルヴィレッジ、B-speak、山水館',
        access: '由布院駅より金鱗湖方面へ徒歩すぐ。',
        tip: '湯の坪街道から一本外れた大分川沿いの遊歩道は、菜の花や桜、コスモスが咲き誇り、由布岳の全景をバックに混雑なく散策できる隠れ道です。'
      },
      {
        key: 'yufuin_exclusive_villa_stay',
        badge: '全室離れ・大人の隠れ家リゾート',
        title: '3. 全室離れ・客室露天風呂付き極上宿（静寂の森で過ごすプライベート湯浴み）',
        timing: '通年（星空露天風呂、初夏の新緑陰、秋の紅葉、冬の静寂雪見風呂）',
        desc: '由布院温泉の真骨頂は、街の喧騒から少し離れた静かな森や田園に佇む「全室離れ形式」のラグジュアリー旅館。広々とした和モダン客室に、由布岳を望む専用の内湯や庭園露天風呂を完備。豊後牛の炭火焼きや関アジ・関サバなど大分の豊かな山海の幸をお部屋で堪能できます。',
        spots: '亀の井別荘、玉の湯、山荘無量塔（由布院御三家）、名峰由布岳ビュー各宿',
        access: '由布院駅周辺各宿より無料送迎サービスあり（事前予約推奨）。',
        tip: '由布院は日本第2位の湧出量を誇り、お湯は肌触りの柔らかな単純温泉。赤ちゃんからお年寄りまで肌に優しく何度でも湯浴みを楽しめます。'
      }
    ]
  }
];

function generateHubPage(hub) {
  const dir = path.join(__dirname, 'src/app', hub.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const guidesJson = JSON.stringify(hub.guides, null, 2);

  const content = `import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "${hub.metaTitle}",
  description: "${hub.description}",
  keywords: ["${hub.slug}", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["${hub.slug}"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for ${hub.slug}", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = ${guidesJson};

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ${hub.tag}
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            ${hub.title}
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            ${hub.lead}
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide: any) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-teal-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-teal-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-teal-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-teal-950/80 leading-relaxed font-medium">
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
              <div className="space-y-4 pt-4 border-t border-teal-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-teal-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}周辺のおすすめ厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.length > 0 ? (
                    hotels.map((hotel: any) => (
                      <article
                        key={hotel.hotelNo}
                        className="flex flex-col justify-between border border-teal-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                      >
                        <div>
                          <div className="aspect-video relative overflow-hidden bg-teal-50 border-b border-teal-950/5">
                            {hotel.hotelImageUrl ? (
                              <img
                                src={hotel.hotelImageUrl}
                                alt={hotel.hotelName}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-teal-950/30 text-xs font-bold">
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
                            <h4 className="text-xs md:text-sm font-black font-journal-serif text-teal-950 line-clamp-2">
                              {hotel.hotelName}
                            </h4>
                            {hotel.hotelSpecial && (
                              <p className="text-[11px] text-teal-950/70 line-clamp-2 font-medium">
                                {hotel.hotelSpecial}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="p-4 pt-0">
                          <a
                            href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 rounded-xl shadow transition"
                          >
                            ✈️ 楽天トラベルで宿泊プラン・空室を見る
                          </a>
                        </div>
                      </article>
                    ))
                  ) : (
                    <div className="col-span-3 p-6 bg-stone-50 rounded-2xl text-center text-xs text-stone-500">
                      現在おすすめの宿泊施設情報を更新中です。
                    </div>
                  )}
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
          className="inline-flex items-center gap-2 text-xs font-bold text-teal-950 bg-white hover:bg-teal-50 border border-teal-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
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

  fs.writeFileSync(path.join(dir, 'page.tsx'), content, 'utf8');
  console.log('Created page for:', hub.slug);
}

for (const hub of hubs) {
  generateHubPage(hub);
}

console.log('All 5 round 26 micro hubs successfully generated!');
