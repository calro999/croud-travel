const fs = require('fs');
const path = require('path');

const hotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

const articles = [
  {
    slug: 'furusato-tax-jozankei-autumn-leaves-stay',
    theme: '札幌の奥座敷・定山渓温泉 錦秋紅葉めぐり＆名湯宿特集',
    title: '札幌の奥座敷・定山渓温泉の錦秋渓谷紅葉！豊平峡ダム＆二見吊橋と名湯宿×ふるさと納税完全ガイド【2026年最新秋旅】北海道',
    description: '10月上旬〜10月下旬に見頃を迎える北海道屈指の紅葉名所「定山渓温泉」と「豊平峡ダム」。二見吊橋から望む渓谷美と定山渓ネイチャールミナリエ、名宿「ぬくもりの宿 ふる川」「章月グランドホテル」「翠蝶館」で道産ブランド牛や秋鮭・いくらを堪能。楽天ふるさと納税で実質2,000円で泊まる極上の秋旅ガイド。',
    heroTag: '北海道・定山渓温泉 錦秋紅葉散策特集',
    dateBadge: '10月上旬〜10月下旬（紅葉・豊平峡ダム観光ピーク期）',
    leadTitle: '札幌市中心部から1時間！黄金色に染まる渓谷美と名湯・定山渓温泉',
    leadText: '北海道・札幌の奥座敷として古くから親しまれる定山渓温泉。10月上旬から下旬にかけて、豊平川沿いの渓谷や断崖絶壁が赤や黄色のグラデーションに染まりあがり、道内屈指の紅葉パノラマが広がります。名所「二見吊橋」からの渓谷美や、紅葉シャトルバスで向かう「豊平峡ダム」のダイナミックな景観は必見。散策の後は、伝統ある名湯で心身を温め、北海道の秋の味覚（秋鮭、いくら、白老牛、蝦夷アワビなど）を贅沢に味わうひとときを、楽天ふるさと納税トラベルクーポンでお得に満喫しましょう。',
    features: [
      {
        title: '二見吊橋＆かっぱ淵から望む絶景紅葉渓谷',
        text: '豊平川にかかる赤い吊り橋「二見吊橋」から見下ろす二見岩や、澄んだ清流に映る紅葉のグラデーションは定山渓のシンボル。散策路も整備され気軽に紅葉ハイキングが楽しめます。'
      },
      {
        title: '豊平峡ダムのダイナミックな放流と岩壁紅葉',
        text: '電気バスで向かう「豊平峡（ほうへいきょう）ダム」。巨大なアーチ式コンクリートダムと千丈岩の切り立った岩肌を覆う紅葉の壮大なコントラストは圧巻です。'
      },
      {
        title: '北海道・秋の海鮮＆道産ブランド牛の極上会席',
        text: '秋に旬を迎える脂の乗った秋鮭やプチプチのいくら、白老牛のサーロインステーキ、旬の道産野菜やキノコを使った創作会席など、秋の北海道ならではの美食を存分に堪能できます。'
      }
    ],
    hotelKeys: ['jozankei_furukawa', 'jozankei_shogetsu', 'jozankei_suichokan'],
    hotelCaptions: [
      '囲炉裏と民芸の温もりに包まれる人気宿！源泉掛け流し温泉と季節の和食会席が自慢',
      '全室から豊平川の渓谷美を一望！蜂蜜バイキングと老舗ならではの洗練されたおもてなし',
      '女性のための美と癒しの湯宿！中国茶カフェやエステ、美肌温泉で心身を整える上質ステイ'
    ]
  },
  {
    slug: 'furusato-tax-unzen-autumn-leaves-stay',
    theme: '長崎・雲仙地獄＆仁田峠普賢岳紅葉・雲仙温泉名宿特集',
    title: '雲仙仁田峠の紅葉ロープウェイ＆湯けむり雲仙地獄！乳白美肌の湯宿×ふるさと納税完全ガイド【2026年最新秋旅】長崎',
    description: '10月下旬〜11月中旬に山全体が赤く染まる「雲仙仁田峠」と普賢岳の紅葉！ロープウェイから見下ろす錦秋パノラマと大迫力の雲仙地獄めぐり、名宿「雲仙福田屋」「東園」「雲仙新湯」で長崎和牛や島原半島の旬魚を堪能。楽天ふるさと納税トラベルクーポンで実質2,000円で泊まる九州屈指の紅葉ガイド。',
    heroTag: '長崎・雲仙温泉＆仁田峠紅葉特集',
    dateBadge: '10月下旬〜11月中旬（仁田峠紅葉ロープウェイ運行）',
    leadTitle: '海抜1300mの絶景紅葉と立ち上る白煙・乳白色の名湯雲仙',
    leadText: '日本最初の国立公園に指定された長崎県・雲仙天草国立公園。10月下旬から11月中旬にかけて、仁田峠から普賢岳・妙見岳一帯に広がるツクシドウダンやコミネカエデなどの植物群落が真っ赤に色づき、国の天然記念物にも指定される壮大な紅葉絶景が広がります。雲仙ロープウェイから望む360度の大パノラマと、硫黄の香りと白煙が立ち込める「雲仙地獄」の散策を楽しんだ後は、硫黄をたっぷり含んだ乳白色の源泉掛け流し温泉に浸かり、長崎和牛や有明海の海の幸をふるさと納税トラベルクーポンでお得に堪能しましょう。',
    features: [
      {
        title: '雲仙ロープウェイで行く仁田峠〜妙見岳の紅葉空中散歩',
        text: '仁田峠駅から妙見岳駅を結ぶロープウェイ。車窓からは眼下に広がる錦秋の山肌と有明海・橘湾の青い海が同時に広がり、九州屈指のダイナミックな空中散歩が楽しめます。'
      },
      {
        title: '硫黄の蒸気と湯けむり立ち込める「雲仙地獄」めぐり',
        text: '大小30余りの地獄から高温の温泉と噴気が激しく噴き出す雲仙地獄。名物の「温泉たまご」を味わいながら、夜にはライトアップされた幻想的な地獄ナイトウォークも楽しめます。'
      },
      {
        title: '長崎和牛＆島原半島が誇る旬の山海の幸会席',
        text: '全国和牛能力共進会で日本一に輝いた「長崎和牛」の陶板焼きや、有明海・橘湾で水揚げされた新鮮な鯛や車海老、肥沃な大地で育った島原野菜の会席料理を満喫できます。'
      }
    ],
    hotelKeys: ['unzen_fukudaya', 'unzen_azumayen', 'unzen_shin-yu'],
    hotelCaptions: [
      '民芸モダンの温もりとこだわりの自家源泉！長崎和牛鍋と充実の露天風呂が評判の宿',
      'おしどりの池を望む全室レイクビューの絶景美食宿！自家源泉掛け流しと会席料理の極み',
      '敷地内に4つの自家源泉を持つ名湯旅館！異なる泉質と色合いの温泉を湯めぐり'
    ]
  },
  {
    slug: 'furusato-tax-miyajima-autumn-leaves-stay',
    theme: '安芸の宮島・紅葉谷公園＆世界遺産厳島神社・温泉宿特集',
    title: '世界遺産・安芸の宮島と紅葉谷公園の錦秋もみじ！厳島神社＆宮島温泉宿×ふるさと納税完全ガイド【2026年最新秋旅】広島',
    description: '11月中旬〜11月下旬に見頃を迎える日本三景・安芸の宮島の「紅葉谷公園（もみじだにこうえん）」。大鳥居と社殿が浮かぶ厳島神社の夕景、宮島島内＆対岸の温泉宿「錦水館」「離れの宿 IBUKU」「グランヴィリオホテル宮島 和蔵」で旬の広島牡蠣や穴子飯・広島牛を堪能。ふるさと納税で実質2,000円。',
    heroTag: '安芸の宮島・紅葉谷公園＆厳島神社特集',
    dateBadge: '11月中旬〜11月下旬（紅葉谷公園・厳島神社紅葉ピーク）',
    leadTitle: '約700本のもみじが燃える紅葉谷公園と海に浮かぶ世界遺産・厳島神社',
    leadText: '日本三景の一つに数えられる世界遺産「安芸の宮島」。秋の宮島といえば、弥山（みせん）の麓に広がる「紅葉谷公園」が約700本ものモミジで真っ赤に染まり、朱塗りのもみじ橋とのコントラストが絵画のような美しさを誇ります。大鳥居と社殿が秋の澄んだ海に浮かぶ厳島神社の幻想的な姿や、弥山展望台からの瀬戸内海の多島美は一生に一度は見たい絶景。散策後は、名湯・宮島潮湯温泉や対岸の隠れ宿で、解禁を迎えたぷりぷりの広島牡蠣や名物穴子飯をふるさと納税トラベルクーポンでお得に味わいましょう。',
    features: [
      {
        title: '約700本のもみじが織りなす「紅葉谷公園」ともみじ橋',
        text: 'イロハモミジやオオモミジが境内を鮮やかに染め上げる紅葉谷公園。朱塗りのもみじ橋周辺は、赤と黄のグラデーションに包まれ、宮島随一のフォトスポットです。'
      },
      {
        title: '海に浮かぶ国宝・厳島神社と大鳥居の夕景＆ライトアップ',
        text: '満潮時には海の上に浮かんでいるかのように見える厳島神社。夕暮れ時のマジックアワーや、夜のライトアップされた大鳥居は息をのむ美しさです。'
      },
      {
        title: '秋が旬！ぷりっぷりの広島牡蠣＆名物穴子飯・広島牛',
        text: '秋から冬にかけて身が引き締まり濃厚な旨味を増す広島牡蠣の焼き牡蠣やカキフライ、創業以来継ぎ足しのタレで香ばしく焼き上げる名物あなごめし、広島牛会席を堪能。'
      }
    ],
    hotelKeys: ['miyajima_kinsuikan', 'miyajima_ibuku', 'miyajima_grandvrio'],
    hotelCaptions: [
      '宮島島内・厳島神社徒歩圏内の老舗温泉旅館！宮島潮湯温泉と厳選された広島味覚会席',
      '宮島を望む対岸に佇む大人の隠れ家離れ宿！全室温泉付きの極上プライベート空間と創作料理',
      '瀬戸内海と宮島の大鳥居を一望する絶景リゾート！天然温泉展望露天風呂と充実の無料ラウンジ'
    ]
  },
  {
    slug: 'furusato-tax-kasumi-matsuba-crab-stay',
    theme: '兵庫香住・幻の香住ガニ＆11月解禁松葉ガニ・温泉旅館特集',
    title: '11月解禁！兵庫香住の松葉ガニ＆幻の香住ガニ！日本海の絶景温泉宿×ふるさと納税完全ガイド【2026年最新秋旅】兵庫',
    description: '秋の香住といえば関西唯一の水揚げを誇る紅ズワイ「香住ガニ」と、11月6日解禁の本場「松葉ガニ」！茹でガニ・カニ刺し・焼きガニ・カニ鍋を味わい尽くす贅沢プラン、香住温泉の名宿「さだ助」「甲羅戯」「小宿 梅乃家」で日本海の夕景と名湯を満喫。楽天ふるさと納税で実質2,000円で泊まる冬先取りカニ旅ガイド。',
    heroTag: '兵庫香住・松葉ガニ＆香住ガニ解禁特集',
    dateBadge: '10月〜11月（香住ガニ＆11月6日松葉ガニ解禁）',
    leadTitle: '関西随一のカニの聖地・香住！2大ブランドガニの食べ比べと潮騒の温泉',
    leadText: '兵庫県日本海側に位置する美方郡香住町は、関西で唯一ベニズワイガニが水揚げされる「香住ガニ」の聖地であり、11月6日には冬の味覚の王様「松葉ガニ」の漁が解禁される全国屈指のカニどころです。獲れたて新鮮なカニを刺身、炭火焼き、甲羅味噌焼き、茹で、カニすき鍋で贅沢に味わうカニ尽くしコースは、全国の食通を虜にします。日本海を望む香住温泉の名旅館に宿泊し、潮風を感じる露天風呂と至極のカニ料理を、楽天ふるさと納税トラベルクーポンでお得に心ゆくまで満喫しましょう。',
    features: [
      {
        title: '香住ガニ（紅ズワイ）と11月解禁松葉ガニの豪華競演',
        text: '深海800m以上から引き揚げられる甘み豊かな「香住ガニ」と、身がぎっしり詰まった極上の「松葉ガニ」。秋から初冬にかけてしか味わえない贅沢な食べ比べが楽しめます。'
      },
      {
        title: '余部鉄橋「空の駅」と山陰海岸ジオパークの絶景散策',
        text: '地上約40mの高さから日本海を見下ろす旧余部鉄橋の展望施設「空の駅」や、奇岩が連なる鎧の袖など、山陰海岸ジオパークの壮大な景勝地を巡るドライブも魅力です。'
      },
      {
        title: '香住漁港仲買人の宿ならではの鮮度抜群の魚介会席',
        text: 'カニだけでなく、地元香住港で競り落とされる白イカ（剣先イカ）、ノドグロ、甘エビ、但馬牛のステーキなど、日本海と但馬の大自然が育んだ至高の味覚が揃います。'
      }
    ],
    hotelKeys: ['kasumi_sadasuke', 'kasumi_kouragi', 'kasumi_umenoya'],
    hotelCaptions: [
      '香住漁港の仲買人が営むカニと地魚の極上宿！自家製干物と天然温泉で心温まるおもてなし',
      'カニを極めたおとなの隠れ宿！職人の技が光る独創的なカニ料理とモダンな和の空間',
      '一日数組限定の小さな温もり宿！炭火で焼き上げる香住ガニ＆松葉ガニと天然温泉'
    ]
  },
  {
    slug: 'furusato-tax-yamanakako-fuji-autumn-leaves-stay',
    theme: '富士山中湖・夕焼けの渚紅葉まつり＆忍野八海・富士ビュー温泉宿特集',
    title: '富士山と紅葉の絶景コラボ！山中湖「夕焼けの渚紅葉まつり」＆忍野八海と温泉名宿×ふるさと納税完全ガイド【2026年最新秋旅】山梨',
    description: '10月下旬〜11月中旬に開催される山中湖「夕焼けの渚 紅葉まつり」！湖畔の旭日丘緑地公園を彩るもみじのライトアップと富士山の絶景、忍野八海の神秘的な湧水、名宿「しずく」「富士マリオットホテル山中湖」「秀山荘」で個室サウナや甲州ワイン牛を堪能。楽天ふるさと納税トラベルクーポンで実質2,000円。',
    heroTag: '富士山中湖・紅葉まつり＆忍野八海特集',
    dateBadge: '10月下旬〜11月中旬（夕焼けの渚 紅葉まつりライトアップ）',
    leadTitle: '紅葉と富士山が湖面に映る逆さ富士！山中湖畔の幻想的な秋景色',
    leadText: '富士五湖の中で最も標高が高く、富士山に最も近い「山中湖」。10月下旬から11月中旬にかけて、湖畔の旭日丘緑地公園を中心に「夕焼けの渚 紅葉まつり」が開催され、約600mにわたるもみじ回廊が夜間美しくライトアップされます。秋の澄み切った空に浮かぶ冠雪の富士山と、湖畔を真っ赤に染める紅葉のコントラストは圧巻。名水百選「忍野八海」の透明度の高い湧水池めぐりと合わせて、富士山を望むプライベートサウナ付き温泉宿や上質リゾートホテルで、甲州牛や山梨ワインをふるさと納税トラベルクーポンでお得に楽しみましょう。',
    features: [
      {
        title: '山中湖・夕焼けの渚 紅葉まつり＆600mのライトアップ回廊',
        text: '日本の渚百選に選ばれた「夕焼けの渚」。夕暮れ時には真っ赤な夕日に染まる富士山と紅葉のコラボ、夜にはライトアップされた木々が湖面に映り込む幻想的な世界が広がります。'
      },
      {
        title: '世界遺産・忍野八海（おしにはっかい）の神秘的な透明湧水',
        text: '富士山の雪解け水が数十年の歳月をかけて湧き出る忍野八海。吸い込まれそうなエメラルドグリーンの水鏡に映る紅葉と富士山の絶景は必見です。'
      },
      {
        title: '甲州ワインビーフ＆富士の恵み・名物ほうとうの美味',
        text: 'ワインの搾りかすで育った柔らかくジューシーな「甲州ワインビーフ」、富士山の湧水で打った手打ちそば、旬のカボチャやキノコがたっぷり入った熱々の「ほうとう」を満喫。'
      }
    ],
    hotelKeys: ['yamanakako_shizuku', 'yamanakako_marriott', 'yamanakako_shuzanso'],
    hotelCaptions: [
      '全室に富士山ビューとプライベート個室サウナを完備！天然温泉と贅沢なととのい体験',
      '山中湖の森に佇むインターナショナルリゾート！温泉付き客室と上質なグリルダイニング',
      '富士山を望む展望風呂と旬の創作和食！静かな森に包まれた癒しの温泉リゾート旅館'
    ]
  }
];

