// scripts/new_articles/article52_sagamiko_illumillion.js
module.exports = function buildArticle52(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-kanagawa-sagamiko-illumillion-kanto-three-great-lightup-hotels-guide";
  const title = "【さがみ湖イルミリオン2026-2027】関東三大イルミネーション600万球の絶景と相模湖・高尾山温泉！焚き火コテージ＆極上リゾート宿5選";
  const description = "2026年11月〜2027年5月開催の関東三大イルミネーション「さがみ湖イルミリオン（さがみ湖MORI MORI）」完全ガイド。起伏に富んだ大自然の山腹を埋め尽くす圧巻の600万球、全長250mの「光の虹のリフト」による空中散歩、標高370m「光の観覧車」から望む夜景パノラマ、日帰り温泉「さがみ湖温泉 うるり」を徹底解説。さらにPICAさがみ湖の焚き火テラス付きコテージや、高尾山口駅前の体験型ホテル「タカオネ」、京王プラザホテル八王子など、冬のドライブデートやファミリー旅行に最適な厳選5宿をご紹介します。";
  const date = "2026-11-11";
  const prefecture = "神奈川県";
  const area = "相模湖・津久井・高尾・八王子";

  // ホテル抽出
  const hPica = hotels.find(h => h.hotelNo === 166903) || hotels[0];
  const hTakaone = hotels.find(h => h.hotelNo === 182499) || hotels[1];
  const hKeio = hotels.find(h => h.hotelNo === 1582) || hotels[2];
  const hEmisia = hotels.find(h => h.hotelNo === 262) || hotels[3];
  const hRembrandt = hotels.find(h => h.hotelNo === 1349) || hotels[4];

  // Wikiスポット
  const wForest = wiki["さがみ湖リゾート プレジャーフォレスト"] || {};
  const wLake = wiki["相模湖"] || {};
  const wTakao = wiki["高尾山"] || {};
  const wYakuoin = wiki["高尾山薬王院"] || {};

  const reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-teal-950 via-emerald-950 to-stone-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-emerald-600/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-emerald-300 font-extrabold text-xs tracking-wider">
      <span>🌲</span><span>2026-2027 関東三大イルミネーション さがみ湖イルミリオン＆相模湖・高尾温泉 滞在ガイド</span>
    </div>
    <p class="text-xs text-emerald-100 leading-relaxed">
      600万球の光の絨毯と虹のリフト。焚き火テラスコテージ・駅前体験型リゾート・八王子夜景ホテル特集。
    </p>
  </div>
  <a href="${hPica.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-stone-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    👑 ＰＩＣＡさがみ湖の宿泊プラン・空室を見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 mb-4">
  山の斜面を埋め尽くす600万球の奇跡！関東三大イルミネーション「さがみ湖イルミリオン」の圧倒的スケール
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  都心から中央自動車道や圏央道を使って車で約50分。神奈川県相模原市の山懐、緑豊かな相模湖のほとりに広がる「さがみ湖MORI MORI（旧称：さがみ湖リゾート プレジャーフォレスト）」で開催されるのが、冬の関東を代表する光の祭典「さがみ湖イルミリオン」です。栃木県のあしかがフラワーパーク、神奈川県の江の島「湘南の宝石」と並び、夜景観光コンベンション・ビューローが認定する「関東三大イルミネーション」の一角を占めるこのイベントは、圧倒的なスケール感と豊かな自然地形を活かした立体的な光の演出で、訪れる人々を魅了し続けています。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  最大の特色は、約4万平方メートルもの広大な山の斜面に敷き詰められた「約600万球」ものLEDイルミネーション。平坦な都市部のイルミネーションとは全く異なり、起伏に富んだ地形そのものが光り輝くため、視界一面が光の絨毯となって眼前に迫ります。なかでも全長250メートルにも及ぶ「虹のリフト」は、七色に輝く光の絨毯の上を空中散歩しながら山頂へと登る唯一無二のアトラクション。標高370メートルの山頂に到達すると、大観覧車「光の観覧車」から見渡す360度の大パノラマ夜景が広がり、闇夜に浮かぶ相模湖の稜線と眼下に煌めく光の海が一望できます。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  ただし、山間部にあるさがみ湖の夜は、都心部よりも気温が4〜5度も低く、真冬には氷点下近くまで冷え込みます。さらに鑑賞後は中央道や圏央道の週末渋滞が発生しやすいため、日帰り強行軍では運転疲労でせっかくの余韻が台無しになりがちです。そこでおすすめなのが「近隣ホテルやコテージへの宿泊」です。園内直結のグランピング施設で焚き火バーベキューを楽しむのも良し、高尾山麓の体験型ホテルや八王子の名門シティホテルにステイして温泉や美食を満喫するのも良し。本稿では、さがみ湖イルミリオンの最新みどころ、防寒対策、渋滞回避術、そして予約必至の厳選ホテル5選を余すところなくお届けします。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-6">
  💡 現地調査に基づくプロの指南！さがみ湖イルミリオン攻略＆鑑賞マニュアル
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">虹のリフト・光の観覧車＆キャラクターコラボ</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>「光の虹のリフト」の上り下り絶景:</strong> 全長250mのペアリフトは、上りは虹色の光のトンネルへと吸い込まれるようなワクワク感を、下りは眼下に広がる広大なイルミネーション全景を遮るものなく一望できるスリルと感動を味わえます。リフト乗車中の足元撮影はスマートフォン落下に十分注意してください。</p>
      <p>② <strong>標高370m「光の観覧車」の天空体験:</strong> 山頂エリアにそびえる観覧車はゴンドラ自体も美しくライトアップ。1周約13分間の天空遊覧では、イルミリオン会場の全貌だけでなく、遠く八王子方面の街明かりまでを見渡すロマンティックな特等席となります。</p>
      <p>③ <strong>パディントン ベアや話題のキャラクターコラボエリア:</strong> 毎年人気キャラクターとの大規模コラボレーションエリアが登場し、等身大モニュメントやフォトスポット、限定グッズ、コラボフード＆ホットドリンクが販売されます。お子様連れのファミリーやファンには見逃せないエリアです。</p>
      <p>④ <strong>園内日帰り天然温泉「さがみ湖温泉 うるり」:</strong> イルミネーション鑑賞で冷え切った体をそのまま温められる高濃度炭酸泉・露天岩風呂・サウナを備えた日帰り温泉施設。宿泊者や前売りセット券利用でお得に入浴できます。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">防寒・交通渋滞回避</span>
      <h3 class="text-base font-bold text-stone-900">山間部の厳しい冷え込みと中央道渋滞の回避術</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【都心マイナス5度！山間部特有の強烈な底冷え】</strong> 会場は相模川水系の谷あいに位置するため、夜間は山風が吹き荒れ、放射冷却によって12月〜1月は氷点下まで気温が急降下します。スニーカーではなくボア付き防寒ブーツ、ダウンジャケット、ヒートテック重ね着、厚手の手袋、ニット帽、使い捨てカイロ（靴用・背中用）が必須装備です。</p>
      <p><strong>【中央自動車道・相模湖ICのボトルネック回避】</strong> 週末の点灯直前（16:00〜17:30）は、中央道相模湖IC出口からプレジャーフォレスト駐車場までの国道412号線が激しく渋滞します。15:00前には現地へ到着して日中のアトラクションや温泉を先に楽しむか、JR相模湖駅から運行される路線バスを利用するのが賢明です。</p>
      <p><strong>【宿泊による完全な渋滞回避】</strong> イルミネーション終了後の20時以降、東京方面への上り線は小仏トンネル付近で恒例の渋滞が発生します。園内の「PICAさがみ湖」に宿泊すれば徒歩でそのままコテージへ戻れ、高尾・八王子・立川のホテルを選べば逆方向の下りや一般道で快適にチェックインできます。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  🏨 旅のスタイルで選ぶ！相模湖・高尾・八王子・立川の厳選名宿5選
</h2>

<!-- 宿1: PICAさがみ湖 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">イルミリオン会場直結！焚き火BBQと満天の星を満喫する本格アウトドアコテージリゾート</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. ＰＩＣＡさがみ湖（神奈川県相模原市緑区若柳）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.03（320件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hPica.hotelImageUrl}" alt="PICAさがみ湖 コテージ・トレーラー" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <div class="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 space-y-1">
        <p><strong>交通アクセス:</strong> 中央自動車道「相模湖東出口」より約7分、「相模湖IC」より約10分、JR「相模湖駅」より三ヶ木行きバス約8分</p>
        <p><strong>チェックイン/アウト:</strong> 14:00 / 10:00</p>
        <p><strong>宿泊スタイル:</strong> テラス付きトレーラーコテージ、ログキャビン、焚き火台・ガスグリル完備、冷暖房・シャワー・トイレ完備</p>
      </div>
    </div>
    <div class="md:col-span-7 space-y-3">
      <div class="text-xs md:text-sm text-stone-700 leading-relaxed space-y-2">
        <p>
          「さがみ湖MORI MORI」の広大な敷地内に広がる、関東屈指の人気アウトドア複合リゾート。イルミネーション会場にそのまま直結しているため、点灯終了後も混雑や渋滞に一切巻き込まれることなく、徒歩で自分たちのプライベートコテージへ戻れる唯一無二の贅沢を味わえます。
        </p>
        <p>
          トレーラーハウスや木造コテージには全室に冷暖房が完備されており、真冬でも快適そのもの。屋根付きのウッドデッキテラスには本格的なアメリカンガスグリルや焚き火台が用意されており、パチパチと薪がはぜる炎を眺めながら、ジューシーな骨付き肉や地元野菜のバーベキュー、焼きマシュマロを楽しめます。敷地内の天然温泉「さがみ湖温泉 うるり」も利用可能で、星空の下で心身ともに温まるアウトドアステイが叶います。
        </p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥6,500〜（4名1室利用時）</span>
        <a href="${hPica.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: タカオネ -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">高尾山口駅徒歩1分！中庭で薪割り＆焚き火体験が楽しめる新感覚アウトドアホテル</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. タカオネ（東京都八王子市高尾町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.53（115件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hTakaone.hotelImageUrl}" alt="タカオネ 外観・焚き火ラウンジ" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <div class="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 space-y-1">
        <p><strong>交通アクセス:</strong> 京王線「高尾山口駅」より徒歩1分、相模湖IC・イルミリオン会場より車で約20分</p>
        <p><strong>チェックイン/アウト:</strong> 15:00 / 10:00</p>
        <p><strong>館内設備:</strong> 中庭焚き火スペース（宿泊者薪1束無料）、カフェ＆ダイニング、レンタルシューズ・ウェア、コワーキングスペース</p>
      </div>
    </div>
    <div class="md:col-span-7 space-y-3">
      <div class="text-xs md:text-sm text-stone-700 leading-relaxed space-y-2">
        <p>
          京王線「高尾山口駅」の目の前に位置する、自然と街をシームレスに繋ぐ体験型アクティビティ拠点ホテル。さがみ湖イルミリオン会場からは車で約20分（国道20号線直進）という好アクセスを誇り、イルミと高尾山の大自然を一度に楽しむ拠点として人気が沸騰しています。
        </p>
        <p>
          最大の醍醐味は、宿泊者全員に薪が一束プレゼントされ、ホテルのウッドデッキ中庭で自分で薪を割り、焚き火を起こせること。イルミネーションを満喫した後の夜、温かな炎を囲みながらクラフトビールや特製ホットサングリアを味わう時間は格別です。客室はシンプルで機能的な木質デザインで、ルーフトップやテラス付きルームも完備。隣接する「京王高尾山温泉 / 極楽湯」への湯巡りも楽しめます。
        </p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥6,750〜（2名1室利用時）</span>
        <a href="${hTakaone.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: 京王プラザホテル八王子 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-100 text-stone-900 font-black text-xs rounded-full">JR八王子駅前徒歩1分！洗練されたシティホテルの上質ホスピタリティと美食レストラン</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. 京王プラザホテル八王子（東京都八王子市旭町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.24（3420件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hKeio.hotelImageUrl}" alt="京王プラザホテル八王子 外観・ロビー" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <div class="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 space-y-1">
        <p><strong>交通アクセス:</strong> JR「八王子駅」北口より徒歩1分、京王線「京王八王子駅」より徒歩3分、相模湖へ車・電車で約30分</p>
        <p><strong>チェックイン/アウト:</strong> 15:00 / 11:00</p>
        <p><strong>館内設備:</strong> 鉄板焼「やまなみ」、日本料理「みやま」、中国料理、オールデイダイニング「ル クレール」</p>
      </div>
    </div>
    <div class="md:col-span-7 space-y-3">
      <div class="text-xs md:text-sm text-stone-700 leading-relaxed space-y-2">
        <p>
          JR八王子駅北口のペデストリアンデッキ直結、八王子を代表する本格フルサービスシティホテル。さがみ湖イルミリオンからはJR中央線でわずか3駅（相模湖駅〜高尾駅〜八王子駅、約20分）で到着できるため、電車派・マイカー派の双方にとって極めて利便性の高い拠点となります。
        </p>
        <p>
          名門京王プラザホテルならではの洗練された接客サービスと、ゆったりと落ち着きのある客室空間が旅の疲れを優しく癒やします。最上階の鉄板焼レストランや日本料理店では、特選黒毛和牛や冬の旬の食材を使った贅沢なディナーを堪能可能。朝食ビュッフェではシェフが目の前で焼き上げるオムレツや種類豊富な和洋メニューが並び、翌日の観光に向けて活力あふれる朝を迎えられます。
        </p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥10,195〜（2名1室利用時）</span>
        <a href="${hKeio.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: ホテルエミシア東京立川 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-emerald-100 text-emerald-900 font-black text-xs rounded-full">JR立川駅北口徒歩2分！高コスパ＆充実の和洋朝食ビュッフェが自慢のスタイリッシュホテル</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. ホテルエミシア東京立川（東京都立川市曙町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.38（2750件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hEmisia.hotelImageUrl}" alt="ホテルエミシア東京立川 外観・レストラン" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <div class="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 space-y-1">
        <p><strong>交通アクセス:</strong> JR「立川駅」北口より徒歩2分、中央特快で新宿へ28分、相模湖へ車で約40分</p>
        <p><strong>チェックイン/アウト:</strong> 15:00 / 11:00</p>
        <p><strong>館内設備:</strong> レストラン「ハレカフェ」、全室シモンズ社製ベッド完備、加湿空気清浄機全室設置</p>
      </div>
    </div>
    <div class="md:col-span-7 space-y-3">
      <div class="text-xs md:text-sm text-stone-700 leading-relaxed space-y-2">
        <p>
          多摩エリアの商業中枢・立川駅北口から徒歩2分に位置する、コストパフォーマンスと洗練されたデザイン性を両立した人気ホテル。中央線沿線に位置するため、都心方面からのアクセスが良く、さがみ湖イルミリオン鑑賞後のドライブ帰路の宿泊地として最適です。
        </p>
        <p>
          客室には世界の高級ホテルで愛用されるシモンズ社製ベッドが導入されており、冷えた体と歩き疲れた足を優しく包み込み、深い安眠へと導いてくれます。朝食ビュッフェでは、季節の地元野菜を使った温かいスープや焼き魚、彩り豊かなデリサラダが並び、クチコミ評価でも高い支持を獲得。周辺には映画館や百貨店、昭和記念公園など観光スポットも豊富です。
        </p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥3,990〜（2名1室利用時）</span>
        <a href="${hEmisia.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: レンブラントホテル厚木 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-100 text-stone-900 font-black text-xs rounded-full">圏央道・東名アクセス抜群！駐車場完備＆本格和洋中ディナーを楽しめる県央の拠点ホテル</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. レンブラントホテル厚木（神奈川県厚木市中町）</h3>
    </div>
    <span class="px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.02（2610件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hRembrandt.hotelImageUrl}" alt="レンブラントホテル厚木 外観・客室" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <div class="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 space-y-1">
        <p><strong>交通アクセス:</strong> 小田急線「本厚木駅」北口より徒歩5分、東名「厚木IC」より約10分、圏央道経由で相模湖へ約35分</p>
        <p><strong>チェックイン/アウト:</strong> 14:00 / 11:00</p>
        <p><strong>館内設備:</strong> カフェダイニング「パームツリー」、日本料理「中津川」、中国料理「トルファン」、地下駐車場完備</p>
      </div>
    </div>
    <div class="md:col-span-7 space-y-3">
      <div class="text-xs md:text-sm text-stone-700 leading-relaxed space-y-2">
        <p>
          小田急線本厚木駅から徒歩5分、東名高速道路や圏央道へのアクセスに優れた本格シティホテル。さがみ湖からは圏央道（相模原IC〜圏央厚木IC）を利用して快適なドライブで約35分でアクセスでき、湘南・横浜方面や東名方面への帰路に絶好のロケーションです。
        </p>
        <p>
          広々としたエントランスロビーと落ち着いたインテリアの客室は、ファミリーやカップルでのドライブ旅行に安心感を与えます。館内には本格的な日本料理や中国料理、洋食ブッフェレストランが揃っており、イルミネーション鑑賞で冷えた体に嬉しい温かな鍋料理やコース料理を提供。地下駐車場も完備されており、マイカー派の旅行者に圧倒的な支持を集めています。
        </p>
      </div>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥3,150〜（2名1室利用時）</span>
        <a href="${hRembrandt.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl shadow transition">
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
  さがみ湖イルミリオンとあわせて立ち寄りたい、相模湖・高尾エリアの豊かな自然と名所をご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-emerald-800 font-bold text-sm">📍 さがみ湖MORI MORI（プレジャーフォレスト）</span>
    </div>
    <img src="${wForest.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/166903/166903.jpg'}" alt="さがみ湖MORI MORI" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wForest.extract || 'さがみ湖MORI MORI（旧称：さがみ湖リゾート プレジャーフォレスト）は、神奈川県相模原市緑区にあるアウトドア複合リゾート。遊園地、キャンプ場、バーベキュー場、温泉施設などを併設し、冬季の「さがみ湖イルミリオン」は関東三大イルミネーションとして知られます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-emerald-800 font-bold text-sm">📍 相模湖（Lake Sagami）</span>
    </div>
    <img src="${wLake.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/166903/166903.jpg'}" alt="相模湖" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wLake.extract || '相模湖（さがみこ）は、神奈川県相模原市緑区にある相模ダムによって相模川を堰き止めて造られた人造湖。日本初の人造湖として知られ、湖畔には遊覧船やボート乗り場、レトロな遊技場が並びます。冬の湖面は静寂に包まれ澄んだ山景色を映します。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-emerald-800 font-bold text-sm">📍 高尾山（Mount Takao）</span>
    </div>
    <img src="${wTakao.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/182499/182499.jpg'}" alt="高尾山" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wTakao.extract || '高尾山（たかおさん）は、東京都八王子市にある標高599メートルの山。ミシュラン三ツ星の観光地として世界一の登山者数を誇ります。冬には澄んだ空気の中で山頂から富士山の絶景が望め、冬至前後には「ダイヤモンド富士」も見られます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-emerald-800 font-bold text-sm">📍 高尾山薬王院（Takao-san Yakuoin）</span>
    </div>
    <img src="${wYakuoin.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/1582/1582.jpg'}" alt="高尾山薬王院" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wYakuoin.extract || '高尾山薬王院（たかおさんやくおういん）は、東京都八王子市の高尾山中腹にある真言宗智山派の大本山。天平16年（744年）に行基によって開山された古刹で、天狗信仰の霊山として初詣や厄除けに多くの参拝者が訪れます。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  🗺️ 600万球の光の海と大自然を満喫する 1泊2日相模湖・高尾冬のドライブモデルコース
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-emerald-700 text-white rounded text-xs">1日目</span>
      高尾山絶景ハイキングからさがみ湖イルミリオン、焚き火ナイトへ
    </h3>
    <p class="leading-relaxed">
      10:00 高尾山口駅に到着 ➔ ケーブルカーに乗車し高尾山薬王院へ参拝 ➔ 澄み切った冬晴れの山頂から富士山の大パノラマを展望 ➔ 13:00 名物の高尾山とろろ蕎麦で昼食 ➔ 14:30 車または電車で「さがみ湖MORI MORI」へ移動 ➔ チェックイン（PICAさがみ湖のコテージまたはタカオネ） ➔ 16:30 日没とともに600万球のイルミネーションが一斉点灯！ ➔ 「光の虹のリフト」で空中散歩を楽しみ山頂へ ➔ 「光の観覧車」から360度の光の海を独占 ➔ 19:30 「さがみ湖温泉 うるり」で高濃度炭酸泉と露天風呂を満喫 ➔ 21:00 コテージのテラスで焚き火バーベキューやホットワインで語らう特別な夜。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-emerald-700 text-white rounded text-xs">2日目</span>
      相模湖畔のレトロ散策とお買い物、快適ドライブ帰路
    </h3>
    <p class="leading-relaxed">
      08:30 澄んだ山の空気の中で朝食ホットサンドと挽きたてコーヒー ➔ 10:00 相模湖公園へ立ち寄り、レトロな湖畔射的場や遊覧船「スワン丸」で湖上散歩 ➔ 12:00 地元名産の津久井きなこスイーツや甲州街道の宿場町グルメを堪能 ➔ 14:00 八王子や立川のショッピングモールでお買い物 ➔ 渋滞知らずで夕方にゆったり帰路へ。
    </p>
  </div>
