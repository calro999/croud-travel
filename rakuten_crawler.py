import os
import random
import requests
import time
import json
import re

CACHE_FILE = "posted_cache.txt"
POSTS_DIR = "src/data/posts"

# 47都道府県のコードと地方・都道府県名のマッピング
PREFECTURES = [
    {"code": "hokkaido", "name": "北海道", "area": "北海道"},
    {"code": "aomori", "name": "青森県", "area": "東北"},
    {"code": "iwate", "name": "岩手県", "area": "東北"},
    {"code": "miyagi", "name": "宮城県", "area": "東北"},
    {"code": "akita", "name": "秋田県", "area": "東北"},
    {"code": "yamagata", "name": "山形県", "area": "東北"},
    {"code": "fukushima", "name": "福島県", "area": "東北"},
    {"code": "ibaraki", "name": "茨城県", "area": "関東"},
    {"code": "tochigi", "name": "栃木県", "area": "関東"},
    {"code": "gunma", "name": "群馬県", "area": "関東"},
    {"code": "saitama", "name": "埼玉県", "area": "関東"},
    {"code": "chiba", "name": "千葉県", "area": "関東"},
    {"code": "tokyo", "name": "東京都", "area": "関東"},
    {"code": "kanagawa", "name": "神奈川県", "area": "関東"},
    {"code": "niigata", "name": "新潟県", "area": "甲信越"},
    {"code": "toyama", "name": "富山県", "area": "北陸"},
    {"code": "ishikawa", "name": "石川県", "area": "北陸"},
    {"code": "fukui", "name": "福井県", "area": "北陸"},
    {"code": "yamanashi", "name": "山梨県", "area": "甲信越"},
    {"code": "nagano", "name": "長野県", "area": "甲信越"},
    {"code": "gifu", "name": "岐阜県", "area": "東海"},
    {"code": "shizuoka", "name": "静岡県", "area": "東海"},
    {"code": "aichi", "name": "愛知県", "area": "東海"},
    {"code": "mie", "name": "三重県", "area": "東海"},
    {"code": "shiga", "name": "滋賀県", "area": "近畿"},
    {"code": "kyoto", "name": "京都府", "area": "近畿"},
    {"code": "osaka", "name": "大阪府", "area": "近畿"},
    {"code": "hyogo", "name": "兵庫県", "area": "近畿"},
    {"code": "nara", "name": "奈良県", "area": "近畿"},
    {"code": "wakayama", "name": "和歌山県", "area": "近畿"},
    {"code": "tottori", "name": "鳥取県", "area": "中国"},
    {"code": "shimane", "name": "島根県", "area": "中国"},
    {"code": "okayama", "name": "岡山県", "area": "中国"},
    {"code": "hiroshima", "name": "広島県", "area": "中国"},
    {"code": "yamaguchi", "name": "山口県", "area": "中国"},
    {"code": "tokushima", "name": "徳島県", "area": "四国"},
    {"code": "kagawa", "name": "香川県", "area": "四国"},
    {"code": "ehime", "name": "愛媛県", "area": "四国"},
    {"code": "kochi", "name": "高知県", "area": "四国"},
    {"code": "fukuoka", "name": "福岡県", "area": "九州"},
    {"code": "saga", "name": "佐賀県", "area": "九州"},
    {"code": "nagasaki", "name": "長崎県", "area": "九州"},
    {"code": "kumamoto", "name": "熊本県", "area": "九州"},
    {"code": "oita", "name": "大分県", "area": "九州"},
    {"code": "miyazaki", "name": "宮崎県", "area": "九州"},
    {"code": "kagoshima", "name": "鹿児島県", "area": "九州"},
    {"code": "okinawa", "name": "沖縄県", "area": "沖縄"}
]

THEMES = [
    "絶景と大自然の癒やし",
    "歴史とレトロな街並み散策",
    "ご当地絶品グルメと地酒巡り",
    "知る人ぞ知る秘境と穴場スポット",
    "温泉街の湯めぐりと風情",
    "女子旅に人気のパワースポットと写真映え",
    "非日常を味わう極上の大人旅",
    "カップルで過ごすロマンチックな週末"
]

