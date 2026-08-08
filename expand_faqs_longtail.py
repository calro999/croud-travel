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
    spot3 = spots[2]["name"] if len(spots) > 2 else f"{pref_name}観光"

    # 周辺ロングテールQ&A
    longtail_questions = [
        {
            "q": f"{pref_name}観光で穴場のおすすめスポットはどこですか？",
            "a": f"{pref_name}の王道名所「{spot1}」も素晴らしいですが、混雑を避けてゆっくり楽しみたい方には「{spot3}」や季節限定の絶景ビューポイントが穴場として大変人気です。"
        },
        {
            "q": f"車なし（電車・バス）でも回れる{pref_name}の観光モデルコースは？",
            "a": f"主要ターミナル駅を拠点に、直行バスや観光循環バスを利用すれば車なしでも快適に「{spot1}」や周辺の散策エリアを網羅できます。徒歩圏内に見どころやグルメ名店が集まっています。"
        },
        {
            "q": f"{pref_name}で「有名なわもの」や名物お土産・特産品といえば何ですか？",
            "a": f"{pref_name}は伝統の銘菓や新鮮な地場食材を使った名物料理、歴史ある工芸品など「有名なもの」が豊富です。旅の思い出や手土産には地元の老舗で親しまれる名産品が一番人気です。"
        },
        {
            "q": f"お盆や夏休みに{pref_name}へ家族旅行する際のおすすめの過ごし方は？",
            "a": f"夏休み・お盆シーズンは涼しい高原エリアや絶景プール完備のリゾートホテル、自然を感じる体験アクティビティが人気です。早めの宿確保と周遊プランの作成をおすすめします。"
        }
    ]

    # 重複しないように追加
    existing_qs = [item.get("q", "") for item in faq_data]
    for lt_item in longtail_questions:
        if lt_item["q"] not in existing_qs:
            faq_data.append(lt_item)

    with open(filePath, 'w', encoding='utf-8') as f:
        json.dump(faq_data, f, ensure_ascii=False, indent=2)

print("Longtail surrounding FAQs generated for all 47 prefectures!")
