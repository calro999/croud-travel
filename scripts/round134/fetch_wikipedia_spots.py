import json
import os
import requests

HEADERS = {
    "User-Agent": "TravelGuideApp/1.0 (https://croud-travel.pages.dev; contact@travel.app)"
}

spots = [
    {
        "theme": "yakushima_winter_trekking_onsen",
        "query": "白谷雲水峡",
        "label": "白谷雲水峡（苔むす神秘の森と太鼓岩）",
        "description": "鹿児島県屋久島にある自然休養林。宮之浦川の支流白谷川の上流に位置し、映画『もののけ姫』の森のモデルとしても知られる。巨岩と清流、樹齢数千年の屋久杉と無数の苔が織りなす緑の絨毯は、冬には朝露と静寂に包まれ一層の神秘性を湛える。"
    },
    {
        "theme": "gokayama_snow_gassho_lightup",
        "query": "五箇山",
        "label": "世界遺産・五箇山合掌造り集落（相倉・菅沼）",
        "description": "富山県南砺市にある合掌造りの集落群。白川郷とともにユネスコ世界文化遺産に登録されている。急勾配の茅葺き屋根が特徴で、豪雪地帯の厳しい自然に適応した伝統的建築様式を今に伝える。厳冬期には純白の雪に覆われ、幻想的なライトアップが行われる。"
    },
    {
        "theme": "yoshinoyama_snow_temple_kinpusenji",
        "query": "金峯山寺",
        "label": "世界遺産・金峯山寺蔵王堂（吉野山修験道の総本山）",
        "description": "奈良県吉野郡吉野町の吉野山にある金峯山修験本宗の総本山。ユネスコ世界遺産「紀伊山地の霊場と参詣道」の中核。本堂である蔵王堂は東大寺大仏殿に次ぐ日本屈指の巨大木造建築であり、厳冬期には白銀の吉野山に荘厳な威容を誇る。"
    },
    {
        "theme": "usuki_sekibutsu_torafugu_kaiseki",
        "query": "臼杵磨崖仏",
        "label": "国宝・臼杵磨崖仏（平安・鎌倉の奇跡の石仏群）",
        "description": "大分県臼杵市にある平安時代後期から鎌倉時代にかけて彫られた摩崖仏群。日本の摩崖仏として最初に国宝に指定された。古園石仏の大日如来像をはじめとする59体の石仏が4群に分かれて配置されており、日本彫刻史上最高傑作の一つと称えられる。"
    },
    {
        "theme": "kumejima_hatenohama_kurumaebi_resort",
        "query": "久米島",
        "label": "久米島・はての浜（東洋一の美しさを誇る白砂の楽園）",
        "description": "沖縄県久米島の東沖合に浮かぶ、砂浜だけでできた3つの無人島（メーヌ浜、ナカノ浜、ハテの浜）の総称。エメラルドグリーンの透き通る海と真っ白な砂州が織りなす絶景は「東洋一の美しさ」と称賛される。冬でも温暖で澄み切った海の景観が広がる。"
    }
]

output_data = {}

for s in spots:
    q = s["query"]
    print(f"Fetching Wikipedia info for: {q}...")
    
    # 1. 検索
    s_url = f"https://ja.wikipedia.org/w/api.php?action=query&list=search&srsearch={requests.utils.quote(q)}&srlimit=3&format=json"
    s_res = requests.get(s_url, headers=HEADERS, timeout=8).json()
    search_items = s_res.get('query', {}).get('search', [])
    page_title = search_items[0]['title'] if search_items else q

    # 2. サムネイル画像取得
    p_url = f"https://ja.wikipedia.org/w/api.php?action=query&titles={requests.utils.quote(page_title)}&prop=pageimages|extracts&exintro=true&explaintext=true&pithumbsize=1280&format=json"
    p_res = requests.get(p_url, headers=HEADERS, timeout=8).json()
    pages = p_res.get('query', {}).get('pages', {})

    img_url = ""
    extract = s["description"]

    for pid, p in pages.items():
        thumb = p.get('thumbnail')
        if thumb:
            img_url = thumb.get('source', '')
        ex = p.get('extract')
        if ex and len(ex) > 40:
            extract = ex.replace('\n', ' ').strip()
            if len(extract) > 250:
                extract = extract[:240] + "…"

    # 画像が取れなかった場合のフォールバック（Wikimedia Commons検索）
    if not img_url:
        print(f"  Fallback image search for {q}...")
        img_search_url = f"https://ja.wikipedia.org/w/api.php?action=query&titles={requests.utils.quote(page_title)}&generator=images&gimlimit=5&prop=imageinfo&iiprop=url|size|mime&format=json"
        img_res = requests.get(img_search_url, headers=HEADERS, timeout=8).json()
        for _, ip in img_res.get('query', {}).get('pages', {}).items():
            info = ip.get('imageinfo', [{}])[0]
            u = info.get('url', '')
            if any(ext in u.lower() for ext in ['.jpg', '.jpeg', '.png']) and 'logo' not in u.lower() and 'icon' not in u.lower():
                img_url = u
                break

    output_data[s["theme"]] = {
        "spotLabel": s["label"],
        "query": q,
        "pageTitle": page_title,
        "imageUrl": img_url,
        "description": extract
    }
    print(f"  -> {s['label']}: Image = {img_url[:60]}... | Text = {extract[:40]}...")

out_file = "scripts/round134/round134_wikipedia_spots.json"
with open(out_file, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print(f"\nSaved Wikipedia spot info to {out_file}")
