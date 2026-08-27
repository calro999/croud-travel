import json
import urllib.parse

with open('scratch/keirou_10_hotels.json', 'r', encoding='utf-8') as f:
    hotels = json.load(f)

aff_id = '54d2a438.4bc4abc2.54d2a439.aa1be583'

def make_aff_url(no):
    target = f'https://travel.rakuten.co.jp/HOTEL/{no}/{no}.html'
    return f'https://hb.afl.rakuten.co.jp/hgc/{aff_id}/?pc={urllib.parse.quote(target, safe="")}'

review_parts = [
    '<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 mb-4">【2026年最新SW特集】三世代旅行＆敬老の日のお祝いにおすすめの名門温泉旅館10選！比較</h2>',
    '<p class="text-sm text-stone-700 leading-relaxed my-3 font-medium">9月のシルバーウィークは、日頃の感謝を伝える「敬老の日」と秋の連休が重なる、1年の中で最も三世代家族旅行（祖父母・両親・子ども・孫）が賑わう特別なシーズンです。空中庭園露天風呂と豪華バイキングで全世代を魅了する鬼怒川温泉（あさや）、創業700年の老舗で金泉湯巡りと個室黒毛和牛会席を味わう有馬温泉（兵衛向陽閣）、十八の湯巡りと広々和洋室が嬉しい加賀山代温泉（ゆのくに天祥）、真珠オーロラ風呂と伊勢海老・松阪牛会席が贅沢な鳥羽温泉郷（潮路亭）、伊達家ゆかりの名湯と個室仙台牛懐石の秋保温泉（伝承千年の宿 佐勘）、山陰の旬魚と日本庭園が美しい皆生温泉（皆生つるや）、自家源泉とバリアフリー対応の箱根湯本温泉（ホテル おかだ）、相模湾パノラマと大型スパの熱海温泉（熱海後楽園ホテル）、富士山を望む足湯と貸切風呂の伊豆長岡温泉（ホテル天坊）、黄金と白銀の2種名湯を誇る伊香保温泉（福一）まで、段差の少ないバリアフリー配慮、気兼ねなく過ごせる個室食事処、ちゃんちゃんこ貸出や記念写真などのお祝い特典が充実した名門宿10選を本音で比較レビューします。全施設、楽天トラベル公式最新空室リンク付き。</p>',
    '<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-amber-950 via-stone-900 to-orange-950 text-white border border-amber-500/30 shadow-xl p-6 md:p-8">',
    '<h3 class="text-lg font-bold text-amber-300 mb-3">👴👵 なぜ「シルバーウィークの三世代・敬老の日温泉旅」は最高の親孝行になるのか？</h3>',
    '<p class="text-xs text-stone-200 leading-relaxed mb-3">敬老の日に合わせた三世代旅行で最も大切なのは、<strong>「シニア世代の身体への優しさ（移動の楽さ・バリアフリー・温泉の質）」と「子どもや孫が飽きずに楽しめる充実した施設（プール・バイキング・お祭り広場）」の両立</strong>です。</p>',
    '<p class="text-xs text-stone-200 leading-relaxed mb-3">周囲に気兼ねなく家族団らんの時間を過ごせる「個室食事処や部屋食」、足腰に不安があっても安心な「ベッド付き和洋室や客室露天風呂」、そして<strong>「還暦・古希・喜寿・傘寿・米寿などの長寿祝いちゃんちゃんこ無料貸出や記念写真サービス」</strong>は、家族全員の一生の宝物になる思い出を創り出してくれます。</p>',
    '<p class="text-xs text-stone-200 leading-relaxed">全員が笑顔で「連れてきてくれて本当にありがとう」と感動できる、失敗しない名門温泉宿選びをお届けします。</p>',
    '</div>',
    '<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-8">🧭 失敗しない「三世代・敬老の日温泉宿」選び4大チェックポイント</h2>',
    '<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-amber-950 flex items-center gap-2"><span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">POINT</span>基準1：シニアに優しいバリアフリー設計・エレベーター・ベッド完備</h4><p class="text-xs text-stone-600 leading-relaxed">館内の段差が少なく、車椅子の貸出や和洋室（ベッド＋畳）、手すり付き大浴場があるかを検証。</p></div>',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-amber-950 flex items-center gap-2"><span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">POINT</span>基準2：周囲に気兼ねなく団らんできる「個室食事処・部屋食」</h4><p class="text-xs text-stone-600 leading-relaxed">三世代揃って周囲を気にせず会話を楽しめる個室ダイニング、または好みに合わせて選べる豪華バイキングかを重視。</p></div>',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-amber-950 flex items-center gap-2"><span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">POINT</span>基準3：長寿祝い・記念日のおもてなし特典（ちゃんちゃんこ・写真）</h4><p class="text-xs text-stone-700 leading-relaxed">長寿祝いのちゃんちゃんこ貸出や乾杯用ドリンク、記念撮影サービスなどのお祝いプランが用意されているかをセレクト。</p></div>',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-amber-950 flex items-center gap-2"><span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">POINT</span>基準4：楽天トラベルクチコミ・接客サービス評価の圧倒的高さ</h4><p class="text-xs text-stone-600 leading-relaxed">実際に宿泊した三世代ファミリーから「両親も孫も大満足」「スタッフの心遣いに感動した」と絶賛される宿を厳選。</p></div>',
    '</div>',
    '<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-8">📊 三世代・敬老の日温泉宿おすすめ10選のスペック比較一覧表</h2>',
    '<div class="my-6 overflow-x-auto rounded-2xl border border-stone-300 shadow-sm"><table class="w-full text-left text-xs text-stone-700 bg-white"><thead class="bg-stone-900 text-amber-300 font-bold border-b border-stone-300"><tr><th class="p-3">順位・宿名</th><th class="p-3">所在地</th><th class="p-3">三世代向け客室・設備</th><th class="p-3">食事スタイル</th><th class="p-3">温泉・お祝い特典</th><th class="p-3">クチコミ</th></tr></thead><tbody class="divide-y divide-stone-200">',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第1位 鬼怒川温泉 あさや</td><td class="p-3">栃木 鬼怒川</td><td class="p-3 font-bold text-amber-800">秀峰館 眺望風呂付客室・キッズ施設</td><td class="p-3 font-bold text-stone-800">100種豪華バイキング / 個室会席</td><td class="p-3">空中庭園露天風呂・記念写真</td><td class="p-3 font-bold text-amber-800">⭐ 4.63</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第2位 有馬温泉 兵衛向陽閣</td><td class="p-3">兵庫 有馬温泉</td><td class="p-3 font-bold text-amber-800">創業700年老舗・広々和洋室</td><td class="p-3 font-bold text-stone-800">個室黒毛和牛会席 / 部屋食</td><td class="p-3">3つの大浴場で金泉湯巡り・長寿祝着</td><td class="p-3 font-bold text-amber-800">⭐ 4.56</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第3位 山代温泉 ゆのくに天祥</td><td class="p-3">石川 加賀山代</td><td class="p-3 font-bold text-amber-800">天祥の館 露天風呂付客室・広々和洋室</td><td class="p-3 font-bold text-stone-800">個室食事処 加賀会席＆能登牛</td><td class="p-3">一泊三湯十八ゆめぐり・温泉卵作り</td><td class="p-3 font-bold text-amber-800">⭐ 4.48</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第4位 鳥羽国際ホテル 潮路亭</td><td class="p-3">三重 鳥羽温泉</td><td class="p-3 font-bold text-amber-800">全世代に優しい和モダン客室</td><td class="p-3 font-bold text-stone-800">個室伊勢海老・松阪牛会席</td><td class="p-3">ミキモト真珠パール風呂・鳥羽湾絶景</td><td class="p-3 font-bold text-amber-800">⭐ 4.47</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第5位 伝承千年の宿 佐勘</td><td class="p-3">宮城 秋保温泉</td><td class="p-3 font-bold text-amber-800">飛天館 和洋室・バリアフリー</td><td class="p-3 font-bold text-stone-800">個室ダイニング 仙台牛懐石</td><td class="p-3">名取の御湯・河原の露天風呂</td><td class="p-3 font-bold text-amber-800">⭐ 4.44</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第6位 皆生温泉 皆生つるや</td><td class="p-3">鳥取 皆生温泉</td><td class="p-3 font-bold text-amber-800">日本庭園を望む数寄屋客室</td><td class="p-3 font-bold text-stone-800">個室料亭 山陰旬魚会席</td><td class="p-3">自家源泉大浴場・敬老記念品贈呈</td><td class="p-3 font-bold text-amber-800">⭐ 4.43</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第7位 ホテル おかだ</td><td class="p-3">神奈川 箱根湯本</td><td class="p-3 font-bold text-amber-800">露天風呂付客室・エレベーター完備</td><td class="p-3 font-bold text-stone-800">個室和食会席 / 和洋バイキング</td><td class="p-3">5本の自家源泉・日帰り湯の里利用可</td><td class="p-3 font-bold text-amber-800">⭐ 4.41</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第8位 熱海後楽園ホテル</td><td class="p-3">静岡 熱海温泉</td><td class="p-3 font-bold text-amber-800">AQUA SQUARE 広々ユニバーサル室</td><td class="p-3 font-bold text-stone-800">個室ブッフェ「HARBOR\'S W」</td><td class="p-3">インフィニティ展望露天・スパFuua</td><td class="p-3 font-bold text-amber-800">⭐ 4.41</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第9位 伊豆長岡 ホテル天坊</td><td class="p-3">静岡 伊豆長岡</td><td class="p-3 font-bold text-amber-800">バリアフリー和洋室・無料貸切風呂</td><td class="p-3 font-bold text-stone-800">個室炭火焼きダイニング</td><td class="p-3">富士山展望足湯・3本自家源泉</td><td class="p-3 font-bold text-amber-800">⭐ 4.41</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第10位 伊香保温泉 福一</td><td class="p-3">群馬 伊香保温泉</td><td class="p-3 font-bold text-amber-800">石段街最上階直結・落ち着いた和室</td><td class="p-3 font-bold text-stone-800">個室お祝い会席 / 上州牛</td><td class="p-3">黄金の湯＆白銀の湯2種名湯・長寿祝着</td><td class="p-3 font-bold text-amber-800">⭐ 4.31</td></tr>',
    '</tbody></table></div>',
    '<h2 class="text-xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 my-8">🏆 【徹底検証】三世代・敬老の日名門温泉宿おすすめ10選の本音レビュー</h2>'
]