function generatePageCode(art) {
  const hotelCardsCode = art.hotelKeys.map((key, idx) => {
    const h = hotels[key];
    const caption = art.hotelCaptions[idx];
    if (!h) {
      console.warn('Missing hotel data for key:', key);
      return '';
    }
    const hotelNo = h.hotelNo;
    const hotelName = h.hotelName;
    const imgUrl = h.hotelImageUrl || (h.hotelThumbnailUrl ? h.hotelThumbnailUrl.replace('http://', 'https://') : `https://img.travel.rakuten.co.jp/share/HOTEL/${hotelNo}/${hotelNo}.jpg`);
    const affUrl = h.affiliateUrl || `https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F${hotelNo}%2F${hotelNo}.html`;
    const rating = h.reviewAverage ? Number(h.reviewAverage).toFixed(2) : '4.30';
    const reviews = h.reviewCount || 350;
    const minCharge = h.hotelMinCharge ? Number(h.hotelMinCharge).toLocaleString() : '8,500';
    const address = `${h.address1 || ''}${h.address2 || ''}`;
    const access = h.access || '';
    const special = h.hotelSpecial || caption;

    return `
            <div key="${key}" className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 px-6 py-3 text-xs md:text-sm font-bold flex justify-between items-center">
                <span>${caption}</span>
                <span className="bg-amber-500/30 text-amber-200 text-xs px-2.5 py-0.5 rounded-full border border-amber-400/40">厳選名宿 第${idx + 1}選</span>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md">
                      ふるさと納税トラベルクーポン対象
                    </span>
                    <span className="text-amber-800 font-bold text-sm">
                      ★ ${rating} <span className="text-stone-400 text-xs">(${reviews}件)</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
                    ${hotelName}
                  </h3>
                  <p className="text-xs md:text-sm text-stone-500 mt-1">
                    📍 ${address} ｜ ${access}
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner bg-stone-100 group">
                      <img
                        src="${imgUrl}"
                        alt="${hotelName}"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-stone-700 text-sm md:text-base leading-relaxed">
                      ${special}
                    </p>
                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/60 text-xs space-y-1.5 text-stone-600">
                      <div><strong className="text-stone-800">♨️ 特徴・魅力：</strong> ${special.slice(0, 70)}...</div>
                      <div><strong className="text-stone-800">🚗 アクセス：</strong> ${access.slice(0, 60)}</div>
                      <div><strong className="text-stone-800">💰 料金目安：</strong> <span className="text-amber-900 font-bold text-sm">1名あたり ${minCharge}円〜</span>（※クーポン利用で実質2,000円）</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="${affUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md text-center transition flex items-center justify-center gap-2 text-sm"
                  >
                    <span>🏨 楽天トラベルで空室・宿泊プランを見る</span>
                    <span>→</span>
                  </a>
                  <a
                    href="https://event.travel.rakuten.co.jp/furusato/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3.5 px-6 rounded-2xl border border-stone-300 text-center transition text-sm flex items-center justify-center gap-1.5"
                  >
                    <span>🎫 自治体クーポン獲得</span>
                  </a>
                </div>
              </div>
            </div>
    `;
  }).join('\n');

  const featuresCode = art.features.map((f, i) => `
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-2">
              <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-sm font-bold flex items-center justify-center">${i + 1}</span>
                ${f.title}
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed pl-9">
                ${f.text}
              </p>
            </div>
  `).join('\n');

  return `import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${art.title.replace(/'/g, "\\'")}',
  description: '${art.description.replace(/'/g, "\\'")}',
  keywords: [
    'ふるさと納税 温泉',
    'ふるさと納税 宿泊券',
    'ふるさと納税 トラベルクーポン',
    '${art.heroTag}',
    '10月 旅行 おすすめ',
    '11月 旅行 おすすめ',
    '秋 旅行 温泉',
    '紅葉 温泉旅館',
    '楽天トラベル ふるさと納税',
    '実質2000円 温泉'
  ],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/${art.slug}/'
  },
  openGraph: {
    title: '${art.title.replace(/'/g, "\\'")}',
    description: '${art.description.replace(/'/g, "\\'")}',
    url: 'https://croud-travel.pages.dev/${art.slug}',
    siteName: '旅宿クラウド',
    locale: 'ja_JP',
    type: 'article',
  }
};

export default function FeatureArticlePage() {
  return (
    <main className="min-h-screen bg-stone-100/60 text-stone-900 pb-20">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs text-stone-500 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-stone-800 underline">ホーム</Link>
        <span>&gt;</span>
        <Link href="/features" className="hover:text-stone-800 underline">特集一覧</Link>
        <span>&gt;</span>
        <span className="text-stone-800 font-bold">${art.theme}</span>
      </nav>

      {/* ヒーローセクション */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full border border-amber-400/30">
              ${art.heroTag}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-snug">
              ${art.title}
            </h1>
            <p className="text-stone-300 text-sm md:text-base max-w-3xl leading-relaxed">
              ${art.description}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-amber-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <span>🗓️</span> ${art.dateBadge}
              </span>
              <span className="flex items-center gap-1.5">
                <span>🎫</span> 楽天ふるさと納税トラベルクーポン対象
              </span>
              <span className="flex items-center gap-1.5">
                <span>💰</span> 寄付額の最大30%クーポン還元（実質2,000円）
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* イントロダクション */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-stone-200/80 shadow-sm space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
              ${art.leadTitle}
            </h2>
          </div>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed">
            ${art.leadText}
          </p>

          <div className="grid md:grid-cols-3 gap-4 pt-2">
            ${featuresCode}
          </div>
        </div>
      </section>

      {/* 厳選ホテル一覧 */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-amber-800 text-xs md:text-sm font-bold tracking-wider uppercase">Recommended Ryokan & Hotels</span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-serif text-stone-900">
              ふるさと納税トラベルクーポンで泊まりたい厳選宿3選
            </h2>
            <p className="text-stone-500 text-xs md:text-sm max-w-2xl mx-auto">
              楽天トラベルで高評価を獲得し、ふるさと納税クーポンが使える注目の名宿を徹底紹介。
            </p>
          </div>

          <div className="space-y-8">
            ${hotelCardsCode}
          </div>
        </div>
      </section>

      {/* ふるさと納税クーポンの活用手順 */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-12">
        <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-3xl p-6 md:p-10 border border-amber-200/70 shadow-sm space-y-6">
          <div className="text-center space-y-2">
            <span className="text-amber-800 text-xs font-bold tracking-wider uppercase">How to use</span>
            <h2 className="text-xl md:text-2xl font-bold font-serif text-stone-900">
              楽天ふるさと納税トラベルクーポンの簡単3ステップ
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-4">
            <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm text-center space-y-3">
              <div className="w-10 h-10 mx-auto rounded-full bg-amber-600 text-white font-bold text-lg flex items-center justify-center shadow">1</div>
              <h3 className="font-bold text-stone-900 text-base">寄付してクーポン獲得</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                対象自治体へ寄付を申し込むと、寄付額の最大30%相当の楽天トラベルクーポンが即時または数日でマイクーポンに付与されます。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm text-center space-y-3">
              <div className="w-10 h-10 mx-auto rounded-full bg-amber-600 text-white font-bold text-lg flex items-center justify-center shadow">2</div>
              <h3 className="font-bold text-stone-900 text-base">対象宿を予約</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                楽天トラベルで希望の宿・宿泊プランを選択。予約画面で取得したふるさと納税クーポンを適用して割引を受けます。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm text-center space-y-3">
              <div className="w-10 h-10 mx-auto rounded-full bg-amber-600 text-white font-bold text-lg flex items-center justify-center shadow">3</div>
              <h3 className="font-bold text-stone-900 text-base">実質2,000円で贅沢旅行</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                自己負担額は年間2,000円のみ（上限額内）。翌年の住民税控除や所得税還付を受けながら、最高の秋旅をお楽しみいただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター誘導 */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <Link
          href="/features"
          className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-900 text-white font-bold py-3 px-8 rounded-full shadow transition text-sm"
        >
          <span>← 特集記事一覧に戻る</span>
        </Link>
      </footer>
    </main>
  );
}
`;
}

for (const art of articles) {
  const dir = path.join('src/app', art.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const filePath = path.join(dir, 'page.tsx');
  fs.writeFileSync(filePath, generatePageCode(art), 'utf8');
  console.log('Generated:', filePath);
}
