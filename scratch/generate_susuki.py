import json
import urllib.parse

with open('scratch/susuki_10_hotels.json', 'r', encoding='utf-8') as f:
    hotels = json.load(f)

aff_id = '54d2a438.4bc4abc2.54d2a439.aa1be583'

def make_aff_url(no):
    target = f'https://travel.rakuten.co.jp/HOTEL/{no}/{no}.html'
    return f'https://hb.afl.rakuten.co.jp/hgc/{aff_id}/?pc={urllib.parse.quote(target, safe="")}'

review_parts = [
    '<h2 class="text-2xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 mb-4">【2026年最新】秋風に揺れる黄金の絶景！すすき草原（箱根仙石原・阿蘇・砥峰高原・伊豆細野高原）が見えるおすすめ宿10選！名門比較</h2>',
    '<p class="text-sm text-stone-700 leading-relaxed my-3 font-medium">秋の深まりとともに台地一面を白銀から黄金色へと染め上げる大自然の絨毯「すすき草原（ススキ大群生）」。秋風にさざ波のように揺れる銀色の穂、夕日に照らされて黄金色に輝く奇跡のパノラマは、秋の日本でしか出会えない極上の風物詩です。日本屈指のすすき名所・箱根仙石原（金乃竹仙石原・箱根翡翠・きたの風茶寮・仙石原プリンス・箱根風雅・箱根甲子園）をはじめ、阿蘇くじゅうの大草原パノラマ（南阿蘇別邸蘇庵・瀬の本高原ホテル）、映画ロケ地として名高い西日本最大級の砥峰高原（峰山高原ホテルリラクシア）、相模湾を見下ろす伊豆細野高原（稲取東海ホテル湯苑）まで、一面の黄金すすき草原散策と名湯白濁露天風呂、秋の味覚会席を満喫できる名門宿10選を本音で比較レビューします。全施設、楽天トラベル公式最新空室リンク付き。</p>',
    '<div class="my-6 p-6 rounded-3xl bg-gradient-to-br from-amber-950 via-stone-900 to-yellow-950 text-white border border-amber-500/30 shadow-xl p-6 md:p-8">',
    '<h3 class="text-lg font-bold text-amber-300 mb-3">🌾 なぜ「秋のすすき草原×名湯温泉」は旅人を魅了し続けるのか？</h3>',
    '<p class="text-xs text-stone-200 leading-relaxed mb-3">紅葉の華やかさとは対照的に、どこまでも続くすすき草原は<strong>「どこかノスタルジックで、心が洗われる圧倒的な開放感と静寂」</strong>を与えてくれます。</p>',
    '<p class="text-xs text-stone-200 leading-relaxed mb-3">特に9月下旬の「銀色に輝く見初め」から、10月中旬〜11月上旬の「夕日に黄金色に染まる最盛期」にかけては、歩道を踏みしめるたびに秋の心地よい風が吹き抜け、<strong>「夕暮れ時に黄金色の海原に包まれる感動体験」</strong>が待っています。</p>',
    '<p class="text-xs text-stone-200 leading-relaxed">散策で心地よく疲れた体を白濁硫黄泉や自家源泉の露天風呂で温め、松茸や秋の旬魚、ブランド牛を味わう秋の温泉ステイは、大人の癒やし旅として最高の選択肢です。</p>',
    '</div>',
    '<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-8">🧭 失敗しない「すすき草原名門宿」選び4大チェックポイント</h2>',
    '<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-amber-950 flex items-center gap-2"><span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">POINT</span>基準1：すすき草原へのアクセス（徒歩圏または大草原パノラマビュー）</h4><p class="text-xs text-stone-600 leading-relaxed">仙石原や阿蘇、砥峰高原、細野高原のすすき群生地へすぐアクセスできるか、客室やテラスから一望できるかを検証。</p></div>',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-amber-950 flex items-center gap-2"><span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">POINT</span>基準2：名湯露天風呂（白濁にごり湯・硫黄泉・絶景インフィニティ）</h4><p class="text-xs text-stone-600 leading-relaxed">秋の涼しい風を感じながら、箱根大涌谷のにごり湯や阿蘇の天然温泉で温まれる露天風呂の充実度を重視。</p></div>',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-amber-950 flex items-center gap-2"><span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">POINT</span>基準3：秋の味覚満載の特選会席・ライブキッチン</h4><p class="text-xs text-stone-600 leading-relaxed">秋の松茸、ブランド和牛、旬の戻り鰹や地場野菜を取り入れた上質な夕食を提供しているかをセレクト。</p></div>',
    '<div class="p-5 rounded-2xl bg-white border-2 border-stone-200/80 shadow-sm space-y-2"><h4 class="text-sm font-extrabold text-amber-950 flex items-center gap-2"><span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">POINT</span>基準4：楽天トラベルクチコミ・ロケーション評価の圧倒的高さ</h4><p class="text-xs text-stone-600 leading-relaxed">実際に宿泊した旅行者から「すすき草原の散策に最高の立地」「露天風呂とお料理に大満足」と絶賛される宿を厳選。</p></div>',
    '</div>',
    '<h2 class="text-xl font-bold text-stone-900 border-b border-amber-300 pb-2 my-8">📊 すすき草原名門宿おすすめ10選のスペック比較一覧表</h2>',
    '<div class="my-6 overflow-x-auto rounded-2xl border border-stone-300 shadow-sm"><table class="w-full text-left text-xs text-stone-700 bg-white"><thead class="bg-stone-900 text-amber-300 font-bold border-b border-stone-300"><tr><th class="p-3">順位・宿名</th><th class="p-3">所在地</th><th class="p-3">すすき草原への近さ・眺望</th><th class="p-3">温泉・露天風呂</th><th class="p-3">秋の味覚ディナー</th><th class="p-3">クチコミ</th></tr></thead><tbody class="divide-y divide-stone-200">',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第1位 金乃竹 仙石原</td><td class="p-3">神奈川 箱根仙石原</td><td class="p-3 font-bold text-amber-800">仙石原すすき草原至近！竹取物語の隠れ宿</td><td class="p-3">全室客室専用露天風呂（大涌谷白濁温泉）</td><td class="p-3 font-bold text-stone-800">極上京懐石・黒毛和牛</td><td class="p-3 font-bold text-amber-800">⭐ 5.00</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第2位 南阿蘇夢しずく 別邸蘇庵</td><td class="p-3">熊本 南阿蘇</td><td class="p-3 font-bold text-amber-800">阿蘇五岳と黄金色のすすき大草原パノラマ</td><td class="p-3">全室源泉かけ流し半露天風呂付き離れ</td><td class="p-3 font-bold text-stone-800">肥後あか牛・熊本旬会席</td><td class="p-3 font-bold text-amber-800">⭐ 4.75</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第3位 箱根翡翠</td><td class="p-3">神奈川 箱根仙石原</td><td class="p-3 font-bold text-amber-800">仙石原すすき草原徒歩圏・早川沿いの静寂</td><td class="p-3">大涌谷にごり湯＆新姥子温泉の2種名湯</td><td class="p-3 font-bold text-stone-800">日本料理「一游」秋懐石</td><td class="p-3 font-bold text-amber-800">⭐ 4.59</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第4位 きたの風茶寮</td><td class="p-3">神奈川 箱根仙石原</td><td class="p-3 font-bold text-amber-800">仙石原すすき草原徒歩圏・全10室の贅沢宿</td><td class="p-3">全室源泉かけ流し露天風呂・弱食塩泉</td><td class="p-3 font-bold text-stone-800">北海道×箱根特選和乃創作懐石</td><td class="p-3 font-bold text-amber-800">⭐ 4.55</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第5位 稲取東海ホテル 湯苑</td><td class="p-3">静岡 東伊豆細野高原</td><td class="p-3 font-bold text-amber-800">伊豆細野高原すすき大群生散策拠点</td><td class="p-3">海一望の絶景露天風呂「洋々湯苑」</td><td class="p-3 font-bold text-stone-800">金目鯛姿煮＆活アワビ舟盛り</td><td class="p-3 font-bold text-amber-800">⭐ 4.52</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第6位 箱根風雅</td><td class="p-3">神奈川 箱根仙石原</td><td class="p-3 font-bold text-amber-800">仙石原すすき草原徒歩約15分の大人の隠れ家</td><td class="p-3">強羅温泉の美肌露天風呂・貸切ジャグジー</td><td class="p-3 font-bold text-stone-800">ライブキッチン鉄板焼きステーキ</td><td class="p-3 font-bold text-amber-800">⭐ 4.50</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第7位 箱根仙石原プリンスホテル</td><td class="p-3">神奈川 箱根仙石原</td><td class="p-3 font-bold text-amber-800">客室バルコニーから仙石原すすき＆外輪山一望</td><td class="p-3">箱根外輪山パノラマ展望温泉大浴場</td><td class="p-3 font-bold text-stone-800">グリルディナー・秋のブッフェ</td><td class="p-3 font-bold text-amber-800">⭐ 4.49</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第8位 峰山高原ホテルリラクシア</td><td class="p-3">兵庫 砥峰高原</td><td class="p-3 font-bold text-amber-800">西日本最大級・砥峰高原すすき草原の拠点</td><td class="p-3">満天の星空を仰ぐ露天風呂・サウナ</td><td class="p-3 font-bold text-stone-800">播州牛・高原フレンチコース</td><td class="p-3 font-bold text-amber-800">⭐ 4.41</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第9位 ホテルハーヴェスト箱根甲子園</td><td class="p-3">神奈川 箱根仙石原</td><td class="p-3 font-bold text-amber-800">仙石原すすき草原徒歩約15分の広大リゾート</td><td class="p-3">最上階展望温泉大浴場（大涌谷温泉）</td><td class="p-3 font-bold text-stone-800">秋の味覚プレミアムブッフェ</td><td class="p-3 font-bold text-amber-800">⭐ 4.41</td></tr>',
    '<tr class="hover:bg-amber-50/50"><td class="p-3 font-bold text-stone-900">第10位 瀬の本高原ホテル</td><td class="p-3">熊本 阿蘇瀬の本</td><td class="p-3 font-bold text-amber-800">標高920m！黄金のすすき大草原パノラマ</td><td class="p-3">阿蘇五岳を一望する絶景露天「絶景の湯」</td><td class="p-3 font-bold text-stone-800">熊本ブランド牛・高原和洋会席</td><td class="p-3 font-bold text-amber-800">⭐ 4.40</td></tr>',
    '</tbody></table></div>',
    '<h2 class="text-xl font-bold text-stone-900 border-b-2 border-amber-600 pb-2 my-8">🏆 【徹底検証】すすき草原名門宿おすすめ10選の本音レビュー</h2>'
]