# 宿1: 鬼怒川温泉 あさや
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第1位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">栃木 鬼怒川温泉 鬼怒川温泉 あさや</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 栃木県日光市鬼怒川温泉滝813</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.63</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🎉</span> 三世代・敬老体験：創業130年の空中庭園露天風呂＆100種以上の豪華バイキング！三世代大絶賛の大型名門リゾート</h4><p class="text-xs text-stone-700 leading-relaxed">「祖父母も子どもも孫も全員が心から楽しめる最高峰リゾートで、鬼怒川随一の高さを誇る空中庭園露天風呂に浸かり、100種類以上の圧倒的ディナーバイキングや個室会席でお祝いしたい」という連休旅行に第1位です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8643/8643.jpg" alt="鬼怒川温泉 あさや" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 秀峰館 空中庭園露天風呂:</span> 鬼怒川温泉で最も高い場所にある展望風呂</div><div><span class="text-stone-400">■ 100種ディナーバイキング:</span> 和洋中・オープンキッチンステーキ・カニ・寿司</div><div><span class="text-stone-400">■ 個室料亭会席プランあり:</span> 落ち着いてお祝いしたいご家族に最適</div><div><span class="text-stone-400">■ 圧巻の吹き抜けロビー:</span> パイプオルガン演奏やキッズルーム完備</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 鬼怒川温泉駅ダイヤルバス運行＋楽天日本の宿アワード受賞＋楽天4.63</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「シニア世代から小さなお子様まで、誰もが退屈せず最高の笑顔になれるエンタメ性と温泉クオリティを求める三世代旅行」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">創業130年を超える鬼怒川屈指の大型ホテル。館内に入った瞬間に広がる豪奢な吹き抜けロビーは圧巻。名物の空中庭園露天風呂「昇龍の湯」からは秋風と鬼怒川の山並みが一望。夕食バイキングは100種類を超え、目の前で焼く黒毛和牛ステーキや握り寿司、揚げたて天ぷら、豪華スイーツが並び、個室会席プランでは敬老の日のお祝いも丁寧に対応してくれます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「秀峰館 眺望風呂付客室 / 八番館 貴賓室・和洋室」</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「三世代大満足！100種ディナーバイキング / 個室会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>東武鬼怒川線「鬼怒川温泉駅」よりダイヤルバス約8分。日光宇都宮道路「今市IC」より車約25分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 16:00空中庭園露天風呂 → 18:00豪華バイキングディナー（記念撮影） → 20:00吹き抜けロビー散策【2日目】07:30朝風呂 → 08:30朝食バイキング → 10:00日光東照宮・東武ワールドスクウェアへ</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">静寂な小規模民宿のみを好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">空中庭園露天風呂×100種豪華バイキング×三世代対応×楽天4.63。関東で三世代旅行に選んで絶対に失敗しない宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※鬼怒川温泉駅ダイヤルバス運行</span><span class="text-xs font-black text-amber-800">楽天日本の宿アワード受賞</span></div><a href="{make_aff_url(8643)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】鬼怒川温泉 あさやの空室・最安プランを見る</span></a></div>
</div>''')

# 宿2: 有馬温泉 兵衛向陽閣
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第2位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">兵庫 有馬温泉 有馬温泉 兵衛向陽閣（ひょうえこうようかく）</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 兵庫県神戸市北区有馬町1904</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.56</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🎉</span> 三世代・敬老体験：創業700年の老舗宿！3つの大浴場で金泉湯巡り＆個室黒毛和牛会席・長寿お祝い対応</h4><p class="text-xs text-stone-700 leading-relaxed">「豊臣秀吉公ゆかりの700年の歴史を誇る名門宿で、有馬名物『金泉』を趣の異なる3つの大浴場で巡り、部屋食または個室で黒毛和牛会席やちゃんちゃんこ貸出のお祝いをしたい」という関西三世代旅行に最適です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8636/8636.jpg" alt="有馬温泉 兵衛向陽閣" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 3つの大浴場で金泉巡り:</span> 和風・ローマ風・湯治場風の多彩な名湯</div><div><span class="text-stone-400">■ 個室食事処・部屋食会席:</span> 神戸牛・黒毛和牛と旬の秋会席</div><div><span class="text-stone-400">■ 長寿祝いちゃんちゃんこ無料:</span> 還暦・古希・喜寿・米寿の記念写真</div><div><span class="text-stone-400">■ バリアフリー対応充実:</span> 館内エレベーター・車椅子対応完備</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 有馬温泉駅無料送迎あり＋創業700年の伝統＋楽天4.56</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「有馬温泉の格式高い老舗宿で、金泉の温泉巡りと個室での黒毛和牛会席、丁寧な長寿祝いサービスを受けたい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">有馬温泉の高台に佇む創業700年の名門。「一の湯（和風）」「二の湯（ローマ風）」「三の湯（湯治場風）」と3つの趣の異なる大浴場で有馬名物の赤褐色「金泉」を贅沢に湯巡り。食事は部屋食または個室食事処でゆったり神戸牛や黒毛和牛を堪能でき、ちゃんちゃんこ貸出や家族集合写真のプレゼントなど、敬老の日の親孝行旅行に最高の宿です。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「北館 和洋室 / 南館 露天風呂付客室」（段差の少ない客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「個室で祝う！黒毛和牛ステーキ＆秋の味覚お祝い会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>神戸電鉄「有馬温泉駅」または阪急バス「有馬温泉」より無料送迎あり（約2分）。阪神高速「有馬口IC」より車約5分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30金泉大浴場巡り → 18:30個室で敬老の日お祝い会席（記念撮影） → 20:30貸切風呂【2日目】07:30朝風呂 → 08:30和朝食 → 10:00有馬温泉街・炭酸せんべい散策へ</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">低予算での素泊まりを希望する方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">創業700年有馬金泉×3つの大浴場×個室黒毛和牛×楽天4.56。関西の三世代旅行・長寿祝いで最も信頼される名門宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※有馬温泉駅より無料送迎あり</span><span class="text-xs font-black text-amber-800">創業700年の有馬名門宿</span></div><a href="{make_aff_url(8636)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】有馬温泉 兵衛向陽閣の空室・最安プランを見る</span></a></div>
</div>''')

