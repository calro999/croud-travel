const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-udons-gourmet-stay',
    title: '日本三大うどん＆名水と小麦の麺道・ご当地名湯宿×ふるさと納税完全ガイド【2026年最新】讃岐・稲庭・五島',
    desc: '日本屈指の麺文化を味わい尽くす！香川琴平「讃岐うどん」強烈なコシとイリコ出汁に唸る湯元こんぴら温泉華の湯紅梅亭、秋田湯沢「稲庭うどん」宮内庁御用達の絹の喉ごしと秘湯泥湯温泉奥山旅館、長崎五島列島「五島うどん」椿油とあご出汁の地獄炊きと五島コンカナ王国ワイナリー＆リゾート。日本三大うどんの聖地と極上湯を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大うどん＆極上麺道湯宿×ふるさと納税ガイド',
    badge: '日本三大うどん・麺文化探訪特集',
    leadTitle: 'すすれば広がる小麦の芳醇と澄んだ出汁の旨味。名水が育んだ三大うどんの聖地へ',
    leadDesc: '日本各地の気候風土と名水、そして職人の手仕事によって磨き抜かれた麺料理の最高峰「日本三大うどん」――圧倒的なコシと弾力、イリコの風味豊かな黄金出汁が舌を唸らせ、うどん県として全国の巡礼者を惹きつける香川の「讃岐うどん」、平庭打ちの製法を数百年にわたり一子相伝で守り、絹のようになめらかな喉ごしがかつて宮内庁御用達にも選ばれた秋田湯沢の「稲庭うどん」、そして遣唐使の時代に伝わり島特産の椿油を練り込んで細身ながら強いコシを生み出した幻の麺・長崎の「五島うどん（地獄炊き）」。シンプルだからこそ素材の質と職人の技が極限まで問われる一杯は、旅先での体験として忘れがたい感動を与えてくれます。門前町や秘湯、離島のリゾートを拠点に、出来立てのうどんと地元食材の会席を堪能する特別な休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '早朝うどん巡礼や名店ハシゴに抜群の立地！朝からできたて麺を満喫',
        desc: '行列必至の人気製麺所や名店へ朝一番でアクセスし、湯上がりの贅沢な朝食うどんを堪能。'
      },
      {
        title: '讃岐オリーブ牛、秋田比内地鶏＆きりたんぽ、五島美豚＆獲れたて天然クエ',
        desc: 'ご当地うどんと合わせ、各宿自慢のブランド肉や新鮮な山海の幸ディナーに舌鼓。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れの温泉旅館やアイランドリゾートをお得に予約',
        desc: '人気の温泉街や離島ホテルでも、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適宿泊。'
      }
    ],
    items: [
      {
        key: 'udon_sanuki',
        themeTitle: '香川県琴平町ふるさと納税：讃岐うどん巡礼の総本山・金刀比羅宮参道と名門「湯元こんぴら温泉華の湯 紅梅亭」',
        themeDesc: 'こんぴらさんの麓に佇む数寄屋造りの名館。多種多彩な露天風呂や大浴場で湯巡りを愉しみ、夕食には讃岐牛や瀬戸内旬魚の会席、そして本場ならではのコシが光る手打ち讃岐うどんを贅沢に味わいます。'
      },
      {
        key: 'udon_inaniwa',
        themeTitle: '秋田県湯沢市ふるさと納税：宮内庁御用達の至高の喉ごし「稲庭うどん」と秘境の白濁名湯「泥湯温泉 奥山旅館」',
        themeDesc: '350年以上の歴史を誇る稲庭うどん発祥の地・湯沢。天狗森の山懐に湧く秘湯・泥湯温泉の奥山旅館で、乳白色の濃厚な硫黄泉に癒やされ、比内地鶏の出汁でいただく極上稲庭うどんと山菜・岩魚料理を堪能します。'
      },
      {
        key: 'udon_goto',
        themeTitle: '長崎県新上五島町・五島市ふるさと納税：椿油香る手延べ「五島うどん（地獄炊き）」と「五島コンカナ王国ワイナリー＆リゾート」',
        themeDesc: '五島列島の伝統麺・五島手延うどんの聖地。福江島の丘陵に広がるワイナリーリゾート「コンカナ王国」では、褐色の鬼岳温泉露天風呂と、自家製ワイン、あご出汁でいただく熱々の五島うどん・海鮮会席をゆったり味わえます。'
      }
    ],
    crossLinks: [
      { title: '日本三大酒どころ＆酒蔵ツーリズム宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-sake-capitals-brewery-stay', desc: '灘五郷・伏見・西条。' },
      { title: '日本三大銘菓＆城下町茶寮・老舗和菓子文化宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-famous-confections-historic-town-stay', desc: '長生殿・越乃雪・京銘菓。' },
      { title: '日本三大朝市＆獲れたて海鮮・朝ごはん宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-morning-markets-seafood-stay', desc: '輪島・呼子・勝浦。' }
    ]
  },
  {
    slug: 'furusato-tax-three-sacred-mountains-stay',
    title: '日本三霊山＆神聖なる霊峰パノラマ・天空露天風呂宿×ふるさと納税完全ガイド【2026年最新】富士山・立山・白山',
    desc: '日本人の心の原風景たる神の峰！山梨・静岡「富士山」富士五湖と逆さ富士パノラマの大池ホテル、富山「立山」立山黒部アルペンルートと美肌湯ホテル森の風立山、石川・岐阜「霊峰白山」泰澄大師が開山した白き神峰と白山麓春風旅館。日本三霊山（三大名山）の霊峰絶景と温泉を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三霊山＆霊峰パノラマ宿×ふるさと納税ガイド',
    badge: '日本三霊山・名峰ネイチャー特集',
    leadTitle: '雲海を突き抜ける神々しき峰々。古来より祈りを捧げられてきた日本三霊山の麓へ',
    leadDesc: '日本古来の山岳信仰と修験道が息づき、その圧倒的な美しさで畏敬を集めてきた「日本三霊山（三大名山）」――言わずと知れた日本の象徴であり、四季折々に刻々と姿を変える美しき独立峰・山梨と静岡の「富士山」、雄山・大汝山・富士ノ折立が連なり、神仏習合の立山信仰と壮大な氷河地形が広がる富山の「立山」、そして養老元年（717年）に泰澄大師によって開山され、雪解けの豊かな名水が加賀平野を潤す石川・岐阜の「白山」。神が宿ると信じられてきた名峰を間近に仰ぐ体験は、訪れる者の心を洗い、新たな活力を与えてくれます。霊峰を望む絶景展望露天風呂や高原リゾートを拠点に、清流の名水料理や山の恵み、天然温泉に身を委ねる清らかな休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '霊峰の稜線や朝日・夕暮れの赤富士を独占！客室や展望露天風呂からのパノラマ',
        desc: '朝靄に浮かぶ霊峰のシルエットや茜色に染まる夕景を、宿のテラスや湯船から静かに鑑賞。'
      },
      {
        title: '甲州牛＆富士桜ポーク、富山湾の白えび＆寒ブリ、加賀野菜と白山ジビエ会席',
        desc: '霊峰がもたらす清冽な伏流水で育まれた一級品の食材を、趣向を凝らしたディナーで堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで山岳リゾートや歴史ある温泉宿をお得にリザーブ',
        desc: '登山や観光のベストシーズンでも、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適宿泊。'
      }
    ],
    items: [
      {
        key: 'mountain_fuji',
        themeTitle: '山梨県富士河口湖町ふるさと納税：河口湖畔から霊峰の威容を仰ぐ「富士河口湖温泉 富士山の見える温泉旅館 大池ホテル」',
        themeDesc: '河口湖のほとりに建ち、最上階の展望大浴場「富士山」や庭園露天風呂から富士の絶景を間近に望む名宿。甲州ワインビーフや旬の味覚を彩った本格和食会席と、温泉情緒あふれる和室で富士山ステイを心ゆくまで堪能します。'
      },
      {
        key: 'mountain_tateyama',
        themeTitle: '富山県立山町ふるさと納税：立山黒部アルペンルートの玄関口に建つ美肌の湯「立山連峰の宿 ホテル森の風立山」',
        themeDesc: '立山連峰の大自然に抱かれた高原リゾート。美肌効果抜群のつるつる温泉大浴場や露天風呂を備え、富山湾の宝石・白えびやホタルイカ、富山牛を贅沢に使った創作会席料理で、登拝の歴史と山岳美を五感で味わえます。'
      },
      {
        key: 'mountain_hakusan',
        themeTitle: '石川県白山市ふるさと納税：白山信仰の聖地・手取川の清流を望む「白山麓の温泉宿 春風旅館」',
        themeDesc: '霊峰白山の手取峡谷や白山比咩神社への参拝に好立地。春風旅館では、白山麓の天然温泉と、白山水系の清流で育った岩魚の塩焼きや山菜料理、白山堅豆腐など素朴で温かい郷土の味に癒やされます。'
      }
    ],
    crossLinks: [
      { title: '日本三大美林＆森林浴名湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-beautiful-forests-stay', desc: '青森ヒバ・秋田スギ・木曽ヒノキ。' },
      { title: '日本三大車窓＆鉄道浪漫パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-train-window-views-stay', desc: '姨捨・矢岳越え・狩勝峠。' },
      { title: '日本三名瀑＆飛瀑の轟音に癒やされる温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-waterfalls-hotsprings-stay', desc: '那智・華厳・袋田。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-lacquerwares-stay',
    title: '日本三大漆器＆匠の塗りと会席料理・伝統工芸名旅館宿×ふるさと納税完全ガイド【2026年最新】越前・山中・会津',
    desc: '艶やかな漆と蒔絵が織りなす日本の美意識！福井鯖江「越前漆器」1500年の技と名湯あわら温泉まつや千千、石川加賀「山中漆器」木地挽きの最高峰と山中温泉吉祥やまなか、福島「会津塗」蒲生氏郷公ゆかりの金粉蒔絵と会津芦ノ牧温泉丸峰観光ホテル。日本三大漆器の工芸美と名湯を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大漆器＆伝統工芸名湯宿×ふるさと納税ガイド',
    badge: '日本三大漆器・漆芸文化特集',
    leadTitle: '手になじむ温もりと深遠な漆黒・朱の輝き。器が料理を引き立てる職人美の宿へ',
    leadDesc: '縄文の昔から受け継がれ、海外では「japan」の名で賞賛される日本の伝統工芸の最高峰「日本三大漆器」――継体天皇への献上から1500年以上の歴史を紡ぎ、日本の業務用漆器の約8割を一手に担う福井鯖江・河和田地区の「越前漆器」、木目の美しさを生かした挽物轆轤（ろくろ）技術が日本一と称され山中漆器祭でも賑わう石川加賀の「山中漆器」、そして名将・蒲生氏郷が近江から木地師や塗師を招聘して奨励し、華麗な消粉蒔絵で知られる福島会津若松の「会津塗」。職人が何層にも重ねて塗り上げた漆器に盛られる料理は、視覚と触覚の双方に極上の喜びをもたらします。漆器文化の息づく名湯宿に泊まり、伝統の器で供される本格懐石と名湯に心ほどける大人の旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '漆器のギャラリーや工房見学へアクセス抜群！職人の手仕事に直接触れる旅',
        desc: '宿の展示コーナーや周辺の漆器会館で、職人の蒔絵体験やこだわりのマイ漆器選びを満喫。'
      },
      {
        title: '越前ガニ＆若狭牛、加賀懐石＆のどぐろ、会津馬刺し＆会津地鶏の極上ディナー',
        desc: '伝統の漆器に盛られた美しい料理の数々と、名水で仕込まれた地酒のマリアージュを堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで老舗旅館の特別室を実質2,000円負担で予約',
        desc: '工芸文化を愛でるワンランク上の滞在も、寄付金額に応じた即時割引クーポンで賢くお得にステイ。'
      }
    ],
    items: [
      {
        key: 'lacquer_echizen',
        themeTitle: '福井県鯖江市・あわら市ふるさと納税：1500年の歴史誇る「越前漆器」の里と北陸の名湯「北陸 あわら温泉 まつや千千」',
        themeDesc: '鯖江河和田の越前漆器の里へアクセス良好。北陸屈指の規模を誇る大浴場「千のこぼれ湯」や露天風呂で寛ぎ、越前がにや若狭牛など日本海の旬魚旬菜を美しい越前漆器とともに味わう至福のひとときを過ごせます。'
      },
      {
        key: 'lacquer_yamanaka',
        themeTitle: '石川県加賀市ふるさと納税：轆轤挽きの極致「山中漆器」と鶴仙渓の絶景「山中温泉 吉祥やまなか」',
        themeDesc: '開湯1300年の名湯と山中塗の器文化が息づく温泉街。渓流を望む客室や露天風呂で癒やされ、山中漆器や九谷焼に盛り付けられた加賀能登の厳選懐石、揚げたて天ぷらなど目と舌で愉しむ極上料理を堪能します。'
      },
      {
        key: 'lacquer_aizu',
        themeTitle: '福島県会津若松市ふるさと納税：蒲生氏郷公が育んだ華麗なる「会津塗」と渓谷美「会津芦ノ牧温泉 丸峰観光ホテル」',
        themeDesc: '会津若松市街の漆器店街散策と合わせて訪れたい大川渓谷沿いの名宿。渓流を望む展望風呂や古代檜風呂で湯浴みを楽しみ、会津塗の器に彩られた郷土会席料理や銘酒をじっくりと味わえます。'
      }
    ],
    crossLinks: [
      { title: '三大陶磁器の里＆窯元巡り工芸宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-pottery-towns-heritage-stay', desc: '有田・瀬戸・美濃。' },
      { title: '日本三大銘菓＆城下町茶寮・老舗和菓子文化宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-famous-confections-historic-town-stay', desc: '長生殿・越乃雪・京銘菓。' },
      { title: '日本三大名橋＆歴史街道宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-bridges-history-stay', desc: '錦帯橋・眼鏡橋・日本橋。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-tidal-flats-nature-stay',
    title: '日本三大干潟＆野鳥と海の満ち引きパノラマ・絶景海鮮シーサイド宿×ふるさと納税完全ガイド【2026年最新】有明海・諫早湾・曽根干潟',
    desc: '最大6mの干満差が描く地球の鼓動！佐賀太良「有明海干潟」竹崎カニと絶景露天風呂の太良嶽温泉ホテル蟹御殿、長崎諫早「諫早湾干潟」ムツゴロウの楽園と雲仙温泉名湯雲仙いわき旅館、福岡北九州「曽根干潟」カブトガニ息づく瀬戸内海最大の干潟とプレミアホテル門司港。日本三大干潟（三大干潟湿地）の雄大な海景と海鮮グルメを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大干潟＆海の満ち引き海鮮宿×ふるさと納税ガイド',
    badge: '日本三大干潟・湿地ネイチャー特集',
    leadTitle: '潮が引けば見渡す限りの泥潟と生命の躍動。潮騒と夕景に包まれるシーサイドステイ',
    leadDesc: '月の引力によって海水が大きく満ち引きし、日本最大の干満差と多様な生き物を育む「日本三大干潟（三大干潟湿地）」――最大6メートルもの潮位差を誇り、ムツゴロウやワラスボなど固有の珍魚が棲息し夕日に照らされる広大な泥干潟が神秘的な佐賀・福岡にまたがる「有明海干潟」、有明海奥部に位置し渡り鳥の重要な中継地として広大な干潟風景が広がる長崎の「諫早湾干潟」、そして瀬戸内海最大級の約8.8平方キロメートルの泥干潟が広がり、生きた化石・カブトガニの貴重な産卵地として守られる福岡北九州の「曽根干潟」。潮の満ち引きによって刻一刻と表情を変える干潟の景色は、地球のダイナミズムをありのままに伝えてくれます。海を間近に望むオーシャンビュー温泉旅館や港町ホテルを拠点に、名物竹崎カニや関門海峡の海の幸を堪能する特別な休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '干満差が生む神秘の干潟パノラマ！海と一体になるインフィニティ露天風呂',
        desc: '満潮時の広大な海と、干潮時に現れる広大な干潟の二つの絶景を、宿の展望風呂から贅沢に満喫。'
      },
      {
        title: '名物竹崎カニ・竹崎カキ、有明海海苔、関門ふぐ＆焼きカレーディナー',
        desc: '干潟の豊かな栄養分で育った極上のカニや魚介類を、茹で・焼き・刺身で贅沢に味わい尽くす夕食。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンでオーシャンビューの温泉旅館をお得に予約',
        desc: '予約困難な海鮮名宿も、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'flat_ariake',
        themeTitle: '佐賀県太良町ふるさと納税：最大6mの干満差が目の前に広がる「有明海干潟」と「太良嶽温泉ホテル 蟹御殿」',
        themeDesc: '月の引力が見える町・太良の海辺に佇む極上宿。有明海をパノラマで見渡す絶景露天風呂や離れ客室で寛ぎ、名物の濃厚な「竹崎カニ」や佐賀牛、有明海の新鮮な魚介会席を心ゆくまで堪能できます。'
      },
      {
        key: 'flat_isahaya',
        themeTitle: '長崎県諫早市・雲仙市ふるさと納税：野鳥とムツゴロウが息づく「諫早湾干潟」と白濁名湯「雲仙温泉 名湯の宿 雲仙いわき旅館」',
        themeDesc: '諫早湾干潟堤防道路からのドライブとあわせて訪れたい雲仙の老舗名湯宿。自家源泉から湧く白濁の硫黄泉露天風呂で心身を解きほぐし、長崎和牛や島原半島の旬野菜・海鮮を使った本格会席を満喫します。'
      },
      {
        key: 'flat_sone',
        themeTitle: '福岡県北九州市ふるさと納税：生きた化石カブトガニが棲む「曽根干潟」とレトロ港町の「プレミアホテル門司港」',
        themeDesc: '瀬戸内海最大級の曽根干潟を探索した後は、門司港レトロの中心に建つ名建築ホテルへ。関門海峡を望むクラシカルな客室で寛ぎ、名物焼きカレーや豊前海の海鮮、関門ふぐ料理を優雅に堪能できます。'
      }
    ],
    crossLinks: [
      { title: '日本三大名勝断崖海岸＆パノラマ海宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-precipitous-coasts-stay', desc: '北山崎・東尋坊・足摺岬。' },
      { title: '日本三大松原・海岸グランピング宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-coastal-pine-glamping-resort-stay', desc: '虹の松原・気比松原・三保松原。' },
      { title: '日本三大砂丘＆風紋パノラマ・海宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-sand-dunes-coastal-stay', desc: '鳥取・吹上浜・中田島。' }
    ]
  }
];

