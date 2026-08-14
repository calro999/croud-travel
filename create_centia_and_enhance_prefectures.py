import os
import json

POSTS_DIR = "src/data/posts"

# センティアホテル内藤 (centia-hotel-naito.json) の作成
centia_data = {
  "id": "centia-hotel-naito",
  "slug": "centia-hotel-naito",
  "title": "【2026年最新】センティアホテル内藤の口コミ・甲府駅近くの快適客室と大浴場・無料駐車場",
  "description": "山梨県甲府市のビジネス・観光拠点「センティアホテル内藤（centia hotel naito）」のリアルな宿泊口コミ！甲府駅からのアクセス、敷地内駐車場、大浴場サウナスパ施設「スパランド内藤」提携特典、山梨名物朝食バイキングを徹底紹介。",
  "prefecture": "山梨県",
  "area": "甲府・昇仙峡",
  "hot_spring_info": "グループ施設の本格スパリゾート「スパランドホテル内藤」の天然温泉・サウナ優待利用サービスあり。",
  "parking_info": "ホテル敷地内・周辺に提携駐車場あり（普通車・大型車対応）。",
  "meal_availability": "和洋手作りの朝食バイキング！甲府名物ほうとうや山梨県産米・旬の和菜が充実。",
  "review": """
<h2 id="centia-intro" class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 mb-4">【山梨県甲府市】センティアホテル内藤（centia hotel naito）の魅力と宿泊ガイド</h2>
<p class="text-sm text-stone-700 leading-relaxed mb-4">「センティアホテル内藤」は、甲府中心街に位置し、ビジネス利用はもちろん舞鶴城公園や昇仙峡、勝沼ワイナリー観光へのアクセスに大変便利な老舗ホテルです。</p>
<p class="text-sm text-stone-700 leading-relaxed mb-6">アットホームで行き届いた接客と、清潔で機能的な客室、グループ施設「スパランドホテル内藤」との連携による温泉・サウナ特典などが高いリピート率を誇ります。</p>

<div class="my-6 p-6 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-3xl shadow-sm">
  <h3 class="text-base font-bold text-amber-950 mb-3 flex items-center gap-2">💡 センティアホテル内藤が選ばれる3つの理由</h3>
  <ul class="space-y-2 text-xs text-stone-800 font-medium">
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>甲府中心部でアクセス抜群！繁華街や甲府駅・平和通りへ至近の好立地</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>手作りのぬくもり！甲府名物ほうとうも食べられる人気の和洋朝食バイキング</span></li>
    <li class="flex items-start gap-2"><span class="text-amber-500 font-bold">✔</span><span>お車での利用に便利な駐車場完備＆ビジネス・出張にも快適な高速WiFi</span></li>
  </ul>
</div>

<div class="my-6 p-6 rounded-3xl bg-white border border-stone-200 shadow-md space-y-4">
  <div class="flex items-center justify-between border-b border-stone-100 pb-3">
    <h3 class="text-lg font-bold text-stone-900">センティアホテル内藤（centia hotel naito）</h3>
    <span class="px-3 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-full">⭐ 4.10 / 5.0</span>
  </div>
  <div class="flex flex-col md:flex-row gap-6">
    <div class="w-full md:w-5/12">
      <img src="https://img.travel.rakuten.co.jp/share/HOTEL/108140/108140.jpg" alt="センティアホテル内藤" class="w-full h-48 object-cover rounded-2xl shadow-sm border border-stone-100" loading="lazy" />
    </div>
    <div class="w-full md:w-7/12 space-y-3 text-xs text-stone-700 leading-relaxed">
      <p><strong>【所在地】</strong> 山梨県甲府市相生2-3-16</p>
      <p><strong>【アクセス】</strong> JR甲府駅南口より車・タクシーで約5分 / 甲府昭和ICより車で約15分</p>
      <p><strong>【駐車場】</strong> 敷地内・近隣提携駐車場あり</p>
      <p><strong>【食事】</strong> 朝食バイキング（地産地消・手作り料理）</p>
    </div>
  </div>
  <div class="pt-4 text-center">
    <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108140%2F108140.html" target="_blank" rel="noopener noreferrer" class="inline-block w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-sm rounded-2xl shadow-lg">
      ✈️ センティアホテル内藤 の最新空室状況・宿泊プランを見る
    </a>
  </div>
</div>
""".strip()
}

with open(os.path.join(POSTS_DIR, "centia-hotel-naito.json"), "w", encoding="utf-8") as f:
    json.dump(centia_data, f, ensure_ascii=False, indent=2)

print("✅ centia-hotel-naito.json を作成しました！")