def load_posted_cache():
    if os.path.exists(CACHE_FILE):
        with open(CACHE_FILE, "r", encoding="utf-8") as f:
            return set(line.strip() for line in f if line.strip())
    return set()

def save_to_cache(content_id):
    with open(CACHE_FILE, "a", encoding="utf-8") as f:
        f.write(f"{content_id}\n")

def fetch_rakuten_items(target_count=1):
    app_id_raw = os.environ.get("RAKUTEN_APPLICATION_ID")
    app_id = app_id_raw.strip() if app_id_raw else None
    
    aff_id_raw = os.environ.get("RAKUTEN_AFFILIATE_ID")
    affiliate_id = aff_id_raw.strip() if aff_id_raw else None
    
    ak_raw = os.environ.get("RAKUTEN_ACCESS_KEY")
    access_key = ak_raw.strip() if ak_raw else None
    
    if not app_id:
        raise ValueError("RAKUTEN_APPLICATION_ID must be set in environment variables.")

    # ランダムに都道府県を選択
    pref = random.choice(PREFECTURES)
    print(f"Selected Prefecture for search: {pref['name']} ({pref['code']})")

    url = "https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20170426"
    
    search_keywords = [pref['name']]
    if random.random() > 0.5:
        search_keywords.append("温泉")
    else:
        search_keywords.append("ホテル")
        
    keyword_str = " ".join(search_keywords)
    print(f"Searching with keyword: {keyword_str}")
    
    params = {
        "applicationId": app_id,
        "format": "json",
        "keyword": keyword_str,
        "hits": 30
    }
    if affiliate_id:
        params["affiliateId"] = affiliate_id
    if access_key:
        params["accessKey"] = access_key

    response = requests.get(url, params=params)
    if response.status_code != 200:
        raise RuntimeError(f"Failed to fetch from Rakuten API: {response.status_code} - {response.text}")

    data = response.json()
    hotels = data.get("hotels", [])
    if not hotels:
        raise RuntimeError(f"No hotels found in prefecture: {pref['name']}")

    posted_cache = load_posted_cache()
    selected_items = []
    
    for h in hotels:
        hotel_container = h.get("hotel", [])
        if not hotel_container:
            continue
        
        basic_info = hotel_container[0].get("hotelBasicInfo", {})
        hotel_no = basic_info.get("hotelNo")
        
        if not hotel_no:
            continue

        if str(hotel_no) not in posted_cache:
            basic_info["_prefecture"] = pref["name"]
            basic_info["_area"] = pref["area"]
            
            # APIがアフィリエイトURLを返さない場合へのフォールバック
            affiliate_url = basic_info.get("affiliateUrl")
            if not affiliate_url:
                basic_info["affiliateUrl"] = basic_info.get("hotelInformationUrl")
                
            selected_items.append(basic_info)
            if len(selected_items) >= target_count:
                break

    # 未投稿が足りない場合は既存のものを再利用（フェールセーフ）
    if len(selected_items) < target_count:
        for h in hotels:
            hotel_container = h.get("hotel", [])
            if not hotel_container: continue
            basic_info = hotel_container[0].get("hotelBasicInfo", {})
            if basic_info not in selected_items:
                basic_info["_prefecture"] = pref["name"]
                basic_info["_area"] = pref["area"]
                if not basic_info.get("affiliateUrl"):
                    basic_info["affiliateUrl"] = basic_info.get("hotelInformationUrl")
                selected_items.append(basic_info)
            if len(selected_items) >= target_count:
                break

    return selected_items

