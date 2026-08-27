import json
import urllib.parse

with open('scratch/ocean_10_hotels.json', 'r', encoding='utf-8') as f:
    hotels = json.load(f)

aff_id = '54d2a438.4bc4abc2.54d2a439.aa1be583'

def make_aff_url(no):
    target = f'https://travel.rakuten.co.jp/HOTEL/{no}/{no}.html'
    return f'https://hb.afl.rakuten.co.jp/hgc/{aff_id}/?pc={urllib.parse.quote(target, safe="")}'

review_parts = [
    '<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-cyan-600 pb-2 mb-4">【2026年最新SW特集】海一望インフィニティ露天風呂＆秋海鮮バイキングホテルおすすめ10選！比較</h2>',
    '<p class="text-sm text-stone-700 leading-relaxed my-3 font-medium">9月のシルバーウィーク（秋の大型連休）は、まだ心地よい温かさを残す海風と青く澄み渡る秋晴れの下、太平洋や日本海の水平線と溶け合う「インフィニティ展望露天風呂」や、秋に解禁される伊勢海老・戻り鰹・アワビ・金目鯛・本マグロを贅沢に味わうオーシャンリゾートへの旅行が絶大な人気を誇ります。海一望パノラマ露天と名物金目鯛姿煮・舟盛りが圧巻の東伊豆（食べるお宿 浜の湯）、別府湾を一望する5段の棚田状インフィニティ露天と豪華バイキングの大分（別府温泉 杉乃井ホテル）、紀淡海峡の海原を望む棚田露天と淡路島会席の兵庫（ホテルニューアワジ）、太平洋と一体化する屋上温泉ぷーろと房総伊勢海老の千葉（鴨川館）、全室スイートの城郭ホテルで王様のビュッフェを味わう和歌山（ホテル川久）、英虞湾パノラマの絶景庭園露天風呂が美しい三重（賢島宝生苑）、日本の夕陽百選・駿河湾一望の西伊豆（堂ヶ島ニュー銀水）、伊勢湾一望の最上階露天風呂と知多牛の愛知（源氏香）、鳥羽湾の海百景湯巡りとバイキングの三重（鳥羽シーサイドホテル）、三浦三崎港直送の本マグロ食べ放題バイキングが自慢の神奈川（マホロバ・マインズ三浦）まで、開放的な海絶景と極上の秋海鮮を満喫できる名門ホテル10選を本音で比較レビューします。全施設、楽天トラベル公式最新空室リンク付き。</p>',
    '<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950 text-white border border-cyan-500/30 shadow-xl p-6 md:p-8">',
    '<h3 class="text-lg font-bold text-cyan-300 mb-3">🌊 なぜ「シルバーウィークの海一望インフィニティ露天ステイ」は格別なのか？</h3>',
    '<p class="text-xs text-stone-200 leading-relaxed mb-3">真夏の混雑や酷暑が落ち着き、空気が澄み渡る9月の海辺は<strong>「どこまでも青く広がる水平線と、心地よい秋の潮風」</strong>を最も贅沢に味わえるベストシーズンです。</p>',
    '<p class="text-xs text-stone-200 leading-relaxed mb-3">湯船と海が一体化するインフィニティ露天風呂から眺める夕暮れのグラデーションや朝焼けの海原、そして<strong>「9月に漁が解禁される秋の伊勢海老、脂がのった戻り鰹、金目鯛、鮑、本マグロの食べ放題」</strong>は、海辺のリゾートならではの至福の感動を与えてくれます。</p>',
    '<p class="text-xs text-stone-200 leading-relaxed">カップルの記念日ドライブや家族での連休バカンスに、息を呑む絶景と美食を心ゆくまでお楽しみください。</p>',
    '</div>',
    '<h2 class="text-xl font-bold text-stone-900 border-b border-cyan-300 pb-2 my-8">🧭 失敗しない「海一望インフィニティ露天ホテル」選び4大チェックポイント</h2>',
    '<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-cyan-950 flex items-center gap-2"><span class="px-2 py-0.5 bg-cyan-600 text-white text-xs font-black rounded-md">POINT</span>基準1：海と空が一体化する「インフィニティ展望露天風呂」の開放感</h4><p class="text-xs text-stone-600 leading-relaxed">遮るもののないオーシャンビューや、湯船から海原・水平線を一望できる絶景設計かを検証。</p></div>',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-cyan-950 flex items-center gap-2"><span class="px-2 py-0.5 bg-cyan-600 text-white text-xs font-black rounded-md">POINT</span>基準2：秋解禁の伊勢海老・金目鯛・本マグロ等の極上秋海鮮ディナー</h4><p class="text-xs text-stone-600 leading-relaxed">地元漁港直送の新鮮な海の幸会席や、ライブキッチンで焼き立て・握りたてが並ぶ高級バイキングかを重視。</p></div>',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-cyan-950 flex items-center gap-2"><span class="px-2 py-0.5 bg-cyan-600 text-white text-xs font-black rounded-md">POINT</span>基準3：全室オーシャンビューまたは海を望む絶景客室の居心地</h4><p class="text-xs text-stone-600 leading-relaxed">客室の窓やバルコニーから潮風を感じながら海と夕陽、朝焼けを楽しめるかをセレクト。</p></div>',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-cyan-950 flex items-center gap-2"><span class="px-2 py-0.5 bg-cyan-600 text-white text-xs font-black rounded-md">POINT</span>基準4：楽天トラベルクチコミ・ロケーション評価の圧倒的高さ</h4><p class="text-xs text-stone-600 leading-relaxed">実際に宿泊した旅行者から「露天風呂からの海の眺めが最高」「夕食の海鮮に感動した」と絶賛される宿を厳選。</p></div>',
    '</div>',
    '<h2 class="text-xl font-bold text-stone-900 border-b border-cyan-300 pb-2 my-8">📊 海一望インフィニティ温泉露天ホテルおすすめ10選のスペック比較一覧表</h2>',
    '<div class="my-6 overflow-x-auto rounded-2xl border border-stone-300 shadow-sm"><table class="w-full text-left text-xs text-stone-700 bg-white"><thead class="bg-stone-900 text-cyan-300 font-bold border-b border-stone-300"><tr><th class="p-3">順位・宿名</th><th class="p-3">所在地</th><th class="p-3">海一望露天風呂・温泉</th><th class="p-3">秋の海鮮ディナー</th><th class="p-3">ロケーション</th><th class="p-3">クチコミ</th></tr></thead><tbody class="divide-y divide-stone-200">',
    '<tr class="hover:bg-cyan-50/50"><td class="p-3 font-bold text-stone-900">第1位 食べるお宿 浜の湯</td><td class="p-3">静岡 東伊豆稲取</td><td class="p-3 font-bold text-cyan-800">満天大望風呂・海一望パノラマ露天</td><td class="p-3 font-bold text-stone-800">金目鯛姿煮・豪華舟盛りフルコース</td><td class="p-3">伊豆稲取岬のオーシャンフロント</td><td class="p-3 font-bold text-cyan-800">⭐ 4.70</td></tr>',
    '<tr class="hover:bg-cyan-50/50"><td class="p-3 font-bold text-stone-900">第2位 別府温泉 杉乃井ホテル</td><td class="p-3">大分 別府温泉</td><td class="p-3 font-bold text-cyan-800">5段棚田状大展望露天「棚湯」</td><td class="p-3 font-bold text-stone-800">超豪華ワールドディナーバイキング</td><td class="p-3">別府湾と市街地を見下ろす高台</td><td class="p-3 font-bold text-cyan-800">⭐ 4.63</td></tr>',
    '<tr class="hover:bg-cyan-50/50"><td class="p-3 font-bold text-stone-900">第3位 ホテルニューアワジ</td><td class="p-3">兵庫 淡路島洲本</td><td class="p-3 font-bold text-cyan-800">紀淡海峡パノラマ「淡路棚田の湯」</td><td class="p-3 font-bold text-stone-800">伊勢海老・淡路牛・由良ウニ会席</td><td class="p-3">全室オーシャンビュー海沿い</td><td class="p-3 font-bold text-cyan-800">⭐ 4.62</td></tr>',
    '<tr class="hover:bg-cyan-50/50"><td class="p-3 font-bold text-stone-900">第4位 鴨川館</td><td class="p-3">千葉 南房総鴨川</td><td class="p-3 font-bold text-cyan-800">屋上温泉ぷーろ「HARUKA」</td><td class="p-3 font-bold text-stone-800">房総秋伊勢海老・鮑・地魚会席</td><td class="p-3">鴨川松原海岸一望・シーワールド至近</td><td class="p-3 font-bold text-cyan-800">⭐ 4.60</td></tr>',
    '<tr class="hover:bg-cyan-50/50"><td class="p-3 font-bold text-stone-900">第5位 白浜温泉 ホテル川久</td><td class="p-3">和歌山 南紀白浜</td><td class="p-3 font-bold text-cyan-800">田辺湾を一望する贅沢な温泉サロン</td><td class="p-3 font-bold text-stone-800">王様のビュッフェ（十勝牛・海鮮）</td><td class="p-3">全室スイートの海辺宮殿ホテル</td><td class="p-3 font-bold text-cyan-800">⭐ 4.54</td></tr>',
    '<tr class="hover:bg-cyan-50/50"><td class="p-3 font-bold text-stone-900">第6位 賢島宝生苑</td><td class="p-3">三重 伊勢志摩</td><td class="p-3 font-bold text-cyan-800">朝なぎの湯・夕なぎの湯（庭園露天）</td><td class="p-3 font-bold text-stone-800">伊勢海老・鮑・松阪牛会席</td><td class="p-3">英虞湾パノラマリアス海岸</td><td class="p-3 font-bold text-cyan-800">⭐ 4.46</td></tr>',
    '<tr class="hover:bg-cyan-50/50"><td class="p-3 font-bold text-stone-900">第7位 堂ヶ島ニュー銀水</td><td class="p-3">静岡 西伊豆堂ヶ島</td><td class="p-3 font-bold text-cyan-800">駿河湾と奇岩を望む絶景展望露天風呂</td><td class="p-3 font-bold text-stone-800">伊豆海の幸バイキング / 個室会席</td><td class="p-3">日本の夕陽百選・全室オーシャン</td><td class="p-3 font-bold text-cyan-800">⭐ 4.38</td></tr>',
    '<tr class="hover:bg-cyan-50/50"><td class="p-3 font-bold text-stone-900">第8位 南知多温泉郷 源氏香</td><td class="p-3">愛知 南知多</td><td class="p-3 font-bold text-cyan-800">最上階インフィニティ展望露天風呂</td><td class="p-3 font-bold text-stone-800">知多牛＆伊勢湾旬魚会席</td><td class="p-3">伊勢湾一望・お香が香る和モダン</td><td class="p-3 font-bold text-cyan-800">⭐ 4.38</td></tr>',
    '<tr class="hover:bg-cyan-50/50"><td class="p-3 font-bold text-stone-900">第9位 鳥羽シーサイドホテル</td><td class="p-3">三重 鳥羽温泉</td><td class="p-3 font-bold text-cyan-800">鳥羽湾一望の3つの館内湯巡り</td><td class="p-3 font-bold text-stone-800">伊勢海老・鮑・秋海鮮バイキング</td><td class="p-3">鳥羽湾を抱くパノラマ岬立地</td><td class="p-3 font-bold text-cyan-800">⭐ 4.37</td></tr>',
    '<tr class="hover:bg-cyan-50/50"><td class="p-3 font-bold text-stone-900">第10位 マホロバ・マインズ三浦</td><td class="p-3">神奈川 三浦半島</td><td class="p-3 font-bold text-cyan-800">天然温泉大浴場・露天風呂</td><td class="p-3 font-bold text-stone-800">三崎港直送 本マグロ食べ放題バイキング</td><td class="p-3">東京湾一望の高台リゾート</td><td class="p-3 font-bold text-cyan-800">⭐ 4.19</td></tr>',
    '</tbody></table></div>',
    '<h2 class="text-xl font-bold text-stone-900 border-b-2 border-cyan-600 pb-2 my-8">🏆 【徹底検証】海一望インフィニティ露天ホテルおすすめ10選の本音レビュー</h2>'
]

