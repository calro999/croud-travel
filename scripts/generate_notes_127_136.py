import json
import os
import re

AFFILIATE_ID = "54d2a438.4bc4abc2.54d2a439.aa1be583"
FURUSATO_URL = f"https://hb.afl.rakuten.co.jp/hgc/{AFFILIATE_ID}/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"

with open("scripts/hotels_127_136.json", "r", encoding="utf-8") as f:
    articles_data = json.load(f)

COMMON_TAGS = [
    "紅葉", "紅葉狩り", "紅葉名所", "秋旅", "秋の旅行", "温泉", "温泉旅行", "温泉宿", "露天風呂", "絶景露天風呂",
    "源泉かけ流し", "貸切風呂", "客室露天風呂", "ご褒美旅行", "女子旅", "カップル旅行", "家族旅行", "夫婦旅", "一人旅", "週末旅行",
    "国内旅行", "日本旅行", "旅行好き", "旅行記", "宿泊記", "ホテルステイ", "贅沢宿", "老舗旅館", "温泉街散策", "ご当地グルメ",
    "会席料理", "旬の味覚", "地産地消", "秋の味覚", "ふるさと納税", "ふるさと納税旅行", "楽天トラベル", "楽天経済圏", "楽天ポイント", "ポイ活",
    "旅行計画", "観光スポット", "絶景スポット", "フォトジェニック", "写真好きな人と繋がりたい", "カメラ旅", "日本の風景", "ドライブ旅行", "電車旅", "新幹線旅",
    "リフレッシュ", "癒やし旅", "自然を満喫", "パワースポット", "歴史の街", "文化財の宿", "美肌の湯", "日帰り温泉", "温泉巡り", "湯めぐり"
]

def clean_body_text(text):
    if not text:
        return ""
    text = text.replace("**", "")
    text = re.sub(r'[■◆★☆●▼▲［］♪]', ' ', text)
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

for num_str, data in articles_data.items():
    num = int(num_str)
    title = data["title"].replace("**", "").strip()
    pref_ja = data["pref_ja"]
    slug = data["slug"]
    ai_intro = clean_body_text(data["ai_intro"])
    h2_reason = clean_body_text(data["h2_reason"])
    reason_body = data["reason_body"].replace("**", "").strip()
    h2_access = clean_body_text(data["h2_access"])
    access_body = data["access_body"].replace("**", "").strip()
    h2_hotels = clean_body_text(data["h2_hotels"])
    hotels = data["hotels"]
    area_tags = data.get("area_tags", [])

    all_tags = []
    seen = set()
    for t in area_tags + [f"{pref_ja}旅行", f"{pref_ja}観光", f"{pref_ja}温泉", f"{pref_ja}紅葉", f"{pref_ja}ホテル", f"{pref_ja}旅館", f"{pref_ja}グルメ"]:
        t_clean = t.replace("#", "").strip()
        if t_clean and t_clean not in seen:
            seen.add(t_clean)
            all_tags.append(t_clean)
    
    for h in hotels:
        h_name = re.sub(r'[^\w\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]', '', h["hotelName"])
        if h_name and h_name not in seen:
            seen.add(h_name)
            all_tags.append(h_name)

    for ct in COMMON_TAGS:
        if ct not in seen:
            seen.add(ct)
            all_tags.append(ct)

    while len(all_tags) < 75:
        all_tags.append(f"{pref_ja}秋旅{len(all_tags)}")

    tags_block = "\n".join(all_tags[:75])

    hotel_sections = []
    types = ["王道の絶景・名湯宿", "料理自慢・美食重視宿", "贅沢なおこもり・客室露天宿", "観光拠点・アクセス抜群宿", "歴史と伝統の老舗宿"]

    for idx, h in enumerate(hotels):
        h_type = types[idx % len(types)]
        h_name = clean_body_text(h["hotelName"])
        h_special = clean_body_text(h["hotelSpecial"])
        h_access = clean_body_text(h["access"])
        h_price = f"{h['hotelMinCharge']:,}"
        h_review = clean_body_text(h["userReview"])
        h_score = h["reviewAverage"]

        sec = f"""### {idx+1}. {h_name}

・おすすめタイプ：{h_type}
・楽天総合評価：★{h_score}

![{h_name}]({h['hotelImageUrl']})

【宿の特徴とおすすめポイント】
{h_special}。秋の彩りに包まれる{pref_ja}の観光と合わせて、贅沢な湯浴みと心づくしのおもてなしをご堪能いただけます。

【宿泊者の声・クチコミ抜粋】
「{h_review}」

【基本情報・アクセス】
・目安宿泊料金：1名あたり 税込 {h_price}円〜
・アクセス：{h_access}

👉 [{h_name} の宿泊プラン・空室・クチコミを楽天トラベルで確認する]({h['affiliateUrl']})"""
        hotel_sections.append(sec)

    hotels_text = "\n\n".join(hotel_sections)

    content = f"""# {title}

2026年10月下旬から11月・12月上旬にかけて見頃を迎える{pref_ja}の紅葉名所と、極上の温泉・旬の味覚を堪能できる厳選の温泉宿5選をご紹介します。これから計画してもまだ間に合う秋の絶景旅をお届けします。

{ai_intro}

---

## {h2_reason}

{reason_body}

---

## {h2_access}

{access_body}

---

## ふるさと納税の還元枠を使って憧れの宿にお得に泊まる！

楽天トラベルでは、各自治体の「ふるさと納税宿泊クーポン」を利用して対象の温泉宿に賢く宿泊することができます。

寄付額に応じた割引クーポンが即時適用でき、憧れの露天風呂付き客室や旬の特別会席プランも手軽に予約可能です。秋の旅行シーズンはお得な還元枠を活用して、贅沢なひとときをお過ごしください。

※控除上限額内で寄付し、宿泊代金をクーポンで全額賄えた場合の実質自己負担額です。ご自身の控除上限額をご確認の上ご利用ください。

👉 [楽天トラベル ふるさと納税の対象施設・クーポン詳細はこちら]({FURUSATO_URL})

---

## {h2_hotels}

{hotels_text}

---

## 秋の{pref_ja}旅行でよくある質問（FAQ）

Q1. 2026年秋の紅葉見頃はいつ頃ですか？
A1. エリアや標高により異なりますが、高原や山間部は10月下旬〜11月上旬、温泉街や平地部は11月中旬〜11月下旬（一部12月上旬）に見頃を迎えます。最新の紅葉色づき情報をご確認ください。

Q2. 予約は今からでも間に合いますか？
A2. 週末や連休は混雑が予想されますが、平日や直前枠、ふるさと納税クーポン対象プランなど、空室が見つかる日程も多数あります。楽天トラベルの空室カレンダーからリアルタイムの状況をご確認いただけます。

Q3. どのような服装・持ち物がおすすめですか？
A3. 朝晩と日中の気温差が大きいため、脱ぎ着しやすいアウターやマフラー、散策に適した歩きやすい靴のご用意がおすすめです。

---

## {pref_ja}の温泉宿をもっと探す

当サイトでは、{pref_ja}をはじめ全国各地の温泉宿・観光スポット情報を詳しくご紹介しています。

👉 [【最新版】{pref_ja}のおすすめ観光・温泉宿一覧はこちら](https://croud-travel.pages.dev/prefectures/{slug})

---

{tags_block}
"""

    file_path = f"note-{num}.md"
    with open(file_path, "w", encoding="utf-8") as out:
        out.write(content.strip() + "\n")
    print(f"Generated {file_path}")

print("All notes 127-136 generated successfully!")
