import os
import sys
import json
import random
import time
import re
from datetime import datetime
import requests

# 最新対応Geminiモデル（Gemini 1.5系は完全廃止のため除外）
GEMINI_MODELS = [
    "gemini-2.5-flash",
    "gemini-2.5-flash-lite",
    "gemini-2.0-flash",
    "gemini-2.0-flash-lite",
    "gemini-3.7-flash",
    "gemini-3.6-flash",
    "gemini-3.5-flash",
    "gemini-3.5-flash-lite",
    "gemini-3.1-pro",
    "gemini-3.1-flash-lite",
    "gemini-3-flash",
    "gemini-2.5-pro"
]

DATA_FILE = "src/data/monthly/monthly_features.json"
RAKUTEN_APP_ID = os.environ.get("RAKUTEN_APPLICATION_ID", "1a3cdfd9-2aec-4b42-8290-1c53603b0012")
RAKUTEN_ACCESS_KEY = os.environ.get("RAKUTEN_ACCESS_KEY", "pk_XkZ5h9MDKSsuVr6T5CnLnlVNvFg3hiR5vMDGrQ75cU5")
RAKUTEN_AFFILIATE_ID = os.environ.get("RAKUTEN_AFFILIATE_ID", "54d2a438.4bc4abc2.54d2a439.aa1be583")
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")

