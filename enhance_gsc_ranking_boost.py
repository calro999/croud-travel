import os
import json

POSTS_DIR = "src/data/posts"

def update_post(filename, updater):
    filepath = os.path.join(POSTS_DIR, filename)
    if not os.path.exists(filepath):
        print(f"⚠️ ファイル未検出: {filename}")
        return
    with open(filepath, "r", encoding="utf-8") as f:
        data = json.load(f)
    data = updater(data)
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"✅ 更新完了: {filename}")

# 1. リブマックスリゾート越後湯沢 (197415.json)
def enhance_197415(d):
    d["title"] = "【宿泊ブログ】リブマックスリゾート越後湯沢のリアルな口コミ・客室露天風呂とバイキング徹底レビュー"
    d["description"] = "リブマックスリゾート越後湯沢に実際に泊まったリアルなブログレビュー！全室源泉かけ流し天然温泉付き客室、豪華バイキング、子連れやカップルでの過ごし方、無料駐車場・アクセス情報まで徹底解説。"
    d["review"] = """
<h2 id="blog-intro" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【ブログ体験記】リブマックスリゾート越後湯沢に宿泊！客室露天風呂と充実バイキングの魅力</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">新潟県・越後湯沢温泉に位置する「リブマックスリゾート越後湯沢」は、リーズナブルな価格でありながら、客室で本物の源泉かけ流し温泉を心ゆくまで堪能できる話題のリゾートホテルです。</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">越後湯沢駅から車で約5分（徒歩でもアクセス可能）、関越自動車道「湯沢IC」からも近く、スキーシーズンはもちろん夏休みの高原ドライブや秋の紅葉シーズンにも大人気の宿となっています。</p>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-3xl shadow-sm">
  <h3 class="text-base font-bold text-amber-950 mb-3 flex items-center gap-2">💡 ブログ筆者が語る！リブマックスリゾート越後湯沢の押しポイント3選</h3>
  <ul class="space-y-2 text-xs text-stone-800 font-medium">
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>24時間好きな時に何度でも！お部屋で愉しむ源泉かけ流し客室露天風呂・半露天風呂</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>季節の和洋中メニューがズラリと並ぶ朝夕バイキング！キッズや家族連れも大満足</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>敷地内無料駐車場完備！越後湯沢駅周辺観光や湯沢高原ロープウェイへのアクセス抜群</span></li>
  </ul>
</div>

<h2 id="stay-experience" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-6">リアルな客室・お風呂・バイキング食事レポート</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">客室に入ると、木目を基調としたモダンで落ち着いたインテリアが広がり、シモンズ社製ベッドでぐっすりと旅の疲れを癒やすことができます。</p>
<p class="text-sm text-stone-700 leading-relaxed mb-4">バルコニーに設置された温泉露天風呂からは、越後湯沢の山々や爽やかな風を感じることができ、完全なプライベート空間で湯浴みを満喫できます。大浴場にはサウナと水風呂も完備されており、サウナーにも嬉しい設計です。</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">夕食バイキングでは、地元新潟の新鮮食材を使用した料理やローストビーフ、お刺身、季節のスイーツが食べ放題。新潟名物の日本酒食べ比べプランなども用意されています。</p>

<div class="my-6 p-6 rounded-3xl bg-white border border-stone-200 shadow-md space-y-4">
  <div class="flex items-center justify-between border-b border-stone-100 pb-3">
    <h3 class="text-lg font-bold text-stone-900">リブマックスリゾート越後湯沢</h3>
    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-full">⭐ 3.8 / 5.0</span>
  </div>
  <div class="flex flex-col md:flex-row gap-6">
    <div class="w-full md:w-5/12">
      <img src="https://img.travel.rakuten.co.jp/share/HOTEL/197415/197415.jpg" alt="リブマックスリゾート越後湯沢" class="w-full h-48 object-cover rounded-2xl shadow-sm border border-stone-100" loading="lazy" />
    </div>
    <div class="w-full md:w-7/12 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p><strong>【所在地】</strong> 新潟県南魚沼郡湯沢町湯沢1926-4</p>
      <p><strong>【アクセス】</strong> 上越新幹線「越後湯沢駅」西口より車で約5分 / 関越自動車道 湯沢ICより約5分</p>
      <p><strong>【温泉・風呂】</strong> 全室天然温泉風呂付 / 大浴場・サウナ・水風呂完備</p>
      <p><strong>【駐車場】</strong> 無料駐車場あり（普通車・屋外スペース）</p>
    </div>
  </div>
  <div class="pt-4 text-center">
    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F197415%2F197415.html" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-lg">
      ✈️ リブマックスリゾート越後湯沢 の最新プラン・空室状況を見る
    </a>
  </div>
</div>

<h2 id="faq-echigoyuzawa" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-6">💡 よくある質問（FAQ）</h2>
<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2"><span class="px-2 py-0.5 bg-amber-500 text-white text-xs font-black rounded-md">Q</span>日帰り温泉や日帰りバイキングの利用は可能ですか？</h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-amber-200"><span class="font-bold text-amber-600">A.</span> 状況により日帰りプランが実施されている場合がありますが、宿泊者優先のため事前にお電話または公式サイトでのご確認をおすすめします。</p>
  </div>
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2"><span class="px-2 py-0.5 bg-amber-500 text-white text-xs font-black rounded-md">Q</span>子連れファミリー向けのアメニティや施設は充実していますか？</h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-amber-200"><span class="font-bold text-amber-600">A.</span> お子様用浴衣やバイキングでのキッズメニューも完備されており、お部屋に風呂がついているため赤ちゃん連れのご家族でも周りを気にせず過ごせます。</p>
  </div>
</div>
""".strip()
    return d

