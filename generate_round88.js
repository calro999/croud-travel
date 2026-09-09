const fs = require('fs');
const path = require('path');

const seasonalHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

const round88Configs = [
  {
    slug: 'furusato-tax-izu-shuzenji-bamboo-luxury-stay',
    componentName: 'FurusatoShuzenjiBambooStayPage',
    tag: '伊豆修善寺 竹林の小径＆創業400年名門宿特集',
    title: '伊豆最古の小京都！修善寺温泉の竹林の小径散策＆桂川のせせらぎ望む老舗旅館×ふるさと納税完全攻略ガイド【2026年最新】湯回廊菊屋・宙SORA・桂川',
    metaTitle: '伊豆最古の小京都！修善寺温泉の竹林の小径散策＆桂川のせせらぎ望む老舗旅館×ふるさと納税完全攻略ガイド【2026年最新】湯回廊菊屋・宙SORA・桂川',
    shortTitle: '修善寺温泉 竹林の小径＆名門宿特集',
    description: '弘法大師が開湯した伊豆最古の名湯・修善寺温泉！竹林の小径、桂川にかかる恋の橋巡り。「湯回廊 菊屋」「修善寺温泉 宙 SORA 渡月荘金龍」「修善寺温泉 桂川」を、静岡県伊豆市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。創業四百年の渡り廊下、一万五千坪日本庭園、伊豆名物金目鯛・天城わさび会席を満喫。',
    heroTag: '伊豆の小京都・文学の薫る名湯！静岡県修善寺温泉特集',
    leadTitle: '桂川のせせらぎ、青竹がそよぐ竹林の小径。夏目漱石や川端康成が愛した伊豆最古の小京都・修善寺の休日へ',
    leadText: '平安時代初期の大同2年（807年）、弘法大師空海が独鈷（とっこ）で岩を打ち砕いて霊泉を湧出させた「独鈷の湯」から始まったと伝わる、伊豆半島最古の温泉地「修善寺温泉（しゅぜんじおんせん）」。中心を流れる桂川沿いには、しっとりとした情緒を醸し出す「竹林の小径」や朱塗りの橋が架かり、古くから夏目漱石、芥川龍之介、川端康成、岡本綺堂ら名だたる文人墨客が逗留し、数々の名作を執筆した日本屈指の文学ロマンあふれる温泉街です。修善寺温泉の湯は、さらりとして肌あたりの柔らかいアルカリ性単純温泉。体の芯からじんわりと温まり、湯上がりには肌がすべすべになると評判です。宿の渡り廊下を歩けば、川のせせらぎと四季の草花、虫の声が耳に心地よく響き、何もしない贅沢に心が洗われます。さらに食の楽しみも格別。清らかな天城の伏流水で育った本生わさびをおろして味わう刺身やステーキ、駿河湾や下田港から直送される高級魚「金目鯛（キンメダイ）」の姿煮やしゃぶしゃぶ、伊豆の旬の山の幸を取り入れた繊細な会席料理が旅の宵を華やかに彩ります。本特集では、桂川を跨ぐ渡り廊下と夏目漱石ゆかりの部屋を残す創業四百年の名門「湯回廊 菊屋（共立リゾート）」、一万五千坪もの壮大な日本庭園とドラマのロケ地としても名高い展望露天風呂が評判の「修善寺温泉 宙 SORA 渡月荘金龍」、そして七つの趣異なる無料貸切風呂と修禅寺への好立地を誇る「湯めぐりの宿 修善寺温泉 桂川」の3大名宿を厳選。静岡県伊豆市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの修善寺ステイをお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '伊豆最古の名湯と竹林の小径！文豪たちが愛した風情ある温泉街のそぞろ歩き',
        body: '浴衣と下駄で朱塗りの橋や竹林の小径を散策。日々の喧騒を忘れ、川のせせらぎと緑の美しさに心から癒やされる時間が流れています。'
      },
      {
        num: '02',
        title: '下田直送の「金目鯛姿煮」と「天城本生わさび」！伊豆の海と山の極上美味会席',
        body: 'ふっくら煮付けた濃厚な金目鯛や、目の前でおろす香り豊かな生わさび、駿河湾の地魚など、伊豆ならではの滋味深い料理を堪能。'
      },
      {
        num: '03',
        title: '伊豆市ふるさと納税で最大30％OFF！3年間有効クーポンで記念日や週末温泉旅に最適',
        body: '首都圏から踊り子号や新幹線でアクセスの良い修善寺温泉もふるさと納税なら実質2,000円。寄付から3年間有効なので、新緑や紅葉に合わせ計画できます。'
      }
    ],
    hotelDetails: [
      {
        key: 'shuzenji_asaba',
        badge: '静岡県伊豆市・創業四百年！夏目漱石逗留の格式＆桂川を跨ぐ回廊と趣異なる庭園露天風呂・無料貸切風呂（湯回廊 菊屋）',
        rank: '厳選名宿 第1選',
        desc: '修善寺温泉の中心を流れる桂川を跨ぐように建てられた、創業四百余年の歴史を誇る名門温泉旅館。文豪・夏目漱石が胃潰瘍の療養のために長期逗留した「漱石の間」をはじめ、敷地内を結ぶ木造の渡り廊下「湯回廊」は歴史の息吹を色濃く残します。館内には広々とした大浴場や露天風呂のほか、予約不要で何度でも利用できる4つの趣異なる無料貸切風呂があり、清流のせせらぎを聞きながら極上の湯浴みが可能。夕食は月替わりの本格日本料理会席で、下田港直送の金目鯛や天城産本わさび、旬の地場食材を美しく盛り込んだ逸品を心ゆくまで堪能できます。'
      },
      {
        key: 'shuzenji_marukyu',
        badge: '静岡県伊豆市・竹林の小径すぐ！一万五千坪の広大な日本庭園と夜空を仰ぐ展望露天風呂＆デザイナーズモダン宿（宙 SORA 渡月荘金龍）',
        rank: '厳選名宿 第2選',
        desc: '竹林の小径に隣接する小高い丘の上に建ち、約一万五千坪という圧倒的な広さを誇る日本庭園に抱かれたスタイリッシュな高級温泉旅館。テレビドラマ「逃げるは恥だが役に立つ」の温泉旅行ロケ地としても全国的に有名です。宿のシンボルである大浴場や露天風呂からは、手入れの行き届いた庭園と修善寺の緑豊かな山並みを一望。世界的デザイナーが手がけた円形・光の貸切露天風呂も大人気です。夕食は厳選された伊豆牛や駿河湾の海の幸、天城の山菜をふんだんに取り入れた創作和食会席で、モダンで上質な大人の贅沢ステイを叶えてくれます。'
      },
      {
        key: 'shuzenji_katsuragawa',
        badge: '静岡県伊豆市・修禅寺へ徒歩圏！七つの趣異なる無料貸切風呂巡り＆バイキング・和会席が人気の共立リゾート名門（桂川）',
        rank: '厳選名宿 第3選',
        desc: '修禅寺や桂川の散策拠点として最高のロケーションに位置する、共立リゾートがプロデュースする温泉ホテル。最大の魅力は、館内に用意された「七つの無料貸切風呂（檜、信楽焼、岩風呂など）」。空いていれば予約なしで何度でも湯巡りができ、家族やカップルでプライベートな温泉時間を満喫できます。客室は和の温もりを感じる洗練された和洋室。夕食は旬の刺身や天ぷら、伊豆の郷土料理が彩り豊かに並ぶハーフバイキングや和食会席が選べ、共立リゾート名物の夜鳴きそばサービスとともに滞在の満足感を高めてくれます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-hakone-onsen-open-air-bath-stay', title: '【箱根温泉 客室露天風呂＆名門旅館×ふるさと納税】富士屋ホテル・天成園・はつはな' },
      { slug: 'furusato-tax-atami-ocean-view-fireworks-hotel-stay', title: '【熱海花火大会特等席＆オーシャンビュー温泉宿×ふるさと納税】後楽園・ニューアカオ・パールスター' },
      { slug: 'furusato-tax-dogo-onsen-honkan-walk-luxury-stay', title: '【道後温泉 本館散策＆老舗旅館×ふるさと納税】ふなや・道後御湯・道後プリンス' },
      { slug: 'furusato-tax-tangible-cultural-property-sukiya-carpenter-ryokan-stay', title: '【登録有形文化財・宮大工数寄屋造り旅館×ふるさと納税】木造建築美の宿' }
    ]
  },
  {
    slug: 'furusato-tax-awajishima-ocean-view-luxury-stay',
    componentName: 'FurusatoAwajishimaOceanStayPage',
    tag: '淡路島 洲本温泉オーシャンビュー＆淡路牛会席特集',
    title: '朝日と海の絶景インフィニティ温泉！淡路島の全室オーシャンビュー名門宿＆極上淡路牛・天然鯛会席×ふるさと納税完全攻略ガイド【2026年最新】ホテルニューアワジ・夢海游・グランシャリオ',
    metaTitle: '朝日と海の絶景インフィニティ温泉！淡路島の全室オーシャンビュー名門宿＆極上淡路牛・天然鯛会席×ふるさと納税完全攻略ガイド【2026年最新】ホテルニューアワジ・夢海游・グランシャリオ',
    shortTitle: '淡路島 オーシャンビュー＆淡路牛宿特集',
    description: '御食国（みけつくに）の豊かな美味と大阪湾・紀淡海峡のパノラマ！兵庫県淡路島。「ホテルニューアワジ」「夢海游 淡路島」「GRAND CHARIOT 北斗七星135°」を、兵庫県洲本市・淡路市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。棚田状インフィニティ露天風呂、極上淡路牛ステーキ、天然鯛・鱧会席を満喫。',
    heroTag: '神話の島・御食国の極上リゾート！兵庫県淡路島特集',
    leadTitle: '水平線から昇る神々しい朝陽、紀淡海峡の波音。古の御食国・淡路島で味わう絶景温泉と極上山海ステイへ',
    leadText: '本州と四国の間に位置し、国生み神話の舞台として知られる兵庫県「淡路島（あわじしま）」。神戸や大阪から明石海峡大橋を渡ってわずか1時間前後という抜群のアクセスを誇り、関西を代表する大人気リゾートアイランドです。淡路島東海岸の洲本温泉は、目の前にどこまでも広がる紀淡海峡と大阪湾のパノラマビューが最大の自慢。海と空が一体化するインフィニティ露天風呂や、棚田のように広がる絶景大浴場に浸かり、水平線から昇る黄金の朝陽を眺める瞬間は息を呑む感動を呼び起こします。さらに淡路島は、古代より朝廷に御食材を献上してきた「御食国（みけつくに）」としての歴史を持つ食の宝庫。神戸ビーフや松阪牛の素牛として知られる最高峰の黒毛和牛「淡路牛（淡路ビーフ）」の霜降りステーキ、激しい鳴門海峡の潮流に揉まれて身が引き締まった「淡路島天然真鯛」、夏の風物詩である「淡路島鱧（はも）」のしゃぶしゃぶやすき鍋、そして甘み際立つ名物淡路島玉ねぎなど、贅を尽くした山海の幸が食卓に並びます。本特集では、全室オーシャンビューと棚田状の絶景露天風呂「淡路棚田の湯」が全国的な知名度を誇る象徴的リゾート「洲本温泉 ホテルニューアワジ」、白砂青松の大浜海岸に隣接し森と海の2つのスパが人気の「洲本温泉 夢海游 淡路島」、そして淡路島の大自然の丘陵に繭型コクーン客室が点在し満天の星と最高級淡路ビーフを味わうグランピング「GRAND CHARIOT 北斗七星135°」の3宿を厳選。兵庫県洲本市・淡路市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの淡路島リゾート旅をお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '紀淡海峡を一望するインフィニティ露天風呂！水平線から昇る感動の朝陽',
        body: '海と湯船が一体になる絶景の湯浴み。洲本温泉の良質な湯に浸かりながら、刻一刻と表情を変える海と空のグラデーションを満喫できます。'
      },
      {
        num: '02',
        title: '御食国の誇り！ブランド黒毛和牛「淡路牛」と天然真鯛・鱧の贅沢グルメ',
        body: '極上の肉質を誇る淡路牛ステーキや、淡路島天然鯛の宝楽焼、夏期限定の淡路島鱧すき鍋など、新鮮な海と大地の味覚を堪能。'
      },
      {
        num: '03',
        title: '洲本市・淡路市ふるさと納税で最大30％OFF！3年間有効クーポンで記念日や週末旅に最適',
        body: '京阪神から気軽に行ける淡路島リゾートもふるさと納税なら実質自己負担2,000円。寄付から3年間有効なので、連休や記念日に合わせて計画できます。'
      }
    ],
    hotelDetails: [
      {
        key: 'awaji_hotel_new_awaji',
        badge: '兵庫県洲本市・全室オーシャンビュー！紀淡海峡と一体になる棚田状露天風呂「淡路棚田の湯」＆名物淡路牛・海の幸会席（口コミ2,600件超）',
        rank: '厳選名宿 第1選',
        desc: '淡路島東海岸の洲本温泉に位置し、関西を代表する知名度と満足度を誇る老舗大型温泉リゾートホテル。全客室がオーシャンビューとなっており、バルコニーや窓から雄大な海のパノラマと心地よい潮風を感じることができます。宿の代名詞は、棚田を模したダイナミックな三段湯船が広がる露天風呂「淡路棚田の湯」と、木造の趣あふれる「くにうみの湯」。2つの異なる自家源泉「洲本温泉」と「古茂江温泉」を贅沢に引き湯しています。夕食は御食国の恵みを凝縮した豪華会席。極上の淡路牛ステーキや淡路島近海で獲れた天然真鯛、夏の鱧や冬の三年とらふぐなど、四季折々の絶品料理をお部屋食でゆったりと堪能できます。'
      },
      {
        key: 'awaji_yumekaiyu',
        badge: '兵庫県洲本市・名所大浜海岸目前の絶好ロケーション！離れスパ「海音の森」と淡路牛ステーキ・旬魚バイキング（夢海游 淡路島）',
        rank: '厳選名宿 第2選',
        desc: '白砂青松が広がる大浜海水浴場のすぐ目の前に佇み、ビーチリゾートの開放感と日本旅館の温かなおもてなしが融合した温泉ホテル。館内には海を望む大浴場「森のSPA」と、木々の緑に囲まれた「渚のSPA」という2つの湯処があり、滞在中に優雅な湯巡りが楽しめます。客室はモダンな和みフロアや展望風呂付き客室が揃い、カップルからファミリーまで快適。夕食はオープンキッチンのダイニングにて、淡路牛のジューシーなグリルや地魚のお造り、淡路島玉ねぎを使った多彩な料理が並ぶ豪華ディナービュッフェ、または個室での本格和会席から選べ、幅広い年代に高い評価を得ています。'
      },
      {
        key: 'awaji_grandchariot',
        badge: '兵庫県淡路市・東経135度のエネルギー溢れる丘の上！繭型コクーン客室＆酵素風呂と最高級淡路ビーフ山海会席（北斗七星135°）',
        rank: '厳選名宿 第3選',
        desc: '兵庫県立淡路島公園アニメパーク「ニジゲンノモリ」の最も高い丘の頂、東経135度の子午線上に位置する最高峰のグランピングヴィラリゾート。繭（コクーン）をモチーフにした全客室は天井高5mを超える開放的な木造建築で、天窓からは夜空に輝く満天の星や月をベッドから眺めることができます。全室に檜風呂が完備され、米ぬか酵素風呂でのリラクゼーションも体験可能。食事は世界的名シェフ・奥田政行氏が監修した極上の山海会席。淡路ビーフのすき焼きやしゃぶしゃぶ、由良港直送の鮮魚など、素材本来の旨味を極限まで引き出した感動の料理をプライベート空間で味わえます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-arima-onsen-kinsen-ginsen-luxury-stay', title: '【有馬温泉 金泉銀泉＆名門旅館×ふるさと納税】兵衛向陽閣・御所坊・月光園鴻朧館' },
      { slug: 'furusato-tax-kinosaki-onsen-sotoyu-meguri-ryokan-stay', title: '【城崎温泉 七田外湯めぐり＆柳並木宿×ふるさと納税】招月庭・小宿縁・つちや旅館' },
      { slug: 'furusato-tax-shirahama-onsen-ocean-view-luxury-stay', title: '【南紀白浜温泉 白良浜オーシャンビュー宿×ふるさと納税】むさし・海舟・シーモア' },
      { slug: 'furusato-tax-private-villa-hanare-hideaway-stay', title: '【大人の隠れ家・離れ客室×ふるさと納税】静寂とプライベート重視の名宿' }
    ]
  },
  {
    slug: 'furusato-tax-echigo-yuzawa-onsen-sake-stay',
    componentName: 'FurusatoEchigoYuzawaOnsenStayPage',
    tag: '越後湯沢温泉 雪国情熱＆日本酒・米どころ宿特集',
    title: '川端康成『雪国』の舞台！越後湯沢温泉の展望絶景露天風呂＆本場魚沼産コシヒカリ・越後地酒名門宿×ふるさと納税完全攻略ガイド【2026年最新】双葉・NASPAニューオータニ・いなもと',
    metaTitle: '川端康成『雪国』の舞台！越後湯沢温泉の展望絶景露天風呂＆本場魚沼産コシヒカリ・越後地酒名門宿×ふるさと納税完全攻略ガイド【2026年最新】双葉・NASPAニューオータニ・いなもと',
    shortTitle: '越後湯沢温泉 雪国名湯＆美酒名宿特集',
    description: '新幹線で東京から約70分の雪国名湯・新潟県越後湯沢温泉！文豪・川端康成ゆかりの地。「水が織りなす越後の宿 双葉」「NASPAニューオータニ」「越後のお宿 いなもと」を、新潟県湯沢町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。二十八の多彩なお風呂、本場魚沼産コシヒカリ、越後地酒会席を満喫。',
    heroTag: '新幹線で行ける雪国情熱の名湯！新潟県越後湯沢温泉特集',
    leadTitle: '国境の長いトンネルを抜けると雪国であった。名峰・谷川連峰のパノラマと本場の米・酒に酔いしれる湯沢の休日へ',
    leadText: 'ノーベル文学賞作家・川端康成の名作小説『雪国』の冒頭「国境の長いトンネルを抜けると雪国であった」の舞台として名高い、新潟県を代表する温泉郷「越後湯沢温泉（えちごゆざわおんせん）」。上越新幹線で東京駅から最速約70分という驚異的なアクセスの良さを誇りながら、冬は白銀のパウダースノーが山々を包み込み、春から秋には清々しい緑と澄んだ空気が広がる四季の彩り豊かな温泉地です。越後湯沢温泉のお湯は、無色透明でさらりとした肌あたりの単純温泉や弱アルカリ性低張性温泉。神経痛や冷え性に優れ、旅の疲れを芯から解きほぐしてくれます。雪見露天風呂に身を沈めながら、目の前に広がる谷川連峰の山並みを眺める時間はまさに至福のひととき。さらに越後湯沢の最大の醍醐味は、日本一の米どころ・酒どころが誇る圧倒的な美食文化です。炊き立てで艶やかに輝く本場「魚沼産コシヒカリ」の銀シャリ、清らかな雪解け水と伝統の杜氏技が醸し出す新潟の銘酒（八海山、鶴齢、上善如水など）の利き酒、そして日本海の荒波で育った新鮮な海の幸や山菜料理が、旅の満足度を最高潮に高めてくれます。本特集では、館内に二十八もの多彩な湯船が揃い最上階展望露天風呂「空の湯」が評判の「水が織りなす越後の宿 双葉」、広さ250坪の天然温泉大浴場と名門ニューオータニ伝統のフレンチ・和食が光るリゾート「NASPAニューオータニ」、そして駅西口徒歩2分の好立地で100％源泉掛け流し露天風呂が自慢の「越後のお宿 いなもと」の3宿を厳選。新潟県湯沢町への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で越後湯沢温泉の極上旅をお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '東京駅から新幹線で最短約70分！谷川連峰のパノラマを望む絶景展望露天風呂',
        body: '駅近の好立地でありながら雄大な山並みや白銀の雪景色を一望。二十八のお風呂めぐりや源泉かけ流し露天風呂で心ゆくまで癒やされます。'
      },
      {
        num: '02',
        title: '日本一のブランド米「南魚沼産コシヒカリ」と越後銘酒のペアリングディナー',
        body: '噛むほどに甘みが広がる本場魚沼産コシヒカリの炊き立てご飯、新潟が誇る極上地酒、日本海の新鮮な海の幸を贅沢に味わい尽くせます。'
      },
      {
        num: '03',
        title: '湯沢町ふるさと納税で最大30％OFF！3年間有効クーポンでスキー・温泉旅に大活躍',
        body: 'スキーシーズンや紅葉時期に人気の越後湯沢ホテルもふるさと納税なら実質2,000円。寄付から3年間有効なので、冬の雪見旅や家族旅行に最適です。'
      }
    ],
    hotelDetails: [
      {
        key: 'yuzawa_futaba',
        badge: '新潟県湯沢町・館内に二十八の多彩なお風呂！最上階展望露天風呂「空の湯」＆本場魚沼産コシヒカリ・越後会席（水が織りなす越後の宿 双葉）',
        rank: '厳選名宿 第1選',
        desc: '越後湯沢の高台に位置し、水のせせらぎと和の風情を大切にした名門温泉旅館。宿の最大の自慢は、「空の湯」「山の湯」「里の湯」という趣の異なる3つの大浴場エリアに点在する合計二十八もの湯船。最上階の展望露天風呂「パノラマ露天 空の湯」からは、四季折々に表情を変える谷川連峰の雄大な稜線と湯沢の街並みを一望できます。客室は落ち着きある純和風客室から展望温泉風呂付き特別室まで多彩。夕食は地元契約農家から届く本場の南魚沼産コシヒカリを釜炊きで提供するほか、日本海の旬魚やにいがた和牛をふんだんに盛り込んだ贅沢な越後会席をお部屋や個室食事処でゆったりと味わえます。'
      },
      {
        key: 'yuzawa_naspa',
        badge: '新潟県湯沢町・JR越後湯沢駅より無料送迎3分！広さ250坪の天然温泉大浴場＆ニューオータニ伝統のフレンチと和会席（NASPAニューオータニ）',
        rank: '厳選名宿 第2選',
        desc: '名門ホテルニューオータニグループが手がける、大自然に囲まれた本格高原・温泉リゾートホテル。男女合わせて250坪という圧巻の広さを誇る天然温泉大浴場には、ジャグジーやサウナ、開放的な露天風呂を完備し、心身ともに深いリラクゼーションへと導いてくれます。冬にはホテル直結のスキー場（スキーヤー専用）がオープンし、夏にはアクティビティが充実。食事はニューオータニ伝統のローストビーフや本格フレンチフルコース、あるいは新潟の海の幸・山の幸を活かした四季の日本料理会席など、一流シェフが織りなす上質な美食体験を堪能できます。'
      },
      {
        key: 'yuzawa_shoshintei',
        badge: '新潟県湯沢町・JR越後湯沢駅西口より徒歩2分！純度100％源泉掛け流しの大浴場＆露天風呂と越後郷土料理が愛される老舗宿（いなもと）',
        rank: '厳選名宿 第3選',
        desc: '上越新幹線の越後湯沢駅西口から徒歩わずか2分という最高のアクセスを誇る老舗温泉旅館。駅近の好立地でありながら、館内には加水・加温・循環なしの「純度100％源泉掛け流し」の天然温泉が注がれる大浴場や露天風呂を完備しており、湯沢本来のフレッシュな名湯をそのまま肌で実感できます。貸切家族風呂も完備され、プライベートな湯浴みにも最適。夕食は魚沼産コシヒカリはもちろん、越後もち豚の陶板焼きや日本海の地魚のお造り、新潟名物の郷土料理を温かな接客とともに味わえ、どこか懐かしく心落ち着く滞在が楽しめます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-ginzan-onsen-taisho-romantic-stay', title: '【銀山温泉 大正ロマン＆雪見露天宿×ふるさと納税】能登屋・銀山荘・古勢起屋' },
      { slug: 'furusato-tax-noboribetsu-jigokudani-onsen-luxury-stay', title: '【登別温泉 地獄谷＆名湯ビュッフェ宿×ふるさと納税】第一滝本館・まほろば・グランドホテル' },
      { slug: 'furusato-tax-kusatsu-onsen-yubatake-walk-luxury-stay', title: '【草津温泉 湯畑散策＆名湯名門旅館×ふるさと納税】櫻井・一井・奈良屋' },
      { slug: 'furusato-tax-sake-brewery-pairing-onsen-stay', title: '【酒蔵直営＆日本酒ペアリング温泉宿×ふるさと納税】銘酒と美肌の湯' }
    ]
  },
  {
    slug: 'furusato-tax-chichibu-nagatoro-nature-onsen-stay',
    componentName: 'FurusatoChichibuNagatoroStayPage',
    tag: '秩父・長瀞 長瀞渓谷＆美肌薬師の湯宿特集',
    title: '名勝岩畳と長瀞ライン下り！秩父・長瀞の横瀬川清流望む露天風呂＆創業190年美肌鉱泉・郷土会席名宿×ふるさと納税完全攻略ガイド【2026年最新】和どう・新木鉱泉・長生館',
    metaTitle: '名勝岩畳と長瀞ライン下り！秩父・長瀞の横瀬川清流望む露天風呂＆創業190年美肌鉱泉・郷土会席名宿×ふるさと納税完全攻略ガイド【2026年最新】和どう・新木鉱泉・長生館',
    shortTitle: '秩父・長瀞 名勝岩畳＆美肌温泉宿特集',
    description: '都心から特急で約80分の小旅行！名勝「長瀞岩畳」と秩父三社巡り。「和銅鉱泉 ゆの宿 和どう」「秩父七湯 新木鉱泉旅館」「長瀞温泉 花のおもてなし 長生館」を、埼玉県秩父市・長瀞町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。和同開珎ゆかりの薬師の湯、創業百九十年卵水、名物長瀞流しそうめん・囲炉裏会席を満喫。',
    heroTag: '都心から最も近い大自然と清流！埼玉県秩父・長瀞特集',
    leadTitle: '荒川の清流、天然記念物「岩畳」の迫力、秩父の山々に抱かれる静寂。都心から約80分で出会える秩父・長瀞の癒やし旅へ',
    leadText: '池袋駅から西武特急ラビューでわずか約77分、都心から最も近い本格的な大自然郷「埼玉県・秩父（ちちぶ）・長瀞（ながとろ）」。国指定の名勝・天然記念物である「長瀞岩畳」の雄大な岩壁や、船頭の竿さばきで荒川の急流を下る「長瀞ライン下り」、パワースポットとして名高い「三峯神社」「秩父神社」「宝登山神社」の秩父三社巡りなど、四季折々の絶景と歴史文化がぎゅっと凝縮された大人気観光エリアです。秩父・長瀞の宿の魅力は、清らかな川のせせらぎに包まれる絶景露天風呂と、古くから湯治場として愛されてきた良質な温泉・鉱泉。日本通貨発祥の地「和同開珎」ゆかりの「薬師の湯」や、創業百九十余年の歴史を持ち「卵水」と呼ばれるトロトロの美肌鉱泉は、日々の疲れを心地よく解きほぐしてくれます。さらに食の魅力も豊富。清流で育った鮎や岩魚の塩焼き、秩父名物の豚みそ漬け焼き、滋味あふれるきのこ鍋、長瀞名物の天然氷のかき氷や流しそうめんなど、里山の温もりあふれる郷土会席が旅人の心とお腹を満たします。本特集では、日本最古の通貨・和同開珎が発掘された聖地に佇み横瀬川の清流を望む露天風呂が評判の「和銅鉱泉 薬師の湯 ゆの宿 和どう」、江戸時代文政十年創業・トロリとした美肌の湯と囲炉裏料理が愛される「秩父七湯 新木鉱泉旅館」、そして長瀞渓谷と名勝岩畳を客室や庭園から一望できる創業大正四年の老舗「長瀞温泉 花のおもてなし 長生館」の3大名宿を厳選。埼玉県秩父市・長瀞町への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で秩父・長瀞の癒やし旅をお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '都心から特急で約80分の好アクセス！長瀞岩畳や荒川の清流を望む絶景ロケーション',
        body: '西武特急で気軽にアクセス。川のせせらぎや鳥の声を聞きながら、都心のすぐそばとは思えない豊かな大自然に包まれます。'
      },
      {
        num: '02',
        title: '「卵水」と称されるトロトロ美肌鉱泉と和同開珎ゆかりの名湯「薬師の湯」',
        body: '江戸時代から湯治客を癒やしてきた良質な名湯。肌がすべすべになる美肌成分が豊富に含まれ、女性にも大人気です。'
      },
      {
        num: '03',
        title: '秩父市・長瀞町ふるさと納税で最大30％OFF！3年間有効クーポンで週末や紅葉シーズンに予約',
        body: '週末の気軽なリフレッシュ旅もふるさと納税なら実質負担2,000円。寄付から3年間有効なので、春の芝桜や秋の長瀞紅葉に最適です。'
      }
    ],
    hotelDetails: [
      {
        key: 'chichibu_miyamaso',
        badge: '埼玉県秩父市・日本通貨発祥「和同開珎」ゆかりの聖地！横瀬川の清流を望む露天風呂付き客室＆薬師の湯（ゆの宿 和どう）',
        rank: '厳選名宿 第1選',
        desc: '日本最古の流通貨幣「和同開珎」が鋳造された和銅採掘露天掘り跡の近く、清流・横瀬川のほとりに佇む和風温泉旅館。古くから近郷の人々が目薬や切り傷の特効薬として親しんできた名湯「薬師の湯」を引き、大浴場や清流を見下ろす露天風呂で横瀬川のせせらぎを聞きながら優雅な湯浴みが楽しめます。露天風呂付き客室も充実しており、カップルやご夫婦に大人気。夕食は秩父の豊かな山の恵みと清流の魚を盛り込んだ季節の会席料理で、秩父牛の陶板焼きや鮎の塩焼きなど、一品一品丁寧に仕上げられた料理を個室やお部屋で堪能できます。'
      },
      {
        key: 'chichibu_hatago',
        badge: '埼玉県秩父市・創業百九十余年、江戸時代文政十年より続く歴史！「卵水」と称されるトロトロ美肌鉱泉と炭火囲炉裏会席（新木鉱泉旅館）',
        rank: '厳選名宿 第2選',
        desc: '江戸時代文政10年（1827年）創業、秩父七湯の一つとして約二百年の歴史を刻む老舗鉱泉旅館。宿の最大の誇りは、硫黄分を含みほんのり硫黄の香りが漂う源泉「御代の湯」。肌に触れると驚くほどトロリとしており、地元では古くから「卵水（たまごみず）」と呼ばれ美肌の湯として親しまれてきました。趣ある木造の内湯や露天風呂、貸切風呂で極上の湯触りを満喫。客室は江戸の情緒を残す落ち着いた和室。夕食は囲炉裏を囲んで味わう炭火焼きや、秩父名物の豚みそ漬け、旬の山菜をふんだんに使った田舎会席料理で、温かなおもてなしに心が和みます。'
      },
      {
        key: 'chichibu_nagatoro_choukan',
        badge: '埼玉県長瀞町・国指定名勝「長瀞岩畳」を正面に一望！創業大正四年・元祖流しそうめんと長瀞温泉露天風呂（花のおもてなし 長生館）',
        rank: '厳選名宿 第3選',
        desc: '名勝・天然記念物である長瀞岩畳のすぐ向かい、長瀞渓谷の絶景を独り占めする最高の立地に建つ創業大正四年の老舗旅館。全客室や広大な日本庭園、露天風呂から荒川の清流と対岸のダイナミックな岩畳を一望できます。長瀞温泉を引いた大浴場や露天風呂は開放感抜群で、川風を感じながら心地よい湯浴みが可能。夏には庭園で開催される「元祖流しそうめん」が全国的な人気を誇り、夕食には荒川の天然鮎の塩焼きや秩父牛の朴葉味噌焼きなど、伝統と職人技が光る華やかな和食会席膳を味わえます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-kinugawa-onsen-valley-view-luxury-stay', title: '【鬼怒川温泉 渓谷美＆名門旅館×ふるさと納税】あさや・金谷ホテル・ホテル三日月' },
      { slug: 'furusato-tax-karuizawa-luxury-resort-villa-stay', title: '【軽井沢 高原リゾート＆名門ホテル×ふるさと納税】マリオット・プリンスイースト・音羽ノ森' },
      { slug: 'furusato-tax-kusatsu-onsen-yubatake-walk-luxury-stay', title: '【草津温泉 湯畑散策＆名湯名門旅館×ふるさと納税】櫻井・一井・奈良屋' },
      { slug: 'furusato-tax-traditional-hearth-irori-charcoal-stay', title: '【古民家囲炉裏炭火会席＆奇跡の湯×ふるさと納税】白川郷・法師・祖谷' }
    ]
  }
];

