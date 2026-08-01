import json

obon_file = "/Users/calro/Downloads/croud-travel/src/data/posts/obon-travel-guide.json"
solo_obon_file = "/Users/calro/Downloads/croud-travel/src/data/posts/obon-solo-travel-guide.json"

link_to_solo = """
<div class="my-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-indigo-500 rounded-r-2xl shadow-sm">
  <h4 class="font-bold text-indigo-900 mb-2">🧑💡 一人旅をご検討中の方へ</h4>
  <p class="text-sm text-indigo-800/80 mb-3">お盆休みはどこも家族連れで混雑しがちですが、「お一人様歓迎」の穴場宿も存在します！誰にも気兼ねなくゆっくり過ごしたい方は、ぜひこちらの特集もチェックしてみてください。</p>
  <a href="/posts/obon-solo-travel-guide" class="text-indigo-600 font-bold hover:underline hover:text-indigo-800 transition flex items-center">
    👉 【お盆休みの一人旅】今から間に合うおひとりさま向けおすすめホテル・温泉宿はこちら
  </a>
</div>
"""

link_to_family = """
<div class="my-8 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-blue-500 rounded-r-2xl shadow-sm">
  <h4 class="font-bold text-blue-900 mb-2">👨‍👩‍👧‍👦💡 ご家族・カップルでのご旅行をご検討中の方へ</h4>
  <p class="text-sm text-blue-800/80 mb-3">お一人様ではなく、ご家族やカップルでワイワイ楽しめる直前予約可能な宿をお探しの場合は、こちらの特集をご覧ください！今からでも間に合う大人気宿を厳選しています。</p>
  <a href="/posts/obon-travel-guide" class="text-blue-600 font-bold hover:underline hover:text-blue-800 transition flex items-center">
    👉 【お盆休みの家族旅行・カップル】今からでも間に合う！おすすめ温泉宿特集はこちら
  </a>
</div>
"""

def add_link(filepath, link_html):
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Append the link just before the first <h2 id="about"> or at the bottom of intro
    review = data.get("review", "")
    split_point = '<hr class="my-8'
    if split_point in review:
        parts = review.split(split_point, 1)
        new_review = parts[0] + link_html + split_point + parts[1]
        data["review"] = new_review
        
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"Successfully added internal link to {filepath}")
    else:
        print(f"Could not find split point in {filepath}")

add_link(obon_file, link_to_solo)
add_link(solo_obon_file, link_to_family)
