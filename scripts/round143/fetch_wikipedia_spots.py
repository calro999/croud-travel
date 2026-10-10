import json
import os
import requests

HEADERS = {
    "User-Agent": "TravelGuideApp/1.0 (https://croud-travel.pages.dev; contact@travel.app)"
}

spots = [
    {
        "theme": "akita_oga_namahage",
        "query": "真山神社",
        "alt_queries": ["男鹿温泉郷", "なまはげ館", "男鹿市", "入道崎"],
        "label": "なまはげ発祥の古刹・真山神社（国の重要無形文化財ナマハゲ伝承の地・柴灯祭と新春開運初詣）",
        "description": "秋田県男鹿市北浦真山にある平安時代創建の古社。男鹿半島の最高峰・本山と真山をご神体とし、慈覚大師円仁が開山した赤神山日拝寺を起源とする霊場。古くから修験道の聖地として尊崇を集め、大晦日の晩に各家を訪れる民俗行事「男鹿のナマハゲ」（ユネスコ無形文化遺産・国重要無形民俗文化財）の神事「柴灯祭（せどまつり）」が執り行われる舞台でもある。冬の深い杉木立に雪が降り積もる境内は厳かな静寂に包まれ、新春の開運厄除け初詣スポットとして多くの参拝客が訪れる。近隣には男鹿温泉郷の茶褐色の名湯が湧く。"
    },
    {
        "theme": "iwate_hanamaki_kenji",
        "query": "宮沢賢治童話村",
        "alt_queries": ["宮沢賢治記念館", "花巻温泉", "花巻市", "大沢温泉 (岩手県)"],
        "label": "イーハトーブの幻想空間・宮沢賢治童話村（銀河鉄道の夜の星空美と賢治の学校・白銀のファンタジー）",
        "description": "岩手県花巻市高松にある宮沢賢治の童話の世界を五感で体感できるテーマ施設。『銀河鉄道の夜』『注文の多い料理店』など賢治が描き出した心象世界「イーハトーブ」を具現化した空間で、「賢治の学校」ではファンタジックホール、宇宙、天空、大地、水の5つのゾーンで神秘的な賢治文学を追体験できる。冬には白銀の雪景色の中に幻想的なライトアップやオブジェが浮かび上がり、まるで童話の世界に迷い込んだかのような体験が広がる。近隣には開湯数百年を誇る花巻温泉郷の雪見露天風呂が点在する。"
    },
    {
        "theme": "tochigi_shiobara_onsen",
        "query": "塩原温泉郷",
        "alt_queries": ["箒川", "もみじ谷大吊橋", "塩原八幡宮", "那須塩原市"],
        "label": "開湯1200年の歴史・塩原温泉郷（箒川の渓谷美と十一湯の多彩な泉質・塩原八幡宮新春初詣）",
        "description": "栃木県那須塩原市を流れる箒川の渓谷沿いに広がる名湯群。大同元年（806年）の発見と伝わる開湯1200年以上の歴史を誇り、大網・福渡・塩釜・畑下・門前・古町・中塩原・上塩原・新湯・元湯など泉質や効能が異なる「塩原十一湯」が点在する。冬には箒川の奇岩や滝が雪化粧をまとい、乳白色のにごり湯や源泉かけ流しの湯小屋で雪見風呂を愉しめる。平安時代創建の古社「塩原八幡宮」には国の天然記念物「逆杉（さかさすぎ）」がそびえ、新春の開運厄除けの初詣スポットとして親しまれている。"
    },
    {
        "theme": "shizuoka_izu_shuzenji",
        "query": "修善寺温泉",
        "alt_queries": ["修禅寺", "伊豆市", "独鈷の湯"],
        "label": "伊豆の小京都・修善寺温泉（桂川沿いの竹林の小径・弘法大師開基の古刹修禅寺新春開運初詣）",
        "description": "静岡県伊豆市北部にある伊豆半島最古の温泉地。大同2年（807年）に弘法大師空海が桂川で病父を洗う少年に心打たれ、独鈷杵で川の岩を砕いて霊泉を湧出させたという「独鈷の湯」伝説に始まる。温泉街の中心には名刹「修禅寺」が鎮座し、鎌倉幕府の源氏一族にまつわる悲運の歴史を今に伝える。桂川に沿って朱塗りの橋が架かり、凛とした冬の静寂が広がる「竹林の小径」や登録有形文化財の木造建築群が立ち並ぶ。冬の澄んだ大気のもとで新春初詣と名湯巡りが愉しめる。"
    },
    {
        "theme": "wakayama_nanki_katsuura",
        "query": "那智滝",
        "alt_queries": ["熊野那智大社", "青岸渡寺", "南紀勝浦温泉", "那智勝浦町"],
        "label": "世界遺産・那智の滝と熊野那智大社（落差日本一の名瀑・熊野信仰の根源と新春開運初詣）",
        "description": "和歌山県東牟婁郡那智勝浦町にある落差133メートル、滝壺の水深10メートルを誇る名瀑（国の名勝・世界遺産『紀伊山地の霊場と参詣道』）。栃木県の華厳滝、茨城県の袋田の滝とともに日本三名瀑の一つに数えられ、一段の滝としては落差日本一を誇る。古来より滝そのものが「飛滝権現」として崇められ、熊野那智大社の別宮「飛瀧神社」の御神体となっている。冬の澄み渡る空気の中に轟く滝の音と清冽な水しぶきは神聖そのもの。隣接する熊野那智大社や青岸渡寺には新春開運を願う初詣客が全国から集まる。"
    }
]