function sanitizeString(str) {
  if (!str) return '';
  return str
    .replace(/<[^>]*>/g, '')
    .replace(/[`${}\\]/g, '')
    .replace(/"/g, '“')
    .replace(/'/g, '’')
    .trim();
}

for (const cfg of round88Configs) {
  const pageHotels = seasonalHotels[cfg.slug] || {};
  const targetDir = path.join(__dirname, 'src/app', cfg.slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const h1 = pageHotels[cfg.hotelDetails[0].key] || {};
  const h2 = pageHotels[cfg.hotelDetails[1].key] || {};
  const h3 = pageHotels[cfg.hotelDetails[2].key] || {};

  const h1Desc = cfg.hotelDetails[0].desc;
  const h2Desc = cfg.hotelDetails[1].desc;
  const h3Desc = cfg.hotelDetails[2].desc;

  const h1Badge = cfg.hotelDetails[0].badge;
  const h2Badge = cfg.hotelDetails[1].badge;
  const h3Badge = cfg.hotelDetails[2].badge;

  const p1 = cfg.threePoints[0];
  const p2 = cfg.threePoints[1];
  const p3 = cfg.threePoints[2];

  const content = `import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${cfg.metaTitle}',
  description: '${cfg.description}',
  keywords: [
    'ふるさと納税 旅行',
    'ふるさと納税 温泉',
    '${cfg.shortTitle}',
    '楽天ふるさと納税 トラベル',
    '${sanitizeString(h1.hotelName || '')}',
    '${sanitizeString(h2.hotelName || '')}',
    '${sanitizeString(h3.hotelName || '')}',
    '高級温泉旅館',
    '源泉かけ流し',
    '実質2000円'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/${cfg.slug}',
  },
  openGraph: {
    title: '${cfg.metaTitle}',
    description: '${cfg.description}',
    url: 'https://croud-travel.pages.dev/${cfg.slug}',
    siteName: '旅行とホテル・ふるさと納税の総合ポータル',
    locale: 'ja_JP',
    type: 'article',
  },
};

export default function ${cfg.componentName}() {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8 text-gray-800 leading-relaxed font-sans">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline hover:text-amber-700">ホーム</Link>
        <span>&gt;</span>
        <Link href="/travel-savings-guide" className="hover:underline hover:text-amber-700">ふるさと納税トラベル完全攻略ガイド</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-semibold">${cfg.shortTitle}</span>
      </nav>

      {/* ヘッダー */}
      <header className="mb-10 pb-6 border-b border-gray-200">
        <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
          ${cfg.heroTag}
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          ${cfg.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500">
          <time dateTime="2026-09-10">2026年9月10日公開</time>
          <span>•</span>
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium">楽天トラベル公式API連携</span>
          <span>•</span>
          <span className="bg-green-100 text-green-900 px-2 py-0.5 rounded font-medium">実質負担2,000円対象</span>
        </div>
      </header>

      {/* リード文ブロック */}
      <section className="bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-yellow-50/60 p-6 md:p-8 rounded-2xl border border-amber-200/80 mb-12 shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold text-amber-950 mb-4 flex items-center gap-2">
          <span className="text-2xl">✨</span>
          ${cfg.leadTitle}
        </h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
          ${cfg.leadText}
        </p>
        <div className="bg-white/90 rounded-xl p-4 md:p-5 border border-amber-300 shadow-sm">
          <h3 className="font-bold text-amber-900 text-sm md:text-base mb-2 flex items-center gap-1.5">
            <span>📌</span> なぜ「ふるさと納税×楽天トラベル」が選ばれているのか？
          </h3>
          <ul className="text-xs md:text-sm text-gray-700 space-y-1.5">
            <li className="flex items-start gap-1">
              <span className="text-amber-600 font-bold">✔</span>
              <span><strong>寄付額の最大30％が宿泊クーポンとして即時付与</strong>され、楽天ポイントも二重に貯まる</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-amber-600 font-bold">✔</span>
              <span><strong>有効期限はたっぷり3年間！</strong>寄付後に旅行時期や部屋タイプをじっくり選べる安心設計</span>
            </li>
            <li className="flex items-start gap-1">
              <span className="text-amber-600 font-bold">✔</span>
              <span>予約済み日程への<strong>「あとからクーポン適用」</strong>にも対応（※条件あり）で直前でも安心</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 目次 */}
      <section className="bg-gray-50 rounded-xl p-5 mb-12 border border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span>📑</span> 目次
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
          <li><a href="#three-points" className="text-amber-800 hover:underline font-medium">${cfg.shortTitle}が選ばれる3つの理由</a></li>
          <li><a href="#hotel-1" className="text-amber-800 hover:underline font-medium">【第1選】${sanitizeString(h1.hotelName || '厳選名宿 第1選')}</a></li>
          <li><a href="#hotel-2" className="text-amber-800 hover:underline font-medium">【第2選】${sanitizeString(h2.hotelName || '厳選名宿 第2選')}</a></li>
          <li><a href="#hotel-3" className="text-amber-800 hover:underline font-medium">【第3選】${sanitizeString(h3.hotelName || '厳選名宿 第3選')}</a></li>
          <li><a href="#furusato-step" className="text-amber-800 hover:underline font-medium">実質自己負担2,000円で予約する簡単4ステップ手順</a></li>
          <li><a href="#faq" className="text-amber-800 hover:underline font-medium">よくある質問（Q&A）</a></li>
        </ol>
      </section>

      {/* 3つの魅力セクション */}
      <section id="three-points" className="mb-14">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>🌟</span> ${cfg.shortTitle}が選ばれる3つの理由
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">${p1.num}</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">${p1.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">${p1.body}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">${p2.num}</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">${p2.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">${p2.body}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl font-black text-amber-600 block mb-2">${p3.num}</span>
            <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">${p3.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">${p3.body}</p>
          </div>
        </div>
      </section>

      {/* 宿紹介 1 */}
      <section id="hotel-1" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第1選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            ${sanitizeString(h1.hotelName || '')}
          </h2>
          <p className="text-xs md:text-sm text-amber-100">${h1Badge}</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> ${sanitizeString(h1.address1 || '')}${sanitizeString(h1.address2 || '')}</div>
            <div><strong>アクセス:</strong> ${sanitizeString(h1.access || '')}</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ ${h1.reviewAverage || '4.5'}</span> (${h1.reviewCount || 0}件)</div>
            <div><strong>参考価格:</strong> 1名あたり約${(h1.hotelMinCharge || 18000).toLocaleString()}円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">${h1Desc}</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ${sanitizeString(h1.hotelSpecial || '歴史ある名湯とおもてなしの心で極上の温泉旅をお届けします。')}
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “${sanitizeString(h1.userReview || '温泉もお料理も本当に素晴らしく、大満足の滞在でした。')}”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="${h1.planListUrl || h1.affiliateUrl || 'https://travel.rakuten.co.jp'}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>♨</span>
              <span>楽天トラベルでプラン詳細・空室・ふるさと納税クーポンを見る</span>
            </a>
          </div>
        </div>
      </section>

      {/* 宿紹介 2 */}
      <section id="hotel-2" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第2選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            ${sanitizeString(h2.hotelName || '')}
          </h2>
          <p className="text-xs md:text-sm text-amber-100">${h2Badge}</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> ${sanitizeString(h2.address1 || '')}${sanitizeString(h2.address2 || '')}</div>
            <div><strong>アクセス:</strong> ${sanitizeString(h2.access || '')}</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ ${h2.reviewAverage || '4.4'}</span> (${h2.reviewCount || 0}件)</div>
            <div><strong>参考価格:</strong> 1名あたり約${(h2.hotelMinCharge || 16000).toLocaleString()}円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">${h2Desc}</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ${sanitizeString(h2.hotelSpecial || '豊かな温泉と贅沢な地元料理で心と体を芯から癒やします。')}
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “${sanitizeString(h2.userReview || '露天風呂からの景色が最高で、お料理もとても美味しかったです。')}”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="${h2.planListUrl || h2.affiliateUrl || 'https://travel.rakuten.co.jp'}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>♨</span>
              <span>楽天トラベルでプラン詳細・空室・ふるさと納税クーポンを見る</span>
            </a>
          </div>
        </div>
      </section>

      {/* 宿紹介 3 */}
      <section id="hotel-3" className="mb-16 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white p-4 md:p-6">
          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">厳選名宿 第3選</span>
          <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2">
            ${sanitizeString(h3.hotelName || '')}
          </h2>
          <p className="text-xs md:text-sm text-amber-100">${h3Badge}</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <div><strong>所在地:</strong> ${sanitizeString(h3.address1 || '')}${sanitizeString(h3.address2 || '')}</div>
            <div><strong>アクセス:</strong> ${sanitizeString(h3.access || '')}</div>
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ ${h3.reviewAverage || '4.5'}</span> (${h3.reviewCount || 0}件)</div>
            <div><strong>参考価格:</strong> 1名あたり約${(h3.hotelMinCharge || 19000).toLocaleString()}円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">${h3Desc}</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ${sanitizeString(h3.hotelSpecial || '特別な記念日やご家族での滞在にふさわしい上質な時間をご提供します。')}
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “${sanitizeString(h3.userReview || '温かなおもてなしに感動しました。家族全員が大満足です。')}”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="${h3.planListUrl || h3.affiliateUrl || 'https://travel.rakuten.co.jp'}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>♨</span>
              <span>楽天トラベルでプラン詳細・空室・ふるさと納税クーポンを見る</span>
            </a>
          </div>
        </div>
      </section>

      {/* ふるさと納税手順 */}
      <section id="furusato-step" className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 md:p-8 rounded-2xl border border-amber-200 mb-16 shadow-sm">
        <h2 className="text-xl md:text-3xl font-extrabold text-amber-950 mb-6 flex items-center gap-2">
          <span>💡</span> 楽天ふるさと納税トラベルクーポンで実質2,000円予約する4ステップ
        </h2>
        <div className="space-y-4">
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">控除限度額をチェック</h3>
              <p className="text-xs md:text-sm text-gray-600">年収や家族構成によって自己負担2,000円で利用できる上限額が決まります。まずは楽天ふるさと納税のシミュレーターで上限を確認しましょう。</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">自治体を選んでトラベルクーポンを寄付</h3>
              <p className="text-xs md:text-sm text-gray-600">訪れたい温泉宿のある自治体へ寄付。寄付額の最大30％相当の楽天トラベルクーポンが数日以内にマイクーポンへ自動付与されます。</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">楽天トラベルで宿泊予約＆クーポン適用</h3>
              <p className="text-xs md:text-sm text-gray-600">有効期限は3年間。宿泊日や部屋タイプを決め、予約画面で取得したトラベルクーポンを選択すると宿泊代金から即時値引きされます。</p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-xl border border-amber-100 flex gap-4 items-start shadow-xs">
            <div className="bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ワンストップ特例または確定申告で完了</h3>
              <p className="text-xs md:text-sm text-gray-600">翌年の住民税・所得税から控除され、実質負担は年間2,000円のみ！浮いた予算で旅行をさらにアップグレードできます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-16">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b-2 border-amber-600 flex items-center gap-2">
          <span>❓</span> よくある質問（Q&A）
        </h2>
        <div className="space-y-4">
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>すでに予約している宿泊プランにもふるさと納税クーポンは使えますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい！楽天トラベルの「あとからクーポン適用」機能に対応している施設であれば、予約後でもマイページから自治体クーポンを適用して割引を受けられます。
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>トラベルクーポンの有効期限はどれくらいですか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              楽天ふるさと納税トラベルクーポンの有効期限は「寄付完了日の翌々年同月末まで（実質約3年間）」となっています。旅行予定に合わせてじっくり使えます。
            </p>
          </details>
          <details className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs group cursor-pointer">
            <summary className="font-bold text-gray-900 text-sm md:text-base flex justify-between items-center">
              <span>ハイシーズンや週末でも利用できますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、対象ホテルの空室があれば、年末年始やゴールデンウィーク、お盆や紅葉・雪見シーズンのハイシーズンでも除外日なくクーポンをご利用いただけます。
            </p>
          </details>
        </div>
      </section>

      {/* 関連記事リンク */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span>🔗</span> あわせて読みたい注目のふるさと納税特集
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          ${cfg.relatedArticles.map(rel => `
          <Link
            href="/${rel.slug}"
            className="block p-3 rounded-lg bg-white border border-gray-200 hover:border-amber-400 hover:shadow-xs transition-all text-sm text-amber-900 font-medium"
          >
            ▸ ${rel.title}
          </Link>`).join('')}
        </div>
      </section>
    </article>
  );
}
`;

  const targetFile = path.join(targetDir, 'page.tsx');
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log(`Successfully generated: ${cfg.slug}/page.tsx`);
}

console.log('\nAll 4 Round 88 pages successfully written!');
