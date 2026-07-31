import json
import os
import urllib.request
import urllib.parse
import re
import time

PREFECTURES = [
    ("hokkaido", "北海道"), ("aomori", "青森県"), ("iwate", "岩手県"), ("miyagi", "宮城県"),
    ("akita", "秋田県"), ("yamagata", "山形県"), ("fukushima", "福島県"), ("ibaraki", "茨城県"),
    ("tochigi", "栃木県"), ("gunma", "群馬県"), ("saitama", "埼玉県"), ("chiba", "千葉県"),
    ("tokyo", "東京都"), ("kanagawa", "神奈川県"), ("niigata", "新潟県"), ("toyama", "富山県"),
    ("ishikawa", "石川県"), ("fukui", "福井県"), ("yamanashi", "山梨県"), ("nagano", "長野県"),
    ("gifu", "岐阜県"), ("shizuoka", "静岡県"), ("aichi", "愛知県"), ("mie", "三重県"),
    ("shiga", "滋賀県"), ("kyoto", "京都府"), ("osaka", "大阪府"), ("hyogo", "兵庫県"),
    ("nara", "奈良県"), ("wakayama", "和歌山県"), ("tottori", "鳥取県"), ("shimane", "島根県"),
    ("okayama", "岡山県"), ("hiroshima", "広島県"), ("yamaguchi", "山口県"), ("tokushima", "徳島県"),
    ("kagawa", "香川県"), ("ehime", "愛媛県"), ("kochi", "高知県"), ("fukuoka", "福岡県"),
    ("saga", "佐賀県"), ("nagasaki", "長崎県"), ("kumamoto", "熊本県"), ("oita", "大分県"),
    ("miyazaki", "宮崎県"), ("kagoshima", "鹿児島県"), ("okinawa", "沖縄県")
]

PROMPT_TEMPLATE = """
あなたはプロの旅行雑誌の編集者です。
読者が検索エンジンで「{pref_name}」について検索する際の以下の5つのキーワードを対象に、旅行者の役に立つ魅力的で具体的なQ&A（FAQ）を合計10件作成してください。

対象キーワード：
1. 「{pref_name} 観光地 おすすめ」
2. 「{pref_name} 雨の日楽しめる」
3. 「{pref_name} 観光名所」
4. 「{pref_name} おすすめホテル」
5. 「{pref_name} おすすめ宿」

ルール：
- 各キーワードにつき2件ずつ、合計10件のQ&Aを作成してください。
- 質問（q）には対象のキーワードが自然な日本語で含まれるようにしてください。
- 回答（a）は、{pref_name}の具体的な地名、観光スポット、グルメ、温泉地名などを必ず織り交ぜて、テンプレート感の全くない独自の文章にしてください。
- 「AIとして」や「APIのデータによると」といったメタな表現、機械的な表現は絶対に含めないでください。プロの旅行ライターとして、ワクワクする魅力的な文章にしてください。

必ず以下のJSON配列フォーマットのみを出力してください。Markdownのバッククォートや余計なテキストは一切含めないでください。
[
  {{
    "q": "質問文（キーワードを含む）",
    "a": "具体的な地名や名物を交えたワクワクする回答文"
  }},
  ...
]
"""

def generate_faqs(pref_slug, pref_name):
    prompt = PROMPT_TEMPLATE.format(pref_name=pref_name)
    url = f"https://text.pollinations.ai/{urllib.parse.quote(prompt)}?model=gemini"
    
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=10) as response:
                result = response.read().decode('utf-8')
            
            # Extract JSON array
            match = re.search(r'\[\s*\{.*?\}\s*\]', result, re.DOTALL)
            if match:
                json_str = match.group(0)
                data = json.loads(json_str)
                if len(data) == 10:
                    return data
            print(f"Failed to parse or incomplete data for {pref_name}, retrying...")
        except Exception as e:
            print(f"Error on {pref_name}: {e}")
        time.sleep(2)
    
    return None

def main():
    output_dir = "/Users/calro/Downloads/croud-travel/src/data/faqs"
    os.makedirs(output_dir, exist_ok=True)
    
    print("Starting FAQ generation...")
    for slug, name in PREFECTURES:
        out_path = os.path.join(output_dir, f"{slug}.json")
        if os.path.exists(out_path):
            print(f"Skipping {name}, already exists.")
            continue
            
        print(f"Generating for {name}...")
        faqs = generate_faqs(slug, name)
        
        if faqs:
            with open(out_path, "w", encoding="utf-8") as f:
                json.dump(faqs, f, ensure_ascii=False, indent=2)
            print(f"Saved {name}")
        else:
            print(f"Failed to generate for {name}")

if __name__ == "__main__":
    main()
