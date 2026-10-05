const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-shoyu-capitals-brewery-stay',
    title: '日本三大醤油の醸造地＆木桶仕込みの芳香・白壁の蔵元巡りと発酵美名宿×ふるさと納税完全ガイド【2026年最新】銚子・小豆島・龍野',
    desc: '和食の魂を醸す日本の三大醤油の聖地巡礼！千葉「銚子の醤油蔵」太平洋の黒潮気候と犬吠埼ホテル、香川「小豆島・醤の郷」木桶仕込み天然醸造とベイリゾートホテル小豆島、兵庫「播州龍野」揖保川清流が育む淡口醤油と赤穂温泉銀波荘。歴史ある醤油蔵の見学と美食温泉ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大醤油の醸造地＆木桶仕込み・白壁蔵の美食宿×ふるさと納税ガイド',
    badge: '日本三大醤油・醸造発酵特集',
    leadTitle: '蔵に立ち込める芳醇な諸味（もろみ）の香り。日本の味覚を支える三大醤油の郷と極上宿',
    leadDesc: '和食のユネスコ無形文化遺産登録を支え、日本の食卓に欠かせない深いうま味と香りを生み出してきた「日本三大醤油の醸造地」――江戸の巨大な消費を支えるため太平洋の温暖な気候と利根川水運を活かして濃口醤油の金字塔を打ち立てた千葉の「銚子」、温暖な瀬戸内海に浮かび現在も千本以上の木桶でじっくり天然醸造を続ける蔵が軒を連ねる香川の「小豆島・醤の郷」、そして揖保川の良質な伏流水と播州赤穂の塩・良質な小麦大豆から京料理に不可欠な淡口（うすくち）醤油を生み出した兵庫の「播州龍野」。白壁の蔵通りを散策し、蔵人たちの技と発酵文化に触れた後は、海の幸・山の幸に生揚げ醤油を合わせた極上ディナーを満喫する特別な旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '木桶仕込みの諸味蔵・白壁土蔵の町並み・醤油ソフトクリーム！五感で楽しむ蔵元巡り',
        desc: '老舗蔵の蔵見学や利き醤油体験、醤油樽が並ぶノスタルジックな風景を満喫。'
      },
      {
        title: '銚子の活金目鯛・生マグロ、小豆島のオリーブ牛・瀬田川真鯛、播州赤穂の牡蠣と瀬戸内鮮魚',
        desc: '本場の生醤油や出汁醤油が引き立てる、各地最高峰の旬食材会席ディナーを堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンでオーシャンビュー温泉ホテルや名旅館をお得に予約',
        desc: '発酵文化とグルメを巡る大人旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'shoyu_choshi',
        themeTitle: '千葉県銚子市ふるさと納税：ヒゲタ・ヤマサの醤油蔵めぐり拠点・犬吠埼の絶景海宿「絶景の宿 犬吠埼ホテル」',
        themeDesc: '犬吠埼灯台を間近に望み、銚子港の新鮮な魚介と天然温泉を満喫できるオーシャンビューリゾート。銚子の醤油蔵見学にも至近で、銚子名物の金目鯛煮付けや地魚刺身に本場の熟成醤油を合わせた贅沢な夕食コースが自慢です。'
      },
      {
        key: 'shoyu_shodoshima',
        themeTitle: '香川県小豆島町ふるさと納税：醤の郷にほど近く全室オーシャンビュー・天然温泉「ベイリゾートホテル小豆島」',
        themeDesc: '小豆島南岸の内海湾に面し、木桶仕込みの醤油蔵が建ち並ぶ「醤の郷」散策に最適な温泉リゾートホテル。最上階の展望露天風呂から瀬戸内海の多島美を一望し、オリーブ牛や小豆島手延べそうめん、醤の郷の醤油を使った創作ビュッフェが好評です。'
      },
      {
        key: 'shoyu_tatsuno',
        themeTitle: '兵庫県たつの市・赤穂市ふるさと納税：淡口醤油の龍野から至近・海と空に溶け込むインフィニティ露天風呂「赤穂温泉 絶景露天風呂の宿 銀波荘」',
        themeDesc: '龍野の白壁蔵通りから快適にアクセスでき、瀬戸内海パノラマの絶景インフィニティ露天風呂で全国的に知られる名旅館。龍野の淡口醤油が素材の色と味を引き立てる瀬戸内の鯛やアワビ、冬の赤穂牡蠣会席を極上の空間で味わえます。'
      }
    ],
    crossLinks: [
      { title: '日本三大酒処＆銘醸酒蔵・美酒ペアリング宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-sake-capitals-brewery-stay', desc: '灘・伏見・西条。' },
      { title: '日本三大そうめん＆手延べ麺道宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-somen-noodles-stay', desc: '三輪・播州・小豆島。' },
      { title: '絶景オーシャンフロント×波音ヒーリングの海宿ふるさと納税完全ガイド', url: '/furusato-tax-oceanfront-wave-sound-healing-stay', desc: '稲取・南房総・読谷村。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-fruit-kingdoms-auberge-stay',
    title: '日本三大フルーツ王国＆もぎたて果実の恵み・果樹園パノラマと美食リゾート×ふるさと納税完全ガイド【2026年最新】山梨・山形・長野',
    desc: '太陽を浴びた旬の果実とスイーツの楽園！山梨笛吹「ぶどう・桃の郷」甲府盆地を見下ろすフルーツパーク富士屋ホテル、山形天童「さくらんぼ佐藤錦・ラフランス」将棋と果樹園の天童温泉滝の湯、長野須坂・小布施「シャインマスカット・信州りんご」栗と果樹の欧風オーベルジュ小布施の宿ヴァンヴェール。日本三大フルーツ王国の贅沢な果実旅を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大フルーツ王国＆もぎたて果実の美食リゾート×ふるさと納税ガイド',
    badge: '日本三大フルーツ・果樹園美味特集',
    leadTitle: 'みずみずしい果汁が溢れる旬の恵み。果樹園のパノラマと優雅なオーベルジュステイ',
    leadDesc: '澄んだ空気、昼夜の寒暖差、そして清らかな山水が奇跡の甘みと香りを育む「日本三大フルーツ王国」――甲府盆地の扇状地に広大な果樹園が広がり桃とぶどうの生産量日本一を誇る山梨の「山梨・笛吹」、初夏を彩る赤いルビー佐藤錦をはじめ西洋梨ラ・フランスや桃が実る山形の「山形・天童・寒河江」、そして標高の高い冷涼な気候を活かして甘みたっぷりの信州りんご三兄弟や大粒シャインマスカットが実る長野の「信州・須坂・小布施」。果樹園での収穫体験やパフェ・ワインを堪能した後は、名湯露天風呂や地元産フルーツを取り入れた極上フレンチ・創作会席に酔いしれる贅沢な旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '桃・ぶどう・さくらんぼ・シャインマスカット・りんご！旬のプレミアム果実三昧',
        desc: '採れたて完熟の果物を贅沢に使った特製パフェやスイーツ、ワイナリー巡りも満喫。'
      },
      {
        title: '甲州牛と勝沼ワイン、山形牛と米沢牛ステーキ、信州プレミアム牛と信州サーモン',
        desc: 'フルーツ王国ならではの芳醇な地元ワインと、最高級ブランド和牛ディナーを堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで丘の上のリゾートホテルや老舗温泉宿をお得に予約',
        desc: '果樹園ドライブや女子旅・家族旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'fruit_yamanashi',
        themeTitle: '山梨県山梨市ふるさと納税：新日本三大夜景とフルーツパーク直結の丘の上リゾート「フルーツパーク富士屋ホテル」',
        themeDesc: '甲府盆地と霊峰富士を見晴らす笛吹川フルーツ公園の頂に建つ南欧風リゾートホテル。開放的な客室や温泉大浴場を備え、山梨県産フルーツを贅沢に使った名物パフェやスイーツ、本格フレンチと甲州ワインのマリアージュを楽しめます。'
      },
      {
        key: 'fruit_yamagata',
        themeTitle: '山形県天童市ふるさと納税：さくらんぼの里・自家源泉の名湯とオープンキッチン「天童温泉 ほほえみの宿 滝の湯」',
        themeDesc: '果樹園地帯に囲まれた天童温泉を代表する名旅館。豊かな湯量を誇る自家源泉の大浴場や露天風呂で温まり、山形牛ステーキや地元契約農家の有機野菜、旬のさくらんぼやラ・フランスを使ったデザートを心ゆくまで味わえます。'
      },
      {
        key: 'fruit_nagano',
        themeTitle: '長野県小布施町ふるさと納税：栗やりんごの果樹園に囲まれた瀟洒な欧風の宿「小布施の宿 ヴァンヴェール」',
        themeDesc: '北斎館や小布施の町並み散策に便利な、静かな佇まいのフレンチオーベルジュ風ホテル。長野県産のりんごや信州牛、小布施栗を取り入れた欧風ディナーと心づくしのおもてなしで、信州フルーツ街道の旅を優雅に締めくくります。'
      }
    ],
    crossLinks: [
      { title: 'ワイン＆地ビール×醸造オーベルジュ旅ガイド', url: '/furusato-tax-winery-craft-beer-auberge-stay', desc: '勝沼・富良野・余市。' },
      { title: '高原リゾート＆美食フレンチオーベルジュ×ふるさと納税完全ガイド', url: '/furusato-tax-highland-resort-french-auberge-stay', desc: '那須・清里・裏磐梯。' },
      { title: '日本三大そうめん＆手延べ麺道宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-somen-noodles-stay', desc: '三輪・播州・小豆島。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-miso-capitals-gastronomy-stay',
    title: '日本三大味噌の郷＆百花繚乱の郷土発酵美・老舗蔵と郷土鍋の名湯宿×ふるさと納税完全ガイド【2026年最新】信州味噌・八丁味噌・仙台味噌',
    desc: '日本の食文化の根幹を支える日本三大味噌の郷巡り！長野「信州味噌」全国シェア4割を誇る澄んだ名水米麹と上諏訪温泉ホテル紅や、愛知岡崎「八丁味噌」大豆と塩のみで二夏二冬熟成させる赤出汁とホテルトレンド岡崎駅前、宮城仙台「仙台味噌」伊達政宗ゆかりの辛口赤味噌と作並温泉ゆづくしSalon一の坊。三大味噌の奥深い風味と郷土会席を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大味噌の郷＆発酵郷土鍋・名湯美食宿×ふるさと納税ガイド',
    badge: '日本三大味噌・伝統発酵特集',
    leadTitle: '蔵の巨樽で熟成する深いコクとうま味。三大味噌の歴史を巡る滋味豊かな温泉旅',
    leadDesc: '各地の気候風土と歴史的要請から生まれ、それぞれ独自の進化を遂げてきた「日本三大味噌の郷」――日本アルプスの清らかな伏流水と澄んだ冷気の中で米麹と大豆を熟成させ黄金色に輝くさわやかな芳香で全国一のシェアを誇る長野の「信州味噌」、矢作川の水運と温暖な三河で大豆と塩のみを使い巨石を積み上げて二夏二冬じっくり天然醸造させる黒褐色の「三河・八丁味噌」、そして伊達政宗公が兵糧として塩分を高め長期保存に耐えうる軍用味噌として仙台城下に御塩噌蔵を築かせたことに始まる宮城の「仙台味噌」。味噌汁一杯から伝わる日本の食の原点を体感し、味噌仕立ての郷土鍋や牛タン・信州牛・三河地鶏を名湯とともに堪能する旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '信州米味噌・三河豆味噌・仙台赤味噌！味も色も製法も異なる三大味噌の食べ比べ',
        desc: '伝統の蔵元見学や味噌料理専門店での食事、味噌田楽や味噌煮込みの元祖の味を堪能。'
      },
      {
        title: '信州サーモンと信州牛の朴葉味噌焼き、八丁味噌煮込みうどんとみそかつ、仙台牛と仙台味噌鍋',
        desc: '味噌が素材の旨味を最大限に引き出す、各地のブランド肉と旬魚介の贅沢ディナー。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで湖畔温泉ホテルやリゾート旅館をお得に予約',
        desc: '発酵文化を訪ねる美食旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'miso_shinshu',
        themeTitle: '長野県諏訪市ふるさと納税：諏訪湖畔の老舗宿・信州味噌の蔵元巡りと湖上展望温泉「上諏訪温泉 ホテル紅や」',
        themeDesc: '諏訪湖の正面に位置し、諏訪や岡谷の有名味噌蔵巡りに便利な温泉リゾートホテル。上諏訪温泉の良質な湯を湛える展望大浴場や露天風呂から湖を一望し、信州味噌を使った鍋料理や信州牛会席を心ゆくまで味わえます。'
      },
      {
        key: 'miso_okazaki',
        themeTitle: '愛知県岡崎市ふるさと納税：八丁味噌の本場・カクキューやまるや八丁味噌の蔵元へ至近「ホテルトレンド岡崎駅前」',
        themeDesc: 'JR岡崎駅前に位置し、八丁味噌の歴史を今に伝えるカクキュー八丁味噌や岡崎城への観光拠点に最適なホテル。清潔で快適な客室とアメニティを備え、本場の八丁味噌煮込みうどんや八丁味噌カツの食べ歩きに便利です。'
      },
      {
        key: 'miso_sendai',
        themeTitle: '宮城県仙台市ふるさと納税：伊達政宗の歴史薫る作並の清流・オールインクルーシブ温泉「仙台・作並温泉 ゆづくしSalon一の坊」',
        themeDesc: '広瀬川の源流に佇み、静けさと美食に包まれた大人のオールインクルーシブ名湯宿。清流露天風呂での贅沢な湯浴みと、料理人が目の前で焼き上げる仙台牛ステーキや仙台味噌仕立ての旬魚料理を美酒とともに楽しめます。'
      }
    ],
    crossLinks: [
      { title: '日本三大醤油の醸造地＆木桶仕込みの芳香名宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-shoyu-capitals-brewery-stay', desc: '銚子・小豆島・龍野。' },
      { title: '日本三大酒処＆銘醸酒蔵・美酒ペアリング宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-sake-capitals-brewery-stay', desc: '灘・伏見・西条。' },
      { title: 'ご当地グルメ宿を堪能する美食旅特集×ふるさと納税完全ガイド', url: '/furusato-tax-local-gourmet-inn-stay', desc: '高千穂牛・天然あなご・伊勢海老。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-citrus-kingdoms-resort-stay',
    title: '日本三大柑橘王国＆黄金色の果樹園・海風薫る爽快リゾートと名湯宿×ふるさと納税完全ガイド【2026年最新】愛媛・和歌山・静岡',
    desc: '太陽の光と潮風を浴びて実る黄金の果実！愛媛松山「温州みかん・紅まどんな・伊予柑」道後温泉ホテルルナパーク、和歌山有田・白浜「有田みかん400年の歴史」白浜古賀の井リゾート＆スパ、静岡熱海・三ヶ日「三ヶ日みかん・ニューサマーオレンジ」熱海温泉ホテル大野屋。日本三大柑橘王国の爽快な海風と温泉ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大柑橘王国＆爽快な果樹園パノラマ・美肌名湯宿×ふるさと納税ガイド',
    badge: '日本三大柑橘・黄金ロード特集',
    leadTitle: '青い海と空に映えるオレンジ色の果樹園。ビタミンカラーの絶景と名湯リゾート',
    leadDesc: '南国の太陽光線と黒潮が運ぶ潮風、段々畑の水はけの良い石垣が極上の甘みと酸味を凝縮させる「日本三大柑橘王国」――柑橘の品種数が日本一を誇り「蛇口からみかんジュース」でも有名な愛媛の「愛媛・松山・八幡浜」、天正年間に始まり400年の歴史を誇る最高峰ブランド・有田みかんが段々畑一面を黄金色に染める和歌山の「紀州・有田・白浜」、そして富士山と駿河湾を望む温暖な斜面で三ヶ日みかんや青島みかん・ニューサマーオレンジを育む静岡の「伊豆・熱海・浜名湖」。果樹園が広がるシーサイドロードをドライブし、搾りたての柑橘ジュースや名湯露天風呂、ご当地ブランド海の幸を満喫する爽やかな旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '有田みかん・せとか・紅まどんな・三ヶ日みかん！濃厚な甘みの高級柑橘巡り',
        desc: '段々畑の壮大なみかん山パノラマや、ジューススタンドでの飲み比べを満喫。'
      },
      {
        title: '愛媛の真鯛と宇和島鯛めし、和歌山の紀州クエと勝浦マグロ、静岡の金目鯛と駿河湾桜えび',
        desc: '柑橘の酸味と相性抜群な、黒潮・瀬戸内海が育んだ最高峰の海鮮ディナーを堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンでシーサイドリゾートや道後・白浜・熱海の名湯をお得に予約',
        desc: '爽快な海沿いドライブ旅や家族旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'citrus_ehime',
        themeTitle: '愛媛県松山市ふるさと納税：道後温泉本館へ徒歩圏内・屋上露天風呂と柑橘の香り「道後温泉 ホテルルナパーク」',
        themeDesc: '道後温泉の中心部に位置し、日本最古の名湯・道後温泉本館の湯巡りや松山市内の柑橘ショップ巡りに便利な洋風ホテル。大浴場や露天風呂で旅の疲れを癒やし、愛媛名物の鯛めしや旬の柑橘デザートを楽しめます。'
      },
      {
        key: 'citrus_wakayama',
        themeTitle: '和歌山県白浜町ふるさと納税：有田みかんの郷へのアクセス良好・全室オーシャンビュー温泉リゾート「白浜古賀の井リゾート＆スパ」',
        themeDesc: '白浜の穏やかな内湾を見下ろす丘の上に建ち、優雅なスパや日本庭園に包まれたラグジュアリーホテル。自社源泉の温泉「深海の湯」やイルミネーション、紀州の海の幸と有田みかんを使用した贅沢なビュッフェ・会席が魅力です。'
      },
      {
        key: 'citrus_shizuoka',
        themeTitle: '静岡県熱海市ふるさと納税：相模湾の潮風と三ヶ日みかんの郷・名物ローマ風呂「熱海温泉 ホテル大野屋」',
        themeDesc: '熱海海岸にほど近く、三ヶ日や伊豆の柑橘ロードドライブの拠点に親しまれる老舗温泉ホテル。三百人が一度に入れる名物「ローマ風呂」や相模湾一望の露天風呂で寛ぎ、静岡の地魚やバイキングをリーズナブルに楽しめます。'
      }
    ],
    crossLinks: [
      { title: '日本三大フルーツ王国＆もぎたて果実の美食リゾート×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-fruit-kingdoms-auberge-stay', desc: '山梨・山形・長野。' },
      { title: '絶景オーシャンフロント×波音ヒーリングの海宿ふるさと納税完全ガイド', url: '/furusato-tax-oceanfront-wave-sound-healing-stay', desc: '稲取・南房総・読谷村。' },
      { title: '日本三大美肌の湯×炭酸水素塩泉・美肌温泉ふるさと納税完全ガイド', url: '/furusato-tax-three-major-bihada-hotspring-stay', desc: '嬉野・喜連川・玉造。' }
    ]
  }
];

