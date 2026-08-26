import json
import urllib.parse

with open('scratch/kiritanpo_10_hotels.json', 'r', encoding='utf-8') as f:
    hotels = json.load(f)

aff_id = '54d2a438.4bc4abc2.54d2a439.aa1be583'

def make_aff_url(no):
    target = f'https://travel.rakuten.co.jp/HOTEL/{no}/{no}.html'
    return f'https://hb.afl.rakuten.co.jp/hgc/{aff_id}/?pc={urllib.parse.quote(target, safe="")}'

review_parts = [
    '<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 mb-4">【2026年最新】冬の極上鍋！本場秋田比内地鶏＆手作りきりたんぽ鍋が旨いおすすめ温泉宿10選！名門比較</h2>',
    '<p class="text-sm text-stone-700 leading-relaxed my-3 font-medium">雪深いみちのくの冬、心と体を芯から温めてくれる日本屈指のご当地鍋「きりたんぽ鍋」。日本三大美味鶏のひとつ「比内地鶏（ひないじどり）」のガラからじっくり時間をかけて煮出した澄んだ黄金色の極上スープに、炊きたてのあきたこまちを半搗き（はんづき）にして香ばしく焼き上げた「手作りきりたんぽ」、シャキシャキとした根っこごと味わう名物「三関セリ」、香り高い天然舞茸やごぼうが溶け合う至高の味わい——。きりたんぽ発祥の地・鹿角（大湯温泉ホテル鹿角・湯瀬ホテル）から、名湯・男鹿温泉（元湯雄山閣・別邸つばき）、風情ある田沢湖（花心亭しらはま・レイクリゾート）、角館の武家屋敷ホテル、秋田市街の名宿まで、白銀の雪見露天風呂と本場きりたんぽ鍋を満喫できる名門宿10選を本音で比較レビューします。全施設、楽天トラベル公式最新空室リンク付き。</p>',
    '<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-amber-950 via-stone-900 to-orange-950 text-white border border-amber-500/30 shadow-xl p-6 md:p-8">',
    '<h3 class="text-lg font-bold text-amber-300 mb-3">🍲 なぜ「冬の秋田・本場手作りきりたんぽ鍋」は格別の旨さなのか？</h3>',
    '<p class="text-xs text-stone-200 leading-relaxed mb-3">一般的な市販のきりたんぽ鍋とは異なり、秋田の名門旅館で味わう本場仕込みのきりたんぽ鍋は、<strong>「比内地鶏の濃厚な鶏油と旨味出汁、炭火焼き手作りたんぽのモチモチ感」</strong>が段違いです。</p>',
    '<p class="text-xs text-stone-200 leading-relaxed mb-3">特に冬の秋田名物「三関セリ（みつせきせり）」は白く長い根っこに強烈な甘みと香りがあり、黄金スープを吸ったたんぽと絡み合って<strong>「一口すするだけで体の底から温まる至福の美味しさ」</strong>を体験できます。</p>',
    '<p class="text-xs text-stone-200 leading-relaxed">しんしんと雪が舞う露天風呂で源泉掛け流しの名湯に浸かり、囲炉裏や会席で熱々のきりたんぽ鍋を地酒とともに味わう冬の秋田旅行は、一生の思い出に残る最高の旅になります。</p>',
    '</div>',
    '<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-8">🧭 失敗しない「きりたんぽ鍋温泉宿」選び4大チェックポイント</h2>',
    '<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-amber-950 flex items-center gap-2"><span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">POINT</span>基準1：比内地鶏のガラから引く本物の黄金スープ＆三関セリ</h4><p class="text-xs text-stone-600 leading-relaxed">化学調味料に頼らず、比内地鶏のガラと肉から丁寧に旨味を抽出した自家製出汁を使用しているかを検証。</p></div>',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-amber-950 flex items-center gap-2"><span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">POINT</span>基準2：手作り＆炭火焼きのきりたんぽ（あきたこまち100%）</h4><p class="text-xs text-stone-600 leading-relaxed">出来合いの冷凍品ではなく、新米あきたこまちを半搗きして焼き上げた手作りたんぽを提供しているかを重視。</p></div>',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-amber-950 flex items-center gap-2"><span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">POINT</span>基準3：白銀の雪見露天風呂・自家源泉かけ流しの温泉力</h4><p class="text-xs text-stone-600 leading-relaxed">冬ならではの雪景色を望む露天風呂や、美肌効果の高い良質な天然温泉を備えているかをセレクト。</p></div>',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-amber-950 flex items-center gap-2"><span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">POINT</span>基準4：楽天トラベルクチコミ・夕食評価の圧倒的高さ</h4><p class="text-xs text-stone-600 leading-relaxed">実際に宿泊した旅行者から「きりたんぽ鍋と秋田郷土料理の美味しさに感動した」と絶賛される宿を厳選。</p></div>',
    '</div>',
    '<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-8">📊 きりたんぽ鍋温泉宿おすすめ10選のスペック比較一覧表</h2>',
    '<div class="my-6 overflow-x-auto rounded-2xl border border-stone-300 shadow-sm"><table class="w-full text-left text-xs text-stone-700 bg-white"><thead class="bg-stone-900 text-amber-300 font-bold border-b border-stone-300"><tr><th class="p-3">順位・宿名</th><th class="p-3">所在地</th><th class="p-3">きりたんぽ鍋の目玉</th><th class="p-3">冬の秋田郷土の味覚</th><th class="p-3">温泉・客室</th><th class="p-3">クチコミ</th></tr></thead><tbody class="divide-y divide-stone-200">',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第1位 男鹿温泉 元湯雄山閣</td><td class="p-3">秋田 男鹿温泉</td><td class="p-3 font-bold text-amber-800">比内地鶏きりたんぽ鍋＆名物「石焼料理」</td><td class="p-3 font-bold text-stone-800">男鹿前浜の旬魚・ハタハタ</td><td class="p-3">自家源泉かけ流し茶褐色名湯・露天</td><td class="p-3 font-bold text-amber-800">⭐ 4.71</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第2位 花心亭しらはま</td><td class="p-3">秋田 田沢湖</td><td class="p-3 font-bold text-amber-800">全室お部屋食！比内地鶏手作りきりたんぽ鍋</td><td class="p-3 font-bold text-stone-800">秋田錦牛・田沢湖産地物野菜</td><td class="p-3">田沢湖畔一望・お部屋食ダイニング</td><td class="p-3 font-bold text-amber-800">⭐ 4.70</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第3位 結いの宿 別邸 つばき</td><td class="p-3">秋田 男鹿温泉</td><td class="p-3 font-bold text-amber-800">比内地鶏きりたんぽ鍋＆秋田由利牛会席</td><td class="p-3 font-bold text-stone-800">男鹿名物石焼・日本海旬魚</td><td class="p-3">海を望む和モダン客室・展望露天風呂</td><td class="p-3 font-bold text-amber-800">⭐ 4.60</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第4位 湯瀬ホテル</td><td class="p-3">秋田 湯瀬温泉</td><td class="p-3 font-bold text-amber-800">比内地鶏と八幡平ポークのきりたんぽビュッフェ</td><td class="p-3 font-bold text-stone-800">秋田錦牛ステーキ・稲庭うどん</td><td class="p-3">日本三大美肌の湯・米代川渓谷雪見露天</td><td class="p-3 font-bold text-amber-800">⭐ 4.60</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第5位 ホテルプラザ迎賓</td><td class="p-3">秋田 横手温泉</td><td class="p-3 font-bold text-amber-800">横手かまくら郷！料亭仕込み比内地鶏きりたんぽ懐石</td><td class="p-3 font-bold text-stone-800">みなせ牛・横手地酒ペアリング</td><td class="p-3">展望天然温泉大浴場・駅前好立地</td><td class="p-3 font-bold text-amber-800">⭐ 4.55</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第6位 秋田キャッスルホテル</td><td class="p-3">秋田 秋田市街</td><td class="p-3 font-bold text-amber-800">日本料理「車屋」の極上比内地鶏きりたんぽ鍋会席</td><td class="p-3 font-bold text-stone-800">秋田由利牛・ハタハタ塩焼き</td><td class="p-3">秋田の迎賓館・上質シティホテル</td><td class="p-3 font-bold text-amber-800">⭐ 4.45</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第7位 秋田温泉さとみ</td><td class="p-3">秋田 秋田温泉</td><td class="p-3 font-bold text-amber-800">名物比内地鶏きりたんぽ鍋＆秋田牛会席（お部屋食）</td><td class="p-3 font-bold text-stone-800">ハタハタしょっつる鍋・山菜料理</td><td class="p-3">とろとろ美肌温泉・広大な庭園露天風呂</td><td class="p-3 font-bold text-amber-800">⭐ 4.40</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第8位 田町武家屋敷ホテル</td><td class="p-3">秋田 角館</td><td class="p-3 font-bold text-amber-800">武家屋敷の静寂！レストラン樅の木の手作りきりたんぽ膳</td><td class="p-3 font-bold text-stone-800">角館懐石・比内地鶏ステーキ</td><td class="p-3">小京都角館の蔵造りデザイナーズ宿</td><td class="p-3 font-bold text-amber-800">⭐ 4.31</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第9位 田沢湖レイクリゾート</td><td class="p-3">秋田 田沢湖高原</td><td class="p-3 font-bold text-amber-800">秋田郷土料理ビュッフェ！出来立てきりたんぽ鍋</td><td class="p-3 font-bold text-stone-800">稲庭うどん・地場産キノコ天ぷら</td><td class="p-3">田沢湖高原温泉・広大な天然温泉大浴場</td><td class="p-3 font-bold text-amber-800">⭐ 4.21</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第10位 ホテル鹿角</td><td class="p-3">秋田 鹿角大湯温泉</td><td class="p-3 font-bold text-amber-800">きりたんぽ発祥の地！本場手作りきりたんぽ鍋会席</td><td class="p-3 font-bold text-stone-800">かづの牛・鹿角八幡平ポーク</td><td class="p-3">開湯800年名湯・日本庭園露天風呂</td><td class="p-3 font-bold text-amber-800">⭐ 4.17</td></tr>',
    '</tbody></table></div>',
    '<h2 class="text-xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 my-8">🏆 【徹底検証】きりたんぽ鍋温泉宿おすすめ10選の本音レビュー</h2>'
]

