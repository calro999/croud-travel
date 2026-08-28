const fs = require('fs');
const path = require('path');

const wave3Configs = [
  {
    slug: 'winter-starry-sky-astrophotography',
    badge: 'STARRY SKY RETREAT',
    title: '【冬の天体観測】満天の星空＆天の川！絶景星空ホテル 完全ガイド',
    metaDesc: '空気が澄み渡る冬の夜空！長野・阿智村（日本一の星空ナイトツアー）、八ヶ岳・野辺山高原、沖縄・石垣島西表島（星空保護区）、和歌山・串本潮岬など、肉眼で満天の星空や天の川を望む人気ホテル＆温泉宿を徹底解説。',
    heroDesc: '人工の光が届かない大自然の中、見上げれば息をのむ満天の星空と流れ星。星空テラス、天体望遠鏡ドーム、星空案内人によるナイトツアー、露天風呂から星を仰ぐ極上の天体観測ステイをご紹介します。',
    categoryKey: 'winter-starry-sky-astrophotography',
    areaGuides: [
      {
        key: 'achi_stars',
        title: '1. 長野・阿智村＆昼神温泉（環境省認定！日本一の星空ナイトツアー）',
        timing: 'おすすめ時期：通年（冬はヘブンスそのはらウインターナイトツアー開催）',
        desc: '標高1,400mの山頂へゴンドラで登り、合図とともに全照明が一斉に消灯する「天空の楽園ナイトツアー」。手が届きそうな無数の星々に包まれ、下山後は美肌効果抜群の昼神温泉で温まる感動の旅。',
        spots: '富士見台高原ヘブンスそのはら（天空の楽園）、昼神温泉郷、阿智神社、天龍峡',
        access: '中央自動車道飯田山本ICより車で約10分。JR飯田駅より路線バス・直行タクシーで約30分。',
        tip: 'ナイトツアー入場引換券がセットになった昼神温泉の宿泊プランが便利。山頂は氷点下になるため極厚の防寒着やブランケットを用意しましょう。'
      },
      {
        key: 'nobeyama_stars',
        title: '2. 山梨・長野・八ヶ岳＆野辺山高原（標高1,300m！日本三選星名所の高原リゾート）',
        timing: 'おすすめ時期：10月〜3月（冬の乾燥した夜空が最もクリア）',
        desc: '国立天文台の電波望遠鏡が設置されるほど星空観測に適した野辺山高原。八ヶ岳の稜線の上に広がる天の川や冬の大三角を、ホテルの星空テラスや屋上展望台からリクライニングチェアでゆったり鑑賞できます。',
        spots: '野辺山宇宙電波観測所、清里テラス（サンメドウズ清里）、萌木の村、八ヶ岳倶楽部',
        access: 'JR小海線「野辺山駅」「清里駅」下車。中央自動車道長坂IC・須玉ICより車約25分。',
        tip: '星空案内人（スターソムリエ）が常駐するリゾートホテルに泊まると、星座の解説や本格望遠鏡での惑星観察を楽しめます。'
      },
      {
        key: 'ishigaki_stars',
        title: '3. 沖縄・石垣島＆西表島（国内初の国際星空保護区！南十字星と天の川）',
        timing: 'おすすめ時期：通年（南十字星は12月下旬〜6月中旬）',
        desc: '全天88星座中84星座を観測できる奇跡の島・八重山諸島。大気が安定しジェット気流の影響を受けないため、星が瞬かず宝石のように輝きます。プライベートビーチやプールサイドで星空浴を。',
        spots: '石垣島天文台、川平湾、平久保崎灯台、星野リゾート西表島ホテル周辺ジャングル',
        access: '羽田・関空・福岡等から石垣空港直行便。石垣港離島ターミナルから各島へ高速船。',
        tip: '街明かりの少ない北部エリア（川平・平久保）のホテルに宿泊すると、客室のテラスから天の川を肉眼ではっきり確認できます。'
      },
      {
        key: 'kushimoto_stars',
        title: '4. 和歌山・串本＆潮岬（本州最南端！水平線から昇る星空と太平洋パノラマ）',
        timing: 'おすすめ時期：11月〜3月',
        desc: '視界を遮るもののない太平洋の水平線。本州最南端・潮岬の断崖に建つリゾートホテルでは、海から昇るオリオン座や冬の天の川を展望露天風呂や屋上からパノラマビューで堪能できます。',
        spots: '潮岬灯台・望楼の芝、橋杭岩（奇岩の星空リフレクション）、串本海中公園',
        access: 'JR特急くろしおで新大阪駅から串本駅まで約3時間15分。南紀白浜空港より車約60分。',
        tip: '国の名勝「橋杭岩」と星空の組み合わせは天体写真家に大人気。宿でレンタカーを手配して夜のフォトドライブがおすすめです。'
      }
    ]
  },
  {
    slug: 'autumn-winter-glamping-tent',
    badge: 'LUXURY GLAMPING',
    title: '【秋・冬キャンプ】薪ストーブ＆焚き火・天然温泉グランピング 完全ガイド',
    metaDesc: '冬こそグランピングのベストシーズン！富士山ビューの大型ドームテント、薪ストーブ、プライベート焚き火、天然温泉や貸切サウナを完備した全国の極上グランピングリゾートを徹底解説。',
    heroDesc: 'パチパチと薪が爆ぜる焚き火の温もり、冷えた体に染み渡る天然温泉、暖房完備の快適な大型ドームテント。手ぶらで豪華なBBQやアウトドア体験を満喫できる秋・冬の贅沢リゾートステイ。',
    categoryKey: 'autumn-winter-glamping-tent',
    areaGuides: [
      {
        key: 'fuji_glamping',
        title: '1. 山梨・富士五湖＆河口湖（富士山を望む薪ストーブ付きドームテント）',
        timing: '通年（秋の紅葉・冬の雪景色と焚き火が最高）',
        desc: 'テントの窓一面に広がる富士山の絶景。全室に冷暖房・薪ストーブや専用焚き火スペース、プライベート露天風呂を完備したグランピング施設が多数。甲州ワインビーフBBQを楽しめます。',
        spots: '河口湖畔、富士急ハイランド、新倉山浅間公園、ふじてんスノーリゾート',
        access: '中央自動車道河口湖ICより約10〜15分。新宿から直通バスで河口湖駅まで約100分。',
        tip: '夜は焚き火でマシュマロ焼き（スモア）やホットワインを。朝は澄んだ空気の中で富士山から昇る朝日を眺める贅沢を。'
      },
      {
        key: 'chiba_glamping',
        title: '2. 千葉・木更津＆いすみ（都心から60分！バレルサウナ＆天然温泉グランピング）',
        timing: '通年（冬も温暖で過ごしやすい南房総）',
        desc: '東京湾アクアラインで都心から1時間の好アクセス。セルフロウリュができるプライベートバレルサウナや、自家源泉の黒湯天然温泉を備えたドームテントで、手軽に極上のアウトドアリトリートを体験。',
        spots: '三井アウトレットパーク木更津、マザー牧場、いすみ鉄道、濃溝の滝',
        access: 'アクアライン経由で木更津・袖ケ浦ICより車約10〜20分。JR内房線木更津駅接続。',
        tip: 'かずさ牛ステーキや房総の伊勢海老・アワビなど、豪華食材が揃った手ぶらBBQディナーが人気です。'
      },
      {
        key: 'nasu_glamping',
        title: '3. 栃木・那須高原（北欧風ヴィラ＆天然温泉付きラグジュアリーステイ）',
        timing: '通年（秋の紅葉狩り・冬の雪見焚き火）',
        desc: '御用邸のある那須高原の森林リゾート。北欧テイストの広々としたドームテントやコテージで、那須名物白根牛ステーキや地元産チーズフォンデュを味わい、美肌の那須温泉で温まります。',
        spots: '那須ハイランドパーク、那須どうぶつ王国、那須サファリパーク、殺生石・鹿の湯',
        access: '東北新幹線「那須塩原駅」よりレンタカー・送迎バスで約30分。東北道那須ICより約15分。',
        tip: 'ペット（愛犬）同伴可能なプライベートドッグラン付きテントも充実しており、ファミリーや愛犬家に最適です。'
      },
      {
        key: 'mie_glamping',
        title: '4. 三重・伊勢志摩（英虞湾シーサイド＆松阪牛・伊勢海老海鮮BBQ）',
        timing: '通年（冬の伊勢海老・牡蠣シーズンが最高峰）',
        desc: 'リアス海岸・英虞湾の静かな波音を聞きながら過ごすシーサイドグランピング。冬に旬を迎える伊勢海老や的矢牡蠣、松阪牛を炭火BBQで豪快に味わい、星空を眺めながらの貸切風呂を満喫できます。',
        spots: '横山展望台（英虞湾パノラマ）、志摩スペイン村、伊勢神宮（車で約35分）、鳥羽水族館',
        access: '近鉄特急で賢島駅・鵜方駅まで。伊勢自動車道伊勢西ICより伊勢道路経由約40分。',
        tip: '伊勢神宮参拝とお伊勢参りグルメを組み合わせたドライブ旅行の宿泊拠点として抜群の人気を誇ります。'
      }
    ]
  },
  {
    slug: 'autumn-winter-hot-spring-cure',
    badge: 'TRADITIONAL TOJI SPA',
    title: '【本格湯治場】源泉かけ流し＆効能抜群の名湯秘湯旅館 完全ガイド',
    metaDesc: '温泉の真髄を味わう！秋田・玉川温泉（強酸性ラジウム湯治）、青森・酸ヶ湯温泉（ヒバ千人風呂）、栃木・那須湯本（鹿の湯）、長野・野沢温泉（13の外湯めぐり）など、歴史ある本物の名湯宿を徹底解説。',
    heroDesc: '何百年も人々の体を癒やし続けてきた奇跡の湯治場（とうじば）。加水・加温一切なしの圧倒的な源泉力、硫黄香る白濁湯、歴史ある木造大浴場で、日頃の疲れを根底から解きほぐす本格温泉ステイ。',
    categoryKey: 'autumn-winter-hot-spring-cure',
    areaGuides: [
      {
        key: 'tamagawa_onsen',
        title: '1. 秋田・八幡平玉川温泉（pH1.2！日本一の強酸性と天然岩盤浴の奇跡）',
        timing: '通年（湯治・保養）',
        desc: '塩酸を主成分とする日本一の強酸性泉とラジウム放射線を含む奇跡の名湯。天然の地熱を利用した屋外岩盤浴場には全国から湯治客が集まります。体の免疫力を高める本格的な健康・保養ステイに最適。',
        spots: '玉川温泉大墳（源泉湧出地）、八幡平アスピーテライン、田沢湖、抱返り渓谷',
        access: '秋田新幹線「田沢湖駅」より路線バス「急行玉川温泉行き」で約80分。',
        tip: '強酸性のため入浴は源泉50%浴槽から徐々に慣らすのがルール。湯治専門の看護師や相談窓口があり長期滞在者も安心です。'
      },
      {
        key: 'sukayu_onsen',
        title: '2. 青森・八甲田山酸ヶ湯温泉（160畳の総ヒバ造り大浴場「ヒバ千人風呂」）',
        timing: '通年（冬は白銀の豪雪と混浴名湯）',
        desc: '開湯300年、国民保養温泉地第1号に指定された八甲田の秘湯。柱が1本もない160畳の巨大な木造浴室「ヒバ千人風呂」には、熱湯・四分六分の湯・鹿の湯滝など複数の源泉が自噴しています。',
        spots: '八甲田ロープウェー（樹氷鑑賞）、奥入瀬渓流（冬の氷瀑）、城ヶ倉大橋',
        access: 'JR青森駅・新青森駅よりJRバス「みずうみ号」で約70分（酸ヶ湯温泉前下車）。',
        tip: '名物の千人風呂は混浴ですが女性専用時間（朝・夜）が設けられており、女性専用の小浴場「玉の湯」も完備されています。'
      },
      {
        key: 'nasu_shikano_onsen',
        title: '3. 栃木・那須湯本温泉（開湯1300年！白濁硫黄泉の名名湯「鹿の湯」）',
        timing: '通年（秋の紅葉・冬の雪景色）',
        desc: '傷ついた鹿が傷を癒やしたことから名付けられた那須最古の源泉「鹿の湯」。41度から48度まで区切られた木造浴槽で「短時間入浴（かぶり湯）」を行う伝統の入浴法で、神経痛や冷え性に絶大な効能を誇ります。',
        spots: '元湯 鹿の湯、殺生石、那須温泉神社、殺生石木道、那須高原展望台',
        access: '東北新幹線「那須塩原駅」より東野バスで約50分（那須湯本温泉下車）。',
        tip: '那須湯本温泉街の民宿や旅館に宿泊すると、鹿の湯と同じ極上の白濁硫黄泉を内湯で24時間楽しむことができます。'
      },
      {
        key: 'nagano_nozawa_onsen',
        title: '4. 長野・信州野沢温泉（村人が守る13の外湯めぐりと湧き出る麻釜）',
        timing: '通年（冬はスキー＆外湯めぐりが大人気）',
        desc: '天然温泉100%かけ流しの共同浴場（外湯）が村内に13箇所点在する野沢温泉。名物「大湯」をはじめとする歴史ある湯屋を巡り、90度以上の源泉「麻釜（おがま）」で作る温泉卵や名物の野沢菜漬けを堪能できます。',
        spots: '野沢温泉13外湯（大湯・麻釜の湯等）、麻釜熱泉湧出地、野沢温泉スキー場、岡本太郎記念碑',
        access: '北陸新幹線「飯山駅」より直行バス「野沢温泉ライナー」で約25分。',
        tip: '外湯は地元「湯仲間」の好意で無料開放（寸志箱あり）されています。マナーを守って清掃協力金を納めて入浴しましょう。'
      }
    ]
  },
  {
    slug: 'autumn-art-museum-retreat',
    badge: 'ART & MUSEUM RETREAT',
    title: '【芸術の秋】名作アート鑑賞＆美術館リゾートホテル 完全ガイド',
    metaDesc: '感性を刺激する極上ステイ！香川・直島（ベネッセハウス）、神奈川・箱根（ポーラ美術館＆彫刻の森）、徳島・鳴門（大塚国際美術館）、石川・金沢（21世紀美術館）など、美術館に隣接・内包する人気アートホテルを徹底解説。',
    heroDesc: '名画や現代アートの世界に一日中浸り、夜は静かにアートブックを開く贅沢。美しい建築、庭園、美食ディナーと温泉を兼ね備えた、知的好奇心を満たす大人の文化リゾートへ。',
    categoryKey: 'autumn-art-museum-retreat',
    areaGuides: [
      {
        key: 'naoshima_art',
        title: '1. 香川・瀬戸内直島（美術館とホテルが一体化した現代アートの聖地）',
        timing: '通年（瀬戸内海の穏やかな気候）',
        desc: '安藤忠雄設計の「ベネッセハウス」をはじめ、草間彌生の「赤かぼちゃ・黄かぼちゃ」、家プロジェクトなど島全体が現代アートの宝庫。夜間も宿泊者限定で美術館を鑑賞できる特別な滞在が叶います。',
        spots: '地中美術館、ベネッセハウス ミュージアム、草間彌生「黄かぼちゃ」、家プロジェクト（本村地区）、直島銭湯「I♥湯」',
        access: '岡山・宇野港よりフェリーで約20分、高松港より約50分（宮浦港着）。',
        tip: '地中美術館は完全日時指定予約制のため、宿泊予約と同時にチケットを確保するのが鉄則です。島内はレンタサイクル移動が快適。'
      },
      {
        key: 'hakone_art',
        title: '2. 神奈川・箱根仙石原＆強羅（名画モネと大自然彫刻を巡る森の美術館ホテル）',
        timing: '通年（秋のススキ草原と紅葉アート散策）',
        desc: 'モネの「睡蓮」を所蔵するポーラ美術館や、箱根ガラスの森美術館、彫刻の森美術館が集中する仙石原・強羅。森に溶け込むデザイナーズホテルや客室露天風呂付き宿で、アートと名湯を堪能できます。',
        spots: 'ポーラ美術館、彫刻の森美術館、箱根ガラスの森美術館、仙石原すすき草原、箱根ラリック美術館',
        access: '新宿駅から小田急ロマンスカーで箱根湯本まで85分、箱根登山バスで仙石原方面へ接続。',
        tip: 'ポーラ美術館の「森の遊歩道」散策と館内レストランでの本格フレンチランチが人気コースです。'
      },
      {
        key: 'otsuka_art',
        title: '3. 徳島・鳴門（世界26カ国の名画1,000余点を原寸大再現！大塚国際美術館）',
        timing: '通年（鳴門海峡の渦潮鑑賞とセット）',
        desc: 'システィーナ礼拝堂天井画やモネの大睡蓮、最後の晩餐など西洋名画を陶板で原寸大再現した日本最大級の美術館。鳴門海峡のオーシャンビュー温泉リゾートに宿泊し、鳴門鯛フレンチや温泉を満喫。',
        spots: '大塚国際美術館（鑑賞ルート約4km）、鳴門の渦潮（うずしおクルーズ）、鳴門公園千畳敷展望台',
        access: '徳島空港より路線バス約30分。神戸・三宮から高速バスで「高速鳴門」まで約80分。',
        tip: '美術館は広大なため鑑賞に最低3〜4時間必要。ホテルで入場券付きプランを予約するとスムーズに入館できます。'
      },
      {
        key: 'kanazawa_art',
        title: '4. 石川・金沢（21世紀美術館と兼六園！伝統工芸と現代アートが交差する街）',
        timing: '通年（秋の兼六園雪吊り・冬の味覚）',
        desc: 'レアンドロ・エルリッヒの「スイミング・プール」で有名な金沢21世紀美術館。兼六園や国立工芸館へも徒歩圏内。加賀友禅や九谷焼を館内に配したデザインホテルで金沢の美意識を五感で体感できます。',
        spots: '金沢21世紀美術館、兼六園、国立工芸館、石川県立美術館（ル ミュゼ ドゥ アッシュ カフェ）、ひがし茶屋街',
        access: '北陸新幹線「金沢駅」より城下まち金沢周遊バスで約10〜15分（広坂・21世紀美術館下車）。',
        tip: '21世紀美術館の屋外展示作品（カラー・アクティビティ・ハウスなど）は夜間ライトアップされ幻想的です。'
      }
    ]
  },
  {
    slug: 'winter-bayside-factory-nightview',
    badge: 'BAYSIDE NIGHTSCAPE',
    title: '【冬の夜景】工場夜景クルーズ＆煌めくベイサイドホテル 完全ガイド',
    metaDesc: '空気が澄む冬こそ夜景の絶頂期！神奈川・川崎臨海部、三重・四日市コンビナート、横浜みなとみらい、神戸ベイエリアなど、SF映画のような工場夜景クルーズやパノラマ夜景を客室から望む人気ホテルを徹底解説。',
    heroDesc: '金属のパイプラインや蒸留塔が放つ無数の光、立ち上る白いスチーム。冬の澄み切った夜空に浮かび上がる近未来的な工場夜景と、海越しに望む都市の摩天楼。感動のベイサイドナイトステイへ。',
    categoryKey: 'winter-bayside-factory-nightview',
    areaGuides: [
      {
        key: 'kawasaki_nightview',
        title: '1. 神奈川・川崎臨海部（SFの要塞！工場夜景屋形船クルーズと羽田ベイビュー）',
        timing: '通年（特に秋〜冬の夜間クルーズが最高）',
        desc: '日本五大工場夜景の代表格・川崎コンビナート（扇町・浮島・千鳥町）。水上から迫力満点のプラントを見上げるクルーズ船ツアーが人気。多摩川対岸の羽田空港を望むリバーサイドホテルが便利です。',
        spots: '川崎工場夜景クルーズ、千鳥町ヤード前（定番フォトスポット）、東扇島東公園、羽田エアポートガーデン',
        access: 'JR川崎駅・京急川崎駅より路線バス・タクシー。羽田空港から車で約10分。',
        tip: '工場夜景屋形船クルーズ（特定日運行）がセットになったホテル宿泊プランを利用すると予約が確実です。'
      },
      {
        key: 'yokkaichi_nightview',
        title: '2. 三重・四日市コンビナート（海と煙突が織りなす大迫力パノラマ工場夜景）',
        timing: '通年（うみてらす14からの展望）',
        desc: '四日市港ポートビル展望展示室「うみてらす14」から望む、360度の大パノラマ工場夜景。四日市コンビナートクルーズ船や大正橋周辺の撮影スポットを巡り、四日市名物「とんてき」を味わう滞在。',
        spots: '四日市港ポートビル（うみてらす14）、四日市コンビナートクルーズ、霞ヶ浦緑地公園、大正橋',
        access: '近鉄四日市駅・JR四日市駅周辺。名古屋駅から近鉄特急で約30分。東名阪道四日市IC。',
        tip: 'うみてらす14（地上90m）の土日祝夜間開館に合わせて訪れると、三日月の港と光り輝くコンビナートが一望できます。'
      },
      {
        key: 'yokohama_minatomirai',
        title: '3. 神奈川・横浜みなとみらい（大観覧車コスモクロックとベイブリッジ夜景）',
        timing: '通年（冬のイルミネーションとクリスマス）',
        desc: '横浜ランドマークタワー、大観覧車、赤レンガ倉庫が織りなす日本屈指の都市夜景。客室バルコニーから海と夜景を一望できるインターコンチネンタルやベイホテル東急で極上のアニバーサリーを。',
        spots: '横浜ランドマークタワー（スカイガーデン）、横浜赤レンガ倉庫、大さん橋国際客船ターミナル、山下公園',
        access: 'みなとみらい線「みなとみらい駅」「馬車道駅」直結・徒歩すぐ。羽田空港からリムジンバス約30分。',
        tip: '海側客室（ベイビュー）をリクエストすると、大観覧車のイルミネーション演出を部屋にいながら独占できます。'
      },
      {
        key: 'kobe_bayside',
        title: '4. 兵庫・神戸ハーバーランド＆メリケンパーク（1000万ドルの夜景リゾート）',
        timing: '通年（冬の神戸ルミナリエ・クリスマス夜景）',
        desc: '神戸ポートタワーや海洋博物館が美しくライトアップされるメリケンパーク。全室テラス付きのオーシャンビューホテルに泊まり、神戸牛ディナーやナイトクルーズ船「ルミナス神戸2」を満喫。',
        spots: '神戸ポートタワー、神戸ハーバーランドumie（モザイク観覧車）、メリケンパーク、旧居留地',
        access: 'JR・阪神「元町駅」「神戸駅」より徒歩約10〜15分。神戸空港からポートライナーで約20分。',
        tip: 'モザイク前のウッドデッキからの夜景散策や、海を望むホテルテラスでのモーニングビュッフェが至福です。'
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

for (const cfg of wave3Configs) {
  const dir = path.join(__dirname, 'src', 'app', cfg.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageTsx(cfg), 'utf8');
  console.log(`Generated seasonal hub page: /${cfg.slug}`);
}
