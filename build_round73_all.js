const fs = require('fs');
const path = require('path');

const seasonalHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

// 4記事の詳細データ定義 (Round 73)
const articleConfigs = [
  {
    slug: 'furusato-tax-private-room-open-air-bath-luxury-stay',
    componentName: 'FurusatoPrivateRoomOpenAirStayPage',
    tag: '客室露天風呂付き客室＆極上プライベート温泉宿特集',
    title: '客室露天風呂付き客室で過ごす大人のプライベート温泉ステイ名旅館×ふるさと納税完全ガイド【2026年最新】修善寺・箱根・京都嵐山',
    metaTitle: '客室露天風呂付き客室で過ごす大人のプライベート温泉ステイ名旅館×ふるさと納税完全ガイド【2026年最新】修善寺・箱根・京都嵐山',
    shortTitle: '客室露天風呂付き大人のプライベート温泉宿特集',
    description: '好きな時に好きなだけ名湯に浸かる至福の時間！一万五千坪の日本庭園と緑に包まれる露天風呂付き客室を誇る伊豆の隠れ宿「修善寺温泉 宙 SORA 渡月荘金龍」、自家源泉を全室の専用露天風呂に掛け流し竹取物語の世界観を体現した「箱根 金乃竹 塔ノ澤」、保津川を望むプライベート露天風呂と最高峰の京懐石フレンチが評判の「翠嵐 ラグジュアリーコレクションホテル 京都」。誰にも邪魔されないおこもり滞在を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '客室露天風呂付き客室＆極上プライベート温泉宿特集',
    leadTitle: 'ドアを開ければ、そこは自分たちだけの湯処。湯けむりと自然の息吹に包まれる究極のおこもり時間へ',
    leadText: '誰にも気兼ねすることなく、朝陽の差し込む清々しい早朝も、月明かりが揺れる静寂の深夜も、部屋の扉を開けるだけでいつでも温泉に身を委ねられる贅沢――それが「客室露天風呂付き客室」の最大の魅力です。大浴場のような混雑や入浴時間を気にする必要が一切なく、自分たちのペースで心身を完全に解放できるプライベートな空間は、記念日やご褒美旅行、大切な人との語らいにこの上ない癒やしをもたらしてくれます。伊豆最古の温泉地・修善寺で一万五千坪もの壮大な日本庭園を借景に露天風呂付き客室を備える「宙 SORA 渡月荘金龍」、箱根の深い渓谷に佇み自家源泉かけ流しの露天風呂と幻想的な竹林空間で大人のおこもり旅を演出する「金乃竹 塔ノ澤」、そして京都・嵐山の保津川ほとりに建ち、専用の天然温泉露天風呂と世界最高峰の洗練されたおもてなしを誇る「翠嵐 ラグジュアリーコレクションホテル 京都」。通常は高価格帯となる憧れの露天風呂付き客室も、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用すれば、実質自己負担2,000円で驚くほどお得に滞在可能です。何もしない贅沢を味わう、極上のプライベート温泉旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '24時間いつでも好きな時に独占！移動ゼロで何度でも楽しめる専用露天風呂',
        body: '目が覚めてすぐに朝靄の中でひと風呂、夕暮れに茜色の空を眺めながら乾杯、星空の下で心ゆくまで長湯。自分たちだけの露天風呂だからこそ、湯浴みの回数や時間帯も自由自在。日常の緊張が芯からほどけていく贅沢を実感できます。'
      },
      {
        num: '02',
        title: '他のお客様と会わずに寛げる完全プライベートな動線と贅沢なテラス空間',
        body: '客室に専用の露天風呂とデイベッドやデッキチェアを備えたテラスが直結。湯上がりには心地よい風に吹かれながらプライベートな読書やドリンクを楽しめ、静寂と安心感に包まれた非日常の寛ぎが約束されます。'
      },
      {
        num: '03',
        title: '記念日やプロポーズ、ご夫婦の節目にふさわしい最高峰のおもてなしと美食会席',
        body: '専任スタッフによるきめ細やかなサービス、伊豆の金目鯛や伊勢海老、京都の伝統京懐石など、各地の最高級食材を贅を尽くして仕上げた会席料理。大切な人と過ごす特別なひとときを生涯忘れられない思い出へと昇華させます。'
      }
    ],
    hotelDetails: [
      {
        key: 'izu_room_bath',
        badge: '静岡県伊豆市・一万五千坪の日本庭園を望む客室露天風呂と修善寺の名湯',
        rank: '厳選名宿 第1選',
        desc: '伊豆最古の歴史を誇る修善寺温泉の高台に位置し、一万五千坪に及ぶ広大な日本庭園の四季折々の美景を抱く名門温泉旅館。客室のウッドデッキに配された専用露天風呂からは、春の山桜、初夏の新緑、秋の紅葉など、移ろいゆく伊豆の自然を独り占めしながら無色透明のまろやかな名湯を堪能できます。館内にはデザイナーが手掛けた円形の幻想的な露天風呂や光のラウンジ、修善寺の竹林を望む散策路も完備。駿河湾の新鮮な地魚や伊豆牛を贅沢に盛り込んだ月替わりの創作会席とともに、極上のリトリート時間を約束してくれます。'
      },
      {
        key: 'hakone_room_bath',
        badge: '神奈川県箱根町・竹取物語の世界観を体現した全室自家源泉露天風呂付きの大人の隠れ家',
        rank: '厳選名宿 第2選',
        desc: '箱根の塔ノ澤の豊かな森に抱かれ、専用の吊り橋を渡ってアプローチする静寂に包まれた大人のための隠れ宿。「竹取物語」をデザインコンセプトに創られた館内は、水盤に浮かぶバーラウンジや幻想的な竹林が広がる非日常の世界。全客室のテラスに自家源泉かけ流しの天然温泉露天風呂を備え、肌に優しく吸い付くようなアルカリ性単純温泉にいつでも浸かることができます。厳選された京都の食材と旬の味覚を融合させた本格京懐石を堪能し、日常の喧騒から完全に隔絶された静謐な大人の贅沢を満喫できます。'
      },
      {
        key: 'arashiyama_room_bath',
        badge: '京都府京都市・嵐山保津川の特等席！プライベート天然温泉付き客室と最高峰ラグジュアリー',
        rank: '厳選名宿 第3選',
        desc: '平安貴族の避暑地として栄えた京都・嵐山、大堰川（保津川）のほとりに佇み、歴史的建造物と現代ラグジュアリーが調和する世界的ホテルブランドの名宿。プライベート露天風呂付き客室「柚葉」などでは、嵐山温泉の肌触り豊かな天然温泉を部屋の専用湯船に湛え、中庭の緑を眺めながら至福の湯浴みが叶います。歴史ある延命閣での伝統的な京会席とフレンチが融合したディナー、川沿いのカフェ「茶寮 八翠」でのシャンパンディライトなど、古都の雅と世界最高水準のホスピタリティが融合した至高の京都ステイを体験できます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-anniversary-luxury-suite-villa-stay', title: '【記念日・スイートヴィラ×ふるさと納税】一棟貸切と絶景露天の特別ステイ' },
      { slug: 'furusato-tax-private-villa-hanare-hideaway-stay', title: '【大人の隠れ家・離れ客室×ふるさと納税】静寂とプライベート重視の名宿' },
      { slug: 'furusato-tax-luxury-hotspring-ryokan-stay', title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド' },
      { slug: 'furusato-tax-onsen-couple-private-luxury-stay', title: '【夫婦・カップル温泉旅行×ふるさと納税】貸切風呂と極上ステイ完全ガイド' }
    ]
  },
  {
    slug: 'furusato-tax-room-dining-heya-shoku-luxury-kaiseki-stay',
    componentName: 'FurusatoRoomDiningHeyaShokuStayPage',
    tag: '贅沢部屋食・老舗旅館会席料理宿特集',
    title: 'お部屋食でゆったり寛ぐ極上会席料理＆老舗名門温泉旅館×ふるさと納税完全ガイド【2026年最新】城崎・有馬・草津',
    metaTitle: 'お部屋食でゆったり寛ぐ極上会席料理＆老舗名門温泉旅館×ふるさと納税完全ガイド【2026年最新】城崎・有馬・草津',
    shortTitle: '極上部屋食会席＆老舗温泉旅館特集',
    description: '周囲を気にせず自分たちのプライベート空間で伝統の本格会席を味わう至福！創業百六十年の数寄屋建築と老舗の部屋食会席が名高い城崎温泉の最高峰「西村屋本館」、日本三古湯・有馬の金泉と伝統の美味を部屋で堪能する「兵衛向陽閣」、湯守が磨き上げる名湯・白旗源泉と熟練仲居の丁寧なおもてなしを誇る草津温泉「奈良屋」。移動なしの部屋食と掛け流し名湯を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '贅沢部屋食・老舗旅館会席料理宿特集',
    leadTitle: '浴衣姿のまま、畳の上でいただく温かな一椀。仲居さんの心尽くしのおもてなしと至高の美食に酔いしれる夜へ',
    leadText: '日本の旅館文化が誇る最高峰の贅沢のひとつ「部屋食（お部屋食会席）」。食事処やレストランへ移動する必要がなく、温泉上がりの浴衣姿のまま、寛ぎ慣れた自分たちの客室で出来立ての料理を一品一品ゆったりと味わう時間は、格別の安らぎをもたらしてくれます。小さな子ども連れのファミリーも周囲に気兼ねすることなく団欒を楽しめ、ご年配の方や記念日を祝うカップルにとっても、誰にも邪魔されない至極のプライベート空間が約束されます。文豪・志賀直哉ゆかりの城崎温泉で百六十年の歴史を刻み、日本庭園を望む数寄屋造りの客室で但馬牛や松葉蟹の部屋食会席を振る舞う「西村屋本館」、創業七百年・有馬温泉の老舗として良質な金泉と匠の技が光る部屋食会席を誇る「兵衛向陽閣」、そして湯畑のすぐそばに佇み、草津最古の白旗源泉を湯守が手入れした極上の湯と旬の味覚を部屋食で届ける「奈良屋」。熟練の仲居さんによる温かなおもてなしが息づく部屋食の名旅館を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を使って実質2,000円で賢く予約し、日本の粋を味わう贅沢な温泉旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '移動ゼロ＆浴衣姿の完全プライベート空間！周りを気にせず会話とお酒を楽しむ贅沢',
        body: 'お風呂上がりのリラックスした状態のまま、畳の香る落ち着いた客室で食事をスタート。小さなお子様がぐずっても、お酒が進んで会話が弾んでも、周囲の目を気にすることなく自分たちのペースで贅沢な夕餉を満喫できます。'
      },
      {
        num: '02',
        title: 'できたてを一品ずつ運ぶ仲居さんのプロの技！絶妙なタイミングで供される会席',
        body: '先付、お造り、焼物、煮物、揚物、ご飯ものまで、熟練の仲居さんがお客様の食べるペースを見計らいながら最適な温度で一品ずつ配膳。料理の説明や土地の歴史を聞きながらいただく時間は、旅館ならではの温かな醍醐味です。'
      },
      {
        num: '03',
        title: '但馬牛、神戸牛、上州牛！各地の最高級ブランド牛や日本海の海の幸を堪能',
        body: '城崎の但馬牛や旬の地魚、有馬の神戸牛の鉄板焼きや小鍋仕立て、草津の上州牛すき焼きなど、厳選された特産品を部屋の中でじっくりと堪能。プライベートな空間だからこそ、素材本来の香りと旨味に心ゆくまで浸れます。'
      }
    ],
    hotelDetails: [
      {
        key: 'kinosaki_heya_shoku',
        badge: '兵庫県豊岡市・創業百六十年！数寄屋造りの美と庭園を望む老舗中の老舗部屋食旅館',
        rank: '厳選名宿 第1選',
        desc: '城崎温泉のシンボルとして百六十余年の歴史を誇り、国の登録有形文化財にも選ばれる日本屈指の名門旅館。丹精込めて手入れされた広大な日本庭園を取り囲むように配された数寄屋造りの客室で、伝統の部屋食会席を堪能できます。冬は幻の松葉蟹、四季を通じて神戸ビーフの素牛である但馬牛や日本海の鮮魚をふんだんに使用し、専任の仲居さんが一品ずつ心を込めて配膳。歴史の重みを感じる美しい和の空間で名湯・城崎の湯に浸かり、日本旅館のおもてなしの神髄を体感できます。'
      },
      {
        key: 'arimaya_heya_shoku',
        badge: '兵庫県神戸市・創業七百年！有馬温泉を代表する名門で金泉と老舗の部屋食会席を満喫',
        rank: '厳選名宿 第2選',
        desc: '太閤秀吉から「兵衛」の名を授かったと伝えられる、有馬温泉随一の歴史と規模を誇る老舗名門宿。三つの異なる大浴場で有馬名物の赤茶色の濃厚な「金泉」を巡ることができ、広々とした和室での贅沢な部屋食プランが大好評です。夕食には神戸牛や瀬戸内の海の幸、季節の旬菜を熟練の和食料理人が丁寧に仕立てた会席料理が並び、自分たちのプライベートな空間でゆっくりとお酒とともに味わえます。細やかな気配りの行き届いたおもてなしで、三世代家族や長寿の祝い旅にも絶大な信頼を集めています。'
      },
      {
        key: 'kusatsu_heya_shoku',
        badge: '群馬県草津町・湯畑すぐ！専任の湯守が守る名湯白旗源泉と静寂の客室で味わう月替わり部屋食',
        rank: '厳選名宿 第3選',
        desc: '草津温泉のシンボル「湯畑」から徒歩約1分、明治十年創業の伝統と大正ロマンの風情を残す格式高い温泉旅館。宿の最大の誇りは、草津でも最も貴重とされる源泉「白旗の湯」を、専門の職人「湯守」が一晩中手作業で湯守りして適温に整えた極上の湯殿。湯上がりには、趣ある純和風客室で板前が腕を振るう月替わりの本格会席料理を部屋食で堪能できます。上州牛の石焼きや地元の山の恵みを取り入れた滋味あふれる料理と、名湯の力強い温もりが心身の奥深くまで染み渡ります。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-luxury-hotspring-ryokan-stay', title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド' },
      { slug: 'furusato-tax-three-generation-family-luxury-stay', title: '【三世代ファミリー家族旅行×ふるさと納税】部屋食・貸切風呂のある名宿' },
      { slug: 'furusato-tax-kanreki-celebration-oyakoukou-onsen-stay', title: '【還暦祝い＆親孝行温泉旅×ふるさと納税】感謝を届けるおもてなし名旅館' },
      { slug: 'furusato-tax-traditional-kamado-rice-irori-stay', title: '【かまど炊きご飯＆囲炉裏料理宿×ふるさと納税】里山の伝統美味と温泉' }
    ]
  },
  {
    slug: 'furusato-tax-firefly-viewing-hotaru-night-stream-stay',
    componentName: 'FurusatoFireflyViewingStayPage',
    tag: '清流ホタル観賞＆初夏の温泉リトリート宿特集',
    title: '闇夜に舞う無数の光の幻想！初夏のホタル観賞＆清流のせせらぎ温泉宿×ふるさと納税完全ガイド【2026年最新】熊本菊池・兵庫神鍋・神奈川湯河原',
    metaTitle: '闇夜に舞う無数の光の幻想！初夏のホタル観賞＆清流のせせらぎ温泉宿×ふるさと納税完全ガイド【2026年最新】熊本菊池・兵庫神鍋・神奈川湯河原',
    shortTitle: '初夏のホタル観賞＆清流温泉宿特集',
    description: '澄み切った清流にだけ舞う初夏の光の芸術「ホタル（蛍）」。幻想的なホタルの乱舞を愛でる初夏の温泉旅を厳選！菊池渓谷の清流と名湯美肌の湯を誇る熊本県「菊池温泉 清流荘」、神鍋高原の清らかな渓流沿いにホタルが飛び交う兵庫県「ブルーリッジホテル」、千歳川のせせらぎと万葉公園ほたるの宴が間近の神奈川県「湯河原温泉 万葉の里 白雲荘」。闇夜を照らす淡い光と川音に癒やされる特別な旅を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '清流ホタル観賞＆初夏の温泉リトリート宿特集',
    leadTitle: '初夏の夜、静まり返る小川のほとり。暗闇の中にふわりと灯る、淡く優しい命の瞬きに出逢う旅へ',
    leadText: '初夏（5月下旬〜6月下旬）のわずか数週間だけ、水清らかな渓流沿いで見られる奇跡の風物詩「ホタル（ゲンジボタル・ヘイケボタル）の乱舞」。都市部では決して見ることのできなくなった無数の光の筋が、水辺の草むらや夜空に優雅に舞い上がる光景は、息を呑むほど幻想的でノスタルジックな感動を呼び起こします。名水百選に輝く菊池渓谷から清らかな水が流れ込み、宿の目の前の川辺でホタルを鑑賞できる熊本県・菊池温泉の「木立ちの中の宿 清流荘」、神鍋高原の雄大な自然に囲まれ清流沿いのホタル散策と高原温泉リゾートを満喫できる兵庫県の「神鍋温泉 ブルーリッジホテル」、そして万葉集の時代から愛される湯河原温泉で、千歳川のせせらぎに耳を澄まし「万葉公園 ほたるの宴」へ徒歩で出かけられる名宿「万葉の里 白雲荘」。夜には幻想的なホタル鑑賞ツアーや夜風の散策を楽しみ、美肌の天然温泉と旬の初夏会席を味わう時間は、心洗われる最高のリフレッシュとなります。大人気の初夏限定ホタル観賞ステイを、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を使って実質2,000円負担で賢く予約し、光のアートに包まれる旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '限られた初夏のわずかな期間だけ！大自然の清流が残る地域でのみ出逢える奇跡の光景',
        body: '農薬や生活排水のない美しい清流と苔むした岩場でのみ命を繋ぐホタル。手が届きそうなほど近くをふわりと漂う淡い黄緑色の光は、人工のイルミネーションとは全く異なる神秘的な温もりで心を癒やしてくれます。'
      },
      {
        num: '02',
        title: '宿主催のホタル観賞ナイトツアーや無料送迎で、穴場の鑑賞スポットへ安全にご案内',
        body: 'ホタルが見頃を迎える時期には、宿スタッフが熟知する秘密の群生地への送迎バスやガイド付きナイトツアーが実施されることも。暗い夜道でも安心して最高の観賞ポイントで幻想的な夕べを体験できます。'
      },
      {
        num: '03',
        title: '川のせせらぎを聴きながら入る露天風呂と、初夏の味覚「若鮎・山菜」の美味会席',
        body: 'ホタル観賞の余韻に浸りながら夜風が心地よい露天風呂で身体を温め、夕食には清流で育った初夏の香魚「若鮎の塩焼き」や地元の採れたて山菜、初夏の涼やかな会席料理に舌鼓を打つ至福のひとときが待っています。'
      }
    ],
    hotelDetails: [
      {
        key: 'kikuchi_firefly',
        badge: '熊本県菊池市・名水菊池渓谷の清流と目の前の川辺に舞うホタル！化粧水のような美肌温泉',
        rank: '厳選名宿 第1選',
        desc: '名水百選・菊池渓谷の豊かな水に育まれた熊本の奥座敷・菊池温泉に佇む、緑の木立に囲まれた静かな温泉旅館。宿のすぐ脇を流れる清流沿いには初夏になると自生するゲンジボタルが飛び交い、夜の散策で息をのむ幻想的な光の乱舞に出逢えます。菊池温泉名物の「日本の名湯百選」にも選ばれるアルカリ性単純温泉は、まるで化粧水に浸かっているかのようなトロトロの肌触りで美肌効果抜群。熊本名物の馬刺しや肥後あか牛、菊池の清流米を使った彩り豊かな郷土会席とともに、心温まる九州の温泉情緒に浸れます。'
      },
      {
        key: 'tatsuno_firefly',
        badge: '兵庫県豊岡市・神鍋高原の清らかな大自然！清流ホタルの夕べと北欧風高原温泉リゾート',
        rank: '厳選名宿 第2選',
        desc: '神鍋高原の豊かな森と澄んだ空気に包まれた、北欧の山岳ロッジを思わせる洗練された高原リゾートホテル。初夏にはホテルの周辺を流れる稲石川などの清流沿いでホタルが舞い、澄み切った満天の星空とともに大自然の美しい夜を体験できます。敷地内から湧出する神鍋温泉「ブルーリッジの湯」は筋肉疲労や冷え性に効能豊かな天然温泉で、開放的な露天風呂やサウナを完備。但馬牛のグリルステーキや地元契約農家の高原野菜を贅沢に取り入れたフレンチやバイキングディナーも大好評です。'
      },
      {
        key: 'yugawara_firefly',
        badge: '神奈川県湯河原町・千歳川のせせらぎと万葉公園ほたるの宴に近い大人の隠れ家名宿',
        rank: '厳選名宿 第3選',
        desc: '文豪たちに愛された名湯・湯河原温泉を流れる千歳川の清流沿いに佇む、全17室の落ち着きある大人の隠れ家旅館。毎年6月上旬に開催される風物詩「万葉公園 ほたるの宴」会場へのアクセスも良く、竹林のライトアップとともに飛び交うホタルの幽玄な世界を満喫できます。客室露天風呂や貸切風呂、広々とした大浴場で弱アルカリ性の柔らかな湯河原の名湯に浸かり、相模湾の獲れたて地魚や厳選された黒毛和牛を使った職人技が光る月替わり会席を心ゆくまでご堪能いただけます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-mountain-stream-open-air-bath-healing-stay', title: '【清流せせらぎ渓流露天風呂×ふるさと納税】奥入瀬・黒川・塩原の絶景癒やし宿' },
      { slug: 'furusato-tax-waterfall-river-gorge-healing-onsen-stay', title: '【渓谷美＆滝巡り温泉×ふるさと納税】せせらぎと名湯に癒やされる旅' },
      { slug: 'furusato-tax-starry-sky-astronomy-night-view-stay', title: '【満天の星空天体観測×ふるさと納税】阿智村・野辺山・石垣島の夜空リトリート' },
      { slug: 'furusato-tax-pure-kakenagashi-secret-hotspring-stay', title: '【源泉かけ流し秘湯×ふるさと納税】加水・加温なしの本物の湯力を堪能する名宿' }
    ]
  },
  {
    slug: 'furusato-tax-highland-ranch-farm-resort-hotel-stay',
    componentName: 'FurusatoHighlandRanchFarmStayPage',
    tag: '高原観光牧場＆ふれあいファームリゾート特集',
    title: '動物とのふれあい体験＆高原観光牧場リゾート名門ホテル×ふるさと納税完全ガイド【2026年最新】那須高原・トマム・阿蘇',
    metaTitle: '動物とのふれあい体験＆高原観光牧場リゾート名門ホテル×ふるさと納税完全ガイド【2026年最新】那須高原・トマム・阿蘇',
    shortTitle: '高原牧場ファーム体験リゾートホテル特集',
    description: '広大な大自然と動物たちに癒やされる高原バカンス！那須南ヶ丘牧場や千本松牧場に隣接し巨大温泉スパとバイキングを誇る「那須温泉 ホテルサンバレー那須」、北海道の広大なファームエリアで羊や牛と過ごす最高峰リゾート「星野リゾート リゾナーレトマム」、阿蘇の大草原放牧と阿蘇五岳を望む展望露天風呂が自慢の「阿蘇内牧温泉 阿蘇プラザホテル」。新鮮な搾りたてミルクやチーズ、乗馬体験を楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '高原観光牧場＆ふれあいファームリゾート特集',
    leadTitle: '青空の下に広がる見渡す限りの牧草地、のんびり草を食む牛や羊たち。心洗われる高原ファームステイへ',
    leadText: '都会のビル群を抜け出し、涼やかな風が吹き抜ける広大な高原牧場へ。澄み切った青空と緑の絨毯がどこまでも広がるファームエリアでは、のんびりと過ごす乳牛や羊、愛らしい馬やアルパカたちとのふれあいが待っています。搾りたての新鮮な生乳から作られる濃厚なソフトクリームや自家製チーズ、バター作り体験、緑の小径を進むホーストレッキング（乗馬体験）など、子どもから大人まで笑顔になれるアクティビティが満載です。全国有数の酪農地帯・那須高原で「南ヶ丘牧場」や「那須りんどう湖ファミリー牧場」への拠点となり、多彩な泉質の名湯スパと豪華バイキングを楽しめる「那須温泉 ホテルサンバレー那須」、約100ヘクタールもの広大な「ファーム星野」を有し、牧草ベッドや羊とお昼寝できる北海道最高峰のリゾート「星野リゾート リゾナーレトマム」、そして世界最大級のカルデラ・阿蘇の大草原で放牧の風景を眺め、阿蘇五岳を一望する絶景露天風呂を誇る「阿蘇内牧温泉 阿蘇プラザホテル」。大自然の中で命の温もりに触れるファーム体験リゾートを、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質2,000円で賢く予約し、爽快な高原リフレッシュ旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '牛・羊・馬・アルパカと触れ合う！搾りたて牛乳スイーツやバター作り体験も満喫',
        body: '広大な放牧地での餌やり体験や乗馬、トラクターツアー、新鮮な生乳を使ったアイスクリーム・バター作りなど、五感を使って自然の恵みを学べる体験プログラムが充実。ファミリーの思い出作りにも最適です。'
      },
      {
        num: '02',
        title: '見渡す限りの緑の大草原！圧倒的なスケール感が生み出す究極の癒やしと解放感',
        body: '360度に広がる雄大な山々と牧草地のパノラマビュー。都会の窮屈さから完全に解き放たれ、高原の澄み切った空気を胸いっぱいに吸い込むだけで、日常のストレスや疲れが吹き飛んでいきます。'
      },
      {
        num: '03',
        title: '牧場直送の乳製品・新鮮野菜・ジューシーなブランド牛を堪能する絶品ディナー',
        body: '濃厚なフレッシュモッツァレラチーズ、採れたて高原野菜、柔らかく旨味の詰まったブランド和牛のグリルステーキなど、牧場エリアならではの贅沢な味覚をホテルディナーやバイキングで心ゆくまで堪能できます。'
      }
    ],
    hotelDetails: [
      {
        key: 'nasu_farm_resort',
        badge: '栃木県那須町・南ヶ丘牧場至近！3種の源泉掛け流し大型スパと豪華バイキングリゾート',
        rank: '厳選名宿 第1選',
        desc: '那須高原の美しい森の中に広がる、温泉・宿泊・アクティビティが融合した大型温泉リゾートホテル。「那須高原 南ヶ丘牧場」やりんどう湖ファミリー牧場へ車ですぐの絶好のロケーションに建ち、牧場巡りの拠点として抜群の人気を誇ります。敷地内には硫黄泉・弱アルカリ泉・マグネシウム泉という3つの異なる天然源泉が湧出する大型スパ施設「湯遊天国」を完備。夕食には新鮮な那須高原野菜やシェフが焼き上げるステーキ、中華・和食・洋食の本格バイキングが楽しめ、三世代家族やグループ旅行にも最高の満足度を提供してくれます。'
      },
      {
        key: 'tomamu_farm_resort',
        badge: '北海道占冠村・広大な「ファーム星野」で動物と過ごす！全室展望ジェットバス・サウナ付きスイート',
        rank: '厳選名宿 第2選',
        desc: '北海道の大自然に囲まれた約1,000ヘクタールもの広大な敷地を誇る星野リゾートのフラッグシップ施設。約100ヘクタールの「ファーム星野」では、牛や羊、馬がのんびり暮らす牧歌的な風景が広がり、本物の牧草でできた「牧草ベッド」や「羊とお昼寝ハンモック」などユニークな体験が目白押しです。全客室が100平米以上のスイートルーム仕様で、展望ジェットバスとプライベートサウナを完備。雲海テラスや日本最大級のインドアウェイブプール「ミナミナビーチ」など、世界基準のプレミアムな休日をお過ごしいただけます。'
      },
      {
        key: 'aso_farm_resort',
        badge: '熊本県阿蘇市・大草原の放牧風景と阿蘇五岳を望む絶景展望露天！名湯内牧温泉の老舗宿',
        rank: '厳選名宿 第3選',
        desc: '世界最大級のカルデラを誇る阿蘇の大草原に位置し、阿蘇ミルク牧場や草千里ヶ浜の放牧体験へのアクセス拠点として愛される老舗温泉旅館。宿の最大の自慢は、屋上にある展望露天風呂「峯峰の湯」。遮るもののない大パノラマで阿蘇五岳（根子岳・高岳・中岳・烏帽子岳・杵島岳）の雄大な山並みを一望しながら良質な内牧温泉に浸かる贅沢が味わえます。夕食には熊本名物の馬刺しや肥後あか牛の溶岩焼き、阿蘇のジャージー牛乳を使ったデザートなど郷土の豊かな恵みを堪能でき、阿蘇の雄大な自然をまるごと体感できます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-welcome-baby-family-kids-stay', title: '【ウェルカムベビーのお宿×ふるさと納税】赤ちゃん・子連れ安心のファミリー名宿' },
      { slug: 'furusato-tax-three-generation-family-luxury-stay', title: '【三世代ファミリー旅行×ふるさと納税】広々客室・バイキング・名湯の旅' },
      { slug: 'furusato-tax-luxury-glamping-bbq-dome-stay', title: '【グランピング＆BBQ×ふるさと納税】手ぶらで大自然を満喫するドームテント宿' },
      { slug: 'furusato-tax-scenic-train-torokko-railway-onsen-stay', title: '【観光列車＆トロッコ列車×ふるさと納税】車窓絶景と名湯を巡る鉄道温泉旅' }
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

console.log('Finished generating all 4 articles for Round 73!');
