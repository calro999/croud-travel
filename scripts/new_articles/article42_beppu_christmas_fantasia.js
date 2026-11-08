// scripts/new_articles/article42_beppu_christmas_fantasia.js
module.exports = function buildArticle42(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-oita-beppu-christmas-fantasia-fireworks-onsen-hotels-guide";
  const title = "【別府】べっぷクリスマスファンタジア2026＆鉄輪温泉湯けむり完全攻略！冬の夜空と海を焦がす1万発の音楽花火、別府湾一望の絶景露天風呂＆地獄蒸し・豊後牛・関アジ関サバを満喫する厳選宿5選";
  const description = "2026年12月開催の「べっぷクリスマスファンタジア」と別府八湯の冬旅を徹底解説。別府スパビーチ沖から冬の澄んだ夜空へ音楽とともに打ち上がる1万発以上の巨大花火、子どもたちのクリスマスキャロル合唱の鑑賞ポイントを網羅。別府湾を一望する絶景インフィニティ露天風呂や鉄輪温泉の湯けむり・名物地獄蒸し料理、豊後牛や冬の関アジ関サバを堪能できる楽天トラベル高評価宿5選をご紹介。";
  const date = "2026-11-08";
  const prefecture = "大分県";
  const area = "別府温泉・鉄輪・観海寺";

  // ホテル抽出
  const hSuginoi = hotels.find(h => h.hotelNo === 5547) || hotels[0];
  const hSeikai = hotels.find(h => h.hotelNo === 78242) || hotels[1];
  const hGahama = hotels.find(h => h.hotelNo === 153568) || hotels[2];
  const hHanabeppu = hotels.find(h => h.hotelNo === 30691) || hotels[3];
  const hShinwaen = hotels.find(h => h.hotelNo === 158425) || hotels[4];

  // Wikiスポット
  const wBeppu = wiki["別府温泉"] || {};
  const wJigoku = wiki["別府地獄めぐり"] || {};
  const wKannawa = wiki["鉄輪温泉"] || {};
  const wTower = wiki["別府タワー"] || {};

  const reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-red-950 via-rose-950 to-stone-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-rose-800/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-rose-300 font-extrabold text-xs tracking-wider">
      <span>🎆</span><span>2026冬 べっぷクリスマスファンタジア＆名湯別府温泉 最新現地滞在ガイド</span>
    </div>
    <p class="text-xs text-rose-100 leading-relaxed">
      12月下旬開催！別府スパビーチを彩る2夜連続の1万発音楽花火と冬の湯けむり情緒。海見えインフィニティ露天風呂＆大分の旬の味覚を極める特選宿。
    </p>
  </div>
  <a href="${hSuginoi.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-rose-400 hover:bg-rose-300 text-stone-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    👑 杉乃井ホテルの空室・宿泊プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 mb-4">
  澄み渡る冬の別府湾が光と音楽に包まれる！「べっぷクリスマスファンタジア」と湯けむり温泉旅の醍醐味
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  日本一の湧出量と源泉数を誇る温泉郷、大分県・別府。湯けむりが立ち上る街並みが冬の冷気と混ざり合い、一年で最も風情を増す12月下旬、別府スパビーチ（的ヶ浜公園）を舞台に九州屈指の冬のビッグイベント「べっぷクリスマスファンタジア」が開催されます。クリスマスの直前週末、2日間にわたって打ち上げられる花火は合計1万発以上。夏の湿った大気とは異なり、冬の乾燥して澄み切った夜空では、花火の放つ閃光と色彩の輪郭が驚くほど鮮明に浮かび上がります。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  本イベント最大の特徴は、コンピューター制御によりクリスマスキャロルや最新ヒット曲のメロディーと花火の開花が100分の1秒単位で完全同期するドラマチックな演出です。地元の小学生約千名がキャンドルを灯しながら歌い上げる愛らしいクリスマスソングの合唱が会場を温かな感動で満たし、フィナーレでは視界を埋め尽くすほどのスターマインが海面を黄金色に染め上げます。砂浜の波打ち際から見上げる迫真の光景はもちろん、観海寺温泉の高台や海沿いの客室、さらには湯船に浸かりながら遠望する花火も、別府ならではの極上体験です。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  花火鑑賞の前後には、千年の歴史を誇る鉄輪温泉の湯けむり散策や地獄めぐり、高温の温泉噴気を利用した伝統の「地獄蒸し料理」を体験。さらに冬に最も脂が乗る豊後水道の「関アジ・関サバ」、きめ細やかなサシが入った「豊後牛（おおいた和牛）」、そして冬限定のとらふぐ料理など、九州が誇る至高の味覚が揃い踏みします。本稿では、2026年開催のファンタジア攻略法から混雑回避ルート、そして即予約が埋まる別府湾一望・名湯尽くしの高評価宿5選を徹底解説します。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-6">
  💡 現地調査に基づくプロの指南！べっぷクリスマスファンタジア攻略＆防寒マニュアル
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-rose-100 text-rose-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">打ち上げ時間・観覧スポット＆プログラム</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>2夜連続の打ち上げスケジュール（例年20:00〜）:</strong> 初日は子どもたちへのクリスマスプレゼントをテーマにした温かな構成、2日目は恋人たちやファミリーに贈るドラマチックな音楽連動花火。両日ともに20:00頃から約40分間にわたり連続で打ち上がります。</p>
      <p>② <strong>メイン会場・的ヶ浜公園（スパビーチ）:</strong> 打ち上げ台船の正面に位置し、重低音の炸裂音と音楽スピーカーが一体となる特等席。砂浜エリアは18:30頃から埋まり始めるため、防寒シートを持参して早めの場所取りがおすすめです。</p>
      <p>③ <strong>穴場鑑賞スポット（別府タワー展望台・的ヶ浜遊歩道）:</strong> 人混みを避けてパノラマで楽しむなら、リニューアルされた別府タワーのガラス張り展望デッキや、スパビーチ北側の海沿い遊歩道が視界良好です。</p>
      <p>④ <strong>宿の客室＆展望露天風呂からの鑑賞:</strong> 観海寺温泉の高台（杉乃井ホテルなど）や海岸通りのオーシャンビュー客室からは、別府市街地の夜景とともに海上に広がる花火を温もりの中で優雅に眺めることができます。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">交通・防寒テクニック</span>
      <h3 class="text-base font-bold text-stone-900">国道10号渋滞回避・服装・駐車場戦略</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【海風による急激な冷え込みと防寒対策】</strong> 別府湾に面したスパビーチは、日が沈むと海からの冷たい強風が吹き付けます。体感温度は氷点下近くまで下がるため、風を通さない防風ダウン、耳当て付きニット帽、手袋、首元を温めるマフラー、靴底用カイロが欠かせません。</p>
      <p><strong>【国道10号線の大渋滞を避ける移動術】</strong> 花火終了直後の国道10号線（別府〜大分間）および的ヶ浜周辺道路は完全なマヒ状態に陥ります。車での直付けは避け、宿泊先に車を置いた上で徒歩または路線バスを利用するか、別府駅周辺のコインパーキングに停めて徒歩（約15分）で会場へ向かうのが鉄則です。</p>
      <p><strong>【花火鑑賞後の冷えた身体を癒やす立ち寄り湯】</strong> 会場周辺には「竹瓦温泉」や「北浜温泉テルマス」などの歴史ある共同浴場が点在。鑑賞直後に熱めの名湯に飛び込み、芯から温まってから宿へ戻るルートも通の楽しみ方です。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-8">
  🏨 旅の目的に応じて選ぶ！別府の厳選名ホテル＆温泉旅館5選
</h2>

<!-- 宿1: 杉乃井ホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-rose-100 text-rose-900 font-black text-xs rounded-full">観海寺温泉の高台・宙館の天空露天風呂「宙湯」と圧倒的エンタメメガリゾート</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 別府温泉　杉乃井ホテル（オリックスホテルズ＆リゾーツ）（大分県別府市観海寺）</h3>
    </div>
    <span class="px-3 py-1.5 bg-rose-50 border border-rose-300 text-rose-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.64（11786件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hSuginoi.hotelImageUrl}" alt="別府温泉　杉乃井ホテル 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hSuginoi.roomImageUrl || hSuginoi.hotelImageUrl}" alt="別府温泉　杉乃井ホテル 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 別府湾と市街地を見晴らす観海寺温泉の高台に君臨する、九州を代表する名門温泉リゾート。新棟「宙館（そらかん）」や「星館」の開業によりラグジュアリー度が格段に進化し、三世代ファミリーからカップルまで絶大な人気を誇ります。
      </p>
      <p>
        <strong>【海抜約250mの天空大展望露天風呂「宙湯」＆「棚湯」】</strong> 宙館最上階に位置する展望露天風呂「宙湯」からは、別府の街並みと別府湾、晴れた日には四国まで見渡す大パノラマが展開。夜には街の夜景の向こうに上がるファンタジアの花火を、温かな湯に包まれながら贅沢に見下ろすことができます。
      </p>
      <p>
        <strong>【五感を刺激する豪華プレミアムビュッフェ】</strong> シェフが目の前で焼き上げる国産牛ステーキや、新鮮な旬の刺身、握り寿司、窯焼きピッツァ、中華、パティシエ特製デザートが百花繚乱。冬の味覚を心ゆくまで味わい尽くす贅沢なディナータイムが約束されています。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥23,100〜（2名1室利用・2食付時）</span>
        <a href="${hSuginoi.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-rose-700 hover:bg-rose-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: AMANE RESORT SEIKAI（潮騒の宿 晴海） -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-cyan-100 text-cyan-900 font-black text-xs rounded-full">全室海見え客室露天風呂付き・波打ち際の水盤テラスと洗練された大人の海の宿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. ＡＭＡＮＥ　ＲＥＳＯＲＴ　ＳＥＩＫＡＩ（潮騒の宿　晴海）（大分県別府市上人ケ浜町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.69（1240件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hSeikai.hotelImageUrl}" alt="潮騒の宿　晴海 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hSeikai.roomImageUrl || hSeikai.hotelImageUrl}" alt="潮騒の宿　晴海 客室露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 上人ヶ浜の海岸沿いに建ち、全室がオーシャンビュー＆天然温泉の客室露天風呂を備えた極上リゾート。モダンリビングと和のくつろぎが美しく調和し、波の音に耳を傾けながら優雅なプライベートタイムを過ごせます。
      </p>
      <p>
        <strong>【海抜0メートルの波打ち際露天「潮騒の湯」＆展望風呂】</strong> 1階の大浴場「潮騒の湯」は、湯船のすぐ先に別府湾の海面が迫る圧倒的な海との一体感。最上階の展望大浴場「昇陽の湯」からは昇る朝日や夜の水平線の漁火、そして花火の煌めきを一望のもとに収めることができます。
      </p>
      <p>
        <strong>【選べる3つの本格レストラン】</strong> 新鮮な関アジや豊後牛を味わう日本料理「玄」、フレンチの技法を凝らした海鮮ビストロ「バンケット」、モダンな炭火焼きダイニングと、好みの美食スタイルで冬の大分の恵みを堪能できます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥26,565〜（2名1室利用時）</span>
        <a href="${hSeikai.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: AMANE RESORT GAHAMA（ガハマテラス） -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-900 text-amber-200 font-black text-xs rounded-full">歴史ある別邸を受け継ぐ3500坪の静寂・全室温泉付き離れスイートの最高峰</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. ＡＭＡＮＥ　ＲＥＳＯＲＴ　ＧＡＨＡＭＡ（ガハマテラス）（大分県別府市上人ケ浜町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-stone-100 border border-stone-300 text-stone-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.73（161件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hGahama.hotelImageUrl}" alt="AMANE RESORT GAHAMA 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hGahama.roomImageUrl || hGahama.hotelImageUrl}" alt="AMANE RESORT GAHAMA 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 国木田独歩ゆかりの老舗別邸跡地、3500坪もの松林が茂る海辺の敷地にわずか31室のみを配したラグジュアリー隠れ家リゾート。敷地内には歴史ある洋館を再生したサロンや照壽庵、絵本ギャラリーが点在し、喧騒を忘れる非日常の静寂が広がります。
      </p>
      <p>
        <strong>【全室に備わる贅沢な源泉掛け流し客室風呂】</strong> プール付きヴィラやメゾネット、海を望むタワーなど、趣異なる客室すべてにプライベートな天然温泉露天風呂または内風呂を完備。好きな時間にいつでも名湯に浸かり、自分たちだけの特別な時間を満喫できます。
      </p>
      <p>
        <strong>【割烹料理とフレンチが融合した創作料理】</strong> 夕食はプライベート感あふれる個室ダイニングで。大分県産の厳選食材、豊後水道の極上魚介や旬の有機野菜をふんだんに取り入れた繊細な懐石料理は、記念日や特別な日の滞在にふさわしい至福の味わいです。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥27,830〜（2名1室利用時）</span>
        <a href="${hGahama.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 別府温泉 竹と椿のお宿 花べっぷ -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">別府駅徒歩6分・伝統工芸の別府竹細工と畳敷きの温もりあふれる和モダン癒やし宿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 別府温泉　竹と椿のお宿　花べっぷ（大分県別府市上田の湯町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.47（1428件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hHanabeppu.hotelImageUrl}" alt="別府温泉　竹と椿のお宿　花べっぷ 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hHanabeppu.roomImageUrl || hHanabeppu.hotelImageUrl}" alt="別府温泉　竹と椿のお宿　花べっぷ 館内" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> JR別府駅から徒歩約6分の閑静な高台に位置。館内はスリッパ不要のオール畳敷きとなっており、別府の伝統工芸「竹細工」の繊細な照明と椿の花のモチーフが館内を優しく包み込みます。女性目線の細やかな配慮が光る人気宿です。
      </p>
      <p>
        <strong>【ミクロの泡で肌を潤すマイクロバブルバス＆天然スチームサウナ】</strong> 自家源泉のアルカリ性単純温泉を満たした大浴場には、シルクのような超微細気泡が毛穴の汚れを優しく落とす「マイクロバブルバス」を導入。天然温泉の蒸気をそのまま利用したミストサウナで、冬の乾燥した肌をつややかに整えます。
      </p>
      <p>
        <strong>【大分の恵みが詰まった四季の会席料理】</strong> 夕食は彩り豊かな前菜から始まる創作会席。大分のブランド黒毛和牛の陶板焼きや、旬の鮮魚のお造り、具だくさんの郷土汁など、身体に優しい滋味あふれる料理が女性やシニア層から絶賛されています。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥17,787〜（2名1室利用時）</span>
        <a href="${hHanabeppu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 山荘 神和苑 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">鉄輪温泉の至宝・能舞台と日本庭園・全室自家源泉掛け流し露天風呂付きの格式名旅館</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 別府鉄輪温泉　山荘　神和苑（大分県別府市鉄輪）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.51（222件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hShinwaen.hotelImageUrl}" alt="別府鉄輪温泉　山荘　神和苑 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hShinwaen.roomImageUrl || hShinwaen.hotelImageUrl}" alt="別府鉄輪温泉　山荘　神和苑 客室露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 鉄輪温泉の最深部、広大な敷地に日本の伝統美を集約した格調高い和風旅館。敷地内には本格的な能舞台や茶室、手入れの行き届いた日本庭園が広がり、湯けむりが立ち上る鉄輪の情景と相まって圧倒的な和の風情を醸し出しています。
      </p>
      <p>
        <strong>【2つの敷地内自家源泉から引く青湯・名湯の掛け流し】</strong> 神和苑の誇りは、敷地内の源泉から湧き出る加水加温一切なしの純度100%天然温泉。時間や光の加減で神秘的な青色に変化する「青湯」をはじめ、全客室に設えられた客室露天風呂で鉄輪随一の極上泉質を独り占めできます。
      </p>
      <p>
        <strong>【熟練の料理人が腕を振るう本格日本料理＆鉄板焼き】</strong> 夕食は豊後牛のサーロインや近海で獲れた伊勢海老・アワビなど最高級食材を用いた会席料理、または目の前で職人が華麗に焼き上げる鉄板焼きコース。味覚だけでなく器や盛り付けの美しさに至るまで徹底的にこだわり抜かれています。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥17,600〜（2名1室利用時）</span>
        <a href="${hShinwaen.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="sightseeing" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（現地観光案内アーカイブ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6 leading-relaxed">
  べっぷクリスマスファンタジア鑑賞や温泉宿泊と合わせて巡りたい、別府を代表する名所を現地観光案内アーカイブとともにご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-rose-700 font-bold text-sm">📍 別府温泉（Beppu Onsen）</span>
    </div>
    <img src="${wBeppu.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/5547/5547.jpg'}" alt="別府温泉" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wBeppu.extract || '別府温泉（べっぷおんせん）は、大分県別府市内各地に数百ある温泉の総称。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-rose-700 font-bold text-sm">📍 別府地獄めぐり（Beppu Jigoku Meguri）</span>
    </div>
    <img src="${wJigoku.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/158425/158425.jpg'}" alt="別府地獄めぐり" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wJigoku.extract || '別府地獄めぐりは、大分県別府市の鉄輪・亀川地区に広がる奇観を呈する自然湧出源泉（地獄）を巡る観光名所。コバルトブルーの海地獄や赤く染まる血の池地獄など、地球のエネルギーを間近に体感できます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-rose-700 font-bold text-sm">📍 鉄輪温泉（Kannawa Onsen）</span>
    </div>
    <img src="${wKannawa.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/158425/158425.jpg'}" alt="鉄輪温泉" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wKannawa.extract || '鉄輪温泉（かんなわおんせん）は、大分県別府市にある温泉で、別府八湯の一つ。立ち上る湯けむりの風景は国の重要文化的景観に選定されています。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-rose-700 font-bold text-sm">📍 別府タワー（Beppu Tower）</span>
    </div>
    <img src="${wTower.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/30691/30691.jpg'}" alt="別府タワー" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wTower.extract || '別府タワー（べっぷタワー）は、大分県別府市にある観光塔。内藤多仲が設計した「タワー六兄弟」の一つとして登録有形文化財に指定されています。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-8">
  🗺️ 音楽花火・絶景露天・地獄蒸しを満喫する 1泊2日別府冬の王道モデルコース
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-rose-700 text-white rounded text-xs">1日目</span>
      地獄めぐりと鉄輪湯けむり散策から20時のクリスマス音楽花火へ
    </h3>
    <p class="leading-relaxed">
      12:00 大分空港またはJR別府駅に到着 ➔ 駅前で名物の「とり天定食」ランチ ➔ 路線バスまたはレンタカーで鉄輪温泉へ移動 ➔ 海地獄や血の池地獄を巡る「別府地獄めぐり」を堪能 ➔ 地獄蒸し工房鉄輪で温泉噴気による蒸し野菜や海鮮を体験 ➔ 15:30 宿泊先（杉乃井ホテルや晴海など）にチェックイン ➔ 別府湾を一望する展望露天風呂で冷えた身体を温める ➔ 18:30 早めの夕食で豊後牛ステーキや関アジ関サバ会席に舌鼓 ➔ 19:30 スパビーチ会場または宿の特等席へ移動 ➔ 20:00 カウントダウンとともに「べっぷクリスマスファンタジア」開幕！冬の澄んだ夜空に音楽と完全シンクロして打ち上がる1万発の花火を鑑賞 ➔ 21:00 宿へ戻り、余韻に浸りながら夜の露天風呂で至福の湯浴み。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-rose-700 text-white rounded text-xs">2日目</span>
      朝の別府湾サンライズ露天風呂＆湯けむり展望台とお土産巡り
    </h3>
    <p class="leading-relaxed">
      07:00 別府湾の水平線から昇る神々しい朝日を眺めながら目覚めの朝風呂 ➔ 宿自慢の朝食ビュッフェで大分県産卵のオムレツや名物だんご汁、焼きたてパンを満喫 ➔ 10:00 チェックアウト後、湯けむり展望台へ向かい、扇山を背景に街中から白い湯けむりが噴き上がる別府屈指のパノラマ絶景を撮影 ➔ 11:30 別府ロープウェイで鶴見岳山頂へ登り、冬の霧氷や別府湾の壮大なパノラマを一望 ➔ 13:30 別府駅前や竹瓦温泉周辺のレトロな商店街で、ざぼん漬け、カボス胡椒、別府竹細工のお土産を購入 ➔ 15:30 忘れられない冬の想い出とともに帰路へ。
    </p>
  </div>
