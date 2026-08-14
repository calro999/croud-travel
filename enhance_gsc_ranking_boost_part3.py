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

# 1. プール・インフィニティプール特集 (pool-resort-hotel-guide.json)
def enhance_pool_guide(d):
    d["title"] = "【2026年最新】インフィニティプール＆夏休みプール付きおすすめ人気リゾートホテル"
    d["description"] = "日本全国の絶景インフィニティプール、夏休みに子供から大人まで楽しめるプール付きリゾートホテルを厳選紹介！ナイトプール、温水プール、海と一体になるラグジュアリーホテルでの過ごし方と予約攻略法。"
    d["review"] = """
<h2 id="pool-top" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026最新】日本の絶景インフィニティプール＆夏休みプール付きホテル特集</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">夏の旅行で絶対に外せないのが、海や空とシームレスに繋がる幻想的な「インフィニティプール」や、家族みんなで笑顔になれるプール付きリゾートホテルです。</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">本記事では、沖縄の極上ビーチリゾートから箱根・熱海・紀伊半島の絶景インフィニティ温泉プールまで、最高の夏休みを叶える厳選ホテルをピックアップしてご紹介します。</p>

<div class="my-6 p-6 bg-gradient-to-br from-blue-50 to-amber-50/50 border border-blue-200 rounded-3xl shadow-sm">
  <h3 class="text-base font-bold text-blue-950 mb-3 flex items-center gap-2">🌊 プール付きホテル選びで失敗しないための3箇条</h3>
  <ul class="space-y-2 text-xs text-stone-800 font-medium">
    <li class="flex items-start gap-2"><span class="text-blue-500 font-bold">✔</span><span>利用対象をチェック！大人限定のナイトプールか、子供用ウォータースライダー完備か確認</span></li>
    <li class="flex items-start gap-2"><span class="text-blue-500 font-bold">✔</span><span>温水・インドア（屋内）プール完備なら天候や夏以外のシーズンでも快適に遊べる</span></li>
    <li class="flex items-start gap-2"><span class="text-blue-500 font-bold">✔</span><span>プールサイドでのドリンク・軽食サービス（オールインクルーシブ等）の有無を事前に確認</span></li>
  </ul>
</div>

<h2 id="pool-hotels" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-6">全国の厳選プールリゾート＆体験価値</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">水面がどこまでも続くような浮遊感と、夕暮れ時に黄金色に染まるマジックアワーの風景は、大切な人との一生の思い出になります。</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">シェラトン沖縄サンマリーナリゾート、リブマックスリゾート越後湯沢など、設備が充実したリゾートを賢く予約して夏を満喫しましょう。</p>
""".strip()
    return d

update_post("pool-resort-hotel-guide.json", enhance_pool_guide)

# 2. 楽天トラベルお得活用術 (rakuten-travel-guide.json)
def enhance_rakuten_guide(d):
    d["title"] = "【2026年最新】楽天トラベル セール・クーポン・5と0のつく日のお得予約活用法徹底解説"
    d["description"] = "楽天トラベルの割引クーポン、スーパーSALE、5と0のつく日（最大20%OFF）、得旅キャンペーン、ふるさと納税クーポンの併用テクニックを完全網羅！一番お得にホテル・温泉宿を予約する方法を分かりやすく紹介。"
    d["review"] = """
<h2 id="rakuten-top" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【2026最新】楽天トラベルのセール＆割引クーポンを最大限に使い倒す攻略ガイド</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">旅行予約サイト「楽天トラベル」では、各種キャンペーンやクーポンを上手く組み合わせることで、高級旅館や人気リゾートホテルに信じられないほどの割引価格で宿泊可能です。</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">「楽天トラベル クーポン」「5と0のつく日」「スーパーSALE」などのキーワードで検索される最新のお得技をわかりやすく整理しました。</p>

<div class="my-6 p-6 bg-gradient-to-br from-red-50 to-amber-50/50 border border-red-200 rounded-3xl shadow-sm">
  <h3 class="text-base font-bold text-red-950 mb-3 flex items-center gap-2">💡 楽天トラベルお得予約のゴールデンルール</h3>
  <ul class="space-y-2 text-xs text-stone-800 font-medium">
    <li class="flex items-start gap-2"><span class="text-red-500 font-bold">✔</span><span>毎月「5・10・15・20・25・30日」はエントリーで高級宿・温泉宿が最大20%OFF</span></li>
    <li class="flex items-start gap-2"><span class="text-red-500 font-bold">✔</span><span>宿独自クーポン＋楽天発行クーポンの併用（最大3枚併用）で爆安予約</span></li>
    <li class="flex items-start gap-2"><span class="text-red-500 font-bold">✔</span><span>実質自己負担2,000円！「ふるさと納税返礼品トラベルクーポン」の併用で節税＆豪華旅行</span></li>
  </ul>
</div>
""".strip()
    return d

update_post("rakuten-travel-guide.json", enhance_rakuten_guide)

# 3. お盆・夏休み直前予約ガイド (obon-travel-guide.json)
def enhance_obon_guide(d):
    d["title"] = "【2026年最新】お盆休み・夏休み旅行の直前・駆け込み宿予約攻略と穴場温泉地"
    d["description"] = "お盆休みや8月11日（山の日）前後の駆け込み旅行！今からでも間に合う空室あり温泉宿・カップル・家族向け穴場スポット・キャンセル待ちテクニックを詳しく解説。"
    d["review"] = """
<h2 id="obon-top" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【お盆・夏休み直前】今から間に合う！宿予約テクニックと穴場リゾート</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">「お盆休みの旅行計画が出遅れた…」「今からでも泊まれる温泉宿はある？」とお悩みの方もご安心ください。</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">お盆直前（3日前〜前日）はキャンセル料が発生するタイミングのため、予期せぬ直前空室が多数発生します。本記事では、賢く直前予約を狙う方法と、比較的混雑が緩和される穴場エリアをご紹介します。</p>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-3xl shadow-sm">
  <h3 class="text-base font-bold text-amber-950 mb-3 flex items-center gap-2">💡 お盆・夏休みの直前予約で勝ち抜くポイント</h3>
  <ul class="space-y-2 text-xs text-stone-800 font-medium">
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>キャンセル料発生タイミング（21日前・14日前・3日前）の直後に検索する</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>大都市近郊のビジネスホテル天然温泉プランや、山間部の穴場温泉郷を狙う</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>直前限定割引や「直前即予約プラン」を素早くGETする</span></li>
  </ul>
</div>
""".strip()
    return d

update_post("obon-travel-guide.json", enhance_obon_guide)

print("✨ 第三弾のまとめ記事肉付けが正常に完了しました！")
