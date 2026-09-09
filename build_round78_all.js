const fs = require('fs');
const path = require('path');

const seasonalHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

// 4記事の詳細データ定義 (Round 78)
const articleConfigs = [
  {
    slug: 'furusato-tax-dog-friendly-dogrun-luxury-resort-stay',
    componentName: 'FurusatoDogFriendlyResortStayPage',
    tag: '愛犬同伴＆広大ドッグラン付き極上リゾートホテル特集',
    title: '愛犬とずっと一緒！天然芝ドッグラン＆愛犬同伴温泉リゾート名宿×ふるさと納税完全ガイド【2026年最新】伊豆高原・那須高原・びわ湖長浜',
    metaTitle: '愛犬とずっと一緒！天然芝ドッグラン＆愛犬同伴温泉リゾート名宿×ふるさと納税完全ガイド【2026年最新】伊豆高原・那須高原・びわ湖長浜',
    shortTitle: '愛犬同伴ドッグラン付き極上リゾート特集',
    description: '大切な家族である愛犬と我慢なしの贅沢ステイ！バリ風ラグジュアリー温泉と愛犬用ビュッフェ・室内外ドッグランを誇る「ウブドの森 伊豆高原」、那須の森に佇む全室離れコテージと広大な天然芝ドッグラン「ホテルフォレストヒルズ那須」、全室レイクビュー＆客室温泉露天風呂付き最高峰ドッグリゾート「レジーナリゾートびわ湖長浜」。愛犬用アメニティ完備の名宿を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '愛犬同伴＆広大ドッグラン付き極上リゾートホテル特集',
    leadTitle: '青空の下、緑の芝生を思い切り駆け回る愛犬の笑顔。お部屋でもレストランでもずっと一緒に過ごす至福の休日へ',
    leadText: '旅行に行きたいけれど、大切な家族である愛犬をペットホテルに預けるのはかわいそう……そんな愛犬家の願いを100％叶えてくれるのが「愛犬同伴特化型ラグジュアリー温泉リゾート」です。客室はもちろん、ロビー、レストラン、テラスに至るまで愛犬と一緒に過ごせるよう設計されており、ノーリードで思いきり走り回れる広大な天然芝ドッグランやアジリティ、雨の日でも安心な屋内ドッグランを完備。さらに愛犬専用の天然温泉バスタブや、プロの料理人が栄養バランスを考えて手作りする愛犬用ビュッフェまで用意されています。伊豆高原の静かな森に佇みバリ島のウブドを思わせる癒やしの空間と充実の愛犬サービスを誇る「ウブドの森 伊豆高原」、那須高原の豊かな自然林に囲まれ全室がコテージ仕様でプライベートドッグラン付き客室も揃う「ホテルフォレストヒルズ那須 with DOGS」、そして日本最大の湖・琵琶湖の湖畔に建ち全室が温泉露天風呂付き＆愛犬と琵琶湖を一望できる「レジーナリゾートびわ湖長浜」。愛犬との絆を深める極上のリゾート旅を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質自己負担2,000円で賢く予約し、家族みんなで笑顔になれる旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '天然芝ドッグラン＆充実の愛犬設備！足洗い場からアメニティまで完全完備',
        body: 'アジリティ付きの広々とした屋外ドッグランや天候を気にせず遊べる室内プレイルーム。ペットシーツ、消臭スプレー、食器、バスタオルなど愛犬用アメニティがすべて揃い、手ぶら感覚で旅行を楽しめます。'
      },
      {
        num: '02',
        title: 'レストランも寝室もずっと一緒！愛犬用のごちそうビュッフェや記念日プレート',
        body: 'お留守番させることなく、食事処にも愛犬専用カートやリードフックで同伴可能。無添加・厳選食材で作られた愛犬用ディナーコースやビュッフェがあり、愛犬の誕生日や記念日のお祝いにも最適です。'
      },
      {
        num: '03',
        title: '飼い主様も大満足！本格的な天然温泉露天風呂と豪華絢爛な郷土ディナー',
        body: 'ペット専用宿でありながら、飼い主のための温泉や料理も超一流。美肌の掛け流し温泉に浸かり、伊豆の金目鯛や那須高原牛、近江牛など各地の最高峰グルメを心ゆくまで満喫できます。'
      }
    ],
    hotelDetails: [
      {
        key: 'izu_dog_resort',
        badge: '静岡県伊東市・伊豆高原のバリ風温泉リゾート！室内外ドッグラン＆愛犬専用温泉ビュッフェ完備',
        rank: '厳選名宿 第1選',
        desc: '伊豆高原の閑静な森の中に位置し、バリ島の高級リゾート「ウブド」の静寂と和の温もりが融合した愛犬同伴専用の極上温泉宿。ウッドチップ敷きの屋外ドッグランと雨でも安心の屋内ドッグランを完備し、愛犬用コミュニティラウンジでは無料の愛犬用おやつや特製ブッフェを用意。飼い主にはアルカリ性単純温泉の貸切露天風呂や大浴場が備わり、夕食には伊豆の新鮮な海の幸や特選牛の創作会席を愛犬同伴で堪能できます。愛犬専用の作務衣やフォトスタジオなど細部まで愛犬ファーストのおもてなしが徹底された名宿です。'
      },
      {
        key: 'nasu_dog_resort',
        badge: '栃木県那須町・那須高原の森に点在するコテージ！テニスコート2面分の広大天然芝ドッグラン',
        rank: '厳選名宿 第2選',
        desc: '那須岳の山麓、標高約1,000mの静かな森の中に約2万平米もの敷地を有する全室愛犬同伴のコテージリゾート。テニスコート2面分を誇る広大な天然芝ドッグランや森の散歩道があり、愛犬が思いきり走り回れる自然豊かな環境です。客室は全室に温泉引き込みの内湯や露天風呂、テラスを完備し、プライベートドッグラン付きコテージも大人気。夕食は那須高原野菜や特選那須牛を使った本格洋食コースをお部屋食または愛犬同伴レストランでゆったりと味わえます。'
      },
      {
        key: 'biwa_dog_resort',
        badge: '滋賀県長浜市・全室レイクビュー＆客室温泉露天風呂付き！最高峰のドッグフレンドリーホテル',
        rank: '厳選名宿 第3選',
        desc: '琵琶湖の北東部・長浜城歴史公園に隣接し、全客室から雄大な琵琶湖の夕陽とパノラマを望むハイクラスな愛犬同伴リゾート。客室のテラスには長浜太閤温泉を引いた客室専用露天風呂を備え、愛犬と一緒に琵琶湖の絶景を眺めながら極上のプライベートステイが楽しめます。館内には滑りにくい床材や愛犬用設備が完備され、夕食には近江牛や琵琶湖の湖魚を取り入れた本格日本料理を愛犬と一緒にレストランで満喫。一流のホスピタリティと快適性が約束された最高峰宿です。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-private-room-open-air-bath-luxury-stay', title: '【客室露天風呂付き客室×ふるさと納税】修善寺・箱根・嵐山の大人の隠れ宿' },
      { slug: 'furusato-tax-highland-ranch-farm-resort-hotel-stay', title: '【高原観光牧場＆ファーム体験×ふるさと納税】那須・トマム・阿蘇の休日' },
      { slug: 'furusato-tax-private-villa-hanare-hideaway-stay', title: '【大人の隠れ家・離れ客室×ふるさと納税】静寂とプライベート重視の名宿' },
      { slug: 'furusato-tax-lakeview-onsen-resort-hotel-stay', title: '【絶景レイクビュー温泉リゾート×ふるさと納税】琵琶湖・洞爺湖・箱根芦ノ湖' }
    ]
  },
  {
    slug: 'furusato-tax-radium-radon-hotspring-healing-stay',
    componentName: 'FurusatoRadiumRadonHotspringStayPage',
    tag: '世界屈指のラジウム・ラドン名湯湯治宿特集',
    title: '奇跡のホルミシス効果！世界屈指のラジウム・ラドン名湯温泉＆本格湯治名旅館×ふるさと納税完全ガイド【2026年最新】鳥取三朝・愛知猿投・新潟村杉',
    metaTitle: '奇跡のホルミシス効果！世界屈指のラジウム・ラドン名湯温泉＆本格湯治名旅館×ふるさと納税完全ガイド【2026年最新】鳥取三朝・愛知猿投・新潟村杉',
    shortTitle: 'ラジウム・ラドン名湯温泉＆湯治名宿特集',
    description: '「吸ってよし、飲んでよし、浸かってよし」と称される奇跡の放射能泉（ラドン・ラジウム温泉）！世界屈指の高濃度ラドン含有量を誇る三朝温泉の最高峰「依山楼 岩崎」、医者がすすめる奇跡の天然ラドン温泉と名水飲泉「猿投温泉 癒しの宿 金泉閣」、四千坪の大庭園と日本最大級のラジウム温泉露天風呂を誇る新潟「村杉温泉 風雅の宿 長生館」。免疫力を高め細胞を活性化させる至高の湯治リトリートを、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '世界屈指のラジウム・ラドン名湯湯治宿特集',
    leadTitle: '湯煙を吸い込み、温泉水を飲み、全身で名湯を浴びる。細胞が目覚める奇跡のラジウム温泉湯治体験へ',
    leadText: '日本全国に数千ある温泉地の中でも、わずか数パーセントしか存在しない稀少な泉質「ラジウム温泉・ラドン温泉（放射能泉）」。微量の天然放射線が身体を刺激することで細胞を活性化させ、免疫力や自然治癒力を高める「放射線ホルミシス効果」をもたらすとされ、古くから難病を癒やす奇跡の湯治場として全国から多くの人々が訪れてきました。その最大の特徴は、湯船に浸かるだけでなく、立ちのぼる気化ラドンを肺から呼吸で吸い込み（吸気浴）、さらに飲泉可能な源泉を身体の内側に取り入れることで、全身の巡りを根底から整えてくれる点にあります。世界最高レベルのラドン含有量を誇り、十二の多彩な湯殿「山の湯」を巡る鳥取県三朝温泉の老舗名門「依山楼 岩崎」、愛知県唯一の天然ラドン温泉として「医者がすすめる温泉」に選ばれ飲泉認可を持つ名宿「猿投温泉 金泉閣」、そして四千坪もの静寂な日本庭園の中に日本最大級のラジウム温泉露天風呂を湛える新潟県「村杉温泉 長生館」。心身の不調を整え活力をチャージする至高の湯治ステイを、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質自己負担2,000円で賢く予約し、身体が生まれ変わる健康湯治旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '「浸かる・吸う・飲む」の三位一体！全身の細胞を活性化させるホルミシス効果',
        body: '湯船に浸かって皮膚から吸収し、浴室に充満するラドンガスを呼吸で肺から取り込み、飲泉処で胃腸からミネラルを補給。三方向から身体に作用し、血流促進・疲労回復・自律神経の調整を促します。'
      },
      {
        num: '02',
        title: '湯疲れしにくい優しい泉質！長期滞在や連泊湯治にも最適な名湯の湯力',
        body: '刺激が強すぎず、肌触りがまろやかな弱アルカリ性の単純放射能泉。何回浸かっても湯あたりしにくいため、1日に何度もゆっくりと温泉に入り、身体の芯からじっくりとデトックスできます。'
      },
      {
        num: '03',
        title: '山陰の松葉蟹・のどぐろ、三河牛、新潟コシヒカリ！胃腸に優しい滋味郷土会席',
        body: '名湯で整った身体に染み渡る、地元の旬の恵みをふんだんに取り入れた手作り会席料理。鳥取和牛や日本海の海の幸、越後平野の旬菜など、滋養に富んだ美食が心と身体を満たします。'
      }
    ],
    hotelDetails: [
      {
        key: 'misasa_radium',
        badge: '鳥取県三朝町・世界屈指のラジウム温泉！創業百年・十二の湯殿を誇る回遊式大庭園風呂「山の湯」',
        rank: '厳選名宿 第1選',
        desc: '開湯八百五十年を誇る名湯・三朝温泉の中心に位置し、創業大正九年の伝統を誇る名門温泉旅館。宿のシンボルは、回遊式大庭園風呂「山の湯」に配された露天風呂、洞窟風呂、歩行湯、ラドン蒸気風呂など趣の異なる12の湯殿。世界有数のラドン含有量を誇る源泉を贅沢に掛け流し、浸かって良し、吸って良しの極上のホルミシス体験が叶います。夕食には日本海の冬の味覚・松葉蟹やのどぐろ、鳥取和牛オレイン55など贅を尽くした山陰会席を提供。文豪・島崎藤村や与謝野鉄幹・晶子夫妻にも愛された歴史ある名宿です。'
      },
      {
        key: 'masutomi_radium',
        badge: '愛知県豊田市・医者がすすめる奇跡の天然ラドン温泉！飲泉認可と手つかずの大自然に抱かれる隠れ里',
        rank: '厳選名宿 第2選',
        desc: '名古屋から車で約40分、愛知県の天然記念物・猿投山の麓に広がる手つかずの自然に囲まれた静かな一軒宿。地下1,200mから湧き出る天然ラドン温泉は、愛知県で初めて飲泉許可を取得し、「医者がすすめる温泉」として全国の湯治ファンに広く知られています。加水なしの100％天然ラドン泉を湛えた大浴場や露天風呂、飲泉処を完備。夕食には三河湾の鮮魚や三河牛、季節の山菜を取り入れた心づくしの郷土会席が並び、都会の喧騒を離れて深い安らぎと健康を取り戻す休日をお過ごしいただけます。'
      },
      {
        key: 'murasugi_radium',
        badge: '新潟県阿賀野市・開湯六百六十年！四千坪の大庭園と日本最大級のラジウム温泉大露天風呂',
        rank: '厳選名宿 第3選',
        desc: '五頭連峰の山裾、開湯六百六十年の歴史を持つ越後名湯・村杉温泉に位置する四千坪の壮大な日本庭園を抱く老舗旅館。宿自慢の大浴場「滝の湯」と日本最大級の広さを誇る庭園大露天風呂には、全国トップクラスのラドン含有量を誇る自家源泉がこんこんと注がれ、庭園の四季折々の草花を眺めながらの湯浴みは格別の贅沢です。館内には吸気浴専用ラウンジや飲泉所も完備。夕食には日本一の米どころ・魚沼コシヒカリと新潟の日本海鮮魚、にいがた和牛を味わえる極上会席が並びます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-carbonated-spring-effervescent-onsen-stay', title: '【天然炭酸泉・泡の秘湯×ふるさと納税】長湯・白骨・有馬の血流促進名湯宿' },
      { slug: 'furusato-tax-pure-kakenagashi-secret-hotspring-stay', title: '【源泉かけ流し秘湯×ふるさと納税】加水・加温なしの本物の湯力を堪能する名宿' },
      { slug: 'furusato-tax-three-medicinal-hotsprings-stay', title: '【日本三大薬湯×ふるさと納税】有馬・草津・松之山の万病を癒やす名湯宿' },
      { slug: 'furusato-tax-natural-mud-bath-mineral-detox-onsen-stay', title: '【天然泥パック＆泥湯温泉×ふるさと納税】八幡平・霧島・別府の美肌宿' }
    ]
  },
  {
    slug: 'furusato-tax-yakuzen-herbal-cuisine-detox-onsen-stay',
    componentName: 'FurusatoYakuzenHerbalCuisineStayPage',
    tag: '本格薬膳料理＆ハーブデトックス温泉宿特集',
    title: '身体の内側から美しく整う！本格薬膳会席＆地熱ハーブ温泉宿×ふるさと納税完全ガイド【2026年最新】金沢湯涌・箱根仙石原・別府鉄輪',
    metaTitle: '身体の内側から美しく整う！本格薬膳会席＆地熱ハーブ温泉宿×ふるさと納税完全ガイド【2026年最新】金沢湯涌・箱根仙石原・別府鉄輪',
    shortTitle: '本格薬膳会席＆ハーブデトックス温泉宿特集',
    description: '陰陽五行の知恵と旬の素材で胃腸からリセット！百万石の奥座敷で金沢伝統の薬膳会席と美肌温泉を味わう「金沢湯涌温泉 湯の出旅館」、富士山を望む絶景露天風呂と健康薬膳ビュッフェ「ホテルグリーンプラザ箱根」、鉄輪温泉の地熱蒸気と薬草・客室露天風呂付き離れ宿「癒しの宿 彩葉」。身体を芯から温める薬膳鍋やハーブ風呂を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '本格薬膳料理＆ハーブデトックス温泉宿特集',
    leadTitle: '和漢植物の芳醇な香り、滋味あふれる薬膳出汁の温もり。内臓からポカポカと温まり、五臓六腑を浄化する食養生ステイへ',
    leadText: '日々の忙しさや不規則な食生活で疲れた胃腸と心身を、東洋医学の「医食同源」の知恵によって内側から優しくリセットする「薬膳料理＆ハーブ温泉宿」。クコの実、高麗人参、生姜、ハトムギ、地元で採れた滋養豊かな季節の薬草や根菜を、熟練の料理人が出汁の旨味と絶妙に調和させた薬膳会席は、苦みやクセがなく、身体が自然と求める深い美味しさに満ちています。金沢百万石の奥座敷・湯涌温泉で国際薬膳調理師が監修する本格的な加賀薬膳会席と美肌の名湯を誇る「湯の出旅館」、箱根仙石原の高原に位置し富士山を望む露天風呂と健康志向の薬膳旬菜プレミアムビュッフェが人気の「ホテルグリーンプラザ箱根」、そして別府鉄輪の豊かな地熱蒸気と薬草スチーム、全室源泉掛け流しの客室露天風呂を備える大人の隠れ離れ宿「癒しの宿 彩葉」。温泉の温熱効果と薬膳の相乗効果で、滞在するだけで肌の透明感が増し、身体が羽のように軽くなる至福のウェルネス旅を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を使って実質2,000円で賢く予約し、極上のインナービューティー体験へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '「医食同源」の知恵で身体を芯から温める！滋味豊かな薬膳スープと旬の漢方会席',
        body: '和漢素材と旬の野菜・魚介を組み合わせた特製薬膳鍋やスープ。血行を促進し冷えやむくみを改善しながら、素材本来の澄んだ旨味が身体の隅々まで染み渡ります。'
      },
      {
        num: '02',
        title: '温泉のミネラルと薬草の相乗効果！美肌と代謝を高めるハーブスチーム＆露天風呂',
        body: '温泉に浸かることで毛穴が開き、薬膳素材の栄養吸収がアップ。地熱蒸気を利用した薬草スチームサウナやハーブ湯との組み合わせで、全身の老廃物がすっきりと排出されます。'
      },
      {
        num: '03',
        title: '身体が重くならない！消化に優しく翌朝の目覚めが劇的に軽くなるヘルシーディナー',
        body: '油分や塩分を控えめにし、出汁と生薬の風味で仕上げた贅沢な料理。夜遅くに食べても胃もたれせず、翌朝すっきりと心地よい空腹感と軽快な目覚めを実感できます。'
      }
    ],
    hotelDetails: [
      {
        key: 'kanazawa_yakuzen',
        badge: '石川県金沢市・金沢百万石の奥座敷！国際薬膳調理師監修の金沢薬膳会席と閑静な名旅館',
        rank: '厳選名宿 第1選',
        desc: '金沢駅から車で約20分、歴代加賀藩主も湯治に訪れた名湯・湯涌温泉の清流沿いに佇む老舗温泉旅館。宿の最大の目玉は、国際薬膳調理師の資格を持つ料理長が手掛ける本格的な「金沢薬膳会席」。加賀野菜や日本海の新鮮魚介に、和漢生薬や季節の薬草を絶妙に融合させ、美味と健康を極限まで両立させています。無色透明でまろやかな弱アルカリ性の湯涌温泉に浸かり、落ち着きある数寄屋造りの客室でゆったりと過ごす、心身の浄化にふさわしい大人の美食宿です。'
      },
      {
        key: 'hakone_yakuzen',
        badge: '神奈川県箱根町・富士山を望む絶景露天風呂！健康薬膳と旬菜プレミアムディナービュッフェ',
        rank: '厳選名宿 第2選',
        desc: '箱根仙石原の雄大な高原に建ち、露天風呂から真正面に霊峰・富士山を一望できる絶景リゾートホテル。夕食ビュッフェでは、季節の健康薬膳スープや彩り豊かな温野菜、スーパーフードを取り入れた前菜など、ウェルネスにこだわったメニューが豊富に並びます。目の前で焼き上げるローストビーフや握り寿司など豪華な料理も充実。仙石原温泉の自家源泉を湛えた露天風呂で富士山を眺めながら温まり、身体に優しい美食でエネルギーをチャージできます。'
      },
      {
        key: 'beppu_yakuzen',
        badge: '大分県別府市・鉄輪の地熱と薬草の恵み！全室源泉掛け流し客室露天風呂付きの大人の隠れ離れ宿',
        rank: '厳選名宿 第3選',
        desc: '湯煙たなびく別府・鉄輪温泉の静かな小高い丘に位置し、雑木林の庭園に全客室が離れ形式で点在する極上の隠れ宿。全室に源泉かけ流しの専用内湯または露天風呂を備え、鉄輪名物の薬草茶やハーブティーが用意されたデトックス空間が魅力です。食事処では地熱蒸気を利用したヘルシーな地獄蒸し料理や豊後牛、旬の野菜をたっぷり使った身体に優しい会席を提供。時間を気にせずプライベート温泉に何度も浸かり、内側から美しく整う休日をお過ごしいただけます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-natural-mud-bath-mineral-detox-onsen-stay', title: '【天然泥パック＆泥湯温泉×ふるさと納税】八幡平・霧島・別府の美肌宿' },
      { slug: 'furusato-tax-sand-bath-sunamushi-detox-onsen-stay', title: '【天然砂むし温泉＆名湯デトックス×ふるさと納税】指宿・別府の再生宿' },
      { slug: 'furusato-tax-three-medicinal-hotsprings-stay', title: '【日本三大薬湯×ふるさと納税】有馬・草津・松之山の万病を癒やす名湯宿' },
      { slug: 'furusato-tax-spring-water-soba-tofu-onsen-stay', title: '【湧水手打ち蕎麦＆名水とうふ温泉宿×ふるさと納税】清らかな水の恵み旅' }
    ]
  },
  {
    slug: 'furusato-tax-wa-modern-twin-bed-comfortable-ryokan-stay',
    componentName: 'FurusatoWaModernTwinBedStayPage',
    tag: '快適和モダンツインベッド名門温泉旅館特集',
    title: '畳の温もりと高級ベッドの極上快眠！和モダンツインベッド客室温泉旅館×ふるさと納税完全ガイド【2026年最新】黒川・箱根強羅・京都嵐山',
    metaTitle: '畳の温もりと高級ベッドの極上快眠！和モダンツインベッド客室温泉旅館×ふるさと納税完全ガイド【2026年最新】黒川・箱根強羅・京都嵐山',
    shortTitle: '和モダンツインベッド客室温泉旅館特集',
    description: 'お布団の上げ下げ不要＆足腰に優しい快適ベッドステイ！シモンズ社製高級ベッドと渓流露天風呂を備えた「黒川温泉 旅館湯本荘」、全室檜露天風呂付き和モダンローベッド客室「箱根強羅温泉 季の湯 雪月花」、全館畳敷き和モダンローベッドと5つの無料貸切風呂「京都 嵐山温泉 花伝抄」。シニア世代や三世代家族、カップルに選ばれる快適名宿を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '快適和モダンツインベッド名門温泉旅館特集',
    leadTitle: '素足に心地よい畳の感触、身体を優しく受け止める極上のマットレス。和の風情とホテルの快適性が融合した新時代の湯宿へ',
    leadText: '「旅館の落ち着いた和の風情や畳の香りは大好きだけれど、床に敷いた布団から立ち上がるのは足腰に負担がかかる」「食事の前後にお布団の上げ下げで仲居さんが部屋に入ってくるのが少し落ち着かない」――そんな現代の旅行者のニーズに応えて大人気となっているのが「和モダンツインベッド（ローベッド）客室」です。琉球畳や無垢材のフローリングの上に、シモンズやシーリー、サータなど世界の一流ホテルが採用する高品質なマットレスを設置。日中は畳の上で足を伸ばしてのんびりと寛ぎ、夜は身体の負担を軽減するベッドで朝までぐっすり熟睡できるという、旅館とホテルの“いいとこ取り”の滞在スタイルが実現します。阿蘇の清流沿いに建ちシモンズ社製ベッド完備の和モダン客室を誇る「黒川温泉 旅館湯本荘」、強羅駅前すぐの好立地で全客室に檜の温泉露天風呂と快適な低床ベッドを備える「季の湯 雪月花」、そして全館畳敷きで素足のまま歩け嵐山の観光拠点として五つの貸切風呂を満喫できる「京都 嵐山温泉 花伝抄」。ご両親への親孝行旅行やご夫婦の記念日旅に最適な名宿を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質2,000円で賢く予約し、快適至極の温泉旅行へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '足腰に負担をかけない立ち座り！シニア世代やご両親への親孝行旅に絶大な安心感',
        body: '布団からの起き上がりが辛いご年配の方も、適度な高さのあるベッドなら膝や腰への負担なくスムーズ。段差を極力抑えたユニバーサルな設計で三世代旅行にも選ばれています。'
      },
      {
        num: '02',
        title: 'いつでも横になれる自由！お布団の上げ下げがなく完全プライベートな空間を維持',
        body: 'チェックイン後すぐにゴロンと横になって一休み。仲居さんのお布団敷きを待つ必要がなく、部屋の鍵を開けた瞬間からチェックアウトまで完全に自分たちだけの時間を過ごせます。'
      },
      {
        num: '03',
        title: '世界の一流マットレスによる極上の寝心地！名湯との相乗効果で最高の目覚め',
        body: 'シモンズ社製ポケットコイルなどの上質マットレスが体圧を理想的に分散。温泉で芯から温まった身体を包み込み、旅先特有の睡眠不足とは無縁の深い快眠へと導かれます。'
      }
    ],
    hotelDetails: [
      {
        key: 'kurokawa_modern',
        badge: '熊本県南小国町・黒川温泉の中心に佇む清流の宿！シモンズ社製ベッド完備の和モダン客室',
        rank: '厳選名宿 第1選',
        desc: '黒川温泉街の中央を流れる田の原川のほとりに位置し、木造の温もりある佇まいが人気の温泉旅館。リニューアルされた和モダン客室には、快眠を約束するシモンズ社製の高級ベッドを完備し、和室の風情そのままに快適な眠りを提供しています。川のせせらぎを間近に感じる大浴場や露天風呂、無料で利用できる趣の異なる貸切風呂も大好評。夕食には熊本特産の霜降り馬刺しや肥後あか牛、地元小国の採れたて山菜を使った繊細な手作り会席が並び、心温まる九州の温泉情緒に包まれます。'
      },
      {
        key: 'hakone_modern',
        badge: '神奈川県箱根町・強羅駅徒歩1分！全室客室檜露天風呂＆快適ローベッド付きの人気名門宿',
        rank: '厳選名宿 第2選',
        desc: '箱根登山鉄道・強羅駅の目の前に建ち、全客室のテラスに檜造りの客室露天風呂を備えた共立リゾート屈指の人気宿。客室には快適なローベッドが配置され、和の寛ぎとベッドの寝心地の良さを両立しています。大浴場では強羅温泉の異なる二つの源泉を楽しめるほか、庭園に点在する3つの無料貸切露天風呂も完備。夕食には「和食会席」または「国産牛しゃぶしゃぶ・寿司」の2つのコースから好みに合わせて選択可能で、カップルやご夫婦の快適な箱根旅行に絶大な支持を集めています。'
      },
      {
        key: 'arashiyama_modern',
        badge: '京都府京都市・阪急嵐山駅前！全館畳敷きの和モダンローベッド客室と五つの無料貸切温泉',
        rank: '厳選名宿 第3選',
        desc: '阪急嵐山駅の目の前に位置し、玄関で靴を脱いだら全館すべて畳敷きの心地よい空間が広がる和モダン温泉宿。客室は京都の伝統的な京町家の風情を残しながら、快適な低床ツインベッドを配置し、旅の疲れを優しく癒やします。天然温泉の大浴場に加え、趣の異なる5つの貸切風呂（檜・陶器・岩・竹・レンガ）を予約不要・無料で何度でも湯めぐり可能。夕食には四季折々の京会席と揚げたて天ぷらのオーダーバイキングを堪能でき、古都・嵐山の風雅な夜を満喫できます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-kanreki-celebration-oyakoukou-onsen-stay', title: '【還暦祝い＆親孝行温泉旅×ふるさと納税】感謝を届けるおもてなし名旅館' },
      { slug: 'furusato-tax-three-generation-family-luxury-stay', title: '【三世代ファミリー旅行×ふるさと納税】広々客室・バイキング・名湯の旅' },
      { slug: 'furusato-tax-private-room-open-air-bath-luxury-stay', title: '【客室露天風呂付き客室×ふるさと納税】修善寺・箱根・嵐山の大人の隠れ宿' },
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

console.log('Finished generating all 4 articles for Round 78 (307 articles total)!');