# 季節別・月次の4大ベーステーママスター定義
MONTHLY_THEME_TEMPLATES = {
    11: [
        {
            "id": "nov-furusato-luxury",
            "slug": "furusato-tax-november-luxury-retreat",
            "title": "【12月の駆け込み回避】11月こそ狙い目！楽天ふるさと納税で賢く泊まる憧れの高級宿",
            "subTitle": "年内駆け込みの争奪戦前にゆっくり選ぶ。実質2,000円で叶える露天風呂付き客室と最高峰のおもてなし",
            "lead": "12月末のふるさと納税駆け込み時期は人気日程の予約が即完売しがち。11月中にトラベルクーポンを確保し、憧れのハイクラス温泉旅館やリゾートホテルを先手必勝で押さえるのが大人の賢い旅スタイルです。評価★4.4以上の極上宿を厳選。",
            "heroImage": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["ふるさと納税", "高級宿", "温泉旅館", "楽天トラベル", "11月旅行", "客室露天風呂"],
            "searchQueries": ["ふるさと納税 温泉", "ふるさと納税 露天風呂", "ふるさと納税 高級", "ふるさと納税 旅館"]
        },
        {
            "id": "nov-star-infinity",
            "slug": "november-starry-sky-infinity-onsen",
            "title": "【初冬の絶景】空気が澄み渡る11月！星空撮影と天空インフィニティ露天風呂を満喫できる宿",
            "subTitle": "凛とした夜空に広がる天の川と、水面に溶け込む湯けむり。息をのむ大自然のパノラマビュー",
            "lead": "秋から冬へと移り変わる11月は、湿度が下がり一年で最も星空が鮮明に輝く天体観測のベストシーズン。視界を遮るもののない高台のインフィニティ温泉露天や高原リゾートで、満天の星と名湯に包まれる究極のリフレッシュ旅をお届けします。",
            "heroImage": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["星空温泉", "インフィニティ露天風呂", "絶景宿", "阿智村", "八ヶ岳", "初冬旅行"],
            "searchQueries": ["星空 リゾート", "星空 露天風呂", "星空 温泉", "八ヶ岳 星空"]
        },
        {
            "id": "nov-crab-gourmet",
            "slug": "november-brand-crab-onsen-gourmet",
            "title": "【11月解禁】冬の美食！ブランド蟹とこだわりの地酒を堪能する極上温泉宿",
            "subTitle": "越前蟹・松葉蟹・香住蟹が旬を迎える至福の季節。焼き・刺し・茹で・蟹すきと名湯三昧",
            "lead": "11月上旬のズワイガニ漁解禁とともに、北陸・山陰の温泉街は美食の熱気に包まれます。生簀から引き揚げて直前に捌く極上の活蟹料理と、歴史ある名湯で心身を解きほぐす、この時期だけの贅沢な美食紀行へご案内します。",
            "heroImage": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["解禁蟹", "越前蟹", "松葉蟹", "蟹会席", "城崎温泉", "あわら温泉", "冬の味覚"],
            "searchQueries": ["蟹 会席 温泉", "越前蟹 温泉", "香住蟹 温泉", "蟹 露天風呂"]
        },
        {
            "id": "nov-late-autumn-momiji",
            "slug": "november-late-autumn-leaves-secret-onsen",
            "title": "【晩秋の静寂】見頃ピークと散り紅葉の絨毯！錦秋に染まる渓谷と秘湯隠れ宿",
            "subTitle": "混雑を避けてゆったり愛でる紅葉露天風呂。ライトアップと旬の山海の幸",
            "lead": "11月中旬から下旬は、山々が燃え盛るような紅葉のクライマックス。水面に映る逆さ紅葉や落ち葉が浮かぶ風流な露天風呂、地元名産のきのこや地酒が楽しめる風情あふれる温泉宿をラインナップしました。",
            "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["紅葉温泉", "晩秋旅行", "秘湯", "露天風呂", "秋旅", "隠れ宿"],
            "searchQueries": ["紅葉 温泉", "紅葉 露天風呂", "紅葉 宿", "紅葉 ライトアップ 宿"]
        }
    ],
    12: [
        {
            "id": "dec-winter-snow-onsen",
            "slug": "december-snow-view-onsen-retreat",
            "title": "【白銀の絶景】雪見露天風呂と暖炉に癒される至福の冬ごもり名宿",
            "subTitle": "しんしんと降る雪を眺めながら入るにごり湯。冬の贅沢を味わい尽くす",
            "lead": "12月に入ると本格的な冬が到来。銀世界を望む雪見露天や薪暖炉の温もりがあるラウンジで、日常を忘れて籠もれる名宿を厳選。",
            "heroImage": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["雪見露天", "冬ごもり", "にごり湯", "温泉宿", "12月旅行"],
            "searchQueries": ["雪見 露天風呂", "にごり湯 温泉", "暖炉 宿"]
        },
        {
            "id": "dec-christmas-anniversary",
            "slug": "december-christmas-luxury-anniversary-hotel",
            "title": "【聖夜を彩る】クリスマス＆年末を特別な人と過ごすドラマチックホテル",
            "subTitle": "煌めく夜景とイルミネーション、シェフ特製フレンチディナー",
            "lead": "クリスマスや年末のアニバーサリーにふさわしい、夜景が息をのむ高層ホテルや森に佇むオーベルジュ。",
            "heroImage": "https://images.unsplash.com/photo-1543258103-a62bdc069871?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["クリスマスホテル", "夜景ホテル", "記念日ディナー", "高級ホテル"],
            "searchQueries": ["夜景 高級ホテル", "クリスマス ディナー ホテル", "オーベルジュ"]
        },
        {
            "id": "dec-year-end-hotpot",
            "slug": "december-year-end-gourmet-hotpot-ryokan",
            "title": "【1年のご褒美】寒ブリ・ふぐ・地鶏鍋と名湯で温まる年末美食の旅",
            "subTitle": "冬の極上鍋と滋味あふれる郷土料理。心も体も芯から温まる温泉旅館",
            "lead": "1年頑張った自分へのご褒美に。氷見の寒ブリ、下関のとらふぐ、特選牛すき焼きなど、鍋料理の名店旅館を特集。",
            "heroImage": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["寒ブリ", "とらふぐ", "温泉鍋料理", "年末旅行", "美食旅館"],
            "searchQueries": ["ふぐ 温泉宿", "寒ブリ 温泉", "すき焼き 温泉宿"]
        },
        {
            "id": "dec-hatsumode-onsen",
            "slug": "december-hatsumode-new-year-onsen-stay",
            "title": "【新年の開運】名刹・パワースポット参拝と初日の出を拝む温泉宿",
            "subTitle": "年末年始を穏やかに迎える。ご利益温泉と絶景の日の出スポット",
            "lead": "初詣やご来光に合わせた年越し・お正月ステイに最適な、由緒ある神社仏閣近くの温泉宿やオーシャンビュー旅館。",
            "heroImage": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
            "keywords": ["初詣", "初日の出", "年末年始温泉", "お正月旅行"],
            "searchQueries": ["初日の出 露天風呂", "初詣 温泉", "海辺 露天風呂 日の出"]
        }
    ]
}

