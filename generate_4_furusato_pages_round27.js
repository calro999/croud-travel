const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-limestone-caves-mystery-stay',
    title: '日本三大鍾乳洞＆神秘の地底美・ジオパーク温泉宿×ふるさと納税完全ガイド【2026年最新】龍泉洞・龍河洞・秋芳洞',
    desc: '悠久の時が創り出した地底の神秘！岩手「龍泉洞」世界有数の透明度を誇るドラゴンブルーの地底湖と三陸浄土ヶ浜パークホテル、高知「龍河洞」弥生土器と鍾乳石が一体化した神の壺とオーベルジュ土佐山、山口「秋芳洞」百枚皿・黄金柱の大パノラマと音信川の湯宿大谷山荘。日本三大鍾乳洞の冒険と名湯宿を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大鍾乳洞＆神秘の地底美宿×ふるさと納税ガイド',
    badge: '日本三大鍾乳洞・地底ジオパーク特集',
    leadTitle: 'エメラルド＆ブルーに輝く地底湖と数億年の石灰岩アート。地底アドベンチャーと極上宿の休日',
    leadDesc: '気の遠くなるような年月をかけて地下水が石灰岩を削り磨き上げた「日本三大鍾乳洞」――吸い込まれそうなドラゴンブルーの深い地底湖が神秘的な光を放つ岩手の「龍泉洞」、弥生時代の古代人が生活し土器が鍾乳石に包まれた学術的奇跡を誇る高知の「龍河洞」、そして秋吉台の大カルスト台地下に広がる東洋屈指の大鍾乳洞・山口の「秋芳洞」。洞窟内の年間を通じて一定に保たれた冷涼な澄んだ空気と、ライトアップされた千町田や百枚皿の造形美は訪れる者を異世界へと誘います。探検の後は、周辺の三陸海の幸や土佐和牛、長門湯本の名湯を心ゆくまで味わう贅沢な旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '通年10〜15度の快適空間！四季を問わず楽しめる非日常のアドベンチャー',
        desc: '夏はひんやり天然クーラー、冬は温かく感じられる地底空間で、天候に左右されずに大自然の神秘を体験できます。'
      },
      {
        title: '三陸アワビ・土佐のカツオ一本釣り・山口のとらふぐ極上会席',
        desc: '地底探検の後は、各県自慢の最高級海鮮グルメと地酒のマリアージュを老舗名宿で堪能できます。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れの名旅館・リゾートを賢く割引',
        desc: '寄付額に応じて宿泊代金が即時控除され、大谷山荘や浄土ヶ浜パークホテルなど名門ホテルの宿泊を大幅にお得に予約できます。'
      }
    ],
    items: [
      {
        key: 'cave_ryusendo',
        themeTitle: '岩手県岩泉町・宮古市ふるさと納税：ドラゴンブルーに輝く神秘の地底湖「龍泉洞」と三陸名門浄土ヶ浜パークホテル',
        themeDesc: '世界有数の透明度を誇る地底湖群。ブルーに輝く第1〜第3地底湖の幻想美を体感した後は、三陸復興国立公園・浄土ヶ浜の高台に佇む名門ホテルで、三陸のウニやアワビ、前沢牛を味わう絶景ステイです。'
      },
      {
        key: 'cave_ryugado',
        themeTitle: '高知県香美市・高知市ふるさと納税：弥生土器が鍾乳石に包まれた国の天然記念物「龍河洞」と山里の極上隠れ宿オーベルジュ土佐山',
        themeDesc: '1億7500万年の歳月が刻んだ鍾乳洞。世界唯一の「神の壺」を巡る冒険の後は、鏡川源流の清流沿いに佇むオーベルジュ土佐山で、土佐ジローや四万十の恵みを生かした極上ディナーと美肌温泉に癒やされます。'
      },
      {
        key: 'cave_akiyoshido',
        themeTitle: '山口県美祢市・長門市ふるさと納税：東洋屈指の大鍾乳洞「秋芳洞」百枚皿パノラマと音信川の湯宿・大谷山荘ステイ',
        themeDesc: '特別天然記念物の大鍾乳洞。百枚皿や傘づくし、黄金柱の圧倒的スケールを体感した後は、長門湯本温泉の老舗高級宿「大谷山荘」で、清流のせせらぎを聞きながら名湯露天風呂と長州とらふぐ会席に酔いしれます。'
      }
    ],
    crossLinks: [
      { title: '日本三大奇勝＆巨岩奇峰パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-wonders-rock-scenery-stay', desc: '妙義山・耶馬渓・寒霞渓の巨岩絶景。' },
      { title: '大人の静寂リトリート×美肌温泉宿ふるさと納税完全ガイド', url: '/furusato-tax-adult-quiet-retreat-inn-stay', desc: '喧騒から離れた隠れ家温泉。' },
      { title: '清冽湧水＆名水グルメ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-pure-spring-water-gourmet-stay', desc: '南阿蘇・八ヶ岳・京都伏見の湧水旅。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-pine-groves-sandbar-stay',
    title: '日本三大松原・砂州＆美しき白砂青松オーシャンビュー宿×ふるさと納税完全ガイド【2026年最新】天橋立・気比の松原・三保の松原',
    desc: '萬葉の歌人が愛した日本の原風景！京都「天橋立」天に架かる緑の橋と廻旋橋を望む文珠荘、福井「気比の松原」若狭湾の白砂と敦賀トンネル温泉北国グランドホテル、静岡「三保の松原」富士山と駿河湾を一望する風景美術館日本平ホテル。日本三大松原（三大白砂青松）の絶景シーサイドステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大松原＆白砂青松オーシャンビュー宿×ふるさと納税ガイド',
    badge: '日本三大松原・白砂青松特集',
    leadTitle: '青い海と白い砂浜、潮風にそよぐ幾千本もの深緑の松。日本の美意識が息づく海岸リゾート',
    leadDesc: '古来より数多の和歌や浮世絵に描かれ、自然が作り出した奇跡の造形美として親しまれてきた「日本三大松原（三大砂州）」――天へと昇る龍の如く宮津湾を横断する日本三景・京都の「天橋立」、敦賀湾に弓なりに広がる白砂と赤松・黒松のコントラストが美しい福井の「気比の松原」、そして青い駿河湾越しに霊峰富士を仰ぎ見る世界遺産・静岡の「三保の松原」。松林を抜ける心地よい潮風を感じながら散策し、夕暮れには茜色に染まる海景を客室や展望露天風呂から眺める時間はまさに至福。丹後とり貝や若狭ふぐ、駿河湾の桜えびなど獲れたての海の幸を味わう贅沢な滞在を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '客室テラスや展望ラウンジから松原と海を一望する絶景ビュー',
        desc: '名勝のパノラマを目の前に臨む特等席で、朝夕の光の移ろいとともに白砂青松の美を独占できます。'
      },
      {
        title: 'サイクリングや松林散策、遊覧船クルーズで海から眺めるアクティビティ',
        desc: '松並木の木漏れ日の中を走るレンタサイクルや、海上から砂州全景を見渡す観光船など充実した観光体験。'
      },
      {
        title: '丹後松葉ガニ・若狭甘鯛・由比桜えびなど全国屈指のブランド海鮮づくし',
        desc: '日本海と駿河湾がもたらす最高峰の獲れたて魚介を、ふるさと納税クーポンで豪華に堪能できます。'
      }
    ],
    items: [
      {
        key: 'sandbar_amanohashidate',
        themeTitle: '京都府宮津市ふるさと納税：日本三景「天橋立」白砂青松の架け橋と数寄屋造りの名門旅館・文珠荘ステイ',
        themeDesc: '約8,000本の松が生い茂る奇跡の砂州。智恩寺山門前に位置し、運河を行き交う小舟を眺めながら天橋立温泉の柔らかな湯に浸かり、丹後の旬の魚介や丹後牛を味わう極上の数寄屋ステイです。'
      },
      {
        key: 'sandbar_kehinomatsubara',
        themeTitle: '福井県敦賀市ふるさと納税：萬葉の息吹残る白砂青松「気比の松原」若狭湾の海の幸と敦賀トンネル温泉北国グランドホテル',
        themeDesc: '長さ約1.5kmに及ぶ敦賀湾の美しき松原。赤松と黒松が織りなす松林を散策した後は、美肌効果抜群の敦賀トンネル温泉の展望大浴場で寛ぎ、名物越前ガニや敦賀真鯛の会席を満喫します。'
      },
      {
        key: 'sandbar_mihonomatsubara',
        themeTitle: '静岡県静岡市清水区ふるさと納税：世界遺産富士山と駿河湾を望む「三保の松原」風景美術館・日本平ホテルステイ',
        themeDesc: '羽衣伝説で知られる三保の松原。眼下に広がる清水港と富士山の雄大な大パノラマを絵画のように切り取る「風景美術館」日本平ホテルで、駿河湾の新鮮な魚介と洗練されたフレンチに酔いしれます。'
      }
    ],
    crossLinks: [
      { title: '日本三大美港＆ウォーターフロントホテル×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-ports-waterfront-luxury-stay', desc: '神戸・横浜・長崎の港町ステイ。' },
      { title: '絶景オーシャンフロント×波音ヒーリング宿ふるさと納税完全ガイド', url: '/furusato-tax-oceanfront-wave-sound-healing-stay', desc: '海を間近に感じる名宿。' },
      { title: '日本三大名橋＆清流リバーサイド宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-bridges-riverside-stay', desc: '錦帯橋・眼鏡橋・猿橋の絶景。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-washi-craft-heritage-stay',
    title: '日本三大和紙の里＆手漉き体験・職人の美意識薫る工芸温泉宿×ふるさと納税完全ガイド【2026年最新】越前和紙・美濃和紙・小川和紙（細川紙）',
    desc: '千年の技と手漉きのぬくもりに触れる日本の美！福井「越前和紙」千五百年の歴史誇る越前の紙漉きとあわら温泉グランディア芳泉、岐阜「美濃和紙」うだつの上がる町並みと長良川の老舗宿十八楼、埼玉「小川和紙」ユネスコ無形文化遺産細川紙の里と秩父美肌の名湯新木鉱泉旅館。日本三大和紙の産地を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大和紙の里＆工芸温泉宿×ふるさと納税ガイド',
    badge: '日本三大和紙・手漉き工芸特集',
    leadTitle: '清らかな水と職人の魂が紡ぎ出す和紙の温もり。伝統美に包まれるクラフトツーリズムの旅',
    leadDesc: '清流の恵みと職人の手技によって育まれ、千年以上もの保存性を誇る「日本三大和紙」――公家や武士に重用され日本最初の紙幣にも採用された福井の「越前和紙」、長良川の清流と光を透かす薄さと強靭さで知られる岐阜の「美濃和紙」、そしてユネスコ無形文化遺産に登録された手漉き技術を今に伝える埼玉の「小川和紙（細川紙）」。和紙の原料である楮（こうぞ）や三椏（みつまた）を清らかな水で洗い、簀桁（すけた）で丁寧に漉き上げる職人の手仕事は見ているだけで心が洗われます。和紙のあかりが優しく照らす宿の客室で、伝統の技と地元の名湯、四季折々の郷土会席を味わう豊かな時間を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '実際に紙漉きを体験！自分だけのオリジナル和紙や便箋作り体験',
        desc: '工房や工芸館で職人から直接手ほどきを受け、旅の思い出に残る世界に一つだけの和紙を創作できます。'
      },
      {
        title: '和紙の行灯・照明が灯る落ち着いた和モダン空間と源泉かけ流し温泉',
        desc: '障子や照明に和紙を贅沢にあしらった温かみある客室で、日常のストレスから解き放たれる極上のひととき。'
      },
      {
        title: '越前ガニ・長良川の天然鮎・武州和牛など地域の至高の味覚を満喫',
        desc: '清流と豊かな風土が育んだ郷土美食を、ふるさと納税クーポンを活用してお得にアップグレードできます。'
      }
    ],
    items: [
      {
        key: 'washi_echizen',
        themeTitle: '福井県越前市・あわら市ふるさと納税：千五百年の歴史誇る紙漉きの郷「越前和紙の里」と名湯あわら温泉グランディア芳泉',
        themeDesc: '大滝神社のお膝元に広がる越前和紙の里。卯立の工芸館で手漉き体験を楽しんだ後は、福井屈指の名湯あわら温泉グランディア芳泉で、庭園露天風呂と若狭牛・越前海の幸会席を堪能します。'
      },
      {
        key: 'washi_mino',
        themeTitle: '岐阜県美濃市・岐阜市ふるさと納税：うだつの上がる町並み「美濃和紙あかり館」と長良川温泉の老舗十八楼ステイ',
        themeDesc: '江戸時代の豪商たちが築いた美濃の町並み。幻想的な和紙あかりアートを鑑賞した後は、金華山と長良川を望む創業百六十有余年の名宿「十八楼」で、長良川の鮎料理と鉄分豊富な赤褐色の名湯に癒やされます。'
      },
      {
        key: 'washi_ogawa',
        themeTitle: '埼玉県小川町・秩父市ふるさと納税：ユネスコ無形文化遺産「細川紙・小川和紙」の里散策と二百年の美肌湯・新木鉱泉旅館',
        themeDesc: '関東屈指の和紙どころ小川町。伝統の手漉き和紙工房を見学した後は、秩父最古の湯として知られる新木鉱泉旅館で、江戸時代から続く卵水（御代の湯）のツルツル美肌湯と秩父郷土料理を味わいます。'
      }
    ],
    crossLinks: [
      { title: '日本三大陶磁器の郷＆焼き物窯元めぐり宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-pottery-towns-art-stay', desc: '有田焼・美濃焼・瀬戸焼の窯元宿。' },
      { title: '日本三大銘茶の産地＆茶香炉ヒーリング宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-green-tea-regions-healing-stay', desc: '静岡茶・宇治茶・朝宮茶の癒やし。' },
      { title: '職人技が光る伝統工芸＆数寄屋大工の名旅館ふるさと納税完全ガイド', url: '/tangible-cultural-property-sukiya-carpenter-ryokan-stay', desc: '有形文化財の名旅館。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-medicinal-springs-healing-stay',
    title: '日本三大薬湯＆濃厚生薬・奇跡の湯治ヒーリング温泉宿×ふるさと納税完全ガイド【2026年最新】松之山温泉・草津温泉・有馬温泉',
    desc: '万病を癒やす奇跡の薬効成分！新潟「松之山温泉」太古の海水が湧出するジオプレッシャーの奇跡ひなの宿ちとせ、群馬「草津温泉」強酸性の圧倒的殺菌力と湯畑源泉かけ流しの名門望雲、兵庫「有馬温泉」豊臣秀吉が愛した鉄分・塩分超濃厚の金泉兵衛向陽閣。日本三大薬湯の本格湯治リトリートを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大薬湯＆濃厚生薬湯治宿×ふるさと納税ガイド',
    badge: '日本三大薬湯・本格湯治特集',
    leadTitle: '地中深くから湧き出る濃厚な大地のエネルギー。古より数多の文人・武将を癒やした名湯巡り',
    leadDesc: '日本全国に数千ある温泉地の中でも、特に圧倒的な薬効とミネラル濃度を誇ることから古来「日本三大薬湯」と称えられてきた三つの名湯――約1200万年前の化石海水が地圧によって湧き出し一般海水の約90倍ものホウ酸を含む新潟の「松之山温泉」、釘を浸ければ数日で溶けてしまうほどの強酸性と豊富な湯量で万病を治す群馬の「草津温泉」、そして火山活動とは無関係に地下60kmのマントルから湧き上がる世界的にも奇跡の濃厚高温泉・兵庫の「有馬温泉」。ひとたび湯に浸かれば、身体の芯から温まり冷えや疲労を根本から解きほぐしてくれます。各温泉地の歴史ある老舗宿で、地元の滋味あふれる湯治会席を味わいながら心身をリセットする究極のヘルスツーリズムを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '加水・加温一切なし！源泉100%の驚異的な薬効成分をそのまま体感',
        desc: 'ホウ酸塩泉・強酸性硫黄泉・含鉄強塩泉と、それぞれ世界に誇る唯一無二の濃厚な泉質を湯巡りできます。'
      },
      {
        title: '湯畑・湯もみ・外湯めぐりなど温泉街カルチャーの醍醐味を満喫',
        desc: '立ちのぼる湯けむりと温泉街情緒を浴衣で歩き、名物温泉まんじゅうや足湯を楽しむ贅沢な時間。'
      },
      {
        title: '新潟コシヒカリ・上州牛・神戸牛など各県最高峰のグルメ美食会席',
        desc: '薬湯でデトックスした後の身体に染み渡る極上の地元食材を、ふるさと納税クーポンで賢く堪能できます。'
      }
    ],
    items: [
      {
        key: 'medicinal_matsunoyama',
        themeTitle: '新潟県十日町市ふるさと納税：太古の海水が湧き出るジオプレッシャー日本三大薬湯「松之山温泉」ひなの宿ちとせ',
        themeDesc: '約1200万年前の化石海水が自噴する奇跡の薬湯。塩分濃度とホウ酸含有量が極めて高く、温まり効果が持続する名湯露天風呂「月見の湯」と、魚沼産コシヒカリや妻有ポークの里山ごちそう料理を堪能します。'
      },
      {
        key: 'medicinal_kusatsu',
        themeTitle: '群馬県草津町ふるさと納税：万病を治す日本屈指の強酸性泉日本三大薬湯「草津温泉」名門望雲の極上かけ流し湯巡り',
        themeDesc: '毎分3万リットル以上の自然湧出量を誇る天下の名湯。西の河原源泉と万代鉱源泉の2種類の名湯を引く創業慶長四年の名館「望雲」で、美しいしゃくなげ庭園を愛でながら上州牛ステーキ会席に舌鼓を打ちます。'
      },
      {
        key: 'medicinal_arima',
        themeTitle: '兵庫県神戸市北区ふるさと納税：秀吉が愛した鉄分・塩分超濃厚の金泉日本三大薬湯「有馬温泉」兵衛向陽閣ステイ',
        themeDesc: '日本最古の温泉として神代から続く有馬温泉。空気に触れると赤褐色に濁る含鉄ナトリウム強塩泉「金泉」を三つの大浴場で湯巡りし、創業七百年の老舗「兵衛向陽閣」で最高級神戸牛や旬の会席料理を味わいます。'
      }
    ],
    crossLinks: [
      { title: '日本三大美肌の湯＆弱アルカリ性極上とろとろ温泉宿ふるさと納税完全ガイド', url: '/furusato-tax-three-great-bihada-hot-springs-stay', desc: '嬉野・斐乃上・喜連川の美肌泉。' },
      { title: '日本三大名湯＆歴史息づく老舗旅館ふるさと納税完全ガイド', url: '/furusato-tax-three-major-hot-springs-heritage-stay', desc: '草津・有馬・下呂の名湯巡り。' },
      { title: '源泉かけ流し100%！自噴秘湯宿ふるさと納税完全ガイド', url: '/pure-100-percent-kakenagashi-onsen-stay', desc: '混じり気なしの純生温泉。' }
    ]
  }
];

