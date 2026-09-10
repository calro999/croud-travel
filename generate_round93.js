const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

const articles = [
  {
    slug: 'furusato-tax-kurokawa-onsen-nyuto-tegata-stay',
    title: '【黒川温泉×ふるさと納税】入湯手形で巡る秘境露天風呂＆極上あか牛美食！里山の名門隠れ家宿完全ガイド｜山みず木・旅館わかば・山の宿新明館',
    desc: '熊本・阿蘇の奥深くに佇む日本屈指の人気温泉地・黒川温泉を楽天ふるさと納税でお得に旅する！「入湯手形」でめぐる風情ある露天風呂、渓流沿いの名門隠れ家「山あいの宿 山みず木」、化粧水風呂と囲炉裏会席の「旅館わかば」、名物洞窟風呂の「山の宿 新明館」を徹底解説。南小国町クーポン活用術を網羅。',
    keywords: '黒川温泉 ふるさと納税,黒川温泉 入湯手形 旅館,山みず木 ふるさと納税,新明館 洞窟風呂,南小国町 ふるさと納税 宿泊',
    targetCity: '熊本県南小国町',
    leadTitle: '雑木林に溶け込む里山情緒、渓流のせせらぎと湯巡り手形——黒川温泉で過ごす至高の隠れ家ステイ',
    leadP1: '阿蘇山と九重連山に抱かれた緑豊かな山あいに佇む黒川温泉。「街全体が一軒の宿、通りは廊下、旅館は客室、木々は庭の植木」という統一された景観づくりと自然保護の理念のもと、すべての旅館が木と土の温もりを大切にした純和風の佇まいを守り続けています。看板やネオンを排し、里山の原風景を残した温泉街を浴衣に下駄履きで歩く時間は、日本人が忘れかけていた旅の原点を思い出させてくれます。',
    leadP2: '黒川温泉の最大の魅力は、地元特産の小国杉で作られた「入湯手形」を使って、各宿自慢の趣向を凝らした露天風呂を巡れること。渓流沿いの大野天風呂、巨岩をくり抜いた野趣あふれる湯船、神秘的な洞窟風呂など、泉質も景観も異なる名湯が旅人を迎えます。そして夕食には、阿蘇の大自然が育んだブランド和牛「あか牛」やヤマメ、山菜を使った贅沢な会席料理。南小国町へのふるさと納税を活用すれば、寄付額の30%相当が宿泊クーポンとして還元され、憧れの隠れ家旅館へ驚くほどお得に滞在できます。',
    hotelsKey: 'furusato-tax-kurokawa-onsen-nyuto-tegata-stay',
    hotelItems: [
      {
        key: 'kurokawa_yamamizuki',
        tagline: '渓流のせせらぎと深緑に抱かれる黒川屈指の名門宿！川と一体になる大露天風呂「幽谷の湯」と滋味豊かな山里会席',
        detailTitle: '黒川温泉 山あいの宿 山みず木 —— 奥黒川の静寂に佇む隠れ家。大自然と溶け合う至極の湯浴みとおもてなし',
        features: [
          { title: '清流田の原川のすぐそばに広がる名物露天風呂「幽谷の湯」', desc: '川のせせらぎを手で触れられるほど間近に望む大露天風呂。原生林の木漏れ日とマイナスイオンに包まれながら、無色透明の柔らかな単純温泉に身を浸す至福の時間が流れます。' },
          { title: '自然の地形を活かした趣あふれる木造離れと客室', desc: '広い敷地内に点在する客室は、古材の梁や畳の香りが心地よい純和風空間。窓を開ければ渓流の音と鳥のさえずりが響き、日常の喧騒を完全に忘れさせてくれます。' },
          { title: '阿蘇の旬の恵みと名物あか牛を味わう創作山里会席', desc: '地元農家から仕入れる朝採れ野菜、川魚の塩焼き、熊本名物の馬刺し、そして柔らかく旨味の濃いあか牛の陶板焼きなど、丁寧に仕上げられた会席料理を堪能できます。' }
        ],
        reviewPoints: '楽天トラベル評価4.62点。「川沿いの露天風呂が言葉を失うほど美しかった」「スタッフの物腰が柔らかく、本当に心が洗われる滞在になった」と絶賛の口コミが絶えません。'
      },
      {
        key: 'kurokawa_wakaba',
        tagline: '化粧水のような美肌温泉と囲炉裏の温もり！女性やカップルに優しい細やかなおもてなしと地産地消の創作料理',
        detailTitle: '黒川温泉 旅館 わかば —— 木漏れ日揺れる小さな隠れ宿。トロトロの美肌湯と囲炉裏ダイニングの美食',
        features: [
          { title: '天然の保湿成分メタケイ酸を豊富に含む「化粧水の湯」', desc: '湯上がりの肌がしっとりすべすべになると評判の自家源泉。檜の露天風呂や岩風呂、宿泊者専用のプライベートな貸切風呂で、贅沢な美肌湯浴みを心ゆくまで満喫できます。' },
          { title: '落ち着きある和モダン客室と川沿いの静かなロケーション', desc: '田の原川のせせらぎを聞く落ち着いた和室。ベッドタイプの和洋室も用意され、シニアから女子旅まで快適に過ごせる温かな空間が広がっています。' },
          { title: '炭火で香ばしく焼き上げるあか牛や地鶏の囲炉裏会席', desc: '囲炉裏を囲む落ち着いたお食事処で供されるディナー。炭火でじっくり焼く旬の川魚や熊本県産あか牛のステーキ、自家製デザートまで、一品一品に真心のこもった料理が楽しめます。' }
        ],
        reviewPoints: '楽天トラベル評価4.56点、口コミ約700件。「化粧水の湯の名前通り肌がつるつるになった」「スタッフの温かい気配りと食事が本当に美味しかった」とリピーターが多数。'
      },
      {
        key: 'kurokawa_shinmeikan',
        tagline: '創業明治の老舗！宿の主人が十年かけて掘り抜いた名物「洞窟風呂」と田の原川にかかる風情ある屋根付き橋',
        detailTitle: '黒川温泉 山の宿 新明館 —— 黒川のシンボル的木造旅館。神秘的な地底温泉と茅葺きのノスタルジー',
        features: [
          { title: 'ノミと槌で掘り進めた全長30mの神秘的「洞窟風呂」', desc: '岩肌がむき出しになった洞窟の中に湯気が立ち込める唯一無二の名物風呂。ほのかな灯りに照らされた湯船はまるで異世界のような神秘的な雰囲気を醸し出しています。' },
          { title: '温泉街の中心に佇む屋根付き木橋と茅葺き屋根の情緒', desc: '宿の玄関へと続く木造の屋根付き橋は黒川温泉を代表するフォトスポット。川沿いのテラスや囲炉裏のあるロビーなど、昔ながらの日本の旅情が色濃く残ります。' },
          { title: '囲炉裏端でいただく炭火焼き山里料理と地酒', desc: '炭火の赤々と燃える囲炉裏端で味わう夕食。ヤマメの塩焼きや田楽、馬刺しやあか牛など、里山ならではの素朴で力強い美味しさを熊本の地酒とともに楽しめます。' }
        ],
        reviewPoints: '楽天トラベル評価4.65点。「洞窟風呂のアドベンチャー感と泉質の良さが最高」「古い木造建築の風情と川のせせらぎに癒やされた」と高い評価を獲得しています。'
      }
    ],
    areaGuide: {
      title: '黒川温泉 入湯手形露天めぐり＆阿蘇観光モデルルート',
      points: [
        { name: '入湯手形（1,500円）の上手な使い方と巡り方', text: '黒川温泉旅館組合の案内所「風の舎」や各旅館で購入できる木製の「入湯手形」。加盟28軒の旅館の中から好きな3軒の露天風呂に入浴できます。有効期限は半年間あり、1枚を複数人で使うことはできませんが、個性豊かな湯巡り体験として必須のアイテムです。' },
        { name: '鍋ヶ滝（なべがたき）と阿蘇大観峰の絶景ドライブ', text: '黒川温泉から車で約20分、水のカーテンを裏側から眺められる神秘の滝「鍋ヶ滝」。さらに阿蘇外輪山の最高峰「大観峰」からは、阿蘇五岳（涅槃像）とカルデラ盆地を見渡す世界屈指の大パノラマが広がります。' },
        { name: '黒川温泉街のスイーツ＆地ビール食べ歩き', text: '温泉街の小径には、パティスリー麓の焼きたてシュークリームや、どらどらバーガー、地ビール「湯上がりビール」など、湯上がりのそぞろ歩きにぴったりの名物スイーツ＆ご当地グルメが並びます。' }
      ]
    },
    furusatoStepTitle: '熊本県南小国町ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 南小国町の「楽天トラベルクーポン」を返礼品で選定', desc: '楽天ふるさと納税で「熊本県南小国町」の宿泊クーポン（寄付額の30%相当補助）を申し込みます。寄付完了と同時に楽天アカウントへ自動付与されます。' },
      { step: 'Step 2: 3年間の有効期間内で温泉旅行をじっくり計画', desc: 'クーポンの有効期限は発行からたっぷり3年間。新緑の初夏や紅葉の秋、雪景色が美しい冬など、希望の季節に合わせて宿泊日を自由に選択できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポンを適用して即時値引き', desc: '山みず木、旅館わかば、新明館などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに割り引かれます。' }
    ]
  },
  {
    slug: 'furusato-tax-manza-onsen-milky-sulfur-stay',
    title: '【万座温泉×ふるさと納税】日本一の高濃度硫黄泉！標高1800mの雲上露天風呂＆満天星空ステイガイド｜万座プリンスホテル・万座高原ホテル・日進舘',
    desc: '日本一の硫黄含有量を誇る名湯・万座温泉を楽天ふるさと納税で満喫！標高1,800メートルの高地に広がる乳白色のにごり湯露天風呂「こまくさの湯」を擁する万座プリンスホテル、4種の自家源泉を巡る石庭露天風呂の万座高原ホテル、創業百五十年の湯治名門・日進舘を徹底比較。嬬恋村クーポン活用術も網羅。',
    keywords: '万座温泉 ふるさと納税,万座プリンスホテル ふるさと納税,万座高原ホテル クーポン,日進舘 万座 宿泊,嬬恋村 ふるさと納税 楽天トラベル',
    targetCity: '群馬県嬬恋村',
    leadTitle: '標高1,800mの雲上に広がる奇跡の乳白色湯、夜空を埋め尽くす天の川——万座温泉で味わう極上の湯治体験',
    leadP1: '上信越高原国立公園内、標高約1,800メートルの山岳地帯に位置する万座温泉は、「星に一番近い温泉」として名高い日本屈指の高所温泉郷です。白根山の山懐から湧き出る温泉は、硫黄の含有量が日本一を誇る超濃厚な酸性硫黄泉。エメラルドグリーンから乳白色へと変化するにごり湯は、美肌作用はもちろん、冷え性や神経痛、疲労回復に抜群の効果を発揮し、古くから多くの人々を惹きつけてやまない名湯です。',
    leadP2: '万座のハイライトは、視界を遮るもののない大自然と一体化する雲上の大露天風呂。昼は雄大な山並みと白樺の原生林、夜は澄み切った高冷地ならではの満天の星空や天の川を湯船から仰ぎ見る感動体験が待っています。群馬県嬬恋村へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより名門リゾートや老舗湯治宿へお得に宿泊でき、心洗われる雲上リトリートを最高のコストパフォーマンスで満喫できます。',
    hotelsKey: 'furusato-tax-manza-onsen-milky-sulfur-stay',
    hotelItems: [
      {
        key: 'manza_prince',
        tagline: '標高1800mの天空に浮かぶ絶景露天風呂「こまくさの湯」！乳白色のにごり湯と満天の星空パノラマ',
        detailTitle: '万座温泉 万座プリンスホテル —— 山岳パノラマと開放感の極み。星空に近い高原リゾート',
        features: [
          { title: '雄大な山並みを見渡す名物露天風呂「こまくさの湯」', desc: '標高1,800mの斜面にせり出すように造られた絶景露天風呂。乳白色の濃厚な硫黄泉に浸かりながら、眼下に広がる渓谷美と遠くの山々を一望する大パノラマは圧巻です。' },
          { title: '女性専用・混浴露天風呂を備えた多彩な湯処', desc: '専用の湯浴み着で安心して楽しめる混浴露天風呂のほか、女性専用露天風呂や内湯も完備。カップルや家族で同じ絶景を共有できる貴重な温泉体験が叶います。' },
          { title: '高原の恵みを味わう和洋中ブッフェ＆会席ディナー', desc: '嬬恋村特産のキャベツや高原野菜、上州牛や群馬県産もち豚など、地元の新鮮素材をふんだんに取り入れた充実のビュッフェ料理が宿泊者の舌を喜ばせます。' }
        ],
        reviewPoints: '楽天トラベル評価3.79点、口コミ2100件超。「露天風呂からの景色と夜の満天の星空が圧巻」「乳白色の硫黄泉に入ると肌がすべすべになり体の芯から温まる」と絶景温泉の評価が極めて高い名門宿です。'
      },
      {
        key: 'manza_kogen',
        tagline: '黄・緑・白と異なる4つの自家源泉！渓流沿いに広がる名物石庭露天風呂「百泉の湯」で究極の泉質めぐり',
        detailTitle: '万座温泉 万座高原ホテル —— 8つの湯船が並ぶ石庭露天風呂。色彩豊かな源泉掛け流しパラダイス',
        features: [
          { title: '4つの自家源泉が注ぐ圧巻の石庭露天風呂「百泉の湯」', desc: '渓流沿いの大自然の中に広がる8つの露天風呂。万座唯一の「黄色い湯」をはじめ、透明、緑、白濁と色も成分も異なる自家源泉をその場で湯巡りできる贅沢な温泉施設です。' },
          { title: '万座プリンスホテルの絶景露天風呂も無料で利用可能', desc: '宿泊者はシャトルバスや徒歩で姉妹館「万座プリンスホテル」の露天風呂も無料で相互利用可能。万座の名湯を余すところなく味わい尽くすことができます。' },
          { title: 'カジュアルに楽しむ高原バイキング＆リーズナブルな連泊プラン', desc: '好きなものを自由に選べる和洋中バイキング。気取らない雰囲気とリーズナブルな価格設定で、じっくりと湯治を楽しみたい温泉ファンや長期滞在者に最適です。' }
        ],
        reviewPoints: '楽天トラベル評価4.08点、口コミ2000件超。「百泉の湯の種類の多さと開放感が素晴らしい」「姉妹館のプリンスホテルの風呂にも入れてお得感が抜群」と温泉好きから熱烈な支持を集めています。'
      },
      {
        key: 'manza_nisshinkan',
        tagline: '創業百五十余年・万座最古の木造湯治宿！総檜造りの名物大浴場「長寿の湯」と心身を癒やす健康プログラム',
        detailTitle: '万座温泉 日進舘 —— 万座の原点を受け継ぐ奇跡の湯治場。九つの天然温泉とぬくもりの木造建築',
        features: [
          { title: '天然木に囲まれた総檜造りの名湯大浴場「長寿の湯」', desc: '木の温もりと硫黄の香りに包まれる風情満点の大浴場。苦湯、姥湯、ささ湯など、異なる効能を持つ湯船が並び、昔ながらの本格的な湯治文化を肌で体感できます。' },
          { title: '満天の星空と雲海を仰ぐ展望露天風呂「極楽湯」', desc: '本館から少し歩いた高台に佇む露天風呂「極楽湯」。昼は雄大な熊四郎山のパノラマ、夜は満天の星空を眺めながら、源泉100％の白濁湯に浸かる時間はまさに極楽そのものです。' },
          { title: '健康に配慮したヘルシーなビュッフェと毎夜のフロアショー', desc: '地元産の新鮮野菜や玄米、身体に優しい和食を中心としたバイキング。ロビーでは毎晩コンサートや健康セミナーなどの催しが開かれ、滞在を楽しく彩ります。' }
        ],
        reviewPoints: '楽天トラベル評価4.23点、口コミ約2500件。「お湯の質は全国の温泉でも間違いなくトップクラス」「長寿の湯と極楽湯の雰囲気が最高で何泊もしたくなる」と根強い湯治ファンに愛されています。'
      }
    ],
    areaGuide: {
      title: '万座温泉周辺のハイキング・星空観賞＆嬬恋村ドライブ',
      points: [
        { name: '万座空吹（からぶき）と熊四郎洞窟の遊歩道散策', text: '万座温泉の名物スポット「空吹」。昔の噴火口から今も硫黄の噴気がモクモクと立ち上る迫力の光景を間近で見学できます。また、縄文時代の土器が出土した「熊四郎洞窟」への遊歩道ハイクも人気です。' },
        { name: '志賀草津高原ルートの絶景ドライブ（雪の回廊・新緑・紅葉）', text: '日本一標高の高い国道（渋峠・標高2,172m）を通る「志賀草津高原ルート」。春の開通直後の巨大な「雪の回廊」、夏の新緑と高山植物、秋の全山紅葉と、息をのむ絶景ドライブコースです。' },
        { name: '愛妻の丘と嬬恋高原キャベツ畑のパノラマ', text: '広大なキャベツ畑がどこまでも広がる嬬恋高原。「愛妻家の聖地」として知られる「愛妻の丘」からは、浅間山と広大な緑の絨毯を見渡すロマンチックなパノラマが広がります。' }
      ]
    },
    furusatoStepTitle: '群馬県嬬恋村ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「群馬県嬬恋村」のクーポンを獲得', desc: '楽天ふるさと納税で「嬬恋村」のトラベルクーポン（寄付額の30%相当補助）を申し込みます。寄付完了後、即座に楽天アカウントへ付与されます。' },
      { step: 'Step 2: 3年間の有効期間内でベストシーズンを予約', desc: 'クーポンの有効期限は発行から3年間。スキーや雪見露天の冬、涼しい夏の避暑、紅葉の秋など、自分の好みに合わせて宿泊日程を選べます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用', desc: '万座プリンスホテル、万座高原ホテル、日進舘などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。' }
    ]
  },
  {
    slug: 'furusato-tax-naruko-onsen-historic-cure-stay',
    title: '【鳴子温泉郷×ふるさと納税】千年の湯治文化と多彩な源泉めぐり！美肌硫黄泉＆宮城美食ステイガイド｜湯元吉祥・鳴子観光ホテル・鳴子風雅',
    desc: '日本にある10種類の泉質のうち8種類が集まる奇跡の温泉郷・鳴子温泉を楽天ふるさと納税でお得に旅する！共立リゾートの和モダン宿「湯元 吉祥」、創業四百年の乳白色名湯「鳴子観光ホテル」、大人の隠れ家リゾート「鳴子風雅」を徹底紹介。鳴子峡の絶景やこけしの街歩き、大崎市トラベルクーポン活用術を網羅。',
    keywords: '鳴子温泉 ふるさと納税,鳴子観光ホテル ふるさと納税,湯元吉祥 クーポン,鳴子風雅 楽天トラベル,大崎市 ふるさと納税 宿泊',
    targetCity: '宮城県大崎市',
    leadTitle: '千百年の歴史を誇る奥州の三名湯、立ち上る硫黄の香り——鳴子温泉郷で心と体を解きほぐす本格湯治旅',
    leadP1: '宮城県北部、江合川の清流沿いに広がる鳴子温泉郷は、鳴子・東鳴子・川渡・中山平・鬼首の5つの温泉地からなる東北屈指の巨大温泉郷です。承和4年（837年）の鳥谷ヶ森大噴火によって熱湯が噴出したと伝えられ、千百余年の歴史を誇ります。その最大の特徴は驚異的な泉質の豊かさ。日本に存在する10種類の主泉質のうち、実に8種類がこの狭い地域に集中しており、宿ごとに全く異なる色・香り・肌触りの湯を楽しめる「生きた温泉博物館」です。',
    leadP2: '温泉街には伝統工芸品「鳴子こけし」の工房が並び、カランコロンと下駄の音を響かせながら外湯「滝の湯」や「早稲田桟敷湯」をめぐる情緒あふれる風景が広がります。さらに紅葉の名所として名高い「鳴子峡」の絶景や、仙台牛・みやぎ美澄豚、地元の山菜など宮城の美食も旅の大きな楽しみ。宮城県大崎市へのふるさと納税を活用すれば、30%相当のトラベルクーポンにより名門旅館や最新リゾートホテルへお得に宿泊でき、本物の名湯を心ゆくまで堪能できます。',
    hotelsKey: 'furusato-tax-naruko-onsen-historic-cure-stay',
    hotelItems: [
      {
        key: 'naruko_yumoto',
        tagline: '高台から温泉街を見下ろす共立リゾートの和モダン宿！源泉掛け流しの四つの無料貸切風呂と宮城の山海会席',
        detailTitle: '鳴子温泉 湯元 吉祥（共立リゾート） —— 伝統の温泉街に誕生した洗練のモダン湯宿。多彩な湯処と無料サービス',
        features: [
          { title: '予約不要・無料で何度でも入れる四つの源泉掛け流し貸切風呂', desc: '檜風呂や岩風呂など趣の異なる4つの貸切風呂。空いていれば何度でも自由に利用でき、大切な人と気兼ねなく鳴子の名湯をプライベートに満喫できます。' },
          { title: '開放感あふれる大浴場と庭園露天風呂', desc: '自家源泉から引く滑らかな湯。広々とした内湯と自然の風を感じる露天風呂で、旅の疲れを心地よく癒やすことができます。' },
          { title: '宮城の食材を盛り込んだ豪華和食会席と夜鳴きそば', desc: '旬の山海の幸を美しく盛り付けた夕食コース。湯上がり処のアイスや乳酸菌飲料、夜食のあっさり醤油ラーメン「夜鳴きそば」など、共立リゾートならではの充実した無料サービスが大好評です。' }
        ],
        reviewPoints: '楽天トラベル評価4.37点、口コミ1500件超。「4つの貸切風呂が素晴らしく温泉を心ゆくまで堪能できた」「夕食・朝食ともに品数が多く味も大満足」と高い支持を得ています。'
      },
      {
        key: 'naruko_masuya',
        tagline: '創業四百年の伝統を守る老舗旅館！美肌の乳白色硫黄泉「源蔵の湯」と宮城の豊かな郷土会席料理',
        detailTitle: '鳴子温泉 源蔵の湯 鳴子観光ホテル —— 鳴子の象徴たる名門旅館。とろみのある白濁硫黄泉と心温まるおもてなし',
        features: [
          { title: 'とろりとした肌触りの乳白色硫黄泉「源蔵の湯」', desc: '創業以来湧き出続ける自家源泉。空気に触れることで美しい乳白色に変化するアルカリ性の硫黄泉は、角質をやさしく落とし肌を整える至極の美肌湯です。' },
          { title: '鳴子温泉駅徒歩3分の便利な立地と純和風の落ち着き', desc: '温泉街の中心に位置し、駅や外湯、こけし通りへの散策に最適。館内は清潔感にあふれ、ゆったりとした和室でくつろぎの時間を過ごせます。' },
          { title: '宮城の旬素材と三陸の海の幸を味わう本格会席', desc: '地元・大崎平野で収穫された美味しいお米や宮城のブランド牛、三陸直送の新鮮魚介が並ぶ豪華会席。伝統旅館ならではの上品な味付けが好評です。' }
        ],
        reviewPoints: '楽天トラベル評価4.25点、口コミ1100件超。「お湯のトロトロ感と硫黄の香りが最高で感動した」「スタッフの方々の温かい笑顔と挨拶に癒やされた」と温泉と接客に定評があります。'
      },
      {
        key: 'naruko_unagiyu',
        tagline: '鳴子の自然に佇む大人のための温泉リゾート！名湯の癒やしとライブキッチンで焼き上げるみやぎ美澄豚グリル会席',
        detailTitle: '鳴子風雅 —— 静寂と美食に癒やされる大人の隠れ家。モダンなデザイン空間と五感を刺激する創作ディナー',
        features: [
          { title: '静かな大人の時間を楽しむ和モダンリノベーション空間', desc: '全館が落ち着いたモダンデザインに統一されたスタイリッシュな宿。ライブラリーラウンジやバー、テラスなど、大人が静かにリラックスできる空間が充実しています。' },
          { title: '鳴子の名湯を満喫する大浴場と貸切露天風呂', desc: '豊かな湯量を誇る鳴子の湯を引いた温泉大浴場。日頃のストレスを解きほぐす柔らかな湯と、四季折々の自然の移ろいを感じられる湯浴みが魅力です。' },
          { title: 'ライブキッチンで仕上げるみやぎ美澄豚と宮城の美食', desc: 'レストランの鉄板カウンターで焼き上げられる地元ブランド豚や特選牛のグリル。見た目も華やかな創作会席が特別な旅の夜を華麗に演出します。' }
        ],
        reviewPoints: '楽天トラベル評価3.87点、口コミ2100件超。「お洒落な雰囲気で夫婦やカップル旅行にぴったり」「ライブキッチンのステーキがとても美味しかった」と落ち着いた滞在を求める層に人気です。'
      }
    ],
    areaGuide: {
      title: '鳴子温泉街のこけし散歩＆鳴子峡絶景観光ガイド',
      points: [
        { name: '紅葉の絶景「鳴子峡」と大深沢遊歩道ハイク', text: '深さ約100メートルの大峡谷が紅葉で錦に染まる東北屈指の絶景スポット「鳴子峡」。見晴台から眺める「大深沢橋」と電車の通過シーンはまさに絵画のような美しさ。遊歩道でのハイキングも心地よい森林浴になります。' },
        { name: '滝の湯の酸性泉と共同浴場めぐり', text: '鳴子温泉神社の境内下にある共同浴場「滝の湯」（入浴料300円）。白濁した強酸性の硫黄泉が木樋から打たせ湯として注がれる昔ながらの共同浴場で、温泉ファンなら一度は入るべき名所です。' },
        { name: '鳴子こけし通りでの絵付け体験と栗だんご', text: '駅前通りに軒を連ねるこけし工房では、自分だけのこけしを作れる絵付け体験が人気。また、蒸したてアツアツのお餅にみたらし餡がたっぷりかかった深瀬の「栗だんご」は必食のご当地スイーツです。' }
      ]
    },
    furusatoStepTitle: '宮城県大崎市ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「宮城県大崎市」のクーポンを獲得', desc: '楽天ふるさと納税で「大崎市」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。' },
      { step: 'Step 2: 3年間の有効期間内で鳴子峡紅葉や冬の湯治を計画', desc: 'クーポンの有効期限は発行から3年間。紅葉シーズンの10月〜11月はもちろん、雪見風呂が楽しめる冬、新緑の春など、都合に合わせて利用できます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用', desc: '湯元吉祥、鳴子観光ホテル、鳴子風雅などの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。' }
    ]
  },
  {
    slug: 'furusato-tax-echigo-yuzawa-onsen-snow-country-stay',
    title: '【越後湯沢温泉×ふるさと納税】新幹線直結！川端康成「雪国」の文学名湯＆魚沼産コシヒカリ美食ステイ完全ガイド｜高半・松泉閣花月・NASPAニューオータニ',
    desc: '東京から上越新幹線で約70分！川端康成の名作『雪国』の舞台・越後湯沢温泉を楽天ふるさと納税でお得に旅する。川端康成が逗留した創業九百年の老舗「雪国の宿 高半」、全館畳敷きと四つの露天風呂が自慢の「松泉閣 花月」、ニューオータニ直営の本格温泉リゾート「NASPAニューオータニ」を徹底比較。新潟県湯沢町クーポン活用術を網羅。',
    keywords: '越後湯沢温泉 ふるさと納税,雪国の宿高半 ふるさと納税,松泉閣花月 クーポン,NASPAニューオータニ 宿泊,湯沢町 ふるさと納税 楽天トラベル',
    targetCity: '新潟県湯沢町',
    leadTitle: '「国境の長いトンネルを抜けると雪国であった」——越後湯沢温泉で巡る文学の足跡と極上の米・酒・湯治ステイ',
    leadP1: 'ノーベル文学賞作家・川端康成が不朽の名作『雪国』を執筆したことで世界的に知られる越後湯沢温泉。東京駅から上越新幹線でわずか約70分という抜群のアクセスを誇りながら、谷川連峰の雄大な山々に抱かれた白銀の別世界が広がります。平安時代末期に源泉が発見されたと伝わる歴史ある湯は、肌に優しく柔らかなアルカリ性単純温泉。湯上がりの肌がしっとりと潤い、長旅の疲れをじんわりと解きほぐしてくれます。',
    leadP2: '越後湯沢の旅をさらに特別なものにするのが、日本一の米どころ南魚沼が誇る「魚沼産コシヒカリ」の炊きたてご飯と、新潟が世界に誇る銘酒（八海山・鶴齢・上善如水など）の数々。さらに冬のスキー＆スノーボード、秋の紅葉トレッキング、夏の爽やかな高原アクティビティと、四季を通じて魅力が尽きません。新潟県湯沢町へのふるさと納税を利用すれば、30%相当のトラベルクーポンにより名旅館や一流リゾートホテルへお得に滞在でき、贅を尽くした雪国ステイが実現します。',
    hotelsKey: 'furusato-tax-echigo-yuzawa-onsen-snow-country-stay',
    hotelItems: [
      {
        key: 'yuzawa_takahan',
        tagline: '創業九百余年・川端康成が「雪国」を執筆した歴史宿！かすみ草の部屋と源泉100％掛け流し天然名湯「卵の湯」',
        detailTitle: '越後湯沢湯元 卵の湯 雪国の宿 高半 —— 文豪の筆が走った静寂の高台。湧き出たままの奇跡の源泉掛け流し',
        features: [
          { title: '湧き出たまま一切加水・加温なしの極上源泉「卵の湯」', desc: '湯沢温泉発祥の源泉をそのまま掛け流す贅沢な浴槽。ほのかな硫黄の香りと細かい湯花が舞い、温泉成分がそのまま肌に染み渡る極上の湯浴みを体感できます。' },
          { title: '川端康成が逗留した客室「かすみ草の間」を保存', desc: '川端康成が昭和初年に滞在し小説『雪国』を執筆した部屋が当時のまま大切に保存・公開。資料室には貴重な直筆原稿や映画の資料などが展示され、文学散歩を満喫できます。' },
          { title: '南魚沼産コシヒカリと越後の旬の味覚を味わう田舎会席', desc: '地元農家から直送される最高峰の魚沼産コシヒカリの釜炊きご飯。新潟の地酒とともに、日本海の鮮魚や山の恵みを取り入れた滋味豊かな会席料理を味わえます。' }
        ],
        reviewPoints: '楽天トラベル評価4.72点。「源泉掛け流しのお湯が本当に素晴らしく何度でも入りたくなる」「かすみ草の間の見学と高台からの越後湯沢の景色に感動した」と高い支持を得ています。'
      },
      {
        key: 'yuzawa_shosenkaku',
        tagline: '全館畳敷きの温もりあふれる純和風旅館！四つの露天風呂と南魚沼産コシヒカリを極める釜炊き会席',
        detailTitle: '越後湯沢温泉 松泉閣 花月 —— 裸足で歩く心地よさ。風情あふれる庭園風呂と細やかなおもてなし',
        features: [
          { title: '玄関から廊下まで全館畳敷きの心地よい和の空間', desc: 'スリッパを使わず素足で歩ける畳敷きの館内。足元から伝わるイ草の温もりと、和モダンに統一された設えが、旅人を優しく包み込みます。' },
          { title: '庭園露天風呂や釜風呂など趣の異なる四つの湯船', desc: '岩造りの露天風呂や大きな釜風呂、檜風呂など、庭園の緑や雪景色を眺めながらゆったりと湯巡りを楽しめる大浴場。柔らかな名湯で体の芯まで温まります。' },
          { title: '炊きたての南魚沼産コシヒカリと越後牛の贅沢会席', desc: 'お米の甘みと香りが際立つ釜炊きご飯。にいがた和牛や旬の山菜、日本海直送の鮮魚など、新潟の豊かな食文化を贅沢に盛り込んだ会席料理が絶品です。' }
        ],
        reviewPoints: '楽天トラベル評価4.53点。「全館畳敷きが本当に快適でリラックスできた」「ご飯が驚くほど美味しくスタッフの接客も温かい」とファミリーや夫婦旅行に大好評です。'
      },
      {
        key: 'yuzawa_naspa',
        tagline: 'ホテルニューオータニ直営の本格温泉リゾート！二百五十坪の大浴場と極上バイキング・スキー直結の充実施設',
        detailTitle: '越後湯沢温泉 NASPAニューオータニ —— 一流ホテルのホスピタリティとリゾートの解放感。全世代対応の高原ステイ',
        features: [
          { title: '男女各250坪を誇る圧倒的スケールの温泉大浴場', desc: '広々とした内湯とジャグジー、露天風呂、サウナを完備した大浴場。スキーや観光で疲れた体を広大な湯船でゆったりと癒やすことができます。' },
          { title: 'ニューオータニ伝統のローストビーフ＆豪華ビュッフェ', desc: 'シェフが目の前でカッティングする伝統の特製ローストビーフをはじめ、和洋中の熟練シェフが手掛ける豪華ディナーバイキング。スイーツコーナーも大充実です。' },
          { title: 'スキーヤー専用ゲレンデ「NASPAスキーガーデン」直結', desc: 'ホテル直結のゲレンデはスノーボード全面滑走禁止のスキーヤー専用。ファミリーやビギナーも安心してスキーを楽しめる理想的なスノーリゾート環境です。' }
        ],
        reviewPoints: '楽天トラベル評価4.44点、口コミ2100件超。「バイキングのローストビーフとケーキが絶品」「スキー場直結で温泉も広く家族全員が大満足」と高評価を集めています。'
      }
    ],
    areaGuide: {
      title: '越後湯沢駅周辺の観光・ぽんしゅ館＆南魚沼グルメ散策',
      points: [
        { name: '越後湯沢駅構内「ぽんしゅ館」で新潟の全酒蔵きき酒体験', text: '越後湯沢駅直結の「ぽんしゅ館 越後湯沢店」。コインを購入して500円で5種類のお酒を試飲できる巨大なきき酒マシンが並び、新潟県内約90の全蔵元の銘酒を飲み比べできます。名物の「爆弾おにぎり」や酒風呂「湯の沢」も併設されています。' },
        { name: '湯沢高原パノラマパークと世界最大級ロープウェイ', text: '温泉街から世界最大級（166人乗り）のロープウェイに乗って標高1,000mの山頂へ。春〜秋は高山植物や雲海テラスの絶景、ジップラインなどのアクティビティが楽しめます。' },
        { name: '清津峡渓谷トンネル（十日町）へのアートトリップ', text: '越後湯沢から車で約30分の日本三大峡谷「清津峡」。トンネル終点にある水鏡のパノラマステーションは、渓谷の岩肌と水面が一体化するSNSでも大人気のアートスポットです。' }
      ]
    },
    furusatoStepTitle: '新潟県湯沢町ふるさと納税×楽天トラベルクーポン活用手順',
    furusatoSteps: [
      { step: 'Step 1: 楽天ふるさと納税で「新潟県湯沢町」のクーポンを獲得', desc: '楽天ふるさと納税で「湯沢町」のトラベルクーポン（寄付額の30%相当補助）を返礼品として申し込みます。寄付完了と同時にアカウントへクーポンが付与されます。' },
      { step: 'Step 2: 3年間の有効期間内で冬のスキーや秋の紅葉を計画', desc: 'クーポンの有効期限は発行から3年間。冬のスキーシーズンはもちろん、新緑トレッキングや避暑、秋の新米シーズンなど、都合に合わせて日程を組めます。' },
      { step: 'Step 3: 楽天トラベル予約画面でクーポン割引を適用', desc: '雪国の宿 高半、松泉閣 花月、NASPAニューオータニなどの対象宿を予約する際、確認画面でクーポンを選択。宿泊代金から30%相当額がダイレクトに値引きされます。' }
    ]
  }
];

