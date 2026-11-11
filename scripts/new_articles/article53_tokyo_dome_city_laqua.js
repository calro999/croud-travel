// scripts/new_articles/article53_tokyo_dome_city_laqua.js
module.exports = function buildArticle53(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-tokyo-dome-city-illumination-spa-laqua-hotels-guide";
  const title = "【東京ドームシティ】ウィンターイルミネーション2026-2027＆都心天然温泉「スパ ラクーア」完全攻略！極上サウナと東京夜景を満喫する名門ホテル5選";
  const description = "2026年11月〜2027年2月開催の東京ドームシティ ウィンターイルミネーションと、地下1,700mから湧く名湯「Spa LaQua（スパ ラクーア）」を徹底解説。クリスタルアベニューに輝く高さ15mの巨大メインツリー、ラクーアエリアの光のトンネル、観覧車ビッグ・オーの冬限定ライティングを網羅。さらに地下天然温泉の露天風呂や本場フィンランドサウナ、東京ドームホテルや庭のホテル 東京など、文京・水道橋・飯田橋エリアで美食とパノラマ夜景を堪能できる厳選ホテル5選をご紹介します。";
  const date = "2026-11-11";
  const prefecture = "東京都";
  const area = "水道橋・後楽園・文京・飯田橋";

  // ホテル抽出
  const hDome = hotels.find(h => h.hotelNo === 4805) || hotels[0];
  const hNiwa = hotels.find(h => h.hotelNo === 78211) || hotels[1];
  const hEdmont = hotels.find(h => h.hotelNo === 391) || hotels[2];
  const hChinzanso = hotels.find(h => h.hotelNo === 28448) || hotels[3];
  const hOtemachi = hotels.find(h => h.hotelNo === 166074) || hotels[4];

  // Wikiスポット
  const wDomeCity = wiki["東京ドームシティ"] || {};
  const wLaqua = wiki["ラクーア"] || {};
  const wKorakuen = wiki["小石川後楽園"] || {};
  const wCivic = wiki["文京区役所"] || {};

  const reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-blue-950 via-indigo-950 to-stone-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-blue-600/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-blue-300 font-extrabold text-xs tracking-wider">
      <span>🎡</span><span>2026-2027 東京ドームシティ ウィンターイルミネーション＆スパ ラクーア滞在ガイド</span>
    </div>
    <p class="text-xs text-blue-100 leading-relaxed">
      巨大メインツリーと光のアトラクション。地下1,700m天然温泉・フィンランドサウナ＆都心パノラマ名門宿特集。
    </p>
  </div>
  <a href="${hDome.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-blue-400 hover:bg-blue-300 text-stone-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    👑 東京ドームホテルの空室・宿泊プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 mb-4">
  光と笑顔が躍動する冬のエンタメシティ！イルミネーションと琥珀色の天然温泉が奏でる極上アーバンリトリート
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  JR水道橋駅や東京メトロ後楽園駅の目の前に広がる「東京ドームシティ」。東京ドームを中心に、遊園地アトラクション、商業施設、ホテル、天然温泉スパが一体となったこの巨大複合エリアは、冬を迎えると東京で最も活気に満ちた光のワンダーランドへと一変します。毎年11月中旬から翌年2月下旬まで開催される「TOKYO DOME CITY WINTER ILLUMINATION」は、誰もが思わず笑顔になる遊び心あふれるテーマと、最先端のライティング演出が融合した都内屈指の冬イベントです。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  見どころの中心となるのは、クリスタルアベニューにそびえ立つ高さ約15メートルの巨大メインツリー。光と音が連動するインタラクティブな演出や、人が近づくと色を変えるギミックなど、見るだけでなく体験して楽しめる仕掛けが随所に散りばめられています。さらにラクーアエリアへ進めば、頭上を埋め尽くす光のミルキーウェイや華やかな回廊が続き、世界初のセンターレス観覧車「ビッグ・オー」やジェットコースター「サンダードルフィン」のレールが夜空に光の軌跡を描き出します。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  そして、東京ドームシティの冬の最大の魅力は「イルミネーション散策の後に、本物の天然温泉で極限までリフレッシュできること」にあります。敷地内にある「Spa LaQua（スパ ラクーア）」は、東京ドームの地下約1,700メートルから湧き出る豊かな琥珀色のナトリウム-塩化物強塩温泉。冷たい夜風で冷えた体を露天風呂で温め、本格的なフィンランドサウナでロウリュを浴び、外気浴で澄み渡る夜空を仰ぐ瞬間は、まさに都会のオアシス。イルミ鑑賞と極上スパを組み合わせて、隣接する東京ドームホテルや近隣の名門ホテルに宿泊すれば、時間を気にせず贅沢なステイケーションを満喫できます。本稿では、東京ドームシティのイルミ攻略とスパ ラクーアの楽しみ方、そして厳選ホテル5選を余すところなくお届けします。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-6">
  💡 現地調査に基づくプロの指南！東京ドームシティ＆スパ ラクーア攻略マニュアル
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-blue-100 text-blue-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">メインツリー・光のトンネル＆観覧車夜景</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>クリスタルアベニューの高さ15mメインツリー:</strong> 15分ごとに光と音楽が躍動するスペシャルショーが展開されます。芝生広場周辺のステップベンチに腰掛けて見上げるアングルがベストショット。水面に反射するリフレクションも必見です。</p>
      <p>② <strong>ラクーアエリアの光の回廊とミルキーウェイ:</strong> ラクーアガーデンからアトラクションズへ続く通路には、星屑のようなLEDが頭上を覆う光のトンネルが設置され、幻想的な散策路を体験できます。</p>
      <p>③ <strong>センターレス大観覧車「ビッグ・オー」からの夜景:</strong> 真ん中に支柱がない世界初の観覧車。ゴンドラ内にはお好みのBGMを選べるスピーカーが完備され、約15分間の空中散歩でドームシティの全イルミと新宿・丸の内の摩天楼を一望できます。</p>
      <p>④ <strong>「Spa LaQua」の地下1,700m天然温泉とサウナ:</strong> 保温・保湿効果に優れた「熱の湯」と呼ばれる琥珀色の強塩温泉。露天風呂から観覧車のイルミネーションを眺められるほか、オートロウリュ付きの本格サウナや低温サウナ「ヒーリングバーデ」で極上のととのい体験が得られます。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">混雑＆イベント回避術</span>
      <h3 class="text-base font-bold text-stone-900">東京ドーム公演日チェックとスパの入館タイミング</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【東京ドームのライブ・コンサート開催日の影響】</strong> 東京ドームで人気アーティストの公演がある日は、開場前（15:00〜17:00）と終演後（21:00〜22:30）に周辺の飲食店やラクーアが非常に混雑します。事前に東京ドームのイベントスケジュールを確認し、公演がない平日や、公演中の時間帯（18:00〜20:30）を狙ってイルミやスパを楽しむのが裏ワザです。</p>
      <p><strong>【スパ ラクーアの入場制限と整理券対策】</strong> 週末の16:00〜19:00はスパ ラクーアのフロントで入場待ちが発生することがあります。宿泊先のホテルに早めにチェックインして荷物を置き、15時台の早い時間帯、または21時以降の遅い時間帯に入館すると、ゆったりと温泉とサウナを満喫できます。</p>
      <p><strong>【東京ドームホテル宿泊の絶対的アドバンテージ】</strong> 東京ドームホテルなら敷地内にあるため、イルミネーション鑑賞やスパを出た後、外の寒風にさらされることなく数分で部屋へ帰還できます。高層階からはドームシティのイルミネーションを真上から見下ろすことができ、最高のアフターサウナ時間を約束します。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-8">
  🏨 旅の目的に応じて選ぶ！水道橋・後楽園・飯田橋・文京の厳選名ホテル5選
</h2>

<!-- 宿1: 東京ドームホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-blue-100 text-blue-900 font-black text-xs rounded-full">東京ドームシティ直結！地上43階から見下ろすイルミネーション＆パノラマ夜景の特等席</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 東京ドームホテル（東京都文京区後楽）</h3>
    </div>
    <span class="px-3 py-1.5 bg-blue-50 border border-blue-300 text-blue-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.54（13945件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hDome.hotelImageUrl}" alt="東京ドームホテル 外観・夜景客室" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <div class="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 space-y-1">
        <p><strong>交通アクセス:</strong> JR「水道橋駅」東口より徒歩2分、都営三田線「水道橋駅」A2出口より徒歩1分、丸ノ内線・南北線「後楽園駅」徒歩5分</p>
        <p><strong>チェックイン/アウト:</strong> 14:00 / 11:00（嬉しい14時チェックイン）</p>
        <p><strong>館内設備:</strong> 地上43階スカイラウンジ＆ダイニング「アーティスト カフェ」、スーパーダイニング「リラッサ」、エグゼクティブラウンジ</p>
      </div>
    </div>
    <div class="md:col-span-7 space-y-3">
      <div class="text-xs md:text-sm text-stone-700 leading-relaxed space-y-2">
        <p>
          東京ドームシティのシンボルとしてそびえ立つ、地上43階・高さ155メートルの高層ランドマークホテル。水道橋駅・後楽園駅に直結し、イルミネーション会場やスパ ラクーアまで一切の移動ストレスなくアクセスできる、文句なしの滞在拠点です。
        </p>
        <p>
          客室はパークサイド（東京ドーム側）とパレスサイド（皇居・東京タワー側）に分かれており、パークサイドの高層階からは輝くドームの屋根や観覧車、街一面のウィンターイルミネーションを真上から見下ろす圧巻の鳥瞰夜景が広がります。館内のビュッフェレストラン「リラッサ」では、ローストビーフや冬の旬魚が並ぶ豪華ディナーを楽しめ、43階のバーからは東京タワーとスカイツリーを両方見渡す大人のバータイムを過ごせます。
        </p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥10,185〜（2名1室利用時）</span>
        <a href="${hDome.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 庭のホテル 東京 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-100 text-stone-900 font-black text-xs rounded-full">JR水道橋駅徒歩3分！美しい中庭と静寂に包まれる和モダン隠れ家ホテル（ミシュラン掲載）</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 庭のホテル　東京（東京都千代田区神田三崎町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-blue-50 border border-blue-300 text-blue-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.55（3150件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hNiwa.hotelImageUrl}" alt="庭のホテル 東京 外観・中庭" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <div class="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 space-y-1">
        <p><strong>交通アクセス:</strong> JR「水道橋駅」東口より徒歩3分、都営三田線「水道橋駅」A1出口より徒歩5分、東京ドームシティへ徒歩5分</p>
        <p><strong>チェックイン/アウト:</strong> 15:00 / 11:00</p>
        <p><strong>館内設備:</strong> 錦鯉が泳ぐ中庭テラス、日本料理「縁（ゆくり）」、ダイニング「流（りゅう）」、リラクゼーションラウンジ</p>
      </div>
    </div>
    <div class="md:col-span-7 space-y-3">
      <div class="text-xs md:text-sm text-stone-700 leading-relaxed space-y-2">
        <p>
          「美しいモダンな和」をコンセプトに、ミシュランガイド東京にも連続掲載された隠れ家ホテル。JR水道橋駅から徒歩3分、東京ドームシティからも徒歩5分という賑やかなエリアにありながら、一歩路地に入ると木立と小川がせせらぐ静寂の空間が広がります。
        </p>
        <p>
          障子を通して柔らかな自然光が差し込む客室は、無垢材や畳の温もりを感じる上質な設え。イルミネーション鑑賞やスパ ラクーアを満喫した後は、中庭を望む落ち着いたバーラウンジで日本酒やワインを嗜み、都会の喧騒を忘れた大人の夜を過ごせます。中庭を眺めながら味わう和朝食膳やグリル朝食はクチコミでも絶賛されており、心洗われる冬の休日を過ごしたいカップルやご夫婦に最適です。
        </p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥18,180〜（2名1室利用時）</span>
        <a href="${hNiwa.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: ホテルメトロポリタン エドモント -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-blue-100 text-blue-900 font-black text-xs rounded-full">「食のエドモント」と称される名門ホテル！飯田橋・水道橋徒歩5分＆美食フレンチの饗宴</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. ホテルメトロポリタン　エドモント（東京都千代田区飯田橋）</h3>
    </div>
    <span class="px-3 py-1.5 bg-blue-50 border border-blue-300 text-blue-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.54（11200件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hEdmont.hotelImageUrl}" alt="ホテルメトロポリタン エドモント 外観・ダイニング" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <div class="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 space-y-1">
        <p><strong>交通アクセス:</strong> JR「飯田橋駅」東口・JR「水道橋駅」西口より徒歩5分、地下鉄飯田橋駅より徒歩5分</p>
        <p><strong>チェックイン/アウト:</strong> 15:00 / 11:00</p>
        <p><strong>館内設備:</strong> ダイニング・カフェ「ベルテンポ」、日本料理「平川」、鉄板焼「山彦」、パティスリー「エドモント」</p>
      </div>
    </div>
    <div class="md:col-span-7 space-y-3">
      <div class="text-xs md:text-sm text-stone-700 leading-relaxed space-y-2">
        <p>
          「食のエドモント」として半世紀近く愛され続ける、JR東日本グループの本格シティホテル。飯田橋駅と水道橋駅の中間に位置し、東京ドームシティへも歩いてわずか5分ほどで到着できる好立地です。
        </p>
        <p>
          ホテル最大の自慢は、名シェフたちが腕を振るう圧倒的な食のクオリティ。ブッフェレストラン「ベルテンポ」では、オープンキッチンで焼き上げるローストビーフや握り寿司、窯焼きピッツァ、ホテル特製スイーツが並び、クリスマスや年末のディナーに最高の幸福感を提供してくれます。落ち着いたクラシカルな客室と細やかなホスピタリティで、ファミリーや三世代旅行にも絶大な信頼を集めています。
        </p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥7,600〜（2名1室利用時）</span>
        <a href="${hEdmont.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: ホテル椿山荘東京 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-100 text-stone-900 font-black text-xs rounded-full">都心に広がる奇跡の森！「東京雲海」と歴史ある三重塔ライトアップを望む五つ星名門ホテル</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. ホテル椿山荘東京（東京都文京区関口）</h3>
    </div>
    <span class="px-3 py-1.5 bg-blue-50 border border-blue-300 text-blue-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.77（5680件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hChinzanso.hotelImageUrl}" alt="ホテル椿山荘東京 庭園・客室" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <div class="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 space-y-1">
        <p><strong>交通アクセス:</strong> 東京メトロ有楽町線「江戸川橋駅」徒歩10分、JR「目白駅」よりバス約10分、東京ドームからタクシー約10分</p>
        <p><strong>チェックイン/アウト:</strong> 15:00 / 12:00（贅沢な12時チェックアウト）</p>
        <p><strong>館内設備:</strong> 国の登録有形文化財「三重塔」、名物「東京雲海」演出、天然温泉スパ「悠 YU, THE SPA」、料亭「錦水」</p>
      </div>
    </div>
    <div class="md:col-span-7 space-y-3">
      <div class="text-xs md:text-sm text-stone-700 leading-relaxed space-y-2">
        <p>
          文京区の閑静な高台に広がる広大な日本庭園を有する、日本を代表する最高峰ラグジュアリーホテル。東京ドームシティからはタクシーでわずか10分ほどの距離にあり、都会の喧騒から一転して幽玄な別世界へと誘われます。
        </p>
        <p>
          庭園では名物の「東京雲海」が冬の澄んだ夜空の下でライトアップされ、霧に包まれる幻想的な三重塔の姿は言葉を失うほどの美しさ。館内スパ「悠 YU, THE SPA」には伊東から直送される天然温泉の内湯や開閉式ガラス屋根の温水プールを備えており、極上のヒーリングを堪能できます。特別な記念日やクリスマスに、最高峰の客室と五つ星のホスピタリティで一生の想い出を作りたい方に強くおすすめします。
        </p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥21,379〜（2名1室利用時）</span>
        <a href="${hChinzanso.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: 三井ガーデンホテル大手町 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-blue-100 text-blue-900 font-black text-xs rounded-full">地下鉄大手町駅徒歩3分！丸の内・皇居至近の洗練デザイン＆北欧風ベーカリー朝食</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. 三井ガーデンホテル大手町（東京都千代田区内神田）</h3>
    </div>
    <span class="px-3 py-1.5 bg-blue-50 border border-blue-300 text-blue-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.67（950件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hOtemachi.hotelImageUrl}" alt="三井ガーデンホテル大手町 外観・ラウンジ" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <div class="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 space-y-1">
        <p><strong>交通アクセス:</strong> 地下鉄「大手町駅」A2出口より徒歩3分、JR「神田駅」徒歩5分、丸ノ内線で後楽園駅へ直通6分</p>
        <p><strong>チェックイン/アウト:</strong> 15:00 / 11:00</p>
        <p><strong>館内設備:</strong> ベーカリーカフェ＆ダイニング、宿泊者専用ラウンジ、ウッドデッキテラス</p>
      </div>
    </div>
    <div class="md:col-span-7 space-y-3">
      <div class="text-xs md:text-sm text-stone-700 leading-relaxed space-y-2">
        <p>
          日本のビジネス中枢・大手町に位置しながら、「Urban Oasis」をテーマに緑と木目を贅沢にあしらったスタイリッシュホテル。東京ドームシティのある後楽園駅までは丸ノ内線でわずか3駅・乗車6分という抜群のアクセス性を誇ります。
        </p>
        <p>
          東京ドームシティのイルミネーションを楽しんだ後、大手町・丸の内のシャンパンゴールドに輝く仲通りイルミネーションへとハシゴできるのが最大の魅力。客室はシンプルながら機能美に溢れ、サータ社製ベッドで心地よい眠りにつくことができます。翌朝は店内で焼き上げる香ばしいクロワッサンやサンドイッチ、淹れたてスペシャルティコーヒーの朝食を味わえます。
        </p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥16,380〜（2名1室利用時）</span>
        <a href="${hOtemachi.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="sightseeing" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（現地観光案内アーカイブ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6 leading-relaxed">
  東京ドームシティのイルミネーションとあわせて訪れたい、文京・後楽園エリアの名所をご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-blue-800 font-bold text-sm">📍 東京ドームシティ（Tokyo Dome City）</span>
    </div>
    <img src="${wDomeCity.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/4805/4805.jpg'}" alt="東京ドームシティ" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wDomeCity.extract || '東京ドームシティ（とうきょうドームシティ）は、東京都文京区後楽にある東京ドームを中心とした都市型複合エンターテインメントエリア。遊園地アトラクション、商業施設ラクーア、東京ドームホテル、後楽園ホールなどが集まり、冬季は大規模なイルミネーションに包まれます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-blue-800 font-bold text-sm">📍 ラクーア（LaQua）</span>
    </div>
    <img src="${wLaqua.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/4805/4805.jpg'}" alt="ラクーア" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wLaqua.extract || 'ラクーア（LaQua）は、東京ドームシティ内にあるスパ施設を中心とした商業施設。地下1,700mから湧出するナトリウム-塩化物強塩温泉「Spa LaQua（スパ ラクーア）」をはじめ、ショッピングモール、レストラン、水上アトラクションなどを備えます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-blue-800 font-bold text-sm">📍 小石川後楽園（Koishikawa Korakuen）</span>
    </div>
    <img src="${wKorakuen.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/391/391.jpg'}" alt="小石川後楽園" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wKorakuen.extract || '小石川後楽園（こいしかわこうらくえん）は、東京都文京区後楽にある都立庭園。江戸時代初期に水戸徳川家の江戸上屋敷内に造られた池泉回遊式庭園で、国の特別史跡・特別名勝に指定されています。冬には美しい松の雪吊りや早咲きの梅が見られます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-blue-800 font-bold text-sm">📍 文京シビックセンター展望ラウンジ（Bunkyo Civic Center）</span>
    </div>
    <img src="${wCivic.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/78211/78211.jpg'}" alt="文京シビックセンター" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wCivic.extract || '文京区役所が入る文京シビックセンターの25階には無料の展望ラウンジが整備されています。地上約105mから東側に東京スカイツリー、西側に新宿副都心と富士山のシルエットが重なる夕景を望める絶景スポットとして有名です。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-8">
  🗺️ 煌めくイルミと地下天然温泉でととのう 1泊2日東京ドームシティ極上リトリート
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-blue-700 text-white rounded text-xs">1日目</span>
      後楽園庭園散策からイルミ点灯、スパ ラクーア極上温泉＆高層夜景ホテル
    </h3>
    <p class="leading-relaxed">
      13:30 水道橋駅または後楽園駅に到着 ➔ 水戸黄門ゆかりの「小石川後楽園」で冬の雪吊りと日本庭園を散策 ➔ 文京シビックセンター25階展望ラウンジから富士山と夕暮れを眺望 ➔ 15:30 東京ドームホテルまたは庭のホテル 東京にチェックイン ➔ 17:00 東京ドームシティのイルミネーションが一斉点灯！クリスタルアベニューの高さ15mツリーや光の回廊を散策 ➔ 大観覧車「ビッグ・オー」に乗車し夜空から光の街を独占 ➔ 18:30 「Spa LaQua」へ入場し、地下1,700mの琥珀色天然温泉と露天風呂で温まる ➔ ロウリュサウナと外気浴で深く「ととのう」 ➔ 21:00 ホテル内レストランまたはラクーアの美食ダイニングでディナー ➔ 部屋の窓から見下ろすイルミネーション夜景とともに至福の就寝。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-blue-700 text-white rounded text-xs">2日目</span>
      朝陽あふれる贅沢ビュッフェから神保町古書店街散策
    </h3>
    <p class="leading-relaxed">
      08:30 ホテルで焼き立てオムレツや和洋の充実モーニングビュッフェを堪能 ➔ 10:30 チェックアウト後、神田明神へ冬の開運参拝 ➔ 世界一の古書街・神保町をぶらりと散策し、レトロ喫茶店で名物プリンや深煎り珈琲を味わう ➔ 13:30 充実した心と体で満たされながら帰路へ。
    </p>
  </div>
