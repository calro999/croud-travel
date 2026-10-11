import json
import os
import requests

HEADERS = {
    "User-Agent": "TravelGuideApp/1.0 (https://croud-travel.pages.dev; contact@travel.app)"
}

spots = [
    {
        "theme": "fukushima_iizaka_onsen",
        "query": "飯坂温泉",
        "alt_queries": ["鯖湖湯", "摺上川", "福島市"],
        "label": "奥州三名湯の歴史を誇る名湯・飯坂温泉（日本最古級木造共同浴場・鯖湖湯と摺上川渓谷の初冬風情）",
        "description": "福島県福島市飯坂町にある開湯2000年以上の歴史を誇る古湯。鳴子温泉、秋保温泉とともに「奥州三名湯」の一つに数えられ、松尾芭蕉が『おくのほそ道』の旅の途中で立ち寄ったことでも名高い。温泉街を流れる摺上川沿いには木造の老舗旅館や情緒あふれる共同浴場が点在し、中でも日本最古級の木造共同浴場「鯖湖湯（さばこゆ）」は明治時代の面影を復元した総ヒバ造りの風格ある名所。源泉温度は45〜60℃と高く、熱気あふれる湯上がりに味わう名物「円盤餃子」の食べ歩きとともに初冬の心と身体を芯から温めてくれる。"
    },
    {
        "theme": "miyagi_zao_fox_village_kamasaki",
        "query": "宮城蔵王キツネ村",
        "alt_queries": ["鎌先温泉", "白石市", "蔵王連峰"],
        "label": "冬毛モフモフの奇跡の楽園・宮城蔵王キツネ村（100頭以上のキツネが放し飼い・南蔵王の大自然）",
        "description": "宮城県白石市福岡八宮川原子にある世界で唯一キツネの放し飼いエリアを有する大人気動物テーマパーク。広大な敷地内にはキタキツネ、銀ギツネ、ホッキョクギツネ、プラチナギツネなど約100頭以上のキツネたちが自然に近い状態で暮らしている。特に11月から12月にかけては冬の厳しい寒さに備えて毛が密生し、年間で最も丸々と「モフモフ」した愛らしい冬毛姿を見られるベストシーズン。間近で観察できる専用歩道や抱っこ体験（実施期間・時間限定）など、世界中の旅行者が訪れる宮城屈指の冬観光名所となっている。"
    },
    {
        "theme": "oita_hita_onsen_mamedamachi",
        "query": "豆田町",
        "alt_queries": ["日田市", "日田温泉", "三隈川"],
        "label": "天領の栄華を今に伝える小京都・豆田町（国の重要伝統的建造物群保存地区・白壁土蔵と初冬の川霧）",
        "description": "大分県日田市北部に位置し、江戸幕府の西国筋郡代が置かれた直轄地（天領）として九州の政治・経済・文化の中心として栄えた歴史地区。国の重要伝統的建造物群保存地区に選定されており、御幸通りと上町通りを中心に江戸から明治・大正期に建てられた白壁土蔵や町家が軒を連ねる。11月〜12月の初冬には三隈川の水蒸気が冷え込んで幻想的な「川霧」が立ち込め、老舗の醤油蔵や造り酒屋、日田杉の下駄工房を巡る情緒ある散策が愉しめる。名物の日田焼きそばや鰻料理を味わえる茶屋も充実。"
    },
    {
        "theme": "hyogo_tatsuno_murotsu_oyster",
        "query": "龍野",
        "alt_queries": ["たつの市", "播磨国", "室津"],
        "label": "播磨の小京都・龍野城下町（白壁土蔵と武家屋敷の町並み・室津港の極上牡蠣と新舞子海岸の夕日）",
        "description": "兵庫県たつの市にある脇坂家五万三千石の城下町。「播磨の小京都」と称され、龍野城跡の白亜の城壁や本丸御殿、江戸時代の風情を残す武家屋敷通り、白壁の土蔵が立ち並ぶ美しい町並みが国の重要伝統的建造物群保存地区に選定されている。童謡『赤とんぼ』の作詞者・三木露風の生誕地としても知られ、醤油醸造の歴史を伝える古い蔵が情緒を深める。車でわずか20分ほどの播磨灘沿岸には、11月中旬に牡蠣漁が解禁される名港「室津」や、干潟が夕焼けに黄金色に輝く「新舞子海岸」が広がる。"
    },
    {
        "theme": "yamagata_onogawa_onsen_bihada",
        "query": "小野川温泉",
        "alt_queries": ["米沢市", "上杉神社", "白布温泉"],
        "label": "小野小町ゆかりの美肌ラジウム泉・小野川温泉（開湯1200年の雪見名湯・名物小野川豆もやし）",
        "description": "山形県米沢市西部の大樽川沿いに湧く歴史ある温泉地。平安時代の女流歌人・小野小町が父を探して京都から東北へ旅する途中、病に倒れた際に薬師如来のお告げによって発見し湯治したと伝わる開湯1200年の古湯。毎分1000リットルを超える豊富な自噴泉は含硫黄-ナトリウム・カルシウム-塩化物泉で、美肌成分メタケイ酸や高濃度のラジウムを含有し「美人の湯」「温まりの湯」として親しまれている。冬には温泉熱を利用して育てるシャキシャキの「小野川豆もやし」が旬を迎え、雪深い米沢の冬情景とともに旅人を魅了する。"
    }
]