# 宿1: 金乃竹 仙石原
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-black text-xs rounded-xl shadow-sm">第1位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">神奈川 箱根仙石原 金乃竹 仙石原</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 神奈川県足柄下郡箱根町仙石原817-342</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 5.00</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🌾</span> すすき体験：楽天★5.00満点！仙石原すすき草原至近・竹取物語をテーマにした全室露天風呂付き隠れ宿</h4><p class="text-xs text-stone-700 leading-relaxed">「仙石原のすすき草原散策を存分に楽しみ、夜は竹林と水盤が幻想的にライトアップされる大人の隠れ宿で、白濁のにごり湯客室露天風呂と本格京懐石に酔いしれたい」という最高峰の記念日ステイに第1位です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/184577/184577.jpg" alt="金乃竹 仙石原" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 仙石原すすき草原至近:</span> 黄金色のすすき大草原まで車・散策すぐの好立地</div><div><span class="text-stone-400">■ 全室白濁温泉露天風呂:</span> 大涌谷から引湯する良質な乳白色にごり湯</div><div><span class="text-stone-400">■ 竹取物語の世界観:</span> 水盤に月が浮かぶ幻想的な大人のデザイナーズ宿</div><div><span class="text-stone-400">■ 極上京懐石ディナー:</span> 旬の松茸や黒毛和牛をお部屋または個室で</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 楽天トラベルクチコミ★5.00満点評価の最高峰隠れ宿</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「誰にも邪魔されない極上のプライベート空間で、仙石原すすきの美景と白濁にごり湯露天風呂を堪能したいカップル・記念日旅」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">仙石原の静寂な森に佇む全10室のラグジュアリー宿。秋の夕暮れ時に黄金色に輝く仙石原のすすき草原を散策した後は、宿の水盤テラスで幻想的な月を眺めながらチェックイン。全室に備わる白濁の大涌谷温泉露天風呂に浸かり、部屋食で味わう松茸や黒毛和牛の京懐石は言葉を失う美味しさです。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「露天風呂付メゾネット / 露天風呂付スイート」（白濁湯露天が注ぐ特別室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「秋の美味！極上京懐石＆黒毛和牛ディナープラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>箱根登山鉄道「箱根湯本駅」より箱根登山バスで約30分「仙石案内所前」下車。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 16:00仙石原すすき草原の夕暮れ散策 → 17:30客室白濁露天風呂 → 18:30極上京懐石ディナー【2日目】07:30朝風呂 → 08:30お部屋朝食 → 10:30ポーラ美術館へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">低予算での宿泊や大人数でのグループ宴会を希望する方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-yellow-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">仙石原すすき至近×全室白濁露天風呂×極上京懐石×楽天★5.00。箱根で最も贅沢な秋の隠れ宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※全室大涌谷温泉露天風呂付き</span><span class="text-xs font-black text-amber-800">楽天★5.00満点評価宿</span></div><a href="{make_aff_url(184577)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:to-yellow-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】金乃竹 仙石原の空室・最安プランを見る</span></a></div>
</div>''')

# 宿2: 南阿蘇夢しずく 別邸蘇庵
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-black text-xs rounded-xl shadow-sm">第2位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">熊本 南阿蘇 南阿蘇夢しずく温泉 別邸 蘇庵（そあん）</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 熊本県阿蘇郡南阿蘇村河陰5-56</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.75</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🌾</span> すすき体験：阿蘇五岳と黄金色の大草原パノラマ！全室源泉かけ流し半露天風呂付き離れ宿</h4><p class="text-xs text-stone-700 leading-relaxed">「秋の阿蘇カルデラを埋め尽くす黄金色のすすき大草原をドライブし、雄大な阿蘇五岳を望む全室離れの客室露天風呂で癒やされ、特選肥後あか牛を味わいたい」という九州旅行に最適です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/74601/74601.jpg" alt="別邸蘇庵" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 阿蘇すすき大草原拠点:</span> 草千里ヶ浜や大観峰のすすきパノラマ</div><div><span class="text-stone-400">■ 全16室全室離れ:</span> 全室に趣の異なる源泉かけ流し半露天風呂完備</div><div><span class="text-stone-400">■ 肥後あか牛ステーキ:</span> 旨味あふれる熊本名物あか牛と地元旬野菜会席</div><div><span class="text-stone-400">■ 弱アルカリ美肌温泉:</span> 湯上がり肌がしっとり潤う自家源泉</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 南阿蘇鉄道長陽駅無料送迎あり＋楽天日本の宿アワード受賞＋楽天4.75</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「阿蘇の大自然と黄金色すすき草原の絶景を楽しみ、全室離れの客室露天風呂で贅沢に寛ぎたい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">南阿蘇の豊かな田園と阿蘇五岳を正面に望む全室離れの隠れ宿。秋になると阿蘇の山肌一面が黄金色のすすきで覆われ、夕暮れのグラデーションは息を呑む美しさ。客室の半露天風呂からは阿蘇の山並みを眺めながらいつでも源泉に浸かることができ、夕食のあか牛ステーキも極上です。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「離れ和洋室（源泉半露天風呂付）」（阿蘇五岳を望むテラス付き離れ）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「特選肥後あか牛ステーキ＆熊本創作郷土会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>熊本空港より車約35分。南阿蘇鉄道「長陽駅」より無料送迎あり。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30草千里ヶ浜の黄金すすき散策 → 17:30客室露天風呂 → 18:30あか牛ステーキディナー【2日目】07:30朝風呂 → 08:30和朝食 → 10:00白川水源へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">車を使わずに徒歩だけで観光したい方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-yellow-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">阿蘇すすき草原×全室離れ源泉半露天×肥後あか牛×楽天4.75。南阿蘇最高峰のプライベートリゾートです。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※全室源泉半露天風呂付き離れ</span><span class="text-xs font-black text-amber-800">楽天日本の宿アワード受賞</span></div><a href="{make_aff_url(74601)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:to-yellow-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】南阿蘇夢しずく 別邸蘇庵の空室・最安プランを見る</span></a></div>
</div>''')

