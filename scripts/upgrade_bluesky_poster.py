with open('scripts/bluesky_poster.py', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update winter keywords to give massive priority to the 7 mega killer articles
old_keywords = """    winter_keywords = [
        "冬", "雪", "露天", "温泉", "カニ", "蟹", "イルミネーション",
        "クリスマス", "年末年始", "ふるさと納税", "winter", "autumn", "紅葉", "湯けむり"
    ]"""

new_keywords = """    # 7大メガキラー記事スラッグ（最優先プール）
    MEGA_KILLER_IDS = [
        "japan-onsen-ranking-best-hotels-guide",
        "all-inclusive-onsen-resort-ranking-japan-hotels-guide",
        "sauna-resort-hotels-ranking-japan-guide",
        "newyear-hatsumode-sunrise-ryokan-ranking-japan-hotels-guide",
        "furusato-tax-luxury-ryokan-ranking-japan-hotels-guide",
        "winter-snow-onsen-roten-ranking-japan-hotels-guide",
        "winter-crab-onsen-hotels-ranking-matuba-echizen-guide"
    ]

    winter_keywords = [
        "冬", "雪", "露天", "温泉", "カニ", "蟹", "イルミネーション",
        "クリスマス", "年末年始", "初詣", "初日の出", "ふるさと納税", "サウナ", "オールインクルーシブ", "winter", "autumn", "紅葉", "湯けむり"
    ]"""

text = text.replace(old_keywords, new_keywords)

# 2. In scoring logic, give +50 score if it's one of the MEGA_KILLER_IDS
old_score_logic = """                is_special = bool(data.get("is_special_feature"))
                rating = float(data.get("rating") or 0)
                title = data.get("title", "")
                desc = data.get("description", "")

                score = 0
                if is_special:
                    score += 15"""

new_score_logic = """                is_special = bool(data.get("is_special_feature"))
                rating = float(data.get("rating") or 0)
                title = data.get("title", "")
                desc = data.get("description", "")

                score = 0
                if post_id in MEGA_KILLER_IDS:
                    score += 60  # 7大キラー記事を最優先でローテーション
                if is_special:
                    score += 15"""

text = text.replace(old_score_logic, new_score_logic)

with open('scripts/bluesky_poster.py', 'w', encoding='utf-8') as f:
    f.write(text)

print('Successfully upgraded bluesky_poster.py with mega killer priority!')