</div>

<h2 id="comparison-table" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  📊 相模湖・高尾・八王子・立川 厳選5宿の特徴・立地・宿泊目安比較一覧
</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
      <tr>
        <th class="p-3">宿名・ホテル名</th>
        <th class="p-3">エリア・アクセス</th>
        <th class="p-3">楽天評価</th>
        <th class="p-3">目安料金</th>
        <th class="p-3">客室・滞在の魅力</th>
        <th class="p-3">おすすめポイント・設備</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-100 text-stone-700">
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ＰＩＣＡさがみ湖</td>
        <td class="p-3">イルミリオン会場直結</td>
        <td class="p-3 text-emerald-700 font-bold">4.03</td>
        <td class="p-3">¥6,500〜</td>
        <td class="p-3">冷暖房完備トレーラー＆コテージ、焚き火テラス</td>
        <td class="p-3 font-semibold text-rose-700">会場徒歩0分・渋滞ゼロ・天然温泉「うるり」隣接</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">タカオネ</td>
        <td class="p-3">高尾山口駅徒歩1分</td>
        <td class="p-3 text-emerald-700 font-bold">4.53</td>
        <td class="p-3">¥6,750〜</td>
        <td class="p-3">中庭薪割り＆焚き火BAR、シンプル木質ルーム</td>
        <td class="p-3">薪1束無料・極楽湯隣接・車で約20分</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">京王プラザホテル八王子</td>
        <td class="p-3">JR八王子駅北口徒歩1分</td>
        <td class="p-3 text-emerald-700 font-bold">4.24</td>
        <td class="p-3">¥10,195〜</td>
        <td class="p-3">名門シティホテルの上質客室＆レストラン</td>
        <td class="p-3">電車で相模湖まで3駅・鉄板焼ディナー</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ホテルエミシア東京立川</td>
        <td class="p-3">JR立川駅北口徒歩2分</td>
        <td class="p-3 text-emerald-700 font-bold">4.38</td>
        <td class="p-3">¥3,990〜</td>
        <td class="p-3">全室シモンズ社製ベッド・スタイリッシュ空間</td>
        <td class="p-3">高コスパ・充実朝食ビュッフェ・中央特快停車</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">レンブラントホテル厚木</td>
        <td class="p-3">本厚木駅徒歩5分 / 厚木IC10分</td>
        <td class="p-3 text-emerald-700 font-bold">4.02</td>
        <td class="p-3">¥3,150〜</td>
        <td class="p-3">ゆったり客室・本格和洋中レストラン</td>
        <td class="p-3">圏央道経由で約35分・地下駐車場完備</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-emerald-700 pb-2 my-8">
  ❓ さがみ湖イルミリオン よくある質問（FAQ）
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-4 rounded-xl bg-stone-50 border border-stone-200">
    <h3 class="font-bold text-stone-900 mb-1">Q1. さがみ湖イルミリオンの開催期間と点灯時間は何時ですか？</h3>
    <p>A. 例年11月上旬から翌年5月中旬まで長期開催されます。点灯時間は時期によって異なり、11月〜1月の冬期は16:00開園、17:00頃より点灯されます（12月は日没が早いため16:30頃に点灯する場合もあります）。</p>
  </div>
  <div class="p-4 rounded-xl bg-stone-50 border border-stone-200">
    <h3 class="font-bold text-stone-900 mb-1">Q2. ペット（愛犬）と一緒にイルミネーションに入場できますか？</h3>
    <p>A. はい、小型犬〜中型犬など体高50cm以下のワンちゃんは同伴入場が可能です（リード着用・マナーウェア着用などの規定あり）。愛犬と一緒に乗れるアトラクションやフォトスポットも用意されています。</p>
  </div>
  <div class="p-4 rounded-xl bg-stone-50 border border-stone-200">
    <h3 class="font-bold text-stone-900 mb-1">Q3. 雨天や雪の日でもイルミネーションは点灯しますか？</h3>
    <p>A. 雨天時でも原則として点灯・営業されます。雨粒にLEDの光が反射して幻想的な写真が撮れる魅力もありますが、屋外山間部のためレインコートや防水ブーツの着用が必須です。リフトや一部アトラクションは強風や荒天時に運休する場合があります。</p>
  </div>
  <div class="p-4 rounded-xl bg-stone-50 border border-stone-200">
    <h3 class="font-bold text-stone-900 mb-1">Q4. 最も混雑を回避できるおすすめの宿泊方法は？</h3>
    <p>A. 会場内にある「PICAさがみ湖」のコテージ宿泊が圧倒的におすすめです。閉園までゆっくりイルミネーションを楽しんでも、そのまま徒歩で温かいコテージに戻ってBBQや焚き火を楽しめるため、渋滞ゼロで最高のリゾート体験ができます。</p>
  </div>