# 宿1: 食べるお宿 浜の湯
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-cyan-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs rounded-xl shadow-sm">第1位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">静岡 東伊豆 伊豆稲取温泉 食べるお宿 浜の湯</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 静岡県賀茂郡東伊豆町稲取1017</span><span class="px-3 py-1 bg-cyan-50 text-cyan-800 border border-cyan-300 font-black text-xs rounded-full shadow-sm">⭐ 4.70</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🌊</span> 海絶景＆秋海鮮体験：海一望パノラマ露天風呂「満天大望風呂」＆名物金目鯛姿煮・豪華舟盛りフルコース！</h4><p class="text-xs text-stone-700 leading-relaxed">「目の前に広がる太平洋と伊豆諸島を一望する展望露天風呂に入り、伊豆名物の大きな金目鯛姿煮や豪華な舟盛りなど圧倒的な海の幸をお腹いっぱい味わいたい」というシルバーウィークの美食旅に第1位です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/14503/14503.jpg" alt="食べるお宿 浜の湯" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-cyan-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 満天大望風呂:</span> 海と空が広がる最上階大パノラマ露天風呂</div><div><span class="text-stone-400">■ 名物 金目鯛姿煮:</span> 秘伝のタレでふっくら煮付けた絶品</div><div><span class="text-stone-400">■ 圧倒的な豪華舟盛り:</span> 稲取港直送の地魚・伊勢海老・鮑</div><div><span class="text-stone-400">■ 貸切露天風呂「エル・ダンジュ」:</span> 絶景オーシャンプライベートスパ</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 伊豆稲取駅無料送迎あり＋楽天日本の宿アワード受賞＋楽天4.70</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「太平洋の絶景露天風呂と、これ以上ないほど贅沢な金目鯛や新鮮な舟盛りをお腹いっぱい食べたい海鮮ラバー」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">伊豆稲取岬の先端に佇む「食べるお宿」。最上階のパノラマ露天風呂「天楼の湯」からは水平線から昇る朝日や満天の星空が一望。夕食は「昼食は軽めにしてお越しください」と宿自ら案内するほどの圧倒的ボリュームで、テーブルに乗り切らない巨大舟盛りと肉厚な金目鯛の姿煮が圧巻の美味しさです。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「オーシャンビュー客室 / 露天風呂付客室」（海を一望する客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「名物金目鯛姿煮＆豪華舟盛り！海の幸大盤振る舞いプラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>伊豆急行「伊豆稲取駅」より車約5分（無料送迎あり）。小田原厚木道路「小田原西IC」より車約90分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30満天大望風呂で海絶景 → 18:00金目鯛姿煮＆舟盛りディナー → 20:30貸切風呂【2日目】06:00水平線の日の出朝風呂 → 08:00海の幸朝食 → 10:00河津七滝・下田へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">少食で軽い食事のみを希望する方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border-2 border-cyan-300"><h4 class="font-black text-cyan-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-cyan-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-cyan-950 font-bold">海一望パノラマ露天×金目鯛姿煮×豪華舟盛り×楽天4.70。伊豆で海鮮と海絶景を極めるならここ一択です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※伊豆稲取駅より無料送迎あり</span><span class="text-xs font-black text-cyan-800">驚異の楽天評価4.70</span></div><a href="{make_aff_url(14503)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】食べるお宿 浜の湯の空室・最安プランを見る</span></a></div>
</div>''')

# 宿2: 別府温泉 杉乃井ホテル
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-cyan-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs rounded-xl shadow-sm">第2位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">大分 別府温泉 別府温泉 杉乃井ホテル（オリックスホテルズ＆リゾーツ）</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 大分県別府市観海寺1</span><span class="px-3 py-1 bg-cyan-50 text-cyan-800 border border-cyan-300 font-black text-xs rounded-full shadow-sm">⭐ 4.63</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🌊</span> 海絶景＆秋海鮮体験：別府湾を一望する5段棚田状インフィニティ露天「棚湯」＆超豪華ディナーバイキング</h4><p class="text-xs text-stone-700 leading-relaxed">「別府の高台から別府湾と街の夜景を見下ろす圧倒的スケールのインフィニティ露天風呂『棚湯』に入り、豊後水道の新鮮魚介やステーキが並ぶ最高峰バイキングを満喫したい」という九州旅行に最適です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5547/5547.jpg" alt="杉乃井ホテル" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-cyan-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 大展望露天風呂「棚湯」:</span> 5段の湯船から別府湾パノラマを一望</div><div><span class="text-stone-400">■ 屋外型温泉「アクアガーデン」:</span> 噴水ショーが楽しめる水着温泉</div><div><span class="text-stone-400">■ ワールドダイニング「シーダパレス」:</span> 海鮮・ステーキ・本格中華</div><div><span class="text-stone-400">■ 宙館 展望露天「宙湯」:</span> 海抜約250mの最上階インフィニティ露天</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> JR別府駅無料シャトル運行＋新棟「宙館」「星館」＋楽天4.63</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「別府湾を見晴らす圧倒的インフィニティ温泉と、大人も子どもも大興奮の超豪華バイキングを満喫したい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">別府温泉を象徴するメガリゾート。名物の「棚湯」は棚田状に広がる5段の湯船から別府湾と市街地が一望でき、海風を感じながらの湯浴みは爽快そのもの。夕食バイキングは豊後水道の新鮮な刺身や寿司、焼きたてステーキ、窯焼きピザなど圧巻の品揃えで、夜にはアクアガーデンでの光と音の噴水ショーも楽しめます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「宙館 スタンダードツイン / 虹館 ファミリールーム」</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「宙館 TERRACE & DINING / シーダパレス豪華ディナーバイキング」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR日豊本線「別府駅」西口より無料シャトルバス約15分。東九州道「別府IC」より車約5分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30棚湯インフィニティ露天風呂 → 18:00豪華バイキング → 20:00アクアガーデン噴水ショー【2日目】07:30朝風呂 → 08:30朝食バイキング → 10:00別府地獄めぐりへ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">静寂な木造の隠れ家宿のみを好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border-2 border-cyan-300"><h4 class="font-black text-cyan-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-cyan-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-cyan-950 font-bold">別府湾パノラマ棚湯×超豪華ディナーバイキング×アクアガーデン×楽天4.63。九州で最も満足度の高い温泉メガリゾートです。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※別府駅より無料シャトルバス運行</span><span class="text-xs font-black text-cyan-800">大展望露天風呂「棚湯」</span></div><a href="{make_aff_url(5547)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】別府温泉 杉乃井ホテルの空室・最安プランを見る</span></a></div>
</div>''')

