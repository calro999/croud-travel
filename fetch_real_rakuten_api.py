import requests
import json
import urllib.parse
import os

app_id = "18431f8e-b43b-41f1-aebe-ead995d7a126"
affiliate_prefix = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc="

# 正確にAPI検索する対象記事とキーワード
posts_to_fix = [
    {"file": "src/data/posts/yukiroro.json", "keyword": "Yu Kiroro"},
    {"file": "src/data/posts/sheraton_okinawa.json", "keyword": "シェラトン沖縄サンマリーナリゾート"},
    {"file": "src/data/posts/kamogawa_seaworld_hotel.json", "keyword": "鴨川シーワールドホテル"},
    {"file": "src/data/posts/kusatsu_now_resort.json", "keyword": "草津ナウリゾートホテル"},
    {"file": "src/data/posts/hakone_kowakien_tenyu.json", "keyword": "箱根小涌園 天悠"},
    {"file": "src/data/posts/nagoya_kanko_hotel.json", "keyword": "名古屋観光ホテル"},
    {"file": "src/data/posts/inishie_no_yado_kei.json", "keyword": "いにしえの宿 佳雲"},
    {"file": "src/data/posts/158566.json", "keyword": "スーパーホテル鹿嶋"},
    {"file": "src/data/posts/8175.json", "keyword": "せとうちそう"},
    {"file": "src/data/posts/18909.json", "keyword": "ホテルリガーレ春日野"}
]

api_url = "https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426"

print("--- Real Rakuten API Fetching ---")

for item in posts_to_fix:
    fpath = item["file"]
    kw = item["keyword"]
    
    if not os.path.exists(fpath):
        print(f"File not found: {fpath}")
        continue

    params = {
        "applicationId": app_id,
        "format": "json",
        "keyword": kw,
        "hits": 1
    }

    try:
        res = requests.get(api_url, params=params, timeout=10)
        data = res.json()
        
        if "hotels" in data and len(data["hotels"]) > 0:
            hotel_info = data["hotels"][0]["hotel"][0]["hotelBasicInfo"]
            hotel_no = hotel_info["hotelNo"]
            hotel_name = hotel_info["hotelName"]
            hotel_img = hotel_info["hotelImageUrl"]
            plan_url = hotel_info["planListUrl"]
            hotel_detail_url = hotel_info["hotelInformationUrl"]
            
            # 正しい楽天アフィリエイトURLの生成
            affiliate_url = f"{affiliate_prefix}{urllib.parse.quote(hotel_detail_url, safe='')}"

            print(f"✅ SUCCESS: [{kw}] -> API HotelNo: {hotel_no} | Official Name: {hotel_name}")
            print(f"   Official URL: {hotel_detail_url}")
            print(f"   Affiliate URL: {affiliate_url}")

            # JSON更新
            with open(fpath, "r", encoding="utf-8") as f:
                pdata = json.load(f)
            
            pdata["hotel_name"] = hotel_name
            pdata["image"] = hotel_img
            pdata["affiliate_url"] = affiliate_url
            
            # 本文中の誤ったアフィリエイトURLをすべて置換
            review_text = pdata.get("review", "")
            # 既存のhref="https://hb.afl.rakuten.co.jp/..." の置換
            import re
            review_text = re.sub(r'href="https://hb\.afl\.rakuten\.co\.jp/[^"]+"', f'href="{affiliate_url}"', review_text)
            review_text = re.sub(r'src="https://img\.travel\.rakuten\.co\.jp/[^"]+"', f'src="{hotel_img}"', review_text)
            pdata["review"] = review_text
            
            with open(fpath, "w", encoding="utf-8") as f:
                json.dump(pdata, f, ensure_ascii=False, indent=2)
        else:
            print(f"❌ NOT FOUND via API: {kw}")

    except Exception as e:
        print(f"Error fetching API for {kw}: {e}")

print("--- Real Rakuten API Fetching Completed ---")