</div>

<div class="my-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-stone-800 space-y-3">
  <h3 class="font-bold text-emerald-900 text-base">まとめ：600万球の光の山と温かい温泉宿で、忘れられない冬の夜を</h3>
  <p class="text-xs md:text-sm leading-relaxed">
    山一面が七色の光で埋め尽くされる関東三大イルミネーション「さがみ湖イルミリオン」。澄み切った星空の下、リフトで光の海を渡り、温かい焚き火や温泉に癒やされる時間は冬だけの特別な贅沢です。週末やクリスマスシーズンは宿泊予約が非常に混み合いますので、ぜひ早めにお気に入りのプランを確保して出かけてみてください。
  </p>
  <div class="pt-2 text-right">
    <a href="${hPica.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="inline-block px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow transition">
      楽天トラベルで相模湖・高尾・八王子の人気宿をチェックする →
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
      "さがみ湖イルミリオン",
      "関東三大イルミネーション",
      "さがみ湖MORI MORI",
      "PICAさがみ湖",
      "タカオネ",
      "京王プラザホテル八王子",
      "ホテルエミシア東京立川",
      "レンブラントホテル厚木",
      "相模湖温泉うるり",
      "冬ドライブデート"
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

2026年11月〜2027年5月開催の関東三大イルミネーション「さがみ湖イルミリオン（さがみ湖MORI MORI）」完全ガイド！