function generatePageCode(cfg) {
  return `'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const officialFurusatoAffUrl = "${officialFurusatoAffUrl}";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-rose-500 selection:text-white pb-24">
      {/* Hero Section */}
      <header className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
            <span className="inline-block w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            ${cfg.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            ${cfg.h1}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            ${cfg.desc}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={officialFurusatoAffUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-rose-500 via-red-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-bold rounded-2xl shadow-xl shadow-rose-950/40 transition duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 text-base md:text-lg"
            >
              <span>🏮 楽天ふるさと納税トラベル特設ページを見る</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 space-y-16">
        {/* Intro Lead */}
        <section className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 border-l-4 border-rose-500 pl-4">
            ${cfg.leadTitle}
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            ${cfg.leadDesc}
          </p>
        </section>

        {/* 3 Key Merits */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              ふるさと納税トラベルで巡る3つの至高メリット
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">実質自己負担2,000円で憧れの名旅館＆特産グルメをアップグレード</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${cfg.merits.map((m, i) => `
            <div key="${i}" className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold flex items-center justify-center mb-4">
                0${i + 1}
              </div>
              <h3 className="font-bold text-white text-lg mb-2">${m.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">${m.desc}</p>
            </div>`).join('')}
          </div>
        </section>

        {/* Featured Hotels & Regions */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              厳選名所＆楽天トラベル提携おすすめ名宿
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1">楽天ふるさと納税宿泊クーポンが利用可能な極上宿</p>
          </div>

          <div className="space-y-12">
            ${cfg.items.map((item, idx) => {
              const h = allHotels[item.key] || {};
              const name = h.hotelName || 'おすすめ温泉旅館';
              const minCharge = h.hotelMinCharge ? h.hotelMinCharge.toLocaleString() : '15,000';
              const img = h.hotelImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80';
              const rating = (h.reviewAverage && h.reviewAverage > 0) ? h.reviewAverage.toFixed(1) : (typeof h.userReview === 'number' ? h.userReview.toFixed(1) : '4.6');
              const reviewCount = h.reviewCount || 300;
              const affLink = h.affiliateUrl || officialFurusatoAffUrl;
              const special = h.hotelSpecial || '贅沢な美食と名湯、極上の空間で非日常の休日をお楽しみいただけます。';
              const address = (h.address1 || '') + (h.address2 || '');

              return `
            {/* Spot Card ${idx + 1} */}
            <article key="${idx}" className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700/80 transition duration-300 shadow-xl">
              <div className="p-6 sm:p-8 border-b border-slate-800/80">
                <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-semibold rounded-full mb-3">
                  厳選スポット 0${idx + 1}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  ${item.themeTitle}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  ${item.themeDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center bg-slate-950/40">
                <div className="lg:col-span-5 relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-800">
                  <Image
                    src="${img}"
                    alt="${name}"
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                    unoptimized
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-lg text-xs font-bold text-amber-400 border border-amber-400/30">
                    ★ ${rating}（${reviewCount}件）
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                      ${name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mb-3 flex items-center gap-1">
                      <span>📍</span>
                      <span>${address || '現地周辺'}</span>
                    </p>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/60">
                      ${special}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="text-xs text-slate-400">参考最安料金（1名あたり）</div>
                      <div className="text-lg sm:text-xl font-black text-rose-400">
                        ${minCharge}円〜
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href="${affLink}"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold rounded-xl transition border border-slate-700"
                      >
                        宿泊詳細を見る
                      </a>
                      <a
                        href={officialFurusatoAffUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-bold rounded-xl transition shadow-lg shadow-rose-950/40"
                      >
                        ふるさと納税で予約
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>`;
            }).join('')}
          </div>
        </section>

        {/* Official Banner CTA */}
        <section className="bg-gradient-to-r from-rose-950/60 via-red-900/40 to-amber-950/60 border border-rose-500/30 rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            楽天ふるさと納税トラベルで、今すぐ賢く旅に出よう
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base mb-8 leading-relaxed">
            寄付翌日から最大3年間使える宿泊クーポンで、行きたかった憧れの名宿を今すぐお得にリザーブ。実質2,000円負担で極上の日本再発見の旅へ。
          </p>
          <a
            href={officialFurusatoAffUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white text-base sm:text-lg font-extrabold rounded-2xl shadow-xl transition duration-300 transform hover:-translate-y-0.5"
          >
            <span>🏮 楽天ふるさと納税トラベル公式特設ページへ</span>
          </a>
        </section>

        {/* Cross Link Section */}
        <section className="border-t border-slate-800/80 pt-12 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            あわせて読みたい関連特集ガイド
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${cfg.crossLinks.map((cl, i) => `
            <Link
              key="${i}"
              href="${cl.url}"
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition flex flex-col justify-between group"
            >
              <div>
                <h3 className="font-bold text-white text-base group-hover:text-rose-400 transition mb-2">
                  ${cl.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  ${cl.desc}
                </p>
              </div>
              <div className="mt-4 text-xs font-semibold text-rose-400 flex items-center gap-1">
                <span>記事を読む</span>
                <span>→</span>
              </div>
            </Link>`).join('')}
          </div>
        </section>
      </main>
    </div>
  );
}
`;
}

for (const cfg of pagesConfig) {
  const targetDir = path.join(__dirname, 'src/app', cfg.slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const filePath = path.join(targetDir, 'page.tsx');
  fs.writeFileSync(filePath, generatePageCode(cfg), 'utf8');
  console.log(`✓ Generated ${filePath}`);
}

console.log('All 4 pages generated successfully for Round 27.');