# 宿3: 箱根翡翠
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-black text-xs rounded-xl shadow-sm">第3位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">神奈川 箱根仙石原 箱根翡翠（はこねひすい）</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 神奈川県足柄下郡箱根町仙石原837</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.59</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🌾</span> すすき体験：仙石原すすき草原徒歩圏！大涌谷にごり湯＆新姥子温泉の2種名湯と極上日本料理</h4><p class="text-xs text-stone-700 leading-relaxed">「仙石原すすき草原へ歩いて散策し、大涌谷の白濁にごり湯露天風呂で温まり、日本料理『一游』の本格秋懐石を静かに味わいたい」という上質な大人の旅に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/79469/79469.jpg" alt="箱根翡翠" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 仙石原すすき草原徒歩圏:</span> 散策に抜群の立地と早川沿いの静寂</div><div><span class="text-stone-400">■ 2種の源泉露天風呂:</span> 大涌谷白濁硫黄泉＆新姥子温泉の単純温泉</div><div><span class="text-stone-400">■ 日本料理「一游」:</span> 旬の松茸や相模湾の魚介を活かした秋懐石</div><div><span class="text-stone-400">■ 広々とした上質空間:</span> 東急ハーヴェストクラブが誇る最高峰施設</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 仙石案内所前バス停徒歩約5分＋楽天4.59の高評価</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「箱根仙石原のすすき散策と、大涌谷の濃厚な白濁にごり湯、ハイレベルな日本料理を落ち着いた空間で楽しみたい方」に最適です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">仙石原の早川沿いに佇む最高級リゾートホテル。広大な日本庭園と池を配したエントランスは静寂そのもの。大浴場露天風呂には大涌谷の白濁にごり湯が満たされ、硫黄の香りと湯触りに癒やされます。レストラン「一游」でいただく秋の懐石料理も器から盛り付けまで美しく、大人の休日にふさわしい贅沢が味わえます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「デラックス和洋室 / 露天風呂付客室」（早川の自然を望む広々客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「日本料理一游！秋の味覚特選懐石ディナープラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>箱根登山鉄道「箱根湯本駅」よりバス約30分「仙石案内所前」下車徒歩約5分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30仙石原すすき草原散策 → 17:00大涌谷にごり湯露天風呂 → 18:30日本料理一游で秋懐石【2日目】07:30朝風呂 → 08:30和朝食 → 10:00箱根ラリック美術館へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">賑やかなアミューズメント施設を求めるファミリー。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-yellow-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">仙石原すすき徒歩圏×大涌谷にごり湯×日本料理一游×楽天4.59。仙石原で最も洗練された名門リゾートです。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※仙石原すすき草原徒歩圏・大涌谷にごり湯</span><span class="text-xs font-black text-amber-800">東急リゾート最高峰ホテル</span></div><a href="{make_aff_url(79469)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:to-yellow-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】箱根翡翠の空室・最安プランを見る</span></a></div>
</div>''')

# 宿4: きたの風茶寮
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-black text-xs rounded-xl shadow-sm">第4位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">神奈川 箱根仙石原 仙石原温泉 きたの風茶寮</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 神奈川県足柄下郡箱根町仙石原934-29</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.55</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🌾</span> すすき体験：仙石原すすき草原徒歩圏！全10室源泉露天風呂付き＆北海道×箱根の和乃創作懐石</h4><p class="text-xs text-stone-700 leading-relaxed">「仙石原の黄金色すすき草原を散策した後は、全室に源泉掛け流し露天風呂を備えるわずか10室の贅沢宿で、北海道直送の海の幸と箱根の旬が融合した創作懐石を味わいたい」という美食家に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/137410/137410.jpg" alt="きたの風茶寮" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 仙石原すすき草原徒歩圏:</span> すすき散策に最適なロケーション</div><div><span class="text-stone-400">■ 全室源泉露天風呂完備:</span> 弱食塩泉の美肌湯をいつでも独占</div><div><span class="text-stone-400">■ 北海道×箱根創作懐石:</span> ズワイガニ・ウニ・白老牛と箱根野菜</div><div><span class="text-stone-400">■ 個室食事処完備:</span> プライベートな空間で味わう美食ディナー</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 仙石原の中心に佇む隠れ宿＋楽天4.55</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「わずか10室の大人の隠れ宿で、全室露天風呂と北海道×箱根の極上創作懐石をプライベートに楽しみたい方」に最適です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">仙石原の落ち着いた別荘地に佇む和モダン宿。全客室にゆったりとした温泉露天風呂または展望風呂が備わり、時間を気にせず湯浴みを楽しめます。夕食は北海道野口観光グループならではの特選食材が並び、毛ガニやウニ、白老牛と秋の松茸が華麗にコラボレーション。ワインや地酒とのマリアージュも最高です。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「露天風呂付和洋室 / スイート」（源泉露天風呂とテラス付き特別室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「北海道×箱根！和乃創作懐石＆ワインマリアージュプラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>箱根登山鉄道「箱根湯本駅」よりバス約30分「仙石案内所前」下車徒歩約3分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30仙石原すすき草原夕暮れ散策 → 17:30客室露天風呂 → 18:30創作懐石ディナー【2日目】07:30朝風呂 → 08:30和朝食 → 10:30箱根ガラスの森美術館へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">大規模な大浴場や露天風呂を複数巡りたい方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-yellow-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">仙石原すすき徒歩3分×全室露天風呂×北海道創作懐石×楽天4.55。美食とプライベート感を極めた隠れ宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※全室源泉露天風呂付き・全10室</span><span class="text-xs font-black text-amber-800">北海道×箱根の美食隠れ宿</span></div><a href="{make_aff_url(137410)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:to-yellow-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】仙石原温泉 きたの風茶寮の空室・最安プランを見る</span></a></div>
</div>''')