def call_gemini(prompt):
    """Gemini最新モデルをローテーションして呼び出し"""
    if not GEMINI_API_KEY:
        return None
    models = list(GEMINI_MODELS)
    random.shuffle(models)
    headers = {"Content-Type": "application/json"}
    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"temperature": 0.8, "maxOutputTokens": 400}
    }
    for model in models:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={GEMINI_API_KEY.strip()}"
        try:
            r = requests.post(url, headers=headers, json=payload, timeout=12)
            if r.status_code == 200:
                res_json = r.json()
                cand = res_json.get("candidates", [])
                if cand:
                    parts = cand[0].get("content", {}).get("parts", [])
                    if parts and "text" in parts[0]:
                        return parts[0]["text"].strip()
        except Exception:
            continue
    return None

def fetch_rakuten_hotels(query, max_hits=8):
    """楽天トラベルAPIから指定キーワードで宿を取得"""
    url = "https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20170426"
    params = {
        "applicationId": RAKUTEN_APP_ID,
        "accessKey": RAKUTEN_ACCESS_KEY,
        "affiliateId": RAKUTEN_AFFILIATE_ID,
        "keyword": query,
        "format": "json",
        "hits": max_hits
    }
    try:
        res = requests.get(url, params=params, timeout=10)
        if res.status_code == 200:
            data = res.json()
            hotels = []
            for item in data.get("hotels", []):
                b = item["hotel"][0]["hotelBasicInfo"]
                rating_raw = b.get("reviewAverage")
                rating = float(rating_raw) if rating_raw and str(rating_raw).replace('.', '', 1).isdigit() else 0.0
                
                # 画像URLの確保
                img = b.get("hotelImageUrl") or b.get("hotelThumbnailUrl") or ""
                room_img = b.get("roomImageUrl") or ""
                
                # 最低料金
                min_charge = b.get("hotelMinCharge")
                
                hotels.append({
                    "hotelNo": b.get("hotelNo"),
                    "hotelName": b.get("hotelName"),
                    "rating": rating,
                    "minCharge": int(min_charge) if min_charge else None,
                    "address": f"{b.get('address1', '')} {b.get('address2', '')}".strip(),
                    "hotelImageUrl": img,
                    "roomImageUrl": room_img,
                    "affiliateUrl": b.get("hotelInformationUrl") or b.get("planListUrl") or "",
                    "hotelSpecial": b.get("hotelSpecial") or "",
                    "userReview": b.get("userReview") or ""
                })
            return hotels
    except Exception as e:
        print(f"Error fetching from Rakuten API ({query}):", e)
    return []

def sanitize_sentence(text):
    """句読点の重複（。。など）や連続スペースを除去し、完全な日本語文に整える"""
    if not text:
        return ""
    s = str(text)
    # 重複する句読点や記号の整理
    s = re.sub(r'。+', '。', s)
    s = re.sub(r'、+', '、', s)
    s = re.sub(r'！+', '！', s)
    s = re.sub(r'？+', '？', s)
    s = re.sub(r'[ 　]+', ' ', s)
    s = re.sub(r'([。！？])\s*([。！？])', r'\1', s)
    s = s.strip()
    return s

def extract_clean_catchcopy(text, fallback_name=""):
    """途中でぶつ切り・数字切れにならないよう、文の区切りで自然かつ完全なキャッチコピーを抽出"""
    if not text:
        return f"{fallback_name}で過ごす至福の滞在"
    # 不要な定型タグ除去
    cleaned = re.sub(r'【[^】]*】', '', str(text)).strip()
    # 句読点や記号で分割
    clauses = [c.strip() for c in re.split(r'[！!。．♪☆◆◇★｜|／/\n]+', cleaned) if len(c.strip()) >= 5]
    for c in clauses:
        # 末尾が助詞や半端な数字で終わらない完全な節を選択
        c_clean = c.strip(" ◆◇★☆・-～〜")
        if 8 <= len(c_clean) <= 45 and not re.search(r'[のへとでがをに連泊約全]$|\d+$', c_clean):
            return sanitize_sentence(c_clean)
    # 適切な節が見つからない場合は先頭のまとまりを使用
    if clauses:
        first = clauses[0].strip(" ◆◇★☆・-～〜")
        return sanitize_sentence(first[:40])
    return f"{fallback_name}で過ごす至福の滞在"

