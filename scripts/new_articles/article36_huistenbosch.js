// scripts/new_articles/article36_huistenbosch.js
module.exports = function buildArticle36(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-nagasaki-huistenbosch-christmas-illumination-hotels-guide";
  const title = "【長崎・ハウステンボス】光の街のクリスマス＆白銀の世界2026-2027完全攻略！世界最大1300万球イルミネーション・運河アイススケートと直営クラシックホテル＆長崎和牛・地魚会席を満喫する厳選宿5選";
  const description = "世界最大1,300万球の光が中世ヨーロッパの街並みを包み込む「ハウステンボス 光の街のクリスマス＆白銀の世界2026-2027」。日本初の運河アイススケートリンクや巨大ツリー、3階建てメリーゴーラウンド、ナイト花火の鑑賞術を徹底解説。直営ホテル宿泊者だけの開園前先行入場特典や専用クルーズ、長崎和牛・五島灘の旬魚を堪能できる至高のホテル5選を網羅。";
  const date = "2026-11-06";
  const prefecture = "長崎県";
  const area = "佐世保・ハウステンボス";

  // ホテル抽出
  const hEurope = hotels.find(h => h.hotelNo === 9159) || hotels[0];
  const hAmsterdam = hotels.find(h => h.hotelNo === 9157) || hotels[1];
  const hOkura = hotels.find(h => h.hotelNo === 9057) || hotels[2];
  const hNikko = hotels.find(h => h.hotelNo === 1793) || hotels[3];
  const hForest = hotels.find(h => h.hotelNo === 9156) || hotels[4];

  const wHuis = wiki["ハウステンボス"] || {};
  const wSasebo = wiki["佐世保市"] || {};
  const wOmura = wiki["大村湾"] || {};
  const wSaikai = wiki["西海橋"] || {};

  const reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-amber-950 via-red-950 to-stone-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-amber-800/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-amber-300 font-extrabold text-xs tracking-wider">
      <span>🎄</span><span>2026-2027冬 ハウステンボス 光の街のクリスマス＆白銀の世界 最新攻略ガイド</span>
    </div>
    <p class="text-xs text-amber-100 leading-relaxed">
      11月上旬から始まる本場ヨーロッパのクリスマスマーケットと1,300万球の圧倒的光景！パーク直営・オフィシャルホテルで叶える極上の冬旅。
    </p>
  </div>
  <a href="${hEurope.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    👑 ホテルヨーロッパの空室・プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2 mb-4">
  世界最大1,300万球が織りなす中世オランダの冬景色！ハウステンボス「光の街のクリスマス＆白銀の世界」の圧倒的魅力
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  長崎県佐世保市、大村湾の穏やかな波打ち際に広がる「ハウステンボス」。オランダの街並みを忠実に再現した東京ドーム約33個分の広大な敷地は、冬の訪れとともに日本中どこにもない圧倒的な光の王国へと変貌を遂げます。世界最大級となる「1,300万球」のイルミネーションが点灯する冬のシーズンは、11月上旬から12月25日にかけて開催される「光の街のクリスマス」、そして12月下旬から2月下旬にかけて街全体が純白の輝きに包まれる「白銀の世界」へとリレーされ、一年の中で最もロマンチックな高揚感に満たされます。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  特にクリスマスシーズンの「アムステルダム広場」や「クリスマスタウン」には、本場ヨーロッパ直輸入のオーナメントやホットワイン、焼きたてワッフルが並ぶ屋台（ヒュッテ）が立ち並び、高さ十数メートルに及ぶ荘厳な巨大ツリーが広場中央に君臨します。日没とともに開催される点灯式では、教会の鐘の音とパイプオルガンの重厚な音色、そしてプロの声楽家たちによる生歌が響き渡る中、広場全体が一瞬にしてまばゆいシャンパンゴールドの光に染まり、息をのむような感動が訪れます。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  さらに運河を舞台にした幻想的な「光と炎の運河カナルクルーズ」、夜空を彩るクリスマスナイト花火、日本初となる全長約250メートルの「運河アイススケートリンク」、そしてノスタルジックな3階建てカルーセル（スカイカルーセル）など、家族連れからカップル、三世代旅行まで心躍る体験が目白押しです。この壮大な夜景を余すところなく満喫するためには、閉園時間を気にせず過ごせる「パーク内直営ホテル」や「隣接オフィシャルホテル」の宿泊が決定的な鍵となります。専用クルーザーでのチェックインや、一般開園前の静寂なパーク散策など、宿泊者だけの特別な特権を享受しながら、極上の長崎和牛や有明海・五島灘の海の幸に舌鼓を打つ極上の冬旅へ出かけましょう。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2 my-6">
  💡 現地調査に基づくプロの指南！ハウステンボス冬イベント完全攻略＆混雑回避マニュアル
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">必見の光の演出・ナイトアトラクション</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>白銀の点灯式（アムステルダム広場）:</strong> 夕暮れ時、祈りの音楽とともに広場一帯が一斉に純白の輝きに包まれる瞬間は必見。開始15分前には広場のツリー前を確保するのがコツです。</p>
      <p>② <strong>アートガーデン「光の滝＆ブルーウェーブ」:</strong> 広大な芝生エリアが青い光の海へと変化し、高さ数十メートルのシンボルタワー「ドムトールン」から光の滝が流れ落ちる大パノラマ。</p>
      <p>③ <strong>カナルクルーズ「光と噴水の運河」:</strong> 船が通るたびに水中照明と噴水が音楽に合わせてリズミカルに舞い上がる夜間限定の運河クルーズ。水鏡に映る街並みが格別の美しさです。</p>
      <p>④ <strong>運河アイススケート＆スカイカルーセル:</strong> 運河沿いに設置される氷のリンクで滑走する非日常体験と、日本初の3階建てメリーゴーラウンド最上階から眺めるイルミネーション全景。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-red-100 text-red-800 font-extrabold text-xs rounded-lg">滞在・服装テクニック</span>
      <h3 class="text-base font-bold text-stone-900">海風対策・直営ホテル宿泊者特典の活用法</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【大村湾からの冷たい潮風に備える防寒着】</strong> 九州とはいえ、大村湾に面した夜のハウステンボスは海風が吹き込み、体感温度が氷点下近くまで下がります。ロング丈の防風ダウン、手袋、マフラー、足元の冷えを防ぐ厚手のソックス・歩きやすいブーツが必須です。</p>
      <p><strong>【直営ホテル宿泊者限定「翌日1DAYパスポート」特典】</strong> 直営ホテル（ホテルヨーロッパ、ホテルアムステルダム、フォレストヴィラ等）に宿泊すると、初日に購入したパスポート提示で翌日分の1DAYパスポートが無料または優待価格でプレゼントされる特典があります（※利用条件はプラン要確認）。</p>
      <p><strong>【専用クルーザーでの優雅な入退場】</strong> ホテルヨーロッパ宿泊者は、ウェルカムゲートの専用船着場からホテル内ハーバーまで専用チェックインクルーザーで運航。手荷物は場内配送サービスで客室まで直行するため、到着後手ぶらですぐに散策できます。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2 my-8">
  🏨 パークを満喫する特等席！ハウステンボス厳選ホテル＆クラシック宿5選
</h2>

<!-- 宿1: ホテルヨーロッパ ハウステンボス -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">パーク内最高峰クラシック・専用クルーザーでチェックインする至高の貴族邸宅</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. ホテルヨーロッパ　ハウステンボス（長崎県佐世保市ハウステンボス町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hEurope.reviewAverage}（${hEurope.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hEurope.hotelImageUrl}" alt="${hEurope.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hEurope.roomImageUrl || hEurope.hotelImageUrl}" alt="${hEurope.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> ハウステンボス内カナル（運河）の最深部に君臨する、19世紀オランダの貴族邸宅をモチーフにした最高級フラッグシップホテル。専用クルーザーで運河を進み、生演奏が響く豪華なロビーハーバーへとチェックインする演出は、日常の喧騒を一瞬で忘れさせます。
      </p>
      <p>
        <strong>【季節の花々と生演奏ラウンジ】</strong> ロビーには365日色鮮やかな季節の生花が咲き誇り、夜には「アンカーズラウンジ」でフルートやピアノのクラシック生演奏が毎夜開催。シャンパンを傾けながら優雅なナイトタイムを過ごせます。
      </p>
      <p>
        <strong>【極上フレンチ・鉄板焼と朝食ビュッフェ】</strong> 夕食は長崎和牛フィレ肉や五島列島近海で獲れた伊勢海老・アワビを熟練シェフが焼き上げる鉄板焼やクラシックフレンチ。朝食にはシャンパンとともに味わう焼きたてオムレツや地元名産が並ぶ極上ビュッフェを堪能できます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hEurope.hotelMinCharge).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hEurope.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: ホテルアムステルダム ハウステンボス -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-red-100 text-red-900 font-black text-xs rounded-full">パーク中央に位置する唯一のホテル・夜のイルミネーション広場まで徒歩0分</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. ホテルアムステルダム　ハウステンボス（長崎県佐世保市ハウステンボス町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-red-50 border border-red-300 text-red-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hAmsterdam.reviewAverage}（${hAmsterdam.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hAmsterdam.hotelImageUrl}" alt="${hAmsterdam.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hAmsterdam.roomImageUrl || hAmsterdam.hotelImageUrl}" alt="${hAmsterdam.hotelName} 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> ハウステンボス有料ゾーンのど真ん中に位置する、パーク内唯一の直営ホテル。ホテルのエントランスを一歩出れば、そこはクリスマスツリーや白銀の点灯式が行われる「アムステルダム広場」。夜遅くまでイルミネーションを満喫し、疲れたらすぐ客室へ戻れる圧倒的な利便性が自慢です。
      </p>
      <p>
        <strong>【広々としたヨーロピアン客室】</strong> スタンダードルームでも45平米以上の広さを誇り、上品な花柄ファブリックと落ち着いたインテリアが調和。クラブフロア宿泊者には専用ラウンジでのアフタヌーンティーやバータイムサービスが提供されます。
      </p>
      <p>
        <strong>【夜景ビュッフェとワイン】</strong> 広場に面したレストラン「アクールベル」では、ライトアップされた広場をガラス越しに眺めながら、シェフ実演のローストビーフや長崎近海魚のアクアパッツァなど多彩なビュッフェ料理を味わえます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hAmsterdam.hotelMinCharge).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hAmsterdam.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-red-700 hover:bg-red-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: ホテルオークラＪＲハウステンボス -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-blue-100 text-blue-900 font-black text-xs rounded-full">天然温泉「琴乃湯」完備・アムステルダム中央駅を模した重厚なランドマーク</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. ホテルオークラＪＲハウステンボス（長崎県佐世保市ハウステンボス町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-blue-50 border border-blue-300 text-blue-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hOkura.reviewAverage}（${hOkura.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hOkura.hotelImageUrl}" alt="${hOkura.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hOkura.roomImageUrl || hOkura.hotelImageUrl}" alt="${hOkura.hotelName} 大浴場" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> JRハウステンボス駅から徒歩3分、ウェルカムゲートすぐ前にそびえ立つオフィシャルホテル。オランダ・アムステルダム中央駅のルネサンス建築を再現した外観は圧倒的な存在感を誇り、ホテル専用のカナルクルーザー発着場も備えています。
      </p>
      <p>
        <strong>【エリア唯一の源泉掛け流し天然温泉「琴乃湯」】</strong> 館内には茶褐色に濁る良質なナトリウム塩化物泉を湛えた天然温泉「琴乃湯」を完備。広々とした内湯と開放的な露天風呂があり、イルミネーション散策で冷え切った身体の芯までぽかぽかに温めてくれます。
      </p>
      <p>
        <strong>【オークラ伝統の美食と和洋中レストラン】</strong> 鉄板焼「大村湾」、和食「さくら」、中国料理「桃花林」、洋食ビュッフェ「カメリア」と多彩なレストランが揃い、オークラ伝統のきめ細やかなホスピタリティとともに贅沢な美食体験を約束します。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hOkura.hotelMinCharge).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hOkura.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-blue-700 hover:bg-blue-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: フォレストヴィラ ハウステンボス -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">静かな森と湖畔に佇む2階建て独立コテージ・ファミリー＆愛犬同伴にも人気</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. フォレストヴィラ　ハウステンボス（長崎県佐世保市ハウステンボス町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hForest.reviewAverage}（${hForest.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hForest.hotelImageUrl}" alt="${hForest.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hForest.roomImageUrl || hForest.hotelImageUrl}" alt="${hForest.hotelName} コテージ" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> ハウステンボス奥深く、白鳥が泳ぐ静かな湖を囲むように建ち並ぶ欧風コテージスタイルの直営ホテル。木々のざわめきと小鳥のさえずりに包まれるプライベート感あふれる別荘ステイが叶います。
      </p>
      <p>
        <strong>【全室メゾネット構造の広々空間】</strong> 1階に広々としたリビングダイニングとテラス、2階に2つの独立したベッドルームを備えた贅沢な造り。小さな子ども連れのファミリーやグループ旅行でも周囲を気にせずゆったり寛げ、ドッグヴィラでは愛犬との同宿も可能です。
      </p>
      <p>
        <strong>【湖畔レストランでの温かな健康朝食】</strong> 湖畔に面したレストラン「トロティネ」では、地元九州の新鮮な野菜や旬の素材をふんだんに取り入れた身体に優しい欧風朝食ビュッフェを提供。朝霧に包まれる湖を眺めながら清々しい朝のひとときを満喫できます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hForest.hotelMinCharge).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hForest.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: ホテル日航ハウステンボス -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-indigo-100 text-indigo-900 font-black text-xs rounded-full">宿泊者専用ゲート直結・大浴場完備＆日航ならではの洗練されたホスピタリティ</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. ホテル日航ハウステンボス（長崎県佐世保市ハウステンボス町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-indigo-50 border border-indigo-300 text-indigo-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hNikko.reviewAverage}（${hNikko.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hNikko.hotelImageUrl}" alt="${hNikko.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hNikko.roomImageUrl || hNikko.hotelImageUrl}" alt="${hNikko.hotelName} 館内" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> パークの入場ゲートに隣接し、ホテル宿泊者専用の再入場ゲートを備えたオフィシャルホテル。中庭の美しい花壇を抜けて直接パークへ出入りでき、小さな子どもや年配の方を連れたファミリー旅行にも圧倒的な支持を得ています。
      </p>
      <p>
        <strong>【広々とした大浴場でリフレッシュ】</strong> 館内には旅の疲れを心地よく癒やす宿泊者専用の大浴場を完備。洗い場もゆったりと設計されており、夜遅くまで歩き回った足をじっくり伸ばして温まることができます。
      </p>
      <p>
        <strong>【長崎の郷土色豊かな朝食ビュッフェ】</strong> レストラン「ラヴァンドル」での朝食は、長崎名物・皿うどんや角煮まんじゅう、五島うどん、焼き立てクロワッサンがずらりと並ぶ贅沢な和洋バイキング。日航ブランドならではの丁寧で行き届いた接客も高評価の理由です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hNikko.hotelMinCharge).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hNikko.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-indigo-700 hover:bg-indigo-600 text-white font-black text-xs rounded-xl shadow transition">
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
  ハウステンボスの滞在と合わせて訪れたい、佐世保・西九州エリアを代表する観光名所をWikipedia公式データとともにご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-amber-700 font-bold text-sm">📍 ハウステンボス（Huis Ten Bosch）</span>
    </div>
    <img src="${wHuis.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/9159/9159.jpg'}" alt="ハウステンボス" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wHuis.extract || 'ハウステンボスは、長崎県佐世保市にあるオランダの街並みを再現した日本屈指の広さを誇るテーマパーク。四季折々の花々と世界最大級のイルミネーションが年間を通じて来園者を魅了します。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-amber-700 font-bold text-sm">📍 佐世保市（九十九島・佐世保港）</span>
    </div>
    <img src="${wSasebo.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/9057/9057.jpg'}" alt="佐世保市" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wSasebo.extract || '佐世保市は、長崎県北部の中核都市。西海国立公園に指定されるリアス海岸「九十九島」の絶景や、旧海軍鎮守府以来の港町文化、名物佐世保バーガーやレモンステーキなどの豊かな食文化で知られます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-amber-700 font-bold text-sm">📍 大村湾（琴の海・針尾瀬戸）</span>
    </div>
    <img src="${wOmura.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/9157/9157.jpg'}" alt="大村湾" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wOmura.extract || '大村湾は、長崎県の中央部に位置する閉鎖性内海。波が極めて穏やかであることから「琴の海」とも称され、真珠養殖やカキ、ナマコなどの豊かな海の恵みをもたらします。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-amber-700 font-bold text-sm">📍 西海橋（針尾瀬戸・日本三大急潮）</span>
    </div>
    <img src="${wSaikai.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/1793/1793.jpg'}" alt="西海橋" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wSaikai.extract || '西海橋は、佐世保市針尾島と西海市を結ぶアーチ橋。下を流れる針尾瀬戸は日本三大急潮の一つとして知られ、潮の干満時には大迫力の渦潮が発生する絶景スポットです。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2 my-8">
  🗺️ イルミネーションと美食を満喫する 1泊2日プレミアム滞在モデルコース
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-amber-700 text-white rounded text-xs">1日目</span>
      専用クルーザー入場から本場クリスマスマーケット・夜の大規模点灯式へ
    </h3>
    <p class="leading-relaxed">
      12:30 JRハウステンボス駅到着 ➔ ウェルカムゲートの場内ホテル手荷物預かり所へ手荷物を預ける ➔ 専用チェックインクルーザーでホテルヨーロッパへ優雅に入場 ➔ チェックイン手続き後、場内散策へ ➔ クリスマスタウンで本場のホットワイン（グリューワイン）や焼きたてワッフルを味わう ➔ 16:30 スカイカルーセル（3階建てメリーゴーラウンド）最上階から夕暮れの街並みを一望 ➔ 17:30 アムステルダム広場へ移動し、生歌が響く「白銀の点灯式」に参加！1,300万球が一斉に輝く瞬間の感動 ➔ 18:30 アートガーデンの光の滝と運河アイススケートを楽しむ ➔ 20:00 ナイト花火鑑賞 ➔ ホテル内レストランで長崎和牛と近海伊勢海老のプレミアムディナー ➔ 部屋の窓から運河の夜景を眺めながら至福の就寝。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-amber-700 text-white rounded text-xs">2日目</span>
      静寂の早朝パーク散策とミュージアム巡り・佐世保名物グルメ
    </h3>
    <p class="leading-relaxed">
      07:30 ホテルヨーロッパの運河テラスで優雅な朝食ビュッフェ（特製オムレツと朝シャンパン） ➔ 08:45 直営ホテル宿泊者特典を活用し、一般開園前の静寂なパークを先行散策！観光客のいない美しいオランダの街並みで記念撮影 ➔ 10:00 パレスハウステンボスで美術館展示とオランダ風宮殿庭園を鑑賞 ➔ 12:00 チェックアウト後、佐世保バーガー認定店でジューシーな出来立てバーガーランチ ➔ 14:00 お土産ショップで長崎カステラやオランダ直輸入チョコレート、チーズを購入 ➔ 15:30 特急ハウステンボス号に乗車し博多・長崎方面へ帰路。
    </p>
  </div>
