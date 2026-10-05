const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-japan-three-great-hot-springs-heritage-stay',
    title: '日本三名泉＆天下の名湯・格式ある老舗温泉旅館×ふるさと納税完全ガイド【2026年最新】有馬・草津・下呂',
    desc: '室町時代の詩僧・万里集九と江戸時代の儒学者・林羅山が絶賛した日本三名泉！兵庫「有馬温泉」太閤秀吉が愛した赤褐色の金泉と神戸牛会席、群馬「草津温泉」圧倒的湯量を誇る強酸性の名湯と湯畑の風情、岐阜「下呂温泉」絹のように滑らかなpH9.2の美肌湯と飛騨牛朴葉味噌。日本の温泉文化の頂点を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三名泉＆格式ある老舗温泉旅館×ふるさと納税ガイド',
    badge: '日本三名泉・天下の名湯特集',
    leadTitle: '幾千年の歴史が証明する極上の効能と風情。日本の温泉文化の頂点に君臨する名泉に泊まる',
    leadDesc: '日本各地に数千とある温泉地の中で、古より「日本三名泉」として揺るぎない名声を誇る三つのいで湯――神代の昔から湧き太閤秀吉が愛した兵庫の「有馬温泉」、日本一の自然湧出量を誇り万病を治すと言われる群馬の「草津温泉」、そして飛騨川のせせらぎとともに美肌の湯として名高い岐阜の「下呂温泉」。それぞれ泉質も風情も全く異なる三つの天下の名湯には、数奇屋造りの名建築や創業数百年の老舗旅館が佇み、極上の源泉かけ流し風呂とともに最高峰の会席料理でおもてなしをしてくれます。楽天ふるさと納税の宿泊クーポンを活用し、実質2,000円の自己負担で憧れの日本三名泉プレミアムステイをお楽しみください。',
    merits: [
      {
        title: '金泉・強酸性泉・アルカリ性単純泉！三大名泉の圧倒的な泉質力',
        desc: '鉄分と塩分が濃厚な有馬の金泉、殺菌力抜群の草津の湯畑源泉、美容液のようにトロリとした下呂の湯を源泉直通で満喫できます。'
      },
      {
        title: '湯畑・温泉街の石畳・飛騨川沿い散策へのアクセス抜群の老舗名宿',
        desc: '浴衣と下駄でカラコロと温泉街散策へ出かけられる好立地宿を厳選。夜のライトアップや外湯めぐりも快適に楽しめます。'
      },
      {
        title: '神戸牛・上州牛・飛騨牛！三大名泉が誇るご当地ブランド牛の饗宴',
        desc: '各宿自慢のブランド和牛ステーキやしゃぶしゃぶ、郷土会席を個室食事処で味わい、ふるさと納税でお得に贅沢できます。'
      }
    ],
    items: [
      {
        key: 'three_onsen_arima',
        themeTitle: '兵庫県神戸市北区ふるさと納税：日本最古の温泉・太閤秀吉ゆかりの「有馬温泉」赤湯（金泉）と神戸牛会席名旅館',
        themeDesc: '大地の恵みが凝縮された海水の約1.5倍から2倍の塩分濃度を誇る含鉄ナトリウム塩化物強塩泉「金泉」。赤褐色の濃厚な名湯に浸かり、世界に誇るブランド黒毛和牛「神戸牛」のサーロインステーキやすき焼きを味わう至高の贅沢です。'
      },
      {
        key: 'three_onsen_kusatsu',
        themeTitle: '群馬県草津町ふるさと納税：自然湧出量日本一「草津温泉」湯畑を望む露天風呂と伝統の湯もみ体験・老舗湯宿',
        themeDesc: '毎分3万リットル以上の温泉が湧き出す日本屈指の温泉地。湯けむり立ち込める湯畑の幻想的な夜景を眺め、強い酸性泉で心身を殺菌・デトックス。上州牛や群馬の山の幸を贅沢に盛り込んだ会席に舌鼓を打てます。'
      },
      {
        key: 'three_onsen_gero',
        themeTitle: '岐阜県下呂市ふるさと納税：天然の美容液と称される美肌の湯「下呂温泉」飛騨川の清流パノラマと飛騨牛朴葉味噌会席宿',
        themeDesc: '無色透明でほのかな硫黄の香りが漂うアルカリ性単純温泉。入浴後は肌がツルツルになると女性に大人気。香ばしい朴葉味噌で焼き上げる飛騨牛ステーキや鮎料理を地酒とともに味わう風情あふれる温泉旅です。'
      }
    ],
    crossLinks: [
      { title: '奇跡の名湯×強炭酸泉・泥湯・美肌温泉リトリートガイド', url: '/furusato-tax-bihada-medicinal-springs-retreat-stay', desc: '長湯・霧島・嬉野の本格薬湯治ステイ。' },
      { title: '日本三大薬湯＆奇跡の濃厚湯治宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-medicinal-baths-onsen-stay', desc: '有馬・草津・松之山の名湯治体験。' },
      { title: '登録有形文化財・宮大工名建築旅館×ふるさと納税完全ガイド', url: '/furusato-tax-tangible-cultural-property-architectural-ryokan-stay', desc: '修善寺・渋温泉・箱根の歴史宿。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-ancient-trails-historic-stay',
    title: '日本三大古道＆歴史巡礼の山林トレッキング名宿×ふるさと納税完全ガイド【2026年最新】熊野古道・木曽路・鯖街道',
    desc: '千年の祈りと交易の歴史が刻まれた石畳！和歌山「熊野古道」世界遺産の杉木立と川湯・湯の峰温泉老舗旅館、長野・岐阜「中山道木曽路」妻籠宿・馬籠宿の格子戸の町並みと木曽ヒノキ露天風呂宿、福井「鯖街道」御食国若狭と京を結ぶ熊川宿と焼き鯖・若狭フグ会席。歴史ロマンと自然に抱かれるトレッキングステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大古道＆歴史巡礼の山林トレッキング宿×ふるさと納税ガイド',
    badge: '日本三大古道・歴史街道特集',
    leadTitle: '幾百年の旅人が踏み固めた石畳と苔むす巨木。自然と歴史が織りなす古道リトリートステイ',
    leadDesc: '山々を越え、祈りや人々の生活を繋いできた日本を代表する三大古道――世界遺産「紀伊山地の霊場と参詣道」として世界中からハイカーが訪れる和歌山の「熊野古道」、中山道の山岳地帯に江戸時代の宿場町の面影をそのまま残す長野・岐阜の「木曽路（妻籠宿・馬籠宿）」、そして日本海の海の幸を京都の朝廷へと運んだ福井の「鯖街道（若狭街道）」。木漏れ日が揺れる苔むした石畳の古道を歩き、澄んだ鳥の声や清流のせせらぎに耳を澄ませる時間は、都会の喧騒を完全に忘れさせてくれます。古道沿いに佇む風情ある老舗旅館や町家宿に泊まり、滋味深い山菜料理や名物川魚、新鮮な海の幸を味わう特別な歴史旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '古道の登山口や宿場町の中心に位置する絶好のロケーション宿',
        desc: 'ハイキングや散策の起点に直結。手荷物預かりや早朝出発への対応などトレッカーに優しい宿を厳選しています。'
      },
      {
        title: '湯の峰温泉・木曽温泉・若狭湾の潮湯など歩き疲れた足を癒やす名湯',
        desc: '日本最古の共同浴場つぼ湯や香ばしい木曽ヒノキ風呂など、歩行後の筋肉痛や疲労を芯から解きほぐす名湯が揃います。'
      },
      {
        title: '熊野牛・木曽牛のすき焼き・名物焼き鯖など街道の歴史が育んだ美味',
        desc: '巡礼者や旅人を温かくもてなしてきた伝統の郷土料理を、ふるさと納税の宿泊割引で贅沢にグレードアップできます。'
      }
    ],
    items: [
      {
        key: 'ancient_trail_kumano',
        themeTitle: '和歌山県田辺市ふるさと納税：世界遺産「熊野古道中辺路」杉木立と石畳巡礼＆川原を掘る川湯温泉・日本最古の湯の峰温泉',
        themeDesc: '平安時代から歴代上皇や貴族が熊野三山を目指した祈りの道。苔むす発心門王子や大門坂を歩き、宿では川底から温泉が湧く川湯温泉や薬効高い湯の峰温泉に浸かり、熊野牛や鮎、めはり寿司を味わう神秘的な聖地旅です。'
      },
      {
        key: 'ancient_trail_kisoji',
        themeTitle: '長野県南木曽町・岐阜県中津川市ふるさと納税：中山道六十九次「木曽路・妻籠宿・馬籠宿」江戸の宿場町情緒と木曽ヒノキ温泉宿',
        themeDesc: '島崎藤村の『夜明け前』の舞台としても知られる木曽路。水車が回る坂の宿場町・馬籠宿から江戸情緒残る妻籠宿への峠越えトレッキングを楽しみ、天然ヒノキ風呂と信州サーモン、名物五平餅や木曽牛に舌鼓を打てます。'
      },
      {
        key: 'ancient_trail_sabakaido',
        themeTitle: '福井県小浜市・若狭町ふるさと納税：御食国と古都を結ぶ「鯖街道熊川宿」前川の清流と若狭湾の極上焼き鯖・フグ会席ステイ',
        themeDesc: '若狭で獲れた鯖を一昼夜かけて京都まで運んだ歴史街道。国の重要伝統的建造物群保存地区・熊川宿の白壁土蔵の町並みを巡り、名物浜焼き鯖や冬の若狭ふぐ、三方五湖の天然うなぎを味わう美食街道の旅です。'
      }
    ],
    crossLinks: [
      { title: '歴史街道・宿場町めぐり名宿×ふるさと納税完全ガイド', url: '/furusato-tax-historical-kaido-post-town-ryokan-stay', desc: '妻籠・馬籠・日光街道の江戸情緒旅。' },
      { title: 'お伊勢参り＆熊野古道×聖地巡礼宿ガイド', url: '/furusato-tax-ise-kumano-sacred-power-spot-stay', desc: '伊勢神宮・熊野三山・出雲大社の祈願ステイ。' },
      { title: '文豪の愛した名湯・文学ゆかりの老舗旅館×ふるさと納税完全ガイド', url: '/furusato-tax-literary-heritage-historic-onsen-stay', desc: '城崎・伊豆湯ヶ島・道後の文芸宿。' }
    ]
  },
  {
    slug: 'furusato-tax-whitewater-rafting-canyoning-adventure-stay',
    title: '激流ラフティング＆清流キャニオニング・水上アクティビティ宿×ふるさと納税完全ガイド【2026年最新】みなかみ利根川・吉野川・仁淀川',
    desc: '大自然のウォータースライダー！群馬「みなかみ利根川」関東屈指の激流ラフティングと水上温泉郷渓流露天風呂、徳島「吉野川小歩危」世界選手権開催の日本最高峰激流と祖谷秘境リゾート、高知「仁淀川」奇跡の仁淀ブルーパックラフト・カヤック体験と土佐あかうし会席。スリルと爽快感あふれるリバーアドベンチャーを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '激流ラフティング＆清流キャニオニング宿×ふるさと納税ガイド',
    badge: '激流ラフティング・キャニオニング特集',
    leadTitle: '大迫力の白波を突破し、天然のウォータースライダーを滑り降りる！大自然のアクティビティステイ',
    leadDesc: '日本列島が誇る清流と急峻な山岳地帯が生み出す極上のリバーアクティビティ――雪解け水で水量が最大となる春から夏にかけて国内最大の激流が押し寄せる群馬県「みなかみ（利根川上流部）」、世界ラフティング選手権が開催され日本一の激流として世界中のパドラーを魅了する徳島県「吉野川（小歩危峡）」、そしてクリスタルクリアな透明度を誇り「仁淀ブルー」として国内外から注目を集める高知県「仁淀川」。ウェットスーツに身を包み、大自然の急流を乗り越え滝壺へダイブした後は、川沿いの天然温泉露天風呂で冷えた身体をじっくりと温め、ご当地ブランド肉や川魚料理に舌鼓を打つ極上の休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: 'アクティビティツアー会社直結＆集合場所まで送迎付きの快適アクセス',
        desc: 'ボート乗り場やベースキャンプから至近。移動の手間なく着替えやシャワーも宿でスムーズに行えます。'
      },
      {
        title: 'アドベンチャーの疲れを芯から癒やす渓流展望露天風呂＆サウナ',
        desc: '水上温泉郷や祖谷秘境温泉の天然温泉で筋肉痛を和らげ、心地よい疲労感とともに極上の「ととのい」を得られます。'
      },
      {
        title: '上州牛ステーキ・阿波尾鶏BBQ・土佐鰹のタタキなどスタミナ満点ディナー',
        desc: '運動後の空腹を満たす豪快なご当地グルメディナーを、ふるさと納税クーポンで賢くお得に満喫できます。'
      }
    ],
    items: [
      {
        key: 'adventure_minakami',
        themeTitle: '群馬県みなかみ町ふるさと納税：春の雪解け大増水「利根川激流ラフティング」と水上高原・谷川岳を望む渓流温泉宿',
        themeDesc: '関東のアウトドアの聖地みなかみ。春のハイウォーター期にはグレード4の激流が連続する大興奮のラフティングを満喫し、宿では利根川の渓流を眼下に望む露天風呂や上州牛しゃぶしゃぶ、貸切サウナで極上のリフレッシュが叶います。'
      },
      {
        key: 'adventure_yoshinogawa',
        themeTitle: '徳島県三好市ふるさと納税：世界が認める日本屈指の激流「吉野川小歩危ラフティング」と祖谷渓秘境リゾート温泉',
        themeDesc: '切り立った大峡谷を激流が駆け抜ける吉野川小歩危セクション。大迫力の白波を乗り越える爽快感は国内随一。体験後は祖谷のかずら橋を観光し、断崖に建つ温泉ホテルの展望露天風呂と阿波尾鶏・祖谷そばを堪能できます。'
      },
      {
        key: 'adventure_niyodogawa',
        themeTitle: '高知県いの町・仁淀川町ふるさと納税：奇跡の透明度「仁淀ブルー」を漕ぎ進むパックラフト・SUP体験と土佐の旬菜隠れ宿',
        themeDesc: '川底の石や泳ぐ魚がくっきりと見える驚異の透明度。エメラルドブルーの水面を一人乗りパックラフトやSUPで滑るように進む至福の体験の後は、高知の山あいの温泉宿で土佐あかうしステーキや初鰹のタタキを味わい尽くせます。'
      }
    ],
    crossLinks: [
      { title: '日本三大急流＆爽快川下り名宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-rapids-river-activity-stay', desc: '最上川・富士川・球磨川のリバーサイド名湯旅。' },
      { title: '日本三大渓谷美＆エメラルドグリーンの峡谷温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-emerald-valley-gorge-hot-spring-stay', desc: '大歩危・黒部峡谷・清津峡の絶景秘湯。' },
      { title: '清流アクティビティ＆リバービュー温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-river-activity-canoe-fishing-resort-stay', desc: '長良川・四万十川・保津川の舟旅。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-pine-groves-ocean-stay',
    title: '日本三大松原＆白砂青松オーシャンビュー宿×ふるさと納税完全ガイド【2026年最新】三保松原・虹の松原・気比の松原',
    desc: '白砂青松の絶景パノラマ！静岡「三保松原」富士山を仰ぎ見る世界遺産の羽衣伝説リゾート、佐賀「虹の松原」唐津湾に弧を描く100万本の黒松林と呼子イカ・唐津城下町名旅館、福井「気比の松原」敦賀湾の茜色夕景と敦賀真鯛・若狭カニ会席。日本の伝統美を誇る海浜リゾートを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大松原＆白砂青松オーシャンビュー宿×ふるさと納税ガイド',
    badge: '日本三大松原・白砂青松特集',
    leadTitle: '碧い海と白い砂浜、風に揺れる緑の松林。歌川広重の浮世絵の世界に浸るシーサイドステイ',
    leadDesc: '古来より和歌や浮世絵に描かれ、日本人の美意識を象徴してきた「日本三大松原」――世界文化遺産・富士山の構成資産であり羽衣伝説で名高い静岡の「三保松原」、玄海国定公園に位置し約4.5kmにわたり100万本もの黒松が虹のように連なる佐賀の「虹の松原」、そして敦賀湾の穏やかな波打ち際に広がる福井の「気比の松原」。潮風に揺れる松の香り、波打ち際の白波、そして茜色に染まるマジックアワーの夕景は、まさに日本の海の原風景です。松原を望むオーシャンビューホテルや名門旅館に泊まり、駿河湾の桜えび、唐津の活イカ、日本海の越前ガニや敦賀真鯛など獲れたての海の幸を味わう極上の海旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '客室の窓や展望露天風呂から白砂青松と海パノラマを一望',
        desc: '松林のシルエット越しに昇る朝日や夕日、富士山の絶景をプライベート空間からゆったり鑑賞できます。'
      },
      {
        title: '松林の遊歩道や海岸線への散策・サイクリングが快適',
        desc: '宿の目の前から松原の遊歩道へ直結。潮風を感じながらの朝の散歩やレンタサイクルでのツーリングを満喫できます。'
      },
      {
        title: '呼子活イカ・駿河湾地魚・越前若狭ズワイガニなど極上オーシャングルメ',
        desc: '港町ならではの鮮度抜群の魚介類やブランド牛を贅沢に味わい、ふるさと納税クーポンでお得にアップグレードできます。'
      }
    ],
    items: [
      {
        key: 'pine_miho',
        themeTitle: '静岡県静岡市清水区ふるさと納税：世界遺産「三保松原」羽衣の松越しの霊峰富士展望と清水港マグロ・駿河湾海の幸ホテル',
        themeDesc: '約5万本の松林の向こうに駿河湾と雄大な富士山がそびえる奇跡の絶景。羽衣伝説の舞台を歩き、宿では美肌温泉と日本一の水揚げを誇る清水港直送の天然マグロや桜えび、しらす会席を堪能できます。'
      },
      {
        key: 'pine_karatsu',
        themeTitle: '佐賀県唐津市ふるさと納税：唐津湾に弧を描く100万本のクロマツ「虹の松原」と名物呼子イカ活造り・唐津城下町名旅館',
        themeDesc: '初代唐津藩主が防風林として植樹した全長約4.5kmの松原。松林ドライブや鏡山展望台からのパノラマを堪能し、宿では透明に透き通る名物「呼子イカの活造り」や佐賀牛ステーキに舌鼓を打てます。'
      },
      {
        key: 'pine_kehi',
        themeTitle: '福井県敦賀市ふるさと納税：日本海を望む白砂青松の景勝地「気比の松原」夕映えパノラマと敦賀真鯛・若狭フグ会席ステイ',
        themeDesc: '氣比神宮の神苑として国の名勝に指定される気比の松原。赤松と黒松が織りなす緑と白い砂浜のコントラストを愛で、敦賀さざなみリゾートで敦賀真鯛の兜煮や若狭フグ、越前がにを味わう北陸の贅沢旅です。'
      }
    ],
    crossLinks: [
      { title: '日本三景の絶景オーシャンビュー宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-scenic-views-heritage-stay', desc: '松島・天橋立・宮島の名門旅館。' },
      { title: '絶景オーシャンフロント×波音ヒーリングの海宿ふるさと納税完全ガイド', url: '/furusato-tax-oceanfront-wave-sound-healing-stay', desc: '稲取・南房総・読谷村の潮騒露天。' },
      { title: '絶景夕日・サンセット特等席の海宿×ふるさと納税完全ガイド', url: '/furusato-tax-sunset-ocean-magic-hour-stay', desc: '堂ヶ島・由良・白浜の茜色マジックアワー温泉。' }
    ]
  }
];

