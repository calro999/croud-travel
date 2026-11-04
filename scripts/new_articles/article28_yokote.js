// scripts/new_articles/article28_yokote.js
module.exports = function buildArticle28(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-akita-yokote-kamakura-snow-festival-yuzawa-onsen-hotels-guide";
  const title = "【秋田・横手/湯沢】横手の雪まつり「かまくら2027」＆泥湯・秋ノ宮温泉郷完全攻略！450年の水神様雪夜景と元祖横手やきそば・比内地鶏きりたんぽ鍋を愉しむ雪国名宿5選";
  const description = "約450年の伝統を誇るみちのく五大雪まつりの筆頭「横手の雪まつり・かまくら」。雪洞の中に灯るロウソクと水神様を祀る子供たちの歓声、蛇の崎川原を埋め尽くす数千個のミニかまくらが創る幻想夜景を徹底解説。秘湯・泥湯温泉の白濁硫黄泉や県内最古の秋ノ宮温泉郷、本場の横手やきそばや比内地鶏出汁のセリ根入りきりたんぽ鍋を堪能できる厳選名宿5選を完全網羅。";
  const date = "2026-11-04";
  const prefecture = "秋田県";
  const area = "横手・湯沢・秋ノ宮";

  const hInazumi = hotels.find(h => h.hotelNo === 176789) || hotels[0];
  const hAnnex = hotels.find(h => h.hotelNo === 55778) || hotels[1];
  const hPlaza = hotels.find(h => h.hotelNo === 8538) || hotels[2];
  const hYuzawa = hotels.find(h => h.hotelNo === 11264) || hotels[3];
  const hOkuyama = hotels.find(h => h.hotelNo === 141266) || hotels[4];

  const wKamakura = wiki["かまくら"] || {};
  const wYokoteCastle = wiki["横手城"] || {};
  const wYuzawa = wiki["湯沢市"] || {};
  const wAkinomiya = wiki["秋の宮温泉郷"] || {};

  const reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-blue-800/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-blue-300 font-extrabold text-xs tracking-wider">
      <span>🏮</span><span>2026-2027冬 横手の雪まつり「かまくら」＆秋田南部の秘湯 最新現地ガイド</span>
    </div>
    <p class="text-xs text-blue-100 leading-relaxed">
      450年受け継がれる水神様の雪夜景！蛇の崎川原のミニかまくら、元祖横手やきそば、そして奥羽山脈の白濁秘湯に浸かる至高の雪国ステイ。
    </p>
  </div>
  <a href="${hInazumi.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-blue-400 hover:bg-blue-300 text-stone-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    ♨️ 秋ノ宮温泉郷・稲住温泉の空室を見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 mb-4">
  白銀の雪洞に灯るロウソクの祈り！450年の温もり「横手のかまくら」
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  奥羽山脈と出羽丘陵に挟まれた豪雪地帯、秋田県横手盆地。毎年厳冬の2月15日・16日、そして1月からのプレ開催期間を含め、街全体が純白の雪のアートギャラリーへと姿を変えるのが、約450年の歴史を誇る伝統行事「横手の雪まつり・かまくら」です。もともとは左義長（小正月行事）と水神様を祀る信仰が融合した民俗行事で、高さ約3メートル、直径約3.5メートルの巨大な雪のドーム（かまくら）が市内に約80基設置されます。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  夕暮れ時を迎えると、かまくらの内部に掘られた神棚にロウソクが灯り、地元の子供たちが「はいってたんせ（お入りください）」「拝んでたんせ（水神様を拝んでください）」と可愛らしい秋田弁で旅人を迎え入れます。雪洞の中に一歩足を踏み入れると、外の厳しい吹雪が嘘のように無風で暖かく、炭火の火鉢で焼いた香ばしい角餅や甘酒が振る舞われます。人と人との温かい心の触れ合いこそが、横手のかまくらが世界中から愛される最大の理由です。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  さらに見逃せないのが、蛇の崎川原（じゃのさきかわら）と横手南小学校の校庭に作られる無数の「ミニかまくら」。夕闇に包まれた川原一面に約2,000個もの小さな雪灯籠が広がり、揺らめく無数の炎が白銀の雪原を黄金色に染め上げる光景は、息を呑むほどの幻想美を誇ります。夜の散策を楽しんだ後は、県内最古の歴史を誇る秋ノ宮温泉郷や奥羽山脈の秘境・泥湯温泉の濃厚な硫黄泉に浸かり、比内地鶏の出汁が効いた名物のセリ根入りきりたんぽ鍋や、目玉焼きと福神漬けが乗ったB-1グランプリ王者の「横手やきそば」を味わう――これぞ雪国東北の旅の極みです。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-6">
  🏮 「横手のかまくら」鑑賞の極意＆豪雪地帯の防寒・交通完全攻略
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-blue-100 text-blue-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">必見スポット＆ミニかまくらの点灯時間</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>蛇の崎川原のミニかまくら:</strong> 蛇の崎橋の上から見下ろす約2,000個の雪灯籠。川面に映るロウソクの明かりと雪のコントラストは横手で最も美しい撮影スポットです（点灯は17:00〜21:00頃）。</p>
      <p>② <strong>横手城（横手公園）のかまくら:</strong> 天守閣を背景に巨大なかまくらがライトアップされ、武家屋敷の雪景色とともに歴史ロマンあふれる情景が広がります。</p>
      <p>③ <strong>ふれあいセンターかまくら館:</strong> マイナス10度に保たれた体験室に本物の雪で作られたかまくらが通年展示されており、祭り期間外や日中でも本物のかまくら体験が可能です。</p>
      <p>④ <strong>羽黒町武家屋敷通りの風情:</strong> 黒板塀が続く古い町並みに佇むかまくら。昔ながらの小正月の情緒が色濃く残り、静かに散策したい方に最適です。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-indigo-100 text-indigo-800 font-extrabold text-xs rounded-lg">防寒・交通戦略</span>
      <h3 class="text-base font-bold text-stone-900">豪雪の歩き方と巡回バスの活用法</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【無料巡回バスをフル活用】</strong> まつり期間中は、横手駅前、市役所本庁舎前、横手公園（横手城）、蛇の崎川原を結ぶ「かまくら巡回バス」が頻発運行されます。雪道を歩く体力を大幅に節約できます。</p>
      <p><strong>【足元の完全防水・防寒装備】</strong> 横手の積雪は1メートルを超えることも珍しくありません。踏み固められた雪道はツルツルに滑るため、スパイク付きのスノーブーツや長靴が必須です。靴下は二重履き、足用カイロの装着を推奨します。</p>
      <p><strong>【手袋・耳当て・フード付き防寒具】</strong> 氷点下5度近くまで冷え込む夜間に長時間屋外を散策するため、耳まで隠れるニット帽、フード付きの防風ダウンジャケット、厚手の防水手袋を用意してください。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-8">
  🏨 横手の雪夜景と奥羽山脈の名湯を堪能！厳選温泉宿・ホテル5選
</h2>

<!-- 宿1: 秋の宮温泉郷 湯けむりの宿 稲住温泉 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-blue-100 text-blue-900 font-black text-xs rounded-full">武者小路実篤ら文人が愛した秋田県最古の名湯・共立リゾートの至高の離れ宿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 秋の宮温泉郷 湯けむりの宿 稲住温泉（秋田県湯沢市秋ノ宮）</h3>
    </div>
    <span class="px-3 py-1.5 bg-blue-50 border border-blue-300 text-blue-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hInazumi.reviewAverage}（${hInazumi.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hInazumi.hotelImageUrl}" alt="${hInazumi.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hInazumi.roomImageUrl || hInazumi.hotelImageUrl}" alt="${hInazumi.hotelName} 客室露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 開湯1200年、秋田県内最古の温泉地とされる秋の宮温泉郷に佇む名旅館。広大な敷地に広がる日本庭園と、数寄屋造りの離れや自家源泉掛け流しの客室露天風呂が調和した、静寂と贅沢を極めた大人のリゾートです。
      </p>
      <p>
        <strong>【自家源泉掛け流しと貸切露天風呂】</strong> 荒湯川のせせらぎを眼下に望む大浴場や露天風呂、そして趣の異なる4つの貸切風呂（無料）を完備。湯量豊富な弱アルカリ性単純温泉が絶え間なく注がれ、雪見露天の情緒を独占できます。
      </p>
      <p>
        <strong>【秋田の美味を尽くした会席料理】</strong> 夕食は秋田錦牛のサーロインステーキ、比内地鶏の滋味あふれる鍋仕立て、三陸や日本海の旬魚を取り入れた華やかな和食会席。共立リゾート名物の夜鳴きそばサービスや、湯上がり処でのアイス・乳酸菌飲料の振る舞いも嬉しいポイントです。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hInazumi.hotelMinCharge || 14850).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hInazumi.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-blue-700 hover:bg-blue-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: ホテルプラザアネックス横手 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-indigo-100 text-indigo-900 font-black text-xs rounded-full">JR横手駅西口徒歩30秒・天然温泉＆本格展望サウナ・岩盤浴完備</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. ホテルプラザアネックス横手（秋田県横手市駅前町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-indigo-50 border border-indigo-300 text-indigo-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hAnnex.reviewAverage}（${hAnnex.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hAnnex.hotelImageUrl}" alt="${hAnnex.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hAnnex.roomImageUrl || hAnnex.hotelImageUrl}" alt="${hAnnex.hotelName} 温泉大浴場" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> JR横手駅西口から徒歩わずか30秒という抜群の立地。駅前発着のかまくら巡回バスに乗るにも最も便利なロケーションで、冬の雪道移動の負担を最小限に抑えられます。
      </p>
      <p>
        <strong>【天然温泉「ゆうゆうプラザ」直結】</strong> 宿泊客は隣接する天然温泉施設「ゆうゆうプラザ」の大浴場や本格サウナ、露天風呂を無料で利用可能。さらに館内最上階には展望温泉大浴場やオンドル風岩盤浴も完備されており、かまくら鑑賞で冷え切った身体を徹底的に温められます。
      </p>
      <p>
        <strong>【秋田郷土料理の朝食】</strong> 朝食バイキングでは、地元横手産あきたこまちの炊きたてご飯に、名物いぶりがっこ、ギバサ（アカモク）、比内地鶏の出汁香るきりたんぽ汁などが並び、郷土色豊かな朝の活力をチャージできます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hAnnex.hotelMinCharge || 6620).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hAnnex.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-indigo-700 hover:bg-indigo-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 泥湯温泉 奥山旅館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">開湯1200年の奥羽秘湯・白濁濃厚硫黄泉と雪見天狗風呂</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 泥湯温泉 奥山旅館（秋田県湯沢市高松）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hOkuyama.reviewAverage}（${hOkuyama.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hOkuyama.hotelImageUrl}" alt="${hOkuyama.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hOkuyama.roomImageUrl || hOkuyama.hotelImageUrl}" alt="${hOkuyama.hotelName} 雪見露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 湯沢市街から奥羽山脈の奥深くへと分け入った山あいに湧く「泥湯温泉」。湯けむりがもうもうと立ち込める集落に佇む奥山旅館は、秘湯ファンが一度は訪れたいと憧れる日本屈指の山の湯宿です。
      </p>
      <p>
        <strong>【3つの異なる源泉と濃厚白濁湯】</strong> 敷地内から自噴する酸性・含硫黄の濃厚な白濁湯。露天風呂「天狗の湯」や木造の内湯は、硫黄の香りが強く立ち込め、湯底に沈む湯の花を手ですくえるほど濃厚。雪景色の中で浸かる露天風呂は言葉を失うほどの風情があります。
      </p>
      <p>
        <strong>【山菜と川魚の囲炉裏風炭火料理】</strong> 食事は地元で採れたぜんまい・わらび・ミズなどの山菜料理や、清流で育った岩魚の炭火塩焼き、地元産の秋田牛を陶板で焼き上げる素朴ながら贅沢な郷土膳。都会の喧騒を完全に遮断した山里の贅沢を味わえます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hOkuyama.hotelMinCharge || 20900).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hOkuyama.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 横手プラザホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-sky-100 text-sky-900 font-black text-xs rounded-full">横手駅東口徒歩30秒・コスパ抜群のまつり観光拠点</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 横手プラザホテル（秋田県横手市駅前町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-sky-50 border border-sky-300 text-sky-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hPlaza.reviewAverage}（${hPlaza.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hPlaza.hotelImageUrl}" alt="${hPlaza.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hPlaza.roomImageUrl || hPlaza.hotelImageUrl}" alt="${hPlaza.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> JR横手駅東口を出てすぐの好立地。リーズナブルな宿泊料金と清潔な客室で、ビジネスから観光の一人旅、カップルまで根強い人気を集めています。
      </p>
      <p>
        <strong>【プラザグループの温泉利用可能】</strong> 宿泊者は別館「ゆうゆうプラザ」の天然温泉大浴場を割引・無料提携価格で利用可能。機能的なシティホテルの利便性と天然温泉の寛ぎを両立できます。
      </p>
      <p>
        <strong>【かまくらグルメの拠点】</strong> 駅前エリアには横手やきそばの名店や居酒屋が集結しており、夕食は夜のかまくら散策がてら地元の銘酒「まんさくの花」「天の戸」とともに名物料理の梯子酒を楽しむのに絶好のロケーションです。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hPlaza.hotelMinCharge || 5200).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hPlaza.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-sky-700 hover:bg-sky-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 湯沢ロイヤルホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">小野小町生誕の地・稲庭うどん＆みなせ牛が自慢のシティホテル</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 湯沢ロイヤルホテル（秋田県湯沢市田町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hYuzawa.reviewAverage}（${hYuzawa.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hYuzawa.hotelImageUrl}" alt="${hYuzawa.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hYuzawa.roomImageUrl || hYuzawa.hotelImageUrl}" alt="${hYuzawa.hotelName} レストラン" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> JR湯沢駅から徒歩約7分、日本三大うどん「稲庭うどん」の本場・湯沢市街の中心に位置する落ち着いたシティホテル。横手駅までもJR奥羽本線で約15分と好アクセスです。
      </p>
      <p>
        <strong>【地元ブランド牛「みなせ牛」の美食】</strong> 館内レストランでは、栗駒山麓で手塩にかけて育てられた幻の黒毛和牛「みなせ牛」のステーキやハンバーグを提供。つるりとした喉越しが自慢の本場・稲庭うどんとともに舌を唸らせます。
      </p>
      <p>
        <strong>【清潔でゆとりある客室】</strong> 広めのベッドと機能的なデスクを備え、雪まつり鑑賞後のリラックスタイムを快適にサポート。全館無料Wi-Fiや充実のアメニティが揃っています。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hYuzawa.hotelMinCharge || 8200).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hYuzawa.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="sightseeing" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6 leading-relaxed">
  かまくら祭りとともに巡りたい、横手・湯沢エリアの代表的な名所・歴史遺産をWikipedia公式解説とともにご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-blue-700 font-bold text-sm">📍 かまくら（秋田県横手市の民俗行事）</span>
    </div>
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wKamakura.extract || '雪を固めて部屋をくり抜いた雪洞。横手市では水神様を祀る伝統的な小正月の行事として行われ、子供たちが甘酒や餅を振る舞う情緒ある風物詩です。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-blue-700 font-bold text-sm">📍 横手城（横手公園展望台）</span>
    </div>
    ${wYokoteCastle.thumbnail ? `<img src="${wYokoteCastle.thumbnail}" alt="${wYokoteCastle.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wYokoteCastle.extract || '戦国時代の小野寺氏の居城跡。現在は模擬天守が建てられ、展望台からは横手盆地と鳥海山、雪景色の城下町を一望できます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-blue-700 font-bold text-sm">📍 湯沢市（小野小町の伝承と酒蔵の街）</span>
    </div>
    ${wYuzawa.thumbnail ? `<img src="${wYuzawa.thumbnail}" alt="${wYuzawa.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wYuzawa.extract || '平安時代の絶世の美女・小野小町誕生の地と伝えられる街。「美酒爛漫」「両関」などの蔵元が並ぶ酒どころであり、伝統の稲庭うどんの発祥地でもあります。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-blue-700 font-bold text-sm">📍 秋ノ宮温泉郷（あきのみやおんせんきょう）</span>
    </div>
    ${wAkinomiya.thumbnail ? `<img src="${wAkinomiya.thumbnail}" alt="${wAkinomiya.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wAkinomiya.extract || '役小角の発見とも伝えられる秋田県最古の温泉地。川原を掘ると温泉が湧き出す「川原の湯っこ」でも知られ、山あいの素朴な名湯として親しまれています。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-8">
  🗺️ かまくら雪夜景と秘湯巡り 1泊2日冬モデルコース
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-blue-700 text-white rounded text-xs">1日目</span>
      横手やきそばランチから感動のミニかまくら夜景へ
    </h3>
    <p class="leading-relaxed">
      11:30 JR横手駅到着 ➔ 駅前の名店で目玉焼きと福神漬けが乗った「元祖横手やきそば」ランチ ➔ 13:00「ふれあいセンターかまくら館」で雪の部屋体験 ➔ 14:30 宿チェックイン、温泉で体を温めて防寒着を着込む ➔ 16:30 巡回バスで蛇の崎川原へ ➔ 17:00 ミニかまくら点灯・2,000個の雪灯籠鑑賞 ➔ 横手城へ移動しかまくらと天守閣の共演を撮影 ➔ 19:30 宿へ戻り、熱々の比内地鶏きりたんぽ鍋と秋田の銘酒（まんさくの花・雪の茅舎）を堪能 ➔ 雪見露天風呂で温まる。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-blue-700 text-white rounded text-xs">2日目</span>
      湯沢の酒蔵散策と本場稲庭うどん
    </h3>
    <p class="leading-relaxed">
      08:30 宿の和朝食（あきたこまちといぶりがっこ） ➔ 09:30 奥羽本線で湯沢駅へ移動 ➔ 10:00 湯沢市街地の歴史ある酒蔵（両関酒造・爛漫）見学と試飲 ➔ 12:00 総本店で本場の手綯い「稲庭うどん」の喉越しを味わう ➔ 14:00 川原毛地獄周辺の湯けむり景観を見学 ➔ 16:00 秋田新幹線（大曲経由）にて帰路へ。
    </p>
  </div>
</div>

<h2 id="comparison-table" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-8">
  📊 横手・湯沢・秋ノ宮 厳選5宿のスペック比較一覧
</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
      <tr>
        <th class="p-3">宿名</th>
        <th class="p-3">エリア</th>
        <th class="p-3">楽天評価</th>
        <th class="p-3">宿泊目安(1名)</th>
        <th class="p-3">温泉・風呂特徴</th>
        <th class="p-3">食事の看板メニュー</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-100 text-stone-700">
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">稲住温泉</td>
        <td class="p-3">秋ノ宮温泉郷</td>
        <td class="p-3 font-bold text-blue-700">★ ${hInazumi.reviewAverage}</td>
        <td class="p-3">¥${(hInazumi.hotelMinCharge || 14850).toLocaleString()}〜</td>
        <td class="p-3">秋田最古の湯・4つの無料貸切露天</td>
        <td class="p-3">秋田錦牛ステーキ＆比内地鶏鍋</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">プラザアネックス横手</td>
        <td class="p-3">横手駅西口</td>
        <td class="p-3 font-bold text-blue-700">★ ${hAnnex.reviewAverage}</td>
        <td class="p-3">¥${(hAnnex.hotelMinCharge || 6620).toLocaleString()}〜</td>
        <td class="p-3">天然温泉ゆうゆうプラザ直結・岩盤浴</td>
        <td class="p-3">あきたこまち・郷土バイキング</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">泥湯温泉 奥山旅館</td>
        <td class="p-3">湯沢市高松</td>
        <td class="p-3 font-bold text-blue-700">★ ${hOkuyama.reviewAverage}</td>
        <td class="p-3">¥${(hOkuyama.hotelMinCharge || 20900).toLocaleString()}〜</td>
        <td class="p-3">開湯1200年の濃厚白濁硫黄泉・天狗風呂</td>
        <td class="p-3">山菜と岩魚炭火焼き・秋田牛陶板焼</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">横手プラザホテル</td>
        <td class="p-3">横手駅東口</td>
        <td class="p-3 font-bold text-blue-700">★ ${hPlaza.reviewAverage}</td>
        <td class="p-3">¥${(hPlaza.hotelMinCharge || 5200).toLocaleString()}〜</td>
        <td class="p-3">提携天然温泉利用可・駅徒歩30秒</td>
        <td class="p-3">周辺の横手やきそば店街へ徒歩すぐ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">湯沢ロイヤルホテル</td>
        <td class="p-3">湯沢駅前</td>
        <td class="p-3 font-bold text-blue-700">★ ${hYuzawa.reviewAverage}</td>
        <td class="p-3">¥${(hYuzawa.hotelMinCharge || 8200).toLocaleString()}〜</td>
        <td class="p-3">機能的で快適なシティホテル客室</td>
        <td class="p-3">ブランド牛「みなせ牛」＆稲庭うどん</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>

<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q1. 横手の雪まつり「かまくら」の開催期間と点灯時間はいつですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 本祭りは毎年2月15日・16日の2日間に開催されます（18:00〜21:00）。また、1月下旬から2月上旬にかけても横手市役所本庁舎前などで先行してかまくらが作られ、ふれあいセンターかまくら館では通年で本物の雪のかまくらに入ることができます。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q2. かまくらの中に入るときのお作法やマナーはありますか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 子供たちから「はいってたんせ」と声をかけられたら、笑顔で挨拶して入りましょう。正面に水神様のお札が祀られているので、小銭（10円〜100円程度）をお賽銭としてあげて手を合わせ、甘酒やお餅をいただきます。子供たちへのお礼の言葉を忘れずに伝えるのが温かいマナーです。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q3. 車で行く場合、スタッドレスタイヤだけで大丈夫ですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 横手・湯沢は全国屈指の豪雪地帯です。4WD車＋高性能スタッドレスタイヤが強く推奨されます。特に泥湯温泉や秋ノ宮温泉郷などの山間部へ向かう場合は、突然の猛吹雪（ホワイトアウト）や深雪によるスタックに備え、スノーブラシ、脱出用スコップ、牽引ロープを車内に備行してください。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q4. 新幹線と在来線のアクセスルートは？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 東京方面からは秋田新幹線「こまち」で大曲駅まで行き、JR奥羽本線に乗り換えて横手駅まで約18分です。また、山形新幹線「つばさ」の新庄駅から奥羽本線で北上するルートも風情がありおすすめです。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-100 border border-stone-200 text-center space-y-3">
  <h3 class="text-base font-bold text-stone-900">秋田・東北エリアの温泉＆雪旅特集も合わせてチェック！</h3>
  <ul class="text-xs text-stone-600 space-y-1.5 inline-block text-left">
    <li>👉 <a href="/akita-solo-business-kiritanpo-onsen-stay/" class="text-blue-800 hover:text-blue-600 underline">秋田のきりたんぽ鍋と名湯温泉を満喫する人気宿ガイド</a></li>
    <li>👉 <a href="/hachimantai-tamagawa-goshogake-yuzawa-hotels-guide/" class="text-blue-800 hover:text-blue-600 underline">八幡平・玉川・後生掛・湯沢の秘湯巡り温泉宿特集</a></li>
    <li>👉 <a href="/akita/" class="text-blue-800 hover:text-blue-600 underline">秋田県の宿・名湯・旬の観光特集一覧</a></li>
  </ul>
</div>
`;

  const postData = {
    id: slug,
    slug: slug,
    title: title,
    description: description,
    prefecture: prefecture,
    area: area,
    image: hInazumi.hotelImageUrl,
    other_images: [
      hAnnex.hotelImageUrl,
      hOkuyama.hotelImageUrl,
      hPlaza.hotelImageUrl,
      hYuzawa.hotelImageUrl
    ],
    hotel_name: `${hInazumi.hotelName}・${hAnnex.hotelName} ほか`,
    affiliate_url: hInazumi.affiliateUrl,
    categories: ["冬のイベント特集", "雪まつり", "横手のかまくら", "秋ノ宮温泉郷", "泥湯温泉", "横手やきそば"],
    price: `¥${(hPlaza.hotelMinCharge || 5200).toLocaleString()}〜`,
    rating: hInazumi.reviewAverage || 4.69,
    review_count: hAnnex.reviewCount || 1200,
    date: date,
    is_special_feature: true,
    keywords: [
      "横手の雪まつり かまくら 2027 日程 点灯時間",
      "横手 かまくら ホテル おすすめ",
      "秋の宮温泉郷 稲住温泉 宿泊記",
      "泥湯温泉 奥山旅館 口コミ 雪見露天",
      "ホテルプラザアネックス横手 ゆうゆうプラザ",
      "横手やきそば 元祖 名店"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["横手のかまくら", "横手の雪まつり", "稲住温泉", "泥湯温泉", "横手やきそば", "きりたんぽ鍋", "冬の秋田旅行"]
---

# ${title}

約450年の伝統を誇るみちのく五大雪まつりの筆頭「横手の雪まつり・かまくら」。

雪洞の中に灯るロウソクと水神様を祀る子供たちの歓声、蛇の崎川原を埋め尽くす数千個のミニかまくらが創る幻想夜景を徹底解説。

秘湯・泥湯温泉の白濁硫黄泉や県内最古の秋ノ宮温泉郷、本場の横手やきそばや比内地鶏出汁のセリ根入りきりたんぽ鍋を堪能できる厳選名宿5選を完全網羅します。

---

## 🏮 「横手のかまくら」鑑賞の極意＆豪雪地帯の防寒・交通完全攻略

- **蛇の崎川原のミニかまくら:** 約2,000個の雪灯籠が川原一面に広がる横手屈指の幻想美（点灯17:00〜21:00）。
- **無料巡回バスの活用:** 横手駅前、市役所、横手城、蛇の崎川原を結ぶシャトルバスで豪雪の移動もスムーズ。
- **足元の完全防寒:** 踏み固められた雪道は非常に滑りやすいため、防水スノーブーツと二重靴下＋足用カイロが必須。
- **かまくらの温かいおもてなし:** 子供たちの「はいってたんせ」の声に迎えられ、水神様を拝んで味わう甘酒とお餅の温もり。

---

## 🏨 横手の雪夜景と奥羽山脈の名湯を堪能！厳選温泉宿・ホテル5選

### 1. 秋の宮温泉郷 湯けむりの宿 稲住温泉（秋田県湯沢市秋ノ宮）
- **特徴:** 秋田県最古の開湯1200年。武者小路実篤が愛した名湯。4つの無料貸切露天風呂と客室露天風呂、秋田錦牛会席が至高。
- **宿泊目安:** 1名 ¥${(hInazumi.hotelMinCharge || 14850).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hInazumi.reviewAverage}（${hInazumi.reviewCount}件）
- 👉 [稲住温泉の空室・宿泊プランを見る](${hInazumi.affiliateUrl})

### 2. ホテルプラザアネックス横手（秋田県横手市駅前町）
- **特徴:** JR横手駅西口徒歩30秒。天然温泉大浴場・サウナ・岩盤浴完備。かまくら巡回バス発着点で雪道移動の負担なし。
- **宿泊目安:** 1名 ¥${(hAnnex.hotelMinCharge || 6620).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hAnnex.reviewAverage}（${hAnnex.reviewCount}件）
- 👉 [ホテルプラザアネックス横手の空室・宿泊プランを見る](${hAnnex.affiliateUrl})

### 3. 泥湯温泉 奥山旅館（秋田県湯沢市高松）
- **特徴:** 奥羽山脈の山懐に湧く秘湯中の秘湯。自噴する濃厚白濁硫黄泉の雪見露天風呂と、岩魚炭火焼き・山菜郷土膳。
- **宿泊目安:** 1名 ¥${(hOkuyama.hotelMinCharge || 20900).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hOkuyama.reviewAverage}（${hOkuyama.reviewCount}件）
- 👉 [泥湯温泉 奥山旅館の空室・宿泊プランを見る](${hOkuyama.affiliateUrl})

### 4. 横手プラザホテル（秋田県横手市駅前町）
- **特徴:** 横手駅東口徒歩30秒。抜群のコストパフォーマンス。提携天然温泉利用可能。横手やきそば食べ歩きの拠点に最適。
- **宿泊目安:** 1名 ¥${(hPlaza.hotelMinCharge || 5200).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hPlaza.reviewAverage}（${hPlaza.reviewCount}件）
- 👉 [横手プラザホテルの空室・宿泊プランを見る](${hPlaza.affiliateUrl})

### 5. 湯沢ロイヤルホテル（秋田県湯沢市田町）
- **特徴:** 稲庭うどんの本場・湯沢市街の落ち着いたホテル。地元ブランド「みなせ牛」のステーキと本場の稲庭うどんが絶品。
- **宿泊目安:** 1名 ¥${(hYuzawa.hotelMinCharge || 8200).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hYuzawa.reviewAverage}（${hYuzawa.reviewCount}件）
- 👉 [湯沢ロイヤルホテルの空室・宿泊プランを見る](${hYuzawa.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **かまくら:** ${wKamakura.extract || '雪を固めて部屋をくり抜いた雪洞。水神様を祀る伝統的な小正月の行事。'}
- **横手城:** ${wYokoteCastle.extract || '戦国時代の居城跡。模擬天守展望台から横手盆地と鳥海山を一望。'}
- **湯沢市:** ${wYuzawa.extract || '小野小町誕生の地と伝えられる酒どころ。稲庭うどんの発祥地。'}
- **秋ノ宮温泉郷:** ${wAkinomiya.extract || '秋田県最古の温泉地。山あいの素朴な名湯として親しまれています。'}

---

## 🗺️ かまくら雪夜景と秘湯巡り 1泊2日モデルコース

- **1日目:** 横手駅到着 ➔ 横手やきそばランチ ➔ かまくら館見学 ➔ 宿チェックイン ➔ 蛇の崎川原のミニかまくら点灯鑑賞 ➔ 横手城ライトアップ ➔ 宿できりたんぽ鍋と秋田地酒 ➔ 雪見温泉
- **2日目:** 朝食 ➔ 湯沢へ移動 ➔ 歴史的酒蔵見学 ➔ 本場稲庭うどんランチ ➔ 川原毛地獄見学 ➔ 帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. 横手のかまくら祭りはいつ開催されますか？**  
A. 本祭りは毎年2月15日・16日（18:00〜21:00）に開催されます。1月下旬から市役所前などに先行設置されます。

**Q2. かまくらに入るときのマナーは？**  
A. 「はいってたんせ」の声で入り、水神様にお賽銭（10円〜100円）をあげて手を合わせ、甘酒やお餅をいただきます。

**Q3. 車の雪道運転の注意点は？**  
A. 4WD＋スタッドレス必須です。吹雪時の視界不良や道路凍結に備え、スノーブラシやスコップも携行してください。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【秋田・横手/湯沢】横手の雪まつり「かまくら2027」＆泥湯・秋ノ宮温泉郷完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/${slug}/)
`;

  return { postData, noteMarkdown };
};
