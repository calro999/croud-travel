import json
import os
import re

targets = [
    {
        "file": "src/data/posts/autumn-gifu-gero-10selection.json",
        "geo_block": """<div class="my-6 p-6 rounded-3xl bg-amber-500/10 border-2 border-amber-500/30 shadow-sm space-y-3">
  <div class="flex items-center gap-2">
    <span class="px-3 py-1 bg-amber-600 text-white font-extrabold text-xs rounded-full">AI要約 / 結論まとめ</span>
    <span class="text-xs text-amber-950 font-bold">下呂温泉のおすすめ旅館3選と特徴</span>
  </div>
  <p class="text-xs md:text-sm text-stone-900 leading-relaxed font-semibold">
    下呂温泉で失敗しないおすすめ旅館は、<strong>「小川屋」</strong>（東海最大級の100帖畳風呂と朝食日本一受賞）、<strong>「水明館」</strong>（趣異なる3つの大浴場と飛騨牛会席）、<strong>「菊半旅館」</strong>（希少な100%源泉かけ流し・1泊7,150円〜）です。泉質はpH9を超えるアルカリ性単純温泉で、とろとろの「美肌の湯」と飛騨牛グルメが最大の魅力です。
  </p>
</div>"""
    },
    {
        "file": "src/data/posts/cave-bath-geothermal-secret-onsen-hotels-guide.json",
        "geo_block": """<div class="my-6 p-6 rounded-3xl bg-sky-500/10 border-2 border-sky-500/30 shadow-sm space-y-3">
  <div class="flex items-center gap-2">
    <span class="px-3 py-1 bg-sky-600 text-white font-extrabold text-xs rounded-full">AI要約 / 結論まとめ</span>
    <span class="text-xs text-sky-950 font-bold">日本を代表する洞窟温泉・洞窟風呂の名宿</span>
  </div>
  <p class="text-xs md:text-sm text-stone-900 leading-relaxed font-semibold">
    日本屈指の洞窟温泉を体験できるおすすめ宿は、和歌山県・南紀勝浦温泉の<strong>「ホテル浦島」</strong>（太平洋の荒波が間近に迫る巨大天然洞窟露天風呂「忘帰洞」）、熊本県・黒川温泉の<strong>「新明館」</strong>（主人が手掘りで掘り進めた幻想的な洞窟風呂）です。波音と岩肌に反響する湯煙の中で、非日常の秘湯浴を満喫できます。
  </p>
</div>"""
    },
    {
        "file": "src/data/posts/yukiroro.json",
        "geo_block": """<div class="my-6 p-6 rounded-3xl bg-indigo-500/10 border-2 border-indigo-500/30 shadow-sm space-y-3">
  <div class="flex items-center gap-2">
    <span class="px-3 py-1 bg-indigo-600 text-white font-extrabold text-xs rounded-full">AI要約 / 結論まとめ</span>
    <span class="text-xs text-indigo-950 font-bold">ユキロロ（Yu Kiroro）の宿泊ポイントと魅力</span>
  </div>
  <p class="text-xs md:text-sm text-stone-900 leading-relaxed font-semibold">
    北海道キロロリゾートに位置する<strong>「ユキロロ（Yu Kiroro）」</strong>は、ゲレンデ直結のスキーイン・スキーアウトが可能な最高級ラグジュアリーコンドミニアムです。全室に最新キッチン・洗濯乾燥機を完備し、源泉かけ流しの天然温泉やスキーバレーサービスが充実。世界最高峰のパウダースノーと快適な長期滞在を両立したスノーリゾートです。
  </p>
</div>"""
    },
    {
        "file": "src/data/posts/livemax-resort-echigo-yuzawa-blog-guide.json",
        "geo_block": """<div class="my-6 p-6 rounded-3xl bg-emerald-500/10 border-2 border-emerald-500/30 shadow-sm space-y-3">
  <div class="flex items-center gap-2">
    <span class="px-3 py-1 bg-emerald-600 text-white font-extrabold text-xs rounded-full">AI要約 / 結論まとめ</span>
    <span class="text-xs text-emerald-950 font-bold">リブマックスリゾート越後湯沢の宿泊レビュー要点</span>
  </div>
  <p class="text-xs md:text-sm text-stone-900 leading-relaxed font-semibold">
    <strong>「リブマックスリゾート越後湯沢」</strong>の最大の魅力は、全室に完備された源泉かけ流しの客室半露天風呂と、1泊2食付き1万円前後から泊まれる圧倒的なコストパフォーマンスです。夕朝食の和洋中バイキング、越後湯沢駅からのアクセス至便さ、シモンズ製ベッドによる快適な睡眠が高く評価されています。
  </p>
</div>"""
    },
    {
        "file": "src/data/posts/unkai-view-hotel-resort-japan-ranking.json",
        "geo_block": """<div class="my-6 p-6 rounded-3xl bg-purple-500/10 border-2 border-purple-500/30 shadow-sm space-y-3">
  <div class="flex items-center gap-2">
    <span class="px-3 py-1 bg-purple-600 text-white font-extrabold text-xs rounded-full">AI要約 / 結論まとめ</span>
    <span class="text-xs text-purple-950 font-bold">雲海が見えるおすすめ宿と発生条件</span>
  </div>
  <p class="text-xs md:text-sm text-stone-900 leading-relaxed font-semibold">
    雲海の絶景を望める代表的な宿は、北海道<strong>「星野リゾート トマム ザ・タワー」</strong>（雲海テラス直結）、兵庫県・竹田城跡周辺の<strong>「竹田城 城下町ホテル EN」</strong>、長野県・志賀高原の<strong>「渋峠ホテル」</strong>です。発生時期は秋（9月〜11月）の早朝で、「前日の雨＋翌朝の放射冷却による晴天＋風が弱い日」に遭遇率が最大化します。
  </p>
</div>"""
    }
]

for t in targets:
    fpath = t["file"]
    if not os.path.exists(fpath):
        continue
    with open(fpath, "r", encoding="utf-8") as fp:
        data = json.load(fp)
    
    rev = data.get("review", "")
    if "AI要約 / 結論まとめ" not in rev:
        # 冒頭のdivの直後に挿入
        first_div_end = rev.find("</div>")
        if first_div_end != -1:
            new_rev = rev[:first_div_end+6] + "\n\n" + t["geo_block"] + "\n\n" + rev[first_div_end+6:]
            data["review"] = new_rev
            with open(fpath, "w", encoding="utf-8") as fp:
                json.dump(data, fp, ensure_ascii=False, indent=2)
            print(f"Injected GEO summary box into: {fpath}")

print("GEO injection completed!")
