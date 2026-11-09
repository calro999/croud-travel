with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Insert the killer features section right after the hero section (before transit navigation)
target = "{/* 🚅 新幹線 vs 高速バス 安く行く方法＆1泊2日モデルコース特設ナビゲーション */}"

killer_section = """      {/* 🔥 2026-2027年最重要メガヒット特集（全国キラー決定版ガイドTOP7） */}
      <section className="p-6 md:p-10 rounded-3xl bg-gradient-to-r from-stone-950 via-teal-950 to-stone-900 text-white shadow-2xl border-2 border-amber-500/30 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-black tracking-widest uppercase border border-amber-400/30">
              EDITORIAL EXCLUSIVE 2026-2027
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mt-2 font-journal-serif">
              🔥 編集部総力取材！日本全国メガヒット決定版キラー特集
            </h2>
          </div>
          <span className="text-xs text-stone-400 font-medium bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
            楽天トラベル公式APIリアルタイムデータ完全連携
          </span>
        </div>

        <p className="text-xs md:text-sm text-stone-300 leading-relaxed max-w-4xl">
          当サイトが誇る圧倒的情報量（各記事1万文字超！）と実測APIデータで比較した、今最も読まれている全国横断の特別ガイドです。草津・箱根・有馬などの名湯から、オールインクルーシブ、サウナシュラン、年末年始初詣、ふるさと納税高級宿、冬の味覚カニ旅行まで、一生に一度は訪れたい至高の旅路をご案内します。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
          <Link
            href="/posts/japan-onsen-ranking-best-hotels-guide/"
            className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-amber-400/30 hover:border-amber-400 transition block group space-y-2 shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded-md border border-amber-500/30">
                ♨️ 全国温泉地ランキング
              </span>
              <span className="text-[10px] text-stone-400">14,000文字超</span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-amber-200 transition line-clamp-2 leading-snug">
              【日本全国温泉地ランキングTOP12】草津・箱根・有馬・由布院・別府・城崎の名旅館徹底比較
            </h3>
            <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
              環境省10大泉質別の選び方、名湯の効能、絶景露天風呂、お得な予約術まで完全網羅した温泉バイブル。
            </p>
          </Link>

          <Link
            href="/posts/all-inclusive-onsen-resort-ranking-japan-hotels-guide/"
            className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-indigo-400/30 hover:border-indigo-400 transition block group space-y-2 shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-indigo-300 bg-indigo-950/80 px-2.5 py-0.5 rounded-md border border-indigo-500/30">
                🍷 オールインクルーシブ
              </span>
              <span className="text-[10px] text-stone-400">15,000文字超</span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-indigo-200 transition line-clamp-2 leading-snug">
              【全国オールインクルーシブ温泉宿TOP12】ビール・地酒・夜食・貸切風呂まで全て無料
            </h3>
            <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
              松島一の坊、アンダリゾート、季の湯雪月花、TAOYAなど、滞在中お財布を一度も開かない究極のリゾート。
            </p>
          </Link>

          <Link
            href="/posts/sauna-resort-hotels-ranking-japan-guide/"
            className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-teal-400/30 hover:border-teal-400 transition block group space-y-2 shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-teal-300 bg-teal-950/80 px-2.5 py-0.5 rounded-md border border-teal-500/30">
                🧖 サウナシュラン＆サ旅
              </span>
              <span className="text-[10px] text-stone-400">14,000文字超</span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-teal-200 transition line-clamp-2 leading-snug">
              【全国サウナが凄いホテル＆名旅館TOP12】らかんの湯・北こぶし知床・マウント富士
            </h3>
            <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
              天然伏流水水風呂、絶景外気浴、科学的ととのいメカニズム、名物サウナ飯（サ飯）まで完全個別取材。
            </p>
          </Link>

          <Link
            href="/posts/newyear-hatsumode-sunrise-ryokan-ranking-japan-hotels-guide/"
            className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-rose-400/30 hover:border-rose-400 transition block group space-y-2 shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-rose-300 bg-rose-950/80 px-2.5 py-0.5 rounded-md border border-rose-500/30">
                ⛩️ 初詣＆初日の出2026-2027
              </span>
              <span className="text-[10px] text-stone-400">12,000文字超</span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-rose-200 transition line-clamp-2 leading-snug">
              【年末年始・初詣＆初日の出温泉旅行】伊勢神宮・出雲大社・富士山近くの開運旅館12選
            </h3>
            <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
              早朝参拝の混雑回避裏ワザ、神社仏閣の参拝作法、年越し蕎麦とお雑煮ご当地文化、2泊3日黄金ルート。
            </p>
          </Link>

          <Link
            href="/posts/furusato-tax-luxury-ryokan-ranking-japan-hotels-guide/"
            className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-amber-400/30 hover:border-amber-400 transition block group space-y-2 shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded-md border border-amber-500/30">
                💰 実質2,000円宿泊
              </span>
              <span className="text-[10px] text-stone-400">11,600文字超</span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-amber-200 transition line-clamp-2 leading-snug">
              【楽天ふるさと納税×高級宿】還元率30%クーポンで泊まる憧れの最高峰旅館12選
            </h3>
            <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
              年末の駆け込み寄附完全攻略！寄附上限の計算式、客室露天風呂付き離れ、あとから割引の裏ワザ解説。
            </p>
          </Link>

          <Link
            href="/posts/winter-crab-onsen-hotels-ranking-matuba-echizen-guide/"
            className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-red-400/30 hover:border-red-400 transition block group space-y-2 shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-red-300 bg-red-950/80 px-2.5 py-0.5 rounded-md border border-red-500/30">
                🦀 冬の味覚・カニ解禁
              </span>
              <span className="text-[10px] text-stone-400">11,800文字超</span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-red-200 transition line-clamp-2 leading-snug">
              【日本海カニ旅行】松葉ガニ・越前がに・間人ガニ解禁！タグ付き活蟹が食べられる宿12選
            </h3>
            <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
              本場タグ付き越前がに・松葉ガニ・間人ガニ！刺身・焼き・茹で・甲羅味噌・カニすき雑炊の極み。
            </p>
          </Link>
        </div>
      </section>

"""

if target in text:
    new_text = text.replace(target, killer_section + target)
    with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
        f.write(new_text)
    print('Successfully inserted Killer Features section into Home page!')
else:
    print('Target not found in src/app/page.tsx')