# 宿3: ホテルニューアワジ
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-cyan-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs rounded-xl shadow-sm">第3位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">兵庫 淡路島 洲本温泉 ホテルニューアワジ ＜淡路島＞</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 兵庫県洲本市小路谷20番地</span><span class="px-3 py-1 bg-cyan-50 text-cyan-800 border border-cyan-300 font-black text-xs rounded-full shadow-sm">⭐ 4.62</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🌊</span> 海絶景＆秋海鮮体験：紀淡海峡パノラマ「淡路棚田の湯」＆秋の伊勢海老・淡路牛・由良産ウニ特選会席</h4><p class="text-xs text-stone-700 leading-relaxed">「全室オーシャンビューの客室から穏やかな海を眺め、紀淡海峡の波打ち際と一体化する棚田露天風呂に浸かり、秋の伊勢海老や淡路牛を部屋食で味わいたい」という関西リゾート旅に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7956/7956.jpg" alt="ホテルニューアワジ" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-cyan-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 淡路棚田の湯＆くにうみの湯:</span> 紀淡海峡の水平線を望む絶景温泉</div><div><span class="text-stone-400">■ 全室オーシャンビュー:</span> 窓一面に広がる海と朝日の絶景</div><div><span class="text-stone-400">■ 淡路島の秋美食会席:</span> 由良港直送鮮魚・伊勢海老・淡路牛</div><div><span class="text-stone-400">■ スパリゾート湯巡り:</span> 夢海游などグループ館の湯巡り無料</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 洲本高速バスセンター無料送迎あり＋楽天日本の宿アワード＋楽天4.62</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「淡路島の海と朝日を全室から望み、棚田露天風呂と淡路牛・伊勢海老の極上会席を優雅に楽しみたい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">関西屈指のリゾートホテル。紀淡海峡を一望する「淡路棚田の湯」は棚田状に連なる露天風呂から海原を見渡せ、海と空の青さに包まれます。夕食は部屋食または個室で淡路島の秋の恵み（伊勢海老・鮑・淡路牛フィレ）が贅沢に供され、スタッフの丁寧なもてなしとともに極上の休日を演出してくれます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「ヴィラ楽園 温泉露天風呂付和洋室 / 夢大地 和洋室」</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「秋の味覚！伊勢海老＆淡路牛特選会席（部屋食）プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>洲本高速バスセンターより車約5分（無料送迎あり）。神戸淡路鳴門道「洲本IC」より車約15分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30淡路棚田の湯で海パノラマ → 18:30部屋食で伊勢海老・淡路牛会席 → 20:30くにうみの湯【2日目】06:00水平線からの日の出鑑賞 → 08:00朝食 → 09:30淡路島国営明石海峡公園へ</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">山間の静かな森のみを好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border-2 border-cyan-300"><h4 class="font-black text-cyan-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-cyan-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-cyan-950 font-bold">全室オーシャンビュー×淡路棚田の湯×淡路牛・伊勢海老会席×楽天4.62。淡路島を代表する最高峰リゾートホテルです。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※洲本バスセンター無料送迎あり</span><span class="text-xs font-black text-cyan-800">全室オーシャンビューの名宿</span></div><a href="{make_aff_url(7956)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】洲本温泉 ホテルニューアワジの空室・最安プランを見る</span></a></div>
</div>''')

# 宿4: 鴨川館
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-cyan-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs rounded-xl shadow-sm">第4位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">千葉 南房総 鴨川温泉 鴨川館（かもがわかん）</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 千葉県鴨川市西町1179</span><span class="px-3 py-1 bg-cyan-50 text-cyan-800 border border-cyan-300 font-black text-xs rounded-full shadow-sm">⭐ 4.60</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🌊</span> 海絶景＆秋海鮮体験：太平洋と一体化する屋上温泉ぷーろ「HARUKA」＆房総秋伊勢海老・鮑会席</h4><p class="text-xs text-stone-700 leading-relaxed">「太平洋の水平線を望む屋上の水着温泉『ぷーろ HARUKA』で海風を感じ、房総で秋に解禁される伊勢海老やアワビ、地魚会席を味わいたい」という首都圏からの連休ドライブ旅行に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/51733/51733.jpg" alt="鴨川館" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-cyan-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 屋上温泉ぷーろ「HARUKA」:</span> 太平洋を一望するインフィニティ温泉</div><div><span class="text-stone-400">■ 潮騒の湯＆なぎさの湯:</span> 自家源泉の潮騒温泉と鴨川名湯</div><div><span class="text-stone-400">■ 房総海の幸会席:</span> 秋解禁の房州伊勢海老・アワビ・かずさ牛</div><div><span class="text-stone-400">■ 鴨川シーワールド徒歩3分:</span> 家族連れにも絶好のロケーション</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 安房鴨川駅無料送迎あり＋1泊1万円台前半〜＋楽天4.60</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「都心からアクアラインですぐの南房総で、屋上の絶景インフィニティ温泉と房州伊勢海老を堪能したいカップル・家族」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">鴨川の松原海岸沿いに建つ上質な和風温泉旅館。屋上にある専用着着用型の温泉「ぷーろ HARUKA」は太平洋と一体化するインフィニティ仕様で、夕暮れの空と海を家族やカップルで一緒に眺められます。夕食は秋に旬を迎える房州伊勢海老のお造りやアワビの踊り焼きが並び、贅沢な房総の味覚を堪能できます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「温泉半露天風呂付客室 / 和室スーペリア」（海を望む客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「房州産秋伊勢海老＆鮑の踊り焼き付き！特選会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR「安房鴨川駅」西口より無料送迎バス約5分。館山道「君津IC」より車約45分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30屋上ぷーろHARUKAで海絶景 → 18:30伊勢海老・鮑会席ディナー【2日目】07:30朝風呂 → 08:30和朝食 → 09:30鴨川シーワールド（シャチパフォーマンス）へ</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">格安ビジネスホテル価格のみを求める方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border-2 border-cyan-300"><h4 class="font-black text-cyan-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-cyan-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-cyan-950 font-bold">屋上温泉ぷーろHARUKA×房州伊勢海老会席×鴨川シーワールド至近×楽天4.60。房総随一の海絶景旅館です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※安房鴨川駅より無料送迎あり</span><span class="text-xs font-black text-cyan-800">屋上温泉ぷーろ完備の宿</span></div><a href="{make_aff_url(51733)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】鴨川館の空室・最安プランを見る</span></a></div>
</div>''')