# 宿5: 稲取東海ホテル 湯苑
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-black text-xs rounded-xl shadow-sm">第5位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">静岡 東伊豆細野高原 絶景温泉と魚介満腹の宿 稲取東海ホテル湯苑</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 静岡県賀茂郡東伊豆町稲取1599-1</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.52</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🌾</span> すすき体験：伊豆細野高原の広大すすき大群生散策拠点！相模湾一望の絶景露天風呂＆金目鯛姿煮</h4><p class="text-xs text-stone-700 leading-relaxed">「東京ドーム26個分！相模湾を見下ろす伊豆細野高原のすすき大草原イベントを満喫し、海と一体化する絶景露天風呂と名物金目鯛姿煮を味わいたい」という方に大人気の宿です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5261/5261.jpg" alt="稲取東海ホテル湯苑" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 伊豆細野高原すすき拠点:</span> 車約15分で東京ドーム26個分のすすき草原</div><div><span class="text-stone-400">■ 絶景温泉「洋々湯苑」:</span> 16趣の湯巡りが楽しめる海一望の露天風呂</div><div><span class="text-stone-400">■ 金目鯛姿煮＆舟盛り:</span> 稲取港直送の魚介が並ぶ満腹ディナー</div><div><span class="text-stone-400">■ 全室オーシャンビュー:</span> 相模湾と伊豆七島を一望する絶景客室</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 伊豆稲取駅無料送迎あり＋1泊1万円前後〜の抜群コスパ＋楽天4.52</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「相模湾を見下ろす伊豆細野高原の広大なすすき大群生と、海の絶景露天風呂・金目鯛姿煮をコスパ良く満喫したい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">東伊豆・稲取温泉の波打ち際に建つ絶景宿。秋の細野高原は海と黄金色すすきが同時に見渡せる日本屈指の絶景スポット。散策後は海と一体化する展望露天風呂「洋々湯苑」で潮風を感じながら湯浴み。夕食には名物の金目鯛姿煮や豪華舟盛りが並び、海鮮グルメを満喫できます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「オーシャンビュー和室 / 露天風呂付き客室」（相模湾を一望する客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「金目鯛姿煮＆豪華海鮮舟盛り会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>伊豆急行線「伊豆稲取駅」より無料送迎バス約5分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】14:00細野高原すすきイベント散策 → 16:00チェックイン → 16:30絶景露天風呂 → 18:30金目鯛姿煮ディナー【2日目】07:00朝風呂（朝日鑑賞） → 08:00和朝食 → 10:00稲取港朝市へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">高原の山奥の宿のみを希望する方（海沿い立地のため）。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-yellow-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">細野高原すすき拠点×海一望絶景露天×金目鯛姿煮×楽天4.52。伊豆のすすきと海を満喫できる王道宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※伊豆稲取駅より無料送迎あり</span><span class="text-xs font-black text-amber-800">全室海一望の絶景宿</span></div><a href="{make_aff_url(5261)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:to-yellow-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】稲取東海ホテル 湯苑の空室・最安プランを見る</span></a></div>
</div>''')

# 宿6: 箱根風雅
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-black text-xs rounded-xl shadow-sm">第6位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">神奈川 箱根仙石原 箱根風雅（はこねふうが）</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 神奈川県足柄下郡箱根町仙石原1246-773</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.50</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🌾</span> すすき体験：大人の隠れ家リゾート！仙石原すすき草原散策＆ライブキッチン鉄板焼きステーキ</h4><p class="text-xs text-stone-700 leading-relaxed">「仙石原すすき草原を散策し、中学生未満お断りの静寂な大人空間でライブキッチンの極上鉄板焼きと強羅温泉の露天風呂を満喫したい」というカップルやご夫婦旅に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/162753/162753.jpg" alt="箱根風雅" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 仙石原すすき徒歩圏:</span> 黄金色に輝くすすき草原まで徒歩約15分</div><div><span class="text-stone-400">■ ライブキッチン鉄板焼:</span> 目の前で焼き上げるサーロインステーキディナー</div><div><span class="text-stone-400">■ 大人の隠れ家空間:</span> 静かに寛げる落ち着いたデザイナーズ旅館</div><div><span class="text-stone-400">■ 貸切ジャグジー露天:</span> 星空を眺めながらプライベートに浸かる露天</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 仙石高原バス停無料送迎あり＋1泊1万円台前半〜＋楽天4.50</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「落ち着いた大人の雰囲気の中で、仙石原すすき散策と香ばしい鉄板焼きディナーをおしゃれに楽しみたい方」に最適です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">仙石原の静かな別荘地に佇む大人のための温泉宿。夕食はレストランのライブキッチンでシェフがフランベする鉄板焼きステーキがメインで、音と香りの演出に胸が高鳴ります。強羅温泉から引湯する露天風呂や、別棟の貸切露天ジャグジーで心地よい秋風を感じながら贅沢な時間を過ごせます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「本館 和モダンツイン / 離れ温泉半露天付客室」（洗練された客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「ライブキッチン！国産牛鉄板焼き＆秋の創作ディナープラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>箱根登山バス「仙石高原」バス停より徒歩約7分（送迎あり）。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30仙石原すすき草原散策 → 17:30大浴場露天風呂 → 18:30ライブキッチン鉄板焼きディナー【2日目】07:30朝風呂 → 08:30和朝食 → 10:00大涌谷観光へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">小さなお子様連れのファミリー（大人の宿コンセプトのため）。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-yellow-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">仙石原すすき散策×ライブキッチン鉄板焼き×大人の隠れ家×楽天4.50。カップルの箱根秋旅に最高の宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※仙石高原バス停送迎あり・大人の宿</span><span class="text-xs font-black text-amber-800">鉄板焼きライブキッチンの宿</span></div><a href="{make_aff_url(162753)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:to-yellow-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】箱根風雅の空室・最安プランを見る</span></a></div>
</div>''')