def build_hotel_prompt(item):
    """ホテル単体記事用のプロンプトを生成する"""
    hotel_name = item.get("hotelName", "")
    special = item.get("hotelSpecial", "")
    min_price = item.get("hotelMinPrice", "")
    price_text = f"{min_price}円〜" if min_price else "要確認"

    system_message = (
        "あなたは実際に全国の宿を取材してきた旅行ライターです。"
        "読者が「ここに泊まってみたい」と感じるような、具体的で温かみのある日本語の記事を書きます。"
        "AIらしい機械的な文章や誇張表現は使いません。"
        "出力はプレーンテキスト1行目にメタディスクリプション、2行目以降にHTML本文のみです。"
        "それ以外のもの（思考過程・メモ・説明・コードブロック・JSON）は一切出力しません。"
    )

    prompt = f"""次のホテルを紹介する旅行ブログ記事を書いてください。

【施設名】{hotel_name}
【特徴・キャッチコピー】{special}
【料金目安】{price_text}

━━━━━━━━━━━━━━━━━━━━
【出力ルール — 厳守してください】
━━━━━━━━━━━━━━━━━━━━

■ 出力形式（この2パートのみ。他は何も書かない）
  1行目: SEOメタディスクリプション（100〜130文字のプレーンテキスト。タグ・記号・説明文なし）
  2行目以降: HTML本文

■ HTML本文のルール
  - 使えるタグ: <h2> <h3> <h4> <p> <ul> <li> <strong> のみ
  - <br> <a> <img> <div> <span> <table> などは使わない
  - マークダウン（``` や ** や ##）は一切使わない
  - 文字数: HTMLタグを含めて1200〜1500文字
  - Wi-Fiは「Wi-Fi」と表記（「Wオウ」「W‑Fi」などの誤字禁止）

■ 記事の構成
  <h2> この宿をおすすめする3つの理由
    <ul><li> 箇条書き3点（具体的な理由）
  <h2> アクセスと立地
    <p> 最寄り駅・車でのアクセス・周辺環境
  <h3> 客室とアメニティ
    <p> 部屋の特徴・設備（Wi-Fi、浴室、寝具等）を具体的に
  <h3> 温泉・大浴場（ある場合）
    <p> 泉質・湯温・雰囲気
  <h2> 周辺観光スポット
    <ul><li> 3件程度の具体的なスポット名と見どころ
  <h2> カップル・子連れ・ビジネス利用それぞれの魅力
    <p> 各ターゲット層への具体的メリット
  <h2> まとめ
    <p> 締めの文（宿の総合的な魅力を1〜2文で）

■ 絶対に禁止すること
  - 思考過程・メモ・文字数カウント・説明コメントの出力
  - JSON形式での出力
  - 「120文字程度のSEOメタディスクリプション：」などのラベル出力
  - 広告・スポンサー表記（Pollinations等）の出力
  - 文字化けした表現や意味不明な造語
  - 記事途中での唐突な終了（必ずまとめまで書ききる）
"""
    return system_message, prompt


