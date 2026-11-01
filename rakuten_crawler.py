import os
import random
import requests
import time
import json
import re

# 観光地画像自動取得モジュール
try:
    from scripts.tourist_image_fetcher import fetch_tourist_spot_image
except ImportError:
    from tourist_image_fetcher import fetch_tourist_spot_image

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

def clean_short_phrase(text, max_len=22):
    """キャッチコピー等を途中でぶつ切りにせず、句読点や記号の区切りで自然に抽出する"""
    if not text:
        return ""
    s = re.sub(r"【[^】]*】", "", str(text)).strip()
    parts = [p.strip() for p in re.split(r"[！!。．♪☆◆◇｜|／/\n]+", s) if len(p.strip()) >= 4]
    for p in parts:
        if len(p) <= max_len:
            return p
    return ""


def build_hotel_prompt(item):
    """ホテル単体記事用のプロンプトを生成する"""
    hotel_name = item.get("hotelName", "")
    special = item.get("hotelSpecial", "")
    min_price = item.get("hotelMinPrice", "")
    pref = item.get("_prefecture", "")
    area = item.get("_area", "")
    address = f"{ item.get('address1', '') }{ item.get('address2', '') }"
    price_text = f"{min_price:,}円〜" if isinstance(min_price, int) else (f"{min_price}円〜" if min_price else "プランにより変動")
    access = item.get("access", "")
    parking = item.get("parkingInformation", "")
    nearest = item.get("nearestStation", "")
    rating = item.get("reviewAverage", "")
    rating_text = f"★{rating}" if rating else "高評価"
    review_count = item.get("reviewCount", "")
    user_review = re.sub(r"<[^>]*>", "", str(item.get("userReview", "")))[:250]

    angle_choices = [
        "現地の空気感・時間帯ごとの過ごし方（チェックインから翌朝まで）を軸にした滞在ルポ構成",
        "客室の居心地・湯処（またはバスルーム）・朝食や周辺グルメの実用性を深掘りする徹底ガイド構成",
        "アクセス動線・周辺観光スポットとの組み合わせ・旅の予算対効果を重視した実践プラン構成",
        "カップル・家族・一人旅など同行者別の部屋選びと、現地で失敗しないための予約・滞在ノウハウ構成"
    ]
    chosen_angle = random.choice(angle_choices)

    system_message = (
        "あなたは全国各地の宿泊施設と観光地を実際に歩き、読者目線で実用的な旅ガイドを執筆するベテラン旅行ジャーナリストです。"
        "AI特有の紋切り型表現（「いかがでしたでしょうか」「本記事では〜徹底解説します」「至福のひととき」「日常の喧騒を忘れ」「心ゆくまで堪能」など）や、"
        "他記事と共通する固定見出し（「〜をおすすめする3つの理由」「心に残る滞在を叶えるまとめ」など）は一切使用禁止です。"
        f"今回は「{chosen_angle}」で、「{hotel_name}」固有の立地・設備・強みを掘り下げた2,500文字以上の独立記事を作成してください。\n"
        "出力はプレーンテキストで、必ず以下の3部構成で出力してください：\n"
        "1行目: 宿の固有の魅力と地名が入った自然なSEO記事タイトル（32〜45文字程度。途中で文が切れない完結したタイトル）\n"
        "2行目: 検索意図を満たすSEOメタディスクリプション（100〜135文字程度。ラベル不要）\n"
        "3行目以降: HTML本文のみ（使用可能タグ: <h2> <h3> <p> <ul> <li> <strong>）\n"
        "思考過程やラベル（「タイトル:」など）、Markdownコードブロックは一切含めないでください。"
    )

    prompt = f"""次の宿泊施設について、現地情報と公式スペックを踏まえた完全オリジナルの旅行ガイド記事を執筆してください。

【施設名】{hotel_name}
【所在地】{pref} {address}（{area}エリア）
【宿のキャッチコピー・特徴】{special}
【アクセス情報】{access}（最寄り駅：{nearest}）
【駐車場条件】{parking}
【参考最安料金】{price_text}
【クチコミ評価】{rating_text}（{review_count}件）
【宿泊者の声（抜粋）】{user_review}

━━━━━━━━━━━━━━━━━━━━
【執筆・構成ルール】
━━━━━━━━━━━━━━━━━━━━
1行目: 宿固有の特徴が伝わる完結したSEOタイトル（ラベル不要）
2行目: 100〜135文字のSEOメタディスクリプション（ラベル不要）
3行目以降: HTML本文（使用可能タグ: <h2> <h3> <p> <ul> <li> <strong>、合計2,500文字以上）

■ 内容の必須要件（見出し文言は毎回この宿に合わせて独自に考案すること）:
- 宿のロケーション（{address}・{nearest}駅からの動線・駐車場条件）と到着時の印象
- 客室の特徴・寝具や設備の使い勝手・どんな滞在スタイルに向いているか
- お風呂（温泉・大浴場・客室バスルーム）や食事プラン・朝食の魅力
- {hotel_name}を拠点に巡りたい{pref}の実在する周辺観光名所・ご当地グルメと1泊2日の時間配分アイデア
- 宿泊前に知っておきたい実用Q&A（3問程度・他の記事と被らないこの宿固有の疑問と回答）
"""
    return system_message, prompt