# 宿5: ホテル川久
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-cyan-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs rounded-xl shadow-sm">第5位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">和歌山 南紀白浜 白浜温泉 ホテル川久</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 和歌山県西牟婁郡白浜町3745</span><span class="px-3 py-1 bg-cyan-50 text-cyan-800 border border-cyan-300 font-black text-xs rounded-full shadow-sm">⭐ 4.54</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🌊</span> 海絶景＆秋海鮮体験：全室スイートの宮殿リゾート＆田辺湾一望露天風呂・王様のビュッフェ！</h4><p class="text-xs text-stone-700 leading-relaxed">「総工費400億円をかけたヨーロッパの古城のような宮殿リゾートで、田辺湾の海原を望む温泉露天風呂に入り、十勝牛や伊勢海老・秋海鮮が並ぶ伝説の『王様のビュッフェ』を味わいたい」という贅沢な連休旅に最適です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/14111/14111.jpg" alt="ホテル川久" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-cyan-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 全室スイートルーム:</span> 60㎡〜200㎡超の豪華なオーシャン客室</div><div><span class="text-stone-400">■ 王様のビュッフェ:</span> 十勝牛ステーキ・秋の海鮮・極上スイーツ</div><div><span class="text-stone-400">■ 温泉サロン「ROYAL SPA」:</span> 田辺湾を一望するシルク温泉露天風呂</div><div><span class="text-stone-400">■ 世界的芸術建築:</span> 金箔天井や彫刻・美術館のような館内</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 白浜駅より無料シャトルバス運行＋楽天日本の宿アワード＋楽天4.54</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「まるでヨーロッパの古城に泊まるような非日常の空間で、最高峰の『王様のビュッフェ』と海望む温泉を楽しみたい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">南紀白浜の海辺にそびえ立つ唯一無二の城郭リゾート。金箔が輝くロビーや美術品に圧倒されます。温泉サロン「ROYAL SPA」は海と一体化するオープンテラスデッキを備え、田辺湾の穏やかな波音に癒やされます。夕食の「王様のビュッフェ」は厳選された十勝牛ステーキや新鮮なお造り、パティシエ特製デザートが並び、圧倒的な満足感を誇ります。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「タワースイート / スーペリアスイート」（広々オーシャンビュー）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「秋のプレミアム！王様のビュッフェ〜晩餐会〜プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JRきのくに線「白浜駅」より無料シャトルバス約10分。紀勢道「南紀白浜IC」より車約15分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30館内アートツアー＆温泉露天風呂 → 18:00王様のビュッフェディナー【2日目】07:30朝風呂 → 08:30朝食ビュッフェ → 10:00白良浜・アドベンチャーワールドへ</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">純和風の木造旅館のみを希望する方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border-2 border-cyan-300"><h4 class="font-black text-cyan-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-cyan-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-cyan-950 font-bold">全室スイート宮殿×王様のビュッフェ×田辺湾温泉スパ×楽天4.54。南紀白浜で最もラグジュアリーなホテルです。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※白浜駅より無料シャトルバス運行</span><span class="text-xs font-black text-cyan-800">全室スイートの宮殿ホテル</span></div><a href="{make_aff_url(14111)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】白浜温泉 ホテル川久の空室・最安プランを見る</span></a></div>
</div>''')

# 宿6: 賢島宝生苑
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-cyan-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs rounded-xl shadow-sm">第6位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">三重 伊勢志摩 賢島宝生苑（かしこじまほうじょうえん）</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 三重県志摩市阿児町神明718-3</span><span class="px-3 py-1 bg-cyan-50 text-cyan-800 border border-cyan-300 font-black text-xs rounded-full shadow-sm">⭐ 4.46</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🌊</span> 海絶景＆秋海鮮体験：英虞湾パノラマを望む絶景庭園露天風呂「朝なぎの湯・夕なぎの湯」＆伊勢海老会席</h4><p class="text-xs text-stone-700 leading-relaxed">「伊勢志摩サミット開催地・賢島の英虞湾リアス海岸を見晴らす庭園露天風呂に浸かり、秋解禁の伊勢海老やアワビ、松阪牛会席を味わいたい」という伊勢志摩旅行に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/15716/15716.jpg" alt="賢島宝生苑" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-cyan-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 朝なぎの湯・夕なぎの湯:</span> 英虞湾の海と真珠筏を望む庭園露天</div><div><span class="text-stone-400">■ 伊勢志摩温泉「朝なぎの湯」:</span> とろりとした良質なナトリウム塩化物泉</div><div><span class="text-stone-400">■ 伊勢海老・鮑・松阪牛会席:</span> 三重の三大味覚を一度に堪能</div><div><span class="text-stone-400">■ 英虞湾クルーズ直結:</span> 賢島エスパーニャクルーズ乗船場至近</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 近鉄賢島駅無料送迎約3分＋1泊1万円台半ば〜＋楽天4.46</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「英虞湾の美しいリアス海岸と夕陽を露天風呂から眺め、伊勢海老と松阪牛の贅沢会席を堪能したい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">賢島の高台に位置する大型和風リゾート。自慢の庭園露天風呂からは英虞湾に浮かぶ真珠筏と島々が一望でき、夕暮れ時には海と空が黄金色に染まる絶景に包まれます。夕食は秋の伊勢海老お造りや松阪牛陶板焼きが並び、伊勢志摩の豊かな海の恵みを心ゆくまで堪能できます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「華陽棟 和室 / 燦陽棟 オーシャンビュー客室」</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「伊勢海老お造り＆松阪牛陶板焼き付き！伊勢志摩旬彩会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>近鉄志摩線「賢島駅」より無料送迎バス約3分（徒歩約7分）。伊勢道「伊勢西IC」より車約40分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30英虞湾パノラマ露天風呂 → 18:30伊勢海老・松阪牛会席ディナー【2日目】07:30朝風呂 → 08:30朝食 → 09:30志摩スペイン村・伊勢神宮参拝へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">駅前すぐの繁華街立地のみを好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border-2 border-cyan-300"><h4 class="font-black text-cyan-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-cyan-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-cyan-950 font-bold">英虞湾庭園露天風呂×伊勢海老松阪牛会席×賢島駅送迎3分×楽天4.46。伊勢志摩の王道海絶景旅館です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※賢島駅より無料送迎バス3分</span><span class="text-xs font-black text-cyan-800">英虞湾パノラマ庭園露天</span></div><a href="{make_aff_url(15716)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】賢島宝生苑の空室・最安プランを見る</span></a></div>
</div>''')

