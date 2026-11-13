const fs = require("fs");
const path = require("path");

const data = JSON.parse(fs.readFileSync("scratch/oshi_15_venues_hotels.json", "utf8"));

function renderHotelCard(h, isLuxury = false) {
  const priceDisplay = h.hotelMinCharge ? `¥${Number(h.hotelMinCharge).toLocaleString()}〜` : "空室プラン確認";
  const ratingDisplay = h.reviewAverage ? `★ ${Number(h.reviewAverage).toFixed(2)}` : "評価受付中";
  const badgeColor = isLuxury ? "bg-rose-100 text-rose-800" : "bg-emerald-100 text-emerald-800";
  const borderColor = isLuxury ? "border-rose-200" : "border-stone-200";
  const btnColor = isLuxury ? "bg-rose-700 hover:bg-rose-800" : "bg-emerald-700 hover:bg-emerald-800";
  const priceColor = isLuxury ? "text-rose-600" : "text-emerald-700";
  const tipBg = isLuxury ? "bg-rose-50/50 border-rose-100" : "bg-stone-50 border-stone-100";
  const tipIcon = isLuxury ? "余韻と贅沢" : "推し活TIPS";

  const access = h.access ? h.access.replace(/\s+/g, " ").trim() : `${h.address1 || ""}${h.address2 || ""}`;
  const special = h.special ? h.special.replace(/\s+/g, " ").trim() : "駅近・快適な推し活遠征ステイに最適な宿泊プランを用意。";

  // Clean title
  let name = h.hotelName.replace(/＜.*?＞/g, "").replace(/\s+/g, " ").trim();

  return `
      <div class="bg-white rounded-2xl border ${borderColor} overflow-hidden shadow-xs flex flex-col justify-between">
        <div class="p-4 space-y-2">
          <div class="flex justify-between items-start gap-2">
            <h5 class="font-bold text-stone-900 text-sm line-clamp-1">${name}</h5>
            <span class="${badgeColor} text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">${ratingDisplay}</span>
          </div>
          <p class="text-[11px] text-stone-500 line-clamp-2">📍 ${access}</p>
          <p class="text-xs text-stone-700 ${tipBg} p-2.5 rounded-xl border leading-relaxed font-medium line-clamp-3">💡 ${tipIcon}：${special}</p>
          <div class="pt-1">
            <span class="text-[10px] text-stone-400 block">最安参考料金（1名）</span>
            <span class="text-lg font-black ${priceColor}">${priceDisplay}</span>
          </div>
        </div>
        <div class="p-4 pt-0">
          <a href="${h.planListUrl || h.hotelInformationUrl}" target="_blank" rel="sponsored noopener noreferrer" class="block w-full text-center text-xs font-bold text-white ${btnColor} py-2.5 rounded-xl transition shadow-xs">
            楽天トラベルで空室・プランを見る →
          </a>
        </div>
      </div>`;
}

let html = "";