# 宿7: 箱根仙石原プリンスホテル
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-black text-xs rounded-xl shadow-sm">第7位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">神奈川 箱根仙石原 箱根仙石原プリンスホテル</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 神奈川県足柄下郡箱根町仙石原1246</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.49</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🌾</span> すすき体験：客室バルコニーから仙石原すすき草原と外輪山一望！展望温泉露天風呂＆高原リゾート</h4><p class="text-xs text-stone-700 leading-relaxed">「全客室のバルコニーから箱根外輪山と仙石原のすすき高原パノラマを眺め、開放的な展望温泉露天風呂と本格グリルディナーを満喫したい」というリゾート派に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/29435/29435.jpg" alt="仙石原プリンスホテル" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ すすき草原パノラマ:</span> 全室バルコニーから仙石原の自然を一望</div><div><span class="text-stone-400">■ 姥子温泉展望露天:</span> 箱根外輪山の稜線を眺めながら浸かる温泉</div><div><span class="text-stone-400">■ 本格グリルディナー:</span> レストラン「グリル」で味わうシェフ特製フレンチ</div><div><span class="text-stone-400">■ ゴルフコース隣接:</span> 大箱根カントリークラブに隣接する開放的立地</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 仙石高原バス停より無料送迎あり＋1泊9,000円台〜＋楽天4.49</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「客室バルコニーから箱根外輪山と仙石原すすきの絶景を眺め、開放的なリゾートホテルステイをコスパ良く楽しみたい方」に最適です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">仙石原の雄大な自然に囲まれた名門高原リゾート。全客室に広々としたバルコニーが付き、朝夕の清々しい風を感じながら黄金色に染まるすすきと山並みを一望。展望露天風呂からも外輪山のパノラマが広がり、夜には澄み切った満天の星空を眺めながら温泉に浸かれます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「スーペリアツイン / プレミアツイン」（バルコニー付き絶景客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「レストラン『グリル』秋のフレンチコースディナープラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>箱根登山バス「仙石高原」バス停より車約5分（無料送迎あり）。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30バルコニーでティータイム → 17:00外輪山展望露天風呂 → 18:30フレンチグリルディナー【2日目】07:00早朝露天風呂 → 08:00朝食ブッフェ → 09:30仙石原すすき草原散策へ</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">純和風の温泉旅館風情のみを好む方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-yellow-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">全室バルコニー絶景×外輪山展望露天×フレンチグリル×楽天4.49。仙石原の開放感を満喫できる王道ホテルです。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※全室バルコニー付き・仙石高原送迎あり</span><span class="text-xs font-black text-amber-800">箱根外輪山一望リゾート</span></div><a href="{make_aff_url(29435)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:to-yellow-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】箱根仙石原プリンスホテルの空室・最安プランを見る</span></a></div>
</div>''')

# 宿8: 峰山高原ホテルリラクシア
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-black text-xs rounded-xl shadow-sm">第8位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">兵庫 峰山砥峰高原 星空の見えるリゾートホテル 峰山高原ホテルリラクシア</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 兵庫県神崎郡神河町上小田881-146</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.41</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🌾</span> すすき体験：西日本最大級！映画ロケ地「砥峰高原すすき大草原」の拠点＆満天の星空露天風呂</h4><p class="text-xs text-stone-700 leading-relaxed">「映画『ノルウェイの森』や大河ドラマのロケ地となった西日本最大級の砥峰高原（とのみねこうげん）の黄金すすきを満喫し、標高930mの星空露天風呂で癒やされたい」という関西の旅に最適です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/67476/67476.jpg" alt="ホテルリラクシア" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 砥峰高原すすき拠点:</span> 西日本随一の広大すすき草原まで車約15分</div><div><span class="text-stone-400">■ 標高930mの星空露天:</span> 澄み切った満天の星空を仰ぐ露天風呂</div><div><span class="text-stone-400">■ 播州牛フレンチディナー:</span> 地元ブランド牛と高原野菜のコース</div><div><span class="text-stone-400">■ リラクシアの森:</span> ホテル敷地内に広がる美しい白樺の森</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> JR寺前駅より無料シャトルバスあり＋1泊8,000円台〜＋楽天4.41</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「西日本最大級の砥峰高原すすき草原の絶景を心ゆくまで歩き、標高930mの満天の星空と露天風呂を満喫したい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">兵庫県神河町の峰山高原に建つ森のリゾート。砥峰高原の一面に広がる黄金色すすき草原は圧巻のスケールで、夕暮れの美しさは息を呑むほど。宿に戻った後は、標高930mならではの澄んだ空気の中で満天の星空を眺めながら露天風呂に浸かり、播州牛フレンチを堪能できます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「フォレストビューツイン / 和洋室」（高原の森を望む客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「特選播州牛ステーキ＆高原フレンチコースディナープラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>JR播但線「寺前駅」より無料シャトルバス約25分。播但連絡道「神崎南IC」より車約30分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】14:00砥峰高原の黄金すすき散策 → 16:30チェックイン → 17:30星空露天風呂 → 18:30播州牛フレンチディナー【2日目】07:30朝風呂 → 08:30朝食 → 09:30リラクシアの森散歩へ</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">駅前や繁華街の徒歩圏立地を希望する方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-yellow-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">砥峰高原すすき拠点×標高930m星空露天風呂×播州牛フレンチ×楽天4.41。西日本随一のすすき高原宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※寺前駅より無料シャトルバスあり</span><span class="text-xs font-black text-amber-800">砥峰高原すすき散策の拠点宿</span></div><a href="{make_aff_url(67476)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:to-yellow-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】峰山高原ホテルリラクシアの空室・最安プランを見る</span></a></div>
</div>''')

