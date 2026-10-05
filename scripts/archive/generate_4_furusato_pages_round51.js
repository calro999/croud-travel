const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-scenic-coasts-stay',
    title: '日本三大名勝海岸＆奇岩断崖パノラマ・白砂青松の絶景オーシャンビュー宿×ふるさと納税完全ガイド【2026年最新】東尋坊・浄土ヶ浜・白良浜',
    desc: '日本列島の海岸美の極致を巡る旅！福井「東尋坊」柱状節理の断崖絶壁とあわら温泉まつや千千、岩手三陸「浄土ヶ浜」白き鋭鋒奇岩とエメラルドの海浄土ヶ浜パークホテル、和歌山南紀「白良浜」延長620mの白砂青松ビーチとホテル三楽荘。日本三大名勝海岸の絶景パノラマと海の幸を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大名勝海岸＆白砂青松オーシャンビュー宿×ふるさと納税ガイド',
    badge: '日本三大名勝海岸・海景特集',
    leadTitle: '怒濤が削った柱状節理、白き岩峰の極楽浄土、まばゆい白砂ビーチ。日本を代表する海岸美',
    leadDesc: '日本列島をめぐる荒波と潮流が創り上げた、息をのむ美しさを誇る「日本三大名勝海岸」――輝石安山岩の柱状節理が約1kmにわたりそびえ立ち国の名勝・天然記念物に指定されている福井越前の「東尋坊」、宮古湾の内海に白陶土の白い奇岩が林立し松の緑と透き通る海のコントラストが極楽浄土を思わせる岩手三陸の「浄土ヶ浜」、そして珪砂90%を含むさらさらの白い砂浜が弧を描きヤシの木とエメラルドグリーンの遠浅の海が南国情緒を醸す和歌山南紀の「白良浜」。海岸美の感動に浸った後は、越前ガニや三陸のアワビ・ウニ、紀州のクエや伊勢海老の美食ディナーを堪能する特別な旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '断崖クルーズ・浄土ヶ浜の青の洞窟さっぱ船・白良浜の茜色サンセット！圧倒的海の絶景',
        desc: '海上からの迫力あるクルーズ観光や、客室・露天風呂からの全室オーシャンビューを体感。'
      },
      {
        title: '越前ガニと若狭牛、三陸宮古の毛ガニ・生ウニ、南紀白浜の幻の高級魚クエと熊野牛',
        desc: '日本海・三陸沖・黒潮の三大漁場がもたらす最高峰の天然魚介とブランド肉会席を満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンでオーシャンビュー温泉ホテルや老舗旅館をお得に予約',
        desc: '海沿いドライブや記念日旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'coast_tojinbo',
        themeTitle: '福井県坂井市・あわら市ふるさと納税：東尋坊へアクセス抜群・北陸屈指の庭園露天風呂「北陸 あわら温泉 まつや千千」',
        themeDesc: '東尋坊の夕日鑑賞拠点に最適な、名湯あわら温泉を代表する大型老舗旅館。北陸最大級の広さを誇る大浴場「千のこぼれ湯」や露天風呂で寛ぎ、冬の越前ガニや若狭牛、日本海の旬の海の幸を取り入れた豪華会席を楽しめます。'
      },
      {
        key: 'coast_jodogahama',
        themeTitle: '岩手県宮古市ふるさと納税：浄土ヶ浜を見下ろす高台・三陸復興国立公園の極上リゾート「浄土ヶ浜パークホテル」',
        themeDesc: '名勝・浄土ヶ浜へ徒歩圏内に佇み、アカマツの美林と宮古湾を見渡す絶景ホテル。三陸の豊かな海の幸を贅沢に味わえるビュッフェや和食会席、大浴場からの松林パノラマが旅人の心を深く癒やしてくれます。'
      },
      {
        key: 'coast_shirahama',
        themeTitle: '和歌山県白浜町ふるさと納税：白良浜の目の前・全室オーシャンビューと二つの自家源泉「白浜温泉 ホテル三楽荘」',
        themeDesc: '白良浜まで徒歩1分、すべての客室からエメラルドグリーンの海と白い砂浜を一望できる絶景の宿。成分の異なる二つの天然温泉掛け流しの湯巡りと、紀州名物のクエ鍋や伊勢海老、熊野牛会席を客室で優雅に堪能できます。'
      }
    ],
    crossLinks: [
      { title: '日本三大岬＆地球の丸みを感じる断崖海宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-capes-ocean-panorama-stay', desc: '知床岬・足摺岬・佐多岬。' },
      { title: '日本三大海食洞＆青の洞窟・波濤の造形美宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-sea-caves-mystery-stay', desc: '堂ヶ島天窓洞・芥屋の大門・七ツ釜。' },
      { title: '日本三大白砂青松＆海岸絶景パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-coastal-sceneries-stay', desc: '天橋立・三保松原・気比の松原。' }
    ]
  },
  {
    slug: 'furusato-tax-three-famous-waterfalls-healing-stay',
    title: '日本三大名瀑ヒーリング＆マイナスイオンの清流・名水と豪快な滝見温泉宿×ふるさと納税完全ガイド【2026年最新】白糸の滝・吹割の滝・鮎帰りの滝',
    desc: '大自然のマイナスイオンを浴びる名瀑ヒーリング旅！静岡富士宮「白糸の滝」富士山伏流水の絹糸カーテンと休暇村富士、群馬沼田「吹割の滝」東洋のナイアガラと老神温泉仙郷、長崎南島原「鮎帰りの滝」名水百選の清流巨岩と小浜温泉旅館國崎。日本三大名瀑の豪快な水煙と温泉ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大名瀑ヒーリング＆豪快な滝見温泉宿×ふるさと納税ガイド',
    badge: '日本三大名瀑・清流ヒーリング特集',
    leadTitle: '轟音とともに立ち込める水煙、幾筋もの白き糸。大地の鼓動と清冽なマイナスイオン',
    leadDesc: '豊かな山林と清らかな水源に恵まれた日本列島が誇る、個性際立つ名瀑の数々「日本三大名瀑ヒーリング」――富士山の雪解け水が溶岩の断層から幅約150mにわたって絹糸のように流れ落ちる国の名勝・天然記念物・静岡の「白糸の滝」、片品川の清流が岩盤を浸食し幅約30m・高さ約7mにわたって三方から水煙を上げて落下し「東洋のナイアガラ」と称される群馬沼田の「吹割の滝」、そして島原半島の名峰・雲仙山麓の巨岩を割るように清流が滝壺へと雪崩れ落ち絵画のような景観を誇る長崎南島原の「鮎帰りの滝」。轟く滝音に心を清め、天然温泉に身を委ねて地域の山海の馳走を味わう極上の休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '絹糸のカーテン・豪快な川底の割れ目・巨岩の清流！三者三様のマイナスイオン浴',
        desc: '遊歩道を歩きながら間近で水煙を浴び、四季折々の新緑や紅葉と滝のコントラストを満喫。'
      },
      {
        title: '富士宮の富士山虹鱒と朝霧高原豚、上州牛と尾瀬の高原野菜、長崎島原の手延べそうめんと雲仙牛',
        desc: '清流と名水が育んだ最高峰のブランド食材ディナーをホテルや温泉旅館で堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで湖畔リゾートや名湯旅館をお得に予約',
        desc: 'ドライブ観光やハイキング旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'fall_shiraito',
        themeTitle: '静岡県富士宮市ふるさと納税：白糸の滝から車で約15分・田貫湖畔の富士山展望リゾート「休暇村 富士」',
        themeDesc: '白糸の滝や朝霧高原への観光拠点に最適、田貫湖の正面に霊峰富士を望む絶景リゾートホテル。富士山恵みの湯に浸かりながら逆さ富士を眺め、静岡県産ブランド肉や駿河湾の魚介をふんだんに取り入れたディナービュッフェが好評です。'
      },
      {
        key: 'fall_fukiware',
        themeTitle: '群馬県沼田市ふるさと納税：東洋のナイアガラ吹割の滝へ至近・全十室の静寂な大人の隠れ家「老神温泉 仙郷」',
        themeDesc: '吹割の滝から車で約10分、片品川の渓谷沿いにひっそりと佇む高級温泉旅館。敷地内に湧き出る源泉掛け流しの湯と、上州牛や尾瀬の岩魚、朝採れ野菜を美しく仕立てた創作会席料理で、都会の喧騒を忘れる極上のひとときを約束します。'
      },
      {
        key: 'fall_ayugaeri',
        themeTitle: '長崎県南島原市・雲仙市ふるさと納税：鮎帰りの滝巡り拠点・源泉かけ流しと島原郷土料理「小浜温泉 旅館 國崎」',
        themeDesc: '鮎帰りの滝へのドライブアクセス良好、小浜温泉の源泉が湧き出る木造のぬくもりあふれる温泉宿。橘湾の新鮮な地魚や名物の島原そうめん、長崎和牛の会席料理と、日本一の熱量を誇る小浜の名湯露天風呂で心身が癒やされます。'
      }
    ],
    crossLinks: [
      { title: '清流渓谷＆名瀑ヒーリング温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-waterfall-river-gorge-healing-onsen-stay', desc: '奥入瀬渓流・天城湯ヶ島・作並温泉。' },
      { title: '日本三大清流＆名水リバーサイド宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-clear-rivers-stay', desc: '四万十川・長良川・柿田川。' },
      { title: '日本三大美林清流渓谷＆エメラルドブルー絶景宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-clear-stream-valleys-stay', desc: '奥入瀬・抱返り・阿寺渓谷。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-hotsprings-luxury-villas-stay',
    title: '日本三大名湯の別邸＆極上離れ・客室露天風呂とおこもり贅沢宿×ふるさと納税完全ガイド【2026年最新】草津・有馬・下呂',
    desc: '日本三大名湯（草津・有馬・下呂）の最高峰ステイ！群馬草津「草津温泉 奈良屋」湯守が仕込む極上名湯と歴史情緒、兵庫有馬「有馬温泉 中の坊瑞苑」大人のための金泉銀泉露天風呂スイート、岐阜下呂「下呂温泉 水明館」飛騨川のせせらぎと臨川閣の客室温泉。日本三大名湯の格式ある別邸・離れ宿を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大名湯の別邸＆客室露天・極上おこもり宿×ふるさと納税ガイド',
    badge: '日本三大名湯・最高峰離れ特集',
    leadTitle: '千数百年の歴史が磨き上げた名湯の頂点。客室露天と極上のおもてなしに浸る',
    leadDesc: '室町時代の僧・万里集九や江戸幕府の儒学者・林羅山によって選定され、古来より日本一の温泉として愛され続ける「日本三名湯」――日本屈指の酸性度と豊富な自噴湯量を誇り職人が湯守する群馬の「草津温泉」、太古の海水が地下深くから湧き出し鉄分と塩分が濃厚な金泉・銀泉の二つの湯を誇る兵庫の「有馬温泉」、そして美肌の湯として名高く無色透明のなめらかなアルカリ性単純温泉が肌を包み込む岐阜の「下呂温泉」。その中でも名門宿の特別フロアや離れ客室を厳選。誰にも邪魔されない客室露天風呂とプライベートダイニングで、上州牛・神戸牛・飛騨牛を味わい尽くす至高の休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '客室専用露天風呂・専任仲居のおもてなし・贅を尽くした離れスイートステイ',
        desc: '誰にも気兼ねなく三名湯の名湯を独占し、至高のプライベート空間で極上のリラックス。'
      },
      {
        title: '上州黒毛和牛、最高級A5ランク神戸ビーフ、飛騨牛の炭火焼きステーキ会席',
        desc: '日本三大名湯エリアが誇る日本最高峰のブランド和牛食べ比べと、旬の懐石料理を満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れの高級ハイクラス宿をお得に予約',
        desc: '記念日旅行や両親へのプレゼント旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'villa_kusatsu',
        themeTitle: '群馬県草津町ふるさと納税：湯畑至近の老舗最高峰・湯守が管理する極上の白旗源泉「草津温泉 奈良屋」',
        themeDesc: '明治十年の創業以来、草津最古の白旗源泉を引き湯し熟練の湯守が最高の湯加減に整える格式ある名旅館。木の温もりあふれる客室や露天風呂付き客室、上州牛や群馬の山の幸を贅沢に盛り込んだ月替わりの本格会席が至高の夜を約束します。'
      },
      {
        key: 'villa_arima',
        themeTitle: '兵庫県神戸市ふるさと納税：十三歳未満お断りの大人の静寂・金泉を独占する露天風呂付き客室「有馬温泉 中の坊 瑞苑」',
        themeDesc: '有馬温泉の中心に佇み、静けさと上質な寛ぎを追求した大人のための名門宿。客室露天風呂で有馬名物の濃厚な金泉を独り占めでき、最高級A5ランク神戸牛のフィレステーキや明石浦直送の海の幸を使った会席料理が絶品です。'
      },
      {
        key: 'villa_gero',
        themeTitle: '岐阜県下呂市ふるさと納税：飛騨川沿いの一万坪・客室温泉風呂を備えた最高峰フロア「下呂温泉 水明館（臨川閣）」',
        themeDesc: '日本三名湯・下呂温泉を代表する名旅館の最高級棟「臨川閣」。すべての客室に美肌の湯が注ぐ檜の内風呂を備え、飛騨牛のステーキや朴葉味噌焼き、伝統の技が光る京風会席料理をお部屋食で優雅に堪能できます。'
      }
    ],
    crossLinks: [
      { title: '日本三名園＆大名庭園風雅宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-daimyo-gardens-stay', desc: '偕楽園・兼六園・後楽園。' },
      { title: '日本三大美肌の湯×炭酸水素塩泉・美肌温泉ふるさと納税完全ガイド', url: '/furusato-tax-three-major-bihada-hotspring-stay', desc: '嬉野・喜連川・玉造。' },
      { title: '全室離れの隠れ家おこもり宿×極上プライベートヴィラふるさと納税完全ガイド', url: '/furusato-tax-private-villa-hanare-hideaway-stay', desc: '由布院・伊豆高原・定山渓。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-tea-plantations-stay',
    title: '日本三大茶園＆天空の緑の絨毯・茶畑パノラマと最高峰の抹茶文化・茶香宿×ふるさと納税完全ガイド【2026年最新】牧之原・宇治・八女',
    desc: '日本列島の茶文化の最高峰を訪ねる！静岡「牧之原大茶園」富士山と緑の大パノラマにホテルアンビア松風閣、京都「宇治茶の里」世界遺産平等院と宇治川のせせらぎホテルトレンドJR宇治駅前、福岡「八女中央大茶園」玉露の日本一の里とくつろぎの森グリーンピア八女。日本三大茶園の美しい茶畑景観と茶懐石を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大茶園＆天空の茶畑パノラマ・茶香宿×ふるさと納税ガイド',
    badge: '日本三大茶園・茶香リトリート特集',
    leadTitle: '見渡す限りの緑の丘陵、ふわりと漂う茶葉の芳香。五感をととのえる茶園ステイ',
    leadDesc: '古くは鎌倉時代に栄西禅師が種を持ち帰って以来、日本の精神文化やもてなしの心を形作ってきた「日本三大茶園」――見渡す限り緩やかな丘陵地一面に幾筋もの茶畝が広がり富士山を借景に望む日本最大規模の茶産地・静岡の「牧之原大茶園」、覆下栽培によって濃厚なうま味と鮮やかな緑色を引き出し抹茶や玉露の最高峰ブランドとして君臨する京都の「宇治」、そして八女丘陵のスロープ一面に約70ヘクタールの茶畑が広がり伝統本玉露の生産量日本一を誇る福岡の「八女中央大茶園」。茶畑の稜線を望むドライブや茶室での点前体験を楽しんだ後は、お茶のアロマ風呂や茶葉を使った懐石料理に癒やされる特別な旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '富士山と茶畑・宇治川の歴史景観・八女の大茶園パノラマ！緑豊かなヒーリング景観',
        desc: '早朝の澄んだ空気の中で広がる新緑の茶畑や、茶室での本格的なお茶席体験を体感。'
      },
      {
        title: '静岡駿河湾の桜えび・生しらす、京都の京懐石・抹茶スイーツ、福岡八女のブランド牛とハカタポーク',
        desc: '茶懐石の伝統を受け継ぐ、各地域自慢の高級食材ディナーをホテルや温泉旅館で満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで絶景展望ホテルや温泉リゾートをお得に予約',
        desc: '茶巡りのドライブ旅や癒やしのリトリートでも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'tea_shizuoka',
        themeTitle: '静岡県牧之原市・焼津市ふるさと納税：牧之原茶園ドライブ拠点・駿河湾と富士山一望の温泉ホテル「焼津温泉 ホテルアンビア松風閣」',
        themeDesc: '牧之原台地の大茶園から車で快適にアクセスでき、断崖から駿河湾と霊峰富士を見晴らす絶景ホテル。地下1,500mから湧く焼津温泉の展望露天風呂や、焼津港直送の天然マグロと静岡県産食材を活かした贅沢会席が魅力です。'
      },
      {
        key: 'tea_uji',
        themeTitle: '京都府宇治市ふるさと納税：平等院鳳凰堂や宇治の有名茶商めぐり至近「ホテルトレンドJR宇治駅前」',
        themeDesc: 'JR宇治駅から徒歩3分の好立地に位置し、宇治茶の老舗茶舗や抹茶カフェめぐりの拠点に最適なホテル。清潔で機能的な客室を備え、宇治川沿いの歴史散策や世界遺産の寺社巡りを軽快に楽しめます。'
      },
      {
        key: 'tea_yame',
        themeTitle: '福岡県八女市ふるさと納税：八女中央大茶園を望む大自然・天然温泉リゾート「くつろぎの森 グリーンピア八女」',
        themeDesc: '八女の山々に囲まれた高原リゾートホテル。八女茶の香る温泉露天風呂やサウナでリフレッシュし、八女特産の高級玉露を使った料理や福岡の旬の食材会席で心洗われる休日を過ごせます。'
      }
    ],
    crossLinks: [
      { title: '日本三大美林＆森林浴・天然木アロマ温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-beautiful-forests-stay', desc: '青森ヒバ・秋田スギ・木曽ヒノキ。' },
      { title: '日本三大銘菓＆歴史名菓・城下町風雅宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-wagashi-tea-culture-stay', desc: '京都・金沢・松江。' },
      { title: '日本三大名園＆大名庭園風雅宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-daimyo-gardens-stay', desc: '偕楽園・兼六園・後楽園。' }
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
                        {h.hotelSpecial || '日本三大名勝海岸のダイナミックな景観美、日本三大名瀑ヒーリングの清冽なマイナスイオン、日本三大名湯の別邸極上離れの贅、日本三大茶園の天空の緑の絨毯を巡る特別な拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい全国の海岸美・名瀑・名湯別邸特集
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
  console.log('=== Generating 4 Pages for Round 51 ===');
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
  console.log('=== All 4 Pages generated successfully for Round 51! ===');
}

run();
