import requests
import json
import urllib.parse

url = "https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426"
app_id = "18431f8e-b43b-41f1-aebe-ead995d7a126"

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
}

params = {
    "applicationId": app_id,
    "format": "json",
    "keyword": "Kiroro",
    "hits": 3
}

res = requests.get(url, params=params, headers=headers)
print("Status Code:", res.status_code)
print("Text preview:", res.text[:300])

if res.status_code == 200:
    data = res.json()
    print("Hotel count:", len(data.get("hotels", [])))
    for h in data.get("hotels", []):
        info = h["hotel"][0]["hotelBasicInfo"]
        print(f"No: {info['hotelNo']} | Name: {info['hotelName']} | URL: {info['hotelInformationUrl']}")
