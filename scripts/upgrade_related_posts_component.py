with open('src/app/components/RelatedPosts.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Add mega killer banners inside RelatedPosts component
killer_banner_jsx = """      {/* 🔥 2026-2027年最重要メガヒット特集（全国キラー決定版ガイドTOP7） */}
      <div className="p-5 md:p-6 rounded-3xl bg-gradient-to-r from-stone-950 via-teal-950 to-stone-900 text-white shadow-xl border border-amber-500/30 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div>
            <span className="text-[10px] font-black tracking-widest text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-400/40 uppercase">
              EDITORIAL EXCLUSIVE 2026-2027
            </span>
            <h4 className="text-base md:text-lg font-black text-white mt-1 font-journal-serif">
              🔥 編集部総力取材！日本全国メガヒット決定版キラー特集
            </h4>
          </div>
          <span className="text-[11px] text-stone-400">楽天トラベル公式データ連携</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
          <Link
            href="/posts/japan-onsen-ranking-best-hotels-guide/"
            className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-amber-400/30 hover:border-amber-400 transition block group space-y-1"
          >
            <span className="text-[10px] text-amber-300 font-bold block">♨️ 全国温泉地ランキングTOP12</span>
            <p className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
              草津・箱根・有馬・由布院・別府・城崎の名旅館徹底比較（14,000文字）
            </p>
          </Link>
          <Link
            href="/posts/all-inclusive-onsen-resort-ranking-japan-hotels-guide/"
            className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-indigo-400/30 hover:border-indigo-400 transition block group space-y-1"
          >
            <span className="text-[10px] text-indigo-300 font-bold block">🍷 オールインクルーシブTOP12</span>
            <p className="text-xs font-bold text-white group-hover:text-indigo-200 transition line-clamp-2">
              ビール・地酒・夜食・貸切風呂まで全て無料の極上リゾート（15,000文字）
            </p>
          </Link>
          <Link
            href="/posts/sauna-resort-hotels-ranking-japan-guide/"
            className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-teal-400/30 hover:border-teal-400 transition block group space-y-1"
          >
            <span className="text-[10px] text-teal-300 font-bold block">🧖 サウナシュラン受賞宿TOP12</span>
            <p className="text-xs font-bold text-white group-hover:text-teal-200 transition line-clamp-2">
              らかんの湯・北こぶし知床・マウント富士の絶景ととのい（14,000文字）
            </p>
          </Link>
          <Link
            href="/posts/newyear-hatsumode-sunrise-ryokan-ranking-japan-hotels-guide/"
            className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-rose-400/30 hover:border-rose-400 transition block group space-y-1"
          >
            <span className="text-[10px] text-rose-300 font-bold block">⛩️ 年末年始・初詣＆初日の出</span>
            <p className="text-xs font-bold text-white group-hover:text-rose-200 transition line-clamp-2">
              伊勢神宮・出雲大社・富士山近くの開運旅館ランキング（12,000文字）
            </p>
          </Link>
          <Link
            href="/posts/furusato-tax-luxury-ryokan-ranking-japan-hotels-guide/"
            className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-amber-400/30 hover:border-amber-400 transition block group space-y-1"
          >
            <span className="text-[10px] text-amber-300 font-bold block">💰 実質2000円宿泊</span>
            <p className="text-xs font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
              楽天ふるさと納税×高級宿！還元率30%クーポンで泊まる憧れの宿12選
            </p>
          </Link>
          <Link
            href="/posts/winter-crab-onsen-hotels-ranking-matuba-echizen-guide/"
            className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-red-400/30 hover:border-red-400 transition block group space-y-1"
          >
            <span className="text-[10px] text-red-300 font-bold block">🦀 冬の味覚・カニ解禁</span>
            <p className="text-xs font-bold text-white group-hover:text-red-200 transition line-clamp-2">
              松葉ガニ・越前がに・間人ガニ解禁！タグ付き活蟹が食べられる宿12選
            </p>
          </Link>
        </div>
      </div>
"""

target = """      <div className="space-y-4">
        <div className="flex items-center justify-between">"""

if target in text:
    new_text = text.replace(target, killer_banner_jsx + "\n" + target)
    with open('src/app/components/RelatedPosts.tsx', 'w', encoding='utf-8') as f:
        f.write(new_text)
    print('Successfully inserted Killer features into RelatedPosts.tsx!')
else:
    print('Target not found in RelatedPosts.tsx')
