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

    target_pref_code = os.environ.get("TARGET_PREFECTURE")
    if target_pref_code:
        pref = next((p for p in PREFECTURES if p["code"] == target_pref_code.lower()), None)
        if not pref:
            print(f"Target prefecture '{target_pref_code}' not found. Falling back to random.")
            pref = random.choice(PREFECTURES)
    else:
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
    pref = item.get("_prefecture", "")
    price_text = f"{min_price}円〜" if min_price else "要確認"

    system_message = (
        "あなたは全国各地の宿を取材し尽くしたプロの旅行ライターです。"
        "読者がその宿に今すぐ泊まりたくなるような、臨場感あふれる具体的で魅力的な日本語の記事を書き上げてください。"
        "定型文や使い回しのテンプレート表現、AI特有の機械的な言い回しは一切使用せず、"
        f"「{hotel_name}」ならではの固有の魅力・設備・料理・周辺観光をリアルかつ詳細に描写してください。"
        "出力はプレーンテキスト1行目にメタディスクリプション、2行目以降にHTML本文のみです。"
        "それ以外の思考過程、ラベル、Markdownコードブロック等は一切出力しないでください。"
    )

    prompt = f"""次の宿を紹介するオリジナルの旅行ブログ記事を作成してください。

【施設名】{hotel_name}（{pref}）
【施設の特徴・キャッチコピー】{special}
【料金目安】{price_text}

━━━━━━━━━━━━━━━━━━━━
【構成と出力ルール】
━━━━━━━━━━━━━━━━━━━━
1行目: SEOメタディスクリプション（100〜130文字程度の自然で惹きつける紹介文。ラベル不要）
2行目以降: HTML本文（以下のHTMLタグのみ使用: <h2> <h3> <p> <ul> <li> <strong>）

■ 本文構成:
  <h2> {hotel_name}をおすすめする3つの理由
    <ul><li> 宿の強み・こだわりを具体的に3点
  <h2> アクセスとロケーションの魅力
    <p> 周辺の自然や街並み、アクセス情報
  <h3> くつろぎの客室と設備
    <p> 部屋の居心地やアメニティ、Wi-Fi環境など
  <h3> 自慢の温泉・大浴場（またはリラクゼーション）
    <p> 湯の心地よさ、お風呂の雰囲気
  <h2> 宿の周辺で楽しむおすすめ観光＆グルメ
    <ul><li> 周辺の名所やご当地グルメを具体的に紹介
  <h2> こんな旅におすすめ（カップル・家族・一人旅・女子旅）
    <p> それぞれの利用シーンに合わせた楽しみ方
  <h2> まとめ
    <p> 読者の旅情を誘う温かい結びの言葉
"""
    return system_message, prompt


def build_prefecture_prompt(items, pref_name, theme):
    """都道府県特集記事用のプロンプトを生成する"""
    hotels_info = ""
    for i, item in enumerate(items, 1):
        name = item.get("hotelName", "")
        special = item.get("hotelSpecial", "")
        price = item.get("hotelMinPrice", "")
        price_text = f"{price}円〜" if price else "要確認"
        hotels_info += f"宿{i}: 【{name}】\n  特徴: {special}\n  料金目安: {price_text}\n\n"

    system_message = (
        "あなたは日本全国の魅力を知り尽くした旅のエキスパート・観光ジャーナリストです。"
        f"{pref_name}の「{theme}」をテーマに、読者の知的好奇心と旅情を刺激する完全オリジナルの観光特集記事を執筆してください。"
        "テンプレート的な定型文や抽象的な表現は使わず、具体的な地名、名物、四季の表情、宿の個性を生きた言葉で綴ってください。"
        "出力はプレーンテキスト1行目にメタディスクリプション、2行目以降にHTML本文のみです。"
    )

    prompt = f"""次のテーマと厳選宿をもとに、{pref_name}の魅力的な旅行特集記事を作成してください。

【テーマ】{pref_name}で楽しむ「{theme}」の旅
【厳選宿泊施設】
{hotels_info}

━━━━━━━━━━━━━━━━━━━━
【構成と出力ルール】
━━━━━━━━━━━━━━━━━━━━
1行目: SEOメタディスクリプション（100〜130文字程度。ラベル不要）
2行目以降: HTML本文（使用可能タグ: <h2> <h3> <p> <ul> <li> <strong>）

■ 本文構成:
  <h2> {pref_name}で出会う「{theme}」の魅力
    <p> エリアの風土や旅のハイライト
  <h2> {pref_name}旅行を120%楽しむためのモデルコース＆ポイント
    <ul><li> 旅の計画、ベストシーズン、ご当地グルメなどの見逃せないポイント
  <h2> 「{theme}」を満喫できるおすすめ厳選宿
    （各宿について <h3>宿名</h3> とその魅力 <p> を具体的に記述）
  <h2> 旅のまとめ
    <p> 心に残る旅を締めくくるメッセージ
"""
    return system_message, prompt


