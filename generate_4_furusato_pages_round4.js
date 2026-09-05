const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
const allHotels = JSON.parse(fs.readFileSync(p, 'utf8'));

const pages = [
  {
    slug: 'furusato-tax-winter-crab-gourmet-luxury-stay',
    title: '【冬の味覚の王様×ふるさと納税】越前ガニ・松葉ガニのタグ付き活蟹尽くし極上温泉宿ガイド',
    description: '1泊1人8万〜15万円の最高峰ブランド活蟹プランを実質30％オフ！城崎温泉・三国温泉・皆生温泉のタグ付き松葉ガニ・越前ガニフルコース宿を厳選。冬の美食旅行をふるさと納税で賢く予約する完全攻略法。',
    heroTag: 'ふるさと納税×冬のブランド蟹・極上活蟹会席',
    leadTitle: '一杯数万円のタグ付き活蟹を刺し・焼き・茹で・甲羅酒で食べ尽くす、冬の至高のご褒美へ',
    leadText: '冬の日本海を代表する至高の味覚「本ズワイガニ」。港で水揚げされた証である青や黄色のタグが輝く活蟹は、繊細な甘みの花咲く「蟹刺し」、香ばしい湯気が立ち上る「焼き蟹」、濃厚な蟹味噌が溶け出す「茹で蟹」、そして贅沢な「甲羅酒」や「蟹雑炊」まで、ひと口ごとに唸るような感動をもたらします。しかし近年の高騰により、本物のブランド活蟹フルコースを提供する名門温泉旅館は1泊1人8万〜15万円以上になることも珍しくありません。そこで絶対に活用したいのが楽天ふるさと納税のトラベルクーポンです。寄付額の30％相当が宿泊補助として差し引かれるため、普段なら予算オーバーで諦めていた最上位の「タグ付き活蟹2杯付きフル会席プラン」が驚くほど身近に。兵庫・城崎、福井・三国、鳥取・皆生など、本場漁港直結の厳選名宿をご紹介します。',
    points: [
      {
        title: 'ポイント①：1泊10万円超えの最高峰「タグ付き活蟹プラン」の費用を大幅軽減',
        desc: '冷凍ガニとは次元が違う「本物のタグ付き活蟹」。高額になりがちな宿泊費だからこそ、ふるさと納税クーポン（30%割引）のインパクトが絶大。年収に応じた控除上限額内であれば、実質2,000円の自己負担で冬の王道グルメ旅が成立します。'
      },
      {
        title: 'ポイント②：日本海の荒波を望む展望露天風呂や老舗外湯めぐりもセットで満喫',
        desc: 'カニの名産地は日本屈指の温泉地でもあります。城崎の七湯めぐりや三国の日本海夕日露天風呂、皆生の塩化物泉で身体をポカポカに温めてから個室で蟹会席に舌鼓を打つ、冬ならではの極上ルーティンが叶います。'
      },
      {
        title: 'ポイント③：カニ漁解禁期間（11月〜3月）に合わせて早めのクーポン確保が吉',
        desc: '越前ガニや松葉ガニの漁期は11月上旬から翌年3月末まで。人気宿の週末は数ヶ月前から争奪戦になりますが、楽天トラベルクーポンなら予約後でも「あとから適用」が可能なため、まずは部屋を押さえてから寄付しても間に合います。'
      }
    ],
    sections: [
      {
        key: 'kinosaki_matsuba_crab',
        badge: '兵庫県豊岡市・開湯1300年の名湯と津居山がに',
        title: '豊岡市ふるさと納税で泊まる、城崎温泉の情緒あふれる柳並木と極上松葉ガニの宿',
        intro: '大谿川沿いに柳の木が揺れ、浴衣姿に下駄の音が響く城崎温泉。近隣の津居山港や柴山港で揚がる「松葉ガニ」は、日本海の厳しい荒波と深海で育まれた極上の身詰まりと甘さを誇ります。豊岡市のふるさと納税トラベルクーポンを使えば、数寄屋造りの老舗旅館や貸切風呂自慢の宿で、焼き蟹の香ばしい薫りと甘美な蟹刺しを贅沢に味わうフルコースステイをお得に予約可能。七つの外湯めぐりを楽しみながら、冬の温泉街情趣にどっぷりと浸かる旅が叶います。'
      },
      {
        key: 'mikuni_echizen_crab',
        badge: '福井県坂井市・皇室献上の名代「越前がに」',
        title: '坂井市ふるさと納税で泊まる、三国温泉の東尋坊を望む絶景と黄色タグ付き越前ガニ会席',
        intro: '全国のズワイガニの中で唯一、皇室に献上される歴史を持つ福井の「越前がに」。三国港に水揚げされる活蟹には品質の証として黄色いタグが付けられ、濃厚極まりない蟹味噌ときめ細やかな身の甘みは全国の食通を虜にしています。坂井市のふるさと納税クーポンを活用すれば、日本海に沈む夕日を一望する三国温泉の展望露天風呂宿や料理旅館にお得にステイ。茹でたて熱々の越前ガニに無心にかぶりつき、地酒「黒龍」とともに味わう冬の至福をご体感ください。'
      },
      {
        key: 'kaike_tottori_crab',
        badge: '鳥取県米子市・境港直送の活カニと美肌の海辺温泉',
        title: '米子市ふるさと納税で泊まる、皆生温泉の白砂青松と境港水揚げ松葉ガニ尽くし旅館',
        intro: '日本海に面した白砂青松の美しい弓ヶ浜沿いに湧く皆生温泉。日本有数のカニ水揚げ量を誇る境港に隣接しているため、朝競り落とされたばかりの極上松葉ガニがその日の夕食に並ぶという圧倒的な鮮度を誇ります。米子市のふるさと納税クーポンを使えば、全室オーシャンビューの海辺旅館や本格和風庭園を持つ老舗宿をお得にリザーブ。海のミネラルをたっぷり含んだ温まりの湯に浸かり、芳醇な蟹すき鍋や甲羅味噌焼きを堪能する山陰の美食ステイが待っています。'
      }
    ],
    faq: [
      {
        q: 'タグ付きガニと一般的なカニプランで何が違うのですか？',
        a: 'タグ付きガニは、指定された港（津居山・三国・境港など）で水揚げされ、大きさ・身詰まり・鮮度の厳格な基準をクリアした最高ランクの活蟹にのみ付けられる証明です。冷凍や輸入物とは甘み・食感・蟹味噌のコクが全く異なり、一度味わうとカニの概念が変わるほどの違いがあります。'
      },
      {
        q: 'カニの解禁期間以外（春・夏・初秋）でも予約できますか？',
        a: '本ズワイガニ（松葉ガニ・越前ガニ）の提供期間は通常11月上旬から翌年3月下旬までです。春から初秋にかけては、深海で獲れる「紅ズワイガニ（香住ガニ）」や白イカ、岩牡蠣などの旬グルメプランにふるさと納税クーポンを利用できます。'
      },
      {
        q: '子ども連れでもカニフルコースプランを楽しめますか？',
        a: '多くの宿では、大人向けにカニフルコースを提供しつつ、子ども用にはハンバーグやエビフライなどのキッズプレートや、カニを少しだけ取り分けたお子様向け会席を用意しています。個室食事処や部屋食プランを選べば、家族水入らずでゆっくり味わえます。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-local-gourmet-inn-stay',
        title: '【舌鼓を打つ美食旅】高千穂牛・あなご・伊勢海老！ご当地グルメ宿特集',
        desc: 'カニ以外の全国ご当地グルメも制覇！幻の和牛や獲れたて魚介をふるさと納税でお得に味わう旅。'
      },
      {
        slug: 'furusato-tax-luxury-hotspring-ryokan-stay',
        title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド',
        desc: '草津・有馬・伊豆の名湯宿。自己負担実質2,000円で泊まるふるさと納税の基礎知識と攻略法。'
      },
      {
        slug: 'furusato-tax-travel-after-booking-discount-guide',
        title: '【予約済みでも間に合う】「あとから割引」完全攻略ガイド',
        desc: 'カニ宿をすでに予約していても大丈夫！チェックイン前日までにクーポンをあとから適用する手順。'
      }
    ]
  },
  {
    slug: 'furusato-tax-remote-island-luxury-resort-stay',
    title: '【大人の隠れ家・極上の離島リゾート】日常を完全遮断する南国アイランドふるさと納税ステイ',
    description: '本土では決して味わえない圧倒的な静寂と大自然。屋久島・奄美大島・石垣島の世界遺産ロッジやオーシャンフロントヴィラを楽天ふるさと納税で賢く予約。飛行機や船で渡る大人のアイランドエスケープ。',
    heroTag: 'ふるさと納税×極上離島リゾート・自然遺産ステイ',
    leadTitle: '碧い海と深い原生林に囲まれ、波音と鳥の声だけが響く完全プライベートな休日へ',
    leadText: '都会の喧騒や慌ただしい日常から物理的に距離を置き、心と身体を真のリセットへと導く「離島の旅」。フェリーのデッキに立ち海原を渡る時間や、プロペラ機が小さな滑走路に着陸した瞬間の高揚感は、本州の旅とは一線を画す特別な旅情をもたらします。樹齢数千年の縄文杉が息づく世界自然遺産・屋久島、東洋のガラパゴスと称される豊かなマングローブと奄美ブルーの海が広がる奄美大島、そしてサンゴ礁と満天の天の川に包まれる八重山諸島の玄関口・石垣島。こうした離島にあるハイクラスリゾートや一棟貸しヴィラは、流通コストや贅沢な空間設計から宿泊料金が高めに設定されていますが、楽天ふるさと納税のトラベルクーポンを使えば実質30％割引で予約可能。自治体への寄付を通じて手付かずの自然保護を応援しながら、一生忘れられない離島滞在へ出かけませんか。',
    points: [
      {
        title: 'ポイント①：高単価になりがちな「離島のラグジュアリーヴィラ」を30％補助でお得に',
        desc: 'プライベートプール付きヴィラや全室テラス付きの自然派リゾートなど、離島ならではのプレミアム宿。ふるさと納税クーポンを活用すれば、例えば1泊10万円の宿泊費でも手出し7万円（税控除考慮で実質自己負担2,000円）で泊まることができます。'
      },
      {
        title: 'ポイント②：世界遺産の豊かな生態系を守る「地域貢献・エコツーリズム」',
        desc: '屋久島や奄美大島など、世界自然遺産に登録された自治体へのふるさと納税は、貴重な固有種や原生林の保全活動、エコツーリズム推進の財源として活用され、旅をすること自体が自然保護の力になります。'
      },
      {
        title: 'ポイント③：3年間有効だから「台風シーズンを避けたベストな日程」を選べる',
        desc: '離島旅行で気になるのが天候や台風。有効期間が3年間あるトラベルクーポンなら、梅雨明けの初夏や台風の少ない春・初秋など、ベストコンディションの時期を慎重に見極めて旅行計画を立てられます。'
      }
    ],
    sections: [
      {
        key: 'yakushima_nature_resort',
        badge: '鹿児島県屋久島町・樹齢千年の屋久杉と苔むす森',
        title: '屋久島町ふるさと納税で泊まる、世界自然遺産の深い緑と美肌温泉に癒やされる高級ロッジ',
        intro: '九州最高峰の宮之浦岳をはじめ、1,000m級の山々が連なる洋上のアルプス・屋久島。白谷雲水峡の幻想的な苔むす森や屋久杉の巨樹が放つ圧倒的な生命力は、訪れる者の人生観を変えるほどのパワーを持っています。屋久島町のふるさと納税トラベルクーポンを使えば、モッチョム岳の岩壁を望むラグジュアリーリゾートホテルや、天然温泉を引くプライベートヴィラをお得にリザーブ。屋久島近海で獲れた首折れサバやトビウオ会席を味わい、夜は波音を聞きながら満天の星を仰ぐ究極のヒーリングステイが叶います。'
      },
      {
        key: 'amami_luxury_villa',
        badge: '鹿児島県奄美市・龍郷町・手付かずの原生林と奄美ブルー',
        title: '奄美市・龍郷町ふるさと納税で泊まる、透明度抜群のビーチ直結オーシャンフロントヴィラ',
        intro: '世界自然遺産に登録され、亜熱帯の原生林とエメラルドグリーンのサンゴ礁が織りなす楽園・奄美大島。静かな波の音とガジュマルの木陰、夕暮れのマジックアワーなど、ゆったりと流れる島時間に身を委ねることができます。奄美市や龍郷町のふるさと納税クーポンを活用すれば、砂浜まで徒歩0分のヴィラや、奄美の伝統工芸・泥染めを取り入れたデザインホテルにスマートにステイ。名物の「鶏飯（けいはん）」や黒糖焼酎を楽しみながら、心洗われるアイランドライフを満喫しましょう。'
      },
      {
        key: 'ishigaki_private_resort',
        badge: '沖縄県石垣市・日本最南端の八重山リゾート',
        title: '石垣市ふるさと納税で泊まる、川平湾至近のプライベートプール付きスイートヴィラ',
        intro: 'ミシュラン・グリーンガイド三ツ星に輝く川平湾や、日本屈指の美しさを誇る石垣島の海。ダイビングやシュノーケリングはもちろん、夜には88星座中84星座を観測できる日本初の「星空保護区」としても知られています。石垣市のふるさと納税クーポンを使えば、誰にも邪魔されない専用プール付きヴィラや、オーシャンビューのテラスを持つ高級リゾートホテルをお得に予約可能。石垣牛の炭火焼きステーキや島野菜のフレンチを堪能し、南十字星が瞬く夜空を見上げる贅沢なひとときをどうぞ。'
      }
    ],
    faq: [
      {
        q: '離島への飛行機代やフェリー代もクーポンで割引できますか？',
        a: '楽天トラベルの「JAL楽パック」「ANA楽パック」などの航空券付き宿泊パックプランであれば、航空券と宿泊を合わせた総額に対してふるさと納税クーポンが適用可能です（パック対象プランに限る）。'
      },
      {
        q: '屋久島や奄美でのネイチャーガイドツアーの手配はどうすればいいですか？',
        a: '多くのリゾートホテルでは、提携しているプロの公認ガイドによるトレッキングツアーやカヤック体験の事前予約代行を行っています。初心者でも体力に合わせたコースを提案してもらえるため、宿泊予約時に宿へ相談するのがおすすめです。'
      },
      {
        q: 'レンタカーは島で手配したほうがいいですか？',
        a: '屋久島や奄美大島、石垣島は周囲が広く見どころが点在しているため、レンタカーの利用が非常に便利です。繁忙期は現地のレンタカーが満車になりやすいため、航空券・宿の予約と同時にレンタカーも確保しておくのが鉄則です。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-anniversary-luxury-suite-villa-stay',
        title: '【憧れの最高峰宿】記念日・プロポーズの極上スイート＆ヴィラ',
        desc: '特別な記念日を離島のプライベートプール付きヴィラで。箱根・京都・沖縄のハイクラスステイ。'
      },
      {
        slug: 'furusato-tax-solo-retreat-private-onsen-stay',
        title: '【おひとり様贅沢ステイ】客室露天風呂で心身をリセットするソロ温泉旅',
        desc: '一人で大自然に没頭したい方に。静寂の宿で過ごすソロワーケーション＆リトリート特集。'
      },
      {
        slug: 'furusato-tax-golf-resort-hotspring-stay',
        title: '【名門ゴルフ×ふるさと納税】トーナメントコース＆温泉ホテル宿泊パック',
        desc: '南国の風を感じながらラウンド！宮古島や川奈の名門シーサイドコース特集。'
      }
    ]
  },
  {
    slug: 'furusato-tax-winery-craft-beer-auberge-stay',
    title: '【ワイン＆地ビール×ふるさと納税】ぶどう畑を望むワイナリーホテル＆クラフト醸造オーベルジュ旅',
    description: 'ワイン愛好家・クラフトビール派必見！山梨・勝沼、北海道・富良野＆余市のぶどう畑を一望するワイナリー併設宿や美食オーベルジュを厳選。テロワールを味わい尽くす大人の美酒ステイをふるさと納税で賢く予約。',
    heroTag: 'ふるさと納税×ワイナリーリゾート・クラフトビール宿',
    leadTitle: 'ぶどう畑の風を感じ、醸造家が情熱を注いだグラスを傾け、そのまま心地よい眠りへ',
    leadText: 'その土地の土壌、気候、日照、そして人の情熱が凝縮された「テロワール」。日本ワインの銘醸地として世界から注目を集める山梨・勝沼、雄大な大地に広がる北海道・富良野、そして冷涼な気候が育む最高峰のピノ・ノワールやシャルドネで知られる北海道・余市。一面に広がるぶどう畑をテラスから眺め、セラーから取り出されたばかりの限定ワインと、地元食材を極めたシェフ渾身のフレンチとのマリアージュに酔いしれる――お酒と美食を愛する旅人にとって、ワイナリー併設ホテルやオーベルジュへの滞在はまさに憧れの体験です。さらに楽天ふるさと納税のトラベルクーポンを活用すれば、宿泊代金の30％が補助され、実質負担を抑えてワンランク上のペアリングコース付きプランを選択可能。ほろ酔いの心地よさに包まれたまま客室のベッドへ倒れ込める、至福のワイナリーステイへご案内します。',
    points: [
      {
        title: 'ポイント①：帰りの運転を気にせず、思う存分グラスを重ねられる最大の贅沢',
        desc: 'ワイナリー巡りの一番の悩みは「運転手がお酒を飲めない」こと。宿泊施設を兼ねたオーベルジュやワイナリーホテルなら、全員が気兼ねなくテイスティングやペアリングディナーを堪能できます。'
      },
      {
        title: 'ポイント②：市販されていない「ワイナリー限定・熟成ビンテージ」に出会える',
        desc: '併設レストランやセラーでは、一般の酒販店やネット通販には出回らないワイナリー限定ロットやバックビンテージがオンリスト。生産者やソムリエから直接ブドウ栽培のこだわりを聞きながら味わう一杯は格別です。'
      },
      {
        title: 'ポイント③：宿泊費をクーポンで抑えた分、希少ワインや地元お土産を贅沢に購入',
        desc: 'ふるさと納税クーポンによって宿泊代金が大幅に浮くため、ディナーでの高級ワインのボトル注文や、旅の記念に自宅へ送るお気に入りのワイン・クラフトビール箱買いを思い切り楽しめます。'
      }
    ],
    sections: [
      {
        key: 'katsunuma_wine_stay',
        badge: '山梨県甲州市・日本ワイン発祥の地「勝沼」',
        title: '甲州市ふるさと納税で泊まる、甲州ぶどうの丘と自家源泉ワイン風呂を持つ名宿',
        intro: '約30軒もの個性豊かなワイナリーがひしめく日本ワインの聖地・山梨県甲州市勝沼。盆地を見下ろす丘陵地帯一面に広がるぶどう畑の風景は、まるで南フランスやトスカーナを彷彿とさせます。甲州市のふるさと納税トラベルクーポンを使えば、勝沼のぶどう畑や富士山を望む展望ホテルや、名物の「ワイン風呂」を備えた温泉旅館にお得にステイ。和食にも寄り添う爽やかな甲州種ワインや果実味豊かなマスカット・ベーリーAとともに、甲州牛や富士桜ポークを味わう極上のペアリングナイトが楽しめます。'
      },
      {
        key: 'furano_winery_resort',
        badge: '北海道富良野市・大雪山連峰を望むふらのワインの里',
        title: '富良野市ふるさと納税で泊まる、ラベンダーとぶどう畑に抱かれる高原ワインリゾート',
        intro: 'ラベンダー畑とパッチワークの丘で全国に知られる北海道・富良野。寒暖差の激しい内陸性気候は糖度の高い良質なぶどうを育み、「ふらのワイン」として独自の進化を遂げています。富良野市のふるさと納税クーポンを活用すれば、十勝岳連峰のパノラマを望むリゾートホテルや自然派ロッジにお得に宿泊可能。北海道の大自然が育んだチーズやふらの和牛、みずみずしいアスパラガスとともに、富良野産ワインのふくよかなアロマを堪能する優雅な高原ステイが叶います。'
      },
      {
        key: 'yoichi_wine_hotel',
        badge: '北海道余市町・世界が熱視線を注ぐ銘醸地「余市」',
        title: '余市町ふるさと納税で泊まる、最高峰日本ワインの聖地・余市の美食オーベルジュ',
        intro: '世界的なワインコンクールで受賞を重ね、いまや日本で最も入手困難なグランヴァンを次々と生み出している北海道余市町。日本海からの潮風と水はけの良い丘陵地が、香り高くミネラル豊かな奇跡のぶどうを実らせます。余市町のふるさと納税クーポンを使えば、ワイナリーが点在する余市・仁木エリアの隠れ家オーベルジュやデザインホテルをお得に予約可能。日本海で揚がるウニやアワビ、サクラマスと余市産ピノ・ノワールとの至高のマリアージュをお楽しみください。'
      }
    ],
    faq: [
      {
        q: 'お酒がそこまで強くない人でも楽しめますか？',
        a: '多くのワイナリーホテルやオーベルジュでは、アルコール度数の低い微発泡ワインや、ワイナリー特製の高級ノンアルコールぶどうジュース、クラフトティーなどのノンアルコールペアリングも充実しており、お酒が苦手な方でも料理との調和を存分に堪能できます。'
      },
      {
        q: 'ワイナリーの見学や醸造所ツアーは宿泊者限定で参加できますか？',
        a: '宿によっては、宿泊者限定のプライベートセラー見学や、醸造責任者（ワインメーカー）によるテイスティングセミナーが開催されている場合があります。収穫期（9月〜10月）にはブドウの収穫体験ができるイベントを用意しているところもあります。'
      },
      {
        q: 'ワインの購入や配送はホテルから直接できますか？',
        a: 'はい、ホテル内のセラーや直営ショップで購入したワインは、品質を損なわないようクール便で自宅へ一括配送してもらうことが可能です。重いボトルを持ち運ぶことなく手ぶらで帰路につけます。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-local-gourmet-inn-stay',
        title: '【舌鼓を打つ美食旅】高千穂牛・あなご・伊勢海老！ご当地グルメ宿特集',
        desc: 'ワインとともに楽しみたい産地直送の極上料理！全国の料理自慢宿をふるさと納税でお得に。'
      },
      {
        slug: 'furusato-tax-solo-retreat-private-onsen-stay',
        title: '【おひとり様贅沢ステイ】客室露天風呂で心身をリセットするソロ温泉旅',
        desc: '読書とワインを片手に過ごす大人のソロ時間。静寂に包まれる一人旅向け温泉宿特集。'
      },
      {
        slug: 'furusato-tax-luxury-hotspring-ryokan-stay',
        title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド',
        desc: '草津・有馬・伊豆の名湯宿。自己負担実質2,000円で泊まるふるさと納税の基礎知識と攻略法。'
      }
    ]
  },
  {
    slug: 'furusato-tax-welcome-baby-family-kids-stay',
    title: '【赤ちゃん・未就学児連れ安心×ふるさと納税】ウェルカムベビー認定宿＆離乳食・貸切風呂完備の家族温泉旅ガイド',
    description: '初めての温泉旅行も安心！ミキハウス子育て総研「ウェルカムベビーのお宿」認定ホテルや、おむつ・調乳器・離乳食・貸切風呂完備の宿を厳選。パパママの育児疲れを癒やす家族旅行をふるさと納税でお得に実現。',
    heroTag: 'ふるさと納税×ウェルカムベビー・乳幼児連れ温泉宿',
    leadTitle: '「子どもが泣いたらどうしよう…」の不安を解消。赤ちゃんファーストの設備とおもてなしへ',
    leadText: '「赤ちゃんが生まれてから、毎日育児に追われて温泉なんて夢のまた夢…」「泣き声で周りに迷惑をかけないか心配」「大浴場に連れて行くのは衛生面や温度が不安」。そんな新米パパ・ママの不安を100％解消してくれるのが、ミキハウス子育て総研認定の「ウェルカムベビーのお宿」や、乳幼児連れファミリー専用のサポートプランを用意している温泉旅館です。客室にはおむつ用ゴミ箱、調乳ポット、空気清浄機、ベビーバスが完備され、夕食はお部屋食または個室ダイニングで月齢に応じた手作り離乳食が提供されます。こうした細やかなサービスが充実した宿は通常プランより設備費用がかかりますが、楽天ふるさと納税のトラベルクーポン（30％補助）を使えば実質自己負担2,000円で無理なくアップグレード可能。赤ちゃんの温泉デビューを家族みんなの最高の笑顔で飾りましょう。',
    points: [
      {
        title: 'ポイント①：おむつ・おしりふき使い放題＆手ぶらで身軽に行ける安心感',
        desc: '赤ちゃん連れの旅行で一番大変なのが大量の荷物。ウェルカムベビー対応宿なら、各サイズのおむつやおしりふき、ベビーソープ、調乳ウォーターが無料で用意されており、荷物を劇的に減らして身軽に出発できます。'
      },
      {
        title: 'ポイント②：周囲に気兼ねしない「家族専用貸切風呂」や「客室露天風呂」',
        desc: '他のお客さんに気兼ねせず、家族だけでゆっくり入れる貸切風呂や客室露天風呂。ぬるめの適温設定やベビーバス、バスチェア完備の宿を選べば、安心して赤ちゃんの温泉デビューが叶います。'
      },
      {
        title: 'ポイント③：育休中の思い出作りや出産祝いのプレゼント旅行にも最適',
        desc: '「ママの日頃の育児疲れをねぎらいたい」「育休が終わる前に平日のお得な時期に旅行へ行きたい」。有効期限3年のふるさと納税クーポンなら、赤ちゃんの体調や成長のタイミングに合わせて柔軟に予約できます。'
      }
    ],
    sections: [
      {
        key: 'atami_baby_friendly',
        badge: '静岡県熱海市・新幹線直通＆段差の少ない快適宿',
        title: '熱海市ふるさと納税で泊まる、新幹線で手軽に行ける熱海の貸切温泉＆個室食ファミリー旅館',
        intro: '東京駅から新幹線で最速45分という近さは、長時間の車移動やぐずりが心配な赤ちゃん連れにとって最大の救い。熱海温泉には、フラットな畳敷き客室やベビーベッド、家族貸切風呂を完備し、パパママの心身をいたわる温かなおもてなしの宿が集まります。熱海市のふるさと納税トラベルクーポンを使えば、お部屋食で伊豆の海の幸をゆっくり堪能できる名宿をお得にリザーブ。波の音を聞きながら赤ちゃんと一緒にゆったりとお風呂に浸かる、心ほどける家族旅行が叶います。'
      },
      {
        key: 'nasu_baby_resort',
        badge: '栃木県那須町・ミキハウス子育て総研認定リゾート',
        title: '那須町ふるさと納税で泊まる、那須高原のウェルカムベビー認定ルーム＆キッズパーク付き温泉ホテル',
        intro: '皇室の御用邸がある那須高原は、豊かな自然と清らかな空気に満ちたファミリーリゾートのメッカ。角のない安全な家具、ハイハイスペース、おもちゃや絵本が充実した「ウェルカムベビー認定ルーム」を持つ大型ホテルが点在しています。那須町のふるさと納税クーポンを活用すれば、広大な屋内キッズプレイルームや温泉プール、月齢別離乳食バイキングを備えた人気リゾートにお得にステイ。パパもママも童心に返って子どもと一緒に楽しめる休日が待っています。'
      },
      {
        key: 'minamiboso_baby_inn',
        badge: '千葉県南房総市・温暖な気候と海辺の静かな湯宿',
        title: '南房総市ふるさと納税で泊まる、一年中温暖な南房総の畳敷き客室＆ベビーバス完備の温泉宿',
        intro: '冬でも温暖で花々が咲き誇る千葉県南房総エリア。都心からアクアラインでアクセスしやすく、海辺の穏やかな空気が赤ちゃん連れを優しく迎えてくれます。南房総市のふるさと納税クーポンを使えば、大浴場まで畳敷きで転んでも安心な和風旅館や、お部屋にベビーバス・補助便座を用意してくれる海辺の温泉宿をお得に予約可能。獲れたての房総地魚の煮付けに舌鼓を打ちながら、赤ちゃんの初めての海と温泉をゆったりとお楽しみください。'
      }
    ],
    faq: [
      {
        q: '急な発熱などで直前にキャンセルした場合、ふるさと納税クーポンはどうなりますか？',
        a: '宿泊をキャンセルした場合、利用予定だったふるさと納税クーポンは自動的にアカウントへ返却されます。クーポンの有効期限（3年間）内であれば、赤ちゃんの体調が回復した後に別の日程で改めて予約・利用することが可能です。'
      },
      {
        q: '温泉の泉質は赤ちゃんのデリケートな肌でも大丈夫ですか？',
        a: '刺激の少ない「弱アルカリ性単純温泉」や「中性泉」の宿を選ぶのが安心です。また、多くのベビー歓迎宿では、温泉だけでなく水道水・真水の内湯やベビーバスを用意しているため、不安な場合はそちらを利用することもできます。'
      },
      {
        q: '離乳食の温めや哺乳瓶の消毒は宿でお願いできますか？',
        a: 'ウェルカムベビー認定宿やファミリープラン対応宿では、電子レンジや調乳ポットが客室または共用スペースに設置されているほか、フロントで哺乳瓶の煮沸消毒や電子レンジ消毒を快く引き受けてくれます。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-three-generation-family-luxury-stay',
        title: '【3世代家族旅行×高額枠一括消化】親孝行＆孫と泊まる客室露天風呂',
        desc: 'おじいちゃん・おばあちゃんも一緒に！熱海・白浜・那須の広々とした離れやコネクティングルーム宿。'
      },
      {
        slug: 'furusato-tax-shinkansen-station-walk-hotspring-stay',
        title: '【車なし・雪道運転不要】新幹線駅直結の名湯温泉旅館ガイド',
        desc: 'ベビーカーでの電車移動もラクラク！新幹線を降りてすぐ歩いて行ける駅近名湯特集。'
      },
      {
        slug: 'furusato-tax-luxury-hotspring-ryokan-stay',
        title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド',
        desc: '草津・有馬・伊豆の名湯宿。自己負担実質2,000円で泊まるふるさと納税の基礎知識と攻略法。'
      }
    ]
  }
];