function generateArticlePage(art) {
  const hotelObj = allHotels[art.hotelsKey] || {};

  const hotelCardsCode = art.hotelItems.map((h, idx) => {
    const data = hotelObj[h.key] || {};
    const hotelName = data.hotelName || '名門温泉旅館';
    const imgUrl = data.hotelImageUrl || 'https://placehold.co/800x500/e2e8f0/1e293b?text=Hotel+Photo';
    const rating = data.reviewAverage || 4.5;
    const revCount = data.reviewCount || 100;
    const chargeStr = data.hotelMinCharge ? ('¥' + Number(data.hotelMinCharge).toLocaleString() + '〜') : '要問い合わせ';
    const address = (data.address1 || '') + ' ' + (data.address2 || '');
    const affiliateUrl = data.affiliateUrl || 'https://travel.rakuten.co.jp/';
    const hotelNo = data.hotelNo || '';

    const featuresCode = h.features.map(f => {
      return `
                  <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/60">
                    <h5 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-600">✓</span> ${f.title}
                    </h5>
                    <p className="text-stone-600 leading-relaxed">${f.desc}</p>
                  </div>`;
    }).join('');

    return `
          {/* ホテル ${idx + 1} */}
          <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 transition hover:shadow-md">
            <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src="${imgUrl}"
                alt="${hotelName}"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                第${idx + 1}選
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1.5 rounded-full font-bold shadow">
                ★ ${rating}（口コミ ${revCount}件）
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">${art.targetCity}</span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 leading-snug">
                  ${hotelName}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-amber-800">
                  ${h.tagline}
                </p>
              </div>

              <div className="border-t border-b border-stone-100 py-4 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base font-serif">
                  ${h.detailTitle}
                </h4>
                <div className="grid gap-3 text-xs sm:text-sm text-stone-700">
                  ${featuresCode}
                </div>
              </div>

              {/* レビュー抜粋 */}
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs sm:text-sm space-y-1.5">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <span>💬</span> 実際の宿泊者からの評価・口コミ
                </span>
                <p className="text-stone-700 leading-relaxed">${h.reviewPoints}</p>
              </div>

              {/* 宿基本情報 */}
              <div className="text-xs text-stone-500 grid sm:grid-cols-2 gap-2 bg-stone-50 p-4 rounded-xl">
                <div>住所: ${address}</div>
                <div>最寄り駅・アクセス: ${data.access || data.nearestStation || '最寄り駅より送迎あり'}</div>
                <div>参考料金: <span className="font-bold text-stone-800">${chargeStr}</span></div>
                <div>ホテル番号: No.${hotelNo}</div>
              </div>

              {/* アフィリエイト予約ボタン */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="${affiliateUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3 px-6 rounded-xl shadow transition text-sm flex items-center justify-center gap-2"
                >
                  <span>楽天トラベルで空室・プランを見る</span>
                  <span>→</span>
                </a>
                <a
                  href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-amber-100 hover:bg-amber-200 text-amber-900 font-semibold py-3 px-6 rounded-xl transition text-sm flex items-center justify-center gap-1.5"
                >
                  <span>ふるさと納税クーポン獲得</span>
                </a>
              </div>
            </div>
          </article>`;
  }).join('\n');

  const areaPointsCode = art.areaGuide.points.map(pt => {
    return `
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/60 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="text-amber-600">◆</span> ${pt.name}
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">${pt.text}</p>
            </div>`;
  }).join('\n');

  const stepsCode = art.furusatoSteps.map(st => {
    return `
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 space-y-2">
              <div className="font-bold text-amber-300 text-sm">${st.step}</div>
              <p className="text-stone-200 leading-relaxed">${st.desc}</p>
            </div>`;
  }).join('\n');

  return `import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${art.title}',
  description: '${art.desc}',
  keywords: '${art.keywords}',
  openGraph: {
    title: '${art.title}',
    description: '${art.desc}',
    type: 'article',
    url: 'https://croud-travel.pages.dev/${art.slug}',
  },
  alternates: {
    canonical: 'https://croud-travel.pages.dev/${art.slug}',
  },
};

export default function FurusatoTaxArticle() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 leading-relaxed font-sans">
      {/* ヒーローヘッダー */}
      <header className="relative bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-amber-50 py-16 px-4 md:px-8 border-b border-amber-900/50 shadow-2xl">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30 mb-2">
            <span>楽天ふるさと納税 宿泊クーポン完全攻略</span>
            <span>•</span>
            <span>自治体公認 宿泊割引</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white font-serif leading-tight">
            ${art.title}
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto pt-2 leading-relaxed">
            ${art.desc}
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400">
            <span>対象自治体: <strong className="text-amber-300">${art.targetCity}</strong></span>
            <span>•</span>
            <span>還元率: 寄付額の最大30%</span>
            <span>•</span>
            <span>有効期限: クーポン獲得から3年間</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* リード文セクション */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            ${art.leadTitle}
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ${art.leadP1}
          </p>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            ${art.leadP2}
          </p>
          <div className="bg-amber-50 rounded-2xl p-4 sm:p-5 border border-amber-200/80 text-amber-950 text-xs sm:text-sm space-y-2">
            <h3 className="font-bold text-amber-900 flex items-center gap-2">
              <span>💡</span> この記事でわかること
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2 text-stone-800 list-disc list-inside">
              <li>ふるさと納税で泊まれる名門宿のリアルな魅力と特徴</li>
              <li>楽天トラベルクーポンを使った最大割引予約の手順</li>
              <li>失敗しない現地観光モデルルート＆名物グルメ</li>
              <li>予約済みでも間に合う「クーポンあとから適用」のやり方</li>
            </ul>
          </div>
        </section>

        {/* 楽天トラベル クーポン獲得バナー導線 */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest font-bold text-amber-200">Rakuten Travel Furusato Tax</p>
            <h3 className="text-lg sm:text-xl font-bold font-serif">${art.targetCity}のふるさと納税クーポンをチェック</h3>
            <p className="text-xs text-rose-100">寄付額の最大30%オフ！3年間有効・予約済み日程にも適用可能</p>
          </div>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-rose-700 font-extrabold px-6 py-3 rounded-xl shadow hover:bg-stone-100 transition text-sm flex items-center gap-1.5"
          >
            <span>クーポン一覧を見る</span>
            <span>→</span>
          </a>
        </div>

        {/* 厳選ホテル徹底解剖 */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              ふるさと納税で泊まる厳選名宿3選
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              実際に楽天トラベルで圧倒的な高評価を獲得している名門ホテル・老舗旅館をピックアップ
            </p>
          </div>

${hotelCardsCode}
        </section>

        {/* 周辺観光・グルメガイド */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 border-l-4 border-amber-700 pl-4">
            ${art.areaGuide.title}
          </h2>
          <div className="grid gap-4">
${areaPointsCode}
          </div>
        </section>

        {/* ふるさと納税活用ステップ */}
        <section className="bg-gradient-to-br from-amber-900 via-stone-900 to-stone-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">How to Use Coupon</span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-50">
              ${art.furusatoStepTitle}
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              初めての方でも迷わず利用できる3ステップ。予約済みのプランにも後から適用可能です。
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm">
${stepsCode}
          </div>

          <div className="text-center pt-2">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-amber-500 text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg hover:opacity-95 transition"
            >
              <span>楽天ふるさと納税トラベルクーポンを獲得する</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* 内部リンク・ハブ導線 */}
        <section className="border-t border-stone-200 pt-8 space-y-4">
          <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900">
            関連するふるさと納税トラベル特集
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-600">
            <li>
              <Link href="/travel-savings-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> ふるさと納税×旅行 完全攻略ハブページトップ
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-after-booking-discount-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 予約済みでも間に合う！楽天トラベル「あとから適用」ガイド
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-travel-beginners-complete-guide" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 超初心者向け ふるさと納税で旅行に安く泊まるマニュアル
              </Link>
            </li>
            <li>
              <Link href="/furusato-tax-kinugawa-onsen-valley-luxury-stay" className="hover:text-amber-800 underline flex items-center gap-1.5 py-1">
                <span>▸</span> 鬼怒川温泉 渓谷美と大露天風呂・あさやバイキング特集
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
`;
}

for (const art of articles) {
  const dir = path.join(__dirname, 'src/app', art.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const content = generateArticlePage(art);
  const filePath = path.join(dir, 'page.tsx');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Generated: ${filePath} (${content.length} chars)`);
}