# 宿9: ホテルハーヴェスト箱根甲子園
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-black text-xs rounded-xl shadow-sm">第9位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">神奈川 箱根仙石原 ホテルハーヴェスト箱根甲子園</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 神奈川県足柄下郡箱根町仙石原817-253</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.41</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🌾</span> すすき体験：仙石原の中心に佇む広大な水辺リゾート！最上階展望温泉＆秋の味覚プレミアムブッフェ</h4><p class="text-xs text-stone-700 leading-relaxed">「仙石原すすき草原まで歩いて散策し、最上階の展望温泉露天風呂から箱根の山並みを眺め、秋の味覚満載の贅沢ブッフェを満喫したい」というファミリー・三世代旅行に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/73891/73891.jpg" alt="箱根甲子園" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 仙石原すすき草原徒歩圏:</span> 散策に最も便利な仙石原の中心立地</div><div><span class="text-stone-400">■ 最上階展望大浴場:</span> 箱根外輪山を見晴らす最上階温泉露天風呂</div><div><span class="text-stone-400">■ 秋の特選ブッフェ:</span> ローストビーフや揚げたて天ぷら・秋スイーツ</div><div><span class="text-stone-400">■ 広大な親水空間:</span> 敷地内に広がる水盤と緑豊かなガーデン</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 仙石案内所前バス停徒歩約5分＋充実の館内施設＋楽天4.41</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「仙石原すすき散策に便利な立地で、最上階の展望温泉露天風呂と豪華ブッフェを家族みんなで楽しみたい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">仙石原の中心に広がる親水リゾート。最上階に位置する大浴場露天風呂からは、秋風にそよぐ仙石原の山並みを一望。夕食ブッフェはシェフが目の前でカッティングするローストビーフや季節の天ぷら、秋のデザートが豊富で、大人から子供まで笑顔あふれる滞在が叶います。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「ファミリー和洋室 / バルコニー付洋室」（広々とした快適な客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「秋の味覚！プレミアムディナーブッフェプラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>箱根登山鉄道「箱根湯本駅」よりバス約30分「仙石案内所前」下車徒歩約5分。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30仙石原すすき草原散策 → 17:00最上階展望露天風呂 → 18:30秋の味覚プレミアムブッフェ【2日目】07:30朝風呂 → 08:30朝食ブッフェ → 10:00箱根湿生花園へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">小規模な隠れ宿の静けさのみを求める方。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-yellow-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">仙石原すすき徒歩圏×最上階展望露天風呂×豪華ディナーブッフェ×楽天4.41。仙石原のリゾート代表格です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※仙石案内所前バス停徒歩5分</span><span class="text-xs font-black text-amber-800">広大な水辺の高原リゾート</span></div><a href="{make_aff_url(73891)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:to-yellow-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】ホテルハーヴェスト箱根甲子園の空室・最安プランを見る</span></a></div>
</div>''')

# 宿10: 瀬の本高原ホテル
review_parts.append(f'''<div class="my-12 p-6 md:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl hover:shadow-2xl transition duration-300">
<div class="flex flex-wrap items-center justify-between border-b border-amber-100 pb-4 mb-4 gap-2"><div class="flex items-center gap-3"><span class="px-3.5 py-1.5 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-black text-xs rounded-xl shadow-sm">第10位</span><h3 class="text-lg md:text-xl font-extrabold text-stone-900">熊本 阿蘇瀬の本 黒川温泉 瀬の本高原ホテル</h3></div><div class="flex items-center gap-2"><span class="text-xs text-stone-500 font-bold">📍 熊本県阿蘇郡南小国町満願寺5644</span><span class="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-300 font-black text-xs rounded-full shadow-sm">⭐ 4.40</span></div></div>
<div class="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🌾</span> すすき体験：標高920m！阿蘇くじゅう・黄金のすすき大草原を一望する絶景露天風呂「絶景の湯」</h4><p class="text-xs text-stone-700 leading-relaxed">「阿蘇・瀬の本高原の果てしなく広がる黄金色すすき大草原をドライブし、遮るもののない大パノラマ露天風呂『絶景の湯』から夕日と阿蘇五岳を眺めたい」という絶景派に大人気です。</p></div>
<div class="mb-6 relative rounded-2xl overflow-hidden shadow-md group"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/37963/37963.jpg" alt="瀬の本高原ホテル" class="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition duration-500" loading="lazy" /><div class="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-3 py-1 rounded-lg">公式提供写真</div></div>
<div class="mb-6 p-4 rounded-2xl bg-stone-900 text-amber-300 text-xs font-mono grid grid-cols-1 md:grid-cols-2 gap-2.5 shadow-inner"><div><span class="text-stone-400">■ 標高920mすすき大草原:</span> ホテル周辺一面に広がる黄金色の草原</div><div><span class="text-stone-400">■ 絶景露天「絶景の湯」:</span> 阿蘇五岳と夕日を一望するパノラマ温泉</div><div><span class="text-stone-400">■ 熊本ブランド牛会席:</span> あか牛や肥後馬刺しなど九州の味覚</div><div><span class="text-stone-400">■ 黒川温泉郷至近:</span> 黒川温泉街まで車約5分の湯巡り拠点</div><div class="md:col-span-2"><span class="text-stone-400">■ 特徴:</span> 1泊1万円前後の良心価格＋黒川温泉郷無料送迎あり＋楽天4.40</div></div>
<div class="space-y-4 text-xs text-stone-700 leading-relaxed">
<div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200"><h4 class="font-black text-emerald-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-emerald-600">✅</span> この宿を選ぶべき人</h4><p class="text-emerald-900">「阿蘇・瀬の本高原の圧倒的な黄金色すすきパノラマと、絶景露天風呂からの夕日をコスパ良く体験したい方」に完璧です。</p></div>
<div class="p-4 rounded-xl bg-amber-50/60 border border-amber-200"><h4 class="font-black text-amber-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-amber-600">🛁</span> この宿でしか得られない特別な宿泊体験（本音レビュー）</h4><p class="text-stone-800 leading-relaxed">阿蘇くじゅう国立公園の瀬の本高原に建つ絶景リゾートホテル。秋にはホテルの目の前一面が黄金色のすすき大草原となり、風になびく銀の波は壮観。名物露天風呂「絶景の湯」からは阿蘇五岳に沈む茜色の夕日を湯船から一望でき、一生忘れられない感動を味わえます。</p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3"><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🛏️ おすすめ客室タイプ</h5><p class="text-stone-600">「阿蘇五岳側 和室 / 洋室」（大草原と山並みを望む客室）</p></div><div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200"><h5 class="font-bold text-stone-900 text-xs mb-1">🍽️ おすすめ夕食プラン</h5><p class="text-stone-600">「熊本美味！あか牛＆肥後馬刺し特選会席プラン」</p></div></div>
<div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200"><h4 class="font-black text-sky-950 text-xs mb-1.5 flex items-center gap-1.5"><span class="text-sky-600">🗺️</span> 交通アクセス＆おすすめ1泊2日タイムスケジュール</h4><p class="text-stone-700 mb-2"><strong>【アクセス】</strong>九州道「熊本IC」または大分道「日田IC」より車約60分（黒川温泉バス停より送迎あり）。</p><p class="text-stone-700"><strong>【滞在プラン】</strong>【1日目】15:00チェックイン → 15:30瀬の本高原すすきドライブ → 17:00絶景の湯で夕日鑑賞 → 18:30あか牛会席ディナー【2日目】07:00朝風呂（朝霧鑑賞） → 08:00和洋朝食 → 09:30黒川温泉街へ出発</p></div>
<div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200"><h4 class="font-black text-rose-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-rose-600">⚠️</span> 逆に向いていない人</h4><p class="text-rose-900">温泉街の路地裏散策を徒歩ですぐ楽しみたい方（高原立地のため）。</p></div>
<div class="p-4 rounded-xl bg-gradient-to-r from-amber-600/10 via-yellow-600/10 to-amber-600/10 border-2 border-amber-300"><h4 class="font-black text-amber-950 text-xs mb-1 flex items-center gap-1.5"><span class="text-amber-600">💡</span> 編集部の結論：「だから、この旅行ならここ」</h4><p class="text-amber-950 font-bold">瀬の本すすき大草原×露天風呂「絶景の湯」×あか牛会席×楽天4.40。阿蘇くじゅうの絶景を独占できる宿です。</p></div>
</div>
<div class="mt-6 pt-5 border-t border-amber-100 flex flex-col md:flex-row items-center justify-between gap-3"><div class="text-center md:text-left"><span class="text-[11px] text-stone-500 block">※黒川温泉バス停送迎あり・標高920m</span><span class="text-xs font-black text-amber-800">阿蘇五岳パノラマ絶景宿</span></div><a href="{make_aff_url(37963)}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:to-yellow-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform text-center inline-flex items-center justify-center gap-2"><span>✈️ 【公式】黒川温泉 瀬の本高原ホテルの空室・最安プランを見る</span></a></div>
</div>''')

# FAQ・関連記事ナビ
review_parts.append('''<h2 class="text-xl font-bold text-stone-900 border-b-2 border-amber-500 pb-2 my-8">💡 すすき草原に関するよくある質問（FAQ）</h2>
<div class="space-y-4 my-6">
  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
      <span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">Q</span>
      すすき草原が最も美しく黄金色に輝く見頃の時期はいつ？
    </h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-amber-200">
      <span class="font-bold text-amber-700">A.</span> 例年<strong>「9月下旬から11月中旬」</strong>が見頃です。9月下旬は銀色に白く輝く初々しい姿、10月中旬〜11月上旬は夕日に照らされて完全に黄金色に染まる最盛期を迎え、最もおすすめのシーズンです。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
      <span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">Q</span>
      すすき草原を散策するなら何時頃の時間帯が一番おすすめ？
    </h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-amber-200">
      <span class="font-bold text-amber-700">A.</span> 圧倒的に<strong>「15時30分〜日没前（夕暮れ時）」</strong>がおすすめです。西日が逆光になってすすきの穂を黄金色に輝かせ、息を呑むほど幻想的な光景が広がります。朝露が光る早朝の散策も清々しく人気です。
    </p>
  </div>

  <div class="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-2">
    <h4 class="text-sm font-bold text-stone-900 flex items-center gap-2">
      <span class="px-2 py-0.5 bg-amber-600 text-white text-xs font-black rounded-md">Q</span>
      仙石原すすき草原の散策に特別な靴や装備は必要？
    </h4>
    <p class="text-xs text-stone-700 leading-relaxed pl-6 border-l-2 border-amber-200">
      <span class="font-bold text-amber-700">A.</span> 箱根仙石原のすすき草原は中央に1本の一本道（遊歩道）が整備されているため、スニーカーなどの歩きやすい靴であれば特別な登山装備は不要です。ただし秋の夕方は冷え込むため、防寒着（羽織りもの）をご用意ください。
    </p>
  </div>
