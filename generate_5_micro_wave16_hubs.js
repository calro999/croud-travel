const fs = require('fs');
const path = require('path');

const microWave16Configs = [
  {
    slug: 'nagasaki-hirado-sasebo-kujukushima-stay',
    badge: 'HIRADO & SASEBO GUIDE',
    title: '【長崎・平戸＆佐世保・九十九島】世界遺産キリシタン史跡・平戸城＆九十九島遊覧・ヒラメ宿 完全ガイド',
    metaDesc: '異国情緒と多島美の楽園・長崎平戸＆佐世保九十九島エリア完全特化！平戸城（宿泊体験キャッスルステイ）、世界遺産春日集落・生月島サンセットウェイ、九十九島パールシーリゾート、名物「天然ヒラメ・佐世保バーガー宿」を徹底解説。',
    heroDesc: '南蛮貿易と潜伏キリシタンの歴史が息づく城下町「平戸」と、208の島々が浮かぶ絶景「九十九島・佐世保」。生月島の断崖絶壁を走るサンセットウェイ。平戸港水揚げの極上「天然ヒラメ」と佐世保のレモンステーキを味わう西端の旅。',
    categoryKey: 'nagasaki-hirado-sasebo-kujukushima-stay',
    areaGuides: [
      {
        key: 'hirado_castle_heritage_onsen',
        title: '1. 平戸城〜平戸オランダ商館・寺院と教会の見える風景（和洋折衷の城下町散歩）',
        timing: '通年（春の平戸城つつじまつり・秋の平戸くんち）',
        desc: '海に突き出た丘に築かれ、天守閣から平戸瀬戸を一望する「平戸城」。寺院の瓦屋根と聖フランシスコ・ザビエル記念教会の尖塔が重なり合う「寺院と教会の見える風景」。復元された「平戸オランダ商館」と平戸温泉の湯。',
        spots: '平戸城（懐柔櫓・キャッスルステイ）、寺院と教会の見える風景、平戸オランダ商館、平戸ザビエル記念教会',
        access: '松浦鉄道「たびら平戸口駅」より車・バスで約15分。西九州道「佐々IC」より約40分。',
        tip: '日本最西端の駅「たびら平戸口駅」では、駅窓口で「日本最西端駅訪問証明書」を発行してもらえます。'
      },
      {
        key: 'sasebo_kujukushima_resort_stay',
        title: '2. 九十九島〜弓張岳展望台・生月島サンセットウェイ（208の島々と断崖絶壁ドライブ）',
        timing: '通年（夕暮れ時に島々のシルエットが黄金色に染まる絶景）',
        desc: '西海国立公園の代表景観「九十九島（くじゅうくしま）」。九十九島遊覧船パールクィーンや海きらら水族館。標高364mの「弓張岳展望台」からの夜景。映画やCMのロケ地として有名な生月島（いきつきしま）西海岸の断崖道路。',
        spots: '九十九島パールシーリゾート（遊覧船・海きらら）、弓張岳展望台、展海峰（菜の花・コスモス）、生月サンセットウェイ・大バエ灯台',
        access: 'JR佐世保駅より路線バス約25分。',
        tip: '生月サンセットウェイは信号が一切なく、垂直に切り立つ断崖と東シナ海の水平線を眺めながら走る日本屈指の絶景ロードです。'
      },
      {
        key: 'hirado_hirame_sasebo_beef_stay',
        title: '3. 平戸名物「天然ヒラメ」＆佐世保バーガー（冬〜春のヒラメまつりと本場アメリカングルメ）',
        timing: '通年（天然ヒラメまつり：1月〜3月）',
        desc: '玄界灘の激流に揉まれて身が締まった「平戸の天然ヒラメ」。透き通るヒラメのお造り、握り寿司、しゃぶしゃぶ。佐世保発祥のジューシーな「佐世保バーガー」や、熱々の鉄板でレモン醤油タレを絡める「レモンステーキ」。',
        spots: '平戸ヒラメ料理指定店、佐世保バーガー認定店（ヒカリ・ログキット）、蜂の家（ジャンボシュークリーム）',
        access: '平戸・佐世保市街。',
        tip: '佐世保のレモンステーキは、お肉を食べ終えた後に鉄板に残ったタレと肉汁の中にご飯を投入して混ぜて食べるのが通のスタイルです。'
      }
    ]
  },
  {
    slug: 'miyazaki-nichinan-aoshima-coast-stay',
    badge: 'NICHINAN & AOSHIMA GUIDE',
    title: '【宮崎・日南海岸＆青島】青島神社・鬼の洗濯板＆サンメッセ日南モアイ・宮崎牛宿 完全ガイド',
    metaDesc: '南国のパームツリーと神話の海岸線・宮崎日南海岸＆青島エリア完全特化！国指定天然記念物「青島・鬼の洗濯板」、サンメッセ日南の完全復刻モアイ像、鵜戸神宮の運玉投げ、青島天然温泉、最高級宮崎牛＆日南一本釣りカツオ宿を徹底解説。',
    heroDesc: 'どこまでも続く青い太平洋とフェニックスの並木道「宮崎・日南海岸」。周囲1.5kmの聖なる島「青島」を囲む奇岩・鬼の洗濯板。洞窟の中に本殿が鎮座する鵜戸神宮。トロピカルなリゾート温泉と、日本一の宮崎牛ステーキを味わう南国ステイ。',
    categoryKey: 'miyazaki-nichinan-aoshima-coast-stay',
    areaGuides: [
      {
        key: 'aoshima_coast_resort_onsen',
        title: '1. 青島〜青島神社・鬼の洗濯板（弥生橋を渡る縁結びの島と波状岩）',
        timing: '通年（夏のビーチアクティビティ・冬のプロ野球キャンプ）',
        desc: '熱帯・亜熱帯植物に覆われた周囲約1.5kmの小島「青島」。島の中央に鎮座する縁結びのパワースポット「青島神社」。干潮時に姿を現す天然記念物「鬼の洗濯板（奇岩波状岩）」。とろみのある炭酸水素塩泉の青島温泉。',
        spots: '青島（弥生橋・トゥクトゥク）、青島神社（元宮・天の平瓮投げ）、鬼の洗濯板、AOSHIMA BEACH PARK',
        access: 'JR日南線「青島駅」下車徒歩約10分。宮崎空港より車・バスで約15分。',
        tip: '青島神社奥の「元宮」では、素焼きの小皿（平瓮）を願い事を込めながら投げる神事があり、神聖な熱帯林の空気が漂います。'
      },
      {
        key: 'nichinan_udo_shrine_stay',
        title: '2. 鵜戸神宮〜サンメッセ日南・堀切峠（洞窟の神社とイースター島公認モアイ像）',
        timing: '通年（太平洋の水平線パノラマとドライブ）',
        desc: '太平洋の断崖絶壁の洞窟の中に朱塗りの本殿が鎮座する「鵜戸神宮（うどじんぐう）」。亀石の穴に願いを込めて投げる「運玉投げ」。イースター島の長老会から特別許可を得て完全復刻された「サンメッセ日南」の7体のモアイ像。',
        spots: '鵜戸神宮（亀石・お乳岩・運玉）、サンメッセ日南（モアイ像・天空のブランコ）、堀切峠・道の駅フェニックス（日向夏ソフト）',
        access: '宮崎市内より車で約40〜50分。路線バス運行。',
        tip: '鵜戸神宮の運玉投げは、男性は左手、女性は右手で投げ、亀石の背中の窪みに入ると願いが叶うと伝えられています。'
      },
      {
        key: 'miyazaki_beef_katsuo_gourmet',
        title: '3. 内閣総理大臣賞「宮崎牛」＆日南カツオ（全国和牛共進会史上初の4大会連続最高賞）',
        timing: '通年（春〜秋は日南一本釣りカツオが旬）',
        desc: '全国和牛能力共進会で4大会連続の内閣総理大臣賞を受賞した最高峰黒毛和牛「宮崎牛」。とろけるような霜降りサーロインステーキ。一本釣り漁獲量日本一を誇る日南の「初ガツオ・戻りガツオ」のタタキ、宮崎名物「チキン南蛮」。',
        spots: '宮崎牛鉄板焼き店、日南一本釣りカツオ炙り重提供店、道の駅なんごう（マンゴースイーツ）',
        access: '宮崎・青島・日南エリア。',
        tip: '日南名物「カツオ一本釣り炙り重」は、特製タレに漬けた新鮮なカツオを自分で七輪で炙り、最後に出汁茶漬けにして楽しむ絶品ご当地グルメです。'
      }
    ]
  },
  {
    slug: 'toyama-himi-amaharashi-tateyama-stay',
    badge: 'HIMI & AMAHARASHI GUIDE',
    title: '【富山・氷見＆雨晴海岸】富山湾越し立山連峰・女岩パノラマ＆ひみ寒ぶり宿 完全ガイド',
    metaDesc: '海越しの3000m級立山連峰パノラマ・富山氷見＆雨晴海岸エリア完全特化！万葉集に詠まれた「雨晴海岸・女岩」、氷見温泉郷の海辺露天風呂、ブランド魚「ひみ寒ぶり・白えび・富山湾鮨」、氷見うどん宿を徹底解説。',
    heroDesc: '標高3,000mの白い立山連峰が海の上にそびえ立つ奇跡の絶景「富山・雨晴海岸＆氷見」。富山湾の定置網から揚がる最高峰「ひみ寒ぶり」。美肌の塩化物泉・氷見温泉郷に浸かりながら、富山湾の海の幸と雄大な山並みに心を奪われる旅。',
    categoryKey: 'toyama-himi-amaharashi-tateyama-stay',
    areaGuides: [
      {
        key: 'amaharashi_tateyama_view_stay',
        title: '1. 雨晴海岸〜女岩・義経岩（海越しに3000m級の立山連峰を仰ぐ世界屈指の絶景）',
        timing: '通年（特に11月〜3月の冬期は雪を被った立山連峰が最も鮮明に見える）',
        desc: '源義経が奥州へ落ち延びる際に雨宿りをした伝説が残る「雨晴海岸（あまはらしかいがん）」。富山湾に浮かぶ「女岩」と、海越しに雪化粧した立山連峰が連なる世界的にも稀有な風景。「道の駅雨晴」の展望デッキとJR氷見線。',
        spots: '雨晴海岸（女岩・義経岩）、道の駅雨晴（展望デッキ・カフェ）、JR氷見線（キハ40系・絶景車窓）',
        access: 'JR氷見線「雨晴駅」下車徒歩約5分。能越道「高岡北IC」より約15分。',
        tip: '冬の早朝、氷点下の寒さの中で海面から水蒸気が立ち上る「気嵐（けあらし）」と立山連峰の朝焼けが重なる光景は圧巻の一言です。'
      },
      {
        key: 'himi_seaside_onsen_luxury',
        title: '2. 氷見温泉郷〜ひみ番屋街・氷見漁港（ナトリウム塩化物泉と天然の生簀）',
        timing: '通年（海のミネラルを豊富に含むあたたまりの湯）',
        desc: '富山湾沿いに宿が連なる「氷見温泉郷」。化石海水と呼ばれる塩分濃度の高い温泉は、湯上がり後もポカポカが持続する美肌・保温の名湯。氷見漁港直送の朝獲れ魚介が並ぶ「ひみ番屋街」での買い物や足湯。',
        spots: 'ひみ番屋街（氷見温泉郷総湯・鮮魚市場）、氷見漁港（朝セリ見学・魚市場食堂）、氷見市海浜植物園',
        access: 'JR氷見線「氷見駅」下車。加越能バス運行。',
        tip: '「氷見漁港 魚市場食堂」では、朝獲れたばかりの地魚が器からこぼれる「氷見浜丼（あら汁付き）」が早朝から楽しめます。'
      },
      {
        key: 'himi_kanburi_sushi_gourmet',
        title: '3. 日本一の美味「ひみ寒ぶり」＆富山湾鮨（寒ブリ宣言が出される冬の王者）',
        timing: '冬期限定：11月下旬〜2月（「ひみ寒ぶり宣言」期間）',
        desc: '富山湾の定置網で獲れ、厳しい重量・品質基準をクリアした「ひみ寒ぶり」。全身にきめ細かく脂が乗り、とろけるような「ブリ刺し」「ブリしゃぶ」「ブリ大根」。「富山湾の宝石」白えび、手延べ「氷見うどん」、ブランド「氷見牛」。',
        spots: 'ひみ寒ぶり料理指定旅館、富山湾鮨提供店、高澤酒造場（曙）',
        access: '氷見市内・氷見温泉郷。',
        tip: '「富山湾鮨」は、富山湾の朝獲れ地魚10貫と特製汁物がセットになった富山県の公式ブランド寿司で、職人の技を堪能できます。'
      }
    ]
  },
  {
    slug: 'kyoto-uji-fushimi-sake-matcha-stay',
    badge: 'UJI & FUSHIMI GUIDE',
    title: '【京都・宇治＆伏見酒蔵】世界遺産平等院・宇治抹茶＆伏見十石舟・酒蔵宿 完全ガイド',
    metaDesc: '千年の歴史と名水が醸す伝統文化・京都宇治＆伏見エリア完全特化！十円玉でおなじみ世界遺産「平等院鳳凰堂」、宇治川の鵜飼、本場宇治抹茶パフェ、伏見酒蔵の白壁土蔵・十石舟めぐり、京会席＆利き酒宿を徹底解説。',
    heroDesc: '十円硬貨に描かれた極楽浄土の宮殿「平等院鳳凰堂」と、日本最高峰の茶文化が息づく「宇治」。名水・伏水が湧き出る白壁土蔵の酒蔵の街「伏見」。十石舟に揺られながら巡る水郷と、挽きたて宇治抹茶・伏見の銘酒を味わう雅な旅。',
    categoryKey: 'kyoto-uji-fushimi-sake-matcha-stay',
    areaGuides: [
      {
        key: 'uji_byodoin_greentea_stay',
        title: '1. 平等院鳳凰堂〜宇治川・宇治橋通（平安貴族が憧れた極楽浄土と茶舗散歩）',
        timing: '通年（春の藤棚ライトアップ・秋の宇治川紅葉・新茶の5月）',
        desc: '永承7年（1052年）関白藤原頼通が建立した世界遺産「平等院鳳凰堂」。阿字池に映る優美な姿。宇治川の中州「塔の島」や「宇治上神社（世界最古の神社建築）」。創業数百年の老舗茶舗が立ち並ぶ宇治橋通り商店街。',
        spots: '世界遺産 平等院（鳳凰堂・鳳翔館ミュージアム）、宇治上神社、宇治神社、宇治川さわらびの道',
        access: 'JR奈良線「宇治駅」または京阪宇治線「宇治駅」下車徒歩約10分。',
        tip: '平等院境内にある「鳳翔館」では、本物の国宝・雲中供養菩薩像26体や鳳凰一対をガラス越し至近距離で鑑賞できます。'
      },
      {
        key: 'fushimi_sake_brewery_stay',
        title: '2. 伏見酒蔵通り〜十石舟・寺田屋（白壁土蔵が連なる水郷と幕末浪漫）',
        timing: '通年（春の十石舟桜のトンネル・新酒の冬蔵開き）',
        desc: '名水「伏水」に恵まれ、日本有数の酒どころとして栄えた「伏見」。濠川沿いに連なる月桂冠大倉記念館や黄桜カッパカントリーの白壁土蔵。柳並木をくぐる観光船「十石舟・三十石船」。坂本龍馬遭難の地「寺田屋」。',
        spots: '月桂冠大倉記念館（酒造り見学・利き酒処）、伏見十石舟、寺田屋、黄桜カッパカントリー、伏見大手筋商店街',
        access: '京阪本線「中書島駅」または「伏見桃山駅」下車徒歩約5分。',
        tip: '「月桂冠大倉記念館」では、見学の最後に純米大吟醸やプラムワインなど3種類のプレミアム銘酒の試飲が楽しめます。'
      },
      {
        key: 'kyoto_kaiseki_matcha_sake_stay',
        title: '3. 本場「宇治抹茶」スイーツ＆伏見銘酒（挽きたて濃茶パフェと京懐石マリアージュ）',
        timing: '通年（5月の新茶・秋の抹茶スイーツ巡り）',
        desc: '石臼で丁寧に挽かれた極上宇治抹茶を使った「抹茶パフェ」「生茶ゼリイ」「抹茶蕎麦」。伏見の銘水で仕込まれた「純米大吟醸」と、京都の旬の素材（京野菜・湯葉・鴨肉）を盛り込んだ伝統の京懐石料理。',
        spots: '中村藤吉本店（生茶ゼリイ）、伊藤久右衛門（抹茶パフェ）、辻利兵衛本店、伏見酒蔵小路（十八蔵利き酒セット）',
        access: '宇治・伏見エリア。',
        tip: '「伏見酒蔵小路」では、伏見の18の蔵元の銘酒を一堂に集めた「十八蔵利き酒セット（粋酔セット）」が大人気です。'
      }
    ]
  },
  {
    slug: 'hiroshima-onomichi-shimanami-mukoujima-stay',
    badge: 'ONOMICHI & SHIMANAMI GUIDE',
    title: '【広島・尾道＆しまなみ海道向島】千光寺坂の街・猫の細道＆尾道ラーメン・サイクリング宿 完全ガイド',
    metaDesc: '瀬戸内のノスタルジーとサイクリストの聖地・広島尾道＆しまなみ海道向島エリア完全特化！千光寺公園ロープウェイ、猫の細道、尾道水道の夕陽、しまなみ海道サイクリング、名物「尾道ラーメン・瀬戸内レモン・鯛めし宿」を徹底解説。',
    heroDesc: '尾道水道を行き交う渡船と、坂道に広がるノスタルジックな石段の街「尾道」。千光寺から見下ろす瀬戸内海の多島美。海の上を走るサイクリストの聖地「しまなみ海道」。レトロな古民家カフェと背脂醤油の尾道ラーメンを味わう旅。',
    categoryKey: 'hiroshima-onomichi-shimanami-mukoujima-stay',
    areaGuides: [
      {
        key: 'onomichi_senkoji_slope_stay',
        title: '1. 千光寺公園〜坂の街・猫の細道（大宝山から見下ろす尾道水道パノラマ）',
        timing: '通年（春の千光寺公園桜百選・秋の文学散歩）',
        desc: '弘法大師開基と伝わる名刹「千光寺」。朱塗りの本堂や巨岩「玉の岩」。千光寺山ロープウェイで登る山頂展望台「PEAK」からの尾道水道と島々の絶景。福石猫が並ぶノスタルジックな「猫の細道」と古民家カフェ巡り。',
        spots: '千光寺公園（頂上展望台PEAK・千光寺山ロープウェイ）、猫の細道（初代福石猫）、文学のこみち、ONOMICHI U2',
        access: 'JR山陽本線「尾道駅」下車。新尾道駅（山陽新幹線）より路線バスで約15分。',
        tip: '「千光寺山頂展望台 PEAK」はウッドデッキのスロープが整備されており、尾道水道と対岸の向島が一望できる最高のフォトスポットです。'
      },
      {
        key: 'shimanami_cycling_mukoujima_stay',
        title: '2. しまなみ海道〜向島・因島（海の上を爽快に走るサイクリストの聖地）',
        timing: '通年（春〜秋の爽快シーサイドサイクリング）',
        desc: '尾道から愛媛・今治まで6つの島と橋を渡る全長約70kmの「しまなみ海道」。尾道駅前から渡船で約5分の「向島（むかいしま）」からスタート。海沿いのレモン畑や因島大橋を眺めながら走る爽快なサイクリングロード。',
        spots: '尾道渡船、向島（立花海岸・後藤鉱泉所マルゴサイダー）、因島大橋（自転車歩行者道）、耕三寺（未来心の丘・白大理石庭園）',
        access: '尾道駅前港より渡船で向島へ。',
        tip: '尾道駅前の「ONOMICHI U2」では、GIANT製ロードバイクのレンタルが可能で、客室内に自転車を持ち込めるサイクリスト専用ホテルが併設されています。'
      },
      {
        key: 'onomichi_ramen_setouchi_fish_stay',
        title: '3. 本場「尾道ラーメン」＆瀬戸内レモン（鶏ガラ煮干し出汁と大粒背脂の旨味）',
        timing: '通年（コクがあるのに後味スッキリな伝統ラーメン）',
        desc: '瀬戸内の小魚（煮干し・イリコ）と鶏ガラをベースにした醤油スープに、ミンチ状の大粒豚背脂が浮く「尾道ラーメン」。平打ち熟成麺のコシ。瀬戸内海の旬の地魚（オコゼ・アコウ・タイ）のお造り、瀬戸内レモンポーク。',
        spots: '尾道ラーメン老舗店（朱華園跡・つたふじ）、尾道本通り商店街、尾道プリン（おやつとやまねこ）',
        access: '尾道市街・海岸通り。',
        tip: '尾道駅近くの「おやつとやまねこ」の「尾道プリン」は、特製レモンシロップをかけて食べる絶品で、行列ができる大人気スイーツです。'
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

for (const cfg of microWave16Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated micro tourist hub page: /${cfg.slug}`);
}
