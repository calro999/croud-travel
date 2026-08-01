import requests
import json
import datetime
import os

API_URL = "https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20170426"
OUTPUT_FILE = "/Users/calro/Downloads/croud-travel/src/data/posts/obon-travel-guide.json"

def fetch_obon_hotels_api():
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
        "keyword": "お盆 温泉",
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
    html = """<h2 id="intro">【2026年お盆休み】今からでも間に合う！おすすめ温泉宿・ホテル特集</h2>
<p>「今年の夏休み・お盆休みの旅行、まだ予約してない…！」「どこに行こうか迷っているうちに直前になってしまった…」</p>
<p>そんな方に朗報です！お盆期間でもまだ予約のチャンスがある、全国の素晴らしい温泉宿やリゾートホテルを厳選しました。</p>
<p>本記事では、楽天トラベルAPIの最新データから、「お盆休み」の家族旅行やカップル旅行に絶対おすすめの宿泊施設をランキング形式でお届けします！</p>

<div class="my-6 p-5 bg-white border border-blue-950/20 rounded-2xl shadow-sm">
  <h3 class="text-lg font-bold text-blue-900 border-b border-blue-950/10 pb-2 mb-3">📌 目次</h3>
  <ul class="space-y-2 text-sm text-blue-950/80 font-medium">
    <li><a href="#about" class="hover:text-blue-600 hover:underline">1. 🏮 お盆休みの旅行を大成功させる秘訣</a></li>
    <li><a href="#ranking" class="hover:text-blue-600 hover:underline">2. 🎆 楽天トラベル厳選！お盆旅行におすすめの宿一覧</a></li>
  </ul>
</div>

<hr class="my-8 border-blue-950/10" />

<h2 id="about">🏮 1. お盆休みの旅行を大成功させる秘訣</h2>
<p>お盆休みの旅行はどこも混雑しがち。だからこそ、「温泉でゆっくりできる」「食事が美味しい」「ホテル内で完結して楽しめる」宿を選ぶのが、渋滞や混雑のストレスを回避する最大のコツです！直前予約は早い者勝ちなので、気になったら即チェックが鉄則です。</p>

<h2 id="ranking">🎆 2. 楽天トラベル厳選！お盆旅行におすすめの宿一覧</h2>
<p>お盆期間の特別なプランや、夏の思い出作りに最高のロケーションを提供するおすすめのお宿をピックアップしました！</p>
"""

    for i, h in enumerate(hotels):
        rank = i + 1
        html += f"""
<div class="my-8 p-6 rounded-3xl bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-sky-500/10 border border-blue-400/40 shadow-sm space-y-4">
  <div class="flex items-center justify-between border-b border-blue-300/40 pb-3">
    <span class="text-xs font-black text-blue-900 bg-blue-200 px-3 py-1 rounded-full uppercase">👑 おすすめ 第{rank}位</span>
    <span class="text-[11px] font-bold text-blue-800">⭐ {h['review_avg']} / 5.0</span>
  </div>
  <div class="flex flex-col md:flex-row gap-4">
    <div class="w-full md:w-1/3">
      <img src="{h['image']}" alt="{h['name']}" class="w-full h-auto rounded-xl shadow-md border border-blue-200" loading="lazy" />
    </div>
    <div class="w-full md:w-2/3 space-y-2">
      <h3 class="text-lg font-black font-journal-serif text-blue-950">{h['name']}</h3>
      <p class="text-xs text-blue-950/80 leading-relaxed font-medium">
        {h['special']}
      </p>
      <div class="text-sm font-bold text-blue-700 mt-2">
        💰 最安料金目安：¥{h['min_price']}〜
      </div>
    </div>
  </div>
  <div class="pt-4 text-right">
    <a href="{h['url']}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-extrabold text-xs rounded-xl shadow transition">
      🏨 {h['name']}の空室・プランを見る
    </a>
  </div>
</div>
"""
    return html

def main():
    print("Generating Obon Travel Hotels data STRICTLY via Rakuten API...")
    try:
        hotels = fetch_obon_hotels_api()
    except Exception as e:
        print(f"Error fetching from API: {e}")
        return
    
    if not hotels:
        print("No hotels fetched.")
        return
        
    review_html = generate_review_html(hotels)
    main_image = hotels[0]['image']
        
    new_post = {
        "id": "obon-travel-guide",
        "title": "【2026年お盆休み】今からでも間に合う！夏休みの家族旅行・カップルにおすすめの温泉宿",
        "hotel_name": "全国 お盆休みにおすすめの宿",
        "description": "「お盆の旅行、まだ予約してない！」という方必見。今からでも間に合う、夏休みの思い出作りに最高の温泉宿・リゾートホテルを楽天トラベルAPIから厳選してご紹介します。",
        "is_special_feature": True,
        "review": review_html,
        "image": main_image,
        "other_images": [h['image'] for h in hotels[1:4]] if len(hotels) > 4 else [],
        "affiliate_url": hotels[0]['url'],
        "prefecture": "全国",
        "area": "全国",
        "categories": ["特集・まとめ", "夏休み・お盆"],
        "price": None,
        "rating": None,
        "date": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(new_post, f, ensure_ascii=False, indent=2)
        
    print(f"Successfully added Obon Travel hotels post to {OUTPUT_FILE}!")

if __name__ == "__main__":
    main()