</div>

<div class="my-10 p-6 rounded-3xl bg-stone-50 border border-stone-200/90 shadow-sm">
  <div class="flex items-center gap-2 mb-3 border-b border-stone-200 pb-2">
    <span class="px-2.5 py-0.5 bg-stone-800 text-white font-black text-xs rounded-md">旅行ナレッジ</span>
    <h3 class="text-sm font-bold text-stone-900">📍 すすき草原名門宿 宿泊エリアガイド＆旅行情報</h3>
  </div>
  <p class="text-xs text-stone-600 leading-relaxed">
    当ガイドでは、<strong>日本全国の黄金色すすき草原（箱根仙石原・阿蘇くじゅう・砥峰高原・伊豆細野高原）周辺の名門温泉宿・リゾートホテル</strong>を厳選してご紹介しています。
    楽天トラベルの最新空室状況・限定宿泊プラン・リアルタイムクチコミ評価と直結しており、失敗しないホテル選びをサポートします。
  </p>
  <div class="mt-4 pt-3 border-t border-stone-200 flex flex-wrap gap-2 text-2xs text-stone-500">
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">エリア: 全国（神奈川・熊本・兵庫・静岡）</span>
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">テーマ: すすき草原・箱根仙石原・阿蘇大草原・砥峰高原・伊豆細野高原・白濁温泉・露天風呂付き客室</span>
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">更新日: 2026年最新版</span>
    <span class="px-2 py-1 bg-white border border-stone-200 rounded-md">即時予約・公式連携</span>
  </div>