def build_prefecture_prompt(items, pref_name, theme):
    """都道府県特集記事用のプロンプトを生成する"""
    hotels_info = ""
    for i, item in enumerate(items):
        name = item.get("hotelName", "")
        special = item.get("hotelSpecial", "")
        price = item.get("hotelMinPrice", "")
        price_text = f"{price}円〜" if price else "要確認"
        hotels_info += f"  宿{i+1}: {name}\n  特徴: {special}\n  料金目安: {price_text}\n\n"

    system_message = (
        "あなたは実際に全国を旅してきた旅行ライターです。"
        "読者が「今すぐここに行きたい」と感じるような、具体的で読みやすい日本語の旅行記事を書きます。"
        "AIらしい機械的な文章や誇張表現は使いません。"
        "出力はプレーンテキスト1行目にメタディスクリプション、2行目以降にHTML本文のみです。"
        "それ以外のもの（思考過程・メモ・説明・コードブロック・JSON）は一切出力しません。"
    )

    prompt = f"""次の都道府県の旅行特集記事を書いてください。

【都道府県】{pref_name}
【特集テーマ】{theme}
【紹介する宿（3件）】
{hotels_info}
━━━━━━━━━━━━━━━━━━━━
【出力ルール — 厳守してください】
━━━━━━━━━━━━━━━━━━━━

■ 出力形式（この2パートのみ。他は何も書かない）
  1行目: SEOメタディスクリプション（100〜130文字のプレーンテキスト。タグ・記号・説明文なし）
  2行目以降: HTML本文

■ HTML本文のルール
  - 使えるタグ: <h2> <h3> <h4> <p> <ul> <li> <strong> のみ
  - <br> <a> <img> <div> <span> <table> などは使わない
  - マークダウン（``` や ** や ##）は一切使わない
  - 文字数: HTMLタグを含めて1500〜2000文字
  - Wi-Fiは「Wi-Fi」と表記（誤字禁止）

■ 記事の構成
  <h2> {pref_name}の旅の魅力（テーマ: {theme}）
    <p> {pref_name}の特色・見どころを具体的なスポット名・グルメ・歴史を交えて紹介
  <h2> {pref_name}旅行を最大限に楽しむための3つのポイント
    <ul><li> 箇条書き3点（具体的なアドバイス）
  <h2> 厳選宿泊施設のご紹介
    <h3> （宿1の名前）
      <p> 立地・特徴・おすすめポイントを具体的に
    <h3> （宿2の名前）
      <p> 立地・特徴・おすすめポイントを具体的に
    <h3> （宿3の名前）
      <p> 立地・特徴・おすすめポイントを具体的に
  <p> まとめの一文（旅への誘い）

■ 絶対に禁止すること
  - 思考過程・メモ・文字数カウント・説明コメントの出力
  - JSON形式での出力
  - 「120文字程度のSEOメタディスクリプション：」などのラベル出力
  - 広告・スポンサー表記（Pollinations等）の出力
  - 文字化けした表現・意味不明な造語・実在しないスポット名
  - 「最安価格は未定」などの不確かな価格表記
  - 記事途中での唐突な終了（必ずまとめまで書ききる）
"""
    return system_message, prompt