// Intro header
html += `
<section class="my-8 p-6 md:p-8 bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 rounded-3xl border border-pink-200">
  <span class="text-[10px] font-black text-pink-700 bg-pink-100 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
    NATIONWIDE 15 VENUES ARENA & DOME GUIDE
  </span>
  <h2 class="text-2xl md:text-3xl font-black text-stone-900 mb-4 pb-2 border-b border-pink-300">
    「コスパ節約派」vs「ご褒美贅沢派」！全国主要15大ドーム・メガアリーナ遠征ホテル完全攻略
  </h2>
  <p class="text-stone-700 leading-relaxed mb-4">
    推しのライブ遠征が決まった時、ホテル選びには大きく分けて2つの流派があります。東京・大阪・名古屋・福岡の5大ドームはもちろん、横浜Kアリーナ、たまアリ、有明、横アリ、城ホ、武道館、ベルーナ、宮城、愛知Sky Expo、マリンメッセ、札幌ドームまで全国15大会場を網羅！
  </p>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 text-xs">
    <div class="bg-white p-4 rounded-2xl border border-emerald-200 shadow-xs space-y-1">
      <span class="font-black text-emerald-800 text-sm block">コスパ最優先・節約派（¥2,000〜¥6,000台）</span>
      <p class="text-stone-600 leading-relaxed">
        「ホテル代を最小限に抑えて、浮いたお金でツアーTシャツ・うちわ・アクスタ・生写真などのランダムグッズを限界まで買い足したい！」という賢い遠征民向け。
      </p>
    </div>
    <div class="bg-white p-4 rounded-2xl border border-rose-200 shadow-xs space-y-1">
      <span class="font-black text-rose-800 text-sm block">快適・余韻・ご褒美派（¥7,000〜¥15,000台）</span>
      <p class="text-stone-600 leading-relaxed">
        「終演後の満員電車を完全回避し、会場隣接や高層夜景の部屋で連番友達と余韻鑑賞会！翌日のご当地グルメや観光まで贅沢に楽しみたい！」という大人の遠征民向け。
      </p>
    </div>
  </div>

  <!-- 双眼鏡 1回目の誘導 -->
  <div class="my-6 p-5 bg-white rounded-2xl border-2 border-pink-300 shadow-xs flex flex-col md:flex-row items-center gap-5">
    <div class="flex-1 space-y-2">
      <span class="text-[11px] font-bold text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full inline-block">
        チケット当選後の最重要チェック
      </span>
      <h3 class="font-bold text-stone-900 text-base md:text-lg">
        座席はどこでしたか？スタンド席・天井席でも推しの表情を肉眼レベルで捉える神アイテム
      </h3>
      <p class="text-xs text-stone-600 leading-relaxed">
        ドームやアリーナの2階スタンド席・天井席を引いてしまうと、肉眼では推しが完全に米粒サイズ。さらに「マツエクやメガネで視界がケラれる」「暗い照明演出でピントが合わない」と悩む遠征民が続出しています。ピント調節不要で一瞬で合焦する話題のオートフォーカス双眼鏡の実力をチェックしておきましょう。
      </p>
      <div class="pt-1">
        <a href="https://mono-repo.hatenablog.jp/entry/2026/11/02/182514" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 px-5 py-2.5 rounded-xl shadow-xs transition">
          <span>【実機レビュー】マツエク＆メガネでも瞬時に視界良好！オートフォーカス双眼鏡の徹底検証</span>
          <span>→</span>
        </a>
      </div>
    </div>
  </div>
</section>
`;

// Venues sections
data.forEach((v, index) => {
  html += `
<section id="${v.id}" class="my-10 scroll-mt-6 border-b border-stone-200 pb-10">
  <div class="border-b-2 border-stone-800 pb-3 mb-6">
    <span class="text-xs font-black text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block mb-1">
      VENUE AREA #${index + 1}
    </span>
    <h3 class="text-xl md:text-2xl font-black text-stone-900">
      ${v.name}（${v.area}）
    </h3>
    <p class="text-xs text-stone-600 mt-1 leading-relaxed">
      ${v.description}
    </p>
  </div>

  <!-- コスパ節約派 (最低2軒) -->
  <div class="my-6">
    <div class="flex items-center gap-2 mb-3">
      <h4 class="font-bold text-emerald-900 text-base">グッズ代を最大化！コスパ節約ホテル（徒歩圏・駅近）</h4>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      ${v.budgetHotels.map(h => renderHotelCard(h, false)).join("")}
    </div>
  </div>

  <!-- ご褒美贅沢派 (最低2軒) -->
  <div class="my-6">
    <div class="flex items-center gap-2 mb-3">
      <h4 class="font-bold text-rose-900 text-base">余韻と観光を味わう！ご褒美＆会場直結ホテル</h4>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      ${v.luxuryHotels.map(h => renderHotelCard(h, true)).join("")}
    </div>
  </div>
</section>
`;

  // Inject binocular recommendation after venue 3 (K-Arena)
  if (index === 2) {
    html += `
<div class="my-8 p-6 md:p-8 bg-purple-50 rounded-3xl border-2 border-purple-200 shadow-xs">
  <div class="space-y-3">
    <span class="text-[11px] font-bold text-purple-800 bg-purple-100 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
      LIVE ARENA VIEWING HACKS
    </span>
    <h3 class="text-lg md:text-xl font-bold text-stone-900">
      KアリーナのLEVEL7やドームの天井席で「推しを見失わない」ための双眼鏡選び
    </h3>
    <p class="text-sm text-stone-700 leading-relaxed font-normal">
      KアリーナのLEVEL7（最上階）やドームの2階スタンド席は、高低差と距離が凄まじく、通常の手動双眼鏡ではピント合わせに手こずっている間に曲が終わってしまいます。さらに、照明が暗転した瞬間やスモーク演出でもくっきり見える高透過率レンズを備えた「オートフォーカス双眼鏡」のレビューをチェック。
    </p>
    <div class="pt-2">
      <a href="https://mono-repo.hatenablog.jp/entry/2026/11/02/182514" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-xs font-bold text-white bg-purple-700 hover:bg-purple-800 px-6 py-3 rounded-xl shadow-xs transition">
        <span>ピント調節不要！暗いドームの天井席でも明るく表情が見える「オートフォーカス双眼鏡」の秘密</span>
        <span>→</span>
      </a>
    </div>
  </div>
</div>
`;
  }
});

