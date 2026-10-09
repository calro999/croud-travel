import json
import os
import requests

HEADERS = {
    "User-Agent": "TravelGuideApp/1.0 (https://croud-travel.pages.dev; contact@travel.app)"
}

spots = [
    {
        "theme": "kagoshima_chiran_makurazaki",
        "query": "知覧武家屋敷通り",
        "alt_queries": ["知覧武家屋敷", "知覧町", "南九州市", "開聞岳", "枕崎市"],
        "label": "薩摩の小京都・知覧武家屋敷庭園（国の名勝・生垣と枯山水美・開聞岳パノラマ）",
        "description": "鹿児島県南九州市知覧町にある武家屋敷群および7つの庭園（国の名勝・重要伝統的建造物群保存地区）。薩摩藩独特の外城（とじょう）制度のもとで作られた麓（ふもと）集落で、約700mにわたって続く玉石垣と美しく刈り込まれたイヌマキの生垣、武家門が整然と並ぶ。母ヶ岳を借景にした枯山水庭園など7庭園が一般公開され、冬の澄んだ空気の中で凜とした歴史風情を漂わせる。近隣からは「薩摩富士」と称される優美な円錐形の開聞岳を望み、南端の枕崎港では冬の鰹節づくりや一本釣り鰹の藁焼きが旅人を迎える。"
    },
    {
        "theme": "saitama_gyoda_oshi_castle",
        "query": "忍城",
        "alt_queries": ["行田市", "さきたま古墳群", "行田足袋"],
        "label": "武蔵国屈指の名城・忍城（のぼうの城の舞台・御三階櫓の雪景色と足袋蔵の街並み）",
        "description": "埼玉県行田市本丸にある城郭（成田氏の居城、埼玉県指定旧跡）。室町時代に成田親泰により築城されたと伝わり、周囲を沼地と水路に囲まれた堅固な縄張りから「浮き城」「亀城」と称された。豊臣秀吉の小田原征伐では石田三成の水攻めに耐え抜いた不落の名城として名高い（映画・小説『のぼうの城』の舞台）。現在の御三階櫓は美しく再建され、冬の青空に白壁が映える。行田市内には日本遺産に認定された足袋蔵や登録有形文化財が点在し、古代東国武人のロマンを伝える「さきたま古墳群」が広がる。"
    },
    {
        "theme": "ibaraki_sakuragawa_makabe",
        "query": "真壁町",
        "alt_queries": ["真壁城", "筑波山神社", "筑波山"],
        "label": "常陸国の蔵の街・真壁の町並み（重要伝統的建造物群保存地区・潮田家見世蔵と筑波山神社初詣）",
        "description": "茨城県桜川市真壁町にある歴史的町並み（国の重要伝統的建造物群保存地区）。戦国時代の真壁氏の城下町を起源とし、江戸時代から明治・大正期にかけて製綿や常陸秋そば・酒造、石材業で繁栄した商人の町。黒漆喰の見世蔵、土蔵、出桁造りの町家など100棟を超える登録有形文化財が今も現役の生活空間として息づく。冬には雪化粧をまとった蔵造りの風情が際立ち、早春には雛飾りが街を彩る。南に仰ぐ霊峰筑波山の山腹には関東屈指の古社「筑波山神社」が鎮座し、新春開運初詣で賑わう。"
    },
    {
        "theme": "yamanashi_otsuki_saruhashi",
        "query": "猿橋",
        "alt_queries": ["大月市", "岩殿山", "桂川 (山梨県)"],
        "label": "日本三奇橋・名勝猿橋（桂川の深い渓谷美と浮世絵の情景・秀麗富嶽富士パノラマ）",
        "description": "山梨県大月市猿橋町にある桂川に架かる歴史的木橋（国の名勝・日本三奇橋の一つ）。橋脚を水中に立てず、両岸の断崖絶壁から張り出した四層の刎木（はねぎ）によって橋桁を支える極めて特殊な架橋構造を持つ。歌川広重の『甲陽猿橋之図』など多くの文人墨客を魅了した景勝地。深い緑の淵と岩肌が冬の雪景色に彩られる渓谷美は格別。大月市内には富士山を望む絶景ポイント「秀麗富嶽十二景」の岩殿山があり、冬の澄んだ大気のもとで白銀に輝く富士山の大パノラマを楽しめる。"
    },
    {
        "theme": "saga_kashima_hizenhamashuku",
        "query": "肥前浜宿",
        "alt_queries": ["鹿島市 (佐賀県)", "祐徳稲荷神社", "有明海"],
        "label": "肥前浜宿酒蔵通り（重要伝統的建造物群保存地区・白壁土蔵の冬新酒情緒と祐徳稲荷新春初詣）",
        "description": "佐賀県鹿島市浜町にある歴史的町並み（国の重要伝統的建造物群保存地区）。有明海に注ぐ浜川河口の宿場町・港町として栄え、江戸時代から豊かな名水と良質な米を活かした酒造業が盛んに行われた。「酒蔵通り」には白壁土蔵造りの巨大な酒蔵や茅葺き町家が連なり、冬はまさに寒造りの新酒仕込み真っ只中。芳醇な日本酒の香りが漂う。近隣には日本三大稲荷のひとつ「祐徳稲荷神社」が壮麗な朱塗りの懸造り本殿を構え、新春には年間300万人の参拝客で賑わう九州屈指の開運聖地である。"
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

out_file = "scripts/round142/round142_wikipedia_spots.json"
with open(out_file, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print(f"✓ Wikipedia spots successfully saved to {out_file}")
