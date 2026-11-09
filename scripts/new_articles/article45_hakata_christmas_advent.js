// scripts/new_articles/article45_hakata_christmas_advent.js
module.exports = function buildArticle45(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-fukuoka-hakata-christmas-advent-illumination-hotels-guide";
  const title = "【博多】光の街・博多2026＆福岡クリスマスアドベント完全攻略！JR博多前広場62万球の壮大イルミ・本場ヒュッテと中洲・天神の冬夜景、博多もつ鍋・水炊き・極上客室を満喫する厳選名ホテル5選";
  const description = "2026年11月上旬〜12月25日開催の「光の街・博多」と、博多駅前・天神・中洲を光で結ぶ国内最大規模の「クリスマスアドベント（旧福岡クリスマスマーケット）」を徹底解説。JR博多駅前広場を彩る62万球の壮麗なイルミネーションとシンボルツリー、本場ヨーロッパ直輸入のヒュッテで味わうホットワイン（オリジナルマグカップ付き）やシュトーレン、天神ふれあい広場や中洲・那珂川の水辺ライトアップを網羅。屋上温泉プールの都ホテル 博多やホテル日航福岡、グランドハイアット福岡など、駅直結・天神至近で博多もつ鍋や水炊き、玄界灘の冬の旬魚を堪能できる楽天トラベル高評価ホテル5選をご紹介。";
  const date = "2026-11-09";
  const prefecture = "福岡県";
  const area = "博多駅・中洲・天神";

  // ホテル抽出
  const hMiyako = hotels.find(h => h.hotelNo === 172310) || hotels[0];
  const hNikko = hotels.find(h => h.hotelNo === 2325) || hotels[1];
  const hGrand = hotels.find(h => h.hotelNo === 572) || hotels[2];
  const hBasics = hotels.find(h => h.hotelNo === 177662) || hotels[3];
  const hSolaria = hotels.find(h => h.hotelNo === 2772) || hotels[4];

  // Wikiスポット
  const wHakata = wiki["博多駅"] || {};
  const wCanal = wiki["キャナルシティ博多"] || {};
  const wKushida = wiki["櫛田神社 (福岡市)"] || {};
  const wNakasu = wiki["中洲"] || {};

  const reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-blue-950 via-indigo-950 to-stone-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-blue-800/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-cyan-300 font-extrabold text-xs tracking-wider">
      <span>✨</span><span>2026冬 光の街・博多＆福岡クリスマスアドベント 最新現地滞在ガイド</span>
    </div>
    <p class="text-xs text-blue-100 leading-relaxed">
      11月上旬〜12月25日開催！JR博多駅前広場を埋め尽くす62万球の光の森と本場ヒュッテ。駅直結・天然温泉＆冬の博多名物もつ鍋・水炊きを極める特選宿。
    </p>
  </div>
  <a href="${hMiyako.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-stone-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    👑 都ホテル 博多の空室・宿泊プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 mb-4">
  九州の玄関口が光の祝祭に染まる！「光の街・博多」と福岡クリスマスアドベントが織りなす冬の奇蹟
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  冬の訪れとともに、街全体が温かな光と甘いシナモンの香りに包まれる福岡・博多の街。2013年にわずか数軒の山小屋ヒュッテから始まった「福岡クリスマスマーケット」は、年々規模を拡大し、現在では「クリスマスアドベント（CHRISTMAS ADVENT）」として博多駅前広場、天神ふれあい広場、中洲・那珂川河畔、福岡空港など市内主要拠点を網羅する国内最大級（総来場者数500万人以上）の冬の祝祭へと進化を遂げました。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  その中核を担うのが、JR博多駅前広場（博多口）を舞台に展開される「光の街・博多」です。約62万球ものLEDが広場のケヤキ並木を青と白の幻想的な光の森へと変貌させ、中央には高さ約14.9mの巨大シンボルツリーが天空に向かってまばゆい光を放ちます。広場を取り囲むように立ち並ぶ本場ヨーロッパ直輸入の木製ヒュッテからは、熱々のグリューワイン（ホットワイン）の湯気が立ちのぼり、焼き立てのソーセージやベルギーワッフルを頬張りながら生演奏のクリスマスキャロルに耳を傾けるひとときは、まるで本場ドイツの古都に迷い込んだかのような錯覚を覚えます。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  さらに博多駅から地下鉄でわずか数分の天神会場では巨大なサンタクロース像が迎えるメルヘンな世界が広がり、中洲会場では那珂川の水面にイルミネーションが揺らめくロマンチックな散策路が続きます。夜の散策で冷えた身体を温めるのは、博多名物の濃厚白濁スープが染み渡る「水炊き」や、プリプリの牛もつがたまらない「博多もつ鍋」、そして冬に脂が最高潮に達する玄界灘の「寒ブリ」や「アラ（クエ）料理」。本稿では、2026年冬の博多クリスマスアドベントを完全攻略する見どころと混雑回避術、そして予約が殺到する駅直結・天神至近の高評価名ホテル5選を余すところなくお届けします。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-6">
  💡 現地調査に基づくプロの指南！光の街・博多＆クリスマスアドベント完全攻略マニュアル
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-blue-100 text-blue-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">点灯時間・マグカップ争奪戦＆見どころ</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>点灯時間と光のシンボルツリー（17:00〜24:00）:</strong> 日没とともに点灯するJR博多駅前広場の「光の街・博多」。高さ約14.9mのメインツリーは数分おきに光のグラデーションが変化し、駅前ビル壁面へのプロジェクションと連動したダイナミックな光のウェーブが広場全体を包みます。</p>
      <p>② <strong>毎年デザインが変わる「限定オリジナルマグカップ」:</strong> クリスマスアドベントの代名詞とも言えるのが、ホットワインやホットチョコレートを購入するとセットで手に入る陶器製マグカップ。博多駅会場、天神会場、中洲会場でそれぞれ異なる限定デザインが用意されており、12月中旬には完売する日もあるため、早い時間帯の確保が鉄則です。</p>
      <p>③ <strong>中洲「ナカス ヒカリノ アドベント」と屋台のハシゴ:</strong> 福博であい橋や那珂川沿いの樹木が黄金色に輝く中洲会場は、川面に光が反射して写真映え抜群。イルミネーションを楽しんだ直後に中洲の川沿い屋台へ飛び込み、熱々のおでんや焼きラーメンを味わうのが博多ならではの贅沢ルートです。</p>
      <p>④ <strong>2階ペデストリアンデッキからの俯瞰アングル:</strong> 博多駅2階の空中回廊（ペデストリアンデッキ）からは、光の森とヒュッテの賑わい、そしてメインツリーを真正面から見下ろすことができます。人混みを避けて全体像を綺麗に撮影したいときの絶好のフォトスポットです。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">交通・防寒テクニック</span>
      <h3 class="text-base font-bold text-stone-900">地下鉄移動術・混雑回避・防寒の極意</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【地下鉄七隈線延伸の恩恵をフル活用】</strong> 博多駅〜天神南駅間は地下鉄七隈線でわずか約3分。博多駅前会場を楽しんだ後、七隈線で天神南駅へ移動すれば、歩行距離を最小限に抑えながら天神中央公園や市役所前広場のクリスマスマーケットへスムーズにハシゴできます。</p>
      <p><strong>【週末ピーク時の混雑回避と平日夕方の狙い目】</strong> 金曜・土曜の18:30〜20:30は広場内が歩行困難になるほど混み合います。ヒュッテの飲食ブースに並ぶなら、平日の17:00点灯直後、または20:30以降のディナー終わりの時間帯が格段にスムーズです。</p>
      <p><strong>【ビル風による体感温度の低下と防寒装備】</strong> 博多駅前広場は高層ビルに囲まれており、玄界灘からの北風がビル風となって吹き抜けます。気温が7〜8℃であっても体感は氷点下近くまで冷え込むため、防風性のあるロングダウン、手袋、マフラー、足元を温める厚手ソックスが必須です。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-8">
  🏨 旅の目的に応じて選ぶ！博多・天神の厳選名ホテル5選
</h2>

<!-- 宿1: 都ホテル 博多 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-blue-100 text-blue-900 font-black text-xs rounded-full">JR博多駅直結・屋上に天然温泉アウトドアスパ＆温水プールを備えた都会のリゾートオアシス</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 都ホテル　博多（福岡県福岡市博多区博多駅東）</h3>
    </div>
    <span class="px-3 py-1.5 bg-blue-50 border border-blue-300 text-blue-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.62（1815件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hMiyako.hotelImageUrl}" alt="都ホテル 博多 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hMiyako.roomImageUrl || hMiyako.hotelImageUrl}" alt="都ホテル 博多 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> JR博多駅筑紫口から地下通路で直結、雨の日や寒風が吹き荒れる冬の日でも傘不要でアクセスできる抜群の立地を誇ります。建物の外観には滝が流れ落ちる緑豊かなファサードが施され、スタイリッシュかつ温かみのある空間が広がります。
      </p>
      <p>
        <strong>【最上階13階の屋上アウトドアスパ＆天然温泉「ルシエール」】</strong> 本ホテルの最大のハイライトは、敷地内から湧出する天然温泉を利用した最上階のオープンエアスパ。水着着用で入れる温水アウトドアプールやジャグジー、足湯が完備され、冬の夜空と博多の夜景を見上げながら優雅な浮遊感を体験できます。内湯にはガラス張りの大浴場とサウナも完備。
      </p>
      <p>
        <strong>【全室30平米以上のゆとりと上質な九州モーニング】</strong> 客室は全室30平米以上の広々としたレイアウトで、洗い場付きの独立バスルームを完備。シモンズ社製ベッドが極上の睡眠を約束します。最上階レストランでの朝食は、九州各地の厳選食材を用いた彩り豊かな和定食またはアメリカンブレックファストを堪能できます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥18,400〜（2名1室利用時）</span>
        <a href="${hMiyako.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-blue-700 hover:bg-blue-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: ホテル日航福岡 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">JR博多駅地下通路直結・格調高いホスピタリティと美食を極めた名門グランドホテル</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. ホテル日航福岡（福岡県福岡市博多区博多駅前）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.53（4397件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hNikko.hotelImageUrl}" alt="ホテル日航福岡 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hNikko.roomImageUrl || hNikko.hotelImageUrl}" alt="ホテル日航福岡 ロビー・レストラン" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> JR博多駅博多口から地下街経由で徒歩約3分。クリスマスマーケット会場となる駅前広場からすぐの場所にありながら、一歩館内に足を踏み入れると静謐で優美な空間が広がります。国内外の賓客をもてなしてきた名門ならではの細やかなサービスに定評があります。
      </p>
      <p>
        <strong>【伝統とモダンが調和したクラシック＆エレガントな客室】</strong> 重厚感あるインテリアで統一された客室は、高い遮音性と快適なベッドで旅の疲れを優しく癒やします。バスアメニティの充実度や清潔感も申し分なく、記念日や大人の冬旅に最適な安心感を提供します。
      </p>
      <p>
        <strong>【定評あるホテル直営レストラン群と贅沢ビュッフェ朝食】</strong> メインダイニング「レ・セレブリテ」のフランス料理をはじめ、日本料理「弁慶」、中国料理「鴻臚」など館内レストランは福岡屈指の実力派。朝食ビュッフェでは職人がその場で焼き上げるオムレツや、博多がめ煮、明太子など郷土の味覚を優雅に堪能できます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥17,000〜（2名1室利用時）</span>
        <a href="${hNikko.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: グランド ハイアット 福岡 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-rose-100 text-rose-900 font-black text-xs rounded-full">キャナルシティ博多複合・中洲イルミネーション至近の世界的ラグジュアリーホテル</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. グランド　ハイアット　福岡（福岡県福岡市博多区住吉）</h3>
    </div>
    <span class="px-3 py-1.5 bg-rose-50 border border-rose-300 text-rose-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.46（1411件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hGrand.hotelImageUrl}" alt="グランド ハイアット 福岡 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hGrand.roomImageUrl || hGrand.hotelImageUrl}" alt="グランド ハイアット 福岡 バーラウンジ" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 複合商業施設「キャナルシティ博多」の中心に位置し、中洲の屋台街や那珂川イルミネーション散策路へ徒歩数分。運河の噴水ショーと連動した華やかな冬の夜景を間近で楽しめる、福岡屈指のインターナショナルホテルです。
      </p>
      <p>
        <strong>【東洋と西洋の美意識が融合した上質なスイート＆ゲストルーム】</strong> 落ち着いたアースカラーで設えられた客室には、ゆったりとした深めのバスタブと独立シャワーブースを完備。窓からはキャナルシティのライトアップや博多の街並みを一望できます。クラブフロア宿泊者専用ラウンジでは、贅沢なカクテルタイムが提供されます。
      </p>
      <p>
        <strong>【音と光が交差するバーラウンジ「バー フィズ」のひととき】</strong> 吹き抜けのアトリウムに位置する「バー フィズ」では、毎夜行われるキャナルアクアパノラマの噴水ショーを特等席で眺めながら、オリジナルのクリスマスカクテルを楽しめます。冬のナイトタイムをロマンチックに締めくくるのに最高の舞台です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥16,129〜（2名1室利用時）</span>
        <a href="${hGrand.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-rose-700 hover:bg-rose-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: THE BASICS FUKUOKA -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">高さ42mの吹き抜けにそびえ立つ圧巻の円形書架！知的好奇心を刺激するデザインホテル</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. ＴＨＥ　ＢＡＳＩＣＳ　ＦＵＫＵＯＫＡ（ザ・ベーシックス福岡）（福岡県福岡市博多区博多駅東）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.37（964件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hBasics.hotelImageUrl}" alt="THE BASICS FUKUOKA 外観・ロビー" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hBasics.roomImageUrl || hBasics.hotelImageUrl}" alt="THE BASICS FUKUOKA 書架ライブラリー" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> JR博多駅筑紫口から徒歩約7分。ロビーに足を踏み入れた瞬間、高さ約42mの巨大な円形吹き抜け空間と、天井まで届く約8メートルの書架に約5,000冊の本が並ぶ圧倒的な知の世界が広がります。建築家・磯崎新氏が手がけた名建築をリノベーションした唯一無二のホテルです。
      </p>
      <p>
        <strong>【本の世界に没入する滞在体験とアーティスティックな客室】</strong> 客室は「Chapter（章）」と名付けられ、各部屋に厳選された書籍が置かれています。洗練されたモダンインテリアの中に心地よい静けさが漂い、イルミネーション散策から戻った後の夜長を、お気に入りの一冊とともにゆったり過ごせます。
      </p>
      <p>
        <strong>【高コスパで叶うワンランク上のステイ】</strong> ラグジュアリーな空間美を誇りながら、宿泊料金は1名1万円台前半からとコストパフォーマンスが極めて高いのも大きな魅力。デザイン感度の高いカップルや女子旅、一人旅の拠点として熱烈な支持を集めています。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥10,580〜（2名1室利用時）</span>
        <a href="${hBasics.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: ソラリア西鉄ホテル福岡 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-purple-100 text-purple-900 font-black text-xs rounded-full">西鉄福岡（天神）駅直結・天神クリスマスマーケット会場目の前のプレミアムビュー</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. ソラリア西鉄ホテル福岡（福岡県福岡市中央区天神）</h3>
    </div>
    <span class="px-3 py-1.5 bg-purple-50 border border-purple-300 text-purple-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.51（2656件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hSolaria.hotelImageUrl}" alt="ソラリア西鉄ホテル福岡 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hSolaria.roomImageUrl || hSolaria.hotelImageUrl}" alt="ソラリア西鉄ホテル福岡 客室夜景" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 西鉄福岡（天神）駅・地下鉄天神駅に直結する「ソラリアプラザ」上層階に位置。天神ふれあい広場や警固公園など、天神エリアのクリスマスアドベントメイン会場のすぐ目の前という絶好のポジションを誇ります。
      </p>
      <p>
        <strong>【天神のイルミネーションを見下ろす高層階の特等席】</strong> 客室はすべて高層階に配置されており、大きな窓からは天神の光輝く街並みやクリスマスの賑わいを見下ろすことができます。独立型のバスルームにはレインシャワーや広々としたバスタブが備わり、寒さで冷えた身体をじっくり温めることができます。
      </p>
      <p>
        <strong>【最上階17階グリルレストランでの優雅なディナー＆朝食】</strong> 最上階のレストラン「レッドフランマ」では、溶岩石のグリルで香ばしく焼き上げる厳選牛ステーキや九州の魚介料理を提供。パノラマ夜景を眺めながらのディナーは特別なクリスマスナイトにふさわしい贅沢な時間をもたらします。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥18,100〜（2名1室利用時）</span>
        <a href="${hSolaria.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-purple-700 hover:bg-purple-600 text-white font-black text-xs rounded-xl shadow transition">
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
  光の街・博多やクリスマスアドベントのイルミネーション鑑賞とあわせて巡りたい、博多・天神の代表的な名所を現地観光案内アーカイブとともにご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-blue-700 font-bold text-sm">📍 博多駅（JR博多シティ）</span>
    </div>
    <img src="${wHakata.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/172310/172310.jpg'}" alt="博多駅" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wHakata.extract || '博多駅（はかたえき）は、福岡県福岡市博多区博多駅中央街にある九州旅客鉄道・西日本旅客鉄道・福岡市交通局の駅。九州最大のターミナル駅であり、冬には駅前広場が62万球の壮大なイルミネーション「光の街・博多」に彩られます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-blue-700 font-bold text-sm">📍 キャナルシティ博多（Canal City Hakata）</span>
    </div>
    <img src="${wCanal.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/572/572.jpg'}" alt="キャナルシティ博多" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wCanal.extract || 'キャナルシティ博多は、福岡市博多区住吉一丁目にある複合商業施設。中央を流れる人工運河（キャナル）を中心に、劇場、映画館、ショップ、レストラン、ホテルが連なり、冬には光と音楽が融合したダイナミックな噴水イルミネーションショーが開催されます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-blue-700 font-bold text-sm">📍 櫛田神社（Kushida Shrine）</span>
    </div>
    <img src="${wKushida.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/2325/2325.jpg'}" alt="櫛田神社" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wKushida.extract || '櫛田神社（くしだじんじゃ）は、福岡市博多区上川端町にある神社。博多の総鎮守として「お櫛田さん」の愛称で親しまれ、博多祇園山笠が奉納されることで有名。境内には年中飾られている壮麗な「飾り山笠」があり、冬の初詣や年末の参拝客で賑わいます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-blue-700 font-bold text-sm">📍 中洲（Nakasu）</span>
    </div>
    <img src="${wNakasu.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/2772/2772.jpg'}" alt="中洲" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wNakasu.extract || '中洲（なかす）は、福岡市博多区にある那珂川と博多川に挟まれた中州の歓楽街。西日本随一の歓楽街として知られ、那珂川沿いに立ち並ぶ屋台街は福岡のシンボル。冬には「ナカス ヒカリノ アドベント」として川沿いの樹木が黄金色にライトアップされます。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-8">
  🗺️ 光の祝祭と博多グルメを満喫する 1泊2日冬の王道モデルコース
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-blue-700 text-white rounded text-xs">1日目</span>
      博多駅前62万球イルミ・マグカップ確保から中洲水辺ライトアップ＆屋台ハシゴへ
    </h3>
    <p class="leading-relaxed">
      13:30 福岡空港またはJR博多駅に到着 ➔ 駅直結の宿（都ホテル 博多やホテル日航福岡）に荷物を預ける ➔ 博多駅ビル「くうてん」で名物「博多一双」の豚骨ラーメンランチ ➔ 15:00 博多の総鎮守「櫛田神社」へ参拝し、常設展示の壮大な飾り山笠を鑑賞 ➔ 川端通商店街を散策し老舗でぜんざいブレイク ➔ 16:30 ホテルにチェックインし少し休憩 ➔ 17:00 JR博多駅前広場へ。「光の街・博多」の点灯カウントダウンに立ち会い、62万球が一斉に輝く瞬間を目撃 ➔ 本場ヒュッテで限定マグカップ付きグリューワインとソーセージを購入 ➔ 18:30 地下鉄七隈線で天神へ移動し、市役所前広場のクリスマスマーケットを散策 ➔ 20:00 中洲へ向かい、那珂川の「ナカス ヒカリノ アドベント」水辺イルミネーションを眺めながら屋台へ。熱々のおでんと名物焼きラーメンに舌鼓 ➔ 22:00 宿へ戻り、都ホテル博多の屋上天然温泉プールや大浴場で冷えた身体を芯から温める。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-blue-700 text-white rounded text-xs">2日目</span>
      贅沢ホテル朝食ビュッフェ＆キャナルシティ噴水ショーとお土産巡り
    </h3>
    <p class="leading-relaxed">
      07:30 ホテルのレストランで優雅な朝食。焼きたてオムレツや名物明太子、がめ煮を満喫 ➔ 09:30 チェックアウト後、キャナルシティ博多へ移動しショッピング＆午前中の運河噴水ショーを鑑賞 ➔ 11:30 中洲の名店「水たき 長野」または「博多もつ鍋 やま中」で冬ならではの極上スープランチ ➔ 13:30 博多駅「マイング」や「博多阪急」で、限定めんべい、博多通りもん、明太子のお土産を購入 ➔ 15:00 忘れられない光の想い出とともに福岡空港／新幹線ホームから帰路へ。
    </p>
  </div>
