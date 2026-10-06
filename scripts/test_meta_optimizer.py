import re

def optimize_title(t):
    t = t.strip('\"\'` ')
    if len(t) <= 40:
        return t

    # Pattern: 【時期＋地域】メイン魅力・サブ魅力・宿5選
    m = re.match(r'【(.*?)】(.*)', t)
    if not m:
        return t[:38]

    bracket = m.group(1)
    rest = m.group(2)

    # 1. Compact bracket: e.g. "11・12・1月山形" -> "冬の山形"
    bracket_clean = re.sub(r'(\d+・)+\d+月', '冬の', bracket)
    bracket_clean = re.sub(r'^\d+月', '冬の', bracket_clean)
    if len(bracket_clean) > 16:
        bracket_clean = bracket_clean[:14]

    # 2. Extract key elements from rest
    # Split by delimiters
    chunks = [c.strip() for c in re.split(r'[！・＆|｜]', rest) if len(c.strip()) > 0]
    
    # Identify target keywords
    # Often chunk 0 is core attraction (e.g. 豪雪の奇跡, 南伊豆下賀茂温泉, だるま夕日)
    core = chunks[0] if len(chunks) > 0 else rest
    # If chunk 0 is generic (e.g. 豪雪の奇跡), take chunk 1
    if len(core) < 6 and len(chunks) > 1:
        core = chunks[1]

    suffix = '厳選宿5選'
    if '3選' in rest:
        suffix = '厳選宿3選'

    # Assemble candidate
    cand = f"【{bracket_clean}】{core}！{suffix}"
    if len(cand) <= 38:
        return cand

    # If still long, shorten core
    cand2 = f"【{bracket_clean}】{core[:16]}！{suffix}"
    if len(cand2) <= 38:
        return cand2

    return cand2[:38]

def optimize_description(d):
    d = d.strip('\"\'` ')
    # If between 100 and 130 chars, already optimal
    if 100 <= len(d) <= 135:
        return d
    
    if len(d) > 135:
        # Cut at sentence boundary or punctuation
        sub = d[:130]
        last_punct = max(sub.rfind('。'), sub.rfind('！'), sub.rfind('、'))
        if last_punct > 90:
            return sub[:last_punct + 1] + '楽天トラベル最新空室・限定プランを徹底比較。'
        return sub[:105] + '…楽天トラベルの最新空室・限定プランを徹底比較。'
    
    if len(d) < 100:
        return d.rstrip('。') + '。楽天トラベルの最新空室状況・割引クーポン・おすすめ宿泊プランを徹底比較。'

# Test samples
test_titles = [
    '【11・12月南伊豆＆下賀茂温泉】温暖な避寒リゾートと湯煙南国情緒・旬の伊勢海老姿造り＆脂が乗った地金目鯛姿煮・水仙まつりを巡る名宿5選',
    '【11・12・1月山形】豪雪の奇跡・開湯1200年肘折温泉の黄金湯治と名物納豆汁＆極上山形牛・肘折幻想雪回廊を巡る名宿5選',
    '【11・12・1月東京】銀座＆日比谷！HIBIYA Magic Timeイルミ＆東京クリスマスマーケットと銀座美食・最高峰ホテル名宿5選',
    '【11・12月静岡・西伊豆堂ヶ島温泉の夕陽百選＆駿河湾越しの雪化粧富士】名物戸田高足ガニ＆伊勢海老・地金目鯛会席を堪能する絶景オーシャンビュー名宿5選'
]

for tt in test_titles:
    opt = optimize_title(tt)
    print(f"[{len(opt)} chars] {opt}")
