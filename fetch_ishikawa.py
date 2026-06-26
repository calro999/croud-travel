import os
import requests
import json

def fetch_ishikawa_hotels():
    app_id = "1082847525167699920" # Public dummy/test key often used
    
    url = "https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20170426"
    params = {
        "applicationId": app_id,
        "format": "json",
        "keyword": "石川県 温泉",
        "hits": 3,
        "affiliateId": "1b1a78ad.7b51b311.1b1a78ae.e46a78db" # Dummy affiliate ID if needed
    }

    print("Fetching Ishikawa hotels from Rakuten API...")
    response = requests.get(url, params=params)
    print(f"Status: {response.status_code}")
    
    if response.status_code == 200:
        data = response.json()
        hotels = data.get("hotels", [])
        
        results = []
        for h in hotels:
            basic_info = h.get("hotel", [])[0].get("hotelBasicInfo", {})
            results.append(basic_info)
            
        with open('ishikawa_hotels.json', 'w') as f:
            json.dump(results, f, ensure_ascii=False, indent=2)
            
        print(f"Fetched {len(results)} hotels in Ishikawa.")
    else:
        print(response.text)

if __name__ == "__main__":
    fetch_ishikawa_hotels()
