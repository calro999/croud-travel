import json
import os
import requests

HEADERS = {
    "User-Agent": "TravelGuideApp/1.0 (https://croud-travel.pages.dev; contact@travel.app)"
}

spots = [
    {
        "theme": "okinawa_nanjo_sefa_utaki",
        "query": "斎場御嶽",
        "alt_queries": ["知念岬", "南城市", "久高島"],
        "label": "世界遺産・斎場御嶽（琉球王国最高の聖地・新春開運祈願と知念岬初日の出）",
        "description": "沖縄県南城市知念にある琉球王国最高の聖地（国の史跡、ユネスコ世界文化遺産『琉球王国のグスク及び関連遺産群』）。琉球開闢神話の女神・アマミキヨが創ったとされる聖域で、最高神女「聞得大君（きこえおおきみ）」の就任儀礼「御新下り（おあらうり）」が行われた国家的な祈りの場。巨大な二つの鍾乳石が寄り添う「三庫理（さんぐーい）」の三角岩の奥からは神の島「久高島」を遥拝できる。冬でも温暖な南城の風が吹き抜け、新春には新たな一年の平穏と開運を祈る旅人が訪れる。近隣の知念岬からは太平洋の大パノラマと初日の出の絶景が広がる。"
    },
    {
        "theme": "miyazaki_nichinan_obi_castle",
        "query": "飫肥",
        "alt_queries": ["飫肥城", "鵜戸神宮", "日南市"],
        "label": "日州の小京都・飫肥城下町（重要伝統的建造物群保存地区・飫肥杉と武家屋敷）",
        "description": "宮崎県日南市にある伊東氏飫肥藩5万1千石の城下町。九州で初めて国の重要伝統的建造物群保存地区に選定された歴史情緒豊かな町並み。江戸時代から続く飫肥杉で築かれた飫肥城大手門や松尾の丸、玉石垣と白壁、武家屋敷通りが今も美しい姿をとどめる。名物の「飫肥天」や甘い「厚焼卵」を食べ歩きながらの散策が心地よい。近隣の日南海岸には奇岩の海食洞に朱塗りの本殿が鎮まる「鵜戸神宮」があり、新春初詣には運玉を投げて開運を願う参拝客で賑わう。"
    },
    {
        "theme": "kochi_aki_noradokei_muroto",
        "query": "野良時計",
        "alt_queries": ["安芸市", "室戸岬", "土居廓中"],
        "label": "土佐の小京都・野良時計と土居廓中武家屋敷（手作り大時計の響きと室戸岬だるま朝日）",
        "description": "高知県安芸市土居にある歴史的建造物（国の登録有形文化財）。明治20年（1887年）頃、地元の地主であった畠中源馬氏がアメリカ製の掛時計を独学で分解・研究し、歯車から分銅まですべて手作りで製作した櫓時計。田園地帯に時を告げ、農作業に励む人々に親しまれてきた。周辺には江戸時代の土佐藩郷士の屋敷が残る「土居廓中（国の重要伝統的建造物群保存地区）」があり、玉石垣とウバメガシの生垣が続く。冬の室戸岬では海面と大気温度の寒暖差から生まれる奇跡の冬絶景「だるま朝日」が見られる。"
    },
    {
        "theme": "ehime_niihama_besshi_ishizuchi",
        "query": "別子銅山",
        "alt_queries": ["東平", "新居浜市", "石鎚神社"],
        "label": "東洋のマチュピチュ・別子銅山東平遺構（標高750mの産業遺産と霊峰石鎚山新春初詣）",
        "description": "愛媛県新居浜市の赤石山系に位置する日本屈指の銅山跡。元禄3年（1690年）の発見以来、住友グループの礎として約280年間にわたり日本の近代化を支えた。標高約750mの山中に残る「東平（とうなる）ゾーン」には、巨大な赤レンガ造りの貯鉱庫や索道停車場跡の石積み遺構が威容を誇り、『東洋のマチュピチュ』と称される。冬には澄んだ空気の中に霧氷や雪をまとった産業遺構が佇み、神秘的な景観を醸し出す。麓の西条市には日本名水百選「うちぬき」が湧き、霊峰石鎚山を仰ぐ石鎚神社が新春開運初詣で賑わう。"
    },
    {
        "theme": "nara_sakurai_oomiwa_shrine",
        "query": "大神神社",
        "alt_queries": ["三輪山", "山の辺の道", "桜井市"],
        "label": "大和国一之宮・大神神社（日本最古の神社・三輪山信仰と新春開運初詣）",
        "description": "奈良県桜井市三輪に鎮座する神社（大和国一之宮）。本殿を持たず、背後の神体山「三輪山」を直接拝するという原初の神道信仰の姿を今に伝える日本最古の神社のひとつ。祭神は大物主大神（おおものぬしのおおかみ）で、農業・商業・酒造・医薬・方除けなど万全の神徳から全国の崇敬を集める。拝殿奥の重要文化財「三ツ鳥居」や酒造の祖神としての杉玉が有名。冬の澄んだ静寂に包まれる日本最古の道「山の辺の道」の起点であり、門前町では冬の寒造りで知られる本場「三輪そうめん（にゅうめん）」が温もりを届ける。"
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

out_file = "scripts/round141/round141_wikipedia_spots.json"
with open(out_file, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print(f"✓ Wikipedia spots successfully saved to {out_file}")
