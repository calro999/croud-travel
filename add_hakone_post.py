import requests
import json
import datetime
import os

API_URL = "https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20170426"
OUTPUT_FILE = "/Users/calro/Downloads/croud-travel/src/data/posts/hakone-open-air-bath-guide.json"

def fetch_hakone_hotels_api():
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
        "keyword": "箱根 露天風呂付",
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
    html = """<h2 id="intro">【至福のプライベート空間】箱根・露天風呂付き客室がある極上温泉宿特集</h2>
<p>カップルやご夫婦での記念日旅行、周りを気にせずゆっくり過ごしたいおこもりステイ。そんな特別な検索意図を持つ方に圧倒的な人気を誇るのが「露天風呂付き客室」です。</p>
<p>本記事では、日本屈指の温泉地「箱根」エリアから、楽天トラベルAPIの最新データに基づく評価の高い「露天風呂付き客室がある極上温泉宿」を厳選してご紹介します！</p>

<div class="my-6 p-5 bg-white border border-amber-950/20 rounded-2xl shadow-sm">
  <h3 class="text-lg font-bold text-amber-900 border-b border-amber-950/10 pb-2 mb-3">📌 目次</h3>
  <ul class="space-y-2 text-sm text-amber-950/80 font-medium">
    <li><a href="#about" class="hover:text-amber-600 hover:underline">1. ♨️ 露天風呂付き客室の魅力と選び方</a></li>
    <li><a href="#ranking" class="hover:text-amber-600 hover:underline">2. 🍁 楽天トラベル厳選！箱根の極上温泉宿一覧</a></li>
  </ul>
</div>

<hr class="my-8 border-amber-950/10" />

<h2 id="about">♨️ 1. 露天風呂付き客室の魅力と選び方</h2>
<p>誰にも邪魔されず、好きな時に好きなだけ温泉に浸かれるのが最大の魅力です。箱根はエリアによって泉質が異なるため、「強羅（ごうら）エリア」や「湯本エリア」など、お好みに合わせて宿を選ぶのがポイントです。</p>

<h2 id="ranking">🍁 2. 楽天トラベル厳選！箱根の極上温泉宿一覧</h2>
<p>実際の口コミ評価が高く、上質なプライベート空間を提供するおすすめのお宿をピックアップしました！</p>
"""

    for i, h in enumerate(hotels):
        rank = i + 1
        html += f"""
<div class="my-8 p-6 rounded-3xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-yellow-500/10 border border-amber-400/40 shadow-sm space-y-4">
  <div class="flex items-center justify-between border-b border-amber-300/40 pb-3">
    <span class="text-xs font-black text-amber-900 bg-amber-200 px-3 py-1 rounded-full uppercase">👑 おすすめ 第{rank}位</span>
    <span class="text-[11px] font-bold text-amber-800">⭐ {h['review_avg']} / 5.0</span>
  </div>
  <div class="flex flex-col md:flex-row gap-4">
    <div class="w-full md:w-1/3">
      <img src="{h['image']}" alt="{h['name']}" class="w-full h-auto rounded-xl shadow-md border border-amber-200" loading="lazy" />
    </div>
    <div class="w-full md:w-2/3 space-y-2">
      <h3 class="text-lg font-black font-journal-serif text-amber-950">{h['name']}</h3>
      <p class="text-xs text-amber-950/80 leading-relaxed font-medium">
        {h['special']}
      </p>
      <div class="text-sm font-bold text-amber-700 mt-2">
        💰 最安料金目安：¥{h['min_price']}〜
      </div>
    </div>
  </div>
  <div class="pt-4 text-right">
    <a href="{h['url']}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-extrabold text-xs rounded-xl shadow transition">
      🏨 {h['name']}の詳細・空室を見る
    </a>
  </div>
</div>
"""
    return html

def main():
    print("Generating Hakone Hotels data STRICTLY via Rakuten API...")
    try:
        hotels = fetch_hakone_hotels_api()
    except Exception as e:
        print(f"Error fetching from API: {e}")
        return
    
    if not hotels:
        print("No hotels fetched.")
        return
        
    review_html = generate_review_html(hotels)
    main_image = hotels[0]['image']
        
    new_post = {
        "id": "hakone-open-air-bath-guide",
        "title": "【箱根】客室露天風呂がある極上の高級温泉宿・カップル向けおすすめ旅館",
        "hotel_name": "神奈川県 箱根温泉郷",
        "description": "「周りを気にせずゆっくり温泉に入りたい」そんな方におすすめの、客室に露天風呂がついた箱根の極上温泉宿を楽天トラベルAPIデータから厳選してご紹介します。",
        "is_special_feature": True,
        "review": review_html,
        "image": main_image,
        "other_images": [h['image'] for h in hotels[1:4]] if len(hotels) > 4 else [],
        "affiliate_url": hotels[0]['url'],
        "prefecture": "神奈川県",
        "area": "関東",
        "categories": ["特集・まとめ", "温泉・カップル"],
        "price": None,
        "rating": None,
        "date": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(new_post, f, ensure_ascii=False, indent=2)
        
    print(f"Successfully added Hakone hotels post to {OUTPUT_FILE}!")

if __name__ == "__main__":
    main()
