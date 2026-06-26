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

def generate_article_with_llm(items, mode):
    system_message = "あなたは一流の旅行雑誌の編集長であり、SEO（検索エンジン最適化）とAI-Search（Perplexity等）の両方に極めて強い、表現力豊かなプロの旅行ライターです。"
    
    if mode == "hotel":
        item = items[0]
        hotel_name = item.get("hotelName", "")
        special = item.get("hotelSpecial", "")
        min_price = item.get("hotelMinPrice", "未定")
        print(f"Generating article in 'Hotel Focus' mode for {hotel_name}...")
        
        prompt = f"""以下の宿泊施設の情報を基にして、読者の「旅行に行きたい欲」を最大化する旅行雑誌風の紹介記事をHTML本文として執筆してください。

【施設名】: {hotel_name}
【キャッチコピー・特徴】: {special}
【最安価格目安】: {min_price}円〜

【SEO・AI-SEO 超特化ルール】
1. 構造化と結論ファースト: AI検索エンジン（SGE等）が要約しやすいよう、記事の冒頭（最初のH2の直下）に「この宿をおすすめする3つの理由」を箇条書き（<ul><li>）で簡潔に提示してください。
2. LSIキーワードの網羅: 「アクセス」「アメニティ」「周辺観光」「口コミ」「カップル」「子連れ」「極上の癒やし」といった関連検索キーワードを自然に、かつ網羅的に本文へ組み込んでください。
3. タグ指定: 検索エンジンのクローラーが理解しやすいよう <h2>, <h3>, <h4> を用いて階層構造を美しく作ってください。
4. ペルソナとトーン: 旅を愛し、全国の隠れた名宿を紹介するプロ旅行ライター。情緒あふれる熱量のある文章。
5. 文字数: 情報量を増やしSEO評価を高めるため、HTMLタグを含めて 1200文字〜1500文字程度 で詳細に執筆してください。

【出力形式】
- 1行目に、この記事専用のSEOメタディスクリプション（120文字程度、タグなしプレーンテキスト）を書いてください。
- 2行目以降に、記事のHTML本文（<h2>, <h3>, <h4>, <p>, <strong>, <ul>, <li>のみ）を記述してください。
- マークダウンのコードブロック（```html や ```）は一切出力しないでください。
"""
    else:
        pref_name = items[0].get("_prefecture", "")
        theme = random.choice(THEMES)
        
        hotels_info = ""
        for i, item in enumerate(items):
            hotels_info += f"■宿{i+1}: {item.get('hotelName', '')}\n  特徴: {item.get('hotelSpecial', '')}\n  価格目安: {item.get('hotelMinPrice', '未定')}円〜\n\n"
            
        print(f"Generating article in 'Prefecture Focus' mode for {pref_name} (Theme: {theme}) with {len(items)} hotels...")
        
        prompt = f"""以下の都道府県と「フォーカステーマ」、そして拠点となる【3つの厳選宿泊施設】の情報を基に、読者が「今すぐここへ旅行したい！」と思うような旅行雑誌の特集記事をHTML本文として執筆してください。

【対象の都道府県】: {pref_name}
【今回の特集テーマ】: {theme}
【紹介する厳選宿（3件）】:
{hotels_info}

【SEO・AI-SEO 超特化ルール】
1. 記事の構成:
   - 前半: 「{pref_name}」の観光の魅力について、【特集テーマ: {theme}】に沿って深く掘り下げて語ってください。ありきたりな紹介ではなく、特定のスポットやグルメ、歴史などを具体的に描写してください。
   - 中盤: AI検索エンジン向けに、「{pref_name}旅行を最大限に楽しむための3つのポイント」を箇条書きでまとめてください。
   - 後半: 旅の拠点として、上記で指定された【3つの厳選宿】を順番に見出し（<h3>）をつけて魅力的に紹介してください。
2. LSIキーワードの網羅: 「{pref_name} 観光」「モデルコース」「穴場」「アクセス」「おすすめホテル」「周辺ランチ」「絶景スポット」などを自然に散りばめてください。
3. タグ指定: <h2>, <h3>, <h4> を用いて階層構造を作り、読みやすくしてください。
4. 文字数: SEOの評価を最大化するため、HTMLタグを含めて 1500文字〜2000文字程度 の特大ボリュームで執筆してください。

【出力形式】
- 1行目に、この記事専用のSEOメタディスクリプション（120文字程度、タグなしプレーンテキスト）を書いてください。
- 2行目以降に、記事のHTML本文（<h2>, <h3>, <h4>, <p>, <strong>, <ul>, <li>のみ）を記述してください。
- マークダウンのコードブロック（```html や ```）は一切出力しないでください。
"""

    pollinations_models = ["openai", "openai-fast", "llama", "mistral", "qwen"]
    for attempt in range(2):
        for model in pollinations_models:
            try:
                print(f"Attempting with Pollinations AI (model: {model}, attempt: {attempt+1})...")
                response = requests.post(
                    "https://text.pollinations.ai/",
                    json={
                        "messages": [
                            {"role": "system", "content": system_message},
                            {"role": "user", "content": prompt}
                        ],
                        "model": model
                    },
                    timeout=50
                )
                if response.status_code == 200 and len(response.text.strip()) > 100:
                    return response.text.strip()
                elif response.status_code == 429:
                    time.sleep(3)
            except Exception as e:
                print(f"Pollinations AI ({model}) failed: {e}")
                time.sleep(2)

    return fallback_generation(items, mode)