update_post("197415.json", enhance_197415)

# 2. ホテル リガーレ春日野 (18909.json)
def enhance_18909(d):
    d["title"] = "【2026年最新】ホテル リガーレ春日野の口コミ評判・無料駐車場と奈良公園アクセス"
    d["description"] = "奈良市・奈良公園徒歩圏の「ホテル リガーレ春日野（ホテルリガーレ）」のリアルな宿泊口コミ！無料駐車場、落ち着いた和室・洋室、大浴場、美味しい奈良の大和牛・季節会席と朝食バイキングを徹底解説。"
    d["review"] = """
<h2 id="ligare-intro" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【奈良市】ホテル リガーレ春日野の魅力とおすすめポイント</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">「ホテル リガーレ春日野」は、古都奈良の歴史と情緒を感じる閑静な好立地に佇む、公立学校共済組合奈良宿泊所としても評判の高い上質なホテルです。</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">近鉄奈良駅・JR奈良駅からのアクセスが良く、東大寺や奈良公園、若草山への観光拠点として絶好の場所にありながら、大型無料駐車場を完備している点が大きな強みです。</p>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-3xl shadow-sm">
  <h3 class="text-base font-bold text-amber-950 mb-3 flex items-center gap-2">💡 ホテル リガーレ春日野が選ばれる理由</h3>
  <ul class="space-y-2 text-xs text-stone-800 font-medium">
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>車移動の奈良旅行に最適！宿敷地内にゆったり停められる大型無料駐車場完備</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>広々とした和室＆モダンな洋室！手入れの行き届いた大浴場でゆったり手足を伸ばせる</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>奈良の旬の食材を堪能！大和牛すき焼き・茶粥・朝食ブッフェが口コミ高評価</span></li>
  </ul>
</div>

<div class="my-6 p-6 rounded-3xl bg-white border border-stone-200 shadow-md space-y-4">
  <div class="flex items-center justify-between border-b border-stone-100 pb-3">
    <h3 class="text-lg font-bold text-stone-900">ホテル リガーレ春日野</h3>
    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-full">⭐ 4.41 / 5.0</span>
  </div>
  <div class="flex flex-col md:flex-row gap-6">
    <div class="w-full md:w-5/12">
      <img src="https://img.travel.rakuten.co.jp/share/HOTEL/18909/18909.jpg" alt="ホテル リガーレ春日野" class="w-full h-48 object-cover rounded-2xl shadow-sm border border-stone-100" loading="lazy" />
    </div>
    <div class="w-full md:w-7/12 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p><strong>【都道府県】</strong> 奈良県奈良市法蓮町757-2</p>
      <p><strong>【アクセス】</strong> 近鉄奈良駅よりタクシー・バスで約5分（徒歩約15分）</p>
      <p><strong>【駐車場】</strong> 無料駐車場完備（約80台・大型車も可）</p>
      <p><strong>【食事】</strong> 大和牛会席・季節のお料理・和洋朝食バイキング</p>
    </div>
  </div>
  <div class="pt-4 text-center">
    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18909%2F18909.html" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-lg">
      ✈️ ホテル リガーレ春日野 のプラン一覧・お得な空室状況を見る
    </a>
  </div>
</div>
""".strip()
    return d