# 宿7: 堂ヶ島ニュー銀水
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-cyan-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs rounded-xl shadow-sm">第7位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">静岡 西伊豆 堂ヶ島温泉 堂ヶ島ニュー銀水</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 静岡県賀茂郡西伊豆町仁科2977-1</span><span class="px-3 py-1 bg-cyan-50 text-cyan-800 border border-cyan-300 font-black text-xs rounded-full shadow-sm">⭐ 4.38</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🌊</span> 海絶景＆秋海鮮体験：日本の夕陽百選・駿河湾一望の絶景展望露天風呂＆伊豆の新鮮海の幸バイキング</h4><p class="text-xs text-stone-700 leading-relaxed">「日本の夕陽百選に選ばれた西伊豆堂ヶ島の絶景クリフに建ち、黄金色に染まる駿河湾の夕陽露天風呂に浸かり、新鮮な海の幸バイキングを味わいたい」というドライブ旅行に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8648/8648.jpg" alt="堂ヶ島ニュー銀水" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-cyan-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 駿河湾一望展望大浴場:</span> 窓から望む堂ヶ島の奇岩と紺碧の海</div><div><span class="text-stone-400">■ 日本の夕陽百選の絶景:</span> ロビーラウンジや露天風呂から望む夕景</div><div><span class="text-stone-400">■ 伊豆海の幸ディナー:</span> 駿河湾の旬魚・アワビ・金目鯛</div><div><span class="text-stone-400">■ 全室オーシャンビュー:</span> 窓を開けると心地よい潮騒の音</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 堂ヶ島バス停無料送迎あり＋1泊1万円台前半〜＋楽天4.38</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「西伊豆のドライブを楽しみ、駿河湾に沈む圧巻の夕陽を露天風呂から眺めたいカップル・家族」に最適です。</p></div>
<div class="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">西伊豆屈指の絶景ホテル。崖の上にせり出すように建ち、全室から駿河湾と堂ヶ島の島々を一望。展望露天風呂からは海風を感じながら茜色に染まる夕陽を眺める至福の時間を過ごせます。夕食は伊豆の新鮮な海の幸をふんだんに使った会席またはバイキングが選べ、贅沢な時間を満喫できます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「西棟 和室 / 貴賓室」（駿河湾の夕陽を一望する客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「駿河湾海の幸！伊勢海老・金目鯛付き特選会席ディナープラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>伊豆急「下田駅」よりバス約45分「堂ヶ島」下車（無料送迎あり）。東名「沼津IC」より車約85分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 16:30駿河湾夕陽展望露天風呂 → 18:30海の幸会席ディナー【2日目】07:30朝風呂 → 08:30朝食 → 09:30堂ヶ島天窓洞クルーズへ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">電車駅前徒歩すぐの立地のみを好む方（車・バス推奨）。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border-2 border-cyan-300"><h4 class="font-black text-cyan-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-cyan-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-cyan-950 font-bold">全室オーシャンビュー×日本の夕陽百選露天×伊豆海の幸×楽天4.38。西伊豆で最も夕陽が美しい名門ホテルです。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※堂ヶ島バス停無料送迎あり</span><span class="text-xs font-black text-cyan-800">日本の夕陽百選の絶景宿</span></div><a href="{make_aff_url(8648)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】堂ヶ島温泉 堂ヶ島ニュー銀水の空室・最安プランを見る</span></a></div>
</div>''')

# 宿8: 南知多 源氏香
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-cyan-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs rounded-xl shadow-sm">第8位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">愛知 南知多 南知多温泉郷 源氏香（げんじこう）</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 愛知県知多郡南知多町山海屋敷103</span><span class="px-3 py-1 bg-cyan-50 text-cyan-800 border border-cyan-300 font-black text-xs rounded-full shadow-sm">⭐ 4.38</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🌊</span> 海絶景＆秋海鮮体験：伊勢湾一望の最上階インフィニティ展望露天風呂＆知多牛・伊勢湾秋海鮮会席</h4><p class="text-xs text-stone-700 leading-relaxed">「名古屋から車で約1時間の南知多温泉で、伊勢湾の水平線と一体化する最上階露天風呂『雲上露天風呂』に入り、知多牛や伊勢湾の旬魚会席を味わいたい」という東海エリアの連休ドライブに大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/28124/28124.jpg" alt="南知多 源氏香" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-cyan-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 最上階「雲上露天風呂」:</span> 伊勢湾のパノラマと行き交う船を一望</div><div><span class="text-stone-400">■ 日本初の薫りテーマ宿:</span> 館内に漂う心安らぐ雅なお香</div><div><span class="text-stone-400">■ 知多牛＆伊勢湾会席:</span> 豊浜港直送の旬魚・アワビ・知多牛</div><div><span class="text-stone-400">■ 全室オーシャンフロント:</span> 伊勢湾のサンセットを望む客室</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 名鉄河和駅無料送迎あり＋1泊7,000円台〜＋楽天4.38</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「名古屋から気軽に行ける海辺の温泉宿で、最上階インフィニティ露天風呂と知多牛会席をコスパ良く楽しみたい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">南知多・山海海岸に建つ薫りの宿。館内には上品なお香が焚かれ、ロビーから客室まで癒やしの空間が広がります。最上階の「雲上露天風呂」は湯船に浸かると伊勢湾の水平線と目線が一直線になり、開放感抜群。夕食は知多牛ステーキや豊浜港直送の活魚会席が供され、お値打ち価格で贅沢な海辺の休日を満喫できます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「伊勢湾ビュー 和モダン客室 / 露天風呂付客室」</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「知多牛ステーキ＆伊勢湾旬魚お造り特選会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>名鉄知多新線「内海駅」より無料送迎バス約10分。知多半島道路「南知多IC」より車約10分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30最上階雲上露天風呂 → 18:30知多牛＆伊勢湾海鮮ディナー【2日目】07:30朝風呂 → 08:30朝食 → 09:30羽豆岬・野間灯台へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">洋風リゾートホテルのみを希望する方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border-2 border-cyan-300"><h4 class="font-black text-cyan-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-cyan-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-cyan-950 font-bold">最上階雲上露天風呂×知多牛会席×名古屋1時間アクセス×楽天4.38。愛知で最も海絶景が美しい温泉宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※内海駅より無料送迎あり</span><span class="text-xs font-black text-cyan-800">最上階雲上露天風呂の宿</span></div><a href="{make_aff_url(28124)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】南知多温泉郷 源氏香の空室・最安プランを見る</span></a></div>
</div>''')

