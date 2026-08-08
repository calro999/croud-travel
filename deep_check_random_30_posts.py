import os
import json
import random
import urllib.parse
import requests

posts_dir = "src/data/posts"
json_files = [os.path.join(posts_dir, f) for f in os.listdir(posts_dir) if f.endswith(".json")]

random.seed(42) # 再現性のあるランダム抽出演算
sampled_files = random.sample(json_files, 30)

print(f"=== DEEP AUDITING RANDOM 30 POSTS FOR LINK INTEGRITY ===")

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

results = []

for filepath in sampled_files:
    with open(filepath, "r", encoding="utf-8") as f:
        data = json.load(f)

    h_name = data.get("hotel_name", "Unknown")
    aff_url = data.get("affiliate_url", "")
    
    # pc= 以降の実際のURLをデコード抽出
    if "pc=" in aff_url:
        raw_url = urllib.parse.unquote(aff_url.split("pc=")[1])
    else:
        raw_url = aff_url

    try:
        res = requests.head(raw_url, headers=headers, allow_redirects=True, timeout=5)
        status = res.status_code
    except Exception as e:
        status = f"Error: {e}"

    results.append({
        "file": os.path.basename(filepath),
        "hotel_name": h_name,
        "status": status,
        "raw_url": raw_url
    })

success_count = sum(1 for r in results if r["status"] == 200)
print(f"✅ Tested 30 Random Hotels -> 200 OK Count: {success_count} / 30")

if success_count < 30:
    for r in results:
        if r["status"] != 200:
            print(f"⚠️ Warning Status {r['status']} for {r['hotel_name']} ({r['raw_url']})")

print("=== DEEP AUDIT COMPLETED ===")
