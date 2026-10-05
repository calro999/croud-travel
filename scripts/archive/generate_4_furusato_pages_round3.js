const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
const allHotels = JSON.parse(fs.readFileSync(p, 'utf8'));

const pages = [
  {
    slug: 'furusato-tax-golf-resort-hotspring-stay',
    title: '【名門ゴルフ×ふるさと納税】極上トーナメントコース＆温泉ホテル宿泊パック完全ガイド',
    description: 'プレー代や宿泊費の総額から30％が還元！静岡・川奈、長野・軽井沢、沖縄・宮古島の名門シーサイド＆高原ゴルフリゾートを厳選。高所得ゴルファー必見のふるさと納税スマート活用術。',
    heroTag: 'ふるさと納税×名門ゴルフ＆温泉リゾート',
    leadTitle: '1回のゴルフ合宿・リゾート旅行で数十万円を使うゴルファーこそ知るべき賢い税制活用術',
    leadText: '週末のゴルフ仲間とのラウンドや、夫婦でのリゾートゴルフ旅行。名門トーナメントコースでのプレー代、カート代、前泊・後泊の温泉ホテル宿泊費を合わせると、1回のトリップで1人あたり5万〜15万円、グループなら数十万円に達することも珍しくありません。高所得者層が多いゴルファーにこそ最強の味方となるのが、楽天ふるさと納税のトラベルクーポンです。自治体に寄付して獲得したクーポン（寄付額の最大30％相当）は、ゴルフ場併設の温泉リゾートホテルや提携ゴルフパックの宿泊代金にそのまま充当可能。世界のトッププロが挑んだ伊豆・川奈のフジサンケイレディスクラシック開催地、軽井沢の雄大な浅間山を望む高原コース、宮古島のエメラルドグリーンの海越えホールなど、ゴルファー垂涎の憧れリゾートをご紹介します。',
    points: [
      {
        title: 'ポイント①：高額になりがちな「ゴルフ旅行総額」をふるさと納税で一発圧縮',
        desc: '年収1,500万円で約40万円、年収2,000万円なら約50万円以上になるふるさと納税の控除上限額。宿泊とゴルフプレーがセットになったリゾートホテルプランにクーポンを適用すれば、実質自己負担2,000円で憧れの名門コース合宿が実現します。'
      },
      {
        title: 'ポイント②：ラウンド後の疲労を極上温泉とサウナで即座にリカバリー',
        desc: '18ホールを歩き抜いた後の重い筋肉疲労。ゴルフ場直結・近接の温泉リゾートなら、ホールアウト後すぐに湯量豊富な大浴場や露天風呂、サウナへ直行可能。夜はご当地のブランド牛や海の幸に舌鼓を打ちながらゴルフ談義に花を咲かせられます。'
      },
      {
        title: 'ポイント③：ベストシーズンに合わせて予約できるゆとりの3年有効期限',
        desc: '「春の爽快な新緑ゴルフ」「秋の紅葉ゴルフ」「冬の沖縄避寒ゴルフ」。季節に左右されるゴルフだからこそ、3年間の有効期間を持つクーポンは使い勝手抜群。年末に寄付枠を確保しておき、翌年のベストシーズンを狙い撃ちできます。'
      }
    ],
    sections: [
      {
        key: 'kawana_golf_resort',
        badge: '静岡県伊東市・世界100選の名門コース',
        title: '伊東市ふるさと納税で泊まる、名門・川奈ホテルと相模灘を望むシーサイドコース',
        intro: '名匠C.H.アリソンが設計し、世界のゴルフ場100選に選ばれ続ける名門「川奈ホテルゴルフコース」。富士コースや大島コースを眼下に望むクラシックなホテルでは、昭和初期からの歴史と格式が息づく洋館ステイが楽しめます。伊東市のふるさと納税トラベルクーポンを使えば、相模灘と伊豆大島を一望する天然温泉展望風呂付きホテルや、名門川奈でのラウンドを目的とした大人のゴルフ旅行を驚くほどスマートに予約できます。'
      },
      {
        key: 'karuizawa_golf_resort',
        badge: '長野県軽井沢町・高原の爽快クラシックゴルフ',
        title: '軽井沢町ふるさと納税で泊まる、浅間山を望む名門コースと高原温泉リゾート',
        intro: '標高約1,000mの爽快な冷涼気候の中、浅間山に向かってナイスショットを放つ至福の軽井沢ゴルフ。名門コースが点在し、避暑地としての洗練されたおもてなしと美食文化が融合しています。軽井沢町のふるさと納税クーポンを活用すれば、ゴルフコースに隣接するコテージやクラシックリゾートホテルにお得にステイ。早朝の澄んだ空気の中でティオフし、プレー後は信州ワインと極上フレンチに舌鼓を打つ優雅な休日が叶います。'
      },
      {
        key: 'miyakojima_golf_resort',
        badge: '沖縄県宮古島市・宮古ブルーの海越えコース',
        title: '宮古島市ふるさと納税で泊まる、エメラルドグリーンの海を望むリンクス＆高級ヴィラ',
        intro: '東洋一美しいと称される宮古ブルーの海を間近に感じながらプレーする、南国リンクスコース。海風を読みながらの海越えショートホールなど、ダイナミックなリゾートゴルフの醍醐味が凝縮されています。宮古島市のふるさと納税クーポンを使えば、ゴルフ場に隣接するプライベートプール付きスイートヴィラやラグジュアリーホテルをお得に予約可能。冬でも温暖な気候の中、最高のリゾートゴルフバカンスをご満喫ください。'
      }
    ],
    faq: [
      {
        q: 'ゴルフプレー代金もクーポンの割引対象に含まれますか？',
        a: '楽天トラベル上で販売されている「ゴルフプレー券付き宿泊プラン」や「1ラウンドプレー代込みリゾートプラン」であれば、宿泊とプレー代を合わせた総額に対してふるさと納税クーポンが適用されます。'
      },
      {
        q: '仲間との複数名予約でまとめてクーポンを使えますか？',
        a: '代表者が1つの予約として同伴者全員分の部屋をまとめて予約した場合、その予約総額に対してクーポンが適用可能です。また、メンバー各自がそれぞれの楽天アカウントでふるさと納税を行い、個別に予約してクーポンを充当することもできます。'
      },
      {
        q: 'ゴルフバッグの事前発送やレンタルクラブの手配は可能ですか？',
        a: '多くのゴルフリゾートホテルでは宅急便によるゴルフバッグの事前受け取り・保管サービスを行っています。また、最新モデルのレンタルクラブやシューズを用意しているリゾートも多く、手ぶらでの飛行機移動も快適です。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-anniversary-luxury-suite-villa-stay',
        title: '【憧れの最高峰宿】記念日・プロポーズの極上スイート＆ヴィラ',
        desc: 'ゴルフと合わせて贅沢な休日を。沖縄や箱根のプライベートプール付きヴィラで過ごす至高の時間。'
      },
      {
        slug: 'furusato-tax-three-generation-family-luxury-stay',
        title: '【3世代家族旅行×高額枠一括消化】親孝行＆孫と泊まる客室露天風呂',
        desc: '高額な寄付枠を賢く消化！家族みんなで泊まれる熱海・白浜・那須のプレミアム温泉旅館。'
      },
      {
        slug: 'furusato-tax-luxury-hotspring-ryokan-stay',
        title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド',
        desc: 'ラウンド後の身体を極上の湯で癒やす。草津・有馬・伊豆の老舗名湯宿をふるさと納税で予約。'
      }
    ]
  },
  {
    slug: 'furusato-tax-solo-retreat-private-onsen-stay',
    title: '【おひとり様贅沢ステイ】客室露天風呂＆部屋食で心身をリセットするソロ温泉ワーケーションふるさと納税旅',
    description: '誰にも気兼ねしない大人の一人旅。四万温泉・別所温泉・黒川温泉の客室露天風呂付き宿や静寂の湯治宿を厳選。実質2,000円で叶えるソロ温泉リトリート＆ワーケーション完全ガイド。',
    heroTag: 'ふるさと納税×ソロリトリート・おひとり様温泉',
    leadTitle: '日常のノイズを脱ぎ捨てて、自分と向き合う静寂の湯浴みと美食の時間を手に入れる',
    leadText: '仕事のプレッシャーや日々の人間関係から少し離れて、自分ひとりのためだけに時間を使いたい。「誰にも邪魔されず、好きな時に好きなだけ客室露天風呂に浸かり、部屋食で静かに地酒を味わいたい」。そんな大人のおひとり様リトリートにこそ、楽天ふるさと納税のトラベルクーポンが驚くほどの費用対効果を発揮します。通常、温泉旅館の一人泊は割高に設定されていたり、休前日の受け入れが限られていたりしますが、30％の宿泊補助クーポンを活用すれば、憧れの露天風呂付き客室や老舗旅館の角部屋にお得に泊まることができます。奇跡の「四万ブルー」に抱かれる四万温泉、信州最古の文化人ゆかりの別所温泉、阿蘇の深い森に湯煙が立ちのぼる黒川温泉など、心身が深くほどけていく厳選宿をご紹介します。',
    points: [
      {
        title: 'ポイント①：一人泊の割高感をふるさと納税クーポンで賢く相殺',
        desc: '2名利用に比べて1人あたりの単価が高くなりがちなソロ温泉プラン。ふるさと納税クーポンを使えば、例えば5万円の宿泊費が実質自己負担2,000円（寄付額に応じた控除）で大幅に抑えられ、普段なら選ばないハイグレード客室へ躊躇なく予約できます。'
      },
      {
        title: 'ポイント②：周囲の目を気にせず自分のペースで過ごせる「部屋食・客室風呂」',
        desc: '食事処で家族連れやグループに囲まれるのが苦手な方でも安心な「お部屋食」や「個室ダイニング」プラン。客室に専用露天風呂があれば、24時間いつでも好きなタイミングで湯浴みを楽しめます。'
      },
      {
        title: 'ポイント③：Wi-Fi完備で温泉ワーケーションや読書合宿にも最適',
        desc: '午前中はせせらぎを聞きながら客室でリモートワーク、午後は名湯に浸かって頭をクールダウン。充実した執筆や思考の時間を作り出す「大人の温泉ワーケーション」にぴったりの環境が整っています。'
      }
    ],
    sections: [
      {
        key: 'shima_solo_onsen',
        badge: '群馬県中之条町・四万ブルーと四万の病を癒やす霊泉',
        title: '中之条町ふるさと納税で泊まる、清流のせせらぎとノスタルジーに包まれる四万温泉の隠れ宿',
        intro: '「四万（よんまん）の病を癒やす」という伝説から名付けられた群馬県四万温泉。コバルトブルーに輝く四万湖や奥四万湖の神秘的な景観と、昔ながらの湯治場情緒が旅人を包み込みます。中之条町のふるさと納税トラベルクーポンを使えば、清流沿いに建つ老舗旅館や、モダンにリノベーションされた客室露天風呂付き宿で贅沢な一人旅が実現。上州牛の陶板焼きや地元の山菜料理を部屋で味わい、肌に優しい弱アルカリ性の名湯を心ゆくまで堪能できます。'
      },
      {
        key: 'bessho_solo_onsen',
        badge: '長野県上田市・信州の鎌倉と呼ばれる古刹の里',
        title: '上田市ふるさと納税で泊まる、文化人や文豪が愛した信州最古の名湯・別所温泉',
        intro: '枕草子にも登場する信州最古の温泉地・別所温泉。国宝・八角三重塔を擁する安楽寺や北向観音など由緒ある古刹が点在し、「信州の鎌倉」とも称される落ち着いた街並みが広がります。上田市のふるさと納税クーポンを活用すれば、木造建築の温もりあふれる温泉旅館で静かな読書・湯治ステイが可能。ほんのり硫黄が香る美肌の湯に浸かり、信州の地酒とともに信州サーモンや信州そばを味わう、滋味深いソロステイが待っています。'
      },
      {
        key: 'kurokawa_solo_onsen',
        badge: '熊本県南小国町・阿蘇の渓谷美に抱かれる秘湯',
        title: '南小国町ふるさと納税で泊まる、黒川温泉の里山情緒と渓流露天風呂',
        intro: '阿蘇の外輪山に抱かれた静かな山あいに、統一された景観美を誇る黒川温泉。木々のざわめきと川のせせらぎの中、茅葺き屋根の門をくぐると別世界のような静寂が広がります。南小国町のふるさと納税クーポンを使えば、離れ形式の客室やプライベート温泉を持つ名宿をお得にリザーブ。名物「入湯手形」での露天風呂めぐりを楽しみつつ、夜は肥後あか牛のステーキと熊本名物の馬刺しに舌鼓を打つ極上のリトリートを体験できます。'
      }
    ],
    faq: [
      {
        q: 'おひとり様（1名利用）でもふるさと納税クーポンは問題なく使えますか？',
        a: 'はい、宿泊人数に関係なく、楽天トラベル上で予約可能なプランであれば1名予約でも通常通りふるさと納税クーポンが適用されます。'
      },
      {
        q: '宿でのWi-Fi環境や仕事用のデスクはありますか？',
        a: '近年は温泉ワーケーション需要の高まりを受け、全館高速Wi-Fiや快適なワークスペースを完備した宿が急増しています。予約時の施設詳細やプラン説明で「Wi-Fi完備」「ワーケーション推奨」の記載を確認しておくと安心です。'
      },
      {
        q: '一人旅でおすすめのチェックイン曜日や時期はありますか？',
        a: '旅館が最も静かで温泉も貸切状態になりやすいのは、日曜日の宿泊や火曜・水曜などの平日です。宿泊料金もリーズナブルに設定されており、ふるさと納税クーポンと併せて最高のコスパで贅沢な滞在が満喫できます。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-bihada-medicinal-springs-retreat-stay',
        title: '【奇跡の名湯】強炭酸泉・天然泥湯・美肌の湯で巡る湯治リトリート',
        desc: '一人でじっくり温泉効能を味わいたい方に！大分・長湯や鹿児島・霧島の特異な泉質を巡る旅。'
      },
      {
        slug: 'furusato-tax-shinkansen-station-walk-hotspring-stay',
        title: '【車なし・雪道運転不要】新幹線駅直結の名湯温泉旅館ガイド',
        desc: '一人旅なら電車移動が身軽で快適！新幹線を降りてすぐ歩いて行ける越後湯沢や熱海の名宿。'
      },
      {
        slug: 'furusato-tax-local-gourmet-inn-stay',
        title: '【舌鼓を打つ美食旅】高千穂牛・あなご・伊勢海老！ご当地グルメ宿特集',
        desc: '一人旅の楽しみは現地の旨い飯！全国のご当地ブランド食材を味わい尽くす美食ステイ。'
      }
    ]
  },
  {
    slug: 'furusato-tax-castle-town-heritage-onsen-stay',
    title: '【国宝・名城めぐり×ふるさと納税】天守を望む絶景露天風呂＆歴史ある城下町の名宿完全ガイド',
    description: '白鷺城・烏城・国宝天守を愛でる歴史旅。兵庫・姫路、長野・松本、滋賀・彦根の城下町宿や天守展望露天風呂ホテルを厳選。武将のロマンと郷土会席をふるさと納税でお得に堪能する名城紀行。',
    heroTag: 'ふるさと納税×国宝名城・歴史城下町宿',
    leadTitle: '夜空に白く浮かび上がる天守閣を部屋から眺め、往時の武士や文人に思いを馳せる',
    leadText: '日本が世界に誇る木造建築美の最高峰「城郭」。白漆喰が青空に映える白鷺城こと姫路城、黒漆塗りの威風堂々たる姿が北アルプスに映える松本城、琵琶湖の畔に佇む国宝彦根城など、城を巡る旅は日本の歴史と美意識を五感で体感する最高の文化紀行です。さらに城下町には、藩主ゆかりの奥座敷温泉や、伝統の町家をモダンに再生したオーベルジュ、ライトアップされた天守を客室や展望露天風呂から一望できる絶景ホテルが点在しています。楽天ふるさと納税のトラベルクーポンを活用すれば、自治体への寄付を通じて歴史遺産の保全に貢献しつつ、城下町の格式ある名宿に実質30％オフでステイ可能。武将たちの夢の跡を辿り、名物の近江牛や信州そば、播磨灘の海の幸を味わう特別な歴史ステイへご案内します。',
    points: [
      {
        title: 'ポイント①：ふるさと納税本来の「歴史文化遺産への応援」と旅が直結',
        desc: '世界遺産や国宝に指定された城郭の維持管理には多額の費用が必要です。自治体へのふるさと納税は、城郭や歴史的町並みの保存・整備に役立てられ、旅人としても文化財を守る誇りと喜びを実感できます。'
      },
      {
        title: 'ポイント②：天守ビューの特等席客室や展望露天風呂をスマートに予約',
        desc: '部屋の窓やバルコニー、露天風呂から夜間ライトアップされた城郭を独占できる「キャッスルビュー客室」。人気が高く通常は高めの料金設定ですが、ふるさと納税クーポンを使えば驚くほどお得に予約できます。'
      },
      {
        title: 'ポイント③：城下町ならではの伝統工芸や老舗の味を徒歩で散策',
        desc: '城下町には江戸・明治期から続く和菓子屋、造り酒屋、伝統工芸品の工房が軒を連ねています。宿に車や荷物を置いて、ゆっくりと歴史の薫る小路を歩く贅沢な散策が楽しめます。'
      }
    ],
    sections: [
      {
        key: 'himeji_castle_stay',
        badge: '兵庫県姫路市・日本初の世界文化遺産「白鷺城」',
        title: '姫路市ふるさと納税で泊まる、白鷺の舞う姫路城を望む展望ホテルと播磨の奥座敷宿',
        intro: '1993年に日本で初めて世界文化遺産に登録された国宝・姫路城。白漆喰総塗籠造の白壁が連なる大天守の美しさは「白鷺城」の名にふさわしい威容を誇ります。姫路市のふるさと納税トラベルクーポンを使えば、天守閣を真正面に望む客室や天然温泉大浴場を備えたホテル、あるいは名勝・書写山や塩田温泉など姫路の奥座敷宿をお得にリザーブ可能。播磨灘の新鮮なまえもん（地魚）や播州手延素麺、地酒とともに歴史のロマンに浸る滞在が叶います。'
      },
      {
        key: 'matsumoto_castle_stay',
        badge: '長野県松本市・現存最古の五重六階天守「烏城」',
        title: '松本市ふるさと納税で泊まる、国宝松本城下町と歴代藩主が愛した美ヶ原温泉の名宿',
        intro: '北アルプスの山々を借景に、黒と白のコントラストが凛とした美しさを放つ国宝・松本城。戦国末期の五重六階天守としては日本最古の姿を今に留めています。松本市のふるさと納税クーポンを活用すれば、松本藩主・戸田氏の御殿湯として栄えた美ヶ原温泉や浅間温泉の老舗旅館にスマートに宿泊。湧出する柔らかな名湯で癒やされ、信州プレミアム牛肉や打ちたての手打ち信州そばを味わいながら、城下町・縄手通りや中町通りの蔵造り散策を満喫できます。'
      },
      {
        key: 'hikone_castle_stay',
        badge: '滋賀県彦根市・井伊家35万石の城下町と琵琶湖',
        title: '彦根市ふるさと納税で泊まる、国宝彦根城の天守を望むオーベルジュと近江の美食宿',
        intro: '徳川四天王の筆頭・井伊直政によって築かれた国宝・彦根城。現存する三層天守や馬屋、名勝・玄宮園など江戸初期の城郭建築がほぼ完全な形で残る奇跡の名城です。彦根市のふるさと納税クーポンを使えば、彦根城のお濠沿いに佇む風情ある旅館や、琵琶湖の湖畔沿いに広がる温泉リゾートホテルをお得に予約。日本三大和牛のひとつ「近江牛」のすき焼きやステーキ、琵琶湖の小鮎・ホンモロコ料理に舌鼓を打つ極上の城下町ステイが待っています。'
      }
    ],
    faq: [
      {
        q: '城郭のライトアップ時間や夜間見学のイベントはありますか？',
        a: '姫路城、松本城、彦根城はいずれも日没から21時〜22時頃まで通年で美しいライトアップが行われています。また、春の桜の時期や秋の紅葉期には夜間特別公開やプロジェクションマッピングイベントが開催されることもあり、城下町の宿に泊まることで夜遅くまで幻想的な景観を楽しめます。'
      },
      {
        q: '城郭や庭園の観覧料にもクーポンは使えますか？',
        a: 'ふるさと納税クーポンは楽天トラベル上の宿泊予約に適用されます。ただし「姫路城入場券付きプラン」や「彦根城・玄宮園共通観覧券付き宿泊パック」として販売されているプランを予約すれば、入場券代も含めてクーポンの割引対象となります。'
      },
      {
        q: '城下町の観光ボランティアガイドの手配はできますか？',
        a: '各城郭の案内所や観光協会では、地元の歴史に詳しいボランティアガイドの予約を受け付けています。宿のフロントで相談すれば手配の手伝いやおすすめ散策マップを案内してもらえることが多いです。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-luxury-hotspring-ryokan-stay',
        title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド',
        desc: '歴史ある名湯宿で過ごす大人の時間。草津や有馬など日本屈指の老舗宿をふるさと納税で楽しむ。'
      },
      {
        slug: 'furusato-tax-local-gourmet-inn-stay',
        title: '【舌鼓を打つ美食旅】高千穂牛・あなご・伊勢海老！ご当地グルメ宿特集',
        desc: '城下町の美食と合わせて楽しむ！全国各地のブランド食材を味わい尽くすご当地宿ガイド。'
      },
      {
        slug: 'furusato-tax-travel-after-booking-discount-guide',
        title: '【予約済みでも間に合う】「あとから割引」完全攻略ガイド',
        desc: '城めぐりの宿をすでに予約していても大丈夫！チェックイン前日までにクーポンを適用する裏ワザ。'
      }
    ]
  },
  {
    slug: 'furusato-tax-bihada-medicinal-springs-retreat-stay',
    title: '【奇跡の名湯×ふるさと納税】強炭酸泉・天然泥湯・日本三大美肌の湯で巡る極上湯治リトリート',
    description: '炭酸ガスが弾ける大分・長湯温泉、全身を包む鹿児島・霧島の天然泥湯、とろとろ美容液のような佐賀・嬉野温泉。全国屈指の薬湯・美肌湯を楽天ふるさと納税クーポンでお得に楽しむ本格湯治ガイド。',
    heroTag: 'ふるさと納税×奇跡の美肌泉・薬湯治',
    leadTitle: '浸かるだけで全身の血流が巡り、肌が生まれ変わる。地球の恵みをダイレクトに浴びる旅',
    leadText: '日本全国に数千ある温泉地の中でも、「入った瞬間に違いがわかる」圧倒的な個性を放つ奇跡の泉質があります。全身がびっしりと銀色の気泡に包まれ血行が劇的に促進される大分・長湯温泉の「天然強炭酸泉」。地底から湧き出る濃厚なミネラルクレイを肌に塗ってパックする鹿児島・霧島温泉郷の「天然泥湯」。まるで高級美容液に浸かっているかのようなぬめりと潤いをもたらす佐賀・嬉野温泉の「日本三大美肌の湯」。こうした本物の名湯宿は、日頃の疲労回復やデトックス、美容を求めるトラベラーにとってまさに地上のオアシスです。楽天ふるさと納税のトラベルクーポンを使えば、泉質にこだわり抜いた本格湯治宿や源泉かけ流し旅館に実質30％オフで宿泊可能。身体の芯から生まれ変わる至高の温泉リトリートへ出かけませんか。',
    points: [
      {
        title: 'ポイント①：希少な「天然かけ流し薬湯」をふるさと納税で賢く連泊',
        desc: '温泉本来の治癒力や美肌効果を最大限に実感するなら、2泊以上の連泊滞在が理想的。ふるさと納税クーポンを適用することで連泊の宿泊費用を大幅に圧縮し、じっくりと身体を休める本格湯治が叶います。'
      },
      {
        title: 'ポイント②：飲泉許可を持つ宿で「内側からも身体を整える」極上体験',
        desc: '長湯温泉の炭酸泉や嬉野温泉の重曹泉は、入浴だけでなく「飲む温泉（飲泉）」としても名高い名湯。胃腸の働きを助け、温泉水で炊き上げた名物「温泉湯豆腐」など、身体の内外からデトックスできます。'
      },
      {
        title: 'ポイント③：温泉ソムリエや湯治アドバイザー常駐の本格ウェルネスステイ',
        desc: '正しい入浴法や温泉の効能を熟知した専門スタッフが常駐する宿も多く、個人の体調や悩みに合わせた最適な湯めぐりプランをアドバイスしてもらえます。'
      }
    ],
    sections: [
      {
        key: 'nagayu_carbonated_spring',
        badge: '大分県竹田市・世界屈指の高濃度天然炭酸泉',
        title: '竹田市ふるさと納税で泊まる、ラムネ温泉で名高い長湯温泉のシュワシュワ炭酸薬湯宿',
        intro: '「飲んで効き 浴びて効く 長湯のお湯」と称えられ、ドイツの温泉療養地バート・クロツィンゲンとも姉妹都市を結ぶ大分県竹田市の長湯温泉。湯船に浸かるとわずか数秒で全身が微細な炭酸の泡で覆われ、血管が拡張して身体の芯から温もりが広がります。竹田市のふるさと納税トラベルクーポンを使えば、芹川のせせらぎ沿いに建つ老舗湯治宿や、世界的建築家が設計したモダン温泉棟を持つ名宿にお得にステイ。湧き出る炭酸水で仕込んだ豊後牛の料理を味わい、極上の血行促進リフレッシュを体感できます。'
      },
      {
        key: 'kirishima_mud_spring',
        badge: '鹿児島県霧島市・天孫降臨の森に湧く天然ミネラル泥湯',
        title: '霧島市ふるさと納税で泊まる、美肌の天然泥パックと乳白色硫黄泉の霧島温泉郷',
        intro: '活火山・霧島連山の力強いエネルギーを宿す鹿児島県霧島温泉郷。温泉街のあちこちから立ち上る湯煙の中、特に女性から絶大な人気を集めるのが温泉沈殿物である良質なクレイを使った「天然泥湯」です。乳白色の濃厚な泥を全身に塗って乾燥させ、源泉で洗い流せば、古い角質が落ちてシルクのようになめらかな陶器肌へ。霧島市のふるさと納税クーポンを活用して、雄大な森に囲まれた展望露天風呂や、鹿児島黒豚・黒毛和牛の贅沢鍋を味わう美肌湯治ステイを満喫しましょう。'
      },
      {
        key: 'ureshino_bihada_spring',
        badge: '佐賀県嬉野市・とろとろ重曹泉の日本三大美肌の湯',
        title: '嬉野市ふるさと納税で泊まる、嬉野温泉の極上とろとろ美肌湯と名物温泉湯豆腐',
        intro: '島根の斐乃上温泉、栃木の喜連川温泉と並び「日本三大美肌の湯」に数えられる佐賀県嬉野温泉。ナトリウム-炭酸水素塩・塩化物泉という泉質は、まるで化粧水のようにトロリと肌に絡みつき、皮脂を乳化させて洗い流す天然の石鹸効果を持っています。嬉野市のふるさと納税クーポンを使えば、川沿いの格式ある老舗数寄屋旅館や、嬉野茶の香りに包まれるティーツーリズム宿をお得に予約可能。名物の嬉野茶と、温泉水でトロトロに溶け出した絶品「温泉湯豆腐」に舌鼓を打つ極上の潤い旅へ出かけましょう。'
      }
    ],
    faq: [
      {
        q: '天然炭酸泉はぬるめのお湯が多いと聞きますが、冬でも寒くないですか？',
        a: '炭酸泉は炭酸ガスの効果で皮膚の血流が通常の数倍に促進されるため、37℃〜39℃程度のぬるめの温度でも入浴後には身体の芯からポカポカと温もりが持続します。また、多くの宿ではぬる湯の炭酸泉と加温した温かい温泉大浴場が併設されているため、冬場でも交互浴で快適に楽しめます。'
      },
      {
        q: '泥パックはお肌が敏感な人でも利用できますか？',
        a: '天然の泥湯は天然ミネラルを豊富に含み肌に優しい成分ですが、硫黄分を含んでいるため、肌が特に敏感な方はまず腕の一部などでパッチテストを行ってから全身に広げるのがおすすめです。'
      },
      {
        q: '名物の温泉湯豆腐は宿の朝食などで食べられますか？',
        a: '嬉野温泉の多くの旅館では、朝食のメイン料理として「嬉野温泉湯豆腐」が提供されます。弱アルカリ性の温泉水によって豆腐のタンパク質が溶け出し、豆乳のように白濁したスープとトロトロの食感を楽しむことができます。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-solo-retreat-private-onsen-stay',
        title: '【おひとり様贅沢ステイ】客室露天風呂で心身をリセットするソロ温泉旅',
        desc: '誰にも気兼ねせず温泉効能を独り占め。四万・別所・黒川の静寂宿で過ごす大人のリトリート。'
      },
      {
        slug: 'furusato-tax-luxury-hotspring-ryokan-stay',
        title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド',
        desc: '草津・有馬・伊豆の名湯宿。自己負担実質2,000円で泊まるふるさと納税の基礎知識と攻略法。'
      },
      {
        slug: 'furusato-tax-local-gourmet-inn-stay',
        title: '【舌鼓を打つ美食旅】高千穂牛・あなご・伊勢海老！ご当地グルメ宿特集',
        desc: '名湯の後は現地の極上グルメ！全国各地のブランド食材を味わい尽くすご当地宿ガイド。'
      }
    ]
  }
];

