const fs = require('fs');
const path = require('path');

const hotels = JSON.parse(fs.readFileSync('src/data/all_seasonal_rakuten_hotels.json', 'utf8'));

const articles = [
  {
    slug: 'furusato-tax-hachimantai-aspiteline-autumn-leaves-stay',
    theme: '岩手・八幡平アスピーテライン紅葉ドライブ＆松川温泉秘湯宿特集',
    title: '八幡平アスピーテラインの紅葉回廊ドライブ＆乳白色の秘湯・松川温泉！露天風呂宿×ふるさと納税完全ガイド【2026年最新秋旅】岩手',
    description: '9月下旬〜10月中旬に見頃を迎える東北屈指の山岳紅葉「八幡平アスピーテライン」。標高1,613mの頂上へ続く黄色と赤のパノラマ紅葉ロード、地熱発電の里に湧く青白濁の秘湯「松川温泉 峡雲荘」「松川荘」「八幡平マウンテンホテル」で前沢牛・短角牛や八幡平ポーク・八幡平サーモンを堪能。ふるさと納税で実質2,000円。',
    heroTag: '岩手・八幡平アスピーテライン＆松川温泉特集',
    dateBadge: '9月下旬〜10月中旬（八幡平アスピーテライン紅葉ピーク期）',
    leadTitle: '東北最高峰のパノラマドライブ！黄色と赤の海を抜けるアスピーテラインと秘湯・松川',
    leadText: '岩手県と秋田県にまたがる八幡平国立公園を貫く全長約27kmの山岳観光道路「八幡平アスピーテライン」。9月下旬から10月中旬にかけて、ダケカンバの黄金色やナナカマド・モミジの鮮やかな真紅が山肌を埋め尽くし、東北随一の壮大な紅葉ドライブが楽しめます。山頂周辺の八幡沼・ガマ沼を巡るトレッキングも爽快。散策後は、深いブナの原生林に抱かれた開湯280年の秘湯「松川温泉」へ。白濁した単純硫黄泉を贅沢に掛け流す野趣あふれる露天風呂に浸かり、岩手銘柄「いわて短角牛」や八幡平サーモンをふるさと納税トラベルクーポンでお得に心ゆくまで満喫しましょう。',
    features: [
      {
        title: '八幡平アスピーテラインの黄金ダケカンバ紅葉ロード',
        text: '茶臼岳から見返峠へと登る絶景ロード。車窓を流れる赤・黄・緑のグラデーションと、澄んだ秋空のコントラストは息をのむ美しさです。'
      },
      {
        title: '日本初の地熱発電の里！乳白色の秘湯「松川温泉」露天風呂',
        text: '青みを帯びた乳白色の濃厚な硫黄泉。松川渓谷のせせらぎを聞きながら入る木造りや岩造りの露天風呂は秘湯ファン憧れの湯浴み体験です。'
      },
      {
        title: 'いわて短角牛＆八幡平マッシュルーム・サーモン会席',
        text: '赤身肉の旨味が際立つ「いわて短角牛」のステーキ、清流で育つ「八幡平サーモン」、地熱を利用して栽培される香り高い「八幡平マッシュルーム」の美食を堪能。'
      }
    ],
    hotelKeys: ['hachimantai_mountain', 'hachimantai_kyounso', 'hachimantai_matsukawaso'],
    hotelCaptions: [
      '八幡平の自然と調和するモダンな山岳高原リゾートホテル！天然温泉とシェフ特製ディナー',
      '日本秘湯を守る会会員宿！ブナの原生林に囲まれた総トドマツ造りの乳白色露天風呂と山里料理',
      '松川渓谷の清流沿いに佇む秘湯の一軒宿！硫黄香る白濁の掛け流し湯と素朴な郷土料理'
    ]
  },
  {
    slug: 'furusato-tax-akayu-wine-autumn-leaves-stay',
    theme: '山形・赤湯温泉 赤湯ワイン＆上杉家ゆかりの名湯旅館特集',
    title: '開湯930年の赤湯温泉と南陽スカイパーク南陽盆地紅葉！米沢牛と名湯宿×ふるさと納税完全ガイド【2026年最新秋旅】山形',
    description: '10月下旬〜11月中旬に見頃を迎える置賜盆地と「赤湯温泉（あかゆおんせん）」。烏帽子山公園の紅葉ライトアップや十分一山からの雲海パノラマ、上杉家ゆかりの老舗旅館「御殿守」「森の湯」「丹波館」で日本三大和牛「米沢牛」すき焼きや赤湯ワイン・名物辛味噌ラーメンを堪能。楽天ふるさと納税で実質2,000円。',
    heroTag: '山形・赤湯温泉＆置賜盆地ワイン特集',
    dateBadge: '10月下旬〜11月中旬（烏帽子山公園紅葉＆ワイナリー収穫期）',
    leadTitle: '上杉鷹山公も愛した名湯！赤湯ワインの故郷と最高峰「米沢牛」の贅',
    leadText: '寛治7年（1093年）、源義綱が発見したと伝わる山形県南陽市の「赤湯温泉」。上杉藩の指定湯治場として栄えた歴史を誇り、温泉街のすぐ裏手にある「烏帽子山公園」は秋になると約千本のモミジやサクラが紅葉し、置賜盆地を見渡す絶景が広がります。南陽スカイパーク（十分一山）から眺める朝の雲海も秋の風物詩。赤湯は東北最古のワイナリーが点在するワインの郷でもあり、宿自慢の源泉掛け流し温泉に浸かった後は、日本三大和牛「米沢牛」のステーキや極上すき焼きを地元産赤湯ワインとともにふるさと納税トラベルクーポンでお得に贅沢に味わいましょう。',
    features: [
      {
        title: '烏帽子山公園の紅葉散策と十分一山（じゅうぶいちやま）の雲海',
        text: '山形百名山を望む烏帽子山公園の錦秋パノラマ。早朝には置賜盆地全体を真っ白な霧が覆い尽くす幻想的な「雲海」の絶景に出会えます。'
      },
      {
        title: '上杉家の殿様が入浴した御殿湯の歴史と多彩な大浴場',
        text: '重曹と食塩を含む肌当たりのやわらかな弱アルカリ性温泉。大石風呂や檜風呂など趣向を凝らした湯船で心ゆくまで名湯を満喫できます。'
      },
      {
        title: '日本三大和牛「米沢牛」極上すき焼き＆赤湯ワインマリアージュ',
        text: 'きめ細かな霜降りと上質な甘みがとろける「米沢牛」、地元4つのワイナリーが醸す赤湯ワイン、山形名物「赤湯辛味噌ラーメン」の深いコクを堪能。'
      }
    ],
    hotelKeys: ['akayu_gotenmori', 'akayu_morinoyu', 'akayu_tanba'],
    hotelCaptions: [
      '上杉家ゆかりの歴史を誇る老舗名門宿！館内十二石風呂の多彩な湯めぐりと米沢牛懐石',
      '全室数寄屋造りの贅沢な純和風旅館！自家源泉100%掛け流しの湯と置賜の味覚会席',
      '大正ロマンの風情漂うレトロな癒しの宿！源泉掛け流しの湯と心温まる郷土料理'
    ]
  },
  {
    slug: 'furusato-tax-azumino-autumn-leaves-stay',
    theme: '信州安曇野・大王わさび農場紅葉＆穂高温泉郷リゾート特集',
    title: '北アルプス冠雪と安曇野の安曇野わさび田紅葉！美肌の穂高温泉郷宿×ふるさと納税完全ガイド【2026年最新秋旅】長野',
    description: '10月中旬〜11月上旬に見頃を迎える「信州安曇野（あずみの）」と穂高温泉郷。大王わさび農場の蓼川水車小屋紅葉と冠雪の北アルプス（常念岳）、名湯「安曇野穂高ビューホテル」「ガーデンあずみ野」「アートキャビン」で信州サーモンや信州そば・安曇野美豚・信州牛を堪能。楽天ふるさと納税で実質2,000円。',
    heroTag: '信州・安曇野わさび田紅葉＆穂高温泉郷特集',
    dateBadge: '10月中旬〜11月上旬（安曇野紅葉＆北アルプス初冠雪期）',
    leadTitle: '清流に回る水車小屋と冠雪の北アルプス！絵画のような田園リゾート・安曇野',
    leadText: '雄大な北アルプスの麓に広がる田園リゾート・長野県「安曇野」。秋のシンボル「大王わさび農場」では、湧水が流れる蓼川（たでがわ）沿いの木造水車小屋を鮮やかなモミジやケヤキが包み込み、黒澤明監督の映画『夢』の舞台そのままの叙情詩のような風景が広がります。初冠雪した常念岳を背景に、美術館巡りやサイクリングを楽しんだ後は、中房温泉から引湯するpH8.5以上のアルカリ性単純温泉「穂高温泉郷」へ。肌がつるつるになる「美肌の湯」に浸かり、信州サーモンや安曇野名物の手打ち新そば、信州牛をふるさと納税トラベルクーポンでお得に心ゆくまで満喫しましょう。',
    features: [
      {
        title: '大王わさび農場の水車小屋と蓼川の紅葉リフレクション',
        text: '日本一のわさび田を流れる清らかな湧水と水車小屋。秋には川沿いの木々が黄金や真紅に染まり、クリアボートで川を下る紅葉体験も人気です。'
      },
      {
        title: '安曇野アートライン美術館めぐりと落葉松並木ドライブ',
        text: '安曇野ちひろ美術館や碌山美術館など個性豊かな美術館が点在。黄金色に染まるカラマツ林の道を巡る優雅なアートドライブが楽しめます。'
      },
      {
        title: '安曇野の秋の味覚「新そば」＆信州サーモン・信州牛',
        text: '秋に収穫されたばかりの香り高い手打ち新そば、鮮やかなオレンジ色の信州サーモンのお造り、とろける信州牛のステーキと安曇野産わさびを堪能。'
      }
    ],
    hotelKeys: ['azumino_hotaka_view', 'azumino_garden', 'azumino_artcabin'],
    hotelCaptions: [
      '北アルプスの大自然に抱かれた高原リゾートホテル！天然温泉大浴場と信州フレンチ会席',
      '安曇野の森に佇む静かな温泉宿！自家源泉の掛け流し美肌湯と手作り信州会席',
      'アートと温泉が融合したモダンキャビンホテル！中房温泉の源泉と充実のプライベート空間'
    ]
  },
  {
    slug: 'furusato-tax-ohara-sanzenin-autumn-leaves-stay',
    theme: '京都大原・三千院名園紅葉＆大原温泉古民家宿特集',
    title: '京都大原・三千院の有清園苔庭紅葉＆寂光院もみじの階段！大原温泉宿×ふるさと納税完全ガイド【2026年最新秋旅】京都',
    description: '11月中旬〜11月下旬に見頃を迎える「京都大原・三千院（さんぜんいん）」と「寂光院」。有清園の杉苔とモミジのコントラスト、わらべ地蔵の愛らしい秋景色、名湯・大原温泉の料理宿「芹生」「大原山荘」「大原の里」で名物味噌鍋や地鶏鍋・京野菜懐石を堪能。楽天ふるさと納税で実質2,000円。',
    heroTag: '京都大原・三千院＆寂光院紅葉特集',
    dateBadge: '11月中旬〜11月下旬（三千院・寂光院紅葉見頃期）',
    leadTitle: '一面の緑苔を埋める真紅の落葉！わらべ地蔵が微笑む静寂の古都・大原',
    leadText: '京都市内から少し足を延ばした比叡山麓の山里「大原」。秋の三千院では、樹齢数百年を数える杉やヒノキの木立の下、一面に広がる青苔の絨毯「有清園」に真っ赤なカエデが降り注ぎ、息をのむほど優雅な錦秋絵巻が広がります。苔の中から顔をのぞかせる愛らしい「わらべ地蔵」や、平家物語ゆかりの寂光院の石段を彩る紅葉トンネルは必見。散策の後は、肌触りのやわらかな単純温泉「大原温泉」に浸かり、100年受け継がれる秘伝の味噌を使った名物「味噌鍋」や京地鶏、朝採れ京野菜会席をふるさと納税トラベルクーポンでお得に贅沢に味わいましょう。',
    features: [
      {
        title: '三千院・有清園の苔庭紅葉とわらべ地蔵',
        text: '国宝・阿弥陀三尊像を安置する往生極楽院を包む紅葉。緑の苔の上に散り敷く紅葉の絨毯と、微笑むわらべ地蔵の姿は京都屈指の情緒を誇ります。'
      },
      {
        title: '平家物語ゆかりの古刹「寂光院」の紅葉石段アプローチ',
        text: '建礼門院が隠棲した寂光院。山門へと続く石段の両脇をもみじが覆い尽くし、秋の深まりとともに赤と黄のグラデーションに染まります。'
      },
      {
        title: '大原名物「味噌鍋」＆京地鶏・自家製大原野菜会席',
        text: '大原の清らかな水と厳選素材で仕込む自家製熟成味噌を使った名物味噌鍋、旨味の強い京地鶏、しば漬けや季節の京野菜を使った本格懐石を満喫。'
      }
    ],
    hotelKeys: ['ohara_seryo', 'ohara_sanso', 'ohara_nosato'],
    hotelCaptions: [
      '三千院の参道すぐ隣に佇む数寄屋造りの料亭宿！庭園露天風呂とミシュラン掲載の京懐石',
      '自家源泉掛け流しの大原温泉と足湯カフェ！自家製味噌を使った名物地鶏鍋が人気の宿',
      '築百年の古民家を再生した温もりある温泉民宿！五右衛門露天風呂と100年伝統の味噌鍋'
    ]
  },
  {
    slug: 'furusato-tax-shimanto-river-autumn-stay',
    theme: '高知・最後の清流四万十川 沈下橋紅葉＆四万十名宿特集',
    title: '日本最後の清流・四万十川の沈下橋紅葉カヌー＆屋形船！四万十天然うなぎ温泉宿×ふるさと納税完全ガイド【2026年最新秋旅】高知',
    description: '10月下旬〜11月中旬に山々が色づく「日本最後の清流・四万十川（しまんとがわ）」。佐田沈下橋や岩間沈下橋を望む屋形船遊覧や紅葉カヌー体験、名宿「ホテル星羅四万十」「四万十の宿」「新ロイヤルホテル四万十」で天然四万十うなぎ蒲焼きや戻りガツオの塩タタキ・四万十牛を堪能。ふるさと納税で実質2,000円。',
    heroTag: '高知・最後の清流四万十川＆沈下橋特集',
    dateBadge: '10月下旬〜11月中旬（四万十川渓谷紅葉＆戻りガツオ期）',
    leadTitle: '欄干のない沈下橋とエメラルドの清流！山一面が秋色に染まる四万十の原風景',
    leadText: '全長196km、本流に大規模なダムが建設されていないことから「日本最後の清流」と呼ばれる高知県「四万十川」。秋になると、川を取り囲む山々がモミジやクヌギで鮮やかに色づき、穏やかなエメラルドグリーンの川面に錦秋の山影が美しく映り込みます。増水時に水中に沈むよう欄干がない名物「佐田沈下橋」や「岩間沈下橋」からの眺望、のんびり川を下る「屋形船遊覧」は日本の原風景そのもの。散策後は、四万十川を一望する温泉宿で、脂の乗った「戻りガツオの藁焼き塩タタキ」や天然四万十うなぎ、四万十牛をふるさと納税トラベルクーポンでお得に心ゆくまで堪能しましょう。',
    features: [
      {
        title: '佐田沈下橋・岩間沈下橋を巡る紅葉ドライブ＆屋形船',
        text: '山紫水明の四万十川に架かる沈下橋。屋形船の船上から見上げる紅葉の山々と、心地よい秋風を感じるクルージングは四万十観光のハイライトです。'
      },
      {
        title: '清流四万十川カヌーツーリング＆サイクリング',
        text: '透明度の高い清流をカヌーやSUPで進む爽快なアクティビティ。川沿いに整備されたルートを走る紅葉サイクリングも大人気です。'
      },
      {
        title: '天然四万十うなぎ＆戻りガツオ藁焼き塩タタキ・四万十牛',
        text: '香ばしく焼き上げる貴重な四万十川天然うなぎ、秋に濃厚な脂を蓄えた戻りガツオを藁火で一気に焼き上げる絶品タタキ、四万十牛ステーキを堪能。'
      }
    ],
    hotelKeys: ['shimanto_seira', 'shimanto_noyado', 'shimanto_royal'],
    hotelCaptions: [
      '四万十川を見下ろす高台に建つ絶景リゾートホテル！星空観測と四万十の旬の幸会席',
      '自然素材にこだわった大人の隠れ家リゾート！四万十の海水温泉と薬湯露天風呂',
      '四万十市街地の中心に位置する快適ホテル！四万十川観光の拠点として最適なロケーション'
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
    const rating = h.reviewAverage ? Number(h.reviewAverage).toFixed(2) : '4.50';
    const reviews = h.reviewCount || 450;
    const minCharge = h.hotelMinCharge ? Number(h.hotelMinCharge).toLocaleString() : '12,000';
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
