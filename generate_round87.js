const fs = require('fs');
const path = require('path');

const seasonalHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

const round87Configs = [
  {
    slug: 'furusato-tax-ishigakijima-resort-villa-luxury-stay',
    componentName: 'FurusatoIshigakijimaLuxuryStayPage',
    tag: '石垣島 天然ビーチ＆最高峰リゾートヴィラ特集',
    title: 'エメラルドグリーンの海と満天の星！石垣島の天然ビーチ直結リゾート＆赤瓦プライベートヴィラ×ふるさと納税完全攻略ガイド【2026年最新】フサキ・ANAインターコンチネンタル・グランヴィリオ',
    metaTitle: 'エメラルドグリーンの海と満天の星！石垣島の天然ビーチ直結リゾート＆赤瓦プライベートヴィラ×ふるさと納税完全攻略ガイド【2026年最新】フサキ・ANAインターコンチネンタル・グランヴィリオ',
    shortTitle: '石垣島 ビーチリゾート＆ヴィラ特集',
    description: '日本屈指の南国アイランド・沖縄県石垣島！エメラルドの川平湾、八重山諸島の絶景パノラマ。「フサキビーチリゾート」「ANAインターコンチネンタル石垣リゾート」「グランヴィリオリゾート石垣島」を、沖縄県石垣市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。天然ビーチ直結、県内最大級ウォータースライダー、石垣牛ステーキを満喫。',
    heroTag: '八重山の豊かな大自然と美ら海！沖縄県石垣島特集',
    leadTitle: '透き通るエメラルドグリーンの美ら海、夜空を埋め尽くす満天の天の川。南の楽園・石垣島で叶える極上リゾートステイへ',
    leadText: '八重山諸島の玄関口であり、世界屈指の透明度を誇る海に囲まれた南国の楽園「沖縄県・石垣島（いしがきじま）」。世界的ガイドブックで最高評価三ツ星を獲得した景勝地「川平湾」のエメラルドグリーンのグラデーションをはじめ、亜熱帯のマングローブ林、そして日本初の星空保護区に認定された満天の星空と南十字星——。五感のすべてを解き放つ大自然の魅力に溢れています。石垣島のリゾート滞在の醍醐味は、手付かずの天然白砂ビーチに直結した広大な敷地、沖縄伝統の赤瓦屋根が連なるプライベートヴィラ、そして水平線に沈む夕日を一望するインフィニティプール。日常の喧騒から完全に隔絶された南国時間が流れています。さらに食の感動も見逃せません。温暖な気候とミネラル豊富な牧草で育った幻の最高級黒毛和牛「石垣牛（いしがきぎゅう）」のジューシーな炭火ステーキや鉄板焼き、獲れたて新鮮な島魚のお造り、香り高い八重山そばや島野菜など、南国ならではの豊かな恵みを贅沢に堪能できます。本特集では、天然ビーチ直結で赤瓦ヴィラと県内最大級のスプラッシュパークがファミリー・カップルに絶大な人気を誇る「フサキビーチリゾート ホテル＆ヴィラズ」、マエサトビーチを望みワンランク上のクラブインターコンチネンタル棟を擁する世界水準の「ANAインターコンチネンタル石垣リゾート」、そして八重山諸島を見晴らすパノラマと充実の露天風呂・岩盤浴スパが魅力の「グランヴィリオリゾート石垣島」の3大リゾートを厳選。沖縄県石垣市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの石垣島リゾート旅をお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '天然白砂ビーチ直結＆インフィニティプール！八重山の海を五感で楽しむリゾート',
        body: 'ウミガメや熱帯魚が泳ぐ天然ビーチが目の前。夕暮れには息を呑む美しいサンセット、夜には満天の星空をプールサイドから鑑賞できます。'
      },
      {
        num: '02',
        title: '日本最高峰のブランド黒毛和牛「石垣牛」と八重山郷土の美食ディナー',
        body: '豊かな旨味と甘みのある脂が特徴の石垣牛ステーキや、新鮮な島魚・海ぶどう・あぐー豚など、石垣島ならではの贅を尽くした料理を満喫。'
      },
      {
        num: '03',
        title: '石垣市ふるさと納税で最大30％OFF！3年間有効クーポンでオフシーズン・連休も自在に予約',
        body: '宿泊料金が高騰しやすい南国リゾートもふるさと納税なら実質2,000円。寄付から3年間有効なので、ベストシーズンの夏休みや冬の避寒旅行に最適です。'
      }
    ],
    hotelDetails: [
      {
        key: 'ishigaki_fusaki',
        badge: '沖縄県石垣市・名所フサキビーチ直結！赤瓦ヴィラ＆県内最大級ウォータースライダー付きプールと極上石垣牛BBQ（口コミ1,500件超）',
        rank: '厳選名宿 第1選',
        desc: '石垣島の西海岸、ウミガメが産卵に訪れる美しい天然フサキビーチに面した広大な敷地を誇るアイランドリゾート。琉球伝統の赤瓦屋根とブーゲンビリアが咲き誇る小道に佇むプライベートヴィラは、南国リゾート情緒満点。巨大なスプラッシュパークや流れるプール、インフィニティプールを備え、ファミリーからカップルまで一日中楽しめます。ビーチに突き出たシンボルの桟橋「フサキエンジェルピア」から眺めるサンセットは息を呑む美しさ。夕食は潮風を感じながら味わう極上石垣牛のビーチサイドBBQや、八重山の旬の食材を使った創作島料理ビュッフェを心ゆくまで満喫できます。'
      },
      {
        key: 'ishigaki_intercon',
        badge: '沖縄県石垣市・マエサトビーチを望む世界水準の最高峰！専用ラウンジを備えた「クラブインターコンチネンタル」と本格スパ',
        rank: '厳選名宿 第2選',
        desc: '白砂のマエサトビーチに寄り添うように広がる、石垣島を代表する最高級インターナショナルリゾート。広大な敷地には多彩な客室棟や屋外プール、ゴルフコース、タラソスパが揃い、優雅で洗練されたバカンスを演出します。特に専用ラウンジでアフタヌーンティーやイブニングカクテルが楽しめる「クラブインターコンチネンタル」棟は、贅を極めた大人のステイに最適。客室のプライベートバルコニーからはコバルトブルーの海と八重山の島々を一望。ディナーは沖縄県産黒毛和牛「石垣牛」を目の前で焼き上げる鉄板焼きや本格日本料理、琉球フレンチなど、世界基準の美食が揃っています。'
      },
      {
        key: 'ishigaki_granvrio',
        badge: '沖縄県石垣市・竹富島を正面に望む絶景オーシャンビュー！露天風呂付き展望大浴場とプール付きスイートヴィラが魅力',
        rank: '厳選名宿 第3選',
        desc: '竹富島をはじめとする八重山の島々を真正面に望む抜群のロケーションに建つ大型リゾートホテル。ホテル棟「オーシャンズウイング」とプライベートプール付き客室を擁する「ヴィラガーデン」の2つのエリアからなり、旅のスタイルに合わせて選べます。沖縄の離島では珍しい露天風呂付き大浴場やサウナ、岩盤浴が完備されており、海水浴や観光でアクティブに動いた後の疲れを心地よくリフレッシュ。夜には屋上展望デッキで満天の星空鑑賞ツアーも開催。食事は地元食材と石垣牛を堪能できるバイキングや焼肉、郷土料理など多彩なレストランで舌鼓を打てます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-miyakojima-allamanda-resort-stay', title: '【宮古島 シギラリゾート＆ウミガメスイート×ふるさと納税】アラマンダ・ヒルトン・ミラージュ' },
      { slug: 'furusato-tax-okinawa-beach-resort-luxury-stay', title: '【沖縄本島最高峰ビーチリゾート×ふるさと納税】ハレクラニ・ルネッサンス・ロワジール' },
      { slug: 'furusato-tax-shirahama-onsen-ocean-view-luxury-stay', title: '【南紀白浜温泉 白良浜オーシャンビュー宿×ふるさと納税】むさし・海舟・シーモア' },
      { slug: 'furusato-tax-private-villa-hanare-hideaway-stay', title: '【大人の隠れ家・離れ客室×ふるさと納税】静寂とプライベート重視の名宿' }
    ]
  },
  {
    slug: 'furusato-tax-miyakojima-allamanda-resort-stay',
    componentName: 'FurusatoMiyakojimaLuxuryStayPage',
    tag: '宮古島 宮古ブルー＆最高峰スイートヴィラ特集',
    title: '東洋一の宮古ブルーとウミガメの楽園！宮古島の全室スイートリゾート＆プライベートプール付き極上ヴィラ×ふるさと納税完全攻略ガイド【2026年最新】アラマンダ・ヒルトン・シギラミラージュ',
    metaTitle: '東洋一の宮古ブルーとウミガメの楽園！宮古島の全室スイートリゾート＆プライベートプール付き極上ヴィラ×ふるさと納税完全攻略ガイド【2026年最新】アラマンダ・ヒルトン・シギラミラージュ',
    shortTitle: '宮古島 宮古ブルー＆最高級ヴィラ特集',
    description: '「宮古ブルー」と称される世界最高峰の透明度！沖縄屈指の楽園リゾート・宮古島。「シギラベイサイドスイート アラマンダ」「キャノピーbyヒルトン沖縄宮古島リゾート」「ホテルシギラミラージュ」を、沖縄県宮古島市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。ウミガメが泳ぐラグーン、プライベートプール、宮古牛を満喫。',
    heroTag: '東洋一の透明度を誇る海！沖縄県宮古島特集',
    leadTitle: '息を呑む宮古ブルーのグラデーション、ウミガメが戯れる碧いラグーン。至高の贅と安らぎに満ちた宮古島スイートステイへ',
    leadText: '沖縄本島から南西へ約300キロ、世界中のダイバーやリゾートファンが息を呑む「宮古ブルー」の海に抱かれた「沖縄県・宮古島（みやこじま）」。山や川がなく、土砂が海に流れ込まないサンゴ礁の大地だからこそ生まれる海の透明度は、東洋一とも称される奇跡の美しさを誇ります。与那覇前浜ビーチの真っ白なパウダースノーの砂浜、伊良部大橋を渡る爽快なドライブ、ウミガメがすぐ目の前を泳ぐサンゴのリーフなど、どこを訪れても非日常の感動が広がります。宮古島で最も洗練された滞在を約束するのが、島南部に広がる百四十万坪もの一大ネイチャーリゾート「シギラセブンマイルズリゾート」。ウミガメが優雅に泳ぐラグーンを取り囲む全室スイートルームの贅沢なホテルや、テラスにプライベート温水プールとジャグジーを備えた最高峰ヴィラが点在し、誰にも邪魔されない至福のプライベートバカンスが叶います。夕食は、ミネラルたっぷりの島草で育った希少な極上黒毛和牛「宮古牛」の鉄板焼きステーキや炭火焼肉、獲れたての伊勢海老やミーバイなど、島の恵みを贅を尽くして味わう美食の数々。本特集では、ウミガメが泳ぐラグーンと全室スイートの贅を誇る「シギラベイサイドスイート アラマンダ」、みやこサンセットビーチ至近で伊良部大橋のパノラマを望む「キャノピーbyヒルトン沖縄宮古島リゾート」、そしてシギラリゾート最高峰のモダンラグジュアリー「ホテルシギラミラージュ」の3宿を厳選。沖縄県宮古島市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの宮古島スイートステイをお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '東洋一と称される「宮古ブルー」の海とウミガメが泳ぐプライベートラグーン',
        body: '客室テラスから望むエメラルドブルーの絶景と、敷地内ラグーンを優雅に泳ぐウミガメ。自然の生命力に包まれる唯一無二の感動体験。'
      },
      {
        num: '02',
        title: '全室スイート仕様＆プライベートプール付きヴィラで過ごす究極の贅沢',
        body: 'デイベッドやジャグジー、温水プライベートプールを備えた開放的なスイートルーム。ハネムーンや記念日に最高の非日常をお届けします。'
      },
      {
        num: '03',
        title: '宮古島市ふるさと納税で最大30％OFF！3年間有効クーポンで記念日や長期滞在に最適',
        body: 'ハイエンドなリゾートヴィラもふるさと納税なら実質自己負担2,000円。有効期限3年を活かして、ゆったりとした島時間を計画的に確保できます。'
      }
    ],
    hotelDetails: [
      {
        key: 'miyako_allamanda',
        badge: '沖縄県宮古島市・ウミガメが泳ぐラグーンを取り囲む全室スイート！プライベートプール付きヴィラ＆宮古牛鉄板焼き（シギラリゾート）',
        rank: '厳選名宿 第1選',
        desc: 'シギラセブンマイルズリゾートの中心に位置し、色鮮やかな南国の花々と豊かな緑に包まれた全室スイートルームのプレミアムリゾート。ホテルの象徴であるラグーンには毎朝ウミガメが優雅に泳ぎ、餌付け体験も楽しめます。特に「プールヴィラ ロイヤルスイート」や「ラグーンスイート」は、広々としたテラスにプライベート温水プールやデイベッドを完備し、極上のプライベート感を演出。夕食は館内のレストラン「マラルンガ」にて、希少な宮古牛の極上鉄板焼きや本格琉球会席を堪能でき、大人の上質な記念日旅行に全国から圧倒的な支持を集めています。'
      },
      {
        key: 'miyako_hilton',
        badge: '沖縄県宮古島市・みやこサンセットビーチ直結！伊良部大橋と夕日を一望するルーフトップバー＆洗練のヒルトンクオリティ',
        rank: '厳選名宿 第2選',
        desc: '宮古空港から車で約15分、みやこサンセットビーチとトゥリバー地区に誕生したヒルトンブランドの最新リゾート。客室の大きな窓やプライベートバルコニーからは、宮古ブルーの海と伊良部大橋の美しい弓なりのシルエットが一望できます。館内には3つの屋外プールや屋内温水プール、スパを完備。夕暮れ時には伊良部島に沈む息を呑むサンセットを望むルーフトップバーで極上のカクテルタイムを満喫。食事は宮古島の新鮮食材をふんだんに使ったオールデイダイニングビュッフェや本格トラットリアで、洗練されたリゾートダイニングを体験できます。'
      },
      {
        key: 'miyako_mirag',
        badge: '沖縄県宮古島市・シギラリゾートの最高峰ラグジュアリー！オーシャンビューテラスジャグジー＆全室バトラーサービス付きヒルサイドヴィラ',
        rank: '厳選名宿 第3選',
        desc: 'シギラセブンマイルズリゾートの海沿いに聳え立つ、モダンラグジュアリーの最高峰ホテル。客室はすべて広々としたテラス付きで、高層階の客室にはジャグジーが備わり、地平線まで続く宮古ブルーの海と潮風を全身で感じることができます。また小高い丘に佇むヴィラ棟「ヒルサイド」は、全室にプライベートプールを備えた完全独立型の別天地。専属バトラーによるきめ細やかなおもてなしが特別な滞在をサポートします。夕食は宮古牛や近海魚を華やかに仕立てたモダンフレンチや江戸前寿司など、美食の粋を集めたコースをゆったりと楽しめます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-ishigakijima-resort-villa-luxury-stay', title: '【石垣島 ビーチリゾート＆赤瓦ヴィラ×ふるさと納税】フサキ・ANAインターコンチネンタル・グランヴィリオ' },
      { slug: 'furusato-tax-okinawa-beach-resort-luxury-stay', title: '【沖縄本島最高峰ビーチリゾート×ふるさと納税】ハレクラニ・ルネッサンス・ロワジール' },
      { slug: 'furusato-tax-shirahama-onsen-ocean-view-luxury-stay', title: '【南紀白浜温泉 白良浜オーシャンビュー宿×ふるさと納税】むさし・海舟・シーモア' },
      { slug: 'furusato-tax-private-villa-hanare-hideaway-stay', title: '【大人の隠れ家・離れ客室×ふるさと納税】静寂とプライベート重視の名宿' }
    ]
  },
  {
    slug: 'furusato-tax-kamikochi-japan-alps-resort-stay',
    componentName: 'FurusatoKamikochiLuxuryStayPage',
    tag: '上高地 北アルプス絶景＆山岳リゾート特集',
    title: '神降ちる清流と穂高連峰の絶景！上高地の大正池・梓川温泉＆本格山岳フレンチ名宿×ふるさと納税完全攻略ガイド【2026年最新】ルミエスタ・大正池ホテル・上高地温泉ホテル',
    metaTitle: '神降ちる清流と穂高連峰の絶景！上高地の大正池・梓川温泉＆本格山岳フレンチ名宿×ふるさと納税完全攻略ガイド【2026年最新】ルミエスタ・大正池ホテル・上高地温泉ホテル',
    shortTitle: '上高地 北アルプス山岳名宿特集',
    description: '日本屈指の山岳景勝地・長野県上高地！河童橋、大正池、エメラルドに輝く梓川と穂高連峰のパノラマ。「上高地ルミエスタホテル」「上高地大正池ホテル」「上高地温泉ホテル」を、長野県松本市の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。自家源泉天然温泉、朝霧の大正池、極上フレンチフルコースを満喫。',
    heroTag: '神々が宿る日本最高峰の山岳リゾート！長野県上高地特集',
    leadTitle: '梓川の清冽な流れ、朝霧に煙る大正池、聳え立つ穂高連峰の岩峰。マイカー規制に守られた静寂の上高地ステイへ',
    leadText: '標高約1,500メートル、北アルプスの麓に広がる日本を代表する山岳景勝地「長野県・上高地（かみこうち）」。国の特別名勝および特別天然記念物に指定され、一般車両の乗り入れが固く禁じられているからこそ保たれている清らかな空気と手付かずの大自然は、かつて「神降地」と称された神秘的な聖域です。朝日に照らされる雄大な穂高連峰の稜線、水草が揺れる透明度抜群の梓川、幻想的な立ち枯れの木々が湖面に映る「大正池」、そしてシンボルの「河童橋」など、歩を進めるごとに絵画のような絶景が広がります。日帰り観光客が去った夕暮れや、凛とした静寂が支配する早朝の散策を楽しめるのは、上高地エリアに宿泊する者だけに許された特権。上高地の夜空にはプラネタリウムのような満天の星空が広がり、澄み渡る夜の帳が旅人を包み込みます。さらに上高地は、日本における西洋式山岳リゾート発祥の地として、料理のレベルが極めて高いことでも有名。信州の大地が育んだ信州サーモンや信州プレミアム牛、契約農家の高原野菜をふんだんに使った正統派の本格フレンチフルコースや、自家源泉かけ流しの天然温泉は、登山の疲れを優雅に癒やしてくれます。本特集では、霞沢岳を望む梓川のほとりで天然温泉と本格フレンチフルコースを誇る名門「上高地ルミエスタホテル」、大正池の畔に佇む唯一のホテルで朝霧と満天の星が自慢の「星降るホテル 上高地大正池ホテル」、そして上高地で最初に湧出した自家源泉100％かけ流し名湯を持つ老舗「上高地温泉ホテル」の3宿を厳選。長野県松本市への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの上高地ステイをお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '宿泊者だけが出会える早朝の静寂と満天の星！大正池の朝霧と穂高連峰のモルゲンロート',
        body: '観光客のいない清々しい早朝の大正池散策や、夕暮れに赤く染まる穂高連峰。夜には降るような満天の星空を静かに堪能できます。'
      },
      {
        num: '02',
        title: '上高地で希少な自家源泉かけ流し天然温泉と本格山岳フレンチフルコース',
        body: '山岳リゾートでありながら極上の天然温泉に浸かり、信州牛や信州サーモンを取り入れた一流シェフの極上ディナーを満喫。'
      },
      {
        num: '03',
        title: '松本市ふるさと納税で最大30％OFF！3年間有効クーポンで予約争奪戦の上高地を賢く予約',
        body: '営業期間が限られ予約困難な上高地ホテルもふるさと納税なら実質2,000円。3年間の有効期間を活かして新緑や紅葉のベストシーズンを確保できます。'
      }
    ],
    hotelDetails: [
      {
        key: 'kamikochi_imperial',
        badge: '長野県松本市・梓川のほとり、霞沢岳を望む絶景ロケーション！自家源泉100％の天然温泉大浴場と本格フレンチフルコース（上高地ルミエスタホテル）',
        rank: '厳選名宿 第1選',
        desc: '梓川の清流沿いに佇み、対岸に霞沢岳の雄大な山容を望む上質な山岳リゾートホテル。上高地エリアでは極めて珍しい敷地内から自噴する100％自家源泉の天然温泉大浴場と露天風呂を完備しており、トレッキング後の体を芯から温めてくれます。全客室が梓川に面しており、窓を開ければ川のせせらぎと鳥のさえずりが心地よく響きます。宿最大の誇りは、歴代シェフが受け継ぐ本格フレンチフルコース「ラ・メール」。信州牛のフィレ肉や安曇野野菜、信州サーモンを繊細なソースとともに芸術的に仕立てた料理は、山の上とは思えない極上の感動を提供します。'
      },
      {
        key: 'kamikochi_gosenjaku',
        badge: '長野県松本市・神秘の大正池の畔に佇む唯一のホテル！朝霧と立ち枯れの木々を目の前に望む絶景ロケーション＆星空観察（星降るホテル 大正池ホテル）',
        rank: '厳選名宿 第2選',
        desc: '焼岳の噴火によって生まれた神秘的な湖「大正池」のほとりに建つ、エリア唯一のロケーションを誇る山岳ホテル。朝一番にカーテンを開ければ、湖面から立ちのぼる幻想的な朝霧と、水面に映り込む穂高連峰の逆さ富士のような絶景を独り占めできます。夜にはホテル主催の星空観察会が開催され、人工の明かりが一切ない漆黒の夜空に広がる天の川に息を呑みます。食事は信州の豊かな味覚を散りばめた和洋折衷のディナーコースで、梓川の清流で育った岩魚や信州牛などを落ち着いた空間で堪能でき、大自然の静寂にどっぷりと浸れる名宿です。'
      },
      {
        key: 'kamikochi_onsen',
        badge: '長野県松本市・開湯百三十年、上高地で最初に湧き出た元祖温泉宿！三つの異なる自家源泉かけ流し露天風呂と山岳会席',
        rank: '厳選名宿 第3選',
        desc: '明治時代にウェストン卿も立ち寄った歴史を誇る、上高地最古の元祖温泉旅館。敷地内にある3本の自家源泉から湧出する豊富な湯は、加水・加温一切なしの完全源泉掛け流し。木造の風情ある内湯や、白樺の原生林に囲まれた開放感あふれる樽風呂・岩露天風呂で、上高地の澄んだ空気を吸い込みながら極上の湯浴みが楽しめます。客室は木の温もりを感じる和室やモダン和洋室が揃い、梓川の散策路へもすぐ出られる好立地。夕食は信州サーモンのお造りや岩魚の塩焼き、信州牛鍋など、素朴ながらも滋味あふれる季節の山岳会席料理で心温まるおもてなしを受けられます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-karuizawa-luxury-resort-villa-stay', title: '【軽井沢 高原リゾート＆名門ホテル×ふるさと納税】マリオット・プリンスイースト・音羽ノ森' },
      { slug: 'furusato-tax-furano-biei-lavender-nature-stay', title: '【富良野・美瑛 ラベンダー畑＆大自然絶景宿×ふるさと納税】新富良野プリンス・オリカ・白金温泉' },
      { slug: 'furusato-tax-hakone-onsen-open-air-bath-stay', title: '【箱根温泉 客室露天風呂＆名門旅館×ふるさと納税】富士屋ホテル・天成園・はつはな' },
      { slug: 'furusato-tax-private-villa-hanare-hideaway-stay', title: '【大人の隠れ家・離れ客室×ふるさと納税】静寂とプライベート重視の名宿' }
    ]
  },
  {
    slug: 'furusato-tax-furano-biei-lavender-nature-stay',
    componentName: 'FurusatoFuranoBieiLuxuryStayPage',
    tag: '富良野・美瑛 ラベンダー＆青い池絶景宿特集',
    title: '紫に染まるラベンダー畑と神秘の青い池！富良野・美瑛の十勝岳連峰一望リゾート＆源泉かけ流し名湯×ふるさと納税完全攻略ガイド【2026年最新】新富良野プリンス・オリカ・白金温泉ゆゆ',
    metaTitle: '紫に染まるラベンダー畑と神秘の青い池！富良野・美瑛の十勝岳連峰一望リゾート＆源泉かけ流し名湯×ふるさと納税完全攻略ガイド【2026年最新】新富良野プリンス・オリカ・白金温泉ゆゆ',
    shortTitle: '富良野・美瑛 ラベンダー＆絶景名宿特集',
    description: '見渡す限りのパッチワークの丘と紫のラベンダー畑！北海道中央部・富良野と美瑛。「新富良野プリンスホテル」「富良野リゾート オリカ」「碧の美 ゆゆ（旧湯元白金温泉ホテル）」を、富良野市・中富良野町・美瑛町の楽天ふるさと納税トラベルクーポンで実質2,000円負担で予約する完全ガイド。ニングルテラス、富良野温泉、美瑛青い池、ふらの和牛を満喫。',
    heroTag: 'パッチワークの丘と満開のラベンダー！北海道富良野・美瑛特集',
    leadTitle: '風にそよぐ紫のラベンダー、美瑛の丘を彩る色彩のパレット。雄大な十勝岳連峰を望む富良野・美瑛の休日へ',
    leadText: '北海道のほぼ中央に位置し、どこまでも続く波状丘陵と雄大な大雪山・十勝岳連峰のパノラマが広がる日本屈指の絶景地「富良野（ふらの）・美瑛（びえい）」。初夏から夏にかけて丘一面を鮮やかな紫色と甘い香りで染め上げるラベンダー畑をはじめ、四季折々の農作物が幾重にも重なる「パッチワークの丘」、そしてコバルトブルーの水面と枯れ木が神秘的な光景を描き出す「白金 青い池」など、世界中の旅人を魅了する奇跡の自然景観が広がります。富良野・美瑛の滞在は、大自然の静寂と澄んだ空気、そして大地から湧き出る良質な温泉が最大の魅力。森の中にログハウス風のクラフトショップが並ぶ「ニングルテラス」の幻想的なライトアップ散策や、十勝岳連峰を正面に望む絶景展望露天風呂での湯浴みは、日常を忘れさせてくれる至福のひとときです。さらに北海道屈指の食糧庫である富良野・美瑛はグルメの楽園。厳しい寒暖差が育んだ極上の黒毛和牛「ふらの和牛」のステーキ、甘みたっぷりの富良野メロンや美瑛産とうもろこし、濃厚な富良野チーズや搾りたて牛乳など、北海道の大地の恵みを五感で堪能できます。本特集では、富良野温泉「紫彩の湯」とニングルテラスを擁し十勝岳連峰を一望する一大リゾート「新富良野プリンスホテル」、ラベンダー畑と丘のパノラマを見晴らす丘の上に佇み全室展望風呂付き極上ホテル「富良野リゾート オリカ」、そして青い池や白ひげの滝のすぐそばで源泉100％かけ流し温泉を堪能できる老舗「碧の美 ゆゆ（旧：湯元白金温泉ホテル）」の3宿を厳選。北海道富良野市・美瑛町への楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を活用して、実質自己負担2,000円で憧れの富良野・美瑛ステイをお得に予約しましょう。',
    threePoints: [
      {
        num: '01',
        title: '満開のラベンダー畑と美瑛の青い池！北海道を代表する感動的な大自然パノラマ',
        body: '丘一面に広がる色鮮やかな花畑や神秘的なコバルトブルーの青い池。十勝岳連峰を借景にした絵画のような風景に心癒やされます。'
      },
      {
        num: '02',
        title: 'ブランド黒毛和牛「ふらの和牛」と採れたてメロン！大地の恵みを味わう北海道ビュッフェ',
        body: '甘み豊かなふらの和牛や新鮮な乳製品、旬の富良野メロンなど、北海道ならではの贅沢食材をフレンチやビュッフェで存分に満喫。'
      },
      {
        num: '03',
        title: '富良野市・美瑛町ふるさと納税で最大30％OFF！3年間有効クーポンで夏のピーク時期に予約',
        body: '夏期に大人気で予約が集中する富良野・美瑛のリゾートホテルもふるさと納税なら実質2,000円。3年間の有効期間で安心して計画できます。'
      }
    ],
    hotelDetails: [
      {
        key: 'furano_prince',
        badge: '北海道富良野市・十勝岳連峰一望の大パノラマ！自家源泉「紫彩の湯」＆森のロマンチック小道「ニングルテラス」が人気（口コミ1,500件超）',
        rank: '厳選名宿 第1選',
        desc: '富良野の大自然に抱かれた高台に位置し、富良野観光の拠点として絶大な知名度と人気を誇る一大高原リゾート。館内には地下1,023mから湧出する富良野温泉「紫彩の湯」があり、なめらかな肌触りの名湯とフィンランド式サウナで心身をリフレッシュできます。敷地内には倉本聰氏プロデュースのクラフトショップが連なる「ニングルテラス」や「珈琲 森の時計」があり、夜のライトアップされた木漏れ日散歩は夢のような美しさ。夕食は富良野の大地の恵みや北海道の海鮮が勢揃いする豪華ディナービュッフェや、最上階メインダイニングでの本格創作フレンチを十勝岳連峰の夜景とともに味わえます。'
      },
      {
        key: 'furano_orika',
        badge: '北海道中富良野町・ラベンダー畑と十勝岳連峰を見下ろす丘の上！口コミ評価4.8超・全室パノラマビュー展望風呂付き最高峰ホテル',
        rank: '厳選名宿 第2選',
        desc: '中富良野の丘の頂、十勝岳連峰と広大な田園風景をパノラマで見下ろす最高のロケーションに建つラグジュアリーホテル。客室は全室が東向きのパノラマビューとなっており、広々とした展望ビューバスからも美しい丘陵地帯と連峰の稜線を一望できます。館内には大浴場や露天風呂、ゴルフコースも併設。夕食はミシュラン星付きレストランで腕を磨いたシェフによるオリカ・フレンチ。美瑛牛や十勝産黒毛和牛、契約農家から毎朝届く瑞々しい野菜の旨味を極限まで引き出した一皿一皿が、五感を揺さぶる至高のディナータイムを演出します。'
      },
      {
        key: 'biei_shirogane_park',
        badge: '北海道美瑛町・「青い池」車で5分＆「白ひげの滝」すぐ！十勝岳の恵み・源泉100％完全かけ流し名湯と北海道会席（碧の美 ゆゆ）',
        rank: '厳選名宿 第3選',
        desc: '美瑛の白金温泉郷に位置し、世界的な名所「白金 青い池」やエメラルドグリーンの「白ひげの滝」へ徒歩・車ですぐの絶好の立地を誇る老舗温泉ホテル（旧：湯元白金温泉ホテル）。最大の自慢は、活火山・十勝岳の地中深くから自噴する褐色の含硫黄-マグネシウム・カルシウム硫酸塩泉。一切の加水・加温を行わない100％源泉掛け流しの湯船は、神経痛や冷え性に優れた効能を発揮します。大自然の森林に囲まれた渓流露天風呂からは、四季折々の渓谷美と星空を満喫。夕食は美瑛豚や道産黒毛和牛、近海産の魚介を使った温かな和食会席膳で、北海道の素朴な温もりに包まれる滞在が叶います。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-noboribetsu-jigokudani-onsen-luxury-stay', title: '【登別温泉 地獄谷＆名湯ビュッフェ宿×ふるさと納税】第一滝本館・まほろば・グランドホテル' },
      { slug: 'furusato-tax-kamikochi-japan-alps-resort-stay', title: '【上高地 北アルプス山岳名宿×ふるさと納税】ルミエスタ・大正池ホテル・上高地温泉ホテル' },
      { slug: 'furusato-tax-karuizawa-luxury-resort-villa-stay', title: '【軽井沢 高原リゾート＆名門ホテル×ふるさと納税】マリオット・プリンスイースト・音羽ノ森' },
      { slug: 'furusato-tax-luxury-buffet-gourmet-resort-stay', title: '【豪華ビュッフェ＆オープンキッチン名宿×ふるさと納税】美食リゾート' }
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

for (const cfg of round87Configs) {
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
    '高級リゾートホテル',
    'プライベートプール',
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
            <div><strong>参考価格:</strong> 1名あたり約${(h1.hotelMinCharge || 22000).toLocaleString()}円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">${h1Desc}</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ${sanitizeString(h1.hotelSpecial || '非日常の大自然と極上のおもてなしで心に残るリゾート時間をご提供します。')}
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “${sanitizeString(h1.userReview || '景色もお部屋もお料理も最高で、また絶対泊まりに来たいです。')}”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="${h1.planListUrl || h1.affiliateUrl || 'https://travel.rakuten.co.jp'}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏝</span>
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
            <div><strong>楽天評価:</strong> <span className="text-amber-600 font-bold text-base">★ ${h2.reviewAverage || '4.5'}</span> (${h2.reviewCount || 0}件)</div>
            <div><strong>参考価格:</strong> 1名あたり約${(h2.hotelMinCharge || 20000).toLocaleString()}円〜</div>
          </div>
          <p className="text-base text-gray-800 leading-relaxed mb-6">${h2Desc}</p>
          <div className="hotel-special-wrapper">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl mb-6 text-sm text-amber-950">
              <strong className="block mb-1 font-bold">宿のこだわり・特徴:</strong>
              ${sanitizeString(h2.hotelSpecial || '贅沢な空間とこだわりの美食で特別なリゾート体験をお届けします。')}
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “${sanitizeString(h2.userReview || 'スタッフの皆様の温かいおもてなしとお料理に大満足の滞在でした。')}”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="${h2.planListUrl || h2.affiliateUrl || 'https://travel.rakuten.co.jp'}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏝</span>
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
              ${sanitizeString(h3.hotelSpecial || '歴史ある大自然のロケーションと温泉で極上の安らぎをお約束します。')}
            </div>
          </div>
          <div className="user-review-wrapper">
            <blockquote className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-xl mb-6 text-xs md:text-sm text-gray-700 italic">
              <strong>宿泊者の声:</strong> “${sanitizeString(h3.userReview || '静かで落ち着いた環境と美味しいお料理で心からリフレッシュできました。')}”
            </blockquote>
          </div>
          <div className="pt-2">
            <a
              href="${h3.planListUrl || h3.affiliateUrl || 'https://travel.rakuten.co.jp'}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm md:text-base w-full sm:w-auto"
            >
              <span>🏝</span>
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
              <p className="text-xs md:text-sm text-gray-600">訪れたいホテルや温泉宿のある自治体へ寄付。寄付額の最大30％相当の楽天トラベルクーポンが数日以内にマイクーポンへ自動付与されます。</p>
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
              <span>ハイシーズンや連休でも利用できますか？</span>
              <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              はい、対象ホテルの空室があれば、ゴールデンウィークや夏休み、年末年始や紅葉シーズンのハイシーズンでも除外日なくクーポンをご利用いただけます。
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

console.log('\nAll 4 Round 87 pages successfully written!');
