import re

with open('src/app/prefectures/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

hero_end = text.find('</section>') + 10

killer_nav_section = '''
      {/* 2026-2027 最強メガヒット特集ハブナビゲーション */}
      <section className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-stone-950 via-teal-950 to-stone-900 text-white shadow-xl border border-teal-500/30 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-400/40">
              NATIONAL KILLER FEATURES 2026-2027
            </span>
            <h2 className="text-xl md:text-2xl font-black text-white mt-1.5 font-journal-serif">
              🔥 全国の旅行者が選ぶ「メガヒット決定版キラー特集」
            </h2>
          </div>
          <span className="text-xs text-stone-400 font-medium">楽天トラベル公式データ連携</span>
        </div>
        <p className="text-xs md:text-sm text-stone-300 leading-relaxed">
          都道府県別の観光情報に加え、当サイト編集部が現地取材と最新口コミデータをもとに徹底分析した全国横断の特選ガイドです。温泉、オールインクルーシブ、サウナ、ふるさと納税、冬の味覚まで、一生に一度は訪れたい最高峰宿を比較できます。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
          <Link href="/posts/japan-onsen-ranking-best-hotels-guide/" className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group space-y-1.5">
            <span className="text-[10px] text-amber-300 font-extrabold px-2 py-0.5 rounded bg-amber-950/60 inline-block">♨️ 全国温泉地ランキング</span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
              【日本全国温泉地ランキングTOP12】草津・箱根・有馬・由布院・別府・城崎の名旅館徹底比較
            </h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">泉質・効能・絶景露天風呂・宿泊目安まで完全網羅</p>
          </Link>

          <Link href="/posts/all-inclusive-onsen-resort-ranking-japan-hotels-guide/" className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group space-y-1.5">
            <span className="text-[10px] text-indigo-300 font-extrabold px-2 py-0.5 rounded bg-indigo-950/60 inline-block">🍷 オールインクルーシブ</span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-indigo-200 transition line-clamp-2">
              【全国オールインクルーシブ温泉宿TOP12】ビール・地酒・夜食・貸切風呂まで全て無料
            </h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">松島一の坊・アンダリゾート・雪月花など追加料金一切なし</p>
          </Link>

          <Link href="/posts/sauna-resort-hotels-ranking-japan-guide/" className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group space-y-1.5">
            <span className="text-[10px] text-teal-300 font-extrabold px-2 py-0.5 rounded bg-teal-950/60 inline-block">🧖 サウナシュラン＆サ旅</span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-teal-200 transition line-clamp-2">
              【全国サウナが凄いホテル＆名旅館TOP12】らかんの湯・北こぶし知床・マウント富士
            </h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">天然伏流水水風呂・絶景外気浴・サウナ飯（サ飯）まで深掘り</p>
          </Link>

          <Link href="/posts/newyear-hatsumode-sunrise-ryokan-ranking-japan-hotels-guide/" className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group space-y-1.5">
            <span className="text-[10px] text-rose-300 font-extrabold px-2 py-0.5 rounded bg-rose-950/60 inline-block">⛩️ 初詣＆初日の出</span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-rose-200 transition line-clamp-2">
              【年末年始・初詣＆初日の出温泉旅行】伊勢神宮・出雲大社・富士山近くの開運旅館12選
            </h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">早朝参拝の混雑回避・年越し特別会席・お正月モデルコース</p>
          </Link>

          <Link href="/posts/furusato-tax-luxury-ryokan-ranking-japan-hotels-guide/" className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group space-y-1.5">
            <span className="text-[10px] text-amber-300 font-extrabold px-2 py-0.5 rounded bg-amber-950/60 inline-block">💰 実質2000円宿泊</span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
              【楽天ふるさと納税×高級宿】還元率30%クーポンで泊まる憧れの最高峰旅館12選
            </h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">寄附上限の計算式・名門客室露天風呂・年末年始の駆け込み攻略</p>
          </Link>

          <Link href="/posts/winter-crab-onsen-hotels-ranking-matuba-echizen-guide/" className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group space-y-1.5">
            <span className="text-[10px] text-red-300 font-extrabold px-2 py-0.5 rounded bg-red-950/60 inline-block">🦀 冬の味覚・カニ解禁</span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-red-200 transition line-clamp-2">
              【日本海カニ旅行】松葉ガニ・越前がに・間人ガニ解禁！タグ付き活蟹が食べられる宿12選
            </h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">刺身・炭火焼き・茹で・甲羅味噌・カニすき雑炊のフルコース</p>
          </Link>
        </div>
      </section>
'''

if 'NATIONAL KILLER FEATURES 2026-2027' not in text:
    new_text = text[:hero_end] + killer_nav_section + text[hero_end:]
    with open('src/app/prefectures/page.tsx', 'w', encoding='utf-8') as f:
        f.write(new_text)
    print('Updated src/app/prefectures/page.tsx successfully!')
else:
    print('Already present in page.tsx')