</div>

<h2 id="comparison-table" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-8">
  📊 別府 厳選5ホテルの特徴・温泉・宿泊目安比較一覧
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
        <th class="p-3">食事の魅力・ディナー</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-100 text-stone-700">
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">別府温泉 杉乃井ホテル</td>
        <td class="p-3">観海寺温泉（高台）</td>
        <td class="p-3 font-bold text-rose-700">★ ${hSuginoi.reviewAverage}</td>
        <td class="p-3">¥${hSuginoi.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">海抜約250mの天空露天風呂「宙湯」＆大展望「棚湯」</td>
        <td class="p-3">目の前調理のオープンキッチン！超豪華プレミアムビュッフェ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">AMANE RESORT SEIKAI（潮騒の宿 晴海）</td>
        <td class="p-3">上人ヶ浜（海岸沿い）</td>
        <td class="p-3 font-bold text-cyan-700">★ ${hSeikai.reviewAverage}</td>
        <td class="p-3">¥${hSeikai.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">全室オーシャンビュー客室露天風呂＋波打ち際露天「潮騒の湯」</td>
        <td class="p-3">関アジ・豊後牛を堪能する日本料理・海鮮フレンチ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">AMANE RESORT GAHAMA（ガハマテラス）</td>
        <td class="p-3">上人ヶ浜（海岸松林）</td>
        <td class="p-3 font-bold text-stone-900">★ ${hGahama.reviewAverage}</td>
        <td class="p-3">¥${hGahama.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">3500坪の静寂・全室源泉掛け流し客室露天・内風呂付き離れ</td>
        <td class="p-3">完全プライベート個室で味わう最高峰創作懐石</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">別府温泉 竹と椿のお宿 花べっぷ</td>
        <td class="p-3">別府駅徒歩6分（高台）</td>
        <td class="p-3 font-bold text-emerald-700">★ ${hHanabeppu.reviewAverage}</td>
        <td class="p-3">¥${hHanabeppu.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">美肌マイクロバブルバス＆天然スチーム温泉サウナ</td>
        <td class="p-3">豊後牛陶板焼きと大分の旬彩をちりばめた和モダン会席</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">別府鉄輪温泉 山荘 神和苑</td>
        <td class="p-3">鉄輪温泉中心</td>
        <td class="p-3 font-bold text-amber-700">★ ${hShinwaen.reviewAverage}</td>
        <td class="p-3">¥${hShinwaen.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">自家源泉の神秘的な青湯・能舞台庭園を望む全室露天風呂</td>
        <td class="p-3">豊後牛・伊勢海老・アワビの本格懐石＆極上鉄板焼き</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-8">
  ❓ べっぷクリスマスファンタジア＆冬の別府旅行 よくある質問（FAQ）
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-rose-950">Q1. べっぷクリスマスファンタジアの開催日程と打ち上げ時間は？</h3>
    <p class="text-stone-700 leading-relaxed">
      例年12月23日前後の土曜日・日曜日の2夜連続で開催されます。打ち上げ時間は両日ともに20:00頃から約40分間、各日5,000発以上（計10,000発以上）の花火がクリスマス音楽とともに打ち上がります。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-rose-950">Q2. 冬の別府の気候と花火鑑賞時の服装の注意点は？</h3>
    <p class="text-stone-700 leading-relaxed">
      九州とはいえ、12月下旬の別府湾沿いは海風が吹き荒れるため体感温度は0℃近くまで冷え込みます。厚手のダウンコート、手袋、マフラー、ニット帽に加え、砂浜に座って鑑賞する場合はクッション性のある厚手のアルミレジャーシートとカイロが必須です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-rose-950">Q3. 会場周辺のホテルと鉄輪温泉・観海寺温泉、どちらがおすすめですか？</h3>
    <p class="text-stone-700 leading-relaxed">
      花火終了後に徒歩ですぐ部屋へ戻りたい方や海見え露天風呂を楽しみたい方は海岸通りの宿（晴海やガハマテラス）、高台から夜景と花火全体を見下ろしたい方や巨大温泉リゾートを満喫したい方は観海寺（杉乃井ホテル）、名湯の泉質や地獄蒸し情緒を極めたい方は鉄輪温泉（神和苑）が最適です。
    </p>
  </div>
</div>

<h2 id="internal-links" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-rose-700 pb-2 my-8">
  📌 あわせて読みたい大分・九州の温泉＆冬旅特集
</h2>
<div class="p-6 rounded-3xl bg-rose-50/70 border border-rose-200 space-y-3 my-6">
  <p class="text-xs text-rose-900 font-bold mb-2">当サイトでは、大分・九州の名湯や冬の絶景を満喫できる厳選ガイドを多数公開しています。</p>
  <ul class="text-xs text-rose-900 space-y-2 list-disc list-inside">
    <li><a href="/prefectures/oita/" class="underline font-bold hover:text-rose-700">大分県の温泉旅館・観光名所完全ガイド（別府・由布院・九重）</a></li>
    <li><a href="/posts/beppu-suginoi-hotel-guide" class="underline hover:text-rose-700">別府温泉 杉乃井ホテル完全宿泊ガイド！宙館と棚湯の魅力を徹底解剖</a></li>
    <li><a href="/posts/beppu-onsen-kannawa-kankaiji-hotels-guide" class="underline hover:text-rose-700">別府温泉・鉄輪と観海寺エリアの厳選名宿比較特集</a></li>
    <li><a href="/posts/kannawa-onsen-beppu-jigokumushi-view-guide" class="underline hover:text-rose-700">鉄輪温泉の湯けむりと地獄蒸し！レトロ情緒漂う湯治旅ガイド</a></li>
    <li><a href="/posts/winter-kumamoto-kurokawa-onsen-yuakari-bamboo-lantern-hotels-guide" class="underline hover:text-rose-700">黒川温泉「湯あかり」竹灯籠の雪見露天風呂と名湯めぐりガイド</a></li>
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
    hero_image: hSuginoi.hotelImageUrl,
    gallery: [
      hSuginoi.hotelImageUrl,
      hSeikai.hotelImageUrl,
      hGahama.hotelImageUrl,
      hHanabeppu.hotelImageUrl,
      hShinwaen.hotelImageUrl
    ],
    hotel_name: "別府温泉 杉乃井ホテル・AMANE RESORT SEIKAI・山荘 神和苑 ほか",
    affiliate_url: hSuginoi.affiliateUrl,
    categories: [
      "冬のイベント特集",
      "花火大会",
      "別府温泉",
      "鉄輪温泉",
      "大分観光",
      "客室露天風呂"
    ],
    price: `¥${hShinwaen.hotelMinCharge?.toLocaleString() || '17,600'}〜`,
    rating: hGahama.reviewAverage || 4.73,
    review_count: hSuginoi.reviewCount || 11786,
    date: date,
    is_special_feature: true,
    keywords: [
      "べっぷクリスマスファンタジア 2026",
      "別府 冬花火 日程 時間",
      "別府温泉 杉乃井ホテル 宙館 宙湯",
      "AMANE RESORT SEIKAI 晴海 口コミ",
      "ガハマテラス 宿泊記 露天風呂付き客室",
      "花べっぷ 朝食 温泉 口コミ",
      "山荘 神和苑 青湯 鉄輪温泉",
      "別府 クリスマス ホテル 予約",
      "別府 地獄蒸し 関アジ 関サバ"
    ],
    review: reviewHtml,
    image: hSuginoi.hotelImageUrl,
    other_images: [
      hSuginoi.hotelImageUrl,
      hSeikai.hotelImageUrl,
      hGahama.hotelImageUrl,
      hHanabeppu.hotelImageUrl,
      hShinwaen.hotelImageUrl
    ]
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["別府温泉", "べっぷクリスマスファンタジア", "冬花火", "杉乃井ホテル", "鉄輪温泉", "別府観光", "大分旅行"]
---

# ${title}

2026年12月開催の「べっぷクリスマスファンタジア」と別府八湯の冬旅を徹底解説！

別府スパビーチ沖から冬の澄んだ夜空へ音楽とともに打ち上がる1万発以上の巨大花火、子どもたちのクリスマスキャロル合唱の鑑賞ポイントを網羅。

別府湾を一望する絶景インフィニティ露天風呂や鉄輪温泉の湯けむり・名物地獄蒸し料理、豊後牛や冬の関アジ関サバを堪能できる厳選5宿をご紹介します。

---

## 💡 現地調査に基づくプロの指南！べっぷクリスマスファンタジア攻略＆防寒マニュアル

- **2夜連続の打ち上げ（例年20:00〜）:** 初日はクリスマスプレゼントをテーマにした温かな構成、2日目は恋人たちやファミリーに贈るドラマチックな音楽連動花火。両日ともに20:00頃から約40分間にわたり連続で打ち上がります。
- **メイン会場・的ヶ浜公園（スパビーチ）:** 打ち上げ台船の正面に位置し、重低音の炸裂音と音楽スピーカーが一体となる特等席。砂浜エリアは18:30頃から混み合うため、厚手シートを持参して早めの場所確保が安心です。
- **海風による急激な冷え込みと防寒装備:** 12月下旬の別府湾沿いは海風が吹き荒れ体感温度は0℃近くに。防風ロングダウン、耳当て付きニット帽、手袋、靴底用カイロが必須です。
- **国道10号線の渋滞回避:** 花火終了直後の国道10号線は激しい渋滞となります。宿に車を停めて徒歩で向かうか、別府駅周辺の駐車場を利用して徒歩移動（約15分）が最もスムーズです。

---

## 🏨 旅の目的に応じて選ぶ！別府の厳選名ホテル＆温泉旅館5選

### 1. 別府温泉　杉乃井ホテル（オリックスホテルズ＆リゾーツ）（大分県別府市観海寺）
- **特徴:** 観海寺温泉の高台に君臨する九州屈指のエンタメ温泉リゾート。宙館最上階「宙湯」から別府湾と花火を見下ろすパノラマ絶景。目の前調理の超豪華プレミアムビュッフェ。
- **宿泊目安:** 1名 ¥${hSuginoi.hotelMinCharge?.toLocaleString() || '23,100'}〜
- **楽天トラベル評価:** ⭐ ${hSuginoi.reviewAverage}（${hSuginoi.reviewCount}件）
- 👉 [別府温泉 杉乃井ホテルの空室・宿泊プランを見る](${hSuginoi.affiliateUrl})

### 2. ＡＭＡＮＥ　ＲＥＳＯＲＴ　ＳＥＩＫＡＩ（潮騒の宿　晴海）（大分県別府市上人ケ浜町）
- **特徴:** 上人ヶ浜の海沿いに佇む洗練された大人の海の宿。全室オーシャンビュー＆客室露天風呂完備。海抜0mの波打ち際露天「潮騒の湯」と関アジ・豊後牛を堪能する極上ディナー。
- **宿泊目安:** 1名 ¥${hSeikai.hotelMinCharge?.toLocaleString() || '26,565'}〜
- **楽天トラベル評価:** ⭐ ${hSeikai.reviewAverage}（${hSeikai.reviewCount}件）
- 👉 [潮騒の宿 晴海の空室・宿泊プランを見る](${hSeikai.affiliateUrl})

### 3. ＡＭＡＮＥ　ＲＥＳＯＲＴ　ＧＡＨＡＭＡ（ガハマテラス）（大分県別府市上人ケ浜町）
- **特徴:** 3500坪の松林にわずか31室の離れスイート。全室にプライベート温泉風呂付き。歴史ある洋館と現代建築が織りなす静寂の中、完全個室で味わう最高峰の創作懐石。
- **宿泊目安:** 1名 ¥${hGahama.hotelMinCharge?.toLocaleString() || '27,830'}〜
- **楽天トラベル評価:** ⭐ ${hGahama.reviewAverage}（${hGahama.reviewCount}件）
- 👉 [AMANE RESORT GAHAMAの空室・宿泊プランを見る](${hGahama.affiliateUrl})

### 4. 別府温泉　竹と椿のお宿　花べっぷ（大分県別府市上田の湯町）
- **特徴:** JR別府駅徒歩6分。全館畳敷きの温もりと別府伝統工芸の竹細工が彩る和モダン宿。微細気泡のマイクロバブルバスと天然スチームサウナで極上の美肌湯浴み。
- **宿泊目安:** 1名 ¥${hHanabeppu.hotelMinCharge?.toLocaleString() || '17,787'}〜
- **楽天トラベル評価:** ⭐ ${hHanabeppu.reviewAverage}（${hHanabeppu.reviewCount}件）
- 👉 [竹と椿のお宿 花べっぷの空室・宿泊プランを見る](${hHanabeppu.affiliateUrl})

### 5. 別府鉄輪温泉　山荘　神和苑（大分県別府市鉄輪）
- **特徴:** 鉄輪温泉の至宝。能舞台や日本庭園を有する圧倒的な格式。自家源泉掛け流しの神秘的な「青湯」を満たす客室露天風呂と、豊後牛や伊勢海老の本格懐石＆鉄板焼き。
- **宿泊目安:** 1名 ¥${hShinwaen.hotelMinCharge?.toLocaleString() || '17,600'}〜
- **楽天トラベル評価:** ⭐ ${hShinwaen.reviewAverage}（${hShinwaen.reviewCount}件）
- 👉 [山荘 神和苑の空室・宿泊プランを見る](${hShinwaen.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **別府温泉:** ${wBeppu.extract || '別府温泉（べっぷおんせん）は、大分県別府市内各地に数百ある温泉の総称。'}
- **別府地獄めぐり:** ${wJigoku.extract || '別府地獄めぐりは、大分県別府市の鉄輪・亀川地区に広がる奇観を呈する自然湧出源泉（地獄）を巡る観光名所。コバルトブルーの海地獄や赤く染まる血の池地獄など、地球のエネルギーを体感できます。'}
- **鉄輪温泉:** ${wKannawa.extract || '鉄輪温泉（かんなわおんせん）は、大分県別府市にある温泉で、別府八湯の一つ。立ち上る湯けむりの風景は国の重要文化的景観に選定されています。'}
- **別府タワー:** ${wTower.extract || '別府タワー（べっぷタワー）は、大分県別府市にある観光塔。内藤多仲が設計した「タワー六兄弟」の一つとして登録有形文化財に指定されています。'}

---

## 🗺️ 別府を満喫する 1泊2日モデルコース

- **1日目:** 別府到着 ➔ 駅前で名物とり天ランチ ➔ 鉄輪温泉で地獄めぐり（海地獄・血の池地獄） ➔ 地獄蒸し体験 ➔ 宿へチェックイン ➔ 別府湾サンセット露天風呂 ➔ 豊後牛・関アジ関サバの夕食 ➔ 20:00 スパビーチでべっぷクリスマスファンタジア音楽花火鑑賞 ➔ 宿の温泉露天風呂で温まり就寝
- **2日目:** 朝の別府湾サンライズ露天風呂 ➔ 宿自慢の朝食ビュッフェ ➔ 湯けむり展望台で記念撮影 ➔ 別府ロープウェイで鶴見岳の雪景色パノラマ ➔ 竹細工やカボスお土産散策 ➔ 帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. べっぷクリスマスファンタジアの花火は何時から上がりますか？**  
A. 例年20:00頃から約40分間にわたって打ち上がります。初日と2日目で演出テーマが異なり、各日5,000発以上、計1万発以上の花火が音楽とシンクロして夜空を彩ります。

**Q2. 花火会場までは車で行けますか？**  
A. 会場周辺の道路は大変混雑し駐車場も即満車となるため、宿に車を置いた上で徒歩または路線バスで向かうのが鉄則です。別府駅から会場（スパビーチ）までは徒歩約15分です。

**Q3. 別府湾沿いの宿と鉄輪温泉の宿、どちらがおすすめですか？**  
A. 花火やオーシャンビューの開放感を客室から楽しみたい方は海岸通りの宿（晴海やガハマテラス）や高台の杉乃井ホテルがおすすめです。一方、湯治場の風情や地獄蒸し・源泉の泉質に深く浸りたい方は鉄輪温泉（神和苑）が最適です。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【別府】べっぷクリスマスファンタジア2026＆鉄輪温泉湯けむり完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/posts/${slug})
`;

  return { postData, noteMarkdown };
};
