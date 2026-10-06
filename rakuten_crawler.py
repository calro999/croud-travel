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
    area = item.get("_area", "")
    price_text = f"{min_price}円〜" if min_price else "要確認"
    access = item.get("access", "")
    parking = item.get("parkingInformation", "")
    nearest = item.get("nearestStation", "")
    rating = item.get("reviewAverage", "")
    rating_text = f"★{rating}" if rating else "高評価"
    review_count = item.get("reviewCount", "")

    system_message = (
        "あなたは全国各地の宿を取材し尽くしたプロの旅行ライター・観光ジャーナリストです。"
        "読者がその宿に今すぐ泊まりたくなるような、具体的で臨場感あふれる日本語の記事を書き上げてください。"
        "使い回しの定型文や「〜はいかがでしょうか」「魅力をご紹介します」といったAI臭いテンプレート表現は一切使用禁止です。"
        f"「{hotel_name}」ならではの固有の設備、立地、温泉、食事、周辺スポットの魅力を生き生きとした言葉で描写してください。"
        "出力はプレーンテキストで、必ず以下の3部構成で出力してください：\n"
        "1行目: 読者のクリックを促す魅力的なSEO記事タイトル（32〜40文字程度。例：【福岡】ホテルニューオータニ博多宿泊ルポ！渡辺通駅徒歩1分の快適ステイと美食体験）\n"
        "2行目: 検索意図を満たすSEOメタディスクリプション（100〜130文字程度。ラベル不要）\n"
        "3行目以降: HTML本文のみ（使用可能タグ: <h2> <h3> <p> <ul> <li> <strong>）\n"
        "思考過程やラベル（「タイトル:」「ディスクリプション:」など）やMarkdownコードブロックは一切含めないでください。"
    )

    prompt = f"""次の宿を紹介するオリジナルの旅行ブログ記事を作成してください。

【施設名】{hotel_name}（{pref}・{area}エリア）
【宿のキャッチコピー・特徴】{special}
【アクセス情報】{access}
【最寄り駅】{nearest}
【駐車場】{parking}
【料金目安】{price_text}
【クチコミ評価】{rating_text}（{review_count}件）

━━━━━━━━━━━━━━━━━━━━
【構成と出力ルール】
━━━━━━━━━━━━━━━━━━━━
1行目: 固有の強みを含めたSEOタイトル（32〜40文字程度。ラベル不要）
2行目: SEOメタディスクリプション（100〜130文字程度。ラベル不要）
3行目以降: HTML本文（使用可能タグ: <h2> <h3> <p> <ul> <li> <strong>）

■ 本文構成（各見出しで宿固有のリアルな情景を描写し、文字数は1,200文字以上）:
  <h2> {hotel_name}をおすすめする3つの理由
    <ul><li> 宿の強み・こだわり・他にはない価値を具体的に3点
  <h2> 交通アクセスと周辺ロケーションの魅力
    <p> 最寄り駅や車でのアクセス、周辺の街並みや自然環境
  <h3> くつろぎの客室と充実の館内設備
    <p> 客室の居心地、ベッド・寝具、Wi-Fiやデスク環境、アメニティ
  <h3> 旅の疲れを癒やすお風呂（温泉・大浴場・バスルーム）
    <p> 湯の心地よさ、お風呂の雰囲気やリフレッシュ設備
  <h2> 宿の周辺で味わうご当地グルメ＆おすすめ観光名所
    <ul><li> {pref}ならではの名物料理や、立ち寄るべき周辺スポットを具体的に紹介
  <h2> こんな旅のスタイルにおすすめ（一人旅・カップル・家族旅行・ワーケーション）
    <p> それぞれの滞在シーンに合わせた過ごし方の提案
  <h2> 心に残る滞在を叶えるまとめ
    <p> 読者の旅情を誘う温かく魅力的な結びの言葉
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
        access = item.get("access", "")
        rating = item.get("reviewAverage", "")
        rating_text = f"★{rating}" if rating else "高評価"
        hotels_info += f"宿{i}: 【{name}】\n  特徴: {special}\n  アクセス: {access}\n  評価: {rating_text}\n  料金目安: {price_text}\n\n"

    system_message = (
        "あなたは日本全国の魅力を知り尽くした旅のエキスパート・観光ジャーナリストです。"
        f"{pref_name}の「{theme}」をテーマに、読者の知的好奇心と旅情を刺激する完全オリジナルの観光特集記事を執筆してください。"
        "テンプレート的な定型文や抽象的な表現は使わず、具体的な地名、名物、四季の表情、宿の個性を生きた言葉で綴ってください。"
        "出力はプレーンテキストで、必ず以下の3部構成で出力してください：\n"
        f"1行目: 読者の旅情をくすぐるSEO記事タイトル（32〜40文字程度。例：【{pref_name}】{theme}を満喫する旅！おすすめモデルコースと厳選宿3選）\n"
        "2行目: SEOメタディスクリプション（100〜130文字程度。ラベル不要）\n"
        "3行目以降: HTML本文のみ（使用可能タグ: <h2> <h3> <p> <ul> <li> <strong>）\n"
        "思考過程やラベル、Markdownコードブロックは一切含めないでください。"
    )

    prompt = f"""次のテーマと厳選宿をもとに、{pref_name}の魅力的な旅行特集記事を作成してください。

