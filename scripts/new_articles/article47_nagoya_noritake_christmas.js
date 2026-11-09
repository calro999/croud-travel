// scripts/new_articles/article47_nagoya_noritake_christmas.js
module.exports = function buildArticle47(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-aichi-nagoya-noritake-christmas-meieki-sakae-hotels-guide";
  const title = "【名古屋】ノリタケの森クリスマスガーデン2026＆名駅・栄イルミネーション完全攻略！高さ14mの巨大ツリーと赤レンガ洋館・MIRAI TOWERの冬夜景、ひつまぶし・名古屋コーチンと極上ホテル5選";
  const description = "2026年11月中旬〜12月25日開催の「ノリタケの森 クリスマスガーデン」と名駅・栄エリアの冬の光の祭典を徹底解説。赤レンガ建築と豊かな緑が広がるノリタケの森にそびえ立つ高さ約14mの巨大モミの木クリスマスツリー、約4万球の日没後ライトアップ、JRゲートタワー前の巨大クリスマスツリー、中部電力MIRAI TOWERとHisaya-odori Parkの水盤に映る幻想的な冬夜景を網羅。名古屋マリオットアソシアホテルや名古屋JRゲートタワーホテル、ヒルトン名古屋など、高層階パノラマ夜景を誇り、本場の極上ひつまぶしや名古屋コーチン、飛騨牛料理を堪能できる楽天トラベル高評価ホテル5選をご紹介。";
  const date = "2026-11-09";
  const prefecture = "愛知県";
  const area = "名古屋駅・栄・伏見";

  // ホテル抽出
  const hMarriott = hotels.find(h => h.hotelNo === 12543) || hotels[0];
  const hGatetower = hotels.find(h => h.hotelNo === 158556) || hotels[1];
  const hHilton = hotels.find(h => h.hotelNo === 1410) || hotels[2];
  const hKanko = hotels.find(h => h.hotelNo === 2046) || hotels[3];
  const hTiad = hotels.find(h => h.hotelNo === 187470) || hotels[4];

  // Wikiスポット
  const wNoritake = wiki["ノリタケの森"] || {};
  const wNagoyaStation = wiki["名古屋駅"] || {};
  const wMiraiTower = wiki["中部電力 MIRAI TOWER"] || {};
  const wAtsuta = wiki["熱田神宮"] || {};

  const reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-emerald-950 via-teal-950 to-stone-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-emerald-800/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-emerald-300 font-extrabold text-xs tracking-wider">
      <span>🎄</span><span>2026冬 ノリタケの森クリスマスガーデン＆名駅・栄 最新現地滞在ガイド</span>
    </div>
    <p class="text-xs text-emerald-100 leading-relaxed">
      11月中旬〜12月25日開催！赤レンガ洋館に映える14m巨大モミの木ツリーとMIRAI TOWER冬夜景。名古屋マリオット＆本場ひつまぶし極上宿。
    </p>
  </div>
  <a href="${hMarriott.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-stone-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    👑 名古屋マリオットアソシアホテルの空室・宿泊プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 mb-4">
  赤レンガの洋館と14m巨大ツリーが紡ぐおとぎの世界！ノリタケの森と名古屋冬夜景の魅力
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  近代産業の息吹を今に伝える赤レンガ建築と、緑豊かな芝生広場が広がる名古屋市西区の「ノリタケの森」。日本が世界に誇る高級洋食器メーカー「ノリタケ」の本社敷地内に位置するこの複合施設で、毎年11月中旬から12月25日まで開催される冬の風物詩が「ノリタケの森 クリスマスガーデン」です。明治時代に建造された重厚な赤レンガ棟を背景に、広場中央には高さ約14メートルもの本物の巨大モミの木クリスマスツリーが誇らしげにそびえ立ちます。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  日没とともに約4万球のイルミネーションが点灯すると、緑豊かな庭園全体が幻想的な光に包まれ、等身大のサンタクロース像が訪れる人々を温かく迎え入れます。ノリタケ食器のミュージアムやショップではクリスマス限定デザインのテーブルウェアやオーナメントが並び、絵付け体験コーナーでは世界に一つだけのオリジナルクリスマスプレート作りも楽しめます。大都会の喧騒から程よく離れた、ヨーロッパの歴史ある町並みを思わせるクラシカルで温もりあるクリスマス風景は、東海エリア随一のフォトジェニックスポットとして多くのカップルや家族連れを魅了しています。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  さらに名古屋の冬は、JR名古屋駅前のタワーズライツやJRゲートタワーの巨大ツリー、栄・久屋大通公園（Hisaya-odori Park）の水盤に美しく映り込む「中部電力 MIRAI TOWER（旧名古屋テレビ塔）」の幻想的なリフレクション夜景など、都市型イルミネーションのハイライトが目白押しです。夜の散策の後は、炭火で香ばしく焼き上げた秘伝ダレの「ひつまぶし」や、濃厚なコクと歯ごたえがたまらない「純系名古屋コーチン鍋」、熱々の「味噌煮込みうどん」など、冬の名古屋ならではの極上なごやめしを満喫。本稿では、ノリタケの森クリスマスガーデンから名駅・栄のイルミネーション攻略法、そして地上200m超のパノラマ夜景を誇る厳選名ホテル5選を余すところなくご紹介します。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-6">
  💡 現地調査に基づくプロの指南！ノリタケの森＆名駅・栄イルミネーション攻略マニュアル
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">点灯時間・ベストアングル＆見どころ</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>ノリタケの森 巨大ツリー点灯（日没〜19:00、園内開園は21:00まで）:</strong> 煙突広場にそびえる高さ14mの巨大ツリー。赤レンガ棟を背景にツリー全体とサンタクロース像を正面から捉えるアングルがベストショット。建物の灯りとモミの木の光が重なり合い、圧倒的な欧風情緒を醸し出します。</p>
      <p>② <strong>JRゲートタワー前の巨大クリスマスツリー（名駅直結）:</strong> JRゲートタワー1階のエントランス前に設置される高さ約12mの巨大ツリーは、名駅の冬のシンボル。天井から吊り下げられた無数の光のカーテンとともに、駅利用者が足を止めて見入る圧巻のスケールです。</p>
      <p>③ <strong>Hisaya-odori Park「ミズベヒロバ」の逆さMIRAI TOWER:</strong> 栄の久屋大通公園にある水盤「ミズベヒロバ」は、ライトアップされた中部電力MIRAI TOWERが水面に鏡のように映り込む絶景スポット。冬の無風の夜、完全に静止した水鏡に映るタワーはSNS映え抜群です。</p>
      <p>④ <strong>オアシス21「水の宇宙船」の空中散歩:</strong> 地上14mのガラスの大屋根「水の宇宙船」からは、栄の夜景とMIRAI TOWERを頭上に見上げる唯一無二のアングルを楽しめます。中央の水盤を流れる水に光が乱反射し、幻想的な光景が広がります。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">交通・防寒テクニック</span>
      <h3 class="text-base font-bold text-stone-900">アクセス術・寒風対策・ショッピング</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【ノリタケの森へのアクセス（徒歩 vs ループロープバス）】</strong> JR名古屋駅ルーセントタワー出口から地下通路経由で北へ徒歩約12分、または地下鉄東山線「亀島駅」2番出口から徒歩約5分。荷物がある場合は名古屋駅バスターミナルからメーグル（なごや観光ルートバス）利用が便利です。隣接するイオンモール Nagoya Noritake Gardenからも直結しています。</p>
      <p><strong>【伊吹颪（いぶきおろし）による冷え込みと防寒対策】</strong> 名古屋の冬は、鈴鹿山脈や伊吹山から吹き下ろす「伊吹颪」と呼ばれる乾燥した冷たい季節風が吹きます。体感温度が急激に下がるため、風を通さないダウンコート、マフラー、手袋、カイロをしっかりと身につけて散策してください。</p>
      <p><strong>【混雑回避とノリタケ食器のお買い物】</strong> ノリタケスクエア名古屋（ショップ）ではクリスマス限定マグカップやギフトセットが人気。土日の16:00〜18:00はレジが混み合うため、点灯前の昼下がりに買い物を済ませておくのがスマートです。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  🏨 旅の目的に応じて選ぶ！名駅・栄の厳選名ホテル5選
</h2>

<!-- 宿1: 名古屋マリオットアソシアホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">JR名古屋駅直結・地上200m超の天空から望む100万ドルのパノラマ夜景と名門の格式</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 名古屋マリオットアソシアホテル（愛知県名古屋市中村区名駅）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.64（13303件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hMarriott.hotelImageUrl}" alt="名古屋マリオットアソシアホテル 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hMarriott.roomImageUrl || hMarriott.hotelImageUrl}" alt="名古屋マリオットアソシアホテル 客室パノラマ夜景" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> JR名古屋駅の真上にそびえ立つJRセントラルタワーズの高層階（20〜49階）に位置する、中部エリアを代表するフラッグシップホテル。新幹線改札からエレベーターで直結し、雨や冬の寒さに一切触れることなくチェックインできます。
      </p>
      <p>
        <strong>【全室地上100m以上のパノラマビュー客室】</strong> すべての客室が高層階に位置し、東側からは名古屋城や栄の観覧車・MIRAI TOWERを、西側からは鈴鹿山脈と名駅の線路夜景を見渡せます。シモンズ社製ベッドと広々とした大理石バスルームが極上の寛ぎを演出します。
      </p>
      <p>
        <strong>【52階スカイラウンジ「ジーニス」と珠玉の朝食ビュッフェ】</strong> 最上階52階の「ジーニス」ではピアノ生演奏とともに名古屋随一の夜景を一望。15階「パーゴラ」での朝食ビュッフェは、名古屋名物のひつまぶしや小倉トースト、きしめんをはじめ、シェフが目の前で作るオムレツなど豪華絢爛なラインナップを誇ります。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥17,500〜（2名1室利用時）</span>
        <a href="${hMarriott.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 名古屋JRゲートタワーホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-teal-100 text-teal-900 font-black text-xs rounded-full">JR名古屋駅直結・ゲートタワー巨大ツリー真上の洗練された上質ナチュラルモダン</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 名古屋ＪＲゲートタワーホテル（愛知県名古屋市中村区名駅）</h3>
    </div>
    <span class="px-3 py-1.5 bg-teal-50 border border-teal-300 text-teal-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.47（2767件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hGatetower.hotelImageUrl}" alt="名古屋JRゲートタワーホテル 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hGatetower.roomImageUrl || hGatetower.hotelImageUrl}" alt="名古屋JRゲートタワーホテル ロビー・客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> JR名古屋駅に直結する「JRゲートタワー」の18〜24階に位置。1階エントランスの巨大クリスマスツリーを横目にエレベーターで15階のフロントロビーへ直行できます。天井高のある開放的な空間と温かみある木目が調和したスタイリッシュなホテルです。
      </p>
      <p>
        <strong>【機能性と心地よさを追求したスマートな客室空間】</strong> 客室は全室禁煙で、天井高約2.8mの広々とした空間。高品質なエアウィーヴ社製マットレスを採用し、快適な睡眠を徹底サポート。トレインビューの客室からは名古屋駅に出入りする新幹線や在来線の光のラインを一望できます。
      </p>
      <p>
        <strong>【東京・青山の人気フレンチ「THE GATEHOUSE」の朝食】</strong> 15階のオールデイダイニング「THE GATEHOUSE」では、予約困難な名店「L’AS」兼子シェフ監修の朝食ビュッフェを提供。名古屋コーチンを使った卵料理や八丁味噌を取り入れた創作料理など、ハイセンスな美食を楽しめます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥12,620〜（2名1室利用時）</span>
        <a href="${hGatetower.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-teal-700 hover:bg-teal-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: ヒルトン名古屋 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-blue-100 text-blue-900 font-black text-xs rounded-full">伏見・栄の中心・伝統のヒルトンクリスマス列車とグローバルラグジュアリー</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. ヒルトン名古屋（愛知県名古屋市中区栄）</h3>
    </div>
    <span class="px-3 py-1.5 bg-blue-50 border border-blue-300 text-blue-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.42（5670件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hHilton.hotelImageUrl}" alt="ヒルトン名古屋 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hHilton.roomImageUrl || hHilton.hotelImageUrl}" alt="ヒルトン名古屋 ロビー・クリスマス装飾" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 名古屋のビジネス・文化の中心である伏見に位置し、名駅と栄の双方へ好アクセス。毎年11月上旬から1階ロビーに登場する冬の風物詩「ヒルトン・クリスマス・トレイン」は、ヨーロッパの冬景色を精巧に再現した巨大ジオラマを模型列車が走り抜ける圧巻の展示です。
      </p>
      <p>
        <strong>【和の美意識を取り入れたモダンなゲストルーム】</strong> 客室には障子や襖をモチーフにした格子スクリーンが配され、落ち着いた和モダンの空間が広がります。高層階のエグゼクティブルーム宿泊者は、専用ラウンジで冬の夜景を眺めながらカナッペやカクテルを自由に楽しめます。
      </p>
      <p>
        <strong>【オールデイダイニング「インプレイス3-3」のクリスマスビュッフェ】</strong> 吹き抜けが印象的なメインダイニングでは、ローストターキーやローストビーフ、クリスマステーマの華やかなデザートビュッフェが開催され、ファミリーやカップルに贅沢なフェスティブシーズンを届けます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥10,320〜（2名1室利用時）</span>
        <a href="${hHilton.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-blue-700 hover:bg-blue-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 名古屋観光ホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">1936年創業「中部の迎賓館」・皇族やVIPをもてなしてきた名門クラシックの真髄</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 名古屋観光ホテル（愛知県名古屋市中区錦）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.54（4564件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKanko.hotelImageUrl}" alt="名古屋観光ホテル 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKanko.roomImageUrl || hKanko.hotelImageUrl}" alt="名古屋観光ホテル ロビー・客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 昭和11年創業。中部エリアで最も古い歴史と伝統を誇るグランドホテル。伏見駅徒歩2分、栄や名駅へもアクセス至便。国内外のVIPや賓客を迎えてきた格式高いホスピタリティと、重厚なクラシックスタイルの空間が至福の安らぎを提供します。
      </p>
      <p>
        <strong>【リニューアルされた気品あふれる客室「エスパシオ」】</strong> 上層階に設えられた特別フロア「エスパシオ」をはじめ、客室はクラシックな気品と現代の快適性が融合。高級ベッドや厳選されたバスアメニティが備わり、大人の冬の記念日旅行に最高の満足度を誇ります。
      </p>
      <p>
        <strong>【伝統のフランス料理「エスコフィエ」と名門バー「プエルト」】</strong> メインダイニング「エスコフィエ」でのクリスマスディナーは、代々の総料理長が受け継いできた正統派フレンチの真骨頂。バー「プエルト」の重厚なカウンターで傾けるカクテルは、旅の夜を優雅に締めくくります。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥8,550〜（2名1室利用時）</span>
        <a href="${hKanko.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: TIAD, AUTOGRAPH COLLECTION -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-purple-100 text-purple-900 font-black text-xs rounded-full">栄・久屋大通公園を一望！全室50㎡以上・インドア温水プールを備えた新世代ラグジュアリー</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. ＴＩＡＤ，　Ａｕｔｏｇｒａｐｈ　Ｃｏｌｌｅｃｔｉｏｎ（マリオットグループ）（愛知県名古屋市中区栄）</h3>
    </div>
    <span class="px-3 py-1.5 bg-purple-50 border border-purple-300 text-purple-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.58（140件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hTiad.hotelImageUrl}" alt="TIAD AUTOGRAPH COLLECTION 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hTiad.roomImageUrl || hTiad.hotelImageUrl}" alt="TIAD AUTOGRAPH COLLECTION インドアプール・客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 地下鉄名城線「矢場町駅」1番出口正面。久屋大通公園の南端に面し、都市にありながら豊かな緑と光を感じられるマリオットの最高峰ブランド「オートグラフ コレクション」。デザイン性とウェルネスが高度に融合した名古屋屈指の新世代ホテルです。
      </p>
      <p>
        <strong>【全室50平米以上の広小空間とプライベートバルコニー】</strong> すべての客室が50平米以上の広さを誇り、久屋大通公園のイルミネーションやMIRAI TOWERの光を望むオープンバルコニーを完備。さらに宿泊者専用のインドアインフィニティプールやウェルネスラウンジで贅沢なひとときを過ごせます。
      </p>
      <p>
        <strong>【メインダイニング「Table For TOMORROW」の薪火料理】</strong> 薪窯で香ばしく焼き上げる厳選牛や愛知県産の旬野菜など、素材本来の旨味を最大限に引き出したコース料理を提供。開放感あふれるテラス席やバーカウンターで、極上のフェスティブナイトを演出します。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥27,324〜（2名1室利用時）</span>
        <a href="${hTiad.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-purple-700 hover:bg-purple-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="sightseeing" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（現地観光案内アーカイブ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6 leading-relaxed">
  ノリタケの森や名駅・栄のイルミネーションとあわせて巡りたい、名古屋を代表する歴史と文化の名所を現地観光案内アーカイブとともにご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-emerald-700 font-bold text-sm">📍 ノリタケの森（Noritake Garden）</span>
    </div>
    <img src="${wNoritake.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/12543/12543.jpg'}" alt="ノリタケの森" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wNoritake.extract || 'ノリタケの森（ノリタケのもり）は、愛知県名古屋市西区則武新町にあるノリタケカンパニーリミテドの本社敷地内にある複合施設。明治時代の赤レンガ建築が残り、冬には高さ14mの巨大モミの木ツリーが輝く「クリスマスガーデン」が開催されます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-emerald-700 font-bold text-sm">📍 名古屋駅（JRセントラルタワーズ・ゲートタワー）</span>
    </div>
    <img src="${wNagoyaStation.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/158556/158556.jpg'}" alt="名古屋駅" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wNagoyaStation.extract || '名古屋駅（なごやえき）は、愛知県名古屋市中村区名駅にある東海旅客鉄道・日本貨物鉄道・名古屋臨海高速鉄道・名古屋市交通局の駅。JRセントラルタワーズなどの超高層駅ビルが連なり、冬には巨大クリスマスツリーやタワーズライツで華やぎます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-emerald-700 font-bold text-sm">📍 中部電力 MIRAI TOWER（旧名古屋テレビ塔）</span>
    </div>
    <img src="${wMiraiTower.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/187470/187470.jpg'}" alt="中部電力 MIRAI TOWER" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wMiraiTower.extract || '中部電力 MIRAI TOWER（ちゅうぶでんりょく ミライタワー）は、愛知県名古屋市中区久屋大通公園にある集約電波塔。日本初の集約電波塔として1954年に竣工。登録有形文化財・国の重要文化財に指定されており、夜間ライトアップとHisaya-odori Park水盤のリフレクションが見事です。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-emerald-700 font-bold text-sm">📍 熱田神宮（Atsuta Shrine）</span>
    </div>
    <img src="${wAtsuta.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/2046/2046.jpg'}" alt="熱田神宮" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wAtsuta.extract || '熱田神宮（あつたじんぐう）は、愛知県名古屋市熱田区神宮にある神社。三種の神器の一つである草薙剣（くさなぎのつるぎ）を祀ることで知られる古社で、「熱田さま」の名で親しまれ、年末年始の初詣や冬の参拝客で大変賑わいます。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  🗺️ 巨大ツリーとなごやめしを満喫する 1泊2日名古屋冬の王道モデルコース
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-emerald-700 text-white rounded text-xs">1日目</span>
      名駅直結ホテルチェックインからノリタケの森14m巨大ツリー＆極上ひつまぶしディナー
    </h3>
    <p class="leading-relaxed">
      13:00 東海道新幹線でJR名古屋駅に到着 ➔ 駅直結の名古屋マリオットアソシアホテルまたはゲートタワーホテルに荷物を預ける ➔ エスカ地下街の「矢場とん」で名物みそかつランチ ➔ 14:30 徒歩またはメーグルで「ノリタケの森」へ ➔ クラフトセンターでノリタケ食器の職人技を鑑賞し、クリスマス絵付け体験 ➔ 16:30 日没とともに煙突広場の高さ14mモミの木ツリーがライトアップ！赤レンガ棟を背景にサンタクロース像と記念撮影 ➔ 18:00 名駅に戻りJRゲートタワーの巨大ツリーを鑑賞 ➔ 19:00 タワーズレストラン街または名駅「あつた蓬莱軒 松坂屋店」で名物ひつまぶしに舌鼓 ➔ 21:00 ホテルへ戻り、地上200mの客室から名古屋のきらめく夜景を眺めながら優雅な時間を過ごす。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-emerald-700 text-white rounded text-xs">2日目</span>
      豪華ホテル朝食＆熱田神宮参拝から栄MIRAI TOWER水盤散策とお土産巡り
    </h3>
    <p class="leading-relaxed">
      07:30 ホテルレストランで名古屋コーチンやきしめん、焼きたてパンの贅沢朝食ビュッフェ ➔ 09:30 名鉄で神宮前駅へ移動し、三種の神器を祀る「熱田神宮」で冬の清らかな空気の中参拝 ➔ 名物「宮きしめん」を境内で味わう ➔ 12:00 地下鉄名城線で栄へ移動 ➔ Hisaya-odori Parkのミズベヒロバを散策し、中部電力MIRAI TOWERを見上げる ➔ オアシス21の「水の宇宙船」で空中散歩 ➔ 14:00 ジェイアール名古屋タカシマヤのデパ地下で、坂角総本鋪のゆかり、両口屋是清の銘菓、青柳ういろうを購入 ➔ 15:30 冬の満ち足りた想い出とともに新幹線ホームから帰路へ。
    </p>
  </div>
