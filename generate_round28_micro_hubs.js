const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
const allHotels = JSON.parse(fs.readFileSync(p, 'utf8'));

const hubs = [
  {
    slug: 'hokkaido-toya-noboribetsu-jigokudani-stay',
    tag: 'TOYA & NOBORIBETSU GUIDE',
    title: '【北海道・洞爺湖＆登別温泉】登別地獄谷・洞爺湖花火＆有珠山ジオパーク宿 完全ガイド',
    metaTitle: '【北海道・洞爺湖＆登別】地獄谷・洞爺湖花火＆絶景温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '北海道屈指の温泉天国！9種類の多彩な泉質が湧き出す「登別地獄谷」、半年間毎夜打ち上がる「洞爺湖ロングラン花火大会」、世界ジオパーク「有珠山・昭和新山」を徹底解説。レイクビュー露天風呂や老舗硫黄泉旅館を厳選。',
    lead: 'もうもうと立ち上る白煙と煮えたぎる熱湯が圧倒的な迫力を放つ「登別地獄谷」。9種類もの異なる泉質が湧き出る日本有数の名湯から、半年間にわたり毎晩夜空を彩る「洞爺湖ロングラン花火大会」の絶景レイクビューへ。大地の鼓動を肌で感じる有珠山ジオパークのダイナミズムと、極上のいで湯と北海道の美食に癒される至高のステイへご案内します。',
    guides: [
      {
        key: 'noboribetsu_jigokudani_stay',
        badge: '九種類の泉質が湧く温泉デパート',
        title: '1. 登別温泉〜地獄谷・大湯沼・倶多楽湖（白濁硫黄泉と立ち上る噴煙）',
        timing: '通年（冬の雪景色と湯けむり、夏の登別地獄まつり・鬼花火、秋の紅葉地獄谷）',
        desc: '日量1万トン、自然湧出する温泉のデパート「登別温泉」。巨大な爆裂火口跡「地獄谷」の遊歩道からは、ゴウゴウと音を立てて噴き出すガスと熱湯を間近に見学。硫黄泉、食塩泉、明ばん泉など多彩な湯を巨大な大浴場や露天風呂で湯巡り。神秘のカルデラ湖「倶多楽湖」の絶景ドライブも人気です。',
        spots: '登別地獄谷、大湯沼・天然足湯、登別クマ牧場（ロープウェイ）、登別伊達時代村、カルルス温泉',
        access: 'JR室蘭本線「登別駅」より道南バスで約15分。新千歳空港より高速バスで直行約65分、道央道「登別東IC」より約10分。',
        tip: '大湯沼川の天然足湯は、川そのものが温泉となっており、森林浴をしながら天然の温かい川に足を浸すことができる野趣あふれる人気スポットです。'
      },
      {
        key: 'toya_lake_fireworks_stay',
        badge: '毎夜開催・半年間の光の祭典',
        title: '2. 洞爺湖温泉〜ロングラン花火大会＆中島遊覧船（客室露天から眺める湖上花火）',
        timing: '4月下旬〜10月末（洞爺湖ロングラン花火大会）、冬のイルミネーションストリート',
        desc: '約4万3千年前に形成された周囲約43kmのカルデラ湖「洞爺湖」。毎年4月28日から10月31日までの半年間、毎晩20時45分から約20分間打ち上がる「洞爺湖ロングラン花火大会」は圧巻。湖上を移動しながら打ち上がるため、温泉街の湖畔遊歩道や客室、展望露天風呂の湯船に浸かりながら花火を満喫できます。',
        spots: '洞爺湖ロングラン花火大会、洞爺湖遊覧船（中島上陸）、洞爺湖畔彫刻公園、サイロ展望台、レイクヒル・ファーム（絶品ジェラート）',
        access: 'JR室蘭本線「洞爺駅」より道南バスで約20分。道央道「虻田洞爺湖IC」より約5分。札幌や新千歳空港からも車で約2時間。',
        tip: '洞爺湖の花火鑑賞船に乗船すると、湖上から真上に広がる花火の臨場感と水面に映る光の反射を特等席で楽しめます。'
      },
      {
        key: 'shikotsu_toya_nature_stay',
        badge: '世界ジオパーク・活火山の息吹',
        title: '3. 有珠山ロープウェイ＆昭和新山・支笏洞爺国立公園（大地のエネルギーを体感）',
        timing: '通年（春〜秋の爽快トレッキング、冬の銀世界と有珠山テラス）',
        desc: '20世紀に4度も噴火を繰り返した生きた火山「有珠山（うすざん）」と、畑が突如隆起して誕生した奇跡の赤茶色の溶岩ドーム「昭和新山」。有珠山ロープウェイで山頂へ登れば、洞爺湖や羊蹄山、噴火湾まで見渡す360度の大パノラマと巨大な銀沼火口原の迫力に圧倒されます。',
        spots: '有珠山ロープウェイ・有珠山テラス、昭和新山クマ牧場、金比羅火口災害遺構散策路、洞爺湖ビジターセンター・火山科学館',
        access: '洞爺湖温泉バスターミナルより昭和新山行きバスで約15分。',
        tip: '有珠山頂の「Mt.USUテラス」にはプライベート感のあるソファ席が用意されており、パノラマ絶景を眺めながら地元スイーツや珈琲を楽しめます。'
      }
    ]
  },
  {
    slug: 'chiba-kamogawa-katsuura-boso-seafood-stay',
    tag: 'KAMOGAWA & KATSUURA GUIDE',
    title: '【千葉・鴨川＆勝浦・南房総】シャチパフォーマンス・勝浦四百年朝市＆地金目鯛宿 完全ガイド',
    metaTitle: '【千葉・鴨川＆勝浦】シャチ・四百年朝市＆地金目鯛宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '大迫力のシャチパフォーマンスで大人気の「鴨川シーワールド」、天正年間から続く日本三大朝市「勝浦朝市」、ご当地グルメ勝浦タンタンメン、南房総直送の地金目鯛姿煮や伊勢海老を徹底解説。太平洋一望の温泉ホテルや海鮮宿を厳選。',
    lead: '都心から東京湾アクアラインで気軽に行ける温暖な海洋リゾート「南房総・鴨川・勝浦」。太平洋の雄大な大海原をバックに豪快な水しぶきを上げる「鴨川シーワールド」のシャチ。四百年以上の歴史を誇る「勝浦朝市」の活気と、ピリ辛が癖になる勝浦タンタンメン。そして外房の荒波で育った脂の乗った「地金目鯛」や伊勢海老・アワビの贅沢海鮮会席を堪能する房総ステイへご案内します。',
    guides: [
      {
        key: 'kamogawa_seaworld_stay',
        badge: '海の王者シャチの大迫力ジャンプ',
        title: '1. 鴨川シーワールド＆太平洋パノラマ温泉（雄大な海とイルカ・アシカの楽園）',
        timing: '通年（夏の海水浴・ウォータースプラッシュ、冬の澄んだオーシャンフロントと温泉）',
        desc: '日本でわずか2箇所しか飼育されていない海の王者「シャチ」のダイナミックなパフォーマンスで全国に知られる鴨川シーワールド。トレーナーとの息の合った水中演技や豪快なテールバッシュによる水しぶきは圧巻。鴨川温泉の太平洋を一望するインフィニティ露天風呂やオーシャンビュー客室で、波の音を子守唄に過ごせます。',
        spots: '鴨川シーワールド、鴨川松島、前原海岸（日本の渚百選）、大山千枚田（東京から一番近い棚田）、魚見塚展望台',
        access: 'JR外房線「安房鴨川駅」下車（東京駅より特急わかしおで直通約1時間50分）。アクアライン経由で車約90分。',
        tip: 'シャチパフォーマンスを前列（1〜8列目）で鑑賞する際はポンチョ着用が必須。濡れたくない方は中段以上の席を確保するのがおすすめです。'
      },
      {
        key: 'katsuura_morning_market_stay',
        badge: '天正の世から続く日本三大朝市',
        title: '2. 勝浦朝市＆ご当地B級グルメ「勝浦タンタンメン」（四百年の活気とピリ辛麺）',
        timing: '通年（毎週水曜日・元旦を除く毎朝開催、早朝6時半頃〜11時頃まで）',
        desc: '石川県の輪島、岐阜県の高山と並ぶ日本三大朝市の一つ「勝浦朝市」。天正19年（1591年）から430年以上続く伝統の市で、獲れたての地魚や干物、採れたて野菜、名物わらび餅が並びます。海女や漁師が冷えた体を温めるために生まれた醤油ベースにラー油と玉ねぎ・豚ひき肉がたっぷり入った「勝浦タンタンメン」の元祖名店巡りも必食です。',
        spots: '勝浦朝市（月の前半・後半で通りが替わる）、江ざわ（勝浦タンタンメン元祖）、鵜原理想郷、勝浦海中公園・海中展望塔',
        access: 'JR外房線「勝浦駅」より朝市会場へ徒歩約10分。市営駐車場あり。',
        tip: '勝浦朝市では地元のおばあちゃんたちとの会話を楽しみながら、買ったばかりの干物をその場で焼いて食べられる広場もあります。'
      },
      {
        key: 'boso_kinmedai_seafood_stay',
        badge: '房総沖の極上海の恵み',
        title: '3. 南房総「地金目鯛の姿煮」＆伊勢海老・アワビ踊り焼き（黒潮が育む豪華海鮮会席）',
        timing: '通年（冬〜早春の脂の乗った寒キンメ、秋の伊勢海老漁解禁、夏の天然アワビ）',
        desc: '太平洋の黒潮と親潮が交わる南房総沖は、日本屈指の好漁場。鮮やかな赤色と上品な脂の乗りを誇る「地金目鯛（外房つりきんめ）」を一匹丸ごと甘辛い秘伝の煮汁で炊き上げた「姿煮」はご飯もお酒も進む極上の逸品。さらに伊勢海老のお造りや鬼殻焼き、アワビの酒蒸しや踊り焼きなど、海沿いの宿ならではの贅を尽くした海鮮料理が堪能できます。',
        spots: '勝浦漁港、小湊鯛の浦、各海鮮割烹温泉旅館、道の駅鴨川オーシャンパーク',
        access: '勝浦・小湊・鴨川・南房総エリア各所。',
        tip: '金目鯛の姿煮の残った煮汁をご飯にかけて食べる「煮汁かけご飯」は、地元漁師直伝の最高の締めくくりです。'
      }
    ]
  },
  {
    slug: 'shizuoka-atagawa-inatori-kinmedai-hotspring-stay',
    tag: 'ATAGAWA & INATORI GUIDE',
    title: '【静岡・熱川温泉＆稲取・東伊豆】湯けむり温泉櫓・波打ち際露天＆稲取キンメ宿 完全ガイド',
    metaTitle: '【静岡・熱川＆稲取】湯けむり露天・ブランド稲取キンメ宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '街の至る所から温泉櫓の白煙が立ち上る「熱川温泉」、波打ち際の混浴絶景露天風呂、全国最高峰ブランド「稲取キンメ」の煮付け、熱川バナナワニ園、雛のつるし飾り発祥の地を徹底解説。オーシャンビュー客室や貸切温泉旅館を厳選。',
    lead: '伊豆急行線の車窓から海と温泉櫓（やぐら）の湯けむりが見えてくる東伊豆の名湯「熱川温泉」。約100度の高温泉が自噴し、波の音が間近に迫る絶景の波打ち際露天風呂。すぐ隣の港町・稲取では、日帰り一本釣りで水揚げされる極上のブランド魚「稲取キンメ」の濃厚な煮付け。伊豆大島を正面に望む相模湾パノラマと、昭和レトロな温泉情緒に浸る東伊豆ステイへご案内します。',
    guides: [
      {
        key: 'atagawa_hotspring_steam_stay',
        badge: '高温泉が自噴する温泉櫓の街',
        title: '1. 熱川温泉街〜温泉櫓・湯の華ぱぁーく＆高磯の湯（波打ち際の野天風呂）',
        timing: '通年（冬の澄み渡る伊豆大島パノラマ、春の桜、夏の熱川YOU湯ビーチ）',
        desc: '室町時代の武将・太田道灌が狩りの途中に傷を癒す猿を見て発見したと伝わる熱川温泉。泉温はほぼ100度の沸騰泉で、街中随所に木造や鉄骨の「温泉櫓」が立ち並び、真っ白な湯けむりを噴き上げる情景は温泉情緒満点。駅前の足湯「湯の華ぱぁーく」での温泉玉子作りや、波打ち際ギリギリに作られた露天風呂「高磯の湯」からの大パノラマが楽しめます。',
        spots: '熱川温泉街の温泉櫓群、熱川湯の華ぱぁーく（足湯・温泉玉子体験）、波打ち際露天風呂 高磯の湯、お湯かけ弁財天',
        access: '伊豆急行線「伊豆熱川駅」下車徒歩すぐ（東京駅より特急踊り子で直通約2時間15分）。東名厚木ICより約2時間。',
        tip: '「お湯かけ弁財天」の尊像に熱い温泉を柄杓でかけながら願い事をすると金運や良縁が叶うと言われ、銭洗いの池もあります。'
      },
      {
        key: 'inatori_kinmedai_gourmet_stay',
        badge: '日帰り一本釣りの最高峰ブランド',
        title: '2. 稲取港直送「稲取キンメ」＆雛のつるし飾り（黄金に輝く脂と伝統工芸）',
        timing: '通年（1月中旬〜3月末の「雛のつるし飾りまつり」、冬の寒キンメ最盛期）',
        desc: '金目鯛の水揚げで全国屈指の知名度を誇る稲取港。日帰りの一本釣り漁で丁寧に釣り上げられた金目鯛は傷がなく「稲取キンメ」として市場最高値を記録します。頭から尾まで艶やかに煮付けられた煮汁のコクと、ふっくらとろける身の旨味は格別。また日本三大つるし飾りの一つ「雛のつるし飾り」発祥の地として、色鮮やかな絹の飾り細工が街を彩ります。',
        spots: '稲取港（週末稲取朝市）、文化公園 雛の館、素盞嗚神社（118段の雛段飾り）、稲取細野高原（秋のススキ群生）',
        access: '伊豆急行線「伊豆稲取駅」下車。熱川駅より電車でわずか約5分。',
        tip: '素盞嗚神社の参道118段の石段にずらりと雛人形が並ぶ景観（まつり期間中）は、息をのむ美しさの春の絶景です。'
      },
      {
        key: 'izu_banana_alligator_stay',
        badge: '温泉熱を利用した動植物の楽園',
        title: '3. 熱川バナナワニ園＆相模湾一望絶景ホテル（マナティ・レッサーパンダと果実）',
        timing: '通年（天候に左右されない屋内温室ドーム、夏休みファミリー旅行）',
        desc: '熱川温泉の豊富な温泉熱を利用して運営される昭和33年開園の老舗テーマパーク「熱川バナナワニ園」。世界各国の貴重なワニ16種約140頭をはじめ、日本で唯一飼育されているアマゾンマナティー、愛らしいニシレッサーパンダ、巨大なオオオニバスや熱帯植物が迎えてくれます。園内で収穫された完熟バナナのスイーツも名物です。',
        spots: '熱川バナナワニ園（本園・分園・ワニ園）、熱川ハーブテラス、片瀬白田海岸、東伊豆風力発電所',
        access: '伊豆熱川駅より徒歩1分（本園）。分園へは無料シャトルバスが運行。',
        tip: '分園のフルーツパーラーで味わえる「完熟バナナパフェ」は、園内で温泉熱を使って育てられた甘みたっぷりのバナナが使われています。'
      }
    ]
  },
  {
    slug: 'kagoshima-sakurajima-kinko-bay-kurobuta-stay',
    tag: 'SAKURAJIMA & KINKO BAY GUIDE',
    title: '【鹿児島・桜島＆錦江湾・城山】活火山パノラマ・かごしま黒豚しゃぶ＆城山展望宿 完全ガイド',
    metaTitle: '【鹿児島・桜島＆城山】活火山パノラマ・黒豚しゃぶ＆展望温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '今なお噴煙を上げる世界的な活火山「桜島」、穏やかな錦江湾のオーシャンビュー、西郷隆盛最期の地「城山展望台」、最高峰ブランド「かごしま黒豚しゃぶしゃぶ」を徹底解説。桜島を望む展望露天風呂ホテルや名門温泉宿を厳選。',
    lead: '鹿児島市街地の目の前にそびえ立ち、青い錦江湾（鹿児島湾）の海原越しに雄大な噴煙を上げる国際的活火山「桜島」。標高107mの高台「城山展望台」から見下ろす桜島と街並みのダイナミックなパノラマ。西郷隆盛や大久保利通ら幕末維新の英傑たちが愛した薩摩の風土。そして旨味と甘みが詰まった「かごしま黒豚しゃぶしゃぶ」と芋焼酎に酔いしれる南国・鹿児島ステイへご案内します。',
    guides: [
      {
        key: 'sakurajima_volcano_view_stay',
        badge: '世界でも稀な都市近接活火山',
        title: '1. 桜島〜湯之平展望所・溶岩なぎさ遊歩道＆桜島フェリー（24時間運航の海の散歩道）',
        timing: '通年（快晴時の青い空と錦江湾、夕陽に赤く染まる夕暮れの桜島、朝焼けのシルエット）',
        desc: '周囲約55km、市街地からわずか4kmの距離に位置する生きた火山「桜島」。鹿児島港と桜島港を約15分で結ぶ「桜島フェリー」は24時間運航。一般人が立ち入れる最高地点（標高373m）の「湯之平展望所」からは、荒々しい火口の岩肌と眼下に広がる鹿児島市街地を一望。全長約3kmの溶岩なぎさ遊歩道ではゴツゴツとした大正溶岩原を散策できます。',
        spots: '湯之平展望所、有村溶岩展望所、桜島溶岩なぎさ公園（全長100mの無料足湯）、黒神埋没鳥居、桜島フェリー名物うどん',
        access: '鹿児島港フェリーターミナルより桜島フェリーで約15分（片道大人200円、車載も可能）。',
        tip: '桜島フェリー船内のうどん店「やぶ金」のさつま揚げ入りうどんは、15分の短い乗船時間中に多くの乗客がすすり込む鹿児島の隠れた名物です。'
      },
      {
        key: 'kurobuta_shabu_gourmet_stay',
        badge: '白身と称される上質な脂の甘み',
        title: '2. かごしま黒豚しゃぶしゃぶ＆黒毛和牛・地鶏刺し（特製そばつゆと芋焼酎の饗宴）',
        timing: '通年（冬のあったか黒豚しゃぶしゃぶ、鹿児島の本格芋焼酎とのペアリング）',
        desc: 'サツマイモを飼料に約8ヶ月間じっくり育てられた「かごしま黒豚」。きめ細やかな肉質と、白身と呼ばれる良質な脂身の甘みと歯切れの良さが特徴。鹿児島ではポン酢やごまだれだけでなく、鰹節の効いた特製「そばつゆ」とネギで食べるのが本場のスタイル。さらに新鮮な黒さつま鶏の鳥刺しや、きびなごの刺身など郷土料理が並びます。',
        spots: '天文館通（鹿児島一の繁華街・黒豚料理名店群）、あぢもり（黒豚しゃぶしゃぶ発祥）、華蓮、天文館むじゃき（白熊かき氷）',
        access: '鹿児島市電「天文館通」またはJR鹿児島中央駅周辺各所。',
        tip: '食後のデザートには、フルーツと練乳がたっぷりかかった天文館むじゃきの名物「白熊（しろくま）」アイスが外せません。'
      },
      {
        key: 'shiroyama_observatory_stay',
        badge: '標高108mからの天下の絶景',
        title: '3. 城山展望台＆城山ホテル鹿児島・展望温泉（桜島と錦江湾を正面に望む特等席）',
        timing: '通年（朝日に輝く桜島露天風呂、城山から望む鹿児島の夜景）',
        desc: '西南戦争の最終激戦地であり、西郷隆盛の終焉の地として知られる「城山」。その山頂展望台に隣接して建つ名門「SHIROYAMA HOTEL kagoshima（城山ホテル鹿児島）」の展望露天風呂「さつま乃湯」は、地下1000mから湧き出る美肌温泉に浸かりながら、遮るもののない桜島と錦江湾の大パノラマを正面に望む全国屈指の絶景風呂です。',
        spots: '城山展望台、城山自然遊歩道、西郷洞窟、西郷隆盛銅像、仙巌園（磯庭園・世界文化遺産）',
        access: 'JR鹿児島中央駅より車で約10分、またはカゴシマシティビュー（観光周遊バス）で城山下車。',
        tip: '早朝の「さつま乃湯」からは、桜島の背後から太陽が昇る息をのむようなご来光を湯船の中から拝むことができます。'
      }
    ]
  },
  {
    slug: 'miyazaki-takachiho-gorge-myth-power-stay',
    tag: 'TAKACHIHO & MYTH GUIDE',
    title: '【宮崎・高千穂峡＆天岩戸神社】真名井の滝貸ボート・八百万の神天安河原＆高千穂牛宿 完全ガイド',
    metaTitle: '【宮崎・高千穂峡＆天岩戸】真名井の滝・天安河原＆神話宿 完全ガイド ｜ 日本全国・旅宿クラウド',
    description: '天孫降臨の地・神話の里「高千穂」！柱状節理の峡谷に水しぶきを上げる「真名井の滝」の手漕ぎボート、天照大神がお隠れになった「天岩戸神社」と八百万の神が集まった「天安河原」、毎夜奉納される高千穂夜神楽、最高峰高千穂牛を徹底解説。',
    lead: '日本神話の舞台として古事記や日本書紀に記された神々の降臨の地「高千穂（たかちほ）」。阿蘇の火砕流が削り出だした高さ100mの柱状節理の断崖と、エメラルドグリーンの水面に流れ落ちる名瀑「真名井の滝」。天照大神が隠れた洞窟を祀る天岩戸神社、無数の祈りの積石が並ぶ神秘の「天安河原」。日本古来の信仰と神秘的なエネルギーに包まれる、九州最高峰のパワースポットステイへご案内します。',
    guides: [
      {
        key: 'takachiho_gorge_boat_stay',
        badge: '国の名勝・天然記念物の神秘峡谷',
        title: '1. 高千穂峡〜真名井の滝・貸ボート体験（マイナスイオン降り注ぐ奇跡の渓谷）',
        timing: '通年（新緑の5〜6月、夏のエメラルドグリーンと涼風、秋の峡谷紅葉（11月中旬〜下旬））',
        desc: '阿蘇山の火山活動によって噴出した火砕流が五ヶ瀬川に沿って流れ出し、急激に冷却されてできた柱状節理の懸崖「高千穂峡」。日本の滝百選に選ばれた落差約17mの「真名井（まない）の滝」を真下から見上げる手漕ぎの「貸しボート」は高千穂観光のハイライト。エメラルドグリーンの水面を進み、降り注ぐマイナスイオンと岩肌の迫力を体感できます。',
        spots: '高千穂峡（真名井の滝・槍飛・仙人の屏風岩）、高千穂峡貸しボート、高千穂神社（夫婦杉・国指定重文）、おのころ池',
        access: '延岡駅より路線バスで約90分。熊本空港より特急バスで約2時間。九州道「御船IC」より約90分。',
        tip: '貸しボートは事前インターネット予約制（高千穂町観光協会公式HP）となっており、連休や週末は早期満席となるため旅程が決まり次第の即予約が必須です。'
      },
      {
        key: 'amanoyasu_kawara_myth_stay',
        badge: '八百万の神が集った神秘の洞窟',
        title: '2. 天岩戸神社＆天安河原・高千穂夜神楽（神話の原風景と国の重要無形民俗文化財）',
        timing: '通年（毎夜20時より高千穂神社神楽殿で「高千穂神楽」奉納、11月中旬〜2月の夜神楽）',
        desc: '太陽の神・天照大神（アマテラスオオミカミ）がお隠れになった洞窟「天岩戸」をご神体とする天岩戸神社。そこから岩戸川沿いの清流を歩いて約10分の場所にある巨大な洞窟「天安河原（あまのやすかわら）」。神々が集まって策を練った場所と伝えられ、参拝者の祈りが込められた無数の「重ね石」が立ち並ぶ光景は鳥肌が立つほどの神気が漂います。',
        spots: '天岩戸神社（西本宮・東本宮・天岩戸遥拝所）、天安河原宮（仰慕窟）、高千穂神社神楽殿（観光夜神楽）、国見ヶ丘（雲海名所）',
        access: '高千穂バスセンターより路線バスで天岩戸神社まで約15分。無料駐車場完備。',
        tip: '天安河原では願い事をしながら小石を積むと願いが叶うと言われています。静かに心を込めて石を積んでみましょう。'
      },
      {
        key: 'takachiho_beef_gourmet_stay',
        badge: '内閣総理大臣賞に輝いた最高峰和牛',
        title: '3. 最高峰ブランド「高千穂牛」ステーキ＆神話の里の隠れ家宿（極上の霜降りと竹筒かっぽ酒）',
        timing: '通年（宮崎牛のルーツとも称される高千穂牛、冬の神楽酒と地鍋会席）',
        desc: '和牛のオリンピック（全国和牛能力共進会）で内閣総理大臣賞を受賞した宮崎牛の中でも、高千穂生まれ・高千穂育ちのA4・A5等級のみに許される幻のブランド「高千穂牛」。脂にしつこさがなく、赤身の芳醇な旨味が口いっぱいに広がるステーキや陶板焼きは絶品。竹の筒に地酒を入れて炭火で温めて飲む郷土の「かっぽ酒」とともに味わう夜は格別です。',
        spots: '高千穂牛レストラン和（なごみ）、高千穂温泉、離れ宿神仙、旅館深雪、高千穂がまだせ市場',
        access: '高千穂町中心部各所。',
        tip: '秋から初冬（9月中旬〜11月下旬）の早朝には、標高513mの「国見ヶ丘」から高千穂盆地を覆い尽くす幻想的な雲海を望むことができます。'
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

console.log('All 5 round 28 micro hubs successfully generated!');