</div>

<div class="my-12 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-stone-50 via-amber-50/40 to-yellow-50/30 border border-amber-200/80 shadow-md">
  <div class="flex items-center gap-2 mb-4 border-b border-amber-200 pb-3">
    <span class="px-3 py-1 bg-amber-600 text-white font-black text-xs rounded-lg">関連記事ナビ</span>
    <h3 class="text-base md:text-lg font-bold text-stone-900">🗺️ あわせて読みたい！秋・冬の絶景＆名湯特集</h3>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
    <div class="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-2">
      <h4 class="text-xs font-black text-amber-900">💎 人気の秋・冬キラー特集</h4>
      <a href="/posts/chestnut-montblanc-autumn-sweets-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-amber-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-amber-700 transition">
        👉 栗尽くし・モンブランが旨い宿10選！比較
      </a>
      <a href="/posts/kinmedai-boiled-shabu-winter-onsen-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-amber-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-amber-700 transition">
        👉 金目鯛の姿煮・しゃぶが旨い温泉宿10選！比較
      </a>
      <a href="/posts/akita-kiritanpo-hinai-chicken-winter-onsen-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-amber-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-amber-700 transition">
        👉 きりたんぽ鍋・比内地鶏が旨い宿10選！比較
      </a>
      <a href="/posts/snow-monster-juhyo-winter-panoramic-resort-hotels-guide" class="block p-2.5 rounded-xl bg-white hover:bg-amber-50 border border-stone-200 text-xs font-bold text-stone-800 hover:text-amber-700 transition">
        👉 樹氷が見える絶景温泉ホテル10選！比較
      </a>
    </div>
    <div class="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-2">
      <h4 class="text-xs font-black text-yellow-900">🎌 エリア別特集</h4>
      <a href="/posts/kanagawa-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-yellow-700">🏨 【神奈川・箱根湯河原】厳選10選ガイド</a>
      <a href="/posts/kumamoto-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-yellow-700">🏨 【熊本・阿蘇黒川温泉】厳選10選ガイド</a>
      <a href="/posts/hyogo-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-yellow-700">🏨 【兵庫・有馬城崎峰山】厳選10選ガイド</a>
      <a href="/posts/shizuoka-hotels-selection-guide" class="block text-xs font-bold text-stone-800 hover:text-yellow-700">🏨 【静岡・伊豆細野高原】厳選10選ガイド</a>
    </div>
  </div>
</div>''')

slug = 'susuki-grassland-autumn-view-hotels-guide'
title = '【2026最新】黄金のすすき草原が見える宿10選！比較'
desc = '秋風に揺れる黄金の絶景！箱根仙石原から阿蘇大草原、砥峰高原、伊豆細野高原まで徹底比較。一面に広がるすすき草原散策と名湯露天風呂・秋の味覚会席が楽しめる名門宿10選を本音レビュー。全施設楽天公式最新空室リンク付き。'

post_data = {
    'id': slug,
    'slug': slug,
    'title': title,
    'description': desc,
    'prefecture': '全国',
    'area': '全国（神奈川・熊本・兵庫・静岡）',
    'hotel_name': '黄金のすすき草原が見える名門温泉宿おすすめ10選',
    'image': 'https://img.travel.rakuten.co.jp/share/HOTEL/184577/184577.jpg',
    'other_images': [],
    'affiliate_url': make_aff_url(184577),
    'price': 75020,
    'rating': 5.0,
    'date': '2026-08-26',
    'categories': [
        '特集10選',
        'キラーコンテンツ',
        '後悔回避',
        'ホテル厳選',
        'すすき草原',
        '箱根仙石原',
        '阿蘇高原',
        '秋の絶景'
    ],
    'keywords': [
        'すすき草原 宿 おすすめ 10選',
        '仙石原 すすき ホテル 比較',
        '曽爾高原 すすき 宿泊 予約',
        'すすき 絶景 温泉旅館 比較',
        '秋 すすき 見頃 露天風呂 比較',
        'すすき 温泉 楽天トラベル'
    ],
    'is_special_feature': True,
    'review': ''.join(review_parts)
}

target_file = f'src/data/posts/{slug}.json'
with open(target_file, 'w', encoding='utf-8') as f:
    json.dump(post_data, f, ensure_ascii=False, indent=2)

print('Generated post file successfully:', target_file)