# 宿9: 鳥羽シーサイドホテル
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-cyan-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs rounded-xl shadow-sm">第9位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">三重 鳥羽温泉 湯めぐり海百景 鳥羽シーサイドホテル</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 三重県鳥羽市安楽島町1084</span><span class="px-3 py-1 bg-cyan-50 text-cyan-800 border border-cyan-300 font-black text-xs rounded-full shadow-sm">⭐ 4.37</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🌊</span> 海絶景＆秋海鮮体験：鳥羽湾一望の3つの館内湯巡り＆伊勢海老・鮑・秋海鮮バイキング（抜群コスパ）</h4><p class="text-xs text-stone-700 leading-relaxed">「鳥羽湾のパノラマ岬に建つ大型リゾートで、趣の異なる3つの大浴場露天風呂を湯巡りし、秋の味覚バイキングを1泊5,000円台〜の抜群のコスパで楽しみたい」というファミリー・グループ旅行に最適です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/15780/15780.jpg" alt="鳥羽シーサイドホテル" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-cyan-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 3つの湯巡り大浴場:</span> 風見の湯・岬の湯・汀の湯</div><div><span class="text-stone-400">■ 鳥羽湾パノラマビュー:</span> 全館から海と島々の絶景を一望</div><div><span class="text-stone-400">■ ディナーバイキング:</span> 伊勢志摩の海の幸・ステーキ・天ぷら</div><div><span class="text-stone-400">■ 鳥羽水族館車5分:</span> 観光拠点としても抜群の立地</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 近鉄鳥羽駅無料シャトル運行＋1泊5,000円台〜の圧倒的コスパ</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「鳥羽湾の絶景露天風呂を館内で湯巡りし、海の幸バイキングを圧倒的なコスパで楽しみたい家族やグループ」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">鳥羽の安楽島半島に位置する大型シーサイドホテル。館内には「風見の湯」「岬の湯」「汀の湯」と3つの異なる大浴場があり、鳥羽湾を行き交うフェリーや島々を眺めながらの湯巡りは爽快そのもの。夕食バイキングは伊勢志摩の新鮮魚介やライブキッチンのステーキが並び、連休旅行をリーズナブルに楽しめます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「岬亭 オーシャンビュー和室 / 汀館 和洋室」</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「伊勢志摩の海の幸満喫！ディナーバイキングプラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>近鉄・JR「鳥羽駅」より無料シャトルバス約10分。伊勢ICより車約20分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30風見の湯＆岬の湯湯巡り → 18:00バイキングディナー【2日目】07:30朝風呂 → 08:30朝食 → 09:30鳥羽水族館・ミキモト真珠島へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">小規模な高級隠れ家旅館のみを好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border-2 border-cyan-300"><h4 class="font-black text-cyan-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-cyan-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-cyan-950 font-bold">鳥羽湾3つの湯巡り×海の幸バイキング×1泊5,000円台〜の抜群コスパ。鳥羽で最もコスパ良く海を満喫できるホテルです。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※鳥羽駅より無料シャトルバス運行</span><span class="text-xs font-black text-cyan-800">3つの大浴場湯巡りの宿</span></div><a href="{make_aff_url(15780)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】湯めぐり海百景 鳥羽シーサイドホテルの空室・最安プランを見る</span></a></div>
</div>''')

# 宿10: マホロバ・マインズ三浦
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-cyan-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-cyan-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-xs rounded-xl shadow-sm">第10位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">神奈川 三浦半島 マホロバ・マインズ三浦</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 神奈川県三浦市南下浦町上宮田3231</span><span class="px-3 py-1 bg-cyan-50 text-cyan-800 border border-cyan-300 font-black text-xs rounded-full shadow-sm">⭐ 4.19</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🌊</span> 海絶景＆秋海鮮体験：全室オーシャンビュー＆三浦三崎港直送の本マグロ食べ放題バイキング！</h4><p class="text-xs text-stone-700 leading-relaxed">「品川から京急で約1時間の三浦海岸の高台で、東京湾を一望する広々客室に泊まり、三崎港直送の本マグロや海鮮食べ放題バイキングを堪能したい」という首都圏からの連休旅行に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/13569/13569.jpg" alt="マホロバ・マインズ三浦" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-cyan-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 三崎港直送 本マグロバイキング:</span> 赤身・中トロ・握り寿司食べ放題</div><div><span class="text-stone-400">■ 全室オーシャンビュー:</span> 広々リビング付きのコンドミニアム客室</div><div><span class="text-stone-400">■ 自家源泉天然温泉:</span> 地下1,500mから湧くナトリウム塩化物泉</div><div><span class="text-stone-400">■ クアパーク温水プール:</span> 水着で遊べる充実のウェルネススパ</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 三浦海岸駅無料送迎あり＋品川から直通約60分＋楽天4.19</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「都心から電車1時間で気軽に行け、名物本マグロ食べ放題と広いオーシャンビュー客室を楽しみたいファミリー・グループ」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200"><h4 class="font-black text-cyan-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-cyan-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">三浦海岸を見下ろす丘の上に建つ大型リゾート。客室は全室オーシャンビューで、広いリビングとキッチンを備えたコンドミニアムタイプ。夕食バイキングは三崎港直送の本マグロの刺身やお寿司が食べ放題で、まぐろ好きにはたまらない贅沢。クアパーク温泉プールも完備し、家族連れに大人気です。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「本館 オーシャンビュー客室 / コンセプトルーム」</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「三崎港直送本マグロ食べ放題！ディナーバイキングプラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>京急久里浜線「三浦海岸駅」より無料送迎バス約5分（徒歩約7分）。横浜横須賀道路「佐原IC」より車約20分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30クアパーク＆天然温泉露天風呂 → 18:00本マグロ食べ放題バイキング【2日目】07:30朝風呂 → 08:30朝食バイキング → 10:00三崎港・城ヶ島へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">懐石料理の個室膳のみを好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 border-2 border-cyan-300"><h4 class="font-black text-cyan-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-cyan-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-cyan-950 font-bold">三崎本マグロ食べ放題×全室オーシャンビュー×品川60分アクセス×楽天4.19。手軽に海を満喫できる三浦半島のリゾートです。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※三浦海岸駅より無料送迎あり</span><span class="text-xs font-black text-cyan-800">本マグロ食べ放題バイキング</span></div><a href="{make_aff_url(13569)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-700 hover:to-blue-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】マホロバ・マインズ三浦の空室・最安プランを見る</span></a></div>
</div>''')

