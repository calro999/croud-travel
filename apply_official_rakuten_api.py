import os
import requests
import json
import urllib.parse
import re

app_id = "18431f8e-b43b-41f1-aebe-ead995d7a126"
access_key = "pk_XkZ5h9MDKSsuVr6T5CnLnlVNvFg3hiR5vMDGrQ75cU5"
affiliate_id = "54d2a438.4bc4abc2.54d2a439.aa1be583"
affiliate_prefix = f"https://hb.afl.rakuten.co.jp/hgc/{affiliate_id}/?pc="

posts_to_query = [
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

api_url = "https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20170426"

print("=== EXECUTING OFFICIAL RAKUTEN TRAVEL OPEN API FETCHING ===")

fixed_summary = []

for item in posts_to_query:
    fpath = item["file"]
    kw = item["keyword"]

    if not os.path.exists(fpath):
        continue

    params = {
        "applicationId": app_id,
        "accessKey": access_key,
        "format": "json",
        "keyword": kw,
        "hits": 1
    }

    try:
        res = requests.get(api_url, params=params, timeout=10)
        if res.status_code == 200:
            data = res.json()
            if "hotels" in data and len(data["hotels"]) > 0:
                h_info = data["hotels"][0]["hotel"][0]["hotelBasicInfo"]
                hotel_no = h_info["hotelNo"]
                official_hotel_name = h_info["hotelName"]
                hotel_img = h_info["hotelImageUrl"]
                hotel_detail_url = f"https://travel.rakuten.co.jp/HOTEL/{hotel_no}/{hotel_no}.html"
                
                # 正しい楽天公式アフィリエイトURLの生成
                aff_url = f"{affiliate_prefix}{urllib.parse.quote(hotel_detail_url, safe='')}"

                print(f"✅ SUCCESS: [{kw}]")
                print(f"   Official Name : {official_hotel_name}")
                print(f"   Official No   : {hotel_no}")
                print(f"   Official URL  : {hotel_detail_url}")
                print(f"   Affiliate URL : {aff_url}")
                print("-" * 60)

                fixed_summary.append({
                    "keyword": kw,
                    "official_name": official_hotel_name,
                    "hotel_no": hotel_no,
                    "official_url": hotel_detail_url,
                    "affiliate_url": aff_url
                })

                # JSONデータ完全更新
                with open(fpath, "r", encoding="utf-8") as f:
                    pdata = json.load(f)

                pdata["hotel_name"] = official_hotel_name
                pdata["image"] = hotel_img
                pdata["affiliate_url"] = aff_url

                # review内のアフィリエイトURL・画像をすべて置換
                review_html = pdata.get("review", "")
                review_html = re.sub(r'href="https://hb\.afl\.rakuten\.co\.jp/[^"]+"', f'href="{aff_url}"', review_html)
                review_html = re.sub(r'src="https://img\.travel\.rakuten\.co\.jp/[^"]+"', f'src="{hotel_img}"', review_html)
                pdata["review"] = review_html

                with open(fpath, "w", encoding="utf-8") as f:
                    json.dump(pdata, f, ensure_ascii=False, indent=2)

            else:
                print(f"⚠️ No hotels found in API for keyword: {kw}")
        else:
            print(f"❌ API Error {res.status_code} for {kw}: {res.text}")
    except Exception as e:
        print(f"❌ Exception for {kw}: {e}")

print("=== FINISHED OFFICIAL RAKUTEN API FETCHING AND JSON UPDATE ===")
with open("rakuten_official_api_results.json", "w", encoding="utf-8") as f:
    json.dump(fixed_summary, f, ensure_ascii=False, indent=2)
