import json
import os
import requests

HEADERS = {
    "User-Agent": "TravelGuideApp/1.0 (https://croud-travel.pages.dev; contact@travel.app)"
}

spots = [
    {
        "theme": "kagawa_higashikagawa_hiketa",
        "query": "白鳥神社 (東かがわ市)",
        "alt_queries": ["白鳥神社", "引田 (東かがわ市)", "安戸池"],
        "label": "讃岐国・白鳥神社（日本武尊白鳥伝説と新春開運厄除け初詣）",
        "description": "香川県東かがわ市松原に鎮座する古社で、日本武尊（やまとたけるのみこと）が戦陣の果てに白鳥となってこの地に舞い降りたという白鳥伝説を伝える。源義経が屋島の戦いの戦勝祈願に弓を奉納したと伝わるなど武将の信仰も篤く、厄除け・開運・必勝祈願の霊場として名高い。境内には日本一低い山とされる「御山（標高3.6m）」があり、新春初詣には讃岐・阿波から多くの参拝客が訪れる。近隣の引田は江戸時代の風待ち港・醤油醸造で栄えた重厚な町並みと日本初のハマチ養殖地・安戸池を擁する。"
    },
    {
        "theme": "fukui_obama_myotsuji",
        "query": "明通寺",
        "alt_queries": ["小浜市", "若狭国"],
        "label": "国宝・明通寺（坂上田村麻呂開創・深山に佇む本堂と三重塔の冬雪景）",
        "description": "福井県小浜市門前にある真言宗御室派の寺院。大同元年（806年）、征夷大将軍・坂上田村麻呂が棡木（ゆずりき）の霊木から薬師如来を刻んで開創したと伝わる古刹。鎌倉時代中期の端正な建築美を今に伝える本堂と三重塔はともに国宝に指定されており、堂内には木造薬師如来坐像、降三世明王立像、深沙大将立像など重要文化財の平安古仏が安置される。冬の雪をまとった杉木立の中に佇む檜皮葺の堂宇は息を呑む静寂と神秘的な美しさを放つ。"
    },
    {
        "theme": "aichi_okazaki_castle_iga",
        "query": "伊賀八幡宮",
        "alt_queries": ["岡崎城", "岡崎市"],
        "label": "国指定重要文化財・伊賀八幡宮（徳川将軍家祈願所・家康公武運長久の聖地新春初詣）",
        "description": "愛知県岡崎市伊賀町に鎮座する神社。文明2年（1470年）、松平家4代・松平親忠が松平家（徳川家）の氏神・守護神として創建した。徳川家康公も大きな合戦の出陣に際して必ず戦勝祈願に参拝したと伝わり、江戸幕府3代将軍・徳川家光によって造営された本殿・幣殿・拝殿・随身門・鳥居などが国の重要文化財に指定されている。朱塗りの極彩色が冬の澄み渡る寒空に鮮やかに映え、新春初詣には武運開運・出世祈願を願う多くの人々で賑わう。"
    },
    {
        "theme": "gifu_ena_iwamura_castle",
        "query": "岩村城",
        "alt_queries": ["岩村町", "恵那市"],
        "label": "日本三大山城・岩村城跡（標高717m・六段壁の石垣美と霧氷の城跡）",
        "description": "岐阜県恵那市岩村町にある山城跡（国の史跡）。大和高取城・備中松山城と並び日本三大山城のひとつに数えられ、城郭としては本州で最も標高の高い海抜717mの峰に築かれた。織田信長の叔母であり、武田信玄の武将・秋山虎繁に嫁いだ「おつやの方（女城主）」の悲話の舞台としても知られる。幾重にも重なる六段壁をはじめとする壮大な石垣群は圧巻で、冬には霧氷や白雪をまとった石垣が勇壮な山城の歴史を物語る。麓の城下町は国の重要伝統的建造物群保存地区。"
    },
    {
        "theme": "shimane_hamada_tatamigaura_asahi",
        "query": "石見畳ヶ浦",
        "alt_queries": ["畳ヶ浦", "浜田市"],
        "label": "国指定天然記念物・石見畳ヶ浦（隆起海床の千畳敷・冬の日本海白波奇勝）",
        "description": "島根県浜田市国分町に位置する海岸段丘および隆起海食崖（国の天然記念物）。明治5年（1872年）の浜田地震の地殻変動によって海底が隆起して海上に現れた約5ヘクタールに及ぶ広大な波食棚で、「千畳敷」とも呼ばれる。1600万年前の貝の化石やクジラの骨の化石、腰掛けのような形状のノジュール（団塊）が無数に点在する地質学の宝庫。冬の日本海の荒波が打ち寄せ、白波と奇岩が織りなすダイナミックな景観は冬ならではの迫力に満ちている。"
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
                if any(ext in u.lower() for ext in ['.jpg', '.jpeg', '.png']) and 'logo' not in u.lower() and 'icon' not in u.lower() and 'flag' not in u.lower():
                    img_url = u
                    print(f"  Found fallback image: {img_url}")
                    break
        except Exception as e:
            print(f"  Fallback error: {e}")

    # 4. サブクエリからの画像取得
    if not img_url and s.get("alt_queries"):
        for alt_q in s["alt_queries"]:
            print(f"  Trying alt query for image: {alt_q}...")
            alt_p_url = f"https://ja.wikipedia.org/w/api.php?action=query&titles={requests.utils.quote(alt_q)}&prop=pageimages&pithumbsize=1280&format=json"
            try:
                alt_res = requests.get(alt_p_url, headers=HEADERS, timeout=8).json()
                for _, ap in alt_res.get('query', {}).get('pages', {}).items():
                    a_thumb = ap.get('thumbnail')
                    if a_thumb:
                        img_url = a_thumb.get('source', '')
                        print(f"  Found alt thumbnail: {img_url}")
                        break
            except Exception as e:
                pass
            if img_url:
                break

    output_data[s["theme"]] = {
        "title": page_title,
        "label": s["label"],
        "imageUrl": img_url,
        "description": extract,
        "wikiUrl": f"https://ja.wikipedia.org/wiki/{requests.utils.quote(page_title)}"
    }
    print(f"  Final Image URL: {img_url}\n")

out_file = "scripts/round140/round140_wikipedia_spots.json"
with open(out_file, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print(f"✓ Wikipedia spots successfully saved to {out_file}")