# FAQ・関連記事ナビ
review_parts.append('''<h2 class="text-xl font-bold text-stone-900 border-b-2 border-cyan-500 pb-2 my-8">💡 海一望インフィニティ露天ホテルに関するよくある質問（FAQ）</h2>
<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
      <span class="px-2 py-0.5 bg-cyan-600 text-white text-xs font-black rounded-md">Q</span>
      シルバーウィークの海沿いホテルの気候や海のアクティビティは？
    </h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-cyan-200">
      <span class="font-bold text-cyan-700">A.</span> 9月中旬〜下旬の海沿いは<strong>「日中25℃前後で過ごしやすく、爽やかな海風」</strong>が楽しめます。海水浴シーズンは終了していますが、温水温泉プールやインフィニティ露天風呂、海沿いドライブやクルーズが最も快適な季節です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
      <span class="px-2 py-0.5 bg-cyan-600 text-white text-xs font-black rounded-md">Q</span>
      秋に解禁される伊勢海老の旬の時期やおすすめの食べ方は？
    </h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-cyan-200">
      <span class="font-bold text-cyan-700">A.</span> 伊勢志摩や南房総、伊豆などでは<strong>「8月〜9月に伊勢海老漁が解禁」</strong>されます。獲れたての活伊勢海老は、透明感とぷりぷりの弾力がたまらない<strong>「お造り（刺身）」や、香ばしい「鬼殻焼き」、出汁が染み渡る「具足煮（味噌汁）」</strong>で味わうのが最高です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
      <span class="px-2 py-0.5 bg-cyan-600 text-white text-xs font-black rounded-md">Q</span>
      インフィニティ露天風呂でのベストな入浴時間帯は？
    </h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-cyan-200">
      <span class="font-bold text-cyan-700">A.</span> 太平洋側（東伊豆・房総・南紀白浜・淡路島）なら<strong>「水平線から昇る朝日（朝6時頃）」</strong>、西伊豆や伊勢湾・別府湾なら<strong>「空が茜色に染まる夕暮れサンセット（17時〜18時頃）」</strong>が、海と空のグラデーションに包まれる絶好のゴールデンタイムです。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-50 border border-stone-200/90 shadow-sm">
  <div class="flex items-center gap-2 mb-3 border-b border-stone-200 pb-2">
    <span class="px-2.5 py-0.5 bg-stone-800 text-white font-black text-xs rounded-md">旅行ナレッジ</span>
    <h3 class="text-sm font-bold text-stone-900">📍 海一望インフィニティ露天ホテル 宿泊エリアガイド＆旅行情報</h3>
  </div>
  <p class="text-xs text-stone-600 leading-relaxed">
    当ガイドでは、<strong>日本全国の海一望インフィニティ温泉露天風呂＆秋海鮮自慢の名門リゾートホテル（静岡東伊豆/西伊豆、大分別府、兵庫淡路島、千葉房総鴨川、和歌山南紀白浜、三重伊勢志摩/鳥羽、愛知名知多、神奈川三浦）</strong>を厳選してご紹介しています。
    楽天トラベルの最新空室状況・限定宿泊プラン・リアルタイムクチコミ評価と直結しており、失敗しないホテル選びをサポートします。
  </p>
  <div class="mt-4 pt-3 border-t border-stone-200 flex flex-wrap gap-2 text-2xs text-stone-500">
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">エリア: 全国（静岡・大分・兵庫・千葉・和歌山・三重・愛知・神奈川）</span>
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">テーマ: シルバーウィーク・海一望・インフィニティ露天風呂・伊勢海老・金目鯛・本マグロ・海鮮バイキング</span>
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">更新日: 2026年最新版</span>
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">即時予約・公式連携</span>
  </div>
</div>

<div class="my-12 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-stone-50 via-cyan-50/40 to-blue-50/30 border border-cyan-200/80 shadow-md">
  <div class="flex items-center gap-2 mb-4 border-b border-cyan-200 pb-3">
    <span class="px-3 py-1 bg-cyan-600 text-white font-black text-xs rounded-lg">関連記事ナビ</span>
    <h3 class="text-base md:text-lg font-bold text-stone-900">🗺️ あわせて読みたい！秋の連休＆絶景特集</h3>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
    <div class="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-2">
      <h4 class="text-xs font-black text-cyan-900">💎 人気の秋連休・絶景特集</h4>
      <a href="/posts/silver-week-three-generation-keirou-onsen-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-cyan-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-cyan-700 transition">
        👉 【2026SW】三世代・敬老祝い名門温泉宿10選！比較
      </a>
      <a href="/posts/silver-week-autumn-highland-panoramic-resort-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-cyan-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-cyan-700 transition">
        👉 【2026SW】秋風爽やかな高原リゾート宿10選！比較
      </a>
      <a href="/posts/winter-brand-tagged-crab-echizen-matsuba-onsen-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-cyan-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-cyan-700 transition">
        👉 タグ付き活蟹が旨い名門温泉宿10選！比較
      </a>
      <a href="/posts/susuki-grassland-autumn-view-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-cyan-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-cyan-700 transition">
        👉 黄金のすすき草原が見える宿10選！比較
      </a>
    </div>
    <div class="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-2">
      <h4 class="text-xs font-black text-blue-900">🎌 エリア別特集</h4>
      <a href="/posts/shizuoka-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-blue-700">🏨 【静岡・東伊豆西伊豆】厳選10選ガイド</a>
      <a href="/posts/chiba-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-blue-700">🏨 【千葉・房総鴨川】厳選10選ガイド</a>
      <a href="/posts/oita-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-blue-700">🏨 【大分・別府由布院】厳選10選ガイド</a>
      <a href="/posts/mie-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-blue-700">🏨 【三重・伊勢志摩鳥羽】厳選10選ガイド</a>
    </div>
  </div>
</div>''')