def validate_and_clean_output(raw_text):
    """
    LLMの生出力を検証・クリーニングして (description, review_html) を返す。
    """
    text = raw_text.strip()
    if not text:
        print("[VALIDATE] 空のレスポンス")
        return None

    # Markdownコードブロックを除去
    text = re.sub(r"```(?:html|json|plaintext)?\s*", "", text)
    text = re.sub(r"\s*```", "", text)
    text = text.strip()

    # 思考タグ（<think>等）を除去
    text = re.sub(r"<(?:thought|thinking|think|reasoning)>.*?</(?:thought|thinking|think|reasoning)>",
                  "", text, flags=re.DOTALL | re.IGNORECASE).strip()

    # 1行目=description、2行目以降=review に分割
    lines = text.split("\n", 1)
    description = lines[0].strip()
    review_html = lines[1].strip() if len(lines) > 1 else ""

    # descriptionのラベル表記を除去
    description = re.sub(r"^.*?(?:メタ|SEO|ディスクリプション|description)[：:]\s*", "", description, flags=re.IGNORECASE).strip()
    description = re.sub(r"<[^>]*>", "", description).strip()

    if len(description) < 30:
        print(f"[VALIDATE] description が短すぎます ({len(description)}文字)")
        return None
    if len(description) > 160:
        description = description[:157] + "..."

    if not review_html or len(review_html) < 250:
        print(f"[VALIDATE] review_html が短すぎます ({len(review_html)}文字)")
        return None

    if not re.search(r"<h[23]", review_html, re.IGNORECASE):
        print("[VALIDATE] review_html に見出しタグがありません")
        return None

    # 表記ゆれ・誤字の正規化
    review_html = review_html.replace("Wオウ", "Wi-Fi").replace("W‑Fi", "Wi-Fi").replace("W−Fi", "Wi-Fi")
    description = description.replace("Wオウ", "Wi-Fi")

    print(f"[VALIDATE] OK — desc({len(description)}文字), review({len(review_html)}文字)")
    return description, review_html


def call_gemini_api(prompt, system_content=""):
    """Google Gemini API を直接呼び出す（最新モデル群をローテーション試行）"""
    gemini_key = os.environ.get("GEMINI_API_KEY")
    if not gemini_key:
        return None
    
    gemini_key = gemini_key.strip()
    # 最新対応モデル一覧（1.5系は完全廃止済み）
    available_models = [
        "gemini-3.7-flash",
        "gemini-3.6-flash",
        "gemini-3.5-flash",
        "gemini-3.5-flash-lite",
        "gemini-3.1-pro",
        "gemini-3.1-flash-lite",
        "gemini-3-flash",
        "gemini-2.5-pro",
        "gemini-2.5-flash",
        "gemini-2.5-flash-lite",
        "gemini-2.0-flash",
        "gemini-2.0-flash-lite"
    ]
    
    # 毎回ランダムにローテーションして負荷分散と多様性を確保
    models = random.sample(available_models, len(available_models))
    
    full_prompt = f"{system_content}\n\n{prompt}" if system_content else prompt

    for model in models:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={gemini_key}"
        payload = {
            "contents": [
                {
                    "parts": [{"text": full_prompt}]
                }
            ],
            "generationConfig": {
                "temperature": 0.7,
                "maxOutputTokens": 2500
            }
        }
        try:
            res = requests.post(url, json=payload, headers={"Content-Type": "application/json"}, timeout=45)
            if res.status_code == 200:
                data = res.json()
                candidates = data.get("candidates", [])
                if candidates:
                    parts = candidates[0].get("content", {}).get("parts", [])
                    if parts:
                        text = parts[0].get("text", "").strip()
                        if text:
                            print(f"[OK] Gemini API ({model}) 呼び出し成功")
                            return text
            else:
                print(f"[GEMINI] {model} status={res.status_code}: {res.text[:100]}")
        except Exception as e:
            print(f"[GEMINI EXCEPTION] {model}: {e}")
            
    return None


def call_groq_api(prompt, system_content=""):
    """Groq API を呼び出す"""
    groq_key = os.environ.get("GROQ_API_KEY")
    if not groq_key:
        return None
    
    groq_key = groq_key.strip()
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {groq_key}",
        "Content-Type": "application/json"
    }
    payload = {
        "model": "llama-3.3-70b-versatile",
        "messages": [
            {"role": "system", "content": system_content},
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.7
    }
    try:
        res = requests.post(url, headers=headers, json=payload, timeout=35)
        if res.status_code == 200:
            text = res.json()["choices"][0]["message"]["content"].strip()
            print("[OK] Groq API 呼び出し成功")
            return text
        else:
            print(f"[GROQ] status={res.status_code}: {res.text[:100]}")
    except Exception as e:
        print(f"[GROQ EXCEPTION]: {e}")
    return None


def call_openrouter_api(prompt, system_content=""):
    """OpenRouter API を呼び出す"""
    openrouter_key = os.environ.get("OPENROUTER_API_KEY")
    if not openrouter_key:
        return None
        
    openrouter_key = openrouter_key.strip()
    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {openrouter_key}",
        "Content-Type": "application/json"
    }
    models = ["google/gemini-2.0-flash-exp:free", "meta-llama/llama-3.3-70b-instruct:free", "deepseek/deepseek-chat"]
    
    for model in models:
        payload = {
            "model": model,
            "messages": [
                {"role": "system", "content": system_content},
                {"role": "user", "content": prompt}
            ],
            "temperature": 0.7
        }
        try:
            res = requests.post(url, headers=headers, json=payload, timeout=40)
            if res.status_code == 200:
                text = res.json()["choices"][0]["message"]["content"].strip()
                print(f"[OK] OpenRouter ({model}) 呼び出し成功")
                return text
            else:
                print(f"[OPENROUTER] {model} status={res.status_code}")
        except Exception as e:
            print(f"[OPENROUTER EXCEPTION] {model}: {e}")
            
    return None