# 宿3: 山代温泉 ゆのくに天祥
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第3位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">石川 加賀山代 山代温泉 ゆのくに天祥</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 石川県加賀市山代温泉19-49-1</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.48</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🎉</span> 三世代・敬老体験：一泊三湯十八ゆめぐり＆露天風呂付き客室「天祥の館」！三世代向け広々客室</h4><p class="text-xs text-stone-700 leading-relaxed">「北陸・加賀の名湯で、3つの大浴場と18種類の湯巡りを楽しみ、ベッド付きの広々とした露天風呂付き和洋室で祖父母も子どもも快適に過ごしたい」という北陸新幹線での三世代旅行に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1616/1616.jpg" alt="ゆのくに天祥" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 一泊三湯十八ゆめぐり:</span> 自家源泉と引湯源泉の3つの大浴場</div><div><span class="text-stone-400">■ 天祥の館 和洋室:</span> シニアに優しいローベッド完備の広々客室</div><div><span class="text-stone-400">■ 個室食事処 加賀会席:</span> 能登牛・日本海旬魚・加賀野菜</div><div><span class="text-stone-400">■ 無料温泉卵作り体験:</span> お孫さんと一緒に楽しめる人気アクティビティ</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 加賀温泉駅無料送迎あり＋1泊9,000円台〜＋楽天4.48</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「北陸新幹線を利用して三世代で加賀温泉へ行き、多彩な温泉湯巡りと個室での加賀郷土会席を楽しみたい方」に最適です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">加賀温泉郷を代表する大型名門宿。名物「一泊三湯十八ゆめぐり」は3つの大浴場で18種類の湯船があり、男女入れ替え制で多彩な名湯を堪能。シニア世代にも歩きやすいバリアフリー設計で、露天風呂付き客室「天祥の館」ではプライベートな湯浴みも可能。夕食は個室食事処で能登牛や加賀野菜をゆっくり味わえます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「天祥の館 露天風呂付和洋室 / ファミリールーム」</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「個室で味わう！能登牛ステーキ＆加賀旬彩特選会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR北陸新幹線「加賀温泉駅」より無料送迎バス約10分。北陸道「加賀IC」より車約15分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30温泉たまご作り体験 → 16:30一泊三湯湯巡り → 18:30個室で能登牛会席ディナー【2日目】07:30朝風呂 → 08:30和朝食 → 10:00山代温泉総湯・ゆのくにの森へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">10室以下の小さな民宿のみを好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">十八ゆめぐり×天祥の館露天付客室×個室能登牛会席×楽天4.48。北陸の三世代旅行に最も選ばれている名旅館です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※加賀温泉駅より無料送迎あり</span><span class="text-xs font-black text-amber-800">十八ゆめぐりの温泉名門宿</span></div><a href="{make_aff_url(1616)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】山代温泉 ゆのくに天祥の空室・最安プランを見る</span></a></div>
</div>''')

# 宿4: 鳥羽国際ホテル 潮路亭
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第4位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">三重 鳥羽温泉 鳥羽国際ホテル 潮路亭（しおじてい）</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 三重県鳥羽市鳥羽1-23-1</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.47</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🎉</span> 三世代・敬老体験：ミキモトコスメ真珠の恵みパールオーロラ風呂＆個室伊勢海老・松阪牛会席</h4><p class="text-xs text-stone-700 leading-relaxed">「鳥羽湾の絶景を望む和モダン旅館で、真珠成分がキラキラ輝く世界初のパールオーロラ風呂に浸かり、個室ダイニングで伊勢海老や松阪牛を味わう上質なお祝い旅行にしたい」というご家族に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8528/8528.jpg" alt="潮路亭" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ パールオーロラ風呂:</span> ミキモトコスメティクス開発の真珠美肌露天</div><div><span class="text-stone-400">■ 個室ダイニング「白石」:</span> 伊勢海老・鮑・松阪牛の特選和食</div><div><span class="text-stone-400">■ 鳥羽湾オーシャンフロント:</span> 窓から望む穏やかな海と緑の島々</div><div><span class="text-stone-400">■ 鳥羽国際ホテルのチーズケーキ:</span> 名物スイーツをラウンジで堪能</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 近鉄鳥羽駅無料送迎あり＋伊勢神宮参拝拠点＋楽天4.47</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「伊勢神宮参拝とあわせて、真珠の輝く特別な露天風呂と伊勢海老・松阪牛の極上会席でお祝いしたい三世代家族」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">鳥羽国際ホテルの敷地内に佇む和モダン温泉旅館。名物の露天風呂「パールオーロラ風呂」はお湯全体が真珠のように白く輝き、お肌がつるつるになると女性陣・シニアに大絶賛。夕食は個室ダイニングで伊勢湾の伊勢海老や黒毛和牛の最高峰・松阪牛が供され、敬老の日の記念日を華やかに彩ってくれます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「プレミアムスイート / 温泉露天風呂付客室」（鳥羽湾を一望する客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「個室ダイニングで味わう伊勢海老・松阪牛特選会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>近鉄・JR「鳥羽駅」より無料シャトルバス約5分。伊勢二見鳥羽ライン「鳥羽IC」より車約5分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30パールオーロラ露天風呂 → 18:30個室伊勢海老・松阪牛ディナー【2日目】07:30朝風呂 → 08:30和朝食 → 09:30伊勢神宮（内宮・おはらい町）参拝へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">大規模なバイキング形式のみを好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">パールオーロラ風呂×個室伊勢海老松阪牛×伊勢神宮アクセス×楽天4.47。伊勢志摩で最高のお祝いが叶う名門宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※鳥羽駅より無料シャトルバス運行</span><span class="text-xs font-black text-amber-800">真珠パール風呂の和モダン宿</span></div><a href="{make_aff_url(8528)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】鳥羽国際ホテル 潮路亭の空室・最安プランを見る</span></a></div>
</div>''')

