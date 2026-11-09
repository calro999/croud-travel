import re

with open('src/app/prefectures/[pref]/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

pos1 = text.find('ALL ARTICLES & HOTELS')
start_block = text.rfind('{(() => {', 0, pos1)
end_block = text.find('})()', pos1) + 4

new_hub_section = '''{(() => {
        const cleanPref = prefInfo.name.replace(/(県|府|東京都)$/, "");
        const prefPosts = allPosts.filter(
          p => p.prefecture === prefInfo.name || p.prefecture.includes(cleanPref)
        );
        if (prefPosts.length === 0) return null;

        // 全国キラー記事（全県共通の最重要トラフィックハブ）
        const nationalKillerGuides = allPosts.filter(p => 
          p.id === 'japan-onsen-ranking-best-hotels-guide' ||
          p.id === 'all-inclusive-onsen-resort-ranking-japan-hotels-guide' ||
          p.id === 'sauna-resort-hotels-ranking-japan-guide' ||
          p.id === 'newyear-hatsumode-sunrise-ryokan-ranking-japan-hotels-guide' ||
          p.id === 'furusato-tax-luxury-ryokan-ranking-japan-hotels-guide' ||
          p.id === 'winter-snow-onsen-roten-ranking-japan-hotels-guide' ||
          p.id === 'winter-crab-onsen-hotels-ranking-matuba-echizen-guide'
        );

        // 都道府県別の特化キラー記事（有名なもの・観光名所＆温泉ランキングなど）
        const prefFeaturePosts = prefPosts.filter(p => 
          p.id.includes('famous-things') || 
          p.id.includes('onsen-ranking') || 
          p.id.includes('guide') ||
          p.is_special_feature
        );

        // エリア別・個別ホテル宿泊ルポ記事
        const hotelReportPosts = prefPosts.filter(p => !prefFeaturePosts.some(fp => fp.id === p.id));

        return (
          <section className="scroll-mt-24 space-y-8 bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm">
            {/* ハブヘッダー */}
            <div className="border-b border-emerald-950/10 pb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3.5 py-1 rounded-full uppercase tracking-wider">
                  PREFECTURE TRAVEL HUB & DIRECTORY
                </span>
                <h3 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 mt-2">
                  🗺️ 【{prefInfo.name}】完全攻略トラベルハブ＆全記事ディレクトリ（全{prefPosts.length}件）
                </h3>
              </div>
              <span className="text-xs text-stone-500 font-bold bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-200">
                楽天トラベル公式データ連携
              </span>
            </div>

            <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
              {prefInfo.name}の観光名所、ご当地名物グルメ、お土産、地酒、そして厳選された温泉旅館やリゾートホテルの全記事インデックスです。目的やエリアに合わせて気になるガイド記事をチェックしてください。
            </p>

            {/* ① 都道府県の二大決定版キラー記事（有名なもの＆温泉ランキング） */}
            {prefFeaturePosts.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-amber-200 pb-2">
                  <span className="text-base font-bold text-amber-950">🌟 【{prefInfo.name}】必読の完全攻略決定版ガイド</span>
                  <span className="text-[10px] bg-amber-500 text-white font-extrabold px-2 py-0.5 rounded-full">人気TOP</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {prefFeaturePosts.slice(0, 4).map((post) => (
                    <Link
                      key={post.id}
                      href={`/posts/${post.id}/`}
                      className="group p-4 rounded-2xl bg-gradient-to-br from-amber-50/60 to-stone-50 hover:from-amber-100/60 hover:to-teal-50/60 border border-amber-300/60 hover:border-amber-500/60 shadow-xs hover:shadow-md transition duration-200 flex gap-4 items-center"
                    >
                      <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-stone-200 shadow-xs">
                        {post.image ? (
                          <img
                            src={post.image}
                            alt={post.title}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-stone-400 text-xs">No Pic</div>
                        )}
                      </div>
                      <div className="flex-grow min-w-0 space-y-1.5">
                        <span className="inline-block text-[9px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-md">
                          特設ガイド
                        </span>
                        <h4 className="text-xs md:text-sm font-bold text-stone-900 line-clamp-2 group-hover:text-amber-800 transition leading-snug">
                          {post.title}
                        </h4>
                        <div className="flex items-center justify-between text-[10px] text-stone-500 font-medium">
                          <span className="truncate max-w-[140px]">{post.area || post.prefecture}</span>
                          {post.rating && <span className="text-amber-600 font-bold shrink-0">⭐ {post.rating}</span>}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* ② 全国横断キラー特集への相互誘導バナー */}
            {nationalKillerGuides.length > 0 && (
              <div className="p-5 md:p-6 rounded-2xl bg-gradient-to-r from-stone-900 via-teal-950 to-stone-900 text-white space-y-3 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 tracking-wider">🔥 日本全国メガヒットキラー特集</span>
                  <span className="text-[10px] text-stone-400 font-medium">全国ランキングで比較</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
                  {nationalKillerGuides.map((guide) => (
                    <Link
                      key={guide.id}
                      href={`/posts/${guide.id}/`}
                      className="p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition block space-y-1"
                    >
                      <span className="text-[10px] text-teal-300 font-bold block truncate">
                        {guide.categories ? guide.categories[0] : '全国特集'}
                      </span>
                      <p className="text-xs font-bold text-white line-clamp-2 leading-tight hover:text-amber-300 transition">
                        {guide.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* ③ 個別ホテル・宿泊ルポ・温泉宿ディレクトリ一覧 */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                <h4 className="text-sm md:text-base font-bold text-stone-900">
                  🏨 【{prefInfo.name}】厳選ホテル・旅館宿泊ルポ＆エリア別記事一覧
                </h4>
                <span className="text-xs text-stone-500 font-medium">
                  {hotelReportPosts.length > 0 ? `${hotelReportPosts.length}件の宿ルポ` : '全記事一覧'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {(hotelReportPosts.length > 0 ? hotelReportPosts : prefPosts).map((post) => (
                  <Link
                    key={post.id}
                    href={`/posts/${post.id}/`}
                    className="group p-3 rounded-xl bg-stone-50 hover:bg-teal-50/50 border border-stone-200 hover:border-teal-700/30 transition duration-200 flex gap-3 items-center"
                  >
                    <div className="w-14 h-14 shrink-0 rounded-lg overflow-hidden bg-stone-200">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.hotel_name || post.title}
                          width={56}
                          height={56}
                          className="w-full h-full object-cover group-hover:scale-105 transition"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-stone-400 text-[10px]">No Pic</div>
                      )}
                    </div>
                    <div className="flex-grow min-w-0 space-y-0.5">
                      <h5 className="text-[11px] font-bold text-stone-900 line-clamp-2 group-hover:text-teal-800 transition leading-snug">
                        {post.title}
                      </h5>
                      <div className="flex items-center justify-between text-[10px] text-stone-500 font-medium">
                        <span className="truncate max-w-[110px]">{post.area || post.prefecture}</span>
                        {post.price && (
                          <span className="text-red-600 font-bold shrink-0">
                            {typeof post.price === 'number' ? `¥${post.price.toLocaleString()}〜` : post.price}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}'''

new_text = text[:start_block] + new_hub_section + text[end_block:]

with open('src/app/prefectures/[pref]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(new_text)

print('Successfully upgraded page.tsx')
