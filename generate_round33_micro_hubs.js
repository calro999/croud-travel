const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
const allHotels = JSON.parse(fs.readFileSync(p, 'utf8'));

const hubs = [
  {
    slug: 'yamagata-sakata-haguro-dewasanzan-stay',
    tag: 'SAKATA & HAGURO DEWASANZAN GUIDE',
    title: '【山形・酒田＆羽黒山・出羽三山】山居倉庫・国宝五重塔杉並木＆庄内浜寿司宿 完全ガイド',
    metaTitle: '【山形・酒田＆羽黒山】山居倉庫・五重塔杉並木＆庄内浜寿司・宿坊 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '北前船交易で栄えた湊町酒田の白壁土蔵「山居倉庫」ケヤキ並木・本間家旧本邸、ミシュラン三ツ星・出羽三山羽黒山の「国宝五重塔」と樹齢三百年二千四百四十六段杉並木参道、庄内浜天然地魚の極上握り寿司と平田牧場金華豚を味わう宿を徹底解説。',
    lead: '「西の堺、東の酒田」と謳われ、北前船の日本海交易で豪商たちが繁栄を極めた湊町「酒田」。米の保存のために建てられた漆喰白壁の「山居倉庫」と風情あるケヤキ並木。修験道の霊場として千四百年の歴史を刻む「出羽三山・羽黒山」では、深山幽谷の静寂の中に佇む東北最古の「国宝五重塔」と2,446段の石段杉並木。そして日本海の荒波が育んだ庄内浜の極上寿司。精神の再生と北前船ロマンに浸る山形庄内ステイへご案内します。',
    guides: [
      {
        key: 'sakata_sankyo_warehouse_stay',
        badge: '北前船の繁栄と明治の白壁土蔵群',
        title: '1. 山居倉庫（白壁土蔵造・ケヤキ並木）＆豪商・本間家旧本邸・日和山公園',
        timing: '通年（新緑のケヤキ、夏の爽やかな日本海風、秋の黄金色の稲穂、冬の雪化粧の土蔵）',
        desc: '明治26年に酒田米穀取引所の付属倉庫として建設された「山居倉庫」。12棟の漆喰白壁の土蔵が連なり、夏の西日と日本海の強風を遮るために植えられたケヤキ並木との景観は酒田の象徴。内部は庄内米歴史資料館や観光物産館として活用されています。また日本一の地主と謳われた「本間家旧本邸」では武家造りと商家造りが一体となった格式高い建築美を鑑賞できます。日和山公園からの日本海夕景も見事です。',
        spots: '山居倉庫（庄内夢の倶楽・ケヤキ並木）、本間家旧本邸・別邸（本間美術館）、日和山公園（日本最古級木造六角灯台）、酒田港、相馬樓（舞娘演舞）',
        access: 'JR羽越本線「酒田駅」より市内循環バスで約10分（山居倉庫前下車）。日本海東北自動車道「酒田IC」より約15分。',
        tip: '江戸時代の料亭を復元した「相馬樓」では、酒田舞娘（まいこ）の艶やかな演舞と伝統の雛人形コレクションを間近で鑑賞できます。'
      },
      {
        key: 'hagurosan_five_storied_pagoda_stay',
        badge: 'ミシュラン三ツ星・生まれ変わりの聖地',
        title: '2. 出羽三山羽黒山「国宝五重塔」＆二千四百四十六段の石段・樹齢数百年の杉並木宿坊',
        timing: '通年（春〜秋の表参道石段登拝、夏の清涼な杉木立、秋の紅葉ライトアップ、冬の静寂の雪参道）',
        desc: '月山・湯殿山とともに「出羽三山」を構成し、現世の幸福を祈る山として信仰を集める「羽黒山」。表参道随神門をくぐり渓谷を下ると、木漏れ日の中に東北最古の木造塔「国宝 羽黒山五重塔」が素木造りの圧倒的な威厳を放ちます。山頂の三神合祭殿へ続く2,446段の石段には樹齢300〜500年の巨大な杉並木が連なり、歩くこと自体が魂の浄化（生まれ変わり）の儀式。麓の手向（とうげ）地区には歴史ある宿坊が並びます。',
        spots: '羽黒山五重塔（国宝）、羽黒山表参道杉並木（天然記念物）、三神合祭殿、羽黒山宿坊街（手向地区）、出羽三山歴史博物館',
        access: 'JR鶴岡駅より庄内交通バス（羽黒山山頂行・随神門行）で約40〜50分。山形道「庄内あさひIC」より車で約30分。',
        tip: '石段の途中にある「二の坂茶屋」では、庄内平野を見下ろしながら名物の手作り「力餅」と抹茶をいただき一服するのが古くからの参拝の習わしです。'
      },
      {
        key: 'shonai_sushi_sangenton_stay',
        badge: '日本海屈指の魚場と幻のブランド豚',
        title: '3. 庄内浜の朝獲れ地魚握り寿司＆平田牧場金華豚・三元豚美食ステイ',
        timing: '通年（春のサクラマス・鯛、夏の岩牡蠣、秋の戻りガツオ・ハタハタ、冬の寒鱈・紅ズワイガニ）',
        desc: '対馬暖流とリマン寒流が交差する豊かな漁場「庄内浜」。酒田や鶴岡の寿司店では、鳥海山の伏流水が注ぐ海で獲れたのどぐろ、アラ、平目、ヤリイカなどの天然地魚を職人が極上の握りで提供します。また酒田発祥の世界的ブランド豚「平田牧場」の金華豚・三元豚は、きめ細かな肉質と上品な甘みの白身（脂身）がとろける美味しさ。とんかつやしゃぶしゃぶで地元の銘酒とともに味わう至福の夜が待っています。',
        spots: 'みなと市場（酒田港海鮮市場）、平田牧場本店・とんや、鶴岡すし街道名店各店、酒田ラーメン街道',
        access: '酒田駅・鶴岡駅周辺および酒田港周辺に名店が点在。',
        tip: '冬（1〜2月）の庄内地方では、脂の乗った真鱈の身・白子・肝を丸ごと煮込んだ郷土料理「寒鱈汁（どんがら汁）」が道の駅や宿で振る舞われます。'
      }
    ]
  },
  {
    slug: 'toyama-takaoka-himi-amaharashi-stay',
    tag: 'TAKAOKA & HIMI AMAHARASHI GUIDE',
    title: '【富山・高岡＆氷見・雨晴海岸】国宝瑞龍寺・雨晴富山湾立山連峰＆氷見寒ブリ宿 完全ガイド',
    metaTitle: '【富山・高岡＆氷見・雨晴海岸】瑞龍寺・雨晴海岸立山連峰＆氷見寒ブリ温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '加賀前田家二代当主前田利長の菩提寺・富山県唯一の建造物国宝「瑞龍寺」、高岡大仏、千本格子の金屋町、海を挟んで3,000m級の立山連峰を望む奇跡の絶景「雨晴海岸」、冬の味覚の王者「氷見寒ブリ」と天然温泉が湧く氷見海岸宿を徹底解説。',
    lead: '加賀百万石の美意識と工芸の魂が息づくものづくりの城下町「高岡」。壮麗な禅宗様建築が整然と並ぶ富山県唯一の国宝「高岡 瑞龍寺」と日本三大仏の「高岡大仏」。万葉の歌人・大伴家持が愛し、義経伝説が残る「雨晴海岸」からは、青い富山湾の海原越しに雪をいただく標高3000mの立山連峰がそびえ立つ世界でも極めて稀な大絶景。そして冬の富山湾の至宝「氷見寒ブリ」。歴史建築と大パノラマ、極上寒ブリに酔いしれる富山ステイへご案内します。',
    guides: [
      {
        key: 'takaoka_zuiryuji_kanayamachi_stay',
        badge: '加賀百万石の美の極致と鋳物の町',
        title: '1. 国宝「瑞龍寺」（壮麗な禅宗様伽藍）＆高岡大仏・金屋町千本格子の石畳散歩',
        timing: '通年（春・夏のライトアップイベント、新緑の境内、秋の紅葉）',
        desc: '前田利長公を弔うため三代利常公が約20年の歳月をかけて建立した曹洞宗の名刹「瑞龍寺」。総門・山門・仏殿・法堂が一直線に並び、左右に回廊がめぐる中国宋代の禅宗様伽藍配置は見事の極みであり、富山県で唯一の国宝に指定されています。高岡の街中には端正な顔立ちで愛される高さ約16mの青銅製「高岡大仏」や、加賀藩の保護のもと鋳物師が集まった「金屋町」の千本格子（さまのこ）と銅片が埋め込まれた石畳の風情ある町並みが広がります。',
        spots: '国宝高岡山瑞龍寺、高岡大仏、金屋町（重伝建地区・鋳物体験工房）、山町筋（土蔵造りの町並み）、高岡古城公園',
        access: 'JR北陸新幹線「新高岡駅」より徒歩約10分。あいの風とやま鉄道「高岡駅」より徒歩約10分。能越自動車道「高岡IC」より約15分。',
        tip: '金屋町の鋳物工房では、伝統の錫（すず）を使って自分だけのぐい呑みやアクセサリーを制作できる鋳物体験が大人気です。'
      },
      {
        key: 'amaharashi_coast_tateyama_view_stay',
        badge: '海越しに三千メートル級連峰を望む世界屈指の景観',
        title: '2. 雨晴海岸（義経岩・女岩）＆富山湾越しの立山連峰パノラマ・氷見線列車',
        timing: '秋〜冬（11〜2月の早朝、空気が澄み立山連峰がくっきりと白く輝くベストシーズン）',
        desc: '万葉集にも詠まれた名勝「雨晴海岸（あまはらしかいがん）」。源義経が奥州へ落ち延びる途中に雨宿りをしたという「義経岩」や沖合に浮かぶ「女岩」がシンボル。冬の晴れた日には、富山湾の青い海を挟んで遠く標高3,000m級の北アルプス立山連峰が屏風のようにそびえ立つ奇跡のパノラマが出現します。海岸沿いを走るローカル線「JR氷見線」の列車と海、連峰が織りなす風景は国内外の写真家を魅了し続けています。',
        spots: '雨晴海岸（義経岩・女岩）、道の駅 雨晴（展望デッキ）、JR氷見線（越乃Shu＊Kura等観光列車）、武田家住宅',
        access: 'JR氷見線「雨晴駅」より徒歩約5分。能越道「高岡北IC」より車で約15分。',
        tip: '冬の早朝、海面から水蒸気が立ち上る幻想的な自然現象「気あらし」と立山連峰の組み合わせは息を呑む神々しさです。'
      },
      {
        key: 'himi_buri_seafood_onsen_stay',
        badge: '富山湾の王者・ひみ寒ぶりと名湯',
        title: '3. 本場「氷見寒ブリ」尽くし会席（刺身・ブリしゃぶ・ブリ大根）＆氷見温泉郷海沿い宿',
        timing: '冬（11月下旬〜2月の「ひみ寒ぶり宣言」発令期間が最高潮）',
        desc: '富山湾の定置網漁で水揚げされる脂の乗った最高峰のブランド「氷見寒ブリ」。厳しい寒さの日本海で丸々と太ったブリは、とろけるような大トロの刺身、出汁にさっとくぐらせる「ブリしゃぶ」、旨味が染み渡った「ブリ大根」、香ばしい塩焼きとまさに贅の極み。海岸線沿いに広がる「氷見温泉郷」はナトリウム-塩化物強塩泉の名湯で、肌がすべすべになり体がポカポカと温まります。湯船から富山湾の日の出を拝む朝湯も最高です。',
        spots: 'ひみ番屋街（氷見漁港場外市場）、氷見漁港（朝セリ見学）、潮風ギャラリー（藤子不二雄Aアートコレクション）、氷見市海浜植物園',
        access: 'JR氷見線「氷見駅」下車。能越道「氷見IC」より約5〜10分。',
        tip: '「ひみ番屋街」では新鮮なブリや白えび・紅ズワイガニの買い物ができるほか、併設の総湯（日帰り温泉）や足湯からも立山連峰を望めます。'
      }
    ]
  },
  {
    slug: 'shiga-nagahama-omihachiman-chikubushima-stay',
    tag: 'NAGAHAMA, OMIHACHIMAN & CHIKUBUSHIMA GUIDE',
    title: '【滋賀・長浜＆近江八幡・竹生島】黒壁スクエア・神の棲む竹生島＆八幡堀・近江牛宿 完全ガイド',
    metaTitle: '【滋賀・長浜＆近江八幡】黒壁スクエア・竹生島クルーズ＆八幡堀・近江牛宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '明治の洋館とガラス工芸の街「長浜黒壁スクエア」、琵琶湖に浮かぶ日本三大弁財天の聖地「竹生島（宝厳寺・都久夫須麻神社）」クルーズ、豊臣秀次が開いた近江商人の城下町「近江八幡水郷めぐり・八幡堀」、日本三大和牛「近江牛」のすき焼き宿を徹底解説。',
    lead: '日本最大の湖・琵琶湖の東岸に広がる歴史と水の都。羽柴秀吉が初めて城持ち大名となり築いた長浜の町並みに、明治の銀行建築を再生したガラスの街「黒壁スクエア」。古くから神が棲む島として信仰を集める琵琶湖上のパワースポット「竹生島」。近江商人の誇りが息づく白壁土蔵と水郷の風情が残る「近江八幡・八幡堀」。そして口の中でとろける日本三大和牛「近江牛」。湖の風と美酒、近江の歴史を巡るステイへご案内します。',
    guides: [
      {
        key: 'nagahama_kurokabe_square_stay',
        badge: 'ガラス工芸と明治レトロの商店街',
        title: '1. 長浜黒壁スクエア（黒壁ガラス館・体験工房）＆長浜城歴史博物館・豊公園',
        timing: '通年（春の長浜曳山まつり・豊公園の桜、夏の琵琶湖花火、秋のそぞろ歩き）',
        desc: '明治時代の旧第百三十国立銀行長浜支店を活用した「黒壁一號館 黒壁ガラス館」を中心に、北国街道沿いの古い町並みがリノベーションされた「黒壁スクエア」。国内外の繊細なガラス工芸品が並び、吹きガラスやステンドグラスの制作体験が楽しめます。琵琶湖畔の豊公園にそびえる「長浜城歴史博物館」の天守展望台からは琵琶湖と伊吹山の大パノラマを一望。名物の「焼き鯖そうめん」やのっぺいうどんの食べ歩きも人気です。',
        spots: '黒壁スクエア（黒壁ガラス館・黒壁体験教室）、長浜城歴史博物館（豊公園）、慶雲館（名勝庭園・長浜盆梅展会場）、海洋堂フィギュアミュージアム黒壁',
        access: 'JR北陸本線「長浜駅」東口下車徒歩約5分。北陸自動車道「長浜IC」より車で約10分。',
        tip: '長浜名物「焼き鯖そうめん」は、じっくり甘辛く煮込んだ焼き鯖の煮汁でそうめんを煮込んだ汁気のない郷土料理で、鯖の旨味が麺に染み込んで絶品です。'
      },
      {
        key: 'chikubushima_sacred_island_stay',
        badge: '琵琶湖に浮かぶ日本三大弁財天の神域',
        title: '2. 竹生島クルーズ（国宝宝厳寺唐門・都久夫須麻神社）＆かわらけ投げ願掛け体験',
        timing: '通年（穏やかな湖面を進む春〜秋のクルーズ、神秘的な雪化粧の冬）',
        desc: '琵琶湖北部に浮かぶ周囲約2kmの島「竹生島（ちくぶしま）」。古来より神仏が宿る神聖な島とされ、日本三大弁財天の一つである「宝厳寺」と「都久夫須麻神社（竹生島神社）」が鎮座します。秀吉の御座船「日本丸」の部材を用いて建てられたとされる宝厳寺の「唐門」や「観音堂」は国宝・重要文化財。本殿前のかわらけ（素焼きの小皿）に願い事を書き、琵琶湖に向かって突き出た鳥居の間へ投げ通すと願いが叶う「かわらけ投げ」が人気です。',
        spots: '竹生島（宝厳寺本堂・唐門・三重塔、都久夫須麻神社本殿・竜神拝所）、長浜港観光船のりば、今津港',
        access: '長浜港より琵琶湖汽船の定期クルーズ船で約30分。長浜駅より長浜港へは徒歩約10分。',
        tip: '竹生島へ渡るクルーズ船は気象条件によって運航状況が変わるため、当日の朝に公式サイトで運航状況を確認することをおすすめします。'
      },
      {
        key: 'omihachiman_suigo_beef_stay',
        badge: '近江商人のふるさとと日本最古のブランド牛',
        title: '3. 近江八幡「八幡堀」手漕ぎ和船水郷めぐり＆日本三大和牛「近江牛」すき焼き会席',
        timing: '通年（春の八幡堀桜並木、夏の新緑ヨシ原、秋の八幡まつり・紅葉）',
        desc: '豊臣秀次が築いた八幡山城の城下町であり、近江商人の本拠地として栄えた「近江八幡」。白壁の土蔵が水面に映る「八幡堀」を手漕ぎの和船に揺られて進む水郷めぐりは、時代劇の世界に迷い込んだような風情。国の重要伝統的建造物群保存地区に指定された新町通りには豪商の屋敷が並びます。夕食には約400年の歴史を誇る「近江牛」の極上サーロインステーキやすき焼きを老舗料亭で堪能できます。',
        spots: '八幡堀、近江八幡水郷めぐり、新町通り・永原町（町並み保存地区）、日牟禮八幡宮、ラ コリーナ近江八幡（たねやクラブハリエ）',
        access: 'JR琵琶湖線「近江八幡駅」より近江鉄道バスで約7分（大杉町八幡山ロープウェー口下車）。名神高速「竜王IC」より約20分。',
        tip: '自然と共生するお菓子のテーマパーク「ラ コリーナ近江八幡」では、焼きたてのクラブハリエバームクーヘンを芝棟の絶景建築の中で味わえます。'
      }
    ]
  },
  {
    slug: 'tokushima-naruto-iya-oboke-gorge-stay',
    tag: 'NARUTO & IYA OBOKE GORGE GUIDE',
    title: '【徳島・鳴門＆祖谷渓・大歩危峡】世界最大鳴門渦潮・大塚美術館＆祖谷かずら橋秘境宿 完全ガイド',
    metaTitle: '【徳島・鳴門＆祖谷渓・大歩危】鳴門渦潮・大塚国際美術館＆祖谷かずら橋秘境宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '最大直径20mに達する世界最大級「鳴門の渦潮」観潮船と渦の道、世界の名画を原寸大陶板で再現した「大塚国際美術館」、日本三大秘境・祖谷渓の「祖谷のかずら橋」スリル渡橋、大歩危峡遊覧船と吉野川ラフティング、天空露天風呂の秘境宿を徹底解説。',
    lead: '鳴門海峡のダイナミックな潮流が渦巻く海のスペクタクルと、四国山地の奥深くに平家落人伝説が眠る日本屈指の深山秘境。世界最大級のスケールを誇る「鳴門の渦潮」と、世界の名画を一堂に体感できる奇跡のミュージアム「大塚国際美術館」。山あいに分け入れば、シラクチカズラで編まれた吊橋が足元を透かす「祖谷のかずら橋」とエメラルドグリーンの激流が刻んだ「大歩危小歩危」。四国の海と山の両極の感動に出逢う徳島ステイへご案内します。',
    guides: [
      {
        key: 'naruto_whirlpools_otsuka_museum_stay',
        badge: '海の驚異と世界の名画千点超の陶板美術館',
        title: '1. 鳴門の渦潮（うずしお観潮船・渦の道）＆大塚国際美術館（システィーナ・礼拝堂）',
        timing: '通年（春・秋の大潮時が最も巨大な渦潮が出現するベストタイミング）',
        desc: '瀬戸内海と紀伊水道の干満差によって発生する「鳴門の渦潮」。大潮の際には最大直径20m、時速20kmに達し世界三大潮流の一つに数えられます。大鳴門橋の橋桁に作られた遊歩道「渦の道」のガラス床からは45mの高さから真下に渦潮を見下ろせます。隣接する「大塚国際美術館」は、西洋名画を陶板で原寸大再現した世界初の美術館。ミケランジェロのシスティーナ礼拝堂やモネの「大睡蓮」など約1,000点の名画を歩いて巡れます。',
        spots: '鳴門の渦潮（うずしおクルーズ・わんだーなると）、大鳴門橋架橋記念館エディ・渦の道、大塚国際美術館、鳴門公園千畳敷展望台',
        access: 'JR鳴門駅より鳴門市営バスで約20分（鳴門公園下車）。高速バス「鳴門公園口」すぐ。神戸淡路鳴門自動車道「鳴門北IC」より約5分。',
        tip: '渦潮は毎日出現時間が潮の干満によって異なるため、事前に「潮見表（渦潮カレンダー）」を確認して満潮・干潮のピーク時刻に合わせて訪れるのが鉄則です。'
      },
      {
        key: 'iya_kazurabashi_secret_valley_stay',
        badge: '国指定重要有形民俗文化財・平家落人の隠れ里',
        title: '2. 祖谷のかずら橋（スリル満点の空中渡橋）＆小便小僧・祖谷温泉ケーブルカー露天風呂',
        timing: '通年（春の新緑、夏の清流涼風、10月下旬〜11月中旬の全山渓谷紅葉、冬の雪景色）',
        desc: '四国山地の急峻な山岳地帯に広がる日本三大秘境「祖谷渓（いやけい）」。平家落人が追っ手を防ぐためいつでも切り落とせるように自生するシラクチカズラを編んで架けたと伝わる「祖谷のかずら橋」。長さ45m、川面からの高さ14m、歩くたびにギシギシと揺れ、足元のすき間から清流が見えるスリルは満点。祖谷川沿いの断崖に立つ「小便小僧」や、専用ケーブルカーで高低差170mの谷底へ下りて入浴する秘湯・祖谷温泉の白濁湯は忘れられない体験です。',
        spots: '祖谷のかずら橋、琵琶の滝、祖谷渓の小便小僧、和の宿ホテル祖谷温泉（谷底露天風呂）、落合集落（重伝建・かやぶき民家群）',
        access: 'JR土讃線「大歩危駅」より三好市営バス（かずら橋行）で約20〜30分。井川池田ICより車で約60分。',
        tip: 'かずら橋のすぐ近くにある「琵琶の滝」は、落人たちが京の都を偲んで琵琶を奏でたという伝説が残る落差約50mの清らかな滝です。'
      },
      {
        key: 'oboke_koboke_boat_gorge_stay',
        badge: '二億年の吉野川激流が刻んだ奇岩大峡谷',
        title: '3. 大歩危峡遊覧船＆吉野川激流ラフティング・祖谷そばと阿波尾鶏会席宿',
        timing: '通年（3〜11月のラフティング・遊覧船運航、冬のこたつ船）',
        desc: '吉野川の上流が結晶片岩を削り取って形成した大渓谷「大歩危（おおぼけ）・小歩危（こぼけ）」。「大股で歩いても小股で歩いても危ない」ことから名付けられた奇岩絶壁が約8kmにわたって続きます。約30分間の「大歩危峡遊覧船」では、船頭の解説を聞きながら天然記念物の含礫片岩の彫刻美を間近に鑑賞。激流を下るラフティングは世界選手権が開催されるほどの世界的名所。夕食にはつなぎを使わない素朴な「祖谷そば」や徳島地鶏「阿波尾鶏」を味わえます。',
        spots: '大歩危峡観光遊覧船、道の駅大歩危（妖怪屋敷・石の博物館）、小歩危峡、ラフティングベース各社',
        access: 'JR土讃線「大歩危駅」下車徒歩約20分（遊覧船のりば）。高知道「新宮IC」または「大豊IC」より車で約30〜40分。',
        tip: '三好市山城町は大歩危の険しい地形から生まれた「児啼爺（こなきじじい）」をはじめとする妖怪伝説の宝庫で、街道沿いにユーモラスな妖怪像が点在します。'
      }
    ]
  },
  {
    slug: 'saga-karatsu-yobuko-genkai-squid-stay',
    tag: 'KARATSU & YOBUKO SQUID GUIDE',
    title: '【佐賀・唐津＆呼子・玄海】唐津城・虹の松原＆呼子朝市透明イカ活き造り宿 完全ガイド',
    metaTitle: '【佐賀・唐津＆呼子・玄海】唐津城・虹の松原＆呼子朝市イカ活き造り温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '海に突き出た舞鶴城「唐津城」と日本三大松原「虹の松原」百万人植樹のパノラマ、日本三大朝市「呼子の朝市」、皿の上でまだ動く透明な「呼子のイカ活き造り」とふんわりイカしゅうまい、玄界灘の夕日を望むリアス式海岸の温泉宿を徹底解説。',
    lead: '秀吉の文禄・慶長の役の拠点・名護屋城の歴史を秘め、玄界灘の豊かな海に面した城下町「唐津」。海に羽を広げた鶴のようにそびえる「唐津城（舞鶴城）」と、鏡山から望む長さ4.5km・百万本の黒松が弧を描く「虹の松原」。そして毎朝露店が軒を連ねる「呼子の朝市」。職人が素早くさばく「呼子のイカの活き造り」は、透き通った身の甘みとコリコリとした食感が感動を呼びます。海の幸と陶芸、歴史ロマンが薫る佐賀・唐津呼子ステイへご案内します。',
    guides: [
      {
        key: 'karatsu_castle_matsubara_stay',
        badge: '日本三大松原の緑と唐津湾の天守閣',
        title: '1. 唐津城天守（舞鶴城）＆名勝「虹の松原」百万本黒松街道・唐津焼名窯めぐり',
        timing: '通年（春の山桜、5月上旬の唐津城樹齢百年の藤棚、秋の唐津くんち）',
        desc: '唐津湾に突き出た満島山に築かれた「唐津城」。左右に広がる砂浜と松原が翼を広げた鶴に見えることから「舞鶴城」の別名を持ちます。天守閣からは唐津湾と玄界灘の島々を一望。「虹の松原」は初代唐津藩主・寺沢広高が防風・防砂のために植林した長さ約4.5km・幅約500mに及ぶ松原で、約100万本の黒松が緑のトンネルを作ります。茶人に愛された「一楽二萩三唐津」と称される伝統工芸「唐津焼」の窯元巡りも雅な旅の楽しみです。',
        spots: '唐津城天守（藤棚）、虹の松原（からつバーガー）、鏡山展望台（虹の松原一望パノラマ）、旧唐津銀行（辰野金吾監修）、唐津神社',
        access: 'JR筑肥線「唐津駅」より徒歩約20分またはバス約10分。福岡空港・博多駅より地下鉄直通電車で約1時間15分。西九州道「唐津IC」より約15分。',
        tip: '虹の松原の中を走る県道沿いにある移動販売車「からつバーガー」は、カリッと焼いたバンズと特製デミグラスソースが絶品のご当地名物です。'
      },
      {
        key: 'yobuko_morning_market_squid_stay',
        badge: '大正時代から続く日本三大朝市と透明な海の宝石',
        title: '2. 呼子の朝市（名物おばちゃんとの対話）＆呼子「イカの活き造り」・後造り天ぷら',
        timing: '通年（春〜秋のケンサキイカ（ヤリイカ）、冬のアオリイカ（ミズイカ）で年中旬のイカを堪能）',
        desc: '元旦を除く年中無休で毎朝7時半から開かれる「呼子の朝市」。呼子港の朝市通り約200mに地元の元気なおばちゃんたちの露店が並び、獲れたての鮮魚、干物、ウニ、野菜が所狭しと並びます。そして全国にその名を轟かせる「呼子のイカ活き造り」。玄界灘で一本釣りされたイカを生簀から揚げて数秒で捌くため、身はクリスタルガラスのように透き通り、口の中で甘みが広がります。刺身を堪能した後の下足や耳を塩焼きやサクサクの「天ぷら」にする後造りも絶品です。',
        spots: '呼子朝市通り、海中レストラン萬坊（発祥の店・イカしゅうまい）、河太郎呼子店、呼子大橋、マリンパル呼子（遊覧船ジーラ・イカ丸）',
        access: '唐津大手口バスセンターより昭和バス（呼子行）で約30分。唐津市街地より車で約25分。',
        tip: 'イカの活き造りはシケ（悪天候）の日は入荷が少なくなることがあるため、海沿いの宿で事前に「活イカ会席プラン」を予約しておくのが確実です。'
      },
      {
        key: 'genkai_sea_sunset_resort_stay',
        badge: '恋人の聖地と玄界灘の沈みゆく夕日',
        title: '3. 波戸岬「ハートのモニュメント」＆名護屋城跡・玄界灘パノラマ夕日露天宿',
        timing: '通年（水平線に夕日が沈む黄昏時、冬の脂が乗ったクエ・アラ鍋）',
        desc: '九州本土の最西北端に突き出た「波戸岬（はどみさき）」。白いハートのオブジェが海を背景に佇む「恋人の聖地」として知られ、海中展望塔からは水深7mの海中を泳ぐ魚たちを観察できます。名物の「サザエのつぼ焼き」小屋が並び、香ばしい醤油の香りが漂います。近くの「特別史跡 名護屋城跡」は豊臣秀吉が朝鮮出兵の拠点とした巨大山城で、130以上の大名陣跡が残る歴史の証人。夜は玄界灘を望む展望露天風呂で夕日を眺めながらゆったり寛げます。',
        spots: '波戸岬（ハート岬・サザエつぼ焼き売店・玄海海中展望塔）、特別史跡名護屋城跡・佐賀県立名護屋城博物館、風の見える丘公園',
        access: '呼子より車で約10分。唐津市街地より車で約35分。',
        tip: '波戸岬のサザエのつぼ焼き売店では、注文を受けてから網の上で焼き上げる熱々のサザエやアワビ、イカ焼きを素朴な小屋の中で味わえます。'
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
  console.log('All 5 round 33 micro hubs successfully generated!');
}

main();