# 宿1: 男鹿温泉 元湯雄山閣
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第1位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">秋田 男鹿温泉 男鹿温泉郷 元湯雄山閣（ゆうざんかく）</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 秋田県男鹿市北浦湯本草木原52</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.71</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🍲</span> きりたんぽ体験：楽天★4.71！比内地鶏きりたんぽ鍋＆名物「石焼料理」・自家源泉掛け流し名湯</h4><p class="text-xs text-stone-700 leading-relaxed">「男鹿名物の豪快な石焼料理と、比内地鶏の旨味が凝縮した熱々の本場きりたんぽ鍋を味わい、龍の口から注ぐ茶褐色の自家源泉かけ流し温泉に浸かりたい」という冬の秋田旅に最高峰第1位です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/18284/18284.jpg" alt="元湯雄山閣" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 本場きりたんぽ鍋:</span> 比内地鶏ガラ出汁・手作りあきたこまち炭火たんぽ</div><div><span class="text-stone-400">■ 男鹿名物石焼料理:</span> 800度に熱した溶岩石を桶に投入する豪快海鮮鍋</div><div><span class="text-stone-400">■ 自家源泉かけ流し:</span> 季節や気温で色が変化するナトリウム塩化物泉</div><div><span class="text-stone-400">■ 男鹿の地酒揃い:</span> 新政や山本など秋田の銘酒との極上ペアリング</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 男鹿温泉郷バス停無料送迎あり＋料理クチコミ絶賛＋楽天4.71</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「男鹿名物『石焼料理』と本場『比内地鶏きりたんぽ鍋』の両方を、名湯自家源泉とともに堪能したい温泉美食派」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">男鹿温泉郷の高台に佇む湯宿。夕食は圧巻で、目の前で真っ赤に焼けた溶岩石を入れて一気に沸騰させる男鹿伝統の「石焼料理」に加え、比内地鶏の出汁が染み渡る手作りきりたんぽ鍋が登場。香ばしい焼き目のついたたんぽはモチモチで、三関セリのシャキシャキ感と最高のマッチング。龍の口からドバドバと注がれる濃厚な自家源泉も圧倒的です。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「和室 / 和モダン客室」（落ち着いた純和風の清潔な客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「男鹿名物石焼料理＆比内地鶏きりたんぽ鍋会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR男鹿線「男鹿駅」よりタクシー約25分（なまはげシャトルバスあり）。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30自家源泉大浴場＆雪見露天風呂 → 18:30石焼料理＆きりたんぽ鍋ディナー【2日目】07:30朝風呂 → 08:30和朝食 → 09:30なまはげ館観光へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">最新の大型リゾートホテル設備のみを求める方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">比内地鶏きりたんぽ鍋×男鹿石焼料理×自家源泉かけ流し×楽天4.71。秋田の食と温泉の真髄を味わえる宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※男鹿温泉の自家源泉かけ流し宿</span><span class="text-xs font-black text-amber-800">石焼料理ときりたんぽ鍋の名門</span></div><a href="{make_aff_url(18284)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】男鹿温泉郷 元湯雄山閣の空室・最安プランを見る</span></a></div>
</div>''')

# 宿2: 花心亭しらはま
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第2位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">秋田 田沢湖 花心亭しらはま（かしんていしらはま）</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 秋田県仙北市田沢湖田沢春山145-15</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.70</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🍲</span> きりたんぽ体験：全室お部屋食！田沢湖畔の絶景と比内地鶏手作りきりたんぽ鍋・おもてなし会席</h4><p class="text-xs text-stone-700 leading-relaxed">「日本一深い瑠璃色の田沢湖を望みながら、客室でゆっくり比内地鶏の出汁が効いた極上手作りきりたんぽ鍋や秋田錦牛を味わいたい」という大人のご褒美旅に最適です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/139459/139459.jpg" alt="花心亭しらはま" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 手作りきりたんぽ鍋:</span> 比内地鶏の澄んだ出汁と地元産舞茸・根セリ</div><div><span class="text-stone-400">■ 全室お部屋食対応:</span> プライベート空間で味わう季節の創作会席</div><div><span class="text-stone-400">■ 田沢湖畔の好立地:</span> 窓の外に広がる田沢湖の美しい湖面パノラマ</div><div><span class="text-stone-400">■ 畳敷きの館内:</span> スリッパなしで寛げる温もりの純和風宿</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 田沢湖駅よりバス約15分＋料理クチコミ★4.70の高評価</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「田沢湖の静寂な雪景色を眺めながら、誰にも邪魔されずお部屋で極上きりたんぽ鍋会席を味わいたい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">田沢湖畔に佇む全室お部屋食の美食宿。夕食はお部屋専用のダイニングテーブルに一品ずつ運ばれ、名物のきりたんぽ鍋は比内地鶏の深いコクと三関セリの爽やかな香りが絶妙。秋田錦牛のステーキや地元の山菜料理も美しく、全館畳敷きの温かいおもてなしに心から癒やされます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「田沢湖側 和洋室 / ダイニング付客室」（湖面を一望する客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「お部屋食！比内地鶏きりたんぽ鍋＆秋田錦牛会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR秋田新幹線「田沢湖駅」より羽後交通バスで約15分「田沢湖畔」下車徒歩約1分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30田沢湖畔散策（たつこ像） → 17:00大浴場 → 18:30お部屋で比内地鶏きりたんぽ鍋ディナー【2日目】07:30朝風呂 → 08:30お部屋朝食 → 10:00乳頭温泉郷へ湯巡り出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">バイキング形式で好きなものを自由に食べたい方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">全室お部屋食×比内地鶏きりたんぽ鍋×田沢湖一望×楽天4.70。田沢湖随一の上質料理宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※全室お部屋食・田沢湖畔すぐ</span><span class="text-xs font-black text-amber-800">全館畳敷きのおもてなし宿</span></div><a href="{make_aff_url(139459)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】花心亭しらはまの空室・最安プランを見る</span></a></div>
</div>''')