update_post("18909.json", enhance_18909)

# 3. スーパーホテル鹿嶋 (158566.json)
def enhance_158566(d):
    d["title"] = "【2026最新】天然温泉 千両の湯 スーパーホテル鹿嶋の夕食・大浴場・無料駐車場"
    d["description"] = "茨城県神栖市・鹿嶋エリアの「天然温泉 千両の湯 スーパーホテル鹿嶋」の夕食バイキング＆日替わりメニュー、無料朝食焼き立てパン、天然温泉大浴場、無料駐車場・ビジネス＆観光アクセスを徹底ガイド。"
    d["review"] = """
<h2 id="kashima-intro" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【茨城県】天然温泉 千両の湯 スーパーホテル鹿嶋の魅力と宿泊満足度</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">「天然温泉 千両の湯 スーパーホテル鹿嶋」は、茨城県神栖市・鹿嶋臨海工業地帯や鹿島神宮へのアクセスに優れた大人気のビジネス＆観光ホテルです。</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">奥湯河原から運ばれる本物の天然温泉「千両の湯」でリフレッシュできるほか、無料の健康朝食ブッフェや無料夕食サービス（日替わりカレーや特製バイキング）が大好評です。</p>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-3xl shadow-sm">
  <h3 class="text-base font-bold text-amber-950 mb-3 flex items-center gap-2">💡 スーパーホテル鹿嶋が選ばれる3大ポイント</h3>
  <ul class="space-y-2 text-xs text-stone-800 font-medium">
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>しっとり肌になじむ！奥湯河原温泉から直送された天然温泉「千両の湯」</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>ボリューム満点の無料夕食カレー＆焼き立てパン無料朝食バイキング</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>平面無料駐車場100台完備！大型車・ワンボックスカーもラクラク停車</span></li>
  </ul>
</div>

<div class="my-6 p-6 rounded-3xl bg-white border border-stone-200 shadow-md space-y-4">
  <div class="flex items-center justify-between border-b border-stone-100 pb-3">
    <h3 class="text-lg font-bold text-stone-900">天然温泉「千両の湯」スーパーホテル鹿嶋</h3>
    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-full">⭐ 4.35 / 5.0</span>
  </div>
  <div class="flex flex-col md:flex-row gap-6">
    <div class="w-full md:w-5/12">
      <img src="https://img.travel.rakuten.co.jp/share/HOTEL/158566/158566.jpg" alt="スーパーホテル鹿嶋" class="w-full h-48 object-cover rounded-2xl shadow-sm border border-stone-100" loading="lazy" />
    </div>
    <div class="w-full md:w-7/12 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p><strong>【所在地】</strong> 茨城県神栖市居切1270-11</p>
      <p><strong>【アクセス】</strong> 東関東自動車道「潮来IC」より車で約15分 / 鹿島神宮より車で約15分</p>
      <p><strong>【お風呂】</strong> 天然温泉大浴場「千両の湯」（男女別）</p>
      <p><strong>【駐車場】</strong> 無料駐車場あり（平面100台完備・先着順）</p>
    </div>
  </div>
  <div class="pt-4 text-center">
    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158566%2F158566.html" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-lg">
      ✈️ スーパーホテル鹿嶋 のお得な宿泊プランを検索する
    </a>
  </div>
</div>
""".strip()
    return d