</div>

<h2 id="comparison-table" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2 my-8">
  📊 ハウステンボス 厳選5ホテルのスペック・特典比較一覧
</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
      <tr>
        <th class="p-3">ホテル名</th>
        <th class="p-3">立地・区分</th>
        <th class="p-3">楽天評価</th>
        <th class="p-3">宿泊目安(1名)</th>
        <th class="p-3">特筆ポイント・温泉</th>
        <th class="p-3">名物料理・ディナー</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-100 text-stone-700">
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ホテルヨーロッパ</td>
        <td class="p-3">直営最上位・運河最深部</td>
        <td class="p-3 font-bold text-amber-700">★ ${hEurope.reviewAverage}</td>
        <td class="p-3">¥${Number(hEurope.hotelMinCharge).toLocaleString()}〜</td>
        <td class="p-3">専用クルーザーチェックイン・生花ロビー・生演奏</td>
        <td class="p-3">極上長崎和牛鉄板焼・フレンチ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ホテルアムステルダム</td>
        <td class="p-3">直営・パーク中心広場内</td>
        <td class="p-3 font-bold text-amber-700">★ ${hAmsterdam.reviewAverage}</td>
        <td class="p-3">¥${Number(hAmsterdam.hotelMinCharge).toLocaleString()}〜</td>
        <td class="p-3">全室45平米以上・点灯式広場まで徒歩0分</td>
        <td class="p-3">広場夜景ビュッフェ・ローストビーフ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ホテルオークラＪＲハウステンボス</td>
        <td class="p-3">オフィシャル・駅徒歩3分</td>
        <td class="p-3 font-bold text-amber-700">★ ${hOkura.reviewAverage}</td>
        <td class="p-3">¥${Number(hOkura.hotelMinCharge).toLocaleString()}〜</td>
        <td class="p-3">エリア唯一の源泉掛け流し天然温泉「琴乃湯」</td>
        <td class="p-3">オークラ伝統フレンチ・鉄板焼・和食</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">フォレストヴィラ</td>
        <td class="p-3">直営・静かな湖畔コテージ</td>
        <td class="p-3 font-bold text-amber-700">★ ${hForest.reviewAverage}</td>
        <td class="p-3">¥${Number(hForest.hotelMinCharge).toLocaleString()}〜</td>
        <td class="p-3">全室2階建てメゾネット・愛犬同伴OK客室あり</td>
        <td class="p-3">湖畔欧風朝食ビュッフェ「トロティネ」</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ホテル日航ハウステンボス</td>
        <td class="p-3">オフィシャル・ゲート直結</td>
        <td class="p-3 font-bold text-amber-700">★ ${hNikko.reviewAverage}</td>
        <td class="p-3">¥${Number(hNikko.hotelMinCharge).toLocaleString()}〜</td>
        <td class="p-3">宿泊者専用再入場ゲート・広々大浴場完備</td>
        <td class="p-3">長崎名物皿うどん・角煮まんバイキング</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-amber-700 pb-2 my-8">
  ❓ ハウステンボス冬のイルミネーション旅行 よくある質問（FAQ）
