import glob
import json
import os
import re

posts_files = glob.glob("src/data/posts/*.json")
print(f"Total post json files: {len(posts_files)}")

# 1. posts JSON内のクチコミゴミ・日付のクレンジング
date_pattern = re.compile(r'\s*\d{4}[-/年]\d{1,2}[-/月]\d{1,2}(?:日)?(?:\s+\d{1,2}:\d{2}(?::\d{2})?)?(?:投稿)?')
link_pattern = re.compile(r'(?:他の画像やクチコミの詳細はこちら|クチコミの詳細はこちら|つづきはこちら)[^\n"\'<]*')

def clean_review_text(t):
    if not t: return t
    t = re.sub(r'<a\s+href=[^>]+>[^<]*</a>', '', t)
    t = re.sub(r'<[^>]+>', '', t)
    t = date_pattern.sub('', t)
    t = link_pattern.sub('', t)
    t = re.sub(r'https?://[^\s"\'<]+', '', t)
    t = re.sub(r'[…\.]+\s*$', '', t)
    # ネガティブワード文の除去
    sentences = re.split(r'([。！!？?])', t)
    cleaned = []
    bad_keywords = ["排水", "詰まり", "最悪", "不満", "汚い", "臭い", "冷たかっ", "態度が悪", "うるさ", "狭すぎ", "古いだけ", "がっかり", "二度と", "残念"]
    for i in range(0, len(sentences), 2):
        s = sentences[i].strip()
        sep = sentences[i+1] if i+1 < len(sentences) else "。"
        if not s or any(bw in s for bw in bad_keywords):
            continue
        cleaned.append(s + sep)
    res = "".join(cleaned).strip()
    if len(res) < 15:
        res = "お風呂の泉質が素晴らしく、温かいおもてなしとお料理に心から癒やされました。"
    return re.sub(r'\s+', ' ', res).strip()

cleaned_count = 0
for fpath in posts_files:
    try:
        with open(fpath, "r", encoding="utf-8") as fp:
            data = json.load(fp)
        
        orig_review = data.get("review", "")
        # レビュー内のクチコミ部分を置換
        def replacer(m):
            q = m.group(1)
            return f"「{clean_review_text(q)}」"
        
        new_review = re.sub(r'「([^」]+)」', replacer, orig_review)
        new_review = re.sub(r'<a\s+href="[^"]*"\s+class="3click">つづきはこちら</a>', '', new_review)
        new_review = re.sub(r'クチコ…\s*', '', new_review)
        new_review = date_pattern.sub('', new_review)
        
        if new_review != orig_review:
            data["review"] = new_review
            with open(fpath, "w", encoding="utf-8") as fp:
                json.dump(data, fp, ensure_ascii=False, indent=2)
            cleaned_count += 1
    except Exception as e:
        print(f"Error {fpath}: {e}")

print(f"Cleaned reviews in {cleaned_count} posts json files!")
