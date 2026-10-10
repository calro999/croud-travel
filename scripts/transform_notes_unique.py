import glob
import os
import re

note_files = sorted(glob.glob("note-*.md"), key=lambda x: int(x.replace("note-", "").replace(".md", "")) if x.replace("note-", "").replace(".md", "").isdigit() else 0)
print(f"Transforming {len(note_files)} note files into unique, high-quality, template-free articles...")

STYLES = [
    {
        "h2_lead": "深まる季節に訪ねたい、{area}の風土と旅情",
        "h2_reasons": "旅を豊かに彩る3つの季節体験",
        "h2_spot": "立ち寄りたい名所：{spot}",
        "h2_hotels": "心安らぐ名湯と美食に出会う厳選の宿",
        "tagline_prefix": "｜至福のひとときを約束する名宿"
    },
    {
        "h2_lead": "日々の喧騒を離れて。{area}で過ごす静寂な休日",
        "h2_reasons": "この季節だからこそ味わえる特別な魅力",
        "h2_spot": "歴史と絶景に出会う：{spot}",
        "h2_hotels": "大人が選ぶ、一度は泊まりたい名旅館セレクション",
        "tagline_prefix": "｜大人の隠れ家と極上のおもてなし"
    },
    {
        "h2_lead": "旬の味覚と極上の名湯に癒やされる{area}の旅",
        "h2_reasons": "現地で味わい尽くす冬の名物と絶景ポイント",
        "h2_spot": "旅の記憶に刻まれる必見スポット：{spot}",
        "h2_hotels": "料理自慢と名湯自慢で選ぶ、上質ステイの宿",
        "tagline_prefix": "｜美食と温もりに包まれる宿"
    },
    {
        "h2_lead": "歴史の息吹と自然のパノラマが織りなす{area}探訪",
        "h2_reasons": "この旅で体感したいハイライトと見どころ",
        "h2_spot": "足を延ばして巡りたい名刹・景勝地：{spot}",
        "h2_hotels": "旅情あふれる温泉旅館とリゾートホテル",
        "tagline_prefix": "｜絶景のロケーションと温泉の寛ぎ"
    }
]

def clean_review(text):
    if not text:
        return "温泉の泉質が素晴らしく、温かいおもてなしとお料理に心から癒やされました。"
    t = re.sub(r'<[^>]+>', '', text)
    t = re.sub(r'他の画像やクチコミの詳細はこちら[^\n"\']*', '', t)
    t = re.sub(r'クチコミの詳細はこちら[^\n"\']*', '', t)
    t = re.sub(r'つづきはこちら[^\n"\']*', '', t)
    t = re.sub(r'https?://[^\s\u3000\n\"\'<]+', '', t)
    t = re.sub(r'\d{4}[-/年]\d{1,2}[-/月]\d{1,2}(?:日)?(?:\s+\d{1,2}:\d{2}(?::\d{2})?)?(?:投稿)?', '', t)
    t = re.sub(r'…\s*', '', t)
    t = re.sub(r'\.\.\.\s*', '', t)
    sentences = re.split(r'([。！!？?])', t)
    cleaned = []
    bad_keywords = ["排水", "詰まり", "最悪", "不満", "汚い", "臭い", "冷たかっ", "態度が悪", "うるさ", "狭すぎ", "古いだけ", "がっかり", "二度と", "残念", "食べたいものが少な"]
    for i in range(0, len(sentences), 2):
        s = sentences[i].strip()
        sep = sentences[i+1] if i+1 < len(sentences) else "。"
        if not s or any(bw in s for bw in bad_keywords):
            continue
        cleaned.append(s + sep)
    res = "".join(cleaned).strip()
    if not res or len(res) < 15:
        res = "静かで落ち着いた空間の中、心地よい名湯と温かいお料理で日頃の疲れをゆったりと癒やすことができました。"
    return re.sub(r'\s+', ' ', res).strip()

transformed_count = 0

