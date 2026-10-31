// scripts/new_articles/article10_ritsurin.js
module.exports = function buildArticle10(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "autumn-kagawa-ritsurin-garden-lightup-kotohira-onsen-hotels-guide";
  const title = "【香川・高松/琴平】国の特別名勝・栗林公園「秋の紅葉ライトアップ」＆金刀比羅宮もみじ祭完全攻略！大名庭園の錦秋水鏡と讃岐うどん・こんぴら温泉郷を巡る厳選名宿5選";
  const description = "ミシュラン・グリーンガイド・ジャポンで「わざわざ訪れる価値がある」最高評価三つ星を獲得した国の特別名勝「栗林公園」。11月下旬のわずか10日間だけ開催される「秋のライトアップ」では、南湖に浮かぶ和船からカエデの錦秋水鏡を眺める幻想的な体験が叶います。11月10日の金刀比羅宮「紅葉祭」、讃岐うどんの名店巡礼、そして名湯こんぴら温泉郷の絶景露天風呂や讃岐山脈の離れ宿など厳選5宿を徹底ガイド。";
  const date = "2026-10-31";
  const prefecture = "香川県";
  const area = "高松・琴平・さぬき";

  const hKotosankaku = hotels.find(h => h.hotelNo === 14833) || hotels[0];
  const hKobaitei = hotels.find(h => h.hotelNo === 5901) || hotels[1];
  const hSakuranosho = hotels.find(h => h.hotelNo === 5900) || hotels[2];
  const hClement = hotels.find(h => h.hotelNo === 14862) || hotels[3];
  const hAsankotonami = hotels.find(h => h.hotelNo === 161204) || hotels[4];

  const wRitsurin = wiki["栗林公園"] || {};
  const wKotohira = wiki["金刀比羅宮"] || {};
  const wYashima = wiki["屋島"] || {};
  const wMarugame = wiki["丸亀城"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-amber-950 via-red-900 to-stone-900 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-amber-300 font-extrabold text-xs">
      <span>🍁</span><span>2026年 栗林公園 秋のライトアップ＆金刀比羅宮速報</span>
    </div>
    <p class="text-xs text-stone-200">
      11月下旬の約10日間限定！大名庭園の南湖を染める和船ナイトクルーズと紅葉水鏡。金刀比羅宮もみじ祭と名湯こんぴら温泉を巡る秋の讃岐路へ。
    </p>
  </div>
  <a href="${hKotosankaku.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    🍁 ことひら温泉 琴参閣の空室・プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 mb-4">
  一歩一景の大名庭園が夜空に描く錦秋の水鏡と、こんぴらさんの門前風情
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  紫雲山を借景に、江戸時代の大名・高松松平家歴代藩主が100年以上の歳月をかけて造り上げた国の特別名勝「栗林公園」。フランスの旅行ガイド『ミシュラン・グリーンガイド・ジャポン』で最高評価の「三つ星（わざわざ訪れる価値がある）」に選ばれたこの日本屈指の回遊式庭園が、一年で最もドラマチックな美しさを放つのが、11月下旬に開催される「秋のライトアップ」です。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  南湖を渡る和船「千秋丸」から見上げる偃月橋（えんげつきょう）とカエデの照葉、歴代藩主が茶道を楽しんだ数寄屋風茶室「掬月亭」が湖面に映り込む姿は、まさに息を呑む一幅の幽玄絵巻。さらに足を伸ばせば、11月10日に優雅な舞が奉納される「金刀比羅宮 紅葉祭」、本場の讃岐うどん店巡り、そして名湯「こんぴら温泉郷」の展望露天風呂やオリーブ牛の美食が待っています。本特集では、讃岐の秋の真髄を極める厳選名宿5選と現地実践ルートをお届けします。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 my-6">
  🎪 2026栗林公園ライトアップ＆金刀比羅宮もみじ祭の必見ポイント
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">栗林公園南湖の夜間和船と偃月橋ライトアップ</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>南湖周遊和船の夜間特別運航:</strong> 船頭が竹竿で漕ぐ木造和船から、湖面に映り込む紅葉のグラデーションを水上から鑑賞。光と水が織りなす幻想的な空間は、乗船予約が即完売するほどの人気を誇ります。</p>
      <p>② <strong>偃月橋と掬月亭（きくげつてい）の水鏡:</strong> 弓張り月のような優美な反りを持つ偃月橋と、湖にせり出す掬月亭。風のない夜には、黒々とした南湖の水面に上下対称の照葉と名建築が鮮やかに映し出されます。</p>
      <p>③ <strong>金刀比羅宮「紅葉祭」（11月10日）:</strong> 785段の石段を上る参道全体が黄色や赤に染まる11月。本宮では巫女による優美な八乙女舞や讃岐風俗舞が奉納され、神聖な秋の祭礼を体感できます。</p>
      <p>④ <strong>讃岐うどんの秋の味わいとオリーブ牛:</strong> 収穫されたばかりの新麦を使った讃岐うどんの香り、讃岐山脈の清流の恵み、そして小豆島のオリーブ粕を食べて育った香川県産黒毛和牛「オリーブ牛」の極上すき焼き。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-red-100 text-red-800 font-extrabold text-xs rounded-lg">実戦アドバイス</span>
      <h3 class="text-base font-bold text-stone-900">和船乗船予約と金刀比羅宮参拝の極意</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【和船チケットの争奪戦】</strong> 栗林公園の夜間和船乗船券は当日窓口でも販売されますが、開園直後に完売することが多いため、香川県観光協会のウェブ事前予約枠を早めに確保するのが鉄則です。</p>
      <p><strong>【金刀比羅宮の石段対策】</strong> 本宮まで785段、奥社までは1,368段の石段が続きます。歩きやすいスニーカーの着用が必須。参道沿いのお土産店や旅館で竹の杖を無料で借りられるので積極的に活用しましょう。</p>
      <p><strong>【高松と琴平のアクセス】</strong> 高松市内（栗林公園）から琴平（金刀比羅宮）までは、ことでん（高松琴平電気鉄道）で約1時間、車で約45分。昼に金刀比羅宮へ参拝し、夕方に高松へ移動して栗林公園ライトアップを鑑賞するか、こんぴら温泉に泊まって翌朝参拝する周遊ルートが最も効率的です。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 my-8">
  🏨 栗林公園＆こんぴら参りを愉しむ！厳選おすすめ名宿5選
</h2>

<!-- 宿1: ことひら温泉 琴参閣 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">ことひら温泉郷最大級の名旅館・四国最大級のバラ風呂</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. ことひら温泉 琴参閣（香川県仲多度郡琴平町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKotosankaku.reviewAverage}（${hKotosankaku.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKotosankaku.hotelImageUrl}" alt="${hKotosankaku.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKotosankaku.roomImageUrl || hKotosankaku.hotelImageUrl}" alt="${hKotosankaku.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">JR琴平駅徒歩5分。吹き抜けロビーの雅な空間と多彩な湯船で癒やす金刀比羅宮門前の名宿</p>
      <p>金刀比羅宮の表参道まで徒歩約5分という抜群のロケーションに建つ「ことひら温泉 琴参閣」。館内は吹き抜けの優雅な和の空間が広がり、女性に大人気の四国最大級のバラ風呂をはじめ、庭園露天風呂や広々とした大浴場など多彩な温浴施設が揃います。特別フロア「飛天館」では、客室専用露天風呂や展望風呂を備えた上質なお部屋で寛ぐことが可能。夕食は特選讃岐牛のしゃぶしゃぶや陶板焼き、瀬戸内の新鮮なお造りを盛り込んだ季節の和食会席。石段を上りきった後の疲れた身体を、良質なこんぴら温泉の湯と贅沢な美食が温かく包み込みます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hKotosankaku.address1}${hKotosankaku.address2}</p>
        <p><strong>【アクセス】</strong> ${hKotosankaku.access}</p>
        <p><strong>【温泉・施設】</strong> ことひら温泉（単純弱放射能冷鉱泉）。庭園露天風呂、大浴場、女性限定バラ風呂、露天風呂付き客室。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hKotosankaku.hotelMinCharge || 12000).toLocaleString()}〜</span>
        <a href="${hKotosankaku.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition text-center">
          ことひら温泉 琴参閣の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 湯元こんぴら温泉華の湯 紅梅亭 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-rose-100 text-rose-900 font-black text-xs rounded-full">割烹ダイニング丸忠のオープンキッチン＆庭園露天風呂</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 湯元こんぴら温泉華の湯 紅梅亭（香川県仲多度郡琴平町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-rose-50 border border-rose-300 text-rose-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKobaitei.reviewAverage}（${hKobaitei.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKobaitei.hotelImageUrl}" alt="${hKobaitei.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKobaitei.roomImageUrl || hKobaitei.hotelImageUrl}" alt="${hKobaitei.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">15種類の湯巡りと割烹料理。上質な和の美意識が漂うこんぴらのハイエンド旅館</p>
      <p>こんぴら温泉郷の中でも屈指の料理評価を誇る高級旅館「紅梅亭」。地下1階の庭園大浴場や露天風呂、屋上露天風呂など合計15種類もの湯処を備え、館内にいながら多彩な湯巡りが満喫できます。名物の「割烹ダイニング丸忠」では、オープンキッチンの臨場感あふれる空間で、熟練の板前が目の前で焼き上げるオリーブ牛ステーキや揚げたて讃岐天ぷら、瀬戸内の旬魚をできたて熱々で提供。細部にまで配慮が行き届いた接客と心地よい客室空間が、旅慣れた大人の旅行者を魅了し続けています。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hKobaitei.address1}${hKobaitei.address2}</p>
        <p><strong>【アクセス】</strong> ${hKobaitei.access}</p>
        <p><strong>【温泉・施設】</strong> 自家源泉「華の湯」。庭園露天風呂、打たせ湯、寝湯、割烹ダイニング丸忠、足湯。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hKobaitei.hotelMinCharge || 21000).toLocaleString()}〜</span>
        <a href="${hKobaitei.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-rose-700 hover:bg-rose-600 text-white font-black text-xs rounded-xl shadow transition text-center">
          紅梅亭の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 桜の抄 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-pink-100 text-pink-900 font-black text-xs rounded-full">金刀比羅宮参道22段目に佇む絶景宿・讃岐富士を一望</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. こんぴら温泉 琴平グランドホテル 桜の抄（香川県仲多度郡琴平町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-pink-50 border border-pink-300 text-pink-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hSakuranosho.reviewAverage}（${hSakuranosho.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hSakuranosho.hotelImageUrl}" alt="${hSakuranosho.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hSakuranosho.roomImageUrl || hSakuranosho.hotelImageUrl}" alt="${hSakuranosho.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">参道石段沿いの特等席。展望露天風呂から讃岐平野と秀峰・飯野山（讃岐富士）を望む</p>
      <p>金刀比羅宮参道石段の22段目という好立地に位置する「琴平グランドホテル 桜の抄」。宿を出ればすぐに石段参道が広がり、朝一番の清々しい金刀比羅宮参拝に最も適した拠点です。展望露天風呂や最上階の客室からは、円錐形の美しい山容を持つ「讃岐富士（飯野山）」と讃岐平野の大パノラマを一望。女性大浴場にはバラを浮かべた「華風呂」も用意されています。夕食は季節の味覚とオリーブ牛を贅沢に使った和食会席。チェックアウト後も車や手荷物を預けて参拝に出かけられる細やかな心遣いも好評です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hSakuranosho.address1}${hSakuranosho.address2}</p>
        <p><strong>【アクセス】</strong> ${hSakuranosho.access}</p>
        <p><strong>【温泉・施設】</strong> 展望露天風呂、大浴場、女性限定華風呂、露天風呂付き客室「別邸 初音」、サウナ。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hSakuranosho.hotelMinCharge || 18000).toLocaleString()}〜</span>
        <a href="${hSakuranosho.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-pink-700 hover:bg-pink-600 text-white font-black text-xs rounded-xl shadow transition text-center">
          桜の抄の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: JRホテルクレメント高松 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-blue-100 text-blue-900 font-black text-xs rounded-full">高松駅・高松港直結・栗林公園までことでん直通</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. ＪＲホテルクレメント高松（香川県高松市浜ノ町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-blue-50 border border-blue-300 text-blue-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hClement.reviewAverage}（${hClement.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hClement.hotelImageUrl}" alt="${hClement.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hClement.roomImageUrl || hClement.hotelImageUrl}" alt="${hClement.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">瀬戸内海の多島美を一望。栗林公園ライトアップの夜間アクセスにも最適な都市型フラッグシップ</p>
      <p>JR高松駅および高松港フェリーターミナルに直結する四国有数のシティホテル。高層階の客室からは屋島や瀬戸内海を行き交うフェリー、遠く瀬戸大橋の煌めく夜景を一望できます。栗林公園へはホテル前の高松築港駅から「ことでん」に乗車して約6分の「栗林公園駅」下車と、夜のライトアップ鑑賞にも抜群のアクセス性を発揮。館内には日本料理・中国料理・フレンチ・鉄板焼きなど多彩な名レストランを備え、朝食ビュッフェでは目の前で揚げる讃岐うどんや地魚の天ぷらなどご当地の味覚を心ゆくまで堪能できます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hClement.address1}${hClement.address2}</p>
        <p><strong>【アクセス】</strong> ${hClement.access}</p>
        <p><strong>【施設・サービス】</strong> レストラン・バーラウンジ、宴会場、高層パノラマビュー、ビジネスラウンジ。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hClement.hotelMinCharge || 9000).toLocaleString()}〜</span>
        <a href="${hClement.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-blue-700 hover:bg-blue-600 text-white font-black text-xs rounded-xl shadow transition text-center">
          JRホテルクレメント高松の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 湯山荘 阿讃琴南 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">讃岐山脈の静謐な山懐・自家源泉と囲炉裏炭火料理の極上ヴィラ</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 湯山荘 阿讃琴南（香川県仲多度郡まんのう町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hAsankotonami.reviewAverage}（${hAsankotonami.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hAsankotonami.hotelImageUrl}" alt="${hAsankotonami.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hAsankotonami.roomImageUrl || hAsankotonami.hotelImageUrl}" alt="${hAsankotonami.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">清流・土器川のせせらぎ。囲炉裏を囲む阿波・讃岐の旬菜と星空を仰ぐ自家源泉露天</p>
      <p>讃岐山脈の深い山懐、清流・土器川の畔に佇む「湯山荘 阿讃琴南」。里山ヒュッテ（独立ヴィラ）や露天風呂付き客室が点在し、喧騒から完全に隔離された静寂の時間が流れます。自家源泉の美肌の湯を引いた大浴場「せせらぎの湯」や渓流沿いの貸切露天風呂では、色づく山肌と川のせせらぎ、夜には満天の星を眺めながらの贅沢な湯浴みが叶います。夕食は囲炉裏を設えたダイニングにて、讃岐牛や阿波尾鶏、地元の旬野菜を炭火で香ばしく焼き上げる里山料理。大人の隠れ家リトリートとして四国屈指の人気を誇ります。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1 border border-stone-200">
        <p><strong>【所在地】</strong> ${hAsankotonami.address1}${hAsankotonami.address2}</p>
        <p><strong>【アクセス】</strong> ${hAsankotonami.access}</p>
        <p><strong>【温泉・施設】</strong> 美合温泉（自家源泉・低張性弱アルカリ性冷鉱泉）。せせらぎの湯、貸切露天風呂、里山ヒュッテ、囲炉裏ダイニング。</p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span class="text-stone-900 font-extrabold text-sm">宿泊目安: 1名 ¥${(hAsankotonami.hotelMinCharge || 23000).toLocaleString()}〜</span>
        <a href="${hAsankotonami.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-black text-xs rounded-xl shadow transition text-center">
          湯山荘 阿讃琴南の宿泊プラン・空室を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="nearby-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs text-stone-600 mb-6">
  特別名勝・栗林公園や金刀比羅宮など香川を代表する名所をピックアップ。旅行の周遊計画にお役立てください。
