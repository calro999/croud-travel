import json
import urllib.parse

with open('scratch/hyobaku_10_hotels.json', 'r', encoding='utf-8') as f:
    hotels = json.load(f)

aff_id = '54d2a438.4bc4abc2.54d2a439.aa1be583'

def make_aff_url(no):
    target = f'https://travel.rakuten.co.jp/HOTEL/{no}/{no}.html'
    return f'https://hb.afl.rakuten.co.jp/hgc/{aff_id}/?pc={urllib.parse.quote(target, safe="")}'

review_parts = [
    '<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-cyan-600 pb-2 mb-4">【2026年最新】冬の奇跡！氷瀑・雪見の氷滝露天風呂が素晴らしいおすすめ温泉宿10選！名門比較</h2>',
    '<p class="text-sm text-stone-700 leading-relaxed my-3 font-medium">真冬の極寒が織りなす大自然の芸術「氷瀑（ひょうばく）」。激しく流れ落ちていた滝が一瞬にして凍りつき、巨大な青白い氷柱となって静止するその光景は、冬の日本でしか出会えない神秘の絶景です。世界初の氷瀑露天風呂を備える青森・奥入瀬渓流（星野リゾート 奥入瀬渓流ホテル）をはじめ、巨大な氷の宮殿が出現する北海道・層雲峡（ホテル大雪・朝陽亭・層雲峡観光ホテル）、タルマかねこおり氷瀑ライトアップが幻想的な岐阜・奥飛騨温泉郷（奥飛騨ガーデンホテル焼岳）、名取川渓谷の雪見滝を望む宮城・秋保温泉（伝承千年の宿佐勘・秋保グランドホテル）、320段の階段を下りる野天風呂から名瀑を仰ぐ栃木・那須塩原温泉（湯守田中屋）、中庭の雪見滝が美しい山形・天童温泉（滝の湯）まで、白銀の雪景色と神秘的な氷瀑・雪見滝を温泉に浸かりながら堪能できる名門宿10選を本音で比較レビューします。全施設、楽天トラベル公式最新空室リンク付き。</p>',
    '<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950 text-white border border-cyan-500/30 shadow-xl p-6 md:p-8">',
    '<h3 class="text-lg font-bold text-cyan-300 mb-3">🧊 なぜ「冬の氷瀑・雪見氷滝露天風呂」は究極の非日常体験なのか？</h3>',
    '<p class="text-xs text-stone-200 leading-relaxed mb-3">氷点下の冷気に包まれた渓谷で、青白く凍てつく巨大な氷瀑を目の前にしながら熱々の天然温泉に浸かる体験は、<strong>「極限の寒さと極上の温もりが生み出す究極の癒やし（温冷のコントラスト）」</strong>です。</p>',
    '<p class="text-xs text-stone-200 leading-relaxed mb-3">特に夜の「氷瀑ライトアップ」では、照明に照らされた氷柱がエメラルドグリーンやブルーに幻想的に輝き、湯けむりの向こうに<strong>「まるで雪と氷の異世界に迷い込んだかのような感動体験」</strong>が広がります。</p>',
    '<p class="text-xs text-stone-200 leading-relaxed">静寂の中で湯の流れる音と雪の気配を感じ、地元の特選牛や冬の味覚鍋を味わう氷瀑温泉ステイは、冬の寒さを最高の贅沢に変えてくれる特別な旅になります。</p>',
    '</div>',
    '<h2 class="text-xl font-bold text-stone-900 border-b border-cyan-300 pb-2 my-8">🧭 失敗しない「氷瀑・雪見滝温泉宿」選び4大チェックポイント</h2>',
    '<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-cyan-950 flex items-center gap-2"><span class="px-2 py-0.5 bg-cyan-600 text-white text-xs font-black rounded-md">POINT</span>基準1：露天風呂から氷瀑・雪見滝が見えるか（または氷瀑名所・ツアー至近）</h4><p class="text-xs text-stone-600 leading-relaxed">浴槽から直接氷瀑や雪見滝を望めるか、宿主催の氷瀑ライトアップツアーや氷瀑まつり会場へ直行できるかを検証。</p></div>',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-cyan-950 flex items-center gap-2"><span class="px-2 py-0.5 bg-cyan-600 text-white text-xs font-black rounded-md">POINT</span>基準2：体の芯まで温まる濃厚な源泉かけ流し・雪見温泉</h4><p class="text-xs text-stone-600 leading-relaxed">冬の寒さを忘れさせる湯量豊富な天然温泉（塩化物泉・硫酸塩泉・炭酸水素塩泉）を備えているかを重視。</p></div>',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-cyan-950 flex items-center gap-2"><span class="px-2 py-0.5 bg-cyan-600 text-white text-xs font-black rounded-md">POINT</span>基準3：冬の味覚を満喫する郷土会席・あったか特選鍋</h4><p class="text-xs text-stone-600 leading-relaxed">ブランド牛のすき焼きや郷土鍋、冬の日本海の海の幸など、温まる夕食を提供しているかをセレクト。</p></div>',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-cyan-950 flex items-center gap-2"><span class="px-2 py-0.5 bg-cyan-600 text-white text-xs font-black rounded-md">POINT</span>基準4：楽天トラベルクチコミ・温泉評価の圧倒的高さ</h4><p class="text-xs text-stone-600 leading-relaxed">実際に宿泊した旅行者から「雪見露天風呂と氷瀑の絶景に感動した」と絶賛される宿を厳選。</p></div>',
    '</div>',
    '<h2 class="text-xl font-bold text-stone-900 border-b border-cyan-300 pb-2 my-8">📊 氷瀑・雪見滝温泉宿おすすめ10選のスペック比較一覧表</h2>',
    '<div class="my-6 overflow-x-auto rounded-2xl border border-stone-300 shadow-sm"><table class="w-full text-left text-xs text-stone-700 bg-white"><thead class="bg-stone-900 text-cyan-300 font-bold border-b border-stone-300"><tr><th class="p-3">順位・宿名</th><th class="p-3">所在地</th><th class="p-3">氷瀑・雪見滝の目玉</th><th class="p-3">温泉・露天風呂</th><th class="p-3">冬の味覚ディナー</th><th class="p-3">クチコミ</th></tr></thead><tbody class="divide-y divide-stone-200">',
    '<tr class="hover:bg-cyan-50/50"><td class="p-3 font-bold text-stone-900">第1位 ほほえみの宿 滝の湯</td><td class="p-3">山形 天童温泉</td><td class="p-3 font-bold text-cyan-800">中庭の雪見滝を望む広大な大浴場露天風呂</td><td class="p-3">天童温泉の美肌名湯・開放的露天風呂</td><td class="p-3 font-bold text-stone-800">山形牛すき焼き・特選懐石</td><td class="p-3 font-bold text-cyan-800">⭐ 4.56</td></tr>',
    '<tr class="hover:bg-cyan-50/50"><td class="p-3 font-bold text-stone-900">第2位 奥入瀬渓流ホテル 星野リゾート</td><td class="p-3">青森 奥入瀬渓流</td><td class="p-3 font-bold text-cyan-800">世界初「氷瀑露天風呂」＆渓流氷瀑ツアー</td><td class="p-3">渓流を望む氷瀑露天風呂・八甲田山名湯</td><td class="p-3 font-bold text-stone-800">フレンチ「Sonore」・りんごブッフェ</td><td class="p-3 font-bold text-cyan-800">⭐ 4.45</td></tr>',
    '<tr class="hover:bg-cyan-50/50"><td class="p-3 font-bold text-stone-900">第3位 奥飛騨ガーデンホテル焼岳</td><td class="p-3">岐阜 奥飛騨新平湯</td><td class="p-3 font-bold text-cyan-800">タルマかねこおり氷瀑ライトアップ至近</td><td class="p-3">超希少エメラルド深緑のうぐいすの湯</td><td class="p-3 font-bold text-stone-800">飛騨牛すき焼き・すっぽん料理</td><td class="p-3 font-bold text-cyan-800">⭐ 4.45</td></tr>',
    '<tr class="hover:bg-cyan-50/50"><td class="p-3 font-bold text-stone-900">第4位 伝承千年の宿 佐勘</td><td class="p-3">宮城 秋保温泉</td><td class="p-3 font-bold text-cyan-800">名取川の雪見渓谷と名瀑を望む名取の御湯</td><td class="p-3">源氏ゆかりの名湯・河原の雪見露天風呂</td><td class="p-3 font-bold text-stone-800">仙台牛・秋保創作会席</td><td class="p-3 font-bold text-cyan-800">⭐ 4.44</td></tr>',
    '<tr class="hover:bg-cyan-50/50"><td class="p-3 font-bold text-stone-900">第5位 ホテル大雪 ONSEN＆CANYON</td><td class="p-3">北海道 層雲峡</td><td class="p-3 font-bold text-cyan-800">層雲峡氷瀑まつり拠点＆大雪山パノラマ</td><td class="p-3">3つの大浴場と2つの雪見展望露天風呂</td><td class="p-3 font-bold text-stone-800">北海道味覚ビュッフェ</td><td class="p-3 font-bold text-cyan-800">⭐ 4.40</td></tr>',
    '<tr class="hover:bg-cyan-50/50"><td class="p-3 font-bold text-stone-900">第6位 塩原温泉 湯守田中屋</td><td class="p-3">栃木 那須塩原</td><td class="p-3 font-bold text-cyan-800">320段の階段を下りる野天風呂から望む名瀑</td><td class="p-3">箒川渓谷の源泉かけ流し野天風呂</td><td class="p-3 font-bold text-stone-800">囲炉裏炉端焼き・とちぎ和牛</td><td class="p-3 font-bold text-cyan-800">⭐ 4.37</td></tr>',
    '<tr class="hover:bg-cyan-50/50"><td class="p-3 font-bold text-stone-900">第7位 秋保グランドホテル</td><td class="p-3">宮城 秋保温泉</td><td class="p-3 font-bold text-cyan-800">磊々峡の雪見渓谷と滝を一望するインフィニティ露天</td><td class="p-3">本館＆別館の多彩な雪見露天風呂</td><td class="p-3 font-bold text-stone-800">蟹・ステーキ・豪華バイキング</td><td class="p-3 font-bold text-cyan-800">⭐ 4.27</td></tr>',
    '<tr class="hover:bg-cyan-50/50"><td class="p-3 font-bold text-stone-900">第8位 湯ヶ島たつた</td><td class="p-3">静岡 天城湯ヶ島</td><td class="p-3 font-bold text-cyan-800">狩野川渓谷の雪見滝を望む川端露天風呂</td><td class="p-3">自家源泉掛け流し渓流露天風呂</td><td class="p-3 font-bold text-stone-800">名物わさび鍋会席</td><td class="p-3 font-bold text-cyan-800">⭐ 4.27</td></tr>',
    '<tr class="hover:bg-cyan-50/50"><td class="p-3 font-bold text-stone-900">第9位 層雲峡 朝陽亭</td><td class="p-3">北海道 層雲峡</td><td class="p-3 font-bold text-cyan-800">層雲峡氷瀑まつり拠点＆最上階展望雪見風呂</td><td class="p-3">最上階展望大浴場「黒岳」・白濁露天</td><td class="p-3 font-bold text-stone-800">炭火焼きバイキング</td><td class="p-3 font-bold text-cyan-800">⭐ 3.89</td></tr>',
    '<tr class="hover:bg-cyan-50/50"><td class="p-3 font-bold text-stone-900">第10位 層雲峡観光ホテル</td><td class="p-3">北海道 層雲峡</td><td class="p-3 font-bold text-cyan-800">層雲峡最大級の峡谷大露天風呂「宇旅羅」</td><td class="p-3">水着で混浴できる巨大峡谷露天風呂</td><td class="p-3 font-bold text-stone-800">北海道郷土バイキング</td><td class="p-3 font-bold text-cyan-800">⭐ 3.66</td></tr>',
    '</tbody></table></div>',
    '<h2 class="text-xl font-bold text-stone-900 border-b-2 border-cyan-600 pb-2 my-8">🏆 【徹底検証】氷瀑・雪見滝温泉宿おすすめ10選の本音レビュー</h2>'
]