# 宿5: 伝承千年の宿 佐勘
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第5位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">宮城 秋保温泉 伝承千年の宿 佐勘（さかん）</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 宮城県仙台市太白区秋保町湯元薬師28</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.44</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🎉</span> 三世代・敬老体験：名取川渓谷の名門旅館！伊達家ゆかりの湯＆個室仙台牛懐石・バリアフリー完備</h4><p class="text-xs text-stone-700 leading-relaxed">「仙台の奥座敷・秋保温泉の千年以上の歴史を誇る名門宿で、名取川の雪見・秋風露天風呂に入り、個室ダイニングで最高級仙台牛懐石を味わう三世代記念日旅行にしたい」というご家族に最適です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/63615/63615.jpg" alt="伝承千年の宿 佐勘" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 名取の御湯＆河原の湯:</span> 伊達政宗公が愛した歴史ある源泉露天</div><div><span class="text-stone-400">■ 個室ダイニング「御厨」:</span> A5ランク仙台牛と三陸海の幸懐石</div><div><span class="text-stone-400">■ 飛天館 和洋室:</span> 車椅子でも安心なバリアフリー設計客室</div><div><span class="text-stone-400">■ 充実の館内ギャラリー:</span> 伊達家の古文書や美術品を鑑賞</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 仙台駅無料送迎バス運行＋日本三御湯＋楽天4.44</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「東北新幹線で仙台へ向かい、格式ある千年の歴史空間で最高峰の仙台牛懐石と名湯を楽しみたい三世代家族」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">仙台・秋保温泉のシンボル宿。名取川の清流沿いに佇む露天風呂は風情満点で、シニア世代もゆったり落ち着いて名湯に浸かれます。個室ダイニングでの夕食はとろける仙台牛ステーキや三陸の旬魚が美しく並び、スタッフの丁寧なおもてなしと記念日対応で家族全員が笑顔になれる名旅館です。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「飛天館 和洋室 / 花館 和室」（段差の少ない快適客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「個室ダイニングで味わう仙台牛ステーキ＆三陸旬魚会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR「仙台駅」東口より無料送迎バス約40分（要予約）。東北道「仙台南IC」より車約15分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30河原の湯露天風呂 → 18:30個室で仙台牛会席ディナー（敬老祝い） → 20:30名取の御湯【2日目】07:30朝風呂 → 08:30朝食 → 10:00秋保大滝・松島観光へ</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">小規模な宿のみを希望する方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">日本三御湯佐勘×個室仙台牛懐石×仙台駅無料送迎×楽天4.44。東北を代表する風格ある名門温泉旅館です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※仙台駅より毎日無料送迎バス運行</span><span class="text-xs font-black text-amber-800">伝承千年の名門宿</span></div><a href="{make_aff_url(63615)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】伝承千年の宿 佐勘の空室・最安プランを見る</span></a></div>
</div>''')

# 宿6: 皆生つるや
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第6位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">鳥取 皆生温泉 皆生温泉 皆生つるや</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 鳥取県米子市皆生温泉2-5-1</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.43</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🎉</span> 三世代・敬老体験：日本庭園を望む数寄屋名門宿！個室料亭で味わう山陰旬魚会席＆敬老記念品サービス</h4><p class="text-xs text-stone-700 leading-relaxed">「四季折々の美しい日本庭園を囲む純和風旅館で、境港直送の新鮮な海の幸と鳥取牛を個室料亭で味わい、おじいちゃんおばあちゃんに感謝を伝えるお祝い旅にしたい」という山陰旅行に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/12537/12537.jpg" alt="皆生つるや" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 個室料亭「さらさ」:</span> 境港の活魚・鳥取牛を家族水入らずで</div><div><span class="text-stone-400">■ 美しい日本庭園:</span> ロビーから望む滝と四季の花々</div><div><span class="text-stone-400">■ 自家源泉「つるやの湯」:</span> 塩化物泉のよく温まる肌に優しい名湯</div><div><span class="text-stone-400">■ 長寿祝い特典:</span> ちゃんちゃんこ貸出・記念写真・記念品</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 1泊7,000円台〜の良心価格＋米子駅送迎あり＋楽天4.43</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「落ち着いた純和風の空間で、個室料亭での美味しい山陰の海の幸と心温まるお祝いサービスをコスパ良く受けたい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">皆生温泉の静かな中心街に佇む数寄屋造りの旅館。手入れの行き届いた日本庭園が美しく、館内は清潔感と温かみに溢れています。夕食は完全個室の料亭で境港直送の白身のトロ「のどぐろ」や鳥取牛が振る舞われ、敬老の日プランではちゃんちゃんこ貸出や家族写真のプレゼントなど、細やかな気遣いが嬉しい宿です。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「庭園側 和洋室 / 特別和室」（畳敷き＋ベッドの快適客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「個室料亭で祝う！境港旬魚＆鳥取牛特選会席お祝いプラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR「米子駅」より車約15分（無料送迎あり）。米子空港より車約20分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30日本庭園散策＆大浴場 → 18:30個室料亭で敬老お祝い会席（写真撮影） → 20:30露天風呂【2日目】07:30朝風呂 → 08:30和朝食 → 09:30足立美術館へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">大規模なリゾートアミューズメント施設を求める方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">日本庭園×個室料亭山陰会席×長寿祝い特典×楽天4.43。皆生温泉で最も三世代のお祝いに適した名旅館です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※米子駅より無料送迎あり・足立美術館至近</span><span class="text-xs font-black text-amber-800">個室料亭と庭園の名旅館</span></div><a href="{make_aff_url(12537)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】皆生温泉 皆生つるやの空室・最安プランを見る</span></a></div>
</div>''')

