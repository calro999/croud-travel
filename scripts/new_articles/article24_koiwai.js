// scripts/new_articles/article24_koiwai.js
module.exports = function buildArticle24(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-iwate-koiwai-farm-milky-way-illumination-oujuku-shizukuishi-hotels-guide";
  const title = "【岩手・雫石/盛岡】小岩井農場「銀河農場の夜2026」＆鶯宿温泉・繋温泉の雪見露天完全攻略！東北最大級100万球の光の回廊と岩手山白銀絶景、前沢牛・雫石牛ステーキを堪能する名宿5選";
  const description = "秀峰・岩手山の麓、宮沢賢治が愛した広大な大地が100万球以上の光で満たされる東北最大級の冬の祭典「小岩井農場 銀河農場の夜」。光のトンネルや巨大ツリー、澄み切った星空と共演する冬花火の全貌を徹底解説。冷え切った体を優しく温める鶯宿温泉・盛岡つなぎ温泉の雪見露天風呂、そして岩手が世界に誇る最高峰「前沢牛」「雫石牛」の極上ステーキを堪能できる厳選宿5選をご紹介します。";
  const date = "2026-11-03";
  const prefecture = "岩手県";
  const area = "盛岡・雫石・鶯宿・つなぎ温泉";

  const hPrince = hotels.find(h => h.hotelNo === 30801) || hotels[0];
  const hMorinokaze = hotels.find(h => h.hotelNo === 9572) || hotels[1];
  const hShikitei = hotels.find(h => h.hotelNo === 56830) || hotels[2];
  const hShion = hotels.find(h => h.hotelNo === 10629) || hotels[3];
  const hAishinkan = hotels.find(h => h.hotelNo === 9552) || hotels[4];

  const wKoiwai = wiki["小岩井農場"] || {};
  const wOujuku = wiki["鶯宿温泉"] || {};
  const wIwatesan = wiki["岩手山"] || {};
  const wTsunagi = wiki["繋温泉"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-cyan-300 font-extrabold text-xs">
      <span>🌌</span><span>小岩井農場「銀河農場の夜2026」＆岩手雪見露天 最新情報</span>
    </div>
    <p class="text-xs text-cyan-100">
      11月下旬から開幕する東北屈指の光の宮殿！岩手山麓の澄んだ夜空に広がる100万球の銀河と、掛け流し名湯・極上肉会席を味わう冬の旅。
    </p>
  </div>
  <a href="${hPrince.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    🏔️ 雫石プリンスホテルの空室を見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 mb-4">
  白銀の大地に煌めく銀河鉄道！宮沢賢治のイーハトーブを照らす100万球の奇跡
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  岩手山を仰ぐ雄大な大地に広がる、日本屈指の歴史を誇る総合農場・小岩井農場。詩人・童話作家の宮沢賢治が足繁く通い、数多くの作品のインスピレーションを得たこの地が、11月下旬の初雪とともに光の銀河へと生まれ変わります。東北最大級の規模を誇るウィンターイルミネーション「銀河農場の夜（KOIWAI Winter Lights）」です。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  冬の岩手の夜は、氷点下まで気温が下がり空気が極限まで澄み渡ります。その完全な闇の中に浮かび上がる100万球を超えるLEDの輝きは、都市部のイルミネーションとは全く異なる吸い込まれるような透明感を湛えています。宮沢賢治の『銀河鉄道の夜』を想起させる全長数十メートルの光のSL回廊、光のトンネル、そして広大な放牧地をキャンバスにした巨大な光の地上絵。特定日の夜には、澄み切った冬空に打ち上げ花火が轟き、雪原と光のモニュメントを色鮮やかに染め上げます。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  厳冬の光のスペクタクルを満喫した後は、車で約15〜20分の距離にある名湯・雫石高倉温泉、鶯宿温泉、あるいは御所湖畔の盛岡つなぎ温泉へ。雪をまとった木々を眺めながら湯煙漂う雪見露天風呂に肩まで浸かれば、冷え切った体が芯からじんわりと解けていきます。夕食には、見事なサシが入った「前沢牛」や「雫石牛」の鉄板焼きステーキ、濃厚な小岩井チーズ料理に舌鼓を打つ――これぞ冬の東北を旅する最高の醍醐味です。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-6">
  🌟 「銀河農場の夜」鑑賞テクニック＆氷点下の防寒・アクセス戦略
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-cyan-100 text-cyan-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">必見の光の演出＆名物グルメ</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>光のSL「D51」と銀河鉄道:</strong> 実物大のSLモニュメントが銀河を疾走するようなダイナミックな光の演出。スチームの煙とライトのコラボレーションは圧倒的なフォトジェニック空間です。</p>
      <p>② <strong>全長100mの光のトンネル:</strong> アーチ状に張り巡らされたシャンパンゴールドとブルーのLED。歩行者の動線に沿って光が流れるような幻想的な体験が楽しめます。</p>
      <p>③ <strong>巨大クリスマスツリーと花火:</strong> 高さ十数メートルの天然モミの木を使った光のツリー。土曜日や年末年始の19:30頃から打ち上げられる冬花火は必見です。</p>
      <p>④ <strong>温かい農場名物グルメ:</strong> 園内レストランや屋台で味わう「小岩井牛のビーフシチュー」「特製チーズフォンデュ」、温かいホットミルクで冷えた体を内側から温められます。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-slate-100 text-slate-800 font-extrabold text-xs rounded-lg">アクセス＆防寒</span>
      <h3 class="text-base font-bold text-stone-900">盛岡駅発着ライナーと極寒装備</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【氷点下5度〜10度への完全防寒】</strong> 雫石の夜間は平気で氷点下に達します。厚手のダウンコート、裏起毛パンツ、耳まで覆うニット帽、手袋、マフラーに加え、靴底に貼るカイロが必須です。</p>
      <p><strong>【足元の雪道対策】</strong> 園内の通路は圧雪や凍結により非常に滑りやすくなります。革靴やスニーカーは厳禁。溝の深いスノーブーツや防寒防水ブーツを着用してください。</p>
      <p><strong>【盛岡駅からのアクセス】</strong> 期間中の金土日祝はJR盛岡駅前バスターミナル（10番のりば）から小岩井農場まきば園直行の臨時路線バスが運行されます。マイカーの場合は完全なスタッドレスタイヤ装着が前提です。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  🏨 雪見露天風呂と前沢牛を味わう！雫石・鶯宿・つなぎ温泉の厳選宿5選
</h2>

<!-- 宿1: 雫石プリンスホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-cyan-100 text-cyan-900 font-black text-xs rounded-full">雫石スキー場直結・岩手山を望む雫石高倉温泉の雪見露天風呂</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 雫石プリンスホテル（岩手県岩手郡雫石町高倉温泉）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hPrince.reviewAverage}（${hPrince.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hPrince.hotelImageUrl}" alt="${hPrince.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hPrince.roomImageUrl || hPrince.hotelImageUrl}" alt="${hPrince.hotelName} 露天風呂雪景色" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        雄大な岩手山の南麓に広がる雫石スキー場に隣接した大型高原リゾート。ホテル自慢の「雫石高倉温泉」露天風呂は、池に張り出すように造られた野趣あふれる湯船で、夜にはライトアップされた雪景色と満天の星空を眺めながらの湯浴みが叶います。小岩井農場まで車で約20分とアクセス良好で、夕食は岩手県産食材をふんだんに取り入れたディナーブッフェや和洋コースが好評です。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hPrince.address1}${hPrince.address2}</div>
        <div><strong>アクセス:</strong> JR雫石駅よりタクシーまたは無料送迎バス約20分、東北道盛岡ICより車約30分</div>
        <div><strong>温泉特徴:</strong> ナトリウム-塩化物泉（保温効果が高く湯冷めしにくい良質な温泉）</div>
        <div><strong>レジャー拠点:</strong> 目の前がパウダースノーの雫石スキー場ゲレンデ</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hPrince.hotelMinCharge || 5746).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hPrince.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルで雫石プリンスホテルのプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: ホテル森の風 鶯宿 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-cyan-100 text-cyan-900 font-black text-xs rounded-full">北東北屈指のエンターテインメント宿・岩手山を望む空中露天風呂</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. フラワー＆ガーデン ホテル森の風鶯宿（岩手県岩手郡雫石町鶯宿）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hMorinokaze.reviewAverage}（${hMorinokaze.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hMorinokaze.hotelImageUrl}" alt="${hMorinokaze.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hMorinokaze.roomImageUrl || hMorinokaze.hotelImageUrl}" alt="${hMorinokaze.hotelName} 空中露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        開湯450年の歴史を誇る鶯宿温泉の高台にそびえる大型温泉ホテル。最上階に位置する空中露天風呂からは、雪化粧した岩手山と奥羽山脈の大パノラマを一望できます。館内には毎夜開催される太鼓ショーや民謡などのお祭り広場があり、旅情を盛り上げます。夕食は特選前沢牛や雫石牛を贅沢に使った創作和食会席を心ゆくまで味わえます。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hMorinokaze.address1}${hMorinokaze.address2}</div>
        <div><strong>アクセス:</strong> JR盛岡駅西口より無料送迎バス運行（約40分・要予約）</div>
        <div><strong>名物風呂:</strong> 奥羽山脈を見晴らすパノラマ空中大露天風呂＆大浴場</div>
        <div><strong>料理自慢:</strong> 最高級前沢牛ステーキや三陸海の幸を盛り込んだ豪華会席</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hMorinokaze.hotelMinCharge || 6600).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hMorinokaze.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルでホテル森の風鶯宿のプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 盛岡つなぎ温泉 四季亭 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-cyan-100 text-cyan-900 font-black text-xs rounded-full">御所湖畔の数寄屋造り料亭旅館・掛け流し美肌硫黄泉と前沢牛懐石</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 盛岡つなぎ温泉 四季亭（岩手県盛岡市繋字湯の舘）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hShikitei.reviewAverage}（${hShikitei.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hShikitei.hotelImageUrl}" alt="${hShikitei.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hShikitei.roomImageUrl || hShikitei.hotelImageUrl}" alt="${hShikitei.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        つなぎ温泉の閑静な奥座敷に佇む、純和風数寄屋造りの名門料理旅館。わずか全19室のプライベートな空間で、源義家が愛馬を石に繋いで入浴させたという伝説を持つ名湯「つなぎ温泉」の濃厚な硫黄泉を100%掛け流しで堪能できます。ほんのりと香る硫黄の香りと柔らかな肌触りは美肌の湯としても名高く、お部屋でいただく前沢牛のフィレステーキ会席は至高の極みです。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hShikitei.address1}${hShikitei.address2}</div>
        <div><strong>アクセス:</strong> JR盛岡駅よりバス約30分（つなぎ温泉案内所下車徒歩2分）</div>
        <div><strong>源泉特徴:</strong> アルカリ性単純硫黄温泉（pH9.1のトロトロ美肌の湯）</div>
        <div><strong>美食懐石:</strong> 岩手県産前沢牛と三陸直送の海の幸を盛り込んだ本格和懐石</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hShikitei.hotelMinCharge || 14300).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hShikitei.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルで四季亭のプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 盛岡つなぎ温泉 ホテル紫苑 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-cyan-100 text-cyan-900 font-black text-xs rounded-full">全室レイクビュー・御所湖と岩手山を望む名物「南部曲り家の湯」</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 盛岡つなぎ温泉 ホテル紫苑（岩手県盛岡市繋字湯の舘）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hShion.reviewAverage}（${hShion.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hShion.hotelImageUrl}" alt="${hShion.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hShion.roomImageUrl || hShion.hotelImageUrl}" alt="${hShion.hotelName} 露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        御所湖の畔に堂々と佇み、全客室の窓から静かな湖面と白銀の岩手山をパノラマで望む大型温泉旅館。名物の露天風呂「南部曲り家の湯」は、岩手の伝統的な曲り家をモチーフにした檜の温もりあふれる湯処で、雪景色を眺めながら自家源泉掛け流しの湯を堪能できます。姉妹館「愛真館」の多彩なお風呂も無料で湯めぐりできるサービスが大好評です。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hShion.address1}${hShion.address2}</div>
        <div><strong>アクセス:</strong> JR盛岡駅西口より無料シャトルバス運行約25分（定時運行）</div>
        <div><strong>お風呂めぐり:</strong> 展望大浴場「ひとりじめの湯」＆露天「南部曲り家の湯」</div>
        <div><strong>お食事:</strong> 岩手牛や短角牛のすき焼き・せいろ蒸しが選べる季節の和食会席</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hShion.hotelMinCharge || 8800).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hShion.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルでホテル紫苑のプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 盛岡つなぎ温泉 愛真館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-cyan-100 text-cyan-900 font-black text-xs rounded-full">縄文露天風呂をはじめとする全18種の多彩なお風呂巡り宿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 盛岡つなぎ温泉 愛真館（岩手県盛岡市繋字塗沢）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hAishinkan.reviewAverage}（${hAishinkan.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hAishinkan.hotelImageUrl}" alt="${hAishinkan.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hAishinkan.roomImageUrl || hAishinkan.hotelImageUrl}" alt="${hAishinkan.hotelName} 縄文露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-4">
      <p class="text-xs md:text-sm text-stone-700 leading-relaxed">
        つなぎ温泉の中心に位置し、古代の縄文時代をイメージしたユニークな「縄文露天風呂」や立ち湯、打たせ湯、檜風呂など館内だけで18種ものお風呂が楽しめる温泉自慢の宿。美肌成分を豊富に含む天然温泉にじっくり浸かって旅の疲れを癒やせます。夕食は岩手の郷土の味覚を散りばめた季節の和食膳や、ファミリーにも嬉しいバイキングプランが用意されています。
      </p>
      <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
        <div><strong>住所:</strong> ${hAishinkan.address1}${hAishinkan.address2}</div>
        <div><strong>アクセス:</strong> JR盛岡駅西口より無料シャトルバス運行約25分（ホテル紫苑と共同運行）</div>
        <div><strong>温泉バラエティ:</strong> 18種類の多彩な湯船で楽しむ本格温泉湯めぐり</div>
        <div><strong>郷土グルメ:</strong> ひっつみ汁や前沢牛入り鍋など岩手ならではの滋味</div>
        <div><strong>宿泊料金目安:</strong> 1名あたり ¥${(hAishinkan.hotelMinCharge || 8800).toLocaleString()}〜（2名1室利用時）</div>
      </div>
      <div class="pt-2 flex flex-wrap gap-3">
        <a href="${hAishinkan.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xs rounded-xl shadow transition">
          楽天トラベルで愛真館のプラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="wiki-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6">
  小岩井農場周辺の自然と文化遺産。冬の白銀に輝くスポットの背景を解説します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <!-- 観光地1: 小岩井農場 -->
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
    <div class="flex items-center justify-between border-b border-stone-100 pb-2">
      <h3 class="font-bold text-stone-900 text-sm md:text-base">小岩井農場（国指定重要文化財群）</h3>
      <span class="text-xs text-cyan-700 font-extrabold">歴史ある日本屈指の農場</span>
    </div>
    ${wKoiwai.thumbnail ? `<img src="${wKoiwai.thumbnail}" alt="小岩井農場" class="w-full h-44 object-cover rounded-xl" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wKoiwai.extract || '岩手県岩手郡雫石町と滝沢市にまたがる民間総合農場。1891年創業。21棟の建造物が国指定重要文化財に指定され、冬期は銀河農場の夜イルミネーションで賑わいます。'}
    </p>
  </div>

  <!-- 観光地2: 岩手山 -->
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
    <div class="flex items-center justify-between border-b border-stone-100 pb-2">
      <h3 class="font-bold text-stone-900 text-sm md:text-base">岩手山（南部片富士）</h3>
      <span class="text-xs text-cyan-700 font-extrabold">標高2,038mの秀峰</span>
    </div>
    ${wIwatesan.thumbnail ? `<img src="${wIwatesan.thumbnail}" alt="岩手山" class="w-full h-44 object-cover rounded-xl" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wIwatesan.extract || '岩手県の最高峰であり、奥羽山脈北部の成層火山。富士山に似た端正な山容から「南部片富士」と呼ばれ、冬は一面の純白に覆われた神々しい姿を見せます。'}
    </p>
  </div>

  <!-- 観光地3: 鶯宿温泉 -->
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
    <div class="flex items-center justify-between border-b border-stone-100 pb-2">
      <h3 class="font-bold text-stone-900 text-sm md:text-base">鶯宿温泉（開湯450年の古湯）</h3>
      <span class="text-xs text-cyan-700 font-extrabold">鶯が傷を癒やした伝説</span>
    </div>
    ${wOujuku.thumbnail ? `<img src="${wOujuku.thumbnail}" alt="鶯宿温泉" class="w-full h-44 object-cover rounded-xl" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wOujuku.extract || '雫石町にある歴史ある温泉地。一羽の鶯が川沿いの湯だまりで傷を癒やしていたことから名付けられたと伝わり、豊富な湧出量と素朴な温泉街の風情が魅力です。'}
    </p>
  </div>

  <!-- 観光地4: 盛岡つなぎ温泉 -->
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
    <div class="flex items-center justify-between border-b border-stone-100 pb-2">
      <h3 class="font-bold text-stone-900 text-sm md:text-base">盛岡つなぎ温泉（盛岡の奥座敷）</h3>
      <span class="text-xs text-cyan-700 font-extrabold">御所湖畔の美肌硫黄泉</span>
    </div>
    ${wTsunagi.thumbnail ? `<img src="${wTsunagi.thumbnail}" alt="盛岡つなぎ温泉" class="w-full h-44 object-cover rounded-xl" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wTsunagi.extract || '盛岡市の西部に位置し、御所湖に面した温泉街。平安時代に源義家が愛馬を石に繋ぎ止めて湯浴みしたことが起源とされ、pH9前後のアルカリ性硫黄泉が特徴です。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  🗺️ 冬の小岩井農場＆雫石・つなぎ温泉 1泊2日満喫モデルコース
</h2>
<div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-4 text-xs md:text-sm text-stone-700 leading-relaxed">
  <div class="border-b border-stone-200 pb-3">
    <strong class="text-cyan-900 text-sm">【1日目: 盛岡三大麺ランチから小岩井農場イルミネーションへ】</strong>
    <p class="mt-1">
      午前11:30 東北新幹線で盛岡駅到着 ➔ 駅前通りで名物「盛岡冷麺」または「じゃじゃ麺」のランチ ➔ 14:00 盛岡駅前バスターミナルからつなぎ温泉・雫石方面行きバス乗車 ➔ 宿へチェックインし荷物を置いて一息 ➔ 16:30 宿の送迎や路線バスで小岩井農場まきば園へ ➔ 17:00「銀河農場の夜」点灯！光のSL回廊や100mトンネルを散策 ➔ レストランで熱々の小岩井チーズフォンデュ ➔ 19:30 冬花火打ち上げ鑑賞 ➔ 20:30 宿に戻り雪見露天風呂で冷えた体を芯から解きほぐす
    </p>
  </div>
  <div>
    <strong class="text-cyan-900 text-sm">【2日目: 雪景色パノラマと盛岡レトロ散策】</strong>
    <p class="mt-1">
      朝07:30 朝日に輝く岩手山と御所湖の雪景色を眺めながらの朝露天風呂 ➔ 地元食材を活かした和朝食 ➔ 10:00 チェックアウト後、盛岡市内へ移動 ➔ レトロな赤レンガ造りの「岩手銀行赤レンガ館」や中津川沿いを散策 ➔ 盛岡町家カフェでひと休み ➔ 盛岡駅で銘菓「かもめの玉子」や南部鉄器、小岩井農場特製バターを購入し新幹線で帰路へ
    </p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q1. 小岩井農場「銀河農場の夜」の開催期間と点灯時間は？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 例年11月下旬から翌年1月上旬まで開催されます。点灯時間は17:00〜20:00（土曜日や特定日は20:30または21:00まで営業延長）。花火打ち上げ日は土曜日の19:30頃が通例です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q2. 冬の雫石・盛岡へ車で行く場合、スタッドレスタイヤは必須ですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 必須です。11月下旬以降は降雪と激しい路面凍結が発生します。4WD車かつ高性能スタッドレスタイヤを装備したレンタカーを利用するか、新幹線＋路線バス・ホテルの無料シャトルバスを利用するのが最も安全です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q3. 会場に暖房の効いた休憩所やレストランはありますか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 園内には「山望館」などの屋内レストランや無料休憩所、温かい売店コーナーが複数用意されており、寒さに耐えられなくなっても室内で温かいドリンクや料理を楽しみながら休憩できます。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q4. つなぎ温泉と鶯宿温泉はどちらがおすすめですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 「つなぎ温泉」は盛岡駅から近く、御所湖のレイクビューとpH9前後のツルツルした硫黄泉が魅力です。「鶯宿温泉」はより山あいに位置し、450年の歴史ある湯治場情緒と高台からの雄大な山岳パノラマが楽しめます。どちらも小岩井農場へのアクセスは車で約15〜20分と極めて良好です。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-100 border border-stone-200 text-center space-y-3">
  <h3 class="text-base font-bold text-stone-900">岩手・東北エリアの温泉＆雪景色特集も合わせてチェック！</h3>
  <ul class="text-xs text-stone-600 space-y-1.5 inline-block text-left">
    <li>👉 <a href="/hanamaki-onsen-rose-bath-kenji-guide/" class="text-cyan-800 hover:text-cyan-600 underline">花巻温泉郷のバラ風呂＆宮沢賢治ゆかりの文学散歩名宿ガイド</a></li>
    <li>👉 <a href="/winter-sendai-hikari-no-pageant-akiu-onsen-hotels-guide/" class="text-cyan-800 hover:text-cyan-600 underline">SENDAI光のページェント＆秋保・作並温泉完全攻略特集</a></li>
    <li>👉 <a href="/iwate/" class="text-cyan-800 hover:text-cyan-600 underline">岩手県の人気温泉宿・前沢牛グルメ完全まとめ</a></li>
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
    image: hPrince.hotelImageUrl,
    other_images: [
      hMorinokaze.hotelImageUrl,
      hShikitei.hotelImageUrl,
      hShion.hotelImageUrl,
      hAishinkan.hotelImageUrl
    ],
    hotel_name: `${hPrince.hotelName}・${hMorinokaze.hotelName} ほか`,
    affiliate_url: hPrince.affiliateUrl,
    categories: ["冬のイベント特集", "小岩井農場", "銀河農場の夜", "鶯宿温泉", "つなぎ温泉", "前沢牛"],
    price: `¥${(hPrince.hotelMinCharge || 5746).toLocaleString()}〜`,
    rating: hShikitei.reviewAverage || 4.6,
    review_count: hMorinokaze.reviewCount || 2800,
    date: date,
    is_special_feature: true,
    keywords: [
      "小岩井農場 イルミネーション 2026 点灯時間",
      "銀河農場の夜 花火 バス 盛岡駅",
      "雫石プリンスホテル 高倉温泉 スキー場",
      "ホテル森の風鶯宿 口コミ 楽天トラベル",
      "つなぎ温泉 四季亭 前沢牛 宿泊記",
      "ホテル紫苑 南部曲り家の湯",
      "岩手 雪見露天風呂 おすすめ宿"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["小岩井農場", "銀河農場の夜", "イルミネーション", "雫石プリンスホテル", "鶯宿温泉", "つなぎ温泉", "前沢牛", "岩手旅行"]
---

# ${title}

秀峰・岩手山の麓、宮沢賢治が愛した広大な大地が100万球以上の光で満たされる東北最大級の冬の祭典「小岩井農場 銀河農場の夜」。

光のトンネルや巨大ツリー、澄み切った星空と共演する冬花火の全貌を徹底解説。

冷え切った体を優しく温める鶯宿温泉・盛岡つなぎ温泉の雪見露天風呂、そして岩手が世界に誇る最高峰「前沢牛」「雫石牛」の極上ステーキを堪能できる厳選宿5選をご紹介します。

---

## 🌟 「銀河農場の夜」鑑賞テクニック＆氷点下の防寒・アクセス戦略

- **光のSL「D51」と銀河鉄道:** 宮沢賢治の童話の世界が広がる大迫力の光の演出。
- **100mの光のトンネル:** シャンパンゴールドとブルーのLEDが頭上を覆う幻想空間。
- **冬の夜空を焦がす花火:** 週末に開催される澄んだ夜空の打ち上げ花火とツリーの競演。
- **盛岡駅直通臨時バス:** 週末運行のアクセスバスで雪道の運転不要でスムーズに移動可能。

---

## 🏨 雪見露天風呂と前沢牛を味わう！雫石・鶯宿・つなぎ温泉の厳選宿5選

### 1. 雫石プリンスホテル（岩手県雫石町）
- **特徴:** 雫石スキー場直結。岩手山を望む雫石高倉温泉の雪見露天風呂。星空を見上げながらの開放的な湯浴み。
- **宿泊目安:** 1名 ¥${(hPrince.hotelMinCharge || 5746).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hPrince.reviewAverage}（${hPrince.reviewCount}件）
- 👉 [雫石プリンスホテルの空室・宿泊プランを見る](${hPrince.affiliateUrl})

### 2. フラワー＆ガーデン ホテル森の風鶯宿（岩手県雫石町）
- **特徴:** 鶯宿温泉の高台に位置する北東北屈指のリゾート。岩手山と奥羽山脈を一望するパノラマ空中露天風呂と毎夜の祭り広場。
- **宿泊目安:** 1名 ¥${(hMorinokaze.hotelMinCharge || 6600).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hMorinokaze.reviewAverage}（${hMorinokaze.reviewCount}件）
- 👉 [ホテル森の風鶯宿の空室・宿泊プランを見る](${hMorinokaze.affiliateUrl})

### 3. 盛岡つなぎ温泉 四季亭（岩手県盛岡市繋）
- **特徴:** 御所湖畔の閑静な数寄屋造り料亭旅館。全19室の静寂、アルカリ性単純硫黄泉100%掛け流しと極年前沢牛懐石。
- **宿泊目安:** 1名 ¥${(hShikitei.hotelMinCharge || 14300).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hShikitei.reviewAverage}（${hShikitei.reviewCount}件）
- 👉 [盛岡つなぎ温泉 四季亭の空室・宿泊プランを見る](${hShikitei.affiliateUrl})

### 4. 盛岡つなぎ温泉 ホテル紫苑（岩手県盛岡市繋）
- **特徴:** 全室レイクビュー。御所湖と岩手山を望む名物露天風呂「南部曲り家の湯」と多彩な源泉掛け流し湯船。
- **宿泊目安:** 1名 ¥${(hShion.hotelMinCharge || 8800).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hShion.reviewAverage}（${hShion.reviewCount}件）
- 👉 [ホテル紫苑の空室・宿泊プランを見る](${hShion.affiliateUrl})

### 5. 盛岡つなぎ温泉 愛真館（岩手県盛岡市繋）
- **特徴:** 縄文露天風呂をはじめとする全18種の多彩なお風呂巡りが楽しい宿。郷土色豊かなバイキングや和食膳。
- **宿泊目安:** 1名 ¥${(hAishinkan.hotelMinCharge || 8800).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hAishinkan.reviewAverage}（${hAishinkan.reviewCount}件）
- 👉 [盛岡つなぎ温泉 愛真館の空室・宿泊プランを見る](${hAishinkan.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **小岩井農場:** ${wKoiwai.extract || '岩手山麓に広がる日本有数の民間総合農場。重要文化財建造物群と銀河農場の夜が名物。'}
- **岩手山:** ${wIwatesan.extract || '標高2,038m、南部片富士と称される秀峰。雪景色の荘厳な稜線は岩手のシンボル。'}
- **鶯宿温泉:** ${wOujuku.extract || '開湯450年の歴史を持つ名湯。豊富な湯量と山間の静けさが魅力の温泉郷。'}
- **盛岡つなぎ温泉:** ${wTsunagi.extract || '御所湖畔に広がる盛岡の奥座敷。pH9前後の柔らかな美肌硫黄泉が湧出。'}

---

## 🗺️ 冬の小岩井農場＆雫石 1泊2日モデルコース

- **1日目:** 東北新幹線盛岡駅 ➔ 盛岡冷麺ランチ ➔ つなぎ/鶯宿温泉宿チェックイン ➔ 小岩井農場へ ➔ 17:00「銀河農場の夜」鑑賞 ➔ 19:30 冬花火 ➔ 宿で雪見露天＆前沢牛
- **2日目:** 朝露天風呂 ➔ 地元和朝食 ➔ 盛岡市内レトロ建築散策（赤レンガ館） ➔ 盛岡駅でお土産購入 ➔ 新幹線で帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. 銀河農場の夜の開催時期は？**  
A. 11月下旬〜1月上旬、毎日17:00〜20:00（特定日は20:30または21:00まで営業）です。

**Q2. 冬の防寒着はどうすれば良いですか？**  
A. 氷点下に達するため、ダウンコート・防寒ブーツ・ニット帽・手袋・足元カイロを完全装備してください。

**Q3. 車のタイヤ規制はありますか？**  
A. 11月下旬以降は積雪凍結が常態化するためスタッドレスタイヤ必須です。盛岡駅からの臨時バスも便利です。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【岩手・雫石/盛岡】小岩井農場「銀河農場の夜2026」＆鶯宿温泉・繋温泉の雪見露天完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/${slug}/)
`;

  return { postData, noteMarkdown };
};
