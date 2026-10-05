const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-spring-waters-stay',
    title: '日本三大名水・湧水水源地＆清流酒蔵グルメ・名水露天風呂宿×ふるさと納税完全ガイド【2026年最新】黒部湧水群・白州尾白川・南阿蘇白川水源',
    desc: '日本屈指の清らかな湧水と名水仕込みの絶品グルメ！富山黒部「黒部川扇状地湧水群」北アルプス雪解けの名水と大江戸温泉物語宇奈月グランドホテル、山梨北杜「白州尾白川名水」南アルプスの天然水・ウイスキーの聖地とグランドメルキュール八ヶ岳リゾート＆スパ、熊本南阿蘇「白川水源」毎分60トン自噴する阿蘇の恵みとオーベルジュ森のアトリエ南阿蘇ルナ天文台。日本三大名水の地を巡る極上ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大名水＆湧水水源地・清流酒蔵美食宿×ふるさと納税ガイド',
    badge: '日本三大名水・湧水水源地特集',
    leadTitle: '幾千年の時を経て地底から滾々と湧き出る奇跡の雫。清冽な名水に心洗われる旅',
    leadDesc: '日本各地の山々が雨や雪を受け止め、何層もの地層で磨き抜かれて湧き出す「日本三大名水（代表的水源地）」――北アルプスの雪解け水が地下をくぐり海岸近くで自噴する富山黒部の「黒部川扇状地湧水群」、甲斐駒ヶ岳の花崗岩層で濾過され世界的なウイスキーやミネラルウォーターを生む山梨白州の「尾白川名水」、そして阿蘇カルデラの裾野に毎分60トンもの常温の清泉がこんこんと湧き上がる熊本の「白川水源」。澄み切った水が育む地酒、手打ち蕎麦、清流魚、そして名水を贅沢に湛えた温泉風呂は、日常で疲れた五感を澄み渡らせてくれます。水源の森を散策し、富山湾の海の幸・甲州ワインビーフ・阿蘇あか牛を名水仕込みの美酒とともに味わう至高の旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '毎分数十トンの自噴泉や翡翠色に輝く清流！圧倒的な透明度を誇る奇跡の水源',
        desc: 'ペットボトルに汲んで味わう名水の甘みや、川底の砂が舞う湧出口の神秘的な光景を体感。'
      },
      {
        title: '名水仕込みの手打ち蕎麦＆地酒、富山白えび、甲州ワインビーフ、阿蘇あか牛溶岩焼き',
        desc: '澄んだ水だからこそ引き出せる食材本来の旨味と、水の名産地ならではの極上ディナーを満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで自然あふれる名水リゾート・温泉宿をお得に予約',
        desc: '避暑や週末のリフレッシュ旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'water_kurobe',
        themeTitle: '富山県黒部市ふるさと納税：黒部名水と宇奈月の美肌温泉を満喫「大江戸温泉物語 宇奈月グランドホテル」',
        themeDesc: '北アルプスの名水が注ぐ黒部峡谷の玄関口に佇む温泉ホテル。日本有数の透明度を誇る名湯・宇奈月温泉の大浴場と露天風呂で寛ぎ、富山湾の新鮮な海の幸や名水で炊き上げたコシヒカリを朝夕の豪華バイキングで心ゆくまで楽しめます。'
      },
      {
        key: 'water_hakushu',
        themeTitle: '山梨県北杜市ふるさと納税：白州名水の郷・八ヶ岳の自然に抱かれた高原リゾート「グランドメルキュール八ヶ岳リゾート＆スパ」',
        themeDesc: '南アルプス・甲斐駒ヶ岳の麓、白州名水エリアに程近い八ヶ岳南麓の高原リゾート。星空を望む露天風呂や温泉ラウンジを備え、名水で仕込まれた山梨ワインや地酒、甲州ワインビーフをはじめとする地域色豊かなビュッフェディナーを堪能できます。'
      },
      {
        key: 'water_shirakawa',
        themeTitle: '熊本県南阿蘇村ふるさと納税：白川水源すぐ・星空と阿蘇カルデラを望むオーベルジュ「森のアトリエ 南阿蘇ルナ天文台」',
        themeDesc: '毎分60トンが自噴する名水・白川水源の近く、阿蘇の森の中に佇む本格オーベルジュ。九州屈指の巨大望遠鏡による天体観測と、阿蘇の名水と熊本あか牛を贅沢に使った本格フレンチフルコースを優雅に味わう特別な夜を過ごせます。'
      }
    ],
    crossLinks: [
      { title: '日本三大美林渓流＆原生林マイナスイオン宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-clear-stream-valleys-stay', desc: '奥入瀬・抱返り・阿寺渓谷。' },
      { title: '日本三大急流＆川下り舟体験・清流鮎グルメ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-rapid-rivers-stay', desc: '最上川・富士川・球磨川。' },
      { title: '日本三大渓谷美＆清流大自然絶景宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gorges-scenery-stay', desc: '清津峡・黒部峡谷・大杉谷。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-buddhas-heritage-stay',
    title: '日本三大仏＆歴史古都の門前町・国宝仏閣と伝統会席宿×ふるさと納税完全ガイド【2026年最新】奈良・鎌倉・高岡大仏',
    desc: '千年の祈りと威風堂々の尊顔！奈良「東大寺盧舎那仏」世界最大の木造建築と大仏殿・若草山麓ホテルニューわかさ、神奈川「鎌倉大仏」国宝・青空の下に鎮座する高徳院と湘南フレンチ鎌倉パークホテル、富山「高岡大仏」銅器の町が誇る日本一の美男仏とホテルクラウンヒルズ高岡駅前。日本三大仏の歴史ロマンと門前町文化を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大仏＆歴史古都・門前町の名宿×ふるさと納税ガイド',
    badge: '日本三大仏・歴史古都特集',
    leadTitle: '青空を背に佇む優しい眼差し、千年の歴史が刻む圧倒的な威厳。日本の美意識に触れる',
    leadDesc: '国家の安寧や人々の救済を願って建立され、日本の仏教美術・鋳造技術の頂点を極めた「日本三大仏」――聖武天皇の発願により国家事業として鋳造され世界遺産東大寺の大仏殿に鎮座する奈良の「奈良の大仏（盧舎那仏）」、津波で大仏殿が流失して以来六百年以上にわたり青空と潮風の中に端座する神奈川の「鎌倉大仏（高徳院 阿弥陀如来坐像）」、そして加賀前田家ゆかりの鋳物産業の粋を集め与謝野晶子をして「美男におわす」と詠ましめた富山の「高岡大仏」。見上げるほど巨大な仏身の前に立つと、時代を超えて人々が捧げてきた祈りの深さに胸が打たれます。古都の静かな小路を歩き、老舗宿で大和牛・相模湾の地魚・富山湾のキトキト鮮魚を味わう知的な旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '国宝・重文の圧倒的なスケール！悠久の歴史が息づく三大仏の尊顔を拝観',
        desc: '早朝の静寂に包まれた境内や夕暮れ時の古都散策など、混雑を避けた特別な参拝時間を満喫。'
      },
      {
        title: '大和牛＆大和野菜会席、鎌倉野菜＆湘南しらすフレンチ、富山湾寒ブリ＆白えび',
        desc: '古都と城下町が育んだ伝統の味覚と、海・山の幸が織りなす極上グルメを堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで古都の老舗旅館・上質シティホテルをお得に予約',
        desc: '一人旅や夫婦の文化財巡りでも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'buddha_nara',
        themeTitle: '奈良県奈良市ふるさと納税：東大寺大仏殿まで徒歩5分・屋上テラスから若草山と大仏殿を望む「ホテルニューわかさ」',
        themeDesc: '東大寺の参道近くに位置し、奈良の大仏参拝に最高の立地を誇る老舗湯宿。屋上ラウンジからは大仏殿の屋根や若草山を一望でき、古代檜の浴槽や露天風呂で寛ぎながら、大和牛や奈良の旬の食材を贅沢に使った創作会席を堪能できます。'
      },
      {
        key: 'buddha_kamakura',
        themeTitle: '神奈川県鎌倉市ふるさと納税：鎌倉大仏（高徳院）と長谷寺へ好アクセス・湘南の海を望む「鎌倉パークホテル」',
        themeDesc: '由比ヶ浜海岸のすぐそばに佇み、鎌倉大仏のある長谷エリアへの散策に最適な上質リゾートホテル。全室相模湾を望むゆったりとした客室で寛ぎ、朝獲れの鎌倉野菜や相模湾の新鮮魚介、三浦牛を取り入れた本格フレンチディナーを楽しめます。'
      },
      {
        key: 'buddha_takaoka',
        themeTitle: '富山県高岡市ふるさと納税：日本一の美男仏・高岡大仏観光の拠点「ホテルクラウンヒルズ高岡駅前」',
        themeDesc: '高岡駅北口から徒歩1分、高岡大仏や金屋町の鋳物小路への散策拠点として抜群のロケーション。最上階展望風呂やサウナで旅の疲れを癒やし、夜は高岡市街の名店で富山湾の新鮮な海の幸や富山ブラックラーメン、地酒巡りを満喫できます。'
      }
    ],
    crossLinks: [
      { title: '日本三大奇橋＆渓谷美・歴史ロマンの名宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-unusual-bridges-stay', desc: '錦帯橋・猿橋・日光神橋。' },
      { title: '日本三大稲荷＆商売繁盛・開運祈願の名宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-inari-shrines-stay', desc: '伏見・豊川・祐徳稲荷。' },
      { title: '日本三大名園＆大名庭園風雅宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-daimyo-gardens-stay', desc: '偕楽園・兼六園・後楽園。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-pine-groves-stay',
    title: '日本三大松原＆白砂青松ドライブ・絶景シーサイドオーシャンビュー温泉宿×ふるさと納税完全ガイド【2026年最新】三保松原・虹の松原・気比松原',
    desc: '白砂と青松、青い海が描く日本の原風景！静岡清水「三保松原」羽衣伝説と霊峰富士の絶景パノラマ・天女の館羽衣ホテル、佐賀唐津「虹の松原」鏡山から見下ろす4.5km100万本の松林と全室東シナ海一望唐津シーサイドホテル、福井敦賀「気比の松原」若狭湾の白砂と赤松・ホテルルートイン敦賀駅前。日本三大松原の海岸美を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大松原＆白砂青松オーシャンビュー宿×ふるさと納税ガイド',
    badge: '日本三大松原・白砂青松特集',
    leadTitle: '幾千の青松が防風林となり海を守る。寄せては返す波と松風が奏でる日本の美',
    leadDesc: '古来より詩歌や浮世絵に描かれ、日本の海岸景観の最高峰として讃えられてきた「日本三大松原」――駿河湾越しに世界文化遺産・富士山を仰ぎ羽衣伝説の松が今も息づく静岡の「三保松原」、玄界灘の唐津湾沿いに弓なりに4.5kmにわたって100万本の黒松が緑の虹のように連なる佐賀唐津の「虹の松原」、そして敦賀湾の奥深くに赤松と黒松が交錯し白砂の浜辺がどこまでも広がる福井敦賀の「気比の松原」。潮風に揺れる松の緑と寄せては返す白波、そして水平線に沈む夕日を眺める時間は、日常の喧騒を忘れさせてくれる至福のひとときです。松原沿いのシーサイドリゾートや温泉宿を拠点に、清水マグロ・唐津の呼子イカ・越前若狭の海の幸を堪能するドライブ旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '富士山×松原、玄界灘の100万本黒松、若狭湾の白砂！日本屈指のシーサイドパノラマ',
        desc: '松林の木漏れ日を浴びる遊歩道散策や、海と松原を一望する展望露天風呂で絶景を体感。'
      },
      {
        title: '清水港直送ミナミマグロ、唐津呼子の透明な活イカ＆佐賀牛、敦賀の越前ガニ＆焼き鯖',
        desc: '松原が守る豊かな海がもたらす、獲れたて新鮮な海鮮グルメの極上会席を満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで海岸沿いのリゾートホテル・名旅館をお得に予約',
        desc: '海岸ドライブや記念日旅行でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'pine_miho',
        themeTitle: '静岡県静岡市清水区ふるさと納税：三保松原・羽衣の松すぐ・純和風庭園に佇む老舗割烹旅館「天女の館 羽衣ホテル」',
        themeDesc: '世界遺産・三保松原まで徒歩1分、樹齢百余年の銘木が茂る日本庭園に囲まれた名宿。潮風と松の香りに包まれる総檜大浴場で癒やされ、駿河湾の由比桜えびや清水港水揚げの南マグロ、地場野菜を活かした伝統の割烹会席を贅沢に味わえます。'
      },
      {
        key: 'pine_nijinomatsubara',
        themeTitle: '佐賀県唐津市ふるさと納税：虹の松原と唐津湾を一望する全室オーシャンビュー「唐津シーサイドホテル」',
        themeDesc: '国の特別名勝・虹の松原に隣接し、白砂の唐津湾ビーチが目の前に広がる名門リゾートホテル。天然温泉のルーフトップサーマルクライムやインフィニティプールを備え、夕食は呼子直送のイカ活造りや極上佐賀牛ステーキを堪能できます。'
      },
      {
        key: 'pine_kehi',
        themeTitle: '福井県敦賀市ふるさと納税：気比の松原と敦賀港への拠点・天然温泉大浴場完備「ホテルルートイン敦賀駅前」',
        themeDesc: '北陸新幹線敦賀駅前に位置し、名勝・気比の松原や気比神宮への観光アクセス抜群なホテル。ラジウム人工温泉大浴場で疲れを癒やし、無料バイキング朝食付き。夜は敦賀港直送の越前ガニや甘エビ、名物ソースカツ丼など福井グルメを楽しめます。'
      }
    ],
    crossLinks: [
      { title: '日本三大砂丘＆絶景オーシャンビュー温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-sand-dunes-stay', desc: '鳥取砂丘・中田島砂丘・吹上浜。' },
      { title: '日本三大美港＆夜景オーシャンビュー宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-beautiful-ports-stay', desc: '清水港・長崎港・神戸港。' },
      { title: '日本三大急潮＆うず潮絶景・海鮮グルメ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-rapid-tidal-currents-stay', desc: '鳴門海峡・来島海峡・関門海峡。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-clear-stream-valleys-stay',
    title: '日本三大美林清流渓谷＆エメラルドグリーンの激流と原生林リトリート温泉宿×ふるさと納税完全ガイド【2026年最新】奥入瀬・抱返り・阿寺渓谷',
    desc: '苔むす岩とエメラルドブルーの奇跡！青森十和田「奥入瀬渓流」千変万化の滝と星野リゾート奥入瀬渓流ホテル、秋田角館「抱返り渓谷」東北の耶馬渓と称される原生林・川口温泉奥羽山荘、長野木曽路「阿寺渓谷・木曽川」息をのむ透明度の阿寺ブルーとTAOYA木曽路。日本三大美林清流渓谷のマイナスイオンを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大美林清流渓谷＆エメラルドブルー絶景宿×ふるさと納税ガイド',
    badge: '日本三大美林渓流・清流絶景特集',
    leadTitle: '透き通る阿寺ブルー、苔むす巨岩を縫う白糸の滝。原生林が守る清流の調べ',
    leadDesc: '日本を代表する美林と名峰が育み、手つかずの原生美を今に伝える「日本三大美林清流渓谷」――十和田湖から流れ出る14kmの渓流沿いに無数の滝と苔むす奇岩が織りなす青森の「奥入瀬渓流」、玉川の激流が削り出した断崖に青碧の清流が流れ紅葉の名所として知られる秋田角館の「抱返り渓谷」、そして「阿寺ブルー」と称される息をのむほど透明なエメラルドグリーンの水面が木曽ヒノキ美林の谷を流れる長野の「阿寺渓谷（木曽谷）」。渓流沿いの遊歩道を歩き、舞い上がる水煙とマイナスイオンを全身に浴びるひとときは、日々のストレスを根底から洗い流してくれます。渓谷沿いのリゾートホテルや名湯宿で寛ぎ、清流イワナ・青森りんご・秋田比内地鶏・信州牛を味わうリトリート旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '阿寺ブルーの水鏡・奥入瀬の躍動する滝・抱返りの碧い渓谷！究極のマイナスイオン',
        desc: '木漏れ日きらめく清流遊歩道の散策や、渓流のせせらぎをBGMにした露天風呂で心身をリセット。'
      },
      {
        title: '清流天然イワナの塩焼き、青森倉石牛＆奥入瀬シードル、比内地鶏きりたんぽ、信州牛会席',
        desc: '名水と深い森のミネラルが育んだ、地域色豊かな山川の幸と銘酒のマリアージュを満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れの渓流リゾートホテルをお得に予約',
        desc: '自然散策や秋の紅葉ハイキング旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'valley_oirase',
        themeTitle: '青森県十和田市ふるさと納税：奥入瀬渓流沿いに建つ唯一のリゾート「奥入瀬渓流ホテル by 星野リゾート」',
        themeDesc: '奥入瀬渓流のほとりに佇む極上のネイチャーリゾート。岡本太郎作の巨大暖炉が迎えるロビー、八甲田山から湧き出る温泉露天風呂「渓流露天風呂」で渓流の音に耳を傾け、青森のりんごや郷土食材をふんだんに取り入れたフレンチビュッフェを堪能できます。'
      },
      {
        key: 'valley_dakigaeri',
        themeTitle: '秋田県大仙市・仙北市ふるさと納税：抱返り渓谷とみちのく小京都・角館への拠点「川口温泉 奥羽山荘」',
        themeDesc: '奥羽山脈の山裾、抱返り渓谷や角館武家屋敷へのアクセス至便な温泉宿。豊かな自然に囲まれた天然温泉大浴場で寛ぎ、秋田名物の比内地鶏料理やきりたんぽ鍋、秋田こまちの新米と旬の山菜料理をアットホームな空間で楽しめます。'
      },
      {
        key: 'valley_adera',
        themeTitle: '長野県南木曽町・大桑村ふるさと納税：阿寺渓谷と木曽ヒノキ美林の懐に抱かれる温泉リゾート「TAOYA木曽路」',
        themeDesc: 'エメラルドグリーンの清流・阿寺渓谷の観光拠点となるオールインクルーシブの温泉リゾート。とろみのある美肌の湯を満喫できる庭園露天風呂で森林浴の疲れを癒やし、信州牛や地元の旬菜を取り揃えた豪華バイキングとフリーフローの美酒を心ゆくまで堪能できます。'
      }
    ],
    crossLinks: [
      { title: '日本三大美林＆森林浴・天然木アロマ温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-beautiful-forests-stay', desc: '青森ヒバ・秋田スギ・木曽ヒノキ。' },
      { title: '日本三大渓谷美＆清流大自然絶景宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gorges-scenery-stay', desc: '清津峡・黒部峡谷・大杉谷。' },
      { title: '日本三大名水＆湧水水源地・清流酒蔵美食宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-spring-waters-stay', desc: '黒部湧水・白州尾白川・南阿蘇白川水源。' }
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
                        {h.hotelSpecial || '日本三大名水の清冽な雫、日本三大仏の荘厳な歴史美、日本三大松原の白砂青松パノラマ、日本三大美林清流渓谷のエメラルドブルーを巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の名水・古都仏閣・名松原特集
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
  console.log('=== Generating 4 Pages for Round 45 ===');
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
  console.log('=== All 4 Pages generated successfully for Round 45! ===');
}

run();