【テーマ】{pref_name}で楽しむ「{theme}」の旅
【厳選宿泊施設】
{hotels_info}

━━━━━━━━━━━━━━━━━━━━
【構成と出力ルール】
━━━━━━━━━━━━━━━━━━━━
1行目: テーマとエリアが明確なSEOタイトル（32〜40文字程度。ラベル不要）
2行目: SEOメタディスクリプション（100〜130文字程度。ラベル不要）
3行目以降: HTML本文（使用可能タグ: <h2> <h3> <p> <ul> <li> <strong>）

■ 本文構成（充実した1,200文字以上の本文）:
  <h2> {pref_name}で出会う「{theme}」の旅の魅力
    <p> エリアの風土や四季の美しさ、旅のハイライト
  <h2> 120%楽しむおすすめ観光モデルコース＆旅のポイント
    <ul><li> 旅の巡り方、ベストシーズン、必食のご当地名物などのポイント
  <h2> 「{theme}」を満喫できる厳選宿ガイド
    （各宿について <h3>宿名</h3> とその個性・特徴 <p> を具体的に記述）
  <h2> 旅のまとめ
    <p> 心に残る旅を締めくくる温かいメッセージ
"""
    return system_message, prompt


def validate_and_clean_output(raw_text):
    """
    LLMの生出力を検証・クリーニングして (title, description, review_html) を返す。
    3行（タイトル、ディスクリプション、HTML本文）形式、または旧2行形式に対応。
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

    lines = [line.strip() for line in text.split("\n") if line.strip()]
    if len(lines) < 2:
        print("[VALIDATE] 出力の行数が不足しています")
        return None

    # 1行目がタイトル、2行目がディスクリプション、3行目以降がHTML本文と判定
    first_line = lines[0]
    second_line = lines[1]
    
    # ラベル除去
    first_line = re.sub(r"^.*?(?:タイトル|title)[：:]\s*", "", first_line, flags=re.IGNORECASE).strip()
    first_line = re.sub(r"<[^>]*>", "", first_line).strip()
    
    second_line = re.sub(r"^.*?(?:メタ|SEO|ディスクリプション|description)[：:]\s*", "", second_line, flags=re.IGNORECASE).strip()
    second_line = re.sub(r"<[^>]*>", "", second_line).strip()

    title = None
    description = None
    review_html = ""

    # 判定: 1行目が短く（80文字以下）HTMLタグを含まない場合はタイトルとして採用
    if len(first_line) <= 80 and not first_line.startswith("<h"):
        title = first_line
        description = second_line
        # 3行目以降を本文とする
        content_lines = text.split("\n", 2)
        if len(content_lines) > 2:
            review_html = content_lines[2].strip()
    else:
        # 旧2行形式のフォールバック（1行目=description、2行目以降=本文）
        description = first_line
        content_lines = text.split("\n", 1)
        if len(content_lines) > 1:
            review_html = content_lines[1].strip()

    if not description or len(description) < 30:
        print(f"[VALIDATE] description が短すぎます ({len(description) if description else 0}文字)")
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
    if title:
        title = title.replace("Wオウ", "Wi-Fi")

    print(f"[VALIDATE] OK — title({title}), desc({len(description)}文字), review({len(review_html)}文字)")
    return title, description, review_html


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
    LLMが全て失敗した場合のフェールセーフ（各宿のAPI実データを最大限活用した動的生成）
    """
    if mode == "hotel":
        item = items[0]
        hotel_name = item.get("hotelName", "")
        special = item.get("hotelSpecial", "")
        pref = item.get("_prefecture", "")
        area = item.get("_area", "")
        access = item.get("access", "")
        parking = item.get("parkingInformation", "")
        nearest = item.get("nearestStation", "")
        min_price = item.get("hotelMinPrice")
        price_text = f"¥{min_price:,}〜" if min_price else "宿泊プランにより変動"
        rating = item.get("reviewAverage")
        rating_text = f"総合評価 ★{rating}" if rating else "高評価"
        
        title = f"【{pref}】{hotel_name}宿泊ガイド！{special[:18]}・アクセス＆魅力ルポ"
        description = f"{pref}（{area}エリア）の人気宿「{hotel_name}」。{special[:70]}。アクセス情報や周辺観光・最新宿泊プランの魅力を旅ライターが詳しくガイドします。"
        
        review_html = f"""<h2>{hotel_name}をおすすめする3つの理由</h2>
<ul>
<li><strong>宿の魅力とこだわり：</strong> {special or f'{pref}の豊かな風土を満喫できる上質なステイ環境が整っています。'}</li>
<li><strong>交通アクセスと立地：</strong> {access or f'最寄り駅「{nearest}」からのアクセスが良好で観光拠点に最適です。'}</li>
<li><strong>安心の設備とサービス：</strong> {parking or '充実した館内設備とホスピタリティで快適にお過ごしいただけます。'}（{rating_text}）</li>
</ul>

