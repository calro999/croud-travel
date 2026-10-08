import json
import os
import requests

HEADERS = {
    "User-Agent": "TravelGuideApp/1.0 (https://croud-travel.pages.dev; contact@travel.app)"
}

spots = [
    {
        "theme": "chiba_katori_sawara_inubosaki",
        "query": "香取神宮",
        "alt_queries": ["佐原の町並み", "香取市"],
        "label": "下総国一宮・香取神宮（全国400社ある香取神社の総本社・勝運厄除け新春初詣）",
        "description": "千葉県香取市香取に鎮座する、下総国一宮であり全国の香取神社の総本社。祭神の経津主大神（ふつぬしのおおかみ）は国家鎮護・勝運・武術・厄除けの神として崇敬され、鹿島神宮・息栖神社とともに「東国三社」の一角を占める。平安時代以前から「神宮」の称号を与えられていた名社で、現在の黒漆塗りの壮麗な本殿や楼門は江戸幕府5代将軍・徳川綱吉により造営された国の重要文化財。冬の新春初詣には年間約50万人の参拝客が訪れ、老杉が茂る静謐な参道が新春の清らかな空気に包まれる。"
    },
    {
        "theme": "okayama_tsuyama_mimasaka_santo",
        "query": "津山城",
        "alt_queries": ["鶴山公園", "津山市"],
        "label": "日本三大平山城・津山城（鶴山公園・豪壮な石垣群と冬の雪化粧の城下町）",
        "description": "岡山県津山市山下に位置する津山藩の平山城跡（国の史跡）。初代藩主・森忠政が慶長9年（1604年）から12年の歳月をかけて築城した。姫路城・松山城とともに日本三大平山城のひとつに数えられ、往時には五層の天守や77棟もの櫓が立ち並ぶ威容を誇った。地上約45mに及ぶ幾重にも重なる壮大な石垣美は圧巻で、冬にはうっすらと雪化粧をまとった石垣と復元された備中櫓が凛とした美しさを放つ。眼下には江戸の情緒が息づく城下町「城東・城西伝統的建造物群」が一望できる。"
    },
    {
        "theme": "shiga_taga_taisha_koto_omigyu",
        "query": "多賀大社",
        "alt_queries": ["多賀町", "犬上郡"],
        "label": "近江国第一の古社・多賀大社（命の親神・延命長寿と縁結びの新春初詣50万人）",
        "description": "滋賀県犬上郡多賀町多賀に鎮座する古社で、伊邪那岐命（いざなぎのみこと）と伊邪那美命（いざなみのみこと）の夫婦神を祀る。「お伊勢参らばお多賀へ参れ、お伊勢お多賀の子でござる」と俗謡に歌われ、伊勢神宮に祀られる天照大神の親神にあたることから、古くより生命の親神、延命長寿・縁結び・厄除けの霊験あらたかな神社として全国から篤い崇敬を集める。新春三が日の初詣には県内外から約50万人もの参拝客で賑わい、参道の門前町では名物の「糸切餅」が冬の風物詩となっている。"
    },
    {
        "theme": "tokushima_mima_udatsu_kirihataji",
        "query": "脇町南町",
        "alt_queries": ["うだつの町並み", "脇町"],
        "label": "国指定重要伝統的建造物群保存地区・脇町うだつの町並み（藍商人の繁栄美と冬情話）",
        "description": "徳島県美馬市脇町に位置する、国の重要伝統的建造物群保存地区（重伝建）。江戸時代から明治時代にかけて、吉野川の舟運を利用して阿波特産の藍（阿波藍）の集散地として栄華を極めた藍商人たちの豪壮な商家が約430mにわたって連なる。屋根の両端に設けられた防火壁「うだつ（卯建）」は富の象徴とされ、白壁と格子窓、重厚な本瓦葺きの家並みは凛とした冬の青空に美しく映える。近隣の四国八十八箇所第十番札所・切幡寺とともに、徳島西部の深い歴史文化を伝える。"
    },
    {
        "theme": "toyama_amaharashi_tateyama_kanburi",
        "query": "雨晴海岸",
        "alt_queries": ["女岩", "高岡市"],
        "label": "能登半島国定公園・雨晴海岸（富山湾越しに望む冠雪立山連峰・冬の世界的絶景）",
        "description": "富山県高岡市北部の富山湾沿いに広がる能登半島国定公園の景勝地。「日本の渚百選」や「白砂青松百選」に選ばれ、波打ち際にたたずむ「女岩（めいわ）」や義経岩が有名。冬の晴れた日には、標高3,000m級の北アルプス・立山連峰が海を隔てて純白の雪を冠してそびえ立つ奇跡的な大パノラマが広がる。海越しに3,000m級の冠雪山脈を望むことができる場所は世界でも極めて稀で、冬の早朝には海水温と大気の温度差から立ち上る「気あらし（海嵐）」とともに息を呑む幻想美を見せる。"
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
                if any(ext in u.lower() for ext in ['.jpg', '.jpeg', '.png']) and 'logo' not in u.lower() and 'icon' not in u.lower() and 'flag' not in u.lower():
                    img_url = u
                    break
        except Exception as e:
            print(f"  Image search error: {e}")

    output_data[s["theme"]] = {
        "spotLabel": s["label"],
        "query": q,
        "pageTitle": page_title,
        "imageUrl": img_url,
        "description": extract
    }
    print(f"  -> [{s['theme']}] {s['label']}: Image = {img_url[:60]}... | Text = {extract[:40]}...")

out_file = "scripts/round139/round139_wikipedia_spots.json"
with open(out_file, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print(f"\nSaved Wikipedia spot info to {out_file}")
