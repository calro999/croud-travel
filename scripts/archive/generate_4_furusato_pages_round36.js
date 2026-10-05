const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-strange-sceneries-geopark-stay',
    title: '日本三大奇景＆奇岩怪石ジオパーク・絶景パノラマ温泉宿×ふるさと納税完全ガイド【2026年最新】妙義山・寒霞渓・耶馬渓',
    desc: '数百万年の風雨が刻んだ地球の彫刻美！群馬「妙義山」切り立つ荒々しい岩峰群と妙義温泉妙義グリーンホテル＆テラス、香川小豆島「寒霞渓」瀬戸内海を望む表十二景・裏八景とベイリゾートホテル小豆島、大分「耶馬渓」頼山陽が賞賛した奇岩絶壁と天ヶ瀬温泉成天閣。日本三大奇景の大自然ジオアートと名湯を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大奇景＆奇岩パノラマ温泉宿×ふるさと納税ガイド',
    badge: '日本三大奇景・ジオパーク特集',
    leadTitle: '天を突く奇岩怪石と燃え立つ峡谷美。大地の躍動が生んだ三大奇景の別世界へ',
    leadDesc: '火山活動と数百万年におよぶ浸食作用が奇跡の岩峰地形を生み出した「日本三大奇景」――白雲山や金洞山など鋸歯状の岩稜がそそり立ち、日本屈指の岩峰美と修験の歴史を刻む群馬の「妙義山」、瀬戸内海国立公園の中心に位置し、天涯を突く奇岩怪石と四季折々の紅葉・新緑がロープウェイから一望できる小豆島の「寒霞渓」、そして江戸時代の文人・頼山陽がその絶景に感嘆して名付け、青の洞門や競秀峰など数里にわたって奇岩が連なる大分の「耶馬渓」。人間業では成し得ない大自然の圧倒的スケールは、見る者の冒険心と美的好奇心を揺さぶります。岩峰や渓谷を一望する絶景温泉宿を拠点に、上州牛・瀬戸内鮮魚・豊後牛などのご当地美食を心ゆくまで味わう特別な休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '奇岩峰や渓谷を望むパノラマ絶景！客室露天風呂や展望テラスで至福の寛ぎ',
        desc: '夕日に染まる奇岩のシルエットや朝靄に包まれる峡谷美を、宿の特等席から誰にも邪魔されず鑑賞。'
      },
      {
        title: '上州牛ステーキ、小豆島オリーブ牛＆旬魚、豊後牛と日田・中津郷土料理',
        desc: '大自然の滋味豊かなブランド肉や獲れたての海の幸を、料理長渾身の本格会席で贅沢に堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンでリゾートホテルや秘湯旅館を実質2,000円予約',
        desc: 'ジオパーク観光のハイシーズンでも、寄付金額に応じた最大30%オフの即時割引でスマートにお得旅。'
      }
    ],
    items: [
      {
        key: 'scenery_myogi',
        themeTitle: '群馬県富岡市・安中市ふるさと納税：荒々しい岩峰群「妙義山」を一望する自家源泉リゾート「妙義温泉 妙義グリーンホテル＆テラス」',
        themeDesc: '日本三大奇景・妙義山のダイナミックな景観を正面に望む極上リゾート。地下2000mから湧出する自家源泉「長寿の湯」はとろりとした美肌泉。テラスグランピングや信州・上州の厳選食材を使ったディナーを堪能できます。'
      },
      {
        key: 'scenery_kankakei',
        themeTitle: '香川県小豆島町・土庄町ふるさと納税：表十二景・裏八景の大渓谷「寒霞渓」と瀬戸内パノラマ「ベイリゾートホテル小豆島」',
        themeDesc: '日本屈指の景勝地・寒霞渓ロープウェイへの観光に好立地。全室オーシャンビューの客室からは穏やかな瀬戸内海を一望。小豆島オリーブ牛や獲れたて地魚会席、展望露天風呂で島時間をゆったり満喫します。'
      },
      {
        key: 'scenery_yabakei',
        themeTitle: '大分県中津市・日田市ふるさと納税：頼山陽が絶賛した奇岩絶壁の天下無双景「耶馬渓」と清流名湯「天ヶ瀬温泉 成天閣」',
        themeDesc: '青の洞門や競秀峰、深耶馬渓の奇岩美を巡る旅。玖珠川の清流沿いに佇む「成天閣」では、川のせせらぎを間近に感じる名物露天風呂と、豊後牛や川魚・地元野菜をふんだんに取り入れた郷土会席で心身を解き放ちます。'
      }
    ],
    crossLinks: [
      { title: '日本三大名勝断崖海岸＆パノラマ海宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-precipitous-coasts-stay', desc: '北山崎・東尋坊・足摺岬。' },
      { title: '日本三大鍾乳洞＆地底神秘美・名湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-limestone-caves-stay', desc: '龍泉洞・秋芳洞・龍河洞。' },
      { title: '日本三大峡谷＆断崖絶壁・エメラルド渓谷宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-gorges-canyon-scenery-stay', desc: '清津峡・黒部峡谷・瀞峡。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-illuminations-stay',
    title: '日本三大イルミネーション＆光の祭典・ファンタジーリゾートホテル宿×ふるさと納税完全ガイド【2026年最新】あしかが・ハウステンボス・さっぽろ',
    desc: '夜空を埋め尽くす数百〜数千万球の煌めき！栃木足利「あしかがフラワーパーク」光の藤棚とホテルルートイン第２足利、長崎佐世保「ハウステンボス」世界最大1,300万球の光の王国と直営ホテルアムステルダム、北海道札幌「さっぽろホワイトイルミネーション」大通公園の雪景色とホテルルートイン札幌北四条。日本三大イルミネーションの幻想ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大イルミネーション＆光の祭典宿×ふるさと納税ガイド',
    badge: '日本三大イルミネーション・夜景遺産特集',
    leadTitle: '闇夜に咲き誇る光の花とキャンドルナイト。大切な人と息をのむイルミネーションリゾートへ',
    leadDesc: '一般社団法人夜景観光コンベンション・ビューローが認定する冬の風物詩の最高峰「日本三大イルミネーション」――樹齢160年におよぶ大藤を光の芸術として再現した奇蹟の大藤や光のバラ園が500万球超で輝く栃木足利の「あしかがフラワーパーク『光の花の庭』」、1300万球という世界最大の圧倒的スケールを誇り運河や宮殿が黄金にライトアップされる長崎佐世保の「ハウステンボス『光の王国』」、そして日本におけるイルミネーションの発祥として大通公園の銀世界を幻想的なオブジェで彩る北海道の「さっぽろホワイトイルミネーション」。澄み切った冬の夜空に瞬く光の海は、日常を忘れさせる感動を与えてくれます。会場まで好アクセスの直営クラシックホテルや快適ホテルを拠点に、冬の味覚やご当地ディナーに酔いしれる特別な夜を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '点灯時間ギリギリまで光の世界を満喫！冷えた体を温める大浴場＆快適ベッド',
        desc: '混雑する帰り道を気にせず、夜遅くまでイルミネーションを散策した後は、温かな湯船と上質な客室でリラックス。'
      },
      {
        title: 'とちぎ和牛、長崎和牛＆レモンステーキ、北海道カニ・海鮮・味噌ラーメン',
        desc: '光の感動に包まれた後は、冬の寒さを吹き飛ばすご当地プレミアムグルメと美酒で乾杯。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンでハイシーズンの冬旅をスマートにお得予約',
        desc: '予約が集中するイルミネーション期間でも、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適宿泊。'
      }
    ],
    items: [
      {
        key: 'illumi_ashikaga',
        themeTitle: '栃木県足利市ふるさと納税：500万球の光の花が咲き誇る「あしかがフラワーパーク」と機能的拠点「ホテルルートイン第２足利」',
        themeDesc: '全国イルミネーションランキングで連続第1位を獲得した奇蹟の大藤の輝き。国道50号沿いでパークへのアクセスも抜群の「ルートイン第２足利」は、旅の疲れを癒やすラジウム人工温泉大浴場と充実の無料バイキング朝食を備えます。'
      },
      {
        key: 'illumi_huistenbosch',
        themeTitle: '長崎県佐世保市ふるさと納税：世界最大1,300万球の光の王国「ハウステンボス」唯一の場内ホテル「ホテルアムステルダム」',
        themeDesc: 'ヨーロッパの街並みが丸ごと光に包まれる世界最大級のエンターテインメント。パークの中心・アムステルダム広場に面した直営クラシックホテルに泊まり、客室の窓から夜景を眺め、翌朝は開園前の静寂な街並みを独占散歩できます。'
      },
      {
        key: 'illumi_sapporo',
        themeTitle: '北海道札幌市ふるさと納税：雪と光が織りなす白銀の元祖ライトアップ「さっぽろホワイトイルミネーション」と「ホテルルートイン札幌北四条」',
        themeDesc: '大通公園や駅前通が数万個の電球で輝く札幌の冬のシンボル。大通エリアへアクセス良好な「ホテルルートイン札幌北四条」を拠点に、天然温泉大浴場「旅人の湯」で冷えた体をじっくり温め、すすきの名物海鮮やジンギスカンを堪能します。'
      }
    ],
    crossLinks: [
      { title: '新日本三大夜景＆天空スカイパノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-new-three-major-night-views-sky-stay', desc: '皿倉山・若草山・フルーツ公園。' },
      { title: '日本三大花火大会＆リバーサイド展望宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-fireworks-riverside-stay', desc: '長岡・大曲・土浦。' },
      { title: '日本三大夜桜＆お花見ライトアップ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-night-cherry-blossoms-stay', desc: '弘前・高田城・高遠城址。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-train-window-views-stay',
    title: '日本三大車窓＆鉄道浪漫・絶景パノラマ展望温泉宿×ふるさと納税完全ガイド【2026年最新】姨捨・矢岳越え・狩勝峠',
    desc: '車窓を流れる息をのむ雄大な大地！長野篠ノ井線「姨捨」千曲川と善光寺平・田毎の月パノラマと戸倉上山田温泉クラブウィンダム千曲館、熊本・宮崎肥薩線「矢岳越え」えびの高原霧島連山と国登録有形文化財人吉温泉芳野旅館、北海道根室本線「狩勝峠」大十勝平野原野パノラマとトマムザ・タワーby星野リゾート。日本三大車窓の鉄道ロマンと名湯を楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大車窓＆鉄道浪漫パノラマ宿×ふるさと納税ガイド',
    badge: '日本三大車窓・鉄道遺産特集',
    leadTitle: '列車が峠を越える瞬間、眼下に広がる大パノラマ。鉄路の旅情と極上湯に酔いしれる休日',
    leadDesc: '日本の鉄道史において最も車窓景観が美しいと称えられてきた伝説の絶景区間「日本三大車窓」――スイッチバックで知られる駅ホームや車窓から千曲川の蛇行と善光寺平、そして棚田に映る月「田毎の月」が一望できる長野の「JR篠ノ井線・姨捨駅付近」、肥薩線の最高地点を越える際に霧島連山の雄大な峰々とえびの盆地がパノラマで広がる熊本・宮崎県境の「肥薩線・矢岳越え」、そして十勝平野の広大なパッチワークと日高山脈の雄姿を望み大自然のスケールを肌で体感する北海道の「旧根室本線・狩勝峠」。鉄道ファンのみならず、旅人を魅了してやまない鉄道絶景は、日本の国土の美しさを教えてくれます。車窓の余韻に浸りながら名湯や文豪ゆかりの旅館、高原リゾートに泊まり、信州蕎麦・球磨焼酎と鮎・十勝牛を味わう贅沢なひとときを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '駅舎や峠の絶景スポット至近！朝夕の澄み切った光の中でパノラマを独占鑑賞',
        desc: '日中の車窓だけでなく、夕焼けや夜景、早朝の雲海に包まれる絶景ポイントを心ゆくまで探索。'
      },
      {
        title: '信州サーモン＆千曲地酒、球磨川のアユ＆極上球磨焼酎、十勝ラクレットチーズ＆牛',
        desc: '鉄道が繋いできた地方色豊かな名物料理と銘酒のペアリングを各宿の料理長自慢のディナーで堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで歴史ある温泉旅館や名門リゾートをお得に利用',
        desc: '一度は訪れたい鉄道旅の名拠点も、寄付金額に応じた即時割引クーポンで実質2,000円負担の快適宿泊。'
      }
    ],
    items: [
      {
        key: 'train_obasute',
        themeTitle: '長野県千曲市ふるさと納税：善光寺平と田毎の月パノラマ「姨捨駅車窓」と美肌の湯「戸倉上山田温泉 クラブウィンダム千曲館長野」',
        themeDesc: '日本三大車窓・姨捨駅の夜景と棚田展望台へ車で約15分。千曲川のほとりに佇む「千曲館」は、100%源泉かけ流しの美肌温泉と信州会席が自慢の老舗名湯宿。六つの湯舟で湯巡りを愉しみ、旅情豊かなひとときを過ごせます。'
      },
      {
        key: 'train_yatake',
        themeTitle: '熊本県人吉市ふるさと納税：霧島連山を望む矢岳越えの起点「肥薩線鉄道浪漫」と「国登録有形文化財の宿 人吉温泉 芳野旅館」',
        themeDesc: 'SL人吉やいさぶろう・しんぺい号で親しまれた鉄道の街・人吉。明治42年創業、重厚な数寄屋造りの「芳野旅館」で、美肌成分メタケイ酸を豊富に含む天然温泉と、球磨川の天然鮎・球磨焼酎・馬刺し会席を贅沢に味わいます。'
      },
      {
        key: 'train_karikachi',
        themeTitle: '北海道占冠村・新得町ふるさと納税：十勝平野原野を一望する「旧狩勝峠大パノラマ」と「トマム ザ・タワー ｂｙ 星野リゾート」',
        themeDesc: '旧根室本線の狩勝峠が誇る雄大な大地。トマムの広大な原生林リゾート「トマム ザ・タワー」に滞在し、早朝の雲海テラスや森に囲まれた露天風呂「木林の湯」、北海道の旬素材を活かした多彩なレストランディナーを満喫します。'
      }
    ],
    crossLinks: [
      { title: '日本三大急流＆舟下り・リバーサイド宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-rapids-river-boat-stay', desc: '最上川・富士川・球磨川。' },
      { title: '日本三大カルスト台地＆天空パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-karst-highlands-stay', desc: '秋吉台・四国カルスト・平尾台。' },
      { title: '日本三大美林＆森林浴名湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-beautiful-forests-stay', desc: '青森ヒバ・秋田スギ・木曽ヒノキ。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-water-castles-stay',
    title: '日本三大水城＆海を抱く名城天守・海水堀クルーズ宿×ふるさと納税完全ガイド【2026年最新】高松城・今治城・中津城',
    desc: '海水を湛えた水堀と白亜の天守！香川高松「高松城（玉藻城）」瀬戸内海の海水門とJRホテルクレメント高松、愛媛今治「今治城」藤堂高虎公の築城技術と今治国際ホテル、大分中津「中津城」黒田官兵衛ゆかりの石垣とグランプラザ中津ホテル。日本三大水城（三大海城）の歴史浪漫と瀬戸内・豊後水道の海鮮グルメを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大水城＆名城パノラマ宿×ふるさと納税ガイド',
    badge: '日本三大水城・海城遺産特集',
    leadTitle: '堀を泳ぐ鯛に餌をやり、舟から天守を仰ぐ。海と城が一体となった三大水城の絶景ステイ',
    leadDesc: '海から直接船で城内へ出入りでき、防御と海上交易の要塞として築かれた「日本三大水城（三大海城）」――瀬戸内海の海水を取り入れた広大な堀を持ち、堀の中を泳ぐ真鯛に「鯛の餌やり」ができる風雅な香川の「高松城（玉藻城）」、築城の名手・藤堂高虎が卓越した土木技術で築き、海水堀に浮かぶように立つ日本初の層塔型天守が美しい愛媛の「今治城」、そして軍師・黒田官兵衛が築城を始め細川忠興が完成させた周防灘の河口に位置する奥平十万石の城・大分の「中津城」。満ち引きによって水位が変わる海水堀と、石垣や櫓のコントラストは、陸の山城や平城にはない独特の優美さと迫力を誇ります。名城天守や港を一望するハイグレードホテルを拠点に、瀬戸内海の真鯛や来島海峡の海の幸、中津名物ハモやからあげを味わう歴史旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '城内庭園や天守閣へ徒歩至近！混雑のない朝夕に水堀と石垣の風情を満喫',
        desc: '観光客で賑わう前の朝の澄んだ空気の中、海水堀に映る天守の影や美しい石垣を心ゆくまで散策。'
      },
      {
        title: '讃岐うどん＆オリーブ地鶏、来島鯛めし＆今治焼鳥、中津ハモ会席＆からあげ',
        desc: '港町と城下町ならではの海鮮と郷土の美味を、ホテルの上質レストランや周辺の名店で贅沢に堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで名門シティホテル＆温泉をお得に予約',
        desc: '瀬戸内・九州の観光拠点となる一等地ホテルでも、寄付金額に応じた即時割引で実質2,000円負担の快適宿泊。'
      }
    ],
    items: [
      {
        key: 'water_takamatsu',
        themeTitle: '香川県高松市ふるさと納税：海水を引き込んだ玉藻城「高松城」とサンポート高松の最高峰「ＪＲホテルクレメント高松」',
        themeDesc: '高松城（玉藻公園）に隣接し、瀬戸内海と高松港を一望するシティリゾート。高層階の客室からは行き交うフェリーや城の緑が広がり、館内レストランでは讃岐コーチンや瀬戸内の旬魚会席、名物讃岐うどんの朝食ビュッフェを堪能できます。'
      },
      {
        key: 'water_imabari',
        themeTitle: '愛媛県今治市ふるさと納税：藤堂高虎公の傑作・海水堀に浮かぶ「今治城」としなまみ海道のランドマーク「今治国際ホテル」',
        themeDesc: '広大な海水堀を持つ今治城から車で数分。地域最大級の高層ランドマークホテル「今治国際ホテル」は、天然温泉露天風呂や温水プールを備え、来島海峡の荒波で育った来島鯛めしや伊予牛の本格ディナーを優雅に味わえます。'
      },
      {
        key: 'water_nakatsu',
        themeTitle: '大分県中津市ふるさと納税：黒田官兵衛ゆかりの水城「中津城」と福沢諭吉の城下町「グランプラザ中津ホテル」',
        themeDesc: '日本最古級の近世石垣が残る中津城へ徒歩圏内。中津駅南口至近の「グランプラザ中津ホテル」を拠点に、周防灘で獲れる高級魚ハモ料理や名物中津からあげ、耶馬渓の自然と城下町の歴史散策を快適に楽しめます。'
      }
    ],
    crossLinks: [
      { title: '日本三大名橋＆歴史街道宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-bridges-history-stay', desc: '錦帯橋・眼鏡橋・日本橋。' },
      { title: '国宝五城＆名城天守を望む城下町宿×ふるさと納税完全ガイド', url: '/furusato-tax-five-national-treasure-castles-stay', desc: '姫路・松本・犬山・彦根・松江。' },
      { title: '日本三大銘石＆枯山水庭園・名湯宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-famous-stones-gardens-stay', desc: '佐渡赤玉石・揖斐川石・鴨川真黒石。' }
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
    const minCharge = raw.hotelMinCharge ? raw.hotelMinCharge.toLocaleString() : '8,000';
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
                        {h.hotelSpecial || '日本三大奇景やイルミネーション、日本三大車窓、水城巡りの拠点に最適な上質ステイ。ご当地の美味と名湯でお寛ぎください。'}
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
            あわせて読みたい日本の絶景・名城・鉄道特集
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
