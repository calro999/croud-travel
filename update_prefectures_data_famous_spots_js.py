import json
import re

with open('src/data/famousSpots.json', 'r', encoding='utf-8') as f:
    famous_spots = json.load(f)

with open('src/data/prefecturesData.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

def add_famous_spots_js(match):
    full_match = match.group(0)
    slug = match.group(1)
    if slug in famous_spots:
        spots_js = json.dumps(famous_spots[slug], ensure_ascii=False, indent=12)
        return f'{full_match}\n        famousSpots: {spots_js},'
    return full_match

pattern = re.compile(r'{\s*slug:\s*"([a-z]+)",')
updated_js = pattern.sub(add_famous_spots_js, js_content)

with open('src/data/prefecturesData.js', 'w', encoding='utf-8') as f:
    f.write(updated_js)

print("prefecturesData.js has been updated with famousSpots for 47 prefectures!")
