// scripts/new_articles/article21_enoshima.js
module.exports = function buildArticle21(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-kanagawa-enoshima-shonan-jewel-illumination-kamakura-hotels-guide";
  const title = "【神奈川・湘南江の島/鎌倉】江の島「湘南の宝石2026-2027」＆冬の古都散策完全攻略！シーキャンドル煌めく光の大空間と相模湾の伊勢海老・地魚会席を味わう海景ホテル＆老舗名旅館5選";
  const description = "澄み渡る冬の大気の中、湘南の夜空をクリスタルガラスの輝きで包み込む関東三大イルミネーション「湘南の宝石」。江の島シーキャンドルから360度広がる光の絨毯と、夕暮れ時に富士山のシルエットが浮かび上がる幻想的なマジックアワーは圧巻の美しさ。冬の古都・鎌倉の静寂な社寺散策と組み合わせ、脂の乗った寒ブリや伊勢海老など相模湾の旬魚を堪能できる特等席ホテル・老舗旅館5選を現地目線で徹底解説します。";
  const date = "2026-11-03";
  const prefecture = "神奈川県";
  const area = "湘南・鎌倉・逗子";

  const hIwamoto = hotels.find(h => h.hotelNo === 84915) || hotels[0];
  const hPrince = hotels.find(h => h.hotelNo === 1679) || hotels[1];
  const hBreath = hotels.find(h => h.hotelNo === 147040) || hotels[2];
  const hMetropolitan = hotels.find(h => h.hotelNo === 177689) || hotels[3];
  const hEnoshimaHotel = hotels.find(h => h.hotelNo === 179415) || hotels[4];

  const wJewel = wiki["湘南の宝石"] || {};
  const wEnoshima = wiki["江の島"] || {};
  const wCandle = wiki["江の島シーキャンドル"] || {};
  const wDaibutsu = wiki["鎌倉大仏"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-sky-950 via-indigo-950 to-blue-950 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-sky-300 font-extrabold text-xs">
      <span>💎</span><span>2026-2027冬 江の島「湘南の宝石」＆鎌倉古都散策 最新情報</span>
    </div>
    <p class="text-xs text-sky-100">
      11月中旬から開幕する日本屈指の光の祭典！澄み切った湘南の夜景、富士山を染める夕暮れのマジックアワー、そして相模湾の伊勢海老・地魚を味わう至高の旅へ。
    </p>
  </div>
  <a href="${hIwamoto.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-sky-400 hover:bg-sky-300 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    🌊 江の島島内・岩本楼の空室を見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-700 pb-2 mb-4">
  夕富士とスワロフスキーの閃光！冬の湘南を彩る「湘南の宝石」の圧倒的スケール
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  真夏の賑わいが落ち着き、波音が穏やかに響く冬の湘南。11月中旬を迎えると、江の島全体が透明感あふれる光の結晶へと姿を変えます。関東三大イルミネーションおよび日本夜景遺産に認定され、全国イルミネーションアワードで常に上位に君臨する「湘南の宝石」です。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  冬の湘南最大の魅力は、大気中の水蒸気が減少し、視界が極限までクリアになる点にあります。日没前のわずか30分間、西の空に雪化粧をまとった富士山が鮮やかな紅富士となって浮かび上がり、相模湾の海面が茜色から深い群青色へとグラデーションを描く「マジックアワー」が訪れます。その劇的な黄昏の光景に重なるように、江の島シーキャンドル（展望灯台）から360度放射状に広がる光のカーテン「光の大空間」が一斉に点灯。最高級クリスタルガラス・スワロフスキーを用いたシャンデリアゲートが頭上を埋め尽くし、訪れる人々を息を呑むような別世界へと誘います。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  昼間は古都・鎌倉で静寂に包まれた寺社巡りや小町通りの冬スイーツを愉しみ、夕暮れとともに江ノ電に揺られて江の島へ。夜は海風を避けて島内の老舗旅館や七里ヶ浜の海景リゾートに投宿し、冬に最も脂が乗る寒ブリや相模湾の伊勢海老、サザエを堪能する――これこそが大人の冬の湘南ステイの真骨頂です。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-700 pb-2 my-6">
  ✨ 「湘南の宝石」鑑賞の極意＆冬の江ノ電・鎌倉散策テクニック
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-sky-100 text-sky-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">見逃せない光のスポット＆点灯カウントダウン</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>江の島シーキャンドル「光の大空間」:</strong> 灯台頂部から直径数十メートルにわたって張り巡らされた光のテンシル構造。下から見上げると満天の星空が降り注ぐような錯覚に陥ります。</p>
      <p>② <strong>湘南シャンデリア:</strong> サムエル・コッキング苑の入口を飾るクリスタルビーズの光のトンネル。スワロフスキーが放つ七色のプリズム反射は撮影スポットとして屈指の人気を誇ります。</p>
      <p>③ <strong>江の島岩屋のイルミネーション:</strong> 波の浸食でできた洞窟内も神秘的なキャンドルカラーにライトアップされ、昼間とは一変した荘厳な雰囲気を醸し出します。</p>
      <p>④ <strong>冬咲きチューリップとの競演:</strong> 12月中旬から1月にかけて、苑内に約2万本のウィンターチューリップが開花。光と鮮やかな花のコラボレーションは湘南ならではの光景です。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-indigo-100 text-indigo-800 font-extrabold text-xs rounded-lg">アクセス＆防寒戦略</span>
      <h3 class="text-base font-bold text-stone-900">坂道移動の負担軽減と夜間海風の心得</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【エスカー利用のススメ】</strong> 江の島弁財天仲見世通りを抜けた後、山頂のサムエル・コッキング苑までは急な石段が続きます。有料エスカレーター「江の島エスカー」を利用すればわずか5分で楽々アクセスでき、体力を温存できます。</p>
      <p><strong>【冬の海風対策】</strong> 日中は日差しがあれば暖かい湘南ですが、日没後は相模湾からの強冷な海風が吹き込み体感温度が急激に下がります。防風仕様のロングコート、手袋、首元を密閉するマフラーを必ず装備してください。</p>
      <p><strong>【江ノ電の夕方混雑回避】</strong> 鎌倉駅から江ノ電で移動する場合、16時前後は観光客で混み合います。15時前後に江の島入りして島内のカフェで名物のフレンチトーストを楽しみながら点灯（17:00頃）を待つのが最もスマートです。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-700 pb-2 my-8">
  🏨 湘南の絶景と相模湾美食に酔いしれる！厳選ホテル＆旅館5選
</h2>

<!-- 宿1: 岩本楼本館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-sky-100 text-sky-900 font-black text-xs rounded-full">江の島島内唯一の老舗旅館・登録有形文化財のローマ風呂</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 湘南・江の島の海と富士山を望む歴史の宿 岩本楼本館（神奈川県藤沢市江の島）</h3>
    </div>
    <span class="px-3 py-1.5 bg-sky-50 border border-sky-300 text-sky-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hIwamoto.reviewAverage}（${hIwamoto.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hIwamoto.hotelImageUrl}" alt="${hIwamoto.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hIwamoto.roomImageUrl || hIwamoto.hotelImageUrl}" alt="${hIwamoto.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        鎌倉時代より江島神社の別当寺として歴史を刻み、島内に現存する唯一の歴史旅館。宿の一歩外は仲見世通りで、「湘南の宝石」会場のサムエル・コッキング苑へも徒歩圏内という圧倒的な利便性を誇ります。点灯後のイルミネーションを心ゆくまで堪能した後、夜の静寂を取り戻した島内を散策しながら宿に戻れる贅沢は宿泊者だけの特権です。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hIwamoto.address1}${hIwamoto.address2}</div>
        <div><strong>アクセス:</strong> 小田急片瀬江ノ島駅より徒歩約15分、江ノ島電鉄江ノ島駅より徒歩約20分（弁天橋を渡り仲見世通り沿い）</div>
        <div><strong>名物風呂:</strong> 国の登録有形文化財「ローマ風呂」＆神秘的なステンドグラスが輝く「弁天風呂」</div>
        <div><strong>冬の味覚:</strong> 相模湾の新鮮な地魚舟盛り、サザエのつぼ焼き、伊勢海老の鬼瓦焼き会席</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hIwamoto.hotelMinCharge || 14960).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hIwamoto.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルで岩本楼本館のプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 鎌倉プリンスホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-sky-100 text-sky-900 font-black text-xs rounded-full">七里ヶ浜の高台・全室オーシャンビュー＆富士山ビュー</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 鎌倉プリンスホテル（神奈川県鎌倉市七里ガ浜東）</h3>
    </div>
    <span class="px-3 py-1.5 bg-sky-50 border border-sky-300 text-sky-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hPrince.reviewAverage}（${hPrince.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hPrince.hotelImageUrl}" alt="${hPrince.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hPrince.roomImageUrl || hPrince.hotelImageUrl}" alt="${hPrince.hotelName} 客室オーシャンビュー" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        湘南を代表する絶景スポット・七里ヶ浜の高台に位置し、全客室の窓から相模湾、江の島、そして晴天時には冠雪の富士山を一望できるリゾートホテル。「湘南の宝石」で輝く江の島シーキャンドルの灯りが海越しに瞬く夜景は、まさに絵画のような美しさです。七里ヶ浜駅からは徒歩または斜行エレベーターで快適にアクセスできます。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hPrince.address1}${hPrince.address2}</div>
        <div><strong>アクセス:</strong> 江ノ島電鉄七里ヶ浜駅より徒歩約8分（無料シャトルバス運行あり）</div>
        <div><strong>客室特徴:</strong> 相模湾に向かって開かれたワイドな窓面、心地よいバルコニー空間</div>
        <div><strong>ディナー:</strong> レストラン ル・トリアノンで味わう地元の鎌倉野菜と旬の魚介フレンチコース</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hPrince.hotelMinCharge || 9489).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hPrince.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルで鎌倉プリンスホテルのプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: BREATH HOTEL -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-sky-100 text-sky-900 font-black text-xs rounded-full">湘南海岸フロント・全室マイクロバブルバス完備の大人隠れ家</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. BREATH HOTEL（ブレスホテル）（神奈川県藤沢市鵠沼海岸）</h3>
    </div>
    <span class="px-3 py-1.5 bg-sky-50 border border-sky-300 text-sky-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hBreath.reviewAverage}（${hBreath.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hBreath.hotelImageUrl}" alt="${hBreath.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hBreath.roomImageUrl || hBreath.hotelImageUrl}" alt="${hBreath.hotelName} バスルーム" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        楽天トラベル口コミ評価4.8を超える、鵠沼海岸沿いに佇む極上のスモールラグジュアリーホテル。「自然の息吹を感じ、心身を整える」をコンセプトに、全室に超微細気泡で体を温めるシルキーバス（マイクロバブルバス）と人工温泉システム、インバスTVを標準装備。冬の江の島散策で冷えた体を極上のバスタイムで優しく解きほぐせます。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hBreath.address1}${hBreath.address2}</div>
        <div><strong>アクセス:</strong> 小田急鵠沼海岸駅より徒歩約15分、江ノ島駅よりタクシー約5分</div>
        <div><strong>充実サービス:</strong> 高級アメニティバー、全室ビューバス仕様、無料レンタルアイテム多数</div>
        <div><strong>朝食:</strong> お部屋でいただく焼き立てパンとフレッシュスムージーのブレックファスト</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hBreath.hotelMinCharge || 13282).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hBreath.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルでBREATH HOTELのプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: ホテルメトロポリタン 鎌倉 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-sky-100 text-sky-900 font-black text-xs rounded-full">鎌倉駅徒歩2分・若宮大路沿いに佇む古都のプレミアム拠点</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. ホテルメトロポリタン 鎌倉（神奈川県鎌倉市小町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-sky-50 border border-sky-300 text-sky-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hMetropolitan.reviewAverage}（${hMetropolitan.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hMetropolitan.hotelImageUrl}" alt="${hMetropolitan.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hMetropolitan.roomImageUrl || hMetropolitan.hotelImageUrl}" alt="${hMetropolitan.hotelName} 客室インテリア" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        JR鎌倉駅東口から徒歩わずか2分、鶴岡八幡宮の一の鳥居へと続く若宮大路に面したハイグレードホテル。木のぬくもりを活かした上質な和モダンの客室には、全室に洗い場付きバスルームとシモンズ製最高級ベッドを採用。日中は北鎌倉や長谷の古刹を散策し、夕方に江ノ電で江の島イルミネーションを訪れた後、鎌倉の静かな夜へ戻る拠点としてこの上ない利便性を誇ります。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hMetropolitan.address1}${hMetropolitan.address2}</div>
        <div><strong>アクセス:</strong> JR横須賀線・江ノ島電鉄「鎌倉駅」東口より徒歩約2分</div>
        <div><strong>館内施設:</strong> 1階に「Café&Meal MUJI」併設、宿泊者専用の中庭テラスラウンジ</div>
        <div><strong>朝食:</strong> 地元鎌倉の新鮮野菜やしらすを取り入れた選べるメインプレート＆ハーフビュッフェ</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hMetropolitan.hotelMinCharge || 13575).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hMetropolitan.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルでホテルメトロポリタン 鎌倉のプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 江の島ホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-sky-100 text-sky-900 font-black text-xs rounded-full">江の島アイランドスパ直結・天然温泉＆温水インフィニティスパ</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 江の島ホテル（神奈川県藤沢市江の島）</h3>
    </div>
    <span class="px-3 py-1.5 bg-sky-50 border border-sky-300 text-sky-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hEnoshimaHotel.reviewAverage}（${hEnoshimaHotel.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hEnoshimaHotel.hotelImageUrl}" alt="${hEnoshimaHotel.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hEnoshimaHotel.roomImageUrl || hEnoshimaHotel.hotelImageUrl}" alt="${hEnoshimaHotel.hotelName} スパ施設" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        江の島の玄関口、弁天橋を渡ってすぐ右手に位置し、日帰り温泉スパ「江の島アイランドスパ（えのすぱ）」の本館に直結した本格リゾートホテル。地下1,500mから湧き出る塩分を含んだ天然温泉は湯冷めしにくく、冬の冷えた体を芯から温めます。宿泊者は水着で入れる温水インフィニティプールやサウナも利用可能。湘南の宝石ライトアップ会場まで歩いてすぐの好立地です。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hEnoshimaHotel.address1}${hEnoshimaHotel.address2}</div>
        <div><strong>アクセス:</strong> 片瀬江ノ島駅より徒歩約10分、江ノ電江ノ島駅より徒歩約15分</div>
        <div><strong>温泉泉質:</strong> ナトリウム-塩化物強塩温泉（保温・美肌効果が高い高濃度温泉）</div>
        <div><strong>絶景ポイント:</strong> 露天スパエリアから湘南の海越しに富士山と夕景を一望</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hEnoshimaHotel.hotelMinCharge || 11400).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hEnoshimaHotel.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルで江の島ホテルのプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="wiki-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6">
  湘南の宝石と合わせて巡りたい、江の島・鎌倉の代表的名所。冬ならではの見どころと歴史的背景を解説します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <!-- 観光地1: サムエル・コッキング苑 / 湘南の宝石 -->
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
    <div class="flex items-center justify-between border-b border-stone-100 pb-2">
      <h3 class="font-bold text-stone-900 text-sm md:text-base">江の島サムエル・コッキング苑（湘南の宝石主会場）</h3>
      <span class="text-xs text-sky-700 font-extrabold">歴史植物園＆展望苑</span>
    </div>
    ${wJewel.thumbnail ? `<img src="${wJewel.thumbnail}" alt="江の島サムエル・コッキング苑" class="w-full h-44 object-cover rounded-xl" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wJewel.extract || '明治時代の英国人貿易商サムエル・コッキングが造成した植物園を前身とする歴史ある庭園。園内には温室遺構が保存され、冬期はスワロフスキー製クリスタルが煌めく「湘南の宝石」のメインステージとなります。'}
    </p>
  </div>

  <!-- 観光地2: 江の島シーキャンドル -->
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
    <div class="flex items-center justify-between border-b border-stone-100 pb-2">
      <h3 class="font-bold text-stone-900 text-sm md:text-base">江の島シーキャンドル（展望灯台）</h3>
      <span class="text-xs text-sky-700 font-extrabold">湘南のランドマーク</span>
    </div>
    ${wCandle.thumbnail ? `<img src="${wCandle.thumbnail}" alt="江の島シーキャンドル" class="w-full h-44 object-cover rounded-xl" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wCandle.extract || '高さ59.8m（海抜119.6m）を誇る江の島のシンボル灯台。展望フロアからは富士山、伊豆半島、大島、横浜ランドマークタワーまで360度の大パノラマが広がり、夜間は灯台全体がイルミネーションの光塔として輝きます。'}
    </p>
  </div>

  <!-- 観光地3: 江の島 -->
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
    <div class="flex items-center justify-between border-b border-stone-100 pb-2">
      <h3 class="font-bold text-stone-900 text-sm md:text-base">江の島（弁天橋と仲見世通り）</h3>
      <span class="text-xs text-sky-700 font-extrabold">信仰と風光明媚の島</span>
    </div>
    ${wEnoshima.thumbnail ? `<img src="${wEnoshima.thumbnail}" alt="江の島" class="w-full h-44 object-cover rounded-xl" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wEnoshima.extract || '相模湾に浮かぶ周囲約4kmの陸繋島。古くから弁財天信仰の聖地として親しまれ、江島神社へ至る仲見世通りには名物のタコせんべいやサザエの串焼き、釜揚げしらす丼を供する老舗食堂が軒を連ねます。'}
    </p>
  </div>

  <!-- 観光地4: 鎌倉大仏（高徳院） -->
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
    <div class="flex items-center justify-between border-b border-stone-100 pb-2">
      <h3 class="font-bold text-stone-900 text-sm md:text-base">鎌倉大仏（国宝・高徳院本尊）</h3>
      <span class="text-xs text-sky-700 font-extrabold">古都鎌倉の象徴</span>
    </div>
    ${wDaibutsu.thumbnail ? `<img src="${wDaibutsu.thumbnail}" alt="鎌倉大仏" class="w-full h-44 object-cover rounded-xl" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wDaibutsu.extract || '高徳院の本尊である国宝の阿弥陀如来坐像。青銅製で像高約11.3m、台座を含めると約13.35mに達します。冬の柔らかな日差しを浴びて静かに鎮座する露座の大仏は、湘南散策の前後にぜひ立ち寄りたい必訪スポットです。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-700 pb-2 my-8">
  🗺️ 冬の湘南・鎌倉 1泊2日王道モデルコース
</h2>
<div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-4 text-xs md:text-sm text-stone-700 leading-relaxed">
  <div class="border-b border-stone-200 pb-3">
    <strong class="text-sky-900 text-sm">【1日目: 古都鎌倉散策から夕暮れの湘南の宝石へ】</strong>
    <p class="mt-1">
      午前10:00 JR鎌倉駅到着 ➔ 小町通りを抜け鶴岡八幡宮を参拝 ➔ 長谷へ移動し鎌倉大仏（高徳院）と長谷寺を散策 ➔ 14:30 長谷駅から江ノ電に乗り江ノ島駅へ ➔ 弁天橋を渡り江の島上陸 ➔ エスカーでサムエル・コッキング苑へ ➔ 16:30 夕暮れのマジックアワー（茜色の富士山鑑賞） ➔ 17:00「湘南の宝石」点灯カウントダウン ➔ 煌めく光の大空間と湘南シャンデリアを撮影 ➔ 19:00 江の島島内または七里ヶ浜の宿へチェックイン ➔ 相模湾の地魚舟盛り＆伊勢海老会席に舌鼓
    </p>
  </div>
  <div>
    <strong class="text-sky-900 text-sm">【2日目: 朝の湘南海岸散歩と名物グルメ】</strong>
    <p class="mt-1">
      朝07:30 宿のオーシャンビュー窓から朝日に輝く富士山と相模湾を望む ➔ 潮風を感じながら七里ヶ浜海岸や片瀬海岸を散歩 ➔ 宿で特製朝食を堪能 ➔ 10:00 チェックアウト ➔ 新江ノ島水族館で相模湾大水槽やクラゲファンタジーホールを見学 ➔ 12:30 江の島名物サザエ丼＆釜揚げしらすランチ ➔ 14:00 お土産（鳩サブレーや江の島丸焼きタコせんべい）を購入し帰路へ
    </p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-sky-700 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q1. 「湘南の宝石」の開催期間と点灯時間は何時からですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 例年11月中旬から翌年2月中旬まで開催されます。点灯時間は平日・年末年始は17:00〜20:00（土日祝および12月23日〜30日は17:00〜21:00）です。日没直後の17:00前後は空に青みが残り、富士山のシルエットとイルミネーションが最も美しく重なるベストタイミングです。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q2. 江の島島内の移動はベビーカーや車椅子でも可能ですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 仲見世通りから山頂までは石段が多いため、有料エスカレーター「江の島エスカー」の利用が必須です。ただしエスカーは上り専用で下りは階段となるため、ベビーカーは折りたたみ可能な軽量タイプが安心です。車椅子をご利用の場合は、島内の連絡通路ルート（一部坂道あり）やエレベーター設備を備えた施設を事前にご確認ください。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q3. 車で行く場合、駐車場の混雑状況はどうですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 週末やクリスマスシーズンの江の島島内駐車場（江の島なぎさ駐車場など）および片瀬海岸周辺の駐車場は、15時を過ぎると満車となり国道134号線が激しく渋滞します。公共交通機関（小田急片瀬江ノ島駅、江ノ電江ノ島駅、湘南モノレール湘南江の島駅）の利用を強く推奨します。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q4. 冬の生しらすは食べられますか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 神奈川県の生しらす漁は資源保護のため毎年1月1日〜3月10日まで禁漁期間となります。そのため1月〜3月上旬は生しらすの提供がありませんが、旨味が凝縮された「釜揚げしらす」や「しらすのかき揚げ」は冬でも通年美味しく味わえます。11月〜12月は禁漁前の生しらすに出会えるチャンスがあります。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-100 border border-stone-200 text-center space-y-3">
  <h3 class="text-base font-bold text-stone-900">神奈川・湘南・鎌倉エリアの旅情報も合わせてチェック！</h3>
  <ul class="text-xs text-stone-600 space-y-1.5 inline-block text-left">
    <li>👉 <a href="/kamakura-enoshima-shonan-hotels-guide/" class="text-sky-800 hover:text-sky-600 underline">鎌倉・江の島・湘南の絶景オーシャンビューホテルおすすめ人気特集</a></li>
    <li>👉 <a href="/winter-kanagawa-hakone-yumoto-ashinoko-shrine-fuji-stay/" class="text-sky-800 hover:text-sky-600 underline">箱根湯本・芦ノ湖の冬景色＆富士山を望む名湯旅館宿泊ガイド</a></li>
    <li>👉 <a href="/kanagawa/" class="text-sky-800 hover:text-sky-600 underline">神奈川県の温泉地・宿・旬の観光特集一覧</a></li>
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
    image: hIwamoto.hotelImageUrl,
    other_images: [
      hPrince.hotelImageUrl,
      hBreath.hotelImageUrl,
      hMetropolitan.hotelImageUrl,
      hEnoshimaHotel.hotelImageUrl
    ],
    hotel_name: `${hIwamoto.hotelName}・${hPrince.hotelName} ほか`,
    affiliate_url: hIwamoto.affiliateUrl,
    categories: ["冬のイベント特集", "イルミネーション", "湘南の宝石", "江の島", "鎌倉", "相模湾グルメ"],
    price: `¥${(hPrince.hotelMinCharge || 9489).toLocaleString()}〜`,
    rating: hBreath.reviewAverage || 4.81,
    review_count: hPrince.reviewCount || 3800,
    date: date,
    is_special_feature: true,
    keywords: [
      "湘南の宝石 2026 2027 混雑 点灯時間",
      "江の島 イルミネーション おすすめホテル",
      "岩本楼本館 宿泊記 江の島",
      "鎌倉プリンスホテル オーシャンビュー 富士山",
      "BREATH HOTEL 鵠沼海岸 スパ",
      "ホテルメトロポリタン 鎌倉 観光",
      "江の島ホテル えのすぱ 温泉"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["湘南の宝石", "江の島イルミネーション", "鎌倉観光", "岩本楼本館", "鎌倉プリンスホテル", "江の島グルメ", "冬の湘南"]
---

# ${title}

澄み渡る冬の大気の中、湘南の夜空をクリスタルガラスの輝きで包み込む関東三大イルミネーション「湘南の宝石」。

江の島シーキャンドルから360度広がる光の絨毯と、夕暮れ時に富士山のシルエットが浮かび上がる幻想的なマジックアワーは圧巻の美しさです。

冬の古都・鎌倉の静寂な社寺散策と組み合わせ、脂の乗った寒ブリや伊勢海老など相模湾の旬魚を堪能できる特等席ホテル・老舗旅館5選を現地目線で徹底解説します。

---

## ✨ 「湘南の宝石」鑑賞の極意＆冬の江ノ電・鎌倉散策テクニック

- **江の島シーキャンドル「光の大空間」:** 頂部から360度に広がるLEDの天幕。見上げると光のシャワーが降り注ぐような圧倒的スケール。
- **湘南シャンデリアの輝き:** サムエル・コッキング苑エントランスを彩るスワロフスキー製クリスタルビーズの回廊。
- **夕暮れの富士山マジックアワー:** 点灯前（16:30頃）の西の空に広がる茜色と紅富士のコントラストは冬の湘南ならではの絶景。
- **エスカーのスマート活用:** 仲見世通りから山頂まではエスカレーター「江の島エスカー」を使えば5分で楽々アクセス可能。

---

## 🏨 湘南の絶景と相模湾美食に酔いしれる！厳選ホテル＆旅館5選

### 1. 湘南・江の島の海と富士山を望む歴史の宿 岩本楼本館（神奈川県藤沢市江の島）
- **特徴:** 江の島島内唯一の老舗宿。国の登録有形文化財「ローマ風呂」とステンドグラスが美しい「弁天風呂」。点灯後も時間を気にせず散策可能。
- **宿泊目安:** 1名 ¥${(hIwamoto.hotelMinCharge || 14960).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hIwamoto.reviewAverage}（${hIwamoto.reviewCount}件）
- 👉 [岩本楼本館の空室・宿泊プランを見る](${hIwamoto.affiliateUrl})

### 2. 鎌倉プリンスホテル（神奈川県鎌倉市七里ガ浜）
- **特徴:** 七里ヶ浜の高台、全室オーシャンビュー。窓一面に相模湾・江の島・富士山を望むパノラマ絶景。海越しに煌めくシーキャンドル夜景。
- **宿泊目安:** 1名 ¥${(hPrince.hotelMinCharge || 9489).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hPrince.reviewAverage}（${hPrince.reviewCount}件）
- 👉 [鎌倉プリンスホテルの空室・宿泊プランを見る](${hPrince.affiliateUrl})

### 3. BREATH HOTEL（ブレスホテル）（神奈川県藤沢市鵠沼海岸）
- **特徴:** 鵠沼海岸フロントの隠れ家リゾート。全室に超微細気泡のマイクロバブルバスと人工温泉完備。口コミ評価4.8を誇る大人の癒やし空間。
- **宿泊目安:** 1名 ¥${(hBreath.hotelMinCharge || 13282).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hBreath.reviewAverage}（${hBreath.reviewCount}件）
- 👉 [BREATH HOTELの空室・宿泊プランを見る](${hBreath.affiliateUrl})

### 4. ホテルメトロポリタン 鎌倉（神奈川県鎌倉市小町）
- **特徴:** JR鎌倉駅徒歩2分、若宮大路沿いの好立地。洗練された和モダンの客室と充実した設備。古都散策と江ノ電トリップのプレミアム拠点。
- **宿泊目安:** 1名 ¥${(hMetropolitan.hotelMinCharge || 13575).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hMetropolitan.reviewAverage}（${hMetropolitan.reviewCount}件）
- 👉 [ホテルメトロポリタン 鎌倉の空室・宿泊プランを見る](${hMetropolitan.affiliateUrl})

### 5. 江の島ホテル（神奈川県藤沢市江の島）
- **特徴:** 江の島アイランドスパ「えのすぱ」本館直結。地下1500mから湧く強塩泉天然温泉と温水インフィニティスパプールで贅沢湯浴み。
- **宿泊目安:** 1名 ¥${(hEnoshimaHotel.hotelMinCharge || 11400).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hEnoshimaHotel.reviewAverage}（${hEnoshimaHotel.reviewCount}件）
- 👉 [江の島ホテルの空室・宿泊プランを見る](${hEnoshimaHotel.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **江の島サムエル・コッキング苑:** ${wJewel.extract || '明治時代の英国人貿易商サムエル・コッキングの庭園跡。冬はスワロフスキーが輝く湘南の宝石のメイン会場。'}
- **江の島シーキャンドル:** ${wCandle.extract || '海抜約120mの展望フロアから富士山・相模湾の360度パノラマを一望する湘南のシンボル。'}
- **江の島:** ${wEnoshima.extract || '弁財天信仰の島。仲見世通りの食べ歩きや風光明媚な絶景が広がる人気観光地。'}
- **鎌倉大仏（高徳院）:** ${wDaibutsu.extract || '青銅製で像高約11.3mを誇る国宝の阿弥陀如来坐像。冬の青空に美しく映える古都の象徴。'}

---

## 🗺️ 冬の湘南・鎌倉 1泊2日モデルコース

- **1日目:** JR鎌倉駅 ➔ 鶴岡八幡宮 ➔ 鎌倉大仏 ➔ 江ノ電で江ノ島へ ➔ 16:30 夕富士鑑賞 ➔ 17:00 湘南の宝石点灯 ➔ 宿チェックイン ➔ 相模湾地魚会席
- **2日目:** 朝の海辺散歩 ➔ 宿朝食 ➔ 新江ノ島水族館 ➔ 江の島名物サザエ丼＆しらすランチ ➔ お土産購入 ➔ 帰路

---

## ❓ よくある質問（FAQ）

**Q1. 「湘南の宝石」の開催期間と点灯時間は？**  
A. 11月中旬〜2月中旬、17:00より点灯します（土日祝・特定日は21:00まで営業）。

**Q2. 江の島の坂道移動は大変ですか？**  
A. エスカレーター「江の島エスカー」を使えば山頂まで約5分でスムーズに登れます。

**Q3. 車と電車どちらがおすすめですか？**  
A. 周辺道路が大変混雑するため、小田急線や江ノ電など公共交通機関の利用が快適です。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【神奈川・湘南江の島/鎌倉】江の島「湘南の宝石2026-2027」＆冬の古都散策完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/${slug}/)
`;

  return { postData, noteMarkdown };
};