</div>

<h2 id="comparison-table" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  📊 名駅・栄 厳選5ホテルの特徴・立地・宿泊目安比較一覧
</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
      <tr>
        <th class="p-3">ホテル名</th>
        <th class="p-3">エリア・最寄り</th>
        <th class="p-3">楽天評価</th>
        <th class="p-3">目安料金</th>
        <th class="p-3">客室・高層夜景のハイライト</th>
        <th class="p-3">レストラン・なごやめしの特徴</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-100 text-stone-700">
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">名古屋マリオットアソシアホテル</td>
        <td class="p-3">JR名古屋駅直結</td>
        <td class="p-3 font-bold text-emerald-700">★ ${hMarriott.reviewAverage}</td>
        <td class="p-3">¥${hMarriott.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">地上200m超パノラマビュー・大理石バスルーム・全室高層階</td>
        <td class="p-3">52階スカイラウンジ「ジーニス」＆豪華ひつまぶし朝食</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">名古屋ＪＲゲートタワーホテル</td>
        <td class="p-3">JR名古屋駅直結</td>
        <td class="p-3 font-bold text-emerald-700">★ ${hGatetower.reviewAverage}</td>
        <td class="p-3">¥${hGatetower.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">巨大ツリー直結・天井高2.8m・エアウィーヴ・トレインビュー</td>
        <td class="p-3">青山「L’AS」監修フレンチ「THE GATEHOUSE」の朝食</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ヒルトン名古屋</td>
        <td class="p-3">地下鉄伏見駅徒歩3分</td>
        <td class="p-3 font-bold text-emerald-700">★ ${hHilton.reviewAverage}</td>
        <td class="p-3">¥${hHilton.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">伝統の巨大ジオラマ列車・和モダン格子スクリーン客室</td>
        <td class="p-3">「インプレイス3-3」の豪華クリスマスローストビュッフェ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">名古屋観光ホテル</td>
        <td class="p-3">地下鉄伏見駅徒歩2分</td>
        <td class="p-3 font-bold text-emerald-700">★ ${hKanko.reviewAverage}</td>
        <td class="p-3">¥${hKanko.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">昭和11年創業「中部の迎賓館」・最高級フロア「エスパシオ」</td>
        <td class="p-3">名門フレンチ「エスコフィエ」＆重厚バー「プエルト」</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">TIAD, AUTOGRAPH COLLECTION</td>
        <td class="p-3">地下鉄矢場町駅正面</td>
        <td class="p-3 font-bold text-emerald-700">★ ${hTiad.reviewAverage}</td>
        <td class="p-3">¥${hTiad.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">全室50㎡超バルコニー付き・インドア温水プール・公園一望</td>
        <td class="p-3">「Table For TOMORROW」の薪窯料理＆テラスラウンジ</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  ❓ ノリタケの森クリスマスガーデン＆名駅イルミ よくある質問（FAQ）
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-emerald-950">Q1. ノリタケの森のクリスマスツリーの点灯時間は？</h3>
    <p class="text-stone-700 leading-relaxed">
      点灯期間は2026年11月中旬から12月25日まで。点灯時間は日没から19:00まで（園内の入場および散策は21:00まで可能）です。ツリーの消灯時間が早いため、夕方16:30〜17:30の点灯直後に訪れるのがおすすめです。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-emerald-950">Q2. ノリタケの森への入場料はかかりますか？</h3>
    <p class="text-stone-700 leading-relaxed">
      煙突広場や庭園への入場、クリスマスツリーの鑑賞は無料です（クラフトセンター・ミュージアムなどの有料施設は大人500円）。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-emerald-950">Q3. 名古屋駅直結ホテルと栄のホテル、どちらがおすすめですか？</h3>
    <p class="text-stone-700 leading-relaxed">
      新幹線での到着後すぐにチェックインし、地上200m超の夜景を満喫したいなら名駅直結の「名古屋マリオットアソシアホテル」や「名古屋JRゲートタワーホテル」が圧倒的に便利です。一方、公園のイルミネーションやMIRAI TOWERの夜景、最新の温水プールリゾートを楽しみたいなら栄の「TIAD」が最高の選択肢です。
    </p>
  </div>
</div>

<h2 id="internal-links" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  📌 あわせて読みたい愛知・東海の夜景＆冬旅特集
</h2>
<div class="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200 space-y-3 my-6">
  <p class="text-xs text-emerald-900 font-bold mb-2">当サイトでは、愛知・東海の絶景イルミネーションや名門ホテルを満喫できる特集記事を多数公開しています。</p>
  <ul class="text-xs text-emerald-900 space-y-2 list-disc list-inside">
    <li><a href="/prefectures/aichi/" class="underline font-bold hover:text-emerald-700">愛知県の旅館・高級ホテル＆観光名所完全ガイド（名古屋・犬山・知多半島）</a></li>
    <li><a href="/posts/nagoya-station-sakae-hotels-guide" class="underline hover:text-emerald-700">名古屋駅・栄周辺の人気ホテル比較！観光・出張・記念日を極める厳選宿</a></li>
    <li><a href="/posts/autumn-winter-aichi-korankei-momiji-lightup-asuke-sanage-onsen-hotels-guide" class="underline hover:text-emerald-700">香嵐渓もみじまつりライトアップ＆足助の古い町並み・猿投温泉名宿ガイド</a></li>
    <li><a href="/posts/autumn-november-nabananosato-huistenbosch-hakodate-ashikaga-illumination-guide" class="underline hover:text-emerald-700">なばなの里＆全国人気イルミネーション名所とおすすめリゾートホテル特集</a></li>
    <li><a href="/posts/winter-osaka-hikari-renaissance-nakanoshima-midosuji-hotels-guide" class="underline hover:text-emerald-700">OSAKA光のルネサンス2026＆御堂筋イルミネーション名門ホテルガイド</a></li>
  </ul>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${title}",
  "description": "${description}",
  "datePublished": "${date}",
  "dateModified": "${date}",
  "author": {
    "@type": "Organization",
    "name": "クランドトラベル（Croud Travel）編集部"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Croud Travel",
    "logo": {
      "@type": "ImageObject",
      "url": "https://croud-travel.pages.dev/favicon.ico"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://croud-travel.pages.dev/posts/${slug}"
  }
}
</script>
`;

  const postData = {
    id: slug,
    slug: slug,
    title: title,
    description: description,
    hero_image: hMarriott.hotelImageUrl,
    gallery: [
      hMarriott.hotelImageUrl,
      hGatetower.hotelImageUrl,
      hHilton.hotelImageUrl,
      hKanko.hotelImageUrl,
      hTiad.hotelImageUrl
    ],
    hotel_name: "名古屋マリオットアソシアホテル・名古屋JRゲートタワーホテル・TIAD ほか",
    affiliate_url: hMarriott.affiliateUrl,
    categories: [
      "冬のイベント特集",
      "クリスマス特集",
      "イルミネーション特集",
      "愛知県",
      "高級ホテル・名門ホテル"
    ],
    prefecture: prefecture,
    area: area,
    date: date,
    review: reviewHtml,
    rating: 4.8,
    price_range: "¥8,550〜¥85,000",
    tags: [
      "ノリタケの森",
      "クリスマスガーデン",
      "名古屋マリオットアソシアホテル",
      "名古屋JRゲートタワーホテル",
      "TIAD",
      "ヒルトン名古屋",
      "名古屋観光ホテル",
      "イルミネーション",
      "ひつまぶし",
      "中部電力MIRAI TOWER"
    ]
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ${JSON.stringify(postData.tags)}
---

# ${title}

2026年11月中旬〜12月25日開催の「ノリタケの森 クリスマスガーデン」と名駅・栄エリアの冬の光の祭典を徹底解説！

赤レンガ建築と豊かな緑が広がるノリタケの森にそびえ立つ高さ約14mの巨大モミの木クリスマスツリー、約4万球のイルミネーション、JRゲートタワー前の巨大クリスマスツリー、中部電力MIRAI TOWERの幻想的な冬夜景を網羅。

地上200m超パノラマ夜景の名古屋マリオットアソシアホテルや名古屋JRゲートタワーホテル、栄のTIADなど、本場の極上ひつまぶしや名古屋コーチンを堪能できる厳選名宿5選をご紹介します。

---

## 💡 現地調査に基づくプロの指南！ノリタケの森＆名駅・栄イルミネーション攻略マニュアル

- **ノリタケの森 巨大ツリー点灯（日没〜19:00）:** 煙突広場にそびえる高さ14mのモミの木ツリー。消灯時間が19:00と早いため、夕方16:30〜17:30の点灯直後に訪れるのがベストです。
- **赤レンガ棟を背景にした構図:** 明治時代の赤レンガ建築と巨大ツリー、サンタクロース像を正面から捉えると、欧州の古都のようなクラシカルな写真が撮影できます。
- **名駅JRゲートタワー＆栄MIRAI TOWERのハシゴ:** 名駅前のタワーズライツや巨大ツリーを楽しんだ後、地下鉄東山線で栄へ移動し、Hisaya-odori Park水盤に映る「逆さMIRAI TOWER」を鑑賞するルートがおすすめです。
- **伊吹颪（いぶきおろし）対策の防寒装備:** 冬の名古屋は冷たい季節風「伊吹颪」が吹き抜けます。風を通さないダウンコート、マフラー、手袋を必ず装備してください。

---

## 🏨 旅の目的に応じて選ぶ！名駅・栄の厳選名ホテル5選

### 1. 名古屋マリオットアソシアホテル（愛知県名古屋市中村区名駅）
- **特徴:** JR名古屋駅直結。タワーズ高層階（20〜49階）に位置するフラッグシップホテル。地上200m超のパノラマ夜景。52階スカイラウンジ「ジーニス」。
- **宿泊目安:** 1名 ¥17,500〜
- **楽天トラベル評価:** ⭐ 4.64（13303件）
- 👉 [名古屋マリオットアソシアホテルの空室・宿泊プランを見る](${hMarriott.affiliateUrl})

### 2. 名古屋ＪＲゲートタワーホテル（愛知県名古屋市中村区名駅）
- **特徴:** JR名古屋駅直結・ゲートタワー18〜24階。1階の巨大ツリー直結。天井高2.8mのナチュラルモダン客室。青山「L’AS」兼子シェフ監修の朝食。
- **宿泊目安:** 1名 ¥12,620〜
- **楽天トラベル評価:** ⭐ 4.47（2767件）
- 👉 [名古屋JRゲートタワーホテルの空室・宿泊プランを見る](${hGatetower.affiliateUrl})

### 3. ヒルトン名古屋（愛知県名古屋市中区栄）
- **特徴:** 伏見駅徒歩3分。ロビーの巨大ジオラマ「クリスマス・トレイン」。和モダン格子スクリーンの客室。エグゼクティブラウンジのカクテルタイム。
- **宿泊目安:** 1名 ¥10,320〜
- **楽天トラベル評価:** ⭐ 4.42（5670件）
- 👉 [ヒルトン名古屋の空室・宿泊プランを見る](${hHilton.affiliateUrl})

### 4. 名古屋観光ホテル（愛知県名古屋市中区錦）
- **特徴:** 昭和11年創業「中部の迎賓館」。伏見駅徒歩2分。最高峰フロア「エスパシオ」。伝統フレンチ「エスコフィエ」と名門バー「プエルト」。
- **宿泊目安:** 1名 ¥8,550〜
- **楽天トラベル評価:** ⭐ 4.54（4564件）
- 👉 [名古屋観光ホテルの空室・宿泊プランを見る](${hKanko.affiliateUrl})

### 5. ＴＩＡＤ，　Ａｕｔｏｇｒａｐｈ　Ｃｏｌｌｅｃｔｉｏｎ（愛知県名古屋市中区栄）
- **特徴:** 矢場町駅正面・久屋大通公園一望。マリオット最上位オートグラフコレクション。全室50平米以上バルコニー付き。インドア温水プール完備。
- **宿泊目安:** 1名 ¥27,324〜
- **楽天トラベル評価:** ⭐ 4.58（140件）
- 👉 [TIADの空室・宿泊プランを見る](${hTiad.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **ノリタケの森:** ${wNoritake.extract || 'ノリタケの森（ノリタケのもり）は、愛知県名古屋市西区則武新町にあるノリタケカンパニーリミテドの本社敷地内にある複合施設。明治時代の赤レンガ建築が残り、冬には高さ14mの巨大モミの木ツリーが輝く「クリスマスガーデン」が開催されます。'}
- **名古屋駅:** ${wNagoyaStation.extract || '名古屋駅（なごやえき）は、愛知県名古屋市中村区名駅にある東海旅客鉄道・日本貨物鉄道・名古屋臨海高速鉄道・名古屋市交通局の駅。JRセントラルタワーズなどの超高層駅ビルが連なります。'}
- **中部電力 MIRAI TOWER:** ${wMiraiTower.extract || '中部電力 MIRAI TOWER（旧名古屋テレビ塔）は、愛知県名古屋市中区久屋大通公園にある集約電波塔。登録有形文化財・国の重要文化財に指定されており、夜間ライトアップが見事です。'}
- **熱田神宮:** ${wAtsuta.extract || '熱田神宮（あつたじんぐう）は、愛知県名古屋市熱田区神宮にある神社。三種の神器の一つである草薙剣を祀ることで知られる古社で、年末年始の初詣や冬の参拝客で賑わいます。'}

---

## 🗺️ 名古屋を満喫する 1泊2日モデルコース

- **1日目:** 名古屋駅到着 ➔ 名駅直結ホテルチェックイン ➔ エスカでみそかつランチ ➔ ノリタケの森へ移動し絵付け体験 ➔ 16:30 日没とともに14m巨大ツリー点灯式鑑賞 ➔ 名駅へ戻りゲートタワー巨大ツリー鑑賞 ➔ あつた蓬莱軒でひつまぶしディナー ➔ 地上200mの客室から夜景鑑賞
- **2日目:** 贅沢ホテル朝食 ➔ 熱田神宮参拝＆宮きしめん ➔ 栄の久屋大通公園で水盤の逆さMIRAI TOWER鑑賞 ➔ デパ地下でお土産購入（ゆかり・ういろう） ➔ 帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. ノリタケの森クリスマスツリーの点灯時間は？**  
A. 日没から19:00まで点灯します。園内散策は21:00まで可能ですが、ツリー消灯が早いため17時前後の訪問がおすすめです。

**Q2. ノリタケの森の入場料は？**  
A. 庭園やツリーの鑑賞は無料です（クラフトセンター等の館内施設は有料）。

**Q3. 一番おすすめの宿泊先は？**  
A. 新幹線直結で地上200mの圧倒的夜景なら「名古屋マリオットアソシアホテル」、栄の最新ラグジュアリーとプールなら「TIAD」がおすすめです。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【名古屋】ノリタケの森クリスマスガーデン2026＆名駅・栄イルミネーション完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/posts/${slug})
`;

  return { postData, noteMarkdown };
};
