import json
import os

natural_titles = {
    "src/data/posts/december-tottori-misasa-10selection.json": "松葉ガニ11月6日解禁！鳥取・三朝温泉で活ズワイガニ料理を満喫する極上旅館10選",
    "src/data/posts/winter-brand-tagged-crab-echizen-matsuba-onsen-hotels-guide.json": "越前ガニの初競りと名湯を満喫！福井あわら温泉・三国港で味わう極上活蟹旅館10選",
    "src/data/posts/kinosaki-onsen-seven-baths-yukata-guide.json": "城崎温泉カニ旅行ならここ！七つの外湯めぐりと冬の極上松葉ガニ会席を堪能する名旅館7選",
    "src/data/posts/autumn-shimane-izumo-matsue-10selection.json": "出雲大社の神在月（11月）参拝に泊まりたい！玉造温泉の美肌湯と出雲市内のおすすめ宿10選",
    "src/data/posts/january-kanagawa-hakone-10selection.json": "年末年始・お正月に行きたい箱根温泉！家族で初湯と贅沢会席を満喫するおすすめ人気宿10選",
    "src/data/posts/nikko-chuzenji-okunikko-hotels-guide.json": "日光の紅葉露天ならここ！中禅寺湖・いろは坂の見頃に泊まりたい奥日光の名湯旅館10選",
    "src/data/posts/autumn-kyoto-arashiyama-10selection.json": "京都の紅葉ライトアップ夜間拝観に便利！清水寺・永観堂散策と温泉を味わう嵐山＆市内名旅館10選",
    "src/data/posts/autumn-yamanashi-kawaguchiko-10selection.json": "河口湖もみじ回廊のライトアップへ！富士山を一望する露天風呂と秋の美味を味わう温泉ホテル10選",
    "src/data/posts/november-hyogo-takeda-10selection.json": "竹田城の雲海シーズン到来！早朝の天空パノラマ観賞と城下町ステイが叶うおすすめ宿10選",
    "src/data/posts/rakuten-furusato-travel.json": "楽天トラベルのふるさと納税で憧れの高級温泉旅館へ！寄付枠活用＆あとから割引の簡単ガイド",
    "src/data/posts/autumn-gifu-gero-10selection.json": "下呂温泉で泊まるならここ！日本三名泉のとろとろ美肌湯と極上飛騨牛を堪能する名旅館10選",
    "src/data/posts/cave-bath-geothermal-secret-onsen-hotels-guide.json": "自然が造り出した神秘の洞窟温泉！波音と湯煙に包まれる日本全国の絶景洞窟露天風呂名宿ガイド",
    "src/data/posts/yukiroro.json": "ユキロロ（Yu Kiroro）宿泊レポート！キロロゲレンデ直結の贅沢ステイと天然温泉を本音レビュー",
    "src/data/posts/livemax-resort-echigo-yuzawa-blog-guide.json": "リブマックスリゾート越後湯沢に泊まってみた！全室客室半露天風呂とバイキングの本音宿泊記",
    "src/data/posts/unkai-view-hotel-resort-japan-ranking.json": "客室やテラスから見渡す奇跡の雲海！秋の早朝パノラマに息を呑む絶景リゾートホテル10選",
    "src/data/posts/japan-nationwide-gotochi-special-feature-guide.json": "日本全国47都道府県のご当地特集！旬の味覚・名湯温泉・季節の絶景を巡る大人の国内旅行ガイド",
    "src/data/posts/famous-spots-and-souvenirs-japan-prefecture-guide.json": "全国47都道府県の名物・ご当地グルメ＆お土産決定版！絶対に外さない名所と人気銘菓まとめ",
    "src/data/posts/yamanashi-onsen-ranking-hotels-guide.json": "山梨の温泉旅館ならここ！富士山を望む絶景露天風呂と甲州ワイン・牛肉を味わう人気宿ランキング",
    "src/data/posts/hyogo-onsen-ranking-hotels-guide.json": "兵庫の名湯巡りならここ！有馬の金泉・城崎の冬ガニ・淡路島温泉を心ゆくまで満喫する人気宿ランキング"
}

for fpath, new_title in natural_titles.items():
    if not os.path.exists(fpath):
        print("Not found:", fpath)
        continue
    with open(fpath, "r", encoding="utf-8") as fp:
        data = json.load(fp)
    old_title = data.get("title", "")
    data["title"] = new_title
    with open(fpath, "w", encoding="utf-8") as fp:
        json.dump(data, fp, ensure_ascii=False, indent=2)
    print(f"Humanized title:\n  From: {old_title}\n  To  : {new_title}\n")

print("All titles successfully humanized!")
