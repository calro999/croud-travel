import requests
import json
import datetime
import os

API_URL = "https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20170426"
OUTPUT_FILE = "/Users/calro/Downloads/croud-travel/src/data/posts/obon-solo-travel-guide.json"

def fetch_obon_solo_hotels_api():
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
        "keyword": "お盆 一人旅",
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
    html = """<h2 id="intro">【お盆も一人で気ままに】直前でも予約可能！お盆休みのおすすめ一人旅ホテル・宿特集</h2>
<p>「お盆休みはどこも混んでいて家族連ればかり…でも、一人でゆっくり羽を伸ばしたい！」</p>
<p>そんな「お一人様」のお盆旅行の悩みを解決する、一人旅歓迎で今からでも間に合う全国の素晴らしい宿をご紹介します。</p>
<p>本記事では、楽天トラベルAPIの最新データから、お盆期間の喧騒を離れて自分の時間を満喫できる極上のおひとりさまステイを厳選してお届けします！</p>

<div class="my-6 p-5 bg-white border border-indigo-950/20 rounded-2xl shadow-sm">
  <h3 class="text-lg font-bold text-indigo-900 border-b border-indigo-950/10 pb-2 mb-3">📌 目次</h3>
  <ul class="space-y-2 text-sm text-indigo-950/80 font-medium">
    <li><a href="#about" class="hover:text-indigo-600 hover:underline">1. 🎐 お盆の一人旅を快適に過ごすコツ</a></li>
    <li><a href="#ranking" class="hover:text-indigo-600 hover:underline">2. 🛤️ 楽天トラベル厳選！お盆の一人旅におすすめの宿一覧</a></li>
  </ul>
</div>

<hr class="my-8 border-indigo-950/10" />

<h2 id="about">🎐 1. お盆の一人旅を快適に過ごすコツ</h2>
<p>お盆時期の一人旅は、あえて有名な観光地を外し、宿の中だけでリラックスできる「おこもりステイ」が正解です。また、一人旅歓迎のプランがある宿を選ぶことで、周りの目を気にせず最高の夏休みを過ごすことができます。直前でもキャンセル等で空きが出ることがあるので、早めの確保が重要です。</p>

<h2 id="ranking">🛤️ 2. 楽天トラベル厳選！お盆の一人旅におすすめの宿一覧</h2>
<p>口コミ評価が高く、お一人様でも気兼ねなく至福の時間を過ごせるおすすめのお宿をピックアップしました！</p>
"""

    for i, h in enumerate(hotels):
        rank = i + 1
        html += f"""
<div class="my-8 p-6 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-blue-500/10 to-sky-500/10 border border-indigo-400/40 shadow-sm space-y-4">
  <div class="flex items-center justify-between border-b border-indigo-300/40 pb-3">
    <span class="text-xs font-black text-indigo-900 bg-indigo-200 px-3 py-1 rounded-full uppercase">👑 おすすめ 第{rank}位</span>
    <span class="text-[11px] font-bold text-indigo-800">⭐ {h['review_avg']} / 5.0</span>
  </div>
  <div class="flex flex-col md:flex-row gap-4">
    <div class="w-full md:w-1/3">
      <img src="{h['image']}" alt="{h['name']}" class="w-full h-auto rounded-xl shadow-md border border-indigo-200" loading="lazy" />
    </div>
    <div class="w-full md:w-2/3 space-y-2">
      <h3 class="text-lg font-black font-journal-serif text-indigo-950">{h['name']}</h3>
      <p class="text-xs text-indigo-950/80 leading-relaxed font-medium">
        {h['special']}
      </p>
      <div class="text-sm font-bold text-indigo-700 mt-2">
        💰 最安料金目安：¥{h['min_price']}〜
      </div>
    </div>
  </div>
  <div class="pt-4 text-right">
    <a href="{h['url']}" target="_blank" rel="noopener noreferrer" class="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-extrabold text-xs rounded-xl shadow transition">
      🏨 {h['name']}のプラン・空室を見る
    </a>
  </div>
</div>
"""
    return html

def main():
    print("Generating Obon Solo Travel Hotels data STRICTLY via Rakuten API...")
    try:
        hotels = fetch_obon_solo_hotels_api()
    except Exception as e:
        print(f"Error fetching from API: {e}")
        return
    
    if not hotels:
        print("No hotels fetched.")
        return
        
    review_html = generate_review_html(hotels)
    main_image = hotels[0]['image']
        
    new_post = {
        "id": "obon-solo-travel-guide",
        "title": "【2026年お盆休み】一人旅歓迎！今から間に合うおひとりさま向けおすすめホテル・温泉宿",
        "hotel_name": "全国 お盆休みの一人旅におすすめの宿",
        "description": "「お盆休みは一人で気ままにゆっくりしたい！」というお一人様必見。直前でも予約可能で、周りを気にせず極上の時間を過ごせる一人旅歓迎の宿を楽天トラベルAPIから厳選してご紹介します。",
        "is_special_feature": True,
        "review": review_html,
        "image": main_image,
        "other_images": [h['image'] for h in hotels[1:4]] if len(hotels) > 4 else [],
        "affiliate_url": hotels[0]['url'],
        "prefecture": "全国",
        "area": "全国",
        "categories": ["特集・まとめ", "夏休み・お盆", "一人旅・リトリート"],
        "price": None,
        "rating": None,
        "date": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(new_post, f, ensure_ascii=False, indent=2)
        
    print(f"Successfully added Obon Solo Travel hotels post to {OUTPUT_FILE}!")

if __name__ == "__main__":
    main()