起伏に富んだ大自然の山腹を埋め尽くす圧巻の600万球、全長250mの「光の虹のリフト」による空中散歩、標高370m「光の観覧車」から望む夜景パノラマ、日帰り温泉「さがみ湖温泉 うるり」を徹底解説。

さらにPICAさがみ湖の焚き火テラス付きコテージや、高尾山口駅前の体験型ホテル「タカオネ」、京王プラザホテル八王子など、冬のドライブデートやファミリー旅行に最適な厳選5宿をご紹介します。

---

## 💡 現地調査に基づくプロの指南！さがみ湖イルミリオン攻略＆鑑賞マニュアル

- **山腹一面に広がる600万球の絶景:** 平坦な街中とは別次元のスケール。地形の起伏そのものが光り輝く圧巻のパノラマ。
- **「光の虹のリフト」と「光の観覧車」:** 全長250mの虹色リフトで上空からイルミを見下ろし、標高370mの観覧車から相模湖の夜景を一望。
- **都心マイナス5度の防寒対策:** 山間部の夜は氷点下まで下がるため、防寒ブーツ・ダウン・手袋・マフラー・カイロは必携。
- **渋滞知らずの宿泊プラン:** 園内直結「PICAさがみ湖」のコテージに泊まれば、閉園後も徒歩でそのまま戻って焚き火BBQを満喫可能。

