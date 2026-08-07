import json
import os

with open('src/data/famousSpots.json', 'r', encoding='utf-8') as f:
    famous_spots_map = json.load(f)

pref_names = {
  "hokkaido": "北海道", "aomori": "青森県", "iwate": "岩手県", "miyagi": "宮城県",
  "akita": "秋田県", "yamagata": "山形県", "fukushima": "福島県", "ibaraki": "茨城県",
  "tochigi": "栃木県", "gunma": "群馬県", "saitama": "埼玉県", "chiba": "千葉県",
  "tokyo": "東京都", "kanagawa": "神奈川県", "niigata": "新潟県", "toyama": "富山県",
  "ishikawa": "石川県", "fukui": "福井県", "yamanashi": "山梨県", "nagano": "長野県",
  "gifu": "岐阜県", "shizuoka": "静岡県", "aichi": "愛知県", "mie": "三重県",
  "shiga": "滋賀県", "kyoto": "京都府", "osaka": "大阪府", "hyogo": "兵庫県",
  "nara": "奈良県", "wakayama": "和歌山県", "tottori": "鳥取県", "shimane": "島根県",
  "okayama": "岡山県", "hiroshima": "広島県", "yamaguchi": "山口県", "tokushima": "徳島県",
  "kagawa": "香川県", "ehime": "愛媛県", "kochi": "高知県", "fukuoka": "福岡県",
  "saga": "佐賀県", "nagasaki": "長崎県", "kumamoto": "熊本県", "oita": "大分県",
  "miyazaki": "宮崎県", "kagoshima": "鹿児島県", "okinawa": "沖縄県"
}

faq_dir = 'src/data/faqs'

for slug, pref_name in pref_names.items():
    filePath = os.path.join(faq_dir, f"{slug}.json")
    if not os.path.exists(filePath):
        continue
    
    with open(filePath, 'r', encoding='utf-8') as f:
        try:
            faq_data = json.load(f)
        except Exception:
            faq_data = []

    faq_data = [item for item in faq_data if "有名な場所" not in item.get("q", "")]

    spots = famous_spots_map.get(slug, [])
    if len(spots) >= 2:
        spot1 = spots[0]["name"]
        spot2 = spots[1]["name"]
        spot1_desc = spots[0]["description"]
        
        new_q1 = {
            "q": f"{pref_name}で特に有名な場所といえばどこですか？",
            "a": f"{pref_name}を代表する有名な場所としては「{spot1}」や「{spot2}」が挙げられます。特に{spot1}は、{spot1_desc} 初めての{pref_name}旅行なら絶対にはずせない王道スポットです。"
        }
        new_q2 = {
            "q": f"{pref_name}の有名な場所を効率よく巡るおすすめコースは？",
            "a": f"アクセスが良い主要スポットを起点に、「{spot1}」をじっくり見学したあとに「{spot2}」や周辺のご当地グルメ街へ移動するルートが人気です。日帰りや1泊2日でも無理なく周遊できます。"
        }
        faq_data.insert(0, new_q2)
        faq_data.insert(0, new_q1)

        with open(filePath, 'w', encoding='utf-8') as f:
            json.dump(faq_data, f, ensure_ascii=False, indent=2)

print("FAQ json files for 47 prefectures updated!")