# 宿1: ほほえみの宿 滝の湯
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-cyan-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs rounded-xl shadow-sm">第1位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">山形 天童温泉 天童温泉 ほほえみの宿 滝の湯</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 山形県天童市鎌田本町1-1-30</span><span class="px-3 py-1 bg-cyan-50 text-cyan-800 border border-cyan-300 font-black text-xs rounded-full shadow-sm">⭐ 4.56</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🧊</span> 氷瀑・雪見体験：楽天★4.56！中庭の雪見滝を望む広大な大浴場露天風呂＆極上山形牛懐石</h4><p class="text-xs text-stone-700 leading-relaxed">「冬の白銀に染まる日本庭園の滝を露天風呂から眺め、山形が誇る極上山形牛のすき焼きやすっぽん鍋を味わい、伝統のおもてなしに癒やされたい」という贅沢な冬の温泉旅に第1位です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/53746/53746.jpg" alt="ほほえみの宿 滝の湯" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-cyan-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 中庭の雪見滝露天:</span> 冬の白銀とライトアップされた名滝を一望</div><div><span class="text-stone-400">■ 自家源泉の美肌温泉:</span> ナトリウム・カルシウム硫酸塩泉の良泉</div><div><span class="text-stone-400">■ 極上山形牛懐石:</span> A5ランク山形牛のすき焼き・ステーキ</div><div><span class="text-stone-400">■ 竜王戦の舞台:</span> 将棋のタイトル戦が開催される格式ある名門宿</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> JR天童駅無料送迎あり＋楽天日本の宿アワード受賞＋楽天4.56</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「中庭の美しい雪見滝を眺めながら広々とした名湯露天風呂に浸かり、最高峰の山形牛懐石を堪能したい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">将棋のまち・天童を代表する老舗名門旅館。広大な大浴場の露天風呂からは、冬になると白銀に包まれる中庭の滝が望め、夜には幻想的にライトアップ。自家農園で育てた無農薬野菜や、とろけるようなA5ランク山形牛のすき焼きは絶品で、細やかな接客サービスと合わせて満足度が極めて高い宿です。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「別館 滝の湯倶楽部 / 温泉露天風呂付客室」（上質な和モダン特別室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「特選山形牛すき焼き＆旬の味覚懐石ディナープラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR山形新幹線「天童駅」より車約5分（無料送迎あり）。山形空港より車約15分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 16:00雪見滝露天風呂 → 18:30特選山形牛懐石ディナー → 21:00ライトアップ庭園鑑賞【2日目】07:30朝風呂 → 08:30和朝食 → 10:00山寺（立石寺）へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">山奥の鄙びた秘湯のみを好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border-2 border-cyan-300"><h4 class="font-black text-cyan-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-cyan-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-cyan-950 font-bold">雪見滝露天風呂×山形牛すき焼き×将棋竜王戦の宿×楽天4.56。山形を代表する格式高い名門温泉宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※天童駅より無料送迎あり</span><span class="text-xs font-black text-cyan-800">楽天日本の宿アワード受賞</span></div><a href="{make_aff_url(53746)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】天童温泉 ほほえみの宿 滝の湯の空室・最安プランを見る</span></a></div>
</div>''')

# 宿2: 奥入瀬渓流ホテル
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-cyan-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs rounded-xl shadow-sm">第2位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">青森 奥入瀬 奥入瀬渓流ホテル by 星野リゾート</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 青森県十和田市奥瀬栃久保231</span><span class="px-3 py-1 bg-cyan-50 text-cyan-800 border border-cyan-300 font-black text-xs rounded-full shadow-sm">⭐ 4.45</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🧊</span> 氷瀑・雪見体験：世界初「氷瀑露天風呂」！奥入瀬渓流の氷瀑ライトアップツアー＆フレンチ</h4><p class="text-xs text-stone-700 leading-relaxed">「冬の奥入瀬渓流沿いに建つ唯一のリゾートで、露天風呂の壁一面に再現された巨大な氷瀑を眺め、夜の氷瀑ライトアップバスツアーに参加したい」という圧倒的な冬絶景を求める方に最適です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/40434/40434.jpg" alt="奥入瀬渓流ホテル" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-cyan-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 世界初「氷瀑露天風呂」:</span> 湯船の壁に本物の氷瀑がそびえる圧巻の露天</div><div><span class="text-stone-400">■ 氷瀑ライトアップツアー:</span> 宿泊者限定の奥入瀬渓流ナイトバスツアー</div><div><span class="text-stone-400">■ 岡本太郎の巨大暖炉:</span> ラウンジ「森の神話」で味わうスイーツ</div><div><span class="text-stone-400">■ フレンチ「Sonore」:</span> 渓流の雪景色を望む極上の冬フレンチ</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 八戸駅・青森駅無料送迎バス運行＋星野リゾート＋楽天4.45</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「日本で最も有名な氷瀑露天風呂に浸かり、奥入瀬渓流の幻想的な氷瀑ライトアップを体験したい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">奥入瀬渓流のほとりに佇む冬の最高峰リゾート。名物の「氷瀑露天風呂」は、長い時間をかけて湯船の周囲に本物の氷瀑を作り上げた奇跡の湯処。青白く輝く氷の壁を間近に見ながら温まる体験は言葉にできない感動があります。夜には無料の氷瀑ライトアップツアーで馬門岩や銚子大滝の氷瀑を鑑賞できます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「渓流和室 / 露天風呂付客室」（奥入瀬渓流の雪景色を望む客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「青森りんごキッチンブッフェ / フレンチSonoreディナープラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR「八戸駅」「青森駅」より無料送迎バス運行（要予約・約90分）。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 16:00世界初の氷瀑露天風呂 → 18:00青森りんごブッフェ → 20:00氷瀑ライトアップバスツアー【2日目】07:30朝風呂 → 08:30朝食 → 10:00冬の渓流スノーシューツアーへ</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">低予算での素泊まりを希望する方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border-2 border-cyan-300"><h4 class="font-black text-cyan-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-cyan-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-cyan-950 font-bold">世界初氷瀑露天風呂×奥入瀬渓流氷瀑ツアー×岡本太郎暖炉×楽天4.45。冬の東北を代表する最高峰リゾートです。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※八戸駅・青森駅より無料送迎あり</span><span class="text-xs font-black text-cyan-800">星野リゾートの氷瀑ホテル</span></div><a href="{make_aff_url(40434)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】奥入瀬渓流ホテルの空室・最安プランを見る</span></a></div>
</div>''')