---

## 🏨 旅のスタイルで選ぶ！相模湖・高尾・八王子・立川の厳選名宿5選

### 1. ＰＩＣＡさがみ湖（神奈川県相模原市緑区若柳）
- **特徴:** イルミリオン会場直結！冷暖房完備トレーラー＆コテージ。ウッドデッキで焚き火BBQと満天の星。渋滞ゼロ。
- **宿泊目安:** 1名 ¥${hPica.hotelMinCharge?.toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hPica.reviewAverage}（320件）
- 👉 [ＰＩＣＡさがみ湖の空室・宿泊プランを見る](${hPica.affiliateUrl})

### 2. タカオネ（東京都八王子市高尾町）
- **特徴:** 高尾山口駅徒歩1分！中庭で薪割り＆焚き火BAR体験。京王高尾山温泉極楽湯隣接。車で会場へ約20分。
- **宿泊目安:** 1名 ¥${hTakaone.hotelMinCharge?.toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hTakaone.reviewAverage}（115件）
- 👉 [タカオネの空室・宿泊プランを見る](${hTakaone.affiliateUrl})

### 3. 京王プラザホテル八王子（東京都八王子市旭町）
- **特徴:** JR八王子駅北口徒歩1分！名門シティホテルの上質ホスピタリティ。鉄板焼ディナー。電車で相模湖へ3駅20分。
- **宿泊目安:** 1名 ¥${hKeio.hotelMinCharge?.toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hKeio.reviewAverage}（3420件）
- 👉 [京王プラザホテル八王子の空室・宿泊プランを見る](${hKeio.affiliateUrl})