</div>

<h2 id="comparison-table" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-8">
  📊 水道橋・後楽園・飯田橋・文京 厳選5ホテルの特徴・立地・宿泊目安比較一覧
</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
      <tr>
        <th class="p-3">ホテル名</th>
        <th class="p-3">最寄り・立地</th>
        <th class="p-3">楽天評価</th>
        <th class="p-3">目安料金</th>
        <th class="p-3">客室・冬夜景の魅力</th>
        <th class="p-3">おすすめポイント・設備</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-100 text-stone-700">
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">東京ドームホテル</td>
        <td class="p-3">水道橋駅徒歩2分 / ドームシティ直結</td>
        <td class="p-3 text-blue-700 font-bold">4.54</td>
        <td class="p-3">¥10,185〜</td>
        <td class="p-3">パークサイド高層階からのドームイルミ鳥瞰夜景</td>
        <td class="p-3 font-semibold text-rose-700">会場直結・スパ徒歩数分・43階スカイラウンジ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">庭のホテル 東京</td>
        <td class="p-3">水道橋駅徒歩3分</td>
        <td class="p-3 text-blue-700 font-bold">4.55</td>
        <td class="p-3">¥18,180〜</td>
        <td class="p-3">中庭の小川と和モダン障子から漏れる柔らかな光</td>
        <td class="p-3">ミシュラン掲載・大人の隠れ家・絶品朝食</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ホテルメトロポリタン エドモント</td>
        <td class="p-3">飯田橋駅・水道橋駅徒歩5分</td>
        <td class="p-3 text-blue-700 font-bold">4.54</td>
        <td class="p-3">¥7,600〜</td>
        <td class="p-3">落ち着いたクラシック客室・高層シティビュー</td>
        <td class="p-3">「食のエドモント」豪華ビュッフェ・安心のJR系列</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ホテル椿山荘東京</td>
        <td class="p-3">江戸川橋駅徒歩10分 / ドームから車10分</td>
        <td class="p-3 text-blue-700 font-bold">4.77</td>
        <td class="p-3">¥21,379〜</td>
        <td class="p-3">広大な名園とライトアップされた三重塔・東京雲海</td>
        <td class="p-3">五つ星ラグジュアリー・伊東直送天然温泉スパ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">三井ガーデンホテル大手町</td>
        <td class="p-3">大手町駅徒歩3分 / 丸ノ内線で直通6分</td>
        <td class="p-3 text-blue-700 font-bold">4.67</td>
        <td class="p-3">¥16,380〜</td>
        <td class="p-3">緑と木目調の洗練アーバンデザイン</td>
        <td class="p-3">丸の内イルミへ徒歩圏・北欧風焼きたてパン朝食</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-8">
  ❓ 東京ドームシティ イルミネーション＆スパ ラクーア よくある質問（FAQ）
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-4 rounded-xl bg-stone-50 border border-stone-200">
    <h3 class="font-bold text-stone-900 mb-1">Q1. イルミネーションの点灯時間と入場料はいくらですか？</h3>
    <p>A. 点灯時間は毎日17:00から24:00まで点灯されます。東京ドームシティのイルミネーションエリア（クリスタルアベニューやラクーアガーデン等）は入場無料・観覧無料で自由に散策できます（アトラクション乗車やスパ入館は有料です）。</p>
  </div>
  <div class="p-4 rounded-xl bg-stone-50 border border-stone-200">
    <h3 class="font-bold text-stone-900 mb-1">Q2. スパ ラクーアの利用料金と持ち物は？手ぶらで行けますか？</h3>
    <p>A. 入館料（大人約3,230円、休日割増あり）にはタオルセットや館内着が含まれているため、完全手ぶらで利用できます。シャンプー、コンディショナー、ボディソープ、各種アメニティも充実しています。</p>
  </div>
  <div class="p-4 rounded-xl bg-stone-50 border border-stone-200">
    <h3 class="font-bold text-stone-900 mb-1">Q3. スパ ラクーアは何歳から利用できますか？</h3>
    <p>A. 安全管理上、0〜5歳のお子様は入館できません。6〜11歳のお子様は同性の保護者同伴、12〜17歳の方は保護者同伴または18:00までの利用（利用規約あり）となっています。落ち着いた大人のリラクゼーション空間が保たれています。</p>
  </div>
  <div class="p-4 rounded-xl bg-stone-50 border border-stone-200">
    <h3 class="font-bold text-stone-900 mb-1">Q4. 最もおすすめのホテルとその理由は？</h3>
    <p>A. 敷地内にある「東京ドームホテル」が最もおすすめです。イルミネーションやスパを楽しんだ後、外気に触れることなく数分で部屋へ戻ることができ、パークサイド客室からはイルミネーションのパノラマ夜景を独占できます。</p>
  </div>