# 宿7: 箱根湯本 ホテル おかだ
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第7位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">神奈川 箱根湯本 箱根湯本温泉 ホテル おかだ</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 神奈川県足柄下郡箱根町湯本茶屋191</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.41</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🎉</span> 三世代・敬老体験：5本の自家源泉＆三世代向け露天風呂付客室！個室和食会席・バリアフリー完備</h4><p class="text-xs text-stone-700 leading-relaxed">「都心からロマンスカーで直行できる箱根湯本の高台で、5本の自家源泉から湧く豊富な温泉と客室露天風呂を楽しみ、個室で本格和食会席を味わいたい」という首都圏からの三世代旅行に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/19684/19684.jpg" alt="ホテル おかだ" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 5本の自家源泉:</span> 毎分270Lの豊富な湧出量を誇る美肌温泉</div><div><span class="text-stone-400">■ 露天風呂付客室「粋彩」:</span> 足腰が楽なベッド完備の和モダン室</div><div><span class="text-stone-400">■ 個室和食ダイニング:</span> 相模湾の旬魚と足柄牛の会席料理</div><div><span class="text-stone-400">■ 日帰り温泉「湯の里おかだ」:</span> 宿泊者は無料で湯巡り可能</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 箱根湯本駅より循環バス約5分＋1泊1万円前後〜＋楽天4.41</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「ロマンスカーでアクセス抜群の箱根湯本で、シニアに優しい露天風呂付き客室と個室会席を楽しみたい三世代家族」に最適です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">箱根湯本の須雲川沿いに建つ大型名門ホテル。館内には5本の自家源泉があり、最上階の展望露天風呂や隣接する「湯の里おかだ」で多彩な湯巡りが可能。バリアフリー設計の露天風呂付き客室「粋彩」は段差が少なく、祖父母も安心して宿泊可能。個室での夕食会席は伊豆・相模の海の幸や足柄牛が美しく並びます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「露天風呂付客室 粋彩 / 和洋室」（ベッド完備の快適客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「個室で味わう！足柄牛ステーキ＆相模湾旬魚会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>箱根登山鉄道「箱根湯本駅」より旅館送迎シャトルバス約5分（100円）。小田原厚木道路「山崎IC」より車約5分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30客室露天風呂＆湯の里おかだ湯巡り → 18:30個室会席ディナー【2日目】07:30朝風呂 → 08:30朝食 → 10:00箱根神社・芦ノ湖海賊船へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">奥箱根の秘湯のみを好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">箱根湯本駅5分×5本自家源泉×個室会席×楽天4.41。首都圏から最も行きやすい三世代温泉宿の王道です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※箱根湯本駅シャトルバス5分</span><span class="text-xs font-black text-amber-800">5本の自家源泉を誇る宿</span></div><a href="{make_aff_url(19684)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】箱根湯本温泉 ホテル おかだの空室・最安プランを見る</span></a></div>
</div>''')

# 宿8: 熱海後楽園ホテル
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第8位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">静岡 熱海温泉 熱海温泉 熱海後楽園ホテル</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 静岡県熱海市和田浜南町10-1</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.41</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🎉</span> 三世代・敬老体験：相模湾一望インフィニティ大露天風呂＆オーシャンスパFuua！全世代満足の大型リゾート</h4><p class="text-xs text-stone-700 leading-relaxed">「新幹線ですぐの熱海温泉で、相模湾の海と夜景を一望するインフィニティ露天風呂に入り、日帰り温泉スパ『Fuua』や個室ブッフェレストランで三世代みんなが笑顔になりたい」という連休旅行に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1656/1656.jpg" alt="熱海後楽園ホテル" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ インフィニティ大露天風呂:</span> 相模湾と熱海市街の夜景パノラマ</div><div><span class="text-stone-400">■ オーシャンスパ Fuua:</span> 立ち湯露天風呂や多彩な岩盤浴</div><div><span class="text-stone-400">■ ブッフェ「HARBOR\'S W」:</span> 窯焼きピザ・伊豆海の幸・グリル料理</div><div><span class="text-stone-400">■ ユニバーサルルーム完備:</span> 車椅子でも安心なバリアフリー客室</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> JR熱海駅無料シャトルバス運行＋1泊9,000円台〜＋楽天4.41</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「新幹線で気軽に熱海へ行き、相模湾の海原と夜景、開放的な温泉スパを三世代で思い切り満喫したい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">熱海港の目の前に建つ一大リゾート。複合施設「ATAMI BAY RESORT KORAKUEN」内にあり、日本最大級の露天立ち湯を誇る「オーシャンスパ Fuua」は圧巻。客室棟「AQUA SQUARE」は段差のないユニバーサルルームを備え、レストラン「HARBOR\'S W」では伊豆の新鮮な海の幸やグリル料理をオープンキッチンで楽しめます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「AQUA SQUARE ユニバーサルルーム / タワー館 オーシャンビュー」</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「伊豆海の幸＆グリル！HARBOR\'S W豪華ディナーブッフェプラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR東海道新幹線「熱海駅」より無料シャトルバス約10分。西湘バイパス「石橋IC」より車約25分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30オーシャンスパFuuaで絶景立ち湯 → 18:00ディナーブッフェ → 20:00熱海夜景鑑賞【2日目】07:30朝風呂 → 08:30朝食 → 10:00熱海サンビーチ・熱海梅園へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">純和風の静かな木造旅館のみを好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">相模湾インフィニティ露天×オーシャンスパFuua×新幹線熱海駅10分×楽天4.41。全世代が楽しめる熱海温泉の代表格です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※熱海駅より無料シャトルバス運行</span><span class="text-xs font-black text-amber-800">相模湾一望の大型リゾート</span></div><a href="{make_aff_url(1656)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】熱海温泉 熱海後楽園ホテルの空室・最安プランを見る</span></a></div>
</div>''')

