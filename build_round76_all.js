const fs = require('fs');
const path = require('path');

const seasonalHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

// 4記事の詳細データ定義 (Round 76)
const articleConfigs = [
  {
    slug: 'furusato-tax-art-museum-architecture-luxury-hotel-stay',
    componentName: 'FurusatoArtMuseumHotelStayPage',
    tag: '現代アート＆名建築ミュージアムホテル特集',
    title: '安藤忠雄建築や現代アートと眠る美術館ホテル＆アートリゾート×ふるさと納税完全ガイド【2026年最新】直島・箱根強羅・青森',
    metaTitle: '安藤忠雄建築や現代アートと眠る美術館ホテル＆アートリゾート×ふるさと納税完全ガイド【2026年最新】直島・箱根強羅・青森',
    shortTitle: '美術館ホテル＆現代アートリゾート名宿特集',
    description: '絵画や彫刻、世界的建築家の美意識に包まれて過ごす知的で贅沢な休日！世界的建築家・安藤忠雄が設計し現代アート作品と共生する瀬戸内直島の最高峰「ベネッセハウス」、彫刻の森美術館やポーラ美術館至近・全室温泉露天風呂付きモダンリゾート「箱根・強羅 佳ら久」、十和田市現代美術館の拠点となり岡本太郎作品や伝統ねぶたアートを体感する「星野リゾート 青森屋」。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '現代アート＆名建築ミュージアムホテル特集',
    leadTitle: 'コンクリートの陰影、空間を彩る現代アート、夜の静寂に佇む彫刻たち。感性が研ぎ澄まされるアートステイへ',
    leadText: '絵画や彫刻をただ眺めるだけでなく、美術館そのものに泊まり、夜の閉館後の静けさの中でアートと対話し、朝陽に照らされる名建築の美しさに目覚める――それが「美術館ホテル（ミュージアムホテル・アートリゾート）」の醍醐味です。瀬戸内海に浮かぶアートの聖地・直島で、世界的建築家・安藤忠雄氏の設計によるコンクリート打放しの建築とモネや草間彌生をはじめとする現代アートが融合した世界的名宿「ベネッセハウス」、箱根の山並みを望む強羅の地に佇み彫刻の森美術館やポーラ美術館のアート巡りの拠点として全室温泉露天風呂を備えるラグジュアリー旅館「箱根・強羅 佳ら久」、そして十和田市現代美術館や奥入瀬のアート散策拠点となり、岡本太郎作の巨大暖炉や職人によるねぶた絵画が館内を彩る「星野リゾート 青森屋」。日常の喧騒から離れ、感性を豊かに刺激する美の空間での滞在を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質自己負担2,000円で賢く予約し、知的好奇心を満たす贅沢なアート紀行へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '宿泊者だけの特権！夜間貸切の美術館散策や客室に飾られた本物のアート作品',
        body: '一般の鑑賞者が帰った後の静謐な夜の美術館を独占して鑑賞できる特別な宿泊者プログラム。客室の壁やテラス、回廊にも一流アーティストの作品が展示され、生活とアートが溶け合う至福のひとときを体験できます。'
      },
      {
        num: '02',
        title: '世界的建築家が創り上げた空間美！光と影、幾何学的な造形が織りなす圧倒的世界観',
        body: '安藤忠雄氏をはじめとする名建築家による自然光の計算された採光、雄大な自然美と幾何学建築のコントラスト。建物自体が一つの巨大な芸術品であり、歩くだけでインスピレーションを刺激されます。'
      },
      {
        num: '03',
        title: '器や盛り付けにも美学が宿る！五感で味わうアートな創作フレンチ＆日本料理',
        body: '地元特産の新鮮な食材を使用し、美しい色彩とアーティスティックな盛り付けで仕上げられるディナー。作家ものの陶器やガラス器とともに供される一皿一皿が、旅の感動をさらに深めてくれます。'
      }
    ],
    hotelDetails: [
      {
        key: 'naoshima_art',
        badge: '香川県直島町・世界的建築家安藤忠雄設計！現代アートと自然が融合する世界屈指の美術館ホテル',
        rank: '厳選名宿 第1選',
        desc: '瀬戸内海に浮かぶアートの島・直島の南端に位置し、「自然・建築・アートの共生」をコンセプトに安藤忠雄氏の設計によって創られた世界的に名高いミュージアムホテル。美術館の内部に宿泊する「ミュージアム」棟をはじめ、海を間近に望む「パーク」「ビーチ」、丘の上に佇む「オーバル」など個性的な4つの棟で構成されています。宿泊客は夜間も美術館内を自由に散策でき、静寂の中で現代アートの傑作と向き合う贅沢な時間が叶います。瀬戸内海の豊かな魚介を活かしたフレンチや日本料理とともに、世界中の旅人が憧れる唯一無二のアートリトリートをご体験いただけます。'
      },
      {
        key: 'hakone_art',
        badge: '神奈川県箱根町・彫刻の森美術館至近！全室客室温泉露天風呂付きラグジュアリーアート空間',
        rank: '厳選名宿 第2選',
        desc: '箱根・強羅の豊かな自然に包まれ、箱根彫刻の森美術館やポーラ美術館、岡田美術館など国内有数のアートスポットへのアクセス拠点として誕生したハイエンド温泉旅館。館内には随所に洗練されたアート作品や現代工芸が配され、五感を優しく解き放つ美の空間が広がります。全客室のバルコニーに強羅温泉の自家源泉を引いた客室露天風呂を備え、山並みを見渡す展望露天風呂や多彩なラウンジも完備。厳選された旬の食材を独創的な美意識で仕立てるグリルや会席ディナーとともに、大人の贅沢なアート＆温泉ステイを堪能できます。'
      },
      {
        key: 'towada_art',
        badge: '青森県三沢市・十和田市現代美術館拠点！岡本太郎作品と青森のねぶた祭り文化が息づく宿',
        rank: '厳選名宿 第3選',
        desc: '青森の豊かな自然と伝統文化をまるごと体感できる星野リゾートの温泉宿。草間彌生やロン・ミュエクの巨大彫刻で世界的に注目される「十和田市現代美術館」への観光拠点として絶好の立地です。宿のラウンジには岡本太郎作の巨大な暖炉「森の神話」「河神」が堂々と鎮座し、館内各所に伝統のねぶた絵画や津軽裂織のアートが散りばめられています。池に浮かぶような開放的な露天風呂「浮湯」で源泉かけ流しの名湯に浸かり、青森名物のホタテや牛肉、郷土料理を味わうビュッフェとともに、北国のダイナミックな芸術文化に浸ることができます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-tangible-cultural-property-architectural-ryokan-stay', title: '【登録有形文化財の宿×ふるさと納税】匠の建築美と歴史を味わう名門旅館' },
      { slug: 'furusato-tax-setouchi-island-luxury-ocean-resort-stay', title: '【瀬戸内多島美アイランドリゾート×ふるさと納税】小豆島・鞆の浦・生口島の極上宿' },
      { slug: 'furusato-tax-private-room-open-air-bath-luxury-stay', title: '【客室露天風呂付き客室×ふるさと納税】修善寺・箱根・嵐山の大人の隠れ宿' },
      { slug: 'furusato-tax-three-great-pottery-towns-gourmet-stay', title: '【日本三大焼き物の里×ふるさと納税】器の美と美食を愉しむ名宿' }
    ]
  },
  {
    slug: 'furusato-tax-book-library-hotel-retreat-stay',
    componentName: 'FurusatoBookLibraryHotelStayPage',
    tag: '本に囲まれて眠る至福のブックホテル特集',
    title: '数千冊の本に囲まれて眠る至福の読書リトリート＆ブックホテル×ふるさと納税完全ガイド【2026年最新】播磨福崎・神保町・名古屋',
    metaTitle: '数千冊の本に囲まれて眠る至福の読書リトリート＆ブックホテル×ふるさと納税完全ガイド【2026年最新】播磨福崎・神保町・名古屋',
    shortTitle: '本に囲まれて眠るブックホテル特集',
    description: '活字の海に溺れ、お気に入りの一冊と夜を明かす贅沢！民俗学者・柳田國男ゆかりの歴史建築を再生したブックホテル「NIPPONIA 播磨福崎 蔵書の館」、古書の街・神保町に佇み本を愉しむための隠れ家デザインホテル「BOOK HOTEL 神保町」、24時間営業のブックカフェと読書専用客室を備える「ランプライトブックスホテル名古屋」。おこもり読書ステイを、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '本に囲まれて眠る至福のブックホテル特集',
    leadTitle: '壁一面を埋め尽くす書架、静かにページをめくる心地よい音。まだ見ぬ物語の世界へ旅立つ至福のおこもり読書へ',
    leadText: '日々の仕事やスマートフォンの通知から離れ、静かな空間で一冊の本とじっくり向き合う――現代人にとってこれ以上ない贅沢なリフレッシュが「ブックホテル（泊まれる本屋・ライブラリーホテル）」での滞在です。ロビーから廊下、客室に至るまで数千冊もの本が美しく並び、普段は手に取らないような文学作品、アートブック、写真集、エッセイとの偶然の出逢い（セレンディピティ）が待っています。日本民俗学の父・柳田國男の生誕地で三百年の歴史を誇る大庄屋旧邸宅を再生し、民俗学や妖怪・日本の歴史に関する稀少な蔵書に囲まれて暮らすように泊まる兵庫県「NIPPONIA 播磨福崎 蔵書の館」、世界一の本の街・神田神保町に位置し、選書専門スタッフが厳選した書籍とともに本の世界に沈み込む体験を提供する「BOOK HOTEL 神保町」、そして「本を読むためにデザインされた客室」と24時間オープンのブックカフェを併設する愛知県「ランプライトブックスホテル名古屋」。お気に入りのドリンクを片手にベッドの中で活字を追い、眠くなったらそのまま心地よい眠りに落ちる夢のような休日を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を使って実質2,000円で賢く予約し、心豊かな読書トリップへ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '数千冊の蔵書がすべて自由に読み放題！部屋への持ち込みも可能な読書パラダイス',
        body: '小説、写真集、ビジネス書、詩集、コミックまで、専門のブックディレクターが独自のテーマで選書。ロビーの特等席ラウンジはもちろん、自分の客室のベッドやソファで時間を気にせず読みふけることができます。'
      },
      {
        num: '02',
        title: 'スマホを置いてデジタルデトックス！脳疲労をリセットする圧倒的没入感',
        body: 'SNSやメールの通知から完全に解放され、文字の世界に深く没入することで、乱れがちな自律神経が整い深い安らぎが得られます。間接照明や読書灯、上質なベッドなど読書を快適にする空間設計も魅力です。'
      },
      {
        num: '03',
        title: 'こだわりのハンドドリップ珈琲や夜のブックバー！読書を彩る極上カフェタイム',
        body: '本を読みながら味わう淹れたてのスペシャルティコーヒーや紅茶、夜には物語をイメージしたオリジナルカクテルやワイン。読書の時間をさらに豊かにする上質なドリンクとスイーツが揃っています。'
      }
    ],
    hotelDetails: [
      {
        key: 'hakone_book',
        badge: '兵庫県福崎町・民俗学の父柳田國男ゆかり！三百年大庄屋邸宅を再生した歴史ある蔵書の宿',
        rank: '厳選名宿 第1選',
        desc: '日本民俗学の父・柳田國男の故郷である兵庫県福崎町に位置し、約三百年前に建てられた大庄屋・三木家の旧邸宅を洗練された宿泊施設として再生した名門古民家ホテル。柳田國男の著書や民俗学、妖怪文化、日本の歴史に関する膨大な書籍が書架に並び、歴史ある木造日本建築の陰影の中で静かに読書を楽しめる贅沢な空間が広がります。地元の新鮮な野菜や但馬牛を使った手作りの創作フレンチ会席、檜風呂の温もりとともに、まるで学問の館にタイムスリップしたかのような静謐な読書リトリートが叶います。'
      },
      {
        key: 'echigo_book',
        badge: '東京都千代田区・世界一の本の街神保町！「本を愉しむ」ためにデザインされた隠れ家ホテル',
        rank: '厳選名宿 第2選',
        desc: '古書店や出版社が立ち並ぶ世界一の本の街・神田神保町の中心に位置し、「本を愉しむためのホテル」をコンセプトに誕生した話題のデザインホテル。各フロアや客室ごとに「恋愛」「旅」「食」「人生」など異なるテーマでキュレーションされた本が並び、スタッフによる選書サービスも好評です。客室にはこだわりの読書照明やフットマッサージャー、コーヒー器具を完備。神保町名物のカレーや喫茶店巡りを楽しみながら、都会の真ん中で本の世界に深く溺れる至福のステイを体験できます。'
      },
      {
        key: 'shibu_book',
        badge: '愛知県名古屋市・本の世界に没頭する読書特化型ホテル！24時間オープンのブックカフェ併設',
        rank: '厳選名宿 第3選',
        desc: '名古屋・伏見の緑豊かな白川公園にほど近く、「本の世界を旅するホテル」をテーマに創られた新感覚のブティックホテル。1階には約3,000冊の書籍を揃えた24時間営業の本格ブックカフェを併設し、読書のお供にぴったりの焼き立てミニバーガーやスイーツを提供。客室は間接照明やリーディングライト、ゆったりとしたオットマン付きチェアなど、読書のために徹底的に計算された設計となっています。読書好きな一人旅やカップルの週末リフレッシュに最適な空間です。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-art-museum-architecture-luxury-hotel-stay', title: '【美術館ホテル＆現代アートリゾート×ふるさと納税】直島・箱根・青森' },
      { slug: 'furusato-tax-solo-retreat-private-onsen-stay', title: '【一人旅・おひとり様温泉リトリート×ふるさと納税】静寂と自由の名宿' },
      { slug: 'furusato-tax-literary-heritage-historic-onsen-stay', title: '【文豪ゆかりの名湯温泉宿×ふるさと納税】夏目漱石・太宰治・志賀直哉の足跡' },
      { slug: 'furusato-tax-sweets-cafe-wagashi-retro-onsen-stay', title: '【名物和菓子＆カフェ巡り温泉宿×ふるさと納税】甘味と名湯のレトロ旅' }
    ]
  },
  {
    slug: 'furusato-tax-spill-over-kaisendon-seafood-bowl-stay',
    componentName: 'FurusatoSpillOverKaisendonStayPage',
    tag: 'こぼれ海鮮丼＆朝食いくら盛り放題ホテル特集',
    title: '宝石のように輝くいくら盛り放題＆贅沢こぼれ海鮮丼！港町の名門ホテル×ふるさと納税完全ガイド【2026年最新】函館・金沢・伊東',
    metaTitle: '宝石のように輝くいくら盛り放題＆贅沢こぼれ海鮮丼！港町の名門ホテル×ふるさと納税完全ガイド【2026年最新】函館・金沢・伊東',
    shortTitle: 'こぼれ海鮮丼＆朝食いくら盛り放題ホテル特集',
    description: '丼から溢れんばかりの新鮮魚介を朝から心ゆくまで！全国朝食ランキングの絶対王者・いくらかけ放題の「ラビスタ函館ベイANNEX」、近江町市場直送の海の幸と大正ロマンの天然温泉を誇る「金沢白鳥路 ホテル山楽」、海底温泉魚風呂と金目鯛・海鮮舟盛りバイキングの「伊東温泉 サンハトヤ」。自分好みに作る究極のオリジナル海鮮丼ステイを、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: 'こぼれ海鮮丼＆朝食いくら盛り放題ホテル特集',
    leadTitle: '黄金色にプチプチ弾けるいくら、甘みたっぷりの帆立、脂の乗ったサーモンと鮪。朝からお腹いっぱい海の幸を頬張る至福へ',
    leadText: '旅の朝の最大のハイライトといえば、地元漁港から毎朝届くピチピチの新鮮魚介を炊きたてのご飯の上に好きなだけ盛り付ける「勝手丼・こぼれ海鮮丼バイキング」。スプーンですくうたびにこぼれ落ちそうになるたっぷりの特製漬けいくら、とろけるような甘みのホタテや甘エビ、濃厚なマグロやサーモン、ぷりぷりのイカを何層にも重ねて作る自分だけの贅沢丼は、ひと口頬張るごとに思わず笑みがこぼれる至極の美味しさです。全国ホテル朝食ランキングで長年日本一の座を守り続け、いくらかけ放題の元祖として知られる名門「ラビスタ函館ベイANNEX」、金沢の食の台所・近江町市場にほど近く加賀の伝統料理と豪華海鮮が並ぶクラシック名門宿「金沢白鳥路 ホテル山楽」、そして相模湾の新鮮な地魚や金目鯛、大迫力の海鮮舟盛りバイキングと名物・海底温泉魚風呂を誇る「伊東温泉 サンハトヤ」。朝から贅沢三昧の海鮮モーニングと良質な天然温泉を堪能できる名宿を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質自己負担2,000円で賢く予約し、大満足のグルメ旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: 'いくら、帆立、甘エビ、マグロ！好きなネタを好きなだけ盛る「勝手丼」の圧倒的贅沢',
        body: 'ホテルの朝食ビュッフェで大人気の海鮮丼コーナー。ご飯が見えなくなるほどいくらを敷き詰めたり、高級魚介を贅沢に重ねたりと、街中の海鮮丼専門店なら数千円する豪華丼を自分好みに無限に作れます。'
      },
      {
        num: '02',
        title: '朝から贅沢に満たされる！市場直送ならではの鮮度抜群な海のミルクと旨味',
        body: '港町直結のホテルだからこそ実現する圧倒的な鮮度。身の引き締まったお造りや、ぷちぷちと弾けて濃厚な旨味が広がるいくらは、一日の観光のエネルギーを最高潮にチャージしてくれます。'
      },
      {
        num: '03',
        title: '天然温泉展望風呂や海底風呂！海を眺めながらの名湯で心身リフレッシュ',
        body: '函館山と港を見下ろす最上階展望露天風呂や金沢の名湯、巨大水槽を魚が泳ぐユニークな海底温泉など、温泉の魅力も超一流。美味しい海鮮と名湯の組み合わせが至高の満足感をもたらします。'
      }
    ],
    hotelDetails: [
      {
        key: 'hakodate_kaisendon',
        badge: '北海道函館市・朝食いくら盛り放題の伝説！金森赤レンガ倉庫至近のハイクラス別館',
        rank: '厳選名宿 第1選',
        desc: '函館ベイエリアの金森赤レンガ倉庫に隣接し、全国の旅行者を虜にする「朝食いくらかけ放題」の代名詞的ホテル・ラビスタ函館ベイのハイクラス別館。朝食バイキングでは、北海道産いくらを惜しみなくスプーンで山盛りにできるほか、獲れたてのイカ、甘エビ、サーモン、ホタテなど贅沢な海の幸を盛り放題。さらに炙り焼きや北海道産牛乳・スイーツなど超豪華なラインナップが並びます。最上階には函館の夜景を一望する自家源泉の天然温泉大浴場や露天風呂を完備し、上質なクラシック空間で極上の函館ステイを堪能できます。'
      },
      {
        key: 'kanazawa_kaisendon',
        badge: '石川県金沢市・近江町市場至近！大正ロマンの風情と加賀の美食海鮮朝食バイキング',
        rank: '厳選名宿 第2選',
        desc: '金沢城公園に隣接し、兼六園や「金沢市民の台所」近江町市場へも徒歩圏という観光の特等席に位置するクラシックホテル。朝食ビュッフェでは、日本海直送の新鮮魚介を自分で盛り付ける特製海鮮丼をはじめ、郷土料理の治部煮や加賀野菜の天ぷらなど金沢の美味が美しく並びます。館内にはステンドグラスが輝く大正ロマンの優雅な雰囲気が漂い、地下から湧き出る琥珀色の美肌天然温泉大浴場も完備。歴史と美食を両立させた大人の金沢旅行に絶大な人気を誇る名門宿です。'
      },
      {
        key: 'izu_kaisendon',
        badge: '静岡県伊東市・相模灘一望のオーシャンフロント！名物海底温泉魚風呂と豪華海鮮ディナーバイキング',
        rank: '厳選名宿 第3選',
        desc: '伊豆・伊東の海岸線に堂々とそびえ、全室から相模灘のオーシャンビューを望む海辺の一大温泉リゾートホテル。宿の最大のハイライトは、巨大水槽の中をウミガメや魚たちが悠々と泳ぐ名物の「海底温泉魚風呂」。水族館の中で温泉に浸かっているかのようなユニークな体験が楽しめます。夕食や朝食のバイキングでは、名物の金目鯛の煮付けをはじめ、新鮮な刺身や握り寿司、海鮮舟盛りが並び、魚好きにはたまらない海の幸の饗宴が待っています。伊豆の青い海を眺めながらファミリーやカップルで賑やかに過ごせる名宿です。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-award-winning-breakfast-gourmet-hotel-stay', title: '【朝食受賞ホテル×ふるさと納税】いくら盛り放題＆焼きたてパンの贅沢宿' },
      { slug: 'furusato-tax-fresh-sushi-kaiseki-gourmet-inn-stay', title: '【極上寿司会席×ふるさと納税】港町直結の職人握りと名湯温泉宿' },
      { slug: 'furusato-tax-morning-market-hamayaki-seafood-inn-stay', title: '【三大朝市＆浜焼き海の幸×ふるさと納税】獲れたて魚介を味わう港宿' },
      { slug: 'furusato-tax-luxury-buffet-gourmet-resort-stay', title: '【豪華バイキングリゾート×ふるさと納税】ローストビーフ＆海鮮食べ放題名宿' }
    ]
  },
  {
    slug: 'furusato-tax-natural-mud-bath-mineral-detox-onsen-stay',
    componentName: 'FurusatoNaturalMudBathStayPage',
    tag: '天然泥パック＆泥湯温泉デトックス名宿特集',
    title: '天然ミネラル泥パックで全身ツルツル美肌！極上泥湯温泉＆湯治名旅館×ふるさと納税完全ガイド【2026年最新】八幡平後生掛・霧島・別府鉄輪',
    metaTitle: '天然ミネラル泥パックで全身ツルツル美肌！極上泥湯温泉＆湯治名旅館×ふるさと納税完全ガイド【2026年最新】八幡平後生掛・霧島・別府鉄輪',
    shortTitle: '天然泥パック＆泥湯温泉名宿特集',
    description: '地球のマグマの恵み・天然ミネラルたっぷりの泥に包まれる究極の美肌湯！「馬で来て足駄で帰る」と称される八幡平の名湯泥風呂（火山泥湿湯）「後生掛温泉」、天然泥パックの元祖として乳白色の泥を全身に塗る鹿児島「さくらさくら温泉」、鉄輪温泉名物の美肌クレイ泥湯と地獄蒸し郷土料理が評判の「別府・鉄輪 神丘温泉 豊山荘」。お肌が生まれ変わる極上の泥湯ステイを、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '天然泥パック＆泥湯温泉デトックス名宿特集',
    leadTitle: 'クリーミーな温かい泥に身を沈め、全身に泥を塗り込む贅沢。大地のエネルギーを肌から吸収する奇跡の美肌体験へ',
    leadText: '地下深くの火山活動によって噴き出す、微細なミネラル成分を豊富に含んだ天然の温泉泥「泥湯（どろゆ・クレイバス）」。通常の温泉水とは比較にならないほど高い吸着力と保温力を持ち、毛穴の奥の皮脂や老廃物をすっきりと取り除きながら、ミネラルを肌の角質層深くまで届けてくれる天然のエステ・デトックス温泉です。湯底から湧き出す温かい火山泥に身を沈めると、とろりとした独特の浮力と心地よい重みで全身の緊張がほどけ、洗い流した後の肌は驚くほど滑らかで吸い付くような陶器肌へと生まれ変わります。十和田八幡平国立公園の標高約1,000mに位置し、「馬で来て足駄で帰る（不自由な身体で来ても下駄で元気に歩いて帰れる）」と語り継がれる名物泥風呂（火山泥湿湯）や箱蒸し風呂を誇る秋田県「後生掛温泉」、硫黄成分をたっぷり含んだ天然の泥パックを顔や全身に塗って乾かす元祖泥湯リゾートとして全国の美肌ファンに愛される鹿児島県「さくらさくら温泉」、そして日本屈指の湯量を誇る別府鉄輪で良質な鉱泥クレイと名物の地獄蒸し料理を堪能できる「神丘温泉 豊山荘」。地球の命の息吹を肌で感じる稀少な泥湯宿を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質自己負担2,000円で賢く予約し、極上の再生美肌旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '天然クレイの強力な毛穴クレンジング効果！洗い流した瞬間に驚く「陶器のようなツルツル肌」',
        body: '火山灰や温泉ミネラルが自然発酵したキメ細やかな泥が、毛穴の汚れや余分な皮脂を吸着。全身にパックして温泉で洗い流せば、まるで高級エステを受けたかのような滑らかな美肌を実感できます。'
      },
      {
        num: '02',
        title: '泥の保温力と浮力による温熱効果！血行を劇的に促進し慢性疲労や冷え性を解消',
        body: '泥は熱を逃がしにくいため、身体の芯までじっくりと温まり、入浴後もポカポカ感が長時間持続。泥の中に沈む独特の浮遊感と適度な圧力が、筋肉のコリや関節の痛みを和らげてくれます。'
      },
      {
        num: '03',
        title: '地獄蒸し料理や山海の幸！温泉の蒸気熱と大地の恵みを味わう滋味ディナー',
        body: '温泉の高温蒸気熱を利用して一気に蒸し上げる「地獄蒸し料理」や、黒豚しゃぶしゃぶ、比内地鶏やきりたんぽ鍋など、泥湯の里ならではの素朴でヘルシーな郷土の美味が身体を内側から整えます。'
      }
    ],
    hotelDetails: [
      {
        key: 'hachimantai_mud',
        badge: '秋田県鹿角市・開湯三百年！名物火山泥湿湯（泥風呂）と箱蒸し風呂で名高い八幡平の湯治聖地',
        rank: '厳選名宿 第1選',
        desc: '十和田八幡平国立公園の雄大な大自然、標高約1,000mの高原に位置し、開湯三百有余年の歴史を誇る名門湯治宿。宿の名物は、足元から湧き出る天然の温かい火山泥に首まで浸かる「泥風呂（火山泥湿湯）」。きめ細やかな泥の心地よい重みと温熱効果が全身を包み込み、神経痛や美肌に絶大な効能を誇ります。さらに首だけを出して蒸気を浴びる「箱蒸し風呂」や滝風呂、神経痛の湯など7つの多彩な湯殿を完備。比内地鶏や八幡平ポーク、山菜を使った滋味深い手作り料理とともに、本物の湯治の力を実感できる温泉好き憧れの宿です。'
      },
      {
        key: 'kirishima_mud',
        badge: '鹿児島県霧島市・天然泥パック温泉の元祖！美肌の泥を全身に塗って乾かす贅沢露天リゾート',
        rank: '厳選名宿 第2選',
        desc: '天孫降臨の神話が息づく霧島神宮温泉郷の豊かな森の中に佇み、「天然泥パック温泉」のパイオニアとして全国から女性客やカップルが訪れる人気宿。露天風呂の湯船の底から採取したミネラル豊富な純白の天然泥が洗面器に用意されており、顔や全身にたっぷり塗って乾燥させてから温泉で洗い流すことで、くすみが消えて驚くほどの透明感とモチモチ肌を手に入れることができます。夕食には鹿児島名物の黒豚しゃぶしゃぶや地鶏の炭火焼きなど郷土の味覚を堪能でき、大自然の中で心身ともに若返る休日をお過ごしいただけます。'
      },
      {
        key: 'beppu_mud',
        badge: '大分県別府市・鉄輪温泉の隠れた名湯！天然美肌クレイ泥湯と源泉地獄蒸し料理の温泉宿',
        rank: '厳選名宿 第3選',
        desc: '湯煙が立ち上る日本屈指の温泉街・別府鉄輪の静かな高台に位置し、良質な自家源泉と名物「泥湯（クレイ温泉）」を湛えるアットホームな温泉旅館。鉄輪名物の天然ミネラルを豊富に含んだ泥湯は、肌に優しく吸い付くような極上の肌触りで、入浴後は全身がツルツルになると大評判です。敷地内の地獄窯（高温蒸気釜）で素材の旨味を凝縮させて蒸し上げる「豊後牛や海の幸の地獄蒸し会席」も絶品。温泉の力と大地のエネルギーを五感で味わい尽くす、心温まる別府の湯治滞在が楽しめます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-sand-bath-sunamushi-detox-onsen-stay', title: '【天然砂むし温泉＆名湯デトックス×ふるさと納税】指宿・別府の再生宿' },
      { slug: 'furusato-tax-three-major-bihada-hotspring-stay', title: '【日本三大美肌の湯×ふるさと納税】嬉野・斐乃上・喜連川のとろとろ美肌宿' },
      { slug: 'furusato-tax-carbonated-spring-effervescent-onsen-stay', title: '【天然炭酸泉・泡の秘湯×ふるさと納税】長湯・白骨・有馬の血流促進名湯宿' },
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

console.log('Finished generating all 4 articles for Round 76!');