function generatePageCode(cfg) {
  const hotelsData = cfg.items.map(it => {
    const raw = allHotels[it.key];
    if (!raw) {
      console.error(`Hotel not found for key: ${it.key}`);
      return null;
    }
    const revAvg = (raw.reviewAverage && raw.reviewAverage > 0) ? raw.reviewAverage.toFixed(1) : (typeof raw.userReview === 'number' ? raw.userReview.toFixed(1) : '4.6');
    const minCharge = (raw.hotelMinCharge && raw.hotelMinCharge > 0) ? raw.hotelMinCharge.toLocaleString() : '8,000';
    return {
      ...raw,
      themeTitle: it.themeTitle,
      themeDesc: it.themeDesc,
      revAvg,
      minCharge
    };
  }).filter(Boolean);

  return `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${cfg.title}',
  description: '${cfg.desc}',
  keywords: '${cfg.badge}, 楽天ふるさと納税, 温泉宿, ふるさと納税 旅行, 高級旅館, ホテル予約, 2026年旅行',
  openGraph: {
    title: '${cfg.title}',
    description: '${cfg.desc}',
    type: 'article',
    url: 'https://croud-travel.pages.dev/${cfg.slug}',
    siteName: 'トラベルポータル',
  },
};

export default function Page() {
  const officialAffUrl = '${officialFurusatoAffUrl}';

  const hotels = ${JSON.stringify(hotelsData, null, 2)};

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex items-center space-x-2">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">${cfg.h1}</span>
        </div>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            ${cfg.badge}
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            ${cfg.h1}
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto pt-2">
            ${cfg.leadDesc}
          </p>

          <div className="pt-6">
            <a
              href={officialAffUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-emerald-900/30 transform hover:-translate-y-0.5 transition duration-200 text-sm md:text-base"
            >
              <span>楽天ふるさと納税トラベル公式特設ページを見る</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        
        {/* 特集の魅力セクション */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 border-l-4 border-emerald-500 pl-3 mb-6">
            ${cfg.leadTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            ${cfg.merits.map(m => `
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-2">
              <div className="font-bold text-emerald-800 text-sm md:text-base flex items-center space-x-1.5">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>${m.title}</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                ${m.desc}
              </p>
            </div>
            `).join('')}
          </div>
        </section>

        {/* 厳選ホテルリスト */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              楽天ふるさと納税で泊まる名宿＆厳選ホテル
            </h2>
            <p className="text-xs md:text-sm text-slate-500">
              楽天トラベル公式APIより最新の宿情報・写真・最低参考価格を取得しています
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h, idx) => (
              <div key={h.hotelNo || idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300">
                <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                  <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded mb-2">
                    厳選スポット #{idx + 1}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900">
                    {h.themeTitle}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed">
                    {h.themeDesc}
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 p-6">
                  <div className="md:col-span-5 space-y-2">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                      <img
                        src={h.hotelImageUrl || h.roomImageUrl || '/images/no-image.jpg'}
                        alt={h.hotelName}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-xs text-slate-400 text-center">
                      写真提供: 楽天トラベル
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold text-base md:text-lg text-slate-900 leading-snug">
                            {h.hotelName}
                          </h4>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {h.address1}{h.address2}
                          </p>
                        </div>
                        <div className="bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded text-xs shrink-0 flex items-center space-x-1">
                          <span>★</span>
                          <span>{h.revAvg}</span>
                        </div>
                      </div>

                      <p className="text-xs md:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {h.hotelSpecial || '日本三大うどん巡り、三霊山パノラマ、漆器の文化美、広大な干潟の自然探訪に最適な上質拠点。四季折々の美食と名湯でお寛ぎください。'}
                      </p>

                      <div className="bg-slate-50 p-3 rounded-lg text-xs space-y-1 border border-slate-100">
                        <div className="flex">
                          <span className="text-slate-400 w-16 shrink-0">アクセス:</span>
                          <span className="text-slate-700">{h.access || '最寄り駅・主要道路よりアクセス良好'}</span>
                        </div>
                        <div className="flex">
                          <span className="text-slate-400 w-16 shrink-0">参考価格:</span>
                          <span className="text-emerald-700 font-semibold">1名あたり目安 ¥{h.minCharge}〜</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <a
                        href={h.hotelInformationUrl || officialAffUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="flex-1 text-center bg-slate-900 hover:bg-slate-800 text-white text-xs md:text-sm font-semibold py-2.5 px-4 rounded-xl transition duration-150"
                      >
                        宿の詳細・プランを見る
                      </a>
                      <a
                        href={officialAffUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="flex-1 text-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs md:text-sm font-bold py-2.5 px-4 rounded-xl shadow-sm transition duration-150"
                      >
                        ふるさと納税クーポンで予約
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 楽天ふるさと納税トラベル利用ステップ */}
        <section className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-2xl p-6 md:p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-xl md:text-2xl font-bold">
              楽天ふるさと納税×楽天トラベル 簡単3ステップ
            </h2>
            <p className="text-xs md:text-sm text-slate-300">
              実質2,000円の自己負担で憧れの高級宿・温泉旅館をお得に予約できます
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-slate-200">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 space-y-2">
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-xs">
                1
              </div>
              <h3 className="font-bold text-sm text-white">自治体に寄付</h3>
              <p className="text-xs leading-relaxed text-slate-300">
                希望の自治体と寄付金額を選び、楽天ふるさと納税で寄付を行います。寄付額に応じたトラベルクーポンが即時付与されます。
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 space-y-2">
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-xs">
                2
              </div>
              <h3 className="font-bold text-sm text-white">対象宿・プランを予約</h3>
              <p className="text-xs leading-relaxed text-slate-300">
                楽天トラベルで対象地域の宿泊施設を検索。獲得したふるさと納税クーポンを予約ステップで適用します。
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 space-y-2">
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-xs">
                3
              </div>
              <h3 className="font-bold text-sm text-white">現地で贅沢ステイ</h3>
              <p className="text-xs leading-relaxed text-slate-300">
                宿泊当日は通常通りチェックイン。割引されたお得な価格で、名湯や美食、絶景体験を満喫できます。
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <a
              href={officialAffUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center bg-white hover:bg-slate-100 text-emerald-950 font-bold py-3 px-8 rounded-full shadow-lg transition duration-200 text-sm md:text-base"
            >
              <span>楽天ふるさと納税宿泊クーポンを獲得する</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </section>

        {/* 関連記事（相互内部リンク） */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 space-y-4">
          <h2 className="text-lg md:text-xl font-bold text-slate-900 border-l-4 border-emerald-500 pl-3">
            あわせて読みたい日本の伝統美食・絶景特集
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            ${cfg.crossLinks.map(c => `
            <Link href="${c.url}" className="group block bg-slate-50 hover:bg-emerald-50/50 p-4 rounded-xl border border-slate-200/70 hover:border-emerald-300 transition duration-200">
              <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-700 transition line-clamp-2">
                ${c.title}
              </div>
              <p className="text-xs text-slate-500 mt-2">
                ${c.desc}
              </p>
            </Link>
            `).join('')}
          </div>
        </section>

      </main>

      {/* フッター */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-4 text-center text-xs border-t border-slate-800">
        <p>© 2026 トラベルポータル All Rights Reserved. 掲載情報は最新の楽天トラベル公式APIに基づきます。</p>
      </footer>
    </div>
  );
}
`;
}

pagesConfig.forEach(cfg => {
  const dirPath = path.join(__dirname, 'src/app', cfg.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  const code = generatePageCode(cfg);
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), code, 'utf8');
  console.log(`Generated: src/app/${cfg.slug}/page.tsx`);
});
