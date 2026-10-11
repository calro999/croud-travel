import json
import os
import requests

HEADERS = {
    "User-Agent": "TravelGuideApp/1.0 (https://croud-travel.pages.dev; contact@travel.app)"
}

spots = [
    {
        "theme": "shizuoka_izu_shuzenji_luxury",
        "query": "修善寺温泉",
        "alt_queries": ["竹林の小径 (伊豆市)", "修禅寺", "伊豆市"],
        "label": "桂川のせせらぎと幽玄な青竹が続く小径・修善寺温泉（伊豆の小京都・弘法大師開湯の古湯）",
        "description": "静岡県伊豆市北部、修善寺川（通称・桂川）沿いに広がる伊豆半島最古の温泉街。平安時代の大同2年（807年）に弘法大師空海が湧出させた『独鈷の湯（とっこのゆ）』が開湯伝説とされ、夏目漱石や芥川龍之介、川端康成ら名だたる文豪が愛逗留した『伊豆の小京都』です。川沿いには青々とした竹林が天へと伸びる『竹林の小径』や朱塗りの渡月橋・桂橋が架かり、初冬の澄んだ空気の中で風情ある散策が愉しめます。温泉は無色透明でさらりとした肌触りの弱アルカリ性単純温泉。冬には天城山麓の猪肉を使った牡丹鍋や天城軍鶏、伊豆近海で獲れる伊勢海老や金目鯛が旬を迎えます。"
    },
    {
        "theme": "hokkaido_niseko_luxury_resort",
        "query": "羊蹄山",
        "alt_queries": ["ニセコアンヌプリ", "倶知安町", "ニセコ町"],
        "label": "冬の青空に聳え立つ白銀の蝦夷富士・羊蹄山（世界が羨望するJAPOWとニセコのパノラマ絶景）",
        "description": "北海道後志地方南部に位置する標高1,898mの成層火山で、日本百名山の一つ。富士山に酷似した端正な円錐形の山容から『蝦夷富士（えぞふじ）』と称えられ、ニセコエリアのあらゆる場所からその神々しい姿を望むことができます。冬のニセコはシベリアからの寒気と日本海の湿気がぶつかり合い、水分含有率わずか8％前後という世界最高峰の超極上ドライパウダースノー『JAPOW（ジャパウ）』が降り積もる国際的スノーリゾート。白銀に輝く羊蹄山を眺めながら入る雪見露天風呂や、北海道産黒毛和牛、新鮮な海の幸を味わう極上の冬リゾートステイが世界中の富裕層を魅了しています。"
    },
    {
        "theme": "hyogo_kinosaki_luxury_tsuiyama",
        "query": "城崎温泉",
        "alt_queries": ["豊岡市", "円山川", "津居山港"],
        "label": "大谿川の柳並木と太鼓橋が織りなす雪情緒・城崎温泉（志賀直哉ゆかりの文学と七田の外湯めぐり）",
        "description": "兵庫県豊岡市城崎町、日本海に近い大谿川（おおたにがわ）沿いに開けた1300年の歴史を誇る名湯。奈良時代の養老4年（720年）に道智上人の祈祷によって湧出したと伝えられ、志賀直哉の名作短編『城の崎にて』の舞台としても名高い文学の街です。川沿いの柳並木と風情ある太鼓橋、浴衣姿に下駄の音が響く温泉街には『一の湯』『御所の湯』など個性豊かな7つの外湯が点在。11月上旬の冬のズワイガニ漁解禁とともに、隣接する津居山港で日帰り水揚げされる最高級ブランド『青タグ津居山ガニ』を求めて全国から食通が集まります。"
    },
    {
        "theme": "tottori_misasa_kaike_luxury",
        "query": "三朝温泉",
        "alt_queries": ["皆生温泉", "三徳山", "三朝町"],
        "label": "世界屈指の高濃度ラドンを含む奇跡の治癒泉・三朝温泉（三朝川沿いの湯治場と三徳山三仏寺）",
        "description": "鳥取県東伯郡三朝町、三朝川の河畔に広がる開湯850年以上の歴史を誇る名湯。平安時代末期、源義朝の家臣・大久保左馬之祐が白狼を助けたことで妙見菩薩から温泉の場所を教わったという白狼伝説が残ります。世界有数の高濃度ラドンを含有する放射能泉で、『三たび朝を迎えると元気になる』と称される奇跡の湯治場。川沿いの共同浴場『株湯』や河原風呂をはじめ、古き良き木造旅館が情緒を醸し出します。初冬には鳥取県が誇る最高峰ブランド『五輝星』を含む鳥取松葉ガニや鳥取和牛オレイン55など贅沢な山陰の冬の味覚が揃います。"
    },
    {
        "theme": "fukushima_aizu_ashinomaki_higashiyama",
        "query": "東山温泉",
        "alt_queries": ["会津若松市", "芦ノ牧温泉", "鶴ヶ城"],
        "label": "湯川の渓流沿いに湧く会津藩の奥座敷・東山温泉（竹久夢二や与謝野晶子も愛した歴史の湯）",
        "description": "福島県会津若松市中心部から南東へ車でわずか10分、湯川の深い渓谷沿いに広がる開湯約1300年の名湯。天平年間に行基によって発見されたと伝えられ、江戸時代には会津藩の湯治場として歴代藩主や新選組副長・土方歳三、竹久夢二、与謝野晶子ら多くの歴史人が訪れました。冬には深い渓谷に深々と雪が降り積もり、中庭の雪景色に無数のろうそくが灯る幻想的な『雪見ろうそく』など冬ならではの幽玄な美が広がります。近隣の芦ノ牧温泉の大川渓谷絶景とともに、極上の会津馬刺しや福島牛、雪国仕込みの名酒が旅の夜を豊かに彩ります。"
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
        print(f"  Attempting query: {attempt_query}...")
        api_url = f"https://ja.wikipedia.org/api/rest_v1/page/summary/{requests.utils.quote(attempt_query)}"
        try:
            res = requests.get(api_url, headers=HEADERS, timeout=10)
            if res.status_code == 200:
                data = res.json()
                page_title = data.get("title", attempt_query)
                if data.get("thumbnail") and data["thumbnail"].get("source"):
                    raw_img = data["thumbnail"]["source"]
                    if "/thumb/" in raw_img:
                        parts = raw_img.split("/thumb/")
                        img_path = parts[1].rsplit("/", 1)[0]
                        img_url = f"https://thumb.wikimedia.org/wikipedia/commons/thumb/{img_path}/1280px-{img_path.split('/')[-1]}?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                    else:
                        img_url = raw_img
                    print(f"    ✓ Found image: {img_url}")
                if data.get("extract"):
                    extract = data["extract"]
                    print(f"    ✓ Found extract: {len(extract)} chars")
                found_page = True
            else:
                print(f"    Summary API returned status {res.status_code} for {attempt_query}")
        except Exception as e:
            print(f"    Error requesting {attempt_query}: {e}")

    output_data[s["theme"]] = {
        "title": page_title,
        "query": q,
        "label": s["label"],
        "imageUrl": img_url,
        "extract": extract,
        "detailHistory": s["description"]
    }

out_file = os.path.join(os.path.dirname(__file__), "round148_wikipedia_spots.json")
with open(out_file, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print(f"\nWikipedia data successfully saved to: {out_file}")
