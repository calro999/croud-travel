const fs = require('fs');
const path = require('path');

const round107Hotels = JSON.parse(fs.readFileSync('round107_hotels.json', 'utf8'));

// Format hotel lookup map
const allHotels = round107Hotels;

const articles = [
  {
    slug: 'furusato-tax-kyoto-station-luxury-convenience-stay',
    title: '【京都駅直結×ふるさと納税】新幹線直結＆抜群のアクセス！古都観光の特等席名門ホテル特集｜グランヴィア京都・ザサウザンド京都・リーガロイヤル',
    desc: '新幹線を降りたらすぐチェックイン！京都観光・出張の最強拠点・京都府京都市「京都駅周辺」を楽天ふるさと納税でお得に贅沢ステイ。JR京都駅烏丸口直結のランドマーク「ホテルグランヴィア京都」、現代の茶室をテーマにした癒やしの館「ザ・サウザンド京都」、京都唯一の回転展望レストランを擁する「リーガロイヤルホテル京都」を徹底比較。京都市トラベルクーポン活用術を網羅。',
    keywords: '京都駅 ホテル ふるさと納税,グランヴィア京都 ふるさと納税,ザサウザンド京都 クーポン,リーガロイヤルホテル京都 宿泊,京都市 ふるさと納税 旅行',
    targetCity: '京都府京都市（京都駅周辺）',
    leadTitle: '新幹線ホームから直行できる極上の利便性と千年の都の美意識——手荷物を預けて身軽に巡る贅沢な京都ステイ',
    leadP1: '東海道新幹線をはじめJR各線、近鉄、地下鉄、そして市内全域へ網の目のように伸びる市バスの起終点である「京都駅」。原広司氏設計の壮大なガラスと鉄骨のアトリウムが迎えるこの巨大ターミナルは、千年の歴史を誇る古都への第一歩となる象徴的な空間です。駅周辺には京都タワーや東本願寺、西本願寺、東寺の五重塔が徒歩圏内に位置し、嵐山、祇園、清水寺、金閣寺など市内のあらゆる名所へスムーズにアクセスできます。',
    leadP2: '京都駅直結・至近のハイクラスホテルに滞在する最大のメリットは、チェックイン前後に重いスーツケースを預けてすぐに観光へ繰り出せる圧倒的なタイムパフォーマンスと、夜遅くまで京都の美食を堪能できる安心感。夕食には老舗料亭が手掛ける本格京懐石や、京都の夜景を一望する鉄板焼き・フレンチをゆったり楽しめます。京都府京都市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの名門ホテルへお得に宿泊でき、特別な記念日や観光旅行が最高にスマートになります。',
    hotelsKey: 'furusato-tax-kyoto-station-luxury-convenience-stay',
    hotelItems: [
      {
        key: 'kyoto_granvia',
        tagline: 'JR京都駅烏丸口直結！改札から雨に濡れずにチェックインできる京都随一のランドマークホテル',
        detailTitle: 'ホテルグランヴィア京都 —— 駅直結の圧倒的ロケーション。大パノラマの客室と充実のレストラン＆プール',
        features: [
          { title: 'JR京都駅の駅ビル内に位置する抜群のアクセスと利便性', desc: '新幹線中央口やJR在来線西口から直結。天候を気にせずチェックインでき、観光やビジネスの拠点として最強の立地です。' },
          { title: '京都タワーや京都市街を一望する高層階からの絶景ビュー', desc: '開放感あふれる大きな窓から広がる古都の夜景。上質なアメニティと広々としたベッドが上質な眠りを誘います。' },
          { title: '本格京懐石「浮橋」やビュー＆ダイニングなど多彩な名店', desc: '京都の旬の味覚を散りばめた四季折々の会席料理や、シェフが目の前で焼き上げる鉄板焼きディナーを優雅に堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.47点、口コミ6200件超。「駅直結で荷物預けもスムーズ、立地が最高すぎる」「スタッフのホスピタリティとお部屋からの京都タワーの眺めが素晴らしい」と絶賛。'
      },
      {
        key: 'kyoto_thousand',
        tagline: '京都駅中央口から徒歩2分！千年の都の知恵息づく「現代の茶室」のような静謐なる隠れ家ラグジュアリー',
        detailTitle: 'ザ・サウザンド京都 —— 光と緑、心地よい静けさ。茶道や禅の美意識を取り入れた大人の極上ウェルネスホテル',
        features: [
          { title: '駅前にありながら喧騒を忘れさせる緑豊かなアプローチと大階段', desc: 'ロビーへと続く壮大な階段と柔らかな光の演出。都会の真ん中にいることを忘れるような静寂な非日常空間です。' },
          { title: '引き算の美学を取り入れたミニマルで洗練された快適客室', desc: '自然素材を多用したぬくもりあるインテリア。全室バストイレ別で、独立した洗い場付きバスルームを完備しています。' },
          { title: '京都の出汁文化を活かした日本料理「KIZAHASHI」とイタリアン', desc: '厳選された旬の食材を繊細な感性で仕立てるイノベーティブな料理。お茶のペアリングなど独自の食体験が魅力です。' }
        ],
        reviewPoints: '楽天トラベル評価4.60点、口コミ高評価。「ロビーの階段とお部屋の雰囲気がとにかくおしゃれ」「静かで落ち着いた空間とお料理の美味しさに感動した」と大人気。'
      },
      {
        key: 'kyoto_rihga',
        tagline: '京都唯一の回転展望フレンチレストラン「トップ オブ キョウト」！伝統のおもてなしと名門の風格',
        detailTitle: 'リーガロイヤルホテル京都 —— 古都を見下ろす360度パノラマ。名門ホテルの伝統とおもてなしの心',
        features: [
          { title: '全席窓側・360度ゆっくり回転しながら夜景を望むフレンチレストラン', desc: '京都の街並みや五重塔、周囲の山々をぐるりと一望。特別な記念日やプロポーズにふさわしい伝説のダイニングです。' },
          { title: '和の趣を現代風に昇華させた落ち着きあるリニューアル客室', desc: '西陣織や唐紙など京都の伝統工芸をモチーフにした上質な設え。ゆったりとした広さで旅の疲れを心地よく癒やせます。' },
          { title: '京都駅から無料シャトルバス運行・充実の屋内温水プール＆サウナ', desc: '京都駅八条口からホテルまで専用シャトルバスが随時運行。大型駐車場も完備し、マイカー旅行にも安心です。' }
        ],
        reviewPoints: '楽天トラベル評価4.26点、口コミ4800件超。「回転レストランからの夜景がロマンチックで最高」「スタッフの接客がとても親切丁寧で、シャトルバスも便利」と高い満足度。'
      }
    ],
    areaGuide: {
      title: '京都駅ビル・東寺五重塔＆東本願寺・渉成園観光ガイド',
      points: [
        { name: '京都駅ビル「大階段グラフィカルイルミネーション」＆空中径路', text: '171段の大階段を彩るLEDイルミネーションと、地上45mの空中径路から見下ろす京都の夜景。駅自体が巨大な観光スポットです。' },
        { name: '世界文化遺産「東寺（教王護国寺）」の日本一高い木造五重塔', text: '京都駅から徒歩約15分。高さ約55mの五重塔や講堂の立体曼荼羅、春の不二桜・秋の紅葉ライトアップは圧巻の美しさです。' },
        { name: '東本願寺の阿弥陀堂・御影堂門と国の名勝「渉成園（枳殻邸）」', text: '世界最大級の木造建築である東本願寺御影堂。隣接する渉成園の池泉回遊式庭園では、四季折々の花々と静寂の散策が楽しめます。' }
      ]
    },
    furusatoStepTitle: '京都府京都市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「京都府京都市」クーポンを獲得', desc: '楽天ふるさと納税で京都市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 東海道新幹線・JR線で京都駅へアクセス', desc: '東京駅から東海道新幹線「のぞみ」で約2時間15分、新大阪駅からわずか約15分。3年間の有効期間内で、桜・紅葉・青もみじ・冬の雪景色に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: 'ホテルグランヴィア京都、ザ・サウザンド京都、リーガロイヤルホテル京都などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-tokyo-station-marunouchi-luxury-stay',
    title: '【東京駅・丸の内×ふるさと納税】重要文化財駅舎＆皇居ビュー！日本の中心で味わう最高峰ホテル特集｜東京ステーションホテル・パレスホテル・帝国ホテル',
    desc: '日本の表玄関・東京都千代田区（東京駅・丸の内・大手町・日比谷）を楽天ふるさと納税でお得に贅沢ステイ！国指定重要文化財の赤レンガ駅舎内「東京ステーションホテル」、皇居外苑の緑を望む世界最高峰「パレスホテル東京」、日本の迎賓館「帝国ホテル 東京」を徹底比較。千代田区ふるさと納税トラベルクーポン活用術を網羅。',
    keywords: '東京駅 ホテル ふるさと納税,東京ステーションホテル クーポン,パレスホテル東京 ふるさと納税,帝国ホテル東京 宿泊,千代田区 ふるさと納税 旅行',
    targetCity: '東京都千代田区（東京駅・丸の内）',
    leadTitle: '赤レンガ駅舎の歴史と皇居外苑の美しい杜——世界最高峰のサービスと美食に包まれる日本の中枢ラグジュアリーステイ',
    leadP1: '東京都千代田区、日本の政治・経済・交通の中心地である東京駅・丸の内エリア。大正三年（1914年）に創建され、戦災復興を経て創建当時の優美な姿へと復原された辰野金吾設計の赤レンガ駅舎（丸の内駅舎）は、国の重要文化財に指定されています。丸の内仲通りの洗練された街路樹やブランドショップ、皇居外苑の広大な緑と濠、三菱一号館美術館など、歴史と最先端の文化が融合した日本屈指のプレステージエリアです。',
    leadP2: '東京駅・丸の内エリアのホテル滞在は、世界中から賓客を迎えてきた日本最高峰のホスピタリティを五感で体感できる極上の時間。重要文化財のドームを間近に見下ろす客室や、皇居の緑と丸の内の摩天楼を見渡すテラス付きスイートで、優雅なティータイムや至高のディナーを満喫できます。東京都千代田区へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの格式高きグランドホテルへお得に宿泊でき、特別な記念日や東京観光が一生忘れられない思い出になります。',
    hotelsKey: 'furusato-tax-tokyo-station-marunouchi-luxury-stay',
    hotelItems: [
      {
        key: 'tokyo_stationhotel',
        tagline: '国指定重要文化財・東京駅丸の内駅舎の中に泊まる唯一無二の体験！クラシックホテルの最高峰',
        detailTitle: '東京ステーションホテル —— 百年の物語を紡ぐ名門。高い天井と優美なヨーロピアンクラシック空間',
        features: [
          { title: '東京駅丸の内駅舎のドームサイドや駅前広場を望む特別な客室', desc: '創建当時のレリーフを窓から眺める「ドームサイド」など唯一無二の部屋。防音性も極めて高く、驚くほどの静寂が広がります。' },
          { title: '川端康成や松本清張ら文豪に愛された歴史と気品あふれる調度品', desc: '原稿用紙をモチーフにしたメモ帳など文学の香り漂う演出。細部までこだわり抜かれた上質なインテリアが魅力です。' },
          { title: '駅舎中央最上階のアトリウムで味わう伝説の朝食ブッフェ', desc: '天窓から自然光が注ぐ広大な空間で味わう約100種類の贅沢朝食。出来立ての和洋料理やスイーツが絶品です。' }
        ],
        reviewPoints: '楽天トラベル評価4.83点、口コミ絶賛の最高峰。「重要文化財の中に泊まる特別感とお部屋のクラシカルな美しさに感動」「朝食ブッフェの美味しさとスタッフの対応が別格」と憧れの宿。'
      },
      {
        key: 'tokyo_palacehotel',
        tagline: '皇居外苑の豊かな緑とお濠を望む抜群のロケーション！フォーブス・トラベルガイド5つ星の至高ホテル',
        detailTitle: 'パレスホテル東京 —— 水と緑に寄り添うおもてなしの美学。皇居を見晴らすバルコニー付き客室と最高峰ダイニング',
        features: [
          { title: '大手町駅直結・皇居の濠に面した都心屈指のパノラマビュー', desc: '多くの客室に都内では希少なオープンエアテラスを完備。爽やかな風を感じながら白鳥が遊ぶお濠や皇居の緑を眺められます。' },
          { title: 'フォーブス・トラベルガイドで最高ランク「5つ星」を連続獲得', desc: '世界が認めた洗練のホスピタリティ。細やかな心配りと温もりあふれるサービスで、極上の寛ぎが約束されます。' },
          { title: '名物「マロンシャンテリー」やミシュラン星付きフレンチ「エステール」', desc: '伝統のスイーツからアラン・デュカス監修の現代フランス料理まで。美食家たちを魅了し続ける多彩な名店が揃っています。' }
        ],
        reviewPoints: '楽天トラベル評価4.71点、口コミ高評価。「テラスからの皇居の景色が美しく、都会のオアシスそのもの」「スタッフの立ち振る舞いが完璧で最高のご褒美になった」と大絶賛。'
      },
      {
        key: 'tokyo_imperial',
        tagline: '明治二十三年開業・日本の迎賓館として歴史を刻んできた名門！伝統のローストビーフとおもてなし',
        detailTitle: '帝国ホテル 東京 —— 日本のホテル文化の原点。伝統のサービスと最新の快適性が融合する最高峰グランドホテル',
        features: [
          { title: '日比谷公園や銀座、丸の内へ徒歩すぐのプレステージ立地', desc: '観劇やショッピング、散策に最高のロケーション。重厚感あふれるロビーと美しい装花が旅人を優雅に迎えます。' },
          { title: 'フランク・ロイド・ライトの思想を受け継ぐ格式高い建築美と客室', desc: '静寂と機能性を追求した落ち着きある客室。細部まで行き届いた清掃と上質なリネンが心地よい眠りを届けます。' },
          { title: '名門フレンチ「レ セゾン」や元祖バイキング「インペリアルバイキング サール」', desc: 'バイキング発祥の地として名高いビュッフェや伝統のローストビーフ。一流シェフが織りなす伝統の味を堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.70点、口コミ3000件超。「老舗ならではの安心感とスタッフのプロフェッショナルな対応に感動」「バイキングのローストビーフが絶品で一生の思い出になった」と信頼の評価。'
      }
    ],
    areaGuide: {
      title: '東京駅丸の内駅舎・丸の内仲通り＆皇居外苑・丸ビル観光ガイド',
      points: [
        { name: '東京駅丸の内駅舎ドーム天井の干支レリーフとライトアップ', text: '大正創建当時の姿に蘇った八角形ドーム天井の彫刻。日没後にオレンジ色に照らし出される赤レンガ駅舎の夜景は息をのむ美しさです。' },
        { name: '丸の内仲通りの街路樹散策とオープンカフェ・イルミネーション', text: '石畳の美しい並木道。冬には約120万球のシャンパンゴールドのLEDで輝く「丸の内イルミネーション」が街をロマンチックに彩ります。' },
        { name: '皇居外苑「二重橋」散策と和田倉噴水公園', text: '歴史を感じる楠木正成像や二重橋の風景。お濠端の遊歩道を歩きながら、都心の摩天楼と緑豊かな杜のコントラストを楽しめます。' }
      ]
    },
    furusatoStepTitle: '東京都千代田区ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「東京都千代田区」クーポンを獲得', desc: '楽天ふるさと納税で千代田区を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 東京駅・大手町駅・有楽町駅へダイレクトアクセス', desc: '新幹線やJR線、地下鉄各線からすぐ。3年間の有効期間内で、特別な誕生日や結婚記念日、東京観光に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '東京ステーションホテル、パレスホテル東京、帝国ホテル東京などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-tokyo-asakusa-skytree-view-stay',
    title: '【浅草・スカイツリー×ふるさと納税】雷門の情緒＆大迫力のタワービュー！下町名湯＆最新ホテル特集｜浅草ビューホテル・THE GATE HOTEL・御宿野乃',
    desc: '江戸情緒と最先端のタワーが交差する東京屈指の観光地・東京都台東区「浅草」を楽天ふるさと納税でお得に満喫！東京スカイツリーと浅草寺を一望する「浅草ビューホテル アネックス 六区」、雷門徒歩2分の洗練デザイナーズ「THE GATE HOTEL 雷門 by HULIC」、全館畳敷き＆黒湯天然温泉の「天然温泉 凌雲の湯 御宿 野乃 浅草」を徹底比較。台東区トラベルクーポン活用術を網羅。',
    keywords: '浅草 ホテル ふるさと納税,浅草ビューホテル クーポン,THE GATE HOTEL 雷門 ふるさと納税,御宿野乃 浅草 宿泊,台東区 ふるさと納税 旅行',
    targetCity: '東京都台東区（浅草・上野）',
    leadTitle: '朱塗りの雷門と仲見世通りの賑わい、天高くそびえる東京スカイツリー——下町の歴史浪漫と黒湯天然温泉に癒やされる東京エスケープ',
    leadP1: '東京都台東区、隅田川の西岸に広がる東京最古の寺院・浅草寺の門前町として栄えた「浅草」。大提灯が掲げられた「雷門」をくぐれば、日本最古の商店街の一つである「仲見世通り」が続き、人形焼やすりたて抹茶スイーツ、揚げまんじゅうなどの食べ歩きが楽しめます。背後には高さ634mの「東京スカイツリー」がそびえ立ち、伝統的な下町情緒と近未来的な都市景観が織りなす独特の景観は世界中の観光客を惹きつけてやみません。',
    leadP2: '浅草滞在の魅力は、日中の賑わいが去った早朝や夜の静かな境内を独り占めできる散策体験と、スカイツリーが目の前に迫る絶景バルコニーやバーラウンジ。さらに近年は地下深くから湧き出す本格的な「黒湯天然温泉」を楽しめる宿も登場し、東京観光の疲れを名湯で癒やす贅沢が叶います。東京都台東区へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの絶景ホテルや和風温泉宿へお得に宿泊でき、特別な東京の休日が実現します。',
    hotelsKey: 'furusato-tax-tokyo-asakusa-skytree-view-stay',
    hotelItems: [
      {
        key: 'asakusa_viewhotel',
        tagline: '浅草六区の伝統文化を体験できる和モダンホテル！スカイツリービューと歌舞伎・芸能の空間',
        detailTitle: '浅草ビューホテル アネックス 六区 —— 浅草芸能の歴史を受け継ぐ新ホテル。スカイツリーの絶景と粋な和のおもてなし',
        features: [
          { title: '客室の窓から東京スカイツリーと浅草の街並みを一望', desc: '畳スペースを設けたモダン和室。夜にはライトアップされたスカイツリーの煌めきをプライベートに眺められます。' },
          { title: '1階ロビーの舞台で上演される伝統芸能や浅草文化体験', desc: '和楽器演奏や活弁などのイベントを開催。ホテル内にいながら浅草の下町文化や芸能を肌で感じられます。' },
          { title: '「ブロードウェイ六区」での浅草銘菓や焼きたてパンの朝食', desc: '地元の老舗パンや浅草の味覚を取り入れたこだわりブレックファスト。清々しい気分で浅草観光へ出発できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.50点、口コミ高評価。「スカイツリーの眺めが最高で、お部屋も和モダンで清潔」「浅草寺や花やしきへのアクセスが抜群でスタッフも親切」と好評。'
      },
      {
        key: 'asakusa_gatehotel',
        tagline: '雷門まで徒歩2分！13階ロビーから浅草寺とスカイツリーを見晴らすデザイナーズホテルの傑作',
        detailTitle: 'THE GATE HOTEL 雷門 by HULIC —— 浅草の特等席。大人の隠れ家バーと絶景レストラン',
        features: [
          { title: '13階フロントロビーとオープンエアテラスからの息をのむ大パノラマ', desc: 'チェックインの瞬間に出会うスカイツリーと浅草寺の絶景。宿泊者専用テラスで潮風を感じながら夜景を楽しめます。' },
          { title: '世界的デザイナーの内田繁氏が手がけた洗練の客室インテリア', desc: 'スランバーランド社製高級ベッドと上質な調度品。大人の落ち着きある空間で贅沢な寛ぎを満喫できます。' },
          { title: '評判の焼きたてエッグベネディクト＆搾りたてオレンジジュースの朝食', desc: '東京のホテル朝食ランキング上位の極上モーニング。絶景を眺めながら優雅な朝のひとときを過ごせます。' }
        ],
        reviewPoints: '楽天トラベル評価4.45点、口コミ2500件超。「13階からのスカイツリーの眺めが圧巻」「朝食のエッグベネディクトが絶品で、雷門のすぐそばで観光に便利」と大人気。'
      },
      {
        key: 'asakusa_nono',
        tagline: '全館畳敷きの和風プレミアムホテル！ミネラル豊富な「黒湯」天然温泉大浴場と名物いくら丼',
        detailTitle: '天然温泉 凌雲の湯 御宿 野乃 浅草 —— 都会で温泉旅館気分。素足で寛ぐ畳空間と漆黒の自家源泉',
        features: [
          { title: '靴を脱いで素足で過ごす全館畳敷きの心地よい和風空間', desc: '玄関で靴を預けて館内へ。日本の旅館の温もりとビジネスホテルの快適性が見事に融合しています。' },
          { title: '地下から湧出するミネラル豊富な「黒湯」の天然温泉大浴場', desc: '美肌効果の高い濃い琥珀色の天然温泉。サウナや水風呂も完備し、本格的な温活とリフレッシュが叶います。' },
          { title: 'いくら盛り放題の豪華海鮮丼や名物「夜鳴きそば」サービス', desc: '朝食バイキングでのいくらや旬魚のセルフ海鮮丼。夜には無料で振る舞われる特製醤油ラーメンが大人気です。' }
        ],
        reviewPoints: '楽天トラベル評価4.43点、口コミ2600件超。「黒湯の天然温泉がとても気持ちよくサウナも最高」「朝食のいくら丼が豪華で、全館畳敷きなのが落ち着く」と高評価。'
      }
    ],
    areaGuide: {
      title: '浅草寺・仲見世通り＆かっぱ橋道具街・隅田公園観光ガイド',
      points: [
        { name: '都内最古の寺院「浅草寺」の本堂参拝とおみくじ散策', text: '本尊の聖観世音菩薩を祀る名刹。夜のライトアップされた五重塔や宝蔵門の静けさは、宿泊者だけが出会える幻想的な風景です。' },
        { name: '仲見世通り＆伝法院通りの下町グルメ食べ歩き', text: '揚げまんじゅう、きびだんご、メロンパン、芋ようかんなど名物スイーツが勢揃い。着物をレンタルして散策するのも人気です。' },
        { name: '隅田川テラス散策と水上バス「ヒミコ」でのクルーズ', text: '隅田川沿いの爽やかな遊歩道。漫画家・松本零士氏デザインの近未来水上バスに乗って、お台場や浜離宮へのリバークルーズが楽しめます。' }
      ]
    },
    furusatoStepTitle: '東京都台東区ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「東京都台東区」クーポンを獲得', desc: '楽天ふるさと納税で台東区を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 地下鉄銀座線・都営浅草線・つくばEXPで浅草へアクセス', desc: '上野駅から銀座線でわずか5分、羽田・成田空港からも都営浅草線直通で便利。3年間の有効期間内で、浅草三社祭や隅田川花火大会に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '浅草ビューホテル、THE GATE HOTEL 雷門、御宿野乃浅草などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
    ]
  },
  {
    slug: 'furusato-tax-nara-park-heritage-luxury-stay',
    title: '【奈良公園×ふるさと納税】世界遺産の大仏＆若草山の緑！クラシックホテルと露天風呂ヴィラ特集｜奈良ホテル・ふふ奈良・JWマリオット',
    desc: '千三百年余の時を刻む古都・奈良県奈良市（奈良公園周辺）を楽天ふるさと納税でお得に贅沢ステイ！明治四十二年創業「関西の迎賓館」として愛される「奈良ホテル」、奈良公園の杜に佇む隈研吾建築「ふふ 奈良」、日本初の最高峰ラグジュアリー「JWマリオット・ホテル奈良」を徹底比較。奈良市ふるさと納税トラベルクーポン活用術を網羅。',
    keywords: '奈良公園 ホテル ふるさと納税,奈良ホテル クーポン,ふふ奈良 ふるさと納税,JWマリオット奈良 宿泊,奈良市 ふるさと納税 旅行',
    targetCity: '奈良県奈良市（奈良公園周辺）',
    leadTitle: '神の使いの鹿たちが遊ぶ緑豊かな杜と国宝の大仏殿——悠久の古都で味わうクラシックの風格とプライベート温泉ステイ',
    leadP1: '平城京遷都から千三百年以上の歴史を紡ぐ古都・奈良県奈良市。若草山の麓、約660ヘクタールにおよぶ広大な「奈良公園」には、世界遺産に登録された東大寺の大仏殿や興福寺の五重塔、春日大社の朱塗りの社殿が点在し、約1,300頭の野生のニホンジカが国の天然記念物として穏やかに暮らしています。春の桜、初夏の新緑、秋の紅葉、冬の澄んだ空気と、四季折々に幽玄な美しさをたたえています。',
    leadP2: '奈良に泊まる醍醐味は、日帰りの観光客が引き揚げた後の夕暮れや早朝の静寂。澄み切った朝の光の中で鹿たちと出会い、静かな境内を散策する時間は宿泊者だけの特権です。夕食には大和牛や大和肉鶏、三輪そうめん、奈良漬、地元野菜を取り入れた極上の大和懐石やフレンチを堪能できます。奈良県奈良市へのふるさと納税を利用すれば、30%相当の楽天トラベルクーポンにより憧れの老舗クラシックホテルや露天風呂付きリゾートへお得に宿泊でき、心洗われる歴史旅が叶います。',
    hotelsKey: 'furusato-tax-nara-park-heritage-luxury-stay',
    hotelItems: [
      {
        key: 'nara_narahotel',
        tagline: '明治四十二年創業・「関西の迎賓館」と謳われた名門！アインシュタインやオードリー・ヘプバーンが愛した本館',
        detailTitle: '奈良ホテル —— 辰野金吾が手がけた木造建築の最高峰。名画や調度品に囲まれるクラシカルステイ',
        features: [
          { title: '吉野杉をふんだんに使った桃山風御殿造りの登録有形文化財本館', desc: '吹き抜けのマントルピースや鳥居型シャンデリア。歴史の息吹が宿る重厚な空間が旅人を明治・大正の浪漫へと誘います。' },
          { title: '荒池のほとりに位置し奈良公園・東大寺へ徒歩すぐの好立地', desc: '朝の澄んだ空気の中で鹿が庭を散歩する風景。興福寺やならまちの古い町並み散策にも最高の拠点です。' },
          { title: 'メインダイニング「三笠」での伝統の本格フランス料理ディナー', desc: '創業以来受け継がれてきた格式高いフレンチ。歴代料理長が磨き上げた極上のソースと旬の美味を味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.63点、口コミ2600件超。「建物の歴史と気品に圧倒された、まさに文化財に泊まる体験」「三笠でのディナーも朝食の茶粥も素晴らしく至福の時間だった」と大絶賛。'
      },
      {
        key: 'nara_fufu',
        tagline: '世界的建築家・隈研吾氏が設計！全室に天然温泉露天風呂を備えた奈良公園の杜に溶け込む至高宿',
        detailTitle: 'ふふ 奈良 —— 庭園の木々に包まれるプライベートリゾート。全室温泉露天付きスイートと大和の恵み',
        features: [
          { title: 'すべての客室に薬草湯の香りが漂う天然温泉露天風呂を完備', desc: 'プライベートな露天風呂で心ゆくまで名湯に浸かる贅沢。鳥のさえずりと風の音に包まれる至極の癒やしです。' },
          { title: '日本庭園「瑜伽山園地（ゆうずえんち）」に隣接する静謐な立地', desc: '木や和紙を贅沢に使ったモダン和の美学。自然と建築が美しく調和した贅沢なプライベート空間です。' },
          { title: '大和野菜や厳選牛を取り入れた日本料理「滴翠（てきすい）」', desc: '奈良の歴史や薬膳の思想を取り入れた繊細な懐石料理。個室食事処でゆったりと五感で味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.79点、口コミ極めて高評価。「お部屋の露天風呂とお庭の景色が最高で完璧なプライベート感」「お料理がどれも美味しく、スタッフの気配りも一流」と最高峰の評価。'
      },
      {
        key: 'nara_marriott',
        tagline: '日本初進出のマリオット最高級ブランド！奈良の伝統美とモダンラグジュアリーが織りなす極上の館',
        detailTitle: 'JWマリオット・ホテル奈良 —— 国際的ブランドの洗練とおもてなし。屋内プールと贅沢なダイニング',
        features: [
          { title: '奈良の鹿や木々のモチーフを散りばめたスタイリッシュな客室', desc: '広々とした空間に最高級ベッドと大理石バスルームを完備。洗練された現代ラグジュアリーステイが叶います。' },
          { title: 'インドア温水プールや本格「SPA by JW」で極上リフレッシュ', desc: '旅の疲れを解きほぐす本格スパ施設。都会のリゾートのような優雅なウェルネス体験を楽しめます。' },
          { title: '日本料理「校倉」の鉄板焼き・寿司＆オールデイダイニング', desc: '奈良県産食材をふんだんに取り入れたディナーコースや、出来立てオムレツが人気の朝食ビュッフェが評判です。' }
        ],
        reviewPoints: '楽天トラベル評価4.00点。「JWブランドならではの豪華な内装とプールの設備が素晴らしい」「朝食ビュッフェが美味しく、ラウンジのカクテルタイムも優雅だった」と高評価。'
      }
    ],
    areaGuide: {
      title: '奈良公園・東大寺大仏殿＆春日大社・ならまち観光ガイド',
      points: [
        { name: '世界文化遺産「東大寺」盧舎那仏（奈良の大仏）と南大門金剛力士像', text: '世界最大級の木造建築である大仏殿に鎮座する高さ約15mの国宝大仏。運慶・快慶作の金剛力士像が睨みを利かす南大門も必見です。' },
        { name: '朱塗りの廻廊と三千基の燈籠が美しい「春日大社」', text: '藤原氏の氏神として創建された全国春日神社の総本社。原生林に囲まれた参道には数千基の石燈籠が並び、神聖な空気に満ちています。' },
        { name: '江戸時代の町家が残るレトロな街並み「ならまち」散策', text: '格子の美しい町家を活かしたカフェ、雑貨店、酒蔵が並ぶ人気エリア。名物のかき氷や吉野葛スイーツの食べ歩きが楽しめます。' }
      ]
    },
    furusatoStepTitle: '奈良県奈良市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「奈良県奈良市」クーポンを獲得', desc: '楽天ふるさと納税で奈良市を選び、トラベルクーポンを返礼品として申し込みます。寄付額の30%相当のクーポンがアカウントに付与されます。' },
      { step: 'Step 2: 近鉄奈良駅またはJR奈良駅へアクセス', desc: '京都駅から近鉄特急で約35分、大阪難波駅からも近鉄奈良線快速急行で約38分。3年間の有効期間内で、春の桜や秋の正倉院展に合わせて計画できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用して予約完了', desc: '奈良ホテル、ふふ奈良、JWマリオット・ホテル奈良などの宿泊プランを選び、決済時にクーポンを選択すれば宿泊代金から大幅な割引が適用されます。' }
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
    datePublished: '2026-09-11T01:00:00+09:00',
    dateModified: '2026-09-11T01:00:00+09:00',
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
              <Link href="/furusato-tax-nagoya-luxury-gourmet-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 名古屋 駅直結スカイビュー＆最新ラグジュアリー特集
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-shodoshima-olive-island-onsen-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 小豆島 エンジェルロード＆オリーブの島・絶景温泉特集
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
