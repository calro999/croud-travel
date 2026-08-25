import json
import os
import re

POSTS_DIR = os.path.join("src", "data", "posts")

# AI臭いフレーズや不要な定型文、メタ情報
BAD_PATTERNS = [
    (r"いかがでしたでしょうか[？?]*", ""),
    (r"いかがでしたか[？?]*", ""),
    (r"AIが生成した.*?[。\n]", ""),
    (r"本記事では.*?紹介しました[。\n]", ""),
    (r"以上、.*?でした[。\n]", ""),
    (r"ぜひ参考にしてみてくださいね[！!]*", "ぜひ次の旅の計画にお役立てください。"),
    (r"ぜひ参考にしてみてはいかがでしょうか[。！!]*", "ぜひ次の旅の計画にお役立てください。"),
    (r"ぜひ訪れてみてくださいね[！!]*", "ぜひ訪れてみてください。"),
    (r"いかがでしょうか[？?]*", "")
]

cleaned_count = 0

for f in os.listdir(POSTS_DIR):
    if not f.endswith(".json"):
        continue
    fpath = os.path.join(POSTS_DIR, f)
    try:
        with open(fpath, "r", encoding="utf-8") as fp:
            data = json.load(fp)
    except Exception as e:
        print(f"Error reading {f}: {e}")
        continue
    
    modified = False
    
    # Check review
    review = data.get("review", "")
    if review:
        orig_review = review
        for pat, rep in BAD_PATTERNS:
            review = re.sub(pat, rep, review)
        if review != orig_review:
            data["review"] = review
            modified = True
            
    # Check description
    desc = data.get("description", "")
    if desc:
        orig_desc = desc
        for pat, rep in BAD_PATTERNS:
            desc = re.sub(pat, rep, desc)
        if desc != orig_desc:
            data["description"] = desc
            modified = True
            
    # Remove any internal/debug meta if present
    for bad_key in ["_debug", "prompt", "system_prompt", "raw_response"]:
        if bad_key in data:
            del data[bad_key]
            modified = True
            
    if modified:
        with open(fpath, "w", encoding="utf-8") as fp:
            json.dump(data, fp, ensure_ascii=False, indent=2)
        cleaned_count += 1

print(f"Linted and cleaned {cleaned_count} post files.")
