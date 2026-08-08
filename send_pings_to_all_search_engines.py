import requests
import urllib.parse
import json

sitemap_url = "https://croud-travel.pages.dev/sitemap.xml"
site_name = "旅宿クラウド"
site_home = "https://croud-travel.pages.dev"

ping_targets = [
    {
        "name": "Google Sitemap Ping",
        "url": f"https://www.google.com/ping?sitemap={urllib.parse.quote(sitemap_url, safe='')}"
    },
    {
        "name": "Bing / Yahoo / IndexNow Sitemap Ping",
        "url": f"https://www.bing.com/ping?sitemap={urllib.parse.quote(sitemap_url, safe='')}"
    },
    {
        "name": "Yandex Blogs Ping",
        "url": f"https://blogs.yandex.ru/pings/?status=success&url={urllib.parse.quote(sitemap_url, safe='')}"
    },
    {
        "name": "Ping-O-Matic Hub",
        "url": f"http://pingomatic.com/ping/?title={urllib.parse.quote(site_name)}&blogurl={urllib.parse.quote(site_home)}&rssurl={urllib.parse.quote(sitemap_url)}&chk_blogs=on&chk_feedburner=on&chk_syndic8=on"
    }
]

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

print("=== EXECUTING WORLDWIDE SEARCH ENGINE PING BROADCAST ===")

results = []

for target in ping_targets:
    t_name = target["name"]
    t_url = target["url"]
    try:
        res = requests.get(t_url, headers=headers, timeout=10)
        status_info = f"HTTP {res.status_code}"
        print(f"📡 Ping Sent to [{t_name}] -> {status_info}")
        results.append({"target": t_name, "status": res.status_code, "response": res.text[:150]})
    except Exception as e:
        print(f"⚠️ Ping Exception for [{t_name}]: {e}")
        results.append({"target": t_name, "status": "Error", "response": str(e)})

print("=== FINISHED WORLDWIDE PING BROADCAST ===")
with open("ping_results_log.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)