slug = 'silver-week-ocean-view-infinity-onsen-hotels-guide'
title = '【2026SW】海一望インフィニティ露天宿10選！比較'
desc = 'シルバーウィークは海辺の絶景リゾートへ！伊豆・別府・淡路島・房総鴨川から南紀白浜、伊勢志摩、三浦まで徹底比較。海と一体化するインフィニティ露天風呂と秋の伊勢海老・金目鯛・豪華海鮮バイキングを満喫できる名門ホテル10選を本音レビュー。'

post_data = {
    'id': slug,
    'slug': slug,
    'title': title,
    'description': desc,
    'prefecture': '全国',
    'area': '全国（静岡・大分・兵庫・千葉・和歌山・三重・愛知・神奈川）',
    'hotel_name': '海一望インフィニティ露天宿おすすめ10選',
    'image': 'https://img.travel.rakuten.co.jp/share/HOTEL/14503/14503.jpg',
    'other_images': [],
    'affiliate_url': make_aff_url(14503),
    'price': 25850,
    'rating': 4.70,
    'date': '2026-08-27',
    'categories': [
        '特集10選',
        'キラーコンテンツ',
        '後悔回避',
        'ホテル厳選',
        'シルバーウィーク',
        'インフィニティ露天風呂',
        'オーシャンビュー',
        '伊勢海老'
    ],
    'keywords': [
        'シルバーウィーク 海沿い ホテル 10選',
        'シルバーウィーク インフィニティ露天風呂 比較',
        '9月連休 オーシャンビュー 温泉 宿泊',
        'シルバーウィーク 伊勢海老 海鮮バイキング 宿 比較',
        'シルバーウィーク 絶景リゾートホテル おすすめ',
        'インフィニティ温泉 楽天トラベル'
    ],
    'is_special_feature': True,
    'review': ''.join(review_parts)
}

target_file = f'src/data/posts/{slug}.json'
with open(target_file, 'w', encoding='utf-8') as f:
    json.dump(post_data, f, ensure_ascii=False, indent=2)

print('Generated post file successfully:', target_file)
