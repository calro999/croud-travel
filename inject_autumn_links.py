import glob
import json
import os

files = sorted(glob.glob("src/data/posts/autumn-*.json"))
all_autumn = []

for f in files:
    with open(f, "r", encoding="utf-8") as fp:
        data = json.load(fp)
        all_autumn.append({
            "id": data["id"],
            "title": data["title"],
            "prefecture": data["prefecture"],
            "area": data.get("area", ""),
            "hotel_name": data.get("hotel_name", "")
        })

for post in all_autumn:
    current_id = post["id"]
    current_pref = post["prefecture"]
    
    # 同一エリアまたは同一都道府県の近隣記事を優先抽出
    related = [p for p in all_autumn if p["id"] != current_id and (p["prefecture"] == current_pref or p["id"].split("-")[1] == current_id.split("-")[1])]
    if len(related) < 2:
        related = [p for p in all_autumn if p["id"] != current_id]
        
    related_selected = related[:2]
    
    filepath = os.path.join("src/data/posts", f"{current_id}.json")
    with open(filepath, "r+", encoding="utf-8") as fp:
        d = json.load(fp)
        review = d.get("review", "")
        
        if "<!-- Autumn Internal Links -->" in review:
            review = review.split("<!-- Autumn Internal Links -->")[0].strip()
            
        links_html = '''
<!-- Autumn Internal Links -->
<h2 id="related-autumn" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-6">🍁 あわせて読みたい秋の行楽・美食温泉宿特集</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
'''
        for rel in related_selected:
            links_html += f'''  <a href="/posts/{rel['id']}" class="block p-4 rounded-2xl bg-gradient-to-br from-orange-50/60 to-amber-50/60 border border-amber-200 hover:border-amber-400 hover:shadow-md transition">
    <span class="text-xs font-bold px-2 py-0.5 bg-amber-500 text-white rounded-md mb-2 inline-block">{rel['prefecture']}</span>
    <h4 class="text-xs font-bold text-stone-900 line-clamp-2 mb-1">{rel['title']}</h4>
    <p class="text-[11px] text-stone-600">おすすめ宿: {rel['hotel_name']}</p>
  </a>\n'''
  
        links_html += '''  <a href="/campaigns/autumn-gourmet-travel" class="block p-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white shadow-md transition flex flex-col justify-center items-center text-center">
    <span class="text-xs font-bold mb-1 text-amber-100">全国の秋の味覚を網羅！</span>
    <h4 class="text-xs font-black">🍁 秋の行楽・美食温泉宿 特集まとめを見る →</h4>
  </a>
</div>
'''
        d["review"] = review + "\n\n" + links_html
        fp.seek(0)
        json.dump(d, fp, ensure_ascii=False, indent=2)
        fp.truncate()

print(f"Successfully added inter-linking section & summary link to all {len(all_autumn)} autumn posts!")
