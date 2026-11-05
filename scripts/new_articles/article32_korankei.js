// scripts/new_articles/article32_korankei.js
module.exports = function buildArticle32(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "autumn-winter-aichi-korankei-momiji-lightup-asuke-sanage-onsen-hotels-guide";
  const title = "【愛知・豊田/足助】香嵐渓もみじまつり2026＆巴川ライトアップ完全攻略！4000本のもみじが織りなす錦秋絶景と足助の重伝建町並み・医者がすすめる天然ラドン猿投温泉を堪能する名宿5選";
  const description = "11月1日〜30日開催！東海随一の紅葉名所「香嵐渓もみじまつり」。巴川の水面に映える4,000本のもみじと待月橋の幻想夜間ライトアップ、飯盛山の黄金トンネルを徹底ガイド。重要伝統的建造物群保存地区「足助の古い町並み」の宿場町散策、名物五平餅・天然鮎の塩焼き、そして日本屈指の飲泉できる天然ラドン温泉「猿投温泉」や豊田市街の上質ホテル5選を完全網羅。";
  const date = "2026-11-05";
  const prefecture = "愛知県";
  const area = "豊田・足助・猿投";

  // ホテル抽出
  const hKinsen = hotels.find(h => h.hotelNo === 7144) || hotels[0];
  const hCastle = hotels.find(h => h.hotelNo === 19797) || hotels[1];
  const hMeitetsu = hotels.find(h => h.hotelNo === 67976) || hotels[2];
  const hPrestige = hotels.find(h => h.hotelNo === 1649) || hotels[3];
  const hRouteInn = hotels.find(h => h.hotelNo === 104590) || hotels[4];

  const wKorankei = wiki["香嵐渓"] || {};
  const wAsuke = wiki["足助町"] || {};
  const wSanage = wiki["猿投山"] || {};
  const wToyotaCity = wiki["豊田市"] || {};

  const reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-red-950 via-amber-950 to-stone-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-red-800/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-amber-300 font-extrabold text-xs tracking-wider">
      <span>🍁</span><span>2026年11月開催 香嵐渓もみじまつり＆名湯旅 現地完全ガイド</span>
    </div>
    <p class="text-xs text-amber-100 leading-relaxed">
      11月1日〜11月30日毎日点灯！巴川を染める4,000本のもみじトンネルと足助宿の古い町並み、医学が認める天然ラドン温泉の至高旅。
    </p>
  </div>
  <a href="${hKinsen.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    ♨️ 天然ラドン猿投温泉・金泉閣の空室を見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 mb-4">
  4,000本のもみじが巴川を茜色に染める！東海随一の錦秋絵巻「香嵐渓もみじまつり」
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  愛知県豊田市足助町、矢作川の支流・巴川が刻む深い渓谷に広がる「香嵐渓（こうらんけい）」。寛永11年（1634年）、香積寺（こうじゃくじ）第11世の三栄和尚が般若心経を一巻詠むごとに楓や杉の苗を一本ずつ植えたことに始まると伝わるこの渓谷には、現在約11種・4,000本ものもみじが群生しています。初秋から徐々に色づき始め、11月中旬から下旬にかけて迎える紅葉の最盛期には、飯盛山（標高254m）全体が赤・橙・黄のグラデーションに染め上がり、息を呑むような大パノラマを描き出します。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  香嵐渓のハイライトは何と言っても巴川に架かる朱塗りの「待月橋（たいげつきょう）」です。橋の上から見渡す清流と両岸に迫るもみじの枝ぶり、そして川面に鏡のように映り込む紅葉の美しさは言葉を失うほどです。11月1日から30日まで開催される「第71回 香嵐渓もみじまつり」では、日没から21時まで渓谷全体がライトアップ。昼間の鮮やかなコントラストから一転、黄金色に輝くもみじの天井と闇夜を照らす竹灯籠の明かりが融合し、まるで異世界へ迷い込んだかのような幻想的な夜間散策を愉しめます。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  渓谷のすぐ隣に広がるのは、国の重要伝統的建造物群保存地区に選定されている「足助の古い町並み」。尾張・三河と信州を結ぶ中馬街道（三州街道）の宿場町として栄えた街道沿いには、江戸後期から明治期に建てられた白壁の土蔵や黒板塀、格子戸の町家が約2キロにわたって連なります。炭火で香ばしく焼き上げられた名物の「五平餅」や「天然鮎の塩焼き」、もみじの葉を塩漬けにして揚げる伝統銘菓「もみじの衣揚げ」を食べ歩いた後は、奥三河の山あいに湧く「猿投温泉」へ。飲泉が許可された日本屈指の天然ラドン温泉で旅の疲れを芯から癒やす極上の休日が待っています。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-6">
  💡 現地ライター直伝！香嵐渓もみじまつり＆夜間ライトアップ攻略マニュアル
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-red-100 text-red-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">必見スポット＆絶景フォトポイント</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>待月橋と巴川の鏡面もみじ:</strong> 香嵐渓のシンボル。清流の緩やかな流れに色鮮やかなもみじが映り込み、昼も夜も絶好の写真撮影スポットとなります。</p>
      <p>② <strong>香積寺の山門と紅葉のトンネル:</strong> 凛とした静寂が漂う古刹。苔むした石段と頭上を覆う深紅のもみじが、京都の名刹にも劣らない歴史の深みを感じさせます。</p>
      <p>③ <strong>一の谷と巴橋からの飯盛山全景:</strong> 巴橋の上からは、飯盛山が巴川に向かってせり出すダイナミックな紅葉パノラマを一望。川原に下りて水際からのローアングルも圧巻です。</p>
      <p>④ <strong>足助宿の町並み（重伝建）散策:</strong> マンリン小路の黒板塀や足助八幡宮など、宿場町の情緒が色濃く残る路地裏巡り。夕暮れ時には軒先の提灯が灯り風情が深まります。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">渋滞回避テクニック</span>
      <h3 class="text-base font-bold text-stone-900">アクセス・時間帯・防寒のポイント</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【国道153号の大渋滞を回避する鉄則】</strong> 11月中旬〜下旬の土日祝日は、名古屋方面からの国道153号線が朝9時から昼過ぎまで大渋滞します。午前8時前までに現地駐車場に到着するか、公共交通機関（名鉄豊田市駅または愛環八草駅から直行バス「香嵐渓一の谷口」行き）を利用するのが賢明です。</p>
      <p><strong>【ライトアップ鑑賞なら16時入場がベスト】</strong> 昼の観光客が帰り始める15:30〜16:00頃に現地入りすると駐車場の空きが出やすく、17:00の点灯瞬間から夜の幻想空間までスムーズに楽しめます。</p>
      <p><strong>【渓谷沿いの底冷え対策】</strong> 巴川沿いは日没後に気温が一気に下がり、11月下旬の夜間は5度前後に冷え込みます。厚手コート、手袋、マフラー、歩きやすい防滑スニーカーでお出かけください。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  🏨 香嵐渓アクセス抜群＆名湯と美食を愉しむ！厳選ホテル・温泉宿5選
</h2>

<!-- 宿1: 猿投温泉 癒しの宿 金泉閣 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">医学が認める奇跡の湯・全国でも極めて稀少な「飲泉できる天然ラドン温泉」の隠れ家</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. しあわせ隠れ里 猿投温泉 癒しの宿 金泉閣（愛知県豊田市加納町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKinsen.reviewAverage}（${hKinsen.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKinsen.hotelImageUrl}" alt="${hKinsen.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKinsen.roomImageUrl || hKinsen.hotelImageUrl}" alt="${hKinsen.hotelName} 温泉" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 猿投山の深い自然に抱かれた「しあわせ隠れ里」に佇む一軒宿。香嵐渓へも車で約30分とアクセス良好で、紅葉狩りの前後に立ち寄る最高の癒やし拠点です。リニューアルされた洗練の館内は木の温もりに溢れています。
      </p>
      <p>
        <strong>【日本屈指の天然ラドン温泉】</strong> 地下1,200mから湧出する温泉は、飲泉許可を受けた愛知県唯一の天然ラドン温泉。「吸う・飲む・浸かる」の3つの方法で体内に取り込むことでホルミシス効果をもたらし、細胞を活性化して自然治癒力を高めるとされています。
      </p>
      <p>
        <strong>【医食同源の極上会席】</strong> 夕食には地元三河の銘柄牛や旬の山海の幸をふんだんに盛り込み、ラドン温泉水を用いて調理された滋味豊かな会席料理を提供。身体の芯から健やかになれる格別の美食体験を堪能できます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hKinsen.hotelMinCharge || 17600).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hKinsen.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: ホテルトヨタキャッスル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-red-100 text-red-900 font-black text-xs rounded-full">名鉄豊田市駅直結・上質な客室と直営レストランを誇る豊田のフラッグシップホテル</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. ホテルトヨタキャッスル（愛知県豊田市喜多町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-red-50 border border-red-300 text-red-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hCastle.reviewAverage}（${hCastle.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hCastle.hotelImageUrl}" alt="${hCastle.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hCastle.roomImageUrl || hCastle.hotelImageUrl}" alt="${hCastle.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 名鉄三河線「豊田市駅」から連絡通路で直結。駅前バスターミナルから発着する香嵐渓行き直行バスの乗り場へも徒歩1分という抜群の利便性を誇り、公共交通機関派の旅の拠点として最も選ばれているシティホテルです。
      </p>
      <p>
        <strong>【ゆとりある上質な空間】</strong> シモンズ製ベッドを完備した客室は静寂と機能性に優れ、紅葉散策で疲れた身体をゆったりと休められます。大浴場・サウナ・フィットネスジムも備え、快適なホテルステイが約束されます。
      </p>
      <p>
        <strong>【本格フレンチ＆鉄板焼ダイニング】</strong> 館内には本格フランス料理や鉄板焼きレストランが揃い、三河牛や愛知県産の新鮮食材を用いた洗練されたディナーを堪能できます。朝食の和洋ビュッフェも高評価です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hCastle.hotelMinCharge || 10000).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hCastle.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-red-700 hover:bg-red-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 名鉄トヨタホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-sky-100 text-sky-900 font-black text-xs rounded-full">駅直結徒歩1分・名鉄グループの安心感とコスパ抜群のシティステイ</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 名鉄トヨタホテル（愛知県豊田市喜多町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-sky-50 border border-sky-300 text-sky-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hMeitetsu.reviewAverage}（${hMeitetsu.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hMeitetsu.hotelImageUrl}" alt="${hMeitetsu.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hMeitetsu.roomImageUrl || hMeitetsu.hotelImageUrl}" alt="${hMeitetsu.hotelName} ロビー" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 名鉄豊田市駅に直結する絶好のロケーション。周辺には商業施設や飲食店が立ち並び、夜の食事や買い物にも一切困りません。香嵐渓へのアクセス拠点として非常に利便性が高いホテルです。
      </p>
      <p>
        <strong>【落ち着いた客室とアメニティ】</strong> 清潔感あふれる客室は高速Wi-Fiや充実のアメニティを完備。一人旅からカップル、家族連れまで多様なニーズに応えるルームタイプが揃っています。
      </p>
      <p>
        <strong>【地元食材が並ぶ朝食バイキング】</strong> ホテル内レストランでは、名古屋めしを取り入れたバラエティ豊かな朝食ビュッフェが好評。朝から元気をチャージして香嵐渓の早朝散策へと出発できます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hMeitetsu.hotelMinCharge || 4637).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hMeitetsu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-sky-700 hover:bg-sky-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 豊田プレステージホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-100 text-stone-900 font-black text-xs rounded-full">無料朝食＆リーズナブルな価格・豊田市駅徒歩4分の快適ホテル</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 豊田プレステージホテル（愛知県豊田市喜多町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-stone-50 border border-stone-300 text-stone-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hPrestige.reviewAverage}（${hPrestige.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hPrestige.hotelImageUrl}" alt="${hPrestige.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hPrestige.roomImageUrl || hPrestige.hotelImageUrl}" alt="${hPrestige.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 豊田市駅から徒歩約4分。落ち着いた通り沿いに位置し、夜も静かに休めるビジネスホテル。香嵐渓観光の宿泊費を賢く抑えたい旅行者に最適なチョイスです。
      </p>
      <p>
        <strong>【シンプルで清潔な機能美】</strong> デスクワークにも適した広めの机や加湿空気清浄機を備え、シンプルながら必要十分な設備が整っています。フロントの丁寧な接客も好評です。
      </p>
      <p>
        <strong>【宿泊者無料の朝食サービス】</strong> 毎朝焼き立てのパンや挽きたてコーヒー、スープなどが無料で提供され、手軽に朝食を済ませて出発できます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hPrestige.hotelMinCharge || 5500).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hPrestige.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: ホテルルートイン豊田陣中 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-teal-100 text-teal-900 font-black text-xs rounded-full">男女別人工温泉大浴場完備・無料平面駐車場＆バイキング朝食付き</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. ホテルルートイン豊田陣中（愛知県豊田市陣中町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-teal-50 border border-teal-300 text-teal-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hRouteInn.reviewAverage}（${hRouteInn.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hRouteInn.hotelImageUrl}" alt="${hRouteInn.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hRouteInn.roomImageUrl || hRouteInn.hotelImageUrl}" alt="${hRouteInn.hotelName} 大浴場" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 国道153号線沿いに位置し、香嵐渓方面へのドライブ拠点としてマイカー旅行者に絶大な支持を得ています。無料の大型平面駐車場を完備している点も車移動派には嬉しいポイントです。
      </p>
      <p>
        <strong>【旅の疲れを癒やす大浴場「旅人の湯」】</strong> 館内にはラジウム人工温泉大浴場を男女別に完備。香嵐渓のハイキングや古い町並み散策で冷え切った身体を手足を伸ばして温められます。
      </p>
      <p>
        <strong>【焼き立てパン無料バイキング】</strong> 宿泊客全員に提供される無料の朝食バイキングは、ヨーロッパ直輸入のヨーロピアンブレッドや温かい惣菜が並び、充実の朝時間を過ごせます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hRouteInn.hotelMinCharge || 6800).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hRouteInn.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-teal-700 hover:bg-teal-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="sightseeing" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6 leading-relaxed">
  香嵐渓もみじ狩りと合わせて訪れたい、足助・豊田エリアの歴史的名所をWikipedia公式データとともにご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-red-700 font-bold text-sm">📍 香嵐渓（こうらんけい）</span>
    </div>
    ${wKorankei.thumbnail ? `<img src="${wKorankei.thumbnail}" alt="${wKorankei.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wKorankei.extract || '愛知県豊田市足助町にある矢作川支流巴川がつくる渓谷。愛知高原国定公園の一角に位置し、約4,000本のもみじが植えられた東海地方随一の紅葉名所として知られます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-red-700 font-bold text-sm">📍 足助町・足助宿（重伝建地区）</span>
    </div>
    ${wAsuke.thumbnail ? `<img src="${wAsuke.thumbnail}" alt="${wAsuke.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wAsuke.extract || '中馬街道の宿場町として栄えた歴史的な町並み。土蔵造りや塗籠造りの町家が連続し、国の重要伝統的建造物群保存地区に選定されています。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-red-700 font-bold text-sm">📍 猿投山・猿投温泉</span>
    </div>
    ${wSanage.thumbnail ? `<img src="${wSanage.thumbnail}" alt="${wSanage.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wSanage.extract || '愛知県豊田市と瀬戸市にまたがる標高629mの山。古くから霊山として崇められ、山麓には全国的にも珍しい飲泉可能な天然ラドン温泉が湧出しています。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-red-700 font-bold text-sm">📍 豊田市街（豊田市美術館・豊田スタジアム）</span>
    </div>
    ${wToyotaCity.thumbnail ? `<img src="${wToyotaCity.thumbnail}" alt="${wToyotaCity.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wToyotaCity.extract || '愛知県北部の中核市。世界的な自動車産業の中心地でありながら、谷あいの豊かな自然と歴史的な宿場町、谷口吉生設計の豊田市美術館など多彩な文化が共存しています。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  🗺️ 香嵐渓紅葉ライトアップと古い町並み満喫 1泊2日王道モデルコース
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-red-700 text-white rounded text-xs">1日目</span>
      足助宿の重伝建散策から夕暮れの香嵐渓・幻想の巴川ライトアップへ
    </h3>
    <p class="leading-relaxed">
      12:00 名鉄豊田市駅到着 ➔ 駅直結ホテルへ荷物を預け、直行バスで香嵐渓へ（約45分） ➔ 13:00 香嵐渓一の谷口到着 ➔ 足助の古い町並み（重伝建地区）散策、マンリン小路の黒板塀や足助八幡宮参拝 ➔ 名物「五平餅」や「もみじの衣揚げ」の食べ歩き ➔ 15:00 香嵐渓へ戻り、香積寺の山門や飯盛山もみじトンネルを鑑賞 ➔ 17:00 待月橋付近で点灯カウントダウン！巴川に映る黄金ライトアップを撮影 ➔ 19:00 バスで豊田市街へ戻る（または猿投温泉へ） ➔ 三河牛ステーキディナーや温泉会席を堪能 ➔ 温泉大浴場で冷えた身体を温める。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-red-700 text-white rounded text-xs">2日目</span>
      世界が称賛する建築美と三河の自然・クラフト体験
    </h3>
    <p class="leading-relaxed">
      08:00 ホテルで地産地消の朝食ビュッフェ ➔ 09:30 チェックアウト ➔ 豊田市美術館へ移動、谷口吉生設計の名建築と現代アート鑑賞 ➔ 12:00 三河名物の鰻料理店で「ひつまぶし」ランチ ➔ 14:00 猿投温泉の立ち寄り入浴（飲泉所で源泉をテイクアウト） ➔ 16:30 名古屋駅経由で帰路へ。
    </p>
  </div>
</div>

<h2 id="comparison-table" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  📊 香嵐渓アクセス周辺 厳選5宿のスペック比較一覧
</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
      <tr>
        <th class="p-3">宿名</th>
        <th class="p-3">立地・アクセス</th>
        <th class="p-3">楽天評価</th>
        <th class="p-3">宿泊目安(1名)</th>
        <th class="p-3">風呂・温泉特徴</th>
        <th class="p-3">おすすめポイント</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-100 text-stone-700">
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">猿投温泉 金泉閣</td>
        <td class="p-3">猿投山麓・香嵐渓へ車30分</td>
        <td class="p-3 font-bold text-red-700">★ ${hKinsen.reviewAverage}</td>
        <td class="p-3">¥${(hKinsen.hotelMinCharge || 17600).toLocaleString()}〜</td>
        <td class="p-3">飲泉許可取得の天然ラドン温泉</td>
        <td class="p-3">医学が認める奇跡の湯・医食同源会席</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ホテルトヨタキャッスル</td>
        <td class="p-3">名鉄豊田市駅直結・バス停1分</td>
        <td class="p-3 font-bold text-red-700">★ ${hCastle.reviewAverage}</td>
        <td class="p-3">¥${(hCastle.hotelMinCharge || 10000).toLocaleString()}〜</td>
        <td class="p-3">大浴場・サウナ・ジム完備</td>
        <td class="p-3">豊田のフラッグシップ・直営本格フレンチ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">名鉄トヨタホテル</td>
        <td class="p-3">名鉄豊田市駅直結徒歩1分</td>
        <td class="p-3 font-bold text-red-700">★ ${hMeitetsu.reviewAverage}</td>
        <td class="p-3">¥${(hMeitetsu.hotelMinCharge || 4637).toLocaleString()}〜</td>
        <td class="p-3">客室ユニットバス</td>
        <td class="p-3">名鉄直結の抜群アクセス・高コスパ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">豊田プレステージホテル</td>
        <td class="p-3">豊田市駅徒歩4分</td>
        <td class="p-3 font-bold text-red-700">★ ${hPrestige.reviewAverage}</td>
        <td class="p-3">¥${(hPrestige.hotelMinCharge || 5500).toLocaleString()}〜</td>
        <td class="p-3">客室ユニットバス</td>
        <td class="p-3">無料朝食パンサービス・リーズナブル</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ホテルルートイン豊田陣中</td>
        <td class="p-3">国道153号沿い・香嵐渓直行</td>
        <td class="p-3 font-bold text-red-700">★ ${hRouteInn.reviewAverage}</td>
        <td class="p-3">¥${(hRouteInn.hotelMinCharge || 6800).toLocaleString()}〜</td>
        <td class="p-3">ラジウム人工温泉大浴場</td>
        <td class="p-3">無料平面駐車場・ドライブ旅行に最適</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-red-700 pb-2 my-8">
  ❓ 香嵐渓もみじまつり旅行のよくある質問（FAQ）
</h2>

<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q1. 香嵐渓の紅葉の見頃時期とライトアップの点灯時間は？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 例年の見頃は11月中旬から11月下旬（年によって12月上旬まで）。もみじまつり期間中（11月1日〜30日）は毎日日没（16:30〜17:00頃）から21:00まで夜間ライトアップが実施されます。待月橋周辺や飯盛山が一斉に黄金色に照らされ、圧倒的な美しさです。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q2. 渋滞を避けるための最もおすすめのアクセス方法は？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. マイカーの場合は午前7時台に現地駐車場に到着するか、16時頃の夕方に到着するシフトが有効です。公共交通機関を利用する場合は、名鉄豊田市駅または愛知環状鉄道八草駅から運行される直行臨時バスが便利で、渋滞専用ルートを通る区間もあるため比較的スムーズに移動できます。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q3. ペットを連れての香嵐渓散策は可能ですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. リードを着用していればペット同伴での散策が可能です。巴川沿いの遊歩道や足助宿の町並みを愛犬と一緒に楽しむ旅行者が多く見られます。ただし、もみじまつり最盛期の混雑時は待月橋周辺が非常に混み合うため、ペットカートや抱っこ紐の利用が安心です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q4. 足助の名物グルメやお土産は何がありますか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 香ばしい味噌ダレが絡む「五平餅」、巴川の清流で育った「天然鮎の塩焼き」、そして本物のもみじの葉を塩漬けにしてカリッと揚げた伝統銘菓「もみじの衣揚げ」が三大名物です。また、足助の銘醸「白老」や地味噌も人気のお土産です。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-100 border border-stone-200 text-center space-y-3">
  <h3 class="text-base font-bold text-stone-900">東海・愛知エリアの観光＆温泉特集も合わせてチェック！</h3>
  <ul class="text-xs text-stone-600 space-y-1.5 inline-block text-left">
    <li>👉 <a href="/aichi/" class="text-red-800 hover:text-red-600 underline">愛知県の温泉地・宿・旬の観光特集一覧</a></li>
    <li>👉 <a href="/features/" class="text-red-800 hover:text-red-600 underline">全国の旬の紅葉＆絶景温泉特集一覧</a></li>
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
    image: hKinsen.hotelImageUrl,
    other_images: [
      hCastle.hotelImageUrl,
      hMeitetsu.hotelImageUrl,
      hPrestige.hotelImageUrl,
      hRouteInn.hotelImageUrl
    ],
    hotel_name: `${hKinsen.hotelName}・${hCastle.hotelName} ほか`,
    affiliate_url: hKinsen.affiliateUrl,
    categories: ["秋・冬のイベント特集", "紅葉名所", "香嵐渓", "ライトアップ", "猿投温泉", "足助町"],
    price: `¥${(hMeitetsu.hotelMinCharge || 4637).toLocaleString()}〜`,
    rating: hKinsen.reviewAverage || 4.58,
    review_count: hCastle.reviewCount || 1180,
    date: date,
    is_special_feature: true,
    keywords: [
      "香嵐渓 もみじまつり 2026 見頃 ライトアップ 時間",
      "香嵐渓 渋滞 回避 駐車場",
      "足助 古い町並み 散策 五平餅",
      "猿投温泉 金泉閣 宿泊記 ラドン温泉",
      "ホテルトヨタキャッスル 宿泊 評判",
      "香嵐渓 周辺 ホテル おすすめ"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["香嵐渓", "紅葉ライトアップ", "足助の古い町並み", "猿投温泉", "金泉閣", "五平餅", "秋の愛知旅行"]
---

# ${title}

11月1日〜30日開催！東海随一の紅葉名所「香嵐渓もみじまつり」。

巴川の水面に映える4,000本のもみじと待月橋の幻想夜間ライトアップ、飯盛山の黄金トンネルを徹底ガイド。

重要伝統的建造物群保存地区「足助の古い町並み」の宿場町散策、名物五平餅・天然鮎の塩焼き、そして日本屈指の飲泉できる天然ラドン温泉「猿投温泉」や豊田市街の上質ホテル5選を完全網羅します。

---

## 💡 現地ライター直伝！香嵐渓もみじまつり＆夜間ライトアップ攻略マニュアル

- **待月橋と巴川の鏡面もみじ:** 清流に映り込む4,000本のもみじ。昼の鮮やかなコントラストと夜の幻想世界の両方を堪能。
- **11月中は毎日ライトアップ:** 日没（16:30〜17:00頃）から21:00まで点灯。待月橋周辺が黄金色に輝きます。
- **国道153号の渋滞回避:** 土日は朝8時前または16時以降の入場が狙い目。豊田市駅からの直行バス利用も賢明。
- **足助宿（重伝建地区）散策:** マンリン小路の黒板塀や足助八幡宮など、宿場町の風情と名物五平餅・鮎の塩焼きを満喫。

---

## 🏨 香嵐渓アクセス抜群＆名湯と美食を愉しむ！厳選ホテル・温泉宿5選

### 1. しあわせ隠れ里 猿投温泉 癒しの宿 金泉閣（愛知県豊田市加納町）
- **特徴:** 全国でも極めて稀少な「飲泉できる天然ラドン温泉」の隠れ宿。細胞を活性化する奇跡の湯と医食同源の旬彩会席。
- **宿泊目安:** 1名 ¥${(hKinsen.hotelMinCharge || 17600).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hKinsen.reviewAverage}（${hKinsen.reviewCount}件）
- 👉 [猿投温泉 金泉閣の空室・宿泊プランを見る](${hKinsen.affiliateUrl})

### 2. ホテルトヨタキャッスル（愛知県豊田市喜多町）
- **特徴:** 名鉄豊田市駅直結。駅前バスターミナルから香嵐渓直行バスが発着。シモンズベッドと本格フレンチを備えた豊田のフラッグシップ。
- **宿泊目安:** 1名 ¥${(hCastle.hotelMinCharge || 10000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hCastle.reviewAverage}（${hCastle.reviewCount}件）
- 👉 [ホテルトヨタキャッスルの空室・宿泊プランを見る](${hCastle.affiliateUrl})

### 3. 名鉄トヨタホテル（愛知県豊田市喜多町）
- **特徴:** 名鉄豊田市駅直結徒歩1分。名鉄グループの安心感とコスパ抜群のシティステイ。名古屋めし朝食バイキングが好評。
- **宿泊目安:** 1名 ¥${(hMeitetsu.hotelMinCharge || 4637).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hMeitetsu.reviewAverage}（${hMeitetsu.reviewCount}件）
- 👉 [名鉄トヨタホテルの空室・宿泊プランを見る](${hMeitetsu.affiliateUrl})

### 4. 豊田プレステージホテル（愛知県豊田市喜多町）
- **特徴:** 豊田市駅徒歩4分。静かな環境と宿泊者無料の焼き立てパン朝食サービス。出張や紅葉散策の拠点として高コスパ。
- **宿泊目安:** 1名 ¥${(hPrestige.hotelMinCharge || 5500).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hPrestige.reviewAverage}（${hPrestige.reviewCount}件）
- 👉 [豊田プレステージホテルの空室・宿泊プランを見る](${hPrestige.affiliateUrl})

### 5. ホテルルートイン豊田陣中（愛知県豊田市陣中町）
- **特徴:** 国道153号線沿いで香嵐渓へのドライブに最適。男女別ラジウム人工温泉大浴場と無料平面駐車場・バイキング朝食付き。
- **宿泊目安:** 1名 ¥${(hRouteInn.hotelMinCharge || 6800).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hRouteInn.reviewAverage}（${hRouteInn.reviewCount}件）
- 👉 [ホテルルートイン豊田陣中の空室・宿泊プランを見る](${hRouteInn.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **香嵐渓:** ${wKorankei.extract || '巴川がつくる渓谷。愛知高原国定公園の一角に位置し、約4,000本のもみじが植えられた東海随一の紅葉名所。'}
- **足助町・足助宿:** ${wAsuke.extract || '中馬街道の宿場町として栄えた歴史的な町並み。土蔵造りや塗籠造りの町家が連続し、国の重要伝統的建造物群保存地区に選定。'}
- **猿投山・猿投温泉:** ${wSanage.extract || '古くから霊山として崇められ、山麓には全国的にも珍しい飲泉可能な天然ラドン温泉が湧出。'}
- **豊田市街:** ${wToyotaCity.extract || '世界的な自動車産業の中心地でありながら、豊かな自然と歴史的な宿場町、谷口吉生設計の豊田市美術館が共存。'}

---

## 🗺️ 香嵐渓紅葉ライトアップと町並み満喫 1泊2日モデルコース

- **1日目:** 豊田市駅到着 ➔ 直行バスで香嵐渓へ ➔ 足助宿の古い町並み散策・五平餅ランチ ➔ 香嵐渓もみじトンネル散策 ➔ 17:00 待月橋の黄金ライトアップ鑑賞 ➔ 宿へ移動 ➔ 猿投温泉の天然ラドン湯（またはホテルディナー） ➔ 就寝
- **2日目:** 朝食 ➔ チェックアウト ➔ 豊田市美術館で名建築とアート鑑賞 ➔ 名物ひつまぶしランチ ➔ 猿投温泉で立ち寄り入浴 ➔ 帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. 香嵐渓の紅葉の見頃時期と点灯時間は？**  
A. 見頃は11月中旬〜下旬。11月1日〜30日の期間中、毎日日没〜21:00までライトアップされます。

**Q2. 渋滞を避けるコツは？**  
A. 朝8時前または16時以降の到着がおすすめ。豊田市駅からの直行臨時バス利用も便利です。

**Q3. 足助の名物グルメは？**  
A. 香ばしい味噌ダレの五平餅、天然鮎の塩焼き、もみじの衣揚げが三大名物です。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【愛知・豊田/足助】香嵐渓もみじまつり2026＆巴川ライトアップ完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/${slug}/)
`;

  return { postData, noteMarkdown };
};
