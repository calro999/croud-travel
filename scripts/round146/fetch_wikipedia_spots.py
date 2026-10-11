import json
import os
import requests

HEADERS = {
    "User-Agent": "TravelGuideApp/1.0 (https://croud-travel.pages.dev; contact@travel.app)"
}

spots = [
    {
        "theme": "hokkaido_shikotsuko_luxury",
        "query": "支笏湖",
        "alt_queries": ["千歳市", "恵庭岳", "樽前山"],
        "label": "日本屈指の透明度を誇るカルデラ湖・支笏湖（日本最北の不凍湖・支笏湖ブルーと恵庭岳の冬景色）",
        "description": "北海道千歳市西部にある淡水湖で、支笏洞爺国立公園に属するカルデラ湖。最大水深363m、平均水深265mは秋田県の田沢湖に次ぐ日本第2位の深さを誇り、日本最北の不凍湖として知られます。水質は環境省の湖沼水質調査で幾度も日本一に輝き、極めて高い透明度から「支笏湖ブルー」と称賛される神秘的な美しさを湛えます。初冬の11月から12月にかけては、雪化粧を始めた霊峰・恵庭岳や風不死岳が湖面に鏡のように映り込み、息を呑むような静寂のパノラマが広がります。湖畔には名湯・支笏湖温泉が湧き、上質な美肌の湯を愉しめます。"
    },
    {
        "theme": "tochigi_nikko_chuzenji_lake_luxury",
        "query": "中禅寺湖",
        "alt_queries": ["男体山", "日光国立公園", "華厳滝"],
        "label": "標高1269mの天空の湖・中禅寺湖（日光国立公園のシンボル・男体山の初雪と湖畔の静寂）",
        "description": "栃木県日光市の日光国立公園内にある湖。約2万年前に男体山が噴火して大谷川を堰き止めて形成された堰止湖で、人造湖を除く日本の天然湖沼としては日本で最も標高の高い場所（海抜1269m）に位置します。明治から昭和初期にかけては各国の大使館別荘が建てられ、国際的な避暑地・リゾート地として発展した優雅な歴史を持ちます。11月から12月の初冬には男体山の頂が冠雪し、澄み切った紺碧の湖水と雪山のコントラストが息を呑むほど美しく輝きます。湖畔には名門リゾートホテルが建ち並び、奥日光の大自然を望む極上の滞在が叶います。"
    },
    {
        "theme": "shizuoka_atami_izusan_luxury",
        "query": "伊豆山神社",
        "alt_queries": ["熱海市", "伊豆山温泉", "走り湯"],
        "label": "源頼朝と北条政子ゆかりの古社・伊豆山神社（相模湾を見下ろす高台のパワースポットと熱海絶景）",
        "description": "静岡県熱海市伊豆山の上野地にある古社。古くは「伊豆山権現」と称され、修験道の霊場として全国にその名を知られた名社です。平治の乱で伊豆に配流された源頼朝が源氏再興を祈願し、北条政子と愛を育んだ舞台としても名高く、強運守護や縁結びの神として篤い崇敬を集めます。本殿は相模湾を見下ろす高台に鎮座し、参道の階段からは初冬の澄んだコバルトブルーの海と初島、大島を一望できます。山麓の海岸には日本三大古泉の一つ「走り湯」が湧き、熱海随一の高級隠れ宿が集まるエリアとなっています。"
    },
    {
        "theme": "kyoto_arashiyama_luxury",
        "query": "渡月橋",
        "alt_queries": ["嵐山", "桂川 (淀川水系)", "嵯峨野"],
        "label": "嵐山の象徴・渡月橋（桂川に架かる木肌の風情・初冬の静寂と小倉山の冬景色）",
        "description": "京都府京都市の桂川（大堰川）に架かる橋。承和年間（834-848年）に僧・道昌によって架橋されたのが始まりとされ、亀山上皇が「くまなき月の渡るに似る」と詠んだことから「渡月橋」と名付けられました。現在の橋は1934年に完成した鉄筋コンクリート製ですが、欄干には伝統的なヒノキ材が使われており、嵐山の美しい自然景観と見事に調和しています。秋の紅葉シーズンが終わり12月を迎えると、観光の喧騒が引き、静まり返った水面と凛とした冬空に映える渡月橋本来の優美な佇まいを心静かに堪能できます。"
    },
    {
        "theme": "ishikawa_kaga_yamashiro_luxury",
        "query": "山代温泉",
        "alt_queries": ["加賀市", "山中温泉", "北大路魯山人"],
        "label": "開湯1300年の歴史を誇る名湯・山代温泉（薬王院温泉寺・古総湯の瓦屋根と北大路魯山人の美意識）",
        "description": "石川県加賀市にある加賀温泉郷の中心的な温泉地。神亀2年（725年）に行基が霊峰白山へ向かう途中に、傷を癒やす烏（ヤタガラス）を見て発見したと伝わる名湯。温泉街の中心には明治時代の総湯を忠実に復元したステンドグラスと九谷焼タイルの共同浴場「古総湯」が建ち、歴史的な「湯の曲輪（ゆのがわ）」の町並みが広がります。大正時代には美食家・北大路魯山人が逗留して九谷焼の作陶や看板彫刻に打ち込み、独自の美意識を開花させた地としても名高く、数寄屋造りの名門料亭旅館が建ち並びます。"
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

    output_data[s["theme"]] = {
        "query": q,
        "page_title": page_title,
        "label": s["label"],
        "image_url": img_url,
        "description": s["description"],
        "extract": extract
    }

out_file = os.path.join(os.path.dirname(__file__), "round146_wikipedia_spots.json")
with open(out_file, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print(f"\nSuccessfully wrote Wikipedia spot data to {out_file}!")
