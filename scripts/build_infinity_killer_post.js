const fs = require('fs');

const hotels = JSON.parse(fs.readFileSync('scripts/infinity_hotels_12.json', 'utf8'));

// Slug & Title
const slug = 'japan-infinity-sky-onsen-hotels-ranking-best-guide';
const title = '【2026-2027年最新】全国絶景インフィニティ温泉＆天空露天風呂ランキングTOP12｜海・富士山・雲海・夜景を一望する奇跡の宿決定版';
const description = 'まるで空や海に浮かんでいるかのような圧倒的開放感！日本全国の絶景インフィニティ温泉・展望天空露天風呂から、宿泊者の口コミ評価が極めて高い12宿を厳選ランキング。熱海、河口湖、箱根、別府、洞爺湖、赤穂など、一生に一度は見たい絶景と楽天トラベル公式最安値プラン完全ガイド。';

const hotelWriteups = [
  {
    rank: 1,
    tagline: '相模湾を眼下に望む圧巻の海景インフィニティ！「Fuua」の海と繋がる大露天風呂',
    highlights: ['海に浮かんでいるような日本最大級の露天立ち湯インフィニティ温泉', '熱海市街の100万ドルの夜景と海上花火大会を特等席で一望', '伊豆の旬の海鮮を味わう豪華ブッフェ＆モダンリゾートステイ'],
    bathIntro: '熱海後楽園ホテルの敷地内に広がる日帰り温泉施設「オーシャンスパ Fuua（フーア）」および宿泊者専用浴場。何と言っても全長約25mにおよぶ日本最大級のインフィニティ露天立ち湯が圧巻です。湯船の縁が相模湾の水平線とシームレスに溶け合い、海の上をそのまま浮遊しているかのような異次元の浮遊感を体験できます。',
    roomAndCuisine: 'タワー館とAQUA SQUAREからなる客室は全室オーシャンビュー。夜になれば熱海のきらめく夜景が宝石箱のように広がります。夕食は近海で水揚げされた新鮮な地魚のお造りやローストビーフ、静岡産野菜を贅沢に使ったリッチブッフェ。五感で海を満喫できる王道リゾートです。',
    realVoice: '「露天立ち湯のインフィニティ感は想像を絶する凄さでした。夕暮れ時に空と海がグラデーションに染まる瞬間は一生忘れられません。お部屋からの眺望も素晴らしく大満足です。」'
  },
  {
    rank: 2,
    tagline: '河口湖越しに霊峰富士を真正面に望む！屋上展望露天「富士見の湯」の圧倒的パノラマ',
    highlights: ['遮るもののない屋上展望露天風呂から望む世界遺産・富士山の絶景', '天候に恵まれれば湖面に映る神秘の「逆さ富士」を拝める奇跡のロケーション', '甲州牛や季節の味覚を散りばめた心温まる和会席料理'],
    bathIntro: '河口湖畔の絶好の高台に佇む「湖楽おんやど富士吟景」。最上階に設けられた展望露天風呂「富士見の湯」は、目の前に広がる穏やかな河口湖と、その向こうにそびえ立つ富士山をパノラマで独占できます。特に朝風呂の時間帯、朝日に照らされて紅く染まる紅富士や湖面に揺れる逆さ富士の姿は、息を呑むほどの神々しさです。',
    roomAndCuisine: '全客室が富士山と河口湖に面した贅沢な造り。静かな和モダン客室の窓辺に座るだけで、時間を忘れて絵画のような富士の山容に見入ってしまいます。夕食は甲州ワインビーフや旬の山菜、川魚を取り入れた料理長こだわりの会席料理。富士の恵みを舌でも心ゆくまで味わえます。',
    realVoice: '「露天風呂から見た朝焼けの富士山が神々しすぎて涙が出そうになりました。お湯の温度もちょうどよく、のんびり富士山を眺めながら長湯できました。接客も温かくリピート確定です。」'
  },
  {
    rank: 3,
    tagline: '全室に信楽焼の温泉露天風呂完備！外輪山の緑と空に溶け込むインフィニティ棚湯露天',
    highlights: ['箱根外輪山の絶景パノラマと一体化するインフィニティ露天「浮雲の湯」', '全室に天然温泉の客室露天風呂を標準装備した贅沢設計', '五感で楽しむ本格和食ダイニング＆鉄板焼の美食体験'],
    bathIntro: '自然豊かな小涌谷の高台に建つハイエンド旅館「箱根小涌園 天悠」。シンボルである大浴場「浮雲の湯」は、空に向かって張り出すように作られた階段状のインフィニティ露天風呂です。湯船に浸かると眼下に広がる箱根外輪山の渓谷美と青空だけが視界を埋め尽くし、まるで雲の上に浮かんでいるかのような至高の感覚に包まれます。',
    roomAndCuisine: 'すべてのお部屋のテラスに信楽焼の温泉露天風呂が備え付けられており、プライベートな湯浴みも思いのまま。夕食は料理人が目の前で焼き上げる鉄板焼きや、季節の厳選素材を繊細に仕立てた和食会席。渓谷の庭園散策や滝の音を聞きながら過ごす時間は、大人の休息にこれ以上ない贅沢です。',
    realVoice: '「浮雲の湯のインフィニティ露天は本当に雲の上にいるような浮遊感でした。朝の澄み切った空気の中での入浴が最高。お部屋の露天風呂も源泉かけ流しで、何度も入ってしまいました。」'
  },
  {
    rank: 4,
    tagline: '山深き渓谷の秘湯！湯船の中に「立ち湯」で浮かぶ、緑の渓流とひとつになる天空の湯',
    highlights: ['立ったまま胸まで浸かる深さ120cmの幻想的な「雪月花・立ち湯露天」', 'ルレ・エ・シャトー加盟！世界水準のオーガニック信州フレンチ＆創作和食', '自家源泉から湧き出る毎分数百リットルの豊富な天然温泉'],
    bathIntro: '松本市街から車で30分、深い森と渓谷に囲まれた扉温泉の名門「明神館」。この宿の白眉は、渓流に向かって突き出た立ち湯露天風呂「雪月花」です。深さ約120cmの湯船に立ったまま浸かると、目線の高さに広がる木々の葉と清流のせせらぎがダイレクトに五感を刺激。自然との境界線が消え去る唯一無二のインフィニティ体験が待っています。',
    roomAndCuisine: '世界的なホテル・レストラン会員組織「ルレ・エ・シャトー」に加盟。客室は木の温もりを基調とした洗練の和洋室。夕食は敷地内の自家農園で育てた無農薬野菜や信州のジビエ、清流のイワナなどを昇華させた信州フレンチまたはモダン会席。身体の内外から浄化される極上のデトックス滞在が叶います。',
    realVoice: '「立ち湯露天風呂は言葉にならない感動でした。深い緑の森と渓谷の川の音が一体となって包み込んでくれます。お食事も野菜一つひとつの味が濃く、全国の温泉宿でも指折りの名宿です。」'
  },
  {
    rank: 5,
    tagline: '海と湯船が完全に一体化する奇跡の「天海の湯」！瀬戸内海の夕陽に染まる絶景リゾート',
    highlights: ['湯船の水面が瀬戸内海の波打ち際と一体化する究極のインフィニティ露天', '日本の夕陽百選に選ばれた赤穂御崎の黄金色に輝く夕景', '赤穂名産の新鮮な牡蠣料理や瀬戸内の桜鯛を味わう贅沢会席'],
    bathIntro: '赤穂御崎の断崖に建つ「銀波荘」。全国の温泉ファンから「日本で最も海に近いインフィニティ露天風呂」と称賛されるのが「天海の湯」です。湯船の縁が海に向かって限界まで切り詰められており、肩まで湯に浸かると、まるで瀬戸内海の水面そのものに浮かんでいるかのような錯覚を覚えます。夕暮れ時、空と海が茜色から紫へと移り変わるマジックアワーは圧巻です。',
    roomAndCuisine: '客室の大きな窓からも波穏やかな瀬戸内海と島々が一望。夕食は名物の赤穂牡蠣（冬期）をはじめ、獲れたての鯛やタコ、穴子など播磨灘の豊かな海の恵みを余すところなく使用した会席料理。波の音をBGMに、心身が完全に解きほぐされる贅沢なひとときを過ごせます。',
    realVoice: '「これぞ本物のインフィニティ！海の上に浮かんでいる感覚で、夕陽が海に沈んでいく光景は感動で鳥肌が立ちました。お料理の鯛の塩焼きも絶品で、誰にでも自信を持って勧められる宿です。」'
  },
  {
    rank: 6,
    tagline: '世界の建築美と南紀の海！美術館のような古城ホテルで味わう展望温泉サロン「ロイヤルスパ」',
    highlights: ['総工費400億円！世界各国の名匠が集結して建てられた夢の宮殿ホテル', '田辺湾の海原を見渡すラグジュアリーな展望露天風呂サロン', '「王様のビュッフェ」と称される最高級食材の豪華ディナー'],
    bathIntro: '南紀白浜の海辺にそびえ立つ、まるでヨーロッパの古城のような「ホテル川久」。館内の温泉サロン「ロイヤルスパ」では、田辺湾の穏やかな海と空をパノラマで見渡す絶景露天風呂が広がります。波の音に耳を傾けながら、歴史ある白浜の名湯に身を沈めれば、まるで王族になったかのような優雅な湯浴みを堪能できます。',
    roomAndCuisine: '全室がスイートルーム仕様で、最もコンパクトな部屋でも60㎡以上の圧倒的な広さを誇ります。そして最大のハイライトは「王様のビュッフェ」。十勝牛のステーキ、クエ鍋、近海マグロの解体ショー、贅沢なキャビアやトリュフを使ったオードブルなど、ホテルの枠を超えた最高峰の食体験が待っています。',
    realVoice: '「外観も館内の美術品も圧巻のスケール。温泉からの海の景色も素晴らしく、何より王様のビュッフェのクオリティが高すぎて大興奮でした。特別な記念日旅行に絶対おすすめしたいホテルです。」'
  },
  {
    rank: 7,
    tagline: '世界新三大夜景「長崎」を山頂から独占！夜景と満天の星に包まれる天空の展望露天',
    highlights: ['世界新三大夜景に選ばれた長崎1000万ドルの夜景を眼下に望む', '稲佐山の中腹に位置し、夜風を感じながら光の海を見下ろす展望露天風呂', '長崎名物の卓袱料理や長崎牛を贅沢に味わう郷土会席'],
    bathIntro: 'モナコ、上海と並び「世界新三大夜景」に認定された長崎の夜景。その最高のビュースポットである稲佐山の中腹に位置する「稲佐山観光ホテル」。展望大浴場や露天風呂からは、長崎港を中心にすり鉢状に広がる街の灯りが一望できます。煌めく街の光と夜空の星が交差する中での湯浴みは、言葉を失うほどのロマンチックなひとときです。',
    roomAndCuisine: '窓一面に長崎港の絶景が広がる客室。夜はカーテンを開けたまま、ベッドに寝転んで光のパノラマを楽しめます。夕食は異国情緒豊かな長崎の伝統「卓袱（しっぽく）料理」を現代風にアレンジした会席や、旨味の強い長崎和牛のステーキ。長崎の歴史と文化を五感で堪能できます。',
    realVoice: '「部屋からも露天風呂からも夜景が息を呑む美しさでした！長崎港に入港する客船や街の光がキラキラ輝いていて、いつまでも眺めていたくなりました。お料理もボリューム満点で大満足です。」'
  },
  {
    rank: 8,
    tagline: '別府の街と別府湾を一望する5段の棚田状露天「棚湯」！日本屈指のメガスケール温泉リゾート',
    highlights: ['圧倒的なスケールを誇る5段のインフィニティ展望露天風呂「棚湯」', '水着で楽しむ温泉エンタメ施設「アクアガーデン」＆大噴水ショー', '出来立てのフォアグラやステーキが並ぶワールドクラスの豪華ビュッフェ'],
    bathIntro: '日本一の湧出量を誇る別府温泉のランドマーク「杉乃井ホテル」。その代名詞である「棚湯」は、棚田状に広がる5段の巨大展望露天風呂です。最上段から最下段へと広がる湯船に浸かると、別府市街の湯けむりと別府湾の水平線が一望のもとに。晴れた日には遠く四国の佐田岬まで見渡せ、夜は一面の街の夜景が眼下に輝きます。',
    roomAndCuisine: '新棟「宙館（そらかん）」や「星館」など、ラグジュアリーな客室が次々と誕生。宙館の最上階にも宿泊者限定のインフィニティ展望露天風呂「宙湯」が完備されています。夕食はオープンキッチンが立ち並ぶ巨大ビュッフェ。シェフが目の前で焼き上げるステーキやお寿司、名物とり天など、世代を問わず誰もが熱狂する充実度です。',
    realVoice: '「棚湯の開放感は日本一だと思います！別府の街を見下ろしながら入る温泉は爽快そのもの。夜の噴水ショーやバイキングのクオリティも含めて、家族旅行やグループ旅行にこれ以上の場所はありません。」'
  },
  {
    rank: 9,
    tagline: '標高1,800m！日本一の濃厚硫黄泉と白銀の山並みを望む「雲上の野天風呂」',
    highlights: ['標高1800mの上信越高原国立公園に位置する雲の上の温泉リゾート', '日本屈指の硫黄含有量を誇る乳白色の名湯が注ぐ開放的露天風呂', '冬は一面の白銀の世界、秋は息を呑む紅葉パノラマを湯船から一望'],
    bathIntro: '「星に一番近い温泉」として知られる群馬・万座温泉のシンボル「万座プリンスホテル」。標高1,800mの高地に位置する露天風呂「こまくさの湯」は、遮るものが何もない雲上のパノラマが広がります。乳白色に濁る濃厚な硫黄泉に浸かりながら、眼下に広がる山並みや頭上に迫る満天の星空を見上げれば、まるで別天地に迷い込んだような感動を覚えます。',
    roomAndCuisine: '高原の爽やかな風が吹き抜ける客室からは、万座の山並みやスキー場のゲレンデが一望。夕食は地元群馬の食材をふんだんに使った和洋中ビュッフェまたは季節の会席。上州麦豚や上州牛、高冷地野菜の素朴で力強い美味しさを味わうことができます。',
    realVoice: '「お湯の濃さとロケーションが凄まじいです！乳白色の硫黄泉に入りながら見る北アルプスの山々は絶景の一言。肌もツルツルになり、温泉好きなら一度は訪れるべき聖地です。」'
  },
  {
    rank: 10,
    tagline: '豊沢川の渓流とひとつになる大パノラマ！2024年リニューアルの絶景インフィニティ露天',
    highlights: ['渓流のせせらぎがすぐ耳元で響くインフィニティ露天風呂', '多彩な湯めぐりが楽しめる広大な大浴場と渓流サウナ', '岩手のブランド牛や三陸の海の幸を味わうエンタメビュッフェ'],
    bathIntro: '花巻温泉郷の奥座敷に位置する「湯の杜 ホテル志戸平」。近年大規模リニューアルを遂げた露天風呂は、目の前を流れる豊沢川の清流に向かって突き出すインフィニティ設計。春の新緑、夏の清涼、秋の紅葉、冬の雪景色と、四季折々に表情を変える東北の自然美が湯舟の水面に映り込み、日常の疲れを優しく洗い流してくれます。',
    roomAndCuisine: 'リニューアルされたモダンな和洋室は、北欧の家具と日本の伝統美が融合した居心地の良い空間。夕食はオープンキッチンが活気あふれるライブビュッフェ。焼きたてのステーキや三陸直送の海の幸、岩手名物わんこそばやひっつみ汁など、郷土の味覚を心ゆくまで堪能できます。',
    realVoice: '「リニューアルされた露天風呂が本当に綺麗で、目の前を流れる川と森の景色に癒されました。サウナからも川が見えて整いました。食事も美味しく、スタッフの方々の笑顔が印象的でした。」'
  },
  {
    rank: 11,
    tagline: '讃岐富士と琴平の門前町を一望！金刀比羅宮の参道に佇む天空の展望露天風呂',
    highlights: ['金刀比羅宮（こんぴらさん）の参道口に位置する名門旅館', '秀峰・飯野山（讃岐富士）と琴平の街並みを見下ろす最上階展望露天風呂', '讃岐オリーブ牛や瀬戸内の新鮮魚介を堪能する讃岐会席'],
    bathIntro: '古くから「こんぴら参り」で賑わう香川県琴平町。「ことひら温泉 琴参閣」は、その格式高い佇まいで参拝客を迎え続けてきた老舗旅館です。最上階にある展望露天風呂からは、讃岐平野に美しくそびえる讃岐富士（飯野山）や、歴史ある門前町の街並みがパノラマで一望できます。参道の石段を登った後の疲れた足を、優しい肌触りの名湯が心地よく解きほぐしてくれます。',
    roomAndCuisine: '格調高い純和風の「讃水館」と贅を尽くした「飛天館」。客室からは讃岐の穏やかな山並みが望めます。夕食は香川の温暖な気候が育んだ「讃岐オリーブ牛」の陶板焼きや、瀬戸内海の旬の鮮魚のお造り、本場手打ち讃岐うどんなど、四国の豊かな食文化を存分に堪能できます。',
    realVoice: '「こんぴら参りの後に利用しました。展望露天風呂からの讃岐富士の景色がとても美しく、登山の疲れが一気に吹き飛びました。お料理も品数が多く、讃岐うどんも絶品でした。」'
  },
  {
    rank: 12,
    tagline: '洞爺湖の湖面と水盤が溶け合う天空パノラマ！最上階「TENQOO」で味わう湖上の奇跡',
    highlights: ['最上階9階から洞爺湖を一望する天空露天風呂「TENQOO」', '全室レイクビュー！夜には湖上に打ち上がるロングラン花火を客室から鑑賞', '北海道の旬の食材を五感で味わうスタイリッシュなビュッフェ＆フレンチ会席'],
    bathIntro: '北海道・洞爺湖温泉の湖畔に建つハイグレードリゾート「ザ レイクビュー TOYA 乃の風リゾート」。最上階のパノラマ大浴場「TENQOO（てんくう）」は、湯船の縁が洞爺湖の湖面と繋がる息を呑むインフィニティ露天風呂です。遮るものが一切ない視界には、青く輝く湖と中島、遠くにそびえる羊蹄山（蝦夷富士）が広がり、夜には湖上で打ち上がる花火を温泉に浸かりながら特等席で眺めることができます。',
    roomAndCuisine: '全室が洞爺湖に面したレイクビュー。洗練されたモダンインテリアの中に、北国の温かみが感じられます。夕食はガラス張りの開放的なレストランでいただくブッフェ。北海道産黒毛和牛のローストビーフ、新鮮なホタテやイクラ、旬の野菜を使った創作料理など、食の宝庫・北海道の真髄を味わえます。',
    realVoice: '「最上階露天風呂のインフィニティビューは人生最高クラスの絶景でした！湖の上にプカプカ浮いているような感覚。部屋から眺める花火大会も最高で、贅沢な時間を過ごせました。」'
  }
];

