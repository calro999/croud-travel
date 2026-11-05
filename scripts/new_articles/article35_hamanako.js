// scripts/new_articles/article35_hamanako.js
module.exports = function buildArticle35(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-shizuoka-hamanako-kanzanji-illumination-oyster-unagi-hotels-guide";
  const title = "【静岡・浜名湖/舘山寺】はままつフラワーパーク「光の花の庭」イルミネーション＆浜名湖冬の三大味覚「幻のどうまん蟹・牡蠣カバ丼・極上うなぎ」完全攻略！湖畔の絶景名湯を愉しむ宿5選";
  const description = "11月下旬〜1月開催！はままつフラワーパークの冬イルミネーション「フラワー・イルミネーション」。大温室クリスタルパレスの光のショーや噴水イルミを徹底ガイド。冬に旬を迎える幻の濃厚「どうまん蟹」、浜名湖産牡蠣を香ばしく焼き上げた名物「牡蠣カバ丼」、本場「浜名湖うなぎ」の三大美食と、弁天島の鳥居に沈む夕日絶景、かんざんじ温泉の塩化物泉露天風呂を堪能する厳選宿5選を完全網羅。";
  const date = "2026-11-05";
  const prefecture = "静岡県";
  const area = "浜名湖・舘山寺・弁天島";

  // ホテル抽出
  const hKinryu = hotels.find(h => h.hotelNo === 39433) || hotels[0];
  const hWellseason = hotels.find(h => h.hotelNo === 3112) || hotels[1];
  const hGrand = hotels.find(h => h.hotelNo === 7824) || hotels[2];
  const hKaikatei = hotels.find(h => h.hotelNo === 4709) || hotels[3];
  const hLakeside = hotels.find(h => h.hotelNo === 9198) || hotels[4];

  const wHamanako = wiki["浜名湖"] || {};
  const wKanzanji = wiki["舘山寺温泉"] || {};
  const wFlowerPark = wiki["はままつフラワーパーク"] || wiki["浜松市フラワーパーク"] || {};
  const wBentenjima = wiki["弁天島 (浜松市)"] || {};

  const reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-amber-950 via-orange-950 to-slate-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-amber-800/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-amber-300 font-extrabold text-xs tracking-wider">
      <span>✨</span><span>2026-2027冬 はままつフラワーパークイルミ＆浜名湖三大味覚 現地完全ガイド</span>
    </div>
    <p class="text-xs text-amber-100 leading-relaxed">
      11月下旬開幕！温室を彩る100万球の光の花園と浜名湖の夕景。幻のどうまん蟹・牡蠣カバ丼・極上うなぎと湖畔温泉宿の贅沢旅。
    </p>
  </div>
  <a href="${hKinryu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    🌅 割烹旅館・山水館欣龍の空室を見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2 mb-4">
  温室に咲き誇る光のファンタジーと夕陽に染まる汽水湖！浜名湖の冬が魅せる特別な輝き
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  静岡県西部に位置し、淡水と海水が混ざり合う日本屈指の汽水湖「浜名湖」。温暖な遠州灘の気候に恵まれたこの湖畔では、11月下旬を迎えると冬の風物詩「はままつフラワーパーク フラワー・イルミネーション」のシーズンが開幕します。東京ドーム約6個分に及ぶ広大な敷地が約100万球のLEDで彩られ、中心に位置する大温室「クリスタルパレス」では、高さ8メートルの本物のモミの木のツリーと、音楽に合わせて躍動する光の噴水ショーが幻想的な夜を創り出します。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  澄み切った冬の大気は、浜名湖の夕景を一年で最も美しく引き立てます。特に弁天島海浜公園では、冬至前後の時期になると湖上に浮かぶ赤いシンボルタワー（大鳥居）の真ん中に夕陽が沈む奇跡の絶景「鳥居夕陽」が現れ、全国の写真愛好家が息を呑んでシャッターを切ります。茜色から群青色へと刻一刻と表情を変える湖面のグラデーションと、夜の光のイルミネーションのコントラストは、冬の浜名湖ならではの贅沢な体験です。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  そして、冬の浜名湖の最大の魅力は、全国の食通を唸らせる「三大冬グルメ」です。汽水湖特有のミネラル豊富な水質で育つ「幻のどうまん蟹（トゲノコギリガザミ）」は、11月〜1月の冬に濃厚な内子と甘みのある身がぎっしりと詰まる超希少な逸品。さらに、ぷりぷりの浜名湖産牡蠣をうなぎの蒲焼きのタレで香ばしくソテーし、海苔と三ヶ日みかんの皮を添えたB級ご当地グルメの最高峰「浜名湖牡蠣カバ丼」、冬に脂の乗りが最高潮に達する伝統の「浜名湖うなぎ」。湖畔に湧く「かんざんじ温泉」の塩化物強塩泉に浸かって湯冷め知らずの温まりを体感し、極上の浜名湖美食に酔いしれる旅をご提案します。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2 my-6">
  💡 現地ライター直伝！はままつフラワーパークイルミ＆浜名湖冬グルメ攻略
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">クリスタルパレス・大噴水・弁天島夕日</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>大温室クリスタルパレスの巨大ツリー:</strong> 暖房が効いた暖かい温室内で鑑賞できるため、寒さを気にせずゆっくり写真撮影が楽しめます。華やかなポインセチアと光の共演は圧巻。</p>
      <p>② <strong>音と光の噴水ショー:</strong> 園内の大池で30分間隔で繰り広げられるダイナミックな噴水パフォーマンス。夜間はカラフルなライトアップが水しぶきを染め上げます。</p>
      <p>③ <strong>弁天島の赤鳥居と冬夕日:</strong> 日没30分前の16:30頃に弁天島海浜公園へ。鳥居の真ん中に落ちる夕陽と、遠くの浜名湖大橋のシルエットが織りなす絵画のような瞬間。</p>
      <p>④ <strong>舘山寺ロープウェイ＆大草山展望台:</strong> 湖上を渡る日本唯一のロープウェイ。山頂のオルゴールミュージアム屋上展望台からは360度パノラマで浜名湖の全貌を見渡せます。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-orange-100 text-orange-800 font-extrabold text-xs rounded-lg">必見攻略テクニック</span>
      <h3 class="text-base font-bold text-stone-900">冬グルメ予約・混雑回避・防寒ポイント</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【幻の「どうまん蟹」は宿の事前予約が必須】</strong> どうまん蟹は水揚げ量が極めて少なく、市場に出回る数が限られています。宿泊プランに「どうまん蟹付き」と明記されているプランを数週間前から早めに予約するのが確実です。</p>
      <p><strong>【遠州名物「遠州のからっ風」対策】</strong> 冬の浜名湖周辺は雪こそほとんど降りませんが、「遠州のからっ風」と呼ばれる強くて冷たい北西の季節風が吹き抜けます。風を通さない防風アウター、ストール、手袋を必ずご用意ください。</p>
      <p><strong>【点灯前入場で駐車場スムーズ】</strong> イルミネーションの点灯は17:00。16:30頃までに駐車場に入っておくと渋滞なしで駐車でき、夕暮れのマジックアワーからイルミネーション点灯の瞬間までを贅沢に味わえます。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2 my-8">
  🏨 浜名湖ビュー＆名湯・三大味覚を味わう！厳選温泉宿・ホテル5選
</h2>

<!-- 宿1: 浜名湖かんざんじ温泉 山水館欣龍 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">創業大正8年・全室浜名湖ビューの数寄屋造り割烹旅館・極上うなぎとどうまん蟹</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 浜名湖かんざんじ温泉 山水館欣龍（静岡県浜松市中央区舘山寺町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKinryu.reviewAverage}（${hKinryu.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKinryu.hotelImageUrl}" alt="${hKinryu.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKinryu.roomImageUrl || hKinryu.hotelImageUrl}" alt="${hKinryu.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> かんざんじ温泉の中心に位置し、大正時代から続く伝統の割烹旅館。客室は全室が穏やかな浜名湖に面しており、夕暮れ時には水面が黄金色に染まる絶景をプライベートな空間から堪能できます。
      </p>
      <p>
        <strong>【総檜造りの温泉風呂】</strong> 樹齢数百年を数える古代檜を贅沢に使用した大浴場「古代檜の湯」と露天風呂。塩分を豊富に含むかんざんじ温泉の湯は保温効果が抜群で、湯上がり後もポカポカとした温もりが持続します。
      </p>
      <p>
        <strong>【割烹旅館の真髄・本格会席】</strong> 料理長が一品一品丹精込めて仕立てる夕食会席は、冬の浜名湖うなぎの蒲焼きや白焼き、ふぐ、そして冬限定の「どうまん蟹」プランなど、美食を求める大人の旅に相応しい逸品揃いです。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hKinryu.hotelMinCharge || 19635).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hKinryu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: ホテル ウェルシーズン浜名湖 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-orange-100 text-orange-900 font-black text-xs rounded-full">静岡県下最大級の温泉テーマパーク「華咲の湯」直結・豪華バイキングリゾート</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. ホテル ウェルシーズン浜名湖（静岡県浜松市中央区舘山寺町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-orange-50 border border-orange-300 text-orange-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hWellseason.reviewAverage}（${hWellseason.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hWellseason.hotelImageUrl}" alt="${hWellseason.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hWellseason.roomImageUrl || hWellseason.hotelImageUrl}" alt="${hWellseason.hotelName} 温泉" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> はままつフラワーパークまで車で約5分、遊園地「パルパル」に隣接するリゾートホテル。家族連れや三世代旅行、カップルまで幅広い層に圧倒的な支持を受ける人気の宿です。
      </p>
      <p>
        <strong>【巨大温泉施設「華咲の湯」】</strong> 宿泊者は県下最大級の日帰り温泉「華咲の湯」と宿泊者専用露天風呂「ひとときの湯」を無料で利用可能。2種類の源泉と26カ所もの浴槽があり、贅沢な湯めぐりを楽しめます。
      </p>
      <p>
        <strong>【健康ビュッフェ「るぴなす」】</strong> 専任シェフが目の前で調理するライブキッチンバイキング。浜名湖名産のうなぎご飯や、地元の新鮮野菜、旬の魚介を使った出来立て料理をお腹いっぱい堪能できます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hWellseason.hotelMinCharge || 11550).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hWellseason.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-orange-700 hover:bg-orange-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: グランドメルキュール浜名湖リゾート＆スパ -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-sky-100 text-sky-900 font-black text-xs rounded-full">雄大な浜名湖を望む大型リゾート・オールインクルーシブで楽しむ極上ステイ</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. グランドメルキュール浜名湖リゾート＆スパ（静岡県浜松市中央区雄踏町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-sky-50 border border-sky-300 text-sky-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hGrand.reviewAverage}（${hGrand.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hGrand.hotelImageUrl}" alt="${hGrand.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hGrand.roomImageUrl || hGrand.hotelImageUrl}" alt="${hGrand.hotelName} ロビーラウンジ" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 浜名湖の南岸、雄踏エリアに位置するスタイリッシュなプレミアムリゾート。宿泊料金に夕朝食のビュッフェ、ラウンジでのアルコールやソフトドリンク、おつまみが含まれる「オールインクルーシブ」スタイルが魅力です。
      </p>
      <p>
        <strong>【雄踏温泉露天風呂とサウナ】</strong> 自家源泉「ゆうとう温泉」を満たした広々とした露天風呂と大浴場、サウナを完備。開放感ある空間でリラクゼーションのひとときを過ごせます。
      </p>
      <p>
        <strong>【地産地消のビュッフェダイニング】</strong> 地元の旬の食材を世界各国の調理法で昇華させたビュッフェ。うなぎ料理や静岡茶を使ったスイーツなど、遠州の豊かな食文化をスタイリッシュに楽しめます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hGrand.hotelMinCharge || 4252).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hGrand.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-sky-700 hover:bg-sky-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 浜名湖かんざんじ温泉 時わすれ 開華亭 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">7種のお風呂が彩る庭園大浴場・浜名湖名物うなぎと三ヶ日牛を味わう温泉旅館</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 浜名湖かんざんじ温泉 時わすれ 開華亭（静岡県浜松市中央区舘山寺町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKaikatei.reviewAverage}（${hKaikatei.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKaikatei.hotelImageUrl}" alt="${hKaikatei.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKaikatei.roomImageUrl || hKaikatei.hotelImageUrl}" alt="${hKaikatei.hotelName} 庭園風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> かんざんじ温泉街の静かな一角に佇む純和風旅館。はままつフラワーパークへのアクセスも良好で、温泉情緒と細やかな接客サービスが落ち着いた旅を求める旅行者に喜ばれています。
      </p>
      <p>
        <strong>【庭園露天風呂「開華の湯」】</strong> 緑豊かな日本庭園に囲まれた露天風呂や気泡風呂、サウナなど7種類の浴槽を完備。夜には庭園がライトアップされ、優雅な湯浴みを堪能できます。
      </p>
      <p>
        <strong>【うなぎ釜飯と三ヶ日牛会席】</strong> 夕食は香ばしく焼き上げたうなぎを炊き立てのご飯とともに味わう「うなぎ釜飯」や、ブランド牛「三ヶ日牛」の陶板焼きをメインとした会席料理が絶品です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hKaikatei.hotelMinCharge || 17600).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hKaikatei.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 三ヶ日温泉 浜名湖レークサイドプラザ -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-teal-100 text-teal-900 font-black text-xs rounded-full">奥浜名湖・三ヶ日の湖畔に広がるリゾートホテル・三ヶ日温泉と海鮮ディナー</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 三ヶ日温泉 浜名湖レークサイドプラザ（静岡県浜松市浜名区三ヶ日町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-teal-50 border border-teal-300 text-teal-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hLakeside.reviewAverage}（${hLakeside.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hLakeside.hotelImageUrl}" alt="${hLakeside.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hLakeside.roomImageUrl || hLakeside.hotelImageUrl}" alt="${hLakeside.hotelName} 露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 静かな奥浜名湖・三ヶ日エリアの湖畔に建つ大型リゾート。広々とした敷地には愛犬と泊まれる専用客室やドッグランも完備され、ペット連れの冬旅行にも最適です。
      </p>
      <p>
        <strong>【奥浜名湖を望む三ヶ日温泉「万葉の華」】</strong> アルカリ性単純温泉の天然温泉露天風呂。冬の澄んだ湖面を眺めながらの入浴は肌がすべすべになり、高いリラックス効果をもたらします。
      </p>
      <p>
        <strong>【浜名湖名産バイキング】</strong> 夕食は浜名湖うなぎの蒲焼きや新鮮な握り寿司、ステーキが並ぶ豪華バイキング。三ヶ日みかんを使ったデザートも人気です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${(hLakeside.hotelMinCharge || 9900).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hLakeside.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-teal-700 hover:bg-teal-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="sightseeing" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6 leading-relaxed">
  フラワーパークイルミネーションと合わせて訪れたい、浜名湖周辺の観光名所をWikipedia公式データとともにご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-amber-700 font-bold text-sm">📍 はままつフラワーパーク（浜松市フラワーパーク）</span>
    </div>
    ${wFlowerPark.thumbnail ? `<img src="${wFlowerPark.thumbnail}" alt="${wFlowerPark.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wFlowerPark.extract || '浜名湖畔に位置する植物園。約3,000種の花々が咲き誇り、冬期には大温室クリスタルパレスを中心とした約100万球のイルミネーションイベントが開催されます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-amber-700 font-bold text-sm">📍 浜名湖（汽水湖・うなぎ養殖発祥の地）</span>
    </div>
    ${wHamanako.thumbnail ? `<img src="${wHamanako.thumbnail}" alt="${wHamanako.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wHamanako.extract || '静岡県浜松市と湖西市にまたがる汽水湖。複雑に入り組んだ入江を持ち、うなぎ・牡蠣・ノリの養殖が盛んで、冬には希少などうまん蟹が水揚げされます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-amber-700 font-bold text-sm">📍 舘山寺温泉（かんざんじおんせん）</span>
    </div>
    ${wKanzanji.thumbnail ? `<img src="${wKanzanji.thumbnail}" alt="${wKanzanji.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wKanzanji.extract || '浜名湖北東岸の内浦湾に面した温泉街。塩分を多く含む強塩泉で湯冷めしにくく、名刹・舘山寺や湖上ロープウェイなど見どころが集中しています。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-amber-700 font-bold text-sm">📍 弁天島（赤鳥居・夕日の絶景スポット）</span>
    </div>
    ${wBentenjima.thumbnail ? `<img src="${wBentenjima.thumbnail}" alt="${wBentenjima.title}" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wBentenjima.extract || '浜名湖の今切口北側に位置する島。海浜公園のいかり瀬に建つ高さ約18mの赤い大鳥居がシンボルで、冬には鳥居の中に沈む夕日の絶景で知られます。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2 my-8">
  🗺️ 冬の浜名湖イルミ＆三大美食満喫 1泊2日王道モデルコース
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-amber-700 text-white rounded text-xs">1日目</span>
      浜松駅から浜名湖へ・名物うなぎランチから夕陽の弁天島、フラワーパーク夜間イルミへ
    </h3>
    <p class="leading-relaxed">
      11:30 JR浜松駅到着 ➔ 遠鉄バスまたはレンタカーで舘山寺温泉へ ➔ 12:30 老舗うなぎ店で香ばしい「浜名湖うな重」ランチ ➔ 14:00 かんざんじロープウェイで大草山展望台へ、浜名湖360度パノラマ鑑賞 ➔ 16:00 弁天島海浜公園へ移動、赤鳥居に沈む神々しい冬夕日を撮影 ➔ 17:00 はままつフラワーパーク入場・イルミネーション点灯！大温室クリスタルパレスの光のツリーと噴水ショー鑑賞 ➔ 19:00 かんざんじ温泉の宿へチェックイン ➔ 塩化物強塩泉の露天風呂で温まる ➔ 20:00 幻のどうまん蟹または三ヶ日牛会席ディナー。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-amber-700 text-white rounded text-xs">2日目</span>
      湖畔の朝風呂と名物「牡蠣カバ丼」、三ヶ日みかん狩り・お土産散歩
    </h3>
    <p class="leading-relaxed">
      08:00 浜名湖を望む朝露天風呂 ➔ 09:00 宿の和朝食 ➔ 10:00 チェックアウト ➔ 浜名湖遊覧船に乗船、30分の爽快な湖上クルーズ ➔ 12:00 湖畔の食事処で冬限定「浜名湖牡蠣カバ丼」ランチ（プリプリの牡蠣とうなぎタレの絶品コラボ） ➔ 13:30 三ヶ日みかん直売所でお土産購入 ➔ 15:30 浜松駅へ戻り、名物「浜松餃子」や「うなぎパイ」を購入して帰路へ。
    </p>
  </div>
</div>

<h2 id="comparison-table" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2 my-8">
  📊 浜名湖・舘山寺温泉 厳選5宿のスペック比較一覧
</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
      <tr>
        <th class="p-3">宿名</th>
        <th class="p-3">エリア・立地</th>
        <th class="p-3">楽天評価</th>
        <th class="p-3">宿泊目安(1名)</th>
        <th class="p-3">温泉・風呂特徴</th>
        <th class="p-3">自慢の料理</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-100 text-stone-700">
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">山水館欣龍</td>
        <td class="p-3">かんざんじ温泉中心・全室湖畔ビュー</td>
        <td class="p-3 font-bold text-amber-700">★ ${hKinryu.reviewAverage}</td>
        <td class="p-3">¥${(hKinryu.hotelMinCharge || 19635).toLocaleString()}〜</td>
        <td class="p-3">古代檜大浴場・保温効果抜群の強塩泉</td>
        <td class="p-3">本格割烹会席・浜名湖うなぎ・どうまん蟹</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ホテル ウェルシーズン浜名湖</td>
        <td class="p-3">フラワーパーク車5分・パルパル隣接</td>
        <td class="p-3 font-bold text-amber-700">★ ${hWellseason.reviewAverage}</td>
        <td class="p-3">¥${(hWellseason.hotelMinCharge || 11550).toLocaleString()}〜</td>
        <td class="p-3">県下最大級「華咲の湯」直結・26種浴槽</td>
        <td class="p-3">ライブキッチンバイキング「るぴなす」</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">グランドメルキュール浜名湖</td>
        <td class="p-3">浜名湖南岸・雄踏リゾート</td>
        <td class="p-3 font-bold text-amber-700">★ ${hGrand.reviewAverage}</td>
        <td class="p-3">¥${(hGrand.hotelMinCharge || 4252).toLocaleString()}〜</td>
        <td class="p-3">自家源泉ゆうとう温泉露天・サウナ</td>
        <td class="p-3">オールインクルーシブビュッフェ・ラウンジ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">時わすれ 開華亭</td>
        <td class="p-3">かんざんじ温泉・和風情緒</td>
        <td class="p-3 font-bold text-amber-700">★ ${hKaikatei.reviewAverage}</td>
        <td class="p-3">¥${(hKaikatei.hotelMinCharge || 17600).toLocaleString()}〜</td>
        <td class="p-3">7種のお風呂が彩る庭園大浴場</td>
        <td class="p-3">うなぎ釜飯と三ヶ日牛会席</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">浜名湖レークサイドプラザ</td>
        <td class="p-3">奥浜名湖・三ヶ日湖畔</td>
        <td class="p-3 font-bold text-amber-700">★ ${hLakeside.reviewAverage}</td>
        <td class="p-3">¥${(hLakeside.hotelMinCharge || 9900).toLocaleString()}〜</td>
        <td class="p-3">美肌の湯「三ヶ日温泉万葉の華」露天</td>
        <td class="p-3">浜名湖名産バイキング・愛犬同伴対応</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2 my-8">
  ❓ はままつフラワーパークイルミ＆浜名湖冬旅のよくある質問（FAQ）
</h2>

<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q1. はままつフラワーパークのイルミネーション期間と点灯時間は？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 例年11月下旬から翌年1月上旬まで開催されます。点灯時間は17:00から閉園（平日20:00、土日祝・クリスマス時期は20:30または21:00）まで。大温室クリスタルパレスは暖房完備のため、寒い日でも快適に鑑賞できます。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q2. 「牡蠣カバ丼」はどこで食べられますか？食べられる時期は？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 浜名湖名物「牡蠣カバ丼」は、例年11月上旬から翌年3月中旬までの期間限定で、かんざんじ温泉街や浜名湖周辺の約15店舗の日本料理店や食事処で提供されます。浜名湖産のぷりぷりの生牡蠣とうなぎのタレの相性が抜群です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q3. 「幻のどうまん蟹」とはどんな蟹ですか？味の特徴は？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 正式名称はトゲノコギリガザミ。南方のマングローブなどに生息する大型の蟹で、浜名湖が日本における生息の北限とされています。水揚げ量が極めて少なく「幻の蟹」と呼ばれ、冬のメスは濃厚な内子と甘みのある太い爪肉が絶品です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q4. 車以外でのアクセスは可能ですか？バスはありますか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. JR浜松駅北口バスターミナル（1番乗り場）から遠鉄バス「舘山寺温泉行き」が約15分間隔で運行されており、約45分で「フラワーパーク」や「舘山寺温泉」へ直通でアクセスできます。公共交通機関のみでも十分に観光可能です。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-100 border border-stone-200 text-center space-y-3">
  <h3 class="text-base font-bold text-stone-900">静岡・東海道エリアの温泉＆旬の観光特集も合わせてチェック！</h3>
  <ul class="text-xs text-stone-600 space-y-1.5 inline-block text-left">
    <li>👉 <a href="/winter-shizuoka-minamiizu-shimogamo-onsen-iseebi-kinmedai-stay/" class="text-amber-800 hover:text-amber-600 underline">南伊豆下加茂温泉の伊勢海老＆金目鯛名宿ガイド</a></li>
    <li>👉 <a href="/shizuoka/" class="text-amber-800 hover:text-amber-600 underline">静岡県の温泉地・宿・旬の観光特集一覧</a></li>
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
    image: hKinryu.hotelImageUrl,
    other_images: [
      hWellseason.hotelImageUrl,
      hGrand.hotelImageUrl,
      hKaikatei.hotelImageUrl,
      hLakeside.hotelImageUrl
    ],
    hotel_name: `${hKinryu.hotelName}・${hWellseason.hotelName} ほか`,
    affiliate_url: hKinryu.affiliateUrl,
    categories: ["冬のイベント特集", "イルミネーション", "はままつフラワーパーク", "浜名湖", "かんざんじ温泉", "うなぎ"],
    price: `¥${(hGrand.hotelMinCharge || 4252).toLocaleString()}〜`,
    rating: hKinryu.reviewAverage || 4.53,
    review_count: hWellseason.reviewCount || 1840,
    date: date,
    is_special_feature: true,
    keywords: [
      "はままつフラワーパーク イルミネーション 2026 2027 点灯時間",
      "浜名湖 どうまん蟹 宿 旅館 食べられる",
      "浜名湖 牡蠣カバ丼 時期 名店 おすすめ",
      "舘山寺温泉 ホテル おすすめ 露天風呂",
      "山水館欣龍 宿泊記 うなぎ 口コミ",
      "ホテルウェルシーズン浜名湖 華咲の湯 バイキング"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["はままつフラワーパーク", "浜名湖", "舘山寺温泉", "どうまん蟹", "牡蠣カバ丼", "浜名湖うなぎ", "冬の静岡旅行"]
---

# ${title}

11月下旬〜1月開催！はままつフラワーパークの冬イルミネーション「フラワー・イルミネーション」。

大温室クリスタルパレスの光のショーや噴水イルミを徹底ガイド。

冬に旬を迎える幻の濃厚「どうまん蟹」、浜名湖産牡蠣を香ばしく焼き上げた名物「牡蠣カバ丼」、本場「浜名湖うなぎ」の三大美食と、弁天島の鳥居に沈む夕日絶景、かんざんじ温泉の塩化物泉露天風呂を堪能する厳選宿5選を完全網羅します。

---

## 💡 現地ライター直伝！はままつフラワーパークイルミ＆浜名湖冬グルメ攻略

- **大温室クリスタルパレスの巨大ツリー:** 暖房完備の温室内で約8mのモミの木ツリーとポインセチアの光のショーを快適鑑賞。
- **弁天島の赤鳥居と沈む夕日:** 冬至前後の夕暮れ時、大鳥居の真ん中に落ちる夕陽の絶景は息を呑む美しさ。
- **浜名湖の三大冬グルメ:** 幻の「どうまん蟹」、冬限定「牡蠣カバ丼」、脂がのった本場「浜名湖うなぎ」を制覇。
- **遠州のからっ風対策:** 雪は少ないものの北西の季節風が冷たいため、防風アウター・ストール・手袋の着用が必須。

---

## 🏨 浜名湖ビュー＆名湯・三大味覚を味わう！厳選温泉宿・ホテル5選

### 1. 浜名湖かんざんじ温泉 山水館欣龍（静岡県浜松市中央区舘山寺町）
- **特徴:** 創業大正8年・全室浜名湖ビューの数寄屋造り割烹旅館。古代檜大浴場と塩化物強塩泉。極上浜名湖うなぎやどうまん蟹会席。
- **宿泊目安:** 1名 ¥${(hKinryu.hotelMinCharge || 19635).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hKinryu.reviewAverage}（${hKinryu.reviewCount}件）
- 👉 [山水館欣龍の空室・宿泊プランを見る](${hKinryu.affiliateUrl})

### 2. ホテル ウェルシーズン浜名湖（静岡県浜松市中央区舘山寺町）
- **特徴:** 静岡県下最大級の温泉施設「華咲の湯」直結（26カ所の浴槽）。シェフが目の前で調理する豪華ライブバイキングが好評。
- **宿泊目安:** 1名 ¥${(hWellseason.hotelMinCharge || 11550).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hWellseason.reviewAverage}（${hWellseason.reviewCount}件）
- 👉 [ホテル ウェルシーズン浜名湖の空室・宿泊プランを見る](${hWellseason.affiliateUrl})

### 3. グランドメルキュール浜名湖リゾート＆スパ（静岡県浜松市中央区雄踏町）
- **特徴:** 浜名湖南岸のスタイリッシュなプレミアムリゾート。夕朝食やラウンジのドリンクが含まれるオールインクルーシブステイ。
- **宿泊目安:** 1名 ¥${(hGrand.hotelMinCharge || 4252).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hGrand.reviewAverage}（${hGrand.reviewCount}件）
- 👉 [グランドメルキュール浜名湖の空室・宿泊プランを見る](${hGrand.affiliateUrl})

### 4. 浜名湖かんざんじ温泉 時わすれ 開華亭（静岡県浜松市中央区舘山寺町）
- **特徴:** 緑豊かな庭園露天風呂など7種のお風呂が自慢の和風旅館。香ばしいうなぎ釜飯やブランド三ヶ日牛陶板焼き会席。
- **宿泊目安:** 1名 ¥${(hKaikatei.hotelMinCharge || 17600).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hKaikatei.reviewAverage}（${hKaikatei.reviewCount}件）
- 👉 [時わすれ 開華亭の空室・宿泊プランを見る](${hKaikatei.affiliateUrl})

### 5. 三ヶ日温泉 浜名湖レークサイドプラザ（静岡県浜松市浜名区三ヶ日町）
- **特徴:** 奥浜名湖・三ヶ日の湖畔に広がるリゾート。美肌の湯「三ヶ日温泉万葉の華」露天風呂。ドッグラン完備で愛犬同伴にも最適。
- **宿泊目安:** 1名 ¥${(hLakeside.hotelMinCharge || 9900).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hLakeside.reviewAverage}（${hLakeside.reviewCount}件）
- 👉 [浜名湖レークサイドプラザの空室・宿泊プランを見る](${hLakeside.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **はままつフラワーパーク:** ${wFlowerPark.extract || '約3,000種の花々が咲き誇る植物園。冬期には大温室クリスタルパレスを中心とした約100万球のイルミネーションが開催。'}
- **浜名湖:** ${wHamanako.extract || '淡水と海水が混ざり合う汽水湖。うなぎ・牡蠣・ノリ養殖が盛んで、冬には希少などうまん蟹が水揚げ。'}
- **舘山寺温泉:** ${wKanzanji.extract || '内浦湾に面した温泉街。塩分を多く含む強塩泉で湯冷めしにくく、名刹舘山寺や湖上ロープウェイなど見どころが豊富。'}
- **弁天島:** ${wBentenjima.extract || '海浜公園に建つ高さ約18mの赤い大鳥居がシンボル。冬には鳥居の中に沈む夕日の絶景で知られる。'}

---

## 🗺️ 浜名湖イルミ＆三大美食 1泊2日モデルコース

- **1日目:** 浜松駅到着 ➔ 舘山寺温泉へ ➔ 浜名湖うな重ランチ ➔ ロープウェイで大草山展望台へ ➔ 弁天島で赤鳥居夕日鑑賞 ➔ 17:00 フラワーパークイルミ鑑賞 ➔ 宿チェックイン ➔ 強塩泉露天風呂 ➔ どうまん蟹・三ヶ日牛ディナー
- **2日目:** 朝の湖畔露天風呂 ➔ 和朝食 ➔ チェックアウト ➔ 浜名湖遊覧船クルーズ ➔ 牡蠣カバ丼ランチ ➔ 三ヶ日みかん直売所 ➔ 浜松駅でお土産購入 ➔ 帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. フラワーパークのイルミネーションの点灯時間は？**  
A. 11月下旬〜1月上旬の17:00から閉園（20:00〜21:00）まで点灯します。温室内は暖かく快適です。

**Q2. 牡蠣カバ丼が食べられる時期は？**  
A. 例年11月上旬〜翌年3月中旬までの期間限定で、かんざんじ温泉周辺の約15店舗で提供されます。

**Q3. どうまん蟹を食べるコツは？**  
A. 水揚げが少ないため、宿泊予約時に「どうまん蟹プラン」を事前確約しておくのが最も確実です。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【静岡・浜名湖/舘山寺】はままつフラワーパークイルミ＆浜名湖冬の三大味覚完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/${slug}/)
`;

  return { postData, noteMarkdown };
};