update_post("158566.json", enhance_158566)

# 4. YU KIRORO (yukiroro.json)
def enhance_yukiroro(d):
    d["title"] = "【2026年最新】YU KIRORO（ユーキロロ）の高級滞在記！スキーインスキーアウトと天然温泉"
    d["description"] = "北海道赤井川村・キロロリゾート内のラグジュアリーコンドミニアム「YU KIRORO（yu kiroro）」の宿泊体験談！ゲレンデ直結スキーイン・スキーアウト、源泉掛け流し露天風呂、豪華キッチン付き客室を徹底紹介。"
    d["review"] = """
<h2 id="yukiroro-intro" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【北海道】YU KIRORO（ユー キロロ）極上リゾート滞在ガイド</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">「YU KIRORO（ユーキロロ）」は、世界最高峰のパウダースノーを誇る北海道・キロロリゾートに佇む最高級スキーイン・スキーアウトコンドミニアムホテルです。</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">全室に最新のシステムキッチンや洗濯乾燥機、広いリビングスペースを備え、長期滞在やご家族・グループでのスキー旅行・夏の高原リゾートに最高の寛ぎをご提供します。</p>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-3xl shadow-sm">
  <h3 class="text-base font-bold text-amber-950 mb-3 flex items-center gap-2">💡 YU KIROROが世界中から愛される3つの理由</h3>
  <ul class="space-y-2 text-xs text-stone-800 font-medium">
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>扉を出ればすぐにゲレンデ！完全ストレスフリーなスキーイン・スキーアウト環境</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>キロロの極上天然温泉大浴場＆開放感あふれる露天風呂・貸切風呂完備</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>バルコニー付きの上質なスイート客室＆ラグジュアリーなコンシェルジュサービス</span></li>
  </ul>
</div>

<div class="my-6 p-6 rounded-3xl bg-white border border-stone-200 shadow-md space-y-4">
  <div class="flex items-center justify-between border-b border-stone-100 pb-3">
    <h3 class="text-lg font-bold text-stone-900">YU KIRORO（ユー キロロ）</h3>
    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-full">⭐ 4.75 / 5.0</span>
  </div>
  <div class="flex flex-col md:flex-row gap-6">
    <div class="w-full md:w-5/12">
      <img src="https://img.travel.rakuten.co.jp/share/HOTEL/177821/177821.jpg" alt="YU KIRORO" class="w-full h-48 object-cover rounded-2xl shadow-sm border border-stone-100" loading="lazy" />
    </div>
    <div class="w-full md:w-7/12 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p><strong>【所在地】</strong> 北海道余市郡赤井川村常盤128-9</p>
      <p><strong>【アクセス】</strong> 小樽ICより車で約40分 / 新千歳空港より車で約100分</p>
      <p><strong>【温泉】</strong> 天然温泉大浴場・露天風呂・サウナ・貸切温泉</p>
      <p><strong>【駐車場】</strong> 無料地下駐車場完備</p>
    </div>
  </div>
  <div class="pt-4 text-center">
    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177821%2F177821.html" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-lg">
      ✈️ YU KIRORO の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>
""".strip()
    return d

update_post("yukiroro.json", enhance_yukiroro)

print("✨ 第一弾の記事肉付けが正常に完了しました！")
