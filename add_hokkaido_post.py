import requests
import json
import datetime
import os

API_URL = "https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20170426"
OUTPUT_FILE = "/Users/calro/Downloads/croud-travel/src/data/posts/hokkaido-summer-resorts-guide.json"

def fetch_hokkaido_hotels_api():
    env_path = "/Users/calro/Downloads/croud-travel/.env"
    if os.path.exists(env_path):
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                if "=" in line and not line.startswith("#"):
                    k, v = line.strip().split("=", 1)
                    os.environ[k] = v

    app_id = os.environ.get("RAKUTEN_APPLICATION_ID", "18431f8e-b43b-41f1-aebe-ead995d7a126")
    ak_raw = os.environ.get("RAKUTEN_ACCESS_KEY")
    access_key = ak_raw.strip() if ak_raw else "dummy_key"

    params = {
        "applicationId": app_id,
        "accessKey": access_key,
        "format": "json",
        "keyword": "北海道 リゾート",
        "hits": 6
    }
    
    print(f"Requesting API: {API_URL}")
    response = requests.get(API_URL, params=params)
    
    if response.status_code != 200:
        raise Exception(f"API Error {response.status_code}: {response.text}")
    
    data = response.json()
    hotels = data.get("hotels", [])
    
    hotel_list = []
    for h in hotels:
        info = h["hotel"][0]["hotelBasicInfo"]
        hotel_list.append({
            "name": info.get("hotelName"),
            "special": info.get("hotelSpecial", ""),
            "min_price": info.get("hotelMinPrice", "要確認"),
            "image": info.get("largeImageUrl") or info.get("hotelImageUrl") or "",
            "url": info.get("affiliateUrl") or info.get("hotelInformationUrl") or "",
            "review_avg": info.get("reviewAverage", "N/A")
        })
        
    return hotel_list

def generate_review_html(hotels):
    html = """<h2 id="intro">【涼しい絶景を求めて】夏の北海道・憧れリゾートホテル特集</h2>
<p>猛暑を逃れて涼しい絶景の中でリフレッシュしたい！そんな方に今一番検索されているのが「北海道のリゾートホテル」です。</p>
<p>本記事では、大自然を満喫しながら極上のサービスを受けられる北海道の厳選リゾートを、楽天トラベルAPIの最新データからお届けします。夏から秋にかけての旅行プラン作りにぜひお役立てください！</p>

<div class="my-6 p-5 bg-white border border-emerald-950/20 rounded-2xl shadow-sm">
  <h3 class="text-lg font-bold text-emerald-900 border-b border-emerald-950/10 pb-2 mb-3">📌 目次</h3>
  <ul class="space-y-2 text-sm text-emerald-950/80 font-medium">
    <li><a href="#about" class="hover:text-emerald-600 hover:underline">1. 🌲 夏の北海道リゾートの魅力</a></li>
    <li><a href="#ranking" class="hover:text-emerald-600 hover:underline">2. 🏔️ 楽天トラベル厳選！北海道リゾートホテル一覧</a></li>
  </ul>
</div>

<hr class="my-8 border-emerald-950/10" />

<h2 id="about">🌲 1. 夏の北海道リゾートの魅力</h2>
<p>澄んだ空気、見渡す限りの緑、そして新鮮で美味しい北の味覚。都会の暑さを忘れて大自然の中で深呼吸できる環境こそが、北海道リゾート最大の魅力です。</p>

<h2 id="ranking">🏔️ 2. 楽天トラベル厳選！北海道リゾートホテル一覧</h2>
<p>SNSでも話題の絶景ホテルや、美食を楽しめるラグジュアリーホテルをピックアップしました！</p>
"""

    for i, h in enumerate(hotels):
        rank = i + 1
        html += f"""
<div class="my-8 p-6 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-green-500/10 border border-emerald-400/40 shadow-sm space-y-4">
  <div class="flex items-center justify-between border-b border-emerald-300/40 pb-3">
    <span class="text-xs font-black text-emerald-900 bg-emerald-200 px-3 py-1 rounded-full uppercase">👑 おすすめ 第{rank}位</span>
    <span class="text-[11px] font-bold text-emerald-800">⭐ {h['review_avg']} / 5.0</span>
  </div>
  <div class="flex flex-col md:flex-row gap-4">
    <div class="w-full md:w-1/3">
      <img src="{h['image']}" alt="{h['name']}" class="w-full h-auto rounded-xl shadow-md border border-emerald-200" loading="lazy" />
    </div>
    <div class="w-full md:w-2/3 space-y-2">
      <h3 class="text-lg font-black font-journal-serif text-emerald-950">{h['name']}</h3>
      <p class="text-xs text-emerald-950/80 leading-relaxed font-medium">
        {h['special']}
      </p>
      <div class="text-sm font-bold text-emerald-700 mt-2">
        💰 最安料金目安：¥{h['min_price']}〜
      </div>
    </div>
  </div>
  <div class="pt-4 text-right">
    <a href="{h['url']}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-extrabold text-xs rounded-xl shadow transition">
      🏨 {h['name']}のプラン・空室を見る
    </a>
  </div>
</div>
"""
    return html

def main():
    print("Generating Hokkaido Hotels data STRICTLY via Rakuten API...")
    try:
        hotels = fetch_hokkaido_hotels_api()
    except Exception as e:
        print(f"Error fetching from API: {e}")
        return
    
    if not hotels:
        print("No hotels fetched.")
        return
        
    review_html = generate_review_html(hotels)
    main_image = hotels[0]['image']
        
    new_post = {
        "id": "hokkaido-summer-resorts-guide",
        "title": "【避暑地】夏の北海道・大自然を満喫できる絶景リゾートホテル大特集",
        "hotel_name": "北海道 リゾートエリア",
        "description": "猛暑を逃れて涼しい絶景へ！楽天トラベルAPIから厳選した、大自然と美食を堪能できる北海道のラグジュアリーリゾートホテルをご紹介します。",
        "is_special_feature": True,
        "review": review_html,
        "image": main_image,
        "other_images": [h['image'] for h in hotels[1:4]] if len(hotels) > 4 else [],
        "affiliate_url": hotels[0]['url'],
        "prefecture": "北海道",
        "area": "北海道",
        "categories": ["特集・まとめ", "リゾート・絶景"],
        "price": None,
        "rating": None,
        "date": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(new_post, f, ensure_ascii=False, indent=2)
        
    print(f"Successfully added Hokkaido hotels post to {OUTPUT_FILE}!")

if __name__ == "__main__":
    main()
