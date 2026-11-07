// scripts/new_articles/article41_kawaguchiko_winter_fireworks.js
module.exports = function buildArticle41(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-yamanashi-kawaguchiko-winter-fireworks-fuji-view-hotels-guide";
  const title = "【山梨・河口湖】「河口湖 冬花火2027」＆冬の富士山絶景完全攻略！澄み渡る夜空を彩る湖上花火と大池公園特等席、客室露天から眺める紅富士・名湯河口湖温泉＆甲州牛・名物ほうとうを味わう厳選宿5選";
  const description = "2027年1月中旬から2月下旬にかけて開催される「河口湖 冬花火」と、澄み渡る大気の中に雪化粧の富士山が輝く冬の富士五湖完全攻略ガイド。大池公園・畳岩・八木崎公園の打ち上げポイント、湖面に映る逆さ富士花火、朝焼けに染まる「紅富士」の鑑賞術を網羅。客室や露天風呂から真正面に富士山と花火を望む河口湖温泉の極上宿など厳選5選をご紹介。";
  const date = "2026-11-07";
  const prefecture = "山梨県";
  const area = "富士五湖・河口湖";

  // ホテル抽出
  const hKonansou = hotels.find(h => h.hotelNo === 31111) || hotels[0];
  const hKogetsu = hotels.find(h => h.hotelNo === 43939) || hotels[1];
  const hKukuna = hotels.find(h => h.hotelNo === 29755) || hotels[2];
  const hGinkei = hotels.find(h => h.hotelNo === 76942) || hotels[3];
  const hLavista = hotels.find(h => h.hotelNo === 149122) || hotels[4];

  // Wikiスポット
  const wKawaguchiko = wiki["河口湖"] || {};
  const wFujisan = wiki["富士山"] || {};
  const wFujigoko = wiki["富士五湖"] || {};
  const wAsama = wiki["河口浅間神社"] || {};

  const reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-blue-950 via-indigo-950 to-stone-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-blue-800/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-indigo-300 font-extrabold text-xs tracking-wider">
      <span>🎆</span><span>2027冬 河口湖 冬花火＆冬の富士山絶景 最新現地攻略ガイド</span>
    </div>
    <p class="text-xs text-indigo-100 leading-relaxed">
      1月中旬〜2月開催！澄み渡る極寒の夜空と湖面に咲く大輪の水中花火。客室露天風呂から真正面に富士山と花火を独占する名旅館で叶える至高の冬旅。
    </p>
  </div>
  <a href="${hKonansou.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-indigo-400 hover:bg-indigo-300 text-stone-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    👑 湖南荘の空室・宿泊プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 mb-4">
  澄み切った大気に響く轟音と光の華！「河口湖 冬花火」と白銀の富士山が織りなす冬の絶景奇跡
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  冬の山梨県・富士五湖エリアは、大気中の水蒸気が減少し、一年を通じて最も富士山の稜線がくっきりと美しく望める奇跡のシーズンを迎えます。群青色の空に白銀の雪をかぶった霊峰富士が凛然とそびえ立つ姿は、まさに息をのむ美しさです。この絶景の地に冬の華やぎを添える一大イベントが、例年1月中旬から2月下旬の土日、および2月23日の「富士山の日」に合わせて開催される「河口湖 冬花火」です。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  夜8時、静まり返った河口湖の夜空に号砲が轟くと、メイン会場の大池公園、畳岩、八木崎公園の3地点から一斉に約2,000発の花火が打ち上げられます。夏の花火と決定的に異なるのは、冬特有の乾燥したクリアな空気によって、光の色が鮮烈に際立ち、周囲の山々に反響する重低音の響きがダイレクトに身体へと伝わってくる点です。波のない静かな湖面には色鮮やかな光の尾が鏡のように映り込み、雪化粧した富士山のシルエットとともに幻想的なパノラマを描き出します。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  さらに早朝には、朝日に照らされて山肌が紅色に染まる「紅富士（べにふじ）」や、風のない穏やかな水面に逆さの富士が映り込む「逆さ富士」など、冬ならではの自然現象との出会いが待っています。しかし、真冬の河口湖畔は夜間になると氷点下5℃から10℃近くまで冷え込みます。そこで賢い大人の旅人が選ぶのが、客室や客室露天風呂、展望ラウンジの暖かい室内から真正面に花火と富士山を鑑賞できる「河口湖温泉の特等席宿」です。湯船に肩まで浸かりながら、夜空に咲く大輪の花火を見上げる時間は、冬旅における最高の贅沢と言えます。本記事では、2027年冬花火の鑑賞ポイント、寒さ対策、そして甲州牛やすき焼き・名物ほうとうを味わえる楽天トラベル屈指の高評価宿5選を徹底解説します。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-6">
  💡 現地調査に基づくプロの指南！河口湖冬花火2027攻略＆鑑賞スポットマニュアル
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-indigo-100 text-indigo-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">冬花火の日程・時間＆3大鑑賞ポイント</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>開催日程＆打ち上げ時間:</strong> 2027年1月16日(土)〜2月21日(日)の毎土・日曜日、および2月23日(月・祝「富士山の日」)の計13回開催予定。打ち上げ時間は20:00〜20:20の20分間集中。</p>
      <p>② <strong>メイン会場「大池公園」:</strong> 打ち上げ場所の正面に位置し、大迫力の花火と音楽、夜店（屋台）の活気を間近で体感できる王道スポット。公園駐車場は18:30頃に満車となるため、徒歩アクセスが推奨されます。</p>
      <p>③ <strong>北岸産屋ヶ崎・畳岩エリア:</strong> 河口湖越しに富士山を背景にして花火を撮影できるカメラマン屈指の聖地。水面に映る「逆さ富士花火」を狙うならこの北岸エリアがベストポジションです。</p>
      <p>④ <strong>八木崎公園:</strong> 大池公園の対岸に位置し、比較的混雑が穏やかで落ち着いて花火を見上げられる穴場スポット。広々とした芝生エリアから光の饗宴を眺められます。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-blue-100 text-blue-800 font-extrabold text-xs rounded-lg">気候・移動テクニック</span>
      <h3 class="text-base font-bold text-stone-900">極寒の湖畔対策・宿の特等席選び</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【氷点下5℃以下の寒風に備える重防寒】</strong> 湖面を渡る風は肌を刺すような冷たさです。屋外で観覧する場合は、ロング丈の厚手ダウン、防風パンツ、ニット帽、厚手の手袋、マフラー、貼るカイロが必須。スマートフォンやカメラのバッテリーも寒さで急激に消耗するため予備バッテリーを持参してください。</p>
      <p><strong>【ホテル客室・屋上展望デッキが最高の特等席】</strong> 寒さを気にせず快適に花火を楽しむ最大の裏技は、大池公園近くや北岸に位置する温泉旅館の「湖側客室」「屋上足湯デッキ」「客室露天風呂」を予約すること。暖かい部屋で地酒や甲州ワインを傾けながらの鑑賞は極上です。</p>
      <p><strong>【冬用タイヤの装着＆中央道アクセス】</strong> 河口湖周辺は標高800mを超え、降雪や夜間の路面凍結が発生します。車で向かう場合はスタッドレスタイヤ必須です。公共交通機関の場合は、新宿駅から特急「富士回遊」で河口湖駅まで直通約1時間50分と非常に快適です。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  🏨 富士山と花火を特等席で望む！河口湖温泉の厳選名旅館＆リゾート5選
</h2>

<!-- 宿1: 湖南荘 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-indigo-100 text-indigo-900 font-black text-xs rounded-full">花火打ち上げ会場の目の前！足湯付き屋上展望デッキ＆露天風呂付き客室</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. 富士河口湖温泉　湖南荘（山梨県南都留郡富士河口湖町船津）</h3>
    </div>
    <span class="px-3 py-1.5 bg-indigo-50 border border-indigo-300 text-indigo-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKonansou.reviewAverage}（${hKonansou.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKonansou.hotelImageUrl}" alt="${hKonansou.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKonansou.roomImageUrl || hKonansou.hotelImageUrl}" alt="${hKonansou.hotelName} 客室露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 大池公園・冬花火打ち上げポイントの目の前に位置する、河口湖屈指の高級和風温泉旅館。純和風の落ち着いた館内と、きめ細やかなおもてなしが国内外のゲストから圧倒的な支持を集めています。
      </p>
      <p>
        <strong>【屋上展望足湯「フットスパ瀑寓」から見上げる大迫力花火】</strong> 屋上には富士山と河口湖を360度パノラマで見渡せる展望足湯を完備。足元をぽかぽか温めながら、夜空に打ち上がる大輪の花火と富士山の夜景を頭上に仰ぎ見る体験は、湖南荘ならではの特権です。
      </p>
      <p>
        <strong>【料亭個室で味わう旬の甲州会席ディナー】</strong> 夕食はお部屋または料亭個室にて、甲州牛のステーキや富士の清流で育った川魚、山梨の郷土の味覚を贅沢に取り入れた本格会席料理をゆっくり堪能できます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hKonansou.hotelMinCharge || 26400).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hKonansou.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-indigo-700 hover:bg-indigo-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: 秀峰閣 湖月 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-blue-100 text-blue-900 font-black text-xs rounded-full">北岸からの遮るもののない富士山＆花火パノラマ・全室レイクビューの最高峰宿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. 富士河口湖温泉　秀峰閣　湖月（山梨県南都留郡富士河口湖町河口）</h3>
    </div>
    <span class="px-3 py-1.5 bg-blue-50 border border-blue-300 text-blue-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKogetsu.reviewAverage}（${hKogetsu.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKogetsu.hotelImageUrl}" alt="${hKogetsu.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKogetsu.roomImageUrl || hKogetsu.hotelImageUrl}" alt="${hKogetsu.hotelName} 絶景露天風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 河口湖北岸の湖畔に建ち、全客室および露天風呂から河口湖越しに裾野まで広がる雄大な富士山を一切遮るものなく一望できる絶景の宿。冬の澄んだ空気の中で眺める富士の姿は神々しいまでの美しさです。
      </p>
      <p>
        <strong>【湖と富士山が溶け合う庭園露天風呂】</strong> 湖畔の庭園に面した露天風呂は、手前に静かな河口湖、その奥に雄大な富士山がそびえる圧巻の眺望。湯上がりには生ビールの無料サービスもあり、冬の夜空に上がる花火も宿にいながらゆったりと楽しめます。
      </p>
      <p>
        <strong>【贅を尽くした季節の創作和食会席】</strong> 料理長が厳選した旬の素材を美しい器に盛り付けた会席料理。富士桜ポークや甲州ワインビーフ、新鮮な海の幸と山の恵みが調和した繊細な味わいをお部屋または個室で楽しめます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hKogetsu.hotelMinCharge || 26400).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hKogetsu.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-blue-700 hover:bg-blue-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: THE KUKUNA -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">全室テラス付き・ウォーターテラス温泉露天風呂から富士山と花火を望むリゾート</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. ＴＨＥ　ＫＵＫＵＮＡ（山梨県南都留郡富士河口湖町浅川）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hKukuna.reviewAverage}（${hKukuna.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKukuna.hotelImageUrl}" alt="${hKukuna.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hKukuna.roomImageUrl || hKukuna.hotelImageUrl}" alt="${hKukuna.hotelName} インフィニティ風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 南国リゾートの心地よさと和の寛ぎを融合させたスタイリッシュな温泉リゾート。全客室に広々としたウォーターテラスが備えられ、目の前に広がる河口湖と富士山の絶景パノラマをプライベートに独占できます。
      </p>
      <p>
        <strong>【天空のインフィニティ露天風呂「GRAND VISTA」】</strong> 最上階に位置する展望露天風呂は、まるで湖の上に浮かんでいるかのようなインフィニティ設計。遮るもののない大空の下、雪富士と夜空の花火が広がる光景は息をのむ美しさです。
      </p>
      <p>
        <strong>【創作フレンチ会席とハーフビュッフェの美食】</strong> レストラン「MOONBOW」では、鉄板焼きのメインディッシュと彩り豊かなビュッフェを組み合わせた新感覚のディナー。エンターテインメント性に富んだ美食の時間が旅の夜を華やかに彩ります。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hKukuna.hotelMinCharge || 25300).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hKukuna.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 湖楽おんやど富士吟景 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-900 text-amber-200 font-black text-xs rounded-full">湖面に映る逆さ富士を望むインフィニティ露天風呂「銘石」＆甲州旬会席</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 逆さ富士を望む湖畔の絶景宿　湖楽おんやど富士吟景（山梨県南都留郡富士河口湖町浅川）</h3>
    </div>
    <span class="px-3 py-1.5 bg-stone-100 border border-stone-300 text-stone-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hGinkei.reviewAverage}（${hGinkei.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hGinkei.hotelImageUrl}" alt="${hGinkei.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hGinkei.roomImageUrl || hGinkei.hotelImageUrl}" alt="${hGinkei.hotelName} 展望風呂" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 河口湖東岸の高台に佇み、名前の通り「富士の吟景」を館内のいたる場所から堪能できる温泉宿。和の情緒にモダンな快適性をプラスした落ち着きある客室が揃い、夫婦や大人のペア旅行に高いリピート率を誇ります。
      </p>
      <p>
        <strong>【絶景展望露天風呂「富士見の湯・銘石」】</strong> 最上階の露天風呂は、手前の浴槽の縁と河口湖の水面が一体化するインフィニティ仕様。朝は紅富士、昼は青空に映える白雪の富士、夜は星空と花火の輝きを湯船から一望できます。
      </p>
      <p>
        <strong>【旬の味覚を彩り豊かに仕立てる旬会席】</strong> 夕食は食事処「さくら」にて、甲州の特産牛や富士名水豆腐、旬の山菜や魚介をふんだんに使った会席料理。一品一品温かいものは温かく運ばれる丁寧なおもてなしも好評です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hGinkei.hotelMinCharge || 35500).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hGinkei.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: ラビスタ富士河口湖 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-rose-100 text-rose-900 font-black text-xs rounded-full">南仏プロヴァンス調の洋風リゾート・全室富士山ビュー＆無料貸切風呂</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. ラビスタ富士河口湖（共立リゾート）（山梨県南都留郡富士河口湖町河口）</h3>
    </div>
    <span class="px-3 py-1.5 bg-rose-50 border border-rose-300 text-rose-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 ${hLavista.reviewAverage}（${hLavista.reviewCount}件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hLavista.hotelImageUrl}" alt="${hLavista.hotelName} 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hLavista.roomImageUrl || hLavista.hotelImageUrl}" alt="${hLavista.hotelName} ビューバス" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 河口湖を見下ろす高台に佇む南仏プロヴァンス風のリゾートホテル。館内はテラコッタ瓦やアーチ型の回廊が配され、まるで南フランスのプチホテルを訪れたかのようなロマンチックな世界観が女性客やカップルに大人気です。
      </p>
      <p>
        <strong>【富士山を望む天然温泉大浴場＆趣異なる4つの無料貸切風呂】</strong> 富士山を正面に望む大浴場のほか、レンガ造りや檜造りなど趣の異なる4つの貸切風呂が予約不要・無料で利用可能。客室のテラスやビューバスからも雪化粧した富士山の絶景をプライベートに堪能できます。
      </p>
      <p>
        <strong>【プロヴァンス風フレンチディナーと朝食ビュッフェ】</strong> 夕食は甲州ワインと相性抜群の洋風フルコースディナー。朝食は共立リゾートならではの豪華和洋ビュッフェで、焼き立てのパンや山梨県産のフルーツ、名物ほうとうも味わえます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥${Number(hLavista.hotelMinCharge || 30250).toLocaleString()}〜（2名1室利用時）</span>
        <a href="${hLavista.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-rose-700 hover:bg-rose-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="sightseeing" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6 leading-relaxed">
  河口湖冬花火の鑑賞や温泉旅行と合わせて訪れたい、富士五湖エリアを代表する観光名所をWikipedia公式データとともにご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-indigo-700 font-bold text-sm">📍 河口湖（Lake Kawaguchi）</span>
    </div>
    <img src="${wKawaguchiko.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/31111/31111.jpg'}" alt="河口湖" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wKawaguchiko.extract || '河口湖は、山梨県富士河口湖町にある湖。富士五湖の一つで、世界文化遺産「富士山-信仰の対象と芸術の源泉」の構成資産に登録されています。湖畔からは四季折々の富士山の眺望が広がり、冬季は湖上花火大会の舞台となります。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-indigo-700 font-bold text-sm">📍 富士山（Mount Fuji）</span>
    </div>
    <img src="${wFujisan.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/43939/43939.jpg'}" alt="富士山" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wFujisan.extract || '富士山は、山梨県と静岡県に跨る標高3,776メートルの日本最高峰の独立峰。成層火山であり、日本三名山、日本百名山の一つ。2013年に世界文化遺産に登録されました。冬は山頂から中腹にかけて純白の雪で覆われ、年間で最も美しい姿を見せます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-indigo-700 font-bold text-sm">📍 富士五湖（Fuji Five Lakes）</span>
    </div>
    <img src="${wFujigoko.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/29755/29755.jpg'}" alt="富士五湖" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wFujigoko.extract || '富士五湖は、山梨県側の富士山麓に位置する本栖湖、精進湖、西湖、河口湖、山中湖の5つの堰止湖の総称。富士箱根伊豆国立公園に指定されており、各湖から異なる角度の富士山パノラマや温泉、湖上アクティビティが楽しめます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-indigo-700 font-bold text-sm">📍 河口浅間神社（Kawaguchi Asama Shrine）</span>
    </div>
    <img src="${wAsama.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/76942/76942.jpg'}" alt="河口浅間神社" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wAsama.extract || '河口浅間神社は、山梨県南都留郡富士河口湖町河口にある神社。富士山噴火を鎮めるため貞観7年（865年）に建立された古社で、世界文化遺産の構成資産。近年は山腹の遥拝所「天空の鳥居」から鳥居越しに望む富士山の絶景で広く知られます。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  🗺️ 富士山絶景・冬花火・郷土美食を満喫する 1泊2日河口湖王道モデルコース
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-indigo-700 text-white rounded text-xs">1日目</span>
      天空の鳥居遥拝から宿チェックイン、客室露天での夜空花火鑑賞へ
    </h3>
    <p class="leading-relaxed">
      12:00 特急「富士回遊」または車で河口湖に到着 ➔ 地元の名店で熱々の手打ち「名物ほうとう」ランチ ➔ 13:30 河口浅間神社に参拝し、山腹の「天空の鳥居」から鳥居越しにそびえる雪化粧の富士山を撮影 ➔ 15:30 河口湖温泉の宿へチェックイン ➔ 宿の展望足湯やラウンジから夕暮れに染まる富士山の稜線を眺める ➔ 18:00 甲州牛のすき焼きや旬会席ディナーに舌鼓 ➔ 20:00 いよいよ「河口湖 冬花火」が開幕！宿の客室露天風呂や屋上デッキから、頭上に広がる大迫力花火と湖面に映る逆さ花火を独占 ➔ 湯上がりに甲州ワインを味わいながら静寂の夜を過ごす。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-indigo-700 text-white rounded text-xs">2日目</span>
      朝焼けの紅富士と大石公園散策・富士山パノラマロープウェイ
    </h3>
    <p class="leading-relaxed">
      06:45 日の出の時刻に合わせて起床、朝日に照らされて山肌が鮮やかな赤に染まる「紅富士」の奇跡の絶景を露天風呂から拝む ➔ 地元食材が並ぶ美味しい和洋朝食を堪能 ➔ 09:30 チェックアウト後、河口湖北岸の大石公園へ ➔ 白銀の富士山と河口湖を一望する絶景ビューポイントで記念撮影 ➔ 11:30 〜河口湖〜富士山パノラマロープウェイに乗車し、天上山山頂展望台から裾野まで広がる大パノラマを体感 ➔ 13:00 湖畔のカフェで信玄餅スイーツやお土産（甲州ワイン、ほうとう生麺、富士山サブレ）を購入 ➔ 午後、帰路へ。
    </p>
  </div>