# 宿3: 奥飛騨ガーデンホテル焼岳
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-cyan-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs rounded-xl shadow-sm">第3位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">岐阜 奥飛騨新平湯 奥飛騨ガーデンホテル焼岳</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 岐阜県高山市奥飛騨温泉郷一重ケ根2498-1</span><span class="px-3 py-1 bg-cyan-50 text-cyan-800 border border-cyan-300 font-black text-xs rounded-full shadow-sm">⭐ 4.45</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🧊</span> 氷瀑・雪見体験：タルマかねこおり氷瀑ライトアップ至近！超希少エメラルド深緑のうぐいすの湯</h4><p class="text-xs text-stone-700 leading-relaxed">「冬の奥飛騨名物『タルマかねこおり氷瀑まつり』を鑑賞し、国内唯一の超深層エメラルドグリーンの自家源泉かけ流し露天風呂で温まり、飛騨牛すき焼きを味わいたい」という秘湯ファンに大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/27725/27725.jpg" alt="奥飛騨ガーデンホテル焼岳" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-cyan-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ タルマ氷瀑まつり至近:</span> 徒歩すぐの新平湯氷瀑ライトアップ会場</div><div><span class="text-stone-400">■ うぐいすの湯（超希少）:</span> 国内唯一のエメラルド深緑色自家源泉</div><div><span class="text-stone-400">■ 混浴雪見庭園露天:</span> 湯浴み着でカップル・家族一緒に浸かる名湯</div><div><span class="text-stone-400">■ 特選飛騨牛ディナー:</span> 飛騨牛すき焼き・せいろ蒸し・すっぽん</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 新平湯温泉バス停すぐ＋1泊9,000円台〜の良心価格＋楽天4.45</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「新平湯の幻想的な氷瀑ライトアップを間近で楽しみ、唯一無二のエメラルド深緑色の美肌温泉に浸かりたい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">奥飛騨温泉郷・新平湯温泉に佇む個性派リゾート。冬になると宿のすぐ裏手にあるタルマの滝が巨大な氷瀑「たるまかねこおり」となり、夜の青や緑のライトアップは息を呑む美しさ。自家源泉の「うぐいすの湯」は太古の地層から湧く奇跡のエメラルド深緑色で、湯浴み着を着て家族やカップルで混浴大露天風呂を楽しめます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「和室 / 露天風呂付き客室」（奥飛騨の雪景色を望む客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「飛騨牛すき焼き＆すっぽん鍋会席ディナープラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR高山駅より濃飛バス約60分「新平湯温泉」下車徒歩約1分。長野道「松本IC」より車約75分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 16:00うぐいすの湯＆雪見大露天風呂 → 18:30飛騨牛ディナー → 20:00タルマかねこおり氷瀑ライトアップ散策【2日目】07:30朝風呂 → 08:30和朝食 → 09:30新穂高ロープウェイへ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">混浴露天風呂（湯浴み着着用）が苦手な方（男女別大浴場もあり）。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border-2 border-cyan-300"><h4 class="font-black text-cyan-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-cyan-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-cyan-950 font-bold">タルマ氷瀑まつり至近×うぐいすの湯×飛騨牛会席×楽天4.45。奥飛騨で最も冬の魅力が詰まった宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※新平湯温泉バス停徒歩1分</span><span class="text-xs font-black text-cyan-800">エメラルドグリーンの名湯</span></div><a href="{make_aff_url(27725)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】奥飛騨ガーデンホテル焼岳の空室・最安プランを見る</span></a></div>
</div>''')

# 宿4: 伝承千年の宿 佐勘
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-cyan-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs rounded-xl shadow-sm">第4位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">宮城 秋保温泉 伝承千年の宿 佐勘（さかん）</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 宮城県仙台市太白区秋保町湯元薬師28</span><span class="px-3 py-1 bg-cyan-50 text-cyan-800 border border-cyan-300 font-black text-xs rounded-full shadow-sm">⭐ 4.44</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🧊</span> 氷瀑・雪見体験：名取川の雪見渓谷と名瀑を望む名取の御湯＆伊達政宗公ゆかりの名門旅館</h4><p class="text-xs text-stone-700 leading-relaxed">「伊達政宗公の湯浴み御殿であった千年以上の歴史を誇る名宿で、名取川の雪見滝を望む河原の露天風呂に浸かり、極上仙台牛会席を味わいたい」という記念日・ご家族旅行に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/63615/63615.jpg" alt="伝承千年の宿 佐勘" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-cyan-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 名取川の雪見名瀑:</span> 渓流沿いの河原の露天風呂から望む雪見滝</div><div><span class="text-stone-400">■ 名取の御湯:</span> 伊達政宗公が愛した格子造りの源泉風呂</div><div><span class="text-stone-400">■ 極上仙台牛会席:</span> 仙台牛ステーキ・三陸旬魚の特選和食</div><div><span class="text-stone-400">■ 千年の歴史建築:</span> 伝統の主屋とモダンな空間が美しく調和</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 仙台駅無料送迎バス毎日運行＋日本三御湯＋楽天4.44</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「日本屈指の歴史ある名門旅館で、名取川の雪見滝を望む名湯露天風呂と最高級の仙台牛会席を味わいたい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">仙台・秋保温泉のシンボル的名門宿。名取川の川底近くまで階段を下りた先にある「河原の湯」からは、冬の白銀に染まる渓谷と滝が間近に迫り、川のせせらぎと湯けむりに包まれる至高の湯浴みが叶います。夕食はダイニングや個室で仙台牛や三陸の冬魚介が美しく供され、満足度の高い滞在が約束されます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「飛天館 / 花館 和室・和洋室」（名取川を望む上質客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「仙台牛ステーキ＆三陸冬の味覚特選会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR「仙台駅」東口より無料送迎バス運行（約40分・要予約）。東北道「仙台南IC」より車約15分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30河原の湯雪見露天風呂 → 18:30仙台牛特選会席ディナー → 20:30名取の御湯【2日目】07:30朝風呂 → 08:30プレミアム朝食 → 10:00秋保大滝観光へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">小規模な宿のみを希望する方（館内が広いため）。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border-2 border-cyan-300"><h4 class="font-black text-cyan-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-cyan-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-cyan-950 font-bold">名取川雪見名瀑×日本三御湯佐勘×仙台牛会席×楽天4.44。東北が誇る千年の名旅館です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※仙台駅より毎日無料送迎バス運行</span><span class="text-xs font-black text-cyan-800">伝承千年の名門宿</span></div><a href="{make_aff_url(63615)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】伝承千年の宿 佐勘の空室・最安プランを見る</span></a></div>
</div>''')

