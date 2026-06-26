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
    {"code": "wakayama", "name": "動作確認中", "area": "近畿"},
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

# 和歌山県の文字化け防止修正
for p in PREFECTURES:
    if p["code"] == "wakayama":
        p["name"] = "和歌山県"

def load_posted_cache():
    if os.path.exists(CACHE_FILE):
        with open(CACHE_FILE, "r", encoding="utf-8") as f:
            return set(line.strip() for line in f if line.strip())
    return set()

def save_to_cache(content_id):
    with open(CACHE_FILE, "a", encoding="utf-8") as f:
        f.write(f"{content_id}\n")

def fetch_rakuten_item():
    app_id_raw = os.environ.get("RAKUTEN_APPLICATION_ID")
    app_id = app_id_raw.strip() if app_id_raw else None
    
    aff_id_raw = os.environ.get("RAKUTEN_AFFILIATE_ID")
    affiliate_id = aff_id_raw.strip() if aff_id_raw else None
    
    ak_raw = os.environ.get("RAKUTEN_ACCESS_KEY")
    access_key = ak_raw.strip() if ak_raw else None
    
    if not app_id:
        raise ValueError("RAKUTEN_APPLICATION_ID must be set in environment variables.")
        
    print(f"Debug: RAKUTEN_APPLICATION_ID length: {len(app_id)}")

    # ランダムに都道府県を選択
    pref = random.choice(PREFECTURES)
    print(f"Selected Prefecture for search: {pref['name']} ({pref['code']})")

    # 楽天トラベル施設検索API (OpenAPI版: UUIDとアクセスキーに対応)
    url = "https://openapi.rakuten.co.jp/engine/api/Travel/SimpleHotelSearch/20170426"
    
    params = {
        "applicationId": app_id,
        "format": "json",
        "largeClassCode": "japan",
        "middleClassCode": pref["code"],
        "genreCode": "onsen" if random.random() > 0.5 else "standard",
        "hits": 20
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
    
    for h in hotels:
        hotel_container = h.get("hotel", [])
        if not hotel_container:
            continue
        
        basic_info = hotel_container[0].get("hotelBasicInfo", {})
        hotel_no = basic_info.get("hotelNo")
        
        if not hotel_no:
            continue

        hotel_no_str = str(hotel_no)
        if hotel_no_str not in posted_cache:
            basic_info["_prefecture"] = pref["name"]
            basic_info["_area"] = pref["area"]
            return basic_info

    if hotels:
        first_hotel = hotels[0].get("hotel", [])[0].get("hotelBasicInfo", {})
        first_hotel["_prefecture"] = pref["name"]
        first_hotel["_area"] = pref["area"]
        return first_hotel

    return None

def generate_article_with_llm(item):
    hotel_name = item.get("hotelName", "")
    special = item.get("hotelSpecial", "")
    min_price = item.get("hotelMinPrice", "未定")
    
    prompt = f"""以下の宿泊施設の情報を基にして、読者の「旅行に行きたい欲」を最大化するような旅行雑誌風の紹介記事をHTML本文として執筆してください。

【施設名】: {hotel_name}
【キャッチコピー・特徴】: {special}
【最安価格目安】: {min_price}円〜

【執筆ルール】
1. ペルソナ: 旅を愛し、全国の隠れた名宿や絶品グルメ宿を紹介する人気プロ旅行ライター。情緒あふれる、かつ情景が目に浮かぶような熱量ある紀行文で執筆してください。
2. 構成・タグ指定:
   - 検索エンジン（SEO）と読者の読みやすさを意識し、必ず見出しタグ <h2>, <h3>, <h4> を適切に使い分けて階層構造を作ってください。
   - 例: <h2>客室と館内の魅力</h2>, <h3>プライベート温泉の贅沢</h3>, <h4>アメニティへのこだわり</h4> のように構造化。
   - 単なる紹介ではなく、宿の持つ歴史、ロケーション、料理、温泉の魅力を各セクションに分けて網羅的に書いてください。
3. 文字数: 情報量を増やしSEO評価を高めるため、HTMLタグを含めて 1000文字〜1500文字程度 のボリュームで詳細に執筆してください。
4. SEOキーワード: 「旅行」「観光」「温泉」「露天風呂」「贅沢」「女子旅」「家族旅行」「アクセス」「アメニティ」「地元の味覚」などの関連語句を自然かつ豊富に散りばめてください。
5. 出力形式: 
   - 1行目に、この宿泊記事専用のSEOメタディスクリプション（120文字程度、タグなしプレーンテキスト）を書いてください。
   - 2行目以降に、記事のHTML本文（<h2>, <h3>, <h4>, <p>, <strong>, <ul>, <li>のみ）を記述してください。
   - マークダウンのコードブロック（```html や ```）は一切出力しないでください。
"""

    system_message = "あなたは一流の旅行雑誌の編集長であり、SEOに強い豊かな表現で宿泊ルポを執筆するプロライターです。"

    pollinations_models = ["openai", "openai-fast", "llama", "mistral", "qwen"]
    for attempt in range(2):
        for model in pollinations_models:
            try:
                print(f"Attempting to generate travel article with Pollinations AI (model: {model}, attempt: {attempt+1})...")
                response = requests.post(
                    "https://text.pollinations.ai/",
                    json={
                        "messages": [
                            {"role": "system", "content": system_message},
                            {"role": "user", "content": prompt}
                        ],
                        "model": model
                    },
                    timeout=40
                )
                if response.status_code == 200 and len(response.text.strip()) > 100:
                    return response.text.strip()
                elif response.status_code == 429:
                    print(f"Pollinations AI ({model}) returned 429. Waiting...")
                    time.sleep(3)
            except Exception as e:
                print(f"Pollinations AI ({model}) failed: {e}")
                time.sleep(2)

    # 失敗時の高品質な旅行雑誌風フォールバック
    fallback_text = f"""楽天トラベルでおすすめの温泉宿「{hotel_name}」の魅力、お部屋や露天風呂、豪華な夕食グルメ情報を旅行ライターが徹底的にレポートします。
<h2>時を忘れる極上の癒やし空間。{hotel_name}で過ごす至福のひととき</h2>
<p>{special}</p>
<p>日常の喧騒から離れ、美しい四季の移ろいを感じながら過ごす時間は、まさに旅の醍醐味。温泉に身を委ね、地元の旬の美味を味わう、そんな贅沢な体験があなたを待っています。女子旅や大切な人との記念日旅行にも最適です。</p>
<h2>宿の魅力を紐解く3つのポイント</h2>
<h3>1. 非日常を味わえる洗練された客室空間</h3>
<p>和の温もりとモダンな快適さが融合した客室。窓の外には見渡す限りの絶景が広がり、日常の疲れを優しく癒やしてくれます。細部まで行き届いたアメニティも旅の楽しみを高めます。</p>
<h3>2. 美肌効果抜群の温泉とプライベート露天風呂</h3>
<p>滾々と湧き出る源泉。贅沢な貸切風呂や露天風呂では、心地よい風を感じながら極上のリラックスタイムを満喫できます。温泉通も太鼓判を押す湯ざわりをご堪能ください。</p>
<h3>3. 地域ブランド食材を堪能する極上グルメ</h3>
<p>地元の新鮮な海の幸、山の幸をふんだんに取り入れた創作会席。料理人が腕によりをかけて仕上げる一品一品は、見た目も美しく、口いっぱいに幸せが広がります。</p>
<h2>まとめ</h2>
<p>今度の週末は、少し贅沢をして心安らぐ旅に出かけてみませんか？楽天トラベルからのご予約でお得なプランがご利用いただけます。</p>
"""
    return fallback_text.strip()

def decide_category(item):
    special = item.get("hotelSpecial", "").lower()
    hotel_name = item.get("hotelName", "").lower()
    text = special + " " + hotel_name
    
    categories = []
    if "温泉" in text or "風呂" in text or "スパ" in text:
        categories.append("温泉旅行")
    if "贅沢" in text or "露天風呂付" in text or "リゾート" in text or "高級" in text or "記念日" in text:
        categories.append("高級宿・リゾート")
    if "料理" in text or "食事" in text or "グルメ" in text or "バイキング" in text or "会席" in text or "創作" in text:
        categories.append("グルメ・美食")
    if "自然" in text or "アクティビティ" in text or "体験" in text or "スキー" in text or "ゴルフ" in text or "海" in text:
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
        item = fetch_rakuten_item()
        if not item:
            print("No hotels fetched. Exiting.")
            return

        hotel_no = str(item.get("hotelNo"))
        hotel_name = item.get("hotelName")
        affiliate_url = item.get("affiliateUrl") or item.get("hotelInformationUrl")
        
        print(f"Selected Hotel: {hotel_name} ({hotel_no})")

        image_url = item.get("largeImageUrl") or item.get("hotelImageUrl") or ""
        
        other_images = []
        for img_key in ["roomImageUrl", "publicBathImageUrl", "facilityImageUrl"]:
            val = item.get(img_key)
            if val and val != image_url:
                other_images.append(val)

        raw_output = generate_article_with_llm(item)
        
        # 1行目をメタディスクリプション、2行目以降を本文HTMLとして分割
        lines = raw_output.split("\n", 1)
        description = lines[0].strip()
        review_html = lines[1].strip() if len(lines) > 1 else raw_output
        
        # もし分割がうまく機能せずHTMLが含まれてしまった場合のクリーンアップ
        description = re.sub(r"<[^>]*>", "", description).strip()
        if len(description) > 160:
            description = description[:157] + "..."

        categories = decide_category(item)

        post_data = {
            "id": hotel_no,
            "title": f"【旅ライター厳選】{hotel_name} — 心を解きほぐす極上のリフレッシュ紀行",
            "hotel_name": hotel_name,
            "description": description,
            "review": review_html,
            "image": image_url,
            "other_images": other_images,
            "affiliate_url": affiliate_url,
            "prefecture": item.get("_prefecture"),
            "area": item.get("_area"),
            "categories": categories,
            "price": item.get("hotelMinPrice"),
            "rating": item.get("reviewAverage"),
            "date": time.strftime("%Y-%m-%d %H:%M:%S")
        }

        save_individual_post(post_data)
        save_to_cache(hotel_no)
        print("Rakuten Crawler run completed successfully.")

    except Exception as e:
        print(f"Error in execution: {e}")
        exit(1)

if __name__ == "__main__":
    main()
