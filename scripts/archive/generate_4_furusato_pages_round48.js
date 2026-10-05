const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-capes-ocean-panorama-stay',
    title: '日本三大岬＆地球の丸みを感じる断崖・絶景パノラマ海宿×ふるさと納税完全ガイド【2026年最新】知床岬・足摺岬・佐多岬',
    desc: '日本列島の果てに突き出た壮大な絶景岬！世界自然遺産の断崖とオホーツクの海原「知床岬」ウトロ温泉知床第一ホテル、黒潮打ち寄せる太平洋270度パノラマと白亜の灯台「足摺岬」足摺国際ホテル、本州最南端からエメラルドブルーの錦江湾と開聞岳を望む「佐多岬」指宿白水館。日本三大岬のダイナミックな景観美と海の幸を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大岬＆地球の丸みを感じる断崖海宿×ふるさと納税ガイド',
    badge: '日本三大岬・絶景オーシャン特集',
    leadTitle: '荒波が刻んだ断崖絶壁、水平線に沈む茜色の夕日。最果ての地で出会う地球の躍動',
    leadDesc: '大海原に向かって突き出し、地球の丸みを実感できるほどの壮大なスケールを誇る「日本三大岬」――流氷が運ぶ栄養が命を育みヒグマやオジロワシが息づく手つかずの原生自然が広がる北海道の「知床岬」、黒潮が激しく打ち寄せる高さ80mもの海食崖の上に白亜の灯台が立ち270度の大パノラマが広がる高知の「足摺岬」、そして霧島錦江湾国立公園の南端に位置しソテツの自生林を抜けた先にエメラルドグリーンの海と開聞岳が広がる鹿児島の「佐多岬」。海と空が溶け合う最果ての絶景を巡った後は、三陸やオホーツク・黒潮の旬魚、名湯露天風呂に癒やされる特別な休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '270度広がる大海原の水平線と水平線に沈む圧倒的なマジックアワー',
        desc: '知床のオホーツク夕日、足摺岬の日の出と星空、佐多岬の錦江湾と開聞岳のシルエットを独占。'
      },
      {
        title: '知床の知床牛とオホーツク毛ガニ・イクラ、土佐清水の清水サバ、鹿児島の黒豚と錦江湾真鯛',
        desc: '荒波にもまれた極上の天然魚介と、地元ならではのブランド肉ディナーを堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで絶景の温泉ホテル・名門旅館をお得に予約',
        desc: '岬めぐりのドライブや写真撮影旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'cape_shiretoko',
        themeTitle: '北海道斜里町ふるさと納税：知床岬クルーズの拠点・オホーツク海を一望する名湯「ウトロ温泉 知床第一ホテル」',
        themeDesc: '世界自然遺産・知床の大自然を望む高台に建ち、オホーツク海に沈む夕日を一望できる大型温泉リゾート。天然温泉の大浴場「翡翠風呂」や、北海道屈指の品数を誇るライブビュッフェ「マルスコイ」で、知床の海の幸・山の幸を心ゆくまで堪能できます。'
      },
      {
        key: 'cape_ashizuri',
        themeTitle: '高知県土佐清水市ふるさと納税：足摺岬灯台へ徒歩圏内・太平洋パノラマ露天風呂「あしずり温泉郷 足摺国際ホテル」',
        themeDesc: '足摺岬の先端近くに位置し、露天風呂や客室から太平洋の雄大な黒潮を見渡せる老舗リゾートホテル。満天の星空観賞会や郷土芸能の披露などおもてなしも充実し、名物の清水サバ姿造りやカツオのタタキを本場の味で贅沢に味わえます。'
      },
      {
        key: 'cape_satamisaki',
        themeTitle: '鹿児島県指宿市・南大隅町ふるさと納税：佐多岬を対岸に望む名門・名物砂むし温泉と元禄風呂「鹿児島 砂むし温泉 指宿白水館」',
        themeDesc: '錦江湾の波打ち際に広大な日本庭園を有する名門旅館。世界的にも珍しい天然砂むし温泉や江戸情緒を再現した千坪の「元禄風呂」を備え、佐多岬観光のプレミアムな拠点として鹿児島黒牛・黒豚会席や薩摩の芋焼酎を優雅に楽しめます。'
      }
    ],
    crossLinks: [
      { title: '日本三大急潮＆激流うず潮パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-rapid-currents-strait-stay', desc: '鳴門・来島・関門海峡。' },
      { title: '日本三大美港＆夜景オーシャンビュー宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-beautiful-ports-stay', desc: '清水港・長崎港・神戸港。' },
      { title: '絶景オーシャンフロント×波音ヒーリングの海宿ふるさと納税完全ガイド', url: '/furusato-tax-oceanfront-wave-sound-healing-stay', desc: '稲取・南房総・読谷村。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-ancient-lakes-resort-stay',
    title: '日本三大古代湖＆数十万年の歴史美・湖畔リゾートと温泉名宿×ふるさと納税完全ガイド【2026年最新】琵琶湖・諏訪湖・三方五湖',
    desc: '地球の記憶を宿す悠久の古代湖！400万年の歴史を誇る日本最大の古代湖「琵琶湖」琵琶湖ホテル、フォッサマグナに誕生し御神渡りの神話息づく「諏訪湖」上諏訪温泉しんゆ、7万年の年縞が世界標準となった奇跡の湖群「三方五湖（水月湖）」若狭きらら温泉水月花。日本三大古代湖の静かな湖面と温泉ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大古代湖＆湖畔リゾート・温泉名宿×ふるさと納税ガイド',
    badge: '日本三大古代湖・水辺リトリート特集',
    leadTitle: '悠久の時を湛える神秘の古代湖。水面のきらめきと名湯に身を委ねる極上の休息',
    leadDesc: '数十万年〜数百一万年以上もの長い地質時代を生き延び、固有の生態系と神話・歴史を育んできた「日本三大古代湖」――およそ400万年前に誕生し日本最大の面積を誇る滋賀の「琵琶湖」、中央構造線と糸魚川静岡構造線が交差する断層湖で冬の「御神渡り」神事が伝わる長野の「諏訪湖」、そして数万年間にわたり一度も水底がかき乱されず世界標準の地質年代時計「年縞」が堆積した奇跡の水月湖を含む福井の「三方五湖」。静寂に包まれた湖畔を散策し、レイクビューの客室や露天風呂から刻々と移ろう湖面を眺め、近江牛・信州サーモン・若狭フグの美食を堪能する特別な旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '湖面に映る朝日と夕景・広大なパノラマビューを望む全室レイクビューステイ',
        desc: '静けさに包まれた朝の湖畔散歩や、夕日に染まる湖水、夜の湖畔ライトアップを満喫。'
      },
      {
        title: '近江牛のすき焼き、信州プレミアム牛肉とワカサギ、若狭ふぐと若狭湾の越前ガニ',
        desc: '湖と山・海がもたらす極上のご当地ブランド食材と銘酒のペアリングディナー。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで湖畔リゾートホテルや老舗温泉宿をお得に予約',
        desc: '水辺のリフレッシュ旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'lake_biwa',
        themeTitle: '滋賀県大津市ふるさと納税：全室レイクビュー・琵琶湖の美景と天然温泉「琵琶湖ホテル」',
        themeDesc: '琵琶湖畔に佇み、すべての客室から雄大な琵琶湖を一望できるリゾートホテル。天然温泉「瑠璃の湯」で旅の疲れを癒やし、近江牛や滋賀県産オーガニック野菜を使った本格フレンチや鉄板焼き、和食会席で至福のひとときを過ごせます。'
      },
      {
        key: 'lake_suwa',
        themeTitle: '長野県諏訪市ふるさと納税：諏訪湖畔の癒やしの宿・神秘なる湖を望む露天風呂「上諏訪温泉 しんゆ（親湯）」',
        themeDesc: '諏訪湖のほとりに位置し、ヒーリング音楽が流れる落ち着いた大人の湯宿。自家源泉の美肌温泉に浸かりながら諏訪湖の借景を楽しめ、地産地消の美と健康を意識した創作和食会席が女性やカップルにも高い評価を得ています。'
      },
      {
        key: 'lake_mikatagoko',
        themeTitle: '福井県若狭町ふるさと納税：水月湖の湖畔に建つ唯一の温泉宿・若狭の美食「若狭みかた きらら温泉 水月花」',
        themeDesc: '世界標準の年縞が眠る水月湖のほとりに佇み、館内すべての場所から静かな湖面を眺められる癒やしの宿。宿専用桟橋からのモーニングクルーズや、冬の若狭ふぐ・若狭牛・越前ガニの豪華会席が自慢です。'
      }
    ],
    crossLinks: [
      { title: '日本三大急坂・天空峠道＆雲海パノラマ絶景宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-high-mountain-passes-stay', desc: '渋峠・富士山スカイライン・温見峠。' },
      { title: '日本三大運河＆水郷レトロ・白壁の蔵屋敷と舟流し情趣の名宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-historic-canals-stay', desc: '小樽・倉敷・近江八幡。' },
      { title: '日本三大清流＆名水リバーサイド宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-clear-rivers-stay', desc: '四万十川・長良川・柿田川。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-bamboo-groves-stay',
    title: '日本三大竹林＆風にそよぐ緑の回廊・静寂の美林と風雅名宿×ふるさと納税完全ガイド【2026年最新】嵯峨野・報国寺・さつま町',
    desc: '風の音と竹葉のささやきに包まれる禅の空間！京都嵐山「嵯峨野・竹林の小径」平安貴族の美意識と嵐山温泉渡月亭、神奈川鎌倉「報国寺（竹の寺）」千本の孟宗竹と鎌倉パークホテル、鹿児島北薩摩「さつま町竹林」日本一の竹林面積と四季の杜紫尾庵。日本三大竹林の幻想的な緑の回廊と風雅な宿を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大竹林＆静寂の緑の回廊・風雅名宿×ふるさと納税ガイド',
    badge: '日本三大竹林・森林セラピー特集',
    leadTitle: '木漏れ日降り注ぐ青竹の天蓋。心を澄ませる静寂のひとときと名宿ステイ',
    leadDesc: 'すっきりと天に向かって伸びる青竹の林、風が通り抜けるたびに響く葉擦れの音、足元を覆うみずみずしい苔――日常の喧騒を離れ深い安らぎをもたらす「日本三大竹林」――平安時代から貴族の別荘地として愛され天龍寺から野宮神社へと続く緑のトンネルが幻想的な京都嵐山の「嵯峨野・竹林の小径」、足利・上杉氏の菩提寺で本堂裏に約2,000本の孟宗竹が美しく手入れされ抹茶を味わいながら眺められる神奈川鎌倉の「報国寺（竹の寺）」、そして竹林面積日本一を誇り竹工芸やタケノコ栽培の聖地として知られる鹿児島北薩摩の「さつま町竹林」。竹林の清々しい空気に包まれた後は、老舗旅館の京会席や隠れ家離れの源泉掛け流し温泉で心身をととのえる至高の旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '早朝の静寂の中で味わう竹林の小径・木漏れ日とマイナスイオンの癒やし',
        desc: '観光客の少ない早朝の時間帯に、澄み切った竹林の空気と鳥のさえずりを独り占め。'
      },
      {
        title: '朝掘りタケノコ会席・京都の湯豆腐と京懐石・鎌倉フレンチ・鹿児島黒豚しゃぶしゃぶ',
        desc: '竹林の恵みである旬のタケノコ料理と、各地の風土が育んだハイグレードなグルメを満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで由緒ある老舗旅館や離れ隠れ家宿をお得に予約',
        desc: '大人の静かな一人旅や記念日の二人旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'bamboo_arashiyama',
        themeTitle: '京都府京都市ふるさと納税：渡月橋のたもと・嵯峨野竹林散策に最適な創業百余年の老舗「京都 嵐山温泉 渡月亭」',
        themeDesc: '嵐山の象徴・渡月橋南詰に位置し、早朝の嵯峨野・竹林の小径散策にこれ以上ない立地を誇る老舗旅館。天然嵐山温泉の湯浴みと、四季折々の京野菜や旬魚を巧みに仕立てた伝統の京会席料理で、京都の雅を五感で堪能できます。'
      },
      {
        key: 'bamboo_kamakura',
        themeTitle: '神奈川県鎌倉市ふるさと納税：報国寺・竹の寺めぐり拠点・相模湾の潮風薫る上質なホテル「鎌倉パークホテル」',
        themeDesc: '由比ヶ浜海岸の目の前に建ち、鎌倉市街や報国寺へのアクセス至便な欧風クラシックホテル。全室にイタリア直輸入のインテリアを配し、地元三浦半島の獲れたて野菜や相模湾の地魚を活かしたフレンチ・和食会席が魅力です。'
      },
      {
        key: 'bamboo_satsuma',
        themeTitle: '鹿児島県さつま町ふるさと納税：日本一の竹林の郷・全室源泉掛け流し露天付き離れの隠れ家「四季の杜 紫尾庵」',
        themeDesc: '竹林の里・さつま町の奥座敷、神の湯と称される紫尾温泉に佇む全室離れの極上宿。とろりとした極上の硫黄泉が注ぐ客室露天風呂と、鹿児島黒毛和牛や地元契約農家の野菜、タケノコを取り入れた創作会席で究極の静寂を楽しめます。'
      }
    ],
    crossLinks: [
      { title: '日本三大美林＆森林浴・天然木アロマ温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-beautiful-forests-stay', desc: '青森ヒバ・秋田スギ・木曽ヒノキ。' },
      { title: '日本三大名園＆大名庭園風雅宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-daimyo-gardens-stay', desc: '偕楽園・兼六園・後楽園。' },
      { title: '全室離れの隠れ家おこもり宿×極上プライベートヴィラふるさと納税完全ガイド', url: '/furusato-tax-private-villa-hanare-hideaway-stay', desc: '由布院・伊豆高原・定山渓。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-calderas-geopark-stay',
    title: '日本三大カルデラ＆地球の息吹・巨大火口原パノラマと名湯宿×ふるさと納税完全ガイド【2026年最新】阿蘇・箱根・屈斜路',
    desc: '大地の鼓動を肌で感じるジオパークの驚異！世界屈指の複式カルデラと外輪山の大パノラマ「阿蘇カルデラ」阿蘇内牧温泉阿蘇プラザホテル、富士山を望むカルデラ湖畔のリゾート「箱根カルデラ（芦ノ湖）」箱根はなをり、日本最大のカルデラ湖と屈斜路ブルー「屈斜路・摩周カルデラ」屈斜路プリンスホテル。日本三大カルデラの絶景温泉宿を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大カルデラ＆巨大火口原パノラマ名湯宿×ふるさと納税ガイド',
    badge: '日本三大カルデラ・大自然ジオ特集',
    leadTitle: '見渡す限りの外輪山、噴煙を上げる火口、紺碧のカルデラ湖。地球のエネルギーを体感する旅',
    leadDesc: '数万年前の巨大噴火によって大地が陥没し、息をのむ雄大な凹地地形を形成した「日本三大カルデラ」――東西約18km・南北約25kmにおよびカルデラ内に町や鉄道が広がる世界最大級のスケールを誇る熊本の「阿蘇カルデラ」、中央火口丘や芦ノ湖・仙石原を擁し霊峰富士を仰ぎ見る日本屈指の温泉郷を形成した神奈川の「箱根カルデラ」、そして周囲約57kmに及ぶ日本最大のカルデラ湖であり冬には白鳥が飛来し砂湯が湧き出る北海道道東の「屈斜路カルデラ」。大地の鼓動が育んだ濃厚な天然温泉に身を浸し、あか牛・相模湾の海の幸・北海道の極上ジビエや海鮮を味わうダイナミックな休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '外輪山の大観峰・箱根大涌谷の噴煙・屈斜路湖の美幌峠！圧倒的な地球景観',
        desc: 'カルデラを見下ろす展望台からの大雲海や、火山の恩恵による多彩な泉質の湯巡りを体感。'
      },
      {
        title: '熊本あか牛の溶岩焼き、小田原漁港の朝獲れ鮮魚と足柄牛、オホーツク海の毛ガニと十勝ハーブ牛',
        desc: '火山灰土と豊かな伏流水が育んだブランド和牛と新鮮な地元食材の極上ディナー。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで絶景リゾートホテルや老舗温泉宿をお得に予約',
        desc: 'ドライブ観光やジオパーク巡りでも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'caldera_aso',
        themeTitle: '熊本県阿蘇市ふるさと納税：阿蘇五岳とカルデラを一望・最上階展望露天風呂「阿蘇内牧温泉 阿蘇プラザホテル」',
        themeDesc: '阿蘇カルデラの中心・内牧温泉に位置し、阿蘇五岳の涅槃像を正面に望む大型温泉ホテル。屋上展望露天風呂「峰望の湯」からの大パノラマと、熊本名物のあか牛ステーキや馬刺し、郷土料理バイキングが人気を集めています。'
      },
      {
        key: 'caldera_hakone',
        themeTitle: '神奈川県箱根町ふるさと納税：芦ノ湖のカルデラ水面と一体化する水盤テラス「箱根・芦ノ湖 はなをり（オリックスホテルズ＆リゾーツ）」',
        themeDesc: '芦ノ湖畔に佇み、カルデラ湖を見渡すオープンエアの水盤テラスや足湯が象徴的なモダン温泉リゾート。芦ノ湖を望む展望露天風呂や、二十四節気をテーマにした彩り豊かなブッフェダイニングで優雅な箱根の休日を演出します。'
      },
      {
        key: 'caldera_kussharo',
        themeTitle: '北海道弟子屈町ふるさと納税：日本最大のカルデラ湖畔・美幌峠雲海への特等席「屈斜路プリンスホテル」',
        themeDesc: '屈斜路湖のほとりに佇み、ホテル敷地内からカルデラ湖の雄大な自然を満喫できるリゾート。地下1,000mから湧き出る庭園露天風呂でくつろぎ、北海道産の魚介や十勝牛を取り入れたディナービュッフェを楽しめます。'
      }
    ],
    crossLinks: [
      { title: '日本三大カルスト＆天空の白い巨岩パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-karsts-highland-drive-stay', desc: '秋吉台・四国カルスト・平尾台。' },
      { title: '雲海テラス＆天空パノラマリゾート×ふるさと納税完全ガイド', url: '/furusato-tax-sea-of-clouds-sky-terrace-hotel-stay', desc: 'トマム・志賀高原・蔵王。' },
      { title: '絶景富士山ビュー露天風呂宿×ふるさと納税完全ガイド', url: '/furusato-tax-fuji-view-onsen-resort-stay', desc: '河口湖・山中湖・日本平。' }
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
                        {h.hotelSpecial || '日本三大岬のダイナミックな断崖絶景、日本三大古代湖の悠久の湖畔風景、日本三大竹林の静寂の緑の回廊、日本三大カルデラの地球の息吹を巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい全国の絶景岬・古代湖・自然回廊特集
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
  console.log('=== Generating 4 Pages for Round 48 ===');
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
  console.log('=== All 4 Pages generated successfully for Round 48! ===');
}

run();
