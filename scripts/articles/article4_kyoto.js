// scripts/articles/article4_kyoto.js
module.exports = function buildArticle4(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "autumn-kyoto-momiji-lightup-eikando-kiyomizu-hotels-guide";
  const title = "【京都・東山】永観堂・清水寺・東福寺の紅葉ライトアップ夜間特別拝観！秋の古都を雅に歩く大人の特選名宿5選";
  const description = "11月中旬〜下旬に最盛期を迎える京都の紅葉ライトアップ。放生池の水鏡が輝く「永観堂（禅林寺）」、夜空を射抜く青い光と錦秋の舞台「清水寺」、通天橋から見下ろす渓谷の紅葉雲海「東福寺」。混雑の波を賢くかわす夜間拝観の裏ワザと、南禅寺・東山・祇園・嵐山エリアの極上名宿5選を徹底解説。";
  const date = "2026-10-29";
  const prefecture = "京都府";
  const area = "祇園・東山・嵐山";

  const hWestin = hotels.find(h => h.hotelNo === 1167) || hotels[0];
  const hHyatt = hotels.find(h => h.hotelNo === 50636) || hotels[1];
  const hCelestine = hotels.find(h => h.hotelNo === 160991) || hotels[2];
  const hKadenSho = hotels.find(h => h.hotelNo === 130702) || hotels[3];
  const hOkura = hotels.find(h => h.hotelNo === 1754) || hotels[4];

  const wEikando = wiki["永観堂禅林寺"] || {};
  const wKiyomizu = wiki["清水寺"] || {};
  const wTofukuji = wiki["東福寺"] || {};
  const wKodaiji = wiki["高台寺"] || {};

  const reviewHtml = `
<div class="my-6 p-4 rounded-2xl bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
  <div class="space-y-0.5 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-amber-300 font-extrabold text-xs">
      <span>🍁</span><span>京都 紅葉ライトアップ＆夜間拝観 予約速報</span>
    </div>
    <p class="text-xs text-stone-200">
      11月中旬〜下旬の永観堂・清水寺・東福寺の見頃ピークは東山・祇園のホテルが連日満室となります。徒歩圏内の宿確保はお早めに。
    </p>
  </div>
  <a href="${hWestin.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs rounded-xl shadow transition transform hover:scale-105">
    ✨ ウェスティン都ホテル京都の空室・宿泊プランをチェック →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 mb-4">
  漆黒の闇に浮かび上がる緋色のカエデと、幽玄なる古刹の静寂
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  古くから「秋はもみじの永観堂」と詠い継がれてきた京都の秋。11月中旬、東山山麓の木々が深紅と黄金色に染まり始めると、社寺の境内で夜間特別拝観の灯りが灯されます。放生池の水面に鏡のように映り込む永観堂の多宝塔、一筋の青い光が夜空を射貫き舞台を黄金色に染め上げる清水寺、そして昼間の通天橋から見下ろす洗玉澗の紅葉雲海。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  日中の観光客の喧騒を離れ、冷涼な夜の空気が張りつめる境内で味わう幽玄な美しさは、京都に泊まる者だけに許された特別な特権です。寺院から徒歩圏内に宿を取り、夕食後の静かな時間帯に歩いて拝観するスマートな大人の古都滞在をご案内します。
</p>

<h2 id="lightup-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 my-6">
  🏮 2026年秋！京都・紅葉ライトアップの必見スポットと混雑回避術
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <!-- 永観堂 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-rose-100 text-rose-800 font-extrabold text-xs rounded-lg">秋はもみじの永観堂</span>
      <h3 class="text-base font-bold text-stone-900">永観堂（禅林寺）夜間特別拝観</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【拝観期間】</strong> 11月上旬〜12月上旬（17:30〜21:00受付終了）</p>
      <p><strong>【見どころ】</strong> 境内を彩る約3,000本のモミジ。極楽橋からの放生池の水鏡に映る紅葉と弁天社、岩垣もみじのライトアップは京都屈指の美しさを誇ります。</p>
      <p><strong>【混雑回避のコツ】</strong> 開門時間の17:30前後は長蛇の列となります。夕食を先に済ませ、20:00以降の閉門前の時間帯に訪れると、列に並ばずスムーズに入山でき、写真撮影も落ち着いて行えます。</p>
    </div>
  </div>

  <!-- 清水寺 -->
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-sky-100 text-sky-800 font-extrabold text-xs rounded-lg">世界遺産・慈悲の光</span>
      <h3 class="text-base font-bold text-stone-900">音羽山 清水寺 秋の夜間特別拝観</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【拝観期間】</strong> 11月中旬〜12月上旬（17:30〜21:30受付終了）</p>
      <p><strong>【見どころ】</strong> 観音様の慈悲を表す一筋の青い光が京都の夜空を照らし、錦雲渓（きんうんけい）の紅葉に浮かび上がる清水の舞台。奥の院から舞台と京都市街の夜景を一望できます。</p>
      <p><strong>【散策ルート】</strong> 清水坂・産寧坂（三年坂）はライトアップ後も趣のある街灯が点灯。祇園・八坂通りの宿から歩いて参拝できるルートが渋滞知らずで快適です。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 my-8">
  🏨 紅葉ライトアップ散策に最適な京都の特選名宿5選
</h2>

<!-- 宿1: ウェスティン都ホテル京都 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">南禅寺・永観堂へ徒歩圏内＆天然温泉SPA</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. ウェスティン都ホテル京都（京都市東山区粟田口）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hWestin.reviewAverage}（${hWestin.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hWestin.hotelImageUrl}" alt="${hWestin.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hWestin.roomImageUrl || hWestin.hotelImageUrl}" alt="${hWestin.hotelName} SPA華頂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">東山山麓の豊かな自然と、敷地内から湧き出る天然温泉SPA「華頂」の贅沢</p>
      <p>地下鉄東西線「蹴上駅」目の前。南禅寺水路閣や永観堂まで徒歩約10分という至高の立地を誇るラグジュアリーホテル。夜間拝観で冷えた身体を、敷地内から湧出する天然温泉を使用した総面積2,100㎡のSPA「華頂」で芯まで温められます。数寄屋造りの名匠・村野藤吾設計の佳水園庭園を擁し、客室からは東山の紅葉グラデーションと京都市街のパノラマを一望できます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hWestin.address1}${hWestin.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hWestin.access}</p>
        <p><strong>【駐車場】</strong> ${hWestin.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hWestin.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hWestin.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-600 to-rose-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ ウェスティン都ホテル京都の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿2: ハイアット リージェンシー 京都 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">三十三間堂隣接・和モダンラグジュアリー</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. ハイアット リージェンシー 京都（京都市東山区三十三間堂廻り）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hHyatt.reviewAverage}（${hHyatt.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hHyatt.hotelImageUrl}" alt="${hHyatt.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hHyatt.roomImageUrl || hHyatt.hotelImageUrl}" alt="${hHyatt.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">伝統美と現代デザインが融合した静謐な空間で、東寺や東福寺へのアクセスも快適</p>
      <p>三十三間堂や京都国立博物館が並ぶ静かな七条東山エリアに位置。杉綾模様の木組みや和紙のヘッドボードが施された客室は、古都の洗練された美意識に浸る大人の隠れ家です。日本料理「東山（Touzan）」での炭火焼きや旬の京会席、厳選された地酒のペアリングが格別。東福寺の通天橋や清水寺へもタクシーで数分と、紅葉めぐりのベースキャンプとして理想的です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hHyatt.address1}${hHyatt.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hHyatt.access}</p>
        <p><strong>【駐車場】</strong> ${hHyatt.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hHyatt.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hHyatt.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-600 to-rose-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ ハイアット リージェンシー 京都の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿3: ホテル ザ セレスティン京都祇園 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">八坂通に佇む祇園の隠れ家＆天ぷら圓堂の朝食</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. ホテル ザ セレスティン京都祇園（京都市東山区八坂通）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hCelestine.reviewAverage}（${hCelestine.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hCelestine.hotelImageUrl}" alt="${hCelestine.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hCelestine.roomImageUrl || hCelestine.hotelImageUrl}" alt="${hCelestine.hotelName} 大浴場" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">八坂の塔や清水寺、高台寺まで徒歩散策。大浴場と名店「八坂圓堂」の天ぷらモーニング</p>
      <p>五重塔（八坂の塔）を見上げる風情ある八坂通に面し、清水寺や高台寺の夜間拝観へ徒歩で往復できる最高のロケーション。館内には京都の街歩きの疲れを癒やす広々とした大浴場を備えています。朝食は祇園の老舗天ぷら店「八坂圓堂」が手がける和洋ビュッフェ。目の前で揚げられる名物のとうもろこし天ぷらや京野菜の揚げたてを朝から贅沢に味わえます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hCelestine.address1}${hCelestine.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hCelestine.access}</p>
        <p><strong>【駐車場】</strong> ${hCelestine.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hCelestine.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hCelestine.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-600 to-rose-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ ホテル ザ セレスティン京都祇園の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿4: 嵐山温泉 花伝抄 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">渡月橋徒歩圏・5つの無料貸切風呂と畳敷き</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 京都 嵐山温泉 花伝抄（京都市西京区嵐山）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKadenSho.reviewAverage}（${hKadenSho.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKadenSho.hotelImageUrl}" alt="${hKadenSho.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKadenSho.roomImageUrl || hKadenSho.hotelImageUrl}" alt="${hKadenSho.hotelName} 貸切風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">阪急嵐山駅目の前！全館素足でくつろぐ和の情緒と嵐山温泉の湯めぐり</p>
      <p>渡月橋や宝厳院、天龍寺の紅葉名所へ徒歩圏内。館内はすべて畳敷きとなっており、靴を脱いでリラックスできる和の空間が広がります。天然嵐山温泉の大浴場に加え、趣の異なる5つの貸切風呂（檜風呂、陶器風呂、炭酸風呂など）が何度でも無料で利用可能。夕食は四季の会席料理におばんざいと揚げたて天ぷらが食べ放題で付き、お腹も心も大満足の嵐山滞在が約束されます。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hKadenSho.address1}${hKadenSho.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hKadenSho.access}</p>
        <p><strong>【駐車場】</strong> ${hKadenSho.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hKadenSho.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hKadenSho.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-600 to-rose-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ 京都 嵐山温泉 花伝抄の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<!-- 宿5: ホテルオークラ京都 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">地下鉄直結・伝統の格式と東山パノラマ</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. ホテルオークラ京都（京都市中京区河原町御池）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hOkura.reviewAverage}（${hOkura.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hOkura.hotelImageUrl}" alt="${hOkura.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hOkura.roomImageUrl || hOkura.hotelImageUrl}" alt="${hOkura.hotelName} ロビー" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p class="text-sm font-semibold text-stone-800">創業130余年の伝統を誇る京都の迎賓館。鴨川と東山三十六峰の紅葉を望む特等席</p>
      <p>地下鉄「京都市役所前駅」直結で、雨の日でも濡れずにチェックイン可能。東山側の客室や最上階レストランからは、鴨川の流れとともに赤や黄色に染まる東山連峰が一望できます。東西線で蹴上（南禅寺・永観堂）へ直通3分と機動力も抜群。老舗オークラならではの行き届いたサービスと洗練されたフレンチや京料理、名門ベーカリーの朝食は記念日旅行にも最適です。</p>
      <div class="p-3 bg-stone-50 rounded-xl space-y-1">
        <p><strong>【所在地】</strong> ${hOkura.address1}${hOkura.address2}</p>
        <p><strong>【交通アクセス】</strong> ${hOkura.access}</p>
        <p><strong>【駐車場】</strong> ${hOkura.parkingInformation}</p>
        <p><strong>【目安料金】</strong> 1名あたり ¥${hOkura.hotelMinCharge.toLocaleString()}〜</p>
      </div>
    </div>
  </div>
  <div class="pt-2 text-center">
    <a href="${hOkura.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-600 to-rose-600 text-white font-extrabold text-sm rounded-2xl shadow-md hover:scale-105 transition transform">
      ✈️ ホテルオークラ京都の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>

<h2 id="nearby-spots" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs text-stone-600 mb-6">
  京都の紅葉ライトアップとあわせて拝観したい、東山エリアの名刹です。
</p>

<div class="space-y-6 my-6">
  <!-- 永観堂 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wEikando.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/1167/1167.jpg'}" alt="永観堂（禅林寺）" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-rose-100 text-rose-800 font-bold text-[11px] rounded-md">🍁 京都市左京区永観堂町</span>
        <h3 class="text-base font-bold text-stone-900">禅林寺（永観堂）</h3>
        <p>${wEikando.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> ウェスティン都ホテル京都から徒歩約15分。哲学の道を散策しながら訪れるルートも風情があります。</p>
      </div>
    </div>
  </div>

  <!-- 清水寺 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wKiyomizu.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/160991/160991.jpg'}" alt="清水寺" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-sky-100 text-sky-800 font-bold text-[11px] rounded-md">⛩️ 京都市東山区清水</span>
        <h3 class="text-base font-bold text-stone-900">音羽山 清水寺</h3>
        <p>${wKiyomizu.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> ホテル ザ セレスティン京都祇園から徒歩約15分。八坂通・二年坂・産寧坂を通って歩いてアクセスできます。</p>
      </div>
    </div>
  </div>

  <!-- 東福寺 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wTofukuji.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/50636/50636.jpg'}" alt="東福寺" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-amber-100 text-amber-800 font-bold text-[11px] rounded-md">🍁 京都市東山区本町</span>
        <h3 class="text-base font-bold text-stone-900">東福寺（通天橋の紅葉雲海）</h3>
        <p>${wTofukuji.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> ハイアット リージェンシー 京都からJR・京阪「東福寺駅」経由で約10分。午前中の早い時間帯の拝観がおすすめです。</p>
      </div>
    </div>
  </div>

  <!-- 高台寺 -->
  <div class="p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-xs">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
      <div class="md:col-span-5">
        <img src="${wKodaiji.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/160991/160991_r1.jpg'}" alt="高台寺" class="w-full h-48 object-cover rounded-2xl border border-stone-200" loading="lazy" />
      </div>
      <div class="md:col-span-7 space-y-2 text-xs text-stone-700 leading-relaxed">
        <span class="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[11px] rounded-md">🏯 京都市東山区高台寺下河原町</span>
        <h3 class="text-base font-bold text-stone-900">鷲峰山 高台寺（ねねの寺）</h3>
        <p>${wKodaiji.extract}</p>
        <p class="text-stone-500"><strong>【宿からの移動】</strong> セレスティン京都祇園から徒歩約8分。波心池のライトアップと竹林の光の小径が幻想的です。</p>
      </div>
    </div>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 my-8">
  🗺️ 東山紅葉を優雅に巡る1泊2日モデルコース
</h2>
<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-stone-50 via-amber-50/40 to-rose-50/30 border border-amber-200 space-y-4 text-xs text-stone-700 leading-relaxed">
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【1日目】南禅寺から永観堂ライトアップ散策</h3>
    <p>午後、京都駅に到着し地下鉄で蹴上駅へ。「ウェスティン都ホテル京都」にチェックイン。夕暮れ前に南禅寺の水路閣を散策し、ホテルで京料理の夕食を味わう。20:00から永観堂へ歩いて向かい、人混みの落ち着いた境内で放生池の紅葉水鏡を観賞。ホテルに戻り天然温泉SPAで就寝。</p>
  </div>
  <div class="space-y-1">
    <h3 class="font-bold text-sm text-stone-900">【2日目】東福寺通天橋の朝紅葉と清水寺参拝</h3>
    <p>朝8:30の開門に合わせて東福寺へ向かい、通天橋から見下ろす朝日に輝く紅葉雲海を静かに鑑賞。その後、清水寺へ移動し舞台からの絶景を堪能。二年坂・三年坂でお茶とお菓子を楽しみ、京都駅へ戻って帰路へ。</p>
  </div>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 my-8">
  ❓ よくある質問（FAQ）
</h2>
<div class="space-y-3 my-6 text-xs text-stone-800">
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q1. 夜間特別拝観のチケットは事前予約が必要ですか？</h3>
    <p class="text-stone-600">A. 永観堂や清水寺、高台寺の夜間拝観は事前予約不要で当日券売所で拝観券を購入できます（一部寺院の特別事前優先拝観を除く）。ただし、夕方17時半の開門前後は券売所に長い行列ができるため、少し遅めの時間帯（20時頃）を狙うのがおすすめです。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q2. 紅葉シーズンの京都での移動で注意すべきことは？</h3>
    <p class="text-stone-600">A. 市バスやタクシーは東大路通や川端通を中心に大渋滞し、所要時間が普段の2〜3倍かかることがあります。「地下鉄東西線・烏丸線」または「徒歩」「レンタサイクル」を組み合わせるのが最も確実でタイムロスがありません。</p>
  </div>
  <div class="p-4 rounded-2xl bg-white border border-stone-200 space-y-1">
    <h3 class="font-bold text-stone-900">Q3. 夜間拝観時の防寒対策はどうすればよいですか？</h3>
    <p class="text-stone-600">A. 11月中旬以降の京都の夜は「底冷え」と呼ばれる独特の冷気が足元から上がってきます。境内は外歩きとなるため、暖かいインナーやマフラー、手袋に加え、厚手の靴下やカイロを持参すると快適に鑑賞できます。</p>
  </div>
</div>

<div class="my-8 p-6 rounded-3xl bg-amber-50/60 border border-amber-200">
  <h3 class="text-sm font-bold text-amber-950 mb-2">🔗 あわせてチェックしたい京都の旅行ガイド</h3>
  <ul class="text-xs space-y-1.5 font-medium text-stone-700">
    <li>👉 <a href="/prefectures/kyoto/" class="text-amber-800 hover:text-amber-600 underline">京都府の観光・祇園・東山・嵐山ホテル特集</a></li>
    <li>👉 <a href="/posts/kyoto-hotels-selection-guide" class="text-amber-800 hover:text-amber-600 underline">京都のおすすめラグジュアリーホテル10選</a></li>
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
    hot_spring_info: "京都天然温泉（SPA華頂）・京都嵐山温泉（単純温泉・弱アルカリ性）",
    parking_info: "各ホテルに駐車場完備。紅葉シーズン中は市内渋滞が深刻なため公共交通機関の利用を推奨。",
    meal_availability: "伝統京懐石・八坂圓堂揚げたて京天ぷら・おばんざいビュッフェ・老舗ホテルオークラフレンチ",
    hotel_name: "京都紅葉ライトアップ周辺 厳選名宿5選",
    image: hWestin.hotelImageUrl,
    affiliate_url: hWestin.affiliateUrl,
    categories: ["11月旅行", "秋旅行", "紅葉名所", "世界遺産", "ラグジュアリーホテル", "京都旅行"],
    keywords: [
      "京都 紅葉 ライトアップ 2026",
      "永観堂 ライトアップ 宿泊",
      "清水寺 夜間拝観 ホテル",
      "東福寺 紅葉 混雑回避",
      "ウェスティン都ホテル京都 温泉",
      "ハイアットリージェンシー京都",
      "ホテル ザ セレスティン京都祇園 天ぷら",
      "嵐山温泉 花伝抄",
      "ホテルオークラ京都",
      "京都 東山 ホテル おすすめ"
    ],
    review: reviewHtml,
    price: hWestin.hotelMinCharge || 25000,
    rating: hWestin.reviewAverage || 4.5,
    date: date,
    other_images: [
      hHyatt.hotelImageUrl,
      hCelestine.hotelImageUrl,
      hKadenSho.hotelImageUrl,
      hOkura.hotelImageUrl,
      wEikando.thumbnail,
      wKiyomizu.thumbnail
    ].filter(Boolean),
    summary: description,
    review_count: (hWestin.reviewCount || 0) + (hHyatt.reviewCount || 0) + (hCelestine.reviewCount || 0),
    family_friendly: "はい、全館畳敷きの宿や広々としたファミリールーム、大浴場など家族旅行にも快適な設備が整っています。"
  };

  const noteMarkdown = `---
title: "${title}"
date: "${date}"
description: "${description}"
tags: ["京都紅葉", "永観堂", "清水寺", "東福寺", "京都旅行", "ラグジュアリーホテル", "楽天トラベル"]
---

古くから「秋はもみじの永観堂」と詠い継がれてきた京都の秋。11月中旬、東山山麓の木々が深紅と黄金色に染まり始めると、社寺の境内で夜間特別拝観の灯りが灯されます。放生池の水面に鏡のように映り込む永観堂の多宝塔、一筋の青い光が夜空を射貫き舞台を黄金色に染め上げる清水寺、そして昼間の通天橋から見下ろす洗玉澗の紅葉雲海。

日中の観光客の喧騒を離れ、冷涼な夜の空気が張りつめる境内で味わう幽玄な美しさは、京都に泊まる者だけに許された特別な特権です。楽天トラベル最新データから★4.3〜4.6超の厳選名宿をお届けします。

---

## 🍁 京都・紅葉ライトアップ夜間拝観の攻略ポイント
- **永観堂（禅林寺）**: 「秋はもみじの永観堂」。約3,000本の紅葉と放生池の水鏡。20時以降の遅い時間帯が混雑ピークを過ぎておすすめ。
- **清水寺**: 観音様の慈悲を表す青い光線「慈悲の光」と錦雲渓の舞台紅葉。八坂通や二年坂の宿から歩いて参拝が快適。
- **東福寺**: 通天橋から見下ろす洗玉澗の紅葉雲海は朝一番（8:30開門直後）が最も静かで光が美しい。
- **高台寺**: 方丈前庭の枯山水プロジェクションマッピングと波心池の逆さ紅葉。
- **市内の交通**: 秋の京都はバスやタクシーが大渋滞します。地下鉄東西線・烏丸線や徒歩圏内の宿を選ぶのが鉄則です。

---

## 1. ウェスティン都ホテル京都（京都市東山区粟田口）
![ウェスティン都ホテル京都](${hWestin.hotelImageUrl})
南禅寺・永観堂へ徒歩約10分。東山山麓の敷地内から湧出する天然温泉を使用した2,100㎡のSPA「華頂」を擁する名門ラグジュアリーホテル。

- **楽天トラベル総合評価**: ★${hWestin.reviewAverage}（クチコミ ${hWestin.reviewCount}件）
- **目安料金**: 1名 ¥${hWestin.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hWestin.address1}${hWestin.address2}
- **アクセス**: ${hWestin.access}
- **駐車場**: ${hWestin.parkingInformation}
- [👉 ウェスティン都ホテル京都の宿泊プラン・空室状況を見る](${hWestin.affiliateUrl})

### 現地攻略のツボ
- 地下鉄「蹴上駅」目の前。南禅寺水路閣や哲学の道、永観堂まで歩いて往復できる最高のロケーション。
- 京都のホテルでは極めて貴重な広大な天然温泉SPAで、夜間拝観で冷えた手足を優雅に温められます。

---

## 2. ハイアット リージェンシー 京都（京都市東山区三十三間堂廻り）
![ハイアット リージェンシー 京都](${hHyatt.hotelImageUrl})
三十三間堂や京都国立博物館に隣接。杉綾模様の木組みが美しい和モダン客室と、日本料理「東山」の炭火焼き・京会席が秀逸です。

- **楽天トラベル総合評価**: ★${hHyatt.reviewAverage}（クチコミ ${hHyatt.reviewCount}件）
- **目安料金**: 1名 ¥${hHyatt.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hHyatt.address1}${hHyatt.address2}
- **アクセス**: ${hHyatt.access}
- **駐車場**: ${hHyatt.parkingInformation}
- [👉 ハイアット リージェンシー 京都の宿泊プラン・空室状況を見る](${hHyatt.affiliateUrl})

### 現地攻略のツボ
- 三十三間堂のすぐ隣という静寂の環境。東福寺や東寺の紅葉へもタクシーや京阪電車ですぐ。
- 竹林の中庭を望む落ち着いたバーや、厳選された日本酒と炭火焼きのペアリングで大人の夜を過ごせます。

---

## 3. ホテル ザ セレスティン京都祇園（京都市東山区八坂通）
![ホテル ザ セレスティン京都祇園](${hCelestine.hotelImageUrl})
八坂の塔を仰ぎ見る八坂通に佇む隠れ家。清水寺・高台寺へ徒歩散策でき、大浴場完備。朝食は老舗「八坂圓堂」の揚げたて京天ぷら。

- **楽天トラベル総合評価**: ★${hCelestine.reviewAverage}（クチコミ ${hCelestine.reviewCount}件）
- **目安料金**: 1名 ¥${hCelestine.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hCelestine.address1}${hCelestine.address2}
- **アクセス**: ${hCelestine.access}
- **駐車場**: ${hCelestine.parkingInformation}
- [👉 ホテル ザ セレスティン京都祇園の宿泊プラン・空室状況を見る](${hCelestine.affiliateUrl})

### 現地攻略のツボ
- 清水寺や高台寺の夜間特別拝観へ徒歩でアクセスできるため、渋滞や混雑を気にせず夜の古都散策が可能。
- 名店「八坂圓堂」が手がける朝食の揚げたて天ぷらは宿泊者限定の絶品モーニングです。

---

## 4. 京都 嵐山温泉 花伝抄（京都市西京区嵐山）
![嵐山温泉 花伝抄](${hKadenSho.hotelImageUrl})
阪急嵐山駅徒歩1分、渡月橋至近。全館畳敷きで素足の心地よさと、天然嵐山温泉の大浴場＆5つの無料貸切風呂が魅力の湯宿。

- **楽天トラベル総合評価**: ★${hKadenSho.reviewAverage}（クチコミ ${hKadenSho.reviewCount}件）
- **目安料金**: 1名 ¥${hKadenSho.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hKadenSho.address1}${hKadenSho.address2}
- **アクセス**: ${hKadenSho.access}
- **駐車場**: ${hKadenSho.parkingInformation}
- [👉 京都 嵐山温泉 花伝抄の宿泊プラン・空室状況を見る](${hKadenSho.affiliateUrl})

### 現地攻略のツボ
- 嵐山・渡月橋や宝厳院の紅葉ライトアップへ歩いて向かえる好立地。
- 檜や陶器など5種類の貸切温泉風呂が無料で空いていれば何度でも利用でき、プライベート感も満点です。

---

## 5. ホテルオークラ京都（京都市中京区河原町御池）
![ホテルオークラ京都](${hOkura.hotelImageUrl})
地下鉄直結で東山方面へのアクセス至便。鴨川と東山三十六峰の紅葉パノラマを一望する創業130余年の格式高き迎賓館。

- **楽天トラベル総合評価**: ★${hOkura.reviewAverage}（クチコミ ${hOkura.reviewCount}件）
- **目安料金**: 1名 ¥${hOkura.hotelMinCharge.toLocaleString()}〜
- **所在地**: ${hOkura.address1}${hOkura.address2}
- **アクセス**: ${hOkura.access}
- **駐車場**: ${hOkura.parkingInformation}
- [👉 ホテルオークラ京都の宿泊プラン・空室状況を見る](${hOkura.affiliateUrl})

### 現地攻略のツボ
- 地下鉄東西線「京都市役所前駅」直結。蹴上（南禅寺・永観堂）まで電車でわずか3分。
- 東山側の客室から眺める朝の東山三十六峰の紅葉グラデーションは圧巻の眺望です。

---

## 🗺️ 東山紅葉を優雅に巡るモデルコース
- **1日目**: 京都駅到着後、地下鉄で蹴上へ。ウェスティン都ホテル京都にチェックインし南禅寺を散策。ホテルで夕食後、20:00から永観堂の紅葉ライトアップへ。天然温泉SPAで就寝。
- **2日目**: 朝8:30に東福寺へ向かい通天橋の紅葉雲海を静かに鑑賞。二年坂・三年坂を散策し清水寺舞台からの絶景を楽しんで帰路へ。
`;

  return { postData, noteMarkdown };
};
