#!/usr/bin/env python3
"""
楽天トラベルAPIを叩いて、ホテルIDと正確なURLを取得するスクリプト
"""
import urllib.request
import json
import urllib.parse
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

APP_ID = "1015456488313360408"
AFF_ID = "54d2a438.4bc4abc2.54d2a439.aa1be583"

def search_hotel(keyword):
    url = (
        "https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426"
        f"?format=json"
        f"&keyword={urllib.parse.quote(keyword)}"
        f"&applicationId={APP_ID}"
        f"&affiliateId={AFF_ID}"
        f"&hits=5"
    )
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except Exception as e:
        return {"error": str(e), "keyword": keyword}

def make_aff_url(hotel_info_url):
    encoded = urllib.parse.quote(hotel_info_url, safe='')
    return f"https://hb.afl.rakuten.co.jp/hgc/{AFF_ID}/?pc={encoded}"

targets = [
    "和倉温泉 加賀屋",
    "ホテルルートイン輪島",
    "和倉温泉 宝仙閣",
    "ねぶた温泉 能登の庄",
    "よしが浦温泉 ランプの宿",
]

for kw in targets:
    print(f"\n{'='*60}")
    print(f"KEYWORD: {kw}")
    print('='*60)
    result = search_hotel(kw)
    if "error" in result:
        print(f"  ERROR: {result['error']}")
        continue
    hotels = result.get("hotels", [])
    if not hotels:
        print("  ヒットなし")
        continue
    for item in hotels[:3]:
        h = item["hotel"][0]["hotelBasicInfo"]
        info_url = h.get("hotelInformationUrl", "")
        plan_url = h.get("planListUrl", "")
        aff_url_native = h.get("affiliateUrl", "")
        aff_url_gen = make_aff_url(info_url)
        print(f"  HotelNo   : {h['hotelNo']}")
        print(f"  HotelName : {h['hotelName']}")
        print(f"  Prefecture: {h.get('address1','')}")
        print(f"  InfoURL   : {info_url}")
        print(f"  PlanURL   : {plan_url}")
        print(f"  AffURL(native): {aff_url_native}")
        print(f"  AffURL(gen)   : {aff_url_gen}")
        print("  ---")