function generatePage(page) {
  const dir = path.join(__dirname, 'src/app', page.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const pointsCode = page.points.map((pt, idx) => `
          <div className="bg-gradient-to-br from-amber-50/80 to-stone-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3 flex items-start gap-3 font-serif">
              <span className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm font-sans font-black shrink-0">
                ${idx + 1}
              </span>
              <span>${pt.title}</span>
            </h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-11">
              ${pt.desc}
            </p>
          </div>
  `).join('\n');

  const sectionsCode = page.sections.map(sec => {
    return `
        {/* セクション: ${sec.key} */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300/60 rounded-full text-xs font-bold tracking-wider">
              ${sec.badge}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            ${sec.title}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            ${sec.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['${sec.key}']?.hotels && secData['${sec.key}'].hotels.length > 0 ? (
              secData['${sec.key}'].hotels.map((hotel: any) => (
                <div
                  key={hotel.hotelNo}
                  className="group bg-stone-50/70 border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-stone-200">
                    <img
                      src={hotel.hotelImageUrl || hotel.roomImageUrl || '/images/no-image.jpg'}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-stone-900/85 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1 rounded-full shadow">
                      ★ {hotel.reviewAverage ? hotel.reviewAverage.toFixed(1) : '好評'}
                    </div>
                    {hotel.reviewCount > 0 && (
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-stone-800 text-[11px] font-medium px-2.5 py-0.5 rounded shadow">
                        クチコミ {hotel.reviewCount}件
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-stone-900 text-lg md:text-xl mb-2 line-clamp-2 font-serif group-hover:text-amber-800 transition">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-stone-600 text-xs mb-3 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-amber-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="line-clamp-1">{hotel.address1}{hotel.address2}</span>
                      </p>
                      <p className="text-stone-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {hotel.hotelSpecial || hotel.userReview || 'こだわり抜いた温泉と極上のおもてなしを堪能できる、ふるさと納税トラベルクーポン対象宿です。'}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between gap-2">
                      <div className="text-xs text-stone-500">
                        {hotel.hotelMinCharge ? (
                          <div>
                            <span className="text-[11px] text-stone-400 block">参考宿泊目安</span>
                            <span className="text-stone-900 text-base font-bold">{hotel.hotelMinCharge.toLocaleString()}</span>円〜
                          </div>
                        ) : (
                          <span className="text-stone-500 font-medium">プラン一覧で確認</span>
                        )}
                      </div>
                      <a
                        href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold transition shadow-sm hover:shadow"
                      >
                        ふるさと納税対象プラン
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 p-8 bg-stone-100 rounded-2xl text-center text-stone-600 text-sm">
                現在、該当自治体のおすすめ宿泊施設データを更新中です。
              </div>
            )}
          </div>
        </section>`;
  }).join('\n');

  const faqsCode = page.faq.map(f => {
    return `
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/80">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2.5">
                <span className="text-amber-700 font-serif font-black text-xl">Q.</span>
                <span>${f.q}</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-7">
                ${f.a}
              </p>
            </div>`;
  }).join('\n');

  const relatedLinksCode = page.relatedLinks.map(rel => `
            <Link
              href="/${rel.slug}"
              className="group block bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-400 hover:shadow-md transition duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                  あわせて読みたい
                </span>
                <span className="text-xs text-stone-400 group-hover:text-amber-700 transition">記事を読む →</span>
              </div>
              <h4 className="font-bold text-stone-900 text-base md:text-lg mb-2 group-hover:text-amber-800 transition font-serif">
                ${rel.title}
              </h4>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                ${rel.desc}
              </p>
            </Link>
  `).join('\n');

  const content = `import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import seasonalData from '@/data/all_seasonal_rakuten_hotels.json';

export const metadata: Metadata = {
  title: '${page.title} | クラウドトラベル',
  description: '${page.description}',
  openGraph: {
    title: '${page.title} | クラウドトラベル',
    description: '${page.description}',
    type: 'article',
  },
};

export default function Page() {
  const secData = (seasonalData as any)['${page.slug}'] || {};

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">${page.heroTag}</span>
        </nav>

        {/* ヘッダーバナー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            ${page.heroTag}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            ${page.title}
          </h1>
          <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
            ${page.leadText}
          </p>
          <div className="flex flex-wrap gap-4 pt-4 border-t border-amber-900/50 text-xs text-amber-200/90 font-medium">
            <span>✓ 寄付額の最大30％相当を宿泊クーポン還元</span>
            <span>✓ クーポンの有効期限はゆとりの3年間</span>
            <span>✓ 予約済みでも「あとから割引」対応</span>
          </div>
        </header>

        {/* 制度解説・攻略ポイントセクション */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="mb-8">
            <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">
              STRATEGY GUIDE
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mt-3 font-serif">
              ${page.leadTitle}
            </h2>
          </div>
          <div className="space-y-6">
            ${pointsCode}
          </div>
        </section>

        {/* メインコンテンツセクション */}
        ${sectionsCode}

        {/* よくある質問 FAQ */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6 font-serif flex items-center gap-2">
            <span className="w-2.5 h-7 bg-amber-700 rounded-full inline-block"></span>
            よくある質問・ふるさと納税トラベルクーポンの疑問を解消
          </h2>
          <div className="space-y-4">
            ${faqsCode}
          </div>
        </section>

        {/* 相互回遊リンク */}
        <section className="bg-stone-200/80 rounded-3xl p-6 md:p-10 border border-stone-300">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-stone-600 bg-white/70 px-3 py-1 rounded-full uppercase tracking-wider">
              RELATED GUIDES
            </span>
            <h3 className="text-2xl font-bold text-stone-900 mt-2 mb-3 font-serif">
              ふるさと納税トラベルをもっと使いこなす
            </h3>
            <p className="text-stone-600 text-sm">
              お得な「あとから割引」の裏ワザから、ご当地グルメ特化宿、愛犬同伴・個室サウナ宿まで、旅のスタイルに合わせた完全ガイドをチェック！
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${relatedLinksCode}
          </div>
        </section>
      </div>
    </main>
  );
}
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), content, 'utf8');
  console.log(`Generated page: ${page.slug}/page.tsx`);
}

for (const p of pages) {
  generatePage(p);
}
console.log('All 4 round 3 furusato pages generated successfully!');
