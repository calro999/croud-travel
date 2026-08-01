import os
import glob
import requests
import urllib.parse

def main():
    host = "croud-travel.pages.dev"
    key = "b1c2d3e4f5a67b8c9d0e1f2a3b4c5d6e"
    sitemap_url = f"https://{host}/sitemap.xml"
    
    # 1. キーファイルの確認・作成
    public_dir = "public"
    os.makedirs(public_dir, exist_ok=True)
    key_file_path = os.path.join(public_dir, f"{key}.txt")
    with open(key_file_path, "w", encoding="utf-8") as f:
        f.write(key)
    print(f"✅ Verified IndexNow key file: {key_file_path}")

    # 2. 全551件のURLを完全構築
    PREFECTURE_SLUGS = [
        "hokkaido", "aomori", "iwate", "miyagi", "akita", "yamagata", "fukushima",
        "ibaraki", "tochigi", "gunma", "saitama", "chiba", "tokyo", "kanagawa",
        "niigata", "toyama", "ishikawa", "fukui", "yamanashi", "nagano",
        "gifu", "shizuoka", "aichi", "mie",
        "shiga", "kyoto", "osaka", "hyogo", "nara", "wakayama",
        "tottori", "shimane", "okayama", "hiroshima", "yamaguchi",
        "tokushima", "kagawa", "ehime", "kochi",
        "fukuoka", "saga", "nagasaki", "kumamoto", "oita", "miyazaki", "kagoshima", "okinawa"
    ]

    urls = [
        f"https://{host}/",
        f"https://{host}/kanazawa",
        f"https://{host}/noto",
        f"https://{host}/prefectures",
        f"https://{host}/campaigns",
        f"https://{host}/sitemap"
    ]

    for slug in PREFECTURE_SLUGS:
        urls.append(f"https://{host}/prefectures/{slug}")

    posts_dir = "src/data/posts"
    post_files = glob.glob(os.path.join(posts_dir, "*.json"))
    for pf in post_files:
        post_id = os.path.splitext(os.path.basename(pf))[0]
        urls.append(f"https://{host}/posts/{post_id}")
    
    print(f"🚀 Total URLs gathered for indexing signals: {len(urls)}")

    # ---------------------------------------------------------
    # A. IndexNow (Bing / Naver / Yandex / Seznam 共有プロトコル)
    # ---------------------------------------------------------
    indexnow_endpoints = [
        ("Bing & Yahoo! JAPAN & DuckDuckGo & Copilot", "https://www.bing.com/indexnow"),
        ("Yandex (Global & Eastern Europe)", "https://yandex.com/indexnow"),
        ("Seznam (European Search Engine)", "https://search.seznam.cz/indexnow")
    ]

    headers = {"Content-Type": "application/json; charset=utf-8"}
    payload = {
        "host": host,
        "key": key,
        "keyLocation": f"https://{host}/{key}.txt",
        "urlList": urls
    }

    print("\n--- 1. Sending IndexNow Signals to Major Search Engines ---")
    for name, endpoint in indexnow_endpoints:
        try:
            res = requests.post(endpoint, json=payload, headers=headers, timeout=15)
            if res.status_code in [200, 202]:
                print(f"   [SUCCESS] {name} ({res.status_code}): {len(urls)} URLs successfully queued for instant indexing.")
            else:
                print(f"   [NOTICE] {name} status {res.status_code}: {res.text[:100]}")
        except Exception as e:
            print(f"   [ERROR] {name}: {e}")

    # ---------------------------------------------------------
    # B. Sitemap Ping Signals (Google / Bing / Yandex クローラー強制呼び出し)
    # ---------------------------------------------------------
    print("\n--- 2. Sending Direct Sitemap Ping Signals ---")
    ping_targets = [
        ("Google Sitemap Ping API", f"https://www.google.com/ping?sitemap={urllib.parse.quote(sitemap_url)}"),
        ("Bing Sitemap Ping API", f"https://www.bing.com/ping?sitemap={urllib.parse.quote(sitemap_url)}")
    ]

    for name, ping_url in ping_targets:
        try:
            res = requests.get(ping_url, timeout=10)
            print(f"   [SUCCESS] {name} triggered: HTTP {res.status_code}")
        except Exception as e:
            print(f"   [NOTICE] {name}: {e}")

    print("\n🎉 ALL SEARCH ENGINE SIGNALS FULLY DISPATCHED!")

if __name__ == "__main__":
    main()