# 宿3: 別邸つばき
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第3位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">秋田 男鹿温泉 男鹿温泉 結いの宿 別邸 つばき</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 秋田県男鹿市北浦湯本中里81</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.60</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🍲</span> きりたんぽ体験：男鹿の海を望む絶景宿！比内地鶏きりたんぽ鍋＆秋田由利牛・展望温泉</h4><p class="text-xs text-stone-700 leading-relaxed">「男鹿の海と山を見渡すモダンなデザイナーズ温泉旅館で、比内地鶏きりたんぽ鍋や秋田由利牛、日本海の海の幸を味わい、優雅な冬のリゾートステイを楽しみたい」というカップル・女性旅に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/20504/20504.jpg" alt="別邸つばき" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 特選きりたんぽ会席:</span> 比内地鶏出汁のきりたんぽ鍋＆秋田由利牛</div><div><span class="text-stone-400">■ 和モダンリゾート空間:</span> 椿をモチーフにした洗練されたデザイン</div><div><span class="text-stone-400">■ 展望露天風呂:</span> 男鹿の海と山を眺めながら浸かる名湯</div><div><span class="text-stone-400">■ 豊富な地酒バー:</span> 秋田の地酒を飲み比べできるラウンジ</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 男鹿駅より無料送迎あり＋楽天アワード受賞＋楽天4.60</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「おしゃれで洗練された和モダン旅館で、本場のきりたんぽ鍋と秋田牛をスタイリッシュに味わいたい方」に最適です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">男鹿温泉郷の中でも屈指のハイセンスな宿。食事処「ダイニング水木」で提供される夕食は、比内地鶏の出汁が効いた名物きりたんぽ鍋に加えて、秋田由利牛ステーキや男鹿の地魚刺身が美しく並びます。湯上がり処のドリンクサービスや展望露天風呂からの雪景色も心地よく、快適な滞在が叶います。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「和モダンツイン / 展望半露天風呂付客室」（男鹿の海を望む客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「比内地鶏きりたんぽ鍋＆秋田由利牛プレミアム会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR男鹿線「男鹿駅」より無料送迎バス約20分（要予約）。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30ラウンジでウェルカムドリンク → 17:00展望露天風呂 → 18:30きりたんぽ鍋＆秋田牛ディナー【2日目】07:30朝風呂 → 08:30和朝食 → 10:00寒風山展望台へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">昔ながらの鄙びた湯治宿の雰囲気を求める方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">比内地鶏きりたんぽ鍋×和モダンリゾート×男鹿展望露天×楽天4.60。男鹿で最もスタイリッシュな美食宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※男鹿駅より無料送迎あり</span><span class="text-xs font-black text-amber-800">男鹿温泉の上質和モダン宿</span></div><a href="{make_aff_url(20504)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】結いの宿 別邸 つばきの空室・最安プランを見る</span></a></div>
</div>''')

# 宿4: 湯瀬ホテル
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第4位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">秋田 湯瀬温泉 四季彩り 秋田づくし 湯瀬ホテル</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 秋田県鹿角市八幡平字湯瀬湯端43</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.60</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🍲</span> きりたんぽ体験：日本三大美肌の湯！比内地鶏と八幡平ポークのきりたんぽ鍋ビュッフェ＆渓谷雪見露天</h4><p class="text-xs text-stone-700 leading-relaxed">「きりたんぽ発祥の鹿角で、出来立て熱々の比内地鶏きりたんぽ鍋や秋田錦牛ステーキを好きなだけビュッフェで味わい、日本屈指の美肌温泉に浸かりたい」というファミリーやグループに大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7188/7188.jpg" alt="湯瀬ホテル" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 秋田づくしビュッフェ:</span> 本場比内地鶏きりたんぽ鍋・八幡平ポーク・稲庭うどん</div><div><span class="text-stone-400">■ 日本三大美肌の湯:</span> 米代川渓谷沿いの自家源泉かけ流し美肌温泉</div><div><span class="text-stone-400">■ 渓谷雪見露天風呂:</span> 雪に覆われた米代川の渓谷美を一望する露天</div><div><span class="text-stone-400">■ 発祥の地鹿角の技:</span> 炭火で焼き上げたモチモチの手作りたんぽ</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> JR湯瀬温泉駅徒歩約5分＋楽天日本の宿アワード受賞＋楽天4.60</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「きりたんぽ発祥の地・鹿角で、絶品きりたんぽ鍋と秋田郷土料理をお腹いっぱいビュッフェで楽しみたい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">米代川の渓谷に抱かれた名湯ホテル。自慢の「秋田づくしビュッフェ」では、オープンキッチンで熱々の比内地鶏きりたんぽ鍋が小鍋仕立てで提供され、出汁の深い旨味に何杯もおかわりする人が続出。米代川を見下ろす雪見露天風呂は日本三大美肌の湯に数えられ、湯上がりの肌がしっとりすべすべになります。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「渓谷側 和モダン客室 / 温泉半露天風呂付客室」（米代川を望む特別室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「秋田づくし！本場比内地鶏きりたんぽ鍋ビュッフェプラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR花輪線「湯瀬温泉駅」より徒歩約5分（無料送迎あり）。東北道「鹿角八幡平IC」より車約10分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30渓谷散策 → 16:30日本三大美肌の湯＆雪見露天 → 18:30秋田づくしビュッフェディナー【2日目】07:30朝風呂 → 08:30朝食ビュッフェ → 10:00十和田湖へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">静かな部屋食のみを希望する方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">発祥地きりたんぽビュッフェ×日本三大美肌の湯×渓谷雪見露天×楽天4.60。鹿角を代表する大人気ホテルです。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※湯瀬温泉駅徒歩5分・美肌の湯</span><span class="text-xs font-black text-amber-800">楽天日本の宿アワード受賞</span></div><a href="{make_aff_url(7188)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】四季彩り 秋田づくし 湯瀬ホテルの空室・最安プランを見る</span></a></div>
</div>''')