def fallback_generation(items, mode):
    if mode == "hotel":
        hotel_name = items[0].get("hotelName", "")
        special = items[0].get("hotelSpecial", "")
        return f"""楽天トラベルでおすすめの温泉宿「{hotel_name}」の魅力と絶景を旅行ライターが徹底レポート。\n<h2>時を忘れる極上の癒やし空間。{hotel_name}で過ごす至福のひととき</h2><p>{special}</p>"""
    else:
        pref = items[0].get("_prefecture", "")
        return f"""{pref}の絶景観光スポットとおすすめ厳選宿特集。心を満たす極上の旅行プランをご提案。\n<h2>{pref}の魅力と巡るべき名所</h2><p>{pref}には素晴らしい景色と美食が溢れています。</p>"""

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
        current_hour = int(time.strftime("%H"))
        mode = "hotel" if current_hour % 2 == 0 else "prefecture"
        
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

        raw_output = generate_article_with_llm(items, mode)
        
        lines = raw_output.split("\n", 1)
        description = lines[0].strip()
        review_html = lines[1].strip() if len(lines) > 1 else raw_output
        
        description = re.sub(r"<[^>]*>", "", description).strip()
        if len(description) > 160:
            description = description[:157] + "..."

        # もし都道府県モード（3件の宿）の場合、2件目・3件目のアフィリエイトリンクをHTMLの末尾に注入する
        if mode == "prefecture" and len(items) > 1:
            review_html += "\n<hr style='margin: 40px 0; border-top: 2px dashed #134e4a; opacity: 0.2;' />\n"
            review_html += "<h3 style='color: #134e4a; font-weight: bold;'>🌟 ご紹介したおすすめ厳選宿の空室・詳細はこちら</h3>\n"
            review_html += "<ul style='list-style-type: none; padding: 0;'>\n"
            for item in items:
                h_name = item.get("hotelName", "")
                h_url = item.get("affiliateUrl", "")
                if h_url:
                    review_html += f"<li style='margin-bottom: 15px;'><a href='{h_url}' target='_blank' style='display: inline-block; padding: 12px 20px; background: linear-gradient(to right, #d97706, #b45309); color: white; text-decoration: none; font-weight: bold; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); width: 100%; text-align: center;'>✈️ {h_name} の詳細プランを見る</a></li>\n"
            review_html += "</ul>\n"

        categories = decide_category(main_item)
        
        title = f"【旅ライター厳選】{hotel_name} — 心を解きほぐす極上のリフレッシュ紀行"
        if mode == "prefecture":
            title = f"【{main_item.get('_prefecture')}観光特集】絶景と美食を巡る旅＆おすすめ厳選宿"

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
