import os
import requests
import json
import urllib.parse
import time

app_id = "1a3cdfd9-2aec-4b42-8290-1c53603b0012"
affiliate_id = "54d2a438.4bc4abc2.54d2a439.aa1be583"
affiliate_prefix = f"https://hb.afl.rakuten.co.jp/hgc/{affiliate_id}/?pc="

target_hotels = [
    {"key": "livemax-echigoyuzawa", "kw": "リブマックスリゾート越後湯沢"},
    {"key": "superhotel-kashima", "kw": "スーパーホテル鹿嶋"},
    {"key": "ligare-kasugano", "kw": "ホテル リガーレ春日野"},
    {"key": "sanuki-setouchisou", "kw": "せとうちそう"},
    {"key": "nansuikaku-wakita", "kw": "脇田温泉 楠水閣"},
    {"key": "yukiroro", "kw": "Yu Kiroro"}
]

api_url = "https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426"
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

results = {}

for item in target_hotels:
    key = item["key"]
    kw = item["kw"]
    
    params = {
        "applicationId": app_id,
        "affiliateId": affiliate_id,
        "format": "json",
        "keyword": kw,
        "hits": 1
    }

    time.sleep(1.2)

    try:
        res = requests.get(api_url, params=params, headers=headers, timeout=10)
        if res.status_code == 200:
            data = res.json()
            if "hotels" in data and len(data["hotels"]) > 0:
                h_info = data["hotels"][0]["hotel"][0]["hotelBasicInfo"]
                hotel_no = h_info["hotelNo"]
                hotel_name = h_info["hotelName"]
                hotel_img = h_info["hotelImageUrl"]
                hotel_detail_url = h_info.get("hotelInformationUrl", f"https://travel.rakuten.co.jp/HOTEL/{hotel_no}/{hotel_no}.html")
                user_review = h_info.get("userReview", "")
                review_count = h_info.get("reviewCount", 0)
                review_average = h_info.get("reviewAverage", 0)
                address1 = h_info.get("address1", "")
                address2 = h_info.get("address2", "")
                telephone_no = h_info.get("telephoneNo", "")
                plan_url = h_info.get("planListUrl", "")

                affiliate_url = f"{affiliate_prefix}{urllib.parse.quote(hotel_detail_url, safe='')}"

                results[key] = {
                    "hotelNo": hotel_no,
                    "hotelName": hotel_name,
                    "imageUrl": hotel_img,
                    "detailUrl": hotel_detail_url,
                    "affiliateUrl": affiliate_url,
                    "planUrl": plan_url,
                    "userReview": user_review,
                    "reviewCount": review_count,
                    "reviewAverage": review_average,
                    "address": f"{address1}{address2}",
                    "tel": telephone_no
                }
                print(f"✅ SUCCESS: [{kw}] -> {hotel_name} (ID: {hotel_no})")
                print(f"   Image: {hotel_img}")
                print(f"   Affiliate URL: {affiliate_url}")
            else:
                print(f"⚠️ NOT FOUND: {kw}")
        else:
            print(f"❌ API Error {res.status_code}: {kw} - {res.text[:150]}")
    except Exception as e:
        print(f"❌ ERROR: {kw} - {e}")

with open("fetched_new_hotels.json", "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print("Finished fetching hotel data via official Rakuten API.")