def call_github_models(prompt, system_content=""):
    """GitHub Models (gpt-4o-mini) を呼び出す"""
    github_token = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
    if not github_token:
        return None
        
    url = "https://models.inference.ai.azure.com/chat/completions"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {github_token.strip()}"
    }
    payload = {
        "messages": [
            {"role": "system", "content": system_content},
            {"role": "user", "content": prompt}
        ],
        "model": "gpt-4o-mini"
    }
    try:
        res = requests.post(url, headers=headers, json=payload, timeout=45)
        if res.status_code == 200:
            text = res.json()["choices"][0]["message"]["content"].strip()
            print("[OK] GitHub Models 呼び出し成功")
            return text
        else:
            print(f"[GITHUB MODELS] status={res.status_code}")
    except Exception as e:
        print(f"[GITHUB MODELS EXCEPTION]: {e}")
    return None


def generate_article_with_llm(items, mode):
    """
    Gemini -> Groq -> OpenRouter -> GitHub Models の順で呼び出して記事を生成する
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

    # 1. Google Gemini API (最優先)
    print("--- 1. Attempting Google Gemini API ---")
    raw_text = call_gemini_api(prompt, system_message)
    if raw_text:
        result = validate_and_clean_output(raw_text)
        if result:
            return result

    # 2. Groq API
    print("--- 2. Attempting Groq API ---")
    raw_text = call_groq_api(prompt, system_message)
    if raw_text:
        result = validate_and_clean_output(raw_text)
        if result:
            return result

    # 3. OpenRouter API
    print("--- 3. Attempting OpenRouter API ---")
    raw_text = call_openrouter_api(prompt, system_message)
    if raw_text:
        result = validate_and_clean_output(raw_text)
        if result:
            return result

    # 4. GitHub Models API
    print("--- 4. Attempting GitHub Models API ---")
    raw_text = call_github_models(prompt, system_message)
    if raw_text:
        result = validate_and_clean_output(raw_text)
        if result:
            return result

    print("[FALLBACK] 全オンラインLLM呼び出し失敗 → 動的フォールバック生成を使用")
    return fallback_generation(items, mode)


def fallback_generation(items, mode):
    """
    LLMが全て失敗した場合のフェールセーフ（各宿の情報を最大限活用した動的生成）
    """
    if mode == "hotel":
        item = items[0]
        hotel_name = item.get("hotelName", "")
        special = item.get("hotelSpecial", "")
        pref = item.get("_prefecture", "")
        area = item.get("_area", "")
        description = f"{pref}のおすすめ宿「{hotel_name}」。{special[:80]}。{area}エリアの観光やリフレッシュに最適な宿泊体験をお届けします。"
        review_html = (
            f"<h2>{hotel_name}の魅力とおすすめポイント</h2>\n"
            f"<p>{special}</p>\n"
            f"<h2>{pref}の旅の拠点としての魅力</h2>\n"
            f"<p>{hotel_name}は、{pref}の豊かな風土と観光スポットを満喫するのに最適なロケーションに位置しています。旅の疲れを癒やす快適な客室と充実した設備で、心地よいひとときをお過ごしいただけます。</p>\n"
            f"<h2>まとめ</h2>\n"
            f"<p>{hotel_name}で、心温まる{pref}の素敵な旅の思い出を作ってみませんか。</p>"
        )
    else:
        pref = items[0].get("_prefecture", "")
        description = f"{pref}の絶景・グルメ・温泉を楽しむ旅行特集。厳選したおすすめ宿を拠点に、{pref}ならではの魅力を余すことなく体験しましょう。"
        hotel_list = "\n".join(
            f"<li><strong>{item.get('hotelName', '')}</strong>：{item.get('hotelSpecial', '')[:80]}</li>"
            for item in items
        )
        review_html = (
            f"<h2>{pref}を旅する魅力</h2>\n"
            f"<p>{pref}は豊かな自然・歴史・食文化が揃った魅力あふれるエリアです。四季折々の風景と地元ならではの味覚を心ゆくまでお楽しみください。</p>\n"
            f"<h2>今回ご紹介する厳選の宿</h2>\n"
            f"<ul>\n{hotel_list}\n</ul>\n"
            f"<h2>{pref}旅行のまとめ</h2>\n"
            f"<p>自然・温泉・美食のすべてが揃った{pref}で、日常を忘れる贅沢なひとときをぜひご堪能ください。</p>"
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