# 宿5: ホテル大雪
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-cyan-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs rounded-xl shadow-sm">第5位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">北海道 層雲峡 ホテル大雪 ONSEN＆CANYON RESORT</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 北海道上川郡上川町層雲峡</span><span class="px-3 py-1 bg-cyan-50 text-cyan-800 border border-cyan-300 font-black text-xs rounded-full shadow-sm">⭐ 4.40</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🧊</span> 氷瀑・雪見体験：層雲峡氷瀑まつり拠点！層雲峡で最も高台に佇む3つの大浴場＆雪見露天風呂</h4><p class="text-xs text-stone-700 leading-relaxed">「北海道冬の二大イベント『層雲峡温泉氷瀑まつり』を鑑賞し、高台から大雪山の雪山パノラマを見渡す3つの大浴場と雪見展望露天風呂で温まりたい」という北海道冬旅に最適です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/40960/40960.jpg" alt="ホテル大雪" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-cyan-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 層雲峡氷瀑まつり至近:</span> 巨大な氷の宮殿が出現する会場へシャトル運行</div><div><span class="text-stone-400">■ 3つの大浴場＆露天:</span> 展望大浴峰・大雪乃湯・渓谷露天風呂</div><div><span class="text-stone-400">■ 層雲峡で最も高台:</span> 窓から大雪山系と層雲峡谷の雪景色を一望</div><div><span class="text-stone-400">■ 北海道味覚ビュッフェ:</span> ズワイガニ・海鮮丼・北海道牛ステーキ</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 旭川駅無料送迎バス運行＋1泊1万円前後〜＋楽天4.40</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「層雲峡の氷瀑まつりを満喫し、高台からの大パノラマ雪見露天風呂と北海道グルメビュッフェを楽しみたい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">層雲峡温泉街の高台に位置する大型リゾートホテル。館内には趣の異なる3つの大浴場があり、最上階の「大雪乃湯」からは白銀の大雪山連峰を一望。夜は氷瀑まつり会場でライトアップされた氷のドームや氷柱を鑑賞でき、冷え切った体を源泉かけ流しの温泉が優しく温めてくれます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「キャニオンビュー和モダン客室 / 展望風呂付特別室」（渓谷を一望する客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「北海道冬の味覚！蟹＆ステーキ豪華ビュッフェプラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR「旭川駅」より無料送迎バス運行（約110分・要予約）。旭川空港より車約90分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30高台展望雪見露天風呂 → 18:00北海道ビュッフェディナー → 19:30層雲峡氷瀑まつり会場へ【2日目】07:30朝風呂 → 08:30朝食ビュッフェ → 09:30黒岳ロープウェイへ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">少人数限定の小さな隠れ宿を好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border-2 border-cyan-300"><h4 class="font-black text-cyan-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-cyan-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-cyan-950 font-bold">層雲峡氷瀑まつり拠点×3つの湯巡り展望露天×北海道ビュッフェ×楽天4.40。層雲峡随一の高台絶景ホテルです。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※旭川駅より無料送迎バス運行</span><span class="text-xs font-black text-cyan-800">層雲峡の高台絶景リゾート</span></div><a href="{make_aff_url(40960)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】ホテル大雪の空室・最安プランを見る</span></a></div>
</div>''')

# 宿6: 湯守田中屋
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-cyan-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs rounded-xl shadow-sm">第6位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">栃木 那須塩原 塩原温泉 湯守田中屋</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 栃木県那須塩原市塩原6</span><span class="px-3 py-1 bg-cyan-50 text-cyan-800 border border-cyan-300 font-black text-xs rounded-full shadow-sm">⭐ 4.37</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🧊</span> 氷瀑・雪見体験：320段の階段を下りる野天風呂から望む名瀑！箒川の雪見渓谷＆囲炉裏料理</h4><p class="text-xs text-stone-700 leading-relaxed">「箒川の渓谷に沿って320段の階段を下りた先にある伝説の野天風呂で、対岸に落ちる滝と雪景色を仰ぎ、名物の炭火囲炉裏会席を味わいたい」という野趣あふれる温泉ファンに大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/31902/31902.jpg" alt="湯守田中屋" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-cyan-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 320段階段の野天風呂:</span> 箒川の渓流と対岸の滝を仰ぐ大自然の湯</div><div><span class="text-stone-400">■ 源泉掛け流し300L/分:</span> 加水加温なしの圧倒的湧出量を誇る良泉</div><div><span class="text-stone-400">■ 囲炉裏炉端焼き料理:</span> 鮎の塩焼き・とちぎ和牛・炭火焼き</div><div><span class="text-stone-400">■ 展望風呂「眺望の湯」:</span> 館内からも塩原渓谷の雪景色を一望</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 那須塩原駅よりバス約40分＋野天風呂の圧倒的秘境感＋楽天4.37</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「大自然の渓谷に抱かれた野天風呂で、雪見滝の豪快な景観と本物の源泉かけ流し、囲炉裏料理を楽しみたい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">塩原渓谷の大自然に包まれた名湯旅館。名物の野天風呂へは320段の石段を下りて向かいます。川のせせらぎと対岸の岩肌を流れる滝、雪景色が一体となった光景は圧巻の一言。夕食は囲炉裏端でじっくり炭火で焼き上げる鮎やとちぎ和牛を堪能でき、五感で自然の恵みを感じられます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「渓谷側 和室 / 和モダン客室」（箒川渓谷の雪景色を望む客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「名物！囲炉裏炉端焼き＆とちぎ和牛会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR東北新幹線「那須塩原駅」よりバス約40分。東北道「西那須野塩原IC」より車約20分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30 320段階段を下りて野天風呂へ → 18:30囲炉裏炉端焼きディナー【2日目】07:30朝風呂 → 08:30和朝食 → 10:00もみじ谷大吊橋へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">足腰に不安があり階段の上り下りが困難な方（館内内風呂もあり）。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border-2 border-cyan-300"><h4 class="font-black text-cyan-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-cyan-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-cyan-950 font-bold">320段階段野天風呂×雪見名瀑×炭火囲炉裏料理×楽天4.37。那須塩原屈指の野趣あふれる名湯宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※320段階段の野天風呂が名物</span><span class="text-xs font-black text-cyan-800">源泉掛け流しの湯守宿</span></div><a href="{make_aff_url(31902)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】塩原温泉 湯守田中屋の空室・最安プランを見る</span></a></div>
</div>''')

