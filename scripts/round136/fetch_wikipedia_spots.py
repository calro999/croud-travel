import json
import os
import requests

HEADERS = {
    "User-Agent": "TravelGuideApp/1.0 (https://croud-travel.pages.dev; contact@travel.app)"
}

spots = [
    {
        "theme": "mie_kumano_owase_kodo",
        "query": "鬼ヶ城",
        "label": "世界遺産・鬼ヶ城（荒波が削り出した奇岩断崖と熊野古道）",
        "description": "三重県熊野市にある国の名勝および天然記念物。「紀伊山地の霊場と参詣道」の一部として世界遺産に登録。熊野灘の荒波と風雨、地震による隆起によって生み出された無数の海蝕洞や奇岩が約1.2kmにわたって連なるダイナミックな景勝地。冬の澄んだ大気と紺碧の海が織りなす荘厳な絶景は、熊野古道伊勢路のハイライトとして旅人を圧倒する。"
    },
    {
        "theme": "saitama_chichibu_hyochu_ogano",
        "query": "三十槌の氷柱",
        "label": "厳冬の造形美・三十槌の氷柱＆尾ノ内百景氷柱",
        "description": "埼玉県秩父市大滝の荒川源流沿いに現れる天然の巨大氷瀑アート。奥秩父の岩肌から湧き出る湧水が、厳冬期の厳しい寒さによって凍りつき、幅約30m、高さ約8mに及ぶ壮大な青白い氷のカーテンを創り出す。夜間にはライトアップも行われ、隣接する小鹿野町の尾ノ内百景氷柱とともに冬の秩父路を代表する幻想的な冬の風物詩。"
    },
    {
        "theme": "shiga_yogo_lake_wakasagi",
        "query": "余呉湖",
        "label": "羽衣伝説の鏡湖・余呉湖（冬のワカサギ釣りと賤ヶ岳雪景色）",
        "description": "滋賀県長浜市北部に位置し、琵琶湖の北東に隣接する周囲約6.4kmの美しい湖。風がない日には周囲の山々を鏡のように映し出すことから「鏡湖」とも呼ばれ、天女の羽衣伝説が伝わる。11月下旬から1月の冬期はワカサギ釣りの好期として全国の太公望が訪れ、白銀に染まる賤ヶ岳の雄姿とともに静謐な冬の湖畔美を堪能できる。"
    },
    {
        "theme": "fukushima_tadami_yanaizu",
        "query": "圓蔵寺 (福島県会津柳津町)",
        "label": "霊場・福満虚空藏菩薩圓蔵寺（赤べこ発祥と冬の只見川絶景）",
        "description": "福島県会津柳津町にある名刹で、日本三大虚空蔵尊の一つ。只見川の清流を見下ろす巨岩の上に堂宇がそびえ立ち、1200年以上の歴史を誇る。会津の郷土玩具「赤べこ」の発祥の地としても知られ、新春の初詣や1月7日の「七日堂裸まいり」には全国から参拝者が集まる。雪化粧した只見川の峡谷美と朱塗りの橋が織りなす冬景色は圧巻。"
    },
    {
        "theme": "miyazaki_ebino_plateau_shiratori",
        "query": "えびの高原",
        "label": "霧島連山の秀峰と白銀パノラマ・えびの高原",
        "description": "宮崎県えびの市に広がる標高約1,200mの広大な火山性高原。日本初の国立公園に指定された霧島錦江湾国立公園の中心地で、韓国岳や白鳥山などの名峰に囲まれる。冬期は白銀の雪景色と幻想的な霧氷（樹氷）に覆われ、澄み渡る空気の中で大パノラマが広がる。近隣の白鳥温泉は西郷隆盛が逗留して心身を癒やした名湯として知られる。"
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
        img_search_url = f"https://ja.wikipedia.org/w/api.php?action=query&titles={requests.utils.quote(page_title)}&generator=images&gimlimit=10&prop=imageinfo&iiprop=url|size|mime&format=json"
        img_res = requests.get(img_search_url, headers=HEADERS, timeout=8).json()
        for _, ip in img_res.get('query', {}).get('pages', {}).items():
            info = ip.get('imageinfo', [{}])[0]
            u = info.get('url', '')
            if any(ext in u.lower() for ext in ['.jpg', '.jpeg', '.png']) and 'logo' not in u.lower() and 'icon' not in u.lower() and 'flag' not in u.lower():
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

out_file = "scripts/round136/round136_wikipedia_spots.json"
with open(out_file, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print(f"\nSaved Wikipedia spot info to {out_file}")