// Checklist section at end
html += `
<section class="my-10 p-6 md:p-8 bg-stone-100 rounded-3xl border border-stone-300 shadow-xs space-y-6">
  <div class="border-b border-stone-300 pb-4">
    <span class="text-[11px] font-bold text-rose-700 bg-rose-100 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-1">
      EXPEDITION ESSENTIALS
    </span>
    <h3 class="text-xl md:text-2xl font-bold text-stone-900">
      宿を抑えたら次はこれ！推し活遠征で絶対後悔しない「必須持ち物3選」
    </h3>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
    <div class="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs space-y-2">
      <h4 class="font-bold text-stone-900 text-sm">1. モバイルバッテリー（20,000mAh）</h4>
      <p class="text-stone-600 leading-relaxed">電子チケット、連番相手との連絡、会場位置情報で充電の減りは通常の3倍。大容量タイプを必ず持参。</p>
    </div>
    <div class="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs space-y-2">
      <h4 class="font-bold text-stone-900 text-sm">2. 硬質うちわケース＆銀テケース</h4>
      <p class="text-stone-600 leading-relaxed">遠征バッグの中でうちわの骨が折れるのを防ぐハードケースと、アリーナで降ってきた銀テープを丸めて保護するケース。</p>
    </div>
    <div class="bg-white p-5 rounded-2xl border border-rose-200 shadow-2xs space-y-2">
      <h4 class="font-bold text-rose-900 text-sm">3. オートフォーカス双眼鏡</h4>
      <p class="text-stone-600 leading-relaxed">ピント調節不要で、動く推しを瞬時にロックオン。マツエク・メガネに完全対応し、暗い演出でも明るく視界を確保。</p>
    </div>
  </div>

  <div class="pt-2 text-center">
    <a href="https://mono-repo.hatenablog.jp/entry/2026/11/02/182514" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 px-8 py-3.5 rounded-full shadow-xs transition">
      <span>ライブ特化型オートフォーカス双眼鏡の詳しいレビュー・選び方はこちら（はてなブログ）</span>
      <span>→</span>
    </a>
  </div>
</section>
`;

const postPath = "src/data/posts/national-arena-dome-oshikatsu-live-hotels-guide.json";
const currentPost = JSON.parse(fs.readFileSync(postPath, "utf8"));
currentPost.title = "【全国15大ドーム・メガアリーナ】推し活遠征ホテル完全攻略！予算別（コスパ節約vsご褒美）おすすめ宿ガイド";
currentPost.description = "東京・京セラ・PayPay・バンテリン・ベルーナ・札幌の6大ドーム、Kアリーナ、たまアリ、有明、横アリ、城ホ、武道館、宮城、愛知、福岡の全国15大会場！各会場4軒以上の厳選宿（コスパvsご褒美）と天井席攻略の双眼鏡選びを完全網羅。";
currentPost.review = html;
currentPost.is_special_feature = true;
currentPost.nearby_tourist_spots = data.map(v => v.name);

fs.writeFileSync(postPath, JSON.stringify(currentPost, null, 2), "utf8");
console.log("Successfully rebuilt national-arena-dome-oshikatsu-live-hotels-guide.json with 15 venues and 60+ hotels!");