# 宿7: 秋保グランドホテル
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-cyan-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs rounded-xl shadow-sm">第7位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">宮城 秋保温泉 秋保温泉 秋保グランドホテル</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 宮城県仙台市太白区秋保町湯元枇杷原12-2</span><span class="px-3 py-1 bg-cyan-50 text-cyan-800 border border-cyan-300 font-black text-xs rounded-full shadow-sm">⭐ 4.27</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🧊</span> 氷瀑・雪見体験：磊々峡の雪見渓谷と滝を一望するインフィニティ露天風呂＆豪華ディナーバイキング</h4><p class="text-xs text-stone-700 leading-relaxed">「名勝・磊々峡（らいらいきょう）の雪景色と渓谷滝を見下ろすインフィニティ露天風呂に浸かり、蟹や牛タン、揚げたて天ぷらの豪華バイキングを満喫したい」というファミリー・グループに大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/15098/15098.jpg" alt="秋保グランドホテル" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-cyan-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 磊々峡雪見インフィニティ露天:</span> 渓谷の雪景色と滝を眼下に望む露天</div><div><span class="text-stone-400">■ 本館＆別館で湯巡り:</span> 4つの大浴場と多彩なサウナ完備</div><div><span class="text-stone-400">■ 豪華ディナーバイキング:</span> ズワイガニ・仙台牛タン・握り寿司</div><div><span class="text-stone-400">■ 磊々峡遊歩道直結:</span> 宿の庭園から雪の渓谷散策へすぐ</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 仙台駅無料送迎バス運行＋1泊1万円前後〜＋楽天4.27</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「磊々峡の雪見渓谷滝を露天風呂から眺め、豪華バイキングと温泉湯巡りをコスパ良く楽しみたい方」に最適です。</p></div>
<div class="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">名勝・磊々峡を唯一眼下に見下ろす絶好ロケーション。リニューアルされた別館のインフィニティ露天風呂からは、雪化粧した奇岩と滝が織りなすパノラマが一望できます。夕食バイキングはズワイガニや仙台名物牛タンが食べ放題で、コスパ抜群の冬旅が楽しめます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「峡谷側 和洋室 / ツイン」（磊々峡の雪景色を見下ろす客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「蟹・牛タン・握り寿司食べ放題！豪華ディナーバイキングプラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR「仙台駅」東口より無料送迎バス約40分（要予約）。東北道「仙台南IC」より車約15分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30磊々峡雪見インフィニティ露天 → 18:00豪華バイキングディナー【2日目】07:30朝風呂 → 08:30朝食バイキング → 10:00磊々峡雪道散歩へ</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">静かな部屋食での会席料理のみを好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border-2 border-cyan-300"><h4 class="font-black text-cyan-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-cyan-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-cyan-950 font-bold">磊々峡雪見露天×4つの大浴場湯巡り×蟹牛タンバイキング×楽天4.27。秋保温泉の王道リゾートホテルです。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※仙台駅より無料送迎バス運行</span><span class="text-xs font-black text-cyan-800">磊々峡を一望するホテル</span></div><a href="{make_aff_url(15098)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】秋保温泉 秋保グランドホテルの空室・最安プランを見る</span></a></div>
</div>''')

# 宿8: 湯ヶ島たつた
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-cyan-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs rounded-xl shadow-sm">第8位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">静岡 天城湯ヶ島 水のみち 風のみち 湯ヶ島たつた</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 静岡県伊豆市湯ヶ島347</span><span class="px-3 py-1 bg-cyan-50 text-cyan-800 border border-cyan-300 font-black text-xs rounded-full shadow-sm">⭐ 4.27</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🧊</span> 氷瀑・雪見体験：狩野川渓谷の雪見滝を望む川端露天風呂＆名物天城わさび鍋会席</h4><p class="text-xs text-stone-700 leading-relaxed">「文豪が愛した中伊豆・天城の渓谷美と名瀑を望む川端露天風呂に浸かり、名物のすりたて本生わさび鍋会席を味わいたい」という静かな大人の隠れ家ステイに最適です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8799/8799.jpg" alt="湯ヶ島たつた" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-cyan-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 狩野川渓谷の雪見滝:</span> 露天風呂の目の前を流れる清流と名滝</div><div><span class="text-stone-400">■ 川端露天風呂＆貸切露天:</span> 4つの無料貸切風呂でプライベート湯浴み</div><div><span class="text-stone-400">■ 名物わさび鍋会席:</span> 天城特産生わさびの香りが爽やかな特製鍋</div><div><span class="text-stone-400">■ 浄蓮の滝至近:</span> 伊豆屈指の名瀑「浄蓮の滝」観光拠点</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 修善寺駅よりバス約30分＋1泊1万円前後〜＋楽天4.27</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「天城の静寂な渓谷滝を眺めながら無料貸切露天風呂を巡り、名物わさび鍋を味わいたい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">伊豆・天城湯ヶ島の猫越川沿いに佇む風情ある湯宿。川のせせらぎと滝を間近に感じる露天風呂や、趣の異なる4つの貸切露天風呂が無料で利用できます。夕食は特産の生わさびをたっぷり使った「わさび鍋」が名物で、ツンとした辛味が消えて爽やかな香りと甘みが広がる絶品の鍋料理を楽しめます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「渓流側 和室 / 和モダン客室」（猫越川のせせらぎが心地よい客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「天城名物！すりたて本生わさび鍋＆伊豆会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>伊豆箱根鉄道「修善寺駅」より東海バス約30分「湯ヶ島温泉口」下車。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30川端露天風呂＆貸切風呂巡り → 18:30名物わさび鍋ディナー【2日目】07:30朝風呂 → 08:30和朝食 → 09:30浄蓮の滝観光へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">大規模なリゾートホテル施設を求める方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border-2 border-cyan-300"><h4 class="font-black text-cyan-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-cyan-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-cyan-950 font-bold">渓谷雪見滝×無料貸切露天風呂×名物わさび鍋×楽天4.27。中伊豆の風情ある隠れ温泉旅館です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※4つの無料貸切露天風呂完備</span><span class="text-xs font-black text-cyan-800">名物わさび鍋の渓流宿</span></div><a href="{make_aff_url(8799)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】水のみち 風のみち 湯ヶ島たつたの空室・最安プランを見る</span></a></div>
</div>''')

