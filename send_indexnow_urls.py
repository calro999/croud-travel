import requests
import json
import os

host = "croud-travel.pages.dev"
key = "54d2a4384bc4abc254d2a439aa1be583"
keyLocation = f"https://{host}/{key}.txt"

# 798件の全URLをロード
posts_dir = "src/data/posts"
json_files = [f for f in os.listdir(posts_dir) if f.endswith(".json")]

url_list = [
    f"https://{host}",
    f"https://{host}/campaigns",
    f"https://{host}/prefectures",
    f"https://{host}/sitemap"
]

for jf in json_files:
    post_id = jf.replace(".json", "")
    url_list.append(f"https://{host}/posts/{post_id}")

print(f"=== INDEXNOW API BROADCAST FOR {len(url_list)} URLS ===")

indexnow_endpoints = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
    "https://search.yandex.net/indexnow"
]

payload = {
    "host": host,
    "key": key,
    "keyLocation": keyLocation,
    "urlList": url_list[:500]  # IndexNow 1回の上限500件
}

headers = {
    "Content-Type": "application/json; charset=utf-8"
}

results = []

for ep in indexnow_endpoints:
    try:
        res = requests.post(ep, json=payload, headers=headers, timeout=10)
        print(f"🚀 IndexNow Broadcast to [{ep}] -> HTTP {res.status_code}")
        results.append({"endpoint": ep, "status": res.status_code})
    except Exception as e:
        print(f"⚠️ IndexNow Exception for [{ep}]: {e}")
        results.append({"endpoint": ep, "status": "Error", "error": str(e)})

print("=== FINISHED INDEXNOW HIGH-SPEED CRAWLER NOTIFICATION ===")
