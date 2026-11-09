import os
import json
import re

posts_dir = 'src/data/posts'
files = [f for f in os.listdir(posts_dir) if f.endswith('.json')]

pref_files = [f for f in files if f.endswith('-famous-things-gourmet-spots-guide.json')]
print(f"Targeting {len(pref_files)} prefecture famous-things guide posts for upgrade...")

# 7大全国キラー記事データ
killer_cards_html = '''
<div class="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-stone-950 via-teal-950 to-stone-900 text-white shadow-xl border border-teal-500/30 space-y-4">
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
    <div>
      <span class="text-[10px] font-extrabold uppercase tracking-widest text-teal-300 bg-teal-900/60 px-3 py-1 rounded-full border border-teal-400/30">NATIONAL SPECIAL FEATURES</span>
      <h3 class="text-lg md:text-xl font-black text-white mt-1">🔥 【2026-2027冬春最新】日本全国メガヒット・トラベル決定版特集</h3>
    </div>
    <span class="text-xs text-amber-400 font-bold">楽天トラベル公式データ連携</span>
  </div>
  <p class="text-xs text-stone-300 leading-relaxed">
    当サイト編集部が総力を挙げて取材・分析した、今最も読まれている全国横断キラーガイドです。本県の旅とあわせて、一生に一度は体験したい日本の最高峰リゾートをご堪能ください。
  </p>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
    <a href="/posts/japan-onsen-ranking-best-hotels-guide/" class="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group">
      <span class="text-[10px] text-amber-300 font-bold block mb-1">♨️ 全国温泉地ランキング</span>
      <h4 class="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">【日本全国温泉地ランキングTOP12】草津・箱根・有馬・由布院・別府・城崎の名旅館徹底比較</h4>
    </a>
    <a href="/posts/all-inclusive-onsen-resort-ranking-japan-hotels-guide/" class="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group">
      <span class="text-[10px] text-indigo-300 font-bold block mb-1">🍷 オールインクルーシブ</span>
      <h4 class="text-xs font-bold text-white group-hover:text-indigo-200 transition line-clamp-2">【全国オールインクルーシブ温泉宿TOP12】生ビール・地酒・夜食・貸切風呂まで全て無料</h4>
    </a>
    <a href="/posts/sauna-resort-hotels-ranking-japan-guide/" class="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group">
      <span class="text-[10px] text-teal-300 font-bold block mb-1">🧖 サウナシュラン＆サ旅</span>
      <h4 class="text-xs font-bold text-white group-hover:text-teal-200 transition line-clamp-2">【全国サウナが凄いホテル＆名旅館TOP12】らかんの湯・北こぶし知床・マウント富士</h4>
    </a>
    <a href="/posts/newyear-hatsumode-sunrise-ryokan-ranking-japan-hotels-guide/" class="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group">
      <span class="text-[10px] text-rose-300 font-bold block mb-1">⛩️ 年末年始・初詣＆初日の出</span>
      <h4 class="text-xs font-bold text-white group-hover:text-rose-200 transition line-clamp-2">【年末年始・初詣＆初日の出温泉旅行】伊勢神宮・出雲大社・富士山近くの開運旅館12選</h4>
    </a>
    <a href="/posts/furusato-tax-luxury-ryokan-ranking-japan-hotels-guide/" class="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group">
      <span class="text-[10px] text-amber-300 font-bold block mb-1">💰 実質2000円宿泊</span>
      <h4 class="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">【楽天ふるさと納税×高級宿】還元率30%クーポンで泊まる憧れの最高峰旅館12選</h4>
    </a>
    <a href="/posts/winter-crab-onsen-hotels-ranking-matuba-echizen-guide/" class="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group">
      <span class="text-[10px] text-red-300 font-bold block mb-1">🦀 冬の味覚・本場カニフルコース</span>
      <h4 class="text-xs font-bold text-white group-hover:text-red-200 transition line-clamp-2">【日本海カニ旅行】松葉ガニ・越前がに・間人ガニ解禁！タグ付き活蟹が食べられる宿12選</h4>
    </a>
  </div>
</div>
'''

upgraded_count = 0

for fn in pref_files:
    fp = os.path.join(posts_dir, fn)
    with open(fp, 'r', encoding='utf-8') as f:
        data = json.load(f)

    pref_name = data.get('prefecture', '')
    clean_pref = pref_name.replace('県', '').replace('府', '').replace('東京都', '東京')
    review = data.get('review', '')

    # 対応する温泉ランキング記事のスラッグ
    onsen_ranking_slug = f"{fn.replace('-famous-things-gourmet-spots-guide.json', '')}-onsen-ranking-hotels-guide"
    has_onsen_article = os.path.exists(os.path.join(posts_dir, f"{onsen_ranking_slug}.json"))

    # 都道府県専用の内部リンクハブセクション
    pref_hub_html = f'''
<div class="my-8 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-amber-50 via-stone-50 to-teal-50 border-2 border-amber-300/70 shadow-md space-y-4">
  <div class="flex items-center gap-2 border-b border-amber-200 pb-3">
    <span class="text-xl">🗺️</span>
    <div>
      <span class="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">PREFECTURE HUB DIRECTORY</span>
      <h3 class="text-base md:text-lg font-bold text-stone-900 mt-0.5">【{pref_name}】旅を200%楽しむための関連特集＆ハブ案内</h3>
    </div>
  </div>
  <p class="text-xs text-stone-700 leading-relaxed">
    {pref_name}旅行の計画をさらにスムーズに！名物グルメやお土産だけでなく、県内の名湯・温泉ランキングや各エリアの宿泊ルポ記事もあわせてチェックして、最高の滞在プランを組み立ててください。
  </p>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
    <a href="/prefectures/{fn.replace('-famous-things-gourmet-spots-guide.json', '')}/" class="p-3.5 rounded-2xl bg-white border border-stone-200 hover:border-teal-600 shadow-xs hover:shadow-md transition flex items-center justify-between group">
      <div>
        <span class="text-[10px] text-teal-700 font-bold block">🗾 都道府県ポータル</span>
        <h4 class="text-xs font-bold text-stone-900 group-hover:text-teal-800 transition">【{pref_name}】エリア別観光名所・カフェ・宿ハブ</h4>
      </div>
      <span class="text-stone-400 group-hover:translate-x-1 group-hover:text-teal-700 transition">➔</span>
    </a>
'''
    if has_onsen_article:
        pref_hub_html += f'''
    <a href="/posts/{onsen_ranking_slug}/" class="p-3.5 rounded-2xl bg-white border border-stone-200 hover:border-amber-600 shadow-xs hover:shadow-md transition flex items-center justify-between group">
      <div>
        <span class="text-[10px] text-amber-700 font-bold block">♨️ 温泉旅館ランキング</span>
        <h4 class="text-xs font-bold text-stone-900 group-hover:text-amber-800 transition">【{pref_name}の温泉ランキング】人気旅館＆露天風呂付き客室</h4>
      </div>
      <span class="text-stone-400 group-hover:translate-x-1 group-hover:text-amber-700 transition">➔</span>
    </a>
'''
    pref_hub_html += '''
  </div>
</div>
'''

    # review内にすでに挿入済みかチェック
    if 'PREFECTURE HUB DIRECTORY' not in review:
        # 記事の末尾または適切な位置にハブブロックを追加
        new_review = review + pref_hub_html + killer_cards_html
        data['review'] = new_review
        with open(fp, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        upgraded_count += 1

print(f"Successfully upgraded {upgraded_count} prefecture famous-things posts with deep hub links and national killer cards!")
