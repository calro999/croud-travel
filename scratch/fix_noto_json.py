import os
import json

POST_PATH = "src/data/posts/noto-pokemon-travel-guide.json"

review_html = """<h2>【2026最新】能登半島×ポケモンコラボ「おいでよ！ポケモンのとめぐり」聖地巡礼ガイド</h2>
<p>石川県・能登半島全域で今大きな注目を集めているのが、復興支援・観光振興プロジェクトとしてスタートした<strong>「おいでよ！ポケモンのとめぐり」</strong>です！</p>
<p>世界初のポケモンの名を冠した<strong>「のと里山ポケモン・ウィズ・ユー空港」</strong>の誕生をはじめ、和倉温泉の絶景ロケーションにオープンした<strong>「わくらポケモン足湯」</strong>、そして能登各地のシンボル施設に設置されたご当地マンホール<strong>「ポケふた」</strong>、さらには「のと鉄道 POKÉMON with YOU トレイン」や珠洲市のポケモンモニュメントなど、ポケモンファンやファミリートラベラー、ドライブ旅行者に絶対見逃せない聖地巡礼スポットが目白押しです。</p>
<p>本記事では、現地で実際に撮影した写真とともに、<strong>【七尾・和倉温泉エリア】【輪島エリア】【穴水エリア】【のと里山空港エリア】【珠洲・志賀・能登町エリア】</strong>のエリアごとに、スポットの解説と<strong>「そのエリア周辺のおすすめ宿泊施設」</strong>をカード形式で徹底紹介します！</p>

<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 shadow-sm space-y-3">
  <div class="flex items-center gap-2 text-indigo-950 font-bold text-base">
    <span class="text-xl">📱</span>
    <span>『Pokémon GO』プレイヤー必見！ポケふたの楽しみ方</span>
  </div>
  <p class="text-xs text-indigo-900/90 leading-relaxed font-medium">
    能登に設置されている「ポケふた」は、ゲームアプリ『Pokémon GO』内で<strong>特別なポケストップ</strong>になっています！<br />
    現地を訪れてフォトディスクを回すと、その場所限定のポケふたイラストが描かれた「ポストカード」を獲得できます。ギフトとしてフレンドに贈るとすごく喜ばれますよ！ぜひ全7箇所のポケふたを巡ってポストカードを集めてみてください。
  </p>
</div>

<hr class="my-8 border-emerald-950/10" />

<h2>📍 1. 七尾・和倉温泉エリア（わくらポケモン足湯 ＆ 七尾市ポケふた）</h2>
<p>開湯1,200年の歴史を誇る名湯・和倉温泉。七尾湾に面した「湯っ足りパーク」には、2026年5月にリニューアルオープンした無料足湯施設<strong>「わくらポケモン足湯」</strong>と七尾市の<strong>「ポケふた」</strong>が隣接しています。</p>

<h3>① 七尾市のポケふた（湯っ足りパーク内）</h3>
<p><img src="/noto/pokehuta_nanao.webp" alt="ポケふた 七尾市（和倉温泉 湯っ足りパーク）" class="w-full rounded-2xl border border-emerald-950/10 shadow-md my-4" loading="lazy" /></p>
<p>七尾湾の豊かな海と温泉をイメージした可愛いデザイン。足湯の目と鼻の先にあるため、到着してまず最初に撮影したいスポットです。</p>

<h3>② 和倉温泉「わくらポケモン足湯」</h3>
<p><img src="/noto/ashiyu00.webp" alt="わくらポケモン足湯 入口ゲート" class="w-full rounded-2xl border border-emerald-950/10 shadow-md my-4" loading="lazy" /></p>
<p><img src="/noto/ashiyu0.webp" alt="わくらポケモン足湯 全景・エントランス" class="w-full rounded-2xl border border-emerald-950/10 shadow-md my-4" loading="lazy" /></p>
<p>「わくらポケモン足湯」の入口ゲートを入ると、目の前に穏やかな七尾湾が広がる開放的な足湯施設が姿を現します。営業時間は7:00〜19:00で、利用料は無料です！</p>
<p><img src="/noto/ashiyu1.webp" alt="わくらポケモン足湯 ポケモンオブジェ1" class="w-full rounded-2xl border border-emerald-950/10 shadow-md my-4" loading="lazy" /></p>
<p><img src="/noto/ashiyu2.webp" alt="わくらポケモン足湯 ポケモンオブジェ2" class="w-full rounded-2xl border border-emerald-950/10 shadow-md my-4" loading="lazy" /></p>
<p><img src="/noto/ashiyu3.webp" alt="わくらポケモン足湯 ポケモンオブジェ3" class="w-full rounded-2xl border border-emerald-950/10 shadow-md my-4" loading="lazy" /></p>
<p><img src="/noto/ashiyu4.webp" alt="わくらポケモン足湯 ポケモンオブジェ4" class="w-full rounded-2xl border border-emerald-950/10 shadow-md my-4" loading="lazy" /></p>
<p><img src="/noto/ashiyu5.webp" alt="わくらポケモン足湯 ポケモンオブジェ5" class="w-full rounded-2xl border border-emerald-950/10 shadow-md my-4" loading="lazy" /></p>
<p>湯船の中やベンチ周辺には、ギャラドスやニョロモ、ニョロトノなどの水タイプポケモンたちの立体オブジェが配置されています。足を湯に浸しながら海とポケモンを一緒にカメラに収めることができる極上スポットです。</p>

<div class="my-8 p-6 rounded-3xl bg-amber-50/50 border border-amber-200/80 shadow-sm space-y-4">
  <h3 class="text-lg font-bold font-journal-serif text-amber-950 flex items-center gap-2">
    <span>🌊</span> <span>旅の途中で発見！海に浮かぶ「ボラ待ちヤグラ」</span>
  </h3>
  <div class="flex flex-col md:flex-row gap-4 items-center">
    <div class="w-full md:w-1/2">
      <img src="/noto/bora.webp" alt="金沢から能登空港へ向かう途中で見つけたボラ待ちヤグラ" class="w-full h-auto rounded-xl shadow-md border border-amber-200" loading="lazy" />
    </div>
    <div class="w-full md:w-1/2 space-y-2">
      <p class="text-xs text-amber-950/90 leading-relaxed font-medium">
        金沢から能登空港や穴水方面へ向かって車を走らせている途中、穏やかな七尾湾の海の中に不思議な木組みの建造物を見つけました！<br /><br />
        気になって調べてみると、これは<strong>「ボラ待ちヤグラ」</strong>と呼ばれる能登の伝統的な漁法で使われていた櫓（やぐら）だそうです。漁師さんが櫓の上でじっとボラの群れが網に入るのを待っていた歴史があり、穏やかな海の上にぽつんと佇む姿がとても幻想的で思わず車を止めて写真を撮ってしまいました。
      </p>
    </div>
  </div>
</div>

<hr class="my-8 border-emerald-950/10" />

<h2>📍 4. のと里山空港エリア（のと里山ポケモン・ウィズ・ユー空港）</h2>
<p>2026年7月7日、世界で初めてポケモンの名を冠した空港としてオープンした<strong>「のと里山ポケモン・ウィズ・ユー空港」</strong>！</p>

<h3>① 敷地内施設「のともり」（ポケモン体験＆展示）</h3>
<p><img src="/noto/notomori.webp" alt="のと里山空港 敷地内施設 のともり ポケモンコラボ" class="w-full rounded-2xl border border-emerald-950/10 shadow-md my-4" loading="lazy" /></p>
<p>のと里山空港の敷地内にある体験・情報施設「のともり」。入口や館内にはポケモンコラボのウェルカムサインやフォトスポットが展開されています。</p>

<h3>② 空港館内フォトスポット＆展示</h3>
<p><img src="/noto/kukou1.webp" alt="のと里山ポケモン・ウィズ・ユー空港 内観1" class="w-full rounded-2xl border border-emerald-950/10 shadow-md my-4" loading="lazy" /></p>
<p><img src="/noto/kukou2.webp" alt="のと里山ポケモン・ウィズ・ユー空港 内観2" class="w-full rounded-2xl border border-emerald-950/10 shadow-md my-4" loading="lazy" /></p>
<p><img src="/noto/kukou3.webp" alt="のと里山ポケモン・ウィズ・ユー空港 内観3" class="w-full rounded-2xl border border-emerald-950/10 shadow-md my-4" loading="lazy" /></p>
<p><img src="/noto/kukou4.webp" alt="のと里山ポケモン・ウィズ・ユー空港 内観4" class="w-full rounded-2xl border border-emerald-950/10 shadow-md my-4" loading="lazy" /></p>
<p>館内には111種類以上もの「ひこうタイプ」のポケモンたちがデザインされており、ピカチュウの大型バルーンや空港限定ショップ、コラボレストランメニューまで楽しめます。</p>

<div class="my-8 p-6 rounded-3xl bg-gradient-to-br from-amber-500/10 via-teal-500/10 to-emerald-500/10 border border-amber-400/40 shadow-sm space-y-4">
  <div class="flex items-center justify-between border-b border-amber-300/40 pb-3">
    <span class="text-xs font-black text-amber-900 bg-amber-200 px-3 py-1 rounded-full uppercase">✈️ のと里山空港アクセスのピックアップ宿</span>
    <span class="text-[11px] font-bold text-amber-800">⭐ 4.7 / 5.0</span>
  </div>
  <h3 class="text-lg font-black font-journal-serif text-emerald-950">ねぶた温泉 海舟（能登の強アルカリ美肌湯）</h3>
  <p class="text-xs text-emerald-950/80 leading-relaxed font-medium">
    のと里山空港から車で約20分。日本有数のpH10.5を誇る強アルカリ性「トロトロの美肌温泉」が自慢の隠れ家温泉宿。飛行機での能登旅行の初日や最終日の宿泊に大変おすすめです。
  </p>
  <div class="pt-2 text-right">
    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%3Ff_no%3D14781" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-extrabold text-xs rounded-xl shadow transition">
      ♨️ ねぶた温泉の宿泊プラン・空室状況を見る（楽天トラベル）
    </a>
  </div>
</div>

<hr class="my-8 border-emerald-950/10" />

<h2>📍 5. 能登全域・その他のポケモンコラボスポット＆全ポケふた設置場所（完全網羅）</h2>
<p>能登半島には、今回巡った七尾・輪島・穴水・空港のほかにも魅力的なポケモンコラボスポットが多数設置されています！能登周遊ドライブの際はぜひ立ち寄ってみてください。</p>

<h3>① 石川県内・能登の「ポケふた」全8枚設置場所一覧</h3>
<p>石川県内には合計8枚（能登エリア7枚＋金沢市1枚）のポケモンマンホール「ポケふた」が設置されています。</p>
<ul>
<li><strong>七尾市：</strong>湯っ足りパーク（わくらポケモン足湯に隣接）</li>
<li><strong>輪島市：</strong>道の駅 輪島（ふらっと訪夢）</li>
<li><strong>穴水町：</strong>のと鉄道 穴水駅前ロータリー</li>
<li><strong>のと里山空港：</strong>のと里山ポケモン・ウィズ・ユー空港敷地内</li>
<li><strong>珠洲市：</strong>見付海水浴場（軍艦島こと「見附島」を望む海岸）</li>
<li><strong>志賀町：</strong>世界一長いベンチ（増穂浦海岸）</li>
<li><strong>能登町：</strong>柳田植物公園</li>
<li><strong>金沢市：</strong>国立工芸館前（兼六園・出羽町エリア）</li>
</ul>

<h3>② 珠洲市：見附島「ラブカスベンチ」＆「ニンフィア with LOVE」</h3>
<p>奥能登・珠洲市の見付海水浴場（見附島）周辺には、縁結び・デートスポットとしても人気の「ラブカスベンチ」や「ニンフィア with LOVE」モニュメントが設置されています。</p>

<h3>③ のと鉄道「POKÉMON with YOU トレイン」＆限定ラッピングバス</h3>
<p>七尾駅〜穴水駅を結ぶ「のと鉄道」では、ポケモンデザインの観光列車が運行！さらに金沢と能登を結ぶ特急バスにもポケモンのラッピングバスが登場しており、車なしの公共交通機関旅でもポケモンコラボを満喫できます。</p>

<h3>④ 石川県全8箇所「ポケふた」完全アクセスガイド＆おすすめモデルコース</h3>
<p>石川県内に点在する全8箇所の「ポケふた」を効率よく巡るための具体的なアクセス方法と、ドライブ・電車別の完全攻略モデルコースをまとめました。</p>

<div class="my-6 p-5 rounded-2xl bg-stone-50 border border-stone-200 shadow-sm space-y-4">
  <h4 class="font-bold text-stone-900 text-base border-b border-stone-200 pb-2">🗺️ ポケふた全8箇所 具体的なアクセス方法一覧</h4>
  <ul class="space-y-3 text-xs text-stone-800 leading-relaxed font-medium">
    <li>
      <strong class="text-emerald-950 font-bold text-sm">1. 金沢市（国立工芸館前）</strong><br />
      📍 住所：石川県金沢市出羽町3-2<br />
      🚌 バスアクセス：JR金沢駅東口より北陸鉄道バス「広坂・21世紀美術館」または「出羽町」下車徒歩3分。<br />
      🚗 車アクセス：金沢西IC/金沢東ICから約20分。敷地内または周辺有料駐車場を利用。
    </li>
    <li>
      <strong class="text-emerald-950 font-bold text-sm">2. 志賀町（世界一長いベンチ・増穂浦海岸）</strong><br />
      📍 住所：石川県羽咋郡志賀町富来領家町八幡野<br />
      🚗 車アクセス：のと里山海道「徳田大津IC」から車で約25分。無料大型駐車場完備。<br />
      🚌 バスアクセス：JR羽咋駅から北鉄能登バス「富来」行き乗車、終点より徒歩約10分。
    </li>
    <li>
      <strong class="text-emerald-950 font-bold text-sm">3. 七尾市（わくらポケモン足湯・湯っ足りパーク）</strong><br />
      📍 住所：石川県七尾市和倉温泉<br />
      🚗 車アクセス：のと里山海道「和倉IC」から車で約8分。足湯敷地内に無料駐車場あり。<br />
      電車アクセス：JR和倉温泉駅から北鉄能登バス和倉温泉行きで約5分、「和倉温泉」下車徒歩5分。
    </li>
    <li>
      <strong class="text-emerald-950 font-bold text-sm">4. 穴水町（のと鉄道 穴水駅前ロータリー）</strong><br />
      📍 住所：石川県鳳珠郡穴水町大町<br />
      🚃 電車アクセス：のと鉄道「穴水駅」下車すぐ（駅前ロータリー内）。<br />
      🚗 車アクセス：のと里山海道「穴水IC」から車で約5分。駅前無料駐車場あり。
    </li>
    <li>
      <strong class="text-emerald-950 font-bold text-sm">5. のと里山空港（のと里山ポケモン・ウィズ・ユー空港）</strong><br />
      📍 住所：石川県輪島市三井町洲衛10部11-1<br />
      ✈️ 飛行機アクセス：羽田空港から能登空港便で約60分。到着ロビー・屋外施設「のともり」すぐ。<br />
      🚗 車アクセス：のと里山海道「のと里山空港IC」直結。無料特大駐車場あり。
    </li>
    <li>
      <strong class="text-emerald-950 font-bold text-sm">6. 輪島市（道の駅 輪島 ふらっと訪夢）</strong><br />
      📍 住所：石川県輪島市河井町20-1-131<br />
      🚗 車アクセス：のと里山空港から車で約25分。道の駅無料駐車場完備。<br />
      🚌 バスアクセス：金沢駅から特急バス「輪島特急線」で「道の駅輪島」下車すぐ。
    </li>
    <li>
      <strong class="text-emerald-950 font-bold text-sm">7. 能登町（柳田植物公園）</strong><br />
      📍 住所：石川県鳳珠郡能登町上町ロ1-1<br />
      🚗 車アクセス：のと里山空港から車で約20分。公園無料駐車場あり。<br />
      🚌 バスアクセス：穴水駅から町営バスまたはタクシー利用で約25分。
    </li>
    <li>
      <strong class="text-emerald-950 font-bold text-sm">8. 珠洲市（見付海水浴場・見附島）</strong><br />
      📍 住所：石川県珠洲市宝立町鵜飼<br />
      🚗 車アクセス：のと里山空港から車で約45分。見附島海岸無料駐車場あり。<br />
      🚌 バスアクセス：すずバス「見附島」下車徒歩2分。
    </li>
  </ul>
</div>

<div class="my-8 p-6 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-300/40 shadow-sm space-y-4">
  <h4 class="font-bold font-journal-serif text-indigo-950 text-base flex items-center gap-2">
    <span>🚗</span> <span>【金沢・陸路発】能登ポケモン巡礼1泊2日コンプリートモデルコース</span>
  </h4>
  <div class="space-y-3 text-xs text-indigo-950/90 leading-relaxed font-medium">
    <div class="p-3 rounded-xl bg-white/80 border border-indigo-100 space-y-1">
      <strong class="text-indigo-900 font-bold">【Day 1】金沢スタート ➔ 志賀 ➔ 和倉温泉 ➔ 穴水（和倉または穴水泊）</strong>
      <p>09:00 金沢出発（①金沢ポケふた撮影） ➔ 国道249号線で志賀町へ（②志賀町ポケふた） ➔ 和倉温泉へ移動（③七尾ポケふた ＆ わくらポケモン足湯でリフレッシュ！） ➔ のと鉄道穴水駅へ（④穴水町ポケふた） ➔ 和倉温泉またはねぶた温泉でゆったり宿泊。</p>
    </div>
    <div class="p-3 rounded-xl bg-white/80 border border-indigo-100 space-y-1">
      <strong class="text-indigo-900 font-bold">【Day 2】のと里山空港 ➔ 輪島 ➔ 能登町 ➔ 珠洲見附島（ゴール！）</strong>
      <p>09:00 宿出発 ➔ のと里山空港（⑤空港ポケふた ＆ のともり展示） ➔ 輪島朝市・道の駅（⑥輪島ポケふた） ➔ 柳田植物公園（⑦能登町ポケふた） ➔ 珠洲・見附島（⑧珠洲ポケふふた ＆ ラブカスベンチで記念撮影！） ➔ のと里山空港または金沢へ戻り帰路へ。</p>
    </div>
  </div>
</div>

<div class="my-8 p-6 rounded-3xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-teal-500/10 border border-amber-300/50 shadow-sm space-y-6">
  <h4 class="font-bold font-journal-serif text-amber-950 text-base flex items-center gap-2">
    <span>✈️</span> <span>【のと里山空港発着】1泊2日モデルコース（レンタカーあり・車なしの2パターン）</span>
  </h4>

  <div class="space-y-3">
    <div class="flex items-center gap-2 border-b border-amber-200 pb-1">
      <span class="text-xs font-black bg-amber-600 text-white px-2.5 py-0.5 rounded-md">パターン A</span>
      <span class="text-xs font-bold text-amber-950">のと里山空港発着 ➔ レンタカーで巡る能登・奥能登満喫コース</span>
    </div>
    <div class="space-y-2 text-xs text-stone-800 leading-relaxed font-medium">
      <div class="p-3 rounded-xl bg-white/90 border border-amber-200/80 space-y-1">
        <strong class="text-amber-900 font-bold">【1日目：空港到着から奥能登・和倉温泉へ】</strong><br />
        <p>羽田空港から「のと里山空港」到着 ➔ ⑤空港ポケふた撮影 ＆ 敷地内「のともり」ポケモン展示を満喫 ➔ 空港でレンタカーを借りて輪島へ（車で約25分） ➔ ⑥道の駅輪島ポケふた撮影 ＆ 能登海鮮丼ランチ ➔ 能登町へ（⑦柳田植物公園ポケふた） ➔ 珠洲市へ（⑧見附島ポケふた ＆ ラブカスベンチ撮影！） ➔ 和倉温泉（またはねぶた温泉）へ移動して宿泊。</p>
      </div>
      <div class="p-3 rounded-xl bg-white/90 border border-amber-200/80 space-y-1">
        <strong class="text-amber-900 font-bold">【2日目：和倉足湯・穴水・志賀町を巡り空港へ戻る】</strong><br />
        <p>朝：③七尾ポケふた ＆ 和倉温泉「わくらポケモン足湯」でモーニング足湯タイム！ ➔ 穴水町へ移動（④穴水駅前ポケふた） ➔ 志賀町へ移動（②世界一長いベンチ・増穂浦海岸ポケふた撮影 ＆ 能登牛ランチ） ➔ のと里山空港へ戻りレンタカー返却 ➔ 空港のポケモン限定ショップでお土産を購入してフライト帰路へ！</p>
      </div>
    </div>
  </div>

  <hr class="border-amber-200/60" />

  <div class="space-y-3">
    <div class="flex items-center gap-2 border-b border-teal-200 pb-1">
      <span class="text-xs font-black bg-teal-700 text-white px-2.5 py-0.5 rounded-md">パターン B</span>
      <span class="text-xs font-bold text-teal-950">車なし（公共交通機関のみ）➔ のと鉄道＆特急バスで巡るコラボ旅コース</span>
    </div>
    <div class="space-y-2 text-xs text-stone-800 leading-relaxed font-medium">
      <div class="p-3 rounded-xl bg-white/90 border border-teal-200/80 space-y-1">
        <strong class="text-teal-900 font-bold">【1日目：空港 ➔ 輪島特急バス ➔ のと鉄道観光】</strong><br />
        <p>のと里山空港到着 ➔ ⑤空港ポケふた ＆ 「のともり」展示鑑賞 ➔ 空港から路線バス/ふるさとタクシーで輪島へ ➔ ⑥道の駅輪島ポケふた撮影 ＆ 能登グルメランチ ➔ 特急バスで「穴水駅」へ移動（④穴水駅ポケふた撮影） ➔ 「のと鉄道 POKÉMON with YOU トレイン」に乗車！ ➔ 和倉温泉駅到着 ➔ 路線バスで「わくらポケモン足湯」へ（③七尾ポケふた ＆ 足湯体験） ➔ 和倉温泉に宿泊。</p>
      </div>
      <div class="p-3 rounded-xl bg-white/90 border border-teal-200/80 space-y-1">
        <strong class="text-teal-900 font-bold">【2日目：和倉温泉 ➔ 珠洲・見附島 ➔ 空港へ】</strong><br />
        <p>和倉温泉から金沢・珠洲特急バスに乗車 ➔ 珠洲・見附島へ移動 ➔ ⑧見附島ポケふた ＆ ラブカスベンチで写真撮影 ➔ 海岸カフェでランチ ➔ すずバス・特急バスを乗り継ぎ「のと里山空港」へ戻る ➔ 空港限定グッズを購入して羽田へ帰路。</p>
      </div>
    </div>
  </div>
</div>

<div class="my-8 p-6 rounded-3xl bg-gradient-to-br from-teal-500/10 via-amber-500/10 to-emerald-500/10 border border-teal-400/40 shadow-sm space-y-4">
  <div class="flex items-center justify-between border-b border-teal-300/40 pb-3">
    <span class="text-xs font-black text-teal-900 bg-teal-200 px-3 py-1 rounded-full uppercase">🏨 奥能登・珠洲エリアのピックアップ宿</span>
    <span class="text-[11px] font-bold text-teal-800">⭐ 4.7 / 5.0</span>
  </div>
  <h3 class="text-lg font-black font-journal-serif text-emerald-950">珠洲温泉 宝湯・ランプの宿（奥能登の秘湯＆見附島アクセス宿）</h3>
  <p class="text-xs text-emerald-950/80 leading-relaxed font-medium">
    見附島の「ポケふた」や「ラブカスベンチ」へのアクセス抜群。日本海の絶景と絶品の奥能登地魚会席、奥能登最先端の秘湯雰囲気を味わえる極上のおすすめ宿です。
  </p>
  <div class="pt-2 text-right">
    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Fnoto-offers%2F" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 text-white font-extrabold text-xs rounded-xl shadow transition">
      ♨️ 珠洲・奥能登エリアの宿泊プランを見る（楽天トラベル）
    </a>
  </div>
</div>

<hr class="my-8 border-emerald-950/10" />

<div class="my-8 p-6 rounded-3xl bg-stone-50 border border-stone-200 shadow-sm space-y-6">
  <h3 class="text-lg font-bold font-journal-serif text-stone-900 flex items-center gap-2">
    <span>📍</span> <span>輪島市＆穴水町のポケふたスポットフォト</span>
  </h3>
  
  <div class="space-y-4">
    <h4 class="font-bold text-stone-800 text-sm">【輪島市】ポケふた（道の駅 輪島 ふらっと訪夢）</h4>
    <img src="/noto/pokehuta_wajima.webp" alt="輪島市のポケふた" class="w-full h-auto rounded-2xl shadow-md border border-stone-200" loading="lazy" />
    <p class="text-xs text-stone-700 leading-relaxed font-medium">輪島市の中心「道の駅 輪島」敷地内にあるポケふた。旅の立ち寄りスポットとして大人気です。</p>
  </div>

  <hr class="border-stone-200" />

  <div class="space-y-4">
    <h4 class="font-bold text-stone-800 text-sm">【穴水町】ポケふた＆のと鉄道 穴水駅</h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <img src="/noto/pokehuta_ana.webp" alt="穴水町のポケふた" class="w-full h-auto rounded-xl shadow-md border border-stone-200" loading="lazy" />
        <p class="text-xs text-stone-700 mt-1 font-medium">穴水町の可愛いポケふた</p>
      </div>
      <div>
        <img src="/noto/ana1.webp" alt="のと鉄道 穴水駅" class="w-full h-auto rounded-xl shadow-md border border-stone-200" loading="lazy" />
        <p class="text-xs text-stone-700 mt-1 font-medium">のと鉄道の終着駅「穴水駅」</p>
      </div>
    </div>
    <p class="text-xs text-stone-700 leading-relaxed font-medium">穴水駅周辺は風情ある街並みが広がり、のと鉄道に乗って車窓からの風景を楽しむのもおすすめです。</p>
  </div>
</div>

<h2>まとめ：今すぐ「ポケモンのとめぐり」で能登応援の旅へ出かけよう！</h2>
<p>能登の豊かな自然、心温まる温泉、美味しい海鮮グルメ、そして可愛いポケモンたちが織りなす「おいでよ！ポケモンのとめぐり」。現地を訪れて巡ること自体が素晴らしい復興支援になります。ぜひ楽天トラベルで能登のステキな宿を予約して、最高の旅に出かけましょう！</p>"""

data = {
  "id": "noto-pokemon-travel-guide",
  "title": "能登ポケモンコラボめぐり！ポケふた・わくら足湯・のと里山空港アクセスガイド",
  "hotel_name": "能登ポケモンコラボ（ポケふた・足湯・のと里山空港）",
  "description": "能登のポケモンコラボ「ポケふた全7枚・わくらポケモン足湯・のと里山空港」の最新設置場所と周遊アクセスを解説。周辺おすすめホテルや楽天トラベル限定プランも一挙掲載。",
  "is_special_feature": True,
  "review": review_html,
  "image": "/noto/notopokemon.webp",
  "other_images": [],
  "affiliate_url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Fnoto-offers%2F",
  "prefecture": "石川県",
  "area": "能登",
  "categories": [
    "観光・体験",
    "モデルコース",
    "お得情報"
  ],
  "price": None,
  "rating": None,
  "date": "2026-08-01 12:00:00"
}

with open(POST_PATH, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Successfully written valid JSON!")