def build_prefecture_prompt(items, pref_name, theme):
    """都道府県特集記事用のプロンプトを生成する"""
    hotels_info = ""
    for i, item in enumerate(items, 1):
        name = item.get("hotelName", "")
        address = f"{ item.get('address1', '') }{ item.get('address2', '') }"
        special = item.get("hotelSpecial", "")
        price = item.get("hotelMinPrice", "")
        price_text = f"{price:,}円〜" if isinstance(price, int) else (f"{price}円〜" if price else "プランにより変動")
        access = item.get("access", "")
        parking = item.get("parkingInformation", "")
        rating = item.get("reviewAverage", "")
        rating_text = f"★{rating}" if rating else "高評価"
        hotels_info += (
            f"宿{i}: 【{name}】（所在地: {pref_name}{address}）\n"
            f"  特徴: {special}\n"
            f"  アクセス: {access} / 駐車場: {parking}\n"
            f"  評価: {rating_text} / 参考料金: {price_text}\n\n"
        )

    system_message = (
        "あなたは日本全国の地域観光と宿選びに精通した旅行ジャーナリストです。"
        f"{pref_name}の「{theme}」をテーマに、読者が実際に旅程を組める具体性と臨場感を備えた2,500文字以上のオリジナル特集記事を執筆してください。"
        "AI特有の紋切り型表現（「いかがでしたでしょうか」「本記事では〜徹底解説します」「至福のひととき」「心ゆくまで堪能」など）や固定見出しの使い回しは厳禁です。\n"
        "出力はプレーンテキストで、必ず以下の3部構成で出力してください：\n"
        f"1行目: 読者の目を引く完結したSEO記事タイトル（32〜45文字程度。ラベル不要）\n"
        "2行目: SEOメタディスクリプション（100〜135文字程度。ラベル不要）\n"
        "3行目以降: HTML本文のみ（使用可能タグ: <h2> <h3> <p> <ul> <li> <strong>）\n"
        "思考過程やラベル、Markdownコードブロックは一切含めないでください。"
    )

    prompt = f"""次のテーマと厳選宿データをもとに、{pref_name}の旅行特集記事を作成してください。

【テーマ】{pref_name}で楽しむ「{theme}」の旅
【厳選宿泊施設データ】
{hotels_info}

━━━━━━━━━━━━━━━━━━━━
【執筆・構成ルール】
━━━━━━━━━━━━━━━━━━━━
1行目: エリアとテーマの魅力が伝わるSEOタイトル（ラベル不要）
2行目: 100〜135文字のSEOメタディスクリプション（ラベル不要）
3行目以降: HTML本文（使用可能タグ: <h2> <h3> <p> <ul> <li> <strong>、合計2,500文字以上）

■ 内容の必須要件（見出しはテーマに合わせて独自に作成すること）:
- {pref_name}でこのテーマの旅がおすすめな理由と季節ごとの見どころ・実在の名所や名物グルメ
- 移動手段（電車・レンタカー）や混雑回避のコツを含めた1泊2日モデルコース
- 各宿泊施設（{len(items)}軒すべて）の具体的な強み・立地・どんな人に向いているかの比較解説
- 宿選びや予約タイミングで失敗しないための実用アドバイス
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
                "temperature": 0.75,
                "maxOutputTokens": 8192
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
        address = f"{ item.get('address1', '') }{ item.get('address2', '') }"
        min_price = item.get("hotelMinPrice")
        price_text = f"¥{min_price:,}〜" if min_price else "宿泊プランにより変動"
        rating = item.get("reviewAverage")
        rating_text = f"総合評価 ★{rating}" if rating else "高評価"
        short_phrase = clean_short_phrase(special, 20)
        if short_phrase:
            title = f"【{pref}】{hotel_name}の宿泊ガイド｜{short_phrase}・アクセス＆滞在情報"
        else:
            title = f"【{pref}】{hotel_name}の宿泊ガイド｜客室・設備・アクセス＆予約のポイント"
        description = f"{pref}{address}の「{hotel_name}」（{rating_text}／参考料金{price_text}）。{clean_short_phrase(special, 60) or '立地と設備のバランスに優れた人気宿'}。交通アクセス・駐車場条件から客室・滞在のポイントまで詳しく紹介します。"
        
        review_html = f"""<h2>{hotel_name}の特徴とロケーション・滞在ポイント</h2>
