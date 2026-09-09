const fs = require('fs');
const path = require('path');

const seasonalHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

// 4記事の詳細データ定義 (Round 74)
const articleConfigs = [
  {
    slug: 'furusato-tax-matsutake-autumn-gourmet-kaiseki-stay',
    componentName: 'FurusatoMatsutakeAutumnGourmetStayPage',
    tag: '秋の味覚の王様・極上松茸尽くし会席宿特集',
    title: '本場名産地で味わう極上松茸尽くし会席＆焼き松茸・土瓶蒸しの名門温泉宿×ふるさと納税完全ガイド【2026年最新】信州別所・丹波篠山・京都湯の花',
    metaTitle: '本場名産地で味わう極上松茸尽くし会席＆焼き松茸・土瓶蒸しの名門温泉宿×ふるさと納税完全ガイド【2026年最新】信州別所・丹波篠山・京都湯の花',
    shortTitle: '極上松茸尽くし会席＆名門温泉宿特集',
    description: '秋の最高峰の香りと歯ごたえを本場の名宿で堪能！日本有数の松茸産地・信州上田で創業百有余年の数寄屋美と松茸料理を誇る「別所温泉 かしわや本店」、最高峰ブランド丹波松茸とぼたん鍋で名高い創業四百年の老舗「丹波篠山 近又」、丹波の地松茸会席とオーストリアワイン・名湯に癒やされる「京都 湯の花温泉 すみや亀峰菴」。炭火焼き松茸、香り豊かな土瓶蒸し、松茸ご飯。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '秋の味覚の王様・極上松茸尽くし会席宿特集',
    leadTitle: '炭火の上で立ちのぼる芳醇な薫香、溢れ出す清冽な出汁の旨味。秋だけの至高の贅沢「松茸尽くし会席」の極みへ',
    leadText: '日本の秋の美食文化において、別格の存在感を放つ「秋の味覚の王様・松茸（まつたけ）」。お猪口に注いだ瞬間に立ちのぼる馥郁たる香りにうっとりする「土瓶蒸し」、炭火でじっくりと炙りすだちをキュッと絞っていただくジューシーな「焼き松茸」、サクッとした薄衣の中に瑞々しい香りを閉じ込めた「松茸の天ぷら」、そして蓋を開けた瞬間に歓声が上がる出汁香る「松茸ご飯」――その豊かな香りと独特の心地よい歯ごたえは、日本人の琴線を揺さぶる至高の味覚体験です。アカマツ林が広がり全国屈指の松茸の産地として名高い信州・別所温泉で創業百余年の歴史を誇る名門宿「かしわや本店」、松茸の最高峰として名高い丹波篠山で創業四百年の伝統を守り丹波松茸とジビエを極める「近又」、そして京都の奥座敷・亀岡で丹波の地松茸と名湯・オーストリアワインのマリアージュを提案する大人の隠れ宿「すみや亀峰菴」。秋のわずかな期間に予約が殺到する本場の松茸名旅館を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質自己負担2,000円で賢く予約し、一生モノの秋の美食旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '焼き・土瓶蒸し・天ぷら・すき焼き・ご飯！松茸をあらゆる調理法で味わい尽くす贅沢',
        body: '産地だからこそ叶う惜しみないボリューム。香り豊かな土瓶蒸しから始まり、炭火でジュワッと焼き上げる焼き松茸、信州牛や黒毛和牛と合わせた贅沢な松茸すき焼き、締めくくりの炊きたて松茸釜飯まで、松茸の真価を五感で堪能できます。'
      },
      {
        num: '02',
        title: '香りと鮮度が命！地元のアカマツ林から朝獲れ・当日入荷される極上国産松茸',
        body: '輸入物とは香りの深さとみずみずしさが根本から異なる本場の国産松茸。信州や丹波の山々で名人が朝収穫したばかりの地松茸は、軸の引き締まりと濃厚な薫香が格別で、本物の秋の恵みに出逢えます。'
      },
      {
        num: '03',
        title: '紅葉で染まる山並みと名湯露天風呂！秋の風情に包まれる至極の湯治リトリート',
        body: '信州最古の温泉地・別所温泉の硫黄泉や京都奥座敷の湯の花温泉など、身体の芯から温まる名湯に身を委ね、錦秋の美しい日本庭園を眺めながらいただく松茸会席は、旅の幸福感を最高潮に高めてくれます。'
      }
    ],
    hotelDetails: [
      {
        key: 'bessho_matsutake',
        badge: '長野県上田市・信州松茸の本場！創業百有余年の数寄屋造りと信州牛×松茸会席の名門',
        rank: '厳選名宿 第1選',
        desc: '信州最古の温泉地・別所温泉の北向観音の隣に佇み、百有余年の歴史を刻む数寄屋造りの格調高い老舗名門宿。秋には周辺の山々で採れる良質な信州松茸をふんだんに盛り込んだ「松茸会席」が目玉で、炭火焼きや土瓶蒸し、信州牛とのすき焼きなど贅を尽くした料理が食通を魅了します。全館畳敷きの心地よい空間、四季の彩り豊かな日本庭園を望む客室、ほのかに硫黄の香る弱アルカリ性単純硫黄泉の大浴場や檜露天風呂など、純和風の極上のおもてなしに心から癒やされる秋旅が叶います。'
      },
      {
        key: 'tamba_matsutake',
        badge: '兵庫県丹波篠山市・最高峰丹波松茸の聖地！創業四百年を誇る登録有形文化財の老舗料理旅館',
        rank: '厳選名宿 第2選',
        desc: '日本農業遺産・丹波篠山の城下町に位置し、慶長十四年創業・四百年以上の歴史を誇る国の登録有形文化財の料理旅館。松茸の最高級ブランドとして古来皇室や貴族にも献上されてきた「丹波松茸」を本場で味わう至福の体験を提供。秋には芳醇な薫香が漂う丹波松茸尽くし会席や名物ぼたん鍋との競演が楽しめます。職人の技が息づく繊細な料理と歴史ある佇まい、丹波篠山城跡や古い町並み散策の拠点としても最適で、日本の食文化の頂点を体感できます。'
      },
      {
        key: 'kyoto_matsutake',
        badge: '京都府亀岡市・丹波の地松茸とオーストリアワイン！露天風呂付き客室で過ごす大人の隠れ宿',
        rank: '厳選名宿 第3選',
        desc: '京都の奥座敷・湯の花温泉の豊かな自然に包まれた、大人の静かな休日にふさわしい数寄屋風の名旅館。秋の特別献立では、丹波の山々で採れる朝獲れ地松茸を惜しみなく使用した京会席が登場。ソムリエが厳選するオーストリアワインとのペアリングも提案され、洗練された美食の時間を過ごせます。広々とした露天風呂や専用露天付き客室、ライブラリーラウンジなど上質なファシリティを備え、古都の喧騒を離れて秋の豊かな味覚と温泉に浸る贅沢な滞在が叶います。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-autumn-foliage-open-air-bath-stay', title: '【絶景紅葉露天風呂×ふるさと納税】日光・京都嵐山・箱根の名宿完全ガイド' },
      { slug: 'furusato-tax-fresh-oyster-feast-luxury-gourmet-stay', title: '【名産地牡蠣尽くし会席×ふるさと納税】生牡蠣・焼き牡蠣と名湯の旅' },
      { slug: 'furusato-tax-torafugu-kaiseki-luxury-gourmet-stay', title: '【天然とらふぐ会席×ふるさと納税】てっさ・てっちり・ひれ酒の贅沢宿' },
      { slug: 'furusato-tax-traditional-kamado-rice-irori-stay', title: '【かまど炊きご飯＆囲炉裏料理宿×ふるさと納税】里山の伝統美味と温泉' }
    ]
  },
  {
    slug: 'furusato-tax-lakeview-onsen-resort-hotel-stay',
    componentName: 'FurusatoLakeviewOnsenResortStayPage',
    tag: '湖畔絶景レイクビュー＆インフィニティ露天風呂宿特集',
    title: '静かな湖面と雄大な自然を望む絶景レイクビュー温泉リゾート名門ホテル×ふるさと納税完全ガイド【2026年最新】琵琶湖・洞爺湖・箱根芦ノ湖',
    metaTitle: '静かな湖面と雄大な自然を望む絶景レイクビュー温泉リゾート名門ホテル×ふるさと納税完全ガイド【2026年最新】琵琶湖・洞爺湖・箱根芦ノ湖',
    shortTitle: '絶景レイクビュー温泉リゾート名門ホテル特集',
    description: '鏡のように輝く湖面と移りゆく空の色彩を部屋や露天風呂から一望！全室レイクビューバルコニーと天然温泉を誇る滋賀のシンボル「琵琶湖ホテル」、洞爺湖と水面が一体化するインフィニティ露天風呂が圧巻の「ザ・レイクスイート 湖の栖」、芦ノ湖越しに富士山を望む国登録有形文化財の名門温泉宿「箱根 蛸川温泉 龍宮殿」。開放感あふれる湖畔の特等席ステイを、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '湖畔絶景レイクビュー＆インフィニティ露天風呂宿特集',
    leadTitle: '水鳥が水面をすべる波紋、朝靄に包まれる山並み、夕暮れに輝く黄金の湖面。心澄み渡るレイクサイドリトリートへ',
    leadText: '海のような荒々しい波がなく、静かで穏やかな時間がどこまでも流れる「湖畔（レイクサイド）のリゾートホテル」。遮るもののない広大な水面と、対岸に連なる美しい稜線、そして朝から夕、夜へと刻一刻と表情を変えるグラデーションは、見る人の心を穏やかに解きほぐしてくれます。日本最大の湖・琵琶湖のほとりに建ち、全室バルコニー付き客室と天然温泉「るりの湯」から雄大な湖景を望む「琵琶湖ホテル」、支笏洞爺国立公園の美しいカルデラ湖・洞爺湖にせり出すように造られた最上階のインフィニティ露天風呂が息をのむ「ザ・レイクスイート 湖の栖」、そして芦ノ湖の静寂な湖水越しに霊峰・富士山を一望し、国の登録有形文化財の雅な数寄屋建築を誇る箱根「龍宮殿」。水辺の開放感と良質な天然温泉を心ゆくまで味わうレイクビューの名宿を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して実質自己負担2,000円で賢く予約し、心洗われるリフレッシュ旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '湖面と湯船がシームレスに繋がる「インフィニティ露天風呂」の圧倒的浮遊感',
        body: 'まるで湖に浮かんでいるかのようなインフィニティ設計の展望露天風呂。湯船の縁から溢れ出る温泉が湖水へと溶け込んでいくような錯覚を覚え、大自然と一体化する格別の開放感を体験できます。'
      },
      {
        num: '02',
        title: '全室レイクビュー！部屋のテラスでコーヒーやワインを片手に過ごす贅沢な時間',
        body: 'バルコニーのデッキチェアに身を委ね、行き交う遊覧船や夕陽に照らされる湖面を眺めるひととき。朝には水鳥のさえずりと澄み切った湖風が部屋に吹き込み、日常の疲れを完全に忘れさせてくれます。'
      },
      {
        num: '03',
        title: '近江牛、北海道の海の幸、箱根山麓豚！湖畔エリアならではの厳選ディナー',
        body: '滋賀が誇る三大和牛「近江牛」の鉄板焼き、北海道の豊かな大地と噴火湾の海の恵みを取り入れた創作ビュッフェ、箱根の洗練された会席料理など、旅情を盛り上げる極上の美食が揃っています。'
      }
    ],
    hotelDetails: [
      {
        key: 'biwa_lakeview',
        badge: '滋賀県大津市・全室レイクビューバルコニー付き！天然温泉るりの湯と近江牛ディナー',
        rank: '厳選名宿 第1選',
        desc: '京都駅からJRでわずか約10分、日本最大の湖・琵琶湖のほとりに佇むランドマークホテル。全客室が琵琶湖に面したオーシャンならぬレイクフロントビューで、広々としたプライベートバルコニーから雄大な湖のパノラマを一望できます。館内には自家源泉の天然温泉大浴場「るりの湯」を完備し、琵琶湖を眺めながらゆったりと湯浴みを楽しめます。夕食には滋賀名産の近江牛や湖魚、地元契約農家の無農薬野菜を使ったフレンチ、鉄板焼き、日本料理など多彩な美食を選択可能。都心からのアクセスも良好な上質レイクリゾートです。'
      },
      {
        key: 'toya_lakeview',
        badge: '北海道壮瞥町・洞爺湖と一体化するインフィニティ露天風呂！全室客室温泉露天付きラグジュアリー',
        rank: '厳選名宿 第2選',
        desc: '支笏洞爺国立公園の美しい洞爺湖畔に建ち、湖に突き出すように設計された大人のための最高峰温泉リゾート。最上階に位置する大浴場「星の湯」のインフィニティ露天風呂からは、水盤と洞爺湖、羊蹄山の山並みがシームレスに繋がり、空を飛んでいるかのような圧倒的スケール感を味わえます。全客室に温泉露天風呂と開放的なバルコニーを備え、夏から秋にかけて毎夜開催される「洞爺湖ロングラン花火大会」も部屋の特等席から鑑賞可能。北海道の旬の幸を取り入れたビュッフェや会席料理も極上評価を獲得しています。'
      },
      {
        key: 'ashinoko_lakeview',
        badge: '神奈川県箱根町・芦ノ湖越しに富士山を望む絶景！国登録有形文化財の数寄屋造り名門旅館',
        rank: '厳選名宿 第3選',
        desc: '箱根・芦ノ湖畔に位置し、国の登録有形文化財にも指定されている歴史ある数寄屋造りの名門温泉旅館。宿の最大のハイライトは、広大な芦ノ湖とその向こうにそびえる雄大な霊峰・富士山を同時に眺めることができる絶景パノラマ露天風呂。箱根蛸川温泉の肌触り豊かな名湯に浸かりながら、夕暮れに赤く染まる富士の稜線や湖面のきらめきを愛でる贅沢は唯一無二です。四季折々の旬菜を美しく盛り込んだ伝統の本格会席料理と、歴史の風格漂う雅な和の空間で、日本の美意識を堪能する休日が叶います。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-oceanfront-wave-sound-healing-stay', title: '【オーシャンフロント波音の宿×ふるさと納税】海と温泉が一体化する極上ステイ' },
      { slug: 'furusato-tax-setouchi-island-luxury-ocean-resort-stay', title: '【瀬戸内多島美アイランドリゾート×ふるさと納税】小豆島・鞆の浦・生口島の極上宿' },
      { slug: 'furusato-tax-fujisan-view-luxury-open-air-bath-stay', title: '【富士山ビュー絶景露天風呂×ふるさと納税】河口湖・山中湖の名旅館' },
      { slug: 'furusato-tax-caldera-blue-lake-resort-stay', title: '【カルデラ湖＆青の絶景リゾート×ふるさと納税】摩周・十和田・屈斜路の旅' }
    ]
  },
  {
    slug: 'furusato-tax-scenic-sauna-totonoi-retreat-stay',
    componentName: 'FurusatoScenicSaunaTotonoiStayPage',
    tag: '絶景サウナ＆極上ととのいリトリート温泉宿特集',
    title: '大自然の絶景パノラマとフィンランド式サウナで極上の「ととのい」体験！名宿×ふるさと納税完全ガイド【2026年最新】洞爺湖・白馬・焼津',
    metaTitle: '大自然の絶景パノラマとフィンランド式サウナで極上の「ととのい」体験！名宿×ふるさと納税完全ガイド【2026年最新】洞爺湖・白馬・焼津',
    shortTitle: '絶景サウナ＆ととのいリトリート名宿特集',
    description: 'サウナブームを牽引する全国屈指の絶景サウナ宿を厳選！洞爺湖を眼下に望むオートロウリュサウナと湖風外気浴テラス「洞爺湖万世閣 ホテルレイクサイドテラス」、白馬連峰北アルプスの雄大な山並みを仰ぎながら水風呂と外気浴を楽しむ「白馬ハイランドホテル」、駿河湾と富士山の絶景テラスサウナ＆オールインクルーシブ「焼津グランドホテル」。セルフロウリュ、天然地下水風呂、絶景デッキチェア。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '絶景サウナ＆極上ととのいリトリート温泉宿特集',
    leadTitle: '熱気を帯びた白樺のアロマ、清冽な天然水風呂、そして大自然の風が吹き抜ける外気浴デッキ。至高のディープリラックスへ',
    leadText: '現代のウェルネス・リラクゼーションの最高峰として全国的なブームを巻き起こしている「サウナトリップ（サ旅）」。熱々のサウナ室で心地よい汗を流し、キンキンに冷えた天然地下水の水風呂で身体を引き締め、雄大な自然を望む外気浴スペースで深呼吸する――この温冷交代浴によって訪れる「ととのい（ディープリラックス状態）」は、脳疲労を解消し、五感を劇的に研ぎ澄ましてくれます。洞爺湖を一望する絶景ガラス張りのフィンランドサウナ「月の湯」とセルフロウリュ対応サウナ「星の湯」を誇る「洞爺湖万世閣 ホテルレイクサイドテラス」、雪を冠した北アルプス白馬三山の壮大なパノラマを目前に外気浴ができる長野県「白馬ハイランドホテル」、そして駿河湾の水平線と富士山を見下ろす富士見テラスサウナと贅沢なオールインクルーシブを兼ね備えた静岡県「焼津グランドホテル」。サウナーなら誰もが一度は訪れたい憧れの絶景サウナ温泉宿を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質2,000円で賢く予約し、究極のととのい旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '湖・山・海！ガラス張りのサウナ室から広がる圧倒的な自然パノラマビュー',
        body: '薄暗いサウナ室の大きなピクチャーウィンドウ越しに広がる、青い湖、雪化粧した北アルプス、広大な水平線。刻一刻と変化する大自然の情景を眺めながらじっくりと汗を流す贅沢は、街のサウナでは決して味わえません。'
      },
      {
        num: '02',
        title: '名水掛け流しの天然水風呂＆高原・潮風が吹き抜ける極上の外気浴デッキ',
        body: '雪解け水や伏流水を使用した肌当たりのまろやかな天然水風呂でクールダウンした後は、インフィニティチェアや木製ベンチで外気浴。澄み切った高原の空気や心地よい潮風に包まれ、深い「ととのい」へと導かれます。'
      },
      {
        num: '03',
        title: 'サウナ後の「サ飯」が絶品！地元の名物料理や冷たいクラフトビールで乾杯',
        body: '発汗によって研ぎ澄まされた舌で味わう、北海道のジンギスカンや海鮮、信州蕎麦や黒毛和牛、駿河湾の獲れたてマグロ。キンキンに冷えた地ビールとともに味わう夕食バイキングや会席は格別の美味さです。'
      }
    ],
    hotelDetails: [
      {
        key: 'hokkaido_sauna',
        badge: '北海道壮瞥町・洞爺湖を一望する絶景フィンランドサウナ＆セルフロウリュ！サウナシュラン選出名宿',
        rank: '厳選名宿 第1選',
        desc: '洞爺湖の湖畔に建ち、サウナ愛好家から絶大な支持を集めて「サウナシュラン」にも選出された北のサウナの聖地。最上階の「星の湯」には大きな窓から洞爺湖の絶景を望むセルフロウリュサウナと、水深の深い天然水風呂、爽快な外気浴インフィニティテラスを完備。地下大浴場「月の湯」にはオートロウリュ式サウナや寝湯も備え、趣の異なるサウナを満喫できます。夕食ビュッフェでは石窯ピッツァや北海道産牛ステーキ、搾りたてチーズなど贅沢な料理が並び、心ゆくまで「ととのう」極上のサウナステイが叶います。'
      },
      {
        key: 'nagano_sauna',
        badge: '長野県白馬村・北アルプス白馬連峰パノラマを仰ぐ絶景外気浴！白馬姫川温泉の名湯リゾート',
        rank: '厳選名宿 第2選',
        desc: '北アルプス白馬三山（白馬岳・杓子岳・白馬鑓ヶ岳）の大パノラマを正面に望む絶好の高台に建つ温泉リゾートホテル。宿自慢の露天風呂「天神の湯」に併設されたサウナからは、雄大な山並みを眺めながらじっくりと発汗を楽しめます。北アルプスの雪解け水が育んだ清冽な水風呂で身体を締めた後は、山風が吹き抜けるデッキテラスで絶景を眺めながらの外気浴。保温効果抜群の自家源泉「白馬姫川温泉」との温冷交代浴も最高で、登山やスキー後のリフレッシュにも多くのサウナーに愛されています。'
      },
      {
        key: 'shizuoka_sauna',
        badge: '静岡県焼津市・駿河湾と富士山を望む森のテラスサウナ＆富士山伏流水風呂！オールインクルーシブ宿',
        rank: '厳選名宿 第3選',
        desc: '駿河湾の断崖に位置し、海と富士山の絶景を一望する森と海のリゾートホテル。大浴場「海のお風呂」と「森のお風呂」には本格的なドライサウナを完備し、富士山を望む外気浴デッキで海風を感じながらのディープリラックスが体験できます。さらに館内のドリンクやスイーツ、アクティビティがすべて宿泊料金に含まれるオールインクルーシブスタイルを採用。サウナ上がりにラウンジで静岡クラフトビールやジェラートを味わい、駿河湾の新鮮なマグロを心ゆくまで堪能できる贅沢三昧の休日をお過ごしいただけます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-private-room-sauna-totonoi-villa-stay', title: '【客室専用サウナ＆ととのいヴィラ×ふるさと納税】完全プライベート名宿' },
      { slug: 'furusato-tax-kura-sauna-private-villa-charter-stay', title: '【蔵サウナ＆一棟貸切ヴィラ×ふるさと納税】非日常のととのい空間' },
      { slug: 'furusato-tax-all-inclusive-luxury-onsen-stay', title: '【オールインクルーシブ温泉宿×ふるさと納税】お酒もカフェも追加料金なしの贅沢ステイ' },
      { slug: 'furusato-tax-infinity-onsen-sky-ocean-view-stay', title: '【インフィニティ露天風呂×ふるさと納税】空と海が一体化する絶景宿' }
    ]
  },
  {
    slug: 'furusato-tax-fragrant-hinoki-bath-healing-stay',
    componentName: 'FurusatoFragrantHinokiBathStayPage',
    tag: '木曽ヒノキ＆総檜風呂森林浴温泉宿特集',
    title: '天然ヒノキの香りと美肌温泉に包まれる総檜風呂名旅館×ふるさと納税完全ガイド【2026年最新】信州木曽・伊豆湯ヶ島・熊本黒川',
    metaTitle: '天然ヒノキの香りと美肌温泉に包まれる総檜風呂名旅館×ふるさと納税完全ガイド【2026年最新】信州木曽・伊豆湯ヶ島・熊本黒川',
    shortTitle: '総檜風呂＆森林浴温泉名宿特集',
    description: '木肌の柔らかな感触と、豊かに立ちのぼるヒノキのフィトンチッド。日本古来の癒やしを体現した極上の総檜風呂宿を厳選！木曽ヒノキ発祥の地で樹齢数百年の大名風呂と木曽牛会席を味わう「木曽路の宿 いわや」、猫越川の清流を望む全室源泉かけ流し総檜露天風呂付きの大人の名宿「谷川の湯 あせび野」、細川藩の御前湯の歴史を継ぎ創業三百年を誇る黒川温泉「歴史の宿 御客屋」。五感を解き放つ木の温もりステイを、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '木曽ヒノキ＆総檜風呂森林浴温泉宿特集',
    leadTitle: '湯けむりとともに立ちのぼる清々しい木の薫香、なめらかな木肌に身をあずける贅沢。心洗われる総檜風呂の湯浴みへ',
    leadText: '湯船に足を滑り込ませた瞬間、足裏に伝わるしっとりとなめらかな木の温もり。湯面に反射する柔らかな木目と、湯気とともに鼻腔をくすぐる天然ヒノキの清々しい芳香――「檜（ヒノキ）風呂」は、石造りの浴槽とは一線を画す、日本人にとって特別な安らぎをもたらす伝統的なお風呂です。ヒノキに含まれる精油成分「ヒノキチオール」や「フィトンチッド」には、優れたリラックス効果と抗菌・消臭作用があり、温泉の温熱効果と相まって自律神経を深く整えてくれます。伊勢神宮の御用材としても名高い木曽ヒノキの故郷で創業三百七十余年の歴史を紡ぎ、樹齢数百年の総檜風呂を湛える長野県「木曽路の宿 いわや」、天城連峰の深い森と清流を望み、全室に源泉かけ流しの総檜専用露天風呂を備える伊豆の名宿「谷川の湯 あせび野」、そして黒川温泉で最も古い歴史を持ち、肥後細川藩の御前湯の趣を残す檜風呂と手作り田舎会席が評判の熊本県「歴史の宿 御客屋」。木と湯の恵みに包まれる極上の総檜風呂ステイを、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質自己負担2,000円で賢く予約し、森林浴のような癒やしの温泉旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '天然ヒノキのフィトンチッドによる深いアロマセラピー効果と自律神経の調整',
        body: '温かな湯気に包まれて立ちのぼるヒノキの香りは、森林浴と同等の深いリラクゼーションをもたらし、ストレスホルモンを抑制。優しい木肌の感触が肌を包み込み、心身の疲労を優しく解きほぐします。'
      },
      {
        num: '02',
        title: '石風呂にはない「柔らかな当たり」と保温性！いつまでも浸かっていたい極上の湯浴み',
        body: '熱伝導率が低く保温性に優れたヒノキの浴槽は、お湯の温度をまろやかに保ち、背中や首をあずけたときの木肌の柔らかさが格別。湯上がりのポカポカ感が長く持続します。'
      },
      {
        num: '03',
        title: '山の恵みと郷土の美味！囲炉裏料理や地元ブランド和牛の温もり会席',
        body: '木曽牛やすき焼き、伊豆の猪鍋や山葵料理、肥後あか牛や山菜など、ヒノキの森が育んだ清らかな水と土壌の恵みを活かした滋味あふれる料理が並び、身体の内側から元気を取り戻せます。'
      }
    ],
    hotelDetails: [
      {
        key: 'kiso_hinoki',
        badge: '長野県木曽町・木曽ヒノキ発祥の地！樹齢数百年の大名総檜風呂と創業三百七十余年の老舗名宿',
        rank: '厳選名宿 第1選',
        desc: '中山道・福島宿に位置し、江戸時代初期の寛永年間創業・三百七十余年の歴史を誇る老舗旅館。宿の名物は、伊勢神宮の式年遷宮にも用いられる高級木材「木曽ヒノキ」の樹齢数百年の一枚板を贅沢に使用した大名総檜風呂。浴場全体に広がる清々しいヒノキの香りと柔らかな肌触りの湯に包まれる時間はまさに極楽。夕食には信州名物の木曽牛ステーキや岩魚の塩焼き、季節の山菜料理など、中山道の旅情豊かな郷土会席を堪能できます。木曽路の歴史と豊かな森林文化を肌で感じる名湯旅が叶います。'
      },
      {
        key: 'izu_hinoki',
        badge: '静岡県伊豆市・猫越川の清流を望む全室源泉かけ流し総檜露天風呂付き！大人の隠れ家名宿',
        rank: '厳選名宿 第2選',
        desc: '中伊豆・天城湯ヶ島の豊かな山林を流れる猫越川のほとりに佇む、全国の温泉ファンから絶賛される大人の隠れ宿。全客室のテラスに自家源泉かけ流しの贅沢な総檜専用露天風呂を備え、川のせせらぎと野鳥の声を聴きながら24時間いつでもヒノキの香りと名湯に浸かることができます。館内には渓流沿いの貸切露天風呂や広々とした大浴場も点在。駿河湾の新鮮な海の幸や伊豆の山の幸を取り入れた月替わりの創作会席料理とともに、静寂と贅沢に満ちた究極のプライベートステイをお過ごしいただけます。'
      },
      {
        key: 'kurokawa_hinoki',
        badge: '熊本県南小国町・創業三百年！細川藩の御前湯の歴史を継ぐ総檜風呂と小国郷土料理の宿',
        rank: '厳選名宿 第3選',
        desc: '全国屈指の温泉地・黒川温泉で最も古い歴史を持ち、江戸時代には肥後細川藩の御前湯（藩主専用の温泉）を務めた創業三百年の老舗宿。歴史の重みを感じる本館には、木肌の優しい総檜風呂「御前湯」をはじめ、里の湯や貸切風呂など多彩な湯殿を完備し、良質な単純温泉を源泉かけ流しで満喫できます。夕食には地元小国郷土の味を大切にした肥後赤牛のステーキやすき焼き、契約農家から届く新鮮な野菜を使った手作り田舎会席が並び、温もりあふれる九州の温泉情話に心洗われます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-mountain-stream-open-air-bath-healing-stay', title: '【清流せせらぎ渓流露天風呂×ふるさと納税】奥入瀬・黒川・塩原の絶景癒やし宿' },
      { slug: 'furusato-tax-private-room-open-air-bath-luxury-stay', title: '【客室露天風呂付き客室×ふるさと納税】修善寺・箱根・嵐山の大人の隠れ宿' },
      { slug: 'furusato-tax-three-major-forest-therapy-retreat-stay', title: '【森林セラピー基地＆リトリート温泉宿×ふるさと納税】自然の癒やし旅' },
      { slug: 'furusato-tax-pure-kakenagashi-secret-hotspring-stay', title: '【源泉かけ流し秘湯×ふるさと納税】加水・加温なしの本物の湯力を堪能する名宿' }
    ]
  }
];