function generatePage(page) {
  const dir = path.join(__dirname, 'src/app', page.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const pointsCode = page.points.map((pt, idx) => `
          <div className="bg-gradient-to-br from-amber-50/80 to-stone-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3 flex items-start gap-3 font-serif">
              <span className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm font-sans font-black shrink-0">
                ${idx + 1}
              </span>
              <span>${pt.title}</span>
            </h3>
            <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-11">
              ${pt.desc}
            </p>
          </div>
  `).join('\n');

  const sectionsCode = page.sections.map(sec => {
    return `
        {/* セクション: ${sec.key} */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-amber-100 text-amber-900 border border-amber-300/60 rounded-full text-xs font-bold tracking-wider">
              ${sec.badge}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 font-serif">
            ${sec.title}
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            ${sec.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secData['${sec.key}']?.hotels && secData['${sec.key}'].hotels.length > 0 ? (
              secData['${sec.key}'].hotels.map((hotel: any) => (
                <div
                  key={hotel.hotelNo}
                  className="group bg-stone-50/70 border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-stone-200">
                    <img
                      src={hotel.hotelImageUrl || hotel.roomImageUrl || '/images/no-image.jpg'}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-stone-900/85 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1 rounded-full shadow">
                      ★ {hotel.reviewAverage ? hotel.reviewAverage.toFixed(1) : '好評'}
                    </div>
                    {hotel.reviewCount > 0 && (
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-stone-800 text-[11px] font-medium px-2.5 py-0.5 rounded shadow">
                        クチコミ {hotel.reviewCount}件
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-stone-900 text-lg md:text-xl mb-2 line-clamp-2 font-serif group-hover:text-amber-800 transition">
                        {hotel.hotelName}
                      </h3>
                      <p className="text-stone-600 text-xs mb-3 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-amber-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="line-clamp-1">{hotel.address1}{hotel.address2}</span>
                      </p>
                      <p className="text-stone-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {hotel.hotelSpecial || hotel.userReview || '極上のおもてなしと特別な空間を堪能できる、ふるさと納税トラベルクーポン対象宿です。'}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between gap-2">
                      <div className="text-xs text-stone-500">
                        {hotel.hotelMinCharge ? (
                          <div>
                            <span className="text-[11px] text-stone-400 block">参考宿泊目安</span>
                            <span className="text-stone-900 text-base font-bold">{hotel.hotelMinCharge.toLocaleString()}</span>円〜
                          </div>
                        ) : (
                          <span className="text-stone-500 font-medium">プラン一覧で確認</span>
                        )}
                      </div>
                      <a
                        href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold transition shadow-sm hover:shadow"
                      >
                        ふるさと納税対象プラン
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 p-8 bg-stone-100 rounded-2xl text-center text-stone-600 text-sm">
                現在、該当自治体のおすすめ宿泊施設データを更新中です。
              </div>
            )}
          </div>
        </section>`;
  }).join('\n');

  const faqsCode = page.faq.map(f => {
    return `
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/80">
              <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 flex items-start gap-2.5">
                <span className="text-amber-700 font-serif font-black text-xl">Q.</span>
                <span>${f.q}</span>
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed pl-7">
                ${f.a}
              </p>
            </div>`;
  }).join('\n');

  const relatedLinksCode = page.relatedLinks.map(rel => `
            <Link
              href="/${rel.slug}"
              className="group block bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-400 hover:shadow-md transition duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                  あわせて読みたい
                </span>
                <span className="text-xs text-stone-400 group-hover:text-amber-700 transition">記事を読む →</span>
              </div>
              <h4 className="font-bold text-stone-900 text-base md:text-lg mb-2 group-hover:text-amber-800 transition font-serif">
                ${rel.title}
              </h4>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                ${rel.desc}
              </p>
            </Link>
  `).join('\n');

  const content = `import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import seasonalData from '@/data/all_seasonal_rakuten_hotels.json';

export const metadata: Metadata = {
  title: '${page.title} | クラウドトラベル',
  description: '${page.description}',
  openGraph: {
    title: '${page.title} | クラウドトラベル',
    description: '${page.description}',
    type: 'article',
  },
};

export default function Page() {
  const secData = (seasonalData as any)['${page.slug}'] || {};

  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* パンくずリスト */}
        <nav className="text-xs md:text-sm text-stone-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-stone-900 underline transition">ホーム</Link>
          <span>/</span>
          <span className="text-stone-800 font-medium">${page.heroTag}</span>
        </nav>

        {/* ヘッダーバナー */}
        <header className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-amber-900/40">
          <div className="inline-block px-3.5 py-1 bg-amber-500/20 text-amber-200 border border-amber-400/30 rounded-full text-xs font-semibold mb-4 tracking-wider">
            ${page.heroTag}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight tracking-tight text-amber-50">
            ${page.title}
          </h1>
          <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
            ${page.leadText}
          </p>
          <div className="flex flex-wrap gap-4 pt-4 border-t border-amber-900/50 text-xs text-amber-200/90 font-medium">
            <span>✓ 寄付額の最大30％相当を宿泊クーポン還元</span>
            <span>✓ クーポンの有効期限はゆとりの3年間</span>
            <span>✓ 予約済みでも「あとから割引」対応</span>
          </div>
        </header>

        {/* 制度解説・攻略ポイントセクション */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <div className="mb-8">
            <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">
              STRATEGY GUIDE
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mt-3 font-serif">
              ${page.leadTitle}
            </h2>
          </div>
          <div className="space-y-6">
            ${pointsCode}
          </div>
        </section>

        {/* メインコンテンツセクション */}
        ${sectionsCode}

        {/* よくある質問 FAQ */}
        <section className="mb-16 bg-white rounded-3xl shadow-sm border border-stone-200/80 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6 font-serif flex items-center gap-2">
            <span className="w-2.5 h-7 bg-amber-700 rounded-full inline-block"></span>
            よくある質問・ふるさと納税トラベルクーポンの疑問を解消
          </h2>
          <div className="space-y-4">
            ${faqsCode}
          </div>
        </section>

        {/* 相互回遊リンク */}
        <section className="bg-stone-200/80 rounded-3xl p-6 md:p-10 border border-stone-300">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-stone-600 bg-white/70 px-3 py-1 rounded-full uppercase tracking-wider">
              RELATED GUIDES
            </span>
            <h3 className="text-2xl font-bold text-stone-900 mt-2 mb-3 font-serif">
              ふるさと納税トラベルをもっと使いこなす
            </h3>
            <p className="text-stone-600 text-sm">
              お得な「あとから割引」の裏ワザから、ご当地グルメ特化宿、愛犬同伴・個室サウナ宿まで、旅のスタイルに合わせた完全ガイドをチェック！
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${relatedLinksCode}
          </div>
        </section>
      </div>
    </main>
  );
}
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), content, 'utf8');
  console.log(`Generated page: ${page.slug}/page.tsx`);
}

for (const p of pages) {
  generatePage(p);
}
console.log('All 4 round 4 furusato pages generated successfully!');