# 宿9: 伊豆長岡 ホテル天坊
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第9位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">静岡 伊豆長岡 伊豆長岡温泉 ホテル天坊</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 静岡県伊豆の国市長岡431-1</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.41</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🎉</span> 三世代・敬老体験：富士山を望む足湯＆3本の自家源泉と多彩な貸切露天風呂！個室炭火焼きダイニング</h4><p class="text-xs text-stone-700 leading-relaxed">「伊豆屈指の名湯・伊豆長岡で、富士山を望む展望足湯や3本の自家源泉を巡り、個室ダイニングで炭火焼きや伊豆海の幸を味わう三世代旅にしたい」というご家族に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/67097/67097.jpg" alt="ホテル天坊" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 富士山展望足湯テラス:</span> 晴れた日には秀峰富士を一望</div><div><span class="text-stone-400">■ 3本の自家源泉＆湯巡り:</span> 露天風呂「天見の湯」など多彩な湯船</div><div><span class="text-stone-400">■ 個室ダイニング「旬の坊」:</span> 炭火焼きとオープンキッチンの会席</div><div><span class="text-stone-400">■ バリアフリー客室あり:</span> 車椅子でも移動しやすい快適空間</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 伊豆長岡駅無料送迎あり＋1泊1万円前後〜＋楽天4.41</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「富士山を望む絶景足湯と多彩な温泉湯巡りを楽しみ、個室で炭火焼き料理を味わいたい三世代家族」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">伊豆長岡温泉の高台に位置する人気宿。屋上の足湯テラスからは富士山が美しく望め、3本の自家源泉から引く大浴場露天風呂は肌に優しい単純温泉。個室ダイニング「旬の坊」では、駿河湾の新鮮な魚介や国産牛を炭火で焼き上げるライブ感あふれる食事が楽しめ、家族の会話も大いに弾みます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「バリアフリー対応 和洋室 / 展望風呂付客室」</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「個室ダイニングで味わう炭火焼き＆伊豆海の幸会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>伊豆箱根鉄道「伊豆長岡駅」より無料送迎バス約10分。東駿河湾環状道路「長岡IC」より車約5分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30富士山展望足湯 → 16:30大浴場露天風呂 → 18:30個室炭火焼きディナー【2日目】07:30朝風呂 → 08:30朝食 → 10:00修善寺温泉・伊豆パノラマパークへ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">海沿いのビーチフロント立地のみを好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">富士山展望足湯×3本自家源泉×個室炭火焼きダイニング×楽天4.41。伊豆長岡で三世代旅行に選ばれ続ける安心の宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※伊豆長岡駅より無料送迎あり</span><span class="text-xs font-black text-amber-800">富士山を望む足湯と名湯宿</span></div><a href="{make_aff_url(67097)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】伊豆長岡温泉 ホテル天坊の空室・最安プランを見る</span></a></div>
</div>''')

# 宿10: 伊香保温泉 福一
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-black text-xs rounded-xl shadow-sm">第10位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">群馬 伊香保温泉 伊香保温泉 福一（ふくいち）</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 群馬県渋川市伊香保町伊香保香湯5-4</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.31</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🎉</span> 三世代・敬老体験：創業440年の名門宿！「黄金の湯」と「白銀の湯」の2種名湯＆石段街直結・個室お祝い会席</h4><p class="text-xs text-stone-700 leading-relaxed">「伊香保温泉の石段街最上階に直結する創業440年の老舗旅館で、伊香保の2大名湯『黄金の湯』と『白銀の湯』の両方を堪能し、個室で上州牛ステーキと長寿祝いを楽しみたい」というご家族に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/28606/28606.jpg" alt="福一" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 黄金の湯＆白銀の湯:</span> 伊香保の2大名湯を両方引き湯する名宿</div><div><span class="text-stone-400">■ 石段街最上部（最上階）直結:</span> 階段の上り下りなく石段街散策へ</div><div><span class="text-stone-400">■ 個室お祝い会席:</span> 上州牛・上州麦豚・群馬の味覚</div><div><span class="text-stone-400">■ 創業440年の格式とおもてなし:</span> 落ち着いた和風数寄屋建築</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 伊香保バスターミナル無料送迎あり＋1泊9,000円台〜＋楽天4.31</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「シニア世代に負担をかけず石段街の散策と名湯温泉を楽しみ、個室で上州牛会席を味わいたい三世代家族」に最適です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">伊香保温泉の歴史を見守り続けてきた創業440年の名門旅館。最大の魅力は、館内からエレベーターで石段街の最上階（伊香保神社近く）へ直結している点。石段を下りるだけで散策できるため、足腰に不安のある祖父母も無理なく伊香保の風情を楽しめます。茶褐色の黄金の湯と透明な白銀の湯の両方に浸かれ、個室でのお祝い会席も大好評です。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「萬葉館 和室 / 和洋室」（上質な落ち着いた空間）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「個室で祝う！上州牛ステーキ＆季節の旬彩お祝い会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR「渋川駅」より路線バス約25分「伊香保温泉」下車（無料送迎あり）。関越道「渋川伊香保IC」より車約20分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30エレベーターで直結の石段街散策 → 17:00黄金の湯＆白銀の湯湯巡り → 18:30個室お祝い会席ディナー【2日目】07:30朝風呂 → 08:30和朝食 → 10:00榛名湖・水沢うどんへ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">洋風リゾートホテルのみを好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">創業440年×黄金＆白銀2種名湯×石段街直結×楽天4.31。伊香保で三世代旅行に最も選ばれる名門旅館です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※石段街最上部直結・伊香保送迎あり</span><span class="text-xs font-black text-amber-800">創業440年の伊香保名門宿</span></div><a href="{make_aff_url(28606)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】伊香保温泉 福一の空室・最安プランを見る</span></a></div>
</div>''')

