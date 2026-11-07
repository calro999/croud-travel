// scripts/new_articles/article39_hakodate_christmas.js
module.exports = function buildArticle39(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-hokkaido-hakodate-christmas-fantasy-goryokaku-hotels-guide";
  const title = "【函館】はこだてクリスマスファンタジー2026＆五稜星の夢完全攻略！海上に浮かぶ巨大ツリー・点灯花火と函館山冬夜景、湯の川温泉海見え露天＆極上活イカ・津軽海峡マグロを満喫する厳選宿5選";
  const description = "2026年12月開催の「はこだてクリスマスファンタジー」と特別史跡五稜郭跡が星形に浮かび上がる「五稜星の夢イルミネーション」を徹底解説。赤レンガ倉庫群前の海上に浮かぶ高さ約20mの巨大モミの木ツリー、毎夜18時の点灯花火、スープバー巡りや函館山の澄み渡る極上冬夜景の鑑賞術を網羅。朝食バイキングで全国屈指の人気を誇るベイエリアホテルや、津軽海峡を望む湯の川温泉の名門旅館など厳選5宿をご紹介。";
  const date = "2026-11-07";
  const prefecture = "北海道";
  const area = "函館・湯の川温泉";

  // ホテル抽出
  const hCentury = hotels.find(h => h.hotelNo === 168681) || hotels[0];
  const hAnnex = hotels.find(h => h.hotelNo === 184396) || hotels[1];
  const hBorou = hotels.find(h => h.hotelNo === 109498) || hotels[2];
  const hWakamatsu = hotels.find(h => h.hotelNo === 182122) || hotels[3];
  const hShiosai = hotels.find(h => h.hotelNo === 37469) || hotels[4];

  // Wikiスポット
  const wKanemori = wiki["金森赤レンガ倉庫"] || {};
  const wGoryokaku = wiki["五稜郭"] || {};
  const wHakodateyama = wiki["函館山"] || {};
  const wYunokawa = wiki["湯の川温泉 (北海道)"] || {};

  const reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-cyan-950 via-blue-950 to-stone-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-cyan-800/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-cyan-300 font-extrabold text-xs tracking-wider">
      <span>🎄</span><span>2026冬 函館クリスマスファンタジー＆五稜星の夢 最新現地攻略ガイド</span>
    </div>
    <p class="text-xs text-cyan-100 leading-relaxed">
      12月1日〜25日開催！赤レンガ倉庫沖に浮かぶ巨大ツリーと毎夜の点灯花火、五稜郭の星形ライトアップ。全国屈指の朝食美食ホテル＆津軽海峡の雪見露天宿で過ごす冬旅。
    </p>
  </div>
  <a href="${hCentury.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-stone-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    👑 センチュリーマリーナ函館の空室状況を見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 mb-4">
  北の港町が純白の輝きに包まれる12月！「はこだてクリスマスファンタジー」と「五稜星の夢」の圧倒的魅力
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  12月の北海道・函館は、降り積もる白雪と港町の歴史的建造物が重なり合い、一年の中で最も叙情的な季節を迎えます。金森赤レンガ倉庫が立ち並ぶ函館港ベイエリアでは、毎年12月1日から12月25日のクリスマス当日まで、冬の風物詩「はこだてクリスマスファンタジー」が開催されます。カナダの姉妹都市ハリファックス市から海を越えて届く高さ約20メートルの巨大な天然モミの木が海上に浮かべられ、約15万個のイルミネーションが点灯。夕闇が迫る午後6時、会場のカウントダウンとともにツリーが一斉に輝き出し、冬の澄んだ夜空へと祝砲の花火が打ち上がります。海面に反射する光と赤レンガのシルエットは、息をのむ美しさです。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  さらに函館の冬の夜を彩るもう一つの絶景が、特別史跡五稜郭跡を舞台にした「五稜星の夢（ほしのゆめ）イルミネーション」です。雪に覆われた星形要塞の堀の周囲が約2,000個の電球でライトアップされ、五稜郭タワーの展望フロアから見下ろすと、真っ暗な雪原の中に巨大な光の星がくっきりと浮かび上がります。空気が凛と澄み渡る12月は光の拡散が少なく、函館山山頂からの「100万ドルの夜景」も年間を通して最もクリアに煌めく絶好の鑑賞シーズンです。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  冬の函館旅の醍醐味は、光の絶景だけにとどまりません。津軽海峡の荒波で身が引き締まった冬の真イカ（ヤリイカ・スルメイカ）や極上本マグロ、真鱈の白子（タチ）、茹でたてのズワイガニなど、冬の北海道が誇る海の幸が旬を迎えます。港の散策で冷えた身体は、函館空港から車で約10分の歴史ある名湯「湯の川温泉」の海見え露天風呂や、ベイエリアに位置する天然温泉展望スパで芯から温めることができます。本記事では、2026年12月のイベント攻略法、防寒対策、混雑回避ルート、そして旅の満足度を決定づける楽天トラベル高評価宿5選を詳しく紐解きます。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-6">
  💡 現地調査に基づくプロの指南！12月函館イベント攻略＆快適滞在マニュアル
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-cyan-100 text-cyan-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">12月の函館・必見スポット＆イベント</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>ツリー点灯式＆花火打ち上げ（毎日18:00）:</strong> 点灯の瞬間は毎日18:00。カウントダウンとともに花火が約1分間打ち上がります。金森赤レンガ倉庫前の海上遊歩道から真正面に望むポジションは17:40頃には確保するのが理想です。</p>
      <p>② <strong>スープバー（赤レンガ倉庫前広場）:</strong> 市内の人気レストランやホテルが腕を競うオリジナル温製スープ（スープチケット制）。冷え切った身体に染み渡るクラムチャウダーやカニのビスクを片手にツリーを眺めるのが定番の楽しみ方です。</p>
      <p>③ <strong>五稜星の夢（ほしのゆめ）:</strong> 日没から19:00（土日は延長あり）まで点灯。五稜郭タワー展望台（夜間特別営業）のチケット売り場は16:30〜17:30が混雑するため、事前にウェブ前売り券を購入しておくとスムーズに入館できます。</p>
      <p>④ <strong>函館山冬夜景ロープウェイ:</strong> 冬季は函館山登山道が積雪閉鎖されるため、ロープウェイが唯一の移動手段。日没直後のトワイライトタイム（16:40〜17:20）が最も美しく、18:00のツリー点灯花火を山頂から見下ろす穴場ルートも人気です。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-blue-100 text-blue-800 font-extrabold text-xs rounded-lg">気候・移動テクニック</span>
      <h3 class="text-base font-bold text-stone-900">寒さ対策・滑り止め靴・市電活用法</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【海風と氷点下に耐える防寒装備】</strong> 12月の函館は平均気温が氷点下となり、海沿いのベイエリアは津軽海峡からの強い寒風が吹き付けます。体感温度はマイナス5℃以下に達するため、防風仕様のロングダウンコート、毛糸の帽子、マフラー、手袋、靴下2枚履きやカイロが必須です。</p>
      <p><strong>【石畳と圧雪路面に対応する冬靴】</strong> 元町地区の急坂（八幡坂など）やベイエリアのレンガ舗装は凍結しやすく転倒の危険があります。深い溝の入ったスノーブーツ、または駅の売店で購入できる簡易着脱式スパイク（すべり止めバンド）を装着して歩行してください。</p>
      <p><strong>【函館市電の1日乗車券を活用】</strong> 函館駅前、ベイエリア（十字街）、五稜郭公園前、湯の川温泉はすべて路面電車「函館市電」で直結しています。600円の市電1日乗車券を利用すれば、冬道の運転を一切せず快適に主要スポットを巡回可能です。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  🏨 旅の目的に応じて選ぶ！函館の厳選名ホテル＆温泉旅館5選
</h2>

<!-- 宿1: センチュリーマリーナ函館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-cyan-100 text-cyan-900 font-black text-xs rounded-full">全国屈指の朝食バイキング＆最上階インフィニティ天然温泉スパ</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. センチュリーマリーナ函館（北海道函館市大手町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hCentury.reviewAverage}（${hCentury.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hCentury.hotelImageUrl}" alt="${hCentury.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hCentury.roomImageUrl || hCentury.hotelImageUrl}" alt="${hCentury.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 函館駅および金森赤レンガ倉庫群へ徒歩圏内という好立地に佇むプレミアリゾート。船旅をテーマにした優雅な館内と、港町を見晴らす圧倒的な開放感が旅慣れたトラベラーから絶賛を集めています。
      </p>
      <p>
        <strong>【最上階インフィニティ天空露天風呂「SPA SOLANI」】</strong> ホテル最上階（14階・15階）に広がる展望スパは、自家源泉の茶褐色の天然温泉。津軽海峡と函館山、赤レンガの夜景を湯船に浸かりながら一望できるインフィニティ露天風呂は、冬の澄んだ夜空の星と湯けむりが溶け合う唯一無二の空間です。
      </p>
      <p>
        <strong>【朝食激戦区・函館を牽引する豪華ビュッフェ】</strong> レストラン「YUUYOO TERRACE HAKODATE」では、いくらのかけ放題はもちろん、新鮮なマグロやホタテ、目の前で炭火焼きされる旬の魚介、道産野菜のヘルシー料理、パティシエ特製スイーツが150種類以上並び、朝から感動の美食体験が待っています。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hCentury.hotelMinCharge || 13500).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hCentury.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: ラビスタ函館ベイANNEX -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">名門ラビスタの上位グレード・3つの無料貸切風呂と個室風食事処</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. ラビスタ函館ベイＡＮＮＥＸ（共立リゾート）（北海道函館市大手町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hAnnex.reviewAverage}（${hAnnex.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hAnnex.hotelImageUrl}" alt="${hAnnex.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hAnnex.roomImageUrl || hAnnex.hotelImageUrl}" alt="${hAnnex.hotelName} 館内" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 函館の朝食ブームの火付け役となった「ラビスタ函館ベイ」の別館として誕生したハイグレードホテル。大正ロマンの情緒を残しつつ、より落ち着いたプライベート感を重視した大人向けの空間設計が特徴です。
      </p>
      <p>
        <strong>【最上階の天然温泉大浴場＆趣異なる3つの貸切風呂】</strong> 最上階には函館山の夜景を望む展望露天風呂を完備。さらに予約不要・無料で何度でも利用できる「陶器風呂」「檜風呂」「煉瓦風呂」の3つの貸切風呂が用意されており、冷えた夜の身体をプライベートに温めることができます。
      </p>
      <p>
        <strong>【選べるメインディッシュとセミビュッフェ朝食】</strong> 本館の賑やかなビュッフェとは一線を画し、半個室風の食事処で落ち着いて食事を堪能。いくらや海の幸を好きなだけ味わえる海鮮丼コーナーに加え、焼き立ての炙り焼きや旬の煮付けなど贅を尽くした料理が並びます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hAnnex.hotelMinCharge || 17020).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hAnnex.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 望楼NOGUCHI函館 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-900 text-amber-200 font-black text-xs rounded-full">湯の川温泉の頂点・全室スイート仕様＆客室展望温泉風呂のデザイナーズ名宿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 望楼ＮＯＧＵＣＨＩ函館（北海道函館市湯川町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-stone-100 border border-stone-300 text-stone-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hBorou.reviewAverage}（${hBorou.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hBorou.hotelImageUrl}" alt="${hBorou.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hBorou.roomImageUrl || hBorou.hotelImageUrl}" alt="${hBorou.hotelName} 客室展望風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 名湯・湯の川温泉に位置し、洗練されたモダン建築と数寄屋造りの美意識が融合した最高級リゾート旅館。大人の休日にふさわしい静寂とプライバシーが保たれており、記念日や夫婦の特別な冬旅に選ばれ続けています。
      </p>
      <p>
        <strong>【客室で24時間楽しむ掛け流し展望温泉】</strong> メゾネットタイプをはじめとする全客室に、湯の川の名湯を引いた専用の展望温泉風呂を完備。湯気に包まれながら雪景色や夜景を眺め、誰にも気兼ねなく心ゆくまで名湯を堪能できます。最上階の天空大浴場からは函館空港の滑走路や津軽海峡が一望できます。
      </p>
      <p>
        <strong>【北海道と和洋の美が織りなす創作会席】</strong> 夕食は全席完全個室の食事処でいただく創作料理。函館近海の津軽海峡本マグロや蝦夷アワビ、大沼牛など道南の厳選素材を、独創的な盛り付けと繊細な味付けで仕立てたコースはまさに芸術品です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥34,000〜（2名1室利用・夕朝食付時）</span>
        <a href="${hBorou.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 割烹旅館 若松 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-red-100 text-red-900 font-black text-xs rounded-full">大正11年創業の老舗・津軽海峡に臨む自家源泉露天風呂とミシュラン星獲得会席</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 割烹旅館　若松（北海道函館市湯川町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-red-50 border border-red-300 text-red-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hWakamatsu.reviewAverage}（${hWakamatsu.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hWakamatsu.hotelImageUrl}" alt="${hWakamatsu.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hWakamatsu.roomImageUrl || hWakamatsu.hotelImageUrl}" alt="${hWakamatsu.hotelName} 海見え露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 大正11年（1922年）創業、昭和天皇をはじめ数々の文人墨客が投宿した湯の川温泉を代表する名門割烹旅館。波打ち際に佇む数寄屋造りの建物は、玄関をくぐるとお香の芳香と手入れの行き届いた畳敷きの廊下が迎えてくれます。
      </p>
      <p>
        <strong>【波しぶきが届きそうな自家源泉掛け流し海見え露天風呂】</strong> 敷地内から湧き出る自家源泉を惜しみなく注ぎ込む露天風呂は、目線の先に広大な津軽海峡と下北半島の稜線が広がります。冬の荒波の音と雪舞う冷たい海風を感じながら浸かる熱めの名湯は、格別の心地よさです。
      </p>
      <p>
        <strong>【ミシュランガイド1つ星の伝統を受け継ぐ本物の割烹懐石】</strong> 北海道ミシュランで1つ星を獲得した名門の真骨頂は、素材本来の旨味を極限まで引き出した会席料理。冬の津軽海峡マグロ、活ヤリイカ、タラバガニ、キンキの煮付けなど、職人の技が光る一皿一皿をお部屋または個室でゆっくり味わえます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hWakamatsu.hotelMinCharge || 24200).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hWakamatsu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-red-700 hover:bg-red-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 平成館 しおさい亭 別館花月 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-blue-100 text-blue-900 font-black text-xs rounded-full">津軽海峡一望の絶景・全室客室露天風呂付きの上質別荘空間</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 湯の川温泉　平成館　しおさい亭　別館花月（北海道函館市湯川町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-blue-50 border border-blue-300 text-blue-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hShiosai.reviewAverage}（${hShiosai.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hShiosai.hotelImageUrl}" alt="${hShiosai.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hShiosai.roomImageUrl || hShiosai.hotelImageUrl}" alt="${hShiosai.hotelName} 露天風呂付き客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 湯の川の海沿いに堂々とそびえる平成館しおさい亭の中で、特別な上質ステイを約束する専用フロア「別館花月」。専用ラウンジやきめ細やかなおもてなしが用意され、ゆったりとした時間を過ごしたいカップルやご夫婦に選ばれています。
      </p>
      <p>
        <strong>【海と一体化する全室客室露天風呂】</strong> 別館花月の客室には、津軽海峡を一望できる専用の客室露天風呂を完備。水平線から昇る朝日の輝きや、夜の海に浮かぶ漁火の幻想的な光を眺めながら、好きな時に何度でも天然温泉を満喫できます。
      </p>
      <p>
        <strong>【厳選海の幸が躍る美食和食会席】</strong> 夕食はプライベートな食事処でいただく贅沢な和食膳。旬の魚介のお造り盛り合わせ、道産牛の陶板焼き、季節の鍋物など、北海道の冬の恵みを五感で楽しむ料理構成が高く評価されています。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hShiosai.hotelMinCharge || 27000).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hShiosai.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-blue-700 hover:bg-blue-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="sightseeing" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6 leading-relaxed">
  はこだてクリスマスファンタジー鑑賞や温泉宿泊と合わせて巡りたい、函館を代表する名所をWikipedia公式データとともにご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-cyan-700 font-bold text-sm">📍 金森赤レンガ倉庫（Kanemori Red Brick Warehouse）</span>
    </div>
    <img src="${wKanemori.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/168681/168681.jpg'}" alt="金森赤レンガ倉庫" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wKanemori.extract || '金森赤レンガ倉庫は、北海道函館市にある歴史的建造物群。明治期に建造された赤レンガ造りの営業用倉庫がショッピングモールやビヤホールとして再生され、函館ベイエリアの観光拠点となっています。はこだてクリスマスファンタジーのメイン会場となります。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-cyan-700 font-bold text-sm">📍 五稜郭（Goryokaku）</span>
    </div>
    <img src="${wGoryokaku.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/184396/184396.jpg'}" alt="五稜郭" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wGoryokaku.extract || '五稜郭は、江戸時代末期に江戸幕府が蝦夷地の箱館郊外に建造した星形要塞。国の特別史跡に指定されており、冬季は堀一面に電球が灯る「五稜星の夢イルミネーション」が実施され、雪原に巨大な光の星が浮かび上がります。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-cyan-700 font-bold text-sm">📍 函館山（Mount Hakodate）</span>
    </div>
    <img src="${wHakodateyama.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/109498/109498.jpg'}" alt="函館山" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wHakodateyama.extract || '函館山は、北海道函館市の市街地西端にある標高334メートルの山。山頂の展望台から望む扇状に広がる市街地と左右の海が描く夜景は「世界三大夜景」「100万ドルの夜景」として世界的に知られます。冬は澄み切った大気により一層輝きを増します。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-cyan-700 font-bold text-sm">📍 湯の川温泉（Yunokawa Onsen）</span>
    </div>
    <img src="${wYunokawa.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/182122/182122.jpg'}" alt="湯の川温泉" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wYunokawa.extract || '湯の川温泉は、北海道函館市にある北海道三大温泉郷の一つ。開湯は承応2年（1653年）と伝えられ、函館空港から車で約10分という抜群のアクセスを誇ります。津軽海峡に面した露天風呂からは冬の漁火や荒波を望むことができます。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  🗺️ 巨大ツリー・星形ライトアップ・夜景を満喫する 1泊2日函館冬の王道モデルコース
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-cyan-700 text-white rounded text-xs">1日目</span>
      元町坂道散策から18時の海上ツリー点灯花火・函館山冬夜景へ
    </h3>
    <p class="leading-relaxed">
      12:30 函館空港またはJR函館駅に到着 ➔ ホテルへ荷物を預け、函館市電で末広町へ ➔ 八幡坂から港を見下ろす雪景色や旧函館区公会堂のクラシック建築を散策 ➔ 15:30 カフェで温かい珈琲とスイーツで休憩 ➔ 17:00 金森赤レンガ倉庫へ移動、海上遊歩道で場所を確保しつつスープバーで熱々のクラムチャウダーを味わう ➔ 18:00 カウントダウンとともに巨大海上ツリーが一斉点灯！冬の夜空に祝砲花火が打ち上がる感動の瞬間 ➔ 18:40 函館山ロープウェイで山頂へ向かい、澄み渡る大気の中に煌めく100万ドルの冬夜景を眼下に望む ➔ 20:00 湯の川温泉の宿へチェックイン ➔ 津軽海峡本マグロや活イカが並ぶ極上会席ディナーに舌鼓 ➔ 海見え雪見露天風呂で波音を聴きながら至福の温泉浴。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-cyan-700 text-white rounded text-xs">2日目</span>
      朝食バイキングでいくら盛り放題＆五稜星の夢と名物グルメ
    </h3>
    <p class="leading-relaxed">
      07:30 朝の清々しい津軽海峡を眺めながら目覚めの露天風呂 ➔ ホテル自慢の朝食バイキングでいくら盛り放題の豪華海鮮丼と焼き立て海鮮焼きを堪能 ➔ 10:00 チェックアウト後、市電で五稜郭公園前へ ➔ 五稜郭タワー展望台に登り、白銀の雪で覆われた巨大な星形要塞のパノラマを一望 ➔ 12:30 五稜郭近くの老舗店で透明スープの函館名物「塩ラーメン」ランチ ➔ 14:00 函館朝市や赤レンガ倉庫でお土産（函館チーズケーキ、トラピストバター、塩辛、イカ飯）を購入 ➔ 16:00 函館駅または函館空港より温かな思い出とともに帰路へ。
    </p>
  </div>