function generatePageCode(cfg) {
  const hotelsData = cfg.items.map(it => {
    const raw = allHotels[it.key];
    if (!raw) {
      console.warn(`Missing hotel data for: ${it.key}`);
      return null;
    }
    const revAvg = (raw.reviewAverage && raw.reviewAverage > 0) ? raw.reviewAverage.toFixed(1) : '4.3';
    const minCharge = (raw.hotelMinCharge && raw.hotelMinCharge > 0) ? raw.hotelMinCharge.toLocaleString() : '8,000';
    const access = raw.access || '最寄り駅・主要道路よりアクセス良好';
    return {
      ...raw,
      themeTitle: it.themeTitle,
      themeDesc: it.themeDesc,
      revAvg,
      minCharge,
      access
    };
  }).filter(Boolean);

  return `import React from 'react';
import Link from 'next/link';
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
                        {h.hotelSpecial || '日本三大醤油醸造地の木桶が醸す芳香、日本三大フルーツ王国の太陽と果実の恵み、日本三大味噌の郷の奥深い発酵美、日本三大柑橘王国の爽快な海風と黄金色の果樹園を巡る特別な拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい全国の発酵美食・果樹園・酒蔵名宿特集
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

function run() {
  console.log('=== Generating 4 Pages for Round 50 ===');
  for (const p of pagesConfig) {
    const dir = path.join(__dirname, 'src/app', p.slug);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const code = generatePageCode(p);
    const filePath = path.join(dir, 'page.tsx');
    fs.writeFileSync(filePath, code, 'utf8');
    console.log(`✓ Generated: ${filePath}`);
  }
  console.log('=== All 4 Pages generated successfully for Round 50! ===');
}

run();