# FAQ・関連記事ナビ
review_parts.append('''<h2 class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-8">💡 三世代・敬老の日旅行に関するよくある質問（FAQ）</h2>
<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
      <span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">Q</span>
      三世代旅行での客室選びのコツは？（ベッド・広さなど）
    </h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-amber-200">
      <span class="font-bold text-amber-700">A.</span> シニア世代が立ち上がりやすい<strong>「ベッド付き和洋室」</strong>や、家族全員でゆったり寛げる2間続きの客室が最も人気です。また、大浴場まで歩くのが大変な場合は<strong>「客室露天風呂付き」や「貸切風呂確約プラン」</strong>を選ぶと安心です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
      <span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">Q</span>
      敬老の日・長寿祝いのお祝いプラン特典にはどんなものがある？
    </h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-amber-200">
      <span class="font-bold text-amber-700">A.</span> <strong>「長寿祝いちゃんちゃんこ（赤・紫・黄・白）の無料貸出、乾杯用スパークリングワイン、記念写真撮影＆フォトフレーム贈呈、お祝いデザートプレート」</strong>などが用意されています。予約時に宿へ「敬老の日のお祝いで宿泊」と伝えておくのがスムーズです。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
      <span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">Q</span>
      三世代旅行の食事は「個室会席」と「バイキング」どちらがおすすめ？
    </h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-amber-200">
      <span class="font-bold text-amber-700">A.</span> 落ち着いて会話を楽しみたい・特別なお祝いの席にしたい場合は<strong>「個室食事処・部屋食」</strong>が最適です。一方、小さなお子様や好き嫌いが多いご家族がいる場合は、好きなものを自由に食べられる<strong>「高級バイキング（鬼怒川あさや・エピナール那須など）」</strong>が圧倒的な満足度を誇ります。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-50 border border-stone-200/90 shadow-sm">
  <div class="flex items-center gap-2 mb-3 border-b border-stone-200 pb-2">
    <span class="px-2.5 py-0.5 bg-stone-800 text-white font-black text-xs rounded-md">旅行ナレッジ</span>
    <h3 class="text-sm font-bold text-stone-900">📍 三世代・敬老の日温泉宿 宿泊エリアガイド＆旅行情報</h3>
  </div>
  <p class="text-xs text-stone-600 leading-relaxed">
    当ガイドでは、<strong>日本全国の三世代旅行・敬老の日のお祝い自慢の名門温泉旅館（栃木鬼怒川・兵庫有馬・石川加賀山代・三重鳥羽・宮城秋保・鳥取皆生・神奈川箱根湯本・静岡熱海/伊豆長岡・群馬伊香保）</strong>を厳選してご紹介しています。
    楽天トラベルの最新空室状況・限定宿泊プラン・リアルタイムクチコミ評価と直結しており、失敗しないホテル選びをサポートします。
  </p>
  <div class="mt-4 pt-3 border-t border-stone-200 flex flex-wrap gap-2 text-2xs text-stone-500">
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">エリア: 全国（栃木・兵庫・石川・三重・宮城・鳥取・神奈川・静岡・群馬）</span>
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">テーマ: 三世代旅行・敬老の日・シルバーウィーク・バリアフリー・個室会席・長寿祝い・露天風呂付客室</span>
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">更新日: 2026年最新版</span>
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">即時予約・公式連携</span>
  </div>
</div>

<div class="my-12 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-stone-50 via-amber-50/40 to-orange-50/30 border border-amber-200/80 shadow-md">
  <div class="flex items-center gap-2 mb-4 border-b border-amber-200 pb-3">
    <span class="px-3 py-1 bg-amber-600 text-white font-black text-xs rounded-lg">関連記事ナビ</span>
    <h3 class="text-base md:text-lg font-bold text-stone-900">🗺️ あわせて読みたい！秋の連休＆名湯特集</h3>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
    <div class="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-2">
      <h4 class="text-xs font-black text-amber-900">💎 人気の秋連休・秋の味覚特集</h4>
      <a href="/posts/silver-week-autumn-highland-panoramic-resort-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-amber-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-amber-700 transition">
        👉 【2026SW】秋風爽やかな高原リゾート宿10選！比較
      </a>
      <a href="/posts/winter-brand-tagged-crab-echizen-matsuba-onsen-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-amber-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-amber-700 transition">
        👉 タグ付き活蟹が旨い名門温泉宿10選！比較
      </a>
      <a href="/posts/susuki-grassland-autumn-view-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-amber-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-amber-700 transition">
        👉 黄金のすすき草原が見える宿10選！比較
      </a>
      <a href="/posts/matsutake-all-you-can-eat-kaiseki-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-amber-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-amber-700 transition">
        👉 松茸尽くし会席が旨い温泉宿10選！比較
      </a>
    </div>
    <div class="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-2">
      <h4 class="text-xs font-black text-orange-900">🎌 エリア別特集</h4>
      <a href="/posts/kanagawa-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-orange-700">🏨 【神奈川・箱根湯本】厳選10選ガイド</a>
      <a href="/posts/hyogo-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-orange-700">🏨 【兵庫・有馬城崎】厳選10選ガイド</a>
      <a href="/posts/shizuoka-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-orange-700">🏨 【静岡・熱海伊豆】厳選10選ガイド</a>
      <a href="/posts/tochigi-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-orange-700">🏨 【栃木・日光鬼怒川】厳選10選ガイド</a>
    </div>
  </div>
</div>''')

