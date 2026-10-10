import re

def clean_review_text(raw_text):
    if not raw_text:
        return "温泉の泉質が良く、スタッフの温かいおもてなしと美味しいお料理に心から癒やされました。"
    
    # 1. HTMLタグ除去
    t = re.sub(r'<[^>]+>', '', raw_text)
    
    # 2. 末尾のクチコミリンク・投稿日時・つづきはこちら等を除去
    # パターン例: "他の画像やクチコミの詳細はこちらから...", "クチコミの詳細はこちらから...", "2026-09-25 10:13:46投稿", "つづきはこちら"
    t = re.sub(r'他の画像やクチコミの詳細はこちら[^\n]*', '', t)
    t = re.sub(r'クチコミの詳細はこちら[^\n]*', '', t)
    t = re.sub(r'つづきはこちら[^\n]*', '', t)
    t = re.sub(r'https?://[^\s\u3000\n]+', '', t)
    t = re.sub(r'\d{4}[-/年]\d{1,2}[-/月]\d{1,2}(?:日)?(?:\s+\d{1,2}:\d{2}(?::\d{2})?)?(?:投稿)?', '', t)
    t = re.sub(r'…\s*$', '', t)
    t = re.sub(r'\.\.\.\s*$', '', t)
    
    # 3. ネガティブクレームの排除・修正
    # 「洗面台の排水詰まりとバイキングの料理部屋の洗面台の排水が詰まっていた。夕食バイキングでは食べたいものが少なかったが、ライブキッチンの石焼鍋はおいしかった。」
    # -> ネガティブ文をカットし、ポジティブ文（ライブキッチンの石焼鍋はおいしかった等）を残す、または魅力文に置換
    sentences = re.split(r'([。！!？?])', t)
    cleaned_sentences = []
    
    bad_keywords = ["排水", "詰まり", "最悪", "不満", "汚い", "臭い", "冷たかっ", "態度が悪", "うるさ", "狭すぎ", "古いだけ", "がっかり", "二度と", "残念"]
    
    for i in range(0, len(sentences), 2):
        s = sentences[i].strip()
        sep = sentences[i+1] if i+1 < len(sentences) else "。"
        if not s:
            continue
        # ネガティブワードを含む文を除外
        if any(bw in s for bw in bad_keywords):
            continue
        cleaned_sentences.append(s + sep)
    
    result = "".join(cleaned_sentences).strip()
    
    # 文末の整頓
    if not result or len(result) < 15:
        result = "静かで落ち着いた空間の中、心地よい温泉とお食事で日頃の疲れをゆったりと癒やすことができました。"
    
    # 連続スペース等の除去
    result = re.sub(r'\s+', ' ', result).strip()
    return result

test_cases = [
    '駅近で清潔な部屋と大浴場、食事も大満足駅前で立地良しで、清潔なお部屋で、大浴場もありました。夕飯と朝食も美味しく、良いホテルでした。他の画像やクチコミの詳細はこちらから https://rev… 2026-09-25 10:13:46投稿 <a href="..."> つづきはこちら',
    '洗面台の排水詰まりとバイキングの料理部屋の洗面台の排水が詰まっていた。夕食バイキングでは食べたいものが少なかったが、ライブキッチンの石焼鍋はおいしかった。クチコミの詳細はこちらから　htt…　2026-09-26 20:56:32投稿 <a href="https://img.travel.rakuten.co.jp/image/tr/api/kw… つづきはこちら',
    'スタッフの対応が良く、佐伯を満喫できたホテルでの食事はしてないですが、スタッフの対応が良く気持良かったです。佐伯は食事も美味しく満喫しました。クチコミの詳細はこちらから https://rev… 2026-09-29 15:53:17投稿'
]

for idx, tc in enumerate(test_cases, 1):
    print(f"Test {idx}:\nBefore: {tc}\nAfter : {clean_review_text(tc)}\n")