def curate_hotel_with_gemini(hotel_info, theme_title):
    """Geminiで宿のキャッチコピー・リアルな口コミ解説を清書"""
    special = hotel_info.get("specialHighlight") or hotel_info.get("hotelSpecial") or ""
    user_review = hotel_info.get("userReview") or ""
    hotel_name = hotel_info.get("hotelName", "")
    address = hotel_info.get("address", "")

    prompt = f"""あなたは旅の魅力を伝えるプロの旅行ライターです。
以下の宿情報をもとに、特集テーマ「{theme_title}」に合わせた魅力的な紹介文を作成してください。

【宿データ】
- 宿名: {hotel_name}
- 所在地: {address}
- 特徴・設備: {special}
- 宿泊者の声: {user_review[:250]}

【生成ルール】
1. AI特有の「〜はいかがでしょうか」「ご紹介します」「必見です」などの決まり文句は絶対に使わないこと。
2. 宿の具体的な魅力（湯船、料理、景色、客室、過ごし方）に触れ、旅行者が「ここに泊まりたい」と直感するリアルで情緒ある文章にすること。
3. 文末が途中で切れたり、句読点が連続する（「。。」等）ミスは絶対に無くし、完全な文で完結させること。
4. 以下のJSONフォーマットのみを出力してください（Markdownのバッククォート等も不要）：
{{
  "catchCopy": "途中で途切れない完全な文としてのキャッチコピー（40文字以内）",
  "expertReview": "130〜180文字程度の情緒あふれる美しい解説文（句読点や語尾の完全な日本語文）",
  "planHighlights": ["特徴タグ1", "特徴タグ2", "特徴タグ3"]
}}
"""
    raw = call_gemini(prompt)
    if raw:
        try:
            cleaned = re.sub(r'^```json\s*', '', raw.strip())
            cleaned = re.sub(r'\s*```$', '', cleaned)
            parsed = json.loads(cleaned)
            catch = sanitize_sentence(parsed.get("catchCopy", ""))
            review = sanitize_sentence(parsed.get("expertReview", ""))
            tags = [t.strip() for t in parsed.get("planHighlights", []) if t.strip()]
            if catch and review and not re.search(r'[のへとでがをに]$|\d+$', catch):
                return {
                    "catchCopy": catch,
                    "expertReview": review,
                    "planHighlights": tags
                }
        except Exception:
            pass

    # フォールバック（Gemini未設定またはパース失敗時）
    h_name = hotel_info.get("hotelName", "")
    catch = extract_clean_catchcopy(special, h_name)

    # 句読点の重複「。。」を完全に排除した高品質フォールバック文章
    address_part = hotel_info.get("address", "").strip()
    special_clean = re.sub(r'[。、\s]+$', '', special.strip())
    
    parts = []
    if address_part:
        parts.append(f"{address_part}に佇む人気宿")
    if special_clean:
        # 特徴文から完全な1文を抽出
        first_sentence = special_clean.split("。")[0].strip()
        if len(first_sentence) > 10:
            parts.append(first_sentence)
    
    body_core = "。".join(parts)
    if body_core and not body_core.endswith("。"):
        body_core += "。"
    
    review_text = f"{body_core}心地よい温泉と旬の美食を心ゆくまで味わい、日常の喧騒を離れてリフレッシュできる特別な滞在が叶います。"
    review_final = sanitize_sentence(review_text)

    tags = ["天然温泉", "絶品会席", "楽天トラベル高評価"]
    return {
        "catchCopy": catch,
        "expertReview": review_final,
        "planHighlights": tags
    }

