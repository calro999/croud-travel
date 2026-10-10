import csv
import unicodedata
import os
import re

def read_csv(filename):
    norm_fn = unicodedata.normalize("NFC", filename)
    actual_file = None
    for f in os.listdir("."):
        if unicodedata.normalize("NFC", f) == norm_fn:
            actual_file = f
            break
    if not actual_file:
        return []
    with open(actual_file, "r", encoding="utf-8", errors="ignore") as fp:
        reader = csv.reader(fp)
        return list(reader)

queries_raw = read_csv("クエリ.csv")
pages_raw = read_csv("ページ.csv")

# 終了した季節イベントキーワード
PAST_SEASON_WORDS = ["シルバーウィーク", "夏休み", "お盆", "夏", "gw", "ゴールデンウィーク", "プール", "花火大会", "海水浴"]

def is_past_season(text):
    t = text.lower()
    return any(w in t for w in PAST_SEASON_WORDS)

# クエリの選別
valid_queries = []
for row in queries_raw[1:]:
    if len(row) < 5: continue
    q, clicks, impressions, ctr, position = row[0], int(row[1]), int(row[2]), row[3], float(row[4])
    if is_past_season(q): continue
    valid_queries.append({
        "query": q,
        "clicks": clicks,
        "impressions": impressions,
        "ctr": ctr,
        "position": position
    })

# 表示回数降順
valid_queries.sort(key=lambda x: (x["impressions"], x["clicks"]), reverse=True)

print(f"=== TOP 30 OPPORTUNITY QUERIES (Excluding past seasonal) ===")
for item in valid_queries[:30]:
    print(f"Query: {item['query']:<30} | Imp: {item['impressions']:<5} | Clicks: {item['clicks']:<3} | CTR: {item['ctr']:<7} | Rank: {item['position']:.1f}")

# ページの選別
valid_pages = []
for row in pages_raw[1:]:
    if len(row) < 5: continue
    p, clicks, impressions, ctr, position = row[0], int(row[1]), int(row[2]), row[3], float(row[4])
    if is_past_season(p): continue
    valid_pages.append({
        "url": p,
        "clicks": clicks,
        "impressions": impressions,
        "ctr": ctr,
        "position": position
    })

valid_pages.sort(key=lambda x: (x["impressions"], x["clicks"]), reverse=True)

print(f"\n=== TOP 25 OPPORTUNITY PAGES (Excluding past seasonal) ===")
for item in valid_pages[:25]:
    slug = item["url"].replace("https://croud-travel.pages.dev/", "").rstrip("/")
    print(f"Page: {slug:<50} | Imp: {item['impressions']:<5} | Clicks: {item['clicks']:<3} | CTR: {item['ctr']:<7} | Rank: {item['position']:.1f}")

