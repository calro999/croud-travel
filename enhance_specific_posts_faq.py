import json

# 1. yukiroro
yukiroro_path = "src/data/posts/yukiroro.json"
with open(yukiroro_path, "r", encoding="utf-8") as f:
    yukiroro_data = json.load(f)

# FAQ加筆
yukiroro_faq_addition = """
  <div class="p-4 rounded-xl bg-purple-50/50 border border-purple-200">
    <h4 class="text-sm font-bold text-purple-950">Q. Yu Kiroro (yukiroro) の朝食や夕食レストランの利用・予約方法は？</h4>
    <p class="text-xs text-purple-900/80 mt-1">A. 敷地内・リゾート内のレストランにて、北海道の食材を活かしたビュッフェやコースディナーをご堪能いただけます。シーズン中は混雑するため、ご宿泊予約と同時に事前予約されることをおすすめします。</p>
  </div>
  <div class="p-4 rounded-xl bg-indigo-50/50 border border-indigo-200">
    <h4 class="text-sm font-bold text-indigo-950">Q. 夏休みの避暑地利用やファミリー・子連れでの過ごし方は？</h4>
    <p class="text-xs text-indigo-900/80 mt-1">A. 夏休みは爽やかな高原気候の中でツリーアドベンチャーやパークゴルフ、手作り体験などが楽しめます。客室には全室キッチン・洗濯乾燥機が付いているためお子様連れでも大好評です。</p>
  </div>
"""
yukiroro_data["review"] = yukiroro_data["review"].replace("</div>\n\n<h2 id=\"summary\">", f"{yukiroro_faq_addition}</div>\n\n<h2 id=\"summary\">")
with open(yukiroro_path, "w", encoding="utf-8") as f:
    json.dump(yukiroro_data, f, ensure_ascii=False, indent=2)

# 2. 158566 (スーパーホテル鹿嶋)
kashima_path = "src/data/posts/158566.json"
with open(kashima_path, "r", encoding="utf-8") as f:
    kashima_data = json.load(f)

kashima_faq_addition = """
  <div class="p-4 rounded-xl bg-orange-50/50 border border-orange-200">
    <h4 class="text-sm font-bold text-orange-950">Q. スーパーホテル鹿嶋の夕食や近隣のおすすめ飲食店は？</h4>
    <p class="text-xs text-orange-900/80 mt-1">A. フロントにて常陸牛や鹿島灘の海鮮が味わえる近隣居酒屋・名店グルメマップをご案内しております。また、日替わり夕食サービスやウェルカムバー（指定時間）も大変ご好評いただいております。</p>
  </div>
  <div class="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200">
    <h4 class="text-sm font-bold text-emerald-950">Q. 天然温泉「千両の湯」の入浴時間と効能は？</h4>
    <p class="text-xs text-emerald-900/80 mt-1">A. 館内の「千両の湯」は天然温泉となっており、疲労回復・関節痛・美肌に優れた泉質です。夜通し（男女入替制）ご利用いただけますのでお仕事や旅行の後もゆったり温まっていただけます。</p>
  </div>
"""
kashima_data["review"] = kashima_data["review"].replace("</div>\n\n<hr style=", f"{kashima_faq_addition}</div>\n\n<hr style=")
with open(kashima_path, "w", encoding="utf-8") as f:
    json.dump(kashima_data, f, ensure_ascii=False, indent=2)

print("Specific posts FAQs updated with longtail surrounding queries!")
