import requests
import json
import urllib.parse
import os
import re

POSTS_DIR = "src/data/posts"
app_id = "18431f8e-b43b-41f1-aebe-ead995d7a126"
access_key = "pk_XkZ5h9MDKSsuVr6T5CnLnlVNvFg3hiR5vMDGrQ75cU5"
affiliate_id = "54d2a438.4bc4abc2.54d2a439.aa1be583"
affiliate_prefix = f"https://hb.afl.rakuten.co.jp/hgc/{affiliate_id}/?pc="

api_url = "https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20170426"

fname = "akiu-sakan-guide.json"
fpath = os.path.join(POSTS_DIR, fname)
kw = "佐かん"

params = {
    "applicationId": app_id,
    "accessKey": access_key,
    "format": "json",
    "keyword": kw,
    "hits": 1
}

res = requests.get(api_url, params=params, timeout=10)
if res.status_code == 200:
    data = res.json()
    if "hotels" in data and len(data["hotels"]) > 0:
        hinfo = data["hotels"][0]["hotel"][0]["hotelBasicInfo"]
        hotel_no = hinfo["hotelNo"]
        hotel_name = hinfo["hotelName"]
        hotel_img = hinfo["hotelImageUrl"]
        detail_url = f"https://travel.rakuten.co.jp/HOTEL/{hotel_no}/{hotel_no}.html"
        affiliate_url = f"{affiliate_prefix}{urllib.parse.quote(detail_url, safe='')}"

        with open(fpath, "r", encoding="utf-8") as f:
            pdata = json.load(f)

        pdata["hotel_name"] = hotel_name
        pdata["image"] = hotel_img
        pdata["affiliate_url"] = affiliate_url

        review = pdata.get("review", "")
        review = re.sub(r'href="https://hb\.afl\.rakuten\.co\.jp/[^"]+"', f'href="{affiliate_url}"', review)
        review = re.sub(r'src="https://img\.travel\.rakuten\.co\.jp/[^"]+"', f'src="{hotel_img}"', review)
        pdata["review"] = review

        with open(fpath, "w", encoding="utf-8") as f:
            json.dump(pdata, f, ensure_ascii=False, indent=2)

        print(f"🎉 API修復成功: [{fname}] -> HotelNo: {hotel_no} | {hotel_name}")
