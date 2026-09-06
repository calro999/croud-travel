const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-clear-rivers-stay',
    title: '日本三大清流＆奇跡の透明度と川魚・名水グルメ温泉宿×ふるさと納税完全ガイド【2026年最新】四万十川・長良川・柿田川',
    desc: '日本屈指の清らかな水が生んだ大自然と美食！高知「四万十川」沈下橋と天然鮎・青さのり・ツガニを満喫する新安並温泉なごみ宿安住庵、岐阜「長良川」1300年の伝統鵜飼と名湯長良川温泉十八楼、静岡三島「柿田川湧水群」富士山雪解け水が生んだ東洋一の湧水量とうなぎ会席ドーミーイン三島。日本三大清流のリバーサイドステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大清流＆名水リバーサイド宿×ふるさと納税ガイド',
    badge: '日本三大清流・名水リバー特集',
    leadTitle: '川底まで透き通るエメラルドグリーンの流れと、天然鮎の芳醇な香り。水清き日本のふるさとへ',
    leadDesc: '日本各地の原生林や名峰から湧き出し、国土を潤す命の源流「日本三大清流」――大規模ダムが一切なく「日本最後の清流」として沈下橋と川漁の原風景を今に残す高知の「四万十川」、清流長良川の鮎として世界農業遺産（GIAHS）第1号に認定され1300年続く篝火鵜飼が幻想的な岐阜の「長良川」、そして富士山に降った雪や雨が数十年かけて溶岩の間を通り日量120万トンもの水が湧き出す東洋一の湧水河川・静岡の「柿田川」。澄み切った清流は、目を楽しませるだけでなく、極上の川魚や名水グルメ、そして名湯をもたらします。川のせせらぎを間近に聞く料理旅館や絶景温泉ホテルを拠点に、天然鮎の塩焼きや名物うなぎ、地酒を味わう特別な休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '川のせせらぎを聞きながら入浴！リバービュー露天風呂と清流テラスでの極上時間',
        desc: '部屋や露天風呂から清流のきらめきを眺め、日常の喧騒を忘れて心身をリフレッシュ。'
      },
      {
        title: '四万十川天然鮎＆ツガニ汁、長良川天然鮎の塩焼き、三島名物富士山伏流水うなぎ',
        desc: '名水で育まれた臭みのない絶品の川の幸を、各宿の料理長自慢の本格会席で贅沢に堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れの名旅館や温泉宿をお得にリザーブ',
        desc: '夏や秋の行楽シーズンでも、寄付金額に応じた最大30%オフ即時割引クーポンでスマートにお得旅。'
      }
    ],
    items: [
      {
        key: 'river_shimanto',
        themeTitle: '高知県四万十市ふるさと納税：日本最後の清流「四万十川」を見下ろす高台の名湯「新安並温泉 なごみ宿 安住庵」',
        themeDesc: '四万十川と中村城下町を一望する絶景の隠れ宿。とろりとした泉質の天然温泉露天風呂で寛ぎ、四万十川の天然鮎・川エビ・青さのり天ぷら、土佐名物カツオのタタキなど清流と海の恵みを贅沢に味わい尽くします。'
      },
      {
        key: 'river_nagara',
        themeTitle: '岐阜県岐阜市ふるさと納税：1300年の長良川鵜飼文化と金華山を望む名旅館「長良川温泉 十八楼」',
        themeDesc: '江戸時代創業、長良川のほとりに建つ老舗宿。鉄分を含み茶褐色に濁る名湯「長良川温泉」の蔵造り露天風呂に浸かり、長良川の鮎料理や飛騨牛会席、夏の風物詩である長良川鵜飼の篝火を間近に楽しめます。'
      },
      {
        key: 'river_kakitagawa',
        themeTitle: '静岡県三島市・清水町ふるさと納税：富士山雪解け水の東洋一の湧水「柿田川清流」と「天然温泉 富嶽の湯 ドーミーイン三島」',
        themeDesc: '柿田川湧水群の「わくわくブルーホール」散策に最適。最上階の天然温泉大浴場からは富士山を一望でき、三島名物の名水仕込みうなぎ割烹やご当地グルメ巡りを快適に楽しめる人気の拠点です。'
      }
    ],
    crossLinks: [
      { title: '日本三大急流＆舟下り・リバーサイド宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-rapids-river-boat-stay', desc: '最上川・富士川・球磨川。' },
      { title: '日本三大渓谷美＆清流リトリート温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gorges-scenic-stay', desc: '黒部峡谷・清津峡・大杉谷。' },
      { title: '日本三大美林＆森林浴名湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-beautiful-forests-stay', desc: '青森ヒバ・秋田スギ・木曽ヒノキ。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-giant-sacred-trees-stay',
    title: '日本三大巨樹＆樹齢千年の神木パワースポット・森林浴名湯宿×ふるさと納税完全ガイド【2026年最新】蒲生の大楠・阿川の大杉・北金ヶ沢の大イチョウ',
    desc: '幹周り数十メートル！千年の時を生きる命の巨木！鹿児島姶良「蒲生の大楠」日本最大の巨樹とフォンタナの丘かもう、徳島神山「阿川の大杉」四国の名木と神山温泉ホテル四季の里、青森深浦「北金ヶ沢の大イチョウ」日本一の大銀杏（ビッグイエロー）と黄金崎不老ふ死温泉。日本三大巨樹（三大神木）の神聖なエネルギーと天然温泉を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大巨樹＆神木パワースポット宿×ふるさと納税ガイド',
    badge: '日本三大巨樹・生命の神木特集',
    leadTitle: '圧倒的な生命力と深い森の静寂。千年の風雪を耐え抜いた日本三大巨樹の懐へ',
    leadDesc: '環境省の巨樹・巨木林調査において日本を代表する最高峰の神木「日本三大巨樹」――幹周り24.2メートル、樹齢約1500年を誇り国特別天然記念物に指定される日本一の巨樹・鹿児島の「蒲生の大楠（蒲生八幡神社）」、徳島の深い山懐にそびえ立ち国の天然記念物として神聖な威厳を放つ樹齢千年の「阿川の大杉」、そして幹周り22メートル、秋には黄金色の葉を纏い「ビッグイエロー」として親しまれる日本最大のイチョウ・青森の「北金ヶ沢の大イチョウ（垂乳根のイチョウ）」。気の遠くなるような年月を生き抜いてきた巨樹の根元に立つと、言葉を失うほどの圧倒的な包容力と生命の神秘に包まれます。巨樹の里の温泉宿や海辺の絶景露天風呂を拠点に、郷土の味覚と澄み切った森の空気に癒やされる特別な休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '神木の立つ境内や里山へ朝一番の静寂参拝！澄んだ空気の中でパワーチャージ',
        desc: '観光客の少ない朝の時間帯に巨樹と向き合い、木漏れ日の中で深呼吸する至福のリトリート。'
      },
      {
        title: '鹿児島黒豚＆地鶏、阿波尾鶏＆すだち料理、津軽海峡の旬魚＆深浦マグロ',
        desc: '大自然の力強い大地の恵みを、各宿自慢の本格会席や囲炉裏料理で贅沢に堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで秘湯の一軒宿や自然派リゾートをお得に利用',
        desc: '予約困難な名湯露天風呂付き宿も、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適ステイ。'
      }
    ],
    items: [
      {
        key: 'tree_kamou',
        themeTitle: '鹿児島県姶良市ふるさと納税：幹周り日本一・樹齢1500年の国特別天然記念物「蒲生の大楠」と「フォンタナの丘かもう」',
        themeDesc: '蒲生八幡神社の大楠まで車で数分。全室に檜風呂を備えた温泉宿「フォンタナの丘かもう」では、地下から湧く良質な天然温泉と、自社農園の無農薬有機野菜や鹿児島黒豚を使った健康美食を味わい、心身のデトックスを満喫します。'
      },
      {
        key: 'tree_agawa',
        themeTitle: '徳島県神山町ふるさと納税：樹齢千年の神宿る巨木「阿川の大杉」と里山の名湯「神山温泉 ホテル四季の里＆いやしの湯」',
        themeDesc: '深い自然に囲まれた阿川の大杉の里。重曹泉のぬるぬる美肌温泉が評判の「ホテル四季の里」で、鮎川のせせらぎを聞きながら湯浴みを愉しみ、徳島名産阿波尾鶏や山菜、すだちを使った郷土会席料理を堪能できます。'
      },
      {
        key: 'tree_kitakanegasawa',
        themeTitle: '青森県深浦町ふるさと納税：日本一の大イチョウ「北金ヶ沢のビッグイエロー」と日本海一望「黄金崎不老ふ死温泉」',
        themeDesc: '樹齢千年を超える日本最大のイチョウの巨木から海岸線を南下。日本海の波打ち際に湧く赤褐色の混浴露天風呂で名高い「不老ふ死温泉」で、海に沈む夕日を眺め、獲れたて深浦マグロや三陸・津軽の海の幸会席を堪能します。'
      }
    ],
    crossLinks: [
      { title: '日本三大美林＆森林浴名湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-beautiful-forests-stay', desc: '青森ヒバ・秋田スギ・木曽ヒノキ。' },
      { title: '日本三大原生林＆世界遺産ネイチャー宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-primeval-forests-nature-stay', desc: '知床・屋久島・白神山地。' },
      { title: '日本三霊山＆霊峰パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-sacred-mountains-stay', desc: '富士山・立山・白山。' }
    ]
  },
  {
    slug: 'furusato-tax-three-sacred-hachiman-shrines-stay',
    title: '日本三大八幡宮＆厄除開運・勝運祈願の聖地巡礼宿×ふるさと納税完全ガイド【2026年最新】宇佐神宮・石清水八幡宮・筥崎宮',
    desc: '全国4万社の総本宮と国家鎮護の神域！大分宇佐「宇佐神宮」国宝本殿と宇佐ホテルリバーサイド、京都八幡「石清水八幡宮」エジソンゆかりの男山と京都竹の郷温泉ホテル京都エミナース、福岡博多「筥崎宮」勝運と敵国降伏の扁額と都ホテル博多。日本三大八幡宮の開運・厄除け祈願と名湯・グルメを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大八幡宮＆開運厄除け宿×ふるさと納税ガイド',
    badge: '日本三大八幡宮・開運聖地特集',
    leadTitle: '朱塗りの楼門と神聖なる杜の息吹。源氏の氏神として崇敬を集めた三大八幡の神域へ',
    leadDesc: '皇室や武家からの篤い信仰を集め、全国に4万社以上点在する八幡神社の最高峰「日本三大八幡宮」――神仏習合発祥の霊地であり、一之御殿から三之御殿まで国宝の壮麗な本殿が森の中に立ち並ぶ全国八幡宮の総本宮・大分の「宇佐神宮」、平安京の裏鬼門を守護し織田信長や豊臣秀吉も社殿を修復した山上の国宝・京都の「石清水八幡宮」、そして蒙古襲来の際に神風を呼んだとされ勝運・厄除けの神として名将たちの崇敬を集めた福岡の「筥崎宮（または鎌倉鶴岡八幡宮）」。静謐な境内に足を踏み入れれば、背筋がすっと伸びるような神聖な気に包まれます。門前町や近隣の天然温泉ホテルを拠点に、厄除け祈願とともにご当地グルメや名湯を満喫する心清らかな旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '早朝の静謐な神域へ参拝！混雑のない時間帯に国宝本殿や参道を独占散策',
        desc: '朝靄に包まれる境内を静かに歩き、澄み切った空気の中で心願成就と厄除けのご祈祷を体感。'
      },
      {
        title: '宇佐唐揚げ＆豊後牛、京懐石＆精進料理、博多もつ鍋＆玄界灘の活イカ',
        desc: '歴史ある門前町と港町ならではの美味を、各宿の本格レストランや周辺名店で堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンでハイグレード温泉ホテルを実質2,000円予約',
        desc: '格式ある宿や都心のスパホテルも、寄付金額に応じた最大30%オフ即時割引クーポンでスマートにお得旅。'
      }
    ],
    items: [
      {
        key: 'shrine_usa',
        themeTitle: '大分県宇佐市ふるさと納税：全国4万社八幡宮の総本宮「宇佐神宮」と駅前好立地「宇佐ホテルリバーサイド」',
        themeDesc: '宇佐神宮の大鳥居まで車で約8分。駅館川の清流沿いに建つ「宇佐ホテルリバーサイド」は、ビジネスから観光まで快適な客室を備え、名物宇佐からあげや安心院ワイン、豊後牛ステーキなど大分の味覚を満喫できます。'
      },
      {
        key: 'shrine_iwashimizu',
        themeTitle: '京都府八幡市・西京区ふるさと納税：男山山上に鎮座する国宝「石清水八幡宮」と「京都竹の郷温泉 万葉の湯 ホテル京都エミナース」',
        themeDesc: '厄除け開運の総本山・石清水八幡宮への参拝拠点。敷地内から湧く二つの自家源泉による美肌の天然温泉と多彩な露天風呂で癒やされ、京の旬素材を活かした本格京会席を心ゆくまで味わえます。'
      },
      {
        key: 'shrine_hakozaki',
        themeTitle: '福岡県福岡市博多区・東区ふるさと納税：勝運の神として名高い日本三大八幡「筥崎宮」と屋上温泉スパ「都ホテル 博多」',
        themeDesc: '筥崎宮へ地下鉄で直結。博多駅直結のラグジュアリーホテル「都ホテル博多」は、最上階にアウトドア温泉プールや内湯スパを備え、九州の食材をふんだんに取り入れたディナーと極上のベッドで洗練された滞在を楽しめます。'
      }
    ],
    crossLinks: [
      { title: '日本三大鳥居＆聖地パワースポット宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-torii-gates-sacred-stay', desc: '厳島神社・大神神社・平安神宮。' },
      { title: '日本三大奇祭＆情熱の神事体験宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-peculiar-festivals-stay', desc: '御柱・吉田の火祭・なまはげ。' },
      { title: '国宝三大茶室＆数寄屋建築の名旅館宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-national-treasure-teahouses-stay', desc: '待庵・如庵・密庵。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-coastal-sceneries-stay',
    title: '日本三大白砂青松＆海の絶景パノラマ・海岸リゾート温泉宿×ふるさと納税完全ガイド【2026年最新】天橋立・三保松原・気比の松原',
    desc: '白砂と幾千の青松が描く日本の原風景！京都宮津「天橋立」日本三景股のぞきパノラマと和のリゾート文珠荘、静岡「三保松原」世界遺産富士山と羽衣の松望む風景美術館日本平ホテル、福井敦賀「気比の松原」万葉の海浜とホテルルートイン敦賀駅前。日本三大白砂青松（三大松原名勝）のシーサイドオーシャンビューを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大白砂青松＆海岸絶景パノラマ宿×ふるさと納税ガイド',
    badge: '日本三大白砂青松・海浜絶景特集',
    leadTitle: '青い海と白い砂浜、風にそよぐ緑の松林。古人が愛した白砂青松の美しき弓状海岸へ',
    leadDesc: '日本古来の歌枕として万葉集や百人一首に詠まれ、絵画や庭園の理想景とされてきた「日本三大白砂青松（三大松原）」――神が天と地を架けるために創ったという神話が残り約5000本の松が砂州を覆う日本三景・京都の「天橋立」、駿河湾越しに仰ぎ見る霊峰富士と波打ち際の松林が世界文化遺産の構成資産に登録された静岡の「三保松原」、そして聖徳太子の時代に一夜にして出現したという伝説が残り敦賀湾の穏やかな波とアカマツ・クロマツが広がる福井の「気比の松原」。寄せては返す波の音と潮の香り、そして緑の松のコントラストは、日本人の美意識の原点と言えます。松原や海を一望する海辺のリゾートホテルや老舗料理旅館に泊まり、日本海の松葉ガニや駿河湾の桜えび・駿河湾鮮魚を味わう特別な休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '松原の遊歩道や海岸線へ徒歩すぐ！朝夕の幻想的な海辺をプライベート散策',
        desc: '夕日に染まる砂浜や、朝靄に包まれる松林の静けさを、宿のすぐ前から贅沢に満喫。'
      },
      {
        title: '丹後松葉ガニ＆寒ブリ、駿河湾桜えび＆清水マグロ、越前ガニ＆若狭ふぐ',
        desc: '豊かな海浜が育んだ最高級の海の幸を、宿自慢の本格会席で心ゆくまで堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンでオーシャンビュー名旅館をお得にステイ',
        desc: '名勝地の特等席に佇む人気ホテルも、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適宿泊。'
      }
    ],
    items: [
      {
        key: 'coast_amanohashidate',
        themeTitle: '京都府宮津市ふるさと納税：日本三景・白砂青松の奇跡の回廊「天橋立」と名匠設計「天橋立温泉 和のリゾート 文珠荘」',
        themeDesc: '天橋立運河のほとりに佇み、吉村順三氏の近代数寄屋建築美が光る名宿。全室から松並木と庭園を望み、天橋立温泉の露天風呂で寛ぎ、丹後の松葉ガニや寒ブリしゃぶしゃぶ、丹後コシヒカリの美味に心奪われます。'
      },
      {
        key: 'coast_mihomatsubara',
        themeTitle: '静岡県静岡市清水区ふるさと納税：三保松原と富士山パノラマを仰ぐ風景美術館「日本平ホテル」',
        themeDesc: '日本平山頂に位置し、全面ガラス張りのロビーから三保松原・駿河湾・富士山の雄大な絵画的絶景を一望。広大な芝生庭園を散策し、清水港の極上マグロや駿河湾の桜えび、静岡そだち牛のフレンチディナーを優雅に堪能できます。'
      },
      {
        key: 'coast_kehinomatsubara',
        themeTitle: '福井県敦賀市ふるさと納税：万葉の歴史を刻む敦賀湾の名勝「気比の松原」と「ホテルルートイン敦賀駅前」',
        themeDesc: '三保松原・虹の松原と並ぶ名勝・気比の松原へアクセス良好。敦賀駅前至近の「ルートイン敦賀駅前」を拠点に、ラジウム人工温泉大浴場で寛ぎ、敦賀港直送の越前がにや敦賀真鯛、名物ソースカツ丼など若狭湾の味覚を楽しめます。'
      }
    ],
    crossLinks: [
      { title: '日本三大松原・海岸グランピング宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-coastal-pine-glamping-resort-stay', desc: '虹の松原・気比の松原・三保松原。' },
      { title: '日本三大名勝断崖海岸＆パノラマ海宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-precipitous-coasts-stay', desc: '北山崎・東尋坊・足摺岬。' },
      { title: '日本三大干潟＆海の満ち引き海鮮宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-tidal-flats-nature-stay', desc: '有明海・諫早湾・曽根干潟。' }
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
                        {h.hotelSpecial || '日本三大清流のせせらぎ、千年の巨樹パワースポット、三大八幡宮の開運、白砂青松の海浜絶景を巡る極上の旅路。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の清流・名勝・聖地特集
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
