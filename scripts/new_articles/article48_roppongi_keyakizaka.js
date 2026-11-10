// scripts/new_articles/article48_roppongi_keyakizaka.js
module.exports = function buildArticle48(themeData) {
  const hotels = themeData.hotels;
  const wiki = themeData.wiki;

  const slug = "winter-tokyo-roppongi-hills-keyakizaka-illumination-luxury-hotels-guide";
  const title = "【六本木】六本木ヒルズけやき坂イルミネーション2026＆東京ミッドタウン完全攻略！80万球の白銀スノー＆ブルーと東京タワー冬夜景、クリスマスディナーと憧れの超高層ラグジュアリーホテル5選";
  const description = "2026年11月上旬〜12月25日開催の「六本木ヒルズけやき坂イルミネーション」と東京ミッドタウンの冬夜景を徹底解説。約400mのけやき坂通りを約80万球のLEDが白銀に染め上げる「SNOW & BLUE」と東京タワーの奇跡のコラボレーション、大屋根プラザの本場ドイツ・クリスマスマーケット、毛利庭園の水面ライトアップ鑑賞ルートを網羅。グランドハイアット東京やザ・リッツ・カールトン東京、オークラ東京など、客室から東京タワー夜景を独占し、至高のクリスマスディナーを堪能できる厳選ラグジュアリーホテル5選をご紹介。";
  const date = "2026-11-10";
  const prefecture = "東京都";
  const area = "六本木・赤坂・虎ノ門";

  // ホテル抽出
  const hGrandHyatt = hotels.find(h => h.hotelNo === 180552) || hotels[0];
  const hRitz = hotels.find(h => h.hotelNo === 64045) || hotels[1];
  const hOkura = hotels.find(h => h.hotelNo === 184582) || hotels[2];
  const hMitsui = hotels.find(h => h.hotelNo === 177558) || hotels[3];
  const hAndaz = hotels.find(h => h.hotelNo === 181166) || hotels[4];

  // Wikiスポット
  const wRoppongiHills = wiki["六本木ヒルズ"] || {};
  const wTokyoTower = wiki["東京タワー"] || {};
  const wMidtown = wiki["東京ミッドタウン"] || {};
  const wAkasakaSacas = wiki["赤坂サカス"] || {};

  const reviewHtml = `
<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-950 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-blue-800/40">
  <div class="space-y-1 text-center sm:text-left">
    <div class="flex items-center justify-center sm:justify-start gap-2 text-cyan-300 font-extrabold text-xs tracking-wider">
      <span>✨</span><span>2026冬 六本木ヒルズけやき坂＆東京ミッドタウン 最新現地滞在ガイド</span>
    </div>
    <p class="text-xs text-blue-100 leading-relaxed">
      11月上旬〜12月25日開催！80万球の白銀LEDと東京タワーが交差する東京屈指の冬絶景。六本木ヒルズ直結＆極上夜景ホテル特集。
    </p>
  </div>
  <a href="${hGrandHyatt.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="shrink-0 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-stone-950 font-black text-xs rounded-xl shadow transition-all transform hover:scale-105">
    👑 グランドハイアット東京の空室・宿泊プランを見る →
  </a>
</div>

<h2 id="intro" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 mb-4">
  白銀の光の坂道と東京タワーが織りなす冬の奇跡！六本木ヒルズけやき坂イルミネーションの圧倒的魅力
</h2>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  冬の東京において、最も洗練された大人の高揚感に包まれる場所といえば、間違いなく六本木です。その中心を担うのが、毎年11月上旬から12月25日のクリスマス当日まで開催される「六本木ヒルズ けやき坂イルミネーション」。約400メートルにわたって緩やかなカーブを描くけやき坂通りの並木道が、約80万球の白と青のLEDに覆われ、まるで雪が舞い降りたかのような幻想的な「SNOW & BLUE」の光のトンネルへと変貌を遂げます。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-4">
  けやき坂イルミネーションの最大のハイライトは、冷たく澄んだ冬の夜空に凛と浮かび上がる「東京タワー」とのドラマティックなコントラストです。白銀のLEDが放つクールな輝きの先に見える、暖色系オレンジにライトアップされた東京タワーの温もり。大都会東京のスタイリッシュさとエモーショナルな情感が最高潮で溶け合うこの景観は、国内外の旅行者や写真愛好家を惹きつけてやみません。
</p>
<p class="text-sm md:text-base text-stone-700 leading-relaxed mb-6">
  さらに六本木ヒルズの大屋根プラザでは、世界最大級の歴史を誇るドイツ・シュツットガルトのクリスマスマーケットを再現した本格マーケットが開催され、本場直送のオーナメントやホットワイン（グリューワイン）、焼きソーセージの香ばしい湯気が漂います。隣接する東京ミッドタウンのゴールドに輝く光の散歩道や屋外スケートリンク、毛利庭園の水鏡に映る幽玄なライトアップなど、街全体がフェスティブな喜びに満たされます。本稿では、けやき坂イルミネーションのベスト撮影ポジションから混雑回避術、そして客室から東京タワー夜景を独占できる憧れの超高層ラグジュアリーホテル5選を徹底解説します。
</p>

<h2 id="event-guide" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-6">
  💡 現地調査に基づくプロの指南！けやき坂＆六本木冬夜景攻略マニュアル
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-indigo-100 text-indigo-800 font-extrabold text-xs rounded-lg">鑑賞ハイライト</span>
      <h3 class="text-base font-bold text-stone-900">点灯時間・ベスト撮影アングル＆見どころ</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p>① <strong>けやき坂連絡ブリッジ（六本木ヒルズアリーナ上部歩道橋）:</strong> けやき坂通りの中央を走るカーブと、その正面に完璧なプロポーションでそびえ立つ東京タワーを真正面から撮影できる特等席。三脚は禁止のため、手ブレ補正を効かせたスマートフォンや明るい単焦点レンズでの撮影が理想的です。点灯直後の17:00と、20:30以降が比較的撮影しやすい時間帯です。</p>
      <p>② <strong>六本木けやき坂通り「ティファニー」前横断歩道付近:</strong> 地上からのアングルでは、高級ブティックのショーウィンドウの灯りと、頭上を覆い尽くす白銀のイルミネーション、奥に見える東京タワーが重なり、奥行き感のある映画のワンシーンのような一枚が狙えます。</p>
      <p>③ <strong>六本木ヒルズ 大屋根プラザ「クリスマスマーケット2026」:</strong> ドイツの老舗オーナメントブランド「ケーテ・ウォルファルト」のブースをはじめ、木工工芸品やくるみ割り人形がずらりと並びます。シナモンやクローブが香る本場仕込みのグリューワインで芯から冷えた体を温めるのが醍醐味です。</p>
      <p>④ <strong>毛利庭園の冬ライトアップ:</strong> 江戸時代の大名屋敷跡に造られた日本庭園。池の水面に六本木ヒルズ森タワーの灯りと木々のライトアップが鮮やかに反転投影され、静寂と近未来感が共存する隠れた名スポットです。</p>
    </div>
  </div>

  <div class="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
    <div class="flex items-center gap-2 border-b border-stone-100 pb-3">
      <span class="px-2.5 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-lg">滞在・寒風対策テクニック</span>
      <h3 class="text-base font-bold text-stone-900">ビル風対策・混雑ピーク・移動術</h3>
    </div>
    <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
      <p><strong>【すり鉢地形と高層ビル風の冷え込み対策】</strong> 六本木けやき坂は高低差のあるすり鉢状の地形になっており、さらに周囲の高層ビル群の影響で急激なビル風が吹き抜けます。体感温度は氷点下近くまで下がることが多いため、防風性の高いロングコートやダウン、保温機能付き手袋、マフラーは必須の装備です。</p>
      <p><strong>【週末・12月中旬以降の混雑ピーク回避】</strong> 12月に入ると特に金・土・日・祝日の17:30〜19:30はけやき坂歩道や連絡ブリッジが入場規制に近い混雑となります。ゆったりと光のトンネルを歩くなら、日没前の16:30から待機して17:00の点灯瞬間を迎えるか、ディナー後の21:30以降（消灯は23:00）に訪れるのがプロの歩き方です。</p>
      <p><strong>【東京ミッドタウンへのスマート移動ルート】</strong> 六本木ヒルズから東京ミッドタウンへは徒歩約10〜15分。外苑東通りを歩くよりも、ヒルズのメトロハットから日比谷線六本木駅地下通路を経由して大江戸線方面へ抜けると、寒風を避けて快適に移動できます。</p>
    </div>
  </div>
</div>

<h2 id="hotel-selection" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  🏨 旅の目的に応じて選ぶ！六本木・赤坂・虎ノ門の厳選名ホテル5選
</h2>

<!-- 宿1: グランド ハイアット 東京 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-indigo-100 text-indigo-900 font-black text-xs rounded-full">六本木ヒルズ直結・けやき坂イルミネーションを眼下に望む最高峰の拠点</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">1. グランドハイアット東京（東京都港区六本木）</h3>
    </div>
    <span class="px-3 py-1.5 bg-indigo-50 border border-indigo-300 text-indigo-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.44（608件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hGrandHyatt.hotelImageUrl}" alt="グランドハイアット東京 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hGrandHyatt.roomImageUrl || hGrandHyatt.hotelImageUrl}" alt="グランドハイアット東京 客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 六本木ヒルズの敷地内に完全に組み込まれたワールドクラスのラグジュアリーホテル。ホテルを出て数歩でけやき坂イルミネーションの光のトンネルへと繰り出せる、冬の六本木滞在における究極のロケーションを誇ります。
      </p>
      <p>
        <strong>【モダンで洗練された広々とした客室空間】</strong> 客室は標準でも42平米以上のゆとりを持ち、天然木と厳選されたファブリックが温もりあるモダン空間を創出。深めのインフィニティバスタブを備えた大理石バスルームで、冷えた体を極上のリラックスへと導きます。
      </p>
      <p>
        <strong>【10の多彩なレストラン＆バーと至福の朝食】</strong> ステーキハウス「オーク ドア」やオールデイダイニング「フレンチ キッチン」など、国内外の美食家を唸らせる名店が勢揃い。フレンチ キッチンの朝食ビュッフェでは、芳醇な発酵バターの香る焼きたてクロワッサンやトリュフ風味のエッグベネディクトを堪能できます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥46,679〜（2名1室利用時）</span>
        <a href="${hGrandHyatt.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-indigo-700 hover:bg-indigo-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿2: ザ・リッツ・カールトン東京 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-amber-100 text-amber-900 font-black text-xs rounded-full">東京ミッドタウン最上層・地上200m超から望む東京タワー＆富士山のパノラマ絶景</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">2. ザ・リッツ・カールトン東京（東京都港区赤坂・六本木）</h3>
    </div>
    <span class="px-3 py-1.5 bg-amber-50 border border-amber-300 text-amber-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.50（547件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hRitz.hotelImageUrl}" alt="ザ・リッツ・カールトン東京 外観・ロビー" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hRitz.roomImageUrl || hRitz.hotelImageUrl}" alt="ザ・リッツ・カールトン東京 客室からの夜景" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 東京ミッドタウンのシンボルタワー「ミッドタウン・タワー」の最上層（45階〜53階）に位置する最高峰ホテル。45階のロビーに降り立った瞬間、巨大なガラス窓の向こうに広がる東京タワーと果てしない東京の夜景がゲストを圧倒します。
      </p>
      <p>
        <strong>【全室52平米以上の圧倒的な広さと東京タワービュー客室】</strong> 東向きの客室からは、ライトアップされた東京タワーを正面に見下ろす息をのむような絶景を独占。エジプト綿のシーツ、贅沢な羽毛ベッド、Aspreyのアメニティが揃い、生涯の想い出に残るクリスマスナイトを約束します。
      </p>
      <p>
        <strong>【伝説のクラブラウンジと53階からの眺望体験】</strong> クラブフロア宿泊者専用の53階クラブラウンジでは、専任コンシェルジュによるチェックイン、アフタヌーンティー、イブニングカクテルなど1日5回の贅沢なフードプレゼンテーションを堪能できます。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥59,547〜（2名1室利用時）</span>
        <a href="${hRitz.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿3: The Okura Tokyo（オークラ東京） -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-stone-100 text-stone-900 font-black text-xs rounded-full">日本の伝統美と現代の機能美が融合した静謐の最高峰「日本の迎賓館」</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">3. オークラ東京（The Okura Tokyo）（東京都港区虎ノ門）</h3>
    </div>
    <span class="px-3 py-1.5 bg-stone-50 border border-stone-300 text-stone-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.16（150件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hOkura.hotelImageUrl}" alt="オークラ東京 外観・ロビー" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hOkura.roomImageUrl || hOkura.hotelImageUrl}" alt="オークラ東京 プレステージタワー客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 虎ノ門の高台に佇む、日本を代表する名門ホテル。谷口吉生氏の設計により復元されたメインロビーは、古墳時代の首飾りをモチーフにした「オークラ・ランタン」が穏やかな光を放ち、訪れるすべての人を格調高い静寂で包み込みます。
      </p>
      <p>
        <strong>【プレステージタワーとヘリテージウイングの2棟構成】</strong> 超高層の「オークラ プレステージタワー」からはダイナミックな都心の夜景が広がり、低層の「オークラ ヘリテージウイング」は全室スチームサウナとジェットバスを完備したプライベート邸宅の趣。冬の澄み切った空気に包まれながら贅沢な温もりを堪能できます。
      </p>
      <p>
        <strong>【伝統のフランス料理「ヌーヴェル・エポック」と伝説のフレンチトースト】</strong> フランス料理の殿堂「ヌーヴェル・エポック」でのフェスティブディナーは一皿一皿が芸術品。翌朝は、丸一日卵液に浸してじっくり焼き上げるオークラ伝統のフレンチトーストを味わう至福のモーニングが待っています。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥40,480〜（2名1室利用時）</span>
        <a href="${hOkura.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿4: 三井ガーデンホテル六本木プレミア -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-rose-100 text-rose-900 font-black text-xs rounded-full">六本木駅徒歩5分・最上階バルコニーレストランから東京タワーを真正面に仰ぐ大人の隠れ家</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">4. 三井ガーデンホテル六本木プレミア（東京都港区六本木）</h3>
    </div>
    <span class="px-3 py-1.5 bg-rose-50 border border-rose-300 text-rose-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.36（512件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hMitsui.hotelImageUrl}" alt="三井ガーデンホテル六本木プレミア 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hMitsui.roomImageUrl || hMitsui.hotelImageUrl}" alt="三井ガーデンホテル六本木プレミア レストランテラス・客室" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 地下鉄六本木駅5番出口から徒歩約5分。芋洗坂を下りた閑静なエリアに佇むスタイリッシュなアップスケールホテル。けやき坂イルミネーションや東京ミッドタウンへも徒歩圏内という抜群の機動力を誇ります。
      </p>
      <p>
        <strong>【和モダンとファブリックが調和したハイセンス客室】</strong> 客室はダークトーンと温かみのある木目を基調とし、全室バス・トイレセパレート。レインシャワーを備えた洗い場付きバスルームで、街歩きの疲れをゆったりと癒せます。
      </p>
      <p>
        <strong>【最上階「BALCÓN TOKYO」の圧倒的な東京タワービュー】</strong> 14階に位置するレストラン＆バー「バルコン・トーキョー」のオープンエアテラスからは、漆黒の夜空に輝く東京タワーをほぼ同じ目線で一望。シャンパンを傾けながら楽しむクリスマスディナーや、東京タワーを仰ぎながらのプレミアムブレックファストは格別です。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥16,348〜（2名1室利用時）</span>
        <a href="${hMitsui.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-rose-700 hover:bg-rose-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<!-- 宿5: アンダーズ 東京 -->
<div class="my-8 p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-md space-y-5">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-stone-100 pb-4 gap-2">
    <div>
      <span class="px-3 py-1 bg-cyan-100 text-cyan-900 font-black text-xs rounded-full">虎ノ門ヒルズ最上層・52階ルーフトップバーと円形バスタブから都心の夜景を抱くハイエンド宿</span>
      <h3 class="text-lg md:text-xl font-extrabold text-stone-900 mt-1">5. アンダーズ東京（東京都港区虎ノ門）</h3>
    </div>
    <span class="px-3 py-1.5 bg-cyan-50 border border-cyan-300 text-cyan-900 font-black text-xs rounded-xl">⭐ 楽天トラベル評価 4.00（107件）</span>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
    <div class="md:col-span-5 space-y-3">
      <img src="${hAndaz.hotelImageUrl}" alt="アンダーズ東京 外観" class="w-full h-52 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
      <img src="${hAndaz.roomImageUrl || hAndaz.hotelImageUrl}" alt="アンダーズ東京 客室円形バスタブ・夜景" class="w-full h-40 object-cover rounded-2xl border border-stone-200 shadow-xs" loading="lazy" />
    </div>
    <div class="md:col-span-7 space-y-3 text-xs md:text-sm text-stone-700 leading-relaxed">
      <p>
        <strong>【宿の魅力とロケーション】</strong> 虎ノ門ヒルズ森タワーの47階〜52階に位置するハイアット系列のライフスタイルホテル。障子や和紙、木材を巧みに取り入れたデザインは、洗練された都会の邸宅そのもの。六本木へも車でわずか数分の至近距離です。
      </p>
      <p>
        <strong>【全室50平米以上・象徴的な円形バスタブ】</strong> 客室の窓からは東京湾や皇居、東京タワーの広大なパノラマが眼下に広がります。特に日本の五右衛門風呂を現代風に再解釈した深めの円形バスタブに浸かりながら眺める夜景は、至高のラグジュアリー体験です。
      </p>
      <p>
        <strong>【52階ルーフトップバーのドラマティックなカクテルタイム】</strong> 最上階52階の半屋外ルーフトップバーからは、東京湾とお台場、レインボーブリッジの夜景を一望。季節のオリジナルミクソロジーカクテルとともに、東京の冬の夜をドラマティックに締めくくります。
      </p>
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100">
        <span class="font-bold text-stone-900 text-xs">宿泊目安: 1名あたり ¥57,348〜（2名1室利用時）</span>
        <a href="${hAndaz.affiliateUrl}" target="_blank" rel="sponsored noopener noreferrer" class="px-5 py-2.5 bg-cyan-700 hover:bg-cyan-600 text-white font-black text-xs rounded-xl shadow transition">
          楽天トラベルでプラン・空室状況を見る →
        </a>
      </div>
    </div>
  </div>
</div>

<h2 id="sightseeing" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  📸 宿の近隣観光地ガイド（現地観光案内アーカイブ連携）
</h2>
<p class="text-xs md:text-sm text-stone-600 mb-6 leading-relaxed">
  けやき坂イルミネーションとあわせて巡りたい、六本木・赤坂・虎ノ門エリアを代表するランドマークを現地観光案内アーカイブとともにご紹介します。
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-indigo-700 font-bold text-sm">📍 六本木ヒルズ（Roppongi Hills）</span>
    </div>
    <img src="${wRoppongiHills.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/180552/180552.jpg'}" alt="六本木ヒルズ" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wRoppongiHills.extract || '六本木ヒルズ（ろっぽんぎヒルズ）は、東京都港区六本木六丁目にある複合施設。六本木ヒルズ森タワーを中心に、ホテル、映画館、美術館、住宅、商業施設が一体となった文化都心。冬にはけやき坂イルミネーションやクリスマスマーケットで賑わいます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-indigo-700 font-bold text-sm">📍 東京タワー（Tokyo Tower）</span>
    </div>
    <img src="${wTokyoTower.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/64045/64045.jpg'}" alt="東京タワー" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wTokyoTower.extract || '東京タワー（とうきょうタワー）は、東京都港区芝公園にある総合電波塔。高さ332.9メートル。1958年の完成以来、東京のシンボルとして愛され続けており、冬のイルミネーション期間中はけやき坂の白銀の光越しに輝くランドマークライトが絶大な人気を誇ります。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-indigo-700 font-bold text-sm">📍 東京ミッドタウン（Tokyo Midtown）</span>
    </div>
    <img src="${wMidtown.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/177558/177558.jpg'}" alt="東京ミッドタウン" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wMidtown.extract || '東京ミッドタウン（とうきょうミッドタウン）は、東京都港区赤坂九丁目にある複合施設。広大な緑地と名門ホテル、サントリー美術館、商業施設が融合。冬には「MIDTOWN CHRISTMAS」が開催され、ゴールドの散歩道や屋外アイススケートリンクが展開されます。'}
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
    <div class="flex items-center gap-2">
      <span class="text-indigo-700 font-bold text-sm">📍 赤坂サカス（Akasaka Sacas）</span>
    </div>
    <img src="${wAkasakaSacas.thumbnail || 'https://img.travel.rakuten.co.jp/share/HOTEL/184582/184582.jpg'}" alt="赤坂サカス" class="w-full h-44 object-cover rounded-xl border border-stone-200 shadow-xs" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed">
      ${wAkasakaSacas.extract || '赤坂サカス（あかさかサカス）は、東京都港区赤坂五丁目のTBS放送センター周辺にある複合エリア。TBS赤坂ACTシアターや赤坂Bizタワーが並び、洗練された大人のエンターテインメントとグルメが集結しています。'}
    </p>
  </div>
</div>

<h2 id="model-course" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  🗺️ 白銀イルミと東京タワー夜景を満喫する 1泊2日六本木冬のラグジュアリーモデルコース
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm text-stone-700">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-indigo-700 text-white rounded text-xs">1日目</span>
      六本木チェックインからクリスマスマーケット散策、けやき坂点灯＆東京タワー夜景ディナー
    </h3>
    <p class="leading-relaxed">
      14:00 グランドハイアット東京またはザ・リッツ・カールトン東京にチェックイン ➔ 森美術館で現代アートを鑑賞 ➔ 15:30 大屋根プラザの「クリスマスマーケット」へ繰り出し、ドイツ直輸入の木工細工やオーナメントを眺めながら温かいグリューワインで乾杯 ➔ 16:45 けやき坂連絡ブリッジでスタンバイ ➔ 17:00 80万球の「SNOW & BLUE」が一斉点灯！白銀の光の坂道と正面の東京タワーが重なる絶景を撮影 ➔ 毛利庭園のライトアップを散策 ➔ 19:30 ホテルのメインダイニングでフェスティブコースディナーを堪能 ➔ 22:00 客室のプライベートな窓辺から、深夜に静かに輝く東京タワー夜景をシャンパンとともに心ゆくまで鑑賞。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
    <h3 class="font-extrabold text-stone-900 text-sm flex items-center gap-2">
      <span class="px-2 py-0.5 bg-indigo-700 text-white rounded text-xs">2日目</span>
      贅沢ホテル朝食から東京ミッドタウンのアイスリンク体験とお買い物
    </h3>
    <p class="leading-relaxed">
      08:00 ホテルラウンジまたはレストランで焼きたてペストリーとエッグベネディクトの優雅な朝食ビュッフェ ➔ 10:00 スパ＆フィットネスの温水プールで冬の朝の心地よいリフレッシュ ➔ 11:30 チェックアウト後、東京ミッドタウンへ ➔ 芝生広場の「MIDTOWN ICE RINK」で都内最大級の屋外アイススケートを楽しむ ➔ ガレリアの上質なショップで自分へのクリスマスギフトやスイーツを購入 ➔ 14:00 赤坂方面へ足を延ばし名店でランチ ➔ 充実感あふれる想い出とともに冬の六本木を後に。
    </p>
  </div>
</div>

<h2 id="comparison-table" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  📊 六本木・赤坂・虎ノ門 厳選5ホテルの特徴・立地・宿泊目安比較一覧
</h2>

<div class="overflow-x-auto my-6">
  <table class="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden shadow-xs">
    <thead class="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
      <tr>
        <th class="p-3">ホテル名</th>
        <th class="p-3">エリア・最寄り</th>
        <th class="p-3">楽天評価</th>
        <th class="p-3">目安料金</th>
        <th class="p-3">客室・夜景のハイライト</th>
        <th class="p-3">レストラン・ダイニングの魅力</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-stone-100 text-stone-700">
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">グランドハイアット東京</td>
        <td class="p-3">六本木ヒルズ直結</td>
        <td class="p-3 font-bold text-indigo-700">★ ${hGrandHyatt.reviewAverage}</td>
        <td class="p-3">¥${hGrandHyatt.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">けやき坂イルミ徒歩0分・大理石深めバス・全室42㎡以上</td>
        <td class="p-3">「オーク ドア」「フレンチ キッチン」など10の名店</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">ザ・リッツ・カールトン東京</td>
        <td class="p-3">東京ミッドタウン直結</td>
        <td class="p-3 font-bold text-indigo-700">★ ${hRitz.reviewAverage}</td>
        <td class="p-3">¥${hRitz.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">地上200m超最上層・東京タワー真正面・全室52㎡以上</td>
        <td class="p-3">53階クラブラウンジの1日5回プレゼンテーション</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">オークラ東京（The Okura Tokyo）</td>
        <td class="p-3">虎ノ門・神谷町徒歩6分</td>
        <td class="p-3 font-bold text-indigo-700">★ ${hOkura.reviewAverage}</td>
        <td class="p-3">¥${hOkura.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">日本の迎賓館・タワー夜景またはスチームサウナ付き客室</td>
        <td class="p-3">フレンチ「ヌーヴェル・エポック」＆伝統フレンチトースト</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">三井ガーデンホテル六本木プレミア</td>
        <td class="p-3">六本木駅徒歩5分</td>
        <td class="p-3 font-bold text-indigo-700">★ ${hMitsui.reviewAverage}</td>
        <td class="p-3">¥${hMitsui.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">洗い場付きバス・ハイセンス客室・夜景コスパ最高峰</td>
        <td class="p-3">14階「BALCÓN TOKYO」テラスから東京タワー独占</td>
      </tr>
      <tr class="hover:bg-stone-50">
        <td class="p-3 font-bold text-stone-900">アンダーズ東京</td>
        <td class="p-3">虎ノ門ヒルズ直結</td>
        <td class="p-3 font-bold text-indigo-700">★ ${hAndaz.reviewAverage}</td>
        <td class="p-3">¥${hAndaz.hotelMinCharge?.toLocaleString()}〜</td>
        <td class="p-3">47階以上超高層・円形バスタブ・ベイ＆タワーパノラマ</td>
        <td class="p-3">52階ルーフトップバー＆セミオープンエアーカクテル</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="faq" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  ❓ 六本木ヒルズけやき坂イルミネーション よくある質問（FAQ）
</h2>

<div class="space-y-4 my-6 text-xs md:text-sm">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-indigo-950">Q1. けやき坂イルミネーションの点灯時間と期間は？</h3>
    <p class="text-stone-700 leading-relaxed">
      点灯期間は毎年11月上旬から12月25日のクリスマス当日まで。点灯時間は毎日17:00から23:00までとなります。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-indigo-950">Q2. 東京タワーとイルミネーションを一緒に撮る一番のスポットはどこですか？</h3>
    <p class="text-stone-700 leading-relaxed">
      六本木ヒルズアリーナ上部の「けやき坂連絡ブリッジ」からの眺めがベストです。橋の上からけやき坂通りの緩やかなカーブと奥の東京タワーがシンメトリーに重なり合います。混雑するため、三脚は使わず手持ち撮影を徹底しましょう。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
    <h3 class="font-bold text-stone-900 text-sm text-indigo-950">Q3. クリスマスディナーや客室予約のベストなタイミングは？</h3>
    <p class="text-stone-700 leading-relaxed">
      六本木のラグジュアリーホテル（特に東京タワービュー客室やクラブラウンジ付きプラン）は、10月中旬〜11月上旬にはクリスマス期間の週末がほぼ満室となります。12月の予約を検討している場合は、1日でも早い確保が成約の鉄則です。
    </p>
  </div>
</div>

<h2 id="internal-links" class="text-xl md:text-2xl font-bold text-stone-900 border-b-2 border-indigo-700 pb-2 my-8">
  📌 あわせて読みたい東京・全国のイルミネーション＆冬夜景特集
</h2>
<div class="p-6 rounded-3xl bg-indigo-50/70 border border-indigo-200 space-y-3 my-6">
  <p class="text-xs text-indigo-900 font-bold mb-2">当サイトでは、東京および全国の絶景イルミネーションや最高峰ホテルを満喫できる特集記事を多数公開しています。</p>
  <ul class="text-xs text-indigo-900 space-y-2 list-disc list-inside">
    <li><a href="/prefectures/tokyo/" class="underline font-bold hover:text-indigo-700">東京都の高級ホテル・旅館＆人気観光名所完全ガイド</a></li>
    <li><a href="/posts/winter-tokyo-marunouchi-illumination-tokyo-station-luxury-hotels-guide" class="underline hover:text-indigo-700">丸の内イルミネーション2026＆東京駅丸の内駅舎ライトアップ名門ホテルガイド</a></li>
    <li><a href="/posts/winter-kanagawa-yokohama-redbrick-christmas-market-minatomirai-hotels-guide" class="underline hover:text-indigo-700">横浜赤レンガ倉庫クリスマスマーケット2026＆みなとみらい冬夜景ホテルガイド</a></li>
    <li><a href="/posts/autumn-november-nabananosato-huistenbosch-hakodate-ashikaga-illumination-guide" class="underline hover:text-indigo-700">なばなの里＆全国人気イルミネーション名所とおすすめリゾートホテル特集</a></li>
    <li><a href="/posts/winter-osaka-hikari-renaissance-nakanoshima-midosuji-hotels-guide" class="underline hover:text-indigo-700">OSAKA光のルネサンス2026＆御堂筋イルミネーション名門ホテルガイド</a></li>
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
      "六本木ヒルズ",
      "けやき坂イルミネーション",
      "東京タワー",
      "グランドハイアット東京",
      "ザ・リッツ・カールトン東京",
      "オークラ東京",
      "三井ガーデンホテル六本木プレミア",
      "アンダーズ東京",
      "東京ミッドタウン",
      "クリスマスマーケット"
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

2026年11月上旬〜12月25日開催の「六本木ヒルズけやき坂イルミネーション」と東京ミッドタウンの冬夜景を徹底解説！

約400mのけやき坂通りを約80万球のLEDが白銀に染め上げる「SNOW & BLUE」と東京タワーの奇跡のコラボレーション、大屋根プラザの本場ドイツ・クリスマスマーケット、毛利庭園の水面ライトアップ鑑賞ルートを網羅。

グランドハイアット東京やザ・リッツ・カールトン東京、オークラ東京など、客室から東京タワー夜景を独占し、至高のクリスマスディナーを堪能できる厳選ラグジュアリーホテル5選をご紹介します。

---

## 💡 現地調査に基づくプロの指南！けやき坂＆六本木冬夜景攻略マニュアル

- **けやき坂連絡ブリッジ（六本木ヒルズアリーナ上部歩道橋）:** 白銀の光の坂道と正面の東京タワーがシンメトリーに重なる日本屈指のベストフォトスポット。点灯直後の17:00か20:30以降が狙い目。
- **大屋根プラザ「クリスマスマーケット」:** ドイツ・シュツットガルト直輸入の木工芸品やオーナメント、温かいグリューワインで芯から温まる体験。
- **東京ミッドタウン「MIDTOWN CHRISTMAS」:** 芝生広場のゴールドに輝く光の散歩道や都内最大級の屋外アイススケートリンク。
- **高層ビル風対策の防寒装備:** すり鉢地形とビル風で体感温度が急低下するため、風を通さない防寒コート、手袋、マフラーが必須です。

---

## 🏨 旅の目的に応じて選ぶ！六本木・赤坂・虎ノ門の厳選名ホテル5選

### 1. グランドハイアット東京（東京都港区六本木）
- **特徴:** 六本木ヒルズ直結。けやき坂イルミ徒歩0分。全室42㎡以上のモダン空間と大理石深めバス。10の多彩なレストラン。
- **宿泊目安:** 1名 ¥${hGrandHyatt.hotelMinCharge?.toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hGrandHyatt.reviewAverage}（608件）
- 👉 [グランドハイアット東京の空室・宿泊プランを見る](${hGrandHyatt.affiliateUrl})

### 2. ザ・リッツ・カールトン東京（東京都港区赤坂・六本木）
- **特徴:** 東京ミッドタウン最上層（45〜53階）。全室52㎡以上。東京タワー真正面パノラマビュー。伝説の53階クラブラウンジ。
- **宿泊目安:** 1名 ¥${hRitz.hotelMinCharge?.toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hRitz.reviewAverage}（547件）
- 👉 [ザ・リッツ・カールトン東京の空室・宿泊プランを見る](${hRitz.affiliateUrl})

### 3. オークラ東京（The Okura Tokyo）（東京都港区虎ノ門）
- **特徴:** 虎ノ門の高台に佇む「日本の迎賓館」。谷口吉生氏設計の格調高いロビー。タワー夜景のプレステージ＆全室サウナ付ヘリテージ。
- **宿泊目安:** 1名 ¥${hOkura.hotelMinCharge?.toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hOkura.reviewAverage}（150件）
- 👉 [オークラ東京の空室・宿泊プランを見る](${hOkura.affiliateUrl})

### 4. 三井ガーデンホテル六本木プレミア（東京都港区六本木）
- **特徴:** 六本木駅徒歩5分。14階「BALCÓN TOKYO」のオープンエアテラスから東京タワーを真正面に仰ぐ。ハイセンスな大人の隠れ家。
- **宿泊目安:** 1名 ¥${hMitsui.hotelMinCharge?.toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hMitsui.reviewAverage}（512件）
- 👉 [三井ガーデンホテル六本木プレミアの空室・宿泊プランを見る](${hMitsui.affiliateUrl})

### 5. アンダーズ東京（東京都港区虎ノ門）
- **特徴:** 虎ノ門ヒルズ最上層（47〜52階）。全室50㎡以上。日本の五右衛門風呂を思わせる深めの円形バスタブ。52階ルーフトップバー。
- **宿泊目安:** 1名 ¥${hAndaz.hotelMinCharge?.toLocaleString()}〜
- **楽天トラベル評価:** ⭐ ${hAndaz.reviewAverage}（107件）
- 👉 [アンダーズ東京の空室・宿泊プランを見る](${hAndaz.affiliateUrl})

---

## 📸 宿の近隣観光地ガイド（Wikipedia公式データ連携）

- **六本木ヒルズ:** ${wRoppongiHills.extract || '六本木ヒルズ（ろっぽんぎヒルズ）は、東京都港区六本木六丁目にある複合施設。冬にはけやき坂イルミネーションやクリスマスマーケットで賑わいます。'}
- **東京タワー:** ${wTokyoTower.extract || '東京タワー（とうきょうタワー）は、東京都港区芝公園にある総合電波塔。冬のイルミネーション期間中はけやき坂の白銀の光越しに輝くランドマークライトが絶大な人気を誇ります。'}
- **東京ミッドタウン:** ${wMidtown.extract || '東京ミッドタウン（とうきょうミッドタウン）は、東京都港区赤坂九丁目にある複合施設。冬にはゴールドの散歩道や屋外アイススケートリンクが展開されます。'}
- **赤坂サカス:** ${wAkasakaSacas.extract || '赤坂サカス（あかさかサカス）は、東京都港区赤坂五丁目のTBS放送センター周辺にある複合エリア。'}

---

## 🗺️ 六本木を満喫する 1泊2日モデルコース

- **1日目:** 六本木チェックイン ➔ 森美術館鑑賞 ➔ 大屋根プラザのクリスマスマーケットでグリューワイン ➔ 17:00 けやき坂イルミ一斉点灯の瞬間を撮影 ➔ 毛利庭園散策 ➔ ホテルでクリスマスディナー ➔ 客室から東京タワー夜景鑑賞
- **2日目:** 優雅な朝食ビュッフェ ➔ 東京ミッドタウンの屋外アイススケートリンク ➔ ガレリアでお買い物 ➔ 帰路へ

---

## ❓ よくある質問（FAQ）

**Q1. けやき坂イルミネーションの点灯時間は？**  
A. 毎日17:00から23:00まで点灯します。

**Q2. ベストアングルはどこ？**  
A. けやき坂連絡ブリッジから見下ろす、光の坂道と東京タワーの重なりが最も美しく撮影できます。

**Q3. 一番おすすめの宿泊先は？**  
A. イルミネーション直結なら「グランドハイアット東京」、客室から東京タワーを正面に見下ろすなら「ザ・リッツ・カールトン東京」が最高峰です。

---

🔗 **本編の詳細な解説・料金比較・アクセス情報は公式サイトで公開中！**  
👉 [【六本木】六本木ヒルズけやき坂イルミネーション2026＆東京ミッドタウン完全攻略ガイド本編はこちら](https://croud-travel.pages.dev/posts/${slug})
`;

  return { postData, noteMarkdown };
};