# 宿9: 層雲峡 朝陽亭
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-cyan-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs rounded-xl shadow-sm">第9位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">北海道 層雲峡 層雲峡 朝陽亭（ちょうようてい）</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 北海道上川郡上川町層雲峡温泉</span><span class="px-3 py-1 bg-cyan-50 text-cyan-800 border border-cyan-300 font-black text-xs rounded-full shadow-sm">⭐ 3.89</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🧊</span> 氷瀑・雪見体験：層雲峡氷瀑まつり拠点！最上階展望雪見風呂「黒岳」＆炭火焼きバイキング</h4><p class="text-xs text-stone-700 leading-relaxed">「層雲峡温泉の氷瀑まつりを満喫し、最上階のパノラマ大浴場から層雲峡谷の雪景色を眺め、炭火焼きバイキングを味わいたい」という北海道観光に人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5502/5502.jpg" alt="層雲峡 朝陽亭" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-cyan-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 氷瀑まつり会場至近:</span> 会場までの無料シャトルバス運行</div><div><span class="text-stone-400">■ 展望大浴場「黒岳」:</span> 峡谷の雪山パノラマを見下ろす最上階温泉</div><div><span class="text-stone-400">■ 炭火焼きバイキング:</span> 目の前で焼き上げるジンギスカンや海鮮</div><div><span class="text-stone-400">■ 姉妹館朝陽リゾート湯巡り:</span> 白濁硫黄泉など2つの館で湯巡り無料</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 札幌駅・旭川駅無料送迎バス運行＋大雪山国立公園</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「札幌や旭川からの無料送迎バスを利用して、層雲峡の氷瀑まつりと多彩な温泉湯巡りを楽しみたい方」に最適です。</p></div>
<div class="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">層雲峡の高台に建つ老舗温泉ホテル。最上階のガラス張り展望大浴場「黒岳」からは、雪化粧した層雲峡の柱状節理の断崖絶壁が広がり迫力満点。姉妹館「朝陽リゾートホテル」への無料湯巡りバスも運行しており、泉質の異なる白濁湯も一度に楽しめます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「和モダン客室 / 峡谷側和室」（大雪山の雪景色を望む客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「炭火焼き＆北海道郷土バイキングディナープラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR「札幌駅」「旭川駅」より無料送迎バス運行（要予約）。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30最上階展望雪見風呂 → 18:00炭火焼バイキング → 19:30層雲峡氷瀑まつり鑑賞【2日目】07:30朝風呂 → 08:30朝食バイキング → 09:30層雲峡銀河・流星の滝へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">最高級ホテルの設備クオリティのみを求める方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border-2 border-cyan-300"><h4 class="font-black text-cyan-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-cyan-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-cyan-950 font-bold">層雲峡氷瀑まつり拠点×最上階展望雪見風呂×姉妹館湯巡り。札幌・旭川からのアクセス抜群の温泉宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※札幌・旭川より無料送迎バス運行</span><span class="text-xs font-black text-cyan-800">層雲峡の展望名湯ホテル</span></div><a href="{make_aff_url(5502)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】層雲峡 朝陽亭の空室・最安プランを見る</span></a></div>
</div>''')

# 宿10: 層雲峡観光ホテル
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-cyan-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs rounded-xl shadow-sm">第10位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">北海道 層雲峡 家族混浴できる大露天風呂の宿 層雲峡観光ホテル</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 北海道上川郡上川町層雲峡</span><span class="px-3 py-1 bg-cyan-50 text-cyan-800 border border-cyan-300 font-black text-xs rounded-full shadow-sm">⭐ 3.66</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🧊</span> 氷瀑・雪見体験：層雲峡最大級の峡谷大露天風呂「宇旅羅（うたら）」＆氷瀑まつり散策（抜群コスパ）</h4><p class="text-xs text-stone-700 leading-relaxed">「層雲峡エリア最大級の広さを誇る峡谷雪見露天風呂『宇旅羅』で湯浴み着を着て家族やカップルで混浴し、氷瀑まつりをリーズナブルに楽しみたい」というコスパ派に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/38928/38928.jpg" alt="層雲峡観光ホテル" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-cyan-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 峡谷大露天風呂「宇旅羅」:</span> 層雲峡最大級の広さを誇る雪見露天風呂</div><div><span class="text-stone-400">■ 湯浴み着で家族混浴:</span> 男女一緒に楽しめる開放的な混浴露天</div><div><span class="text-stone-400">■ 氷瀑まつり会場徒歩圏:</span> 温泉街のメイン通りに位置する抜群の立地</div><div><span class="text-stone-400">■ 北海道バイキング:</span> 好きなものを自由に味わえる郷土バイキング</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 1泊5,000円〜の圧倒的コスパ＋層雲峡バス停徒歩約5分</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「層雲峡の氷瀑まつりを徒歩で気軽に楽しみ、巨大な峡谷雪見露天風呂を圧倒的コスパで体験したい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">層雲峡温泉の中心街に建つ大型観光ホテル。自慢の峡谷大露天風呂「宇旅羅」は約200名が一度に入れるほどの圧倒的スケールで、湯浴み着を着用して白銀の雪山と渓谷を眺めながらカップルやファミリーで一緒に温泉を満喫できます。氷瀑まつり会場へも歩いてアクセスでき、抜群の利便性を誇ります。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「和室 / 和洋室」（層雲峡の雪山を望むスタンダード客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「北海道郷土料理バイキングディナープラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR「上川駅」より道北バス約30分「層雲峡」下車徒歩約5分。旭川紋別道「上川層雲峡IC」より車約25分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30大露天風呂「宇旅羅」で雪見混浴 → 18:00バイキングディナー → 19:30氷瀑まつり鑑賞【2日目】07:30朝風呂 → 08:30朝食バイキング → 10:00銀河・流星の滝へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">高級ホテルのラグジュアリー感を最重視する方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border-2 border-cyan-300"><h4 class="font-black text-cyan-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-cyan-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-cyan-950 font-bold">巨大露天「宇旅羅」混浴×氷瀑まつり徒歩圏×1泊5,000円〜の圧倒的コスパ。層雲峡観光の王道格安ホテルです。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※層雲峡バス停徒歩5分・氷瀑まつり至近</span><span class="text-xs font-black text-cyan-800">巨大混浴露天風呂の宿</span></div><a href="{make_aff_url(38928)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】層雲峡観光ホテルの空室・最安プランを見る</span></a></div>
</div>''')