def validate_and_clean_output(raw_text):
    """
    LLMの生出力を検証・クリーニングして (description, review_html) を返す。
    問題がある場合は None を返してリトライを促す。
    """
    text = raw_text.strip()
    if not text:
        print("[VALIDATE] 空のレスポンス")
        return None

    # --- ① Markdownコードブロックを除去 ---
    text = re.sub(r"```(?:html|json|plaintext)?\s*", "", text)
    text = re.sub(r"\s*```", "", text)
    text = text.strip()

    # --- ② JSONオブジェクトが丸ごと返ってきた場合 → 完全拒否 ---
    # reasoning/role などAI内部ログが漏れているケース
    if re.search(r'"role"\s*:\s*"assistant"', text):
        print("[VALIDATE] AIの内部ログ（role/reasoning）が検出されました → 破棄")
        return None
    if re.search(r'"reasoning"\s*:', text[:500]):
        print("[VALIDATE] reasoning フィールドが検出されました → 破棄")
        return None

    # --- ③ <thought> / <thinking> タグによる思考プロセスを除去 ---
    text = re.sub(r"<(?:thought|thinking|reasoning)>.*?</(?:thought|thinking|reasoning)>",
                  "", text, flags=re.DOTALL | re.IGNORECASE).strip()

    # --- ④ Pollinationsの広告ブロックを除去 ---
    # パターン1: ---区切りで始まる末尾ブロック（記事末尾に付くケースが多い）
    text = re.sub(
        r"\n[-─]{3,}.*?(?:Pollinations|Support our mission|free text APIs).*",
        "", text, flags=re.DOTALL | re.IGNORECASE
    ).strip()
    # パターン2: **Ad** や 🌸 Ad 🌸 ブロック
    text = re.sub(
        r"\*{0,2}🌸?\s*Ad\s*🌸?\*{0,2}.*",
        "", text, flags=re.DOTALL | re.IGNORECASE
    ).strip()
    # パターン3: Powered by Pollinations
    text = re.sub(
        r"Powered by Pollinations\.AI.*",
        "", text, flags=re.DOTALL | re.IGNORECASE
    ).strip()


    # --- ⑤ 1行目=description、2行目以降=review に分割 ---
    lines = text.split("\n", 1)
    description = lines[0].strip()
    review_html = lines[1].strip() if len(lines) > 1 else ""

    # --- ⑥ descriptionの品質チェック ---
    bad_desc_patterns = [
        r"120文字",
        r"SEOメタ",
        r"メタディスクリプション：",
        r'"role"',
        r'"reasoning"',
        r"^```",
    ]
    for pattern in bad_desc_patterns:
        if re.search(pattern, description):
            print(f"[VALIDATE] description に問題あり: {pattern}")
            return None

    # descriptionのラベル表記を除去（「SEOメタディスクリプション: 〜」形式）
    description = re.sub(r"^.*?(?:メタ|SEO|description)[：:]\s*", "", description, flags=re.IGNORECASE).strip()

    # HTMLタグをdescriptionから除去
    description = re.sub(r"<[^>]*>", "", description).strip()

    # descriptionが短すぎる・長すぎる場合
    if len(description) < 40:
        print(f"[VALIDATE] description が短すぎます ({len(description)}文字)")
        return None
    if len(description) > 160:
        description = description[:157] + "..."

    # --- ⑦ review_htmlの品質チェック ---
    if not review_html:
        print("[VALIDATE] review_html が空")
        return None
    if len(review_html) < 300:
        print(f"[VALIDATE] review_html が短すぎます ({len(review_html)}文字)")
        return None

    # review_htmlに<h2>または<h3>が含まれているか
    if not re.search(r"<h[23]", review_html, re.IGNORECASE):
        print("[VALIDATE] review_html に見出しタグがありません")
        return None

    # 文字化けパターンの修正
    review_html = review_html.replace("Wオウ", "Wi-Fi")
    review_html = review_html.replace("W‑Fi", "Wi-Fi")
    review_html = review_html.replace("W−Fi", "Wi-Fi")
    description = description.replace("Wオウ", "Wi-Fi")

    # reviewが途中で終わっていないかチェック（文末が句読点・タグ閉じで終わること）
    last_chars = review_html.rstrip()[-20:]
    if not re.search(r'[。！？」>）]$', last_chars):
        print(f"[VALIDATE] review_html が途中で終わっている可能性: ...{last_chars!r}")
        return None

    print(f"[VALIDATE] OK — desc({len(description)}文字), review({len(review_html)}文字)")
    return description, review_html


def generate_article_with_llm(items, mode):
    """
    LLMで記事を生成する。最大5回リトライし、
    すべて失敗した場合はフォールバックを使用する。
    """
    if mode == "hotel":
        item = items[0]
        hotel_name = item.get("hotelName", "")
        print(f"Generating article in 'Hotel Focus' mode for {hotel_name}...")
        system_message, prompt = build_hotel_prompt(item)
    else:
        pref_name = items[0].get("_prefecture", "")
        theme = random.choice(THEMES)
        print(f"Generating article in 'Prefecture Focus' mode for {pref_name} (Theme: {theme}) with {len(items)} hotels...")
        system_message, prompt = build_prefecture_prompt(items, pref_name, theme)

    pollinations_models = ["openai", "openai-fast", "llama", "mistral"]
    max_attempts = 5

    for attempt in range(max_attempts):
        model = pollinations_models[attempt % len(pollinations_models)]
        print(f"Attempt {attempt + 1}/{max_attempts} (model: {model})...")
        try:
            response = requests.post(
                "https://text.pollinations.ai/",
                json={
                    "messages": [
                        {"role": "system", "content": system_message},
                        {"role": "user", "content": prompt}
                    ],
                    "model": model,
                    "seed": random.randint(1, 9999)
                },
                timeout=60
            )
            if response.status_code == 200 and len(response.text.strip()) > 100:
                result = validate_and_clean_output(response.text)
                if result is not None:
                    print(f"[OK] 品質チェック通過 (attempt {attempt + 1}, model: {model})")
                    return result
                else:
                    print(f"[RETRY] 品質チェック失敗 → リトライ")
            elif response.status_code == 429:
                print("[RATE LIMIT] 429 Too Many Requests → 5秒待機")
                time.sleep(5)
            else:
                print(f"[ERROR] status={response.status_code}")
        except Exception as e:
            print(f"[EXCEPTION] attempt {attempt + 1}: {e}")
        
        time.sleep(3)

    print("[FALLBACK] 全リトライ失敗 → フォールバック生成を使用")
    return fallback_generation(items, mode)


