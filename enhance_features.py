import json
import os
import glob

POSTS_DIR = "/Users/calro/Downloads/croud-travel/src/data/posts"

FEATURE_FILES = [
    "okinawa-luxury-resorts-guide.json",
    "hokkaido-summer-resorts-guide.json",
    "hakone-open-air-bath-guide.json",
    "kyoto-ryokan-guide.json",
    "family-welcome-baby-guide.json",
    "glamping-guide.json",
    "solo-travel-luxury-guide.json",
    "obon-travel-guide.json",
    "obon-solo-travel-guide.json",
    "sauna-hotel-guide.json"
]

def enhance_review_html(html, title, file_id):
    # Check if we already enhanced this
    if "【総括】" in html or "まとめ・よくある質問" in html:
        return html
    
    # 1. Enhance the intro by adding a more professional lead sentence if it's too short
    # Actually, we can just append a massive, high-quality conclusion and FAQ section
    
    # Create a custom FAQ based on the topic
    if "sauna" in file_id:
        topic_faq = """
    <div class="p-4 rounded-xl bg-teal-50/40 border border-teal-900/10 space-y-2 mb-4">
      <h4 class="text-sm font-bold text-teal-950 flex items-start gap-2">
        <span class="text-teal-800 font-extrabold">Q.</span>
        <span>サウナ付きホテルに泊まる際、水着は必要ですか？</span>
      </h4>
      <p class="text-xs text-emerald-950/80 leading-relaxed pl-6">
        A. 大浴場に併設されたサウナの場合は基本的には全裸での利用となりますが、男女混浴のサウナやプライベートサウナ、グランピング施設に併設されているテントサウナ等の場合は水着着用が必須となるケースが多いです。各施設の公式サイトや楽天トラベルのプラン詳細ページにて事前にご確認ください。
      </p>
    </div>
"""
    elif "obon" in file_id:
        topic_faq = """
    <div class="p-4 rounded-xl bg-blue-50/40 border border-blue-900/10 space-y-2 mb-4">
      <h4 class="text-sm font-bold text-blue-950 flex items-start gap-2">
        <span class="text-blue-800 font-extrabold">Q.</span>
        <span>お盆の直前予約でも間に合いますか？キャンセル待ちはできますか？</span>
      </h4>
      <p class="text-xs text-blue-950/80 leading-relaxed pl-6">
        A. お盆期間は非常に混雑しますが、宿泊日の数日前〜1週間前になると「キャンセル規定」の関係で急に空室が出ることがよくあります。諦めずに楽天トラベルの空室カレンダーをこまめにチェックするか、気になる宿はお気に入り登録をしておくことをおすすめします！
      </p>
    </div>
"""
    elif "solo" in file_id:
        topic_faq = """
    <div class="p-4 rounded-xl bg-indigo-50/40 border border-indigo-900/10 space-y-2 mb-4">
      <h4 class="text-sm font-bold text-indigo-950 flex items-start gap-2">
        <span class="text-indigo-800 font-extrabold">Q.</span>
        <span>一人旅で高級旅館に泊まると浮きませんか？</span>
      </h4>
      <p class="text-xs text-indigo-950/80 leading-relaxed pl-6">
        A. 全く心配ありません！近年は「おこもりステイ」や「リトリート」を目的とした一人旅の需要が急増しており、高級旅館側も「お一人様歓迎」の専用プラン（夕朝食ともにお部屋食、個室露天風呂付きなど）を多数用意しています。誰の目も気にせず、極上の時間を満喫できます。
      </p>
    </div>
"""
    elif "family" in file_id or "glamping" in file_id:
        topic_faq = """
    <div class="p-4 rounded-xl bg-orange-50/40 border border-orange-900/10 space-y-2 mb-4">
      <h4 class="text-sm font-bold text-orange-950 flex items-start gap-2">
        <span class="text-orange-800 font-extrabold">Q.</span>
        <span>小さな子供や赤ちゃん連れでも安心して泊まれますか？</span>
      </h4>
      <p class="text-xs text-orange-950/80 leading-relaxed pl-6">
        A. ウェルカムベビーのお宿や、キッズスペース・離乳食対応のある宿を選べば安心です！多くのホテルでは、ベッドガードの貸出や、お部屋での食事（部屋食）、貸切風呂などのオプションが用意されています。ご予約の際、事前に施設へお子様の年齢や要望を伝えておくとさらにスムーズです。
      </p>
    </div>
"""
    else:
        topic_faq = """
    <div class="p-4 rounded-xl bg-emerald-50/40 border border-emerald-900/10 space-y-2 mb-4">
      <h4 class="text-sm font-bold text-emerald-950 flex items-start gap-2">
        <span class="text-emerald-800 font-extrabold">Q.</span>
        <span>お得に予約するコツやベストなタイミングはありますか？</span>
      </h4>
      <p class="text-xs text-emerald-950/80 leading-relaxed pl-6">
        A. 楽天トラベルの「楽天スーパーSALE」や「5と0のつく日」などのキャンペーンを狙うと、普段は手が出ない高級宿でも驚くほどお得に予約できることがあります。また、2〜3ヶ月前の「早期割（早割）」を利用するのも確実でおすすめです。
      </p>
    </div>
"""

    conclusion_html = f"""
<hr class="my-10 border-emerald-950/10" />

<h2 id="faq" class="text-xl font-bold font-journal-serif text-emerald-950 flex items-center gap-2 mb-6">
  <span>💡</span> <span>本特集に関するよくある質問（まとめ・FAQ）</span>
</h2>
{topic_faq}
<div class="p-4 rounded-xl bg-emerald-50/40 border border-emerald-900/10 space-y-2 mb-8">
  <h4 class="text-sm font-bold text-emerald-950 flex items-start gap-2">
    <span class="text-emerald-800 font-extrabold">Q.</span>
    <span>掲載されている宿泊料金は変動しますか？</span>
  </h4>
  <p class="text-xs text-emerald-950/80 leading-relaxed pl-6">
    A. はい。旅行需要やシーズン（GW、お盆、年末年始など）、また予約のタイミングによって価格は常に変動します。本記事に記載の「最安料金目安」はあくまで参考価格となりますので、必ずリンク先の楽天トラベルにて最新の空室状況と正確な料金をご確認ください。
  </p>
</div>

<h2 id="conclusion" class="text-xl font-bold font-journal-serif text-emerald-950 mb-4">
  【総括】あなたにぴったりの素晴らしい旅行を見つけよう！
</h2>
<p class="mb-6">
  いかがでしたでしょうか？今回は<strong>「{title}」</strong>と題して、口コミ評価が圧倒的に高く、絶対に失敗しない厳選された極上ホテル・お宿だけをご紹介しました。<br />
  旅行の計画を立てるワクワク感は、すでに旅の始まりです！気になった宿があれば、空室が埋まってしまう前に今すぐチェックして、最高の思い出を作る準備を始めましょう。
</p>
"""

    return html + conclusion_html

for file_name in FEATURE_FILES:
    file_path = os.path.join(POSTS_DIR, file_name)
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        
        original_review = data.get("review", "")
        title = data.get("title", "")
        
        enhanced_review = enhance_review_html(original_review, title, file_name)
        
        if enhanced_review != original_review:
            data["review"] = enhanced_review
            with open(file_path, "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            print(f"Enhanced content in {file_name}")
        else:
            print(f"Already enhanced or no change for {file_name}")
    else:
        print(f"File not found: {file_name}")

