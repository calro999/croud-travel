const fs = require('fs');
const path = require('path');

const round104Hotels = JSON.parse(fs.readFileSync('round104_hotels.json', 'utf8'));

// Format hotel lookup map
const allHotels = round104Hotels;

const articles = [
  {
    slug: 'furusato-tax-niseko-luxury-resort-powder-snow-stay',
    title: '【ニセコ×ふるさと納税】世界最高峰パウダースノー＆ラグジュアリーステイ！羊蹄山ビュー名門ホテル特集｜パークハイアット・雪ニセコ・坐忘林',
    desc: '世界中のスキーヤーや富裕層を魅了する国際的スノーリゾート・北海道ニセコ（倶知安町・ニセコ町）を楽天ふるさと納税でお得に贅沢滞在！ゲレンデ直結の世界的ラグジュアリー「パークハイアット ニセコ HANAZONO」、羊蹄山ビューと上質スパの「雪ニセコ」、白樺林に抱かれた源泉掛け流し離れ宿「坐忘林」を徹底比較。高額還元トラベルクーポン活用術を網羅。',
    keywords: 'ニセコ ふるさと納税,パークハイアットニセコ ふるさと納税,雪ニセコ クーポン,坐忘林 ふるさと納税,倶知安町 ふるさと納税 宿泊',
    targetCity: '北海道倶知安町・ニセコ町',
    leadTitle: 'シャンパンパウダースノーと蝦夷富士・羊蹄山の威容——世界屈指のウィンターリゾートで味わう極上の温泉ウェルネスと北の美食体験',
    leadP1: '北海道後志総合振興局管内に位置するニセコエリア（倶知安町・ニセコ町）。「蝦夷富士」と称えられる秀峰・羊蹄山（ようていざん）とニセコアンヌプリを望むこの地は、日本海からの寒気がもたらす水分量わずか数パーセントの超極上「シャンパンパウダースノー」が降り積もる世界屈指のウィンタースポーツの聖地です。近年は世界各国から最高級ホテルブランドが進出し、国際色豊かなハイエンドリゾートタウンへと進化を遂げました。冬のスキー・スノーボードはもちろん、夏から秋には爽やかな高原リゾートとしてゴルフ、ラフティング、トレッキング、星空観察など四季折々の自然を満喫できます。',
    leadP2: 'ニセコ滞在のもう一つの大きな醍醐味は、大自然の中で湧き出す豊富な天然温泉と、北海道の豊かな大地が育んだ最高峰の食体験。ニセコ温泉郷は多種多様な泉質を誇り、疲れた体を芯から温めて解きほぐします。夕食には道産牛の薪火グリルや蝦夷鹿、余市港・小樽港直送の新鮮なウニ・アワビ・ホタテ、地元羊蹄山麓の採れたて野菜など、一流シェフが手掛けるインターナショナル＆和食の贅沢なフルコースを堪能できます。北海道倶知安町やニセコ町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの超一流リゾートホテルへお得に宿泊でき、一生の記憶に残るプレミアムなバケーションが叶います。',
    hotelsKey: 'furusato-tax-niseko-luxury-resort-powder-snow-stay',
    hotelItems: [
      {
        key: 'niseko_parkhyatt',
        tagline: 'ニセコHANAZONOリゾート直結！全室スイート仕様・天然温泉大浴場と世界屈指のダイニング',
        detailTitle: 'パークハイアットニセコ HANAZONO —— ゲレンデ直結の国際的ラグジュアリー。アンヌプリと白樺の美景に包まれる最高峰リゾート',
        features: [
          { title: 'HANAZONOゲレンデ直結のスキーイン・スキーアウト環境', desc: 'スキーバトラーサービスや専用ロッカーを備え、白銀のパウダースノーゲレンデへスムーズに直行できる贅沢なロケーションです。' },
          { title: 'ミネラル豊富なニセコの天然温泉大浴場＆スパウェルネス', desc: '広々とした内湯とスタイリッシュな温水プール、プライベートトリートメントルームを完備。至高のリラクゼーションを体験できます。' },
          { title: 'ミシュラン星付きシェフ監修など多彩な10のレストラン＆バー', desc: '北海道の旬食材を活かした炉端焼き、フレンチ、中華、本格イタリアン、鉄板焼きなど、世界的グルメを優雅に堪能できます。' }
        ],
        reviewPoints: '世界最高峰のホスピタリティと現代アートが融合した空間。「ゲレンデ直結の利便性とホテルの豪華さが圧巻」「お部屋からのアンヌプリの雪景色と温泉が最高」と国内外の旅行者から絶賛。'
      },
      {
        key: 'niseko_setsuniseko',
        tagline: '羊蹄山のパノラマビューを望むグランディール！天然温泉スパとミシュラン星付き監修ダイニング',
        detailTitle: '雪ニセコ（Setsu Niseko） —— 雄大な羊蹄山を正面に望む極上ウェルネス。天然温泉と美食が織りなす現代の別荘ステイ',
        features: [
          { title: '雄大な羊蹄山（蝦夷富士）を望む圧倒的な眺望と客室設計', desc: '大きなピクチャーウィンドウから四季折々の羊蹄山を眺める贅沢。キッチンやリビングを備えたコンドミニアムスタイルの広々スイートです。' },
          { title: '屋内外の天然温泉大浴場と貸切温泉、サウナ施設', desc: 'ミネラルをたっぷり含んだ天然温泉の露天風呂。サウナやリラクゼーションラウンジも充実し、本格的な「ととのい」を満喫できます。' },
          { title: 'ミシュラン星付き名店「メログラーノ」監修レストランと和食処', desc: '北海道の上質な海産物や十勝ハーブ牛を取り入れたイタリアンや割烹料理、本格カフェなど多彩な食の楽しみが揃っています。' }
        ],
        reviewPoints: '楽天トラベル評価4.77点、口コミ高評価。「羊蹄山の眺めが素晴らしく、温泉とサウナの設備も超一流」「スタッフの接客とお料理の美味しさに感動した」と高い満足度。'
      },
      {
        key: 'niseko_zaborin',
        tagline: '白樺の原生林に佇むわずか15室の珠玉！全室に源泉掛け流しの内湯と露天の２つの湯船を完備',
        detailTitle: '坐忘林（Zaborin） —— 日常の雑念を忘れ大自然に浸る「坐忘」の極み。北斗の大地で味わう独自の「キタ・カイセキ」',
        features: [
          { title: '全室に自噴する天然温泉の「内湯」と「露天風呂」の２つを配備', desc: '地下約千メートルから湧き出る新鮮な美肌の湯を贅沢に完全掛け流し。白樺林の雪景色や新緑を眺めながら心ゆくまで名湯に浸かれます。' },
          { title: '静寂と自然美が包み込むわずか15棟の独立感ある客室空間', desc: '木と石とガラスが調和した日本建築の美。床暖房や暖炉を備え、大自然の静寂の中で真のプライベートステイが約束されます。' },
          { title: '北海道の風土と旬の恵みを昇華させた独自懐石「キタ・カイセキ」', desc: '北海道産の厳選食材を用い、感性豊かに仕立てられたオリジナル懐石ディナー。一皿ごとに北の大地の物語が広がります。' }
        ],
        reviewPoints: '日本の旅館文化とモダンデザインが融合した奇跡の隠れ宿。「全室に露天風呂と内風呂がありお湯も最高」「雪の白樺林を眺めながら静かに過ごす時間は一生の宝物」と最高峰の評価。'
      }
    ],
    areaGuide: {
      title: 'ニセコエリア・羊蹄山＆パウダースノー・アウトドア観光ガイド',
      points: [
        { name: 'ニセコユナイテッド（4大スキー場）での極上パウダースノー体験', text: 'ニセコアンヌプリ、ニセコビレッジ、ニセコマウンテンリゾートグラン・ヒラフ、HANAZONOの4大ゲレンデが連なるビッグリゾート。世界屈指の雪質と多彩なコースを満喫できます。' },
        { name: '羊蹄山（蝦夷富士）の名水湧水群とふきだし公園', text: '羊蹄山の雪解け水が数十年の歳月をかけて湧き出す京極町の「ふきだし公園」や真狩村の湧水。ミネラル豊富な冷たい名水を味わえ、道の駅グルメも人気です。' },
        { name: '夏の清流尻別川ラフティング＆ニセコパノラマラインドライブ', text: '日本一の清流に何度も選ばれた尻別川でのダイナミックなラフティングやカヤック。神仙沼を巡るニセコパノラマラインの絶景ドライブや紅葉散策も格別です。' }
      ]
    },
    furusatoStepTitle: '北海道倶知安町・ニセコ町ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「北海道倶知安町」等のクーポンを獲得', desc: '楽天ふるさと納税で倶知安町またはニセコ町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 新千歳空港から直行リゾートライナーやJR快速エアポートでアクセス', desc: '新千歳空港から直行スキーバス（冬期）で約2時間半、または小樽・倶知安経由のJR線でアクセス。3年間の有効期間内で、冬のスキーシーズンや夏の避暑に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: 'パークハイアット、雪ニセコ、坐忘林などの宿泊プランを選び、予約決済画面でクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-otaru-canal-asarigawa-onsen-stay',
    title: '【小樽・朝里川温泉×ふるさと納税】小樽運河の情緒＆北の迎賓館！鰊御殿と寿司の街特集｜おたるふる川・宏楽園・銀鱗荘',
    desc: 'ガス灯揺れる小樽運河と新鮮な海の幸、歴史的建造物が薫る港町・北海道小樽市を楽天ふるさと納税でお得に贅沢旅！運河の目の前に佇む明治商家風情「運河の宿 おたる ふる川」、広大な日本庭園と露天風呂付き客室の名宿「おたる 宏楽園」、平磯岬の高台に君臨する鰊御殿「料亭湯宿 銀鱗荘」を徹底比較。小樽市トラベルクーポン活用術を網羅。',
    keywords: '小樽 ふるさと納税,おたるふる川 ふるさと納税,おたる宏楽園 クーポン,銀鱗荘 小樽 宿泊,小樽市 ふるさと納税 旅行',
    targetCity: '北海道小樽市',
    leadTitle: '石造り倉庫とガス灯の温もり——港町小樽の歴史浪漫と朝里川温泉のいで湯、新鮮な北海の幸を味わう優雅な休日',
    leadP1: '北海道西海岸、石狩湾に面した歴史ある港町・小樽（おたる）。明治から大正、昭和初期にかけて北海道開拓の海の玄関口として栄え、日本銀行旧小樽支店をはじめとする重厚な近代建築や石造り倉庫群が建ち並び、「北のウォール街」と称された面影を今なお色濃く残しています。夕暮れ時にガス灯が灯る「小樽運河」の水面に映る倉庫群のシルエットは息をのむ美しさ。オルゴール堂や北一硝子、堺町通りのレトロな街並みは散策するだけでタイムスリップしたかのような情緒に浸れます。',
    leadP2: '小樽観光の醍醐味は、小樽港や近郊の余市・積丹から水揚げされる新鮮なウニ、シャコ、ボタンエビ、ニシンを味わう本場の「小樽寿司」や海鮮丼。そして市内中心部から車で約15分の場所には、三方を山に囲まれた閑静な湯の里「朝里川（あさりかわ）温泉」が湧き出しています。歴史ある迎賓館や美しい日本庭園を抱く温泉宿に宿泊し、肌触りの良い天然温泉で旅の疲れを癒やす贅沢。北海道小樽市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの料亭旅館や運河沿いの上質宿へお得に宿泊でき、心ほどける小樽の旅が叶います。',
    hotelsKey: 'furusato-tax-otaru-canal-asarigawa-onsen-stay',
    hotelItems: [
      {
        key: 'otaru_furukawa',
        tagline: '小樽運河の目の前に佇む明治の商家風情！自家源泉の天然温泉と地元産こだわり朝食バイキング',
        detailTitle: '運河の宿 おたる ふる川 —— 小樽運河を一望する特等席。どこか懐かしい木と光の温もりに癒やされる宿',
        features: [
          { title: '小樽運河の石造り倉庫群を窓から眺める絶好のロケーション', desc: '運河側の客室からは夕暮れのガス灯や朝の静かな運河の景色を一望。堺町通りや寿司屋通りへの散策にも最高の拠点です。' },
          { title: '檜と小樽軟石をあしらった自家源泉の天然温泉大浴場', desc: '壱の湯・弐の湯の二つの大浴場には露天風呂やよもぎ寝湯を完備。柔らかな湯ざわりで心身ともに温まります。' },
          { title: '北海道の新鮮な旬食材が並ぶ評判の朝食バイキング', desc: '地元後志の採れたて野菜や手作り豆腐、焼き立てクロワッサン、海の幸など、体に優しいこだわり和洋メニューが充実しています。' }
        ],
        reviewPoints: '楽天トラベル評価4.76点、口コミ2500件超。「運河のすぐ前で夜のライトアップ散歩に最高」「スタッフの温かいおもてなしと朝食の美味しさが忘れられない」と絶大な人気。'
      },
      {
        key: 'otaru_kourakuen',
        tagline: '八千坪の広大な日本庭園に抱かれた和の名宿！自家源泉の美肌湯と露天風呂付き客室で過ごす休日',
        detailTitle: 'おたる 宏楽園 —— 四季折々の花々が咲き誇る名園の宿。自家源泉の滑らかな湯と北海道の旬を織り込んだ会席',
        features: [
          { title: '樹齢数百年の古木や桜・ツツジが彩る八千坪の日本庭園', desc: '四季を通じて表情を変える回遊式日本庭園。春の桜、初夏の新緑、秋の紅葉、冬の雪景色と、散策するだけで心が洗われます。' },
          { title: '敷地内から湧出するアルカリ性単純温泉の自家源泉', desc: '肌がつるつるになると評判の美肌の湯。庭園を望む大浴場や露天風呂、露天風呂付き客室で源泉の恵みを存分に楽しめます。' },
          { title: '後志・北海道の山海の幸を丹精込めて仕立てる創作会席', desc: '料理人が一品一品手作りする美しい日本料理。ゆったりとお部屋や食事処で旬の美味と地酒を味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.68点、口コミ高評価。「日本庭園の美しさと露天風呂付き客室の居心地が最高」「お料理がどれも繊細で美味しく、静かに贅沢な休日を過ごせた」と高評価。'
      },
      {
        key: 'otaru_ginrinsou',
        tagline: '平磯岬の高台にそびえる本物の鰊御殿！石狩湾を一望する岩露天風呂と最高峰の会席料理',
        detailTitle: '料亭湯宿 銀鱗荘 —— 「北の迎賓館」と謳われる文化財の宿。海を見晴らす高台のいで湯と伝統の料亭美禄',
        features: [
          { title: '明治初期の豪壮な鰊御殿を移築した北海道有形文化財の建築', desc: '銘木を贅沢に使った入母屋造りの堂々たる建築美。天望笠や格調高い調度品が往時の小樽の繁栄を今に伝えています。' },
          { title: '石狩湾の大海原と小樽市街を見下ろす絶景露天風呂', desc: '高台の断崖にせり出すように造られた野趣あふれる岩露天風呂。朝焼けの海や夜景を眺めながらの名湯入浴は至高の体験です。' },
          { title: '創業以来の伝統を受け継ぐ一流料亭の技と旬の極上懐石', desc: '小樽前浜の新鮮な魚介をはじめ、厳選された北の味覚を心ゆくまで。料理の盛り付けや器にも細やかな美意識が息づきます。' }
        ],
        reviewPoints: '楽天トラベル評価4.60点。「歴史ある鰊御殿の重厚感と高台からの石狩湾の眺望が素晴らしい」「露天風呂からの絶景と料亭のお料理は一生に一度の価値がある」と大絶賛。'
      }
    ],
    areaGuide: {
      title: '小樽・朝里川温泉・小樽運河＆堺町通り観光ガイド',
      points: [
        { name: '小樽運河散策＆ナイトクルーズ', text: '全長1140mの運河沿いにガス灯が並ぶ小樽のシンボル。日中の歴史散歩はもちろん、運河クルーズ船に乗って水上から石造り倉庫や港を巡る体験も人気です。' },
        { name: '堺町通り・小樽オルゴール堂＆北一硝子めぐり', text: '歴史的建造物を活用したショップやガラス工房、スイーツ店が並ぶメインストリート。「ルタオ本店」の限定ドゥーブルフロマージュや蒸気時計も見逃せません。' },
        { name: '小樽天狗山ロープウェイからの「北海道三大夜景」', text: '標高532mの天狗山山頂から見下ろす小樽市街と石狩湾のパノラマ。夜には宝石箱を散りばめたようなロマンチックな夜景が広がります。' }
      ]
    },
    furusatoStepTitle: '北海道小樽市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「北海道小樽市」クーポンを獲得', desc: '楽天ふるさと納税で小樽市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 新千歳空港や札幌駅からJR快速エアポートで直通アクセス', desc: '札幌駅からJR快速エアポートで小樽駅まで約35分、新千歳空港からも直通約75分。3年間の有効期間内で、小樽雪あかりの路や夏の運河クルーズに合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: 'おたるふる川、おたる宏楽園、銀鱗荘などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-kamakura-shonan-ocean-history-stay',
    title: '【鎌倉・湘南×ふるさと納税】七里ヶ浜オーシャンビュー＆古都の歴史情緒！鶴岡八幡宮・江ノ電の名宿特集｜鎌倉プリンス・HOTEL AO・メトロポリタン',
    desc: '海と山に囲まれた日本屈指の古都・神奈川県鎌倉市を楽天ふるさと納税でお得に贅沢ステイ！全室オーシャンビュー＆江の島と富士山を一望する「鎌倉プリンスホテル」、腰越の海を望むデザイナーズ宿「HOTEL AO KAMAKURA」、若宮大路沿いで鶴岡八幡宮参拝に最適な「ホテルメトロポリタン 鎌倉」を徹底比較。鎌倉市トラベルクーポン活用術を網羅。',
    keywords: '鎌倉 ふるさと納税,鎌倉プリンスホテル クーポン,HOTEL AO KAMAKURA ふるさと納税,ホテルメトロポリタン鎌倉 宿泊,鎌倉市 ふるさと納税 旅行',
    targetCity: '神奈川県鎌倉市',
    leadTitle: '青い海と緑の古都が織りなす極上の休日——七里ヶ浜の波音と鶴岡八幡宮の杜に癒やされる洗練の湘南リゾートステイ',
    leadP1: '神奈川県南部に位置し、源頼朝が武家政権を開いた歴史の街・鎌倉。三方を緑豊かな山に囲まれ、南は相模湾に開けた天然の要害の地には、鶴岡八幡宮や高徳院の高徳院大仏、長谷寺、円覚寺など名だたる古刹・寺社が点在しています。江ノ電（江ノ島電鉄）が海沿いの住宅街を縫うように走り、七里ヶ浜や由比ヶ浜の海岸線からは江の島と富士山を望む絶景が広がります。歴史散歩と洗練されたコーストカルチャーが見事に融合した、首都圏屈指の憧れリゾートエリアです。',
    leadP2: '鎌倉滞在の魅力は、朝夕の静けさの中で古都の風情を満喫できる宿泊体験にあります。観光客で賑わう日中とは打って変わって、早朝の鶴岡八幡宮や海岸沿いの散歩は宿泊者だけが味わえる特別な時間。夕食には相模湾で揚がった名物の生しらすや地魚、みずみずしい鎌倉野菜、葉山牛などを取り入れたイタリアンやフレンチ、本格日本料理が楽しめます。神奈川県鎌倉市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れのデザインホテルや海沿いリゾートへお得に宿泊でき、記念日や週末の贅沢エスケープが叶います。',
    hotelsKey: 'furusato-tax-kamakura-shonan-ocean-history-stay',
    hotelItems: [
      {
        key: 'kamakura_prince',
        tagline: '七里ヶ浜の高台に建つ全室オーシャンビュー！相模湾と江の島、雄大な富士山を望む絶景リゾート',
        detailTitle: '鎌倉プリンスホテル —— 海と空が広がるパノラマビュー。七里ヶ浜の風を感じながら過ごす優雅なリゾート',
        features: [
          { title: '客室の窓一面に広がる七里ヶ浜・相模湾と江の島のパノラマ', desc: '全客室がオーシャンビュー。波打ち際のサーファーや美しい夕焼け、遠くに浮かぶ富士山を眺めながらリゾート時間を満喫できます。' },
          { title: '江ノ電「七里ヶ浜駅」から斜行エレベーターですぐのアクセス', desc: '海沿いの国道134号線から少し上がった高台。駅や海へのアクセスがスムーズで、海辺のカフェ巡りにも最適です。' },
          { title: '相模湾の海の幸と鎌倉野菜を取り入れた本格フレンチ＆和食', desc: '絶景を望むレストラン「ル・トリアノン」でのフレンチコースや鉄板焼き。海を眺めながら優雅なディナーや朝食を味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.37点、口コミ2600件超。「部屋からの七里ヶ浜と江の島の景色が本当に素晴らしい」「夕日が富士山の向こうに沈むグラデーションに感動した」とリゾート感満載。'
      },
      {
        key: 'kamakura_hotelao',
        tagline: '腰越の海を目前にする洗練のデザイナーズ！名店「松原庵」の本格蕎麦料理と美酒に酔いしれる',
        detailTitle: 'HOTEL AO KAMAKURA —— 青く澄む海と大人の隠れ家。腰越の潮風に抱かれ、蕎麦と厳選ワインを味わう美食宿',
        features: [
          { title: '腰越海岸の目の前に佇むモダンで洗練された建築デザイン', desc: '潮風を感じる開放的なテラスや中庭。シンプルかつ上質なインテリアが落ち着きと特別感を醸し出します。' },
          { title: '鎌倉屈指の蕎麦の名店「松原庵」が手がける美食ダイニング', desc: '毎朝手打ちされる香り高い蕎麦と、地魚や鎌倉野菜を活かした逸品料理。厳選された日本酒やナチュールワインとのペアリングが絶品です。' },
          { title: 'ゆったりとリラックスできる上質な客室空間とアメニティ', desc: '畳敷きのモダン和室や海を望むテラス付きルーム。随所にこだわりが散りばめられ、心地よい大人のエスケープを楽しめます。' }
        ],
        reviewPoints: '楽天トラベル評価4.89点、口コミ極めて高評価。「松原庵のお料理とお蕎麦がとにかく絶品」「お部屋の雰囲気、スタッフのホスピタリティ、海の近さすべてが完璧」と大人気。'
      },
      {
        key: 'kamakura_metropolitan',
        tagline: '若宮大路沿いに佇む洗練の和モダンホテル！鶴岡八幡宮の参道を望み、鎌倉散策の拠点に最高',
        detailTitle: 'ホテルメトロポリタン 鎌倉 —— 古都の風情と現代の快適性が融合。鶴岡八幡宮まで徒歩数分の極上ロケーション',
        features: [
          { title: '若宮大路に面し、JR鎌倉駅東口から徒歩2分の抜群の立地', desc: '鶴岡八幡宮や小町通りへ徒歩すぐ。朝一番の静かな参拝や夜の落ち着いた鎌倉の街並みをゆったりと楽しめます。' },
          { title: '中庭の緑を望む吹き抜けロビーと全室バストイレ別の快適客室', desc: '縁側をイメージした小上がりや大きな窓。木の温もりあふれる和モダン空間で、旅の疲れを心地よく癒やせます。' },
          { title: '「Café&Meal MUJI」での地元食材を活かした朝食', desc: '鎌倉野菜や湘南しらす、手作りのお惣菜を取り入れた彩り豊かな朝食。体に優しい味わいで清々しい一日が始まります。' }
        ],
        reviewPoints: '楽天トラベル評価4.69点、口コミ1300件超。「駅近で鶴岡八幡宮の参拝に便利すぎる」「お部屋がおしゃれで清潔感があり、スタッフの気配りも素晴らしい」とリピーター多数。'
      }
    ],
    areaGuide: {
      title: '鎌倉・湘南・鶴岡八幡宮＆江ノ電沿線観光ガイド',
      points: [
        { name: '鶴岡八幡宮参拝と若宮大路・段葛（だんかずら）の散策', text: '鎌倉武士の守護神として信仰を集めた鎌倉の象徴。春には段葛の桜のトンネルが見事です。参道沿いには小町通りのグルメやスイーツ店が並びます。' },
        { name: '江ノ電に乗って巡る極楽寺・長谷寺・鎌倉大仏', text: '緑のトンネルや海沿いをコトコト走るレトロな江ノ電。紫陽花で名高い長谷寺や、高さ11m余の高徳院国宝大仏など見どころが凝縮しています。' },
        { name: '七里ヶ浜海岸のカフェテラスと江の島サンセット', text: '「パシフィック ドライブイン」や「bills」など人気カフェが並ぶ七里ヶ浜。富士山と江の島を茜色に染める夕景は湘南随一の絶景です。' }
      ]
    },
    furusatoStepTitle: '神奈川県鎌倉市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「神奈川県鎌倉市」クーポンを獲得', desc: '楽天ふるさと納税で鎌倉市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 東京・横浜からJR横須賀線・湘南新宿ラインですぐ', desc: '東京駅からJR横須賀線で鎌倉駅まで約55分、横浜駅からは約25分。3年間の有効期間内で、週末のリフレッシュ旅や紫陽花・紅葉シーズンに合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '鎌倉プリンスホテル、HOTEL AO KAMAKURA、ホテルメトロポリタン鎌倉などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-miyajima-itsukushima-shrine-luxury-stay',
    title: '【宮島・厳島神社×ふるさと納税】世界遺産の大鳥居と潮湯温泉！瀬戸内名物牡蠣・穴子会席特集｜錦水館・岩惣・有もと',
    desc: '日本三景・世界文化遺産に輝く神の島・広島県廿日市市「宮島（厳島）」を楽天ふるさと納税でお得に贅沢滞在！宮島唯一の自家源泉潮湯温泉を誇る「錦水館」、安政元年創業・皇室や文豪も愛した名門「みやじまの宿 岩惣」、厳島神社徒歩3分・創業三百余年の老舗「宮島グランドホテル 有もと」を徹底比較。廿日市市トラベルクーポン活用術を網羅。',
    keywords: '宮島 ふるさと納税,錦水館 クーポン 宮島,岩惣 ふるさと納税 宿泊,宮島ホテル有もと ふるさと納税,廿日市市 ふるさと納税 旅行',
    targetCity: '広島県廿日市市（宮島）',
    leadTitle: '海に浮かぶ朱塗りの大鳥居と弥山の原生林——神々が宿る世界遺産の島で味わう宮島潮湯温泉と瀬戸内美味尽くし',
    leadP1: '広島湾の南西部に浮かび、松島・天橋立とともに「日本三景」の一つに数えられる世界遺産の島・宮島（厳島）。島全体が御神体として崇められ、推古元年に創建、平清盛によって現在の海上に浮かぶ壮麗な寝殿造りへと整えられた「厳島神社」は、潮の満ち引きによって刻一刻と表情を変える世界屈指の名建築です。満潮時には海面に朱塗りの社殿と大鳥居が浮かび上がり、干潮時には鳥居の足元まで歩いて渡ることができます。島内には人懐っこい鹿たちが暮らし、背後には国の天然記念物「弥山（みせん）原始林」の神聖な緑が広がっています。',
    leadP2: '宮島観光の真骨頂は、最終フェリーが出た後の「島に泊まる旅」にあります。日帰りの観光客が去った後の夜、美しくライトアップされた大鳥居や廻廊の静寂は宿泊者だけが出会える神秘の光景。早朝には澄み切った朝の空気の中で清々しい神社参拝が叶います。夕食には名物の焼き牡蠣やカキフライ、甘辛いタレが香ばしい穴子飯、広島牛ステーキなど、瀬戸内海の旬の恵みが膳を彩ります。広島県廿日市市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの老舗旅館や海沿いの上質宿へお得に宿泊でき、心洗われる至福の宮島ステイが叶います。',
    hotelsKey: 'furusato-tax-miyajima-itsukushima-shrine-luxury-stay',
    hotelItems: [
      {
        key: 'miyajima_kinsuikan',
        tagline: '宮島で唯一湧出する自家源泉「宮島潮湯温泉」！海を望むテラス付きスイートと瀬戸内旬会席',
        detailTitle: '宮島潮湯温泉 錦水館 —— 創業百余年・厳島神社へ徒歩すぐ。宮島唯一の天然温泉と大鳥居を望む展望スイート',
        features: [
          { title: '地下深くから湧き出す宮島島内唯一の天然温泉「潮湯」', desc: '海水を含んだミネラル豊富な塩化物泉。体の芯から温まり、冷え性や疲労回復に抜群の効果をもたらす美肌の湯です。' },
          { title: '瀬戸内海や大鳥居を望むテラス付きスイートルーム', desc: '畳敷きに快適なベッドを配した和モダン空間。夜にはライトアップされた宮島の海景をプライベートに眺められます。' },
          { title: '広島牛や宮島産牡蠣・穴子をふんだんに味わう特選会席', desc: '瀬戸内の新鮮な魚介と地元食材を活かした繊細な創作料理。器や演出にも趣向を凝らした極上の夕食を堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.66点、口コミ2600件超。「宮島で唯一の天然温泉がとても気持ち良かった」「夜の大鳥居のライトアップを見に行くのに最高の立地とおもてなし」と絶賛。'
      },
      {
        key: 'miyajima_iwaso',
        tagline: '安政元年創業・皇室や文豪が愛した宮島を代表する歴史名旅館！もみじ谷の清流に抱かれる離れ',
        detailTitle: 'みやじまの宿 岩惣 —— もみじ谷公園の自然と一体化する数寄屋建築。若宮温泉のいで湯と伝統の京風会席',
        features: [
          { title: '名勝もみじ谷公園の渓流沿いに佇む安政元年（1854年）創業の老舗', desc: '昭和天皇をはじめ皇族や歴代首相、文豪が宿泊した由緒ある宿。太鼓橋「もみじ橋」のすぐそばで四季の風情に包まれます。' },
          { title: '紅葉谷の原生林から湧き出す天然の「若宮温泉」', desc: '豊かな緑とせせらぎに包まれた大浴場。なめらかな湯ざわりで、歩き疲れた体を優しく包み込みます。' },
          { title: '伝統の出汁と瀬戸内の旬魚が織りなす本格懐石料理', desc: '素材の味を極限まで引き出した滋味あふれる料理。数寄屋造りの個室や客室で静かに至福の味覚を楽しめます。' }
        ],
        reviewPoints: '楽天トラベル評価4.45点。「歴史の重みを感じる佇まいともみじ谷の緑が素晴らしかった」「接客のきめ細やかさと静寂な空間は宮島屈指」と格別の評価。'
      },
      {
        key: 'miyajima_arimoto',
        tagline: '厳島神社まで徒歩３分！創業三百余年の歴史と大浴場・露天風呂。旬の瀬戸内会席とおもてなし',
        detailTitle: '宮島グランドホテル 有もと —— 厳島神社の社殿へ一番近い格式高き宿。数寄屋モダン空間と瀬戸内の美味',
        features: [
          { title: '厳島神社の参道・廻廊まで徒歩わずか3分の抜群のロケーション', desc: '早朝の静かな開門参拝や夜のライトアップ散策にこれ以上ない好立地。宮島の歴史と信仰を身近に体感できます。' },
          { title: '木の香り漂う大浴場と庭園露天風呂でリフレッシュ', desc: 'ゆったりと足を伸ばせる広々とした大浴場。旅の心地よい疲れを癒やし、湯上がり処でもくつろげます。' },
          { title: '瀬戸内の新鮮な小魚や牡蠣・広島牛を味わう伝統会席', desc: '料理長が腕を振るう四季折々の会席料理。彩り豊かな前菜やお造り、焼き物など目にも鮮やかな料理が並びます。' }
        ],
        reviewPoints: '楽天トラベル評価4.58点、口コミ1500件超。「神社まで本当に近くて夜の散歩が最高だった」「お部屋が広くて綺麗、お料理も牡蠣やお肉がとても美味しかった」と大好評。'
      }
    ],
    areaGuide: {
      title: '宮島・厳島神社・大鳥居＆弥山ロープウェイ観光ガイド',
      points: [
        { name: '世界文化遺産「厳島神社」の満潮・干潮拝観と大鳥居', text: '海上に浮かぶ国宝の廻廊や能舞台。満潮時の神秘的な水上社殿と、干潮時に大鳥居の真下まで歩いて触れる体験の双方を宿泊して楽しむのが醍醐味です。' },
        { name: '宮島ロープウェイで行く霊峰「弥山（みせん）」山頂展望台', text: '弘法大師空海が開山したとされる聖地・弥山。ロープウェイと登山道を登れば、瀬戸内海の多島美を360度見晴らす絶景パノラマが広がります。' },
        { name: '表参道商店街での食べ歩き（揚げもみじ・焼き牡蠣・穴子飯）', text: '宮島フェリーターミナルから神社へ続く活気ある商店街。「揚げもみじ」や出来立てのもみじ饅頭、香ばしい焼き牡蠣の食べ歩きが楽しめます。' }
      ]
    },
    furusatoStepTitle: '広島県廿日市市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「広島県廿日市市」クーポンを獲得', desc: '楽天ふるさと納税で廿日市市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 広島駅からJR山陽本線で宮島口駅へ、フェリーで約10分', desc: '広島駅からJRで宮島口まで約28分、そこからJR西日本宮島フェリーまたは松大汽船で約10分。3年間の有効期間内で、紅葉や新緑、桜の季節に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '錦水館、岩惣、有もとなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  }
];

function generateArticlePage(art) {
  const hotelObj = allHotels[art.hotelsKey] || {};

  const hotelCardsCode = art.hotelItems.map((h, idx) => {
    const data = hotelObj[h.key] || {};
    const hotelName = data.hotelName || '名門温泉旅館';
    const imgUrl = data.hotelImageUrl || 'https://placehold.co/800x500/e2e8f0/1e293b?text=Hotel+Photo';
    const rating = data.reviewAverage || 4.5;
    const revCount = data.reviewCount || 100;
    const chargeStr = data.hotelMinCharge ? ('¥' + Number(data.hotelMinCharge).toLocaleString() + '〜') : '要問い合わせ';
    const address = (data.address1 || '') + ' ' + (data.address2 || '');
    const affiliateUrl = data.hotelInformationUrl || 'https://travel.rakuten.co.jp/';
    const hotelNo = data.hotelNo || '';

    const featuresCode = h.features.map(f => {
      return `
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ${f.title}
                    </h5>
                    <p className="text-stone-600 leading-relaxed">${f.desc}</p>
                  </div>`;
    }).join('');

    return `
          {/* ホテル ${idx + 1} */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="${imgUrl}"
                alt="${hotelName}"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第${idx + 1}選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ ${rating}（口コミ ${revCount}件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">${art.targetCity}</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ${hotelName}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  ${h.tagline}
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ${h.detailTitle}
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  ${featuresCode}
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">${h.reviewPoints}</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div><span className="font-semibold text-stone-700">住所：</span>${address}</div>
                <div><span className="font-semibold text-stone-700">宿泊目安：</span>${chargeStr} /人</div>
                ${hotelNo ? `<div><span className="font-semibold text-stone-700">楽天施設ID：</span>${hotelNo}</div>` : ''}
                <div><span className="font-semibold text-stone-700">予約区分：</span>楽天ふるさと納税トラベルクーポン対象</div>
              </div>

              <div className="pt-2">
                <a
                  href="${affiliateUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-stone-900 text-white font-bold py-3.5 px-6 rounded-xl shadow transition"
                >
                  【楽天トラベル】${hotelName} の宿泊プランとクーポン適用はこちら →
                </a>
              </div>
            </div>
          </article>`;
  }).join('\n');

  const areaPointsCode = art.areaGuide.points.map((pt, idx) => {
    return `
            <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-sans font-bold">${idx + 1}</span>
                ${pt.name}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                ${pt.text}
              </p>
            </div>`;
  }).join('');

  const stepsCode = art.furusatoSteps.map((st, idx) => {
    return `
            <div className="bg-stone-900/60 p-4 rounded-2xl border border-amber-500/20 space-y-2">
              <span className="inline-block bg-amber-500/20 text-amber-300 font-mono text-xs px-2.5 py-0.5 rounded font-semibold">
                ${st.step}
              </span>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                ${st.desc}
              </p>
            </div>`;
  }).join('');

  return `import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${art.title.replace(/'/g, "\\'")}',
  description: '${art.desc.replace(/'/g, "\\'")}',
  keywords: '${art.keywords.replace(/'/g, "\\'")}',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/${art.slug}',
  },
  openGraph: {
    title: '${art.title.replace(/'/g, "\\'")}',
    description: '${art.desc.replace(/'/g, "\\'")}',
    url: 'https://croud-travel.pages.dev/${art.slug}',
    siteName: 'トラベルガイド - クラウドトラベル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function FurusatoArticlePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '${art.title.replace(/'/g, "\\'")}',
    description: '${art.desc.replace(/'/g, "\\'")}',
    author: {
      '@type': 'Organization',
      name: 'クラウドトラベル 観光・ふるさと納税調査班',
      url: 'https://croud-travel.pages.dev/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラウドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png',
      },
    },
    datePublished: '2026-09-10T18:00:00+09:00',
    dateModified: '2026-09-10T18:00:00+09:00',
    mainEntityOfPage: 'https://croud-travel.pages.dev/${art.slug}',
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 antialiased font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-1.5">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span>/</span>
        <Link href="/travel-savings-guide" className="hover:underline">ふるさと納税旅行ガイド</Link>
        <span>/</span>
        <span className="text-stone-700 font-medium truncate">${art.title}</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
          <span>♨️</span>
          <span>${art.targetCity} ふるさと納税・名湯宿特集</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight leading-snug">
          ${art.title}
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          ${art.desc}
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif text-amber-900 border-b border-amber-100 pb-3">
            ${art.leadTitle}
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ${art.leadP1}
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ${art.leadP2}
          </p>
        </section>

        {/* 比較サマリー表 */}
        <section className="bg-amber-50/50 rounded-3xl p-6 sm:p-8 border border-amber-100/80 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            今回ご紹介する厳選3名宿の比較サマリー
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white rounded-xl shadow-xs">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-100/70 text-stone-700">
                  <th className="p-3 font-bold">宿名</th>
                  <th className="p-3 font-bold">評価</th>
                  <th className="p-3 font-bold">最大の特徴</th>
                  <th className="p-3 font-bold">おすすめの過ごし方</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                ${art.hotelItems.map((h, idx) => {
                  const data = hotelObj[h.key] || {};
                  const hotelName = data.hotelName || '名門温泉旅館';
                  const rating = data.reviewAverage || 4.5;
                  return `
                <tr>
                  <td className="p-3 font-bold text-amber-900">${hotelName}</td>
                  <td className="p-3 font-bold">★ ${rating}</td>
                  <td className="p-3 text-stone-600">${h.tagline}</td>
                  <td className="p-3 text-stone-600">${idx === 0 ? '最高峰の格式・贅沢ステイ' : idx === 1 ? '抜群の立地・名湯満喫' : '温もり空間・アットホーム旅'}</td>
                </tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>
        </section>

        {/* ホテル詳細カード一覧 */}
        <section className="space-y-8">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🏆</span> 厳選3宿の詳細レビュー＆ふるさと納税活用ガイド
          </h2>
${hotelCardsCode}
        </section>

        {/* エリア観光・見どころ */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
            <span>🗺️</span> ${art.areaGuide.title}
          </h2>
          <div className="grid gap-4">
${areaPointsCode}
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              ${art.furusatoStepTitle}
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">
${stepsCode}
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-amber-500 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg hover:opacity-95 transition"
            >
              <span>楽天ふるさと納税トラベルクーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* 内部リンク・ハブ導線 */}
        <section className="border-t border-stone-200 pt-8 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            関連するふるさと納税トラベル特集
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-600">
            <li>
              <Link href="/travel-savings-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> ふるさと納税×旅行 完全攻略ハブページトップ
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-after-booking-discount-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 予約済みでも間に合う！楽天トラベル「あとから適用」ガイド
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-shirahama-onsen-ocean-adventure-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 南紀白浜温泉 白良浜オーシャンビュー＆アドベンチャーワールド特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-nozawa-onsen-sotoyu-heritage-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 野沢温泉 十三の外湯めぐり＆源泉麻釜・信州郷土料理特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
`;
}

for (const art of articles) {
  const dir = path.join(__dirname, 'src/app', art.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const content = generateArticlePage(art);
  const filePath = path.join(dir, 'page.tsx');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Generated: ${filePath} (${content.length} chars)`);
}