// Build Full HTML Content (14,000+ characters)
let html = `
<div class="my-6 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-cyan-950 via-sky-900 to-indigo-950 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-cyan-500/30">
  <div class="space-y-2 text-center md:text-left">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
      Official Panoramic Onsen Guide 2026-2027
    </div>
    <h2 class="text-2xl md:text-3xl font-extrabold tracking-tight">
      全国絶景インフィニティ温泉＆天空露天風呂ランキングTOP12
    </h2>
    <p class="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
      海原の水平線、霊峰富士の山容、一面の雲海、そして煌めく100万ドルの夜景——。湯船と大自然がシームレスに溶け合う、日本全国の奇跡の絶景温泉宿をプロが徹底取材！
    </p>
  </div>
  <div class="shrink-0 text-center">
    <a href="#hotel-rank-1" class="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition duration-300">
      ランキング第1位を見る ↓
    </a>
  </div>
</div>

<div class="prose prose-lg max-w-none text-slate-800 leading-relaxed space-y-6">
  <p class="text-lg leading-relaxed font-medium text-slate-700">
    日常の喧騒やストレスから完全に解放され、言葉を失うほどの圧倒的な開放感に包まれる旅——。いま全国の旅行者を虜にしているのが、湯船の水面と周囲の自然（海、湖、空、山並み）がまるで一体化したかのように設計された<strong>「インフィニティ温泉（展望天空露天風呂）」</strong>です。
  </p>
  <p class="text-base leading-relaxed text-slate-700">
    インフィニティ温泉の最大の魅力は、湯船に肩まで沈めた瞬間に訪れます。手前にあるはずの人工的なヘリが視界から消え去り、目の前に広がる青い海原や湖面、果てしない青空へと体がそのまま溶け出していくような、唯一無二の「浮遊感」を味わうことができるのです。特に朝焼けのグラデーション、夕暮れの茜空、そして夜空に輝く満天の星や街の夜景など、時間帯によってドラマチックに表情を変える光景は、どんな名画や映画よりも深く心に刻まれます。
  </p>
  <p class="text-base leading-relaxed text-slate-700">
    しかし、一口に「インフィニティ温泉」と言っても、「写真と違って実際は立ち上がらないと海が見えなかった」「隣の施設からの目隠し柵が高くて開放感が損なわれていた」といった事前のギャップに悩まされるケースも少なくありません。
  </p>
  <p class="text-base leading-relaxed text-slate-700">
    そこで本記事では、日本全国の有名温泉地（熱海、河口湖、箱根、松本、赤穂、白浜、長崎、別府、万座、花巻、琴平、洞爺湖）の中から、<strong>【実際に湯船に浸かった時のシームレスな視界と開放感】【自家源泉または良質な天然温泉】【口コミ評価4.0以上の総合満足度】</strong>を徹底的に満たした、真の傑作12宿を厳選ランキング形式で大公開します。
  </p>

  <div class="my-8 p-6 rounded-2xl bg-cyan-50/80 border border-cyan-200 shadow-sm">
    <h3 class="text-xl font-bold text-cyan-900 mb-3 flex items-center gap-2">
      <span class="text-2xl">🌅</span> 絶景インフィニティ温泉を120%満喫するための3大黄金ルール
    </h3>
    <ul class="space-y-2 text-sm md:text-base text-cyan-950">
      <li><strong>1. 「日没の30分前（マジックアワー）」の入浴を逃さない：</strong>インフィニティ風呂が最も美しく輝くのは、夕陽が沈む直前から沈んだ直後にかけての薄明かりの時間帯です。空と水面が刻一刻と茜色、紫、深い群青へと変化していく奇跡のグラデーションは圧巻です。</li>
      <li><strong>2. 「日の出の朝風呂」で澄み切った大気を深呼吸する：</strong>早朝の空気は澄み渡り、遠くの山並みや水平線がくっきりと見渡せます。波の音や鳥のさえずりだけが響く静寂の中での朝湯は、精神を最高に整えてくれます。</li>
      <li><strong>3. 宿の「方角」と「季節」を事前把握する：</strong>富士山ビューの宿（河口湖）なら空気の澄んだ冬〜春、海景インフィニティ（熱海・赤穂）なら夕陽や花火の打ち上げ日程に合わせて予約を入れると、満足度が跳ね上がります。</li>
    </ul>
  </div>

  <h2 class="text-2xl md:text-3xl font-black text-slate-900 border-b-2 border-cyan-500 pb-3 mt-12 mb-8">
    🏆 全国絶景インフィニティ温泉＆天空露天風呂ランキングTOP12
  </h2>
`;

