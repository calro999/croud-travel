import requests
import json
import time
import os

app_id = os.environ.get("RAKUTEN_APPLICATION_ID", "1a3cdfd9-2aec-4b42-8290-1c53603b0012")
access_key = os.environ.get("RAKUTEN_ACCESS_KEY", "pk_XkZ5h9MDKSsuVr6T5CnLnlVNvFg3hiR5vMDGrQ75cU5")
aff_id = os.environ.get("RAKUTEN_AFFILIATE_ID", "54d2a438.4bc4abc2.54d2a439.aa1be583")

# 主要20自治体（既存専用記事の温泉地・人気観光地優先）
TARGET_MUNICIPALITIES = [
    {"pref": "群馬県", "municipality": "草津町", "onsen": "草津温泉", "keyword": "草津温泉 旅館", "articleSlug": "furusato-tax-kusatsu-yubatake-luxury-ryokan-stay"},
    {"pref": "神奈川県", "municipality": "箱根町", "onsen": "箱根温泉郷", "keyword": "箱根温泉 旅館", "articleSlug": "furusato-tax-hakone-gora-onsen-art-luxury-stay"},
    {"pref": "長野県", "municipality": "軽井沢町", "onsen": "軽井沢リゾート", "keyword": "軽井沢 ホテル", "articleSlug": "furusato-tax-karuizawa-luxury-resort-villa-stay"},
    {"pref": "大分県", "municipality": "別府市", "onsen": "別府八湯", "keyword": "別府温泉 旅館", "articleSlug": "furusato-tax-beppu-onsen-jigoku-meguri-stay"},
    {"pref": "大分県", "municipality": "由布市", "onsen": "由布院温泉", "keyword": "由布院 旅館", "articleSlug": "furusato-tax-yufuin-kinrinko-morning-mist-stay"},
    {"pref": "静岡県", "municipality": "熱海市", "onsen": "熱海温泉", "keyword": "熱海温泉 旅館", "articleSlug": "furusato-tax-atami-ocean-fireworks-luxury-stay"},
    {"pref": "静岡県", "municipality": "伊東市", "onsen": "伊東温泉・伊豆高原", "keyword": "伊東温泉 旅館", "articleSlug": "furusato-tax-ito-onsen-seafood-luxury-stay"},
    {"pref": "北海道", "municipality": "登別市", "onsen": "登別温泉", "keyword": "登別温泉 旅館", "articleSlug": "furusato-tax-noboribetsu-jigokudani-sulfur-springs-stay"},
    {"pref": "北海道", "municipality": "釧路市", "onsen": "阿寒湖温泉", "keyword": "阿寒湖温泉 旅館", "articleSlug": "furusato-tax-akan-onsen-marimo-heritage-stay"},
    {"pref": "山形県", "municipality": "山形市", "onsen": "蔵王温泉", "keyword": "蔵王温泉 旅館", "articleSlug": "furusato-tax-zao-onsen-acid-sulfur-stay"},
    {"pref": "宮城県", "municipality": "仙台市", "onsen": "秋保温泉", "keyword": "秋保温泉 旅館", "articleSlug": "furusato-tax-akiu-onsen-sendai-retreat-stay"},
    {"pref": "石川県", "municipality": "加賀市", "onsen": "山代・山中温泉", "keyword": "山代温泉 旅館", "articleSlug": "furusato-tax-yamashiro-onsen-kaga-million-gourmet-stay"},
    {"pref": "福井県", "municipality": "あわら市", "onsen": "あわら温泉", "keyword": "あわら温泉 旅館", "articleSlug": "furusato-tax-awara-onsen-echizen-crab-luxury-stay"},
    {"pref": "岐阜県", "municipality": "下呂市", "onsen": "下呂温泉", "keyword": "下呂温泉 旅館", "articleSlug": "furusato-tax-gero-onsen-bihada-hida-beef-stay"},
    {"pref": "兵庫県", "municipality": "豊岡市", "onsen": "城崎温泉", "keyword": "城崎温泉 旅館", "articleSlug": "furusato-tax-kinosaki-onsen-matsuba-crab-seven-baths-stay"},
    {"pref": "兵庫県", "municipality": "神戸市", "onsen": "有馬温泉", "keyword": "有馬温泉 旅館", "articleSlug": "furusato-tax-arima-onsen-kinsen-ginsen-luxury-stay"},
    {"pref": "和歌山県", "municipality": "白浜町", "onsen": "南紀白浜温泉", "keyword": "白浜温泉 ホテル", "articleSlug": "furusato-tax-shirahama-ocean-resort-luxury-stay"},
    {"pref": "愛媛県", "municipality": "松山市", "onsen": "道後温泉", "keyword": "道後温泉 旅館", "articleSlug": "furusato-tax-dogo-onsen-honkan-heritage-stay"},
    {"pref": "熊本県", "municipality": "南小国町", "onsen": "黒川温泉", "keyword": "黒川温泉 旅館", "articleSlug": "furusato-tax-kurokawa-onsen-nyuto-tegata-stay"},
    {"pref": "沖縄県", "municipality": "恩納村", "onsen": "恩納村ビーチリゾート", "keyword": "恩納村 リゾートホテル", "articleSlug": "furusato-tax-okinawa-beach-resort-luxury-stay"}
]

url = "https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20170426"

results = []
print(f"Fetching live hotel data for {len(TARGET_MUNICIPALITIES)} municipalities via Rakuten API...")

for item in TARGET_MUNICIPALITIES:
    params = {
        "applicationId": app_id,
        "accessKey": access_key,
        "affiliateId": aff_id,
        "keyword": item["keyword"],
        "format": "json",
        "hits": 3
    }
    sample_hotels = []
    affiliate_sample_url = ""
    try:
        r = requests.get(url, params=params, timeout=10)
        if r.status_code == 200:
            data = r.json()
            for h in data.get("hotels", []):
                b = h["hotel"][0]["hotelBasicInfo"]
                sample_hotels.append({
                    "hotelName": b.get("hotelName"),
                    "hotelNo": b.get("hotelNo"),
                    "address": f"{b.get('address1', '')} {b.get('address2', '')}".strip(),
                    "hotelImageUrl": b.get("hotelImageUrl") or b.get("hotelThumbnailUrl", ""),
                    "affiliateUrl": b.get("hotelInformationUrl") or b.get("planListUrl", "")
                })
                if not affiliate_sample_url and b.get("hotelInformationUrl"):
                    affiliate_sample_url = b.get("hotelInformationUrl")
        else:
            print(f"API HTTP {r.status_code} for {item['keyword']}")
    except Exception as e:
        print(f"API Error for {item['keyword']}: {e}")

    results.append({
        "pref": item["pref"],
        "municipality": item["municipality"],
        "onsen": item["onsen"],
        "articleSlug": item["articleSlug"],
        "sampleHotels": sample_hotels,
        "affiliateSampleUrl": affiliate_sample_url
    })
    time.sleep(1.2) # APIレートリミット対策

out_path = "src/data/furusato_table_municipalities.json"
os.makedirs(os.path.dirname(out_path), exist_ok=True)
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print(f"Saved {len(results)} municipalities live API data to {out_path}")