# FAQ・関連記事ナビ
review_parts.append('''<h2 class="text-xl font-bold text-stone-900 border-b-2 border-cyan-500 pb-2 my-8">💡 氷瀑・雪見滝に関するよくある質問（FAQ）</h2>
<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
      <span class="px-2 py-0.5 bg-cyan-600 text-white text-xs font-black rounded-md">Q</span>
      氷瀑（凍結滝）が最も綺麗に見られるベストシーズンはいつ？
    </h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-cyan-200">
      <span class="font-bold text-cyan-700">A.</span> 最も気温が下がり氷が発達する<strong>「1月中旬から2月下旬」</strong>がベストシーズンです。奥入瀬渓流の氷瀑や層雲峡温泉氷瀑まつり、タルマかねこおり氷瀑まつりなど、この時期に合わせてライトアップイベントが開催されます。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
      <span class="px-2 py-0.5 bg-cyan-600 text-white text-xs font-black rounded-md">Q</span>
      冬の氷瀑鑑賞や雪見露天風呂旅行での服装や靴の注意点は？
    </h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-cyan-200">
      <span class="font-bold text-cyan-700">A.</span> 氷瀑鑑賞の夜間イベントは氷点下10度以下になることもあるため、<strong>「厚手のダウンコート・防寒手袋・ニット帽・カイロ」</strong>を必ずご用意ください。足元は滑り止め付きのスノーブーツや防水防寒靴が必須です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
      <span class="px-2 py-0.5 bg-cyan-600 text-white text-xs font-black rounded-md">Q</span>
      宿主催の氷瀑ライトアップバスツアーは予約が必要？
    </h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-cyan-200">
      <span class="font-bold text-cyan-700">A.</span> 星野リゾート奥入瀬渓流ホテルなどの専用ツアーは定員制のため、<strong>「宿泊予約完了後に公式サイトから事前予約」</strong>しておくことを強くおすすめします。層雲峡など温泉街で開催されるまつりは徒歩またはシャトルバスで自由に参加可能です。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-50 border border-stone-200/90 shadow-sm">
  <div class="flex items-center gap-2 mb-3 border-b border-stone-200 pb-2">
    <span class="px-2.5 py-0.5 bg-stone-800 text-white font-black text-xs rounded-md">旅行ナレッジ</span>
    <h3 class="text-sm font-bold text-stone-900">📍 氷瀑・雪見滝温泉宿 宿泊エリアガイド＆旅行情報</h3>
  </div>
  <p class="text-xs text-stone-600 leading-relaxed">
    当ガイドでは、<strong>日本全国の氷瀑・雪見の氷滝露天風呂自慢の名門温泉宿（山形天童・青森奥入瀬・岐阜奥飛騨・宮城秋保・北海道層雲峡・栃木那須塩原・静岡天城湯ヶ島）</strong>を厳選してご紹介しています。
    楽天トラベルの最新空室状況・限定宿泊プラン・リアルタイムクチコミ評価と直結しており、失敗しないホテル選びをサポートします。
  </p>
  <div class="mt-4 pt-3 border-t border-stone-200 flex flex-wrap gap-2 text-2xs text-stone-500">
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">エリア: 全国（山形・青森・岐阜・宮城・北海道・栃木・静岡）</span>
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">テーマ: 氷瀑・雪見滝・奥入瀬氷瀑・層雲峡氷瀑まつり・タルマかねこおり・雪見露天風呂・源泉かけ流し</span>
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">更新日: 2026年最新版</span>
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">即時予約・公式連携</span>
  </div>
</div>

<div class="my-12 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-stone-50 via-cyan-50/40 to-blue-50/30 border border-cyan-200/80 shadow-md">
  <div class="flex items-center gap-2 mb-4 border-b border-cyan-200 pb-3">
    <span class="px-3 py-1 bg-cyan-600 text-white font-black text-xs rounded-lg">関連記事ナビ</span>
    <h3 class="text-base md:text-lg font-bold text-stone-900">🗺️ あわせて読みたい！冬の絶景＆名湯特集</h3>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
    <div class="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-2">
      <h4 class="text-xs font-black text-cyan-900">💎 人気の冬絶景・冬鍋キラー特集</h4>
      <a href="/posts/snow-monster-juhyo-winter-panoramic-resort-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-cyan-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-cyan-700 transition">
        👉 樹氷が見える絶景温泉ホテル10選！比較
      </a>
      <a href="/posts/akita-kiritanpo-hinai-chicken-winter-onsen-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-cyan-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-cyan-700 transition">
        👉 きりたんぽ鍋・比内地鶏が旨い宿10選！比較
      </a>
      <a href="/posts/kinmedai-boiled-shabu-winter-onsen-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-cyan-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-cyan-700 transition">
        👉 金目鯛の姿煮・しゃぶが旨い温泉宿10選！比較
      </a>
      <a href="/posts/ankou-dobujiru-hotpot-winter-gourmet-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-cyan-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-cyan-700 transition">
        👉 あんこう鍋・どぶ汁が旨い温泉宿10選！比較
      </a>
    </div>
    <div class="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-2">
      <h4 class="text-xs font-black text-blue-900">🎌 エリア別特集</h4>
      <a href="/posts/aomori-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-blue-700">🏨 【青森・奥入瀬八甲田】厳選10選ガイド</a>
      <a href="/posts/hokkaido-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-blue-700">🏨 【北海道・層雲峡登別】厳選10選ガイド</a>
      <a href="/posts/yamagata-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-blue-700">🏨 【山形・天童蔵王銀山】厳選10選ガイド</a>
      <a href="/posts/gifu-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-blue-700">🏨 【岐阜・奥飛騨下呂高山】厳選10選ガイド</a>
    </div>
  </div>
</div>''')

