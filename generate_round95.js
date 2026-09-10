const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

const articles = [
  {
    slug: 'furusato-tax-hakone-sengokuhara-pampas-luxury-stay',
    title: '【箱根仙石原温泉×ふるさと納税】黄金のすすき草原＆大涌谷美肌にごり湯！大人の高原リゾート完全ガイド｜きたの風茶寮・仙郷楼・BLISSTIA箱根仙石原',
    desc: '秋の黄金のすすき草原と大自然に抱かれる箱根屈指の高原リゾート「仙石原温泉」を楽天ふるさと納税でお得に満喫！全室客室露天風呂と北海道×箱根の美食オーベルジュ「きたの風茶寮」、創業百五十年の老舗白濁にごり湯「仙郷楼」、全室スイート仕様のモダンホテル「BLISSTIA箱根仙石原」を徹底紹介。箱根町クーポン活用術を網羅。',
    keywords: '仙石原温泉 ふるさと納税,箱根 仙石原 旅館 クーポン,きたの風茶寮 ふるさと納税,仙郷楼 にごり湯,箱根町 ふるさと納税 宿泊',
    targetCity: '神奈川県箱根町',
    leadTitle: '黄金色に揺れるすすき草原、森の静寂に溶け込む乳白色のにごり湯——箱根仙石原で叶える至福の高原エスケープ',
    leadP1: '標高約650メートルの高原に広がる箱根・仙石原。秋になると台ヶ岳の山裾を埋め尽くす「すすき草原」が黄金色に輝き、息をのむ大パノラマを描き出します。かつてカルデラ湖の底であったこの地は、豊かな自然と大涌谷からの恵みである乳白色の硫酸塩泉に恵まれ、古くから文化人や文豪に愛された閑静な別荘地として発展してきました。箱根ラリック美術館やガラスの森美術館、ポーラ美術館など、世界水準のアート施設が点在する知的な雰囲気も大きな魅力です。',
    leadP2: '仙石原の宿は、広大な敷地にプライベートな客室露天風呂やテラスを配したハイクラス旅館や、シェフが腕を振るう美食オーベルジュが充実。夕食には相模湾や近郊のブランド牛、厳選された旬の恵みを味わう贅沢なコースが待っています。神奈川県箱根町へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより高級宿への宿泊費を大幅に節約でき、日常を完全に忘れられる上質な大人のリトリートステイが実現します。',
    hotelsKey: 'furusato-tax-hakone-sengokuhara-pampas-luxury-stay',
    hotelItems: [
      {
        key: 'sengokuhara_kitanokaze',
        tagline: '全十室すべてに源泉掛け流し露天風呂を完備！北海道の厳選素材と箱根の四季が融合する最高峰美食オーベルジュ',
        detailTitle: '仙石原温泉 きたの風茶寮 —— 静寂の竹林と洗練の和モダン。美肌の白濁湯と五感を満たす創作懐石ディナー',
        features: [
          { title: '全室に大涌谷引湯の白濁源泉掛け流し客室露天風呂', desc: 'すべての客室に天然温泉の露天風呂または展望風呂を設置。プライベートなテラスで鳥のさえずりと高原の風を感じながら、濃厚なにごり湯を独り占めできます。' },
          { title: '北海道と箱根の極上味覚が織りなす「和乃懐石」', desc: '北海道直送の新鮮魚介（ウニ・毛ガニなど）と、箱根近郊の厳選野菜やブランド牛が織りなす唯一無二のディナーコース。一皿ごとに感動が広がる美食体験です。' },
          { title: '大人のための静かなプライベートラウンジとバー', desc: 'わずか10室のみの隠れ家。ライブラリーラウンジやバーでは、厳選されたワインやウイスキーを傾けながら、誰にも邪魔されない静寂の夜を堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.55点。「お部屋の露天風呂のにごり湯の質が最高」「料理の一品一品が芸術品のように美しく美味しかった」と記念日ステイの定番として絶賛されています。'
      },
      {
        key: 'sengokuhara_senkyoro',
        tagline: '創業明治三年・大涌谷から引湯する元祖にごり湯の老舗！一万五千坪の広大な庭園と文豪が愛した純和風の格式',
        detailTitle: '仙石原温泉 仙郷楼 —— 仙石原の歴史とともに歩む名旅館。湧き出たままの奇跡の白濁湯と風情ある日本庭園',
        features: [
          { title: '大涌谷から自噴する乳白色の天然硫黄泉掛け流し', desc: '加水・加温なしの新鮮なにごり湯。大浴場や野趣あふれる大露天風呂に注がれ、肌にしっとりと吸い付くような柔らかな浴感と美肌効果を誇ります。' },
          { title: '一万五千坪の自然林が広がる壮大な日本庭園と散策路', desc: '四季折々の花々や木々、小川が流れる広大な庭園。湯上がりの夕暮れや朝の澄んだ空気の中をそぞろ歩きするだけで、心が清らかに整います。' },
          { title: '月替わりの本格会席料理と老舗旅館の温かなおもてなし', desc: '旬の食材を厳選し、出汁にこだわった正統派の日本料理。客室または個室で供され、落ち着いた空間で老舗の味をじっくりと堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.43点。「乳白色の温泉が素晴らしく何度も入った」「広大な庭園の散歩が心地よくスタッフの接客も丁寧だった」と伝統を愛する温泉ファンから高評価です。'
      },
      {
        key: 'sengokuhara_kanade',
        tagline: '全室温泉付きスイート仕様のプレミアムリゾート！大涌谷白濁温泉大浴場と本格フレンチの美食マリアージュ',
        detailTitle: 'BLISSTIA箱根仙石原 —— 現代リゾートの快適性と名湯の癒し。洗練されたモダン空間で過ごす上質な休日',
        features: [
          { title: '大涌谷温泉のにごり湯を引くスタイリッシュ大浴場＆露天風呂', desc: 'モダンな建築デザインの大浴場と露天風呂。大涌谷の濃厚な白濁湯に浸かりながら、夜は間接照明と星空が織りなす幻想的な空間でリラックスできます。' },
          { title: '全室ゆったりとしたリビングを備えたスイート設計', desc: '広々とした客室には高品質なベッド、テラス、ミニキッチンなどを完備。長期滞在やワーケーション、グループ旅行にも快適なホテルライフを提供します。' },
          { title: '地元の旬素材を活かした本格フレンチディナー', desc: '開放的なレストランで楽しむ洗練されたフレンチコース。厳選ワインとのペアリングとともに、特別な旅の夜を華やかに演出します。' }
        ],
        reviewPoints: '楽天トラベル評価4.59点。「お部屋が広くて新しくとても快適」「温泉のにごり湯が良くフレンチディナーも美味しかった」と新しいスタイルの箱根滞在として人気急上昇中です。'
      }
    ],
    areaGuide: {
      title: '箱根仙石原の絶景すすき草原＆美術館めぐりガイド',
      points: [
        { name: '仙石原すすき草原の黄金の波（見頃：9月下旬〜11月上旬）', text: '「かながわの景勝50選」に選ばれる仙石原のシンボル。一面に広がるすすきの中を一本の遊歩道が貫き、秋風にそよぐ黄金色の穂に囲まれながら歩く景色は圧巻です。春の「山焼き」の光景も名物です。' },
        { name: '箱根ガラスの森美術館・ポーラ美術館・星の王子さまミュージアム跡地', text: 'ヴェネチアン・グラスが水辺にきらめく「ガラスの森美術館」や、緑の森の中に溶け込む建築美が素晴らしい「ポーラ美術館」。仙石原は世界的なアートの集積地としても楽しめます。' },
        { name: '金時山ハイクと富士山の大パノラマ', text: '仙石原から登れる日本三百名山「金時山（きんときやま）」。往復約3時間のお手軽ハイクで山頂に立つと、正面に裾野を広げる大迫力の富士山と箱根芦ノ湖・大涌谷を一望できます。' }
      ]
    },
    furusatoStepTitle: '神奈川県箱根町ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「神奈川県箱根町」のクーポンを獲得', desc: '楽天ふるさと納税で「箱根町」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。' },
      { step: 'Step 2: 3年間の有効期間内でベストシーズンを予約', desc: 'クーポンの有効期限は発行から3年間。秋のすすき草原シーズンはもちろん、爽やかな夏の避暑、冬のにごり湯温泉旅など、希望の季節に合わせて予約できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用', desc: 'きたの風茶寮、仙郷楼、BLISSTIA箱根仙石原などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。' }
    ]
  },
  {
    slug: 'furusato-tax-ikaho-stone-steps-retro-luxury-stay',
    title: '【伊香保温泉×ふるさと納税】365段の石段街と黄金の湯＆白銀の湯！名門老舗旅館ステイ完全ガイド｜福一・ホテル木暮・岸権旅館',
    desc: '万葉集にも詠まれた名湯・伊香保温泉を楽天ふるさと納税でお得に旅する！石段街最上段に鎮座する創業四百四十年の「福一」、毎分千リットルの湯量を誇る北関東最大級大浴場の「ホテル木暮」、天正四年創業・完全掛け流しの黄金の湯「岸権旅館」を徹底比較。上州牛会席や群馬県渋川市クーポン活用術を網羅。',
    keywords: '伊香保温泉 ふるさと納税,伊香保 石段街 旅館,福一 伊香保 ふるさと納税,ホテル木暮 クーポン,渋川市 ふるさと納税 宿泊',
    targetCity: '群馬県渋川市',
    leadTitle: '伊香保名物365段の石段、茶褐色の「黄金の湯」と透明な「白銀の湯」——伊香保温泉で過ごす極上のレトロモダン休日',
    leadP1: '榛名山の東麓、標高約700メートルの高地に広がる伊香保温泉。街の象徴である「365段の石段街」は、戦国時代に武田勝頼の命によって日本初の計画的な温泉街として築かれた歴史を持ちます。石段の中央には温泉が流れる「小間口」が設けられ、石段を挟んで土産物店や射的場、足湯が立ち並ぶノスタルジックな風景は、歩くだけで昭和の時代にタイムスリップしたかのような旅情を感じさせます。',
    leadP2: '伊香保の誇りは、鉄分を含み空気に触れて独特の茶褐色に変化する「黄金（こがね）の湯」と、近年湧出したメタケイ酸豊富な透明な「白銀（しろがね）の湯」という二大名湯。二つの異なる湯に浸かり、名物・上州牛のすき焼きや水沢うどんを味わう滞在は至福そのものです。群馬県渋川市へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより名門旅館へお得に宿泊でき、情緒あふれる温泉旅行を最高のコスパで満喫できます。',
    hotelsKey: 'furusato-tax-ikaho-stone-steps-retro-luxury-stay',
    hotelItems: [
      {
        key: 'ikaho_fukuichi',
        tagline: '創業四百四十余年・石段街最上段の特等席！黄金の湯と白銀の湯の二大名湯を両方愉しむ伊香保最高峰の格式宿',
        detailTitle: '伊香保温泉 福一 —— 戦国時代から続く名門の矜持。石段街への専用出入口と至極の二湯巡り',
        features: [
          { title: '伊香保の二大名湯「黄金の湯」「白銀の湯」の両方を完備', desc: '歴史ある茶褐色の黄金の湯と、肌に優しい透明な白銀の湯。大浴場や露天風呂で両方の源泉に浸かり比べができる贅沢な湯処です。' },
          { title: '石段街の最上段（19階）に直結する専用アクセス', desc: '宿のエレベーターから石段街の最上段、伊香保神社付近へ直結。坂道を登ることなくスムーズに石段街散策や足湯巡りに出かけられます。' },
          { title: '上州牛ステーキと旬の恵みを味わう格調高い和会席', desc: '料理長が選び抜いた群馬の山の幸、川の幸、そして柔らかな上州牛。器や盛り付けにも老舗の気品が宿る洗練された夕食を堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.30点、口コミ1700件超。「石段街直結の立地が最高で二つの源泉にも大満足」「お部屋の眺望が良くスタッフの対応も格式を感じた」と高い評価を得ています。'
      },
      {
        key: 'ikaho_kogure',
        tagline: '創業四百年の湯守！毎分千リットルを誇る北関東最大級の湯処「子の湯千両」と展望大浴場パノラマ',
        detailTitle: '伊香保温泉 ホテル木暮 —— 黄金の湯の総湧出量の四分の一を保有。圧倒的な湯量と美食のエンターテインメント',
        features: [
          { title: '伊香保随一の湯量を誇る大浴殿「子の湯千両」', desc: '広大な敷地に広がる露天風呂、庭園風呂、立ち湯、座り湯など多彩な湯船。黄金の湯が惜しみなく注がれ、心ゆくまで名湯を満喫できます。' },
          { title: '上州の山並みを一望する開放的なロケーション', desc: '高台に位置し、客室やロビーラウンジからは赤城山や榛名山の雄大な稜線を一望。朝夕で刻々と変わる山景が旅の気分を高めます。' },
          { title: '上州牛と地元契約農家の旬野菜を味わう創作和食会席', desc: '群馬県産上州牛の陶板焼きやしゃぶしゃぶ、吟味された四季折々の料理。オープンキッチンから届く出来立ての美味しさが評判です。' }
        ],
        reviewPoints: '楽天トラベル評価4.75点という驚異の高スコア。「お風呂の種類がとにかく多く温泉好きにはパラダイス」「館内が非常に清潔で料理も美味しく接客も満点」と圧倒的な満足度を誇ります。'
      },
      {
        key: 'ikaho_kishigon',
        tagline: '天正四年創業・石段街に面した老舗名門！創業以来引き継ぐ完全掛け流しの名湯「黄金の湯」と石段ビュー',
        detailTitle: '岸権旅館 石段街隣接 希少源泉「黄金の湯」の宿 —— 四百年の歴史を紡ぐ正統派。純度100％の掛け流し温泉',
        features: [
          { title: '敷地内まで引き湯される純度100％の「黄金の湯」', desc: '加水・加温・循環一切なしの本物の掛け流し。総檜造りの「権左衛門の湯」や展望露天風呂「六左衛門の湯」で、鉄分とメタケイ酸豊富な名湯を堪能できます。' },
          { title: '石段街に面した抜群のロケーションと無料足湯「辰の湯」', desc: '玄関を出れば目の前が石段街。宿の入口脇には誰でも利用できる黄金の湯の足湯「辰の湯」が設けられ、温泉街の情緒を肌で感じられます。' },
          { title: '上州の郷土色を散りばめた季節の会席膳', desc: '上州牛や名物の刺身こんにゃく、下仁田ねぎなど群馬の味覚が詰まった料理。落ち着いた和室でゆったりと食事を味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.49点、口コミ1600件超。「黄金の湯のお湯が本当に素晴らしく体が温まる」「石段街のすぐ横で観光に最高だった」と根強いリピーターを抱えています。'
      }
    ],
    areaGuide: {
      title: '伊香保石段街めぐり・榛名湖＆水沢うどん観光ガイド',
      points: [
        { name: '365段の石段街散策と伊香保神社・河鹿橋の紅葉', text: '段ごとに干支が刻まれた365段の石段。登りきった先にある「伊香保神社」で健康と縁結びを祈願し、さらに奥の「河鹿橋」へ。秋には真っ赤なモミジが朱塗りの太鼓橋を彩る絶景ライトアップが有名です。' },
        { name: '日本三大うどん「水沢うどん」街道でのランチ', text: '伊香保温泉から車で約10分の水沢エリア。400年以上の歴史を持つ「水沢うどん」は、強いコシと透明感のあるツヤが特徴。舞茸の天ぷらとゴマだれで味わうのが定番です。' },
        { name: '榛名湖・榛名山ロープウェイの高原ドライブ', text: '伊香保からつづら折りの峠道を登ると、カルデラ湖「榛名湖」と「榛名富士」へ。ボート遊びやロープウェイからの眺望、秋の紅葉ドライブに最高のスポットです。' }
      ]
    },
    furusatoStepTitle: '群馬県渋川市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「群馬県渋川市」のクーポンを獲得', desc: '楽天ふるさと納税で「渋川市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。' },
      { step: 'Step 2: 3年間の有効期間内で温泉旅行をじっくり計画', desc: 'クーポンの有効期限は発行から3年間。河鹿橋が紅葉に染まる秋や、雪景色が美しい冬、新緑の初夏など、希望の日程に合わせて予約できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用', desc: '福一、ホテル木暮、岸権旅館などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。' }
    ]
  },
  {
    slug: 'furusato-tax-yufuin-kinrinko-luxury-villa-stay',
    title: '【由布院温泉×ふるさと納税】金鱗湖の朝霧＆由布岳絶景！全室離れ露天風呂付き隠れ家名宿ガイド｜旅亭田乃倉・ゆふいん花由・ゆふいん月燈庵',
    desc: '日本中の旅行者が憧れる名湯・由布院温泉を楽天ふるさと納税でお得にリゾートステイ！金鱗湖徒歩1分で本格懐石を味わう「旅亭 田乃倉」、由布岳と朝霧を見晴らす高台の離れ宿「ゆふいん花由」、築三百年古民家と客室露天風呂の「ゆふいん月燈庵」を徹底比較。大分県由布市トラベルクーポン活用術を網羅。',
    keywords: '由布院温泉 ふるさと納税,由布院 離れ 露天風呂 ふるさと納税,旅亭田乃倉 ふるさと納税,ゆふいん花由 クーポン,由布市 ふるさと納税 宿泊',
    targetCity: '大分県由布市',
    leadTitle: '由布岳の雄姿、立ち上る朝霧と金鱗湖、雑木林に佇む離れの宿——由布院温泉で過ごす極上のプライベート休日',
    leadP1: '豊後富士と称される美しい「由布岳」の麓、穏やかな田園風景と清らかな湧水に恵まれた由布院温泉。別府に次ぐ全国第2位の湧出量を誇りながら、大型ホテルを建てず、自然と調和した低層の離れ宿や美術館、お洒落なカフェが点在する街並みは、大人の上質な旅先として絶大な人気を誇ります。冬の早朝、湖底から温泉が湧き出る「金鱗湖」から立ち上る幻想的な朝霧は、由布院を象徴する奇跡の絶景です。',
    leadP2: '由布院の魅力の真骨頂は、雑木林の中に独立した客室が点在する「離れ形式」の隠れ家旅館。誰にも邪魔されずに客室露天風呂で由布岳を眺め、夕食には豊後牛や地鶏、地元契約農家の採れたて野菜を使った極上の懐石料理を堪能できます。大分県由布市へのふるさと納税を活用すれば、30%相当のトラベルクーポンにより通常1泊数十万円クラスの憧れの名宿へお得に宿泊でき、特別な記念日や夫婦・カップル旅行に最高の思い出を刻めます。',
    hotelsKey: 'furusato-tax-yufuin-kinrinko-luxury-villa-stay',
    hotelItems: [
      {
        key: 'yufuin_sanso_murata',
        tagline: '金鱗湖まで徒歩一分の静寂に佇む本格純和風料亭旅館！全室源泉掛け流し風呂と月替わりの極上懐石料理',
        detailTitle: '由布院温泉 旅亭 田乃倉 —— 金鱗湖畔の雅な隠れ宿。木の香薫る客室風呂と季節を愛でる本格懐石',
        features: [
          { title: '全客室に天然温泉を引いた専用風呂を完備', desc: 'わずか十数室の贅沢な空間。客室には源泉掛け流しの檜風呂や岩風呂が備えられ、誰にも邪魔されることなく由布院の名湯を独占できます。' },
          { title: '金鱗湖まで徒歩わずか1分の散策に最適なロケーション', desc: '早朝の静かな金鱗湖の朝霧散策へも気軽に出かけられる絶好の立地。湖畔のカフェや湯の坪街道へのアクセスも至便です。' },
          { title: '豊後牛や旬の山海の幸を極める月替わり本格懐石', desc: '料理旅館として名高い田乃倉自慢の夕食。お部屋食でゆっくりと提供され、豊後牛のフィレステーキや旬魚のお造りなど、洗練された美味に舌鼓を打てます。' }
        ],
        reviewPoints: '楽天トラベル評価4.79点。「お料理が一品一品本当に美味しくお部屋食でゆっくり堪能できた」「金鱗湖に近く朝の散歩が最高だった」と最高峰の評価を得ています。'
      },
      {
        key: 'yufuin_kamenoi',
        tagline: '由布岳と朝霧を見晴らす高台の特等席！全室温泉露天風呂付き客室で愉しむ息をのむ絶景パノラマステイ',
        detailTitle: '由布院温泉 朝霧のみえる宿 ゆふいん花由 —— 由布院の街並みと由布岳を一望。天空の離れリゾート',
        features: [
          { title: '由布岳と朝霧のパノラマを一望する絶景テラスと露天風呂', desc: '高台に位置するため、ロビーや客室テラス、露天風呂からの眺望は由布院随一。早朝には眼下の盆地一面に広がる幻想的な朝霧を鑑賞できます。' },
          { title: 'プライベート感を極めた離れの温泉露天風呂付き客室', desc: '独立した離れスタイルの客室。広々としたテラスと客室露天風呂が備わり、贅沢なプライベートステイが叶います。' },
          { title: 'おおいた和牛と旬の恵みを味わう創作会席料理', desc: '大分の豊かな自然が育んだおおいた和牛の炭火焼きや地元の新鮮野菜、関アジなど、彩り豊かな創作会席を夜景とともに楽しめます。' }
        ],
        reviewPoints: '楽天トラベル評価4.70点。「部屋の露天風呂から見る由布岳の朝霧が息をのむ美しさだった」「スタッフの接客も温かく記念日に最高の滞在になった」と絶賛されています。'
      },
      {
        key: 'yufuin_yufusan',
        tagline: '由布岳を望む雑木林に点在する全室離れ客室露天風呂付き！築三百年古民家を移築した静寂の隠れ家',
        detailTitle: '由布院温泉 ゆふいん月燈庵 —— 吊り橋を渡って訪れる異空間。古民家の温もりと自然が溶け合う至極宿',
        features: [
          { title: '小川にかかる専用の木造吊り橋を渡る特別なアプローチ', desc: '宿の入口にある専用吊り橋を渡ると、そこは日常から遮断された別世界。一万坪の敷地にわずか18室の離れがゆったりと配されています。' },
          { title: '全室に源泉掛け流しの客室露天風呂を完備', desc: 'すべての離れに客室露天風呂が備わり、雑木林の木漏れ日や満天の星空を眺めながら、贅沢な源泉掛け流しを満喫できます。' },
          { title: '築三百年古民家を活かした母屋でいただく炭火創作料理', desc: '重厚な梁が交差する古民家ダイニング。炭火で香ばしく焼き上げる豊後牛や地鶏、季節の野菜を五感で味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価3.88点。「吊り橋を渡る演出とお部屋の露天風呂の雰囲気が最高」「静かな自然に囲まれてゆっくり休めた」とプライベート感を求める旅行者に愛されています。'
      }
    ],
    areaGuide: {
      title: '由布院温泉・湯の坪街道＆金鱗湖散策モデルルート',
      points: [
        { name: '金鱗湖（きんりんこ）の朝霧と湖畔散策', text: '湖底から清水と温泉が同時に湧き出ているため、秋から冬にかけての早朝には水面から湯気が立ち上り、幻想的な「朝霧」が発生します。湖畔の木道を歩きながら眺める鳥居と朝霧の光景は必見です。' },
        { name: '湯の坪街道でのスイーツ＆工芸品ショッピング', text: '由布院駅から金鱗湖へ続くメインストリート「湯の坪街道」。B-speakのロールケーキや、金賞コロッケ、地鶏炭火焼き、スヌーピー茶屋など、食べ歩きやクラフトショップ巡りを楽しめます。' },
        { name: 'COMICO ART MUSEUM YUFUINと名建築・アート巡り', text: '建築家・隈研吾氏が設計を手掛け、草間彌生氏や村上隆氏らの現代アートを展示する「COMICO ART MUSEUM YUFUIN」。由布岳を借景にした美しい美術館で知的な時間を過ごせます。' }
      ]
    },
    furusatoStepTitle: '大分県由布市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「大分県由布市」のクーポンを獲得', desc: '楽天ふるさと納税で「由布市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。' },
      { step: 'Step 2: 3年間の有効期間内で記念日や週末旅行を計画', desc: 'クーポンの有効期限は発行からたっぷり3年間。金鱗湖の朝霧が美しい秋・冬や、新緑の春など、希望の日程に合わせて自由に予約できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用', desc: '旅亭田乃倉、ゆふいん花由、ゆふいん月燈庵などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。' }
    ]
  },
  {
    slug: 'furusato-tax-akiu-onsen-sendai-retreat-stay',
    title: '【秋保温泉×ふるさと納税】名取川渓谷美＆伊達政宗公ゆかりの名湯！仙台牛美食と老舗宿完全ガイド｜伝承千年の宿佐勘・緑水亭・ホテルニュー水戸屋',
    desc: '仙台駅から車で約30分の奥州三名湯「秋保温泉」を楽天ふるさと納税でお得に旅する！伊達政宗公の湯守を務めた創業千年の格式「伝承千年の宿 佐勘」、広大な日本庭園と幻想的な篝火露天風呂の「緑水亭」、16種類の多彩な温泉を湯巡りできる「ホテルニュー水戸屋」を徹底比較。仙台牛会席や仙台市クーポン活用術を網羅。',
    keywords: '秋保温泉 ふるさと納税,伝承千年の宿佐勘 ふるさと納税,緑水亭 秋保 クーポン,ホテルニュー水戸屋 宿泊,仙台市 ふるさと納税 楽天トラベル',
    targetCity: '宮城県仙台市',
    leadTitle: '名取川の奇岩と清流、伊達政宗が愛した千年の名湯、極上の仙台牛会席——秋保温泉で過ごす杜の都の上質リトリート',
    leadP1: '杜の都・仙台の中心街から車でわずか約30分。名取川の深い渓谷沿いに広がる秋保（あきう）温泉は、古墳時代の第29代欽明天皇の皮膚病を癒やしたことから「名取の御湯」と称され、別所温泉・野沢温泉とともに「日本三御湯」の一つに数えられる東北屈指の名湯です。戦国時代には仙台藩祖・伊達政宗公も合戦の傷と疲れを癒やすために訪れ、伊達家の入湯場として大切に守られてきました。',
    leadP2: '秋保温泉の魅力は、名取川が削り出した奇岩怪石の「磊々峡（らいらいきょう）」や「秋保大滝」の豊かな大自然と、歴史ある名門旅館のおもてなし。夕食には日本最高ランクA5ランクのみに許されるブランド牛「仙台牛」のステーキやすき焼き、三陸沖で獲れた新鮮な魚介類が贅沢に並びます。宮城県仙台市へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより名門旅館へお得に滞在でき、仙台観光や松島観光と組み合わせた最高の東北旅行が実現します。',
    hotelsKey: 'furusato-tax-akiu-onsen-sendai-retreat-stay',
    hotelItems: [
      {
        key: 'akiu_sakan',
        tagline: '創業千年・伊達政宗公の湯守を務めた歴史宿！名取川を望む名物「名取の御湯」と極上仙台牛会席',
        detailTitle: '伝承千年の宿 佐勘 —— 伊達家ゆかりの格式と現代の優雅さ。名取川の渓流を望む歴史の湯宿',
        features: [
          { title: '名取川の清流を間近に望む名物大浴場「名取の御湯」', desc: '伊達政宗公の入湯場を再現した格子造りの湯処。名取川のせせらぎを聞きながら、千年前から湧き続ける弱アルカリ性単純温泉に浸かる贅沢な湯浴みが楽しめます。' },
          { title: '伊達家の歴史を伝えるギャラリーと数寄屋の佇まい', desc: '館内には伊達家より拝領した古文書や美術品が展示。広々としたラウンジや中庭を眺めながら、名門宿ならではの品格ある時間を過ごせます。' },
          { title: 'A5ランク仙台牛と三陸の海の幸を味わう本格会席', desc: '厳選されたA5ランク仙台牛の陶板焼きやローストビーフ、三陸直送の旬魚の造りなど、宮城の食文化の粋を集めた贅沢な会席ディナーを堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.41点、口コミ2100件超。「お風呂の風情と名取川の景色が素晴らしく千年の歴史を感じた」「お料理の仙台牛が絶品で仲居さんの気配りも満点」と圧倒的な支持を集めています。'
      },
      {
        key: 'akiu_rantei',
        tagline: '広大な日本庭園の高台に佇むリゾート！夜を彩る幻想的な「篝火露天風呂」と宮城の山海の味覚',
        detailTitle: '秋保温泉 篝火の湯 緑水亭 —— 三万坪の敷地に広がる庭園美。篝火に照らされる幻想の露天風呂',
        features: [
          { title: '夜になると篝火が灯る風情満点の名物露天風呂', desc: '大自然に抱かれた庭園露天風呂。夕暮れから夜にかけて篝火が焚かれ、炎の揺らめきと満天の星空を眺めながら心温まる湯浴みを体験できます。' },
          { title: '四季折々の花々が咲き誇る三万坪の日本庭園', desc: '春の桜、初夏の新緑、秋の紅葉、冬の雪景色と、移ろう季節を肌で感じる広大な庭園。散策路が整備され、清々しい森林浴を楽しめます。' },
          { title: '仙台牛と宮城の地酒を味わう豪華ディナー会席', desc: '仙台牛のすき焼きや鮑の踊り焼きなど、豪華食材を取り入れた和食会席。宮城の銘酒とともに至福のディナータイムを過ごせます。' }
        ],
        reviewPoints: '楽天トラベル評価4.25点、口コミ1400件超。「夜の篝火露天風呂の雰囲気が最高」「広い庭園の景色が素晴らしく朝の散歩が楽しかった」と高い評価を得ています。'
      },
      {
        key: 'akiu_hotel_new_mitoya',
        tagline: '十六種類もの多彩な湯船を館内湯巡り！名取川渓谷沿いの大型温泉リゾートと豪華バイキング',
        detailTitle: '秋保温泉 ホテルニュー水戸屋 —— 三つの大浴場と十六趣の湯巡り。ファミリーやグループに愛される王道名宿',
        features: [
          { title: '館内だけで16種類のお風呂を巡る温泉三昧', desc: '「水秋の湯」「水鏡の湯」「梅の湯」という3つの大浴場に、檜風呂・岩風呂・陶器風呂など多彩な浴槽が揃い、飽きることなく温泉を満喫できます。' },
          { title: '季節を問わず楽しめる屋内温水プールと広大な館内', desc: '子ども連れに嬉しいドーム型屋内温水プール（通年営業）を完備。全世代が楽しめる充実したアクティビティが揃っています。' },
          { title: '宮城の郷土料理と豪華和洋中バイキング＆会席', desc: 'オープンキッチンで焼き上げる牛タンや天ぷら、握り寿司が並ぶ人気のディナービュッフェ。個室での本格会席プランも選べます。' }
        ],
        reviewPoints: '楽天トラベル評価4.31点、口コミ約2800件。「お風呂がたくさんあって館内湯巡りが本当に楽しかった」「プールや食事も充実して三世代旅行にぴったり」と絶賛されています。'
      }
    ],
    areaGuide: {
      title: '秋保温泉街・磊々峡＆秋保大滝観光ハイライト',
      points: [
        { name: '磊々峡（らいらいきょう）の遊歩道散策とハートの岩肌', text: '名取川が削り出した深さ約20メートルの奇岩怪石が続く景勝地。遊歩道から覗き込むと自然にできたハート型のくぼみ（覗橋ハート）があり、「恋人の聖地」として大人気のフォトスポットです。' },
        { name: '日本の滝百選「秋保大滝」の壮大な水しぶき', text: '幅6メートル、落差55メートルを誇る国指定名勝の大瀑布。滝見台からの全景はもちろん、滝つぼまで降りて間近で浴びるマイナスイオンと轟音は圧巻の迫力です。' },
        { name: '秋保ワイナリー＆主婦の店さいちのおはぎ', text: '宮城のぶどうで醸造する「秋保ワイナリー」のテラスカフェ。そして全国のテレビで話題沸騰のスーパー「主婦の店 さいち」で1日1万個売れる名物「秋保おはぎ」の甘さ控えめな美味しさは必食です。' }
      ]
    },
    furusatoStepTitle: '宮城県仙台市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「宮城県仙台市」のクーポンを獲得', desc: '楽天ふるさと納税で「仙台市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。' },
      { step: 'Step 2: 3年間の有効期間内で秋保温泉旅行を計画', desc: 'クーポンの有効期限は発行から3年間。秋の紅葉や冬の雪景色、夏の青葉まつりや七夕まつりなど、仙台観光とセットで日程を自由に選べます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用', desc: '伝承千年の宿佐勘、緑水亭、ホテルニュー水戸屋などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。' }
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
              <Link href="/furusato-tax-hakone-gora-onsen-art-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 箱根強羅温泉 美肌にごり湯＆客室露天風呂特集
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
