import os
import glob
import json

infinity_card_home = """            <Link
              href="/posts/japan-infinity-sky-onsen-hotels-ranking-best-guide/"
              className="group relative overflow-hidden rounded-3xl bg-slate-800/80 border border-cyan-500/30 p-5 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold tracking-wider">
                  🌅 絶景インフィニティ温泉
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                  【2026-2027年最新】全国絶景インフィニティ温泉＆天空露天風呂TOP12｜海・富士山・夜景
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  熱海・河口湖・別府・洞爺湖など！海や空と一体化する奇跡の浮遊感と絶景パノラマ露天風呂名宿ガイド。
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                <span>ランキングと空室を見る</span>
                <span>→</span>
              </div>
            </Link>"""

# 1. Update src/app/page.tsx
with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    home_content = f.read()

if '/posts/japan-infinity-sky-onsen-hotels-ranking-best-guide/' not in home_content:
    target_pos = home_content.find('href="/posts/japan-private-open-air-bath-onsen-hotels-ranking-guide/"')
    if target_pos != -1:
        end_link = home_content.find('</Link>', target_pos) + len('</Link>')
        home_content = home_content[:end_link] + '\n' + infinity_card_home + home_content[end_link:]
        with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
            f.write(home_content)
        print("✓ Updated src/app/page.tsx")

# 2. Update src/app/features/page.tsx
with open('src/app/features/page.tsx', 'r', encoding='utf-8') as f:
    features_content = f.read()

if '/posts/japan-infinity-sky-onsen-hotels-ranking-best-guide/' not in features_content:
    target_pos = features_content.find('href="/posts/japan-private-open-air-bath-onsen-hotels-ranking-guide/"')
    if target_pos != -1:
        end_link = features_content.find('</Link>', target_pos) + len('</Link>')
        features_content = features_content[:end_link] + '\n' + infinity_card_home + features_content[end_link:]
        with open('src/app/features/page.tsx', 'w', encoding='utf-8') as f:
            f.write(features_content)
        print("✓ Updated src/app/features/page.tsx")

# 3. Update src/app/components/RelatedPosts.tsx
with open('src/app/components/RelatedPosts.tsx', 'r', encoding='utf-8') as f:
    rp_content = f.read()

if '/posts/japan-infinity-sky-onsen-hotels-ranking-best-guide/' not in rp_content:
    rp_card = """          <Link
            href="/posts/japan-infinity-sky-onsen-hotels-ranking-best-guide/"
            className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-cyan-400/30 hover:border-cyan-400 transition block group space-y-1"
          >
            <span className="text-[10px] text-cyan-300 font-bold block">🌅 絶景インフィニティ温泉TOP12</span>
            <p className="text-xs font-bold text-white group-hover:text-cyan-200 transition line-clamp-2">
              熱海・河口湖・別府・洞爺湖！海と空に浮かぶ奇跡の天空露天（14,000文字）
            </p>
          </Link>"""
    pos = rp_content.find('href="/posts/japan-private-open-air-bath-onsen-hotels-ranking-guide/"')
    if pos != -1:
        end_link = rp_content.find('</Link>', pos) + len('</Link>')
        rp_content = rp_content[:end_link] + '\n' + rp_card + rp_content[end_link:]
        with open('src/app/components/RelatedPosts.tsx', 'w', encoding='utf-8') as f:
            f.write(rp_content)
        print("✓ Updated src/app/components/RelatedPosts.tsx")

# 4. Update src/app/prefectures/page.tsx
with open('src/app/prefectures/page.tsx', 'r', encoding='utf-8') as f:
    pref_index_content = f.read()

if '/posts/japan-infinity-sky-onsen-hotels-ranking-best-guide/' not in pref_index_content:
    pos = pref_index_content.find('href="/posts/japan-private-open-air-bath-onsen-hotels-ranking-guide/"')
    if pos != -1:
        end_link = pref_index_content.find('</Link>', pos) + len('</Link>')
        pref_card = """          <Link href="/posts/japan-infinity-sky-onsen-hotels-ranking-best-guide/" className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group space-y-1.5">
            <span className="text-[10px] text-cyan-300 font-bold block">🌅 絶景インフィニティ温泉</span>
            <h4 className="text-xs font-bold text-white group-hover:text-cyan-200 transition">【全国絶景インフィニティ温泉＆天空露天風呂TOP12】海・空と一体化する名宿</h4>
          </Link>"""
        pref_index_content = pref_index_content[:end_link] + '\n' + pref_card + pref_index_content[end_link:]
        with open('src/app/prefectures/page.tsx', 'w', encoding='utf-8') as f:
            f.write(pref_index_content)
        print("✓ Updated src/app/prefectures/page.tsx")

# 5. Update src/app/prefectures/[pref]/page.tsx
with open('src/app/prefectures/[pref]/page.tsx', 'r', encoding='utf-8') as f:
    pref_hub_content = f.read()

if 'japan-infinity-sky-onsen-hotels-ranking-best-guide' not in pref_hub_content:
    pref_hub_content = pref_hub_content.replace(
        "p.id === 'japan-private-open-air-bath-onsen-hotels-ranking-guide' ||",
        "p.id === 'japan-private-open-air-bath-onsen-hotels-ranking-guide' ||\n          p.id === 'japan-infinity-sky-onsen-hotels-ranking-best-guide' ||"
    )
    with open('src/app/prefectures/[pref]/page.tsx', 'w', encoding='utf-8') as f:
        f.write(pref_hub_content)
    print("✓ Updated src/app/prefectures/[pref]/page.tsx")

# 6. Update the 94 prefecture guides HTML embedded national features
html_card = """    <a href="/posts/japan-infinity-sky-onsen-hotels-ranking-best-guide/" class="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group">
      <span class="text-[10px] text-cyan-300 font-bold block mb-1">🌅 絶景インフィニティ温泉</span>
      <h4 class="text-xs font-bold text-white group-hover:text-cyan-200 transition line-clamp-2">【全国絶景インフィニティ露天風呂TOP12】海・富士山・夜景と一体化する奇跡の宿</h4>
    </a>"""

files = glob.glob('src/data/posts/*-famous-things-gourmet-spots-guide.json') + glob.glob('src/data/posts/*-onsen-ranking-hotels-guide.json')
updated_count = 0
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    review = data.get('review', '')
    if '/posts/japan-infinity-sky-onsen-hotels-ranking-best-guide/' not in review and 'NATIONAL SPECIAL FEATURES' in review:
        target_needle = 'href="/posts/japan-private-open-air-bath-onsen-hotels-ranking-guide/"'
        pos = review.find(target_needle)
        if pos != -1:
            end_a = review.find('</a>', pos) + len('</a>')
            data['review'] = review[:end_a] + '\n' + html_card + review[end_a:]
            with open(file, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            updated_count += 1

print(f"✓ Updated national features block in {updated_count} prefecture posts!")
