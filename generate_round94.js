const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

const articles = [
  {
    slug: 'furusato-tax-hakone-gora-onsen-art-luxury-stay',
    title: '【箱根強羅温泉×ふるさと納税】美肌のにごり湯＆全室露天風呂付き客室！大人の隠れ家名旅館完全ガイド｜箱根強羅白檀・季の湯雪月花・桐谷箱根荘',
    desc: '日本一の温泉リゾート・箱根の中でも屈指の高級別荘地「強羅温泉」を楽天ふるさと納税でお得に満喫！自然林に包まれ白檀の香りが漂う最高級宿「白檀」、強羅駅前で全室檜露天風呂を備えた人気宿「季の湯 雪月花」、大涌谷引湯の源泉掛け流しにごり湯を誇る老舗「桐谷 箱根荘」を徹底比較。箱根町クーポン活用術を網羅。',
    keywords: '箱根強羅温泉 ふるさと納税,箱根 露天風呂付き客室 ふるさと納税,白檀 箱根 ふるさと納税,雪月花 強羅 クーポン,箱根町 ふるさと納税 宿泊',
    targetCity: '神奈川県箱根町',
    leadTitle: '早雲山の借景、白濁の美肌温泉、贅を尽くした客室露天風呂——箱根強羅で叶える大人の至福リトリート',
    leadP1: '明治以降、政財界人や文人墨客の避暑地・別荘地として拓かれた箱根屈指のハイグレード温泉地・強羅温泉。大涌谷から引き湯された乳白色の濃厚な酸性硫酸塩泉や、自家源泉の滑らかな美肌湯など、多彩な泉質を誇ります。急勾配を登る箱根登山鉄道やケーブルカー、四季の草花が彩る強羅公園、彫刻の森美術館やポーラ美術館などの世界的な美術館が点在し、温泉と文化芸術が美しく調和するプレミアムな滞在が叶います。',
    leadP2: '特に強羅エリアの宿は、プライベート感を極めた「客室温泉露天風呂付き」のハイクラス旅館が多く、喧騒を離れて静寂に浸りたい大人旅や記念日旅行の舞台として絶大な人気を誇ります。夕食には相模湾の新鮮魚介や足柄牛、厳選素材を繊細に仕上げた極上懐石料理。神奈川県箱根町へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより通常1泊十数万円クラスの憧れの最高級旅館へ驚くほどお得に滞在できます。',
    hotelsKey: 'furusato-tax-hakone-gora-onsen-art-luxury-stay',
    hotelItems: [
      {
        key: 'gora_byakudan',
        tagline: '三千七百坪の落葉樹林に佇む大人の隠れ家！白檀の芳香薫る全室源泉掛け流し露天風呂付きラグジュアリー',
        detailTitle: '箱根強羅 白檀 —— 静謐な自然と調和する和モダン美学。自家源泉の黄金湯と極上懐石',
        features: [
          { title: '全客室に自家源泉掛け流しの天然温泉露天風呂を完備', desc: '敷地内から自噴する弱アルカリ性ナトリウム塩化物泉。全室のウッドデッキに設けられた露天風呂に掛け流され、早雲山と森の緑を眺めながら誰にも邪魔されない入浴を満喫できます。' },
          { title: '館内を優しく包み込む天然香木「白檀」の上品な香り', desc: 'エントランスに足を踏み入れた瞬間から漂う高貴な白檀の芳香。現代アートが配されたロビーラウンジでは、フリードリンクや地酒とともに極上のリラックスタイムを過ごせます。' },
          { title: '真鶴の伊勢海老や旬の幸を紡ぐ至高の懐石料理', desc: '料理長が素材の旨味を最大限に引き出す本格日本料理。厳選された器、季節のあしらい、繊細な出汁の味わいが、五感を満たす贅沢なディナーを約束します。' }
        ],
        reviewPoints: '楽天トラベル評価4.70点の超高評価。「お部屋の露天風呂からの景色とお湯が最高」「白檀の香りと静けさに日常のストレスがすべて消えた」「料理のクオリティが素晴らしい」と絶賛されています。'
      },
      {
        key: 'gora_yutorelo',
        tagline: '強羅駅徒歩一分！全客室に檜の露天風呂を完備し、二つの自家源泉と三つの無料貸切風呂を愉しむ人気宿',
        detailTitle: '季の湯 雪月花（共立リゾート） —— 圧倒的な利便性と充実の温泉情緒。選べる夕食会席と湯巡り三昧',
        features: [
          { title: '全客室に風情ある檜造りの露天風呂を設置', desc: '客室バルコニーに配された天然木の檜露天風呂。強羅の爽やかな高原の風を感じながら、いつでもプライベートに湯浴みを楽しめる贅沢な造りです。' },
          { title: '強羅温泉の二つの異なる源泉を引く大浴場＆炭酸泉', desc: '広々とした大浴場「玉桂の湯」に加え、予約不要で自由に利用できる三つの無料貸切露天風呂を完備。館内だけで本格的な湯巡りを堪能できます。' },
          { title: '選べる夕食「和食会席」または「国産牛しゃぶしゃぶ・寿司」', desc: '旬の食材を活かした本格的な和食会席と、国産牛しゃぶしゃぶとお寿司の組み合わせからお好みを選択可能。夜鳴きそばなどの無料サービスも大好評です。' }
        ],
        reviewPoints: '楽天トラベルレビュー数多数の超人気宿。「駅前でアクセス抜群なのに温泉情緒がすごい」「貸切風呂が無料で利用でき、客室露天風呂も快適だった」と高い満足度を獲得しています。'
      },
      {
        key: 'gora_tensui',
        tagline: '大涌谷から引湯する源泉掛け流しのにごり湯！早雲山を望む絶景露天風呂と創業六十余年の純和風おもてなし',
        detailTitle: '強羅温泉 桐谷 箱根荘 —— 本物のにごり湯を愛する温泉通の宿。乳白色の硫黄泉と心温まる郷土会席',
        features: [
          { title: '大涌谷源泉100％掛け流しの濃厚な白濁美肌温泉', desc: '加水・加温一切なしの新鮮なにごり湯。硫黄の香る酸性硫酸塩泉が注ぐ大浴場や露天風呂、貸切風呂は、肌の角質をなめらかに整える極上の美肌作用を誇ります。' },
          { title: '早雲山の豊かな自然林に包まれる静寂のロケーション', desc: '強羅の奥、静かな高台に位置し、鳥のさえずりと風の音だけが聞こえる穏やかな環境。昔ながらの温もりを残す和室で、ゆったりとくつろげます。' },
          { title: '季節の素材を素朴かつ丁寧に仕立てた和食膳', desc: '相模湾の新鮮な海の幸や旬の山の幸を取り入れた手作り料理。温かいものは温かいうちに運ばれ、どこか懐かしく滋味深い味わいが旅人の心を癒やします。' }
        ],
        reviewPoints: '楽天トラベル評価4.08点。「大涌谷のにごり湯が本当に素晴らしく体が芯から温まる」「スタッフの温かい接客と静かな環境に癒やされた」と泉質重視派から絶賛されています。'
      }
    ],
    areaGuide: {
      title: '箱根強羅の自然アート＆絶景観光モデルコース',
      points: [
        { name: '彫刻の森美術館＆ポーラ美術館の森のアート体験', text: '自然の景観と一体化した野外彫刻が並ぶ「彫刻の森美術館」や、モネやルノワールなどの印象派絵画と森の遊歩道が美しい「ポーラ美術館」。箱根を代表する美の殿堂を巡る知的な旅が楽しめます。' },
        { name: '箱根強羅公園のフランス式庭園とクラフト体験', text: '日本初のフランス式整型庭園である「強羅公園」。四季折々の花々や温室の熱帯植物、サンドブラストや吹きガラスなどの本格的なクラフト体験工房が人気です。' },
        { name: '大涌谷の噴煙地と名物「黒たまご」', text: '強羅から箱根登山ケーブルカーとロープウェイを乗り継いで大涌谷へ。立ち上る白煙と荒涼とした大地を見下ろす空中散歩を楽しみ、1個食べると7年長生きすると言われる名物の「黒たまご」を味わえます。' }
      ]
    },
    furusatoStepTitle: '神奈川県箱根町ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「神奈川県箱根町」のクーポンを獲得', desc: '楽天ふるさと納税で「箱根町」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。' },
      { step: 'Step 2: 3年間の有効期間内で記念日や週末の箱根旅行を計画', desc: 'クーポンの有効期限は発行からたっぷり3年間。秋の紅葉シーズンや初夏の新緑、連休のドライブ旅行など、希望の日程に合わせて自由に予約できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用', desc: '白檀、雪月花、桐谷箱根荘などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。' }
    ]
  },
  {
    slug: 'furusato-tax-beppu-kannawa-onsen-jigokumushi-stay',
    title: '【別府鉄輪温泉×ふるさと納税】湯けむり展望＆名物地獄蒸し！湧出量日本一の名湯宿完全ガイド｜山荘神和苑・おにやまホテル・ホテル山水館',
    desc: '日本一の温泉湧出量を誇る別府の象徴・鉄輪温泉を楽天ふるさと納税でお得に旅する！能舞台と二つの自家源泉を擁する最高級宿「山荘 神和苑」、鬼山地獄を望む西日本最大級露天風呂の「おにやまホテル」、地獄蒸しと展望大浴場が自慢の「ホテル山水館」を徹底比較。別府市トラベルクーポン活用術を網羅。',
    keywords: '別府鉄輪温泉 ふるさと納税,別府温泉 旅館 クーポン,山荘神和苑 ふるさと納税,おにやまホテル 別府 宿泊,別府市 ふるさと納税 楽天トラベル',
    targetCity: '大分県別府市',
    leadTitle: '街中から立ち上る白い湯けむり、大地の恵み「地獄蒸し」の滋味——別府鉄輪温泉で体験する至高の湯治リゾート',
    leadP1: '毎分8万リットルを超える日本一の温泉湧出量を誇る大分県・別府温泉郷。その中でも最も濃厚な温泉情緒を醸し出しているのが「鉄輪（かんなわ）温泉」です。鎌倉時代に一遍上人が開いたとされる歴史を持ち、街のいたるところからモクモクと立ち上る白い湯煙は、国の重要文化的景観にも選定されています。レトロな石畳の坂道、共同浴場、そして温泉の噴気で蒸し上げる伝統調理法「地獄蒸し」の香りが、旅情を五感で刺激します。',
    leadP2: '鉄輪温泉の宿は、昔ながらの湯治文化を受け継ぎつつ、優雅な庭園露天風呂や最上階のパノラマ展望風呂、能舞台を備えたラグジュアリー旅館まで多彩な魅力に溢れています。夕食には大分が誇るブランド牛「豊後牛」や関アジ・関サバ、そして高温の温泉蒸気で素材の旨味を凝縮させた名物「地獄蒸し料理」。大分県別府市へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより名門温泉宿へ驚くほどお得に宿泊でき、本物の温泉天国を大満喫できます。',
    hotelsKey: 'furusato-tax-beppu-kannawa-onsen-jigokumushi-stay',
    hotelItems: [
      {
        key: 'kannawa_sanso',
        tagline: '敷地内に能舞台・茶室・日本庭園を擁する別府最高峰の格式宿！二つの自家源泉掛け流しと極上懐石料理',
        detailTitle: '別府鉄輪温泉 山荘 神和苑 —— 伝統美と現代ラグジュアリーの極み。鉄輪の湯けむりを見晴らす特別空間',
        features: [
          { title: '敷地内から自噴する二つの自家源泉から引く天然温泉', desc: '一切加水・加温を行わない青みがかった神秘的な自家源泉。大浴場や露天風呂、客室露天風呂に贅沢に注がれ、とろみのある極上の美肌湯を堪能できます。' },
          { title: '本格能舞台「神和殿」と四季を映す壮大な日本庭園', desc: '広大な敷地には本格的な能舞台や茶室、鯉が泳ぐ池が配され、まるで迎賓館のような重厚な佇まい。夜のライトアップも幻想的な美しさを誇ります。' },
          { title: '鉄板焼きまたは日本料理から選ぶ極上ディナー', desc: '豊後牛や伊勢海老、関アジなどの最高級食材を目の前で焼き上げる鉄板焼き、または熟練の職人が織りなす伝統懐石。至高の美食体験が待っています。' }
        ],
        reviewPoints: '楽天トラベル評価4.51点。「お部屋、庭園、能舞台、すべてが別次元の素晴らしさ」「温泉のとろみと肌触りが最高で何度も入った」とラグジュアリーステイを求める旅行者から絶賛されています。'
      },
      {
        key: 'kannawa_oniyama',
        tagline: '鬼山地獄のすぐ隣！南畑湧出の豊富な名湯が注ぐ西日本屈指の広さを誇る大露天風呂「鬼面の湯」',
        detailTitle: '別府最大級の露天風呂の宿 おにやまホテル —— 圧倒的な湯量と開放感。別府名物バイキングと家族湯巡り',
        features: [
          { title: '一度に数十人がゆったり浸かれる大露天風呂「鬼面の湯」', desc: '巨大な岩と木々に囲まれた西日本屈指のスケールを誇る大露天風呂。湯量豊富な自家源泉が滝のように注がれ、豪快な湯浴みが楽しめます。' },
          { title: '最上階の展望露天風呂「空の湯」から望む湯けむりパノラマ', desc: 'ホテル屋上に設けられた展望風呂。鉄輪温泉街から立ち上る湯けむりと別府湾、鶴見岳の山並みを一望できる絶景スポットです。' },
          { title: '別府名物「地獄蒸し」と旬の味覚が並ぶ豪華バイキング', desc: '温泉の蒸気で蒸し上げた豚肉や野菜、新鮮魚介の刺身、とり天など、大分の郷土料理を好きなだけ味わえる人気のビュッフェです。' }
        ],
        reviewPoints: '楽天トラベル評価4.48点。「大露天風呂の広さと開放感が圧巻」「屋上の展望風呂からの湯けむり景色が素晴らしかった」と温泉の充実度が高く評価されています。'
      },
      {
        key: 'kannawa_kuroda',
        tagline: '鉄輪温泉街の中心に佇む老舗名門宿！最上階の展望パノラマ大浴場と豊後牛・名物地獄蒸し会席',
        detailTitle: '別府鉄輪温泉 ホテル山水館 —— 湯の街散策の絶好拠点。展望大浴場からの湯煙ビューと山海美食',
        features: [
          { title: '最上階展望風呂「天空の湯」から眺める鉄輪の湯けむり景観', desc: '鉄輪の街並みと鶴見岳を望む最上階大浴場。夜には温泉街の湯煙が街灯に照らされる幻想的な夜景を楽しめます。' },
          { title: '自家源泉を活用した伝統の「地獄蒸し料理」会席', desc: '温泉のミネラルと高熱蒸気で素材の旨味を閉じ込めた地獄蒸し。大分県産豊後牛や新鮮な海の幸とともに、ヘルシーで奥深い美味しさを堪能できます。' },
          { title: '鉄輪の湯けむり通りや地獄めぐりへの抜群のアクセス', desc: '宿を一歩出れば、レトロな路地や足湯、共同浴場が点在。地獄めぐりの主要スポットも徒歩圏内で、観光拠点として非常に便利です。' }
        ],
        reviewPoints: '楽天トラベル評価4.19点。「立地が良く地獄めぐりや街歩きが楽しめた」「地獄蒸し料理が美味しく温泉も温まる」と安定した人気を誇ります。'
      }
    ],
    areaGuide: {
      title: '別府地獄めぐり＆鉄輪温泉街のレトロ散策ガイド',
      points: [
        { name: '別府地獄めぐり（海地獄・血の池地獄・白池地獄・龍巻地獄など）', text: '千年以上前から噴気や熱泥が噴出していた「別府の地獄」。コバルトブルーが美しい「海地獄」や、真っ赤に煮えたぎる「血の池地獄」、間欠泉が吹き上がる「龍巻地獄」など、地球の息吹を体感できる大迫力の観光名所です。' },
        { name: '地獄蒸し工房 鉄輪でのセルフ地獄蒸し体験', text: '温泉の蒸気窯を使って、自分で選んだ野菜や卵、海鮮を蒸して食べる大人気施設「地獄蒸し工房 鉄輪」。塩分を含んだ温泉蒸気によって、調味料なしでも素材本来の甘みと旨味が引き出されます。' },
        { name: '湯けむり展望台からの夜景（日本夜景遺産）', text: '鉄輪温泉街の無数の湯けむりがライトアップされる光景を見下ろす「湯けむり展望台」。NHK「21世紀に残したい日本の風景」で富士山に次ぐ第2位に選ばれた絶景です。' }
      ]
    },
    furusatoStepTitle: '大分県別府市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「大分県別府市」のクーポンを獲得', desc: '楽天ふるさと納税で「別府市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。' },
      { step: 'Step 2: 3年間の有効期間内で温泉旅行日程を自由に選定', desc: 'クーポンの有効期限は発行から3年間。温泉が最も恋しくなる冬はもちろん、新緑や紅葉の季節など都合に合わせて予約できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用', desc: '山荘神和苑、おにやまホテル、ホテル山水館などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。' }
    ]
  },
  {
    slug: 'furusato-tax-arima-onsen-kinsen-ginsen-kobe-beef-stay',
    title: '【有馬温泉×ふるさと納税】日本最古の名湯・金泉銀泉めぐり＆極上神戸牛！名門老舗旅館ステイ完全ガイド｜兵衛向陽閣・月光園鴻朧館・陶泉御所坊',
    desc: '日本三古湯・日本三名泉の頂点に立つ名湯・有馬温泉を楽天ふるさと納税でお得に旅する！創業七百年の伝統を誇る名門「兵衛向陽閣」、落葉山の絶景と自家源泉金泉の「月光園 鴻朧館」、創業八百年・谷崎潤一郎ゆかりの最古の湯宿「陶泉 御所坊」を徹底比較。神戸牛会席や神戸市トラベルクーポン活用術を網羅。',
    keywords: '有馬温泉 ふるさと納税,兵衛向陽閣 ふるさと納税,有馬温泉 金の湯 旅館,月光園鴻朧館 クーポン,神戸市 ふるさと納税 宿泊',
    targetCity: '兵庫県神戸市',
    leadTitle: '太閤秀吉が愛した鉄分の赤湯、立ち上る湯煙、世界の舌を魅了する神戸牛——有馬温泉で過ごす極上の休日',
    leadP1: '神代の昔、大己貴命と少彦名命の二神によって発見されたと伝わる日本最古の温泉・有馬温泉。奈良時代の行基、平安時代の仁西によって拓かれ、戦国時代には天下人・豊臣秀吉が戦傷と激務の体を癒やすために足繁く通ったことで知られます。地中深くから火山活動とは無関係に湧き出る温泉は、塩分と鉄分を豊富に含み空気に触れると赤褐色に濁る「金泉」と、ラジウムや炭酸を含む透明な「銀泉」という、全く異なる二大名湯を誇ります。',
    leadP2: '風情ある有馬の温泉街には、細い路地に格子戸の町家が連なり、炭酸せんべいの焼き立ての香ばしい匂いが漂います。そして夕食の主役は、世界に名だたる最高級ブランド牛「神戸ビーフ」。サシの入った柔らかな肉質を、すき焼きやしゃぶしゃぶ、ステーキで味わう体験は、旅のクライマックスにふさわしい贅沢です。兵庫県神戸市へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより名門老舗旅館へお得に滞在でき、一生の記念に残る優雅なひとときを過ごせます。',
    hotelsKey: 'furusato-tax-arima-onsen-kinsen-ginsen-kobe-beef-stay',
    hotelItems: [
      {
        key: 'arima_koyokaku',
        tagline: '創業七百余年・秀吉公より「兵衛」の呼び名を授かった名門宿！三つの趣異なる大浴場でめぐる名湯金泉と神戸牛',
        detailTitle: '有馬温泉 兵衛向陽閣 —— 伝統と格式が織りなす極上のもてなし。広大な館内で愉しむ三湯めぐりと美食',
        features: [
          { title: '和風・ローマ風・湯治風の趣異なる三つの大浴場', desc: '一の湯（和風）、二の湯（ローマ風）、三の湯（湯治場風）と、それぞれ異なる風情を持つ大浴場すべてに名湯「金泉」を完備。館内だけで本格的な湯巡りを満喫できます。' },
          { title: '客室での贅沢な和食会席または豪華バイキング', desc: '熟練の料理人が腕を振るう四季の会席料理。とろけるような神戸牛の鉄板焼きや旬の魚介など、お部屋食プランや炭火焼き会席、バイキングなど多彩なプランから選べます。' },
          { title: '七百年の歴史を受け継ぐ洗練されたホスピタリティ', desc: '老舗ならではの行き届いたおもてなし。高台に位置し、有馬の山並みを見晴らす広々とした客室で、心安らぐ上質な休日を約束します。' }
        ],
        reviewPoints: '楽天トラベル評価4.55点、口コミ2500件超。「三つの大浴場の金泉がどれも最高で大満足」「お料理の神戸牛が驚くほど柔らかく美味しかった」と世代を問わず絶賛されています。'
      },
      {
        key: 'arima_gekkoen',
        tagline: '落葉山と滝川の清流を望む絶景宿！敷地内から湧出する自家源泉の金泉と茶道精神を受け継ぐ本格京風懐石',
        detailTitle: '有馬温泉 月光園 鴻朧館 —— 絶景パノラマと数寄屋の雅。渓流のせせらぎに包まれる上質リゾート',
        features: [
          { title: '落葉山の四季パノラマを望む絶景大浴場と自家源泉金泉', desc: 'ロビーや大浴場、客室から望むのは四季折々に色を変える落葉山の壮大な借景。敷地内から湧き出る良質な自家源泉の金泉露天風呂に浸かりながら絶景を堪能できます。' },
          { title: '茶道・裏千家の美学息づく本格京風懐石料理', desc: '味はもちろん器や盛り付け、配膳のタイミングに至るまで洗練された京懐石。神戸牛の石焼きや明石浦直送の鮮魚など、厳選された旬の美味が並びます。' },
          { title: '姉妹館「游月山荘」の露天風呂も巡れる湯巡りサービス', desc: '月光橋を渡って隣接する姉妹館「游月山荘」の渓流露天風呂も無料で相互利用可能。趣の異なる湯処を贅沢に楽しめます。' }
        ],
        reviewPoints: '楽天トラベル評価4.55点、口コミ1600件超。「部屋や大浴場からの落葉山の紅葉が息をのむ美しさだった」「料理が一品一品繊細で感動した」とリピーターが多数。'
      },
      {
        key: 'arima_goshoboh',
        tagline: '創業八百年・有馬最古の湯宿！文豪・谷崎潤一郎が愛した木造数寄屋建築と半混浴の金泉露天風呂',
        detailTitle: '有馬温泉 陶泉 御所坊 —— 歴史と文学が薫るサロン風旅館。温泉街の原点に佇む唯一無二の空間',
        features: [
          { title: '低い仕切り越しに会話を交わす独特の半混浴露天風呂', desc: '男女の湯船が低い段差と竹垣で仕切られた名物露天風呂。濃い金泉の濁り湯に浸かりながら、夫婦や家族で旅の語らいを楽しめる風情ある造りです。' },
          { title: '木造三階建て数寄屋造りのノスタルジックな美学', desc: '足踏みオルガンやアンティーク家具が置かれたサロンラウンジ。谷崎潤一郎や吉川英治ら文豪が愛した、大正・昭和初期の陰翳礼讃の世界が息づいています。' },
          { title: '但馬玄（たじまぐろ）と旬の野菜を味わう山家料理', desc: '契約牧場から一頭買いする幻の純血但馬牛「但馬玄」。融点の低い上質な脂の甘みと旨味を、素朴ながら洗練された山家会席で堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.44点。「唯一無二のノスタルジックな雰囲気に魅了された」「金泉のお湯の濃さと但馬牛の美味しさは他では味わえない」と熱狂的なファンに支持されています。'
      }
    ],
    areaGuide: {
      title: '有馬温泉街の路地散策＆六甲山頂パノラマ観光ガイド',
      points: [
        { name: '湯本坂のレトロ散歩と炭酸せんべい・有馬サイダー', text: '有馬温泉の中心を通る昔ながらの路地「湯本坂」。出来立ての温かい炭酸せんべいの試食や、明治生まれの復刻版「有馬サイダー」、金泉焼きの食べ歩きなど、温泉情緒を満喫できます。' },
        { name: '金の湯・銀の湯の足湯と泉源めぐり', text: '温泉街には「天神泉源」「御所泉源」「妬泉源」など七つの源泉が点在し、ゴボゴボと湯煙を上げる様子を間近で見学できます。外湯「金の湯」前の無料足湯も人気の憩いの場です。' },
        { name: '六甲有馬ロープウェーで六甲山頂へ（1000万ドルの夜景）', text: '有馬温泉駅からロープウェーで約12分で六甲山山頂へ。昼は大阪湾から淡路島まで見渡す大パノラマ、夜は「1000万ドルの夜景」と称される息をのむ絶景が広がります。' }
      ]
    },
    furusatoStepTitle: '兵庫県神戸市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「兵庫県神戸市」のクーポンを獲得', desc: '楽天ふるさと納税で「神戸市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。' },
      { step: 'Step 2: 3年間の有効期間内で特別な記念日や週末旅行を計画', desc: 'クーポンの有効期限は発行からたっぷり3年間。気候の良い春秋や冬の温泉シーズンなど、都合に合わせて日程を組めます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用', desc: '兵衛向陽閣、月光園鴻朧館、陶泉御所坊などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。' }
    ]
  },
  {
    slug: 'furusato-tax-noboribetsu-onsen-jigokudani-resort-stay',
    title: '【登別温泉×ふるさと納税】地獄谷の大パノラマ＆五大泉質温泉天国！巨大露天風呂と北海道ビュッフェガイド｜第一滝本館・登別グランドホテル・ホテルまほろば',
    desc: '北海道温泉の横綱・登別温泉を楽天ふるさと納税でお得に大満喫！千五百坪の大浴場に五つの泉質が注ぐ温泉天国「第一滝本館」、ローマ風大浴場と鬼サウナが話題の「登別グランドホテル」、日本最大級の露天風呂と三大蟹バイキングの「ホテルまほろば」を徹底比較。登別市トラベルクーポン活用術を網羅。',
    keywords: '登別温泉 ふるさと納税,第一滝本館 ふるさと納税,登別グランドホテル クーポン,ホテルまほろば 宿泊,登別市 ふるさと納税 楽天トラベル',
    targetCity: '北海道登別市',
    leadTitle: '大地の鼓動を告げる地獄谷の噴煙、千五百坪の巨大大浴場——登別温泉で味わう北海道最高峰の温泉リゾート',
    leadP1: '新千歳空港から車で約1時間。支笏洞爺国立公園の山あいに位置する登別温泉は、豊富な湧出量と多彩な泉質から「温泉のデパート」「北海道温泉の横綱」と称される日本屈指の温泉地です。温泉街の最奥に広がる「登別地獄谷」からは、毎分3,000リットルもの熱湯と白い噴煙が轟音とともに噴き出し、地球の息吹をダイレクトに体感できます。硫黄泉・食塩泉・重曹泉など多種多様な名湯が、日頃の疲れを劇的に癒やしてくれます。',
    leadP2: '登別温泉の宿のスケール感は全国でも随一。千五百坪の大浴場に何十種類もの浴槽が並ぶ巨大スパリゾートや、極上のサウナ施設、日本海・太平洋の新鮮な魚介（タラバガニ・ズワイガニ・毛ガニの三大蟹、ホタテ、いくら）や白老牛を惜しみなく提供する豪華ビュッフェが旅人を魅了します。北海道登別市へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより名門リゾートホテルへお得に滞在でき、圧倒的な満足度の北海道温泉旅行が叶います。',
    hotelsKey: 'furusato-tax-noboribetsu-onsen-jigokudani-resort-stay',
    hotelItems: [
      {
        key: 'noboribetsu_takimotokan',
        tagline: '創業百六十余年・千五百坪の温泉天国！地獄谷を望むパノラマ露天風呂と五つの泉質を誇る登別の象徴',
        detailTitle: '登別温泉 第一滝本館 —— 日本屈指のメガ大浴場。五つの異なる天然温泉と地獄谷ビューの圧倒的スケール',
        features: [
          { title: '千五百坪の大浴場に広がる35の湯船と5つの泉質', desc: '硫黄泉・食塩泉・重曹泉・酸性緑礬泉・明礬泉の5つの泉質を擁する圧巻の大浴場。24時間いつでも好きな時に異なる効能の湯船を巡ることができます。' },
          { title: '地獄谷の噴煙を湯船から見下ろす展望露天風呂', desc: '大浴場最前列の露天風呂からは、荒々しい地獄谷の岩肌と立ち上る白煙を一望。冷たい北海道の空気の中で温かい名湯に浸かる時間は格別の爽快感です。' },
          { title: '北海道の旬の幸が並ぶ豪華ビュッフェ＆個室会席', desc: 'オープンキッチンで焼き上げるステーキや揚げたて天ぷら、新鮮な刺身や蟹が並ぶディナーバイキング。落ち着いた個室で味わう伝統の和食会席プランも用意されています。' }
        ],
        reviewPoints: '楽天トラベル評価4.56点、口コミ3800件超。「温泉の広さと種類の多さに圧倒された」「地獄谷を見ながらのお風呂は人生最高の体験」と不動の支持を集めています。'
      },
      {
        key: 'noboribetsu_grand',
        tagline: '「登別の迎賓館」と称される気品あるリゾート！本格ドーム型ローマ風呂と話題沸騰の「鬼サウナ」',
        detailTitle: '登別温泉 登別グランドホテル —— 昭和十三年創業のクラシックモダン。滝を望む庭園露天風呂と極上のととのい',
        features: [
          { title: '荘厳なドーム型天井の本格ローマ風大浴場', desc: 'まるでヨーロッパの宮殿のような優雅な円形大浴場。食塩泉や鉄泉、硫黄泉の名湯を注ぎ、滝が流れる日本庭園露天風呂とともに優雅な湯浴みを楽しめます。' },
          { title: 'サウナシュラン受賞！オートロウリュを誇る「鬼サウナ」', desc: '登別の赤鬼・青鬼をテーマにした本格サウナ。110度の超高温サウナと、熊笹の香るセルフロウリュサウナ、登別の山水を使った水風呂で極上の「ととのい」を体験できます。' },
          { title: 'シェフが目の前で調理する贅沢な洋食・和食ビュッフェ', desc: '北海道産食材をふんだんに取り入れた豪華バイキング。ホテル伝統の洋食料理や地元の旬魚、北海道スイーツなど、美食の数々がテーブルを彩ります。' }
        ],
        reviewPoints: '楽天トラベル評価4.26点、口コミ3200件超。「鬼サウナが最高すぎてサウナ好きにはたまらない」「ローマ風呂の天井が高く開放的で料理も美味しい」と高評価です。'
      },
      {
        key: 'noboribetsu_mahoroba',
        tagline: '日本最大級の露天風呂と四つの泉質！三大蟹（タラバ・ズワイ・毛ガニ）食べ放題の豪華ディナーバイキング',
        detailTitle: '登別温泉 ホテル まほろば —— 地下二階に広がる三十一の湯巡り。カニ三昧ディナーと巨大スパリゾート',
        features: [
          { title: '地下1階・地下2階に広がる31の湯処と日本最大級の露天風呂', desc: '緑豊かな自然に囲まれた広大な露天風呂や檜風呂、ジャグジーなど多彩な湯船。硫黄泉・食塩泉・単純泉・酸性鉄泉の4つの泉質を一度に堪能できます。' },
          { title: 'タラバガニ・ズワイガニ・毛ガニが並ぶ三大蟹食べ放題ビュッフェ', desc: '北海道の冬の味覚を代表する三大蟹をはじめ、目の前で握る寿司や刺身、ステーキが食べ放題。食の満足度を極限まで高めた大人気ディナーです。' },
          { title: 'ファミリーやグループに嬉しい充実の客室と館内設備', desc: 'ゆったりとした和室や和洋室、露天風呂付き客室まで多彩な部屋タイプ。大人数での宿泊や三世代旅行にも快適に対応しています。' }
        ],
        reviewPoints: '楽天トラベル評価4.30点、口コミ2800件超。「三大蟹の食べ放題が豪華すぎて大満足」「お風呂がとても広く子どもからシニアまで全員楽しめた」と絶賛されています。'
      }
    ],
    areaGuide: {
      title: '登別地獄谷・大湯沼の自然散策＆登別マリンパーク観光ガイド',
      points: [
        { name: '登別地獄谷遊歩道と鉄泉池（間欠泉）の散策', text: '地獄谷の谷底を巡る木道遊歩道。中央にある「鉄泉池」では、数分おきに熱湯がボコボコと音を立てて湧き出す間欠泉の様子を間近で見学できます。夜には「鬼火の路」としてライトアップされ幻想的です。' },
        { name: '大湯沼川天然足湯での森林浴ヒーリング', text: '地獄谷から山道を歩いた先にある「大湯沼川天然足湯」。大湯沼から流れ出す天然の温泉川にそのまま足を浸すことができ、原生林の木漏れ日の中で最高の足湯体験が楽しめます。' },
        { name: '登別伊達時代村＆登別マリンパークニクス', text: '江戸時代の城下町や忍者アクションショーを楽しめる「登別伊達時代村」や、北欧風の古城水族館でペンギンのパレードが人気の「登別マリンパークニクス」など、観光施設も充実しています。' }
      ]
    },
    furusatoStepTitle: '北海道登別市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「北海道登別市」のクーポンを獲得', desc: '楽天ふるさと納税で「登別市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。' },
      { step: 'Step 2: 3年間の有効期間内でベストシーズンを予約', desc: 'クーポンの有効期限は発行から3年間。秋の紅葉や冬の雪見露天、夏の爽やかな北海道旅行など、希望の日程に合わせて自由に予約できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用', desc: '第一滝本館、登別グランドホテル、ホテルまほろばなどの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。' }
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
    const affiliateUrl = data.affiliateUrl || 'https://travel.rakuten.co.jp/';
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
                <div>住所: ${address}</div>
                <div>最寄り駅・アクセス: ${data.access || data.nearestStation || '最寄り駅より送迎あり'}</div>
                <div>参考料金: <span className="font-bold text-stone-800">${chargeStr}</span></div>
                <div>ホテル番号: No.${hotelNo}</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="${affiliateUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>`;
  }).join('\n');

  const areaPointsCode = art.areaGuide.points.map(pt => {
    return `
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> ${pt.name}
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">${pt.text}</p>
            </div>`;
  }).join('\n');

  const stepsCode = art.furusatoSteps.map(st => {
    return `
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">${st.step}</div>
              <p className="text-stone-200 leading-relaxed">${st.desc}</p>
            </div>`;
  }).join('\n');

  return `import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${art.title}',
  description: '${art.desc}',
  keywords: '${art.keywords}',
  openGraph: {
    title: '${art.title}',
    description: '${art.desc}',
    type: 'article',
    url: 'https://croud-travel.pages.dev/${art.slug}',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/${art.slug}',
  },
};

export default function FurusatoTaxArticle() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 leading-relaxed font-sans">
      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-amber-50 py-16 px-4 md:px-8 border-b border-amber-900/50 shadow-2xl">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30 mb-2">
            <span>楽天ふるさと納税 宿泊クーポン完全攻略</span>
            <span>•</span>
            <span>自治体公認 宿泊割引</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white font-serif leading-tight">
            ${art.title}
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            ${art.desc}
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">${art.targetCity}</strong></span>
            <span>•</span>
            <span>還元率: 寄付額の最大30%</span>
            <span>•</span>
            <span>有効期限: クーポン獲得から3年間</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            ${art.leadTitle}
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ${art.leadP1}
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ${art.leadP2}
          </p>
          <div className="bg-amber-50 rounded-2xl p-4 sm:p-5 border border-amber-200/80 text-amber-950 text-xs sm:text-sm space-y-2">
            <h3 className="font-bold text-amber-900 flex items-center gap-2">
              <span>💡</span> この記事でわかること
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-stone-800 list-disc list-inside">
              <li>ふるさと納税で泊まれる名門宿のリアルな魅力と特徴</li>
              <li>楽天トラベルクーポンを使った最大割引予約の手順</li>
              <li>失敗しない現地観光モデルルート＆名物グルメ</li>
              <li>予約済みでも間に合う「クーポンあとから適用」のやり方</li>
            </ul>
          </div>
        </section>

        {/* 楽天トラベル クーポン獲得バナー導線 */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest font-bold text-amber-200">Rakuten Travel Furusato Tax</p>
            <h3 className="text-lg sm:text-xl font-bold font-serif">${art.targetCity}のふるさと納税クーポンをチェック</h3>
            <p className="text-xs text-rose-100">寄付額の最大30%オフ！3年間有効・予約済み日程にも適用可能</p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-rose-700 font-extrabold px-6 py-3 rounded-xl shadow hover:bg-stone-100 transition text-sm flex items-center gap-1.5"
          >
            <span>クーポン一覧を見る</span>
            <span>→</span>
          </a>
        </div>

        {/* 厳選ホテル徹底解剖 */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              ふるさと納税で泊まる厳選名宿3選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              実際に楽天トラベルで圧倒的な高評価を獲得している名門ホテル・老舗旅館をピックアップ
            </p>
          </div>

${hotelCardsCode}
        </section>

        {/* 周辺観光・グルメガイド */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            ${art.areaGuide.title}
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
              <Link href="/furusato-tax-travel-beginners-complete-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 超初心者向け ふるさと納税で旅行に安く泊まるマニュアル
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-kurokawa-onsen-nyuto-tegata-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 黒川温泉 入湯手形露天めぐり＆あか牛美食ステイ特集
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