</p>

<div class="space-y-6 my-6">
  <!-- スポット1: 栗林公園 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wRitsurin.thumbnail || hClement.hotelImageUrl}" alt="栗林公園" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[11px] rounded-md">🌲 国の特別名勝・ミシュラン三つ星</span>
        <h3 class="text-base font-bold text-stone-900">栗林公園（香川県高松市栗林町）</h3>
        <p>${wRitsurin.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> JRホテルクレメント高松からことでんで約6分。琴平・こんぴら温泉各宿から車で約45分。</p>
      </div>
    </div>
  </div>

  <!-- スポット2: 金刀比羅宮 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wKotohira.thumbnail || hSakuranosho.hotelImageUrl}" alt="金刀比羅宮" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-800 font-bold text-[11px] rounded-md">⛩️ さぬきのこんぴらさん・海の守護神</span>
        <h3 class="text-base font-bold text-stone-900">金刀比羅宮（香川県仲多度郡琴平町）</h3>
        <p>${wKotohira.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 桜の抄から参道すぐ、琴参閣・紅梅亭から徒歩約5分。本宮まで785段の石段が続きます。</p>
      </div>
    </div>
  </div>

  <!-- スポット3: 屋島 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wYashima.thumbnail || hKotosankaku.hotelImageUrl}" alt="屋島" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-800 font-bold text-[11px] rounded-md">🌊 源平合戦の古戦場・山上交流拠点「やしまーる」</span>
        <h3 class="text-base font-bold text-stone-900">屋島（香川県高松市屋島）</h3>
        <p>${wYashima.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 高松市中心部から車で約25分。獅子の霊巌展望台から望む瀬戸内海の夕景と多島美が絶景。</p>
      </div>
    </div>
  </div>

  <!-- スポット4: 丸亀城 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-5">
        <img src="${wMarugame.thumbnail || hKobaitei.hotelImageUrl}" alt="丸亀城" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-rose-100 text-rose-800 font-bold text-[11px] rounded-md">🏯 日本一の高石垣・現存十二天守</span>
        <h3 class="text-base font-bold text-stone-900">丸亀城（香川県丸亀市一番丁）</h3>
        <p>${wMarugame.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> 琴平から車で約25分。扇の勾配と呼ばれる日本一の美しい高石垣と木造現存天守が魅力。</p>
      </div>
    </div>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 my-8">
  🗺️ 栗林公園ライトアップ＆金刀比羅宮 1泊2日満喫モデルコース
</h2>
<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-amber-50/60 to-red-50/40 border border-amber-200 space-y-4 text-xs text-stone-700 leading-relaxed">
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【1日目】讃岐うどん巡礼と金刀比羅宮参拝・こんぴら温泉宿泊</h3>
    <p>10:30に高松空港または高松駅に到着。レンタカーで出発し、名店「山越うどん」や「がもううどん」で本場の釜玉うどんを堪能。13:30に琴平へ到着し、「琴平グランドホテル 桜の抄」または「琴参閣」にチェックイン。杖を借りて金刀比羅宮の785段の石段参道へ。秋の彩りに包まれた旭社や本宮を参拝し、讃岐平野の眺望を楽しむ。16:30に宿へ戻り展望露天風呂で足を癒やす。夕食はオリーブ牛のステーキと瀬戸内鮮魚の会席料理に舌鼓。</p>
  </div>
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【2日目】丸亀城から高松へ・栗林公園「秋のライトアップ」鑑賞</h3>
    <p>朝風呂と朝食後、宿をチェックアウトして丸亀へ移動。日本一の高石垣を誇る「丸亀城」を見学。名物「骨付鳥」の一鶴でスパイシーなひなどりをランチに味わう。午後は高松市内へ向かい、屋島の「やしまーる」から瀬戸内海の多島美を展望。夕暮れの17:00、国の特別名勝「栗林公園」へ。事前予約した夜間和船に乗船し、湖面に映る偃月橋と照葉の錦秋水鏡を心ゆくまで鑑賞。高松駅前の「JRホテルクレメント高松」でディナー後、新幹線または夜便の飛行機で帰路へ。</p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-3 my-6 text-xs text-stone-800">
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q1. 栗林公園の秋のライトアップはいつ開催されますか？</h3>
    <p class="text-stone-600">A. 例年11月下旬（11月20日前後〜11月30日頃）の約10日間限定で開催されます。点灯時間は17:00〜21:00（最終入園20:30）です。期間中は普段立ち入れない夜の庭園が幻想的に照らし出されます。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q2. 金刀比羅宮の参拝にかかる時間の目安はどれくらいですか？</h3>
    <p class="text-stone-600">A. 参道入口から本宮（785段）までは往復で約1時間30分〜2時間程度です。さらに奥社（厳魂神社・1,368段）まで登る場合は往復で約2時間30分〜3時間程度を見込んでおくと無理なく参拝できます。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q3. 讃岐うどん店の営業時間に注意点はありますか？</h3>
    <p class="text-stone-600">A. 有名な讃岐うどん店の多くは「朝9時〜昼13時・14時頃まで」の営業で、麺がなくなり次第終了となります。夜営業している店は限られるため、うどん巡りは午前中〜昼過ぎにかけて計画するのが鉄則です。</p>
  </div>
</div>

<div class="my-8 p-6 rounded-3xl bg-amber-50/60 border border-amber-200">
  <h3 class="text-sm font-bold text-amber-950 mb-2">🔗 あわせてチェックしたい香川・四国の旅行特集</h3>
  <ul class="text-xs space-y-1.5 font-medium text-stone-700">
    <li>👉 <a href="/prefectures/kagawa/" class="text-amber-800 hover:text-amber-600 underline">香川県の観光名所・こんぴら温泉＆ホテル完全ガイド</a></li>
    <li>👉 <a href="/furusato-tax-three-great-gardens-heritage-stay/" class="text-amber-800 hover:text-amber-600 underline">大名庭園を望む名旅館特集（栗林・兼六・後楽園）</a></li>
    <li>👉 <a href="/takamatsu-city-ritsuringarden-hotels-guide" class="text-amber-800 hover:text-amber-600 underline">栗林公園・高松市街おすすめホテル特集</a></li>
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
    hot_spring_info: "ことひら温泉（単純弱放射能冷鉱泉・自家源泉華の湯。筋肉痛・疲労回復・美肌に効能）・美合温泉",
    parking_info: "琴平温泉街各宿に無料駐車場完備。金刀比羅宮参拝時は宿の駐車場に車を預けて徒歩で石段へ向かうのが快適。",
    meal_availability: "讃岐オリーブ牛ステーキ・讃岐うどん・骨付鳥・瀬戸内海鯛しゃぶ・阿波尾鶏囲炉裏焼き・旬の会席料理",
    hotel_name: "栗林公園＆金刀比羅宮周辺 厳選名宿5選",
    image: hKotosankaku.hotelImageUrl,
    affiliate_url: hKotosankaku.affiliateUrl,
    categories: ["11月旅行", "紅葉", "ライトアップ", "温泉宿", "ご当地グルメ", "香川旅行"],
    keywords: [
      "栗林公園 紅葉 ライトアップ 2026",
      "金刀比羅宮 紅葉祭 11月",
      "ことひら温泉 琴参閣",
      "紅梅亭 割烹ダイニング丸忠",
      "琴平グランドホテル 桜の抄",
      "JRホテルクレメント高松 栗林公園",
      "湯山荘 阿讃琴南",
      "讃岐うどん 巡礼",
      "オリーブ牛 ステーキ",
      "香川 11月 イベント"
    ],
    review: reviewHtml,
    price: hKotosankaku.hotelMinCharge || 12000,
    rating: hKotosankaku.reviewAverage || 4.4,
    date: date,
    other_images: [
      hKobaitei.hotelImageUrl,
      hSakuranosho.hotelImageUrl,
      hClement.hotelImageUrl,
      hAsankotonami.hotelImageUrl,
      wRitsurin.thumbnail,
      wKotohira.thumbnail
    ].filter(Boolean),
    summary: description,
    review_count: (hKotosankaku.reviewCount || 0) + (hKobaitei.reviewCount || 0),
    family_friendly: "はい、琴参閣の大浴場や桜の抄の参道直結アクセスなど三世代やファミリー旅行にも大変人気があります。"
  };

  const noteMarkdown = `---
title: "${title}"
date: "${date}"
description: "${description}"
tags: ["栗林公園", "金刀比羅宮", "こんぴら温泉", "琴参閣", "紅梅亭", "讃岐うどん", "香川旅行", "楽天トラベル"]
---

フランスの世界的旅行ガイド『ミシュラン・グリーンガイド・ジャポン』で最高評価三つ星に輝いた国の特別名勝「栗林公園」。江戸時代の大名・高松松平家が100年以上の歳月をかけて完成させた回遊式大名庭園が最も幽玄な美しさを湛えるのが、11月下旬のわずか10日間だけ開催される「秋のライトアップ」です。

南湖を渡る和船から見上げる偃月橋（えんげつきょう）とカエデの照葉、数寄屋風茶室「掬月亭」が水面に映り込む水鏡の美しさは息を呑む一幅の絵巻。さらに足を伸ばせば、11月10日に優雅な舞が奉納される「金刀比羅宮 紅葉祭」、本場の讃岐うどん店巡礼、そして名湯「こんぴら温泉郷」の露天風呂やオリーブ牛の美食が待っています。

楽天トラベルの最新データから高評価の名宿5選を厳選し、見どころと現地攻略ルートを徹底解説します。

---

## 🍁 栗林公園ライトアップ＆金刀比羅宮の攻略ポイント
- **栗林公園ライトアップ期間**: 11月下旬（約10日間限定、点灯時間17:00〜21:00）
- **夜間和船の乗船予約**: 南湖を巡る和船は水面からの照葉水鏡が絶景。事前ネット予約枠の確保が必須です。
- **金刀比羅宮の参拝**: 本宮まで785段、奥社まで1,368段。歩きやすい靴と宿の無料貸し出し杖を活用しましょう。11月10日には本宮で「紅葉祭」が斎行されます。
- **讃岐うどんの営業時間**: 名店の多くは朝9時〜昼過ぎ（13〜14時）で麺が切れ次第閉店するため、午前中からのうどん巡りが鉄則。
- **名湯こんぴら温泉郷**: 参道沿いの老舗旅館に泊まることで、参拝後の疲れた足を名湯で癒やし、翌朝の清々しい早朝参拝も叶います。

---

## 1. ことひら温泉 琴参閣（香川県仲多度郡琴平町）
![ことひら温泉 琴参閣](${hKotosankaku.hotelImageUrl})
金刀比羅宮の表参道まで徒歩5分。吹き抜けロビーが迎えることひら温泉郷屈指の大型名旅館。四国最大級のバラ風呂や庭園露天風呂など多彩な湯処を完備。夕食は特選讃岐牛のすき焼きや瀬戸内の新鮮なお造りを盛り込んだ季節の会席料理が自慢です。

- **楽天トラベル総合評価**: ★${hKotosankaku.reviewAverage}（クチコミ ${hKotosankaku.reviewCount}件）
- **目安料金**: 1名 ¥${(hKotosankaku.hotelMinCharge || 12000).toLocaleString()}〜
- **所在地**: ${hKotosankaku.address1}${hKotosankaku.address2}
- **アクセス**: ${hKotosankaku.access}
- **駐車場**: ${hKotosankaku.parkingInformation}
- [👉 ことひら温泉 琴参閣の宿泊プラン・空室状況を見る](${hKotosankaku.affiliateUrl})

---

## 2. 湯元こんぴら温泉華の湯 紅梅亭（香川県仲多度郡琴平町）
![紅梅亭](${hKobaitei.hotelImageUrl})
15種類の多彩な湯巡りと美食が自慢のこんぴら屈指のハイエンド宿。「割烹ダイニング丸忠」のオープンキッチンで焼き上げる極上オリーブ牛ステーキや揚げたて天ぷらは絶品。心地よいおもてなしと洗練された和の美意識が漂います。

- **楽天トラベル総合評価**: ★${hKobaitei.reviewAverage}（クチコミ ${hKobaitei.reviewCount}件）
- **目安料金**: 1名 ¥${(hKobaitei.hotelMinCharge || 21000).toLocaleString()}〜
- **所在地**: ${hKobaitei.address1}${hKobaitei.address2}
- **アクセス**: ${hKobaitei.access}
- **駐車場**: ${hKobaitei.parkingInformation}
- [👉 紅梅亭の宿泊プラン・空室状況を見る](${hKobaitei.affiliateUrl})

---

## 3. こんぴら温泉 琴平グランドホテル 桜の抄（香川県仲多度郡琴平町）
![桜の抄](${hSakuranosho.hotelImageUrl})
金刀比羅宮参道石段の22段目に佇む絶好の立地。展望露天風呂や最上階客室から秀峰「讃岐富士（飯野山）」と讃岐平野を一望。女性専用の華風呂や、オリーブ牛を贅沢に使った和食会席が好評です。

- **楽天トラベル総合評価**: ★${hSakuranosho.reviewAverage}（クチコミ ${hSakuranosho.reviewCount}件）
- **目安料金**: 1名 ¥${(hSakuranosho.hotelMinCharge || 18000).toLocaleString()}〜
- **所在地**: ${hSakuranosho.address1}${hSakuranosho.address2}
- **アクセス**: ${hSakuranosho.access}
- **駐車場**: ${hSakuranosho.parkingInformation}
- [👉 桜の抄の宿泊プラン・空室状況を見る](${hSakuranosho.affiliateUrl})

---

## 4. ＪＲホテルクレメント高松（香川県高松市浜ノ町）
![JRホテルクレメント高松](${hClement.hotelImageUrl})
JR高松駅・高松港直結の四国屈指のフラッグシップシティホテル。客室から瀬戸内海の多島美を一望。ことでんで栗林公園へ直通約6分とライトアップ鑑賞に抜群のアクセスを誇り、朝食ビュッフェの手打ち讃岐うどんも大人気です。

- **楽天トラベル総合評価**: ★${hClement.reviewAverage}（クチコミ ${hClement.reviewCount}件）
- **目安料金**: 1名 ¥${(hClement.hotelMinCharge || 9000).toLocaleString()}〜
- **所在地**: ${hClement.address1}${hClement.address2}
- **アクセス**: ${hClement.access}
- **駐車場**: ${hClement.parkingInformation}
- [👉 JRホテルクレメント高松の宿泊プラン・空室状況を見る](${hClement.affiliateUrl})

---

## 5. 湯山荘 阿讃琴南（香川県仲多度郡まんのう町）
![湯山荘 阿讃琴南](${hAsankotonami.hotelImageUrl})
讃岐山脈の静謐な山懐、清流・土器川の畔に佇む上質な里山リトリート。独立ヴィラ（里山ヒュッテ）や自家源泉の渓流露天風呂を備え、囲炉裏ダイニングで阿波尾鶏や讃岐牛の炭火焼きを味わう究極のおこもりステイが叶います。

- **楽天トラベル総合評価**: ★${hAsankotonami.reviewAverage}（クチコミ ${hAsankotonami.reviewCount}件）
- **目安料金**: 1名 ¥${(hAsankotonami.hotelMinCharge || 23000).toLocaleString()}〜
- **所在地**: ${hAsankotonami.address1}${hAsankotonami.address2}
- **アクセス**: ${hAsankotonami.access}
- **駐車場**: ${hAsankotonami.parkingInformation}
- [👉 湯山荘 阿讃琴南の宿泊プラン・空室状況を見る](${hAsankotonami.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

### 栗林公園（香川県高松市栗林町）
![栗林公園](${wRitsurin.thumbnail || hClement.hotelImageUrl})
${wRitsurin.extract}
- **宿からのアクセス**: JRホテルクレメント高松からことでんで約6分。偃月橋や掬月亭の秋のライトアップは絶景。

### 金刀比羅宮（香川県仲多度郡琴平町）
![金刀比羅宮](${wKotohira.thumbnail || hSakuranosho.hotelImageUrl})
${wKotohira.extract}
- **宿からのアクセス**: 桜の抄から参道すぐ、琴参閣から徒歩約5分。785段の石段を上り本宮へ。

### 屋島（香川県高松市屋島）
![屋島](${wYashima.thumbnail || hKotosankaku.hotelImageUrl})
${wYashima.extract}
- **宿からのアクセス**: 高松市中心部から車で約25分。山上から瀬戸内海の多島美を一望。

### 丸亀城（香川県丸亀市一番丁）
![丸亀城](${wMarugame.thumbnail || hKobaitei.hotelImageUrl})
${wMarugame.extract}
- **宿からのアクセス**: 琴平から車で約25分。日本一の高石垣と現存木造天守が見事です。
`;

  return { postData, noteMarkdown };
};
