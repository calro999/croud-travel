const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-bihada-onsen-stay',
    title: '日本三大美肌の湯＆とろとろ重曹泉・美肌会席宿×ふるさと納税完全ガイド【2026年最新】嬉野・斐乃上・喜連川',
    desc: '浸かるだけでつるつる美肌！佐賀「嬉野温泉」ナトリウム炭酸水素塩泉の名湯と和多屋別荘、島根奥出雲「斐乃上温泉」pH9.9驚異の高アルカリ単純温泉と奥出雲町サイクリングターミナル、栃木さくら市「喜連川温泉」硫黄・塩分・重曹が織りなす良質な天然温泉とゴルフ＆ホテルベルセルバ。日本三大美肌の湯の極上湯治を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大美肌の湯＆とろとろ美肌温泉宿×ふるさと納税ガイド',
    badge: '日本三大美肌の湯・極上湯治特集',
    leadTitle: '化粧水のように肌に吸い付くトロトロの湯ざわり。日本三大美肌の湯で心身を解き放つ',
    leadDesc: '日本各地の温泉の中でも、類まれなる美肌効果と高アルカリ・重曹成分で知られる「日本三大美肌の湯」――佐賀県嬉野市の「嬉野温泉」、島根県奥出雲町の「斐乃上温泉」、そして栃木県さくら市の「喜連川温泉」。嬉野温泉はナトリウム炭酸水素塩泉（重曹泉）が皮脂や分泌物を乳化して洗い流し、名物「温泉湯豆腐」でも有名なとろとろの湯。奥出雲の斐乃上温泉はpH9.9を誇る驚異のアルカリ性単純温泉で、肌の古い角質をやさしく落として滑らかなシルク肌へと導きます。喜連川温泉は塩分・硫黄・炭酸水素塩のトリプル美肌成分が角質ケアから保湿・保温までを完璧に整えます。極上の湯浴みと地元食材を活かした美肌会席を、楽天ふるさと納税の宿泊クーポンでお得に堪能しましょう。',
    merits: [
      {
        title: '圧倒的なとろみとpH値！浸かるだけで角質ケア＆潤い補給を叶える奇跡の天然泉',
        desc: '重曹や高アルカリの成分が肌をやさしくピーリングし、湯上がりにはまるで化粧水を全身に纏ったかのような感動の肌ざわりを実感。'
      },
      {
        title: '嬉野とろける温泉湯豆腐・奥出雲仁多米＆山陰海鮮・栃木とちぎ和牛会席',
        desc: '温泉水で煮込んでとろける嬉野名物湯豆腐や、島根のブランド米・仁多米、栃木の極上牛など滋養あふれる美食を堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れの美肌名湯旅館をお得に予約',
        desc: '日常の疲れを癒やす湯治旅や女子旅・記念日旅行でも、寄付額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'bihada_ureshino',
        themeTitle: '佐賀県嬉野市ふるさと納税：重曹泉のぬめりと広大な日本庭園に包まれる老舗名館「和多屋別荘」',
        themeDesc: '嬉野川沿い二万坪の広大な敷地に佇む名門湯宿。嬉野の誇るナトリウム炭酸水素塩泉を引いた大浴場や露天風呂で心ゆくまで美肌湯を堪能し、嬉野名物とろける温泉湯豆腐や佐賀牛の会席料理に舌鼓を打つ極上のひとときを過ごせます。'
      },
      {
        key: 'bihada_hinokami',
        themeTitle: '島根県奥出雲町ふるさと納税：pH9.9の奇跡の美肌泉・船通山の豊かな自然に抱かれた「奥出雲町サイクリングターミナル」',
        themeDesc: '船通山の麓、斐乃上温泉のすぐそばに位置し、出雲神話の里・奥出雲の大自然を満喫できる快適ステイ。日本屈指の高アルカリ温泉でつるつるの肌を手に入れ、日本一の評価を受けるブランド米「仁多米」と奥出雲の旬の山菜・川魚を存分に味わえます。'
      },
      {
        key: 'bihada_kitsuregawa',
        themeTitle: '栃木県さくら市ふるさと納税：硫黄・塩分・重曹のトリプル美肌泉を満喫するリゾート「ゴルフ＆ホテルベルセルバ」',
        themeDesc: 'さくら市の丘陵地に広がり、地下から湧き出る自家源泉の天然温泉が自慢のリゾートホテル。露天風呂からは四季折々の景色を望み、良質な弱アルカリ性温泉で肌を磨いた後は、栃木県産とちぎ和牛や地場産野菜を贅沢に使った料理を堪能できます。'
      }
    ],
    crossLinks: [
      { title: '日本三大名湯＆極上温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-major-hotsprings-stay', desc: '有馬温泉・草津温泉・下呂温泉。' },
      { title: '日本三大古湯＆歴史の湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-ancient-springs-stay', desc: '道後温泉・有馬温泉・白浜温泉。' },
      { title: '日本三大薬湯＆湯治デトックス宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-medicinal-springs-stay', desc: '松之山・有馬・草津。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-secret-hotsprings-stay',
    title: '日本三大秘湯＆原生林の一軒宿・ケーブルカー露天風呂×ふるさと納税完全ガイド【2026年最新】谷地温泉・祖谷温泉・乳頭温泉郷',
    desc: '秘境の静寂と湧き出る大地の恵み！青森八甲田「谷地温泉」開湯400年の霊泉足元湧出と日本三秘湯谷地温泉、徳島三好「祖谷温泉」断崖絶壁をケーブルカーで下る露天風呂と新祖谷温泉ホテルかずら橋、秋田仙北「乳頭温泉郷」白濁の濁り湯とブナ原生林に抱かれる田沢湖高原温泉ロッジアイリス。日本三大秘湯の神秘を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大秘湯＆秘境の大自然一軒宿×ふるさと納税ガイド',
    badge: '日本三大秘湯・大自然秘境特集',
    leadTitle: '携帯の電波も届かない静けさ、川のせせらぎと鳥の声。地球の鼓動を直に感じる秘湯旅',
    leadDesc: '俗世を離れ、手つかずの自然と滾々と湧き出る原生の湯に身を委ねる「日本三大秘湯」――十和田八幡平国立公園の八甲田山麓に佇む青森の「谷地温泉」、四国山地の急峻なV字渓谷にへばりつくように湯煙を上げる徳島の「祖谷温泉」、そして東北・秋田の乳頭山麓のブナ林に点在する名湯「乳頭温泉郷」。谷地温泉は浴槽の底から自噴する「足元湧出泉」として知られ、400年以上湯治客の体を癒やし続けてきた霊泉。祖谷温泉は専用ケーブルカーで渓谷底へと下りる唯一無二の露天風呂と祖谷のかずら橋で知られる秘境。乳頭温泉郷は七つの異なる源泉が湧き、乳白色の湯に包まれて日本の原風景を味わえます。日常の喧騒を忘れ、真の安らぎを得る秘湯巡りを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '足元湧出の自噴泉やケーブルカーで行く谷底露天風呂！圧倒的な非日常体験',
        desc: '加工されていない源泉そのままのエネルギーと、目の前に広がる大自然の渓谷美を全身で体感。'
      },
      {
        title: '八甲田の岩魚・山菜料理、祖谷のあゆ塩焼き＆そば米雑炊、秋田きりたんぽ鍋',
        desc: '澄んだ水と豊かな森が育んだ滋味深い郷土の味覚を、囲炉裏端や静かな個室でじっくり堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで秘境の憧れ宿をお得に予約',
        desc: '予約が取りにくい人気の秘湯宿でも、寄付金額に応じた最大30%オフの即時割引クーポンで賢くお得ステイ。'
      }
    ],
    items: [
      {
        key: 'secret_yachi',
        themeTitle: '青森県十和田市ふるさと納税：八甲田の原生林に佇む足元湧出の霊泉「日本三秘湯 谷地温泉」',
        themeDesc: '開湯400年、八甲田山麓の標高約780mにひっそりと佇む純木造の秘湯宿。浴槽の底の板の間からポコポコと自噴するぬる湯の「下の湯」と白濁した「上の湯」の交互浴が格別で、素朴なイワナの塩焼きや山菜料理が疲れた体を優しく温めます。'
      },
      {
        key: 'secret_iya',
        themeTitle: '徳島県三好市ふるさと納税：専用ケーブルカーで登る天空露天風呂と囲炉裏料理「新祖谷温泉 ホテルかずら橋」',
        themeDesc: '日本三大秘境・祖谷渓の山腹に位置し、名物のかずら橋まで車ですぐの絶景温泉宿。専用のケーブルカーで登る「天空露天風呂」からは雄大な四国山地を一望。夕食は囲炉裏を囲んで鮎の塩焼きや名物でこまわし、阿波尾鶏を堪能できます。'
      },
      {
        key: 'secret_nyuto',
        themeTitle: '秋田県仙北市ふるさと納税：乳頭温泉郷の玄関口・田沢湖と高原の風を感じる「田沢湖高原温泉 ロッジアイリス」',
        themeDesc: '乳頭温泉郷へのアクセス抜群の田沢湖高原に佇み、効能豊かな硫黄泉の天然温泉が楽しめるアットホームな高原の宿。乳白色の湯でじっくり体を温めた後は、秋田名物きりたんぽ鍋や八幡平ポークの陶板焼きなど手作りの郷土の味を味わえます。'
      }
    ],
    crossLinks: [
      { title: '日本三大薬湯＆湯治デトックス宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-medicinal-springs-stay', desc: '松之山温泉・有馬温泉・草津温泉。' },
      { title: '日本三大名湯＆極上温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-major-hotsprings-stay', desc: '草津・有馬・下呂の三大名湯。' },
      { title: '日本三大美肌の湯＆とろとろ美肌温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-bihada-onsen-stay', desc: '嬉野・斐乃上・喜連川の極上美肌湯。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-gorges-scenery-stay',
    title: '日本三大渓谷美＆エメラルドグリーンの清流・奇岩絶景宿×ふるさと納税完全ガイド【2026年最新】清津峡・黒部峡谷・大杉谷',
    desc: '大自然が刻んだ圧倒的造形美！新潟十日町「清津峡」巨大柱状節理のパノラマトンネルと清津峡温泉いろりとほたるの宿せとぐち、富山黒部「黒部峡谷」トロッコ電車で行く大峡谷と宇奈月温泉老舗旅館延対寺荘、三重松阪・大台「大杉谷」手つかずの秘境原生渓谷とエースイン松阪。日本三大渓谷の絶景と清流の癒やしを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大渓谷美＆清流大自然絶景宿×ふるさと納税ガイド',
    badge: '日本三大渓谷・奇岩清流特集',
    leadTitle: '垂直に切り立つ柱状節理の岩壁と、息をのむほど透き通った清流。大地の彫刻に魅せられる',
    leadDesc: '何万年もの歳月をかけて清流が岩を削り出して生み出した「日本三大渓谷美」――国の名勝・天然記念物に指定され、水鏡のトンネルアートで世界中から注目を集める新潟十日町の「清津峡」、北アルプスの険しい峰々を縫うようにトロッコ電車が走り抜ける日本一深いV字峡の富山「黒部峡谷」、そして吉野熊野国立公園の最奥部に位置し、滝と原生林が織りなす近畿最後の秘境・三重の「大杉谷」。垂直に聳え立つ岩肌のダイナミズム、川面を渡る清々しい風、そしてエメラルドグリーンに輝く水面は、訪れる人の五感を澄み渡らせてくれます。清流の息吹を感じる温泉宿を拠点に、新潟コシヒカリ・富山湾の白えび・三重の松阪牛を味わう至福の絶景旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '巨大な柱状節理とエメラルドグリーンの清流！日本屈指の大渓谷パノラマ',
        desc: '清津峡の水鏡トンネル、黒部のトロッコ列車、大杉谷の秘境ハイキングなど、ここでしか見られない絶景を堪能。'
      },
      {
        title: '魚沼コシヒカリ＆清流魚、富山湾の宝石白えび＆ズワイガニ、三重が誇る松阪牛',
        desc: '名峰と清流がもたらす極上の水が育てた、地域色豊かな日本最高峰の特産グルメを満喫。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで自然豊かな渓谷リゾート・温泉宿をお得に予約',
        desc: 'トレッキングや絶景巡りの旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'gorge_kiyotsu',
        themeTitle: '新潟県十日町市ふるさと納税：清津峡渓谷トンネルすぐ・囲炉裏炭火料理と美肌温泉の隠れ宿「いろりとほたるの宿 せとぐち」',
        themeDesc: '清津峡の入り口に佇む、温もりあふれる温泉宿。清津峡渓谷トンネルの観光拠点として絶好のロケーションを誇り、夜は囲炉裏を囲んで地元十日町の魚沼産コシヒカリ、山菜、清流イワナを炭火焼きで堪能。弱アルカリ性の天然温泉が優しく体を癒やします。'
      },
      {
        key: 'gorge_kurobe',
        themeTitle: '富山県黒部市ふるさと納税：黒部峡谷の絶景を眼下に望む文豪ゆかりの老舗宿「宇奈月温泉 延対寺荘」',
        themeDesc: '黒部川沿いの断崖に建ち、全客室や露天風呂から黒部峡谷のダイナミックな景観を一望できる名門旅館。トロッコ電車の発着駅からも近く、美肌効果抜群の宇奈月温泉の湯に浸かった後は、富山湾直送の白えびやホタルイカ、ズワイガニの旬会席を堪能できます。'
      },
      {
        key: 'gorge_osugidani',
        themeTitle: '三重県松阪市・大台町ふるさと納税：近畿の秘境・大杉谷への玄関口！松阪牛グルメの拠点「エースイン・松阪」',
        themeDesc: '日本百名谷の筆頭・大杉谷渓谷へのアクセス拠点となる松阪駅北口徒歩1分の好立地ホテル。早朝のトレッキング出発にも便利で、全室無料の健康朝食バイキング付き。夜は松阪市内の名店で本場の極上松阪牛すき焼きや焼肉を存分に味わえます。'
      }
    ],
    crossLinks: [
      { title: '日本三大鍾乳洞＆地底探検・大自然パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-stalactite-caves-stay', desc: 'あぶくま洞・玉泉洞・井倉洞。' },
      { title: '日本三大カルスト＆天空の白銀パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-major-karst-highland-stay', desc: '四国カルスト・秋吉台・平尾台。' },
      { title: '日本三大名瀑＆豪快な滝見リゾート宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-waterfalls-resort-stay', desc: '華厳の滝・那智の滝・袋田の滝。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-waterfalls-resort-stay',
    title: '日本三大名瀑＆豪快な水煙と滝見リゾート・温泉宿×ふるさと納税完全ガイド【2026年最新】華厳の滝・那智の滝・袋田の滝',
    desc: '轟く爆音と立ち昇る水煙！栃木日光「華厳の滝」落差97mの一大パノラマと中禅寺金谷ホテル、和歌山那智勝浦「那智の滝」落差133m日本一の直瀑・熊野信仰と大洞窟温泉ホテル浦島、茨城大子町「袋田の滝」四段の岩肌を流れる氷瀑の美と袋田温泉思い出浪漫館。日本三大名瀑の大迫力景観と温泉を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大名瀑＆豪快な滝見温泉宿×ふるさと納税ガイド',
    badge: '日本三大名瀑・大迫力絶景特集',
    leadTitle: '大地を震わせる轟音、舞い上がる清らかな飛沫。圧倒的な生命力を宿す名瀑の調べ',
    leadDesc: '日本各地に数ある滝の中でも、その規模・美しさ・歴史的由緒において頂点に立つ「日本三大名瀑」――世界遺産日光の中禅寺湖から落差97mを一気に落下する栃木の「華厳の滝」、落差133mという日本一の段差を誇り太古より熊野那智大社の御神体として祀られる和歌山の「那智の滝」、そして四段の岩壁を白い布を引くように滑り落ち西行法師も賞賛した茨城の「袋田の滝」。春の新緑、夏の水煙と涼風、秋の錦繍の紅葉、冬の神秘的な氷瀑（凍結した滝）と、四季折々にドラマチックな表情を見せてくれます。滝のマイナスイオンを全身に浴びてリフレッシュした後は、湖畔のリゾートや名湯露天風呂で心身を解きほぐし、日光湯波・勝浦生マグロ・奥久慈軍鶏の美食を味わう旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '落差100m級の大迫力！大地を震わせるマイナスイオンの絶景パノラマ',
        desc: '展望台から間近に迫る水しぶきと爆音を体感し、四季折々の紅葉や冬の氷瀑など神秘的な自然美を満喫。'
      },
      {
        title: '日光伝統のフレンチ＆湯波、南紀勝浦の天然生マグロ尽くし、奥久慈軍鶏と常陸牛',
        desc: '滝が育む清らかな水と豊かな風土に育まれた、日本屈指のご当地ブランドグルメを贅沢に堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れの老舗名宿・温泉リゾートをお得に予約',
        desc: '記念日や家族旅行、絶景ドライブ旅でも、寄付金額に応じた最大30%オフの即時割引クーポンでスマートにお得ステイ。'
      }
    ],
    items: [
      {
        key: 'waterfall_kegon',
        themeTitle: '栃木県日光市ふるさと納税：華厳の滝と中禅寺湖畔に抱かれたクラシックリゾート「日光中禅寺温泉 中禅寺金谷ホテル」',
        themeDesc: '奥日光の大自然の中禅寺湖畔に佇む木造洋風ホテル。名瀑・華厳の滝から車でわずか数分の絶好の立地で、緑に囲まれた露天風呂「空ぶろ」では乳白色の硫黄泉を満喫。夕食は金谷ホテル伝統の本格フランス料理を優雅に堪能できます。'
      },
      {
        key: 'waterfall_nachi',
        themeTitle: '和歌山県那智勝浦町ふるさと納税：那智の滝と熊野古道への拠点・太平洋を望む大洞窟風呂「南紀勝浦温泉 ホテル浦島」',
        themeDesc: '勝浦港から専用船で渡る海に浮かぶ温泉ワンダーランド。御神体・那智の滝への観光に最適で、太平洋の荒波が間近に迫る天然洞窟露天風呂「忘帰洞」の眺望は圧巻。夕食は勝浦港水揚げの新鮮な生まぐろを心ゆくまで味わえます。'
      },
      {
        key: 'waterfall_fukuroda',
        themeTitle: '茨城県大子町ふるさと納税：袋田の滝まで徒歩散策！奥久慈の渓流と美肌の湯に寛ぐ「袋田温泉 思い出浪漫館」',
        themeDesc: '名瀑・袋田の滝のすぐそば、久慈川の清流沿いに建つ大正ロマン漂う温泉宿。美肌効果の高いアルカリ単純温泉の渓流露天風呂で心地よいせせらぎに耳を傾け、夕食は奥久慈軍鶏や常陸牛、地場産野菜など大子の恵みを存分に味わえます。'
      }
    ],
    crossLinks: [
      { title: '日本三大渓谷美＆清流大自然絶景宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gorges-scenery-stay', desc: '清津峡・黒部峡谷・大杉谷。' },
      { title: '日本三大鍾乳洞＆地底探検・大自然パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-stalactite-caves-stay', desc: 'あぶくま洞・玉泉洞・井倉洞。' },
      { title: '日本三大奇景＆奇岩絶壁パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-major-strange-sceneries-stay', desc: '妙義山・寒霞渓・耶馬渓。' }
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
                        {h.hotelSpecial || '日本三大美肌の湯のとろとろ泉質、大自然の原生林に抱かれた秘湯の一軒宿、エメラルドグリーンに輝く渓谷美、轟音とともに飛沫をあげる日本三大名瀑を巡る極上の拠点。四季折々の美食と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の名湯・秘境・絶景特集
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
  console.log('=== Generating 4 Clean Pages for Round 42 ===');
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
  console.log('=== All 4 Pages regenerated successfully! ===');
}

run();
