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

    spots = famous_spots_map.get(slug, [])
    spot1 = spots[0]["name"] if len(spots) > 0 else f"{pref_name}名所"
    spot2 = spots[1]["name"] if len(spots) > 1 else f"{pref_name}絶景"

    multi_angle_questions = [
        {
            "q": f"{pref_name}でカップルにおすすめの露天風呂付き客室がある高級宿は？",
            "a": f"{pref_name}にはプライベート感を重視した客室露天風呂付きの名宿や温泉リゾートが充実しています。二人だけの静かな時間を過ごしながら「{spot1}」周辺の夜景や季節の料理を楽しめるプランが大人気です。"
        },
        {
            "q": f"{pref_name}で一人旅や出張ビジネスにおすすめの格安・サウナ付きホテルは？",
            "a": f"主要駅や観光拠点近くには、本格サウナや天然温泉大浴場を完備した快適ビジネスホテルやコスパ抜群の宿が豊富です。「{spot2}」などの観光にもアクセスが良く、ソロ旅に最適です。"
        },
        {
            "q": f"{pref_name}でご両親へのプレゼント旅行に喜ばれる部屋食・料亭旅館は？",
            "a": f"ご年配の方やご夫婦の記念日には、お部屋で落ち着いて「{pref_name}名物料理」を堪能できる和風料亭旅館が喜ばれます。バリアフリー対応や心温まるおもてなしが評判です。"
        }
    ]

    existing_qs = [item.get("q", "") for item in faq_data]
    for q_item in multi_angle_questions:
        if q_item["q"] not in existing_qs:
            faq_data.append(q_item)

    with open(filePath, 'w', encoding='utf-8') as f:
        json.dump(faq_data, f, ensure_ascii=False, indent=2)

print("Multi-angle search queries added to all 47 prefecture FAQ files!")