def fallback_generation(items, mode):
    """
    LLMが全て失敗した場合の最低限の静的フォールバック。
    """
    if mode == "hotel":
        item = items[0]
        hotel_name = item.get("hotelName", "")
        special = item.get("hotelSpecial", "")
        pref = item.get("_prefecture", "")
        description = f"{pref}のおすすめ宿「{hotel_name}」。{special[:60]}。アクセスや周辺観光も充実しており、ファミリーからカップルまで幅広くおすすめです。"
        review_html = (
            f"<h2>この宿をおすすめする3つの理由</h2>\n"
            f"<ul>\n"
            f"<li><strong>{pref}を代表する立地の良さ</strong>：観光スポットや駅からのアクセスが良好です。</li>\n"
            f"<li><strong>充実したアメニティ</strong>：Wi-Fi完備で快適な滞在をサポートします。</li>\n"
            f"<li><strong>丁寧なおもてなし</strong>：口コミでもスタッフの対応が高く評価されています。</li>\n"
            f"</ul>\n"
            f"<h2>施設の魅力</h2>\n"
            f"<p>{special}</p>\n"
            f"<h2>まとめ</h2>\n"
            f"<p>{hotel_name}は、{pref}の観光拠点として最適な宿です。ぜひ一度訪れてみてください。</p>"
        )
    else:
        pref = items[0].get("_prefecture", "")
        description = f"{pref}の絶景・グルメ・温泉を楽しむ旅行特集。厳選した3つの宿を拠点に、{pref}ならではの魅力を余すことなく体験しましょう。"
        hotel_list = "\n".join(
            f"<li><strong>{item.get('hotelName', '')}</strong>：{item.get('hotelSpecial', '')[:60]}</li>"
            for item in items
        )
        review_html = (
            f"<h2>{pref}の旅の魅力</h2>\n"
            f"<p>{pref}は豊かな自然・歴史・食文化が揃ったエリアです。四季折々の風景と地元グルメをぜひご堪能ください。</p>\n"
            f"<h2>{pref}旅行を最大限に楽しむための3つのポイント</h2>\n"
            f"<ul>\n"
            f"<li><strong>事前にモデルコースを計画する</strong>：観光スポットを効率よく回るために、訪問先を絞って計画しましょう。</li>\n"
            f"<li><strong>地元グルメを堪能する</strong>：{pref}ならではの食材や郷土料理は、旅の大きな楽しみです。</li>\n"
            f"<li><strong>宿の予約は早めに</strong>：人気の宿は埋まりやすいため、早期予約がおすすめです。</li>\n"
            f"</ul>\n"
            f"<h2>厳選宿泊施設のご紹介</h2>\n"
            f"<ul>\n{hotel_list}\n</ul>\n"
            f"<p>{pref}の旅は、自然・温泉・食のすべてが揃った最高のリフレッシュになるはずです。ぜひ次の旅先に選んでみてください。</p>"
        )
    return description, review_html


def decide_category(item):
    special = item.get("hotelSpecial", "").lower()
    hotel_name = item.get("hotelName", "").lower()
    text = special + " " + hotel_name
    
    categories = []
    if "温泉" in text or "風呂" in text or "スパ" in text:
        categories.append("温泉旅行")
    if "贅沢" in text or "露天風呂付" in text or "リゾート" in text or "高級" in text or "記念日" in text:
        categories.append("高級宿・リゾート")
    if "料理" in text or "食事" in text or "グルメ" in text or "バイキング" in text or "会席" in text:
        categories.append("グルメ・美食")
    if "自然" in text or "アクティビティ" in text or "海" in text:
        categories.append("アクティビティ・自然")
    
    if not categories:
        categories.append("ファミリー・女子旅")
        
    return categories