</div>

<h2 id="comparison-table" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  📊 河口湖 厳選5ホテルの特徴・温泉・宿泊目安比較一覧
</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
      <tr>
        <th class="p-3">ホテル・旅館名</th>
        <th class="p-3">立地・エリア</th>
        <th class="p-3">楽天評価</th>
        <th class="p-3">宿泊目安(1名)</th>
        <th class="p-3">温泉・富士山ビュー</th>
        <th class="p-3">ディナー・名物料理</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-100 text-stone-700">
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">湖南荘</td>
        <td class="p-3">大池公園前・花火真正面</td>
        <td class="p-3 font-bold text-indigo-700">★ ${hKonansou.reviewAverage}</td>
        <td class="p-3">¥${Number(hKonansou.hotelMinCharge || 26400).toLocaleString()}〜</td>
        <td class="p-3">屋上360度展望足湯・露天風呂付き客室</td>
        <td class="p-3">料亭個室で味わう甲州牛会席</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">秀峰閣 湖月</td>
        <td class="p-3">北岸・全室富士山ビュー</td>
        <td class="p-3 font-bold text-blue-700">★ ${hKogetsu.reviewAverage}</td>
        <td class="p-3">¥${Number(hKogetsu.hotelMinCharge || 26400).toLocaleString()}〜</td>
        <td class="p-3">湖畔庭園露天風呂（遮るものゼロ）</td>
        <td class="p-3">旬素材の創作和食会席・生ビール無料</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">THE KUKUNA</td>
        <td class="p-3">湖畔・全室テラス付き</td>
        <td class="p-3 font-bold text-amber-700">★ ${hKukuna.reviewAverage}</td>
        <td class="p-3">¥${Number(hKukuna.hotelMinCharge || 25300).toLocaleString()}〜</td>
        <td class="p-3">最上階インフィニティ露天「GRAND VISTA」</td>
        <td class="p-3">鉄板焼きフレンチ会席＋ハーフビュッフェ</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">湖楽おんやど富士吟景</td>
        <td class="p-3">東岸高台・逆さ富士</td>
        <td class="p-3 font-bold text-stone-900">★ ${hGinkei.reviewAverage}</td>
        <td class="p-3">¥${Number(hGinkei.hotelMinCharge || 35500).toLocaleString()}〜</td>
        <td class="p-3">絶景展望露天風呂「銘石」</td>
        <td class="p-3">旬の甲州特産牛と名水豆腐会席</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ラビスタ富士河口湖</td>
        <td class="p-3">北岸高台・南仏調</td>
        <td class="p-3 font-bold text-rose-700">★ ${hLavista.reviewAverage}</td>
        <td class="p-3">¥${Number(hLavista.hotelMinCharge || 30250).toLocaleString()}〜</td>
        <td class="p-3">富士山一望大浴場＋4つの無料貸切風呂</td>
        <td class="p-3">洋風フルコース＋豪華朝食ビュッフェ</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  ❓ 河口湖冬花火＆冬の富士山旅行 よくある質問（FAQ）
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-indigo-950">Q1. 河口湖の冬花火は雨や雪でも開催されますか？</h3>
    <p class="text-stone-700 leading-relaxed">
      多少の雨や雪であれば基本的に通常通り開催されます。ただし、強風や荒天によって安全な打ち上げが困難な場合は中止または順延となる場合があります。当日の開催状況は富士河口湖町観光連盟の公式告知をご確認ください。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-indigo-950">Q2. 冬の河口湖の夜間気温とおすすめの防寒対策は？</h3>
    <p class="text-stone-700 leading-relaxed">
      1月〜2月の河口湖畔は夜間にマイナス5℃からマイナス10℃近くまで冷え込みます。湖面からの風も強いため、厚手のロング丈ダウンジャケット、風を通さないパンツ、ニット帽、厚手手袋、マフラー、貼るカイロによる防寒が必須です。また、暖房の効いたホテルの客室露天風呂や展望デッキから鑑賞するのが最も快適な鑑賞法です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-indigo-950">Q3. 車でのアクセス時、チェーンやスタッドレスタイヤは必要ですか？</h3>
    <p class="text-stone-700 leading-relaxed">
      はい、必須です。冬季の中央道や河口湖周辺の道路は、降雪時だけでなく朝晩の放射冷却によって凍結路面（ブラックアイスバーン）となります。ノーマルタイヤでの走行は法令違反および重大事故の原因となりますので、必ずスタッドレスタイヤを装着して走行してください。
    </p>
  </div>
