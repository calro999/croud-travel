import json
import re

with open('src/data/famousSpots.json', 'r', encoding='utf-8') as f:
    famous_spots = json.load(f)

with open('src/data/prefecturesData.ts', 'r', encoding='utf-8') as f:
    ts_content = f.read()

# 型定義の更新: famousSpots を PrefectureInfo インターフェースに追加
if "famousSpots?: SpotInfo[];" not in ts_content:
    ts_content = ts_content.replace(
        "export interface PrefectureInfo {\n  slug: string;",
        "export interface PrefectureInfo {\n  slug: string;\n  famousSpots?: SpotInfo[];"
    )

# PREFECTURES_DATA 配列の各要素に famousSpots を注入する処理
# slug: "xxx" の後に famousSpots: [...] を挿入する
def add_famous_spots(match):
    full_match = match.group(0)
    slug = match.group(1)
    if slug in famous_spots:
        spots_js = json.dumps(famous_spots[slug], ensure_ascii=False, indent=8)
        return f'{full_match}\n    famousSpots: {spots_js},'
    return full_match

pattern = re.compile(r'{\s*slug:\s*"([a-z]+)",')
updated_ts = pattern.sub(add_famous_spots, ts_content)

with open('src/data/prefecturesData.ts', 'w', encoding='utf-8') as f:
    f.write(updated_ts)

print("prefecturesData.ts has been updated with famousSpots for 47 prefectures!")
