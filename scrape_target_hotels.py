import os
import json
import requests
import re
import urllib.parse
import time

AFFILIATE_PREFIX = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc="

target_configs = [
    {
        "slug": "livemax-echigoyuzawa",
        "hotel_no": "172568",
        "search_kw": "天然温泉 リブマックスリゾート越後湯沢",
        "area": "新潟県・越後湯沢温泉"
    },
    {
        "slug": "superhotel-kashima",
        "hotel_no": "158566",
        "search_kw": "天然温泉 千両の湯 スーパーホテル鹿嶋",
        "area": "茨城県・鹿嶋"
    },
    {
        "slug": "ligare-kasugano",
        "hotel_no": "18909",
        "search_kw": "ホテル リガーレ春日野",
        "area": "奈良県・奈良公園"
    },
    {
        "slug": "sanuki-setouchisou",
        "hotel_no": "8175",
        "search_kw": "湯元さぬき瀬戸大橋温泉 せとうちそう",
        "area": "香川県・坂出"
    },
    {
        "slug": "nansuikaku-wakita",
        "hotel_no": "79432",
        "search_kw": "脇田温泉 楠水閣",
        "area": "福岡県・脇田温泉"
    },
    {
        "slug": "yukiroro",
        "hotel_no": "181415",
        "search_kw": "Yu Kiroro",
        "area": "北海道・キロロ"
    }
]

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

scraped_info = {}

for item in target_configs:
    hno = item["hotel_no"]
    detail_url = f"https://travel.rakuten.co.jp/HOTEL/{hno}/{hno}.html"
    aff_url = f"{AFFILIATE_PREFIX}{urllib.parse.quote(detail_url, safe='')}"
    
    try:
        res = requests.get(detail_url, headers=headers, timeout=10)
        if res.status_code == 200:
            res.encoding = res.apparent_encoding
            html = res.text
            
            # 宿名抽出
            h1_match = re.search(r'<h1[^>]*>([^<]+)</h1>', html)
            title_match = re.search(r'<title>([^<]+)</title>', html)
            
            real_name = item["search_kw"]
            if h1_match and len(h1_match.group(1).strip()) > 2:
                real_name = h1_match.group(1).strip()
            elif title_match:
                raw_title = title_match.group(1).strip()
                real_name = raw_title.split(' 宿泊予約')[0].split('【楽天トラベル】')[0].strip()

            # 画像URL抽出
            img_match = re.search(r'https://img\.travel\.rakuten\.co\.jp/share/HOTEL/\d+/\d+_[^"\']+\.jpg', html)
            img_url = img_match.group(0) if img_match else f"https://img.travel.rakuten.co.jp/share/HOTEL/{hno}/{hno}_g.jpg"

            scraped_info[item["slug"]] = {
                "hotelNo": hno,
                "hotelName": real_name,
                "detailUrl": detail_url,
                "affiliateUrl": aff_url,
                "imageUrl": img_url,
                "area": item["area"]
            }
            print(f"✅ FOUND: [{item['slug']}] -> {real_name} (ID: {hno})")
            print(f"   Image: {img_url}")
            print(f"   Affiliate: {aff_url}")
        else:
            print(f"❌ Failed to fetch page for ID {hno}: HTTP {res.status_code}")
    except Exception as e:
        print(f"❌ Error fetching ID {hno}: {e}")
    time.sleep(1)

with open("scraped_target_hotels.json", "w", encoding="utf-8") as f:
    json.dump(scraped_info, f, ensure_ascii=False, indent=2)

print("Scraped hotel verification completed successfully.")
