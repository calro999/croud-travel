import requests

app_id = "18431f8e-b43b-41f1-aebe-ead995d7a126"
urls = [
    "https://openapi.rakuten.co.jp/engine/api/Travel/SimpleHotelSearch/20170426",
    "https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20170426"
]

for url in urls:
    print(f"Testing {url}")
    params = {
        "applicationId": app_id,
        "accessKey": "dummy_key",
        "format": "json",
        "largeClassCode": "japan",
        "middleClassCode": "tokyo"
    }
    try:
        r = requests.get(url, params=params)
        print(f"Status: {r.status_code}")
        print(f"Response: {r.text[:200]}")
    except Exception as e:
        print(f"Error: {e}")
    print("-" * 40)