slug = 'frozen-waterfall-hyobaku-snow-onsen-hotels-guide'
title = '【2026最新】氷瀑・雪見の滝露天風呂宿10選！比較'
desc = '冬の奇跡！奥入瀬氷瀑から層雲峡氷瀑まつり、奥飛騨、那須塩原、秋保温泉まで徹底比較。青白く凍りつく氷瀑や白銀の雪見滝を眺めながら温まる名門露天風呂宿10選を本音レビュー。全施設楽天公式最新空室リンク付き。'

post_data = {
    'id': slug,
    'slug': slug,
    'title': title,
    'description': desc,
    'prefecture': '全国',
    'area': '全国（山形・青森・岐阜・宮城・北海道・栃木・静岡）',
    'hotel_name': '氷瀑・雪見の滝露天風呂宿おすすめ10選',
    'image': 'https://img.travel.rakuten.co.jp/share/HOTEL/53746/53746.jpg',
    'other_images': [],
    'affiliate_url': make_aff_url(53746),
    'price': 17050,
    'rating': 4.56,
    'date': '2026-08-27',
    'categories': [
        '特集10選',
        'キラーコンテンツ',
        '後悔回避',
        'ホテル厳選',
        '氷瀑',
        '雪見露天風呂',
        '奥入瀬渓流',
        '層雲峡温泉'
    ],
    'keywords': [
        '氷瀑 温泉宿 おすすめ 10選',
        '氷瀑露天風呂 比較',
        '奥入瀬 氷瀑 ホテル 宿泊 予約',
        '層雲峡 氷瀑まつり 宿 比較',
        '雪見 氷滝 露天風呂 比較',
        '氷瀑 温泉 楽天トラベル'
    ],
    'is_special_feature': True,
    'review': ''.join(review_parts)
}

target_file = f'src/data/posts/{slug}.json'
with open(target_file, 'w', encoding='utf-8') as f:
    json.dump(post_data, f, ensure_ascii=False, indent=2)

print('Generated post file successfully:', target_file)