<ul>
<li><strong>宿のアピールポイント：</strong> {special or f'{pref}エリアでの観光・ビジネスに便利な宿泊環境が整っています。'}</li>
<li><strong>所在地・交通アクセス：</strong> {pref}{address} ／ {access or f'最寄り駅「{nearest}」からのアクセスが良好です。'}</li>
<li><strong>駐車場・評価データ：</strong> 駐車場：{parking or '詳細は公式プラン画面にてご確認ください'}（{rating_text} ／ 参考料金：{price_text}）</li>
</ul>

<h2>{pref}{address}周辺のアクセス動線とチェックイン前の確認事項</h2>
<p>{hotel_name}は、{pref}（{area}エリア）での観光や出張の拠点として利用しやすいロケーションにあります。{access}。マイカーやレンタカーで向かう場合は駐車場条件（{parking or '要確認'}）を事前に把握しておくと、当日の到着がスムーズです。</p>

<h3>客室の居心地と館内設備・お風呂の使い勝手</h3>
<p>客室は落ち着いた内装で整えられており、移動や観光の後にしっかり体を休められる空間です。Wi-Fi環境や基本アメニティも揃っているため、1泊2日の週末旅行から連泊・ワーケーションまで幅広い用途に対応します。入浴設備でも一日の疲れをさっぱりと洗い流せます。</p>

<h2>{hotel_name}を拠点に巡る{pref}の周辺観光＆ご当地グルメ</h2>
<p>チェックイン前後の時間帯を活用して、{nearest or pref}周辺の観光名所や商店街・道の駅へ足を延ばすのがおすすめです。{pref}ならではの旬の食材を使ったランチや銘菓・地酒のお土産選びを組み合わせることで、移動の無駄がない充実した旅程が組めます。</p>

