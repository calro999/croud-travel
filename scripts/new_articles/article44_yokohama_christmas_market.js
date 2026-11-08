// scripts/new_articles/article44_yokohama_christmas_market.js
module.exports = function buildArticle44(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-kanagawa-yokohama-redbrick-christmas-market-minatomirai-hotels-guide";
  const title = "【横浜】クリスマスマーケット in 横浜赤レンガ倉庫2026＆ヨコハマミライト完全攻略！本場ドイツのヒュッテ・巨大ツリーとみなとみらい100万ドルの冬夜景、バルコニー付き海見え客室＆豪華ディナーを満喫する厳選名ホテル5選";
  const description = "2026年11月下旬〜12月25日開催の「クリスマスマーケット in 横浜赤レンガ倉庫」と「ヨコハマミライト」を徹底解説。本場ドイツ・ニュルンベルクの伝統を受け継ぐヒュッテ、高さ約10mの本モミの木ツリー、約1.5km続くイルミネーション散策路を網羅。横浜ベイホテル東急やインターコンチネンタル横浜Pier 8など、バルコニー付き客室からみなとみらいの冬夜景を独り占めできる楽天トラベル高評価宿5選をご紹介。";
  const date = "2026-11-08";
  const prefecture = "神奈川県";
  const area = "横浜・みなとみらい・新港・山下公園";

  // ホテル抽出
  const hBayTokyu = hotels.find(h => h.hotelNo === 2003) || hotels[0];
  const hPier8 = hotels.find(h => h.hotelNo === 177505) || hotels[1];
  const hGrandInter = hotels.find(h => h.hotelNo === 5731) || hotels[2];
  const hKahala = hotels.find(h => h.hotelNo === 187395) || hotels[3];
  const hNewGrand = hotels.find(h => h.hotelNo === 2013) || hotels[4];

  // Wikiスポット
  const wRedBrick = wiki["横浜赤レンガ倉庫"] || {};
  const wMinatomirai = wiki["横浜みなとみらい21"] || {};
  const wYamashita = wiki["山下公園"] || {};
  const wMarineTower = wiki["横浜マリンタワー"] || {};

  const reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-emerald-950 via-teal-950 to-stone-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-emerald-800/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-emerald-300 font-extrabold text-xs tracking-wider">
      <span>🎄</span><span>2026冬 横浜赤レンガ倉庫クリスマスマーケット＆ヨコハマミライト 現地攻略ガイド</span>
    </div>
    <p class="text-xs text-emerald-100 leading-relaxed">
      11月下旬〜12月25日開催！本場ドイツの木のヒュッテと高さ10mの天然モミの木ツリー、みなとみらいの冬夜景。バルコニー付き海見え客室＆記念日ディナーで過ごす贅沢ステイ。
    </p>
  </div>
  <a href="${hBayTokyu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-stone-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    👑 横浜ベイホテル東急の空室状況を見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 mb-4">
  赤レンガの港町が本場ドイツのクリスマス色に染まる！「横浜赤レンガ倉庫クリスマスマーケット」と100万ドルの冬夜景
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  12月の横浜・みなとみらいは、海風に乗って鐘の音が響き、街全体が温かな光と祝祭の興奮に包まれます。日本国内屈指の規模と来場者数を誇る冬の風物詩が、歴史的建造物・横浜赤レンガ倉庫のイベント広場を舞台に開催される「クリスマスマーケット in 横浜赤レンガ倉庫」です。世界三大クリスマスマーケットの一つとして名高いドイツ・ニュルンベルクの伝統様式を取り入れ、会場には本場から直輸入された木造のヒュッテ（木の屋台）がずらりと連なります。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  海を臨む広場の中央には、カナダや東北から運ばれた高さ約10メートルの本物の生木モミの木を使用した巨大クリスマスツリーが鎮座。数万球のシャンパンゴールドのイルミネーションと頭上を覆う光のルーフが点灯する瞬間、まるでヨーロッパの古都へ迷い込んだかのような幻想的な世界が広がります。会場内にはシナモンやクローブが香る温かいグリューワイン（ホットワイン）、熱々のドイツソーセージ、シュトーレン、そしてクリスマスマーケット限定のオリジナルマグカップが並び、手袋越しに温もりを感じながら散策を楽しめます。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  さらに赤レンガ倉庫から横浜駅東口方面へ向かうと、横浜最大級のイルミネーション「ヨコハマミライト」がグランモール公園や帆船日本丸周辺を約1.5kmにわたってブルーとゴールドの光で彩ります。大観覧車「コスモクロック21」の冬限定イルミネーションや、海越しに望む横浜ベイブリッジの夜景は、まさに冬のデートや記念日旅行の最高峰。本記事では、2026年クリスマスマーケットの入場チケット予約のコツから混雑回避法、そして部屋のバルコニーから夜景を独り占めできる楽天トラベル高評価ホテル5選を徹底解説します。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-6">
  💡 現地調査に基づくプロの指南！横浜赤レンガ倉庫クリスマスマーケット攻略＆快適滞在マニュアル
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">開催概要・入場チケット・見どころ</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>入場チケットの事前ウェブ購入（Peatix等）:</strong> 週末や12月中旬以降のクリスマスマーケットは日時指定の事前予約チケット制が導入されます。当日券の待機列は1時間以上になることもあるため、公式ウェブサイトでの事前電子チケット確保が必須です。</p>
      <p>② <strong>高さ10mの天然モミの木ツリー＆イルミネーションルーフ:</strong> 毎日16:00に点灯。会場頭上に張り巡らされた光の屋根（イルミネーションルーフ）とツリーが重なり合うアングルは、新港ふ頭側の海側から赤レンガ倉庫を背景に撮影するのがベストです。</p>
      <p>③ <strong>数量限定オリジナルマグカップ＆本格ドイツグルメ:</strong> 毎年デザインが変わる限定マグカップは完売必至の人気アイテム。ホットワインやホットチョコレートを注いで持ち帰ることができます。ニュルンベルク名物の焼きソーセージやチーズたっぷりのグラタンも絶品です。</p>
      <p>④ <strong>ヨコハマミライトと夜の散策動線:</strong> 赤レンガ倉庫から新港中央広場（夜景プロジェクション）、汽車道、グランモール公園を経て横浜美術館前へと歩くルートは、途切れることなく光に包まれる王道の夜景散歩コースです。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-blue-100 text-blue-800 font-extrabold text-xs rounded-lg">寒さ・混雑対策</span>
      <h3 class="text-base font-bold text-stone-900">海風対策・平日夕方の狙い目・みなとみらい線活用</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【横浜港からの冷たい強風に耐える防寒装備】</strong> 赤レンガ倉庫は海に突き出た突堤に位置するため、日没後は横浜港からの強い海風が吹き込みます。体感温度は氷点下近くまで下がるため、風を遮断する防風ロングダウンコート、マフラー、手袋、カイロを必ず携帯してください。</p>
      <p><strong>【混雑ピーク回避のゴールデンタイム】</strong> 最も混雑するのは金曜・土曜・日曜の17:30〜19:30。平日の16:00点灯直後、または夜20:00以降のレイトアワーを狙うと、ヒュッテでの買い物や写真撮影をゆったりと楽しめます。</p>
      <p><strong>【みなとみらい線・シーバスの賢い使い分け】</strong> 桜木町駅からの汽車道ルートは徒歩約15分。寒さを避けたい場合は「馬車道駅」または「日本大通り駅」から徒歩約6分。また、横浜駅東口（ベイクォーター）から観光船「シーバス」でピア赤レンガまで海上クルーズでアクセスするのもロマンチックでおすすめです。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  🏨 旅の目的に応じて選ぶ！横浜・みなとみらいの厳選名ホテル5選
</h2>

<!-- 宿1: 横浜ベイホテル東急 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">みなとみらい中心・大観覧車を正面に望むバルコニー付き客室の絶対的王道名門</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 横浜ベイホテル東急（神奈川県横浜市西区みなとみらい）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.64（11718件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hBayTokyu.hotelImageUrl}" alt="横浜ベイホテル東急 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hBayTokyu.roomImageUrl || hBayTokyu.hotelImageUrl}" alt="横浜ベイホテル東急 バルコニー夜景" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> みなとみらい駅直結、クイーンズスクエア横浜内に位置。「アーバンオアシス」をテーマにした洗練されたリゾートホテルで、赤レンガ倉庫へも汽車道を通って徒歩約15分の好立地です。
      </p>
      <p>
        <strong>【みなとみらい唯一のバルコニー付き客室】</strong> 最大の魅力は、コスモクロック（大観覧車）を正面に望むバルコニー付きパークビュー客室。冬の澄んだ夜空に七色に輝く大観覧車のイルミネーションを、遮るもののないプライベートバルコニーから独り占めできる感動体験は格別です。
      </p>
      <p>
        <strong>【名門フレンチ「クイーン・アリス」と朝食ブッフェ】</strong> 料理の鉄人・石鍋裕プロデュースのおとぎの国のようなフレンチ「クイーン・アリス」や、中国料理「スーツァン・レストラン陳」、吹き抜けの「カフェ トスカ」でのパルミジャーノ生パスタ朝食など、美食の殿堂としても圧倒的な評価を誇ります。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥9,146〜（2名1室利用時）</span>
        <a href="${hBayTokyu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: インターコンチネンタル横浜Pier 8 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-900 text-amber-200 font-black text-xs rounded-full">新港ふ頭直結・海に浮かぶような低層ラグジュアリーホテル＆赤レンガ倉庫徒歩5分</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. インターコンチネンタル横浜Ｐｉｅｒ　８　ｂｙ　ＩＨＧ（神奈川県横浜市中区新港）</h3>
    </div>
    <span class="px-3 py-1.5 bg-stone-100 border border-stone-300 text-stone-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.68（504件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hPier8.hotelImageUrl}" alt="インターコンチネンタル横浜Pier 8 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hPier8.roomImageUrl || hPier8.hotelImageUrl}" alt="インターコンチネンタル横浜Pier 8 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 新港ふ頭の突堤、横浜ハンマーヘッドに直結する希少な低層海上リゾート。赤レンガ倉庫のクリスマスマーケット会場まで海沿い遊歩道を歩いてわずか5分という、イベント鑑賞においてこれ以上ない特等席に位置します。
      </p>
      <p>
        <strong>【三方を海に囲まれた贅沢なハーバービュー】</strong> 船旅をモチーフにした客室は大きな開口部を持ち、目線の高さに横浜港の波打ち際が広がります。宿泊者専用の屋上デッキ「ルーフトップ」からは、澄み渡る冬の夜空の下に360度のみなとみらいパノラマ夜景が展開します。
      </p>
      <p>
        <strong>【レストラン＆バー「Larboard」での洗練ディナー】</strong> 西洋の食文化と日本の厳選食材を融合させたコンテンポラリー料理を堪能。大きな窓から波のきらめきを眺めながらいただくクリスマスディナーや、クラブラウンジでの極上のカクテルタイムは忘れられない思い出になります。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥18,675〜（2名1室利用時）</span>
        <a href="${hPier8.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: ヨコハマ グランド インターコンチネンタル ホテル -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-cyan-100 text-cyan-900 font-black text-xs rounded-full">風をはらむヨットの帆・みなとみらいの象徴として輝く国際的シティリゾート</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. ヨコハマ　グランド　インターコンチネンタル　ホテル　ｂｙ　ＩＨＧ（神奈川県横浜市西区みなとみらい）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.47（15217件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hGrandInter.hotelImageUrl}" alt="ヨコハマ グランド インターコンチネンタル ホテル 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hGrandInter.roomImageUrl || hGrandInter.hotelImageUrl}" alt="ヨコハマ グランド インターコンチネンタル ホテル 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 海に浮かぶヨットの帆を模した外観で知られる、横浜みなとみらいの不動のシンボル。パシフィコ横浜に隣接し、みなとみらい駅徒歩約5分。赤レンガ倉庫へも海沿い「女神橋」を渡れば徒歩約10分で到着します。
      </p>
      <p>
        <strong>【ベイブリッジと大観覧車を選べる2つの絶景サイド】</strong> 客室は、横浜港とベイブリッジを行き交う船を眺める「ベイビュー」と、大観覧車や高層ビル群のイルミネーションに包まれる「シティビュー」の2大絶景。どちらを選んでも息をのむ美しさを堪能できます。
      </p>
      <p>
        <strong>【海を一望するラウンジ＆多彩なインターナショナル料理】</strong> 2階ラウンジ「マリンブルー」の季節のアフタヌーンティーや、中国料理「カリュウ」、ブッフェダイニング「オーシャンテラス」など、海を望むロケーションで味わう世界各国の美食が特別な記念日を華やかに演出します。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥10,417〜（2名1室利用時）</span>
        <a href="${hGrandInter.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: ザ・カハラ・ホテル＆リゾート 横浜 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">ハワイの名門が横浜へ・クリスタルモダン建築と温かなアロハスピリットの最高峰</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. ザ・カハラ・ホテル＆リゾート　横浜（神奈川県横浜市西区みなとみらい）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.72（459件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKahala.hotelImageUrl}" alt="ザ・カハラ・ホテル＆リゾート 横浜 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKahala.roomImageUrl || hKahala.hotelImageUrl}" alt="ザ・カハラ・ホテル＆リゾート 横浜 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> ハワイ・オアフ島で半世紀以上にわたり世界の要人に愛されてきた「ザ・カハラ」の世界初進出ホテル。水面に映る波の揺らめきをデザインしたクリスタルガラスの外観が、冬の横浜港に優美な存在感を放ちます。
      </p>
      <p>
        <strong>【全室50平米前後のクリスタルモダン客室＆インフィニティプール】</strong> 客室はカハラハワイの優雅さと横浜の先進性が融合した贅沢な空間。インドア温水インフィニティプールや温浴スパ施設「THE KAHALA SPA」を備え、冬でもリゾート感あふれる極上のリラクゼーションが体験できます。
      </p>
      <p>
        <strong>【独創的なイタリア料理「RISTORANTE OZIO」＆日本料理「濱」】</strong> 貝殻を模した個室で味わうモダンイタリアンや、水庭に浮かぶような離れ風個室で提供される本格和食会席。カハラ名物のマカダミアナッツチョコレートをお土産にするのも大人の定番です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥18,215〜（2名1室利用時）</span>
        <a href="${hKahala.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: ホテルニューグランド -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-red-100 text-red-900 font-black text-xs rounded-full">昭和2年創業・山下公園前のクラシックホテル・ドリアやナポリタン発祥の歴史名門</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. ホテルニューグランド（神奈川県横浜市中区山下町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-red-50 border border-red-300 text-red-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.67（3563件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hNewGrand.hotelImageUrl}" alt="ホテルニューグランド 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hNewGrand.roomImageUrl || hNewGrand.hotelImageUrl}" alt="ホテルニューグランド 本館ロビー" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 昭和2年（1927年）開業、マッカーサー元帥やチャールズ・チャップリン、大佛次郎ら多くの歴史的名人が愛した日本を代表するクラシックホテル。山下公園の銀杏並木の正面に位置し、赤レンガ倉庫へも海沿い遊歩道を歩いて散策できます。
      </p>
      <p>
        <strong>【重厚な本館の大階段とタワー館のパノラマハーバービュー】</strong> 横浜市認定歴史的建造物である本館は、マホガニーの重厚な階段やフェニックスルームなど歴史遺産そのもの。隣接するタワー館客室からは、山下公園、氷川丸、横浜港、ベイブリッジが一望のもとに広がります。
      </p>
      <p>
        <strong>【シーフードドリア・スパゲッティナポリタン発祥の洋食】</strong> 本館「ル・ノルマンディ」での豪華フランス料理はもちろん、コーヒーハウス「ザ・カフェ」で味わうホテル発祥のシーフードドリア、ナポリタン、プリン・ア・ラ・モードは旅情を最高潮に高めてくれます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥10,900〜（2名1室利用時）</span>
        <a href="${hNewGrand.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-red-700 hover:bg-red-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="sightseeing" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（現地観光案内アーカイブ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6 leading-relaxed">
  横浜赤レンガ倉庫クリスマスマーケット鑑賞やホテル宿泊と合わせて巡りたい、横浜ベイエリアを代表する名所を現地観光案内アーカイブとともにご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-emerald-700 font-bold text-sm">📍 横浜赤レンガ倉庫（Yokohama Red Brick Warehouse）</span>
    </div>
    <img src="${wRedBrick.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/2003/2003.jpg'}" alt="横浜赤レンガ倉庫" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wRedBrick.extract || '横浜赤レンガ倉庫（よこはまあかレンガそうこ）は、神奈川県横浜市中区新港一丁目にある歴史的建造物。明治・大正期に国の保税倉庫として建設され、現在は文化・商業施設として親しまれています。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-emerald-700 font-bold text-sm">📍 横浜みなとみらい21（Minato Mirai 21）</span>
    </div>
    <img src="${wMinatomirai.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/5731/5731.jpg'}" alt="横浜みなとみらい21" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wMinatomirai.extract || '横浜みなとみらい21（よこはまみなとみらい21）は、神奈川県横浜市西区および中区にまたがるウォーターフロント都市。高層ビル群や観覧車、美術館が集まる観光・ビジネス拠点。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-emerald-700 font-bold text-sm">📍 山下公園（Yamashita Park）</span>
    </div>
    <img src="${wYamashita.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/2013/2013.jpg'}" alt="山下公園" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wYamashita.extract || '山下公園（やましたこうえん）は、神奈川県横浜市中区にある臨海公園。関東大震災の復興事業として開園し、氷川丸の係留や海を望む芝生広場で知られる横浜を代表する名所。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-emerald-700 font-bold text-sm">📍 横浜マリンタワー（Yokohama Marine Tower）</span>
    </div>
    <img src="${wMarineTower.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/2013/2013.jpg'}" alt="横浜マリンタワー" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wMarineTower.extract || '横浜マリンタワー（よこはまマリンタワー）は、神奈川県横浜市中区山下町にある展望塔。横浜港開港100周年記念事業として建設され、展望フロアから横浜港と街並みを一望できます。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  🗺️ ヒュッテ散策・ヨコハマミライト・夜景バルコニーを満喫する 1泊2日横浜冬の王道モデルコース
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-emerald-700 text-white rounded text-xs">1日目</span>
      山下公園・中華街散策から16時点灯の赤レンガクリスマスマーケット・観覧車夜景へ
    </h3>
    <p class="leading-relaxed">
      12:30 横浜駅または元町・中華街駅に到着 ➔ 横浜中華街の老舗店で熱々の小籠包や飲茶ランチ ➔ 山下公園を散策し、ホテルニューグランド本館の大階段で記念撮影 ➔ 15:00 ホテル（横浜ベイホテル東急やPier 8など）へチェックイン ➔ 16:00 横浜赤レンガ倉庫へ移動、カウントダウンとともに高さ10mの巨大本モミの木ツリーとイルミネーションルーフが一斉点灯 ➔ ヒュッテを巡り、スパイス香るグリューワイン（ホットワイン）と焼きソーセージ、限定マグカップを購入 ➔ 18:00 新港ふ頭から汽車道・グランモール公園を歩き「ヨコハマミライト」の光の並木道を散策 ➔ 19:30 予約しておいたホテルのレストランで至高のクリスマスフレンチディナー ➔ 21:30 客室のバルコニーに出て、目の前に迫るコスモクロック（大観覧車）の七色の夜景を眺めながら優雅な夜を過ごす。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-emerald-700 text-white rounded text-xs">2日目</span>
      ハーバービューモーニング＆シーバスで行くベイエリア水上散歩とお土産巡り
    </h3>
    <p class="leading-relaxed">
      07:30 朝の清々しい横浜港と青空を眺めながら目覚め ➔ レストラン「カフェ トスカ」でシェフが目の前で作るオムレツや焼きたてクロワッサン、フレッシュフルーツの朝食ブッフェ ➔ 10:30 チェックアウト後、ピア日本丸またはハンマーヘッドから観光船「シーバス」に乗船し、冬の澄んだ海風を感じながら横浜駅東口へ海上クルーズ ➔ 11:30 横浜駅直結の商業施設（ニュウマン横浜や高島屋）で、ありあけハーバーやレーズンサンド、横浜限定クラフトビールなどのお土産を購入 ➔ 13:30 充実した港町のクリスマス旅の余韻に浸りながら帰路へ。
    </p>
  </div>
