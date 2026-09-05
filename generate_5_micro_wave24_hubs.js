const fs = require('fs');
const path = require('path');

const microWave24Configs = [
  {
    slug: 'yamagata-sakata-sankyo-warehouse-shonai-stay',
    badge: 'SAKATA & SANKYO GUIDE',
    title: '【山形・酒田＆山居倉庫・庄内砂丘】北前船豪商の港町・酒田ラーメン＆日本海夕陽宿 完全ガイド',
    metaDesc: '北前船航路の繁栄とケヤキ並木の美！山形酒田エリア完全特化！国指定史跡「山居倉庫（ケヤキ並木・米穀倉庫）」、日本一の大地主「本間家旧本邸」、日和山公園、名物「酒田ラーメン・庄内浜海鮮宿」を徹底解説。',
    heroDesc: '「西の堺、東の酒田」と謳われた北前船交易の港町「酒田」。明治26年築、ケヤキ並木の木陰に佇む黒板塀の「山居倉庫」。日本一の大地主・本間家の栄華を伝える武家屋敷と庭園。飛魚（アゴ）出汁が澄み渡る「酒田のラーメン」と庄内浜の海の幸を味わう旅。',
    categoryKey: 'yamagata-sakata-sankyo-warehouse-shonai-stay',
    areaGuides: [
      {
        key: 'sakata_sankyo_warehouse_hotel_stay',
        title: '1. 山居倉庫〜ケヤキ並木・本間家旧本邸（北前船交易がもたらした豪商の栄華）',
        timing: '通年（新緑の5月・紅葉の10〜11月・冬の白銀景観）',
        desc: '明治26年に建てられた白壁・土蔵造りの米穀倉庫群「山居（さんきょ）倉庫（国指定史跡）」。西日と強風を遮るために植えられた樹齢150年以上のケヤキ並木とのコントラスト。日本一の大地主・本間家の武家屋敷「本間家旧本邸」。舞妓文化が残る「相馬樓」。',
        spots: '山居倉庫（庄内米歴史資料館・酒田夢の倶楽）、本間家旧本邸、相馬樓（舞妓演舞）、日和山公園（日本最古級の木造六角灯台）',
        access: 'JR羽越本線「酒田駅」よりバス約10分。庄内空港よりリムジンバス約30分。',
        tip: '山居倉庫の裏手に続くケヤキ並木は、四季折々に表情を変える酒田一番のフォトスポットで、夕暮れ時には石畳が柔らかくライトアップされます。'
      },
      {
        key: 'sakata_ramen_seafood_inn_stay',
        title: '2. 酒田港〜酒田のラーメン・庄内浜の海の幸（トビウオ出汁と極薄ワンタン）',
        timing: '通年（春のサクラマス・夏の天然岩ガキ・冬の寒鱈汁）',
        desc: '煮干しや昆布、庄内特産のトビウオ（アゴ）の上品で澄み切った黄金出汁「酒田のラーメン」。雲を呑むような極薄の皮がとろける「ワンタンメン（満月・花鳥風月）」。酒田港で揚がる寒鱈（どんがら汁）、のどぐろ、紅ズワイガニの海鮮会席。',
        spots: '酒田みなと市場（海鮮どんや とびしま）、酒田ラーメン名店群、さかた海鮮市場、オランダ煎餅FACTORY',
        access: '酒田港・酒田市街地。',
        tip: '酒田のラーメンは自家製麺比率が全国トップクラスで、手揉みの中太ちぢれ麺と透き通るトビウオ出汁の相性が抜群です。'
      },
      {
        key: 'shonai_yunohama_sunset_stay',
        title: '3. 庄内海岸〜湯野浜温泉・日本海夕陽パノラマ（波打ち際のオーシャンビュー）',
        timing: '通年（日本の夕陽百選・夏の海水浴）',
        desc: '庄内砂丘の海岸線沿いに広がる「湯野浜（ゆのはま）温泉郷」。天下一の夕陽と称される日本海に沈む茜色のサンセット。海辺の露天風呂から水平線を眺める贅沢。日本海の荒波が育んだ活アワビの踊り焼きや地魚寿司。',
        spots: '湯野浜温泉、加茂水族館（クラゲドリーム館）、庄内砂丘、由良海岸（白山島）',
        access: '酒田駅より車約30分、または鶴岡駅より路線バス約40分。',
        tip: '湯野浜温泉のオーシャンビュー客室からは、日没前後のマジックアワーに日本海が黄金色から紫グラデーションへと染まる絶景を部屋から眺められます。'
      }
    ]
  },
  {
    slug: 'gunma-shima-onsen-okushima-lake-stay',
    badge: 'SHIMA ONSEN & BLUE LAKE GUIDE',
    title: '【群馬・四万温泉＆奥四万湖】奇跡の四万ブルー・千と千尋レトロ木造湯宿 完全ガイド',
    metaDesc: '四万の病を癒やす霊泉と息を呑むコバルトブルー・群馬四万温泉エリア完全特化！奇跡の水鏡「奥四万湖（四万ブルー・カヌー）」、現存日本最古の木造湯宿建築「積善館」、日向見薬師堂、飲泉・胃腸の名湯と上州牛宿を徹底解説。',
    heroDesc: 'コバルトブルーの水面が神秘の光を放つ「奥四万湖」と「四万川」。アニメ映画のモデルとも伝わる元禄四年創業の日本最古の木造湯宿「積善館 本館（赤い慶雲橋）」。四万（よんまん）の病を治すと伝わる名湯。レトロな落合通りで焼きまんじゅうを頬張り、湯治の風情に浸る旅。',
    categoryKey: 'gunma-shima-onsen-okushima-lake-stay',
    areaGuides: [
      {
        key: 'sekizenkan_heritage_inn_stay',
        title: '1. 積善館本館〜慶雲橋・元禄の湯（現存日本最古の木造湯宿建築）',
        timing: '通年（新緑の春・夏の涼風・秋の紅葉・冬の雪景色）',
        desc: '元禄四年（1691年）創業、国の登録有形文化財「積善館（せきぜんかん）本館」。赤い欄干の「慶雲橋」を渡ると広がる大正浪漫の別世界。アーチ型の窓とタイル張りの床に5つの石風呂が並ぶ昭和5年築「元禄の湯」。湯治棟の木造回廊と山荘の透かし彫り。',
        spots: '積善館（本館・元禄の湯・山荘・佳松亭）、落合通り（スマートボール・焼きまんじゅう島村）、四万の甌穴群（天然記念物）',
        access: 'JR吾妻線「中之条駅」より関越交通バス「四万温泉行」で約40分。東京駅より直行高速バス「四万温泉号」約3時間半。',
        tip: '夜になると慶雲橋と積善館本館の玄関前が提灯や電灯で温かく照らし出され、映画『千と千尋の神隠し』の世界に迷い込んだような幻想的な夜景が楽しめます。'
      },
      {
        key: 'okushima_lake_blue_nature_stay',
        title: '2. 奥四万湖〜四万ブルー・カヌーツアー（神秘のコバルトブルー水鏡）',
        timing: '春〜秋（特に雪解け水が流れ込む4月中旬〜5月の四万ブルーは最も透明度が高い）',
        desc: '四万川ダムによって生まれた人造湖「奥四万湖（おくしまこ）」。アロフェンと呼ばれる鉱物微粒子が太陽光を乱反射して生み出す神秘の「四万ブルー」。水上から原生林の新緑や紅葉を見上げるレイクカヌー・SUP体験。せせらぎが心地よいダム周回道路。',
        spots: '奥四万湖（四万川ダム・栂の広場展望台）、四万湖（中之条ダム）、四万カヌーツアー、日向見薬師堂（国重文）',
        access: '四万温泉街より車約10分、または徒歩約45分。',
        tip: '四万ブルーは晴天の午前中、太陽光が真上から差し込む時間帯に最も鮮やかなエメラルド〜コバルトブルーの輝きを見せてくれます。'
      },
      {
        key: 'shima_gastro_joshu_beef_stay',
        title: '3. 四万温泉「飲泉」の恵み＆上州牛会席（日本屈指の胃腸の名湯）',
        timing: '通年（温泉街の飲泉所で源泉を味わう）',
        desc: '「日本三大胃腸病の名湯」として知られる四万温泉（ナトリウム・カルシウム-塩化物・硫酸塩泉）。温泉街各所に設けられた飲泉所（塩之湯飲泉所・ゆずりは飲泉所）。キメ細やかな霜降りと赤身のコクが自慢の「上州牛」すき焼きや炭火焼きステーキ。',
        spots: '塩之湯飲泉所、ゆずりは飲泉所、杜のカフェ 柏屋、四万温泉の老舗料理旅館',
        access: '四万温泉街全域。',
        tip: '四万の源泉は飲むと胃腸の調子を整える効果があり、ほんのりと塩気とミネラルを感じるまろやかな味わいが特徴です。'
      }
    ]
  },
  {
    slug: 'nagano-bessho-onsen-ueda-castle-stay',
    badge: 'BESSHO ONSEN & UEDA GUIDE',
    title: '【長野・別所温泉＆上田城】信州の鎌倉・日本唯一八角三重塔＆真田の赤備え宿 完全ガイド',
    metaDesc: '信州最古の温泉と真田幸村公の城下町・長野上田＆別所エリア完全特化！国宝「安楽寺 八角三重塔」、厄除け「北向観音」、真田氏の難攻不落名城「上田城跡公園」、美肌の硫黄泉「別所温泉外湯めぐり宿」を徹底解説。',
    heroDesc: '枕草子にも記された信州最古の温泉地「別所温泉（信州の鎌倉）」。日本で唯一現存する木造八角塔「国宝 安楽寺八角三重塔」。善光寺と向かい合う厄除けの霊場「北向観音」。徳川軍を二度撃退した真田幸村公ゆかりの「上田城」。ほのかな硫黄香る美肌湯と名物美味だれ焼き鳥の旅。',
    categoryKey: 'nagano-bessho-onsen-ueda-castle-stay',
    areaGuides: [
      {
        key: 'bessho_onsen_heritage_inn_stay',
        title: '1. 別所温泉街〜北向観音・3つの外湯めぐり（信州最古の名湯と厄除け霊場）',
        timing: '通年（春の桜・秋の紅葉・冬の雪見風呂）',
        desc: '長野・善光寺と向かい合って建ち、両方参詣しないと片参りになるとされる「北向観音」。木造の風情ある3つの外湯「大湯（木曾義仲ゆかり）」「大師の湯（慈覚大師）」「石湯（真田幸村の隠し湯）」。ほのかな硫黄の香りと美肌の弱アルカリ性単純硫黄泉。',
        spots: '北向観音（愛染カツラ）、別所温泉外湯（大湯・大師の湯・石湯）、足湯「ななくりの湯」、七久里小路',
        access: '上田駅より上田電鉄別所線で約30分「別所温泉駅」下車。上信越道「上田菅平IC」より約30分。',
        tip: '別所温泉の外湯は入浴料が約200円とリーズナブルで、レトロな湯小屋巡りをしながら地元の方々との温かい触れ合いが楽しめます。'
      },
      {
        key: 'ueda_castle_sanada_hotel_stay',
        title: '2. 上田城跡公園〜信州上田城下町（真田幸村の知略が息づく不落の名城）',
        timing: '通年（春の上田城千本桜まつり・秋のけやき並木紅葉）',
        desc: '真田昌幸が築城し、徳川の大軍を二度にわたり撃退した不落の名城「上田城（国の史跡）」。真田石が埋め込まれた東虎口櫓門。真田神社。城下町の柳町（旧北国街道沿いの格子戸と白壁土蔵の町並み・信州亀齢の酒蔵）。',
        spots: '上田城跡公園（東虎口櫓門・真田神社・櫓展示）、信州上田真田丸大河ドラマ館跡、北国街道 柳町（岡崎酒造）',
        access: '北陸新幹線「上田駅」お城口より徒歩約12分。',
        tip: '柳町の「岡崎酒造」では、女性杜氏が醸す全国的入手困難酒「信州亀齢（きれい）」の蔵元直売や、地酒ジェラートが味わえます。'
      },
      {
        key: 'shinshu_bessho_soba_ayu_stay',
        title: '3. 信州名物「手打ちそば」＆上田「美味だれ焼き鳥」（ニンニク醤油の秘伝タレ）',
        timing: '通年（秋の松茸料理シーズン：9月〜11月上旬は全国屈指の松茸小屋がオープン）',
        desc: '信州八重原産そば粉で打つ香り高い「手打ち信州そば」。すりおろしニンニクを効かせた特製醤油ダレをコップから直接かけて食べる上田ご当地グルメ「美味だれ（おいだれ）焼き鳥」。秋に別所温泉周辺の山々で採れる天然松茸尽くしの会席料理。',
        spots: '別所温泉街の手打ちそば店、上田駅前美味だれ焼き鳥居酒屋、別所温泉の松茸料理旅館',
        access: '上田市・別所温泉エリア。',
        tip: '秋の別所温泉は「日本屈指の松茸の産地」として知られ、山腹に季節限定で建つ「松茸小屋」では、焼き松茸や松茸鍋、松茸ご飯がリーズナブルに堪能できます。'
      }
    ]
  },
  {
    slug: 'shizuoka-sumatakyo-okuoi-lake-bridge-stay',
    badge: 'SUMATAKYO & OKUOI GUIDE',
    title: '【静岡・寸又峡＆奥大井湖上駅】死ぬまでに渡りたい夢の吊橋・アプト式鉄道宿 完全ガイド',
    metaDesc: 'エメラルドグリーンの湖上絶景と美女づくりの湯・静岡寸又峡＆川根本町エリア完全特化！死ぬまでに一度は渡りたい「夢の吊橋」、湖に浮かぶ秘境駅「奥大井湖上駅（レインボーブリッジ）」、南アルプスあぷとライン、寸又峡温泉宿を徹底解説。',
    heroDesc: 'チンダル現象が生み出す息を呑むエメラルドグリーンの水面「寸又峡・夢の吊橋」。揺れる橋の中央で祈ると恋が叶うという伝説。大井川のダム湖にぽっかりと浮かぶ神秘の秘境駅「奥大井湖上駅」。日本唯一のアプト式山岳鉄道。トロリとした「美女づくりの湯」で癒やされる秘境旅へ。',
    categoryKey: 'shizuoka-sumatakyo-okuoi-lake-bridge-stay',
    areaGuides: [
      {
        key: 'sumatakyo_dream_bridge_inn_stay',
        title: '1. 寸又峡〜夢の吊橋（死ぬまでに渡りたい！エメラルドグリーンの絶景吊橋）',
        timing: '通年（新緑の5〜6月・紅葉の11月上旬〜下旬）',
        desc: 'トリップアドバイザー「死ぬまでに一度は渡りたい世界の徒歩吊り橋10選」に選ばれた「夢の吊橋（長さ90m・高さ8m）」。微粒子が青い光だけを反射する奇跡のミルキーブルー湖面。橋の真ん中で願う恋愛成就。トロトロの肌触りの「美女づくりの湯」寸又峡温泉。',
        spots: '夢の吊橋（寸又峡プロムナードコース・飛龍橋）、寸又峡温泉街（足湯カフェ・翠紅苑）、天子の遊歩道',
        access: '大井川鐵道「千頭駅」より路線バス「寸又峡温泉行」で約40分。新東名「島田金谷IC」より約90分。',
        tip: '夢の吊橋は一度に渡れる定員が10名のため、紅葉シーズンや連休中は一方通行規制となり、朝一番の散策が待ち時間なくおすすめです。'
      },
      {
        key: 'okuoi_lake_station_nature_stay',
        title: '2. 奥大井湖上駅〜南アルプスあぷとライン（湖の上に浮かぶ神秘の秘境駅）',
        timing: '通年（クールジャパンアワード受賞・錦秋の湖上鉄道）',
        desc: 'ダム湖「接岨湖（せっそこ）」に突き出た半島状の尾根に位置する奇跡の絶景駅「奥大井湖上駅」。湖上にかかる赤い鉄橋「奥大井レインボーブリッジ」を渡る日本唯一のアプト式歯車列車（南アルプスあぷとライン）。湖上展望所からの絶景見下ろし。',
        spots: '奥大井湖上駅（Happy Happy Bell・レイクコテージ奥大井）、レインボーブリッジ遊歩道、奥大井湖上駅展望台',
        access: '大井川鐵道井川線（あぷとライン）「奥大井湖上駅」下車。',
        tip: 'レインボーブリッジの線路脇には遊歩道が併設されており、湖の真上を歩いて対岸の展望所へ登ると、駅がまるで湖に浮かんでいるような絶景写真が撮れます。'
      },
      {
        key: 'kawane_green_tea_wild_game_stay',
        title: '3. 川根名産「川根茶」＆山女魚・鹿肉ジビエ料理（大井川の豊かな大自然の恵み）',
        timing: '通年（初初夏の茶摘み新茶・秋のジビエ鍋）',
        desc: '山霧と澄んだ大気が育む日本屈指の高級銘茶「川根茶（かわねちゃ）」。清流で育ったヤマメやイワナの炭火塩焼き。新鮮な鹿肉や猪肉を使った特製ジビエ鍋。川根温泉の源泉かけ流し露天風呂でいただく郷土料理会席。',
        spots: '道の駅川根温泉（ふれあいの泉）、フォーレなかかわね茶茗舘、千頭駅前のお食事処',
        access: '川根本町・島田市川根町。',
        tip: '「川根茶」は甘みと渋みのバランスが秀逸で、茶茗舘では本格的な茶室で一煎目・二煎目・三煎目と味わいの変化を楽しむ呈茶体験ができます。'
      }
    ]
  },
  {
    slug: 'yamaguchi-nagato-yumoto-motonosumi-shrine-stay',
    badge: 'NAGATO YUMOTO & MOTONOSUMI GUIDE',
    title: '【山口・長門湯本温泉＆元乃隅神社】日本海望む123基赤鳥居・恩湯リノベ温泉街宿 完全ガイド',
    metaDesc: 'CNN世界最長クラスの絶景鳥居と奇跡の再生温泉街・山口長門エリア完全特化！日本海へ連なる123基の赤鳥居「元乃隅神社」、国の名勝「青海島」、星野リゾート監修で美しく再生した「長門湯本温泉（恩湯・飛び石遊歩道・川床宿）」を徹底解説。',
    heroDesc: '青い日本海と断崖絶壁に向かって123基の朱色鳥居がトンネルのように連なる奇跡の絶景「元乃隅（もとのすみ）神社」。「長門富士」の麓、音信川（おとづれがわ）沿いに竹林や飛び石、川床カフェが美しくリノベーションされた「長門湯本温泉」。名湯「恩湯」と日本海の旬魚を味わう旅。',
    categoryKey: 'yamaguchi-nagato-yumoto-motonosumi-shrine-stay',
    areaGuides: [
      {
        key: 'nagato_yumoto_onsen_river_stay',
        title: '1. 長門湯本温泉〜音信川川床・恩湯（星野リゾート監修で美しく再生した湯街）',
        timing: '通年（春の桜・初夏のホタル・秋の紅葉・冬の雪灯り）',
        desc: '開湯約600年、山口県最古の温泉地「長門湯本温泉」。音信川（おとづれがわ）沿いに整備された川床テラス、飛び石、竹林の階段。源泉直上に建つ立ち寄り湯「恩湯（おんとう）」。瓦屋根の宿が軒を連ね、そぞろ歩きが楽しいモダンレトロな温泉街。',
        spots: '立ち寄り湯 恩湯、音信川川床テラス、おとづれ足湯、竹林の階段、大谷山荘、界 長門',
        access: 'JR美祢線「長門湯本駅」下車徒歩約10分。山口宇部空港より乗合タクシーで約75分。中国道「美祢IC」より約30分。',
        tip: '音信川の川床テラスにはカフェが併設されており、川のせせらぎを聞きながら地元の長門ゆずきちを使ったドリンクやスイーツをテイクアウトして楽しめます。'
      },
      {
        key: 'motonosumi_shrine_cape_stay',
        title: '2. 元乃隅神社〜123基の鳥居・龍宮の潮吹（CNNが選ぶ日本の最も美しい場所31選）',
        timing: '通年（晴天の午前中〜午後は日本海の青と鳥居の赤が鮮烈）',
        desc: '日本海に向かって朱色の鳥居が123基・100m以上にわたって並ぶ絶景「元乃隅（もとのすみ）神社」。大鳥居の上部に設置された「日本一入れにくい賽銭箱」。波が岩の割れ目に入り込んで吹き上がる「龍宮の潮吹」。広大な草原が広がる「千畳敷」。',
        spots: '元乃隅神社、龍宮の潮吹、千畳敷（標高333mの草原カフェ）、青海島（海上アルプス・観光遊覧船）',
        access: '長門湯本温泉より車約30分。JR長門古市駅よりタクシー約20分。',
        tip: '高さ約6mの大鳥居の上にある賽銭箱に見事賽銭を投げ入れることができると、願い事が叶うと言われています。'
      },
      {
        key: 'nagato_gastro_kawara_soba_stay',
        title: '3. 山口名物「瓦そば」＆長門やきとり・仙崎イカ（熱々の瓦と新鮮な地鶏）',
        timing: '通年（初夏〜秋の仙崎活イカ・地鶏長州黒かしわ）',
        desc: '熱した日本瓦の上で茶そばを香ばしく焼き、錦糸卵や牛肉、レモン、もみじおろしをトッピングして特製つゆにつけて食べる山口名物「瓦そば」。仙崎港で揚がる透明な「ケンサキイカ活造り」。養鶏が盛んな長門名物「長門やきとり（ガーリックパウダー）」。',
        spots: '瓦そば柳屋（長門湯本温泉街）、仙崎みすゞ通り・センザキッチン、長門やきとり店群',
        access: '長門市街・長門湯本温泉・仙崎港。',
        tip: '瓦に接した茶そばがパリパリのおこげになり、上部の柔らかい麺との食感のコントラストが瓦そばの醍醐味です。'
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
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ${config.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            ${config.title}
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
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
                  {hotels.map((hotel: any) => (
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
                          href={hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 rounded-xl shadow transition"
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
}

for (const cfg of microWave24Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated micro tourist hub page: /${cfg.slug}`);
}