</div>

<h2 id="internal-links" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  📌 あわせて読みたい山梨・甲信越の観光＆温泉特集
</h2>
<div class="p-6 rounded-3xl bg-indigo-50/70 border border-indigo-200 space-y-3 my-6">
  <p class="text-xs text-indigo-900 font-bold mb-2">当サイトでは、富士山麓や甲信越の名湯・絶景宿ガイドを多数公開しています。</p>
  <ul class="text-xs text-indigo-900 space-y-2 list-disc list-inside">
    <li><a href="/prefectures/yamanashi/" class="underline font-bold hover:text-indigo-700">山梨県の温泉旅館・富士山ビュースポット完全ガイド（河口湖・山中湖・石和・甲府）</a></li>
    <li><a href="/posts/winter-yamanashi-kawaguchiko-luxury-fufu-konansou-fuji-stay" class="underline hover:text-indigo-700">河口湖ラグジュアリーステイ！ふふ河口湖・湖南荘の富士山ビュー露天風呂</a></li>
    <li><a href="/posts/charcoal-hearth-sendai-tochigi-wagyu-hotels-guide" class="underline hover:text-indigo-700">炭火炉端と極上和牛！冬の厳選温泉旅館特集</a></li>
    <li><a href="/posts/winter-family-shizuoka-atami-izu-warm-resort-guide" class="underline hover:text-indigo-700">冬のあったかリゾート！熱海・伊豆の温泉旅館＆海鮮グルメ完全ガイド</a></li>
    <li><a href="/posts/winter-brand-tagged-crab-echizen-matsuba-onsen-hotels-guide" class="underline hover:text-indigo-700">冬の味覚の頂点！越前ガニ・松葉ガニと日本海の極上雪見露天風呂ガイド</a></li>
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
    hero_image: hKonansou.hotelImageUrl,
    gallery: [
      hKonansou.hotelImageUrl,
      hKogetsu.hotelImageUrl,
      hKukuna.hotelImageUrl,
      hGinkei.hotelImageUrl,
      hLavista.hotelImageUrl
    ],
    hotel_name: "富士河口湖温泉 湖南荘・秀峰閣 湖月・THE KUKUNA ほか",
    affiliate_url: hKonansou.affiliateUrl,
    categories: [
      "冬のイベント特集",
      "花火大会",
      "富士山ビュー",
      "河口湖",
      "客室露天風呂",
      "天然温泉"
    ],
    price: `¥${Number(hKukuna.hotelMinCharge || 25300).toLocaleString()}〜`,
    rating: hKonansou.reviewAverage || 4.71,
    review_count: hKonansou.reviewCount || 1826,
    date: date,
    is_special_feature: true,
    keywords: [
      "河口湖 冬花火 2027 日程 時間",
      "河口湖 冬花火 見える 宿 ホテル 部屋から",
      "湖南荘 宿泊記 富士山 口コミ 露天風呂",
      "秀峰閣 湖月 予約 逆さ富士",
      "THE KUKUNA ククナ 客室露天風呂",
      "湖楽おんやど富士吟景 銘石 露天風呂",
      "ラビスタ富士河口湖 貸切風呂 フレンチ",
      "河口湖 冬 服装 気温 車 スタッドレス"
    ],
    review: reviewHtml
  };

  const noteMarkdown = `---
title: "${title}"
slug: "${slug}"
date: "${date}"
prefecture: "${prefecture}"
area: "${area}"
tags: ["河口湖", "冬花火", "富士山", "湖南荘", "秀峰閣湖月", "河口湖温泉", "山梨旅行"]
---

# ${title}

2027年1月中旬から2月下旬にかけて開催される「河口湖 冬花火」と、澄み渡る大気の中に雪化粧の富士山が輝く冬の富士五湖完全攻略ガイド！

大池公園・畳岩・八木崎公園の打ち上げポイント、湖面に映る逆さ富士花火、朝焼けに染まる「紅富士」の鑑賞術を網羅。

客室や露天風呂から真正面に富士山と花火を望む河口湖温泉の極上宿など厳選5選をご紹介します。

---

## 💡 現地調査に基づくプロの指南！河口湖冬花火2027攻略＆鑑賞スポットマニュアル

- **日程＆打ち上げ時間:** 2027年1月16日(土)〜2月21日(日)の毎土・日、および2月23日(月・祝「富士山の日」)の20:00〜20:20。
- **メイン会場「大池公園」:** 打ち上げ場所正面で迫力満点。屋台も並ぶ王道スポット。
- **北岸産屋ヶ崎・畳岩エリア:** 富士山を背景に湖面に映る「逆さ富士花火」を撮影できるカメラマンの聖地。
- **極寒の湖畔対策:** 夜間はマイナス5℃以下に。寒風を避けてホテルの客室露天風呂や展望デッキから鑑賞するのが最高の特等席です。

---

## 🏨 富士山と花火を特等席で望む！河口湖温泉の厳選名旅館＆リゾート5選

### 1. 富士河口湖温泉　湖南荘（山梨県南都留郡富士河口湖町船津）
- **特徴:** 大池公園・花火打ち上げ会場の目の前！屋上360度展望足湯から花火と富士山を見上げる絶景。客室露天風呂と料亭個室会席。
- **宿泊目安:** 1名 ¥${Number(hKonansou.hotelMinCharge || 26400).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hKonansou.reviewAverage}（${hKonansou.reviewCount}件）
- 👉 [湖南荘の空室・宿泊プランを見る](${hKonansou.affiliateUrl})

### 2. 富士河口湖温泉　秀峰閣　湖月（山梨県南都留郡富士河口湖町河口）
- **特徴:** 北岸の遮るもののない富士山＆花火パノラマ。全室レイクビュー、湖畔庭園露天風呂と生ビール無料サービス。
- **宿泊目安:** 1名 ¥${Number(hKogetsu.hotelMinCharge || 26400).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hKogetsu.reviewAverage}（${hKogetsu.reviewCount}件）
- 👉 [秀峰閣 湖月の空室・宿泊プランを見る](${hKogetsu.affiliateUrl})

### 3. ＴＨＥ　ＫＵＫＵＮＡ（山梨県南都留郡富士河口湖町浅川）
- **特徴:** 全室ウォーターテラス付きリゾート。最上階インフィニティ露天風呂「GRAND VISTA」から富士山を一望。鉄板焼きフレンチ会席。
- **宿泊目安:** 1名 ¥${Number(hKukuna.hotelMinCharge || 25300).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hKukuna.reviewAverage}（${hKukuna.reviewCount}件）
- 👉 [ＴＨＥ ＫＵＫＵＮＡの空室・宿泊プランを見る](${hKukuna.affiliateUrl})

### 4. 逆さ富士を望む湖畔の絶景宿　湖楽おんやど富士吟景（山梨県南都留郡富士河口湖町浅川）
- **特徴:** 東岸高台から逆さ富士を望む絶景宿。最上階露天風呂「銘石」と旬の甲州特産牛会席。
- **宿泊目安:** 1名 ¥${Number(hGinkei.hotelMinCharge || 35500).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hGinkei.reviewAverage}（${hGinkei.reviewCount}件）
- 👉 [湖楽おんやど富士吟景の空室・宿泊プランを見る](${hGinkei.affiliateUrl})

### 5. ラビスタ富士河口湖（共立リゾート）（山梨県南都留郡富士河口湖町河口）
- **特徴:** 南仏プロヴァンス調の洋風リゾート。全室富士山ビュー、4つの無料貸切風呂、プロヴァンス風フレンチディナー。
- **宿泊目安:** 1名 ¥${Number(hLavista.hotelMinCharge || 30250).toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hLavista.reviewAverage}（${hLavista.reviewCount}件）
- 👉 [ラビスタ富士河口湖の空室・宿泊プランを見る](${hLavista.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **河口湖:** ${wKawaguchiko.extract || '富士五湖の一つで世界文化遺産の構成資産。四季折々の富士山眺望が広がり、冬季は湖上花火大会の舞台となります。'}
- **富士山:** ${wFujisan.extract || '標高3,776メートルの日本最高峰。世界文化遺産。冬は純白の雪で覆われ、年間で最も美しい姿を見せます。'}
- **富士五湖:** ${wFujigoko.extract || '富士山麓に位置する5つの湖の総称。国立公園に指定され、異なる角度の富士山パノラマや温泉が楽しめます。'}
- **河口浅間神社:** ${wAsama.extract || '西暦865年建立の古社で世界遺産構成資産。山腹の「天空の鳥居」から鳥居越しに望む富士山絶景で名高い。'}

---

## 🗺️ 河口湖を満喫する 1泊2日モデルコース

- **1日目:** 河口湖到着 ➔ 名物手打ちほうとうランチ ➔ 河口浅間神社参拝＆天空の鳥居 ➔ 宿へチェックイン ➔ 甲州牛すき焼きディナー ➔ 20:00 河口湖冬花火を客室露天風呂・展望足湯から鑑賞 ➔ 甲州ワインで乾杯
- **2日目:** 朝焼けの「紅富士」を露天風呂から拝む ➔ 朝食ビュッフェ ➔ 大石公園で雪富士記念撮影 ➔ 富士山パノラマロープウェイ ➔ お土産購入 ➔ 帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. 冬花火の打ち上げ場所と時間は？**  
A. 1月中旬〜2月下旬の土日＋2月23日の20:00〜20:20。大池公園、畳岩、八木崎公園の3カ所から一斉に打ち上がります。

**Q2. 寒さを避けて花火を見るおすすめの方法は？**  
A. 大池公園前や北岸の温泉旅館（湖南荘や秀峰閣湖月など）の客室露天風呂や屋上展望足湯から鑑賞するのが暖かく快適です。

**Q3. 車で行く場合スタッドレスタイヤは必要ですか？**  
A. はい、路面凍結（ブラックアイスバーン）が発生するため、スタッドレスタイヤの装着が必須です。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【山梨・河口湖】「河口湖 冬花火2027」完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/${slug}/)
`;

  return { postData, noteMarkdown };
};