# 宿5: ホテルプラザ迎賓
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第5位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">秋田 横手 横手温泉 ホテルプラザ迎賓</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 秋田県横手市駅前町7-7</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.55</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🍲</span> きりたんぽ体験：横手かまくら郷！料亭仕込み本場比内地鶏きりたんぽ懐石＆展望天然温泉</h4><p class="text-xs text-stone-700 leading-relaxed">「冬の横手かまくら祭りを楽しみながら、料亭の職人が引く比内地鶏の出汁が効いた極上きりたんぽ懐石を味わい、駅前すぐの展望天然温泉に浸かりたい」という観光・鉄道旅に最適です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7502/7502.jpg" alt="ホテルプラザ迎賓" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 料亭きりたんぽ懐石:</span> 比内地鶏の深い旨味スープとみなせ牛</div><div><span class="text-stone-400">■ 展望天然温泉「ゆうゆうプラザ」:</span> 広々とした露天風呂とサウナ完備</div><div><span class="text-stone-400">■ 横手駅徒歩1分:</span> 冬の雪道でも安心の圧倒的駅前アクセス</div><div><span class="text-stone-400">■ かまくら祭り拠点:</span> 冬の横手かまくら散策に最も便利な立地</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 横手駅前すぐ＋天然温泉スパ併設＋楽天4.55</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「横手駅前すぐの抜群の立地で、本格的なきりたんぽ懐石と天然温泉スパを快適に楽しみたい方」に最適です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">JR横手駅の目の前に位置する上質ホテル。併設された日本料理処でいただく「比内地鶏きりたんぽ懐石」は、出汁の透明感とコクが素晴らしく、地元の三関セリや舞茸がたっぷり。併設の天然温泉スパ施設では露天風呂や多彩なサウナが利用でき、旅の疲れをしっかり癒やせます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「プラザ迎賓 特別和洋室」（広々とした上質空間）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「料亭仕込み！比内地鶏きりたんぽ懐石ディナープラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR奥羽本線「横手駅」西口より徒歩約1分。秋田道「横手IC」より車約5分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30天然温泉スパ＆サウナ → 18:00横手かまくら散策 → 19:30比内地鶏きりたんぽ懐石ディナー【2日目】07:30朝風呂 → 08:30和洋朝食 → 10:00横手城へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">秘境の山奥の一軒宿の雰囲気を求める方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">比内地鶏きりたんぽ懐石×横手駅前徒歩1分×天然温泉スパ×楽天4.55。横手観光の拠点に最適な名門ホテルです。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※横手駅西口徒歩1分・天然温泉</span><span class="text-xs font-black text-amber-800">横手かまくら祭りの拠点宿</span></div><a href="{make_aff_url(7502)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】横手温泉 ホテルプラザ迎賓の空室・最安プランを見る</span></a></div>
</div>''')

# 宿6: 秋田キャッスルホテル
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第6位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">秋田 秋田市街 秋田キャッスルホテル</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 秋田県秋田市中通1-3-5</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.45</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🍲</span> きりたんぽ体験：秋田の迎賓館！日本料理「車屋」の極上比内地鶏きりたんぽ鍋会席＆上質ステイ</h4><p class="text-xs text-stone-700 leading-relaxed">「秋田市中心部のお堀沿いに建つ名門迎賓館ホテルで、老舗料亭が引く最高峰の比内地鶏きりたんぽ鍋会席を味わい、洗練されたシティステイを楽しみたい」というビジネス・観光旅行に最適です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/588/588.jpg" alt="秋田キャッスルホテル" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 日本料理「車屋」:</span> 伝統の職人技が光る比内地鶏きりたんぽ会席</div><div><span class="text-stone-400">■ 千秋公園お堀前:</span> 春の桜・冬の雪景色が美しい絶好のロケーション</div><div><span class="text-stone-400">■ 朝食バイキング:</span> 秋田の郷土料理とホテル特製ブレッドが並ぶ人気朝食</div><div><span class="text-stone-400">■ シモンズ製ベッド:</span> 快適な眠りを約束する上質な客室設備</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 秋田駅徒歩約7分＋秋田の迎賓館格＋楽天4.45</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「秋田市街で最も格式高いホテルで、老舗料亭仕込みの極上きりたんぽ会席を上品に味わいたい方」に最適です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">秋田市を代表するシティホテル。館内の日本料理「車屋」で提供されるきりたんぽ鍋は、澄み切った比内地鶏出汁の上品な香りと、香ばしく炙られた手作りたんぽが完璧な調和を見せる逸品。朝食バイキングでも秋田の郷土食材がふんだんに並び、満足度の高い滞在が約束されます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「キャッスルツイン / エグゼクティブフロア」（千秋公園を望む上質客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「日本料理車屋！比内地鶏きりたんぽ鍋会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR「秋田駅」西口より徒歩約7分。秋田空港よりリムジンバス約40分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30千秋公園散策 → 18:30日本料理車屋できりたんぽ会席ディナー → 21:00バーで秋田銘酒【2日目】07:30朝食バイキング → 09:00秋田県立美術館へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">天然温泉の大浴場や露天風呂を必須とする方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">料亭きりたんぽ鍋×秋田の迎賓館×千秋公園前×楽天4.45。秋田市内で最も安心できる名門ホテルです。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※秋田駅徒歩7分・千秋公園前</span><span class="text-xs font-black text-amber-800">秋田を代表する迎賓館ホテル</span></div><a href="{make_aff_url(588)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】秋田キャッスルホテルの空室・最安プランを見る</span></a></div>
</div>''')