</div>

<h2 id="comparison-table" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  📊 函館 厳選5ホテルの特徴・温泉・宿泊目安比較一覧
</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
      <tr>
        <th class="p-3">ホテル・旅館名</th>
        <th class="p-3">立地・エリア</th>
        <th class="p-3">楽天評価</th>
        <th class="p-3">宿泊目安(1名)</th>
        <th class="p-3">温泉・お風呂の特徴</th>
        <th class="p-3">食事の魅力・朝食</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-100 text-stone-700">
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">センチュリーマリーナ函館</td>
        <td class="p-3">函館駅・ベイエリア徒歩圏</td>
        <td class="p-3 font-bold text-cyan-700">★ ${hCentury.reviewAverage}</td>
        <td class="p-3">¥${Number(hCentury.hotelMinCharge || 13500).toLocaleString()}〜</td>
        <td class="p-3">最上階天空露天風呂「SPA SOLANI」インフィニティ</td>
        <td class="p-3">全国上位！150種超の豪華海鮮朝食ビュッフェ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ラビスタ函館ベイANNEX</td>
        <td class="p-3">函館ベイエリア中心</td>
        <td class="p-3 font-bold text-cyan-700">★ ${hAnnex.reviewAverage}</td>
        <td class="p-3">¥${Number(hAnnex.hotelMinCharge || 17020).toLocaleString()}〜</td>
        <td class="p-3">函館山一望の大浴場＋無料の3種貸切風呂完備</td>
        <td class="p-3">半個室風食事処での海鮮小鉢＆炙り焼き朝食</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">望楼NOGUCHI函館</td>
        <td class="p-3">湯の川温泉中心</td>
        <td class="p-3 font-bold text-stone-900">★ ${hBorou.reviewAverage}</td>
        <td class="p-3">¥34,000〜</td>
        <td class="p-3">全室スイート仕様・客室専用展望温泉風呂</td>
        <td class="p-3">道南の旬食材が躍る独創的な和洋創作会席</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">割烹旅館 若松</td>
        <td class="p-3">湯の川温泉・津軽海峡沿い</td>
        <td class="p-3 font-bold text-red-700">★ ${hWakamatsu.reviewAverage}</td>
        <td class="p-3">¥${Number(hWakamatsu.hotelMinCharge || 24200).toLocaleString()}〜</td>
        <td class="p-3">海辺の自家源泉掛け流し絶景露天風呂</td>
        <td class="p-3">ミシュラン1つ星の伝統を受け継ぐ本格割烹懐石</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">平成館 しおさい亭 別館花月</td>
        <td class="p-3">湯の川温泉・海沿い</td>
        <td class="p-3 font-bold text-blue-700">★ ${hShiosai.reviewAverage}</td>
        <td class="p-3">¥${Number(hShiosai.hotelMinCharge || 27000).toLocaleString()}〜</td>
        <td class="p-3">全室オーシャンビュー露天風呂付き客室</td>
        <td class="p-3">プライベート食事処での厳選海の幸和食会席</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  ❓ 函館クリスマス＆冬の旅行 よくある質問（FAQ）
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-cyan-950">Q1. はこだてクリスマスファンタジーの開催期間と点灯時間は？</h3>
    <p class="text-stone-700 leading-relaxed">
      2026年は12月1日(火)から12月25日(金)まで毎日開催されます。ツリーの点灯時間は16:30〜17:45、そして18:00に点灯セレモニーと花火打ち上げが行われ、22:00（金土および22〜25日は24:00）まで点灯します。花火は毎日18:00の点灯に合わせて打ち上がります。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-cyan-950">Q2. 冬の函館散策で特に気をつけるべき服装や靴は？</h3>
    <p class="text-stone-700 leading-relaxed">
      12月の函館は海風が非常に強く、体感温度は氷点下5℃〜10℃近くまで下がります。ロング丈の防風・防寒ダウンジャケット、耳が隠れるニット帽、マフラー、厚手の手袋が必須です。また、八幡坂などの急坂や歩道は圧雪や凍結（ブラックアイスバーン）となるため、滑り止め溝の深いスノーブーツや簡易スパイクを装着してください。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-cyan-950">Q3. ベイエリアのホテルと湯の川温泉の旅館、どちらに泊まるのがおすすめですか？</h3>
    <p class="text-stone-700 leading-relaxed">
      クリスマスツリーの点灯やライトアップを夜遅くまで楽しみ、翌朝の豪華朝食バイキングを満喫したい方はベイエリアのホテル（センチュリーマリーナやラビスタ）が最適です。一方、津軽海峡を望む客室露天風呂や本格的な会席料理、静寂の中で温泉旅館情緒に浸りたい方は湯の川温泉（望楼NOGUCHIや割烹旅館若松など）がおすすめです。市電で約30分の距離なので、2泊して両方に泊まるプランも大変人気です。
    </p>
  </div>