<h2>交通アクセスと周辺ロケーションの魅力</h2>
<p>{hotel_name}は、{pref}の{area}エリアを巡る旅の拠点として抜群のロケーションに位置しています。{access}。周辺にはご当地の自然や風情ある街並みが広がり、観光やビジネスの合間にも心地よい散策が楽しめます。</p>

<h3>くつろぎの客室と充実の館内設備</h3>
<p>客室は細部まで清掃が行き届いた快適なプライベート空間。旅の疲れを優しく包み込む寝具や、機能的なアメニティが揃っています。ビジネスやワーケーションに嬉しいWi-Fi環境も整い、思い思いのリラックスタイムを過ごせます。</p>

<h3>旅の疲れを癒やすお風呂とリフレッシュ空間</h3>
<p>一日の終わりにゆったりと体を温めるバスタイムは旅の醍醐味。清潔で開放的な浴場で手足を伸ばせば、日々の喧騒を忘れて心身ともにリフレッシュできます。</p>

<h2>宿の周辺で楽しむおすすめ観光＆ご当地グルメ</h2>
<p>{pref}ならではの旬の味覚を堪能できる名店や、歴史ある名所が点在しています。チェックイン前や出発後の時間を使って、土地の文化と味覚を五感で楽しむのがおすすめです。</p>

<h2>まとめ</h2>
<p>旅の満足度を高めてくれる「{hotel_name}」。参考価格は{price_text}から。楽天トラベル公式ページで最新の空室状況や季節限定プランをぜひチェックしてみてください。</p>"""
        return title, description, review_html
    else:
        pref = items[0].get("_prefecture", "")
        theme = random.choice(THEMES)
        title = f"【{pref}観光】{theme}を満喫する旅！おすすめモデルコースと厳選宿"
        description = f"{pref}の絶景・グルメ・温泉を楽しむ旅行特集。厳選したおすすめ宿を拠点に、{theme}の魅力を余すことなく体験できるモデルコースを旅のエキスパートが徹底解説します。"
        
        hotel_sections = []
        for item in items:
            h_name = item.get("hotelName", "")
            h_special = item.get("hotelSpecial", "")
            h_access = item.get("access", "")
            h_price = item.get("hotelMinPrice")
            p_text = f"¥{h_price:,}〜" if h_price else "要確認"
            hotel_sections.append(
                f"<h3>【{h_name}】</h3>\n"
                f"<p>{h_special or f'{pref}を代表する人気宿。快適な客室と温かいおもてなしが魅力です。'}</p>\n"
                f"<p><strong>アクセス:</strong> {h_access} / <strong>参考宿泊料金:</strong> {p_text}</p>"
            )
        
        review_html = f"""<h2>{pref}で出会う「{theme}」の魅力</h2>
<p>{pref}は豊かな自然、歴史、食文化が息づく日本屈指の観光地です。四季折々の絶景と地元ならではの美食に触れることで、日常を離れた贅沢な癒やしのひとときを過ごせます。</p>

<h2>{pref}旅行を120%楽しむためのモデルコース＆ポイント</h2>
<ul>
<li><strong>ベストシーズンの見どころ:</strong> 季節ごとに表情を変える名所やイベントに合わせて訪れるのがおすすめです。</li>
<li><strong>ご当地グルメの堪能:</strong> 地元の獲れたて食材や郷土料理を味わえる名店へ立ち寄りましょう。</li>
<li><strong>快適な移動手段:</strong> 周遊観光にはレンタカーまたは主要駅からの路線バス・電車の活用が便利です。</li>
</ul>

<h2>「{theme}」を満喫できるおすすめ厳選宿</h2>
{"".join(hotel_sections)}

<h2>旅のまとめ</h2>
<p>心に残る素敵な旅の思い出作りに、ぜひ{pref}の魅力あふれる宿をご利用ください。</p>"""
        return title, description, review_html


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

        # 記事生成（バリデーション済みの (title, description, review_html) が返る）
        gen_title, description, review_html = generate_article_with_llm(items, mode)

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
        
        # タイトル決定: LLMが生成した魅力的な固有タイトルがあれば最優先、なければ動的組み立て
        pref_name = main_item.get('_prefecture')
        if gen_title and len(gen_title) >= 10:
            title = gen_title
        elif mode == "hotel":
            special_snippet = (main_item.get("hotelSpecial") or "")[:20]
            if special_snippet:
                title = f"【{pref_name}】{hotel_name}宿泊ガイド！{special_snippet}・見どころ解説"
            else:
                title = f"【{pref_name}】{hotel_name}の魅力と見どころ・宿泊ルポガイド"
        else:
            title = f"【{pref_name}観光】絶景と美食を満喫するおすすめ周遊モデルコース＆厳選宿"

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