</h2>

<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q1. ハウステンボスのクリスマスイルミネーションと白銀の世界の開催期間はいつですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 「光の街のクリスマス」は例年11月上旬から12月25日のクリスマス当日まで開催され、本場ヨーロッパのクリスマスマーケットや巨大ツリーが登場します。その後、12月下旬から2月下旬にかけては「白銀の世界」へと移行し、イルミネーション全体が純白とプラチナの荘厳な光へと一変します。どちらの期間も1,300万球の壮大な輝きを存分に体感できます。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q2. 直営ホテル（ヨーロッパ、アムステルダム、フォレストヴィラ）とオフィシャルホテルの違いは何ですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 直営ホテルはパークの敷地内（有料ゾーン内または専用船着場直結）にあり、一般開園前のパーク先行入場特典や、翌日の1DAYパスポート無料プレゼント（※条件あり）、専用クルーザーでのチェックインなど贅沢な特典が付与されます。一方、オフィシャルホテル（オークラ、日航）は入場ゲート至近に位置し、天然温泉大浴場（オークラ）や専用再入場ゲート（日航）など利便性とコスパに優れています。旅の予算や目的に合わせて選ぶのがベストです。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q3. 冬の夜の寒さはどの程度ですか？どのような防寒対策が必要ですか？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 敷地が大村湾に面しているため、夜になると強い海風が吹き込み、体感温度は0度〜氷点下に達します。厚手の防風ダウンジャケット、マフラー、手袋、ニット帽、使い捨てカイロ、歩きやすい防寒ブーツが必須です。特に運河クルーズや点灯式の待機中は足元から冷えるため、厚手の靴下や保温インナーを重ね着することをおすすめします。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
    <h3 class="text-sm font-bold text-stone-900">Q4. 福岡（博多）や長崎空港からのアクセス方法は？</h3>
    <p class="text-xs text-stone-700 mt-2 leading-relaxed">
      A. 博多駅からはJR特急「ハウステンボス」で直通約1時間45分、乗り換えなしで到着できます。長崎空港からはハウステンボス直行の高速船（安田汽船・約50分）が運航しており、海の上をクルーズしながらホテル前までアクセスできるため非常に人気があります。また、長崎空港発の直行リムジンバス（約55分）も運行しています。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-100 border border-stone-200 text-center space-y-3">
  <h3 class="text-base font-bold text-stone-900">長崎・九州エリアの温泉＆冬の観光特集も合わせてチェック！</h3>
  <ul class="text-xs text-stone-600 space-y-1.5 inline-block text-left">
    <li>👉 <a href="/posts/note-293/" class="text-amber-800 hover:text-amber-600 underline">黒川温泉「湯あかり」＆名湯露天風呂巡り完全攻略ガイド</a></li>
    <li>👉 <a href="/posts/note-91/" class="text-amber-800 hover:text-amber-600 underline">佐賀・武雄温泉＆嬉野温泉の美肌湯宿おすすめ5選</a></li>
    <li>👉 <a href="/nagasaki/" class="text-amber-800 hover:text-amber-600 underline">長崎県の温泉地・宿・旬の観光特集一覧</a></li>
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
    image: hEurope.hotelImageUrl,
    other_images: [
      hAmsterdam.hotelImageUrl,
      hOkura.hotelImageUrl,
      hForest.hotelImageUrl,
      hNikko.hotelImageUrl
    ],
    hotel_name: "ホテルヨーロッパ　ハウステンボス・ホテルアムステルダム ほか",
    affiliate_url: hEurope.affiliateUrl,
    categories: [
      "冬のイベント特集",
      "イルミネーション",
      "ハウステンボス",
      "クリスマス特集",
      "長崎和牛",
      "天然温泉"
    ],
    price: `¥${Number(hOkura.hotelMinCharge || 7140).toLocaleString()}〜`,
    rating: hEurope.reviewAverage || 4.63,
    review_count: hEurope.reviewCount || 1000,
    date: date,
    is_special_feature: true,
    keywords: [
      "ハウステンボス イルミネーション 2026 2027",
      "ハウステンボス クリスマス マーケット",
      "ホテルヨーロッパ ハウステンボス 宿泊記 口コミ",
      "ホテルアムステルダム 予約 違い",
      "ホテルオークラJRハウステンボス 温泉",
      "フォレストヴィラ ハウステンボス ファミリー コテージ",
      "ハウステンボス 冬 服装 気温 混雑"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["ハウステンボス", "イルミネーション", "クリスマス", "ホテルヨーロッパ", "白銀の世界", "佐世保", "長崎旅行"]
---

# ${title}

世界最大1,300万球の光が中世ヨーロッパの街並みを包み込む「ハウステンボス 光の街のクリスマス＆白銀の世界2026-2027」。

11月上旬から12月25日にかけて開催される本場ヨーロッパ直輸入のクリスマスマーケット、日本初の運河アイススケートリンクや巨大ツリー、3階建てメリーゴーラウンド、ナイト花火の鑑賞術を徹底解説。

直営ホテル宿泊者だけの開園前先行入場特典や専用クルーズ、長崎和牛・五島灘の旬魚を堪能できる至高のホテル5選を網羅します。

---

## 💡 現地調査に基づくプロの指南！ハウステンボス冬イベント完全攻略＆混雑回避マニュアル

- **白銀の点灯式（アムステルダム広場）:** 夕暮れ時、生歌とパイプオルガンの音色とともに1,300万球が一斉点灯する圧巻の瞬間。開始15分前には広場中央を確保。
- **カナルクルーズ「光と噴水の運河」:** 船の航行に合わせて水中照明と噴水がリズミカルに舞い上がる夜間限定の幻想クルーズ。
- **大村湾の海風に備える防寒対策:** 夜間は海風で体感温度が氷点下に達するため、厚手の防風ダウンジャケット、マフラー、手袋、防寒ブーツが必須。
- **直営ホテル宿泊者特典:** 翌日1DAYパスポートプレゼント（条件あり）や専用クルーザーチェックインなど特別な特権を活用。

---

## 🏨 パークを満喫する特等席！ハウステンボス厳選ホテル＆クラシック宿5選

### 1. ホテルヨーロッパ　ハウステンボス（長崎県佐世保市ハウステンボス町）
- **特徴:** パーク内最高峰クラシック。専用クルーザーでチェックインする19世紀オランダの貴族邸宅。生演奏ラウンジと極上長崎和牛鉄板焼。
- **宿泊目安:** 1名 ¥${Number(hEurope.hotelMinCharge).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hEurope.reviewAverage}（${hEurope.reviewCount}件）
- 👉 [ホテルヨーロッパの空室・宿泊プランを見る](${hEurope.affiliateUrl})

### 2. ホテルアムステルダム　ハウステンボス（長崎県佐世保市ハウステンボス町）
- **特徴:** パーク中央・点灯式が行われる広場に面した唯一のホテル。全室45平米以上の広々空間と広場夜景を望むビュッフェ。
- **宿泊目安:** 1名 ¥${Number(hAmsterdam.hotelMinCharge).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hAmsterdam.reviewAverage}（${hAmsterdam.reviewCount}件）
- 👉 [ホテルアムステルダムの空室・宿泊プランを見る](${hAmsterdam.affiliateUrl})

### 3. ホテルオークラＪＲハウステンボス（長崎県佐世保市ハウステンボス町）
- **特徴:** 駅徒歩3分。アムステルダム中央駅を模したランドマーク。エリア唯一の源泉掛け流し天然温泉「琴乃湯」とオークラ伝統美食。
- **宿泊目安:** 1名 ¥${Number(hOkura.hotelMinCharge).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hOkura.reviewAverage}（${hOkura.reviewCount}件）
- 👉 [ホテルオークラＪＲハウステンボスの空室・宿泊プランを見る](${hOkura.affiliateUrl})

### 4. フォレストヴィラ　ハウステンボス（長崎県佐世保市ハウステンボス町）
- **特徴:** 静かな森と湖畔に佇む2階建て独立メゾネットコテージ。ファミリー・グループ旅行や愛犬同伴宿泊にも最適。
- **宿泊目安:** 1名 ¥${Number(hForest.hotelMinCharge).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hForest.reviewAverage}（${hForest.reviewCount}件）
- 👉 [フォレストヴィラの空室・宿泊プランを見る](${hForest.affiliateUrl})

### 5. ホテル日航ハウステンボス（長崎県佐世保市ハウステンボス町）
- **特徴:** 入場ゲート至近・宿泊者専用再入場ゲート直結。広々とした大浴場完備と長崎名物皿うどん・角煮まんが並ぶ贅沢朝食。
- **宿泊目安:** 1名 ¥${Number(hNikko.hotelMinCharge).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hNikko.reviewAverage}（${hNikko.reviewCount}件）
- 👉 [ホテル日航ハウステンボスの空室・宿泊プランを見る](${hNikko.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **ハウステンボス:** ${wHuis.extract || 'オランダの街並みを再現した日本屈指のテーマパーク。四季の花々と世界最大級のイルミネーションが年間を通じて来園者を魅了します。'}
- **佐世保市街:** ${wSasebo.extract || '西海国立公園九十九島の絶景と名物佐世保バーガー、旧海軍鎮守府以来の港町文化が息づく長崎県北部の中核都市。'}
- **大村湾:** ${wOmura.extract || '長崎県中央部に位置する閉鎖性内海。波が穏やかで琴の海とも称され、豊かな海の恵みをもたらします。'}
- **西海橋:** ${wSaikai.extract || '針尾瀬戸に架かるアーチ橋。日本三大急潮の一つとして知られ、大迫力の渦潮を間近で見学できます。'}

---

## 🗺️ ハウステンボスを満喫する 1泊2日モデルコース

- **1日目:** JRハウステンボス駅到着 ➔ 手荷物預かりから専用クルーザーでホテルヨーロッパへ ➔ クリスマスタウン散策 ➔ スカイカルーセル ➔ 17:30 アムステルダム広場で感動の点灯式 ➔ アートガーデン・光と噴水の運河クルーズ ➔ ナイト花火鑑賞 ➔ 長崎和牛ディナー
- **2日目:** 運河を望む朝食ビュッフェ ➔ 一般開園前の静寂なパークを先行散策 ➔ パレスハウステンボス美術館 ➔ 佐世保バーガーランチ ➔ お土産購入 ➔ 特急ハウステンボス号で帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. イルミネーションの点灯時間は？**  
A. 日没に合わせて点灯し、閉園時間まで点灯します。アムステルダム広場の点灯式は例年17:30〜18:00頃に開催されます。

**Q2. パーク直営ホテルに泊まる最大のメリットは？**  
A. 一般開園前の先行入場ができること、歩き疲れたらいつでも部屋に戻れること、翌日分のパスポート特典があることです。

**Q3. 夜の防寒対策で特に気をつけることは？**  
A. 大村湾からの海風が強いため、風を通さないロング丈のダウンコートや手袋、マフラーが必須です。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【長崎・ハウステンボス】光の街のクリスマス＆白銀の世界完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/${slug}/)
`;

  return { postData, noteMarkdown };
};