<h2>予約前に押さえておきたい料金目安とプラン選びのコツ</h2>
<p>「{hotel_name}」の参考最安料金は<strong>{price_text}</strong>からとなっています。週末や連休は人気の部屋タイプから埋まりやすいため、早割プランや楽天トラベルの「5と0のつく日」クーポンを活用して早めに空室状況を確認してみてください。</p>"""
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
        pref_name = main_item.get('_prefecture', '')
        if mode == "prefecture" and len(items) > 1:
            review_html += "\n<hr style='margin: 40px 0; border-top: 2px dashed #134e4a; opacity: 0.2;' />\n"
            review_html += f"<h3 style='color: #134e4a; font-weight: bold;'>🏨 今回ピックアップした{pref_name}の宿泊施設の空室・プラン確認</h3>\n"
            review_html += "<ul style='list-style-type: none; padding: 0;'>\n"
            for item in items:
                h_name = item.get("hotelName", "")
                h_url = item.get("affiliateUrl", "")
                if h_url:
                    review_html += (
                        f"<li style='margin-bottom: 15px;'>"
                        f"<a href='{h_url}' target='_blank' rel='sponsored noopener noreferrer' style='display: inline-block; padding: 12px 20px; "
                        f"background: linear-gradient(to right, #d97706, #b45309); color: white; "
                        f"text-decoration: none; font-weight: bold; border-radius: 12px; "
                        f"box-shadow: 0 4px 6px rgba(0,0,0,0.1); width: 100%; text-align: center;'>"
                        f"✈️ {h_name} の最新プラン・空室状況を見る</a></li>\n"
                    )
            review_html += "</ul>\n"

        categories = decide_category(main_item)
        
        # タイトル決定: LLMが生成した魅力的な固有タイトルがあれば最優先、なければ動的組み立て
        if gen_title and len(gen_title) >= 10:
            title = gen_title
        elif mode == "hotel":
            special_snippet = clean_short_phrase(main_item.get("hotelSpecial") or "", 20)
            if special_snippet:
                title = f"【{pref_name}】{hotel_name}の宿泊ガイド｜{special_snippet}・見どころ紹介"
            else:
                title = f"【{pref_name}】{hotel_name}の魅力と見どころ・宿泊ガイド"
        else:
            title = f"【{pref_name}観光】名所めぐりと美食を楽しむ周遊モデルコース＆厳選宿"

        # 観光地・名所の実写画像を取得して記事＆ギャラリーに統合
        pref_name = main_item.get('_prefecture', '')
        area_name = main_item.get('_area', '')
        tourist_spot_names = [f"{pref_name} {area_name}", area_name, pref_name]
        
        fetched_spot_image = None
        for s_candidate in tourist_spot_names:
            if not s_candidate:
                continue
            try:
                spot_res = fetch_tourist_spot_image(s_candidate, min_width=600)
                if spot_res and spot_res.get("url"):
                    fetched_spot_image = spot_res
                    break
            except Exception as e:
                print(f"[WARN] Failed to fetch tourist image for candidate {s_candidate}: {e}")

        # 観光地画像が取得できた場合、横長ギャラリー(other_images)に追加
        if fetched_spot_image and fetched_spot_image.get("url"):
            spot_img_url = fetched_spot_image["url"]
            if spot_img_url not in other_images:
                other_images.append(spot_img_url)
                print(f"[SPOT-IMG] Added tourist spot image to other_images: {fetched_spot_image['spot']} ({fetched_spot_image['title']})")

            # 記事本文中の周辺観光セクションにレスポンシブな画像タグを挿入
            spot_caption = f"{pref_name}・{fetched_spot_image.get('title', area_name)} 周辺の美しい情景"
            spot_img_html = (
                f'<figure style="margin: 24px 0; text-align: center;">'
                f'<img src="{spot_img_url}" alt="{spot_caption}" '
                f'style="width: 100%; max-height: 440px; object-fit: cover; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);" loading="lazy" />'
                f'<figcaption style="margin-top: 8px; font-size: 12px; color: #64748b; font-weight: 600;">📍 {spot_caption}</figcaption>'
                f'</figure>'
            )
            # 「おすすめ観光」見出しの直下に差し込み、なければ末尾に追加
            if "おすすめ観光" in review_html:
                parts = review_html.split("おすすめ観光", 1)
                sub_parts = parts[1].split("</h2>", 1)
                if len(sub_parts) == 2:
                    review_html = parts[0] + "おすすめ観光" + sub_parts[0] + "</h2>\n" + spot_img_html + sub_parts[1]
                else:
                    review_html += f"\n{spot_img_html}"
            else:
                review_html += f"\n{spot_img_html}"

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
