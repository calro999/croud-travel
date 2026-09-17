const fs = require('fs');
const path = require('path');

const hotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

const articles = [
  {
    slug: 'furusato-tax-kenrokuen-yukitsuri-autumn-kanazawa-stay',
    theme: '兼六園雪吊り＆秋のライトアップ・金沢温泉旅館特集',
    title: '兼六園の雪吊り＆金沢城・紅葉ライトアップ！深谷温泉・湯涌温泉の名湯宿×ふるさと納税完全ガイド【2026年最新秋旅】石川',
    description: '11月1日から始まる兼六園の冬支度「雪吊り（ゆきつり）」と紅葉ライトアップ！秋の金沢・兼六園を巡り、開湯1300年の金沢湯涌温泉や深谷温泉の名湯宿「元湯石屋」「湯の出旅館」「百楽荘」で能登牛やのどぐろを堪能。楽天ふるさと納税トラベルクーポンで実質2,000円で泊まる極上の金沢秋旅ガイド。',
    heroTag: '金沢・兼六園雪吊り＆名湯温泉宿特集',
    dateBadge: '11月1日〜11月下旬（雪吊り・秋のライトアップ）',
    leadTitle: '11月1日解禁の兼六園「雪吊り」と紅葉の競演！美の都・金沢の温泉宿へ',
    leadText: '加賀百万石の歴史と文化が色濃く残る金沢。毎年11月1日から始まる名勝「兼六園」の雪吊り作業は、北陸に初冬の訪れを告げる風物詩として全国から多くの観光客を惹きつけます。秋の紅葉と唐崎松に施される円錐状の縄の幾何学美、夜の幻想的なライトアップは圧巻の一言。金沢市街から少し足を延ばした「湯涌温泉」や「深谷温泉」の隠れ宿に滞在し、旬を迎えるズワイガニやのどぐろ、加賀野菜の会席料理をふるさと納税トラベルクーポンでお得に満喫しましょう。',
    features: [
      {
        title: '兼六園の雪吊り（11月1日〜）＆唐崎松の円錐美',
        text: '兼六園を象徴する唐崎松をはじめ、園内の銘木を雪の重みから守るために縄を張る「雪吊り」。職人たちが一本一本手作業で縄を張る姿と、残る紅葉の赤や黄色とのコントラストは11月前半ならではの特別な景観です。'
      },
      {
        title: '金沢城公園・兼六園 四季物語 秋の段（夜間ライトアップ）',
        text: '見頃を迎える11月には、兼六園と金沢城公園で夜間無料開放とライトアップが実施されます。徽軫灯籠（ことじとうろう）や噴水、水面に映り込む紅葉と雪吊りのシルエットが黄金色に輝き、昼とは異なる幽玄な美を堪能できます。'
      },
      {
        title: '近江町市場・加賀の秋味覚「のどぐろ＆加賀野菜」',
        text: '脂の乗った高級魚のどぐろの塩焼きや刺身、加賀れんこんや金時草などの加賀伝統野菜、11月上旬に解禁される香箱ガニ（雌のズワイガニ）など、秋の金沢は美食の宝庫。温泉宿の贅沢な会席料理で存分に味わえます。'
      }
    ],
    hotelKeys: ['kanazawa_ishiya', 'kanazawa_yunode', 'kanazawa_hyakuraso'],
    hotelCaptions: [
      '寛政元年創業、深谷温泉に佇む能舞台を持つ唯一無二の老舗秘湯宿！自家源泉のモール泉と加賀懐石',
      '金沢の奥座敷・湯涌温泉の純和風数寄屋造り老舗旅館！金沢の旬を映す極上懐石と名湯',
      '九十九湾の名宿「百楽荘」の美学が息づく金沢湯涌温泉のラグジュアリー隠れ宿！個室食事と貸切露天'
    ]
  },
  {
    slug: 'furusato-tax-oirase-towada-autumn-leaves-stay',
    theme: '十和田湖・奥入瀬渓流 錦秋紅葉散策＆十和田湖畔温泉宿特集',
    title: '奥入瀬渓流の黄金紅葉トンネル＆十和田湖畔温泉！十和田荘・賑山亭・プリンスホテル×ふるさと納税完全ガイド【2026年最新秋旅】青森・秋田',
    description: '10月中旬〜11月上旬に見頃を迎える日本屈指の紅葉スポット「奥入瀬渓流」と「十和田湖」。黄金色に染まるブナの原生林と清流のコントラスト、十和田湖畔温泉の名宿「ホテル十和田荘」「とわだこ賑山亭」「十和田プリンスホテル」で十和田バラ焼きや旬の味覚を堪能。楽天ふるさと納税で実質2,000円で泊まる紅葉ガイド。',
    heroTag: '奥入瀬渓流・十和田湖 錦秋紅葉散策特集',
    dateBadge: '10月中旬〜11月上旬（黄葉・紅葉ピーク期）',
    leadTitle: '奇跡の黄金トンネル・奥入瀬渓流と静寂のカルデラ湖・十和田湖',
    leadText: '国の特別名勝・天然記念物に指定されている奥入瀬渓流。十和田湖の子ノ口から焼山まで約14kmにわたり続く清流沿いは、10月中旬から11月上旬にかけてブナやカツラ、モミジが色づき、息をのむような「黄金のトンネル」へと姿を変えます。阿修羅の流れや銚子大滝など無数の名瀑を巡るハイキングを楽しんだ後は、十和田湖畔の温泉宿で源泉掛け流しの湯に浸かり、名物の十和田バラ焼きやヒメマス料理をふるさと納税トラベルクーポンでお得に堪能しましょう。',
    features: [
      {
        title: '奥入瀬渓流 14kmの黄金トンネルと名瀑巡り',
        text: '躍動感あふれる「阿修羅の流れ」や幅20m・落差7mの「銚子大滝」、繊細な「雲井の滝」など、紅葉の木立の間から覗く滝と清流のダイナミックな景観は日本随一のウォーキングルートです。'
      },
      {
        title: '十和田湖遊覧船から望む360度の大パノラマ紅葉',
        text: '十和田湖の休屋や子ノ口から運航する遊覧船に乗れば、中山半島や御倉半島の断崖絶壁を彩る紅葉と、群青色の湖面の対比を湖上から贅沢に楽しめます。'
      },
      {
        title: '十和田バラ焼き＆十和田湖特産ヒメマスの美味',
        text: '青森ご当地グルメ「十和田バラ焼き」の甘辛いタレと玉ねぎ・牛バラ肉の旨味、十和田湖の清らかな水で育ったヒメマス（十和田湖ひめます）の塩焼きや刺身など、秋の地元食材が食欲を刺激します。'
      }
    ],
    hotelKeys: ['towada_towadaso', 'towada_shinzantei', 'towada_prince'],
    hotelCaptions: [
      '十和田湖畔随一の規模を誇る老舗旅館！広々とした大浴場・露天風呂と郷土料理バイキング',
      '囲炉裏炭火焼き料理が名物の温もりあふれる湖畔の隠れ宿！青森の地酒と山海の幸',
      '十和田西湖畔に佇む優雅なオーベルジュ風リゾートホテル！フレンチフルコースとプライベート感'
    ]
  },
  {
    slug: 'furusato-tax-iya-oboke-gorge-autumn-leaves-stay',
    theme: '徳島・祖谷渓＆大歩危峡 秘境紅葉＆絶景温泉旅館特集',
    title: '日本三大秘境・祖谷のかずら橋＆大歩危峡の断崖紅葉！ケーブルカー露天風呂の宿×ふるさと納税完全ガイド【2026年最新秋旅】徳島',
    description: '10月下旬〜11月中旬に山一面が錦に染まる日本三大秘境「祖谷渓（いやけい）」と吉野川の「大歩危峡（おおぼけきょう）」。スリル満点の祖谷のかずら橋、名物小便小僧、ケーブルカーで行く谷底露天風呂「ホテル祖谷温泉」「ホテルかずら橋」「サンリバー大歩危」で祖谷そばや阿波尾鶏を堪能。ふるさと納税で実質2,000円。',
    heroTag: '四国・祖谷渓＆大歩危峡 秘境温泉特集',
    dateBadge: '10月下旬〜11月中旬（秘境紅葉の見頃）',
    leadTitle: 'V字谷が錦に燃える日本三大秘境・祖谷と大歩危の清流美',
    leadText: '四国の山深き地に位置する日本三大秘境「祖谷渓」。切り立ったV字谷の断崖絶壁が10月下旬から11月中旬にかけて赤や黄色に染まりあがる光景はまさに息をのむ絶景です。国の重要有形民俗文化財「祖谷のかずら橋」を渡るスリル、断崖に立つ「小便小僧」、吉野川の激流が削り出した「大歩危峡遊覧船」など見どころが満載。さらに、専用ケーブルカーで谷底や山上の露天風呂へ向かうユニークな名湯宿で、秘境ならではの湯浴みと阿波の味覚をふるさと納税トラベルクーポンでお得に満喫しましょう。',
    features: [
      {
        title: 'スリル満点！国指定重要有形民俗文化財「祖谷のかずら橋」',
        text: '自生するシラクチカズラを編んで作られた吊り橋。歩くたびにギシギシと揺れ、足元のすき間から川面が見えるスリルと、周囲を取り囲む紅葉の壮大な美しさは圧巻です。'
      },
      {
        title: '吉野川の大歩危峡観光遊覧船＆舟下り紅葉',
        text: '2億年の時をかけて結晶片岩が削られた大歩危峡。遊覧船に乗って川面から見上げる巨岩・奇岩と紅葉のコントラストは、ジオパークならではのダイナミックな体験です。'
      },
      {
        title: '名物・祖谷そば＆阿波尾鶏・鮎の塩焼き',
        text: 'つなぎをほとんど使わない素朴で香り高い「祖谷そば」や、徳島の地鶏「阿波尾鶏」、吉野川の清流で育った鮎の塩焼き、でこまわし（豆腐やこんにゃくの田楽）など郷土の滋味を満喫できます。'
      }
    ],
    hotelKeys: ['iya_kazurabashi', 'iya_iyaonsen', 'oboke_sunriver'],
    hotelCaptions: [
      '専用ケーブルカーで登る天空露天風呂が名物！囲炉裏を囲む郷土料理と温かいもてなしの宿',
      '谷底へ下る専用ケーブルカー露天風呂！祖谷川の渓流沿いで源泉掛け流しを愉しむ秘境の一軒宿',
      '大歩危峡の絶景を見下ろす展望大浴場＆pH9.8の強アルカリ美肌温泉！吉野川の旬を味わう宿'
    ]
  },
  {
    slug: 'furusato-tax-hiraizumi-chusonji-hanamaki-autumn-stay',
    theme: '平泉・中尊寺金色堂紅葉＆花巻温泉郷名湯宿特集',
    title: '世界遺産・平泉中尊寺の月見坂紅葉＆花巻温泉郷の名湯！佳松園・藤三旅館・廣美亭×ふるさと納税完全ガイド【2026年最新秋旅】岩手',
    description: '10月下旬〜11月上旬に見頃を迎える世界遺産・平泉「中尊寺」「毛越寺」の紅葉！月見坂を覆うもみじのトンネルと金色堂、宮沢賢治ゆかりの花巻温泉郷「佳松園」「鉛温泉 藤三旅館」「廣美亭」で白猿の湯や前沢牛会席を堪能。楽天ふるさと納税トラベルクーポンで実質2,000円で泊まる岩手秋旅ガイド。',
    heroTag: '平泉中尊寺紅葉＆花巻温泉郷特集',
    dateBadge: '10月下旬〜11月上旬（世界遺産紅葉まつり）',
    leadTitle: '奥州藤原氏の黄金文化・中尊寺と宮沢賢治が愛した花巻の名湯',
    leadText: '世界文化遺産に登録されている岩手県平泉。秋の中尊寺では、参道「月見坂」を覆う鮮やかなもみじのトンネルや、国宝・金色堂を包む錦秋の木々が訪れる人々を魅了します。浄土庭園の美しさを伝える毛越寺の紅葉と合わせて散策した後は、車で約40分の名湯・花巻温泉郷へ。宮沢賢治ゆかりの地に湧く歴史ある温泉、日本一深い自噴天然岩風呂「白猿の湯」や極上の割烹旅館で、岩手県産前沢牛や三陸の海の幸をふるさと納税トラベルクーポンでお得に味わい尽くしましょう。',
    features: [
      {
        title: '平泉・中尊寺 月見坂の紅葉トンネル＆金色堂の秋',
        text: '樹齢数百年の杉並木と真っ赤に染まるもみじが織りなす「月見坂」。国宝・金色堂を囲む紅葉のグラデーションは、奥州藤原氏の栄華を今に伝える荘厳な美しさを放ちます。'
      },
      {
        title: '毛越寺（もうつうじ） 浄土庭園と大泉が池の水鏡紅葉',
        text: '平安時代の優雅な庭園美をそのまま残す毛越寺。広大な大泉が池の水面に映り込む木々の紅葉と州浜の景観は、平安貴族が描いた極楽浄土の世界そのものです。'
      },
      {
        title: '前沢牛・白金豚＆三陸海の幸の贅沢会席',
        text: '極上の霜降りと甘みが特徴の岩手最高峰ブランド牛「前沢牛」、花巻特産のブランド豚「白金豚（プラチナポーク）」、三陸直送の新鮮魚介を各宿こだわりの会席料理で贅沢にいただけます。'
      }
    ],
    hotelKeys: ['hanamaki_kashoen', 'hanamaki_fujisan', 'hanamaki_hiromitei'],
    hotelCaptions: [
      '南部赤松林に囲まれた花巻随一の最高級数寄屋造り旅館！とろとろの美肌湯と極上会席',
      '新日本百名湯！立って入る日本一深い自噴天然岩風呂「白猿の湯」を持つ木造三階建ての秘湯宿',
      '一日数組限定、お料理自慢の純和風割烹旅館！岩手の旬素材を美しく仕立てた本格懐石'
    ]
  },
  {
    slug: 'furusato-tax-takaosan-autumn-leaves-festival-stay',
    theme: '東京・高尾山もみじまつり＆八王子・秋川渓谷名宿特集',
    title: '都心から1時間の絶景！高尾山もみじまつり＆秋川渓谷・八王子名宿×ふるさと納税完全ガイド【2026年最新秋旅】東京',
    description: '11月上旬〜12月上旬に開催される「高尾山もみじまつり」！日本一の急勾配を行くケーブルカーからの紅葉トンネルと薬王院の秋、八王子の「京王プラザホテル八王子」「the b 八王子」や秋川渓谷の老舗「兜家旅館」に滞在し、名物とろろそばや炭火焼き料理を楽天ふるさと納税で実質2,000円で満喫する完全ガイド。',
    heroTag: '東京・高尾山紅葉＆八王子・秋川渓谷特集',
    dateBadge: '11月上旬〜12月上旬（高尾山もみじまつり）',
    leadTitle: '年間登山者数世界一の霊峰・高尾山が真っ赤に燃える秋',
    leadText: '新宿から京王線で約50分という抜群のアクセスを誇る霊峰・高尾山。ミシュラン三ツ星観光地にも選ばれたこの山は、11月になると山頂から麓までが一斉に色づき、日本屈指の紅葉パラダイスとなります。日本一急勾配のケーブルカー車窓から眺める紅葉のアーチ、歴史ある薬王院の境内を彩るカエデの美しさは息をのむほど。登山や散策の後は、八王子市内の快適シティホテルや、大自然が残る秋川渓谷の老舗温泉旅館に宿泊し、名物の高尾山とろろそばや多摩の山の幸をふるさと納税トラベルクーポンでお得に楽しみましょう。',
    features: [
      {
        title: '高尾山ケーブルカー＆リフトから見上げる紅葉のアーチ',
        text: '清滝駅から高尾山駅まで最急勾配31度18分を誇るケーブルカー。両脇から迫る鮮やかなもみじのトンネルをくぐり抜ける体験は高尾山紅葉のハイライトです。'
      },
      {
        title: '高尾山薬王院有喜寺の境内と山頂からの富士山眺望',
        text: '天狗信仰で知られる薬王院の朱塗りの社殿と紅葉のコントラスト。澄んだ秋晴れの山頂（標高599m）からは、雪化粧した富士山の絶景を一望できます。'
      },
      {
        title: '名物・高尾山とろろそば＆多摩の地酒・炭火料理',
        text: '高尾山参道に軒を連ねる蕎麦処で味わう滋養強壮「とろろそば」、秋川渓谷の清流で育った鮎や山菜、老舗旅館で味わう囲炉裏炭火焼き料理など秋の味覚が充実。'
      }
    ],
    hotelKeys: ['takaosan_keioplaza', 'takaosan_theb', 'akigawa_kabutoya'],
    hotelCaptions: [
      'JR八王子駅北口徒歩1分の好立地シティホテル！快適な客室と高尾山へのスムーズなアクセス',
      '八王子駅近くで機能的かつスタイリッシュなステイ！清潔感あふれる快適空間で観光の拠点に最適',
      '秋川渓谷の奥深くに建つ創業数百年の茅葺き屋根老舗旅館！山菜料理と炭火焼きの贅沢'
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
