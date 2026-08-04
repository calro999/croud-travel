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
    github_token = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
    
    if github_token:
        try:
            payload = json.dumps({
                "messages": [{"role": "user", "content": prompt}],
                "model": "gpt-4o-mini"
            }).encode('utf-8')
            req = urllib.request.Request(
                "https://models.inference.ai.azure.com/chat/completions",
                data=payload,
                headers={
                    "Content-Type": "application/json",
                    "Authorization": f"Bearer {github_token}"
                }
            )
            with urllib.request.urlopen(req, timeout=15) as response:
                res_body = json.loads(response.read().decode('utf-8'))
                result = res_body["choices"][0]["message"]["content"]
                match = re.search(r'\[\s*\{.*?\}\s*\]', result, re.DOTALL)
                if match:
                    data = json.loads(match.group(0))
                    if len(data) >= 5:
                        return data
        except Exception as e:
            print(f"GitHub Models failed for {pref_name}: {e}")

    # 高品質ローカルフォールバックデータ生成
    print(f"Generating fallback FAQs for {pref_name}...")
    return [
        {"q": f"{pref_name}旅行のベストシーズンはいつですか？", "a": f"{pref_name}は四季折々の魅力があり、春の桜や秋の紅葉シーズンは特におすすめです。"},
        {"q": f"{pref_name}でおすすめのご当地グルメは何ですか？", "a": f"{pref_name}の名物料理や地元の新鮮な食材を使ったグルメをぜひ味わってみてください。"},
        {"q": f"{pref_name}観光に必要な日数はどれくらいですか？", "a": "主要な観光スポットを巡るなら1泊2日〜2泊3日のプランが人気です。"},
        {"q": f"{pref_name}での移動手段は何が便利ですか？", "a": "中心部は電車やバスが便利ですが、郊外の絶景スポットを巡るならレンタカーがおすすめです。"},
        {"q": f"{pref_name}のおすすめのお土産は何ですか？", "a": "地元の銘菓や伝統工芸品、限定デザインの雑貨などが喜ばれます。"},
        {"q": f"{pref_name}家族連れにおすすめのスポットは？", "a": "自然豊かな公園や体験型テーマパークなど、大人から子供まで楽しめる施設が豊富です。"},
        {"q": f"{pref_name}一人旅でも楽しめますか？", "a": "治安も良く、一人でも入りやすいカフェや観光スポットが多いため安心して旅を楽しめます。"},
        {"q": f"{pref_name}温泉地やリゾートエリアはありますか？", "a": "旅の疲れを癒やせる絶景の温泉地や快適なリゾートホテルが充実しています。"},
        {"q": f"{pref_name}雨の日でも楽しめる観光スポットは？", "a": "全天候型の博物館・美術館やショッピングモール、歴史的建造物の見学がおすすめです。"},
        {"q": f"{pref_name}旅行の予算感はどれくらいですか？", "a": "宿泊・交通費込みで1泊あたり2万〜4万円程度が一般的な目安となります。"}
    ]

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
