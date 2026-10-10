import urllib.request
import urllib.parse
import json
import ssl
import time

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

app_id = '1a3cdfd9-2aec-4b42-8290-1c53603b0012'
access_key = 'pk_XkZ5h9MDKSsuVr6T5CnLnlVNvFg3hiR5vMDGrQ75cU5'
aff_id = '54d2a438.4bc4abc2.54d2a439.aa1be583'

target_hotels = [
    # ibusuki
    {"keyword": "指宿 白水館", "area": "ibusuki", "tag": "指宿名門・砂むし館内完備"},
    {"keyword": "指宿温泉 吟松", "area": "ibusuki", "tag": "錦江湾フロント・夫婦露天風呂"},
    {"keyword": "指宿シーサイドホテル", "area": "ibusuki", "tag": "オーシャンビュー・絶景露天"},
    # kirishima
    {"keyword": "霧島 旅行人山荘", "area": "kirishima", "tag": "原生林の秘湯・鹿が訪れる絶景露天"},
    {"keyword": "霧島温泉郷 霧島ホテル", "area": "kirishima", "tag": "14源泉硫黄谷庭園大浴場"},
    {"keyword": "霧島観光ホテル", "area": "kirishima", "tag": "桜島一望の展望風呂・黒豚美味"}
]

fetched_data = []

print("=== Direct Rakuten API Calls ===")
for target in target_hotels:
    kw = target["keyword"]
    encoded_kw = urllib.parse.quote(kw)
    url = f'https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20260731?format=json&keyword={encoded_kw}&applicationId={app_id}&accessKey={access_key}&affiliateId={aff_id}'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, context=ctx) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            if 'hotels' in data and len(data['hotels']) > 0:
                h = data['hotels'][0]['hotel'][0]['hotelBasicInfo']
                info = {
                    "hotelNo": h.get("hotelNo"),
                    "hotelName": h.get("hotelName"),
                    "hotelImageUrl": h.get("hotelImageUrl"),
                    "roomImageUrl": h.get("roomImageUrl"),
                    "hotelMinCharge": h.get("hotelMinCharge"),
                    "reviewAverage": h.get("reviewAverage"),
                    "userReview": h.get("userReview"),
                    "hotelSpecial": h.get("hotelSpecial"),
                    "address1": h.get("address1", ""),
                    "address2": h.get("address2", ""),
                    "hotelInformationUrl": f"https://hb.afl.rakuten.co.jp/hgc/{aff_id}/?pc=" + urllib.parse.quote(h.get("hotelInformationUrl", "")),
                    "area": target["area"],
                    "tag": target["tag"]
                }
                fetched_data.append(info)
                print(f"Fetched: {info['hotelName']} | Rating: {info['reviewAverage']} | Price: {info['hotelMinCharge']}")
    except Exception as e:
        print(f"Error fetching {kw}: {e}")
    time.sleep(0.5)

with open('src/data/ibusuki_vs_kirishima_hotels.json', 'w', encoding='utf-8') as f:
    json.dump(fetched_data, f, ensure_ascii=False, indent=2)

print("Saved live Rakuten hotel data successfully!")
