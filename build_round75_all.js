const fs = require('fs');
const path = require('path');

const seasonalHotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

// 4記事の詳細データ定義 (Round 75)
const articleConfigs = [
  {
    slug: 'furusato-tax-sotoyu-meguri-historic-onsen-town-stay',
    componentName: 'FurusatoSotoyuMeguriTownStayPage',
    tag: '伝統の外湯めぐり＆浴衣下駄散策名門温泉街特集',
    title: 'カランコロンと下駄を鳴らす外湯めぐり＆情緒あふれる浴衣散策名門温泉宿×ふるさと納税完全ガイド【2026年最新】城崎・野沢温泉・渋温泉',
    metaTitle: 'カランコロンと下駄を鳴らす外湯めぐり＆情緒あふれる浴衣散策名門温泉宿×ふるさと納税完全ガイド【2026年最新】城崎・野沢温泉・渋温泉',
    shortTitle: '外湯めぐり＆浴衣下駄散策名門温泉街特集',
    description: '街全体が一つの大きな温泉宿！色浴衣に着替え下駄を鳴らして外湯を巡る至極の温泉情緒を厳選。七田外湯めぐりと文豪志賀直哉ゆかりの国登録有形文化財「城崎温泉 登録有形文化財の宿 三木屋」、十三箇所の無料外湯と麻釜の湧出景観を誇る「野沢温泉 村のホテル 住吉屋」、九湯めぐりと千と千尋の神隠しを彷彿とさせる木造四階建て文化財建築「渋温泉 歴史の宿 金具屋」。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '伝統の外湯めぐり＆浴衣下駄散策名門温泉街特集',
    leadTitle: '石畳に響く下駄の音、柳並木を揺らす夜風、湯けむりに浮かぶ温泉街の灯り。日本の温泉情緒の原点へ',
    leadText: '旅館の玄関で色鮮やかな浴衣に袖を通し、木製の下駄を鳴らしながら温泉街へと繰り出す「外湯（そとゆ）めぐり」。街の中心を流れる川沿いの柳並木、格子戸のレトロな町並み、そして地域の人々と旅人が裸の付き合いを交わす共同浴場――「街全体が一つの温泉宿、大通りは廊下、外湯は大浴場」という古き良き日本の温泉文化が色濃く残る温泉地には、ホテルにおこもりする滞在とは一味違う、旅の原点とも言える豊かな情緒が息づいています。川沿いに七つの個性豊かな外湯が点在し文豪・志賀直哉が名作『城の崎にて』を執筆した創業三百年の老舗「城崎温泉 三木屋」、湯仲間と呼ばれる村の人々が守る十三箇所の天然外湯と名物・麻釜（おがま）のすぐそばに佇む自家源泉の宿「野沢温泉 住吉屋」、そして九つの外湯を巡って手ぬぐいに朱印を集める九湯めぐりと、夜のライトアップがまるで映画のワンシーンのような「渋温泉 金具屋」。日本の誇るべき外湯文化を体感できる名門温泉宿を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質自己負担2,000円で賢く予約し、心温まる湯めぐり旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '宿泊者特典で無料湯めぐり！趣の異なる複数の共同浴場を制覇する至福の達成感',
        body: '城崎の「デジタル外湯券（ゆめぱ）」や渋温泉の「宿泊者専用・九湯巡りの鍵」など、提携宿に宿泊することで街中の名湯共同浴場を自由に巡ることが可能。泉質や温度、浴室の造りが異なる湯船をハシゴする極上の湯浴みが楽しめます。'
      },
      {
        num: '02',
        title: '選べる色浴衣と下駄で街歩き！射的やスマートボール、足湯、温泉卵作り体験',
        body: '夕暮れから夜にかけてライトアップされる情緒豊かな温泉街。レトロな遊技場で射的に興じたり、湯気の上がる温泉街のカフェで湯上がりプリンを味わったり、源泉で熱々の温泉卵を作ったりと、街歩きそのものが最高のエンターテインメントです。'
      },
      {
        num: '03',
        title: '但馬牛、信州サーモン、信州牛！歩いて温まった身体を満たす極上の郷土会席',
        body: '外湯巡りで心地よくお腹を空かせた後は、宿に戻って贅沢な夕餉。地元漁港直送の新鮮な魚介やブランド牛、山菜やきのこなど、土地の風土に根ざした料理長渾身の会席料理が待っています。'
      }
    ],
    hotelDetails: [
      {
        key: 'kinosaki_sotoyu',
        badge: '兵庫県豊岡市・志賀直哉ゆかりの国登録有形文化財！創業三百年と三千坪の日本庭園',
        rank: '厳選名宿 第1選',
        desc: '文豪・志賀直哉が逗留し『城の崎にて』を執筆したことで知られる、創業三百年の歴史を誇る国の登録有形文化財の宿。三千坪の壮大な日本庭園を囲むように建つ木造の館内は、古き良き数寄屋の趣と現代のモダンな快適性が美しく調和しています。宿泊者は城崎名物の七つの外湯（さとの湯・一の湯・御所の湯・まんだら湯・地蔵湯・鴻の湯・柳湯）に何度でも入れる外湯パスを利用可能。夕食には本場・但馬牛や日本海の海の幸、冬には極上の松葉蟹を堪能できる、城崎温泉を代表する最高峰の名門旅館です。'
      },
      {
        key: 'nozawa_sotoyu',
        badge: '長野県野沢温泉村・国の天然記念物「麻釜」至近！十三箇所の外湯めぐりと自家源泉かけ流し',
        rank: '厳選名宿 第2選',
        desc: '国の天然記念物に指定される名所「麻釜（おがま）」のすぐ隣に位置し、明治２年創業の歴史を紡ぐ野沢温泉屈指の老舗温泉宿。村内に点在する13箇所の外湯（大湯・真湯・熊の手洗湯など）への湯めぐり拠点として最高の立地を誇り、宿自慢の内湯には麻釜熱湯源泉が自然湧出で掛け流されています。信州の民芸美が薫る落ち着いた客室、地元契約農家の野沢菜や信州サーモン、みゆき豚を取り入れた滋味あふれる田舎会席料理が評判で、本物の温泉文化と温かな村のぬくもりに包まれる旅が叶います。'
      },
      {
        key: 'shibu_sotoyu',
        badge: '長野県山ノ内町・国の登録有形文化財「斉月楼」！九湯めぐりの結願と宮大工建築の極み',
        rank: '厳選名宿 第3選',
        desc: '映画『千と千尋の神隠し』の湯屋を彷彿とさせる木造四階建ての「斉月楼」と大広間が国の登録有形文化財に指定されている、渋温泉の象徴的名旅館。宿泊客のみに手渡される専用の鍵を持ち、厄除け・不老長寿を祈願する「厄除巡浴九湯めぐり」を満喫できます。館内にも昭和初期の宮大工が腕を競った「浪漫風呂」をはじめとする４つの自家源泉と８つの風呂があり、館内だけでも贅沢な湯巡りが完結。夜のライトアップされた壮麗な木造建築を眺めながら、タイムスリップしたかのような歴史ステイをご堪能いただけます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-retro-onsen-town-yukata-walk-stay', title: '【レトロ温泉街＆浴衣散策×ふるさと納税】石段街と湯煙情話の名宿' },
      { slug: 'furusato-tax-pure-kakenagashi-secret-hotspring-stay', title: '【源泉かけ流し秘湯×ふるさと納税】加水・加温なしの本物の湯力を堪能する名宿' },
      { slug: 'furusato-tax-room-dining-heya-shoku-luxury-kaiseki-stay', title: '【お部屋食で味わう極上会席×ふるさと納税】城崎・有馬・草津の老舗旅館' },
      { slug: 'furusato-tax-tangible-cultural-property-architectural-ryokan-stay', title: '【登録有形文化財の宿×ふるさと納税】匠の建築美と歴史を味わう名門旅館' }
    ]
  },
  {
    slug: 'furusato-tax-aquarium-family-ocean-resort-stay',
    componentName: 'FurusatoAquariumFamilyResortStayPage',
    tag: '水族館直結＆海の生きものふれあいリゾートホテル特集',
    title: '水族館直結＆イルカ・シャチの感動体験！ファミリー大満足オーシャンリゾートホテル×ふるさと納税完全ガイド【2026年最新】鴨川・鳥羽・沖縄美ら海',
    metaTitle: '水族館直結＆イルカ・シャチの感動体験！ファミリー大満足オーシャンリゾートホテル×ふるさと納税完全ガイド【2026年最新】鴨川・鳥羽・沖縄美ら海',
    shortTitle: '水族館直結＆ファミリーオーシャンリゾートホテル特集',
    description: '海の生きものたちと間近に出逢う感動のファミリーバカンス！シャチの大迫力ジャンプで名高い鴨川シーワールド直結・宿泊者パスポート付き「鴨川シーワールドホテル」、日本一の飼育種類数を誇る鳥羽水族館至近＆真珠風呂「鳥羽国際ホテル 潮路亭」、沖縄美ら海水族館へ徒歩すぐ・備瀬のフクギ並木前の最高峰リゾート「オリオンホテル モトブリゾート＆スパ」。全室オーシャンビューや温泉を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '水族館直結＆海の生きものふれあいリゾートホテル特集',
    leadTitle: '青い海原を跳ぶ巨大なシャチ、愛らしいイルカの笑顔、巨大水槽を泳ぐジンベエザメ。子どもも大人も瞳輝く感動オーシャントリップへ',
    leadText: '巨大な水槽越しに悠々と泳ぐ魚たちの群れ、ダイナミックな水しぶきを上げるシャチやイルカのショー、手で触れ合える海の生きものたち――「水族館」は、家族連れやカップルにとって最高の笑顔と感動が生まれる特別な場所です。水族館のすぐ隣や敷地内に位置するリゾートホテルに滞在すれば、開館直後の空いている時間帯にゆったり見学でき、疲れたらすぐに部屋に戻って休憩できるため、小さなお子様連れの旅行でもストレスフリーで楽しめます。雄大な太平洋を望み、宿泊期間中「鴨川シーワールド」へ何度でも無料で入館できる専用通路を備えたオフィシャルホテル「鴨川シーワールドホテル」、ジュゴンやラッコなど日本一の飼育種類数を誇る「鳥羽水族館」にほど近く、ミキモト コスメティックス開発のパールオーロラ風呂が女性に大人気の「鳥羽国際ホテル 潮路亭」、そして世界屈指の巨大アクリルパネルでジンベエザメが泳ぐ「沖縄美ら海水族館」へ徒歩約7分、エメラルドビーチを眼下に望む全室オーシャンビューの「オリオンホテル モトブリゾート＆スパ」。家族の最高の思い出を刻む水族館リゾートを、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引）を使って実質2,000円で賢く予約し、心躍る海の旅へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '水族館直結や専用入館パス！開館から閉館まで何度でも出入り自由の圧倒的利便性',
        body: 'オフィシャルホテルや隣接ホテルならではの特権。混雑する日中を避けて朝一番のシャチパフォーマンスや夕方の餌やりタイムを狙えるほか、お昼寝や着替えのために部屋へいつでも戻れる安心感が魅力です。'
      },
      {
        num: '02',
        title: '全室オーシャンビュー＆波音のBGM！大浴場や露天風呂で大人もしっかりリフレッシュ',
        body: '昼間は水族館で思い切りはしゃぎ、夕暮れには部屋のバルコニーから水平線に沈む夕日を鑑賞。天然温泉や真珠エキス配合の美肌風呂で旅の疲れを洗い流し、大人も贅沢なリゾート気分を満喫できます。'
      },
      {
        num: '03',
        title: 'キッズバイキングやベビーアメニティ完備！子連れファミリーに寄り添う万全の設備',
        body: '子ども用のプレートや離乳食対応、ベッドガードやオムツ用ゴミ箱の貸出など、ファミリー向けのホスピタリティが充実。大人は新鮮な海の幸や地元牛をバイキングや会席で贅沢に味わえます。'
      }
    ],
    hotelDetails: [
      {
        key: 'kamogawa_aquarium',
        badge: '千葉県鴨川市・鴨川シーワールド直結！宿泊者限定入館パスポート付き全室オーシャンビューホテル',
        rank: '厳選名宿 第1選',
        desc: '房総半島の太平洋沿いに建ち、日本有数の海洋テーマパーク「鴨川シーワールド」に専用連絡通路で直結する公式ホテル。宿泊客はチェックイン日からチェックアウト日まで何度でも無料で水族館に入館できるパスポート付きで、朝一番のシャチパフォーマンスやナイトアドベンチャーなど公式ホテルだけの特別体験も充実しています。全客室が太平洋を望むオーシャンビューで、館内には天然温泉大浴場やキッズアメニティも完備。房総の新鮮な海の幸を取り入れたディナーバイキングとともに、家族みんなが笑顔になれる至高の水族館ステイが叶います。'
      },
      {
        key: 'toba_aquarium',
        badge: '三重県鳥羽市・日本一の飼育数を誇る鳥羽水族館至近！ミキモト真珠風呂と伊勢志摩の美食リゾート',
        rank: '厳選名宿 第2選',
        desc: '波静かな鳥羽湾を望み、日本一の生きものの種類数を誇る「鳥羽水族館」へ車でわずか約3分の好立地に建つ和モダンリゾート。宿の最大のハイライトは、ミキモト コスメティックスが手掛けた世界初の「パールオーロラ風呂」。真珠由来の美容成分が溶け込んだキラキラと輝く湯船に浸かれば、お肌がしっとりと潤う至福の湯浴みが体験できます。夕食には伊勢海老や鮑、松阪牛など伊勢志摩の最高級食材をオープンキッチンで豪快かつ繊細に仕上げる会席料理が並び、大人も子どもも贅沢な休日を満喫できます。'
      },
      {
        key: 'okinawa_aquarium',
        badge: '沖縄県本部町・沖縄美ら海水族館へ徒歩約7分！エメラルドビーチ直結の全室オーシャンフロントホテル',
        rank: '厳選名宿 第3選',
        desc: '沖縄本島北部・本部半島の美しいエメラルドビーチの正面に位置し、世界的な名所「沖縄美ら海水族館」へ徒歩約7分・備瀬のフクギ並木へも徒歩圏という絶好のロケーションを誇る最高峰リゾート。全客室が50平米以上の広々としたオーシャンフロントバルコニー付きで、伊江島の城山（タッチュー）と東シナ海に沈むサンセットを一望できます。地下1,500mから湧出する天然温泉大浴場「ジュラ紀温泉」やインドアプール、沖縄県産食材をふんだんに使った贅沢ビュッフェやバーベキューなど、南国の極上バカンスをお過ごしいただけます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-themepark-aquarium-family-hotel-stay', title: '【テーマパーク＆水族館×ふるさと納税】子連れファミリー向け人気ホテル' },
      { slug: 'furusato-tax-welcome-baby-family-kids-stay', title: '【ウェルカムベビーのお宿×ふるさと納税】赤ちゃん・子連れ安心のファミリー名宿' },
      { slug: 'furusato-tax-three-generation-family-luxury-stay', title: '【三世代ファミリー旅行×ふるさと納税】広々客室・バイキング・名湯の旅' },
      { slug: 'furusato-tax-remote-island-luxury-resort-stay', title: '【極上の離島リゾート×ふるさと納税】青い海と自然に抱かれる南国ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-resort-infinity-pool-luxury-hotel-stay',
    componentName: 'FurusatoResortInfinityPoolStayPage',
    tag: '極上インフィニティプール＆天空オーシャンビューホテル特集',
    title: '海と空に溶け込む圧倒的開放感！絶景インフィニティプール＆ラグジュアリーリゾートホテル×ふるさと納税完全ガイド【2026年最新】熱海・沖縄恩納村・別府',
    metaTitle: '海と空に溶け込む圧倒的開放感！絶景インフィニティプール＆ラグジュアリーリゾートホテル×ふるさと納税完全ガイド【2026年最新】熱海・沖縄恩納村・別府',
    shortTitle: '絶景インフィニティプール＆ラグジュアリーホテル特集',
    description: '水面と水平線がシームレスに交わる非日常の楽園！相模灘を見渡す全長約25mの露天立ち湯インフィニティ「熱海後楽園ホテル（オーシャンスパ Fuua）」、ハワイの名門が恩納村に創り上げた象徴的オーキッドプール「ハレクラニ沖縄」、別府湾を一望する棚湯と幻想的な温泉プールアクアガーデン「別府温泉 杉乃井ホテル」。カバナで過ごす優雅なカクテルタイムやスパ体験を、楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '極上インフィニティプール＆天空オーシャンビューホテル特集',
    leadTitle: 'プールの縁が見えない水盤の先、どこまでも続く青い海と空。日常の境界線が消え去る究極のフローティング体験へ',
    leadText: '水面と海や空がシームレスに繋がり、まるで広大な大海原や大空にそのまま浮かんでいるかのような感覚を味わえる「インフィニティプール（インフィニティバス）」。海外の高級リゾートを彷彿とさせるその圧倒的な開放感とスタイリッシュな景観は、SNSでも絶大な人気を誇り、非日常のラグジュアリーステイを象徴する憧れのスポットとなっています。都心から新幹線で約45分の熱海で、相模灘を一望する日本最大級の露天立ち湯インフィニティ温泉プール「オーシャンスパ Fuua」を擁する「熱海後楽園ホテル」、ハワイで百年の伝統を誇るラグジュアリーホテルが沖縄・恩納村の海岸線に創り上げ、約150万枚のモザイクタイルで蘭の花を描いた象徴的なオーキッドプールを誇る「ハレクラニ沖縄」、そして別府の高台から別府湾と街の夜景を見下ろす大展望露天風呂「棚湯」や水着で楽しむ屋外温泉プール「アクアガーデン」で圧巻のスケールを誇る「杉乃井ホテル」。プールサイドのカバナやデッキチェアでシャンパンを傾け、夕暮れのマジックアワーを眺める時間は、すべての疲れを洗い流してくれる至福のひとときです。大人気のインフィニティプール宿を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質2,000円で賢く予約し、極上の天空バカンスへ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '海と空に浮かんでいるかのようなシームレスな浮遊感と圧巻のフォトジェニック美',
        body: 'プールの端が水平線や空と完全に一体化。水面に青空や雲、夕陽が美しく反射し、息をのむような美しい写真と思い出が残せます。日常を完全に忘れさせる非日常のスケール感が魅力です。'
      },
      {
        num: '02',
        title: 'プールサイドバーや温水ジャグジー！1日中プールサイドで寛げる大人のラグジュアリー',
        body: '冷えた身体を温める温水スパやジャグジー、カクテルやモクテルを提供するプールサイドバーを完備。デイベッドに寝そべって読書をしたり、夕暮れの光の移ろいを眺めたりと贅沢な時間を過ごせます。'
      },
      {
        num: '03',
        title: '夜には幻想的なライトアップやナイトプール！大人のナイトタイムエンターテインメント',
        body: '夜になるとプールが青や紫の幻想的な光にライトアップ。水辺に心地よいアンビエント音楽が流れ、噴水ショーや星空を眺めながらのロマンチックなナイトスイミングを満喫できます。'
      }
    ],
    hotelDetails: [
      {
        key: 'atami_pool',
        badge: '静岡県熱海市・相模灘を一望する全長約25mの露天立ち湯インフィニティ「Fuua」と名湯リゾート',
        rank: '厳選名宿 第1選',
        desc: '熱海港の岬に位置し、相模灘と熱海市街の美しい夜景を一望する大型温泉リゾートホテル。敷地内の日帰り温泉施設「オーシャンスパ Fuua（フーア）」には、日本最大級の長さを誇る全長約25mの「露天立ち湯インフィニティ温泉」があり、海にそのまま浮かんでいるかのような圧倒的開放感を味わえます。客室は全室オーシャンビューのタワー館や新館アクアスクエアを備え、熱海名物の海上花火大会も部屋やテラスから特等席で鑑賞可能。伊豆の新鮮な山海の幸を味わえるブッフェや和食ディナーとともに、都心至近の贅沢な海辺のリフレッシュが叶います。'
      },
      {
        key: 'okinawa_pool',
        badge: '沖縄県恩納村・ハワイの名門が手掛ける世界的ラグジュアリー！象徴的なオーキッドプールと極上ステイ',
        rank: '厳選名宿 第2選',
        desc: 'ハワイで百有余年の歴史を誇る名門「ハレクラニ」が、沖縄屈指の美しい海を望む恩納村に創り上げた最高峰ラグジュアリーリゾート。ホテルのシンボルである「オーキッドプール」は、約150万枚のガラスモザイクタイルで巨大な蘭の花が描かれ、水平線へと溶け込むインフィニティ設計が息をのむ美しさです。さらに大人のためのクワイエットプールやサンセットプールなど多彩な水辺空間を完備。全客室が50平米以上のオーシャンフロントで、ミシュラン星付きシェフ監修のダイニングや上質なスパとともに、天国にふさわしい至極の休日をご堪能いただけます。'
      },
      {
        key: 'beppu_pool',
        badge: '大分県別府市・別府湾を一望する棚田状の絶景大露天「棚湯」＆水着で楽しむ温泉プール「アクアガーデン」',
        rank: '厳選名宿 第3選',
        desc: '別府温泉の高台に位置し、全国屈指の人気と圧倒的スケールを誇る大型温泉リゾート。段々畑のように広がる五段の湯船から別府湾と街の夜景を一望する大展望露天風呂「棚湯」に加え、水着で温泉に入れる屋外型インフィニティ温泉プール「ザ アクアガーデン」を完備。夜には光と音の噴水アートショーが開催され、幻想的なナイトエンターテインメントを楽しめます。贅を尽くした豪華バイキングやボウリング場、キッズパークなども充実し、ファミリーからカップルまで誰もが感動できる九州の温泉リゾートの最高峰です。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-infinity-onsen-sky-ocean-view-stay', title: '【インフィニティ露天風呂×ふるさと納税】空と海が一体化する絶景宿' },
      { slug: 'furusato-tax-private-pool-luxury-suite-villa-stay', title: '【客室プライベートプール付きヴィラ×ふるさと納税】誰にも邪魔されないおこもり宿' },
      { slug: 'furusato-tax-three-major-night-view-luxury-hotel-stay', title: '【日本三大夜景ホテル×ふるさと納税】宝石のような夜景パノラマ宿' },
      { slug: 'furusato-tax-all-inclusive-luxury-onsen-stay', title: '【オールインクルーシブ温泉宿×ふるさと納税】お酒もカフェも追加料金なしの贅沢ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-shinshu-soba-kaiseki-luxury-ryokan-stay',
    componentName: 'FurusatoShinshuSobaKaisekiStayPage',
    tag: '日本三大蕎麦・信州手打ち蕎麦会席宿特集',
    title: '名水が育む挽きたて・打ちたて・茹でたて！信州手打ち蕎麦会席＆山里温泉名旅館×ふるさと納税完全ガイド【2026年最新】戸隠・安曇野・浅間温泉',
    metaTitle: '名水が育む挽きたて・打ちたて・茹でたて！信州手打ち蕎麦会席＆山里温泉名旅館×ふるさと納税完全ガイド【2026年最新】戸隠・安曇野・浅間温泉',
    shortTitle: '信州手打ち蕎麦会席＆山里名宿特集',
    description: '澄んだ名水と清涼な高原の風土が育む日本の蕎麦文化の頂点！日本三大蕎麦・戸隠そば発祥の地で伝統のぼっち盛りと宿坊会席を味わう「戸隠のそば宿・宿坊極意」、名水百選わさび田の里で自家製粉十割手打ち蕎麦と源泉掛け流し離れ宿「安曇野 にし屋別荘」、国宝松本城にほど近い浅間温泉で石臼挽き手打ち蕎麦と畳敷きの温もりに包まれる「別亭 一花」。楽天ふるさと納税トラベルクーポンで実質2,000円負担で楽しむ完全ガイド。',
    heroTag: '日本三大蕎麦・信州手打ち蕎麦会席宿特集',
    leadTitle: 'すっと鼻を抜ける野趣あふれる蕎麦の香り、喉を心地よく滑る清冽な喉越し。信州の山里で出逢う「本物の蕎麦」感動体験へ',
    leadText: '昼夜の大きな寒暖差、霧深い山あいの気候、そして北アルプスから湧き出る冷たく澄み切った伏流水――信州（長野県）は、日本で最も良質な蕎麦が育つ「蕎麦の聖地」として古来より全国の蕎麦好きを魅了し続けています。殻ごと挽き込むことで力強い香りと甘みを放つ「三たて（挽きたて・打ちたて・茹でたて）」の十割蕎麦を、名水仕立ての辛汁や、おろしたての本山葵、地元で採れたサクサクの山菜天ぷらとともにすする瞬間は、まさに大自然の恵みが五臓六腑に染み渡る至福の食体験です。神話の山・戸隠で江戸時代から宿坊として神に仕え伝統の戸隠そばと神職料理を振る舞う「戸隠のそば宿・宿坊極意」、北アルプスの雪解け水が潤す安曇野で古民家を移築した全室離れの贅沢な空間と十割手打ち蕎麦会席を提供する「安曇野 にし屋別荘」、そして城下町松本の奥座敷・浅間温泉で石臼挽きの信州手打ち蕎麦と畳敷きの雅な和空間を誇る「別亭 一花」。新蕎麦の季節はもちろん、四季を通じて本物の蕎麦文化と名湯を堪能できる信州の名宿を、楽天ふるさと納税トラベルクーポン（寄付額の最大30％割引・有効期限3年）を使って実質2,000円で賢く予約し、滋味あふれる大人の蕎麦紀行へ出かけましょう。',
    threePoints: [
      {
        num: '01',
        title: '挽きたて・打ちたて・茹でたての「三たて」！職人が目の前で打つ極上の喉越し',
        body: '石臼で丁寧に挽いた地元産そば粉を使用し、職人がその日の気温や湿度を見極めて手打ち。茹でたてを氷水でキュッと締めた十割蕎麦は、噛むほどに甘みが広がり、鮮烈な香りが鼻腔をくすぐります。'
      },
      {
        num: '02',
        title: '安曇野本わさび、旬の山菜天ぷら、信州牛！蕎麦前と会席料理の贅沢なマリアージュ',
        body: '名水で育った爽やかな辛味の生わさび、タラの芽やフキノトウの揚げたて天ぷら、信州牛の朴葉味噌焼き。蕎麦の前に地酒をちびちびと楽しむ「蕎麦前」の粋な文化を宿の会席でゆったりと堪能できます。'
      },
      {
        num: '03',
        title: '北アルプスの大自然と柔らかな美肌温泉！心身を清らかにリセットする山里リトリート',
        body: '標高の高い澄んだ空気と、古くから湯治場として栄えた信州の名湯。静かな山あいの温泉で身体を温めた後にいただく温もりある蕎麦料理は、都会で疲れた胃腸と心身を優しく癒やしてくれます。'
      }
    ],
    hotelDetails: [
      {
        key: 'togakushi_soba',
        badge: '長野県長野市・日本三大蕎麦戸隠そば発祥の宿坊！創業二百有余年の伝統手打ち蕎麦と神職料理',
        rank: '厳選名宿 第1選',
        desc: '修験道の聖地・戸隠神社の門前に位置し、江戸時代から二百有余年にわたり神職の宿坊として歴史を紡ぐ名旅館。日本三大蕎麦の一つである「戸隠そば」の伝統を守り、店主自らが手打ちする戸隠名物の「ぼっち盛り（一口サイズに束ねた盛り付け）」の十割蕎麦は、香り・コシ・喉越しのすべてが完璧な逸品です。宿坊ならではの神職料理をベースに、季節の山菜や岩魚、戸隠の大根など地元食材を取り入れた滋味深い手作り会席料理が並びます。国の登録有形文化財にも指定された茅葺き屋根の風格ある館内で、神聖な祈りと本物の蕎麦文化を体感できます。'
      },
      {
        key: 'azumino_soba',
        badge: '長野県安曇野市・名水わさび田の里！築百五十年の古民家離れと十割手打ち蕎麦会席の名隠れ宿',
        rank: '厳選名宿 第2選',
        desc: '北アルプスの麓、安曇野・穂高温泉郷の豊かな赤松林の中に佇む、全室離れの静寂に包まれた大人の隠れ宿。築百五十年の古民家を移築した趣ある客室は、囲炉裏や太い梁が温かな風情を醸し出しています。夕食の主役は、毎朝館内の蕎麦打ち場で主人が手打ちする安曇野産十割蕎麦。名水百選に選ばれる澄んだ伏流水と安曇野特産のおろし立て生わさびでいただく蕎麦は、驚くほど澄んだ甘みと力強い風味が広がります。肌に優しい単純温泉の源泉かけ流し風呂とともに、田舎に帰ってきたかのような心安らぐ休日をお過ごしいただけます。'
      },
      {
        key: 'shibu_soba',
        badge: '長野県松本市・国宝松本城の奥座敷！石臼挽き手打ち蕎麦会席と全館畳敷きの和の温もり',
        rank: '厳選名宿 第3選',
        desc: '国宝松本城から車で約10分、開湯千三百年を誇る浅間温泉に位置し、全館すべて畳敷きで素足のまま寛げる和モダン温泉旅館。夕食の会席料理では、信州八ヶ岳山麓や安曇野の契約農家から届く厳選そば粉を石臼で挽き、熟練の料理人が打ち上げる本格手打ち蕎麦を提供。信州牛のすき焼きや旬の川魚料理とともに、信州の地酒とのペアリングも存分に楽しめます。美肌効果の高い浅間温泉の柔らかな湯を湛えた大浴場や露天風呂で旅の疲れを癒やし、城下町の歴史散策と蕎麦美食を心ゆくまで満喫できます。'
      }
    ],
    relatedArticles: [
      { slug: 'furusato-tax-spring-water-soba-tofu-onsen-stay', title: '【湧水手打ち蕎麦＆名水とうふ温泉宿×ふるさと納税】清らかな水の恵み旅' },
      { slug: 'furusato-tax-three-great-soba-noodles-stay', title: '【日本三大蕎麦の名宿×ふるさと納税】戸隠・出雲・わんこそばを巡る美食旅' },
      { slug: 'furusato-tax-traditional-kamado-rice-irori-stay', title: '【かまど炊きご飯＆囲炉裏料理宿×ふるさと納税】里山の伝統美味と温泉' },
      { slug: 'furusato-tax-sake-brewery-pairing-onsen-stay', title: '【銘酒酒蔵ペアリング温泉宿×ふるさと納税】地酒と和食を極める旅' }
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

console.log('Finished generating all 4 articles for Round 75!');