def init_or_load_monthly_data():
    """月次JSONの読み込み、月が変わっていたら自動リセット＆新テーマ作成"""
    now = datetime.now()
    month_key = now.strftime("%Y-%m")
    current_m = now.month

    data = None
    if os.path.exists(DATA_FILE):
        try:
            with open(DATA_FILE, "r", encoding="utf-8") as f:
                data = json.load(f)
        except Exception:
            data = None

    # 月が変わった、または新規作成の場合
    if not data or data.get("currentMonth") != month_key:
        print(f"[*] 月が切り替わりました。{month_key} の新特集テーマを初期化します。")
        templates = MONTHLY_THEME_TEMPLATES.get(current_m, MONTHLY_THEME_TEMPLATES[11])
        themes = []
        for t in templates:
            themes.append({
                "id": t["id"],
                "slug": t["slug"],
                "month": month_key,
                "monthLabel": f"{current_m}月",
                "title": t["title"],
                "subTitle": t["subTitle"],
                "lead": t["lead"],
                "heroImage": t["heroImage"],
                "keywords": t["keywords"],
                "searchQueries": t["searchQueries"],
                "updatedAt": now.strftime("%Y-%m-%d"),
                "hotels": []
            })
        data = {
            "currentMonth": month_key,
            "themes": themes
        }

    return data

def main():
    print("=== 月次特集 蓄積型自動生成＆ランキング更新スタート ===")
    data = init_or_load_monthly_data()
    now_str = datetime.now().strftime("%Y-%m-%d %H:%M")

    # 4テーマそれぞれについて、宿を収集して蓄積
    for theme in data["themes"]:
        theme_slug = theme["slug"]
        theme_title = theme["title"]
        existing_hotels = {h["hotelNo"]: h for h in theme.get("hotels", [])}
        print(f"\n--- 特集: {theme_title} (現在: {len(existing_hotels)}軒) ---")

        # 各テーマの検索クエリから宿を取得
        candidate_hotels = []
        for query in theme.get("searchQueries", []):
            fetched = fetch_rakuten_hotels(query, max_hits=8)
            for h in fetched:
                if h["hotelNo"] not in existing_hotels and h["rating"] > 0:
                    candidate_hotels.append(h)
            time.sleep(0.3)

        # 重複除外
        unique_candidates = {}
        for h in candidate_hotels:
            if h["hotelNo"] not in existing_hotels:
                unique_candidates[h["hotelNo"]] = h

        candidates_list = list(unique_candidates.values())
        print(f"新規候補宿数: {len(candidates_list)}軒")

        # 必要数（まずは各テーマ最低10〜12軒に到達するよう追加）
        target_add = max(0, 12 - len(existing_hotels))
        if target_add == 0 and candidates_list:
            target_add = 1  # 既存が10軒以上でも毎回1軒ずつ新着を追加してランキングを活性化

        added_count = 0
        for h in candidates_list[:target_add]:
            print(f"清書中: {h['hotelName']} (★{h['rating']})")
            curated = curate_hotel_with_gemini(h, theme_title)
            
            hotel_entry = {
                "hotelNo": h["hotelNo"],
                "hotelName": h["hotelName"],
                "rating": h["rating"],
                "minCharge": h["minCharge"],
                "address": h["address"],
                "hotelImageUrl": h["hotelImageUrl"],
                "roomImageUrl": h["roomImageUrl"],
                "affiliateUrl": h["affiliateUrl"],
                "catchCopy": curated.get("catchCopy", ""),
                "specialHighlight": h.get("hotelSpecial", ""),
                "expertReview": curated.get("expertReview", ""),
                "planHighlights": curated.get("planHighlights", []),
                "addedAt": now_str
            }
            existing_hotels[h["hotelNo"]] = hotel_entry
            added_count += 1

        # レート(rating)降順でソート（常にTOP10が自動で上位になる）
        all_hotels_list = list(existing_hotels.values())
        all_hotels_list.sort(key=lambda x: (x["rating"], x["minCharge"] or 0), reverse=True)

        theme["hotels"] = all_hotels_list
        theme["updatedAt"] = now_str
        print(f"[{theme_slug}] 更新完了: 合計 {len(all_hotels_list)} 軒 (今回追加: {added_count}軒)")

    # JSON保存
    os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"\n[SUCCESS] {DATA_FILE} に全4テーマの最新データを正常に保存しました！")

if __name__ == "__main__":
    main()