output_data = {}

for s in spots:
    q = s["query"]
    print(f"Fetching Wikipedia info for: {q}...")
    
    page_title = q
    img_url = ""
    extract = s["description"]

    # 1. 検索
    queries_to_try = [q] + s.get("alt_queries", [])
    found_page = False

    for test_q in queries_to_try:
        s_url = f"https://ja.wikipedia.org/w/api.php?action=query&list=search&srsearch={requests.utils.quote(test_q)}&srlimit=3&format=json"
        try:
            s_res = requests.get(s_url, headers=HEADERS, timeout=8).json()
            search_items = s_res.get('query', {}).get('search', [])
            if search_items:
                page_title = search_items[0]['title']
                found_page = True
                print(f"  Found page title: {page_title} (from {test_q})")
                break
        except Exception as e:
            print(f"  Search error for {test_q}: {e}")

    # 2. ページ情報とサムネイル
    p_url = f"https://ja.wikipedia.org/w/api.php?action=query&titles={requests.utils.quote(page_title)}&prop=pageimages|extracts&exintro=true&explaintext=true&pithumbsize=1280&format=json"
    try:
        p_res = requests.get(p_url, headers=HEADERS, timeout=8).json()
        pages = p_res.get('query', {}).get('pages', {})
        for pid, p in pages.items():
            thumb = p.get('thumbnail')
            if thumb:
                img_url = thumb.get('source', '')
                print(f"  Found thumbnail: {img_url}")
            ex = p.get('extract')
            if ex and len(ex) > 40:
                extract = ex.replace('\n', ' ').strip()
                if len(extract) > 280:
                    extract = extract[:270] + "…"
    except Exception as e:
        print(f"  Page info error: {e}")

    # 3. フォールバック画像取得
    if not img_url:
        print(f"  Fallback image search for {page_title}...")
        img_search_url = f"https://ja.wikipedia.org/w/api.php?action=query&titles={requests.utils.quote(page_title)}&generator=images&gimlimit=10&prop=imageinfo&iiprop=url|size|mime&format=json"
        try:
            img_res = requests.get(img_search_url, headers=HEADERS, timeout=8).json()
            for _, ip in img_res.get('query', {}).get('pages', {}).items():
                info = ip.get('imageinfo', [{}])[0]
                u = info.get('url', '')
                if any(ext in u.lower() for ext in ['.jpg', '.jpeg', '.png']) and 'icon' not in u.lower() and 'logo' not in u.lower() and 'map' not in u.lower():
                    img_url = u
                    print(f"  Found fallback image: {img_url}")
                    break
        except Exception as e:
            print(f"  Fallback image search error: {e}")

    output_data[s["theme"]] = {
        "theme": s["theme"],
        "spot_name": page_title,
        "label": s["label"],
        "image_url": img_url,
        "description": extract or s["description"]
    }

out_file = "scripts/round143/round143_wikipedia_spots.json"
with open(out_file, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print(f"\n✓ Saved Wikipedia spots data to {out_file}")