# 宿7: 秋田温泉さとみ
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第7位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">秋田 秋田温泉 秋田温泉さとみ</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 秋田県秋田市添川境内川原142-1</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.40</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🍲</span> きりたんぽ体験：とろとろ美肌温泉！名物秋田比内地鶏きりたんぽ鍋＆秋田牛会席（お部屋食）</h4><p class="text-xs text-stone-700 leading-relaxed">「秋田市街からすぐの美肌温泉で、とろみのある名湯に癒やされ、お部屋で比内地鶏きりたんぽ鍋や秋田牛会席をゆっくり味わいたい」という家族旅行・ご夫婦旅行に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/9624/9624.jpg" alt="秋田温泉さとみ" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 名物きりたんぽ鍋:</span> 比内地鶏のコク旨スープと自家製たんぽ</div><div><span class="text-stone-400">■ とろとろ美肌温泉:</span> ナトリウム塩化物炭酸水素塩泉の極上泉質</div><div><span class="text-stone-400">■ お部屋食プラン多数:</span> 周りを気にせずゆっくり寛げる夕食スタイル</div><div><span class="text-stone-400">■ 広大な庭園露天風呂:</span> 雪見風呂を満喫できる開放的な湯処</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 秋田駅より車約10分（無料送迎あり）＋良心価格＋楽天4.40</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「秋田市近郊で本格的な美肌温泉と、お部屋食での比内地鶏きりたんぽ鍋会席をコスパ良く楽しみたい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">秋田市の奥座敷に位置する老舗温泉旅館。とろりとした化粧水のような美肌温泉は浸かるだけで肌がしっとり。夕食はお部屋でいただく比内地鶏きりたんぽ鍋と秋田牛ステーキが好評で、家庭的で温かいおもてなしに心が和みます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「純和風客室 / 和室二間」（庭園を望む落ち着いた客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「お部屋食！比内地鶏きりたんぽ鍋＆秋田牛会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR「秋田駅」西口より車約10分（無料送迎バスあり）。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 16:00とろとろ美肌温泉＆庭園露天 → 18:30お部屋で比内地鶏きりたんぽ鍋ディナー【2日目】07:30朝風呂 → 08:30和朝食 → 10:00秋田市内観光へ</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">最新鋭のスタイリッシュな外資系ホテルを好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">比内地鶏きりたんぽ鍋×とろとろ美肌温泉×お部屋食×楽天4.40。秋田市街至近の温泉名宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※秋田駅より無料送迎あり・お部屋食</span><span class="text-xs font-black text-amber-800">美肌温泉の老舗宿</span></div><a href="{make_aff_url(9624)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】秋田温泉さとみの空室・最安プランを見る</span></a></div>
</div>''')

# 宿8: 田町武家屋敷ホテル
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第8位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">秋田 角館 田町武家屋敷ホテル</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 秋田県仙北市角館町田町下丁23</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.31</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🍲</span> きりたんぽ体験：みちのくの小京都！武家屋敷の風情＆レストラン「樅の木」の手作りきりたんぽ膳</h4><p class="text-xs text-stone-700 leading-relaxed">「角館の歴史ある武家屋敷通りを散策し、蔵造りのモダンなホテルで比内地鶏の手作りきりたんぽ鍋と角館懐石を味わいたい」という歴史ファン・大人の一人旅に最適です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/107856/107856.jpg" alt="田町武家屋敷ホテル" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 手作りきりたんぽ御膳:</span> 比内地鶏の旨味スープと香ばしいたんぽ</div><div><span class="text-stone-400">■ 蔵造りデザイン:</span> 角館の伝統的な黒塀と蔵の美を表現した空間</div><div><span class="text-stone-400">■ 武家屋敷通り徒歩圏:</span> 歴史ある角館の町並みを早朝から散策可能</div><div><span class="text-stone-400">■ レストラン「樅の木」:</span> 地元の旬食材を使った創作和食ディナー</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> JR角館駅車約5分（徒歩約15分）＋静寂な大人の宿＋楽天4.31</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「角館の武家屋敷の静寂な風情に浸りながら、本場の比内地鶏きりたんぽ膳を落ち着いて味わいたい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">角館の町並みに美しく溶け込む蔵造りの宿。レストラン「樅の木」でいただくきりたんぽ鍋は、比内地鶏の上品な出汁にじっくり煮込まれたたんぽが絶品で、地酒との相性も抜群。朝の静かな時間に武家屋敷通りを散歩できるのも宿泊者ならではの贅沢です。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「蔵ツイン / 和モダン客室」（高い天井と木の温もりある客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「角館の美味！比内地鶏きりたんぽ御膳ディナープラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR秋田新幹線「角館駅」より車約5分（徒歩約15分）。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30角館武家屋敷通り散策 → 18:30レストラン樅の木できりたんぽディナー【2日目】07:00早朝武家屋敷散歩 → 08:00和朝食 → 09:30角館樺細工伝承館へ</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">大規模な温泉露天風呂を必須とする方（内風呂付き客室中心のため）。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">角館武家屋敷×比内地鶏きりたんぽ御膳×蔵造りモダン×楽天4.31。角館散策に最高の拠点宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※角館武家屋敷通り至近</span><span class="text-xs font-black text-amber-800">小京都角館の蔵造り宿</span></div><a href="{make_aff_url(107856)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】田町武家屋敷ホテルの空室・最安プランを見る</span></a></div>
</div>''')

