import json
import os
import requests

HEADERS = {
    "User-Agent": "TravelGuideApp/1.0 (https://croud-travel.pages.dev; contact@travel.app)"
}

spots = [
    {
        "theme": "osaka_inunakiyama_onsen_kongosan",
        "query": "犬鳴山 (大阪府)",
        "label": "犬鳴山修験道（七宝瀧寺と静寂の渓谷美）",
        "description": "大阪府泉佐野市にある犬鳴川渓谷一帯の景勝地。日本最古の修験道根本道場の一つとされる七宝瀧寺があり、巨岩と滝が連なる神聖な霊場として知られる。冬は凛とした冷気の中で静寂が深まり、新春の初詣や厄除け祈願、そして渓流沿いの温泉宿での冬ごもりに最適な名所。"
    },
    {
        "theme": "saga_imari_arita_ookawachiyama",
        "query": "大川内山",
        "label": "秘窯の里・大川内山（鍋島藩窯跡と冬の白磁散策）",
        "description": "佐賀県伊万里市南部にある山深く険しい谷間に位置する磁器の窯元集落。江戸時代に鍋島藩が技術流出を防ぐため関所を設けて名工を集め、最高峰の鍋島焼を焼かせた「秘窯の里」。奇岩の山並みを背にレンガ造りの煙突や白壁が並び、冬は静寂のなかで器巡りを楽しめる。"
    },
    {
        "theme": "tokushima_mima_udatsu_historic",
        "query": "脇町南町",
        "label": "国選定重伝建・脇町うだつの町並み（藍商の歴史建築）",
        "description": "徳島県美馬市脇町にある国の重要伝統的建造物群保存地区。江戸から明治時代にかけて吉野川の水運を利用した阿波藍の集散地として栄えた。本瓦葺きと重厚な白壁、富の象徴である装飾的な「うだつ」が立ち並ぶ美しい町並みは、冬の澄んだ青空と雪景色に格別の風情を見せる。"
    },
    {
        "theme": "ehime_kumakogen_shikoku_karst",
        "query": "四国カルスト",
        "label": "標高1,400mの白銀パノラマ・四国カルスト天狗高原",
        "description": "愛媛県と高知県の県境に連なる標高1,000m〜1,400mのカルスト台地。山口県の秋吉台、福岡県の平尾台とともに日本三大カルストの一つ。白い石灰岩が点在する草原は冬になると四国随一の白銀の雪原へと変貌し、澄み渡る夜空には肉眼で天の川が望める満天の星空が広がる。"
    },
    {
        "theme": "kochi_niyodogawa_niyodoblue_nakatsu",
        "query": "仁淀川",
        "label": "奇跡の清流・仁淀川（冬に透明度極まる仁淀ブルー）",
        "description": "愛媛県・高知県を流れる一級河川で、国土交通省の全国一級河川水質調査で全国1位常連を誇る「奇跡の清流」。不純物が極めて少ないため、光の波長によりコバルトブルーからエメラルドグリーンに輝く「仁淀ブルー」で名高い。雨が少なく水量が安定する11月〜1月の冬が最も青く澄む。"
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

out_file = "scripts/round135/round135_wikipedia_spots.json"
with open(out_file, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print(f"\nSaved Wikipedia spot info to {out_file}")
