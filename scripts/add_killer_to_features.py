with open('src/app/features/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

target = "<FeatureTrendsSection />"

killer_section = """      {/* 🔥 2026-2027年最重要メガヒット特集（全国キラー決定版ガイドTOP7） */}
      <section className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-stone-950 via-teal-950 to-stone-900 text-white shadow-xl border-2 border-amber-500/30 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-black tracking-widest uppercase border border-amber-400/30">
              NATIONAL KILLER FEATURES 2026-2027
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white mt-1.5 font-journal-serif">
              🔥 編集部総力取材！日本全国メガヒット決定版キラー特集
            </h2>
          </div>
          <span className="text-xs text-stone-400 font-medium">楽天トラベル公式データ完全連携</span>
        </div>

        <p className="text-xs md:text-sm text-stone-300 leading-relaxed max-w-4xl">
          当サイトが総力を結集して執筆した1万文字超の徹底比較バイブル。温泉ランキング、オールインクルーシブ、サウナシュラン、初詣、ふるさと納税、本場カニまで必見です。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
          <Link
            href="/posts/japan-onsen-ranking-best-hotels-guide/"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-amber-400/30 hover:border-amber-400 transition block group space-y-1.5 shadow-sm"
          >
            <span className="text-[10px] font-extrabold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded inline-block">
              ♨️ 全国温泉地ランキングTOP12
            </span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
              【日本全国温泉地ランキングTOP12】草津・箱根・有馬・由布院・別府・城崎の名旅館徹底比較
            </h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">10大泉質別の効能・絶景露天風呂・お得な予約テクニック</p>
          </Link>

          <Link
            href="/posts/all-inclusive-onsen-resort-ranking-japan-hotels-guide/"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-indigo-400/30 hover:border-indigo-400 transition block group space-y-1.5 shadow-sm"
          >
            <span className="text-[10px] font-extrabold text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded inline-block">
              🍷 オールインクルーシブTOP12
            </span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-indigo-200 transition line-clamp-2">
              【全国オールインクルーシブ温泉宿TOP12】ビール・地酒・夜食・貸切風呂まで全て無料
            </h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">松島一の坊・アンダリゾート・季の湯雪月花など追加料金一切なし</p>
          </Link>

          <Link
            href="/posts/sauna-resort-hotels-ranking-japan-guide/"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-teal-400/30 hover:border-teal-400 transition block group space-y-1.5 shadow-sm"
          >
            <span className="text-[10px] font-extrabold text-teal-300 bg-teal-950/80 px-2 py-0.5 rounded inline-block">
              🧖 サウナシュラン受賞宿TOP12
            </span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-teal-200 transition line-clamp-2">
              【全国サウナが凄いホテル＆名旅館TOP12】らかんの湯・北こぶし知床・マウント富士
            </h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">天然伏流水水風呂・絶景外気浴・サウナ飯（サ飯）まで徹底取材</p>
          </Link>

          <Link
            href="/posts/newyear-hatsumode-sunrise-ryokan-ranking-japan-hotels-guide/"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-rose-400/30 hover:border-rose-400 transition block group space-y-1.5 shadow-sm"
          >
            <span className="text-[10px] font-extrabold text-rose-300 bg-rose-950/80 px-2 py-0.5 rounded inline-block">
              ⛩️ 初詣＆初日の出温泉旅行
            </span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-rose-200 transition line-clamp-2">
              【年末年始・初詣＆初日の出温泉旅行】伊勢神宮・出雲大社・富士山近くの開運旅館12選
            </h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">早朝参拝の混雑回避・年越し特別会席・お正月モデルコース</p>
          </Link>

          <Link
            href="/posts/furusato-tax-luxury-ryokan-ranking-japan-hotels-guide/"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-amber-400/30 hover:border-amber-400 transition block group space-y-1.5 shadow-sm"
          >
            <span className="text-[10px] font-extrabold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded inline-block">
              💰 実質2,000円宿泊
            </span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
              【楽天ふるさと納税×高級宿】還元率30%クーポンで泊まる憧れの最高峰旅館12選
            </h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">寄附上限の計算式・名門客室露天風呂・年末駆け込み攻略</p>
          </Link>

          <Link
            href="/posts/winter-crab-onsen-hotels-ranking-matuba-echizen-guide/"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-red-400/30 hover:border-red-400 transition block group space-y-1.5 shadow-sm"
          >
            <span className="text-[10px] font-extrabold text-red-300 bg-red-950/80 px-2 py-0.5 rounded inline-block">
              🦀 冬の味覚・カニ解禁
            </span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-red-200 transition line-clamp-2">
              【日本海カニ旅行】松葉ガニ・越前がに・間人ガニ解禁！タグ付き活蟹が食べられる宿12選
            </h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">刺身・炭火焼き・茹で・甲羅味噌・カニすき雑炊のフルコース</p>
          </Link>
        </div>
      </section>

"""

if target in text:
    new_text = text.replace(target, killer_section + target)
    with open('src/app/features/page.tsx', 'w', encoding='utf-8') as f:
        f.write(new_text)
    print('Successfully inserted Killer section into Features page!')
else:
    print('Target not found in src/app/features/page.tsx')