</div>

<h2 id="comparison-table" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-8">
  📊 博多・天神 厳選5ホテルの特徴・立地・宿泊目安比較一覧
</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
      <tr>
        <th class="p-3">ホテル名</th>
        <th class="p-3">エリア・最寄り</th>
        <th class="p-3">楽天評価</th>
        <th class="p-3">目安料金</th>
        <th class="p-3">温泉・客室のハイライト</th>
        <th class="p-3">冬の味覚・食事の特徴</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-100 text-stone-700">
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">都ホテル 博多</td>
        <td class="p-3">JR博多駅直結</td>
        <td class="p-3 font-bold text-blue-700">★ ${hMiyako.reviewAverage}</td>
        <td class="p-3">¥${hMiyako.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">最上階の屋上天然温泉温水プール＆内湯・全室30㎡以上</td>
        <td class="p-3">九州厳選食材の彩り朝食＆最上階レストランの極上フレンチ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ホテル日航福岡</td>
        <td class="p-3">JR博多駅地下通路直結</td>
        <td class="p-3 font-bold text-blue-700">★ ${hNikko.reviewAverage}</td>
        <td class="p-3">¥${hNikko.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">名門ならではの静謐と格式・高い遮音性と充実のアメニティ</td>
        <td class="p-3">名門フレンチ「レ・セレブリテ」＆職人が焼く極上朝食オムレツ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">グランド ハイアット 福岡</td>
        <td class="p-3">キャナルシティ博多直結</td>
        <td class="p-3 font-bold text-blue-700">★ ${hGrand.reviewAverage}</td>
        <td class="p-3">¥${hGrand.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">運河の夜景を望むラグジュアリー空間・深めの独立バスタブ</td>
        <td class="p-3">噴水ショー連動バーラウンジ＆豪華グリルディナー</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">THE BASICS FUKUOKA</td>
        <td class="p-3">JR博多駅筑紫口徒歩7分</td>
        <td class="p-3 font-bold text-blue-700">★ ${hBasics.reviewAverage}</td>
        <td class="p-3">¥${hBasics.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">高さ42m吹き抜け円形書架（5000冊）・知性薫るデザイン空間</td>
        <td class="p-3">ハイセンスなカフェレストラン＆厳選食材のモーニングプレート</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ソラリア西鉄ホテル福岡</td>
        <td class="p-3">西鉄天神駅直結</td>
        <td class="p-3 font-bold text-blue-700">★ ${hSolaria.reviewAverage}</td>
        <td class="p-3">¥${hSolaria.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">天神クリスマス会場目の前・全室高層階パノラマビュー</td>
        <td class="p-3">最上階17階「レッドフランマ」の溶岩石グリル＆ワイン</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-8">
  ❓ 光の街・博多＆福岡クリスマスアドベント よくある質問（FAQ）
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-blue-950">Q1. 光の街・博多の点灯期間と点灯時間はいつからいつまでですか？</h3>
    <p class="text-stone-700 leading-relaxed">
      点灯期間は2026年11月上旬から2027年1月上旬まで（クリスマスヒュッテの出店は12月25日まで）。点灯時間は毎日17:00から24:00まで点灯しています。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-blue-950">Q2. オリジナルマグカップ付きホットワインはどうやって購入しますか？</h3>
    <p class="text-stone-700 leading-relaxed">
      会場内のドリンクヒュッテで購入できます。初杯注文時にマグカップ代込みの料金（例年1,000円前後）を支払い、マグカップにホットワインまたはノンアルコールホットチョコが注がれます。2杯目以降はカップを持参すれば中身のおかわり価格で楽しめます。使用後のカップを持ち帰るための小袋を持参すると便利です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-blue-950">Q3. 博多駅周辺のホテルと天神のホテル、どちらがおすすめですか？</h3>
    <p class="text-stone-700 leading-relaxed">
      新幹線や空港アクセスを最優先し、JR博多駅前広場の巨大ツリーや天然温泉プールを満喫したいなら博多駅直結の「都ホテル 博多」や「ホテル日航福岡」が最適です。一方、天神会場の賑わいやショッピング、天神地下街グルメを夜遅くまで楽しみたいなら天神直結の「ソラリア西鉄ホテル福岡」が便利です。
    </p>
  </div>
</div>

<h2 id="internal-links" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-blue-700 pb-2 my-8">
  📌 あわせて読みたい福岡・九州の温泉＆冬旅特集
</h2>
<div class="p-6 rounded-3xl bg-blue-50/70 border border-blue-200 space-y-3 my-6">
  <p class="text-xs text-blue-900 font-bold mb-2">当サイトでは、福岡・九州の厳選グルメや温泉リゾートを満喫できる特集記事を多数公開しています。</p>
  <ul class="text-xs text-blue-900 space-y-2 list-disc list-inside">
    <li><a href="/prefectures/fukuoka/" class="underline font-bold hover:text-blue-700">福岡県の旅館・名門ホテル＆観光名所完全ガイド（博多・天神・太宰府・門司港）</a></li>
    <li><a href="/posts/hakata-nakasu-tenjin-hotels-guide" class="underline hover:text-blue-700">博多・中洲・天神エリアの人気ホテル比較！屋台と夜景を満喫する厳選宿</a></li>
    <li><a href="/posts/dazaifu-fukuoka-tenmangu-guide" class="underline hover:text-blue-700">太宰府天満宮の初詣・梅香る参道散策と極上温泉ホテルガイド</a></li>
    <li><a href="/posts/winter-youth-fukuoka-hakata-yatai-ramen-guide" class="underline hover:text-blue-700">福岡・博多の屋台ラーメン＆もつ鍋食べ歩き冬旅完全攻略ガイド</a></li>
    <li><a href="/posts/winter-oita-beppu-christmas-fantasia-fireworks-onsen-hotels-guide" class="underline hover:text-blue-700">べっぷクリスマスファンタジア2026＆冬の別府湾音楽花火・鉄輪温泉名宿ガイド</a></li>
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
    hero_image: hMiyako.hotelImageUrl,
    gallery: [
      hMiyako.hotelImageUrl,
      hNikko.hotelImageUrl,
      hGrand.hotelImageUrl,
      hBasics.hotelImageUrl,
      hSolaria.hotelImageUrl
    ],
    hotel_name: "都ホテル 博多・ホテル日航福岡・グランドハイアット福岡 ほか",
    affiliate_url: hMiyako.affiliateUrl,
    categories: [
      "冬のイベント特集",
      "クリスマス特集",
      "イルミネーション特集",
      "福岡県",
      "高級ホテル・名門ホテル"
    ],
    prefecture: prefecture,
    area: area,
    date: date,
    review: reviewHtml,
    rating: 4.8,
    price_range: "¥10,580〜¥60,000",
    tags: [
      "光の街・博多",
      "福岡クリスマスアドベント",
      "博多駅",
      "イルミネーション",
      "都ホテル博多",
      "ホテル日航福岡",
      "グランドハイアット福岡",
      "クリスマスマーケット",
      "博多もつ鍋",
      "天神"
    ]
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

2026年11月上旬〜12月25日開催の「光の街・博多」と「福岡クリスマスアドベント（旧福岡クリスマスマーケット）」を徹底解説！

JR博多駅前広場を彩る62万球の壮大なイルミネーションツリーや光の森、本場ヨーロッパ直輸入のヒュッテで味わうホットワイン（限定オリジナルマグカップ付き）やシュトーレン、天神・中洲の水辺ライトアップを網羅。

屋上天然温泉温水プールを完備した都ホテル 博多やホテル日航福岡、グランドハイアット福岡など、駅直結・天神至近で博多もつ鍋や水炊きを堪能できる厳選5宿をご紹介します。

---

## 💡 現地調査に基づくプロの指南！光の街・博多＆クリスマスアドベント攻略マニュアル

- **点灯時間と光のシンボルツリー（17:00〜24:00）:** 日没とともに点灯するJR博多駅前広場。高さ約14.9mのメインツリーと62万球のLEDが広場全体を青と白の光の森へと変貌させます。
- **毎年デザインが変わる「限定オリジナルマグカップ」の確保:** 各会場（博多・天神・中洲）ごとに異なるデザインの陶器製マグカップが人気沸騰。週末夜は完売することもあるため、平日の夕方早い時間帯の購入がおすすめです。
- **地下鉄七隈線による快適ハシゴ術:** 博多駅〜天神南駅間は地下鉄七隈線で約3分。歩行負担を最小限に抑えながら博多駅前と天神の各会場を巡ることができます。
- **ビル風対策の万全な防寒装備:** 高層ビル群に囲まれた博多駅前広場は冬の冷たい北風が吹き抜けます。防風ロングダウン、マフラー、手袋、カイロを必ず装備してください。

---

## 🏨 旅の目的に応じて選ぶ！博多・天神の厳選名ホテル5選

### 1. 都ホテル 博多（福岡県福岡市博多区博多駅東）
- **特徴:** JR博多駅直結。最上階13階に敷地内湧出の天然温泉アウトドアスパ・温水プール＆足湯を完備。全室30平米以上のゆとりある客室。
- **宿泊目安:** 1名 ¥18,400〜
- **楽天トラベル評価:** ⭐ 4.62（1815件）
- 👉 [都ホテル 博多の空室・宿泊プランを見る](${hMiyako.affiliateUrl})

### 2. ホテル日航福岡（福岡県福岡市博多区博多駅前）
- **特徴:** JR博多駅地下通路直結。格調高いホスピタリティと静謐な客室。名門フレンチ「レ・セレブリテ」や職人が焼く極上朝食オムレツ。
- **宿泊目安:** 1名 ¥17,000〜
- **楽天トラベル評価:** ⭐ 4.53（4397件）
- 👉 [ホテル日航福岡の空室・宿泊プランを見る](${hNikko.affiliateUrl})

### 3. グランド ハイアット 福岡（福岡県福岡市博多区住吉）
- **特徴:** キャナルシティ博多直結・中洲至近。運河の噴水ショーを見下ろすラグジュアリーホテル。バーラウンジ「バー フィズ」でカクテル。
- **宿泊目安:** 1名 ¥16,129〜
- **楽天トラベル評価:** ⭐ 4.46（1411件）
- 👉 [グランド ハイアット 福岡の空室・宿泊プランを見る](${hGrand.affiliateUrl})

### 4. ＴＨＥ　ＢＡＳＩＣＳ　ＦＵＫＵＯＫＡ（福岡県福岡市博多区博多駅東）
- **特徴:** 博多駅徒歩7分。高さ42mの吹き抜け円形ロビーに約5,000冊の本が並ぶ圧倒的デザインホテル。知的好奇心を刺激するステイ。
- **宿泊目安:** 1名 ¥10,580〜
- **楽天トラベル評価:** ⭐ 4.37（964件）
- 👉 [THE BASICS FUKUOKAの空室・宿泊プランを見る](${hBasics.affiliateUrl})

### 5. ソラリア西鉄ホテル福岡（福岡県福岡市中央区天神）
- **特徴:** 西鉄天神駅直結。天神クリスマスマーケット会場の目の前。全室高層階パノラマビュー。最上階17階グリルレストラン。
- **宿泊目安:** 1名 ¥18,100〜
- **楽天トラベル評価:** ⭐ 4.51（2656件）
- 👉 [ソラリア西鉄ホテル福岡の空室・宿泊プランを見る](${hSolaria.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **博多駅:** ${wHakata.extract || '博多駅（はかたえき）は、福岡県福岡市博多区博多駅中央街にある九州最大のターミナル駅。冬には駅前広場が62万球の壮大なイルミネーション「光の街・博多」に彩られます。'}
- **キャナルシティ博多:** ${wCanal.extract || 'キャナルシティ博多は、福岡市博多区住吉一丁目にある複合商業施設。中央を流れる人工運河を中心に、ショップ、レストラン、ホテルが連なります。'}
- **櫛田神社:** ${wKushida.extract || '櫛田神社（くしだじんじゃ）は、福岡市博多区上川端町にある神社。博多の総鎮守として「お櫛田さん」の愛称で親しまれています。'}
- **中洲:** ${wNakasu.extract || '中洲（なかす）は、福岡市博多区にある那珂川と博多川に挟まれた中州の歓楽街。西日本随一の歓楽街として知られ、屋台街が有名です。'}

---

## 🗺️ 博多・天神を満喫する 1泊2日モデルコース

- **1日目:** 福岡到着 ➔ 博多駅ビルで豚骨ラーメン ➔ 櫛田神社参拝 ➔ ホテルチェックイン ➔ 17:00 JR博多駅前広場で点灯カウントダウン ➔ ヒュッテでホットワイン＆限定マグカップ確保 ➔ 地下鉄七隈線で天神会場へ ➔ 中洲水辺イルミネーション＆屋台ハシゴ ➔ ホテルの天然温泉プールでリラックス
- **2日目:** 贅沢ホテル朝食 ➔ キャナルシティ博多で噴水ショー＆買い物 ➔ 名物水炊きランチ ➔ 博多駅でお土産購入（通りもん・明太子） ➔ 帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. 光の街・博多の点灯時間は？**  
A. 毎日17:00から24:00まで点灯します。

**Q2. マグカップ付きホットワインの購入方法は？**  
A. 会場内ドリンクヒュッテで初杯購入時にマグカップ代込みで購入できます。おかわりはカップ持参で割引になります。

**Q3. 博多駅周辺で一番おすすめのホテルは？**  
A. 屋上天然温泉プールを備え駅直結の「都ホテル 博多」、または名門の風格漂う「ホテル日航福岡」がおすすめです。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【博多】光の街・博多2026＆福岡クリスマスアドベント完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/posts/${slug})
`;

  return { postData, noteMarkdown };
};