# 宿9: 田沢湖レイクリゾート
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第9位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">秋田 田沢湖 天然温泉 田沢湖レイクリゾート</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 秋田県仙北市田沢湖生保内字下高野82-117</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.21</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🍲</span> きりたんぽ体験：田沢湖高原の白銀リゾート！秋田郷土料理ビュッフェで味わう熱々きりたんぽ鍋＆温泉</h4><p class="text-xs text-stone-700 leading-relaxed">「田沢湖高原の雄大な自然に囲まれ、ライブキッチンで出来立てのきりたんぽ鍋や秋田グルメをビュッフェで好きなだけ味わい、広々とした天然温泉に浸かりたい」というコスパ重視派に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/4624/4624.jpg" alt="田沢湖レイクリゾート" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ きりたんぽバイキング:</span> 熱々のきりたんぽ鍋・比内地鶏料理・稲庭うどん</div><div><span class="text-stone-400">■ 田沢湖高原天然温泉:</span> 硫酸塩・塩化物泉の温まる天然温泉大浴場</div><div><span class="text-stone-400">■ スノーリゾート拠点:</span> たざわ湖スキー場や乳頭温泉郷へのアクセス抜群</div><div><span class="text-stone-400">■ ドッグラン完備:</span> 愛犬と一緒に宿泊できる専用客室あり</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 田沢湖駅無料送迎あり＋1泊6,000円台〜の抜群コスパ＋楽天4.21</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「田沢湖高原の白銀リゾートで、熱々きりたんぽ鍋バイキングと天然温泉をリーズナブルに楽しみたい方」に最適です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">田沢湖高原の広大な敷地に建つリゾートホテル。夕食ビュッフェでは秋田の郷土料理コーナーが充実しており、比内地鶏出汁のきりたんぽ鍋やハタハタ、稲庭うどんが勢揃い。天然温泉の大浴場で冷えた体を温め、スキーや観光の拠点として快適に過ごせます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「スーペリアツイン / 和洋室」（広々とした快適な客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「秋田郷土料理＆きりたんぽ鍋ビュッフェプラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR秋田新幹線「田沢湖駅」より無料送迎バス約10分（要予約）。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 16:00天然温泉大浴場 → 18:30きりたんぽ鍋ビュッフェディナー【2日目】07:30朝風呂 → 08:30朝食ビュッフェ → 09:30たざわ湖スキー場へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">高級料亭のような個別配膳会席を好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">きりたんぽ鍋バイキング×田沢湖高原天然温泉×抜群コスパ×楽天4.21。田沢湖スキー＆観光の王道リゾートです。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※田沢湖駅より無料送迎あり</span><span class="text-xs font-black text-amber-800">田沢湖高原の温泉リゾート</span></div><a href="{make_aff_url(4624)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】天然温泉 田沢湖レイクリゾートの空室・最安プランを見る</span></a></div>
</div>''')

# 宿10: ホテル鹿角
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第10位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">秋田 鹿角大湯 縄文のふる里 大湯温泉 ホテル鹿角（かづの）</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 秋田県鹿角市十和田大湯字中谷地5-1</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.17</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🍲</span> きりたんぽ体験：きりたんぽ発祥の地！名物本場手作りきりたんぽ鍋会席＆日本庭園雪見露天風呂</h4><p class="text-xs text-stone-700 leading-relaxed">「きりたんぽ発祥の地・鹿角（かづの）で、マタギ文化から生まれた正統派の手作りきりたんぽ鍋と名産かづの牛を味わい、開湯800年の名湯露天風呂に癒やされたい」という本物志向の方に最適です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/2974/2974.jpg" alt="ホテル鹿角" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 発祥の地きりたんぽ鍋:</span> 鹿角伝統の炭火焼き手作りたんぽと比内地鶏</div><div><span class="text-stone-400">■ 開湯800年大湯温泉:</span> 自家源泉が注ぐ広大な日本庭園露天風呂</div><div><span class="text-stone-400">■ 鹿角の味覚会席:</span> 希少なかづの短角牛・八幡平ポーク</div><div><span class="text-stone-400">■ 大湯環状列石至近:</span> 世界遺産の大湯ストーンサークル観光拠点</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 十和田南駅無料送迎あり＋1泊6,000円〜の良心価格＋楽天4.17</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「きりたんぽ発祥の地・鹿角で、伝統の味を受け継ぐ正統派きりたんぽ鍋と名湯大湯温泉を堪能したい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">きりたんぽ発祥の郷に佇む名門温泉ホテル。夕食の主役は、秋田杉の串に巻き付けて炭火で焼いた本場の手作りきりたんぽ鍋。比内地鶏の出汁の旨味をたっぷり吸ったたんぽは格別の味わいです。日本庭園を眺める露天風呂からは冬の雪景色が広がり、贅沢な湯浴みを楽しめます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「庭園側 和室 / 和洋室」（日本庭園の雪景色を望む客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「発祥の地！本場手作りきりたんぽ鍋＆かづの牛会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR花輪線「十和田南駅」より車約12分（無料送迎あり）。東北道「十和田IC」より車約12分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30大湯ストーンサークル館見学 → 17:00日本庭園雪見露天風呂 → 18:30本場きりたんぽ鍋会席ディナー【2日目】07:30朝風呂 → 08:30和朝食 → 10:00十和田湖へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">繁華街のナイトライフを求める方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">発祥地きりたんぽ鍋×開湯800年大湯温泉×日本庭園雪見露天×楽天4.17。きりたんぽの歴史に触れる名門宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※十和田南駅より無料送迎あり</span><span class="text-xs font-black text-amber-800">きりたんぽ発祥の地の大湯温泉宿</span></div><a href="{make_aff_url(2974)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】大湯温泉 ホテル鹿角の空室・最安プランを見る</span></a></div>
</div>''')

