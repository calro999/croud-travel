import requests
import re
import urllib.parse

search_terms = [
    {"slug": "livemax-echigoyuzawa", "kw": "リブマックスリゾート越後湯沢"},
    {"slug": "nansuikaku-wakita", "kw": "脇田温泉 楠水閣"},
    {"slug": "yukiroro", "kw": "Yu Kiroro"}
]

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

for item in search_terms:
    kw = item["kw"]
    search_url = f"https://travel.rakuten.co.jp/HOTEL/search/?f_teikei=&f_query={urllib.parse.quote(kw)}"
    try:
        res = requests.get(search_url, headers=headers, timeout=10)
        res.encoding = res.apparent_encoding
        html = res.text
        
        # /HOTEL/数字/数字.html パターンを探す
        matches = re.findall(r'https://travel\.rakuten\.co\.jp/HOTEL/(\d+)/\1\.html', html)
        if matches:
            hotel_id = matches[0]
            print(f"MATCH: [{kw}] -> Hotel ID: {hotel_id}")
        else:
            print(f"NO MATCH: [{kw}]")
    except Exception as e:
        print(f"Error {kw}: {e}")
