// scripts/new_articles/article20_atami.js
module.exports = function buildArticle20(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-shizuoka-atami-winter-fireworks-baien-momiji-ume-hotels-guide";
  const title = "【静岡・熱海】熱海海上花火大会（冬）＆熱海梅園「日本一遅い紅葉と日本一早い梅」完全攻略！澄んだ冬空を焦がす大空中ナイアガラと相模湾金目鯛・伊勢海老を愉しむ熱海温泉の名宿5選";
  const description = "11月中旬〜12月上旬の「日本一遅い紅葉」から、12月中旬の澄み切った冬空に轟く「熱海海上花火大会」、そして1月上旬からの「日本一早い梅まつり」へと季節が美しくリレーする冬の熱海温泉。すり鉢状の熱海湾が創り出す天然の音響スタジアム効果と、夜空と海面を銀色に染め上げる大空中ナイアガラは圧巻の迫力。客室や露天風呂から花火を真正面に望む特等席ホテルや、徳川家康ゆかりの源泉を満喫できる老舗宿、相模湾の脂の乗った地金目鯛姿煮付けや伊勢海老を堪能できる厳選5宿を徹底解説。";
  const date = "2026-11-02";
  const prefecture = "静岡県";
  const area = "熱海・伊豆山・網代";

  const hAkao = hotels.find(h => h.hotelNo === 5417) || hotels[0];
  const hKorakuen = hotels.find(h => h.hotelNo === 1656) || hotels[1];
  const hFuruya = hotels.find(h => h.hotelNo === 16668) || hotels[2];
  const hShukaen = hotels.find(h => h.hotelNo === 7666) || hotels[3];
  const hKinjokan = hotels.find(h => h.hotelNo === 9557) || hotels[4];

  const wAtami = wiki["熱海温泉"] || {};
  const wBaien = wiki["熱海梅園"] || {};
  const wHanabi = wiki["熱海海上花火大会"] || {};
  const wOmiya = wiki["お宮の松"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-rose-950 via-purple-950 to-indigo-950 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-rose-300 font-extrabold text-xs">
      <span>🎆</span><span>2026年冬 熱海海上花火大会＆熱海梅園もみじ・梅速報</span>
    </div>
    <p class="text-xs text-rose-100">
      12月は澄み渡る冬空に響く圧巻の花火大会！日本一遅い紅葉と日本一早い梅が交差する熱海梅園、そして相模湾の地金目鯛と客室から花火を望む絶景宿で至福の温泉旅を。
    </p>
  </div>
  <a href="${hAkao.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-rose-500 hover:bg-rose-400 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    🎆 ホテルニューアカオの空室を見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 mb-4">
  冬空に轟く銀色の閃光！「日本一遅い紅葉」と「日本一早い梅」を結ぶ熱海の奇跡
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  都心から東海道新幹線でわずか約45分という圧倒的な近さを誇る日本屈指の温泉リゾート・静岡県熱海。温暖な気候に恵まれた熱海には、冬にしか味わえない特別な自然とイベントの奇跡的なグラデーションが存在します。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  11月中旬から12月上旬にかけて開催される「熱海梅園もみじまつり」は、温暖な気候ゆえに全国で最も遅く見頃を迎える「日本一遅い紅葉」。初川の清流沿いに約380本のカエデやモミジが燃え立つように色づき、夜間のライトアップでは水面に艶やかな錦秋が映し出されます。そして12月に入ると、澄み渡った冬の大気の中で開催される「熱海海上花火大会」。三方を山に囲まれたすり鉢状の熱海湾は巨大な天然スタジアムとなって爆発音をダイレクトに反響させ、体の芯まで重低音がビリビリと震える臨場感を生み出します。銀色の光が夜空全体を埋め尽くすクライマックスの「大空中ナイアガラ」は、息を呑む壮大さです。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  さらに年が明けた1月上旬からは、同じ熱海梅園で早くも「熱海梅園梅まつり」が開幕。「日本一早い梅」として知られる早咲きの白梅・紅梅が次々とほころび始め、春の訪れをいち早く告げます。この奇跡のリレーを満喫しながら、徳川家康も愛した名湯に浸かり、冬に一番脂が乗る相模湾の「地金目鯛の姿煮付け」や伊勢海老に舌鼓を打つ極上の滞在をご紹介します。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-6">
  🎪 冬の熱海海上花火大会 観覧の極意＆熱海梅園の散策術
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-rose-100 text-rose-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">冬花火の特等席とスタジアム音響の秘密</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>冬の空気と花火の美しさ:</strong> 冬は夏に比べて湿度が低く大気が澄み切っているため、煙が滞留せず、花火本来の色彩とシャープな光の軌跡が驚くほど鮮明に鑑賞できます。</p>
      <p>② <strong>フィナーレ「大空中ナイアガラ」:</strong> 熱海海上花火大会の代名詞。仕掛け花火ではなく、海面から夜空高く数千発の白銀の閃光が一斉に打ち上がり、視界全体が昼間のように真っ白に輝く瞬間は鳥肌が立つほどの感動です。</p>
      <p>③ <strong>宿泊者専用の特等席:</strong> 熱海サンビーチの砂浜や親水公園の観覧場所はもちろんですが、花火が見えるオーシャンビュー客室や露天風呂を備えた宿を確保すれば、寒さを気にせずプライベートに贅沢な特等席を独占できます。</p>
      <p>④ <strong>熱海梅園のもみじ＆早咲き梅:</strong> 園内には足湯や「韓国庭園」「中山晋平記念館」があり、紅葉と早咲き梅のコントラストをのんびり散策できます。夜間ライトアップは16:30〜21:00まで入場無料。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-purple-100 text-purple-800 font-extrabold text-xs rounded-lg">混雑＆寒さ対策</span>
      <h3 class="text-base font-bold text-stone-900">新幹線アクセスと花火終了後の帰宅戦略</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【花火大会当日の交通規制】</strong> 花火開催日の20:00〜21:00頃は親水公園周辺の国道135号線が大渋滞となります。日帰り利用の場合は新幹線またはJR東海道線を利用するか、熱海駅周辺の駐車場に早めに停めて徒歩で移動するのが鉄則です。</p>
      <p><strong>【海風と夜間の寒さ対策】</strong> 温暖な熱海でも、夜の海辺（親水公園・サンビーチ）は冷たい海風が吹き込みます。防風性のあるコート、マフラー、ニット帽、使い捨てカイロ、座って観覧するための厚手アルミレジャーシートを用意しましょう。</p>
      <p><strong>【新幹線予約のポイント】</strong> 花火終了後の熱海駅は東京方面・名古屋方面ともに改札口が大変混雑します。新幹線の指定席切符は事前に往復分を購入しておくか、熱海湾沿いの宿に一泊して翌日ゆっくり観光するのが最も賢明です。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-8">
  🏨 花火を真正面に望む特等席！熱海温泉の厳選宿5選
</h2>

<!-- 宿1: ホテルニューアカオ -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-rose-100 text-rose-900 font-black text-xs rounded-full">錦ヶ浦の断崖にそびえる名門・全室オーシャンフロント</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 熱海温泉 ホテルニューアカオ（静岡県熱海市熱海）</h3>
    </div>
    <span class="px-3 py-1.5 bg-rose-50 border border-rose-300 text-rose-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hAkao.reviewAverage}（${hAkao.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hAkao.hotelImageUrl}" alt="${hAkao.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hAkao.roomImageUrl || hAkao.hotelImageUrl}" alt="${hAkao.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">名勝・錦ヶ浦の波打ち際温泉「スパリウムニシキ」。花火を海から眺める特等席リゾート</p>
      <p>「ホテルニューアカオ」は、熱海随一の景勝地・錦ヶ浦の海に突き出すように建つシンボリックな大型リゾートホテル。昭和レトロとモダンが融合した壮大な建築美を誇り、客室はすべて相模湾を一望するオーシャンフロントです。自慢の露天風呂「スパリウムニシキ」は、海と湯舟が一体化するインフィニティ設計。寄せては返す波の音を聞きながら、遮るもののない大パノラマを楽しめます。花火大会の夜には、熱海湾越しに夜空を焦がす花火を客室や展望デッキから真正面に一望。夕食は巨大な円形シアターレストラン「メインダイニング錦」での豪華ビュッフェやフレンチコースで、伊豆の海の幸を思う存分堪能できます。</p>
      <div class="pt-2 flex flex-wrap gap-2 text-stone-600 font-medium">
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">住所: ${hAkao.address1}${hAkao.address2}</span>
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">アクセス: JR熱海駅より無料送迎バス運行（約10分）</span>
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">宿泊料金: 1名あたり ¥${(hAkao.hotelMinCharge || 15200).toLocaleString()}〜</span>
      </div>
      <div class="pt-3">
        <a href="${hAkao.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs rounded-xl shadow transition">
          <span>ホテルニューアカオの宿泊プラン・空室を見る</span>
          <span>→</span>
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 熱海後楽園ホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-indigo-100 text-indigo-900 font-black text-xs rounded-full">熱海港の目の前・日帰り温泉施設「Fuua」併設の人気リゾート</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 熱海温泉 熱海後楽園ホテル（静岡県熱海市和田浜南町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-indigo-50 border border-indigo-300 text-indigo-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKorakuen.reviewAverage}（${hKorakuen.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKorakuen.hotelImageUrl}" alt="${hKorakuen.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKorakuen.roomImageUrl || hKorakuen.hotelImageUrl}" alt="${hKorakuen.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">花火打ち上げ場所のすぐ正面！相模湾と熱海の夜景を独占する絶好のロケーション</p>
      <p>「熱海後楽園ホテル」は、熱海港に面し、海上花火の打ち上げ台船が目の前という最強の花火観覧ポジションを誇るリゾート。タワー館の客室バルコニーからは、視界いっぱいに花火の閃光と轟音が広がり、まるで自分専用の花火大会のような大迫力を体感できます。併設の「オーシャンスパ Fuua（フーア）」には、日本最大級の露天立ち湯があり、相模湾の海原と一体になったかのような浮遊感を味わえます。夕食はオープンキッチンでシェフが腕を振るうブッフェレストラン「HARBOR'S W」で、焼き立てのグリル料理や新鮮なお造り、静岡クラフトビールを満喫。カップルから三世代ファミリーまで誰もが笑顔になれる充実宿です。</p>
      <div class="pt-2 flex flex-wrap gap-2 text-stone-600 font-medium">
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">住所: ${hKorakuen.address1}${hKorakuen.address2}</span>
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">アクセス: JR熱海駅より無料送迎シャトルバスで約10分</span>
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">宿泊料金: 1名あたり ¥${(hKorakuen.hotelMinCharge || 13530).toLocaleString()}〜</span>
      </div>
      <div class="pt-3">
        <a href="${hKorakuen.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-xs rounded-xl shadow transition">
          <span>熱海後楽園ホテルの宿泊プラン・空室を見る</span>
          <span>→</span>
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 熱海温泉 古屋旅館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">創業1806年・熱海最古の源泉「清左衛門の湯」を守る老舗</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 熱海温泉 古屋旅館（静岡県熱海市東海岸町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hFuruya.reviewAverage}（${hFuruya.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hFuruya.hotelImageUrl}" alt="${hFuruya.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hFuruya.roomImageUrl || hFuruya.hotelImageUrl}" alt="${hFuruya.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">熱海七湯の源泉を100%単一供給。全室部屋食で味わう本格京風懐石の至宝</p>
      <p>「古屋旅館」は、文化3年（1806年）創業、熱海温泉で現存する最古の老舗高級旅館。熱海七湯の一つ「清左衛門の湯」を単一で保有し、加水・加温・循環ろ過を一切行わない本物の源泉かけ流しを貫いています。数寄屋造りの格調高い純和風客室には、源泉かけ流しの客室露天風呂を備えた部屋も多く、心ゆくまで名湯を独占できます。夕食は朝夕ともにプライベートな「お部屋食」にて提供。相模湾の朝獲れ地金目鯛の姿煮付けや伊勢海老、厳選された国産牛など、選び抜かれた食材を職人の手仕事で仕立てる本格京風懐石は圧巻の完成度。花火会場の親水公園まで徒歩約3分という利便性も兼ね備えた名門です。</p>
      <div class="pt-2 flex flex-wrap gap-2 text-stone-600 font-medium">
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">住所: ${hFuruya.address1}${hFuruya.address2}</span>
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">アクセス: JR熱海駅よりタクシー約5分（徒歩約15分）</span>
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">宿泊料金: 1名あたり ¥${(hFuruya.hotelMinCharge || 41030).toLocaleString()}〜</span>
      </div>
      <div class="pt-3">
        <a href="${hFuruya.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs rounded-xl shadow transition">
          <span>熱海温泉 古屋旅館の宿泊プラン・空室を見る</span>
          <span>→</span>
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 秀花園 湯の花膳 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-teal-100 text-teal-900 font-black text-xs rounded-full">熱海港の波止場沿い・全室海側の花火特等席旅館</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 熱海温泉 秀花園 湯の花膳（静岡県熱海市和田浜南町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-teal-50 border border-teal-300 text-teal-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hShukaen.reviewAverage}（${hShukaen.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hShukaen.hotelImageUrl}" alt="${hShukaen.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hShukaen.roomImageUrl || hShukaen.hotelImageUrl}" alt="${hShukaen.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">屋上展望露天風呂「月下美人」から望む熱海夜景。お部屋食で楽しむ海の幸会席</p>
      <p>「秀花園 湯の花膳」は、熱海港の波止場沿いに建ち、全室が相模湾と熱海市街の夜景を正面に見晴らすオーシャンビュー和風旅館。最上階の屋上展望露天風呂「月下美人」や展望大浴場からは、熱海湾の潮風を感じながら、夜空に咲く大輪の花火を見下ろすようなアングルで鑑賞できます。客室露天風呂付きの特別室も豊富で、プライベート空間での花火観覧に最適。夕食は朝夕ともにお部屋食で提供され、相模湾で獲れた新鮮な地魚のお造りや、名物の金目鯛煮付け、鮑の踊り焼きなど、伊豆の贅を尽くした和会席を気兼ねなくゆっくり堪能できます。</p>
      <div class="pt-2 flex flex-wrap gap-2 text-stone-600 font-medium">
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">住所: ${hShukaen.address1}${hShukaen.address2}</span>
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">アクセス: JR熱海駅よりタクシー約10分（事前予約制送迎あり）</span>
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">宿泊料金: 1名あたり ¥${(hShukaen.hotelMinCharge || 8000).toLocaleString()}〜</span>
      </div>
      <div class="pt-3">
        <a href="${hShukaen.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl shadow transition">
          <span>秀花園 湯の花膳の宿泊プラン・空室を見る</span>
          <span>→</span>
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 熱海温泉 金城館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-100 text-stone-900 font-black text-xs rounded-full">染井渓谷沿い・日本庭園と広々名湯をリーズナブルに</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 熱海温泉 金城館（伊東園ホテルズ）（静岡県熱海市昭和町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-stone-50 border border-stone-300 text-stone-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKinjokan.reviewAverage}（${hKinjokan.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKinjokan.hotelImageUrl}" alt="${hKinjokan.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKinjokan.roomImageUrl || hKinjokan.hotelImageUrl}" alt="${hKinjokan.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">優雅な日本庭園と広大な大浴場。バイキング＆飲み放題付きで安心のステイ</p>
      <p>「熱海温泉 金城館」は、かつて多くの賓客を迎えた名門旅館の風格を残しつつ、伊東園ホテルズならではの明朗な均一料金と飲み放題付きバイキングで気軽に温泉旅行を楽しめる人気宿です。優美な鯉が泳ぐ日本庭園を囲むように建ち、広々とした大浴場や露天風呂には熱海の名湯が贅沢に注がれています。夕食バイキングでは和洋中の多彩な料理に加え、生ビールや地酒などのアルコール類が追加料金なしで飲み放題。親水公園の花火観覧スポットまでも徒歩約10分と散策に適した距離にあり、グループ旅行や家族旅行で気兼ねなく熱海の夜を満喫できます。</p>
      <div class="pt-2 flex flex-wrap gap-2 text-stone-600 font-medium">
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">住所: ${hKinjokan.address1}${hKinjokan.address2}</span>
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">アクセス: JR熱海駅より路線バス「清水町」下車徒歩約2分</span>
        <span class="bg-stone-100 px-2.5 py-1 rounded-md">宿泊料金: 1名あたり ¥${(hKinjokan.hotelMinCharge || 8448).toLocaleString()}〜</span>
      </div>
      <div class="pt-3">
        <a href="${hKinjokan.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-700 hover:bg-stone-800 text-white font-bold text-xs rounded-xl shadow transition">
          <span>熱海温泉 金城館の宿泊プラン・空室を見る</span>
          <span>→</span>
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="nearby-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6">
  熱海エリアの代表的観光スポットの公式情報と、各宿からのアクセス・冬期観光のポイントをまとめました。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <!-- スポット1: 熱海海上花火大会 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4">
    <div class="flex items-center justify-between border-b border-stone-100 pb-3">
      <h3 class="text-base font-bold text-stone-900">熱海海上花火大会</h3>
      <span class="text-xs bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full font-bold">公式連携</span>
    </div>
    ${wHanabi.thumbnail ? `<img src="${wHanabi.thumbnail}" alt="熱海海上花火大会" class="w-full h-48 object-cover rounded-xl border border-stone-100" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wHanabi.extract || '静岡県熱海市の熱海湾で年間を通して開催される花火大会。1952年に始まった歴史を持ち、すり鉢状の湾形による大音響が名物。'}
    </p>
    <div class="text-xs bg-stone-50 p-3 rounded-xl border border-stone-100 text-stone-600">
      📍 <strong>アクセス・鑑賞のコツ:</strong> 熱海湾（熱海港〜親水公園）。冬の打ち上げ時間は20:20〜20:40。ニューアカオや後楽園ホテル、秀花園からは目の前で鑑賞可能。
    </div>
  </div>

  <!-- スポット2: 熱海梅園 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4">
    <div class="flex items-center justify-between border-b border-stone-100 pb-3">
      <h3 class="text-base font-bold text-stone-900">熱海梅園（あたみばいえん）</h3>
      <span class="text-xs bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full font-bold">公式連携</span>
    </div>
    ${wBaien.thumbnail ? `<img src="${wBaien.thumbnail}" alt="熱海梅園" class="w-full h-48 object-cover rounded-xl border border-stone-100" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wBaien.extract || '明治19年に開園した庭園。「日本一早咲きの梅」と「日本一遅い紅葉」で広く知られ、早春の梅まつりや初冬のもみじまつりが人気。'}
    </p>
    <div class="text-xs bg-stone-50 p-3 rounded-xl border border-stone-100 text-stone-600">
      📍 <strong>アクセス・鑑賞のコツ:</strong> JR来宮駅より徒歩約10分。11月中旬〜12月上旬は紅葉ライトアップ、1月上旬からは梅まつりが開幕。園内の足湯もおすすめ。
    </div>
  </div>

  <!-- スポット3: 熱海温泉 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4">
    <div class="flex items-center justify-between border-b border-stone-100 pb-3">
      <h3 class="text-base font-bold text-stone-900">熱海温泉（あたみおんせん）</h3>
      <span class="text-xs bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full font-bold">公式連携</span>
    </div>
    ${wAtami.thumbnail ? `<img src="${wAtami.thumbnail}" alt="熱海温泉" class="w-full h-48 object-cover rounded-xl border border-stone-100" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wAtami.extract || '静岡県熱海市にある名湯。奈良時代開湯と伝わり、徳川家康が湯治に訪れたことでも名高い日本屈指の温泉地。'}
    </p>
    <div class="text-xs bg-stone-50 p-3 rounded-xl border border-stone-100 text-stone-600">
      📍 <strong>アクセス・鑑賞のコツ:</strong> 豊富な湯量と高温泉が特徴。塩化物泉が多く、冬の湯冷めを防ぎ身体をポカポカに保ってくれる美肌の湯。
    </div>
  </div>

  <!-- スポット4: お宮の松 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4">
    <div class="flex items-center justify-between border-b border-stone-100 pb-3">
      <h3 class="text-base font-bold text-stone-900">お宮の松・貫一お宮の像</h3>
      <span class="text-xs bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full font-bold">公式連携</span>
    </div>
    ${wOmiya.thumbnail ? `<img src="${wOmiya.thumbnail}" alt="お宮の松" class="w-full h-48 object-cover rounded-xl border border-stone-100" loading="lazy" />` : ''}
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wOmiya.extract || '尾崎紅葉の小説『金色夜叉』の舞台として知られる熱海海岸の松林と記念碑。熱海観光の定番シンボルスポット。'}
    </p>
    <div class="text-xs bg-stone-50 p-3 rounded-xl border border-stone-100 text-stone-600">
      📍 <strong>アクセス・鑑賞のコツ:</strong> 熱海サンビーチ沿い。夜間はヤシ並木やビーチとともにライトアップされ、冬の散策・記念撮影にぴったり。
    </div>
  </div>
</div>

<h2 id="winter-itinerary" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-8">
  🗺️ 1泊2日 熱海海上花火大会＆熱海梅園・冬の美食満喫モデルコース
</h2>

<div class="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4 text-xs text-stone-700 leading-relaxed">
  <div class="border-l-4 border-rose-600 pl-4 py-1 space-y-1">
    <h3 class="text-sm font-bold text-stone-900">【1日目】新幹線で熱海へ・熱海梅園散策と特等席での海上花火大会</h3>
    <p>・<strong>12:30</strong> 東京駅より東海道新幹線で熱海駅へ（約45分）。駅前平和通り商店街で熱海プリンや温泉まんじゅうを食べ歩き。</p>
    <p>・<strong>14:00</strong> タクシーまたは伊豆箱根バスで「熱海梅園」へ。日本一遅い紅葉（11月〜12月）または日本一早い早咲き梅（1月）を鑑賞し、園内の足湯で温まる。</p>
    <p>・<strong>16:00</strong> 「ホテルニューアカオ」または「熱海後楽園ホテル」にチェックイン。オーシャンビューの客室露天や大浴場で相模湾を眺めながら入浴。</p>
    <p>・<strong>18:00</strong> 脂が乗った地金目鯛の姿煮付けや伊勢海老の刺身を盛り込んだ豪華夕食に舌鼓。</p>
    <p>・<strong>20:20</strong> 客室バルコニーまたは親水公園特等席で「熱海海上花火大会」を鑑賞！フィナーレの大空中ナイアガラの轟音と光の雨に酔いしれる。</p>
  </div>

  <div class="border-l-4 border-purple-600 pl-4 py-1 space-y-1">
    <h3 class="text-sm font-bold text-stone-900">【2日目】来宮神社の大楠参拝と熱海サンビーチ散策・帰路へ</h3>
    <p>・<strong>08:30</strong> 宿で焼きたての干物やアジのたたきが並ぶ贅沢な和朝食を堪能。</p>
    <p>・<strong>10:00</strong> 国指定天然記念物の樹齢2,100年を超える大楠がそびえるパワースポット「来宮神社」へ参拝。大楠の周囲を一周して無病息災・延命長寿を祈願。</p>
    <p>・<strong>12:00</strong> 熱海銀座商店街の老舗喫茶店や干物ダイニングでランチ。</p>
    <p>・<strong>14:00</strong> 熱海駅ラスカでお土産の干物や温泉銘菓を購入し、新幹線で快適に帰路へ。</p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-8">
  ❓ 熱海海上花火大会（冬）＆熱海観光 よくある質問（FAQ）
</h2>

<div class="space-y-4">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q1. 冬の熱海海上花火大会は雨天でも開催されますか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 雨天決行です。台風などの極端な荒天や強風で危険と判断された場合を除き、多少の雨や雪でも予定通り開催されます。雨天時は傘を差しながらの観覧は視界を遮り危険なため、レインコートを着用してください。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q2. 冬の花火の打ち上げ時間と所要時間は？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 冬季の熱海海上花火大会は原則として20:20〜20:40の20分間で開催されます。時間は20分間ですが、約3,000発の花火が凝縮して連続打ち上げされるため、中だるみが一切なく圧倒的な迫力と満足感が得られます。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q3. 熱海梅園の紅葉と梅は同じ時期に見られますか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 例年12月上旬から中旬にかけて、見頃のピークを迎えた遅咲きのモミジと、ほころび始めた早咲きの冬至梅（とうじばい）や八重寒紅（やえかんこう）が同じ園内で共演する非常に珍しい光景が見られます。初冬の熱海ならではの絶景です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q4. 花火が見える客室を確実に予約するコツは？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 「花火観覧確約プラン」や「オーシャンビュー客室」と明記された宿泊プランを選択するのが確実です。街側（山側）の客室からは花火が見えない場合があるため、予約時に客室の向きを必ず確認してください。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-100 border border-stone-200 text-center space-y-3">
  <h3 class="text-base font-bold text-stone-900">熱海・伊豆の温泉旅行・関連記事もチェック！</h3>
  <ul class="text-xs text-stone-600 space-y-1.5 inline-block text-left">
    <li>👉 <a href="/atami-oceanview-hotel-guide/" class="text-rose-800 hover:text-rose-600 underline">熱海オーシャンビューホテルおすすめ人気ランキング</a></li>
    <li>👉 <a href="/atami-korakuen-hotel-guide/" class="text-rose-800 hover:text-rose-600 underline">熱海後楽園ホテルの宿泊記＆オーシャンスパFuua徹底解説</a></li>
    <li>👉 <a href="/atami-izu-ocean-pool-hot-spring-hotels-guide/" class="text-rose-800 hover:text-rose-600 underline">熱海・伊豆の絶景温泉リゾートホテルおすすめ特集</a></li>
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
    image: hAkao.hotelImageUrl,
    other_images: [
      hKorakuen.hotelImageUrl,
      hFuruya.hotelImageUrl,
      hShukaen.hotelImageUrl,
      hKinjokan.hotelImageUrl
    ],
    hotel_name: `${hAkao.hotelName}・${hKorakuen.hotelName} ほか`,
    affiliate_url: hAkao.affiliateUrl,
    categories: ["冬のイベント特集", "海上花火大会", "熱海梅園", "熱海温泉", "金目鯛グルメ"],
    price: `¥${(hShukaen.hotelMinCharge || 8000).toLocaleString()}〜`,
    rating: hFuruya.reviewAverage || 4.85,
    review_count: hAkao.reviewCount || 2500,
    date: date,
    is_special_feature: true,
    keywords: [
      "熱海海上花火大会 冬 2026",
      "熱海梅園 もみじまつり 梅まつり 見頃",
      "ホテルニューアカオ 花火 宿泊記",
      "熱海後楽園ホテル 客室から花火",
      "熱海温泉 古屋旅館 源泉かけ流し",
      "熱海 金目鯛 煮付け おすすめ宿"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["熱海海上花火大会", "熱海温泉", "熱海梅園", "ホテルニューアカオ", "金目鯛", "冬の熱海旅行"]
---

# ${title}

11月中旬〜12月上旬の「日本一遅い紅葉」から、12月中旬の澄み切った冬空に轟く「熱海海上花火大会」、そして1月上旬からの「日本一早い梅まつり」へと季節が美しくリレーする冬の熱海温泉。

すり鉢状の熱海湾が創り出す天然の音響スタジアム効果と、夜空と海面を銀色に染め上げる大空中ナイアガラは圧巻の迫力。

客室や露天風呂から花火を真正面に望む特等席ホテルや、徳川家康ゆかりの源泉を満喫できる老舗宿、相模湾の脂の乗った地金目鯛姿煮付けや伊勢海老を堪能できる厳選5宿を徹底解説します。

---

## 🎪 冬の熱海海上花火大会 観覧の極意＆熱海梅園の散策術

澄み渡る冬空に響く花火と熱海梅園を満喫するための見どころをまとめました。

- **冬花火の圧倒的な鮮明度:** 湿度が低く澄んだ冬の大気により、煙が滞留せず花火の光と色彩が極めてシャープに輝きます。
- **フィナーレ「大空中ナイアガラ」:** 銀色の閃光が夜空全体を包み込み、山に反響する大音響と地響きが体中に伝わる感動のクライマックス。
- **熱海梅園の奇跡のリレー:** 11月〜12月の「日本一遅い紅葉ライトアップ」と、1月からの「日本一早い梅まつり」が連続して楽しめます。
- **宿の特等席観覧:** 花火打ち上げ台船の正面に位置するオーシャンビュー宿なら、寒さを気にせず客室バルコニーから花火を独占できます。

---

## 🏨 花火を真正面に望む特等席！熱海温泉の厳選宿5選

### 1. 熱海温泉 ホテルニューアカオ（静岡県熱海市）
- **特徴:** 名勝・錦ヶ浦の断崖にそびえる全室オーシャンフロント。海と一体化するインフィニティ露天「スパリウムニシキ」と、熱海湾の花火を一望する特等席。
- **宿泊目安:** 1名 ¥${(hAkao.hotelMinCharge || 15200).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hAkao.reviewAverage}（${hAkao.reviewCount}件）
- 👉 [ホテルニューアカオの空室・宿泊プランを見る](${hAkao.affiliateUrl})

### 2. 熱海温泉 熱海後楽園ホテル（静岡県熱海市）
- **特徴:** 花火打ち上げ場所のすぐ目の前。客室バルコニーから視界一面に広がる大花火は圧巻。日帰り温泉施設「Fuua」の露天立ち湯も併設。
- **宿泊目安:** 1名 ¥${(hKorakuen.hotelMinCharge || 13530).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hKorakuen.reviewAverage}（${hKorakuen.reviewCount}件）
- 👉 [熱海後楽園ホテルの空室・宿泊プランを見る](${hKorakuen.affiliateUrl})

### 3. 熱海温泉 古屋旅館（静岡県熱海市）
- **特徴:** 創業1806年、熱海最古の老舗名門。熱海七湯「清左衛門の湯」100%源泉かけ流し。お部屋食で味わう相模湾の地金目鯛煮付けと京風懐石が絶品。
- **宿泊目安:** 1名 ¥${(hFuruya.hotelMinCharge || 41030).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hFuruya.reviewAverage}（${hFuruya.reviewCount}件）
- 👉 [熱海温泉 古屋旅館の空室・宿泊プランを見る](${hFuruya.affiliateUrl})

### 4. 熱海温泉 秀花園 湯の花膳（静岡県熱海市）
- **特徴:** 熱海港沿いの全室海側和風旅館。屋上展望露天風呂「月下美人」から熱海夜景と花火を見下ろす贅沢。お部屋食で楽しむ海鮮会席。
- **宿泊目安:** 1名 ¥${(hShukaen.hotelMinCharge || 8000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hShukaen.reviewAverage}（${hShukaen.reviewCount}件）
- 👉 [秀花園 湯の花膳の空室・宿泊プランを見る](${hShukaen.affiliateUrl})

### 5. 熱海温泉 金城館（静岡県熱海市）
- **特徴:** 優雅な日本庭園と広大な温泉大浴場。夕食バイキング＆飲み放題付きで安心のリーズナブルステイ。花火親水公園まで徒歩10分。
- **宿泊目安:** 1名 ¥${(hKinjokan.hotelMinCharge || 8448).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hKinjokan.reviewAverage}（${hKinjokan.reviewCount}件）
- 👉 [熱海温泉 金城館の空室・宿泊プランを見る](${hKinjokan.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **熱海海上花火大会:** ${wHanabi.extract}（熱海湾のすり鉢状地形が生み出す大音響スタジアム）
- **熱海梅園:** ${wBaien.extract}（日本一遅い紅葉と日本一早い梅が咲き誇る歴史ある名園）
- **熱海温泉:** ${wAtami.extract}（徳川家康ゆかりの古湯、保温力抜群の高温泉）
- **お宮の松:** ${wOmiya.extract}（金色夜叉の舞台、サンビーチ沿いの夜間ライトアップ）

---

## 🗺️ 1泊2日満喫モデルコース

- **1日目:** 新幹線で熱海駅 ➔ 駅前通り商店街食べ歩き ➔ 熱海梅園で紅葉・梅散策 ➔ ホテルチェックイン ➔ 海を望む露天風呂 ➔ 地金目鯛会席 ➔ 20:20 熱海海上花火大会鑑賞
- **2日目:** 宿朝食 ➔ 来宮神社で樹齢2100年の大楠参拝 ➔ 熱海銀座商店街カフェランチ ➔ ラスカ熱海でお土産購入 ➔ 新幹線で快適に帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. 冬の花火大会は雨天でも行われますか？**  
A. 雨天決行です。傘ではなくレインコートの着用をおすすめします。

**Q2. 花火は何時から何分間上がりますか？**  
A. 原則として20:20〜20:40の20分間、約3,000発が一気に打ち上がります。

**Q3. 熱海梅園の紅葉と梅は同時に見られますか？**  
A. 12月上旬〜中旬にかけて、遅い紅葉と早咲きの白梅・紅梅の共演が見られる年があります。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【静岡・熱海】熱海海上花火大会（冬）＆熱海梅園「日本一遅い紅葉と日本一早い梅」完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/${slug}/)
`;

  return { postData, noteMarkdown };
};
