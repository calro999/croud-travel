// scripts/new_articles/article17_okuhida.js
module.exports = function buildArticle17(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-okuhida-shin-hotaka-ropeway-snow-onsen-hotels-guide";
  const title = "【岐阜・奥飛騨温泉郷/新穂高】新穂高ロープウェイ白銀パノラマ＆雪見露天風呂完全攻略！北アルプス槍ヶ岳の冬絶景と極上A5飛騨牛を味わい尽くす名門温泉宿5選";
  const description = "標高3,000メートル級の北アルプスに抱かれた日本屈指の秘湯郷・奥飛騨。日本唯一の2階建てゴンドラ「新穂高ロープウェイ」で標高2,156メートルの西穂高口駅へ登れば、眼前に槍ヶ岳や西穂高岳の白銀の尖峰と純白の樹氷原が360度の大パノラマで迫ります。毎分大量に湧き出る自家源泉の雪見大露天風呂、囲炉裏の炭火で香ばしく焼き上げる極上A5ランク飛騨牛や岩魚の塩焼き、平湯大滝の巨大な青い氷瀑など、冬の奥飛騨の圧倒的な魅力と厳選5名宿を徹底ガイド。";
  const date = "2026-11-02";
  const prefecture = "岐阜県";
  const area = "高山・奥飛騨・新穂高";

  const hMiyama = hotels.find(h => h.hotelNo === 65440) || hotels[0];
  const hYama = hotels.find(h => h.hotelNo === 70916) || hotels[1];
  const hHidaji = hotels.find(h => h.hotelNo === 67386) || hotels[2];
  const hMagokuro = hotels.find(h => h.hotelNo === 149440) || hotels[3];
  const hYumoto = hotels.find(h => h.hotelNo === 176790) || hotels[4];

  const wRopeway = wiki["新穂高ロープウェイ"] || {};
  const wOkuhida = wiki["奥飛騨温泉郷"] || {};
  const wHirayu = wiki["平湯温泉"] || {};
  const wYari = wiki["槍ヶ岳"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-teal-950 via-slate-900 to-emerald-950 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-teal-300 font-extrabold text-xs">
      <span>🏔️</span><span>2026年冬 奥飛騨温泉郷＆新穂高ロープウェイ情報</span>
    </div>
    <p class="text-xs text-teal-100">
      標高2,156m山頂展望台から望む北アルプスの白銀絶景！奥飛騨温泉郷は日本屈指の湯量を誇り、広大な雪見露天風呂と囲炉裏でいただく極上A5飛騨牛炭火焼きが最高の癒やしです。
    </p>
  </div>
  <a href="${hMiyama.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-teal-400 hover:bg-teal-300 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    🏔️ 匠の宿 深山桜庵の空室を見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2 mb-4">
  北アルプスの雪峰と湯けむり！毎分湧出量日本屈指の秘湯ワンダーランド
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  岐阜県高山市の最深部、長野県境の北アルプス槍ヶ岳や穂高連峰の麓に広がる「奥飛騨温泉郷」。平湯温泉、福地温泉、新平湯温泉、栃尾温泉、新穂高温泉という5つの個性豊かな温泉地で構成され、湧出量は毎分4万4,000リットル以上と全国でもトップクラスを誇ります。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  冬の奥飛騨の最大の目玉は、日本で唯一の2階建てゴンドラが運行する「新穂高ロープウェイ」。第1・第2ロープウェイを乗り継いで標高2,156メートルの西穂高口駅「頂の森（いただきのもり）」へ降り立つと、そこには氷点下の澄み切った大気の中に広がる360度純白の山岳パノラマ。白銀に輝く笠ヶ岳や西穂高岳、遥かに望む槍ヶ岳の鋭利な稜線が、手の届きそうな近さで眼前に迫ります。展望台周辺に作られる高さ3メートル超の「雪の回廊」を歩くスノーウォークも冬の風物詩です。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  大自然の寒さを体感した後は、豪雪を冠した巨石やブナの原生林を望む大露天風呂へ。湯気の中に舞い散る粉雪を感じながら名湯に浸かる「雪見風呂」は、まさに極楽の境地。夜は古民家調の囲炉裏端で、炭火の網の上でじゅわっと脂がとろけるA5等級の飛騨牛や、香ばしい朴葉味噌焼きに地酒を合わせる至福の時間が待っています。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2 my-6">
  🎪 新穂高ロープウェイ冬の見どころ＆雪道アクセス完全ガイド
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-teal-100 text-teal-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">新穂高ロープウェイ＆奥飛騨の冬景ベスト</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>西穂高口駅「山頂展望台」パノラマ:</strong> ミシュラン・グリーンガイド・ジャポンで二つ星を獲得した世界的絶景。冬の午前中は大気が澄み、順光で北アルプスの山肌が最もクリアに撮影できます。</p>
      <p>② <strong>巨大な雪壁「雪の回廊」:</strong> 山頂駅周辺の遊歩道に除雪によって現れる巨大な白い壁。迷路のように続く雪の回廊を散策しながら、白樺の枝に咲く繊細な樹氷を間近に観察できます。</p>
      <p>③ <strong>平湯大滝の結氷（青い氷瀑）:</strong> 落差64m、幅6mの日本の滝百選「平湯大滝」が厳冬期に巨大な氷の柱へと変貌。12月下旬から2月にかけて夜間ライトアップが行われ、青白く照らし出される姿は息を呑む幽玄美です。</p>
      <p>④ <strong>福地温泉「青だる」ライトアップ:</strong> 山の岩肌から滴る水が凍りついてできる氷のカーテン「青だる」を温泉街に再現。青い光に照らされる氷柱群を眺めながら地酒の試飲も楽しめます。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-extrabold text-xs rounded-lg">アクセス＆防寒対策</span>
      <h3 class="text-base font-bold text-stone-900">奥飛騨への冬道運転と山頂での防寒必須装備</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【冬用タイヤの絶対装着】</strong> 奥飛騨温泉郷は豪雪地帯（標高800m〜1,200m）です。国道158号線（安房峠道路）および国道471号線は11月中旬以降、圧雪や凍結路面になります。ノーマルタイヤでの走行は絶対に不可能です。必ず溝の十分なスタッドレスタイヤまたはタイヤチェーンを装着してください。</p>
      <p><strong>【公共交通バスの活用】</strong> 高山濃飛バスセンターやJR松本駅から平湯温泉・新穂高行きの特急バスが毎日運行しています。雪道運転に不安がある方は、高山駅前または松本駅前に車を停めて濃飛バスを利用するのが最も安全で快適です。</p>
      <p><strong>【山頂展望台（標高2,156m）の寒さ】</strong> 山頂駅は真冬にはマイナス15℃近くまで下がり、強風が吹くと体感温度はマイナス20℃を下回ります。防風性の高い登山用ハードシェルや厚手ダウン、ネックウォーマー、サングラス（雪の照り返し対策）を用意しましょう。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2 my-8">
  🏨 北アルプスと名湯に抱かれる！奥飛騨温泉郷の厳選宿5選
</h2>

<!-- 宿1: 匠の宿 深山桜庵 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-teal-100 text-teal-900 font-black text-xs rounded-full">平湯温泉・北アルプス笠ヶ岳を望む木造の湯宿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 平湯温泉 匠の宿 深山桜庵（共立リゾート）（岐阜県高山市奥飛騨温泉郷平湯）</h3>
    </div>
    <span class="px-3 py-1.5 bg-teal-50 border border-teal-300 text-teal-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hMiyama.reviewAverage}（${hMiyama.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hMiyama.hotelImageUrl}" alt="${hMiyama.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hMiyama.roomImageUrl || hMiyama.hotelImageUrl}" alt="${hMiyama.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">銘木をふんだんに使った贅沢な和のぬくもり。源泉かけ流しの雪見露天と飛騨牛炭火焼き</p>
      <p>「匠の宿 深山桜庵」は、奥飛騨温泉郷の玄関口・平湯温泉に佇む共立リゾートのフラッグシップ湯宿。飛騨の匠の技を今に伝える重厚な木造建築で、館内はどこを歩いても木のあたたかな香りに包まれます。大浴場には笠ヶ岳の白銀の雄姿を望む開放的な大露天風呂のほか、檜風呂や陶器風呂、無料で何度でも利用できる貸切露天風呂を完備。湯上り処では夕方の飛騨牛乳や夜鳴きそばの無料振る舞いも大好評です。夕食は特選A5飛騨牛の炙り焼きや、旬の川魚・地野菜を盛り込んだ贅沢な会席コース。雪景色を眺めながら極上の温泉三昧を堪能できます。</p>
      <div class="pt-2 flex flex-wrap gap-2 text-stone-600 font-medium">
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">住所: ${hMiyama.address1}${hMiyama.address2}</span>
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">アクセス: 平湯バスターミナルより徒歩約7分（無料送迎あり）</span>
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">宿泊料金: 1名あたり ¥${(hMiyama.hotelMinCharge || 16000).toLocaleString()}〜</span>
      </div>
      <div class="pt-3">
        <a href="${hMiyama.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl shadow transition">
          <span>匠の宿 深山桜庵の宿泊プラン・空室を見る</span>
          <span>→</span>
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 穂高荘 山のホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">新穂高温泉・専用スロープカーで降りる蒲田川渓流露天風呂</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 新穂高温泉 穂高荘 山のホテル（岐阜県高山市奥飛騨温泉郷神坂）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hYama.reviewAverage}（${hYama.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hYama.hotelImageUrl}" alt="${hYama.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hYama.roomImageUrl || hYama.hotelImageUrl}" alt="${hYama.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">新穂高ロープウェイまで車で約3分！欧風山岳リゾートと野趣あふれる巨石露天風呂</p>
      <p>「穂高荘 山のホテル」は、新穂高ロープウェイ新穂高温泉駅のすぐ手前に位置する北欧風の山岳リゾートホテル。館内には大きな暖炉が据えられ、山小屋の情緒とホテルの機能美が見事に融合しています。名物は専用のスロープカー（斜行エレベーター）に乗って渓谷底へ降りる大露天風呂「山峡槍の湯」。蒲田川の清流と降り積もる白雪を目の前に望み、湯舟からは晴れた日には槍ヶ岳の尖峰を望むことができます。男女混浴（湯浴み着着用）の広大な露天風呂や女性専用露天、貸切露天風呂など温泉のスケールは圧巻。ロープウェイの始発便を狙う旅行者にとって最高の立地です。</p>
      <div class="pt-2 flex flex-wrap gap-2 text-stone-600 font-medium">
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">住所: ${hYama.address1}${hYama.address2}</span>
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">アクセス: 新穂高ロープウェイまで車で3分／JR高山駅より濃飛バス約90分</span>
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">宿泊料金: 1名あたり ¥${(hYama.hotelMinCharge || 15400).toLocaleString()}〜</span>
      </div>
      <div class="pt-3">
        <a href="${hYama.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow transition">
          <span>穂高荘 山のホテルの宿泊プラン・空室を見る</span>
          <span>→</span>
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 隠庵 ひだ路 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">福地温泉・全室客室露天風呂付きの大人の隠れ家</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 福地温泉 隠庵 ひだ路（岐阜県高山市奥飛騨温泉郷福地）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hHidaji.reviewAverage}（${hHidaji.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hHidaji.hotelImageUrl}" alt="${hHidaji.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hHidaji.roomImageUrl || hHidaji.hotelImageUrl}" alt="${hHidaji.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">わずか12室のみの贅沢。囲炉裏を囲むプライベート空間と極上飛騨牛炭火懐石</p>
      <p>「隠庵 ひだ路」は、奥飛騨の中でも特に落ち着いた風情を残す福地温泉に佇む全12室の極上隠れ宿。客室はすべて専用の客室露天風呂を備え、誰にも邪魔されることなく好きな時に雪見露天風呂を満喫できます。食事はすべて個別の囲炉裏ダイニングにて提供。囲炉裏の炭火でじっくり焼き上げる香ばしい川魚、地元農家から届く根菜、そして極上の飛騨牛ステーキや朴葉味噌焼きは絶品そのもの。夜には福地温泉名物の「青だる（巨大氷柱）」ライトアップ散策へ出かけることもでき、奥飛騨の冬を最も優雅かつ静謐に過ごしたい大人に選ばれ続けている名宿です。</p>
      <div class="pt-2 flex flex-wrap gap-2 text-stone-600 font-medium">
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">住所: ${hHidaji.address1}${hHidaji.address2}</span>
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">アクセス: 福地温泉口バス停より無料送迎（要予約）</span>
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">宿泊料金: 1名あたり ¥${(hHidaji.hotelMinCharge || 38500).toLocaleString()}〜</span>
      </div>
      <div class="pt-3">
        <a href="${hHidaji.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs rounded-xl shadow transition">
          <span>隠庵 ひだ路の宿泊プラン・空室を見る</span>
          <span>→</span>
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 元湯 孫九郎 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-100 text-stone-900 font-black text-xs rounded-full">福地温泉・4本の自家源泉と加水なし100%かけ流しの秘湯</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 福地温泉 元湯 孫九郎（岐阜県高山市奥飛騨温泉郷福地）</h3>
    </div>
    <span class="px-3 py-1.5 bg-stone-50 border border-stone-300 text-stone-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hMagokuro.reviewAverage}（${hMagokuro.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hMagokuro.hotelImageUrl}" alt="${hMagokuro.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hMagokuro.roomImageUrl || hMagokuro.hotelImageUrl}" alt="${hMagokuro.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">毎分800リットルの圧倒的湧出量！緑褐色に輝く美肌炭酸水素塩泉の雪見風呂</p>
      <p>「元湯 孫九郎」は、敷地内に4本の豊富な自家源泉を保有し、加水・加温・循環一切なしの完全掛け流しを貫く奥飛騨屈指の泉質派旅館。温泉は空気に触れると淡いエメラルドグリーンから緑褐色へと色を変え、天然の湯の花が舞う贅沢な名湯です。原生林に囲まれた混浴大露天風呂「帝の湯」や女性専用露天風呂「音の湯」では、降り積もる雪とブナの木立を眺めながら極上のぬくもりに浸ることができます。夕食は飛騨の恵みを丁寧に調理した山里会席で、飛騨牛の陶板焼きや手打ち蕎麦が好評。本物の名湯をじっくり味わいたい温泉通に愛されています。</p>
      <div class="pt-2 flex flex-wrap gap-2 text-stone-600 font-medium">
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">住所: ${hMagokuro.address1}${hMagokuro.address2}</span>
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">アクセス: 福地温泉口バス停下車徒歩約3分</span>
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">宿泊料金: 1名あたり ¥19,800〜</span>
      </div>
      <div class="pt-3">
        <a href="${hMagokuro.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-700 hover:bg-stone-800 text-white font-bold text-xs rounded-xl shadow transition">
          <span>元湯 孫九郎の宿泊プラン・空室を見る</span>
          <span>→</span>
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 湯の花ふわり 湯元館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-rose-100 text-rose-900 font-black text-xs rounded-full">新平湯温泉・家庭的な温もりとリーズナブルに楽しむ飛騨牛</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 新平湯温泉 湯の花ふわり 湯元館（岐阜県高山市奥飛騨温泉郷一重ケ根）</h3>
    </div>
    <span class="px-3 py-1.5 bg-rose-50 border border-rose-300 text-rose-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hYumoto.reviewAverage}（${hYumoto.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hYumoto.hotelImageUrl}" alt="${hYumoto.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hYumoto.roomImageUrl || hYumoto.hotelImageUrl}" alt="${hYumoto.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">24時間入浴可能な天然温泉と無料の貸切露天風呂。手作り郷土料理のあたたかい宿</p>
      <p>「湯の花ふわり 湯元館」は、新平湯温泉の中心部に位置し、アットホームな居心地とコストパフォーマンスの高さで人気の温泉旅館です。自家源泉から引く天然温泉は24時間いつでも入浴可能で、湯の花がたっぷりと浮かぶ贅沢な湯浴みが楽しめます。空いていれば何度でも無料で鍵をかけて入れる貸切露天風呂もあり、家族やカップルで静かに雪見風呂を堪能できます。夕食は女将が丹精込めて手作りする飛騨牛のすき焼きや陶板焼き、地元の採れたて山菜や川魚の塩焼きなど、気取らない飛騨の郷土の味がずらりと並び、心もお腹もあたたかく満たしてくれます。</p>
      <div class="pt-2 flex flex-wrap gap-2 text-stone-600 font-medium">
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">住所: ${hYumoto.address1}${hYumoto.address2}</span>
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">アクセス: 新平湯温泉口バス停より徒歩約1分</span>
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">宿泊料金: 1名あたり ¥${(hYumoto.hotelMinCharge || 7200).toLocaleString()}〜</span>
      </div>
      <div class="pt-3">
        <a href="${hYumoto.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs rounded-xl shadow transition">
          <span>湯の花ふわり 湯元館の宿泊プラン・空室を見る</span>
          <span>→</span>
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="nearby-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6">
  奥飛騨・新穂高エリアの主要観光スポットの公式情報と、各宿からのアクセス・冬期観光のポイントをまとめました。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <!-- スポット1: 新穂高ロープウェイ -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4">
    <div class="flex items-center justify-between border-b border-stone-100 pb-3">
      <h3 class="text-base font-bold text-stone-900">新穂高ロープウェイ</h3>
      <span class="text-xs bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full font-bold">公式連携</span>
    </div>
    ${wRopeway.thumbnail ? `<img src="${wRopeway.thumbnail}" alt="新穂高ロープウェイ" class="w-full h-48 object-cover rounded-xl border border-stone-100" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wRopeway.extract || '新穂高ロープウェイは、岐阜県高山市の奥飛騨温泉郷にある索道。日本で唯一の2階建てゴンドラを運行し、北アルプス穂高連峰の西穂高口駅まで一気に結ぶ。'}
    </p>
    <div class="text-xs bg-stone-50 p-3 rounded-xl border border-stone-100 text-stone-600">
      📍 <strong>アクセス・鑑賞のコツ:</strong> 新穂高温泉の各宿から車で約3〜10分。標高2,156mの山頂展望台は午前中が順光で山並みが最も鮮明。強風等による運休情報は当日朝の公式サイト確認が必須。
    </div>
  </div>

  <!-- スポット2: 奥飛騨温泉郷 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4">
    <div class="flex items-center justify-between border-b border-stone-100 pb-3">
      <h3 class="text-base font-bold text-stone-900">奥飛騨温泉郷（おくひだおんせんごう）</h3>
      <span class="text-xs bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full font-bold">公式連携</span>
    </div>
    ${wOkuhida.thumbnail ? `<img src="${wOkuhida.thumbnail}" alt="奥飛騨温泉郷" class="w-full h-48 object-cover rounded-xl border border-stone-100" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wOkuhida.extract || '平湯、福地、新平湯、栃尾、新穂高の5つの温泉地の総称。日本有数の湧出量と露天風呂の数を誇り、北アルプスの大自然に囲まれた一大温泉郷。'}
    </p>
    <div class="text-xs bg-stone-50 p-3 rounded-xl border border-stone-100 text-stone-600">
      📍 <strong>アクセス・鑑賞のコツ:</strong> 高山市街から車で約60分（冬道は約80分）。各温泉地ごとに泉質が異なり、共同浴場や足湯めぐりも冬の醍醐味。
    </div>
  </div>

  <!-- スポット3: 平湯温泉 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4">
    <div class="flex items-center justify-between border-b border-stone-100 pb-3">
      <h3 class="text-base font-bold text-stone-900">平湯温泉（ひらゆおんせん）</h3>
      <span class="text-xs bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full font-bold">公式連携</span>
    </div>
    ${wHirayu.thumbnail ? `<img src="${wHirayu.thumbnail}" alt="平湯温泉" class="w-full h-48 object-cover rounded-xl border border-stone-100" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wHirayu.extract || '奥飛騨温泉郷の中で最も古く、武田信玄の軍勢が白猿の導きで発見したと伝わる名湯。バスターミナルがあり交通の要衝。'}
    </p>
    <div class="text-xs bg-stone-50 p-3 rounded-xl border border-stone-100 text-stone-600">
      📍 <strong>アクセス・鑑賞のコツ:</strong> 平湯大滝まではバスターミナルから車で5分（徒歩約25分）。巨大な氷瀑ライトアップ（結氷まつり）は冬の必見イベント。
    </div>
  </div>

  <!-- スポット4: 槍ヶ岳 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4">
    <div class="flex items-center justify-between border-b border-stone-100 pb-3">
      <h3 class="text-base font-bold text-stone-900">槍ヶ岳（やりがたけ・標高3,180m）</h3>
      <span class="text-xs bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full font-bold">公式連携</span>
    </div>
    ${wYari.thumbnail ? `<img src="${wYari.thumbnail}" alt="槍ヶ岳" class="w-full h-48 object-cover rounded-xl border border-stone-100" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wYari.extract || '飛騨山脈（北アルプス）南部に位置する標高3,180mの山。鋭く天を突く岩峰の山容から「日本のマッターホルン」とも称される日本百名山。'}
    </p>
    <div class="text-xs bg-stone-50 p-3 rounded-xl border border-stone-100 text-stone-600">
      📍 <strong>アクセス・鑑賞のコツ:</strong> 新穂高ロープウェイ西穂高口展望台や、蒲田川沿いの新穂高温泉「穂高荘 山のホテル」の露天風呂から冠雪した勇姿を遠望可能。
    </div>
  </div>
</div>

<h2 id="winter-itinerary" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2 my-8">
  🗺️ 1泊2日 新穂高ロープウェイ白銀パノラマ＆雪見露天 満喫モデルコース
</h2>

<div class="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4 text-xs text-stone-700 leading-relaxed">
  <div class="border-l-4 border-teal-600 pl-4 py-1 space-y-1">
    <h3 class="text-sm font-bold text-stone-900">【1日目】高山または松本から奥飛騨へ・平湯大滝の氷瀑と雪見露天風呂</h3>
    <p>・<strong>11:30</strong> JR高山駅に到着。駅前の名店で名物高山ラーメンや飛騨牛のにぎり寿司をランチに味わう。</p>
    <p>・<strong>13:00</strong> 濃飛バスまたはスタッドレス装着車で奥飛騨温泉郷へ（約60分）。</p>
    <p>・<strong>14:30</strong> 平湯温泉に立ち寄り、平湯大滝の青白く凍りついた巨大氷瀑を鑑賞。散策後、平湯温泉「深山桜庵」または新穂高温泉「穂高荘 山のホテル」にチェックイン。</p>
    <p>・<strong>16:00</strong> 舞い散る粉雪の中、湯けむりあふれる大露天風呂で身体の芯から温まる。</p>
    <p>・<strong>18:30</strong> 囲炉裏端で香ばしい朴葉味噌と極上A5等級飛騨牛の炭火焼きを堪能。夜には福地温泉「青だる」や平湯のライトアップを散策。</p>
  </div>

  <div class="border-l-4 border-emerald-600 pl-4 py-1 space-y-1">
    <h3 class="text-sm font-bold text-stone-900">【2日目】新穂高ロープウェイで白銀パノラマ・絶景の山頂展望台へ</h3>
    <p>・<strong>08:30</strong> 宿で朴葉味噌とあたたかい朝食御膳をいただきチェックアウト。</p>
    <p>・<strong>09:30</strong> 新穂高ロープウェイ新穂高温泉駅へ。2階建てゴンドラに乗車して標高2,156mの西穂高口駅「頂の森」へ登る。</p>
    <p>・<strong>10:15</strong> 山頂展望台から360度の大パノラマ！白銀の槍ヶ岳・西穂高岳の雄姿を背景に記念撮影。巨大な「雪の回廊」を散策。</p>
    <p>・<strong>11:45</strong> 山頂喫茶コーナーで名物「頂ラーメン」やあたたかい飛騨牛コロッケパンでランチ休憩。</p>
    <p>・<strong>13:30</strong> ロープウェイで下山。新穂高温泉の立ち寄り足湯でひと息つき、高山駅または松本駅へ戻り帰路へ。</p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-teal-700 pb-2 my-8">
  ❓ 新穂高ロープウェイ＆奥飛騨温泉郷 よくある質問（FAQ）
</h2>

<div class="space-y-4">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q1. 新穂高ロープウェイは冬でも毎日運行していますか？運休の目安は？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 原則として通年運行していますが、山頂付近で秒速20m以上の強風が吹く場合や、大雪・定期点検時には安全のため運休となることがあります。当日の運行状況は公式サイトや公式SNSで毎朝7時頃からリアルタイム更新されるため、乗車前に必ず確認してください。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q2. 冬の奥飛騨へのアクセスで注意すべき道路状況は？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 11月中旬から翌年4月上旬まで、国道158号線（高山〜平湯間）および安房峠道路（松本〜平湯間）は路面凍結・積雪が常態化します。スタッドレスタイヤの装着は必須であり、急発進・急ブレーキ・急ハンドルを避けた慎重な運転が必要です。雪道運転に不慣れな場合は、高山駅前または松本駅前からの直行特急バスの利用が最も安全です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q3. 山頂展望台での防寒具はレンタルできますか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 防寒着の公式レンタルサービスはありません。山頂は氷点下10℃以下に達するため、厚手のダウンコート、手袋、ニット帽、ネックウォーマー、防寒滑り止めシューズを必ず事前に着用して訪れてください。山頂ショップではカイロや手袋などの小物類は販売されています。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q4. 奥飛騨温泉郷の5つの温泉地の泉質の違いは？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 平湯温泉は含硫黄・炭酸水素塩泉で湯冷めしにくい古湯。福地温泉は緑褐色の美肌炭酸水素塩泉。新平湯温泉は湯量豊富な単純温泉で肌に優しい湯。栃尾温泉は清流沿いの単純温泉。新穂高温泉は雄大な北アルプスを望む単純温泉・塩化物泉です。それぞれ効能や湯触りが異なるため、湯めぐりがおすすめです。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-100 border border-stone-200 text-center space-y-3">
  <h3 class="text-base font-bold text-stone-900">岐阜・飛騨高山の冬旅・関連記事もチェック！</h3>
  <ul class="text-xs text-stone-600 space-y-1.5 inline-block text-left">
    <li>👉 <a href="/autumn-winter-shirakawago-okuhida-takayama-hotels-guide/" class="text-teal-800 hover:text-teal-600 underline">白川郷合掌造り＆飛騨高山・奥飛騨温泉郷の厳選名宿特集</a></li>
    <li>👉 <a href="/autumn-gifu-shinhotaka-10selection/" class="text-teal-800 hover:text-teal-600 underline">新穂高温泉おすすめホテル＆旅館10選！絶景露天風呂ガイド</a></li>
    <li>👉 <a href="/autumn-gifu-hidatakayama-10selection/" class="text-teal-800 hover:text-teal-600 underline">飛騨高山・古い町並み散策と飛騨牛グルメおすすめ宿10選</a></li>
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
    image: hMiyama.hotelImageUrl,
    other_images: [
      hYama.hotelImageUrl,
      hHidaji.hotelImageUrl,
      hMagokuro.hotelImageUrl,
      hYumoto.hotelImageUrl
    ],
    hotel_name: `${hMiyama.hotelName}・${hYama.hotelName} ほか`,
    affiliate_url: hMiyama.affiliateUrl,
    categories: ["冬の絶景特集", "雪見露天風呂", "北アルプス", "岐阜旅行", "飛騨牛グルメ"],
    price: `¥${(hYumoto.hotelMinCharge || 7200).toLocaleString()}〜`,
    rating: hHidaji.reviewAverage || 4.71,
    review_count: hMiyama.reviewCount || 1500,
    date: date,
    is_special_feature: true,
    keywords: [
      "新穂高ロープウェイ 冬 絶景 2026",
      "奥飛騨温泉郷 雪見露天風呂 おすすめ",
      "槍ヶ岳 パノラマ 西穂高口展望台",
      "平湯温泉 匠の宿 深山桜庵 宿泊記",
      "穂高荘 山のホテル 混浴露天",
      "奥飛騨 飛騨牛 炭火焼き 宿"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["新穂高ロープウェイ", "奥飛騨温泉郷", "平湯温泉", "雪見露天風呂", "飛騨牛", "冬の岐阜旅行"]
---

# ${title}

標高3,000メートル級の北アルプスに抱かれた日本屈指の秘湯郷・奥飛騨。日本唯一の2階建てゴンドラ「新穂高ロープウェイ」で標高2,156メートルの西穂高口駅へ登れば、眼前に槍ヶ岳や西穂高岳の白銀の尖峰と純白の樹氷原が360度の大パノラマで迫ります。

毎分大量に湧き出る自家源泉の雪見大露天風呂、囲炉裏の炭火で香ばしく焼き上げる極上A5ランク飛騨牛や岩魚の塩焼き、平湯大滝の巨大な青い氷瀑など、冬の奥飛騨の圧倒的な魅力と厳選5名宿を徹底解説します。

---

## 🎪 新穂高ロープウェイ冬の見どころ＆雪道アクセス完全ガイド

白銀の北アルプスを安全かつ快適に味わうための見どころとアクセス情報をまとめました。

- **山頂展望台「頂の森」のパノラマ:** ミシュラン二つ星の世界的眺望。午前中の澄んだ空気の中、雪を冠した笠ヶ岳や槍ヶ岳の尖峰が眼前に迫ります。
- **高さ3mの「雪の回廊」:** 西穂高口駅周辺の遊歩道に除雪によって現れる巨大な白い迷路。木々に咲く樹氷を間近に体感。
- **平湯大滝の結氷（氷瀑ライトアップ）:** 落差64mの名瀑が凍結する厳冬期の奇観。夜間には青白く照らし出され幻想的な光景が広がります。
- **雪道運転の注意点:** 11月中旬以降はスタッドレスタイヤ必須。雪道運転に不慣れな場合は高山駅または松本駅からの濃飛バス利用が安全です。

---

## 🏨 北アルプスと名湯に抱かれる！奥飛騨温泉郷の厳選宿5選

### 1. 平湯温泉 匠の宿 深山桜庵（共立リゾート）（岐阜県高山市）
- **特徴:** 飛騨の匠の技が息づく木造湯宿。北アルプスを望む大露天風呂、無料の貸切露天、夜鳴きそばとA5飛騨牛炭火会席が自慢。
- **宿泊目安:** 1名 ¥${(hMiyama.hotelMinCharge || 16000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hMiyama.reviewAverage}（${hMiyama.reviewCount}件）
- 👉 [匠の宿 深山桜庵の空室・宿泊プランを見る](${hMiyama.affiliateUrl})

### 2. 新穂高温泉 穂高荘 山のホテル（岐阜県高山市）
- **特徴:** 新穂高ロープウェイまで車で3分。専用スロープカーで渓谷底へ降りる大露天風呂「山峡槍の湯」から槍ヶ岳を望む山岳リゾート。
- **宿泊目安:** 1名 ¥${(hYama.hotelMinCharge || 15400).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hYama.reviewAverage}（${hYama.reviewCount}件）
- 👉 [穂高荘 山のホテルの空室・宿泊プランを見る](${hYama.affiliateUrl})

### 3. 福地温泉 隠庵 ひだ路（岐阜県高山市）
- **特徴:** 全12室すべてに客室露天風呂を完備。囲炉裏を囲む個室食事処で味わう特選飛騨牛と岩魚の炭火焼きが至高の大人の隠れ家。
- **宿泊目安:** 1名 ¥${(hHidaji.hotelMinCharge || 38500).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hHidaji.reviewAverage}（${hHidaji.reviewCount}件）
- 👉 [隠庵 ひだ路の空室・宿泊プランを見る](${hHidaji.affiliateUrl})

### 4. 福地温泉 元湯 孫九郎（岐阜県高山市）
- **特徴:** 4本の自家源泉を完全かけ流し。緑褐色に色づく濃厚な美肌炭酸水素塩泉と、原生林に囲まれた混浴大露天風呂「帝の湯」が圧巻。
- **宿泊目安:** 1名 ¥19,800〜
- **楽天トラベル評価:** ⭐ ${hMagokuro.reviewAverage}（${hMagokuro.reviewCount}件）
- 👉 [元湯 孫九郎の空室・宿泊プランを見る](${hMagokuro.affiliateUrl})

### 5. 新平湯温泉 湯の花ふわり 湯元館（岐阜県高山市）
- **特徴:** 24時間入浴可能な自家源泉かけ流しと無料貸切露天風呂。手作りの飛騨牛料理と温かいおもてなしが魅力のリーズナブル宿。
- **宿泊目安:** 1名 ¥${(hYumoto.hotelMinCharge || 7200).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hYumoto.reviewAverage}（${hYumoto.reviewCount}件）
- 👉 [湯の花ふわり 湯元館の空室・宿泊プランを見る](${hYumoto.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **新穂高ロープウェイ:** ${wRopeway.extract}（日本唯一の2階建てゴンドラ、標高2,156m山頂駅）
- **奥飛騨温泉郷:** ${wOkuhida.extract}（5つの個性的な温泉地が集まる日本屈指の温泉郷）
- **平湯温泉:** ${wHirayu.extract}（武田信玄伝説の古湯、平湯大滝の氷瀑が見どころ）
- **槍ヶ岳:** ${wYari.extract}（標高3,180mの鋭峰、山頂展望台や宿露天から遠望）

---

## 🗺️ 1泊2日満喫モデルコース

- **1日目:** 高山駅 ➔ 高山ラーメンランチ ➔ 濃飛バスで奥飛騨へ ➔ 平湯大滝の氷瀑鑑賞 ➔ 宿チェックイン ➔ 雪見露天風呂 ➔ 囲炉裏端でA5飛騨牛炭火焼き
- **2日目:** 宿朝食 ➔ 新穂高ロープウェイへ ➔ 2階建てゴンドラ乗車 ➔ 標高2,156m山頂展望台で槍ヶ岳白銀パノラマ ➔ 雪の回廊散策 ➔ 下山後立ち寄り足湯 ➔ 高山駅へ戻り帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. 新穂高ロープウェイの運休情報はどこで確認できますか？**  
A. 毎朝7時頃から公式サイトおよび公式SNSで運行情報がリアルタイム更新されます。

**Q2. 車のタイヤはスタッドレスが必要ですか？**  
A. 11月中旬以降は必須です。ノーマルタイヤでの走行は事故に直結するため絶対にやめましょう。

**Q3. 山頂展望台での気温はどれくらいですか？**  
A. 真冬はマイナス10℃〜マイナス15℃に達します。風を通さないダウンコート、手袋、帽子、ネックウォーマーを必ず着用してください。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【岐阜・奥飛騨温泉郷/新穂高】新穂高ロープウェイ白銀パノラマ＆雪見露天風呂完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/${slug}/)
`;

  return { postData, noteMarkdown };
};
