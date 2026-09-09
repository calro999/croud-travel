const fs = require('fs');
const path = require('path');

const seasonalHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

// 4記事の詳細データ定義
const articleConfigs = [
  {
    slug: 'furusato-tax-fresh-oyster-feast-luxury-gourmet-stay',
    componentName: 'FurusatoFreshOysterFeastStayPage',
    tag: '名産地・生牡蠣＆焼き牡蠣尽くし会席宿特集',
    title: '本場名産地で味わう極上牡蠣尽くし会席＆生牡蠣・焼き牡蠣の贅沢温泉宿×ふるさと納税完全ガイド【2026年最新】宮島・伊勢志摩・三陸気仙沼',
    metaTitle: '本場名産地で味わう極上牡蠣尽くし会席＆生牡蠣・焼き牡蠣の贅沢温泉宿×ふるさと納税完全ガイド【2026年最新】宮島・伊勢志摩・三陸気仙沼',
    shortTitle: '名産地牡蠣尽くし会席＆温泉宿特集',
    description: '海のミルクと称される濃厚な旬牡蠣を本場の名宿で堪能！世界遺産・厳島神社の参道に佇み広島牡蠣と伝統の数寄屋建築を誇る「宮島グランドホテル 有もと」、的矢かき・本浦かきの本場として知られる鳥羽の自家源泉美肌宿「サン浦島 悠季の里」、世界三大漁場・三陸の栄養豊かな大粒牡蠣を味わう気仙沼大島「旅館 椿荘花月」。ぷりぷりの生牡蠣、香ばしい焼き牡蠣、サクサクのカキフライに熱々牡蠣鍋。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '名産地・生牡蠣＆焼き牡蠣尽くし会席宿特集',
    leadTitle: '殻いっぱいに詰まった乳白色の濃厚な身、溢れ出す磯のミネラル。冬の美味・本場牡蠣尽くしの極上旅へ',
    leadText: '冬から春先にかけて最も旨味が凝縮される「海のミルク」こと牡蠣（カキ）。レモンを絞ってちゅるんといただく朝獲れの新鮮な生牡蠣、炭火の上でパチパチと音を立てながら香ばしい潮の香りを放つ焼き牡蠣、サクッとした衣の中から熱々の濃厚ミルクが溢れ出すカキフライ、そして旨味が溶け出した出汁で炊き上げる絶品の牡蠣ご飯――その贅沢極まりない味わいは、牡蠣好きならずとも心奪われる至福の冬の味覚です。世界遺産・厳島神社へ徒歩すぐの宮島で創業三百年の歴史を紡ぐ「宮島グランドホテル 有もと」、伊勢志摩の豊かな自然が育むブランド牡蠣「本浦牡蠣・的矢牡蠣」を自家源泉の美肌湯とともに味わう三重県鳥羽の「サン浦島 悠季の里」、そして森と海の栄養が溶け込む三陸リアス海岸で大粒の濃厚牡蠣を振る舞う宮城県気仙沼大島の「旅館 椿荘花月」。産地だからこそ体験できる別格の鮮度と圧倒的なボリュームの牡蠣フルコースを、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期間3年）を使って実質自己負担2,000円で賢く満喫しましょう。',
    threePoints: [
      {
        num: '01',
        title: '生・焼き・揚げ・蒸し・鍋！一晩で牡蠣をあらゆる調理法で食べ尽くす贅沢',
        body: '本場の牡蠣会席宿の真骨頂は、素材の良さを知り尽くした料理人による多彩なバリエーション。濃厚な甘みの生牡蠣、香ばしい殻付き焼き牡蠣、自家製タルタルでいただく大粒カキフライ、味噌仕立ての土手鍋や澄まし鍋、そして牡蠣の釜飯まで、牡蠣の魅力を五感で味わい尽くせます。'
      },
      {
        num: '02',
        title: 'リアス式海岸と豊かな森が育む「安心・安全な極上ブランド牡蠣」',
        body: '広島湾、伊勢志摩的矢湾、三陸気仙沼湾はいずれも背後に広大な照葉樹林や山々を抱え、植物プランクトンが極めて豊富な日本屈指の清浄海域。紫外線殺菌など徹底した衛生管理のもとで出荷されるブランド牡蠣は、エグみが一切なく、澄んだ甘みとクリーミーなコクが際立ちます。'
      },
      {
        num: '03',
        title: '世界遺産の絶景や穏やかな海景に抱かれながら浸かる名湯露天風呂',
        body: '宮島の厳島神社大鳥居、伊勢志摩の波静かな入り江、三陸の美しい海岸線。昼は絶景観光を満喫し、夕暮れには美肌の天然温泉に身を浸してリフレッシュ。地元の銘酒とともにいただく熱々の牡蠣料理は、旅の幸福感を最高潮に高めてくれます。'
      }
    ],
    hotelDetails: [
      {
        key: 'miyajima_oyster',
        badge: '広島県廿日市市・宮島厳島神社に最も近い創業三百年の老舗名門旅館',
        rank: '厳選名宿 第1選',
        desc: '日本三景・宮島の嚴島神社まで徒歩約3分という絶好のロケーションに建つ、江戸時代初期創業の歴史ある数寄屋造り旅館。宮島名物の大粒で濃厚な広島牡蠣をふんだんに盛り込んだ贅沢な会席料理が自慢で、香ばしい焼き牡蠣やジューシーなカキフライ、出汁の効いた牡蠣鍋など本場の味を心ゆくまで堪能できます。雅な和の風情漂う客室露天風呂や広々とした大浴場で旅の疲れを癒やし、夜にはライトアップされた大鳥居の幻想的な姿を散策できる至高の宮島ステイが叶います。'
      },
      {
        key: 'toba_oyster',
        badge: '三重県鳥羽市・的矢かき＆本浦かきの本場・二つの自家源泉を持つ美肌名宿',
        rank: '厳選名宿 第2選',
        desc: '伊勢志摩・鳥羽の本浦湾を望む静かな岬に佇む、二つの異なる自家源泉「珠光の湯」「新珠光の湯」を誇る高級温泉旅館。冬の風物詩であるブランド牡蠣「本浦牡蠣」「的矢牡蠣」を贅沢に使った特別料理は絶品で、ぷりぷりの生牡蠣や焼き牡蠣、伊勢海老や鮑の造りとともに豪華絢爛なディナーを堪能できます。アルカリ性のトロトロとした美肌温泉に浸かりながら穏やかな海の情景を眺める時間は格別の贅沢。伊勢神宮参拝とあわせた大人の美食旅に最適です。'
      },
      {
        key: 'kesennuma_oyster',
        badge: '宮城県気仙沼市・三陸リアス海岸の栄養豊かな大粒牡蠣と獲れたて海の幸',
        rank: '厳選名宿 第3選',
        desc: '気仙沼大島の美しい自然に包まれた、獲れたての三陸魚介と心温まるおもてなしが評判の料理旅館。気仙沼湾の豊かな森から流れ込むミネラルで育った大粒牡蠣は、クリーミーで濃厚な甘みが特徴。殻付き焼き牡蠣やカキフライ、フカヒレ料理など三陸が誇る世界最高峰の海の恵みをテーブルいっぱいに味わえます。気仙沼大島大橋の開通によりアクセスも快適になり、雄大な太平洋のパノラマを望みながら素朴で贅沢な海辺の休日をお過ごしいただけます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-torafugu-kaiseki-luxury-gourmet-stay', title: '【本場天然とらふぐ尽くし×ふるさと納税】大皿てっさ＆ひれ酒名宿ガイド' },
      { slug: 'furusato-tax-winter-crab-gourmet-luxury-stay', title: '【冬の味覚・活蟹尽くし×ふるさと納税】越前蟹・松葉蟹・間人蟹を堪能する極上宿' },
      { slug: 'furusato-tax-fresh-sushi-kaiseki-gourmet-inn-stay', title: '【漁港直送・極上寿司会席×ふるさと納税】職人握りと名湯温泉宿完全ガイド' },
      { slug: 'furusato-tax-three-scenic-views-heritage-stay', title: '【日本三景の名宿×ふるさと納税】松島・天橋立・宮島を巡る歴史と美景の旅' }
    ]
  },
  {
    slug: 'furusato-tax-starry-sky-astronomy-night-view-stay',
    componentName: 'FurusatoStarrySkyAstronomyStayPage',
    tag: '星空保護区＆満天の星空天体観測名宿特集',
    title: '満天の星空・天体観測＆星空露天風呂リトリート極上宿×ふるさと納税完全ガイド【2026年最新】阿智村・野辺山高原・石垣島',
    metaTitle: '満天の星空・天体観測＆星空露天風呂リトリート極上宿×ふるさと納税完全ガイド【2026年最新】阿智村・野辺山高原・石垣島',
    shortTitle: '満天の星空観測＆星空露天名宿特集',
    description: '降るような星々の輝きと宇宙の神秘に包まれる！環境省認定「日本一の星空」として名高い長野県阿智村・昼神温泉「信州公共の宿 鶴巻荘」、国立天文台野辺山宇宙電波観測所を擁する日本三選星名所「八ヶ岳グレイスホテル」、国際ダークスカイ協会認定の星空保護区で南十字星を望む「石垣島ビーチホテルサンシャイン」。天体望遠鏡案内や星空露天風呂を誇る名宿に、楽天ふるさと納税トラベルクーポンで実質2,000円負担で宿泊する完全ガイド。',
    heroTag: '星空保護区＆満天の星空天体観測名宿特集',
    leadTitle: '街明かりを離れ、漆黒の夜空に広がる無数の天の川へ。温泉露天風呂から星屑を仰ぐ感動ステイ',
    leadText: '忙しい日常の中でふと見上げる夜空。都市の街明かりにかき消されていた満天の星々が、視界いっぱいに広がる場所があります。環境省の全国星空継続観察で「星が最も輝いて見える場所」第1位に認定された長野県・阿智村。標高1,300mの澄んだ高原の空気と広大な空が広がり、国立天文台の巨大電波望遠鏡が設置されている日本屈指の天体観測の聖地・八ヶ岳野辺山高原。そして日本初の「星空保護区」に認定され、全天88星座のうち84星座や憧れの南十字星を肉眼で観測できる沖縄県・石垣島。湯煙立ち上る露天風呂の湯船に身を委ね、照明を落としたテラスでリクライニングチェアに腰掛けながら天の川の帯を眺める時間は、宇宙の広大さと命の尊さを実感させる唯一無二の感動体験です。人気の星空リゾート宿を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を使って実質2,000円負担で賢く予約。星の瞬きと静寂に包まれるロマンチックな天体観測旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '圧倒的な星の数と天の川！条件が揃えば肉眼で流れ星や人工衛星まで観測可能',
        body: '都市部では見ることのできない6等星や淡い天の川のディテールまでくっきりと浮かび上がる暗黒の夜空。新月の前後や空気の澄んだ季節には、数分おきに流れる流れ星や人工衛星の軌跡、星座の全貌を肉眼で捉えることができ、息を呑む感動が広がります。'
      },
      {
        num: '02',
        title: '星空ソムリエ・天体望遠鏡付き観測会など専門ガイドによる充実の星空ツアー',
        body: '天体観測に特化した宿では、大型の天体望遠鏡を使った土星の環や木星の縞模様の観察会、星空案内人（星空ソムリエ）による星座解説ツアーが毎夜開催されます。双眼鏡の無料貸出や温かい防寒着、星座早見盤のサービスもあり、初心者でも天体の魅力を深く学べます。'
      },
      {
        num: '03',
        title: '暗闇の中で浸かる「星空露天風呂」！波音や森のせせらぎに包まれるリラクゼーション',
        body: '浴場の照明を最小限に落とした星空専用露天風呂では、視界を遮る屋根がなく、首まであたたかい温泉に浸かりながら夜空一面の星を仰ぐことができます。温泉の温もりと夜風の清々しさが織りなす癒やしの空間は、日常のストレスを完全に洗い流してくれます。'
      }
    ],
    hotelDetails: [
      {
        key: 'achi_starry_sky',
        badge: '長野県阿智村・日本一の星空ナイトツアー拠点と美肌の昼神温泉',
        rank: '厳選名宿 第1選',
        desc: '環境省認定の「日本一星空が美しい村」長野県阿智村に佇み、名湯・昼神温泉の良質な美肌の湯を湛える温もりある温泉宿。阿智村名物の「天空の楽園 日本一の星空ナイトツアー」へのアクセス拠点として最適で、ゴンドラで標高1,400mの山頂へ登れば、街の光が完全に消えた漆黒の夜空に圧倒的な星の大パノラマが広がります。pH9.7を誇るアルカリ性単純硫黄泉の大浴場で身体をしっとりと潤し、信州牛や地元の山の幸を使った手作り会席に舌鼓を打つ、心癒やされる星空温泉旅が楽しめます。'
      },
      {
        key: 'nobeyama_starry_sky',
        badge: '長野県南牧村・日本三選星名所・八ヶ岳野辺山高原の全室南向き絶景ホテル',
        rank: '厳選名宿 第2選',
        desc: '日本屈指の天体観測地として知られる標高1,300mの八ヶ岳野辺山高原に位置し、全客室から雄大な八ヶ岳連峰のパノラマを望むリゾートホテル。毎夜開催される無料の「星空観察会」では、星空案内人による解説とともに大型天体望遠鏡で惑星や星雲を観察可能。晴天率が非常に高く、肉眼でも満天の星屑と天の川がくっきりと見渡せます。八ヶ岳山麓の新鮮な高原野菜や信州サーモン、上質な甲州ワインを取り入れたディナーも大好評で、星と大自然を愛する旅人に愛され続けています。'
      },
      {
        key: 'ishigaki_starry_sky',
        badge: '沖縄県石垣市・日本初の星空保護区に輝く南十字星とオーシャンフロントステイ',
        rank: '厳選名宿 第3選',
        desc: '国際ダークスカイ協会により日本で初めて認定された「星空保護区」西表石垣国立公園内に位置し、東シナ海を望む絶好のオーシャンフロントリゾート。ホテルの星空テラスや海へと繋がるインフィニティプールからは、南国の心地よい潮風を感じながら、全天88星座中84星座と憧れの「南十字星」を観測できます。客室はバルコニー付きで穏やかな波音が心地よい寛ぎの空間。石垣牛のステーキや島野菜、近海魚のフレンチ・郷土ディナーとともに、南国の星空バカンスを満喫できます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-starry-sky-open-air-bath-observatory-stay', title: '【満天の星空露天風呂×ふるさと納税】天文台併設＆星降る夜の極上宿' },
      { slug: 'furusato-tax-sea-of-clouds-sky-terrace-hotel-stay', title: '【雲海テラス＆天空リゾート×ふるさと納税】奇跡の絶景に包まれる感動ステイ' },
      { slug: 'furusato-tax-remote-island-luxury-resort-stay', title: '【大人の隠れ家・極上の離島リゾート】日常を完全遮断する南国アイランドステイ' },
      { slug: 'furusato-tax-three-major-night-view-luxury-hotel-stay', title: '【日本三大夜景ホテル×ふるさと納税】宝石を散りばめたような天空パノラマ名宿' }
    ]
  },
  {
    slug: 'furusato-tax-mountain-stream-open-air-bath-healing-stay',
    componentName: 'FurusatoMountainStreamOpenAirStayPage',
    tag: '清流せせらぎ・渓流露天風呂マイナスイオン宿特集',
    title: '清流のせせらぎとマイナスイオンに包まれる渓流露天風呂名宿×ふるさと納税完全ガイド【2026年最新】奥入瀬・黒川・塩原',
    metaTitle: '清流のせせらぎとマイナスイオンに包まれる渓流露天風呂名宿×ふるさと納税完全ガイド【2026年最新】奥入瀬・黒川・塩原',
    shortTitle: '清流せせらぎ渓流露天風呂名宿特集',
    description: '川のせせらぎ、木漏れ日の揺らめき、澄み切った清流のマイナスイオン！渓谷美と名湯が一体となった日本最高峰の渓流露天風呂宿を厳選。特別名勝・奥入瀬渓流沿いに唯一建つネイチャーリゾート「星野リゾート 奥入瀬渓流ホテル」、阿蘇の奥座敷・田の原川の清流を望む茅葺き屋根の隠れ宿「黒川温泉 旅館 奥の湯」、箒川の渓谷美と名物300段石段の野天風呂を誇る「塩原温泉 湯守田中屋」。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '清流せせらぎ・渓流露天風呂マイナスイオン宿特集',
    leadTitle: '水面とほぼ同じ目線で浸かる野趣あふれる湯船。川音のヒーリングと原生林の香りに包まれる至福へ',
    leadText: '都会の人工的な喧騒から完全に離れ、耳に届くのはサラサラと流れる清流のせせらぎと鳥のさえずりだけ。木々の間から差し込む柔らかな木漏れ日を浴びながら、川面とシームレスに繋がるような「渓流露天風呂」に身を浸す時間は、現代人にとって最高の癒やしとデジタルデトックスをもたらしてくれます。苔むした巨岩とブナの原生林を縫って流れる奇跡の清流沿いに佇む青森県「星野リゾート 奥入瀬渓流ホテル」、阿蘇外輪山の豊かな自然の中で川のせせらぎと湯めぐりを心ゆくまで楽しむ熊本県「黒川温泉 旅館 奥の湯」、そして箒川の断崖絶壁に造られた約300段の石段を下りて渓流間近の湯に浸かる栃木県「塩原温泉 湯守田中屋」。大自然の息吹をダイレクトに感じる渓流沿いの特等席宿は四季を通じて人気ですが、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を活用すれば、実質自己負担2,000円で驚くほどお得に滞在可能です。五感を解き放つ、至高の渓流リトリート温泉旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '川のせせらぎによる「1/fゆらぎ効果」と豊かなマイナスイオンで脳疲労を解消',
        body: '川の流れる音には、人間の脳波をα波へと導く「1/fゆらぎ」が含まれており、心拍を穏やかにして精神的ストレスを劇的に低減させます。さらに水しぶきから発生する豊富な天然マイナスイオンと森のフィトンチッドを全身で浴びることで、深い安らぎと快眠が得られます。'
      },
      {
        num: '02',
        title: '新緑、紅葉、雪景色！四季折々のダイナミックな渓谷パノラマを湯船から一望',
        body: '春から初夏にかけての瑞々しい新緑のトンネル、秋に渓谷全体が燃え盛るような錦秋のグラデーション、そして冬の氷瀑や白銀の雪景色。川沿いにせり出すように造られた露天風呂からは、季節の移ろいを肌で感じる壮大な自然美を独占できます。'
      },
      {
        num: '03',
        title: '清流の恵み！岩魚や山女魚の塩焼き、山の幸と地元ブランド牛の滋味あふれる料理',
        body: '清流の冷水で育った新鮮な川魚の炭火塩焼きや、山菜、きのこ、地元の清流米、そして厳選されたブランド和牛。渓流の景観を眺めながらいただく素朴で贅を尽くした郷土料理は、身体の内側を健やかに満たしてくれます。'
      }
    ],
    hotelDetails: [
      {
        key: 'oirase_keiryu',
        badge: '青森県十和田市・特別名勝奥入瀬渓流沿いに唯一佇む星野リゾートの名宿',
        rank: '厳選名宿 第1選',
        desc: '十和田八幡平国立公園の特別名勝・奥入瀬渓流のほとりに唯一建つ、星野リゾートが手掛ける極上のネイチャーリゾート。八甲田山から湧き出る優しい泉質の温泉を引いた「渓流露天風呂」からは、手が届きそうなほど間近に迫る奥入瀬の清流と原生林の絶景が広がります。岡本太郎作の巨大暖炉が迎えるロビーラウンジ、渓流沿いのテラスでいただく朝食、青森の特産リンゴをふんだんに使った贅沢ビュッフェなど、自然と共生する上質なリゾートライフをご体験いただけます。'
      },
      {
        key: 'kurokawa_keiryu',
        badge: '熊本県南小国町・黒川温泉の最奥に佇む田の原川のせせらぎと多彩な露天風呂',
        rank: '厳選名宿 第2選',
        desc: '阿蘇の山々に囲まれた全国屈指の人気温泉地・黒川温泉の最奥部に位置し、茅葺き屋根と竹林の静寂が旅人を迎える隠れ宿。田の原川の清流を望む広大な敷地には、野趣あふれる混浴露天風呂や女性専用露天風呂、川のせせらぎを間近に感じる手湯や貸切風呂など多彩な湯殿が点在。川の音をBGMに源泉かけ流しの名湯を心ゆくまで満喫できます。夕食には熊本名物の馬刺しや肥後赤牛、地元小国の高原野菜を使った手作り会席が並び、心温まる九州の温泉情緒に包まれます。'
      },
      {
        key: 'shiobara_keiryu',
        badge: '栃木県那須塩原市・箒川の渓谷美と名物300段石段を下る野趣満点の露天風呂',
        rank: '厳選名宿 第3選',
        desc: '塩原十一湯の一つ、歴史ある大網温泉に位置し、箒川の深い渓谷を見下ろす断崖に佇む老舗名旅館。宿の名物は、渓谷の底に向かって約300段の石段を下りた先にある野天風呂。川の流れとほぼ同じ目線で浸かる天然温泉は、大自然と一体化する圧倒的な開放感を誇ります。創業百余年の歴史が育んだ行き届いたおもてなしと、囲炉裏炭火でじっくり焼き上げる鮎や地場産食材を使った山里料理が評判で、本物の秘湯と渓流美を愛する旅人に支持されています。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-three-great-waterfalls-onsen-stay', title: '【日本三名瀑×ふるさと納税】那智・袋田・秋保の迫力滝見露天風呂名宿' },
      { slug: 'furusato-tax-waterfall-river-gorge-healing-onsen-stay', title: '【渓谷美＆滝巡り温泉×ふるさと納税】せせらぎと名湯に癒やされる旅' },
      { slug: 'furusato-tax-pure-kakenagashi-secret-hotspring-stay', title: '【源泉かけ流し秘湯×ふるさと納税】加水・加温なしの本物の湯力を堪能する名宿' },
      { slug: 'furusato-tax-whitewater-rafting-canyoning-adventure-stay', title: '【ラフティング＆キャニオニング×ふるさと納税】清流アクティビティ名宿' }
    ]
  },
  {
    slug: 'furusato-tax-autumn-foliage-open-air-bath-stay',
    componentName: 'FurusatoAutumnFoliageOpenAirStayPage',
    tag: '錦秋の絶景・紅葉露天風呂名所旅館特集',
    title: '赤や黄金の山並みを愛でる絶景紅葉露天風呂名旅館×ふるさと納税完全ガイド【2026年最新】日光中禅寺湖・京都嵐山・箱根小涌谷',
    metaTitle: '赤や黄金の山並みを愛でる絶景紅葉露天風呂名旅館×ふるさと納税完全ガイド【2026年最新】日光中禅寺湖・京都嵐山・箱根小涌谷',
    shortTitle: '絶景紅葉露天風呂＆名所旅館特集',
    description: '山一面が燃え盛るような錦秋の絶景！秋の日本を代表する紅葉名所で湯船から赤や黄色のグラデーションを愛でる贅沢ステイ。中禅寺湖畔の静寂と乳白色の天然硫黄泉「日光中禅寺金谷ホテル」、渡月橋たもとで嵐山の紅葉絵巻と伝統京懐石を満喫する「京都 嵐山温泉 渡月亭」、小涌谷の森に包まれ掛け流し温泉で寛ぐ「箱根小涌園 美山楓林」。早期満室となる紅葉シーズンの特等席宿に、楽天ふるさと納税トラベルクーポンで実質2,000円負担で宿泊する完全ガイド。',
    heroTag: '錦秋の絶景・紅葉露天風呂名所旅館特集',
    leadTitle: '湯面に浮かぶモミジの落ち葉、視界を埋め尽くす紅葉パノラマ。年に一度、秋だけの美しき色彩の世界へ',
    leadText: '日本列島が北から南へと燃えるような色彩に染まりゆく「秋の紅葉シーズン」。山全体が赤・橙・黄色の鮮やかなグラデーションに包まれ、湯船の上にも色づいたモミジの葉が静かに舞い落ちる「紅葉露天風呂」は、日本の四季の美意識が凝縮された最高峰の情景です。男体山と中禅寺湖の湖畔に建ち紅葉の森に抱かれるクラシックリゾート「日光中禅寺温泉 中禅寺金谷ホテル」、大堰川と渡月橋のすぐそばで嵐山全体の紅葉絵巻を特等席で眺める京都の名門「渡月亭」、そして小涌谷の豊かな自然林に包まれ秋風を感じながら名湯を愉しめる「箱根小涌園 美山楓林」。紅葉の見頃となる10月〜11月の温泉旅館は全国から予約が殺到し、半年以上前から満室になることも珍しくありませんが、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期間3年）を活用すれば、実質自己負担2,000円で驚くほどお得に紅葉の名宿をリザーブ可能です。秋の息を呑む絶景と美食に出逢う、極上の紅葉温泉紀行へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '争奪戦の「紅葉特等席客室・展望露天」をふるさと納税クーポンでお得に確保',
        body: '秋の紅葉シーズンは年間で最も宿泊料金が高騰するトップシーズンのひとつ。ふるさと納税クーポンを使えば、宿泊費の最大30％が控除補助されるため、普段は手の届きにくい紅葉ビュー客室や高級露天風呂付き客室も実質2,000円の自己負担でお得に滞在できます。'
      },
      {
        num: '02',
        title: '日帰りの混雑を回避！夜の幻想的な紅葉ライトアップや早朝の朝露散策を独占',
        body: '嵐山や日光、箱根などの紅葉名所は日中大変な混雑となりますが、現地に宿泊すれば日帰り客が去った後のライトアップされた幻想的な夜紅葉や、澄み切った朝の光に照らされる静かな散策道をゆったりと独占して楽しむことができます。'
      },
      {
        num: '03',
        title: '松茸、秋刀魚、新米、戻り鰹！実りの秋を味わい尽くす贅沢な秋の味覚会席',
        body: '秋の旅のもうひとつの主役が、芳醇な香りの松茸や焼き魚、栗ご飯、秋茄子、ブランド牛のすき焼きなど、旬の味覚を散りばめた贅沢な秋会席。身体を芯から温める名湯と滋味あふれる秋の恵みが、心身を豊かに満たしてくれます。'
      }
    ],
    hotelDetails: [
      {
        key: 'chuzenji_momiji',
        badge: '栃木県日光市・中禅寺湖畔の森に佇む西洋クラシックと乳白色硫黄泉露天風呂',
        rank: '厳選名宿 第1選',
        desc: '日光国立公園・中禅寺湖畔の豊かな自然林の中に佇む、創業150余年の歴史を持つ金谷ホテル直営のリゾートホテル。秋になるとホテルを取り囲むカエデやミズナラが鮮やかに色づき、紅葉の森に包まれるような贅沢な滞在が叶います。奥日光湯元から引かれる源泉かけ流しの乳白色天然硫黄泉露天風呂「空ぶろ」からは、紅葉の木立越しに星空を眺める至高の湯浴みが可能。伝統のフランス料理ディナーとともに、優雅で落ち着いた秋の休日をご堪能いただけます。'
      },
      {
        key: 'arashiyama_momiji',
        badge: '京都府京都市・嵐山渡月橋たもとで愛でる錦秋の紅葉絵巻と伝統京懐石',
        rank: '厳選名宿 第2選',
        desc: '京都随一の紅葉名所・嵐山の大堰川にかかる渡月橋の南詰に位置し、創業百二十余年の伝統を誇る名門料理旅館。宿を一歩出れば、赤や黄に染まる嵐山全体のパノラマが目の前に広がり、天龍寺や竹林の小径への散策にも最高のロケーションです。客室や食事処でいただく京懐石は、秋の味覚である丹波栗や松茸、生麩や京野菜を美しく盛り込んだ職人技の極み。嵐山温泉の肌に優しい湯に浸かりながら、古都の雅な秋の風情に心ゆくまで浸ることができます。'
      },
      {
        key: 'hakone_momiji',
        badge: '神奈川県箱根町・紅葉の小涌谷の森に包まれる露天風呂と掛け流しの美肌湯',
        rank: '厳選名宿 第3選',
        desc: '箱根登山鉄道・小涌谷駅から車で約5分、豊かな木々に囲まれた閑静な高台に佇む落ち着きある和モダン温泉ホテル。秋には客室の窓一面や館内の庭園が鮮やかな紅葉に染まり、静かな森の別荘にいるような寛ぎの時間を過ごせます。小涌谷温泉の天然温泉を湛えた露天風呂では、秋風を感じながら湯面に映る木々の色彩を鑑賞。箱根湯本や芦ノ湖へのアクセスも良く、箱根美術館の紅葉庭園や仙石原のススキ草原など秋の箱根観光の拠点としても最適です。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-cherry-blossom-spring-hanami-onsen-stay', title: '【春のお花見露天風呂×ふるさと納税】河津桜・吉野山・弘前城の名宿完全ガイド' },
      { slug: 'furusato-tax-autumn-foliage-gorge-onsen-stay', title: '【紅葉の渓谷美＆美肌温泉×ふるさと納税】秋の絶景パノラマ宿' },
      { slug: 'furusato-tax-snow-view-open-air-bath-winter-stay', title: '【絶景雪見露天風呂×ふるさと納税】万座・越後湯沢・定山渓の白銀秘湯名旅館' },
      { slug: 'furusato-tax-luxury-hotspring-ryokan-stay', title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド' }
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

console.log('Finished generating all 4 articles for Round 71!');
