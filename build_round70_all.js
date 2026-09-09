const fs = require('fs');
const path = require('path');

const seasonalHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

// 4記事の詳細データ定義
const articleConfigs = [
  {
    slug: 'furusato-tax-torafugu-kaiseki-luxury-gourmet-stay',
    componentName: 'FurusatoTorafuguKaisekiStayPage',
    tag: '本場天然とらふぐ尽くし会席＆名湯宿特集',
    title: '本場天然とらふぐ尽くし会席＆名湯温泉宿×ふるさと納税完全ガイド【2026年最新】下関・愛知日間賀島・若狭湾',
    metaTitle: '本場天然とらふぐ尽くし会席＆名湯温泉宿×ふるさと納税完全ガイド【2026年最新】下関・愛知日間賀島・若狭湾',
    shortTitle: '天然とらふぐ尽くし会席＆名湯宿特集',
    description: '冬の味覚の王様・天然とらふぐを本場で味わい尽くす！透き通る芸術的なてっさ（薄造り）、熱々のふぐちり鍋、香ばしいひれ酒、サクサクの唐揚げ。本場・山口県下関で関門海峡を望む迎賓館「下関グランドホテル」、多幸と福の島として名高い愛知県「日間賀島 漁師民宿やまに」、日本海の寒風が旨味を凝縮させる福井県「若狭小川 とね旅館」。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '本場天然とらふぐ尽くし会席＆名湯宿特集',
    leadTitle: '皿の絵柄が透き通る大皿てっさ、香ばしく燻された熱燗ひれ酒。冬の最高峰・本場とらふぐの真髄へ',
    leadText: '冬の日本海や瀬戸内海から届く最高の贅沢、それが「天然とらふぐ」です。職人の卓越した包丁捌きによって大皿の上に牡丹や鶴の形に美しく並べられた透明な「てっさ（薄造り）」、噛むほどに上品な甘みと弾力が広がる厚切りの身、皮湯引きのコリコリとした心地よい食感、そして炙りたてのひれを注ぎ入れた香ばしい「ひれ酒」――冬の味覚の頂点として名高いとらふぐ尽くしは、食通ならずとも一度は本場で堪能したい憧れの美食です。ふく（福）の街として全国のふぐが集まる聖地・山口県下関の老舗「下関グランドホテル」、三河湾に浮かび島全体がふぐの香りに包まれる愛知県日間賀島の「漁師民宿やまに」、そして若狭湾の清らかな冷水でじっくり身を引き締めた福井県若狭小川の「とね旅館」。本場のとらふぐフルコースは一般的に高額ですが、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期間3年）を使えば、実質自己負担2,000円で驚くほどお得に夢のふぐ三昧旅行が叶います。冬の極上美食とあたたかな温泉に心ほどける、至高のグルメステイへ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '職人技が光る「大皿てっさ」から「ひれ酒」「ふぐ雑炊」まで余すところなく堪能',
        body: '本場のとらふぐコースはまさに一魚尽くし。薄造りのてっさを自家製ポン酢ともみじおろしでいただく贅沢に始まり、骨周りの濃厚な旨味を味わう熱々の唐揚げ、ふっくらとした白身と野菜の出汁が染み出たてっちり（ふぐ鍋）、そして最後の米一粒まで旨味を吸い込ませた黄金色のふぐ雑炊まで、至福のフルコースが続きます。'
      },
      {
        num: '02',
        title: '水揚げ港のすぐそばだから実現する「別格の鮮度」と「熟成の極み」',
        body: 'ふぐは締め方と寝かせ方で味が激変する魚。産地の名宿では、朝獲れの活魚を熟練の板前が適切な時間寝かせることで、イノシン酸などの旨味成分を極限まで引き出します。都心の料亭では味わえない、産地ならではの濃厚なコクとモチモチとした強い歯ごたえに誰もが感動します。'
      },
      {
        num: '03',
        title: '冬の日本海や関門海峡を望むオーシャンビュー展望風呂で心身を温める',
        body: '冷たい潮風が吹き抜ける冬の海を眺めながら、湯気立ち上るあたたかな温泉に身を浸す時間は格別の心地よさ。波音を聞きながら身体の芯までポカポカに温まり、湯上がりにいただく熱燗のひれ酒とふぐ料理の組み合わせは、まさに大人の冬旅の最高峰です。'
      }
    ],
    hotelDetails: [
      {
        key: 'shimonoseki_fugu',
        badge: '山口県下関市・関門海峡を眼前に望む下関屈指の名門ホテル',
        rank: '厳選名宿 第1選',
        desc: '本州最西端・関門海峡の目の前に建ち、昭和天皇をはじめ国内外のVIPを迎えてきた歴史と格式を誇る下関の迎賓館ホテル。唐戸市場まで徒歩すぐの好立地に位置し、下関名物「天然とらふぐ」を熟練の料理人が腕によりをかけて仕立てる極上フルコースが大好評。大皿に菊花のように美しく盛られたてっさ、ふぐちり鍋、香ばしいひれ酒など本場ならではの深い味わいを堪能できます。客室やレストランの大きな窓から行き交う巨大客船や関門橋のライトアップを眺めながら、洗練されたひとときをお過ごしいただけます。'
      },
      {
        key: 'himakajima_fugu',
        badge: '愛知県南知多町・三河湾のタコとふぐの島・日間賀島の漁師宿',
        rank: '厳選名宿 第2選',
        desc: '名古屋から約1時間半、三河湾に浮かぶ日間賀島に佇む、現役漁師が営む温もりあふれる料理民宿。日間賀島は「とらふぐの島」として全国的に知られ、島周辺の良質な漁場で獲れた新鮮なとらふぐを豪快かつ繊細に味わえます。ぷりぷりとした歯ごたえのてっさや唐揚げはもちろん、名物のタコ料理や三河湾の旬魚介が舟盛りで並ぶ贅沢さは漁師宿ならでは。あたたかな島民のおもてなしと潮風に包まれ、飾らない本物の海の幸を心ゆくまでお楽しみください。'
      },
      {
        key: 'wakasa_fugu',
        badge: '福井県小浜市・若狭湾の静かな入り江に佇む若狭ふぐの名旅館',
        rank: '厳選名宿 第3選',
        desc: '日本海の美しいリアス式海岸が広がる若狭小川の入り江に建ち、目の前に透き通る海が広がる海辺の隠れ宿。若狭湾の日本海最北限の冷たい海水で育てられるブランド「若狭ふぐ」は、身がギュッと引き締まり脂の乗りが抜群と高い評価を得ています。てっさ、てっちり、皮の湯引き、ひれ酒に加え、福井の地酒「黒龍」や若狭牛など郷土の味覚がずらりと並ぶ豪華ディナーは圧巻。海を一望するお風呂で温まった後は、波音に耳を傾けながら穏やかな夜をお過ごしいただけます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-winter-crab-gourmet-luxury-stay', title: '【冬の味覚・活蟹尽くし×ふるさと納税】越前蟹・松葉蟹・間人蟹を堪能する極上宿' },
      { slug: 'furusato-tax-fresh-sushi-kaiseki-gourmet-inn-stay', title: '【漁港直送・極上寿司会席×ふるさと納税】職人握りと名湯温泉宿完全ガイド' },
      { slug: 'furusato-tax-local-gourmet-inn-stay', title: '【ご当地グルメ特化宿×ふるさと納税】その土地の旬の味覚を部屋食で味わう名宿' },
      { slug: 'furusato-tax-rias-coast-ise-ebi-abalone-ocean-stay', title: '【夕映えリアス式海岸×ふるさと納税】伊勢海老・鮑料理とオーシャンビュー海宿' }
    ]
  },
  {
    slug: 'furusato-tax-traditional-unagi-eel-gourmet-stay',
    componentName: 'FurusatoTraditionalUnagiEelStayPage',
    tag: '秘伝タレ焼きうなぎ＆名産地温泉宿特集',
    title: '名産地で味わう極上うなぎ会席＆蒲焼・ひつまぶし名湯宿×ふるさと納税完全ガイド【2026年最新】浜名湖・三島・柳川',
    metaTitle: '名産地で味わう極上うなぎ会席＆蒲焼・ひつまぶし名湯宿×ふるさと納税完全ガイド【2026年最新】浜名湖・三島・柳川',
    shortTitle: '名産地うなぎ会席＆蒲焼名門宿特集',
    description: '香ばしい炭火の煙と秘伝のタレ！全国屈指のうなぎ名産地で至高のうなぎ会席を堪能する大人の美食旅。うなぎ養殖発祥の地・静岡県浜名湖かんざんじ温泉の湖畔宿「ホテル鞠水亭」、富士山の清らかな伏流水で磨かれた三島うなぎの銘店巡りと最上階天然温泉「ドーミーイン三島」、情緒あふれる水郷柳川で蒸したて熱々のせいろ蒸しを味わう「柳川温泉ホテル 輝泉荘」。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '秘伝タレ焼きうなぎ＆名産地温泉宿特集',
    leadTitle: '備長炭でふっくら焼き上げた肉厚の蒲焼、湯気立ち上るせいろ蒸し。日本人が愛してやまない至高の鰻旅へ',
    leadText: '日本の伝統食文化の中で、最も食欲をそそる芳醇な香りを放つ「うなぎの蒲焼」。皮目はパリッと香ばしく、中はふんわりととろけるような食感、そして何十年も継ぎ足されてきた秘伝の甘辛ダレが絡む炊きたてのご飯――その一口は、まさに日本人に生まれた幸せを感じさせる至極の瞬間です。うなぎ養殖120年以上の歴史を誇り浜名湖の絶景を望む静岡県かんざんじ温泉の「ホテル鞠水亭」、富士山の清らかな雪解け水に数日間打たれることで臭みを完全に抜き旨味だけを凝縮した三島うなぎの拠点「ドーミーイン三島」、そして掘割をどんこ舟で巡る川下りとタレの染みた熱々ご飯が絶品のせいろ蒸しが名物の福岡県水郷柳川の「柳川温泉ホテル 輝泉荘」。産地ならではの卓越した職人技と極上の名湯の組み合わせは、旅人の疲れた身体に確かな活力と極上の幸福感をもたらしてくれます。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を使えば、実質自己負担2,000円で驚くほどお得に本格うなぎ会席ステイが実現。滋養と美味に満ちた、極上のうなぎ温泉紀行へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '関東風の「ふっくら蒸し焼き」と関西風の「地焼きパリパリ」の奥深い職人技',
        body: '背開きで一度蒸してから焼き上げる関東風（三島・浜名湖）のとろけるような柔らかさと、腹開きで蒸さずに強火の炭火で一気に焼き上げる関西風（九州・柳川）の香ばしい歯ごたえ。名産地ごとに受け継がれる焼きの哲学と秘伝ダレの調和が、うなぎ本来の奥深い旨味を極限まで引き出します。'
      },
      {
        num: '02',
        title: '名物「ひつまぶし」「せいろ蒸し」「白焼き」！多彩な味わい方で楽しむうなぎ尽くし',
        body: 'そのまま蒲焼として味わうのはもちろん、薬味を乗せ出汁をかけて楽しむ浜名湖のひつまぶし、錦糸卵を敷き詰めて蒸篭で蒸し上げる柳川のせいろ蒸し、わさび醤油や岩塩で素材の甘みを引き立てる白焼きなど、産地だからこそ楽しめる贅沢な食べ比べが食通たちを唸らせます。'
      },
      {
        num: '03',
        title: '良質な天然温泉と名勝景観！湖畔・富士山ビュー・水郷巡りが織りなす癒やしの時間',
        body: '浜名湖の夕映え、三島から仰ぐ霊峰富士のパノラマ、柳川の風情ある掘割と水郷の柳並木。産地ならではの美しい景観と良質な天然温泉に浸かって心身をリセットした後にいただくうなぎ料理は、日常の疲労を吹き飛ばす最高の活力源になります。'
      }
    ],
    hotelDetails: [
      {
        key: 'hamanako_unagi',
        badge: '静岡県浜松市・浜名湖畔に佇み名物うなぎ料理と湖上露天を誇る名宿',
        rank: '厳選名宿 第1選',
        desc: '風光明媚な浜名湖かんざんじ温泉の湖畔に位置し、客室や最上階展望露天風呂から穏やかな湖を一望できる老舗温泉旅館。夕食には浜名湖名物のうなぎを贅沢に使った本格会席プランをご用意。職人が丁寧に焼き上げた香ばしいうなぎ蒲焼をはじめ、旬の魚介や遠州の野菜を取り入れた四季折々の料理がテーブルを華やかに彩ります。夕暮れ時に黄金色に染まる浜名湖の絶景を眺めながら名湯に身を浸す、贅沢な湖畔ステイを満喫できます。'
      },
      {
        key: 'mishima_unagi',
        badge: '静岡県三島市・富士山の雪解け水が育む名店うなぎと最上階天然温泉',
        rank: '厳選名宿 第2選',
        desc: 'JR三島駅南口から徒歩すぐ、最上階に富士山を望む展望天然温泉大浴場を備えた大人気ホテル。三島は富士山の湧水で数日間泥抜きされた「三島うなぎ」が全国的に有名で、宿の周辺には行列ができる老舗のうなぎ専門店が多数点在。ホテル自慢の広々としたサウナと内湯・露天風呂でしっかりととのった後、名店でふっくら極上のうな重を味わう「うなぎサウナ旅」の拠点として絶大な支持を集めています。名物「夜鳴きそば」の無料サービスも大好評です。'
      },
      {
        key: 'yanagawa_unagi',
        badge: '福岡県柳川市・水郷柳川の川下りと名物うなぎせいろ蒸しの温泉宿',
        rank: '厳選名宿 第3選',
        desc: '掘割が縦横に巡る情緒豊かな水郷・柳川に位置し、天然温泉の恵みを湛える落ち着いた和風ホテル。柳川といえば、甘辛いタレをまぶしたご飯の上に蒲焼と錦糸卵を乗せて蒸篭で蒸し上げる「うなぎのせいろ蒸し」の発祥地。宿の夕食でも熱々ふっくらの極上せいろ蒸しを心ゆくまで堪能できます。どんこ舟で川下りを楽しんだ後は、アルカリ性単純温泉のやわらかな湯で旅の疲れを癒やす、九州の風情あふれる温泉旅行が叶います。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-fresh-sushi-kaiseki-gourmet-inn-stay', title: '【漁港直送・極上寿司会席×ふるさと納税】職人握りと名湯温泉宿完全ガイド' },
      { slug: 'furusato-tax-three-great-wagyu-beef-gourmet-stay', title: '【日本三大和牛×ふるさと納税】松阪牛・神戸牛・近江牛を味わう美食温泉宿' },
      { slug: 'furusato-tax-local-gourmet-inn-stay', title: '【ご当地グルメ特化宿×ふるさと納税】その土地の旬の味覚を部屋食で味わう名宿' },
      { slug: 'furusato-tax-award-winning-breakfast-gourmet-hotel-stay', title: '【朝食受賞ホテル×ふるさと納税】地場産食材が自慢の贅沢モーニング' }
    ]
  },
  {
    slug: 'furusato-tax-snow-view-open-air-bath-winter-stay',
    componentName: 'FurusatoSnowViewOpenAirBathStayPage',
    tag: '白銀の銀世界・絶景雪見露天風呂名宿特集',
    title: '白銀の銀世界に浸る絶景雪見露天風呂＆冬の秘湯名旅館×ふるさと納税完全ガイド【2026年最新】万座・越後湯沢・定山渓',
    metaTitle: '白銀の銀世界に浸る絶景雪見露天風呂＆冬の秘湯名旅館×ふるさと納税完全ガイド【2026年最新】万座・越後湯沢・定山渓',
    shortTitle: '絶景雪見露天風呂＆冬の秘湯名宿特集',
    description: '降り積もる純白の雪と立ち上る湯煙！日本屈指の豪雪地帯でしか出会えない奇跡の雪見露天風呂ステイ。標高1,800mの白銀パノラマと乳白色の濃厚硫黄泉「万座プリンスホテル」、川端康成『雪国』の舞台で幻想的な雪見庭園風呂を満喫する「越後湯沢温泉 湯沢グランドホテル」、札幌の奥座敷で定山渓渓谷の冬景色を望む名旅館「章月グランドホテル」。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ冬の極上旅完全ガイド。',
    heroTag: '白銀の銀世界・絶景雪見露天風呂名宿特集',
    leadTitle: 'しんしんと舞い落ちる雪、澄み切った冷気、あたたかな名湯。冬だけに出会える日本最高の静寂へ',
    leadText: '日本の冬の旅における究極の風物詩、それが「雪見露天風呂」です。氷点下の凛と張り詰めた冷気の中、頭上から舞い落ちる粉雪を受け止めながら、肩まであたたかい天然温泉に浸かるひととき。顔に当たる冷たい風と身体を包むお湯の温もりのコントラストは、この上ない心地よさを生み出します。標高1,800メートルの高地に位置し「星に一番近い温泉」として白銀の山々を一望する群馬県・万座温泉の「万座プリンスホテル」、国境の長いトンネルを抜けた雪国の名湯で幻想的な雪見庭園露天風呂を誇る新潟県「越後湯沢温泉 湯沢グランドホテル」、そして豊平川の渓谷美と真っ白な雪化粧を眺めながらの名湯三昧が評判の北海道・札幌「定山渓温泉 章月グランドホテル」。雪見露天風呂が楽しめる冬のトップシーズンは人気が高く予約が集中しますが、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を使えば、実質自己負担2,000円で驚くほどお得に銀世界の特等席を予約可能です。静寂とぬくもりに包まれる、一生モノの雪見温泉旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '「頭寒足熱」の極上バランス！長湯しても疲れにくい理想的な雪見入浴',
        body: '雪見風呂の最大の魅力は、氷点下の外気で頭部がひんやりと冷やされるため、のぼせることなくじっくりと長湯ができること。雪景色を眺めながら静かに心拍を落ち着かせ、身体の芯から温まることで、日頃の自律神経の乱れや冷え性を劇的に改善してくれます。'
      },
      {
        num: '02',
        title: '夕暮れのマジックアワーとライトアップされた夜の白銀世界が息を呑む美しさ',
        body: '雪景色が最も美しく輝くのは夕暮れから夜にかけて。茜色から深い藍色へと空が移り変わるトワイライトタイム、そしてライトアップされた雪や氷柱が青白く輝く幻想的な夜の露天風呂は、まるで別世界に迷い込んだかのような感動的な情景を見せてくれます。'
      },
      {
        num: '03',
        title: '冬限定の味覚！日本海や北の大地の海の幸、身体あたたまる名物鍋料理',
        body: '雪見風呂で身体を清めた後は、熱々の鍋料理や冬の旬魚介を味わう至福のディナータイム。日本海寒鰤のしゃぶしゃぶや越後牛、北海道の毛ガニや海鮮鍋など、寒冷地ならではの濃厚な味わいと地酒の熱燗が身体の隅々まで染み渡ります。'
      }
    ],
    hotelDetails: [
      {
        key: 'manza_snow_onsen',
        badge: '群馬県嬬恋村・標高1800mの白銀パノラマと乳白色の絶景雪見露天風呂',
        rank: '厳選名宿 第1選',
        desc: '上信越高原国立公園内の標高1,800mに位置し、日本屈指の硫黄含有量を誇る名湯・万座温泉のシンボルホテル。遮るものが何一つない大自然の中に設けられた名物露天風呂「こまくさの湯」からは、真っ白に雪化粧した山々のパノラマと満天の星空が一望できます。乳白色に濁る濃厚な硫黄泉は身体の芯まで温め、湯冷め知らずの心地よさ。ゲレンデ直結の立地のため、スキーやスノーボードを楽しんだ後のアフタースノー温泉ステイとしても絶大な人気を誇ります。'
      },
      {
        key: 'yuzawa_snow_onsen',
        badge: '新潟県湯沢町・雪国の風情漂う広大な庭園露天風呂と越後の美味',
        rank: '厳選名宿 第2選',
        desc: 'JR越後湯沢駅から徒歩約3分、川端康成の小説『雪国』の舞台となった歴史ある温泉街に建つ大型名門ホテル。宿の自慢は約500坪の広大な庭園露天風呂で、冬になると庭園の木々や岩が純白の雪で覆われ、湯煙立ち上る幻想的な雪見風呂を満喫できます。大型のサウナやジャグジーも完備。夕食には新潟が誇るコシヒカリや日本海の新鮮魚介、にいがた和牛をふんだんに使った贅沢バイキングや本格会席が振る舞われ、雪国の温かなもてなしに心癒やされます。'
      },
      {
        key: 'jozankei_snow_onsen',
        badge: '北海道札幌市・定山渓渓谷の冬景色と名物ラウンジサービスの老舗旅館',
        rank: '厳選名宿 第3選',
        desc: '札幌の奥座敷・定山渓温泉の豊平川渓谷沿いに佇み、創業90年の歴史を刻む名門温泉旅館。全客室が渓谷に面しており、窓の外には水墨画のように美しい白銀の雪渓が広がります。源泉かけ流しの露天風呂からは、川のせせらぎと雪が舞い散る風情ある景色を間近に楽しめます。蜂蜜バイキングや夕刻の湯上がりビール、夜のバータイムなど滞在を豊かに彩るラウンジサービスも充実。北海道の旬の味覚を散りばめた創作和食会席とともに贅沢な冬の休日をお過ごしいただけます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-ski-snowboard-slope-resort-stay', title: '【ゲレンデ直結×白銀リゾート】スキー・スノボ＆雪見露天風呂をふるさと納税で楽しむ旅' },
      { slug: 'furusato-tax-pure-kakenagashi-secret-hotspring-stay', title: '【源泉かけ流し秘湯×ふるさと納税】加水・加温なしの本物の湯力を堪能する名宿' },
      { slug: 'furusato-tax-three-medicinal-hotsprings-stay', title: '【日本三薬湯×ふるさと納税】草津・有馬・松之山！圧倒的薬効を誇る治癒の名湯' },
      { slug: 'furusato-tax-winter-crab-gourmet-luxury-stay', title: '【冬の味覚・活蟹尽くし×ふるさと納税】越前蟹・松葉蟹・間人蟹を堪能する極上宿' }
    ]
  },
  {
    slug: 'furusato-tax-station-walk-car-free-onsen-stay',
    componentName: 'FurusatoStationWalkCarFreeStayPage',
    tag: '駅徒歩すぐ・車なし手ぶら温泉旅特集',
    title: '新幹線駅から徒歩すぐ！車なし・運転不要で行ける極上駅近温泉宿×ふるさと納税完全ガイド【2026年最新】熱海・越後湯沢・嬉野',
    metaTitle: '新幹線駅から徒歩すぐ！車なし・運転不要で行ける極上駅近温泉宿×ふるさと納税完全ガイド【2026年最新】熱海・越後湯沢・嬉野',
    shortTitle: '新幹線駅から徒歩すぐ・車なし温泉宿特集',
    description: '免許がなくても雪道運転が不安でも大丈夫！東京や博多から新幹線・特急に乗るだけで直行できる、駅から徒歩圏内の名門温泉旅館を厳選。新幹線熱海駅から徒歩圏内の老舗湯宿「熱海温泉 旅館 立花」、上越新幹線越後湯沢駅徒歩数分の純和風宿「音羽屋旅館」、西九州新幹線嬉野温泉駅・バスセンター至近の美肌宿「割烹旅館 鯉登苑」。お酒を楽しみながら手ぶらでスマートに行ける温泉旅を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '駅徒歩すぐ・車なし手ぶら温泉旅特集',
    leadTitle: '新幹線を降りたらもう温泉街。渋滞知らず、雪道運転の不安ゼロで楽しめるスマート温泉旅へ',
    leadText: '「温泉旅行に行きたいけれど、車の運転が苦手」「冬の雪道や山道の運転が不安」「旅行中は夫婦や友達全員でお酒を気兼ねなく楽しみたい」――そんな方に今大人気なのが、新幹線駅や特急停車駅から徒歩圏内にある「車なしで行ける駅近温泉宿」です。東京駅から新幹線に乗れば、わずか数十〜1時間台で渋滞知らずに目的地へ到着。重い荷物を宿に預けてすぐに温泉街の散策や食べ歩きを楽しめ、チェックアウト後もギリギリまで観光を満喫できます。東海道新幹線熱海駅から温泉街を抜けてすぐの老舗「旅館 立花」、上越新幹線越後湯沢駅から徒歩数分の静かな純和風宿「音羽屋旅館」、そして西九州新幹線でアクセスが劇的に向上した佐賀・嬉野温泉の「割烹旅館 鯉登苑」。車を所持していない若者やシニア世代、電車旅好きにとっても最高のロケーションを誇る名宿ばかりです。楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を使えば、実質自己負担2,000円で驚くほどお得に予約可能。快適で気楽な「のんびり列車＆名湯ステイ」へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '運転ストレス＆渋滞ゼロ！移動中から駅弁や地酒を楽しめる列車旅の醍醐味',
        body: '高速道路の渋滞に巻き込まれる心配がなく、正確な時間通りに移動できるのが新幹線・特急旅の最大の魅力。運転担当者だけがお酒を我慢する必要もなく、車窓を流れる景色を眺めながらご当地駅弁やクラフトビールで乾杯する贅沢な移動時間を過ごせます。'
      },
      {
        num: '02',
        title: '駅周辺の飲食店、お土産物街、足湯、観光スポットへ徒歩でラクラク直行',
        body: '駅近の宿なら、到着してすぐにチェックイン前でも荷物をフロントに預けて手ぶらで観光へ繰り出せます。駅前の商店街で名物の温泉まんじゅうを食べ歩きしたり、足湯に浸かったり、地元の居酒屋をハシゴしたりと、アクティブに街歩きを楽しめます。'
      },
      {
        num: '03',
        title: '冬の豪雪地帯でも安心！ノーマルタイヤでも行ける安心・安全のアクセス',
        body: '冬の温泉旅行で最大のハードルとなるのが雪道や凍結路面の運転。新幹線直結の越後湯沢や熱海などの駅近宿なら、冬用タイヤやチェーンの心配を一切することなく、普段着とスニーカー感覚で安全に本物の名湯露天風呂を満喫できます。'
      }
    ],
    hotelDetails: [
      {
        key: 'atami_station_walk',
        badge: '静岡県熱海市・新幹線熱海駅から徒歩圏内！海と街並みを望む老舗名湯宿',
        rank: '厳選名宿 第1選',
        desc: 'JR熱海駅から温泉街の賑やかな仲見世通りを抜けて徒歩圏内、熱海サンビーチにも近い好立地に建つ老舗温泉旅館。自家源泉から引く肌に優しい天然温泉を露天風呂や大浴場で24時間満喫できます。夕食には相模湾で獲れた新鮮な海の幸を中心とした会席料理をお部屋食でゆったりとご提供。新幹線で東京駅から最短約35分という抜群の近さで、思い立ったらすぐに手ぶらで出かけられる気軽さと、歴史ある名宿の温かいおもてなしが両立しています。'
      },
      {
        key: 'yuzawa_station_walk',
        badge: '新潟県湯沢町・越後湯沢駅徒歩数分！新幹線直結の静寂に包まれる和風旅館',
        rank: '厳選名宿 第2選',
        desc: '上越新幹線・越後湯沢駅西口から徒歩約7分。駅前温泉街の賑わいから一歩奥に入った閑静な高台に佇む、全館に木の温もりが漂う純和風温泉旅館。駅近でありながら車の音も気にならない静寂に包まれ、岩造りの露天風呂や貸切風呂で湯沢の名湯を心ゆくまで堪能できます。料理長が手作りする旬の越後会席と、炊きたての南魚沼産コシヒカリのご飯は感動の美味しさ。雪道運転の心配なく真冬の白銀世界を満喫できる理想の駅近宿です。'
      },
      {
        key: 'ureshino_bus_walk',
        badge: '佐賀県嬉野市・嬉野温泉バスセンター至近！美肌湯と名物温泉湯どうふの宿',
        rank: '厳選名宿 第3選',
        desc: '日本三大美肌の湯として名高い佐賀県・嬉野温泉の中心に位置し、嬉野温泉バスセンターから徒歩すぐの好アクセスを誇る割烹旅館。西九州新幹線の開業により博多方面からのアクセスもさらに快適に。とろとろの美肌温泉を引く露天風呂で肌をしっとり潤した後は、嬉野名物の「温泉湯どうふ」や佐賀牛を贅沢に盛り込んだ本格割烹会席に舌鼓。車がなくても嬉野の情緒ある温泉街散策や足湯巡りをストレスフリーで満喫できます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-shinkansen-station-walk-hotspring-stay', title: '【新幹線駅近×ふるさと納税】新幹線駅から徒歩圏内の名門温泉旅館ガイド' },
      { slug: 'furusato-tax-retro-onsen-town-yukata-walk-stay', title: '【浴衣で巡るレトロ温泉街×ふるさと納税】外湯めぐり＆情緒名宿ガイド' },
      { slug: 'furusato-tax-solo-travel-retreat-private-onsen-stay', title: '【一人旅・ご褒美おこもり×ふるさと納税】露天風呂付き客室＆癒やしの名宿' },
      { slug: 'furusato-tax-travel-after-booking-discount-guide', title: '【予約済みでも間に合う】楽天トラベル「ふるさと納税クーポンあとから適用」完全攻略' }
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
    const hotelImg = h.hotelImageUrl || 'https://img.travel.rakuten.co.jp/share/HOTEL/7013/7013.jpg';
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
    'ご当地グルメ 宿',
    '人気温泉地 クーポン'
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

console.log('Finished generating all 4 articles for Round 70!');
