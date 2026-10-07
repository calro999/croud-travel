import json
import os
import requests

HEADERS = {
    "User-Agent": "TravelGuideApp/1.0 (https://croud-travel.pages.dev; contact@travel.app)"
}

spots = [
    {
        "theme": "tokachi_jewelry_ice_mall_sauna",
        "query": "ジュエリーアイス",
        "label": "豊頃町・大津海岸のジュエリーアイス",
        "description": "北海道中川郡豊頃町の大津海岸に冬の間打ち上げられる透明度の高い氷の塊。十勝川を覆う氷が太平洋へと流れ出し、荒波に洗われて角が取れ、まるでクリスタルのような美しい輝きを放つ自然現象。"
    },
    {
        "theme": "atami_plum_garden_fireworks",
        "query": "熱海梅園",
        "label": "熱海梅園（日本一早咲きの梅の名所）",
        "description": "静岡県熱海市にある庭園。明治19年に開園し、樹齢100年を超える古木を含め60品種469本の梅が植えられている。早咲きの梅は11月下旬〜12月に開花し、1月上旬から梅まつりが開催される日本一早咲きの梅名所として知られる。"
    },
    {
        "theme": "miyajima_winter_oyster_hatsumode",
        "query": "厳島神社",
        "label": "世界遺産・厳島神社（安芸の宮島）",
        "description": "広島県廿日市市の厳島（宮島）にある神社。式内社、安芸国一宮。ユネスコの世界文化遺産に登録されており、海上に立つ朱塗りの大鳥居や寝殿造りの社殿群が織りなす荘厳な景観は日本三景の一つとして世界中に知られる。"
    },
    {
        "theme": "hakuba_valley_powder_snow_happo",
        "query": "白馬八方尾根スキー場",
        "label": "白馬八方尾根スキー場（HAKUBA VALLEY）",
        "description": "長野県北安曇郡白馬村にある日本を代表する山岳スキー場。1998年長野冬季オリンピックのアルペンスキー競技会場であり、山頂からの北アルプス白馬三山の大パノラマと、極上のパウダースノーを誇る。"
    },
    {
        "theme": "okunikko_kegon_falls_ice_yumoto_snow",
        "query": "華厳滝",
        "label": "奥日光・華厳の滝（冬のブルーアイス氷瀑）",
        "description": "栃木県日光市にある落差97メートルの大瀑布。中禅寺湖の水が岸壁を一気に落下する日本三名瀑の一つ。厳冬期の1月から2月にかけては、細い滝が幾重にも凍りつき、全体が青く輝く巨大な氷瀑（ブルーアイス）へと変貌を遂げる。"
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
            # 適度な長さに調整
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

out_file = "scripts/round133/round133_wikipedia_spots.json"
with open(out_file, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print(f"\nSaved Wikipedia spot info to {out_file}")
