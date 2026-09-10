const fs = require('fs');
const path = require('path');

const round106Hotels = JSON.parse(fs.readFileSync('round106_hotels.json', 'utf8'));

// Format hotel lookup map
const allHotels = round106Hotels;

const articles = [
  {
    slug: 'furusato-tax-toyako-onsen-lakeview-fireworks-stay',
    title: '【洞爺湖温泉×ふるさと納税】ロングラン花火＆湖上インフィニティスパ！絶景リゾート特集｜ウィンザーホテル洞爺・湖の栖・サンパレス',
    desc: '北海道屈指のカルデラ湖畔・洞爺湖町＆壮瞥町を楽天ふるさと納税でお得に極上ステイ！山頂から湖と海を一望する世界的サミットホテル「ザ・ウィンザーホテル洞爺」、全室客室温泉露天風呂付き「ザ・レイクスイート 湖の栖」、広大な温泉ビーチの「洞爺サンパレス リゾート＆スパ」を徹底比較。ロングラン花火大会やトラベルクーポン活用術を網羅。',
    keywords: '洞爺湖温泉 ふるさと納税,ウィンザーホテル洞爺 クーポン,湖の栖 ふるさと納税 洞爺,洞爺サンパレス 宿泊,洞爺湖町 ふるさと納税 旅行',
    targetCity: '北海道洞爺湖町・壮瞥町',
    leadTitle: '鏡のように澄み渡るカルデラ湖と中島、有珠山の威容——毎夜打ち上がる湖上花火と大パノラマ温泉に酔いしれる北のネイチャーリゾート',
    leadP1: '北海道南西部、支笏洞爺国立公園に位置する洞爺湖（とうやこ）。約11万年前の巨大噴火によって形成された円形のカルデラ湖であり、湖中央に浮かぶ「中島」の原生林、南岸にそびえる活火山「有珠山（うすざん）」と「昭和新山」が織りなす大自然の造形美は、日本初の「世界ジオパーク」に登録されています。湖畔に湧き出す洞爺湖温泉は、毎分約1,400リットルの豊富な湯量を誇り、毎年4月下旬から10月末まで毎夜開催される「洞爺湖ロングラン花火大会」が温泉街の夜を彩ります。',
    leadP2: '洞爺湖温泉の最大の魅力は、遮るもののない湖と空のパノラマを湯船から一望するインフィニティ温泉体験と、噴火湾（内浦湾）の新鮮なホタテ・毛ガニ・ボタンエビ、洞爺湖周辺の豊穣な大地で育つ黒毛和牛や有機野菜。北海道洞爺湖町や壮瞥町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの最高峰リゾートホテルへお得に宿泊でき、特別な記念日や家族旅行が最高の思い出になります。',
    hotelsKey: 'furusato-tax-toyako-onsen-lakeview-fireworks-stay',
    hotelItems: [
      {
        key: 'toyako_windsor',
        tagline: '標高625mのポロモイ山山頂に君臨するサミットホテル！洞爺湖と内浦湾を一望する奇跡の360度パノラマ',
        detailTitle: 'ザ・ウィンザーホテル洞爺 リゾート＆スパ —— 天空の城のような圧倒的スケール。世界が称賛した最高峰のおもてなしと美食',
        features: [
          { title: '洞爺湖と太平洋（内浦湾）の両方を同時に見下ろす山頂の絶景立地', desc: '山頂に建つ唯一無二のロケーション。雲海が眼下に広がる朝の景色や夕暮れのマジックアワーは息をのむ美しさです。' },
          { title: '数寄屋造りの本格温泉「山泉」と極上のウェルネススパ', desc: '檜の香る大浴場と露天風呂。ガラス張りの温水プールや本格サロンで、心身を解きほぐす至高のリラクゼーションを体験できます。' },
          { title: 'ミシュラン星付きレストランを擁する世界基準のダイニング', desc: '北海道の極上素材を活かしたフレンチ、本格イタリアン、鉄板焼き、日本料理など、選りすぐりの美食が特別な夜を演出します。' }
        ],
        reviewPoints: '楽天トラベル評価4.44点、国内外の高評価多数。「ロビーに入った瞬間のパノラマビューに息をのんだ」「一生に一度は泊まるべき素晴らしいホテルとお料理」と大絶賛。'
      },
      {
        key: 'toyako_konosumika',
        tagline: '全客室に洞爺湖を望む温泉露天風呂を完備！湖面と一体化する最上階インフィニティ露天風呂と花火特等席',
        detailTitle: 'ザ・レイクスイート 湖の栖 —— 湖に浮かぶような非日常。全室露天風呂付き客室と湖上ビュッフェダイニング',
        features: [
          { title: '全客室のテラスに源泉掛け流し温泉露天風呂を完備', desc: '湖を吹き抜ける風を感じながらプライベートに入浴。夜にはテラスからロングラン花火を大迫力で鑑賞できます。' },
          { title: '最上階8階に設えられた湖と空が繋がるインフィニティ設計の大浴場', desc: '湯船が湖面へと突き出すような絶景露天風呂。まるで洞爺湖の上に浮かんでいるかのような神秘的な感覚を味わえます。' },
          { title: '水のテラスダイニング「The 洞爺」での優雅な和洋ディナー', desc: 'オープンキッチンで仕上げられる旬の道産食材ディナー。美しい水盤を眺めながら優雅な食事時間を楽しめます。' }
        ],
        reviewPoints: '楽天トラベル評価4.52点、口コミ高評価。「お部屋の露天風呂から見る花火が最高だった」「インフィニティ温泉の開放感が素晴らしく、スタッフの対応も完璧」とリピーター多数。'
      },
      {
        key: 'toyako_sunpalace',
        tagline: '湖畔の巨大温泉リゾート！洞爺湖を見晴らす露天風呂と屋内大型プール＆充実のアクティビティ',
        detailTitle: '洞爺サンパレス リゾート＆スパ —— 湖の波打ち際に佇む一大リゾート。開放感抜群の露天風呂と多彩な施設',
        features: [
          { title: '湖畔のパノラマを満喫できる広々とした大浴場と露天風呂', desc: '洞爺湖の自然を間近に感じる大浴場。湯上がりのラウンジからも湖の景色をゆったり楽しめます。' },
          { title: '波の出るプールやスライダーを備えた大型ウォーターパーク', desc: '天候を気にせず年中遊べる屋内プール。家族連れやグループ旅行に大人気のアクティビティ施設です。' },
          { title: '北海道の海鮮や名物料理がずらりと並ぶ豪華ビュッフェ', desc: '出来立ての料理がライブキッチンから次々と提供されるディナーバイキング。大人から子供まで気兼ねなく楽しめます。' }
        ],
        reviewPoints: '楽天トラベル評価3.79点、口コミ4200件超。「プールと温泉が充実していて子供が大喜びだった」「湖の景色が素晴らしく、バイキングも種類豊富で家族旅行に最高」とファミリーに大人気。'
      }
    ],
    areaGuide: {
      title: '洞爺湖ロングラン花火＆有珠山ロープウェイ・昭和新山観光ガイド',
      points: [
        { name: '洞爺湖ロングラン花火大会（4月下旬〜10月末・毎夜開催）', text: '湖上を移動する船から打ち上げられる花火。湖畔の遊歩道やホテルの客室露天風呂、遊覧船の上から約20分間の幻想的な花火ショーを楽しめます。' },
        { name: '有珠山ロープウェイ＆洞爺湖展望台', text: '昭和新山山麓から有珠山山頂へ約6分のロープウェイ。山頂展望台からは洞爺湖・羊蹄山と、内浦湾や火口原の迫力あるパノラマを一望できます。' },
        { name: '昭和新山と有珠山ジオパークの火山散策道', text: '今なお白い噴煙を上げ続ける国の特別天然記念物「昭和新山」。火山村やクマ牧場など、大地の息吹を間近に体感できるスポットが充実しています。' }
      ]
    },
    furusatoStepTitle: '北海道洞爺湖町・壮瞥町ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「北海道洞爺湖町」等のクーポンを獲得', desc: '楽天ふるさと納税で洞爺湖町または壮瞥町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 新千歳空港やJR札幌駅から特急北斗で洞爺駅へアクセス', desc: '新千歳空港から南千歳経由のJR特急北斗で洞爺駅まで約1時間半、札幌駅からも約1時間50分。3年間の有効期間内で、夏の花火や冬の雪景色に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: 'ウィンザーホテル洞爺、湖の栖、洞爺サンパレスなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-okinawa-onna-beach-resort-stay',
    title: '【沖縄・恩納村×ふるさと納税】西海岸エメラルドビーチ＆最高峰ラグジュアリー！プールヴィラ特集｜ハレクラニ・ハイアット瀬良垣・ルネッサンス',
    desc: '日本屈指の美ら海リゾート・沖縄県恩納村を楽天ふるさと納税でお得に極上バケーション！ハワイ名門の天国の館「ハレクラニ沖縄」、360度海に囲まれた島リゾート「ハイアット リージェンシー 瀬良垣アイランド 沖縄」、イルカと遊べる「ルネッサンスリゾートオキナワ」を徹底比較。恩納村トラベルクーポン活用術を網羅。',
    keywords: '恩納村 ふるさと納税,ハレクラニ沖縄 クーポン,ハイアット瀬良垣 ふるさと納税,ルネッサンス沖縄 宿泊,恩納村 ふるさと納税 旅行',
    targetCity: '沖縄県恩納村（西海岸リゾート）',
    leadTitle: 'どこまでも青く透き通る東シナ海と白い砂浜——サンセット街道で出会う世界基準のホスピタリティと南国の楽園ステイ',
    leadP1: '沖縄本島の中央部西海岸に位置し、沖縄屈指のリゾートエリアとして知られる国頭郡恩納村（おんなそん）。海岸線一帯が「沖縄海岸国定公園」に指定され、万座毛（まんざもう）をはじめとする名勝や、エメラルドグリーンからコバルトブルーへとグラデーションを描くサンゴ礁の海が広がっています。国道58号線沿いには世界的な高級リゾートホテルが建ち並び、夕暮れ時には東シナ海の水平線へと沈む息をのむような美しいサンセットが訪れる人々を魅了します。',
    leadP2: '恩納村リゾートの醍醐味は、客室バルコニーから眺めるどこまでも広がる海と波音、そして開放感あふれるインフィニティプールでのチルアウト。夕食には沖縄県産黒毛和牛やアグー豚、近海で獲れた鮮魚、島野菜を取り入れた極上のフレンチ、鉄板焼き、本格琉球懐石が楽しめます。沖縄県恩納村へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの最高級リゾートへお得に宿泊でき、特別なハネムーンや家族旅行を最高にラグジュアリーに演出できます。',
    hotelsKey: 'furusato-tax-okinawa-onna-beach-resort-stay',
    hotelItems: [
      {
        key: 'onna_halekulani',
        tagline: 'ハワイで百年の歴史を誇る名門「天国の館」！全360室オーシャンビュー＆名物オーキッドプール',
        detailTitle: 'ハレクラニ沖縄 —— 国定公園の海を見渡す至高の楽園。五つのプールと世界屈指のダイニングで過ごす極上の休日',
        features: [
          { title: '全客室が50㎡以上のゆとりあるオーシャンビュー設計', desc: '白を基調としたハレクラニ伝統の「セブンシェイズ・オブ・ホワイト」のインテリア。バルコニーからエメラルドグリーンの海を一望できます。' },
          { title: '約150万枚のモザイクタイルで描かれた名物「オーキッドプール」', desc: 'ハレクラニの象徴である蘭のプールをはじめ、クワイエットプールやインドアプールなど5つの個性豊かなプールを完備しています。' },
          { title: 'ミシュラン二つ星シェフ監修のイノベーティブフレンチ「SHIROUX」', desc: '沖縄の食材の可能性を極限まで引き出した芸術的料理。波の音を聴きながら優雅なディナーを堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.81点、口コミ絶賛の嵐。「ホスピタリティ、客室、プール、お料理すべてが完璧でまさに天国」「沖縄で最高の思い出になった」と憧れの最高峰。'
      },
      {
        key: 'onna_hyattseragaki',
        tagline: '瀬良垣島全体がひとつのリゾート！360度海に囲まれたラグジュアリーアイランドと海水プール',
        detailTitle: 'ハイアット リージェンシー 瀬良垣アイランド 沖縄 —— 一本の橋で結ばれた島のリゾート。海と一体化するラグーンプール',
        features: [
          { title: '沖縄本島と橋で結ばれたプライベート感あふれる離島ロケーション', desc: '四方を澄み切った海に囲まれた贅沢な環境。トゥクトゥクでの移動などリゾート気分を盛り上げる演出が満載です。' },
          { title: '海水を取り入れたラグーンプールとインフィニティプール', desc: '海とシームレスに繋がるような開放的なプールエリア。プールサイドのデイベッドで優雅な読書やカクテルを楽しめます。' },
          { title: '炉端、鮨、鉄板焼、イタリアンと多彩なオープンキッチンレストラン', desc: '厳選された沖縄の食材をライブ感あふれる空間で調理。上質で活気ある食体験が魅力です。' }
        ],
        reviewPoints: '楽天トラベル評価4.63点、口コミ高評価。「島全体がリゾートで雰囲気が抜群」「プールの居心地が最高でスタッフの気配りも素晴らしい」とカップル・ファミリーに大好評。'
      },
      {
        key: 'onna_renaissance',
        tagline: 'ホテル敷地内でイルカとふれあえるマリンパラダイス！全室バルコニー付き＆充実のアクティビティ',
        detailTitle: 'ルネッサンスリゾートオキナワ —— プライベートビーチとドルフィンラグーン。子供も大人も夢中になれるリゾート',
        features: [
          { title: '敷地内のラグーンでイルカと泳ぎふれあえる独自プログラム', desc: 'ドルフィンプログラムをはじめ40種類以上のマリンスポーツが充実。子供連れファミリーにとって最高の体験が揃っています。' },
          { title: '全客室が海を見晴らすプライベートバルコニー付き', desc: '東シナ海の青い海と夕日を独り占め。ファミリー向けに二段ベッド付きの楽しいファミリールームも完備しています。' },
          { title: '海の上にせり出すレストラン「コーラルシービュー」でのBBQ', desc: '波の音を聞きながら楽しむ本格バーベキューや、出来立てフレンチトーストが名物の朝食ビュッフェが評判です。' }
        ],
        reviewPoints: '楽天トラベル評価4.66点、口コミ2800件超。「子供向けのアクティビティが豊富でイルカ体験に大喜び」「朝食バイキングが最高で連泊しても飽きない」とファミリー層から絶大な支持。'
      }
    ],
    areaGuide: {
      title: '恩納村・万座毛＆青の洞窟・真栄田岬観光ガイド',
      points: [
        { name: '名勝「万座毛（まんざもう）」の象の鼻岩とサンセット', text: '琉球石灰岩の断崖絶壁に打ち寄せる荒波と、象の鼻のような奇岩。夕暮れ時には東シナ海を黄金色に染める絶景の夕日が広がります。' },
        { name: '真栄田岬「青の洞窟」でのシュノーケリング＆ダイビング', text: '太陽光が海底の白砂に反射して青く輝く神秘的な洞窟。色とりどりの熱帯魚やサンゴ礁に囲まれる沖縄屈指の海中アクティビティスポットです。' },
        { name: '琉球村でのおきなわ伝統文化＆紅型・シーサー体験', text: '古民家を移築したテーマパーク。エイサーの演舞見学やシーサー絵付け、サトウキビ搾りなど沖縄の伝統文化を体験できます。' }
      ]
    },
    furusatoStepTitle: '沖縄県恩納村ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「沖縄県恩納村」クーポンを獲得', desc: '楽天ふるさと納税で恩納村を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 那覇空港から沖縄自動車道または空港リムジンバスでアクセス', desc: '那覇空港から車で沖縄自動車道（屋嘉IC）経由で約50分、直行リムジンバスでも約60〜80分。3年間の有効期間内で、夏のビーチや冬の避寒に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: 'ハレクラニ沖縄、ハイアット瀬良垣、ルネッサンスなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-nagoya-luxury-gourmet-stay',
    title: '【名古屋×ふるさと納税】駅直結スカイビュー＆最新ラグジュアリー！ひつまぶし・名古屋コーチン美食特集｜マリオット・TIAD・名古屋観光ホテル',
    desc: '日本三大都市・愛知県名古屋市を楽天ふるさと納税でお得に贅沢ステイ！JR名古屋駅直結・地上200m超の「名古屋マリオットアソシアホテル」、久屋大通公園を望む最新ラグジュアリー「TIAD オートグラフ コレクション」、昭和十一年開業の歴史と格式「名古屋観光ホテル」を徹底比較。名古屋メシとふるさと納税クーポン活用術を網羅。',
    keywords: '名古屋 ふるさと納税,名古屋マリオット ふるさと納税,TIAD クーポン 名古屋,名古屋観光ホテル 宿泊,名古屋市 ふるさと納税 旅行',
    targetCity: '愛知県名古屋市（名駅・栄）',
    leadTitle: '地上数百メートルの摩天楼スカイビューと熱気あふれる名古屋城下の歴史——洗練のラグジュアリーホテルと名古屋メシを堪能する極上シティエスケープ',
    leadP1: '中部地方の経済・文化の中枢であり、徳川御三家筆頭の城下町として栄えた愛知県名古屋市。東京・新大阪から東海道新幹線で最速約35〜50分という抜群のアクセスを誇り、金のシャチホコが輝く「名古屋城」や、三種の神器の一つを祀る「熱田神宮」、緑豊かな「ジブリパーク」など多彩な見どころが集結しています。街中にはひつまぶし、手羽先、味噌カツ、名古屋コーチン、きしめんなど独自の進化を遂げた「名古屋メシ」の食文化が息づいています。',
    leadP2: '名古屋の滞在をさらに格上げするのが、JR名古屋駅真上にそびえる超高層ホテルや、緑豊かな久屋大通公園沿いに誕生した最新インターナショナルホテル。窓一面に広がる煌めく大パノラマ夜景を眺めながら、極上のクラブラウンジや一流シェフのディナーを堪能できます。愛知県名古屋市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れのハイクラスホテルへお得に宿泊でき、観光や記念日ステイを贅沢に満喫できます。',
    hotelsKey: 'furusato-tax-nagoya-luxury-gourmet-stay',
    hotelItems: [
      {
        key: 'nagoya_marriott',
        tagline: 'JR名古屋駅真上・地上200m超のパノラマビュー！圧倒的な利便性と最高峰のクラブラウンジ',
        detailTitle: '名古屋マリオットアソシアホテル —— 名古屋のランドマーク。新幹線改札から直結の摩天楼ステイと極上のおもてなし',
        features: [
          { title: 'JR名古屋駅の直上・JRセントラルタワーズの圧倒的な利便性', desc: '改札からエレベーターで直結。雨に濡れずにチェックインでき、観光やショッピングに最高の拠点です。' },
          { title: '地上200m超の客室から望む名古屋市街と鈴鹿山脈の眺望', desc: '煌めく都市夜景を眼下に一望。上質なインテリアと大理石バスルームが非日常のひとときを演出します。' },
          { title: '地上52階のスカイラウンジ「ジーニス」と多彩な名門レストラン', desc: '鉄板焼き、本格広東料理、フレンチなど一流の味が勢揃い。夜景を眺めながらのディナーは記念日に最適です。' }
        ],
        reviewPoints: '楽天トラベル評価4.64点、口コミ6200件超。「駅直結で便利すぎる、お部屋からの夜景が圧巻」「朝食ビュッフェのオムレツやひつまぶしが最高に美味しい」と大絶賛。'
      },
      {
        key: 'nagoya_tiad',
        tagline: '久屋大通公園の緑を望むマリオット独立系最高峰ブランド！全室50㎡超・テラス付き最新ホテル',
        detailTitle: 'TIAD, Autograph Collection —— 自然と都市が美しく調和。インドアウェルネスプールと洗練のモダンデザイン',
        features: [
          { title: '全室50㎡以上の広さを誇り、バルコニーを備えた開放的な客室', desc: '公園の緑や街並みを望むプライベートテラス。スタイリッシュな家具と最新設備が心地よい寛ぎを約束します。' },
          { title: '自然光が差し込むインドアインフィニティプールとウェルネス', desc: '都会にいながらリゾート気分を味わえる温水プールとジム。極上のウェルネス体験で心身をリフレッシュできます。' },
          { title: 'フレンチと和の技法が融合したオールデイダイニング「Table For Tomorrow」', desc: '愛知・東海の厳選食材を活かしたモダンな料理。オープンキッチンから届く出来立ての味を楽しめます。' }
        ],
        reviewPoints: '楽天トラベル評価4.63点、口コミ高評価。「お部屋が広くてテラスが最高、プールも高級感がある」「スタッフの接客がとても丁寧で洗練された大人のホテル」と評判。'
      },
      {
        key: 'nagoya_kankohotel',
        tagline: '昭和十一年創業・中部の迎賓館として賓客を迎えてきた伝統と格式！伝統のおもてなしと至福のフレンチ',
        detailTitle: '名古屋観光ホテル —— 歴史に裏打ちされた品格。クラシカルな美しさと熟練のホテルマンによる心温まるサービス',
        features: [
          { title: '歴史ある伝統建築とリニューアルされた上質な客室空間', desc: '皇族や国内外の要人に愛されてきたクラシックホテル。気品漂うロビーと落ち着いたインテリアが旅人を包み込みます。' },
          { title: '地下鉄「伏見駅」から徒歩2分・栄や名駅へアクセス抜群', desc: '名古屋のビジネスとショッピングの中心地に位置。御園座や名古屋市美術館への散策にも便利です。' },
          { title: '伝統の技を受け継ぐ老舗フレンチ「エスコフィエ」とライブキッチンブッフェ', desc: '一流の料理人が仕立てるクラシックフレンチや、厳選食材が並ぶ朝食バイキング。本物の美味を堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.55点、口コミ2600件超。「老舗ならではの行き届いた接客とおもてなしに感動」「お部屋の改装が綺麗でベッドも寝心地が良く大満足」と信頼の評価。'
      }
    ],
    areaGuide: {
      title: '名古屋城・本丸御殿＆熱田神宮・大須商店街観光ガイド',
      points: [
        { name: '特別史跡「名古屋城」と復元された豪華絢爛「本丸御殿」', text: '徳川家康が築城した名城。狩野派の障壁画や金箔が輝く本丸御殿の美しさは圧巻。「金シャチ横丁」での名古屋メシ食べ歩きも人気です。' },
        { name: '三種の神器「草薙神剣」を祀る古社「熱田神宮」', text: '鬱蒼とした神苑に抱かれる東海屈指のパワースポット。名物「宮きしめん」や、近隣の「あつた蓬莱軒」でのひつまぶしが定番です。' },
        { name: '活気あふれるアーケード街「大須商店街」＆大須観音', text: '古着、電化製品、多国籍グルメ、老舗和菓子店がひしめく日本一元気な商店街。食べ歩きやカルチャー散策に最適です。' }
      ]
    },
    furusatoStepTitle: '愛知県名古屋市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「愛知県名古屋市」クーポンを獲得', desc: '楽天ふるさと納税で名古屋市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 東海道新幹線で東京から約1時間35分、新大阪から約50分', desc: '新幹線ですぐのアクセス。3年間の有効期間内で、週末のご褒美旅行やコンサート遠征、ジブリパーク観光に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '名古屋マリオット、TIAD、名古屋観光ホテルなどの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-shodoshima-olive-island-onsen-stay',
    title: '【小豆島×ふるさと納税】エンジェルロード＆オリーブの島！瀬戸内海一望の温泉宿特集｜島宿真里・オリビアン小豆島・ベイリゾート',
    desc: '穏やかな瀬戸内海に浮かぶ癒やしの楽園・香川県小豆島（小豆島町・土庄町）を楽天ふるさと納税でお得に島旅！登録有形文化財と名物醤油会席の至高宿「島宿 真里」、夕陽百選を望む絶景露天風呂「オリビアン小豆島 夕陽ヶ丘ホテル」、全室オーシャンビュー＆オリーブ牛の「ベイリゾートホテル小豆島」を徹底比較。小豆島トラベルクーポン活用術を網羅。',
    keywords: '小豆島 ふるさと納税,島宿真里 クーポン,オリビアン小豆島 ふるさと納税,ベイリゾートホテル小豆島 宿泊,小豆島町 ふるさと納税 旅行',
    targetCity: '香川県小豆島（小豆島町・土庄町）',
    leadTitle: 'オリーブの風薫る瀬戸内の多島美と潮の満ち引きがつなぐエンジェルロード——天然温泉と島の豊かな恵みに癒やされる贅沢な島時間',
    leadP1: '瀬戸内海で淡路島に次いで2番目に大きな島・香川県小豆郡小豆島。四方を穏やかな内海に囲まれ、温暖で雨の少ない地中海性気候を活かした「日本初・オリーブ栽培発祥の地」として知られています。干潮時だけに海の中から砂の道が現れる恋人の聖地「エンジェルロード」や、日本三大渓谷美に数えられる「寒霞渓（かんかけい）」のダイナミックな岩峰、400年の歴史を受け継ぐ醤油蔵や手延べそうめんなど、豊かな自然と伝統文化が息づいています。',
    leadP2: '小豆島ステイの大きな魅力は、島内に湧出する良質な天然温泉と、小豆島ならではの唯一無二の食体験。オリーブの絞り粕を食べて育った極上の「オリーブ牛」、瀬戸内海で揚がった鯛やハモ、島伝統の熟成醤油で仕立てる会席料理が心を満たします。香川県小豆島町や土庄町へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの老舗文化財宿や海沿いリゾートへお得に宿泊でき、心ほどける島旅が叶います。',
    hotelsKey: 'furusato-tax-shodoshima-olive-island-onsen-stay',
    hotelItems: [
      {
        key: 'shodoshima_mari',
        tagline: '国の登録有形文化財に泊まる一日数組の隠れ宿！島伝統の醤油蔵文化を味わう伝説の「醤油会席」',
        detailTitle: '島宿 真里 —— 醤の郷の静寂に抱かれる珠玉の宿。自家源泉の温泉風呂と蔵仕込みの醤油が織りなす美食の極み',
        features: [
          { title: '登録有形文化財に指定された歴史ある母屋と趣異なる客室', desc: '梁や柱の温もりを活かした数寄屋の美。客室ごとに設えが異なり、自家源泉の湯を引いた専用風呂でゆったり寛げます。' },
          { title: '自家製醤油や島のオリーブを贅沢に味わう名物「醤油会席」', desc: '二段仕込み醤油や諸味など異なる醤油の風味を楽しむ極上ディナー。島の旬魚や野菜の旨味が極限まで引き出されます。' },
          { title: '醤油樽の木を再利用した大浴場やプライベート貸切温泉', desc: 'ほんのりと木の香りが漂う温泉空間。柔らかな単純温泉に浸かり、旅の疲れを優しく解き放てます。' }
        ],
        reviewPoints: '楽天トラベル評価5.00点、満点評価の伝説宿。「醤油会席が一口ごとに感動の美味しさ」「お部屋、お風呂、接客すべてが最高峰で、日本の旅館の素晴らしさを実感した」と大絶賛。'
      },
      {
        key: 'shodoshima_olivian',
        tagline: '夕陽百選に選ばれる丘の上の絶景リゾート！天然温泉露天風呂と瀬戸内オリーブバイキング',
        detailTitle: 'オリビアン小豆島 夕陽ヶ丘ホテル —— 瀬戸内海の多島美を見晴らす特等席。夕日と美肌温泉に包まれるリゾート',
        features: [
          { title: '瀬戸内海と島々を茜色に染める夕日を望む天然温泉露天風呂', desc: '日本夕陽百選に選出された絶景。phの高いトロトロの美肌の湯に浸かりながら眺めるサンセットは圧巻です。' },
          { title: 'オリーブをふんだんに使った贅沢な和洋中ビュッフェ', desc: 'オリーブ牛や新鮮な海の幸、島野菜を味わうディナー。目の前で焼き上げるステーキや揚げたて天ぷらが人気です。' },
          { title: '広大な敷地内でのテニスやミニゴルフ・ドッグラン', desc: '充実のアウトドアアクティビティ。ペット同伴ルームも備え、家族みんなで自然を満喫できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.49点、口コミ3400件超。「露天風呂からの夕日の絶景に感動した」「お料理のバイキングがとても美味しく、広々としたお部屋でリフレッシュできた」と高評価。'
      },
      {
        key: 'shodoshima_bayresort',
        tagline: '全客室オーシャンビュー＆最上階展望温泉大浴場！オリーブ牛と瀬戸内の旬魚を味わう海辺のホテル',
        detailTitle: 'ベイリゾートホテル小豆島 —— 内海湾を一望するシーサイドリゾート。展望露天風呂と充実の貸切風呂',
        features: [
          { title: '全客室の窓から穏やかな瀬戸内海の内海湾を一望', desc: '朝日や夕暮れの海を部屋にいながら満喫。和室や和洋室など多彩な部屋タイプが揃っています。' },
          { title: '最上階12階に位置する展望露天風呂と5つの貸切温泉風呂', desc: '海を見下ろすパノラマ温泉大浴場。プライベートに楽しめる貸切露天風呂も充実しています。' },
          { title: '小豆島名物「オリーブ牛」や地魚のお造りを味わう会席料理', desc: '柔らかく脂の甘いオリーブ牛ステーキや、新鮮な瀬戸内の旬魚。島の恵みを心ゆくまで堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.29点、口コミ2900件超。「お部屋とお風呂からの海の眺めが素晴らしい」「貸切露天風呂が気持ちよく、オリーブ牛のお料理もとても美味しかった」と好評。'
      }
    ],
    areaGuide: {
      title: '小豆島・エンジェルロード＆寒霞渓ロープウェイ・オリーブ公園観光ガイド',
      points: [
        { name: '1日2回干潮時に現れる砂の道「エンジェルロード（天使の散歩道）」', text: '大切な人と手をつないで渡ると願いが叶うとされる恋人の聖地。弁天島と余島を結ぶ砂浜の道を潮風とともに歩く感動の体験です。' },
        { name: '日本三大渓谷美「寒霞渓（かんかけい）」ロープウェイ', text: '悠久の歳月が創り出した奇岩怪石の断崖絶壁。秋の紅葉、初夏の新緑の中をくぐり抜けるロープウェイからの瀬戸内海パノラマは息をのむ絶景です。' },
        { name: '道の駅 小豆島オリーブ公園（白いギリシャ風車）', text: '約2,000本のオリーブ畑とエーゲ海のような白い風車。魔法のほうきを借りてアニメの主人公のようにジャンプして写真を撮るのが人気です。' }
      ]
    },
    furusatoStepTitle: '香川県小豆島町・土庄町ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「香川県小豆島町」等のクーポンを獲得', desc: '楽天ふるさと納税で小豆島町または土庄町を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 高松港・新岡山港・姫路港・神戸港からフェリーでアクセス', desc: '高松港からフェリーで約60分（高速艇なら約35分）、岡山や姫路、神戸からも直通船が運航。3年間の有効期間内で、気候の穏やかな季節に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '島宿真里、オリビアン小豆島、ベイリゾートホテル小豆島などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
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
    datePublished: '2026-09-11T00:20:00+09:00',
    dateModified: '2026-09-11T00:20:00+09:00',
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
              <Link href="/furusato-tax-hakone-yumoto-gateway-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 箱根湯本温泉 玄関口の極上湯浴み＆老舗名宿特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-fukuoka-hakata-luxury-gourmet-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 福岡・博多 駅直結ラグジュアリー＆天然温泉スパ特集
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
