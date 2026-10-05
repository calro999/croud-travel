const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
const allHotels = JSON.parse(fs.readFileSync(p, 'utf8'));

const pages = [
  {
    slug: 'furusato-tax-secret-hotspring-lamp-retreat-stay',
    title: '【秘湯・ランプの宿×ふるさと納税】電波の届かぬ渓谷野天風呂で過ごすデジタルデトックス名湯旅',
    description: 'スマホを置いて、ランプの灯りとせせらぎに包まれる。群馬・法師温泉、徳島・祖谷温泉、青森・酸ヶ湯温泉の国登録有形文化財宿や秘境野天風呂を厳選。実質2,000円で叶える本物の秘湯デジタルデトックス旅。',
    heroTag: 'ふるさと納税×秘境・ランプの秘湯宿',
    leadTitle: '川底からぷくぷくと湧き出す源泉と、木造建築の温もり。現代人が忘れていた静寂を求めて',
    leadText: 'スマートフォンが絶え間なく通知を鳴らし、画面から目を離せない現代社会。情報過多に疲れた脳と身体を真に癒やしてくれるのは、電波の届かない山奥にぽつんと佇む「本物の秘湯宿」です。明治時代に建てられた総ヒバ造りの湯船の底から自然湧出する群馬・法師温泉、急峻な断崖絶壁をケーブルカーで下った谷底に湧く徳島・祖谷温泉、そして豪雪地帯の八甲田山中で湯治文化を守り続ける青森・酸ヶ湯温泉。夕暮れとともに灯されるランプのやわらかな炎を眺め、ブナの原生林を渡る風の音を聞きながら湯船に体を沈めれば、凝り固まった日常の緊張がすっと溶け出していくのを感じます。楽天ふるさと納税のトラベルクーポンを使えば、山奥の維持管理にコストがかかる秘湯宿に実質30％割引で宿泊可能。都会では決して味わえない、贅沢な静寂と素朴なおもてなしへご案内します。',
    points: [
      {
        title: 'ポイント①：秘境の自然環境や歴史建築を守る「文化財保全」への寄付',
        desc: '道路の維持や雪害対策、木造文化財の修繕など、秘湯宿を維持するには膨大な手間と費用がかかります。ふるさと納税を通じた自治体への寄付は、日本の貴重な秘湯文化を後世に残すための確かな支援になります。'
      },
      {
        title: 'ポイント②：足元湧出・混浴・自噴！「温泉本来の力強い地球の恵み」を体感',
        desc: '加温も加水も循環もしない、生まれたての地球のエネルギーをダイレクトに浴びる極上浴。足元から湯玉が立ちのぼる奇跡の湯船や、白い湯煙が立ち込める大浴場は、一度体験すると忘れられない感動を与えてくれます。'
      },
      {
        title: 'ポイント③：素朴な山の恵み・山菜・川魚を囲む囲炉裏会席',
        desc: '都会の高級食材とは一味違う、清流のイワナやアユの塩焼き、春の山菜、秋のきのこ、冬のジビエ鍋など、土地の滋味をそのままいただく素朴で滋味あふれる料理が心と身体を芯から満たしてくれます。'
      }
    ],
    sections: [
      {
        key: 'houshi_secret_onsen',
        badge: '群馬県みなかみ町・国登録有形文化財の奇跡の一軒宿',
        title: 'みなかみ町ふるさと納税で泊まる、法師温泉長寿館の明治建築と足元湧出「法師乃湯」',
        intro: '三国峠のふもと、深い森と清流に抱かれた一軒宿「法師温泉 長寿館」。明治28年に建てられた木造の大浴場「法師乃湯」は、国の登録有形文化財に指定され、太い丸太の梁とノスタルジックな窓から差し込む光の美しさは息を呑むほどです。浴槽の底に敷き詰められた玉石の間からぷくぷくと自然湧出する43度の純度100％源泉は、入浴した瞬間に肌を優しく包み込みます。みなかみ町のふるさと納税トラベルクーポンを使って、与謝野晶子や川端康成など多くの文人が逗留した歴史ある客室で、ランプの灯りに癒やされる極上の秘湯ステイをお過ごしください。'
      },
      {
        key: 'iya_secret_onsen',
        badge: '徳島県三好市・日本三大秘境の断崖絶壁に湧く名湯',
        title: '三好市ふるさと納税で泊まる、秘境祖谷渓の専用ケーブルカーで行く源泉かけ流し谷底露天風呂',
        intro: '平家落人伝説が息づく日本三大秘境・祖谷渓。深く切り立ったV字谷の断崖に佇む一軒宿では、高低差約170m・傾斜42度の断崖を専用ケーブルカーで約5分かけて下った祖谷川の河原に、奇跡の露天風呂が待っています。毎分1,500リットル以上自噴する白濁のぬる湯は硫黄の香りが漂い、川の轟音と大自然のパノラマに包まれる圧倒的な秘境体験。三好市のふるさと納税クーポンを活用して、名物のかずら橋散策や祖谷そば、阿波尾鶏の炭火焼きを味わいながら、俗世を離れた大人の隠れ家休日をご堪能ください。'
      },
      {
        key: 'sukayu_secret_onsen',
        badge: '青森県青森市・八甲田の豪雪に抱かれる国民保養温泉地第1号',
        title: '青森市ふるさと納税で泊まる、酸ヶ湯温泉旅館の歴史ある総ヒバ造り「ヒバ千人風呂」',
        intro: '八甲田連峰の懐深く、日本屈指の豪雪地帯に佇む「酸ヶ湯（すかゆ）温泉」。昭和29年に国民保養温泉地第1号に指定された名湯中の名湯です。160畳もの広さを誇る名物「ヒバ千人風呂」は、柱が一本もない総ヒバ造りの大空間に青白い強酸性の硫黄泉がこんこんと湧き出します。熱湯、四分六分の湯、鹿の湯など異なる源泉を巡り、身体の芯からデトックス。青森市のふるさと納税クーポンを使えば、昔ながらの風情を残す湯治棟やモダンな旅館棟にお得にステイ。津軽の郷土料理を味わいながら、本物の湯治文化に浸る旅が叶います。'
      }
    ],
    faq: [
      {
        q: '秘湯宿はスマートフォンやインターネットの電波は通じますか？',
        a: '山奥の秘湯では、携帯キャリアによって圏外になる場所や、館内ロビー周辺のみWi-Fiが繋がる宿が多いです。あらかじめ仕事の連絡を済ませ、「意図的にスマホを見ないデジタルデトックスの休日」として滞在するのが最高の過ごし方です。'
      },
      {
        q: '冬期のアクセスや道路状況（雪道）はどうですか？',
        a: '酸ヶ湯温泉や法師温泉などは冬に数メートルの積雪を記録する豪雪地帯です。冬場はJR主要駅（新青森駅や上毛高原駅など）からの宿送迎バスや路線バスの利用が強く推奨されます。ふるさと納税クーポンは公共交通機関で向かう旅にも安心してお使いいただけます。'
      },
      {
        q: '混浴の大浴場に女性が入る際の配慮や女性専用時間はありますか？',
        a: '法師乃湯やヒバ千人風呂など歴史ある混浴大浴場では、女性専用の入浴時間帯が毎日しっかりと設定されているほか、専用の女性湯（内湯・露天）も完備されています。女性の方でも安心して名湯を満喫できます。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-bihada-medicinal-springs-retreat-stay',
        title: '【奇跡の名湯】強炭酸泉・天然泥湯・美肌の湯で巡る湯治リトリート',
        desc: '温泉効能にとことんこだわりたい方に！大分・長湯や鹿児島・霧島の名泉を巡る旅。'
      },
      {
        slug: 'furusato-tax-solo-retreat-private-onsen-stay',
        title: '【おひとり様贅沢ステイ】客室露天風呂で心身をリセットするソロ温泉旅',
        desc: '誰にも邪魔されず静寂に浸る。四万・別所・黒川の客室露天風呂宿特集。'
      },
      {
        slug: 'furusato-tax-luxury-hotspring-ryokan-stay',
        title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド',
        desc: '草津・有馬・伊豆の名湯宿。自己負担実質2,000円で泊まるふるさと納税の基礎知識と攻略法。'
      }
    ]
  },
  {
    slug: 'furusato-tax-luxury-glamping-bbq-dome-stay',
    title: '【豪華グランピング×ふるさと納税】手ぶら炭火BBQ＆薪割り焚き火！星空ドームテント完全ガイド',
    description: '道具不要・ホテル並みの快適ベッド＆冷暖房完備！富士山麓・琵琶湖畔・淡路島のラグジュアリーグランピング施設を厳選。満天の星空、ご当地ブランド牛BBQ、薪割り焚き火体験をふるさと納税でお得に楽しむ方法。',
    heroTag: 'ふるさと納税×高級グランピング・星空ドーム',
    leadTitle: '大自然の開放感とホテルの極上リゾート体験が融合。キャンプの面倒をゼロにした贅沢アウトドアへ',
    leadText: '「大自然の中でパチパチとはぜる焚き火を眺めたい」「満天の星空の下で本格炭火BBQを楽しみたい」。そう思いながらも、テントの設営や片付け、虫対策、冷え込みへの不安からキャンプに二の足を踏んでいた方に大人気なのが、冷暖房完備のラグジュアリー「ドームテントグランピング」です。ふかふかのシモンズ製ベッドに横たわり、天井の透明ドーム窓から星空を眺め、ウッドデッキでは地元ブランド牛や獲れたて野菜を豪快にグリル。プライベートサウナや客室温泉ジャグジーを備えたハイグレード施設も急増しています。こうした最新グランピングは1泊2食付きで1人3万〜6万円以上になることも多いですが、楽天ふるさと納税のトラベルクーポン（30％補助）を使えば実質自己負担2,000円で驚くほどお得に予約可能。富士山を間近に望む河口湖、夕日が湖面に映える琵琶湖、海風薫る淡路島など、憧れのアウトドアリゾートへご案内します。',
    points: [
      {
        title: 'ポイント①：高単価になりがちな「食事付きグランピング」を30％割引でお得に',
        desc: '黒毛和牛サーロインや海鮮焼き、ワインなどがセットになったグランピングの夕朝食付きプラン。ふるさと納税クーポンを使えば家族4人・グループでの宿泊費から数万円単位の値引きが即座に成立します。'
      },
      {
        title: 'ポイント②：テント設営も後片付けも一切不要！手ぶらで大自然を満喫',
        desc: '重いキャンプギアの購入や車への積み込み、雨の日の撤収作業など、面倒な作業はすべてスタッフにお任せ。手ぶらで到着してすぐに焚き火カフェやマシュマロ焼き、クラフトビールを楽しめます。'
      },
      {
        title: 'ポイント③：客室専用のプライベート空間だから子ども連れや女子旅も安心',
        desc: '各ドームテントごとに専用のBBQスペース、シャワールーム、水洗トイレが独立設置されている施設がほとんど。周囲に気兼ねせず、家族や仲間だけで夜更けまで語り合うプライベートな時間が過ごせます。'
      }
    ],
    sections: [
      {
        key: 'kawaguchiko_glamping',
        badge: '山梨県富士河口湖町・霊峰富士を正面に仰ぐ特等席',
        title: '富士河口湖町ふるさと納税で泊まる、富士山麓の大型ドームテント＆甲州ワインビーフBBQ',
        intro: '富士山の雄大な裾野と澄んだ空気に包まれる山梨県富士河口湖エリア。針葉樹の森の中に佇むジオデシック・ドームテントからは、時間とともに表情を変える大迫力の富士山パノラマを一望できます。富士河口湖町のふるさと納税トラベルクーポンを使えば、客室専用のバレルサウナや焚き火台を備えたハイクラス施設をお得に予約可能。甲州ワインビーフや富士桜ポークを豪快に焼き上げ、焚き火の炎を見つめながら夜空の星を数える最高のアウトドアリゾートが叶います。'
      },
      {
        key: 'biwako_glamping',
        badge: '滋賀県高島市・近江八幡市・雄大な琵琶湖のレイクビュー',
        title: '滋賀県ふるさと納税で泊まる、琵琶湖畔のプライベートビーチ＆近江牛プレミアムアウトドア',
        intro: '日本最大の湖・琵琶湖の穏やかな水面を望むレイクサイドグランピング。白砂のプライベートビーチが目の前に広がり、SUPやカヤックなど湖上アクティビティも充実しています。滋賀県のふるさと納税クーポンを活用すれば、天然温泉ジャグジー付きドームテントや大型ヴィラにお得にステイ。日本三大和牛「近江牛」の極上ステーキと地元有機野菜を炭火で焼き、夕暮れのグラデーションに染まる琵琶湖を眺めながら味わう贅沢なアウトドアナイトを満喫できます。'
      },
      {
        key: 'awaji_glamping',
        badge: '兵庫県淡路市・夕日と潮風薫るアイランドグランピング',
        title: '淡路市ふるさと納税で泊まる、明石海峡を望むオーシャンドーム＆淡路牛・甘玉ねぎBBQ',
        intro: '都心・関西圏から明石海峡大橋を渡ってすぐのリゾートアイランド・淡路島。海沿いに並ぶ近未来的なドームテントからは、青い海と夕日が織りなす絶景が広がります。淡路市のふるさと納税クーポンを使えば、客室専用プールやインフィニティ温泉露天風呂を備えた最高峰グランピングをお得にリザーブ。糖度抜群の淡路島玉ねぎや淡路牛、近海で揚がるタコや鯛を豪快に味わう、五感を満たすアイランドステイをご堪能ください。'
      }
    ],
    faq: [
      {
        q: 'ドームテント内は冬は寒く、夏は暑くないですか？',
        a: '最新のグランピングドームテントは二重構造の特殊断熱シートで作られており、強力な冷暖房エアコンが完備されています。真冬の雪景色や真夏の炎天下でも、高級ホテルの客室と変わらない快適な室温で過ごすことができます。'
      },
      {
        q: '雨が降った場合、BBQや焚き火はどうなりますか？',
        a: '各テントに併設されたBBQデッキやダイニングスペースには屋根や開閉式スクリーンが備わっており、雨天でも濡れずに快適にBBQや焚き火を楽しめる設計になっています。'
      },
      {
        q: '食材やお酒の持ち込みは自由にできますか？',
        a: '多くの施設では、基本の豪華BBQセット付きプランのほか、道の駅で買った地元の海鮮やお気に入りのお酒を持ち込める「持ち込み自由プラン」も用意されています。旅のスタイルに合わせて選ぶことができます。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-pet-sauna-private-hotspring-stay',
        title: '【愛犬同伴＆プライベートサウナ】贅沢な休日をご褒美ステイ！',
        desc: 'グランピングと相性抜群のサウナ＆愛犬同伴！大自然の中でととのう極上アウトドア特集。'
      },
      {
        slug: 'furusato-tax-welcome-baby-family-kids-stay',
        title: '【赤ちゃん連れ安心】ウェルカムベビー認定宿＆家族温泉旅ガイド',
        desc: '小さな子どもと一緒に自然体験！設備充実でパパママも安心のファミリー旅行特集。'
      },
      {
        slug: 'furusato-tax-winery-craft-beer-auberge-stay',
        title: '【ワイン＆地ビール】ぶどう畑を望むワイナリーホテル＆オーベルジュ',
        desc: 'アウトドアBBQにぴったりの美酒！全国のクラフトビールやワイナリー併設宿特集。'
      }
    ]
  },
  {
    slug: 'furusato-tax-scenic-train-trolley-onsen-stay',
    title: '【絶景観光列車×ふるさと納税】トロッコ列車＆ローカル線途中下車で巡る名湯温泉旅館ガイド',
    description: '車窓を流れる渓谷美・雪景色とお座敷列車！黒部峡谷トロッコ電車、わたらせ渓谷鐵道、只見線の途中下車名湯宿を厳選。切符を握りしめて向かう大人の絶景鉄道旅をふるさと納税でお得に実現。',
    heroTag: 'ふるさと納税×絶景観光列車・ローカル線鉄道旅',
    leadTitle: 'ガタゴトと揺れる列車に身を任せ、車窓の四季を眺めながら終着駅の名湯へ',
    leadText: '新幹線や飛行機でのスピード移動とは異なり、あえて時間をかけて美しい日本の原風景を巡る「観光列車・ローカル鉄道の旅」。窓のないオープンデッキから渓谷の風を浴びる富山・黒部峡谷のトロッコ電車、渡良瀬川の清流と紅葉を縫うように走る群馬・わたらせ渓谷鐵道、そして世界一ロマンチックな鉄道と称される福島・只見線。のんびりとレールに揺られながら駅弁をつまみ、地元の酒蔵のワンカップを傾ける時間は、何物にも代えがたい大人の贅沢です。そして旅のハイライトは、沿線の途中下車駅や終着駅に湧く名湯温泉宿。楽天ふるさと納税のトラベルクーポンを活用すれば、鉄道旅の拠点となる老舗旅館や渓谷沿いの絶景露天風呂宿に実質30％割引でステイ可能。切符を握りしめて出かける、どこか懐かしく温かな鉄道温泉紀行へご案内します。',
    points: [
      {
        title: 'ポイント①：車を運転しないからこそ、駅弁と地酒のペアリングを一日中満喫',
        desc: '列車旅最大の魅力は、移動時間そのものが至福の晩酌タイムになること。沿線の名物駅弁を買い込み、地酒列車や観光列車の車内で乾杯しながら、ゆったりと流れる車窓の景色を堪能できます。'
      },
      {
        title: 'ポイント②：渓谷美や鉄橋を眼下に望む「トレインビュー露天風呂」',
        desc: '線路沿いに建つ温泉旅館では、大浴場の露天風呂や客室の窓から走り抜けるローカル列車を眺められる特等席も。鉄道ファンならずとも心が躍るシャッターチャンスが待っています。'
      },
      {
        title: 'ポイント③：ローカル線の維持と地域活性化を支えるふるさと納税',
        desc: '地方のローカル線沿線自治体に寄付を行うことで、地域の公共交通や観光資源の維持を直接支援。旅を楽しみながら、沿線の美しい景観を守るサポーターになることができます。'
      }
    ],
    sections: [
      {
        key: 'unazuki_trolley_onsen',
        badge: '富山県黒部市・日本一深いV字峡谷を行くトロッコ',
        title: '黒部市ふるさと納税で泊まる、宇奈月温泉の峡谷パノラマとトロッコ電車の発着駅宿',
        intro: '黒部川が削り出した日本一深いV字峡谷の玄関口・宇奈月温泉。窓のないオープン客車が人気の「黒部峡谷トロッコ電車」の始発駅であり、険しい断崖絶壁やエメラルドグリーンの湖面を縫うように走るスリル満点の絶景が広がります。黒部市のふるさと納税トラベルクーポンを使えば、黒部峡谷にかかる赤い山彦橋を望む名旅館や、日本屈指の透明度を誇る弱アルカリ性美肌の湯を引く温泉宿にお得にステイ。富山湾のキトキト（新鮮）な海の幸・白えびや寒ブリを味わい、翌朝トロッコ電車へ乗り込む至高の鉄道旅が叶います。'
      },
      {
        key: 'watarase_valley_onsen',
        badge: '栃木県日光市・群馬県みどり市・渡良瀬川の四季',
        title: '日光市・みどり市ふるさと納税で泊まる、わたらせ渓谷鐵道沿いの静かな名湯宿',
        intro: '桐生駅から足尾・日光方面へと渡良瀬川沿いを結ぶ「わたらせ渓谷鐵道」。春の桜や菜の花、夏の深い緑、秋の全山紅葉、冬のイルミネーションと、四季折々の絵画のような車窓が乗客を魅了します。沿線の日光市やみどり市のふるさと納税クーポンを活用すれば、渓谷美を間近に望む静かな温泉旅館や、日光の奥座敷温泉ホテルにお得に宿泊可能。駅舎に温泉が併設された珍しい駅での途中下車を楽しみながら、名物の鮎料理や上州・とちぎの山の恵みに舌鼓を打つ旅を満喫できます。'
      },
      {
        key: 'tadami_aizu_onsen',
        badge: '福島県柳津町・三島町・世界を魅了する只見川橋梁',
        title: '柳津町・三島町ふるさと納税で泊まる、只見線の絶景第一橋梁と会津奥座敷の湯治宿',
        intro: '雄大な只見川の渓谷美と、川霧に浮かぶ鉄橋を走る列車の姿が世界中の写真家を虜にしているJR只見線。水鏡に映る列車のシルエットは息を呑むほどの美しさです。沿線の柳津町や三島町のふるさと納税クーポンを使えば、開湯1200年の歴史を持つ会津柳津温泉の老舗宿や、只見川沿いの秘湯旅館をお得にリザーブ。赤べこ発祥の寺・円蔵寺を参拝し、名物あわまんじゅうや会津地鶏、手打ちそばを味わいながら、心洗われるローカル線の旅をご堪能ください。'
      }
    ],
    faq: [
      {
        q: 'トロッコ列車や観光列車のチケットは事前に予約が必要ですか？',
        a: '黒部峡谷トロッコ電車やわたらせ渓谷鐵道のトロッコ列車は、紅葉シーズンなどのハイシーズンには満席になることが多いため、鉄道会社の公式サイトから事前予約しておくのが確実です。'
      },
      {
        q: '大きなスーツケースを持ったままでもローカル線旅行はできますか？',
        a: '主要駅（宇奈月温泉駅や会津若松駅など）のコインロッカーを利用するか、宿から次の目的地へ荷物を宅急便で先送りする手ぶら観光サービスを利用すると、身軽に車窓や途中下車を楽しめます。'
      },
      {
        q: '冬の只見線や豪雪期の運行状況はどうですか？',
        a: '只見線は豪雪地帯を走るため、冬期は雪晴れの絶景が広がる一方で大雪による遅延や運休が発生する場合があります。旅行前にはJR東日本の運行情報や天候をこまめにチェックし、余裕を持った行程を組むのがおすすめです。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-shinkansen-station-walk-hotspring-stay',
        title: '【車なし・雪道運転不要】新幹線駅直結の名湯温泉旅館ガイド',
        desc: '電車で行ける名湯特集！越後湯沢・熱海・加賀温泉など新幹線改札からすぐ歩いて行ける宿。'
      },
      {
        slug: 'furusato-tax-secret-hotspring-lamp-retreat-stay',
        title: '【秘湯・ランプの宿】電波の届かぬ渓谷野天風呂でデジタルデトックス',
        desc: '鉄道の終着駅からさらに奥へ。法師温泉や祖谷温泉など大自然に包まれる秘湯の一軒宿。'
      },
      {
        slug: 'furusato-tax-luxury-hotspring-ryokan-stay',
        title: '【実質2,000円で泊まる名湯】高級温泉旅館＆憧れの老舗宿完全ガイド',
        desc: '草津・有馬・伊豆の名湯宿。自己負担実質2,000円で泊まるふるさと納税の基礎知識と攻略法。'
      }
    ]
  },
  {
    slug: 'furusato-tax-ise-kumano-sacred-power-spot-stay',
    title: '【お伊勢参り＆熊野古道×ふるさと納税】日本最強パワースポット巡礼と心洗われる老舗門前宿ガイド',
    description: '一生に一度はお伊勢参り、よみがえりの聖地・熊野三山、神々の集う出雲大社。日本屈指の聖地を巡る祈願の旅を楽天ふるさと納税で賢く予約。早朝参拝に便利な門前宿や禊の温泉宿完全ガイド。',
    heroTag: 'ふるさと納税×聖地巡礼・パワースポット宿',
    leadTitle: '神聖な玉砂利を踏みしめ、朝露の神域で手を合わせる。心身を浄化する聖なる祈願の旅へ',
    leadText: '日本人の心のふるさと「伊勢神宮」、深い緑の石畳が祈りの道として世界遺産に登録された「熊野古道と熊野三山」、そして八百万の神々が集い良縁を結ぶ「出雲大社」。古くから「一生に一度はお参りしたい」と人々が列をなした日本屈指の聖地を巡る旅は、日頃の感謝を捧げ、新たな活力を授かる特別なスピリチュアルトリップです。こうした聖地巡礼で最もおすすめしたいのが、静寂に包まれた「早朝参拝」が叶う門前町の宿や、参拝前に心身を清める「禊（みそぎ）の湯」を持つ温泉旅館への宿泊です。楽天ふるさと納税のトラベルクーポンを活用すれば、自治体への寄付を通じて伝統ある神域の保全に貢献しつつ、老舗旅館や格式あるホテルに実質30％割引でステイ可能。松阪牛や伊勢海老、勝浦の生まぐろ、日本海の出雲そばなど門前町のごちそうを味わい、清らかな心で未来への一歩を踏み出す旅へ出かけませんか。',
    points: [
      {
        title: 'ポイント①：観光客のいない清らかな空気を感じる「早朝参拝」の圧倒的特権',
        desc: '日中の混雑を避けて、午前6時〜7時台の澄み切った神域を歩く贅沢。鳥のさえずりと玉砂利を踏む音だけが響く静寂の中で手を合わせられるのは、門前宿に前泊した宿泊者だけの特権です。'
      },
      {
        title: 'ポイント②：参拝前後に身体を清める「禊（みそぎ）の名湯」で運気アップ',
        desc: '古来より参拝の前には湯浴みをして身を清める習わしがありました。勝浦温泉の太平洋に面した大洞窟温泉や、神の湯と称される玉造温泉で身体の垢を落とし、万全の状態でご祈祷を受けられます。'
      },
      {
        title: 'ポイント③：厄除け・還暦祝い・結婚奉告など「人生の節目」の旅行に最適',
        desc: '厄年の厄除け参拝や両親の還暦祝い、結婚の奉告参拝など、大切な節目だからこそ宿泊先も妥協せず良い宿を選びたいもの。ふるさと納税クーポンで宿泊費を賢く抑えながら最高のおもてなしを受けられます。'
      }
    ],
    sections: [
      {
        key: 'ise_shrine_stay',
        badge: '三重県伊勢市・日本人の総氏神「伊勢神宮」',
        title: '伊勢市ふるさと納税で泊まる、お伊勢参り早朝参拝に便利な内宮・おかげ横丁周辺の名宿',
        intro: '内宮（皇大神宮）と外宮（豊受大神宮）を中心に、125社もの宮社からなる伊勢神宮。五十鈴川の御手洗場で手を清め、宇治橋を渡って杜へ入ると、凛とした神聖な空気が満ちています。伊勢市のふるさと納税トラベルクーポンを使えば、内宮まで徒歩圏内の純和風旅館や、伊勢志摩の海を望む温泉宿にお得にステイ可能。早朝のすがすがしい空気の中で内宮を参拝し、おかげ横丁で名物の赤福餅や伊勢うどん、夕食には松阪牛や伊勢海老会席を堪能する特別な巡礼が叶います。'
      },
      {
        key: 'kumano_kodo_stay',
        badge: '和歌山県那智勝浦町・よみがえりの聖地「熊野三山」',
        title: '那智勝浦町ふるさと納税で泊まる、世界遺産熊野古道と大洞窟温泉「忘帰洞」の名宿',
        intro: '熊野本宮大社、熊野速玉大社、熊野那智大社の熊野三山を結ぶ祈りの道・熊野古道。那智の滝の轟音と大門坂の苔むす杉並木は、まさに「よみがえりの聖地」と呼ぶにふさわしい荘厳さを誇ります。那智勝浦町のふるさと納税クーポンを活用すれば、熊野灘の荒波が打ち寄せる大洞窟露天風呂「忘帰洞」で名高い温泉ホテルや海辺の宿にお得に宿泊。日本有数の水揚げを誇る勝浦港の絶品生まぐろ料理を味わい、古道歩きの疲れを良質な硫黄泉で癒やす至極の時間が過ごせます。'
      },
      {
        key: 'izumo_taisha_stay',
        badge: '島根県出雲市・神々が集う良縁の聖地「出雲大社」',
        title: '出雲市ふるさと納税で泊まる、出雲大社大鳥居そばの宿と神の湯・玉造温泉の老舗旅館',
        intro: '旧暦10月（神在月）に全国の神々が集まる縁結びの総本山・出雲大社。日本最大級の大注連縄が掲げられた神楽殿や御本殿の威厳ある姿は、人々の良縁と幸福を力強く見守っています。出雲市のふるさと納税クーポンを使えば、大社の門前に佇む風情ある旅館や、日本最古の美肌温泉「玉造温泉」の庭園名宿をお得にリザーブ可能。名物の出雲そばや宍道湖の七道（しじみ等）を堪能し、神話の息吹を感じながら心を清らかに整える旅をお楽しみください。'
      }
    ],
    faq: [
      {
        q: '伊勢神宮や出雲大社の正式な参拝マナーはありますか？',
        a: '伊勢神宮では「外宮先参（げくうせんさん）」といって、外宮から参拝した後に内宮へお参りするのが古くからの習わしです。拝礼は通常の「二礼二拍手一礼」。一方、出雲大社では独自の「二礼四拍手一礼」が作法となっています。'
      },
      {
        q: '熊野古道を歩く際の服装や装備はどうすればいいですか？',
        a: '大門坂から那智の滝周辺などの初心者コースでも石畳の階段が続くため、滑りにくいスニーカーやトレッキングシューズ、動きやすい服装が必須です。山間部は天候が変わりやすいため、折りたたみ傘や雨具を携帯しておくと安心です。'
      },
      {
        q: '御朱印集めをしているのですが、宿で御朱印帳の販売はありますか？',
        a: '門前宿や聖地周辺のホテルでは、オリジナルの表紙をあしらった限定御朱印帳を販売しているところが多くあります。神社仏閣の授与所で受ける御朱印と合わせて、旅の素晴らしい記念になります。'
      }
    ],
    relatedLinks: [
      {
        slug: 'furusato-tax-castle-town-heritage-onsen-stay',
        title: '【国宝名城めぐり】天守望む露天風呂＆歴史ある城下町の名宿',
        desc: '日本の歴史と伝統建築を愛でる！姫路城・松本城・彦根城の城下町名宿特集。'
      },
      {
        slug: 'furusato-tax-secret-hotspring-lamp-retreat-stay',
        title: '【秘湯・ランプの宿】電波の届かぬ渓谷野天風呂でデジタルデトックス',
        desc: '山深い聖地と秘湯で心身を浄化する。法師温泉や祖谷温泉の静寂ステイ。'
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
                        {hotel.hotelSpecial || hotel.userReview || '心身を深く癒やす特別な時間を提供する、ふるさと納税トラベルクーポン対象宿です。'}
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
console.log('All 4 round 5 furusato pages generated successfully!');
