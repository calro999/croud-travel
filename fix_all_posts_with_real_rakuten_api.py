import os
import requests
import json
import urllib.parse

app_id = "1a3cdfd9-2aec-4b42-8290-1c53603b0012"
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

api_url = "https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426"

print("--- EXECUTING REAL RAKUTEN API FETCHING WITH OFFICIAL APP ID ---")

for item in posts_to_query:
    fpath = item["file"]
    kw = item["keyword"]

    if not os.path.exists(fpath):
        continue

    params = {
        "applicationId": app_id,
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
                hotel_name = h_info["hotelName"]
                hotel_img = h_info["hotelImageUrl"]
                hotel_detail_url = h_info["hotelInformationUrl"]
                
                # アフィリエイトURL作成
                aff_url = f"{affiliate_prefix}{urllib.parse.quote(hotel_detail_url, safe='')}"

                print(f"🎯 API Match SUCCESS for [{kw}]:")
                print(f"   Official Hotel Name : {hotel_name}")
                print(f"   Official Hotel No   : {hotel_no}")
                print(f"   Official Detail URL : {hotel_detail_url}")
                print(f"   Generated Aff URL   : {aff_url}")
                print("-" * 60)

                # JSONデータ更新
                with open(fpath, "r", encoding="utf-8") as f:
                    pdata = json.load(f)

                pdata["hotel_name"] = hotel_name
                pdata["image"] = hotel_img
                pdata["affiliate_url"] = aff_url

                # review内の旧アフィリエイトURLや旧画像を置換
                import re
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

print("--- FINISHED RAKUTEN API FETCHING AND POSTS UPDATE ---")