function generatePageCode(config) {
  const pageHotelsData = allHotels[config.slug] || {};

  return `import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${config.title}',
  description: '${config.desc}',
  keywords: 'ふるさと納税, 楽天トラベル, 旅行クーポン, 宿泊記, ホテル予約, 国内旅行, おすすめ宿, 温泉旅館',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/${config.slug}',
  },
  openGraph: {
    title: '${config.title}',
    description: '${config.desc}',
    url: 'https://croud-travel.pages.dev/${config.slug}',
    siteName: 'トラベル総合ナビ',
    locale: 'ja_JP',
    type: 'article',
  },
};

const OFFICIAL_FURUSATO_URL = '${officialFurusatoAffUrl}';

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs sm:text-sm font-semibold mb-4 border border-amber-400/30">
            <span>✨</span>
            <span>${config.badge}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-white drop-shadow-sm">
            ${config.h1}
          </h1>
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-4xl">
            ${config.leadTitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">●</span> 2026年最新検証済み</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">●</span> 楽天ふるさと納税宿泊クーポン対象</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">●</span> 実在確認済み公式提携</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Intro Card */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 border-l-4 border-indigo-600 pl-4">
            はじめに
          </h2>
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            ${config.leadDesc}
          </p>

          <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">💡</span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-amber-900 mb-1">
                  楽天ふるさと納税「トラベルクーポン」賢い活用法
                </h3>
                <p className="text-sm sm:text-base text-amber-800 leading-relaxed">
                  寄付額の最大30%分の宿泊クーポンが付与され、寄付当日から予約に即時利用可能。通常の楽天ポイント還元やお買い物マラソンとも併用できるため、実質自己負担2,000円で憧れの高級リゾートや名湯旅館に泊まれる最強の制度です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Merits */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-600 pl-4">
            この特集ならではの3大魅力
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${config.merits.map((m, idx) => `
            <div key="${idx}" className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-indigo-300 transition-colors">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mb-3">
                ${idx + 1}
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">${m.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">${m.desc}</p>
            </div>
            `).join('')}
          </div>
        </section>

        {/* Hotel Items by Theme */}
        ${config.items.map(item => {
          const hotelGroup = pageHotelsData[item.key] || { label: item.themeTitle, hotels: [] };
          const hotels = hotelGroup.hotels || [];

          return `
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-2.5 py-1 rounded-md">Featured Region</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              ${item.themeTitle}
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              ${item.themeDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            ${hotels.length > 0 ? hotels.map(h => `
            <div key="${h.hotelNo}" className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-[220px] bg-slate-200">
                <img
                  src="${h.hotelImageUrl || h.roomImageUrl || '/placeholder.jpg'}"
                  alt="${h.hotelName}"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                ${h.reviewAverage ? `
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow text-xs font-bold text-amber-600 flex items-center gap-1">
                  ★ ${h.reviewAverage} <span className="text-slate-500 font-normal">(${h.reviewCount || 0}件)</span>
                </div>
                ` : ''}
              </div>

              <div className="p-5 md:w-3/5 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <a href="${h.hotelInformationUrl}" target="_blank" rel="noopener noreferrer">
                      ${h.hotelName}
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    📍 ${h.address1 || ''}${h.address2 || ''}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    🚆 ${h.access || '詳細は施設情報をご確認ください'}
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    ${h.hotelSpecial || '四季折々の魅力と上質なホスピタリティでお迎えするおすすめの宿泊施設です。'}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">参考目安料金（1名）</span>
                    <div className="text-indigo-700 font-bold text-lg sm:text-xl">
                      ${h.hotelMinCharge ? `¥${h.hotelMinCharge.toLocaleString()}〜` : 'プラン詳細参照'}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="${h.hotelInformationUrl}"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-xl hover:bg-indigo-100 transition-colors"
                    >
                      詳細・宿泊プラン
                    </a>
                    <a
                      href={OFFICIAL_FURUSATO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-amber-600 rounded-xl shadow hover:opacity-95 transition-opacity"
                    >
                      寄付で宿泊
                    </a>
                  </div>
                </div>
              </div>
            </div>
            `).join('') : `
            <div className="p-6 bg-slate-50 rounded-xl border border-dashed border-slate-300 text-center text-slate-500">
              現在、該当地域の人気宿を厳選リサーチ中です。最新プランはふるさと納税公式ページよりご確認いただけます。
            </div>
            `}
          </div>
        </section>
          `;
        }).join('')}

        {/* Global CTA Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-950 rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs sm:text-sm font-bold mb-6 border border-amber-400/30">
            <span>🎟️</span>
            <span>楽天ふるさと納税×楽天トラベル 公式連携</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
            ふるさと納税で賢くお得に、憧れの極上宿へ
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            返礼品の宿泊クーポンは翌年以降の旅行にも活用でき、ポイント還元もフル適用。実質2,000円の自己負担でワンランク上の滞在をお楽しみください。
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <a
              href={OFFICIAL_FURUSATO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-lg hover:brightness-105 transition-all transform hover:-translate-y-0.5"
            >
              楽天ふるさと納税で宿を探す
            </a>
          </div>
        </section>

        {/* Cross Links Section */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 border-l-4 border-indigo-600 pl-4">
            あわせて読みたい関連特集ガイド
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${config.crossLinks.map((cl, idx) => `
            <Link
              key="${idx}"
              href="${cl.url}"
              className="block p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition-all group bg-slate-50/50"
            >
              <h3 className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                ${cl.title}
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                ${cl.desc}
              </p>
            </Link>
            `).join('')}
          </div>
        </section>
      </main>
    </div>
  );
}
`;
}

function main() {
  for (const conf of pagesConfig) {
    const dir = path.join(__dirname, 'src/app', conf.slug);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const filePath = path.join(dir, 'page.tsx');
    const code = generatePageCode(conf);
    fs.writeFileSync(filePath, code, 'utf8');
    console.log(`Generated: ${filePath}`);
  }
}

main();