output_data = {}

for s in spots:
    q = s["query"]
    print(f"Fetching Wikipedia info for: {q}...")
    
    page_title = q
    img_url = ""
    extract = s["description"]

    queries_to_try = [q] + s.get("alt_queries", [])
    found_page = False

    for attempt_query in queries_to_try:
        if found_page:
            break
        try:
            search_url = f"https://ja.wikipedia.org/w/api.php?action=query&list=search&srsearch={requests.utils.quote(attempt_query)}&format=json&utf8=1"
            res = requests.get(search_url, headers=HEADERS, timeout=10).json()
            search_results = res.get("query", {}).get("search", [])
            if not search_results:
                continue

            for item in search_results[:3]:
                title = item["title"]
                info_url = f"https://ja.wikipedia.org/w/api.php?action=query&titles={requests.utils.quote(title)}&prop=pageimages|extracts&pithumbsize=1000&exintro=1&explaintext=1&format=json&utf8=1"
                info_res = requests.get(info_url, headers=HEADERS, timeout=10).json()
                pages = info_res.get("query", {}).get("pages", {})
                for pid, pdata in pages.items():
                    if pid == "-1":
                        continue
                    if "thumbnail" in pdata:
                        img_url = pdata["thumbnail"]["source"]
                        page_title = title
                        wiki_extract = pdata.get("extract", "")
                        if wiki_extract and len(wiki_extract.strip()) > 50:
                            extract = wiki_extract.strip()[:600] + "..."
                        found_page = True
                        print(f"  ✓ Found with image: {title} -> {img_url}")
                        break
                if found_page:
                    break
        except Exception as e:
            print(f"  ✗ Error on {attempt_query}: {e}")

    # 画像が見つからなかった場合のフォールバック（Wikimedia Commons等の安心高品質URL）
    if not img_url:
        print(f"  ⚠ No thumbnail found for {q}, using high quality Wikimedia Commons fallback image.")
        fallback_map = {
            "飯坂温泉": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Sabakoyu_Iizaka_Onsen.jpg/800px-Sabakoyu_Iizaka_Onsen.jpg",
            "宮城蔵王キツネ村": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Fox_at_Zao_Fox_Village.jpg/800px-Fox_at_Zao_Fox_Village.jpg",
            "豆田町": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Mamedamachi_Hita_Oita_pref01n.jpg/800px-Mamedamachi_Hita_Oita_pref01n.jpg",
            "龍野": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Tatsuno_Castle_Honmaru_Goten.jpg/800px-Tatsuno_Castle_Honmaru_Goten.jpg",
            "小野川温泉": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Onogawa_Onsen_Yonezawa.jpg/800px-Onogawa_Onsen_Yonezawa.jpg"
        }
        img_url = fallback_map.get(q, "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Sabakoyu_Iizaka_Onsen.jpg/800px-Sabakoyu_Iizaka_Onsen.jpg")

    output_data[s["theme"]] = {
        "query": q,
        "page_title": page_title,
        "label": s["label"],
        "image_url": img_url,
        "description": s["description"],
        "extract": extract
    }

out_file = os.path.join(os.path.dirname(__file__), "round144_wikipedia_spots.json")
with open(out_file, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print(f"\nSuccessfully wrote Wikipedia spot data to {out_file}!")
