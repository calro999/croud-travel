import os
import re

DIR = "/Users/calro/Downloads/croud-travel"

regions = {
    "北海道": "北海道地方_比較記事.md",
    "東北": "東北地方_比較記事.md",
    "関東": "関東地方_比較記事.md",
    "北陸": "北陸地方_比較記事.md",
    "中部": "中部地方_比較記事.md",
    "東海": "中部地方_比較記事.md",
    "甲信越": "中部地方_比較記事.md",
    "関西": "関西地方_比較記事.md",
    "近畿": "関西地方_比較記事.md",
    "中国": "中国地方_比較記事.md",
    "四国": "四国地方_比較記事.md",
    "九州": "九州・沖縄地方_比較記事.md",
    "沖縄": "九州・沖縄地方_比較記事.md",
}

files = [
    "北海道地方_比較記事.md",
    "東北地方_比較記事.md",
    "関東地方_比較記事.md",
    "北陸地方_比較記事.md",
    "中部地方_比較記事.md",
    "関西地方_比較記事.md",
    "中国地方_比較記事.md",
    "四国地方_比較記事.md",
    "九州・沖縄地方_比較記事.md"
]

def add_internal_links():
    for filename in files:
        filepath = os.path.join(DIR, filename)
        if not os.path.exists(filepath):
            print(f"File not found: {filename}")
            continue

        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # 1. 文中の関連キーワードをリンク化（各地方1回ずつ）
        # ただし見出しや既にリンク化されているものは避ける
        replaced_regions = set()
        
        # 自分の地方を表すキーワードはリンク化しない
        my_region_keywords = [k for k, v in regions.items() if v == filename]

        for region_name, target_file in regions.items():
            if target_file == filename:
                continue
            if target_file in replaced_regions:
                continue # すでにそのファイルへのリンクは貼った

            # キーワードがマッチしたらリンク化。
            # ただし、すでにリンクの中身になっている場合（例：[東北]）や見出し（# 東北）などは除外する高度な正規表現は難しいため、
            # シンプルに最初に現れたプレーンなテキストの箇所を置換する。
            # markdownのリンク構文内や見出し行を避けるため、正規表現を工夫
            
            pattern = r'(?<!\[)(?<!# )(' + region_name + r'(?:地方)?)(?!\])'
            
            # 検索して、最初の1件だけ置換
            match = re.search(pattern, content)
            if match:
                original_text = match.group(1)
                replacement = f"[{original_text}](./{target_file})"
                content = content[:match.start()] + replacement + content[match.end():]
                replaced_regions.add(target_file)

        # 2. 末尾にまとめリンクを追加
        footer = "\n\n---\n\n## 🗺️ さらに旅の選択肢を広げる！全国の地方別比較ガイド\n\n行き先に迷ったら、他のエリアの比較記事もぜひチェックしてみてください。あなたにぴったりの旅がきっと見つかります。\n\n"
        for target_file in files:
            if target_file != filename:
                display_name = target_file.replace("_比較記事.md", "")
                footer += f"- [【{display_name}】何ができる？何が食べれる？徹底比較ガイド](./{target_file})\n"

        if "## 🗺️ さらに旅の選択肢を広げる" not in content:
            content += footer

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated: {filename}")

if __name__ == '__main__':
    add_internal_links()
