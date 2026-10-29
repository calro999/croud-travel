// scripts/articles/article1_saga.js
module.exports = function buildArticle1(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "autumn-saga-balloon-karatsukunchi-hotels-guide";
  const title = "【佐賀・唐津】2026佐賀インターナショナルバルーンフェスタ＆唐津くんち完全攻略！秋空の熱気球と伝統曳山絵巻を特等席で楽しむ厳選名宿5選";
  const description = "11月上旬に佐賀県で開催されるアジア最大級の熱気球競技大会「佐賀インターナショナルバルーンフェスタ」と、ユネスコ無形文化遺産「唐津くんち」。早朝7時の一斉離陸や夜間係留ノクチューン、勇壮な14台の曳山巡行をストレスなく満喫するためのアクセス攻略法と、唐津・武雄温泉・古湯温泉の実力派厳選宿5選を徹底解説。";
  const date = "2026-10-29";
  const prefecture = "佐賀県";
  const area = "佐賀・唐津・武雄";

  // ホテル情報
  const hKaratsu = hotels.find(h => h.hotelNo === 52129) || hotels[0];
  const hMifuneyama = hotels.find(h => h.hotelNo === 13417) || hotels[1];
  const hOncri = hotels.find(h => h.hotelNo === 40343) || hotels[2];
  const hNewOtani = hotels.find(h => h.hotelNo === 5830) || hotels[3];
  const hKyotoya = hotels.find(h => h.hotelNo === 5552) || hotels[4];

  // Wiki情報
  const wBalloon = wiki["佐賀インターナショナルバルーンフェスタ"] || {};
  const wKunchi = wiki["唐津くんち"] || {};
  const wCastle = wiki["唐津城"] || {};
  const wTakeo = wiki["武雄温泉"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-sky-900 via-indigo-900 to-slate-900 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-amber-300 font-extrabold text-xs">
      <span>🎈</span><span>2026年11月開催 佐賀バルーンフェスタ＆唐津くんち速報</span>
    </div>
    <p class="text-xs text-stone-200">
      早朝7時の一斉離陸と夜間係留、唐津くんちの西の浜曳き込み。周辺の宿泊施設は毎年予約争奪戦となります。空室状況はお早めにチェックを。
    </p>
  </div>
  <a href="${hKaratsu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    ✨ 唐津シーサイドホテルの空室・宿泊プランをチェック →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">
  大空を埋め尽くす100機の熱気球と、300年の熱気が渦巻く漆の曳山
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  11月上旬、佐賀の平野は一年で最も色鮮やかで力強い生命力に満たされます。嘉瀬川河川敷の広大な空へと、世界各国から集まった100機を超える熱気球が一斉に飛び立つ「佐賀インターナショナルバルーンフェスタ」。そして玄界灘に面した城下町・唐津では、笛や太鼓、鐘の囃子とともに「エンヤ、エンヤ」「ヨイサ、ヨイサ」の掛け声が地響きのように街を揺るがす「唐津くんち」。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  静寂の秋空に浮かぶ色とりどりの巨船と、熱気あふれる夜祭りのコントラスト。この2大イベントを快適に巡るためには、早朝のアクセス動線を押さえた宿選びと、歩き疲れた身体を芯から癒やす極上の温泉宿の確保が欠かせません。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-6">
  🎪 2026年11月開催！佐賀バルーンフェスタ＆唐津くんちの攻略ポイント
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <!-- バルーンフェスタ -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-sky-100 text-sky-800 font-extrabold text-xs rounded-lg">大空の祭典</span>
      <h3 class="text-base font-bold text-stone-900">佐賀インターナショナルバルーンフェスタ</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【開催時期】</strong> 11月上旬（例年11月1日〜5日前後）</p>
      <p><strong>【メイン会場】</strong> 佐賀市嘉瀬川河川敷（JR臨時駅「バルーンさが駅」直結）</p>
      <p><strong>【必見の瞬間】</strong>
        <br />① <strong>早朝の一斉離陸（7:00〜）:</strong> 朝霧が立ち込める平野から、朝日を浴びて約100機の気球が空へと舞い上がる圧巻の光景。風が穏やかな朝一番がもっとも美しく飛び立ちます。
        <br />② <strong>夜間係留 ラ・モンゴルフィエ・ノクチューン:</strong> 暗闇に並んだ気球がバーナーの炎でライトアップされ、フィナーレの花火とともに幻想的な夜を創り出します。
      </p>
      <p><strong>【現地交通のアドバイス】</strong> 周辺道路は早朝5時半から激しい渋滞が発生します。車は佐賀駅周辺やパーク＆ライド駐車場に置き、JR長崎本線の臨時列車を利用するのが鉄則です。</p>
    </div>
  </div>

  <!-- 唐津くんち -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-red-100 text-red-800 font-extrabold text-xs rounded-lg">ユネスコ無形文化遺産</span>
      <h3 class="text-base font-bold text-stone-900">唐津神社秋季例大祭「唐津くんち」</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【開催時期】</strong> 毎年11月2日（宵ヤマ）・3日（御旅所神幸）・4日（翌日祭）</p>
      <p><strong>【メイン会場】</strong> 佐賀県唐津市 唐津神社および旧城下町一帯</p>
      <p><strong>【必見の瞬間】</strong>
        <br />① <strong>11月2日夜 宵ヤマ:</strong> 提灯の明かりに照らされた14台の漆塗り曳山（赤獅子・青獅子・浦島太郎・鯛など）が、夜の城下町を幻想的に巡行。
        <br />② <strong>11月3日 御旅所神幸（西の浜曳き込み）:</strong> 重さ数トンの曳山が車輪を砂地に埋もれさせながら、曳子たちの渾身の力で砂浜を駆け抜ける最大のクライマックス。
      </p>
      <p><strong>【現地グルメ】</strong> くんち期間中の唐津家庭に伝わる「アラ（クエ）料理」や、呼子直送のイカの活造りは絶対に味わいたい名物です。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-8">
  🏨 バルーン＆くんち巡りを極める！厳選おすすめ名宿5選
</h2>

<!-- 宿1: 唐津シーサイドホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">唐津ステイの最高峰</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 唐津シーサイドホテル（佐賀県唐津市）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKaratsu.reviewAverage}（${hKaratsu.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKaratsu.hotelImageUrl}" alt="${hKaratsu.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKaratsu.roomImageUrl || hKaratsu.hotelImageUrl}" alt="${hKaratsu.hotelName} 客室イメージ" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">唐津湾と日本三大松原「虹の松原」を一望するオーシャンビューリゾート</p>
      <p>東館最上階に備えられた天然温泉スパラウンジとインフィニティ露天風呂からは、青く広がる唐津湾と高島が一望のもとに広がります。唐津くんちの巡行エリアへのアクセスも良く、お祭りの熱気を体感した後は波音に包まれる静寂の温泉でリフレッシュ。夕食は呼子港直送の透明な「イカの活造り」や、きめ細やかなサシがとろける佐賀牛のステーキを贅沢に味わえます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hKaratsu.address1}${hKaratsu.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hKaratsu.access}</p>
        <p><strong>【駐車場】</strong> ${hKaratsu.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hKaratsu.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hKaratsu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ 唐津シーサイドホテルの最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿2: 御船山楽園ホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">15万坪の紅葉ライトアップとサウナシュラン日本一</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 武雄温泉 御船山楽園ホテル（佐賀県武雄市）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hMifuneyama.reviewAverage}（${hMifuneyama.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hMifuneyama.hotelImageUrl}" alt="${hMifuneyama.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hMifuneyama.roomImageUrl || hMifuneyama.hotelImageUrl}" alt="${hMifuneyama.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">御船山の断崖を背に広がる秋の錦秋庭園と、チームラボの幻想アート空間</p>
      <p>11月上旬から始まる「御船山楽園 紅葉まつり」では、15万坪の広大な敷地が日本最大級のライトアップで照らされ、池に映る逆さ紅葉の幽玄な美しさに息をのみます。館内の大浴場「らかんの湯」はサウナシュラン3年連続グランプリを獲得し殿堂入りを果たした伝説の名湯。薬草スチームや薪サウナ、武雄温泉の源泉水風呂でととのった後は、佐賀の旬の恵みを凝縮した和会席に舌鼓を打てます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hMifuneyama.address1}${hMifuneyama.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hMifuneyama.access}</p>
        <p><strong>【駐車場】</strong> ${hMifuneyama.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hMifuneyama.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hMifuneyama.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ 武雄温泉 御船山楽園ホテルの最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿3: 古湯温泉 ONCRI -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">嘉瀬川上流の美肌ぬる湯リゾート</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 古湯温泉 ＯＮＣＲＩ／おんくり（佐賀市富士町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hOncri.reviewAverage}（${hOncri.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hOncri.hotelImageUrl}" alt="${hOncri.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hOncri.roomImageUrl || hOncri.hotelImageUrl}" alt="${hOncri.hotelName} 館内" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">ぬる湯に浸かり時間を忘れる、山峡のスタイリッシュジャパニーズモダン宿</p>
      <p>バルーンフェスタが開催される嘉瀬川の上流に位置し、車で約30分という好立地にありながら、喧騒を完全に遮断した山あいの静寂に包まれます。38度の源泉にじっくりと浸かる古湯温泉の「ぬる湯」は、長湯しても身体に負担がなく、肌がしっとりと潤う極上の湯心地。館内のレストラン「セバストポール」では地元野菜と有明海の恵みをフレンチ＆イタリアンの技法で仕立てるナチュラルな美食が堪能できます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hOncri.address1}${hOncri.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hOncri.access}</p>
        <p><strong>【駐車場】</strong> ${hOncri.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hOncri.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hOncri.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ 古湯温泉 ＯＮＣＲＩの最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿4: ホテルニューオータニ佐賀 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">佐賀駅・バルーン会場アクセス最強の老舗ホテル</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. ホテルニューオータニ佐賀（佐賀市与賀町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hNewOtani.reviewAverage}（${hNewOtani.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hNewOtani.hotelImageUrl}" alt="${hNewOtani.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hNewOtani.roomImageUrl || hNewOtani.hotelImageUrl}" alt="${hNewOtani.hotelName} ロビー" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">佐賀城址の楠とお濠に抱かれた、上質なホスピタリティと優雅なシティステイ</p>
      <p>バルーンフェスタの早朝一斉フライトを狙う旅行者にとって、佐賀駅まで車で約5分・バスですぐという抜群のフットワークを誇るシティホテル。お濠の緑に面した客室はゆったりとした広さを備え、老舗ニューオータニならではの洗練されたベッドとサービスが約束されています。朝食ビュッフェでは地元佐賀県産米の炊きたてご飯や嬉野温泉名物の温泉湯豆腐など、ご当地の味覚が豊富に並びます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hNewOtani.address1}${hNewOtani.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hNewOtani.access}</p>
        <p><strong>【駐車場】</strong> ${hNewOtani.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hNewOtani.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hNewOtani.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ ホテルニューオータニ佐賀の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿5: 武雄温泉 京都屋 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">大正ロマンのアンティークと自家源泉美肌の湯</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 武雄温泉 大正浪漫の宿 京都屋（佐賀県武雄市）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKyotoya.reviewAverage}（${hKyotoya.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKyotoya.hotelImageUrl}" alt="${hKyotoya.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKyotoya.roomImageUrl || hKyotoya.hotelImageUrl}" alt="${hKyotoya.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">クラシックカーの送迎と蓄音機の音色に包まれる、創業百余年の老舗温泉宿</p>
      <p>武雄温泉駅から赤いクラシックカーで送迎してくれる演出が人気の京都屋。一歩館内に足を踏み入れると、大正時代のアンティークオルゴールや蓄音機が並ぶノスタルジックな喫茶室が迎えてくれます。自館専用の自家源泉は、弱アルカリ性でぬめり気のある純度100%の美肌湯。木漏れ日が心地よい露天風呂で旅の疲れをほぐした後は、若楠ポークや佐賀牛のしゃぶしゃぶ鍋で温まる贅沢な夕べを過ごせます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hKyotoya.address1}${hKyotoya.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hKyotoya.access}</p>
        <p><strong>【駐車場】</strong> ${hKyotoya.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hKyotoya.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hKyotoya.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ 武雄温泉 大正浪漫の宿 京都屋の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<h2 id="nearby-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs text-stone-600 mb-6">
  宿泊施設を拠点に巡ることができる、佐賀・唐津・武雄エリアの代表的な観光名所です。
</p>

<div class="space-y-6 my-6">
  <!-- スポット1: バルーンフェスタ -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wBalloon.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/5830/5830.jpg'}" alt="佐賀インターナショナルバルーンフェスタ" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-sky-100 text-sky-800 font-bold text-[11px] rounded-md">🎈 佐賀市嘉瀬川</span>
        <h3 class="text-base font-bold text-stone-900">佐賀インターナショナルバルーンフェスタ</h3>
        <p>${wBalloon.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> ホテルニューオータニ佐賀から佐賀駅経由、JR臨時列車で約15分。武雄温泉駅からもJR長崎本線で直通アクセス可能です。</p>
      </div>
    </div>
  </div>

  <!-- スポット2: 唐津くんち -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wKunchi.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/52129/52129.jpg'}" alt="唐津くんち" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-red-100 text-red-800 font-bold text-[11px] rounded-md">👺 唐津市街地</span>
        <h3 class="text-base font-bold text-stone-900">唐津くんち（ユネスコ無形文化遺産）</h3>
        <p>${wKunchi.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 唐津シーサイドホテルから巡行ルートまで車で約5分・徒歩約20分。西の浜の御旅所へも散策感覚で訪れることができます。</p>
      </div>
    </div>
  </div>

  <!-- スポット3: 唐津城 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wCastle.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/52129/52129_r1.jpg'}" alt="唐津城" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-800 font-bold text-[11px] rounded-md">🏯 唐津市東城内</span>
        <h3 class="text-base font-bold text-stone-900">舞鶴城（唐津城）</h3>
        <p>${wCastle.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 唐津シーサイドホテルから車で約4分。天守閣展望所からは虹の松原と唐津湾の大パノラマが一望できます。</p>
      </div>
    </div>
  </div>

  <!-- スポット4: 武雄温泉楼門 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wTakeo.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/13417/13417_r1.jpg'}" alt="武雄温泉楼門" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[11px] rounded-md">♨️ 武雄市武雄町</span>
        <h3 class="text-base font-bold text-stone-900">武雄温泉（国の重要文化財・楼門）</h3>
        <p>${wTakeo.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 京都屋から徒歩約4分、御船山楽園ホテルから車で約5分。辰野金吾設計の楼門と元湯の共同浴場めぐりが楽しめます。</p>
      </div>
    </div>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-8">
  🗺️ バルーン＆くんちを巡る2泊3日おすすめモデルコース
</h2>
<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-amber-50/60 to-orange-50/40 border border-amber-200 space-y-4 text-xs text-stone-700 leading-relaxed">
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【1日目】唐津入り・くんち宵ヤマ鑑賞</h3>
    <p>午後、唐津へ到着し「唐津シーサイドホテル」にチェックイン。虹の松原を散策したのち、夕方から唐津市街地へ。19:30から始まる「宵ヤマ」の提灯行列と掛け声に酔いしれ、名物のアラ料理やイカ活造りを満喫して宿泊。</p>
  </div>
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【2日目】西の浜曳き込み鑑賞から武雄温泉へ</h3>
    <p>午前中は唐津くんち最大の山場「御旅所神幸」を観賞。砂煙をあげて駆け抜ける曳山の迫力を体感後、JR筑肥線・唐津線で武雄温泉へ移動。「御船山楽園ホテル」にチェックインし、サウナシュラン日本一の「らかんの湯」と御船山紅葉まつりのライトアップを満喫。</p>
  </div>
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【3日目】早朝バルーンフェスタ一斉離陸鑑賞</h3>
    <p>朝5:30にホテルを出発し武雄温泉駅からJRで「バルーンさが駅」へ直行。7:00から始まるバルーンの一斉離陸を見守り、澄み渡る大空へ舞う100機の熱気球を鑑賞。河川敷のうまかもん市場で佐賀牛バーガーやシシリアンライスを味わって帰路へ。</p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-3 my-6 text-xs text-stone-800">
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q1. バルーンフェスタは雨や風でも飛揚しますか？</h3>
    <p class="text-stone-600">A. 熱気球は風に非常に敏感なスカイスポーツのため、風速約4m以上の風や雨天、視界不良の場合はフライトが中止または待機となります。公式WEBサイトや公式X（旧Twitter）にて朝6時頃にその日の競技実施可否が発表されるため、出発前に必ず確認しましょう。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q2. 唐津くんちの観覧で有料席やチケットは必要ですか？</h3>
    <p class="text-stone-600">A. 市街地巡行は歩道から無料で誰でも観覧可能です。11月3日の御旅所（西の浜）曳き込み会場には一部有料観覧席が設けられますが、砂浜周辺の一般エリアからも十分に熱気ある曳き込みを体感できます。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q3. 宿泊予約はいつ頃までに済ませるべきですか？</h3>
    <p class="text-stone-600">A. 11月2日〜5日は佐賀県内および福岡市内のホテルまで満室になる年間最大の混雑期です。通常6ヶ月前〜3ヶ月前には予約が埋まり始めるため、直前で空室を見つけた場合は即時予約をおすすめします。</p>
  </div>
</div>

<div class="my-8 p-6 rounded-3xl bg-amber-50/60 border border-amber-200">
  <h3 class="text-sm font-bold text-amber-950 mb-2">🔗 あわせてチェックしたい佐賀県の旅行ガイド</h3>
  <ul class="text-xs space-y-1.5 font-medium text-stone-700">
    <li>👉 <a href="/prefectures/saga/" class="text-amber-800 hover:text-amber-600 underline">佐賀県の観光・人気温泉地＆ホテル特集</a></li>
    <li>👉 <a href="/posts/takeo-mifuneyama-guide" class="text-amber-800 hover:text-amber-600 underline">御船山楽園ホテルの宿泊記＆らかんの湯サウナ徹底レビュー</a></li>
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
    hot_spring_info: "武雄温泉（アルカリ性単純温泉）・古湯温泉（単純弱放射能泉・アルカリ性単純温泉）・唐津天然温泉",
    parking_info: "各宿に無料大型駐車場完備。お祭り期間中は臨時駐車場およびJRアクセス推奨。",
    meal_availability: "呼子直送イカ活造り・最高級ブランド佐賀牛ステーキ・唐津名物アラ（クエ）料理・嬉野温泉湯豆腐",
    hotel_name: "佐賀バルーンフェスタ＆唐津くんち周辺 厳選宿5選",
    image: hKaratsu.hotelImageUrl,
    affiliate_url: hKaratsu.affiliateUrl,
    categories: ["11月旅行", "イベント・祭り", "秋旅行", "温泉宿", "ご当地グルメ", "佐賀旅行"],
    keywords: [
      "佐賀インターナショナルバルーンフェスタ 2026",
      "佐賀 バルーンフェスタ ホテル",
      "バルーンフェスタ 宿泊 おすすめ",
      "唐津くんち 2026 ホテル",
      "唐津くんち 宿泊 予約",
      "佐賀 11月 イベント",
      "唐津シーサイドホテル 口コミ",
      "御船山楽園ホテル らかんの湯",
      "古湯温泉 ONCRI",
      "武雄温泉 京都屋"
    ],
    review: reviewHtml,
    price: hKaratsu.hotelMinCharge || 18000,
    rating: hKaratsu.reviewAverage || 4.5,
    date: date,
    other_images: [
      hMifuneyama.hotelImageUrl,
      hOncri.hotelImageUrl,
      hNewOtani.hotelImageUrl,
      hKyotoya.hotelImageUrl,
      wBalloon.thumbnail,
      wKunchi.thumbnail
    ].filter(Boolean),
    summary: description,
    review_count: (hKaratsu.reviewCount || 0) + (hMifuneyama.reviewCount || 0),
    family_friendly: "はい、ファミリー向けの和室や広々とした大浴場、バイキング対応など家族旅行にも最適な設備が整っています。"
  };

  const noteMarkdown = `---
title: "${title}"
date: "${date}"
description: "${description}"
tags: ["佐賀旅行", "バルーンフェスタ", "唐津くんち", "武雄温泉", "唐津温泉", "楽天トラベル"]
---

11月上旬、佐賀の平野は一年で最も色鮮やかで力強い生命力に満たされます。嘉瀬川河川敷の広大な空へと、世界各国から集まった100機を超える熱気球が一斉に飛び立つ「佐賀インターナショナルバルーンフェスタ」。そして玄界灘に面した城下町・唐津では、笛や太鼓、鐘の囃子とともに「エンヤ、エンヤ」「ヨイサ、ヨイサ」の掛け声が地響きのように街を揺るがす「唐津くんち」。

静寂の秋空に浮かぶ色とりどりの巨船と、熱気あふれる夜祭りのコントラスト。この2大イベントを快適に巡るためのアクセス攻略法と、楽天トラベル最新データから★4.3〜4.6超の厳選名宿をお届けします。

---

## 🎈 2026佐賀インターナショナルバルーンフェスタの攻略ポイント
- **開催場所**: 佐賀市嘉瀬川河川敷（JR長崎本線 臨時駅「バルーンさが駅」直結）
- **一斉離陸のベストタイム**: 午前7:00の競技開始時。朝霧が立ち込める平野から、朝日を浴びて約100機の気球が一斉に空へ舞い上がります。風が穏やかな朝一番が最も確実です。
- **夜間係留 ラ・モンゴルフィエ・ノクチューン**: 夕暮れから夜にかけてバーナーの炎でライトアップされた気球が並び、花火とともに幻想的なフィナーレを迎えます。
- **交通渋滞の回避策**: 会場周辺の道路は早朝5時台から大渋滞します。佐賀駅周辺やパーク＆ライド駐車場に車を停め、JR臨時列車を利用するのが最も確実です。

## 👺 唐津くんち（ユネスコ無形文化遺産）の攻略ポイント
- **開催日程**: 毎年11月2日（宵ヤマ）・3日（御旅所神幸）・4日（翌日祭）
- **11月2日 宵ヤマ（19:30〜）**: 提灯の明かりを灯した14台の曳山（赤獅子・青獅子・鯛など）が夜の旧城下町を練り歩く幻想絵巻。
- **11月3日 西の浜曳き込み（12:00頃〜）**: 最大の見せ場。砂地に足を取られながら曳子たちが渾身の力で曳山を砂浜へと曳き込む勇壮な光景。

---

## 1. 唐津シーサイドホテル（佐賀県唐津市）
![唐津シーサイドホテル](${hKaratsu.hotelImageUrl})
唐津湾と日本三大松原「虹の松原」を一望するオーシャンビューリゾート。東館最上階の天然温泉インフィニティ露天風呂と、呼子港直送の透明なイカの活造り、極上の佐賀牛が自慢です。

- **楽天トラベル総合評価**: ★${hKaratsu.reviewAverage}（クチコミ ${hKaratsu.reviewCount}件）
- **目安料金**: 1名 ¥${hKaratsu.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hKaratsu.address1}${hKaratsu.address2}
- **アクセス**: ${hKaratsu.access}
- **駐車場**: ${hKaratsu.parkingInformation}
- [👉 唐津シーサイドホテルの宿泊プラン・空室状況を見る](${hKaratsu.affiliateUrl})

### 現地攻略のツボ
- **唐津くんち巡行エリアまで車で約5分・徒歩約20分**。西の浜の御旅所へも散策感覚で訪れることができます。
- 東館のオーシャンビュー客室からは、朝焼けに染まる唐津湾と松原のパノラマを一望。夕食は呼子直送のイカ活造り会席が絶対のおすすめです。

---

## 2. 武雄温泉 御船山楽園ホテル（佐賀県武雄市）
![御船山楽園ホテル](${hMifuneyama.hotelImageUrl})
15万坪の紅葉ライトアップと、サウナシュラン殿堂入りの「らかんの湯」を擁するアートホテル。チームラボのランプが輝くロビーも圧巻。

- **楽天トラベル総合評価**: ★${hMifuneyama.reviewAverage}（クチコミ ${hMifuneyama.reviewCount}件）
- **目安料金**: 1名 ¥${hMifuneyama.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hMifuneyama.address1}${hMifuneyama.address2}
- **アクセス**: ${hMifuneyama.access}
- **駐車場**: ${hMifuneyama.parkingInformation}
- [👉 武雄温泉 御船山楽園ホテルの宿泊プラン・空室状況を見る](${hMifuneyama.affiliateUrl})

### 現地攻略のツボ
- 宿泊者は御船山楽園の「紅葉まつりライトアップ」へ専用通路から自由に出入り可能。
- 「らかんの湯」の薪サウナと武雄温泉の源泉水風呂、外気浴デッキでのディープリラックスはサウナ好きにとって生涯忘れられない体験になります。

---

## 3. 古湯温泉 ＯＮＣＲＩ／おんくり（佐賀市富士町）
![古湯温泉 ONCRI](${hOncri.hotelImageUrl})
嘉瀬川上流の山峡に佇むジャパニーズコンテンポラリーリゾート。38度の源泉にじっくり浸かる「ぬる湯」は長湯でも身体に優しく、美肌効果抜群です。

- **楽天トラベル総合評価**: ★${hOncri.reviewAverage}（クチコミ ${hOncri.reviewCount}件）
- **目安料金**: 1名 ¥${hOncri.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hOncri.address1}${hOncri.address2}
- **アクセス**: ${hOncri.access}
- **駐車場**: ${hOncri.parkingInformation}
- [👉 古湯温泉 ＯＮＣＲＩの宿泊プラン・空室状況を見る](${hOncri.affiliateUrl})

### 現地攻略のツボ
- バルーンフェスタ会場の嘉瀬川上流に位置し、車で約30分の静かな山あいに位置します。
- レストラン「セバストポール」で味わう地元野菜と有明海の魚介を使ったナチュラルイタリアンが女性やカップルに大好評です。

---

## 4. ホテルニューオータニ佐賀（佐賀市与賀町）
![ホテルニューオータニ佐賀](${hNewOtani.hotelImageUrl})
佐賀城址のお濠と緑に囲まれた老舗シティホテル。佐賀駅からバルーンさが駅へのアクセスに最も適した拠点です。

- **楽天トラベル総合評価**: ★${hNewOtani.reviewAverage}（クチコミ ${hNewOtani.reviewCount}件）
- **目安料金**: 1名 ¥${hNewOtani.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hNewOtani.address1}${hNewOtani.address2}
- **アクセス**: ${hNewOtani.access}
- **駐車場**: ${hNewOtani.parkingInformation}
- [👉 ホテルニューオータニ佐賀の宿泊プラン・空室状況を見る](${hNewOtani.affiliateUrl})

### 現地攻略のツボ
- 早朝フライトを見に行く場合、ホテルから佐賀駅までタクシーで約5分。6時台前半のJR臨時列車に乗ることで確実に7時の一斉離陸に間に合います。
- 朝食ビュッフェでは嬉野温泉名物の温泉湯豆腐や佐賀県産米のご飯が並び、エネルギー満点で出発できます。

---

## 5. 武雄温泉 大正浪漫の宿 京都屋（佐賀県武雄市）
![武雄温泉 京都屋](${hKyotoya.hotelImageUrl})
大正時代のアンティークオルゴールや蓄音機が並ぶレトロな名宿。自館専用の自家源泉はぬめり気のある純度100%の美肌湯。

- **楽天トラベル総合評価**: ★${hKyotoya.reviewAverage}（クチコミ ${hKyotoya.reviewCount}件）
- **目安料金**: 1名 ¥${hKyotoya.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hKyotoya.address1}${hKyotoya.address2}
- **アクセス**: ${hKyotoya.access}
- **駐車場**: ${hKyotoya.parkingInformation}
- [👉 武雄温泉 大正浪漫の宿 京都屋の宿泊プラン・空室状況を見る](${hKyotoya.affiliateUrl})

### 現地攻略のツボ
- 武雄温泉駅からのクラシックカー無料送迎は旅情たっぷり。
- 辰野金吾設計の武雄温泉楼門まで徒歩4分。元湯の熱湯体験と京都屋の自家源泉露天風呂の湯巡りを楽しめます。

---

## 🗺️ バルーン＆くんちを巡るおすすめモデルコース
- **1日目**: 唐津へ到着。唐津シーサイドホテルにチェックイン後、19:30からの唐津くんち「宵ヤマ」を鑑賞。名物アラ料理を堪能。
- **2日目**: 午前中に唐津くんち「西の浜曳き込み」を熱気あふれる砂浜で観賞。午後はJRで武雄温泉へ移動し、御船山楽園ホテルで紅葉ライトアップとサウナを満喫。
- **3日目**: 早朝5:30に出発し「バルーンさが駅」へ直行。7:00の一斉離陸で100機の気球を見送り、うまかもん市場で佐賀牛グルメを味わって帰路へ。
`;

  return { postData, noteMarkdown };
};