</div>

<h2 id="internal-links" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-cyan-700 pb-2 my-8">
  📌 あわせて読みたい北海道・冬の観光＆名湯特集
</h2>
<div class="p-6 rounded-3xl bg-cyan-50/70 border border-cyan-200 space-y-3 my-6">
  <p class="text-xs text-cyan-900 font-bold mb-2">当サイトでは、北海道の旬のグルメや雪景色を満喫できる厳選ガイドを多数公開しています。</p>
  <ul class="text-xs text-cyan-900 space-y-2 list-disc list-inside">
    <li><a href="/prefectures/hokkaido/" class="underline font-bold hover:text-cyan-700">北海道の温泉旅館・観光名所完全ガイド（函館・登別・定山渓・小樽）</a></li>
    <li><a href="/posts/autumn-hokkaido-hakodate-seafood-guide" class="underline hover:text-cyan-700">函館の極上海の幸！活イカ・ウニ・海鮮丼と名門温泉ホテル特集</a></li>
    <li><a href="/posts/resort-hokkaido-hakodate-morning-buffet-guide" class="underline hover:text-cyan-700">朝食のおいしいホテル全国1位常連！函館モーニングビュッフェ宿比較ガイド</a></li>
    <li><a href="/posts/winter-youth-hokkaido-hakodate-goryokaku-nightview-guide" class="underline hover:text-cyan-700">五稜星の夢と函館山夜景！冬の函館を満喫するロマンチック滞在ガイド</a></li>
    <li><a href="/posts/noboribetsu-onsen-jigokudani-nine-springs-guide" class="underline hover:text-cyan-700">登別温泉地獄谷と9つの泉質めぐり！名湯・雪見露天風呂ガイド</a></li>
  </ul>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${title}",
  "description": "${description}",
  "datePublished": "${date}",
  "dateModified": "${date}",
  "author": {
    "@type": "Organization",
    "name": "クランドトラベル（Croud Travel）編集部"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Croud Travel",
    "logo": {
      "@type": "ImageObject",
      "url": "https://croud-travel.pages.dev/favicon.ico"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://croud-travel.pages.dev/posts/${slug}"
  }
}
</script>
`;

  const postData = {
    id: slug,
    slug: slug,
    title: title,
    description: description,
    hero_image: hCentury.hotelImageUrl,
    gallery: [
      hCentury.hotelImageUrl,
      hAnnex.hotelImageUrl,
      hBorou.hotelImageUrl,
      hWakamatsu.hotelImageUrl,
      hShiosai.hotelImageUrl
    ],
    hotel_name: "センチュリーマリーナ函館・ラビスタ函館ベイANNEX・望楼NOGUCHI函館 ほか",
    affiliate_url: hCentury.affiliateUrl,
    categories: [
      "冬のイベント特集",
      "イルミネーション",
      "クリスマス特集",
      "函館",
      "湯の川温泉",
      "北海道グルメ"
    ],
    price: `¥${Number(hCentury.hotelMinCharge || 13500).toLocaleString()}〜`,
    rating: hCentury.reviewAverage || 4.65,
    review_count: hCentury.reviewCount || 4188,
    date: date,
    is_special_feature: true,
    keywords: [
      "はこだてクリスマスファンタジー 2026",
      "函館 クリスマスツリー 花火 時間",
      "五稜星の夢 イルミネーション 2026 2027",
      "センチュリーマリーナ函館 朝食バイキング 口コミ",
      "ラビスタ函館ベイANNEX 違い 貸切風呂",
      "望楼NOGUCHI函館 宿泊記 客室露天風呂",
      "割烹旅館 若松 湯の川温泉 ミシュラン",
      "平成館 しおさい亭 別館花月 露天風呂付き客室",
      "函館 冬 服装 気温 靴 滑り止め"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["函館", "クリスマスファンタジー", "五稜星の夢", "湯の川温泉", "センチュリーマリーナ函館", "冬旅行", "北海道"]
---

# ${title}

2026年12月1日〜25日開催の「はこだてクリスマスファンタジー」と、特別史跡五稜郭跡が星形に浮かび上がる「五稜星の夢イルミネーション」を徹底解説！

赤レンガ倉庫群前の海上に浮かぶ高さ約20mの巨大モミの木ツリー、毎夜18時の点灯カウントダウンと祝砲花火、温かなスープバー巡りや函館山の澄み渡る極上冬夜景の鑑賞術を網羅。

朝食バイキングで全国屈指の人気を誇るベイエリアホテルや、津軽海峡を望む湯の川温泉の名門旅館など厳選5宿をご紹介します。

---

## 💡 現地調査に基づくプロの指南！12月函館イベント攻略＆快適滞在マニュアル

- **ツリー点灯式＆花火打ち上げ（毎日18:00）:** 点灯の瞬間は毎日18:00。カウントダウンとともに花火が約1分間打ち上がります。金森赤レンガ倉庫前の海上遊歩道から真正面に望むポジションは17:40頃には確保するのが理想。
- **スープバー（赤レンガ倉庫前広場）:** 市内の人気店が競う温製スープ。冷えた身体に染み渡るクラムチャウダーを片手にツリーを眺めるのが定番。
- **五稜星の夢（ほしのゆめ）:** 日没から点灯。五稜郭タワー展望台のチケット売り場は夕方混雑するため、事前のウェブ前売り券購入がスムーズ。
- **海風と氷点下に耐える防寒装備:** 12月の函館は海風が強く体感温度がマイナス5℃以下に。防風ロングダウン、ニット帽、手袋、滑り止めの効いたスノーブーツが必須です。

---

## 🏨 旅の目的に応じて選ぶ！函館の厳選名ホテル＆温泉旅館5選

### 1. センチュリーマリーナ函館（北海道函館市大手町）
- **特徴:** 全国屈指の朝食バイキング！いくら盛り放題など150種超のビュッフェ。最上階インフィニティ天然温泉スパ「SPA SOLANI」から函館山を一望。
- **宿泊目安:** 1名 ¥${Number(hCentury.hotelMinCharge || 13500).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hCentury.reviewAverage}（${hCentury.reviewCount}件）
- 👉 [センチュリーマリーナ函館の空室・宿泊プランを見る](${hCentury.affiliateUrl})

### 2. ラビスタ函館ベイＡＮＮＥＸ（共立リゾート）（北海道函館市大手町）
- **特徴:** 名門ラビスタの上位グレード。落ち着いた大人空間、函館山を望む大浴場と3つの無料貸切風呂、半個室で味わう贅沢朝食。
- **宿泊目安:** 1名 ¥${Number(hAnnex.hotelMinCharge || 17020).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hAnnex.reviewAverage}（${hAnnex.reviewCount}件）
- 👉 [ラビスタ函館ベイＡＮＮＥＸの空室・宿泊プランを見る](${hAnnex.affiliateUrl})

### 3. 望楼ＮＯＧＵＣＨＩ函館（北海道函館市湯川町）
- **特徴:** 湯の川温泉の最高峰デザイナーズ旅館。全室スイート仕様・客室専用展望温泉風呂完備。道南の旬食材が彩る独創的な和洋創作会席。
- **宿泊目安:** 1名 ¥34,000〜
- **楽天トラベル評価:** ⭐ ${hBorou.reviewAverage}（${hBorou.reviewCount}件）
- 👉 [望楼ＮＯＧＵＣＨＩ函館の空室・宿泊プランを見る](${hBorou.affiliateUrl})

### 4. 割烹旅館　若松（北海道函館市湯川町）
- **特徴:** 大正11年創業の老舗。敷地内自家源泉掛け流しの海見え絶景露天風呂と、ミシュラン1つ星の伝統を受け継ぐ本格割烹懐石。
- **宿泊目安:** 1名 ¥${Number(hWakamatsu.hotelMinCharge || 24200).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hWakamatsu.reviewAverage}（${hWakamatsu.reviewCount}件）
- 👉 [割烹旅館　若松の空室・宿泊プランを見る](${hWakamatsu.affiliateUrl})

### 5. 湯の川温泉　平成館　しおさい亭　別館花月（北海道函館市湯川町）
- **特徴:** 全室津軽海峡を一望するオーシャンビュー客室露天風呂付き。専用ラウンジときめ細やかなおもてなし、厳選海の幸和食会席。
- **宿泊目安:** 1名 ¥${Number(hShiosai.hotelMinCharge || 27000).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hShiosai.reviewAverage}（${hShiosai.reviewCount}件）
- 👉 [平成館しおさい亭 別館花月の空室・宿泊プランを見る](${hShiosai.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **金森赤レンガ倉庫:** ${wKanemori.extract || '明治期の赤レンガ倉庫がショッピングモールやビヤホールとして再生された函館ベイエリアの観光拠点。はこだてクリスマスファンタジーのメイン会場。'}
- **五稜郭:** ${wGoryokaku.extract || '幕末に建造された星形要塞。国の特別史跡。冬は堀一面に電球が灯る「五稜星の夢イルミネーション」が実施され雪原に光の星が浮かび上がります。'}
- **函館山:** ${wHakodateyama.extract || '標高334メートルの山。山頂展望台から望む扇状の市街地夜景は100万ドルの夜景として名高い。冬は空気が澄み渡り最も美しく輝きます。'}
- **湯の川温泉:** ${wYunokawa.extract || '北海道三大温泉郷の一つ。開湯1653年の歴史を誇り、函館空港から車で約10分の好立地。津軽海峡に面した露天風呂が魅力。'}

---

## 🗺️ 函館を満喫する 1泊2日モデルコース

- **1日目:** 函館駅・空港到着 ➔ 八幡坂・元町洋館散策 ➔ 17:00 金森赤レンガ倉庫へ移動＆スープバー ➔ 18:00 海上ツリー点灯式＆祝砲花火 ➔ 函館山ロープウェイで100万ドルの冬夜景 ➔ 湯の川温泉へチェックイン ➔ 津軽海峡海の幸ディナー＆雪見露天風呂
- **2日目:** 朝の露天風呂 ➔ 名物朝食バイキングでいくら盛り放題 ➔ 五稜郭タワー展望台で雪の五稜星を一望 ➔ 老舗の函館塩ラーメンランチ ➔ 函館朝市・赤レンガでお土産購入 ➔ 帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. クリスマスファンタジーの花火は毎日打ち上がりますか？**  
A. はい、12月1日〜25日の開催期間中、毎日18:00の点灯に合わせて約1分間花火が打ち上がります。

**Q2. ベイエリアと湯の川温泉、どちらに宿泊するのが便利ですか？**  
A. 夜遅くまでツリーや朝食ビュッフェを楽しみたい方はベイエリア、海の見える露天風呂や会席料理で温泉旅館情緒を楽しみたい方は湯の川温泉がおすすめです。市電で約30分で移動できます。

**Q3. 冬の路面凍結対策はどのような準備が必要ですか？**  
A. 函館の坂道や歩道は凍結しやすいため、溝の深いスノーブーツや駅等で購入できる着脱式すべり止めバンドを必ず装着してください。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【函館】はこだてクリスマスファンタジー2026＆五稜星の夢完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/${slug}/)
`;

  return { postData, noteMarkdown };
};