### 4. ホテルエミシア東京立川（東京都立川市曙町）
- **特徴:** JR立川駅北口徒歩2分！全室シモンズ社製ベッド完備。高コスパ＆充実の和洋朝食ビュッフェ。中央特快直通。
- **宿泊目安:** 1名 ¥${hEmisia.hotelMinCharge?.toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hEmisia.reviewAverage}（2750件）
- 👉 [ホテルエミシア東京立川の空室・宿泊プランを見る](${hEmisia.affiliateUrl})

### 5. レンブラントホテル厚木（神奈川県厚木市中町）
- **特徴:** 本厚木駅徒歩5分／厚木IC10分。圏央道経由で会場へ約35分。本格和洋中レストラン＆地下駐車場完備。
- **宿泊目安:** 1名 ¥${hRembrandt.hotelMinCharge?.toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hRembrandt.reviewAverage}（2610件）
- 👉 [レンブラントホテル厚木の空室・宿泊プランを見る](${hRembrandt.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **さがみ湖MORI MORI:** ${wForest.extract || '遊園地、キャンプ場、バーベキュー場、温泉施設などを併設するアウトドア複合リゾート。関東三大イルミネーションで有名。'}
- **相模湖:** ${wLake.extract || '日本初の人造湖として知られる湖。冬の湖面は静寂に包まれ、遊覧船やレトロな遊技場が並びます。'}
- **高尾山:** ${wTakao.extract || 'ミシュラン三ツ星の観光地。冬には澄んだ空気の中で山頂から富士山の絶景が望めます。'}
- **高尾山薬王院:** ${wYakuoin.extract || '行基によって開山された古刹。天狗信仰の霊山として初詣や厄除けに多くの参拝者が訪れます。'}

---

## 🗺️ 相模湖・高尾を満喫する 1泊2日ドライブモデルコース

- **1日目:** 高尾山に到着 ➔ ケーブルカーで薬王院参拝＆山頂から富士山を展望 ➔ 名物とろろ蕎麦ランチ ➔ さがみ湖へ移動しチェックイン ➔ 16:30 600万球のイルミリオン点灯！ ➔ 虹のリフト＆光の観覧車 ➔ 「さがみ湖温泉 うるり」で温まる ➔ コテージで焚き火BBQ
- **2日目:** 山の澄んだ空気でコーヒー朝食 ➔ 相模湖公園でレトロ散策＆遊覧船 ➔ 八王子でお買い物 ➔ 渋滞知らずで夕方に帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. さがみ湖イルミリオンの開催期間と点灯時間は？**  
A. 11月上旬から翌年5月中旬まで開催。冬期は17:00頃から点灯されます。

**Q2. ペット同伴は可能？**  
A. 体高50cm以下のワンちゃんであれば同伴入場が可能です。

**Q3. 一番おすすめの宿泊先は？**  
A. 渋滞を完全に回避してイルミ会場から徒歩で戻れる「PICAさがみ湖」のコテージが最高です。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【さがみ湖イルミリオン2026-2027】関東三大イルミネーション600万球の絶景と相模湖・高尾山温泉完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/posts/${slug})
`;

  return { postData, noteMarkdown };
};