# FAQ・関連記事ナビ
review_parts.append('''<h2 class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-8">💡 きりたんぽ鍋に関するよくある質問（FAQ）</h2>
<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
      <span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">Q</span>
      きりたんぽ鍋が最も美味しい旬の時期はいつ？
    </h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-amber-200">
      <span class="font-bold text-amber-700">A.</span> 新米あきたこまちが出回り、名物の三関セリ（根セリ）や天然舞茸が旬を迎える<strong>「10月下旬から2月」</strong>が最も美味しい最高のシーズンです。特に真冬の雪景色の中で味わう熱々のきりたんぽ鍋は格別です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
      <span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">Q</span>
      「きりたんぽ」と「だまこ餅」の違いは？
    </h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-amber-200">
      <span class="font-bold text-amber-700">A.</span> 「きりたんぽ」は半搗きのご飯を秋田杉の串に巻いて炭火で焼いた円筒状のもので、鹿角地方が発祥です。「だまこ餅」はご飯を丸めて団子状にしたもので、八郎潟周辺など秋田沿海部で親しまれています。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
      <span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">Q</span>
      きりたんぽ鍋の「セリ」は根っこも食べるのが本場流？
    </h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-amber-200">
      <span class="font-bold text-amber-700">A.</span> はい、本場秋田のきりたんぽ鍋では<strong>「三関セリの長く白い根っこ」こそが一番のご馳走</strong>とされています。綺麗に洗われた根っこはシャキシャキとした強い歯ごたえと甘み・香りがあり、比内地鶏の濃厚スープと抜群の相性を誇ります。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-50 border border-stone-200/90 shadow-sm">
  <div class="flex items-center gap-2 mb-3 border-b border-stone-200 pb-2">
    <span class="px-2.5 py-0.5 bg-stone-800 text-white font-black text-xs rounded-md">旅行ナレッジ</span>
    <h3 class="text-sm font-bold text-stone-900">📍 きりたんぽ鍋温泉宿 宿泊エリアガイド＆旅行情報</h3>
  </div>
  <p class="text-xs text-stone-600 leading-relaxed">
    当ガイドでは、<strong>日本全国・秋田県内の本場比内地鶏＆手作りきりたんぽ鍋自慢の名門温泉宿（男鹿温泉・田沢湖・角館・鹿角大湯温泉・湯瀬温泉・横手・秋田市街）</strong>を厳選してご紹介しています。
    楽天トラベルの最新空室状況・限定宿泊プラン・リアルタイムクチコミ評価と直結しており、失敗しないホテル選びをサポートします。
  </p>
  <div class="mt-4 pt-3 border-t border-stone-200 flex flex-wrap gap-2 text-2xs text-stone-500">
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">エリア: 全国（秋田県）</span>
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">テーマ: きりたんぽ鍋・比内地鶏・三関セリ・あきたこまち・雪見露天風呂・男鹿温泉・田沢湖・角館</span>
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">更新日: 2026年最新版</span>
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">即時予約・公式連携</span>
  </div>
</div>

<div class="my-12 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-stone-50 via-amber-50/40 to-orange-50/30 border border-amber-200/80 shadow-md">
  <div class="flex items-center gap-2 mb-4 border-b border-amber-200 pb-3">
    <span class="px-3 py-1 bg-amber-600 text-white font-black text-xs rounded-lg">関連記事ナビ</span>
    <h3 class="text-base md:text-lg font-bold text-stone-900">🗺️ あわせて読みたい！冬のご当地鍋＆雪見名湯特集</h3>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
    <div class="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-2">
      <h4 class="text-xs font-black text-amber-900">💎 人気の冬鍋＆海鮮キラー特集</h4>
      <a href="/posts/ankou-dobujiru-hotpot-winter-gourmet-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-amber-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-amber-700 transition">
        👉 あんこう鍋・どぶ汁が旨い温泉宿10選！比較
      </a>
      <a href="/posts/winter-kanburi-yellowtail-shabu-onsen-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-amber-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-amber-700 transition">
        👉 寒ブリ・ぶりしゃぶが旨い温泉宿10選！比較
      </a>
      <a href="/posts/kinmedai-boiled-shabu-winter-onsen-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-amber-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-amber-700 transition">
        👉 金目鯛の姿煮・しゃぶが旨い温泉宿10選！比較
      </a>
      <a href="/posts/snow-monster-juhyo-winter-panoramic-resort-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-amber-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-amber-700 transition">
        👉 樹氷が見える絶景温泉ホテル10選！比較
      </a>
    </div>
    <div class="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-2">
      <h4 class="text-xs font-black text-orange-900">🎌 東北・甲信越エリア別特集</h4>
      <a href="/posts/akita-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-orange-700">🏨 【秋田・角館男鹿田沢湖】厳選10選ガイド</a>
      <a href="/posts/aomori-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-orange-700">🏨 【青森・奥入瀬八甲田】厳選10選ガイド</a>
      <a href="/posts/iwate-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-orange-700">🏨 【岩手・花巻盛岡雫石】厳選10選ガイド</a>
      <a href="/posts/yamagata-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-orange-700">🏨 【山形・蔵王銀山温泉】厳選10選ガイド</a>
    </div>
  </div>
</div>''')