</div>

<div class="my-8 p-6 rounded-2xl bg-blue-50 border border-blue-200 text-stone-800 space-y-3">
  <h3 class="font-bold text-blue-900 text-base">まとめ：光の遊園地と都心の名湯で、冬の最高のご褒美ステイを</h3>
  <p class="text-xs md:text-sm leading-relaxed">
    ダイナミックな光の演出が心を躍らせる東京ドームシティのウィンターイルミネーションと、都会の真ん中で琥珀色の名湯に浸かるスパ ラクーア。この至高の組み合わせを心ゆくまで堪能できるホテルステイは、寒い冬に最高の温もりと癒やしを届けてくれます。人気の日程はすぐに満室となりますので、ぜひお早めにご予約ください。
  </p>
  <div class="pt-2 text-right">
    <a href="${hDome.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs rounded-xl shadow transition">
      楽天トラベルで水道橋・後楽園・飯田橋の人気宿をチェックする →
    </a>
  </div>
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
    "name": "Croud Travel 編集部"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Croud Travel",
    "logo": {
      "@type": "ImageObject",
      "url": "https://croud-travel.pages.dev/og-image.jpg"
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
    slug,
    title,
    description,
    date,
    prefecture,
    area,
    category: "特集",
    tags: [
      "東京ドームシティ",
      "ウィンターイルミネーション",
      "スパ ラクーア",
      "東京ドームホテル",
      "庭のホテル 東京",
      "ホテルメトロポリタン エドモント",
      "ホテル椿山荘東京",
      "三井ガーデンホテル大手町",
      "都心天然温泉",
      "東京サウナホテル"
    ],
    hotelCount: 5,
    minPrice: Math.min(...hotels.map(h => h.hotelMinCharge || 99999)),
    review: reviewHtml,
    hotels: hotels
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ${JSON.stringify(postData.tags)}
---

# ${title}

2026年11月〜2027年2月開催の東京ドームシティ ウィンターイルミネーションと、地下1,700mから湧く名湯「Spa LaQua（スパ ラクーア）」を徹底解説！

クリスタルアベニューに輝く高さ15mの巨大メインツリー、ラクーアエリアの光のトンネル、観覧車ビッグ・オーの冬限定ライティングを網羅。

さらに地下天然温泉の露天風呂や本場フィンランドサウナ、東京ドームホテルや庭のホテル 東京など、文京・水道橋・飯田橋エリアで美食とパノラマ夜景を堪能できる厳選ホテル5選をご紹介します。

---

## 💡 現地調査に基づくプロの指南！東京ドームシティ＆スパ ラクーア攻略マニュアル

- **高さ15m巨大メインツリー＆光のトンネル:** 15分ごとの光と音の連動ショー。ラクーアガーデンからアトラクションズへ続く光のトンネルも必見。
- **センターレス観覧車「ビッグ・オー」:** ゴンドラ内からドームシティの全イルミと都心の摩天楼夜景を360度パノラマで一望。
- **「Spa LaQua」地下1,700m天然温泉:** 琥珀色の強塩温泉露天風呂から観覧車の光を眺め、本格フィンランドサウナで極上のととのい体験。
- **混雑を避ける最強拠点:** 敷地内の「東京ドームホテル」に泊まれば、寒風ゼロでスパやイルミから数分で部屋へ帰還可能。

---

## 🏨 旅の目的に応じて選ぶ！水道橋・後楽園・飯田橋・文京の厳選名ホテル5選

### 1. 東京ドームホテル（東京都文京区後楽）
- **特徴:** 東京ドームシティ直結！地上43階から見下ろすイルミネーション＆パノラマ夜景の特等席。スカイラウンジ＆豪華ビュッフェ。
- **宿泊目安:** 1名 ¥${hDome.hotelMinCharge?.toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hDome.reviewAverage}（13945件）
- 👉 [東京ドームホテルの空室・宿泊プランを見る](${hDome.affiliateUrl})

### 2. 庭のホテル 東京（東京都千代田区神田三崎町）
- **特徴:** 水道橋駅徒歩3分！美しい中庭と静寂に包まれる和モダン隠れ家ホテル（ミシュラン掲載）。上質な日本料理と朝食。
- **宿泊目安:** 1名 ¥${hNiwa.hotelMinCharge?.toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hNiwa.reviewAverage}（3150件）
- 👉 [庭のホテル 東京の空室・宿泊プランを見る](${hNiwa.affiliateUrl})

### 3. ホテルメトロポリタン エドモント（東京都千代田区飯田橋）
- **特徴:** 飯田橋・水道橋徒歩5分！「食のエドモント」と称される名門ホテルの本格フレンチ＆ビュッフェ「ベルテンポ」。
- **宿泊目安:** 1名 ¥${hEdmont.hotelMinCharge?.toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hEdmont.reviewAverage}（11200件）
- 👉 [ホテルメトロポリタン エドモントの空室・宿泊プランを見る](${hEdmont.affiliateUrl})

### 4. ホテル椿山荘東京（東京都文京区関口）
- **特徴:** 都心に広がる奇跡の森！名物「東京雲海」と歴史ある三重塔ライトアップを望む五つ星名門ホテル。伊東直送温泉スパ。
- **宿泊目安:** 1名 ¥${hChinzanso.hotelMinCharge?.toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hChinzanso.reviewAverage}（5680件）
- 👉 [ホテル椿山荘東京の空室・宿泊プランを見る](${hChinzanso.affiliateUrl})

### 5. 三井ガーデンホテル大手町（東京都千代田区内神田）
- **特徴:** 大手町駅徒歩3分・丸ノ内線で後楽園へ6分直通！洗練されたアーバンオアシス空間＆焼きたてベーカリー朝食。
- **宿泊目安:** 1名 ¥${hOtemachi.hotelMinCharge?.toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hOtemachi.reviewAverage}（950件）
- 👉 [三井ガーデンホテル大手町の空室・宿泊プランを見る](${hOtemachi.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **東京ドームシティ:** ${wDomeCity.extract || '東京ドームを中心とした都市型複合エンタメエリア。アトラクションやスパ、ホテルが集結。'}
- **ラクーア:** ${wLaqua.extract || '地下1,700mから湧出するナトリウム-塩化物強塩温泉「Spa LaQua」をはじめ、ショッピングや水上アトラクションを備えます。'}
- **小石川後楽園:** ${wKorakuen.extract || '水戸徳川家ゆかりの池泉回遊式庭園。国の特別史跡・特別名勝。冬には松の雪吊りや早咲き梅が見られます。'}
- **文京シビックセンター:** ${wCivic.extract || '25階無料展望ラウンジからスカイツリーや新宿副都心・富士山を望む絶景スポット。'}

---

## 🗺️ イルミと天然温泉を満喫する 1泊2日モデルコース

- **1日目:** 水道橋駅到着 ➔ 小石川後楽園で雪吊り庭園散策 ➔ 文京シビックセンター展望台 ➔ ホテルへチェックイン ➔ 17:00 ドームシティイルミ点灯＆観覧車ビッグ・オー ➔ 「Spa LaQua」で天然温泉＆サウナ ➔ ホテルディナー
- **2日目:** 朝食ビュッフェ ➔ 神田明神参拝 ➔ 神保町古書店街＆名物レトロ喫茶 ➔ 帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. イルミネーションの点灯時間と入場料は？**  
A. 17:00〜24:00まで点灯。イルミネーションエリアは観覧無料です。

**Q2. スパ ラクーアは手ぶらで行ける？**  
A. 入館料にタオルセットや館内着が含まれており手ぶらで利用できます。

**Q3. 一番おすすめの宿泊ホテルは？**  
A. 会場直結で部屋からイルミネーションを見下ろせる「東京ドームホテル」が最強です。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【東京ドームシティ】ウィンターイルミネーション2026-2027＆都心天然温泉「スパ ラクーア」完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/posts/${slug})
`;

  return { postData, noteMarkdown };
};
