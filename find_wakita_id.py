import requests
import re

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

try:
    r = requests.get("https://travel.rakuten.co.jp/yado/fukuoka/munakata.html", headers=headers, timeout=10)
    r.encoding = r.apparent_encoding
    for line in r.text.split('\n'):
        if "楠水閣" in line or "脇田" in line:
            m = re.findall(r'HOTEL/(\d+)', line)
            if m:
                print("Found match:", line.strip(), "IDs:", m)
except Exception as e:
    print("Error:", e)