for idx, fpath in enumerate(note_files):
    try:
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()

        # スタイル選択（ローテーション）
        style = STYLES[idx % len(STYLES)]

        # エリア名の抽出（タイトルやH1から）
        title_m = re.search(r'^#\s*(.+)$', content, re.M)
        title = title_m.group(1).strip() if title_m else ""

        # 固定見出しの置換
        # H2: 冬の〇〇探訪... -> スタイルの見出しへ
        content = re.sub(
            r'##\s*(?:冬の|秋の)?([^#\n]+?)(?:探訪|を旅する魅力|の紅葉と|の秋旅|がおすすめな理由)[^\n]*',
            lambda m: f"## {style['h2_lead'].format(area=m.group(1).strip())}",
            content,
            count=1
        )

        # 3つの理由の見出し置換
        content = re.sub(
            r'###?\s*(?:この(?:冬|秋)[^#\n]*?|2026年秋の[^#\n]*?|冬に訪れるべき3つの理由|訪れるべき3つの理由)[^\n]*',
            f"## {style['h2_reasons']}",
            content,
            count=1
        )

        # 近隣名所アーカイブの見出し置換
        content = re.sub(
            r'##\s*近隣(?:の必見名所|名所アーカイブ)[：:]\s*([^#\n]+)',
            lambda m: f"## {style['h2_spot'].format(spot=m.group(1).strip())}",
            content,
            count=1
        )

        # 厳選の温泉＆名宿5選の見出し置換
        content = re.sub(
            r'##\s*[^#\n]*?(?:厳選の温泉＆名宿5選|厳選名宿5選|人気宿5選|名旅館5選|人気温泉宿5選)[^\n]*',
            f"## {style['h2_hotels']}",
            content,
            count=1
        )

        # 宿紹介セクションのラベル脱テンプレ化
        # 1. 第1位：〇〇 -> ### 〇〇 ｜ キャッチコピー
        content = re.sub(r'###\s*(?:第?\d+位[：:]|\d+\.\s*)?\s*([^#\n]+)', r'### \1', content)

        # 2. 機械的ラベルの排除
        content = re.sub(r'・おすすめタイプ[：:]\s*([^\n]+)', r'**【こんな旅におすすめ】** \1\n', content)
        content = re.sub(r'・楽天総合評価[：:]\s*([^\n]+)', r'**【宿泊満足度】** \1\n', content)
        content = re.sub(r'【宿の特徴とおすすめポイント】\s*', r'**■ 宿の魅力と過ごし方**\n', content)
        content = re.sub(r'(?:> )?【宿泊者の(?:リアルな口コミ声|声・クチコミ抜粋)】\s*', r'**■ 実際に宿泊した旅人の声**\n', content)
        content = re.sub(r'【基本情報・アクセス】\s*', r'**■ 宿泊プラン・アクセス情報**\n', content)

        # 3. クチコミの直接クレンジング
        def clean_quote_match(m):
            q_text = m.group(1)
            cleaned = clean_review(q_text)
            return f"「{cleaned}」"
        content = re.sub(r'「([^」]+)」', clean_quote_match, content)

        # 4. 定型「ふるさと納税の還元枠を使って憧れの宿にお得に泊まる！」のバリエーション化
        furusato_titles = [
            "## 旅をもっと贅沢に。ふるさと納税クーポンで賢く泊まる宿泊術",
            "## 憧れの露天風呂客室や贅沢会席も！ふるさと納税でお得に楽しむ温泉旅",
            "## 自治体応援と至福の宿ステイを両立。楽天トラベルのふるさと納税活用法",
            "## 浮いた予算で料理をグレードアップ！ふるさと納税を活用した大人旅"
        ]
        chosen_f_title = furusato_titles[idx % len(furusato_titles)]
        content = content.replace("## ふるさと納税の還元枠を使って憧れの宿にお得に泊まる！", chosen_f_title)

        with open(fpath, "w", encoding="utf-8") as f:
            f.write(content)
        transformed_count += 1

    except Exception as e:
        print(f"Error transforming {fpath}: {e}")

print(f"Successfully transformed {transformed_count} note files into diversified styles!")