function generateFullPageCode(cfg) {
  const pageHotels = seasonalHotels[cfg.slug] || {};

  const threePointsHtml = cfg.threePoints.map(pt => `
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center shrink-0">
                  ${pt.num}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-stone-900 font-serif">
                  ${pt.title}
                </h3>
              </div>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed pl-11">
                ${pt.body}
              </p>
            </div>
  `).join('\n');

  const hotelCardsHtml = cfg.hotelDetails.map((det, idx) => {
    const h = pageHotels[det.key] || {};
    const hotelName = h.hotelName || '提携名門ホテル・旅館';
    const hotelImg = h.hotelImageUrl || 'https://img.travel.rakuten.co.jp/share/HOTEL/18848/18848.jpg';
    const reviewAvg = h.reviewAverage || '4.50';
    const reviewCount = h.reviewCount || '100';
    const address = (h.address1 || '') + (h.address2 || '');
    const access = h.access || '最寄り駅・インターチェンジより車または無料送迎あり';
    const minCharge = h.hotelMinCharge ? Number(h.hotelMinCharge).toLocaleString() : '15,000';
    const planUrl = h.affiliateUrl || `https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F${h.hotelNo}%2F${h.hotelNo}.html`;

    const cleanText = (h.userReview || '')
      .replace(/<[^>]*>/g, '')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/[\\`$"{}]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    const userReview = cleanText
      ? ('「' + cleanText.slice(0, 120) + '…」')
      : '訪れるすべてのお客様に心安らぐ贅沢な寛ぎの時間を提供し、高い評価を獲得している極上宿です。';

    return `
            {/* ホテルカード ${idx + 1} */}
            <article className="bg-white rounded-3xl shadow-lg border border-stone-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src="${hotelImg}"
                  alt="${hotelName}"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-xs border border-amber-400/30">
                  ${det.rank}
                </div>
                <div className="absolute bottom-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1 rounded-md shadow-md">
                  ★ ${reviewAvg} (${reviewCount}件)
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-block text-xs text-amber-800 bg-amber-50 font-semibold px-2.5 py-1 rounded-md mb-2 border border-amber-200/60">
                    ${det.badge}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900 mb-3 leading-snug">
                    ${hotelName}
                  </h3>
                  <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-4 font-normal">
                    ${det.desc}
                  </p>
                  <p className="text-stone-500 text-xs italic bg-stone-50 p-3 rounded-xl border border-stone-100 mb-4 leading-relaxed">
                    ${userReview}
                  </p>
                  
                  <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/60 mb-6 text-xs text-stone-600 space-y-1">
                    <div><strong>所在地:</strong> ${address}</div>
                    <div><strong>アクセス:</strong> ${access}</div>
                    <div><strong>参考宿泊料金:</strong> 1名あたり約${minCharge}円〜（時期・プランによる）</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="${planUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition shadow-sm"
                  >
                    楽天トラベルで空室・プランを見る ➔
                  </a>
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold py-3.5 px-5 rounded-xl text-xs sm:text-sm transition"
                  >
                    ふるさと納税クーポンを使う
                  </a>
                </div>
              </div>
            </article>
    `;
  }).join('\n');

  const relatedListHtml = cfg.relatedArticles.map(rel => `
              <li key="${rel.slug}">
                <Link href="/${rel.slug}" className="group flex items-start gap-2 py-2 px-3 rounded-xl hover:bg-amber-50 transition">
                  <span className="text-amber-600 mt-0.5 text-sm shrink-0">▸</span>
                  <span className="text-stone-700 group-hover:text-amber-800 transition text-sm leading-relaxed">${rel.title}</span>
                </Link>
              </li>
  `).join('\n');

  return `import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

export const metadata: Metadata = {
  title: '${cfg.metaTitle}',
  description: '${cfg.description}',
  keywords: [
    '${cfg.heroTag}',
    'ふるさと納税 旅行',
    '楽天トラベル ふるさと納税',
    '温泉旅館 予約',
    '絶景露天風呂 クーポン',
    '旬の味覚 宿泊割引'
  ],
  alternates: { canonical: baseUrl + '/${cfg.slug}' },
  openGraph: {
    title: '${cfg.metaTitle}',
    description: '${cfg.description}',
    url: baseUrl + '/${cfg.slug}',
    siteName: '旅宿クラウド',
    type: 'article',
  },
};

export default function ${cfg.componentName}() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: '旅行節約ハブ', item: baseUrl + '/travel-savings-guide' },
      { '@type': 'ListItem', position: 3, name: '${cfg.shortTitle}', item: baseUrl + '/${cfg.slug}' },
    ],
  };

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <Link href="/travel-savings-guide" className="hover:text-stone-900 underline transition">旅行節約ハブ</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">${cfg.shortTitle}</span>
        </nav>

        {/* ヒーローヘッダー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            ${cfg.heroTag}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            ${cfg.title}
          </h1>
          <p className="text-stone-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mb-6">
            ${cfg.leadText}
          </p>
          <div className="flex flex-wrap gap-4 pt-4 border-t border-amber-900/50 text-xs text-amber-200/90 font-medium">
            <span>✓ 寄付額の最大30％相当が宿泊クーポンに</span>
            <span>✓ クーポン有効期限は発行からゆとりの3年間</span>
            <span>✓ すでに予約済みの宿泊にも「あとから割引」可能</span>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition transform hover:-translate-y-0.5 text-sm md:text-base border border-amber-400/30"
            >
              楽天ふるさと納税トラベルクーポンを獲得する →
            </a>
            <Link
              href="/furusato-tax-travel-beginners-complete-guide"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-amber-200 font-bold px-5 py-3 rounded-2xl border border-amber-300/20 text-xs sm:text-sm transition"
            >
              📖 初めての方向け完全マニュアル
            </Link>
          </div>
        </header>

        {/* 3つの醍醐味セクション */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-6 flex items-center gap-3">
            <span className="text-amber-600 text-xl md:text-2xl">◆</span>
            この旅で体感したい3つの醍醐味
          </h2>
          <div className="grid gap-6">
${threePointsHtml}
          </div>
        </section>

        {/* 厳選名宿セクション */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-800 mb-3 flex items-center gap-3">
              <span className="text-amber-600 text-xl md:text-2xl">◆</span>
              ふるさと納税で泊まる厳選名宿
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              楽天トラベルAPIから最新の実在宿データを取得。対象自治体のふるさと納税クーポンを利用して実質2,000円で泊まれる名宿です。
            </p>
          </div>

          <div className="space-y-8">
${hotelCardsHtml}
          </div>
        </section>

        {/* ふるさと納税クーポン使い方ステップ */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/80 shadow-sm mb-16">
          <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-800 mb-6 text-center">
            ふるさと納税トラベルクーポンの簡単3ステップ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">1</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">旅行先自治体に寄付</h3>
              <p className="text-xs text-stone-600 leading-relaxed">楽天ふるさと納税で泊まりたい宿がある市町村のトラベルクーポンを選んで寄付します。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">2</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">クーポンが付与される</h3>
              <p className="text-xs text-stone-600 leading-relaxed">寄付完了後、楽天トラベルのマイクーポンに即時〜数日で付与（有効期間は3年間）。</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 text-center">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center mx-auto mb-3">3</div>
              <h3 className="font-bold text-stone-900 text-sm mb-2">予約時に割引適用</h3>
              <p className="text-xs text-stone-600 leading-relaxed">宿泊予約画面でクーポンを選択。すでに予約済みの宿でも「あとから適用」が可能です。</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/furusato-tax-travel-beginners-complete-guide"
              className="text-amber-800 font-bold text-xs sm:text-sm hover:underline"
            >
              👉 詳しいお金の流れやワンストップ特例の手順はこちらの完全マニュアルへ
            </Link>
          </div>
        </section>

        {/* 関連特集クロスリンク */}
        <section className="bg-stone-50 rounded-3xl p-8 border border-stone-200/80 mb-16">
          <h2 className="text-lg md:text-xl font-bold font-serif text-stone-800 mb-4">
            あわせて読みたい関連特集
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2">
${relatedListHtml}
          </ul>
        </section>

        {/* ハブページへの誘導フッター */}
        <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-amber-900/40 text-center mb-12">
          <h2 className="text-xl sm:text-2xl font-bold font-serif mb-3 text-amber-50">
            もっとお得に旅を楽しむためのハブページへ
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mb-6 max-w-xl mx-auto">
            全国のテーマ別宿特集や、旅行費を最大30％安くする裏ワザを網羅した総合ガイドを公開中。
          </p>
          <Link
            href="/travel-savings-guide"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-black px-7 py-3.5 rounded-2xl shadow-xl hover:opacity-95 transition text-sm"
          >
            🏨 旅行節約総合ハブページを見る ➔
          </Link>
        </div>

        {/* フッター */}
        <footer className="text-center text-xs text-stone-400 pt-6 border-t border-stone-200">
          <p>※表示内容は2026年9月時点の情報です。最新の宿泊プラン・クーポン対象施設は楽天トラベルにてご確認ください。</p>
          <p className="mt-2">
            <Link href="/" className="text-stone-500 hover:text-stone-800 underline transition">旅宿クラウド トップページへ</Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
`;
}

// 4記事のファイルを書き出し
for (const cfg of articleConfigs) {
  const targetDir = path.join(__dirname, 'src/app', cfg.slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const code = generateFullPageCode(cfg);
  fs.writeFileSync(path.join(targetDir, 'page.tsx'), code, 'utf8');
  console.log(`Generated: ${cfg.slug}/page.tsx (Chars: ${code.length})`);
}

console.log('Finished generating all 4 articles for Round 74!');