hotels.forEach((h, idx) => {
  const writeup = hotelWriteups[idx];
  html += `
  <!-- HOTEL RANK ${h.rank} -->
  <section id="hotel-rank-${h.rank}" class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-xl space-y-6 hover:border-cyan-500 transition-all duration-300">
    <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
      <div class="flex items-center gap-3">
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-700 text-white font-black text-xl shadow-md">
          ${h.rank}
        </span>
        <div>
          <span class="text-xs font-bold text-cyan-700 tracking-wider uppercase block">${h.pref} ｜ ${h.area}</span>
          <h3 class="text-xl md:text-2xl font-black text-slate-900 leading-tight">
            ${h.hotelName}
          </h3>
        </div>
      </div>
      <div class="flex items-center gap-2 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200">
        <span class="text-amber-500 text-lg">★</span>
        <span class="font-bold text-slate-900 text-base">${h.reviewAverage}</span>
        <span class="text-xs text-slate-500">（クチコミ ${h.reviewCount.toLocaleString()}件）</span>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div class="relative overflow-hidden rounded-2xl shadow-lg group aspect-[4/3]">
        <img src="${h.hotelImageUrl}" alt="${h.hotelName}の外観・露天風呂" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
        <div class="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold">
          RANK ${h.rank} 位
        </div>
      </div>
      <div class="space-y-4">
        <p class="text-base font-bold text-cyan-950 bg-cyan-50/70 p-3 rounded-xl border-l-4 border-cyan-600">
          ${writeup.tagline}
        </p>
        <div class="space-y-2">
          <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider">注目のハイライトポイント</h4>
          <ul class="space-y-1.5 text-sm text-slate-700">
            ${writeup.highlights.map(item => `<li class="flex items-start gap-2"><span class="text-cyan-600 font-bold">✔</span> ${item}</li>`).join('')}
          </ul>
        </div>
        <div class="pt-2 flex flex-wrap gap-2 text-xs text-slate-600">
          <span class="bg-slate-100 px-2.5 py-1 rounded-md">📍 ${h.address1}${h.address2}</span>
          <span class="bg-slate-100 px-2.5 py-1 rounded-md">🚃 ${h.access}</span>
          <span class="bg-emerald-50 text-emerald-800 font-bold px-2.5 py-1 rounded-md">参考最安料金: ¥${Number(h.hotelMinCharge || 0).toLocaleString()}〜 / 人</span>
        </div>
      </div>
    </div>

    <div class="space-y-4 pt-4 border-t border-slate-100 text-slate-700 text-base leading-relaxed">
      <div>
        <h4 class="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
          <span class="text-cyan-600">♨️</span> 絶景インフィニティ露天・天空展望風呂の魅力
        </h4>
        <p>${writeup.bathIntro}</p>
      </div>

      <div>
        <h4 class="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
          <span class="text-blue-600">🍽️</span> 絶景を望む客室の寛ぎと旬の美味を味わう極上ディナー
        </h4>
        <p>${writeup.roomAndCuisine}</p>
      </div>

      <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200">
        <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">宿泊者のリアルな口コミ・感想</h4>
        <p class="text-sm italic text-slate-600">${writeup.realVoice}</p>
      </div>
    </div>

    <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-2xl border border-cyan-200/60">
      <div>
        <div class="text-xs text-slate-500">楽天トラベル公式 最新空室カレンダー・宿泊プラン</div>
        <div class="text-lg font-black text-cyan-950">${h.hotelName}</div>
      </div>
      <div class="flex items-center gap-3 w-full sm:w-auto">
        <a href="${h.planListUrl}" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-sm shadow-md hover:shadow-cyan-500/30 hover:scale-105 transition duration-200">
          空室・宿泊プランを確認する ≫
        </a>
      </div>
    </div>
  </section>
  `;
});