slug = 'akita-kiritanpo-hinai-chicken-winter-onsen-hotels-guide'
title = '【2026最新】きりたんぽ鍋・比内地鶏が旨い宿10選！比較'
desc = '冬の極上鍋！秋田比内地鶏の黄金スープと炭火焼き手作りきりたんぽが旨い名門温泉宿10選を徹底比較。男鹿温泉から田沢湖、角館、鹿角大湯まで雪見露天風呂と郷土会席を本音レビュー。全施設楽天公式最新空室リンク付き。'

post_data = {
    'id': slug,
    'slug': slug,
    'title': title,
    'description': desc,
    'prefecture': '全国',
    'area': '全国（秋田県）',
    'hotel_name': 'きりたんぽ鍋・比内地鶏が旨い温泉宿おすすめ10選',
    'image': 'https://img.travel.rakuten.co.jp/share/HOTEL/18284/18284.jpg',
    'other_images': [],
    'affiliate_url': make_aff_url(18284),
    'price': 20900,
    'rating': 4.71,
    'date': '2026-08-26',
    'categories': [
        '特集10選',
        'キラーコンテンツ',
        '後悔回避',
        'ホテル厳選',
        'きりたんぽ',
        '比内地鶏',
        '秋田温泉',
        '雪見露天風呂'
    ],
    'keywords': [
        'きりたんぽ鍋 温泉宿 おすすめ 10選',
        '比内地鶏 旅館 比較',
        '秋田 きりたんぽ 宿泊 予約',
        '雪見温泉 きりたんぽ鍋 比較',
        '乳頭温泉 大湯温泉 きりたんぽ 比較',
        'きりたんぽ 温泉 楽天トラベル'
    ],
    'is_special_feature': True,
    'review': ''.join(review_parts)
}

target_file = f'src/data/posts/{slug}.json'
with open(target_file, 'w', encoding='utf-8') as f:
    json.dump(post_data, f, ensure_ascii=False, indent=2)

print('Generated post file successfully:', target_file)