</div>

<h2 id="comparison-table" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  📊 横浜・みなとみらい 厳選5ホテルの特徴・夜景・宿泊目安比較一覧
</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
      <tr>
        <th class="p-3">ホテル名</th>
        <th class="p-3">立地・アクセス</th>
        <th class="p-3">楽天評価</th>
        <th class="p-3">宿泊目安(1名)</th>
        <th class="p-3">客室・バルコニー・夜景の特徴</th>
        <th class="p-3">食事の魅力・ディナー</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-100 text-stone-700">
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">横浜ベイホテル東急</td>
        <td class="p-3">みなとみらい駅直結</td>
        <td class="p-3 font-bold text-emerald-700">★ ${hBayTokyu.reviewAverage}</td>
        <td class="p-3">¥${hBayTokyu.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">みなとみらい唯一のバルコニー付き・大観覧車正面</td>
        <td class="p-3">名門「クイーン・アリス」＆「カフェ トスカ」朝食</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">インターコンチネンタル横浜Pier 8</td>
        <td class="p-3">新港ふ頭・赤レンガ徒歩5分</td>
        <td class="p-3 font-bold text-stone-900">★ ${hPier8.reviewAverage}</td>
        <td class="p-3">¥${hPier8.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">三方を海に囲まれた低層リゾート・屋上ルーフトップ</td>
        <td class="p-3">波打ち際レストラン「Larboard」の極上フレンチ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ヨコハマ グランド インターコンチネンタル ホテル</td>
        <td class="p-3">パシフィコ横浜・海沿い</td>
        <td class="p-3 font-bold text-cyan-700">★ ${hGrandInter.reviewAverage}</td>
        <td class="p-3">¥${hGrandInter.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">帆船フォルムの象徴ホテル・ベイブリッジ＆シティ夜景</td>
        <td class="p-3">海を望む「カリュウ」＆「オーシャンテラス」</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ザ・カハラ・ホテル＆リゾート 横浜</td>
        <td class="p-3">みなとみらい臨海部</td>
        <td class="p-3 font-bold text-amber-700">★ ${hKahala.reviewAverage}</td>
        <td class="p-3">¥${hKahala.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">ハワイ名門のクリスタル建築・温水インフィニティプール</td>
        <td class="p-3">イタリアン「OZIO」＆水庭に浮かぶ日本料理「濱」</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ホテルニューグランド</td>
        <td class="p-3">山下公園前・元町中華街駅徒歩1分</td>
        <td class="p-3 font-bold text-red-700">★ ${hNewGrand.reviewAverage}</td>
        <td class="p-3">¥${hNewGrand.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">昭和2年創業のクラシック名門・氷川丸と港を望むタワー館</td>
        <td class="p-3">ドリア・ナポリタン発祥「ザ・カフェ」＆「ル・ノルマンディ」</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  ❓ 横浜赤レンガ倉庫クリスマスマーケット＆冬の横浜旅行 よくある質問（FAQ）
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-emerald-950">Q1. クリスマスマーケットの開催期間とツリーの点灯時間は？</h3>
    <p class="text-stone-700 leading-relaxed">
      2026年は11月下旬から12月25日(金)まで毎日開催されます。ツリーおよび会場イルミネーションの点灯時間は毎日16:00〜21:00（12月中旬以降の週末や特定日は22:00まで延長）です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-emerald-950">Q2. 入場チケットは当日でも買えますか？事前予約が必要ですか？</h3>
    <p class="text-stone-700 leading-relaxed">
      金曜日・土曜日・日曜日および12月中旬以降は事前の日時指定電子チケット（Peatix等）の購入が強く推奨されます。当日券の販売枠もありますが、長蛇の列ができるため事前予約が圧倒的にスムーズです。平日の特定時間帯には無料入場が設定される場合もあります。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-emerald-950">Q3. みなとみらいのホテルでバルコニーから夜景が見えるのはどこですか？</h3>
    <p class="text-stone-700 leading-relaxed">
      みなとみらいエリアで客室専用バルコニーを備えているのは「横浜ベイホテル東急」です。大観覧車のイルミネーションを目の前に望みながら、屋外の澄んだ空気の中でシャンパンやドリンクを楽しめる唯一無二の滞在が叶います。
    </p>
  </div>
</div>

<h2 id="internal-links" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  📌 あわせて読みたい神奈川・横浜・関東の冬旅特集
</h2>
<div class="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200 space-y-3 my-6">
  <p class="text-xs text-emerald-900 font-bold mb-2">当サイトでは、神奈川・横浜の夜景や温泉リゾートを満喫できる厳選ガイドを多数公開しています。</p>
  <ul class="text-xs text-emerald-900 space-y-2 list-disc list-inside">
    <li><a href="/prefectures/kanagawa/" class="underline font-bold hover:text-emerald-700">神奈川県のホテル・旅館・観光名所完全ガイド（横浜・箱根・鎌倉）</a></li>
    <li><a href="/posts/yokohama-minatomirai-hotels-guide" class="underline hover:text-emerald-700">横浜・みなとみらいの厳選名ホテル特集！夜景とハーバービュー</a></li>
    <li><a href="/posts/winter-family-kanagawa-yokohama-minatomirai-guide" class="underline hover:text-emerald-700">冬の横浜ファミリーホテルガイド！アンパンマンミュージアム＆赤レンガ</a></li>
    <li><a href="/posts/winter-kanagawa-enoshima-shonan-jewel-illumination-kamakura-hotels-guide" class="underline hover:text-emerald-700">湘南の宝石！江の島イルミネーションと鎌倉の厳選オーシャンビュー宿</a></li>
    <li><a href="/posts/hakone-gora-ashinoko-hotels-guide" class="underline hover:text-emerald-700">箱根・強羅・芦ノ湖の名湯旅館ガイド！客室露天風呂と富士山絶景</a></li>
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
    hero_image: hBayTokyu.hotelImageUrl,
    gallery: [
      hBayTokyu.hotelImageUrl,
      hPier8.hotelImageUrl,
      hGrandInter.hotelImageUrl,
      hKahala.hotelImageUrl,
      hNewGrand.hotelImageUrl
    ],
    hotel_name: "横浜ベイホテル東急・インターコンチネンタル横浜Pier 8・ホテルニューグランド ほか",
    affiliate_url: hBayTokyu.affiliateUrl,
    categories: [
      "冬のイベント特集",
      "クリスマスマーケット",
      "イルミネーション",
      "横浜夜景ホテル",
      "みなとみらい",
      "記念日ホテル"
    ],
    price: `¥${hBayTokyu.hotelMinCharge?.toLocaleString() || '9,146'}〜`,
    rating: hKahala.reviewAverage || 4.72,
    review_count: hGrandInter.reviewCount || 15217,
    date: date,
    is_special_feature: true,
    keywords: [
      "横浜赤レンガ倉庫 クリスマスマーケット 2026",
      "赤レンガ クリスマス チケット 予約",
      "ヨコハマミライト 2026 点灯時間",
      "横浜ベイホテル東急 バルコニー 観覧車 夜景",
      "インターコンチネンタル横浜Pier 8 宿泊記",
      "ヨコハマ グランド インターコンチネンタル ホテル 口コミ",
      "ザ・カハラ・ホテル＆リゾート 横浜 プール アフタヌーンティー",
      "ホテルニューグランド ドリア ナポリタン 本館",
      "みなとみらい クリスマス ディナー ホテル"
    ],
    review: reviewHtml,
    image: hBayTokyu.hotelImageUrl,
    other_images: [
      hBayTokyu.hotelImageUrl,
      hPier8.hotelImageUrl,
      hGrandInter.hotelImageUrl,
      hKahala.hotelImageUrl,
      hNewGrand.hotelImageUrl
    ]
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["横浜赤レンガ倉庫", "クリスマスマーケット", "ヨコハマミライト", "横浜ベイホテル東急", "みなとみらい", "クリスマス", "横浜ホテル"]
---

# ${title}

2026年11月下旬〜12月25日開催の「クリスマスマーケット in 横浜赤レンガ倉庫」と「ヨコハマミライト」を徹底解説！

本場ドイツ・ニュルンベルクの伝統を受け継ぐヒュッテ、高さ約10mの本モミの木ツリー、約1.5km続くイルミネーション散策路を網羅。

横浜ベイホテル東急やインターコンチネンタル横浜Pier 8など、バルコニー付き客室からみなとみらいの冬夜景を独り占めできる厳選5宿をご紹介します。

---

## 💡 現地調査に基づくプロの指南！横浜赤レンガ倉庫クリスマスマーケット攻略＆快適滞在マニュアル

- **入場チケットの事前電子予約（Peatix等）:** 週末や12月中旬以降は日時指定チケット制が導入されます。当日券売り場は長蛇の列となるため、公式ウェブサイトでの事前電子チケット確保が必須です。
- **高さ10mの天然モミの木ツリー＆イルミネーションルーフ:** 毎日16:00点灯。頭上に広がる光の屋根とツリーが重なり合うアングルは、海側から赤レンガ倉庫を背景に撮影するのがベストです。
- **海風による急激な冷え込みと防寒装備:** 赤レンガ倉庫は海に突き出た突堤に位置するため、日没後は強烈な海風が吹き込みます。防風ロングダウン、マフラー、手袋、カイロを必ず装備してください。
- **平日の点灯直後（16:00〜）が狙い目:** 週末夜は大変混雑します。平日の16:00点灯直後、または20:00以降の遅い時間帯を狙うとヒュッテや写真撮影をゆったり楽しめます。

---

## 🏨 旅の目的に応じて選ぶ！横浜・みなとみらいの厳選名ホテル5選

### 1. 横浜ベイホテル東急（神奈川県横浜市西区みなとみらい）
- **特徴:** みなとみらい駅直結。エリア唯一のプライベートバルコニー付き客室を完備。大観覧車の七色イルミネーションをバルコニーから独り占め。名門「クイーン・アリス」の極上フレンチ。
- **宿泊目安:** 1名 ¥${hBayTokyu.hotelMinCharge?.toLocaleString() || '9,146'}〜
- **楽天トラベル評価:** ⭐ ${hBayTokyu.reviewAverage}（${hBayTokyu.reviewCount}件）
- 👉 [横浜ベイホテル東急の空室・宿泊プランを見る](${hBayTokyu.affiliateUrl})

### 2. インターコンチネンタル横浜Ｐｉｅｒ　８　ｂｙ　ＩＨＧ（神奈川県横浜市中区新港）
- **特徴:** 赤レンガ倉庫まで海沿い遊歩道で徒歩5分。新港ふ頭に浮かぶ低層ラグジュアリーホテル。三方を海に囲まれたハーバービュー客室と宿泊者専用ルーフトップ。
- **宿泊目安:** 1名 ¥${hPier8.hotelMinCharge?.toLocaleString() || '18,675'}〜
- **楽天トラベル評価:** ⭐ ${hPier8.reviewAverage}（${hPier8.reviewCount}件）
- 👉 [インターコンチネンタル横浜Pier 8の空室・宿泊プランを見る](${hPier8.affiliateUrl})

### 3. ヨコハマ　グランド　インターコンチネンタル　ホテル　ｂｙ　ＩＨＧ（神奈川県横浜市西区みなとみらい）
- **特徴:** みなとみらいのシンボル「ヨットの帆」ホテル。赤レンガ倉庫へ女神橋を渡り徒歩約10分。ベイブリッジの海景と大観覧車のシティ夜景を選べる絶景客室。
- **宿泊目安:** 1名 ¥${hGrandInter.hotelMinCharge?.toLocaleString() || '10,417'}〜
- **楽天トラベル評価:** ⭐ ${hGrandInter.reviewAverage}（${hGrandInter.reviewCount}件）
- 👉 [ヨコハマ グランド インターコンチネンタルの空室・宿泊プランを見る](${hGrandInter.affiliateUrl})

### 4. ザ・カハラ・ホテル＆リゾート　横浜（神奈川県横浜市西区みなとみらい）
- **特徴:** ハワイの名門「ザ・カハラ」の世界初進出ホテル。クリスタルモダンの建築美とアロハスピリット。全室50平米前後の広小空間、温水インフィニティプール完備。
- **宿泊目安:** 1名 ¥${hKahala.hotelMinCharge?.toLocaleString() || '18,215'}〜
- **楽天トラベル評価:** ⭐ ${hKahala.reviewAverage}（${hKahala.reviewCount}件）
- 👉 [ザ・カハラ・ホテル＆リゾート 横浜の空室・宿泊プランを見る](${hKahala.affiliateUrl})

### 5. ホテルニューグランド（神奈川県横浜市中区山下町）
- **特徴:** 昭和2年創業のクラシックホテル。山下公園正面。大佛次郎やマッカーサーが愛した歴史的空間。シーフードドリア・ナポリタン発祥の味と氷川丸を望むタワー館。
- **宿泊目安:** 1名 ¥${hNewGrand.hotelMinCharge?.toLocaleString() || '10,900'}〜
- **楽天トラベル評価:** ⭐ ${hNewGrand.reviewAverage}（${hNewGrand.reviewCount}件）
- 👉 [ホテルニューグランドの空室・宿泊プランを見る](${hNewGrand.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **横浜赤レンガ倉庫:** ${wRedBrick.extract || '横浜赤レンガ倉庫（よこはまあかレンガそうこ）は、神奈川県横浜市中区新港一丁目にある歴史的建造物。明治・大正期に国の保税倉庫として建設され、現在は文化・商業施設として親しまれています。'}
- **横浜みなとみらい21:** ${wMinatomirai.extract || '横浜みなとみらい21（よこはまみなとみらい21）は、神奈川県横浜市西区および中区にまたがるウォーターフロント都市。高層ビル群や観覧車、美術館が集まる観光・ビジネス拠点。'}
- **山下公園:** ${wYamashita.extract || '山下公園（やましたこうえん）は、神奈川県横浜市中区にある臨海公園。関東大震災の復興事業として開園し、氷川丸の係留や海を望む芝生広場で知られる横浜を代表する名所。'}
- **横浜マリンタワー:** ${wMarineTower.extract || '横浜マリンタワー（よこはまマリンタワー）は、神奈川県横浜市中区山下町にある展望塔。横浜港開港100周年記念事業として建設され、展望フロアから横浜港と街並みを一望できます。'}

---

## 🗺️ 横浜を満喫する 1泊2日モデルコース

- **1日目:** 横浜到着 ➔ 中華街で飲茶ランチ ➔ 山下公園散策 ➔ ホテルチェックイン ➔ 16:00 横浜赤レンガ倉庫でクリスマスマーケットの巨大ツリー点灯式 ➔ ヒュッテでホットワイン＆ソーセージ ➔ ヨコハマミライトの光の並木道を散策 ➔ ホテルでクリスマスディナー ➔ バルコニーから観覧車の夜景を鑑賞
- **2日目:** ハーバービューの朝食ブッフェ ➔ シーバスで横浜駅東口へ海上クルーズ ➔ 商業施設でお土産購入（ありあけハーバー等） ➔ 帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. 横浜赤レンガ倉庫クリスマスマーケットの点灯時間は？**  
A. 毎日16:00から21:00（12月中旬以降は22:00まで延長）まで点灯します。

**Q2. 混雑を避けるためのおすすめの時間帯は？**  
A. 平日の16:00点灯直後、または20:00以降の遅い時間帯が比較的空いており、ヒュッテでの買い物や写真撮影がスムーズです。

**Q3. 赤レンガ倉庫に一番近いホテルはどこですか？**  
A. 「インターコンチネンタル横浜Pier 8」が最も近く、海沿いの遊歩道を歩いてわずか5分でアクセスできます。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【横浜】クリスマスマーケット in 横浜赤レンガ倉庫2026＆ヨコハマミライト完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/posts/${slug})
`;

  return { postData, noteMarkdown };
};
