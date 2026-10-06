import re

samples = [
    (
        '【11・12月南伊豆＆下賀茂温泉】温暖な避寒リゾートと湯煙南国情緒・旬の伊勢海老姿造り＆脂が乗った地金目鯛姿煮・水仙まつりを巡る名宿5選',
        '11月から12月にかけて寒風が吹き始める本州において、黒潮が洗う伊豆半島最南端の「南伊豆・下賀茂温泉＆弓ヶ浜」は、初冬でも平均気温15℃前後というポカポカとした温暖な気候に恵まれた南国情緒漂う湯煙の別天地。温泉熱を利用した熱帯植物園や12月から咲き誇る爪木崎の水仙まつり、そして何より秋から解禁されたばかりの極上「活伊勢海老」と、冬に向けて脂が乗り切った「地金目鯛の姿煮」という二大味覚の饗宴が待っています。'
    ),
    (
        '【11・12・1月箱根】冬の箱根湯本＆芦ノ湖・箱根神社新春初詣！澄み渡る白雪富士の絶景と名湯に寛ぐ厳選宿5選',
        '冬の箱根・芦ノ湖は空気が澄み渡り、純白の冠雪を抱く富士山と紺碧の湖水が奇跡的な美しさを織りなす極上の季節。11月下旬の晩秋紅葉から1月の新春初詣まで、関東総鎮守・箱根神社の平和の鳥居や芦ノ湖畔の厳かな風情を満喫できます。名湯・箱根湯本温泉や芦ノ湖畔で絶景と美食に寛ぐおすすめ温泉旅館・ホテルを徹底紹介。'
    ),
    (
        '【11・12月天童温泉の冬名湯と山形美食】将棋の里・雪見露天風呂と11月旬ラ・フランス＆A5山形牛すき焼きの宿5選',
        '将棋駒の生産量日本一を誇る山形の名湯「天童温泉」。11月から12月にかけて最盛期を迎える果物の女王「ラ・フランス」の芳醇な甘みと、極上の霜降りを誇るブランド黒毛和牛「山形牛」のすき焼き・ステーキを味わう美食旅へ。風情あふれる雪見露天風呂や源泉かけ流しの美肌湯を備えた、冬の天童温泉おすすめ名宿5選を徹底特集。'
    )
]

def refine_title(t):
    t = t.strip('\"\'` ')
    m = re.match(r'【(.*?)】(.*)', t)
    if not m:
        return t
    bracket, rest = m.group(1), m.group(2)
    
    # Extract destination/area from bracket or rest
    # e.g., "11・12月南伊豆＆下賀茂温泉" -> "11・12月南伊豆"
    # Keep the seasonal months as they drive high intent CTR in search!
    bracket_short = re.sub(r'＆.*', '', bracket)
    bracket_short = re.sub(r'・.*温泉.*', '', bracket_short) if '月' not in bracket_short else bracket_short
    
    # Split rest by delimiters
    chunks = [c.strip() for c in re.split(r'[！・＆|｜]', rest) if len(c.strip()) > 0]
    
    # Pick the strongest 1-2 emotional or gourmet highlights
    # e.g., "伊勢海老姿造りと地金目鯛" or "白雪富士と箱根神社初詣"
    highlights = []
    for c in chunks:
        if any(k in c for k in ['牛', '蟹', 'カニ', '富士', '初詣', '海老', '金目鯛', '雪見', 'イルミ', '絶景', '露天']):
            highlights.append(c)
    
    main_hook = highlights[0] if highlights else (chunks[0] if chunks else '')
    # clean main hook
    main_hook = re.sub(r'を堪能する.*', '', main_hook)
    main_hook = re.sub(r'を巡る.*', '', main_hook)
    main_hook = re.sub(r'名宿.*', '', main_hook)
    
    cand = f"【{bracket}】{main_hook}！おすすめ厳選宿5選"
    if len(cand) <= 36:
        return cand
    cand = f"【{bracket}】{main_hook[:16]}！厳選宿5選"
    if len(cand) <= 36:
        return cand
    cand = f"【{bracket_short}】{main_hook[:14]}！厳選宿5選"
    return cand[:36]

def refine_desc(d):
    d = d.strip('\"\'` ')
    # Extract first 1-2 core sentences
    sentences = re.split(r'(?<=。)', d)
    summary = ""
    for s in sentences:
        if len(summary) + len(s) <= 90:
            summary += s
        else:
            break
    if not summary:
        summary = d[:85]
    cta = "楽天トラベルの最新空室状況・限定プランを比較！"
    cand = f"{summary.rstrip('。')}。{cta}"
    return cand

for orig_t, orig_d in samples:
    new_t = refine_title(orig_t)
    new_d = refine_desc(orig_d)
    print("---")
    print(f"OLD TITLE ({len(orig_t)}): {orig_t}")
    print(f"NEW TITLE ({len(new_t)}): {new_t}")
    print(f"OLD DESC  ({len(orig_d)}): {orig_d[:80]}...")
    print(f"NEW DESC  ({len(new_d)}): {new_d}")
