import requests
import json
import urllib.parse

hotels_to_search = [
    {"file": "src/data/posts/sheraton_okinawa.json", "keyword": "シェラトン沖縄サンマリーナリゾート"},
    {"file": "src/data/posts/kamogawa_seaworld_hotel.json", "keyword": "鴨川シーワールドホテル"},
    {"file": "src/data/posts/nagoya_kanko_hotel.json", "keyword": "名古屋観光ホテル"},
    {"file": "src/data/posts/inishie_no_yado_kei.json", "keyword": "いにしえの宿 佳雲"}
]

app_id = "18431f8e-b43b-41f1-aebe-ead995d7a126"
affiliate_prefix = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc="

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

for item in hotels_to_search:
    url = f"https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20170426?applicationId={app_id}&format=json&keyword={urllib.parse.quote(item['keyword'])}"
    res = requests.get(url, headers=headers)
    if res.status_code == 200:
        data = res.json()
        if "hotels" in data and len(data["hotels"]) > 0:
            h_basic = data["hotels"][0]["hotel"][0]["hotelBasicInfo"]
            hotel_no = h_basic["hotelNo"]
            hotel_name = h_basic["hotelName"]
            hotel_img = h_basic["hotelImageUrl"]
            raw_url = f"https://travel.rakuten.co.jp/HOTEL/{hotel_no}/{hotel_no}.html"
            affiliate_url = f"{affiliate_prefix}{urllib.parse.quote(raw_url)}"
            
            print(f"FOUND: {item['keyword']} -> HotelNo: {hotel_no}, Name: {hotel_name}")
            
            # JSON更新
            with open(item["file"], "r", encoding="utf-8") as f:
                post_data = json.load(f)
            
            post_data["image"] = hotel_img
            post_data["affiliate_url"] = affiliate_url
            post_data["review"] = post_data["review"].replace(post_data["image"], hotel_img) if "image" in post_data else post_data["review"]
            # 旧affiliate_url置換
            old_aff = post_data.get("affiliate_url")
            post_data["affiliate_url"] = affiliate_url
            
            with open(item["file"], "w", encoding="utf-8") as f:
                json.dump(post_data, f, ensure_ascii=False, indent=2)

print("Finished searching & fixing correct Rakuten Hotel IDs!")