def save_individual_post(post_data):
    os.makedirs(POSTS_DIR, exist_ok=True)
    post_id = post_data["id"]
    file_path = os.path.join(POSTS_DIR, f"{post_id}.json")
    
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(post_data, f, ensure_ascii=False, indent=2)
    print(f"Successfully saved individual travel JSON: {file_path}")

def main():
    try:
        posted_cache = load_posted_cache()
        # キャッシュの数（これまでの総投稿宿数）に基づいてモードを完全に交互にする
        mode = "hotel" if len(posted_cache) % 2 == 0 else "prefecture"
        
        target_count = 1 if mode == "hotel" else 3
        items = fetch_rakuten_items(target_count)
        
        if not items:
            print("No hotels fetched. Exiting.")
            return

        main_item = items[0]
        hotel_no = str(main_item.get("hotelNo"))
        hotel_name = main_item.get("hotelName")
        affiliate_url = main_item.get("affiliateUrl")
        
        print(f"Main Hotel: {hotel_name} ({hotel_no})")

        image_url = main_item.get("largeImageUrl") or main_item.get("hotelImageUrl") or ""
        
        other_images = []
        for img_key in ["roomImageUrl", "publicBathImageUrl", "facilityImageUrl"]:
            val = main_item.get(img_key)
            if val and val != image_url:
                other_images.append(val)

        # 記事生成（バリデーション済みの (description, review_html) が返る）
        description, review_html = generate_article_with_llm(items, mode)

        # 都道府県モード（3件の宿）の場合、アフィリエイトリンクをHTML末尾に注入
        if mode == "prefecture" and len(items) > 1:
            review_html += "\n<hr style='margin: 40px 0; border-top: 2px dashed #134e4a; opacity: 0.2;' />\n"
            review_html += "<h3 style='color: #134e4a; font-weight: bold;'>🌟 ご紹介したおすすめ厳選宿の空室・詳細はこちら</h3>\n"
            review_html += "<ul style='list-style-type: none; padding: 0;'>\n"
            for item in items:
                h_name = item.get("hotelName", "")
                h_url = item.get("affiliateUrl", "")
                if h_url:
                    review_html += (
                        f"<li style='margin-bottom: 15px;'>"
                        f"<a href='{h_url}' target='_blank' style='display: inline-block; padding: 12px 20px; "
                        f"background: linear-gradient(to right, #d97706, #b45309); color: white; "
                        f"text-decoration: none; font-weight: bold; border-radius: 12px; "
                        f"box-shadow: 0 4px 6px rgba(0,0,0,0.1); width: 100%; text-align: center;'>"
                        f"✈️ {h_name} の詳細プランを見る</a></li>\n"
                    )
            review_html += "</ul>\n"

        categories = decide_category(main_item)
        
        title = f"【おすすめ宿】{hotel_name}の魅力と見どころをご紹介"
        if mode == "prefecture":
            title = f"【{main_item.get('_prefecture')}観光】絶景とグルメを巡るおすすめモデルコース"

        post_data = {
            "id": hotel_no,
            "title": title,
            "hotel_name": hotel_name,
            "description": description,
            "review": review_html,
            "image": image_url,
            "other_images": other_images,
            "affiliate_url": affiliate_url,
            "prefecture": main_item.get("_prefecture"),
            "area": main_item.get("_area"),
            "categories": categories,
            "price": main_item.get("hotelMinPrice"),
            "rating": main_item.get("reviewAverage"),
            "date": time.strftime("%Y-%m-%d %H:%M:%S")
        }

        save_individual_post(post_data)
        
        # 投稿済みに登録
        for item in items:
            save_to_cache(str(item.get("hotelNo")))
            
        print("Rakuten Crawler run completed successfully.")

    except Exception as e:
        print(f"Error in execution: {e}")
        exit(1)

if __name__ == "__main__":
    main()