slug = 'silver-week-three-generation-keirou-onsen-hotels-guide'
title = '【2026SW】三世代・敬老祝い名門温泉宿10選！比較'
desc = 'シルバーウィークは家族揃って温泉旅行！箱根・有馬・鬼怒川・熱海から加賀、秋保、鳥羽まで徹底比較。バリアフリー客室や露天風呂付客室、個室お祝い会席、長寿祝い特典が充実した名門旅館10選を本音レビュー。全施設楽天公式最新空室リンク付き。'

post_data = {
    'id': slug,
    'slug': slug,
    'title': title,
    'description': desc,
    'prefecture': '全国',
    'area': '全国（栃木・兵庫・石川・三重・宮城・鳥取・神奈川・静岡・群馬）',
    'hotel_name': '三世代・敬老祝い名門温泉宿おすすめ10選',
    'image': 'https://img.travel.rakuten.co.jp/share/HOTEL/8643/8643.jpg',
    'other_images': [],
    'affiliate_url': make_aff_url(8643),
    'price': 20900,
    'rating': 4.63,
    'date': '2026-08-27',
    'categories': [
        '特集10選',
        'キラーコンテンツ',
        '後悔回避',
        'ホテル厳選',
        'シルバーウィーク',
        '三世代旅行',
        '敬老の日',
        'バリアフリー'
    ],
    'keywords': [
        'シルバーウィーク 家族旅行 宿 おすすめ 10選',
        '敬老の日 温泉旅行 おすすめ 比較',
        '三世代旅行 露天風呂付き客室 予約',
        'シルバーウィーク 祖父母 孫 温泉宿 比較',
        '敬老の日 お祝い 温泉旅館 比較',
        '三世代 温泉 楽天トラベル'
    ],
    'is_special_feature': True,
    'review': ''.join(review_parts)
}

target_file = f'src/data/posts/{slug}.json'
with open(target_file, 'w', encoding='utf-8') as f:
    json.dump(post_data, f, ensure_ascii=False, indent=2)

print('Generated post file successfully:', target_file)