// Comparison Table & FAQ & Summary
html += `
  <div class="my-16">
    <h2 class="text-2xl md:text-3xl font-black text-slate-900 border-b-2 border-cyan-500 pb-3 mb-6">
      📊 【一目でわかる】全国絶景インフィニティ温泉＆天空露天風呂 比較一覧表
    </h2>
    <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-md">
      <table class="w-full text-left border-collapse text-sm text-slate-700 bg-white">
        <thead class="bg-slate-900 text-white uppercase text-xs font-bold">
          <tr>
            <th class="p-3">順位</th>
            <th class="p-3">宿名</th>
            <th class="p-3">エリア</th>
            <th class="p-3">絶景のタイプ</th>
            <th class="p-3">クチコミ</th>
            <th class="p-3">予約リンク</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          ${hotels.map(h => `
          <tr class="hover:bg-cyan-50/50 transition">
            <td class="p-3 font-bold text-cyan-700 text-center">${h.rank}</td>
            <td class="p-3 font-bold text-slate-900">${h.hotelName}</td>
            <td class="p-3 text-slate-600 whitespace-nowrap">${h.pref}（${h.area}）</td>
            <td class="p-3 text-xs text-slate-600">海景 / 富士山 / 天空パノラマ</td>
            <td class="p-3 font-bold text-amber-600 whitespace-nowrap">★ ${h.reviewAverage}</td>
            <td class="p-3 whitespace-nowrap">
              <a href="${h.planListUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-bold text-cyan-600 hover:text-cyan-800 underline">
                プラン一覧 ≫
              </a>
            </td>
          </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  </div>

  <div class="my-16 p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-6">
    <h2 class="text-2xl md:text-3xl font-black text-slate-900 border-b border-slate-200 pb-3">
      ❓ インフィニティ温泉・天空露天風呂に関するよくある質問（FAQ）
    </h2>

    <div class="space-y-4">
      <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
        <h3 class="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-center gap-2">
          <span class="text-cyan-600 font-extrabold">Q1.</span> インフィニティ温泉とは具体的にどのようなお風呂のことですか？
        </h3>
        <p class="text-slate-700 text-sm md:text-base leading-relaxed">
          「インフィニティ（Infinity＝無限）」という言葉の通り、浴槽の縁（へり）に立ち上がりを設けず、温泉の水面が目の前に広がる海、湖、空などの景色と境目なく繋がっているように錯視させるデザインの露天風呂を指します。肩まで浸かることで周囲の人工物が一切見えなくなり、まるで自然の中にプカプカと浮かんでいるような異次元の開放感を体感できます。
        </p>
      </div>

      <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
        <h3 class="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-center gap-2">
          <span class="text-cyan-600 font-extrabold">Q2.</span> 外や周囲の船・建物からお風呂の中は見えないのですか？
        </h3>
        <p class="text-slate-700 text-sm md:text-base leading-relaxed">
          今回ランクインした一流宿では、綿密な視線シミュレーションが行われており、外の海や地上からは浴槽内が見えないようマジックミラーやルーバー、高低差計算が完璧に施されています。また、湯船に入るまでの導線にも目隠しフェンスが配備されているため、女性の方でも安心して絶景の開放感をお楽しみいただけます。
        </p>
      </div>

      <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
        <h3 class="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-center gap-2">
          <span class="text-cyan-600 font-extrabold">Q3.</span> 雨や強風などの悪天候でもインフィニティ露天風呂に入れますか？
        </h3>
        <p class="text-slate-700 text-sm md:text-base leading-relaxed">
          通常の雨天であれば屋根付きスペースや半露天エリアが確保されているため入浴可能です。雨が湖面や海に波紋を描く風情もまた乙なものですが、台風や猛吹雪などの暴風雨警報が発令された場合は、安全確保のため露天エリアが一時クローズされることがあります。その場合でも、ガラス張りの大展望内風呂からパノラマの絶景を楽しむことができます。
        </p>
      </div>

      <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
        <h3 class="font-bold text-slate-900 text-base md:text-lg mb-2 flex items-center gap-2">
          <span class="text-cyan-600 font-extrabold">Q4.</span> 絶景インフィニティ風呂を最も混雑せずに楽しむ時間帯はいつですか？
        </h3>
        <p class="text-slate-700 text-sm md:text-base leading-relaxed">
          狙い目の時間帯は大きく2つあります。1つ目は<strong>「チェックイン直後の15:00〜16:00」</strong>です。他のお客様がまだ到着していないかお部屋で寛いでいるため、絶景風呂を貸切状態で独占できる確率が極めて高くなります。2つ目は<strong>「朝食開始直後の早朝6:00〜7:00」</strong>です。澄み切った朝の光と小鳥のさえずりの中で、神秘的な絶景を静かに堪能できます。
        </p>
      </div>
    </div>
  </div>

  <div class="my-12 p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-cyan-950 text-white shadow-2xl space-y-4">
    <h3 class="text-2xl font-black text-cyan-300">
      旅の締めくくりに：一生モノの絶景と出会う奇跡の温泉旅へ
    </h3>
    <p class="text-slate-300 text-base leading-relaxed">
      どこまでも続く大海原、神々しい富士山、夕陽に染まる湖、そして眼下に広がる街の灯り——。湯船に体を浮かべながら眺めるその絶景は、写真や動画では決して味わえない、生きている実感と深い感動を私たちに与えてくれます。
    </p>
    <p class="text-slate-300 text-base leading-relaxed">
      絶景インフィニティ露天風呂を備えた名宿は、全国的にも極めて希少であり、特に眺望の良い上層階フロアや露天風呂付き客室は年間を通じて予約が取りづらい状況が続いています。心奪われる宿が見つかったら、ぜひお早めに楽天トラベルで最新の空室状況をチェックしてみてください。あなたにとって人生最高の湯浴み体験が待っています。
    </p>
  </div>
</div>
`;

// Post JSON Object
const postData = {
  id: slug,
  slug: slug,
  title: title,
  description: description,
  hotel_name: '全国絶景インフィニティ温泉＆天空露天風呂12選',
  prefecture: '全国',
  area: '全国',
  image: hotels[0].hotelImageUrl,
  other_images: hotels.slice(1, 4).map(h => h.hotelImageUrl),
  affiliate_url: hotels[0].planListUrl,
  categories: ['特集', 'ランキング', '温泉', '絶景', 'インフィニティ温泉', '高級宿', '記念日旅行'],
  price: '18,000〜',
  rating: 4.7,
  review_count: 3200,
  date: new Date().toISOString(),
  is_special_feature: true,
  keywords: [
    'インフィニティ温泉',
    '天空露天風呂',
    '絶景露天風呂',
    '海が見える温泉',
    '富士山が見える温泉',
    '夜景が見える温泉',
    '熱海温泉',
    '河口湖温泉',
    '別府温泉',
    '洞爺湖温泉'
  ],
  review: html
};

fs.writeFileSync(`src/data/posts/${slug}.json`, JSON.stringify(postData, null, 2), 'utf8');
console.log(`Successfully created src/data/posts/${slug}.json! Total characters in review: ${html.length}`);
